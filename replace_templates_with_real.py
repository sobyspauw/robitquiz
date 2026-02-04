#!/usr/bin/env python3
"""
Replace template questions 48-100 with real adventure book questions in level1.js
"""
import re
import os

# Import the real questions
from create_real_adventure_questions import real_questions_48_100

def format_question_for_js(q, indent=6):
    """Format a question dict into JavaScript object string"""
    spaces = ' ' * indent
    inner = ' ' * (indent + 2)

    js = f"{spaces}{{\n"

    # Question
    js += f"{inner}question: {{\n"
    for lang in ['en', 'es', 'de', 'nl']:
        js += f'{inner}  {lang}: "{q["question"][lang]}",\n'
    js = js[:-2] + "\n"  # Remove last comma
    js += f"{inner}}},\n"

    # Options
    js += f"{inner}options: [\n"
    for opt in q['options']:
        js += f"{inner}  {{ "
        for i, lang in enumerate(['en', 'es', 'de', 'nl']):
            js += f'{lang}: "{opt[lang]}"'
            if i < 3:
                js += ", "
        js += " },\n"
    js = js[:-2] + "\n"  # Remove last comma
    js += f"{inner}],\n"

    # Correct
    js += f"{inner}correct: {q['correct']},\n"

    # Explanation
    js += f"{inner}explanation: {{\n"
    for lang in ['en', 'es', 'de', 'nl']:
        js += f'{inner}  {lang}: "{q["explanation"][lang]}",\n'
    js = js[:-2] + "\n"  # Remove last comma
    js += f"{inner}}}\n"

    js += f"{spaces}}}"

    return js

def replace_templates_in_file():
    """Replace template questions 48-100 with real questions"""
    file_path = r"C:\Users\rbosch\OneDrive - A.S. Watson Europe\prive\RobitQuiz\src\questions\data\subjects\books\Adventure Books\level1.js"

    # Read the file
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    # Find the questions array
    pattern = r'(questions:\s*\[)(.*?)(\]\s*};)'
    match = re.search(pattern, content, re.DOTALL)

    if not match:
        print("Could not find questions array")
        return False

    questions_start = match.group(1)
    questions_content = match.group(2)
    questions_end = match.group(3)

    # Split into individual question blocks
    # We need to carefully parse the questions
    question_blocks = []
    brace_count = 0
    current_block = ""
    in_question = False

    for char in questions_content:
        if char == '{':
            if brace_count == 0:
                if current_block.strip() and in_question:
                    question_blocks.append(current_block)
                current_block = char
                in_question = True
            else:
                current_block += char
            brace_count += 1
        elif char == '}':
            brace_count -= 1
            current_block += char
            if brace_count == 0:
                in_question = False
        else:
            if in_question or char not in [',', '\n', ' ']:
                current_block += char

    if current_block.strip() and in_question:
        question_blocks.append(current_block)

    print(f"Found {len(question_blocks)} existing questions")

    # Keep first 47 questions, replace 48-100
    new_questions = question_blocks[:47]

    # Add real questions 48-100
    for i, q in enumerate(real_questions_48_100, 48):
        if i <= 100:
            new_questions.append(format_question_for_js(q))

    # Rebuild the content
    new_questions_str = ",\n".join(new_questions)
    new_content = content[:match.start()] + questions_start + "\n" + new_questions_str + "\n    " + questions_end + content[match.end():]

    # Write back
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(new_content)

    print(f"Successfully replaced templates with {len(real_questions_48_100)} real questions")
    return True

if __name__ == "__main__":
    success = replace_templates_in_file()
    if success:
        print("✓ Adventure Books level1.js has been updated with real questions")
    else:
        print("✗ Failed to update file")