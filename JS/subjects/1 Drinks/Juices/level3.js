// Quiz Level 3: Drinken - Sappen (Intermediate Juices)
(function() {
  const level3 = {
    name: {
      en: "Intermediate Juice Knowledge",
      es: "Conocimientos Intermedios de Jugos",
      de: "Mittlere Saft-Kenntnisse",
      nl: "Gemiddelde Sappen Kennis"
    },
    questions: [
      {
        question: {
          en: "What is the difference between fresh-squeezed and processed juice?",
          es: "¿Cuál es la diferencia entre jugo recién exprimido y jugo procesado?",
          de: "Was ist der Unterschied zwischen frisch gepresstem und verarbeitetem Saft?",
          nl: "Wat is het verschil tussen vers geperst en verwerkt sap?"
        },
        options: [
          { en: "No difference", es: "No hay diferencia", de: "Kein Unterschied", nl: "Geen verschil" },
          { en: "Fresh-squeezed has no preservatives", es: "El recién exprimido no tiene conservantes", de: "Frisch gepresst hat keine Konservierungsstoffe", nl: "Vers geperst heeft geen conserveermiddelen" },
          { en: "Processed juice is always better", es: "El jugo procesado siempre es mejor", de: "Verarbeiteter Saft ist immer besser", nl: "Verwerkt sap is altijd beter" },
          { en: "Fresh-squeezed is artificial", es: "El recién exprimido es artificial", de: "Frisch gepresst ist künstlich", nl: "Vers geperst is kunstmatig" }
        ],
        correct: 1,
        explanation: {
          en: "Fresh-squeezed juice is made directly from fruit without added preservatives, chemicals, or processing steps.",
          es: "El jugo recién exprimido se hace directamente de la fruta sin conservantes añadidos, químicos o pasos de procesamiento.",
          de: "Frisch gepresster Saft wird direkt aus Früchten ohne zugesetzte Konservierungsstoffe, Chemikalien oder Verarbeitungsschritte hergestellt.",
          nl: "Vers geperst sap wordt direct van fruit gemaakt zonder toegevoegde conserveermiddelen, chemicaliën of verwerkingsstappen."
        }
      },
      {
        question: {
          en: "What is cold-pressed juice?",
          es: "¿Qué es el jugo prensado en frío?",
          de: "Was ist kaltgepresster Saft?",
          nl: "Wat is koudgeperst sap?"
        },
        options: [
          { en: "Juice made at low temperatures", es: "Jugo hecho a temperaturas bajas", de: "Saft bei niedrigen Temperaturen hergestellt", nl: "Sap gemaakt bij lage temperaturen" },
          { en: "Juice stored in refrigerator", es: "Jugo almacenado en refrigerador", de: "Saft im Kühlschrank gelagert", nl: "Sap bewaard in koelkast" },
          { en: "Frozen juice concentrate", es: "Concentrado de jugo congelado", de: "Gefrorenes Saftkonzentrat", nl: "Bevroren sapconcentraat" },
          { en: "Juice with ice added", es: "Jugo con hielo añadido", de: "Saft mit Eis hinzugefügt", nl: "Sap met ijs toegevoegd" }
        ],
        correct: 0,
        explanation: {
          en: "Cold-pressed juice is extracted using hydraulic pressure at low temperatures, preserving more nutrients and enzymes.",
          es: "El jugo prensado en frío se extrae usando presión hidráulica a temperaturas bajas, preservando más nutrientes y enzimas.",
          de: "Kaltgepresster Saft wird mit hydraulischem Druck bei niedrigen Temperaturen extrahiert, wodurch mehr Nährstoffe und Enzyme erhalten bleiben.",
          nl: "Koudgeperst sap wordt geëxtraheerd met hydraulische druk bij lage temperaturen, waardoor meer voedingsstoffen en enzymen behouden blijven."
        }
      },
      {
        question: {
          en: "What is HPP (High Pressure Processing) in juice production?",
          es: "¿Qué es HPP (Procesamiento de Alta Presión) en la producción de jugos?",
          de: "Was ist HPP (Hochdruckverarbeitung) in der Saftproduktion?",
          nl: "Wat is HPP (Hoge Druk Verwerking) in sapproductie?"
        },
        options: [
          { en: "Adding high amounts of sugar", es: "Añadir altas cantidades de azúcar", de: "Hohe Zuckermengen hinzufügen", nl: "Hoge hoeveelheden suiker toevoegen" },
          { en: "Using extreme pressure to kill bacteria", es: "Usar presión extrema para matar bacterias", de: "Extremen Druck verwenden, um Bakterien zu töten", nl: "Extreme druk gebruiken om bacteriën te doden" },
          { en: "High-speed blending", es: "Mezcla de alta velocidad", de: "Hochgeschwindigkeitsmischung", nl: "Hoge snelheid mengen" },
          { en: "Heating juice to very high temperatures", es: "Calentar jugo a temperaturas muy altas", de: "Saft auf sehr hohe Temperaturen erhitzen", nl: "Sap verhitten tot zeer hoge temperaturen" }
        ],
        correct: 1,
        explanation: {
          en: "HPP uses extreme pressure (up to 6000 bar) to eliminate harmful bacteria while preserving nutrients and flavor.",
          es: "HPP usa presión extrema (hasta 6000 bar) para eliminar bacterias dañinas mientras preserva nutrientes y sabor.",
          de: "HPP verwendet extremen Druck (bis zu 6000 bar), um schädliche Bakterien zu eliminieren und gleichzeitig Nährstoffe und Geschmack zu erhalten.",
          nl: "HPP gebruikt extreme druk (tot 6000 bar) om schadelijke bacteriën te elimineren terwijl voedingsstoffen en smaak behouden blijven."
        }
      },
      {
        question: {
          en: "What is the main advantage of not-from-concentrate (NFC) juice?",
          es: "¿Cuál es la principal ventaja del jugo no hecho de concentrado (NFC)?",
          de: "Was ist der Hauptvorteil von Nicht-aus-Konzentrat (NFC) Saft?",
          nl: "Wat is het hoofdvoordeel van niet-uit-concentraat (NFC) sap?"
        },
        options: [
          { en: "Longer shelf life", es: "Mayor vida útil", de: "Längere Haltbarkeit", nl: "Langere houdbaarheid" },
          { en: "Lower cost", es: "Menor costo", de: "Geringere Kosten", nl: "Lagere kosten" },
          { en: "Better flavor retention", es: "Mejor retención del sabor", de: "Bessere Geschmackserhaltung", nl: "Betere smaakbehoud" },
          { en: "Easier storage", es: "Almacenamiento más fácil", de: "Einfachere Lagerung", nl: "Gemakkelijkere opslag" }
        ],
        correct: 2,
        explanation: {
          en: "NFC juice retains better flavor and nutritional value because it hasn't been concentrated and reconstituted.",
          es: "El jugo NFC retiene mejor sabor y valor nutricional porque no ha sido concentrado y reconstituido.",
          de: "NFC-Saft behält besseren Geschmack und Nährwert, weil er nicht konzentriert und rekonstituiert wurde.",
          nl: "NFC-sap behoudt betere smaak en voedingswaarde omdat het niet is geconcentreerd en gereconstitueerd."
        }
      },
      {
        question: {
          en: "What enzyme is naturally present in apple juice that causes browning?",
          es: "¿Qué enzima está naturalmente presente en el jugo de manzana que causa el pardeamiento?",
          de: "Welches Enzym ist natürlich in Apfelsaft vorhanden und verursacht Bräunung?",
          nl: "Welk enzym is van nature aanwezig in appelsap dat bruining veroorzaakt?"
        },
        options: [
          { en: "Amylase", es: "Amilasa", de: "Amylase", nl: "Amylase" },
          { en: "Polyphenol oxidase", es: "Polifenol oxidasa", de: "Polyphenoloxidase", nl: "Polyfenoloxidase" },
          { en: "Lipase", es: "Lipasa", de: "Lipase", nl: "Lipase" },
          { en: "Protease", es: "Proteasa", de: "Protease", nl: "Protease" }
        ],
        correct: 1,
        explanation: {
          en: "Polyphenol oxidase causes enzymatic browning in apple juice when exposed to oxygen, which is why some juices turn brown.",
          es: "La polifenol oxidasa causa pardeamiento enzimático en el jugo de manzana cuando se expone al oxígeno, por eso algunos jugos se vuelven marrones.",
          de: "Polyphenoloxidase verursacht enzymatische Bräunung in Apfelsaft bei Sauerstoffkontakt, weshalb manche Säfte braun werden.",
          nl: "Polyfenoloxidase veroorzaakt enzymatische bruining in appelsap bij blootstelling aan zuurstof, daarom worden sommige sappen bruin."
        }
      },
      {
        question: {
          en: "What is flash pasteurization in juice processing?",
          es: "¿Qué es la pasteurización flash en el procesamiento de jugos?",
          de: "Was ist Flash-Pasteurisierung in der Saftverarbeitung?",
          nl: "Wat is flash-pasteurisatie in sapverwerking?"
        },
        options: [
          { en: "Quick heating and cooling", es: "Calentamiento y enfriamiento rápido", de: "Schnelles Erhitzen und Abkühlen", nl: "Snel verhitten en afkoelen" },
          { en: "Adding bright lights", es: "Añadir luces brillantes", de: "Helle Lichter hinzufügen", nl: "Heldere lichten toevoegen" },
          { en: "Instant freezing", es: "Congelación instantánea", de: "Sofortiges Einfrieren", nl: "Onmiddellijk bevriezen" },
          { en: "Electrical treatment", es: "Tratamiento eléctrico", de: "Elektrische Behandlung", nl: "Elektrische behandeling" }
        ],
        correct: 0,
        explanation: {
          en: "Flash pasteurization involves heating juice to high temperature for a very short time, then quickly cooling it to preserve flavor and nutrients.",
          es: "La pasteurización flash implica calentar el jugo a alta temperatura por muy poco tiempo, luego enfriarlo rápidamente para preservar sabor y nutrientes.",
          de: "Flash-Pasteurisierung beinhaltet das Erhitzen von Saft auf hohe Temperatur für sehr kurze Zeit, dann schnelles Abkühlen zur Erhaltung von Geschmack und Nährstoffen.",
          nl: "Flash-pasteurisatie houdt in dat sap wordt verhit tot hoge temperatuur voor zeer korte tijd, dan snel wordt afgekoeld om smaak en voedingsstoffen te behouden."
        }
      },
      {
        question: {
          en: "What is the cloudy appearance in some fruit juices caused by?",
          es: "¿Qué causa la apariencia turbia en algunos jugos de frutas?",
          de: "Was verursacht das trübe Aussehen in manchen Fruchtsäften?",
          nl: "Wat veroorzaakt het troebele uiterlijk in sommige vruchtensappen?"
        },
        options: [
          { en: "Added chemicals", es: "Químicos añadidos", de: "Zugesetzte Chemikalien", nl: "Toegevoegde chemicaliën" },
          { en: "Suspended particles", es: "Partículas suspendidas", de: "Schwebende Partikel", nl: "Zwevende deeltjes" },
          { en: "Food coloring", es: "Colorante alimentario", de: "Lebensmittelfarbe", nl: "Voedselkleurstof" },
          { en: "Water contamination", es: "Contaminación del agua", de: "Wasserverschmutzung", nl: "Waterverontreiniging" }
        ],
        correct: 1,
        explanation: {
          en: "Cloudiness in juice is caused by suspended particles like pectin, proteins, and cell wall materials that give natural fruit juices their opacity.",
          es: "La turbidez en el jugo es causada por partículas suspendidas como pectina, proteínas y materiales de pared celular que dan opacidad a los jugos naturales de fruta.",
          de: "Trübung im Saft wird durch schwebende Partikel wie Pektin, Proteine und Zellwandmaterialien verursacht, die natürlichen Fruchtsäften ihre Undurchsichtigkeit verleihen.",
          nl: "Troebeling in sap wordt veroorzaakt door zwevende deeltjes zoals pectine, eiwitten en celwandmaterialen die natuurlijke vruchtensappen hun ondoorzichtigheid geven."
        }
      },
      {
        question: {
          en: "What is the purpose of clarifying juice?",
          es: "¿Cuál es el propósito de clarificar el jugo?",
          de: "Was ist der Zweck der Saftklärängerung?",
          nl: "Wat is het doel van het klaren van sap?"
        },
        options: [
          { en: "To remove sediment and particles", es: "Para quitar sedimento y partículas", de: "Sediment und Partikel zu entfernen", nl: "Om sediment en deeltjes te verwijderen" },
          { en: "To add sweetness", es: "Para añadir dulzura", de: "Süße hinzuzufügen", nl: "Om zoetheid toe te voegen" },
          { en: "To change the color", es: "Para cambiar el color", de: "Die Farbe zu ändern", nl: "Om de kleur te veranderen" },
          { en: "To increase acidity", es: "Para aumentar la acidez", de: "Die Säure zu erhöhen", nl: "Om de zuurgraad te verhogen" }
        ],
        correct: 0,
        explanation: {
          en: "Clarifying juice removes suspended particles, sediment, and cloudiness to create a clear, transparent appearance.",
          es: "Clarificar el jugo remueve partículas suspendidas, sedimento y turbidez para crear una apariencia clara y transparente.",
          de: "Saftklärängerung entfernt schwebende Partikel, Sediment und Trübung, um ein klares, transparentes Aussehen zu schaffen.",
          nl: "Het klaren van sap verwijdert zwevende deeltjes, sediment en troebeling om een helder, transparant uiterlijk te creëren."
        }
      },
      {
        question: {
          en: "What is the difference between pulp and no-pulp orange juice in terms of fiber content?",
          es: "¿Cuál es la diferencia entre jugo de naranja con pulpa y sin pulpa en términos de contenido de fibra?",
          de: "Was ist der Unterschied zwischen Orangensaft mit und ohne Fruchtfleisch in Bezug auf den Fasergehalt?",
          nl: "Wat is het verschil tussen sinaasappelsap met en zonder vruchtvlees wat betreft vezelgehalte?"
        },
        options: [
          { en: "No difference", es: "No hay diferencia", de: "Kein Unterschied", nl: "Geen verschil" },
          { en: "Pulp juice has more fiber", es: "El jugo con pulpa tiene más fibra", de: "Saft mit Fruchtfleisch hat mehr Fasern", nl: "Sap met vruchtvlees heeft meer vezel" },
          { en: "No-pulp juice has more fiber", es: "El jugo sin pulpa tiene más fibra", de: "Saft ohne Fruchtfleisch hat mehr Fasern", nl: "Sap zonder vruchtvlees heeft meer vezel" },
          { en: "Both have zero fiber", es: "Ambos tienen cero fibra", de: "Beide haben null Fasern", nl: "Beide hebben nul vezel" }
        ],
        correct: 1,
        explanation: {
          en: "Orange juice with pulp contains more dietary fiber because the pulp includes cell wall materials and pectin from the fruit.",
          es: "El jugo de naranja con pulpa contiene más fibra dietética porque la pulpa incluye materiales de pared celular y pectina de la fruta.",
          de: "Orangensaft mit Fruchtfleisch enthält mehr Ballaststoffe, weil das Fruchtfleisch Zellwandmaterialien und Pektin aus der Frucht enthält.",
          nl: "Sinaasappelsap met vruchtvlees bevat meer voedingsvezel omdat het vruchtvlees celwandmaterialen en pectine uit de vrucht bevat."
        }
      },
      {
        question: {
          en: "What is enzymatic clarification in juice processing?",
          es: "¿Qué es la clarificación enzimática en el procesamiento de jugos?",
          de: "Was ist enzymatische Klärung in der Saftverarbeitung?",
          nl: "Wat is enzymatische klaring in sapverwerking?"
        },
        options: [
          { en: "Using enzymes to break down pectin", es: "Usar enzimas para descomponer la pectina", de: "Enzyme verwenden, um Pektin abzubauen", nl: "Enzymen gebruiken om pectine af te breken" },
          { en: "Adding artificial enzymes", es: "Añadir enzimas artificiales", de: "Künstliche Enzyme hinzufügen", nl: "Kunstmatige enzymen toevoegen" },
          { en: "Removing all enzymes", es: "Quitar todas las enzimas", de: "Alle Enzyme entfernen", nl: "Alle enzymen verwijderen" },
          { en: "Heating enzymes", es: "Calentar enzimas", de: "Enzyme erhitzen", nl: "Enzymen verhitten" }
        ],
        correct: 0,
        explanation: {
          en: "Enzymatic clarification uses pectinase enzymes to break down pectin, which helps remove cloudiness and improves juice clarity.",
          es: "La clarificación enzimática usa enzimas pectinasa para descomponer la pectina, lo que ayuda a quitar la turbidez y mejora la claridad del jugo.",
          de: "Enzymatische Klärung verwendet Pektinase-Enzyme, um Pektin abzubauen, was hilft, Trübung zu entfernen und die Saftklarheit zu verbessern.",
          nl: "Enzymatische klaring gebruikt pectinase-enzymen om pectine af te breken, wat helpt troebeling te verwijderen en de saphelderheid te verbeteren."
        }
      },
      {
        question: {
          en: "What is the Brix scale used for in juice production?",
          es: "¿Para qué se usa la escala Brix en la producción de jugos?",
          de: "Wofür wird die Brix-Skala in der Saftproduktion verwendet?",
          nl: "Waarvoor wordt de Brix-schaal gebruikt in sapproductie?"
        },
        options: [
          { en: "Measuring sugar content", es: "Medir el contenido de azúcar", de: "Zuckergehalt messen", nl: "Suikergehalte meten" },
          { en: "Measuring acidity", es: "Medir la acidez", de: "Säure messen", nl: "Zuurgraad meten" },
          { en: "Measuring color intensity", es: "Medir la intensidad del color", de: "Farbintensität messen", nl: "Kleurintensiteit meten" },
          { en: "Measuring vitamin content", es: "Medir el contenido de vitaminas", de: "Vitamingehalt messen", nl: "Vitaminegehalte meten" }
        ],
        correct: 0,
        explanation: {
          en: "The Brix scale measures the sugar content in juice, with each degree Brix representing approximately 1 gram of sucrose per 100 grams of solution.",
          es: "La escala Brix mide el contenido de azúcar en el jugo, donde cada grado Brix representa aproximadamente 1 gramo de sacarosa por 100 gramos de solución.",
          de: "Die Brix-Skala misst den Zuckergehalt im Saft, wobei jeder Brix-Grad etwa 1 Gramm Saccharose pro 100 Gramm Lösung darstellt.",
          nl: "De Brix-schaal meet het suikergehalte in sap, waarbij elke Brix-graad ongeveer 1 gram sucrose per 100 gram oplossing vertegenwoordigt."
        }
      },
      {
        question: {
          en: "What is the purpose of adding ascorbic acid to fruit juice?",
          es: "¿Cuál es el propósito de añadir ácido ascórbico al jugo de frutas?",
          de: "Was ist der Zweck der Zugabe von Ascorbinsäure zu Fruchtsaft?",
          nl: "Wat is het doel van het toevoegen van ascorbinezuur aan vruchtensap?"
        },
        options: [
          { en: "To prevent oxidation and browning", es: "Para prevenir la oxidación y el pardeamiento", de: "Oxidation und Bräunung zu verhindern", nl: "Om oxidatie en bruining te voorkomen" },
          { en: "To add sweetness", es: "Para añadir dulzura", de: "Süße hinzuzufügen", nl: "Om zoetheid toe te voegen" },
          { en: "To change the color", es: "Para cambiar el color", de: "Die Farbe zu ändern", nl: "Om de kleur te veranderen" },
          { en: "To thicken the juice", es: "Para espesar el jugo", de: "Den Saft zu verdicken", nl: "Om het sap te verdikken" }
        ],
        correct: 0,
        explanation: {
          en: "Ascorbic acid (vitamin C) acts as an antioxidant that prevents oxidation and browning in fruit juice, while also providing nutritional benefits.",
          es: "El ácido ascórbico (vitamina C) actúa como antioxidante que previene la oxidación y el pardeamiento en el jugo de frutas, mientras también proporciona beneficios nutricionales.",
          de: "Ascorbinsäure (Vitamin C) wirkt als Antioxidans, das Oxidation und Bräunung im Fruchtsaft verhindert und gleichzeitig ernährungsphysiologische Vorteile bietet.",
          nl: "Ascorbinezuur (vitamine C) werkt als een antioxidant die oxidatie en bruining in vruchtensap voorkomt, terwijl het ook voedingsvoordelen biedt."
        }
      },
      {
        question: {
          en: "What is the typical shelf life of fresh unpasteurized juice?",
          es: "¿Cuál es la vida útil típica del jugo fresco no pasteurizado?",
          de: "Was ist die typische Haltbarkeit von frischem unpasteurisiertem Saft?",
          nl: "Wat is de typische houdbaarheid van vers ongepasteuriseerd sap?"
        },
        options: [
          { en: "1-3 days refrigerated", es: "1-3 días refrigerado", de: "1-3 Tage gekühlt", nl: "1-3 dagen gekoeld" },
          { en: "1-2 weeks refrigerated", es: "1-2 semanas refrigerado", de: "1-2 Wochen gekühlt", nl: "1-2 weken gekoeld" },
          { en: "1 month refrigerated", es: "1 mes refrigerado", de: "1 Monat gekühlt", nl: "1 maand gekoeld" },
          { en: "6 months at room temperature", es: "6 meses a temperatura ambiente", de: "6 Monate bei Raumtemperatur", nl: "6 maanden bij kamertemperatuur" }
        ],
        correct: 0,
        explanation: {
          en: "Fresh unpasteurized juice typically has a very short shelf life of 1-3 days when refrigerated, as it contains active enzymes and microorganisms.",
          es: "El jugo fresco no pasteurizado típicamente tiene una vida útil muy corta de 1-3 días cuando se refrigera, ya que contiene enzimas activas y microorganismos.",
          de: "Frischer unpasteurisierter Saft hat typischerweise eine sehr kurze Haltbarkeit von 1-3 Tagen im Kühlschrank, da er aktive Enzyme und Mikroorganismen enthält.",
          nl: "Vers ongepasteuriseerd sap heeft typisch een zeer korte houdbaarheid van 1-3 dagen wanneer gekoeld, omdat het actieve enzymen en micro-organismen bevat."
        }
      },
      {
        question: {
          en: "What does 'juice from concentrate' mean?",
          es: "¿Qué significa 'jugo hecho de concentrado'?",
          de: "Was bedeutet 'Saft aus Konzentrat'?",
          nl: "Wat betekent 'sap uit concentraat'?"
        },
        options: [
          { en: "Juice made by adding water back to concentrated juice", es: "Jugo hecho añadiendo agua de vuelta al jugo concentrado", de: "Saft durch Zugabe von Wasser zu konzentriertem Saft hergestellt", nl: "Sap gemaakt door water terug toe te voegen aan geconcentreerd sap" },
          { en: "Extra strong flavored juice", es: "Jugo con sabor extra fuerte", de: "Extra stark aromatisierter Saft", nl: "Extra sterk gearomatiseerd sap" },
          { en: "Juice with added sugar", es: "Jugo con azúcar añadido", de: "Saft mit zugesetztem Zucker", nl: "Sap met toegevoegde suiker" },
          { en: "Freshly squeezed juice", es: "Jugo recién exprimido", de: "Frisch gepresster Saft", nl: "Vers geperst sap" }
        ],
        correct: 0,
        explanation: {
          en: "Juice from concentrate is made by removing water from fresh juice to create concentrate, which is later reconstituted by adding water back before packaging.",
          es: "El jugo hecho de concentrado se hace removiendo agua del jugo fresco para crear concentrado, que luego se reconstituye añadiendo agua de vuelta antes del envasado.",
          de: "Saft aus Konzentrat wird hergestellt, indem Wasser aus frischem Saft entfernt wird, um Konzentrat zu erzeugen, das später durch Zugabe von Wasser vor der Verpackung rekonstituiert wird.",
          nl: "Sap uit concentraat wordt gemaakt door water uit vers sap te verwijderen om concentraat te maken, dat later wordt gereconstitueerd door water terug toe te voegen voor verpakking."
        }
      },
      {
        question: {
          en: "What is cold chain management in juice distribution?",
          es: "¿Qué es la gestión de la cadena de frío en la distribución de jugos?",
          de: "Was ist Kühlkettenmanagement in der Saftverteilung?",
          nl: "Wat is koelketenbeheer bij sapdistributie?"
        },
        options: [
          { en: "Maintaining consistent refrigeration from production to consumer", es: "Mantener refrigeración consistente desde la producción hasta el consumidor", de: "Konstante Kühlung von der Produktion bis zum Verbraucher aufrechterhalten", nl: "Consistente koeling handhaven van productie tot consument" },
          { en: "Adding ice to juice containers", es: "Añadir hielo a los contenedores de jugo", de: "Eis zu Saftbehältern hinzufügen", nl: "IJs toevoegen aan sapcontainers" },
          { en: "Storing juice in cold countries", es: "Almacenar jugo en países fríos", de: "Saft in kalten Ländern lagern", nl: "Sap opslaan in koude landen" },
          { en: "Using frozen juice concentrate", es: "Usar concentrado de jugo congelado", de: "Gefrorenes Saftkonzentrat verwenden", nl: "Bevroren sapconcentraat gebruiken" }
        ],
        correct: 0,
        explanation: {
          en: "Cold chain management ensures that juice remains continuously refrigerated at proper temperatures throughout the entire supply chain from production to the consumer.",
          es: "La gestión de la cadena de frío asegura que el jugo permanezca continuamente refrigerado a temperaturas adecuadas durante toda la cadena de suministro desde la producción hasta el consumidor.",
          de: "Kühlkettenmanagement stellt sicher, dass Saft durchgehend bei angemessenen Temperaturen während der gesamten Lieferkette von der Produktion bis zum Verbraucher gekühlt bleibt.",
          nl: "Koelketenbeheer zorgt ervoor dat sap continu gekoeld blijft op juiste temperaturen gedurende de gehele toeleveringsketen van productie tot consument."
        }
      },
      {
        question: {
          en: "What causes juice to separate into layers?",
          es: "¿Qué causa que el jugo se separe en capas?",
          de: "Was verursacht die Trennung von Saft in Schichten?",
          nl: "Wat veroorzaakt dat sap zich in lagen scheidt?"
        },
        options: [
          { en: "Settling of suspended particles", es: "Sedimentación de partículas suspendidas", de: "Absetzen von schwebenden Partikeln", nl: "Bezinken van zwevende deeltjes" },
          { en: "Chemical reactions", es: "Reacciones químicas", de: "Chemische Reaktionen", nl: "Chemische reacties" },
          { en: "Bacterial growth", es: "Crecimiento bacteriano", de: "Bakterienwachstum", nl: "Bacteriële groei" },
          { en: "Temperature changes", es: "Cambios de temperatura", de: "Temperaturänderungen", nl: "Temperatuurveranderingen" }
        ],
        correct: 0,
        explanation: {
          en: "Juice separation occurs when heavier suspended particles like pulp and fiber settle to the bottom due to gravity, which is why you should shake juice before drinking.",
          es: "La separación del jugo ocurre cuando partículas suspendidas más pesadas como pulpa y fibra se asientan en el fondo debido a la gravedad, por eso debes agitar el jugo antes de beber.",
          de: "Safttrennung tritt auf, wenn schwerere schwebende Partikel wie Fruchtfleisch und Fasern aufgrund der Schwerkraft zu Boden sinken, weshalb man Saft vor dem Trinken schütteln sollte.",
          nl: "Sapseparatie treedt op wanneer zwaardere zwevende deeltjes zoals vruchtvlees en vezels door zwaartekracht naar de bodem zakken, daarom moet je sap schudden voor het drinken."
        }
      },
      {
        question: {
          en: "What is the purpose of homogenization in juice processing?",
          es: "¿Cuál es el propósito de la homogeneización en el procesamiento de jugos?",
          de: "Was ist der Zweck der Homogenisierung in der Saftverarbeitung?",
          nl: "Wat is het doel van homogenisatie in sapverwerking?"
        },
        options: [
          { en: "To create uniform particle size and prevent separation", es: "Para crear tamaño de partícula uniforme y prevenir separación", de: "Einheitliche Partikelgröße zu schaffen und Trennung zu verhindern", nl: "Om uniforme deeltjesgrootte te creëren en scheiding te voorkomen" },
          { en: "To add artificial flavoring", es: "Para añadir saborizante artificial", de: "Künstliches Aroma hinzuzufügen", nl: "Om kunstmatige smaakstof toe te voegen" },
          { en: "To remove pulp", es: "Para quitar la pulpa", de: "Fruchtfleisch zu entfernen", nl: "Om vruchtvlees te verwijderen" },
          { en: "To increase sugar content", es: "Para aumentar el contenido de azúcar", de: "Zuckergehalt zu erhöhen", nl: "Om suikergehalte te verhogen" }
        ],
        correct: 0,
        explanation: {
          en: "Homogenization breaks down particles to a uniform small size, creating a stable emulsion that prevents separation and gives juice a consistent texture.",
          es: "La homogeneización descompone las partículas a un tamaño pequeño uniforme, creando una emulsión estable que previene la separación y da al jugo una textura consistente.",
          de: "Homogenisierung zerlegt Partikel auf eine einheitliche kleine Größe, wodurch eine stabile Emulsion entsteht, die Trennung verhindert und dem Saft eine konsistente Textur verleiht.",
          nl: "Homogenisatie breekt deeltjes af tot een uniforme kleine grootte, waardoor een stabiele emulsie ontstaat die scheiding voorkomt en sap een consistente textuur geeft."
        }
      },
      {
        question: {
          en: "What is the main benefit of using glass bottles for juice packaging?",
          es: "¿Cuál es el principal beneficio de usar botellas de vidrio para el envasado de jugos?",
          de: "Was ist der Hauptvorteil der Verwendung von Glasflaschen für die Saftverpackung?",
          nl: "Wat is het belangrijkste voordeel van het gebruik van glazen flessen voor sapverpakking?"
        },
        options: [
          { en: "No chemical interaction with juice", es: "No hay interacción química con el jugo", de: "Keine chemische Wechselwirkung mit Saft", nl: "Geen chemische interactie met sap" },
          { en: "Lighter weight", es: "Peso más ligero", de: "Geringeres Gewicht", nl: "Lichter gewicht" },
          { en: "Lower cost", es: "Menor costo", de: "Geringere Kosten", nl: "Lagere kosten" },
          { en: "Easier to open", es: "Más fácil de abrir", de: "Einfacher zu öffnen", nl: "Gemakkelijker te openen" }
        ],
        correct: 0,
        explanation: {
          en: "Glass bottles are inert and don't react chemically with juice, preserving flavor and quality without leaching any substances into the product.",
          es: "Las botellas de vidrio son inertes y no reaccionan químicamente con el jugo, preservando sabor y calidad sin filtrar ninguna sustancia al producto.",
          de: "Glasflaschen sind inert und reagieren nicht chemisch mit Saft, wodurch Geschmack und Qualität erhalten bleiben, ohne dass Substanzen in das Produkt gelangen.",
          nl: "Glazen flessen zijn inert en reageren niet chemisch met sap, waardoor smaak en kwaliteit behouden blijven zonder dat stoffen in het product lekken."
        }
      },
      {
        question: {
          en: "What is the difference between filtered and unfiltered apple juice?",
          es: "¿Cuál es la diferencia entre jugo de manzana filtrado y sin filtrar?",
          de: "Was ist der Unterschied zwischen gefiltertem und ungefiltertem Apfelsaft?",
          nl: "Wat is het verschil tussen gefilterd en ongefilterd appelsap?"
        },
        options: [
          { en: "Filtered is clear, unfiltered is cloudy with sediment", es: "Filtrado es claro, sin filtrar es turbio con sedimento", de: "Gefiltert ist klar, ungefiltert ist trüb mit Sediment", nl: "Gefilterd is helder, ongefilterd is troebel met sediment" },
          { en: "Filtered has more sugar", es: "Filtrado tiene más azúcar", de: "Gefiltert hat mehr Zucker", nl: "Gefilterd heeft meer suiker" },
          { en: "Unfiltered has added preservatives", es: "Sin filtrar tiene conservantes añadidos", de: "Ungefiltert hat zugesetzte Konservierungsstoffe", nl: "Ongefilterd heeft toegevoegde conserveermiddelen" },
          { en: "There is no difference", es: "No hay diferencia", de: "Es gibt keinen Unterschied", nl: "Er is geen verschil" }
        ],
        correct: 0,
        explanation: {
          en: "Filtered apple juice is clear because particles have been removed, while unfiltered juice retains natural sediment and pectin, appearing cloudy with more fiber.",
          es: "El jugo de manzana filtrado es claro porque las partículas han sido removidas, mientras que el jugo sin filtrar retiene sedimento natural y pectina, apareciendo turbio con más fibra.",
          de: "Gefilterter Apfelsaft ist klar, weil Partikel entfernt wurden, während ungefilterter Saft natürliches Sediment und Pektin behält und trüb mit mehr Fasern erscheint.",
          nl: "Gefilterd appelsap is helder omdat deeltjes zijn verwijderd, terwijl ongefilterd sap natuurlijk sediment en pectine behoudt, troebel verschijnt met meer vezel."
        }
      },
      {
        question: {
          en: "What temperature range is ideal for storing fresh juice?",
          es: "¿Qué rango de temperatura es ideal para almacenar jugo fresco?",
          de: "Welcher Temperaturbereich ist ideal für die Lagerung von frischem Saft?",
          nl: "Welk temperatuurbereik is ideaal voor het bewaren van vers sap?"
        },
        options: [
          { en: "0-4°C (32-39°F)", es: "0-4°C (32-39°F)", de: "0-4°C (32-39°F)", nl: "0-4°C (32-39°F)" },
          { en: "10-15°C (50-59°F)", es: "10-15°C (50-59°F)", de: "10-15°C (50-59°F)", nl: "10-15°C (50-59°F)" },
          { en: "20-25°C (68-77°F)", es: "20-25°C (68-77°F)", de: "20-25°C (68-77°F)", nl: "20-25°C (68-77°F)" },
          { en: "-10°C (14°F)", es: "-10°C (14°F)", de: "-10°C (14°F)", nl: "-10°C (14°F)" }
        ],
        correct: 0,
        explanation: {
          en: "Fresh juice should be stored at refrigeration temperatures of 0-4°C (32-39°F) to slow bacterial growth and preserve quality.",
          es: "El jugo fresco debe almacenarse a temperaturas de refrigeración de 0-4°C (32-39°F) para ralentizar el crecimiento bacteriano y preservar la calidad.",
          de: "Frischer Saft sollte bei Kühltemperaturen von 0-4°C (32-39°F) gelagert werden, um Bakterienwachstum zu verlangsamen und Qualität zu erhalten.",
          nl: "Vers sap moet worden bewaard bij koeltemperaturen van 0-4°C (32-39°F) om bacteriegroei te vertragen en kwaliteit te behouden."
        }
      },
    ]
  };

  // Export for use in the quiz application
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level3;
  } else if (typeof window !== 'undefined') {
    window.level3 = level3;
  }
})();
