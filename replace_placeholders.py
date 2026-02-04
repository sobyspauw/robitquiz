import re

# Read the file
file_path = r"C:\Users\rbosch\OneDrive - A.S. Watson Europe\prive\RobitQuiz\src\questions\data\subjects\famous-people\Artists\level10.js"

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Define 37 real Level 10 artist questions to replace placeholders 25-61
questions = [
    # Question 25
    {
        "question": {
            "en": "Which artist's 'Rabbit' sculpture sold for $91.1 million in 2019, making it the most expensive work by a living artist at auction?",
            "es": "¿La escultura 'Conejo' de qué artista se vendió por $91.1 millones en 2019, convirtiéndola en la obra más cara de un artista vivo en subasta?",
            "de": "Welches Künstlers 'Kaninchen'-Skulptur wurde 2019 für 91,1 Millionen Dollar verkauft und wurde damit zum teuersten Werk eines lebenden Künstlers bei einer Auktion?",
            "nl": "Welke kunstenaar's 'Konijn' sculptuur verkocht voor $91,1 miljoen in 2019, waarmee het het duurste werk van een levende kunstenaar op een veiling werd?"
        },
        "options": [
            {"en": "Jeff Koons", "es": "Jeff Koons", "de": "Jeff Koons", "nl": "Jeff Koons"},
            {"en": "Damien Hirst", "es": "Damien Hirst", "de": "Damien Hirst", "nl": "Damien Hirst"},
            {"en": "Takashi Murakami", "es": "Takashi Murakami", "de": "Takashi Murakami", "nl": "Takashi Murakami"},
            {"en": "Anish Kapoor", "es": "Anish Kapoor", "de": "Anish Kapoor", "nl": "Anish Kapoor"}
        ],
        "correct": 0,
        "explanation": {
            "en": "Jeff Koons' stainless steel 'Rabbit' (1986) sold at Christie's in 2019 for $91.1 million, setting the record for the most expensive work by a living artist sold at auction. The sculpture is part of his Statuary series and exemplifies his approach to transforming ordinary objects into monumental art.",
            "es": "El 'Conejo' de acero inoxidable de Jeff Koons (1986) se vendió en Christie's en 2019 por $91.1 millones, estableciendo el récord para la obra más cara de un artista vivo vendida en subasta. La escultura es parte de su serie Statuary y ejemplifica su enfoque de transformar objetos ordinarios en arte monumental.",
            "de": "Jeff Koons' Edelstahl-'Kaninchen' (1986) wurde 2019 bei Christie's für 91,1 Millionen Dollar verkauft und stellte damit den Rekord für das teuerste Werk eines lebenden Künstlers auf, das bei einer Auktion verkauft wurde. Die Skulptur ist Teil seiner Statuary-Serie und veranschaulicht seinen Ansatz, gewöhnliche Objekte in monumentale Kunst zu verwandeln.",
            "nl": "Jeff Koons' roestvrijstalen 'Konijn' (1986) verkocht bij Christie's in 2019 voor $91,1 miljoen, waarmee het record werd gevestigd voor het duurste werk van een levende kunstenaar verkocht op een veiling. Het beeldhouwwerk maakt deel uit van zijn Statuary-serie en belichaamt zijn benadering om gewone objecten om te zetten in monumentale kunst."
        }
    },
    # Add more questions here...
]

# For now, let's create a simple replacement script that can handle a batch
# Given the complexity, let's continue with the Edit tool approach

print("Script prepared. Use Edit tool instead for precise control.")
