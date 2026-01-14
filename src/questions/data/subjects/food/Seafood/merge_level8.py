#!/usr/bin/env python3
"""Merge Seafood Level 8 parts into complete file"""

# Read the two parts
with open('level8_part1.txt', 'r', encoding='utf-8') as f:
    part1 = f.read()

with open('level8_part2.txt', 'r', encoding='utf-8') as f:
    part2 = f.read()

# Remove the header comments from parts
part1_clean = part1.replace('// Seafood Level 8 - Part 1 (Questions 1-20)\n', '')
part2_clean = part2.replace('// Seafood Level 8 - Part 2 (Questions 21-40)\n', '')

# Build complete file
output = """// Seafood Quiz - Level 8
(function() {
  const level8 = {
    name: {
      en: "Seafood Level 8",
      es: "Mariscos Nivel 8",
      de: "Meeresfrüchte Stufe 8",
      nl: "Zeevruchten Level 8"
    },
    questions: [
"""

output += part1_clean.strip()
output += ",\n"
output += part2_clean.strip()

# Add closing
output += """
    ]
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level8;
  } else if (typeof window !== 'undefined') {
    window.level8 = level8;
  }
})();
"""

with open('level8.js', 'w', encoding='utf-8') as f:
    f.write(output)

print("Created level8.js with 40 seafood questions")
