(function() {
    const level8 = {
        name: {
            en: "Tech Companies and Industry History",
            es: "Empresas Tecnológicas e Historia de la Industria",
            de: "Tech-Unternehmen und Industriegeschichte",
            nl: "Techbedrijven en Industrie Geschiedenis"
        },
        questions: [
            {
                question: {
                    en: "Who founded Apple Inc.?",
                    es: "¿Quién fundó Apple Inc.?",
                    de: "Wer gründete Apple Inc.?",
                    nl: "Wie heeft Apple Inc. opgericht?"
                },
                options: [
                    { en: "Steve Jobs and Steve Wozniak", es: "Steve Jobs y Steve Wozniak", de: "Steve Jobs und Steve Wozniak", nl: "Steve Jobs en Steve Wozniak" },
                    { en: "Bill Gates and Paul Allen", es: "Bill Gates y Paul Allen", de: "Bill Gates und Paul Allen", nl: "Bill Gates en Paul Allen" },
                    { en: "Larry Page and Sergey Brin", es: "Larry Page y Sergey Brin", de: "Larry Page und Sergey Brin", nl: "Larry Page en Sergey Brin" },
                    { en: "Mark Zuckerberg", es: "Mark Zuckerberg", de: "Mark Zuckerberg", nl: "Mark Zuckerberg" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "When was Microsoft founded?",
                    es: "¿Cuándo se fundó Microsoft?",
                    de: "Wann wurde Microsoft gegründet?",
                    nl: "Wanneer werd Microsoft opgericht?"
                },
                options: [
                    { en: "1973", es: "1973", de: "1973", nl: "1973" },
                    { en: "1975", es: "1975", de: "1975", nl: "1975" },
                    { en: "1977", es: "1977", de: "1977", nl: "1977" },
                    { en: "1979", es: "1979", de: "1979", nl: "1979" }
                ],
                correct: 1
            },
            {
                question: {
                    en: "Which company originally developed the Android operating system?",
                    es: "¿Qué empresa desarrolló originalmente el sistema operativo Android?",
                    de: "Welches Unternehmen entwickelte ursprünglich das Android-Betriebssystem?",
                    nl: "Welk bedrijf ontwikkelde oorspronkelijk het Android besturingssysteem?"
                },
                options: [
                    { en: "Google", es: "Google", de: "Google", nl: "Google" },
                    { en: "Android Inc.", es: "Android Inc.", de: "Android Inc.", nl: "Android Inc." },
                    { en: "Samsung", es: "Samsung", de: "Samsung", nl: "Samsung" },
                    { en: "HTC", es: "HTC", de: "HTC", nl: "HTC" }
                ],
                correct: 1
            },
            {
                question: {
                    en: "What was the first product sold by Apple?",
                    es: "¿Cuál fue el primer producto vendido por Apple?",
                    de: "Was war das erste von Apple verkaufte Produkt?",
                    nl: "Wat was het eerste product dat Apple verkocht?"
                },
                options: [
                    { en: "Apple I computer", es: "Computadora Apple I", de: "Apple I Computer", nl: "Apple I computer" },
                    { en: "Apple II computer", es: "Computadora Apple II", de: "Apple II Computer", nl: "Apple II computer" },
                    { en: "Macintosh", es: "Macintosh", de: "Macintosh", nl: "Macintosh" },
                    { en: "iPod", es: "iPod", de: "iPod", nl: "iPod" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "Who founded Amazon?",
                    es: "¿Quién fundó Amazon?",
                    de: "Wer gründete Amazon?",
                    nl: "Wie heeft Amazon opgericht?"
                },
                options: [
                    { en: "Elon Musk", es: "Elon Musk", de: "Elon Musk", nl: "Elon Musk" },
                    { en: "Jeff Bezos", es: "Jeff Bezos", de: "Jeff Bezos", nl: "Jeff Bezos" },
                    { en: "Larry Ellison", es: "Larry Ellison", de: "Larry Ellison", nl: "Larry Ellison" },
                    { en: "Tim Cook", es: "Tim Cook", de: "Tim Cook", nl: "Tim Cook" }
                ],
                correct: 1
            },
            {
                question: {
                    en: "What was Google originally called?",
                    es: "¿Cómo se llamaba originalmente Google?",
                    de: "Wie hieß Google ursprünglich?",
                    nl: "Hoe heette Google oorspronkelijk?"
                },
                options: [
                    { en: "BackRub", es: "BackRub", de: "BackRub", nl: "BackRub" },
                    { en: "SearchEngine", es: "SearchEngine", de: "SearchEngine", nl: "SearchEngine" },
                    { en: "WebCrawler", es: "WebCrawler", de: "WebCrawler", nl: "WebCrawler" },
                    { en: "PageRank", es: "PageRank", de: "PageRank", nl: "PageRank" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "Which company acquired Instagram in 2012?",
                    es: "¿Qué empresa adquirió Instagram en 2012?",
                    de: "Welches Unternehmen erwarb Instagram im Jahr 2012?",
                    nl: "Welk bedrijf heeft Instagram in 2012 overgenomen?"
                },
                options: [
                    { en: "Google", es: "Google", de: "Google", nl: "Google" },
                    { en: "Twitter", es: "Twitter", de: "Twitter", nl: "Twitter" },
                    { en: "Facebook", es: "Facebook", de: "Facebook", nl: "Facebook" },
                    { en: "Microsoft", es: "Microsoft", de: "Microsoft", nl: "Microsoft" }
                ],
                correct: 2
            },
            {
                question: {
                    en: "What was the original name of Facebook?",
                    es: "¿Cuál era el nombre original de Facebook?",
                    de: "Wie war der ursprüngliche Name von Facebook?",
                    nl: "Wat was de oorspronkelijke naam van Facebook?"
                },
                options: [
                    { en: "The Facebook", es: "The Facebook", de: "The Facebook", nl: "The Facebook" },
                    { en: "Facemash", es: "Facemash", de: "Facemash", nl: "Facemash" },
                    { en: "ConnectU", es: "ConnectU", de: "ConnectU", nl: "ConnectU" },
                    { en: "TheFacebook.com", es: "TheFacebook.com", de: "TheFacebook.com", nl: "TheFacebook.com" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "Which company created the first commercial microprocessor?",
                    es: "¿Qué empresa creó el primer microprocesador comercial?",
                    de: "Welches Unternehmen schuf den ersten kommerziellen Mikroprozessor?",
                    nl: "Welk bedrijf creëerde de eerste commerciële microprocessor?"
                },
                options: [
                    { en: "AMD", es: "AMD", de: "AMD", nl: "AMD" },
                    { en: "Intel", es: "Intel", de: "Intel", nl: "Intel" },
                    { en: "Motorola", es: "Motorola", de: "Motorola", nl: "Motorola" },
                    { en: "IBM", es: "IBM", de: "IBM", nl: "IBM" }
                ],
                correct: 1
            },
            {
                question: {
                    en: "Who founded Tesla Motors?",
                    es: "¿Quién fundó Tesla Motors?",
                    de: "Wer gründete Tesla Motors?",
                    nl: "Wie heeft Tesla Motors opgericht?"
                },
                options: [
                    { en: "Elon Musk only", es: "Solo Elon Musk", de: "Nur Elon Musk", nl: "Alleen Elon Musk" },
                    { en: "Martin Eberhard and Marc Tarpenning", es: "Martin Eberhard y Marc Tarpenning", de: "Martin Eberhard und Marc Tarpenning", nl: "Martin Eberhard en Marc Tarpenning" },
                    { en: "Jeff Bezos", es: "Jeff Bezos", de: "Jeff Bezos", nl: "Jeff Bezos" },
                    { en: "Larry Page", es: "Larry Page", de: "Larry Page", nl: "Larry Page" }
                ],
                correct: 1
            },
            {
                question: {
                    en: "What was IBM originally known for before computers?",
                    es: "¿Por qué era conocida IBM originalmente antes de las computadoras?",
                    de: "Wofür war IBM ursprünglich vor Computern bekannt?",
                    nl: "Waarvoor stond IBM oorspronkelijk bekend voor computers?"
                },
                options: [
                    { en: "Typewriters", es: "Máquinas de escribir", de: "Schreibmaschinen", nl: "Typemachines" },
                    { en: "Punch card machines", es: "Máquinas de tarjetas perforadas", de: "Lochkartenmaschinen", nl: "Ponskaart machines" },
                    { en: "Calculators", es: "Calculadoras", de: "Taschenrechner", nl: "Rekenmachines" },
                    { en: "Printing presses", es: "Prensas de impresión", de: "Druckpressen", nl: "Drukpersen" }
                ],
                correct: 1
            },
            {
                question: {
                    en: "Which company introduced the first iPhone?",
                    es: "¿Qué empresa introdujo el primer iPhone?",
                    de: "Welches Unternehmen führte das erste iPhone ein?",
                    nl: "Welk bedrijf introduceerde de eerste iPhone?"
                },
                options: [
                    { en: "Apple", es: "Apple", de: "Apple", nl: "Apple" },
                    { en: "Samsung", es: "Samsung", de: "Samsung", nl: "Samsung" },
                    { en: "Google", es: "Google", de: "Google", nl: "Google" },
                    { en: "Microsoft", es: "Microsoft", de: "Microsoft", nl: "Microsoft" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "Who founded Oracle Corporation?",
                    es: "¿Quién fundó Oracle Corporation?",
                    de: "Wer gründete Oracle Corporation?",
                    nl: "Wie heeft Oracle Corporation opgericht?"
                },
                options: [
                    { en: "Larry Ellison", es: "Larry Ellison", de: "Larry Ellison", nl: "Larry Ellison" },
                    { en: "Michael Dell", es: "Michael Dell", de: "Michael Dell", nl: "Michael Dell" },
                    { en: "Larry Page", es: "Larry Page", de: "Larry Page", nl: "Larry Page" },
                    { en: "Eric Schmidt", es: "Eric Schmidt", de: "Eric Schmidt", nl: "Eric Schmidt" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "What year was YouTube founded?",
                    es: "¿En qué año se fundó YouTube?",
                    de: "In welchem Jahr wurde YouTube gegründet?",
                    nl: "In welk jaar werd YouTube opgericht?"
                },
                options: [
                    { en: "2003", es: "2003", de: "2003", nl: "2003" },
                    { en: "2004", es: "2004", de: "2004", nl: "2004" },
                    { en: "2005", es: "2005", de: "2005", nl: "2005" },
                    { en: "2006", es: "2006", de: "2006", nl: "2006" }
                ],
                correct: 2
            },
            {
                question: {
                    en: "Which company developed the first graphical user interface (GUI)?",
                    es: "¿Qué empresa desarrolló la primera interfaz gráfica de usuario (GUI)?",
                    de: "Welches Unternehmen entwickelte die erste grafische Benutzeroberfläche (GUI)?",
                    nl: "Welk bedrijf ontwikkelde de eerste grafische gebruikersinterface (GUI)?"
                },
                options: [
                    { en: "Apple", es: "Apple", de: "Apple", nl: "Apple" },
                    { en: "Microsoft", es: "Microsoft", de: "Microsoft", nl: "Microsoft" },
                    { en: "Xerox", es: "Xerox", de: "Xerox", nl: "Xerox" },
                    { en: "IBM", es: "IBM", de: "IBM", nl: "IBM" }
                ],
                correct: 2
            },
            {
                question: {
                    en: "What was the first widely successful personal computer?",
                    es: "¿Cuál fue la primera computadora personal ampliamente exitosa?",
                    de: "Was war der erste weit verbreitete erfolgreiche Personal Computer?",
                    nl: "Wat was de eerste breed succesvolle personal computer?"
                },
                options: [
                    { en: "Apple II", es: "Apple II", de: "Apple II", nl: "Apple II" },
                    { en: "IBM PC", es: "IBM PC", de: "IBM PC", nl: "IBM PC" },
                    { en: "Commodore 64", es: "Commodore 64", de: "Commodore 64", nl: "Commodore 64" },
                    { en: "Altair 8800", es: "Altair 8800", de: "Altair 8800", nl: "Altair 8800" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "Who founded Netflix?",
                    es: "¿Quién fundó Netflix?",
                    de: "Wer gründete Netflix?",
                    nl: "Wie heeft Netflix opgericht?"
                },
                options: [
                    { en: "Reed Hastings and Marc Randolph", es: "Reed Hastings y Marc Randolph", de: "Reed Hastings und Marc Randolph", nl: "Reed Hastings en Marc Randolph" },
                    { en: "Jeff Bezos", es: "Jeff Bezos", de: "Jeff Bezos", nl: "Jeff Bezos" },
                    { en: "Steve Jobs", es: "Steve Jobs", de: "Steve Jobs", nl: "Steve Jobs" },
                    { en: "Bill Gates", es: "Bill Gates", de: "Bill Gates", nl: "Bill Gates" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "Which company acquired Skype in 2011?",
                    es: "¿Qué empresa adquirió Skype en 2011?",
                    de: "Welches Unternehmen erwarb Skype im Jahr 2011?",
                    nl: "Welk bedrijf heeft Skype overgenomen in 2011?"
                },
                options: [
                    { en: "Google", es: "Google", de: "Google", nl: "Google" },
                    { en: "Facebook", es: "Facebook", de: "Facebook", nl: "Facebook" },
                    { en: "Microsoft", es: "Microsoft", de: "Microsoft", nl: "Microsoft" },
                    { en: "Apple", es: "Apple", de: "Apple", nl: "Apple" }
                ],
                correct: 2
            },
            {
                question: {
                    en: "What was the first search engine on the internet?",
                    es: "¿Cuál fue el primer motor de búsqueda en internet?",
                    de: "Was war die erste Suchmaschine im Internet?",
                    nl: "Wat was de eerste zoekmachine op internet?"
                },
                options: [
                    { en: "Yahoo", es: "Yahoo", de: "Yahoo", nl: "Yahoo" },
                    { en: "Google", es: "Google", de: "Google", nl: "Google" },
                    { en: "Archie", es: "Archie", de: "Archie", nl: "Archie" },
                    { en: "AltaVista", es: "AltaVista", de: "AltaVista", nl: "AltaVista" }
                ],
                correct: 2
            },
            {
                question: {
                    en: "Who invented the World Wide Web?",
                    es: "¿Quién inventó la World Wide Web?",
                    de: "Wer erfand das World Wide Web?",
                    nl: "Wie heeft het World Wide Web uitgevonden?"
                },
                options: [
                    { en: "Tim Berners-Lee", es: "Tim Berners-Lee", de: "Tim Berners-Lee", nl: "Tim Berners-Lee" },
                    { en: "Vint Cerf", es: "Vint Cerf", de: "Vint Cerf", nl: "Vint Cerf" },
                    { en: "Marc Andreessen", es: "Marc Andreessen", de: "Marc Andreessen", nl: "Marc Andreessen" },
                    { en: "Larry Page", es: "Larry Page", de: "Larry Page", nl: "Larry Page" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "Which company created the first web browser?",
                    es: "¿Qué empresa creó el primer navegador web?",
                    de: "Welches Unternehmen schuf den ersten Webbrowser?",
                    nl: "Welk bedrijf creëerde de eerste webbrowser?"
                },
                options: [
                    { en: "Microsoft", es: "Microsoft", de: "Microsoft", nl: "Microsoft" },
                    { en: "Netscape", es: "Netscape", de: "Netscape", nl: "Netscape" },
                    { en: "CERN", es: "CERN", de: "CERN", nl: "CERN" },
                    { en: "Apple", es: "Apple", de: "Apple", nl: "Apple" }
                ],
                correct: 2
            },
            {
                question: {
                    en: "What was PayPal originally called?",
                    es: "¿Cómo se llamaba originalmente PayPal?",
                    de: "Wie hieß PayPal ursprünglich?",
                    nl: "Hoe heette PayPal oorspronkelijk?"
                },
                options: [
                    { en: "X.com", es: "X.com", de: "X.com", nl: "X.com" },
                    { en: "Confinity", es: "Confinity", de: "Confinity", nl: "Confinity" },
                    { en: "FieldLink", es: "FieldLink", de: "FieldLink", nl: "FieldLink" },
                    { en: "Both A and B", es: "Tanto A como B", de: "Sowohl A als auch B", nl: "Zowel A als B" }
                ],
                correct: 3
            },
            {
                question: {
                    en: "Who founded Twitter?",
                    es: "¿Quién fundó Twitter?",
                    de: "Wer gründete Twitter?",
                    nl: "Wie heeft Twitter opgericht?"
                },
                options: [
                    { en: "Jack Dorsey", es: "Jack Dorsey", de: "Jack Dorsey", nl: "Jack Dorsey" },
                    { en: "Jack Dorsey, Noah Glass, Biz Stone, and Evan Williams", es: "Jack Dorsey, Noah Glass, Biz Stone y Evan Williams", de: "Jack Dorsey, Noah Glass, Biz Stone und Evan Williams", nl: "Jack Dorsey, Noah Glass, Biz Stone en Evan Williams" },
                    { en: "Mark Zuckerberg", es: "Mark Zuckerberg", de: "Mark Zuckerberg", nl: "Mark Zuckerberg" },
                    { en: "Evan Williams", es: "Evan Williams", de: "Evan Williams", nl: "Evan Williams" }
                ],
                correct: 1
            },
            {
                question: {
                    en: "Which company introduced the first smartphone?",
                    es: "¿Qué empresa introdujo el primer teléfono inteligente?",
                    de: "Welches Unternehmen führte das erste Smartphone ein?",
                    nl: "Welk bedrijf introduceerde de eerste smartphone?"
                },
                options: [
                    { en: "Apple", es: "Apple", de: "Apple", nl: "Apple" },
                    { en: "IBM", es: "IBM", de: "IBM", nl: "IBM" },
                    { en: "BlackBerry", es: "BlackBerry", de: "BlackBerry", nl: "BlackBerry" },
                    { en: "Nokia", es: "Nokia", de: "Nokia", nl: "Nokia" }
                ],
                correct: 1
            },
            {
                question: {
                    en: "What was the name of IBM's first smartphone?",
                    es: "¿Cuál era el nombre del primer teléfono inteligente de IBM?",
                    de: "Wie hieß IBMs erstes Smartphone?",
                    nl: "Wat was de naam van IBM's eerste smartphone?"
                },
                options: [
                    { en: "Simon Personal Communicator", es: "Simon Personal Communicator", de: "Simon Personal Communicator", nl: "Simon Personal Communicator" },
                    { en: "IBM Phone", es: "IBM Phone", de: "IBM Phone", nl: "IBM Phone" },
                    { en: "ThinkPhone", es: "ThinkPhone", de: "ThinkPhone", nl: "ThinkPhone" },
                    { en: "PowerPhone", es: "PowerPhone", de: "PowerPhone", nl: "PowerPhone" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "Which company developed MS-DOS?",
                    es: "¿Qué empresa desarrolló MS-DOS?",
                    de: "Welches Unternehmen entwickelte MS-DOS?",
                    nl: "Welk bedrijf ontwikkelde MS-DOS?"
                },
                options: [
                    { en: "Microsoft", es: "Microsoft", de: "Microsoft", nl: "Microsoft" },
                    { en: "IBM", es: "IBM", de: "IBM", nl: "IBM" },
                    { en: "Seattle Computer Products", es: "Seattle Computer Products", de: "Seattle Computer Products", nl: "Seattle Computer Products" },
                    { en: "Digital Research", es: "Digital Research", de: "Digital Research", nl: "Digital Research" }
                ],
                correct: 2
            },
            {
                question: {
                    en: "Who co-founded Adobe Systems?",
                    es: "¿Quién cofundó Adobe Systems?",
                    de: "Wer gründete Adobe Systems mit?",
                    nl: "Wie heeft Adobe Systems mede-opgericht?"
                },
                options: [
                    { en: "John Warnock and Charles Geschke", es: "John Warnock y Charles Geschke", de: "John Warnock und Charles Geschke", nl: "John Warnock en Charles Geschke" },
                    { en: "Bill Gates and Paul Allen", es: "Bill Gates y Paul Allen", de: "Bill Gates und Paul Allen", nl: "Bill Gates en Paul Allen" },
                    { en: "Steve Jobs and Steve Wozniak", es: "Steve Jobs y Steve Wozniak", de: "Steve Jobs und Steve Wozniak", nl: "Steve Jobs en Steve Wozniak" },
                    { en: "Larry Ellison and Bob Miner", es: "Larry Ellison y Bob Miner", de: "Larry Ellison und Bob Miner", nl: "Larry Ellison en Bob Miner" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "What was the first product released by Adobe?",
                    es: "¿Cuál fue el primer producto lanzado por Adobe?",
                    de: "Was war das erste von Adobe veröffentlichte Produkt?",
                    nl: "Wat was het eerste product dat Adobe uitbracht?"
                },
                options: [
                    { en: "Photoshop", es: "Photoshop", de: "Photoshop", nl: "Photoshop" },
                    { en: "PostScript", es: "PostScript", de: "PostScript", nl: "PostScript" },
                    { en: "Illustrator", es: "Illustrator", de: "Illustrator", nl: "Illustrator" },
                    { en: "Acrobat", es: "Acrobat", de: "Acrobat", nl: "Acrobat" }
                ],
                correct: 1
            },
            {
                question: {
                    en: "Which company created the Java programming language?",
                    es: "¿Qué empresa creó el lenguaje de programación Java?",
                    de: "Welches Unternehmen schuf die Programmiersprache Java?",
                    nl: "Welk bedrijf creëerde de programmeertaal Java?"
                },
                options: [
                    { en: "Oracle", es: "Oracle", de: "Oracle", nl: "Oracle" },
                    { en: "Sun Microsystems", es: "Sun Microsystems", de: "Sun Microsystems", nl: "Sun Microsystems" },
                    { en: "IBM", es: "IBM", de: "IBM", nl: "IBM" },
                    { en: "Microsoft", es: "Microsoft", de: "Microsoft", nl: "Microsoft" }
                ],
                correct: 1
            },
            {
                question: {
                    en: "What was Nintendo originally known for before video games?",
                    es: "¿Por qué era conocida Nintendo originalmente antes de los videojuegos?",
                    de: "Wofür war Nintendo ursprünglich vor Videospielen bekannt?",
                    nl: "Waarvoor stond Nintendo oorspronkelijk bekend voor videogames?"
                },
                options: [
                    { en: "Playing cards", es: "Cartas de juego", de: "Spielkarten", nl: "Speelkaarten" },
                    { en: "Toys", es: "Juguetes", de: "Spielzeug", nl: "Speelgoed" },
                    { en: "Electronics", es: "Electrónicos", de: "Elektronik", nl: "Elektronica" },
                    { en: "Board games", es: "Juegos de mesa", de: "Brettspiele", nl: "Bordspellen" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "Who founded LinkedIn?",
                    es: "¿Quién fundó LinkedIn?",
                    de: "Wer gründete LinkedIn?",
                    nl: "Wie heeft LinkedIn opgericht?"
                },
                options: [
                    { en: "Reid Hoffman", es: "Reid Hoffman", de: "Reid Hoffman", nl: "Reid Hoffman" },
                    { en: "Mark Zuckerberg", es: "Mark Zuckerberg", de: "Mark Zuckerberg", nl: "Mark Zuckerberg" },
                    { en: "Jack Dorsey", es: "Jack Dorsey", de: "Jack Dorsey", nl: "Jack Dorsey" },
                    { en: "Kevin Systrom", es: "Kevin Systrom", de: "Kevin Systrom", nl: "Kevin Systrom" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "Which company acquired WhatsApp in 2014?",
                    es: "¿Qué empresa adquirió WhatsApp en 2014?",
                    de: "Welches Unternehmen erwarb WhatsApp im Jahr 2014?",
                    nl: "Welk bedrijf heeft WhatsApp overgenomen in 2014?"
                },
                options: [
                    { en: "Google", es: "Google", de: "Google", nl: "Google" },
                    { en: "Microsoft", es: "Microsoft", de: "Microsoft", nl: "Microsoft" },
                    { en: "Facebook", es: "Facebook", de: "Facebook", nl: "Facebook" },
                    { en: "Apple", es: "Apple", de: "Apple", nl: "Apple" }
                ],
                correct: 2
            },
            {
                question: {
                    en: "What was the original business model of Amazon?",
                    es: "¿Cuál era el modelo de negocio original de Amazon?",
                    de: "Was war das ursprüngliche Geschäftsmodell von Amazon?",
                    nl: "Wat was het oorspronkelijke bedrijfsmodel van Amazon?"
                },
                options: [
                    { en: "Cloud computing", es: "Computación en la nube", de: "Cloud Computing", nl: "Cloud computing" },
                    { en: "Online bookstore", es: "Librería online", de: "Online-Buchhandlung", nl: "Online boekwinkel" },
                    { en: "Streaming service", es: "Servicio de streaming", de: "Streaming-Dienst", nl: "Streamingdienst" },
                    { en: "E-commerce marketplace", es: "Mercado de comercio electrónico", de: "E-Commerce-Marktplatz", nl: "E-commerce marktplaats" }
                ],
                correct: 1
            },
            {
                question: {
                    en: "Who founded Uber?",
                    es: "¿Quién fundó Uber?",
                    de: "Wer gründete Uber?",
                    nl: "Wie heeft Uber opgericht?"
                },
                options: [
                    { en: "Travis Kalanick", es: "Travis Kalanick", de: "Travis Kalanick", nl: "Travis Kalanick" },
                    { en: "Garrett Camp and Travis Kalanick", es: "Garrett Camp y Travis Kalanick", de: "Garrett Camp und Travis Kalanick", nl: "Garrett Camp en Travis Kalanick" },
                    { en: "Brian Chesky", es: "Brian Chesky", de: "Brian Chesky", nl: "Brian Chesky" },
                    { en: "Elon Musk", es: "Elon Musk", de: "Elon Musk", nl: "Elon Musk" }
                ],
                correct: 1
            },
            {
                question: {
                    en: "What year did the first iPhone launch?",
                    es: "¿En qué año se lanzó el primer iPhone?",
                    de: "In welchem Jahr wurde das erste iPhone auf den Markt gebracht?",
                    nl: "In welk jaar werd de eerste iPhone gelanceerd?"
                },
                options: [
                    { en: "2006", es: "2006", de: "2006", nl: "2006" },
                    { en: "2007", es: "2007", de: "2007", nl: "2007" },
                    { en: "2008", es: "2008", de: "2008", nl: "2008" },
                    { en: "2009", es: "2009", de: "2009", nl: "2009" }
                ],
                correct: 1
            },
            {
                question: {
                    en: "Which company developed the first hard disk drive?",
                    es: "¿Qué empresa desarrolló la primera unidad de disco duro?",
                    de: "Welches Unternehmen entwickelte das erste Festplattenlaufwerk?",
                    nl: "Welk bedrijf ontwikkelde de eerste harde schijf?"
                },
                options: [
                    { en: "IBM", es: "IBM", de: "IBM", nl: "IBM" },
                    { en: "Seagate", es: "Seagate", de: "Seagate", nl: "Seagate" },
                    { en: "Western Digital", es: "Western Digital", de: "Western Digital", nl: "Western Digital" },
                    { en: "Maxtor", es: "Maxtor", de: "Maxtor", nl: "Maxtor" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "What was the name of the first IBM PC?",
                    es: "¿Cuál era el nombre del primer PC de IBM?",
                    de: "Wie hieß der erste IBM PC?",
                    nl: "Wat was de naam van de eerste IBM PC?"
                },
                options: [
                    { en: "IBM Personal Computer", es: "IBM Personal Computer", de: "IBM Personal Computer", nl: "IBM Personal Computer" },
                    { en: "IBM Model 5150", es: "IBM Model 5150", de: "IBM Model 5150", nl: "IBM Model 5150" },
                    { en: "IBM PC", es: "IBM PC", de: "IBM PC", nl: "IBM PC" },
                    { en: "All of the above", es: "Todas las anteriores", de: "Alle oben genannten", nl: "Alle bovenstaande" }
                ],
                correct: 3
            },
            {
                question: {
                    en: "Who founded Salesforce?",
                    es: "¿Quién fundó Salesforce?",
                    de: "Wer gründete Salesforce?",
                    nl: "Wie heeft Salesforce opgericht?"
                },
                options: [
                    { en: "Marc Benioff", es: "Marc Benioff", de: "Marc Benioff", nl: "Marc Benioff" },
                    { en: "Larry Ellison", es: "Larry Ellison", de: "Larry Ellison", nl: "Larry Ellison" },
                    { en: "Satya Nadella", es: "Satya Nadella", de: "Satya Nadella", nl: "Satya Nadella" },
                    { en: "Sundar Pichai", es: "Sundar Pichai", de: "Sundar Pichai", nl: "Sundar Pichai" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "Which company created the first spreadsheet software?",
                    es: "¿Qué empresa creó el primer software de hoja de cálculo?",
                    de: "Welches Unternehmen schuf die erste Tabellenkalkulationssoftware?",
                    nl: "Welk bedrijf creëerde de eerste spreadsheet software?"
                },
                options: [
                    { en: "Microsoft", es: "Microsoft", de: "Microsoft", nl: "Microsoft" },
                    { en: "Lotus", es: "Lotus", de: "Lotus", nl: "Lotus" },
                    { en: "VisiCorp", es: "VisiCorp", de: "VisiCorp", nl: "VisiCorp" },
                    { en: "Apple", es: "Apple", de: "Apple", nl: "Apple" }
                ],
                correct: 2
            },
            {
                question: {
                    en: "What was the name of the first spreadsheet program?",
                    es: "¿Cuál era el nombre del primer programa de hoja de cálculo?",
                    de: "Wie hieß das erste Tabellenkalkulationsprogramm?",
                    nl: "Wat was de naam van het eerste spreadsheet programma?"
                },
                options: [
                    { en: "Excel", es: "Excel", de: "Excel", nl: "Excel" },
                    { en: "Lotus 1-2-3", es: "Lotus 1-2-3", de: "Lotus 1-2-3", nl: "Lotus 1-2-3" },
                    { en: "VisiCalc", es: "VisiCalc", de: "VisiCalc", nl: "VisiCalc" },
                    { en: "Quattro", es: "Quattro", de: "Quattro", nl: "Quattro" }
                ],
                correct: 2
            },
            {
                question: {
                    en: "Which company acquired GitHub in 2018?",
                    es: "¿Qué empresa adquirió GitHub en 2018?",
                    de: "Welches Unternehmen erwarb GitHub im Jahr 2018?",
                    nl: "Welk bedrijf heeft GitHub overgenomen in 2018?"
                },
                options: [
                    { en: "Google", es: "Google", de: "Google", nl: "Google" },
                    { en: "Amazon", es: "Amazon", de: "Amazon", nl: "Amazon" },
                    { en: "Microsoft", es: "Microsoft", de: "Microsoft", nl: "Microsoft" },
                    { en: "IBM", es: "IBM", de: "IBM", nl: "IBM" }
                ],
                correct: 2
            },
            {
                question: {
                    en: "Who founded Spotify?",
                    es: "¿Quién fundó Spotify?",
                    de: "Wer gründete Spotify?",
                    nl: "Wie heeft Spotify opgericht?"
                },
                options: [
                    { en: "Daniel Ek", es: "Daniel Ek", de: "Daniel Ek", nl: "Daniel Ek" },
                    { en: "Daniel Ek and Martin Lorentzon", es: "Daniel Ek y Martin Lorentzon", de: "Daniel Ek und Martin Lorentzon", nl: "Daniel Ek en Martin Lorentzon" },
                    { en: "Sean Parker", es: "Sean Parker", de: "Sean Parker", nl: "Sean Parker" },
                    { en: "Steve Jobs", es: "Steve Jobs", de: "Steve Jobs", nl: "Steve Jobs" }
                ],
                correct: 1
            },
            {
                question: {
                    en: "What was the first video game console released by Nintendo?",
                    es: "¿Cuál fue la primera consola de videojuegos lanzada por Nintendo?",
                    de: "Was war die erste von Nintendo veröffentlichte Videospielkonsole?",
                    nl: "Wat was de eerste videogameconsole uitgebracht door Nintendo?"
                },
                options: [
                    { en: "Nintendo Entertainment System", es: "Nintendo Entertainment System", de: "Nintendo Entertainment System", nl: "Nintendo Entertainment System" },
                    { en: "Game Boy", es: "Game Boy", de: "Game Boy", nl: "Game Boy" },
                    { en: "Color TV-Game", es: "Color TV-Game", de: "Color TV-Game", nl: "Color TV-Game" },
                    { en: "Super Nintendo", es: "Super Nintendo", de: "Super Nintendo", nl: "Super Nintendo" }
                ],
                correct: 2
            },
            {
                question: {
                    en: "Which company developed the UNIX operating system?",
                    es: "¿Qué empresa desarrolló el sistema operativo UNIX?",
                    de: "Welches Unternehmen entwickelte das UNIX-Betriebssystem?",
                    nl: "Welk bedrijf ontwikkelde het UNIX besturingssysteem?"
                },
                options: [
                    { en: "IBM", es: "IBM", de: "IBM", nl: "IBM" },
                    { en: "Bell Labs", es: "Bell Labs", de: "Bell Labs", nl: "Bell Labs" },
                    { en: "Microsoft", es: "Microsoft", de: "Microsoft", nl: "Microsoft" },
                    { en: "Sun Microsystems", es: "Sun Microsystems", de: "Sun Microsystems", nl: "Sun Microsystems" }
                ],
                correct: 1
            },
            {
                question: {
                    en: "Who created Linux?",
                    es: "¿Quién creó Linux?",
                    de: "Wer schuf Linux?",
                    nl: "Wie heeft Linux gecreëerd?"
                },
                options: [
                    { en: "Richard Stallman", es: "Richard Stallman", de: "Richard Stallman", nl: "Richard Stallman" },
                    { en: "Linus Torvalds", es: "Linus Torvalds", de: "Linus Torvalds", nl: "Linus Torvalds" },
                    { en: "Ken Thompson", es: "Ken Thompson", de: "Ken Thompson", nl: "Ken Thompson" },
                    { en: "Dennis Ritchie", es: "Dennis Ritchie", de: "Dennis Ritchie", nl: "Dennis Ritchie" }
                ],
                correct: 1
            },
            {
                question: {
                    en: "Which company created the first mouse for computers?",
                    es: "¿Qué empresa creó el primer ratón para computadoras?",
                    de: "Welches Unternehmen schuf die erste Maus für Computer?",
                    nl: "Welk bedrijf creëerde de eerste muis voor computers?"
                },
                options: [
                    { en: "Apple", es: "Apple", de: "Apple", nl: "Apple" },
                    { en: "IBM", es: "IBM", de: "IBM", nl: "IBM" },
                    { en: "Stanford Research Institute", es: "Stanford Research Institute", de: "Stanford Research Institute", nl: "Stanford Research Institute" },
                    { en: "Xerox", es: "Xerox", de: "Xerox", nl: "Xerox" }
                ],
                correct: 2
            },
            {
                question: {
                    en: "What year was eBay founded?",
                    es: "¿En qué año se fundó eBay?",
                    de: "In welchem Jahr wurde eBay gegründet?",
                    nl: "In welk jaar werd eBay opgericht?"
                },
                options: [
                    { en: "1994", es: "1994", de: "1994", nl: "1994" },
                    { en: "1995", es: "1995", de: "1995", nl: "1995" },
                    { en: "1996", es: "1996", de: "1996", nl: "1996" },
                    { en: "1997", es: "1997", de: "1997", nl: "1997" }
                ],
                correct: 1
            },
            {
                question: {
                    en: "Who founded Airbnb?",
                    es: "¿Quién fundó Airbnb?",
                    de: "Wer gründete Airbnb?",
                    nl: "Wie heeft Airbnb opgericht?"
                },
                options: [
                    { en: "Brian Chesky, Joe Gebbia, and Nathan Blecharczyk", es: "Brian Chesky, Joe Gebbia y Nathan Blecharczyk", de: "Brian Chesky, Joe Gebbia und Nathan Blecharczyk", nl: "Brian Chesky, Joe Gebbia en Nathan Blecharczyk" },
                    { en: "Travis Kalanick", es: "Travis Kalanick", de: "Travis Kalanick", nl: "Travis Kalanick" },
                    { en: "Reed Hastings", es: "Reed Hastings", de: "Reed Hastings", nl: "Reed Hastings" },
                    { en: "Elon Musk", es: "Elon Musk", de: "Elon Musk", nl: "Elon Musk" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "Which company developed the first computer virus?",
                    es: "¿Qué empresa desarrolló el primer virus informático?",
                    de: "Welches Unternehmen entwickelte den ersten Computervirus?",
                    nl: "Welk bedrijf ontwikkelde het eerste computervirus?"
                },
                options: [
                    { en: "No company - it was created by researchers", es: "Ninguna empresa - fue creado por investigadores", de: "Kein Unternehmen - es wurde von Forschern erstellt", nl: "Geen bedrijf - het werd gemaakt door onderzoekers" },
                    { en: "IBM", es: "IBM", de: "IBM", nl: "IBM" },
                    { en: "Microsoft", es: "Microsoft", de: "Microsoft", nl: "Microsoft" },
                    { en: "Apple", es: "Apple", de: "Apple", nl: "Apple" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "What was the first commercially available computer?",
                    es: "¿Cuál fue la primera computadora disponible comercialmente?",
                    de: "Was war der erste kommerziell verfügbare Computer?",
                    nl: "Wat was de eerste commercieel beschikbare computer?"
                },
                options: [
                    { en: "ENIAC", es: "ENIAC", de: "ENIAC", nl: "ENIAC" },
                    { en: "UNIVAC I", es: "UNIVAC I", de: "UNIVAC I", nl: "UNIVAC I" },
                    { en: "IBM 650", es: "IBM 650", de: "IBM 650", nl: "IBM 650" },
                    { en: "EDVAC", es: "EDVAC", de: "EDVAC", nl: "EDVAC" }
                ],
                correct: 1
            }
        ]
    };

    if (typeof window.addLevel === 'function') {
        window.addLevel('warm-up/technology', level8);
    }
})();