// Quiz Level 3 - Dessert: Donuts - Advanced Donut Science
(function() {
  const level3 = {
    name: {
      en: "Donuts - Level 3",
      es: "Donuts - Nivel 3",
      de: "Donuts - Level 3",
      nl: "Donuts - Level 3"
    },
    questions: [
      {
        question: {
          en: "What is the optimal gluten development percentage for achieving perfect donut texture with minimal oil absorption?",
          es: "¿Cuál es el porcentaje óptimo de desarrollo del gluten para lograr una textura perfecta de donut con mínima absorción de aceite?",
          de: "Wie hoch ist der optimale Glutenentwicklungsgrad für perfekte Donut-Textur bei minimaler Ölaufnahme?",
          nl: "Wat is het optimale glutenontwikkelingspercentage voor perfecte donut textuur met minimale olieabsorptie?"
        },
        options: [
          { en: "65-75%", es: "65-75%", de: "65-75%", nl: "65-75%" },
          { en: "75-85%", es: "75-85%", de: "75-85%", nl: "75-85%" },
          { en: "85-95%", es: "85-95%", de: "85-95%", nl: "85-95%" },
          { en: "95-100%", es: "95-100%", de: "95-100%", nl: "95-100%" }
        ],
        correct: 1,
        explanation: {
          en: "75-85% gluten development creates the ideal protein network structure that provides sufficient strength to contain gases during frying while maintaining tenderness and minimizing oil penetration.",
          es: "El desarrollo del gluten al 75-85% crea la estructura ideal de red proteica que proporciona suficiente resistencia para contener gases durante la fritura mientras mantiene la ternura y minimiza la penetración del aceite.",
          de: "75-85% Glutenentwicklung schafft die ideale Proteinnetzstruktur, die ausreichend Festigkeit bietet, um Gase beim Frittieren zu halten, während Zartheit erhalten und Öldurchdringung minimiert wird.",
          nl: "75-85% glutenontwikkeling creëert de ideale proteïnenetwerk structuur die voldoende sterkte biedt om gassen tijdens het bakken vast te houden terwijl zachtheid behouden blijft en oliepenetratie geminimaliseerd wordt."
        }
      },
      {
        question: {
          en: "Which enzyme combination provides optimal dough conditioning for extended fermentation in artisanal donut production?",
          es: "¿Qué combinación de enzimas proporciona un acondicionamiento óptimo de la masa para fermentación extendida en la producción artesanal de donuts?",
          de: "Welche Enzymkombination bietet optimale Teigkonditionierung für verlängerte Fermentation in handwerklicher Donut-Produktion?",
          nl: "Welke enzymcombinatie biedt optimale deegconditionering voor verlengde fermentatie in ambachtelijke donutproductie?"
        },
        options: [
          { en: "Amylase + Protease", es: "Amilasa + Proteasa", de: "Amylase + Protease", nl: "Amylase + Protease" },
          { en: "Xylanase + Lipase", es: "Xilanasa + Lipasa", de: "Xylanase + Lipase", nl: "Xylanase + Lipase" },
          { en: "Transglutaminase + Glucose oxidase", es: "Transglutaminasa + Glucosa oxidasa", de: "Transglutaminase + Glukoseoxidase", nl: "Transglutaminase + Glucose oxidase" },
          { en: "Hemicellulase + Invertase", es: "Hemicelulasa + Invertasa", de: "Hemicellulase + Invertase", nl: "Hemicellulase + Invertase" }
        ],
        correct: 2,
        explanation: {
          en: "Transglutaminase strengthens the protein network while glucose oxidase improves dough stability and gas retention during extended fermentation, creating superior texture and flavor development.",
          es: "La transglutaminasa fortalece la red proteica mientras que la glucosa oxidasa mejora la estabilidad de la masa y la retención de gas durante la fermentación extendida, creando un desarrollo superior de textura y sabor.",
          de: "Transglutaminase stärkt das Proteinnetzwerk, während Glukoseoxidase die Teigstabilität und Gasretention während verlängerter Fermentation verbessert und überlegene Textur- und Geschmacksentwicklung schafft.",
          nl: "Transglutaminase versterkt het proteïnenetwerk terwijl glucose oxidase de deegstabiliteit en gasretentie tijdens verlengde fermentatie verbetert, wat superieure textuur- en smaakontwikkeling creëert."
        }
      },
      {
        question: {
          en: "What is the critical Maillard reaction temperature range for optimal donut crust development without acrylamide formation?",
          es: "¿Cuál es el rango crítico de temperatura de la reacción de Maillard para el desarrollo óptimo de la corteza del donut sin formación de acrilamida?",
          de: "Was ist der kritische Temperaturbereich der Maillard-Reaktion für optimale Donut-Krustenentwicklung ohne Acrylamidbildung?",
          nl: "Wat is het kritieke Maillard reactie temperatuurbereik voor optimale donut korstvorming zonder acrylamide vorming?"
        },
        options: [
          { en: "140-160°C", es: "140-160°C", de: "140-160°C", nl: "140-160°C" },
          { en: "160-180°C", es: "160-180°C", de: "160-180°C", nl: "160-180°C" },
          { en: "180-200°C", es: "180-200°C", de: "180-200°C", nl: "180-200°C" },
          { en: "200-220°C", es: "200-220°C", de: "200-220°C", nl: "200-220°C" }
        ],
        correct: 1,
        explanation: {
          en: "160-180°C allows optimal Maillard browning for flavor and color development while staying below the threshold for significant acrylamide formation, which accelerates above 180°C.",
          es: "160-180°C permite el dorado Maillard óptimo para el desarrollo de sabor y color mientras se mantiene por debajo del umbral para la formación significativa de acrilamida, que se acelera por encima de 180°C.",
          de: "160-180°C ermöglicht optimale Maillard-Bräunung für Geschmacks- und Farbentwicklung, während unter der Schwelle für signifikante Acrylamidbildung geblieben wird, die über 180°C beschleunigt.",
          nl: "160-180°C maakt optimale Maillard bruining mogelijk voor smaak- en kleurontwikkeling terwijl onder de drempel blijft voor significante acrylamide vorming, die versnelt boven 180°C."
        }
      },
      {
        question: {
          en: "Which hydrocolloid combination provides the best moisture retention and shelf-life extension in commercial donut production?",
          es: "¿Qué combinación de hidrocoloides proporciona la mejor retención de humedad y extensión de vida útil en la producción comercial de donuts?",
          de: "Welche Hydrokolloid-Kombination bietet die beste Feuchtigkeitsretention und Haltbarkeitsverlängerung in der kommerziellen Donut-Produktion?",
          nl: "Welke hydrocolloïde combinatie biedt de beste vochtretentie en houdbaarheidsverlenging in commerciële donutproductie?"
        },
        options: [
          { en: "Xanthan gum + Guar gum", es: "Goma xantana + Goma guar", de: "Xanthan + Guarkernmehl", nl: "Xanthaangom + Guargom" },
          { en: "Carrageenan + Pectin", es: "Carragenano + Pectina", de: "Carrageen + Pektin", nl: "Carrageen + Pectine" },
          { en: "Agar + Gellan gum", es: "Agar + Goma gellan", de: "Agar + Gellan", nl: "Agar + Gellan gom" },
          { en: "Locust bean gum + Konjac", es: "Goma de algarrobo + Konjac", de: "Johannisbrotkernmehl + Konjac", nl: "Johannesbroodpitgom + Konjac" }
        ],
        correct: 0,
        explanation: {
          en: "Xanthan gum provides excellent water binding and freeze-thaw stability, while guar gum enhances texture and creates synergistic effects for superior moisture retention over extended storage periods.",
          es: "La goma xantana proporciona excelente unión al agua y estabilidad de congelación-descongelación, mientras que la goma guar mejora la textura y crea efectos sinérgicos para una retención de humedad superior durante períodos de almacenamiento extendidos.",
          de: "Xanthan bietet ausgezeichnete Wasserbindung und Gefrier-Auftau-Stabilität, während Guarkernmehl die Textur verbessert und synergistische Effekte für überlegene Feuchtigkeitsretention über längere Lagerperioden schafft.",
          nl: "Xanthaangom biedt uitstekende waterbinding en vries-dooi stabiliteit, terwijl guargom de textuur verbetert en synergistische effecten creëert voor superieure vochtretentie over langere bewaarperioden."
        }
      },
      {
        question: {
          en: "What is the optimal proofing humidity and temperature combination for maximum gas retention in yeasted donuts?",
          es: "¿Cuál es la combinación óptima de humedad y temperatura de fermentación para la máxima retención de gas en donuts con levadura?",
          de: "Was ist die optimale Gär-Feuchtigkeits- und Temperaturkombination für maximale Gasretention in Hefe-Donuts?",
          nl: "Wat is de optimale rijshumiditeit en temperatuurcombinatie voor maximale gasretentie in gist donuts?"
        },
        options: [
          { en: "75% humidity, 26°C", es: "75% humedad, 26°C", de: "75% Luftfeuchtigkeit, 26°C", nl: "75% luchtvochtigheid, 26°C" },
          { en: "80% humidity, 30°C", es: "80% humedad, 30°C", de: "80% Luftfeuchtigkeit, 30°C", nl: "80% luchtvochtigheid, 30°C" },
          { en: "85% humidity, 35°C", es: "85% humedad, 35°C", de: "85% Luftfeuchtigkeit, 35°C", nl: "85% luchtvochtigheid, 35°C" },
          { en: "90% humidity, 40°C", es: "90% humedad, 40°C", de:"90% Luftfeuchtigkeit, 40°C", nl: "90% luchtvochtigheid, 40°C" }
        ],
        correct: 1,
        explanation: {
          en: "80% humidity prevents surface drying while 30°C provides optimal yeast activity without over-proofing, ensuring maximum CO2 production and retention for light, airy texture.",
          es: "80% de humedad previene el secado superficial mientras que 30°C proporciona actividad óptima de levadura sin sobre-fermentación, asegurando máxima producción y retención de CO2 para una textura ligera y aireada.",
          de: "80% Luftfeuchtigkeit verhindert Oberflächentrocknung, während 30°C optimale Hefeaktivität ohne Übergärung bietet und maximale CO2-Produktion und -Retention für leichte, luftige Textur gewährleistet.",
          nl: "80% luchtvochtigheid voorkomt oppervlakte uitdroging terwijl 30°C optimale gistactiviteit biedt zonder overrijzing, wat maximale CO2 productie en retentie verzekert voor lichte, luchtige textuur."
        }
      },
      {
        question: {
          en: "Which fat crystallization polymorphic form provides the best mouthfeel and stability in donut glazes?",
          es: "¿Qué forma polimórfica de cristalización de grasa proporciona la mejor sensación en boca y estabilidad en los glaseados de donuts?",
          de: "Welche polymorphe Form der Fettkristallisation bietet das beste Mundgefühl und Stabilität in Donut-Glasuren?",
          nl: "Welke vet kristallisatie polymorfe vorm biedt het beste mondgevoel en stabiliteit in donut glazuren?"
        },
        options: [
          { en: "α (alpha) form", es: "Forma α (alfa)", de: "α (Alpha) Form", nl: "α (alfa) vorm" },
          { en: "β' (beta-prime) form", es: "Forma β' (beta-prima)", de: "β' (Beta-Prima) Form", nl: "β' (beta-prima) vorm" },
          { en: "β (beta) form", es: "Forma β (beta)", de: "β (Beta) Form", nl: "β (beta) vorm" },
          { en: "γ (gamma) form", es: "Forma γ (gamma)", de: "γ (Gamma) Form", nl: "γ (gamma) vorm" }
        ],
        correct: 1,
        explanation: {
          en: "β' (beta-prime) crystals provide optimal balance of stability and mouthfeel, creating smooth texture that melts cleanly at mouth temperature while maintaining structural integrity at room temperature.",
          es: "Los cristales β' (beta-prima) proporcionan un equilibrio óptimo de estabilidad y sensación en boca, creando una textura suave que se derrite limpiamente a temperatura bucal mientras mantiene la integridad estructural a temperatura ambiente.",
          de: "β' (Beta-Prima) Kristalle bieten optimale Balance von Stabilität und Mundgefühl, schaffen glatte Textur, die sauber bei Mundtemperatur schmilzt, während strukturelle Integrität bei Raumtemperatur erhalten bleibt.",
          nl: "β' (beta-prima) kristallen bieden optimale balans van stabiliteit en mondgevoel, wat gladde textuur creëert die schoon smelt bij mondtemperatuur terwijl structurele integriteit bij kamertemperatuur behouden blijft."
        }
      },
      {
        question: {
          en: "What is the critical water activity (aw) range for preventing microbial growth while maintaining optimal donut texture?",
          es: "¿Cuál es el rango crítico de actividad del agua (aw) para prevenir el crecimiento microbiano mientras se mantiene la textura óptima del donut?",
          de: "Was ist der kritische Wasseraktivitäts (aw) Bereich zur Verhinderung von mikrobiellem Wachstum bei Erhaltung optimaler Donut-Textur?",
          nl: "Wat is het kritieke wateractiviteit (aw) bereik voor het voorkomen van microbiële groei terwijl optimale donut textuur behouden blijft?"
        },
        options: [
          { en: "0.75-0.80", es: "0,75-0,80", de: "0,75-0,80", nl: "0,75-0,80" },
          { en: "0.80-0.85", es: "0,80-0,85", de: "0,80-0,85", nl: "0,80-0,85" },
          { en: "0.85-0.90", es: "0,85-0,90", de: "0,85-0,90", nl: "0,85-0,90" },
          { en: "0.90-0.95", es: "0,90-0,95", de: "0,90-0,95", nl: "0,90-0,95" }
        ],
        correct: 2,
        explanation: {
          en: "Water activity of 0.85-0.90 prevents most bacterial and mold growth while allowing sufficient moisture for desirable soft texture and proper starch gelatinization in donuts.",
          es: "La actividad del agua de 0,85-0,90 previene la mayoría del crecimiento bacteriano y de moho mientras permite suficiente humedad para la textura suave deseable y la gelatinización adecuada del almidón en donuts.",
          de: "Wasseraktivität von 0,85-0,90 verhindert das meiste bakterielle und Schimmelwachstum, während ausreichend Feuchtigkeit für erwünschte weiche Textur und ordnungsgemäße Stärkegelatinierung in Donuts ermöglicht wird.",
          nl: "Wateractiviteit van 0,85-0,90 voorkomt de meeste bacteriële en schimmelgroei terwijl voldoende vocht wordt toegestaan voor gewenste zachte textuur en juiste zetmeel gelatinisatie in donuts."
        }
      },
      {
        question: {
          en: "Which emulsifier system provides the best fat distribution and aeration in cake donut batters?",
          es: "¿Qué sistema emulsificante proporciona la mejor distribución de grasa y aireación en masas de donuts tipo cake?",
          de: "Welches Emulgatorsystem bietet die beste Fettverteilung und Belüftung in Cake-Donut-Teigen?",
          nl: "Welk emulgator systeem biedt de beste vetverdeling en beluchting in cake donut beslag?"
        },
        options: [
          { en: "Lecithin + Mono-diglycerides", es: "Lecitina + Mono-diglicéridos", de: "Lecithin + Mono-Diglyceride", nl: "Lecithine + Mono-diglyceriden" },
          { en: "DATEM + SSL", es: "DATEM + SSL", de: "DATEM + SSL", nl: "DATEM + SSL" },
          { en: "Polysorbate 60 + Polyglycerol esters", es: "Polisorbato 60 + Ésteres de poliglicerol", de: "Polysorbat 60 + Polyglycerinester", nl: "Polysorbaat 60 + Polyglycerol esters" },
          { en: "Propylene glycol monostearate + Sucrose esters", es: "Monoestearato de propilenglicol + Ésteres de sacarosa", de: "Propylenglykol-Monostearat + Saccharoseester", nl: "Propyleenglycol monostearaat + Sucrose esters" }
        ],
        correct: 1,
        explanation: {
          en: "DATEM (diacetyl tartaric acid esters) combined with SSL (sodium stearoyl lactylate) creates superior emulsion stability and air incorporation, resulting in tender crumb structure and optimal volume.",
          es: "DATEM (ésteres de ácido tartárico diacetílico) combinado con SSL (estearoil lactilato de sodio) crea una estabilidad de emulsión superior e incorporación de aire, resultando en una estructura de miga tierna y volumen óptimo.",
          de: "DATEM (Diacetylweinsäureester) kombiniert mit SSL (Natriumstearoyllactylat) schafft überlegene Emulsionsstabilität und Lufteinarbeitung, was zu zarter Krumenstruktur und optimalem Volumen führt.",
          nl: "DATEM (diacetyl wijnstonzuur esters) gecombineerd met SSL (natrium stearoyl lactylaat) creëert superieure emulsie stabiliteit en lucht incorporatie, wat resulteert in zachte kruim structuur en optimaal volume."
        }
      },
      {
        question: {
          en: "What is the optimal specific volume range for achieving perfect donut density and texture balance?",
          es: "¿Cuál es el rango óptimo de volumen específico para lograr el equilibrio perfecto de densidad y textura del donut?",
          de: "Was ist der optimale spezifische Volumenbereich für perfekte Donut-Dichte und Texturbalance?",
          nl: "Wat is het optimale specifieke volume bereik voor het bereiken van perfecte donut dichtheid en textuurbalans?"
        },
        options: [
          { en: "2.5-3.0 cm³/g", es: "2,5-3,0 cm³/g", de: "2,5-3,0 cm³/g", nl: "2,5-3,0 cm³/g" },
          { en: "3.0-3.5 cm³/g", es: "3,0-3,5 cm³/g", de: "3,0-3,5 cm³/g", nl: "3,0-3,5 cm³/g" },
          { en: "3.5-4.0 cm³/g", es: "3,5-4,0 cm³/g", de: "3,5-4,0 cm³/g", nl: "3,5-4,0 cm³/g" },
          { en: "4.0-4.5 cm³/g", es: "4,0-4,5 cm³/g", de: "4,0-4,5 cm³/g", nl: "4,0-4,5 cm³/g" }
        ],
        correct: 2,
        explanation: {
          en: "Specific volume of 3.5-4.0 cm³/g provides the ideal balance between lightness and structural integrity, creating the characteristic tender yet substantial mouthfeel expected in quality donuts.",
          es: "El volumen específico de 3,5-4,0 cm³/g proporciona el equilibrio ideal entre ligereza e integridad estructural, creando la característica sensación en boca tierna pero sustancial esperada en donuts de calidad.",
          de: "Spezifisches Volumen von 3,5-4,0 cm³/g bietet die ideale Balance zwischen Leichtigkeit und struktureller Integrität und schafft das charakteristische zarte aber substanzielle Mundgefühl, das bei Qualitäts-Donuts erwartet wird.",
          nl: "Specifiek volume van 3,5-4,0 cm³/g biedt de ideale balans tussen lichtheid en structurele integriteit, wat het karakteristieke zachte maar substantiële mondgevoel creëert dat verwacht wordt in kwaliteits donuts."
        }
      },
      {
        question: {
          en: "Which starch modification technique provides the best texture improvement and oil barrier properties in donuts?",
          es: "¿Qué técnica de modificación del almidón proporciona la mejor mejora de textura y propiedades de barrera de aceite en donuts?",
          de: "Welche Stärkemodifikationstechnik bietet die beste Texturverbesserung und Ölbarriere-Eigenschaften in Donuts?",
          nl: "Welke zetmeel modificatie techniek biedt de beste textuurverbetering en olie barrière eigenschappen in donuts?"
        },
        options: [
          { en: "Cross-linking", es: "Entrecruzamiento", de: "Quervernetzung", nl: "Kruisverbinding" },
          { en: "Acetylation", es: "Acetilación", de: "Acetylierung", nl: "Acetylering" },
          { en: "Hydroxypropylation", es: "Hidroxipropilación", de: "Hydroxypropylierung", nl: "Hydroxypropylering" },
          { en: "Phosphorylation", es: "Fosforilación", de: "Phosphorylierung", nl: "Fosforylering" }
        ],
        correct: 0,
        explanation: {
          en: "Cross-linking creates stronger intermolecular bonds in starch, improving heat and shear stability while forming better oil barriers during frying, resulting in less greasy donuts with improved texture.",
          es: "El entrecruzamiento crea enlaces intermoleculares más fuertes en el almidón, mejorando la estabilidad al calor y cizallamiento mientras forma mejores barreras de aceite durante la fritura, resultando en donuts menos grasosos con textura mejorada.",
          de: "Quervernetzung schafft stärkere intermolekulare Bindungen in Stärke, verbessert Hitze- und Scherstabilität, während bessere Ölbarrieren beim Frittieren gebildet werden, was zu weniger fettigen Donuts mit verbesserter Textur führt.",
          nl: "Kruisverbinding creëert sterkere intermoleculaire bindingen in zetmeel, wat hitте- en afschuifstabiliteit verbetert terwijl betere olie barrières worden gevormd tijdens het bakken, wat resulteert in minder vette donuts met verbeterde textuur."
        }
      },
      {
        question: {
          en: "What is the critical viscosity range for donut batter that ensures proper pumping and shape retention during automated production?",
          es: "¿Cuál es el rango crítico de viscosidad para la masa de donut que asegura el bombeo adecuado y la retención de forma durante la producción automatizada?",
          de: "Was ist der kritische Viskositätsbereich für Donut-Teig, der ordnungsgemäßes Pumpen und Formretention während automatisierter Produktion gewährleistet?",
          nl: "Wat is het kritieke viscositeit bereik voor donut beslag dat juist pompen en vormretentie tijdens geautomatiseerde productie verzekert?"
        },
        options: [
          { en: "15,000-25,000 cP", es: "15.000-25.000 cP", de: "15.000-25.000 cP", nl: "15.000-25.000 cP" },
          { en: "25,000-35,000 cP", es: "25.000-35.000 cP", de: "25.000-35.000 cP", nl: "25.000-35.000 cP" },
          { en: "35,000-45,000 cP", es: "35.000-45.000 cP", de: "35.000-45.000 cP", nl: "35.000-45.000 cP" },
          { en: "45,000-55,000 cP", es: "45.000-55.000 cP", de: "45.000-55.000 cP", nl: "45.000-55.000 cP" }
        ],
        correct: 1,
        explanation: {
          en: "Viscosity of 25,000-35,000 cP provides optimal flow characteristics for depositing equipment while maintaining sufficient body to hold the characteristic donut shape before and during frying.",
          es: "La viscosidad de 25.000-35.000 cP proporciona características de flujo óptimas para equipos de deposición mientras mantiene suficiente cuerpo para mantener la forma característica del donut antes y durante la fritura.",
          de: "Viskosität von 25.000-35.000 cP bietet optimale Fließeigenschaften für Dosiergeräte, während ausreichend Körper erhalten bleibt, um die charakteristische Donut-Form vor und während des Frittierens zu halten.",
          nl: "Viscositeit van 25.000-35.000 cP biedt optimale stroomkarakteristieken voor doseerapparatuur terwijl voldoende body behouden blijft om de karakteristieke donut vorm vast te houden voor en tijdens het bakken."
        }
      },
      {
        question: {
          en: "Which protein functionality modifier provides the best gluten network strengthening without affecting donut flavor?",
          es: "¿Qué modificador de funcionalidad proteica proporciona el mejor fortalecimiento de la red de gluten sin afectar el sabor del donut?",
          de: "Welcher Proteinfunktionalitäts-Modifikator bietet die beste Gluten-Netzwerk-Stärkung ohne Donut-Geschmack zu beeinträchtigen?",
          nl: "Welke proteïne functionaliteit modifier biedt de beste glutennetwerk versterking zonder donut smaak te beïnvloeden?"
        },
        options: [
          { en: "Ascorbic acid", es: "Ácido ascórbico", de: "Ascorbinsäure", nl: "Ascorbinezuur" },
          { en: "Azodicarbonamide", es: "Azodicarbonamida", de: "Azodicarbonamid", nl: "Azodicarbonamide" },
          { en: "L-Cysteine", es: "L-Cisteína", de: "L-Cystein", nl: "L-Cysteïne" },
          { en: "Potassium bromate", es: "Bromato de potasio", de: "Kaliumbromat", nl: "Kaliumbroomaat" }
        ],
        correct: 0,
        explanation: {
          en: "Ascorbic acid (Vitamin C) acts as a natural dough conditioner that strengthens gluten bonds through oxidation, improving dough handling and texture without imparting any off-flavors to the final product.",
          es: "El ácido ascórbico (Vitamina C) actúa como un acondicionador natural de masa que fortalece los enlaces de gluten a través de oxidación, mejorando el manejo de la masa y la textura sin impartir sabores extraños al producto final.",
          de: "Ascorbinsäure (Vitamin C) wirkt als natürlicher Teigkonditionierer, der Glutenbindungen durch Oxidation stärkt, Teigbehandlung und Textur verbessert, ohne dem Endprodukt Fehlgeschmäcker zu verleihen.",
          nl: "Ascorbinezuur (Vitamine C) werkt als natuurlijke deegconditioner die glutenbindingen versterkt door oxidatie, wat deegbehandeling en textuur verbetert zonder bijsmaken aan het eindproduct toe te voegen."
        }
      },
      {
        question: {
          en: "What is the optimal crumb cell size distribution for achieving the best donut texture and oil absorption characteristics?",
          es: "¿Cuál es la distribución óptima del tamaño de células de miga para lograr la mejor textura de donut y características de absorción de aceite?",
          de: "Was ist die optimale Krumen-Zellgrößenverteilung für beste Donut-Textur und Ölabsorptions-Eigenschaften?",
          nl: "Wat is de optimale kruim celgrootte verdeling voor het bereiken van de beste donut textuur en olieabsorptie eigenschappen?"
        },
        options: [
          { en: "Uniform small cells (1-2mm)", es: "Células pequeñas uniformes (1-2mm)", de: "Gleichmäßige kleine Zellen (1-2mm)", nl: "Uniforme kleine cellen (1-2mm)" },
          { en: "Mixed small-medium cells (1-4mm)", es: "Células mixtas pequeñas-medianas (1-4mm)", de: "Gemischte klein-mittel Zellen (1-4mm)", nl: "Gemengde klein-middelgrote cellen (1-4mm)" },
          { en: "Predominantly large cells (3-6mm)", es: "Células predominantemente grandes (3-6mm)", de: "Überwiegend große Zellen (3-6mm)", nl: "Voornamelijk grote cellen (3-6mm)" },
          { en: "Irregular mixed sizes (1-8mm)", es: "Tamaños mixtos irregulares (1-8mm)", de: "Unregelmäßige gemischte Größen (1-8mm)", nl: "Onregelmatige gemengde groottes (1-8mm)" }
        ],
        correct: 1,
        explanation: {
          en: "Mixed small-medium cells (1-4mm) provide optimal balance between tender mouthfeel and structural integrity while creating sufficient surface area for controlled oil penetration and proper moisture retention.",
          es: "Las células mixtas pequeñas-medianas (1-4mm) proporcionan un equilibrio óptimo entre sensación en boca tierna e integridad estructural mientras crean suficiente área superficial para penetración controlada de aceite y retención adecuada de humedad.",
          de: "Gemischte klein-mittel Zellen (1-4mm) bieten optimale Balance zwischen zartem Mundgefühl und struktureller Integrität, während ausreichend Oberfläche für kontrollierte Öldurchdringung und ordnungsgemäße Feuchtigkeitsretention geschaffen wird.",
          nl: "Gemengde klein-middelgrote cellen (1-4mm) bieden optimale balans tussen zacht mondgevoel en structurele integriteit terwijl voldoende oppervlak wordt gecreëerd voor gecontroleerde oliepenetratie en juiste vochtretentie."
        }
      },
      {
        question: {
          en: "Which fermentation control method provides the most consistent gas production for uniform donut rise in commercial settings?",
          es: "¿Qué método de control de fermentación proporciona la producción de gas más consistente para un levantamiento uniforme de donuts en entornos comerciales?",
          de: "Welche Fermentationskontrollmethode bietet die konsistenteste Gasproduktion für gleichmäßige Donut-Aufgangung in kommerziellen Umgebungen?",
          nl: "Welke fermentatie controle methode biedt de meest consistente gasproductie voor uniforme donut rijs in commerciële omgevingen?"
        },
        options: [
          { en: "Temperature cycling", es: "Ciclado de temperatura", de: "Temperaturzyklen", nl: "Temperatuur cyclus" },
          { en: "pH buffering", es: "Amortiguación de pH", de: "pH-Pufferung", nl: "pH buffering" },
          { en: "Controlled atmosphere (CO2/N2)", es: "Atmósfera controlada (CO2/N2)", de: "Kontrollierte Atmosphäre (CO2/N2)", nl: "Gecontroleerde atmosfeer (CO2/N2)" },
          { en: "Enzyme regulation", es: "Regulación enzimática", de: "Enzymregulation", nl: "Enzym regulatie" }
        ],
        correct: 2,
        explanation: {
          en: "Controlled atmosphere with optimal CO2/N2 ratios regulates yeast metabolism precisely, ensuring consistent fermentation rates and gas production regardless of ambient conditions or batch variations.",
          es: "La atmósfera controlada con proporciones óptimas de CO2/N2 regula el metabolismo de la levadura con precisión, asegurando tasas de fermentación consistentes y producción de gas independientemente de las condiciones ambientales o variaciones de lote.",
          de: "Kontrollierte Atmosphäre mit optimalen CO2/N2-Verhältnissen reguliert Hefestoffwechsel präzise und gewährleistet konsistente Fermentationsraten und Gasproduktion unabhängig von Umgebungsbedingungen oder Chargenabweichungen.",
          nl: "Gecontroleerde atmosfeer met optimale CO2/N2 verhoudingen reguleert gistmetabolisme precies, wat consistente fermentatiesnelheden en gasproductie verzekert ongeacht omgevingsomstandigheden of batch variaties."
        }
      },
      {
        question: {
          en: "What is the critical heat transfer coefficient range for achieving uniform doneness throughout donut cross-section during frying?",
          es: "¿Cuál es el rango crítico del coeficiente de transferencia de calor para lograr una cocción uniforme en toda la sección transversal del donut durante la fritura?",
          de: "Was ist der kritische Wärmeübertragungskoeffizient-Bereich für gleichmäßige Garung durch den gesamten Donut-Querschnitt beim Frittieren?",
          nl: "Wat is het kritieke warmteoverdracht coëfficiënt bereik voor het bereiken van uniforme garing door de hele donut doorsnede tijdens het bakken?"
        },
        options: [
          { en: "200-300 W/m²K", es: "200-300 W/m²K", de: "200-300 W/m²K", nl: "200-300 W/m²K" },
          { en: "300-400 W/m²K", es: "300-400 W/m²K", de: "300-400 W/m²K", nl: "300-400 W/m²K" },
          { en: "400-500 W/m²K", es: "400-500 W/m²K", de: "400-500 W/m²K", nl: "400-500 W/m²K" },
          { en: "500-600 W/m²K", es: "500-600 W/m²K", de: "500-600 W/m²K", nl: "500-600 W/m²K" }
        ],
        correct: 1,
        explanation: {
          en: "Heat transfer coefficient of 300-400 W/m²K provides optimal balance between surface browning rate and internal heat penetration, ensuring complete cooking without overcooking the exterior.",
          es: "El coeficiente de transferencia de calor de 300-400 W/m²K proporciona un equilibrio óptimo entre la velocidad de dorado superficial y la penetración de calor interna, asegurando cocción completa sin sobrecocinar el exterior.",
          de: "Wärmeübertragungskoeffizient von 300-400 W/m²K bietet optimale Balance zwischen Oberflächenbräunungsrate und innerer Wärmedurchdringung, gewährleistet vollständiges Garen ohne Überkochen des Äußeren.",
          nl: "Warmteoverdracht coëfficiënt van 300-400 W/m²K biedt optimale balans tussen oppervlakte bruining snelheid en interne warmte penetratie, wat volledige garing verzekert zonder het buitenste te overkoken."
        }
      },
      {
        question: {
          en: "Which antioxidant system provides the best protection against oil degradation and off-flavor development in donut frying operations?",
          es: "¿Qué sistema antioxidante proporciona la mejor protección contra la degradación del aceite y el desarrollo de sabores extraños en operaciones de fritura de donuts?",
          de: "Welches Antioxidans-System bietet den besten Schutz gegen Ölabbau und Fehlaromen-Entwicklung in Donut-Frittier-Operationen?",
          nl: "Welk antioxidant systeem biedt de beste bescherming tegen olie degradatie en bijsmaak ontwikkeling in donut bak operaties?"
        },
        options: [
          { en: "BHT + BHA", es: "BHT + BHA", de: "BHT + BHA", nl: "BHT + BHA" },
          { en: "TBHQ + Citric acid", es: "TBHQ + Ácido cítrico", de: "TBHQ + Zitronensäure", nl: "TBHQ + Citroenzuur" },
          { en: "Mixed tocopherols + Rosemary extract", es: "Tocoferoles mixtos + Extracto de romero", de: "Gemischte Tocopherole + Rosmarinextrakt", nl: "Gemengde tocoferolen + Rozemarijn extract" },
          { en: "Ascorbyl palmitate + Lecithin", es: "Palmitato de ascorbilo + Lecitina", de: "Ascorbylpalmitat + Lecithin", nl: "Ascorbyl palmitaat + Lecithine" }
        ],
        correct: 1,
        explanation: {
          en: "TBHQ (tert-butylhydroquinone) combined with citric acid provides superior thermal stability and metal chelation properties, effectively preventing oxidative rancidity during high-temperature frying operations.",
          es: "TBHQ (terc-butilhidroquinona) combinado con ácido cítrico proporciona estabilidad térmica superior y propiedades de quelación de metales, previniendo efectivamente la rancidez oxidativa durante operaciones de fritura a alta temperatura.",
          de: "TBHQ (tert-Butylhydrochinon) kombiniert mit Zitronensäure bietet überlegene thermische Stabilität und Metallchelat-Eigenschaften, verhindert effektiv oxidative Ranzigkeit während Hochtemperatur-Frittier-Operationen.",
          nl: "TBHQ (tert-butylhydrochinon) gecombineerd met citroenzuur biedt superieure thermische stabiliteit en metaal chelatie eigenschappen, wat oxidatieve ranzigheid effectief voorkomt tijdens hoge temperatuur bak operaties."
        }
      },
      {
        question: {
          en: "What is the optimal protein-to-starch ratio in donut formulations for achieving maximum volume expansion and tender crumb structure?",
          es: "¿Cuál es la proporción óptima de proteína a almidón en formulaciones de donuts para lograr la máxima expansión de volumen y estructura de miga tierna?",
          de: "Was ist das optimale Protein-zu-Stärke-Verhältnis in Donut-Formulierungen für maximale Volumenexpansion und zarte Krumenstruktur?",
          nl: "Wat is de optimale proteïne-tot-zetmeel verhouding in donut formuleringen voor het bereiken van maximale volume expansie en zachte kruim structuur?"
        },
        options: [
          { en: "1:8 to 1:10", es: "1:8 a 1:10", de: "1:8 bis 1:10", nl: "1:8 tot 1:10" },
          { en: "1:6 to 1:8", es: "1:6 a 1:8", de: "1:6 bis 1:8", nl: "1:6 tot 1:8" },
          { en: "1:4 to 1:6", es: "1:4 a 1:6", de: "1:4 bis 1:6", nl: "1:4 tot 1:6" },
          { en: "1:2 to 1:4", es: "1:2 a 1:4", de: "1:2 bis 1:4", nl: "1:2 tot 1:4" }
        ],
        correct: 1,
        explanation: {
          en: "A protein-to-starch ratio of 1:6 to 1:8 provides sufficient gluten development for gas retention while allowing adequate starch gelatinization for tender texture and optimal volume expansion during processing.",
          es: "Una proporción de proteína a almidón de 1:6 a 1:8 proporciona suficiente desarrollo de gluten para retención de gas mientras permite adecuada gelatinización del almidón para textura tierna y expansión óptima de volumen durante el procesamiento.",
          de: "Ein Protein-zu-Stärke-Verhältnis von 1:6 bis 1:8 bietet ausreichende Glutenentwicklung für Gasretention, während angemessene Stärkegelatinierung für zarte Textur und optimale Volumenexpansion während der Verarbeitung ermöglicht wird.",
          nl: "Een proteïne-tot-zetmeel verhouding van 1:6 tot 1:8 biedt voldoende glutenontwikkeling voor gasretentie terwijl adequate zetmeel gelatinisatie wordt toegestaan voor zachte textuur en optimale volume expansie tijdens verwerking."
        }
      },
      {
        question: {
          en: "Which surface treatment provides the best adhesion for donut coatings while maintaining optimal texture contrast?",
          es: "¿Qué tratamiento superficial proporciona la mejor adhesión para recubrimientos de donuts mientras mantiene el contraste de textura óptimo?",
          de: "Welche Oberflächenbehandlung bietet die beste Haftung für Donut-Beschichtungen bei Erhaltung optimalen Texturkontrastes?",
          nl: "Welke oppervlakte behandeling biedt de beste hechting voor donut coatings terwijl optimaal textuurcontrast behouden blijft?"
        },
        options: [
          { en: "Steam conditioning", es: "Acondicionamiento con vapor", de: "Dampfkonditionierung", nl: "Stoom conditionering" },
          { en: "Sugar solution misting", es: "Pulverización con solución de azúcar", de: "Zuckerlösung-Verneblung", nl: "Suiker oplossing verstuiving" },
          { en: "Enzyme treatment", es: "Tratamiento enzimático", de: "Enzymbehandlung", nl: "Enzym behandeling" },
          { en: "Alcohol spray application", es: "Aplicación por pulverización de alcohol", de: "Alkohol-Sprühanwendung", nl: "Alcohol spray applicatie" }
        ],
        correct: 0,
        explanation: {
          en: "Steam conditioning creates optimal surface hydration and temperature for coating adhesion while maintaining the structural integrity needed for textural contrast between coating and donut interior.",
          es: "El acondicionamiento con vapor crea hidratación y temperatura superficial óptimas para la adhesión del recubrimiento mientras mantiene la integridad estructural necesaria para el contraste textural entre el recubrimiento y el interior del donut.",
          de: "Dampfkonditionierung schafft optimale Oberflächenhydratation und Temperatur für Beschichtungshaftung, während die strukturelle Integrität erhalten bleibt, die für Texturkontrast zwischen Beschichtung und Donut-Inneren benötigt wird.",
          nl: "Stoom conditionering creëert optimale oppervlakte hydratatie en temperatuur voor coating hechting terwijl de structurele integriteit behouden blijft die nodig is voor textuurcontrast tussen coating en donut binnenkant."
        }
      },
      {
        question: {
          en: "What causes donuts to have a greasy texture?",
          es: "¿Qué causa que las donas tengan una textura grasosa?",
          de: "Was verursacht, dass Donuts eine fettige Textur haben?",
          nl: "Wat veroorzaakt dat donuts een vettige textuur hebben?"
        },
        options: [
          { en: "Oil temperature too low or frying too long", es: "Temperatura del aceite muy baja o freír demasiado tiempo", de: "Öltemperatur zu niedrig oder zu langes Frittieren", nl: "Olietemperatuur te laag of te lang frituren" },
          { en: "Too much sugar in dough", es: "Demasiada azúcar en la masa", de: "Zu viel Zucker im Teig", nl: "Te veel suiker in het deeg" },
          { en: "Using the wrong flour", es: "Usar la harina incorrecta", de: "Falsches Mehl verwenden", nl: "Verkeerd meel gebruiken" },
          { en: "Adding too much yeast", es: "Agregar demasiada levadura", de: "Zu viel Hefe hinzufügen", nl: "Te veel gist toevoegen" }
        ],
        correct: 0,
        explanation: {
          en: "Donuts become greasy when the oil temperature is too low, causing them to absorb excess oil, or when they're fried too long, allowing more oil penetration.",
          es: "Las donas se vuelven grasosas cuando la temperatura del aceite es muy baja, causando que absorban aceite en exceso, o cuando se fríen demasiado tiempo, permitiendo más penetración de aceite.",
          de: "Donuts werden fettig, wenn die Öltemperatur zu niedrig ist, wodurch sie überschüssiges Öl absorbieren, oder wenn sie zu lange frittiert werden, was mehr Öleindringen ermöglicht.",
          nl: "Donuts worden vettig wanneer de olietemperatuur te laag is, waardoor ze overtollige olie absorberen, of wanneer ze te lang gefrituurd worden, wat meer olie-indringen mogelijk maakt."
        }
      },
      {
        question: {
          en: "What is the purpose of proofing yeast donuts before frying?",
          es: "¿Cuál es el propósito de fermentar las donas de levadura antes de freír?",
          de: "Was ist der Zweck des Gehenlassens von Hefe-Donuts vor dem Frittieren?",
          nl: "Wat is het doel van het rijzen van gist donuts voor het frituren?"
        },
        options: [
          { en: "Allow yeast to create air bubbles for light texture", es: "Permitir que la levadura cree burbujas de aire para textura ligera", de: "Der Hefe erlauben, Luftblasen für leichte Textur zu schaffen", nl: "De gist toestaan luchtbellen te creëren voor lichte textuur" },
          { en: "Make them taste sweeter", es: "Hacerlas saber más dulces", de: "Sie süßer schmecken lassen", nl: "Ze zoeter laten smaken" },
          { en: "Change the color", es: "Cambiar el color", de: "Die Farbe ändern", nl: "De kleur veranderen" },
          { en: "Make them cook faster", es: "Hacerlas cocinar más rápido", de: "Sie schneller kochen lassen", nl: "Ze sneller laten koken" }
        ],
        correct: 0,
        explanation: {
          en: "Proofing allows the yeast to ferment and create carbon dioxide bubbles, which gives the donuts their light, airy texture when fried.",
          es: "La fermentación permite que la levadura fermente y cree burbujas de dióxido de carbono, lo que da a las donas su textura ligera y aireada cuando se fríen.",
          de: "Das Gehen lassen ermöglicht der Hefe zu fermentieren und Kohlendioxid-Blasen zu erzeugen, was den Donuts ihre leichte, luftige Textur beim Frittieren verleiht.",
          nl: "Rijzen stelt de gist in staat te fermenteren en koolstofdioxide-bellen te creëren, wat de donuts hun lichte, luchtige textuur geeft wanneer ze gefrituurd worden."
        }
      }
    ]
  };

  // Export for use in the quiz application
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level3;
  } else if (typeof window !== 'undefined') {
    window.level3 = level3;
  }
})();
