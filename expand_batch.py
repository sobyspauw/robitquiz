import os
import re
import time
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
        return -1

def extract_file_content(file_path):
    """Read the entire file content."""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            return f.read()
    except Exception as e:
        return None

def expand_file_to_100(file_path):
    """Expand a single file from 40 to 100 questions."""
    content = extract_file_content(file_path)
    if not content:
        return False, "Could not read file"

    current_count = count_questions(file_path)
    if current_count < 0:
        return False, "Could not count questions"

    if current_count >= 100:
        return True, f"Already has {current_count} questions"

    needed = 100 - current_count

    # Extract topic info from path
    parts = file_path.split(os.sep)
    subcategory = parts[-2]
    level = parts[-1].replace('.js', '')

    # Truncate content for the prompt (show first few and last few questions)
    lines = content.split('\n')
    # Find questions array start
    questions_start_idx = None
    for i, line in enumerate(lines):
        if 'questions: [' in line:
            questions_start_idx = i
            break

    if questions_start_idx is None:
        return False, "Could not find questions array"

    # Take first 100 lines after questions start for context
    context_lines = lines[questions_start_idx:min(questions_start_idx + 150, len(lines))]
    context = '\n'.join(context_lines)

    prompt = f"""You are expanding a quiz file. Generate {needed} new questions for:

TOPIC: {subcategory}
LEVEL: {level}
CURRENT COUNT: {current_count}
NEEDED: {needed} new questions

EXISTING QUESTIONS SAMPLE:
{context}
[... file continues with more questions ...]

Generate {needed} NEW questions that:
- Match the difficulty and style of existing questions
- Cover different aspects of {subcategory}
- Include all 4 languages (en, es, de, nl)
- Have 4 options each with varied correct indices
- Include detailed explanations

Output format - start with comma, then question objects:
      ,
      {{
        question: {{
          en: "...",
          es: "...",
          de: "...",
          nl: "..."
        }},
        options: [
          {{ en: "...", es: "...", de: "...", nl: "..." }},
          {{ en: "...", es: "...", de: "...", nl: "..." }},
          {{ en: "...", es: "...", de: "...", nl: "..." }},
          {{ en: "...", es: "...", de: "...", nl: "..." }}
        ],
        correct: X,
        explanation: {{
          en: "...",
          es: "...",
          de: "...",
          nl: "..."
        }}
      }}

Generate all {needed} questions now. Start with a comma:"""

    try:
        print(f"  Calling Claude API for {needed} questions...")
        message = client.messages.create(
            model="claude-sonnet-4-20250514",
            max_tokens=16000,
            temperature=1.0,
            messages=[{"role": "user", "content": prompt}]
        )

        new_questions = message.content[0].text.strip()

        # Find where to insert
        questions_end = content.rfind(']')
        if questions_end == -1:
            return False, "Could not find questions array end"

        # Insert new questions
        before_closing = content[:questions_end].rstrip()
        after_closing = content[questions_end:]
        new_content = before_closing + "\n" + new_questions + "\n    " + after_closing

        # Write back
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(new_content)

        # Verify
        new_count = count_questions(file_path)
        if new_count >= 100:
            return True, f"Expanded to {new_count} questions"
        else:
            return False, f"Only reached {new_count} questions"

    except Exception as e:
        return False, f"API Error: {str(e)}"

def get_files_to_expand(base_dir):
    """Get all files that need expansion."""
    files = []
    for root, dirs, filenames in os.walk(base_dir):
        for filename in filenames:
            if filename.endswith('.js') and not any(x in filename for x in ['backup', 'truncated', 'expansion', 'partial', 'tmp']):
                file_path = os.path.join(root, filename)
                count = count_questions(file_path)
                if 0 < count < 100:
                    files.append(file_path)
    return files

def main():
    base_path = "c:/Users/rbosch/OneDrive - A.S. Watson Europe/prive/RobitQuiz/src/questions/data/subjects"

    # Get all files needing expansion
    print("Scanning for files to expand...")
    people_files = get_files_to_expand(os.path.join(base_path, "famous-people"))
    buildings_files = get_files_to_expand(os.path.join(base_path, "famous-buildings"))

    all_files = people_files + buildings_files
    print(f"Found {len(all_files)} files to expand ({len(people_files)} people, {len(buildings_files)} buildings)")

    # Process each file
    success = 0
    failed = 0

    for i, file_path in enumerate(all_files, 1):
        rel_path = file_path.split('subjects' + os.sep)[1]
        print(f"\n[{i}/{len(all_files)}] {rel_path}")

        result, message = expand_file_to_100(file_path)
        print(f"  {message}")

        if result:
            success += 1
        else:
            failed += 1
            # Log failures
            with open('expansion_failures.txt', 'a', encoding='utf-8') as f:
                f.write(f"{file_path}: {message}\n")

        # Small delay to avoid rate limits
        if i % 10 == 0:
            print(f"\n  Progress: {success} succeeded, {failed} failed. Pausing briefly...")
            time.sleep(2)

    print(f"\n{'='*80}")
    print(f"FINAL RESULTS")
    print(f"{'='*80}")
    print(f"Total files: {len(all_files)}")
    print(f"Succeeded: {success}")
    print(f"Failed: {failed}")
    print(f"Success rate: {success/len(all_files)*100:.1f}%")

if __name__ == "__main__":
    main()
