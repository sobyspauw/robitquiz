#!/usr/bin/env python3
"""
Comprehensive Quiz Question Generator
Generates 100 REAL, UNIQUE questions for all problematic quiz files.
"""

import os
import json
import re
from pathlib import Path
from typing import List, Dict, Any
import anthropic
import time

# Configuration
API_KEY = os.environ.get("ANTHROPIC_API_KEY")
BASE_PATH = Path(__file__).parent / "src" / "questions" / "data" / "subjects"

# Subject-specific knowledge bases and patterns
SUBJECT_PATTERNS = {
    "dinosaurs": {
        "Cretaceous Dinosaurs": {
            "topics": ["T-Rex", "Triceratops", "Velociraptor", "Ankylosaurus", "Spinosaurus",
                      "Parasaurolophus", "Mosasaurus", "Pteranodon", "Iguanodon", "Therizinosaurus"],
            "difficulty_themes": {
                1: "Basic identification and general facts",
                2: "Diet, habitat, and size comparisons",
                3: "Physical characteristics and behavior",
                4: "Fossil discoveries and locations",
                5: "Time periods and extinction events",
                6: "Anatomical features and adaptations",
                7: "Scientific classifications and relationships",
                8: "Recent discoveries and research findings",
                9: "Biomechanics and advanced paleontology",
                10: "Expert-level taxonomy and evolutionary details"
            }
        },
        "Jurassic Dinosaurs": {
            "topics": ["Stegosaurus", "Brachiosaurus", "Allosaurus", "Diplodocus", "Archaeopteryx",
                      "Compsognathus", "Ceratosaurus", "Apatosaurus", "Camarasaurus", "Kentrosaurus"],
            "difficulty_themes": {
                1: "Basic dinosaur recognition",
                2: "Size and weight facts",
                3: "Defense mechanisms and hunting",
                4: "Geographic distribution",
                5: "Evolutionary significance",
                6: "Skeletal structures",
                7: "Ecological roles",
                8: "Fossil record analysis",
                9: "Phylogenetic relationships",
                10: "Advanced paleobiology"
            }
        },
        "Sauropods": {
            "topics": ["Brachiosaurus", "Diplodocus", "Apatosaurus", "Argentinosaurus", "Brontosaurus",
                      "Camarasaurus", "Mamenchisaurus", "Titanosaurus", "Seismosaurus", "Supersaurus"],
            "difficulty_themes": {
                1: "Identification of giant dinosaurs",
                2: "Size comparisons and records",
                3: "Neck and tail characteristics",
                4: "Feeding habits and diet",
                5: "Bone structure and weight support",
                6: "Respiratory and circulatory systems",
                7: "Growth rates and lifespan",
                8: "Migration patterns and herding",
                9: "Biomechanical limitations",
                10: "Species differentiation and taxonomy"
            }
        },
        "T-Rex Family": {
            "topics": ["Tyrannosaurus Rex", "Albertosaurus", "Tarbosaurus", "Daspletosaurus", "Gorgosaurus",
                      "Nanotyrannus", "Teratophoneus", "Lythronax", "Bistahieversor", "Tyrannosaurid evolution"],
            "difficulty_themes": {
                1: "Basic T-Rex facts",
                2: "Size and hunting abilities",
                3: "Bite force and teeth",
                4: "Family members and relatives",
                5: "Sensory capabilities",
                6: "Arm function and debate",
                7: "Growth stages and ontogeny",
                8: "Scavenger vs predator debate",
                9: "Feather evidence and display",
                10: "Latest research and Sue specimen"
            }
        },
        "Velociraptors": {
            "topics": ["Velociraptor", "Deinonychus", "Utahraptor", "Microraptor", "Bambiraptor",
                      "Achillobator", "Saurornitholestes", "Atrociraptor", "Tsaagan", "Dromaeosauridae"],
            "difficulty_themes": {
                1: "Movie vs reality",
                2: "Size and appearance",
                3: "Feathers and coloration",
                4: "Hunting strategies",
                5: "Intelligence and social behavior",
                6: "Claw mechanics",
                7: "Flight evolution connection",
                8: "Asian vs North American species",
                9: "Fossil evidence interpretation",
                10: "Phylogenetic analysis"
            }
        },
        "Horned Dinosaurs": {
            "topics": ["Triceratops", "Styracosaurus", "Pachyrhinosaurus", "Centrosaurus", "Chasmosaurus",
                      "Pentaceratops", "Torosaurus", "Anchiceratops", "Kosmoceratops", "Protoceratops"],
            "difficulty_themes": {
                1: "Horn and frill identification",
                2: "Herbivore characteristics",
                3: "Defense mechanisms",
                4: "Species diversity",
                5: "Growth and development",
                6: "Frill function theories",
                7: "Combat evidence",
                8: "Geographic distribution",
                9: "Sexual dimorphism",
                10: "Ceratopsian evolution"
            }
        },
        "Pterosaurs": {
            "topics": ["Pteranodon", "Quetzalcoatlus", "Pterodactylus", "Rhamphorhynchus", "Dimorphodon",
                      "Tapejara", "Anhanguera", "Dsungaripterus", "Nyctosaurus", "Ornithocheirus"],
            "difficulty_themes": {
                1: "Flying reptile basics",
                2: "Not dinosaurs - difference",
                3: "Wingspan and size",
                4: "Diet and hunting",
                5: "Wing membrane structure",
                6: "Launch and flight mechanics",
                7: "Crest functions",
                8: "Terrestrial locomotion",
                9: "Pycnofibers and fuzzy covering",
                10: "Azhdarchid gigantism"
            }
        },
        "Marine Reptiles": {
            "topics": ["Mosasaurus", "Pliosaur", "Ichthyosaur", "Plesiosaur", "Elasmosaurus",
                      "Liopleurodon", "Kronosaurus", "Tylosaurus", "Shonisaurus", "Nothosaurus"],
            "difficulty_themes": {
                1: "Sea reptile identification",
                2: "Not dinosaurs - explanation",
                3: "Size and predation",
                4: "Breathing and diving",
                5: "Locomotion methods",
                6: "Live birth evidence",
                7: "Extinction timing",
                8: "Niche partitioning",
                9: "Convergent evolution",
                10: "Marine ecosystem roles"
            }
        },
        "Early Dinosaurs": {
            "topics": ["Eoraptor", "Herrerasaurus", "Coelophysis", "Plateosaurus", "Massospondylus",
                      "Pisanosaurus", "Staurikosaurus", "Saturnalia", "Panphagia", "Eodromaeus"],
            "difficulty_themes": {
                1: "First dinosaurs basics",
                2: "Triassic period facts",
                3: "Small size and agility",
                4: "Omnivorous vs carnivorous",
                5: "Early evolution features",
                6: "Argentina fossil sites",
                7: "Dinosaur origin theories",
                8: "Archosaur relationships",
                9: "Hip structure evolution",
                10: "Ischigualasto Formation"
            }
        },
        "Dinosaur Fossils": {
            "topics": ["Fossilization process", "Famous fossil sites", "Paleontology tools", "Bone beds",
                      "Trace fossils", "Mary Anning", "Roy Chapman Andrews", "Jack Horner", "Sue T-Rex", "Dinosaur eggs"],
            "difficulty_themes": {
                1: "What are fossils?",
                2: "How fossils form",
                3: "Famous discoveries",
                4: "Excavation basics",
                5: "Dating methods",
                6: "Preservation types",
                7: "Taphonomy principles",
                8: "Laboratory preparation",
                9: "Advanced imaging techniques",
                10: "Molecular paleontology"
            }
        }
    },
    "ai": {
        "Deep learning": {
            "topics": ["Neural networks", "Backpropagation", "CNN", "RNN", "LSTM", "Transformers",
                      "Gradient descent", "Activation functions", "Overfitting", "Regularization"],
            "difficulty_themes": {
                1: "What is deep learning?",
                2: "Basic neural network concepts",
                3: "Layer types and architectures",
                4: "Training and optimization",
                5: "Common applications",
                6: "Advanced architectures",
                7: "Training challenges",
                8: "State-of-the-art models",
                9: "Research frontiers",
                10: "Theoretical foundations"
            }
        },
        "Machine learning": {
            "topics": ["Supervised learning", "Unsupervised learning", "Regression", "Classification",
                      "Clustering", "Decision trees", "Random forests", "SVM", "K-means", "PCA"],
            "difficulty_themes": {
                1: "ML basics and definitions",
                2: "Types of learning",
                3: "Common algorithms",
                4: "Model evaluation",
                5: "Feature engineering",
                6: "Ensemble methods",
                7: "Hyperparameter tuning",
                8: "Advanced techniques",
                9: "Theoretical analysis",
                10: "Cutting-edge research"
            }
        },
        "Computer vision": {
            "topics": ["Image classification", "Object detection", "Segmentation", "Face recognition",
                      "OCR", "Image generation", "YOLO", "R-CNN", "U-Net", "GANs"],
            "difficulty_themes": {
                1: "What is computer vision?",
                2: "Basic image processing",
                3: "Feature detection",
                4: "CNN applications",
                5: "Object detection methods",
                6: "Semantic segmentation",
                7: "Instance segmentation",
                8: "3D vision and depth",
                9: "Video understanding",
                10: "Research challenges"
            }
        },
        "Natural Language Processing": {
            "topics": ["Tokenization", "Word embeddings", "BERT", "GPT", "Attention mechanism",
                      "Machine translation", "Sentiment analysis", "Named entity recognition", "Question answering", "Text generation"],
            "difficulty_themes": {
                1: "NLP introduction",
                2: "Text preprocessing",
                3: "Word representations",
                4: "Sequence models",
                5: "Transformer architecture",
                6: "Pre-trained models",
                7: "Fine-tuning strategies",
                8: "Multilingual models",
                9: "Zero-shot learning",
                10: "Language model theory"
            }
        },
        "Neurale netwerken": {
            "topics": ["Perceptron", "Feedforward networks", "Convolutional layers", "Recurrent connections",
                      "Weights and biases", "Loss functions", "Optimization algorithms", "Batch normalization", "Dropout", "Residual connections"],
            "difficulty_themes": {
                1: "Neural network basics",
                2: "Network architecture",
                3: "Activation functions",
                4: "Training process",
                5: "Regularization techniques",
                6: "Advanced architectures",
                7: "Optimization methods",
                8: "Network analysis",
                9: "Theoretical properties",
                10: "Research innovations"
            }
        },
        "Reinforcement Learning": {
            "topics": ["Q-learning", "Policy gradient", "DQN", "Actor-critic", "Monte Carlo methods",
                      "Temporal difference", "Exploration vs exploitation", "Reward shaping", "Multi-agent RL", "AlphaGo"],
            "difficulty_themes": {
                1: "RL introduction",
                2: "Markov Decision Process",
                3: "Value functions",
                4: "Policy methods",
                5: "Deep RL basics",
                6: "Advanced algorithms",
                7: "Exploration strategies",
                8: "Multi-agent systems",
                9: "Inverse RL",
                10: "Theoretical guarantees"
            }
        },
        "Robotics": {
            "topics": ["Robot sensors", "Actuators", "SLAM", "Path planning", "Inverse kinematics",
                      "Computer vision for robots", "Humanoid robots", "Industrial robots", "Autonomous vehicles", "Soft robotics"],
            "difficulty_themes": {
                1: "What are robots?",
                2: "Robot components",
                3: "Sensors and perception",
                4: "Motion control",
                5: "Navigation basics",
                6: "Manipulation",
                7: "Learning and adaptation",
                8: "Human-robot interaction",
                9: "Advanced autonomy",
                10: "Research frontiers"
            }
        },
        "AI ethiek": {
            "topics": ["Bias in AI", "Privacy concerns", "Autonomous weapons", "Job displacement",
                      "Transparency", "Accountability", "Fairness", "AI safety", "Superintelligence", "AI governance"],
            "difficulty_themes": {
                1: "Basic ethical concerns",
                2: "Fairness and bias",
                3: "Privacy issues",
                4: "Job impact",
                5: "Transparency requirements",
                6: "Accountability frameworks",
                7: "Regulation and policy",
                8: "Long-term risks",
                9: "AI alignment problem",
                10: "Existential risk"
            }
        },
        "AI geschiedenis": {
            "topics": ["Dartmouth Conference", "AI winters", "Expert systems", "IBM Deep Blue",
                      "Watson", "AlphaGo", "GPT evolution", "ImageNet", "Turing Test", "Perceptron"],
            "difficulty_themes": {
                1: "AI origins",
                2: "Early milestones",
                3: "Key breakthroughs",
                4: "Famous systems",
                5: "AI winters and revivals",
                6: "Deep learning revolution",
                7: "Recent achievements",
                8: "Important researchers",
                9: "Paradigm shifts",
                10: "Historical context"
            }
        },
        "AI toekomst": {
            "topics": ["AGI", "Quantum AI", "Brain-computer interfaces", "AI in healthcare",
                      "Autonomous systems", "AI creativity", "Edge AI", "Explainable AI", "Federated learning", "AI chips"],
            "difficulty_themes": {
                1: "Future applications",
                2: "Emerging technologies",
                3: "AI in daily life",
                4: "Medical AI advances",
                5: "Autonomous vehicles",
                6: "Creative AI",
                7: "Hardware evolution",
                8: "AGI prospects",
                9: "Quantum computing + AI",
                10: "Long-term scenarios"
            }
        },
        "AI in gaming": {
            "topics": ["Game AI", "Pathfinding", "NPCs", "Procedural generation", "AlphaGo",
                      "OpenAI Five", "AI opponents", "Behavior trees", "Monte Carlo tree search", "Game balancing"],
            "difficulty_themes": {
                1: "AI in video games",
                2: "NPC behavior",
                3: "Pathfinding algorithms",
                4: "Game trees",
                5: "Procedural content",
                6: "Learning to play",
                7: "Advanced game AI",
                8: "Research using games",
                9: "Self-play and evolution",
                10: "Game AI theory"
            }
        },
        "AI in transport": {
            "topics": ["Self-driving cars", "Traffic optimization", "Route planning", "Tesla Autopilot",
                      "Waymo", "LIDAR", "Computer vision for driving", "V2V communication", "Autonomous trucks", "Flying cars"],
            "difficulty_themes": {
                1: "Autonomous vehicle basics",
                2: "Sensors and perception",
                3: "Path planning",
                4: "Safety systems",
                5: "Levels of autonomy",
                6: "Companies and projects",
                7: "Technical challenges",
                8: "Legal and ethical issues",
                9: "Advanced autonomy",
                10: "Future of transportation"
            }
        }
    },
    "food": {
        "Barbecue": {
            "topics": ["Texas BBQ", "Carolina BBQ", "Kansas City BBQ", "Memphis BBQ", "Korean BBQ",
                      "Argentine asado", "Brazilian churrasco", "Smoking techniques", "BBQ sauces", "Rubs and marinades"],
            "difficulty_themes": {
                1: "BBQ basics and regional styles",
                2: "Common meats and cuts",
                3: "Sauce varieties",
                4: "Smoking vs grilling",
                5: "Temperature control",
                6: "Wood types and flavors",
                7: "Competition BBQ",
                8: "International styles",
                9: "Advanced techniques",
                10: "BBQ science and chemistry"
            }
        },
        "Breakfast Foods": {
            "topics": ["Eggs", "Pancakes", "Waffles", "Cereal", "Oatmeal", "French toast",
                      "Bacon", "Sausage", "English breakfast", "Continental breakfast"],
            "difficulty_themes": {
                1: "Common breakfast items",
                2: "Cooking methods",
                3: "International breakfasts",
                4: "Nutritional aspects",
                5: "Traditional dishes",
                6: "Preparation techniques",
                7: "Regional variations",
                8: "Historical origins",
                9: "Gourmet breakfast",
                10: "Culinary expertise"
            }
        },
        "Cheeses": {
            "topics": ["Cheddar", "Brie", "Mozzarella", "Parmesan", "Gouda", "Swiss",
                      "Blue cheese", "Feta", "Camembert", "Manchego"],
            "difficulty_themes": {
                1: "Popular cheese types",
                2: "Cheese making basics",
                3: "Aging and ripening",
                4: "Regional cheeses",
                5: "Pairing with food",
                6: "Artisan cheeses",
                7: "Cheese chemistry",
                8: "PDO classifications",
                9: "Expert tasting",
                10: "Rare and exotic cheeses"
            }
        },
        "Cooking Methods": {
            "topics": ["Boiling", "Frying", "Baking", "Roasting", "Grilling", "Steaming",
                      "Braising", "Poaching", "Sautéing", "Sous vide"],
            "difficulty_themes": {
                1: "Basic cooking techniques",
                2: "Heat transfer methods",
                3: "Equipment needed",
                4: "When to use each method",
                5: "Temperature control",
                6: "Advanced techniques",
                7: "Professional methods",
                8: "Molecular gastronomy",
                9: "Scientific principles",
                10: "Cutting-edge innovations"
            }
        },
        "Pasta Types": {
            "topics": ["Spaghetti", "Penne", "Fettuccine", "Ravioli", "Lasagna", "Linguine",
                      "Rigatoni", "Farfalle", "Tagliatelle", "Orzo"],
            "difficulty_themes": {
                1: "Common pasta shapes",
                2: "Pasta and sauce pairing",
                3: "Fresh vs dried",
                4: "Regional Italian pastas",
                5: "Making fresh pasta",
                6: "Filled pastas",
                7: "Traditional recipes",
                8: "PDO pasta varieties",
                9: "Artisan production",
                10: "Pasta science and gluten"
            }
        },
        "Seafood": {
            "topics": ["Salmon", "Tuna", "Shrimp", "Lobster", "Crab", "Oysters",
                      "Mussels", "Scallops", "Octopus", "Squid"],
            "difficulty_themes": {
                1: "Common seafood types",
                2: "Cooking methods",
                3: "Freshness indicators",
                4: "Sustainability",
                5: "Regional preparations",
                6: "Shellfish varieties",
                7: "Advanced techniques",
                8: "Sushi and sashimi",
                9: "Rare delicacies",
                10: "Expert knowledge"
            }
        },
        "Street Food": {
            "topics": ["Tacos", "Hot dogs", "Kebabs", "Falafel", "Crepes", "Satay",
                      "Bánh mì", "Empanadas", "Arepas", "Gyros"],
            "difficulty_themes": {
                1: "Popular street foods",
                2: "International varieties",
                3: "Origins and history",
                4: "Regional differences",
                5: "Authentic recipes",
                6: "Street food culture",
                7: "Famous vendors",
                8: "Modern innovations",
                9: "Culinary significance",
                10: "Global street food scene"
            }
        },
        "Salads": {
            "topics": ["Caesar salad", "Greek salad", "Caprese", "Cobb salad", "Niçoise",
                      "Waldorf", "Tabbouleh", "Coleslaw", "Potato salad", "Panzanella"],
            "difficulty_themes": {
                1: "Classic salad types",
                2: "Dressings basics",
                3: "Ingredient combinations",
                4: "International salads",
                5: "Making dressings",
                6: "Composed salads",
                7: "Historical origins",
                8: "Gourmet variations",
                9: "Expert techniques",
                10: "Culinary artistry"
            }
        },
        "Vegetarian Dishes": {
            "topics": ["Veggie burgers", "Falafel", "Tofu dishes", "Vegetable curry", "Ratatouille",
                      "Mushroom risotto", "Spanakopita", "Stuffed peppers", "Eggplant parmigiana", "Buddha bowl"],
            "difficulty_themes": {
                1: "Popular vegetarian meals",
                2: "Protein sources",
                3: "Cooking vegetables",
                4: "International dishes",
                5: "Flavor development",
                6: "Traditional recipes",
                7: "Modern innovations",
                8: "Fine dining vegetarian",
                9: "Advanced techniques",
                10: "Plant-based cuisine mastery"
            }
        },
        "Fusion Cuisine": {
            "topics": ["Tex-Mex", "Korean tacos", "Sushi burrito", "Pizza variations", "Ramen burger",
                      "Cronut", "Japanese curry", "Chinese-American", "Indo-Chinese", "Peruvian-Japanese"],
            "difficulty_themes": {
                1: "What is fusion?",
                2: "Famous fusion dishes",
                3: "Cultural combinations",
                4: "Origins of fusion",
                5: "Successful pairings",
                6: "Regional fusion styles",
                7: "Innovation techniques",
                8: "Authentic vs fusion debate",
                9: "Celebrity chef innovations",
                10: "Future of fusion cuisine"
            }
        }
    },
    "famous-people": {
        "Scientists": {
            "topics": ["Einstein", "Newton", "Darwin", "Curie", "Hawking", "Tesla", "Edison",
                      "Galileo", "Aristotle", "Feynman"],
            "difficulty_themes": {
                1: "Famous scientists recognition",
                2: "Major discoveries",
                3: "Fields of study",
                4: "Life timeline",
                5: "Important works",
                6: "Lesser-known contributions",
                7: "Controversies and debates",
                8: "Colleagues and rivals",
                9: "Legacy and impact",
                10: "Detailed biography"
            }
        },
        "Musicians": {
            "topics": ["Beatles", "Mozart", "Elvis", "Michael Jackson", "Bob Dylan", "Beethoven",
                      "Madonna", "Prince", "Aretha Franklin", "David Bowie"],
            "difficulty_themes": {
                1: "Famous musicians",
                2: "Hit songs and albums",
                3: "Musical genres",
                4: "Career highlights",
                5: "Awards and recognition",
                6: "Musical innovations",
                7: "Collaborations",
                8: "Personal life details",
                9: "Cultural impact",
                10: "Deep musical analysis"
            }
        },
        "Political Leaders": {
            "topics": ["Churchill", "Gandhi", "Lincoln", "Mandela", "JFK", "Roosevelt",
                      "Thatcher", "De Gaulle", "Mao", "Lenin"],
            "difficulty_themes": {
                1: "Famous leaders recognition",
                2: "Major achievements",
                3: "Historical context",
                4: "Key policies",
                5: "Speeches and quotes",
                6: "Political philosophy",
                7: "Controversies",
                8: "International relations",
                9: "Legacy analysis",
                10: "Detailed political career"
            }
        },
        "Actors and Actresses": {
            "topics": ["Marilyn Monroe", "Charlie Chaplin", "Meryl Streep", "Tom Hanks", "Audrey Hepburn",
                      "Marlon Brando", "Katharine Hepburn", "Denzel Washington", "Cate Blanchett", "Daniel Day-Lewis"],
            "difficulty_themes": {
                1: "Famous actors recognition",
                2: "Iconic roles",
                3: "Awards won",
                4: "Career timeline",
                5: "Acting methods",
                6: "Directors worked with",
                7: "Lesser-known films",
                8: "Personal life",
                9: "Industry impact",
                10: "Detailed filmography"
            }
        },
        "Authors and Writers": {
            "topics": ["Shakespeare", "Tolkien", "Hemingway", "Austen", "Dickens", "Orwell",
                      "García Márquez", "Kafka", "Joyce", "Woolf"],
            "difficulty_themes": {
                1: "Famous authors",
                2: "Major works",
                3: "Literary genres",
                4: "Themes explored",
                5: "Writing style",
                6: "Historical context",
                7: "Literary influence",
                8: "Lesser-known works",
                9: "Critical analysis",
                10: "Complete bibliography"
            }
        },
        "Entrepreneurs": {
            "topics": ["Steve Jobs", "Bill Gates", "Elon Musk", "Jeff Bezos", "Mark Zuckerberg",
                      "Warren Buffett", "Richard Branson", "Jack Ma", "Oprah Winfrey", "Larry Page"],
            "difficulty_themes": {
                1: "Famous entrepreneurs",
                2: "Companies founded",
                3: "Major innovations",
                4: "Business strategies",
                5: "Career milestones",
                6: "Leadership style",
                7: "Failures and comebacks",
                8: "Philanthropy",
                9: "Business philosophy",
                10: "Detailed business history"
            }
        },
        "Artists": {
            "topics": ["Da Vinci", "Van Gogh", "Picasso", "Michelangelo", "Rembrandt",
                      "Monet", "Warhol", "Dalí", "Frida Kahlo", "Banksy"],
            "difficulty_themes": {
                1: "Famous artists",
                2: "Iconic artworks",
                3: "Art movements",
                4: "Artistic techniques",
                5: "Life and career",
                6: "Artistic evolution",
                7: "Influences and influenced",
                8: "Lesser-known works",
                9: "Art historical significance",
                10: "Complete oeuvre analysis"
            }
        },
        "Sports Icons": {
            "topics": ["Muhammad Ali", "Michael Jordan", "Pelé", "Serena Williams", "Usain Bolt",
                      "Tom Brady", "Roger Federer", "Lionel Messi", "Babe Ruth", "Wayne Gretzky"],
            "difficulty_themes": {
                1: "Famous athletes",
                2: "Major achievements",
                3: "Records broken",
                4: "Career highlights",
                5: "Playing style",
                6: "Rivalries",
                7: "Off-field activities",
                8: "Statistical analysis",
                9: "Legacy in sport",
                10: "Complete career details"
            }
        }
    }
}


class QuestionGenerator:
    """Generates high-quality quiz questions using Claude AI."""

    def __init__(self, api_key: str):
        """Initialize the generator with API key."""
        self.client = anthropic.Anthropic(api_key=api_key)
        self.model = "claude-sonnet-4-20250514"

    def generate_questions(self, subject: str, category: str, level: int, count: int = 100) -> List[Dict[str, Any]]:
        """Generate questions for a specific subject, category, and level."""

        # Get subject-specific context
        subject_data = SUBJECT_PATTERNS.get(subject, {})
        category_data = subject_data.get(category, {})
        topics = category_data.get("topics", [])
        difficulty_theme = category_data.get("difficulty_themes", {}).get(level, f"Level {level} questions")

        # Create detailed prompt
        prompt = self._create_prompt(subject, category, level, count, topics, difficulty_theme)

        print(f"Generating {count} questions for {subject}/{category}/level{level}...")

        try:
            response = self.client.messages.create(
                model=self.model,
                max_tokens=16000,
                temperature=1.0,
                messages=[{
                    "role": "user",
                    "content": prompt
                }]
            )

            # Extract JSON from response
            content = response.content[0].text
            questions = self._parse_questions(content)

            print(f"✓ Generated {len(questions)} questions")
            return questions

        except Exception as e:
            print(f"✗ Error generating questions: {e}")
            return []

    def _create_prompt(self, subject: str, category: str, level: int, count: int,
                      topics: List[str], difficulty_theme: str) -> str:
        """Create a detailed prompt for question generation."""

        char_limits = {
            "question": {1: 120, 6: 140, 9: 160},
            "option": 100,
            "explanation": {1: 350, 6: 400, 9: 450}
        }

        q_limit = char_limits["question"].get(level, 120) if level <= 5 else (
            char_limits["question"].get(6, 140) if level <= 8 else char_limits["question"].get(9, 160)
        )
        e_limit = char_limits["explanation"].get(level, 350) if level <= 5 else (
            char_limits["explanation"].get(6, 400) if level <= 8 else char_limits["explanation"].get(9, 450)
        )

        topics_str = ", ".join(topics) if topics else "general knowledge in this category"

        return f"""You are creating {count} UNIQUE, EDUCATIONAL quiz questions for a quiz game.

Subject: {subject}
Category: {category}
Difficulty Level: {level}/10
Theme: {difficulty_theme}
Topics to cover: {topics_str}

CRITICAL REQUIREMENTS:
1. Generate EXACTLY {count} completely unique questions
2. NO duplicate questions or similar variations
3. REAL factual information only (no templates, no placeholders)
4. All 4 languages MUST be proper translations (en, es, de, nl)
5. Questions appropriate for level {level} difficulty
6. Character limits: ~{q_limit} chars (questions), ~{char_limits["option"]} chars (options), ~{e_limit} chars (explanations)

DIFFICULTY GUIDELINES:
Level 1-3: Basic, widely known facts. Simple language.
Level 4-6: Intermediate knowledge. Some technical terms OK.
Level 7-8: Advanced, detailed knowledge. Technical language allowed.
Level 9-10: Expert level. Specialized, detailed, technical content.

QUALITY STANDARDS:
✓ Factually accurate and verifiable
✓ One clearly correct answer
✓ Three plausible wrong answers (realistic distractors)
✓ Educational explanations (not just "X is correct because it is")
✓ Proper translations (not just "(ES)", "(DE)", "(NL)" suffixes!)
✓ Consistent meaning across all languages

OUTPUT FORMAT:
Return ONLY a valid JSON array of {count} question objects:

[
  {{
    "question": {{
      "en": "English question text",
      "es": "Spanish translation",
      "de": "German translation",
      "nl": "Dutch translation"
    }},
    "options": [
      {{
        "en": "Correct answer",
        "es": "Respuesta correcta",
        "de": "Richtige Antwort",
        "nl": "Correct antwoord"
      }},
      {{
        "en": "Wrong answer 1",
        "es": "Respuesta incorrecta 1",
        "de": "Falsche Antwort 1",
        "nl": "Fout antwoord 1"
      }},
      {{
        "en": "Wrong answer 2",
        "es": "Respuesta incorrecta 2",
        "de": "Falsche Antwort 2",
        "nl": "Fout antwoord 2"
      }},
      {{
        "en": "Wrong answer 3",
        "es": "Respuesta incorrecta 3",
        "de": "Falsche Antwort 3",
        "nl": "Fout antwoord 3"
      }}
    ],
    "correct": 0,
    "explanation": {{
      "en": "Educational explanation with context and interesting facts.",
      "es": "Explicación educativa con contexto y datos interesantes.",
      "de": "Lehrreiche Erklärung mit Kontext und interessanten Fakten.",
      "nl": "Educatieve uitleg met context en interessante feiten."
    }}
  }}
]

IMPORTANT:
- Return ONLY the JSON array, no other text
- Ensure all {count} questions are completely unique
- Use real translations, NOT placeholders like "(ES)", "(DE)", "(NL)"
- Make questions educational and interesting
- Appropriate difficulty for level {level}

Generate the questions now:"""

    def _parse_questions(self, content: str) -> List[Dict[str, Any]]:
        """Parse questions from Claude's response."""
        # Remove markdown code blocks if present
        content = re.sub(r'```json\s*', '', content)
        content = re.sub(r'```\s*$', '', content)
        content = content.strip()

        # Find JSON array
        json_match = re.search(r'\[.*\]', content, re.DOTALL)
        if json_match:
            try:
                questions = json.loads(json_match.group(0))
                return questions
            except json.JSONDecodeError as e:
                print(f"JSON parse error: {e}")
                return []
        else:
            print("No JSON array found in response")
            return []


class FileUpdater:
    """Updates quiz files with generated questions."""

    @staticmethod
    def read_file(file_path: Path) -> str:
        """Read content from a file."""
        with open(file_path, 'r', encoding='utf-8') as f:
            return f.read()

    @staticmethod
    def write_file(file_path: Path, content: str) -> None:
        """Write content to a file."""
        with open(file_path, 'w', encoding='utf-8', newline='\n') as f:
            f.write(content)

    @staticmethod
    def format_question(q: Dict[str, Any], indent: int = 4) -> str:
        """Format a single question as JavaScript."""
        ind = " " * indent
        ind2 = " " * (indent + 2)

        # Format question
        result = f"{ind}{{\n"
        result += f"{ind2}question: {{\n"
        for lang in ['en', 'es', 'de', 'nl']:
            text = q['question'][lang].replace('"', '\\"')
            result += f'{ind2}  {lang}: "{text}",\n'
        result = result.rstrip(',\n') + '\n'
        result += f"{ind2}}},\n"

        # Format options
        result += f"{ind2}options: [\n"
        for opt in q['options']:
            result += f"{ind2}  {{\n"
            for lang in ['en', 'es', 'de', 'nl']:
                text = opt[lang].replace('"', '\\"')
                result += f'{ind2}    {lang}: "{text}",\n'
            result = result.rstrip(',\n') + '\n'
            result += f"{ind2}  }},\n"
        result += f"{ind2}],\n"

        # Format correct index
        result += f"{ind2}correct: {q['correct']},\n"

        # Format explanation
        result += f"{ind2}explanation: {{\n"
        for lang in ['en', 'es', 'de', 'nl']:
            text = q['explanation'][lang].replace('"', '\\"')
            result += f'{ind2}  {lang}: "{text}",\n'
        result = result.rstrip(',\n') + '\n'
        result += f"{ind2}}}\n"

        result += f"{ind}}}"

        return result

    @staticmethod
    def create_file_content(questions: List[Dict[str, Any]], use_iife: bool = False) -> str:
        """Create complete file content with questions."""
        formatted_questions = ",\n".join([
            FileUpdater.format_question(q) for q in questions
        ])

        if use_iife:
            # Use IIFE format (for dinosaurs, food, etc.)
            return f"""(function() {{
  const questions = [
{formatted_questions}
  ];

  if (typeof module !== 'undefined' && module.exports) {{
    module.exports = {{ questions }};
  }}
}})();
"""
        else:
            # Use module.exports format (for AI, etc.)
            return f"""module.exports = {{
  questions: [
{formatted_questions}
  ]
}};
"""

    @staticmethod
    def detect_file_format(file_path: Path) -> bool:
        """Detect if file uses IIFE format."""
        content = FileUpdater.read_file(file_path)
        return content.strip().startswith('(function()')

    @staticmethod
    def update_file(file_path: Path, questions: List[Dict[str, Any]]) -> bool:
        """Update a quiz file with new questions."""
        try:
            # Detect format
            use_iife = FileUpdater.detect_file_format(file_path)

            # Create new content
            content = FileUpdater.create_file_content(questions, use_iife)

            # Write file
            FileUpdater.write_file(file_path, content)

            print(f"✓ Updated {file_path}")
            return True

        except Exception as e:
            print(f"✗ Error updating {file_path}: {e}")
            return False


def find_problematic_files(base_path: Path) -> List[tuple]:
    """Find files that need fixing (duplicates, templates, etc.)."""
    problematic = []

    # Priority subjects
    priority_subjects = {
        'dinosaurs': 10,  # Highest priority
        'ai': 9,
        'food': 8,
        'famous-people': 7,
    }

    for subject, priority in priority_subjects.items():
        subject_path = base_path / subject
        if not subject_path.exists():
            continue

        # Find all category directories
        for category_dir in subject_path.iterdir():
            if not category_dir.is_dir():
                continue

            category = category_dir.name

            # Check all 10 levels
            for level in range(1, 11):
                level_file = category_dir / f"level{level}.js"
                if level_file.exists():
                    # Check if file has issues
                    content = FileUpdater.read_file(level_file)

                    # Check for template markers
                    has_templates = bool(
                        re.search(r'\(ES\)|"\(DE\)"|"\(NL\)"', content) or
                        re.search(r'Template Question|TEMPLATE|TODO', content, re.IGNORECASE)
                    )

                    if has_templates:
                        problematic.append((priority, subject, category, level, level_file))

    # Sort by priority (highest first)
    problematic.sort(key=lambda x: x[0], reverse=True)

    return problematic


def main():
    """Main execution function."""
    print("=" * 80)
    print("ROBITQUIZ QUESTION GENERATOR")
    print("=" * 80)
    print()

    if not API_KEY:
        print("ERROR: ANTHROPIC_API_KEY environment variable not set!")
        print("Please set it with: export ANTHROPIC_API_KEY='your-key-here'")
        return

    generator = QuestionGenerator(API_KEY)

    # Find problematic files
    print("Scanning for problematic files...")
    problematic_files = find_problematic_files(BASE_PATH)

    if not problematic_files:
        print("No problematic files found!")
        return

    print(f"Found {len(problematic_files)} files that need fixing")
    print()

    # Group by subject
    by_subject = {}
    for priority, subject, category, level, file_path in problematic_files:
        if subject not in by_subject:
            by_subject[subject] = []
        by_subject[subject].append((category, level, file_path))

    # Show summary
    print("FILES TO FIX BY SUBJECT:")
    print("-" * 80)
    for subject, files in by_subject.items():
        categories = set(cat for cat, _, _ in files)
        print(f"{subject:20} {len(files):3} files across {len(categories)} categories")
    print()

    # Ask for confirmation
    response = input("Start generating questions? (y/n): ")
    if response.lower() != 'y':
        print("Cancelled.")
        return

    print()
    print("=" * 80)
    print("GENERATING QUESTIONS")
    print("=" * 80)
    print()

    # Process files
    total_files = len(problematic_files)
    success_count = 0

    for idx, (priority, subject, category, level, file_path) in enumerate(problematic_files, 1):
        print(f"[{idx}/{total_files}] {subject}/{category}/level{level}")

        # Generate questions
        questions = generator.generate_questions(subject, category, level, count=100)

        if len(questions) >= 100:
            # Update file
            if FileUpdater.update_file(file_path, questions):
                success_count += 1
        else:
            print(f"  ⚠ Only generated {len(questions)} questions, skipping file update")

        print()

        # Rate limiting - wait between requests
        if idx < total_files:
            time.sleep(2)  # 2 second delay between requests

    # Summary
    print()
    print("=" * 80)
    print("SUMMARY")
    print("=" * 80)
    print(f"Total files processed: {total_files}")
    print(f"Successfully updated: {success_count}")
    print(f"Failed: {total_files - success_count}")
    print()


if __name__ == "__main__":
    main()
