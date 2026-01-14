#!/usr/bin/env python3
"""Merge Seafood Level 10 parts into complete file"""

# Read the two parts
with open('level10_part1.txt', 'r', encoding='utf-8') as f:
    part1 = f.read()

with open('level10_part2.txt', 'r', encoding='utf-8') as f:
    part2 = f.read()

# Remove the header comments from parts
part1_clean = part1.replace('// Seafood Level 10 - Part 1 (Questions 1-20)\n', '')
part2_clean = part2.replace('// Seafood Level 10 - Part 2 (Questions 21-40)\n', '')

# Build complete file
output = """// Seafood Quiz - Level 10
(function() {
  const level10 = {
    name: {
      en: "Seafood Level 10",
      es: "Mariscos Nivel 10",
      de: "Meeresfrüchte Stufe 10",
      nl: "Zeevruchten Level 10"
    },
    questions: [
"""

output += part1_clean.strip()
# Ensure comma between parts
if not part1_clean.strip().endswith(','):
    output += ","
output += "\n"
output += part2_clean.strip()

# Add closing
output += """
    ]
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level10;
  } else if (typeof window !== 'undefined') {
    window.level10 = level10;
  }
})();
"""

with open('level10.js', 'w', encoding='utf-8') as f:
    f.write(output)

print("Created level10.js with 40 seafood questions")
