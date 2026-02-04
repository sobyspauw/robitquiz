import os
import re
from pathlib import Path
from collections import defaultdict

subjects_dir = Path('src/questions/data/subjects')
results = {
    'total': 0,
    'exact_40': 0,
    'less_than_40': [],
    'more_than_40': [],
    'by_subject': defaultdict(lambda: {'files': [], 'less_40': 0})
}

for js_file in subjects_dir.rglob('*.js'):
    if js_file.name.endswith('.tmp'):
        continue
    
    try:
        content = js_file.read_text(encoding='utf-8')
        count = len(re.findall(r'question:\s*["\x27`]', content))
        
        results['total'] += 1
        rel_path = js_file.relative_to(subjects_dir)
        parts = rel_path.parts
        subject = '/'.join(parts[:2])
        
        file_info = {
            'file': str(rel_path),
            'count': count,
            'name': js_file.name
        }
        
        results['by_subject'][subject]['files'].append(file_info)
        
        if count == 40:
            results['exact_40'] += 1
        elif count < 40:
            results['less_than_40'].append(file_info)
            results['by_subject'][subject]['less_40'] += 1
        else:
            results['more_than_40'].append(file_info)
    except Exception as e:
        print(f'Error: {js_file}: {e}')

print('=' * 80)
print('SUMMARY')
print('=' * 80)
print(f'Total files: {results["total"]}')
print(f'Files with exactly 40: {results["exact_40"]}')
print(f'Files with < 40: {len(results["less_than_40"])}')
print(f'Files with > 40: {len(results["more_than_40"])}')
print()
print(f'Completion rate: {results["exact_40"]/results["total"]*100:.1f}%')
print()

print('=' * 80)
print('SUBJECTS NEEDING WORK')
print('=' * 80)
for subject in sorted(results['by_subject'].keys()):
    data = results['by_subject'][subject]
    if data['less_40'] > 0:
        total = len(data['files'])
        print(f'\n{subject}: {data["less_40"]}/{total} files need expansion')
        for f in sorted(data['files'], key=lambda x: x['count']):
            if f['count'] < 40:
                print(f'  {f["name"]}: {f["count"]} questions (need {40-f["count"]} more)')
