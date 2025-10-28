(function() {
    const level1Questions = [
        {
            question: {
                en: "In which country are the Pyramids of Giza located?",
                es: "¿En qué país se encuentran las Pirámides de Giza?",
                de: "In welchem Land befinden sich die Pyramiden von Gizeh?",
                nl: "In welk land bevinden zich de piramides van Gizeh?"
            },
            options: [
                { en: "Jordan", es: "Jordania", de: "Jordanien", nl: "Jordanië" },
                { en: "Egypt", es: "Egipto", de: "Ägypten", nl: "Egypte" },
                { en: "Sudan", es: "Sudán", de: "Sudan", nl: "Soedan" },
                { en: "Libya", es: "Libia", de: "Libyen", nl: "Libië" }
            ],
            correctIndex: 1,
            explanation: {
                en: "The Pyramids of Giza are located in Egypt, on the Giza Plateau near Cairo.",
                es: "Las Pirámides de Giza están ubicadas en Egipto, en la meseta de Giza cerca de El Cairo.",
                de: "Die Pyramiden von Gizeh befinden sich in Ägypten, auf dem Gizeh-Plateau in der Nähe von Kairo.",
                nl: "De piramides van Gizeh bevinden zich in Egypte, op het Gizeh-plateau bij Caïro."
            }
        },
        {
            question: {
                en: "How many main pyramids are there at Giza?",
                es: "¿Cuántas pirámides principales hay en Giza?",
                de: "Wie viele Hauptpyramiden gibt es in Gizeh?",
                nl: "Hoeveel hoofdpiramides zijn er in Gizeh?"
            },
            options: [
                { en: "Two", es: "Dos", de: "Zwei", nl: "Twee" },
                { en: "Three", es: "Tres", de: "Drei", nl: "Drie" },
                { en: "Four", es: "Cuatro", de: "Vier", nl: "Vier" },
                { en: "Five", es: "Cinco", de: "Fünf", nl: "Vijf" }
            ],
            correctIndex: 1,
            explanation: {
                en: "There are three main pyramids at Giza: the Great Pyramid of Khufu, the Pyramid of Khafre, and the Pyramid of Menkaure.",
                es: "Hay tres pirámides principales en Giza: la Gran Pirámide de Keops, la Pirámide de Kefrén y la Pirámide de Micerino.",
                de: "Es gibt drei Hauptpyramiden in Gizeh: die Große Pyramide von Cheops, die Pyramide von Chephren und die Pyramide von Mykerinos.",
                nl: "Er zijn drie hoofdpiramides in Gizeh: de Grote Piramide van Cheops, de Piramide van Chefren en de Piramide van Mykerinos."
            }
        },
        {
            question: {
                en: "When were the Pyramids of Giza approximately built?",
                es: "¿Cuándo se construyeron aproximadamente las Pirámides de Giza?",
                de: "Wann wurden die Pyramiden von Gizeh ungefähr gebaut?",
                nl: "Wanneer werden de piramides van Gizeh ongeveer gebouwd?"
            },
            options: [
                { en: "Around 2580-2560 BC", es: "Alrededor de 2580-2560 a.C.", de: "Um 2580-2560 v. Chr.", nl: "Rond 2580-2560 v.Chr." },
                { en: "Around 1000 BC", es: "Alrededor de 1000 a.C.", de: "Um 1000 v. Chr.", nl: "Rond 1000 v.Chr." },
                { en: "Around 500 AD", es: "Alrededor de 500 d.C.", de: "Um 500 n. Chr.", nl: "Rond 500 n.Chr." },
                { en: "Around 1200 AD", es: "Alrededor de 1200 d.C.", de: "Um 1200 n. Chr.", nl: "Rond 1200 n.Chr." }
            ],
            correctIndex: 0,
            explanation: {
                en: "The Pyramids of Giza were built during the 4th Dynasty of the Old Kingdom, around 2580-2560 BC.",
                es: "Las Pirámides de Giza fueron construidas durante la Cuarta Dinastía del Imperio Antiguo, alrededor de 2580-2560 a.C.",
                de: "Die Pyramiden von Gizeh wurden während der 4. Dynastie des Alten Reiches um 2580-2560 v. Chr. erbaut.",
                nl: "De piramides van Gizeh werden gebouwd tijdens de 4e Dynastie van het Oude Rijk, rond 2580-2560 v.Chr."
            }
        },
        {
            question: {
                en: "Who was the largest pyramid at Giza built for?",
                es: "¿Para quién se construyó la pirámide más grande de Giza?",
                de: "Für wen wurde die größte Pyramide in Gizeh gebaut?",
                nl: "Voor wie werd de grootste piramide in Gizeh gebouwd?"
            },
            options: [
                { en: "Pharaoh Khufu (Cheops)", es: "Faraón Keops", de: "Pharao Cheops", nl: "Farao Cheops" },
                { en: "Pharaoh Khafre", es: "Faraón Kefrén", de: "Pharao Chephren", nl: "Farao Chefren" },
                { en: "Pharaoh Menkaure", es: "Faraón Micerino", de: "Pharao Mykerinos", nl: "Farao Mykerinos" },
                { en: "Pharaoh Tutankhamun", es: "Faraón Tutankamón", de: "Pharao Tutanchamun", nl: "Farao Toetanchamon" }
            ],
            correctIndex: 0,
            explanation: {
                en: "The Great Pyramid, the largest at Giza, was built for Pharaoh Khufu (also known as Cheops in Greek).",
                es: "La Gran Pirámide, la más grande de Giza, fue construida para el Faraón Keops.",
                de: "Die Große Pyramide, die größte in Gizeh, wurde für Pharao Cheops gebaut.",
                nl: "De Grote Piramide, de grootste in Gizeh, werd gebouwd voor Farao Cheops."
            }
        },
        {
            question: {
                en: "What was the original height of the Great Pyramid?",
                es: "¿Cuál era la altura original de la Gran Pirámide?",
                de: "Wie hoch war die Große Pyramide ursprünglich?",
                nl: "Wat was de oorspronkelijke hoogte van de Grote Piramide?"
            },
            options: [
                { en: "100 m", es: "100 metros", de: "100 Meter", nl: "100 meter" },
                { en: "120 m", es: "120 metros", de: "120 Meter", nl: "120 meter" },
                { en: "146.5 m", es: "146,5 metros", de: "146,5 Meter", nl: "146,5 meter" },
                { en: "180 m", es: "180 metros", de: "180 Meter", nl: "180 meter" }
            ],
            correctIndex: 2,
            explanation: {
                en: "The Great Pyramid was originally 146.5 meters (481 feet) tall, though it now stands at 138.8 meters due to erosion.",
                es: "La Gran Pirámide tenía originalmente 146,5 metros (481 pies) de altura, aunque ahora mide 138,8 metros debido a la erosión.",
                de: "Die Große Pyramide war ursprünglich 146,5 Meter (481 Fuß) hoch, steht aber jetzt aufgrund von Erosion bei 138,8 Metern.",
                nl: "De Grote Piramide was oorspronkelijk 146,5 meter (481 voet) hoog, hoewel hij nu 138,8 meter hoog is door erosie."
            }
        },
        {
            question: {
                en: "What primary purpose did the pyramids serve?",
                es: "¿Cuál era el propósito principal de las pirámides?",
                de: "Welchen Hauptzweck erfüllten die Pyramiden?",
                nl: "Wat was het primaire doel van de piramides?"
            },
            options: [
                { en: "Temples for worship", es: "Templos de adoración", de: "Tempel für Anbetung", nl: "Tempels voor aanbidding" },
                { en: "Tombs for pharaohs", es: "Tumbas para faraones", de: "Gräber für Pharaonen", nl: "Graven voor farao's" },
                { en: "Fortresses for defense", es: "Fortalezas defensivas", de: "Festungen zur Verteidigung", nl: "Forten ter verdediging" },
                { en: "Observatories for astronomy", es: "Observatorios astronómicos", de: "Observatorien für Astronomie", nl: "Observatoria voor astronomie" }
            ],
            correctIndex: 1,
            explanation: {
                en: "The pyramids were built as elaborate tombs for the pharaohs and their journey to the afterlife.",
                es: "Las pirámides se construyeron como elaboradas tumbas para los faraones y su viaje al más allá.",
                de: "Die Pyramiden wurden als aufwendige Gräber für die Pharaonen und ihre Reise ins Jenseits gebaut.",
                nl: "De piramides werden gebouwd als uitgebreide graven voor de farao's en hun reis naar het hiernamaals."
            }
        },
        {
            question: {
                en: "What famous monument sits near the pyramids at Giza?",
                es: "¿Qué monumento famoso se encuentra cerca de las pirámides de Giza?",
                de: "Welches berühmte Monument steht in der Nähe der Pyramiden von Gizeh?",
                nl: "Welk beroemd monument staat bij de piramides van Gizeh?"
            },
            options: [
                { en: "The Colossus of Rhodes", es: "El Coloso de Rodas", de: "Der Koloss von Rhodos", nl: "De Kolossus van Rhodos" },
                { en: "The Great Sphinx", es: "La Gran Esfinge", de: "Die Große Sphinx", nl: "De Grote Sfinx" },
                { en: "The Statue of Zeus", es: "La Estatua de Zeus", de: "Die Statue des Zeus", nl: "Het Standbeeld van Zeus" },
                { en: "The Hanging Gardens", es: "Los Jardines Colgantes", de: "Die Hängenden Gärten", nl: "De Hangende Tuinen" }
            ],
            correctIndex: 1,
            explanation: {
                en: "The Great Sphinx, a limestone statue with a lion's body and human head, stands guard near the pyramids.",
                es: "La Gran Esfinge, una estatua de piedra caliza con cuerpo de león y cabeza humana, custodia las pirámides.",
                de: "Die Große Sphinx, eine Kalksteinstatue mit Löwenkörper und Menschenkopf, bewacht die Pyramiden.",
                nl: "De Grote Sfinx, een kalkstenen beeld met een leeuwenlichaam en menselijk hoofd, bewaakt de piramides."
            }
        },
        {
            question: {
                en: "How many stone blocks were used to build the Great Pyramid?",
                es: "¿Cuántos bloques de piedra se usaron para construir la Gran Pirámide?",
                de: "Wie viele Steinblöcke wurden für den Bau der Großen Pyramide verwendet?",
                nl: "Hoeveel stenen blokken werden gebruikt om de Grote Piramide te bouwen?"
            },
            options: [
                { en: "500,000 blocks", es: "500.000 bloques", de: "500.000 Blöcke", nl: "500.000 blokken" },
                { en: "1 million blocks", es: "1 millón de bloques", de: "1 Million Blöcke", nl: "1 miljoen blokken" },
                { en: "2.3 million blocks", es: "2,3 millones de bloques", de: "2,3 Millionen Blöcke", nl: "2,3 miljoen blokken" },
                { en: "5 million blocks", es: "5 millones de bloques", de: "5 Millionen Blöcke", nl: "5 miljoen blokken" }
            ],
            correctIndex: 2,
            explanation: {
                en: "The Great Pyramid was constructed using approximately 2.3 million stone blocks, each weighing 2-80 tons.",
                es: "La Gran Pirámide se construyó utilizando aproximadamente 2,3 millones de bloques de piedra, cada uno pesando entre 2 y 80 toneladas.",
                de: "Die Große Pyramide wurde aus etwa 2,3 Millionen Steinblöcken gebaut, die jeweils 2-80 Tonnen wogen.",
                nl: "De Grote Piramide werd gebouwd met ongeveer 2,3 miljoen stenen blokken, elk met een gewicht van 2-80 ton."
            }
        },
        {
            question: {
                en: "During which Egyptian period were the Giza pyramids built?",
                es: "¿Durante qué período egipcio se construyeron las pirámides de Giza?",
                de: "In welcher ägyptischen Periode wurden die Pyramiden von Gizeh gebaut?",
                nl: "In welke Egyptische periode werden de piramides van Gizeh gebouwd?"
            },
            options: [
                { en: "New Kingdom", es: "Imperio Nuevo", de: "Neues Reich", nl: "Nieuwe Rijk" },
                { en: "Middle Kingdom", es: "Imperio Medio", de: "Mittleres Reich", nl: "Middenrijk" },
                { en: "Old Kingdom", es: "Imperio Antiguo", de: "Altes Reich", nl: "Oude Rijk" },
                { en: "Ptolemaic Period", es: "Período Ptolemaico", de: "Ptolemäerzeit", nl: "Ptolemaeïsche Periode" }
            ],
            correctIndex: 2,
            explanation: {
                en: "The Pyramids of Giza were built during the Old Kingdom period, specifically the 4th Dynasty.",
                es: "Las Pirámides de Giza fueron construidas durante el período del Imperio Antiguo, específicamente la Cuarta Dinastía.",
                de: "Die Pyramiden von Gizeh wurden während des Alten Reiches, speziell der 4. Dynastie, gebaut.",
                nl: "De piramides van Gizeh werden gebouwd tijdens het Oude Rijk, specifiek de 4e Dynastie."
            }
        },
        {
            question: {
                en: "What type of stone was primarily used for the pyramid cores?",
                es: "¿Qué tipo de piedra se usó principalmente para el núcleo de las pirámides?",
                de: "Welche Steinart wurde hauptsächlich für die Pyramidenkerne verwendet?",
                nl: "Welk type steen werd vooral gebruikt voor de kernen van de piramides?"
            },
            options: [
                { en: "Marble", es: "Mármol", de: "Marmor", nl: "Marmer" },
                { en: "Granite", es: "Granito", de: "Granit", nl: "Graniet" },
                { en: "Limestone", es: "Piedra caliza", de: "Kalkstein", nl: "Kalksteen" },
                { en: "Sandstone", es: "Arenisca", de: "Sandstein", nl: "Zandsteen" }
            ],
            correctIndex: 2,
            explanation: {
                en: "Limestone was the primary material used for the pyramid cores, quarried locally from the Giza Plateau.",
                es: "La piedra caliza fue el material principal utilizado para los núcleos de las pirámides, extraída localmente de la meseta de Giza.",
                de: "Kalkstein war das Hauptmaterial für die Pyramidenkerne, das vor Ort auf dem Gizeh-Plateau abgebaut wurde.",
                nl: "Kalksteen was het primaire materiaal voor de kernen van de piramides, lokaal gewonnen op het Gizeh-plateau."
            }
        },
        {
            question: {
                en: "Which dynasty did Pharaoh Khufu belong to?",
                es: "¿A qué dinastía pertenecía el Faraón Keops?",
                de: "Zu welcher Dynastie gehörte Pharao Cheops?",
                nl: "Tot welke dynastie behoorde Farao Cheops?"
            },
            options: [
                { en: "3rd Dynasty", es: "Tercera Dinastía", de: "3. Dynastie", nl: "3e Dynastie" },
                { en: "4th Dynasty", es: "Cuarta Dinastía", de: "4. Dynastie", nl: "4e Dynastie" },
                { en: "5th Dynasty", es: "Quinta Dinastía", de: "5. Dynastie", nl: "5e Dynastie" },
                { en: "6th Dynasty", es: "Sexta Dinastía", de: "6. Dynastie", nl: "6e Dynastie" }
            ],
            correctIndex: 1,
            explanation: {
                en: "Pharaoh Khufu belonged to the 4th Dynasty of the Old Kingdom, ruling around 2589-2566 BC.",
                es: "El Faraón Keops pertenecía a la Cuarta Dinastía del Imperio Antiguo, gobernando alrededor de 2589-2566 a.C.",
                de: "Pharao Cheops gehörte zur 4. Dynastie des Alten Reiches und regierte um 2589-2566 v. Chr.",
                nl: "Farao Cheops behoorde tot de 4e Dynastie van het Oude Rijk en regeerde rond 2589-2566 v.Chr."
            }
        },
        {
            question: {
                en: "The Great Pyramid is also known as the Pyramid of what?",
                es: "¿La Gran Pirámide también se conoce como la Pirámide de qué?",
                de: "Die Große Pyramide ist auch bekannt als die Pyramide von was?",
                nl: "De Grote Piramide staat ook bekend als de Piramide van wat?"
            },
            options: [
                { en: "Pyramid of Khafre", es: "Pirámide de Kefrén", de: "Pyramide von Chephren", nl: "Piramide van Chefren" },
                { en: "Pyramid of Khufu", es: "Pirámide de Keops", de: "Pyramide von Cheops", nl: "Piramide van Cheops" },
                { en: "Pyramid of Menkaure", es: "Pirámide de Micerino", de: "Pyramide von Mykerinos", nl: "Piramide van Mykerinos" },
                { en: "Pyramid of Djoser", es: "Pirámide de Zoser", de: "Pyramide von Djoser", nl: "Piramide van Djoser" }
            ],
            correctIndex: 1,
            explanation: {
                en: "The Great Pyramid is also known as the Pyramid of Khufu (or Cheops in Greek), named after the pharaoh who commissioned it.",
                es: "La Gran Pirámide también se conoce como la Pirámide de Keops, nombrada en honor al faraón que la encargó.",
                de: "Die Große Pyramide ist auch bekannt als Pyramide von Cheops, benannt nach dem Pharao, der sie in Auftrag gab.",
                nl: "De Grote Piramide staat ook bekend als de Piramide van Cheops, vernoemd naar de farao die hem liet bouwen."
            }
        },
        {
            question: {
                en: "What was the outer casing of the pyramids originally made of?",
                es: "¿De qué estaba hecha originalmente la cubierta exterior de las pirámides?",
                de: "Woraus bestand die äußere Verkleidung der Pyramiden ursprünglich?",
                nl: "Waar was de buitenbekleding van de piramides oorspronkelijk van gemaakt?"
            },
            options: [
                { en: "Copper", es: "Cobre", de: "Kupfer", nl: "Koper" },
                { en: "Gold", es: "Oro", de: "Gold", nl: "Goud" },
                { en: "White limestone", es: "Piedra caliza blanca", de: "Weißer Kalkstein", nl: "Witte kalksteen" },
                { en: "Black granite", es: "Granito negro", de: "Schwarzer Granit", nl: "Zwart graniet" }
            ],
            correctIndex: 2,
            explanation: {
                en: "The pyramids were originally covered in smooth white Tura limestone casing stones that made them shine brilliantly in the sun.",
                es: "Las pirámides estaban originalmente cubiertas con piedras de revestimiento de piedra caliza blanca de Tura que las hacían brillar intensamente al sol.",
                de: "Die Pyramiden waren ursprünglich mit glatten weißen Tura-Kalkstein-Verkleidungssteinen bedeckt, die sie in der Sonne glänzen ließen.",
                nl: "De piramides waren oorspronkelijk bedekt met gladde witte Tura-kalksteen bekledingsstenen die ze schitterend in de zon lieten schijnen."
            }
        },
        {
            question: {
                en: "Near which modern city are the Pyramids of Giza located?",
                es: "¿Cerca de qué ciudad moderna se encuentran las Pirámides de Giza?",
                de: "In der Nähe welcher modernen Stadt befinden sich die Pyramiden von Gizeh?",
                nl: "Bij welke moderne stad bevinden zich de piramides van Gizeh?"
            },
            options: [
                { en: "Alexandria", es: "Alejandría", de: "Alexandria", nl: "Alexandrië" },
                { en: "Luxor", es: "Luxor", de: "Luxor", nl: "Luxor" },
                { en: "Cairo", es: "El Cairo", de: "Kairo", nl: "Caïro" },
                { en: "Aswan", es: "Asuán", de: "Assuan", nl: "Aswan" }
            ],
            correctIndex: 2,
            explanation: {
                en: "The Pyramids of Giza are located on the Giza Plateau on the outskirts of Cairo, Egypt's capital city.",
                es: "Las Pirámides de Giza están ubicadas en la meseta de Giza en las afueras de El Cairo, la capital de Egipto.",
                de: "Die Pyramiden von Gizeh befinden sich auf dem Gizeh-Plateau am Stadtrand von Kairo, der Hauptstadt Ägyptens.",
                nl: "De piramides van Gizeh bevinden zich op het Gizeh-plateau aan de rand van Caïro, de hoofdstad van Egypte."
            }
        },
        {
            question: {
                en: "Which of the following is NOT one of the three main pyramids at Giza?",
                es: "¿Cuál de las siguientes NO es una de las tres pirámides principales de Giza?",
                de: "Welche der folgenden ist KEINE der drei Hauptpyramiden in Gizeh?",
                nl: "Welke van de volgende is GEEN van de drie hoofdpiramides in Gizeh?"
            },
            options: [
                { en: "Pyramid of Khufu", es: "Pirámide de Keops", de: "Pyramide von Cheops", nl: "Piramide van Cheops" },
                { en: "Pyramid of Khafre", es: "Pirámide de Kefrén", de: "Pyramide von Chephren", nl: "Piramide van Chefren" },
                { en: "Pyramid of Djoser", es: "Pirámide de Zoser", de: "Pyramide von Djoser", nl: "Piramide van Djoser" },
                { en: "Pyramid of Menkaure", es: "Pirámide de Micerino", de: "Pyramide von Mykerinos", nl: "Piramide van Mykerinos" }
            ],
            correctIndex: 2,
            explanation: {
                en: "The Pyramid of Djoser is a step pyramid located at Saqqara, not Giza. The three main pyramids at Giza are those of Khufu, Khafre, and Menkaure.",
                es: "La Pirámide de Zoser es una pirámide escalonada ubicada en Saqqara, no en Giza. Las tres pirámides principales de Giza son las de Keops, Kefrén y Micerino.",
                de: "Die Pyramide von Djoser ist eine Stufenpyramide in Saqqara, nicht in Gizeh. Die drei Hauptpyramiden in Gizeh sind die von Cheops, Chephren und Mykerinos.",
                nl: "De Piramide van Djoser is een trappiramide in Saqqara, niet in Gizeh. De drie hoofdpiramides in Gizeh zijn die van Cheops, Chefren en Mykerinos."
            }
        },
        {
            question: {
                en: "What is the approximate base area of the Great Pyramid?",
                es: "¿Cuál es el área aproximada de la base de la Gran Pirámide?",
                de: "Wie groß ist die ungefähre Grundfläche der Großen Pyramide?",
                nl: "Wat is het geschatte basisoppervlak van de Grote Piramide?"
            },
            options: [
                { en: "5 hectares", es: "5 hectáreas", de: "5 Hektar", nl: "5 hectare" },
                { en: "8 hectares", es: "8 hectáreas", de: "8 Hektar", nl: "8 hectare" },
                { en: "13 hectares", es: "13 hectáreas", de: "13 Hektar", nl: "13 hectare" },
                { en: "20 hectares", es: "20 hectáreas", de: "20 Hektar", nl: "20 hectare" }
            ],
            correctIndex: 2,
            explanation: {
                en: "The Great Pyramid has a base area of approximately 13 hectares (230.4 meters on each side), making it one of the largest structures ever built.",
                es: "La Gran Pirámide tiene un área de base de aproximadamente 13 hectáreas (230,4 metros por cada lado), lo que la convierte en una de las estructuras más grandes jamás construidas.",
                de: "Die Große Pyramide hat eine Grundfläche von etwa 13 Hektar (230,4 Meter auf jeder Seite), was sie zu einem der größten jemals gebauten Bauwerke macht.",
                nl: "De Grote Piramide heeft een basisoppervlak van ongeveer 13 hectare (230,4 meter aan elke kant), waardoor het een van de grootste ooit gebouwde constructies is."
            }
        },
        {
            question: {
                en: "What ancient wonder of the world are the Pyramids of Giza?",
                es: "¿Qué maravilla del mundo antiguo son las Pirámides de Giza?",
                de: "Welches antike Weltwunder sind die Pyramiden von Gizeh?",
                nl: "Welk oud wereldwonder zijn de piramides van Gizeh?"
            },
            options: [
                { en: "The third wonder", es: "La tercera maravilla", de: "Das dritte Weltwunder", nl: "Het derde wonder" },
                { en: "The oldest surviving wonder", es: "La maravilla más antigua que sobrevive", de: "Das älteste erhaltene Weltwunder", nl: "Het oudste overgebleven wonder" },
                { en: "The tallest wonder", es: "La maravilla más alta", de: "Das höchste Weltwunder", nl: "Het hoogste wonder" },
                { en: "The youngest wonder", es: "La maravilla más joven", de: "Das jüngste Weltwunder", nl: "Het jongste wonder" }
            ],
            correctIndex: 1,
            explanation: {
                en: "The Great Pyramid of Giza is the oldest of the Seven Wonders of the Ancient World and the only one still largely intact.",
                es: "La Gran Pirámide de Giza es la más antigua de las Siete Maravillas del Mundo Antiguo y la única que aún permanece en gran parte intacta.",
                de: "Die Große Pyramide von Gizeh ist das älteste der Sieben Weltwunder der Antike und das einzige, das noch weitgehend intakt ist.",
                nl: "De Grote Piramide van Gizeh is het oudste van de Zeven Wereldwonderen van de Oudheid en het enige dat nog grotendeels intact is."
            }
        },
        {
            question: {
                en: "What shape do the pyramids have?",
                es: "¿Qué forma tienen las pirámides?",
                de: "Welche Form haben die Pyramiden?",
                nl: "Welke vorm hebben de piramides?"
            },
            options: [
                { en: "Rectangular prism", es: "Prisma rectangular", de: "Rechteckiges Prisma", nl: "Rechthoekig prisma" },
                { en: "Cone", es: "Cono", de: "Kegel", nl: "Kegel" },
                { en: "Square-based pyramid", es: "Pirámide de base cuadrada", de: "Pyramide mit quadratischer Basis", nl: "Piramide met vierkante basis" },
                { en: "Sphere", es: "Esfera", de: "Kugel", nl: "Bol" }
            ],
            correctIndex: 2,
            explanation: {
                en: "The Pyramids of Giza are square-based pyramids, with four triangular faces meeting at an apex above a square base.",
                es: "Las Pirámides de Giza son pirámides de base cuadrada, con cuatro caras triangulares que se encuentran en un vértice sobre una base cuadrada.",
                de: "Die Pyramiden von Gizeh sind Pyramiden mit quadratischer Basis, bei denen sich vier dreieckige Flächen an einer Spitze über einer quadratischen Basis treffen.",
                nl: "De piramides van Gizeh zijn piramides met een vierkante basis, waarbij vier driehoekige vlakken samenkomen in een punt boven een vierkante basis."
            }
        },
        {
            question: {
                en: "Who were the pyramids primarily built by?",
                es: "¿Quiénes construyeron principalmente las pirámides?",
                de: "Von wem wurden die Pyramiden hauptsächlich gebaut?",
                nl: "Door wie werden de piramides voornamelijk gebouwd?"
            },
            options: [
                { en: "Slaves", es: "Esclavos", de: "Sklaven", nl: "Slaven" },
                { en: "Foreign prisoners", es: "Prisioneros extranjeros", de: "Ausländische Gefangene", nl: "Buitenlandse gevangenen" },
                { en: "Skilled workers and laborers", es: "Trabajadores y obreros calificados", de: "Qualifizierte Arbeiter und Tagelöhner", nl: "Geschoolde arbeiders en werklieden" },
                { en: "Roman engineers", es: "Ingenieros romanos", de: "Römische Ingenieure", nl: "Romeinse ingenieurs" }
            ],
            correctIndex: 2,
            explanation: {
                en: "Contrary to popular belief, the pyramids were built by skilled workers and laborers who were paid for their work, not slaves.",
                es: "Contrariamente a la creencia popular, las pirámides fueron construidas por trabajadores y obreros calificados que fueron pagados por su trabajo, no por esclavos.",
                de: "Entgegen der landläufigen Meinung wurden die Pyramiden von qualifizierten Arbeitern und Tagelöhnern gebaut, die für ihre Arbeit bezahlt wurden, nicht von Sklaven.",
                nl: "In tegenstelling tot wat vaak wordt gedacht, werden de piramides gebouwd door geschoolde arbeiders en werklieden die voor hun werk werden betaald, niet door slaven."
            }
        },
        {
            question: {
                en: "What was the purpose of the smaller pyramids near the main pyramids?",
                es: "¿Cuál era el propósito de las pirámides más pequeñas cerca de las pirámides principales?",
                de: "Was war der Zweck der kleineren Pyramiden in der Nähe der Hauptpyramiden?",
                nl: "Wat was het doel van de kleinere piramides bij de hoofdpiramides?"
            },
            options: [
                { en: "Storage facilities", es: "Instalaciones de almacenamiento", de: "Lagerhäuser", nl: "Opslagfaciliteiten" },
                { en: "Guard towers", es: "Torres de vigilancia", de: "Wachtürme", nl: "Wachttorens" },
                { en: "Queens' pyramids", es: "Pirámides de las reinas", de: "Pyramiden der Königinnen", nl: "Piramides van de koninginnen" },
                { en: "Worker housing", es: "Viviendas de trabajadores", de: "Arbeiterunterkünfte", nl: "Werknemershuisvesting" }
            ],
            correctIndex: 2,
            explanation: {
                en: "The smaller pyramids near each main pyramid were built as burial places for the pharaohs' queens and family members.",
                es: "Las pirámides más pequeñas cerca de cada pirámide principal se construyeron como lugares de entierro para las reinas y miembros de la familia de los faraones.",
                de: "Die kleineren Pyramiden in der Nähe jeder Hauptpyramide wurden als Begräbnisstätten für die Königinnen und Familienmitglieder der Pharaonen gebaut.",
                nl: "De kleinere piramides bij elke hoofdpiramide werden gebouwd als begraafplaatsen voor de koninginnen en familieleden van de farao's."
            }
        }
    ];

    if (typeof module !== 'undefined' && module.exports) {
        module.exports = level1Questions;
    }
})();
