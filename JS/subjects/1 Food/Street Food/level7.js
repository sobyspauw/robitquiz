// Quiz Level 7: Street Food - Safety & Hygiene
(function() {
  "use strict";

  const level7 = {
    name: {
      en: "Street Food Safety & Hygiene",
      es: "Seguridad e Higiene de Comida Callejera",
      de: "Straßenessen Sicherheit & Hygiene",
      nl: "Straatvoedsel Veiligheid & Hygiëne"
    },
    questions: [
      {
        question: {
          en: "What is the 'danger zone' temperature range for food safety?",
          es: "¿Cuál es el rango de temperatura de 'zona de peligro' para la seguridad alimentaria?",
          de: "Was ist der 'Gefahrenzone'-Temperaturbereich für Lebensmittelsicherheit?",
          nl: "Wat is het 'gevaarzone' temperatuurbereik voor voedselveiligheid?"
        },
        options: [
          { en: "32-100°F (0-38°C)", es: "0-38°C", de: "0-38°C", nl: "0-38°C" },
          { en: "40-140°F (4-60°C)", es: "4-60°C", de: "4-60°C", nl: "4-60°C" },
          { en: "50-150°F (10-66°C)", es: "10-66°C", de: "10-66°C", nl: "10-66°C" },
          { en: "70-170°F (21-77°C)", es: "21-77°C", de: "21-77°C", nl: "21-77°C" }
        ],
        correct: 1,
        explanation: {
          en: "The danger zone is 40-140°F (4-60°C) where bacteria multiply rapidly. Food should be kept below 40°F or above 140°F to prevent bacterial growth and foodborne illness.",
          es: "La zona de peligro es 4-60°C donde las bacterias se multiplican rápidamente. La comida debe mantenerse por debajo de 4°C o por encima de 60°C para prevenir el crecimiento bacteriano y enfermedades transmitidas por alimentos.",
          de: "Die Gefahrenzone ist 4-60°C, wo sich Bakterien schnell vermehren. Lebensmittel sollten unter 4°C oder über 60°C gehalten werden, um Bakterienwachstum und lebensmittelbedingte Krankheiten zu verhindern.",
          nl: "De gevaarzone is 4-60°C waar bacteriën zich snel vermenigvuldigen. Voedsel moet onder 4°C of boven 60°C worden gehouden om bacteriegroei en voedselgerelateerde ziekten te voorkomen."
        }
      },
      {
        question: {
          en: "How long can potentially hazardous foods safely remain in the danger zone?",
          es: "¿Por cuánto tiempo pueden los alimentos potencialmente peligrosos permanecer seguros en la zona de peligro?",
          de: "Wie lange können potenziell gefährliche Lebensmittel sicher in der Gefahrenzone bleiben?",
          nl: "Hoe lang kunnen potentieel gevaarlijke voedingsmiddelen veilig in de gevaarzone blijven?"
        },
        options: [
          { en: "1 hour", es: "1 hora", de: "1 Stunde", nl: "1 uur" },
          { en: "2 hours maximum", es: "2 horas máximo", de: "Maximal 2 Stunden", nl: "2 uur maximum" },
          { en: "4 hours", es: "4 horas", de: "4 Stunden", nl: "4 uur" },
          { en: "8 hours", es: "8 horas", de: "8 Stunden", nl: "8 uur" }
        ],
        correct: 1,
        explanation: {
          en: "The 2-hour rule states that potentially hazardous foods should not remain in the danger zone for more than 2 hours (1 hour if temperature exceeds 90°F/32°C) to prevent unsafe bacterial growth.",
          es: "La regla de 2 horas establece que los alimentos potencialmente peligrosos no deben permanecer en la zona de peligro por más de 2 horas (1 hora si la temperatura excede 32°C) para prevenir crecimiento bacteriano peligroso.",
          de: "Die 2-Stunden-Regel besagt, dass potenziell gefährliche Lebensmittel nicht länger als 2 Stunden (1 Stunde bei Temperaturen über 32°C) in der Gefahrenzone bleiben sollten, um unsicheres Bakterienwachstum zu verhindern.",
          nl: "De 2-uur regel stelt dat potentieel gevaarlijke voedingsmiddelen niet langer dan 2 uur (1 uur als de temperatuur 32°C overschrijdt) in de gevaarzone mogen blijven om onveilige bacteriegroei te voorkomen."
        }
      },
      {
        question: {
          en: "What is the minimum internal temperature for cooking ground beef safely?",
          es: "¿Cuál es la temperatura interna mínima para cocinar carne molida de res de forma segura?",
          de: "Was ist die minimale Innentemperatur zum sicheren Kochen von Rinderhackfleisch?",
          nl: "Wat is de minimale interne temperatuur voor het veilig koken van gehakt rundvlees?"
        },
        options: [
          { en: "145°F (63°C)", es: "63°C", de: "63°C", nl: "63°C" },
          { en: "160°F (71°C)", es: "71°C", de: "71°C", nl: "71°C" },
          { en: "165°F (74°C)", es: "74°C", de: "74°C", nl: "74°C" },
          { en: "180°F (82°C)", es: "82°C", de: "82°C", nl: "82°C" }
        ],
        correct: 1,
        explanation: {
          en: "Ground beef must reach an internal temperature of 160°F (71°C) to kill harmful bacteria like E. coli, which can be distributed throughout ground meat during processing.",
          es: "La carne molida de res debe alcanzar una temperatura interna de 71°C para matar bacterias dañinas como E. coli, que pueden distribuirse por toda la carne molida durante el procesamiento.",
          de: "Rinderhackfleisch muss eine Innentemperatur von 71°C erreichen, um schädliche Bakterien wie E. coli zu töten, die während der Verarbeitung im Hackfleisch verteilt werden können.",
          nl: "Gehakt rundvlees moet een interne temperatuur van 71°C bereiken om schadelijke bacteriën zoals E. coli te doden, die tijdens de verwerking door het gehakte vlees kunnen worden verspreid."
        }
      },
      {
        question: {
          en: "Which practice is essential for street food vendor hand hygiene?",
          es: "¿Qué práctica es esencial para la higiene de manos del vendedor de comida callejera?",
          de: "Welche Praxis ist für die Handhygiene von Straßenessen-Verkäufern unerlässlich?",
          nl: "Welke praktijk is essentieel voor handhygiëne van straatvoedselverkopers?"
        },
        options: [
          { en: "Washing hands only at the start of work", es: "Lavarse las manos solo al inicio del trabajo", de: "Hände nur zu Arbeitsbeginn waschen", nl: "Handen alleen aan het begin van het werk wassen" },
          { en: "Regular handwashing with soap and water for 20 seconds, especially after handling raw foods", es: "Lavado regular de manos con agua y jabón por 20 segundos, especialmente después de manipular alimentos crudos", de: "Regelmäßiges Händewaschen mit Seife und Wasser für 20 Sekunden, besonders nach dem Umgang mit rohen Lebensmitteln", nl: "Regelmatig handen wassen met zeep en water gedurende 20 seconden, vooral na het hanteren van rauwe voedingsmiddelen" },
          { en: "Using only hand sanitizer", es: "Usar solo desinfectante de manos", de: "Nur Händedesinfektionsmittel verwenden", nl: "Alleen handsanitizer gebruiken" },
          { en: "Wearing gloves without changing them", es: "Usar guantes sin cambiarlos", de: "Handschuhe tragen ohne sie zu wechseln", nl: "Handschoenen dragen zonder ze te wisselen" }
        ],
        correct: 1,
        explanation: {
          en: "Proper handwashing with soap and warm water for at least 20 seconds is crucial, especially after handling raw foods, using the restroom, or touching contaminated surfaces. Hand sanitizer complements but doesn't replace handwashing.",
          es: "El lavado apropiado de manos con jabón y agua tibia por al menos 20 segundos es crucial, especialmente después de manipular alimentos crudos, usar el baño o tocar superficies contaminadas. El desinfectante de manos complementa pero no reemplaza el lavado de manos.",
          de: "Ordentliches Händewaschen mit Seife und warmem Wasser für mindestens 20 Sekunden ist entscheidend, besonders nach dem Umgang mit rohen Lebensmitteln, Toilettenbesuch oder Berühren kontaminierter Oberflächen. Händedesinfektionsmittel ergänzt, ersetzt aber nicht das Händewaschen.",
          nl: "Goed handen wassen met zeep en warm water gedurende minstens 20 seconden is cruciaal, vooral na het hanteren van rauwe voedingsmiddelen, toiletbezoek of het aanraken van besmette oppervlakken. Handsanitizer vult aan maar vervangt niet het handen wassen."
        }
      },
      {
        question: {
          en: "What is cross-contamination in food safety?",
          es: "¿Qué es la contaminación cruzada en seguridad alimentaria?",
          de: "Was ist Kreuzkontamination in der Lebensmittelsicherheit?",
          nl: "Wat is kruisbesmetting in voedselveiligheid?"
        },
        options: [
          { en: "Mixing different spices", es: "Mezclar diferentes especias", de: "Verschiedene Gewürze mischen", nl: "Verschillende kruiden mengen" },
          { en: "Transfer of harmful bacteria from one food or surface to another", es: "Transferencia de bacterias dañinas de un alimento o superficie a otra", de: "Übertragung schädlicher Bakterien von einem Lebensmittel oder einer Oberfläche auf eine andere", nl: "Overdracht van schadelijke bacteriën van het ene voedsel of oppervlak naar het andere" },
          { en: "Cooking foods at different temperatures", es: "Cocinar alimentos a diferentes temperaturas", de: "Lebensmittel bei verschiedenen Temperaturen kochen", nl: "Voedsel op verschillende temperaturen koken" },
          { en: "Using multiple cooking methods", es: "Usar múltiples métodos de cocina", de: "Mehrere Kochmethoden verwenden", nl: "Meerdere kookmethoden gebruiken" }
        ],
        correct: 1,
        explanation: {
          en: "Cross-contamination occurs when harmful bacteria transfer from one food, surface, or utensil to another, often from raw to ready-to-eat foods, potentially causing foodborne illness.",
          es: "La contaminación cruzada ocurre cuando bacterias dañinas se transfieren de un alimento, superficie o utensilio a otro, a menudo de alimentos crudos a alimentos listos para comer, potencialmente causando enfermedades transmitidas por alimentos.",
          de: "Kreuzkontamination tritt auf, wenn schädliche Bakterien von einem Lebensmittel, einer Oberfläche oder einem Utensil auf ein anderes übertragen werden, oft von rohen auf verzehrfertige Lebensmittel, was potenziell lebensmittelbedingte Krankheiten verursacht.",
          nl: "Kruisbesmetting treedt op wanneer schadelijke bacteriën overgebracht worden van het ene voedsel, oppervlak of keukengerei naar het andere, vaak van rauw naar kant-en-klaar voedsel, wat mogelijk voedselgerelateerde ziekten veroorzaakt."
        }
      },
      {
        question: {
          en: "How should raw meat be stored relative to other foods?",
          es: "¿Cómo debe almacenarse la carne cruda en relación con otros alimentos?",
          de: "Wie sollte rohes Fleisch im Verhältnis zu anderen Lebensmitteln gelagert werden?",
          nl: "Hoe moet rauw vlees worden opgeslagen ten opzichte van andere voedingsmiddelen?"
        },
        options: [
          { en: "Mixed with other ingredients", es: "Mezclado con otros ingredientes", de: "Mit anderen Zutaten gemischt", nl: "Gemengd met andere ingrediënten" },
          { en: "Stored separately at the bottom of refrigeration to prevent drips", es: "Almacenado separadamente en la parte inferior de la refrigeración para prevenir goteos", de: "Getrennt am Boden der Kühlung gelagert, um Tropfen zu verhindern", nl: "Apart opgeslagen aan de onderkant van de koeling om druppels te voorkomen" },
          { en: "Above ready-to-eat foods", es: "Encima de alimentos listos para comer", de: "Über verzehrfertigen Lebensmitteln", nl: "Boven kant-en-klaar voedsel" },
          { en: "At room temperature", es: "A temperatura ambiente", de: "Bei Raumtemperatur", nl: "Op kamertemperatuur" }
        ],
        correct: 1,
        explanation: {
          en: "Raw meat must be stored separately from other foods, ideally at the bottom of refrigerated storage to prevent juices from dripping onto and contaminating other foods, particularly ready-to-eat items.",
          es: "La carne cruda debe almacenarse separadamente de otros alimentos, idealmente en la parte inferior del almacenamiento refrigerado para prevenir que los jugos goteen y contaminen otros alimentos, particularmente artículos listos para comer.",
          de: "Rohes Fleisch muss getrennt von anderen Lebensmitteln gelagert werden, idealerweise am Boden der gekühlten Lagerung, um zu verhindern, dass Säfte tropfen und andere Lebensmittel kontaminieren, besonders verzehrfertige Artikel.",
          nl: "Rauw vlees moet apart worden opgeslagen van andere voedingsmiddelen, bij voorkeur aan de onderkant van gekoelde opslag om te voorkomen dat sappen druppen en andere voedingsmiddelen besmetten, vooral kant-en-klare items."
        }
      },
      {
        question: {
          en: "What is the correct way to use a food thermometer?",
          es: "¿Cuál es la forma correcta de usar un termómetro para alimentos?",
          de: "Wie verwendet man ein Lebensmittelthermometer korrekt?",
          nl: "Wat is de juiste manier om een voedselthermometer te gebruiken?"
        },
        options: [
          { en: "Insert into the thickest part of food, away from bone or fat", es: "Insertar en la parte más gruesa del alimento, lejos del hueso o grasa", de: "In den dicksten Teil des Lebensmittels einführen, weg von Knochen oder Fett", nl: "Inbrengen in het dikste deel van het voedsel, weg van bot of vet" },
          { en: "Test only the surface", es: "Probar solo la superficie", de: "Nur die Oberfläche testen", nl: "Alleen het oppervlak testen" },
          { en: "Insert near bones for accurate reading", es: "Insertar cerca de huesos para lectura precisa", de: "Nahe Knochen für genaue Messung einführen", nl: "Inbrengen bij botten voor nauwkeurige meting" },
          { en: "Use without cleaning between foods", es: "Usar sin limpiar entre alimentos", de: "Ohne Reinigung zwischen Lebensmitteln verwenden", nl: "Gebruiken zonder schoonmaken tussen voedingsmiddelen" }
        ],
        correct: 0,
        explanation: {
          en: "Insert the thermometer into the thickest part of the food, avoiding bones, fat, or gristle, which can give false readings. Clean and sanitize the thermometer between different foods to prevent cross-contamination.",
          es: "Insertar el termómetro en la parte más gruesa del alimento, evitando huesos, grasa o cartílago, que pueden dar lecturas falsas. Limpiar y desinfectar el termómetro entre diferentes alimentos para prevenir contaminación cruzada.",
          de: "Das Thermometer in den dicksten Teil des Lebensmittels einführen und dabei Knochen, Fett oder Knorpel vermeiden, die falsche Messwerte liefern können. Das Thermometer zwischen verschiedenen Lebensmitteln reinigen und desinfizieren, um Kreuzkontamination zu verhindern.",
          nl: "Steek de thermometer in het dikste deel van het voedsel, vermijd botten, vet of kraakbeen, die valse metingen kunnen geven. Maak de thermometer schoon en ontsmetten tussen verschillende voedingsmiddelen om kruisbesmetting te voorkomen."
        }
      },
      {
        question: {
          en: "What should street food vendors do if they suspect food contamination?",
          es: "¿Qué deben hacer los vendedores de comida callejera si sospechan contaminación de alimentos?",
          de: "Was sollten Straßenessen-Verkäufer tun, wenn sie Lebensmittelkontamination vermuten?",
          nl: "Wat moeten straatvoedselverkopers doen als ze voedselbesmetting vermoeden?"
        },
        options: [
          { en: "Continue serving but at a discount", es: "Continuar sirviendo pero con descuento", de: "Weiter servieren, aber mit Rabatt", nl: "Blijven serveren maar met korting" },
          { en: "Immediately stop serving the food and dispose of it safely", es: "Inmediatamente dejar de servir la comida y desecharla de forma segura", de: "Sofort aufhören, das Essen zu servieren und es sicher entsorgen", nl: "Onmiddellijk stoppen met het serveren van het voedsel en het veilig weggooien" },
          { en: "Mix it with fresh food", es: "Mezclarlo con comida fresca", de: "Mit frischen Lebensmitteln mischen", nl: "Het mengen met vers voedsel" },
          { en: "Serve it quickly before it gets worse", es: "Servirlo rápidamente antes de que empeore", de: "Es schnell servieren, bevor es schlimmer wird", nl: "Het snel serveren voordat het erger wordt" }
        ],
        correct: 1,
        explanation: {
          en: "If food contamination is suspected, vendors must immediately stop serving the potentially contaminated food and dispose of it properly to prevent foodborne illness. Customer safety is the top priority.",
          es: "Si se sospecha contaminación de alimentos, los vendedores deben inmediatamente dejar de servir la comida potencialmente contaminada y desecharla apropiadamente para prevenir enfermedades transmitidas por alimentos. La seguridad del cliente es la máxima prioridad.",
          de: "Bei Verdacht auf Lebensmittelkontamination müssen Verkäufer sofort aufhören, das möglicherweise kontaminierte Essen zu servieren und es ordnungsgemäß entsorgen, um lebensmittelbedingte Krankheiten zu verhindern. Kundensicherheit hat oberste Priorität.",
          nl: "Als voedselbesmetting wordt vermoed, moeten verkopers onmiddellijk stoppen met het serveren van het mogelijk besmette voedsel en het goed weggooien om voedselgerelateerde ziekten te voorkomen. Klantveiligheid heeft de hoogste prioriteit."
        }
      },
      {
        question: {
          en: "How often should cutting boards and utensils be sanitized?",
          es: "¿Con qué frecuencia deben desinfectarse las tablas de cortar y utensilios?",
          de: "Wie oft sollten Schneidebretter und Utensilien desinfiziert werden?",
          nl: "Hoe vaak moeten snijplanken en keukengerei worden gedesinfecteerd?"
        },
        options: [
          { en: "Once per day", es: "Una vez por día", de: "Einmal pro Tag", nl: "Eenmaal per dag" },
          { en: "Between different food types and regularly throughout service", es: "Entre diferentes tipos de alimentos y regularmente durante el servicio", de: "Zwischen verschiedenen Lebensmittelarten und regelmäßig während des Service", nl: "Tussen verschillende voedselsoorten en regelmatig tijdens de service" },
          { en: "Only when visibly dirty", es: "Solo cuando estén visiblemente sucios", de: "Nur wenn sichtbar schmutzig", nl: "Alleen wanneer zichtbaar vuil" },
          { en: "Once per week", es: "Una vez por semana", de: "Einmal pro Woche", nl: "Eenmaal per week" }
        ],
        correct: 1,
        explanation: {
          en: "Cutting boards and utensils must be washed and sanitized between different food types (especially between raw and cooked foods) and regularly throughout service to prevent cross-contamination.",
          es: "Las tablas de cortar y utensilios deben lavarse y desinfectarse entre diferentes tipos de alimentos (especialmente entre alimentos crudos y cocidos) y regularmente durante el servicio para prevenir contaminación cruzada.",
          de: "Schneidebretter und Utensilien müssen zwischen verschiedenen Lebensmittelarten (besonders zwischen rohen und gekochten Lebensmitteln) und regelmäßig während des Service gewaschen und desinfiziert werden, um Kreuzkontamination zu verhindern.",
          nl: "Snijplanken en keukengerei moeten worden gewassen en gedesinfecteerd tussen verschillende voedselsoorten (vooral tussen rauwe en gekookte voedingsmiddelen) en regelmatig tijdens de service om kruisbesmetting te voorkomen."
        }
      },
      {
        question: {
          en: "What is the purpose of HACCP (Hazard Analysis Critical Control Points) in street food?",
          es: "¿Cuál es el propósito de HACCP (Análisis de Peligros y Puntos Críticos de Control) en comida callejera?",
          de: "Was ist der Zweck von HACCP (Hazard Analysis Critical Control Points) beim Straßenessen?",
          nl: "Wat is het doel van HACCP (Hazard Analysis Critical Control Points) bij straatvoedsel?"
        },
        options: [
          { en: "Marketing food products", es: "Comercializar productos alimentarios", de: "Lebensmittelprodukte vermarkten", nl: "Voedselproducten op de markt brengen" },
          { en: "Systematic approach to identify and control food safety hazards", es: "Enfoque sistemático para identificar y controlar peligros de seguridad alimentaria", de: "Systematischer Ansatz zur Identifizierung und Kontrolle von Lebensmittelsicherheitsgefahren", nl: "Systematische benadering om voedselveiligheidsrisico's te identificeren en beheersen" },
          { en: "Pricing strategies", es: "Estrategias de precios", de: "Preisstrategien", nl: "Prijsstrategieën" },
          { en: "Customer service training", es: "Entrenamiento de servicio al cliente", de: "Kundenservice-Training", nl: "Klantenservice training" }
        ],
        correct: 1,
        explanation: {
          en: "HACCP is a systematic approach to food safety that identifies potential biological, chemical, and physical hazards and establishes critical control points to prevent, eliminate, or reduce these risks to safe levels.",
          es: "HACCP es un enfoque sistemático para la seguridad alimentaria que identifica peligros biológicos, químicos y físicos potenciales y establece puntos críticos de control para prevenir, eliminar o reducir estos riesgos a niveles seguros.",
          de: "HACCP ist ein systematischer Ansatz für Lebensmittelsicherheit, der potenzielle biologische, chemische und physische Gefahren identifiziert und kritische Kontrollpunkte etabliert, um diese Risiken zu verhindern, eliminieren oder auf sichere Niveaus reduzieren.",
          nl: "HACCP is een systematische benadering van voedselveiligheid die potentiële biologische, chemische en fysieke gevaren identificeert en kritieke controlepunten vaststelt om deze risico's te voorkomen, elimineren of reduceren tot veilige niveaus."
        }
      },
      {
        question: {
          en: "What is the safe maximum time for hot food to be held at serving temperature?",
          es: "¿Cuál es el tiempo máximo seguro para mantener comida caliente a temperatura de servir?",
          de: "Was ist die sichere Maximalzeit für das Warmhalten von Speisen bei Serviertemperatur?",
          nl: "Wat is de veilige maximale tijd om warm voedsel op serveertemperatuur te houden?"
        },
        options: [
          { en: "2 hours", es: "2 horas", de: "2 Stunden", nl: "2 uur" },
          { en: "4 hours maximum", es: "4 horas máximo", de: "Maximal 4 Stunden", nl: "4 uur maximum" },
          { en: "6 hours", es: "6 horas", de: "6 Stunden", nl: "6 uur" },
          { en: "8 hours", es: "8 horas", de: "8 Stunden", nl: "8 uur" }
        ],
        correct: 1,
        explanation: {
          en: "Hot foods can be safely held at 140°F (60°C) or above for a maximum of 4 hours. After this time, the food should be discarded as bacterial growth may have reached unsafe levels.",
          es: "Los alimentos calientes pueden mantenerse seguros a 60°C o más por un máximo de 4 horas. Después de este tiempo, la comida debe desecharse ya que el crecimiento bacteriano puede haber alcanzado niveles inseguros.",
          de: "Heiße Speisen können sicher bei 60°C oder höher für maximal 4 Stunden gehalten werden. Nach dieser Zeit sollte das Essen entsorgt werden, da das Bakterienwachstum unsichere Niveaus erreicht haben könnte.",
          nl: "Warm voedsel kan veilig op 60°C of hoger worden gehouden gedurende maximaal 4 uur. Na deze tijd moet het voedsel worden weggegooid omdat bacteriegroei onveilige niveaus kan hebben bereikt."
        }
      },
      {
        question: {
          en: "What personal protective equipment (PPE) should street food vendors wear?",
          es: "¿Qué equipo de protección personal (EPP) deben usar los vendedores de comida callejera?",
          de: "Welche persönliche Schutzausrüstung (PSA) sollten Straßenessen-Verkäufer tragen?",
          nl: "Welke persoonlijke beschermingsmiddelen (PBM) moeten straatvoedselverkopers dragen?"
        },
        options: [
          { en: "No special equipment needed", es: "No se necesita equipo especial", de: "Keine spezielle Ausrüstung erforderlich", nl: "Geen speciale uitrusting nodig" },
          { en: "Hair restraints, clean apron, and closed-toe shoes", es: "Sujeción del cabello, delantal limpio y zapatos cerrados", de: "Haarschutz, saubere Schürze und geschlossene Schuhe", nl: "Haarverband, schone schort en gesloten schoenen" },
          { en: "Only gloves", es: "Solo guantes", de: "Nur Handschuhe", nl: "Alleen handschoenen" },
          { en: "Casual street clothes", es: "Ropa casual de calle", de: "Lässige Straßenkleidung", nl: "Casual straatkleding" }
        ],
        correct: 1,
        explanation: {
          en: "Street food vendors should wear hair restraints (hat, net, or band), clean aprons or uniforms, closed-toe shoes for safety, and change gloves between tasks to maintain hygiene standards.",
          es: "Los vendedores de comida callejera deben usar sujeción del cabello (gorro, red o banda), delantales o uniformes limpios, zapatos cerrados para seguridad y cambiar guantes entre tareas para mantener estándares de higiene.",
          de: "Straßenessen-Verkäufer sollten Haarschutz (Mütze, Netz oder Band), saubere Schürzen oder Uniformen, geschlossene Schuhe für Sicherheit tragen und Handschuhe zwischen Aufgaben wechseln, um Hygienestandards aufrechtzuerhalten.",
          nl: "Straatvoedselverkopers moeten haarverband (pet, net of band), schone schorten of uniformen, gesloten schoenen voor veiligheid dragen en handschoenen wisselen tussen taken om hygiëne normen te handhaven."
        }
      },
      {
        question: {
          en: "How should ice be stored and handled for food safety?",
          es: "¿Cómo debe almacenarse y manipularse el hielo para la seguridad alimentaria?",
          de: "Wie sollte Eis für die Lebensmittelsicherheit gelagert und behandelt werden?",
          nl: "Hoe moet ijs worden opgeslagen en behandeld voor voedselveiligheid?"
        },
        options: [
          { en: "In any container", es: "En cualquier recipiente", de: "In jedem Behälter", nl: "In elke container" },
          { en: "In clean, covered containers with dedicated scoops, never handled by hand", es: "En recipientes limpios y cubiertos con cucharones dedicados, nunca manipulado a mano", de: "In sauberen, abgedeckten Behältern mit speziellen Schaufeln, niemals mit der Hand behandelt", nl: "In schone, afgedekte containers met speciale scheppen, nooit met de hand behandeld" },
          { en: "Mixed with food directly", es: "Mezclado directamente con comida", de: "Direkt mit Essen gemischt", nl: "Direct gemengd met voedsel" },
          { en: "At room temperature", es: "A temperatura ambiente", de: "Bei Raumtemperatur", nl: "Op kamertemperatuur" }
        ],
        correct: 1,
        explanation: {
          en: "Ice must be stored in clean, covered containers and handled only with dedicated scoops or tongs, never by hand. Ice used for cooling should not come into direct contact with food unless it's food-grade ice.",
          es: "El hielo debe almacenarse en recipientes limpios y cubiertos y manipularse solo con cucharones o pinzas dedicados, nunca a mano. El hielo usado para enfriar no debe entrar en contacto directo con alimentos a menos que sea hielo grado alimentario.",
          de: "Eis muss in sauberen, abgedeckten Behältern gelagert und nur mit speziellen Schaufeln oder Zangen behandelt werden, niemals mit der Hand. Eis zum Kühlen sollte nicht direkt mit Lebensmitteln in Kontakt kommen, es sei denn, es ist lebensmitteltaugliches Eis.",
          nl: "Ijs moet worden opgeslagen in schone, afgedekte containers en alleen worden behandeld met speciale scheppen of tangen, nooit met de hand. Ijs gebruikt voor koeling mag niet in direct contact komen met voedsel tenzij het voedselgeschikt ijs is."
        }
      },
      {
        question: {
          en: "What should vendors do if a customer reports food poisoning?",
          es: "¿Qué deben hacer los vendedores si un cliente reporta intoxicación alimentaria?",
          de: "Was sollten Verkäufer tun, wenn ein Kunde eine Lebensmittelvergiftung meldet?",
          nl: "Wat moeten verkopers doen als een klant voedselvergiftiging meldt?"
        },
        options: [
          { en: "Ignore the complaint", es: "Ignorar la queja", de: "Die Beschwerde ignorieren", nl: "De klacht negeren" },
          { en: "Take it seriously, document the incident, and contact health authorities if required", es: "Tomarlo en serio, documentar el incidente y contactar autoridades de salud si es requerido", de: "Es ernst nehmen, den Vorfall dokumentieren und Gesundheitsbehörden kontaktieren falls erforderlich", nl: "Het serieus nemen, het incident documenteren en gezondheidsautoriteiten contacteren indien vereist" },
          { en: "Offer a discount on next purchase", es: "Ofrecer descuento en la próxima compra", de: "Einen Rabatt beim nächsten Kauf anbieten", nl: "Een korting aanbieden bij de volgende aankoop" },
          { en: "Blame the customer", es: "Culpar al cliente", de: "Dem Kunden die Schuld geben", nl: "De klant de schuld geven" }
        ],
        correct: 1,
        explanation: {
          en: "Food poisoning reports must be taken seriously. Vendors should document all details, preserve samples if possible, review food safety practices, and contact health authorities as required by local regulations.",
          es: "Los reportes de intoxicación alimentaria deben tomarse en serio. Los vendedores deben documentar todos los detalles, preservar muestras si es posible, revisar prácticas de seguridad alimentaria y contactar autoridades de salud según requerido por regulaciones locales.",
          de: "Berichte über Lebensmittelvergiftung müssen ernst genommen werden. Verkäufer sollten alle Details dokumentieren, Proben aufbewahren falls möglich, Lebensmittelsicherheitspraktiken überprüfen und Gesundheitsbehörden kontaktieren wie von örtlichen Vorschriften verlangt.",
          nl: "Meldingen van voedselvergiftiging moeten serieus worden genomen. Verkopers moeten alle details documenteren, monsters bewaren indien mogelijk, voedselveiligheid praktijken herzien en gezondheidsautoriteiten contacteren zoals vereist door lokale regelgeving."
        }
      },
      {
        question: {
          en: "What is the correct procedure for cooling hot food quickly?",
          es: "¿Cuál es el procedimiento correcto para enfriar comida caliente rápidamente?",
          de: "Was ist das korrekte Verfahren zum schnellen Abkühlen von heißen Speisen?",
          nl: "Wat is de juiste procedure voor het snel afkoelen van warm voedsel?"
        },
        options: [
          { en: "Leave at room temperature", es: "Dejar a temperatura ambiente", de: "Bei Raumtemperatur lassen", nl: "Op kamertemperatuur laten staan" },
          { en: "Two-stage cooling: 140°F to 70°F within 2 hours, then 70°F to 41°F within 4 hours", es: "Enfriamiento en dos etapas: de 60°C a 21°C en 2 horas, luego de 21°C a 5°C en 4 horas", de: "Zweistufige Kühlung: 60°C auf 21°C innerhalb 2 Stunden, dann 21°C auf 5°C innerhalb 4 Stunden", nl: "Twee-fase koeling: 60°C naar 21°C binnen 2 uur, dan 21°C naar 5°C binnen 4 uur" },
          { en: "Put hot food directly in freezer", es: "Poner comida caliente directamente en congelador", de: "Heißes Essen direkt in Gefrierschrank geben", nl: "Warm voedsel direct in vriezer zetten" },
          { en: "Cool slowly over 8 hours", es: "Enfriar lentamente por 8 horas", de: "Langsam über 8 Stunden abkühlen", nl: "Langzaam afkoelen gedurende 8 uur" }
        ],
        correct: 1,
        explanation: {
          en: "The two-stage cooling method requires cooling from 140°F to 70°F (60°C to 21°C) within 2 hours, then from 70°F to 41°F (21°C to 5°C) within 4 additional hours, using ice baths or shallow containers to speed cooling.",
          es: "El método de enfriamiento de dos etapas requiere enfriar de 60°C a 21°C dentro de 2 horas, luego de 21°C a 5°C dentro de 4 horas adicionales, usando baños de hielo o recipientes poco profundos para acelerar el enfriamiento.",
          de: "Die zweistufige Kühlmethode erfordert Abkühlung von 60°C auf 21°C innerhalb 2 Stunden, dann von 21°C auf 5°C innerhalb zusätzlicher 4 Stunden, unter Verwendung von Eisbädern oder flachen Behältern zur Kühlbeschleunigung.",
          nl: "De twee-fase koelmethode vereist afkoeling van 60°C naar 21°C binnen 2 uur, dan van 21°C naar 5°C binnen 4 extra uren, gebruikmakend van ijsbaden of ondiepe containers om koeling te versnellen."
        }
      },
      {
        question: {
          en: "Which surfaces require the most frequent cleaning and sanitizing?",
          es: "¿Qué superficies requieren la limpieza y desinfección más frecuente?",
          de: "Welche Oberflächen erfordern die häufigste Reinigung und Desinfektion?",
          nl: "Welke oppervlakken vereisen de meest frequente reiniging en desinfectie?"
        },
        options: [
          { en: "Floor surfaces only", es: "Solo superficies del suelo", de: "Nur Bodenflächen", nl: "Alleen vloeroppervlakken" },
          { en: "Food contact surfaces (cutting boards, prep areas, utensils)", es: "Superficies en contacto con alimentos (tablas de cortar, áreas de preparación, utensilios)", de: "Lebensmittel-Kontaktoberflächen (Schneidebretter, Zubereitungsbereiche, Utensilien)", nl: "Voedselcontact oppervlakken (snijplanken, bereidingsgebieden, keukengerei)" },
          { en: "Walls and ceilings", es: "Paredes y techos", de: "Wände und Decken", nl: "Muren en plafonds" },
          { en: "Customer seating areas", es: "Áreas de asientos de clientes", de: "Kundensitzbereiche", nl: "Klant zitgebieden" }
        ],
        correct: 1,
        explanation: {
          en: "Food contact surfaces like cutting boards, prep tables, and utensils require the most frequent cleaning and sanitizing since they directly touch food and can easily spread contamination if not properly maintained.",
          es: "Las superficies en contacto con alimentos como tablas de cortar, mesas de preparación y utensilios requieren la limpieza y desinfección más frecuente ya que tocan directamente los alimentos y pueden esparcir fácilmente contaminación si no se mantienen apropiadamente.",
          de: "Lebensmittel-Kontaktoberflächen wie Schneidebretter, Zubereitungstische und Utensilien erfordern die häufigste Reinigung und Desinfektion, da sie direkt Lebensmittel berühren und leicht Kontamination verbreiten können, wenn sie nicht ordnungsgemäß gepflegt werden.",
          nl: "Voedselcontact oppervlakken zoals snijplanken, bereidingstafels en keukengerei vereisen de meest frequente reiniging en desinfectie omdat ze direct voedsel raken en gemakkelijk besmetting kunnen verspreiden als ze niet goed worden onderhouden."
        }
      },
      {
        question: {
          en: "What is the most important factor in preventing foodborne illness?",
          es: "¿Cuál es el factor más importante para prevenir enfermedades transmitidas por alimentos?",
          de: "Was ist der wichtigste Faktor zur Verhinderung lebensmittelbedingter Krankheiten?",
          nl: "Wat is de belangrijkste factor bij het voorkomen van voedselgerelateerde ziekten?"
        },
        options: [
          { en: "Expensive equipment", es: "Equipo caro", de: "Teure Ausrüstung", nl: "Dure uitrusting" },
          { en: "Proper food handling education and consistent application of food safety practices", es: "Educación apropiada de manejo de alimentos y aplicación consistente de prácticas de seguridad alimentaria", de: "Ordnungsgemäße Lebensmittelhandhabungs-Schulung und konsistente Anwendung von Lebensmittelsicherheitspraktiken", nl: "Juiste voedselhantering educatie en consistente toepassing van voedselveiligheidspraktijken" },
          { en: "Large kitchen space", es: "Espacio grande de cocina", de: "Großer Küchenraum", nl: "Grote keukenruimte" },
          { en: "Premium ingredients only", es: "Solo ingredientes premium", de: "Nur Premium-Zutaten", nl: "Alleen premium ingrediënten" }
        ],
        correct: 1,
        explanation: {
          en: "The most important factor in preventing foodborne illness is comprehensive food safety education for all food handlers and the consistent application of proper food safety practices in daily operations.",
          es: "El factor más importante para prevenir enfermedades transmitidas por alimentos es la educación comprehensiva en seguridad alimentaria para todos los manipuladores de alimentos y la aplicación consistente de prácticas apropiadas de seguridad alimentaria en operaciones diarias.",
          de: "Der wichtigste Faktor zur Verhinderung lebensmittelbedingter Krankheiten ist umfassende Lebensmittelsicherheits-Schulung für alle Lebensmittelverarbeiter und die konsistente Anwendung ordnungsgemäßer Lebensmittelsicherheitspraktiken im täglichen Betrieb.",
          nl: "De belangrijkste factor bij het voorkomen van voedselgerelateerde ziekten is uitgebreide voedselveiligheid educatie voor alle voedselhanteraars en de consistente toepassing van juiste voedselveiligheidspraktijken in dagelijkse operaties."
        }
      },
      {
        question: {
          en: "How should cleaning chemicals be stored around food preparation areas?",
          es: "¿Cómo deben almacenarse los químicos de limpieza cerca de las áreas de preparación de alimentos?",
          de: "Wie sollten Reinigungschemikalien in der Nähe von Lebensmittelzubereitungsbereichen gelagert werden?",
          nl: "Hoe moeten schoonmaakmiddelen worden opgeslagen rond voedselbereidingsgebieden?"
        },
        options: [
          { en: "Mixed with food supplies", es: "Mezclados con suministros de comida", de: "Mit Lebensmittelvorräten gemischt", nl: "Gemengd met voedselvoorraden" },
          { en: "Separately from food in locked, labeled storage", es: "Separadamente de alimentos en almacenamiento bloqueado y etiquetado", de: "Getrennt von Lebensmitteln in verschlossener, beschrifteter Lagerung", nl: "Apart van voedsel in vergrendelde, gelabelde opslag" },
          { en: "Above food preparation surfaces", es: "Encima de superficies de preparación de alimentos", de: "Über Lebensmittelzubereitungsoberflächen", nl: "Boven voedselbereidingsoppervlakken" },
          { en: "In the same refrigerator as food", es: "En el mismo refrigerador que la comida", de: "Im gleichen Kühlschrank wie Lebensmittel", nl: "In dezelfde koelkast als voedsel" }
        ],
        correct: 1,
        explanation: {
          en: "Cleaning chemicals must be stored separately from food in secure, labeled containers, away from food preparation and storage areas to prevent accidental contamination and chemical poisoning.",
          es: "Los químicos de limpieza deben almacenarse separadamente de alimentos en recipientes seguros y etiquetados, lejos de áreas de preparación y almacenamiento de alimentos para prevenir contaminación accidental y envenenamiento químico.",
          de: "Reinigungschemikalien müssen getrennt von Lebensmitteln in sicheren, beschrifteten Behältern gelagert werden, entfernt von Lebensmittelzubereitung- und Lagerbereichen, um versehentliche Kontamination und Chemikalienvergiftung zu verhindern.",
          nl: "Schoonmaakmiddelen moeten apart van voedsel worden opgeslagen in veilige, gelabelde containers, weg van voedselbereideing- en opslaggebieden om accidentele besmetting en chemische vergiftiging te voorkomen."
        }
      },
      {
        question: {
          en: "What is the 'danger zone' temperature range for food safety?",
          es: "¿Cuál es el rango de temperatura de 'zona de peligro' para la seguridad alimentaria?",
          de: "Was ist der 'Gefahrenzone'-Temperaturbereich für Lebensmittelsicherheit?",
          nl: "Wat is het 'gevaarzone' temperatuurbereik voor voedselveiligheid?"
        },
        options: [
          { en: "32-100°F (0-38°C)", es: "0-38°C", de: "0-38°C", nl: "0-38°C" },
          { en: "40-140°F (4-60°C)", es: "4-60°C", de: "4-60°C", nl: "4-60°C" },
          { en: "50-150°F (10-66°C)", es: "10-66°C", de: "10-66°C", nl: "10-66°C" },
          { en: "70-170°F (21-77°C)", es: "21-77°C", de: "21-77°C", nl: "21-77°C" }
        ],
        correct: 1,
        explanation: {
          en: "The danger zone is 40-140°F (4-60°C) where bacteria multiply rapidly. Food should be kept below 40°F or above 140°F to prevent bacterial growth and foodborne illness.",
          es: "La zona de peligro es 4-60°C donde las bacterias se multiplican rápidamente. La comida debe mantenerse por debajo de 4°C o por encima de 60°C para prevenir el crecimiento bacteriano y enfermedades transmitidas por alimentos.",
          de: "Die Gefahrenzone ist 4-60°C, wo sich Bakterien schnell vermehren. Lebensmittel sollten unter 4°C oder über 60°C gehalten werden, um Bakterienwachstum und lebensmittelbedingte Krankheiten zu verhindern.",
          nl: "De gevaarzone is 4-60°C waar bacteriën zich snel vermenigvuldigen. Voedsel moet onder 4°C of boven 60°C worden gehouden om bacteriegroei en voedselgerelateerde ziekten te voorkomen."
        }
      },
      {
        question: {
          en: "How long can potentially hazardous foods safely remain in the danger zone?",
          es: "¿Por cuánto tiempo pueden los alimentos potencialmente peligrosos permanecer seguros en la zona de peligro?",
          de: "Wie lange können potenziell gefährliche Lebensmittel sicher in der Gefahrenzone bleiben?",
          nl: "Hoe lang kunnen potentieel gevaarlijke voedingsmiddelen veilig in de gevaarzone blijven?"
        },
        options: [
          { en: "1 hour", es: "1 hora", de: "1 Stunde", nl: "1 uur" },
          { en: "2 hours maximum", es: "2 horas máximo", de: "Maximal 2 Stunden", nl: "2 uur maximum" },
          { en: "4 hours", es: "4 horas", de: "4 Stunden", nl: "4 uur" },
          { en: "8 hours", es: "8 horas", de: "8 Stunden", nl: "8 uur" }
        ],
        correct: 1,
        explanation: {
          en: "The 2-hour rule states that potentially hazardous foods should not remain in the danger zone for more than 2 hours (1 hour if temperature exceeds 90°F/32°C) to prevent unsafe bacterial growth.",
          es: "La regla de 2 horas establece que los alimentos potencialmente peligrosos no deben permanecer en la zona de peligro por más de 2 horas (1 hora si la temperatura excede 32°C) para prevenir crecimiento bacteriano peligroso.",
          de: "Die 2-Stunden-Regel besagt, dass potenziell gefährliche Lebensmittel nicht länger als 2 Stunden (1 Stunde bei Temperaturen über 32°C) in der Gefahrenzone bleiben sollten, um unsicheres Bakterienwachstum zu verhindern.",
          nl: "De 2-uur regel stelt dat potentieel gevaarlijke voedingsmiddelen niet langer dan 2 uur (1 uur als de temperatuur 32°C overschrijdt) in de gevaarzone mogen blijven om onveilige bacteriegroei te voorkomen."
        }
      }
    ]
  };

  // Export for use in the quiz application
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level7;
  }

  return level7;
})();