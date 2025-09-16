(function() {
    const level7 = {
        name: {
            en: "Extreme and Adventure Sports",
            es: "Deportes Extremos y de Aventura",
            de: "Extremsport und Abenteuersport",
            nl: "Extreme en Avontuurlijke Sporten"
        },
        questions: [
            {
                question: {
                    en: "What does BASE jumping stand for?",
                    es: "¿Qué significa BASE jumping?",
                    de: "Wofür steht BASE Jumping?",
                    nl: "Waar staat BASE jumping voor?"
                },
                options: [
                    { en: "Building, Antenna, Span, Earth", es: "Edificio, Antena, Puente, Tierra", de: "Gebäude, Antenne, Brücke, Erde", nl: "Gebouw, Antenne, Brug, Aarde" },
                    { en: "Bridge, Air, Sky, Elevation", es: "Puente, Aire, Cielo, Elevación", de: "Brücke, Luft, Himmel, Erhebung", nl: "Brug, Lucht, Lucht, Hoogte" },
                    { en: "Backup, Altitude, Safety, Emergency", es: "Respaldo, Altitud, Seguridad, Emergencia", de: "Backup, Höhe, Sicherheit, Notfall", nl: "Backup, Hoogte, Veiligheid, Noodgeval" },
                    { en: "Bungee, Adventure, Sport, Extreme", es: "Bungee, Aventura, Deporte, Extremo", de: "Bungee, Abenteuer, Sport, Extrem", nl: "Bungee, Avontuur, Sport, Extreem" }
                ],
                correct: 0,
                explanation: {
                    en: "BASE jumping stands for Building, Antenna, Span (bridge), Earth (cliff), which are the four types of fixed objects that BASE jumpers leap from using parachutes.",
                    es: "BASE jumping significa Edificio, Antena, Puente, Tierra (acantilado), que son los cuatro tipos de objetos fijos desde los que los saltadores BASE saltan usando paracaídas.",
                    de: "BASE Jumping steht für Building (Gebäude), Antenna (Antenne), Span (Brücke), Earth (Erde/Klippe), welche die vier Arten von festen Objekten sind, von denen BASE Jumper mit Fallschirmen springen.",
                    nl: "BASE jumping staat voor Building (Gebouw), Antenna (Antenne), Span (Brug), Earth (Aarde/klif), dit zijn de vier types vaste objecten waarvan BASE jumpers springen met parachutes."
                }
            },
            {
                question: {
                    en: "What is the highest mountain that has been successfully snowboarded down?",
                    es: "¿Cuál es la montaña más alta que se ha descendido exitosamente en snowboard?",
                    de: "Was ist der höchste Berg, der erfolgreich mit dem Snowboard befahren wurde?",
                    nl: "Wat is de hoogste berg die succesvol is afgedaald met snowboarden?"
                },
                options: [
                    { en: "Mount Everest", es: "Monte Everest", de: "Mount Everest", nl: "Mount Everest" },
                    { en: "K2", es: "K2", de: "K2", nl: "K2" },
                    { en: "Denali", es: "Denali", de: "Denali", nl: "Denali" },
                    { en: "Cho Oyu", es: "Cho Oyu", de: "Cho Oyu", nl: "Cho Oyu" }
                ],
                correct: 3,
                explanation: {
                    en: "Cho Oyu (8,188m) is the highest mountain successfully snowboarded down. While higher peaks like Everest have been attempted, Cho Oyu remains the record holder for complete snowboard descent.",
                    es: "Cho Oyu (8,188m) es la montaña más alta descendida exitosamente en snowboard. Aunque se han intentado picos más altos como el Everest, Cho Oyu mantiene el récord de descenso completo en snowboard.",
                    de: "Cho Oyu (8.188m) ist der höchste Berg, der erfolgreich mit dem Snowboard befahren wurde. Während höhere Gipfel wie der Everest versucht wurden, hält Cho Oyu den Rekord für komplette Snowboard-Abfahrt.",
                    nl: "Cho Oyu (8.188m) is de hoogste berg die succesvol is afgedaald met snowboarden. Hoewel hogere pieken zoals Everest zijn geprobeerd, houdt Cho Oyu het record voor complete snowboard afdaling."
                }
            },
            {
                question: {
                    en: "In rock climbing, what does the term 'redpoint' mean?",
                    es: "En escalada en roca, ¿qué significa el término 'redpoint'?",
                    de: "Was bedeutet der Begriff 'Redpoint' beim Klettern?",
                    nl: "In rotsklimmen, wat betekent de term 'redpoint'?"
                },
                options: [
                    { en: "Falling off a route", es: "Caerse de una ruta", de: "Von einer Route fallen", nl: "Van een route vallen" },
                    { en: "Climbing with pre-placed protection", es: "Escalar con protección precolocada", de: "Klettern mit vorher platzierten Sicherungen", nl: "Klimmen met vooraf geplaatste bescherming" },
                    { en: "Free climbing a route without falling", es: "Escalada libre de una ruta sin caerse", de: "Freies Klettern einer Route ohne zu fallen", nl: "Vrij klimmen van een route zonder te vallen" },
                    { en: "Using artificial aids", es: "Usar ayudas artificiales", de: "Künstliche Hilfsmittel verwenden", nl: "Kunstmatige hulpmiddelen gebruiken" }
                ],
                correct: 2,
                explanation: {
                    en: "In rock climbing, 'redpoint' means successfully climbing a route from bottom to top without falling or resting on the rope, after having practiced the route beforehand.",
                    es: "En escalada en roca, 'redpoint' significa escalar exitosamente una ruta de abajo hacia arriba sin caerse o descansar en la cuerda, después de haber practicado la ruta previamente.",
                    de: "Beim Klettern bedeutet 'Redpoint' eine Route erfolgreich von unten nach oben zu klettern ohne zu fallen oder am Seil zu rasten, nachdem man die Route vorher geübt hat.",
                    nl: "In rotsklimmen betekent 'redpoint' het succesvol beklimmen van een route van onder naar boven zonder te vallen of te rusten aan het touw, nadat je de route vooraf hebt geoefend."
                }
            },
            {
                question: {
                    en: "What is the world record for the highest bungee jump?",
                    es: "¿Cuál es el récord mundial del salto bungee más alto?",
                    de: "Was ist der Weltrekord für den höchsten Bungee-Sprung?",
                    nl: "Wat is het wereldrecord voor de hoogste bungeejump?"
                },
                options: [
                    { en: "233m", es: "233m", de: "233m", nl: "233m" },
                    { en: "321m", es: "321m", de: "321m", nl: "321m" },
                    { en: "381m", es: "381m", de: "381m", nl: "381m" },
                    { en: "404m", es: "404m", de: "404m", nl: "404m" }
                ],
                correct: 1,
                explanation: {
                    en: "The world record for the highest bungee jump is 321 meters, achieved at the Macau Tower in China, providing an extreme adrenaline rush with a free fall lasting several seconds.",
                    es: "El récord mundial del salto bungee más alto es de 321 metros, logrado en la Torre de Macao en China, proporcionando una subida de adrenalina extrema con una caída libre que dura varios segundos.",
                    de: "Der Weltrekord für den höchsten Bungee-Sprung liegt bei 321 Metern, erreicht am Macau Tower in China, und bietet einen extremen Adrenalinschus mit einem freien Fall von mehreren Sekunden.",
                    nl: "Het wereldrecord voor de hoogste bungeejump is 321 meter, behaald bij de Macau Tower in China, wat een extreme adrenalinestoot geeft met een vrije val van enkele seconden."
                }
            },
            {
                question: {
                    en: "What sport involves riding waves on a board while attached to a kite?",
                    es: "¿Qué deporte implica montar olas en una tabla mientras se está unido a una cometa?",
                    de: "Welcher Sport beinhaltet das Wellenreiten auf einem Board während man an einem Drachen befestigt ist?",
                    nl: "Welke sport houdt in dat je golven rijdt op een board terwijl je vastgemaakt bent aan een vlieger?"
                },
                options: [
                    { en: "Kitesurfing", es: "Kitesurf", de: "Kitesurfen", nl: "Kitesurfen" },
                    { en: "Windsurfing", es: "Windsurf", de: "Windsurfen", nl: "Windsurfen" },
                    { en: "Paragliding", es: "Parapente", de: "Paragliding", nl: "Paragliding" },
                    { en: "Wakeboarding", es: "Wakeboard", de: "Wakeboarding", nl: "Wakeboarden" }
                ],
                correct: 0,
                explanation: {
                    en: "Kitesurfing involves riding waves on a board while being pulled by a large kite, combining elements of surfing, windsurfing, and paragliding for an exciting water sport experience.",
                    es: "El kitesurf implica montar olas en una tabla mientras eres arrastrado por una cometa grande, combinando elementos de surf, windsurf y parapente para una experiencia emocionante de deporte acuático.",
                    de: "Kitesurfen beinhaltet das Wellenreiten auf einem Board während man von einem großen Drachen gezogen wird, und kombiniert Elemente von Surfen, Windsurfen und Paragliding für ein aufregendes Wassersport-Erlebnis.",
                    nl: "Kitesurfen houdt in dat je golven rijdt op een board terwijl je wordt voortgetrokken door een grote vlieger, waarbij elementen van surfen, windsurfen en paragliding worden gecombineerd voor een spannende watersportervaring."
                }
            },
            {
                question: {
                    en: "What is the minimum altitude for skydiving to deploy a parachute?",
                    es: "¿Cuál es la altitud mínima para el paracaidismo para desplegar un paracaídas?",
                    de: "Was ist die Mindesthöhe beim Fallschirmspringen für das Öffnen des Fallschirms?",
                    nl: "Wat is de minimumhoogte voor parachutespringen om een parachute te openen?"
                },
                options: [
                    { en: "750m", es: "750m", de: "750m", nl: "750m" },
                    { en: "1000m", es: "1000m", de: "1000m", nl: "1000m" },
                    { en: "1500m", es: "1500m", de: "1500m", nl: "1500m" },
                    { en: "2000m", es: "2000m", de: "2000m", nl: "2000m" }
                ],
                correct: 0,
                explanation: {
                    en: "The minimum altitude for deploying a parachute in skydiving is typically 750 meters (2,500 feet) for experienced jumpers, though student jumpers must deploy higher for safety.",
                    es: "La altitud mínima para desplegar un paracaídas en paracaidismo es típicamente 750 metros (2,500 pies) para saltadores experimentados, aunque los estudiantes deben desplegarlo más alto por seguridad.",
                    de: "Die Mindesthöhe für das Öffnen eines Fallschirms beim Fallschirmspringen beträgt normalerweise 750 Meter (2.500 Fuß) für erfahrene Springer, obwohl Schüler höher öffnen müssen aus Sicherheitsgründen.",
                    nl: "De minimumhoogte voor het openen van een parachute bij parachutespringen is typisch 750 meter (2.500 voet) voor ervaren springers, hoewel student springers hoger moeten openen voor de veiligheid."
                }
            },
            {
                question: {
                    en: "Which mountain is considered the birthplace of extreme skiing?",
                    es: "¿Qué montaña se considera la cuna del esquí extremo?",
                    de: "Welcher Berg gilt als Geburtsort des Extremskifahrens?",
                    nl: "Welke berg wordt beschouwd als de geboorteplaats van extreem skiën?"
                },
                options: [
                    { en: "Chamonix, France", es: "Chamonix, Francia", de: "Chamonix, Frankreich", nl: "Chamonix, Frankrijk" },
                    { en: "Verbier, Switzerland", es: "Verbier, Suiza", de: "Verbier, Schweiz", nl: "Verbier, Zwitserland" },
                    { en: "La Grave, France", es: "La Grave, Francia", de: "La Grave, Frankreich", nl: "La Grave, Frankrijk" },
                    { en: "St. Anton, Austria", es: "St. Anton, Austria", de: "St. Anton, Österreich", nl: "St. Anton, Oostenrijk" }
                ],
                correct: 2,
                explanation: {
                    en: "La Grave in France is considered the birthplace of extreme skiing, famous for its steep, ungroomed terrain and being a testing ground for extreme skiing pioneers.",
                    es: "La Grave en Francia se considera la cuna del esquí extremo, famosa por su terreno empinado y sin preparar y por ser un campo de pruebas para los pioneros del esquí extremo.",
                    de: "La Grave in Frankreich gilt als Geburtsort des Extremskifahrens, berühmt für sein steiles, unpräpariertes Gelände und als Testgebiet für Extremski-Pioniere.",
                    nl: "La Grave in Frankrijk wordt beschouwd als de geboorteplaats van extreem skiën, beroemd om zijn steile, ongeprepareerde terrein en als testgebied voor extreem skiën pioniers."
                }
            },
            {
                question: {
                    en: "What is the fastest speed recorded on a mountain bike downhill?",
                    es: "¿Cuál es la velocidad más rápida registrada en una bicicleta de montaña cuesta abajo?",
                    de: "Was ist die schnellste aufgezeichnete Geschwindigkeit beim Mountainbike-Downhill?",
                    nl: "Wat is de snelste geregistreerde snelheid op een mountainbike bergafwaarts?"
                },
                options: [
                    { en: "167 km/h", es: "167 km/h", de: "167 km/h", nl: "167 km/h" },
                    { en: "184 km/h", es: "184 km/h", de: "184 km/h", nl: "184 km/h" },
                    { en: "210 km/h", es: "210 km/h", de: "210 km/h", nl: "210 km/h" },
                    { en: "223 km/h", es: "223 km/h", de: "223 km/h", nl: "223 km/h" }
                ],
                correct: 3,
                explanation: {
                    en: "The fastest speed recorded on a mountain bike downhill is 223 km/h, achieved by professional downhill mountain bikers on specially designed courses with extreme gradients.",
                    es: "La velocidad más rápida registrada en una bicicleta de montaña cuesta abajo es de 223 km/h, lograda por ciclistas profesionales de descenso en montaña en cursos especialmente diseñados con gradientes extremos.",
                    de: "Die schnellste aufgezeichnete Geschwindigkeit beim Mountainbike-Downhill beträgt 223 km/h, erreicht von professionellen Downhill-Mountainbikern auf speziell entworfenen Strecken mit extremen Steigungen.",
                    nl: "De snelste geregistreerde snelheid op een mountainbike bergafwaarts is 223 km/h, behaald door professionele downhill mountainbikers op speciaal ontworpen parcours met extreme hellingen."
                }
            },
            {
                question: {
                    en: "What does the term 'gnarly' mean in extreme sports?",
                    es: "¿Qué significa el término 'gnarly' en deportes extremos?",
                    de: "Was bedeutet der Begriff 'gnarly' im Extremsport?",
                    nl: "Wat betekent de term 'gnarly' in extreme sporten?"
                },
                options: [
                    { en: "Easy and safe", es: "Fácil y seguro", de: "Einfach und sicher", nl: "Makkelijk en veilig" },
                    { en: "Difficult and dangerous", es: "Difícil y peligroso", de: "Schwierig und gefährlich", nl: "Moeilijk en gevaarlijk" },
                    { en: "Technical equipment", es: "Equipo técnico", de: "Technische Ausrüstung", nl: "Technische uitrusting" },
                    { en: "Professional level", es: "Nivel profesional", de: "Professionelles Niveau", nl: "Professioneel niveau" }
                ],
                correct: 1,
                explanation: {
                    en: "In extreme sports, 'gnarly' means difficult and dangerous, describing challenging conditions, terrain, or situations that require high skill and carry significant risk.",
                    es: "En deportes extremos, 'gnarly' significa difícil y peligroso, describiendo condiciones, terreno o situaciones desafiantes que requieren alta habilidad y conllevan riesgo significativo.",
                    de: "Im Extremsport bedeutet 'gnarly' schwierig und gefährlich und beschreibt herausfordernde Bedingungen, Gelände oder Situationen, die hohe Fähigkeiten erfordern und erhebliche Risiken bergen.",
                    nl: "In extreme sporten betekent 'gnarly' moeilijk en gevaarlijk, en beschrijft uitdagende omstandigheden, terrein of situaties die hoge vaardigheden vereisen en aanzienlijk risico inhouden."
                }
            },
            {
                question: {
                    en: "In wingsuit flying, what is the typical glide ratio?",
                    es: "En vuelo con traje alado, ¿cuál es la relación de planeo típica?",
                    de: "Beim Wingsuit-Fliegen, was ist das typische Gleitverhältnis?",
                    nl: "Bij wingsuit vliegen, wat is de typische glijverhouding?"
                },
                options: [
                    { en: "1:1", es: "1:1", de: "1:1", nl: "1:1" },
                    { en: "2:1", es: "2:1", de: "2:1", nl: "2:1" },
                    { en: "3:1", es: "3:1", de: "3:1", nl: "3:1" },
                    { en: "5:1", es: "5:1", de: "5:1", nl: "5:1" }
                ],
                correct: 2,
                explanation: {
                    en: "In wingsuit flying, the typical glide ratio is about 3:1, meaning for every 3 meters traveled horizontally, the flyer descends 1 meter, allowing for extended flight time.",
                    es: "En vuelo con traje alado, la relación de planeo típica es de aproximadamente 3:1, lo que significa que por cada 3 metros recorridos horizontalmente, el volador desciende 1 metro, permitiendo tiempo de vuelo extendido.",
                    de: "Beim Wingsuit-Fliegen beträgt das typische Gleitverhältnis etwa 3:1, was bedeutet, dass für jeden horizontal zurückgelegten 3 Meter der Flieger 1 Meter absteigt, was eine verlängerte Flugzeit ermöglicht.",
                    nl: "Bij wingsuit vliegen is de typische glijverhouding ongeveer 3:1, wat betekent dat voor elke 3 meter horizontaal afgelegd, de vlieger 1 meter daalt, wat een verlengde vliegtijd mogelijk maakt."
                }
            },
            {
                question: {
                    en: "What is free solo climbing?",
                    es: "¿Qué es la escalada libre en solitario?",
                    de: "Was ist Free Solo Klettern?",
                    nl: "Wat is free solo klimmen?"
                },
                options: [
                    { en: "Climbing with a partner", es: "Escalar con un compañero", de: "Klettern mit einem Partner", nl: "Klimmen met een partner" },
                    { en: "Climbing alone without ropes", es: "Escalar solo sin cuerdas", de: "Alleine ohne Seil klettern", nl: "Alleen klimmen zonder touwen" },
                    { en: "Indoor climbing", es: "Escalada interior", de: "Hallenklettern", nl: "Binnen klimmen" },
                    { en: "Speed climbing", es: "Escalada de velocidad", de: "Schnellklettern", nl: "Snelklimmen" }
                ],
                correct: 1,
                explanation: {
                    en: "Free solo climbing is climbing alone without ropes, harnesses, or other protective equipment. It requires exceptional skill and mental preparation as any mistake could be fatal.",
                    es: "La escalada libre en solitario es escalar solo sin cuerdas, arneses u otro equipo protector. Requiere habilidad excepcional y preparación mental ya que cualquier error podría ser fatal.",
                    de: "Free Solo Klettern ist das Klettern allein ohne Seil, Gurt oder andere Schutzausrüstung. Es erfordert außergewöhnliche Fähigkeiten und mentale Vorbereitung, da jeder Fehler tödlich sein könnte.",
                    nl: "Free solo klimmen is alleen klimmen zonder touwen, harnassen of andere beschermende uitrusting. Het vereist uitzonderlijke vaardigheden en mentale voorbereiding omdat elke fout fataal kan zijn."
                }
            },
            {
                question: {
                    en: "Which wave is considered the most dangerous to surf?",
                    es: "¿Qué ola se considera la más peligrosa para surfear?",
                    de: "Welche Welle gilt als die gefährlichste zum Surfen?",
                    nl: "Welke golf wordt beschouwd als de gevaarlijkste om te surfen?"
                },
                options: [
                    { en: "Pipeline, Hawaii", es: "Pipeline, Hawaii", de: "Pipeline, Hawaii", nl: "Pipeline, Hawaii" },
                    { en: "Teahupoo, Tahiti", es: "Teahupoo, Tahití", de: "Teahupoo, Tahiti", nl: "Teahupoo, Tahiti" },
                    { en: "Mavericks, California", es: "Mavericks, California", de: "Mavericks, Kalifornien", nl: "Mavericks, Californië" },
                    { en: "Nazaré, Portugal", es: "Nazaré, Portugal", de: "Nazaré, Portugal", nl: "Nazaré, Portugal" }
                ],
                correct: 1,
                explanation: {
                    en: "Teahupoo in Tahiti is widely considered the most dangerous wave to surf due to its extremely shallow reef, powerful barrel, and the severity of potential wipeouts.",
                    es: "Teahupoo en Tahití es ampliamente considerada la ola más peligrosa para surfear debido a su arrecife extremadamente poco profundo, barril poderoso y la severidad de las posibles caídas.",
                    de: "Teahupoo in Tahiti gilt als die gefährlichste Welle zum Surfen aufgrund ihres extrem flachen Riffs, der kraftvollen Barrel und der Schwere möglicher Stürze.",
                    nl: "Teahupoo in Tahiti wordt algemeen beschouwd als de gevaarlijkste golf om te surfen vanwege zijn extreem ondiepe rif, krachtige barrel en de ernst van mogelijke wipeouts."
                }
            },
            {
                question: {
                    en: "What is the sport of canyoning?",
                    es: "¿Qué es el deporte del barranquismo?",
                    de: "Was ist der Sport Canyoning?",
                    nl: "Wat is de sport canyoning?"
                },
                options: [
                    { en: "Cave exploration", es: "Exploración de cuevas", de: "Höhlenerkundung", nl: "Grot verkenning" },
                    { en: "Mountain climbing", es: "Escalada en montaña", de: "Bergsteigen", nl: "Bergbeklimming" },
                    { en: "Navigating through canyons", es: "Navegar a través de cañones", de: "Navigation durch Schluchten", nl: "Navigeren door canyons" },
                    { en: "River rafting", es: "Rafting en río", de: "Wildwasser-Rafting", nl: "Wildwater raften" }
                ],
                correct: 2,
                explanation: {
                    en: "Canyoning involves navigating through canyons using various techniques including walking, scrambling, climbing, jumping, rappelling, and swimming.",
                    es: "El barranquismo implica navegar por cañones usando varias técnicas incluyendo caminar, trepar, escalar, saltar, hacer rappel y nadar.",
                    de: "Canyoning beinhaltet die Navigation durch Schluchten mit verschiedenen Techniken wie Gehen, Klettern, Klettern, Springen, Abseilen und Schwimmen.",
                    nl: "Canyoning houdt in dat je door canyons navigeert met verschillende technieken zoals lopen, klauteren, klimmen, springen, abseilen en zwemmen."
                }
            },
            {
                question: {
                    en: "What is the minimum experience required for solo skydiving?",
                    es: "¿Cuál es la experiencia mínima requerida para el paracaidismo en solitario?",
                    de: "Was ist die Mindesferfahrung für das Solo-Fallschirmspringen?",
                    nl: "Wat is de minimale ervaring vereist voor solo parachutespringen?"
                },
                options: [
                    { en: "25 jumps", es: "25 saltos", de: "25 Sprünge", nl: "25 sprongen" },
                    { en: "50 jumps", es: "50 saltos", de: "50 Sprünge", nl: "50 sprongen" },
                    { en: "100 jumps", es: "100 saltos", de: "100 Sprünge", nl: "100 sprongen" },
                    { en: "Varies by country", es: "Varía por país", de: "Variiert je nach Land", nl: "Varieert per land" }
                ],
                correct: 3,
                explanation: {
                    en: "The minimum experience required for solo skydiving varies by country and certification organization, typically ranging from 25 to 50+ jumps depending on local regulations.",
                    es: "La experiencia mínima requerida para el paracaidismo en solitario varía por país y organización de certificación, típicamente oscilando entre 25 y 50+ saltos dependiendo de las regulaciones locales.",
                    de: "Die für das Solo-Fallschirmspringen erforderliche Mindesferfahrung variiert je nach Land und Zertifizierungsorganisation, normalerweise zwischen 25 und 50+ Sprüngen je nach örtlichen Vorschriften.",
                    nl: "De minimale ervaring vereist voor solo parachutespringen varieert per land en certificeringsorganisatie, doorgaans tussen 25 en 50+ sprongen afhankelijk van lokale regelgeving."
                }
            },
            {
                question: {
                    en: "What is slacklining?",
                    es: "¿Qué es slacklining?",
                    de: "Was ist Slacklining?",
                    nl: "Wat is slacklining?"
                },
                options: [
                    { en: "Rope climbing", es: "Escalada en cuerda", de: "Seilklettern", nl: "Touwklimmen" },
                    { en: "Balance walking on a flat webbing", es: "Caminar en equilibrio sobre una cinta plana", de: "Balancieren auf einem flachen Gurtband", nl: "Balanceren lopen op een platte webbing" },
                    { en: "Rock climbing", es: "Escalada en roca", de: "Klettern", nl: "Rotsklimmen" },
                    { en: "Zip-lining", es: "Tirolina", de: "Zip-lining", nl: "Tokkelen" }
                ],
                correct: 1
            },
            {
                question: {
                    en: "What is the highest altitude ever reached in a hot air balloon?",
                    es: "¿Cuál es la altitud más alta jamás alcanzada en un globo aerostático?",
                    de: "Was ist die höchste jemals in einem Heißluftballon erreichte Höhe?",
                    nl: "Wat is de hoogste hoogte ooit bereikt in een heteluchtballon?"
                },
                options: [
                    { en: "19,811m", es: "19,811m", de: "19.811m", nl: "19.811m" },
                    { en: "21,946m", es: "21,946m", de: "21.946m", nl: "21.946m" },
                    { en: "25,362m", es: "25,362m", de: "25.362m", nl: "25.362m" },
                    { en: "28,543m", es: "28,543m", de: "28.543m", nl: "28.543m" }
                ],
                correct: 1
            },
            {
                question: {
                    en: "What equipment is essential for whitewater rafting?",
                    es: "¿Qué equipo es esencial para el rafting en aguas bravas?",
                    de: "Welche Ausrüstung ist für Wildwasser-Rafting unerlässlich?",
                    nl: "Welke uitrusting is essentieel voor wildwater raften?"
                },
                options: [
                    { en: "Helmet only", es: "Solo casco", de: "Nur Helm", nl: "Alleen helm" },
                    { en: "Life vest only", es: "Solo chaleco salvavidas", de: "Nur Schwimmweste", nl: "Alleen reddingsvest" },
                    { en: "Helmet and life vest", es: "Casco y chaleco salvavidas", de: "Helm und Schwimmweste", nl: "Helm en reddingsvest" },
                    { en: "No special equipment needed", es: "No se necesita equipo especial", de: "Keine spezielle Ausrüstung erforderlich", nl: "Geen speciale uitrusting nodig" }
                ],
                correct: 2
            },
            {
                question: {
                    en: "What is big wave surfing defined as?",
                    es: "¿Cómo se define el surf de olas grandes?",
                    de: "Wie wird Big Wave Surfen definiert?",
                    nl: "Hoe wordt big wave surfen gedefinieerd?"
                },
                options: [
                    { en: "Waves over 10 feet", es: "Olas de más de 10 pies", de: "Wellen über 10 Fuß", nl: "Golven boven 10 voet" },
                    { en: "Waves over 20 feet", es: "Olas de más de 20 pies", de: "Wellen über 20 Fuß", nl: "Golven boven 20 voet" },
                    { en: "Waves over 30 feet", es: "Olas de más de 30 pies", de: "Wellen über 30 Fuß", nl: "Golven boven 30 voet" },
                    { en: "Waves over 50 feet", es: "Olas de más de 50 pies", de: "Wellen über 50 Fuß", nl: "Golven boven 50 voet" }
                ],
                correct: 1
            },
            {
                question: {
                    en: "What is the sport of coasteering?",
                    es: "¿Qué es el deporte del coasteering?",
                    de: "Was ist der Sport Coasteering?",
                    nl: "Wat is de sport coasteering?"
                },
                options: [
                    { en: "Coastal sailing", es: "Navegación costera", de: "Küstensegeln", nl: "Kustzeilen" },
                    { en: "Traversing rocky coastlines", es: "Atravesar costas rocosas", de: "Durchquerung felsiger Küsten", nl: "Rotsachtige kustlijnen doorkruisen" },
                    { en: "Beach volleyball", es: "Voleibol de playa", de: "Beachvolleyball", nl: "Beachvolleybal" },
                    { en: "Lighthouse climbing", es: "Escalada de faros", de: "Leuchtturm-Klettern", nl: "Vuurtoren klimmen" }
                ],
                correct: 1
            },
            {
                question: {
                    en: "What is the typical freefall speed in skydiving?",
                    es: "¿Cuál es la velocidad típica de caída libre en paracaidismo?",
                    de: "Was ist die typische Freifallgeschwindigkeit beim Fallschirmspringen?",
                    nl: "Wat is de typische vrije val snelheid bij parachutespringen?"
                },
                options: [
                    { en: "120 mph (193 km/h)", es: "120 mph (193 km/h)", de: "120 mph (193 km/h)", nl: "120 mph (193 km/h)" },
                    { en: "150 mph (241 km/h)", es: "150 mph (241 km/h)", de: "150 mph (241 km/h)", nl: "150 mph (241 km/h)" },
                    { en: "180 mph (290 km/h)", es: "180 mph (290 km/h)", de: "180 mph (290 km/h)", nl: "180 mph (290 km/h)" },
                    { en: "200 mph (322 km/h)", es: "200 mph (322 km/h)", de: "200 mph (322 km/h)", nl: "200 mph (322 km/h)" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "What is highlining?",
                    es: "¿Qué es highlining?",
                    de: "Was ist Highlining?",
                    nl: "Wat is highlining?"
                },
                options: [
                    { en: "High altitude climbing", es: "Escalada en alta altitud", de: "Hochgebirgsklettern", nl: "Hoge hoogte klimmen" },
                    { en: "Slacklining at great heights", es: "Slacklining a grandes alturas", de: "Slacklining in großen Höhen", nl: "Slacklining op grote hoogte" },
                    { en: "Paragliding", es: "Parapente", de: "Paragliding", nl: "Paragliding" },
                    { en: "Mountain biking", es: "Ciclismo de montaña", de: "Mountainbiking", nl: "Mountainbiken" }
                ],
                correct: 1
            },
            {
                question: {
                    en: "What is the deepest freediving world record?",
                    es: "¿Cuál es el récord mundial más profundo de apnea?",
                    de: "Was ist der tiefste Freediving-Weltrekord?",
                    nl: "Wat is het diepste vrijduiken wereldrecord?"
                },
                options: [
                    { en: "214m", es: "214m", de: "214m", nl: "214m" },
                    { en: "253m", es: "253m", de: "253m", nl: "253m" },
                    { en: "273m", es: "273m", de: "273m", nl: "273m" },
                    { en: "330m", es: "330m", de: "330m", nl: "330m" }
                ],
                correct: 2
            },
            {
                question: {
                    en: "What is ice climbing grade WI7?",
                    es: "¿Qué es el grado WI7 en escalada en hielo?",
                    de: "Was ist Eisklettern Grad WI7?",
                    nl: "Wat is ijsklimmen graad WI7?"
                },
                options: [
                    { en: "Beginner level", es: "Nivel principiante", de: "Anfängerlevel", nl: "Beginnerniveau" },
                    { en: "Intermediate level", es: "Nivel intermedio", de: "Mittelstufe", nl: "Gemiddeld niveau" },
                    { en: "Advanced level", es: "Nivel avanzado", de: "Fortgeschrittenes Level", nl: "Gevorderd niveau" },
                    { en: "Extremely difficult", es: "Extremadamente difícil", de: "Extrem schwierig", nl: "Extreem moeilijk" }
                ],
                correct: 3
            },
            {
                question: {
                    en: "What is volcano boarding?",
                    es: "¿Qué es el volcano boarding?",
                    de: "Was ist Volcano Boarding?",
                    nl: "Wat is volcano boarding?"
                },
                options: [
                    { en: "Surfing on lava", es: "Surfear en lava", de: "Auf Lava surfen", nl: "Surfen op lava" },
                    { en: "Sandboarding down volcanic slopes", es: "Sandboard bajando pendientes volcánicas", de: "Sandboarding vulkanische Hänge hinunter", nl: "Sandboarden van vulkanische hellingen" },
                    { en: "Climbing active volcanoes", es: "Escalar volcanes activos", de: "Aktive Vulkane besteigen", nl: "Actieve vulkanen beklimmen" },
                    { en: "Base jumping from volcanoes", es: "Salto base desde volcanes", de: "Base jumping von Vulkanen", nl: "Base jumping van vulkanen" }
                ],
                correct: 1
            },
            {
                question: {
                    en: "What is the sport of buildering?",
                    es: "¿Qué es el deporte del buildering?",
                    de: "Was ist der Sport Buildering?",
                    nl: "Wat is de sport buildering?"
                },
                options: [
                    { en: "Building construction", es: "Construcción de edificios", de: "Gebäudebau", nl: "Gebouw constructie" },
                    { en: "Climbing buildings", es: "Escalar edificios", de: "Gebäude klettern", nl: "Gebouwen beklimmen" },
                    { en: "Demolition sport", es: "Deporte de demolición", de: "Abriss-Sport", nl: "Sloopsport" },
                    { en: "Architecture design", es: "Diseño arquitectónico", de: "Architekturdesign", nl: "Architectuurontwerp" }
                ],
                correct: 1
            },
            {
                question: {
                    en: "What is the minimum age for bungee jumping in most countries?",
                    es: "¿Cuál es la edad mínima para bungee jumping en la mayoría de países?",
                    de: "Was ist das Mindestalter für Bungee-Jumping in den meisten Ländern?",
                    nl: "Wat is de minimumleeftijd voor bungeejumpen in de meeste landen?"
                },
                options: [
                    { en: "14 years", es: "14 años", de: "14 Jahre", nl: "14 jaar" },
                    { en: "16 years", es: "16 años", de: "16 Jahre", nl: "16 jaar" },
                    { en: "18 years", es: "18 años", de: "18 Jahre", nl: "18 jaar" },
                    { en: "21 years", es: "21 años", de: "21 Jahre", nl: "21 jaar" }
                ],
                correct: 2
            },
            {
                question: {
                    en: "What is speedflying?",
                    es: "¿Qué es speedflying?",
                    de: "Was ist Speedflying?",
                    nl: "Wat is speedflying?"
                },
                options: [
                    { en: "Fast airplane piloting", es: "Pilotaje rápido de aviones", de: "Schnelles Flugzeugfliegen", nl: "Snel vliegtuig besturen" },
                    { en: "Paragliding with smaller wings", es: "Parapente con alas más pequeñas", de: "Paragliding mit kleineren Flügeln", nl: "Paragliding met kleinere vleugels" },
                    { en: "Racing drones", es: "Drones de carreras", de: "Renndrohnen", nl: "Race drones" },
                    { en: "High-speed skydiving", es: "Paracaidismo de alta velocidad", de: "Hochgeschwindigkeits-Fallschirmspringen", nl: "Hoge snelheid parachutespringen" }
                ],
                correct: 1
            },
            {
                question: {
                    en: "What is the typical height for cliff diving competitions?",
                    es: "¿Cuál es la altura típica para competiciones de saltos de acantilado?",
                    de: "Was ist die typische Höhe für Klippensprung-Wettbewerbe?",
                    nl: "Wat is de typische hoogte voor rotsspringen competities?"
                },
                options: [
                    { en: "10-15m", es: "10-15m", de: "10-15m", nl: "10-15m" },
                    { en: "20-28m", es: "20-28m", de: "20-28m", nl: "20-28m" },
                    { en: "30-35m", es: "30-35m", de: "30-35m", nl: "30-35m" },
                    { en: "40-50m", es: "40-50m", de: "40-50m", nl: "40-50m" }
                ],
                correct: 1
            },
            {
                question: {
                    en: "What is sandboarding?",
                    es: "¿Qué es el sandboarding?",
                    de: "Was ist Sandboarding?",
                    nl: "Wat is sandboarding?"
                },
                options: [
                    { en: "Snowboarding on sand", es: "Snowboard en arena", de: "Snowboarding auf Sand", nl: "Snowboarden op zand" },
                    { en: "Beach volleyball", es: "Voleibol de playa", de: "Beachvolleyball", nl: "Beachvolleybal" },
                    { en: "Sand sculpture", es: "Escultura de arena", de: "Sandskulptur", nl: "Zandsculptuur" },
                    { en: "Desert racing", es: "Carreras en el desierto", de: "Wüstenrennen", nl: "Woestijnracen" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "What is the sport of zorbing?",
                    es: "¿Qué es el deporte del zorbing?",
                    de: "Was ist der Sport Zorbing?",
                    nl: "Wat is de sport zorbing?"
                },
                options: [
                    { en: "Rolling downhill in a transparent ball", es: "Rodar cuesta abajo en una pelota transparente", de: "In einem transparenten Ball bergab rollen", nl: "Bergafwaarts rollen in een transparante bal" },
                    { en: "Bouncing on trampolines", es: "Saltar en trampolines", de: "Auf Trampolinen springen", nl: "Springen op trampolines" },
                    { en: "Water balloon fights", es: "Peleas con globos de agua", de: "Wasserballonschlachten", nl: "Waterballongevechten" },
                    { en: "Bubble soccer", es: "Fútbol burbuja", de: "Bubble Fußball", nl: "Bubble voetbal" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "What is the term for jumping off a cliff with a wingsuit?",
                    es: "¿Cuál es el término para saltar de un acantilado con un traje alado?",
                    de: "Was ist der Begriff für das Springen von einer Klippe mit einem Wingsuit?",
                    nl: "Wat is de term voor springen van een klif met een wingsuit?"
                },
                options: [
                    { en: "BASE jumping", es: "BASE jumping", de: "BASE jumping", nl: "BASE jumping" },
                    { en: "Wingsuit BASE jumping", es: "Wingsuit BASE jumping", de: "Wingsuit BASE jumping", nl: "Wingsuit BASE jumping" },
                    { en: "Cliff diving", es: "Salto de acantilado", de: "Klippenspringen", nl: "Rotsspringen" },
                    { en: "Proximity flying", es: "Vuelo de proximidad", de: "Proximity Flying", nl: "Nabijheidsvliegen" }
                ],
                correct: 1
            },
            {
                question: {
                    en: "What is the Beaufort Scale used for in extreme sports?",
                    es: "¿Para qué se usa la Escala de Beaufort en deportes extremos?",
                    de: "Wofür wird die Beaufort-Skala im Extremsport verwendet?",
                    nl: "Waarvoor wordt de Beaufort-schaal gebruikt in extreme sporten?"
                },
                options: [
                    { en: "Temperature measurement", es: "Medición de temperatura", de: "Temperaturmessung", nl: "Temperatuurmeting" },
                    { en: "Wind speed measurement", es: "Medición de velocidad del viento", de: "Windgeschwindigkeitsmessung", nl: "Windsnelheidsmeting" },
                    { en: "Wave height measurement", es: "Medición de altura de olas", de: "Wellenhöhenmessung", nl: "Golfhoogtemeting" },
                    { en: "Difficulty rating", es: "Calificación de dificultad", de: "Schwierigkeitsbewertung", nl: "Moeilijkheidsbeoordeling" }
                ],
                correct: 1
            },
            {
                question: {
                    en: "What is free running also known as?",
                    es: "¿Cómo se conoce también el free running?",
                    de: "Wie ist Free Running auch bekannt?",
                    nl: "Hoe staat free running ook wel bekend?"
                },
                options: [
                    { en: "Parkour", es: "Parkour", de: "Parkour", nl: "Parkour" },
                    { en: "Street running", es: "Carrera callejera", de: "Straßenlauf", nl: "Straatlopen" },
                    { en: "Urban climbing", es: "Escalada urbana", de: "Urban Climbing", nl: "Stadsklimmen" },
                    { en: "Obstacle racing", es: "Carrera de obstáculos", de: "Hindernislauf", nl: "Hindernisloop" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "What is the most dangerous aspect of cave diving?",
                    es: "¿Cuál es el aspecto más peligroso del buceo en cuevas?",
                    de: "Was ist der gefährlichste Aspekt beim Höhlentauchen?",
                    nl: "Wat is het gevaarlijkste aspect van grotduiken?"
                },
                options: [
                    { en: "Equipment failure", es: "Falla del equipo", de: "Ausrüstungsausfall", nl: "Uitrusting falen" },
                    { en: "Getting lost", es: "Perderse", de: "Sich verirren", nl: "Verdwalen" },
                    { en: "Running out of air", es: "Quedarse sin aire", de: "Luft ausgeht", nl: "Lucht opraken" },
                    { en: "All of the above", es: "Todas las anteriores", de: "Alle oben genannten", nl: "Alle bovenstaande" }
                ],
                correct: 3
            },
            {
                question: {
                    en: "What is the sport of via ferrata?",
                    es: "¿Qué es el deporte de vía ferrata?",
                    de: "Was ist der Sport Via Ferrata?",
                    nl: "Wat is de sport via ferrata?"
                },
                options: [
                    { en: "Train traveling", es: "Viajes en tren", de: "Zugfahren", nl: "Treinreizen" },
                    { en: "Iron-aided climbing routes", es: "Rutas de escalada asistidas por hierro", de: "Eisenunterstützte Kletterrouten", nl: "IJzer-ondersteunde klimroutes" },
                    { en: "Metal detecting", es: "Detección de metales", de: "Metalldetektor", nl: "Metaaldetectie" },
                    { en: "Railroad construction", es: "Construcción de ferrocarril", de: "Eisenbahnbau", nl: "Spoorwegbouw" }
                ],
                correct: 1
            },
            {
                question: {
                    en: "What is the difference between bouldering and sport climbing?",
                    es: "¿Cuál es la diferencia entre bouldering y escalada deportiva?",
                    de: "Was ist der Unterschied zwischen Bouldering und Sportklettern?",
                    nl: "Wat is het verschil tussen boulderen en sportklimmen?"
                },
                options: [
                    { en: "Height and protection used", es: "Altura y protección utilizada", de: "Höhe und verwendete Sicherung", nl: "Hoogte en gebruikte bescherming" },
                    { en: "Indoor vs outdoor", es: "Interior vs exterior", de: "Drinnen vs draußen", nl: "Binnen vs buiten" },
                    { en: "Equipment cost", es: "Costo del equipo", de: "Ausrüstungskosten", nl: "Uitrustingskosten" },
                    { en: "Competition rules", es: "Reglas de competición", de: "Wettkampfregeln", nl: "Competitieregels" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "What is the maximum wind speed for safe paragliding?",
                    es: "¿Cuál es la velocidad máxima del viento para parapente seguro?",
                    de: "Was ist die maximale Windgeschwindigkeit für sicheres Paragliding?",
                    nl: "Wat is de maximale windsnelheid voor veilig paragliding?"
                },
                options: [
                    { en: "15 mph (24 km/h)", es: "15 mph (24 km/h)", de: "15 mph (24 km/h)", nl: "15 mph (24 km/h)" },
                    { en: "25 mph (40 km/h)", es: "25 mph (40 km/h)", de: "25 mph (40 km/h)", nl: "25 mph (40 km/h)" },
                    { en: "35 mph (56 km/h)", es: "35 mph (56 km/h)", de: "35 mph (56 km/h)", nl: "35 mph (56 km/h)" },
                    { en: "45 mph (72 km/h)", es: "45 mph (72 km/h)", de: "45 mph (72 km/h)", nl: "45 mph (72 km/h)" }
                ],
                correct: 1
            },
            {
                question: {
                    en: "What is the sport of canoeing in extreme whitewater called?",
                    es: "¿Cómo se llama el deporte de canotaje en aguas bravas extremas?",
                    de: "Wie heißt der Sport des Kanufahrens in extremen Wildwasser?",
                    nl: "Hoe heet de sport kanoën in extreem wildwater?"
                },
                options: [
                    { en: "Kayaking", es: "Kayaking", de: "Kayaking", nl: "Kayaking" },
                    { en: "Whitewater canoeing", es: "Canotaje en aguas bravas", de: "Wildwasser-Kanufahren", nl: "Wildwater kanoën" },
                    { en: "Creek boating", es: "Creek boating", de: "Creek Boating", nl: "Creek boating" },
                    { en: "All of the above", es: "Todas las anteriores", de: "Alle oben genannten", nl: "Alle bovenstaande" }
                ],
                correct: 3
            },
            {
                question: {
                    en: "What is the term for performing stunts on a BMX bike?",
                    es: "¿Cuál es el término para realizar acrobacias en una bicicleta BMX?",
                    de: "Was ist der Begriff für das Ausführen von Stunts auf einem BMX-Rad?",
                    nl: "Wat is de term voor het uitvoeren van stunts op een BMX fiets?"
                },
                options: [
                    { en: "BMX racing", es: "Carreras de BMX", de: "BMX Racing", nl: "BMX racen" },
                    { en: "BMX freestyle", es: "BMX freestyle", de: "BMX Freestyle", nl: "BMX freestyle" },
                    { en: "BMX touring", es: "BMX touring", de: "BMX Touring", nl: "BMX touren" },
                    { en: "BMX cruising", es: "BMX cruising", de: "BMX Cruising", nl: "BMX cruisen" }
                ],
                correct: 1
            },
            {
                question: {
                    en: "What is the deepest scuba diving record?",
                    es: "¿Cuál es el récord de buceo más profundo?",
                    de: "Was ist der tiefste Tauchrekord?",
                    nl: "Wat is het diepste duikrecord?"
                },
                options: [
                    { en: "214m", es: "214m", de: "214m", nl: "214m" },
                    { en: "253m", es: "253m", de: "253m", nl: "253m" },
                    { en: "330m", es: "330m", de: "330m", nl: "330m" },
                    { en: "355m", es: "355m", de: "355m", nl: "355m" }
                ],
                correct: 2
            },
            {
                question: {
                    en: "What is the sport where athletes jump from aircrafts and perform acrobatics?",
                    es: "¿Cuál es el deporte donde los atletas saltan de aeronaves y realizan acrobacias?",
                    de: "Was ist der Sport, bei dem Athleten aus Flugzeugen springen und Akrobatik machen?",
                    nl: "Wat is de sport waarbij atleten uit vliegtuigen springen en acrobatiek uitvoeren?"
                },
                options: [
                    { en: "Skydiving", es: "Paracaidismo", de: "Fallschirmspringen", nl: "Parachutespringen" },
                    { en: "Skysurfing", es: "Skysurfing", de: "Skysurfing", nl: "Skysurfing" },
                    { en: "Freefly", es: "Freefly", de: "Freefly", nl: "Freefly" },
                    { en: "All of the above", es: "Todas las anteriores", de: "Alle oben genannten", nl: "Alle bovenstaande" }
                ],
                correct: 3
            },
            {
                question: {
                    en: "What safety equipment is mandatory for rock climbing?",
                    es: "¿Qué equipo de seguridad es obligatorio para la escalada en roca?",
                    de: "Welche Sicherheitsausrüstung ist beim Klettern obligatorisch?",
                    nl: "Welke veiligheidsuitrusting is verplicht voor rotsklimmen?"
                },
                options: [
                    { en: "Helmet only", es: "Solo casco", de: "Nur Helm", nl: "Alleen helm" },
                    { en: "Harness only", es: "Solo arnés", de: "Nur Klettergurt", nl: "Alleen harnas" },
                    { en: "Helmet and harness", es: "Casco y arnés", de: "Helm und Klettergurt", nl: "Helm en harnas" },
                    { en: "Varies by location", es: "Varía según la ubicación", de: "Variiert je nach Standort", nl: "Varieert per locatie" }
                ],
                correct: 3
            },
            {
                question: {
                    en: "What is the world's tallest artificial climbing wall?",
                    es: "¿Cuál es el muro de escalada artificial más alto del mundo?",
                    de: "Was ist die höchste künstliche Kletterwand der Welt?",
                    nl: "Wat is de hoogste kunstmatige klimwand ter wereld?"
                },
                options: [
                    { en: "37m", es: "37m", de: "37m", nl: "37m" },
                    { en: "42m", es: "42m", de: "42m", nl: "42m" },
                    { en: "50m", es: "50m", de: "50m", nl: "50m" },
                    { en: "85m", es: "85m", de: "85m", nl: "85m" }
                ],
                correct: 3
            },
            {
                question: {
                    en: "What is the sport of urban exploration also known as?",
                    es: "¿Cómo se conoce también el deporte de exploración urbana?",
                    de: "Wie ist der Sport der urbanen Erkundung auch bekannt?",
                    nl: "Hoe staat de sport van stedelijke verkenning ook bekend?"
                },
                options: [
                    { en: "Urbexing", es: "Urbexing", de: "Urbexing", nl: "Urbexing" },
                    { en: "Building hopping", es: "Salto de edificios", de: "Gebäude-Hopping", nl: "Gebouwen hoppen" },
                    { en: "Roof topping", es: "Roof topping", de: "Roof Topping", nl: "Daken beklimmen" },
                    { en: "All of the above", es: "Todas las anteriores", de: "Alle oben genannten", nl: "Alle bovenstaande" }
                ],
                correct: 3
            },
            {
                question: {
                    en: "What is the minimum qualification for heli-skiing?",
                    es: "¿Cuál es la calificación mínima para heli-skiing?",
                    de: "Was ist die Mindestqualifikation für Heli-Skiing?",
                    nl: "Wat is de minimumkwalificatie voor heli-skiën?"
                },
                options: [
                    { en: "Beginner skier", es: "Esquiador principiante", de: "Anfänger-Skifahrer", nl: "Beginnend skiër" },
                    { en: "Intermediate skier", es: "Esquiador intermedio", de: "Mittelstufen-Skifahrer", nl: "Gemiddeld skiër" },
                    { en: "Advanced/expert skier", es: "Esquiador avanzado/experto", de: "Fortgeschrittener/Experten-Skifahrer", nl: "Gevorderd/expert skiër" },
                    { en: "Professional ski instructor", es: "Instructor profesional de esquí", de: "Professioneller Skilehrer", nl: "Professionele ski-instructeur" }
                ],
                correct: 2
            },
            {
                question: {
                    en: "What is the extreme sport involving riding giant ocean swells?",
                    es: "¿Cuál es el deporte extremo que involucra montar grandes ondas oceánicas?",
                    de: "Was ist der Extremsport, bei dem man große Ozeanwellen reitet?",
                    nl: "Wat is de extreme sport waarbij je grote oceaangolven rijdt?"
                },
                options: [
                    { en: "Big wave surfing", es: "Surf de olas grandes", de: "Big Wave Surfen", nl: "Big wave surfen" },
                    { en: "Windsurfing", es: "Windsurf", de: "Windsurfen", nl: "Windsurfen" },
                    { en: "Kitesurfing", es: "Kitesurf", de: "Kitesurfen", nl: "Kitesurfen" },
                    { en: "Stand-up paddleboarding", es: "Stand-up paddleboarding", de: "Stand-up Paddleboarding", nl: "Stand-up paddleboarding" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "What equipment do you need to play table tennis?",
                    es: "¿Qué equipo necesitas para jugar tenis de mesa?",
                    de: "Welche Ausrüstung brauchst du zum Tischtennisspielen?",
                    nl: "Welke uitrusting heb je nodig om tafeltennis te spelen?"
                },
                options: [
                    { en: "Paddle and ball", es: "Pala y pelota", de: "Schläger und Ball", nl: "Batje en bal" },
                    { en: "Racket and shuttlecock", es: "Raqueta y volante", de: "Schläger und Federball", nl: "Racket en shuttle" },
                    { en: "Bat and glove", es: "Bate y guante", de: "Schläger und Handschuh", nl: "Knuppel en handschoen" },
                    { en: "Stick and puck", es: "Palo y disco", de: "Stock und Puck", nl: "Stick en puck" }
                ],
                correct: 0,
                explanation: {
                    en: "Table tennis requires a paddle (also called bat or racket) and a small lightweight ball. The game is played on a table with a net.",
                    es: "El tenis de mesa requiere una pala (también llamada raqueta) y una pelota pequeña y ligera. El juego se juega en una mesa con una red.",
                    de: "Tischtennis erfordert einen Schläger und einen kleinen leichten Ball. Das Spiel wird auf einem Tisch mit einem Netz gespielt.",
                    nl: "Tafeltennis vereist een batje (ook wel racket genoemd) en een kleine lichte bal. Het spel wordt gespeeld op een tafel met een net."
                }
            },
            {
                question: {
                    en: "How many points do you need to win a volleyball set?",
                    es: "¿Cuántos puntos necesitas para ganar un set de voleibol?",
                    de: "Wie viele Punkte brauchst du, um einen Volleyballsatz zu gewinnen?",
                    nl: "Hoeveel punten heb je nodig om een volleybalset te winnen?"
                },
                options: [
                    { en: "25 points", es: "25 puntos", de: "25 Punkte", nl: "25 punten" },
                    { en: "21 points", es: "21 puntos", de: "21 Punkte", nl: "21 punten" },
                    { en: "15 points", es: "15 puntos", de: "15 Punkte", nl: "15 punten" },
                    { en: "30 points", es: "30 puntos", de: "30 Punkte", nl: "30 punten" }
                ],
                correct: 0,
                explanation: {
                    en: "In volleyball, you need 25 points to win a set, and you must win by at least 2 points. The fifth set (if played) is to 15 points.",
                    es: "En voleibol, necesitas 25 puntos para ganar un set, y debes ganar por al menos 2 puntos. El quinto set (si se juega) es a 15 puntos.",
                    de: "Im Volleyball brauchst du 25 Punkte, um einen Satz zu gewinnen, und du musst mit mindestens 2 Punkten gewinnen. Der fünfte Satz (falls gespielt) geht bis 15 Punkte.",
                    nl: "In volleybal heb je 25 punten nodig om een set te winnen, en je moet met minstens 2 punten winnen. De vijfde set (indien gespeeld) gaat tot 15 punten."
                }
            },
            {
                question: {
                    en: "What is the object you try to hit in badminton?",
                    es: "¿Cuál es el objeto que tratas de golpear en bádminton?",
                    de: "Was ist das Objekt, das du beim Badminton zu treffen versuchst?",
                    nl: "Wat is het object dat je probeert te raken bij badminton?"
                },
                options: [
                    { en: "Shuttlecock", es: "Volante", de: "Federball", nl: "Shuttle" },
                    { en: "Ball", es: "Pelota", de: "Ball", nl: "Bal" },
                    { en: "Puck", es: "Disco", de: "Puck", nl: "Puck" },
                    { en: "Stone", es: "Piedra", de: "Stein", nl: "Steen" }
                ],
                correct: 0,
                explanation: {
                    en: "In badminton, players hit a shuttlecock (also called a birdie) back and forth over a net using rackets.",
                    es: "En bádminton, los jugadores golpean un volante hacia adelante y hacia atrás sobre una red usando raquetas.",
                    de: "Im Badminton schlagen die Spieler einen Federball mit Schlägern über ein Netz hin und her.",
                    nl: "Bij badminton slaan spelers een shuttle (ook wel pluimbal genoemd) heen en weer over een net met rackets."
                }
            },
            {
                question: {
                    en: "Which sport uses a goal with a net but no goalkeeper?",
                    es: "¿Qué deporte usa una portería con red pero sin portero?",
                    de: "Welcher Sport verwendet ein Tor mit Netz, aber ohne Torwart?",
                    nl: "Welke sport gebruikt een doel met net maar geen doelman?"
                },
                options: [
                    { en: "Basketball", es: "Baloncesto", de: "Basketball", nl: "Basketbal" },
                    { en: "Soccer", es: "Fútbol", de: "Fußball", nl: "Voetbal" },
                    { en: "Hockey", es: "Hockey", de: "Hockey", nl: "Hockey" },
                    { en: "Lacrosse", es: "Lacrosse", de: "Lacrosse", nl: "Lacrosse" }
                ],
                correct: 0,
                explanation: {
                    en: "Basketball uses a hoop (goal) with a net, but there is no goalkeeper. Players try to shoot the ball through the opponent's hoop.",
                    es: "El baloncesto usa un aro (portería) con una red, pero no hay portero. Los jugadores tratan de anotar la pelota a través del aro del oponente.",
                    de: "Basketball verwendet einen Korb (Tor) mit einem Netz, aber es gibt keinen Torwart. Spieler versuchen, den Ball durch den gegnerischen Korb zu werfen.",
                    nl: "Basketbal gebruikt een mand (doel) met een net, maar er is geen doelman. Spelers proberen de bal door de mand van de tegenstander te gooien."
                }
            }
        ]
    };

    if (typeof window.addLevel === 'function') {
        window.addLevel('warm-up/sports', level7);
    }
})();