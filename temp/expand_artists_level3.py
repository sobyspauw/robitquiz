#!/usr/bin/env python3
"""
Script to expand Artists level3.js from 40 to 100 questions
"""

# Read the original file
file_path = r"c:\Users\rbosch\OneDrive - A.S. Watson Europe\prive\RobitQuiz\src\questions\data\subjects\famous-people\Artists\level3.js"

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Find the last question (question 40) which ends with "Gustav Klimt" section
# We need to add 60 new questions before the closing ];

new_questions = """,
        {
            question: {
                en: "Which artist painted 'Whistler's Mother'?",
                es: "¿Qué artista pintó 'La Madre de Whistler'?",
                de: "Welcher Künstler malte 'Whistlers Mutter'?",
                nl: "Welke kunstenaar schilderde 'Whistlers Moeder'?"
            },
            options: [
                {
                    en: "James McNeill Whistler",
                    es: "James McNeill Whistler",
                    de: "James McNeill Whistler",
                    nl: "James McNeill Whistler"
                },
                {
                    en: "John Singer Sargent",
                    es: "John Singer Sargent",
                    de: "John Singer Sargent",
                    nl: "John Singer Sargent"
                },
                {
                    en: "Winslow Homer",
                    es: "Winslow Homer",
                    de: "Winslow Homer",
                    nl: "Winslow Homer"
                },
                {
                    en: "Thomas Eakins",
                    es: "Thomas Eakins",
                    de: "Thomas Eakins",
                    nl: "Thomas Eakins"
                }
            ],
            correct: 0,
            explanation: {
                en: "James McNeill Whistler painted 'Arrangement in Grey and Black No. 1' (commonly known as 'Whistler's Mother') in 1871. This iconic American painting emphasizes tonal harmony over narrative content.",
                es: "James McNeill Whistler pintó 'Arreglo en Gris y Negro No. 1' (comúnmente conocido como 'La Madre de Whistler') en 1871. Esta pintura icónica estadounidense enfatiza la armonía tonal sobre el contenido narrativo.",
                de: "James McNeill Whistler malte 'Arrangement in Grau und Schwarz Nr. 1' (allgemein bekannt als 'Whistlers Mutter') 1871. Dieses ikonische amerikanische Gemälde betont tonale Harmonie über narrativen Inhalt.",
                nl: "James McNeill Whistler schilderde 'Arrangement in Grijs en Zwart Nr. 1' (algemeen bekend als 'Whistlers Moeder') in 1871. Dit iconische Amerikaanse schilderij benadrukt tonale harmonie boven narratieve inhoud."
            }
        },
        {
            question: {
                en: "Who founded the orphism art movement?",
                es: "¿Quién fundó el movimiento artístico del orfismo?",
                de: "Wer gründete die Kunstbewegung Orphismus?",
                nl: "Wie stichtte de kunstbeweging Orphism?"
            },
            options: [
                {
                    en: "Robert Delaunay",
                    es: "Robert Delaunay",
                    de: "Robert Delaunay",
                    nl: "Robert Delaunay"
                },
                {
                    en: "František Kupka",
                    es: "František Kupka",
                    de: "František Kupka",
                    nl: "František Kupka"
                },
                {
                    en: "Sonia Delaunay",
                    es: "Sonia Delaunay",
                    de: "Sonia Delaunay",
                    nl: "Sonia Delaunay"
                },
                {
                    en: "Fernand Léger",
                    es: "Fernand Léger",
                    de: "Fernand Léger",
                    nl: "Fernand Léger"
                }
            ],
            correct: 0,
            explanation: {
                en: "Robert Delaunay pioneered Orphism around 1912, an art movement characterized by bright colors and geometric shapes. The term was coined by poet Guillaume Apollinaire to describe this colorful offshoot of Cubism.",
                es: "Robert Delaunay fue pionero del Orfismo alrededor de 1912, un movimiento artístico caracterizado por colores brillantes y formas geométricas. El término fue acuñado por el poeta Guillaume Apollinaire para describir esta rama colorida del Cubismo.",
                de: "Robert Delaunay war Pionier des Orphismus um 1912, einer Kunstbewegung, die durch leuchtende Farben und geometrische Formen gekennzeichnet ist. Der Begriff wurde vom Dichter Guillaume Apollinaire geprägt, um diesen farbenfrohen Ableger des Kubismus zu beschreiben.",
                nl: "Robert Delaunay was pionier van het Orphisme rond 1912, een kunstbeweging gekenmerkt door heldere kleuren en geometrische vormen. De term werd bedacht door dichter Guillaume Apollinaire om deze kleurrijke tak van het Kubisme te beschrijven."
            }
        },
        {
            question: {
                en: "Which artist painted 'Blue Horses' and was a founding member of Der Blaue Reiter?",
                es: "¿Qué artista pintó 'Caballos Azules' y fue miembro fundador de Der Blaue Reiter?",
                de: "Welcher Künstler malte 'Blaue Pferde' und war Gründungsmitglied von Der Blaue Reiter?",
                nl: "Welke kunstenaar schilderde 'Blauwe Paarden' en was oprichter van Der Blaue Reiter?"
            },
            options: [
                {
                    en: "Franz Marc",
                    es: "Franz Marc",
                    de: "Franz Marc",
                    nl: "Franz Marc"
                },
                {
                    en: "August Macke",
                    es: "August Macke",
                    de: "August Macke",
                    nl: "August Macke"
                },
                {
                    en: "Gabriele Münter",
                    es: "Gabriele Münter",
                    de: "Gabriele Münter",
                    nl: "Gabriele Münter"
                },
                {
                    en: "Alexej von Jawlensky",
                    es: "Alexej von Jawlensky",
                    de: "Alexej von Jawlensky",
                    nl: "Alexej von Jawlensky"
                }
            ],
            correct: 0,
            explanation: {
                en: "Franz Marc painted 'Blue Horses' in 1911 and co-founded Der Blaue Reiter with Kandinsky. Marc believed animals possessed an inner spiritual quality and often depicted them in vibrant, non-naturalistic colors.",
                es: "Franz Marc pintó 'Caballos Azules' en 1911 y co-fundó Der Blaue Reiter con Kandinsky. Marc creía que los animales poseían una cualidad espiritual interior y a menudo los representaba en colores vibrantes y no naturalistas.",
                de: "Franz Marc malte 'Blaue Pferde' 1911 und gründete Der Blaue Reiter mit Kandinsky. Marc glaubte, dass Tiere eine innere spirituelle Qualität besäßen und stellte sie oft in lebhaften, nicht-naturalistischen Farben dar.",
                nl: "Franz Marc schilderde 'Blauwe Paarden' in 1911 en richtte Der Blaue Reiter op met Kandinsky. Marc geloofde dat dieren een innerlijke spirituele kwaliteit bezaten en beeldde ze vaak af in levendige, niet-naturalistische kleuren."
            }
        },
        {
            question: {
                en: "Who painted 'The Great Wave off Kanagawa'?",
                es: "¿Quién pintó 'La Gran Ola de Kanagawa'?",
                de: "Wer malte 'Die große Welle vor Kanagawa'?",
                nl: "Wie schilderde 'De Grote Golf bij Kanagawa'?"
            },
            options: [
                {
                    en: "Katsushika Hokusai",
                    es: "Katsushika Hokusai",
                    de: "Katsushika Hokusai",
                    nl: "Katsushika Hokusai"
                },
                {
                    en: "Utagawa Hiroshige",
                    es: "Utagawa Hiroshige",
                    de: "Utagawa Hiroshige",
                    nl: "Utagawa Hiroshige"
                },
                {
                    en: "Kitagawa Utamaro",
                    es: "Kitagawa Utamaro",
                    de: "Kitagawa Utamaro",
                    nl: "Kitagawa Utamaro"
                },
                {
                    en: "Katsushika Ōi",
                    es: "Katsushika Ōi",
                    de: "Katsushika Ōi",
                    nl: "Katsushika Ōi"
                }
            ],
            correct: 0,
            explanation: {
                en: "Katsushika Hokusai created 'The Great Wave off Kanagawa' around 1831 as part of his 'Thirty-Six Views of Mount Fuji' series. This iconic Japanese woodblock print profoundly influenced European Impressionism.",
                es: "Katsushika Hokusai creó 'La Gran Ola de Kanagawa' alrededor de 1831 como parte de su serie 'Treinta y Seis Vistas del Monte Fuji'. Esta icónica xilografía japonesa influyó profundamente en el Impresionismo europeo.",
                de: "Katsushika Hokusai schuf 'Die große Welle vor Kanagawa' um 1831 als Teil seiner Serie 'Sechsunddreißig Ansichten des Berges Fuji'. Dieser ikonische japanische Holzschnitt beeinflusste den europäischen Impressionismus tiefgreifend.",
                nl: "Katsushika Hokusai creëerde 'De Grote Golf bij Kanagawa' rond 1831 als onderdeel van zijn serie 'Zesendertig Gezichten op de Berg Fuji'. Deze iconische Japanse houtsnede beïnvloedde het Europese Impressionisme diepgaand."
            }
        }"""

# Due to file size, I'll create the rest as a continuation
# For now, let's add these 4 questions and verify the structure works

# Find where to insert - before the closing ];
# The pattern is:     }
#     ];

insert_marker = """            }
        }
    ];"""

if insert_marker in content:
    content = content.replace(insert_marker, f"""            }}
        }}{new_questions}
    ];""")

    # Write back
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(content)

    print("Successfully added new questions to Artists level3.js")
    print("Added 4 questions so far. Need to add 56 more.")
else:
    print("Could not find insertion point")
    print("Searching for alternative pattern...")
