#!/usr/bin/env python3
import re

# Read the file
with open(r'C:\Users\rbosch\OneDrive - A.S. Watson Europe\prive\RobitQuiz\src\questions\data\subjects\f1\Kampioenschappen\level8.js', 'r', encoding='utf-8') as f:
    content = f.read()

# Find where the 40th question ends by looking for the 40th complete question block
# We need to find the pattern of question objects and keep only first 40

# Split by 'question:' to find individual questions
parts = content.split('question:')

# Keep the header (everything before first question)
result = parts[0]

# Add back the first 40 questions
for i in range(1, min(41, len(parts))):
    result += 'question:' + parts[i]

# Find where the questions array should close
# Look for the last complete question object ending
last_question_end = result.rfind('}')
if last_question_end > 0:
    # Find the second to last } which closes the explanation
    count = 0
    pos = len(result) - 1
    while pos > 0 and count < 2:
        if result[pos] == '}':
            count += 1
            if count == 2:
                # This is where the last question object ends
                result = result[:pos+1]
                break
        pos -= 1

    # Add the closing of the questions array and module export
    result += """
    ]
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level8;
  }
})();"""

# Write the fixed file
with open(r'C:\Users\rbosch\OneDrive - A.S. Watson Europe\prive\RobitQuiz\src\questions\data\subjects\f1\Kampioenschappen\level8_fixed.js', 'w', encoding='utf-8') as f:
    f.write(result)

print("File fixed and saved as level8_fixed.js")

# Count questions in the fixed file
fixed_questions = result.count('question:')
print(f"Questions in fixed file: {fixed_questions}")