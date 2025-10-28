(function() {
    const level10Questions = [
        {
            question: {
                en: "What is the precise angle of the Grand Gallery's slope?",
                es: "¿Cuál es el ángulo preciso de la pendiente de la Gran Galería?",
                de: "Was ist der genaue Winkel der Neigung der Großen Galerie?",
                nl: "Wat is de precieze hoek van de helling van de Grote Galerij?"
            },
            options: [
                { en: "20 degrees", es: "20 grados", de: "20 Grad", nl: "20 graden" },
                { en: "26°2'30\"", es: "26°2'30\"", de: "26°2'30\"", nl: "26°2'30\"" },
                { en: "35 degrees", es: "35 grados", de: "35 Grad", nl: "35 graden" },
                { en: "45 degrees", es: "45 grados", de: "45 Grad", nl: "45 graden" }
            ],
            correctIndex: 1,
            explanation: {
                en: "The Grand Gallery rises at a precise angle of 26°2'30\", matching exactly the angle of the ascending and descending passages, demonstrating the extraordinary planning and engineering precision.",
                es: "La Gran Galería se eleva en un ángulo preciso de 26°2'30\", coincidiendo exactamente con el ángulo de los pasajes ascendentes y descendentes, demostrando la extraordinaria planificación y precisión de ingeniería.",
                de: "Die Große Galerie steigt in einem präzisen Winkel von 26°2'30\" an, der genau mit dem Winkel der auf- und absteigenden Gänge übereinstimmt und die außergewöhnliche Planung und technische Präzision zeigt.",
                nl: "De Grote Galerij stijgt onder een precieze hoek van 26°2'30\", precies overeenkomend met de hoek van de oplopende en dalende gangen, wat de buitengewone planning en technische precisie aantoont."
            }
        },
        {
            question: {
                en: "What is the exact width of the King's Chamber?",
                es: "¿Cuál es el ancho exacto de la Cámara del Rey?",
                de: "Was ist die genaue Breite der Königskammer?",
                nl: "Wat is de exacte breedte van de Koningskamer?"
            },
            options: [
                { en: "10 royal cubits (5.236 meters)", es: "10 codos reales (5,236 metros)", de: "10 königliche Ellen (5,236 Meter)", nl: "10 koninklijke ellen (5,236 meter)" },
                { en: "15 royal cubits", es: "15 codos reales", de: "15 königliche Ellen", nl: "15 koninklijke ellen" },
                { en: "20 royal cubits", es: "20 codos reales", de: "20 königliche Ellen", nl: "20 koninklijke ellen" },
                { en: "25 royal cubits", es: "25 codos reales", de: "25 königliche Ellen", nl: "25 koninklijke ellen" }
            ],
            correctIndex: 0,
            explanation: {
                en: "The King's Chamber measures exactly 10 royal cubits (5.236 m) wide, 20 cubits (10.472 m) long, and 11.18 cubits high, demonstrating a precise 1:2 length-to-width ratio.",
                es: "La Cámara del Rey mide exactamente 10 codos reales (5,236 m) de ancho, 20 codos (10,472 m) de largo y 11,18 codos de alto, demostrando una proporción precisa de 1:2 de longitud a ancho.",
                de: "Die Königskammer misst genau 10 königliche Ellen (5,236 m) breit, 20 Ellen (10,472 m) lang und 11,18 Ellen hoch und zeigt ein präzises 1:2-Verhältnis von Länge zu Breite.",
                nl: "De Koningskamer meet precies 10 koninklijke ellen (5,236 m) breed, 20 ellen (10,472 m) lang en 11,18 ellen hoog, wat een precieze 1:2 lengte-tot-breedte verhouding aantoont."
            }
        },
        {
            question: {
                en: "What is the estimated weight of the heaviest granite beam in the King's Chamber ceiling?",
                es: "¿Cuál es el peso estimado de la viga de granito más pesada en el techo de la Cámara del Rey?",
                de: "Was ist das geschätzte Gewicht des schwersten Granitbalkens in der Decke der Königskammer?",
                nl: "Wat is het geschatte gewicht van de zwaarste granieten balk in het plafond van de Koningskamer?"
            },
            options: [
                { en: "10 tons", es: "10 toneladas", de: "10 Tonnen", nl: "10 ton" },
                { en: "25 tons", es: "25 toneladas", de: "25 Tonnen", nl: "25 ton" },
                { en: "50 tons", es: "50 toneladas", de: "50 Tonnen", nl: "50 ton" },
                { en: "70 tons", es: "70 toneladas", de: "70 Tonnen", nl: "70 ton" }
            ],
            correctIndex: 2,
            explanation: {
                en: "The heaviest granite beams in the King's Chamber ceiling weigh approximately 50 tons each, transported from Aswan quarries 800 km away and lifted to a height of about 70 meters.",
                es: "Las vigas de granito más pesadas en el techo de la Cámara del Rey pesan aproximadamente 50 toneladas cada una, transportadas desde las canteras de Asuán a 800 km de distancia y elevadas a una altura de aproximadamente 70 metros.",
                de: "Die schwersten Granitbalken in der Decke der Königskammer wiegen jeweils etwa 50 Tonnen, wurden von Assuan-Steinbrüchen 800 km entfernt transportiert und auf eine Höhe von etwa 70 Metern gehoben.",
                nl: "De zwaarste granieten balken in het plafond van de Koningskamer wegen elk ongeveer 50 ton, getransporteerd vanuit Aswan-steengroeven 800 km ver weg en getild tot een hoogte van ongeveer 70 meter."
            }
        },
        {
            question: {
                en: "What is the diagonal length of the Great Pyramid's base?",
                es: "¿Cuál es la longitud diagonal de la base de la Gran Pirámide?",
                de: "Was ist die diagonale Länge der Basis der Großen Pyramide?",
                nl: "Wat is de diagonale lengte van de basis van de Grote Piramide?"
            },
            options: [
                { en: "280 meters", es: "280 metros", de: "280 Meter", nl: "280 meter" },
                { en: "325.7 meters", es: "325,7 metros", de: "325,7 Meter", nl: "325,7 meter" },
                { en: "400 meters", es: "400 metros", de: "400 Meter", nl: "400 meter" },
                { en: "500 meters", es: "500 metros", de: "500 Meter", nl: "500 meter" }
            ],
            correctIndex: 1,
            explanation: {
                en: "Using the Pythagorean theorem with sides of 230.4 meters, the diagonal of the Great Pyramid's base is approximately 325.7 meters (230.4 × √2).",
                es: "Usando el teorema de Pitágoras con lados de 230,4 metros, la diagonal de la base de la Gran Pirámide es aproximadamente 325,7 metros (230,4 × √2).",
                de: "Mit dem Satz des Pythagoras mit Seiten von 230,4 Metern beträgt die Diagonale der Basis der Großen Pyramide etwa 325,7 Meter (230,4 × √2).",
                nl: "Met gebruik van de stelling van Pythagoras met zijden van 230,4 meter, is de diagonaal van de basis van de Grote Piramide ongeveer 325,7 meter (230,4 × √2)."
            }
        },
        {
            question: {
                en: "What is the apothem (slant height) of the Great Pyramid?",
                es: "¿Cuál es el apotema (altura inclinada) de la Gran Pirámide?",
                de: "Was ist das Apothem (schräge Höhe) der Großen Pyramide?",
                nl: "Wat is de apothema (schuine hoogte) van de Grote Piramide?"
            },
            options: [
                { en: "150 meters", es: "150 metros", de: "150 Meter", nl: "150 meter" },
                { en: "186.4 meters", es: "186,4 metros", de: "186,4 Meter", nl: "186,4 meter" },
                { en: "200 meters", es: "200 metros", de: "200 Meter", nl: "200 meter" },
                { en: "220 meters", es: "220 metros", de: "220 Meter", nl: "220 meter" }
            ],
            correctIndex: 1,
            explanation: {
                en: "The apothem (slant height from base center to apex along a face) of the Great Pyramid is approximately 186.4 meters, calculated using the height (146.5m) and half-base (115.2m).",
                es: "El apotema (altura inclinada desde el centro de la base hasta el vértice a lo largo de una cara) de la Gran Pirámide es aproximadamente 186,4 metros, calculado usando la altura (146,5 m) y media base (115,2 m).",
                de: "Das Apothem (schräge Höhe vom Basiszentrum zur Spitze entlang einer Fläche) der Großen Pyramide beträgt etwa 186,4 Meter, berechnet mit der Höhe (146,5 m) und halben Basis (115,2 m).",
                nl: "De apothema (schuine hoogte van het centrum van de basis naar de top langs een vlak) van de Grote Piramide is ongeveer 186,4 meter, berekend met de hoogte (146,5 m) en halve basis (115,2 m)."
            }
        },
        {
            question: {
                en: "What is the volume of one of the three granite plugs blocking the ascending passage?",
                es: "¿Cuál es el volumen de uno de los tres tapones de granito que bloquean el pasaje ascendente?",
                de: "Was ist das Volumen eines der drei Granitstopfen, die den aufsteigenden Gang blockieren?",
                nl: "Wat is het volume van een van de drie granieten pluggen die de oplopende gang blokkeren?"
            },
            options: [
                { en: "1 cubic meter", es: "1 metro cúbico", de: "1 Kubikmeter", nl: "1 kubieke meter" },
                { en: "2.8 cubic meters", es: "2,8 metros cúbicos", de: "2,8 Kubikmeter", nl: "2,8 kubieke meter" },
                { en: "5 cubic meters", es: "5 metros cúbicos", de: "5 Kubikmeter", nl: "5 kubieke meter" },
                { en: "10 cubic meters", es: "10 metros cúbicos", de: "10 Kubikmeter", nl: "10 kubieke meter" }
            ],
            correctIndex: 1,
            explanation: {
                en: "Each granite plug measures approximately 1.05m × 1.05m × 2.5m, giving a volume of about 2.8 cubic meters and weighing roughly 7 tons, making them virtually impossible to remove from inside.",
                es: "Cada tapón de granito mide aproximadamente 1,05 m × 1,05 m × 2,5 m, dando un volumen de aproximadamente 2,8 metros cúbicos y pesando aproximadamente 7 toneladas, haciéndolos virtualmente imposibles de remover desde dentro.",
                de: "Jeder Granitstopfen misst etwa 1,05 m × 1,05 m × 2,5 m, was ein Volumen von etwa 2,8 Kubikmetern ergibt und etwa 7 Tonnen wiegt, was sie praktisch unmöglich von innen zu entfernen macht.",
                nl: "Elke granieten plug meet ongeveer 1,05 m × 1,05 m × 2,5 m, wat een volume geeft van ongeveer 2,8 kubieke meter en weegt ongeveer 7 ton, waardoor ze praktisch onmogelijk van binnenuit te verwijderen zijn."
            }
        },
        {
            question: {
                en: "What is the cross-sectional area of the descending passage?",
                es: "¿Cuál es el área de la sección transversal del pasaje descendente?",
                de: "Was ist die Querschnittsfläche des absteigenden Gangs?",
                nl: "Wat is de dwarsdoorsnede-oppervlakte van de dalende gang?"
            },
            options: [
                { en: "0.5 square meters", es: "0,5 metros cuadrados", de: "0,5 Quadratmeter", nl: "0,5 vierkante meter" },
                { en: "1.1 square meters", es: "1,1 metros cuadrados", de: "1,1 Quadratmeter", nl: "1,1 vierkante meter" },
                { en: "2 square meters", es: "2 metros cuadrados", de: "2 Quadratmeter", nl: "2 vierkante meter" },
                { en: "3 square meters", es: "3 metros cuadrados", de: "3 Quadratmeter", nl: "3 vierkante meter" }
            ],
            correctIndex: 1,
            explanation: {
                en: "The descending passage measures approximately 1.05m × 1.05m in cross-section, giving an area of about 1.1 square meters, requiring visitors to stoop or crawl through it.",
                es: "El pasaje descendente mide aproximadamente 1,05 m × 1,05 m en sección transversal, dando un área de aproximadamente 1,1 metros cuadrados, requiriendo que los visitantes se agachen o gateen a través de él.",
                de: "Der absteigende Gang misst im Querschnitt etwa 1,05 m × 1,05 m, was eine Fläche von etwa 1,1 Quadratmetern ergibt, so dass Besucher sich bücken oder kriechen müssen.",
                nl: "De dalende gang meet ongeveer 1,05 m × 1,05 m in doorsnede, wat een oppervlakte geeft van ongeveer 1,1 vierkante meter, waardoor bezoekers moeten bukken of kruipen om erdoorheen te gaan."
            }
        },
        {
            question: {
                en: "What is the theoretical maximum number of people who could fit inside all the pyramid's chambers simultaneously?",
                es: "¿Cuál es el número máximo teórico de personas que podrían caber dentro de todas las cámaras de la pirámide simultáneamente?",
                de: "Was ist die theoretische maximale Anzahl von Personen, die gleichzeitig in alle Kammern der Pyramide passen könnten?",
                nl: "Wat is het theoretische maximale aantal mensen dat tegelijkertijd in alle kamers van de piramide zou passen?"
            },
            options: [
                { en: "50 people", es: "50 personas", de: "50 Personen", nl: "50 mensen" },
                { en: "100 people", es: "100 personas", de: "100 Personen", nl: "100 mensen" },
                { en: "200 people", es: "200 personas", de: "200 Personen", nl: "200 mensen" },
                { en: "500 people", es: "500 personas", de: "500 Personen", nl: "500 mensen" }
            ],
            correctIndex: 0,
            explanation: {
                en: "Given the limited space in the King's Chamber (52.6 m²), Queen's Chamber (25.3 m²), and Subterranean Chamber (81 m²), approximately 50-60 people maximum could fit in all chambers simultaneously.",
                es: "Dado el espacio limitado en la Cámara del Rey (52,6 m²), Cámara de la Reina (25,3 m²) y Cámara Subterránea (81 m²), aproximadamente 50-60 personas máximo podrían caber en todas las cámaras simultáneamente.",
                de: "Angesichts des begrenzten Raums in der Königskammer (52,6 m²), Königinnenkammer (25,3 m²) und unterirdischen Kammer (81 m²) könnten maximal etwa 50-60 Personen gleichzeitig in alle Kammern passen.",
                nl: "Gezien de beperkte ruimte in de Koningskamer (52,6 m²), Koninginnenkamer (25,3 m²) en Ondergrondse Kamer (81 m²), zouden ongeveer 50-60 mensen maximaal tegelijkertijd in alle kamers passen."
            }
        },
        {
            question: {
                en: "What percentage of the pyramid's mass is actually accessible interior space?",
                es: "¿Qué porcentaje de la masa de la pirámide es en realidad espacio interior accesible?",
                de: "Welcher Prozentsatz der Masse der Pyramide ist tatsächlich zugänglicher Innenraum?",
                nl: "Welk percentage van de massa van de piramide is daadwerkelijk toegankelijke binnenruimte?"
            },
            options: [
                { en: "Less than 1%", es: "Menos del 1%", de: "Weniger als 1%", nl: "Minder dan 1%" },
                { en: "5%", es: "5%", de: "5%", nl: "5%" },
                { en: "10%", es: "10%", de: "10%", nl: "10%" },
                { en: "25%", es: "25%", de: "25%", nl: "25%" }
            ],
            correctIndex: 0,
            explanation: {
                en: "The total accessible interior volume (passages and chambers) is approximately 1,400 cubic meters out of 2.6 million cubic meters total, representing less than 0.06% of the pyramid's volume.",
                es: "El volumen interior accesible total (pasajes y cámaras) es aproximadamente 1.400 metros cúbicos de 2,6 millones de metros cúbicos en total, representando menos del 0,06% del volumen de la pirámide.",
                de: "Das gesamte zugängliche Innenvolumen (Gänge und Kammern) beträgt etwa 1.400 Kubikmeter von insgesamt 2,6 Millionen Kubikmetern, was weniger als 0,06% des Pyramidenvolumens darstellt.",
                nl: "Het totale toegankelijke binnenvolume (gangen en kamers) is ongeveer 1.400 kubieke meter van in totaal 2,6 miljoen kubieke meter, wat minder dan 0,06% van het volume van de piramide vertegenwoordigt."
            }
        },
        {
            question: {
                en: "What is the surface area of one face of the Great Pyramid?",
                es: "¿Cuál es el área de superficie de una cara de la Gran Pirámide?",
                de: "Was ist die Oberfläche einer Seite der Großen Pyramide?",
                nl: "Wat is het oppervlak van één zijde van de Grote Piramide?"
            },
            options: [
                { en: "15,000 m²", es: "15.000 m²", de: "15.000 m²", nl: "15.000 m²" },
                { en: "21,470 m²", es: "21.470 m²", de: "21.470 m²", nl: "21.470 m²" },
                { en: "30,000 m²", es: "30.000 m²", de: "30.000 m²", nl: "30.000 m²" },
                { en: "40,000 m²", es: "40.000 m²", de: "40.000 m²", nl: "40.000 m²" }
            ],
            correctIndex: 1,
            explanation: {
                en: "Each triangular face has an area of approximately 21,470 square meters (base 230.4m × apothem 186.4m ÷ 2), giving a total surface area of about 85,900 m² for all four faces.",
                es: "Cada cara triangular tiene un área de aproximadamente 21.470 metros cuadrados (base 230,4 m × apotema 186,4 m ÷ 2), dando un área de superficie total de aproximadamente 85.900 m² para las cuatro caras.",
                de: "Jede dreieckige Seite hat eine Fläche von etwa 21.470 Quadratmetern (Basis 230,4 m × Apothem 186,4 m ÷ 2), was eine Gesamtoberfläche von etwa 85.900 m² für alle vier Seiten ergibt.",
                nl: "Elke driehoekige zijde heeft een oppervlak van ongeveer 21.470 vierkante meter (basis 230,4 m × apothema 186,4 m ÷ 2), wat een totaal oppervlak geeft van ongeveer 85.900 m² voor alle vier de zijden."
            }
        },
        {
            question: {
                en: "How many original Tura limestone casing stones covered the Great Pyramid?",
                es: "¿Cuántas piedras de revestimiento de piedra caliza de Tura originales cubrían la Gran Pirámide?",
                de: "Wie viele ursprüngliche Tura-Kalkstein-Verkleidungssteine bedeckten die Große Pyramide?",
                nl: "Hoeveel originele Tura-kalksteen bekledingsstenen bedekten de Grote Piramide?"
            },
            options: [
                { en: "10,000", es: "10.000", de: "10.000", nl: "10.000" },
                { en: "25,000", es: "25.000", de: "25.000", nl: "25.000" },
                { en: "67,000", es: "67.000", de: "67.000", nl: "67.000" },
                { en: "100,000", es: "100.000", de: "100.000", nl: "100.000" }
            ],
            correctIndex: 2,
            explanation: {
                en: "Approximately 67,000 smooth Tura limestone casing stones, each weighing 2-3 tons, originally covered the pyramid's exterior, most stripped away for Cairo building projects after earthquakes.",
                es: "Aproximadamente 67.000 piedras de revestimiento de piedra caliza de Tura lisas, cada una pesando 2-3 toneladas, cubrían originalmente el exterior de la pirámide, la mayoría retiradas para proyectos de construcción de El Cairo después de terremotos.",
                de: "Etwa 67.000 glatte Tura-Kalkstein-Verkleidungssteine, jeder 2-3 Tonnen schwer, bedeckten ursprünglich die Außenseite der Pyramide, die meisten wurden nach Erdbeben für Kairoer Bauprojekte entfernt.",
                nl: "Ongeveer 67.000 gladde Tura-kalksteen bekledingsstenen, elk met een gewicht van 2-3 ton, bedekten oorspronkelijk de buitenkant van de piramide, de meeste verwijderd voor Caïro-bouwprojecten na aardbevingen."
            }
        },
        {
            question: {
                en: "What is the average weight of each core block in the Great Pyramid?",
                es: "¿Cuál es el peso promedio de cada bloque del núcleo en la Gran Pirámide?",
                de: "Was ist das durchschnittliche Gewicht jedes Kernblocks in der Großen Pyramide?",
                nl: "Wat is het gemiddelde gewicht van elk kernblok in de Grote Piramide?"
            },
            options: [
                { en: "500 kg", es: "500 kg", de: "500 kg", nl: "500 kg" },
                { en: "1.5 tons", es: "1,5 toneladas", de: "1,5 Tonnen", nl: "1,5 ton" },
                { en: "2.5 tons", es: "2,5 toneladas", de: "2,5 Tonnen", nl: "2,5 ton" },
                { en: "5 tons", es: "5 toneladas", de: "5 Tonnen", nl: "5 ton" }
            ],
            correctIndex: 2,
            explanation: {
                en: "The average weight of the approximately 2.3 million limestone core blocks is about 2.5 tons, though they range from 1 to 15 tons, with larger blocks at the base and smaller ones higher up.",
                es: "El peso promedio de los aproximadamente 2,3 millones de bloques de núcleo de piedra caliza es de aproximadamente 2,5 toneladas, aunque varían de 1 a 15 toneladas, con bloques más grandes en la base y más pequeños más arriba.",
                de: "Das durchschnittliche Gewicht der etwa 2,3 Millionen Kalkstein-Kernblöcke beträgt etwa 2,5 Tonnen, obwohl sie von 1 bis 15 Tonnen reichen, mit größeren Blöcken an der Basis und kleineren weiter oben.",
                nl: "Het gemiddelde gewicht van de ongeveer 2,3 miljoen kalksteen kernblokken is ongeveer 2,5 ton, hoewel ze variëren van 1 tot 15 ton, met grotere blokken aan de basis en kleinere hoger."
            }
        },
        {
            question: {
                en: "What is the estimated number of stone blocks per course (layer) at the pyramid's base?",
                es: "¿Cuál es el número estimado de bloques de piedra por curso (capa) en la base de la pirámide?",
                de: "Was ist die geschätzte Anzahl von Steinblöcken pro Schicht an der Basis der Pyramide?",
                nl: "Wat is het geschatte aantal stenen blokken per laag bij de basis van de piramide?"
            },
            options: [
                { en: "500", es: "500", de: "500", nl: "500" },
                { en: "1,200", es: "1.200", de: "1.200", nl: "1.200" },
                { en: "2,300", es: "2.300", de: "2.300", nl: "2.300" },
                { en: "5,000", es: "5.000", de: "5.000", nl: "5.000" }
            ],
            correctIndex: 2,
            explanation: {
                en: "At the base, each course contained approximately 2,300 blocks arranged in a perimeter. Higher courses had progressively fewer blocks as the pyramid narrowed toward the apex.",
                es: "En la base, cada curso contenía aproximadamente 2.300 bloques dispuestos en un perímetro. Los cursos superiores tenían progresivamente menos bloques a medida que la pirámide se estrechaba hacia el vértice.",
                de: "An der Basis enthielt jede Schicht etwa 2.300 Blöcke, die in einem Umfang angeordnet waren. Höhere Schichten hatten zunehmend weniger Blöcke, je mehr sich die Pyramide zur Spitze hin verjüngte.",
                nl: "Bij de basis bevatte elke laag ongeveer 2.300 blokken gerangschikt in een omtrek. Hogere lagen hadden geleidelijk minder blokken naarmate de piramide zich naar de top versmalde."
            }
        },
        {
            question: {
                en: "What is the estimated tolerances between adjacent casing stones' joints?",
                es: "¿Cuáles son las tolerancias estimadas entre las juntas de piedras de revestimiento adyacentes?",
                de: "Was sind die geschätzten Toleranzen zwischen den Fugen angrenzender Verkleidungssteine?",
                nl: "Wat zijn de geschatte toleranties tussen aangrenzende bekledingsstenen voegen?"
            },
            options: [
                { en: "5-10 millimeters", es: "5-10 milímetros", de: "5-10 Millimeter", nl: "5-10 millimeter" },
                { en: "0.5 millimeters", es: "0,5 milímetros", de: "0,5 Millimeter", nl: "0,5 millimeter" },
                { en: "1 centimeter", es: "1 centímetro", de: "1 Zentimeter", nl: "1 centimeter" },
                { en: "2 centimeters", es: "2 centímetros", de: "2 Zentimeter", nl: "2 centimeter" }
            ],
            correctIndex: 1,
            explanation: {
                en: "The joints between casing stones were cut with extraordinary precision, typically 0.5mm or less, so tight that even a razor blade cannot fit between them, achieved using fine saws and abrasives.",
                es: "Las juntas entre las piedras de revestimiento se cortaron con extraordinaria precisión, típicamente 0,5 mm o menos, tan apretadas que ni siquiera una hoja de afeitar puede caber entre ellas, logrado usando sierras finas y abrasivos.",
                de: "Die Fugen zwischen Verkleidungssteinen wurden mit außergewöhnlicher Präzision geschnitten, typischerweise 0,5 mm oder weniger, so eng, dass nicht einmal eine Rasierklinge dazwischen passt, erreicht mit feinen Sägen und Schleifmitteln.",
                nl: "De voegen tussen bekledingsstenen werden gesneden met buitengewone precisie, typisch 0,5 mm of minder, zo krap dat zelfs een scheermesje er niet tussen past, bereikt met fijne zagen en schuurmiddelen."
            }
        },
        {
            question: {
                en: "How many total stone courses (layers) make up the Great Pyramid?",
                es: "¿Cuántos cursos de piedra (capas) en total componen la Gran Pirámide?",
                de: "Wie viele Steinschichten bilden insgesamt die Große Pyramide?",
                nl: "Hoeveel totale stenen lagen vormen de Grote Piramide?"
            },
            options: [
                { en: "100", es: "100", de: "100", nl: "100" },
                { en: "150", es: "150", de: "150", nl: "150" },
                { en: "203", es: "203", de: "203", nl: "203" },
                { en: "300", es: "300", de: "300", nl: "300" }
            ],
            correctIndex: 2,
            explanation: {
                en: "The Great Pyramid comprises 203 courses of stone blocks, with the lowest course averaging 1.5 meters in height and upper courses becoming progressively thinner.",
                es: "La Gran Pirámide comprende 203 cursos de bloques de piedra, con el curso más bajo promediando 1,5 metros de altura y los cursos superiores volviéndose progresivamente más delgados.",
                de: "Die Große Pyramide besteht aus 203 Schichten von Steinblöcken, wobei die unterste Schicht durchschnittlich 1,5 Meter hoch ist und die oberen Schichten zunehmend dünner werden.",
                nl: "De Grote Piramide bestaat uit 203 lagen stenen blokken, waarbij de laagste laag gemiddeld 1,5 meter hoog is en de bovenste lagen geleidelijk dunner worden."
            }
        },
        {
            question: {
                en: "What is the estimated angle of the northern shaft from the Queen's Chamber?",
                es: "¿Cuál es el ángulo estimado del conducto norte desde la Cámara de la Reina?",
                de: "Was ist der geschätzte Winkel des nördlichen Schachts von der Königinnenkammer?",
                nl: "Wat is de geschatte hoek van de noordelijke schacht vanuit de Koninginnenkamer?"
            },
            options: [
                { en: "30 degrees", es: "30 grados", de: "30 Grad", nl: "30 graden" },
                { en: "37°28'", es: "37°28'", de: "37°28'", nl: "37°28'" },
                { en: "45 degrees", es: "45 grados", de: "45 Grad", nl: "45 graden" },
                { en: "51 degrees", es: "51 grados", de: "51 Grad", nl: "51 graden" }
            ],
            correctIndex: 1,
            explanation: {
                en: "The northern shaft from the Queen's Chamber rises at an angle of 37°28', historically pointing toward the circumpolar stars, while the southern shaft rises at 39°30' toward Sirius.",
                es: "El conducto norte desde la Cámara de la Reina se eleva en un ángulo de 37°28', históricamente apuntando hacia las estrellas circumpolares, mientras que el conducto sur se eleva a 39°30' hacia Sirio.",
                de: "Der nördliche Schacht von der Königinnenkammer steigt in einem Winkel von 37°28' an, historisch auf die zirkumpolaren Sterne zeigend, während der südliche Schacht bei 39°30' auf Sirius zeigt.",
                nl: "De noordelijke schacht vanuit de Koninginnenkamer stijgt onder een hoek van 37°28', historisch wijzend naar de circumpolaire sterren, terwijl de zuidelijke schacht stijgt op 39°30' naar Sirius."
            }
        },
        {
            question: {
                en: "What is the ratio of the pyramid's height to half its base perimeter?",
                es: "¿Cuál es la relación de la altura de la pirámide con la mitad de su perímetro base?",
                de: "Was ist das Verhältnis der Höhe der Pyramide zur Hälfte ihres Basisumfangs?",
                nl: "Wat is de verhouding van de hoogte van de piramide tot de helft van zijn basisomtrek?"
            },
            options: [
                { en: "1:2", es: "1:2", de: "1:2", nl: "1:2" },
                { en: "1:π", es: "1:π", de: "1:π", nl: "1:π" },
                { en: "1:√2", es: "1:√2", de: "1:√2", nl: "1:√2" },
                { en: "1:φ", es: "1:φ", de: "1:φ", nl: "1:φ" }
            ],
            correctIndex: 1,
            explanation: {
                en: "The height (146.5m) to half the base perimeter (460.8m) ratio equals approximately 1:π (1:3.1416), though scholars debate whether this was intentional or coincidental in the design.",
                es: "La relación de altura (146,5 m) a la mitad del perímetro base (460,8 m) es igual a aproximadamente 1:π (1:3,1416), aunque los académicos debaten si esto fue intencional o coincidental en el diseño.",
                de: "Das Verhältnis von Höhe (146,5 m) zur Hälfte des Basisumfangs (460,8 m) entspricht etwa 1:π (1:3,1416), obwohl Gelehrte darüber debattieren, ob dies im Design beabsichtigt oder zufällig war.",
                nl: "De verhouding van hoogte (146,5 m) tot de helft van de basisomtrek (460,8 m) is ongeveer gelijk aan 1:π (1:3,1416), hoewel geleerden debatteren of dit opzettelijk of toevallig was in het ontwerp."
            }
        },
        {
            question: {
                en: "What is the estimated precision of the pyramid's corner angles to 90 degrees?",
                es: "¿Cuál es la precisión estimada de los ángulos de las esquinas de la pirámide a 90 grados?",
                de: "Was ist die geschätzte Genauigkeit der Eckwinkel der Pyramide zu 90 Grad?",
                nl: "Wat is de geschatte precisie van de hoekhoeken van de piramide tot 90 graden?"
            },
            options: [
                { en: "Within 5 degrees", es: "Dentro de 5 grados", de: "Innerhalb von 5 Grad", nl: "Binnen 5 graden" },
                { en: "Within 1 degree", es: "Dentro de 1 grado", de: "Innerhalb von 1 Grad", nl: "Binnen 1 graad" },
                { en: "Within 3 arcminutes", es: "Dentro de 3 minutos de arco", de: "Innerhalb von 3 Bogenminuten", nl: "Binnen 3 boogminuten" },
                { en: "Within 30 arcminutes", es: "Dentro de 30 minutos de arco", de: "Innerhalb von 30 Bogenminuten", nl: "Binnen 30 boogminuten" }
            ],
            correctIndex: 2,
            explanation: {
                en: "The four corners of the Great Pyramid's base deviate from perfect 90-degree angles by an average of only 3 arcminutes (0.05 degrees), demonstrating extraordinary surveying accuracy.",
                es: "Las cuatro esquinas de la base de la Gran Pirámide se desvían de los ángulos perfectos de 90 grados por un promedio de solo 3 minutos de arco (0,05 grados), demostrando extraordinaria precisión de topografía.",
                de: "Die vier Ecken der Basis der Großen Pyramide weichen von perfekten 90-Grad-Winkeln um durchschnittlich nur 3 Bogenminuten (0,05 Grad) ab, was außergewöhnliche Vermessungsgenauigkeit zeigt.",
                nl: "De vier hoeken van de basis van de Grote Piramide wijken af van perfecte 90-graden hoeken met gemiddeld slechts 3 boogminuten (0,05 graden), wat buitengewone landmeetkundige nauwkeurigheid aantoont."
            }
        },
        {
            question: {
                en: "What is the total length of all internal passages in the Great Pyramid?",
                es: "¿Cuál es la longitud total de todos los pasajes internos en la Gran Pirámide?",
                de: "Was ist die Gesamtlänge aller internen Gänge in der Großen Pyramide?",
                nl: "Wat is de totale lengte van alle interne gangen in de Grote Piramide?"
            },
            options: [
                { en: "50 meters", es: "50 metros", de: "50 Meter", nl: "50 meter" },
                { en: "125 meters", es: "125 metros", de: "125 Meter", nl: "125 meter" },
                { en: "215 meters", es: "215 metros", de: "215 Meter", nl: "215 meter" },
                { en: "400 meters", es: "400 metros", de: "400 Meter", nl: "400 meter" }
            ],
            correctIndex: 2,
            explanation: {
                en: "The total length of all passages (descending, ascending, Grand Gallery, horizontal passages, and shafts) is approximately 215 meters, representing a complex internal architecture within the massive structure.",
                es: "La longitud total de todos los pasajes (descendentes, ascendentes, Gran Galería, pasajes horizontales y conductos) es de aproximadamente 215 metros, representando una arquitectura interna compleja dentro de la estructura masiva.",
                de: "Die Gesamtlänge aller Gänge (absteigend, aufsteigend, Große Galerie, horizontale Gänge und Schächte) beträgt etwa 215 Meter, was eine komplexe interne Architektur innerhalb der massiven Struktur darstellt.",
                nl: "De totale lengte van alle gangen (dalend, oplopend, Grote Galerij, horizontale gangen en schachten) is ongeveer 215 meter, wat een complexe interne architectuur binnen de massieve structuur vertegenwoordigt."
            }
        },
        {
            question: {
                en: "What is the estimated mortar gap thickness between pyramid blocks?",
                es: "¿Cuál es el espesor estimado del espacio de mortero entre los bloques de la pirámide?",
                de: "Was ist die geschätzte Dicke der Mörtelfuge zwischen Pyramidenblöcken?",
                nl: "Wat is de geschatte dikte van de mortelvoeg tussen piramideblokken?"
            },
            options: [
                { en: "5 millimeters", es: "5 milímetros", de: "5 Millimeter", nl: "5 millimeter" },
                { en: "2 millimeters", es: "2 milímetros", de: "2 Millimeter", nl: "2 millimeter" },
                { en: "1 centimeter", es: "1 centímetro", de: "1 Zentimeter", nl: "1 centimeter" },
                { en: "3 centimeters", es: "3 centímetros", de: "3 Zentimeter", nl: "3 centimeter" }
            ],
            correctIndex: 1,
            explanation: {
                en: "The gypsum mortar between core blocks averages about 2mm thick, serving more as a lubricant for positioning than as adhesive, with the massive weight providing structural integrity.",
                es: "El mortero de yeso entre los bloques del núcleo tiene un promedio de aproximadamente 2 mm de espesor, sirviendo más como lubricante para el posicionamiento que como adhesivo, con el peso masivo proporcionando integridad estructural.",
                de: "Der Gipsmörtel zwischen Kernblöcken ist durchschnittlich etwa 2 mm dick und dient eher als Gleitmittel zur Positionierung als als Klebstoff, wobei das massive Gewicht die strukturelle Integrität liefert.",
                nl: "De gipsmortel tussen kernblokken is gemiddeld ongeveer 2 mm dik en dient meer als smeermiddel voor positionering dan als lijm, waarbij het massieve gewicht structurele integriteit biedt."
            }
        }
    ];

    if (typeof module !== 'undefined' && module.exports) {
        module.exports = level10Questions;
    }
})();
