import os
import re
from pathlib import Path

ai_dir = Path(r"src/questions/data/subjects/ai")

categories = {}

for subdir in sorted(ai_dir.iterdir()):
    if subdir.is_dir():
        name = subdir.name
        js_files = list(subdir.glob("*.js"))
        total = len(js_files)
        
        with_templates = 0
        for js_file in js_files:
            try:
                content = js_file.read_text(encoding='utf-8')
                if "Alternative AI concept" in content:
                    with_templates += 1
            except:
                pass
        
        completed = total - with_templates
        categories[name] = {
            'total': total,
            'completed': completed,
            'templates': with_templates
        }

print("\n=== AI QUESTION FILES STATUS ===\n")
total_files = 0
total_completed = 0
total_templates = 0

for name, stats in sorted(categories.items()):
    status = "COMPLETE" if stats['templates'] == 0 else f"{stats['templates']} need work"
    print(f"{name:35} {stats['completed']:3}/{stats['total']:3} files - {status}")
    total_files += stats['total']
    total_completed += stats['completed']
    total_templates += stats['templates']

print(f"\n{'TOTAL':35} {total_completed:3}/{total_files:3} files ({total_templates} with templates)")
print(f"\nProgress: {total_completed}/{total_files} = {100*total_completed/total_files:.1f}%")
