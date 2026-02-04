import os
import re
import json
import anthropic
from pathlib import Path

# Initialize the Anthropic client
client = anthropic.Anthropic(api_key=os.environ.get("ANTHROPIC_API_KEY"))

def count_questions(file_path):
    """Count the number of questions in a file."""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        matches = re.findall(r'\{[^}]*question:', content)
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

def expand_questions(file_path, current_count, target_count=100):
    """Expand questions in a file using Claude API."""
    print(f"\nProcessing: {file_path}")
    print(f"Current questions: {current_count}, Target: {target_count}")

    content = extract_file_content(file_path)
    if not content:
        return False

    # Determine topic and level from file path
    parts = file_path.split(os.sep)
    category = parts[-3]  # e.g., "famous-people" or "famous-buildings"
    subcategory = parts[-2]  # e.g., "Actors and Actresses"
    level = parts[-1].replace('.js', '')  # e.g., "level1"

    needed = target_count - current_count

    prompt = f"""You are a quiz question generator. I need you to expand a quiz file from {current_count} to {target_count} questions ({needed} new questions needed).

FILE PATH: {file_path}
CATEGORY: {category} > {subcategory}
LEVEL: {level}

CURRENT FILE CONTENT:
{content}

TASK:
1. Analyze the existing {current_count} questions to understand:
   - The topic/theme
   - The difficulty level
   - The question style and format
   - The types of facts being tested

2. Generate {needed} NEW unique questions that:
   - Match the same difficulty level
   - Cover different aspects of the topic
   - Don't duplicate existing questions
   - Follow the EXACT same format as existing questions
   - Include all 4 language translations (en, es, de, nl)
   - Have 4 answer options each
   - Include detailed explanations in all 4 languages
   - Have the correct answer index (0-3)

3. Output ONLY the new questions array items in valid JavaScript format, starting with a comma.
   Format each question exactly like this:

      ,
      {{
        question: {{
          en: "English question?",
          es: "Spanish question?",
          de: "German question?",
          nl: "Dutch question?"
        }},
        options: [
          {{ en: "Option 1", es: "Opción 1", de: "Option 1", nl: "Optie 1" }},
          {{ en: "Option 2", es: "Opción 2", de: "Option 2", nl: "Optie 2" }},
          {{ en: "Option 3", es: "Opción 3", de: "Option 3", nl: "Optie 3" }},
          {{ en: "Option 4", es: "Opción 4", de: "Option 4", nl: "Optie 4" }}
        ],
        correct: 0,
        explanation: {{
          en: "English explanation.",
          es: "Spanish explanation.",
          de: "German explanation.",
          nl: "Dutch explanation."
        }}
      }}

4. Start your response with a comma and the first question object. Do NOT include any preamble, explanation, or markdown code blocks.
5. Ensure all JSON syntax is valid (proper quotes, commas, braces).
6. Make sure translations are accurate and natural in each language.
7. Vary the correct answer index across questions (don't always use 0).

Generate {needed} new questions now:"""

    try:
        # Call Claude API with extended timeout
        message = client.messages.create(
            model="claude-sonnet-4-20250514",
            max_tokens=16000,
            temperature=1.0,
            messages=[
                {"role": "user", "content": prompt}
            ]
        )

        new_questions = message.content[0].text.strip()

        # Find the last question in the original content
        # Look for the closing of the questions array
        questions_end = content.rfind(']')
        if questions_end == -1:
            print("Error: Could not find questions array closing bracket")
            return False

        # Find the position before the closing bracket
        # We need to insert the new questions before the closing ]
        before_closing = content[:questions_end].rstrip()
        after_closing = content[questions_end:]

        # Combine: original questions + new questions + rest of file
        new_content = before_closing + "\n" + new_questions + "\n    " + after_closing

        # Write the expanded content
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(new_content)

        # Verify the new count
        new_count = count_questions(file_path)
        print(f"✓ Expanded to {new_count} questions")

        if new_count >= target_count:
            return True
        else:
            print(f"Warning: Expected {target_count} but got {new_count}")
            return False

    except Exception as e:
        print(f"✗ Error expanding {file_path}: {e}")
        return False

def scan_and_expand_directory(base_dir, target_count=100):
    """Scan directory and expand all files with < target_count questions."""
    files_to_process = []

    # Scan for files
    for root, dirs, files in os.walk(base_dir):
        for file in files:
            if file.endswith('.js') and not any(x in file for x in ['backup', 'truncated', 'expansion', 'partial', 'tmp']):
                file_path = os.path.join(root, file)
                count = count_questions(file_path)
                if 0 < count < target_count:
                    files_to_process.append((file_path, count))

    return sorted(files_to_process, key=lambda x: x[1], reverse=True)

def main():
    base_path = "c:/Users/rbosch/OneDrive - A.S. Watson Europe/prive/RobitQuiz/src/questions/data/subjects"

    # Process famous-people first
    print("=" * 80)
    print("EXPANDING FAMOUS-PEOPLE CATEGORY")
    print("=" * 80)

    people_path = os.path.join(base_path, "famous-people")
    people_files = scan_and_expand_directory(people_path)

    print(f"\nFound {len(people_files)} files to expand in famous-people")

    success_count = 0
    fail_count = 0

    for i, (file_path, current_count) in enumerate(people_files, 1):
        print(f"\n[{i}/{len(people_files)}] ", end="")
        if expand_questions(file_path, current_count):
            success_count += 1
        else:
            fail_count += 1

    print(f"\n\nFamous People Summary: {success_count} succeeded, {fail_count} failed")

    # Process famous-buildings
    print("\n" + "=" * 80)
    print("EXPANDING FAMOUS-BUILDINGS CATEGORY")
    print("=" * 80)

    buildings_path = os.path.join(base_path, "famous-buildings")
    buildings_files = scan_and_expand_directory(buildings_path)

    print(f"\nFound {len(buildings_files)} files to expand in famous-buildings")

    success_count2 = 0
    fail_count2 = 0

    for i, (file_path, current_count) in enumerate(buildings_files, 1):
        print(f"\n[{i}/{len(buildings_files)}] ", end="")
        if expand_questions(file_path, current_count):
            success_count2 += 1
        else:
            fail_count2 += 1

    print(f"\n\nFamous Buildings Summary: {success_count2} succeeded, {fail_count2} failed")

    print("\n" + "=" * 80)
    print("FINAL SUMMARY")
    print("=" * 80)
    print(f"Total files processed: {len(people_files) + len(buildings_files)}")
    print(f"Total succeeded: {success_count + success_count2}")
    print(f"Total failed: {fail_count + fail_count2}")

if __name__ == "__main__":
    main()
