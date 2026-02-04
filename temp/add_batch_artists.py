#!/usr/bin/env python3
# Add batch of 20 questions to Artists level3.js
import re

file_path = r"src/questions/data/subjects/famous-people/Artists/level3.js"
with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Batch of 20 artist questions
batch = """,
        {
            question: {
                en: "Who created 'The Thinker' sculpture?",
                es: "¿Quién creó la escultura 'El Pensador'?",
                de: "Welcher Künstler schuf die Skulptur 'Der Denker'?",
                nl: "Welke kunstenaar creëerde de sculptuur 'De Denker'?"
            },
            options: [
                {en: "Auguste Rodin", es: "Auguste Rodin", de: "Auguste Rodin", nl: "Auguste Rodin"},
                {en: "Camille Claudel", es: "Camille Claudel", de: "Camille Claudel", nl: "Camille Claudel"},
                {en: "Antoine Bourdelle", es: "Antoine Bourdelle", de: "Antoine Bourdelle", nl: "Antoine Bourdelle"},
                {en: "Constantin Brâncuși", es: "Constantin Brâncuși", de: "Constantin Brâncuși", nl: "Constantin Brâncuși"}
            ],
            correct: 0,
            explanation: {
                en: "Auguste Rodin created 'The Thinker' in 1880, originally as part of 'The Gates of Hell'. This bronze sculpture became one of the most recognizable in the world.",
                es: "Auguste Rodin creó 'El Pensador' en 1880, originalmente como parte de 'Las Puertas del Infierno'. Esta escultura de bronce se convirtió en una de las más reconocibles del mundo.",
                de: "Auguste Rodin schuf 'Der Denker' 1880, ursprünglich als Teil von 'Das Höllentor'. Diese Bronzeskulptur wurde zu einer der bekanntesten der Welt.",
                nl: "Auguste Rodin creëerde 'De Denker' in 1880, oorspronkelijk als onderdeel van 'De Poorten van de Hel'. Deze bronzen sculptuur werd een van de meest herkenbare ter wereld."
            }
        },
        {
            question: {
                en: "Who painted 'The Death of Marat'?",
                es: "¿Quién pintó 'La Muerte de Marat'?",
                de: "Wer malte 'Der Tod des Marat'?",
                nl: "Wie schilderde 'De Dood van Marat'?"
            },
            options: [
                {en: "Jacques-Louis David", es: "Jacques-Louis David", de: "Jacques-Louis David", nl: "Jacques-Louis David"},
                {en: "Jean-Auguste-Dominique Ingres", es: "Jean-Auguste-Dominique Ingres", de: "Jean-Auguste-Dominique Ingres", nl: "Jean-Auguste-Dominique Ingres"},
                {en: "Théodore Géricault", es: "Théodore Géricault", de: "Théodore Géricault", nl: "Théodore Géricault"},
                {en: "Eugène Delacroix", es: "Eugène Delacroix", de: "Eugène Delacroix", nl: "Eugène Delacroix"}
            ],
            correct: 0,
            explanation: {
                en: "Jacques-Louis David painted 'The Death of Marat' in 1793, depicting the murdered revolutionary. This neoclassical masterpiece combines political propaganda with religious composition.",
                es: "Jacques-Louis David pintó 'La Muerte de Marat' en 1793, representando al revolucionario asesinado. Esta obra maestra neoclásica combina propaganda política con composición religiosa.",
                de: "Jacques-Louis David malte 'Der Tod des Marat' 1793 und zeigt den ermordeten Revolutionär. Dieses neoklassizistische Meisterwerk kombiniert politische Propaganda mit religiöser Komposition.",
                nl: "Jacques-Louis David schilderde 'De Dood van Marat' in 1793, met de vermoorde revolutionair. Dit neoklassieke meesterwerk combineert politieke propaganda met religieuze compositie."
            }
        },
        {
            question: {
                en: "Which artist painted 'The Gross Clinic'?",
                es: "¿Qué artista pintó 'La Clínica Gross'?",
                de: "Welcher Künstler malte 'Die Gross-Klinik'?",
                nl: "Welke kunstenaar schilderde 'De Gross Kliniek'?"
            },
            options: [
                {en: "Thomas Eakins", es: "Thomas Eakins", de: "Thomas Eakins", nl: "Thomas Eakins"},
                {en: "Winslow Homer", es: "Winslow Homer", de: "Winslow Homer", nl: "Winslow Homer"},
                {en: "John Singer Sargent", es: "John Singer Sargent", de: "John Singer Sargent", nl: "John Singer Sargent"},
                {en: "James McNeill Whistler", es: "James McNeill Whistler", de: "James McNeill Whistler", nl: "James McNeill Whistler"}
            ],
            correct: 0,
            explanation: {
                en: "Thomas Eakins painted 'The Gross Clinic' in 1875. This powerful realist work depicts Dr. Samuel Gross performing surgery, controversial for its unflinching depiction.",
                es: "Thomas Eakins pintó 'La Clínica Gross' en 1875. Esta poderosa obra realista representa al Dr. Samuel Gross realizando cirugía, controvertida por su representación sin tapujos.",
                de: "Thomas Eakins malte 'Die Gross-Klinik' 1875. Dieses kraftvolle realistische Werk zeigt Dr. Samuel Gross bei einer Operation, kontrovers wegen seiner ungeschönten Darstellung.",
                nl: "Thomas Eakins schilderde 'De Gross Kliniek' in 1875. Dit krachtige realistische werk toont Dr. Samuel Gross die een operatie uitvoert, controversieel vanwege zijn onverbloemde weergave."
            }
        },
        {
            question: {
                en: "Who painted 'Les Demoiselles d'Avignon'?",
                es: "¿Quién pintó 'Las Señoritas de Aviñón'?",
                de: "Wer malte 'Les Demoiselles d'Avignon'?",
                nl: "Wie schilderde 'Les Demoiselles d'Avignon'?"
            },
            options: [
                {en: "Pablo Picasso", es: "Pablo Picasso", de: "Pablo Picasso", nl: "Pablo Picasso"},
                {en: "Georges Braque", es: "Georges Braque", de: "Georges Braque", nl: "Georges Braque"},
                {en: "Henri Matisse", es: "Henri Matisse", de: "Henri Matisse", nl: "Henri Matisse"},
                {en: "André Derain", es: "André Derain", de: "André Derain", nl: "André Derain"}
            ],
            correct: 0,
            explanation: {
                en: "Pablo Picasso painted 'Les Demoiselles d'Avignon' in 1907. This revolutionary work is considered a proto-Cubist masterpiece that changed modern art forever.",
                es: "Pablo Picasso pintó 'Las Señoritas de Aviñón' en 1907. Esta obra revolucionaria se considera una obra maestra proto-cubista que cambió el arte moderno para siempre.",
                de: "Pablo Picasso malte 'Les Demoiselles d'Avignon' 1907. Dieses revolutionäre Werk gilt als proto-kubistisches Meisterwerk, das die moderne Kunst für immer veränderte.",
                nl: "Pablo Picasso schilderde 'Les Demoiselles d'Avignon' in 1907. Dit revolutionaire werk wordt beschouwd als een proto-kubistisch meesterwerk dat de moderne kunst voor altijd veranderde."
            }
        },
        {
            question: {
                en: "Which artist painted 'Saturn Devouring His Son'?",
                es: "¿Qué artista pintó 'Saturno Devorando a su Hijo'?",
                de: "Welcher Künstler malte 'Saturn verschlingt seinen Sohn'?",
                nl: "Welke kunstenaar schilderde 'Saturnus Verslindt zijn Zoon'?"
            },
            options: [
                {en: "Francisco Goya", es: "Francisco Goya", de: "Francisco Goya", nl: "Francisco Goya"},
                {en: "Peter Paul Rubens", es: "Peter Paul Rubens", de: "Peter Paul Rubens", nl: "Peter Paul Rubens"},
                {en: "Caravaggio", es: "Caravaggio", de: "Caravaggio", nl: "Caravaggio"},
                {en: "Diego Velázquez", es: "Diego Velázquez", de: "Diego Velázquez", nl: "Diego Velázquez"}
            ],
            correct: 0,
            explanation: {
                en: "Francisco Goya painted 'Saturn Devouring His Son' between 1819-1823 as part of his 'Black Paintings'. This disturbing work reflects Goya's dark vision in his later years.",
                es: "Francisco Goya pintó 'Saturno Devorando a su Hijo' entre 1819-1823 como parte de sus 'Pinturas Negras'. Esta obra inquietante refleja la visión oscura de Goya en sus últimos años.",
                de: "Francisco Goya malte 'Saturn verschlingt seinen Sohn' zwischen 1819-1823 als Teil seiner 'Schwarzen Gemälde'. Dieses verstörende Werk widerspiegelt Goyas dunkle Vision in seinen späteren Jahren.",
                nl: "Francisco Goya schilderde 'Saturnus Verslindt zijn Zoon' tussen 1819-1823 als onderdeel van zijn 'Zwarte Schilderijen'. Dit verontrustende werk weerspiegelt Goya's duistere visie in zijn latere jaren."
            }
        }"""

pattern = r'(\s+}\s+})\s*\];'
replacement = r'\1' + batch + '\n    ];'
new_content = re.sub(pattern, replacement, content, count=1)

if new_content != content:
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(new_content)
    new_count = new_content.count('question: {')
    print(f"SUCCESS: Added {batch.count('question: {')} questions")
    print(f"Total questions now: {new_count}/100")
else:
    print("ERROR: Could not add questions")
