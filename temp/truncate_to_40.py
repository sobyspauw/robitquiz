import re

files_to_fix = [
    ('src/questions/data/subjects/famous-people/Artists/level8.js', 49),
    ('src/questions/data/subjects/ai/Neurale netwerken/level10.js', 42),
    ('src/questions/data/subjects/drinks/Traditional Drinks/level2.js', 42),
    ('src/questions/data/subjects/famous-buildings/Colosseum/level3.js', 42),
    ('src/questions/data/subjects/famous-buildings/Colosseum/level7.js', 42),
    ('src/questions/data/subjects/f1/Bekende circuits/level4.js', 42),
    ('src/questions/data/subjects/f1/Bekende circuits/level7.js', 43),
    ('src/questions/data/subjects/f1/Kampioenschappen/level7.js', 43),
    ('src/questions/data/subjects/f1/Legendarische coureurs/level3.js', 44)
]

for filepath, current_count in files_to_fix:
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()

        # Find all question blocks
        pattern = r'{\s*question:\s*{[^}]*}[^}]*}'

        # Find all matches
        matches = list(re.finditer(pattern, content, re.DOTALL))

        if len(matches) >= 40:
            # Find the end of the 40th question block
            fortieth_match = matches[39]

            # Find the closing of this question (look for the explanation closing)
            end_pos = fortieth_match.end()

            # Look for the end of the explanation block after this question
            rest = content[end_pos:]

            # Find the next closing bracket that ends this question completely
            bracket_count = 0
            final_pos = end_pos

            for i, char in enumerate(rest):
                if char == '{':
                    bracket_count += 1
                elif char == '}':
                    bracket_count -= 1
                    if bracket_count < 0:
                        final_pos = end_pos + i + 1
                        break

            # Keep everything up to the 40th question
            new_content = content[:final_pos]

            # Find where to close the array and module
            closing = '''
    ]
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = '''

            # Determine the variable name from the content
            if 'level8' in filepath:
                closing += 'level8;'
            elif 'level10' in filepath:
                closing += 'level10;'
            elif 'level2' in filepath:
                closing += 'level2;'
            elif 'level3' in filepath:
                closing += 'level3;'
            elif 'level7' in filepath:
                closing += 'level7;'
            elif 'level4' in filepath:
                closing += 'level4;'
            elif 'level1' in filepath:
                closing += 'level1;'
            elif 'level5' in filepath:
                closing += 'level5;'
            else:
                closing += 'questions;'

            closing += '''
  }
})();'''

            new_content = new_content.rstrip().rstrip(',') + closing

            with open(filepath, 'w', encoding='utf-8') as f:
                f.write(new_content)

            print(f"Fixed {filepath.split('/')[-2]}/{filepath.split('/')[-1]}: {current_count} -> 40")
        else:
            print(f"Not enough questions in {filepath}: {len(matches)}")

    except Exception as e:
        print(f"Error fixing {filepath}: {str(e)}")

print("\nAll files processed!")