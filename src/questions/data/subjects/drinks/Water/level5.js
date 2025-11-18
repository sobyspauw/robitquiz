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
    ]
  };

  // Export for use in the quiz application
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level5;
  } else if (typeof window !== 'undefined') {
    window.level5 = level5;
  }
})();
