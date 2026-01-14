#!/usr/bin/env python3
"""Merge Seafood Level 9 parts into complete file"""

# Read the two parts
with open('level9_part1.txt', 'r', encoding='utf-8') as f:
    part1 = f.read()

with open('level9_part2.txt', 'r', encoding='utf-8') as f:
    part2 = f.read()

# Remove the header comments from parts
part1_clean = part1.replace('// Seafood Level 9 - Part 1 (Questions 1-20)\n', '')
part2_clean = part2.replace('// Seafood Level 9 - Part 2 (Questions 21-40)\n', '')

# Build complete file
output = """// Seafood Quiz - Level 9
(function() {
  const level9 = {
    name: {
      en: "Seafood Level 9",
      es: "Mariscos Nivel 9",
      de: "Meeresfrüchte Stufe 9",
      nl: "Zeevruchten Level 9"
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
    module.exports = level9;
  } else if (typeof window !== 'undefined') {
    window.level9 = level9;
  }
})();
"""

with open('level9.js', 'w', encoding='utf-8') as f:
    f.write(output)

print("Created level9.js with 40 seafood questions")
