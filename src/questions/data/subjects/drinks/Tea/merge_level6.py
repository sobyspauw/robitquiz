#!/usr/bin/env python3
"""Merge Tea Level 6 existing questions with new part 2"""

# Read existing level6.js
with open('level6.js', 'r', encoding='utf-8') as f:
    content = f.read()

# Find the questions array
start_marker = 'questions: ['
end_marker = '        ]\n    };'
start_idx = content.find(start_marker) + len(start_marker)
end_idx = content.find(end_marker, start_idx)
part1 = content[start_idx:end_idx].strip()

# Read part 2
with open('level6_part2.txt', 'r', encoding='utf-8') as f:
    part2 = f.read().strip()

# Build complete questions section
questions_content = part1
if not part1.endswith(','):
    questions_content += ","
questions_content += "\n" + part2

# Replace questions in original file
before_questions = content[:content.find(start_marker) + len(start_marker)]
after_questions = content[content.find(end_marker, start_idx):]

output = before_questions + "\n" + questions_content + "\n" + after_questions

with open('level6.js', 'w', encoding='utf-8') as f:
    f.write(output)

print("Merged level6.js with 40 questions")
