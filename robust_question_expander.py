#!/usr/bin/env python3
"""
Robust Quiz Question Expander
Expands quiz files from 40 to 100 questions with proper insertion handling.
"""

import os
import re
import json
import anthropic
from pathlib import Path

# Initialize the Anthropic client
client = anthropic.Anthropic(api_key=os.environ.get("ANTHROPIC_API_KEY"))

def count_questions(file_path):
    """Count the number of questions in a file by looking for question: { patterns."""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        # Count occurrences of "question: {" which marks each question
        matches = re.findall(r'question:\s*\{', content)
        return len(matches)
    except Exception as e:
        print(f"Error counting questions in {file_path}: {e}")
        return -1

def extract_file_content(file_path):
    """Read the entire file content."""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            return f.read()
    except Exception as e:
        print(f"Error reading {file_path}: {e}")
        return None

def find_insertion_point(content):
    """
    Find the correct insertion point for new questions.
    Returns the position right before the closing ] of the questions array.
    """
    # Strategy: Find the questions array closing bracket
    # The pattern is: last question's closing brace, then whitespace, then ]

    # Find all closing braces followed by whitespace and ]
    # We want the last one in the questions array
    pattern = r'\}\s*\]\s*\};\s*(?:if\s*\(typeof|$)'
    matches = list(re.finditer(pattern, content))

    if matches:
        # Get the last match (should be the end of questions array)
        last_match = matches[0]
        # Find the ] that closes the questions array
        closing_bracket_pos = content.find(']', last_match.start())
        return closing_bracket_pos

    # Fallback: find the last ] before the module.exports
    export_pos = content.find('if (typeof module')
    if export_pos == -1:
        export_pos = content.find('module.exports')

    if export_pos != -1:
        # Search backwards from module.exports to find the ]
        bracket_pos = content.rfind(']', 0, export_pos)
        if bracket_pos != -1:
            return bracket_pos

    # Last resort: find the last ]
    return content.rfind(']')

def expand_questions(file_path, current_count, target_count=100):
    """Expand questions in a file using Claude API."""
    print(f"\nProcessing: {file_path}")
    print(f"Current questions: {current_count}, Target: {target_count}")

    content = extract_file_content(file_path)
    if not content:
        return False

    # Determine topic and level from file path
    parts = file_path.split(os.sep)
    category = parts[-3] if len(parts) >= 3 else "unknown"
    subcategory = parts[-2] if len(parts) >= 2 else "unknown"
    level = parts[-1].replace('.js', '') if parts else "unknown"

    needed = target_count - current_count

    # Extract a sample question to show the exact format
    sample_match = re.search(
        r'(\{[^}]*question:\s*\{[^}]*\}[^}]*options:\s*\[[^\]]*\][^}]*correct:\s*\d+[^}]*explanation:\s*\{[^}]*\}\s*\})',
        content,
        re.DOTALL
    )
    sample_question = sample_match.group(1) if sample_match else "No sample found"

    prompt = f"""You are a quiz question generator. I need you to generate {needed} NEW quiz questions for this file.

FILE PATH: {file_path}
CATEGORY: {category} > {subcategory}
LEVEL: {level}
CURRENT QUESTIONS: {current_count}
TARGET: {target_count}
NEEDED: {needed}

SAMPLE QUESTION FROM THE FILE (for format reference):
{sample_question[:500]}...

INSTRUCTIONS:
1. Generate EXACTLY {needed} new questions
2. Match the difficulty level of existing questions
3. Follow the EXACT format shown above
4. Include all 4 languages: en, es, de, nl
5. Each question must have 4 answer options
6. Include detailed explanations in all 4 languages
7. Vary the correct answer index (0-3) - don't always use 0
8. Make questions unique and don't duplicate existing content

OUTPUT FORMAT:
Start with a comma, then output {needed} question objects.
Each question should follow this EXACT structure:

      ,
      {{
        question: {{
          "en": "English question text?",
          "es": "Spanish question text?",
          "de": "German question text?",
          "nl": "Dutch question text?"
        }},
        options: [
        {{
          "en": "Option 1 English",
          "es": "Option 1 Spanish",
          "de": "Option 1 German",
          "nl": "Option 1 Dutch"
        }},
        {{
          "en": "Option 2 English",
          "es": "Option 2 Spanish",
          "de": "Option 2 German",
          "nl": "Option 2 Dutch"
        }},
        {{
          "en": "Option 3 English",
          "es": "Option 3 Spanish",
          "de": "Option 3 German",
          "nl": "Option 3 Dutch"
        }},
        {{
          "en": "Option 4 English",
          "es": "Option 4 Spanish",
          "de": "Option 4 German",
          "nl": "Option 4 Dutch"
        }}
        ],
        correct: 2,
        explanation: {{
          "en": "English explanation with details.",
          "es": "Spanish explanation with details.",
          "de": "German explanation with details.",
          "nl": "Dutch explanation with details."
        }}
      }}

IMPORTANT:
- Start your response with a comma (,)
- Do NOT include markdown code blocks (no ```javascript or ```)
- Do NOT include any preamble or explanation text
- Output ONLY the valid JavaScript question objects
- Ensure proper indentation (6 spaces for question start)
- Make sure all quotes are properly escaped
- Vary the correct answer index across questions

Generate {needed} questions now:"""

    try:
        # Call Claude API
        print(f"Calling Claude API to generate {needed} questions...")
        message = client.messages.create(
            model="claude-sonnet-4-20250514",
            max_tokens=16000,
            temperature=1.0,
            messages=[
                {"role": "user", "content": prompt}
            ]
        )

        new_questions_text = message.content[0].text.strip()

        # Remove any markdown code blocks if present
        new_questions_text = re.sub(r'^```javascript\s*', '', new_questions_text)
        new_questions_text = re.sub(r'^```\s*', '', new_questions_text)
        new_questions_text = re.sub(r'\s*```\s*$', '', new_questions_text)
        new_questions_text = new_questions_text.strip()

        # Ensure it starts with a comma
        if not new_questions_text.startswith(','):
            new_questions_text = ',' + new_questions_text

        print(f"Received {len(new_questions_text)} characters of new questions")

        # Find the correct insertion point
        insertion_point = find_insertion_point(content)

        if insertion_point == -1:
            print("Error: Could not find insertion point")
            return False

        print(f"Found insertion point at position {insertion_point}")

        # Split the content at the insertion point
        before_insert = content[:insertion_point]
        after_insert = content[insertion_point:]

        # Create the new content
        # The before_insert ends right before the ]
        # We add new questions, then a newline and proper spacing before ]
        new_content = before_insert + new_questions_text + "\n    " + after_insert

        # Create a backup of the original file
        backup_path = file_path + '.backup'
        with open(backup_path, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"Created backup: {backup_path}")

        # Write the new content
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(new_content)

        print(f"Wrote expanded content to {file_path}")

        # Verify the new count
        new_count = count_questions(file_path)
        print(f"Verification: File now has {new_count} questions (target: {target_count})")

        if new_count >= target_count * 0.95:  # Allow 5% tolerance
            print(f"✓ Success! Expanded from {current_count} to {new_count} questions")
            # Remove backup if successful
            try:
                os.remove(backup_path)
            except:
                pass
            return True
        else:
            print(f"✗ Warning: Expected ~{target_count} but got {new_count}")
            print("Restoring from backup...")
            # Restore from backup
            with open(backup_path, 'r', encoding='utf-8') as f:
                original = f.read()
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(original)
            return False

    except Exception as e:
        print(f"✗ Error expanding {file_path}: {e}")
        import traceback
        traceback.print_exc()

        # Restore from backup if it exists
        backup_path = file_path + '.backup'
        if os.path.exists(backup_path):
            print("Restoring from backup...")
            with open(backup_path, 'r', encoding='utf-8') as f:
                original = f.read()
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(original)

        return False

def scan_directory(base_dir, target_count=100):
    """Scan directory and find all files with < target_count questions."""
    files_to_process = []

    for root, dirs, files in os.walk(base_dir):
        for file in files:
            # Skip backup, temporary, and partial files
            if file.endswith('.js') and not any(x in file for x in ['backup', 'truncated', 'expansion', 'partial', 'tmp', '_new']):
                file_path = os.path.join(root, file)
                count = count_questions(file_path)

                if 0 < count < target_count:
                    files_to_process.append((file_path, count))

    # Sort by count (descending) so we process files with more questions first
    return sorted(files_to_process, key=lambda x: x[1], reverse=True)

def main():
    """Main function to scan and expand quiz files."""
    base_path = r"c:\Users\rbosch\OneDrive - A.S. Watson Europe\prive\RobitQuiz\src\questions\data\subjects"

    print("=" * 80)
    print("ROBUST QUIZ QUESTION EXPANDER")
    print("=" * 80)
    print(f"Base path: {base_path}")
    print()

    # Scan for files to process
    print("Scanning for files with < 100 questions...")
    files_to_process = scan_directory(base_path, target_count=100)

    if not files_to_process:
        print("No files found that need expansion!")
        return

    print(f"\nFound {len(files_to_process)} files to expand:\n")

    # Show the files grouped by count
    from collections import defaultdict
    by_count = defaultdict(list)
    for file_path, count in files_to_process:
        by_count[count].append(file_path)

    for count in sorted(by_count.keys(), reverse=True):
        print(f"{count} questions: {len(by_count[count])} files")

    print("\n" + "=" * 80)

    # Ask for confirmation
    response = input(f"\nExpand {len(files_to_process)} files? (y/n): ").strip().lower()
    if response != 'y':
        print("Cancelled.")
        return

    # Process each file
    success_count = 0
    fail_count = 0

    for i, (file_path, current_count) in enumerate(files_to_process, 1):
        print(f"\n{'=' * 80}")
        print(f"[{i}/{len(files_to_process)}]")
        print('=' * 80)

        if expand_questions(file_path, current_count, target_count=100):
            success_count += 1
        else:
            fail_count += 1

        # Show progress
        print(f"\nProgress: {success_count} succeeded, {fail_count} failed, {len(files_to_process) - i} remaining")

    # Final summary
    print("\n" + "=" * 80)
    print("FINAL SUMMARY")
    print("=" * 80)
    print(f"Total files processed: {len(files_to_process)}")
    print(f"Succeeded: {success_count}")
    print(f"Failed: {fail_count}")
    print(f"Success rate: {success_count / len(files_to_process) * 100:.1f}%")

if __name__ == "__main__":
    main()
