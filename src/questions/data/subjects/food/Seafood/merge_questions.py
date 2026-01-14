#!/usr/bin/env python3
"""Merge seafood questions into level6.js"""

# Read the two parts
with open('level6_part1.txt', 'r', encoding='utf-8') as f:
    part1 = f.read()

with open('level6_part2.txt', 'r', encoding='utf-8') as f:
    part2 = f.read()

# Remove the header comments from part2
part2_questions = part2.split('\n', 2)[2]  # Skip first 2 lines

# Create the full level6.js file
output = """// Seafood Quiz - Level 6
(function() {
  const level6 = {
    name: {
      en: "Seafood Level 6",
      es: "Mariscos Nivel 6",
      de: "Meeresfrüchte Stufe 6",
      nl: "Zeevruchten Level 6"
    },
    questions: [
"""

# Add part1 questions (skip header)
part1_questions = part1.split('\n', 2)[2]  # Skip first 2 lines
output += part1_questions.strip()
output += ",\n"
output += part2_questions.strip()

# Add closing
output += """
    ]
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level6;
  } else if (typeof window !== 'undefined') {
    window.level6 = level6;
  }
})();
"""

# Write to level6.js
with open('level6.js', 'w', encoding='utf-8') as f:
    f.write(output)

print("Successfully merged questions into level6.js")
