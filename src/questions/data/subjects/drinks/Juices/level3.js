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
      {
        question: {
          en: "What is the main difference between centrifugal and masticating juicers?",
          es: "¿Cuál es la principal diferencia entre exprimidores centrífugos y masticadores?",
          de: "Was ist der Hauptunterschied zwischen Zentrifugal- und Pressentsaftern?",
          nl: "Wat is het belangrijkste verschil tussen centrifugale en kauwende sapcentrifuges?"
        },
        options: [
          { en: "Centrifugal uses high speed, masticating uses slow crushing", es: "Centrífugo usa alta velocidad, masticador usa trituración lenta", de: "Zentrifugal nutzt hohe Geschwindigkeit, Pressen nutzt langsames Zerkleinern", nl: "Centrifugaal gebruikt hoge snelheid, kauwend gebruikt langzame vergruizing" },
          { en: "Centrifugal is for vegetables only", es: "Centrífugo es solo para vegetales", de: "Zentrifugal ist nur für Gemüse", nl: "Centrifugaal is alleen voor groenten" },
          { en: "Masticating is faster", es: "Masticador es más rápido", de: "Pressen ist schneller", nl: "Kauwend is sneller" },
          { en: "They are the same", es: "Son lo mismo", de: "Sie sind gleich", nl: "Ze zijn hetzelfde" }
        ],
        correct: 0,
        explanation: {
          en: "Centrifugal juicers use high-speed spinning blades to extract juice quickly, while masticating juicers slowly crush and press produce, yielding more juice and nutrients with less oxidation.",
          es: "Los exprimidores centrífugos usan cuchillas giratorias de alta velocidad para extraer jugo rápidamente, mientras que los exprimidores masticadores trituran y prensan lentamente los productos, produciendo más jugo y nutrientes con menos oxidación.",
          de: "Zentrifugalentsafter verwenden schnell rotierende Klingen zur schnellen Saftextraktion, während Pressentsafter langsam zerkleinern und pressen, wodurch mehr Saft und Nährstoffe mit weniger Oxidation gewonnen werden.",
          nl: "Centrifugale sapcentrifuges gebruiken snelroterende messen om snel sap te extraheren, terwijl kauwende sapcentrifuges langzaam producten vergruizen en persen, wat meer sap en voedingsstoffen oplevert met minder oxidatie."
        }
      },
      {
        question: {
          en: "What is the glycemic index relevance for fruit juices?",
          es: "¿Cuál es la relevancia del índice glucémico para los jugos de frutas?",
          de: "Was ist die Relevanz des glykämischen Index für Fruchtsäfte?",
          nl: "Wat is de relevantie van de glycemische index voor vruchtensappen?"
        },
        options: [
          { en: "Juices have higher GI than whole fruits due to fiber removal", es: "Los jugos tienen mayor IG que las frutas enteras debido a la eliminación de fibra", de: "Säfte haben einen höheren GI als ganze Früchte aufgrund der Faserentfernung", nl: "Sappen hebben een hogere GI dan hele vruchten door vezelverwijdering" },
          { en: "Juices always have lower GI", es: "Los jugos siempre tienen menor IG", de: "Säfte haben immer einen niedrigeren GI", nl: "Sappen hebben altijd een lagere GI" },
          { en: "GI doesn't apply to liquids", es: "El IG no se aplica a líquidos", de: "GI gilt nicht für Flüssigkeiten", nl: "GI is niet van toepassing op vloeistoffen" },
          { en: "All juices have the same GI", es: "Todos los jugos tienen el mismo IG", de: "Alle Säfte haben den gleichen GI", nl: "Alle sappen hebben dezelfde GI" }
        ],
        correct: 0,
        explanation: {
          en: "Fruit juices typically have a higher glycemic index than whole fruits because the juicing process removes fiber, causing faster sugar absorption and blood glucose spikes.",
          es: "Los jugos de frutas típicamente tienen un índice glucémico más alto que las frutas enteras porque el proceso de extracción elimina la fibra, causando absorción más rápida de azúcar y picos de glucosa en sangre.",
          de: "Fruchtsäfte haben typischerweise einen höheren glykämischen Index als ganze Früchte, weil der Entsaftungsprozess Fasern entfernt, was zu schnellerer Zuckerabsorption und Blutzuckerspitzen führt.",
          nl: "Vruchtensappen hebben typisch een hogere glycemische index dan hele vruchten omdat het persproces vezels verwijdert, wat snellere suikerabsorptie en bloedglucosepieken veroorzaakt."
        }
      },
      {
        question: {
          en: "What is the purpose of nitrogen flushing in juice packaging?",
          es: "¿Cuál es el propósito del lavado con nitrógeno en el envasado de jugos?",
          de: "Was ist der Zweck des Stickstoffspülens in der Saftverpackung?",
          nl: "Wat is het doel van stikstof spoelen bij sapverpakking?"
        },
        options: [
          { en: "To displace oxygen and prevent oxidation", es: "Para desplazar el oxígeno y prevenir la oxidación", de: "Um Sauerstoff zu verdrängen und Oxidation zu verhindern", nl: "Om zuurstof te verdringen en oxidatie te voorkomen" },
          { en: "To carbonate the juice", es: "Para carbonatar el jugo", de: "Um den Saft zu karbonisieren", nl: "Om het sap te koolzuurhouden" },
          { en: "To add nitrogen nutrients", es: "Para añadir nutrientes de nitrógeno", de: "Um Stickstoffnährstoffe hinzuzufügen", nl: "Om stikstofnutriënten toe te voegen" },
          { en: "To freeze the juice", es: "Para congelar el jugo", de: "Um den Saft einzufrieren", nl: "Om het sap te bevriezen" }
        ],
        correct: 0,
        explanation: {
          en: "Nitrogen flushing replaces oxygen in the headspace of juice containers, preventing oxidation, browning, and nutrient degradation, thus extending shelf life.",
          es: "El lavado con nitrógeno reemplaza el oxígeno en el espacio superior de los contenedores de jugo, previniendo oxidación, pardeamiento y degradación de nutrientes, extendiendo así la vida útil.",
          de: "Stickstoffspülen ersetzt Sauerstoff im Kopfraum von Saftbehältern, verhindert Oxidation, Bräunung und Nährstoffabbau und verlängert so die Haltbarkeit.",
          nl: "Stikstof spoelen vervangt zuurstof in de kopruimte van sapcontainers, voorkomt oxidatie, bruining en voedingsstofafbraak, waardoor de houdbaarheid wordt verlengd."
        }
      },
      {
        question: {
          en: "What is the effect of UV light treatment on juice?",
          es: "¿Cuál es el efecto del tratamiento con luz UV en el jugo?",
          de: "Was ist die Wirkung der UV-Lichtbehandlung auf Saft?",
          nl: "Wat is het effect van UV-lichtbehandeling op sap?"
        },
        options: [
          { en: "Kills microorganisms without heat", es: "Mata microorganismos sin calor", de: "Tötet Mikroorganismen ohne Hitze", nl: "Doodt micro-organismen zonder warmte" },
          { en: "Changes juice color to purple", es: "Cambia el color del jugo a morado", de: "Ändert Saftfarbe zu Lila", nl: "Verandert sapkleur naar paars" },
          { en: "Increases sugar content", es: "Aumenta el contenido de azúcar", de: "Erhöht den Zuckergehalt", nl: "Verhoogt suikergehalte" },
          { en: "Adds vitamins", es: "Añade vitaminas", de: "Fügt Vitamine hinzu", nl: "Voegt vitamines toe" }
        ],
        correct: 0,
        explanation: {
          en: "UV light treatment is a non-thermal pasteurization method that uses ultraviolet radiation to inactivate microorganisms in juice while preserving heat-sensitive nutrients and fresh flavor.",
          es: "El tratamiento con luz UV es un método de pasteurización no térmica que usa radiación ultravioleta para inactivar microorganismos en el jugo mientras preserva nutrientes sensibles al calor y sabor fresco.",
          de: "UV-Lichtbehandlung ist eine nicht-thermische Pasteurisierungsmethode, die ultraviolette Strahlung verwendet, um Mikroorganismen im Saft zu inaktivieren und dabei hitzeempfindliche Nährstoffe und frischen Geschmack zu erhalten.",
          nl: "UV-lichtbehandeling is een niet-thermische pasteurisatiemethode die ultraviolette straling gebruikt om micro-organismen in sap te inactiveren terwijl hittegevoelige voedingsstoffen en verse smaak behouden blijven."
        }
      },
      {
        question: {
          en: "What causes 'flavor fade' in stored juice?",
          es: "¿Qué causa la 'pérdida de sabor' en el jugo almacenado?",
          de: "Was verursacht 'Geschmacksverlust' in gelagertem Saft?",
          nl: "Wat veroorzaakt 'smaakverlies' in opgeslagen sap?"
        },
        options: [
          { en: "Volatile compound degradation and oxidation", es: "Degradación de compuestos volátiles y oxidación", de: "Abbau flüchtiger Verbindungen und Oxidation", nl: "Afbraak van vluchtige verbindingen en oxidatie" },
          { en: "Too much refrigeration", es: "Demasiada refrigeración", de: "Zu viel Kühlung", nl: "Te veel koeling" },
          { en: "Container size", es: "Tamaño del contenedor", de: "Behältergröße", nl: "Containergrootte" },
          { en: "Light exposure makes it stronger", es: "La exposición a la luz lo hace más fuerte", de: "Lichtexposition macht es stärker", nl: "Blootstelling aan licht maakt het sterker" }
        ],
        correct: 0,
        explanation: {
          en: "Flavor fade occurs when volatile aromatic compounds evaporate or degrade over time, and oxidation reactions alter the chemical composition, reducing the juice's fresh taste and aroma.",
          es: "La pérdida de sabor ocurre cuando los compuestos aromáticos volátiles se evaporan o degradan con el tiempo, y las reacciones de oxidación alteran la composición química, reduciendo el sabor y aroma fresco del jugo.",
          de: "Geschmacksverlust tritt auf, wenn flüchtige aromatische Verbindungen verdunsten oder sich im Laufe der Zeit abbauen und Oxidationsreaktionen die chemische Zusammensetzung verändern, wodurch der frische Geschmack und das Aroma des Saftes reduziert werden.",
          nl: "Smaakverlies treedt op wanneer vluchtige aromatische verbindingen verdampen of afbreken in de loop van de tijd, en oxidatiereacties de chemische samenstelling veranderen, waardoor de verse smaak en geur van het sap afnemen."
        }
      },
      {
        question: {
          en: "What is the 'juice ratio' or 'extraction rate' in juice production?",
          es: "¿Qué es el 'ratio de jugo' o 'tasa de extracción' en la producción de jugos?",
          de: "Was ist das 'Saftverhältnis' oder die 'Extraktionsrate' in der Saftproduktion?",
          nl: "Wat is de 'sapverhouding' of 'extractiesnelheid' in sapproductie?"
        },
        options: [
          { en: "Percentage of juice extracted from raw material", es: "Porcentaje de jugo extraído de la materia prima", de: "Prozentsatz des aus Rohmaterial extrahierten Saftes", nl: "Percentage sap geëxtraheerd uit grondstof" },
          { en: "Sugar to water ratio", es: "Proporción de azúcar a agua", de: "Zucker-Wasser-Verhältnis", nl: "Suiker-waterverhouding" },
          { en: "Vitamin concentration", es: "Concentración de vitaminas", de: "Vitaminkonzentration", nl: "Vitamineconcentratie" },
          { en: "Profit margin per bottle", es: "Margen de ganancia por botella", de: "Gewinnspanne pro Flasche", nl: "Winstmarge per fles" }
        ],
        correct: 0,
        explanation: {
          en: "The extraction rate is the percentage of juice recovered from the raw fruit or vegetable, varying by produce type and extraction method - typically 50-70% for most citrus fruits.",
          es: "La tasa de extracción es el porcentaje de jugo recuperado de la fruta o vegetal crudo, variando según el tipo de producto y método de extracción - típicamente 50-70% para la mayoría de cítricos.",
          de: "Die Extraktionsrate ist der Prozentsatz des aus der rohen Frucht oder dem Gemüse gewonnenen Saftes, der je nach Produkttyp und Extraktionsmethode variiert - typischerweise 50-70% für die meisten Zitrusfrüchte.",
          nl: "De extractiesnelheid is het percentage sap gewonnen uit de rauwe vrucht of groente, variërend per producttype en extractiemethode - meestal 50-70% voor de meeste citrusvruchten."
        }
      },
      {
        question: {
          en: "What are furanocoumarins in grapefruit juice and why are they significant?",
          es: "¿Qué son las furanocumarinas en el jugo de toronja y por qué son significativas?",
          de: "Was sind Furanocumarine in Grapefruitsaft und warum sind sie bedeutsam?",
          nl: "Wat zijn furanocoumarines in grapefruitsap en waarom zijn ze belangrijk?"
        },
        options: [
          { en: "Compounds that inhibit drug-metabolizing enzymes", es: "Compuestos que inhiben las enzimas metabolizadoras de medicamentos", de: "Verbindungen, die arzneimittelmetabolisierende Enzyme hemmen", nl: "Verbindingen die medicijn-metaboliserende enzymen remmen" },
          { en: "Vitamins that boost immunity", es: "Vitaminas que fortalecen la inmunidad", de: "Vitamine, die die Immunität stärken", nl: "Vitamines die immuniteit versterken" },
          { en: "Natural sweeteners", es: "Edulcorantes naturales", de: "Natürliche Süßstoffe", nl: "Natuurlijke zoetstoffen" },
          { en: "Coloring agents", es: "Agentes colorantes", de: "Farbstoffe", nl: "Kleurmiddelen" }
        ],
        correct: 0,
        explanation: {
          en: "Furanocoumarins in grapefruit juice inhibit CYP3A4 enzymes in the intestines, which can dramatically alter the metabolism of many medications, potentially causing dangerous interactions.",
          es: "Las furanocumarinas en el jugo de toronja inhiben las enzimas CYP3A4 en los intestinos, lo que puede alterar dramáticamente el metabolismo de muchos medicamentos, potencialmente causando interacciones peligrosas.",
          de: "Furanocumarine in Grapefruitsaft hemmen CYP3A4-Enzyme im Darm, was den Metabolismus vieler Medikamente dramatisch verändern und potenziell gefährliche Wechselwirkungen verursachen kann.",
          nl: "Furanocoumarines in grapefruitsap remmen CYP3A4-enzymen in de darmen, wat het metabolisme van veel medicijnen dramatisch kan veranderen en mogelijk gevaarlijke interacties kan veroorzaken."
        }
      },
      {
        question: {
          en: "What is membrane filtration in juice processing?",
          es: "¿Qué es la filtración por membrana en el procesamiento de jugos?",
          de: "Was ist Membranfiltration in der Saftverarbeitung?",
          nl: "Wat is membraanfiltratie in sapverwerking?"
        },
        options: [
          { en: "Using semi-permeable membranes to separate particles", es: "Usar membranas semipermeables para separar partículas", de: "Verwendung semipermeabler Membranen zur Partikeltrennung", nl: "Gebruik van semi-permeabele membranen om deeltjes te scheiden" },
          { en: "Filtering through paper", es: "Filtrar a través de papel", de: "Durch Papier filtern", nl: "Filteren door papier" },
          { en: "Adding chemical filters", es: "Añadir filtros químicos", de: "Chemische Filter hinzufügen", nl: "Chemische filters toevoegen" },
          { en: "Freezing and thawing", es: "Congelar y descongelar", de: "Einfrieren und Auftauen", nl: "Bevriezen en ontdooien" }
        ],
        correct: 0,
        explanation: {
          en: "Membrane filtration uses semi-permeable membranes (microfiltration, ultrafiltration) to separate particles, microorganisms, and macromolecules from juice based on size, providing gentle clarification without heat.",
          es: "La filtración por membrana usa membranas semipermeables (microfiltración, ultrafiltración) para separar partículas, microorganismos y macromoléculas del jugo según el tamaño, proporcionando clarificación suave sin calor.",
          de: "Membranfiltration verwendet semipermeabele Membranen (Mikrofiltration, Ultrafiltration) zur größenbasierten Trennung von Partikeln, Mikroorganismen und Makromolekülen aus Saft und bietet sanfte Klärung ohne Hitze.",
          nl: "Membraanfiltratie gebruikt semi-permeabele membranen (microfiltratie, ultrafiltratie) om deeltjes, micro-organismen en macromoleculen van sap te scheiden op basis van grootte, wat zachte klaring biedt zonder warmte."
        }
      },
      {
        question: {
          en: "What is the significance of pH level in juice stability?",
          es: "¿Cuál es la significancia del nivel de pH en la estabilidad del jugo?",
          de: "Was ist die Bedeutung des pH-Werts für die Saftstabilität?",
          nl: "Wat is de betekenis van het pH-niveau voor de sapstabiliteit?"
        },
        options: [
          { en: "Low pH inhibits microbial growth and extends shelf life", es: "El pH bajo inhibe el crecimiento microbiano y extiende la vida útil", de: "Niedriger pH hemmt mikrobielles Wachstum und verlängert die Haltbarkeit", nl: "Lage pH remt microbiële groei en verlengt houdbaarheid" },
          { en: "pH doesn't affect juice", es: "El pH no afecta el jugo", de: "pH beeinflusst Saft nicht", nl: "pH heeft geen invloed op sap" },
          { en: "High pH is always better", es: "El pH alto es siempre mejor", de: "Hoher pH ist immer besser", nl: "Hoge pH is altijd beter" },
          { en: "pH only affects color", es: "El pH solo afecta el color", de: "pH beeinflusst nur die Farbe", nl: "pH beïnvloedt alleen kleur" }
        ],
        correct: 0,
        explanation: {
          en: "Acidic juices (pH below 4.6) inhibit growth of harmful bacteria like Clostridium botulinum, making them safer and more stable. This is why citrus juices have good natural preservation.",
          es: "Los jugos ácidos (pH por debajo de 4.6) inhiben el crecimiento de bacterias dañinas como Clostridium botulinum, haciéndolos más seguros y estables. Por eso los jugos cítricos tienen buena preservación natural.",
          de: "Saure Säfte (pH unter 4,6) hemmen das Wachstum schädlicher Bakterien wie Clostridium botulinum, wodurch sie sicherer und stabiler sind. Deshalb haben Zitrussäfte eine gute natürliche Konservierung.",
          nl: "Zure sappen (pH onder 4,6) remmen de groei van schadelijke bacteriën zoals Clostridium botulinum, waardoor ze veiliger en stabieler zijn. Daarom hebben citrussappen goede natuurlijke conservering."
        }
      },
      {
        question: {
          en: "What is enzymatic browning prevention in juice production?",
          es: "¿Qué es la prevención del pardeamiento enzimático en la producción de jugos?",
          de: "Was ist Verhinderung enzymatischer Bräunung in der Saftproduktion?",
          nl: "Wat is preventie van enzymatische bruining in sapproductie?"
        },
        options: [
          { en: "Inactivating oxidative enzymes through heat or acidification", es: "Inactivar enzimas oxidativas mediante calor o acidificación", de: "Inaktivierung oxidativer Enzyme durch Hitze oder Ansäuerung", nl: "Inactiveren van oxidatieve enzymen door warmte of verzuring" },
          { en: "Adding brown coloring", es: "Añadir colorante marrón", de: "Braune Färbung hinzufügen", nl: "Bruine kleuring toevoegen" },
          { en: "Using only green fruits", es: "Usar solo frutas verdes", de: "Nur grüne Früchte verwenden", nl: "Alleen groene vruchten gebruiken" },
          { en: "Storing in dark containers", es: "Almacenar en contenedores oscuros", de: "In dunklen Behältern lagern", nl: "Opslaan in donkere containers" }
        ],
        correct: 0,
        explanation: {
          en: "Enzymatic browning is prevented by inactivating polyphenol oxidase enzymes through blanching, adding citric acid/ascorbic acid, or removing oxygen, which stops the oxidation of phenolic compounds.",
          es: "El pardeamiento enzimático se previene inactivando las enzimas polifenol oxidasa mediante escaldado, añadiendo ácido cítrico/ascórbico, o removiendo oxígeno, lo que detiene la oxidación de compuestos fenólicos.",
          de: "Enzymatische Bräunung wird verhindert, indem Polyphenoloxidase-Enzyme durch Blanchieren, Zugabe von Zitronen-/Ascorbinsäure oder Sauerstoffentfernung inaktiviert werden, was die Oxidation phenolischer Verbindungen stoppt.",
          nl: "Enzymatische bruining wordt voorkomen door polyfenoloxidase-enzymen te inactiveren door blancheren, toevoegen van citroenzuur/ascorbinezuur, of verwijderen van zuurstof, wat de oxidatie van fenolische verbindingen stopt."
        }
      },
      {
        question: {
          en: "What is the role of pectinase enzyme in juice clarification?",
          es: "¿Cuál es el papel de la enzima pectinasa en la clarificación del jugo?",
          de: "Was ist die Rolle des Pektinase-Enzyms bei der Saftklärängerung?",
          nl: "Wat is de rol van pectinase-enzym bij sapklaring?"
        },
        options: [
          { en: "Breaks down pectin to reduce viscosity and cloudiness", es: "Descompone la pectina para reducir viscosidad y turbidez", de: "Baut Pektin ab, um Viskosität und Trübung zu reduzieren", nl: "Breekt pectine af om viscositeit en troebeling te verminderen" },
          { en: "Adds sweetness", es: "Añade dulzura", de: "Fügt Süße hinzu", nl: "Voegt zoetheid toe" },
          { en: "Increases fiber content", es: "Aumenta el contenido de fibra", de: "Erhöht den Fasergehalt", nl: "Verhoogt vezelgehalte" },
          { en: "Changes juice color", es: "Cambia el color del jugo", de: "Ändert Saftfarbe", nl: "Verandert sapkleur" }
        ],
        correct: 0,
        explanation: {
          en: "Pectinase enzyme breaks down pectin molecules in fruit cell walls, reducing juice viscosity, improving filterability, and creating clearer juice with higher yield during extraction.",
          es: "La enzima pectinasa descompone las moléculas de pectina en las paredes celulares de las frutas, reduciendo la viscosidad del jugo, mejorando la filtrabilidad y creando jugo más claro con mayor rendimiento durante la extracción.",
          de: "Pektinase-Enzym baut Pektinmoleküle in Fruchtzellwänden ab, reduziert Saftviskosität, verbessert Filterbarkeit und erzeugt klareren Saft mit höherer Ausbeute bei der Extraktion.",
          nl: "Pectinase-enzym breekt pectinemoleculen in vruchtcelwanden af, vermindert sapviscositeit, verbetert filtreerbaarheid en creëert helderder sap met hogere opbrengst tijdens extractie."
        }
      },
      {
        question: {
          en: "What is the purpose of deaeration in juice processing?",
          es: "¿Cuál es el propósito de la desaireación en el procesamiento de jugos?",
          de: "Was ist der Zweck der Entlüftung in der Saftverarbeitung?",
          nl: "Wat is het doel van ontluchting in sapverwerking?"
        },
        options: [
          { en: "Removing dissolved oxygen to prevent oxidation", es: "Remover oxígeno disuelto para prevenir oxidación", de: "Gelösten Sauerstoff entfernen, um Oxidation zu verhindern", nl: "Opgeloste zuurstof verwijderen om oxidatie te voorkomen" },
          { en: "Adding more air", es: "Añadir más aire", de: "Mehr Luft hinzufügen", nl: "Meer lucht toevoegen" },
          { en: "Creating foam", es: "Crear espuma", de: "Schaum erzeugen", nl: "Schuim creëren" },
          { en: "Carbonating juice", es: "Carbonatar el jugo", de: "Saft karbonisieren", nl: "Sap koolzuurhouden" }
        ],
        correct: 0,
        explanation: {
          en: "Deaeration removes dissolved oxygen from juice under vacuum, preventing oxidation of vitamins and flavor compounds, reducing browning, and extending shelf life by inhibiting aerobic microorganism growth.",
          es: "La desaireación remueve el oxígeno disuelto del jugo bajo vacío, previniendo la oxidación de vitaminas y compuestos de sabor, reduciendo el pardeamiento y extendiendo la vida útil al inhibir el crecimiento de microorganismos aeróbicos.",
          de: "Entlüftung entfernt gelösten Sauerstoff aus Saft unter Vakuum, verhindert Oxidation von Vitaminen und Geschmacksverbindungen, reduziert Bräunung und verlängert die Haltbarkeit durch Hemmung des Wachstums aerober Mikroorganismen.",
          nl: "Ontluchting verwijdert opgeloste zuurstof uit sap onder vacuüm, voorkomt oxidatie van vitamines en smaakverbindingen, vermindert bruining en verlengt houdbaarheid door groei van aerobe micro-organismen te remmen."
        }
      },
      {
        question: {
          en: "What is the difference between single-strength and concentrated juice storage?",
          es: "¿Cuál es la diferencia entre almacenamiento de jugo de concentración simple y concentrado?",
          de: "Was ist der Unterschied zwischen einfachstärke und konzentrierte Saftlagerung?",
          nl: "Wat is het verschil tussen enkelvoudige sterkte en geconcentreerde sapopslag?"
        },
        options: [
          { en: "Concentrated requires less storage space and refrigeration", es: "Concentrado requiere menos espacio de almacenamiento y refrigeración", de: "Konzentriert benötigt weniger Lagerraum und Kühlung", nl: "Geconcentreerd vereist minder opslagruimte en koeling" },
          { en: "Single-strength is always cheaper", es: "Concentración simple es siempre más barata", de: "Einfachstärke ist immer billiger", nl: "Enkelvoudige sterkte is altijd goedkoper" },
          { en: "They are stored the same way", es: "Se almacenan de la misma manera", de: "Sie werden gleich gelagert", nl: "Ze worden op dezelfde manier opgeslagen" },
          { en: "Concentrated spoils faster", es: "Concentrado se echa a perder más rápido", de: "Konzentriert verdirbt schneller", nl: "Geconcentreerd bederft sneller" }
        ],
        correct: 0,
        explanation: {
          en: "Concentrated juice (with water removed) requires significantly less storage space, lower transportation costs, and can be stored frozen or refrigerated, making it more economical than storing single-strength juice.",
          es: "El jugo concentrado (con agua removida) requiere significativamente menos espacio de almacenamiento, menores costos de transporte, y puede almacenarse congelado o refrigerado, haciéndolo más económico que almacenar jugo de concentración simple.",
          de: "Konzentrierter Saft (mit entferntem Wasser) benötigt deutlich weniger Lagerraum, geringere Transportkosten und kann gefroren oder gekühlt gelagert werden, was ihn wirtschaftlicher macht als die Lagerung von Einfachstärke-Saft.",
          nl: "Geconcentreerd sap (met verwijderd water) vereist aanzienlijk minder opslagruimte, lagere transportkosten en kan bevroren of gekoeld worden opgeslagen, waardoor het economischer is dan enkelvoudige sterkte sap op te slaan."
        }
      },
      {
        question: {
          en: "What is aseptic processing in juice production?",
          es: "¿Qué es el procesamiento aséptico en la producción de jugos?",
          de: "Was ist aseptische Verarbeitung in der Saftproduktion?",
          nl: "Wat is aseptische verwerking in sapproductie?"
        },
        options: [
          { en: "Sterilizing juice and packaging separately, then filling in sterile environment", es: "Esterilizar jugo y envasado por separado, luego llenar en ambiente estéril", de: "Saft und Verpackung separat sterilisieren, dann in steriler Umgebung abfüllen", nl: "Sap en verpakking apart steriliseren, dan vullen in steriele omgeving" },
          { en: "Adding antiseptic chemicals", es: "Añadir químicos antisépticos", de: "Antiseptische Chemikalien hinzufügen", nl: "Antiseptische chemicaliën toevoegen" },
          { en: "Processing without any equipment", es: "Procesar sin ningún equipo", de: "Ohne jegliche Ausrüstung verarbeiten", nl: "Verwerken zonder enige apparatuur" },
          { en: "Using only organic ingredients", es: "Usar solo ingredientes orgánicos", de: "Nur Bio-Zutaten verwenden", nl: "Alleen biologische ingrediënten gebruiken" }
        ],
        correct: 0,
        explanation: {
          en: "Aseptic processing involves sterilizing juice (usually by UHT), separately sterilizing packaging materials, then filling in a sterile environment, allowing shelf-stable juice without refrigeration for months.",
          es: "El procesamiento aséptico implica esterilizar el jugo (generalmente por UHT), esterilizar por separado los materiales de envasado, luego llenar en un ambiente estéril, permitiendo jugo estable en anaquel sin refrigeración por meses.",
          de: "Aseptische Verarbeitung beinhaltet Sterilisation von Saft (normalerweise durch UHT), separate Sterilisation von Verpackungsmaterialien, dann Abfüllung in steriler Umgebung, was haltbaren Saft ohne Kühlung für Monate ermöglicht.",
          nl: "Aseptische verwerking houdt in dat sap wordt gesteriliseerd (meestal door UHT), verpakkingsmaterialen apart worden gesteriliseerd, dan vullen in steriele omgeving, wat houdbaar sap zonder koeling voor maanden mogelijk maakt."
        }
      },
      {
        question: {
          en: "What is the water activity (aw) concept in juice preservation?",
          es: "¿Qué es el concepto de actividad de agua (aw) en la preservación de jugos?",
          de: "Was ist das Wasseraktivitäts (aw) Konzept in der Saftkonservierung?",
          nl: "Wat is het wateractiviteit (aw) concept in sapconservering?"
        },
        options: [
          { en: "Measure of available water for microbial growth", es: "Medida de agua disponible para crecimiento microbiano", de: "Maß für verfügbares Wasser für mikrobielles Wachstum", nl: "Maat voor beschikbaar water voor microbiële groei" },
          { en: "How active the water molecules are", es: "Qué tan activas están las moléculas de agua", de: "Wie aktiv die Wassermoleküle sind", nl: "Hoe actief de watermoleculen zijn" },
          { en: "Amount of exercise juice needs", es: "Cantidad de ejercicio que el jugo necesita", de: "Wie viel Bewegung Saft braucht", nl: "Hoeveel beweging sap nodig heeft" },
          { en: "Water purification level", es: "Nivel de purificación del agua", de: "Wasserreinigungsgrad", nl: "Waterzuiveringsniveau" }
        ],
        correct: 0,
        explanation: {
          en: "Water activity (aw) measures water available for microbial growth on a scale of 0-1. Most microorganisms need aw above 0.90. Concentrated juices have lower aw, inhibiting spoilage organisms.",
          es: "La actividad de agua (aw) mide el agua disponible para crecimiento microbiano en una escala de 0-1. La mayoría de microorganismos necesitan aw por encima de 0.90. Los jugos concentrados tienen aw más baja, inhibiendo organismos de deterioro.",
          de: "Wasseraktivität (aw) misst für mikrobielles Wachstum verfügbares Wasser auf einer Skala von 0-1. Die meisten Mikroorganismen benötigen aw über 0,90. Konzentrierte Säfte haben niedrigere aw, was Verderbnisorganismen hemmt.",
          nl: "Wateractiviteit (aw) meet water beschikbaar voor microbiële groei op een schaal van 0-1. De meeste micro-organismen hebben aw boven 0,90 nodig. Geconcentreerde sappen hebben lagere aw, wat bederf-organismen remt."
        }
      },
      {
        question: {
          en: "What is the purpose of ultrafiltration in juice processing?",
          es: "¿Cuál es el propósito de la ultrafiltración en el procesamiento de jugos?",
          de: "Was ist der Zweck der Ultrafiltration in der Saftverarbeitung?",
          nl: "Wat is het doel van ultrafiltratie in sapverwerking?"
        },
        options: [
          { en: "Removing suspended solids and microorganisms while retaining flavor", es: "Remover sólidos suspendidos y microorganismos mientras se retiene el sabor", de: "Entfernung suspendierter Feststoffe und Mikroorganismen bei Geschmackserhaltung", nl: "Verwijderen van zwevende vaste stoffen en micro-organismen terwijl smaak behouden blijft" },
          { en: "Adding ultra vitamins", es: "Añadir ultra vitaminas", de: "Ultra-Vitamine hinzufügen", nl: "Ultra vitamines toevoegen" },
          { en: "Making juice extremely concentrated", es: "Hacer el jugo extremadamente concentrado", de: "Saft extrem konzentrieren", nl: "Sap extreem geconcentreerd maken" },
          { en: "Filtering air bubbles", es: "Filtrar burbujas de aire", de: "Luftblasen filtern", nl: "Luchtbellen filteren" }
        },
        correct: 0,
        explanation: {
          en: "Ultrafiltration uses membranes with pore sizes of 1-100 nanometers to remove suspended particles, macromolecules, and microorganisms while allowing smaller molecules like sugars, acids, and flavors to pass through.",
          es: "La ultrafiltración usa membranas con tamaños de poro de 1-100 nanómetros para remover partículas suspendidas, macromoléculas y microorganismos mientras permite que moléculas más pequeñas como azúcares, ácidos y sabores pasen.",
          de: "Ultrafiltration verwendet Membranen mit Porengrößen von 1-100 Nanometern, um suspendierte Partikel, Makromoleküle und Mikroorganismen zu entfernen, während kleinere Moleküle wie Zucker, Säuren und Aromen durchgelassen werden.",
          nl: "Ultrafiltratie gebruikt membranen met poriegroottes van 1-100 nanometer om zwevende deeltjes, macromoleculen en micro-organismen te verwijderen terwijl kleinere moleculen zoals suikers, zuren en smaken worden doorgelaten."
        }
      },
      {
        question: {
          en: "What is reverse osmosis concentration in juice production?",
          es: "¿Qué es la concentración por ósmosis inversa en la producción de jugos?",
          de: "Was ist Umkehrosmose-Konzentration in der Saftproduktion?",
          nl: "Wat is omgekeerde osmose concentratie in sapproductie?"
        },
        options: [
          { en: "Removing water through membrane at low temperature", es: "Remover agua a través de membrana a baja temperatura", de: "Wasserentfernung durch Membran bei niedriger Temperatur", nl: "Water verwijderen door membraan bij lage temperatuur" },
          { en: "Adding water backwards", es: "Añadir agua hacia atrás", de: "Wasser rückwärts hinzufügen", nl: "Water achterwaarts toevoegen" },
          { en: "Reversing the aging process", es: "Revertir el proceso de envejecimiento", de: "Alterungsprozess umkehren", nl: "Verouderingsproces omkeren" },
          { en: "Spinning juice at high speed", es: "Girar jugo a alta velocidad", de: "Saft bei hoher Geschwindigkeit drehen", nl: "Sap op hoge snelheid draaien" }
        ],
        correct: 0,
        explanation: {
          en: "Reverse osmosis uses pressure to force water through a semi-permeable membrane, concentrating juice at ambient temperature without heat damage, preserving fresh flavor and heat-sensitive vitamins better than thermal evaporation.",
          es: "La ósmosis inversa usa presión para forzar el agua a través de una membrana semipermeable, concentrando el jugo a temperatura ambiente sin daño por calor, preservando mejor el sabor fresco y vitaminas sensibles al calor que la evaporación térmica.",
          de: "Umkehrosmose nutzt Druck, um Wasser durch eine semipermeable Membran zu pressen, konzentriert Saft bei Umgebungstemperatur ohne Hitzeschäden und erhält frischen Geschmack und hitzeempfindliche Vitamine besser als thermische Verdampfung.",
          nl: "Omgekeerde osmose gebruikt druk om water door een semi-permeabel membraan te persen, concentreert sap bij omgevingstemperatuur zonder hitteschade, bewaart verse smaak en hittegevoelige vitamines beter dan thermische verdamping."
        }
      },
      {
        question: {
          en: "What is the Maillard reaction in relation to juice processing?",
          es: "¿Qué es la reacción de Maillard en relación con el procesamiento de jugos?",
          de: "Was ist die Maillard-Reaktion in Bezug auf Saftverarbeitung?",
          nl: "Wat is de Maillard-reactie met betrekking tot sapverwerking?"
        },
        options: [
          { en: "Non-enzymatic browning between sugars and amino acids during heating", es: "Pardeamiento no enzimático entre azúcares y aminoácidos durante el calentamiento", de: "Nicht-enzymatische Bräunung zwischen Zuckern und Aminosäuren beim Erhitzen", nl: "Niet-enzymatische bruining tussen suikers en aminozuren tijdens verhitting" },
          { en: "A type of vitamin synthesis", es: "Un tipo de síntesis de vitaminas", de: "Eine Art Vitaminsynthese", nl: "Een type vitaminesynthese" },
          { en: "Enzyme activation process", es: "Proceso de activación de enzimas", de: "Enzymaktivierungsprozess", nl: "Enzymactiveringsproces" },
          { en: "Color addition technique", es: "Técnica de adición de color", de: "Farbzusatztechnik", nl: "Kleurtoevoegingstechniek" }
        ],
        correct: 0,
        explanation: {
          en: "The Maillard reaction is non-enzymatic browning that occurs when sugars react with amino acids during heat processing, causing color darkening and flavor changes - generally undesirable in juice as it indicates overprocessing.",
          es: "La reacción de Maillard es pardeamiento no enzimático que ocurre cuando los azúcares reaccionan con aminoácidos durante el procesamiento térmico, causando oscurecimiento del color y cambios de sabor - generalmente indeseable en jugos ya que indica sobreprocesamiento.",
          de: "Die Maillard-Reaktion ist nicht-enzymatische Bräunung, die auftritt, wenn Zucker während der Wärmebehandlung mit Aminosäuren reagieren, was Farbverdunkelung und Geschmacksveränderungen verursacht - im Saft generell unerwünscht, da es Überverarbeitung anzeigt.",
          nl: "De Maillard-reactie is niet-enzymatische bruining die optreedt wanneer suikers reageren met aminozuren tijdens warmtebehandeling, wat kleurverdonkering en smaakvera nderingen veroorzaakt - over het algemeen ongewenst in sap omdat het oververwerking aangeeft."
        }
      },
      {
        question: {
          en: "What is the purpose of adding calcium to orange juice during processing?",
          es: "¿Cuál es el propósito de añadir calcio al jugo de naranja durante el procesamiento?",
          de: "Was ist der Zweck der Zugabe von Kalzium zu Orangensaft während der Verarbeitung?",
          nl: "Wat is het doel van het toevoegen van calcium aan sinaasappelsap tijdens verwerking?"
        },
        options: [
          { en: "Fortification for nutrition and cloud stability", es: "Fortificación para nutrición y estabilidad de turbidez", de: "Anreicherung für Ernährung und Wolkenstabilität", nl: "Verrijking voor voeding en wolkstabiliteit" },
          { en: "Make it taste sweeter", es: "Hacer que sepa más dulce", de: "Süßer schmecken lassen", nl: "Het zoeter laten smaken" },
          { en: "Preserve the color", es: "Preservar el color", de: "Farbe erhalten", nl: "De kleur behouden" },
          { en: "Kill bacteria", es: "Matar bacterias", de: "Bakterien töten", nl: "Bacteriën doden" }
        ],
        correct: 0,
        explanation: {
          en: "Calcium is added to orange juice both as a nutritional fortification and because it helps stabilize cloud particles (pectin), preventing separation and maintaining the desirable cloudy appearance of pulpy orange juice.",
          es: "El calcio se añade al jugo de naranja tanto como fortificación nutricional como porque ayuda a estabilizar las partículas de turbidez (pectina), previniendo la separación y manteniendo la apariencia turbia deseable del jugo de naranja con pulpa.",
          de: "Kalzium wird Orangensaft sowohl als ernährungsphysiologische Anreicherung als auch zugesetzt, weil es hilft, Wolkenpartikel (Pektin) zu stabilisieren, Trennung zu verhindern und das erwünschte trübe Aussehen von pulpigem Orangensaft zu erhalten.",
          nl: "Calcium wordt aan sinaasappelsap toegevoegd zowel als voedingsverrijking als omdat het helpt wolkdeeltjes (pectine) te stabiliseren, scheiding te voorkomen en het gewenste troebele uiterlijk van pulpig sinaasappelsap te behouden."
        }
      },
      {
        question: {
          en: "What is thermosonication in juice preservation?",
          es: "¿Qué es la termosonicación en la preservación de jugos?",
          de: "Was ist Thermosonication in der Saftkonservierung?",
          nl: "Wat is thermosonicatie in sapconservering?"
        },
        options: [
          { en: "Combining ultrasound with mild heat to kill microorganisms", es: "Combinar ultrasonido con calor suave para matar microorganismos", de: "Kombination von Ultraschall mit milder Hitze zur Abtötung von Mikroorganismen", nl: "Combineren van ultrasound met zachte warmte om micro-organismen te doden" },
          { en: "Using only sound waves", es: "Usar solo ondas de sonido", de: "Nur Schallwellen verwenden", nl: "Alleen geluidsgolven gebruiken" },
          { en: "Extreme heating method", es: "Método de calentamiento extremo", de: "Extreme Erhitzungsmethode", nl: "Extreme verhittingsmethode" },
          { en: "Chemical preservation", es: "Preservación química", de: "Chemische Konservierung", nl: "Chemische conservering" }
        ],
        correct: 0,
        explanation: {
          en: "Thermosonication combines ultrasound waves with moderate heat (50-60°C), creating cavitation that disrupts microbial cells while using lower temperatures than traditional pasteurization, better preserving nutrients and flavor.",
          es: "La termosonicación combina ondas de ultrasonido con calor moderado (50-60°C), creando cavitación que interrumpe las células microbianas mientras usa temperaturas más bajas que la pasteurización tradicional, preservando mejor los nutrientes y el sabor.",
          de: "Thermosonication kombiniert Ultraschallwellen mit moderater Hitze (50-60°C), erzeugt Kavitation, die mikrobielle Zellen stört, während niedrigere Temperaturen als traditionelle Pasteurisierung verwendet werden, wodurch Nährstoffe und Geschmack besser erhalten bleiben.",
          nl: "Thermosonicatie combineert ultrageluidsgolven met gematigde warmte (50-60°C), creëert cavitatie die microbiële cellen verstoort terwijl lagere temperaturen worden gebruikt dan traditionele pasteurisatie, waardoor voedingsstoffen en smaak beter behouden blijven."
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
