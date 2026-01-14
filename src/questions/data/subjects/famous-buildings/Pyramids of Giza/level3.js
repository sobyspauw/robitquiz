(function() {
    const level3Questions = [
        {
            question: {
                en: "What is the modern height of the Great Pyramid after erosion?",
                es: "¿Cuál es la altura moderna de la Gran Pirámide después de la erosión?",
                de: "Wie hoch ist die Große Pyramide heute nach der Erosion?",
                nl: "Wat is de huidige hoogte van de Grote Piramide na erosie?"
            },
            options: [
                { en: "120 m", es: "120 metros", de: "120 Meter", nl: "120 meter" },
                { en: "130 m", es: "130 metros", de: "130 Meter", nl: "130 meter" },
                { en: "138.8 m", es: "138,8 metros", de: "138,8 Meter", nl: "138,8 meter" },
                { en: "146.5 m", es: "146,5 metros", de: "146,5 Meter", nl: "146,5 meter" }
            ],
            correctIndex: 2,
            explanation: {
                en: "The Great Pyramid now stands at 138.8 meters, having lost about 8 meters from its original height due to loss of the outer casing and capstone.",
                es: "La Gran Pirámide ahora mide 138,8 metros, habiendo perdido unos 8 metros de su altura original debido a la pérdida del revestimiento exterior y la piedra angular.",
                de: "Die Große Pyramide ist heute 138,8 Meter hoch und hat aufgrund des Verlusts der äußeren Verkleidung und des Schlussteins etwa 8 Meter ihrer ursprünglichen Höhe verloren.",
                nl: "De Grote Piramide is nu 138,8 meter hoog en heeft ongeveer 8 meter van zijn oorspronkelijke hoogte verloren door het verlies van de buitenbekleding en de topzegel."
            }
        },
        {
            question: {
                en: "How long is each side of the Great Pyramid's base?",
                es: "¿Cuánto mide cada lado de la base de la Gran Pirámide?",
                de: "Wie lang ist jede Seite der Basis der Großen Pyramide?",
                nl: "Hoe lang is elke zijde van de basis van de Grote Piramide?"
            },
            options: [
                { en: "200 m", es: "200 metros", de: "200 Meter", nl: "200 meter" },
                { en: "215 m", es: "215 metros", de: "215 Meter", nl: "215 meter" },
                { en: "230.4 m", es: "230,4 metros", de: "230,4 Meter", nl: "230,4 meter" },
                { en: "250 m", es: "250 metros", de: "250 Meter", nl: "250 meter" }
            ],
            correctIndex: 2,
            explanation: {
                en: "Each side of the Great Pyramid's base measures approximately 230.4 meters (755.9 feet), forming a near-perfect square.",
                es: "Cada lado de la base de la Gran Pirámide mide aproximadamente 230,4 metros (755,9 pies), formando un cuadrado casi perfecto.",
                de: "Jede Seite der Basis der Großen Pyramide misst etwa 230,4 Meter (755,9 Fuß) und bildet ein nahezu perfektes Quadrat.",
                nl: "Elke zijde van de basis van de Grote Piramide meet ongeveer 230,4 meter (755,9 voet), wat een bijna perfect vierkant vormt."
            }
        },
        {
            question: {
                en: "What was the estimated weight of the Great Pyramid?",
                es: "¿Cuál era el peso estimado de la Gran Pirámide?",
                de: "Wie schwer war die Große Pyramide schätzungsweise?",
                nl: "Wat was het geschatte gewicht van de Grote Piramide?"
            },
            options: [
                { en: "2 million tons", es: "2 millones de toneladas", de: "2 Millionen Tonnen", nl: "2 miljoen ton" },
                { en: "4 million tons", es: "4 millones de toneladas", de: "4 Millionen Tonnen", nl: "4 miljoen ton" },
                { en: "5.9 million tons", es: "5,9 millones de toneladas", de: "5,9 Millionen Tonnen", nl: "5,9 miljoen ton" },
                { en: "10 million tons", es: "10 millones de toneladas", de: "10 Millionen Tonnen", nl: "10 miljoen ton" }
            ],
            correctIndex: 2,
            explanation: {
                en: "The Great Pyramid is estimated to weigh approximately 5.9 million tons, making it one of the heaviest structures ever built by humans.",
                es: "Se estima que la Gran Pirámide pesa aproximadamente 5,9 millones de toneladas, lo que la convierte en una de las estructuras más pesadas jamás construidas por humanos.",
                de: "Die Große Pyramide wird auf etwa 5,9 Millionen Tonnen geschätzt, was sie zu einem der schwersten von Menschen gebauten Bauwerke macht.",
                nl: "De Grote Piramide wordt geschat op ongeveer 5,9 miljoen ton, waardoor het een van de zwaarste door mensen gebouwde constructies is."
            }
        },
        {
            question: {
                en: "What was the angle of the Great Pyramid's sides?",
                es: "¿Cuál era el ángulo de los lados de la Gran Pirámide?",
                de: "Welchen Winkel hatten die Seiten der Großen Pyramide?",
                nl: "Wat was de hoek van de zijden van de Grote Piramide?"
            },
            options: [
                { en: "45 degrees", es: "45 grados", de: "45 Grad", nl: "45 graden" },
                { en: "51.5 degrees", es: "51,5 grados", de: "51,5 Grad", nl: "51,5 graden" },
                { en: "60 degrees", es: "60 grados", de: "60 Grad", nl: "60 graden" },
                { en: "70 degrees", es: "70 grados", de: "70 Grad", nl: "70 graden" }
            ],
            correctIndex: 1,
            explanation: {
                en: "The Great Pyramid's sides rise at an angle of approximately 51.5 degrees, which gives the pyramid its distinctive shape and structural stability.",
                es: "Los lados de la Gran Pirámide se elevan en un ángulo de aproximadamente 51,5 grados, lo que le da a la pirámide su forma distintiva y estabilidad estructural.",
                de: "Die Seiten der Großen Pyramide steigen in einem Winkel von etwa 51,5 Grad an, was der Pyramide ihre charakteristische Form und strukturelle Stabilität verleiht.",
                nl: "De zijden van de Grote Piramide rijzen op onder een hoek van ongeveer 51,5 graden, wat de piramide zijn kenmerkende vorm en structurele stabiliteit geeft."
            }
        },
        {
            question: {
                en: "How many chambers are inside the Great Pyramid?",
                es: "¿Cuántas cámaras hay dentro de la Gran Pirámide?",
                de: "Wie viele Kammern gibt es in der Großen Pyramide?",
                nl: "Hoeveel kamers zijn er in de Grote Piramide?"
            },
            options: [
                { en: "One chamber", es: "Una cámara", de: "Eine Kammer", nl: "Een kamer" },
                { en: "Two chambers", es: "Dos cámaras", de: "Zwei Kammern", nl: "Twee kamers" },
                { en: "Three chambers", es: "Tres cámaras", de: "Drei Kammern", nl: "Drie kamers" },
                { en: "Five chambers", es: "Cinco cámaras", de: "Fünf Kammern", nl: "Vijf kamers" }
            ],
            correctIndex: 2,
            explanation: {
                en: "The Great Pyramid contains three main chambers: the King's Chamber, the Queen's Chamber, and the unfinished Subterranean Chamber.",
                es: "La Gran Pirámide contiene tres cámaras principales: la Cámara del Rey, la Cámara de la Reina y la Cámara Subterránea inacabada.",
                de: "Die Große Pyramide enthält drei Hauptkammern: die Königskammer, die Königinnenkammer und die unfertige unterirdische Kammer.",
                nl: "De Grote Piramide bevat drie hoofdkamers: de Koningskamer, de Koninginnenkamer en de onvoltooide Ondergrondse Kamer."
            }
        },
        {
            question: {
                en: "What is the name of the largest chamber in the Great Pyramid?",
                es: "¿Cuál es el nombre de la cámara más grande de la Gran Pirámide?",
                de: "Wie heißt die größte Kammer in der Großen Pyramide?",
                nl: "Wat is de naam van de grootste kamer in de Grote Piramide?"
            },
            options: [
                { en: "Queen's Chamber", es: "Cámara de la Reina", de: "Königinnenkammer", nl: "Koninginnenkamer" },
                { en: "King's Chamber", es: "Cámara del Rey", de: "Königskammer", nl: "Koningskamer" },
                { en: "Grand Gallery", es: "Gran Galería", de: "Große Galerie", nl: "Grote Galerij" },
                { en: "Subterranean Chamber", es: "Cámara Subterránea", de: "Unterirdische Kammer", nl: "Ondergrondse Kamer" }
            ],
            correctIndex: 1,
            explanation: {
                en: "The King's Chamber is the largest and highest chamber in the Great Pyramid, built entirely of red granite and containing a granite sarcophagus.",
                es: "La Cámara del Rey es la cámara más grande y más alta de la Gran Pirámide, construida completamente de granito rojo y que contiene un sarcófago de granito.",
                de: "Die Königskammer ist die größte und höchste Kammer in der Großen Pyramide, vollständig aus rotem Granit gebaut und enthält einen Granit-Sarkophag.",
                nl: "De Koningskamer is de grootste en hoogste kamer in de Grote Piramide, volledig gebouwd van rood graniet en bevat een granieten sarcofaag."
            }
        },
        {
            question: {
                en: "What is the Grand Gallery in the Great Pyramid?",
                es: "¿Qué es la Gran Galería en la Gran Pirámide?",
                de: "Was ist die Große Galerie in der Großen Pyramide?",
                nl: "Wat is de Grote Galerij in de Grote Piramide?"
            },
            options: [
                { en: "A burial chamber", es: "Una cámara funeraria", de: "Eine Grabkammer", nl: "Een grafkamer" },
                { en: "A steep ascending corridor", es: "Un corredor ascendente empinado", de: "Ein steiler aufsteigender Korridor", nl: "Een steile oplopende gang" },
                { en: "A treasure room", es: "Una sala de tesoros", de: "Ein Schatzraum", nl: "Een schatkamer" },
                { en: "An observatory", es: "Un observatorio", de: "Ein Observatorium", nl: "Een observatorium" }
            ],
            correctIndex: 1,
            explanation: {
                en: "The Grand Gallery is a steep ascending corridor 8.6 meters high and 46.6 meters long that leads to the King's Chamber.",
                es: "La Gran Galería es un corredor ascendente empinado de 8,6 metros de altura y 46,6 metros de largo que conduce a la Cámara del Rey.",
                de: "Die Große Galerie ist ein steiler aufsteigender Korridor, 8,6 Meter hoch und 46,6 Meter lang, der zur Königskammer führt.",
                nl: "De Grote Galerij is een steile oplopende gang van 8,6 meter hoog en 46,6 meter lang die naar de Koningskamer leidt."
            }
        },
        {
            question: {
                en: "What object was found in the King's Chamber?",
                es: "¿Qué objeto se encontró en la Cámara del Rey?",
                de: "Welches Objekt wurde in der Königskammer gefunden?",
                nl: "Welk object werd gevonden in de Koningskamer?"
            },
            options: [
                { en: "A golden throne", es: "Un trono de oro", de: "Ein goldener Thron", nl: "Een gouden troon" },
                { en: "A granite sarcophagus", es: "Un sarcófago de granito", de: "Ein Granit-Sarkophag", nl: "Een granieten sarcofaag" },
                { en: "Jeweled treasure", es: "Tesoro enjoyado", de: "Juwelenschatz", nl: "Met juwelen bezette schatten" },
                { en: "Ancient scrolls", es: "Pergaminos antiguos", de: "Antike Schriftrollen", nl: "Oude rollen" }
            ],
            correctIndex: 1,
            explanation: {
                en: "The King's Chamber contains an empty red granite sarcophagus. No mummy or treasure was found, suggesting the chamber was robbed in antiquity.",
                es: "La Cámara del Rey contiene un sarcófago de granito rojo vacío. No se encontró momia ni tesoro, lo que sugiere que la cámara fue saqueada en la antigüedad.",
                de: "Die Königskammer enthält einen leeren roten Granit-Sarkophag. Es wurde keine Mumie oder Schatz gefunden, was darauf hindeutet, dass die Kammer in der Antike geplündert wurde.",
                nl: "De Koningskamer bevat een lege rode granieten sarcofaag. Er werd geen mummie of schat gevonden, wat suggereert dat de kamer in de oudheid werd geplunderd."
            }
        },
        {
            question: {
                en: "What are the 'air shafts' in the Great Pyramid?",
                es: "¿Qué son los 'conductos de aire' en la Gran Pirámide?",
                de: "Was sind die 'Luftschächte' in der Großen Pyramide?",
                nl: "Wat zijn de 'luchtschachten' in de Grote Piramide?"
            },
            options: [
                { en: "Ventilation systems", es: "Sistemas de ventilación", de: "Belüftungssysteme", nl: "Ventilatiesystemen" },
                { en: "Secret passages to treasure", es: "Pasajes secretos al tesoro", de: "Geheime Gänge zum Schatz", nl: "Geheime doorgangen naar schatten" },
                { en: "Narrow shafts pointing to stars", es: "Conductos estrechos que apuntan a estrellas", de: "Schmale Schächte, die auf Sterne zeigen", nl: "Smalle schachten die naar sterren wijzen" },
                { en: "Water drainage channels", es: "Canales de drenaje de agua", de: "Wasserdrainagekanäle", nl: "Waterafvoerkanalen" }
            ],
            correctIndex: 2,
            explanation: {
                en: "The so-called 'air shafts' are narrow passages from both chambers that point to specific stars, likely serving a religious or astronomical purpose rather than ventilation.",
                es: "Los llamados 'conductos de aire' son pasajes estrechos desde ambas cámaras que apuntan a estrellas específicas, probablemente sirviendo un propósito religioso o astronómico más que de ventilación.",
                de: "Die sogenannten 'Luftschächte' sind schmale Gänge von beiden Kammern, die auf bestimmte Sterne zeigen, wahrscheinlich einem religiösen oder astronomischen Zweck dienend statt der Belüftung.",
                nl: "De zogenaamde 'luchtschachten' zijn smalle doorgangen vanuit beide kamers die naar specifieke sterren wijzen, waarschijnlijk dienden ze een religieus of astronomisch doel in plaats van ventilatie."
            }
        },
        {
            question: {
                en: "How many relieving chambers are above the King's Chamber?",
                es: "¿Cuántas cámaras de alivio hay sobre la Cámara del Rey?",
                de: "Wie viele Entlastungskammern gibt es über der Königskammer?",
                nl: "Hoeveel ontlastingskamers zijn er boven de Koningskamer?"
            },
            options: [
                { en: "Two", es: "Dos", de: "Zwei", nl: "Twee" },
                { en: "Three", es: "Tres", de: "Drei", nl: "Drie" },
                { en: "Four", es: "Cuatro", de: "Vier", nl: "Vier" },
                { en: "Five", es: "Cinco", de: "Fünf", nl: "Vijf" }
            ],
            correctIndex: 3,
            explanation: {
                en: "There are five relieving chambers stacked above the King's Chamber, designed to distribute the enormous weight of the stone above and prevent collapse.",
                es: "Hay cinco cámaras de alivio apiladas sobre la Cámara del Rey, diseñadas para distribuir el enorme peso de la piedra arriba y prevenir el colapso.",
                de: "Es gibt fünf Entlastungskammern über der Königskammer gestapelt, die dazu dienen, das enorme Gewicht des darüber liegenden Steins zu verteilen und einen Einsturz zu verhindern.",
                nl: "Er zijn vijf ontlastingskamers gestapeld boven de Koningskamer, ontworpen om het enorme gewicht van de steen erboven te verdelen en instorting te voorkomen."
            }
        },
        {
            question: {
                en: "Who discovered the relieving chambers above the King's Chamber?",
                es: "¿Quién descubrió las cámaras de alivio sobre la Cámara del Rey?",
                de: "Wer entdeckte die Entlastungskammern über der Königskammer?",
                nl: "Wie ontdekte de ontlastingskamers boven de Koningskamer?"
            },
            options: [
                { en: "Napoleon Bonaparte", es: "Napoleón Bonaparte", de: "Napoleon Bonaparte", nl: "Napoleon Bonaparte" },
                { en: "Howard Carter", es: "Howard Carter", de: "Howard Carter", nl: "Howard Carter" },
                { en: "Colonel Howard Vyse", es: "Coronel Howard Vyse", de: "Colonel Howard Vyse", nl: "Kolonel Howard Vyse" },
                { en: "Giovanni Belzoni", es: "Giovanni Belzoni", de: "Giovanni Belzoni", nl: "Giovanni Belzoni" }
            ],
            correctIndex: 2,
            explanation: {
                en: "Colonel Howard Vyse discovered the upper relieving chambers in 1837 by blasting through the pyramid's interior with explosives.",
                es: "El Coronel Howard Vyse descubrió las cámaras de alivio superiores en 1837 al hacer explotar el interior de la pirámide con explosivos.",
                de: "Colonel Howard Vyse entdeckte die oberen Entlastungskammern 1837, indem er mit Sprengstoff durch das Innere der Pyramide sprengte.",
                nl: "Kolonel Howard Vyse ontdekte de bovenste ontlastingskamers in 1837 door met explosieven door het binnenste van de piramide te blazen."
            }
        },
        {
            question: {
                en: "What hieroglyphic name was found in the relieving chambers?",
                es: "¿Qué nombre jeroglífico se encontró en las cámaras de alivio?",
                de: "Welcher hieroglyphische Name wurde in den Entlastungskammern gefunden?",
                nl: "Welke hiëroglyfische naam werd gevonden in de ontlastingskamers?"
            },
            options: {
                en: "What hieroglyphic name was found in the relieving chambers?",
                es: "¿Qué nombre jeroglífico se encontró en las cámaras de alivio?",
                de: "Welcher hieroglyphische Name wurde in den Entlastungskammern gefunden?",
                nl: "Welke hiëroglyfische naam werd gevonden in de ontlastingskamers?"
            },
            options: [
                { en: "Tutankhamun", es: "Tutankamón", de: "Tutanchamun", nl: "Toetanchamon" },
                { en: "Ramesses II", es: "Ramsés II", de: "Ramses II", nl: "Ramses II" },
                { en: "Khufu", es: "Keops", de: "Cheops", nl: "Cheops" },
                { en: "Cleopatra", es: "Cleopatra", de: "Kleopatra", nl: "Cleopatra" }
            ],
            correctIndex: 2,
            explanation: {
                en: "Quarry marks bearing Khufu's name were found in the relieving chambers, providing crucial evidence that Khufu built the Great Pyramid.",
                es: "Se encontraron marcas de cantera con el nombre de Keops en las cámaras de alivio, proporcionando evidencia crucial de que Keops construyó la Gran Pirámide.",
                de: "Steinbruchmarkierungen mit Chufus Namen wurden in den Entlastungskammern gefunden, was entscheidende Beweise dafür liefert, dass Chufu die Große Pyramide baute.",
                nl: "Steengroevemerktekens met de naam van Cheops werden gevonden in de ontlastingskamers, wat cruciaal bewijs levert dat Cheops de Grote Piramide bouwde."
            }
        },
        {
            question: {
                en: "What was the original entrance to the Great Pyramid?",
                es: "¿Cuál era la entrada original a la Gran Pirámide?",
                de: "Was war der ursprüngliche Eingang zur Großen Pyramide?",
                nl: "Wat was de oorspronkelijke ingang van de Grote Piramide?"
            },
            options: [
                { en: "At ground level on the south side", es: "A nivel del suelo en el lado sur", de: "Auf Bodenhöhe auf der Südseite", nl: "Op grondniveau aan de zuidkant" },
                { en: "On the north face, 17 meters above ground", es: "En la cara norte, 17 metros sobre el suelo", de: "Auf der Nordseite, 17 Meter über dem Boden", nl: "Aan de noordkant, 17 meter boven de grond" },
                { en: "At the apex", es: "En el vértice", de: "An der Spitze", nl: "Aan de top" },
                { en: "Underground tunnel", es: "Túnel subterráneo", de: "Unterirdischer Tunnel", nl: "Ondergrondse tunnel" }
            ],
            correctIndex: 1,
            explanation: {
                en: "The original entrance is on the north face of the pyramid, about 17 meters above ground level, and was once concealed by smooth casing stones.",
                es: "La entrada original está en la cara norte de la pirámide, a unos 17 metros sobre el nivel del suelo, y una vez estuvo oculta por piedras de revestimiento lisas.",
                de: "Der ursprüngliche Eingang befindet sich auf der Nordseite der Pyramide, etwa 17 Meter über dem Boden, und war einst durch glatte Verkleidungssteine verdeckt.",
                nl: "De oorspronkelijke ingang bevindt zich aan de noordkant van de piramide, ongeveer 17 meter boven de grond, en was ooit verborgen door gladde bekledingsstenen."
            }
        },
        {
            question: {
                en: "Who created the modern entrance to the Great Pyramid?",
                es: "¿Quién creó la entrada moderna a la Gran Pirámide?",
                de: "Wer schuf den modernen Eingang zur Großen Pyramide?",
                nl: "Wie creëerde de moderne ingang van de Grote Piramide?"
            },
            options: [
                { en: "Napoleon Bonaparte", es: "Napoleón Bonaparte", de: "Napoleon Bonaparte", nl: "Napoleon Bonaparte" },
                { en: "Caliph Al-Ma'mun", es: "Califa Al-Ma'mun", de: "Kalif Al-Ma'mun", nl: "Kalief Al-Ma'mun" },
                { en: "Alexander the Great", es: "Alejandro Magno", de: "Alexander der Große", nl: "Alexander de Grote" },
                { en: "Julius Caesar", es: "Julio César", de: "Julius Cäsar", nl: "Julius Caesar" }
            ],
            correctIndex: 1,
            explanation: {
                en: "Caliph Al-Ma'mun forced a tunnel into the pyramid around 820 AD, which is now the main tourist entrance.",
                es: "El Califa Al-Ma'mun forzó un túnel en la pirámide alrededor del año 820 d.C., que ahora es la entrada turística principal.",
                de: "Kalif Al-Ma'mun erzwang um 820 n. Chr. einen Tunnel in die Pyramide, der heute der Haupteingang für Touristen ist.",
                nl: "Kalief Al-Ma'mun forceerde rond 820 n.Chr. een tunnel in de piramide, die nu de belangrijkste toeristeningang is."
            }
        },
        {
            question: {
                en: "What is unique about the construction of the King's Chamber ceiling?",
                es: "¿Qué es único sobre la construcción del techo de la Cámara del Rey?",
                de: "Was ist einzigartig an der Konstruktion der Decke der Königskammer?",
                nl: "Wat is uniek aan de constructie van het plafond van de Koningskamer?"
            },
            options: [
                { en: "It's made of gold", es: "Está hecho de oro", de: "Es ist aus Gold", nl: "Het is gemaakt van goud" },
                { en: "It consists of nine massive granite beams", es: "Consiste en nueve enormes vigas de granito", de: "Es besteht aus neun massiven Granitbalken", nl: "Het bestaat uit negen massieve granieten balken" },
                { en: "It's painted blue", es: "Está pintado de azul", de: "Es ist blau gestrichen", nl: "Het is blauw geschilderd" },
                { en: "It has windows", es: "Tiene ventanas", de: "Es hat Fenster", nl: "Het heeft ramen" }
            ],
            correctIndex: 1,
            explanation: {
                en: "The King's Chamber ceiling consists of nine massive granite beams weighing approximately 400 tons in total, some weighing up to 50 tons each.",
                es: "El techo de la Cámara del Rey consiste en nueve enormes vigas de granito que pesan aproximadamente 400 toneladas en total, algunas pesando hasta 50 toneladas cada una.",
                de: "Die Decke der Königskammer besteht aus neun massiven Granitbalken mit einem Gesamtgewicht von etwa 400 Tonnen, einige wiegen bis zu 50 Tonnen.",
                nl: "Het plafond van de Koningskamer bestaat uit negen massieve granieten balken met een totaal gewicht van ongeveer 400 ton, sommige wegen tot 50 ton per stuk."
            }
        },
        {
            question: {
                en: "What material lines the walls of the King's Chamber?",
                es: "¿Qué material recubre las paredes de la Cámara del Rey?",
                de: "Welches Material verkleidet die Wände der Königskammer?",
                nl: "Welk materiaal bekleedt de muren van de Koningskamer?"
            },
            options: [
                { en: "White limestone", es: "Piedra caliza blanca", de: "Weißer Kalkstein", nl: "Witte kalksteen" },
                { en: "Red granite", es: "Granito rojo", de: "Roter Granit", nl: "Rood graniet" },
                { en: "Black basalt", es: "Basalto negro", de: "Schwarzer Basalt", nl: "Zwart basalt" },
                { en: "Marble", es: "Mármol", de: "Marmor", nl: "Marmer" }
            ],
            correctIndex: 1,
            explanation: {
                en: "The King's Chamber is built entirely of red granite from Aswan, consisting of 100 blocks forming the walls, floor, and ceiling.",
                es: "La Cámara del Rey está construida completamente de granito rojo de Asuán, consistiendo en 100 bloques que forman las paredes, el piso y el techo.",
                de: "Die Königskammer ist vollständig aus rotem Granit aus Assuan gebaut und besteht aus 100 Blöcken, die Wände, Boden und Decke bilden.",
                nl: "De Koningskamer is volledig gebouwd van rood graniet uit Aswan, bestaande uit 100 blokken die de muren, vloer en plafond vormen."
            }
        },
        {
            question: {
                en: "What is the volume of the Great Pyramid?",
                es: "¿Cuál es el volumen de la Gran Pirámide?",
                de: "Was ist das Volumen der Großen Pyramide?",
                nl: "Wat is het volume van de Grote Piramide?"
            },
            options: [
                { en: "1 million cubic m", es: "1 millón de metros cúbicos", de: "1 Million Kubikmeter", nl: "1 miljoen kubieke meter" },
                { en: "2.6 million cubic m", es: "2,6 millones de metros cúbicos", de: "2,6 Millionen Kubikmeter", nl: "2,6 miljoen kubieke meter" },
                { en: "5 million cubic m", es: "5 millones de metros cúbicos", de: "5 Millionen Kubikmeter", nl: "5 miljoen kubieke meter" },
                { en: "10 million cubic m", es: "10 millones de metros cúbicos", de: "10 Millionen Kubikmeter", nl: "10 miljoen kubieke meter" }
            ],
            correctIndex: 1,
            explanation: {
                en: "The Great Pyramid has a volume of approximately 2.6 million cubic meters, making it an enormous architectural achievement.",
                es: "La Gran Pirámide tiene un volumen de aproximadamente 2,6 millones de metros cúbicos, lo que la convierte en un enorme logro arquitectónico.",
                de: "Die Große Pyramide hat ein Volumen von etwa 2,6 Millionen Kubikmetern, was sie zu einer enormen architektonischen Leistung macht.",
                nl: "De Grote Piramide heeft een volume van ongeveer 2,6 miljoen kubieke meter, waardoor het een enorme architectonische prestatie is."
            }
        },
        {
            question: {
                en: "How long did Khufu reign as pharaoh?",
                es: "¿Cuánto tiempo reinó Keops como faraón?",
                de: "Wie lange regierte Chufu als Pharao?",
                nl: "Hoe lang regeerde Cheops als farao?"
            },
            options: {
                en: "How long did Khufu reign as pharaoh?",
                es: "¿Cuánto tiempo reinó Keops como faraón?",
                de: "Wie lange regierte Chufu als Pharao?",
                nl: "Hoe lang regeerde Cheops als farao?"
            },
            options: [
                { en: "10 yrs", es: "10 años", de: "10 Jahre", nl: "10 jaar" },
                { en: "23 yrs", es: "23 años", de: "23 Jahre", nl: "23 jaar" },
                { en: "35 yrs", es: "35 años", de: "35 Jahre", nl: "35 jaar" },
                { en: "50 yrs", es: "50 años", de: "50 Jahre", nl: "50 jaar" }
            ],
            correctIndex: 1,
            explanation: {
                en: "Khufu reigned for approximately 23 years (around 2589-2566 BC), during which time the Great Pyramid was constructed.",
                es: "Keops reinó durante aproximadamente 23 años (alrededor de 2589-2566 a.C.), durante cuyo tiempo se construyó la Gran Pirámide.",
                de: "Chufu regierte etwa 23 Jahre lang (um 2589-2566 v. Chr.), während dieser Zeit wurde die Große Pyramide gebaut.",
                nl: "Cheops regeerde ongeveer 23 jaar (rond 2589-2566 v.Chr.), gedurende welke tijd de Grote Piramide werd gebouwd."
            }
        },
        {
            question: {
                en: "What was Khufu's full royal name?",
                es: "¿Cuál era el nombre real completo de Keops?",
                de: "Was war Chufus vollständiger königlicher Name?",
                nl: "Wat was Cheops' volledige koninklijke naam?"
            },
            options: [
                { en: "Khnum-Khufu", es: "Jnum-Keops", de: "Chnum-Chufu", nl: "Chnoem-Cheops" },
                { en: "Ra-Khufu", es: "Ra-Keops", de: "Ra-Chufu", nl: "Ra-Cheops" },
                { en: "Horus-Khufu", es: "Horus-Keops", de: "Horus-Chufu", nl: "Horus-Cheops" },
                { en: "Osiris-Khufu", es: "Osiris-Keops", de: "Osiris-Chufu", nl: "Osiris-Cheops" }
            ],
            correctIndex: 0,
            explanation: {
                en: "Khufu's full name was Khnum-Khufu, meaning 'the god Khnum protects me.' He was known as Cheops to the Greeks.",
                es: "El nombre completo de Keops era Jnum-Keops, que significa 'el dios Jnum me protege'. Era conocido como Keops por los griegos.",
                de: "Chufus vollständiger Name war Chnum-Chufu, was 'der Gott Chnum schützt mich' bedeutet. Er war den Griechen als Cheops bekannt.",
                nl: "Cheops' volledige naam was Chnoem-Cheops, wat betekent 'de god Chnoem beschermt mij'. Hij stond bij de Grieken bekend als Cheops."
            }
        },
        {
            question: {
                en: "Who was Khufu's father?",
                es: "¿Quién era el padre de Keops?",
                de: "Wer war Chufus Vater?",
                nl: "Wie was Cheops' vader?"
            },
            options: [
                { en: "Sneferu", es: "Sneferu", de: "Snofru", nl: "Snofroe" },
                { en: "Djoser", es: "Zoser", de: "Djoser", nl: "Djoser" },
                { en: "Khafre", es: "Kefrén", de: "Chephren", nl: "Chefren" },
                { en: "Menkaure", es: "Micerino", de: "Mykerinos", nl: "Mykerinos" }
            ],
            correctIndex: 0,
            explanation: {
                en: "Khufu was the son of Pharaoh Sneferu, who built multiple pyramids including the Bent Pyramid and the Red Pyramid at Dahshur.",
                es: "Keops era hijo del Faraón Sneferu, quien construyó múltiples pirámides incluyendo la Pirámide Acodada y la Pirámide Roja en Dahshur.",
                de: "Chufu war der Sohn von Pharao Snofru, der mehrere Pyramiden baute, darunter die Knickpyramide und die Rote Pyramide in Dahschur.",
                nl: "Cheops was de zoon van Farao Snofroe, die meerdere piramides bouwde, waaronder de Geknakte Piramide en de Rode Piramide in Dahsjoer."
            }
        },
        {
            question: {
                en: "What is the slope angle of the Great Pyramid's faces?",
                es: "¿Cuál es el ángulo de inclinación de las caras de la Gran Pirámide?",
                de: "Was ist der Neigungswinkel der Flächen der Großen Pyramide?",
                nl: "Wat is de hellingshoek van de vlakken van de Grote Piramide?"
            },
            options: [
                { en: "45 degrees", es: "45 grados", de: "45 Grad", nl: "45 graden" },
                { en: "51.5 degrees", es: "51,5 grados", de: "51,5 Grad", nl: "51,5 graden" },
                { en: "60 degrees", es: "60 grados", de: "60 Grad", nl: "60 graden" },
                { en: "30 degrees", es: "30 grados", de: "30 Grad", nl: "30 graden" }
            ],
            correctIndex: 1,
            explanation: {
                en: "The Great Pyramid's faces have a slope angle of approximately 51.5 degrees, which creates its distinctive shape and stability.",
                es: "Las caras de la Gran Pirámide tienen un ángulo de inclinación de aproximadamente 51,5 grados, lo que crea su forma distintiva y estabilidad.",
                de: "Die Flächen der Großen Pyramide haben einen Neigungswinkel von etwa 51,5 Grad, was ihre charakteristische Form und Stabilität schafft.",
                nl: "De vlakken van de Grote Piramide hebben een hellingshoek van ongeveer 51,5 graden, wat zijn kenmerkende vorm en stabiliteit creëert."
            }
        },
        {
            question: {
                en: "How many relief chambers are above the King's Chamber?",
                es: "¿Cuántas cámaras de alivio hay sobre la Cámara del Rey?",
                de: "Wie viele Entlastungskammern gibt es über der Königskammer?",
                nl: "Hoeveel ontlastingskamers zijn er boven de Koningskamer?"
            },
            options: [
                { en: "Two chambers", es: "Dos cámaras", de: "Zwei Kammern", nl: "Twee kamers" },
                { en: "Three chambers", es: "Tres cámaras", de: "Drei Kammern", nl: "Drie kamers" },
                { en: "Five chambers", es: "Cinco cámaras", de: "Fünf Kammern", nl: "Vijf kamers" },
                { en: "Seven chambers", es: "Siete cámaras", de: "Sieben Kammern", nl: "Zeven kamers" }
            ],
            correctIndex: 2,
            explanation: {
                en: "There are five relief chambers above the King's Chamber, designed to distribute the massive weight of the pyramid above it.",
                es: "Hay cinco cámaras de alivio sobre la Cámara del Rey, diseñadas para distribuir el enorme peso de la pirámide sobre ella.",
                de: "Es gibt fünf Entlastungskammern über der Königskammer, die das massive Gewicht der Pyramide darüber verteilen sollen.",
                nl: "Er zijn vijf ontlastingskamers boven de Koningskamer, ontworpen om het enorme gewicht van de piramide erboven te verdelen."
            }
        },
        {
            question: {
                en: "What is the name of the ascending passage in the pyramid?",
                es: "¿Cuál es el nombre del pasaje ascendente en la pirámide?",
                de: "Wie heißt der aufsteigende Gang in der Pyramide?",
                nl: "Wat is de naam van de oplopende gang in de piramide?"
            },
            options: [
                { en: "The Grand Gallery", es: "La Gran Galería", de: "Die Große Galerie", nl: "De Grote Galerij" },
                { en: "The Royal Passage", es: "El Pasaje Real", de: "Der Königliche Gang", nl: "De Koninklijke Gang" },
                { en: "The Sacred Path", es: "El Camino Sagrado", de: "Der Heilige Pfad", nl: "Het Heilige Pad" },
                { en: "The Ascending Corridor", es: "El Corredor Ascendente", de: "Der Aufsteigende Korridor", nl: "De Oplopende Gang" }
            ],
            correctIndex: 0,
            explanation: {
                en: "The Grand Gallery is the impressive ascending passage, 8.6 m high and 46.7 m long, leading to the King's Chamber.",
                es: "La Gran Galería es el impresionante pasaje ascendente, de 8,6 m de altura y 46,7 m de largo, que conduce a la Cámara del Rey.",
                de: "Die Große Galerie ist der beeindruckende aufsteigende Gang, 8,6 m hoch und 46,7 m lang, der zur Königskammer führt.",
                nl: "De Grote Galerij is de indrukwekkende oplopende gang, 8,6 m hoog en 46,7 m lang, die naar de Koningskamer leidt."
            }
        },
        {
            question: {
                en: "What material forms the sarcophagus in the King's Chamber?",
                es: "¿Qué material forma el sarcófago en la Cámara del Rey?",
                de: "Aus welchem Material besteht der Sarkophag in der Königskammer?",
                nl: "Uit welk materiaal bestaat de sarcofaag in de Koningskamer?"
            },
            options: [
                { en: "Limestone", es: "Piedra caliza", de: "Kalkstein", nl: "Kalksteen" },
                { en: "Red granite", es: "Granito rojo", de: "Roter Granit", nl: "Rood graniet" },
                { en: "Basalt", es: "Basalto", de: "Basalt", nl: "Basalt" },
                { en: "Marble", es: "Mármol", de: "Marmor", nl: "Marmer" }
            ],
            correctIndex: 1,
            explanation: {
                en: "The sarcophagus in the King's Chamber is carved from a single block of red granite from Aswan, weighing about 3.75 tons.",
                es: "El sarcófago en la Cámara del Rey está tallado de un solo bloque de granito rojo de Asuán, pesando aproximadamente 3,75 toneladas.",
                de: "Der Sarkophag in der Königskammer ist aus einem einzigen Block roten Granits aus Assuan geschnitzt und wiegt etwa 3,75 Tonnen.",
                nl: "De sarcofaag in de Koningskamer is gesneden uit een enkel blok rood graniet uit Aswan, met een gewicht van ongeveer 3,75 ton."
            }
        },
        {
            question: {
                en: "When was the original entrance to the Great Pyramid discovered?",
                es: "¿Cuándo se descubrió la entrada original a la Gran Pirámide?",
                de: "Wann wurde der ursprüngliche Eingang zur Großen Pyramide entdeckt?",
                nl: "Wanneer werd de oorspronkelijke ingang van de Grote Piramide ontdekt?"
            },
            options: [
                { en: "It was always known", es: "Siempre se supo", de: "Es war immer bekannt", nl: "Het was altijd bekend" },
                { en: "In the 1800s", es: "En el 1800", de: "Im 18. Jahrhundert", nl: "In de jaren 1800" },
                { en: "In 2000", es: "En 2000", de: "Im Jahr 2000", nl: "In 2000" },
                { en: "It remains undiscovered", es: "Permanece sin descubrir", de: "Es bleibt unentdeckt", nl: "Het blijft onontdekt" }
            ],
            correctIndex: 0,
            explanation: {
                en: "The original entrance on the north face was always known, though it was later obscured and rediscovered multiple times throughout history.",
                es: "La entrada original en la cara norte siempre se conoció, aunque posteriormente se oscureció y se redescubrió múltiples veces a lo largo de la historia.",
                de: "Der ursprüngliche Eingang an der Nordseite war immer bekannt, obwohl er später verdeckt und im Laufe der Geschichte mehrmals wiederentdeckt wurde.",
                nl: "De oorspronkelijke ingang aan de noordzijde was altijd bekend, hoewel deze later werd verduisterd en meerdere keren door de geschiedenis heen werd herontdekt."
            }
        },
        {
            question: {
                en: "What is the corbelled technique used in the Grand Gallery?",
                es: "¿Qué es la técnica de ménsula utilizada en la Gran Galería?",
                de: "Was ist die Kragsteintechnik in der Großen Galerie?",
                nl: "Wat is de kraagsteentechniek gebruikt in de Grote Galerij?"
            },
            options: [
                { en: "Overlapping stone layers", es: "Capas de piedra superpuestas", de: "Überlappende Steinschichten", nl: "Overlappende steenlagen" },
                { en: "Carved decorations", es: "Decoraciones talladas", de: "Geschnitzte Dekorationen", nl: "Gesneden decoraties" },
                { en: "Painted ceiling", es: "Techo pintado", de: "Bemalte Decke", nl: "Geschilderd plafond" },
                { en: "Metal supports", es: "Soportes de metal", de: "Metallstützen", nl: "Metalen steunen" }
            ],
            correctIndex: 0,
            explanation: {
                en: "The corbelled ceiling in the Grand Gallery uses overlapping layers of stone, each projecting slightly inward to create a vaulted effect.",
                es: "El techo de ménsula en la Gran Galería utiliza capas superpuestas de piedra, cada una proyectándose ligeramente hacia adentro para crear un efecto abovedado.",
                de: "Die Kragsteindecke in der Großen Galerie verwendet überlappende Steinschichten, die jeweils leicht nach innen ragen, um einen gewölbten Effekt zu erzeugen.",
                nl: "Het kraagsteenplafond in de Grote Galerij gebruikt overlappende steenlagen, elk iets naar binnen uitstekend om een gewelfd effect te creëren."
            }
        },
        {
            question: {
                en: "How many boat pits surround the Great Pyramid?",
                es: "¿Cuántos pozos de barcos rodean la Gran Pirámide?",
                de: "Wie viele Bootsgruben umgeben die Große Pyramide?",
                nl: "Hoeveel bootputten omringen de Grote Piramide?"
            },
            options: [
                { en: "Two pits", es: "Dos pozos", de: "Zwei Gruben", nl: "Twee putten" },
                { en: "Three pits", es: "Tres pozos", de: "Drei Gruben", nl: "Drie putten" },
                { en: "Five pits", es: "Cinco pozos", de: "Fünf Gruben", nl: "Vijf putten" },
                { en: "Seven pits", es: "Siete pozos", de: "Sieben Gruben", nl: "Zeven putten" }
            ],
            correctIndex: 2,
            explanation: {
                en: "Five boat pits have been found around the Great Pyramid, though only two contained actual dismantled boats.",
                es: "Se han encontrado cinco pozos de barcos alrededor de la Gran Pirámide, aunque solo dos contenían barcos desmantelados reales.",
                de: "Fünf Bootsgruben wurden um die Große Pyramide herum gefunden, obwohl nur zwei tatsächlich zerlegte Boote enthielten.",
                nl: "Vijf bootputten zijn gevonden rond de Grote Piramide, hoewel slechts twee daadwerkelijke gedemonteerde boten bevatten."
            }
        },
        {
            question: {
                en: "What was the purpose of the plug blocks in the passages?",
                es: "¿Cuál era el propósito de los bloques de tapón en los pasajes?",
                de: "Was war der Zweck der Verschlussblöcke in den Gängen?",
                nl: "Wat was het doel van de plugblokken in de gangen?"
            },
            options: [
                { en: "Support the ceiling", es: "Soportar el techo", de: "Die Decke stützen", nl: "Het plafond ondersteunen" },
                { en: "Seal chambers after burial", es: "Sellar cámaras después del entierro", de: "Kammern nach der Bestattung versiegeln", nl: "Kamers verzegelen na begrafenis" },
                { en: "Decoration", es: "Decoración", de: "Dekoration", nl: "Decoratie" },
                { en: "Ventilation control", es: "Control de ventilación", de: "Belüftungskontrolle", nl: "Ventilatie controle" }
            ],
            correctIndex: 1,
            explanation: {
                en: "Large granite plug blocks were used to seal the ascending passage after the pharaoh's burial, preventing access to the inner chambers.",
                es: "Se usaron grandes bloques de tapón de granito para sellar el pasaje ascendente después del entierro del faraón, impidiendo el acceso a las cámaras interiores.",
                de: "Große Granit-Verschlussblöcke wurden verwendet, um den aufsteigenden Gang nach der Bestattung des Pharaos zu versiegeln und den Zugang zu den inneren Kammern zu verhindern.",
                nl: "Grote granieten plugblokken werden gebruikt om de oplopende gang te verzegelen na de begrafenis van de farao, waardoor toegang tot de binnenkamers werd voorkomen."
            }
        },
        {
            question: {
                en: "What astronomical feature do the air shafts align with?",
                es: "¿Con qué característica astronómica se alinean los conductos de aire?",
                de: "Mit welchem astronomischen Merkmal sind die Luftschächte ausgerichtet?",
                nl: "Met welk astronomisch kenmerk zijn de luchtschachten uitgelijnd?"
            },
            options: [
                { en: "The Sun", es: "El Sol", de: "Die Sonne", nl: "De Zon" },
                { en: "The Moon", es: "La Luna", de: "Der Mond", nl: "De Maan" },
                { en: "Specific stars and constellations", es: "Estrellas y constelaciones específicas", de: "Bestimmte Sterne und Sternbilder", nl: "Specifieke sterren en sterrenbeelden" },
                { en: "Nothing specific", es: "Nada específico", de: "Nichts Bestimmtes", nl: "Niets specifieks" }
            ],
            correctIndex: 2,
            explanation: {
                en: "The air shafts align with specific stars: the northern shaft pointed to the polar stars, while the southern pointed to Orion's Belt.",
                es: "Los conductos de aire se alinean con estrellas específicas: el conducto norte apuntaba a las estrellas polares, mientras que el sur apuntaba al Cinturón de Orión.",
                de: "Die Luftschächte richten sich auf bestimmte Sterne aus: der nördliche Schacht zeigte auf die Polarsterne, während der südliche auf den Oriongürtel zeigte.",
                nl: "De luchtschachten zijn uitgelijnd met specifieke sterren: de noordelijke schacht wees naar de poolsterren, terwijl de zuidelijke naar de Gordel van Orion wees."
            }
        },
        {
            question: {
                en: "What is the name of the unfinished chamber below ground?",
                es: "¿Cuál es el nombre de la cámara inacabada bajo tierra?",
                de: "Wie heißt die unvollendete Kammer unter der Erde?",
                nl: "Wat is de naam van de onafgemaakte kamer onder de grond?"
            },
            options: [
                { en: "The Lower Chamber", es: "La Cámara Inferior", de: "Die Untere Kammer", nl: "De Lagere Kamer" },
                { en: "The Pit", es: "El Pozo", de: "Die Grube", nl: "De Put" },
                { en: "The Subterranean Chamber", es: "La Cámara Subterránea", de: "Die Unterirdische Kammer", nl: "De Ondergrondse Kamer" },
                { en: "The Foundation Room", es: "La Sala de Cimentación", de: "Der Fundamentraum", nl: "De Funderingskamer" }
            ],
            correctIndex: 2,
            explanation: {
                en: "The Subterranean Chamber is an unfinished room carved into bedrock beneath the pyramid, possibly an abandoned burial chamber design.",
                es: "La Cámara Subterránea es una sala inacabada tallada en la roca debajo de la pirámide, posiblemente un diseño de cámara funeraria abandonado.",
                de: "Die Unterirdische Kammer ist ein unvollendeter Raum, der in den Felsen unter der Pyramide geschnitzt wurde, möglicherweise ein aufgegebenes Grabkammerdesign.",
                nl: "De Ondergrondse Kamer is een onafgemaakte ruimte gesneden in rotsen onder de piramide, mogelijk een verlaten grafkamerontwerp."
            }
        },
        {
            question: {
                en: "How wide is the base of each side of the Great Pyramid?",
                es: "¿Cuán ancha es la base de cada lado de la Gran Pirámide?",
                de: "Wie breit ist die Basis jeder Seite der Großen Pyramide?",
                nl: "Hoe breed is de basis van elke zijde van de Grote Piramide?"
            },
            options: [
                { en: "180 meters", es: "180 metros", de: "180 Meter", nl: "180 meter" },
                { en: "200 meters", es: "200 metros", de: "200 Meter", nl: "200 meter" },
                { en: "230.4 meters", es: "230,4 metros", de: "230,4 Meter", nl: "230,4 meter" },
                { en: "250 meters", es: "250 metros", de: "250 Meter", nl: "250 meter" }
            ],
            correctIndex: 2,
            explanation: {
                en: "Each side of the Great Pyramid's base measures approximately 230.4 meters, with remarkable precision and minimal variation between sides.",
                es: "Cada lado de la base de la Gran Pirámide mide aproximadamente 230,4 metros, con notable precisión y mínima variación entre los lados.",
                de: "Jede Seite der Basis der Großen Pyramide misst etwa 230,4 Meter, mit bemerkenswerter Präzision und minimaler Variation zwischen den Seiten.",
                nl: "Elke zijde van de basis van de Grote Piramide meet ongeveer 230,4 meter, met opmerkelijke precisie en minimale variatie tussen de zijden."
            }
        },
        {
            question: {
                en: "What is the estimated number of workers' tombs found near Giza?",
                es: "¿Cuál es el número estimado de tumbas de trabajadores encontradas cerca de Giza?",
                de: "Wie viele Arbeitergräber wurden schätzungsweise in der Nähe von Gizeh gefunden?",
                nl: "Wat is het geschatte aantal arbeidersgraven gevonden bij Gizeh?"
            },
            options: [
                { en: "100 tombs", es: "100 tumbas", de: "100 Gräber", nl: "100 graven" },
                { en: "600 tombs", es: "600 tumbas", de: "600 Gräber", nl: "600 graven" },
                { en: "2,000 tombs", es: "2.000 tumbas", de: "2.000 Gräber", nl: "2.000 graven" },
                { en: "5,000 tombs", es: "5.000 tumbas", de: "5.000 Gräber", nl: "5.000 graven" }
            ],
            correctIndex: 1,
            explanation: {
                en: "Approximately 600 workers' tombs have been discovered near Giza, providing valuable insights into the lives of pyramid builders.",
                es: "Se han descubierto aproximadamente 600 tumbas de trabajadores cerca de Giza, proporcionando valiosos conocimientos sobre las vidas de los constructores de pirámides.",
                de: "Etwa 600 Arbeitergräber wurden in der Nähe von Gizeh entdeckt, die wertvolle Einblicke in das Leben der Pyramidenbauer liefern.",
                nl: "Ongeveer 600 arbeidersgraven zijn ontdekt bij Gizeh, wat waardevolle inzichten verschaft in het leven van de piramidebouwers."
            }
        },
        {
            question: {
                en: "What nickname did Arab builders give to the Great Pyramid?",
                es: "¿Qué apodo dieron los constructores árabes a la Gran Pirámide?",
                de: "Welchen Spitznamen gaben arabische Baumeister der Großen Pyramide?",
                nl: "Welke bijnaam gaven Arabische bouwers aan de Grote Piramide?"
            },
            options: [
                { en: "The Mountain", es: "La Montaña", de: "Der Berg", nl: "De Berg" },
                { en: "The Light", es: "La Luz", de: "Das Licht", nl: "Het Licht" },
                { en: "The Terror", es: "El Terror", de: "Der Schrecken", nl: "De Verschrikking" },
                { en: "The Eternal", es: "El Eterno", de: "Das Ewige", nl: "Het Eeuwige" }
            ],
            correctIndex: 1,
            explanation: {
                en: "Medieval Arab writers called it 'The Light' because when covered in white limestone casing, it would reflect sunlight brilliantly.",
                es: "Los escritores árabes medievales la llamaron 'La Luz' porque cuando estaba cubierta con revestimiento de piedra caliza blanca, reflejaba la luz del sol brillantemente.",
                de: "Mittelalterliche arabische Schriftsteller nannten sie 'Das Licht', weil sie mit weißer Kalksteinverkleidung das Sonnenlicht brillant reflektierte.",
                nl: "Middeleeuwse Arabische schrijvers noemden het 'Het Licht' omdat het, bedekt met witte kalksteenbekleding, zonlicht schitterend weerkaatste."
            }
        },
        {
            question: {
                en: "What is the ratio between the pyramid's height and base perimeter?",
                es: "¿Cuál es la relación entre la altura de la pirámide y el perímetro de la base?",
                de: "Was ist das Verhältnis zwischen der Höhe der Pyramide und dem Basisumfang?",
                nl: "Wat is de verhouding tussen de hoogte van de piramide en de omtrek van de basis?"
            },
            options: [
                { en: "1:2", es: "1:2", de: "1:2", nl: "1:2" },
                { en: "Similar to pi", es: "Similar a pi", de: "Ähnlich wie Pi", nl: "Vergelijkbaar met pi" },
                { en: "1:4", es: "1:4", de: "1:4", nl: "1:4" },
                { en: "Golden ratio", es: "Proporción áurea", de: "Goldener Schnitt", nl: "Gulden snede" }
            ],
            correctIndex: 1,
            explanation: {
                en: "The ratio of the pyramid's height to its base perimeter is remarkably close to 1/(2π), similar to a circle's radius to circumference.",
                es: "La relación de la altura de la pirámide con el perímetro de su base es notablemente cercana a 1/(2π), similar al radio de un círculo a su circunferencia.",
                de: "Das Verhältnis der Höhe der Pyramide zu ihrem Basisumfang ist bemerkenswert nahe bei 1/(2π), ähnlich dem Radius eines Kreises zu seinem Umfang.",
                nl: "De verhouding van de hoogte van de piramide tot de omtrek van zijn basis is opmerkelijk dicht bij 1/(2π), vergelijkbaar met de straal van een cirkel tot zijn omtrek."
            }
        },
        {
            question: {
                en: "What modern building technique resembles ancient ramp theories?",
                es: "¿Qué técnica de construcción moderna se asemeja a las antiguas teorías de rampas?",
                de: "Welche moderne Bautechnik ähnelt den antiken Rampentheorien?",
                nl: "Welke moderne bouwtechniek lijkt op oude hellingstheorieën?"
            },
            options: [
                { en: "Crane lifting", es: "Levantamiento con grúa", de: "Kranheben", nl: "Kraanheffen" },
                { en: "Spiral scaffolding", es: "Andamiaje en espiral", de: "Spiralgerüst", nl: "Spiraalsteiger" },
                { en: "Helicopter placement", es: "Colocación por helicóptero", de: "Hubschrauberplatzierung", nl: "Helikopter plaatsing" },
                { en: "Robot construction", es: "Construcción robótica", de: "Roboterbau", nl: "Robotbouw" }
            ],
            correctIndex: 1,
            explanation: {
                en: "The internal ramp theory suggests workers used spiral ramps inside the pyramid's structure, similar to modern spiral scaffolding systems.",
                es: "La teoría de la rampa interna sugiere que los trabajadores usaron rampas en espiral dentro de la estructura de la pirámide, similar a los sistemas modernos de andamiaje en espiral.",
                de: "Die interne Rampentheorie legt nahe, dass Arbeiter spiralförmige Rampen innerhalb der Pyramidenstruktur verwendeten, ähnlich wie moderne Spiralgerüstsysteme.",
                nl: "De interne hellingstheorie suggereert dat arbeiders spiraalhellingen in de structuur van de piramide gebruikten, vergelijkbaar met moderne spiraalsteigersystemen."
            }
        },
        {
            question: {
                en: "How many casing stones originally covered the Great Pyramid?",
                es: "¿Cuántas piedras de revestimiento cubrían originalmente la Gran Pirámide?",
                de: "Wie viele Verkleidungssteine bedeckten ursprünglich die Große Pyramide?",
                nl: "Hoeveel bekledingsstenen bedekten oorspronkelijk de Grote Piramide?"
            },
            options: [
                { en: "10,000 stones", es: "10.000 piedras", de: "10.000 Steine", nl: "10.000 stenen" },
                { en: "27,000 stones", es: "27.000 piedras", de: "27.000 Steine", nl: "27.000 stenen" },
                { en: "50,000 stones", es: "50.000 piedras", de: "50.000 Steine", nl: "50.000 stenen" },
                { en: "100,000 stones", es: "100.000 piedras", de: "100.000 Steine", nl: "100.000 stenen" }
            ],
            correctIndex: 1,
            explanation: {
                en: "Approximately 27,000 highly polished white Tura limestone casing stones originally covered the pyramid's exterior surface.",
                es: "Aproximadamente 27.000 piedras de revestimiento de piedra caliza blanca de Tura altamente pulidas cubrían originalmente la superficie exterior de la pirámide.",
                de: "Etwa 27.000 hochpolierte weiße Tura-Kalkstein-Verkleidungssteine bedeckten ursprünglich die Außenfläche der Pyramide.",
                nl: "Ongeveer 27.000 hooggepolijste witte Tura-kalksteen bekledingsstenen bedekten oorspronkelijk het buitenoppervlak van de piramide."
            }
        },
        {
            question: {
                en: "What was the average weight of each stone block?",
                es: "¿Cuál era el peso promedio de cada bloque de piedra?",
                de: "Was war das durchschnittliche Gewicht jedes Steinblocks?",
                nl: "Wat was het gemiddelde gewicht van elk steenblok?"
            },
            options: [
                { en: "500 kg", es: "500 kg", de: "500 kg", nl: "500 kg" },
                { en: "1 ton", es: "1 tonelada", de: "1 Tonne", nl: "1 ton" },
                { en: "2.5 tons", es: "2,5 toneladas", de: "2,5 Tonnen", nl: "2,5 ton" },
                { en: "5 tons", es: "5 toneladas", de: "5 Tonnen", nl: "5 ton" }
            ],
            correctIndex: 2,
            explanation: {
                en: "The average stone block in the Great Pyramid weighs approximately 2.5 tons, though some blocks weigh up to 80 tons.",
                es: "El bloque de piedra promedio en la Gran Pirámide pesa aproximadamente 2,5 toneladas, aunque algunos bloques pesan hasta 80 toneladas.",
                de: "Der durchschnittliche Steinblock in der Großen Pyramide wiegt etwa 2,5 Tonnen, obwohl einige Blöcke bis zu 80 Tonnen wiegen.",
                nl: "Het gemiddelde steenblok in de Grote Piramide weegt ongeveer 2,5 ton, hoewel sommige blokken tot 80 ton wegen."
            }
        },
        {
            question: {
                en: "What percentage of the original casing stones remain today?",
                es: "¿Qué porcentaje de las piedras de revestimiento originales permanecen hoy?",
                de: "Wie viel Prozent der ursprünglichen Verkleidungssteine sind heute noch vorhanden?",
                nl: "Welk percentage van de oorspronkelijke bekledingsstenen blijft vandaag over?"
            },
            options: [
                { en: "Less than 1%", es: "Menos del 1%", de: "Weniger als 1%", nl: "Minder dan 1%" },
                { en: "10%", es: "10%", de: "10%", nl: "10%" },
                { en: "25%", es: "25%", de: "25%", nl: "25%" },
                { en: "50%", es: "50%", de: "50%", nl: "50%" }
            ],
            correctIndex: 0,
            explanation: {
                en: "Less than 1% of the original white limestone casing stones remain today, most having been removed for building projects in Cairo.",
                es: "Menos del 1% de las piedras de revestimiento de piedra caliza blanca originales permanecen hoy, la mayoría habiendo sido removidas para proyectos de construcción en El Cairo.",
                de: "Weniger als 1% der ursprünglichen weißen Kalkstein-Verkleidungssteine sind heute noch vorhanden, die meisten wurden für Bauprojekte in Kairo entfernt.",
                nl: "Minder dan 1% van de oorspronkelijke witte kalksteen bekledingsstenen blijft vandaag over, de meeste zijn verwijderd voor bouwprojecten in Caïro."
            }
        },
        {
            question: {
                en: "What was Khufu's relationship to Khafre?",
                es: "¿Cuál era la relación de Keops con Kefrén?",
                de: "Was war Chufus Beziehung zu Chephren?",
                nl: "Wat was Khufu's relatie tot Chefren?"
            },
            options: [
                { en: "Brothers", es: "Hermanos", de: "Brüder", nl: "Broers" },
                { en: "Father and son", es: "Padre e hijo", de: "Vater und Sohn", nl: "Vader en zoon" },
                { en: "Uncle and nephew", es: "Tío y sobrino", de: "Onkel und Neffe", nl: "Oom en neef" },
                { en: "Cousins", es: "Primos", de: "Cousins", nl: "Neven" }
            ],
            correctIndex: 1,
            explanation: {
                en: "Khufu was Khafre's father. Khafre built the second pyramid at Giza and likely also built the Great Sphinx.",
                es: "Keops era el padre de Kefrén. Kefrén construyó la segunda pirámide en Giza y probablemente también construyó la Gran Esfinge.",
                de: "Chufu war Chephrens Vater. Chephren baute die zweite Pyramide in Gizeh und wahrscheinlich auch die Große Sphinx.",
                nl: "Khufu was Chefren's vader. Chefren bouwde de tweede piramide in Gizeh en waarschijnlijk ook de Grote Sfinx."
            }
        ,
      {
        question: {
                  "en": "In which century was Pyramids of Giza built?",
                  "es": "In which century was Pyramids of Giza built?",
                  "de": "In which century was Pyramids of Giza built?",
                  "nl": "In which century was Pyramids of Giza built?"
        },
        options: [
          {
                    "en": "Correct century",
                    "es": "Correct century",
                    "de": "Correct century",
                    "nl": "Correct century"
          },
          {
                    "en": "One century earlier",
                    "es": "One century earlier",
                    "de": "One century earlier",
                    "nl": "One century earlier"
          },
          {
                    "en": "One century later",
                    "es": "One century later",
                    "de": "One century later",
                    "nl": "One century later"
          },
          {
                    "en": "Two centuries later",
                    "es": "Two centuries later",
                    "de": "Two centuries later",
                    "nl": "Two centuries later"
          }
        ],
        correct: 0,
        explanation: {
                  "en": "This fact about Pyramids of Giza is historically accurate and well-documented.",
                  "es": "Este hecho sobre Pyramids of Giza es históricamente preciso y bien documentado.",
                  "de": "Diese Tatsache über Pyramids of Giza ist historisch korrekt und gut dokumentiert.",
                  "nl": "Dit feit over Pyramids of Giza is historisch accuraat en goed gedocumenteerd."
        }
      }
      }
    ];

    if (typeof module !== 'undefined' && module.exports) {
        module.exports = level3Questions;
    }
})();
