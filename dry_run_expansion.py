#!/usr/bin/env python3
"""
Dry-run expansion script - shows what would be expanded without making changes.
Useful for planning and estimating API costs.
"""

import os
import re
from collections import defaultdict

def count_questions(file_path):
    """Count the number of questions in a file."""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        matches = re.findall(r'question:\s*\{', content)
        return len(matches)
    except Exception as e:
        return -1

def extract_category_info(file_path):
    """Extract category and subcategory from file path."""
    parts = file_path.split(os.sep)
    if 'subjects' in parts:
        idx = parts.index('subjects')
        if len(parts) > idx + 2:
            category = parts[idx + 1]
            subcategory = parts[idx + 2]
            level = parts[-1].replace('.js', '') if parts else ''
            return category, subcategory, level
    return 'unknown', 'unknown', 'unknown'

def scan_directory(base_dir, target_count=100):
    """Scan directory and find all files needing expansion."""
    files_to_process = []

    for root, dirs, files in os.walk(base_dir):
        for file in files:
            if file.endswith('.js') and not any(x in file for x in ['backup', 'truncated', 'expansion', 'partial', 'tmp', '_new', '_expanded']):
                file_path = os.path.join(root, file)
                count = count_questions(file_path)

                if 0 < count < target_count:
                    category, subcategory, level = extract_category_info(file_path)
                    needed = target_count - count
                    files_to_process.append({
                        'path': file_path,
                        'current': count,
                        'needed': needed,
                        'category': category,
                        'subcategory': subcategory,
                        'level': level
                    })

    return files_to_process

def estimate_cost(num_files, avg_tokens_per_file=8000):
    """
    Estimate API cost for Claude Sonnet 4.
    Pricing (as of Jan 2025):
    - Input: $3 per million tokens
    - Output: $15 per million tokens
    """
    # Rough estimate: each file needs ~4000 input tokens + ~8000 output tokens
    input_tokens = num_files * 4000
    output_tokens = num_files * avg_tokens_per_file

    input_cost = (input_tokens / 1_000_000) * 3
    output_cost = (output_tokens / 1_000_000) * 15

    total_cost = input_cost + output_cost

    return {
        'input_tokens': input_tokens,
        'output_tokens': output_tokens,
        'input_cost': input_cost,
        'output_cost': output_cost,
        'total_cost': total_cost
    }

def print_summary(files):
    """Print summary of files to be processed."""
    print("=" * 80)
    print("DRY RUN - EXPANSION PLAN")
    print("=" * 80)
    print()

    print(f"Total files to expand: {len(files)}")
    print()

    # Group by category
    by_category = defaultdict(list)
    for f in files:
        by_category[f['category']].append(f)

    print("BREAKDOWN BY CATEGORY:")
    print("-" * 80)

    for category in sorted(by_category.keys()):
        cat_files = by_category[category]
        total_questions_needed = sum(f['needed'] for f in cat_files)

        print(f"{category}:")
        print(f"  Files to expand: {len(cat_files)}")
        print(f"  Total new questions: {total_questions_needed}")
        print()

    # Calculate totals
    total_current = sum(f['current'] for f in files)
    total_needed = sum(f['needed'] for f in files)
    total_after = total_current + total_needed

    print("-" * 80)
    print(f"Current total questions: {total_current:,}")
    print(f"New questions to generate: {total_needed:,}")
    print(f"Total after expansion: {total_after:,}")
    print()

def print_cost_estimate(files):
    """Print estimated API cost."""
    print("=" * 80)
    print("ESTIMATED API COST")
    print("=" * 80)
    print()

    cost = estimate_cost(len(files))

    print(f"Number of API calls: {len(files)}")
    print()
    print(f"Estimated tokens:")
    print(f"  Input tokens:  {cost['input_tokens']:,}")
    print(f"  Output tokens: {cost['output_tokens']:,}")
    print()
    print(f"Estimated cost (Claude Sonnet 4):")
    print(f"  Input cost:  ${cost['input_cost']:.2f}")
    print(f"  Output cost: ${cost['output_cost']:.2f}")
    print(f"  TOTAL COST:  ${cost['total_cost']:.2f}")
    print()

    # Add time estimate
    avg_seconds_per_file = 20
    total_seconds = len(files) * avg_seconds_per_file
    hours = total_seconds / 3600
    minutes = (total_seconds % 3600) / 60

    print(f"Estimated time: {int(hours)}h {int(minutes)}m")
    print()

def print_detailed_plan(files, limit=50):
    """Print detailed list of files to be processed."""
    print("=" * 80)
    print(f"DETAILED EXPANSION PLAN (showing first {limit})")
    print("=" * 80)
    print()

    # Sort by category, then subcategory, then level
    sorted_files = sorted(files, key=lambda x: (x['category'], x['subcategory'], x['level']))

    print(f"{'Category':<20} {'Subcategory':<30} {'Level':<8} {'Current':<8} {'Needed':<8}")
    print("-" * 80)

    for i, f in enumerate(sorted_files[:limit]):
        print(f"{f['category']:<20} {f['subcategory']:<30} {f['level']:<8} {f['current']:<8} {f['needed']:<8}")

    if len(sorted_files) > limit:
        print(f"\n... and {len(sorted_files) - limit} more files")
    print()

def export_plan(files, output_file):
    """Export the expansion plan to a file."""
    with open(output_file, 'w', encoding='utf-8') as f:
        f.write("QUIZ EXPANSION PLAN\n")
        f.write("=" * 80 + "\n\n")

        # Sort files
        sorted_files = sorted(files, key=lambda x: (x['category'], x['subcategory'], x['level']))

        f.write(f"{'Category':<20} {'Subcategory':<30} {'Level':<8} {'Current':<8} {'Needed':<8}\n")
        f.write("-" * 80 + "\n")

        for file_info in sorted_files:
            f.write(f"{file_info['category']:<20} {file_info['subcategory']:<30} {file_info['level']:<8} {file_info['current']:<8} {file_info['needed']:<8}\n")

        f.write("\n")
        f.write("=" * 80 + "\n")
        f.write(f"Total files: {len(files)}\n")
        f.write(f"Total questions to generate: {sum(f['needed'] for f in files):,}\n")

    print(f"Plan exported to: {output_file}")

def main():
    """Main function."""
    base_path = r"c:\Users\rbosch\OneDrive - A.S. Watson Europe\prive\RobitQuiz\src\questions\data\subjects"

    print("Scanning for files needing expansion...")
    print(f"Base path: {base_path}")
    print()

    files = scan_directory(base_path, target_count=100)

    if not files:
        print("No files need expansion!")
        return

    # Print summary
    print_summary(files)

    # Print cost estimate
    print_cost_estimate(files)

    # Print detailed plan
    print_detailed_plan(files, limit=50)

    # Ask if user wants to export
    print("=" * 80)
    response = input("Export full plan to file? (y/n): ").strip().lower()

    if response == 'y':
        output_file = os.path.join(
            os.path.dirname(base_path),
            "expansion_plan.txt"
        )
        export_plan(files, output_file)
        print()

    print("=" * 80)
    print("This was a DRY RUN - no files were modified")
    print("To perform the actual expansion, run: python robust_question_expander.py")
    print("=" * 80)

if __name__ == "__main__":
    main()
