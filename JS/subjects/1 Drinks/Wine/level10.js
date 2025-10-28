// Quiz - Level 10: Drinken - Wijn (Wijnexpert niveau)

(function() {
  const level10 = {
    name: {
      en: "Wine Expert Level",
      es: "Nivel de Experto en Vinos",
      de: "Weinexperten-Niveau",
      nl: "Wijnexpert Niveau"
    },
    questions: [
      {
        question: {
          en: "What is the precise molecular mechanism behind 'reduction' defects in wine?",
          es: "¿Cuál es el mecanismo molecular preciso detrás de los defectos de 'reducción' en el vino?",
          de: "Was ist der präzise molekulare Mechanismus hinter 'Reduktions'-Fehlern im Wein?",
          nl: "Wat is het precieze moleculaire mechanisme achter 'reductie' defecten in wijn?"
        },
        options: [
          {
            en: "Sulfur compound formation from amino acid degradation",
            es: "Formación de compuestos de azufre por degradación de aminoácidos",
            de: "Schwefelverbindungsbildung durch Aminosäure-Abbau",
            nl: "Zwavelverbinding vorming door aminozuur afbraak"
          },
          {
            en: "Thiols oxidation under anaerobic conditions",
            es: "Oxidación de tioles bajo condiciones anaeróbicas",
            de: "Thiol-Oxidation unter anaeroben Bedingungen",
            nl: "Thiolen oxidatie onder anaerobe omstandigheden"
          },
          {
            en: "Sulfite reduction to hydrogen sulfide via yeast metabolism",
            es: "Reducción de sulfito a sulfuro de hidrógeno via metabolismo de levadura",
            de: "Sulfit-Reduktion zu Schwefelwasserstoff über Hefestoffwechsel",
            nl: "Sulfiet reductie naar waterstofsulfide via gistmetabolisme"
          },
          {
            en: "Mercaptan synthesis from methionine breakdown",
            es: "Síntesis de mercaptanos por descomposición de metionina",
            de: "Mercaptan-Synthese durch Methionin-Abbau",
            nl: "Mercaptan synthese door methionine afbraak"
          }
        ],
        correct: 2,
        explanation: {
          en: "Reduction defects occur when yeast reduces sulfites to hydrogen sulfide under anaerobic conditions, creating rotten egg aromas that can be prevented by proper oxygen management.",
          es: "Los defectos de reducción ocurren cuando la levadura reduce sulfitos a sulfuro de hidrógeno bajo condiciones anaeróbicas, creando aromas a huevo podrido que pueden prevenirse con manejo adecuado del oxígeno.",
          de: "Reduktionsfehler entstehen, wenn Hefe Sulfite unter anaeroben Bedingungen zu Schwefelwasserstoff reduziert, wodurch faule Eier-Aromen entstehen, die durch ordnungsgemäße Sauerstoffverwaltung verhindert werden können.",
          nl: "Reductie defecten ontstaan wanneer gist sulfieten reduceert naar waterstofsulfide onder anaerobe omstandigheden, wat rotte eieren aroma's creëert die kunnen worden voorkomen door juist zuurstofbeheer."
        }
      },
      {
        question: {
          en: "What is the optimal tirage pressure for developing finest bubbles in Champagne?",
          es: "¿Cuál es la presión óptima de tiraje para desarrollar las burbujas más finas en Champagne?",
          de: "Was ist der optimale Tirage-Druck für die Entwicklung feinster Blasen in Champagner?",
          nl: "Wat is de optimale tirage druk voor het ontwikkelen van de fijnste bubbels in Champagne?"
        },
        options: [
          {
            en: "4.5-5.0 atmospheres",
            es: "4.5-5.0 atmósferas",
            de: "4.5-5.0 Atmosphären",
            nl: "4.5-5.0 atmosfeer"
          },
          {
            en: "5.5-6.0 atmospheres",
            es: "5.5-6.0 atmósferas",
            de: "5.5-6.0 Atmosphären",
            nl: "5.5-6.0 atmosfeer"
          },
          {
            en: "6.0-6.5 atmospheres",
            es: "6.0-6.5 atmósferas",
            de: "6.0-6.5 Atmosphären",
            nl: "6.0-6.5 atmosfeer"
          },
          {
            en: "7.0+ atmospheres",
            es: "7.0+ atmósferas",
            de: "7.0+ Atmosphären",
            nl: "7.0+ atmosfeer"
          }
        ],
        correct: 2,
        explanation: {
          en: "Optimal tirage pressure of 6.0-6.5 atmospheres creates the finest, most persistent bubbles through controlled CO2 dissolution and precise nucleation sites during riddling.",
          es: "La presión óptima de tiraje de 6.0-6.5 atmósferas crea las burbujas más finas y persistentes a través de disolución controlada de CO2 y sitios de nucleación precisos durante el removido.",
          de: "Optimaler Tirage-Druck von 6.0-6.5 Atmosphären erzeugt die feinsten, beständigsten Blasen durch kontrollierte CO2-Lösung und präzise Nukleationsstellen während des Rüttelns.",
          nl: "Optimale tirage druk van 6.0-6.5 atmosfeer creëert de fijnste, meest persistente bubbels door gecontroleerde CO2 oplossing en precieze nucleatie plaatsen tijdens riddling."
        }
      },
      {
        question: {
          en: "Which specific vineyard parcel produces Domaine de la Romanée-Conti's most sought-after wine?",
          es: "¿Qué parcela específica de viñedo produce el vino más codiciado de Domaine de la Romanée-Conti?",
          de: "Welche spezifische Weinbergsparzelle produziert den begehrtesten Wein der Domaine de la Romanée-Conti?",
          nl: "Welk specifieke wijngaard perceel produceert Domaine de la Romanée-Conti's meest gewilde wijn?"
        },
        options: [
          {
            en: "La Tâche monopole",
            es: "La Tâche monopole",
            de: "La Tâche Monopollage",
            nl: "La Tâche monopole"
          },
          {
            en: "Romanée-Conti monopole",
            es: "Romanée-Conti monopole",
            de: "Romanée-Conti Monopollage",
            nl: "Romanée-Conti monopole"
          },
          {
            en: "Richebourg vineyard",
            es: "Viñedo Richebourg",
            de: "Richebourg Weinberg",
            nl: "Richebourg wijngaard"
          },
          {
            en: "Grands-Échézeaux plot",
            es: "Parcela Grands-Échézeaux",
            de: "Grands-Échézeaux Parzelle",
            nl: "Grands-Échézeaux perceel"
          }
        ],
        correct: 1,
        explanation: {
          en: "The Romanée-Conti monopole vineyard (1.81 hectares) produces DRC's most coveted wine, with production currently halted for replanting, making existing bottles extraordinarily rare.",
          es: "El viñedo monopole Romanée-Conti (1.81 hectáreas) produce el vino más codiciado de DRC, con producción actualmente detenida para replantación, haciendo las botellas existentes extraordinariamente raras.",
          de: "Der Romanée-Conti Monopol-Weinberg (1,81 Hektar) produziert DRCs begehrtesten Wein, wobei die Produktion derzeit für Neupflanzung gestoppt ist, was bestehende Flaschen außerordentlich selten macht.",
          nl: "De Romanée-Conti monopole wijngaard (1,81 hectare) produceert DRC's meest gewilde wijn, met productie momenteel gestopt voor herplanting, waardoor bestaande flessen buitengewoon zeldzaam zijn."
        }
      },
      {
        question: {
          en: "What is the precise carbonic maceration temperature range for optimal anthocyanin extraction in Beaujolais Cru?",
          es: "¿Cuál es el rango preciso de temperatura de maceración carbónica para extracción óptima de antocianinas en Beaujolais Cru?",
          de: "Was ist der präzise Temperaturbereich der Kohlensäure-Mazeration für optimale Anthocyan-Extraktion in Beaujolais Cru?",
          nl: "Wat is het precieze koolzuurmaceratie temperatuurbereik voor optimale anthocyanine extractie in Beaujolais Cru?"
        },
        options: [
          {
            en: "28-30°C",
            es: "28-30°C",
            de: "28-30°C",
            nl: "28-30°C"
          },
          {
            en: "30-32°C",
            es: "30-32°C",
            de: "30-32°C",
            nl: "30-32°C"
          },
          {
            en: "32-35°C",
            es: "32-35°C",
            de: "32-35°C",
            nl: "32-35°C"
          },
          {
            en: "35-38°C",
            es: "35-38°C",
            de: "35-38°C",
            nl: "35-38°C"
          }
        ],
        correct: 2,
        explanation: {
          en: "Carbonic maceration at 32-35°C optimizes anthocyanin extraction from Gamay skins while maintaining the fresh, fruity character essential to Beaujolais Cru expression.",
          es: "La maceración carbónica a 32-35°C optimiza la extracción de antocianinas de las pieles de Gamay mientras mantiene el carácter fresco y afrutado esencial para la expresión de Beaujolais Cru.",
          de: "Kohlensäure-Mazeration bei 32-35°C optimiert die Anthocyan-Extraktion aus Gamay-Schalen, während der frische, fruchtige Charakter erhalten bleibt, der für Beaujolais Cru-Ausdruck wesentlich ist.",
          nl: "Koolzuurmaceratie bij 32-35°C optimaliseert anthocyanine extractie uit Gamay schillen terwijl het frisse, fruitige karakter behouden blijft dat essentieel is voor Beaujolais Cru expressie."
        }
      },
      {
        question: {
          en: "Which molecular compound gives aged Riesling its distinctive 'petrol' character?",
          es: "¿Qué compuesto molecular da al Riesling envejecido su carácter distintivo a 'petróleo'?",
          de: "Welche molekulare Verbindung verleiht gereiftem Riesling seinen charakteristischen 'Benzin'-Charakter?",
          nl: "Welke moleculaire verbinding geeft gerijpte Riesling zijn onderscheidende 'benzine' karakter?"
        },
        options: [
          {
            en: "1,1,6-trimethyl-1,2-dihydronaphthalene (TDN)",
            es: "1,1,6-trimetil-1,2-dihidronaftaleno (TDN)",
            de: "1,1,6-Trimethyl-1,2-dihydronaphthalin (TDN)",
            nl: "1,1,6-trimethyl-1,2-dihydronaftaleen (TDN)"
          },
          {
            en: "2-phenylethanol derivatives",
            es: "Derivados de 2-feniletanol",
            de: "2-Phenylethanol-Derivate",
            nl: "2-fenylethanol derivaten"
          },
          {
            en: "Monoterpene oxidation products",
            es: "Productos de oxidación de monoterpenos",
            de: "Monoterpen-Oxidationsprodukte",
            nl: "Monoterpeen oxidatie producten"
          },
          {
            en: "Volatile phenol compounds",
            es: "Compuestos fenólicos volátiles",
            de: "Flüchtige Phenolverbindungen",
            nl: "Vluchtige fenol verbindingen"
          }
        ],
        correct: 0,
        explanation: {
          en: "TDN (1,1,6-trimethyl-1,2-dihydronaphthalene) is formed from carotenoid degradation during Riesling aging and creates the distinctive 'petrol' or 'kerosene' aroma prized in mature German Rieslings.",
          es: "TDN (1,1,6-trimetil-1,2-dihidronaftaleno) se forma por degradación de carotenoides durante el envejecimiento del Riesling y crea el aroma distintivo a 'petróleo' o 'queroseno' valorado en Rieslings alemanes maduros.",
          de: "TDN (1,1,6-Trimethyl-1,2-dihydronaphthalin) entsteht durch Carotinoid-Abbau während der Riesling-Reifung und erzeugt das charakteristische 'Benzin'- oder 'Kerosin'-Aroma, das in reifen deutschen Rieslingen geschätzt wird.",
          nl: "TDN (1,1,6-trimethyl-1,2-dihydronaftaleen) wordt gevormd door carotenoïde afbraak tijdens Riesling rijping en creëert het onderscheidende 'benzine' of 'kerosine' aroma dat gewaardeerd wordt in rijpe Duitse Rieslings."
        }
      },
      {
        question: {
          en: "What is the traditional élevage period for Châteauneuf-du-Pape before release?",
          es: "¿Cuál es el período tradicional de élevage para Châteauneuf-du-Pape antes del lanzamiento?",
          de: "Was ist die traditionelle Élevage-Periode für Châteauneuf-du-Pape vor der Freigabe?",
          nl: "Wat is de traditionele élevage periode voor Châteauneuf-du-Pape voor release?"
        },
        options: [
          {
            en: "Minimum 30 months from harvest",
            es: "Mínimo 30 meses desde la cosecha",
            de: "Mindestens 30 Monate ab Ernte",
            nl: "Minimum 30 maanden vanaf oogst"
          },
          {
            en: "Minimum 24 months from harvest",
            es: "Mínimo 24 meses desde la cosecha",
            de: "Mindestens 24 Monate ab Ernte",
            nl: "Minimum 24 maanden vanaf oogst"
          },
          {
            en: "Minimum 18 months from harvest",
            es: "Mínimo 18 meses desde la cosecha",
            de: "Mindestens 18 Monate ab Ernte",
            nl: "Minimum 18 maanden vanaf oogst"
          },
          {
            en: "Minimum 12 months from harvest",
            es: "Mínimo 12 meses desde la cosecha",
            de: "Mindestens 12 Monate ab Ernte",
            nl: "Minimum 12 maanden vanaf oogst"
          }
        ],
        correct: 0,
        explanation: {
          en: "Châteauneuf-du-Pape AOC regulations require minimum 30 months élevage from harvest before release, allowing proper integration of the complex 13-variety blend and development of tertiary character.",
          es: "Las regulaciones AOC de Châteauneuf-du-Pape requieren mínimo 30 meses de élevage desde la cosecha antes del lanzamiento, permitiendo integración adecuada de la mezcla compleja de 13 variedades y desarrollo de carácter terciario.",
          de: "Châteauneuf-du-Pape AOC-Bestimmungen erfordern mindestens 30 Monate Élevage ab Ernte vor Freigabe, um ordnungsgemäße Integration der komplexen 13-Sorten-Mischung und Entwicklung tertiären Charakters zu ermöglichen.",
          nl: "Châteauneuf-du-Pape AOC regulaties vereisen minimum 30 maanden élevage vanaf oogst voor release, wat juiste integratie van de complexe 13-variëteit blend en ontwikkeling van tertiair karakter mogelijk maakt."
        }
      },
      {
        question: {
          en: "What is the traditional grape selection ratio for premier Tokaji Aszú 6 puttonyos?",
          es: "¿Cuál es la proporción tradicional de selección de uva para Tokaji Aszú 6 puttonyos premier?",
          de: "Was ist das traditionelle Traubenauswahlverhältnis für Premier Tokaji Aszú 6 Puttonyos?",
          nl: "Wat is de traditionele druivenselectie verhouding voor premier Tokaji Aszú 6 puttonyos?"
        },
        options: [
          {
            en: "60% botrytis grapes, 40% healthy grapes",
            es: "60% uvas con botrytis, 40% uvas sanas",
            de: "60% Botrytis-Trauben, 40% gesunde Trauben",
            nl: "60% botrytis druiven, 40% gezonde druiven"
          },
          {
            en: "70% botrytis grapes, 30% healthy grapes",
            es: "70% uvas con botrytis, 40% uvas sanas",
            de: "70% Botrytis-Trauben, 30% gesunde Trauben",
            nl: "70% botrytis druiven, 30% gezonde druiven"
          },
          {
            en: "80% botrytis grapes, 20% healthy grapes",
            es: "80% uvas con botrytis, 20% uvas sanas",
            de: "80% Botrytis-Trauben, 20% gesunde Trauben",
            nl: "80% botrytis druiven, 20% gezonde druiven"
          },
          {
            en: "90% botrytis grapes, 10% healthy grapes",
            es: "90% uvas con botrytis, 10% uvas sanas",
            de: "90% Botrytis-Trauben, 10% gesunde Trauben",
            nl: "90% botrytis druiven, 10% gezonde druiven"
          }
        ],
        correct: 2,
        explanation: {
          en: "Tokaji Aszú 6 puttonyos traditionally uses 80% botrytis-affected grapes with 20% healthy grapes, creating the perfect balance of concentration and acidity for this legendary dessert wine.",
          es: "Tokaji Aszú 6 puttonyos tradicionalmente usa 80% uvas afectadas por botrytis con 20% uvas sanas, creando el equilibrio perfecto de concentración y acidez para este vino de postre legendario.",
          de: "Tokaji Aszú 6 Puttonyos verwendet traditionell 80% Botrytis-befallene Trauben mit 20% gesunden Trauben und schafft das perfekte Gleichgewicht von Konzentration und Säure für diesen legendären Dessertwein.",
          nl: "Tokaji Aszú 6 puttonyos gebruikt traditioneel 80% botrytis-aangetaste druiven met 20% gezonde druiven, wat de perfecte balans van concentratie en zuren creëert voor deze legendarische dessertswijn."
        }
      },
      {
        question: {
          en: "Which specific microorganism is responsible for flor development in Jerez aging?",
          es: "¿Qué microorganismo específico es responsable del desarrollo de flor en el envejecimiento de Jerez?",
          de: "Welcher spezifische Mikroorganismus ist für die Flor-Entwicklung in der Jerez-Reifung verantwortlich?",
          nl: "Welke specifieke microorganisme is verantwoordelijk voor flor ontwikkeling in Jerez rijping?"
        },
        options: [
          {
            en: "Saccharomyces cerevisiae var. capensis",
            es: "Saccharomyces cerevisiae var. capensis",
            de: "Saccharomyces cerevisiae var. capensis",
            nl: "Saccharomyces cerevisiae var. capensis"
          },
          {
            en: "Saccharomyces rosei",
            es: "Saccharomyces rosei",
            de: "Saccharomyces rosei",
            nl: "Saccharomyces rosei"
          },
          {
            en: "Saccharomyces bayanus",
            es: "Saccharomyces bayanus",
            de: "Saccharomyces bayanus",
            nl: "Saccharomyces bayanus"
          },
          {
            en: "Saccharomyces beticus",
            es: "Saccharomyces beticus",
            de: "Saccharomyces beticus",
            nl: "Saccharomyces beticus"
          }
        ],
        correct: 3,
        explanation: {
          en: "Saccharomyces beticus is the specific yeast strain that forms flor in Jerez, creating the protective film that prevents oxidation and develops the characteristic nutty, saline flavors in Fino and Manzanilla sherries.",
          es: "Saccharomyces beticus es la cepa específica de levadura que forma flor en Jerez, creando la película protectora que previene oxidación y desarrolla los sabores característicos a nuez y salinos en jerez Fino y Manzanilla.",
          de: "Saccharomyces beticus ist der spezifische Hefestamm, der Flor in Jerez bildet und den schützenden Film schafft, der Oxidation verhindert und die charakteristischen nussigen, salzigen Aromen in Fino- und Manzanilla-Sherrys entwickelt.",
          nl: "Saccharomyces beticus is de specifieke giststam die flor vormt in Jerez, waarbij de beschermende film wordt gecreëerd die oxidatie voorkomt en de karakteristieke nootachtige, zoute smaken ontwikkelt in Fino en Manzanilla sherry's."
        }
      },
      {
        question: {
          en: "What is the optimal pH range for initiating malolactic fermentation in premium Chardonnay?",
          es: "¿Cuál es el rango óptimo de pH para iniciar fermentación maloláctica en Chardonnay premium?",
          de: "Was ist der optimale pH-Bereich für die Einleitung der Milchsäuregärung in Premium-Chardonnay?",
          nl: "Wat is het optimale pH bereik voor het starten van malolactische fermentatie in premium Chardonnay?"
        },
        options: [
          {
            en: "3.0-3.2",
            es: "3.0-3.2",
            de: "3.0-3.2",
            nl: "3.0-3.2"
          },
          {
            en: "3.2-3.4",
            es: "3.2-3.4",
            de: "3.2-3.4",
            nl: "3.2-3.4"
          },
          {
            en: "3.4-3.6",
            es: "3.4-3.6",
            de: "3.4-3.6",
            nl: "3.4-3.6"
          },
          {
            en: "3.6-3.8",
            es: "3.6-3.8",
            de: "3.6-3.8",
            nl: "3.6-3.8"
          }
        ],
        correct: 1,
        explanation: {
          en: "pH 3.2-3.4 is optimal for MLF initiation in premium Chardonnay, providing sufficient bacterial activity while maintaining wine stability and preventing excessive acid reduction.",
          es: "pH 3.2-3.4 es óptimo para iniciar FML en Chardonnay premium, proporcionando actividad bacteriana suficiente mientras mantiene estabilidad del vino y previene reducción excesiva de ácido.",
          de: "pH 3.2-3.4 ist optimal für MLF-Einleitung in Premium-Chardonnay und bietet ausreichende Bakterienaktivität bei gleichzeitiger Wahrung der Weinstabilität und Verhinderung übermäßiger Säurereduktion.",
          nl: "pH 3.2-3.4 is optimaal voor MLF initiatie in premium Chardonnay, wat voldoende bacteriële activiteit biedt terwijl wijnstabiliteit wordt behouden en excessieve zuurreductie wordt voorkomen."
        }
      },
      {
        question: {
          en: "Which specific soil layer depth is most important for Grand Cru Burgundy terroir expression?",
          es: "¿Qué profundidad específica de capa de suelo es más importante para la expresión del terroir Grand Cru de Borgoña?",
          de: "Welche spezifische Bodenschichttiefe ist am wichtigsten für Grand Cru Burgund Terroir-Ausdruck?",
          nl: "Welke specifieke bodemlaag diepte is het belangrijkst voor Grand Cru Bourgogne terroir expressie?"
        },
        options: [
          {
            en: "Surface layer 0-30cm",
            es: "Capa superficial 0-30cm",
            de: "Oberflächenschicht 0-30cm",
            nl: "Oppervlaktelaag 0-30cm"
          },
          {
            en: "Subsoil layer 30-60cm",
            es: "Capa del subsuelo 30-60cm",
            de: "Unterbodenschicht 30-60cm",
            nl: "Ondergrond laag 30-60cm"
          },
          {
            en: "Deep layer 60-100cm",
            es: "Capa profunda 60-100cm",
            de: "Tiefe Schicht 60-100cm",
            nl: "Diepe laag 60-100cm"
          },
          {
            en: "Bedrock interface 100cm+",
            es: "Interfaz rocosa 100cm+",
            de: "Gesteinsschnittstelle 100cm+",
            nl: "Rotsmassa interface 100cm+"
          }
        ],
        correct: 1,
        explanation: {
          en: "The subsoil layer at 30-60cm depth is most crucial for Grand Cru Burgundy terroir, where vine roots access the specific limestone-marl composition that defines each climat's mineral signature.",
          es: "La capa del subsuelo a 30-60cm de profundidad es más crucial para el terroir Grand Cru de Borgoña, donde las raíces de la vid acceden a la composición específica de caliza-marga que define la firma mineral de cada climat.",
          de: "Die Unterbodenschicht in 30-60cm Tiefe ist am wichtigsten für Grand Cru Burgund Terroir, wo Rebwurzeln auf die spezifische Kalkstein-Mergel-Zusammensetzung zugreifen, die jedes Climat's Mineralsignatur definiert.",
          nl: "De ondergrond laag op 30-60cm diepte is het meest cruciaal voor Grand Cru Bourgogne terroir, waar wijnstokwortels toegang hebben tot de specifieke kalksteen-mergel samenstelling die elke climat's minerale signatuur definieert."
        }
      },
            {
            "question": {
                  "en": "What is 'pigeage'?",
                  "es": "¿Qué es 'pigeage'?",
                  "de": "Was ist 'Pigeage'?",
                  "nl": "Wat is 'pigeage'?"
            },
            "options": [
                  {
                        "en": "Punching down the cap during fermentation",
                        "es": "Empujar el sombrero durante fermentación",
                        "de": "Den Tresterhut während Gärung unterstoßen",
                        "nl": "De drijflaag tijdens fermentatie naar beneden duwen"
                  },
                  {
                        "en": "Crushing grapes by foot",
                        "es": "Aplastar uvas con pies",
                        "de": "Trauben mit Füßen zerquetschen",
                        "nl": "Druiven met voeten persen"
                  },
                  {
                        "en": "Filtering wine",
                        "es": "Filtrar vino",
                        "de": "Wein filtern",
                        "nl": "Wijn filteren"
                  },
                  {
                        "en": "Corking bottles",
                        "es": "Encorchar botellas",
                        "de": "Flaschen verkorken",
                        "nl": "Flessen kurken"
                  }
            ],
            "correct": 0,
            "explanation": {
                  "en": "Pigeage (punch-down) pushes the floating cap of grape skins down during fermentation for even extraction.",
                  "es": "Pigeage (empuje) empuja el sombrero flotante de pieles de uva hacia abajo durante la fermentación para extracción uniforme.",
                  "de": "Pigeage (Unterstoßen) drückt den schwimmenden Tresterhut während der Gärung nach unten für gleichmäßige Extraktion.",
                  "nl": "Pigeage (naar beneden duwen) duwt de drijvende drijflaag van druivenschillen tijdens fermentatie naar beneden voor gelijkmatige extractie."
            }
      },
            {
            "question": {
                  "en": "What is carbonic maceration?",
                  "es": "¿Qué es la maceración carbónica?",
                  "de": "Was ist Kohlensäuremaischung?",
                  "nl": "Wat is koolzuurmaceratie?"
            },
            "options": [
                  {
                        "en": "Whole berry fermentation in CO2, famous in Beaujolais",
                        "es": "Fermentación de bayas enteras en CO2, famosa en Beaujolais",
                        "de": "Ganztraubengärung in CO2, berühmt in Beaujolais",
                        "nl": "Hele bes fermentatie in CO2, beroemd in Beaujolais"
                  },
                  {
                        "en": "Adding carbonation to wine",
                        "es": "Agregar carbonatación al vino",
                        "de": "Kohlensäure zum Wein hinzufügen",
                        "nl": "Koolzuur aan wijn toevoegen"
                  },
                  {
                        "en": "Extended skin contact",
                        "es": "Contacto prolongado de pieles",
                        "de": "Verlängerter Schalenkontakt",
                        "nl": "Verlengd schilcontact"
                  },
                  {
                        "en": "Cold soaking grapes",
                        "es": "Remojar uvas en frío",
                        "de": "Trauben kalt einweichen",
                        "nl": "Druiven koud weken"
                  }
            ],
            "correct": 0,
            "explanation": {
                  "en": "Carbonic maceration ferments whole uncrushed grapes in CO2, creating fruity low-tannin wines. Beaujolais Nouveau is the classic example.",
                  "es": "La maceración carbónica fermenta uvas enteras sin aplastar en CO2, creando vinos afrutados de taninos bajos. Beaujolais Nouveau es el ejemplo clásico.",
                  "de": "Kohlensäuremaischung fermentiert ganze ungequetschte Trauben in CO2, was fruchtige taninarme Weine schafft. Beaujolais Nouveau ist das klassische Beispiel.",
                  "nl": "Koolzuurmaceratie fermenteert hele ongekneusd druiven in CO2, wat fruitige lage-tannine wijnen creëert. Beaujolais Nouveau is het klassieke voorbeeld."
            }
      },
            {
            "question": {
                  "en": "What is the solera system?",
                  "es": "¿Qué es el sistema solera?",
                  "de": "Was ist das Solera-System?",
                  "nl": "Wat is het solera systeem?"
            },
            "options": [
                  {
                        "en": "Fractional blending system for Sherry",
                        "es": "Sistema de mezcla fraccionada para Jerez",
                        "de": "Fraktionales Mischsystem für Sherry",
                        "nl": "Fractioneel mengsysteem voor Sherry"
                  },
                  {
                        "en": "Vineyard irrigation",
                        "es": "Riego de viñedo",
                        "de": "Weinbergbewässerung",
                        "nl": "Wijngaard irrigatie"
                  },
                  {
                        "en": "Grape pressing technique",
                        "es": "Técnica de prensado",
                        "de": "Pressmethode",
                        "nl": "Perstechniek"
                  },
                  {
                        "en": "Barrel manufacturing",
                        "es": "Fabricación de barricas",
                        "de": "Fassherstellung",
                        "nl": "Vatproductie"
                  }
            ],
            "correct": 0,
            "explanation": {
                  "en": "The solera system fractionally blends younger and older Sherry from stacked barrels, creating consistent flavor profiles.",
                  "es": "El sistema solera mezcla fraccionalmente Jerez más joven y más viejo de barricas apiladas, creando perfiles de sabor consistentes.",
                  "de": "Das Solera-System mischt fraktional jüngeren und älteren Sherry aus gestapelten Fässern und schafft konsistente Geschmacksprofile.",
                  "nl": "Het solera systeem mengt fractioneel jongere en oudere Sherry uit gestapelde vaten, wat consistente smaakprofielen creëert."
            }
      },
            {
            "question": {
                  "en": "What is 'brett' (Brettanomyces)?",
                  "es": "¿Qué es 'brett' (Brettanomyces)?",
                  "de": "Was ist 'Brett' (Brettanomyces)?",
                  "nl": "Wat is 'brett' (Brettanomyces)?"
            },
            "options": [
                  {
                        "en": "Wild yeast creating barnyard/funky aromas",
                        "es": "Levadura salvaje creando aromas de establo/funky",
                        "de": "Wildhefe die stallhafte/funky Aromen erzeugt",
                        "nl": "Wilde gist die stal/funky aroma's creëert"
                  },
                  {
                        "en": "Premium oak treatment",
                        "es": "Tratamiento de roble premium",
                        "de": "Premium-Eichenbehandlung",
                        "nl": "Premium eiken behandeling"
                  },
                  {
                        "en": "Grape disease",
                        "es": "Enfermedad de uva",
                        "de": "Traubenkrankheit",
                        "nl": "Druivenziekte"
                  },
                  {
                        "en": "Fermentation temperature",
                        "es": "Temperatura de fermentación",
                        "de": "Gärtemperatur",
                        "nl": "Fermentatietemperatuur"
                  }
            ],
            "correct": 0,
            "explanation": {
                  "en": "Brettanomyces (brett) is wild yeast producing distinctive barnyard, leather, or band-aid aromas. Some consider it a flaw, others appreciate it in moderation.",
                  "es": "Brettanomyces (brett) es levadura salvaje que produce aromas distintivos de establo, cuero o tirita. Algunos lo consideran defecto, otros lo aprecian con moderación.",
                  "de": "Brettanomyces (Brett) ist Wildhefe, die charakteristische Stall-, Leder- oder Pflasteraromen produziert. Einige betrachten es als Fehler, andere schätzen es in Maßen.",
                  "nl": "Brettanomyces (brett) is wilde gist die kenmerkende stal, leer of pleister aroma's produceert. Sommigen beschouwen het als defect, anderen waarderen het met mate."
            }
      },
            {
            "question": {
                  "en": "What is 'Ripasso' method?",
                  "es": "¿Qué es el método 'Ripasso'?",
                  "de": "Was ist die 'Ripasso'-Methode?",
                  "nl": "Wat is de 'Ripasso' methode?"
            },
            "options": [
                  {
                        "en": "Re-fermenting wine on Amarone pomace",
                        "es": "Refermentar vino con orujo de Amarone",
                        "de": "Wein auf Amarone-Trester nachgären",
                        "nl": "Wijn herfermenteren op Amarone draf"
                  },
                  {
                        "en": "Double barrel aging",
                        "es": "Envejecimiento doble en barrica",
                        "de": "Doppelte Fassreifung",
                        "nl": "Dubbele vatrijping"
                  },
                  {
                        "en": "Second pressing",
                        "es": "Segundo prensado",
                        "de": "Zweites Pressen",
                        "nl": "Tweede persen"
                  },
                  {
                        "en": "Late harvest",
                        "es": "Cosecha tardía",
                        "de": "Spätlese",
                        "nl": "Late oogst"
                  }
            ],
            "correct": 0,
            "explanation": {
                  "en": "Ripasso re-ferments Valpolicella wine on warm Amarone pomace, adding body and complexity.",
                  "es": "Ripasso refermenta vino Valpolicella con orujo caliente de Amarone, agregando cuerpo y complejidad.",
                  "de": "Ripasso fermentiert Valpolicella-Wein auf warmem Amarone-Trester nach, was Körper und Komplexität hinzufügt.",
                  "nl": "Ripasso fermenteert Valpolicella wijn opnieuw op warme Amarone draf, wat body en complexiteit toevoegt."
            }
      },
            {
            "question": {
                  "en": "What is 'Appassimento'?",
                  "es": "¿Qué es 'Appassimento'?",
                  "de": "Was ist 'Appassimento'?",
                  "nl": "Wat is 'Appassimento'?"
            },
            "options": [
                  {
                        "en": "Drying grapes before fermentation",
                        "es": "Secar uvas antes de fermentación",
                        "de": "Trauben vor Gärung trocknen",
                        "nl": "Druiven drogen voor fermentatie"
                  },
                  {
                        "en": "Crushing with wooden tools",
                        "es": "Aplastar con herramientas de madera",
                        "de": "Mit Holzwerkzeugen zerquetschen",
                        "nl": "Persen met houten gereedschap"
                  },
                  {
                        "en": "Aging in clay amphoras",
                        "es": "Envejecimiento en ánforas de arcilla",
                        "de": "In Tonamphoren reifen",
                        "nl": "Rijpen in klei amfora's"
                  },
                  {
                        "en": "Quick cold fermentation",
                        "es": "Fermentación fría rápida",
                        "de": "Schnelle Kaltgärung",
                        "nl": "Snelle koude fermentatie"
                  }
            ],
            "correct": 0,
            "explanation": {
                  "en": "Appassimento partially dries grapes for weeks/months before vinification, concentrating sugars and flavors for powerful wines like Amarone.",
                  "es": "Appassimento seca parcialmente las uvas durante semanas/meses antes de la vinificación, concentrando azúcares y sabores para vinos poderosos como Amarone.",
                  "de": "Appassimento trocknet Trauben wochen-/monatelang vor der Vinifikation teilweise, konzentriert Zucker und Aromen für kraftvolle Weine wie Amarone.",
                  "nl": "Appassimento droogt druiven gedeeltelijk gedurende weken/maanden voor vinificatie, concentreert suikers en smaken voor krachtige wijnen zoals Amarone."
            }
      },
            {
            "question": {
                  "en": "What is micro-oxygenation?",
                  "es": "¿Qué es la micro-oxigenación?",
                  "de": "Was ist Mikro-Oxygenierung?",
                  "nl": "Wat is micro-oxygenatie?"
            },
            "options": [
                  {
                        "en": "Controlled oxygen to soften tannins",
                        "es": "Oxígeno controlado para suavizar taninos",
                        "de": "Kontrollierter Sauerstoff zum Weichmachen von Tanninen",
                        "nl": "Gecontroleerde zuurstof om tannines te verzachten"
                  },
                  {
                        "en": "Removing all oxygen",
                        "es": "Eliminar todo oxígeno",
                        "de": "Allen Sauerstoff entfernen",
                        "nl": "Alle zuurstof verwijderen"
                  },
                  {
                        "en": "Aging in tiny barrels",
                        "es": "Envejecimiento en barricas pequeñas",
                        "de": "Reifung in winzigen Fässern",
                        "nl": "Rijping in kleine vaten"
                  },
                  {
                        "en": "Low temperature fermentation",
                        "es": "Fermentación a baja temperatura",
                        "de": "Niedrigtemperaturgärung",
                        "nl": "Lage temperatuur fermentatie"
                  }
            ],
            "correct": 0,
            "explanation": {
                  "en": "Micro-oxygenation introduces tiny controlled amounts of oxygen during/after fermentation, mimicking barrel aging to stabilize color and soften tannins.",
                  "es": "La micro-oxigenación introduce cantidades pequeñas controladas de oxígeno durante/después de fermentación, imitando envejecimiento en barrica para estabilizar color y suavizar taninos.",
                  "de": "Mikro-Oxygenierung führt winzige kontrollierte Sauerstoffmengen während/nach Gärung ein, ahmt Fassreifung nach um Farbe zu stabilisieren und Tannine weicher zu machen.",
                  "nl": "Micro-oxygenatie introduceert kleine gecontroleerde hoeveelheden zuurstof tijdens/na fermentatie, bootst vatrijping na om kleur te stabiliseren en tannines te verzachten."
            }
      },
            {
            "question": {
                  "en": "What is 'délestage' (rack and return)?",
                  "es": "¿Qué es 'délestage' (trasiega y retorno)?",
                  "de": "Was ist 'Délestage' (Abziehen und Zurückführen)?",
                  "nl": "Wat is 'délestage' (aftappen en terugkeren)?"
            },
            "options": [
                  {
                        "en": "Draining juice then pumping back over cap",
                        "es": "Drenar jugo luego bombear de vuelta sobre sombrero",
                        "de": "Saft ablassen dann über Tresterhut zurückpumpen",
                        "nl": "Sap aftappen dan terug pompen over drijflaag"
                  },
                  {
                        "en": "Removing sediment",
                        "es": "Eliminar sedimento",
                        "de": "Sediment entfernen",
                        "nl": "Sediment verwijderen"
                  },
                  {
                        "en": "Transferring between barrels",
                        "es": "Transferir entre barricas",
                        "de": "Zwischen Fässern umfüllen",
                        "nl": "Tussen vaten overdragen"
                  },
                  {
                        "en": "Bottling wine",
                        "es": "Embotellar vino",
                        "de": "Wein abfüllen",
                        "nl": "Wijn bottelen"
                  }
            ],
            "correct": 0,
            "explanation": {
                  "en": "Délestage drains fermenting red wine from the tank leaving the cap, then pumps it back over for gentle but effective extraction.",
                  "es": "Délestage drena vino tinto en fermentación del tanque dejando el sombrero, luego lo bombea de vuelta para extracción suave pero efectiva.",
                  "de": "Délestage lässt gärenden Rotwein aus dem Tank ab wobei der Tresterhut bleibt, pumpt ihn dann zurück für sanfte aber effektive Extraktion.",
                  "nl": "Délestage tapt fermenterende rode wijn uit de tank waarbij de drijflaag achterblijft, pompt het dan terug voor zachte maar effectieve extractie."
            }
      },
            {
            "question": {
                  "en": "What is 'Gobelet' vine training?",
                  "es": "¿Qué es entrenamiento 'Gobelet'?",
                  "de": "Was ist 'Gobelet'-Erziehung?",
                  "nl": "Wat is 'Gobelet' training?"
            },
            "options": [
                  {
                        "en": "Free-standing bush vines without wires",
                        "es": "Vides de arbusto independientes sin alambres",
                        "de": "Freistehende Buschreben ohne Drähte",
                        "nl": "Vrijstaande struikwijnstokken zonder draden"
                  },
                  {
                        "en": "Growing on tall trellises",
                        "es": "Cultivar en espalderas altas",
                        "de": "Auf hohen Spalieren anbauen",
                        "nl": "Groeien op hoge spalieren"
                  },
                  {
                        "en": "Planting very close together",
                        "es": "Plantar muy cerca",
                        "de": "Sehr eng zusammen pflanzen",
                        "nl": "Heel dicht bij elkaar planten"
                  },
                  {
                        "en": "Using mechanical harvesting",
                        "es": "Usar cosecha mecánica",
                        "de": "Mechanische Ernte verwenden",
                        "nl": "Mechanische oogst gebruiken"
                  }
            ],
            "correct": 0,
            "explanation": {
                  "en": "Gobelet (bush vine) training grows vines as free-standing low bushes without wire support. Traditional in Rhône and Languedoc, requires manual harvesting.",
                  "es": "El entrenamiento Gobelet (vid de arbusto) cultiva vides como arbustos bajos independientes sin soporte de alambre. Tradicional en Ródano y Languedoc, requiere cosecha manual.",
                  "de": "Gobelet (Buschrebenerziehung) lässt Reben als freistehende niedrige Büsche ohne Drahtunterstützung wachsen. Traditionell in Rhône und Languedoc, erfordert manuelle Ernte.",
                  "nl": "Gobelet (bush vine) training laat wijnstokken groeien als vrijstaande lage struiken zonder draadsteun. Traditioneel in Rhône en Languedoc, vereist handmatige oogst."
            }
      },
            {
            "question": {
                  "en": "What is 'Cryoextraction'?",
                  "es": "¿Qué es 'Crioextracción'?",
                  "de": "Was ist 'Kryoextraktion'?",
                  "nl": "Wat is 'Cryoextractie'?"
            },
            "options": [
                  {
                        "en": "Artificially freezing grapes to concentrate sugars",
                        "es": "Congelar artificialmente uvas para concentrar azúcares",
                        "de": "Künstlich Trauben einfrieren um Zucker zu konzentrieren",
                        "nl": "Kunstmatig druiven bevriezen om suikers te concentreren"
                  },
                  {
                        "en": "Cold stabilization",
                        "es": "Estabilización en frío",
                        "de": "Kältest abilisierung",
                        "nl": "Koude stabilisatie"
                  },
                  {
                        "en": "Very low temperature fermentation",
                        "es": "Fermentación a muy baja temperatura",
                        "de": "Sehr niedrige Temperatur Gärung",
                        "nl": "Zeer lage temperatuur fermentatie"
                  },
                  {
                        "en": "Storing in ice cellars",
                        "es": "Almacenar en bodegas de hielo",
                        "de": "In Eiskellern lagern",
                        "nl": "Opslaan in ijskelders"
                  }
            ],
            "correct": 0,
            "explanation": {
                  "en": "Cryoextraction artificially freezes grapes to concentrate sugars, mimicking ice wine. Controversial as some consider it less authentic than natural freezing.",
                  "es": "La crioextracción congela artificialmente uvas para concentrar azúcares, imitando vino de hielo. Controvertido ya que algunos lo consideran menos auténtico que congelación natural.",
                  "de": "Kryoextraktion friert Trauben künstlich ein um Zucker zu konzentrieren, ahmt Eiswein nach. Umstritten da einige es als weniger authentisch als natürliches Einfrieren betrachten.",
                  "nl": "Cryoextractie bevriest druiven kunstmatig om suikers te concentreren, bootst ijswijn na. Controversieel omdat sommigen het als minder authentiek beschouwen dan natuurlijke bevriezing."
            }
      },
            {
            "question": {
                  "en": "What is the significance of 'Grand Cru' classification in Burgundy?",
                  "es": "¿Cuál es el significado de la clasificación 'Grand Cru' en Borgoña?",
                  "de": "Was ist die Bedeutung der 'Grand Cru'-Klassifikation im Burgund?",
                  "nl": "Wat is de betekenis van 'Grand Cru' classificatie in Bourgogne?"
            },
            "options": [
                  {
                        "en": "Producer quality rating",
                        "es": "Calificación de calidad del productor",
                        "de": "Produzenten-Qualitätsbewertung",
                        "nl": "Producent kwaliteitsbeoordeling"
                  },
                  {
                        "en": "Highest vineyard site classification",
                        "es": "Clasificación de sitio de viñedo más alto",
                        "de": "Höchste Weinbergslagen-Klassifikation",
                        "nl": "Hoogste wijngaard locatie classificatie"
                  },
                  {
                        "en": "Aging requirement",
                        "es": "Requisito de envejecimiento",
                        "de": "Alterungsanforderung",
                        "nl": "Rijpingsvereiste"
                  },
                  {
                        "en": "Bottle size",
                        "es": "Tamaño de botella",
                        "de": "Flaschengröße",
                        "nl": "Flesgrootte"
                  }
            ],
            "correct": 1,
            "explanation": {
                  "en": "Grand Cru represents the highest tier of Burgundy's terroir-based classification, designating the finest vineyard sites producing the most prestigious wines.",
                  "es": "Grand Cru representa el nivel más alto de la clasificación basada en terroir de Borgoña, designando los mejores sitios de viñedos que producen los vinos más prestigiosos.",
                  "de": "Grand Cru repräsentiert die höchste Stufe der terroir-basierten Klassifikation des Burgunds und bezeichnet die besten Weinbergslagen, die die prestigeträchtigsten Weine produzieren.",
                  "nl": "Grand Cru vertegenwoordigt de hoogste laag van Bourgogne's terroir-gebaseerde classificatie, waarbij de beste wijngaardlocaties worden aangewezen die de meest prestigieuze wijnen produceren."
            }
      },
            {
            "question": {
                  "en": "What distinguishes Barolo DOCG from Barbaresco DOCG in Piedmont?",
                  "es": "¿Qué distingue a Barolo DOCG de Barbaresco DOCG en Piamonte?",
                  "de": "Was unterscheidet Barolo DOCG von Barbaresco DOCG im Piemont?",
                  "nl": "Wat onderscheidt Barolo DOCG van Barbaresco DOCG in Piemonte?"
            },
            "options": [
                  {
                        "en": "Different grape varieties",
                        "es": "Diferentes variedades de uva",
                        "de": "Verschiedene Rebsorten",
                        "nl": "Verschillende druivenrassen"
                  },
                  {
                        "en": "Barolo requires longer aging and comes from higher elevation",
                        "es": "Barolo requiere envejecimiento más largo y proviene de mayor elevación",
                        "de": "Barolo erfordert längere Reifung und kommt aus höheren Lagen",
                        "nl": "Barolo vereist langere rijping en komt van hogere ligging"
                  },
                  {
                        "en": "Barbaresco is sparkling",
                        "es": "Barbaresco es espumoso",
                        "de": "Barbaresco ist schäumend",
                        "nl": "Barbaresco is mousserend"
                  },
                  {
                        "en": "Different countries",
                        "es": "Diferentes países",
                        "de": "Verschiedene Länder",
                        "nl": "Verschillende landen"
                  }
            ],
            "correct": 1,
            "explanation": {
                  "en": "Both use Nebbiolo, but Barolo requires longer aging (38 months vs 26), comes from higher, cooler sites, and produces more powerful, structured wines than the more approachable Barbaresco.",
                  "es": "Ambos usan Nebbiolo, pero Barolo requiere envejecimiento más largo (38 meses vs 26), proviene de sitios más altos y fríos, y produce vinos más potentes y estructurados que el Barbaresco más accesible.",
                  "de": "Beide verwenden Nebbiolo, aber Barolo erfordert längere Reifung (38 Monate vs. 26), stammt aus höheren, kühleren Lagen und produziert kraftvollere, strukturiertere Weine als das zugänglichere Barbaresco.",
                  "nl": "Beide gebruiken Nebbiolo, maar Barolo vereist langere rijping (38 maanden vs 26), komt van hogere, koelere locaties en produceert krachtigere, meer gestructureerde wijnen dan de toegankelijkere Barbaresco."
            }
      },
            {
            "question": {
                  "en": "What is the unique soil type that defines Châteauneuf-du-Pape?",
                  "es": "¿Cuál es el tipo de suelo único que define a Châteauneuf-du-Pape?",
                  "de": "Was ist der einzigartige Bodentyp, der Châteauneuf-du-Pape definiert?",
                  "nl": "Wat is het unieke bodemtype dat Châteauneuf-du-Pape definieert?"
            },
            "options": [
                  {
                        "en": "Chalk (craie)",
                        "es": "Tiza (craie)",
                        "de": "Kreide (craie)",
                        "nl": "Krijt (craie)"
                  },
                  {
                        "en": "Slate (schist)",
                        "es": "Pizarra (schist)",
                        "de": "Schiefer (schist)",
                        "nl": "Leisteen (schist)"
                  },
                  {
                        "en": "Galets (large rounded stones)",
                        "es": "Galets (piedras redondeadas grandes)",
                        "de": "Galets (große runde Steine)",
                        "nl": "Galets (grote ronde stenen)"
                  },
                  {
                        "en": "Volcanic ash",
                        "es": "Ceniza volcánica",
                        "de": "Vulkanasche",
                        "nl": "Vulkanische as"
                  }
            ],
            "correct": 2,
            "explanation": {
                  "en": "Châteauneuf-du-Pape is famous for its galets roulés (large rounded stones) that retain heat at night, helping ripen Grenache and other varieties in this Southern Rhône appellation.",
                  "es": "Châteauneuf-du-Pape es famoso por sus galets roulés (grandes piedras redondeadas) que retienen calor por la noche, ayudando a madurar Garnacha y otras variedades en esta apelación del Ródano Sur.",
                  "de": "Châteauneuf-du-Pape ist berühmt für seine Galets roulés (große runde Steine), die nachts Wärme speichern und Grenache und anderen Sorten in dieser südlichen Rhône-Appellation zur Reife verhelfen.",
                  "nl": "Châteauneuf-du-Pape is beroemd om zijn galets roulés (grote ronde stenen) die 's nachts warmte vasthouden, wat helpt Grenache en andere variëteiten te rijpen in deze Zuid-Rhône appellation."
            }
      },
            {
            "question": {
                  "en": "What is 'Einzellage' in the German wine classification system?",
                  "es": "¿Qué es 'Einzellage' en el sistema de clasificación de vino alemán?",
                  "de": "Was ist 'Einzellage' im deutschen Weinqualifikationssystem?",
                  "nl": "Wat is 'Einzellage' in het Duitse wijn classificatiesysteem?"
            },
            "options": [
                  {
                        "en": "A wine producer",
                        "es": "Un productor de vino",
                        "de": "Ein Weinproduzent",
                        "nl": "Een wijnproducent"
                  },
                  {
                        "en": "An individual vineyard site",
                        "es": "Un sitio de viñedo individual",
                        "de": "Eine einzelne Weinbergslage",
                        "nl": "Een individuele wijngaard locatie"
                  },
                  {
                        "en": "A grape variety",
                        "es": "Una variedad de uva",
                        "de": "Eine Rebsorte",
                        "nl": "Een druivenras"
                  },
                  {
                        "en": "A sweetness level",
                        "es": "Un nivel de dulzura",
                        "de": "Eine Süßestufe",
                        "nl": "Een zoetheidsniveau"
                  }
            ],
            "correct": 1,
            "explanation": {
                  "en": "Einzellage is a single, named vineyard site in Germany's classification system. Famous examples include Wehlener Sonnenuhr and Bernkasteler Doctor, representing specific terroir expressions.",
                  "es": "Einzellage es un sitio de viñedo único y nombrado en el sistema de clasificación de Alemania. Ejemplos famosos incluyen Wehlener Sonnenuhr y Bernkasteler Doctor, representando expresiones de terroir específicas.",
                  "de": "Einzellage ist eine einzelne, benannte Weinbergslage im deutschen Klassifikationssystem. Berühmte Beispiele sind Wehlener Sonnenuhr und Bernkasteler Doctor, die spezifische Terroir-Ausdrücke repräsentieren.",
                  "nl": "Einzellage is een enkele, benoemde wijngaard locatie in het Duitse classificatiesysteem. Beroemde voorbeelden zijn Wehlener Sonnenuhr en Bernkasteler Doctor, die specifieke terroir expressies vertegenwoordigen."
            }
      },
            {
            "question": {
                  "en": "What makes Priorat DOCa wines distinctive in Spain?",
                  "es": "¿Qué hace que los vinos Priorat DOCa sean distintivos en España?",
                  "de": "Was macht Priorat DOCa-Weine in Spanien besonders?",
                  "nl": "Wat maakt Priorat DOCa wijnen onderscheidend in Spanje?"
            },
            "options": [
                  {
                        "en": "White wine production",
                        "es": "Producción de vino blanco",
                        "de": "Weißweinproduktion",
                        "nl": "Witte wijn productie"
                  },
                  {
                        "en": "Llicorella slate soil and intense, mineral reds",
                        "es": "Suelo de pizarra llicorella y tintos intensos y minerales",
                        "de": "Llicorella-Schieferboden und intensive, mineralische Rotweine",
                        "nl": "Llicorella leisteen bodem en intense, minerale rode wijnen"
                  },
                  {
                        "en": "Sparkling wine specialization",
                        "es": "Especialización en vino espumoso",
                        "de": "Schaumweinspezialisierung",
                        "nl": "Mousserende wijn specialisatie"
                  },
                  {
                        "en": "Organic certification",
                        "es": "Certificación orgánica",
                        "de": "Bio-Zertifizierung",
                        "nl": "Biologische certificering"
                  }
            ],
            "correct": 1,
            "explanation": {
                  "en": "Priorat is known for steep terraced vineyards on llicorella (volcanic slate) soil producing powerful, mineral-driven red wines primarily from old-vine Garnacha and Cariñena.",
                  "es": "Priorat es conocido por viñedos en terrazas empinadas en suelo de llicorella (pizarra volcánica) que producen vinos tintos potentes impulsados por minerales principalmente de Garnacha y Cariñena de viñas viejas.",
                  "de": "Priorat ist bekannt für steile terrassierte Weinberge auf Llicorella (vulkanischem Schiefer)-Boden, die kraftvolle, mineralgetriebene Rotweine hauptsächlich aus alten Garnacha- und Cariñena-Reben produzieren.",
                  "nl": "Priorat staat bekend om steile terrasvormige wijngaarden op llicorella (vulkanische leisteen) bodem die krachtige, mineraal-gedreven rode wijnen produceren voornamelijk van oude-wijnstok Garnacha en Cariñena."
            }
      },
            {
            "question": {
                  "en": "What is the primary soil type of Chablis that gives its wines distinctive minerality?",
                  "es": "¿Cuál es el tipo de suelo principal de Chablis que le da a sus vinos una mineralidad distintiva?",
                  "de": "Was ist der primäre Bodentyp von Chablis, der seinen Weinen ihre charakteristische Mineralität verleiht?",
                  "nl": "Wat is het primaire bodemtype van Chablis dat zijn wijnen onderscheidende mineraliteit geeft?"
            },
            "options": [
                  {
                        "en": "Granite",
                        "es": "Granito",
                        "de": "Granit",
                        "nl": "Graniet"
                  },
                  {
                        "en": "Kimmeridgian limestone with fossilized oysters",
                        "es": "Piedra caliza Kimmeridgian con ostras fosilizadas",
                        "de": "Kimmeridge-Kalkstein mit versteinerten Austern",
                        "nl": "Kimmeridgian kalksteen met gefossiliseerde oesters"
                  },
                  {
                        "en": "Volcanic rock",
                        "es": "Roca volcánica",
                        "de": "Vulkangestein",
                        "nl": "Vulkanisch gesteente"
                  },
                  {
                        "en": "Clay",
                        "es": "Arcilla",
                        "de": "Ton",
                        "nl": "Klei"
                  }
            ],
            "correct": 1,
            "explanation": {
                  "en": "Chablis' distinctive flinty, mineral character comes from ancient Kimmeridgian limestone rich in fossilized oyster shells, creating the perfect terroir for pure Chardonnay expression.",
                  "es": "El carácter mineral y pedernal distintivo de Chablis proviene de la antigua piedra caliza Kimmeridgian rica en conchas de ostras fosilizadas, creando el terroir perfecto para la expresión pura de Chardonnay.",
                  "de": "Chablis' charakteristischer feuersteinhaltiger, mineralischer Charakter stammt von uraltem Kimmeridge-Kalkstein, reich an versteinerten Austernschalen, der das perfekte Terroir für reinen Chardonnay-Ausdruck schafft.",
                  "nl": "Chablis' onderscheidende vuurstenen, minerale karakter komt van oude Kimmeridgian kalksteen rijk aan gefossiliseerde oesterschelpen, wat het perfecte terroir creëert voor pure Chardonnay expressie."
            }
      },
            {
            "question": {
                  "en": "What is the 'Stags Leap District' in Napa Valley famous for?",
                  "es": "¿Por qué es famoso el 'Distrito de Stags Leap' en el Valle de Napa?",
                  "de": "Wofür ist der 'Stags Leap District' im Napa Valley berühmt?",
                  "nl": "Waar is het 'Stags Leap District' in Napa Valley beroemd om?"
            },
            "options": [
                  {
                        "en": "Chardonnay production",
                        "es": "Producción de Chardonnay",
                        "de": "Chardonnay-Produktion",
                        "nl": "Chardonnay productie"
                  },
                  {
                        "en": "Elegant, age-worthy Cabernet Sauvignon",
                        "es": "Cabernet Sauvignon elegante y digno de envejecimiento",
                        "de": "Eleganter, alterungswürdiger Cabernet Sauvignon",
                        "nl": "Elegante, rijpwaardige Cabernet Sauvignon"
                  },
                  {
                        "en": "Sparkling wine",
                        "es": "Vino espumoso",
                        "de": "Schaumwein",
                        "nl": "Mousserende wijn"
                  },
                  {
                        "en": "Zinfandel",
                        "es": "Zinfandel",
                        "de": "Zinfandel",
                        "nl": "Zinfandel"
                  }
            ],
            "correct": 1,
            "explanation": {
                  "en": "Stags Leap District is renowned for producing elegant, structured Cabernet Sauvignon with a distinctive 'iron fist in a velvet glove' style, gaining fame at the 1976 Judgment of Paris.",
                  "es": "El Distrito de Stags Leap es reconocido por producir Cabernet Sauvignon elegante y estructurado con un estilo distintivo de 'puño de hierro en guante de terciopelo', ganando fama en el Juicio de París de 1976.",
                  "de": "Der Stags Leap District ist bekannt für die Produktion von elegantem, strukturiertem Cabernet Sauvignon mit einem charakteristischen Stil von 'eiserner Faust im Samthandschuh', der beim Urteil von Paris 1976 berühmt wurde.",
                  "nl": "Stags Leap District staat bekend om het produceren van elegante, gestructureerde Cabernet Sauvignon met een onderscheidende 'ijzeren vuist in fluwelen handschoen' stijl, beroemd geworden bij het Oordeel van Parijs in 1976."
            }
      },
            {
            "question": {
                  "en": "What defines a 'Super Tuscan' wine?",
                  "es": "¿Qué define un vino 'Super Toscano'?",
                  "de": "Was definiert einen 'Super Tuscan'-Wein?",
                  "nl": "Wat definieert een 'Super Toscaanse' wijn?"
            },
            "options": [
                  {
                        "en": "Extra sweet Tuscan wine",
                        "es": "Vino toscano extra dulce",
                        "de": "Extra süßer toskanischer Wein",
                        "nl": "Extra zoete Toscaanse wijn"
                  },
                  {
                        "en": "High-quality Tuscan wine using non-traditional grapes or methods",
                        "es": "Vino toscano de alta calidad usando uvas o métodos no tradicionales",
                        "de": "Hochwertiger toskanischer Wein mit nicht-traditionellen Trauben oder Methoden",
                        "nl": "Hoogwaardige Toscaanse wijn met niet-traditionele druiven of methodes"
                  },
                  {
                        "en": "DOCG classification",
                        "es": "Clasificación DOCG",
                        "de": "DOCG-Klassifikation",
                        "nl": "DOCG classificatie"
                  },
                  {
                        "en": "Sparkling Tuscan wine",
                        "es": "Vino espumoso toscano",
                        "de": "Toskanischer Schaumwein",
                        "nl": "Mousserende Toscaanse wijn"
                  }
            ],
            "correct": 1,
            "explanation": {
                  "en": "Super Tuscans broke DOC rules by using international varieties (Cabernet, Merlot) or non-traditional methods, creating exceptional wines like Sassicaia and Tignanello, initially labeled as table wine.",
                  "es": "Los Super Toscanos rompieron las reglas DOC al usar variedades internacionales (Cabernet, Merlot) o métodos no tradicionales, creando vinos excepcionales como Sassicaia y Tignanello, inicialmente etiquetados como vino de mesa.",
                  "de": "Super Tuscans brachen DOC-Regeln, indem sie internationale Sorten (Cabernet, Merlot) oder nicht-traditionelle Methoden verwendeten und außergewöhnliche Weine wie Sassicaia und Tignanello schufen, die zunächst als Tafelwein etikettiert wurden.",
                  "nl": "Super Toscanen braken DOC-regels door internationale variëteiten (Cabernet, Merlot) of niet-traditionele methoden te gebruiken, wat uitzonderlijke wijnen creëerde zoals Sassicaia en Tignanello, aanvankelijk gelabeld als tafelwijn."
            }
      },
            {
            "question": {
                  "en": "What is the significance of 'Cru' classification in Bordeaux's Médoc?",
                  "es": "¿Cuál es el significado de la clasificación 'Cru' en el Médoc de Burdeos?",
                  "de": "Was ist die Bedeutung der 'Cru'-Klassifikation im Médoc von Bordeaux?",
                  "nl": "Wat is de betekenis van 'Cru' classificatie in Bordeaux's Médoc?"
            },
            "options": [
                  {
                        "en": "Aging requirement",
                        "es": "Requisito de envejecimiento",
                        "de": "Alterungsanforderung",
                        "nl": "Rijpingsvereiste"
                  },
                  {
                        "en": "Hierarchical ranking from First to Fifth Growth",
                        "es": "Clasificación jerárquica del Primer al Quinto Crecimiento",
                        "de": "Hierarchische Einstufung vom Ersten bis Fünften Gewächs",
                        "nl": "Hiërarchische rangschikking van Premier tot Cinquième Cru"
                  },
                  {
                        "en": "Grape variety restriction",
                        "es": "Restricción de variedad de uva",
                        "de": "Rebsortenbeschränkung",
                        "nl": "Druivenras beperking"
                  },
                  {
                        "en": "Bottle shape",
                        "es": "Forma de botella",
                        "de": "Flaschenform",
                        "nl": "Flesvorm"
                  }
            ],
            "correct": 1,
            "explanation": {
                  "en": "The 1855 Classification ranked Médoc châteaux into five tiers (Premier through Cinquième Cru) based on price and reputation, with estates like Lafite, Latour, and Margaux at the top.",
                  "es": "La Clasificación de 1855 clasificó los châteaux del Médoc en cinco niveles (Premier a Cinquième Cru) basándose en precio y reputación, con propiedades como Lafite, Latour y Margaux en la cima.",
                  "de": "Die 1855er Klassifikation stufte Médoc-Châteaux in fünf Stufen (Premier bis Cinquième Cru) ein, basierend auf Preis und Reputation, mit Gütern wie Lafite, Latour und Margaux an der Spitze.",
                  "nl": "De 1855 Classificatie rangschikte Médoc châteaux in vijf lagen (Premier tot Cinquième Cru) gebaseerd op prijs en reputatie, met landgoederen zoals Lafite, Latour en Margaux aan de top."
            }
      },
            {
            "question": {
                  "en": "What distinguishes Amarone della Valpolicella from regular Valpolicella?",
                  "es": "¿Qué distingue a Amarone della Valpolicella del Valpolicella regular?",
                  "de": "Was unterscheidet Amarone della Valpolicella von normalem Valpolicella?",
                  "nl": "Wat onderscheidt Amarone della Valpolicella van gewone Valpolicella?"
            },
            "options": [
                  {
                        "en": "Amarone uses white grapes",
                        "es": "Amarone usa uvas blancas",
                        "de": "Amarone verwendet weiße Trauben",
                        "nl": "Amarone gebruikt witte druiven"
                  },
                  {
                        "en": "Amarone is made from dried grapes (appassimento)",
                        "es": "Amarone se hace de uvas secas (appassimento)",
                        "de": "Amarone wird aus getrockneten Trauben (Appassimento) hergestellt",
                        "nl": "Amarone wordt gemaakt van gedroogde druiven (appassimento)"
                  },
                  {
                        "en": "Amarone is sparkling",
                        "es": "Amarone es espumoso",
                        "de": "Amarone ist schäumend",
                        "nl": "Amarone is mousserend"
                  },
                  {
                        "en": "Different region",
                        "es": "Región diferente",
                        "de": "Verschiedene Region",
                        "nl": "Andere regio"
                  }
            ],
            "correct": 1,
            "explanation": {
                  "en": "Amarone is made using the appassimento method—drying grapes for 3-4 months to concentrate sugars and flavors, creating powerful, full-bodied, complex wines with 15-16% alcohol.",
                  "es": "Amarone se hace usando el método appassimento—secando uvas durante 3-4 meses para concentrar azúcares y sabores, creando vinos potentes, con cuerpo completo y complejos con 15-16% de alcohol.",
                  "de": "Amarone wird mit der Appassimento-Methode hergestellt—Trauben werden 3-4 Monate getrocknet, um Zucker und Aromen zu konzentrieren, was kraftvolle, vollmundige, komplexe Weine mit 15-16% Alkohol erzeugt.",
                  "nl": "Amarone wordt gemaakt met de appassimento methode—druiven drogen gedurende 3-4 maanden om suikers en smaken te concentreren, wat krachtige, volle, complexe wijnen creëert met 15-16% alcohol."
            }
      }
    ]
  };

  // Export for use in the quiz application
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level10;
  } else if (typeof window !== 'undefined') {
    window.level10 = level10;
  }
})();
