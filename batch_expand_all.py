#!/usr/bin/env python3
"""
Batch expansion coordinator for RobitQuiz files.
Manages parallel expansion of multiple files to 100 questions each.
"""

import os
import json
import subprocess
from pathlib import Path
from typing import List, Dict
import concurrent.futures

class BatchExpander:
    def __init__(self):
        self.base_path = Path("src/questions/data/subjects")
        self.target_questions = 100

    def get_expansion_targets(self) -> List[Dict]:
        """Get all files that need expansion, organized by priority."""
        targets = []

        # Priority 1: Social Media Influencers (all need work)
        for level in range(1, 11):
            path = self.base_path / "famous-people/Social Media Influencers" / f"level{level}.js"
            if path.exists():
                targets.append({
                    'path': str(path),
                    'category': 'Social Media Influencers',
                    'level': level,
                    'priority': 1
                })

        # Priority 2: Sports Icons (all need work)
        for level in range(1, 11):
            path = self.base_path / "famous-people/Sports Icons" / f"level{level}.js"
            if path.exists():
                targets.append({
                    'path': str(path),
                    'category': 'Sports Icons',
                    'level': level,
                    'priority': 2
                })

        # Priority 3: Authors and Writers
        for level in range(1, 11):
            path = self.base_path / "famous-people/Authors and Writers" / f"level{level}.js"
            if path.exists():
                targets.append({
                    'path': str(path),
                    'category': 'Authors and Writers',
                    'level': level,
                    'priority': 3
                })

        # Priority 4: Famous Buildings (biggest category)
        buildings = [
            "Big Ben", "Burj Khalifa", "Colosseum", "Eiffel Tower",
            "Empire State Building", "Great Wall of China", "Machu Picchu",
            "Petra", "Pyramids of Giza", "Sagrada Familia", "Taj Mahal"
        ]

        for building in buildings:
            for level in range(1, 11):
                path = self.base_path / "famous-buildings" / building / f"level{level}.js"
                if path.exists():
                    targets.append({
                        'path': str(path),
                        'category': f'Famous Buildings - {building}',
                        'level': level,
                        'priority': 4
                    })

        return sorted(targets, key=lambda x: (x['priority'], x['category'], x['level']))

    def create_expansion_command(self, target: Dict) -> str:
        """Create the command to expand a single file."""
        category = target['category']
        level = target['level']

        # Generate appropriate prompt based on category and level
        if "Social Media" in category:
            topics = self.get_social_media_topics(level)
        elif "Sports" in category:
            topics = self.get_sports_topics(level)
        elif "Authors" in category:
            topics = self.get_authors_topics(level)
        elif "Buildings" in category:
            building = category.split(" - ")[1]
            topics = self.get_building_topics(building, level)
        else:
            topics = "General topics"

        command = f"""
# Expand {category} Level {level}
# Target: 100 questions (add 60 new)
# Topics: {topics}
# Character limits: Level {level} appropriate
"""
        return command

    def get_social_media_topics(self, level: int) -> str:
        """Get appropriate topics for Social Media Influencers by level."""
        if level <= 3:
            return "MrBeast, PewDiePie, Charli D'Amelio, major platforms, viral trends"
        elif level <= 6:
            return "Platform algorithms, monetization, collaborations, content genres"
        else:
            return "Platform history, technical details, industry impact, business models"

    def get_sports_topics(self, level: int) -> str:
        """Get appropriate topics for Sports Icons by level."""
        if level <= 3:
            return "Messi, Ronaldo, LeBron, Serena Williams, major achievements"
        elif level <= 6:
            return "Career statistics, championships, records, rivalries"
        else:
            return "Training methods, career transitions, legacy, influence on sport"

    def get_authors_topics(self, level: int) -> str:
        """Get appropriate topics for Authors and Writers by level."""
        if level <= 3:
            return "Shakespeare, Rowling, Stephen King, famous books"
        elif level <= 6:
            return "Literary movements, writing styles, awards, genres"
        else:
            return "Manuscripts, first editions, literary analysis, influences"

    def get_building_topics(self, building: str, level: int) -> str:
        """Get appropriate topics for Famous Buildings by level."""
        if level <= 3:
            return f"{building} location, construction date, basic facts, visitors"
        elif level <= 6:
            return f"{building} architecture, historical context, cultural significance"
        else:
            return f"{building} technical details, restoration, archaeological findings"

    def generate_progress_report(self):
        """Generate a detailed progress report."""
        targets = self.get_expansion_targets()

        print("=" * 70)
        print("BATCH EXPANSION PLAN")
        print("=" * 70)
        print(f"Total files to expand: {len(targets)}")
        print(f"Estimated questions to add: {len(targets) * 60}")
        print()

        by_priority = {}
        for t in targets:
            p = t['priority']
            if p not in by_priority:
                by_priority[p] = []
            by_priority[p].append(t)

        for priority in sorted(by_priority.keys()):
            items = by_priority[priority]
            categories = set(t['category'].split(' - ')[0] for t in items)
            print(f"Priority {priority}: {', '.join(categories)} ({len(items)} files)")

        print("\n" + "=" * 70)
        print("EXECUTION STRATEGY:")
        print("1. Use parallel AI agents for maximum efficiency")
        print("2. Process by priority order")
        print("3. Validate each file after expansion")
        print("4. Track progress in real-time")

        # Save plan for reference
        with open('batch_expansion_plan.json', 'w') as f:
            json.dump(targets[:50], f, indent=2)
        print("\nDetailed plan saved to batch_expansion_plan.json")

def main():
    expander = BatchExpander()
    expander.generate_progress_report()

    print("\n" + "=" * 70)
    print("Ready to begin batch expansion.")
    print("This will require multiple AI agent sessions.")
    print("Estimated time: 20-30 hours of processing")

if __name__ == "__main__":
    main()