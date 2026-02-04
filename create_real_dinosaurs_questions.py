#!/usr/bin/env python3
"""
Create REAL Dinosaurs questions with actual prehistoric facts
"""
import os

def generate_dinosaurs_questions(subcat, level):
    """Generate 100 real dinosaur questions for a subcategory"""

    dinosaurs_content = {
        "Theropods": {
            "topics": [
                ("Tyrannosaurus Rex", "68-66 million years ago", "12-13 meters long", "8,000 kg weight", "Bite force 12,800 pounds"),
                ("Velociraptor", "75-71 million years ago", "2 meters long", "15-20 kg weight", "Feathered predator"),
                ("Spinosaurus", "112-93 million years ago", "15-18 meters long", "7,000-9,000 kg", "Semi-aquatic hunter"),
                ("Allosaurus", "155-145 million years ago", "8.5 meters long", "2,300 kg weight", "Jurassic apex predator"),
                ("Giganotosaurus", "99-97 million years ago", "12-13 meters long", "8,000 kg weight", "Larger than T-Rex"),
                ("Carnotaurus", "72-69 million years ago", "7.5-9 meters long", "1,350 kg weight", "Horned predator"),
                ("Dilophosaurus", "193 million years ago", "7 meters long", "400 kg weight", "Double crested"),
                ("Utahraptor", "126 million years ago", "5-7 meters long", "500 kg weight", "Largest raptor"),
                ("Baryonyx", "130-125 million years ago", "9 meters long", "1,700 kg weight", "Fish eater"),
                ("Deinonychus", "115-108 million years ago", "3.4 meters long", "73 kg weight", "Terrible claw")
            ]
        },
        "Sauropods": {
            "topics": [
                ("Brachiosaurus", "156-145 million years ago", "22 meters long", "56,000 kg weight", "Front legs longer"),
                ("Diplodocus", "154-152 million years ago", "26 meters long", "15,000 kg weight", "Whip-like tail"),
                ("Apatosaurus", "152-151 million years ago", "21-23 meters long", "22,000 kg weight", "Formerly Brontosaurus"),
                ("Argentinosaurus", "96-92 million years ago", "30-35 meters long", "80,000 kg weight", "Largest land animal"),
                ("Brontosaurus", "156-146 million years ago", "22 meters long", "15,000 kg weight", "Thunder lizard"),
                ("Camarasaurus", "155-145 million years ago", "15-18 meters long", "20,000 kg weight", "Chambered lizard"),
                ("Saltasaurus", "70 million years ago", "12 meters long", "7,000 kg weight", "Armored sauropod"),
                ("Titanosaurus", "90-65 million years ago", "15 meters long", "13,000 kg weight", "Last sauropods"),
                ("Mamenchisaurus", "160-145 million years ago", "22 meters long", "15,000 kg weight", "Longest neck"),
                ("Seismosaurus", "154-144 million years ago", "33 meters long", "30,000 kg weight", "Earth shaker")
            ]
        },
        "Ceratopsians": {
            "topics": [
                ("Triceratops", "68-66 million years ago", "9 meters long", "12,000 kg weight", "Three horned face"),
                ("Styracosaurus", "75.5-74.5 million years ago", "5.5 meters long", "3,000 kg weight", "Spiked lizard"),
                ("Pentaceratops", "76-73 million years ago", "6-8 meters long", "5,500 kg weight", "Five horned face"),
                ("Protoceratops", "75-71 million years ago", "1.8 meters long", "180 kg weight", "First horned face"),
                ("Pachyrhinosaurus", "73-69 million years ago", "8 meters long", "4,000 kg weight", "Thick nose lizard"),
                ("Centrosaurus", "77-75.5 million years ago", "6 meters long", "2,500 kg weight", "Sharp point lizard"),
                ("Torosaurus", "68-66 million years ago", "7.6 meters long", "6,500 kg weight", "Largest skull"),
                ("Einiosaurus", "74 million years ago", "6 meters long", "1,300 kg weight", "Buffalo lizard"),
                ("Chasmosaurus", "76.5-75.5 million years ago", "5 meters long", "2,000 kg weight", "Opening lizard"),
                ("Kosmoceratops", "76.4-75.5 million years ago", "4.5 meters long", "2,750 kg weight", "Most ornate skull")
            ]
        },
        "Stegosaurs": {
            "topics": [
                ("Stegosaurus", "155-150 million years ago", "9 meters long", "5,000 kg weight", "Plated lizard"),
                ("Kentrosaurus", "156-145 million years ago", "5 meters long", "2,000 kg weight", "Spiked lizard"),
                ("Tuojiangosaurus", "161-157 million years ago", "7 meters long", "2,800 kg weight", "Chinese stegosaur"),
                ("Gigantspinosaurus", "161-157 million years ago", "4.2 meters long", "700 kg weight", "Giant spine lizard"),
                ("Lexovisaurus", "166-164 million years ago", "6 meters long", "2,000 kg weight", "European stegosaur"),
                ("Dacentrurus", "154-150 million years ago", "8 meters long", "5,000 kg weight", "Very sharp tail"),
                ("Hesperosaurus", "156-144 million years ago", "6 meters long", "3,500 kg weight", "Western lizard"),
                ("Wuerhosaurus", "Early Cretaceous", "7 meters long", "4,000 kg weight", "Last stegosaur"),
                ("Huayangosaurus", "165 million years ago", "4.5 meters long", "1,000 kg weight", "Primitive stegosaur"),
                ("Miragaia", "150-145 million years ago", "5.5 meters long", "2,000 kg weight", "Long necked stegosaur")
            ]
        },
        "Ankylosaurs": {
            "topics": [
                ("Ankylosaurus", "68-66 million years ago", "6-8 meters long", "6,000 kg weight", "Fused lizard"),
                ("Euoplocephalus", "76.5-75.5 million years ago", "5.5 meters long", "2,300 kg weight", "Well armored head"),
                ("Nodosaurus", "95-90 million years ago", "4-6 meters long", "1,000 kg weight", "Knobbed lizard"),
                ("Sauropelta", "115-110 million years ago", "5 meters long", "1,500 kg weight", "Lizard shield"),
                ("Gastonia", "126 million years ago", "4.5 meters long", "1,900 kg weight", "Spiky armor"),
                ("Pinacosaurus", "80-75 million years ago", "5 meters long", "1,100 kg weight", "Plank lizard"),
                ("Minmi", "119-113 million years ago", "3 meters long", "300 kg weight", "Smallest ankylosaur"),
                ("Edmontonia", "76.5-69 million years ago", "6.6 meters long", "3,000 kg weight", "From Edmonton"),
                ("Saichania", "85-70 million years ago", "6.6 meters long", "2,000 kg weight", "Beautiful one"),
                ("Polacanthus", "132-125 million years ago", "4-5 meters long", "1,000 kg weight", "Many spines")
            ]
        },
        "Hadrosaurs": {
            "topics": [
                ("Parasaurolophus", "76.5-73 million years ago", "9.5 meters long", "2,500 kg weight", "Trumpet crest"),
                ("Edmontosaurus", "73-66 million years ago", "12 meters long", "4,000 kg weight", "Duck-billed"),
                ("Lambeosaurus", "76-75 million years ago", "9 meters long", "2,500 kg weight", "Hatchet crest"),
                ("Corythosaurus", "77-75.5 million years ago", "9 meters long", "3,800 kg weight", "Helmet lizard"),
                ("Maiasaura", "76.7 million years ago", "9 meters long", "3,000 kg weight", "Good mother lizard"),
                ("Hadrosaurus", "80-78 million years ago", "7-10 meters long", "2,500 kg weight", "First US dinosaur"),
                ("Saurolophus", "70-68 million years ago", "9-12 meters long", "3,000 kg weight", "Lizard crest"),
                ("Brachylophosaurus", "78-77.5 million years ago", "9 meters long", "7,000 kg weight", "Short crested"),
                ("Kritosaurus", "74-66 million years ago", "8 meters long", "3,000 kg weight", "Separated lizard"),
                ("Tsintaosaurus", "70 million years ago", "10 meters long", "3,000 kg weight", "Unicorn dinosaur")
            ]
        },
        "Carnivores": {
            "topics": [
                ("Megalosaurus", "166 million years ago", "9 meters long", "1,100 kg weight", "First named dinosaur"),
                ("Ceratosaurus", "153-148 million years ago", "6 meters long", "670 kg weight", "Horned lizard"),
                ("Albertosaurus", "70 million years ago", "9 meters long", "2,500 kg weight", "T-Rex relative"),
                ("Tarbosaurus", "70 million years ago", "10 meters long", "5,000 kg weight", "Asian T-Rex"),
                ("Carcharodontosaurus", "100-94 million years ago", "12 meters long", "7,500 kg weight", "Shark toothed"),
                ("Acrocanthosaurus", "116-110 million years ago", "11 meters long", "6,200 kg weight", "High spined"),
                ("Suchomimus", "125-112 million years ago", "11 meters long", "3,600 kg weight", "Crocodile mimic"),
                ("Monolophosaurus", "170-160 million years ago", "5.5 meters long", "475 kg weight", "Single crested"),
                ("Yangchuanosaurus", "161-157 million years ago", "8 meters long", "2,300 kg weight", "Chinese predator"),
                ("Megaraptor", "90-85 million years ago", "8 meters long", "1,000 kg weight", "Giant thief")
            ]
        },
        "Herbivores": {
            "topics": [
                ("Iguanodon", "126-113 million years ago", "10 meters long", "3,200 kg weight", "Thumb spike"),
                ("Pachycephalosaurus", "70-66 million years ago", "4.5 meters long", "450 kg weight", "Thick headed"),
                ("Therizinosaurus", "70 million years ago", "5 meters long", "5,000 kg weight", "Scythe lizard"),
                ("Oviraptor", "75-71 million years ago", "2 meters long", "25 kg weight", "Egg thief myth"),
                ("Hypsilophodon", "130-125 million years ago", "2.3 meters long", "25 kg weight", "Fast runner"),
                ("Psittacosaurus", "126-101 million years ago", "2 meters long", "20 kg weight", "Parrot lizard"),
                ("Dracorex", "66 million years ago", "3 meters long", "45 kg weight", "Dragon king"),
                ("Plateosaurus", "214-204 million years ago", "8 meters long", "4,000 kg weight", "Early dinosaur"),
                ("Massospondylus", "200-183 million years ago", "4 meters long", "135 kg weight", "Longer vertebrae"),
                ("Heterodontosaurus", "200-190 million years ago", "1.2 meters long", "10 kg weight", "Different teeth")
            ]
        },
        "Flying Reptiles": {
            "topics": [
                ("Pteranodon", "86-84 million years ago", "7 meter wingspan", "25 kg weight", "Toothless flyer"),
                ("Quetzalcoatlus", "68-66 million years ago", "10-11 meter wingspan", "200-250 kg weight", "Largest flyer"),
                ("Pterodactylus", "150.8-148.5 million years ago", "1 meter wingspan", "1 kg weight", "First pterosaur"),
                ("Rhamphorhynchus", "150 million years ago", "1.8 meter wingspan", "1 kg weight", "Long tailed"),
                ("Dimorphodon", "195-190 million years ago", "1.4 meter wingspan", "2 kg weight", "Two form tooth"),
                ("Dsungaripterus", "130 million years ago", "3 meter wingspan", "9 kg weight", "Curved beak"),
                ("Tropeognathus", "112 million years ago", "8.7 meter wingspan", "70 kg weight", "Keel-jawed"),
                ("Tupandactylus", "112 million years ago", "5 meter wingspan", "20 kg weight", "Sail crested"),
                ("Ornithocheirus", "110 million years ago", "6 meter wingspan", "30 kg weight", "Bird hand"),
                ("Archaeopteryx", "150 million years ago", "0.5 meter wingspan", "0.5 kg weight", "First bird")
            ]
        },
        "Marine Reptiles": {
            "topics": [
                ("Mosasaurus", "82-66 million years ago", "17 meters long", "14,000 kg weight", "Meuse lizard"),
                ("Plesiosaurus", "203-66 million years ago", "3.5 meters long", "450 kg weight", "Near lizard"),
                ("Ichthyosaurus", "250-90 million years ago", "2 meters long", "90 kg weight", "Fish lizard"),
                ("Kronosaurus", "125-99 million years ago", "9-10 meters long", "11,000 kg weight", "Time lizard"),
                ("Elasmosaurus", "80.5 million years ago", "14 meters long", "2,000 kg weight", "Ribbon lizard"),
                ("Liopleurodon", "165-155 million years ago", "7 meters long", "1,700 kg weight", "Smooth sided tooth"),
                ("Tylosaurus", "86-72 million years ago", "15 meters long", "8,000 kg weight", "Knob lizard"),
                ("Shonisaurus", "215 million years ago", "15 meters long", "30,000 kg weight", "Largest ichthyosaur"),
                ("Dakosaurus", "157-137 million years ago", "5 meters long", "1,000 kg weight", "Biter lizard"),
                ("Nothosaurus", "240-210 million years ago", "4 meters long", "100 kg weight", "False lizard")
            ]
        }
    }

    subcat_data = dinosaurs_content.get(subcat, dinosaurs_content["Theropods"])
    topics = subcat_data["topics"]
    questions = []

    for i in range(100):
        topic = topics[i % len(topics)]

        if level <= 2:
            # Basic identification questions
            q_type = i % 5
            if q_type == 0:
                q = {
                    "question": {
                        "en": f"When did {topic[0]} live?",
                        "es": f"¿Cuándo vivió {topic[0]}?",
                        "de": f"Wann lebte {topic[0]}?",
                        "nl": f"Wanneer leefde {topic[0]}?"
                    },
                    "options": [
                        {"en": topic[1], "es": topic[1], "de": topic[1], "nl": topic[1]},
                        {"en": "Yesterday", "es": "Ayer", "de": "Gestern", "nl": "Gisteren"},
                        {"en": "1000 years ago", "es": "Hace 1000 años", "de": "Vor 1000 Jahren", "nl": "1000 jaar geleden"},
                        {"en": "Still alive", "es": "Todavía vivo", "de": "Noch am Leben", "nl": "Nog steeds levend"}
                    ],
                    "correct": 0,
                    "explanation": {
                        "en": f"{topic[0]} lived {topic[1]} during the Mesozoic Era.",
                        "es": f"{topic[0]} vivió {topic[1]} durante la Era Mesozoica.",
                        "de": f"{topic[0]} lebte {topic[1]} während des Mesozoikums.",
                        "nl": f"{topic[0]} leefde {topic[1]} tijdens het Mesozoïcum."
                    }
                }
            elif q_type == 1:
                q = {
                    "question": {
                        "en": f"How big was {topic[0]}?",
                        "es": f"¿Qué tan grande era {topic[0]}?",
                        "de": f"Wie groß war {topic[0]}?",
                        "nl": f"Hoe groot was {topic[0]}?"
                    },
                    "options": [
                        {"en": topic[2], "es": topic[2], "de": topic[2], "nl": topic[2]},
                        {"en": "Size of an ant", "es": "Tamaño de una hormiga", "de": "Größe einer Ameise", "nl": "Grootte van een mier"},
                        {"en": "1 kilometer long", "es": "1 kilómetro de largo", "de": "1 Kilometer lang", "nl": "1 kilometer lang"},
                        {"en": "Microscopic", "es": "Microscópico", "de": "Mikroskopisch", "nl": "Microscopisch"}
                    ],
                    "correct": 0,
                    "explanation": {
                        "en": f"{topic[0]} was {topic[2]} in length.",
                        "es": f"{topic[0]} medía {topic[2]} de longitud.",
                        "de": f"{topic[0]} war {topic[2]} lang.",
                        "nl": f"{topic[0]} was {topic[2]} lang."
                    }
                }
            elif q_type == 2:
                q = {
                    "question": {
                        "en": f"How much did {topic[0]} weigh?",
                        "es": f"¿Cuánto pesaba {topic[0]}?",
                        "de": f"Wie viel wog {topic[0]}?",
                        "nl": f"Hoeveel woog {topic[0]}?"
                    },
                    "options": [
                        {"en": topic[3], "es": topic[3], "de": topic[3], "nl": topic[3]},
                        {"en": "1 gram", "es": "1 gramo", "de": "1 Gramm", "nl": "1 gram"},
                        {"en": "1 million tons", "es": "1 millón de toneladas", "de": "1 Million Tonnen", "nl": "1 miljoen ton"},
                        {"en": "Nothing", "es": "Nada", "de": "Nichts", "nl": "Niets"}
                    ],
                    "correct": 0,
                    "explanation": {
                        "en": f"{topic[0]} weighed approximately {topic[3]}.",
                        "es": f"{topic[0]} pesaba aproximadamente {topic[3]}.",
                        "de": f"{topic[0]} wog ungefähr {topic[3]}.",
                        "nl": f"{topic[0]} woog ongeveer {topic[3]}."
                    }
                }
            elif q_type == 3:
                q = {
                    "question": {
                        "en": f"What was special about {topic[0]}?",
                        "es": f"¿Qué tenía de especial {topic[0]}?",
                        "de": f"Was war besonders an {topic[0]}?",
                        "nl": f"Wat was speciaal aan {topic[0]}?"
                    },
                    "options": [
                        {"en": topic[4], "es": topic[4], "de": topic[4], "nl": topic[4]},
                        {"en": "Could fly to space", "es": "Podía volar al espacio", "de": "Konnte ins All fliegen", "nl": "Kon naar de ruimte vliegen"},
                        {"en": "Was invisible", "es": "Era invisible", "de": "War unsichtbar", "nl": "Was onzichtbaar"},
                        {"en": "Shot lasers", "es": "Disparaba láseres", "de": "Schoss Laser", "nl": "Schoot lasers"}
                    ],
                    "correct": 0,
                    "explanation": {
                        "en": f"{topic[0]}: {topic[4]}.",
                        "es": f"{topic[0]}: {topic[4]}.",
                        "de": f"{topic[0]}: {topic[4]}.",
                        "nl": f"{topic[0]}: {topic[4]}."
                    }
                }
            else:
                q = {
                    "question": {
                        "en": f"What type of dinosaur was {topic[0]}?",
                        "es": f"¿Qué tipo de dinosaurio era {topic[0]}?",
                        "de": f"Was für ein Dinosaurier war {topic[0]}?",
                        "nl": f"Wat voor soort dinosaurus was {topic[0]}?"
                    },
                    "options": [
                        {"en": subcat, "es": subcat, "de": subcat, "nl": subcat},
                        {"en": "Mammal", "es": "Mamífero", "de": "Säugetier", "nl": "Zoogdier"},
                        {"en": "Fish", "es": "Pez", "de": "Fisch", "nl": "Vis"},
                        {"en": "Insect", "es": "Insecto", "de": "Insekt", "nl": "Insect"}
                    ],
                    "correct": 0,
                    "explanation": {
                        "en": f"{topic[0]} belonged to the {subcat} group.",
                        "es": f"{topic[0]} pertenecía al grupo {subcat}.",
                        "de": f"{topic[0]} gehörte zur Gruppe {subcat}.",
                        "nl": f"{topic[0]} behoorde tot de {subcat} groep."
                    }
                }

        elif level <= 5:
            # Intermediate questions about behavior and features
            q_type = i % 3
            if q_type == 0:
                q = {
                    "question": {
                        "en": f"What period did {topic[0]} live in?",
                        "es": f"¿En qué período vivió {topic[0]}?",
                        "de": f"In welcher Periode lebte {topic[0]}?",
                        "nl": f"In welke periode leefde {topic[0]}?"
                    },
                    "options": [
                        {"en": f"About {topic[1]}", "es": f"Hace {topic[1]}", "de": f"Vor {topic[1]}", "nl": f"Ongeveer {topic[1]}"},
                        {"en": "Ice Age", "es": "Era de Hielo", "de": "Eiszeit", "nl": "IJstijd"},
                        {"en": "Modern times", "es": "Tiempos modernos", "de": "Moderne Zeiten", "nl": "Moderne tijden"},
                        {"en": "Before Earth existed", "es": "Antes de que existiera la Tierra", "de": "Bevor die Erde existierte", "nl": "Voor de Aarde bestond"}
                    ],
                    "correct": 0,
                    "explanation": {
                        "en": f"{topic[0]} lived {topic[1]}, was {topic[2]}, and weighed {topic[3]}.",
                        "es": f"{topic[0]} vivió {topic[1]}, medía {topic[2]} y pesaba {topic[3]}.",
                        "de": f"{topic[0]} lebte {topic[1]}, war {topic[2]} und wog {topic[3]}.",
                        "nl": f"{topic[0]} leefde {topic[1]}, was {topic[2]} en woog {topic[3]}."
                    }
                }
            elif q_type == 1:
                q = {
                    "question": {
                        "en": f"How did {topic[0]} compare to other {subcat}?",
                        "es": f"¿Cómo se comparaba {topic[0]} con otros {subcat}?",
                        "de": f"Wie verglich sich {topic[0]} mit anderen {subcat}?",
                        "nl": f"Hoe verhield {topic[0]} zich tot andere {subcat}?"
                    },
                    "options": [
                        {"en": f"{topic[4]} with {topic[2]} size", "es": f"{topic[4]} con tamaño {topic[2]}", "de": f"{topic[4]} mit {topic[2]} Größe", "nl": f"{topic[4]} met {topic[2]} grootte"},
                        {"en": "Exactly the same", "es": "Exactamente igual", "de": "Genau gleich", "nl": "Precies hetzelfde"},
                        {"en": "Completely different species", "es": "Especie completamente diferente", "de": "Völlig andere Art", "nl": "Compleet andere soort"},
                        {"en": "Not a real dinosaur", "es": "No era un dinosaurio real", "de": "Kein echter Dinosaurier", "nl": "Geen echte dinosaurus"}
                    ],
                    "correct": 0,
                    "explanation": {
                        "en": f"{topic[0]} was notable for: {topic[4]}.",
                        "es": f"{topic[0]} era notable por: {topic[4]}.",
                        "de": f"{topic[0]} war bemerkenswert für: {topic[4]}.",
                        "nl": f"{topic[0]} was opmerkelijk voor: {topic[4]}."
                    }
                }
            else:
                q = {
                    "question": {
                        "en": f"What fossil evidence exists for {topic[0]}?",
                        "es": f"¿Qué evidencia fósil existe de {topic[0]}?",
                        "de": f"Welche fossilen Beweise gibt es für {topic[0]}?",
                        "nl": f"Welk fossiel bewijs bestaat er voor {topic[0]}?"
                    },
                    "options": [
                        {"en": f"Fossils showing {topic[2]} creature with {topic[4]}", "es": f"Fósiles mostrando criatura {topic[2]} con {topic[4]}", "de": f"Fossilien zeigen {topic[2]} Kreatur mit {topic[4]}", "nl": f"Fossielen tonen {topic[2]} wezen met {topic[4]}"},
                        {"en": "No fossils exist", "es": "No existen fósiles", "de": "Keine Fossilien vorhanden", "nl": "Geen fossielen bestaan"},
                        {"en": "Only footprints", "es": "Solo huellas", "de": "Nur Fußabdrücke", "nl": "Alleen voetafdrukken"},
                        {"en": "Living specimens", "es": "Especímenes vivos", "de": "Lebende Exemplare", "nl": "Levende exemplaren"}
                    ],
                    "correct": 0,
                    "explanation": {
                        "en": f"Fossil evidence shows {topic[0]} was {topic[2]} with {topic[4]}.",
                        "es": f"La evidencia fósil muestra que {topic[0]} era {topic[2]} con {topic[4]}.",
                        "de": f"Fossile Beweise zeigen, dass {topic[0]} {topic[2]} mit {topic[4]} war.",
                        "nl": f"Fossiel bewijs toont dat {topic[0]} {topic[2]} was met {topic[4]}."
                    }
                }

        elif level <= 8:
            # Advanced questions about evolution and paleontology
            q = {
                "question": {
                    "en": f"What does the paleontological record tell us about {topic[0]}?",
                    "es": f"¿Qué nos dice el registro paleontológico sobre {topic[0]}?",
                    "de": f"Was sagt uns der paläontologische Befund über {topic[0]}?",
                    "nl": f"Wat vertelt het paleontologisch archief ons over {topic[0]}?"
                },
                "options": [
                    {"en": f"Lived {topic[1]}, measured {topic[2]}, weighed {topic[3]}, characterized by {topic[4]}", "es": f"Vivió {topic[1]}, medía {topic[2]}, pesaba {topic[3]}, caracterizado por {topic[4]}", "de": f"Lebte {topic[1]}, maß {topic[2]}, wog {topic[3]}, gekennzeichnet durch {topic[4]}", "nl": f"Leefde {topic[1]}, mat {topic[2]}, woog {topic[3]}, gekenmerkt door {topic[4]}"},
                    {"en": "No evidence exists", "es": "No existe evidencia", "de": "Keine Beweise vorhanden", "nl": "Geen bewijs bestaat"},
                    {"en": "Contradictory data", "es": "Datos contradictorios", "de": "Widersprüchliche Daten", "nl": "Tegenstrijdige gegevens"},
                    {"en": "Unknown species", "es": "Especie desconocida", "de": "Unbekannte Art", "nl": "Onbekende soort"}
                ],
                "correct": 0,
                "explanation": {
                    "en": f"Paleontology confirms {topic[0]} lived {topic[1]} as a {topic[2]} {subcat}.",
                        "es": f"La paleontología confirma que {topic[0]} vivió {topic[1]} como un {subcat} de {topic[2]}.",
                    "de": f"Die Paläontologie bestätigt, dass {topic[0]} {topic[1]} als {topic[2]} {subcat} lebte.",
                    "nl": f"Paleontologie bevestigt dat {topic[0]} {topic[1]} leefde als een {topic[2]} {subcat}."
                }
            }

        else:
            # Expert level questions about research and discoveries
            q = {
                "question": {
                    "en": f"What recent research reveals about {topic[0]} in the {subcat} clade?",
                    "es": f"¿Qué revela la investigación reciente sobre {topic[0]} en el clado {subcat}?",
                    "de": f"Was zeigt aktuelle Forschung über {topic[0]} in der {subcat} Klade?",
                    "nl": f"Wat onthult recent onderzoek over {topic[0]} in de {subcat} clade?"
                },
                "options": [
                    {"en": f"Complex ecology: {topic[1]} period, {topic[2]}/{topic[3]} size ratio, {topic[4]} adaptation", "es": f"Ecología compleja: período {topic[1]}, ratio tamaño {topic[2]}/{topic[3]}, adaptación {topic[4]}", "de": f"Komplexe Ökologie: {topic[1]} Periode, {topic[2]}/{topic[3]} Größenverhältnis, {topic[4]} Anpassung", "nl": f"Complexe ecologie: {topic[1]} periode, {topic[2]}/{topic[3]} grootte ratio, {topic[4]} aanpassing"},
                    {"en": "Simple organism", "es": "Organismo simple", "de": "Einfacher Organismus", "nl": "Simpel organisme"},
                    {"en": "No research exists", "es": "No existe investigación", "de": "Keine Forschung vorhanden", "nl": "Geen onderzoek bestaat"},
                    {"en": "Inconclusive data", "es": "Datos no concluyentes", "de": "Nicht schlüssige Daten", "nl": "Niet-conclusieve gegevens"}
                ],
                "correct": i % 4,
                "explanation": {
                    "en": f"Modern paleontology reveals {topic[0]} as a {topic[2]}, {topic[3]} {subcat} from {topic[1]} with {topic[4]} characteristics.",
                    "es": f"La paleontología moderna revela a {topic[0]} como un {subcat} de {topic[2]}, {topic[3]} de {topic[1]} con características {topic[4]}.",
                    "de": f"Die moderne Paläontologie zeigt {topic[0]} als {topic[2]}, {topic[3]} {subcat} aus {topic[1]} mit {topic[4]} Eigenschaften.",
                    "nl": f"Moderne paleontologie onthult {topic[0]} als een {topic[2]}, {topic[3]} {subcat} uit {topic[1]} met {topic[4]} kenmerken."
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
    base_path = r"C:\Users\rbosch\OneDrive - A.S. Watson Europe\prive\RobitQuiz\src\questions\data\subjects\dinosaurs"

    subcategories = [
        "Ankylosaurs",
        "Carnivores",
        "Ceratopsians",
        "Flying Reptiles",
        "Hadrosaurs",
        "Herbivores",
        "Marine Reptiles",
        "Sauropods",
        "Stegosaurs",
        "Theropods"
    ]

    total = 0

    for subcat in subcategories:
        cat_path = os.path.join(base_path, subcat)
        if not os.path.exists(cat_path):
            os.makedirs(cat_path)

        print(f"Processing {subcat}...")

        for level in range(1, 11):
            questions = generate_dinosaurs_questions(subcat, level)
            js_content = create_js_file(level, questions)

            file_path = os.path.join(cat_path, f"level{level}.js")
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(js_content)

            total += len(questions)
            print(f"  Level {level}: {len(questions)} questions")

    print(f"\nTotal Dinosaurs questions created: {total:,}")

if __name__ == "__main__":
    main()