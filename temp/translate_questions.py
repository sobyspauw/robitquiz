"""
Script to translate English-only questions to es, de, nl
Only translates fields where es/de/nl currently contain English text
"""
import os
import re
import json

# Simple translation dictionaries for common quiz terms
translations = {
    # Questions
    'What': {'es': '¿Qué', 'de': 'Was', 'nl': 'Wat'},
    'Who': {'es': '¿Quién', 'de': 'Wer', 'nl': 'Wie'},
    'Which': {'es': '¿Cuál', 'de': 'Welche', 'nl': 'Welke'},
    'Where': {'es': '¿Dónde', 'de': 'Wo', 'nl': 'Waar'},
    'When': {'es': '¿Cuándo', 'de': 'Wann', 'nl': 'Wanneer'},
    'How': {'es': '¿Cómo', 'de': 'Wie', 'nl': 'Hoe'},
    'Why': {'es': '¿Por qué', 'de': 'Warum', 'nl': 'Waarom'},

    # Common words
    'is': {'es': 'es', 'de': 'ist', 'nl': 'is'},
    'was': {'es': 'fue', 'de': 'war', 'nl': 'was'},
    'the': {'es': 'el/la', 'de': 'der/die/das', 'nl': 'de/het'},
    'and': {'es': 'y', 'de': 'und', 'nl': 'en'},
    'or': {'es': 'o', 'de': 'oder', 'nl': 'of'},
}

def needs_translation(text, lang):
    """Check if text is in English and needs translation"""
    if not text or lang == 'en':
        return False

    # If it contains English question words, it needs translation
    english_indicators = ['What ', 'Who ', 'Which ', 'Where ', 'When ', 'How ', 'Why ']
    return any(text.startswith(ind) for ind in english_indicators)

def simple_translate(text, lang):
    """
    Simple translation - for now just returns the English text with a note
    Real translation should use proper translation API or human translation
    """
    # For this demo, I'll just add language marker
    # In production, use Google Translate API or professional translation
    if lang == 'es':
        return f"{text}"  # Keep English for now - manual translation needed
    elif lang == 'de':
        return f"{text}"  # Keep English for now - manual translation needed
    elif lang == 'nl':
        return f"{text}"  # Keep English for now - manual translation needed
    return text

def count_untranslated():
    """Count how many questions need translation"""
    base = r'c:\Users\rbosch\OneDrive - A.S. Watson Europe\prive\RobitQuiz\src\questions\data\subjects'

    subjects_to_check = ['ai', 'board-games', 'currencies', 'desserts', 'dinosaurs', 'drinks', 'egypt']
    total_untranslated = 0

    for subject in subjects_to_check:
        subject_path = os.path.join(base, subject)
        if not os.path.exists(subject_path):
            continue

        for root, dirs, files in os.walk(subject_path):
            for file in files:
                if file.startswith('level') and file.endswith('.js'):
                    filepath = os.path.join(root, file)
                    try:
                        with open(filepath, 'r', encoding='utf-8', errors='ignore') as f:
                            content = f.read()

                        # Count es: "What/Who/Which..." patterns
                        untranslated = len(re.findall(r'es:\s*"(?:What|Who|Which|Where|When|How|Why)\s+[^"]+?"', content))
                        total_untranslated += untranslated
                    except:
                        pass

    return total_untranslated

if __name__ == '__main__':
    print("Counting untranslated questions...")
    count = count_untranslated()
    print(f"\nTotal question fields needing translation: {count}")
    print(f"Estimated total text fields (including options/explanations): ~{count * 24}")
    print("\nThis requires professional translation - not automated.")
    print("Options:")
    print("1. Use Google Translate API")
    print("2. Manual translation")
    print("3. Professional translation service")
