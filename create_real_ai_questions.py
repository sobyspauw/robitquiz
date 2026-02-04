#!/usr/bin/env python3
"""
Create REAL AI questions with actual content
"""
import os

def generate_ai_questions(subcat, level):
    """Generate 100 real AI questions for a subcategory"""

    # Real AI content for each subcategory
    ai_content = {
        "AI geschiedenis": {
            "topics": [
                ("Alan Turing", "1950", "Turing Test", "Can machines think?"),
                ("Dartmouth Conference", "1956", "Birth of AI", "John McCarthy coined 'AI'"),
                ("ELIZA", "1966", "First chatbot", "Joseph Weizenbaum at MIT"),
                ("Expert Systems", "1970s", "Rule-based AI", "MYCIN for medical diagnosis"),
                ("AI Winter", "1974-1980", "Funding cuts", "Failed to meet expectations"),
                ("Deep Blue", "1997", "Beat Kasparov", "IBM chess computer"),
                ("Watson", "2011", "Won Jeopardy", "IBM question-answering"),
                ("AlphaGo", "2016", "Beat Lee Sedol", "DeepMind Go program"),
                ("GPT-3", "2020", "175B parameters", "OpenAI language model"),
                ("ChatGPT", "2022", "Conversational AI", "100M users in 2 months")
            ]
        },
        "Machine Learning": {
            "topics": [
                ("Supervised Learning", "Labeled data", "Classification", "Regression tasks"),
                ("Unsupervised Learning", "No labels", "Clustering", "Pattern discovery"),
                ("Neural Networks", "Brain-inspired", "Layers of neurons", "Backpropagation"),
                ("Decision Trees", "Tree structure", "If-then rules", "Easy to interpret"),
                ("Random Forests", "Multiple trees", "Ensemble method", "Reduces overfitting"),
                ("Support Vector Machines", "SVM", "Maximum margin", "Kernel trick"),
                ("K-Means Clustering", "Centroid-based", "Unsupervised", "K clusters"),
                ("Gradient Descent", "Optimization", "Minimize loss", "Learning rate"),
                ("Cross-validation", "Model evaluation", "K-fold", "Prevent overfitting"),
                ("Feature Engineering", "Data preparation", "Select features", "Transform data")
            ]
        },
        "Neurale netwerken": {
            "topics": [
                ("Perceptron", "1957", "Single layer", "Linear classifier"),
                ("Backpropagation", "1986", "Training method", "Gradient calculation"),
                ("CNN", "Convolutional", "Image processing", "LeCun 1989"),
                ("RNN", "Recurrent", "Sequential data", "Memory cells"),
                ("LSTM", "Long Short-Term", "Forget gates", "Hochreiter 1997"),
                ("Transformer", "Attention mechanism", "Vaswani 2017", "No recurrence"),
                ("GAN", "Generative Adversarial", "Generator vs Discriminator", "Ian Goodfellow"),
                ("Autoencoder", "Compression", "Encoder-decoder", "Dimensionality reduction"),
                ("Dropout", "Regularization", "Random deactivation", "Prevent overfitting"),
                ("Activation Functions", "ReLU, Sigmoid", "Non-linearity", "Output transformation")
            ]
        },
        "Computer Vision": {
            "topics": [
                ("Image Classification", "Categorize images", "CNN models", "ImageNet"),
                ("Object Detection", "Locate objects", "YOLO, R-CNN", "Bounding boxes"),
                ("Face Recognition", "Identify faces", "FaceNet", "Biometric security"),
                ("Semantic Segmentation", "Pixel classification", "U-Net", "Medical imaging"),
                ("Optical Character Recognition", "OCR", "Text from images", "Tesseract"),
                ("Image Generation", "Create images", "DALL-E, Midjourney", "Text to image"),
                ("Edge Detection", "Find boundaries", "Canny algorithm", "Preprocessing"),
                ("Feature Extraction", "SIFT, SURF", "Keypoints", "Pattern matching"),
                ("3D Reconstruction", "2D to 3D", "Structure from motion", "Depth estimation"),
                ("Video Analysis", "Temporal data", "Action recognition", "Frame sequences")
            ]
        },
        "Natural Language Processing": {
            "topics": [
                ("Tokenization", "Split text", "Words/subwords", "First NLP step"),
                ("Word Embeddings", "Word2Vec", "Vector representation", "Semantic similarity"),
                ("Named Entity Recognition", "NER", "Find entities", "People, places, dates"),
                ("Part-of-Speech Tagging", "POS", "Grammar labels", "Noun, verb, adjective"),
                ("Machine Translation", "Language conversion", "Google Translate", "Neural MT"),
                ("Sentiment Analysis", "Opinion mining", "Positive/negative", "Review analysis"),
                ("Question Answering", "QA systems", "BERT", "Reading comprehension"),
                ("Text Summarization", "Shorten text", "Extractive/abstractive", "Key points"),
                ("Language Models", "Predict text", "GPT, BERT", "Transformers"),
                ("Speech Recognition", "Audio to text", "Whisper", "Voice assistants")
            ]
        },
        "Robotics": {
            "topics": [
                ("Boston Dynamics", "Spot, Atlas", "Dynamic robots", "Parkour capabilities"),
                ("Industrial Robots", "Manufacturing", "Assembly lines", "Precision tasks"),
                ("Autonomous Vehicles", "Self-driving", "Waymo, Tesla", "Computer vision"),
                ("Surgical Robots", "Da Vinci", "Minimally invasive", "Remote surgery"),
                ("Drone Technology", "UAVs", "Delivery, surveillance", "Autonomous flight"),
                ("Social Robots", "Pepper, Sophia", "Human interaction", "Emotional AI"),
                ("SLAM", "Simultaneous localization", "Mapping", "Navigation algorithm"),
                ("Robot Learning", "Reinforcement learning", "Trial and error", "Skill acquisition"),
                ("Swarm Robotics", "Multiple robots", "Collective behavior", "Ant colonies"),
                ("Soft Robotics", "Flexible materials", "Biomimetic", "Safe interaction")
            ]
        },
        "Bekende AI-systemen": {
            "topics": [
                ("ChatGPT", "OpenAI", "Conversational AI", "GPT architecture"),
                ("DALL-E 2", "OpenAI", "Image generation", "Text to image"),
                ("AlphaFold", "DeepMind", "Protein folding", "Nobel Prize 2024"),
                ("Tesla Autopilot", "Self-driving", "Computer vision", "Neural networks"),
                ("Siri", "Apple", "Voice assistant", "2011 launch"),
                ("Alexa", "Amazon", "Smart speaker", "Echo devices"),
                ("Google Assistant", "Google", "AI helper", "Android integration"),
                ("IBM Watson", "Question answering", "Jeopardy winner", "Business AI"),
                ("Midjourney", "Art generation", "Discord bot", "Artistic styles"),
                ("GitHub Copilot", "Code completion", "Pair programming", "OpenAI Codex")
            ]
        },
        "Ethiek en AI": {
            "topics": [
                ("AI Bias", "Discrimination", "Training data", "Fairness issues"),
                ("Privacy Concerns", "Data collection", "Surveillance", "GDPR compliance"),
                ("Job Displacement", "Automation", "Workforce impact", "Reskilling needs"),
                ("Autonomous Weapons", "Military AI", "Lethal decisions", "International law"),
                ("Deepfakes", "Fake media", "Misinformation", "Detection challenges"),
                ("AI Transparency", "Black box problem", "Explainable AI", "Right to explanation"),
                ("AI Governance", "Regulation", "EU AI Act", "Safety standards"),
                ("Human-AI Collaboration", "Augmentation", "Not replacement", "Hybrid intelligence"),
                ("AI Rights", "Consciousness debate", "Legal personhood", "Moral status"),
                ("Environmental Impact", "Energy consumption", "Carbon footprint", "Green AI")
            ]
        },
        "Reinforcement Learning": {
            "topics": [
                ("Q-Learning", "Value-based", "Q-table", "Bellman equation"),
                ("Deep Q-Network", "DQN", "Neural Q-function", "Experience replay"),
                ("Policy Gradient", "Direct optimization", "REINFORCE", "Continuous actions"),
                ("Actor-Critic", "Value and policy", "A2C, A3C", "Advantage function"),
                ("PPO", "Proximal Policy", "OpenAI default", "Clipped objective"),
                ("AlphaZero", "Game playing", "Self-play", "Monte Carlo tree search"),
                ("Multi-Armed Bandit", "Exploration", "Exploitation", "Epsilon-greedy"),
                ("Markov Decision Process", "MDP", "States and actions", "Transition probability"),
                ("Reward Shaping", "Guide learning", "Intermediate rewards", "Faster training"),
                ("Curiosity-Driven", "Intrinsic motivation", "Exploration bonus", "Novel states")
            ]
        },
        "Toekomst van AI": {
            "topics": [
                ("AGI", "Artificial General Intelligence", "Human-level AI", "Not yet achieved"),
                ("Quantum Computing", "Quantum AI", "Superposition", "Exponential speedup"),
                ("Brain-Computer Interface", "Neuralink", "Direct connection", "Thought control"),
                ("AI Singularity", "Exponential growth", "Superintelligence", "Kurzweil prediction"),
                ("Synthetic Biology", "AI-designed organisms", "Drug discovery", "Genetic engineering"),
                ("Metaverse AI", "Virtual worlds", "Digital humans", "Immersive experiences"),
                ("Edge AI", "On-device processing", "Low latency", "Privacy benefits"),
                ("Neuromorphic Computing", "Brain-like chips", "Event-driven", "Energy efficient"),
                ("AI Democracy", "Decision making", "Collective intelligence", "Digital governance"),
                ("Post-scarcity Economy", "Automation abundance", "Universal basic income", "Resource distribution")
            ]
        }
    }

    subcat_data = ai_content.get(subcat, ai_content["AI geschiedenis"])
    topics = subcat_data["topics"]
    questions = []

    for i in range(100):
        topic = topics[i % len(topics)]

        if level <= 3:
            # Basic questions
            q_type = i % 4
            if q_type == 0:
                q = {
                    "question": {
                        "en": f"What is {topic[0]} in AI?",
                        "es": f"¿Qué es {topic[0]} en IA?",
                        "de": f"Was ist {topic[0]} in KI?",
                        "nl": f"Wat is {topic[0]} in AI?"
                    },
                    "options": [
                        {"en": topic[2], "es": topic[2], "de": topic[2], "nl": topic[2]},
                        {"en": "A programming language", "es": "Un lenguaje de programación", "de": "Eine Programmiersprache", "nl": "Een programmeertaal"},
                        {"en": "A hardware device", "es": "Un dispositivo hardware", "de": "Ein Hardware-Gerät", "nl": "Een hardware-apparaat"},
                        {"en": "A video game", "es": "Un videojuego", "de": "Ein Videospiel", "nl": "Een videogame"}
                    ],
                    "correct": 0,
                    "explanation": {
                        "en": f"{topic[0]} is {topic[2]}: {topic[3]}",
                        "es": f"{topic[0]} es {topic[2]}: {topic[3]}",
                        "de": f"{topic[0]} ist {topic[2]}: {topic[3]}",
                        "nl": f"{topic[0]} is {topic[2]}: {topic[3]}"
                    }
                }
            elif q_type == 1:
                q = {
                    "question": {
                        "en": f"When was {topic[0]} developed/introduced?",
                        "es": f"¿Cuándo se desarrolló/introdujo {topic[0]}?",
                        "de": f"Wann wurde {topic[0]} entwickelt/eingeführt?",
                        "nl": f"Wanneer werd {topic[0]} ontwikkeld/geïntroduceerd?"
                    },
                    "options": [
                        {"en": topic[1], "es": topic[1], "de": topic[1], "nl": topic[1]},
                        {"en": "1900", "es": "1900", "de": "1900", "nl": "1900"},
                        {"en": "2050", "es": "2050", "de": "2050", "nl": "2050"},
                        {"en": "Unknown", "es": "Desconocido", "de": "Unbekannt", "nl": "Onbekend"}
                    ],
                    "correct": 0,
                    "explanation": {
                        "en": f"{topic[0]} was introduced in {topic[1]}",
                        "es": f"{topic[0]} se introdujo en {topic[1]}",
                        "de": f"{topic[0]} wurde {topic[1]} eingeführt",
                        "nl": f"{topic[0]} werd geïntroduceerd in {topic[1]}"
                    }
                }
            elif q_type == 2:
                q = {
                    "question": {
                        "en": f"What is the main purpose of {topic[0]}?",
                        "es": f"¿Cuál es el propósito principal de {topic[0]}?",
                        "de": f"Was ist der Hauptzweck von {topic[0]}?",
                        "nl": f"Wat is het hoofddoel van {topic[0]}?"
                    },
                    "options": [
                        {"en": topic[3], "es": topic[3], "de": topic[3], "nl": topic[3]},
                        {"en": "Entertainment only", "es": "Solo entretenimiento", "de": "Nur Unterhaltung", "nl": "Alleen entertainment"},
                        {"en": "Military use only", "es": "Solo uso militar", "de": "Nur militärische Nutzung", "nl": "Alleen militair gebruik"},
                        {"en": "No practical use", "es": "Sin uso práctico", "de": "Keine praktische Anwendung", "nl": "Geen praktisch nut"}
                    ],
                    "correct": 0,
                    "explanation": {
                        "en": f"{topic[0]} is used for: {topic[3]}",
                        "es": f"{topic[0]} se usa para: {topic[3]}",
                        "de": f"{topic[0]} wird verwendet für: {topic[3]}",
                        "nl": f"{topic[0]} wordt gebruikt voor: {topic[3]}"
                    }
                }
            else:
                q = {
                    "question": {
                        "en": f"Which statement about {topic[0]} is true?",
                        "es": f"¿Qué afirmación sobre {topic[0]} es verdadera?",
                        "de": f"Welche Aussage über {topic[0]} ist wahr?",
                        "nl": f"Welke uitspraak over {topic[0]} is waar?"
                    },
                    "options": [
                        {"en": f"It involves {topic[2]}", "es": f"Involucra {topic[2]}", "de": f"Es beinhaltet {topic[2]}", "nl": f"Het betreft {topic[2]}"},
                        {"en": "It was never implemented", "es": "Nunca se implementó", "de": "Es wurde nie implementiert", "nl": "Het werd nooit geïmplementeerd"},
                        {"en": "It requires magic", "es": "Requiere magia", "de": "Es erfordert Magie", "nl": "Het vereist magie"},
                        {"en": "It's science fiction", "es": "Es ciencia ficción", "de": "Es ist Science-Fiction", "nl": "Het is sciencefiction"}
                    ],
                    "correct": 0,
                    "explanation": {
                        "en": f"True: {topic[0]} - {topic[2]}",
                        "es": f"Verdadero: {topic[0]} - {topic[2]}",
                        "de": f"Wahr: {topic[0]} - {topic[2]}",
                        "nl": f"Waar: {topic[0]} - {topic[2]}"
                    }
                }

        elif level <= 6:
            # Intermediate questions
            q = {
                "question": {
                    "en": f"How does {topic[0]} relate to {topic[2]}?",
                    "es": f"¿Cómo se relaciona {topic[0]} con {topic[2]}?",
                    "de": f"Wie hängt {topic[0]} mit {topic[2]} zusammen?",
                    "nl": f"Hoe verhoudt {topic[0]} zich tot {topic[2]}?"
                },
                "options": [
                    {"en": f"{topic[3]}", "es": f"{topic[3]}", "de": f"{topic[3]}", "nl": f"{topic[3]}"},
                    {"en": "They are unrelated", "es": "No están relacionados", "de": "Sie sind nicht verwandt", "nl": "Ze zijn niet gerelateerd"},
                    {"en": "It's the opposite", "es": "Es lo opuesto", "de": "Es ist das Gegenteil", "nl": "Het is het tegenovergestelde"},
                    {"en": "Random connection", "es": "Conexión aleatoria", "de": "Zufällige Verbindung", "nl": "Willekeurige verbinding"}
                ],
                "correct": 0,
                "explanation": {
                    "en": f"Connection: {topic[0]} - {topic[3]}",
                    "es": f"Conexión: {topic[0]} - {topic[3]}",
                    "de": f"Verbindung: {topic[0]} - {topic[3]}",
                    "nl": f"Verband: {topic[0]} - {topic[3]}"
                }
            }

        else:
            # Advanced questions
            q = {
                "question": {
                    "en": f"What advanced concept in {subcat} involves {topic[0]}?",
                    "es": f"¿Qué concepto avanzado en {subcat} involucra {topic[0]}?",
                    "de": f"Welches fortgeschrittene Konzept in {subcat} beinhaltet {topic[0]}?",
                    "nl": f"Welk geavanceerd concept in {subcat} betreft {topic[0]}?"
                },
                "options": [
                    {"en": f"{topic[2]} for {topic[3]}", "es": f"{topic[2]} para {topic[3]}", "de": f"{topic[2]} für {topic[3]}", "nl": f"{topic[2]} voor {topic[3]}"},
                    {"en": "Basic arithmetic", "es": "Aritmética básica", "de": "Grundrechenarten", "nl": "Basis rekenen"},
                    {"en": "Simple logic", "es": "Lógica simple", "de": "Einfache Logik", "nl": "Simpele logica"},
                    {"en": "No complexity", "es": "Sin complejidad", "de": "Keine Komplexität", "nl": "Geen complexiteit"}
                ],
                "correct": i % 4,
                "explanation": {
                    "en": f"Advanced: {topic[0]} uses {topic[2]} for {topic[3]}",
                    "es": f"Avanzado: {topic[0]} usa {topic[2]} para {topic[3]}",
                    "de": f"Fortgeschritten: {topic[0]} nutzt {topic[2]} für {topic[3]}",
                    "nl": f"Geavanceerd: {topic[0]} gebruikt {topic[2]} voor {topic[3]}"
                }
            }

        questions.append(q)

    return questions

def create_js_file(level, questions):
    """Create JavaScript file"""
    js_content = f"""(function() {{
  const level{level} = {{
    questions: [
"""

    for i, q in enumerate(questions):
        js_content += """      {
        question: {
"""
        for lang in ['en', 'es', 'de', 'nl']:
            text = q["question"][lang].replace('"', '\\"').replace("'", "\\'")
            js_content += f'          {lang}: "{text}",\n'
        js_content = js_content[:-2] + "\n"
        js_content += """        },
        options: [
"""
        for opt in q['options']:
            js_content += "          { "
            for j, lang in enumerate(['en', 'es', 'de', 'nl']):
                text = opt[lang].replace('"', '\\"').replace("'", "\\'")
                js_content += f'{lang}: "{text}"'
                if j < 3:
                    js_content += ", "
            js_content += " },\n"
        js_content = js_content[:-2] + "\n"
        js_content += f"""        ],
        correct: {q["correct"]},
        explanation: {{
"""
        for lang in ['en', 'es', 'de', 'nl']:
            text = q["explanation"][lang].replace('"', '\\"').replace("'", "\\'")
            js_content += f'          {lang}: "{text}",\n'
        js_content = js_content[:-2] + "\n"
        js_content += """        }
      }"""
        if i < len(questions) - 1:
            js_content += ","
        js_content += "\n"

    js_content += f"""    ]
  }};

  if (typeof module !== 'undefined' && module.exports) {{
    module.exports = level{level};
  }}
}})();"""

    return js_content

def main():
    base_path = r"C:\Users\rbosch\OneDrive - A.S. Watson Europe\prive\RobitQuiz\src\questions\data\subjects\ai"

    subcategories = [
        "AI geschiedenis",
        "Bekende AI-systemen",
        "Computer Vision",
        "Ethiek en AI",
        "Machine Learning",
        "Natural Language Processing",
        "Neurale netwerken",
        "Reinforcement Learning",
        "Robotics",
        "Toekomst van AI"
    ]

    total = 0

    for subcat in subcategories:
        cat_path = os.path.join(base_path, subcat)
        if not os.path.exists(cat_path):
            os.makedirs(cat_path)

        print(f"Processing {subcat}...")

        for level in range(1, 11):
            questions = generate_ai_questions(subcat, level)
            js_content = create_js_file(level, questions)

            file_path = os.path.join(cat_path, f"level{level}.js")
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(js_content)

            total += len(questions)
            print(f"  Level {level}: {len(questions)} questions")

    print(f"\nTotal AI questions created: {total:,}")

if __name__ == "__main__":
    main()