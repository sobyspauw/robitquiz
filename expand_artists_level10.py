#!/usr/bin/env python3
"""
Script to expand Artists level10.js from 40 to 100+ questions.
Replaces placeholder questions and adds new high-quality Level 10 questions.
"""

import json
import re

# Read the file
file_path = r"C:\Users\rbosch\OneDrive - A.S. Watson Europe\prive\RobitQuiz\src\questions\data\subjects\famous-people\Artists\level10.js"

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Extract the questions array content
# Find the start of questions array
questions_start = content.find('questions: [')
questions_end = content.rfind(']', questions_start, content.find('};', questions_start))

# Extract header and footer
header = content[:questions_start + len('questions: [')]
footer = content[questions_end:]

# Parse existing questions to find real ones
# We need to count and identify real vs placeholder questions
lines = content[questions_start:questions_end].split('\n')

print(f"Total content length: {len(content)}")
print(f"Questions section starts at: {questions_start}")
print(f"Questions section ends at: {questions_end}")
print(f"Number of lines in questions section: {len(lines)}")

# Count questions
real_questions_count = 0
placeholder_count = 0

for line in lines:
    if 'Advanced question' in line and 'about Artists' in line:
        placeholder_count += 1
    elif '"en":' in line and 'question' in lines[max(0, lines.index(line)-2):lines.index(line)]:
        if 'Advanced question' not in line:
            real_questions_count += 1

print(f"\nEstimated real questions: {real_questions_count}")
print(f"Estimated placeholder questions: {placeholder_count}")
print(f"\nFirst 100 chars of questions section: {content[questions_start:questions_start+100]}")
