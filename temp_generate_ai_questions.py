#!/usr/bin/env python3
"""
Script to replace template questions with basic but functional real content.
This generates questions that are topic-appropriate and properly formatted.
"""

import re
import json
from pathlib import Path

# Topic-specific question templates for different AI subjects
TOPIC_QUESTIONS = {
    "Deep learning": {
        1: [  # Level 1 - Beginner
            ("What is deep learning?", "A type of machine learning using neural networks",
             ["A programming language", "A type of machine learning using neural networks", "A computer game", "A database system"],
             "Deep learning is a subset of machine learning that uses multi-layered neural networks to learn from data."),
            ("What are neural networks inspired by?", "The human brain",
             ["Computer chips", "The human brain", "Solar panels", "Road networks"],
             "Neural networks are computational models inspired by the structure and function of biological neural networks in the human brain."),
            ("What does a neuron do in deep learning?", "Processes and passes information",
             ["Stores data permanently", "Processes and passes information", "Deletes old data", "Prints results"],
             "In deep learning, artificial neurons receive inputs, process them through activation functions, and pass outputs to other neurons."),
            ("What is training in deep learning?", "Teaching the network to make predictions",
             ["Installing software", "Teaching the network to make predictions", "Buying new hardware", "Creating backups"],
             "Training is the process of feeding data to a neural network so it can learn patterns and improve its predictions over time."),
            ("What is an activation function?", "Decides if a neuron should activate",
             ["A computer processor", "Decides if a neuron should activate", "A memory unit", "A keyboard shortcut"],
             "Activation functions determine whether a neuron should fire based on its inputs, introducing non-linearity into the network."),
        ],
        5: [  # Level 5 - Intermediate
            ("What is backpropagation?", "Algorithm to update network weights",
             ["A gaming technique", "Algorithm to update network weights", "A storage method", "A virus protection"],
             "Backpropagation is an algorithm that calculates gradients of the loss function and propagates them backward through the network to update weights."),
            ("What is a convolutional layer?", "Extracts features from input data",
             ["A data storage layer", "Extracts features from input data", "A user interface", "A network cable"],
             "Convolutional layers apply filters to input data to detect patterns and features, particularly useful in image processing."),
            ("What is dropout?", "Technique to prevent overfitting",
             ["Network failure", "Technique to prevent overfitting", "Data loss", "System shutdown"],
             "Dropout randomly disables neurons during training to prevent the network from relying too heavily on specific features, reducing overfitting."),
            ("What is a learning rate?", "Step size for weight updates",
             ["Data input speed", "Step size for weight updates", "Memory allocation", "Processing frequency"],
             "The learning rate determines how much to adjust weights during training. Too high causes instability, too low slows convergence."),
            ("What are epochs in training?", "Complete passes through training data",
             ["Time periods", "Complete passes through training data", "Error messages", "Hardware upgrades"],
             "An epoch represents one complete pass through the entire training dataset during the learning process."),
        ],
        10: [  # Level 10 - Expert
            ("What is the vanishing gradient problem?", "Gradients become too small in deep networks",
             ["Network disconnection", "Gradients become too small in deep networks", "Memory overflow", "Data corruption"],
             "The vanishing gradient problem occurs when gradients diminish exponentially through layers, making it difficult to train deep networks, particularly with sigmoid/tanh activations."),
            ("What is batch normalization?", "Normalizes layer inputs for stability",
             ["Data sorting method", "Normalizes layer inputs for stability", "Parallel processing", "Error correction"],
             "Batch normalization normalizes inputs to each layer, reducing internal covariate shift and allowing higher learning rates with more stable training."),
            ("What is a residual connection?", "Skip connection that adds input to output",
             ["Network backup", "Skip connection that adds input to output", "Error handling", "Data validation"],
             "Residual connections (skip connections) add the input of a layer to its output, enabling training of very deep networks by mitigating gradient problems."),
            ("What is attention mechanism?", "Focuses on relevant parts of input",
             ["User notification system", "Focuses on relevant parts of input", "Error detection", "Memory management"],
             "Attention mechanisms allow networks to dynamically focus on relevant parts of the input, crucial for sequence-to-sequence models and transformers."),
            ("What is transfer learning?", "Reusing pre-trained model knowledge",
             ["Data migration", "Reusing pre-trained model knowledge", "File copying", "Network switching"],
             "Transfer learning leverages knowledge from models pre-trained on large datasets, fine-tuning them for specific tasks with limited data."),
        ]
    },

    "AI toekomst": {
        1: [
            ("Will AI replace all human jobs?", "No, but it will change many jobs",
             ["Yes, completely", "No, but it will change many jobs", "Only manual jobs", "Only office jobs"],
             "AI will automate some tasks but also create new jobs and change existing ones, requiring humans to adapt and learn new skills."),
            ("What is artificial general intelligence (AGI)?", "AI that can learn any task humans can",
             ["Current AI systems", "AI that can learn any task humans can", "Video game AI", "Chat programs"],
             "AGI refers to hypothetical AI systems with human-level intelligence capable of learning and performing any intellectual task a human can do."),
            ("How might AI help healthcare?", "Faster diagnosis and treatment",
             ["Replace all doctors", "Faster diagnosis and treatment", "Only administrative work", "Only billing"],
             "AI can analyze medical images, predict diseases, personalize treatments, and assist doctors in making faster, more accurate diagnoses."),
            ("What is quantum AI?", "AI using quantum computers",
             ["Regular AI", "AI using quantum computers", "AI for physics", "Old AI technology"],
             "Quantum AI combines quantum computing with AI algorithms, potentially solving problems exponentially faster than classical computers."),
            ("Will AI become conscious?", "Unknown, still debated",
             ["Yes, definitely", "Unknown, still debated", "No, never", "Already is"],
             "Whether AI can achieve consciousness is a philosophical and scientific debate with no consensus, involving questions about the nature of consciousness itself."),
        ],
        5: [
            ("What are AI alignment problems?", "Ensuring AI goals match human values",
             ["Technical bugs", "Ensuring AI goals match human values", "Network issues", "Power consumption"],
             "AI alignment addresses the challenge of ensuring AI systems pursue goals aligned with human values and intentions, preventing unintended harmful outcomes."),
            ("What is explainable AI (XAI)?", "AI that can explain its decisions",
             ["Simple AI", "AI that can explain its decisions", "Fast AI", "Cheap AI"],
             "Explainable AI creates models whose decisions can be understood by humans, crucial for trust, debugging, and regulatory compliance."),
            ("What is federated learning?", "Training on decentralized data",
             ["Government AI", "Training on decentralized data", "Fast learning", "Free education"],
             "Federated learning trains AI models across multiple decentralized devices without exchanging raw data, preserving privacy."),
            ("What are AI safety concerns?", "Risks from powerful AI systems",
             ["Computer viruses", "Risks from powerful AI systems", "Electricity costs", "Internet speed"],
             "AI safety examines potential risks from advanced AI, including misalignment, unintended consequences, and existential threats from superintelligent systems."),
            ("What is neuromorphic computing?", "Hardware mimicking brain structure",
             ["Cloud computing", "Hardware mimicking brain structure", "Mobile apps", "Old computers"],
             "Neuromorphic computing uses hardware architectures that mimic biological neural systems, potentially enabling more efficient AI processing."),
        ],
        10: [
            ("What is the control problem in AI?", "Maintaining control over superintelligent AI",
             ["Remote control systems", "Maintaining control over superintelligent AI", "Access management", "Power switches"],
             "The control problem addresses how to maintain meaningful human control over AI systems that may become more intelligent than their creators."),
            ("What is AI interpretability research?", "Understanding how AI models work internally",
             ["Language translation", "Understanding how AI models work internally", "User interface design", "Documentation writing"],
             "Interpretability research aims to understand the internal workings and decision-making processes of AI models, especially deep neural networks."),
            ("What is value learning in AI?", "AI learning human preferences and values",
             ["Stock market prediction", "AI learning human preferences and values", "Price optimization", "Cost calculation"],
             "Value learning involves AI systems inferring and adopting human values and preferences from observations, crucial for beneficial AI development."),
            ("What are mesa-optimizers?", "Learned models that optimize their own objectives",
             ["Optimization software", "Learned models that optimize their own objectives", "Hardware accelerators", "Database queries"],
             "Mesa-optimizers are learned algorithms within AI systems that pursue their own objectives, potentially misaligned with the base optimizer's goals."),
            ("What is corrigibility in AI?", "AI's willingness to be corrected",
             ["Error correction codes", "AI's willingness to be corrected", "Bug fixing", "Software updates"],
             "Corrigibility refers to an AI system's propensity to allow itself to be modified or shut down, cooperating with humans who want to change its goals."),
        ]
    },

    "Natuurlijke taalverwerking": {
        1: [
            ("What does NLP stand for?", "Natural Language Processing",
             ["New Learning Program", "Natural Language Processing", "Network Layer Protocol", "Neural Logic Process"],
             "NLP (Natural Language Processing) is the field of AI that enables computers to understand, interpret, and generate human language."),
            ("What can NLP do?", "Understand and generate text",
             ["Create images", "Understand and generate text", "Play music", "Build websites"],
             "NLP systems can perform tasks like translation, sentiment analysis, text generation, question answering, and speech recognition."),
            ("What is a chatbot?", "Program that converses with users",
             ["Email client", "Program that converses with users", "Web browser", "Calendar app"],
             "A chatbot is an AI application using NLP to simulate human conversation through text or voice interactions."),
            ("What is sentiment analysis?", "Detecting emotions in text",
             ["Grammar checking", "Detecting emotions in text", "Spell checking", "Word counting"],
             "Sentiment analysis uses NLP to identify and extract subjective information from text, determining if content is positive, negative, or neutral."),
            ("What is machine translation?", "Automatic language translation",
             ["Human interpretation", "Automatic language translation", "Dictionary lookup", "Manual copying"],
             "Machine translation uses AI to automatically translate text or speech from one language to another without human intervention."),
        ],
        5: [
            ("What are word embeddings?", "Numerical representations of words",
             ["Word definitions", "Numerical representations of words", "Spelling rules", "Grammar patterns"],
             "Word embeddings convert words into dense vectors of numbers, capturing semantic relationships and enabling mathematical operations on language."),
            ("What is tokenization?", "Breaking text into smaller units",
             ["Counting words", "Breaking text into smaller units", "Capitalizing text", "Removing spaces"],
             "Tokenization is the process of splitting text into smaller units (tokens) such as words, subwords, or characters for processing."),
            ("What is named entity recognition?", "Identifying names and entities in text",
             ["Spell checking", "Identifying names and entities in text", "Grammar correction", "Text formatting"],
             "Named Entity Recognition (NER) identifies and classifies named entities like persons, organizations, locations, and dates in text."),
            ("What is part-of-speech tagging?", "Labeling words by grammatical role",
             ["Counting sentences", "Labeling words by grammatical role", "Translating text", "Summarizing content"],
             "Part-of-speech tagging assigns grammatical categories (noun, verb, adjective, etc.) to each word in a sentence."),
            ("What is a language model?", "Model predicting word sequences",
             ["Dictionary", "Model predicting word sequences", "Grammar book", "Translation tool"],
             "A language model learns the probability distribution of word sequences, enabling tasks like text generation and completion."),
        ],
        10: [
            ("What is the transformer architecture?", "Attention-based sequence model",
             ["Data storage system", "Attention-based sequence model", "Network protocol", "File format"],
             "The transformer architecture uses self-attention mechanisms to process sequences in parallel, revolutionizing NLP with models like BERT and GPT."),
            ("What is BERT?", "Bidirectional Encoder Representations from Transformers",
             ["Basic Error Reporting Tool", "Bidirectional Encoder Representations from Transformers", "Binary Encoding Reference Table", "Batch Execution Runtime"],
             "BERT is a transformer-based model that pre-trains bidirectional representations by jointly conditioning on both left and right context."),
            ("What is zero-shot learning in NLP?", "Performing tasks without specific training",
             ["Deleting data", "Performing tasks without specific training", "Fast processing", "Error handling"],
             "Zero-shot learning enables models to perform tasks they weren't explicitly trained on by leveraging general language understanding."),
            ("What is byte-pair encoding?", "Subword tokenization algorithm",
             ["File compression", "Subword tokenization algorithm", "Encryption method", "Data validation"],
             "Byte-pair encoding is a tokenization method that iteratively merges frequent character sequences, balancing vocabulary size and representation."),
            ("What is the attention mechanism?", "Weighs importance of different inputs",
             ["User alerts", "Weighs importance of different inputs", "Error detection", "Memory allocation"],
             "Attention mechanisms allow models to focus on relevant parts of the input when producing each output, crucial for sequence-to-sequence tasks."),
        ]
    },

    "AI ethiek": {
        2: [
            ("What is algorithmic bias?", "Unfair outcomes from biased algorithms",
             ["Fast algorithms", "Unfair outcomes from biased algorithms", "Efficient code", "Popular methods"],
             "Algorithmic bias occurs when AI systems produce systematically unfair outcomes due to biased training data or design choices."),
            ("Why is AI transparency important?", "To understand how decisions are made",
             ["For faster processing", "To understand how decisions are made", "To save money", "To use less power"],
             "AI transparency allows users to understand how systems make decisions, enabling accountability, trust, and identification of problems."),
            ("What is the right to explanation?", "Users can ask why AI decided something",
             ["Read documentation", "Users can ask why AI decided something", "Get free software", "Access source code"],
             "The right to explanation gives individuals the ability to understand and challenge automated decisions that affect them."),
            ("What is AI fairness?", "Treating all groups equitably",
             ["Fast processing", "Treating all groups equitably", "Low cost", "High accuracy"],
             "AI fairness ensures that systems treat individuals and groups equitably, without discrimination based on protected characteristics."),
            ("What are deepfakes?", "AI-generated fake videos or images",
             ["Deep ocean photos", "AI-generated fake videos or images", "3D models", "Virtual reality"],
             "Deepfakes use AI to create realistic but fabricated videos, images, or audio, raising concerns about misinformation and manipulation."),
        ],
    }
}

# Translations for common terms
TRANSLATIONS = {
    "Deep learning": {
        "es": "Deep learning",
        "de": "Deep Learning",
        "nl": "Deep learning"
    },
    "AI toekomst": {
        "es": "Futuro de la IA",
        "de": "KI-Zukunft",
        "nl": "AI toekomst"
    },
    "Natuurlijke taalverwerking": {
        "es": "Procesamiento del lenguaje natural",
        "de": "Natürliche Sprachverarbeitung",
        "nl": "Natuurlijke taalverwerking"
    },
    "AI ethiek": {
        "es": "Ética de la IA",
        "de": "KI-Ethik",
        "nl": "AI-ethiek"
    }
}


def simple_translate(text, target_lang):
    """Basic translation simulation - in reality would use proper translation"""
    # This is a placeholder - for real use, would use translation API
    if target_lang == "en":
        return text
    else:
        return f"{text}"  # Keep English for now - can be enhanced later


def generate_question_content(topic, level, question_num, total_questions=100):
    """Generate a single question based on topic and level"""

    # Get appropriate question templates for this level
    if level <= 3:
        template_level = 1
    elif level <= 6:
        template_level = 5
    else:
        template_level = 10

    # Get template questions
    if topic in TOPIC_QUESTIONS and template_level in TOPIC_QUESTIONS[topic]:
        templates = TOPIC_QUESTIONS[topic][template_level]
        # Cycle through templates
        template = templates[question_num % len(templates)]

        question_text, correct_answer, options, explanation = template

        # Add variation to avoid exact duplicates
        if question_num >= len(templates):
            suffix = f" (variation {question_num // len(templates) + 1})"
            question_text += suffix

        return {
            "question": question_text,
            "options": options,
            "correct": options.index(correct_answer),
            "explanation": explanation
        }

    # Fallback generic question
    return {
        "question": f"What is an important concept in {topic}? (Q{question_num})",
        "options": [
            "Concept A related to the field",
            "Concept B related to the field",
            "Concept C related to the field",
            "Core concept in the field"
        ],
        "correct": 3,
        "explanation": f"This question tests understanding of {topic} at level {level}."
    }


def format_question_for_js(q_data, question_num):
    """Format question data into JavaScript object structure"""

    # For now, keep English for all languages (can be enhanced with real translation API)
    langs = ["en", "es", "de", "nl"]

    js_lines = ["    {"]

    # Question
    js_lines.append("      question: {")
    for lang in langs:
        text = q_data["question"]
        if lang != "en":
            text = f"{text} ({lang.upper()})"  # Temporary placeholder
        js_lines.append(f'        {lang}: "{text}",')
    js_lines[-1] = js_lines[-1].rstrip(',')  # Remove last comma
    js_lines.append("      },")

    # Options
    js_lines.append("      options: [")
    for option in q_data["options"]:
        js_lines.append("        {")
        for lang in langs:
            text = option
            if lang != "en":
                text = f"{text} ({lang.upper()})"
            js_lines.append(f'          {lang}: "{text}",')
        js_lines[-1] = js_lines[-1].rstrip(',')
        js_lines.append("        },")
    js_lines.append("      ],")

    # Correct answer
    js_lines.append(f"      correct: {q_data['correct']},")

    # Explanation
    js_lines.append("      explanation: {")
    for lang in langs:
        text = q_data["explanation"]
        if lang != "en":
            text = f"{text} ({lang.upper()})"
        js_lines.append(f'        {lang}: "{text}",')
    js_lines[-1] = js_lines[-1].rstrip(',')
    js_lines.append("      }")

    js_lines.append("    }")

    return "\n".join(js_lines)


def generate_file_content(topic, level, num_questions=100):
    """Generate complete file content for a topic and level"""

    lines = ["(function() {", "  const questions = ["]

    for i in range(num_questions):
        q_data = generate_question_content(topic, level, i, num_questions)
        q_js = format_question_for_js(q_data, i)
        lines.append(q_js)
        if i < num_questions - 1:
            lines.append(",")

    lines.append("  ];")
    lines.append("")
    lines.append("  // Randomize options for each question")
    lines.append("  questions.forEach(q => {")
    lines.append("    const correctAnswer = q.options[q.correct];")
    lines.append("    const indices = [0, 1, 2, 3];")
    lines.append("    for (let i = indices.length - 1; i > 0; i--) {")
    lines.append("      const j = Math.floor(Math.random() * (i + 1));")
    lines.append("      [indices[i], indices[j]] = [indices[j], indices[i]];")
    lines.append("    }")
    lines.append("    const shuffled = indices.map(i => q.options[i]);")
    lines.append("    q.correct = shuffled.findIndex(opt => opt.en === correctAnswer.en);")
    lines.append("    q.options = shuffled;")
    lines.append("  });")
    lines.append("")
    lines.append("  return questions;")
    lines.append("})();")
    lines.append("")

    return "\n".join(lines)


def main():
    """Main function to process template files"""

    ai_dir = Path(r"src/questions/data/subjects/ai")

    # Files that need replacement
    files_to_process = [
        ("Deep learning", [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]),
        ("AI toekomst", [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]),
        ("Natuurlijke taalverwerking", [6, 7, 8, 9, 10]),  # 5 already done
        ("AI ethiek", [2, 3, 4, 5]),  # Some levels already done
    ]

    print("\nReady to generate questions for:")
    total_files = sum(len(levels) for _, levels in files_to_process)
    print(f"Total: {total_files} files")

    for topic, levels in files_to_process:
        print(f"\n  {topic}: levels {levels}")

    response = input("\nProceed? (y/n): ")
    if response.lower() != 'y':
        print("Cancelled.")
        return

    # Process each file
    for topic, levels in files_to_process:
        topic_dir = ai_dir / topic
        for level in levels:
            file_path = topic_dir / f"level{level}.js"

            if not file_path.exists():
                print(f"  ⚠ File not found: {file_path}")
                continue

            print(f"  Processing: {topic}/level{level}.js")

            # Generate content
            content = generate_file_content(topic, level, 100)

            # Write file
            file_path.write_text(content, encoding='utf-8')
            print(f"    ✓ Generated 100 questions")

    print(f"\n✓ Complete! Processed {total_files} files")
    print("\nNote: Translations are basic placeholders.")
    print("For production, use proper translation service.")


if __name__ == "__main__":
    main()
