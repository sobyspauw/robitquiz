#!/usr/bin/env python3
"""
Check the current status of quiz file expansion across all subjects.
Shows which files need expansion and provides statistics.
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

def scan_all_files(base_dir):
    """Scan all quiz files and categorize by question count."""
    results = {
        'complete': [],      # 100+ questions
        'partial': [],       # 40-99 questions
        'incomplete': [],    # < 40 questions
        'error': []          # Could not read
    }

    for root, dirs, files in os.walk(base_dir):
        for file in files:
            # Skip backup and temporary files
            if file.endswith('.js') and not any(x in file for x in ['backup', 'truncated', 'expansion', 'partial', 'tmp', '_new']):
                file_path = os.path.join(root, file)
                count = count_questions(file_path)

                if count < 0:
                    results['error'].append((file_path, count))
                elif count >= 100:
                    results['complete'].append((file_path, count))
                elif count >= 40:
                    results['partial'].append((file_path, count))
                else:
                    results['incomplete'].append((file_path, count))

    return results

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

def print_summary(results):
    """Print a summary of the scan results."""
    total = sum(len(v) for v in results.values())

    print("=" * 80)
    print("QUIZ FILE EXPANSION STATUS")
    print("=" * 80)
    print()

    print(f"Total files: {total}")
    print(f"  [OK] Complete (100+ questions): {len(results['complete'])}")
    print(f"  [!!] Partial (40-99 questions): {len(results['partial'])}")
    print(f"  [XX] Incomplete (< 40 questions): {len(results['incomplete'])}")
    print(f"  [??] Error reading: {len(results['error'])}")
    print()

    # Calculate percentage
    if total > 0:
        complete_pct = len(results['complete']) / total * 100
        print(f"Completion rate: {complete_pct:.1f}%")
        print()

def print_by_category(results):
    """Print results grouped by category."""
    print("=" * 80)
    print("STATUS BY CATEGORY")
    print("=" * 80)
    print()

    # Combine all files
    all_files = []
    for status, files in results.items():
        for file_path, count in files:
            category, subcategory, level = extract_category_info(file_path)
            all_files.append((category, subcategory, level, count, status))

    # Group by category
    by_category = defaultdict(list)
    for category, subcategory, level, count, status in all_files:
        by_category[category].append((subcategory, level, count, status))

    # Print each category
    for category in sorted(by_category.keys()):
        files = by_category[category]

        # Count by status
        complete = sum(1 for _, _, _, s in files if s == 'complete')
        partial = sum(1 for _, _, _, s in files if s == 'partial')
        incomplete = sum(1 for _, _, _, s in files if s == 'incomplete')

        total_cat = len(files)
        pct = complete / total_cat * 100 if total_cat > 0 else 0

        print(f"{category}:")
        print(f"  Total: {total_cat} files")
        print(f"  Complete: {complete} ({pct:.1f}%)")
        print(f"  Partial: {partial}")
        print(f"  Incomplete: {incomplete}")
        print()

def print_files_needing_expansion(results, limit=20):
    """Print files that need expansion (< 100 questions)."""
    print("=" * 80)
    print(f"FILES NEEDING EXPANSION (showing up to {limit})")
    print("=" * 80)
    print()

    # Combine partial and incomplete
    needs_expansion = results['partial'] + results['incomplete']
    needs_expansion.sort(key=lambda x: x[1], reverse=True)

    if not needs_expansion:
        print("No files need expansion!")
        return

    print(f"Total files needing expansion: {len(needs_expansion)}")
    print()

    for file_path, count in needs_expansion[:limit]:
        category, subcategory, level = extract_category_info(file_path)
        relative = file_path.split('subjects')[-1] if 'subjects' in file_path else file_path
        print(f"{count:3d} questions: {category}/{subcategory}/{level}.js")

    if len(needs_expansion) > limit:
        print(f"\n... and {len(needs_expansion) - limit} more files")

def print_detailed_report(results, output_file=None):
    """Print a detailed report of all files."""
    lines = []
    lines.append("=" * 80)
    lines.append("DETAILED EXPANSION REPORT")
    lines.append("=" * 80)
    lines.append("")

    # Process each status category
    for status in ['incomplete', 'partial', 'complete', 'error']:
        files = results[status]
        if not files:
            continue

        status_name = status.upper()
        lines.append(f"\n{status_name} ({len(files)} files):")
        lines.append("-" * 80)

        # Sort files
        sorted_files = sorted(files, key=lambda x: (extract_category_info(x[0])[0],
                                                     extract_category_info(x[0])[1],
                                                     extract_category_info(x[0])[2]))

        for file_path, count in sorted_files:
            category, subcategory, level = extract_category_info(file_path)
            lines.append(f"  {count:3d} | {category:20s} | {subcategory:30s} | {level}")

    report = "\n".join(lines)

    if output_file:
        with open(output_file, 'w', encoding='utf-8') as f:
            f.write(report)
        print(f"\nDetailed report saved to: {output_file}")
    else:
        print(report)

def main():
    """Main function."""
    base_path = r"c:\Users\rbosch\OneDrive - A.S. Watson Europe\prive\RobitQuiz\src\questions\data\subjects"

    print("Scanning all quiz files...")
    print(f"Base path: {base_path}")
    print()

    results = scan_all_files(base_path)

    # Print summary
    print_summary(results)

    # Print by category
    print_by_category(results)

    # Print files needing expansion
    print_files_needing_expansion(results, limit=30)

    # Ask if user wants detailed report
    print("\n" + "=" * 80)
    response = input("Generate detailed report? (y/n): ").strip().lower()

    if response == 'y':
        output_file = os.path.join(os.path.dirname(base_path), "expansion_report.txt")
        print_detailed_report(results, output_file)

if __name__ == "__main__":
    main()
