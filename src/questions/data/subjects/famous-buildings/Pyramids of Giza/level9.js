(function() {
    const level9Questions = [
        {
            question: {
                en: "What is the exact orientation error of the Great Pyramid's base?",
                es: "¿Cuál es el error de orientación exacto de la base de la Gran Pirámide?",
                de: "Wie groß ist der genaue Ausrichtungsfehler der Basis der Großen Pyramide?",
                nl: "Wat is de exacte oriëntatiefout van de basis van de Grote Piramide?"
            },
            options: [
                { en: "15 degrees", es: "15 grados", de: "15 Grad", nl: "15 graden" },
                { en: "1 degree", es: "1 grado", de: "1 Grad", nl: "1 graad" },
                { en: "3 arcminutes 54 arcseconds", es: "3 minutos de arco 54 segundos de arco", de: "3 Bogenminuten 54 Bogensekunden", nl: "3 boogminuten 54 boogseconden" },
                { en: "30 arcminutes", es: "30 minutos de arco", de: "30 Bogenminuten", nl: "30 boogminuten" }
            ],
            correctIndex: 2,
            explanation: {
                en: "The Great Pyramid's alignment to true north is remarkably accurate, with an error of only 3 arcminutes 54 arcseconds (about 0.067 degrees), achieved without modern instruments.",
                es: "La alineación de la Gran Pirámide con el norte verdadero es notablemente precisa, con un error de solo 3 minutos de arco 54 segundos de arco (aproximadamente 0,067 grados), logrado sin instrumentos modernos.",
                de: "Die Ausrichtung der Großen Pyramide zum wahren Norden ist bemerkenswert genau, mit einem Fehler von nur 3 Bogenminuten 54 Bogensekunden (etwa 0,067 Grad), erreicht ohne moderne Instrumente.",
                nl: "De uitlijning van de Grote Piramide met het ware noorden is opmerkelijk nauwkeurig, met een fout van slechts 3 boogminuten 54 boogseconden (ongeveer 0,067 graden), bereikt zonder moderne instrumenten."
            }
        },
        {
            question: {
                en: "What astronomical phenomenon did the southern shaft of the King's Chamber target?",
                es: "¿Qué fenómeno astronómico apuntaba el conducto sur de la Cámara del Rey?",
                de: "Welches astronomische Phänomen zielte der südliche Schacht der Königskammer an?",
                nl: "Welk astronomisch fenomeen richtte de zuidelijke schacht van de Koningskamer zich op?"
            },
            options: [
                { en: "Sirius", es: "Sirio", de: "Sirius", nl: "Sirius" },
                { en: "Orion's Belt (Al Nitak)", es: "Cinturón de Orión (Al Nitak)", de: "Oriongürtel (Al Nitak)", nl: "Gordel van Orion (Al Nitak)" },
                { en: "Polaris", es: "Polaris", de: "Polaris", nl: "Polaris" },
                { en: "Venus", es: "Venus", de: "Venus", nl: "Venus" }
            ],
            correctIndex: 1,
            explanation: {
                en: "The southern shaft of the King's Chamber pointed at Al Nitak (Zeta Orionis) in Orion's Belt at around 2450 BC, which the Egyptians associated with Osiris.",
                es: "El conducto sur de la Cámara del Rey apuntaba a Al Nitak (Zeta Orionis) en el Cinturón de Orión alrededor del 2450 a.C., que los egipcios asociaban con Osiris.",
                de: "Der südliche Schacht der Königskammer zielte um 2450 v. Chr. auf Al Nitak (Zeta Orionis) im Oriongürtel, den die Ägypter mit Osiris assoziierten.",
                nl: "De zuidelijke schacht van de Koningskamer richtte zich rond 2450 v.Chr. op Al Nitak (Zeta Orionis) in de Gordel van Orion, die de Egyptenaren associeerden met Osiris."
            }
        },
        {
            question: {
                en: "What star did the northern shaft of the King's Chamber target?",
                es: "¿Qué estrella apuntaba el conducto norte de la Cámara del Rey?",
                de: "Welchen Stern zielte der nördliche Schacht der Königskammer an?",
                nl: "Welke ster richtte de noordelijke schacht van de Koningskamer zich op?"
            },
            options: [
                { en: "Polaris", es: "Polaris", de: "Polaris", nl: "Polaris" },
                { en: "Thuban (Alpha Draconis)", es: "Thuban (Alfa Draconis)", de: "Thuban (Alpha Draconis)", nl: "Thuban (Alfa Draconis)" },
                { en: "Sirius", es: "Sirio", de: "Sirius", nl: "Sirius" },
                { en: "Betelgeuse", es: "Betelgeuse", de: "Beteigeuze", nl: "Betelgeuse" }
            ],
            correctIndex: 1,
            explanation: {
                en: "The northern shaft targeted Thuban (Alpha Draconis), which was the pole star around 2700 BC, crucial for the pharaoh's journey to join the circumpolar 'imperishable stars.'",
                es: "El conducto norte apuntaba a Thuban (Alfa Draconis), que era la estrella polar alrededor del 2700 a.C., crucial para el viaje del faraón para unirse a las 'estrellas imperecederas' circumpolares.",
                de: "Der nördliche Schacht zielte auf Thuban (Alpha Draconis), der um 2700 v. Chr. der Polarstern war, entscheidend für die Reise des Pharaos, um sich den zirkumpolaren 'unvergänglichen Sternen' anzuschließen.",
                nl: "De noordelijke schacht richtte zich op Thuban (Alfa Draconis), die rond 2700 v.Chr. de poolster was, cruciaal voor de reis van de farao om zich bij de circumpolaire 'onvergankelijke sterren' te voegen."
            }
        },
        {
            question: {
                en: "What is the precise slope angle of the Great Pyramid?",
                es: "¿Cuál es el ángulo de inclinación preciso de la Gran Pirámide?",
                de: "Was ist der genaue Neigungswinkel der Großen Pyramide?",
                nl: "Wat is de precieze helling hoek van de Grote Piramide?"
            },
            options: [
                { en: "45 degrees", es: "45 grados", de: "45 Grad", nl: "45 graden" },
                { en: "51°50'40\"", es: "51°50'40\"", de: "51°50'40\"", nl: "51°50'40\"" },
                { en: "60 degrees", es: "60 grados", de: "60 Grad", nl: "60 graden" },
                { en: "43 degrees", es: "43 grados", de: "43 Grad", nl: "43 graden" }
            ],
            correctIndex: 1,
            explanation: {
                en: "The Great Pyramid's slope angle is 51°50'40\" (or approximately 51.84 degrees), achieved through a seked (Egyptian measure) of 5½ palms per cubit, approximating the golden ratio.",
                es: "El ángulo de inclinación de la Gran Pirámide es 51°50'40\" (o aproximadamente 51,84 grados), logrado a través de un seked (medida egipcia) de 5½ palmas por codo, aproximando la proporción áurea.",
                de: "Der Neigungswinkel der Großen Pyramide beträgt 51°50'40\" (oder etwa 51,84 Grad), erreicht durch ein Seked (ägyptisches Maß) von 5½ Palmen pro Elle, was das goldene Verhältnis annähert.",
                nl: "De helling hoek van de Grote Piramide is 51°50'40\" (of ongeveer 51,84 graden), bereikt door een seked (Egyptische maat) van 5½ palmen per el, wat de gulden snede benadert."
            }
        },
        {
            question: {
                en: "What mathematical relationship exists between the pyramid's height and base perimeter?",
                es: "¿Qué relación matemática existe entre la altura de la pirámide y el perímetro de la base?",
                de: "Welche mathematische Beziehung besteht zwischen der Höhe der Pyramide und dem Basisumfang?",
                nl: "Welke wiskundige relatie bestaat er tussen de hoogte van de piramide en de omtrek van de basis?"
            },
            options: [
                { en: "They are equal", es: "Son iguales", de: "Sie sind gleich", nl: "Ze zijn gelijk" },
                { en: "Base perimeter ÷ (2 × height) ≈ π", es: "Perímetro de base ÷ (2 × altura) ≈ π", de: "Basisumfang ÷ (2 × Höhe) ≈ π", nl: "Basis omtrek ÷ (2 × hoogte) ≈ π" },
                { en: "Height = base × 2", es: "Altura = base × 2", de: "Höhe = Basis × 2", nl: "Hoogte = basis × 2" },
                { en: "No relationship", es: "Sin relación", de: "Keine Beziehung", nl: "Geen relatie" }
            ],
            correctIndex: 1,
            explanation: {
                en: "The base perimeter (921.6m) divided by twice the height (293m) equals approximately π (3.14159), though whether this was intentional or coincidental remains debated among scholars.",
                es: "El perímetro de la base (921,6 m) dividido por el doble de la altura (293 m) es igual a aproximadamente π (3,14159), aunque si esto fue intencional o coincidental sigue siendo debatido entre académicos.",
                de: "Der Basisumfang (921,6 m) geteilt durch die doppelte Höhe (293 m) ergibt ungefähr π (3,14159), obwohl unter Gelehrten umstritten ist, ob dies beabsichtigt oder zufällig war.",
                nl: "De omtrek van de basis (921,6 m) gedeeld door tweemaal de hoogte (293 m) is ongeveer gelijk aan π (3,14159), hoewel het onder geleerden omstreden blijft of dit opzettelijk of toevallig was."
            }
        },
        {
            question: {
                en: "What is the Egyptian royal cubit measurement used in the Great Pyramid?",
                es: "¿Cuál es la medida del codo real egipcio utilizada en la Gran Pirámide?",
                de: "Was ist das ägyptische königliche Ellen-Maß, das in der Großen Pyramide verwendet wurde?",
                nl: "Wat is de Egyptische koninklijke el-maat gebruikt in de Grote Piramide?"
            },
            options: [
                { en: "30 centimeters", es: "30 centímetros", de: "30 Zentimeter", nl: "30 centimeter" },
                { en: "45 centimeters", es: "45 centímetros", de: "45 Zentimeter", nl: "45 centimeter" },
                { en: "52.36 centimeters", es: "52,36 centímetros", de: "52,36 Zentimeter", nl: "52,36 centimeter" },
                { en: "60 centimeters", es: "60 centímetros", de: "60 Zentimeter", nl: "60 centimeter" }
            ],
            correctIndex: 2,
            explanation: {
                en: "The royal cubit used in the Great Pyramid is approximately 52.36 cm (20.62 inches), divided into 7 palms of 4 digits each, totaling 28 digits per cubit.",
                es: "El codo real utilizado en la Gran Pirámide es de aproximadamente 52,36 cm (20,62 pulgadas), dividido en 7 palmas de 4 dígitos cada una, totalizando 28 dígitos por codo.",
                de: "Die in der Großen Pyramide verwendete königliche Elle beträgt etwa 52,36 cm (20,62 Zoll), aufgeteilt in 7 Palmen mit je 4 Fingern, insgesamt 28 Finger pro Elle.",
                nl: "De koninklijke el gebruikt in de Grote Piramide is ongeveer 52,36 cm (20,62 inch), verdeeld in 7 palmen van elk 4 vingers, in totaal 28 vingers per el."
            }
        },
        {
            question: {
                en: "What was the seked measurement system used for?",
                es: "¿Para qué se utilizaba el sistema de medición seked?",
                de: "Wofür wurde das Seked-Messsystem verwendet?",
                nl: "Waar werd het seked-meetsysteem voor gebruikt?"
            },
            options: [
                { en: "Measuring weight", es: "Medir peso", de: "Gewicht messen", nl: "Gewicht meten" },
                { en: "Measuring slope angles", es: "Medir ángulos de inclinación", de: "Neigungswinkel messen", nl: "Helling hoeken meten" },
                { en: "Measuring time", es: "Medir tiempo", de: "Zeit messen", nl: "Tijd meten" },
                { en: "Measuring volume", es: "Medir volumen", de: "Volumen messen", nl: "Volume meten" }
            ],
            correctIndex: 1,
            explanation: {
                en: "The seked was an Egyptian measure for slope angles, expressing the horizontal run in palms for each royal cubit of vertical rise. The Great Pyramid used a seked of 5½.",
                es: "El seked era una medida egipcia para ángulos de inclinación, expresando el recorrido horizontal en palmas por cada codo real de elevación vertical. La Gran Pirámide usó un seked de 5½.",
                de: "Das Seked war ein ägyptisches Maß für Neigungswinkel, das den horizontalen Verlauf in Palmen für jede königliche Elle vertikalen Anstiegs ausdrückte. Die Große Pyramide verwendete ein Seked von 5½.",
                nl: "De seked was een Egyptische maat voor helling hoeken, waarbij de horizontale loop in palmen werd uitgedrukt voor elke koninklijke el van verticale stijging. De Grote Piramide gebruikte een seked van 5½."
            }
        },
        {
            question: {
                en: "What is the significance of the ratio 11:7 in the Great Pyramid?",
                es: "¿Cuál es la importancia de la proporción 11:7 en la Gran Pirámide?",
                de: "Was ist die Bedeutung des Verhältnisses 11:7 in der Großen Pyramide?",
                nl: "Wat is de betekenis van de verhouding 11:7 in de Grote Piramide?"
            },
            options: [
                { en: "Number of chambers", es: "Número de cámaras", de: "Anzahl der Kammern", nl: "Aantal kamers" },
                { en: "Half base to height ratio (approximates √φ)", es: "Proporción de media base a altura (aproxima √φ)", de: "Verhältnis halbe Basis zu Höhe (nähert √φ)", nl: "Verhouding halve basis tot hoogte (benadert √φ)" },
                { en: "Stone block count", es: "Cuenta de bloques de piedra", de: "Anzahl der Steinblöcke", nl: "Aantal stenen blokken" },
                { en: "Worker shifts", es: "Turnos de trabajadores", de: "Arbeitsschichten", nl: "Werknemersdiensten" }
            ],
            correctIndex: 1,
            explanation: {
                en: "The ratio of half the base (115.2m) to height (146.5m) is approximately 11:14, which when expressed as 11:7 (for apothem:half base) approximates √φ (square root of golden ratio).",
                es: "La proporción de la mitad de la base (115,2 m) a la altura (146,5 m) es aproximadamente 11:14, que cuando se expresa como 11:7 (para apotema:media base) aproxima √φ (raíz cuadrada de la proporción áurea).",
                de: "Das Verhältnis der halben Basis (115,2 m) zur Höhe (146,5 m) beträgt etwa 11:14, was, wenn es als 11:7 (für Apotheme:halbe Basis) ausgedrückt wird, √φ (Quadratwurzel des goldenen Verhältnisses) annähert.",
                nl: "De verhouding van de helft van de basis (115,2 m) tot de hoogte (146,5 m) is ongeveer 11:14, wat wanneer uitgedrukt als 11:7 (voor apothema:halve basis) √φ (vierkantswortel van gulden snede) benadert."
            }
        },
        {
            question: {
                en: "What construction theory involves a single external ramp?",
                es: "¿Qué teoría de construcción implica una rampa externa única?",
                de: "Welche Bautheorie beinhaltet eine einzelne externe Rampe?",
                nl: "Welke constructietheorie omvat een enkele externe helling?"
            },
            options: [
                { en: "Straight ramp theory", es: "Teoría de rampa recta", de: "Gerade-Rampen-Theorie", nl: "Rechte helling theorie" },
                { en: "Spiral ramp theory", es: "Teoría de rampa espiral", de: "Spiral-Rampen-Theorie", nl: "Spiraal helling theorie" },
                { en: "Internal ramp theory", es: "Teoría de rampa interna", de: "Interne-Rampen-Theorie", nl: "Interne helling theorie" },
                { en: "No ramp theory", es: "Teoría sin rampa", de: "Keine-Rampen-Theorie", nl: "Geen helling theorie" }
            ],
            correctIndex: 0,
            explanation: {
                en: "The straight ramp theory proposes a single long ramp extending from the pyramid, though calculations show it would need to be over 1.6 km long to maintain a usable slope.",
                es: "La teoría de la rampa recta propone una rampa larga única que se extiende desde la pirámide, aunque los cálculos muestran que necesitaría tener más de 1,6 km de largo para mantener una pendiente utilizable.",
                de: "Die Gerade-Rampen-Theorie schlägt eine einzelne lange Rampe vor, die von der Pyramide ausgeht, obwohl Berechnungen zeigen, dass sie über 1,6 km lang sein müsste, um eine nutzbare Steigung beizubehalten.",
                nl: "De rechte helling theorie stelt een enkele lange helling voor die vanaf de piramide loopt, hoewel berekeningen aantonen dat het meer dan 1,6 km lang zou moeten zijn om een bruikbare helling te behouden."
            }
        },
        {
            question: {
                en: "What does the Orion Correlation Theory propose?",
                es: "¿Qué propone la Teoría de Correlación de Orión?",
                de: "Was schlägt die Orion-Korrelationstheorie vor?",
                nl: "Wat stelt de Orion Correlatie Theorie voor?"
            },
            options: [
                { en: "Pyramids are randomly placed", es: "Las pirámides están colocadas al azar", de: "Pyramiden sind zufällig platziert", nl: "Piramides zijn willekeurig geplaatst" },
                { en: "Giza pyramids mirror Orion's Belt stars", es: "Las pirámides de Giza reflejan las estrellas del Cinturón de Orión", de: "Gizeh-Pyramiden spiegeln die Sterne des Oriongürtels wider", nl: "Gizeh-piramides weerspiegelen de sterren van de Gordel van Orion" },
                { en: "Pyramids point to Mars", es: "Las pirámides apuntan a Marte", de: "Pyramiden zeigen auf Mars", nl: "Piramides wijzen naar Mars" },
                { en: "Pyramids align with the Moon", es: "Las pirámides se alinean con la Luna", de: "Pyramiden richten sich nach dem Mond aus", nl: "Piramides lijnen uit met de Maan" }
            ],
            correctIndex: 1,
            explanation: {
                en: "Robert Bauval's Orion Correlation Theory (1983) proposes that the three Giza pyramids' layout mirrors the three stars of Orion's Belt, with the Nile representing the Milky Way.",
                es: "La Teoría de Correlación de Orión de Robert Bauval (1983) propone que el diseño de las tres pirámides de Giza refleja las tres estrellas del Cinturón de Orión, con el Nilo representando la Vía Láctea.",
                de: "Robert Bauvals Orion-Korrelationstheorie (1983) schlägt vor, dass das Layout der drei Gizeh-Pyramiden die drei Sterne des Oriongürtels widerspiegelt, wobei der Nil die Milchstraße darstellt.",
                nl: "Robert Bauval's Orion Correlatie Theorie (1983) stelt voor dat de indeling van de drie Gizeh-piramides de drie sterren van de Gordel van Orion weerspiegelt, waarbij de Nijl de Melkweg vertegenwoordigt."
            }
        },
        {
            question: {
                en: "What is Jean-Pierre Houdin's internal ramp theory?",
                es: "¿Qué es la teoría de rampa interna de Jean-Pierre Houdin?",
                de: "Was ist Jean-Pierre Houdins interne Rampentheorie?",
                nl: "Wat is Jean-Pierre Houdin's interne helling theorie?"
            },
            options: [
                { en: "External spiral ramp only", es: "Solo rampa espiral externa", de: "Nur externe Spiralrampe", nl: "Alleen externe spiraal helling" },
                { en: "Internal spiral tunnel within pyramid structure", es: "Túnel espiral interno dentro de la estructura de la pirámide", de: "Interner Spiraltunnel innerhalb der Pyramidenstruktur", nl: "Interne spiraal tunnel binnen piramidestructuur" },
                { en: "Vertical elevator system", es: "Sistema de elevador vertical", de: "Vertikales Aufzugssystem", nl: "Verticaal liftsysteem" },
                { en: "No ramps at all", es: "Sin rampas en absoluto", de: "Überhaupt keine Rampen", nl: "Helemaal geen hellingen" }
            ],
            correctIndex: 1,
            explanation: {
                en: "Houdin proposes an external ramp for the first third, then an internal spiral ramp within the pyramid's structure for the upper portions, explaining how the apex was completed efficiently.",
                es: "Houdin propone una rampa externa para el primer tercio, luego una rampa espiral interna dentro de la estructura de la pirámide para las porciones superiores, explicando cómo se completó eficientemente el ápice.",
                de: "Houdin schlägt eine externe Rampe für das erste Drittel vor, dann eine interne Spiralrampe innerhalb der Pyramidenstruktur für die oberen Teile, was erklärt, wie die Spitze effizient fertiggestellt wurde.",
                nl: "Houdin stelt een externe helling voor voor het eerste derde deel, dan een interne spiraal helling binnen de piramidestructuur voor de bovenste gedeelten, wat verklaart hoe de top efficiënt werd voltooid."
            }
        },
        {
            question: {
                en: "What is the estimated margin of error in the Great Pyramid's base square?",
                es: "¿Cuál es el margen de error estimado en el cuadrado de la base de la Gran Pirámide?",
                de: "Was ist die geschätzte Fehlertoleranz im Basisquadrat der Großen Pyramide?",
                nl: "Wat is de geschatte foutmarge in het basisvierkant van de Grote Piramide?"
            },
            options: [
                { en: "50 centimeters", es: "50 centímetros", de: "50 Zentimeter", nl: "50 centimeter" },
                { en: "5.8 centimeters", es: "5,8 centímetros", de: "5,8 Zentimeter", nl: "5,8 centimeter" },
                { en: "1 meter", es: "1 metro", de: "1 Meter", nl: "1 meter" },
                { en: "10 centimeters", es: "10 centímetros", de: "10 Zentimeter", nl: "10 centimeter" }
            ],
            correctIndex: 1,
            explanation: {
                en: "The maximum difference in the lengths of the four sides of the Great Pyramid's base is only 5.8 cm out of 230 meters, representing an accuracy of 99.97%.",
                es: "La diferencia máxima en las longitudes de los cuatro lados de la base de la Gran Pirámide es de solo 5,8 cm de 230 metros, representando una precisión del 99,97%.",
                de: "Der maximale Unterschied in den Längen der vier Seiten der Basis der Großen Pyramide beträgt nur 5,8 cm von 230 Metern, was eine Genauigkeit von 99,97% darstellt.",
                nl: "Het maximale verschil in de lengtes van de vier zijden van de basis van de Grote Piramide is slechts 5,8 cm van 230 meter, wat een nauwkeurigheid van 99,97% vertegenwoordigt."
            }
        },
        {
            question: {
                en: "What is the significance of the 'boss' marks on some casing stones?",
                es: "¿Cuál es la importancia de las marcas de 'jefe' en algunas piedras de revestimiento?",
                de: "Was ist die Bedeutung der 'Boss'-Markierungen auf einigen Verkleidungssteinen?",
                nl: "Wat is de betekenis van de 'boss'-markeringen op sommige bekledingsstenen?"
            },
            options: [
                { en: "Decorative elements", es: "Elementos decorativos", de: "Dekorative Elemente", nl: "Decoratieve elementen" },
                { en: "Temporary knobs for handling and positioning stones", es: "Perillas temporales para manejar y posicionar piedras", de: "Temporäre Knöpfe zum Handhaben und Positionieren von Steinen", nl: "Tijdelijke knoppen voor het hanteren en positioneren van stenen" },
                { en: "Religious symbols", es: "Símbolos religiosos", de: "Religiöse Symbole", nl: "Religieuze symbolen" },
                { en: "Builder signatures", es: "Firmas de constructores", de: "Bauherrensignaturen", nl: "Bouwerhandtekeningen" }
            ],
            correctIndex: 1,
            explanation: {
                en: "Boss marks (protrusions) on casing stones were temporary knobs used with ropes for handling and positioning the stones precisely. They were to be removed after final placement but some remain.",
                es: "Las marcas de jefe (protuberancias) en las piedras de revestimiento eran perillas temporales utilizadas con cuerdas para manejar y posicionar las piedras con precisión. Debían eliminarse después de la colocación final, pero algunas permanecen.",
                de: "Boss-Markierungen (Vorsprünge) auf Verkleidungssteinen waren temporäre Knöpfe, die mit Seilen zum präzisen Handhaben und Positionieren der Steine verwendet wurden. Sie sollten nach der endgültigen Platzierung entfernt werden, aber einige bleiben.",
                nl: "Boss-markeringen (uitsteeksels) op bekledingsstenen waren tijdelijke knoppen die met touwen werden gebruikt voor het nauwkeurig hanteren en positioneren van de stenen. Ze moesten na definitieve plaatsing worden verwijderd, maar sommige blijven."
            }
        },
        {
            question: {
                en: "What was the purpose of the copper 'handles' found in Queen's Chamber shafts?",
                es: "¿Cuál era el propósito de las 'manijas' de cobre encontradas en los conductos de la Cámara de la Reina?",
                de: "Was war der Zweck der Kupfer-'Griffe', die in den Schächten der Königinnenkammer gefunden wurden?",
                nl: "Wat was het doel van de koperen 'handvatten' gevonden in de schachten van de Koninginnenkamer?"
            },
            options: [
                { en: "Door handles", es: "Manijas de puerta", de: "Türgriffe", nl: "Deurhandvatten" },
                { en: "Symbolic pins or ritual objects", es: "Alfileres simbólicos u objetos rituales", de: "Symbolische Stifte oder rituelle Objekte", nl: "Symbolische pinnen of rituele objecten" },
                { en: "Construction tools", es: "Herramientas de construcción", de: "Bauwerkzeuge", nl: "Bouwgereedschap" },
                { en: "Lighting fixtures", es: "Accesorios de iluminación", de: "Beleuchtungskörper", nl: "Verlichtingsarmaturen" }
            ],
            correctIndex: 1,
            explanation: {
                en: "The copper 'handles' or pins on the blocking stones in the Queen's Chamber shafts are believed to be symbolic or ritual objects rather than functional handles, possibly representing door mechanisms.",
                es: "Las 'manijas' o alfileres de cobre en las piedras de bloqueo en los conductos de la Cámara de la Reina se cree que son objetos simbólicos o rituales en lugar de manijas funcionales, posiblemente representando mecanismos de puerta.",
                de: "Die Kupfer-'Griffe' oder Stifte an den Sperrsteinen in den Schächten der Königinnenkammer werden als symbolische oder rituelle Objekte und nicht als funktionale Griffe angesehen, möglicherweise Türmechanismen darstellend.",
                nl: "De koperen 'handvatten' of pinnen op de blokkerende stenen in de schachten van de Koninginnenkamer worden verondersteld symbolische of rituele objecten te zijn in plaats van functionele handvatten, mogelijk deurmechanismen voorstellend."
            }
        },
        {
            question: {
                en: "What is the 'Chamber of Chaos' theory regarding the subterranean chamber?",
                es: "¿Qué es la teoría de la 'Cámara del Caos' con respecto a la cámara subterránea?",
                de: "Was ist die 'Kammer des Chaos'-Theorie bezüglich der unterirdischen Kammer?",
                nl: "Wat is de 'Kamer van Chaos'-theorie met betrekking tot de ondergrondse kamer?"
            },
            options: [
                { en: "It represents the primordial chaos before creation", es: "Representa el caos primordial antes de la creación", de: "Sie repräsentiert das ursprüngliche Chaos vor der Schöpfung", nl: "Het vertegenwoordigt de oerchaos voor de schepping" },
                { en: "It was a storage room", es: "Era un cuarto de almacenamiento", de: "Es war ein Lagerraum", nl: "Het was een opslagruimte" },
                { en: "It housed workers", es: "Albergaba trabajadores", de: "Es beherbergte Arbeiter", nl: "Het huisvestte arbeiders" },
                { en: "It was an accident", es: "Fue un accidente", de: "Es war ein Unfall", nl: "Het was een ongeluk" }
            ],
            correctIndex: 0,
            explanation: {
                en: "Some Egyptologists theorize the unfinished subterranean chamber symbolically represented Nun, the primordial waters of chaos in Egyptian mythology, from which creation emerged.",
                es: "Algunos egiptólogos teorizan que la cámara subterránea inacabada representaba simbólicamente a Nun, las aguas primordiales del caos en la mitología egipcia, de las cuales emergió la creación.",
                de: "Einige Ägyptologen theoretisieren, dass die unfertige unterirdische Kammer symbolisch Nun darstellte, die ursprünglichen Wasser des Chaos in der ägyptischen Mythologie, aus denen die Schöpfung hervorging.",
                nl: "Sommige egyptologen theoretiseren dat de onvoltooide ondergrondse kamer symbolisch Nun vertegenwoordigde, de oerwateren van chaos in de Egyptische mythologie, waaruit de schepping voortkwam."
            }
        },
        {
            question: {
                en: "What technology did the Dixon brothers discover in 1872?",
                es: "¿Qué tecnología descubrieron los hermanos Dixon en 1872?",
                de: "Welche Technologie entdeckten die Dixon-Brüder 1872?",
                nl: "Welke technologie ontdekten de Dixon-broers in 1872?"
            },
            options: [
                { en: "Electric lights", es: "Luces eléctricas", de: "Elektrische Lichter", nl: "Elektrische lichten" },
                { en: "The concealed Queen's Chamber air shafts", es: "Los conductos de aire ocultos de la Cámara de la Reina", de: "Die verborgenen Luftschächte der Königinnenkammer", nl: "De verborgen luchtschachten van de Koninginnenkamer" },
                { en: "Secret passages", es: "Pasajes secretos", de: "Geheimgänge", nl: "Geheime doorgangen" },
                { en: "Gold deposits", es: "Depósitos de oro", de: "Goldablagerungen", nl: "Goudafzettingen" }
            ],
            correctIndex: 1,
            explanation: {
                en: "Waynman Dixon and his brother discovered the Queen's Chamber shafts in 1872 by probing the walls. They also found small artifacts including a copper hook, granite ball, and wooden object.",
                es: "Waynman Dixon y su hermano descubrieron los conductos de la Cámara de la Reina en 1872 al sondear las paredes. También encontraron pequeños artefactos incluyendo un gancho de cobre, bola de granito y objeto de madera.",
                de: "Waynman Dixon und sein Bruder entdeckten 1872 die Schächte der Königinnenkammer durch Sondierung der Wände. Sie fanden auch kleine Artefakte, darunter einen Kupferhaken, Granitkugel und Holzobjekt.",
                nl: "Waynman Dixon en zijn broer ontdekten in 1872 de schachten van de Koninginnenkamer door de muren te onderzoeken. Ze vonden ook kleine artefacten waaronder een koperen haak, granieten bal en houten object."
            }
        },
        {
            question: {
                en: "What is the 'Grand Egyptian Museum' project's relationship to Giza?",
                es: "¿Cuál es la relación del proyecto 'Gran Museo Egipcio' con Giza?",
                de: "Was ist die Beziehung des 'Großen Ägyptischen Museums' zu Gizeh?",
                nl: "Wat is de relatie van het 'Grote Egyptische Museum'-project met Gizeh?"
            },
            options: [
                { en: "It replaces the pyramids", es: "Reemplaza las pirámides", de: "Es ersetzt die Pyramiden", nl: "Het vervangt de piramides" },
                { en: "Built near Giza to display pyramid artifacts", es: "Construido cerca de Giza para exhibir artefactos de pirámides", de: "In der Nähe von Gizeh gebaut, um Pyramidenartefakte auszustellen", nl: "Gebouwd bij Gizeh om piramide-artefacten tentoon te stellen" },
                { en: "Unrelated to Giza", es: "Sin relación con Giza", de: "Unabhängig von Gizeh", nl: "Niet gerelateerd aan Gizeh" },
                { en: "It's inside the pyramids", es: "Está dentro de las pirámides", de: "Es ist in den Pyramiden", nl: "Het is in de piramides" }
            ],
            correctIndex: 1,
            explanation: {
                en: "The Grand Egyptian Museum, near the Giza Plateau, will house over 100,000 artifacts including Khufu's solar boats and many Giza-related discoveries, becoming the world's largest archaeological museum.",
                es: "El Gran Museo Egipcio, cerca de la meseta de Giza, albergará más de 100.000 artefactos incluyendo los barcos solares de Keops y muchos descubrimientos relacionados con Giza, convirtiéndose en el museo arqueológico más grande del mundo.",
                de: "Das Große Ägyptische Museum in der Nähe des Gizeh-Plateaus wird über 100.000 Artefakte beherbergen, darunter Chufus Sonnenbarken und viele Gizeh-bezogene Entdeckungen, und wird das größte archäologische Museum der Welt.",
                nl: "Het Grote Egyptische Museum, bij het Gizeh-plateau, zal meer dan 100.000 artefacten huisvesten, waaronder de zonneboten van Cheops en vele Gizeh-gerelateerde ontdekkingen, en wordt het grootste archeologische museum ter wereld."
            }
        },
        {
            question: {
                en: "What evidence supports the theory that Khufu's mummy was never in the pyramid?",
                es: "¿Qué evidencia respalda la teoría de que la momia de Keops nunca estuvo en la pirámide?",
                de: "Welche Beweise stützen die Theorie, dass Chufus Mumie nie in der Pyramide war?",
                nl: "Welk bewijs ondersteunt de theorie dat de mummie van Cheops nooit in de piramide was?"
            },
            options: [
                { en: "The empty sarcophagus and evidence of ancient tomb robbery", es: "El sarcófago vacío y evidencia de robo de tumba antigua", de: "Der leere Sarkophag und Beweise für antiken Grabraub", nl: "De lege sarcofaag en bewijs van oude grafplundering" },
                { en: "Written records", es: "Registros escritos", de: "Schriftliche Aufzeichnungen", nl: "Schriftelijke gegevens" },
                { en: "DNA testing", es: "Pruebas de ADN", de: "DNA-Tests", nl: "DNA-testen" },
                { en: "Photographs", es: "Fotografías", de: "Fotografien", nl: "Foto's" }
            ],
            correctIndex: 0,
            explanation: {
                en: "The empty sarcophagus, missing lid, and Al-Ma'mun's 9th-century forced entry finding nothing suggest the burial chamber was robbed in antiquity, possibly soon after burial, or the mummy was never placed there.",
                es: "El sarcófago vacío, la tapa faltante y la entrada forzada de Al-Ma'mun en el siglo IX que no encontró nada sugieren que la cámara funeraria fue robada en la antigüedad, posiblemente poco después del entierro, o la momia nunca fue colocada allí.",
                de: "Der leere Sarkophag, der fehlende Deckel und Al-Ma'muns erzwungener Eintritt im 9. Jahrhundert, bei dem nichts gefunden wurde, deuten darauf hin, dass die Grabkammer in der Antike geplündert wurde, möglicherweise kurz nach der Bestattung, oder die Mumie nie dort platziert wurde.",
                nl: "De lege sarcofaag, ontbrekende deksel en Al-Ma'mun's gedwongen binnenkomst in de 9e eeuw waarbij niets werd gevonden, suggereren dat de grafkamer in de oudheid werd geplunderd, mogelijk kort na de begrafenis, of de mummie nooit daar werd geplaatst."
            }
        },
        {
            question: {
                en: "What astronomical alignment exists for the Queen's Chamber southern shaft?",
                es: "¿Qué alineación astronómica existe para el conducto sur de la Cámara de la Reina?",
                de: "Welche astronomische Ausrichtung existiert für den südlichen Schacht der Königinnenkammer?",
                nl: "Welke astronomische uitlijning bestaat er voor de zuidelijke schacht van de Koninginnenkamer?"
            },
            options: [
                { en: "Polaris", es: "Polaris", de: "Polaris", nl: "Polaris" },
                { en: "Sirius", es: "Sirio", de: "Sirius", nl: "Sirius" },
                { en: "The Sun", es: "El Sol", de: "Die Sonne", nl: "De Zon" },
                { en: "Mars", es: "Marte", de: "Mars", nl: "Mars" }
            ],
            correctIndex: 1,
            explanation: {
                en: "The Queen's Chamber southern shaft pointed toward Sirius (Sopdet), the brightest star in the sky, associated with the goddess Isis and the Nile flooding, crucial for Egyptian agriculture and rebirth.",
                es: "El conducto sur de la Cámara de la Reina apuntaba hacia Sirio (Sopdet), la estrella más brillante del cielo, asociada con la diosa Isis y la inundación del Nilo, crucial para la agricultura y el renacimiento egipcio.",
                de: "Der südliche Schacht der Königinnenkammer zeigte auf Sirius (Sopdet), den hellsten Stern am Himmel, verbunden mit der Göttin Isis und der Nilflut, entscheidend für ägyptische Landwirtschaft und Wiedergeburt.",
                nl: "De zuidelijke schacht van de Koninginnenkamer wees naar Sirius (Sopdet), de helderste ster aan de hemel, geassocieerd met de godin Isis en de Nijloverstromingen, cruciaal voor Egyptische landbouw en wedergeboorte."
            }
        },
        {
            question: {
                en: "What is the total estimated weight of the relieving chambers above the King's Chamber?",
                es: "¿Cuál es el peso total estimado de las cámaras de alivio sobre la Cámara del Rey?",
                de: "Was ist das geschätzte Gesamtgewicht der Entlastungskammern über der Königskammer?",
                nl: "Wat is het totale geschatte gewicht van de ontlastingskamers boven de Koningskamer?"
            },
            options: [
                { en: "100 tons", es: "100 toneladas", de: "100 Tonnen", nl: "100 ton" },
                { en: "500 tons", es: "500 toneladas", de: "500 Tonnen", nl: "500 ton" },
                { en: "1,200 tons", es: "1.200 toneladas", de: "1.200 Tonnen", nl: "1.200 ton" },
                { en: "3,000 tons", es: "3.000 toneladas", de: "3.000 Tonnen", nl: "3.000 ton" }
            ],
            correctIndex: 3,
            explanation: {
                en: "The five relieving chambers contain approximately 3,000 tons of granite beams and blocks, designed to distribute the enormous weight above and protect the King's Chamber from collapse.",
                es: "Las cinco cámaras de alivio contienen aproximadamente 3.000 toneladas de vigas y bloques de granito, diseñadas para distribuir el enorme peso arriba y proteger la Cámara del Rey del colapso.",
                de: "Die fünf Entlastungskammern enthalten etwa 3.000 Tonnen Granitbalken und -blöcke, die dazu dienen, das enorme Gewicht darüber zu verteilen und die Königskammer vor dem Einsturz zu schützen.",
                nl: "De vijf ontlastingskamers bevatten ongeveer 3.000 ton granieten balken en blokken, ontworpen om het enorme gewicht erboven te verdelen en de Koningskamer te beschermen tegen instorting."
            }
        }
    ];

    if (typeof module !== 'undefined' && module.exports) {
        module.exports = level9Questions;
    }
})();
