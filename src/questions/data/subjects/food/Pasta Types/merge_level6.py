#!/usr/bin/env python3
"""Merge Pasta Types Level 6 existing questions with new part 2"""

# Read existing level6.js to extract current questions
with open('level6.js', 'r', encoding='utf-8') as f:
    content = f.read()

# Extract the questions array content (between const level6Questions = [ and ];)
start_marker = 'const level6Questions = ['
end_marker = '];'
start_idx = content.find(start_marker) + len(start_marker)
end_idx = content.find(end_marker, start_idx)
part1 = content[start_idx:end_idx].strip()

# Read part 2
with open('level6_part2.txt', 'r', encoding='utf-8') as f:
    part2_content = f.read()

# Clean part 2 (remove header comment)
part2 = part2_content.replace('// Pasta Types Level 6 - Part 2 (Questions 21-40)\n', '').strip()

# Build complete file
output = """(function() {
    const level6Questions = [
"""

output += part1
if not part1.endswith(','):
    output += ","
output += "\n"
output += part2

output += """
    ];

    if (typeof module !== 'undefined' && module.exports) {
        module.exports = level6Questions;
    } else {
        window.level6Questions = level6Questions;
    }
})();
"""

with open('level6.js', 'w', encoding='utf-8') as f:
    f.write(output)

print("Merged level6.js with 40 questions")
