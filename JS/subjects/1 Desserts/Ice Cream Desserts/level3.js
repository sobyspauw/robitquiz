// Ice Cream Desserts Quiz - Level 3: Advanced Basics
(function() {
  const level3 = {
    name: {
      en: "Ice Cream Desserts - Advanced Basics",
      es: "Postres de Helado - Conceptos Avanzados",
      de: "Eisdesserts - Erweiterte Grundlagen",
      nl: "IJsdesserts - Gevorderde Basiskennis"
    },
    questions: [
      {
        question: {
          en: "What is the ideal pasteurization temperature and time for ice cream mix?",
          es: "¿Cuál es la temperatura y tiempo ideal de pasteurización para la mezcla de helado?",
          de: "Was ist die ideale Pasteurisierungstemperatur und -zeit für Eismischung?",
          nl: "Wat is de ideale pasteurisatietemperatuur en -tijd voor ijsmengsel?"
        },
        options: [
          { en: "63°C for 30 min", es: "63°C por 30 minutos", de: "63°C für 30 Minuten", nl: "63°C gedurende 30 minuten" },
          { en: "72°C for 15 sec", es: "72°C por 15 segundos", de: "72°C für 15 Sekunden", nl: "72°C gedurende 15 seconden" },
          { en: "85°C for 25 sec", es: "85°C por 25 segundos", de: "85°C für 25 Sekunden", nl: "85°C gedurende 25 seconden" },
          { en: "100°C for 5 min", es: "100°C por 5 minutos", de: "100°C für 5 Minuten", nl: "100°C gedurende 5 minuten" }
        ],
        correct: 2,
        explanation: {
          en: "Ice cream mix should be pasteurized at 85°C for 25 seconds to ensure food safety while preserving the quality of ingredients and achieving proper protein denaturation.",
          es: "La mezcla de helado debe pasteurizarse a 85°C por 25 segundos para asegurar la seguridad alimentaria mientras se preserva la calidad de los ingredientes y se logra la desnaturalización adecuada de proteínas.",
          de: "Eismischung sollte bei 85°C für 25 Sekunden pasteurisiert werden, um Lebensmittelsicherheit zu gewährleisten und gleichzeitig die Qualität der Zutaten zu erhalten und eine ordnungsgemäße Proteindenaturierung zu erreichen.",
          nl: "IJsmengsel moet gepasteuriseerd worden op 85°C gedurende 25 seconden om voedselveiligheid te waarborgen terwijl de kwaliteit van ingrediënten behouden blijft en juiste eiwitdenaturatie wordt bereikt."
        }
      },
      {
        question: {
          en: "What is the purpose of aging ice cream mix before churning?",
          es: "¿Cuál es el propósito de envejecer la mezcla de helado antes del batido?",
          de: "Was ist der Zweck des Reifens der Eismischung vor dem Rühren?",
          nl: "Wat is het doel van het rijpen van ijsmengsel voor het karnen?"
        },
        options: [
          { en: "To cool it down only", es: "Solo para enfriarlo", de: "Nur zum Abkühlen", nl: "Alleen om het af te koelen" },
          { en: "To hydrate proteins and improve whipping properties", es: "Para hidratar proteínas y mejorar propiedades de batido", de: "Um Proteine zu hydrieren und Schlagleistung zu verbessern", nl: "Om eiwitten te hydrateren en klopeigenschappen te verbeteren" },
          { en: "To add more sugar", es: "Para agregar más azúcar", de: "Um mehr Zucker hinzuzufügen", nl: "Om meer suiker toe te voegen" },
          { en: "To remove air bubbles", es: "Para eliminar burbujas de aire", de: "Um Luftblasen zu entfernen", nl: "Om luchtbellen te verwijderen" }
        ],
        correct: 1,
        explanation: {
          en: "Aging allows milk proteins to fully hydrate, fat to crystallize properly, and improves the mix's ability to incorporate air during churning, resulting in better texture and overrun.",
          es: "El envejecimiento permite que las proteínas de la leche se hidraten completamente, que la grasa cristalice adecuadamente, y mejora la capacidad de la mezcla para incorporar aire durante el batido, resultando en mejor textura y overrun.",
          de: "Das Reifen ermöglicht es Milchproteinen, vollständig zu hydrieren, Fett ordnungsgemäß zu kristallisieren, und verbessert die Fähigkeit der Mischung, während des Rührens Luft einzuarbeiten, was zu besserer Textur und Übergang führt.",
          nl: "Rijpen zorgt ervoor dat melkeiwitten volledig hydrateren, vet goed kristalliseert, en verbetert het vermogen van het mengsel om lucht in te werken tijdens het karnen, wat resulteert in betere textuur en overrun."
        }
      },
      {
        question: {
          en: "What is the ideal draw temperature for ice cream from a batch freezer?",
          es: "¿Cuál es la temperatura ideal de extracción para helado de un congelador por lotes?",
          de: "Was ist die ideale Entnahmetemperatur für Eis aus einem Batch-Froster?",
          nl: "Wat is de ideale aftaptemperatuur voor ijs uit een batch vriezer?"
        },
        options: [
          { en: "-3°C to -5°C", es: "-3°C a -5°C", de: "-3°C bis -5°C", nl: "-3°C tot -5°C" },
          { en: "-6°C to -8°C", es: "-6°C a -8°C", de: "-6°C bis -8°C", nl: "-6°C tot -8°C" },
          { en: "-12°C to -15°C", es: "-12°C a -15°C", de: "-12°C bis -15°C", nl: "-12°C tot -15°C" },
          { en: "-18°C to -20°C", es: "-18°C a -20°C", de: "-18°C bis -20°C", nl: "-18°C tot -20°C" }
        ],
        correct: 1,
        explanation: {
          en: "Ice cream should be drawn from the batch freezer at -6°C to -8°C. At this temperature, it has the consistency of soft serve and can be easily packaged before hardening.",
          es: "El helado debe extraerse del congelador por lotes a -6°C a -8°C. A esta temperatura, tiene la consistencia de helado suave y puede empacarse fácilmente antes del endurecimiento.",
          de: "Eis sollte bei -6°C bis -8°C aus dem Batch-Froster entnommen werden. Bei dieser Temperatur hat es die Konsistenz von Softeis und kann vor der Härtung leicht verpackt werden.",
          nl: "Ijs moet bij -6°C tot -8°C uit de batch vriezer gehaald worden. Op deze temperatuur heeft het de consistentie van softijs en kan het gemakkelijk verpakt worden voor het verharden."
        }
      },
      {
        question: {
          en: "What causes wheying-off in ice cream?",
          es: "¿Qué causa la separación de suero en el helado?",
          de: "Was verursacht die Molkenabscheidung im Eis?",
          nl: "Wat veroorzaakt wei-afscheiding in ijs?"
        },
        options: [
          { en: "Too much sugar", es: "Demasiado azúcar", de: "Zu viel Zucker", nl: "Te veel suiker" },
          { en: "Protein denaturation due to excessive heat or acid", es: "Desnaturalización de proteínas debido a calor excesivo o ácido", de: "Proteindenaturierung durch übermäßige Hitze oder Säure", nl: "Eiwitdenaturatie door overdreven hitte of zuur" },
          { en: "Insufficient fat content", es: "Contenido de grasa insuficiente", de: "Unzureichender Fettgehalt", nl: "Onvoldoende vetgehalte" },
          { en: "Too much air incorporation", es: "Demasiada incorporación de aire", de: "Zu viel Lufteinarbeitung", nl: "Te veel luchtinwerking" }
        ],
        correct: 1,
        explanation: {
          en: "Wheying-off occurs when milk proteins denature due to excessive heat, low pH, or both, causing them to coagulate and separate from the liquid, creating a grainy, watery texture.",
          es: "La separación de suero ocurre cuando las proteínas de la leche se desnaturalizan debido a calor excesivo, pH bajo, o ambos, causando que coagulen y se separen del líquido, creando una textura granulosa y acuosa.",
          de: "Molkenabscheidung tritt auf, wenn Milchproteine durch übermäßige Hitze, niedrigen pH-Wert oder beides denaturieren, wodurch sie koagulieren und sich von der Flüssigkeit trennen, was eine körnige, wässrige Textur erzeugt.",
          nl: "Wei-afscheiding treedt op wanneer melkeiwitten denatureren door overdreven hitte, lage pH, of beide, waardoor ze coaguleren en scheiden van de vloeistof, wat een korrelige, waterige textuur creëert."
        }
      },
      {
        question: {
          en: "What is the recommended hardening rate for ice cream?",
          es: "¿Cuál es la velocidad de endurecimiento recomendada para helado?",
          de: "Was ist die empfohlene Härtungsrate für Eis?",
          nl: "Wat is de aanbevolen verhardingssnelheid voor ijs?"
        },
        options: [
          { en: "1°C per hour", es: "1°C por hora", de: "1°C pro Stunde", nl: "1°C per uur" },
          { en: "5°C per hour", es: "5°C por hora", de: "5°C pro Stunde", nl: "5°C per uur" },
          { en: "1°C per minute", es: "1°C por minuto", de: "1°C pro Minute", nl: "1°C per minuut" },
          { en: "As fast as possible", es: "Tan rápido como sea posible", de: "So schnell wie möglich", nl: "Zo snel mogelijk" }
        ],
        correct: 2,
        explanation: {
          en: "Ice cream should be hardened at approximately 1°C per minute from -6°C to -18°C to minimize ice crystal growth and maintain smooth texture throughout the product.",
          es: "El helado debe endurecerse a aproximadamente 1°C por minuto de -6°C a -18°C para minimizar el crecimiento de cristales de hielo y mantener textura suave en todo el producto.",
          de: "Eis sollte mit etwa 1°C pro Minute von -6°C auf -18°C gehärtet werden, um das Wachstum von Eiskristallen zu minimieren und eine glatte Textur im gesamten Produkt zu erhalten.",
          nl: "Ijs moet verharden met ongeveer 1°C per minuut van -6°C naar -18°C om ijskristalgroei te minimaliseren en gladde textuur door het hele product te behouden."
        }
      },
      {
        question: {
          en: "What is the function of milk solids-not-fat (MSNF) in ice cream?",
          es: "¿Cuál es la función de los sólidos lácteos no grasos (MSNF) en el helado?",
          de: "Was ist die Funktion der fettfreien Milchtrockenmasse (MSNF) im Eis?",
          nl: "Wat is de functie van melkvaste stoffen-niet-vet (MSNF) in ijs?"
        },
        options: [
          { en: "Only add sweetness", es: "Solo agregar dulzura", de: "Nur Süße hinzufügen", nl: "Alleen zoetheid toevoegen" },
          { en: "Provide body, improve whipping, and enhance flavor", es: "Proporcionar cuerpo, mejorar batido y realzar sabor", de: "Körper geben, Schlagleistung verbessern und Geschmack verstärken", nl: "Body geven, kloppen verbeteren en smaak versterken" },
          { en: "Only prevent melting", es: "Solo prevenir derretimiento", de: "Nur Schmelzen verhindern", nl: "Alleen smelten voorkomen" },
          { en: "Add color", es: "Agregar color", de: "Farbe hinzufügen", nl: "Kleur toevoegen" }
        ],
        correct: 1,
        explanation: {
          en: "MSNF provides body and chewiness, improves whipping properties, enhances flavor perception, and contributes to the nutritional value of ice cream. Optimal levels are 9-12%.",
          es: "Los MSNF proporcionan cuerpo y masticabilidad, mejoran las propiedades de batido, realzan la percepción del sabor, y contribuyen al valor nutricional del helado. Los niveles óptimos son 9-12%.",
          de: "MSNF verleiht Körper und Kaubarkeit, verbessert Schlagleistung, verstärkt Geschmackswahrnehmung und trägt zum Nährwert des Eises bei. Optimale Werte sind 9-12%.",
          nl: "MSNF geeft body en kauwbaarheid, verbetert klopeigenschappen, versterkt smaakperceptie, en draagt bij aan de voedingswaarde van ijs. Optimale niveaus zijn 9-12%."
        }
      },
      {
        question: {
          en: "What is the difference between gellan gum and carrageenan as stabilizers?",
          es: "¿Cuál es la diferencia entre goma gellan y carragenina como estabilizadores?",
          de: "Was ist der Unterschied zwischen Gellan-Gummi und Carrageenan als Stabilisatoren?",
          nl: "Wat is het verschil tussen gellan gom en carrageenan als stabilisatoren?"
        },
        options: [
          { en: "They are identical", es: "Son idénticos", de: "Sie sind identisch", nl: "Ze zijn identiek" },
          { en: "Gellan provides firmer gel, carrageenan gives elastic texture", es: "Gellan proporciona gel más firme, carragenina da textura elástica", de: "Gellan bietet festeres Gel, Carrageenan verleiht elastische Textur", nl: "Gellan geeft steviger gel, carrageenan geeft elastische textuur" },
          { en: "Only gellan prevents ice crystals", es: "Solo gellan previene cristales de hielo", de: "Nur Gellan verhindert Eiskristalle", nl: "Alleen gellan voorkomt ijskristallen" },
          { en: "Carrageenan is only for flavor", es: "Carragenina es solo para sabor", de: "Carrageenan ist nur für Geschmack", nl: "Carrageenan is alleen voor smaak" }
        ],
        correct: 1,
        explanation: {
          en: "Gellan gum forms a firm, brittle gel and provides excellent water binding, while carrageenan creates a more elastic, creamy texture and is particularly effective with dairy proteins.",
          es: "La goma gellan forma un gel firme y quebradizo y proporciona excelente unión de agua, mientras que la carragenina crea una textura más elástica y cremosa y es particularmente efectiva con proteínas lácteas.",
          de: "Gellan-Gummi bildet ein festes, sprödes Gel und bietet ausgezeichnete Wasserbindung, während Carrageenan eine elastischere, cremigere Textur erzeugt und besonders wirksam mit Milchproteinen ist.",
          nl: "Gellan gom vormt een stevige, brosse gel en biedt uitstekende waterbinding, terwijl carrageenan een elastischere, romige textuur creëert en bijzonder effectief is met melkeiwitten."
        }
      },
      {
        question: {
          en: "What is the optimal pH range for ice cream mix?",
          es: "¿Cuál es el rango de pH óptimo para la mezcla de helado?",
          de: "Was ist der optimale pH-Bereich für Eismischung?",
          nl: "Wat is het optimale pH-bereik voor ijsmengsel?"
        },
        options: [
          { en: "5.0-5.5", es: "5.0-5.5", de: "5.0-5.5", nl: "5.0-5.5" },
          { en: "6.3-6.8", es: "6.3-6.8", de: "6.3-6.8", nl: "6.3-6.8" },
          { en: "7.0-7.5", es: "7.0-7.5", de: "7.0-7.5", nl: "7.0-7.5" },
          { en: "8.0-8.5", es: "8.0-8.5", de: "8.0-8.5", nl: "8.0-8.5" }
        ],
        correct: 1,
        explanation: {
          en: "The optimal pH range for ice cream is 6.3-6.8. This range ensures proper protein functionality, prevents wheying-off, optimizes stabilizer performance, and maintains good flavor balance.",
          es: "El rango de pH óptimo para helado es 6.3-6.8. Este rango asegura funcionalidad adecuada de proteínas, previene separación de suero, optimiza rendimiento de estabilizadores, y mantiene buen equilibrio de sabor.",
          de: "Der optimale pH-Bereich für Eis ist 6.3-6.8. Dieser Bereich gewährleistet ordnungsgemäße Proteinfunktionalität, verhindert Molkenabscheidung, optimiert Stabilisatorleistung und erhält gutes Geschmacksgleichgewicht.",
          nl: "Het optimale pH-bereik voor ijs is 6.3-6.8. Dit bereik zorgt voor juiste eiwitfunctionaliteit, voorkomt wei-afscheiding, optimaliseert stabilisatorprestatie, en behoudt goede smaakbalans."
        }
      },
      {
        question: {
          en: "What is the purpose of glycerol monostearate (GMS) in ice cream?",
          es: "¿Cuál es el propósito del monoestearato de glicerol (GMS) en el helado?",
          de: "Was ist der Zweck von Glycerinmonostearat (GMS) im Eis?",
          nl: "Wat is het doel van glycerol monostearaat (GMS) in ijs?"
        },
        options: [
          { en: "Only sweetening", es: "Solo endulzar", de: "Nur Süßen", nl: "Alleen zoeten" },
          { en: "Emulsification and dryness reduction", es: "Emulsificación y reducción de sequedad", de: "Emulgierung und Trockenheitsreduktion", nl: "Emulgering en droogheid vermindering" },
          { en: "Only coloring", es: "Solo colorear", de: "Nur Färben", nl: "Alleen kleuren" },
          { en: "Flavor enhancement only", es: "Solo realce de sabor", de: "Nur Geschmacksverstärkung", nl: "Alleen smaakversterking" }
        ],
        correct: 1,
        explanation: {
          en: "GMS acts as an emulsifier to stabilize fat globules and also provides anti-staling properties, reducing dryness and improving the creamy mouthfeel of ice cream over time.",
          es: "El GMS actúa como emulsificante para estabilizar glóbulos de grasa y también proporciona propiedades anti-endurecimiento, reduciendo sequedad y mejorando la sensación cremosa del helado con el tiempo.",
          de: "GMS wirkt als Emulgator zur Stabilisierung von Fettkügelchen und bietet auch Anti-Verhärtungs-Eigenschaften, reduziert Trockenheit und verbessert das cremige Mundgefühl von Eis über die Zeit.",
          nl: "GMS werkt als emulgator om vetbolletjes te stabiliseren en biedt ook anti-verharding eigenschappen, vermindert droogheid en verbetert het romige mondgevoel van ijs over tijd."
        }
      },
      {
        question: {
          en: "What is the ideal viscosity range for ice cream mix before churning?",
          es: "¿Cuál es el rango de viscosidad ideal para la mezcla de helado antes del batido?",
          de: "Was ist der ideale Viskositätsbereich für Eismischung vor dem Rühren?",
          nl: "Wat is het ideale viscositeitsbereik voor ijsmengsel voor het karnen?"
        },
        options: [
          { en: "10-20 cP", es: "10-20 cP", de: "10-20 cP", nl: "10-20 cP" },
          { en: "50-100 cP", es: "50-100 cP", de: "50-100 cP", nl: "50-100 cP" },
          { en: "150-300 cP", es: "150-300 cP", de: "150-300 cP", nl: "150-300 cP" },
          { en: "500-1000 cP", es: "500-1000 cP", de: "500-1000 cP", nl: "500-1000 cP" }
        ],
        correct: 2,
        explanation: {
          en: "The ideal viscosity for ice cream mix is 150-300 cP at 4°C. This range ensures proper air incorporation during churning while maintaining good body and mouthfeel in the finished product.",
          es: "La viscosidad ideal para la mezcla de helado es 150-300 cP a 4°C. Este rango asegura incorporación adecuada de aire durante el batido mientras mantiene buen cuerpo y sensación en boca en el producto terminado.",
          de: "Die ideale Viskosität für Eismischung ist 150-300 cP bei 4°C. Dieser Bereich gewährleistet ordnungsgemäße Lufteinarbeitung beim Rühren und erhält gleichzeitig guten Körper und Mundgefühl im fertigen Produkt.",
          nl: "De ideale viscositeit voor ijsmengsel is 150-300 cP bij 4°C. Dit bereik zorgt voor juiste luchtinwerking tijdens het karnen terwijl goede body en mondgevoel in het eindproduct behouden blijft."
        }
      },
      {
        question: {
          en: "What causes sandiness in ice cream?",
          es: "¿Qué causa la arenosidad en el helado?",
          de: "Was verursacht Sandigkeit im Eis?",
          nl: "Wat veroorzaakt zanderigheid in ijs?"
        },
        options: [
          { en: "Too much air", es: "Demasiado aire", de: "Zu viel Luft", nl: "Te veel lucht" },
          { en: "Lactose crystallization", es: "Cristalización de lactosa", de: "Laktosekristallisation", nl: "Lactose kristallisatie" },
          { en: "Insufficient fat", es: "Grasa insuficiente", de: "Unzureichendes Fett", nl: "Onvoldoende vet" },
          { en: "Too much water", es: "Demasiada agua", de: "Zu viel Wasser", nl: "Te veel water" }
        ],
        correct: 1,
        explanation: {
          en: "Sandiness is caused by lactose crystallization, which occurs when lactose concentration is too high (over 9.5%) or when temperature fluctuations allow crystal growth during storage.",
          es: "La arenosidad es causada por cristalización de lactosa, que ocurre cuando la concentración de lactosa es demasiado alta (sobre 9.5%) o cuando las fluctuaciones de temperatura permiten crecimiento de cristales durante el almacenamiento.",
          de: "Sandigkeit wird durch Laktosekristallisation verursacht, die auftritt, wenn die Laktosekonzentration zu hoch ist (über 9.5%) oder wenn Temperaturschwankungen Kristallwachstum während der Lagerung ermöglichen.",
          nl: "Zanderigheid wordt veroorzaakt door lactose kristallisatie, die optreedt wanneer lactoseconcentratie te hoog is (boven 9.5%) of wanneer temperatuurschommelingen kristalgroei tijdens opslag mogelijk maken."
        }
      },
      {
        question: {
          en: "What is the freezing point depression of a typical ice cream mix?",
          es: "¿Cuál es la depresión del punto de congelación de una mezcla típica de helado?",
          de: "Was ist die Gefrierpunktserniedrigung einer typischen Eismischung?",
          nl: "Wat is de vriespuntverlaging van een typisch ijsmengsel?"
        },
        options: [
          { en: "0.5-1°C", es: "0.5-1°C", de: "0.5-1°C", nl: "0.5-1°C" },
          { en: "1.5-3°C", es: "1.5-3°C", de: "1.5-3°C", nl: "1.5-3°C" },
          { en: "4-6°C", es: "4-6°C", de: "4-6°C", nl: "4-6°C" },
          { en: "8-10°C", es: "8-10°C", de: "8-10°C", nl: "8-10°C" }
        ],
        correct: 1,
        explanation: {
          en: "Ice cream mix typically has a freezing point depression of 1.5-3°C due to dissolved solids (sugars, salts, proteins). This means it starts freezing around -2°C instead of 0°C.",
          es: "La mezcla de helado típicamente tiene una depresión del punto de congelación de 1.5-3°C debido a sólidos disueltos (azúcares, sales, proteínas). Esto significa que comienza a congelarse alrededor de -2°C en lugar de 0°C.",
          de: "Eismischung hat typischerweise eine Gefrierpunktserniedrigung von 1.5-3°C aufgrund gelöster Feststoffe (Zucker, Salze, Proteine). Das bedeutet, sie beginnt bei etwa -2°C statt bei 0°C zu gefrieren.",
          nl: "IJsmengsel heeft doorgaans een vriespuntverlaging van 1.5-3°C door opgeloste vaste stoffen (suikers, zouten, eiwitten). Dit betekent dat het begint te bevriezen rond -2°C in plaats van 0°C."
        }
      },
      {
        question: {
          en: "What is the purpose of polysorbate 80 in ice cream?",
          es: "¿Cuál es el propósito del polisorbato 80 en el helado?",
          de: "Was ist der Zweck von Polysorbat 80 im Eis?",
          nl: "Wat is het doel van polysorbaat 80 in ijs?"
        },
        options: [
          { en: "Only flavoring", es: "Solo saborizante", de: "Nur Aromatisierung", nl: "Alleen smaakstof" },
          { en: "Emulsifier and texture improver", es: "Emulsificante y mejorador de textura", de: "Emulgator und Texturverbesserer", nl: "Emulgator en textuurverbeteraar" },
          { en: "Only preservation", es: "Solo conservación", de: "Nur Konservierung", nl: "Alleen conservering" },
          { en: "Only coloring", es: "Solo colorante", de: "Nur Färbung", nl: "Alleen kleuring" }
        ],
        correct: 1,
        explanation: {
          en: "Polysorbate 80 (Tween 80) is an emulsifier that helps create stable emulsions, improves air incorporation, and provides smoother, creamier texture by reducing surface tension.",
          es: "El polisorbato 80 (Tween 80) es un emulsificante que ayuda a crear emulsiones estables, mejora la incorporación de aire, y proporciona textura más suave y cremosa al reducir la tensión superficial.",
          de: "Polysorbat 80 (Tween 80) ist ein Emulgator, der hilft, stabile Emulsionen zu schaffen, die Lufteinarbeitung zu verbessern und eine glattere, cremigere Textur durch Reduzierung der Oberflächenspannung zu bieten.",
          nl: "Polysorbaat 80 (Tween 80) is een emulgator die helpt stabiele emulsies te creëren, luchtinwerking verbetert, en gladdere, romigere textuur biedt door oppervlaktespanning te verminderen."
        }
      },
      {
        question: {
          en: "What is the ideal hardening tunnel temperature for commercial ice cream?",
          es: "¿Cuál es la temperatura ideal del túnel de endurecimiento para helado comercial?",
          de: "Was ist die ideale Härtungstunneltemperatur für kommerzielles Eis?",
          nl: "Wat is de ideale verhardingstunnel temperatuur voor commercieel ijs?"
        },
        options: [
          { en: "-10°C to -15°C", es: "-10°C a -15°C", de: "-10°C bis -15°C", nl: "-10°C tot -15°C" },
          { en: "-25°C to -35°C", es: "-25°C a -35°C", de: "-25°C bis -35°C", nl: "-25°C tot -35°C" },
          { en: "-40°C to -50°C", es: "-40°C a -50°C", de: "-40°C bis -50°C", nl: "-40°C tot -50°C" },
          { en: "-60°C to -70°C", es: "-60°C a -70°C", de: "-60°C bis -70°C", nl: "-60°C tot -70°C" }
        ],
        correct: 2,
        explanation: {
          en: "Commercial hardening tunnels operate at -40°C to -50°C to rapidly freeze ice cream from draw temperature to storage temperature, minimizing ice crystal growth and maintaining quality.",
          es: "Los túneles de endurecimiento comercial operan a -40°C a -50°C para congelar rápidamente el helado desde temperatura de extracción a temperatura de almacenamiento, minimizando crecimiento de cristales de hielo y manteniendo calidad.",
          de: "Kommerzielle Härtungstunnel arbeiten bei -40°C bis -50°C, um Eis schnell von Entnahmetemperatur auf Lagertemperatur zu gefrieren, Eiskristallwachstum zu minimieren und Qualität zu erhalten.",
          nl: "Commerciële verhardingstunnels werken op -40°C tot -50°C om ijs snel te bevriezen van aftaptemperatuur naar opslagtemperatuur, ijskristalgroei te minimaliseren en kwaliteit te behouden."
        }
      },
      {
        question: {
          en: "What is the difference between sucrose and dextrose in ice cream formulation?",
          es: "¿Cuál es la diferencia entre sacarosa y dextrosa en la formulación de helado?",
          de: "Was ist der Unterschied zwischen Saccharose und Dextrose in der Eisformulierung?",
          nl: "Wat is het verschil tussen sucrose en dextrose in ijsformulering?"
        },
        options: [
          { en: "They are identical", es: "Son idénticos", de: "Sie sind identisch", nl: "Ze zijn identiek" },
          { en: "Dextrose has greater freezing point depression and sweetness", es: "Dextrosa tiene mayor depresión del punto de congelación y dulzura", de: "Dextrose hat größere Gefrierpunktserniedrigung und Süße", nl: "Dextrose heeft grotere vriespuntverlaging en zoetheid" },
          { en: "Sucrose only adds color", es: "Sacarosa solo agrega color", de: "Saccharose fügt nur Farbe hinzu", nl: "Sucrose voegt alleen kleur toe" },
          { en: "Dextrose cannot dissolve in water", es: "Dextrosa no puede disolverse en agua", de: "Dextrose kann sich nicht in Wasser lösen", nl: "Dextrose kan niet oplossen in water" }
        ],
        correct: 1,
        explanation: {
          en: "Dextrose (glucose) has a molecular weight of 180 vs sucrose's 342, giving it nearly twice the freezing point depression per gram and different sweetness intensity, affecting ice cream texture and scoopability.",
          es: "La dextrosa (glucosa) tiene un peso molecular de 180 vs 342 de la sacarosa, dándole casi el doble de depresión del punto de congelación por gramo e intensidad de dulzura diferente, afectando textura y capacidad de servir del helado.",
          de: "Dextrose (Glucose) hat ein Molekulargewicht von 180 vs. Saccharoses 342, was ihr fast doppelte Gefrierpunktserniedrigung pro Gramm und unterschiedliche Süßeintensität verleiht, was Eistextur und Portionierbarkeit beeinflusst.",
          nl: "Dextrose (glucose) heeft een molecuulgewicht van 180 vs sucrose's 342, wat het bijna dubbele vriespuntverlaging per gram geeft en verschillende zoetheid intensiteit, wat ijstextuur en schepbaarheid beïnvloedt."
        }
      },
      {
        question: {
          en: "What is the purpose of heat shocking in ice cream production?",
          es: "¿Cuál es el propósito del choque térmico en la producción de helado?",
          de: "Was ist der Zweck des Hitzeschocks in der Eisproduktion?",
          nl: "Wat is het doel van warmteschok in ijsproductie?"
        },
        options: [
          { en: "To add flavor compounds", es: "Para agregar compuestos de sabor", de: "Um Aromaverbindungen hinzuzufügen", nl: "Om smaakverbindingen toe te voegen" },
          { en: "To test product stability under temperature abuse", es: "Para probar estabilidad del producto bajo abuso de temperatura", de: "Um Produktstabilität unter Temperaturmissbrauch zu testen", nl: "Om productstabiliteit onder temperatuurmisbruik te testen" },
          { en: "To remove air bubbles", es: "Para eliminar burbujas de aire", de: "Um Luftblasen zu entfernen", nl: "Om luchtbellen te verwijderen" },
          { en: "To increase fat content", es: "Para aumentar contenido de grasa", de: "Um Fettgehalt zu erhöhen", nl: "Om vetgehalte te verhogen" }
        ],
        correct: 1,
        explanation: {
          en: "Heat shocking involves cycling ice cream between different temperatures to simulate temperature abuse during distribution and storage, testing the product's resistance to defects like ice crystal growth and texture deterioration.",
          es: "El choque térmico implica ciclar el helado entre diferentes temperaturas para simular abuso de temperatura durante distribución y almacenamiento, probando la resistencia del producto a defectos como crecimiento de cristales de hielo y deterioro de textura.",
          de: "Hitzeschock beinhaltet das Zyklen von Eis zwischen verschiedenen Temperaturen, um Temperaturmissbrauch während Verteilung und Lagerung zu simulieren und die Widerstandsfähigkeit des Produkts gegen Defekte wie Eiskristallwachstum und Texturverschlechterung zu testen.",
          nl: "Warmteschok houdt in dat ijs wordt gecycled tussen verschillende temperaturen om temperatuurmisbruik tijdens distributie en opslag na te bootsen, waarbij de weerstand van het product tegen defecten zoals ijskristalgroei en textuurverslechtering wordt getest."
        }
      },
      {
        question: {
          en: "What is the typical overrun percentage for premium ice cream?",
          es: "¿Cuál es el porcentaje típico de overrun para helado premium?",
          de: "Was ist der typische Übergangsprozentwert für Premium-Eis?",
          nl: "Wat is het typische overrun percentage voor premium ijs?"
        },
        options: [
          { en: "20-40%", es: "20-40%", de: "20-40%", nl: "20-40%" },
          { en: "70-90%", es: "70-90%", de: "70-90%", nl: "70-90%" },
          { en: "120-150%", es: "120-150%", de: "120-150%", nl: "120-150%" },
          { en: "200-300%", es: "200-300%", de: "200-300%", nl: "200-300%" }
        ],
        correct: 1,
        explanation: {
          en: "Premium ice cream typically has 70-90% overrun, meaning the volume increases by this percentage due to air incorporation. Lower overrun creates denser, richer texture compared to standard ice cream (100-120%).",
          es: "El helado premium típicamente tiene 70-90% de overrun, significando que el volumen aumenta este porcentaje debido a incorporación de aire. Menor overrun crea textura más densa y rica comparado con helado estándar (100-120%).",
          de: "Premium-Eis hat typischerweise 70-90% Übergang, was bedeutet, dass das Volumen um diesen Prozentsatz durch Lufteinarbeitung zunimmt. Niedrigerer Übergang erzeugt dichtere, reichhaltigere Textur im Vergleich zu Standard-Eis (100-120%).",
          nl: "Premium ijs heeft doorgaans 70-90% overrun, wat betekent dat het volume met dit percentage toeneemt door luchtinwerking. Lagere overrun creëert dichtere, rijkere textuur vergeleken met standaard ijs (100-120%)."
        }
      },
      {
        question: {
          en: "What is the role of mono- and diglycerides in ice cream?",
          es: "¿Cuál es el papel de los mono y diglicéridos en el helado?",
          de: "Welche Rolle spielen Mono- und Diglyceride im Eis?",
          nl: "Wat is de rol van mono- en diglyceriden in ijs?"
        },
        options: [
          { en: "Only sweetening agents", es: "Solo agentes endulzantes", de: "Nur Süßungsmittel", nl: "Alleen zoetstof" },
          { en: "Emulsifiers that improve air incorporation and texture", es: "Emulsificantes que mejoran incorporación de aire y textura", de: "Emulgatoren, die Lufteinarbeitung und Textur verbessern", nl: "Emulgatoren die luchtinwerking en textuur verbeteren" },
          { en: "Only for color enhancement", es: "Solo para realce de color", de: "Nur zur Farbverbesserung", nl: "Alleen voor kleurverbetering" },
          { en: "Only preservatives", es: "Solo conservantes", de: "Nur Konservierungsmittel", nl: "Alleen conserveermiddelen" }
        ],
        correct: 1,
        explanation: {
          en: "Mono- and diglycerides act as emulsifiers, helping to create stable fat-protein complexes that improve air incorporation, enhance texture, and provide better resistance to melting and heat shock.",
          es: "Los mono y diglicéridos actúan como emulsificantes, ayudando a crear complejos estables grasa-proteína que mejoran incorporación de aire, realzan textura, y proporcionan mejor resistencia al derretimiento y choque térmico.",
          de: "Mono- und Diglyceride wirken als Emulgatoren und helfen, stabile Fett-Protein-Komplexe zu schaffen, die Lufteinarbeitung verbessern, Textur verstärken und bessere Resistenz gegen Schmelzen und Hitzeschock bieten.",
          nl: "Mono- en diglyceriden werken als emulgatoren, helpen stabiele vet-eiwit complexen te creëren die luchtinwerking verbeteren, textuur versterken, en betere weerstand tegen smelten en warmteschok bieden."
        }
      },
      {
        question: {
          en: "What causes coarse texture in ice cream?",
          es: "¿Qué causa textura tosca en el helado?",
          de: "Was verursacht grobe Textur im Eis?",
          nl: "Wat veroorzaakt grove textuur in ijs?"
        },
        options: [
          { en: "Too much fat only", es: "Solo demasiada grasa", de: "Nur zu viel Fett", nl: "Alleen te veel vet" },
          { en: "Large ice crystals from slow freezing or temperature fluctuations", es: "Cristales de hielo grandes por congelación lenta o fluctuaciones de temperatura", de: "Große Eiskristalle durch langsames Gefrieren oder Temperaturschwankungen", nl: "Grote ijskristallen door langzaam bevriezen of temperatuurschommelingen" },
          { en: "Too much sugar only", es: "Solo demasiado azúcar", de: "Nur zu viel Zucker", nl: "Alleen te veel suiker" },
          { en: "Excessive churning time", es: "Tiempo excesivo de batido", de: "Übermäßige Rührzeit", nl: "Overdreven karntijd" }
        ],
        correct: 1,
        explanation: {
          en: "Coarse texture is primarily caused by large ice crystals that form during slow freezing, inadequate churning, or temperature fluctuations during storage that cause recrystallization.",
          es: "La textura tosca es causada principalmente por cristales de hielo grandes que se forman durante congelación lenta, batido inadecuado, o fluctuaciones de temperatura durante almacenamiento que causan recristalización.",
          de: "Grobe Textur wird hauptsächlich durch große Eiskristalle verursacht, die beim langsamen Gefrieren, unzureichendem Rühren oder Temperaturschwankungen während der Lagerung entstehen, die Rekristallisation verursachen.",
          nl: "Grove textuur wordt voornamelijk veroorzaakt door grote ijskristallen die vormen tijdens langzaam bevriezen, onvoldoende karnen, of temperatuurschommelingen tijdens opslag die herkristallisatie veroorzaken."
        }
      },
      {
        question: {
          en: "What is the optimal churning time for a typical 5-liter batch of ice cream?",
          es: "¿Cuál es el tiempo óptimo de batido para un lote típico de 5 litros de helado?",
          de: "Was ist die optimale Rührzeit für eine typische 5-Liter-Charge Eis?",
          nl: "Wat is de optimale karntijd voor een typische 5-liter batch ijs?"
        },
        options: [
          { en: "5-10 min", es: "5-10 minutos", de: "5-10 Minuten", nl: "5-10 minuten" },
          { en: "15-25 min", es: "15-25 minutos", de: "15-25 Minuten", nl: "15-25 minuten" },
          { en: "30-45 min", es: "30-45 minutos", de: "30-45 Minuten", nl: "30-45 minuten" },
          { en: "Over 60 min", es: "Más de 60 minutos", de: "Über 60 Minuten", nl: "Meer dan 60 minuten" }
        ],
        correct: 1,
        explanation: {
          en: "Optimal churning time for a 5-liter batch is typically 15-25 minutes, allowing sufficient time for proper air incorporation and fat destabilization without over-churning that could lead to butter formation.",
          es: "El tiempo óptimo de batido para un lote de 5 litros es típicamente 15-25 minutos, permitiendo tiempo suficiente para incorporación adecuada de aire y desestabilización de grasa sin sobre-batir que podría llevar a formación de mantequilla.",
          de: "Die optimale Rührzeit für eine 5-Liter-Charge beträgt typischerweise 15-25 Minuten, was ausreichend Zeit für ordnungsgemäße Lufteinarbeitung und Fettdestabilisierung ermöglicht, ohne Überrühren, das zur Butterbildung führen könnte.",
          nl: "Optimale karntijd voor een 5-liter batch is doorgaans 15-25 minuten, wat voldoende tijd geeft voor juiste luchtinwerking en vetdestabilisatie zonder overkarnen dat tot botervorming zou kunnen leiden."
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