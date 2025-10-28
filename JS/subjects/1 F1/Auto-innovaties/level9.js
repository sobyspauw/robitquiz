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
