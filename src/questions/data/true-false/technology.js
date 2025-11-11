// True/False Questions - Technology (Easy-Medium)
// Computers, internet, gadgets, tech history
(function() {

  const technologyQuestions = [
    {
      id: 'tech_1',
      question: {
        en: "Wi-Fi stands for 'Wireless Fidelity'.",
        es: "Wi-Fi significa 'Fidelidad Inalámbrica'.",
        de: "Wi-Fi steht für 'Wireless Fidelity'.",
        nl: "Wi-Fi staat voor 'Wireless Fidelity'."
      },
      isTrue: false,
      explanation: {
        en: "Wi-Fi doesn't actually stand for anything. It's a trademarked brand name, not an acronym for 'Wireless Fidelity'.",
        es: "Wi-Fi en realidad no significa nada. Es un nombre de marca registrado, no un acrónimo de 'Fidelidad Inalámbrica'.",
        de: "Wi-Fi steht eigentlich für nichts. Es ist ein eingetragener Markenname, kein Akronym für 'Wireless Fidelity'.",
        nl: "Wi-Fi staat eigenlijk nergens voor. Het is een geregistreerde merknaam, geen acroniem voor 'Wireless Fidelity'."
      }
    },
    {
      id: 'tech_2',
      question: {
        en: "USB-C cables can transfer data in both directions, unlike older USB cables.",
        es: "Los cables USB-C pueden transferir datos en ambas direcciones, a diferencia de los cables USB antiguos.",
        de: "USB-C-Kabel können Daten in beide Richtungen übertragen, im Gegensatz zu älteren USB-Kabeln.",
        nl: "USB-C-kabels kunnen gegevens in beide richtingen overdragen, in tegenstelling tot oudere USB-kabels."
      },
      isTrue: true,
      explanation: {
        en: "USB-C is reversible and supports bidirectional data transfer, while older USB types had directional connectors and one-way host-device communication.",
        es: "USB-C es reversible y admite transferencia de datos bidireccional, mientras que los tipos USB más antiguos tenían conectores direccionales.",
        de: "USB-C ist umkehrbar und unterstützt bidirektionale Datenübertragung, während ältere USB-Typen Richtungsstecker hatten.",
        nl: "USB-C is omkeerbaar en ondersteunt bidirectionele gegevensoverdracht, terwijl oudere USB-typen directionele connectoren hadden."
      }
    },
    {
      id: 'tech_3',
      question: {
        en: "Google was originally called 'BackRub'.",
        es: "Google se llamaba originalmente 'BackRub'.",
        de: "Google hieß ursprünglich 'BackRub'.",
        nl: "Google heette oorspronkelijk 'BackRub'."
      },
      isTrue: true,
      explanation: {
        en: "Before being renamed Google, the search engine was called BackRub because it analyzed backlinks to determine site importance.",
        es: "Antes de ser renombrado Google, el motor de búsqueda se llamaba BackRub porque analizaba enlaces entrantes para determinar la importancia del sitio.",
        de: "Bevor es in Google umbenannt wurde, hieß die Suchmaschine BackRub, weil sie Backlinks analysierte, um die Bedeutung von Websites zu bestimmen.",
        nl: "Voordat het werd omgedoopt tot Google, heette de zoekmachine BackRub omdat het backlinks analyseerde om de belangrijkheid van sites te bepalen."
      }
    },
    {
      id: 'tech_4',
      question: {
        en: "The first computer mouse was made of wood.",
        es: "El primer ratón de computadora fue hecho de madera.",
        de: "Die erste Computermaus war aus Holz.",
        nl: "De eerste computermuis was van hout."
      },
      isTrue: true,
      explanation: {
        en: "The first computer mouse, invented by Douglas Engelbart in 1964, had a wooden shell.",
        es: "El primer ratón de computadora, inventado por Douglas Engelbart en 1964, tenía una carcasa de madera.",
        de: "Die erste Computermaus, erfunden von Douglas Engelbart 1964, hatte ein Holzgehäuse.",
        nl: "De eerste computermuis, uitgevonden door Douglas Engelbart in 1964, had een houten behuizing."
      }
    },
    {
      id: 'tech_5',
      question: {
        en: "Email was invented after the World Wide Web.",
        es: "El correo electrónico fue inventado después de la World Wide Web.",
        de: "E-Mail wurde nach dem World Wide Web erfunden.",
        nl: "E-mail werd uitgevonden na het World Wide Web."
      },
      isTrue: false,
      explanation: {
        en: "Email was invented in 1971, while the World Wide Web was created in 1989. Email came first.",
        es: "El correo electrónico fue inventado en 1971, mientras que la World Wide Web fue creada en 1989. El correo electrónico fue primero.",
        de: "E-Mail wurde 1971 erfunden, während das World Wide Web 1989 erstellt wurde. E-Mail kam zuerst.",
        nl: "E-mail werd uitgevonden in 1971, terwijl het World Wide Web in 1989 werd gemaakt. E-mail kwam eerst."
      }
    },
    {
      id: 'tech_6',
      question: {
        en: "Apple was founded before Microsoft.",
        es: "Apple fue fundada antes que Microsoft.",
        de: "Apple wurde vor Microsoft gegründet.",
        nl: "Apple werd vóór Microsoft opgericht."
      },
      isTrue: false,
      explanation: {
        en: "Microsoft was founded on April 4, 1975, while Apple was founded on April 1, 1976. Microsoft came first by almost a year.",
        es: "Microsoft fue fundada el 4 de abril de 1975, mientras que Apple fue fundada el 1 de abril de 1976. Microsoft fue primero por casi un año.",
        de: "Microsoft wurde am 4. April 1975 gegründet, während Apple am 1. April 1976 gegründet wurde. Microsoft kam fast ein Jahr früher.",
        nl: "Microsoft werd opgericht op 4 april 1975, terwijl Apple werd opgericht op 1 april 1976. Microsoft was bijna een jaar eerder."
      }
    },
    {
      id: 'tech_7',
      question: {
        en: "The first iPhone had a front-facing camera.",
        es: "El primer iPhone tenía una cámara frontal.",
        de: "Das erste iPhone hatte eine Frontkamera.",
        nl: "De eerste iPhone had een frontcamera."
      },
      isTrue: false,
      explanation: {
        en: "The first iPhone, released in 2007, did not have a front-facing camera. This feature was added with the iPhone 4 in 2010.",
        es: "El primer iPhone, lanzado en 2007, no tenía cámara frontal. Esta característica se agregó con el iPhone 4 en 2010.",
        de: "Das erste iPhone, das 2007 veröffentlicht wurde, hatte keine Frontkamera. Diese Funktion wurde mit dem iPhone 4 im Jahr 2010 hinzugefügt.",
        nl: "De eerste iPhone, uitgebracht in 2007, had geen frontcamera. Deze functie werd toegevoegd met de iPhone 4 in 2010."
      }
    },
    {
      id: 'tech_8',
      question: {
        en: "Bluetooth is named after a Viking king.",
        es: "Bluetooth lleva el nombre de un rey vikingo.",
        de: "Bluetooth ist nach einem Wikingerkönig benannt.",
        nl: "Bluetooth is genoemd naar een Vikingnkoning."
      },
      isTrue: true,
      explanation: {
        en: "Bluetooth is named after Harald Bluetooth, a 10th-century Viking king who united Denmark and Norway.",
        es: "Bluetooth lleva el nombre de Harald Bluetooth, un rey vikingo del siglo X que unió Dinamarca y Noruega.",
        de: "Bluetooth ist nach Harald Blauzahn benannt, einem Wikingerkönig aus dem 10. Jahrhundert, der Dänemark und Norwegen vereinte.",
        nl: "Bluetooth is genoemd naar Harald Blauwvand, een 10e-eeuwse Vikingnkoning die Denemarken en Noorwegen verenigd heeft."
      }
    },
    {
      id: 'tech_9',
      question: {
        en: "RAM is a type of permanent computer storage.",
        es: "RAM es un tipo de almacenamiento permanente de computadora.",
        de: "RAM ist eine Art permanenter Computerspeicher.",
        nl: "RAM is een type permanente computeropslag."
      },
      isTrue: false,
      explanation: {
        en: "RAM (Random Access Memory) is temporary storage that loses all data when the computer is turned off. Hard drives provide permanent storage.",
        es: "RAM (Memoria de Acceso Aleatorio) es almacenamiento temporal que pierde todos los datos cuando se apaga la computadora. Los discos duros proporcionan almacenamiento permanente.",
        de: "RAM (Random Access Memory) ist temporärer Speicher, der alle Daten verliert, wenn der Computer ausgeschaltet wird. Festplatten bieten permanenten Speicher.",
        nl: "RAM (Random Access Memory) is tijdelijke opslag die alle gegevens verliest wanneer de computer wordt uitgeschakeld. Harde schijven bieden permanente opslag."
      }
    },
    {
      id: 'tech_10',
      question: {
        en: "The '@' symbol in email addresses is called 'at sign'.",
        es: "El símbolo '@' en las direcciones de correo electrónico se llama 'arroba'.",
        de: "Das '@'-Symbol in E-Mail-Adressen wird 'at-Zeichen' genannt.",
        nl: "Het '@'-symbool in e-mailadressen wordt 'apenstaartje' genoemd."
      },
      isTrue: true,
      explanation: {
        en: "The '@' symbol is commonly called the 'at sign' in English. In email, it separates the username from the domain name.",
        es: "El símbolo '@' se llama comúnmente 'arroba' en español. En el correo electrónico, separa el nombre de usuario del nombre de dominio.",
        de: "Das '@'-Symbol wird im Englischen allgemein 'at-Zeichen' genannt. In E-Mails trennt es den Benutzernamen vom Domainnamen.",
        nl: "Het '@'-symbool wordt in het Engels gewoonlijk 'at sign' genoemd. In e-mail scheidt het de gebruikersnaam van de domeinnaam."
      }
    },
    {
      id: 'tech_11',
      question: {
        en: "A byte consists of 8 bits.",
        es: "Un byte consiste en 8 bits.",
        de: "Ein Byte besteht aus 8 Bits.",
        nl: "Een byte bestaat uit 8 bits."
      },
      isTrue: true,
      explanation: {
        en: "A byte is indeed made up of 8 bits. A bit is the smallest unit of data in computing.",
        es: "Un byte está compuesto por 8 bits. Un bit es la unidad de datos más pequeña en informática.",
        de: "Ein Byte besteht tatsächlich aus 8 Bits. Ein Bit ist die kleinste Dateneinheit in der Informatik.",
        nl: "Een byte bestaat inderdaad uit 8 bits. Een bit is de kleinste gegevenseenheid in computers."
      }
    },
    {
      id: 'tech_12',
      question: {
        en: "YouTube was created before Facebook.",
        es: "YouTube fue creado antes que Facebook.",
        de: "YouTube wurde vor Facebook erstellt.",
        nl: "YouTube werd voor Facebook gemaakt."
      },
      isTrue: false,
      explanation: {
        en: "Facebook was founded in 2004, while YouTube was created in 2005. Facebook came first.",
        es: "Facebook fue fundado en 2004, mientras que YouTube fue creado en 2005. Facebook fue primero.",
        de: "Facebook wurde 2004 gegründet, während YouTube 2005 erstellt wurde. Facebook kam zuerst.",
        nl: "Facebook werd opgericht in 2004, terwijl YouTube in 2005 werd gemaakt. Facebook kwam eerst."
      }
    },
    {
      id: 'tech_13',
      question: {
        en: "The first computer virus was created in the 1970s.",
        es: "El primer virus informático fue creado en la década de 1970.",
        de: "Der erste Computervirus wurde in den 1970er Jahren erstellt.",
        nl: "Het eerste computervirus werd gemaakt in de jaren 1970."
      },
      isTrue: true,
      explanation: {
        en: "The Creeper virus, considered the first computer virus, was created in 1971 by Bob Thomas.",
        es: "El virus Creeper, considerado el primer virus informático, fue creado en 1971 por Bob Thomas.",
        de: "Der Creeper-Virus, der als erster Computervirus gilt, wurde 1971 von Bob Thomas erstellt.",
        nl: "Het Creeper-virus, beschouwd als het eerste computervirus, werd gemaakt in 1971 door Bob Thomas."
      }
    },
    {
      id: 'tech_14',
      question: {
        en: "GPS stands for Global Positioning System.",
        es: "GPS significa Sistema de Posicionamiento Global.",
        de: "GPS steht für Global Positioning System.",
        nl: "GPS staat voor Global Positioning System."
      },
      isTrue: true,
      explanation: {
        en: "GPS stands for Global Positioning System, a satellite-based navigation system.",
        es: "GPS significa Sistema de Posicionamiento Global, un sistema de navegación basado en satélites.",
        de: "GPS steht für Global Positioning System, ein satellitengestütztes Navigationssystem.",
        nl: "GPS staat voor Global Positioning System, een satellietgebaseerd navigatiesysteem."
      }
    },
    {
      id: 'tech_15',
      question: {
        en: "Linux is a type of operating system.",
        es: "Linux es un tipo de sistema operativo.",
        de: "Linux ist eine Art Betriebssystem.",
        nl: "Linux is een type besturingssysteem."
      },
      isTrue: true,
      explanation: {
        en: "Linux is an open-source operating system kernel that forms the basis for many operating systems.",
        es: "Linux es un núcleo de sistema operativo de código abierto que forma la base de muchos sistemas operativos.",
        de: "Linux ist ein Open-Source-Betriebssystem-Kernel, der die Grundlage für viele Betriebssysteme bildet.",
        nl: "Linux is een open-source besturingssysteemkernel die de basis vormt voor veel besturingssystemen."
      }
    },
    {
      id: 'tech_16',
      question: {
        en: "The first website is still online today.",
        es: "El primer sitio web todavía está en línea hoy.",
        de: "Die erste Website ist heute noch online.",
        nl: "De eerste website is vandaag nog steeds online."
      },
      isTrue: true,
      explanation: {
        en: "The first website, created by Tim Berners-Lee in 1991, has been restored and is still accessible online.",
        es: "El primer sitio web, creado por Tim Berners-Lee en 1991, ha sido restaurado y todavía es accesible en línea.",
        de: "Die erste Website, erstellt von Tim Berners-Lee 1991, wurde wiederhergestellt und ist immer noch online zugänglich.",
        nl: "De eerste website, gemaakt door Tim Berners-Lee in 1991, is gerestaureerd en is nog steeds online toegankelijk."
      }
    },
    {
      id: 'tech_17',
      question: {
        en: "HTML is a programming language.",
        es: "HTML es un lenguaje de programación.",
        de: "HTML ist eine Programmiersprache.",
        nl: "HTML is een programmeertaal."
      },
      isTrue: false,
      explanation: {
        en: "HTML is a markup language, not a programming language. It's used to structure content on the web but doesn't have programming logic.",
        es: "HTML es un lenguaje de marcado, no un lenguaje de programación. Se usa para estructurar contenido en la web pero no tiene lógica de programación.",
        de: "HTML ist eine Auszeichnungssprache, keine Programmiersprache. Es wird verwendet, um Inhalte im Web zu strukturieren, hat aber keine Programmierlogik.",
        nl: "HTML is een opmaaktaal, geen programmeertaal. Het wordt gebruikt om inhoud op het web te structureren maar heeft geen programmeerlogica."
      }
    },
    {
      id: 'tech_18',
      question: {
        en: "The term 'bug' in computing comes from an actual insect.",
        es: "El término 'bug' en informática proviene de un insecto real.",
        de: "Der Begriff 'Bug' in der Informatik stammt von einem echten Insekt.",
        nl: "De term 'bug' in computers komt van een echt insect."
      },
      isTrue: true,
      explanation: {
        en: "In 1947, a moth was found in a computer at Harvard, leading to the term 'bug' for computer errors. The term was used before, but this incident popularized it.",
        es: "En 1947, se encontró una polilla en una computadora en Harvard, lo que llevó al término 'bug' para errores informáticos. El término se usaba antes, pero este incidente lo popularizó.",
        de: "1947 wurde eine Motte in einem Computer in Harvard gefunden, was zum Begriff 'Bug' für Computerfehler führte. Der Begriff wurde vorher verwendet, aber dieser Vorfall popularisierte ihn.",
        nl: "In 1947 werd een mot gevonden in een computer in Harvard, wat leidde tot de term 'bug' voor computerfouten. De term werd eerder gebruikt, maar dit incident maakte het populair."
      }
    },
    {
      id: 'tech_19',
      question: {
        en: "Instagram was acquired by Facebook.",
        es: "Instagram fue adquirido por Facebook.",
        de: "Instagram wurde von Facebook übernommen.",
        nl: "Instagram werd overgenomen door Facebook."
      },
      isTrue: true,
      explanation: {
        en: "Facebook (now Meta) acquired Instagram in 2012 for approximately $1 billion.",
        es: "Facebook (ahora Meta) adquirió Instagram en 2012 por aproximadamente $1 mil millones.",
        de: "Facebook (jetzt Meta) erwarb Instagram 2012 für etwa 1 Milliarde Dollar.",
        nl: "Facebook (nu Meta) nam Instagram over in 2012 voor ongeveer $1 miljard."
      }
    },
    {
      id: 'tech_20',
      question: {
        en: "4K resolution means 4000 pixels wide.",
        es: "La resolución 4K significa 4000 píxeles de ancho.",
        de: "4K-Auflösung bedeutet 4000 Pixel breit.",
        nl: "4K-resolutie betekent 4000 pixels breed."
      },
      isTrue: true,
      explanation: {
        en: "4K resolution is approximately 4000 pixels wide (3840×2160 for consumer displays), hence the name '4K'.",
        es: "La resolución 4K es de aproximadamente 4000 píxeles de ancho (3840×2160 para pantallas de consumo), de ahí el nombre '4K'.",
        de: "4K-Auflösung ist ungefähr 4000 Pixel breit (3840×2160 für Verbraucherdisplays), daher der Name '4K'.",
        nl: "4K-resolutie is ongeveer 4000 pixels breed (3840×2160 voor consumentendisplays), vandaar de naam '4K'."
      }
    },
    {
      id: 'tech_21',
      question: {
        en: "Netflix started as a DVD rental service.",
        es: "Netflix comenzó como un servicio de alquiler de DVD.",
        de: "Netflix begann als DVD-Verleihservice.",
        nl: "Netflix begon als een dvd-verhuurservice."
      },
      isTrue: true,
      explanation: {
        en: "Netflix was founded in 1997 as a DVD rental-by-mail service before transitioning to streaming.",
        es: "Netflix fue fundada en 1997 como un servicio de alquiler de DVD por correo antes de pasar al streaming.",
        de: "Netflix wurde 1997 als DVD-Verleih per Post gegründet, bevor es zum Streaming überging.",
        nl: "Netflix werd opgericht in 1997 als een dvd-verhuurservice per post voordat het overging op streaming."
      }
    },
    {
      id: 'tech_22',
      question: {
        en: "The World Wide Web and the Internet are the same thing.",
        es: "La World Wide Web y el Internet son la misma cosa.",
        de: "Das World Wide Web und das Internet sind dasselbe.",
        nl: "Het World Wide Web en het internet zijn hetzelfde."
      },
      isTrue: false,
      explanation: {
        en: "The Internet is the global network of computers, while the World Wide Web is a service that runs on the Internet using HTTP.",
        es: "Internet es la red global de computadoras, mientras que la World Wide Web es un servicio que se ejecuta en Internet usando HTTP.",
        de: "Das Internet ist das globale Netzwerk von Computern, während das World Wide Web ein Dienst ist, der im Internet mit HTTP läuft.",
        nl: "Het internet is het wereldwijde netwerk van computers, terwijl het World Wide Web een service is die op het internet draait met HTTP."
      }
    },
    {
      id: 'tech_23',
      question: {
        en: "Cookies on websites are small text files.",
        es: "Las cookies en sitios web son pequeños archivos de texto.",
        de: "Cookies auf Websites sind kleine Textdateien.",
        nl: "Cookies op websites zijn kleine tekstbestanden."
      },
      isTrue: true,
      explanation: {
        en: "HTTP cookies are indeed small text files stored on your computer by websites to remember information about you.",
        es: "Las cookies HTTP son archivos de texto pequeños almacenados en tu computadora por sitios web para recordar información sobre ti.",
        de: "HTTP-Cookies sind tatsächlich kleine Textdateien, die von Websites auf Ihrem Computer gespeichert werden, um Informationen über Sie zu speichern.",
        nl: "HTTP-cookies zijn inderdaad kleine tekstbestanden die door websites op uw computer worden opgeslagen om informatie over u te onthouden."
      }
    },
    {
      id: 'tech_24',
      question: {
        en: "Domain names are case-sensitive.",
        es: "Los nombres de dominio distinguen entre mayúsculas y minúsculas.",
        de: "Domainnamen unterscheiden zwischen Groß- und Kleinschreibung.",
        nl: "Domeinnamen zijn hoofdlettergevoelig."
      },
      isTrue: false,
      explanation: {
        en: "Domain names are not case-sensitive. GOOGLE.COM, google.com, and GoOgLe.CoM all go to the same website.",
        es: "Los nombres de dominio no distinguen entre mayúsculas y minúsculas. GOOGLE.COM, google.com y GoOgLe.CoM van al mismo sitio.",
        de: "Domainnamen unterscheiden nicht zwischen Groß- und Kleinschreibung. GOOGLE.COM, google.com und GoOgLe.CoM führen zur selben Website.",
        nl: "Domeinnamen zijn niet hoofdlettergevoelig. GOOGLE.COM, google.com en GoOgLe.CoM gaan allemaal naar dezelfde website."
      }
    },
    {
      id: 'tech_25',
      question: {
        en: "SSD drives are faster than traditional hard drives.",
        es: "Las unidades SSD son más rápidas que los discos duros tradicionales.",
        de: "SSD-Laufwerke sind schneller als traditionelle Festplatten.",
        nl: "SSD-schijven zijn sneller dan traditionele harde schijven."
      },
      isTrue: true,
      explanation: {
        en: "Solid State Drives (SSDs) are significantly faster than traditional Hard Disk Drives (HDDs) because they have no moving parts.",
        es: "Las unidades de estado sólido (SSD) son significativamente más rápidas que las unidades de disco duro tradicionales (HDD) porque no tienen partes móviles.",
        de: "Solid State Drives (SSDs) sind deutlich schneller als traditionelle Festplatten (HDDs), da sie keine beweglichen Teile haben.",
        nl: "Solid State Drives (SSD's) zijn aanzienlijk sneller dan traditionele harde schijven (HDD's) omdat ze geen bewegende delen hebben."
      }
    },
    {
      id: 'tech_26',
      question: {
        en: "Amazon started as an online bookstore.",
        es: "Amazon comenzó como una librería en línea.",
        de: "Amazon begann als Online-Buchhandlung.",
        nl: "Amazon begon als een online boekwinkel."
      },
      isTrue: true,
      explanation: {
        en: "Amazon was founded in 1994 as an online bookstore before expanding to sell other products.",
        es: "Amazon fue fundada en 1994 como una librería en línea antes de expandirse para vender otros productos.",
        de: "Amazon wurde 1994 als Online-Buchhandlung gegründet, bevor es sich auf den Verkauf anderer Produkte ausdehnte.",
        nl: "Amazon werd opgericht in 1994 als een online boekwinkel voordat het uitbreidde naar de verkoop van andere producten."
      }
    },
    {
      id: 'tech_27',
      question: {
        en: "The first iPhone was released in 2005.",
        es: "El primer iPhone fue lanzado en 2005.",
        de: "Das erste iPhone wurde 2005 veröffentlicht.",
        nl: "De eerste iPhone werd uitgebracht in 2005."
      },
      isTrue: false,
      explanation: {
        en: "The first iPhone was released on June 29, 2007, not 2005.",
        es: "El primer iPhone fue lanzado el 29 de junio de 2007, no en 2005.",
        de: "Das erste iPhone wurde am 29. Juni 2007 veröffentlicht, nicht 2005.",
        nl: "De eerste iPhone werd uitgebracht op 29 juni 2007, niet in 2005."
      }
    },
    {
      id: 'tech_28',
      question: {
        en: "JavaScript and Java are the same programming language.",
        es: "JavaScript y Java son el mismo lenguaje de programación.",
        de: "JavaScript und Java sind dieselbe Programmiersprache.",
        nl: "JavaScript en Java zijn dezelfde programmeertaal."
      },
      isTrue: false,
      explanation: {
        en: "JavaScript and Java are completely different programming languages with different purposes and syntax, despite the similar names.",
        es: "JavaScript y Java son lenguajes de programación completamente diferentes con propósitos y sintaxis diferentes, a pesar de los nombres similares.",
        de: "JavaScript und Java sind völlig unterschiedliche Programmiersprachen mit unterschiedlichen Zwecken und Syntax, trotz der ähnlichen Namen.",
        nl: "JavaScript en Java zijn compleet verschillende programmeertalen met verschillende doeleinden en syntaxis, ondanks de vergelijkbare namen."
      }
    },
    {
      id: 'tech_29',
      question: {
        en: "Twitter's original name was 'twttr'.",
        es: "El nombre original de Twitter fue 'twttr'.",
        de: "Twitters ursprünglicher Name war 'twttr'.",
        nl: "De oorspronkelijke naam van Twitter was 'twttr'."
      },
      isTrue: true,
      explanation: {
        en: "Twitter was briefly called 'twttr' during its early development before getting its current name.",
        es: "Twitter se llamó brevemente 'twttr' durante su desarrollo inicial antes de obtener su nombre actual.",
        de: "Twitter hieß während seiner frühen Entwicklung kurzzeitig 'twttr', bevor es seinen heutigen Namen erhielt.",
        nl: "Twitter heette kort 'twttr' tijdens de vroege ontwikkeling voordat het zijn huidige naam kreeg."
      }
    },
    {
      id: 'tech_30',
      question: {
        en: "CAPTCHA stands for 'Completely Automated Public Turing test to tell Computers and Humans Apart'.",
        es: "CAPTCHA significa 'Prueba de Turing Pública Completamente Automatizada para Distinguir Computadoras y Humanos'.",
        de: "CAPTCHA steht für 'Completely Automated Public Turing test to tell Computers and Humans Apart'.",
        nl: "CAPTCHA staat voor 'Completely Automated Public Turing test to tell Computers and Humans Apart'."
      },
      isTrue: true,
      explanation: {
        en: "CAPTCHA is indeed an acronym for 'Completely Automated Public Turing test to tell Computers and Humans Apart'.",
        es: "CAPTCHA es efectivamente un acrónimo de 'Completely Automated Public Turing test to tell Computers and Humans Apart'.",
        de: "CAPTCHA ist tatsächlich ein Akronym für 'Completely Automated Public Turing test to tell Computers and Humans Apart'.",
        nl: "CAPTCHA is inderdaad een acroniem voor 'Completely Automated Public Turing test to tell Computers and Humans Apart'."
      }
    },
    {
      id: 'tech_31',
      question: {
        en: "The first computer was the size of a room.",
        es: "La primera computadora tenía el tamaño de una habitación.",
        de: "Der erste Computer war so groß wie ein Raum.",
        nl: "De eerste computer had de grootte van een kamer."
      },
      isTrue: true,
      explanation: {
        en: "Early computers like ENIAC (1945) were massive machines that filled entire rooms and weighed several tons.",
        es: "Las primeras computadoras como ENIAC (1945) eran máquinas masivas que llenaban habitaciones enteras y pesaban varias toneladas.",
        de: "Frühe Computer wie ENIAC (1945) waren massive Maschinen, die ganze Räume füllten und mehrere Tonnen wogen.",
        nl: "Vroege computers zoals ENIAC (1945) waren enorme machines die hele kamers vulden en meerdere tonnen wogen."
      }
    },
    {
      id: 'tech_32',
      question: {
        en: "PDF stands for Portable Document Format.",
        es: "PDF significa Formato de Documento Portátil.",
        de: "PDF steht für Portable Document Format.",
        nl: "PDF staat voor Portable Document Format."
      },
      isTrue: true,
      explanation: {
        en: "PDF stands for Portable Document Format, developed by Adobe to preserve document formatting across different platforms.",
        es: "PDF significa Formato de Documento Portátil, desarrollado por Adobe para preservar el formato de documentos en diferentes plataformas.",
        de: "PDF steht für Portable Document Format, entwickelt von Adobe, um die Dokumentformatierung plattformübergreifend zu erhalten.",
        nl: "PDF staat voor Portable Document Format, ontwikkeld door Adobe om documentopmaak op verschillende platforms te behouden."
      }
    },
    {
      id: 'tech_33',
      question: {
        en: "The computer mouse was invented at Apple.",
        es: "El ratón de computadora fue inventado en Apple.",
        de: "Die Computermaus wurde bei Apple erfunden.",
        nl: "De computermuis werd uitgevonden bij Apple."
      },
      isTrue: false,
      explanation: {
        en: "The computer mouse was invented by Douglas Engelbart at Stanford Research Institute in 1964, long before Apple popularized it.",
        es: "El ratón de computadora fue inventado por Douglas Engelbart en el Stanford Research Institute en 1964, mucho antes de que Apple lo popularizara.",
        de: "Die Computermaus wurde von Douglas Engelbart am Stanford Research Institute 1964 erfunden, lange bevor Apple sie populär machte.",
        nl: "De computermuis werd uitgevonden door Douglas Engelbart bij Stanford Research Institute in 1964, lang voordat Apple het populair maakte."
      }
    },
    {
      id: 'tech_34',
      question: {
        en: "Incognito mode makes you completely anonymous online.",
        es: "El modo incógnito te hace completamente anónimo en línea.",
        de: "Der Inkognito-Modus macht Sie online völlig anonymous.",
        nl: "Incognitomodus maakt je volledig anoniem online."
      },
      isTrue: false,
      explanation: {
        en: "Incognito mode only prevents your browser from saving your history locally. Your ISP, websites, and network can still track you.",
        es: "El modo incógnito solo evita que tu navegador guarde tu historial localmente. Tu ISP, sitios web y red aún pueden rastrearte.",
        de: "Der Inkognito-Modus verhindert nur, dass Ihr Browser Ihren Verlauf lokal speichert. Ihr ISP, Websites und Netzwerk können Sie weiterhin verfolgen.",
        nl: "Incognitomodus voorkomt alleen dat je browser je geschiedenis lokaal opslaat. Je ISP, websites en netwerk kunnen je nog steeds volgen."
      }
    },
    {
      id: 'tech_35',
      question: {
        en: "Moore's Law states that computer processing power doubles every two years.",
        es: "La Ley de Moore establece que la potencia de procesamiento informático se duplica cada dos años.",
        de: "Das Mooresche Gesetz besagt, dass sich die Rechenleistung alle zwei Jahre verdoppelt.",
        nl: "De Wet van Moore stelt dat de rekenkracht van computers elke twee jaar verdubbelt."
      },
      isTrue: true,
      explanation: {
        en: "Moore's Law, proposed by Gordon Moore in 1965, observes that the number of transistors on microchips doubles approximately every two years.",
        es: "La Ley de Moore, propuesta por Gordon Moore en 1965, observa que el número de transistores en microchips se duplica aproximadamente cada dos años.",
        de: "Das Mooresche Gesetz, vorgeschlagen von Gordon Moore 1965, beobachtet, dass sich die Anzahl der Transistoren auf Mikrochips etwa alle zwei Jahre verdoppelt.",
        nl: "De Wet van Moore, voorgesteld door Gordon Moore in 1965, observeert dat het aantal transistors op microchips ongeveer elke twee jaar verdubbelt."
      }
    },
    {
      id: 'tech_36',
      question: {
        en: "Cloud storage means your files are stored in the sky.",
        es: "El almacenamiento en la nube significa que tus archivos se almacenan en el cielo.",
        de: "Cloud-Speicher bedeutet, dass Ihre Dateien im Himmel gespeichert werden.",
        nl: "Cloudopslag betekent dat je bestanden in de lucht worden opgeslagen."
      },
      isTrue: false,
      explanation: {
        en: "Cloud storage means files are stored on remote servers in data centers, not literally in the sky or clouds.",
        es: "El almacenamiento en la nube significa que los archivos se almacenan en servidores remotos en centros de datos, no literalmente en el cielo o las nubes.",
        de: "Cloud-Speicher bedeutet, dass Dateien auf entfernten Servern in Rechenzentren gespeichert werden, nicht buchstäblich im Himmel oder in Wolken.",
        nl: "Cloudopslag betekent dat bestanden worden opgeslagen op externe servers in datacenters, niet letterlijk in de lucht of wolken."
      }
    },
    {
      id: 'tech_37',
      question: {
        en: "QR codes were invented in Japan.",
        es: "Los códigos QR fueron inventados en Japón.",
        de: "QR-Codes wurden in Japan erfunden.",
        nl: "QR-codes werden uitgevonden in Japan."
      },
      isTrue: true,
      explanation: {
        en: "QR codes were invented by Denso Wave, a Japanese company, in 1994 for tracking automotive parts.",
        es: "Los códigos QR fueron inventados por Denso Wave, una empresa japonesa, en 1994 para rastrear piezas automotrices.",
        de: "QR-Codes wurden von Denso Wave, einem japanischen Unternehmen, 1994 zur Verfolgung von Autoteilen erfunden.",
        nl: "QR-codes werden uitgevonden door Denso Wave, een Japans bedrijf, in 1994 voor het volgen van auto-onderdelen."
      }
    },
    {
      id: 'tech_38',
      question: {
        en: "Windows 1.0 was released before Mac OS.",
        es: "Windows 1.0 fue lanzado antes que Mac OS.",
        de: "Windows 1.0 wurde vor Mac OS veröffentlicht.",
        nl: "Windows 1.0 werd uitgebracht vóór Mac OS."
      },
      isTrue: false,
      explanation: {
        en: "Mac OS (System 1) was released in January 1984, while Windows 1.0 came out in November 1985.",
        es: "Mac OS (System 1) fue lanzado en enero de 1984, mientras que Windows 1.0 salió en noviembre de 1985.",
        de: "Mac OS (System 1) wurde im Januar 1984 veröffentlicht, während Windows 1.0 im November 1985 herauskam.",
        nl: "Mac OS (System 1) werd uitgebracht in januari 1984, terwijl Windows 1.0 uitkwam in november 1985."
      }
    },
    {
      id: 'tech_39',
      question: {
        en: "Spam email got its name from a Monty Python sketch.",
        es: "El correo spam obtuvo su nombre de un sketch de Monty Python.",
        de: "Spam-E-Mails erhielten ihren Namen von einem Monty Python-Sketch.",
        nl: "Spam-e-mail kreeg zijn naam van een Monty Python-sketch."
      },
      isTrue: true,
      explanation: {
        en: "The term 'spam' for unwanted email comes from a Monty Python sketch where 'spam' is repeated annoyingly, similar to unwanted messages.",
        es: "El término 'spam' para el correo no deseado proviene de un sketch de Monty Python donde 'spam' se repite de forma molesta, similar a los mensajes no deseados.",
        de: "Der Begriff 'Spam' für unerwünschte E-Mails stammt von einem Monty Python-Sketch, in dem 'Spam' nervig wiederholt wird, ähnlich wie unerwünschte Nachrichten.",
        nl: "De term 'spam' voor ongewenste e-mail komt van een Monty Python-sketch waarin 'spam' vervelend wordt herhaald, vergelijkbaar met ongewenste berichten."
      }
    },
    {
      id: 'tech_40',
      question: {
        en: "The first smartphone was the iPhone.",
        es: "El primer teléfono inteligente fue el iPhone.",
        de: "Das erste Smartphone war das iPhone.",
        nl: "De eerste smartphone was de iPhone."
      },
      isTrue: false,
      explanation: {
        en: "The IBM Simon, released in 1994, is considered the first smartphone. It had email, calendar, and touchscreen capabilities.",
        es: "El IBM Simon, lanzado en 1994, se considera el primer teléfono inteligente. Tenía capacidades de correo electrónico, calendario y pantalla táctil.",
        de: "Das IBM Simon, veröffentlicht 1994, gilt als das erste Smartphone. Es hatte E-Mail-, Kalender- und Touchscreen-Funktionen.",
        nl: "De IBM Simon, uitgebracht in 1994, wordt beschouwd als de eerste smartphone. Het had e-mail-, agenda- en touchscreen-mogelijkheden."
      }
    },
    {
      id: 'tech_41',
      question: {
        en: "VPN stands for Virtual Private Network.",
        es: "VPN significa Red Privada Virtual.",
        de: "VPN steht für Virtual Private Network.",
        nl: "VPN staat voor Virtual Private Network."
      },
      isTrue: true,
      explanation: {
        en: "VPN stands for Virtual Private Network, a technology that creates a secure connection over the internet.",
        es: "VPN significa Red Privada Virtual, una tecnología que crea una conexión segura a través de internet.",
        de: "VPN steht für Virtual Private Network, eine Technologie, die eine sichere Verbindung über das Internet herstellt.",
        nl: "VPN staat voor Virtual Private Network, een technologie die een beveiligde verbinding via internet creëert."
      }
    },
    {
      id: 'tech_42',
      question: {
        en: "The first video game was Pong.",
        es: "El primer videojuego fue Pong.",
        de: "Das erste Videospiel war Pong.",
        nl: "Het eerste videospel was Pong."
      },
      isTrue: false,
      explanation: {
        en: "While Pong (1972) was popular, earlier games existed like Tennis for Two (1958) and Spacewar! (1962).",
        es: "Aunque Pong (1972) fue popular, existían juegos anteriores como Tennis for Two (1958) y Spacewar! (1962).",
        de: "Während Pong (1972) beliebt war, gab es frühere Spiele wie Tennis for Two (1958) und Spacewar! (1962).",
        nl: "Hoewel Pong (1972) populair was, bestonden er eerdere games zoals Tennis for Two (1958) en Spacewar! (1962)."
      }
    },
    {
      id: 'tech_43',
      question: {
        en: "Alexa is Amazon's virtual assistant.",
        es: "Alexa es el asistente virtual de Amazon.",
        de: "Alexa ist Amazons virtueller Assistent.",
        nl: "Alexa is Amazon's virtuele assistent."
      },
      isTrue: true,
      explanation: {
        en: "Alexa is indeed Amazon's cloud-based virtual assistant, launched in 2014 with the Amazon Echo.",
        es: "Alexa es efectivamente el asistente virtual basado en la nube de Amazon, lanzado en 2014 con el Amazon Echo.",
        de: "Alexa ist tatsächlich Amazons cloudbasierter virtueller Assistent, der 2014 mit dem Amazon Echo auf den Markt kam.",
        nl: "Alexa is inderdaad Amazon's cloudgebaseerde virtuele assistent, gelanceerd in 2014 met de Amazon Echo."
      }
    },
    {
      id: 'tech_44',
      question: {
        en: "Cryptocurrency uses blockchain technology.",
        es: "La criptomoneda utiliza tecnología blockchain.",
        de: "Kryptowährung verwendet Blockchain-Technologie.",
        nl: "Cryptocurrency gebruikt blockchain-technologie."
      },
      isTrue: true,
      explanation: {
        en: "Cryptocurrencies like Bitcoin use blockchain technology as a distributed ledger to record transactions.",
        es: "Las criptomonedas como Bitcoin utilizan tecnología blockchain como un libro mayor distribuido para registrar transacciones.",
        de: "Kryptowährungen wie Bitcoin verwenden Blockchain-Technologie als verteiltes Hauptbuch zur Aufzeichnung von Transaktionen.",
        nl: "Cryptocurrencies zoals Bitcoin gebruiken blockchain-technologie als een gedistribueerd grootboek om transacties vast te leggen."
      }
    },
    {
      id: 'tech_45',
      question: {
        en: "LED stands for Light Emitting Diode.",
        es: "LED significa Diodo Emisor de Luz.",
        de: "LED steht für Light Emitting Diode.",
        nl: "LED staat voor Light Emitting Diode."
      },
      isTrue: true,
      explanation: {
        en: "LED stands for Light Emitting Diode, a semiconductor device that emits light when current flows through it.",
        es: "LED significa Diodo Emisor de Luz, un dispositivo semiconductor que emite luz cuando la corriente fluye a través de él.",
        de: "LED steht für Light Emitting Diode, ein Halbleiterbauelement, das Licht aussendet, wenn Strom durch es fließt.",
        nl: "LED staat voor Light Emitting Diode, een halfgeleiderapparaat dat licht uitzendt wanneer er stroom doorheen loopt."
      }
    },
    {
      id: 'tech_46',
      question: {
        en: "The Sony PlayStation was released before the Nintendo 64.",
        es: "La Sony PlayStation fue lanzada antes que la Nintendo 64.",
        de: "Die Sony PlayStation wurde vor dem Nintendo 64 veröffentlicht.",
        nl: "De Sony PlayStation werd uitgebracht vóór de Nintendo 64."
      },
      isTrue: true,
      explanation: {
        en: "The PlayStation was released in December 1994 (Japan) and September 1995 (US), while the Nintendo 64 came out in June 1996.",
        es: "La PlayStation fue lanzada en diciembre de 1994 (Japón) y septiembre de 1995 (EE.UU.), mientras que la Nintendo 64 salió en junio de 1996.",
        de: "Die PlayStation wurde im Dezember 1994 (Japan) und September 1995 (USA) veröffentlicht, während der Nintendo 64 im Juni 1996 herauskam.",
        nl: "De PlayStation werd uitgebracht in december 1994 (Japan) en september 1995 (VS), terwijl de Nintendo 64 uitkwam in juni 1996."
      }
    },
    {
      id: 'tech_47',
      question: {
        en: "OCR stands for Optical Character Recognition.",
        es: "OCR significa Reconocimiento Óptico de Caracteres.",
        de: "OCR steht für Optical Character Recognition.",
        nl: "OCR staat voor Optical Character Recognition."
      },
      isTrue: true,
      explanation: {
        en: "OCR stands for Optical Character Recognition, technology that converts images of text into editable text.",
        es: "OCR significa Reconocimiento Óptico de Caracteres, tecnología que convierte imágenes de texto en texto editable.",
        de: "OCR steht für Optical Character Recognition, Technologie, die Bilder von Text in bearbeitbaren Text umwandelt.",
        nl: "OCR staat voor Optical Character Recognition, technologie die afbeeldingen van tekst omzet in bewerkbare tekst."
      }
    },
    {
      id: 'tech_48',
      question: {
        en: "5G is faster than 4G mobile networks.",
        es: "5G es más rápido que las redes móviles 4G.",
        de: "5G ist schneller als 4G-Mobilfunknetze.",
        nl: "5G is sneller dan 4G-mobiele netwerken."
      },
      isTrue: true,
      explanation: {
        en: "5G networks offer significantly faster speeds and lower latency compared to 4G networks.",
        es: "Las redes 5G ofrecen velocidades significativamente más rápidas y menor latencia en comparación con las redes 4G.",
        de: "5G-Netze bieten deutlich höhere Geschwindigkeiten und geringere Latenz im Vergleich zu 4G-Netzen.",
        nl: "5G-netwerken bieden aanzienlijk hogere snelheden en lagere latentie vergeleken met 4G-netwerken."
      }
    },
    {
      id: 'tech_49',
      question: {
        en: "Tesla was the first company to make electric cars.",
        es: "Tesla fue la primera empresa en fabricar autos eléctricos.",
        de: "Tesla war das erste Unternehmen, das Elektroautos herstellte.",
        nl: "Tesla was het eerste bedrijf dat elektrische auto's maakte."
      },
      isTrue: false,
      explanation: {
        en: "Electric cars existed long before Tesla. The first practical electric car was built in the 1880s, and many companies made them in the early 1900s.",
        es: "Los autos eléctricos existían mucho antes de Tesla. El primer auto eléctrico práctico se construyó en la década de 1880, y muchas empresas los fabricaron a principios de 1900.",
        de: "Elektroautos gab es lange vor Tesla. Das erste praktische Elektroauto wurde in den 1880er Jahren gebaut, und viele Unternehmen stellten sie in den frühen 1900er Jahren her.",
        nl: "Elektrische auto's bestonden lang vóór Tesla. De eerste praktische elektrische auto werd gebouwd in de jaren 1880, en veel bedrijven maakten ze in de vroege jaren 1900."
      }
    },
    {
      id: 'tech_50',
      question: {
        en: "MP3 is a type of audio file format.",
        es: "MP3 es un tipo de formato de archivo de audio.",
        de: "MP3 ist eine Art Audiodateiformat.",
        nl: "MP3 is een type audiobestandsformaat."
      },
      isTrue: true,
      explanation: {
        en: "MP3 (MPEG Audio Layer 3) is indeed a common digital audio format that compresses sound files.",
        es: "MP3 (MPEG Audio Layer 3) es efectivamente un formato de audio digital común que comprime archivos de sonido.",
        de: "MP3 (MPEG Audio Layer 3) ist tatsächlich ein gängiges digitales Audioformat, das Audiodateien komprimiert.",
        nl: "MP3 (MPEG Audio Layer 3) is inderdaad een veelvoorkomend digitaal audioformaat dat geluidsbestanden comprimeert."
      }
    },
    {
      id: 'tech_51',
      question: {
        en: "The term 'podcast' combines 'iPod' and 'broadcast'.",
        es: "El término 'podcast' combina 'iPod' y 'broadcast'.",
        de: "Der Begriff 'Podcast' kombiniert 'iPod' und 'broadcast'.",
        nl: "De term 'podcast' combineert 'iPod' en 'broadcast'."
      },
      isTrue: true,
      explanation: {
        en: "The word 'podcast' is a portmanteau of 'iPod' (Apple's music player) and 'broadcast'.",
        es: "La palabra 'podcast' es una combinación de 'iPod' (el reproductor de música de Apple) y 'broadcast'.",
        de: "Das Wort 'Podcast' ist ein Kofferwort aus 'iPod' (Apples Musikplayer) und 'broadcast'.",
        nl: "Het woord 'podcast' is een samenvoeging van 'iPod' (Apple's muziekspeler) en 'broadcast'."
      }
    },
    {
      id: 'tech_52',
      question: {
        en: "Firewall is a physical wall that protects computers from fire.",
        es: "Firewall es un muro físico que protege las computadoras del fuego.",
        de: "Firewall ist eine physische Wand, die Computer vor Feuer schützt.",
        nl: "Firewall is een fysieke muur die computers beschermt tegen vuur."
      },
      isTrue: false,
      explanation: {
        en: "A firewall is software or hardware that protects networks from unauthorized access, not a physical wall against fire.",
        es: "Un firewall es software o hardware que protege las redes del acceso no autorizado, no un muro físico contra el fuego.",
        de: "Eine Firewall ist Software oder Hardware, die Netzwerke vor unbefugtem Zugriff schützt, keine physische Wand gegen Feuer.",
        nl: "Een firewall is software of hardware die netwerken beschermt tegen ongeautoriseerde toegang, geen fysieke muur tegen vuur."
      }
    },
    {
      id: 'tech_53',
      question: {
        en: "The @ symbol in email addresses is called 'at sign'.",
        es: "El símbolo @ en las direcciones de correo electrónico se llama 'arroba'.",
        de: "Das @-Symbol in E-Mail-Adressen wird 'At-Zeichen' genannt.",
        nl: "Het @-symbool in e-mailadressen wordt 'apenstaartje' genoemd."
      },
      isTrue: true,
      explanation: {
        en: "The @ symbol is officially called the 'at sign' in English, though it has different names in many languages.",
        es: "El símbolo @ se llama oficialmente 'arroba' en español, aunque tiene diferentes nombres en muchos idiomas.",
        de: "Das @-Symbol wird im Englischen offiziell 'at sign' genannt, obwohl es in vielen Sprachen unterschiedliche Namen hat.",
        nl: "Het @-symbool wordt officieel 'at sign' genoemd in het Engels, hoewel het in veel talen verschillende namen heeft."
      }
    },
    {
      id: 'tech_54',
      question: {
        en: "JPEG is a type of image file format.",
        es: "JPEG es un tipo de formato de archivo de imagen.",
        de: "JPEG ist eine Art Bilddateiformat.",
        nl: "JPEG is een type afbeeldingsbestandsformaat."
      },
      isTrue: true,
      explanation: {
        en: "JPEG (Joint Photographic Experts Group) is a commonly used method of lossy compression for digital images.",
        es: "JPEG (Joint Photographic Experts Group) es un método comúnmente utilizado de compresión con pérdida para imágenes digitales.",
        de: "JPEG (Joint Photographic Experts Group) ist eine häufig verwendete Methode der verlustbehafteten Komprimierung für digitale Bilder.",
        nl: "JPEG (Joint Photographic Experts Group) is een veelgebruikte methode van compressie met verlies voor digitale afbeeldingen."
      }
    },
    {
      id: 'tech_55',
      question: {
        en: "Ctrl+C is the keyboard shortcut for copy.",
        es: "Ctrl+C es el atajo de teclado para copiar.",
        de: "Strg+C ist die Tastenkombination zum Kopieren.",
        nl: "Ctrl+C is de sneltoets voor kopiëren."
      },
      isTrue: true,
      explanation: {
        en: "Ctrl+C (or Cmd+C on Mac) is the standard keyboard shortcut for copying selected text or items.",
        es: "Ctrl+C (o Cmd+C en Mac) es el atajo de teclado estándar para copiar texto o elementos seleccionados.",
        de: "Strg+C (oder Cmd+C auf Mac) ist die Standard-Tastenkombination zum Kopieren von ausgewähltem Text oder Elementen.",
        nl: "Ctrl+C (of Cmd+C op Mac) is de standaard sneltoets voor het kopiëren van geselecteerde tekst of items."
      }
    },
    {
      id: 'tech_56',
      question: {
        en: "WhatsApp was founded after Instagram.",
        es: "WhatsApp fue fundada después de Instagram.",
        de: "WhatsApp wurde nach Instagram gegründet.",
        nl: "WhatsApp werd opgericht na Instagram."
      },
      isTrue: false,
      explanation: {
        en: "WhatsApp was founded in 2009, while Instagram was founded in 2010. WhatsApp came first.",
        es: "WhatsApp fue fundada en 2009, mientras que Instagram fue fundada en 2010. WhatsApp fue primero.",
        de: "WhatsApp wurde 2009 gegründet, während Instagram 2010 gegründet wurde. WhatsApp kam zuerst.",
        nl: "WhatsApp werd opgericht in 2009, terwijl Instagram werd opgericht in 2010. WhatsApp kwam eerst."
      }
    },
    {
      id: 'tech_57',
      question: {
        en: "3D printing can create objects layer by layer.",
        es: "La impresión 3D puede crear objetos capa por capa.",
        de: "3D-Druck kann Objekte Schicht für Schicht erstellen.",
        nl: "3D-printen kan objecten laag voor laag maken."
      },
      isTrue: true,
      explanation: {
        en: "3D printing, also called additive manufacturing, creates three-dimensional objects by depositing material layer by layer.",
        es: "La impresión 3D, también llamada fabricación aditiva, crea objetos tridimensionales depositando material capa por capa.",
        de: "3D-Druck, auch additive Fertigung genannt, erstellt dreidimensionale Objekte durch schichtweises Aufbringen von Material.",
        nl: "3D-printen, ook wel additieve productie genoemd, maakt driedimensionale objecten door materiaal laag voor laag aan te brengen."
      }
    },
    {
      id: 'tech_58',
      question: {
        en: "The Turing Test measures a machine's ability to exhibit intelligent behavior.",
        es: "La Prueba de Turing mide la capacidad de una máquina para exhibir comportamiento inteligente.",
        de: "Der Turing-Test misst die Fähigkeit einer Maschine, intelligentes Verhalten zu zeigen.",
        nl: "De Turing-test meet het vermogen van een machine om intelligent gedrag te vertonen."
      },
      isTrue: true,
      explanation: {
        en: "The Turing Test, proposed by Alan Turing, evaluates whether a machine can exhibit intelligent behavior indistinguishable from a human.",
        es: "La Prueba de Turing, propuesta por Alan Turing, evalúa si una máquina puede exhibir un comportamiento inteligente indistinguible del de un humano.",
        de: "Der Turing-Test, vorgeschlagen von Alan Turing, bewertet, ob eine Maschine intelligentes Verhalten zeigen kann, das von einem Menschen nicht zu unterscheiden ist.",
        nl: "De Turing-test, voorgesteld door Alan Turing, evalueert of een machine intelligent gedrag kan vertonen dat niet te onderscheiden is van een mens."
      }
    },
    {
      id: 'tech_59',
      question: {
        en: "Silicon Valley is located in Texas.",
        es: "Silicon Valley está ubicado en Texas.",
        de: "Silicon Valley befindet sich in Texas.",
        nl: "Silicon Valley ligt in Texas."
      },
      isTrue: false,
      explanation: {
        en: "Silicon Valley is located in the San Francisco Bay Area of California, not Texas.",
        es: "Silicon Valley está ubicado en el Área de la Bahía de San Francisco en California, no en Texas.",
        de: "Silicon Valley befindet sich in der San Francisco Bay Area in Kalifornien, nicht in Texas.",
        nl: "Silicon Valley ligt in de San Francisco Bay Area van Californië, niet in Texas."
      }
    },
    {
      id: 'tech_60',
      question: {
        en: "Megabytes are larger than Gigabytes.",
        es: "Los Megabytes son más grandes que los Gigabytes.",
        de: "Megabytes sind größer als Gigabytes.",
        nl: "Megabytes zijn groter dan Gigabytes."
      },
      isTrue: false,
      explanation: {
        en: "Gigabytes are larger than Megabytes. 1 Gigabyte equals 1024 Megabytes.",
        es: "Los Gigabytes son más grandes que los Megabytes. 1 Gigabyte equivale a 1024 Megabytes.",
        de: "Gigabytes sind größer als Megabytes. 1 Gigabyte entspricht 1024 Megabytes.",
        nl: "Gigabytes zijn groter dan Megabytes. 1 Gigabyte is gelijk aan 1024 Megabytes."
      }
    },
    {
      id: 'tech_61',
      question: {
        en: "NFC technology allows contactless payment.",
        es: "La tecnología NFC permite el pago sin contacto.",
        de: "NFC-Technologie ermöglicht kontaktloses Bezahlen.",
        nl: "NFC-technologie maakt contactloos betalen mogelijk."
      },
      isTrue: true,
      explanation: {
        en: "NFC (Near Field Communication) technology enables contactless payments by allowing devices to communicate when close together.",
        es: "La tecnología NFC (Comunicación de Campo Cercano) permite pagos sin contacto al permitir que los dispositivos se comuniquen cuando están cerca.",
        de: "NFC (Near Field Communication)-Technologie ermöglicht kontaktloses Bezahlen, indem Geräte in der Nähe miteinander kommunizieren können.",
        nl: "NFC (Near Field Communication)-technologie maakt contactloos betalen mogelijk door apparaten in de buurt met elkaar te laten communiceren."
      }
    },
    {
      id: 'tech_62',
      question: {
        en: "Steve Jobs was one of the founders of Microsoft.",
        es: "Steve Jobs fue uno de los fundadores de Microsoft.",
        de: "Steve Jobs war einer der Gründer von Microsoft.",
        nl: "Steve Jobs was een van de oprichters van Microsoft."
      },
      isTrue: false,
      explanation: {
        en: "Steve Jobs co-founded Apple, not Microsoft. Microsoft was founded by Bill Gates and Paul Allen.",
        es: "Steve Jobs cofundó Apple, no Microsoft. Microsoft fue fundada por Bill Gates y Paul Allen.",
        de: "Steve Jobs war Mitbegründer von Apple, nicht Microsoft. Microsoft wurde von Bill Gates und Paul Allen gegründet.",
        nl: "Steve Jobs was medeoprichter van Apple, niet Microsoft. Microsoft werd opgericht door Bill Gates en Paul Allen."
      }
    },
    {
      id: 'tech_63',
      question: {
        en: "OLED displays produce their own light.",
        es: "Las pantallas OLED producen su propia luz.",
        de: "OLED-Displays erzeugen ihr eigenes Licht.",
        nl: "OLED-schermen produceren hun eigen licht."
      },
      isTrue: true,
      explanation: {
        en: "OLED (Organic Light-Emitting Diode) displays produce their own light, unlike LCD screens which require a backlight.",
        es: "Las pantallas OLED (Diodo Orgánico Emisor de Luz) producen su propia luz, a diferencia de las pantallas LCD que requieren retroiluminación.",
        de: "OLED (Organic Light-Emitting Diode)-Displays erzeugen ihr eigenes Licht, im Gegensatz zu LCD-Bildschirmen, die eine Hintergrundbeleuchtung benötigen.",
        nl: "OLED (Organic Light-Emitting Diode)-schermen produceren hun eigen licht, in tegenstelling tot LCD-schermen die achtergrondverlichting nodig hebben."
      }
    },
    {
      id: 'tech_64',
      question: {
        en: "The dark web is illegal.",
        es: "La dark web es ilegal.",
        de: "Das Dark Web ist illegal.",
        nl: "Het dark web is illegaal."
      },
      isTrue: false,
      explanation: {
        en: "The dark web itself is not illegal. It's a part of the internet requiring special software to access. However, illegal activities do occur there.",
        es: "La dark web en sí no es ilegal. Es una parte de internet que requiere software especial para acceder. Sin embargo, ocurren actividades ilegales allí.",
        de: "Das Dark Web selbst ist nicht illegal. Es ist ein Teil des Internets, der spezielle Software zum Zugriff erfordert. Allerdings finden dort illegale Aktivitäten statt.",
        nl: "Het dark web zelf is niet illegaal. Het is een deel van het internet waarvoor speciale software nodig is om toegang te krijgen. Wel vinden er illegale activiteiten plaats."
      }
    },
    {
      id: 'tech_65',
      question: {
        en: "AI stands for Artificial Intelligence.",
        es: "AI significa Inteligencia Artificial.",
        de: "AI steht für Artificial Intelligence.",
        nl: "AI staat voor Artificial Intelligence."
      },
      isTrue: true,
      explanation: {
        en: "AI stands for Artificial Intelligence, the simulation of human intelligence by machines.",
        es: "AI significa Inteligencia Artificial, la simulación de inteligencia humana por máquinas.",
        de: "AI steht für Artificial Intelligence, die Simulation menschlicher Intelligenz durch Maschinen.",
        nl: "AI staat voor Artificial Intelligence, de simulatie van menselijke intelligentie door machines."
      }
    },
    {
      id: 'tech_66',
      question: {
        en: "Smartphones use touchscreen technology.",
        es: "Los teléfonos inteligentes usan tecnología de pantalla táctil.",
        de: "Smartphones verwenden Touchscreen-Technologie.",
        nl: "Smartphones gebruiken touchscreen-technologie."
      },
      isTrue: true,
      explanation: {
        en: "Modern smartphones use capacitive touchscreen technology that responds to finger touches.",
        es: "Los teléfonos inteligentes modernos utilizan tecnología de pantalla táctil capacitiva que responde a los toques de los dedos.",
        de: "Moderne Smartphones verwenden kapazitive Touchscreen-Technologie, die auf Fingerberührungen reagiert.",
        nl: "Moderne smartphones gebruiken capacitieve touchscreen-technologie die reageert op aanrakingen met vingers."
      }
    },
    {
      id: 'tech_67',
      question: {
        en: "The first webcam was used to monitor a coffee pot.",
        es: "La primera cámara web se usó para monitorear una cafetera.",
        de: "Die erste Webcam wurde verwendet, um eine Kaffeekanne zu überwachen.",
        nl: "De eerste webcam werd gebruikt om een koffiepot te monitoren."
      },
      isTrue: true,
      explanation: {
        en: "The first webcam was created at Cambridge University in 1991 to monitor a coffee pot, so people could check if coffee was available.",
        es: "La primera cámara web fue creada en la Universidad de Cambridge en 1991 para monitorear una cafetera, para que la gente pudiera verificar si había café disponible.",
        de: "Die erste Webcam wurde 1991 an der Universität Cambridge erstellt, um eine Kaffeekanne zu überwachen, damit Leute prüfen konnten, ob Kaffee verfügbar war.",
        nl: "De eerste webcam werd gemaakt aan de Universiteit van Cambridge in 1991 om een koffiepot te monitoren, zodat mensen konden controleren of er koffie beschikbaar was."
      }
    },
    {
      id: 'tech_68',
      question: {
        en: "Streaming services use the internet to deliver content.",
        es: "Los servicios de streaming usan internet para entregar contenido.",
        de: "Streaming-Dienste nutzen das Internet zur Bereitstellung von Inhalten.",
        nl: "Streamingdiensten gebruiken het internet om inhoud te leveren."
      },
      isTrue: true,
      explanation: {
        en: "Streaming services like Netflix, Spotify, and YouTube use internet connections to deliver audio and video content in real-time.",
        es: "Los servicios de streaming como Netflix, Spotify y YouTube utilizan conexiones a internet para entregar contenido de audio y video en tiempo real.",
        de: "Streaming-Dienste wie Netflix, Spotify und YouTube nutzen Internetverbindungen, um Audio- und Videoinhalte in Echtzeit bereitzustellen.",
        nl: "Streamingdiensten zoals Netflix, Spotify en YouTube gebruiken internetverbindingen om audio- en video-inhoud in realtime te leveren."
      }
    },
    {
      id: 'tech_69',
      question: {
        en: "Phishing is a type of cyber attack.",
        es: "El phishing es un tipo de ataque cibernético.",
        de: "Phishing ist eine Art von Cyberangriff.",
        nl: "Phishing is een type cyberaanval."
      },
      isTrue: true,
      explanation: {
        en: "Phishing is a cyber attack where attackers impersonate legitimate entities to steal sensitive information like passwords or credit card numbers.",
        es: "El phishing es un ataque cibernético donde los atacantes se hacen pasar por entidades legítimas para robar información sensible como contraseñas o números de tarjetas de crédito.",
        de: "Phishing ist ein Cyberangriff, bei dem Angreifer sich als legitime Einheiten ausgeben, um sensible Informationen wie Passwörter oder Kreditkartennummern zu stehlen.",
        nl: "Phishing is een cyberaanval waarbij aanvallers zich voordoen als legitieme entiteiten om gevoelige informatie zoals wachtwoorden of creditcardnummers te stelen."
      }
    },
    {
      id: 'tech_70',
      question: {
        en: "ROM stands for Read-Only Memory.",
        es: "ROM significa Memoria de Solo Lectura.",
        de: "ROM steht für Read-Only Memory.",
        nl: "ROM staat voor Read-Only Memory."
      },
      isTrue: true,
      explanation: {
        en: "ROM stands for Read-Only Memory, a type of computer memory that retains data permanently even without power.",
        es: "ROM significa Memoria de Solo Lectura, un tipo de memoria de computadora que retiene datos permanentemente incluso sin energía.",
        de: "ROM steht für Read-Only Memory, eine Art Computerspeicher, der Daten dauerhaft behält, auch ohne Strom.",
        nl: "ROM staat voor Read-Only Memory, een type computergeheugen dat gegevens permanent behoudt, zelfs zonder stroom."
      }
    },
    {
      id: 'tech_71',
      question: {
        en: "Wikipedia was founded before Google.",
        es: "Wikipedia fue fundada antes que Google.",
        de: "Wikipedia wurde vor Google gegründet.",
        nl: "Wikipedia werd vóór Google opgericht."
      },
      isTrue: false,
      explanation: {
        en: "Google was founded in 1998, while Wikipedia was launched in 2001. Google came first.",
        es: "Google fue fundada en 1998, mientras que Wikipedia fue lanzada en 2001. Google fue primero.",
        de: "Google wurde 1998 gegründet, während Wikipedia 2001 gestartet wurde. Google kam zuerst.",
        nl: "Google werd opgericht in 1998, terwijl Wikipedia werd gelanceerd in 2001. Google kwam eerst."
      }
    },
    {
      id: 'tech_72',
      question: {
        en: "Antivirus software protects computers from malware.",
        es: "El software antivirus protege las computadoras del malware.",
        de: "Antivirensoftware schützt Computer vor Malware.",
        nl: "Antivirussoftware beschermt computers tegen malware."
      },
      isTrue: true,
      explanation: {
        en: "Antivirus software is designed to detect, prevent, and remove malicious software (malware) from computers.",
        es: "El software antivirus está diseñado para detectar, prevenir y eliminar software malicioso (malware) de las computadoras.",
        de: "Antivirensoftware ist darauf ausgelegt, schädliche Software (Malware) auf Computern zu erkennen, zu verhindern und zu entfernen.",
        nl: "Antivirussoftware is ontworpen om schadelijke software (malware) op computers te detecteren, voorkomen en verwijderen."
      }
    },
    {
      id: 'tech_73',
      question: {
        en: "Airplane mode disables wireless communication on a device.",
        es: "El modo avión desactiva la comunicación inalámbrica en un dispositivo.",
        de: "Der Flugmodus deaktiviert die drahtlose Kommunikation auf einem Gerät.",
        nl: "Vliegtuigmodus schakelt draadloze communicatie op een apparaat uit."
      },
      isTrue: true,
      explanation: {
        en: "Airplane mode disables all wireless transmissions including cellular, Wi-Fi, and Bluetooth to comply with airline regulations.",
        es: "El modo avión desactiva todas las transmisiones inalámbricas, incluidas celular, Wi-Fi y Bluetooth, para cumplir con las regulaciones de las aerolíneas.",
        de: "Der Flugmodus deaktiviert alle drahtlosen Übertragungen einschließlich Mobilfunk, WLAN und Bluetooth, um den Fluggesellschaftsvorschriften zu entsprechen.",
        nl: "Vliegtuigmodus schakelt alle draadloze transmissies uit, inclusief mobiel, Wi-Fi en Bluetooth, om te voldoen aan luchtvaartregelgeving."
      }
    },
    {
      id: 'tech_74',
      question: {
        en: "The Nintendo Wii introduced motion-controlled gaming.",
        es: "La Nintendo Wii introdujo los juegos controlados por movimiento.",
        de: "Die Nintendo Wii führte bewegungsgesteuertes Gaming ein.",
        nl: "De Nintendo Wii introduceerde bewegingsgestuurd gamen."
      },
      isTrue: true,
      explanation: {
        en: "The Nintendo Wii, released in 2006, popularized motion-controlled gaming with its innovative Wii Remote controller.",
        es: "La Nintendo Wii, lanzada en 2006, popularizó los juegos controlados por movimiento con su innovador controlador Wii Remote.",
        de: "Die Nintendo Wii, veröffentlicht 2006, popularisierte bewegungsgesteuertes Gaming mit ihrer innovativen Wii-Fernbedienung.",
        nl: "De Nintendo Wii, uitgebracht in 2006, maakte bewegingsgestuurd gamen populair met zijn innovatieve Wii Remote-controller."
      }
    },
    {
      id: 'tech_75',
      question: {
        en: "HTTP stands for HyperText Transfer Protocol.",
        es: "HTTP significa Protocolo de Transferencia de HiperTexto.",
        de: "HTTP steht für HyperText Transfer Protocol.",
        nl: "HTTP staat voor HyperText Transfer Protocol."
      },
      isTrue: true,
      explanation: {
        en: "HTTP stands for HyperText Transfer Protocol, the foundation of data communication on the World Wide Web.",
        es: "HTTP significa Protocolo de Transferencia de HiperTexto, la base de la comunicación de datos en la World Wide Web.",
        de: "HTTP steht für HyperText Transfer Protocol, die Grundlage der Datenkommunikation im World Wide Web.",
        nl: "HTTP staat voor HyperText Transfer Protocol, de basis van datacommunicatie op het World Wide Web."
      }
    },
    {
      id: 'tech_76',
      question: {
        en: "Smartwatches can track your heart rate.",
        es: "Los relojes inteligentes pueden rastrear tu ritmo cardíaco.",
        de: "Smartwatches können Ihre Herzfrequenz verfolgen.",
        nl: "Smartwatches kunnen je hartslag volgen."
      },
      isTrue: true,
      explanation: {
        en: "Modern smartwatches include optical heart rate sensors that can continuously monitor your heart rate.",
        es: "Los relojes inteligentes modernos incluyen sensores ópticos de ritmo cardíaco que pueden monitorear continuamente tu ritmo cardíaco.",
        de: "Moderne Smartwatches verfügen über optische Herzfrequenzsensoren, die Ihre Herzfrequenz kontinuierlich überwachen können.",
        nl: "Moderne smartwatches bevatten optische hartslagsensoren die je hartslag continu kunnen monitoren."
      }
    },
    {
      id: 'tech_77',
      question: {
        en: "Floppy disks could store more data than modern USB drives.",
        es: "Los disquetes podían almacenar más datos que las unidades USB modernas.",
        de: "Disketten konnten mehr Daten speichern als moderne USB-Sticks.",
        nl: "Diskettes konden meer gegevens opslaan dan moderne USB-sticks."
      },
      isTrue: false,
      explanation: {
        en: "Floppy disks held only 1.44 MB, while modern USB drives can store gigabytes or terabytes of data - thousands of times more.",
        es: "Los disquetes contenían solo 1.44 MB, mientras que las unidades USB modernas pueden almacenar gigabytes o terabytes de datos, miles de veces más.",
        de: "Disketten hielten nur 1,44 MB, während moderne USB-Sticks Gigabyte oder Terabyte an Daten speichern können - tausendmal mehr.",
        nl: "Diskettes bevatten slechts 1,44 MB, terwijl moderne USB-sticks gigabytes of terabytes aan gegevens kunnen opslaan - duizenden keren meer."
      }
    },
    {
      id: 'tech_78',
      question: {
        en: "Drones use GPS for navigation.",
        es: "Los drones usan GPS para navegación.",
        de: "Drohnen verwenden GPS zur Navigation.",
        nl: "Drones gebruiken GPS voor navigatie."
      },
      isTrue: true,
      explanation: {
        en: "Most consumer and commercial drones use GPS systems for accurate positioning and autonomous navigation.",
        es: "La mayoría de los drones de consumo y comerciales utilizan sistemas GPS para posicionamiento preciso y navegación autónoma.",
        de: "Die meisten Verbraucher- und kommerziellen Drohnen verwenden GPS-Systeme für genaue Positionierung und autonome Navigation.",
        nl: "De meeste consument- en commerciële drones gebruiken GPS-systemen voor nauwkeurige positionering en autonome navigatie."
      }
    },
    {
      id: 'tech_79',
      question: {
        en: "Open source software is always free.",
        es: "El software de código abierto siempre es gratuito.",
        de: "Open-Source-Software ist immer kostenlos.",
        nl: "Open source software is altijd gratis."
      },
      isTrue: false,
      explanation: {
        en: "Open source means the source code is publicly available, but the software isn't always free. Some open source software can be sold or require payment.",
        es: "Código abierto significa que el código fuente está disponible públicamente, pero el software no siempre es gratuito. Algún software de código abierto puede venderse o requerir pago.",
        de: "Open Source bedeutet, dass der Quellcode öffentlich verfügbar ist, aber die Software ist nicht immer kostenlos. Einige Open-Source-Software kann verkauft werden oder erfordert Zahlung.",
        nl: "Open source betekent dat de broncode publiek beschikbaar is, maar de software is niet altijd gratis. Sommige open source software kan worden verkocht of vereist betaling."
      }
    },
    {
      id: 'tech_80',
      question: {
        en: "Face ID uses facial recognition technology.",
        es: "Face ID usa tecnología de reconocimiento facial.",
        de: "Face ID verwendet Gesichtserkennungstechnologie.",
        nl: "Face ID gebruikt gezichtsherkenningst technologie."
      },
      isTrue: true,
      explanation: {
        en: "Face ID, introduced by Apple, uses advanced facial recognition technology to unlock devices and authenticate users.",
        es: "Face ID, introducido por Apple, utiliza tecnología avanzada de reconocimiento facial para desbloquear dispositivos y autenticar usuarios.",
        de: "Face ID, eingeführt von Apple, verwendet fortschrittliche Gesichtserkennungstechnologie, um Geräte zu entsperren und Benutzer zu authentifizieren.",
        nl: "Face ID, geïntroduceerd door Apple, gebruikt geavanceerde gezichtsherkennings technologie om apparaten te ontgrendelen en gebruikers te authenticeren."
      }
    },
    {
      id: 'tech_81',
      question: {
        en: "The first Apple logo featured Isaac Newton.",
        es: "El primer logo de Apple presentaba a Isaac Newton.",
        de: "Das erste Apple-Logo zeigte Isaac Newton.",
        nl: "Het eerste Apple-logo bevatte Isaac Newton."
      },
      isTrue: true,
      explanation: {
        en: "Apple's first logo, designed in 1976, depicted Isaac Newton sitting under an apple tree. It was later replaced with the iconic apple symbol.",
        es: "El primer logo de Apple, diseñado en 1976, representaba a Isaac Newton sentado bajo un manzano. Más tarde fue reemplazado por el icónico símbolo de manzana.",
        de: "Apples erstes Logo, entworfen 1976, zeigte Isaac Newton unter einem Apfelbaum sitzend. Es wurde später durch das ikonische Apfelsymbol ersetzt.",
        nl: "Apple's eerste logo, ontworpen in 1976, toonde Isaac Newton onder een appelboom. Het werd later vervangen door het iconische appelsymbool."
      }
    },
    {
      id: 'tech_82',
      question: {
        en: "URL stands for Uniform Resource Locator.",
        es: "URL significa Localizador Uniforme de Recursos.",
        de: "URL steht für Uniform Resource Locator.",
        nl: "URL staat voor Uniform Resource Locator."
      },
      isTrue: true,
      explanation: {
        en: "URL stands for Uniform Resource Locator, the address used to access resources on the internet.",
        es: "URL significa Localizador Uniforme de Recursos, la dirección utilizada para acceder a recursos en internet.",
        de: "URL steht für Uniform Resource Locator, die Adresse, die verwendet wird, um auf Ressourcen im Internet zuzugreifen.",
        nl: "URL staat voor Uniform Resource Locator, het adres dat wordt gebruikt om toegang te krijgen tot bronnen op internet."
      }
    },
    {
      id: 'tech_83',
      question: {
        en: "The first text message was sent in 1992.",
        es: "El primer mensaje de texto fue enviado en 1992.",
        de: "Die erste Textnachricht wurde 1992 gesendet.",
        nl: "Het eerste sms-bericht werd verzonden in 1992."
      },
      isTrue: true,
      explanation: {
        en: "The first SMS text message was sent on December 3, 1992, and read 'Merry Christmas'.",
        es: "El primer mensaje de texto SMS fue enviado el 3 de diciembre de 1992 y decía 'Feliz Navidad'.",
        de: "Die erste SMS-Textnachricht wurde am 3. Dezember 1992 gesendet und lautete 'Frohe Weihnachten'.",
        nl: "Het eerste sms-tekstbericht werd verzonden op 3 december 1992 en luidde 'Vrolijk Kerstfeest'."
      }
    },
    {
      id: 'tech_84',
      question: {
        en: "Refresh rate is measured in Hertz (Hz).",
        es: "La tasa de refresco se mide en Hercios (Hz).",
        de: "Die Bildwiederholfrequenz wird in Hertz (Hz) gemessen.",
        nl: "Verversingsfrequentie wordt gemeten in Hertz (Hz)."
      },
      isTrue: true,
      explanation: {
        en: "Refresh rate, which indicates how many times per second a display updates, is measured in Hertz (Hz).",
        es: "La tasa de refresco, que indica cuántas veces por segundo se actualiza una pantalla, se mide en Hercios (Hz).",
        de: "Die Bildwiederholfrequenz, die angibt, wie oft pro Sekunde ein Display aktualisiert wird, wird in Hertz (Hz) gemessen.",
        nl: "Verversingsfrequentie, die aangeeft hoe vaak per seconde een scherm wordt bijgewerkt, wordt gemeten in Hertz (Hz)."
      }
    },
    {
      id: 'tech_85',
      question: {
        en: "Linux is a proprietary operating system owned by Microsoft.",
        es: "Linux es un sistema operativo propietario propiedad de Microsoft.",
        de: "Linux ist ein proprietäres Betriebssystem im Besitz von Microsoft.",
        nl: "Linux is een propriëtair besturingssysteem van Microsoft."
      },
      isTrue: false,
      explanation: {
        en: "Linux is an open-source operating system, not owned by Microsoft. It was created by Linus Torvalds and is freely available.",
        es: "Linux es un sistema operativo de código abierto, no propiedad de Microsoft. Fue creado por Linus Torvalds y está disponible gratuitamente.",
        de: "Linux ist ein Open-Source-Betriebssystem, nicht im Besitz von Microsoft. Es wurde von Linus Torvalds erstellt und ist frei verfügbar.",
        nl: "Linux is een open-source besturingssysteem, niet eigendom van Microsoft. Het werd gemaakt door Linus Torvalds en is gratis beschikbaar."
      }
    },
    {
      id: 'tech_86',
      question: {
        en: "Smartglasses can display information in your field of view.",
        es: "Las gafas inteligentes pueden mostrar información en tu campo de visión.",
        de: "Smart Glasses können Informationen in Ihrem Sichtfeld anzeigen.",
        nl: "Slimme brillen kunnen informatie in je gezichtsveld weergeven."
      },
      isTrue: true,
      explanation: {
        en: "Smart glasses use augmented reality to overlay digital information and images onto your real-world view.",
        es: "Las gafas inteligentes usan realidad aumentada para superponer información e imágenes digitales sobre tu vista del mundo real.",
        de: "Smart Glasses verwenden Augmented Reality, um digitale Informationen und Bilder über Ihre reale Ansicht zu legen.",
        nl: "Slimme brillen gebruiken augmented reality om digitale informatie en afbeeldingen over je real-world weergave te leggen."
      }
    },
    {
      id: 'tech_87',
      question: {
        en: "The GameBoy was released in the 1980s.",
        es: "El GameBoy fue lanzado en la década de 1980.",
        de: "Der GameBoy wurde in den 1980er Jahren veröffentlicht.",
        nl: "De GameBoy werd uitgebracht in de jaren 1980."
      },
      isTrue: true,
      explanation: {
        en: "The original Nintendo Game Boy was released in 1989, making it a product of the 1980s.",
        es: "El Nintendo Game Boy original fue lanzado en 1989, lo que lo convierte en un producto de la década de 1980.",
        de: "Der ursprüngliche Nintendo Game Boy wurde 1989 veröffentlicht und ist damit ein Produkt der 1980er Jahre.",
        nl: "De originele Nintendo Game Boy werd uitgebracht in 1989, waardoor het een product van de jaren 1980 is."
      }
    },
    {
      id: 'tech_88',
      question: {
        en: "Overclocking makes a computer run slower.",
        es: "El overclocking hace que una computadora funcione más lento.",
        de: "Übertakten lässt einen Computer langsamer laufen.",
        nl: "Overklokken laat een computer langzamer werken."
      },
      isTrue: false,
      explanation: {
        en: "Overclocking makes a computer run faster by increasing the clock speed of the processor, though it can generate more heat.",
        es: "El overclocking hace que una computadora funcione más rápido al aumentar la velocidad de reloj del procesador, aunque puede generar más calor.",
        de: "Übertakten lässt einen Computer schneller laufen, indem die Taktfrequenz des Prozessors erhöht wird, obwohl es mehr Wärme erzeugen kann.",
        nl: "Overklokken laat een computer sneller werken door de kloksnelheid van de processor te verhogen, hoewel het meer warmte kan genereren."
      }
    },
    {
      id: 'tech_89',
      question: {
        en: "Voice assistants like Siri use artificial intelligence.",
        es: "Los asistentes de voz como Siri usan inteligencia artificial.",
        de: "Sprachassistenten wie Siri verwenden künstliche Intelligenz.",
        nl: "Spraakassistenten zoals Siri gebruiken kunstmatige intelligentie."
      },
      isTrue: true,
      explanation: {
        en: "Voice assistants like Siri, Alexa, and Google Assistant use AI and machine learning to understand and respond to voice commands.",
        es: "Los asistentes de voz como Siri, Alexa y Google Assistant usan IA y aprendizaje automático para entender y responder a comandos de voz.",
        de: "Sprachassistenten wie Siri, Alexa und Google Assistant verwenden KI und maschinelles Lernen, um Sprachbefehle zu verstehen und darauf zu reagieren.",
        nl: "Spraakassistenten zoals Siri, Alexa en Google Assistant gebruiken AI en machine learning om spraakopdrachten te begrijpen en erop te reageren."
      }
    },
    {
      id: 'tech_90',
      question: {
        en: "Solid State Drives have moving parts.",
        es: "Las unidades de estado sólido tienen partes móviles.",
        de: "Solid State Drives haben bewegliche Teile.",
        nl: "Solid State Drives hebben bewegende delen."
      },
      isTrue: false,
      explanation: {
        en: "SSDs have no moving parts, unlike traditional hard drives. They use flash memory chips to store data.",
        es: "Los SSD no tienen partes móviles, a diferencia de los discos duros tradicionales. Utilizan chips de memoria flash para almacenar datos.",
        de: "SSDs haben keine beweglichen Teile, im Gegensatz zu traditionellen Festplatten. Sie verwenden Flash-Speicherchips zur Datenspeicherung.",
        nl: "SSD's hebben geen bewegende delen, in tegenstelling tot traditionele harde schijven. Ze gebruiken flash-geheugenchips om gegevens op te slaan."
      }
    },
    {
      id: 'tech_91',
      question: {
        en: "Touchscreens work because of heat from your finger.",
        es: "Las pantallas táctiles funcionan debido al calor de tu dedo.",
        de: "Touchscreens funktionieren aufgrund der Wärme Ihres Fingers.",
        nl: "Touchscreens werken door de warmte van je vinger."
      },
      isTrue: false,
      explanation: {
        en: "Most modern touchscreens use capacitive technology, which responds to the electrical charge from your finger, not heat.",
        es: "La mayoría de las pantallas táctiles modernas usan tecnología capacitiva, que responde a la carga eléctrica de tu dedo, no al calor.",
        de: "Die meisten modernen Touchscreens verwenden kapazitive Technologie, die auf die elektrische Ladung Ihres Fingers reagiert, nicht auf Wärme.",
        nl: "De meeste moderne touchscreens gebruiken capacitieve technologie, die reageert op de elektrische lading van je vinger, niet op warmte."
      }
    },
    {
      id: 'tech_92',
      question: {
        en: "Ethernet cables are used for wired internet connections.",
        es: "Los cables Ethernet se usan para conexiones a internet por cable.",
        de: "Ethernet-Kabel werden für kabelgebundene Internetverbindungen verwendet.",
        nl: "Ethernet-kabels worden gebruikt voor bedrade internetverbindingen."
      },
      isTrue: true,
      explanation: {
        en: "Ethernet cables are indeed used to connect devices to networks and the internet via wired connections.",
        es: "Los cables Ethernet se utilizan efectivamente para conectar dispositivos a redes e internet a través de conexiones por cable.",
        de: "Ethernet-Kabel werden tatsächlich verwendet, um Geräte über kabelgebundene Verbindungen mit Netzwerken und dem Internet zu verbinden.",
        nl: "Ethernet-kabels worden inderdaad gebruikt om apparaten via bedrade verbindingen met netwerken en internet te verbinden."
      }
    },
    {
      id: 'tech_93',
      question: {
        en: "The first commercial video game console was the Atari 2600.",
        es: "La primera consola de videojuegos comercial fue la Atari 2600.",
        de: "Die erste kommerzielle Videospielkonsole war die Atari 2600.",
        nl: "De eerste commerciële videogameconsole was de Atari 2600."
      },
      isTrue: false,
      explanation: {
        en: "The Magnavox Odyssey (1972) was the first commercial home video game console, released before the Atari 2600 (1977).",
        es: "El Magnavox Odyssey (1972) fue la primera consola de videojuegos doméstica comercial, lanzada antes de la Atari 2600 (1977).",
        de: "Die Magnavox Odyssey (1972) war die erste kommerzielle Heimvideospielkonsole, die vor der Atari 2600 (1977) veröffentlicht wurde.",
        nl: "De Magnavox Odyssey (1972) was de eerste commerciële thuisvideogameconsole, uitgebracht vóór de Atari 2600 (1977)."
      }
    },
    {
      id: 'tech_94',
      question: {
        en: "Screen resolution is measured in pixels.",
        es: "La resolución de pantalla se mide en píxeles.",
        de: "Die Bildschirmauflösung wird in Pixeln gemessen.",
        nl: "Schermresolutie wordt gemeten in pixels."
      },
      isTrue: true,
      explanation: {
        en: "Screen resolution indicates the number of pixels displayed on a screen, typically expressed as width × height (e.g., 1920×1080).",
        es: "La resolución de pantalla indica el número de píxeles mostrados en una pantalla, generalmente expresado como ancho × alto (por ejemplo, 1920×1080).",
        de: "Die Bildschirmauflösung gibt die Anzahl der auf einem Bildschirm angezeigten Pixel an, normalerweise ausgedrückt als Breite × Höhe (z.B. 1920×1080).",
        nl: "Schermresolutie geeft het aantal pixels aan dat op een scherm wordt weergegeven, meestal uitgedrukt als breedte × hoogte (bijv. 1920×1080)."
      }
    },
    {
      id: 'tech_95',
      question: {
        en: "Biometric authentication uses physical characteristics to verify identity.",
        es: "La autenticación biométrica usa características físicas para verificar la identidad.",
        de: "Biometrische Authentifizierung verwendet physische Merkmale zur Identitätsüberprüfung.",
        nl: "Biometrische authenticatie gebruikt fysieke kenmerken om identiteit te verifiëren."
      },
      isTrue: true,
      explanation: {
        en: "Biometric authentication uses unique physical characteristics like fingerprints, facial features, or iris patterns to verify a person's identity.",
        es: "La autenticación biométrica utiliza características físicas únicas como huellas dactilares, rasgos faciales o patrones de iris para verificar la identidad de una persona.",
        de: "Biometrische Authentifizierung verwendet einzigartige physische Merkmale wie Fingerabdrücke, Gesichtszüge oder Irismuster zur Überprüfung der Identität einer Person.",
        nl: "Biometrische authenticatie gebruikt unieke fysieke kenmerken zoals vingerafdrukken, gezichtskenmerken of irispatronen om de identiteit van een persoon te verifiëren."
      }
    },
    {
      id: 'tech_96',
      question: {
        en: "Moore's Law was proposed by Bill Gates.",
        es: "La Ley de Moore fue propuesta por Bill Gates.",
        de: "Das Mooresche Gesetz wurde von Bill Gates vorgeschlagen.",
        nl: "De Wet van Moore werd voorgesteld door Bill Gates."
      },
      isTrue: false,
      explanation: {
        en: "Moore's Law was proposed by Gordon Moore, co-founder of Intel, not Bill Gates.",
        es: "La Ley de Moore fue propuesta por Gordon Moore, cofundador de Intel, no por Bill Gates.",
        de: "Das Mooresche Gesetz wurde von Gordon Moore, Mitbegründer von Intel, vorgeschlagen, nicht von Bill Gates.",
        nl: "De Wet van Moore werd voorgesteld door Gordon Moore, medeoprichter van Intel, niet door Bill Gates."
      }
    },
    {
      id: 'tech_97',
      question: {
        en: "QR codes can store more information than traditional barcodes.",
        es: "Los códigos QR pueden almacenar más información que los códigos de barras tradicionales.",
        de: "QR-Codes können mehr Informationen speichern als traditionelle Barcodes.",
        nl: "QR-codes kunnen meer informatie opslaan dan traditionele streepjescodes."
      },
      isTrue: true,
      explanation: {
        en: "QR codes are two-dimensional and can store significantly more data than one-dimensional barcodes, including URLs, text, and contact information.",
        es: "Los códigos QR son bidimensionales y pueden almacenar significativamente más datos que los códigos de barras unidimensionales, incluyendo URLs, texto e información de contacto.",
        de: "QR-Codes sind zweidimensional und können deutlich mehr Daten speichern als eindimensionale Barcodes, einschließlich URLs, Text und Kontaktinformationen.",
        nl: "QR-codes zijn tweedimensionaal en kunnen aanzienlijk meer gegevens opslaan dan eendimensionale streepjescodes, waaronder URL's, tekst en contactinformatie."
      }
    },
    {
      id: 'tech_98',
      question: {
        en: "Thermal paste is used to improve heat transfer in computers.",
        es: "La pasta térmica se usa para mejorar la transferencia de calor en las computadoras.",
        de: "Wärmeleitpaste wird verwendet, um die Wärmeübertragung in Computern zu verbessern.",
        nl: "Thermische pasta wordt gebruikt om warmteoverdracht in computers te verbeteren."
      },
      isTrue: true,
      explanation: {
        en: "Thermal paste (or thermal compound) is applied between a CPU and its cooler to improve heat transfer and prevent overheating.",
        es: "La pasta térmica (o compuesto térmico) se aplica entre una CPU y su enfriador para mejorar la transferencia de calor y prevenir el sobrecalentamiento.",
        de: "Wärmeleitpaste (oder Wärmeleitcompound) wird zwischen einer CPU und ihrem Kühler aufgetragen, um die Wärmeübertragung zu verbessern und Überhitzung zu verhindern.",
        nl: "Thermische pasta (of thermische compound) wordt aangebracht tussen een CPU en zijn koeler om warmteoverdracht te verbeteren en oververhitting te voorkomen."
      }
    },
    {
      id: 'tech_99',
      question: {
        en: "Snapchat was the first app to introduce disappearing messages.",
        es: "Snapchat fue la primera aplicación en introducir mensajes que desaparecen.",
        de: "Snapchat war die erste App, die verschwindende Nachrichten einführte.",
        nl: "Snapchat was de eerste app die verdwijnende berichten introduceerde."
      },
      isTrue: true,
      explanation: {
        en: "Snapchat, launched in 2011, pioneered the concept of disappearing messages that automatically delete after being viewed.",
        es: "Snapchat, lanzado en 2011, fue pionero en el concepto de mensajes que desaparecen y se eliminan automáticamente después de ser vistos.",
        de: "Snapchat, gestartet 2011, war Pionier des Konzepts verschwindender Nachrichten, die sich nach dem Ansehen automatisch löschen.",
        nl: "Snapchat, gelanceerd in 2011, was pionier van het concept van verdwijnende berichten die automatisch worden verwijderd na het bekijken."
      }
    },
    {
      id: 'tech_100',
      question: {
        en: "The blue screen of death appears on Apple computers.",
        es: "La pantalla azul de la muerte aparece en computadoras Apple.",
        de: "Der Blue Screen of Death erscheint auf Apple-Computern.",
        nl: "Het blauwe scherm des doods verschijnt op Apple-computers."
      },
      isTrue: false,
      explanation: {
        en: "The 'Blue Screen of Death' is a Windows error screen, not an Apple/Mac error. Macs have their own error screens, sometimes called 'kernel panic'.",
        es: "La 'Pantalla Azul de la Muerte' es una pantalla de error de Windows, no un error de Apple/Mac. Los Macs tienen sus propias pantallas de error, a veces llamadas 'kernel panic'.",
        de: "Der 'Blue Screen of Death' ist ein Windows-Fehlerbildschirm, kein Apple/Mac-Fehler. Macs haben ihre eigenen Fehlerbildschirme, manchmal 'Kernel Panic' genannt.",
        nl: "Het 'Blue Screen of Death' is een Windows-foutscherm, geen Apple/Mac-fout. Macs hebben hun eigen foutschermen, soms 'kernel panic' genoemd."
      }
    }
  ];

  // Export to window
  window.trueFalseCategories = window.trueFalseCategories || {};
  window.trueFalseCategories['technology'] = technologyQuestions;

  console.log(`Loaded ${technologyQuestions.length} technology true/false questions`);

})();
