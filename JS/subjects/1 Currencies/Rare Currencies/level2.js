// Level 2: Currencies - Zeldzame valuta (Novice)
(function() {
  const level2 = {
    difficulty: "Novice",
    name: {
      en: "Rare Currencies - Novice Level",
      es: "Monedas Raras - Nivel Principiante",
      de: "Seltene Währungen - Anfängerstufe",
      nl: "Zeldzame Valuta - Novice Niveau"
    },
    questions: [
      {
        question: {
          en: "What does MS-65 mean in coin grading?",
          es: "¿Qué significa MS-65 en la clasificación de monedas?",
          de: "Was bedeutet MS-65 bei der Münzbewertung?",
          nl: "Wat betekent MS-65 bij het beoordelen van munten?"
        },
        options: [
          { en: "Mint State 65 - Gem Uncirculated", es: "Estado de Casa de Moneda 65 - Sin Circular Gema", de: "Prägefrisch 65 - Edelstein Unzirkuliert", nl: "Mint State 65 - Edelsteen Ongecirculeerd" },
          { en: "Mint State 65 - Fine condition", es: "Estado de Casa de Moneda 65 - Condición fina", de: "Prägefrisch 65 - Feine Erhaltung", nl: "Mint State 65 - Fijne conditie" },
          { en: "Medium Silver 65% purity", es: "Plata Media 65% de pureza", de: "Mittleres Silber 65% Reinheit", nl: "Medium Zilver 65% zuiverheid" },
          { en: "Minimum Size 65mm diameter", es: "Tamaño Mínimo 65mm de diámetro", de: "Mindestgröße 65mm Durchmesser", nl: "Minimale Grootte 65mm diameter" }
        ],
        correct: 0,
        explanation: {
          en: "MS-65 stands for Mint State 65, indicating a Gem Uncirculated coin with only light contact marks and excellent eye appeal. It's a high-grade designation used by major grading services like PCGS and NGC.",
          es: "MS-65 significa Estado de Casa de Moneda 65, indicando una moneda Sin Circular Gema con solo marcas de contacto ligeras y excelente atractivo visual. Es una designación de alto grado usada por servicios de clasificación importantes como PCGS y NGC.",
          de: "MS-65 steht für Prägefrisch 65 und bezeichnet eine Edelstein-Unzirkulierte Münze mit nur leichten Kontaktspuren und ausgezeichneter Augenfreude. Es ist eine hochgradige Bezeichnung, die von großen Bewertungsdiensten wie PCGS und NGC verwendet wird.",
          nl: "MS-65 staat voor Mint State 65, wat een Edelsteen Ongecirculeerde munt aangeeft met alleen lichte contactsporen en uitstekende visuele aantrekkingskracht. Het is een hoge-kwaliteit aanduiding gebruikt door grote beoordelingsdiensten zoals PCGS en NGC."
        }
      },
      {
        question: {
          en: "Which grading service introduced the concept of 'CAC' stickers?",
          es: "¿Qué servicio de clasificación introdujo el concepto de pegatinas 'CAC'?",
          de: "Welcher Bewertungsdienst führte das Konzept der 'CAC'-Aufkleber ein?",
          nl: "Welke beoordelingsdienst introduceerde het concept van 'CAC' stickers?"
        },
        options: [
          { en: "PCGS", es: "PCGS", de: "PCGS", nl: "PCGS" },
          { en: "NGC", es: "NGC", de: "NGC", nl: "NGC" },
          { en: "Coin and Currency Acceptance Corporation", es: "Corporación de Aceptación de Monedas y Divisas", de: "Münz- und Währungsakzeptanz-Korporation", nl: "Munt en Valuta Acceptatie Corporatie" },
          { en: "ANACS", es: "ANACS", de: "ANACS", nl: "ANACS" }
        ],
        correct: 2,
        explanation: {
          en: "CAC (Coin and Currency Acceptance Corporation) was founded by John Albanese to provide an additional layer of authentication. CAC stickers indicate that a coin meets the grade standards for solid or premium quality within its assigned grade.",
          es: "CAC (Corporación de Aceptación de Monedas y Divisas) fue fundada por John Albanese para proporcionar una capa adicional de autenticación. Las pegatinas CAC indican que una moneda cumple con los estándares de grado para calidad sólida o premium dentro de su grado asignado.",
          de: "CAC (Münz- und Währungsakzeptanz-Korporation) wurde von John Albanese gegründet, um eine zusätzliche Authentifizierungsebene zu bieten. CAC-Aufkleber zeigen an, dass eine Münze die Bewertungsstandards für solide oder Premium-Qualität innerhalb ihres zugewiesenen Grades erfüllt.",
          nl: "CAC (Munt en Valuta Acceptatie Corporatie) werd opgericht door John Albanese om een extra laag van authenticatie te bieden. CAC stickers geven aan dat een munt voldoet aan de beoordelingsstandaarden voor solide of premium kwaliteit binnen zijn toegewezen graad."
        }
      },
      {
        question: {
          en: "What is the main difference between a Proof coin and a Mint State coin?",
          es: "¿Cuál es la principal diferencia entre una moneda Proof y una moneda en Estado de Casa de Moneda?",
          de: "Was ist der Hauptunterschied zwischen einer Proof-Münze und einer Prägefrisch-Münze?",
          nl: "Wat is het belangrijkste verschil tussen een Proof munt en een Mint State munt?"
        },
        options: [
          { en: "Proof coins are older", es: "Las monedas Proof son más antiguas", de: "Proof-Münzen sind älter", nl: "Proof munten zijn ouder" },
          { en: "Proof coins are specially struck for collectors with mirror-like surfaces", es: "Las monedas Proof se acuñan especialmente para coleccionistas con superficies tipo espejo", de: "Proof-Münzen werden speziell für Sammler mit spiegelähnlichen Oberflächen geprägt", nl: "Proof munten worden speciaal geslagen voor verzamelaars met spiegelachtige oppervlakken" },
          { en: "Mint State coins contain more silver", es: "Las monedas en Estado de Casa de Moneda contienen más plata", de: "Prägefrisch-Münzen enthalten mehr Silber", nl: "Mint State munten bevatten meer zilver" },
          { en: "There is no difference", es: "No hay diferencia", de: "Es gibt keinen Unterschied", nl: "Er is geen verschil" }
        ],
        correct: 1,
        explanation: {
          en: "Proof coins are specially struck using polished dies and planchets, resulting in mirror-like surfaces and sharp details. They are made specifically for collectors. Mint State coins are regular production coins that never entered circulation.",
          es: "Las monedas Proof se acuñan especialmente usando troqueles y cospeles pulidos, resultando en superficies tipo espejo y detalles nítidos. Se hacen específicamente para coleccionistas. Las monedas en Estado de Casa de Moneda son monedas de producción regular que nunca entraron en circulación.",
          de: "Proof-Münzen werden speziell mit polierten Stempeln und Rohlingen geprägt, was zu spiegelähnlichen Oberflächen und scharfen Details führt. Sie werden speziell für Sammler hergestellt. Prägefrisch-Münzen sind reguläre Produktionsmünzen, die nie in Umlauf kamen.",
          nl: "Proof munten worden speciaal geslagen met gepolijste stempels en plaatjes, wat resulteert in spiegelachtige oppervlakken en scherpe details. Ze worden specifiek gemaakt voor verzamelaars. Mint State munten zijn reguliere productiemunten die nooit in circulatie kwamen."
        }
      },
      {
        question: {
          en: "Which of these is considered a major mint error?",
          es: "¿Cuál de estos se considera un error importante de la casa de moneda?",
          de: "Welcher davon wird als wichtiger Münzfehler betrachtet?",
          nl: "Welke van deze wordt beschouwd als een belangrijke muntfout?"
        },
        options: [
          { en: "Double die obverse", es: "Doble troquel anverso", de: "Doppelstempel Vorderseite", nl: "Dubbele stempel voorzijde" },
          { en: "Light scratches", es: "Arañazos ligeros", de: "Leichte Kratzer", nl: "Lichte krassen" },
          { en: "Normal wear patterns", es: "Patrones de desgaste normales", de: "Normale Abnutzungsmuster", nl: "Normale slijtageppatronen" },
          { en: "Toning variations", es: "Variaciones de tono", de: "Tonvariationen", nl: "Toonvariaties" }
        ],
        correct: 0,
        explanation: {
          en: "A double die obverse (DDO) is a major mint error that occurs when a die receives multiple impressions during the hubbing process, creating doubled images on the coin. Famous examples include the 1955 DDO Lincoln cent and 1969-S DDO Lincoln cent.",
          es: "Un doble troquel anverso (DDO) es un error importante de la casa de moneda que ocurre cuando un troquel recibe múltiples impresiones durante el proceso de acuñación, creando imágenes dobles en la moneda. Ejemplos famosos incluyen el centavo Lincoln DDO de 1955 y el centavo Lincoln DDO de 1969-S.",
          de: "Ein Doppelstempel Vorderseite (DDO) ist ein wichtiger Münzfehler, der auftritt, wenn ein Stempel während des Prägeprozesses mehrere Abdrücke erhält und dadurch doppelte Bilder auf der Münze entstehen. Berühmte Beispiele sind der 1955 DDO Lincoln-Cent und der 1969-S DDO Lincoln-Cent.",
          nl: "Een dubbele stempel voorzijde (DDO) is een belangrijke muntfout die optreedt wanneer een stempel meerdere indrukken krijgt tijdens het stempelproces, waardoor dubbele beelden op de munt ontstaan. Beroemde voorbeelden zijn de 1955 DDO Lincoln cent en 1969-S DDO Lincoln cent."
        }
      },
      {
        question: {
          en: "What does the term 'key date' mean in coin collecting?",
          es: "¿Qué significa el término 'fecha clave' en la colección de monedas?",
          de: "Was bedeutet der Begriff 'Schlüsseldatum' beim Münzsammeln?",
          nl: "Wat betekent de term 'sleuteldatum' bij het verzamelen van munten?"
        },
        options: [
          { en: "The date the coin was first designed", es: "La fecha en que se diseñó la moneda por primera vez", de: "Das Datum, an dem die Münze erstmals entworfen wurde", nl: "De datum waarop de munt voor het eerst werd ontworpen" },
          { en: "A rare date with low mintage or high demand", es: "Una fecha rara con baja acuñación o alta demanda", de: "Ein seltenes Datum mit niedriger Auflage oder hoher Nachfrage", nl: "Een zeldzame datum met lage oplage of hoge vraag" },
          { en: "The date when the mint opened", es: "La fecha en que abrió la casa de moneda", de: "Das Datum, an dem die Münzstätte eröffnet wurde", nl: "De datum waarop de munt opende" },
          { en: "The expiration date of the coin", es: "La fecha de vencimiento de la moneda", de: "Das Ablaufdatum der Münze", nl: "De vervaldatum van de munt" }
        ],
        correct: 1,
        explanation: {
          en: "A key date refers to a coin with a date that is particularly rare, usually due to low mintage, melting, or other factors that make it scarce. These coins are essential for completing a series and typically command premium prices. Examples include the 1909-S VDB Lincoln cent and 1916-D Mercury dime.",
          es: "Una fecha clave se refiere a una moneda con una fecha que es particularmente rara, generalmente debido a baja acuñación, fundición u otros factores que la hacen escasa. Estas monedas son esenciales para completar una serie y típicamente tienen precios premium. Ejemplos incluyen el centavo Lincoln 1909-S VDB y el dime Mercury 1916-D.",
          de: "Ein Schlüsseldatum bezieht sich auf eine Münze mit einem Datum, das besonders selten ist, normalerweise aufgrund niedriger Auflage, Einschmelzung oder anderer Faktoren, die sie knapp machen. Diese Münzen sind wesentlich für die Vervollständigung einer Serie und erzielen typischerweise Premiumpreise. Beispiele sind der 1909-S VDB Lincoln-Cent und der 1916-D Mercury-Dime.",
          nl: "Een sleuteldatum verwijst naar een munt met een datum die bijzonder zeldzaam is, meestal vanwege lage oplage, smelting of andere factoren die het schaars maken. Deze munten zijn essentieel voor het voltooien van een serie en behalen doorgaans premiumprijzen. Voorbeelden zijn de 1909-S VDB Lincoln cent en 1916-D Mercury dime."
        }
      },
      {
        question: {
          en: "What was the primary currency of Italy before the Euro?",
          es: "¿Cuál fue la moneda principal de Italia antes del Euro?",
          de: "Was war die Hauptwährung Italiens vor dem Euro?",
          nl: "Wat was de belangrijkste valuta van Italië voor de Euro?"
        },
        options: [
          { en: "Italian Lira", es: "Lira Italiana", de: "Italienische Lira", nl: "Italiaanse Lira" },
          { en: "Italian Franc", es: "Franco Italiano", de: "Italienischer Franc", nl: "Italiaanse Frank" },
          { en: "Italian Pound", es: "Libra Italiana", de: "Italienisches Pfund", nl: "Italiaans Pond" },
          { en: "Italian Mark", es: "Marco Italiano", de: "Italienische Mark", nl: "Italiaanse Mark" }
        ],
        correct: 0,
        explanation: {
          en: "The Italian Lira was Italy's currency from 1861 until it was replaced by the Euro in 2002. Lira coins and banknotes from various periods are now collectible items, with some rare specimens commanding significant premiums.",
          es: "La Lira Italiana fue la moneda de Italia desde 1861 hasta que fue reemplazada por el Euro en 2002. Las monedas y billetes de lira de varios períodos son ahora artículos coleccionables, con algunos especímenes raros que tienen primas significativas.",
          de: "Die Italienische Lira war Italiens Währung von 1861 bis sie 2002 durch den Euro ersetzt wurde. Lira-Münzen und Banknoten aus verschiedenen Perioden sind jetzt Sammlerstücke, wobei einige seltene Exemplare erhebliche Aufschläge erzielen.",
          nl: "De Italiaanse Lira was de valuta van Italië van 1861 tot deze in 2002 werd vervangen door de Euro. Lira munten en bankbiljetten uit verschillende periodes zijn nu verzamelobjecten, waarbij sommige zeldzame exemplaren aanzienlijke premiums behalen."
        }
      },
      {
        question: {
          en: "What currency did Germany use before the Euro?",
          es: "¿Qué moneda usó Alemania antes del Euro?",
          de: "Welche Währung verwendete Deutschland vor dem Euro?",
          nl: "Welke valuta gebruikte Duitsland voor de Euro?"
        },
        options: [
          { en: "Deutsche Mark", es: "Marco Alemán", de: "Deutsche Mark", nl: "Duitse Mark" },
          { en: "German Pound", es: "Libra Alemana", de: "Deutsches Pfund", nl: "Duits Pond" },
          { en: "German Franc", es: "Franco Alemán", de: "Deutscher Franc", nl: "Duitse Frank" },
          { en: "Reichsmark", es: "Reichsmark", de: "Reichsmark", nl: "Reichsmark" }
        ],
        correct: 0,
        explanation: {
          en: "The Deutsche Mark (DM) was West Germany's currency from 1948 to 2002, and unified Germany's currency from 1990 to 2002. After the Euro introduction, many Deutsche Mark coins became collectible, especially commemorative issues and early mintages.",
          es: "El Marco Alemán (DM) fue la moneda de Alemania Occidental desde 1948 hasta 2002, y la moneda de Alemania unificada desde 1990 hasta 2002. Después de la introducción del Euro, muchas monedas de Marco Alemán se volvieron coleccionables, especialmente emisiones conmemorativas y acuñaciones tempranas.",
          de: "Die Deutsche Mark (DM) war die Währung Westdeutschlands von 1948 bis 2002 und die Währung des vereinten Deutschlands von 1990 bis 2002. Nach der Euro-Einführung wurden viele Deutsche-Mark-Münzen zu Sammlerstücken, besonders Gedenkmünzen und frühe Prägungen.",
          nl: "De Deutsche Mark (DM) was de valuta van West-Duitsland van 1948 tot 2002, en de valuta van het verenigde Duitsland van 1990 tot 2002. Na de invoering van de Euro werden veel Deutsche Mark munten verzamelobjecten, vooral herdenkingsuitgiften en vroege muntslagen."
        }
      },
      {
        question: {
          en: "What was France's currency before the Euro?",
          es: "¿Cuál fue la moneda de Francia antes del Euro?",
          de: "Was war Frankreichs Währung vor dem Euro?",
          nl: "Wat was de valuta van Frankrijk voor de Euro?"
        },
        options: [
          { en: "French Franc", es: "Franco Francés", de: "Französischer Franc", nl: "Franse Frank" },
          { en: "French Livre", es: "Libra Francesa", de: "Französisches Livre", nl: "Franse Livre" },
          { en: "French Mark", es: "Marco Francés", de: "Französische Mark", nl: "Franse Mark" },
          { en: "French Crown", es: "Corona Francesa", de: "Französische Krone", nl: "Franse Kroon" }
        ],
        correct: 0,
        explanation: {
          en: "The French Franc was France's currency from 1360 to 2002, with various iterations throughout history. The modern Franc was introduced in 1960 and replaced by the Euro in 2002. Pre-Euro French coins, especially gold Francs and commemorative issues, are popular among collectors.",
          es: "El Franco Francés fue la moneda de Francia desde 1360 hasta 2002, con varias iteraciones a lo largo de la historia. El Franco moderno se introdujo en 1960 y fue reemplazado por el Euro en 2002. Las monedas francesas pre-Euro, especialmente los Francos de oro y las emisiones conmemorativas, son populares entre los coleccionistas.",
          de: "Der Französische Franc war Frankreichs Währung von 1360 bis 2002, mit verschiedenen Iterationen im Laufe der Geschichte. Der moderne Franc wurde 1960 eingeführt und 2002 durch den Euro ersetzt. Französische Münzen vor dem Euro, besonders Gold-Francs und Gedenkmünzen, sind bei Sammlern beliebt.",
          nl: "De Franse Frank was de valuta van Frankrijk van 1360 tot 2002, met verschillende versies door de geschiedenis heen. De moderne Frank werd geïntroduceerd in 1960 en vervangen door de Euro in 2002. Pre-Euro Franse munten, vooral gouden Franken en herdenkingsuitgiften, zijn populair bij verzamelaars."
        }
      },
      {
        question: {
          en: "What is 'Notgeld' in numismatics?",
          es: "¿Qué es 'Notgeld' en numismática?",
          de: "Was ist 'Notgeld' in der Numismatik?",
          nl: "Wat is 'Notgeld' in numismatiek?"
        },
        options: [
          { en: "Emergency money issued during times of crisis", es: "Dinero de emergencia emitido durante tiempos de crisis", de: "Notgeld, das in Krisenzeiten ausgegeben wird", nl: "Noodgeld uitgegeven tijdens crisissituaties" },
          { en: "Gold coins from the Middle Ages", es: "Monedas de oro de la Edad Media", de: "Goldmünzen aus dem Mittelalter", nl: "Gouden munten uit de Middeleeuwen" },
          { en: "Commemorative medals", es: "Medallas conmemorativas", de: "Gedenkmünzen", nl: "Herdenkingsmedailles" },
          { en: "Ancient Roman currency", es: "Moneda romana antigua", de: "Antike römische Währung", nl: "Antieke Romeinse valuta" }
        ],
        correct: 0,
        explanation: {
          en: "Notgeld is emergency money issued during times of economic or political crisis, particularly in Germany during World War I and the hyperinflation period of the 1920s. These emergency notes and coins were often printed on unusual materials and featured creative designs, making them highly collectible today.",
          es: "Notgeld es dinero de emergencia emitido durante tiempos de crisis económica o política, particularmente en Alemania durante la Primera Guerra Mundial y el período de hiperinflación de los años 1920. Estos billetes y monedas de emergencia a menudo se imprimían en materiales inusuales y presentaban diseños creativos, haciéndolos muy coleccionables hoy.",
          de: "Notgeld ist Notfallgeld, das in Zeiten wirtschaftlicher oder politischer Krisen ausgegeben wurde, besonders in Deutschland während des Ersten Weltkriegs und der Hyperinflation der 1920er Jahre. Diese Notscheine und -münzen wurden oft auf ungewöhnlichen Materialien gedruckt und zeigten kreative Designs, was sie heute sehr sammelwürdig macht.",
          nl: "Notgeld is noodgeld uitgegeven tijdens economische of politieke crises, vooral in Duitsland tijdens de Eerste Wereldoorlog en de hyperinflatieperiode van de jaren 1920. Deze noodbiljetten en munten werden vaak gedrukt op ongewone materialen en hadden creatieve ontwerpen, waardoor ze vandaag zeer verzamelbaar zijn."
        }
      },
      {
        question: {
          en: "What is a 'colonial currency'?",
          es: "¿Qué es una 'moneda colonial'?",
          de: "Was ist eine 'Kolonialwährung'?",
          nl: "Wat is een 'koloniale valuta'?"
        },
        options: [
          { en: "Currency issued by colonial powers for use in their territories", es: "Moneda emitida por poderes coloniales para uso en sus territorios", de: "Währung, die von Kolonialmächten für ihre Territorien ausgegeben wurde", nl: "Valuta uitgegeven door koloniale machten voor gebruik in hun gebieden" },
          { en: "Ancient Greek coins", es: "Monedas griegas antiguas", de: "Antike griechische Münzen", nl: "Antieke Griekse munten" },
          { en: "Modern commemorative coins", es: "Monedas conmemorativas modernas", de: "Moderne Gedenkmünzen", nl: "Moderne herdenkingsmunten" },
          { en: "Digital cryptocurrencies", es: "Criptomonedas digitales", de: "Digitale Kryptowährungen", nl: "Digitale cryptocurrencies" }
        ],
        correct: 0,
        explanation: {
          en: "Colonial currencies were issued by European colonial powers (British, Dutch, French, Spanish, etc.) for use in their overseas territories. Examples include the East India Company rupee, Dutch guilders used in Indonesia, and various African colonial coins. These are now sought-after collectibles representing historical periods of global colonization.",
          es: "Las monedas coloniales fueron emitidas por potencias coloniales europeas (británicas, holandesas, francesas, españolas, etc.) para uso en sus territorios de ultramar. Los ejemplos incluyen la rupia de la Compañía de las Indias Orientales, los florines holandeses usados en Indonesia y varias monedas coloniales africanas. Ahora son coleccionables codiciados que representan períodos históricos de colonización global.",
          de: "Kolonialwährungen wurden von europäischen Kolonialmächten (britisch, niederländisch, französisch, spanisch usw.) für ihre überseeischen Territorien ausgegeben. Beispiele sind die Rupie der Ostindien-Kompanie, niederländische Gulden in Indonesien und verschiedene afrikanische Kolonialmünzen. Diese sind heute begehrte Sammlerstücke, die historische Perioden globaler Kolonisierung repräsentieren.",
          nl: "Koloniale valuta's werden uitgegeven door Europese koloniale machten (Brits, Nederlands, Frans, Spaans, etc.) voor gebruik in hun overzeese gebieden. Voorbeelden zijn de Oost-Indische Compagnie roepie, Nederlandse guldens gebruikt in Indonesië en verschillende Afrikaanse koloniale munten. Deze zijn nu gezochte verzamelobjecten die historische periodes van mondiale kolonisatie vertegenwoordigen."
        }
      },
      {
        question: {
          en: "What is 'scrip' in the context of rare currencies?",
          es: "¿Qué es 'scrip' en el contexto de monedas raras?",
          de: "Was ist 'Scrip' im Kontext seltener Währungen?",
          nl: "Wat is 'scrip' in de context van zeldzame valuta's?"
        },
        options: [
          { en: "Private currency issued by companies or institutions", es: "Moneda privada emitida por empresas o instituciones", de: "Privatwährung, die von Unternehmen oder Institutionen ausgegeben wird", nl: "Privévaluta uitgegeven door bedrijven of instellingen" },
          { en: "Ancient Roman coins", es: "Monedas romanas antiguas", de: "Antike römische Münzen", nl: "Antieke Romeinse munten" },
          { en: "Government bonds", es: "Bonos del gobierno", de: "Staatsanleihen", nl: "Staatsobligaties" },
          { en: "Precious metal bars", es: "Barras de metales preciosos", de: "Edelmetallbarren", nl: "Edelmetaalstaven" }
        ],
        correct: 0,
        explanation: {
          en: "Scrip is private currency issued by companies, towns, or institutions for use within a limited context. Examples include company store scrip, mining town tokens, and POW camp money. These are collectible because they represent unique economic systems and historical periods when official currency was scarce.",
          es: "Scrip es moneda privada emitida por empresas, pueblos o instituciones para uso en un contexto limitado. Los ejemplos incluyen scrip de tiendas de empresa, fichas de pueblos mineros y dinero de campos de prisioneros de guerra. Estos son coleccionables porque representan sistemas económicos únicos y períodos históricos cuando la moneda oficial era escasa.",
          de: "Scrip ist Privatwährung, die von Unternehmen, Städten oder Institutionen für den Gebrauch in einem begrenzten Kontext ausgegeben wird. Beispiele sind Werksladen-Scrip, Bergbaustadt-Token und Kriegsgefangenenlager-Geld. Diese sind sammelwürdig, weil sie einzigartige Wirtschaftssysteme und historische Perioden repräsentieren, in denen offizielle Währung knapp war.",
          nl: "Scrip is privévaluta uitgegeven door bedrijven, steden of instellingen voor gebruik binnen een beperkte context. Voorbeelden zijn bedrijfswinkel scrip, mijnstadtokens en krijgsgevangenkampgeld. Deze zijn verzamelbaar omdat ze unieke economische systemen en historische periodes vertegenwoordigen waarin officiële valuta schaars was."
        }
      },
      {
        question: {
          en: "What is the 'Sealand Dollar'?",
          es: "¿Qué es el 'Dólar de Sealand'?",
          de: "Was ist der 'Sealand-Dollar'?",
          nl: "Wat is de 'Sealand Dollar'?"
        },
        options: [
          { en: "Currency issued by the micronation of Sealand", es: "Moneda emitida por la micronación de Sealand", de: "Währung der Mikronation Sealand", nl: "Valuta uitgegeven door de micronatie Sealand" },
          { en: "New Zealand's former currency", es: "Antigua moneda de Nueva Zelanda", de: "Frühere Währung Neuseelands", nl: "Voormalige valuta van Nieuw-Zeeland" },
          { en: "A marine conservation token", es: "Un token de conservación marina", de: "Ein Meeresschutz-Token", nl: "Een mariene beschermingstoken" },
          { en: "Scottish historical currency", es: "Moneda histórica escocesa", de: "Schottische historische Währung", nl: "Schotse historische valuta" }
        ],
        correct: 0,
        explanation: {
          en: "The Sealand Dollar is the currency of the Principality of Sealand, a micronation on a former military platform in the North Sea. While not recognized as legal tender by any nation, Sealand has issued coins and notes that have become collectibles due to their unusual origin and limited availability.",
          es: "El Dólar de Sealand es la moneda del Principado de Sealand, una micronación en una antigua plataforma militar en el Mar del Norte. Aunque no es reconocido como moneda de curso legal por ninguna nación, Sealand ha emitido monedas y billetes que se han convertido en coleccionables debido a su origen inusual y disponibilidad limitada.",
          de: "Der Sealand-Dollar ist die Währung des Fürstentums Sealand, einer Mikronation auf einer ehemaligen Militärplattform in der Nordsee. Obwohl von keiner Nation als gesetzliches Zahlungsmittel anerkannt, hat Sealand Münzen und Scheine ausgegeben, die aufgrund ihrer ungewöhnlichen Herkunft und begrenzten Verfügbarkeit zu Sammlerstücken geworden sind.",
          nl: "De Sealand Dollar is de valuta van het Prinsdom Sealand, een micronatie op een voormalig militair platform in de Noordzee. Hoewel niet erkend als wettig betaalmiddel door enige natie, heeft Sealand munten en biljetten uitgegeven die verzamelobjecten zijn geworden vanwege hun ongewone oorsprong en beperkte beschikbaarheid."
        }
      },
      {
        question: {
          en: "What is a 'siege coin'?",
          es: "¿Qué es una 'moneda de asedio'?",
          de: "Was ist eine 'Belagerungsmünze'?",
          nl: "Wat is een 'belegmeringsmunt'?"
        },
        options: [
          { en: "Emergency money produced during military sieges", es: "Dinero de emergencia producido durante asedios militares", de: "Notgeld, das während militärischer Belagerungen produziert wurde", nl: "Noodgeld geproduceerd tijdens militaire belegeringen" },
          { en: "Commemorative war medals", es: "Medallas conmemorativas de guerra", de: "Kriegs-Gedenkmedaillen", nl: "Herdenkingsoorlogsmedailles" },
          { en: "Ancient fortress tokens", es: "Fichas de fortaleza antiguas", de: "Antike Festungs-Token", nl: "Antieke forttokens" },
          { en: "Military payment certificates", es: "Certificados de pago militares", de: "Militärzahlungsscheine", nl: "Militaire betalingscertificaten" }
        ],
        correct: 0,
        explanation: {
          en: "Siege coins are emergency currency produced during military sieges when a city or fortress was cut off from normal money supply. These were often made from makeshift materials like melted-down silverware, leather, or even cardboard. Famous examples include coins from the Siege of Leiden (1574) and various Civil War siege pieces.",
          es: "Las monedas de asedio son moneda de emergencia producida durante asedios militares cuando una ciudad o fortaleza estaba cortada del suministro normal de dinero. Estos a menudo se hacían de materiales improvisados como platería fundida, cuero o incluso cartón. Ejemplos famosos incluyen monedas del Asedio de Leiden (1574) y varias piezas de asedio de la Guerra Civil.",
          de: "Belagerungsmünzen sind Notwährung, die während militärischer Belagerungen produziert wurde, wenn eine Stadt oder Festung vom normalen Geldangebot abgeschnitten war. Diese wurden oft aus provisorischen Materialien wie eingeschmolzenem Silberbesteck, Leder oder sogar Pappe hergestellt. Berühmte Beispiele sind Münzen aus der Belagerung von Leiden (1574) und verschiedene Bürgerkriegs-Belagerungsstücke.",
          nl: "Belegmeringsmunten zijn noodvaluta geproduceerd tijdens militaire belegeringen wanneer een stad of fort afgesneden was van normale geldvoorziening. Deze werden vaak gemaakt van geïmproviseerde materialen zoals gesmolten zilverwerk, leer of zelfs karton. Beroemde voorbeelden zijn munten van het Beleg van Leiden (1574) en verschillende Burgeroorlog belegeringsstukken."
        }
      },
      {
        question: {
          en: "What is the 'Bristol Pound'?",
          es: "¿Qué es la 'Libra de Bristol'?",
          de: "Was ist das 'Bristol-Pfund'?",
          nl: "Wat is het 'Bristol Pond'?"
        },
        options: [
          { en: "A local currency used in Bristol, UK", es: "Una moneda local usada en Bristol, Reino Unido", de: "Eine lokale Währung, die in Bristol, UK verwendet wird", nl: "Een lokale valuta gebruikt in Bristol, VK" },
          { en: "Ancient British coins", es: "Monedas británicas antiguas", de: "Antike britische Münzen", nl: "Antieke Britse munten" },
          { en: "Scottish banknotes", es: "Billetes escoceses", de: "Schottische Banknoten", nl: "Schotse bankbiljetten" },
          { en: "Irish historical currency", es: "Moneda histórica irlandesa", de: "Irische historische Währung", nl: "Ierse historische valuta" }
        ],
        correct: 0,
        explanation: {
          en: "The Bristol Pound was a local currency launched in 2012 for use in Bristol, England, designed to encourage local spending and support independent businesses. It existed in both paper and electronic forms until 2020. Such local currencies are collectible as they represent alternative economic movements and community-based monetary systems.",
          es: "La Libra de Bristol fue una moneda local lanzada en 2012 para uso en Bristol, Inglaterra, diseñada para fomentar el gasto local y apoyar negocios independientes. Existió en formas de papel y electrónica hasta 2020. Tales monedas locales son coleccionables ya que representan movimientos económicos alternativos y sistemas monetarios basados en la comunidad.",
          de: "Das Bristol-Pfund war eine lokale Währung, die 2012 in Bristol, England, eingeführt wurde, um lokale Ausgaben zu fördern und unabhängige Unternehmen zu unterstützen. Es existierte bis 2020 in Papier- und elektronischer Form. Solche lokalen Währungen sind sammelwürdig, da sie alternative Wirtschaftsbewegungen und gemeinschaftsbasierte Geldsysteme repräsentieren.",
          nl: "Het Bristol Pond was een lokale valuta gelanceerd in 2012 voor gebruik in Bristol, Engeland, ontworpen om lokale uitgaven aan te moedigen en onafhankelijke bedrijven te ondersteunen. Het bestond in zowel papieren als elektronische vorm tot 2020. Dergelijke lokale valuta's zijn verzamelbaar omdat ze alternatieve economische bewegingen en gemeenschapsgebaseerde monetaire systemen vertegenwoordigen."
        }
      },
      {
        question: {
          en: "What are 'Linden Dollars'?",
          es: "¿Qué son los 'Dólares Linden'?",
          de: "Was sind 'Linden-Dollars'?",
          nl: "Wat zijn 'Linden Dollars'?"
        },
        options: [
          { en: "Virtual currency from the online world Second Life", es: "Moneda virtual del mundo en línea Second Life", de: "Virtuelle Währung aus der Online-Welt Second Life", nl: "Virtuele valuta uit de online wereld Second Life" },
          { en: "Canadian regional currency", es: "Moneda regional canadiense", de: "Kanadische Regionalwährung", nl: "Canadese regionale valuta" },
          { en: "Historical Dutch coins", es: "Monedas holandesas históricas", de: "Historische niederländische Münzen", nl: "Historische Nederlandse munten" },
          { en: "Scandinavian medieval money", es: "Dinero medieval escandinavo", de: "Skandinavisches mittelalterliches Geld", nl: "Scandinavisch middeleeuws geld" }
        ],
        correct: 0,
        explanation: {
          en: "Linden Dollars (L$) are the virtual currency of Second Life, the online virtual world. They can be exchanged for real-world money, making them one of the first widely-used virtual currencies with real economic value. This represents the evolution of currency into digital and virtual spaces, interesting to collectors of unusual monetary systems.",
          es: "Los Dólares Linden (L$) son la moneda virtual de Second Life, el mundo virtual en línea. Pueden intercambiarse por dinero del mundo real, haciéndolos una de las primeras monedas virtuales ampliamente usadas con valor económico real. Esto representa la evolución de la moneda hacia espacios digitales y virtuales, interesante para coleccionistas de sistemas monetarios inusuales.",
          de: "Linden-Dollars (L$) sind die virtuelle Währung von Second Life, der Online-Virtual-World. Sie können in echtes Geld umgetauscht werden, was sie zu einer der ersten weitverbreiteten virtuellen Währungen mit echtem wirtschaftlichem Wert macht. Dies repräsentiert die Evolution der Währung in digitale und virtuelle Räume, interessant für Sammler ungewöhnlicher Geldsysteme.",
          nl: "Linden Dollars (L$) zijn de virtuele valuta van Second Life, de online virtuele wereld. Ze kunnen worden geruild voor echt geld, waardoor ze een van de eerste veelgebruikte virtuele valuta's met echte economische waarde zijn. Dit vertegenwoordigt de evolutie van valuta naar digitale en virtuele ruimtes, interessant voor verzamelaars van ongewone monetaire systemen."
        }
      },
      {
        question: {
          en: "What is a 'mint error' coin?",
          es: "¿Qué es una moneda con 'error de casa de moneda'?",
          de: "Was ist eine Münze mit 'Präge-Fehler'?",
          nl: "Wat is een munt met 'munt-fout'?"
        },
        options: [
          { en: "A coin with unintended defects from the minting process", es: "Una moneda con defectos no intencionados del proceso de acuñación", de: "Eine Münze mit unbeabsichtigten Fehlern aus dem Prägeprozess", nl: "Een munt met onbedoelde defecten uit het muntproces" },
          { en: "A counterfeit coin", es: "Una moneda falsificada", de: "Eine gefälschte Münze", nl: "Een vervalste munt" },
          { en: "A worn-out coin", es: "Una moneda desgastada", de: "Eine abgenutzte Münze", nl: "Een versleten munt" },
          { en: "A commemorative issue", es: "Una emisión conmemorativa", de: "Eine Gedenkmünze", nl: "Een herdenkingsuitgifte" }
        ],
        correct: 0,
        explanation: {
          en: "Mint error coins have unintended defects that occurred during the minting process, such as off-center strikes, wrong planchets, doubled dies, or missing elements. These errors make coins unique and often highly valuable to collectors. Famous examples include the 1955 doubled die penny and coins struck on wrong denomination planchets.",
          es: "Las monedas con error de casa de moneda tienen defectos no intencionados que ocurrieron durante el proceso de acuñación, como golpes descentrados, cospeles incorrectos, troqueles duplicados o elementos faltantes. Estos errores hacen que las monedas sean únicas y a menudo muy valiosas para los coleccionistas. Ejemplos famosos incluyen el penny de troquel duplicado de 1955 y monedas acuñadas en cospeles de denominación incorrecta.",
          de: "Münzen mit Präge-Fehler haben unbeabsichtigte Defekte, die während des Prägeprozesses auftraten, wie dezentrierte Prägungen, falsche Rohlinge, doppelte Stempel oder fehlende Elemente. Diese Fehler machen Münzen einzigartig und oft sehr wertvoll für Sammler. Berühmte Beispiele sind der 1955 Doppelstempel-Penny und Münzen, die auf falschen Nennwert-Rohlingen geprägt wurden.",
          nl: "Munten met muntfout hebben onbedoelde defecten die optraden tijdens het muntproces, zoals niet-gecentreerde slagen, verkeerde plaatjes, verdubbelde stempels of ontbrekende elementen. Deze fouten maken munten uniek en vaak zeer waardevol voor verzamelaars. Beroemde voorbeelden zijn de 1955 verdubbelde stempel penny en munten geslagen op verkeerde denominatie plaatjes."
        }
      },
      {
        question: {
          en: "What was the Reichsmark?",
          es: "¿Qué fue el Reichsmark?",
          de: "Was war die Reichsmark?",
          nl: "Wat was de Reichsmark?"
        },
        options: [
          { en: "Currency of Germany from 1924 to 1948", es: "Moneda de Alemania de 1924 a 1948", de: "Währung Deutschlands von 1924 bis 1948", nl: "Valuta van Duitsland van 1924 tot 1948" },
          { en: "Ancient Roman currency", es: "Moneda romana antigua", de: "Antike römische Währung", nl: "Antieke Romeinse valuta" },
          { en: "Swiss historical money", es: "Dinero histórico suizo", de: "Schweizerisches historisches Geld", nl: "Zwitsers historisch geld" },
          { en: "Austrian schilling", es: "Chelín austríaco", de: "Österreichischer Schilling", nl: "Oostenrijkse schilling" }
        ],
        correct: 0,
        explanation: {
          en: "The Reichsmark was the currency of Germany from 1924 to 1948, used during the Weimar Republic and Nazi era. Reichsmark coins and notes, especially those from the Nazi period, are controversial but significant historical collectibles that document a turbulent period in European history.",
          es: "El Reichsmark fue la moneda de Alemania de 1924 a 1948, usado durante la República de Weimar y la era nazi. Las monedas y billetes de Reichsmark, especialmente los del período nazi, son coleccionables históricos controvertidos pero significativos que documentan un período turbulento en la historia europea.",
          de: "Die Reichsmark war die Währung Deutschlands von 1924 bis 1948, verwendet während der Weimarer Republik und der Nazi-Ära. Reichsmark-Münzen und -Scheine, besonders die aus der Nazi-Zeit, sind kontroverse aber bedeutende historische Sammlerstücke, die eine turbulente Periode der europäischen Geschichte dokumentieren.",
          nl: "De Reichsmark was de valuta van Duitsland van 1924 tot 1948, gebruikt tijdens de Weimar Republiek en Nazi-tijdperk. Reichsmark munten en biljetten, vooral die uit de Nazi-periode, zijn controversiële maar belangrijke historische verzamelobjecten die een turbulente periode in de Europese geschiedenis documenteren."
        }
      },
      {
        question: {
          en: "What is a 'pattern coin'?",
          es: "¿Qué es una 'moneda de patrón'?",
          de: "Was ist eine 'Mustermünze'?",
          nl: "Wat is een 'patroonmunt'?"
        },
        options: [
          { en: "A trial or experimental coin not issued for circulation", es: "Una moneda de prueba o experimental no emitida para circulación", de: "Eine Test- oder Versuchsmünze, die nicht für den Umlauf ausgegeben wurde", nl: "Een proef- of experimentele munt niet uitgegeven voor circulatie" },
          { en: "A coin with decorative patterns", es: "Una moneda con patrones decorativos", de: "Eine Münze mit dekorativen Mustern", nl: "Een munt met decoratieve patronen" },
          { en: "A commemorative coin", es: "Una moneda conmemorativa", de: "Eine Gedenkmünze", nl: "Een herdenkingsmunt" },
          { en: "A foreign currency", es: "Una moneda extranjera", de: "Eine Fremdwährung", nl: "Een buitenlandse valuta" }
        ],
        correct: 0,
        explanation: {
          en: "Pattern coins are trial or experimental pieces struck by mints to test new designs, denominations, or metals before official production. They were never intended for circulation and are extremely rare. Pattern coins provide insights into the design process and rejected concepts, making them highly valuable to advanced collectors.",
          es: "Las monedas de patrón son piezas de prueba o experimentales acuñadas por casas de moneda para probar nuevos diseños, denominaciones o metales antes de la producción oficial. Nunca fueron destinadas para circulación y son extremadamente raras. Las monedas de patrón proporcionan información sobre el proceso de diseño y conceptos rechazados, haciéndolas muy valiosas para coleccionistas avanzados.",
          de: "Mustermünzen sind Test- oder Versuchsstücke, die von Münzstätten geprägt werden, um neue Designs, Nennwerte oder Metalle vor der offiziellen Produktion zu testen. Sie waren nie für den Umlauf bestimmt und sind extrem selten. Mustermünzen geben Einblicke in den Designprozess und abgelehnte Konzepte, was sie für fortgeschrittene Sammler sehr wertvoll macht.",
          nl: "Patroonmunten zijn proef- of experimentele stukken geslagen door munten om nieuwe ontwerpen, denominaties of metalen te testen voor officiële productie. Ze waren nooit bedoeld voor circulatie en zijn extreem zeldzaam. Patroonmunten bieden inzichten in het ontwerpproces en afgewezen concepten, waardoor ze zeer waardevol zijn voor gevorderde verzamelaars."
        }
      },
      {
        question: {
          en: "What is the 'Hutt River Province Dollar'?",
          es: "¿Qué es el 'Dólar de la Provincia del Río Hutt'?",
          de: "Was ist der 'Hutt River Province Dollar'?",
          nl: "Wat is de 'Hutt River Province Dollar'?"
        },
        options: [
          { en: "Currency of a former Australian micronation", es: "Moneda de una antigua micronación australiana", de: "Währung einer ehemaligen australischen Mikronation", nl: "Valuta van een voormalige Australische micronatie" },
          { en: "New Zealand regional money", es: "Dinero regional de Nueva Zelanda", de: "Neuseeländisches Regionalgeld", nl: "Nieuw-Zeelands regionaal geld" },
          { en: "Canadian provincial currency", es: "Moneda provincial canadiense", de: "Kanadische Provinzwährung", nl: "Canadese provinciale valuta" },
          { en: "American territorial notes", es: "Billetes territoriales americanos", de: "Amerikanische Territorialscheine", nl: "Amerikaanse territoriale biljetten" }
        ],
        correct: 0,
        explanation: {
          en: "The Hutt River Province Dollar was the currency of the Principality of Hutt River, a micronation in Western Australia that existed from 1970 to 2020. The micronation issued its own coins and banknotes, which are now collectibles representing one of the longest-running micronations. These items are valued for their novelty and historical significance.",
          es: "El Dólar de la Provincia del Río Hutt fue la moneda del Principado del Río Hutt, una micronación en Australia Occidental que existió de 1970 a 2020. La micronación emitió sus propias monedas y billetes, que ahora son coleccionables que representan una de las micronaciones más duraderas. Estos artículos son valorados por su novedad y significado histórico.",
          de: "Der Hutt River Province Dollar war die Währung des Fürstentums Hutt River, einer Mikronation in Westaustralien, die von 1970 bis 2020 existierte. Die Mikronation gab ihre eigenen Münzen und Banknoten aus, die jetzt Sammlerstücke sind, die eine der am längsten bestehenden Mikronationen repräsentieren. Diese Gegenstände sind für ihre Neuheit und historische Bedeutung geschätzt.",
          nl: "De Hutt River Province Dollar was de valuta van het Prinsdom Hutt River, een micronatie in West-Australië die bestond van 1970 tot 2020. De micronatie gaf zijn eigen munten en bankbiljetten uit, die nu verzamelobjecten zijn die een van de langstlopende micronaties vertegenwoordigen. Deze items worden gewaardeerd om hun nieuwigheid en historische betekenis."
        }
      },
      {
        question: {
          en: "What are 'POW camp money' or 'Lagergeld'?",
          es: "¿Qué es el 'dinero de campo de prisioneros de guerra' o 'Lagergeld'?",
          de: "Was ist 'Kriegsgefangenenlager-Geld' oder 'Lagergeld'?",
          nl: "Wat is 'krijgsgevangenkampgeld' of 'Lagergeld'?"
        },
        options: [
          { en: "Currency used in prisoner of war camps during WWII", es: "Moneda usada en campos de prisioneros de guerra durante la Segunda Guerra Mundial", de: "Währung, die in Kriegsgefangenenlagern während des Zweiten Weltkriegs verwendet wurde", nl: "Valuta gebruikt in krijgsgevangenenkampen tijdens WOII" },
          { en: "German military medals", es: "Medallas militares alemanas", de: "Deutsche Militärmedaillen", nl: "Duitse militaire medailles" },
          { en: "War bonds", es: "Bonos de guerra", de: "Kriegsanleihen", nl: "Oorlogsobligaties" },
          { en: "Concentration camp identification tags", es: "Etiquetas de identificación de campos de concentración", de: "Konzentrationslager-Identifikationsmarken", nl: "Concentratiekamp identificatietags" }
        ],
        correct: 0,
        explanation: {
          en: "POW camp money (Lagergeld in German) was special currency issued for use within prisoner of war camps during WWII. Prisoners used this money to purchase items from camp canteens. These notes are now historical collectibles that document the conditions and economy of wartime prison camps.",
          es: "El dinero de campo de prisioneros de guerra (Lagergeld en alemán) fue moneda especial emitida para uso dentro de campos de prisioneros de guerra durante la Segunda Guerra Mundial. Los prisioneros usaban este dinero para comprar artículos de cantinas del campo. Estos billetes son ahora coleccionables históricos que documentan las condiciones y economía de los campos de prisioneros en tiempos de guerra.",
          de: "Kriegsgefangenenlager-Geld (Lagergeld) war eine spezielle Währung, die für den Gebrauch in Kriegsgefangenenlagern während des Zweiten Weltkriegs ausgegeben wurde. Gefangene nutzten dieses Geld, um Artikel aus Lagerkantinen zu kaufen. Diese Scheine sind jetzt historische Sammlerstücke, die die Bedingungen und Wirtschaft von Kriegsgefangenenlagern dokumentieren.",
          nl: "Krijgsgevangenkampgeld (Lagergeld in het Duits) was speciale valuta uitgegeven voor gebruik binnen krijgsgevangenenkampen tijdens WOII. Gevangenen gebruikten dit geld om items te kopen van kampkantines. Deze biljetten zijn nu historische verzamelobjecten die de omstandigheden en economie van oorlogstijd gevangenenkampen documenteren."
        }
      }
    ]
  };

  // Export for use in the quiz application
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level2;
  } else if (typeof window !== 'undefined') {
    window.level2 = level2;
  }
})();