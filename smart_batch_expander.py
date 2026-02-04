#!/usr/bin/env python3
"""
Smart batch expander that processes files in smaller chunks.
Focuses on completing one category at a time efficiently.
"""

import os
import json
import re
import subprocess
from pathlib import Path
from typing import List, Dict

class QuizExpander:
    def __init__(self):
        self.base_path = Path("src/questions/data/subjects")

    def get_priority_files(self) -> List[Dict]:
        """Get files organized by priority for expansion."""
        priorities = []

        # Priority 1: Complete famous-people categories
        famous_people = [
            ("famous-people/Authors and Writers", list(range(1, 11))),
            ("famous-people/Social Media Influencers", list(range(1, 11))),
            ("famous-people/Sports Icons", list(range(1, 11))),
            ("famous-people/Actors and Actresses", list(range(3, 11))),
            ("famous-people/Historical Figures", list(range(2, 11))),
            ("famous-people/Political Leaders", list(range(2, 11))),
            ("famous-people/Scientists", list(range(3, 11))),
            ("famous-people/Entrepreneurs", list(range(3, 11))),
            ("famous-people/Musicians", list(range(4, 11))),
            ("famous-people/Artists", [9, 10]),
        ]

        # Priority 2: All famous-buildings
        famous_buildings = [
            "Big Ben", "Burj Khalifa", "Colosseum", "Eiffel Tower",
            "Empire State Building", "Great Wall of China", "Machu Picchu",
            "Petra", "Pyramids of Giza", "Sagrada Familia", "Taj Mahal"
        ]

        for building in famous_buildings:
            for level in range(1, 11):
                path = self.base_path / "famous-buildings" / building / f"level{level}.js"
                if path.exists():
                    count = self.count_questions(str(path))
                    if count < 100:
                        priorities.append({
                            'path': str(path),
                            'category': f"famous-buildings/{building}",
                            'level': level,
                            'current_count': count,
                            'needed': 100 - count,
                            'priority': 2
                        })

        for category, levels in famous_people:
            for level in levels:
                path = self.base_path / category / f"level{level}.js"
                if path.exists():
                    count = self.count_questions(str(path))
                    if count < 100:
                        priorities.append({
                            'path': str(path),
                            'category': category,
                            'level': level,
                            'current_count': count,
                            'needed': 100 - count,
                            'priority': 1
                        })

        return sorted(priorities, key=lambda x: (x['priority'], x['category'], x['level']))

    def count_questions(self, file_path: str) -> int:
        """Count questions in a file."""
        try:
            with open(file_path, 'r', encoding='utf-8') as f:
                content = f.read()
                return len(re.findall(r'question:\s*{', content))
        except:
            return 0

    def create_expansion_script(self, file_info: Dict) -> str:
        """Create a Node.js script to expand a single file."""
        category_name = file_info['category'].split('/')[-1]
        level = file_info['level']

        # Determine difficulty description
        if level <= 3:
            difficulty = "beginner"
            char_limits = "120/100/350"
        elif level <= 6:
            difficulty = "intermediate"
            char_limits = "140/100/400"
        elif level <= 8:
            difficulty = "advanced"
            char_limits = "140/100/400"
        else:
            difficulty = "expert"
            char_limits = "160/100/450"

        script = f"""
const fs = require('fs');
const path = require('path');

// Read existing file
const filePath = '{file_info['path'].replace(os.sep, '/')}';
const content = fs.readFileSync(filePath, 'utf8');

// Parse existing questions
const match = content.match(/questions:\\s*\\[([\\s\\S]*?)\\]\\s*\\}};/);
if (!match) {{
    console.error('Could not parse questions array');
    process.exit(1);
}}

// Count existing questions
const existingCount = (content.match(/question:\\s*{{/g) || []).length;
console.log(`Current questions: ${{existingCount}}`);

if (existingCount >= 100) {{
    console.log('File already has 100+ questions');
    process.exit(0);
}}

// This is a template - in production, you'd generate actual questions here
console.log(`Need to add ${{100 - existingCount}} questions for {category_name} level {level}`);
console.log(`Difficulty: {difficulty}, Character limits: {char_limits}`);

// For now, just report status
console.log('Ready for expansion via AI agent');
"""
        return script

    def generate_status_report(self):
        """Generate a detailed status report."""
        files = self.get_priority_files()

        print("=" * 70)
        print("EXPANSION STATUS REPORT")
        print("=" * 70)

        current_category = None
        category_totals = {}

        for file in files:
            cat = file['category'].split('/')[0]
            if cat not in category_totals:
                category_totals[cat] = {'files': 0, 'questions_needed': 0}
            category_totals[cat]['files'] += 1
            category_totals[cat]['questions_needed'] += file['needed']

        print("\nSUMMARY BY CATEGORY:")
        for cat, totals in category_totals.items():
            print(f"{cat:25} - {totals['files']:3} files, {totals['questions_needed']:4} questions needed")

        print("\n" + "=" * 70)
        print(f"TOTAL: {len(files)} files need expansion")
        print(f"TOTAL QUESTIONS NEEDED: {sum(f['needed'] for f in files)}")

        print("\n" + "=" * 70)
        print("TOP 10 PRIORITY FILES:")
        for i, file in enumerate(files[:10], 1):
            cat_short = file['category'].replace('famous-people/', 'FP/').replace('famous-buildings/', 'FB/')
            print(f"{i:2}. {cat_short:30} L{file['level']:2} - needs {file['needed']:2} more (has {file['current_count']})")

        return files

def main():
    expander = QuizExpander()
    files = expander.generate_status_report()

    print("\n" + "=" * 70)
    print("NEXT STEPS:")
    print("1. Run targeted expansion on priority files")
    print("2. Use AI agents to generate culturally appropriate questions")
    print("3. Validate all 4 language translations")
    print("4. Ensure character limits are respected")
    print("5. Verify factual accuracy")

    # Save priority list for reference
    with open('expansion_priorities.json', 'w') as f:
        json.dump(files[:20], f, indent=2)
    print("\nPriority list saved to expansion_priorities.json")

if __name__ == "__main__":
    main()