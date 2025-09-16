(function() {
    const level3 = {
        name: {
            en: "Kings and Queens",
            es: "Reyes y Reinas",
            de: "Könige und Königinnen",
            nl: "Koningen en Koninginnen"
        },
        questions: [
            {
                question: {
                    en: "What do we call the special chair a king or queen sits on?",
                    es: "¿Cómo llamamos a la silla especial en la que se sienta un rey o reina?",
                    de: "Wie nennen wir den besonderen Stuhl, auf dem ein König oder eine Königin sitzt?",
                    nl: "Hoe noemen we de speciale stoel waarop een koning of koningin zit?"
                },
                options: [
                    { en: "Throne", es: "Trono", de: "Thron", nl: "Troon" },
                    { en: "Chair", es: "Silla", de: "Stuhl", nl: "Stoel" },
                    { en: "Bench", es: "Banco", de: "Bank", nl: "Bank" },
                    { en: "Sofa", es: "Sofá", de: "Sofa", nl: "Bank" }
                ],
                correct: 0,
                explanation: {
                    en: "A throne is the special, ornate chair where kings and queens sit during important ceremonies. Thrones are usually made of expensive materials like gold and decorated with jewels. The throne represents the monarch's power and authority to rule over their kingdom.",
                    es: "Un trono es la silla especial y ornamentada donde se sientan los reyes y reinas durante ceremonias importantes. Los tronos usualmente están hechos de materiales caros como oro y decorados con joyas. El trono representa el poder y la autoridad del monarca para gobernar su reino.",
                    de: "Ein Thron ist der besondere, verzierte Stuhl, auf dem Könige und Königinnen bei wichtigen Zeremonien sitzen. Throne sind normalerweise aus teuren Materialien wie Gold gemacht und mit Juwelen geschmückt. Der Thron repräsentiert die Macht und Autorität des Monarchen, über ihr Königreich zu herrschen.",
                    nl: "Een troon is de speciale, versierde stoel waar koningen en koninginnen op zitten tijdens belangrijke ceremonies. Tronen zijn meestal gemaakt van dure materialen zoals goud en versierd met juwelen. De troon vertegenwoordigt de macht en autoriteit van de monarch om over hun koninkrijk te regeren."
                }
            },
            {
                question: {
                    en: "What do kings and queens wear on their heads?",
                    es: "¿Qué llevan los reyes y reinas en sus cabezas?",
                    de: "Was tragen Könige und Königinnen auf ihren Köpfen?",
                    nl: "Wat dragen koningen en koninginnen op hun hoofd?"
                },
                options: [
                    { en: "Crown", es: "Corona", de: "Krone", nl: "Kroon" },
                    { en: "Hat", es: "Sombrero", de: "Hut", nl: "Hoed" },
                    { en: "Helmet", es: "Casco", de: "Helm", nl: "Helm" },
                    { en: "Cap", es: "Gorra", de: "Mütze", nl: "Pet" }
                ],
                correct: 0,
                explanation: {
                    en: "Kings and queens wear crowns made of gold and precious jewels to show their royal status. Each crown is unique and often passed down through royal families for generations. The crown is a symbol of the monarch's divine right to rule and their responsibility to their people.",
                    es: "Los reyes y reinas usan coronas hechas de oro y joyas preciosas para mostrar su estatus real. Cada corona es única y a menudo se pasa a través de familias reales por generaciones. La corona es un símbolo del derecho divino del monarca a gobernar y su responsabilidad hacia su pueblo.",
                    de: "Könige und Königinnen tragen Kronen aus Gold und kostbaren Juwelen, um ihren königlichen Status zu zeigen. Jede Krone ist einzigartig und wird oft durch königliche Familien über Generationen weitergegeben. Die Krone ist ein Symbol für das göttliche Recht des Monarchen zu herrschen und ihre Verantwortung gegenüber ihrem Volk.",
                    nl: "Koningen en koninginnen dragen kronen gemaakt van goud en kostbare juwelen om hun koninklijke status te tonen. Elke kroon is uniek en wordt vaak doorgegeven door koninklijke families gedurende generaties. De kroon is een symbool van het goddelijke recht van de monarch om te regeren en hun verantwoordelijkheid jegens hun volk."
                }
            },
            {
                question: {
                    en: "Where do kings and queens usually live?",
                    es: "¿Dónde suelen vivir los reyes y reinas?",
                    de: "Wo leben Könige und Königinnen normalerweise?",
                    nl: "Waar wonen koningen en koninginnen gewoonlijk?"
                },
                options: [
                    { en: "Palace", es: "Palacio", de: "Palast", nl: "Paleis" },
                    { en: "House", es: "Casa", de: "Haus", nl: "Huis" },
                    { en: "Apartment", es: "Apartamento", de: "Wohnung", nl: "Appartement" },
                    { en: "Hotel", es: "Hotel", de: "Hotel", nl: "Hotel" }
                ],
                correct: 0,
                explanation: {
                    en: "A palace is a grand, luxurious residence where kings and queens live with their families. Palaces are much larger than regular houses and have many rooms for different purposes, including throne rooms, ballrooms, and guest quarters. They often feature beautiful gardens and are designed to show the wealth and power of the royal family.",
                    es: "Un palacio es una residencia grandiosa y lujosa donde viven los reyes y reinas con sus familias. Los palacios son mucho más grandes que las casas normales y tienen muchas habitaciones para diferentes propósitos, incluyendo salas del trono, salones de baile y cuartos de huéspedes. A menudo tienen hermosos jardines y están diseñados para mostrar la riqueza y el poder de la familia real.",
                    de: "Ein Palast ist eine große, luxuriöse Residenz, wo Könige und Königinnen mit ihren Familien leben. Paläste sind viel größer als normale Häuser und haben viele Räume für verschiedene Zwecke, einschließlich Thronsäle, Ballsäle und Gästezimmer. Sie haben oft schöne Gärten und sind entworfen, um den Reichtum und die Macht der königlichen Familie zu zeigen.",
                    nl: "Een paleis is een groot, luxueus verblijf waar koningen en koninginnen wonen met hun families. Paleizen zijn veel groter dan gewone huizen en hebben veel kamers voor verschillende doeleinden, inclusief troonzalen, balzalen en gastenkamers. Ze hebben vaak prachtige tuinen en zijn ontworpen om de rijkdom en macht van de koninklijke familie te tonen."
                }
            },
            {
                question: {
                    en: "What is a kingdom?",
                    es: "¿Qué es un reino?",
                    de: "Was ist ein Königreich?",
                    nl: "Wat is een koninkrijk?"
                },
                options: [
                    { en: "Land ruled by a king or queen", es: "Tierra gobernada por un rey o reina", de: "Land regiert von einem König oder einer Königin", nl: "Land geregeerd door een koning or koningin" },
                    { en: "A big city", es: "Una gran ciudad", de: "Eine große Stadt", nl: "Een grote stad" },
                    { en: "A farm", es: "Una granja", de: "Ein Bauernhof", nl: "Een boerderij" },
                    { en: "A school", es: "Una escuela", de: "Eine Schule", nl: "Een school" }
                ],
                correct: 0,
                explanation: {
                    en: "A kingdom is a country or territory ruled by a king or queen. The monarch has the highest authority in the kingdom and makes important decisions for all the people who live there. Kingdoms can be small or very large, and they include cities, towns, farms, and everything within their borders.",
                    es: "Un reino es un país o territorio gobernado por un rey o reina. El monarca tiene la autoridad más alta en el reino y toma decisiones importantes para todas las personas que viven allí. Los reinos pueden ser pequeños o muy grandes, e incluyen ciudades, pueblos, granjas y todo dentro de sus fronteras.",
                    de: "Ein Königreich ist ein Land oder Gebiet, das von einem König oder einer Königin regiert wird. Der Monarch hat die höchste Autorität im Königreich und trifft wichtige Entscheidungen für alle Menschen, die dort leben. Königreiche können klein oder sehr groß sein und umfassen Städte, Dörfer, Bauernhöfe und alles innerhalb ihrer Grenzen.",
                    nl: "Een koninkrijk is een land of gebied dat geregeerd wordt door een koning of koningin. De monarch heeft de hoogste autoriteit in het koninkrijk en neemt belangrijke beslissingen voor alle mensen die daar wonen. Koninkrijken kunnen klein of heel groot zijn en bevatten steden, dorpen, boerderijen en alles binnen hun grenzen."
                }
            },
            {
                question: {
                    en: "Who was the famous queen of England with a very long reign?",
                    es: "¿Quién fue la famosa reina de Inglaterra con un reinado muy largo?",
                    de: "Wer war die berühmte Königin von England mit einer sehr langen Regierungszeit?",
                    nl: "Wie was de beroemde koningin van Engeland met een zeer lange regeerperiode?"
                },
                options: [
                    { en: "Queen Victoria", es: "Reina Victoria", de: "Königin Victoria", nl: "Koningin Victoria" },
                    { en: "Queen Mary", es: "Reina María", de: "Königin Mary", nl: "Koningin Mary" },
                    { en: "Queen Anne", es: "Reina Ana", de: "Königin Anne", nl: "Koningin Anne" },
                    { en: "Queen Jane", es: "Reina Juana", de: "Königin Jane", nl: "Koningin Jane" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "What do we call the son of a king or queen?",
                    es: "¿Cómo llamamos al hijo de un rey o reina?",
                    de: "Wie nennen wir den Sohn eines Königs oder einer Königin?",
                    nl: "Hoe noemen we de zoon van een koning of koningin?"
                },
                options: [
                    { en: "Prince", es: "Príncipe", de: "Prinz", nl: "Prins" },
                    { en: "Duke", es: "Duque", de: "Herzog", nl: "Hertog" },
                    { en: "Lord", es: "Señor", de: "Lord", nl: "Heer" },
                    { en: "Knight", es: "Caballero", de: "Ritter", nl: "Ridder" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "What do we call the daughter of a king or queen?",
                    es: "¿Cómo llamamos a la hija de un rey o reina?",
                    de: "Wie nennen wir die Tochter eines Königs oder einer Königin?",
                    nl: "Hoe noemen we de dochter van een koning of koningin?"
                },
                options: [
                    { en: "Princess", es: "Princesa", de: "Prinzessin", nl: "Prinses" },
                    { en: "Duchess", es: "Duquesa", de: "Herzogin", nl: "Hertogin" },
                    { en: "Lady", es: "Dama", de: "Dame", nl: "Dame" },
                    { en: "Countess", es: "Condesa", de: "Gräfin", nl: "Gravin" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "Which famous king had a round table with knights?",
                    es: "¿Qué famoso rey tenía una mesa redonda con caballeros?",
                    de: "Welcher berühmte König hatte einen runden Tisch mit Rittern?",
                    nl: "Welke beroemde koning had een ronde tafel met ridders?"
                },
                options: [
                    { en: "King Arthur", es: "Rey Arturo", de: "König Artus", nl: "Koning Arthur" },
                    { en: "King Henry", es: "Rey Enrique", de: "König Heinrich", nl: "Koning Hendrik" },
                    { en: "King William", es: "Rey Guillermo", de: "König Wilhelm", nl: "Koning Willem" },
                    { en: "King John", es: "Rey Juan", de: "König John", nl: "Koning Jan" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "What special ceremony makes someone a king or queen?",
                    es: "¿Qué ceremonia especial hace a alguien rey o reina?",
                    de: "Welche besondere Zeremonie macht jemanden zum König oder zur Königin?",
                    nl: "Welke speciale ceremonie maakt iemand tot koning of koningin?"
                },
                options: [
                    { en: "Coronation", es: "Coronación", de: "Krönung", nl: "Kroning" },
                    { en: "Wedding", es: "Boda", de: "Hochzeit", nl: "Huwelijk" },
                    { en: "Birthday party", es: "Fiesta de cumpleaños", de: "Geburtstagsfeier", nl: "Verjaardagsfeest" },
                    { en: "Graduation", es: "Graduación", de: "Abschluss", nl: "Afstuderen" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "Which Egyptian queen was famous for her beauty?",
                    es: "¿Qué reina egipcia era famosa por su belleza?",
                    de: "Welche ägyptische Königin war für ihre Schönheit berühmt?",
                    nl: "Welke Egyptische koningin was beroemd om haar schoonheid?"
                },
                options: [
                    { en: "Cleopatra", es: "Cleopatra", de: "Kleopatra", nl: "Cleopatra" },
                    { en: "Nefertiti", es: "Nefertiti", de: "Nofretete", nl: "Nefertiti" },
                    { en: "Hatshepsut", es: "Hatshepsut", de: "Hatschepsut", nl: "Hatshepsut" },
                    { en: "Ankhesenamun", es: "Ankhesenamun", de: "Anchesenamun", nl: "Ankhesenamun" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "What do kings and queens use to seal important letters?",
                    es: "¿Qué usan los reyes y reinas para sellar cartas importantes?",
                    de: "Was benutzen Könige und Königinnen, um wichtige Briefe zu versiegeln?",
                    nl: "Wat gebruiken koningen en koninginnen om belangrijke brieven te verzegelen?"
                },
                options: [
                    { en: "Royal seal", es: "Sello real", de: "Königliches Siegel", nl: "Koninklijk zegel" },
                    { en: "Sticker", es: "Pegatina", de: "Aufkleber", nl: "Sticker" },
                    { en: "Tape", es: "Cinta", de: "Klebeband", nl: "Tape" },
                    { en: "Glue", es: "Pegamento", de: "Klebstoff", nl: "Lijm" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "Who protects the king or queen?",
                    es: "¿Quién protege al rey o la reina?",
                    de: "Wer beschützt den König oder die Königin?",
                    nl: "Wie beschermt de koning of koningin?"
                },
                options: [
                    { en: "Royal guards", es: "Guardias reales", de: "Königliche Wachen", nl: "Koninklijke wachters" },
                    { en: "Teachers", es: "Maestros", de: "Lehrer", nl: "Leraren" },
                    { en: "Doctors", es: "Doctores", de: "Ärzte", nl: "Dokters" },
                    { en: "Cooks", es: "Cocineros", de: "Köche", nl: "Koks" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "Which French queen was famous during the revolution?",
                    es: "¿Qué reina francesa fue famosa durante la revolución?",
                    de: "Welche französische Königin war während der Revolution berühmt?",
                    nl: "Welke Franse koningin was beroemd tijdens de revolutie?"
                },
                options: [
                    { en: "Marie Antoinette", es: "María Antonieta", de: "Marie Antoinette", nl: "Marie Antoinette" },
                    { en: "Catherine", es: "Catalina", de: "Katharina", nl: "Catharina" },
                    { en: "Isabella", es: "Isabel", de: "Isabella", nl: "Isabella" },
                    { en: "Margaret", es: "Margarita", de: "Margarete", nl: "Margaretha" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "What is the family of a king or queen called?",
                    es: "¿Cómo se llama la familia de un rey o reina?",
                    de: "Wie nennt man die Familie eines Königs oder einer Königin?",
                    nl: "Hoe heet de familie van een koning of koningin?"
                },
                options: [
                    { en: "Royal family", es: "Familia real", de: "Königliche Familie", nl: "Koninklijke familie" },
                    { en: "Noble family", es: "Familia noble", de: "Adlige Familie", nl: "Adellijke familie" },
                    { en: "Rich family", es: "Familia rica", de: "Reiche Familie", nl: "Rijke familie" },
                    { en: "Big family", es: "Familia grande", de: "Große Familie", nl: "Grote familie" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "Which king of England had six wives?",
                    es: "¿Qué rey de Inglaterra tuvo seis esposas?",
                    de: "Welcher König von England hatte sechs Ehefrauen?",
                    nl: "Welke koning van Engeland had zes vrouwen?"
                },
                options: [
                    { en: "Henry VIII", es: "Enrique VIII", de: "Heinrich VIII.", nl: "Hendrik VIII" },
                    { en: "Henry VII", es: "Enrique VII", de: "Heinrich VII.", nl: "Hendrik VII" },
                    { en: "George III", es: "Jorge III", de: "Georg III.", nl: "George III" },
                    { en: "Edward IV", es: "Eduardo IV", de: "Eduard IV.", nl: "Edward IV" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "What do we call a king's helper who gives advice?",
                    es: "¿Cómo llamamos al ayudante del rey que da consejos?",
                    de: "Wie nennen wir den Helfer des Königs, der Ratschläge gibt?",
                    nl: "Hoe noemen we de helper van de koning die advies geeft?"
                },
                options: [
                    { en: "Advisor or counselor", es: "Consejero", de: "Berater", nl: "Adviseur" },
                    { en: "Servant", es: "Sirviente", de: "Diener", nl: "Dienaar" },
                    { en: "Cook", es: "Cocinero", de: "Koch", nl: "Kok" },
                    { en: "Gardener", es: "Jardinero", de: "Gärtner", nl: "Tuinman" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "What special event celebrates a king or queen's years of ruling?",
                    es: "¿Qué evento especial celebra los años de reinado de un rey o reina?",
                    de: "Welches besondere Ereignis feiert die Jahre der Herrschaft eines Königs oder einer Königin?",
                    nl: "Welk speciaal evenement viert de jaren van heersen van een koning of koningin?"
                },
                options: [
                    { en: "Jubilee", es: "Jubileo", de: "Jubiläum", nl: "Jubileum" },
                    { en: "Festival", es: "Festival", de: "Festival", nl: "Festival" },
                    { en: "Holiday", es: "Día feriado", de: "Feiertag", nl: "Feestdag" },
                    { en: "Carnival", es: "Carnaval", de: "Karneval", nl: "Carnaval" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "Which boy king became pharaoh in ancient Egypt?",
                    es: "¿Qué niño rey se convirtió en faraón en el antiguo Egipto?",
                    de: "Welcher Knabenkönig wurde Pharao im alten Ägypten?",
                    nl: "Welke jongenskoning werd farao in het oude Egypte?"
                },
                options: [
                    { en: "Tutankhamun", es: "Tutankamón", de: "Tutanchamun", nl: "Toetanchamon" },
                    { en: "Ramses", es: "Ramsés", de: "Ramses", nl: "Ramses" },
                    { en: "Akhenaten", es: "Akenatón", de: "Echnaton", nl: "Achnaton" },
                    { en: "Khufu", es: "Keops", de: "Cheops", nl: "Cheops" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "What do we call the wife of a king?",
                    es: "¿Cómo llamamos a la esposa de un rey?",
                    de: "Wie nennen wir die Ehefrau eines Königs?",
                    nl: "Hoe noemen we de vrouw van een koning?"
                },
                options: [
                    { en: "Queen", es: "Reina", de: "Königin", nl: "Koningin" },
                    { en: "Princess", es: "Princesa", de: "Prinzessin", nl: "Prinses" },
                    { en: "Duchess", es: "Duquesa", de: "Herzogin", nl: "Hertogin" },
                    { en: "Lady", es: "Dama", de: "Dame", nl: "Dame" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "Which king united England and Scotland?",
                    es: "¿Qué rey unió Inglaterra y Escocia?",
                    de: "Welcher König vereinte England und Schottland?",
                    nl: "Welke koning verenigde Engeland en Schotland?"
                },
                options: [
                    { en: "James I", es: "Jacobo I", de: "Jakob I.", nl: "Jacobus I" },
                    { en: "Charles I", es: "Carlos I", de: "Karl I.", nl: "Karel I" },
                    { en: "William III", es: "Guillermo III", de: "Wilhelm III.", nl: "Willem III" },
                    { en: "George I", es: "Jorge I", de: "Georg I.", nl: "George I" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "What do we call the ceremony where knights promise to serve the king?",
                    es: "¿Cómo llamamos a la ceremonia donde los caballeros prometen servir al rey?",
                    de: "Wie nennen wir die Zeremonie, bei der Ritter versprechen, dem König zu dienen?",
                    nl: "Hoe noemen we de ceremonie waarbij ridders beloven de koning te dienen?"
                },
                options: [
                    { en: "Oath of allegiance", es: "Juramento de lealtad", de: "Treueeid", nl: "Eed van trouw" },
                    { en: "Wedding", es: "Boda", de: "Hochzeit", nl: "Huwelijk" },
                    { en: "Birthday", es: "Cumpleaños", de: "Geburtstag", nl: "Verjaardag" },
                    { en: "Graduation", es: "Graduación", de: "Abschluss", nl: "Afstuderen" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "Which Russian empress was known for expanding the empire?",
                    es: "¿Qué emperatriz rusa era conocida por expandir el imperio?",
                    de: "Welche russische Kaiserin war für die Erweiterung des Reiches bekannt?",
                    nl: "Welke Russische keizerin stond bekend om het uitbreiden van het rijk?"
                },
                options: [
                    { en: "Catherine the Great", es: "Catalina la Grande", de: "Katharina die Große", nl: "Catharina de Grote" },
                    { en: "Elizabeth", es: "Isabel", de: "Elisabeth", nl: "Elisabeth" },
                    { en: "Anna", es: "Ana", de: "Anna", nl: "Anna" },
                    { en: "Maria", es: "María", de: "Maria", nl: "Maria" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "What do kings and queens eat from that's made of gold or silver?",
                    es: "¿En qué comen los reyes y reinas que está hecho de oro o plata?",
                    de: "Wovon essen Könige und Königinnen, das aus Gold oder Silber gemacht ist?",
                    nl: "Waar eten koningen en koninginnen van die gemaakt is van goud of zilver?"
                },
                options: [
                    { en: "Golden plates", es: "Platos dorados", de: "Goldene Teller", nl: "Gouden borden" },
                    { en: "Paper plates", es: "Platos de papel", de: "Pappteller", nl: "Papieren borden" },
                    { en: "Plastic bowls", es: "Tazones de plástico", de: "Plastikschüsseln", nl: "Plastic kommen" },
                    { en: "Wooden spoons", es: "Cucharas de madera", de: "Holzlöffel", nl: "Houten lepels" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "Which king was known for creating many laws?",
                    es: "¿Qué rey era conocido por crear muchas leyes?",
                    de: "Welcher König war für die Schaffung vieler Gesetze bekannt?",
                    nl: "Welke koning stond bekend om het maken van veel wetten?"
                },
                options: [
                    { en: "Hammurabi", es: "Hammurabi", de: "Hammurapi", nl: "Hammurabi" },
                    { en: "Solomon", es: "Salomón", de: "Salomon", nl: "Salomo" },
                    { en: "David", es: "David", de: "David", nl: "David" },
                    { en: "Alexander", es: "Alejandro", de: "Alexander", nl: "Alexander" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "What special room in a palace is used for important meetings?",
                    es: "¿Qué sala especial en un palacio se usa para reuniones importantes?",
                    de: "Welcher besondere Raum in einem Palast wird für wichtige Besprechungen genutzt?",
                    nl: "Welke speciale kamer in een paleis wordt gebruikt voor belangrijke vergaderingen?"
                },
                options: [
                    { en: "Throne room", es: "Sala del trono", de: "Thronsaal", nl: "Troonzaal" },
                    { en: "Bedroom", es: "Dormitorio", de: "Schlafzimmer", nl: "Slaapkamer" },
                    { en: "Kitchen", es: "Cocina", de: "Küche", nl: "Keuken" },
                    { en: "Bathroom", es: "Baño", de: "Badezimmer", nl: "Badkamer" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "Who helps dress the king or queen?",
                    es: "¿Quién ayuda a vestir al rey o la reina?",
                    de: "Wer hilft dem König oder der Königin beim Anziehen?",
                    nl: "Wie helpt de koning of koningin met aankleden?"
                },
                options: [
                    { en: "Royal servants", es: "Sirvientes reales", de: "Königliche Diener", nl: "Koninklijke bedienden" },
                    { en: "Their children", es: "Sus hijos", de: "Ihre Kinder", nl: "Hun kinderen" },
                    { en: "Their friends", es: "Sus amigos", de: "Ihre Freunde", nl: "Hun vrienden" },
                    { en: "No one", es: "Nadie", de: "Niemand", nl: "Niemand" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "What do we call the land owned by a king or queen?",
                    es: "¿Cómo llamamos a la tierra que posee un rey o reina?",
                    de: "Wie nennen wir das Land, das einem König oder einer Königin gehört?",
                    nl: "Hoe noemen we het land dat eigendom is van een koning of koningin?"
                },
                options: [
                    { en: "Royal domain", es: "Dominio real", de: "Königliches Gebiet", nl: "Koninklijk domein" },
                    { en: "Farm", es: "Granja", de: "Bauernhof", nl: "Boerderij" },
                    { en: "Park", es: "Parque", de: "Park", nl: "Park" },
                    { en: "School", es: "Escuela", de: "Schule", nl: "School" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "Which queen is famous for saying 'Let them eat cake'?",
                    es: "¿Qué reina es famosa por decir 'Que coman pasteles'?",
                    de: "Welche Königin ist berühmt für den Ausspruch 'Sollen sie doch Kuchen essen'?",
                    nl: "Welke koningin is beroemd om te zeggen 'Laat ze maar taart eten'?"
                },
                options: [
                    { en: "Marie Antoinette", es: "María Antonieta", de: "Marie Antoinette", nl: "Marie Antoinette" },
                    { en: "Queen Victoria", es: "Reina Victoria", de: "Königin Victoria", nl: "Koningin Victoria" },
                    { en: "Catherine the Great", es: "Catalina la Grande", de: "Katharina die Große", nl: "Catharina de Grote" },
                    { en: "Queen Elizabeth", es: "Reina Isabel", de: "Königin Elisabeth", nl: "Koningin Elizabeth" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "What precious stones are often found in royal crowns?",
                    es: "¿Qué piedras preciosas se encuentran a menudo en las coronas reales?",
                    de: "Welche Edelsteine findet man oft in königlichen Kronen?",
                    nl: "Welke edelstenen worden vaak gevonden in koninklijke kronen?"
                },
                options: [
                    { en: "Diamonds and rubies", es: "Diamantes y rubíes", de: "Diamanten und Rubine", nl: "Diamanten en robijnen" },
                    { en: "Glass and plastic", es: "Vidrio y plástico", de: "Glas und Plastik", nl: "Glas en plastic" },
                    { en: "Wood and paper", es: "Madera y papel", de: "Holz und Papier", nl: "Hout en papier" },
                    { en: "Stones and rocks", es: "Piedras y rocas", de: "Steine und Felsen", nl: "Stenen en rotsen" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "Which king was famous for his wisdom in the Bible?",
                    es: "¿Qué rey era famoso por su sabiduría en la Biblia?",
                    de: "Welcher König war in der Bibel für seine Weisheit berühmt?",
                    nl: "Welke koning was beroemd om zijn wijsheid in de Bijbel?"
                },
                options: [
                    { en: "King Solomon", es: "Rey Salomón", de: "König Salomon", nl: "Koning Salomo" },
                    { en: "King David", es: "Rey David", de: "König David", nl: "Koning David" },
                    { en: "King Saul", es: "Rey Saúl", de: "König Saul", nl: "Koning Saul" },
                    { en: "King Samuel", es: "Rey Samuel", de: "König Samuel", nl: "Koning Samuel" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "What do we call a female ruler who rules in her own right?",
                    es: "¿Cómo llamamos a una gobernante femenina que gobierna por derecho propio?",
                    de: "Wie nennen wir eine weibliche Herrscherin, die in eigenem Recht regiert?",
                    nl: "Hoe noemen we een vrouwelijke heerser die uit eigen recht regeert?"
                },
                options: [
                    { en: "Queen regnant", es: "Reina reinante", de: "Regierende Königin", nl: "Regerende koningin" },
                    { en: "Queen mother", es: "Reina madre", de: "Königinmutter", nl: "Koningin-moeder" },
                    { en: "Queen consort", es: "Reina consorte", de: "Königingemahlin", nl: "Koningin-gemalin" },
                    { en: "Princess", es: "Princesa", de: "Prinzessin", nl: "Prinses" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "What special fabric is often used for royal robes?",
                    es: "¿Qué tela especial se usa a menudo para las túnicas reales?",
                    de: "Welcher besondere Stoff wird oft für königliche Gewänder verwendet?",
                    nl: "Welke speciale stof wordt vaak gebruikt voor koninklijke gewaden?"
                },
                options: [
                    { en: "Velvet and silk", es: "Terciopelo y seda", de: "Samt und Seide", nl: "Fluweel en zijde" },
                    { en: "Cotton and wool", es: "Algodón y lana", de: "Baumwolle und Wolle", nl: "Katoen en wol" },
                    { en: "Plastic and paper", es: "Plástico y papel", de: "Plastik und Papier", nl: "Plastic en papier" },
                    { en: "Leather and fur", es: "Cuero y piel", de: "Leder und Pelz", nl: "Leer en bont" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "Which English king was called 'The Lionheart'?",
                    es: "¿Qué rey inglés fue llamado 'Corazón de León'?",
                    de: "Welcher englische König wurde 'Löwenherz' genannt?",
                    nl: "Welke Engelse koning werd 'Leeuwenhart' genoemd?"
                },
                options: [
                    { en: "Richard I", es: "Ricardo I", de: "Richard I.", nl: "Richard I" },
                    { en: "Henry V", es: "Enrique V", de: "Heinrich V.", nl: "Hendrik V" },
                    { en: "Edward III", es: "Eduardo III", de: "Eduard III.", nl: "Edward III" },
                    { en: "William I", es: "Guillermo I", de: "Wilhelm I.", nl: "Willem I" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "What do we call the stick with a jeweled top that kings carry?",
                    es: "¿Cómo llamamos al bastón con punta enjoyada que llevan los reyes?",
                    de: "Wie nennen wir den Stock mit juwelenbesetzter Spitze, den Könige tragen?",
                    nl: "Hoe noemen we de stok met juwelen top die koningen dragen?"
                },
                options: [
                    { en: "Scepter", es: "Cetro", de: "Zepter", nl: "Scepter" },
                    { en: "Wand", es: "Varita", de: "Zauberstab", nl: "Toverstaf" },
                    { en: "Staff", es: "Bastón", de: "Stab", nl: "Staf" },
                    { en: "Stick", es: "Palo", de: "Stock", nl: "Stok" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "Which king built many castles in Wales?",
                    es: "¿Qué rey construyó muchos castillos en Gales?",
                    de: "Welcher König baute viele Burgen in Wales?",
                    nl: "Welke koning bouwde veel kastelen in Wales?"
                },
                options: [
                    { en: "Edward I", es: "Eduardo I", de: "Eduard I.", nl: "Edward I" },
                    { en: "Henry II", es: "Enrique II", de: "Heinrich II.", nl: "Hendrik II" },
                    { en: "Richard III", es: "Ricardo III", de: "Richard III.", nl: "Richard III" },
                    { en: "John", es: "Juan", de: "John", nl: "Jan" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "What color is often associated with royalty?",
                    es: "¿Qué color se asocia a menudo con la realeza?",
                    de: "Welche Farbe wird oft mit dem Königtum in Verbindung gebracht?",
                    nl: "Welke kleur wordt vaak geassocieerd met royalty?"
                },
                options: [
                    { en: "Purple", es: "Púrpura", de: "Lila", nl: "Paars" },
                    { en: "Green", es: "Verde", de: "Grün", nl: "Groen" },
                    { en: "Yellow", es: "Amarillo", de: "Gelb", nl: "Geel" },
                    { en: "Brown", es: "Marrón", de: "Braun", nl: "Bruin" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "What do we call the period when a king or queen rules?",
                    es: "¿Cómo llamamos al período cuando un rey o reina gobierna?",
                    de: "Wie nennen wir die Zeit, in der ein König oder eine Königin regiert?",
                    nl: "Hoe noemen we de periode waarin een koning of koningin regeert?"
                },
                options: [
                    { en: "Reign", es: "Reinado", de: "Herrschaft", nl: "Regering" },
                    { en: "Term", es: "Período", de: "Amtszeit", nl: "Termijn" },
                    { en: "Season", es: "Temporada", de: "Saison", nl: "Seizoen" },
                    { en: "Year", es: "Año", de: "Jahr", nl: "Jaar" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "Which queen refused to marry and was called the 'Virgin Queen'?",
                    es: "¿Qué reina se negó a casarse y fue llamada la 'Reina Virgen'?",
                    de: "Welche Königin weigerte sich zu heiraten und wurde 'Jungfernkönigin' genannt?",
                    nl: "Welke koningin weigerde te trouwen en werd de 'Maagd Koningin' genoemd?"
                },
                options: [
                    { en: "Elizabeth I", es: "Isabel I", de: "Elisabeth I.", nl: "Elisabeth I" },
                    { en: "Mary I", es: "María I", de: "Maria I.", nl: "Maria I" },
                    { en: "Anne", es: "Ana", de: "Anne", nl: "Anna" },
                    { en: "Victoria", es: "Victoria", de: "Victoria", nl: "Victoria" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "What happens when a king or queen gives up their throne?",
                    es: "¿Qué pasa cuando un rey o reina renuncia a su trono?",
                    de: "Was passiert, wenn ein König oder eine Königin auf ihren Thron verzichtet?",
                    nl: "Wat gebeurt er als een koning of koningin afstand doet van hun troon?"
                },
                options: [
                    { en: "They abdicate", es: "Abdican", de: "Sie danken ab", nl: "Ze doen afstand" },
                    { en: "They retire", es: "Se jubilan", de: "Sie gehen in Rente", nl: "Ze gaan met pensioen" },
                    { en: "They vacation", es: "Van de vacaciones", de: "Sie machen Urlaub", nl: "Ze gaan op vakantie" },
                    { en: "They sleep", es: "Duermen", de: "Sie schlafen", nl: "Ze slapen" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "What special ceremony celebrates a royal wedding?",
                    es: "¿Qué ceremonia especial celebra una boda real?",
                    de: "Welche besondere Zeremonie feiert eine königliche Hochzeit?",
                    nl: "Welke speciale ceremonie viert een koninklijke bruiloft?"
                },
                options: [
                    { en: "Royal wedding", es: "Boda real", de: "Königliche Hochzeit", nl: "Koninklijke bruiloft" },
                    { en: "Court party", es: "Fiesta de la corte", de: "Hofparty", nl: "Hoffeest" },
                    { en: "Palace dance", es: "Baile del palacio", de: "Palasttanz", nl: "Paleisdans" },
                    { en: "Crown festival", es: "Festival de la corona", de: "Kronenfest", nl: "Kroonfestival" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "What do we call the people who work in a royal palace?",
                    es: "¿Cómo llamamos a las personas que trabajan en un palacio real?",
                    de: "Wie nennen wir die Menschen, die in einem königlichen Palast arbeiten?",
                    nl: "Hoe noemen we de mensen die werken in een koninklijk paleis?"
                },
                options: [
                    { en: "Royal household", es: "Casa real", de: "Königlicher Haushalt", nl: "Koninklijke hofhouding" },
                    { en: "Palace team", es: "Equipo del palacio", de: "Palast-Team", nl: "Paleisteam" },
                    { en: "Crown workers", es: "Trabajadores de la corona", de: "Kron-Arbeiter", nl: "Kroonwerkers" },
                    { en: "King's friends", es: "Amigos del rey", de: "Königsfreunde", nl: "Koningsvrienden" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "Which famous king conquered much of Europe and was very short?",
                    es: "¿Qué famoso rey conquistó gran parte de Europa y era muy bajo?",
                    de: "Welcher berühmte König eroberte einen Großteil Europas und war sehr klein?",
                    nl: "Welke beroemde koning veroverde veel van Europa en was erg klein?"
                },
                options: [
                    { en: "Napoleon Bonaparte", es: "Napoleón Bonaparte", de: "Napoleon Bonaparte", nl: "Napoleon Bonaparte" },
                    { en: "Julius Caesar", es: "Julio César", de: "Julius Caesar", nl: "Julius Caesar" },
                    { en: "Alexander the Great", es: "Alejandro Magno", de: "Alexander der Große", nl: "Alexander de Grote" },
                    { en: "Charlemagne", es: "Carlomagno", de: "Karl der Große", nl: "Karel de Grote" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "What makes someone become king or queen?",
                    es: "¿Qué hace que alguien se convierta en rey o reina?",
                    de: "Was macht jemanden zum König oder zur Königin?",
                    nl: "Wat maakt dat iemand koning of koningin wordt?"
                },
                options: [
                    { en: "Being born into a royal family", es: "Nacer en una familia real", de: "In eine königliche Familie hineingeboren werden", nl: "Geboren worden in een koninklijke familie" },
                    { en: "Being very rich", es: "Ser muy rico", de: "Sehr reich sein", nl: "Heel rijk zijn" },
                    { en: "Being very tall", es: "Ser muy alto", de: "Sehr groß sein", nl: "Heel lang zijn" },
                    { en: "Being very smart", es: "Ser muy inteligente", de: "Sehr klug sein", nl: "Heel slim zijn" }
                ],
                correct: 0,
                explanation: {
                    en: "Most kings and queens become rulers by being born into a royal family! This is called hereditary monarchy, where the crown passes from parent to child. Sometimes the oldest child becomes the next ruler, or traditionally it went to the oldest son. Very rarely, people can become rulers through marriage or by being chosen, but being born royal is the most common way.",
                    es: "¡La mayoría de los reyes y reinas se convierten en gobernantes al nacer en una familia real! Esto se llama monarquía hereditaria, donde la corona pasa de padres a hijos. A veces el hijo mayor se convierte en el siguiente gobernante, o tradicionalmente iba al hijo varón mayor. Muy raramente, las personas pueden convertirse en gobernantes a través del matrimonio o siendo elegidas, pero nacer real es la forma más común.",
                    de: "Die meisten Könige und Königinnen werden Herrscher, indem sie in eine königliche Familie hineingeboren werden! Das nennt man Erbmonarchie, wo die Krone von Eltern zu Kind übergeht. Manchmal wird das älteste Kind der nächste Herrscher, oder traditionell ging es an den ältesten Sohn. Sehr selten können Menschen durch Heirat oder durch Wahl Herrscher werden, aber königlich geboren zu werden ist der häufigste Weg.",
                    nl: "De meeste koningen en koninginnen worden heersers door geboren te worden in een koninklijke familie! Dit heet erfelijke monarchie, waar de kroon overgaat van ouder naar kind. Soms wordt het oudste kind de volgende heerser, of traditioneel ging het naar de oudste zoon. Heel zelden kunnen mensen heersers worden door huwelijk of door gekozen te worden, maar koninklijk geboren worden is de meest voorkomende manier."
                }
            },
            {
                question: {
                    en: "What special hat do bishops and other religious leaders wear that looks like a crown?",
                    es: "¿Qué sombrero especial usan los obispos y otros líderes religiosos que parece una corona?",
                    de: "Welchen besonderen Hut tragen Bischöfe und andere religiöse Führer, der wie eine Krone aussieht?",
                    nl: "Welke speciale hoed dragen bisschoppen en andere religieuze leiders die eruitziet als een kroon?"
                },
                options: [
                    { en: "Mitre", es: "Mitra", de: "Mitra", nl: "Mijter" },
                    { en: "Helmet", es: "Casco", de: "Helm", nl: "Helm" },
                    { en: "Cap", es: "Gorra", de: "Mütze", nl: "Pet" },
                    { en: "Turban", es: "Turbante", de: "Turban", nl: "Tulband" }
                ],
                correct: 0,
                explanation: {
                    en: "A mitre is the tall, pointed hat that bishops and other high-ranking church officials wear during important religious ceremonies. It's shaped like a crown and shows their spiritual authority, just like how kings and queens wear crowns to show their royal authority. The mitre has been worn by church leaders for over 1,000 years!",
                    es: "Una mitra es el sombrero alto y puntiagudo que usan los obispos y otros funcionarios religiosos de alto rango durante ceremonias religiosas importantes. Tiene forma de corona y muestra su autoridad espiritual, tal como los reyes y reinas usan coronas para mostrar su autoridad real. ¡La mitra ha sido usada por líderes de la iglesia por más de 1,000 años!",
                    de: "Eine Mitra ist der hohe, spitze Hut, den Bischöfe und andere hochrangige Kirchenbeamte bei wichtigen religiösen Zeremonien tragen. Er hat die Form einer Krone und zeigt ihre spirituelle Autorität, genau wie Könige und Königinnen Kronen tragen, um ihre königliche Autorität zu zeigen. Die Mitra wird von Kirchenführern seit über 1.000 Jahren getragen!",
                    nl: "Een mijter is de hoge, puntige hoed die bisschoppen en andere hoge kerkelijke functionarissen dragen tijdens belangrijke religieuze ceremonies. Het heeft de vorm van een kroon en toont hun spirituele autoriteit, net zoals koningen en koninginnen kronen dragen om hun koninklijke autoriteit te tonen. De mijter wordt al meer dan 1.000 jaar gedragen door kerkleiders!"
                }
            },
            {
                question: {
                    en: "What do we call the special room where kings and queens keep their treasure and gold?",
                    es: "¿Cómo llamamos a la sala especial donde los reyes y reinas guardan su tesoro y oro?",
                    de: "Wie nennen wir den besonderen Raum, wo Könige und Königinnen ihren Schatz und ihr Gold aufbewahren?",
                    nl: "Hoe noemen we de speciale kamer waar koningen en koninginnen hun schat en goud bewaren?"
                },
                options: [
                    { en: "Treasury", es: "Tesorería", de: "Schatzkammer", nl: "Schatkamer" },
                    { en: "Kitchen", es: "Cocina", de: "Küche", nl: "Keuken" },
                    { en: "Bedroom", es: "Dormitorio", de: "Schlafzimmer", nl: "Slaapkamer" },
                    { en: "Library", es: "Biblioteca", de: "Bibliothek", nl: "Bibliotheek" }
                ],
                correct: 0,
                explanation: {
                    en: "A treasury is the secure room where kings and queens store their valuable treasures, including gold coins, precious jewels, and important documents. The royal treasury was always heavily guarded because it contained the kingdom's wealth. Some famous treasuries, like the Tower of London, still display crown jewels and royal treasures today!",
                    es: "Una tesorería es la habitación segura donde los reyes y reinas guardan sus tesoros valiosos, incluyendo monedas de oro, joyas preciosas y documentos importantes. La tesorería real siempre estaba fuertemente custodiada porque contenía la riqueza del reino. ¡Algunas tesorerías famosas, como la Torre de Londres, todavía muestran joyas de la corona y tesoros reales hoy!",
                    de: "Eine Schatzkammer ist der sichere Raum, wo Könige und Königinnen ihre wertvollen Schätze aufbewahren, einschließlich Goldmünzen, kostbare Juwelen und wichtige Dokumente. Die königliche Schatzkammer war immer stark bewacht, weil sie den Reichtum des Königreichs enthielt. Einige berühmte Schatzkammern, wie der Tower of London, zeigen noch heute Kronjuwelen und königliche Schätze!",
                    nl: "Een schatkamer is de veilige kamer waar koningen en koninginnen hun waardevolle schatten bewaren, inclusief gouden munten, kostbare juwelen en belangrijke documenten. De koninklijke schatkamer werd altijd zwaar bewaakt omdat het de rijkdom van het koninkrijk bevatte. Sommige beroemde schatkamers, zoals de Tower of London, tonen vandaag nog steeds kroonjuwelen en koninklijke schatten!"
                }
            },
            {
                question: {
                    en: "Which ancient Egyptian queen ruled alongside the famous boy king Tutankhamun?",
                    es: "¿Qué reina del antiguo Egipto gobernó junto al famoso niño rey Tutankamón?",
                    de: "Welche altägyptische Königin regierte neben dem berühmten Knabenkönig Tutanchamun?",
                    nl: "Welke oude Egyptische koningin regeerde naast de beroemde jongenskoning Toetanchamon?"
                },
                options: [
                    { en: "Ankhesenamun", es: "Ankhesenamun", de: "Anchesenamun", nl: "Ankhesenamun" },
                    { en: "Cleopatra", es: "Cleopatra", de: "Kleopatra", nl: "Cleopatra" },
                    { en: "Nefertiti", es: "Nefertiti", de: "Nofretete", nl: "Nefertiti" },
                    { en: "Hatshepsut", es: "Hatshepsut", de: "Hatschepsut", nl: "Hatshepsut" }
                ],
                correct: 0,
                explanation: {
                    en: "Ankhesenamun was the young queen who married Tutankhamun when they were both still children! She was actually his half-sister, which was common in ancient Egyptian royal families. When King Tut died at just 19 years old, Ankhesenamun became a widow and her story becomes a mystery - we don't know exactly what happened to her after that.",
                    es: "¡Ankhesenamun era la joven reina que se casó con Tutankamón cuando ambos eran todavía niños! En realidad era su media hermana, lo cual era común en las familias reales del antiguo Egipto. Cuando el Rey Tut murió a los 19 años, Ankhesenamun se convirtió en viuda y su historia se vuelve un misterio - no sabemos exactamente qué le pasó después de eso.",
                    de: "Ankhesenamun war die junge Königin, die Tutanchamun heiratete, als beide noch Kinder waren! Sie war tatsächlich seine Halbschwester, was in altägyptischen Königsfamilien üblich war. Als König Tut mit nur 19 Jahren starb, wurde Ankhesenamun Witwe und ihre Geschichte wird zu einem Geheimnis - wir wissen nicht genau, was danach mit ihr geschah.",
                    nl: "Ankhesenamun was de jonge koningin die trouwde met Toetanchamon toen ze beiden nog kinderen waren! Ze was eigenlijk zijn halfzus, wat gebruikelijk was in oude Egyptische koninklijke families. Toen Koning Toet stierf op slechts 19-jarige leeftijd, werd Ankhesenamun weduwe en haar verhaal wordt een mysterie - we weten niet precies wat er daarna met haar gebeurde."
                }
            },
            {
                question: {
                    en: "What do we call the special ceremony where a new king or queen promises to serve their people?",
                    es: "¿Cómo llamamos a la ceremonia especial donde un nuevo rey o reina promete servir a su pueblo?",
                    de: "Wie nennen wir die besondere Zeremonie, bei der ein neuer König oder eine neue Königin verspricht, ihrem Volk zu dienen?",
                    nl: "Hoe noemen we de speciale ceremonie waarbij een nieuwe koning of koningin belooft hun volk te dienen?"
                },
                options: [
                    { en: "Coronation oath", es: "Juramento de coronación", de: "Krönungseid", nl: "Kroningseed" },
                    { en: "Wedding vow", es: "Voto matrimonial", de: "Ehegelübde", nl: "Huwelijksgelofte" },
                    { en: "Birthday wish", es: "Deseo de cumpleaños", de: "Geburtstagswunsch", nl: "Verjaardagswens" },
                    { en: "School pledge", es: "Juramento escolar", de: "Schulversprechen", nl: "Schoolbelofte" }
                ],
                correct: 0,
                explanation: {
                    en: "A coronation oath is the solemn promise that kings and queens make during their coronation ceremony. They promise to govern fairly, protect their people, and uphold the laws of the land. This ancient tradition shows that even though monarchs have great power, they also have great responsibility to serve their subjects wisely and justly!",
                    es: "Un juramento de coronación es la promesa solemne que hacen los reyes y reinas durante su ceremonia de coronación. Prometen gobernar con justicia, proteger a su pueblo y mantener las leyes de la tierra. ¡Esta tradición antigua muestra que aunque los monarcas tienen gran poder, también tienen gran responsabilidad de servir a sus súbditos con sabiduría y justicia!",
                    de: "Ein Krönungseid ist das feierliche Versprechen, das Könige und Königinnen während ihrer Krönungszeremonie machen. Sie versprechen, gerecht zu regieren, ihr Volk zu beschützen und die Gesetze des Landes zu wahren. Diese alte Tradition zeigt, dass Monarchen zwar große Macht haben, aber auch große Verantwortung, ihren Untertanen weise und gerecht zu dienen!",
                    nl: "Een kroningseed is de plechtige belofte die koningen en koninginnen maken tijdens hun kroningsceremonie. Ze beloven eerlijk te regeren, hun volk te beschermen en de wetten van het land te handhaven. Deze oude traditie toont dat hoewel monarchen grote macht hebben, ze ook grote verantwoordelijkheid hebben om hun onderdanen wijs en rechtvaardig te dienen!"
                }
            },
            {
                question: {
                    en: "What valuable metal are most royal scepters made from?",
                    es: "¿De qué metal valioso están hechos la mayoría de los cetros reales?",
                    de: "Aus welchem wertvollen Metall sind die meisten königlichen Zepter gemacht?",
                    nl: "Van welk waardevol metaal zijn de meeste koninklijke scepters gemaakt?"
                },
                options: [
                    { en: "Gold", es: "Oro", de: "Gold", nl: "Goud" },
                    { en: "Iron", es: "Hierro", de: "Eisen", nl: "IJzer" },
                    { en: "Copper", es: "Cobre", de: "Kupfer", nl: "Koper" },
                    { en: "Wood", es: "Madera", de: "Holz", nl: "Hout" }
                ],
                correct: 0,
                explanation: {
                    en: "Most royal scepters are made from gold because it's a precious metal that doesn't tarnish or rust, making it perfect for royal regalia that lasts for centuries! Gold also symbolizes wealth, power, and divine authority. The scepters are often decorated with precious jewels like diamonds, rubies, and emeralds to make them even more magnificent and show the monarch's status.",
                    es: "¡La mayoría de los cetros reales están hechos de oro porque es un metal precioso que no se empaña ni se oxida, lo que lo hace perfecto para las regalías reales que duran siglos! El oro también simboliza riqueza, poder y autoridad divina. Los cetros a menudo están decorados con joyas preciosas como diamantes, rubíes y esmeraldas para hacerlos aún más magníficos y mostrar el estatus del monarca.",
                    de: "Die meisten königlichen Zepter sind aus Gold gemacht, weil es ein kostbares Metall ist, das nicht anläuft oder rostet, was es perfekt für königliche Insignien macht, die jahrhundertelang halten! Gold symbolisiert auch Reichtum, Macht und göttliche Autorität. Die Zepter sind oft mit kostbaren Juwelen wie Diamanten, Rubinen und Smaragden geschmückt, um sie noch prächtiger zu machen und den Status des Monarchen zu zeigen.",
                    nl: "De meeste koninklijke scepters zijn gemaakt van goud omdat het een kostbaar metaal is dat niet aanloopt of roest, wat het perfect maakt voor koninklijke regalia die eeuwen meegaan! Goud symboliseert ook rijkdom, macht en goddelijke autoriteit. De scepters zijn vaak versierd met kostbare juwelen zoals diamanten, robijnen en smaragden om ze nog indrukwekkender te maken en de status van de monarch te tonen."
                }
            },
            {
                question: {
                    en: "What do we call the group of noble people who help advise the king or queen?",
                    es: "¿Cómo llamamos al grupo de personas nobles que ayudan a aconsejar al rey o reina?",
                    de: "Wie nennen wir die Gruppe von Adligen, die dem König oder der Königin beratend zur Seite stehen?",
                    nl: "Hoe noemen we de groep adellijke mensen die helpen de koning of koningin te adviseren?"
                },
                options: [
                    { en: "Royal council", es: "Consejo real", de: "Königlicher Rat", nl: "Koninklijke raad" },
                    { en: "School class", es: "Clase escolar", de: "Schulklasse", nl: "Schoolklas" },
                    { en: "Sports team", es: "Equipo deportivo", de: "Sportmannschaft", nl: "Sportteam" },
                    { en: "Music band", es: "Banda musical", de: "Musikband", nl: "Muziekband" }
                ],
                correct: 0,
                explanation: {
                    en: "A royal council is a group of wise and trusted nobles who meet with the king or queen to give advice about important decisions. These councils helped monarchs make better choices about laws, wars, trade, and other matters affecting the kingdom. Different countries had different names for their councils, like the Privy Council in England or the Council of State in other nations.",
                    es: "Un consejo real es un grupo de nobles sabios y de confianza que se reúnen con el rey o reina para dar consejos sobre decisiones importantes. Estos consejos ayudaban a los monarcas a tomar mejores decisiones sobre leyes, guerras, comercio y otros asuntos que afectaban al reino. Diferentes países tenían diferentes nombres para sus consejos, como el Consejo Privado en Inglaterra o el Consejo de Estado en otras naciones.",
                    de: "Ein königlicher Rat ist eine Gruppe weiser und vertrauensvoller Adliger, die sich mit dem König oder der Königin treffen, um Ratschläge zu wichtigen Entscheidungen zu geben. Diese Räte halfen Monarchen, bessere Entscheidungen über Gesetze, Kriege, Handel und andere Angelegenheiten zu treffen, die das Königreich betrafen. Verschiedene Länder hatten verschiedene Namen für ihre Räte, wie den Geheimen Rat in England oder den Staatsrat in anderen Nationen.",
                    nl: "Een koninklijke raad is een groep wijze en vertrouwde edelen die samenkomen met de koning of koningin om advies te geven over belangrijke beslissingen. Deze raden hielpen monarchen betere keuzes te maken over wetten, oorlogen, handel en andere zaken die het koninkrijk aangingen. Verschillende landen hadden verschillende namen voor hun raden, zoals de Geheime Raad in Engeland of de Staatsraad in andere naties."
                }
            },
            {
                question: {
                    en: "What do we call the ceremony where someone becomes a knight?",
                    es: "¿Cómo llamamos a la ceremonia donde alguien se convierte en caballero?",
                    de: "Wie nennen wir die Zeremonie, bei der jemand zum Ritter wird?",
                    nl: "Hoe noemen we de ceremonie waarbij iemand ridder wordt?"
                },
                options: [
                    { en: "Dubbing", es: "Investidura", de: "Ritterschlag", nl: "Ridderslag" },
                    { en: "Wedding", es: "Boda", de: "Hochzeit", nl: "Huwelijk" },
                    { en: "Graduation", es: "Graduación", de: "Abschluss", nl: "Afstuderen" },
                    { en: "Birthday party", es: "Fiesta de cumpleaños", de: "Geburtstagsfeier", nl: "Verjaardagsfeest" }
                ],
                correct: 0,
                explanation: {
                    en: "Dubbing is the special ceremony where someone becomes a knight! During this ceremony, the person kneels before the king or queen, who touches their shoulders with a sword and says special words to make them a knight. This tradition has been going on for hundreds of years and makes the person officially part of the royal service, sworn to protect the kingdom and follow the code of chivalry.",
                    es: "¡La investidura es la ceremonia especial donde alguien se convierte en caballero! Durante esta ceremonia, la persona se arrodilla ante el rey o reina, quien toca sus hombros con una espada y dice palabras especiales para convertirlo en caballero. Esta tradición ha estado ocurriendo por cientos de años y hace que la persona sea oficialmente parte del servicio real, jurando proteger el reino y seguir el código de caballería.",
                    de: "Der Ritterschlag ist die besondere Zeremonie, bei der jemand zum Ritter wird! Während dieser Zeremonie kniet die Person vor dem König oder der Königin, der/die ihre Schultern mit einem Schwert berührt und besondere Worte sagt, um sie zum Ritter zu machen. Diese Tradition gibt es schon seit Hunderten von Jahren und macht die Person offiziell zum Teil des königlichen Dienstes, geschworen das Königreich zu schützen und dem Ritterkodex zu folgen.",
                    nl: "Ridderslag is de speciale ceremonie waarbij iemand ridder wordt! Tijdens deze ceremonie knielt de persoon voor de koning of koningin, die hun schouders aanraakt met een zwaard en speciale woorden zegt om hen ridder te maken. Deze traditie bestaat al honderden jaren en maakt de persoon officieel onderdeel van de koninklijke dienst, gezworen het koninkrijk te beschermen en de riddercode te volgen."
                }
            }
        ]
    };

    if (typeof window.addLevel === 'function') {
        window.addLevel('warm-up/history', level3);
    }
})();