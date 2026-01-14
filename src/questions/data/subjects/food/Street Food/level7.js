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
          en: "What is the scientific basis for pathogen growth in the danger zone?",
          es: "¿Cuál es la base científica para el crecimiento de patógenos en la zona de peligro?",
          de: "Was ist die wissenschaftliche Grundlage für Pathogenwachstum in der Gefahrenzone?",
          nl: "Wat is de wetenschappelijke basis voor pathogeen groei in de gevaarzone?"
        },
        options: [
          { en: "Bacteria cannot grow at any temperature", es: "Las bacterias no pueden crecer a ninguna temperatura", de: "Bakterien können bei keiner Temperatur wachsen", nl: "Bacteriën kunnen bij geen enkele temperatuur groeien" },
          { en: "Mesophilic bacteria double every 20 minutes in optimal conditions (40-140°F)", es: "Las bacterias mesófilas se duplican cada 20 minutos en condiciones óptimas (4-60°C)", de: "Mesophile Bakterien verdoppeln sich alle 20 Minuten unter optimalen Bedingungen (4-60°C)", nl: "Mesofiele bacteriën verdubbelen elke 20 minuten onder optimale omstandigheden (4-60°C)" },
          { en: "Temperature has no effect on bacteria", es: "La temperatura no tiene efecto en las bacterias", de: "Temperatur hat keine Auswirkung auf Bakterien", nl: "Temperatuur heeft geen effect op bacteriën" },
          { en: "Only freezing kills bacteria", es: "Solo la congelación mata bacterias", de: "Nur Einfrieren tötet Bakterien", nl: "Alleen bevriezen doodt bacteriën" }
        ],
        correct: 1,
        explanation: {
          en: "Mesophilic pathogenic bacteria (like Salmonella and E. coli) thrive in the danger zone, doubling approximately every 20 minutes under optimal conditions, which is why time-temperature control is critical for food safety.",
          es: "Las bacterias patógenas mesófilas (como Salmonella y E. coli) prosperan en la zona de peligro, duplicándose aproximadamente cada 20 minutos bajo condiciones óptimas, por lo que el control de tiempo-temperatura es crítico para la seguridad alimentaria.",
          de: "Mesophile pathogene Bakterien (wie Salmonellen und E. coli) gedeihen in der Gefahrenzone und verdoppeln sich unter optimalen Bedingungen etwa alle 20 Minuten, weshalb Zeit-Temperatur-Kontrolle für die Lebensmittelsicherheit entscheidend ist.",
          nl: "Mesofiele pathogene bacteriën (zoals Salmonella en E. coli) gedijen in de gevaarzone, verdubbelen ongeveer elke 20 minuten onder optimale omstandigheden, wat is waarom tijd-temperatuur controle kritiek is voor voedselveiligheid."
        }
      },
      {
        question: {
          en: "What is the 'Big Six' in food safety terminology?",
          es: "¿Qué es el 'Big Six' en terminología de seguridad alimentaria?",
          de: "Was sind die 'Big Six' in der Lebensmittelsicherheits-Terminologie?",
          nl: "Wat is de 'Big Six' in voedselveiligheid terminologie?"
        },
        options: [
          { en: "Six largest food producers", es: "Seis productores de alimentos más grandes", de: "Sechs größte Lebensmittelhersteller", nl: "Zes grootste voedselproducenten" },
          { en: "Six highly contagious foodborne pathogens requiring exclusion of infected workers", es: "Seis patógenos transmitidos por alimentos altamente contagiosos que requieren exclusión de trabajadores infectados", de: "Sechs hochansteckende lebensmittelbedingte Krankheitserreger, die Ausschluss infizierter Arbeiter erfordern", nl: "Zes zeer besmettelijke voedselgerelateerde pathogenen die uitsluiting van geïnfecteerde werknemers vereisen" },
          { en: "Six cooking methods", es: "Seis métodos de cocina", de: "Sechs Kochmethoden", nl: "Zes kookmethoden" },
          { en: "Six equipment types", es: "Seis tipos de equipos", de: "Sechs Gerätetypen", nl: "Zes uitrustingstypes" }
        ],
        correct: 1,
        explanation: {
          en: "The Big Six are highly contagious foodborne pathogens: Norovirus, Hepatitis A, Salmonella Typhi, Shigella, E. coli O157:H7, and non-typhoidal Salmonella. Food handlers with these must be excluded from work to prevent outbreaks.",
          es: "Los Big Six son patógenos transmitidos por alimentos altamente contagiosos: Norovirus, Hepatitis A, Salmonella Typhi, Shigella, E. coli O157:H7 y Salmonella no tifoidea. Los manipuladores de alimentos con estos deben ser excluidos del trabajo para prevenir brotes.",
          de: "Die Big Six sind hochansteckende lebensmittelbedingte Krankheitserreger: Norovirus, Hepatitis A, Salmonella Typhi, Shigella, E. coli O157:H7 und nicht-typhöse Salmonellen. Lebensmittelverarbeiter damit müssen von der Arbeit ausgeschlossen werden, um Ausbrüche zu verhindern.",
          nl: "De Big Six zijn zeer besmettelijke voedselgerelateerde pathogenen: Norovirus, Hepatitis A, Salmonella Typhi, Shigella, E. coli O157:H7 en niet-tyfeuze Salmonella. Voedselhanteraars hiermee moeten worden uitgesloten van werk om uitbraken te voorkomen."
        }
      },
      {
        question: {
          en: "What is the minimum water temperature for mechanical dishwashing sanitization?",
          es: "¿Cuál es la temperatura mínima del agua para desinfección por lavado mecánico de platos?",
          de: "Was ist die Mindest-Wassertemperatur für mechanische Geschirrspül-Desinfektion?",
          nl: "Wat is de minimum water temperatuur voor mechanische afwas desinfectie?"
        },
        options: [
          { en: "120°F (49°C)", es: "49°C", de: "49°C", nl: "49°C" },
          { en: "140°F (60°C)", es: "60°C", de: "60°C", nl: "60°C" },
          { en: "180°F (82°C) for high-temp machines or chemical sanitizers for low-temp", es: "82°C para máquinas de alta temperatura o desinfectantes químicos para baja temperatura", de: "82°C für Hochtemperatur-Maschinen oder chemische Desinfektionsmittel für Niedertemperatur", nl: "82°C voor hoge-temp machines of chemische ontsmettingsmiddelen voor lage-temp" },
          { en: "212°F (100°C)", es: "100°C", de: "100°C", nl: "100°C" }
        ],
        correct: 2,
        explanation: {
          en: "High-temperature dishwashers must reach 180°F (82°C) final rinse for effective sanitization, while low-temperature machines use chemical sanitizers (chlorine, quaternary ammonium, or iodine) at lower temperatures with proper concentration.",
          es: "Los lavaplatos de alta temperatura deben alcanzar 82°C de enjuague final para desinfección efectiva, mientras que las máquinas de baja temperatura usan desinfectantes químicos (cloro, amonio cuaternario o yodo) a temperaturas más bajas con concentración apropiada.",
          de: "Hochtemperatur-Geschirrspüler müssen 82°C Endspülung für effektive Desinfektion erreichen, während Niedertemperatur-Maschinen chemische Desinfektionsmittel (Chlor, quaternäres Ammonium oder Jod) bei niedrigeren Temperaturen mit geeigneter Konzentration verwenden.",
          nl: "Hoge-temperatuur vaatwassers moeten 82°C finale spoeling bereiken voor effectieve desinfectie, terwijl lage-temperatuur machines chemische ontsmettingsmiddelen (chloor, quaternair ammonium of jodium) bij lagere temperaturen met juiste concentratie gebruiken."
        }
      },
      {
        question: {
          en: "What is the correct sanitizer concentration for quaternary ammonium compounds (quats)?",
          es: "¿Cuál es la concentración correcta de desinfectante para compuestos de amonio cuaternario (quats)?",
          de: "Was ist die korrekte Desinfektionsmittel-Konzentration für quaternäre Ammoniumverbindungen (Quats)?",
          nl: "Wat is de juiste ontsmettingsmiddel concentratie voor quaternaire ammonium verbindingen (quats)?"
        },
        options: [
          { en: "10-25 ppm", es: "10-25 ppm", de: "10-25 ppm", nl: "10-25 ppm" },
          { en: "50-100 ppm", es: "50-100 ppm", de: "50-100 ppm", nl: "50-100 ppm" },
          { en: "150-400 ppm (per manufacturer instructions)", es: "150-400 ppm (según instrucciones del fabricante)", de: "150-400 ppm (gemäß Herstelleranweisungen)", nl: "150-400 ppm (volgens fabrikantsinstructies)" },
          { en: "1000 ppm", es: "1000 ppm", de: "1000 ppm", nl: "1000 ppm" }
        ],
        correct: 2,
        explanation: {
          en: "Quaternary ammonium sanitizers typically require 150-400 ppm concentration, though exact levels depend on manufacturer specifications. Test strips should verify proper concentration for effective sanitization without residue concerns.",
          es: "Los desinfectantes de amonio cuaternario típicamente requieren concentración de 150-400 ppm, aunque los niveles exactos dependen de especificaciones del fabricante. Las tiras de prueba deben verificar concentración apropiada para desinfección efectiva sin preocupaciones de residuos.",
          de: "Quaternäre Ammonium-Desinfektionsmittel erfordern typischerweise 150-400 ppm Konzentration, obwohl genaue Werte von Herstellerspezifikationen abhängen. Teststreifen sollten die richtige Konzentration für effektive Desinfektion ohne Rückstandsbedenken überprüfen.",
          nl: "Quaternaire ammonium ontsmettingsmiddelen vereisen typisch 150-400 ppm concentratie, hoewel exacte niveaus afhangen van fabrikantspecificaties. Teststrips moeten juiste concentratie verifiëren voor effectieve desinfectie zonder residu zorgen."
        }
      },
      {
        question: {
          en: "What is the purpose of a three-compartment sink in food safety?",
          es: "¿Cuál es el propósito de un fregadero de tres compartimentos en seguridad alimentaria?",
          de: "Was ist der Zweck eines Drei-Becken-Spülbeckens in der Lebensmittelsicherheit?",
          nl: "Wat is het doel van een drie-compartiment gootsteen in voedselveiligheid?"
        },
        options: [
          { en: "Aesthetic appearance only", es: "Solo apariencia estética", de: "Nur ästhetisches Aussehen", nl: "Alleen esthetisch uiterlijk" },
          { en: "Three-step process: wash with detergent, rinse, sanitize", es: "Proceso de tres pasos: lavar con detergente, enjuagar, desinfectar", de: "Drei-Schritte-Prozess: mit Reinigungsmittel waschen, spülen, desinfizieren", nl: "Drie-stappen proces: wassen met reinigingsmiddel, spoelen, ontsmetten" },
          { en: "Separating different food types", es: "Separar diferentes tipos de alimentos", de: "Verschiedene Lebensmittelarten trennen", nl: "Verschillende voedselsoorten scheiden" },
          { en: "Storage for clean dishes", es: "Almacenamiento para platos limpios", de: "Lagerung für sauberes Geschirr", nl: "Opslag voor schone borden" }
        ],
        correct: 1,
        explanation: {
          en: "Three-compartment sinks provide manual warewashing: first sink washes with hot soapy water (110°F+), second rinses debris, third sanitizes with chemical solution or hot water (171°F+), followed by air drying.",
          es: "Los fregaderos de tres compartimentos proporcionan lavado manual de vajilla: primer fregadero lava con agua caliente jabonosa (43°C+), segundo enjuaga escombros, tercero desinfecta con solución química o agua caliente (77°C+), seguido de secado al aire.",
          de: "Drei-Becken-Spülbecken ermöglichen manuelles Geschirrspülen: erstes Becken wäscht mit heißem Seifenwasser (43°C+), zweites spült Rückstände, drittes desinfiziert mit chemischer Lösung oder heißem Wasser (77°C+), gefolgt von Lufttrocknung.",
          nl: "Drie-compartiment gootstenen bieden handmatige afwas: eerste gootsteen wast met heet zeepwater (43°C+), tweede spoelt puin, derde ontsmetten met chemische oplossing of heet water (77°C+), gevolgd door luchtdroging."
        }
      },
      {
        question: {
          en: "What is the difference between cleaning and sanitizing?",
          es: "¿Cuál es la diferencia entre limpiar y desinfectar?",
          de: "Was ist der Unterschied zwischen Reinigen und Desinfizieren?",
          nl: "Wat is het verschil tussen schoonmaken en ontsmetten?"
        },
        options: [
          { en: "No difference, they're identical", es: "Sin diferencia, son idénticos", de: "Kein Unterschied, sie sind identisch", nl: "Geen verschil, ze zijn identiek" },
          { en: "Cleaning removes visible dirt; sanitizing reduces pathogens to safe levels", es: "Limpiar remueve suciedad visible; desinfectar reduce patógenos a niveles seguros", de: "Reinigen entfernt sichtbaren Schmutz; Desinfizieren reduziert Krankheitserreger auf sichere Niveaus", nl: "Schoonmaken verwijdert zichtbaar vuil; ontsmetten reduceert pathogenen tot veilige niveaus" },
          { en: "Sanitizing comes before cleaning", es: "Desinfectar viene antes de limpiar", de: "Desinfizieren kommt vor Reinigen", nl: "Ontsmetten komt voor schoonmaken" },
          { en: "Only one is necessary", es: "Solo uno es necesario", de: "Nur eins ist notwendig", nl: "Slechts één is noodzakelijk" }
        ],
        correct: 1,
        explanation: {
          en: "Cleaning physically removes food, dirt, and debris from surfaces using detergent and water. Sanitizing uses heat or chemicals to reduce pathogen levels to safe levels. Both steps are essential—cleaning must occur before sanitizing for effectiveness.",
          es: "Limpiar remueve físicamente alimentos, suciedad y escombros de superficies usando detergente y agua. Desinfectar usa calor o químicos para reducir niveles de patógenos a niveles seguros. Ambos pasos son esenciales—limpiar debe ocurrir antes de desinfectar para efectividad.",
          de: "Reinigen entfernt physisch Lebensmittel, Schmutz und Ablagerungen von Oberflächen mit Reinigungsmittel und Wasser. Desinfizieren verwendet Hitze oder Chemikalien, um Pathogen-Niveaus auf sichere Werte zu reduzieren. Beide Schritte sind wesentlich—Reinigen muss vor Desinfizieren erfolgen für Wirksamkeit.",
          nl: "Schoonmaken verwijdert fysiek voedsel, vuil en puin van oppervlakken met reinigingsmiddel en water. Ontsmetten gebruikt warmte of chemicaliën om pathogeen niveaus tot veilige niveaus te reduceren. Beide stappen zijn essentieel—schoonmaken moet voor ontsmetten gebeuren voor effectiviteit."
        }
      },
      {
        question: {
          en: "What is biofilm and why is it a food safety concern?",
          es: "¿Qué es biopelícula y por qué es una preocupación de seguridad alimentaria?",
          de: "Was ist Biofilm und warum ist er ein Lebensmittelsicherheitsproblem?",
          nl: "Wat is biofilm en waarom is het een voedselveiligheid zorg?"
        },
        options: [
          { en: "Plastic wrapping for food", es: "Envoltorio plástico para alimentos", de: "Plastikfolie für Lebensmittel", nl: "Plastic verpakking voor voedsel" },
          { en: "Protective bacterial colonies on surfaces that resist cleaning and harbor pathogens", es: "Colonias bacterianas protectoras en superficies que resisten limpieza y albergan patógenos", de: "Schützende Bakterienkolonien auf Oberflächen, die Reinigung widerstehen und Krankheitserreger beherbergen", nl: "Beschermende bacteriële kolonies op oppervlakken die schoonmaken weerstaan en pathogenen herbergen" },
          { en: "Edible coating on fruits", es: "Recubrimiento comestible en frutas", de: "Essbare Beschichtung auf Früchten", nl: "Eetbare coating op fruit" },
          { en: "Type of food storage bag", es: "Tipo de bolsa de almacenamiento de alimentos", de: "Art von Lebensmittel-Aufbewahrungsbeutel", nl: "Type voedselopslag zak" }
        ],
        correct: 1,
        explanation: {
          en: "Biofilms are complex communities of bacteria that attach to surfaces and produce protective slime layers, making them resistant to normal cleaning and harboring dangerous pathogens. They require aggressive cleaning protocols and may necessitate equipment replacement.",
          es: "Las biopelículas son comunidades complejas de bacterias que se adhieren a superficies y producen capas protectoras de limo, haciéndolas resistentes a limpieza normal y albergando patógenos peligrosos. Requieren protocolos de limpieza agresivos y pueden necesitar reemplazo de equipos.",
          de: "Biofilme sind komplexe Bakteriengemeinschaften, die sich an Oberflächen anheften und schützende Schleimschichten produzieren, was sie resistent gegen normale Reinigung macht und gefährliche Krankheitserreger beherbergt. Sie erfordern aggressive Reinigungsprotokolle und können Geräteaustausch erfordern.",
          nl: "Biofilms zijn complexe gemeenschappen van bacteriën die zich hechten aan oppervlakken en beschermende slijmlagen produceren, wat ze resistent maakt tegen normale reiniging en gevaarlijke pathogenen herbergt. Ze vereisen agressieve schoonmaakprotocollen en kunnen apparatuur vervanging noodzaken."
        }
      },
      {
        question: {
          en: "What is the correct procedure for testing sanitizer concentration?",
          es: "¿Cuál es el procedimiento correcto para probar concentración de desinfectante?",
          de: "Was ist das korrekte Verfahren zum Testen der Desinfektionsmittel-Konzentration?",
          nl: "Wat is de juiste procedure voor het testen van ontsmettingsmiddel concentratie?"
        },
        options: [
          { en: "Visual inspection only", es: "Solo inspección visual", de: "Nur Sichtprüfung", nl: "Alleen visuele inspectie" },
          { en: "Use chemical test strips specific to sanitizer type, multiple times daily", es: "Usar tiras de prueba química específicas al tipo de desinfectante, múltiples veces diariamente", de: "Chemische Teststreifen verwenden, die spezifisch für Desinfektionsmittel-Typ sind, mehrmals täglich", nl: "Gebruik chemische teststrips specifiek voor ontsmettingsmiddel type, meerdere keren dagelijks" },
          { en: "Taste the solution", es: "Probar la solución", de: "Die Lösung probieren", nl: "De oplossing proeven" },
          { en: "Testing is unnecessary", es: "Las pruebas son innecesarias", de: "Testen ist unnötig", nl: "Testen is onnodig" }
        ],
        correct: 1,
        explanation: {
          en: "Chemical test strips specific to each sanitizer type (chlorine, quat, iodine) must be used multiple times daily to verify proper concentration. Different sanitizers require different test strips and have different target ranges for effectiveness.",
          es: "Las tiras de prueba química específicas para cada tipo de desinfectante (cloro, quat, yodo) deben usarse múltiples veces diariamente para verificar concentración apropiada. Diferentes desinfectantes requieren diferentes tiras de prueba y tienen diferentes rangos objetivo para efectividad.",
          de: "Chemische Teststreifen, die für jeden Desinfektionsmittel-Typ spezifisch sind (Chlor, Quat, Jod), müssen mehrmals täglich verwendet werden, um die richtige Konzentration zu überprüfen. Verschiedene Desinfektionsmittel erfordern verschiedene Teststreifen und haben unterschiedliche Zielbereiche für Wirksamkeit.",
          nl: "Chemische teststrips specifiek voor elk ontsmettingsmiddel type (chloor, quat, jodium) moeten meerdere keren dagelijks worden gebruikt om juiste concentratie te verifiëren. Verschillende ontsmettingsmiddelen vereisen verschillende teststrips en hebben verschillende doelbereiken voor effectiviteit."
        }
      },
      {
        question: {
          en: "What is the 'aw' (water activity) concept in food safety?",
          es: "¿Qué es el concepto de 'aw' (actividad del agua) en seguridad alimentaria?",
          de: "Was ist das 'aw' (Wasseraktivität)-Konzept in der Lebensmittelsicherheit?",
          nl: "Wat is het 'aw' (wateractiviteit) concept in voedselveiligheid?"
        },
        options: [
          { en: "Water temperature measurement", es: "Medición de temperatura del agua", de: "Wassertemperatur-Messung", nl: "Water temperatuur meting" },
          { en: "Available water for microbial growth; below 0.85 inhibits most pathogens", es: "Agua disponible para crecimiento microbiano; debajo de 0.85 inhibe mayoría de patógenos", de: "Verfügbares Wasser für mikrobielles Wachstum; unter 0,85 hemmt die meisten Krankheitserreger", nl: "Beschikbaar water voor microbiële groei; onder 0.85 remt meeste pathogenen" },
          { en: "Amount of water in recipe", es: "Cantidad de agua en receta", de: "Wassermenge im Rezept", nl: "Hoeveelheid water in recept" },
          { en: "Water hardness level", es: "Nivel de dureza del agua", de: "Wasserhärte-Niveau", nl: "Water hardheid niveau" }
        },
        correct: 1,
        explanation: {
          en: "Water activity (aw) measures available moisture for microbial growth on a scale of 0-1. Most pathogenic bacteria require aw above 0.85. Reducing aw through drying, salting, or sugar preservation inhibits bacterial growth and extends shelf life.",
          es: "La actividad del agua (aw) mide humedad disponible para crecimiento microbiano en una escala de 0-1. La mayoría de bacterias patógenas requieren aw por encima de 0.85. Reducir aw mediante secado, salado o preservación con azúcar inhibe crecimiento bacteriano y extiende vida útil.",
          de: "Wasseraktivität (aw) misst verfügbare Feuchtigkeit für mikrobielles Wachstum auf einer Skala von 0-1. Die meisten pathogenen Bakterien benötigen aw über 0,85. Reduzierung von aw durch Trocknen, Salzen oder Zuckerkonservierung hemmt Bakterienwachstum und verlängert Haltbarkeit.",
          nl: "Wateractiviteit (aw) meet beschikbaar vocht voor microbiële groei op een schaal van 0-1. Meeste pathogene bacteriën vereisen aw boven 0.85. Het verminderen van aw door drogen, zouten of suiker conservering remt bacteriële groei en verlengt houdbaarheid."
        }
      },
      {
        question: {
          en: "What is the significance of pH in food safety?",
          es: "¿Cuál es la importancia del pH en seguridad alimentaria?",
          de: "Was ist die Bedeutung des pH-Werts in der Lebensmittelsicherheit?",
          nl: "Wat is de betekenis van pH in voedselveiligheid?"
        },
        options: [
          { en: "pH doesn't affect food safety", es: "El pH no afecta la seguridad alimentaria", de: "pH beeinflusst Lebensmittelsicherheit nicht", nl: "pH heeft geen invloed op voedselveiligheid" },
          { en: "Most pathogens grow best in neutral pH (4.6-7.0); acidic foods are safer", es: "La mayoría de patógenos crecen mejor en pH neutro (4.6-7.0); alimentos ácidos son más seguros", de: "Die meisten Krankheitserreger wachsen am besten bei neutralem pH (4,6-7,0); säurehaltige Lebensmittel sind sicherer", nl: "Meeste pathogenen groeien best in neutrale pH (4.6-7.0); zure voedingsmiddelen zijn veiliger" },
          { en: "Only alkaline foods are safe", es: "Solo alimentos alcalinos son seguros", de: "Nur alkalische Lebensmittel sind sicher", nl: "Alleen alkalische voedingsmiddelen zijn veilig" },
          { en: "pH only affects taste", es: "El pH solo afecta el sabor", de: "pH beeinflusst nur Geschmack", nl: "pH beïnvloedt alleen smaak" }
        ],
        correct: 1,
        explanation: {
          en: "pH significantly affects pathogen growth. Foods with pH below 4.6 (acidic) inhibit most pathogenic bacteria, including C. botulinum. This pH threshold determines whether foods require pressure canning or can be safely processed in boiling water baths.",
          es: "El pH afecta significativamente el crecimiento de patógenos. Alimentos con pH por debajo de 4.6 (ácidos) inhiben la mayoría de bacterias patógenas, incluyendo C. botulinum. Este umbral de pH determina si los alimentos requieren enlatado a presión o pueden procesarse seguros en baños de agua hirviendo.",
          de: "Der pH-Wert beeinflusst das Pathogenwachstum erheblich. Lebensmittel mit pH unter 4,6 (sauer) hemmen die meisten pathogenen Bakterien, einschließlich C. botulinum. Diese pH-Schwelle bestimmt, ob Lebensmittel Druckkonservierung erfordern oder sicher in kochenden Wasserbädern verarbeitet werden können.",
          nl: "pH beïnvloedt pathogeen groei significant. Voedingsmiddelen met pH onder 4.6 (zuur) remmen meeste pathogene bacteriën, inclusief C. botulinum. Deze pH drempel bepaalt of voedingsmiddelen druk inblikken vereisen of veilig kunnen worden verwerkt in kokende waterbaden."
        }
      },
      {
        question: {
          en: "What is sous vide cooking and what are its unique food safety challenges?",
          es: "¿Qué es la cocina sous vide y cuáles son sus desafíos únicos de seguridad alimentaria?",
          de: "Was ist Sous-Vide-Kochen und welche einzigartigen Lebensmittelsicherheits-Herausforderungen gibt es?",
          nl: "Wat is sous vide koken en wat zijn de unieke voedselveiligheid uitdagingen?"
        },
        options: [
          { en: "Traditional boiling with no concerns", es: "Hervir tradicional sin preocupaciones", de: "Traditionelles Kochen ohne Bedenken", nl: "Traditioneel koken zonder zorgen" },
          { en: "Vacuum-sealed low-temp cooking requiring precise time-temperature control to prevent anaerobic pathogen growth", es: "Cocina a baja temperatura sellada al vacío que requiere control preciso de tiempo-temperatura para prevenir crecimiento de patógenos anaeróbicos", de: "Vakuumversiegeltes Niedrigtemperatur-Kochen, das präzise Zeit-Temperatur-Kontrolle erfordert, um anaerobes Pathogenwachstum zu verhindern", nl: "Vacuüm verzegeld laag-temp koken dat precieze tijd-temperatuur controle vereist om anaëroob pathogeen groei te voorkomen" },
          { en: "Deep frying method", es: "Método de fritura profunda", de: "Frittier-Methode", nl: "Frituur methode" },
          { en: "Microwave cooking", es: "Cocina en microondas", de: "Mikrowellen-Kochen", nl: "Magnetron koken" }
        ],
        correct: 1,
        explanation: {
          en: "Sous vide involves vacuum-sealing food and cooking at precise low temperatures (131-160°F) for extended periods. The oxygen-free environment and lower temperatures can allow anaerobic pathogens (C. botulinum, C. perfringens) to grow, requiring strict HACCP protocols and time-temperature documentation.",
          es: "Sous vide implica sellar al vacío alimentos y cocinar a temperaturas bajas precisas (55-71°C) por períodos extendidos. El ambiente sin oxígeno y temperaturas más bajas pueden permitir que patógenos anaeróbicos (C. botulinum, C. perfringens) crezcan, requiriendo protocolos HACCP estrictos y documentación de tiempo-temperatura.",
          de: "Sous Vide beinhaltet Vakuumversiegelung von Lebensmitteln und Kochen bei präzisen niedrigen Temperaturen (55-71°C) für längere Zeiträume. Die sauerstofffreie Umgebung und niedrigere Temperaturen können anaerobes Pathogenwachstum (C. botulinum, C. perfringens) ermöglichen, was strenge HACCP-Protokolle und Zeit-Temperatur-Dokumentation erfordert.",
          nl: "Sous vide omvat vacuüm verzegeling van voedsel en koken op precieze lage temperaturen (55-71°C) voor verlengde periodes. De zuurstofvrije omgeving en lagere temperaturen kunnen anaëroob pathogeen groei (C. botulinum, C. perfringens) toestaan, wat strikte HACCP protocollen en tijd-temperatuur documentatie vereist."
        }
      },
      {
        question: {
          en: "What are the risks of time-temperature abuse in food service?",
          es: "¿Cuáles son los riesgos del abuso de tiempo-temperatura en servicio de alimentos?",
          de: "Was sind die Risiken von Zeit-Temperatur-Missbrauch im Lebensmittelservice?",
          nl: "Wat zijn de risico's van tijd-temperatuur misbruik in voedsel service?"
        },
        options: [
          { en: "No risks exist", es: "No existen riesgos", de: "Keine Risiken existieren", nl: "Er bestaan geen risico's" },
          { en: "Exponential pathogen growth leading to foodborne illness outbreaks", es: "Crecimiento exponencial de patógenos llevando a brotes de enfermedades transmitidas por alimentos", de: "Exponentielles Pathogenwachstum, das zu lebensmittelbedingten Krankheitsausbrüchen führt", nl: "Exponentiële pathogeen groei leidend tot voedselgerelateerde ziekte uitbraken" },
          { en: "Only affects taste", es: "Solo afecta el sabor", de: "Betrifft nur Geschmack", nl: "Beïnvloedt alleen smaak" },
          { en: "Improves food quality", es: "Mejora calidad de alimentos", de: "Verbessert Lebensmittelqualität", nl: "Verbetert voedselkwaliteit" }
        ],
        correct: 1,
        explanation: {
          en: "Time-temperature abuse (holding food in the danger zone too long) allows exponential bacterial growth. A single pathogenic cell can multiply to dangerous levels (over 10 million cells) in just 7-8 hours at optimal temperatures, causing potentially severe foodborne illness.",
          es: "El abuso de tiempo-temperatura (mantener alimentos en la zona de peligro demasiado tiempo) permite crecimiento bacteriano exponencial. Una sola célula patógena puede multiplicarse a niveles peligrosos (más de 10 millones de células) en solo 7-8 horas a temperaturas óptimas, causando enfermedades potencialmente severas transmitidas por alimentos.",
          de: "Zeit-Temperatur-Missbrauch (Halten von Lebensmitteln zu lange in der Gefahrenzone) ermöglicht exponentielles Bakterienwachstum. Eine einzelne pathogene Zelle kann sich auf gefährliche Niveaus (über 10 Millionen Zellen) in nur 7-8 Stunden bei optimalen Temperaturen vermehren, was potenziell schwere lebensmittelbedingte Krankheiten verursacht.",
          nl: "Tijd-temperatuur misbruik (voedsel te lang in gevaarzone houden) staat exponentiële bacteriële groei toe. Een enkele pathogene cel kan zich vermenigvuldigen tot gevaarlijke niveaus (meer dan 10 miljoen cellen) in slechts 7-8 uur bij optimale temperaturen, mogelijk ernstige voedselgerelateerde ziekten veroorzakend."
        }
      },
      {
        question: {
          en: "What is the proper procedure for calibrating a food thermometer?",
          es: "¿Cuál es el procedimiento apropiado para calibrar un termómetro para alimentos?",
          de: "Was ist das richtige Verfahren zum Kalibrieren eines Lebensmittelthermometers?",
          nl: "Wat is de juiste procedure voor het kalibreren van een voedselthermometer?"
        },
        options: [
          { en: "Calibration is unnecessary", es: "La calibración es innecesaria", de: "Kalibrierung ist unnötig", nl: "Kalibratie is onnodig" },
          { en: "Ice point method (32°F/0°C) or boiling point method (212°F/100°C at sea level)", es: "Método de punto de hielo (0°C) o método de punto de ebullición (100°C al nivel del mar)", de: "Eispunkt-Methode (0°C) oder Siedepunkt-Methode (100°C auf Meereshöhe)", nl: "IJspunt methode (0°C) of kookpunt methode (100°C op zeeniveau)" },
          { en: "Visual estimation", es: "Estimación visual", de: "Visuelle Schätzung", nl: "Visuele schatting" },
          { en: "Only manufacturer can calibrate", es: "Solo el fabricante puede calibrar", de: "Nur Hersteller kann kalibrieren", nl: "Alleen fabrikant kan kalibreren" }
        ],
        correct: 1,
        explanation: {
          en: "Thermometers should be calibrated regularly using ice point method (ice water should read 32°F/0°C) or boiling point method (adjusted for altitude). Many digital thermometers have reset buttons; dial thermometers may need nut adjustment to ensure accuracy.",
          es: "Los termómetros deben calibrarse regularmente usando método de punto de hielo (agua con hielo debe leer 0°C) o método de punto de ebullición (ajustado por altitud). Muchos termómetros digitales tienen botones de reinicio; termómetros de dial pueden necesitar ajuste de tuerca para asegurar precisión.",
          de: "Thermometer sollten regelmäßig mit Eispunkt-Methode (Eiswasser sollte 0°C anzeigen) oder Siedepunkt-Methode (für Höhe angepasst) kalibriert werden. Viele digitale Thermometer haben Reset-Tasten; Zeiger-Thermometer benötigen möglicherweise Muttern-Anpassung für Genauigkeit.",
          nl: "Thermometers moeten regelmatig worden gekalibreerd met ijspunt methode (ijswater moet 0°C lezen) of kookpunt methode (aangepast voor hoogte). Veel digitale thermometers hebben reset knoppen; wijzer thermometers hebben mogelijk moer aanpassing nodig voor nauwkeurigheid."
        }
      },
      {
        question: {
          en: "What is the role of ATP bioluminescence testing in food safety?",
          es: "¿Cuál es el papel de las pruebas de bioluminiscencia ATP en seguridad alimentaria?",
          de: "Was ist die Rolle von ATP-Biolumineszenz-Tests in der Lebensmittelsicherheit?",
          nl: "Wat is de rol van ATP bioluminescentie testen in voedselveiligheid?"
        },
        options: [
          { en: "Tests food temperature", es: "Prueba temperatura de alimentos", de: "Testet Lebensmitteltemperatur", nl: "Test voedsel temperatuur" },
          { en: "Rapid detection of organic matter (biological residue) indicating cleanliness of surfaces", es: "Detección rápida de materia orgánica (residuo biológico) indicando limpieza de superficies", de: "Schnelle Erkennung organischer Materie (biologische Rückstände), die Sauberkeit von Oberflächen anzeigt", nl: "Snelle detectie van organisch materiaal (biologisch residu) wijzend op netheid van oppervlakken" },
          { en: "Measures food flavor", es: "Mide sabor de alimentos", de: "Misst Lebensmittelgeschmack", nl: "Meet voedsel smaak" },
          { en: "Tests food color", es: "Prueba color de alimentos", de: "Testet Lebensmittelfarbe", nl: "Test voedsel kleur" }
        ],
        correct: 1,
        explanation: {
          en: "ATP (adenosine triphosphate) bioluminescence testing detects organic matter on surfaces in seconds, providing rapid verification of cleaning effectiveness. High ATP readings indicate inadequate cleaning, biofilm presence, or potential contamination sources requiring corrective action.",
          es: "Las pruebas de bioluminiscencia ATP (trifosfato de adenosina) detectan materia orgánica en superficies en segundos, proporcionando verificación rápida de efectividad de limpieza. Lecturas altas de ATP indican limpieza inadecuada, presencia de biopelícula o fuentes potenciales de contaminación que requieren acción correctiva.",
          de: "ATP (Adenosintriphosphat)-Biolumineszenz-Tests erkennen organische Materie auf Oberflächen in Sekunden und bieten schnelle Verifizierung der Reinigungswirksamkeit. Hohe ATP-Werte zeigen unzureichende Reinigung, Biofilm-Präsenz oder potenzielle Kontaminationsquellen an, die Korrekturmaßnahmen erfordern.",
          nl: "ATP (adenosinetrifosfaat) bioluminescentie testen detecteren organisch materiaal op oppervlakken in seconden, snelle verificatie van schoonmaak effectiviteit biedend. Hoge ATP waarden wijzen op onvoldoende reiniging, biofilm aanwezigheid of potentiële besmetting bronnen die corrigerende actie vereisen."
        }
      },
      {
        question: {
          en: "What are the specific risks of bare-hand contact with ready-to-eat foods?",
          es: "¿Cuáles son los riesgos específicos del contacto con manos desnudas con alimentos listos para comer?",
          de: "Was sind die spezifischen Risiken des Barhand-Kontakts mit verzehrfertigen Lebensmitteln?",
          nl: "Wat zijn de specifieke risico's van blote hand contact met kant-en-klaar voedsel?"
        },
        options: [
          { en: "No risks if hands look clean", es: "Sin riesgos si las manos se ven limpias", de: "Keine Risiken, wenn Hände sauber aussehen", nl: "Geen risico's als handen er schoon uitzien" },
          { en: "Transfers Staph aureus, Norovirus, and Hepatitis A even after handwashing", es: "Transfiere Staph aureus, Norovirus y Hepatitis A incluso después de lavado de manos", de: "Überträgt Staph aureus, Norovirus und Hepatitis A selbst nach Händewaschen", nl: "Draagt Staph aureus, Norovirus en Hepatitis A over zelfs na handen wassen" },
          { en: "Improves food safety", es: "Mejora seguridad alimentaria", de: "Verbessert Lebensmittelsicherheit", nl: "Verbetert voedselveiligheid" },
          { en: "Only affects food appearance", es: "Solo afecta apariencia de alimentos", de: "Betrifft nur Lebensmittelaussehen", nl: "Beïnvloedt alleen voedsel uiterlijk" }
        ],
        correct: 1,
        explanation: {
          en: "Bare-hand contact with ready-to-eat foods can transfer pathogens including Staphylococcus aureus (from skin), Norovirus, and Hepatitis A, even with proper handwashing. Many jurisdictions prohibit bare-hand contact, requiring gloves, tongs, or other utensils for RTE foods.",
          es: "El contacto con manos desnudas con alimentos listos para comer puede transferir patógenos incluyendo Staphylococcus aureus (de la piel), Norovirus y Hepatitis A, incluso con lavado apropiado de manos. Muchas jurisdicciones prohíben contacto con manos desnudas, requiriendo guantes, pinzas u otros utensilios para alimentos RTE.",
          de: "Barhand-Kontakt mit verzehrfertigen Lebensmitteln kann Krankheitserreger einschließlich Staphylococcus aureus (von der Haut), Norovirus und Hepatitis A übertragen, selbst bei ordnungsgemäßem Händewaschen. Viele Gerichtsbarkeiten verbieten Barhand-Kontakt und erfordern Handschuhe, Zangen oder andere Utensilien für RTE-Lebensmittel.",
          nl: "Blote hand contact met kant-en-klaar voedsel kan pathogenen overdragen inclusief Staphylococcus aureus (van huid), Norovirus en Hepatitis A, zelfs met goed handen wassen. Veel jurisdicties verbieden blote hand contact, vergen handschoenen, tangen of andere keukengerei voor RTE voedingsmiddelen."
        }
      },
      {
        question: {
          en: "What is the minimum cooking temperature for stuffed meats or stuffing containing meat?",
          es: "¿Cuál es la temperatura mínima de cocción para carnes rellenas o relleno que contiene carne?",
          de: "Was ist die minimale Gartemperatur für gefülltes Fleisch oder Füllung mit Fleisch?",
          nl: "Wat is de minimum kook temperatuur voor gevuld vlees of vulling met vlees?"
        },
        options: [
          { en: "145°F (63°C)", es: "63°C", de: "63°C", nl: "63°C" },
          { en: "155°F (68°C)", es: "68°C", de: "68°C", nl: "68°C" },
          { en: "165°F (74°C)", es: "74°C", de: "74°C", nl: "74°C" },
          { en: "180°F (82°C)", es: "82°C", de: "82°C", nl: "82°C" }
        ],
        correct: 2,
        explanation: {
          en: "Stuffed meats, casseroles, and stuffing containing meat must reach 165°F (74°C) throughout because the stuffing creates additional contamination pathways and the interior provides ideal conditions for bacterial growth. This higher temperature ensures all pathogens are destroyed.",
          es: "Carnes rellenas, guisos y rellenos que contienen carne deben alcanzar 74°C en todo porque el relleno crea vías adicionales de contaminación y el interior proporciona condiciones ideales para crecimiento bacteriano. Esta temperatura más alta asegura que todos los patógenos sean destruidos.",
          de: "Gefülltes Fleisch, Aufläufe und Füllung mit Fleisch müssen durchgehend 74°C erreichen, weil die Füllung zusätzliche Kontaminationswege schafft und das Innere ideale Bedingungen für Bakterienwachstum bietet. Diese höhere Temperatur stellt sicher, dass alle Krankheitserreger zerstört werden.",
          nl: "Gevuld vlees, ovenschotels en vulling met vlees moeten overal 74°C bereiken omdat de vulling extra besmettingswegen creëert en het binnenste ideale condities biedt voor bacteriële groei. Deze hogere temperatuur zorgt ervoor dat alle pathogenen worden vernietigd."
        }
      },
      {
        question: {
          en: "What is the significance of allergen cross-contact in food preparation?",
          es: "¿Cuál es la importancia del contacto cruzado de alérgenos en preparación de alimentos?",
          de: "Was ist die Bedeutung von Allergen-Kreuzkontakt in der Lebensmittelzubereitung?",
          nl: "Wat is de betekenis van allergeen kruiscontact in voedsel bereiding?"
        },
        options: [
          { en: "Allergens are not a safety concern", es: "Los alérgenos no son una preocupación de seguridad", de: "Allergene sind kein Sicherheitsproblem", nl: "Allergenen zijn geen veiligheid zorg" },
          { en: "Trace amounts can trigger severe reactions; requires dedicated equipment and protocols", es: "Cantidades trazas pueden desencadenar reacciones severas; requiere equipo y protocolos dedicados", de: "Spurenmengen können schwere Reaktionen auslösen; erfordert dedizierte Ausrüstung und Protokolle", nl: "Spoorbedragen kunnen ernstige reacties veroorzaken; vereist toegewijde apparatuur en protocollen" },
          { en: "Only whole allergens are dangerous", es: "Solo alérgenos enteros son peligrosos", de: "Nur ganze Allergene sind gefährlich", nl: "Alleen hele allergenen zijn gevaarlijk" },
          { en: "Cooking eliminates allergen risks", es: "Cocinar elimina riesgos de alérgenos", de: "Kochen eliminiert Allergenrisiken", nl: "Koken elimineert allergeen risico's" }
        ],
        correct: 1,
        explanation: {
          en: "Food allergens (Big 8: milk, eggs, fish, shellfish, tree nuts, peanuts, wheat, soybeans) can cause severe anaphylactic reactions even in trace amounts. Cross-contact prevention requires separate equipment, dedicated prep areas, thorough cleaning, and staff training.",
          es: "Los alérgenos alimentarios (Big 8: leche, huevos, pescado, mariscos, nueces de árbol, cacahuates, trigo, soja) pueden causar reacciones anafilácticas severas incluso en cantidades trazas. La prevención de contacto cruzado requiere equipo separado, áreas de preparación dedicadas, limpieza exhaustiva y capacitación del personal.",
          de: "Lebensmittelallergene (Big 8: Milch, Eier, Fisch, Schalentiere, Baumnüsse, Erdnüsse, Weizen, Sojabohnen) können schwere anaphylaktische Reaktionen selbst in Spurenmengen verursachen. Kreuzkontakt-Prävention erfordert separate Ausrüstung, dedizierte Zubereitungsbereiche, gründliche Reinigung und Personalschulung.",
          nl: "Voedselallergenen (Big 8: melk, eieren, vis, schaaldieren, boomnooten, pinda's, tarwe, sojabonen) kunnen ernstige anafylactische reacties veroorzaken zelfs in spoorbedragen. Kruiscontact preventie vereist aparte apparatuur, toegewijde prep gebieden, grondige reiniging en personeel training."
        }
      },
      {
        question: {
          en: "What is the proper procedure for reheating previously cooked foods?",
          es: "¿Cuál es el procedimiento apropiado para recalentar alimentos previamente cocidos?",
          de: "Was ist das richtige Verfahren zum Aufwärmen zuvor gekochter Lebensmittel?",
          nl: "Wat is de juiste procedure voor het opwarmen van eerder gekookt voedsel?"
        },
        options: [
          { en: "Any temperature is acceptable", es: "Cualquier temperatura es aceptable", de: "Jede Temperatur ist akzeptabel", nl: "Elke temperatuur is acceptabel" },
          { en: "Reheat to 165°F (74°C) within 2 hours", es: "Recalentar a 74°C dentro de 2 horas", de: "Auf 74°C innerhalb 2 Stunden aufwärmen", nl: "Opwarmen tot 74°C binnen 2 uur" },
          { en: "Reheating is unnecessary if refrigerated", es: "Recalentar es innecesario si está refrigerado", de: "Aufwärmen ist unnötig wenn gekühlt", nl: "Opwarmen is onnodig als gekoeld" },
          { en: "Room temperature is sufficient", es: "Temperatura ambiente es suficiente", de: "Raumtemperatur ist ausreichend", nl: "Kamertemperatuur is voldoende" }
        ],
        correct: 1,
        explanation: {
          en: "Previously cooked, cooled foods must be rapidly reheated to 165°F (74°C) within 2 hours for hot holding. This temperature kills vegetative cells and ensures food safety. Slow reheating in holding equipment is prohibited—use rapid reheating methods.",
          es: "Alimentos previamente cocidos y enfriados deben recalentarse rápidamente a 74°C dentro de 2 horas para mantener caliente. Esta temperatura mata células vegetativas y asegura seguridad alimentaria. El recalentamiento lento en equipo de mantenimiento está prohibido—usar métodos de recalentamiento rápido.",
          de: "Zuvor gekochte, gekühlte Lebensmittel müssen schnell auf 74°C innerhalb 2 Stunden zum Warmhalten aufgewärmt werden. Diese Temperatur tötet vegetative Zellen und gewährleistet Lebensmittelsicherheit. Langsames Aufwärmen in Warmhaltegeräten ist verboten—schnelle Aufwärm-Methoden verwenden.",
          nl: "Eerder gekookt, gekoeld voedsel moet snel worden opgewarmd tot 74°C binnen 2 uur voor warm houden. Deze temperatuur doodt vegetatieve cellen en verzekert voedselveiligheid. Langzaam opwarmen in warmhoudapparatuur is verboden—gebruik snelle opwarm methoden."
        }
      },
      {
        question: {
          en: "What is the role of variance or HACCP plan in advanced food safety operations?",
          es: "¿Cuál es el papel de la varianza o plan HACCP en operaciones avanzadas de seguridad alimentaria?",
          de: "Was ist die Rolle von Abweichung oder HACCP-Plan in fortgeschrittenen Lebensmittelsicherheitsoperationen?",
          nl: "Wat is de rol van variantie of HACCP plan in geavanceerde voedselveiligheid operaties?"
        },
        options: [
          { en: "Unnecessary paperwork", es: "Papeleo innecesario", de: "Unnötige Bürokratie", nl: "Onnodige papierwerk" },
          { en: "Required documentation for specialized processes (sous vide, curing, smoking) showing pathogen controls", es: "Documentación requerida para procesos especializados (sous vide, curado, ahumado) mostrando controles de patógenos", de: "Erforderliche Dokumentation für spezialisierte Prozesse (Sous Vide, Pökeln, Räuchern), die Pathogenkontrollen zeigt", nl: "Vereiste documentatie voor gespecialiseerde processen (sous vide, pekelen, roken) tonend pathogeen controles" },
          { en: "Marketing material only", es: "Solo material de marketing", de: "Nur Marketingmaterial", nl: "Alleen marketing materiaal" },
          { en: "Optional suggestion", es: "Sugerencia opcional", de: "Optionaler Vorschlag", nl: "Optionele suggestie" }
        ],
        correct: 1,
        explanation: {
          en: "Variance or HACCP plans are required by health departments for specialized food processes that deviate from standard procedures (sous vide, curing, reduced-oxygen packaging). These plans document critical control points, monitoring procedures, and corrective actions to ensure pathogen control.",
          es: "Los planes de varianza o HACCP son requeridos por departamentos de salud para procesos especializados de alimentos que se desvían de procedimientos estándar (sous vide, curado, empaque con oxígeno reducido). Estos planes documentan puntos críticos de control, procedimientos de monitoreo y acciones correctivas para asegurar control de patógenos.",
          de: "Abweichungs- oder HACCP-Pläne werden von Gesundheitsbehörden für spezialisierte Lebensmittelprozesse verlangt, die von Standardverfahren abweichen (Sous Vide, Pökeln, Verpackung mit reduziertem Sauerstoff). Diese Pläne dokumentieren kritische Kontrollpunkte, Überwachungsverfahren und Korrekturmaßnahmen zur Gewährleistung der Pathogenkontrolle.",
          nl: "Variantie of HACCP plannen zijn vereist door gezondheidsafdelingen voor gespecialiseerde voedselprocessen die afwijken van standaard procedures (sous vide, pekelen, verminderd-zuurstof verpakking). Deze plannen documenteren kritieke controlepunten, monitoring procedures en corrigerende acties om pathogeen controle te verzekeren."
        }
      },
      {
        question: {
          en: "What is the significance of critical limit violations in HACCP systems?",
          es: "¿Cuál es la importancia de las violaciones de límites críticos en sistemas HACCP?",
          de: "Was ist die Bedeutung von kritischen Grenzverletzungen in HACCP-Systemen?",
          nl: "Wat is de betekenis van kritieke limiet overtredingen in HACCP systemen?"
        },
        options: [
          { en: "Can be ignored", es: "Pueden ignorarse", de: "Können ignoriert werden", nl: "Kunnen worden genegeerd" },
          { en: "Trigger mandatory corrective actions, product evaluation, and documentation", es: "Desencadenan acciones correctivas obligatorias, evaluación de productos y documentación", de: "Lösen obligatorische Korrekturmaßnahmen, Produktbewertung und Dokumentation aus", nl: "Activeren verplichte corrigerende acties, product evaluatie en documentatie" },
          { en: "Are acceptable occasionally", es: "Son aceptables ocasionalmente", de: "Sind gelegentlich akzeptabel", nl: "Zijn af en toe acceptabel" },
          { en: "Only matter for large operations", es: "Solo importan para operaciones grandes", de: "Wichtig nur für große Betriebe", nl: "Doen er alleen toe voor grote operaties" }
        ],
        correct: 1,
        explanation: {
          en: "Critical limit violations (temperature, time, pH failures) in HACCP systems indicate potential food safety hazards requiring immediate corrective action: stopping production, evaluating affected product safety, implementing corrections, and documenting all actions taken for regulatory review.",
          es: "Las violaciones de límites críticos (fallas de temperatura, tiempo, pH) en sistemas HACCP indican peligros potenciales de seguridad alimentaria que requieren acción correctiva inmediata: detener producción, evaluar seguridad del producto afectado, implementar correcciones y documentar todas las acciones tomadas para revisión regulatoria.",
          de: "Kritische Grenzverletzungen (Temperatur-, Zeit-, pH-Ausfälle) in HACCP-Systemen zeigen potenzielle Lebensmittelsicherheitsgefahren an, die sofortige Korrekturmaßnahmen erfordern: Produktionsstopp, Bewertung der Sicherheit betroffener Produkte, Umsetzung von Korrekturen und Dokumentation aller Maßnahmen für behördliche Prüfung.",
          nl: "Kritieke limiet overtredingen (temperatuur, tijd, pH mislukkingen) in HACCP systemen wijzen op potentiële voedselveiligheid gevaren die onmiddellijke corrigerende actie vereisen: productie stoppen, getroffen product veiligheid evalueren, correcties implementeren en alle genomen acties documenteren voor regelgevende review."
        }
      },
      {
        question: {
          en: "What is the minimum internal cooking temperature for whole poultry?",
          es: "¿Cuál es la temperatura interna mínima de cocción para aves enteras?",
          de: "Was ist die minimale Innentemperatur zum Garen von ganzem Geflügel?",
          nl: "Wat is de minimum interne kook temperatuur voor heel gevogelte?"
        },
        options: [
          { en: "145°F (63°C)", es: "63°C", de: "63°C", nl: "63°C" },
          { en: "155°F (68°C)", es: "68°C", de: "68°C", nl: "68°C" },
          { en: "165°F (74°C)", es: "74°C", de: "74°C", nl: "74°C" },
          { en: "180°F (82°C)", es: "82°C", de: "82°C", nl: "82°C" }
        ],
        correct: 2,
        explanation: {
          en: "Whole poultry (chicken, turkey, duck) must reach 165°F (74°C) throughout to destroy Salmonella and Campylobacter. Check temperature in the innermost part of the thigh and wing, and the thickest part of the breast.",
          es: "Las aves enteras (pollo, pavo, pato) deben alcanzar 74°C en todo para destruir Salmonella y Campylobacter. Verificar temperatura en la parte más interna del muslo y ala, y la parte más gruesa de la pechuga.",
          de: "Ganzes Geflügel (Huhn, Truthahn, Ente) muss durchgehend 74°C erreichen, um Salmonellen und Campylobacter zu zerstören. Temperatur im innersten Teil des Oberschenkels und Flügels und im dicksten Teil der Brust prüfen.",
          nl: "Heel gevogelte (kip, kalkoen, eend) moet overal 74°C bereiken om Salmonella en Campylobacter te vernietigen. Temperatuur controleren in het binnenste deel van de dij en vleugel, en het dikste deel van de borst."
        }
      },
      {
        question: {
          en: "What is the correct procedure for handling a food recall?",
          es: "¿Cuál es el procedimiento correcto para manejar un retiro de alimentos?",
          de: "Was ist das korrekte Verfahren zur Handhabung eines Lebensmittelrückrufs?",
          nl: "Wat is de juiste procedure voor het behandelen van een voedsel terugroeping?"
        },
        options: [
          { en: "Continue selling the product", es: "Continuar vendiendo el producto", de: "Weiter das Produkt verkaufen", nl: "Blijven het product verkopen" },
          { en: "Immediately remove from service, segregate, label, document, and follow health department instructions", es: "Inmediatamente retirar del servicio, segregar, etiquetar, documentar y seguir instrucciones del departamento de salud", de: "Sofort aus dem Service entfernen, trennen, kennzeichnen, dokumentieren und Gesundheitsamtsanweisungen folgen", nl: "Onmiddellijk verwijderen uit service, segregeren, labelen, documenteren en gezondheidsafdeling instructies volgen" },
          { en: "Wait for customer complaints", es: "Esperar quejas de clientes", de: "Auf Kundenbeschwerden warten", nl: "Wachten op klantklachten" },
          { en: "Offer at discount", es: "Ofrecer con descuento", de: "Mit Rabatt anbieten", nl: "Aanbieden met korting" }
        ],
        correct: 1,
        explanation: {
          en: "Food recalls require immediate action: stop using/selling the product, remove from service, segregate recalled items, clearly label them, document all actions, notify customers if necessary, and follow health department disposal instructions to prevent foodborne illness.",
          es: "Los retiros de alimentos requieren acción inmediata: detener uso/venta del producto, retirar del servicio, segregar artículos retirados, etiquetarlos claramente, documentar todas las acciones, notificar a clientes si es necesario y seguir instrucciones de disposición del departamento de salud para prevenir enfermedades transmitidas por alimentos.",
          de: "Lebensmittelrückrufe erfordern sofortiges Handeln: Verwendung/Verkauf des Produkts stoppen, aus dem Service entfernen, zurückgerufene Artikel trennen, klar kennzeichnen, alle Maßnahmen dokumentieren, Kunden falls nötig benachrichtigen und Gesundheitsamt-Entsorgungsanweisungen folgen, um lebensmittelbedingte Krankheiten zu verhindern.",
          nl: "Voedsel terugroepingen vereisen onmiddellijke actie: stoppen gebruik/verkoop van het product, verwijderen uit service, teruggroepen items segregeren, duidelijk labelen, alle acties documenteren, klanten indien nodig informeren en gezondheidsafdeling weggooi instructies volgen om voedselgerelateerde ziekten te voorkomen."
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