// Quiz Template - Level 1: Currencies - Zeldzame valuta
(function() {
  const level1 = {
    name: {
      en: "Rare Currencies - Basic Concepts",
      es: "Monedas Raras - Conceptos Básicos",
      de: "Seltene Währungen - Grundkonzepte",
      nl: "Zeldzame Valuta - Basisconcepten"
    },
    questions: [
      {
        question: {
          en: "What is considered the most valuable coin ever sold at auction?",
          es: "¿Cuál se considera la moneda más valiosa jamás vendida en subasta?",
          de: "Welche gilt als die wertvollste jemals bei einer Auktion verkaufte Münze?",
          nl: "Welke wordt beschouwd als de waardevolste munt ooit verkocht op een veiling?"
        },
        options: [
          { en: "1933 Double Eagle", es: "Águila Doble de 1933", de: "1933 Doppeladler", nl: "1933 Double Eagle" },
          { en: "1787 Brasher Doubloon", es: "Doblón Brasher de 1787", de: "1787 Brasher Dublone", nl: "1787 Brasher Doubloon" },
          { en: "1343 Edward III Florin", es: "Florín Eduardo III de 1343", de: "1343 Edward III Florin", nl: "1343 Edward III Florin" },
          { en: "1804 Class I Silver Dollar", es: "Dólar de Plata Clase I de 1804", de: "1804 Klasse I Silberdollar", nl: "1804 Klasse I Zilveren Dollar" }
        ],
        correct: 0,
        explanation: {
          en: "The 1933 Double Eagle sold for $18.9 million in 2021, making it the most expensive coin ever sold at auction. Only one is legally owned by a private collector.",
          es: "El Águila Doble de 1933 se vendió por $18.9 millones en 2021, convirtiéndola en la moneda más cara jamás vendida en subasta. Solo una es legalmente propiedad de un coleccionista privado.",
          de: "Der 1933 Doppeladler wurde 2021 für 18,9 Millionen Dollar verkauft und ist damit die teuerste jemals bei einer Auktion verkaufte Münze. Nur eine befindet sich legal im Besitz eines privaten Sammlers.",
          nl: "De 1933 Double Eagle werd in 2021 verkocht voor $18,9 miljoen, waarmee het de duurste munt ooit verkocht op een veiling werd. Slechts één exemplaar is legaal eigendom van een privéverzamelaar."
        }
      },
      {
        question: {
          en: "What does 'numismatics' refer to?",
          es: "¿A qué se refiere la 'numismática'?",
          de: "Worauf bezieht sich 'Numismatik'?",
          nl: "Waar verwijst 'numismatiek' naar?"
        },
        options: [
          { en: "The study of paper money only", es: "El estudio solo del papel moneda", de: "Das Studium nur von Papiergeld", nl: "De studie van alleen papiergeld" },
          { en: "The study and collection of coins, tokens, and medals", es: "El estudio y colección de monedas, fichas y medallas", de: "Das Studium und Sammeln von Münzen, Marken und Medaillen", nl: "De studie en verzameling van munten, penningen en medailles" },
          { en: "The valuation of precious metals", es: "La valoración de metales preciosos", de: "Die Bewertung von Edelmetallen", nl: "De waardering van edele metalen" },
          { en: "Ancient currency trading", es: "El comercio de monedas antiguas", de: "Antiker Währungshandel", nl: "Handel in oude valuta" }
        ],
        correct: 1,
        explanation: {
          en: "Numismatics is the study or collection of currency, including coins, tokens, paper money, medals, and related objects. It encompasses both historical research and collecting practices.",
          es: "La numismática es el estudio o colección de monedas, incluyendo monedas, fichas, papel moneda, medallas y objetos relacionados. Abarca tanto la investigación histórica como las prácticas de colección.",
          de: "Numismatik ist das Studium oder Sammeln von Währungen, einschließlich Münzen, Marken, Papiergeld, Medaillen und verwandten Objekten. Sie umfasst sowohl historische Forschung als auch Sammelpraktiken.",
          nl: "Numismatiek is de studie of verzameling van valuta, inclusief munten, penningen, papiergeld, medailles en gerelateerde objecten. Het omvat zowel historisch onderzoek als verzamelpraktijken."
        }
      },
      {
        question: {
          en: "What is the Sheldon Scale used for?",
          es: "¿Para qué se utiliza la Escala Sheldon?",
          de: "Wofür wird die Sheldon-Skala verwendet?",
          nl: "Waarvoor wordt de Sheldon-schaal gebruikt?"
        },
        options: [
          { en: "Measuring coin weight", es: "Medir el peso de las monedas", de: "Münzgewicht messen", nl: "Het gewicht van munten meten" },
          { en: "Grading coin condition", es: "Calificar la condición de las monedas", de: "Münzzustand bewerten", nl: "De conditie van munten beoordelen" },
          { en: "Dating ancient coins", es: "Datar monedas antiguas", de: "Alte Münzen datieren", nl: "Oude munten dateren" },
          { en: "Determining metal purity", es: "Determinar la pureza del metal", de: "Metallreinheit bestimmen", nl: "Metaalzuiverheid bepalen" }
        ],
        correct: 1,
        explanation: {
          en: "The Sheldon Scale is a 70-point numerical scale used to grade the condition of coins, from Poor-1 (P-1) to Perfect Mint State-70 (MS-70). It was developed by Dr. William Sheldon in 1949.",
          es: "La Escala Sheldon es una escala numérica de 70 puntos utilizada para calificar la condición de las monedas, desde Pobre-1 (P-1) hasta Estado de Casa de Moneda Perfecto-70 (MS-70). Fue desarrollada por el Dr. William Sheldon en 1949.",
          de: "Die Sheldon-Skala ist eine 70-Punkte-Zahlenskala zur Bewertung des Münzzustands, von Schlecht-1 (P-1) bis Perfekter Prägestätte-Zustand-70 (MS-70). Sie wurde 1949 von Dr. William Sheldon entwickelt.",
          nl: "De Sheldon-schaal is een numerieke schaal van 70 punten gebruikt om de conditie van munten te beoordelen, van Slecht-1 (P-1) tot Perfecte Munthuisstaat-70 (MS-70). Het werd ontwikkeld door Dr. William Sheldon in 1949."
        }
      },
      {
        question: {
          en: "What makes the 1916-D Mercury Dime particularly valuable?",
          es: "¿Qué hace que la Moneda de Diez Centavos Mercury de 1916-D sea particularmente valiosa?",
          de: "Was macht den 1916-D Mercury Dime besonders wertvoll?",
          nl: "Wat maakt de 1916-D Mercury Dime bijzonder waardevol?"
        },
        options: [
          { en: "It was made of pure silver", es: "Fue hecha de plata pura", de: "Sie wurde aus reinem Silber hergestellt", nl: "Het was gemaakt van puur zilver" },
          { en: "It has the lowest mintage of the Mercury Dime series", es: "Tiene la menor acuñación de la serie Mercury Dime", de: "Sie hat die niedrigste Prägezahl der Mercury Dime Serie", nl: "Het heeft de laagste muntage van de Mercury Dime serie" },
          { en: "It contains a minting error", es: "Contiene un error de acuñación", de: "Sie enthält einen Prägefehler", nl: "Het bevat een muntfout" },
          { en: "It was the first dime ever made", es: "Fue la primera moneda de diez centavos jamás hecha", de: "Sie war der erste jemals hergestellte Dime", nl: "Het was de eerste dime ooit gemaakt" }
        ],
        correct: 1,
        explanation: {
          en: "The 1916-D Mercury Dime is valuable because it has the lowest mintage of the entire Mercury Dime series, with only 264,000 coins produced at the Denver Mint, making it a key date for collectors.",
          es: "La Moneda de Diez Centavos Mercury de 1916-D es valiosa porque tiene la menor acuñación de toda la serie Mercury Dime, con solo 264,000 monedas producidas en la Casa de Moneda de Denver, convirtiéndola en una fecha clave para coleccionistas.",
          de: "Der 1916-D Mercury Dime ist wertvoll, weil er die niedrigste Prägezahl der gesamten Mercury Dime Serie hat, mit nur 264,000 in der Denver Münzstätte produzierten Münzen, was ihn zu einem Schlüsseldatum für Sammler macht.",
          nl: "De 1916-D Mercury Dime is waardevol omdat het de laagste muntage van de hele Mercury Dime serie heeft, met slechts 264.000 munten geproduceerd in de Denver Mint, waardoor het een sleuteldatum voor verzamelaars is."
        }
      },
      {
        question: {
          en: "What is a 'proof' coin?",
          es: "¿Qué es una moneda 'proof'?",
          de: "Was ist eine 'Proof'-Münze?",
          nl: "Wat is een 'proof' munt?"
        },
        options: [
          { en: "A coin that proves authenticity", es: "Una moneda que prueba autenticidad", de: "Eine Münze, die Authentizität beweist", nl: "Een munt die authenticiteit bewijst" },
          { en: "A coin made with special care for collectors", es: "Una moneda hecha con cuidado especial para coleccionistas", de: "Eine Münze, die mit besonderer Sorgfalt für Sammler hergestellt wurde", nl: "Een munt gemaakt met speciale zorg voor verzamelaars" },
          { en: "A test coin before mass production", es: "Una moneda de prueba antes de la producción en masa", de: "Eine Testmünze vor der Massenproduktion", nl: "Een testmunt vóór massaproductie" },
          { en: "A counterfeit detection method", es: "Un método de detección de falsificaciones", de: "Eine Fälschungserkennungsmethode", nl: "Een vervalsingsdetectiemethode" }
        ],
        correct: 1,
        explanation: {
          en: "A proof coin is a specially made coin produced using polished dies and planchets, struck multiple times to create sharp details and mirror-like fields. They are made specifically for collectors and have superior finish quality.",
          es: "Una moneda proof es una moneda especialmente hecha producida usando troqueles y cospeles pulidos, acuñada múltiples veces para crear detalles nítidos y campos como espejo. Se hacen específicamente para coleccionistas y tienen calidad de acabado superior.",
          de: "Eine Proof-Münze ist eine speziell hergestellte Münze, die mit polierten Stempeln und Rohlingen produziert und mehrmals geprägt wird, um scharfe Details und spiegelähnliche Felder zu schaffen. Sie werden speziell für Sammler hergestellt und haben überlegene Oberflächenqualität.",
          nl: "Een proof munt is een speciaal gemaakte munt geproduceerd met gepolijste stempels en plancetten, meerdere keren geslagen om scherpe details en spiegelachtige velden te creëren. Ze worden speciaal voor verzamelaars gemaakt en hebben superieure afwerkkwaliteit."
        }
      },
      {
        question: {
          en: "What is the world's oldest known coin?",
          es: "¿Cuál es la moneda conocida más antigua del mundo?",
          de: "Was ist die älteste bekannte Münze der Welt?",
          nl: "Wat is 's werelds oudst bekende munt?"
        },
        options: [
          { en: "Lydian Electrum Stater", es: "Estatero de Electrum Lidio", de: "Lydischer Elektrum-Stater", nl: "Lydische Electrum Stater" },
          { en: "Roman Denarius", es: "Denario Romano", de: "Römischer Denar", nl: "Romeinse Denarius" },
          { en: "Chinese Cash Coin", es: "Moneda China Cash", de: "Chinesische Cash-Münze", nl: "Chinese Cash Munt" },
          { en: "Greek Tetradrachm", es: "Tetradracma Griego", de: "Griechische Tetradrachme", nl: "Griekse Tetradrachme" }
        ],
        correct: 0,
        explanation: {
          en: "The Lydian electrum stater, dating from around 650-600 BCE, is considered the world's first true coin. Made from electrum (a gold-silver alloy), it was minted in the ancient kingdom of Lydia in modern-day Turkey.",
          es: "El estatero de electrum lidio, que data de alrededor del 650-600 a.C., se considera la primera moneda verdadera del mundo. Hecho de electrum (una aleación de oro y plata), fue acuñado en el antiguo reino de Lidia en la actual Turquía.",
          de: "Der lydische Elektrum-Stater aus etwa 650-600 v. Chr. gilt als die erste echte Münze der Welt. Aus Elektrum (einer Gold-Silber-Legierung) hergestellt, wurde er im antiken Königreich Lydien im heutigen der Türkei geprägt.",
          nl: "De Lydische electrum stater, daterend van rond 650-600 voor Christus, wordt beschouwd als 's werelds eerste echte munt. Gemaakt van electrum (een goud-zilver legering), werd het gemunt in het oude koninkrijk Lydië in het huidige Turkije."
        }
      },
      {
        question: {
          en: "What does the term 'mint mark' refer to?",
          es: "¿A qué se refiere el término 'marca de ceca'?",
          de: "Worauf bezieht sich der Begriff 'Münzzeichen'?",
          nl: "Waar verwijst de term 'muntmerk' naar?"
        },
        options: [
          { en: "The coin's denomination", es: "La denominación de la moneda", de: "Die Münzbezeichnung", nl: "De denominatie van de munt" },
          { en: "A letter indicating where the coin was minted", es: "Una letra que indica dónde fue acuñada la moneda", de: "Ein Buchstabe, der anzeigt, wo die Münze geprägt wurde", nl: "Een letter die aangeeft waar de munt werd geslagen" },
          { en: "The year of production", es: "El año de producción", de: "Das Produktionsjahr", nl: "Het productiejaar" },
          { en: "The designer's signature", es: "La firma del diseñador", de: "Die Unterschrift des Designers", nl: "De handtekening van de ontwerper" }
        ],
        correct: 1,
        explanation: {
          en: "A mint mark is a small letter or symbol on a coin that identifies which mint facility produced it. For example, 'D' for Denver, 'S' for San Francisco, and 'P' for Philadelphia in U.S. coins.",
          es: "Una marca de ceca es una pequeña letra o símbolo en una moneda que identifica qué instalación de acuñación la produjo. Por ejemplo, 'D' para Denver, 'S' para San Francisco y 'P' para Filadelfia en monedas de EE.UU.",
          de: "Ein Münzzeichen ist ein kleiner Buchstabe oder Symbol auf einer Münze, der identifiziert, welche Münzstätte sie produziert hat. Zum Beispiel 'D' für Denver, 'S' für San Francisco und 'P' für Philadelphia bei US-Münzen.",
          nl: "Een muntmerk is een kleine letter of symbool op een munt die identificeert welke muntfaciliteit het heeft geproduceerd. Bijvoorbeeld 'D' voor Denver, 'S' voor San Francisco en 'P' voor Philadelphia bij Amerikaanse munten."
        }
      },
      {
        question: {
          en: "What is an 'error coin'?",
          es: "¿Qué es una 'moneda con error'?",
          de: "Was ist eine 'Fehlermünze'?",
          nl: "Wat is een 'foutmunt'?"
        },
        options: [
          { en: "A counterfeit coin", es: "Una moneda falsificada", de: "Eine gefälschte Münze", nl: "Een vervalste munt" },
          { en: "A coin with a manufacturing mistake", es: "Una moneda con un error de fabricación", de: "Eine Münze mit einem Herstellungsfehler", nl: "Een munt met een productiefout" },
          { en: "A damaged coin", es: "Una moneda dañada", de: "Eine beschädigte Münze", nl: "Een beschadigde munt" },
          { en: "An incorrectly dated coin", es: "Una moneda con fecha incorrecta", de: "Eine falsch datierte Münze", nl: "Een verkeerd gedateerde munt" }
        ],
        correct: 1,
        explanation: {
          en: "An error coin is a coin that was produced with a mistake during the minting process. These can include double strikes, off-center strikes, clipped planchets, or wrong metal compositions. Error coins are often valuable to collectors.",
          es: "Una moneda con error es una moneda que fue producida con un error durante el proceso de acuñación. Estos pueden incluir golpes dobles, golpes descentrados, cospeles recortados o composiciones de metal incorrectas. Las monedas con error son a menudo valiosas para los coleccionistas.",
          de: "Eine Fehlermünze ist eine Münze, die mit einem Fehler während des Prägeprozesses produziert wurde. Diese können Doppelprägungen, dezentrierte Prägungen, beschnittene Rohlinge oder falsche Metallzusammensetzungen umfassen. Fehlermünzen sind oft wertvoll für Sammler.",
          nl: "Een foutmunt is een munt die werd geproduceerd met een fout tijdens het muntproces. Deze kunnen dubbele slagen, off-center slagen, geknipte plancetten of verkeerde metaalsamenstelling omvatten. Foutmunten zijn vaak waardevol voor verzamelaars."
        }
      },
      {
        question: {
          en: "What is the 1804 Draped Bust Silver Dollar known as?",
          es: "¿Cómo se conoce el Dólar de Plata Draped Bust de 1804?",
          de: "Wie ist der 1804 Draped Bust Silberdollar bekannt?",
          nl: "Hoe staat de 1804 Draped Bust Silver Dollar bekend?"
        },
        options: [
          { en: "The King of American Coins", es: "El Rey de las Monedas Americanas", de: "Der König der amerikanischen Münzen", nl: "De Koning van Amerikaanse Munten" },
          { en: "The Holy Grail", es: "El Santo Grial", de: "Der Heilige Gral", nl: "De Heilige Graal" },
          { en: "The Crown Jewel", es: "La Joya de la Corona", de: "Das Kronjuwel", nl: "Het Kronjuweel" },
          { en: "The American Dream", es: "El Sueño Americano", de: "Der Amerikanische Traum", nl: "De Amerikaanse Droom" }
        ],
        correct: 0,
        explanation: {
          en: "The 1804 Draped Bust Silver Dollar is famously known as 'The King of American Coins.' Despite the 1804 date, these coins were actually minted in the 1830s for diplomatic gift sets, making them extremely rare and valuable.",
          es: "El Dólar de Plata Draped Bust de 1804 es famosamente conocido como 'El Rey de las Monedas Americanas.' A pesar de la fecha de 1804, estas monedas fueron acuñadas en la década de 1830 para sets de regalos diplomáticos, haciéndolas extremadamente raras y valiosas.",
          de: "Der 1804 Draped Bust Silberdollar ist berühmt als 'Der König der amerikanischen Münzen' bekannt. Trotz des Datums 1804 wurden diese Münzen tatsächlich in den 1830er Jahren für diplomatische Geschenksets geprägt, was sie extrem selten und wertvoll macht.",
          nl: "De 1804 Draped Bust Silver Dollar staat beroemd bekend als 'De Koning van Amerikaanse Munten.' Ondanks de datum van 1804 werden deze munten eigenlijk in de jaren 1830 geslagen voor diplomatieke cadeausets, waardoor ze extreem zeldzaam en waardevol zijn."
        }
      },
      {
        question: {
          en: "What is 'toning' on a coin?",
          es: "¿Qué es el 'toning' en una moneda?",
          de: "Was ist 'Tönung' bei einer Münze?",
          nl: "Wat is 'toning' op een munt?"
        },
        options: [
          { en: "Artificial coloring added to coins", es: "Coloración artificial añadida a las monedas", de: "Künstliche Färbung zu Münzen hinzugefügt", nl: "Kunstmatige kleuring toegevoegd aan munten" },
          { en: "Natural color changes from oxidation", es: "Cambios naturales de color por oxidación", de: "Natürliche Farbänderungen durch Oxidation", nl: "Natuurlijke kleurveranderingen door oxidatie" },
          { en: "Cleaning marks on the surface", es: "Marcas de limpieza en la superficie", de: "Reinigungsmarkierungen auf der Oberfläche", nl: "Schoonmaaksporen op het oppervlak" },
          { en: "Wear patterns from circulation", es: "Patrones de desgaste por circulación", de: "Abnutzungsmuster durch Umlauf", nl: "Slijtagepatronen door circulatie" }
        ],
        correct: 1,
        explanation: {
          en: "Toning is the natural discoloration that occurs on coins over time due to chemical reactions between the metal and environmental factors. On silver coins, it often appears as beautiful rainbow colors and can actually increase value when attractive.",
          es: "El toning es la decoloración natural que ocurre en las monedas con el tiempo debido a reacciones químicas entre el metal y factores ambientales. En monedas de plata, a menudo aparece como hermosos colores arcoíris y puede aumentar el valor cuando es atractivo.",
          de: "Tönung ist die natürliche Verfärbung, die bei Münzen im Laufe der Zeit aufgrund chemischer Reaktionen zwischen dem Metall und Umweltfaktoren auftritt. Bei Silbermünzen erscheint sie oft als schöne Regenbogenfarben und kann den Wert erhöhen, wenn sie attraktiv ist.",
          nl: "Toning is de natuurlijke verkleuring die optreedt op munten in de loop van de tijd door chemische reacties tussen het metaal en omgevingsfactoren. Op zilveren munten verschijnt het vaak als prachtige regenboogkleuren en kan de waarde verhogen wanneer het aantrekkelijk is."
        }
      },
      {
        question: {
          en: "What is the Morgan Silver Dollar named after?",
          es: "¿Por quién lleva el nombre el Morgan Silver Dollar?",
          de: "Nach wem ist der Morgan Silberdollar benannt?",
          nl: "Naar wie is de Morgan Silver Dollar vernoemd?"
        },
        options: [
          { en: "J.P. Morgan, the financier", es: "J.P. Morgan, el financiero", de: "J.P. Morgan, der Finanzier", nl: "J.P. Morgan, de financier" },
          { en: "George T. Morgan, the coin designer", es: "George T. Morgan, el diseñador de monedas", de: "George T. Morgan, der Münzdesigner", nl: "George T. Morgan, de muntontwerper" },
          { en: "Morgan City, where it was first minted", es: "Morgan City, donde fue acuñada por primera vez", de: "Morgan City, wo sie zuerst geprägt wurde", nl: "Morgan City, waar het voor het eerst werd gemunt" },
          { en: "Henry Morgan, a mint director", es: "Henry Morgan, un director de casa de moneda", de: "Henry Morgan, ein Münzdirektor", nl: "Henry Morgan, een muntdirecteur" }
        ],
        correct: 1,
        explanation: {
          en: "The Morgan Silver Dollar is named after its designer, George T. Morgan, who created the design in 1878. The coin features Liberty on the obverse and an eagle on the reverse, and was minted from 1878 to 1921.",
          es: "El Morgan Silver Dollar lleva el nombre de su diseñador, George T. Morgan, quien creó el diseño en 1878. La moneda presenta a la Libertad en el anverso y un águila en el reverso, y fue acuñada de 1878 a 1921.",
          de: "Der Morgan Silberdollar ist nach seinem Designer George T. Morgan benannt, der das Design 1878 schuf. Die Münze zeigt Liberty auf der Vorderseite und einen Adler auf der Rückseite und wurde von 1878 bis 1921 geprägt.",
          nl: "De Morgan Silver Dollar is vernoemd naar zijn ontwerper, George T. Morgan, die het ontwerp in 1878 creëerde. De munt toont Liberty op de voorzijde en een adelaar op de achterzijde, en werd gemunt van 1878 tot 1921."
        }
      },
      {
        question: {
          en: "What is a 'key date' in coin collecting?",
          es: "¿Qué es una 'fecha clave' en la colección de monedas?",
          de: "Was ist ein 'Schlüsseldatum' beim Münzsammeln?",
          nl: "Wat is een 'sleuteldatum' in het verzamelen van munten?"
        },
        options: [
          { en: "The date a coin series began", es: "La fecha en que comenzó una serie de monedas", de: "Das Datum, an dem eine Münzserie begann", nl: "De datum waarop een muntserie begon" },
          { en: "A date that's particularly scarce and valuable", es: "Una fecha que es particularmente escasa y valiosa", de: "Ein Datum, das besonders selten und wertvoll ist", nl: "Een datum die bijzonder schaars en waardevol is" },
          { en: "The most common date in a series", es: "La fecha más común en una serie", de: "Das häufigste Datum in einer Serie", nl: "De meest voorkomende datum in een serie" },
          { en: "The last year of production", es: "El último año de producción", de: "Das letzte Produktionsjahr", nl: "Het laatste productiejaar" }
        ],
        correct: 1,
        explanation: {
          en: "A key date is a coin from a particular year and mint that is significantly scarcer than others in the series, making it more valuable and sought after by collectors. These coins often have low mintages or high attrition rates.",
          es: "Una fecha clave es una moneda de un año y ceca particular que es significativamente más escasa que otras en la serie, haciéndola más valiosa y buscada por coleccionistas. Estas monedas a menudo tienen bajas acuñaciones o altas tasas de desgaste.",
          de: "Ein Schlüsseldatum ist eine Münze aus einem bestimmten Jahr und einer bestimmten Münzstätte, die deutlich seltener ist als andere in der Serie, was sie wertvoller und von Sammlern begehrter macht. Diese Münzen haben oft niedrige Prägezahlen oder hohe Verlustraten.",
          nl: "Een sleuteldatum is een munt van een bepaald jaar en muntfaciliteit die aanzienlijk schaarser is dan andere in de serie, waardoor het waardevoller en gewild is bij verzamelaars. Deze munten hebben vaak lage muntages of hoge slijtagepercentages."
        }
      },
      {
        question: {
          en: "What metal was primarily used in ancient Roman aurei?",
          es: "¿Qué metal se utilizó principalmente en los aurei romanos antiguos?",
          de: "Welches Metall wurde hauptsächlich in antiken römischen Aurei verwendet?",
          nl: "Welk metaal werd voornamelijk gebruikt in oude Romeinse aurei?"
        },
        options: [
          { en: "Silver", es: "Plata", de: "Silber", nl: "Zilver" },
          { en: "Bronze", es: "Bronce", de: "Bronze", nl: "Brons" },
          { en: "Gold", es: "Oro", de: "Gold", nl: "Goud" },
          { en: "Copper", es: "Cobre", de: "Kupfer", nl: "Koper" }
        ],
        correct: 2,
        explanation: {
          en: "Roman aurei were gold coins that served as the highest denomination in the Roman monetary system. They were typically made of nearly pure gold and are highly prized by collectors today for their historical significance and precious metal content.",
          es: "Los aurei romanos eran monedas de oro que servían como la denominación más alta en el sistema monetario romano. Típicamente estaban hechos de oro casi puro y son muy valorados por los coleccionistas hoy por su significado histórico y contenido de metal precioso.",
          de: "Römische Aurei waren Goldmünzen, die als höchste Stückelung im römischen Währungssystem dienten. Sie bestanden typischerweise aus nahezu reinem Gold und werden heute von Sammlern wegen ihrer historischen Bedeutung und ihres Edelmetallgehalts hoch geschätzt.",
          nl: "Romeinse aurei waren gouden munten die dienden als de hoogste denominatie in het Romeinse monetaire systeem. Ze waren typisch gemaakt van bijna zuiver goud en worden vandaag zeer gewaardeerd door verzamelaars vanwege hun historische betekenis en edelmetaalinhoud."
        }
      },
      {
        question: {
          en: "What does 'MS' stand for in coin grading?",
          es: "¿Qué significa 'MS' en la calificación de monedas?",
          de: "Wofür steht 'MS' in der Münzbewertung?",
          nl: "Waar staat 'MS' voor in muntbeoordeling?"
        },
        options: [
          { en: "Mint State", es: "Estado de Casa de Moneda", de: "Prägestätte-Zustand", nl: "Munthuisstaat" },
          { en: "Metal Silver", es: "Metal Plata", de: "Metall Silber", nl: "Metaal Zilver" },
          { en: "Moderately Scratched", es: "Moderadamente Rayado", de: "Mäßig zerkratzt", nl: "Matig Bekrast" },
          { en: "Mint Series", es: "Serie de Casa de Moneda", de: "Münzserie", nl: "Muntserie" }
        ],
        correct: 0,
        explanation: {
          en: "MS stands for 'Mint State,' which refers to coins that show no evidence of wear from circulation. MS coins are graded from MS-60 to MS-70, with MS-70 being perfect. These coins retain their original mint luster.",
          es: "'MS' significa 'Estado de Casa de Moneda,' que se refiere a monedas que no muestran evidencia de desgaste por circulación. Las monedas MS se califican de MS-60 a MS-70, con MS-70 siendo perfecto. Estas monedas conservan su brillo original de casa de moneda.",
          de: "'MS' steht für 'Prägestätte-Zustand,' was sich auf Münzen bezieht, die keine Anzeichen von Abnutzung durch Umlauf zeigen. MS-Münzen werden von MS-60 bis MS-70 bewertet, wobei MS-70 perfekt ist. Diese Münzen behalten ihren ursprünglichen Münzglanz.",
          nl: "'MS' staat voor 'Munthuisstaat,' wat verwijst naar munten die geen bewijs van slijtage door circulatie tonen. MS munten worden beoordeeld van MS-60 tot MS-70, waarbij MS-70 perfect is. Deze munten behouden hun originele muntglans."
        }
      },
      {
        question: {
          en: "What is the 1787 Brasher Doubloon significant for?",
          es: "¿Por qué es significativo el Doblón Brasher de 1787?",
          de: "Wofür ist die 1787 Brasher Dublone bedeutsam?",
          nl: "Waarvoor is de 1787 Brasher Doubloon significant?"
        },
        options: [
          { en: "First coin made in America", es: "Primera moneda hecha en América", de: "Erste in Amerika hergestellte Münze", nl: "Eerste munt gemaakt in Amerika" },
          { en: "First gold coin made by a private American goldsmith", es: "Primera moneda de oro hecha por un orfebre privado americano", de: "Erste Goldmünze eines privaten amerikanischen Goldschmieds", nl: "Eerste gouden munt gemaakt door een private Amerikaanse goudsmid" },
          { en: "Largest coin ever produced", es: "Moneda más grande jamás producida", de: "Größte jemals produzierte Münze", nl: "Grootste munt ooit geproduceerd" },
          { en: "First coin with the American eagle", es: "Primera moneda con el águila americana", de: "Erste Münze mit dem amerikanischen Adler", nl: "Eerste munt met de Amerikaanse adelaar" }
        ],
        correct: 1,
        explanation: {
          en: "The 1787 Brasher Doubloon is historically significant as the first gold coin made by a private American goldsmith, Ephraim Brasher. It predates the U.S. Mint and represents early American numismatic history, making it extremely valuable to collectors.",
          es: "El Doblón Brasher de 1787 es históricamente significativo como la primera moneda de oro hecha por un orfebre privado americano, Ephraim Brasher. Antecede a la Casa de Moneda de EE.UU. y representa la historia numismática americana temprana, haciéndola extremadamente valiosa para coleccionistas.",
          de: "Die 1787 Brasher Dublone ist historisch bedeutsam als erste Goldmünze eines privaten amerikanischen Goldschmieds, Ephraim Brasher. Sie stammt aus der Zeit vor der US-Münzstätte und repräsentiert die frühe amerikanische numismatische Geschichte, was sie für Sammler extrem wertvoll macht.",
          nl: "De 1787 Brasher Doubloon is historisch significant als de eerste gouden munt gemaakt door een private Amerikaanse goudsmid, Ephraim Brasher. Het dateert van vóór de Amerikaanse Munt en vertegenwoordigt vroege Amerikaanse numismatische geschiedenis, waardoor het extreem waardevol is voor verzamelaars."
        }
      },
      {
        question: {
          en: "What is 'clipping' in relation to historical coins?",
          es: "¿Qué es el 'recorte' en relación con monedas históricas?",
          de: "Was ist 'Beschneiden' in Bezug auf historische Münzen?",
          nl: "Wat is 'knippen' in relatie tot historische munten?"
        },
        options: [
          { en: "A minting error", es: "Un error de acuñación", de: "Ein Prägefehler", nl: "Een muntfout" },
          { en: "Illegal removal of precious metal from coin edges", es: "Remoción ilegal de metal precioso de los bordes de las monedas", de: "Illegale Entfernung von Edelmetall von Münzrändern", nl: "Illegale verwijdering van edel metaal van muntranden" },
          { en: "A cleaning technique", es: "Una técnica de limpieza", de: "Eine Reinigungstechnik", nl: "Een schoonmaaktechniek" },
          { en: "A storage method", es: "Un método de almacenamiento", de: "Eine Lagerungsmethode", nl: "Een opslagmethode" }
        ],
        correct: 1,
        explanation: {
          en: "Clipping was a historical practice of illegally shaving or cutting small amounts of precious metal from the edges of coins, reducing their weight while maintaining their face value. This led to the development of reeded (milled) edges to detect tampering.",
          es: "El recorte era una práctica histórica de raspar o cortar ilegalmente pequeñas cantidades de metal precioso de los bordes de las monedas, reduciendo su peso mientras mantenían su valor nominal. Esto llevó al desarrollo de bordes estriados (moldeados) para detectar manipulación.",
          de: "Beschneiden war eine historische Praxis des illegalen Abschabens oder Schneidens kleiner Mengen Edelmetall von Münzrändern, wodurch ihr Gewicht reduziert wurde, während ihr Nennwert beibehalten wurde. Dies führte zur Entwicklung von geriffelten Rändern zur Erkennung von Manipulationen.",
          nl: "Knippen was een historische praktijk van het illegaal afschrapen of snijden van kleine hoeveelheden edel metaal van muntranden, waardoor hun gewicht werd verminderd terwijl hun nominale waarde behouden bleef. Dit leidde tot de ontwikkeling van gekartelde randen om manipulatie te detecteren."
        }
      },
      {
        question: {
          en: "What is a 'type coin' in collecting?",
          es: "¿Qué es una 'moneda tipo' en la colección?",
          de: "Was ist eine 'Typmünze' beim Sammeln?",
          nl: "Wat is een 'typemunt' bij het verzamelen?"
        },
        options: [
          { en: "A coin representing a specific design type", es: "Una moneda que representa un tipo de diseño específico", de: "Eine Münze, die einen bestimmten Designtyp repräsentiert", nl: "Een munt die een specifiek ontwerp type vertegenwoordigt" },
          { en: "A coin made of typical metals", es: "Una moneda hecha de metales típicos", de: "Eine Münze aus typischen Metallen", nl: "Een munt gemaakt van typische metalen" },
          { en: "A counterfeit coin", es: "Una moneda falsificada", de: "Eine gefälschte Münze", nl: "Een vervalste munt" },
          { en: "A coin in typical condition", es: "Una moneda en condición típica", de: "Eine Münze in typischem Zustand", nl: "Een munt in typische conditie" }
        ],
        correct: 0,
        explanation: {
          en: "A type coin represents one example of a particular coin design or type, regardless of date or mint mark. Type collectors focus on obtaining one coin of each major design rather than collecting every date and mint mark variation.",
          es: "Una moneda tipo representa un ejemplo de un diseño o tipo particular de moneda, independientemente de la fecha o marca de ceca. Los coleccionistas de tipos se enfocan en obtener una moneda de cada diseño principal en lugar de coleccionar cada variación de fecha y marca de ceca.",
          de: "Eine Typmünze repräsentiert ein Beispiel eines bestimmten Münzdesigns oder -typs, unabhängig von Datum oder Münzzeichen. Typsammler konzentrieren sich darauf, eine Münze jedes Hauptdesigns zu erhalten, anstatt jede Datums- und Münzzeichenvariante zu sammeln.",
          nl: "Een typemunt vertegenwoordigt één voorbeeld van een bepaald muntontwerp of type, ongeacht datum of muntmerk. Typeverzamelaars richten zich op het verkrijgen van één munt van elk hoofdontwerp in plaats van het verzamelen van elke datum- en muntmerkvariatie."
        }
      },
      {
        question: {
          en: "What does 'bag marks' refer to in coin collecting?",
          es: "¿A qué se refiere 'marcas de bolsa' en la colección de monedas?",
          de: "Worauf bezieht sich 'Beutelmarkierungen' beim Münzsammeln?",
          nl: "Waar verwijst 'zakmarkeringen' naar in het verzamelen van munten?"
        },
        options: [
          { en: "Marks indicating the coin's value", es: "Marcas que indican el valor de la moneda", de: "Markierungen, die den Münzwert anzeigen", nl: "Markeringen die de waarde van de munt aangeven" },
          { en: "Small scratches from coins touching in mint bags", es: "Pequeños rasguños de monedas que se tocan en bolsas de casa de moneda", de: "Kleine Kratzer von Münzen, die sich in Münzbeuteln berühren", nl: "Kleine krassen van munten die elkaar raken in muntzakken" },
          { en: "Authentication marks", es: "Marcas de autenticación", de: "Authentifizierungsmarken", nl: "Authenticiteitsmarkeringen" },
          { en: "Designer signatures", es: "Firmas del diseñador", de: "Designer-Signaturen", nl: "Ontwerperhandtekeningen" }
        ],
        correct: 1,
        explanation: {
          en: "Bag marks are small scratches, nicks, or abrasions found on coins that occurred when newly minted coins were stored together in canvas bags at the mint. These contact marks are common on larger coins and can affect their grade.",
          es: "Las marcas de bolsa son pequeños rasguños, muescas o abrasiones encontradas en monedas que ocurrieron cuando las monedas recién acuñadas se almacenaron juntas en bolsas de lona en la casa de moneda. Estas marcas de contacto son comunes en monedas más grandes y pueden afectar su calificación.",
          de: "Beutelmarkierungen sind kleine Kratzer, Kerben oder Abschürfungen auf Münzen, die entstanden, als neu geprägte Münzen zusammen in Segeltuchbeuteln in der Münzstätte gelagert wurden. Diese Kontaktmarkierungen sind bei größeren Münzen häufig und können ihre Bewertung beeinflussen.",
          nl: "Zakmarkeringen zijn kleine krassen, inkepingen of schaafwonden gevonden op munten die ontstonden toen nieuw geslagen munten samen werden opgeslagen in canvaszakken bij de munt. Deze contactmarkeringen zijn gebruikelijk bij grotere munten en kunnen hun beoordeling beïnvloeden."
        }
      },
      {
        question: {
          en: "What is the difference between 'uncirculated' and 'circulated' coins?",
          es: "¿Cuál es la diferencia entre monedas 'no circuladas' y 'circuladas'?",
          de: "Was ist der Unterschied zwischen 'unzirkulierten' und 'zirkulierten' Münzen?",
          nl: "Wat is het verschil tussen 'niet-gecirculeerde' en 'gecirculeerde' munten?"
        },
        options: [
          { en: "Age of the coin", es: "Edad de la moneda", de: "Alter der Münze", nl: "Leeftijd van de munt" },
          { en: "Whether the coin has been used in commerce", es: "Si la moneda ha sido usada en comercio", de: "Ob die Münze im Handel verwendet wurde", nl: "Of de munt is gebruikt in de handel" },
          { en: "The metal composition", es: "La composición del metal", de: "Die Metallzusammensetzung", nl: "De metaalsamenstelling" },
          { en: "The mint where it was produced", es: "La casa de moneda donde fue producida", de: "Die Münzstätte, wo sie produziert wurde", nl: "De munt waar het werd geproduceerd" }
        ],
        correct: 1,
        explanation: {
          en: "Uncirculated coins have never been used in everyday commerce and retain their original mint luster, while circulated coins show wear from handling and use in transactions. This distinction is crucial for determining a coin's grade and value.",
          es: "Las monedas no circuladas nunca han sido usadas en el comercio cotidiano y conservan su brillo original de casa de moneda, mientras que las monedas circuladas muestran desgaste por manejo y uso en transacciones. Esta distinción es crucial para determinar la calificación y valor de una moneda.",
          de: "Unzirkulierte Münzen wurden nie im alltäglichen Handel verwendet und behalten ihren ursprünglichen Münzglanz, während zirkulierte Münzen Abnutzung durch Handhabung und Verwendung in Transaktionen zeigen. Diese Unterscheidung ist entscheidend für die Bestimmung der Bewertung und des Wertes einer Münze.",
          nl: "Niet-gecirculeerde munten zijn nooit gebruikt in de dagelijkse handel en behouden hun originele muntglans, terwijl gecirculeerde munten slijtage tonen van hantering en gebruik in transacties. Dit onderscheid is cruciaal voor het bepalen van de beoordeling en waarde van een munt."
        }
      },
      {
        question: {
          en: "What is a 'pattern coin' in numismatics?",
          es: "¿Qué es una 'moneda patrón' en numismática?",
          de: "Was ist eine 'Mustermünze' in der Numismatik?",
          nl: "Wat is een 'patroonmunt' in de numismatiek?"
        },
        options: [
          { en: "A coin with decorative patterns engraved on it", es: "Una moneda con patrones decorativos grabados", de: "Eine Münze mit eingravierten dekorativen Mustern", nl: "Een munt met decoratieve patronen erop gegraveerd" },
          { en: "A test or trial coin struck during the design process", es: "Una moneda de prueba acuñada durante el proceso de diseño", de: "Eine Test- oder Probemünze, die während des Designprozesses geprägt wurde", nl: "Een test- of proefmunt geslagen tijdens het ontwerpproces" },
          { en: "A coin that follows a standard weight pattern", es: "Una moneda que sigue un patrón de peso estándar", de: "Eine Münze, die einem Standardgewichtsmuster folgt", nl: "Een munt die een standaard gewichtspatroon volgt" },
          { en: "A counterfeit coin made from a pattern", es: "Una moneda falsa hecha de un patrón", de: "Eine gefälschte Münze, die nach einem Muster hergestellt wurde", nl: "Een vervalste munt gemaakt van een patroon" }
        ],
        correct: 1,
        explanation: {
          en: "A pattern coin is a test or trial piece struck during the coin design process, often before final approval for mass production. These experimental coins are highly sought after by collectors due to their rarity and historical significance in the minting process.",
          es: "Una moneda patrón es una pieza de prueba acuñada durante el proceso de diseño de monedas, a menudo antes de la aprobación final para producción masiva. Estas monedas experimentales son muy buscadas por coleccionistas debido a su rareza y significado histórico en el proceso de acuñación.",
          de: "Eine Mustermünze ist ein Test- oder Probestück, das während des Münzentwurfsprozesses geprägt wird, oft vor der endgültigen Genehmigung für die Massenproduktion. Diese experimentellen Münzen sind bei Sammlern sehr begehrt aufgrund ihrer Seltenheit und historischen Bedeutung im Prägeprozess.",
          nl: "Een patroonmunt is een test- of proefstuk geslagen tijdens het muntontwerpproces, vaak voor de definitieve goedkeuring voor massaproductie. Deze experimentele munten zijn zeer gewild bij verzamelaars vanwege hun zeldzaamheid en historische betekenis in het muntproces."
        }      },
      {
        question: {
          en: "What is the most valuable currency per unit?",
          es: "What is the most valuable currency per unit?",
          de: "What is the most valuable currency per unit?",
          nl: "What is the most valuable currency per unit?"
        },
        options: [
          { en: "Kuwaiti Dinar", es: "Kuwaiti Dinar", de: "Kuwaiti Dinar", nl: "Kuwaiti Dinar" },
          { en: "US Dollar", es: "US Dollar", de: "US Dollar", nl: "US Dollar" },
          { en: "Euro", es: "Euro", de: "Euro", nl: "Euro" },
          { en: "British Pound", es: "British Pound", de: "British Pound", nl: "British Pound" }
        ],
        correct: 0,
        explanation: {
          en: "The Kuwaiti Dinar (KWD) is the highest-valued currency unit in the world.",
          es: "The Kuwaiti Dinar (KWD) is the highest-valued currency unit in the world.",
          de: "The Kuwaiti Dinar (KWD) is the highest-valued currency unit in the world.",
          nl: "The Kuwaiti Dinar (KWD) is the highest-valued currency unit in the world."
        }      },
      {
        question: {
          en: "What is the Bahraini Dinar?",
          es: "What is the Bahraini Dinar?",
          de: "What is the Bahraini Dinar?",
          nl: "What is the Bahraini Dinar?"
        },
        options: [
          { en: "Second most valuable currency", es: "Second most valuable currency", de: "Second most valuable currency", nl: "Second most valuable currency" },
          { en: "Least valuable currency", es: "Least valuable currency", de: "Least valuable currency", nl: "Least valuable currency" },
          { en: "Historical currency", es: "Historical currency", de: "Historical currency", nl: "Historical currency" },
          { en: "Cryptocurrency", es: "Cryptocurrency", de: "Cryptocurrency", nl: "Cryptocurrency" }
        ],
        correct: 0,
        explanation: {
          en: "The Bahraini Dinar (BHD) is the second highest-valued currency per unit globally.",
          es: "The Bahraini Dinar (BHD) is the second highest-valued currency per unit globally.",
          de: "The Bahraini Dinar (BHD) is the second highest-valued currency per unit globally.",
          nl: "The Bahraini Dinar (BHD) is the second highest-valued currency per unit globally."
        }      },
      {
        question: {
          en: "What is the Omani Rial?",
          es: "What is the Omani Rial?",
          de: "What is the Omani Rial?",
          nl: "What is the Omani Rial?"
        },
        options: [
          { en: "Third most valuable currency", es: "Third most valuable currency", de: "Third most valuable currency", nl: "Third most valuable currency" },
          { en: "Historical currency", es: "Historical currency", de: "Historical currency", nl: "Historical currency" },
          { en: "Least valuable", es: "Least valuable", de: "Least valuable", nl: "Least valuable" },
          { en: "Asian currency", es: "Asian currency", de: "Asian currency", nl: "Asian currency" }
        ],
        correct: 0,
        explanation: {
          en: "The Omani Rial (OMR) is one of the world's highest-valued currencies.",
          es: "The Omani Rial (OMR) is one of the world's highest-valued currencies.",
          de: "The Omani Rial (OMR) is one of the world's highest-valued currencies.",
          nl: "The Omani Rial (OMR) is one of the world's highest-valued currencies."
        }      },
      {
        question: {
          en: "What is the Jordanian Dinar?",
          es: "What is the Jordanian Dinar?",
          de: "What is the Jordanian Dinar?",
          nl: "What is the Jordanian Dinar?"
        },
        options: [
          { en: "High-value Middle Eastern currency", es: "High-value Middle Eastern currency", de: "High-value Middle Eastern currency", nl: "High-value Middle Eastern currency" },
          { en: "European currency", es: "European currency", de: "European currency", nl: "European currency" },
          { en: "Cryptocurrency", es: "Cryptocurrency", de: "Cryptocurrency", nl: "Cryptocurrency" },
          { en: "Obsolete currency", es: "Obsolete currency", de: "Obsolete currency", nl: "Obsolete currency" }
        ],
        correct: 0,
        explanation: {
          en: "The Jordanian Dinar (JOD) is among the world's strongest currencies due to its peg.",
          es: "The Jordanian Dinar (JOD) is among the world's strongest currencies due to its peg.",
          de: "The Jordanian Dinar (JOD) is among the world's strongest currencies due to its peg.",
          nl: "The Jordanian Dinar (JOD) is among the world's strongest currencies due to its peg."
        }      },
      {
        question: {
          en: "What is the Swiss Franc known for?",
          es: "What is the Swiss Franc known for?",
          de: "What is the Swiss Franc known for?",
          nl: "What is the Swiss Franc known for?"
        },
        options: [
          { en: "Stability and safe haven status", es: "Stability and safe haven status", de: "Stability and safe haven status", nl: "Stability and safe haven status" },
          { en: "High inflation", es: "High inflation", de: "High inflation", nl: "High inflation" },
          { en: "Cryptocurrency", es: "Cryptocurrency", de: "Cryptocurrency", nl: "Cryptocurrency" },
          { en: "Commodity backing", es: "Commodity backing", de: "Commodity backing", nl: "Commodity backing" }
        ],
        correct: 0,
        explanation: {
          en: "The Swiss Franc (CHF) is renowned for stability and as a safe-haven currency.",
          es: "The Swiss Franc (CHF) is renowned for stability and as a safe-haven currency.",
          de: "The Swiss Franc (CHF) is renowned for stability and as a safe-haven currency.",
          nl: "The Swiss Franc (CHF) is renowned for stability and as a safe-haven currency."
        }      },
      {
        question: {
          en: "What is the Gibraltar Pound?",
          es: "What is the Gibraltar Pound?",
          de: "What is the Gibraltar Pound?",
          nl: "What is the Gibraltar Pound?"
        },
        options: [
          { en: "Currency of Gibraltar at parity with GBP", es: "Currency of Gibraltar at parity with GBP", de: "Currency of Gibraltar at parity with GBP", nl: "Currency of Gibraltar at parity with GBP" },
          { en: "Ancient currency", es: "Ancient currency", de: "Ancient currency", nl: "Ancient currency" },
          { en: "African currency", es: "African currency", de: "African currency", nl: "African currency" },
          { en: "Cryptocurrency", es: "Cryptocurrency", de: "Cryptocurrency", nl: "Cryptocurrency" }
        ],
        correct: 0,
        explanation: {
          en: "The Gibraltar Pound (GIP) is issued by Gibraltar and maintains parity with British Pound.",
          es: "The Gibraltar Pound (GIP) is issued by Gibraltar and maintains parity with British Pound.",
          de: "The Gibraltar Pound (GIP) is issued by Gibraltar and maintains parity with British Pound.",
          nl: "The Gibraltar Pound (GIP) is issued by Gibraltar and maintains parity with British Pound."
        }      },
      {
        question: {
          en: "What is the Falkland Islands Pound?",
          es: "What is the Falkland Islands Pound?",
          de: "What is the Falkland Islands Pound?",
          nl: "What is the Falkland Islands Pound?"
        },
        options: [
          { en: "Currency of Falklands at parity with GBP", es: "Currency of Falklands at parity with GBP", de: "Currency of Falklands at parity with GBP", nl: "Currency of Falklands at parity with GBP" },
          { en: "Historical currency", es: "Historical currency", de: "Historical currency", nl: "Historical currency" },
          { en: "South American currency", es: "South American currency", de: "South American currency", nl: "South American currency" },
          { en: "Cryptocurrency", es: "Cryptocurrency", de: "Cryptocurrency", nl: "Cryptocurrency" }
        ],
        correct: 0,
        explanation: {
          en: "The Falkland Islands Pound (FKP) is pegged to British Pound at 1:1 ratio.",
          es: "The Falkland Islands Pound (FKP) is pegged to British Pound at 1:1 ratio.",
          de: "The Falkland Islands Pound (FKP) is pegged to British Pound at 1:1 ratio.",
          nl: "The Falkland Islands Pound (FKP) is pegged to British Pound at 1:1 ratio."
        }      },
      {
        question: {
          en: "What is the Cayman Islands Dollar?",
          es: "What is the Cayman Islands Dollar?",
          de: "What is the Cayman Islands Dollar?",
          nl: "What is the Cayman Islands Dollar?"
        },
        options: [
          { en: "High-value Caribbean currency", es: "High-value Caribbean currency", de: "High-value Caribbean currency", nl: "High-value Caribbean currency" },
          { en: "Lowest value currency", es: "Lowest value currency", de: "Lowest value currency", nl: "Lowest value currency" },
          { en: "European currency", es: "European currency", de: "European currency", nl: "European currency" },
          { en: "Cryptocurrency", es: "Cryptocurrency", de: "Cryptocurrency", nl: "Cryptocurrency" }
        ],
        correct: 0,
        explanation: {
          en: "The Cayman Islands Dollar (KYD) is one of the highest-valued currencies in the Americas.",
          es: "The Cayman Islands Dollar (KYD) is one of the highest-valued currencies in the Americas.",
          de: "The Cayman Islands Dollar (KYD) is one of the highest-valued currencies in the Americas.",
          nl: "The Cayman Islands Dollar (KYD) is one of the highest-valued currencies in the Americas."
        }      },
      {
        question: {
          en: "What is the Saint Helena Pound?",
          es: "What is the Saint Helena Pound?",
          de: "What is the Saint Helena Pound?",
          nl: "What is the Saint Helena Pound?"
        },
        options: [
          { en: "Remote island currency pegged to GBP", es: "Remote island currency pegged to GBP", de: "Remote island currency pegged to GBP", nl: "Remote island currency pegged to GBP" },
          { en: "African mainland currency", es: "African mainland currency", de: "African mainland currency", nl: "African mainland currency" },
          { en: "Historical currency", es: "Historical currency", de: "Historical currency", nl: "Historical currency" },
          { en: "Cryptocurrency", es: "Cryptocurrency", de: "Cryptocurrency", nl: "Cryptocurrency" }
        ],
        correct: 0,
        explanation: {
          en: "Saint Helena Pound (SHP) is used on Saint Helena island and pegged to British Pound.",
          es: "Saint Helena Pound (SHP) is used on Saint Helena island and pegged to British Pound.",
          de: "Saint Helena Pound (SHP) is used on Saint Helena island and pegged to British Pound.",
          nl: "Saint Helena Pound (SHP) is used on Saint Helena island and pegged to British Pound."
        }      },
      {
        question: {
          en: "What is the Brunei Dollar?",
          es: "What is the Brunei Dollar?",
          de: "What is the Brunei Dollar?",
          nl: "What is the Brunei Dollar?"
        },
        options: [
          { en: "Southeast Asian currency", es: "Southeast Asian currency", de: "Southeast Asian currency", nl: "Southeast Asian currency" },
          { en: "Middle Eastern currency", es: "Middle Eastern currency", de: "Middle Eastern currency", nl: "Middle Eastern currency" },
          { en: "Cryptocurrency", es: "Cryptocurrency", de: "Cryptocurrency", nl: "Cryptocurrency" },
          { en: "Historical currency", es: "Historical currency", de: "Historical currency", nl: "Historical currency" }
        ],
        correct: 0,
        explanation: {
          en: "The Brunei Dollar (BND) is interchangeable with Singapore Dollar at 1:1 ratio.",
          es: "The Brunei Dollar (BND) is interchangeable with Singapore Dollar at 1:1 ratio.",
          de: "The Brunei Dollar (BND) is interchangeable with Singapore Dollar at 1:1 ratio.",
          nl: "The Brunei Dollar (BND) is interchangeable with Singapore Dollar at 1:1 ratio."
        }      },
      {
        question: {
          en: "What is the Latvian Lat?",
          es: "What is the Latvian Lat?",
          de: "What is the Latvian Lat?",
          nl: "What is the Latvian Lat?"
        },
        options: [
          { en: "Former currency before Euro", es: "Former currency before Euro", de: "Former currency before Euro", nl: "Former currency before Euro" },
          { en: "Current currency", es: "Current currency", de: "Current currency", nl: "Current currency" },
          { en: "Cryptocurrency", es: "Cryptocurrency", de: "Cryptocurrency", nl: "Cryptocurrency" },
          { en: "Middle Eastern currency", es: "Middle Eastern currency", de: "Middle Eastern currency", nl: "Middle Eastern currency" }
        ],
        correct: 0,
        explanation: {
          en: "The Latvian Lat (LVL) was Latvia's currency 1993-2014 before adopting Euro.",
          es: "The Latvian Lat (LVL) was Latvia's currency 1993-2014 before adopting Euro.",
          de: "The Latvian Lat (LVL) was Latvia's currency 1993-2014 before adopting Euro.",
          nl: "The Latvian Lat (LVL) was Latvia's currency 1993-2014 before adopting Euro."
        }      },
      {
        question: {
          en: "What is the Azerbaijani Manat?",
          es: "What is the Azerbaijani Manat?",
          de: "What is the Azerbaijani Manat?",
          nl: "What is the Azerbaijani Manat?"
        },
        options: [
          { en: "Currency of Azerbaijan", es: "Currency of Azerbaijan", de: "Currency of Azerbaijan", nl: "Currency of Azerbaijan" },
          { en: "Historical currency", es: "Historical currency", de: "Historical currency", nl: "Historical currency" },
          { en: "European currency", es: "European currency", de: "European currency", nl: "European currency" },
          { en: "Cryptocurrency", es: "Cryptocurrency", de: "Cryptocurrency", nl: "Cryptocurrency" }
        ],
        correct: 0,
        explanation: {
          en: "The Azerbaijani Manat (AZN) is the currency of Azerbaijan, introduced in 1992.",
          es: "The Azerbaijani Manat (AZN) is the currency of Azerbaijan, introduced in 1992.",
          de: "The Azerbaijani Manat (AZN) is the currency of Azerbaijan, introduced in 1992.",
          nl: "The Azerbaijani Manat (AZN) is the currency of Azerbaijan, introduced in 1992."
        }      },
      {
        question: {
          en: "What is the Tongan Pa'anga?",
          es: "What is the Tongan Pa'anga?",
          de: "What is the Tongan Pa'anga?",
          nl: "What is the Tongan Pa'anga?"
        },
        options: [
          { en: "Pacific island currency", es: "Pacific island currency", de: "Pacific island currency", nl: "Pacific island currency" },
          { en: "African currency", es: "African currency", de: "African currency", nl: "African currency" },
          { en: "Cryptocurrency", es: "Cryptocurrency", de: "Cryptocurrency", nl: "Cryptocurrency" },
          { en: "Obsolete currency", es: "Obsolete currency", de: "Obsolete currency", nl: "Obsolete currency" }
        ],
        correct: 0,
        explanation: {
          en: "The Tongan Pa'anga (TOP) is the currency of the Kingdom of Tonga in the Pacific.",
          es: "The Tongan Pa'anga (TOP) is the currency of the Kingdom of Tonga in the Pacific.",
          de: "The Tongan Pa'anga (TOP) is the currency of the Kingdom of Tonga in the Pacific.",
          nl: "The Tongan Pa'anga (TOP) is the currency of the Kingdom of Tonga in the Pacific."
        }      },
      {
        question: {
          en: "What is the Libyan Dinar?",
          es: "What is the Libyan Dinar?",
          de: "What is the Libyan Dinar?",
          nl: "What is the Libyan Dinar?"
        },
        options: [
          { en: "North African currency", es: "North African currency", de: "North African currency", nl: "North African currency" },
          { en: "Middle Eastern currency", es: "Middle Eastern currency", de: "Middle Eastern currency", nl: "Middle Eastern currency" },
          { en: "Cryptocurrency", es: "Cryptocurrency", de: "Cryptocurrency", nl: "Cryptocurrency" },
          { en: "European currency", es: "European currency", de: "European currency", nl: "European currency" }
        ],
        correct: 0,
        explanation: {
          en: "The Libyan Dinar (LYD) is Libya's currency, one of Africa's stronger currencies.",
          es: "The Libyan Dinar (LYD) is Libya's currency, one of Africa's stronger currencies.",
          de: "The Libyan Dinar (LYD) is Libya's currency, one of Africa's stronger currencies.",
          nl: "The Libyan Dinar (LYD) is Libya's currency, one of Africa's stronger currencies."
        }      },
      {
        question: {
          en: "What is the Barbados Dollar?",
          es: "What is the Barbados Dollar?",
          de: "What is the Barbados Dollar?",
          nl: "What is the Barbados Dollar?"
        },
        options: [
          { en: "Eastern Caribbean currency", es: "Eastern Caribbean currency", de: "Eastern Caribbean currency", nl: "Eastern Caribbean currency" },
          { en: "Asian currency", es: "Asian currency", de: "Asian currency", nl: "Asian currency" },
          { en: "European currency", es: "European currency", de: "European currency", nl: "European currency" },
          { en: "Cryptocurrency", es: "Cryptocurrency", de: "Cryptocurrency", nl: "Cryptocurrency" }
        ],
        correct: 0,
        explanation: {
          en: "The Barbados Dollar (BBD) is the currency of Barbados, pegged to USD at 2:1.",
          es: "The Barbados Dollar (BBD) is the currency of Barbados, pegged to USD at 2:1.",
          de: "The Barbados Dollar (BBD) is the currency of Barbados, pegged to USD at 2:1.",
          nl: "The Barbados Dollar (BBD) is the currency of Barbados, pegged to USD at 2:1."
        }      },
      {
        question: {
          en: "What is the Bermudian Dollar?",
          es: "What is the Bermudian Dollar?",
          de: "What is the Bermudian Dollar?",
          nl: "What is the Bermudian Dollar?"
        },
        options: [
          { en: "Atlantic island currency", es: "Atlantic island currency", de: "Atlantic island currency", nl: "Atlantic island currency" },
          { en: "Pacific currency", es: "Pacific currency", de: "Pacific currency", nl: "Pacific currency" },
          { en: "Cryptocurrency", es: "Cryptocurrency", de: "Cryptocurrency", nl: "Cryptocurrency" },
          { en: "Historical currency", es: "Historical currency", de: "Historical currency", nl: "Historical currency" }
        ],
        correct: 0,
        explanation: {
          en: "The Bermudian Dollar (BMD) is pegged to USD at 1:1 and used alongside it.",
          es: "The Bermudian Dollar (BMD) is pegged to USD at 1:1 and used alongside it.",
          de: "The Bermudian Dollar (BMD) is pegged to USD at 1:1 and used alongside it.",
          nl: "The Bermudian Dollar (BMD) is pegged to USD at 1:1 and used alongside it."
        }      },
      {
        question: {
          en: "What is the Aruban Florin?",
          es: "What is the Aruban Florin?",
          de: "What is the Aruban Florin?",
          nl: "What is the Aruban Florin?"
        },
        options: [
          { en: "Caribbean currency", es: "Caribbean currency", de: "Caribbean currency", nl: "Caribbean currency" },
          { en: "European currency", es: "European currency", de: "European currency", nl: "European currency" },
          { en: "Asian currency", es: "Asian currency", de: "Asian currency", nl: "Asian currency" },
          { en: "Cryptocurrency", es: "Cryptocurrency", de: "Cryptocurrency", nl: "Cryptocurrency" }
        ],
        correct: 0,
        explanation: {
          en: "The Aruban Florin (AWG) is the currency of Aruba, pegged to US Dollar.",
          es: "The Aruban Florin (AWG) is the currency of Aruba, pegged to US Dollar.",
          de: "The Aruban Florin (AWG) is the currency of Aruba, pegged to US Dollar.",
          nl: "The Aruban Florin (AWG) is the currency of Aruba, pegged to US Dollar."
        }      },
      {
        question: {
          en: "What is the Cuban Convertible Peso?",
          es: "What is the Cuban Convertible Peso?",
          de: "What is the Cuban Convertible Peso?",
          nl: "What is the Cuban Convertible Peso?"
        },
        options: [
          { en: "Former dual currency system currency", es: "Former dual currency system currency", de: "Former dual currency system currency", nl: "Former dual currency system currency" },
          { en: "Current only currency", es: "Current only currency", de: "Current only currency", nl: "Current only currency" },
          { en: "Cryptocurrency", es: "Cryptocurrency", de: "Cryptocurrency", nl: "Cryptocurrency" },
          { en: "Asian currency", es: "Asian currency", de: "Asian currency", nl: "Asian currency" }
        ],
        correct: 0,
        explanation: {
          en: "The Cuban Convertible Peso (CUC) was discontinued in 2021 as Cuba unified its currency.",
          es: "The Cuban Convertible Peso (CUC) was discontinued in 2021 as Cuba unified its currency.",
          de: "The Cuban Convertible Peso (CUC) was discontinued in 2021 as Cuba unified its currency.",
          nl: "The Cuban Convertible Peso (CUC) was discontinued in 2021 as Cuba unified its currency."
        }      },
      {
        question: {
          en: "What is the Seychellois Rupee?",
          es: "What is the Seychellois Rupee?",
          de: "What is the Seychellois Rupee?",
          nl: "What is the Seychellois Rupee?"
        },
        options: [
          { en: "Indian Ocean island currency", es: "Indian Ocean island currency", de: "Indian Ocean island currency", nl: "Indian Ocean island currency" },
          { en: "Asian mainland currency", es: "Asian mainland currency", de: "Asian mainland currency", nl: "Asian mainland currency" },
          { en: "Cryptocurrency", es: "Cryptocurrency", de: "Cryptocurrency", nl: "Cryptocurrency" },
          { en: "Historical currency", es: "Historical currency", de: "Historical currency", nl: "Historical currency" }
        ],
        correct: 0,
        explanation: {
          en: "The Seychellois Rupee (SCR) is the currency of Seychelles archipelago.",
          es: "The Seychellois Rupee (SCR) is the currency of Seychelles archipelago.",
          de: "The Seychellois Rupee (SCR) is the currency of Seychelles archipelago.",
          nl: "The Seychellois Rupee (SCR) is the currency of Seychelles archipelago."
        }      },
      {
        question: {
          en: "What is the Samoan Tala?",
          es: "What is the Samoan Tala?",
          de: "What is the Samoan Tala?",
          nl: "What is the Samoan Tala?"
        },
        options: [
          { en: "Pacific island currency", es: "Pacific island currency", de: "Pacific island currency", nl: "Pacific island currency" },
          { en: "African currency", es: "African currency", de: "African currency", nl: "African currency" },
          { en: "European currency", es: "European currency", de: "European currency", nl: "European currency" },
          { en: "Cryptocurrency", es: "Cryptocurrency", de: "Cryptocurrency", nl: "Cryptocurrency" }
        ],
        correct: 0,
        explanation: {
          en: "The Samoan Tala (WST) is the currency of Samoa, formerly Western Samoa Dollar.",
          es: "The Samoan Tala (WST) is the currency of Samoa, formerly Western Samoa Dollar.",
          de: "The Samoan Tala (WST) is the currency of Samoa, formerly Western Samoa Dollar.",
          nl: "The Samoan Tala (WST) is the currency of Samoa, formerly Western Samoa Dollar."
        }
      }
    ]
  };

  // Export for use in the quiz application
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level1;
  } else if (typeof window !== 'undefined') {
    window.level1 = level1;
  }
})();