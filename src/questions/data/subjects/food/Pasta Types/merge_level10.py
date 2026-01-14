#!/usr/bin/env python3
"""Merge Pasta Types Level 10 existing questions with new combined parts"""

# Read existing level10.js to extract current questions
with open('level10.js', 'r', encoding='utf-8') as f:
    content = f.read()

# Extract the questions array content
start_marker = 'const level10Questions = ['
end_marker = '];'
start_idx = content.find(start_marker) + len(start_marker)
end_idx = content.find(end_marker, start_idx)
part1 = content[start_idx:end_idx].strip()

# Read combined part 2
with open('level10_combined.txt', 'r', encoding='utf-8') as f:
    part2_content = f.read()

# Clean part 2 (remove header comment if present)
part2 = part2_content.replace('// Pasta Types Level 10 - Part 2\n', '').strip()

# Build complete file
output = """(function() {
    const level10Questions = [
"""

output += part1
if not part1.endswith(','):
    output += ","
output += "\n"
output += part2

output += """
    ];

    if (typeof module !== 'undefined' && module.exports) {
        module.exports = level10Questions;
    } else {
        window.level10Questions = level10Questions;
    }
})();
"""

with open('level10.js', 'w', encoding='utf-8') as f:
    f.write(output)

print("Merged level10.js with 40 questions")
