import os
import re

def count_questions(filepath):
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
            return len(re.findall(r'question:\s*{', content))
    except:
        return -1

subjects = ['famous-people', 'famous-buildings']
base = 'src/questions/data/subjects'
complete = []
partial = []
todo = []

for subject in subjects:
    subject_path = os.path.join(base, subject)
    if not os.path.exists(subject_path):
        continue
    for root, dirs, files in os.walk(subject_path):
        for file in files:
            if file.endswith('.js') and file.startswith('level'):
                filepath = os.path.join(root, file)
                count = count_questions(filepath)
                rel = os.path.relpath(filepath, base).replace('\\', '/')
                if count == 100:
                    complete.append(rel)
                elif count > 40 and count < 100:
                    partial.append(f'{rel}: {count}')
                elif count == 40:
                    todo.append(rel)

print(f'[DONE] Voltooid (100 vragen): {len(complete)} bestanden')
print(f'[WIP] Bijna klaar: {len(partial)} bestanden')
print(f'[TODO] Nog te doen (40 vragen): {len(todo)} bestanden')
print()
print('Bijna klaar:')
for p in sorted(partial)[:15]:
    print(f'  {p}')