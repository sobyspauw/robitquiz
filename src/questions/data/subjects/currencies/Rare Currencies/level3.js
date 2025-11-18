// Level 3: Currencies - Zeldzame valuta (Intermediate)
(function() {
  const level3 = {
    difficulty: "Intermediate",
    name: {
      en: "Rare Currencies - Intermediate Level",
      es: "Monedas Raras - Nivel Intermedio",
      de: "Seltene Währungen - Mittelstufe",
      nl: "Zeldzame Valuta - Intermediate Niveau"
    },
    questions: [
      {
        question: {
          en: "What does the PCGS Population Report track?",
          es: "¿Qué rastrea el Informe de Población de PCGS?",
          de: "Was verfolgt der PCGS Population Report?",
          nl: "Wat houdt het PCGS Population Report bij?"
        },
        options: [
          { en: "Number of coins graded at each level", es: "Número de monedas clasificadas en cada nivel", de: "Anzahl der Münzen, die auf jeder Stufe bewertet wurden", nl: "Aantal munten beoordeeld op elk niveau" },
          { en: "Market prices of rare coins", es: "Precios de mercado de monedas raras", de: "Marktpreise seltener Münzen", nl: "Marktprijzen van zeldzame munten" },
          { en: "Historical mint production", es: "Producción histórica de la casa de moneda", de: "Historische Münzproduktion", nl: "Historische muntproductie" },
          { en: "Auction sale results", es: "Resultados de ventas en subasta", de: "Auktionsverkaufsergebnisse", nl: "Veilingresultaten" }
        ],
        correct: 0,
        explanation: {
          en: "The PCGS Population Report is a comprehensive database that tracks the number of coins graded at each grade level by PCGS. This information helps collectors understand rarity within grades and market availability, making it a crucial tool for determining relative scarcity and value.",
          es: "El Informe de Población de PCGS es una base de datos integral que rastrea el número de monedas clasificadas en cada nivel de grado por PCGS. Esta información ayuda a los coleccionistas a entender la rareza dentro de los grados y la disponibilidad del mercado, convirtiéndolo en una herramienta crucial para determinar la escasez relativa y el valor.",
          de: "Der PCGS Population Report ist eine umfassende Datenbank, die die Anzahl der von PCGS auf jeder Bewertungsstufe bewerteten Münzen verfolgt. Diese Informationen helfen Sammlern, die Seltenheit innerhalb der Grade und die Marktverfügbarkeit zu verstehen, was es zu einem entscheidenden Werkzeug zur Bestimmung relativer Knappheit und Werts macht.",
          nl: "Het PCGS Population Report is een uitgebreide database die het aantal munten bijhoudt dat op elk beoordelingsniveau door PCGS is beoordeeld. Deze informatie helpt verzamelaars de zeldzaamheid binnen graden en marktbeschikbaarheid te begrijpen, waardoor het een cruciaal hulpmiddel is voor het bepalen van relatieve schaarste en waarde."
        }
      },
      {
        question: {
          en: "What is a 'variety' in numismatics?",
          es: "¿Qué es una 'variedad' en numismática?",
          de: "Was ist eine 'Variante' in der Numismatik?",
          nl: "Wat is een 'variëteit' in de numismatiek?"
        },
        options: [
          { en: "A coin with different metal composition", es: "Una moneda con diferente composición metálica", de: "Eine Münze mit unterschiedlicher Metallzusammensetzung", nl: "Een munt met verschillende metaalsamenstelling" },
          { en: "A coin with distinct design differences from the standard issue", es: "Una moneda con diferencias de diseño distintas de la emisión estándar", de: "Eine Münze mit deutlichen Designunterschieden zur Standardausgabe", nl: "Een munt met verschillende ontwerpverschillen van de standaarduitgifte" },
          { en: "A coin from a different mint", es: "Una moneda de una casa de moneda diferente", de: "Eine Münze aus einer anderen Münzstätte", nl: "Een munt van een andere munt" },
          { en: "A coin with damage", es: "Una moneda con daños", de: "Eine beschädigte Münze", nl: "Een beschadigde munt" }
        ],
        correct: 1,
        explanation: {
          en: "A variety refers to a coin that has distinct design differences from the standard issue, often due to die modifications, engraving differences, or intentional design changes. Famous varieties include the 1916/1915 Mercury dime overdate and the 1942/1 Mercury dime overdate.",
          es: "Una variedad se refiere a una moneda que tiene diferencias de diseño distintas de la emisión estándar, a menudo debido a modificaciones del troquel, diferencias de grabado o cambios de diseño intencionales. Las variedades famosas incluyen la sobrefecha Mercury dime 1916/1915 y la sobrefecha Mercury dime 1942/1.",
          de: "Eine Variante bezieht sich auf eine Münze, die deutliche Designunterschiede zur Standardausgabe aufweist, oft aufgrund von Stempelmodifikationen, Gravurunterschieden oder absichtlichen Designänderungen. Berühmte Varianten sind der 1916/1915 Mercury Dime Überprägung und der 1942/1 Mercury Dime Überprägung.",
          nl: "Een variëteit verwijst naar een munt die verschillende ontwerpverschillen heeft van de standaarduitgifte, vaak vanwege stempelmodificaties, graveerverschillen of opzettelijke ontwerpveranderingen. Beroemde variëteiten zijn de 1916/1915 Mercury dime overdate en de 1942/1 Mercury dime overdate."
        }
      },
      {
        question: {
          en: "What is the purpose of a PCGS Registry Set?",
          es: "¿Cuál es el propósito de un Conjunto de Registro PCGS?",
          de: "Was ist der Zweck eines PCGS Registry Sets?",
          nl: "Wat is het doel van een PCGS Registry Set?"
        },
        options: [
          { en: "To track mint production numbers", es: "Para rastrear los números de producción de la casa de moneda", de: "Um Münzproduktionszahlen zu verfolgen", nl: "Om muntproductienummers bij te houden" },
          { en: "To compete in building the finest graded sets", es: "Para competir en la construcción de los mejores conjuntos clasificados", de: "Um beim Aufbau der besten bewerteten Sets zu konkurrieren", nl: "Om te concurreren in het bouwen van de beste beoordeelde sets" },
          { en: "To authenticate rare coins", es: "Para autenticar monedas raras", de: "Um seltene Münzen zu authentifizieren", nl: "Om zeldzame munten te authenticeren" },
          { en: "To determine market prices", es: "Para determinar precios de mercado", de: "Um Marktpreise zu bestimmen", nl: "Om marktprijzen te bepalen" }
        ],
        correct: 1,
        explanation: {
          en: "PCGS Registry Sets allow collectors to compete in building the finest graded sets of coins in specific categories. Participants register their graded coins and compete for rankings based on the overall grade points of their sets. This has significantly influenced the modern rare coin market by creating demand for high-grade examples.",
          es: "Los Conjuntos de Registro PCGS permiten a los coleccionistas competir en la construcción de los mejores conjuntos clasificados de monedas en categorías específicas. Los participantes registran sus monedas clasificadas y compiten por clasificaciones basadas en los puntos de grado generales de sus conjuntos. Esto ha influido significativamente en el mercado moderno de monedas raras al crear demanda por ejemplos de alto grado.",
          de: "PCGS Registry Sets ermöglichen es Sammlern, beim Aufbau der besten bewerteten Münzsets in bestimmten Kategorien zu konkurrieren. Teilnehmer registrieren ihre bewerteten Münzen und konkurrieren um Rankings basierend auf den Gesamtgradeunkten ihrer Sets. Dies hat den modernen Markt für seltene Münzen erheblich beeinflusst, indem es Nachfrage nach hochgradigen Exemplaren geschaffen hat.",
          nl: "PCGS Registry Sets stellen verzamelaars in staat om te concurreren in het bouwen van de beste beoordeelde sets munten in specifieke categorieën. Deelnemers registreren hun beoordeelde munten en concurreren om rankings gebaseerd op de totale gradepunten van hun sets. Dit heeft de moderne markt voor zeldzame munten aanzienlijk beïnvloed door vraag naar hoogwaardige exemplaren te creëren."
        }
      },
      {
        question: {
          en: "What market trend has significantly affected coin collecting since 2000?",
          es: "¿Qué tendencia del mercado ha afectado significativamente la colección de monedas desde 2000?",
          de: "Welcher Markttrend hat das Münzsammeln seit 2000 erheblich beeinflusst?",
          nl: "Welke markttrend heeft het verzamelen van munten sinds 2000 aanzienlijk beïnvloed?"
        },
        options: [
          { en: "Decrease in silver prices", es: "Disminución en los precios de la plata", de: "Rückgang der Silberpreise", nl: "Daling van zilverprijzen" },
          { en: "Rise of third-party grading services", es: "Auge de los servicios de clasificación de terceros", de: "Aufstieg der Drittanbieter-Bewertungsdienste", nl: "Opkomst van derde partij beoordelingsdiensten" },
          { en: "Elimination of gold standard", es: "Eliminación del patrón oro", de: "Abschaffung des Goldstandards", nl: "Afschaffing van de goudstandaard" },
          { en: "Government coin buyback programs", es: "Programas gubernamentales de recompra de monedas", de: "Staatliche Münzrückkaufprogramme", nl: "Overheids munt terugkoopprogramma's" }
        ],
        correct: 1,
        explanation: {
          en: "The rise of third-party grading services like PCGS and NGC since the 1980s, but especially their mainstream adoption after 2000, has revolutionized coin collecting. These services provide standardized grading, authentication, and encapsulation, creating market confidence and enabling more precise valuation of coins.",
          es: "El auge de los servicios de clasificación de terceros como PCGS y NGC desde los años 1980, pero especialmente su adopción generalizada después de 2000, ha revolucionado la colección de monedas. Estos servicios proporcionan clasificación estandarizada, autenticación y encapsulación, creando confianza en el mercado y permitiendo una valoración más precisa de las monedas.",
          de: "Der Aufstieg der Drittanbieter-Bewertungsdienste wie PCGS und NGC seit den 1980er Jahren, aber insbesondere ihre Mainstream-Adoption nach 2000, hat das Münzsammeln revolutioniert. Diese Dienste bieten standardisierte Bewertung, Authentifizierung und Verkapselung, schaffen Marktvertrauen und ermöglichen eine genauere Bewertung von Münzen.",
          nl: "De opkomst van derde partij beoordelingsdiensten zoals PCGS en NGC sinds de jaren 1980, maar vooral hun mainstream adoptie na 2000, heeft het verzamelen van munten gerevolutioneerd. Deze diensten bieden gestandaardiseerde beoordeling, authenticatie en inkapseling, creëren marktvertrouwen en maken nauwkeurigere waardering van munten mogelijk."
        }
      },
      {
        question: {
          en: "What does 'PQ' mean in coin collecting terminology?",
          es: "¿Qué significa 'PQ' en la terminología de colección de monedas?",
          de: "Was bedeutet 'PQ' in der Münzsammler-Terminologie?",
          nl: "Wat betekent 'PQ' in muntenverzamelterminologie?"
        },
        options: [
          { en: "Premium Quality - exceptional for the grade", es: "Calidad Premium - excepcional para el grado", de: "Premium-Qualität - außergewöhnlich für den Grad", nl: "Premium Kwaliteit - uitzonderlijk voor de graad" },
          { en: "Poor Quality - below grade standards", es: "Calidad Pobre - por debajo de los estándares de grado", de: "Schlechte Qualität - unter Gradstandards", nl: "Slechte Kwaliteit - onder graadstandaarden" },
          { en: "Proof Quality - mirror-like finish", es: "Calidad Proof - acabado tipo espejo", de: "Proof-Qualität - spiegelähnlicher Abschluss", nl: "Proof Kwaliteit - spiegelachtige afwerking" },
          { en: "Production Quantity - mintage information", es: "Cantidad de Producción - información de acuñación", de: "Produktionsmenge - Prägeinformationen", nl: "Productie Hoeveelheid - muntslag informatie" }
        ],
        correct: 0,
        explanation: {
          en: "PQ stands for Premium Quality, indicating a coin that is exceptional for its assigned grade. These coins typically have superior eye appeal, minimal marks, and outstanding characteristics that make them stand out among other coins of the same grade. PQ coins often command higher prices in the market.",
          es: "PQ significa Calidad Premium, indicando una moneda que es excepcional para su grado asignado. Estas monedas típicamente tienen atractivo visual superior, marcas mínimas y características destacadas que las hacen sobresalir entre otras monedas del mismo grado. Las monedas PQ a menudo tienen precios más altos en el mercado.",
          de: "PQ steht für Premium-Qualität und bezeichnet eine Münze, die für ihren zugewiesenen Grad außergewöhnlich ist. Diese Münzen haben typischerweise überlegene Augenfreude, minimale Spuren und herausragende Eigenschaften, die sie unter anderen Münzen desselben Grades hervorheben. PQ-Münzen erzielen oft höhere Preise auf dem Markt.",
          nl: "PQ staat voor Premium Kwaliteit, wat een munt aangeeft die uitzonderlijk is voor zijn toegewezen graad. Deze munten hebben doorgaans superieure visuele aantrekkingskracht, minimale sporen en uitstekende kenmerken die ze doen opvallen tussen andere munten van dezelfde graad. PQ munten behalen vaak hogere prijzen op de markt."
        }
      },
      {
        question: {
          en: "What is a 'population top' coin?",
          es: "¿Qué es una moneda 'population top'?",
          de: "Was ist eine 'Population Top' Münze?",
          nl: "Wat is een 'population top' munt?"
        },
        options: [
          { en: "The most common coin in a series", es: "La moneda más común en una serie", de: "Die häufigste Münze in einer Serie", nl: "De meest voorkomende munt in een serie" },
          { en: "A coin that ranks among the highest graded examples", es: "Una moneda que se clasifica entre los ejemplos de mayor grado", de: "Eine Münze, die zu den höchstbewerteten Exemplaren gehört", nl: "Een munt die behoort tot de hoogst beoordeelde exemplaren" },
          { en: "The first coin minted in a year", es: "La primera moneda acuñada en un año", de: "Die erste Münze, die in einem Jahr geprägt wurde", nl: "De eerste munt geslagen in een jaar" },
          { en: "A coin with the highest mintage", es: "Una moneda con la mayor acuñación", de: "Eine Münze mit der höchsten Auflage", nl: "Een munt met de hoogste oplage" }
        ],
        correct: 1,
        explanation: {
          en: "A population top coin is one that ranks among the highest graded examples in the population reports of grading services. These are often the finest known examples of a particular date and mint mark combination, making them extremely valuable and sought after by collectors pursuing registry sets.",
          es: "Una moneda population top es una que se clasifica entre los ejemplos de mayor grado en los informes de población de los servicios de clasificación. Estos son a menudo los ejemplos más finos conocidos de una combinación particular de fecha y marca de casa de moneda, haciéndolos extremadamente valiosos y buscados por coleccionistas que persiguen conjuntos de registro.",
          de: "Eine Population Top Münze ist eine, die zu den höchstbewerteten Exemplaren in den Populationsberichten der Bewertungsdienste gehört. Dies sind oft die besten bekannten Exemplare einer bestimmten Datums- und Münzzeichenkombination, was sie extrem wertvoll und von Sammlern, die Registry Sets verfolgen, begehrt macht.",
          nl: "Een population top munt is er een die behoort tot de hoogst beoordeelde exemplaren in de populatierapporten van beoordelingsdiensten. Dit zijn vaak de beste bekende exemplaren van een bepaalde datum en muntteken combinatie, waardoor ze extreem waardevol en gezocht zijn door verzamelaars die registry sets nastreven."
        }
      },
      {
        question: {
          en: "What does CAC approval indicate about a coin?",
          es: "¿Qué indica la aprobación CAC sobre una moneda?",
          de: "Was zeigt die CAC-Genehmigung über eine Münze an?",
          nl: "Wat geeft CAC goedkeuring aan over een munt?"
        },
        options: [
          { en: "The coin is counterfeit", es: "La moneda es falsa", de: "Die Münze ist gefälscht", nl: "De munt is vervalst" },
          { en: "The coin meets or exceeds grade standards", es: "La moneda cumple o supera los estándares de grado", de: "Die Münze erfüllt oder übertrifft Gradstandards", nl: "De munt voldoet aan of overtreft graadstandaarden" },
          { en: "The coin has been cleaned", es: "La moneda ha sido limpiada", de: "Die Münze wurde gereinigt", nl: "De munt is schoongemaakt" },
          { en: "The coin is damaged", es: "La moneda está dañada", de: "Die Münze ist beschädigt", nl: "De munt is beschadigd" }
        ],
        correct: 1,
        explanation: {
          en: "CAC (Coin and Currency Acceptance Corporation) approval indicates that a coin meets or exceeds the grading standards for its assigned grade. CAC serves as an additional quality control layer, with their green stickers signifying solid quality for the grade and gold stickers indicating premium quality that could potentially upgrade.",
          es: "La aprobación CAC (Corporación de Aceptación de Monedas y Divisas) indica que una moneda cumple o supera los estándares de clasificación para su grado asignado. CAC sirve como una capa adicional de control de calidad, con sus pegatinas verdes significando calidad sólida para el grado y pegatinas doradas indicando calidad premium que potencialmente podría actualizarse.",
          de: "Die CAC (Coin and Currency Acceptance Corporation) Genehmigung zeigt an, dass eine Münze die Bewertungsstandards für ihren zugewiesenen Grad erfüllt oder übertrifft. CAC dient als zusätzliche Qualitätskontrollschicht, wobei ihre grünen Aufkleber solide Qualität für den Grad und goldene Aufkleber Premium-Qualität anzeigen, die möglicherweise aufgewertet werden könnte.",
          nl: "CAC (Coin and Currency Acceptance Corporation) goedkeuring geeft aan dat een munt voldoet aan of de beoordelingsstandaarden voor zijn toegewezen graad overtreft. CAC dient als een extra kwaliteitscontrolelaag, waarbij hun groene stickers solide kwaliteit voor de graad betekenen en gouden stickers premium kwaliteit aangeven die mogelijk zou kunnen upgraden."
        }
      },
      {
        question: {
          en: "What is the significance of a coin's 'eye appeal'?",
          es: "¿Cuál es la importancia del 'atractivo visual' de una moneda?",
          de: "Was ist die Bedeutung der 'Augenfreude' einer Münze?",
          nl: "Wat is de betekenis van de 'visuele aantrekkingskracht' van een munt?"
        },
        options: [
          { en: "It determines the coin's metal content", es: "Determina el contenido metálico de la moneda", de: "Es bestimmt den Metallgehalt der Münze", nl: "Het bepaalt het metaalgehalte van de munt" },
          { en: "It affects the coin's overall attractiveness and market value", es: "Afecta el atractivo general de la moneda y el valor de mercado", de: "Es beeinflusst die Gesamtattraktivität und den Marktwert der Münze", nl: "Het beïnvloedt de algehele aantrekkelijkskracht en marktwaarde van de munt" },
          { en: "It indicates the coin's age", es: "Indica la edad de la moneda", de: "Es zeigt das Alter der Münze an", nl: "Het geeft de leeftijd van de munt aan" },
          { en: "It shows the mint of origin", es: "Muestra la casa de moneda de origen", de: "Es zeigt die Herkunftsmünzstätte", nl: "Het toont de munt van herkomst" }
        ],
        correct: 1,
        explanation: {
          en: "Eye appeal refers to the overall visual attractiveness of a coin, including factors like luster, toning, strike quality, and surface preservation. Two coins with the same technical grade can have vastly different market values based on their eye appeal. Coins with exceptional eye appeal often command significant premiums.",
          es: "El atractivo visual se refiere al atractivo visual general de una moneda, incluyendo factores como brillo, tono, calidad de acuñación y preservación de superficie. Dos monedas con el mismo grado técnico pueden tener valores de mercado vastamente diferentes basados en su atractivo visual. Las monedas con atractivo visual excepcional a menudo tienen primas significativas.",
          de: "Augenfreude bezieht sich auf die gesamte visuelle Attraktivität einer Münze, einschließlich Faktoren wie Glanz, Tönung, Prägequalität und Oberflächenerhaltung. Zwei Münzen mit demselben technischen Grad können aufgrund ihrer Augenfreude sehr unterschiedliche Marktwerte haben. Münzen mit außergewöhnlicher Augenfreude erzielen oft erhebliche Aufschläge.",
          nl: "Visuele aantrekkingskracht verwijst naar de algehele visuele aantrekkelijkheid van een munt, inclusief factoren zoals glans, toning, slagkwaliteit en oppervlaktebehoud. Twee munten met dezelfde technische graad kunnen sterk verschillende marktwaarden hebben gebaseerd op hun visuele aantrekkingskracht. Munten met uitzonderlijke visuele aantrekkingskracht behalen vaak aanzienlijke premiums."
        }
      },
      {
        question: {
          en: "What is a 'registry premium' in coin collecting?",
          es: "¿Qué es una 'prima de registro' en la colección de monedas?",
          de: "Was ist eine 'Registry-Prämie' beim Münzsammeln?",
          nl: "Wat is een 'registry premium' bij het verzamelen van munten?"
        },
        options: [
          { en: "Additional cost for coin registration", es: "Costo adicional por registro de monedas", de: "Zusätzliche Kosten für die Münzregistrierung", nl: "Extra kosten voor muntregistratie" },
          { en: "Higher prices paid for coins needed for competitive registry sets", es: "Precios más altos pagados por monedas necesarias para conjuntos de registro competitivos", de: "Höhere Preise für Münzen, die für wettbewerbsfähige Registry-Sets benötigt werden", nl: "Hogere prijzen betaald voor munten die nodig zijn voor competitieve registry sets" },
          { en: "Discount for bulk purchases", es: "Descuento por compras al por mayor", de: "Rabatt für Großeinkäufe", nl: "Korting voor bulk aankopen" },
          { en: "Government tax on rare coins", es: "Impuesto gubernamental sobre monedas raras", de: "Staatliche Steuer auf seltene Münzen", nl: "Overheidsbelasting op zeldzame munten" }
        ],
        correct: 1,
        explanation: {
          en: "A registry premium refers to the higher prices collectors are willing to pay for coins needed to complete or improve their competitive registry sets. This phenomenon has driven up prices for high-grade coins, especially those at the top of population reports, as collectors compete for ranking points.",
          es: "Una prima de registro se refiere a los precios más altos que los coleccionistas están dispuestos a pagar por monedas necesarias para completar o mejorar sus conjuntos de registro competitivos. Este fenómeno ha impulsado los precios de las monedas de alto grado, especialmente aquellas en la parte superior de los informes de población, mientras los coleccionistas compiten por puntos de clasificación.",
          de: "Eine Registry-Prämie bezieht sich auf die höheren Preise, die Sammler bereit sind für Münzen zu zahlen, die zur Vervollständigung oder Verbesserung ihrer wettbewerbsfähigen Registry-Sets benötigt werden. Dieses Phänomen hat die Preise für hochgradige Münzen angetrieben, besonders die an der Spitze der Populationsberichte, da Sammler um Ranking-Punkte konkurrieren.",
          nl: "Een registry premium verwijst naar de hogere prijzen die verzamelaars bereid zijn te betalen voor munten die nodig zijn om hun competitieve registry sets te voltooien of verbeteren. Dit fenomeen heeft prijzen voor hoogwaardige munten opgedreven, vooral die bovenaan de populatierapporten, terwijl verzamelaars concurreren om rankingpunten."
        }
      },
      {
        question: {
          en: "What does 'MS+' notation typically indicate?",
          es: "¿Qué indica típicamente la notación 'MS+'?",
          de: "Was zeigt die 'MS+' Notation typischerweise an?",
          nl: "Wat geeft 'MS+' notatie doorgaans aan?"
        },
        options: [
          { en: "Mint State with extra silver content", es: "Estado de Casa de Moneda con contenido extra de plata", de: "Prägefrisch mit extra Silbergehalt", nl: "Mint State met extra zilvergehalte" },
          { en: "Mint State quality that borders on the next higher grade", es: "Calidad de Estado de Casa de Moneda que bordea el siguiente grado más alto", de: "Prägefrisch-Qualität, die an den nächsthöheren Grad grenzt", nl: "Mint State kwaliteit die grenst aan de volgende hogere graad" },
          { en: "Mint State with additional authentication", es: "Estado de Casa de Moneda con autenticación adicional", de: "Prägefrisch mit zusätzlicher Authentifizierung", nl: "Mint State met extra authenticatie" },
          { en: "Mint State from a premium mint facility", es: "Estado de Casa de Moneda de una instalación de acuñación premium", de: "Prägefrisch aus einer Premium-Münzstätte", nl: "Mint State van een premium muntfaciliteit" }
        ],
        correct: 1,
        explanation: {
          en: "MS+ notation indicates a Mint State coin that exhibits quality at the high end of its assigned grade, approaching but not quite reaching the next grade level. For example, an MS64+ coin shows characteristics that are better than typical MS64 quality but not quite MS65 level.",
          es: "La notación MS+ indica una moneda en Estado de Casa de Moneda que exhibe calidad en el extremo alto de su grado asignado, acercándose pero no alcanzando completamente el siguiente nivel de grado. Por ejemplo, una moneda MS64+ muestra características que son mejores que la calidad típica MS64 pero no completamente nivel MS65.",
          de: "Die MS+ Notation zeigt eine Prägefrisch-Münze an, die Qualität am oberen Ende ihres zugewiesenen Grades zeigt, sich dem nächsten Gradlevel nähert, aber es nicht ganz erreicht. Zum Beispiel zeigt eine MS64+ Münze Eigenschaften, die besser als typische MS64-Qualität sind, aber nicht ganz MS65-Niveau.",
          nl: "MS+ notatie geeft een Mint State munt aan die kwaliteit toont aan het hoge eind van zijn toegewezen graad, naderend maar niet helemaal het volgende graadniveau bereikend. Bijvoorbeeld, een MS64+ munt toont kenmerken die beter zijn dan typische MS64 kwaliteit maar niet helemaal MS65 niveau."
        }
      },
      {
        question: {
          en: "What is the concept of 'conditional rarity' in coin collecting?",
          es: "¿Cuál es el concepto de 'rareza condicional' en la colección de monedas?",
          de: "Was ist das Konzept der 'bedingten Seltenheit' beim Münzsammeln?",
          nl: "Wat is het concept van 'voorwaardelijke zeldzaamheid' bij het verzamelen van munten?"
        },
        options: [
          { en: "Rarity based on storage conditions", es: "Rareza basada en condiciones de almacenamiento", de: "Seltenheit basierend auf Lagerbedingungen", nl: "Zeldzaamheid gebaseerd op opslagcondities" },
          { en: "Rarity that depends on specific grade levels", es: "Rareza que depende de niveles de grado específicos", de: "Seltenheit, die von spezifischen Gradstufen abhängt", nl: "Zeldzaamheid die afhangt van specifieke graadniveaus" },
          { en: "Rarity affected by market conditions", es: "Rareza afectada por condiciones del mercado", de: "Seltenheit, die von Marktbedingungen beeinflusst wird", nl: "Zeldzaamheid beïnvloed door marktomstandigheden" },
          { en: "Rarity due to conditional sales", es: "Rareza debido a ventas condicionales", de: "Seltenheit aufgrund bedingter Verkäufe", nl: "Zeldzaamheid vanwege voorwaardelijke verkopen" }
        ],
        correct: 1,
        explanation: {
          en: "Conditional rarity refers to how the rarity of a coin changes dramatically based on its grade or condition. A coin might be relatively common in lower grades but extremely rare in high grades. This concept is crucial for understanding why population reports are so important in modern collecting.",
          es: "La rareza condicional se refiere a cómo la rareza de una moneda cambia dramáticamente basada en su grado o condición. Una moneda podría ser relativamente común en grados más bajos pero extremadamente rara en grados altos. Este concepto es crucial para entender por qué los informes de población son tan importantes en la colección moderna.",
          de: "Bedingte Seltenheit bezieht sich darauf, wie sich die Seltenheit einer Münze dramatisch basierend auf ihrem Grad oder Zustand ändert. Eine Münze könnte in niedrigeren Graden relativ häufig, aber in hohen Graden extrem selten sein. Dieses Konzept ist entscheidend für das Verständnis, warum Populationsberichte im modernen Sammeln so wichtig sind.",
          nl: "Voorwaardelijke zeldzaamheid verwijst naar hoe de zeldzaamheid van een munt dramatisch verandert gebaseerd op zijn graad of conditie. Een munt kan relatief gewoon zijn in lagere graden maar extreem zeldzaam in hoge graden. Dit concept is cruciaal voor het begrijpen waarom populatierapporten zo belangrijk zijn in modern verzamelen."
        }
      },
      {
        question: {
          en: "What role do 'finest known' coins play in the market?",
          es: "¿Qué papel juegan las monedas 'más finas conocidas' en el mercado?",
          de: "Welche Rolle spielen 'beste bekannte' Münzen auf dem Markt?",
          nl: "Welke rol spelen 'beste bekende' munten in de markt?"
        },
        options: [
          { en: "They set minimum price standards", es: "Establecen estándares de precios mínimos", de: "Sie setzen Mindestpreisstandards", nl: "Ze stellen minimumprijsstandaarden vast" },
          { en: "They command the highest premiums and set market records", es: "Tienen las primas más altas y establecen récords de mercado", de: "Sie erzielen die höchsten Aufschläge und setzen Marktrekorde", nl: "Ze behalen de hoogste premiums en vestigen marktrecords" },
          { en: "They represent average market values", es: "Representan valores promedio del mercado", de: "Sie repräsentieren durchschnittliche Marktwerte", nl: "Ze vertegenwoordigen gemiddelde marktwaarden" },
          { en: "They are used for insurance purposes only", es: "Se usan solo para propósitos de seguro", de: "Sie werden nur für Versicherungszwecke verwendet", nl: "Ze worden alleen gebruikt voor verzekeringsdoeleinden" }
        ],
        correct: 1,
        explanation: {
          en: "Finest known coins represent the pinnacle of quality for a particular issue and command the highest premiums in the marketplace. These coins often set auction records and serve as benchmarks for the series. Their rarity in top grades makes them extremely valuable to advanced collectors and registry set competitors.",
          es: "Las monedas más finas conocidas representan el pináculo de calidad para una emisión particular y tienen las primas más altas en el mercado. Estas monedas a menudo establecen récords de subasta y sirven como puntos de referencia para la serie. Su rareza en grados superiores las hace extremadamente valiosas para coleccionistas avanzados y competidores de conjuntos de registro.",
          de: "Die besten bekannten Münzen repräsentieren den Höhepunkt der Qualität für eine bestimmte Ausgabe und erzielen die höchsten Aufschläge auf dem Marktplatz. Diese Münzen setzen oft Auktionsrekorde und dienen als Maßstäbe für die Serie. Ihre Seltenheit in Topgraden macht sie extrem wertvoll für fortgeschrittene Sammler und Registry-Set-Konkurrenten.",
          nl: "Beste bekende munten vertegenwoordigen het toppunt van kwaliteit voor een bepaalde uitgifte en behalen de hoogste premiums in de markt. Deze munten vestigen vaak veilingrecords en dienen als benchmarks voor de serie. Hun zeldzaamheid in topgraden maakt ze extreem waardevol voor gevorderde verzamelaars en registry set concurrenten."
        }
      },
      {
        question: {
          en: "What is the significance of 'pedigreed' coins?",
          es: "¿Cuál es la importancia de las monedas con 'pedigrí'?",
          de: "Was ist die Bedeutung von Münzen mit 'Stammbaum'?",
          nl: "Wat is de betekenis van munten met 'stamboom'?"
        },
        options: [
          { en: "They have verified metal purity", es: "Tienen pureza metálica verificada", de: "Sie haben verifizierte Metallreinheit", nl: "Ze hebben geverifieerde metaalzuiverheid" },
          { en: "They have documented ownership history", es: "Tienen historia de propiedad documentada", de: "Sie haben dokumentierte Besitzgeschichte", nl: "Ze hebben gedocumenteerde eigendomsgeschiedenis" },
          { en: "They come from government auctions", es: "Provienen de subastas gubernamentales", de: "Sie stammen aus Regierungsauktionen", nl: "Ze komen van overheidsveiling" },
          { en: "They are certified as investment grade", es: "Están certificadas como grado de inversión", de: "Sie sind als Anlagequalität zertifiziert", nl: "Ze zijn gecertificeerd als beleggingskwaliteit" }
        ],
        correct: 1,
        explanation: {
          en: "Pedigreed coins have documented ownership history, often tracing back through famous collections or notable sales. This provenance adds value and collector interest, especially when the previous owners were renowned numismatists. Famous pedigrees include collections like Bass, Garrett, or Eliasberg.",
          es: "Las monedas con pedigrí tienen historia de propiedad documentada, a menudo rastreando a través de colecciones famosas o ventas notables. Esta procedencia añade valor e interés del coleccionista, especialmente cuando los propietarios anteriores eran numismáticos renombrados. Los pedigríes famosos incluyen colecciones como Bass, Garrett o Eliasberg.",
          de: "Münzen mit Stammbaum haben dokumentierte Besitzgeschichte, oft zurückverfolgbar durch berühmte Sammlungen oder bemerkenswerte Verkäufe. Diese Herkunft fügt Wert und Sammlerinteresse hinzu, besonders wenn die Vorbesitzer renommierte Numismatiker waren. Berühmte Stammbäume umfassen Sammlungen wie Bass, Garrett oder Eliasberg.",
          nl: "Munten met stamboom hebben gedocumenteerde eigendomsgeschiedenis, vaak traceerbaar door beroemde collecties of opmerkelijke verkopen. Deze herkomst voegt waarde en verzamelaarsinteresse toe, vooral wanneer de vorige eigenaren bekende numismaten waren. Beroemde stambomen omvatten collecties zoals Bass, Garrett of Eliasberg."
        }
      },
      {
        question: {
          en: "What drives the 'modern rarity' phenomenon in coin collecting?",
          es: "¿Qué impulsa el fenómeno de 'rareza moderna' en la colección de monedas?",
          de: "Was treibt das Phänomen der 'modernen Seltenheit' beim Münzsammeln an?",
          nl: "Wat drijft het 'moderne zeldzaamheid' fenomeen in het verzamelen van munten aan?"
        },
        options: [
          { en: "Government restrictions on collecting", es: "Restricciones gubernamentales sobre la colección", de: "Regierungsbeschränkungen beim Sammeln", nl: "Overheidsbeperkingen op verzamelen" },
          { en: "High-grade examples being rare despite high mintages", es: "Ejemplos de alto grado siendo raros a pesar de altas acuñaciones", de: "Hochgradige Exemplare sind selten trotz hoher Auflagen", nl: "Hoogwaardige exemplaren zijn zeldzaam ondanks hoge oplagen" },
          { en: "Decreased interest in modern coins", es: "Disminución del interés en monedas modernas", de: "Verringertes Interesse an modernen Münzen", nl: "Verminderde interesse in moderne munten" },
          { en: "Limited access to modern minting facilities", es: "Acceso limitado a instalaciones de acuñación modernas", de: "Begrenzter Zugang zu modernen Prägeanlagen", nl: "Beperkte toegang tot moderne muntfaciliteiten" }
        ],
        correct: 1,
        explanation: {
          en: "Modern rarity occurs when coins with high mintages become rare in top grades due to poor handling, circulation, or other factors that damage most examples. While millions might be minted, only a few survive in gem condition, creating unexpected rarity at high grade levels.",
          es: "La rareza moderna ocurre cuando monedas con altas acuñaciones se vuelven raras en grados superiores debido a mal manejo, circulación u otros factores que dañan la mayoría de ejemplos. Mientras que millones podrían ser acuñados, solo unos pocos sobreviven en condición de gema, creando rareza inesperada en niveles de grado alto.",
          de: "Moderne Seltenheit tritt auf, wenn Münzen mit hohen Auflagen in Topgraden selten werden aufgrund schlechter Handhabung, Zirkulation oder anderen Faktoren, die die meisten Exemplare beschädigen. Während Millionen geprägt werden könnten, überleben nur wenige in Edelstein-Zustand, was unerwartete Seltenheit auf hohen Gradstufen schafft.",
          nl: "Moderne zeldzaamheid treedt op wanneer munten met hoge oplagen zeldzaam worden in topgraden vanwege slechte behandeling, circulatie of andere factoren die de meeste exemplaren beschadigen. Hoewel miljoenen kunnen worden geslagen, overleven er slechts enkele in edelsteen conditie, wat onverwachte zeldzaamheid creëert op hoge graadniveaus."
        }
      },
      {
        question: {
          en: "What is the purpose of 'crossover' services in coin grading?",
          es: "¿Cuál es el propósito de los servicios de 'crossover' en la clasificación de monedas?",
          de: "Was ist der Zweck der 'Crossover'-Dienste bei der Münzbewertung?",
          nl: "Wat is het doel van 'crossover' diensten bij muntbeoordeling?"
        },
        options: [
          { en: "To transfer coins between different collections", es: "Para transferir monedas entre diferentes colecciones", de: "Um Münzen zwischen verschiedenen Sammlungen zu übertragen", nl: "Om munten tussen verschillende collecties over te dragen" },
          { en: "To move coins from one grading service to another", es: "Para mover monedas de un servicio de clasificación a otro", de: "Um Münzen von einem Bewertungsdienst zu einem anderen zu bewegen", nl: "Om munten van de ene beoordelingsdienst naar de andere te verplaatsen" },
          { en: "To upgrade coin storage holders", es: "Para actualizar los portadores de almacenamiento de monedas", de: "Um Münzaufbewahrungshalter zu aktualisieren", nl: "Om muntopslaghouders te upgraden" },
          { en: "To cross-reference market prices", es: "Para hacer referencias cruzadas de precios de mercado", de: "Um Marktpreise zu überkreuzen", nl: "Om marktprijzen kruiselings te refereren" }
        ],
        correct: 1,
        explanation: {
          en: "Crossover services allow collectors to move coins from one grading service to another while maintaining or potentially improving the grade. This service is popular when collectors want to move coins from a less prestigious service to PCGS or NGC, or when seeking potential grade improvements.",
          es: "Los servicios de crossover permiten a los coleccionistas mover monedas de un servicio de clasificación a otro mientras mantienen o potencialmente mejoran el grado. Este servicio es popular cuando los coleccionistas quieren mover monedas de un servicio menos prestigioso a PCGS o NGC, o cuando buscan posibles mejoras de grado.",
          de: "Crossover-Dienste ermöglichen es Sammlern, Münzen von einem Bewertungsdienst zu einem anderen zu bewegen, während sie den Grad beibehalten oder möglicherweise verbessern. Dieser Service ist beliebt, wenn Sammler Münzen von einem weniger prestigeträchtigen Service zu PCGS oder NGC bewegen möchten oder potenzielle Gradverbesserungen suchen.",
          nl: "Crossover diensten stellen verzamelaars in staat om munten van de ene beoordelingsdienst naar de andere te verplaatsen terwijl ze de graad behouden of mogelijk verbeteren. Deze dienst is populair wanneer verzamelaars munten willen verplaatsen van een minder prestigieuze dienst naar PCGS of NGC, of wanneer ze potentiële graadverbeteringen zoeken."
        }
      },
      {
        question: {
          en: "What is meant by 'sight unseen' trading in rare coins?",
          es: "¿Qué se entiende por comercio 'sin inspección' en monedas raras?",
          de: "Was bedeutet 'ungesehen' Handel bei seltenen Münzen?",
          nl: "Wat wordt bedoeld met 'ongezien' handel in zeldzame munten?"
        },
        options: [
          { en: "Trading based on photographs only", es: "Comercio basado solo en fotografías", de: "Handel basierend nur auf Fotografien", nl: "Handel gebaseerd alleen op foto's" },
          { en: "Trading based on grade and description without seeing the coin", es: "Comercio basado en grado y descripción sin ver la moneda", de: "Handel basierend auf Grad und Beschreibung ohne die Münze zu sehen", nl: "Handel gebaseerd op graad en beschrijving zonder de munt te zien" },
          { en: "Trading through closed auctions", es: "Comercio a través de subastas cerradas", de: "Handel durch geschlossene Auktionen", nl: "Handel door gesloten veilingen" },
          { en: "Trading with hidden identities", es: "Comercio con identidades ocultas", de: "Handel mit versteckten Identitäten", nl: "Handel met verborgen identiteiten" }
        ],
        correct: 1,
        explanation: {
          en: "Sight unseen trading involves buying or selling coins based solely on their grade and service designation without physically examining them. This practice became common with the advent of reliable third-party grading services, as collectors gained confidence in standardized grading and holder integrity.",
          es: "El comercio sin inspección involucra comprar o vender monedas basado únicamente en su grado y designación de servicio sin examinarlas físicamente. Esta práctica se volvió común con el advenimiento de servicios de clasificación de terceros confiables, ya que los coleccionistas ganaron confianza en la clasificación estandarizada y la integridad del portador.",
          de: "Ungesehener Handel beinhaltet den Kauf oder Verkauf von Münzen ausschließlich basierend auf ihrem Grad und ihrer Servicebenennung, ohne sie physisch zu untersuchen. Diese Praxis wurde mit dem Aufkommen zuverlässiger Drittanbieter-Bewertungsdienste üblich, da Sammler Vertrauen in standardisierte Bewertung und Halterintegrität gewannen.",
          nl: "Ongezien handel houdt in dat munten worden gekocht of verkocht uitsluitend gebaseerd op hun graad en servicebenaaming zonder ze fysiek te onderzoeken. Deze praktijk werd gewoon met de komst van betrouwbare derde partij beoordelingsdiensten, omdat verzamelaars vertrouwen kregen in gestandaardiseerde beoordeling en houderintegriteit."
        }
      },
      {
        question: {
          en: "What impact has the internet had on rare coin market dynamics?",
          es: "¿Qué impacto ha tenido el internet en la dinámica del mercado de monedas raras?",
          de: "Welchen Einfluss hatte das Internet auf die Marktdynamik seltener Münzen?",
          nl: "Welke impact heeft het internet gehad op de marktdynamiek van zeldzame munten?"
        },
        options: [
          { en: "Decreased market transparency", es: "Disminución de la transparencia del mercado", de: "Verringerte Markttransparenz", nl: "Verminderde markttransparantie" },
          { en: "Increased market access and price transparency", es: "Mayor acceso al mercado y transparencia de precios", de: "Erhöhter Marktzugang und Preistransparenz", nl: "Verhoogde markttoegang en prijstransparantie" },
          { en: "Eliminated the need for coin shows", es: "Eliminó la necesidad de espectáculos de monedas", de: "Beseitigte die Notwendigkeit für Münzshows", nl: "Elimineerde de behoefte aan muntshows" },
          { en: "Reduced coin collecting interest", es: "Redujo el interés en la colección de monedas", de: "Reduzierte das Interesse am Münzsammeln", nl: "Verminderde interesse in muntenverzamelen" }
        ],
        correct: 1,
        explanation: {
          en: "The internet has revolutionized rare coin collecting by providing unprecedented market access and price transparency. Online auctions, population reports, price guides, and dealer inventories are now accessible to all collectors, democratizing information that was once available only to professional dealers.",
          es: "El internet ha revolucionado la colección de monedas raras al proporcionar acceso sin precedentes al mercado y transparencia de precios. Las subastas en línea, informes de población, guías de precios e inventarios de distribuidores ahora son accesibles para todos los coleccionistas, democratizando información que una vez estuvo disponible solo para distribuidores profesionales.",
          de: "Das Internet hat das Sammeln seltener Münzen revolutioniert, indem es beispiellosen Marktzugang und Preistransparenz bietet. Online-Auktionen, Populationsberichte, Preisführer und Händlerinventare sind jetzt für alle Sammler zugänglich und demokratisieren Informationen, die einst nur professionellen Händlern zur Verfügung standen.",
          nl: "Het internet heeft het verzamelen van zeldzame munten gerevolutioneerd door ongekende markttoegang en prijstransparantie te bieden. Online veilingen, populatierapporten, prijsgidsen en handelaarsinventarissen zijn nu toegankelijk voor alle verzamelaars, waardoor informatie wordt gedemocratiseerd die ooit alleen beschikbaar was voor professionele handelaren."
        }
      },
      {
        question: {
          en: "What is the concept of 'market tiers' in rare coin collecting?",
          es: "¿Cuál es el concepto de 'niveles de mercado' en la colección de monedas raras?",
          de: "Was ist das Konzept der 'Marktstufen' beim Sammeln seltener Münzen?",
          nl: "Wat is het concept van 'marktniveaus' bij het verzamelen van zeldzame munten?"
        },
        options: [
          { en: "Different price levels for the same coin grade", es: "Diferentes niveles de precios para el mismo grado de moneda", de: "Verschiedene Preisstufen für denselben Münzgrad", nl: "Verschillende prijsniveaus voor dezelfde muntgraad" },
          { en: "Hierarchical classification of coin rarity", es: "Clasificación jerárquica de la rareza de monedas", de: "Hierarchische Klassifizierung der Münzseltenheit", nl: "Hiërarchische classificatie van muntzeldzaamheid" },
          { en: "Regional market variations", es: "Variaciones regionales del mercado", de: "Regionale Marktvariationen", nl: "Regionale marktvariaties" },
          { en: "Seasonal price fluctuations", es: "Fluctuaciones estacionales de precios", de: "Saisonale Preisschwankungen", nl: "Seizoensgebonden prijsschommelingen" }
        ],
        correct: 0,
        explanation: {
          en: "Market tiers refer to the different price levels that coins of the same grade can command based on factors like eye appeal, strike quality, and market demand. Even within the same grade, coins can be categorized into A, B, and C quality levels, with A coins commanding the highest premiums.",
          es: "Los niveles de mercado se refieren a los diferentes niveles de precios que las monedas del mismo grado pueden tener basados en factores como atractivo visual, calidad de acuñación y demanda del mercado. Incluso dentro del mismo grado, las monedas pueden ser categorizadas en niveles de calidad A, B y C, con las monedas A teniendo las primas más altas.",
          de: "Marktstufen beziehen sich auf die verschiedenen Preisstufen, die Münzen desselben Grades basierend auf Faktoren wie Augenfreude, Prägequalität und Marktnachfrage erzielen können. Selbst innerhalb desselben Grades können Münzen in A-, B- und C-Qualitätsstufen kategorisiert werden, wobei A-Münzen die höchsten Aufschläge erzielen.",
          nl: "Marktniveaus verwijzen naar de verschillende prijsniveaus die munten van dezelfde graad kunnen behalen gebaseerd op factoren zoals visuele aantrekkingskracht, slagkwaliteit en marktvraag. Zelfs binnen dezelfde graad kunnen munten worden gecategoriseerd in A, B en C kwaliteitsniveaus, waarbij A munten de hoogste premiums behalen."
        }
      },
      {
        question: {
          en: "What role does 'brand preference' play in modern coin collecting?",
          es: "¿Qué papel juega la 'preferencia de marca' en la colección moderna de monedas?",
          de: "Welche Rolle spielt 'Markenpräferenz' beim modernen Münzsammeln?",
          nl: "Welke rol speelt 'merkvoorkeur' bij het moderne verzamelen van munten?"
        },
        options: [
          { en: "Collectors prefer specific mint facilities", es: "Los coleccionistas prefieren instalaciones de acuñación específicas", de: "Sammler bevorzugen bestimmte Münzstätten", nl: "Verzamelaars geven de voorkeur aan specifieke muntfaciliteiten" },
          { en: "Collectors show preference for certain grading services", es: "Los coleccionistas muestran preferencia por ciertos servicios de clasificación", de: "Sammler zeigen Präferenz für bestimmte Bewertungsdienste", nl: "Verzamelaars tonen voorkeur voor bepaalde beoordelingsdiensten" },
          { en: "Collectors prefer certain metal types", es: "Los coleccionistas prefieren ciertos tipos de metal", de: "Sammler bevorzugen bestimmte Metallarten", nl: "Verzamelaars geven de voorkeur aan bepaalde metaaltypes" },
          { en: "Collectors prefer specific coin dealers", es: "Los coleccionistas prefieren distribuidores específicos de monedas", de: "Sammler bevorzugen bestimmte Münzhändler", nl: "Verzamelaars geven de voorkeur aan specifieke munthandelaren" }
        ],
        correct: 1,
        explanation: {
          en: "Brand preference in coin collecting refers to collectors' preferences for coins graded by certain services, primarily PCGS and NGC. These preferences can significantly affect market values, with some collectors paying premiums for coins in holders from their preferred grading service, even for identical grades.",
          es: "La preferencia de marca en la colección de monedas se refiere a las preferencias de los coleccionistas por monedas clasificadas por ciertos servicios, principalmente PCGS y NGC. Estas preferencias pueden afectar significativamente los valores de mercado, con algunos coleccionistas pagando primas por monedas en portadores de su servicio de clasificación preferido, incluso para grados idénticos.",
          de: "Markenpräferenz beim Münzsammeln bezieht sich auf die Präferenzen der Sammler für Münzen, die von bestimmten Diensten bewertet wurden, hauptsächlich PCGS und NGC. Diese Präferenzen können Marktwerte erheblich beeinflussen, wobei einige Sammler Aufschläge für Münzen in Haltern ihres bevorzugten Bewertungsdienstes zahlen, selbst für identische Grade.",
          nl: "Merkvoorkeur bij het verzamelen van munten verwijst naar verzamelaars' voorkeuren voor munten beoordeeld door bepaalde diensten, voornamelijk PCGS en NGC. Deze voorkeuren kunnen marktwaarden aanzienlijk beïnvloeden, waarbij sommige verzamelaars premiums betalen voor munten in houders van hun voorkeursbeoordelingsdienst, zelfs voor identieke graden."
        }
      },
      {
        question: {
          en: "What was the Spanish Dollar's historical significance in global trade?",
          es: "¿Cuál fue la importancia histórica del Dólar Español en el comercio global?",
          de: "Was war die historische Bedeutung des Spanischen Dollars im globalen Handel?",
          nl: "Wat was de historische betekenis van de Spaanse Dollar in de wereldhandel?"
        },
        options: [
          { en: "First truly global currency, used on multiple continents for centuries", es: "Primera moneda verdaderamente global, usada en múltiples continentes durante siglos", de: "Erste wirklich globale Währung, jahrhundertelang auf mehreren Kontinenten verwendet", nl: "Eerste echt mondiale valuta, eeuwenlang gebruikt op meerdere continenten" },
          { en: "Only used within Spain", es: "Solo usado dentro de España", de: "Nur in Spanien verwendet", nl: "Alleen in Spanje gebruikt" },
          { en: "Replaced the Euro in 2002", es: "Reemplazó al Euro en 2002", de: "Ersetzte den Euro 2002", nl: "Verving de Euro in 2002" },
          { en: "Modern digital currency", es: "Moneda digital moderna", de: "Moderne digitale Währung", nl: "Moderne digitale valuta" }
        ],
        correct: 0,
        explanation: {
          en: "The Spanish Dollar (Piece of Eight) was the first truly global currency, widely used from the 16th to 19th centuries across Europe, Asia, and the Americas. It was the basis for many modern currencies including the US Dollar. Spanish colonial coins are highly collectible and historically significant pieces.",
          es: "El Dólar Español (Real de a Ocho) fue la primera moneda verdaderamente global, ampliamente usada desde el siglo XVI al XIX en Europa, Asia y las Américas. Fue la base de muchas monedas modernas incluyendo el Dólar estadounidense. Las monedas coloniales españolas son piezas altamente coleccionables e históricamente significativas.",
          de: "Der Spanische Dollar (Achter-Real) war die erste wirklich globale Währung, weit verbreitet vom 16. bis 19. Jahrhundert in Europa, Asien und Amerika. Er war die Grundlage für viele moderne Währungen einschließlich des US-Dollars. Spanische Kolonialmünzen sind hochgradig sammelwürdige und historisch bedeutsame Stücke.",
          nl: "De Spaanse Dollar (Acht Reaal) was de eerste echt mondiale valuta, breed gebruikt van de 16e tot 19e eeuw in Europa, Azië en Amerika. Het was de basis voor veel moderne valuta's inclusief de US Dollar. Spaanse koloniale munten zijn zeer verzamelbare en historisch belangrijke stukken."
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