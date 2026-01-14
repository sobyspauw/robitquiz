(function() {
    const level9Questions = [
        {
            question: {
                en: "What are the three main components of a tire?",
                es: "¿Cuáles son los tres componentes principales de un neumático?",
                de: "Was sind die drei Hauptkomponenten eines Reifens?",
                nl: "Wat zijn de drie belangrijkste componenten van een band?"
            },
            options: ["Rubber, air, rim", "Tread, carcass, sidewall", "Inner, outer, middle", "Top, bottom, side"],
            correct: 1,
            explanation: {
                en: "A tire consists of the tread (contact surface), carcass (internal structure), and sidewall (side support structure).",
                es: "Un neumático consiste en la banda de rodadura (superficie de contacto), carcasa (estructura interna) y pared lateral.",
                de: "Ein Reifen besteht aus Lauffläche (Kontaktfläche), Karkasse (Innenstruktur) und Seitenwand (Seitenstützstruktur).",
                nl: "Een band bestaat uit het loopvlak (contactoppervlak), karkas (interne structuur) en zijwand (zijsteunstructuur)."
            }
        },
        {
            question: {
                en: "What does Pirelli's C1-C5 compound range represent?",
                es: "¿Qué representa el rango de compuestos C1-C5 de Pirelli?",
                de: "Was repräsentiert Pirellis C1-C5-Mischungsbereich?",
                nl: "Wat vertegenwoordigt Pirelli's C1-C5 compound bereik?"
            },
            options: ["Color codes", "Hardness levels from hardest (C1) to softest (C5)", "Size categories", "Temperature ratings"],
            correct: 1,
            explanation: {
                en: "C1-C5 represents compound hardness: C1 is hardest/most durable, C5 is softest/most grip but least durable.",
                es: "C1-C5 representa dureza del compuesto: C1 es más duro/durable, C5 es más blando/más agarre pero menos durable.",
                de: "C1-C5 repräsentiert Mischungshärte: C1 ist härteste/haltbarste, C5 ist weichste/griffigste aber am wenigsten haltbar.",
                nl: "C1-C5 vertegenwoordigt compound hardheid: C1 is hardst/meest duurzaam, C5 is zachtst/meeste grip maar minst duurzaam."
            }
        },
        {
            question: {
                en: "What is thermal degradation in tires?",
                es: "¿Qué es la degradación térmica en neumáticos?",
                de: "Was ist thermische Degradation bei Reifen?",
                nl: "Wat is thermische degradatie in banden?"
            },
            options: ["Tire cooling", "Loss of grip due to excessive heat breaking down compound", "Tire warming", "Tire pressure changes"],
            correct: 1,
            explanation: {
                en: "Thermal degradation occurs when excessive heat chemically breaks down the tire compound, permanently reducing grip.",
                es: "La degradación térmica ocurre cuando calor excesivo descompone químicamente el compuesto, reduciendo agarre permanentemente.",
                de: "Thermische Degradation tritt auf, wenn übermäßige Hitze die Reifenmischung chemisch zersetzt und Grip dauerhaft reduziert.",
                nl: "Thermische degradatie treedt op wanneer overmatige hitte de bandcompound chemisch afbreekt, wat grip permanent vermindert."
            }
        },
        {
            question: {
                en: "What is graining on a tire?",
                es: "¿Qué es el graining en un neumático?",
                de: "Was ist Graining bei einem Reifen?",
                nl: "Wat is graining op een band?"
            },
            options: ["Smooth wear", "Small pieces of rubber tearing from tread surface", "Tire inflation", "Sidewall damage"],
            correct: 1,
            explanation: {
                en: "Graining occurs when small pieces of rubber tear from the tread surface, typically when tires are too cold or compound is too soft.",
                es: "El graining ocurre cuando pequeños pedazos de goma se desprenden de la superficie, típicamente cuando están muy fríos.",
                de: "Graining tritt auf, wenn kleine Gummistücke von der Lauffläche abreißen, typisch bei zu kalten Reifen.",
                nl: "Graining treedt op wanneer kleine stukjes rubber van het loopvlak scheuren, typisch wanneer banden te koud zijn of compound te zacht is."
            }
        },
        {
            question: {
                en: "What is blistering on a tire?",
                es: "¿Qué es el blistering en un neumático?",
                de: "Was ist Blistering bei einem Reifen?",
                nl: "Wat is blistering op een band?"
            },
            options: ["Surface scratches", "Overheating causing pockets of air/gas under tread surface", "Tire mounting issue", "Sidewall bulge"],
            correct: 1,
            explanation: {
                en: "Blistering occurs when overheating creates pockets of trapped air or gases under the tread surface, causing bubbles.",
                es: "El blistering ocurre cuando sobrecalentamiento crea bolsas de aire o gases bajo la superficie, causando burbujas.",
                de: "Blistering entsteht durch Überhitzung, die Luft- oder Gastaschen unter der Lauffläche erzeugt.",
                nl: "Blistering treedt op wanneer oververhitting zakken van ingesloten lucht of gassen onder het loopvlak creëert, wat bellen veroorzaakt."
            }
        },
        {
            question: {
                en: "What is blanking phenomenon in tires?",
                es: "¿Qué es el fenómeno de blanking en neumáticos?",
                de: "Was ist das Blanking-Phänomen bei Reifen?",
                nl: "Wat is het blanking-fenomeen in banden?"
            },
            options: ["Tire warming", "Temporary loss of grip when tire surface becomes too smooth/glazed", "Tire pressure drop", "Sidewall flex"],
            correct: 1,
            explanation: {
                en: "Blanking is temporary loss of grip when the tire surface becomes over-polished or glazed, typically from sliding or spinning.",
                es: "Blanking es pérdida temporal de agarre cuando la superficie se vuelve muy pulida o vidriada, típicamente por deslizamiento.",
                de: "Blanking ist temporärer Gripverlust, wenn die Reifenoberfläche zu glatt oder glasiert wird durch Rutschen oder Durchdrehen.",
                nl: "Blanking is tijdelijk gripverlies wanneer het bandoppervlak te glad of geglazuurd wordt, typisch door slippen of doordraaien."
            }
        },
        {
            question: {
                en: "Why is tire pressure monitoring important?",
                es: "¿Por qué es importante el monitoreo de presión de neumáticos?",
                de: "Warum ist Reifendrucküberwachung wichtig?",
                nl: "Waarom is bandenspanningsmonitoring belangrijk?"
            },
            options: ["For aesthetics", "Pressure affects contact patch, temperature, and performance", "Legal requirement only", "Weight distribution"],
            correct: 1,
            explanation: {
                en: "Tire pressure critically affects contact patch size, tire temperature, wear rate, and overall grip performance.",
                es: "La presión afecta críticamente el tamaño del parche de contacto, temperatura, desgaste y rendimiento general de agarre.",
                de: "Reifendruck beeinflusst kritisch Kontaktflächengröße, Temperatur, Verschleiß und Grip-Performance.",
                nl: "Bandenspanning beïnvloedt kritisch de grootte van de contactpatch, temperatuur, slijtage en algemene gripprestaties."
            }
        },
        {
            question: {
                en: "What effect does negative camber have on tire wear?",
                es: "¿Qué efecto tiene el camber negativo en el desgaste de neumáticos?",
                de: "Welchen Effekt hat negativer Sturz auf den Reifenverschleiß?",
                nl: "Welk effect heeft negatieve camber op bandenslijtage?"
            },
            options: ["Even wear", "More wear on inside edge", "More wear on outside edge", "No effect"],
            correct: 1,
            explanation: {
                en: "Negative camber (top of tire tilted inward) causes more wear on the inside edge of the tire.",
                es: "El camber negativo (parte superior inclinada hacia adentro) causa más desgaste en el borde interior del neumático.",
                de: "Negativer Sturz (Reifenoberseite nach innen geneigt) verursacht mehr Verschleiß an der Innenkante.",
                nl: "Negatieve camber (bovenkant band naar binnen gekanteld) veroorzaakt meer slijtage aan de binnenkant van de band."
            }
        },
        {
            question: {
                en: "What is the carcass of a tire?",
                es: "¿Qué es la carcasa de un neumático?",
                de: "Was ist die Karkasse eines Reifens?",
                nl: "Wat is het karkas van een band?"
            },
            options: ["Outer rubber only", "Internal structural framework with cords/plies", "Rim mounting area", "Tread pattern"],
            correct: 1,
            explanation: {
                en: "The carcass is the internal structural framework made of textile or steel cords embedded in rubber, providing strength.",
                es: "La carcasa es el marco estructural interno hecho de cordones textiles o de acero incrustados en goma, proporcionando resistencia.",
                de: "Die Karkasse ist das innere Strukturgerüst aus Textil- oder Stahlcorden in Gummi, das Festigkeit bietet.",
                nl: "Het karkas is het interne structurele raamwerk gemaakt van textiel- of staalkoorden ingebed in rubber, wat sterkte biedt."
            }
        },
        {
            question: {
                en: "Why do F1 tires have different compounds for different tracks?",
                es: "¿Por qué los neumáticos de F1 tienen diferentes compuestos para diferentes pistas?",
                de: "Warum haben F1-Reifen für verschiedene Strecken unterschiedliche Mischungen?",
                nl: "Waarom hebben F1-banden verschillende compounds voor verschillende circuits?"
            },
            options: ["Marketing reasons", "Track characteristics require different hardness/durability balance", "Random selection", "Cost savings"],
            correct: 1,
            explanation: {
                en: "Smooth, low-abrasion tracks need softer compounds; rough, high-abrasion tracks need harder compounds for optimal performance.",
                es: "Pistas lisas y de baja abrasión necesitan compuestos más blandos; pistas rugosas necesitan compuestos más duros.",
                de: "Glatte Strecken brauchen weichere Mischungen; raue, abrasive Strecken härtere Mischungen für optimale Performance.",
                nl: "Gladde circuits met lage slijtage hebben zachtere compounds nodig; ruwe circuits hebben hardere compounds nodig voor optimale prestaties."
            }
        },
        {
            question: {
                en: "What temperature range do F1 slick tires operate best in?",
                es: "¿En qué rango de temperatura operan mejor los neumáticos slick de F1?",
                de: "In welchem Temperaturbereich arbeiten F1-Slick-Reifen am besten?",
                nl: "In welk temperatuurbereik presteren F1 slicks het beste?"
            },
            options: ["20-40°C", "60-80°C", "100-130°C", "150-200°C"],
            correct: 2,
            explanation: {
                en: "F1 slick tires operate optimally in the 100-130°C range, where the compound provides maximum grip.",
                es: "Los slicks de F1 operan óptimamente en el rango 100-130°C, donde el compuesto proporciona máximo agarre.",
                de: "F1-Slick-Reifen arbeiten optimal im Bereich 100-130°C, wo die Mischung maximalen Grip bietet.",
                nl: "F1 slicks presteren optimaal in het bereik 100-130°C, waar de compound maximale grip biedt."
            }
        },
        {
            question: {
                en: "What causes the difference between graining and blistering?",
                es: "¿Qué causa la diferencia entre graining y blistering?",
                de: "Was verursacht den Unterschied zwischen Graining und Blistering?",
                nl: "Wat veroorzaakt het verschil tussen graining en blistering?"
            },
            options: ["No real difference", "Graining: too cold/mechanical; Blistering: too hot/thermal", "Graining is worse", "Track surface only"],
            correct: 1,
            explanation: {
                en: "Graining is mechanical tearing from insufficient heat; blistering is thermal damage from excessive heat creating gas pockets.",
                es: "Graining es desgarro mecánico por calor insuficiente; blistering es daño térmico por calor excesivo creando bolsas de gas.",
                de: "Graining ist mechanisches Abreißen durch zu wenig Hitze; Blistering ist thermischer Schaden durch zu viel Hitze.",
                nl: "Graining is mechanisch scheuren door onvoldoende warmte; blistering is thermische schade door overmatige warmte die gaszakken creëert."
            }
        },
        {
            question: {
                en: "What is the purpose of tire blankets' maximum temperature limit?",
                es: "¿Cuál es el propósito del límite de temperatura máxima de las mantas para neumáticos?",
                de: "Was ist der Zweck der maximalen Temperaturgrenze für Reifendecken?",
                nl: "Wat is het doel van de maximale temperatuurlimiet van bandenwarmers?"
            },
            options: ["Save energy", "Prevent teams from over-heating tires for unfair advantage", "Protect blankets", "Reduce costs"],
            correct: 1,
            explanation: {
                en: "The FIA limits blanket temperatures to prevent teams from pre-heating tires excessively for competitive advantage.",
                es: "La FIA limita temperaturas de mantas para prevenir que equipos precalienten excesivamente para ventaja competitiva.",
                de: "Die FIA begrenzt Deckentemperaturen, um übermäßiges Vorheizen für Wettbewerbsvorteile zu verhindern.",
                nl: "De FIA beperkt deken-temperaturen om te voorkomen dat teams banden overmatig voorverwarmen voor concurrentievoordeel."
            }
        },
        {
            question: {
                en: "Why does camber help cornering performance?",
                es: "¿Por qué el camber ayuda al rendimiento en curvas?",
                de: "Warum hilft Sturz der Kurvenperformance?",
                nl: "Waarom helpt camber de bochtenperformance?"
            },
            options: ["It doesn't help", "Maximizes contact patch during cornering when tire leans", "Reduces weight", "Improves aesthetics"],
            correct: 1,
            explanation: {
                en: "Negative camber compensates for body roll, maximizing the tire's contact patch when the car leans in corners.",
                es: "El camber negativo compensa el balanceo del cuerpo, maximizando el parche de contacto cuando el coche se inclina en curvas.",
                de: "Negativer Sturz kompensiert Wankbewegung und maximiert Kontaktfläche bei Kurvenneigung.",
                nl: "Negatieve camber compenseert voor carrosseriekanteling, wat de contactpatch maximaliseert wanneer de auto in bochten leunt."
            }
        },
        {
            question: {
                en: "What is the sidewall's primary function?",
                es: "¿Cuál es la función principal de la pared lateral?",
                de: "Was ist die Hauptfunktion der Seitenwand?",
                nl: "Wat is de primaire functie van de zijwand?"
            },
            options: ["Decoration", "Connect tread to rim and provide lateral support", "Cooling", "Aerodynamics"],
            correct: 1,
            explanation: {
                en: "The sidewall connects the tread to the rim and provides lateral support, affecting handling and ride characteristics.",
                es: "La pared lateral conecta la banda de rodadura al rin y proporciona soporte lateral, afectando manejo y características.",
                de: "Die Seitenwand verbindet Lauffläche mit Felge und bietet seitliche Unterstützung für Handling und Fahreigenschaften.",
                nl: "De zijwand verbindt het loopvlak met de velg en biedt laterale ondersteuning, wat handling en rijkarakteristieken beïnvloedt."
            }
        },
        {
            question: {
                en: "How does tire pressure affect contact patch?",
                es: "¿Cómo afecta la presión del neumático al parche de contacto?",
                de: "Wie beeinflusst Reifendruck die Kontaktfläche?",
                nl: "Hoe beïnvloedt bandenspanning de contactpatch?"
            },
            options: ["No effect", "Higher pressure = smaller patch; Lower pressure = larger patch", "Higher pressure = larger patch", "Only affects temperature"],
            correct: 1,
            explanation: {
                en: "Higher pressure reduces contact patch size; lower pressure increases it, affecting grip, wear, and temperature distribution.",
                es: "Mayor presión reduce tamaño del parche; menor presión lo aumenta, afectando agarre, desgaste y distribución de temperatura.",
                de: "Höherer Druck reduziert Kontaktfläche; niedrigerer Druck vergrößert sie und beeinflusst Grip, Verschleiß und Temperatur.",
                nl: "Hogere druk vermindert contactpatch grootte; lagere druk vergroot deze, wat grip, slijtage en temperatuurverdeling beïnvloedt."
            }
        },
        {
            question: {
                en: "What happens during thermal degradation at molecular level?",
                es: "¿Qué sucede durante la degradación térmica a nivel molecular?",
                de: "Was passiert bei thermischer Degradation auf molekularer Ebene?",
                nl: "Wat gebeurt er tijdens thermische degradatie op moleculair niveau?"
            },
            options: ["Nothing", "Polymer chains break down, losing elasticity permanently", "Rubber melts", "Rubber hardens temporarily"],
            correct: 1,
            explanation: {
                en: "Excessive heat breaks polymer chains in the rubber compound, causing permanent loss of elasticity and grip.",
                es: "El calor excesivo rompe cadenas de polímeros en el compuesto de goma, causando pérdida permanente de elasticidad y agarre.",
                de: "Übermäßige Hitze bricht Polymerketten im Gummi und verursacht dauerhaften Verlust von Elastizität und Grip.",
                nl: "Overmatige warmte breekt polymeerketens in de rubbercompound af, wat permanente verlies van elasticiteit en grip veroorzaakt."
            }
        },
        {
            question: {
                en: "Why are wet tires treaded?",
                es: "¿Por qué los neumáticos de lluvia tienen dibujo?",
                de: "Warum haben Regenreifen ein Profil?",
                nl: "Waarom hebben regenbanden profiel?"
            },
            options: ["Aesthetics", "Evacuate water to maintain contact with track surface", "Reduce weight", "Increase durability"],
            correct: 1,
            explanation: {
                en: "Tread grooves channel water away from the contact patch, preventing aquaplaning and maintaining grip on wet surfaces.",
                es: "Las ranuras del dibujo canalizan agua lejos del parche de contacto, previniendo aquaplaning y manteniendo agarre.",
                de: "Profilrillen leiten Wasser von der Kontaktfläche ab, verhindern Aquaplaning und erhalten Grip auf nassen Oberflächen.",
                nl: "Profielgroeven leiden water weg van de contactpatch, wat aquaplaning voorkomt en grip op natte oppervlakken behoudt."
            }
        },
        {
            question: {
                en: "How much water can a wet tire evacuate per second at racing speed?",
                es: "¿Cuánta agua puede evacuar un neumático de lluvia por segundo a velocidad de carrera?",
                de: "Wie viel Wasser kann ein Regenreifen pro Sekunde bei Renngeschwindigkeit ableiten?",
                nl: "Hoeveel water kan een regenband per seconde evacueren bij racesnelheid?"
            },
            options: ["1 liter", "15 liters", "30-65 liters", "100 liters"],
            correct: 2,
            explanation: {
                en: "A single F1 wet tire can evacuate 30-65 liters of water per second at racing speeds through its tread pattern.",
                es: "Un solo neumático de lluvia de F1 puede evacuar 30-65 litros de agua por segundo a velocidades de carrera.",
                de: "Ein einzelner F1-Regenreifen kann bei Renngeschwindigkeit 30-65 Liter Wasser pro Sekunde durch sein Profil ableiten.",
                nl: "Een enkele F1 regenband kan 30-65 liter water per seconde evacueren bij racesnelheid door zijn profielpatroon."
            }
        },
        {
            question: {
                en: "What is the relationship between camber and tire temperature distribution?",
                es: "¿Cuál es la relación entre camber y distribución de temperatura del neumático?",
                de: "Was ist die Beziehung zwischen Sturz und Reifentemperaturverteilung?",
                nl: "Wat is de relatie tussen camber en bandentemperatuurverdeling?"
            },
            options: ["No relationship", "Camber affects which part of tire works harder, changing temperature distribution", "Only affects pressure", "Only affects wear"],
            correct: 1,
            explanation: {
                en: "Camber angle determines which part of the tire does more work, directly affecting temperature distribution across the tread.",
                es: "El ángulo de camber determina qué parte del neumático trabaja más, afectando directamente distribución de temperatura.",
                de: "Sturzwinkel bestimmt, welcher Reifenteil mehr arbeitet und beeinflusst direkt Temperaturverteilung über die Lauffläche.",
                nl: "Camberhoek bepaalt welk deel van de band harder werkt, wat direct de temperatuurverdeling over het loopvlak beïnvloedt."
            }
        },
        {
            question: {
                en: "What is the typical tread depth of F1 wet tires?",
                es: "¿Cuál es la profundidad típica del dibujo de los neumáticos de lluvia de F1?",
                de: "Was ist die typische Profiltiefe von F1-Regenreifen?",
                nl: "Wat is de typische profieldiepte van F1 regenbanden?"
            },
            options: ["2mm", "5mm", "10mm", "15mm"],
            correct: 2,
            explanation: {
                en: "F1 wet tires have approximately 10mm of tread depth to evacuate large amounts of water effectively.",
                es: "Los neumáticos de lluvia de F1 tienen aproximadamente 10mm de profundidad para evacuar grandes cantidades de agua.",
                de: "F1-Regenreifen haben etwa 10mm Profiltiefe, um große Wassermengen effektiv abzuleiten.",
                nl: "F1 regenbanden hebben ongeveer 10mm profieldiepte om grote hoeveelheden water effectief te evacueren."
            }
        },
        {
            question: {
                en: "What causes 'marbling' on the racing line?",
                es: "¿Qué causa el 'marbling' en la línea de carrera?",
                de: "Was verursacht 'Marbling' auf der Ideallinie?",
                nl: "Wat veroorzaakt 'marbling' op de racinglijn?"
            },
            options: ["Track paint", "Accumulated small rubber pieces torn from tires", "Oil spills", "Tire compound residue"],
            correct: 1,
            explanation: {
                en: "Marbling consists of small rubber pieces (graining debris) that accumulate off the racing line, reducing grip.",
                es: "El marbling consiste en pequeños pedazos de goma (residuos de graining) que se acumulan fuera de la línea de carrera.",
                de: "Marbling besteht aus kleinen Gummistücken (Graining-Rückstände), die sich neben der Ideallinie ansammeln.",
                nl: "Marbling bestaat uit kleine rubberstukjes (graining-afval) die zich buiten de racinglijn ophopen, wat grip vermindert."
            }
        },
        {
            question: {
                en: "What is the cliff phenomenon in tire degradation?",
                es: "¿Qué es el fenómeno cliff en la degradación de neumáticos?",
                de: "Was ist das Cliff-Phänomen bei Reifenverschleiß?",
                nl: "Wat is het cliff-fenomeen bij bandendegradatie?"
            },
            options: ["Gradual wear", "Sudden rapid loss of grip after reaching critical wear point", "Linear degradation", "Temperature drop"],
            correct: 1,
            explanation: {
                en: "The cliff is a sudden, dramatic loss of performance when tires reach critical wear, rather than gradual degradation.",
                es: "El cliff es una pérdida súbita y dramática de rendimiento cuando los neumáticos alcanzan desgaste crítico.",
                de: "Der Cliff ist ein plötzlicher, dramatischer Leistungsabfall bei kritischem Verschleiß statt gradueller Degradation.",
                nl: "De cliff is een plotseling, dramatisch prestatieverlies wanneer banden kritische slijtage bereiken, in plaats van geleidelijke degradatie."
            }
        },
        {
            question: {
                en: "What is the purpose of the tire tread's 'shoulder' area?",
                es: "¿Cuál es el propósito del área del 'hombro' de la banda de rodadura?",
                de: "Was ist der Zweck des 'Schulter'-Bereichs der Lauffläche?",
                nl: "Wat is het doel van het 'schouder'-gebied van het loopvlak?"
            },
            options: ["Decoration", "Carries most cornering loads and lateral forces", "Weight reduction", "Temperature management only"],
            correct: 1,
            explanation: {
                en: "The tire shoulder carries the majority of cornering loads and lateral forces, making it critical for grip in corners.",
                es: "El hombro del neumático lleva la mayoría de cargas en curvas y fuerzas laterales, siendo crítico para agarre.",
                de: "Die Reifenschulter trägt die meisten Kurvenkräfte und Seitenkräfte und ist kritisch für Kurvengrip.",
                nl: "De bandschouder draagt de meeste bochtenbelastingen en laterale krachten, wat cruciaal is voor grip in bochten."
            }
        },
        {
            question: {
                en: "How does track temperature affect tire compound selection?",
                es: "¿Cómo afecta la temperatura de la pista a la selección del compuesto de neumáticos?",
                de: "Wie beeinflusst Streckentemperatur die Reifenmischungswahl?",
                nl: "Hoe beïnvloedt circuittemperatuur de keuze van bandencompound?"
            },
            options: ["No effect", "Hotter tracks need harder compounds; cooler tracks need softer compounds", "Opposite relationship", "Only affects pressure"],
            correct: 1,
            explanation: {
                en: "Hotter track temperatures require harder compounds to prevent overheating; cooler tracks need softer compounds to reach operating temperature.",
                es: "Temperaturas de pista más altas requieren compuestos más duros para prevenir sobrecalentamiento.",
                de: "Heißere Streckentemperaturen erfordern härtere Mischungen gegen Überhitzung; kühlere Strecken weichere Mischungen.",
                nl: "Hogere circuittemperaturen vereisen hardere compounds om oververhitting te voorkomen; koelere circuits hebben zachtere compounds nodig."
            }
        },
        {
            question: {
                en: "What is slip angle in tire dynamics?",
                es: "¿Qué es el ángulo de deslizamiento en la dinámica de neumáticos?",
                de: "Was ist der Schräglaufwinkel in der Reifendynamik?",
                nl: "Wat is sliphoek in bandendynamica?"
            },
            options: ["Tire rotation speed", "Difference between tire's heading and actual travel direction", "Camber angle", "Toe angle"],
            correct: 1,
            explanation: {
                en: "Slip angle is the angle between the direction the tire is pointing and the direction it's actually traveling.",
                es: "El ángulo de deslizamiento es el ángulo entre la dirección del neumático y la dirección real de viaje.",
                de: "Schräglaufwinkel ist der Winkel zwischen Reifenrichtung und tatsächlicher Fahrtrichtung.",
                nl: "Sliphoek is de hoek tussen de richting waarin de band wijst en de daadwerkelijke rijrichting."
            }
        },
        {
            question: {
                en: "What role do tire belts play in tire construction?",
                es: "¿Qué papel juegan los cinturones del neumático en su construcción?",
                de: "Welche Rolle spielen Reifengürtel in der Reifenkonstruktion?",
                nl: "Welke rol spelen bandengordels in de bandenconstructie?"
            },
            options: ["Pure decoration", "Stabilize tread area and limit centrifugal expansion at speed", "Improve aesthetics", "Cooling only"],
            correct: 1,
            explanation: {
                en: "Belts stabilize the tread area, prevent excessive centrifugal expansion at high speeds, and improve contact patch uniformity.",
                es: "Los cinturones estabilizan el área de rodadura, previenen expansión centrífuga excesiva a alta velocidad.",
                de: "Gürtel stabilisieren die Lauffläche, verhindern übermäßige Zentrifugalexpansion und verbessern Kontaktflächengleichmäßigkeit.",
                nl: "Gordels stabiliseren het loopvlak gebied, voorkomen overmatige centrifugale expansie bij hoge snelheid en verbeteren contactpatch uniformiteit."
            }
        },
        {
            question: {
                en: "What is hysteresis in tire rubber?",
                es: "¿Qué es la histéresis en la goma del neumático?",
                de: "Was ist Hysterese in Reifengummi?",
                nl: "Wat is hysterese in bandenrubber?"
            },
            options: ["Tire color", "Energy loss from rubber deformation creating grip and heat", "Tire pressure", "Tread pattern"],
            correct: 1,
            explanation: {
                en: "Hysteresis is energy loss from rubber deformation; this energy converts to heat and mechanical grip on the track surface.",
                es: "La histéresis es pérdida de energía por deformación del caucho; esta energía se convierte en calor y agarre mecánico.",
                de: "Hysterese ist Energieverlust durch Gummiverformung; diese Energie wird zu Wärme und mechanischem Grip.",
                nl: "Hysterese is energieverlies door rubbervervorming; deze energie wordt omgezet in warmte en mechanische grip op het circuit."
            }
        },
        {
            question: {
                en: "Why do F1 tires have such low profile sidewalls?",
                es: "¿Por qué los neumáticos de F1 tienen paredes laterales de perfil tan bajo?",
                de: "Warum haben F1-Reifen so niedrige Seitenwände?",
                nl: "Waarom hebben F1-banden zulke lage profiel zijwanden?"
            },
            options: ["Aesthetics only", "Reduce sidewall flex for better response and higher cornering stiffness", "Cost reduction", "Weight savings only"],
            correct: 1,
            explanation: {
                en: "Low profile sidewalls minimize flex, improving steering response and providing higher lateral stiffness for cornering.",
                es: "Las paredes laterales de perfil bajo minimizan flexión, mejorando respuesta de dirección y rigidez lateral en curvas.",
                de: "Niedrige Seitenwände minimieren Flex, verbessern Lenkreaktion und bieten höhere Seitensteifigkeit in Kurven.",
                nl: "Lage profiel zijwanden minimaliseren flexie, wat stuurrespons verbetert en hogere laterale stijfheid biedt voor bochten."
            }
        },
        {
            question: {
                en: "What is the optimal slip ratio for maximum traction during acceleration?",
                es: "¿Cuál es la relación de deslizamiento óptima para máxima tracción durante aceleración?",
                de: "Was ist das optimale Schlupfverhältnis für maximale Traktion bei Beschleunigung?",
                nl: "Wat is de optimale slipverhouding voor maximale tractie tijdens acceleratie?"
            },
            options: ["0% (no slip)", "8-15% slip", "50% slip", "100% slip (wheelspin)"],
            correct: 1,
            explanation: {
                en: "Peak traction occurs at approximately 8-15% slip ratio; below this is inefficient, above causes excessive wheelspin.",
                es: "La tracción pico ocurre aproximadamente a 8-15% de deslizamiento; abajo es ineficiente, arriba causa patinaje excesivo.",
                de: "Maximale Traktion tritt bei etwa 8-15% Schlupf auf; darunter ist ineffizient, darüber verursacht Durchdrehen.",
                nl: "Piek tractie treedt op bij ongeveer 8-15% slip ratio; eronder is inefficiënt, erboven veroorzaakt overmatig doordraaien."
            }
        },
        {
            question: {
                en: "What causes tire vibration or 'standing wave' at very high speeds?",
                es: "¿Qué causa vibración del neumático u 'onda estacionaria' a muy alta velocidad?",
                de: "Was verursacht Reifenvibration oder 'stehende Welle' bei sehr hohen Geschwindigkeiten?",
                nl: "Wat veroorzaakt bandentrillling of 'staande golf' bij zeer hoge snelheden?"
            },
            options: ["Imbalance only", "Centrifugal forces deforming tire faster than rubber can recover", "Track bumps", "Pressure drop"],
            correct: 1,
            explanation: {
                en: "At extreme speeds, centrifugal forces deform the tire faster than rubber can recover, creating a standing wave that can destroy the tire.",
                es: "A velocidades extremas, fuerzas centrífugas deforman el neumático más rápido de lo que el caucho puede recuperarse.",
                de: "Bei Extremgeschwindigkeiten verformen Zentrifugalkräfte den Reifen schneller als Gummi sich erholen kann.",
                nl: "Bij extreme snelheden vervormen centrifugale krachten de band sneller dan rubber kan herstellen, wat een staande golf creëert die de band kan vernietigen."
            }
        },
        {
            question: {
                en: "What is toe angle and how does it affect tire wear?",
                es: "¿Qué es el ángulo de convergencia y cómo afecta el desgaste del neumático?",
                de: "Was ist der Spurwinkel und wie beeinflusst er den Reifenverschleiß?",
                nl: "Wat is toe-hoek en hoe beïnvloedt dit bandenslijtage?"
            },
            options: ["Camber angle", "Angle tires point inward/outward viewed from above; causes scrubbing wear", "Tire pressure", "Sidewall angle"],
            correct: 1,
            explanation: {
                en: "Toe is the angle tires point in/out from above; excessive toe causes scrubbing wear as tires fight each other.",
                es: "La convergencia es el ángulo en que los neumáticos apuntan hacia dentro/fuera; convergencia excesiva causa desgaste por roce.",
                de: "Spur ist der Winkel nach innen/außen von oben; übermäßige Spur verursacht Schleifverschleiß.",
                nl: "Toe is de hoek waarin banden naar binnen/buiten wijzen van bovenaf; overmatige toe veroorzaakt schurende slijtage doordat banden elkaar bestrijden."
            }
        },
        {
            question: {
                en: "What is the purpose of tire stagger in oval racing (not F1)?",
                es: "¿Cuál es el propósito del stagger de neumáticos en carreras ovales (no F1)?",
                de: "Was ist der Zweck von Reifenstaffelung im Oval-Racing (nicht F1)?",
                nl: "Wat is het doel van tire stagger in oval racing (niet F1)?"
            },
            options: ["F1 uses this extensively", "Different diameter left/right tires to help turning in one direction", "Weight distribution", "Aerodynamics"],
            correct: 1,
            explanation: {
                en: "Stagger uses different diameter tires on left vs right to aid constant turning (not used in F1 which turns both directions).",
                es: "El stagger usa neumáticos de diferente diámetro izquierda vs derecha para ayudar giro constante (no usado en F1).",
                de: "Staffelung nutzt unterschiedliche Reifendurchmesser links vs rechts für konstante Kurven (nicht in F1 verwendet).",
                nl: "Stagger gebruikt verschillende diameter banden links vs rechts om constant draaien te helpen (niet gebruikt in F1 die beide richtingen draait)."
            }
        },
        {
            question: {
                en: "How does caster angle affect tire contact patch during steering?",
                es: "¿Cómo afecta el ángulo de caster al parche de contacto durante la dirección?",
                de: "Wie beeinflusst der Nachlaufwinkel die Kontaktfläche beim Lenken?",
                nl: "Hoe beïnvloedt casterhoek de contactpatch tijdens sturen?"
            },
            options: ["No effect", "Caster creates dynamic camber change when steering, affecting contact patch", "Only affects straight line", "Only aesthetic"],
            correct: 1,
            explanation: {
                en: "Caster angle causes dynamic camber changes when steering, optimizing contact patch through corners.",
                es: "El ángulo de caster causa cambios dinámicos de camber al girar, optimizando el parche de contacto en curvas.",
                de: "Nachlaufwinkel verursacht dynamische Sturzänderungen beim Lenken und optimiert Kontaktfläche in Kurven.",
                nl: "Casterhoek veroorzaakt dynamische camberveranderingen tijdens sturen, wat de contactpatch door bochten optimaliseert."
            }
        },
        {
            question: {
                en: "What is the glass transition temperature (Tg) in tire compounds?",
                es: "¿Qué es la temperatura de transición vítrea (Tg) en compuestos de neumáticos?",
                de: "Was ist die Glasübergangstemperatur (Tg) in Reifenmischungen?",
                nl: "Wat is de glasovergangstemperatuur (Tg) in bandencompounds?"
            },
            options: ["Melting point", "Temperature where polymer transitions from hard/glassy to soft/rubbery state", "Boiling point", "Freezing point"],
            correct: 1,
            explanation: {
                en: "Tg is the temperature where tire polymers transition from rigid/glassy to flexible/rubbery, critical for grip activation.",
                es: "Tg es la temperatura donde polímeros del neumático transicionan de rígido/vidrioso a flexible/gomoso, crítico para activación de agarre.",
                de: "Tg ist die Temperatur, wo Reifenpolymere von starr/glasig zu flexibel/gummiartig übergehen, kritisch für Grip-Aktivierung.",
                nl: "Tg is de temperatuur waar bandenpolymeren overgaan van rigide/glasachtig naar flexibel/rubberachtig, cruciaal voor grip-activatie."
            }
        },
        {
            question: {
                en: "Why do F1 teams measure tire tread temperature at three points (inside, middle, outside)?",
                es: "¿Por qué los equipos de F1 miden temperatura de la banda en tres puntos (interior, medio, exterior)?",
                de: "Warum messen F1-Teams Laufflächen-Temperatur an drei Punkten (innen, mitte, außen)?",
                nl: "Waarom meten F1-teams loopvlaktemperatuur op drie punten (binnen, midden, buiten)?"
            },
            options: ["Regulation requirement", "Diagnose suspension setup (camber, pressure, toe) via temperature distribution", "Marketing data", "Random sampling"],
            correct: 1,
            explanation: {
                en: "Three-point temperature measurement reveals suspension setup issues: uneven temps indicate improper camber, pressure, or toe settings.",
                es: "Medición de temperatura en tres puntos revela problemas de configuración de suspensión: temperaturas desiguales indican camber, presión o convergencia incorrectos.",
                de: "Drei-Punkt-Temperaturmessung enthüllt Fahrwerks-Setup-Probleme: ungleiche Temperaturen zeigen falschen Sturz, Druck oder Spur.",
                nl: "Driepunts-temperatuurmeting onthult ophanging setup problemen: ongelijke temperaturen wijzen op verkeerde camber, druk of toe instellingen."
            }
        },
        {
            question: {
                en: "What is tire carcass spring rate and why is it important?",
                es: "¿Qué es la tasa de resorte del carcasa del neumático y por qué es importante?",
                de: "Was ist die Federkonstante der Reifenkarkasse und warum ist sie wichtig?",
                nl: "Wat is het veerconstante van het bandenkarkas en waarom is dit belangrijk?"
            },
            options: ["Irrelevant to setup", "Tire acts as suspension spring; affects ride height, suspension tuning, and handling", "Only affects comfort", "Only marketing term"],
            correct: 1,
            explanation: {
                en: "Tire carcass acts as a spring in the suspension system, affecting ride height, mechanical grip, and overall suspension tuning.",
                es: "El carcasa del neumático actúa como resorte en el sistema de suspensión, afectando altura, agarre mecánico y ajuste general.",
                de: "Reifenkarkasse wirkt als Feder im Fahrwerk, beeinflusst Fahrhöhe, mechanischen Grip und Gesamtabstimmung.",
                nl: "Bandenkarkas werkt als veer in het ophangsysteem, wat rijhoogte, mechanische grip en algehele ophangafstelling beïnvloedt."
            }
        },
        {
            question: {
                en: "What causes tire chunking and how does it differ from graining?",
                es: "¿Qué causa el chunking de neumáticos y en qué se diferencia del graining?",
                de: "Was verursacht Tire Chunking und wie unterscheidet es sich von Graining?",
                nl: "Wat veroorzaakt tire chunking en hoe verschilt dit van graining?"
            },
            options: ["Same as graining", "Chunking is large pieces torn off (severe); graining is small surface pieces (mild)", "Chunking is better", "Only cosmetic difference"],
            correct: 1,
            explanation: {
                en: "Chunking involves large pieces of tread being torn away (severe damage); graining is small surface pieces tearing (less severe).",
                es: "Chunking involucra grandes piezas de banda arrancadas (daño severo); graining son pequeñas piezas superficiales (menos severo).",
                de: "Chunking bedeutet große Laufflächenstücke werden abgerissen (schwer); Graining sind kleine Oberflächenstücke (mild).",
                nl: "Chunking houdt in dat grote stukken loopvlak worden afgescheurd (ernstige schade); graining zijn kleine oppervlaktestukjes (minder ernstig)."
            }
        },
        {
            question: {
                en: "How does tire construction affect 'carcass stiffness' and handling?",
                es: "¿Cómo afecta la construcción del neumático a la 'rigidez del carcasa' y el manejo?",
                de: "Wie beeinflusst Reifenkonstruktion 'Karkassensteifigkeit' und Handling?",
                nl: "Hoe beïnvloedt bandenconstructie 'karkas stijfheid' en handling?"
            },
            options: ["No relationship", "Stiffer carcass gives sharper response but harsher ride; softer gives comfort but vague feel", "Only affects durability", "Only aesthetic"],
            correct: 1,
            explanation: {
                en: "Stiffer carcass construction provides sharper steering response and better feedback but transmits more vibration to chassis.",
                es: "Construcción de carcasa más rígida proporciona respuesta de dirección más aguda pero transmite más vibración al chasis.",
                de: "Steifere Karkassenkonstruktion bietet schärfere Lenkreaktion aber überträgt mehr Vibration zum Chassis.",
                nl: "Stijvere karkas constructie biedt scherpere stuurrespons en betere feedback maar brengt meer vibratie over naar het chassis."
            }
        },
        {
            question: {
                en: "What is the purpose of tire cord angles in the carcass construction?",
                es: "¿Cuál es el propósito de los ángulos de cordón en la construcción del carcasa?",
                de: "Was ist der Zweck der Cord-Winkel in der Karkassenkonstruktion?",
                nl: "Wat is het doel van koordhoeken in de karkas constructie?"
            },
            options: ["Pure aesthetics", "Cord angles determine directional stiffness, handling characteristics, and deformation patterns", "Weight savings only", "Cost reduction"],
            correct: 1,
            explanation: {
                en: "Cord angles in carcass plies determine how the tire deforms under load, affecting lateral vs longitudinal stiffness and handling.",
                es: "Los ángulos de cordón en capas del carcasa determinan cómo se deforma el neumático bajo carga, afectando rigidez y manejo.",
                de: "Cord-Winkel in Karkassenlagen bestimmen Reifenverformung unter Last und beeinflussen laterale vs longitudinale Steifigkeit.",
                nl: "Koordhoeken in karkas lagen bepalen hoe de band vervormt onder belasting, wat laterale vs longitudinale stijfheid en handling beïnvloedt."
            }
        }
    ];

    if (typeof window.questionsByLevel === 'undefined') {
        window.questionsByLevel = {};
    }
    if (typeof window.questionsByLevel['1 F1'] === 'undefined') {
        window.questionsByLevel['1 F1'] = {};
    }
    if (typeof window.questionsByLevel['1 F1']['Auto-innovaties'] === 'undefined') {
        window.questionsByLevel['1 F1']['Auto-innovaties'] = {};
    }
    window.questionsByLevel['1 F1']['Auto-innovaties']['level9'] = level9Questions;
})();
