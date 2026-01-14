// Quiz - Level 5: Drinken - Water (Mineraalwater)
(function() {
  const level5 = {
    name: {
      en: "Mineral Water",
      es: "Agua Mineral",
      de: "Mineralwasser",
      nl: "Mineraalwater"
    },
    questions: [
      {
        question: {
          en: "What is the minimum mineral content required for water to be classified as 'mineral water' in most countries?",
          es: "¿Cuál es el contenido mineral mínimo requerido para que el agua sea clasificada como 'agua mineral' en la mayoría de países?",
          de: "Was ist der minimale Mineralgehalt, der erforderlich ist, damit Wasser in den meisten Ländern als 'Mineralwasser' klassifiziert wird?",
          nl: "Wat is het minimale mineralengehalte dat vereist is om water als 'mineraalwater' te classificeren in de meeste landen?"
        },
        options: [
          { en: "100 mg/L total dissolved solids", es: "100 mg/L de sólidos disueltos totales", de: "100 mg/L gelöste Feststoffe gesamt", nl: "100 mg/L totaal opgeloste stoffen" },
          { en: "250 mg/L total dissolved solids", es: "250 mg/L de sólidos disueltos totales", de: "250 mg/L gelöste Feststoffe gesamt", nl: "250 mg/L totaal opgeloste stoffen" },
          { en: "500 mg/L total dissolved solids", es: "500 mg/L de sólidos disueltos totales", de: "500 mg/L gelöste Feststoffe gesamt", nl: "500 mg/L totaal opgeloste stoffen" },
          { en: "1000 mg/L total dissolved solids", es: "1000 mg/L de sólidos disueltos totales", de: "1000 mg/L gelöste Feststoffe gesamt", nl: "1000 mg/L totaal opgeloste stoffen" }
        ],
        correct: 1,
        explanation: {
          en: "Most international standards require at least 250 mg/L of total dissolved solids for water to be classified as mineral water, ensuring a meaningful mineral content.",
          es: "La mayoría de estándares internacionales requieren al menos 250 mg/L de sólidos disueltos totales para que el agua sea clasificada como agua mineral, asegurando un contenido mineral significativo.",
          de: "Die meisten internationalen Standards erfordern mindestens 250 mg/L gelöste Feststoffe gesamt, damit Wasser als Mineralwasser klassifiziert wird, um einen bedeutsamen Mineralgehalt zu gewährleisten.",
          nl: "De meeste internationale standaarden vereisen ten minste 250 mg/L totaal opgeloste stoffen om water als mineraalwater te classificeren, waardoor een betekenisvol mineralengehalte wordt gegarandeerd."
        }
      },
      {
        question: {
          en: "Which mineral is primarily responsible for the 'hardness' classification in mineral water?",
          es: "¿Qué mineral es principalmente responsable de la clasificación de 'dureza' en el agua mineral?",
          de: "Welches Mineral ist hauptsächlich für die 'Härte'-Klassifizierung von Mineralwasser verantwortlich?",
          nl: "Welk mineraal is hoofdzakelijk verantwoordelijk voor de 'hardheid' classificatie in mineraalwater?"
        },
        options: [
          { en: "Sodium", es: "Sodio", de: "Natrium", nl: "Natrium" },
          { en: "Calcium", es: "Calcio", de: "Kalzium", nl: "Calcium" },
          { en: "Potassium", es: "Potasio", de: "Kalium", nl: "Kalium" },
          { en: "Iron", es: "Hierro", de: "Eisen", nl: "IJzer" }
        ],
        correct: 1,
        explanation: {
          en: "Calcium, along with magnesium, determines water hardness. High calcium content creates 'hard' mineral water, while low calcium results in 'soft' mineral water.",
          es: "El calcio, junto con el magnesio, determina la dureza del agua. El alto contenido de calcio crea agua mineral 'dura', mientras que el bajo calcio resulta en agua mineral 'suave'.",
          de: "Kalzium bestimmt zusammen mit Magnesium die Wasserhärte. Hoher Kalziumgehalt erzeugt 'hartes' Mineralwasser, während niedriger Kalziumgehalt 'weiches' Mineralwasser ergibt.",
          nl: "Calcium bepaalt samen met magnesium de waterhardheid. Een hoog calciumgehalte creëert 'hard' mineraalwater, terwijl laag calcium resulteert in 'zacht' mineraalwater."
        }
      },
      {
        question: {
          en: "What does 'TDS' stand for in mineral water analysis?",
          es: "¿Qué significa 'TDS' en el análisis de agua mineral?",
          de: "Was bedeutet 'TDS' in der Mineralwasseranalyse?",
          nl: "Wat betekent 'TDS' in mineraalwateranalyse?"
        },
        options: [
          { en: "Total Dissolved Solids", es: "Sólidos Disueltos Totales", de: "Gelöste Feststoffe Gesamt", nl: "Totaal Opgeloste Stoffen" },
          { en: "Total Daily Supplements", es: "Suplementos Diarios Totales", de: "Tägliche Nahrungsergänzungen Gesamt", nl: "Totale Dagelijkse Supplementen" },
          { en: "Taste Determination Scale", es: "Escala de Determinación de Sabor", de: "Geschmacksbestimmungsskala", nl: "Smaakbepalingschaal" },
          { en: "Temperature Dependent Solubility", es: "Solubilidad Dependiente de Temperatura", de: "Temperaturabhängige Löslichkeit", nl: "Temperatuurafhankelijke Oplosbaarheid" }
        ],
        correct: 0,
        explanation: {
          en: "TDS stands for Total Dissolved Solids, which measures the combined content of all inorganic and organic substances dissolved in water, expressed in mg/L or ppm.",
          es: "TDS significa Sólidos Disueltos Totales, que mide el contenido combinado de todas las sustancias inorgánicas y orgánicas disueltas en agua, expresado en mg/L o ppm.",
          de: "TDS steht für Gelöste Feststoffe Gesamt, was den kombinierten Gehalt aller anorganischen und organischen Substanzen misst, die in Wasser gelöst sind, ausgedrückt in mg/L oder ppm.",
          nl: "TDS staat voor Totaal Opgeloste Stoffen, wat de gecombineerde inhoud meet van alle anorganische en organische stoffen opgelost in water, uitgedrukt in mg/L of ppm."
        }
      },
      {
        question: {
          en: "Which European region is famous for producing highly mineralized water with therapeutic properties?",
          es: "¿Qué región europea es famosa por producir agua altamente mineralizada con propiedades terapéuticas?",
          de: "Welche europäische Region ist berühmt für die Produktion von hochmineralisiertem Wasser mit therapeutischen Eigenschaften?",
          nl: "Welke Europese regio is beroemd om het produceren van hooggemineraliseerd water met therapeutische eigenschappen?"
        },
        options: [
          { en: "Scottish Highlands", es: "Tierras Altas Escocesas", de: "Schottisches Hochland", nl: "Schotse Hooglanden" },
          { en: "Bavarian Alps", es: "Alpes Bávaros", de: "Bayerische Alpen", nl: "Beierse Alpen" },
          { en: "French Vosges Mountains", es: "Montañas Vosgos Francesas", de: "Französische Vogesen", nl: "Franse Vogezen" },
          { en: "Italian Dolomites", es: "Dolomitas Italianas", de: "Italienische Dolomiten", nl: "Italiaanse Dolomieten" }
        ],
        correct: 2,
        explanation: {
          en: "The French Vosges Mountains are renowned for producing mineral waters like Contrex and Vittel, known for their high mineral content and traditional therapeutic uses.",
          es: "Las Montañas Vosgos Francesas son reconocidas por producir aguas minerales como Contrex y Vittel, conocidas por su alto contenido mineral y usos terapéuticos tradicionales.",
          de: "Die französischen Vogesen sind bekannt für die Produktion von Mineralwässern wie Contrex und Vittel, die für ihren hohen Mineralgehalt und traditionelle therapeutische Anwendungen bekannt sind.",
          nl: "De Franse Vogezen zijn bekend om het produceren van mineraalwaters zoals Contrex en Vittel, bekend om hun hoge mineralengehalte en traditionele therapeutische toepassingen."
        }
      },
      {
        question: {
          en: "What is the primary difference between 'natural mineral water' and 'spring water' according to international standards?",
          es: "¿Cuál es la principal diferencia entre 'agua mineral natural' y 'agua de manantial' según estándares internacionales?",
          de: "Was ist der Hauptunterschied zwischen 'natürlichem Mineralwasser' und 'Quellwasser' nach internationalen Standards?",
          nl: "Wat is het belangrijkste verschil tussen 'natuurlijk mineraalwater' en 'bronwater' volgens internationale standaarden?"
        },
        options: [
          { en: "Source depth requirements", es: "Requisitos de profundidad de fuente", de: "Anforderungen an die Quelltiefe", nl: "Vereisten voor brondiepte" },
          { en: "Consistent mineral composition and proven purity", es: "Composición mineral consistente y pureza comprobada", de: "Konsistente Mineralzusammensetzung und bewiesene Reinheit", nl: "Consistente minerale samenstelling en bewezen zuiverheid" },
          { en: "Treatment processing methods", es: "Métodos de procesamiento de tratamiento", de: "Behandlungsverarbeitungsmethoden", nl: "Behandelingsverwerkingsmethoden" },
          { en: "Geographic origin restrictions", es: "Restricciones de origen geográfico", de: "Geografische Herkunftsbeschränkungen", nl: "Geografische oorsprongsbeperkingen" }
        ],
        correct: 1,
        explanation: {
          en: "Natural mineral water must have a consistent mineral composition from a protected source and proven purity, while spring water only needs to come from a natural spring without composition guarantees.",
          es: "El agua mineral natural debe tener una composición mineral consistente de una fuente protegida y pureza comprobada, mientras que el agua de manantial solo necesita provenir de un manantial natural sin garantías de composición.",
          de: "Natürliches Mineralwasser muss eine konsistente Mineralzusammensetzung aus einer geschützten Quelle und bewiesene Reinheit haben, während Quellwasser nur aus einer natürlichen Quelle stammen muss ohne Zusammensetzungsgarantien.",
          nl: "Natuurlijk mineraalwater moet een consistente minerale samenstelling hebben van een beschermde bron en bewezen zuiverheid, terwijl bronwater alleen uit een natuurlijke bron hoeft te komen zonder samenstellingsgaranties."
        }
      },
      {
        question: {
          en: "Which mineral in water is most associated with cardiovascular health benefits?",
          es: "¿Qué mineral en el agua está más asociado con beneficios para la salud cardiovascular?",
          de: "Welches Mineral im Wasser wird am meisten mit kardiovaskulären Gesundheitsvorteilen in Verbindung gebracht?",
          nl: "Welk mineraal in water wordt het meest geassocieerd met cardiovasculaire gezondheidsvoordelen?"
        },
        options: [
          { en: "Calcium", es: "Calcio", de: "Kalzium", nl: "Calcium" },
          { en: "Magnesium", es: "Magnesio", de: "Magnesium", nl: "Magnesium" },
          { en: "Potassium", es: "Potasio", de: "Kalium", nl: "Kalium" },
          { en: "Sodium", es: "Sodio", de: "Natrium", nl: "Natrium" }
        ],
        correct: 1,
        explanation: {
          en: "Magnesium in mineral water is strongly associated with cardiovascular health benefits, including heart rhythm regulation and blood pressure management.",
          es: "El magnesio en el agua mineral está fuertemente asociado con beneficios para la salud cardiovascular, incluyendo regulación del ritmo cardíaco y manejo de la presión arterial.",
          de: "Magnesium in Mineralwasser wird stark mit kardiovaskulären Gesundheitsvorteilen in Verbindung gebracht, einschließlich Herzrhythmusregulation und Blutdruckmanagement.",
          nl: "Magnesium in mineraalwater wordt sterk geassocieerd met cardiovasculaire gezondheidsvoordelen, inclusief hartritmeregulatie en bloeddrukbeheer."
        }
      },
      {
        question: {
          en: "What is the optimal temperature for serving most mineral waters to preserve taste and mineral absorption?",
          es: "¿Cuál es la temperatura óptima para servir la mayoría de aguas minerales para preservar el sabor y absorción mineral?",
          de: "Was ist die optimale Temperatur zum Servieren der meisten Mineralwässer, um Geschmack und Mineralaufnahme zu bewahren?",
          nl: "Wat is de optimale temperatuur voor het serveren van de meeste mineraalwaters om smaak en mineraalopname te behouden?"
        },
        options: [
          { en: "4-6°C (39-43°F)", es: "4-6°C (39-43°F)", de: "4-6°C (39-43°F)", nl: "4-6°C (39-43°F)" },
          { en: "8-12°C (46-54°F)", es: "8-12°C (46-54°F)", de: "8-12°C (46-54°F)", nl: "8-12°C (46-54°F)" },
          { en: "15-18°C (59-64°F)", es: "15-18°C (59-64°F)", de: "15-18°C (59-64°F)", nl: "15-18°C (59-64°F)" },
          { en: "20-25°C (68-77°F)", es: "20-25°C (68-77°F)", de: "20-25°C (68-77°F)", nl: "20-25°C (68-77°F)" }
        ],
        correct: 1,
        explanation: {
          en: "The optimal serving temperature for mineral water is 8-12°C (46-54°F), which enhances taste perception and ensures optimal mineral bioavailability without being too cold.",
          es: "La temperatura óptima de servir para agua mineral es 8-12°C (46-54°F), que mejora la percepción del sabor y asegura biodisponibilidad mineral óptima sin estar demasiado fría.",
          de: "Die optimale Serviertemperatur für Mineralwasser ist 8-12°C (46-54°F), was die Geschmackswahrnehmung verbessert und optimale Mineralbioverfügbarkeit gewährleistet, ohne zu kalt zu sein.",
          nl: "De optimale serveertemperatuur voor mineraalwater is 8-12°C (46-54°F), wat smaakperceptie verbetert en optimale minerale biobeschikbaarheid waarborgt zonder te koud te zijn."
        }
      },
      {
        question: {
          en: "Which analytical method is most commonly used to determine the exact mineral composition of mineral water?",
          es: "¿Qué método analítico se usa más comúnmente para determinar la composición mineral exacta del agua mineral?",
          de: "Welche Analysemethode wird am häufigsten verwendet, um die genaue Mineralzusammensetzung von Mineralwasser zu bestimmen?",
          nl: "Welke analytische methode wordt het meest gebruikt om de exacte minerale samenstelling van mineraalwater te bepalen?"
        },
        options: [
          { en: "Atomic Absorption Spectroscopy (AAS)", es: "Espectroscopia de Absorción Atómica (AAS)", de: "Atomabsorptionsspektroskopie (AAS)", nl: "Atomaire Absorptie Spectroscopie (AAS)" },
          { en: "Inductively Coupled Plasma (ICP)", es: "Plasma Acoplado Inductivamente (ICP)", de: "Induktiv gekoppeltes Plasma (ICP)", nl: "Inductief Gekoppeld Plasma (ICP)" },
          { en: "High Performance Liquid Chromatography (HPLC)", es: "Cromatografía Líquida de Alta Resolución (HPLC)", de: "Hochleistungsflüssigchromatographie (HPLC)", nl: "Hoge Prestatie Vloeistofchromatografie (HPLC)" },
          { en: "Nuclear Magnetic Resonance (NMR)", es: "Resonancia Magnética Nuclear (RMN)", de: "Kernspinresonanz (NMR)", nl: "Nucleaire Magnetische Resonantie (NMR)" }
        ],
        correct: 1,
        explanation: {
          en: "Inductively Coupled Plasma (ICP) spectroscopy is the gold standard for mineral water analysis, providing precise quantification of multiple minerals simultaneously.",
          es: "La espectroscopia de Plasma Acoplado Inductivamente (ICP) es el estándar de oro para análisis de agua mineral, proporcionando cuantificación precisa de múltiples minerales simultáneamente.",
          de: "Induktiv gekoppelte Plasma (ICP) Spektroskopie ist der Goldstandard für Mineralwasseranalyse und bietet präzise Quantifizierung mehrerer Mineralien gleichzeitig.",
          nl: "Inductief Gekoppeld Plasma (ICP) spectroscopie is de gouden standaard voor mineraalwateranalyse, die precieze kwantificering van meerdere mineralen tegelijkertijd biedt."
        }
      },
      {
        question: {
          en: "What is the significance of 'bicarbonate' in mineral water composition?",
          es: "¿Cuál es la importancia del 'bicarbonato' en la composición del agua mineral?",
          de: "Was ist die Bedeutung von 'Bikarbonat' in der Mineralwasserzusammensetzung?",
          nl: "Wat is de betekenis van 'bicarbonaat' in de samenstelling van mineraalwater?"
        },
        options: [
          { en: "It determines the water's color", es: "Determina el color del agua", de: "Es bestimmt die Farbe des Wassers", nl: "Het bepaalt de kleur van het water" },
          { en: "It affects taste and acts as a natural buffer", es: "Afecta el sabor y actúa como amortiguador natural", de: "Es beeinflusst den Geschmack und wirkt als natürlicher Puffer", nl: "Het beïnvloedt de smaak en werkt als natuurlijke buffer" },
          { en: "It prevents bacterial growth", es: "Previene el crecimiento bacteriano", de: "Es verhindert Bakterienwachstum", nl: "Het voorkomt bacteriegroei" },
          { en: "It increases shelf life", es: "Aumenta la vida útil", de: "Es erhöht die Haltbarkeit", nl: "Het verhoogt de houdbaarheid" }
        ],
        correct: 1,
        explanation: {
          en: "Bicarbonate gives mineral water its characteristic slightly alkaline taste and acts as a natural pH buffer, contributing to the water's stability and mouthfeel.",
          es: "El bicarbonato le da al agua mineral su sabor característico ligeramente alcalino y actúa como amortiguador natural de pH, contribuyendo a la estabilidad y sensación en boca del agua.",
          de: "Bikarbonat verleiht Mineralwasser seinen charakteristischen leicht alkalischen Geschmack und wirkt als natürlicher pH-Puffer, was zur Stabilität und zum Mundgefühl des Wassers beiträgt.",
          nl: "Bicarbonaat geeft mineraalwater zijn karakteristieke licht alkalische smaak en werkt als natuurlijke pH-buffer, wat bijdraagt aan de stabiliteit en mondgevoel van het water."
        }
      },
      {
        question: {
          en: "Which regulation typically governs the production and labeling of mineral water in Europe?",
          es: "¿Qué regulación típicamente gobierna la producción y etiquetado de agua mineral en Europa?",
          de: "Welche Verordnung regelt typischerweise die Produktion und Kennzeichnung von Mineralwasser in Europa?",
          nl: "Welke regelgeving regelt typisch de productie en etikettering van mineraalwater in Europa?"
        },
        options: [
          { en: "EU Directive 2009/54/EC on Natural Mineral Waters", es: "Directiva UE 2009/54/EC sobre Aguas Minerales Naturales", de: "EU-Richtlinie 2009/54/EG über natürliche Mineralwässer", nl: "EU-Richtlijn 2009/54/EG betreffende Natuurlijke Mineraalwaters" },
          { en: "WHO International Health Regulations", es: "Regulaciones Internacionales de Salud de la OMS", de: "WHO Internationale Gesundheitsvorschriften", nl: "WHO Internationale Gezondheidsreglementen" },
          { en: "ISO 9001 Quality Management Standards", es: "Estándares de Gestión de Calidad ISO 9001", de: "ISO 9001 Qualitätsmanagementsystem", nl: "ISO 9001 Kwaliteitsmanagementsystemen" },
          { en: "Codex Alimentarius Food Standards", es: "Estándares Alimentarios del Codex Alimentarius", de: "Codex Alimentarius Lebensmittelstandards", nl: "Codex Alimentarius Voedselstandaarden" }
        ],
        correct: 0,
        explanation: {
          en: "EU Directive 2009/54/EC specifically governs the exploitation and marketing of natural mineral waters in Europe, setting strict standards for quality, labeling, and source protection.",
          es: "La Directiva UE 2009/54/EC específicamente gobierna la explotación y comercialización de aguas minerales naturales en Europa, estableciendo estándares estrictos para calidad, etiquetado y protección de fuentes.",
          de: "Die EU-Richtlinie 2009/54/EG regelt spezifisch die Gewinnung und Vermarktung natürlicher Mineralwässer in Europa und setzt strenge Standards für Qualität, Kennzeichnung und Quellenschutz.",
          nl: "EU-Richtlijn 2009/54/EG regelt specifiek de winning en marketing van natuurlijke mineraalwaters in Europa, met strikte standaarden voor kwaliteit, etikettering en bronbescherming."
        }
      },
      {
        question: {
          en: "What is the primary benefit of calcium in mineral water?",
          es: "¿Cuál es el beneficio principal del calcio en agua mineral?",
          de: "Was ist der Hauptnutzen von Kalzium in Mineralwasser?",
          nl: "Wat is het primaire voordeel van calcium in mineraalwater?"
        },
        options: [
          { en: "Improves taste only", es: "Solo mejora el sabor", de: "Verbessert nur den Geschmack", nl: "Verbetert alleen de smaak" },
          { en: "Supports bone and teeth health", es: "Apoya la salud de huesos y dientes", de: "Unterstützt Knochen- und Zahngesundheit", nl: "Ondersteunt bot- en tandgezondheid" },
          { en: "Increases water temperature", es: "Aumenta la temperatura del agua", de: "Erhöht die Wassertemperatur", nl: "Verhoogt watertemperatuur" },
          { en: "Changes water color", es: "Cambia el color del agua", de: "Ändert die Wasserfarbe", nl: "Verandert waterkleur" }
        ],
        correct: 1,
        explanation: {
          en: "Calcium is essential for building and maintaining strong bones and teeth. Mineral water can be a good source of dietary calcium, with some brands containing 150-500 mg/L.",
          es: "El calcio es esencial para construir y mantener huesos y dientes fuertes. El agua mineral puede ser una buena fuente de calcio dietético, con algunas marcas conteniendo 150-500 mg/L.",
          de: "Kalzium ist wesentlich für den Aufbau und Erhalt starker Knochen und Zähne. Mineralwasser kann eine gute Quelle für Nahrungskalzium sein, wobei einige Marken 150-500 mg/L enthalten.",
          nl: "Calcium is essentieel voor het opbouwen en onderhouden van sterke botten en tanden. Mineraalwater kan een goede bron van voedingscalcium zijn, waarbij sommige merken 150-500 mg/L bevatten."
        }
      },
      {
        question: {
          en: "What does 'TDS' stand for in water quality testing?",
          es: "¿Qué significa 'TDS' en las pruebas de calidad del agua?",
          de: "Was bedeutet 'TDS' bei Wasserqualitätstests?",
          nl: "Wat betekent 'TDS' bij waterkwaliteitstests?"
        },
        options: [
          { en: "Total Drinking Standard", es: "Estándar Total de Bebida", de: "Totaler Trinkstandard", nl: "Totale Drinkstandaard" },
          { en: "Total Dissolved Solids", es: "Sólidos Disueltos Totales", de: "Gelöste Feststoffe Gesamt", nl: "Totaal Opgeloste Stoffen" },
          { en: "Temperature During Storage", es: "Temperatura Durante Almacenamiento", de: "Temperatur Während Lagerung", nl: "Temperatuur Tijdens Opslag" },
          { en: "Tested Disinfection System", es: "Sistema de Desinfección Probado", de: "Getestetes Desinfektionssystem", nl: "Getest Desinfectiesysteem" }
        ],
        correct: 1,
        explanation: {
          en: "TDS (Total Dissolved Solids) measures the total concentration of dissolved substances in water, including minerals, salts, and metals. It's measured in mg/L or ppm (parts per million).",
          es: "TDS (Sólidos Disueltos Totales) mide la concentración total de sustancias disueltas en agua, incluyendo minerales, sales y metales. Se mide en mg/L o ppm (partes por millón).",
          de: "TDS (Gelöste Feststoffe Gesamt) misst die Gesamtkonzentration gelöster Substanzen im Wasser, einschließlich Mineralien, Salze und Metalle. Es wird in mg/L oder ppm (Teile pro Million) gemessen.",
          nl: "TDS (Totaal Opgeloste Stoffen) meet de totale concentratie van opgeloste substanties in water, inclusief mineralen, zouten en metalen. Het wordt gemeten in mg/L of ppm (parts per million)."
        }
      },
      {
        question: {
          en: "What mineral gives some mineral waters a slightly salty taste?",
          es: "¿Qué mineral le da a algunas aguas minerales un sabor ligeramente salado?",
          de: "Welches Mineral verleiht einigen Mineralwässern einen leicht salzigen Geschmack?",
          nl: "Welk mineraal geeft sommige mineraalwaters een licht zoute smaak?"
        },
        options: [
          { en: "Calcium", es: "Calcio", de: "Kalzium", nl: "Calcium" },
          { en: "Magnesium", es: "Magnesio", de: "Magnesium", nl: "Magnesium" },
          { en: "Sodium", es: "Sodio", de: "Natrium", nl: "Natrium" },
          { en: "Potassium", es: "Potasio", de: "Kalium", nl: "Kalium" }
        ],
        correct: 2,
        explanation: {
          en: "Sodium gives water a slightly salty taste. High-sodium mineral waters (>200 mg/L) have a noticeable salty flavor, while low-sodium waters (<20 mg/L) are suitable for low-sodium diets.",
          es: "El sodio le da al agua un sabor ligeramente salado. Las aguas minerales altas en sodio (>200 mg/L) tienen un sabor salado notable, mientras que las aguas bajas en sodio (<20 mg/L) son adecuadas para dietas bajas en sodio.",
          de: "Natrium verleiht Wasser einen leicht salzigen Geschmack. Natriumreiche Mineralwässer (>200 mg/L) haben einen merklichen salzigen Geschmack, während natriumarme Wässer (<20 mg/L) für natriumarme Diäten geeignet sind.",
          nl: "Natrium geeft water een licht zoute smaak. Natriumrijke mineraalwaters (>200 mg/L) hebben een merkbare zoute smaak, terwijl natriumarme waters (<20 mg/L) geschikt zijn voor natriumarme diëten."
        }
      },
      {
        question: {
          en: "What is 'bicarbonate' in mineral water?",
          es: "¿Qué es 'bicarbonato' en agua mineral?",
          de: "Was ist 'Bikarbonat' in Mineralwasser?",
          nl: "Wat is 'bicarbonaat' in mineraalwater?"
        },
        options: [
          { en: "A type of plastic bottle material", es: "Un tipo de material de botella de plástico", de: "Eine Art Plastikflaschenmaterial", nl: "Een soort plastic flesmaterialiaal" },
          { en: "A mineral compound (HCO₃⁻) that neutralizes acidity", es: "Un compuesto mineral (HCO₃⁻) que neutraliza la acidez", de: "Eine Mineralverbindung (HCO₃⁻), die Säure neutralisiert", nl: "Een mineraalverbinding (HCO₃⁻) die zuurgraad neutraliseert" },
          { en: "A carbonation process", es: "Un proceso de carbonatación", de: "Ein Karbonisierungsprozess", nl: "Een carbonatieproces" },
          { en: "A filtration method", es: "Un método de filtración", de: "Eine Filtrationsmethode", nl: "Een filtratiemethode" }
        ],
        correct: 1,
        explanation: {
          en: "Bicarbonate (HCO₃⁻) is a mineral compound found naturally in many mineral waters. It acts as a buffer to neutralize stomach acid and can aid digestion. Waters with >600 mg/L bicarbonate are classified as 'bicarbonated'.",
          es: "El bicarbonato (HCO₃⁻) es un compuesto mineral que se encuentra naturalmente en muchas aguas minerales. Actúa como tampón para neutralizar el ácido estomacal y puede ayudar a la digestión. Aguas con >600 mg/L de bicarbonato se clasifican como 'bicarbonatadas'.",
          de: "Bikarbonat (HCO₃⁻) ist eine Mineralverbindung, die natürlich in vielen Mineralwässern vorkommt. Es wirkt als Puffer zur Neutralisierung von Magensäure und kann die Verdauung unterstützen. Wässer mit >600 mg/L Bikarbonat werden als 'bikarbonathaltig' klassifiziert.",
          nl: "Bicarbonaat (HCO₃⁻) is een mineraalverbinding die natuurlijk voorkomt in veel mineraalwaters. Het werkt als buffer om maagzuur te neutraliseren en kan de spijsvertering ondersteunen. Waters met >600 mg/L bicarbonaat worden geclassificeerd als 'bicarbonaathoudend'."
        }
      },
      {
        question: {
          en: "What is the difference between 'natural mineral water' and 'spring water'?",
          es: "¿Cuál es la diferencia entre 'agua mineral natural' y 'agua de manantial'?",
          de: "Was ist der Unterschied zwischen 'natürlichem Mineralwasser' und 'Quellwasser'?",
          nl: "Wat is het verschil tussen 'natuurlijk mineraalwater' en 'bronwater'?"
        },
        options: [
          { en: "No difference, they are the same", es: "Sin diferencia, son lo mismo", de: "Kein Unterschied, sie sind dasselbe", nl: "Geen verschil, ze zijn hetzelfde" },
          { en: "Natural mineral water must have consistent mineral composition and health benefits", es: "Agua mineral natural debe tener composición mineral consistente y beneficios para salud", de: "Natürliches Mineralwasser muss konsistente Mineralzusammensetzung und Gesundheitsvorteile haben", nl: "Natuurlijk mineraalwater moet consistente mineraalsamenstelling en gezondheidsvoordelen hebben" },
          { en: "Spring water is always carbonated", es: "Agua de manantial siempre está carbonatada", de: "Quellwasser ist immer karbonisiert", nl: "Bronwater is altijd gecarboneerd" },
          { en: "Natural mineral water is artificially enhanced", es: "Agua mineral natural está artificialmente mejorada", de: "Natürliches Mineralwasser ist künstlich angereichert", nl: "Natuurlijk mineraalwater is kunstmatig verrijkt" }
        ],
        correct: 1,
        explanation: {
          en: "Natural mineral water must originate from a protected source, have stable mineral composition, and demonstrate health benefits. Spring water only needs to come from a natural spring without the strict mineral content requirements.",
          es: "El agua mineral natural debe originarse de una fuente protegida, tener composición mineral estable y demostrar beneficios para la salud. El agua de manantial solo necesita provenir de un manantial natural sin requisitos estrictos de contenido mineral.",
          de: "Natürliches Mineralwasser muss aus einer geschützten Quelle stammen, stabile Mineralzusammensetzung haben und Gesundheitsvorteile nachweisen. Quellwasser muss nur aus einer natürlichen Quelle stammen ohne strenge Anforderungen an den Mineralgehalt.",
          nl: "Natuurlijk mineraalwater moet afkomstig zijn van een beschermde bron, stabiele mineraalsamenstelling hebben en gezondheidsvoordelen aantonen. Bronwater hoeft alleen maar van een natuurlijke bron te komen zonder strikte mineralengehalte-eisen."
        }
      },
      {
        question: {
          en: "What does 'low mineral content' mean for mineral water?",
          es: "¿Qué significa 'bajo contenido mineral' para agua mineral?",
          de: "Was bedeutet 'niedriger Mineralgehalt' für Mineralwasser?",
          nl: "Wat betekent 'laag mineralengehalte' voor mineraalwater?"
        },
        options: [
          { en: "Less than 50 mg/L TDS", es: "Menos de 50 mg/L TDS", de: "Weniger als 50 mg/L TDS", nl: "Minder dan 50 mg/L TDS" },
          { en: "Less than 500 mg/L TDS", es: "Menos de 500 mg/L TDS", de: "Weniger als 500 mg/L TDS", nl: "Minder dan 500 mg/L TDS" },
          { en: "Less than 1000 mg/L TDS", es: "Menos de 1000 mg/L TDS", de: "Weniger als 1000 mg/L TDS", nl: "Minder dan 1000 mg/L TDS" },
          { en: "Less than 1500 mg/L TDS", es: "Menos de 1500 mg/L TDS", de: "Weniger als 1500 mg/L TDS", nl: "Minder dan 1500 mg/L TDS" }
        ],
        correct: 1,
        explanation: {
          en: "According to EU regulations, 'low mineral content' or 'oligomineral' water has less than 500 mg/L total dissolved solids. This type is lighter in taste and suitable for low-sodium diets and infant formula preparation.",
          es: "Según regulaciones de la UE, agua de 'bajo contenido mineral' u 'oligomineral' tiene menos de 500 mg/L de sólidos disueltos totales. Este tipo es más ligero en sabor y adecuado para dietas bajas en sodio y preparación de fórmula infantil.",
          de: "Laut EU-Vorschriften hat Wasser mit 'niedrigem Mineralgehalt' oder 'oligomineral' weniger als 500 mg/L gelöste Feststoffe gesamt. Dieser Typ ist leichter im Geschmack und geeignet für natriumarme Diäten und Säuglingsnahrungszubereitung.",
          nl: "Volgens EU-regelgeving heeft water met 'laag mineralengehalte' of 'oligomineraal' minder dan 500 mg/L totaal opgeloste stoffen. Dit type is lichter van smaak en geschikt voor natriumarme diëten en zuigelingenvoedingbereiding."
        }
      },
      {
        question: {
          en: "What is magnesium's role in the body, found in mineral water?",
          es: "¿Cuál es el papel del magnesio en el cuerpo, encontrado en agua mineral?",
          de: "Was ist die Rolle von Magnesium im Körper, das in Mineralwasser gefunden wird?",
          nl: "Wat is de rol van magnesium in het lichaam, gevonden in mineraalwater?"
        },
        options: [
          { en: "Only affects water taste", es: "Solo afecta el sabor del agua", de: "Beeinflusst nur den Wassergeschmack", nl: "Beïnvloedt alleen de watersmaak" },
          { en: "Supports muscle function, nerve transmission, and energy production", es: "Apoya función muscular, transmisión nerviosa y producción de energía", de: "Unterstützt Muskelfunktion, Nervenübertragung und Energieproduktion", nl: "Ondersteunt spierfunctie, zenuwoverdracht en energieproductie" },
          { en: "Increases water alkalinity only", es: "Solo aumenta la alcalinidad del agua", de: "Erhöht nur die Wasseralkalität", nl: "Verhoogt alleen wateralkaliniteit" },
          { en: "Prevents water freezing", es: "Previene congelación del agua", de: "Verhindert Wassergefrieren", nl: "Voorkomt waterbevriezen" }
        ],
        correct: 1,
        explanation: {
          en: "Magnesium is essential for over 300 enzymatic reactions in the body. It supports muscle and nerve function, blood pressure regulation, and energy production. Mineral water can provide 10-100 mg/L of magnesium.",
          es: "El magnesio es esencial para más de 300 reacciones enzimáticas en el cuerpo. Apoya la función muscular y nerviosa, regulación de presión arterial y producción de energía. El agua mineral puede proporcionar 10-100 mg/L de magnesio.",
          de: "Magnesium ist essentiell für über 300 enzymatische Reaktionen im Körper. Es unterstützt Muskel- und Nervenfunktion, Blutdruckregulation und Energieproduktion. Mineralwasser kann 10-100 mg/L Magnesium liefern.",
          nl: "Magnesium is essentieel voor meer dan 300 enzymatische reacties in het lichaam. Het ondersteunt spier- en zenuwfunctie, bloeddrukregulatie en energieproductie. Mineraalwater kan 10-100 mg/L magnesium leveren."
        }
      },
      {
        question: {
          en: "What does 'sulfate' in mineral water indicate?",
          es: "¿Qué indica 'sulfato' en agua mineral?",
          de: "Was zeigt 'Sulfat' in Mineralwasser an?",
          nl: "Wat geeft 'sulfaat' in mineraalwater aan?"
        },
        options: [
          { en: "Water contamination", es: "Contaminación del agua", de: "Wasserverschmutzung", nl: "Waterverontreiniging" },
          { en: "Natural mineral compound (SO₄²⁻) that may aid digestion", es: "Compuesto mineral natural (SO₄²⁻) que puede ayudar a digestión", de: "Natürliche Mineralverbindung (SO₄²⁻), die die Verdauung unterstützen kann", nl: "Natuurlijke mineraalverbinding (SO₄²⁻) die spijsvertering kan helpen" },
          { en: "Artificial additive", es: "Aditivo artificial", de: "Künstlicher Zusatzstoff", nl: "Kunstmatige toevoeging" },
          { en: "Preservation chemical", es: "Químico de conservación", de: "Konservierungschemikalie", nl: "Conserveringschemicalie" }
        ],
        correct: 1,
        explanation: {
          en: "Sulfate (SO₄²⁻) is a naturally occurring mineral compound in some mineral waters. Waters with >200 mg/L sulfate are classified as 'sulfated' and may have laxative effects or aid digestion.",
          es: "El sulfato (SO₄²⁻) es un compuesto mineral que ocurre naturalmente en algunas aguas minerales. Aguas con >200 mg/L de sulfato se clasifican como 'sulfatadas' y pueden tener efectos laxantes o ayudar a la digestión.",
          de: "Sulfat (SO₄²⁻) ist eine natürlich vorkommende Mineralverbindung in einigen Mineralwässern. Wässer mit >200 mg/L Sulfat werden als 'sulfathaltig' klassifiziert und können abführende Wirkung haben oder die Verdauung unterstützen.",
          nl: "Sulfaat (SO₄²⁻) is een natuurlijk voorkomende mineraalverbinding in sommige mineraalwaters. Waters met >200 mg/L sulfaat worden geclassificeerd als 'sulfaathoudend' en kunnen laxerende effecten hebben of de spijsvertering helpen."
        }
      },
      {
        question: {
          en: "What temperature must natural mineral water be bottled at according to EU regulations?",
          es: "¿A qué temperatura debe embotellarse agua mineral natural según regulaciones UE?",
          de: "Bei welcher Temperatur muss natürliches Mineralwasser gemäß EU-Vorschriften abgefüllt werden?",
          nl: "Op welke temperatuur moet natuurlijk mineraalwater gebotteld worden volgens EU-regelgeving?"
        },
        options: [
          { en: "Any temperature is acceptable", es: "Cualquier temperatura es aceptable", de: "Jede Temperatur ist akzeptabel", nl: "Elke temperatuur is acceptabel" },
          { en: "At the source temperature without heating or cooling", es: "A la temperatura de la fuente sin calentar ni enfriar", de: "Bei der Quelltemperatur ohne Erhitzen oder Kühlen", nl: "Op brontemperatuur zonder verwarmen of koelen" },
          { en: "Must be heated to 100°C first", es: "Debe calentarse primero a 100°C", de: "Muss zuerst auf 100°C erhitzt werden", nl: "Moet eerst tot 100°C worden verwarmd" },
          { en: "Must be cooled to 4°C", es: "Debe enfriarse a 4°C", de: "Muss auf 4°C gekühlt werden", nl: "Moet tot 4°C worden gekoeld" }
        ],
        correct: 1,
        explanation: {
          en: "EU regulations require that natural mineral water be bottled at the source temperature without artificial heating or cooling to preserve its natural mineral composition and characteristics.",
          es: "Las regulaciones de la UE requieren que el agua mineral natural se embotelle a la temperatura de la fuente sin calentamiento o enfriamiento artificial para preservar su composición mineral natural y características.",
          de: "EU-Vorschriften erfordern, dass natürliches Mineralwasser bei Quelltemperatur ohne künstliches Erhitzen oder Kühlen abgefüllt wird, um seine natürliche Mineralzusammensetzung und Eigenschaften zu bewahren.",
          nl: "EU-regelgeving vereist dat natuurlijk mineraalwater op brontemperatuur wordt gebotteld zonder kunstmatige verwarming of koeling om de natuurlijke mineraalsamenstelling en kenmerken te behouden."
        }
      },
      {
        question: {
          en: "What is 'silica' in mineral water?",
          es: "¿Qué es 'sílice' en agua mineral?",
          de: "Was ist 'Silizium' in Mineralwasser?",
          nl: "Wat is 'silica' in mineraalwater?"
        },
        options: [
          { en: "A plastic component from bottles", es: "Un componente plástico de botellas", de: "Eine Plastikkomponente aus Flaschen", nl: "Een plastic component van flessen" },
          { en: "A naturally occurring mineral (SiO₂) beneficial for skin, hair, and connective tissue", es: "Un mineral natural (SiO₂) beneficioso para piel, cabello y tejido conectivo", de: "Ein natürlich vorkommendes Mineral (SiO₂), vorteilhaft für Haut, Haare und Bindegewebe", nl: "Een natuurlijk voorkomend mineraal (SiO₂) gunstig voor huid, haar en bindweefsel" },
          { en: "A chemical preservative", es: "Un conservante químico", de: "Ein chemisches Konservierungsmittel", nl: "Een chemisch conserveermiddel" },
          { en: "An artificial flavor enhancer", es: "Un potenciador de sabor artificial", de: "Ein künstlicher Geschmacksverstärker", nl: "Een kunstmatige smaakversterker" }
        ],
        correct: 1,
        explanation: {
          en: "Silica (silicon dioxide, SiO₂) is a naturally occurring mineral in some mineral waters, typically in amounts of 10-50 mg/L. It's beneficial for skin elasticity, hair strength, bone health, and connective tissue formation.",
          es: "La sílice (dióxido de silicio, SiO₂) es un mineral natural en algunas aguas minerales, típicamente en cantidades de 10-50 mg/L. Es beneficioso para elasticidad de piel, fortaleza del cabello, salud ósea y formación de tejido conectivo.",
          de: "Silizium (Siliziumdioxid, SiO₂) ist ein natürlich vorkommendes Mineral in einigen Mineralwässern, typischerweise in Mengen von 10-50 mg/L. Es ist vorteilhaft für Hautelastizität, Haarstärke, Knochengesundheit und Bindegewebsbildung.",
          nl: "Silica (siliciumdioxide, SiO₂) is een natuurlijk voorkomend mineraal in sommige mineraalwaters, typisch in hoeveelheden van 10-50 mg/L. Het is gunstig voor huidelasticiteit, haarkracht, botgezondheid en bindweefselvorming."
        }
      },
      {
        question: {
          en: "Which famous French mineral water brand comes from the town of Évian-les-Bains?",
          es: "¿Qué famosa marca francesa de agua mineral proviene de la ciudad de Évian-les-Bains?",
          de: "Welche berühmte französische Mineralwassermarke stammt aus der Stadt Évian-les-Bains?",
          nl: "Welk beroemd Frans mineraalwatermerk komt uit de stad Évian-les-Bains?"
        },
        options: [
          { en: "Perrier", es: "Perrier", de: "Perrier", nl: "Perrier" },
          { en: "Évian", es: "Évian", de: "Évian", nl: "Évian" },
          { en: "Vittel", es: "Vittel", de: "Vittel", nl: "Vittel" },
          { en: "Volvic", es: "Volvic", de: "Volvic", nl: "Volvic" }
        ],
        correct: 1,
        explanation: {
          en: "Évian natural mineral water originates from Évian-les-Bains in the French Alps. The water filters through glacial rocks for 15 years before emerging at the source, acquiring its unique mineral composition.",
          es: "El agua mineral natural Évian se origina en Évian-les-Bains en los Alpes franceses. El agua se filtra a través de rocas glaciares durante 15 años antes de emerger en la fuente, adquiriendo su composición mineral única.",
          de: "Évian natürliches Mineralwasser stammt aus Évian-les-Bains in den französischen Alpen. Das Wasser filtert 15 Jahre lang durch Gletschergestein, bevor es an der Quelle austritt und seine einzigartige Mineralzusammensetzung erhält.",
          nl: "Évian natuurlijk mineraalwater is afkomstig uit Évian-les-Bains in de Franse Alpen. Het water filtert 15 jaar door gletsjerstenen voordat het bij de bron tevoorschijn komt en zijn unieke mineraalsamenstelling verkrijgt."
        }
      },
      {
        question: {
          en: "What is the typical pH level of most alkaline mineral waters?",
          es: "¿Cuál es el nivel de pH típico de la mayoría de aguas minerales alcalinas?",
          de: "Was ist der typische pH-Wert der meisten alkalischen Mineralwässer?",
          nl: "Wat is het typische pH-niveau van de meeste alkalische mineraalwaters?"
        },
        options: [
          { en: "4.0-5.5", es: "4.0-5.5", de: "4.0-5.5", nl: "4.0-5.5" },
          { en: "6.0-6.9", es: "6.0-6.9", de: "6.0-6.9", nl: "6.0-6.9" },
          { en: "7.5-9.5", es: "7.5-9.5", de: "7.5-9.5", nl: "7.5-9.5" },
          { en: "10.0-12.0", es: "10.0-12.0", de: "10.0-12.0", nl: "10.0-12.0" }
        ],
        correct: 2,
        explanation: {
          en: "Alkaline mineral waters typically have a pH between 7.5 and 9.5, which is above neutral (7.0). This alkalinity comes from dissolved minerals like calcium, magnesium, and bicarbonate.",
          es: "Las aguas minerales alcalinas típicamente tienen un pH entre 7.5 y 9.5, que está por encima del neutro (7.0). Esta alcalinidad proviene de minerales disueltos como calcio, magnesio y bicarbonato.",
          de: "Alkalische Mineralwässer haben typischerweise einen pH-Wert zwischen 7.5 und 9.5, der über neutral (7.0) liegt. Diese Alkalität stammt von gelösten Mineralien wie Kalzium, Magnesium und Bikarbonat.",
          nl: "Alkalische mineraalwaters hebben typisch een pH tussen 7.5 en 9.5, wat boven neutraal (7.0) ligt. Deze alkaliniteit komt van opgeloste mineralen zoals calcium, magnesium en bicarbonaat."
        }
      },
      {
        question: {
          en: "What geological process creates natural mineral water?",
          es: "¿Qué proceso geológico crea agua mineral natural?",
          de: "Welcher geologische Prozess erzeugt natürliches Mineralwasser?",
          nl: "Welk geologisch proces creëert natuurlijk mineraalwater?"
        },
        options: [
          { en: "Chemical treatment in factories", es: "Tratamiento químico en fábricas", de: "Chemische Behandlung in Fabriken", nl: "Chemische behandeling in fabrieken" },
          { en: "Water filtering through rock layers over time, dissolving minerals", es: "Agua filtrándose a través de capas de roca con el tiempo, disolviendo minerales", de: "Wasser, das im Laufe der Zeit durch Gesteinsschichten filtert und Mineralien auflöst", nl: "Water dat in de loop van de tijd door steenlagen filtert en mineralen oplost" },
          { en: "Evaporation and condensation cycles", es: "Ciclos de evaporación y condensación", de: "Verdunstungs- und Kondensationszyklen", nl: "Verdampings- en condensatiecycli" },
          { en: "Artificial mineral injection", es: "Inyección artificial de minerales", de: "Künstliche Mineralinjektion", nl: "Kunstmatige mineraalinjectie" }
        ],
        correct: 1,
        explanation: {
          en: "Natural mineral water forms when precipitation percolates through underground rock layers over many years (sometimes decades or centuries), dissolving minerals from the rocks and acquiring its characteristic composition.",
          es: "El agua mineral natural se forma cuando la precipitación se filtra a través de capas de roca subterránea durante muchos años (a veces décadas o siglos), disolviendo minerales de las rocas y adquiriendo su composición característica.",
          de: "Natürliches Mineralwasser entsteht, wenn Niederschlag über viele Jahre (manchmal Jahrzehnte oder Jahrhunderte) durch unterirdische Gesteinsschichten sickert, Mineralien aus den Gesteinen auflöst und seine charakteristische Zusammensetzung erhält.",
          nl: "Natuurlijk mineraalwater ontstaat wanneer neerslag gedurende vele jaren (soms decennia of eeuwen) door ondergrondse steenlagen sijpelt, mineralen uit de rotsen oplost en zijn karakteristieke samenstelling verkrijgt."
        }
      },
      {
        question: {
          en: "What does 'oligomineral' water mean?",
          es: "¿Qué significa agua 'oligomineral'?",
          de: "Was bedeutet 'oligominerales' Wasser?",
          nl: "Wat betekent 'oligomineraal' water?"
        },
        options: [
          { en: "Water with very high mineral content (>1500 mg/L)", es: "Agua con contenido mineral muy alto (>1500 mg/L)", de: "Wasser mit sehr hohem Mineralgehalt (>1500 mg/L)", nl: "Water met zeer hoog mineralengehalte (>1500 mg/L)" },
          { en: "Water with low mineral content (<500 mg/L)", es: "Agua con bajo contenido mineral (<500 mg/L)", de: "Wasser mit niedrigem Mineralgehalt (<500 mg/L)", nl: "Water met laag mineralengehalte (<500 mg/L)" },
          { en: "Water from volcanic sources", es: "Agua de fuentes volcánicas", de: "Wasser aus vulkanischen Quellen", nl: "Water van vulkanische bronnen" },
          { en: "Artificially mineralized water", es: "Agua mineralizada artificialmente", de: "Künstlich mineralisiertes Wasser", nl: "Kunstmatig gemineraliseerd water" }
        ],
        correct: 1,
        explanation: {
          en: "Oligomineral water has a low mineral content, typically less than 500 mg/L TDS. It's characterized by a light, neutral taste and is particularly suitable for people on low-sodium diets and for preparing baby formula.",
          es: "El agua oligomineral tiene bajo contenido mineral, típicamente menos de 500 mg/L TDS. Se caracteriza por un sabor ligero y neutral y es particularmente adecuada para personas con dietas bajas en sodio y para preparar fórmula para bebés.",
          de: "Oligominerales Wasser hat einen niedrigen Mineralgehalt, typischerweise weniger als 500 mg/L TDS. Es zeichnet sich durch einen leichten, neutralen Geschmack aus und ist besonders geeignet für Menschen mit natriumarmer Ernährung und zur Zubereitung von Babynahrung.",
          nl: "Oligomineraal water heeft een laag mineralengehalte, typisch minder dan 500 mg/L TDS. Het wordt gekenmerkt door een lichte, neutrale smaak en is bijzonder geschikt voor mensen met een natriumarm dieet en voor het bereiden van babyvoeding."
        }
      },
      {
        question: {
          en: "Which Italian region is famous for its San Pellegrino mineral water?",
          es: "¿Qué región italiana es famosa por su agua mineral San Pellegrino?",
          de: "Welche italienische Region ist berühmt für ihr San Pellegrino Mineralwasser?",
          nl: "Welke Italiaanse regio is beroemd om zijn San Pellegrino mineraalwater?"
        },
        options: [
          { en: "Tuscany", es: "Toscana", de: "Toskana", nl: "Toscane" },
          { en: "Lombardy", es: "Lombardía", de: "Lombardei", nl: "Lombardije" },
          { en: "Sicily", es: "Sicilia", de: "Sizilien", nl: "Sicilië" },
          { en: "Piedmont", es: "Piamonte", de: "Piemont", nl: "Piemonte" }
        ],
        correct: 1,
        explanation: {
          en: "San Pellegrino mineral water comes from San Pellegrino Terme in the Lombardy region of northern Italy, at the foothills of the Italian Alps. The water has been valued for its mineral properties since the 12th century.",
          es: "El agua mineral San Pellegrino proviene de San Pellegrino Terme en la región de Lombardía del norte de Italia, al pie de los Alpes italianos. El agua ha sido valorada por sus propiedades minerales desde el siglo XII.",
          de: "San Pellegrino Mineralwasser stammt aus San Pellegrino Terme in der Region Lombardei in Norditalien, am Fuße der italienischen Alpen. Das Wasser wird seit dem 12. Jahrhundert für seine Mineraleigenschaften geschätzt.",
          nl: "San Pellegrino mineraalwater komt uit San Pellegrino Terme in de regio Lombardije in Noord-Italië, aan de voet van de Italiaanse Alpen. Het water wordt sinds de 12e eeuw gewaardeerd om zijn minerale eigenschappen."
        }
      },
      {
        question: {
          en: "What is the purpose of 'protected source zones' for mineral water?",
          es: "¿Cuál es el propósito de las 'zonas de fuente protegida' para agua mineral?",
          de: "Was ist der Zweck von 'geschützten Quellenzonen' für Mineralwasser?",
          nl: "Wat is het doel van 'beschermde bronzones' voor mineraalwater?"
        },
        options: [
          { en: "To increase mineral content", es: "Para aumentar el contenido mineral", de: "Um den Mineralgehalt zu erhöhen", nl: "Om het mineralengehalte te verhogen" },
          { en: "To prevent contamination and preserve natural purity", es: "Para prevenir contaminación y preservar pureza natural", de: "Um Verschmutzung zu verhindern und natürliche Reinheit zu bewahren", nl: "Om vervuiling te voorkomen en natuurlijke zuiverheid te behouden" },
          { en: "To regulate water temperature", es: "Para regular la temperatura del agua", de: "Um die Wassertemperatur zu regulieren", nl: "Om de watertemperatuur te reguleren" },
          { en: "To control production volume", es: "Para controlar el volumen de producción", de: "Um das Produktionsvolumen zu kontrollieren", nl: "Om het productievolume te regelen" }
        ],
        correct: 1,
        explanation: {
          en: "Protected source zones are designated areas around mineral water sources where human activities are restricted or prohibited to prevent pollution and contamination, ensuring the water maintains its natural purity and consistent mineral composition.",
          es: "Las zonas de fuente protegida son áreas designadas alrededor de fuentes de agua mineral donde las actividades humanas están restringidas o prohibidas para prevenir contaminación y polución, asegurando que el agua mantenga su pureza natural y composición mineral consistente.",
          de: "Geschützte Quellenzonen sind ausgewiesene Bereiche um Mineralwasserquellen, in denen menschliche Aktivitäten eingeschränkt oder verboten sind, um Verschmutzung und Kontamination zu verhindern und sicherzustellen, dass das Wasser seine natürliche Reinheit und konsistente Mineralzusammensetzung beibehält.",
          nl: "Beschermde bronzones zijn aangewezen gebieden rond mineraalwaterbronnen waar menselijke activiteiten beperkt of verboden zijn om vervuiling en contaminatie te voorkomen, waardoor wordt gewaarborgd dat het water zijn natuurlijke zuiverheid en consistente mineraalsamenstelling behoudt."
        }
      },
      {
        question: {
          en: "What is the mineral 'fluoride' beneficial for when present in mineral water?",
          es: "¿Para qué es beneficioso el mineral 'fluoruro' cuando está presente en agua mineral?",
          de: "Wofür ist das Mineral 'Fluorid' vorteilhaft, wenn es in Mineralwasser vorhanden ist?",
          nl: "Waarvoor is het mineraal 'fluoride' gunstig wanneer het aanwezig is in mineraalwater?"
        },
        options: [
          { en: "Muscle growth", es: "Crecimiento muscular", de: "Muskelwachstum", nl: "Spiergroei" },
          { en: "Dental health and cavity prevention", es: "Salud dental y prevención de caries", de: "Zahngesundheit und Kariesprävention", nl: "Tandgezondheid en cariëspreventie" },
          { en: "Blood circulation", es: "Circulación sanguínea", de: "Blutzirkulation", nl: "Bloedcirculatie" },
          { en: "Vision improvement", es: "Mejora de la visión", de: "Sehverbesserung", nl: "Verbetering van het zicht" }
        ],
        correct: 1,
        explanation: {
          en: "Fluoride in mineral water (typically 0.7-1.5 mg/L) helps strengthen tooth enamel and prevent cavities. However, some mineral waters marketed for infants intentionally have low fluoride content to prevent excessive intake.",
          es: "El fluoruro en agua mineral (típicamente 0.7-1.5 mg/L) ayuda a fortalecer el esmalte dental y prevenir caries. Sin embargo, algunas aguas minerales comercializadas para bebés intencionalmente tienen bajo contenido de fluoruro para prevenir ingesta excesiva.",
          de: "Fluorid in Mineralwasser (typischerweise 0.7-1.5 mg/L) hilft, den Zahnschmelz zu stärken und Karies zu verhindern. Einige für Säuglinge vermarktete Mineralwässer haben jedoch absichtlich einen niedrigen Fluoridgehalt, um eine übermäßige Aufnahme zu verhindern.",
          nl: "Fluoride in mineraalwater (typisch 0.7-1.5 mg/L) helpt tandglazuur te versterken en cariës te voorkomen. Sommige mineraalwaters die op de markt worden gebracht voor zuigelingen hebben echter opzettelijk een laag fluoridegehalte om overmatige inname te voorkomen."
        }
      },
      {
        question: {
          en: "What does 'residue on evaporation' measure in mineral water analysis?",
          es: "¿Qué mide el 'residuo en evaporación' en análisis de agua mineral?",
          de: "Was misst 'Verdampfungsrückstand' in der Mineralwasseranalyse?",
          nl: "Wat meet 'residu bij verdamping' in mineraalwateranalyse?"
        },
        options: [
          { en: "Water temperature", es: "Temperatura del agua", de: "Wassertemperatur", nl: "Watertemperatuur" },
          { en: "Total dissolved solids (TDS)", es: "Sólidos disueltos totales (TDS)", de: "Gelöste Feststoffe gesamt (TDS)", nl: "Totaal opgeloste stoffen (TDS)" },
          { en: "Bacterial content", es: "Contenido bacteriano", de: "Bakteriengehalt", nl: "Bacterieel gehalte" },
          { en: "Gas content", es: "Contenido de gas", de: "Gasgehalt", nl: "Gasgehalte" }
        ],
        correct: 1,
        explanation: {
          en: "Residue on evaporation (also called dry residue at 180°C) measures the total dissolved solids in water. A sample is evaporated in a laboratory, and the remaining solid residue is weighed to determine the mineral content.",
          es: "El residuo en evaporación (también llamado residuo seco a 180°C) mide los sólidos disueltos totales en el agua. Una muestra se evapora en laboratorio, y el residuo sólido restante se pesa para determinar el contenido mineral.",
          de: "Verdampfungsrückstand (auch trockener Rückstand bei 180°C genannt) misst die gesamten gelösten Feststoffe im Wasser. Eine Probe wird im Labor verdampft, und der verbleibende feste Rückstand wird gewogen, um den Mineralgehalt zu bestimmen.",
          nl: "Residu bij verdamping (ook wel droog residu bij 180°C genoemd) meet de totale opgeloste stoffen in water. Een monster wordt in een laboratorium verdampt en het overgebleven vaste residu wordt gewogen om het mineralengehalte te bepalen."
        }
      },
      {
        question: {
          en: "Which mineral in water can give it a slightly bitter taste?",
          es: "¿Qué mineral en el agua puede darle un sabor ligeramente amargo?",
          de: "Welches Mineral im Wasser kann ihm einen leicht bitteren Geschmack verleihen?",
          nl: "Welk mineraal in water kan het een licht bittere smaak geven?"
        },
        options: [
          { en: "Calcium", es: "Calcio", de: "Kalzium", nl: "Calcium" },
          { en: "Sodium", es: "Sodio", de: "Natrium", nl: "Natrium" },
          { en: "Magnesium", es: "Magnesio", de: "Magnesium", nl: "Magnesium" },
          { en: "Potassium", es: "Potasio", de: "Kalium", nl: "Kalium" }
        ],
        correct: 2,
        explanation: {
          en: "Magnesium can give mineral water a slightly bitter or astringent taste, especially at higher concentrations (>50 mg/L). Waters high in magnesium are often described as having a 'mineral' taste.",
          es: "El magnesio puede dar al agua mineral un sabor ligeramente amargo o astringente, especialmente a concentraciones más altas (>50 mg/L). Las aguas altas en magnesio a menudo se describen como que tienen un sabor 'mineral'.",
          de: "Magnesium kann Mineralwasser einen leicht bitteren oder adstringierenden Geschmack verleihen, besonders bei höheren Konzentrationen (>50 mg/L). Magnesiumreiche Wässer werden oft als 'mineralisch' im Geschmack beschrieben.",
          nl: "Magnesium kan mineraalwater een licht bittere of samentrekkende smaak geven, vooral bij hogere concentraties (>50 mg/L). Waters met veel magnesium worden vaak beschreven als een 'minerale' smaak hebbend."
        }
      },
      {
        question: {
          en: "What is 'radon' sometimes found in mineral waters?",
          es: "¿Qué es 'radón' que a veces se encuentra en aguas minerales?",
          de: "Was ist 'Radon', das manchmal in Mineralwässern gefunden wird?",
          nl: "Wat is 'radon' dat soms wordt aangetroffen in mineraalwaters?"
        },
        options: [
          { en: "A beneficial mineral compound", es: "Un compuesto mineral beneficioso", de: "Eine vorteilhafte Mineralverbindung", nl: "Een gunstige mineraalverbinding" },
          { en: "A naturally occurring radioactive gas", es: "Un gas radiactivo natural", de: "Ein natürlich vorkommendes radioaktives Gas", nl: "Een natuurlijk voorkomend radioactief gas" },
          { en: "A type of bacteria", es: "Un tipo de bacteria", de: "Eine Art Bakterium", nl: "Een soort bacterie" },
          { en: "An artificial preservative", es: "Un conservante artificial", de: "Ein künstliches Konservierungsmittel", nl: "Een kunstmatig conserveermiddel" }
        ],
        correct: 1,
        explanation: {
          en: "Radon is a naturally occurring radioactive gas sometimes found in mineral waters from deep underground sources. While high levels can be harmful, very low concentrations in some therapeutic mineral waters have been historically used in spa treatments, though this practice is now controversial.",
          es: "El radón es un gas radiactivo natural que a veces se encuentra en aguas minerales de fuentes subterráneas profundas. Aunque niveles altos pueden ser dañinos, concentraciones muy bajas en algunas aguas minerales terapéuticas se han usado históricamente en tratamientos de spa, aunque esta práctica ahora es controvertida.",
          de: "Radon ist ein natürlich vorkommendes radioaktives Gas, das manchmal in Mineralwässern aus tiefen unterirdischen Quellen gefunden wird. Während hohe Konzentrationen schädlich sein können, wurden sehr niedrige Konzentrationen in einigen therapeutischen Mineralwässern historisch in Spa-Behandlungen verwendet, obwohl diese Praxis jetzt umstritten ist.",
          nl: "Radon is een natuurlijk voorkomend radioactief gas dat soms wordt aangetroffen in mineraalwaters van diepe ondergrondse bronnen. Hoewel hoge niveaus schadelijk kunnen zijn, zijn zeer lage concentraties in sommige therapeutische mineraalwaters historisch gebruikt in spa-behandelingen, hoewel deze praktijk nu controversieel is."
        }
      },
      {
        question: {
          en: "What is the significance of 'lithium' in some therapeutic mineral waters?",
          es: "¿Cuál es la importancia del 'litio' en algunas aguas minerales terapéuticas?",
          de: "Was ist die Bedeutung von 'Lithium' in einigen therapeutischen Mineralwässern?",
          nl: "Wat is de betekenis van 'lithium' in sommige therapeutische mineraalwaters?"
        },
        options: [
          { en: "Improves water color", es: "Mejora el color del agua", de: "Verbessert die Wasserfarbe", nl: "Verbetert de waterkleur" },
          { en: "May have calming effects and support mood", es: "Puede tener efectos calmantes y apoyar el estado de ánimo", de: "Kann beruhigende Wirkung haben und die Stimmung unterstützen", nl: "Kan kalmerende effecten hebben en stemming ondersteunen" },
          { en: "Increases carbonation", es: "Aumenta la carbonatación", de: "Erhöht die Karbonisierung", nl: "Verhoogt carbonatatie" },
          { en: "Extends shelf life", es: "Extiende la vida útil", de: "Verlängert die Haltbarkeit", nl: "Verlengt houdbaarheid" }
        ],
        correct: 1,
        explanation: {
          en: "Lithium in trace amounts (typically 0.1-1 mg/L) is naturally present in some mineral waters. Studies suggest it may have mood-stabilizing properties and potential neuroprotective effects, though concentrations in mineral water are much lower than therapeutic doses.",
          es: "El litio en cantidades traza (típicamente 0.1-1 mg/L) está presente naturalmente en algunas aguas minerales. Estudios sugieren que puede tener propiedades estabilizadoras del estado de ánimo y efectos neuroprotectores potenciales, aunque las concentraciones en agua mineral son mucho más bajas que las dosis terapéuticas.",
          de: "Lithium in Spurenmengen (typischerweise 0.1-1 mg/L) ist natürlich in einigen Mineralwässern vorhanden. Studien deuten darauf hin, dass es stimmungsstabilisierende Eigenschaften und potenzielle neuroprotektive Wirkungen haben kann, obwohl Konzentrationen in Mineralwasser viel niedriger sind als therapeutische Dosen.",
          nl: "Lithium in spoorelementen (typisch 0.1-1 mg/L) is van nature aanwezig in sommige mineraalwaters. Studies suggereren dat het stemmingsstabiliserende eigenschappen en potentiële neuroprotectieve effecten kan hebben, hoewel concentraties in mineraalwater veel lager zijn dan therapeutische doses."
        }
      },
      {
        question: {
          en: "What does 'hypotonic' mean in relation to mineral water?",
          es: "¿Qué significa 'hipotónico' en relación con agua mineral?",
          de: "Was bedeutet 'hypoton' in Bezug auf Mineralwasser?",
          nl: "Wat betekent 'hypotonisch' in relatie tot mineraalwater?"
        },
        options: [
          { en: "Lower mineral concentration than blood plasma", es: "Menor concentración mineral que plasma sanguíneo", de: "Niedrigere Mineralkonzentration als Blutplasma", nl: "Lagere mineraalconcentratie dan bloedplasma" },
          { en: "Higher mineral concentration than blood plasma", es: "Mayor concentración mineral que plasma sanguíneo", de: "Höhere Mineralkonzentration als Blutplasma", nl: "Hogere mineraalconcentratie dan bloedplasma" },
          { en: "Same mineral concentration as blood plasma", es: "Misma concentración mineral que plasma sanguíneo", de: "Gleiche Mineralkonzentration wie Blutplasma", nl: "Zelfde mineraalconcentratie als bloedplasma" },
          { en: "No minerals present", es: "Sin minerales presentes", de: "Keine Mineralien vorhanden", nl: "Geen mineralen aanwezig" }
        ],
        correct: 0,
        explanation: {
          en: "Hypotonic mineral water has a lower concentration of dissolved minerals than blood plasma (osmolarity <270 mOsm/L). This type of water is absorbed quickly and is ideal for hydration during light physical activity.",
          es: "El agua mineral hipotónica tiene una concentración menor de minerales disueltos que el plasma sanguíneo (osmolaridad <270 mOsm/L). Este tipo de agua se absorbe rápidamente y es ideal para hidratación durante actividad física ligera.",
          de: "Hypotones Mineralwasser hat eine niedrigere Konzentration gelöster Mineralien als Blutplasma (Osmolarität <270 mOsm/L). Diese Art von Wasser wird schnell absorbiert und ist ideal für die Hydratation bei leichter körperlicher Aktivität.",
          nl: "Hypotonisch mineraalwater heeft een lagere concentratie opgeloste mineralen dan bloedplasma (osmolariteit <270 mOsm/L). Dit type water wordt snel geabsorbeerd en is ideaal voor hydratatie tijdens lichte fysieke activiteit."
        }
      },
      {
        question: {
          en: "Which country is the largest producer of bottled mineral water in Europe?",
          es: "¿Qué país es el mayor productor de agua mineral embotellada en Europa?",
          de: "Welches Land ist der größte Produzent von Mineralwasser in Flaschen in Europa?",
          nl: "Welk land is de grootste producent van gebotteld mineraalwater in Europa?"
        },
        options: [
          { en: "Germany", es: "Alemania", de: "Deutschland", nl: "Duitsland" },
          { en: "France", es: "Francia", de: "Frankreich", nl: "Frankrijk" },
          { en: "Italy", es: "Italia", de: "Italien", nl: "Italië" },
          { en: "Spain", es: "España", de: "Spanien", nl: "Spanje" }
        ],
        correct: 2,
        explanation: {
          en: "Italy is the largest producer of bottled mineral water in Europe and one of the largest consumers per capita. Famous Italian mineral water brands include San Pellegrino, Acqua Panna, and Ferrarelle.",
          es: "Italia es el mayor productor de agua mineral embotellada en Europa y uno de los mayores consumidores per cápita. Marcas italianas famosas de agua mineral incluyen San Pellegrino, Acqua Panna y Ferrarelle.",
          de: "Italien ist der größte Produzent von Mineralwasser in Flaschen in Europa und einer der größten Verbraucher pro Kopf. Berühmte italienische Mineralwassermarken sind San Pellegrino, Acqua Panna und Ferrarelle.",
          nl: "Italië is de grootste producent van gebotteld mineraalwater in Europa en een van de grootste consumenten per hoofd van de bevolking. Beroemde Italiaanse mineraalwatermerken zijn San Pellegrino, Acqua Panna en Ferrarelle."
        }
      },
      {
        question: {
          en: "What is 'isotonic' mineral water?",
          es: "¿Qué es agua mineral 'isotónica'?",
          de: "Was ist 'isotonisches' Mineralwasser?",
          nl: "Wat is 'isotonisch' mineraalwater?"
        },
        options: [
          { en: "Water with the same osmotic pressure as blood", es: "Agua con la misma presión osmótica que la sangre", de: "Wasser mit dem gleichen osmotischen Druck wie Blut", nl: "Water met dezelfde osmotische druk als bloed" },
          { en: "Water from ice sources", es: "Agua de fuentes de hielo", de: "Wasser aus Eisquellen", nl: "Water van ijsbronnen" },
          { en: "Water with added electrolytes", es: "Agua con electrolitos añadidos", de: "Wasser mit zugesetzten Elektrolyten", nl: "Water met toegevoegde elektrolyten" },
          { en: "Carbonated water", es: "Agua carbonatada", de: "Karbonisiertes Wasser", nl: "Gecarboneerd water" }
        ],
        correct: 0,
        explanation: {
          en: "Isotonic mineral water has approximately the same osmotic pressure (270-330 mOsm/L) as blood plasma, allowing for optimal absorption. It's particularly beneficial for rehydration during moderate to intense physical activity.",
          es: "El agua mineral isotónica tiene aproximadamente la misma presión osmótica (270-330 mOsm/L) que el plasma sanguíneo, permitiendo una absorción óptima. Es particularmente beneficiosa para rehidratación durante actividad física moderada a intensa.",
          de: "Isotonisches Mineralwasser hat ungefähr den gleichen osmotischen Druck (270-330 mOsm/L) wie Blutplasma, was eine optimale Absorption ermöglicht. Es ist besonders vorteilhaft für die Rehydratation bei mäßiger bis intensiver körperlicher Aktivität.",
          nl: "Isotonisch mineraalwater heeft ongeveer dezelfde osmotische druk (270-330 mOsm/L) als bloedplasma, wat optimale absorptie mogelijk maakt. Het is bijzonder gunstig voor rehydratatie tijdens matige tot intense fysieke activiteit."
        }
      },
      {
        question: {
          en: "What is the purpose of the mineral analysis label on natural mineral water bottles?",
          es: "¿Cuál es el propósito de la etiqueta de análisis mineral en botellas de agua mineral natural?",
          de: "Was ist der Zweck des Mineralanalyse-Etiketts auf natürlichen Mineralwasserflaschen?",
          nl: "Wat is het doel van het mineraalanalyse-etiket op natuurlijke mineraalwaterflessen?"
        },
        options: [
          { en: "Marketing decoration only", es: "Solo decoración de marketing", de: "Nur Marketing-Dekoration", nl: "Alleen marketingdecoratie" },
          { en: "Legal requirement to inform consumers of exact mineral composition", es: "Requisito legal para informar a consumidores de composición mineral exacta", de: "Gesetzliche Anforderung zur Information der Verbraucher über die genaue Mineralzusammensetzung", nl: "Wettelijke vereiste om consumenten te informeren over exacte mineraalsamenstelling" },
          { en: "Quality certification symbol", es: "Símbolo de certificación de calidad", de: "Qualitätszertifizierungssymbol", nl: "Kwaliteitscertificeringssymbool" },
          { en: "Expiration date indicator", es: "Indicador de fecha de caducidad", de: "Ablaufdatumindikator", nl: "Vervaldatumindicator" }
        ],
        correct: 1,
        explanation: {
          en: "EU regulations require natural mineral water labels to display the exact mineral composition analysis, showing the concentration of major minerals (calcium, magnesium, sodium, etc.) per liter. This allows consumers to choose water based on their mineral needs.",
          es: "Las regulaciones de la UE requieren que las etiquetas de agua mineral natural muestren el análisis exacto de composición mineral, mostrando la concentración de minerales principales (calcio, magnesio, sodio, etc.) por litro. Esto permite a los consumidores elegir agua según sus necesidades minerales.",
          de: "EU-Vorschriften erfordern, dass Etiketten für natürliches Mineralwasser die genaue Mineralzusammensetzungsanalyse anzeigen, die die Konzentration der Hauptmineralien (Kalzium, Magnesium, Natrium usw.) pro Liter zeigt. Dies ermöglicht es Verbrauchern, Wasser basierend auf ihren Mineralbedürfnissen zu wählen.",
          nl: "EU-regelgeving vereist dat etiketten van natuurlijk mineraalwater de exacte mineraalsamenstelling-analyse weergeven, met de concentratie van belangrijke mineralen (calcium, magnesium, natrium, enz.) per liter. Dit stelt consumenten in staat water te kiezen op basis van hun mineralenbehoeften."
        }
      },
      {
        question: {
          en: "What is 'conductivity' as a measurement in mineral water quality testing?",
          es: "¿Qué es 'conductividad' como medida en pruebas de calidad de agua mineral?",
          de: "Was ist 'Leitfähigkeit' als Messung in der Mineralwasserqualitätsprüfung?",
          nl: "Wat is 'geleidbaarheid' als meting bij mineraalwaterkwaliteitstests?"
        },
        options: [
          { en: "Temperature of the water", es: "Temperatura del agua", de: "Temperatur des Wassers", nl: "Temperatuur van het water" },
          { en: "Ability of water to conduct electrical current, indicating dissolved ion concentration", es: "Capacidad del agua para conducir corriente eléctrica, indicando concentración de iones disueltos", de: "Fähigkeit von Wasser, elektrischen Strom zu leiten, was die Konzentration gelöster Ionen anzeigt", nl: "Vermogen van water om elektrische stroom te geleiden, wat de concentratie van opgeloste ionen aangeeft" },
          { en: "Flow rate from the source", es: "Tasa de flujo desde la fuente", de: "Durchflussrate von der Quelle", nl: "Stromingssnelheid van de bron" },
          { en: "Clarity of the water", es: "Claridad del agua", de: "Klarheit des Wassers", nl: "Helderheid van het water" }
        ],
        correct: 1,
        explanation: {
          en: "Conductivity (measured in μS/cm - microsiemens per centimeter) indicates the water's ability to conduct electrical current, which correlates directly with the concentration of dissolved minerals. Higher conductivity means higher mineral content.",
          es: "La conductividad (medida en μS/cm - microsiemens por centímetro) indica la capacidad del agua para conducir corriente eléctrica, que se correlaciona directamente con la concentración de minerales disueltos. Mayor conductividad significa mayor contenido mineral.",
          de: "Leitfähigkeit (gemessen in μS/cm - Mikrosiemens pro Zentimeter) zeigt die Fähigkeit des Wassers an, elektrischen Strom zu leiten, was direkt mit der Konzentration gelöster Mineralien korreliert. Höhere Leitfähigkeit bedeutet höheren Mineralgehalt.",
          nl: "Geleidbaarheid (gemeten in μS/cm - microsiemens per centimeter) geeft het vermogen van water aan om elektrische stroom te geleiden, wat direct correleert met de concentratie van opgeloste mineralen. Hogere geleidbaarheid betekent hoger mineralengehalte."
        }
      },
      {
        question: {
          en: "What is 'chalk' or calcium carbonate precipitation in mineral water?",
          es: "¿Qué es la precipitación de 'tiza' o carbonato de calcio en agua mineral?",
          de: "Was ist 'Kalk'- oder Calciumcarbonat-Ausfällung in Mineralwasser?",
          nl: "Wat is 'krijt'- of calciumcarbonaatprecipitatie in mineraalwater?"
        },
        options: [
          { en: "A sign of contamination", es: "Una señal de contaminación", de: "Ein Zeichen für Verschmutzung", nl: "Een teken van vervuiling" },
          { en: "Natural mineral deposits that can form when water conditions change", es: "Depósitos minerales naturales que pueden formarse cuando cambian las condiciones del agua", de: "Natürliche Mineralablagerungen, die sich bilden können, wenn sich die Wasserbedingungen ändern", nl: "Natuurlijke mineraalafzettingen die kunnen ontstaan wanneer watercondities veranderen" },
          { en: "An artificial additive", es: "Un aditivo artificial", de: "Ein künstlicher Zusatzstoff", nl: "Een kunstmatige toevoeging" },
          { en: "A cleaning residue", es: "Un residuo de limpieza", de: "Ein Reinigungsrückstand", nl: "Een schoonmaakresidu" }
        ],
        correct: 1,
        explanation: {
          en: "White deposits or cloudiness in high-calcium mineral water is natural calcium carbonate (CaCO₃) precipitation that occurs when temperature or pressure changes. It's completely harmless and indicates high mineral content, particularly calcium.",
          es: "Los depósitos blancos o turbiedad en agua mineral alta en calcio es precipitación natural de carbonato de calcio (CaCO₃) que ocurre cuando cambian la temperatura o presión. Es completamente inofensivo e indica alto contenido mineral, particularmente calcio.",
          de: "Weiße Ablagerungen oder Trübung in calciumreichem Mineralwasser ist natürliche Calciumcarbonat (CaCO₃) Ausfällung, die auftritt, wenn sich Temperatur oder Druck ändern. Es ist völlig harmlos und zeigt hohen Mineralgehalt, besonders Kalzium, an.",
          nl: "Witte afzettingen of troebeling in calciumrijk mineraalwater is natuurlijke calciumcarbonaatprecipitatie (CaCO₃) die optreedt wanneer temperatuur of druk verandert. Het is volledig onschadelijk en duidt op hoog mineralengehalte, vooral calcium."
        }
      },
      {
        question: {
          en: "What is the ideal storage temperature range for mineral water to maintain quality?",
          es: "¿Cuál es el rango de temperatura de almacenamiento ideal para agua mineral para mantener calidad?",
          de: "Was ist der ideale Lagertemperaturbereich für Mineralwasser zur Qualitätserhaltung?",
          nl: "Wat is het ideale opslagtemperatuurbereik voor mineraalwater om kwaliteit te behouden?"
        },
        options: [
          { en: "0-4°C (32-39°F)", es: "0-4°C (32-39°F)", de: "0-4°C (32-39°F)", nl: "0-4°C (32-39°F)" },
          { en: "5-15°C (41-59°F)", es: "5-15°C (41-59°F)", de: "5-15°C (41-59°F)", nl: "5-15°C (41-59°F)" },
          { en: "20-30°C (68-86°F)", es: "20-30°C (68-86°F)", de: "20-30°C (68-86°F)", nl: "20-30°C (68-86°F)" },
          { en: "35-45°C (95-113°F)", es: "35-45°C (95-113°F)", de: "35-45°C (95-113°F)", nl: "35-45°C (95-113°F)" }
        ],
        correct: 1,
        explanation: {
          en: "Mineral water should be stored at 5-15°C (41-59°F) in a cool, dark place away from direct sunlight and heat sources. Extreme temperatures can affect taste and potentially cause mineral precipitation or bottle deformation in plastic bottles.",
          es: "El agua mineral debe almacenarse a 5-15°C (41-59°F) en un lugar fresco y oscuro lejos de luz solar directa y fuentes de calor. Temperaturas extremas pueden afectar el sabor y potencialmente causar precipitación mineral o deformación de botellas en botellas de plástico.",
          de: "Mineralwasser sollte bei 5-15°C (41-59°F) an einem kühlen, dunklen Ort fern von direktem Sonnenlicht und Wärmequellen gelagert werden. Extreme Temperaturen können den Geschmack beeinträchtigen und möglicherweise Mineralausfällung oder Flaschenverformung bei Plastikflaschen verursachen.",
          nl: "Mineraalwater moet worden opgeslagen op 5-15°C (41-59°F) op een koele, donkere plaats uit de buurt van direct zonlicht en warmtebronnen. Extreme temperaturen kunnen de smaak beïnvloeden en mogelijk mineraalprecipitatie of flesvervorming in plastic flessen veroorzaken."
        }
      },
      {
        question: {
          en: "What is 'hypertonic' mineral water best suited for?",
          es: "¿Para qué es más adecuada el agua mineral 'hipertónica'?",
          de: "Wofür ist 'hypertones' Mineralwasser am besten geeignet?",
          nl: "Waarvoor is 'hypertonisch' mineraalwater het meest geschikt?"
        },
        options: [
          { en: "Rapid hydration during exercise", es: "Hidratación rápida durante ejercicio", de: "Schnelle Hydratation beim Sport", nl: "Snelle hydratatie tijdens inspanning" },
          { en: "Mineral supplementation and recovery after intense activity", es: "Suplementación mineral y recuperación después de actividad intensa", de: "Mineralergänzung und Erholung nach intensiver Aktivität", nl: "Mineraalsuppletie en herstel na intense activiteit" },
          { en: "Daily drinking for children", es: "Bebida diaria para niños", de: "Tägliches Trinken für Kinder", nl: "Dagelijks drinken voor kinderen" },
          { en: "Cooking and food preparation", es: "Cocina y preparación de alimentos", de: "Kochen und Lebensmittelzubereitung", nl: "Koken en voedselbereiding" }
        ],
        correct: 1,
        explanation: {
          en: "Hypertonic mineral water has a higher osmotic pressure (>330 mOsm/L) than blood plasma due to high mineral content. It's best for mineral supplementation and post-exercise recovery as it provides significant minerals, though it's absorbed more slowly than isotonic water.",
          es: "El agua mineral hipertónica tiene una presión osmótica más alta (>330 mOsm/L) que el plasma sanguíneo debido al alto contenido mineral. Es mejor para suplementación mineral y recuperación post-ejercicio ya que proporciona minerales significativos, aunque se absorbe más lentamente que el agua isotónica.",
          de: "Hypertones Mineralwasser hat aufgrund des hohen Mineralgehalts einen höheren osmotischen Druck (>330 mOsm/L) als Blutplasma. Es ist am besten für Mineralergänzung und Erholung nach dem Training geeignet, da es bedeutende Mineralien liefert, obwohl es langsamer als isotones Wasser absorbiert wird.",
          nl: "Hypertonisch mineraalwater heeft een hogere osmotische druk (>330 mOsm/L) dan bloedplasma vanwege het hoge mineralengehalte. Het is het beste voor mineraalsuppletie en herstel na inspanning omdat het aanzienlijke mineralen levert, hoewel het langzamer wordt geabsorbeerd dan isotonisch water."
        }
      },
      {
        question: {
          en: "What does 'suitable for infant formula preparation' indicate on mineral water labels?",
          es: "¿Qué indica 'adecuada para preparación de fórmula infantil' en etiquetas de agua mineral?",
          de: "Was zeigt 'geeignet für die Zubereitung von Säuglingsnahrung' auf Mineralwasseretiketten an?",
          nl: "Wat geeft 'geschikt voor zuigelingenvoedingbereiding' aan op mineraalwateretiketten?"
        },
        options: [
          { en: "Water is sterile", es: "Agua es estéril", de: "Wasser ist steril", nl: "Water is steriel" },
          { en: "Water meets strict limits for sodium, nitrate, fluoride, and other minerals safe for babies", es: "Agua cumple límites estrictos para sodio, nitrato, fluoruro y otros minerales seguros para bebés", de: "Wasser erfüllt strenge Grenzwerte für Natrium, Nitrat, Fluorid und andere für Babys sichere Mineralien", nl: "Water voldoet aan strikte limieten voor natrium, nitraat, fluoride en andere mineralen die veilig zijn voor baby's" },
          { en: "Water is carbonated", es: "Agua está carbonatada", de: "Wasser ist karbonisiert", nl: "Water is gecarboneerd" },
          { en: "Water contains added vitamins", es: "Agua contiene vitaminas añadidas", de: "Wasser enthält zugesetzte Vitamine", nl: "Water bevat toegevoegde vitamines" }
        ],
        correct: 1,
        explanation: {
          en: "Mineral water labeled suitable for infant formula must meet strict EU standards: sodium <20 mg/L, nitrate <10 mg/L, nitrite <0.02 mg/L, fluoride <0.7 mg/L, and other minerals within safe limits. It should still be boiled before use for babies under 6 months.",
          es: "El agua mineral etiquetada adecuada para fórmula infantil debe cumplir estrictos estándares de la UE: sodio <20 mg/L, nitrato <10 mg/L, nitrito <0.02 mg/L, fluoruro <0.7 mg/L, y otros minerales dentro de límites seguros. Aún debe hervirse antes de usar para bebés menores de 6 meses.",
          de: "Mineralwasser, das für Säuglingsnahrung geeignet ist, muss strenge EU-Standards erfüllen: Natrium <20 mg/L, Nitrat <10 mg/L, Nitrit <0.02 mg/L, Fluorid <0.7 mg/L und andere Mineralien innerhalb sicherer Grenzwerte. Es sollte dennoch vor Verwendung für Babys unter 6 Monaten abgekocht werden.",
          nl: "Mineraalwater geëtiketteerd als geschikt voor zuigelingenvoeding moet voldoen aan strikte EU-normen: natrium <20 mg/L, nitraat <10 mg/L, nitriet <0.02 mg/L, fluoride <0.7 mg/L, en andere mineralen binnen veilige grenzen. Het moet nog steeds worden gekookt voor gebruik bij baby's jonger dan 6 maanden."
        }
      }
    ]
  };

  // Export for use in the quiz application
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level5;
  } else if (typeof window !== 'undefined') {
    window.level5 = level5;
  }
})();
