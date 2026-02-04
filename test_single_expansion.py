#!/usr/bin/env python3
"""
Test script to expand a single file and verify the result.
"""

import os
import sys

# Add the parent directory to the path
sys.path.insert(0, os.path.dirname(__file__))

from robust_question_expander import expand_questions, count_questions

def test_single_file(file_path):
    """Test expansion on a single file."""
    print("Testing single file expansion")
    print("=" * 80)
    print(f"File: {file_path}")

    # Check if file exists
    if not os.path.exists(file_path):
        print(f"Error: File not found: {file_path}")
        return False

    # Count current questions
    current_count = count_questions(file_path)
    print(f"Current question count: {current_count}")

    if current_count >= 100:
        print("File already has 100+ questions. No expansion needed.")
        return True

    # Expand the file
    print("\nExpanding file...")
    success = expand_questions(file_path, current_count, target_count=100)

    if success:
        new_count = count_questions(file_path)
        print(f"\n✓ SUCCESS! Expanded from {current_count} to {new_count} questions")
        return True
    else:
        print(f"\n✗ FAILED to expand file")
        return False

def main():
    """Main test function."""
    # Test with Beer level1.js which has 40 questions
    test_file = r"c:\Users\rbosch\OneDrive - A.S. Watson Europe\prive\RobitQuiz\src\questions\data\subjects\drinks\Beer\level1.js"

    # Allow passing a different file as command line argument
    if len(sys.argv) > 1:
        test_file = sys.argv[1]

    result = test_single_file(test_file)

    if result:
        print("\n✓ Test PASSED")
        sys.exit(0)
    else:
        print("\n✗ Test FAILED")
        sys.exit(1)

if __name__ == "__main__":
    main()
