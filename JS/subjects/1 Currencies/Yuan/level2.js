// Quiz Level 2: Currencies - Yuan (Easy)
(function() {
  const level2 = {
    name: {
      en: "Yuan - Easy",
      es: "Yuan - Fácil",
      de: "Yuan - Einfach",
      nl: "Yuan - Gemakkelijk"
    },
    questions: [
      {
        question: {
          en: "What is the main difference between CNY and CNH?",
          es: "¿Cuál es la principal diferencia entre CNY y CNH?",
          de: "Was ist der Hauptunterschied zwischen CNY und CNH?",
          nl: "Wat is het belangrijkste verschil tussen CNY en CNH?"
        },
        options: [
          { en: "CNY is onshore, CNH is offshore Yuan", es: "CNY es onshore, CNH es Yuan offshore", de: "CNY ist Onshore, CNH ist Offshore Yuan", nl: "CNY is onshore, CNH is offshore Yuan" },
          { en: "CNY is for cash, CNH is digital", es: "CNY es para efectivo, CNH es digital", de: "CNY ist für Bargeld, CNH ist digital", nl: "CNY is voor contant geld, CNH is digitaal" },
          { en: "CNY is old code, CNH is new", es: "CNY es código viejo, CNH es nuevo", de: "CNY ist alter Code, CNH ist neu", nl: "CNY is oude code, CNH is nieuw" },
          { en: "There is no difference", es: "No hay diferencia", de: "Es gibt keinen Unterschied", nl: "Er is geen verschil" }
        ],
        correct: 0,
        explanation: {
          en: "CNY refers to onshore Yuan traded within mainland China under capital controls, while CNH refers to offshore Yuan traded freely in international markets, primarily Hong Kong.",
          es: "CNY se refiere al Yuan onshore comercializado dentro de China continental bajo controles de capital, mientras que CNH se refiere al Yuan offshore comercializado libremente en mercados internacionales, principalmente Hong Kong.",
          de: "CNY bezieht sich auf Onshore-Yuan, der innerhalb Festlandchinas unter Kapitalkontrollen gehandelt wird, während CNH sich auf Offshore-Yuan bezieht, der frei auf internationalen Märkten gehandelt wird, hauptsächlich in Hongkong.",
          nl: "CNY verwijst naar onshore Yuan verhandeld binnen vasteland China onder kapitaalcontroles, terwijl CNH verwijst naar offshore Yuan vrij verhandeld op internationale markten, voornamelijk Hong Kong."
        }
      },
      {
        question: {
          en: "Which initiative has been crucial for Yuan internationalization since 2013?",
          es: "¿Qué iniciativa ha sido crucial para la internacionalización del Yuan desde 2013?",
          de: "Welche Initiative war seit 2013 entscheidend für die Yuan-Internationalisierung?",
          nl: "Welk initiatief is cruciaal geweest voor Yuan internationalisatie sinds 2013?"
        },
        options: [
          { en: "Asian Infrastructure Investment Bank", es: "Banco Asiático de Inversión en Infraestructura", de: "Asiatische Infrastruktur-Investmentbank", nl: "Aziatische Infrastructuur Investeringsbank" },
          { en: "Belt and Road Initiative (BRI)", es: "Iniciativa del Cinturón y la Ruta (BRI)", de: "Belt and Road Initiative (BRI)", nl: "Belt and Road Initiative (BRI)" },
          { en: "Shanghai Cooperation Organization", es: "Organización de Cooperación de Shanghai", de: "Shanghai-Organisation für Zusammenarbeit", nl: "Shanghai Samenwerkingsorganisatie" },
          { en: "BRICS Development Bank", es: "Banco de Desarrollo BRICS", de: "BRICS-Entwicklungsbank", nl: "BRICS Ontwikkelingsbank" }
        ],
        correct: 1,
        explanation: {
          en: "The Belt and Road Initiative (BRI), launched in 2013, has been crucial for Yuan internationalization by promoting Yuan usage in trade and investment across participating countries.",
          es: "La Iniciativa del Cinturón y la Ruta (BRI), lanzada en 2013, ha sido crucial para la internacionalización del Yuan al promover el uso del Yuan en comercio e inversión a través de países participantes.",
          de: "Die Belt and Road Initiative (BRI), die 2013 gestartet wurde, war entscheidend für die Yuan-Internationalisierung, indem sie die Yuan-Nutzung im Handel und bei Investitionen in teilnehmenden Ländern förderte.",
          nl: "Het Belt and Road Initiative (BRI), gelanceerd in 2013, is cruciaal geweest voor Yuan internationalisatie door Yuan-gebruik in handel en investeringen over deelnemende landen te bevorderen."
        }
      },
      {
        question: {
          en: "What was the Yuan's exchange rate regime from 1994 to 2005?",
          es: "¿Cuál fue el régimen de tipo de cambio del Yuan de 1994 a 2005?",
          de: "Was war das Wechselkursregime des Yuan von 1994 bis 2005?",
          nl: "Wat was het wisselkoersregime van de Yuan van 1994 tot 2005?"
        },
        options: [
          { en: "Free floating", es: "Flotación libre", de: "Frei schwankend", nl: "Vrij zwevend" },
          { en: "Fixed peg to US Dollar at 8.28", es: "Paridad fija al Dólar estadounidense en 8.28", de: "Feste Bindung an US-Dollar bei 8,28", nl: "Vaste koppeling aan US Dollar op 8,28" },
          { en: "Basket peg", es: "Paridad a canasta", de: "Korbanbindung", nl: "Mandkoppeling" },
          { en: "Gold standard", es: "Patrón oro", de: "Goldstandard", nl: "Goudstandaard" }
        ],
        correct: 1,
        explanation: {
          en: "From 1994 to 2005, the Yuan was pegged to the US Dollar at a fixed rate of approximately 8.28 Yuan per Dollar, providing stability but limiting flexibility.",
          es: "De 1994 a 2005, el Yuan estuvo vinculado al Dólar estadounidense a una tasa fija de aproximadamente 8.28 Yuan por Dólar, proporcionando estabilidad pero limitando flexibilidad.",
          de: "Von 1994 bis 2005 war der Yuan an den US-Dollar zu einem festen Kurs von etwa 8,28 Yuan pro Dollar gebunden, was Stabilität bot, aber die Flexibilität einschränkte.",
          nl: "Van 1994 tot 2005 was de Yuan gekoppeld aan de US Dollar tegen een vaste koers van ongeveer 8,28 Yuan per Dollar, wat stabiliteit bood maar flexibiliteit beperkte."
        }
      },
      {
        question: {
          en: "Which country was the first to establish a Yuan clearing bank outside China?",
          es: "¿Qué país fue el primero en establecer un banco de compensación de Yuan fuera de China?",
          de: "Welches Land war das erste, das eine Yuan-Clearingbank außerhalb Chinas einrichtete?",
          nl: "Welk land was het eerste om een Yuan clearingbank buiten China op te richten?"
        },
        options: [
          { en: "United Kingdom", es: "Reino Unido", de: "Vereinigtes Königreich", nl: "Verenigd Koninkrijk" },
          { en: "Singapore", es: "Singapur", de: "Singapur", nl: "Singapore" },
          { en: "Hong Kong", es: "Hong Kong", de: "Hongkong", nl: "Hong Kong" },
          { en: "Germany", es: "Alemania", de: "Deutschland", nl: "Duitsland" }
        ],
        correct: 2,
        explanation: {
          en: "Hong Kong was the first to establish a Yuan clearing bank outside mainland China in 2003, becoming the primary offshore Yuan trading center.",
          es: "Hong Kong fue el primero en establecer un banco de compensación de Yuan fuera de China continental en 2003, convirtiéndose en el principal centro de comercio de Yuan offshore.",
          de: "Hongkong war das erste Land, das 2003 eine Yuan-Clearingbank außerhalb Festlandchinas einrichtete und zum primären Offshore-Yuan-Handelszentrum wurde.",
          nl: "Hong Kong was het eerste om een Yuan clearingbank buiten vasteland China op te richten in 2003, en werd het primaire offshore Yuan handelscentrum."
        }
      },
      {
        question: {
          en: "What does DCEP stand for in relation to China's digital currency?",
          es: "¿Qué significa DCEP en relación con la moneda digital de China?",
          de: "Was bedeutet DCEP in Bezug auf Chinas digitale Währung?",
          nl: "Waar staat DCEP voor in relatie tot China's digitale valuta?"
        },
        options: [
          { en: "Digital Currency Electronic Payment", es: "Pago Electrónico de Moneda Digital", de: "Digital Currency Electronic Payment", nl: "Digital Currency Electronic Payment" },
          { en: "Decentralized Currency Exchange Platform", es: "Plataforma de Intercambio de Moneda Descentralizada", de: "Dezentrale Währungsaustauschplattform", nl: "Gedecentraliseerd Valuta-uitwisselingsplatform" },
          { en: "Digital China Economic Program", es: "Programa Económico Digital de China", de: "Digitales China Wirtschaftsprogramm", nl: "Digitaal China Economisch Programma" },
          { en: "Distributed Currency Electronic Protocol", es: "Protocolo Electrónico de Moneda Distribuida", de: "Verteiltes Währungsprotokoll", nl: "Gedistribueerd Valuta Elektronisch Protocol" }
        ],
        correct: 0,
        explanation: {
          en: "DCEP stands for Digital Currency Electronic Payment, which is the official name for China's central bank digital currency project.",
          es: "DCEP significa Pago Electrónico de Moneda Digital, que es el nombre oficial para el proyecto de moneda digital del banco central de China.",
          de: "DCEP steht für Digital Currency Electronic Payment, was der offizielle Name für Chinas Zentralbank-Digital-Währungsprojekt ist.",
          nl: "DCEP staat voor Digital Currency Electronic Payment, wat de officiële naam is voor China's centrale bank digitale valuta project."
        }
      },
      {
        question: {
          en: "Which major economic reform allowed foreign companies to issue Yuan bonds in China?",
          es: "¿Qué reforma económica importante permitió a las empresas extranjeras emitir bonos en Yuan en China?",
          de: "Welche große Wirtschaftsreform erlaubte ausländischen Unternehmen, Yuan-Anleihen in China zu begeben?",
          nl: "Welke grote economische hervorming stond buitenlandse bedrijven toe om Yuan obligaties uit te geven in China?"
        },
        options: [
          { en: "Panda Bond market opening", es: "Apertura del mercado de Bonos Panda", de: "Öffnung des Panda-Anleihen-Marktes", nl: "Panda Obligatie markt opening" },
          { en: "Qualified Foreign Institutional Investor (QFII)", es: "Inversor Institucional Extranjero Calificado (QFII)", de: "Qualifizierter Ausländischer Institutioneller Investor (QFII)", nl: "Gekwalificeerde Buitenlandse Institutionele Belegger (QFII)" },
          { en: "Shanghai-Hong Kong Stock Connect", es: "Conexión de Acciones Shanghai-Hong Kong", de: "Shanghai-Hongkong Stock Connect", nl: "Shanghai-Hong Kong Stock Connect" },
          { en: "Free Trade Zone establishment", es: "Establecimiento de Zona de Libre Comercio", de: "Einrichtung der Freihandelszone", nl: "Vrije Handelszone oprichting" }
        ],
        correct: 0,
        explanation: {
          en: "The Panda Bond market opening allowed foreign companies and institutions to issue Yuan-denominated bonds in China's domestic market, promoting Yuan internationalization.",
          es: "La apertura del mercado de Bonos Panda permitió a empresas e instituciones extranjeras emitir bonos denominados en Yuan en el mercado doméstico de China, promoviendo la internacionalización del Yuan.",
          de: "Die Öffnung des Panda-Anleihen-Marktes erlaubte ausländischen Unternehmen und Institutionen, Yuan-denominierte Anleihen auf Chinas Inlandsmarkt zu begeben, was die Yuan-Internationalisierung förderte.",
          nl: "De Panda Obligatie markt opening stond buitenlandse bedrijven en instellingen toe om Yuan-gedenomineerde obligaties uit te geven op China's binnenlandse markt, wat Yuan internationalisatie bevorderde."
        }
      },
      {
        question: {
          en: "What percentage of global foreign exchange reserves does the Yuan currently represent approximately?",
          es: "¿Qué porcentaje de las reservas de divisas globales representa actualmente el Yuan aproximadamente?",
          de: "Welchen Prozentsatz der globalen Devisenreserven repräsentiert der Yuan derzeit ungefähr?",
          nl: "Welk percentage van de wereldwijde valutareserves vertegenwoordigt de Yuan momenteel ongeveer?"
        },
        options: [
          { en: "Around 2-3%", es: "Alrededor del 2-3%", de: "Etwa 2-3%", nl: "Rond de 2-3%" },
          { en: "Around 10-12%", es: "Alrededor del 10-12%", de: "Etwa 10-12%", nl: "Rond de 10-12%" },
          { en: "Around 20-25%", es: "Alrededor del 20-25%", de: "Etwa 20-25%", nl: "Rond de 20-25%" },
          { en: "Around 30-35%", es: "Alrededor del 30-35%", de: "Etwa 30-35%", nl: "Rond de 30-35%" }
        ],
        correct: 0,
        explanation: {
          en: "The Yuan currently represents around 2-3% of global foreign exchange reserves, a significant increase from near zero a decade ago but still much lower than the US Dollar's ~60%.",
          es: "El Yuan actualmente representa alrededor del 2-3% de las reservas de divisas globales, un aumento significativo desde cerca de cero hace una década pero aún mucho menor que el ~60% del Dólar estadounidense.",
          de: "Der Yuan repräsentiert derzeit etwa 2-3% der globalen Devisenreserven, eine signifikante Steigerung von nahezu null vor einem Jahrzehnt, aber immer noch viel niedriger als die ~60% des US-Dollars.",
          nl: "De Yuan vertegenwoordigt momenteel ongeveer 2-3% van de wereldwijde valutareserves, een significante toename van bijna nul een decennium geleden maar nog steeds veel lager dan de ~60% van de US Dollar."
        }
      },
      {
        question: {
          en: "Which mechanism allows foreign central banks to access Yuan liquidity directly from the PBOC?",
          es: "¿Qué mecanismo permite a los bancos centrales extranjeros acceder a liquidez en Yuan directamente del PBOC?",
          de: "Welcher Mechanismus ermöglicht es ausländischen Zentralbanken, direkt von der PBOC auf Yuan-Liquidität zuzugreifen?",
          nl: "Welk mechanisme stelt buitenlandse centrale banken in staat om direct toegang te krijgen tot Yuan liquiditeit van de PBOC?"
        },
        options: [
          { en: "Currency swap agreements", es: "Acuerdos de intercambio de monedas", de: "Währungsswap-Abkommen", nl: "Valutaswapovereenkomsten" },
          { en: "Special Drawing Rights (SDR)", es: "Derechos Especiales de Giro (DEG)", de: "Sonderziehungsrechte (SZR)", nl: "Speciale Trekkingsrechten (SDR)" },
          { en: "Repo agreements", es: "Acuerdos repo", de: "Repo-Vereinbarungen", nl: "Repo overeenkomsten" },
          { en: "Letter of credit facilities", es: "Facilidades de carta de crédito", de: "Akkreditiv-Fazilitäten", nl: "Kredietbrief faciliteiten" }
        ],
        correct: 0,
        explanation: {
          en: "Currency swap agreements between the PBOC and foreign central banks allow direct access to Yuan liquidity, supporting international trade and reducing reliance on US Dollar funding.",
          es: "Los acuerdos de intercambio de monedas entre el PBOC y bancos centrales extranjeros permiten acceso directo a liquidez en Yuan, apoyando el comercio internacional y reduciendo la dependencia del financiamiento en Dólar estadounidense.",
          de: "Währungsswap-Abkommen zwischen der PBOC und ausländischen Zentralbanken ermöglichen direkten Zugang zu Yuan-Liquidität und unterstützen den internationalen Handel, während sie die Abhängigkeit von US-Dollar-Finanzierung reduzieren.",
          nl: "Valutaswapovereenkomsten tussen de PBOC en buitenlandse centrale banken stellen directe toegang tot Yuan liquiditeit mogelijk, wat internationale handel ondersteunt en afhankelijkheid van US Dollar financiering vermindert."
        }
      },
      {
        question: {
          en: "What is the 'dim sum bond' market?",
          es: "¿Qué es el mercado de bonos 'dim sum'?",
          de: "Was ist der 'Dim Sum Bond'-Markt?",
          nl: "Wat is de 'dim sum obligatie' markt?"
        },
        options: [
          { en: "Yuan bonds issued outside mainland China", es: "Bonos en Yuan emitidos fuera de China continental", de: "Yuan-Anleihen, die außerhalb Festlandchinas begeben werden", nl: "Yuan obligaties uitgegeven buiten vasteland China" },
          { en: "Bonds backed by Chinese restaurant chains", es: "Bonos respaldados por cadenas de restaurantes chinos", de: "Anleihen, die von chinesischen Restaurantketten unterstützt werden", nl: "Obligaties ondersteund door Chinese restaurantketens" },
          { en: "Short-term commercial paper in Yuan", es: "Papel comercial a corto plazo en Yuan", de: "Kurzfristige Handelspapiere in Yuan", nl: "Korte termijn commercieel papier in Yuan" },
          { en: "Municipal bonds from Chinese cities", es: "Bonos municipales de ciudades chinas", de: "Kommunalanleihen chinesischer Städte", nl: "Gemeentelijke obligaties van Chinese steden" }
        ],
        correct: 0,
        explanation: {
          en: "The 'dim sum bond' market refers to Yuan-denominated bonds issued outside mainland China, primarily in Hong Kong, allowing international investors to access Yuan exposure.",
          es: "El mercado de bonos 'dim sum' se refiere a bonos denominados en Yuan emitidos fuera de China continental, principalmente en Hong Kong, permitiendo a inversionistas internacionales acceder a exposición al Yuan.",
          de: "Der 'Dim Sum Bond'-Markt bezieht sich auf Yuan-denominierte Anleihen, die außerhalb Festlandchinas, hauptsächlich in Hongkong, begeben werden und internationalen Investoren Yuan-Exposition ermöglichen.",
          nl: "De 'dim sum obligatie' markt verwijst naar Yuan-gedenomineerde obligaties uitgegeven buiten vasteland China, voornamelijk in Hong Kong, wat internationale beleggers Yuan blootstelling mogelijk maakt."
        }
      },
      {
        question: {
          en: "When did the Yuan become part of the IMF's Special Drawing Rights (SDR) basket?",
          es: "¿Cuándo se convirtió el Yuan en parte de la canasta de Derechos Especiales de Giro (DEG) del FMI?",
          de: "Wann wurde der Yuan Teil des Korbs der Sonderziehungsrechte (SZR) des IWF?",
          nl: "Wanneer werd de Yuan onderdeel van de IMF's Speciale Trekkingsrechten (SDR) mand?"
        },
        options: [
          { en: "2014", es: "2014", de: "2014", nl: "2014" },
          { en: "2016", es: "2016", de: "2016", nl: "2016" },
          { en: "2018", es: "2018", de: "2018", nl: "2018" },
          { en: "2020", es: "2020", de: "2020", nl: "2020" }
        ],
        correct: 1,
        explanation: {
          en: "The Yuan became part of the IMF's SDR basket in October 2016, joining the US Dollar, Euro, Japanese Yen, and British Pound as a reserve currency.",
          es: "El Yuan se convirtió en parte de la canasta DEG del FMI en octubre de 2016, uniéndose al Dólar estadounidense, Euro, Yen japonés y Libra británica como moneda de reserva.",
          de: "Der Yuan wurde im Oktober 2016 Teil des SZR-Korbs des IWF und gesellte sich zum US-Dollar, Euro, japanischen Yen und britischen Pfund als Reservewährung.",
          nl: "De Yuan werd onderdeel van de IMF's SDR mand in oktober 2016, en voegde zich bij de US Dollar, Euro, Japanse Yen en Britse Pond als reservevaluta."
        }
      },
      {
        question: {
          en: "What is the Cross-Border Interbank Payment System (CIPS)?",
          es: "¿Qué es el Sistema de Pagos Interbancarios Transfronterizos (CIPS)?",
          de: "Was ist das Cross-Border Interbank Payment System (CIPS)?",
          nl: "Wat is het Cross-Border Interbank Payment System (CIPS)?"
        },
        options: [
          { en: "China's alternative to SWIFT for Yuan payments", es: "Alternativa de China a SWIFT para pagos en Yuan", de: "Chinas Alternative zu SWIFT für Yuan-Zahlungen", nl: "China's alternatief voor SWIFT voor Yuan betalingen" },
          { en: "A cryptocurrency exchange platform", es: "Una plataforma de intercambio de criptomonedas", de: "Eine Kryptowährungsaustauschplattform", nl: "Een cryptocurrency exchange platform" },
          { en: "China's domestic payment clearing system", es: "Sistema de compensación de pagos domésticos de China", de: "Chinas inländisches Zahlungsverrechnungssystem", nl: "China's binnenlandse betaal clearing systeem" },
          { en: "An international trade finance facility", es: "Una facilidad de financiamiento de comercio internacional", de: "Eine internationale Handelsfinanzierungsfazilität", nl: "Een internationale handelsfinancieringsfaciliteit" }
        ],
        correct: 0,
        explanation: {
          en: "CIPS is China's cross-border payment system for Yuan transactions, designed as an alternative to SWIFT and reducing dependence on the US Dollar-dominated financial infrastructure.",
          es: "CIPS es el sistema de pagos transfronterizos de China para transacciones en Yuan, diseñado como alternativa a SWIFT y reduciendo la dependencia de la infraestructura financiera dominada por el Dólar estadounidense.",
          de: "CIPS ist Chinas grenzüberschreitendes Zahlungssystem für Yuan-Transaktionen, das als Alternative zu SWIFT konzipiert wurde und die Abhängigkeit von der US-Dollar-dominierten Finanzinfrastruktur reduziert.",
          nl: "CIPS is China's grensoverschrijdende betalingssysteem voor Yuan transacties, ontworpen als alternatief voor SWIFT en vermindert afhankelijkheid van de US Dollar-gedomineerde financiële infrastructuur."
        }
      },
      {
        question: {
          en: "Which factor has been most important in driving Yuan internationalization?",
          es: "¿Qué factor ha sido más importante para impulsar la internacionalización del Yuan?",
          de: "Welcher Faktor war am wichtigsten für die Förderung der Yuan-Internationalisierung?",
          nl: "Welke factor is het belangrijkst geweest in het aandrijven van Yuan internationalisatie?"
        },
        options: [
          { en: "High interest rates", es: "Altas tasas de interés", de: "Hohe Zinssätze", nl: "Hoge rentetarieven" },
          { en: "China's large trade volumes", es: "Los grandes volúmenes de comercio de China", de: "Chinas große Handelsvolumen", nl: "China's grote handelsvolumes" },
          { en: "Currency speculation", es: "Especulación de monedas", de: "Währungsspekulation", nl: "Valutaspeculatie" },
          { en: "Oil price fluctuations", es: "Fluctuaciones en el precio del petróleo", de: "Ölpreisschwankungen", nl: "Olieprijsfluctuaties" }
        ],
        correct: 1,
        explanation: {
          en: "China's position as the world's largest trading nation has been the most important driver of Yuan internationalization, as trade partners increasingly use Yuan for bilateral trade settlement.",
          es: "La posición de China como la nación comercial más grande del mundo ha sido el impulsor más importante de la internacionalización del Yuan, ya que los socios comerciales utilizan cada vez más el Yuan para la liquidación de comercio bilateral.",
          de: "Chinas Position als weltgrößte Handelsnation war der wichtigste Treiber der Yuan-Internationalisierung, da Handelspartner zunehmend den Yuan für die bilaterale Handelsabwicklung verwenden.",
          nl: "China's positie als 's werelds grootste handelsnatie is de belangrijkste drijvende kracht geweest achter Yuan internationalisatie, omdat handelspartners steeds meer de Yuan gebruiken voor bilaterale handelsafwikkeling."
        }
      },
      {
        question: {
          en: "What is the Shanghai Gold Exchange's significance for the Yuan?",
          es: "¿Cuál es la importancia de la Bolsa de Oro de Shanghai para el Yuan?",
          de: "Was ist die Bedeutung der Shanghai Gold Exchange für den Yuan?",
          nl: "Wat is de betekenis van de Shanghai Gold Exchange voor de Yuan?"
        },
        options: [
          { en: "It only trades gold futures contracts", es: "Solo comercia contratos de futuros de oro", de: "Es handelt nur mit Gold-Futures-Kontrakten", nl: "Het handelt alleen in goud futures contracten" },
          { en: "It allows Yuan-denominated gold trading", es: "Permite el comercio de oro denominado en Yuan", de: "Es ermöglicht Yuan-denominierten Goldhandel", nl: "Het maakt Yuan-gedenomineerde goudhandel mogelijk" },
          { en: "It is China's stock exchange for mining companies", es: "Es la bolsa de valores de China para empresas mineras", de: "Es ist Chinas Börse für Bergbauunternehmen", nl: "Het is China's beurs voor mijnbouwbedrijven" },
          { en: "It manages China's gold reserves", es: "Gestiona las reservas de oro de China", de: "Es verwaltet Chinas Goldreserven", nl: "Het beheert China's goudreserves" }
        ],
        correct: 1,
        explanation: {
          en: "The Shanghai Gold Exchange allows Yuan-denominated gold trading, providing an alternative to US Dollar-based gold markets and supporting Yuan's role as a store of value.",
          es: "La Bolsa de Oro de Shanghai permite el comercio de oro denominado en Yuan, proporcionando una alternativa a los mercados de oro basados en Dólar estadounidense y apoyando el papel del Yuan como reserva de valor.",
          de: "Die Shanghai Gold Exchange ermöglicht Yuan-denominierten Goldhandel und bietet eine Alternative zu US-Dollar-basierten Goldmärkten, wodurch die Rolle des Yuan als Wertaufbewahrungsmittel unterstützt wird.",
          nl: "De Shanghai Gold Exchange maakt Yuan-gedenomineerde goudhandel mogelijk, wat een alternatief biedt voor US Dollar-gebaseerde goudmarkten en de rol van de Yuan als waardeopslag ondersteunt."
        }
      },
      {
        question: {
          en: "What challenge does capital account convertibility pose for Yuan internationalization?",
          es: "¿Qué desafío presenta la convertibilidad de la cuenta de capital para la internacionalización del Yuan?",
          de: "Welche Herausforderung stellt die Kapitalkontokonvertibilität für die Yuan-Internationalisierung dar?",
          nl: "Welke uitdaging vormt kapitaalrekening convertibiliteit voor Yuan internationalisatie?"
        },
        options: [
          { en: "It makes the currency too volatile", es: "Hace que la moneda sea demasiado volátil", de: "Es macht die Währung zu volatil", nl: "Het maakt de valuta te volatiel" },
          { en: "It limits free flow of Yuan for investment", es: "Limita el flujo libre de Yuan para inversión", de: "Es begrenzt den freien Fluss von Yuan für Investitionen", nl: "Het beperkt de vrije stroom van Yuan voor investeringen" },
          { en: "It increases inflation risks", es: "Aumenta los riesgos de inflación", de: "Es erhöht Inflationsrisiken", nl: "Het verhoogt inflatierisico's" },
          { en: "It weakens monetary policy effectiveness", es: "Debilita la efectividad de la política monetaria", de: "Es schwächt die Wirksamkeit der Geldpolitik", nl: "Het verzwakt de effectiviteit van monetair beleid" }
        ],
        correct: 1,
        explanation: {
          en: "China maintains capital controls that limit the free flow of Yuan for investment purposes, creating a barrier to full internationalization as investors prefer freely convertible currencies.",
          es: "China mantiene controles de capital que limitan el flujo libre de Yuan para propósitos de inversión, creando una barrera para la internacionalización completa ya que los inversionistas prefieren monedas libremente convertibles.",
          de: "China behält Kapitalkontrollen bei, die den freien Fluss von Yuan für Investitionszwecke begrenzen und eine Barriere für die vollständige Internationalisierung schaffen, da Investoren frei konvertierbare Währungen bevorzugen.",
          nl: "China handhaaft kapitaalcontroles die de vrije stroom van Yuan voor investeringsdoeleinden beperken, wat een barrière creëert voor volledige internationalisatie omdat beleggers de voorkeur geven aan vrij converteerbare valuta's."
        }
      },
      {
        question: {
          en: "Which sector has seen the most significant Yuan internationalization progress?",
          es: "¿Qué sector ha visto el progreso más significativo en la internacionalización del Yuan?",
          de: "In welchem Sektor gab es die bedeutendsten Fortschritte bei der Yuan-Internationalisierung?",
          nl: "Welke sector heeft de meest significante Yuan internationalisatie vooruitgang gezien?"
        },
        options: [
          { en: "Tourism and travel", es: "Turismo y viajes", de: "Tourismus und Reisen", nl: "Toerisme en reizen" },
          { en: "International trade settlement", es: "Liquidación de comercio internacional", de: "Internationale Handelsabwicklung", nl: "Internationale handelsafwikkeling" },
          { en: "Real estate investment", es: "Inversión inmobiliaria", de: "Immobilieninvestition", nl: "Vastgoedinvestering" },
          { en: "Consumer retail", es: "Venta minorista de consumo", de: "Verbrauchereinzelhandel", nl: "Consumentendetailhandel" }
        ],
        correct: 1,
        explanation: {
          en: "International trade settlement has seen the most significant Yuan internationalization progress, with many of China's trading partners now conducting bilateral trade in Yuan.",
          es: "La liquidación de comercio internacional ha visto el progreso más significativo en la internacionalización del Yuan, con muchos de los socios comerciales de China ahora realizando comercio bilateral en Yuan.",
          de: "Die internationale Handelsabwicklung hat die bedeutendsten Fortschritte bei der Yuan-Internationalisierung erfahren, wobei viele von Chinas Handelspartnern nun bilateralen Handel in Yuan abwickeln.",
          nl: "Internationale handelsafwikkeling heeft de meest significante Yuan internationalisatie vooruitgang gezien, met veel van China's handelspartners die nu bilaterale handel in Yuan uitvoeren."
        }
      },
      {
        question: {
          en: "What is the typical daily trading volume of Yuan in global forex markets?",
          es: "¿Cuál es el volumen de comercio diario típico del Yuan en los mercados forex globales?",
          de: "Wie hoch ist das typische tägliche Handelsvolumen des Yuan auf den globalen Devisenmärkten?",
          nl: "Wat is het typische dagelijkse handelsvolume van de Yuan in wereldwijde forexmarkten?"
        },
        options: [
          { en: "Around $500 billion", es: "Alrededor de $500 mil millones", de: "Etwa 500 Milliarden Dollar", nl: "Rond de $500 miljard" },
          { en: "Around $300 billion", es: "Alrededor de $300 mil millones", de: "Etwa 300 Milliarden Dollar", nl: "Rond de $300 miljard" },
          { en: "Around $150 billion", es: "Alrededor de $150 mil millones", de: "Etwa 150 Milliarden Dollar", nl: "Rond de $150 miljard" },
          { en: "Around $50 billion", es: "Alrededor de $50 mil millones", de: "Etwa 50 Milliarden Dollar", nl: "Rond de $50 miljard" }
        ],
        correct: 2,
        explanation: {
          en: "The Yuan's daily trading volume in global forex markets is around $150 billion, making it the 8th most traded currency, but still far behind major currencies like USD, EUR, and JPY.",
          es: "El volumen de comercio diario del Yuan en los mercados forex globales es alrededor de $150 mil millones, convirtiéndolo en la 8ª moneda más comercializada, pero aún muy por debajo de las principales monedas como USD, EUR y JPY.",
          de: "Das tägliche Handelsvolumen des Yuan auf den globalen Devisenmärkten beträgt etwa 150 Milliarden Dollar, was ihn zur 8. meistgehandelten Währung macht, aber immer noch weit hinter Hauptwährungen wie USD, EUR und JPY zurückliegend.",
          nl: "Het dagelijkse handelsvolume van de Yuan in wereldwijde forexmarkten is rond de $150 miljard, wat het de 8e meest verhandelde valuta maakt, maar nog steeds ver achter grote valuta's zoals USD, EUR en JPY."
        }
      },
      {
        question: {
          en: "Which policy tool does the PBOC use most frequently to manage Yuan exchange rates?",
          es: "¿Qué herramienta de política usa el PBOC más frecuentemente para gestionar los tipos de cambio del Yuan?",
          de: "Welches politische Instrument nutzt die PBOC am häufigsten zur Verwaltung der Yuan-Wechselkurse?",
          nl: "Welk beleidsinstrument gebruikt de PBOC het meest frequent om Yuan wisselkoersen te beheren?"
        },
        options: [
          { en: "Interest rate changes", es: "Cambios de tasa de interés", de: "Zinssatzänderungen", nl: "Rentetarief veranderingen" },
          { en: "Daily reference rate setting", es: "Establecimiento de tasa de referencia diaria", de: "Tägliche Referenzkursfestsetzung", nl: "Dagelijkse referentiekoers vaststelling" },
          { en: "Reserve requirement changes", es: "Cambios de requerimientos de reserva", de: "Änderungen der Mindestreserveanforderungen", nl: "Reservevereiste veranderingen" },
          { en: "Government bond purchases", es: "Compras de bonos gubernamentales", de: "Staatsanleihenkäufe", nl: "Staatsoblgatieaankopen" }
        ],
        correct: 1,
        explanation: {
          en: "The PBOC sets a daily reference rate (middle rate) for the Yuan against the US Dollar, around which the currency can fluctuate within a specific band, making this their primary exchange rate management tool.",
          es: "El PBOC establece una tasa de referencia diaria (tasa media) para el Yuan contra el Dólar estadounidense, alrededor de la cual la moneda puede fluctuar dentro de una banda específica, convirtiendo esto en su herramienta principal de gestión de tipo de cambio.",
          de: "Die PBOC setzt einen täglichen Referenzkurs (Mittelkurs) für den Yuan gegenüber dem US-Dollar fest, um den die Währung innerhalb eines bestimmten Bandes schwanken kann, was dies zu ihrem primären Wechselkurs-Management-Tool macht.",
          nl: "De PBOC stelt een dagelijkse referentiekoers (middenkoers) vast voor de Yuan tegen de US Dollar, waarbinnen de valuta binnen een specifieke band kan fluctueren, wat dit hun primaire wisselkoersbeheerinstrument maakt."
        }
      },
      {
        question: {
          en: "What is the maximum daily fluctuation band currently allowed for the Yuan?",
          es: "¿Cuál es la banda de fluctuación diaria máxima actualmente permitida para el Yuan?",
          de: "Was ist die derzeit maximal zulässige tägliche Schwankungsbreite für den Yuan?",
          nl: "Wat is de maximale dagelijkse fluctuatieband die momenteel toegestaan is voor de Yuan?"
        },
        options: [
          { en: "±1%", es: "±1%", de: "±1%", nl: "±1%" },
          { en: "±2%", es: "±2%", de: "±2%", nl: "±2%" },
          { en: "±3%", es: "±3%", de: "±3%", nl: "±3%" },
          { en: "±5%", es: "±5%", de: "±5%", nl: "±5%" }
        ],
        correct: 1,
        explanation: {
          en: "The Yuan is currently allowed to fluctuate within a ±2% band around the PBOC's daily reference rate, having been gradually widened from ±0.3% in 2007 to provide more market flexibility.",
          es: "El Yuan actualmente puede fluctuar dentro de una banda de ±2% alrededor de la tasa de referencia diaria del PBOC, habiendo sido gradualmente ampliada desde ±0.3% en 2007 para proporcionar más flexibilidad de mercado.",
          de: "Der Yuan darf derzeit innerhalb eines ±2%-Bandes um den täglichen Referenzkurs der PBOC schwanken, nachdem es schrittweise von ±0,3% im Jahr 2007 erweitert wurde, um mehr Marktflexibilität zu bieten.",
          nl: "De Yuan mag momenteel fluctueren binnen een ±2% band rond de dagelijkse referentiekoers van de PBOC, nadat het geleidelijk is uitgebreid van ±0,3% in 2007 om meer marktflexibiliteit te bieden."
        }
      },
      {
        question: {
          en: "Which country was the first to establish a Yuan clearing bank outside of Greater China?",
          es: "¿Qué país fue el primero en establecer un banco de compensación de Yuan fuera de Gran China?",
          de: "Welches Land etablierte als erstes eine Yuan-Clearingbank außerhalb von Groß-China?",
          nl: "Welk land vestigde als eerste een Yuan clearing bank buiten Groot-China?"
        },
        options: [
          { en: "United Kingdom (London)", es: "Reino Unido (Londres)", de: "Vereinigtes Königreich (London)", nl: "Verenigd Koninkrijk (Londen)" },
          { en: "Singapore", es: "Singapur", de: "Singapur", nl: "Singapore" },
          { en: "United States (New York)", es: "Estados Unidos (Nueva York)", de: "Vereinigte Staaten (New York)", nl: "Verenigde Staten (New York)" },
          { en: "Germany (Frankfurt)", es: "Alemania (Frankfurt)", de: "Deutschland (Frankfurt)", nl: "Duitsland (Frankfurt)" }
        ],
        correct: 1,
        explanation: {
          en: "Singapore established the first Yuan clearing bank outside Greater China in 2013, followed by London, Frankfurt, and other financial centers, facilitating Yuan transactions in their respective regions.",
          es: "Singapur estableció el primer banco de compensación de Yuan fuera de Gran China en 2013, seguido por Londres, Frankfurt y otros centros financieros, facilitando transacciones en Yuan en sus respectivas regiones.",
          de: "Singapur etablierte 2013 die erste Yuan-Clearingbank außerhalb von Groß-China, gefolgt von London, Frankfurt und anderen Finanzzentren, was Yuan-Transaktionen in ihren jeweiligen Regionen erleichterte.",
          nl: "Singapore vestigde in 2013 de eerste Yuan clearing bank buiten Groot-China, gevolgd door Londen, Frankfurt en andere financiële centra, wat Yuan transacties in hun respectieve regio's faciliteerde."
        }
      },
      {
        question: {
          en: "What significant milestone did the Yuan achieve in 2016 regarding international reserves?",
          es: "¿Qué hito significativo logró el Yuan en 2016 con respecto a las reservas internacionales?",
          de: "Welchen bedeutenden Meilenstein erreichte der Yuan 2016 in Bezug auf internationale Reserven?",
          nl: "Welke belangrijke mijlpaal bereikte de Yuan in 2016 met betrekking tot internationale reserves?"
        },
        options: [
          { en: "Became world's number one reserve currency", es: "Se convirtió en la moneda de reserva número uno del mundo", de: "Wurde zur weltweiten Nummer-eins-Reservewährung", nl: "Werd 's werelds nummer één reservevaluta" },
          { en: "Was included in the IMF's Special Drawing Rights (SDR) basket", es: "Fue incluido en la canasta de Derechos Especiales de Giro (DEG) del FMI", de: "Wurde in den Währungskorb der Sonderziehungsrechte (SZR) des IWF aufgenommen", nl: "Werd opgenomen in het IMF's Special Drawing Rights (SDR) mandje" },
          { en: "Replaced the US Dollar in Asian trade", es: "Reemplazó al Dólar estadounidense en el comercio asiático", de: "Ersetzte den US-Dollar im asiatischen Handel", nl: "Verving de US Dollar in Aziatische handel" },
          { en: "Achieved full convertibility", es: "Logró convertibilidad completa", de: "Erreichte volle Konvertibilität", nl: "Bereikte volledige convertibiliteit" }
        ],
        correct: 1,
        explanation: {
          en: "In 2016, the Yuan was officially included in the IMF's SDR basket alongside the US Dollar, Euro, Japanese Yen, and British Pound, marking a major milestone in its internationalization and recognition as a global reserve currency.",
          es: "En 2016, el Yuan fue oficialmente incluido en la canasta de DEG del FMI junto con el Dólar estadounidense, Euro, Yen japonés y Libra británica, marcando un hito importante en su internacionalización y reconocimiento como moneda de reserva global.",
          de: "2016 wurde der Yuan offiziell in den SZR-Korb des IWF aufgenommen, zusammen mit US-Dollar, Euro, japanischem Yen und britischem Pfund, was einen wichtigen Meilenstein in seiner Internationalisierung und Anerkennung als globale Reservewährung markierte.",
          nl: "In 2016 werd de Yuan officieel opgenomen in het SDR-mandje van het IMF naast de US Dollar, Euro, Japanse Yen en Britse Pond, wat een belangrijke mijlpaal markeerde in zijn internationalisatie en erkenning als wereldwijde reservevaluta."
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
