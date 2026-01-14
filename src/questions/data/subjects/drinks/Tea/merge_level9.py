#!/usr/bin/env python3
"""Merge Tea Level 9 - need to add 30 questions total"""

# For now, just merge what we have (7 questions from combined)
# We'll need to continue this in follow-up

with open('level9.js', 'r', encoding='utf-8') as f:
    content = f.read()

start_marker = 'questions: ['
end_marker = '        ]\n    };'
start_idx = content.find(start_marker) + len(start_marker)
end_idx = content.find(end_marker, start_idx)
part1 = content[start_idx:end_idx].strip()

with open('level9_combined.txt', 'r', encoding='utf-8') as f:
    part2 = f.read().strip()

questions_content = part1
if not part1.endswith(','):
    questions_content += ","
questions_content += "\n" + part2

before_questions = content[:content.find(start_marker) + len(start_marker)]
after_questions = content[content.find(end_marker, start_idx):]

output = before_questions + "\n" + questions_content + "\n" + after_questions

with open('level9.js', 'w', encoding='utf-8') as f:
    f.write(output)

import re
final_count = len(re.findall(r'\bquestion:\s*\{', output))
print(f"Merged level9.js with {final_count} questions (need 40 total, still need {40-final_count} more)")
