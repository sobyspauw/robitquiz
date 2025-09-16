(function() {
    const level10 = {
        name: {
            en: "Advanced Sports Knowledge and Trivia",
            es: "Conocimiento Deportivo Avanzado y Trivia",
            de: "Fortgeschrittenes Sportwissen und Trivia",
            nl: "Geavanceerde Sportkennis en Trivia"
        },
        questions: [
            {
                question: {
                    en: "What is the Fosbury Flop?",
                    es: "¿Qué es el Fosbury Flop?",
                    de: "Was ist der Fosbury Flop?",
                    nl: "Wat is de Fosbury Flop?"
                },
                options: [
                    { en: "A swimming technique", es: "Una técnica de natación", de: "Eine Schwimmtechnik", nl: "Een zwemtechniek" },
                    { en: "A high jump technique", es: "Una técnica de salto alto", de: "Eine Hochsprungtechnik", nl: "Een hoogspringtechniek" },
                    { en: "A gymnastics move", es: "Un movimiento de gimnasia", de: "Eine Turnbewegung", nl: "Een gymnastiekbeweging" },
                    { en: "A tennis serve", es: "Un saque de tenis", de: "Ein Tennisaufschlag", nl: "Een tennisserve" }
                ],
                correct: 1,
                explanation: {
                    en: "The Fosbury Flop is a revolutionary high jump technique developed by Dick Fosbury in the 1960s, where the jumper goes over the bar backwards, now the standard technique.",
                    es: "El Fosbury Flop es una técnica revolucionaria de salto alto desarrollada por Dick Fosbury en los años 1960, donde el saltador pasa sobre la barra hacia atrás, ahora la técnica estándar.",
                    de: "Der Fosbury Flop ist eine revolutionäre Hochsprungtechnik, entwickelt von Dick Fosbury in den 1960ern, bei der der Springer rückwärts über die Latte geht, heute die Standardtechnik.",
                    nl: "De Fosbury Flop is een revolutionaire hoogspringtechniek ontwikkeld door Dick Fosbury in de jaren 1960, waarbij de springer achterwaarts over de lat gaat, nu de standaardtechniek."
                }
            },
            {
                question: {
                    en: "Which sport uses the term 'mulligan'?",
                    es: "¿Qué deporte usa el término 'mulligan'?",
                    de: "Welcher Sport verwendet den Begriff 'Mulligan'?",
                    nl: "Welke sport gebruikt de term 'mulligan'?"
                },
                options: [
                    { en: "Tennis", es: "Tenis", de: "Tennis", nl: "Tennis" },
                    { en: "Golf", es: "Golf", de: "Golf", nl: "Golf" },
                    { en: "Baseball", es: "Béisbol", de: "Baseball", nl: "Honkbal" },
                    { en: "Basketball", es: "Baloncesto", de: "Basketball", nl: "Basketbal" }
                ],
                correct: 1,
                explanation: {
                    en: "Golf uses the term 'mulligan', which refers to a do-over or second chance when a player hits a poor shot, typically used in casual play rather than competitive rounds.",
                    es: "El golf usa el término 'mulligan', que se refiere a una segunda oportunidad cuando un jugador hace un mal tiro, típicamente usado en juego casual en lugar de rondas competitivas.",
                    de: "Golf verwendet den Begriff 'Mulligan', der sich auf einen Neuversuch oder eine zweite Chance bezieht, wenn ein Spieler einen schlechten Schlag macht, typischerweise im Freizeitspiel statt in Wettkampfrunden.",
                    nl: "Golf gebruikt de term 'mulligan', wat verwijst naar een herkansing of tweede kans wanneer een speler een slechte slag maakt, typisch gebruikt in casual spel in plaats van competitieve rondes."
                }
            },
            {
                question: {
                    en: "What is a 'perfect game' in bowling called when you get all strikes?",
                    es: "¿Cómo se llama un 'juego perfecto' en bolos cuando obtienes todos los strikes?",
                    de: "Wie nennt man ein 'perfektes Spiel' beim Bowling, wenn man alle Strikes wirft?",
                    nl: "Hoe noem je een 'perfect game' in bowling als je alle strikes gooit?"
                },
                options: [
                    { en: "Turkey", es: "Pavo", de: "Turkey", nl: "Turkey" },
                    { en: "Strike out", es: "Strike out", de: "Strike out", nl: "Strike out" },
                    { en: "300 game", es: "Juego de 300", de: "300er Spiel", nl: "300 spel" },
                    { en: "Perfect ten", es: "Diez perfecto", de: "Perfekte Zehn", nl: "Perfecte tien" }
                ],
                correct: 2,
                explanation: {
                    en: "A perfect game in bowling with all strikes is called a '300 game' because it results in a perfect score of 300 points, the maximum possible in ten-pin bowling.",
                    es: "Un juego perfecto en bolos con todos los strikes se llama 'juego de 300' porque resulta en una puntuación perfecta de 300 puntos, el máximo posible en bolos de diez pines.",
                    de: "Ein perfektes Spiel beim Bowling mit allen Strikes wird '300er Spiel' genannt, da es zu einer perfekten Punktzahl von 300 Punkten führt, dem höchstmöglichen beim Zehn-Pin-Bowling.",
                    nl: "Een perfect spel in bowling met alle strikes wordt een '300 spel' genoemd omdat het resulteert in een perfecte score van 300 punten, het maximum mogelijke in tien-pin bowling."
                }
            },
            {
                question: {
                    en: "In chess, what is a 'zugzwang'?",
                    es: "En ajedrez, ¿qué es un 'zugzwang'?",
                    de: "Was ist im Schach ein 'Zugzwang'?",
                    nl: "In schaak, wat is een 'zugzwang'?"
                },
                options: [
                    { en: "A winning position", es: "Una posición ganadora", de: "Eine Gewinnstellung", nl: "Een winnende positie" },
                    { en: "Being forced to make a bad move", es: "Ser forzado a hacer un mal movimiento", de: "Gezwungen sein, einen schlechten Zug zu machen", nl: "Gedwongen worden een slechte zet te doen" },
                    { en: "A draw position", es: "Una posición de empate", de: "Eine Remisstellung", nl: "Een gelijke positie" },
                    { en: "Checkmate in three moves", es: "Jaque mate en tres movimientos", de: "Schachmatt in drei Zügen", nl: "Schaakmat in drie zetten" }
                ],
                correct: 1
            },
            {
                question: {
                    en: "What does 'DRS' stand for in cricket?",
                    es: "¿Qué significa 'DRS' en cricket?",
                    de: "Wofür steht 'DRS' im Cricket?",
                    nl: "Waar staat 'DRS' voor in cricket?"
                },
                options: [
                    { en: "Decision Review System", es: "Sistema de Revisión de Decisiones", de: "Decision Review System", nl: "Decision Review System" },
                    { en: "Delivered Run System", es: "Sistema de Carreras Entregadas", de: "Delivered Run System", nl: "Delivered Run System" },
                    { en: "Direct Rating System", es: "Sistema de Calificación Directa", de: "Direct Rating System", nl: "Direct Rating System" },
                    { en: "Dismissal Record System", es: "Sistema de Registro de Eliminaciones", de: "Dismissal Record System", nl: "Dismissal Record System" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "Which tennis player won the Golden Slam in 1988?",
                    es: "¿Qué tenista ganó el Golden Slam en 1988?",
                    de: "Welche Tennisspielerin gewann 1988 den Golden Slam?",
                    nl: "Welke tennisspeelster won de Golden Slam in 1988?"
                },
                options: [
                    { en: "Martina Navratilova", es: "Martina Navratilova", de: "Martina Navratilova", nl: "Martina Navratilova" },
                    { en: "Steffi Graf", es: "Steffi Graf", de: "Steffi Graf", nl: "Steffi Graf" },
                    { en: "Chris Evert", es: "Chris Evert", de: "Chris Evert", nl: "Chris Evert" },
                    { en: "Monica Seles", es: "Monica Seles", de: "Monica Seles", nl: "Monica Seles" }
                ],
                correct: 1
            },
            {
                question: {
                    en: "What is the 'Miracle on Ice'?",
                    es: "¿Qué es el 'Milagro sobre Hielo'?",
                    de: "Was ist das 'Wunder auf dem Eis'?",
                    nl: "Wat is het 'Mirakel op Ijs'?"
                },
                options: [
                    { en: "USA hockey beating USSR in 1980", es: "USA hockey venciendo a URSS en 1980", de: "USA Hockey besiegt UdSSR 1980", nl: "USA hockey verslaat USSR in 1980" },
                    { en: "Figure skating world record", es: "Récord mundial de patinaje artístico", de: "Eiskunstlauf-Weltrekord", nl: "Kunstschaats wereldrecord" },
                    { en: "First indoor ice rink", es: "Primera pista de hielo interior", de: "Erste Eishalle", nl: "Eerste overdekte ijsbaan" },
                    { en: "Olympic ice dancing debut", es: "Debut de la danza sobre hielo olímpica", de: "Olympisches Eistanzen-Debüt", nl: "Olympisch ijsdansen debuut" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "In Formula 1, what is 'porpoising'?",
                    es: "En Fórmula 1, ¿qué es 'porpoising'?",
                    de: "Was ist 'Porpoising' in der Formel 1?",
                    nl: "In Formule 1, wat is 'porpoising'?"
                },
                options: [
                    { en: "A racing maneuver", es: "Una maniobra de carrera", de: "Ein Rennmanöver", nl: "Een racemanoeuvre" },
                    { en: "Car bouncing due to aerodynamics", es: "El auto rebota debido a la aerodinámica", de: "Auto springt aufgrund der Aerodynamik", nl: "Auto stuitert door aerodynamica" },
                    { en: "Tire warming technique", es: "Técnica de calentamiento de neumáticos", de: "Reifenaufwärmtechnik", nl: "Band opwarmtechniek" },
                    { en: "Pit stop strategy", es: "Estrategia de parada en boxes", de: "Boxenstopp-Strategie", nl: "Pitstop strategie" }
                ],
                correct: 1
            },
            {
                question: {
                    en: "What does 'DNF' mean in motorsports?",
                    es: "¿Qué significa 'DNF' en deportes de motor?",
                    de: "Was bedeutet 'DNF' im Motorsport?",
                    nl: "Wat betekent 'DNF' in motorsport?"
                },
                options: [
                    { en: "Did Not Finish", es: "No Terminó", de: "Did Not Finish", nl: "Did Not Finish" },
                    { en: "Did Not Fight", es: "No Peleó", de: "Did Not Fight", nl: "Did Not Fight" },
                    { en: "Do Not Follow", es: "No Seguir", de: "Do Not Follow", nl: "Do Not Follow" },
                    { en: "Drive Not Fast", es: "No Conduzca Rápido", de: "Drive Not Fast", nl: "Drive Not Fast" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "Which boxer was known as 'The Sweet Science' practitioner?",
                    es: "¿Qué boxeador era conocido como practicante de 'La Ciencia Dulce'?",
                    de: "Welcher Boxer war als Praktiker der 'Sweet Science' bekannt?",
                    nl: "Welke bokser stond bekend als beoefenaar van 'The Sweet Science'?"
                },
                options: [
                    { en: "Muhammad Ali", es: "Muhammad Ali", de: "Muhammad Ali", nl: "Muhammad Ali" },
                    { en: "Sugar Ray Robinson", es: "Sugar Ray Robinson", de: "Sugar Ray Robinson", nl: "Sugar Ray Robinson" },
                    { en: "Boxing itself", es: "El boxeo en sí", de: "Das Boxen selbst", nl: "Boksen zelf" },
                    { en: "Floyd Mayweather", es: "Floyd Mayweather", de: "Floyd Mayweather", nl: "Floyd Mayweather" }
                ],
                correct: 2
            },
            {
                question: {
                    en: "What is a 'shanked' shot in golf?",
                    es: "¿Qué es un tiro 'shanked' en golf?",
                    de: "Was ist ein 'geschankter' Schlag im Golf?",
                    nl: "Wat is een 'shanked' schot in golf?"
                },
                options: [
                    { en: "Perfect straight shot", es: "Tiro perfecto y recto", de: "Perfekter gerader Schlag", nl: "Perfecte rechte schot" },
                    { en: "Shot hit off the hosel", es: "Tiro golpeado desde el hosel", de: "Schlag vom Hosel getroffen", nl: "Schot geraakt van de hosel" },
                    { en: "High arcing shot", es: "Tiro con arco alto", de: "Hoch bogenförmiger Schlag", nl: "Hoog boogschot" },
                    { en: "Shot into water hazard", es: "Tiro al obstáculo de agua", de: "Schlag ins Wasserhindernis", nl: "Schot in waterhindernis" }
                ],
                correct: 1
            },
            {
                question: {
                    en: "In rugby, what is a 'drop goal'?",
                    es: "En rugby, ¿qué es un 'drop goal'?",
                    de: "Was ist im Rugby ein 'Drop Goal'?",
                    nl: "In rugby, wat is een 'drop goal'?"
                },
                options: [
                    { en: "Kicking ball after it bounces", es: "Patear la pelota después de que rebota", de: "Ball nach dem Aufprall kicken", nl: "Bal schoppen nadat hij stuit" },
                    { en: "Scoring by dropping ball over line", es: "Anotar dejando caer la pelota sobre la línea", de: "Punkten durch Fallenlassen des Balls über die Linie", nl: "Scoren door bal over lijn te laten vallen" },
                    { en: "Fumbling the ball", es: "Perder la pelota", de: "Ball fallen lassen", nl: "Bal laten vallen" },
                    { en: "Tackle that drops opponent", es: "Tackle que derriba al oponente", de: "Tackle das den Gegner zu Fall bringt", nl: "Tackle die tegenstander laat vallen" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "What is 'The Yips' in sports?",
                    es: "¿Qué es 'The Yips' en deportes?",
                    de: "Was sind 'The Yips' im Sport?",
                    nl: "Wat zijn 'The Yips' in sport?"
                },
                options: [
                    { en: "A celebration dance", es: "Un baile de celebración", de: "Ein Feiertanz", nl: "Een vierdans" },
                    { en: "Psychological condition affecting performance", es: "Condición psicológica que afecta el rendimiento", de: "Psychische Verfassung die die Leistung beeinträchtigt", nl: "Psychologische conditie die prestaties beïnvloedt" },
                    { en: "Equipment malfunction", es: "Mal funcionamiento del equipo", de: "Ausrüstungsfehler", nl: "Uitrustingsstoring" },
                    { en: "Victory chant", es: "Canto de victoria", de: "Siegesgesang", nl: "Overwinningslied" }
                ],
                correct: 1
            },
            {
                question: {
                    en: "In sailing, what is 'tacking'?",
                    es: "En vela, ¿qué es 'tacking'?",
                    de: "Was ist 'Wenden' beim Segeln?",
                    nl: "In zeilen, wat is 'tacking'?"
                },
                options: [
                    { en: "Anchoring the boat", es: "Anclar el barco", de: "Boot verankern", nl: "Boot voor anker leggen" },
                    { en: "Changing direction through the wind", es: "Cambiar dirección a través del viento", de: "Richtung durch den Wind ändern", nl: "Richting veranderen door de wind" },
                    { en: "Raising the sail", es: "Izar la vela", de: "Segel setzen", nl: "Zeil hijsen" },
                    { en: "Securing equipment", es: "Asegurar el equipo", de: "Ausrüstung sichern", nl: "Uitrusting vastmaken" }
                ],
                correct: 1
            },
            {
                question: {
                    en: "What is a 'submarine' pitch in baseball?",
                    es: "¿Qué es un lanzamiento 'submarine' en béisbol?",
                    de: "Was ist ein 'Submarine' Wurf im Baseball?",
                    nl: "Wat is een 'submarine' worp in honkbal?"
                },
                options: [
                    { en: "Underwater training pitch", es: "Lanzamiento de entrenamiento bajo el agua", de: "Unterwasser-Trainingswurf", nl: "Onderwater trainingsworp" },
                    { en: "Sidearm/underhand delivery", es: "Entrega lateral/por debajo", de: "Seitarm-/Unterarmwurf", nl: "Zijarm/onderarmse overhandiging" },
                    { en: "Very slow changeup", es: "Cambio muy lento", de: "Sehr langsamer Changeup", nl: "Zeer langzame changeup" },
                    { en: "Pitch that goes underwater", es: "Lanzamiento que va bajo el agua", de: "Wurf der unter Wasser geht", nl: "Worp die onder water gaat" }
                ],
                correct: 1
            },
            {
                question: {
                    en: "What is 'The Duckworth-Lewis Method'?",
                    es: "¿Qué es 'El Método Duckworth-Lewis'?",
                    de: "Was ist die 'Duckworth-Lewis-Methode'?",
                    nl: "Wat is 'The Duckworth-Lewis Method'?"
                },
                options: [
                    { en: "Cricket rain calculation system", es: "Sistema de cálculo de lluvia en cricket", de: "Cricket Regen-Berechnungssystem", nl: "Cricket regen berekeningssysteem" },
                    { en: "Swimming stroke technique", es: "Técnica de estilo de natación", de: "Schwimmzug-Technik", nl: "Zwemslag techniek" },
                    { en: "Golf scoring method", es: "Método de puntuación de golf", de: "Golf-Bewertungsmethode", nl: "Golf scoring methode" },
                    { en: "Tennis tie-break system", es: "Sistema de tie-break de tenis", de: "Tennis Tie-Break-System", nl: "Tennis tie-break systeem" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "In basketball, what is a 'posterized' dunk?",
                    es: "En baloncesto, ¿qué es una clavada 'posterized'?",
                    de: "Was ist ein 'posterized' Dunk im Basketball?",
                    nl: "In basketbal, wat is een 'posterized' dunk?"
                },
                options: [
                    { en: "Dunk shown on posters", es: "Clavada mostrada en pósters", de: "Dunk auf Postern gezeigt", nl: "Dunk getoond op posters" },
                    { en: "Spectacular dunk over defender", es: "Clavada espectacular sobre el defensor", de: "Spektakulärer Dunk über Verteidiger", nl: "Spectaculaire dunk over verdediger" },
                    { en: "Missing an easy dunk", es: "Fallar una clavada fácil", de: "Einfachen Dunk verfehlen", nl: "Een makkelijke dunk missen" },
                    { en: "Dunk from behind the line", es: "Clavada desde detrás de la línea", de: "Dunk von hinter der Linie", nl: "Dunk vanaf achter de lijn" }
                ],
                correct: 1
            },
            {
                question: {
                    en: "What is 'sandbagging' in competitive sports?",
                    es: "¿Qué es 'sandbagging' en deportes competitivos?",
                    de: "Was ist 'Sandbagging' im Wettkampfsport?",
                    nl: "Wat is 'sandbagging' in competitieve sporten?"
                },
                options: [
                    { en: "Training on sand surfaces", es: "Entrenar en superficies de arena", de: "Training auf Sandoberflächen", nl: "Trainen op zandoppervlakken" },
                    { en: "Deliberately underperforming to get easier competition", es: "Deliberadamente rendir por debajo para obtener competencia más fácil", de: "Absichtlich schlechter spielen um einfachere Konkurrenz zu bekommen", nl: "Opzettelijk onderpresteren om gemakkelijkere competitie te krijgen" },
                    { en: "Using sand as training equipment", es: "Usar arena como equipo de entrenamiento", de: "Sand als Trainingsgerät verwenden", nl: "Zand gebruiken als trainingsequipment" },
                    { en: "Beach sports practice", es: "Práctica de deportes de playa", de: "Strandsport-Praxis", nl: "Strand sport praktijk" }
                ],
                correct: 1
            },
            {
                question: {
                    en: "In motor racing, what is a 'chicane'?",
                    es: "En carreras de motor, ¿qué es una 'chicane'?",
                    de: "Was ist eine 'Schikane' im Motorsport?",
                    nl: "In motorsport, wat is een 'chicane'?"
                },
                options: [
                    { en: "Starting position", es: "Posición de salida", de: "Startposition", nl: "Startpositie" },
                    { en: "Series of tight turns", es: "Serie de curvas cerradas", de: "Reihe enger Kurven", nl: "Reeks strakke bochten" },
                    { en: "Pit stop area", es: "Área de parada en boxes", de: "Boxenstopp-Bereich", nl: "Pitstop gebied" },
                    { en: "Victory lane", es: "Carril de la victoria", de: "Siegerbahn", nl: "Overwinningslaan" }
                ],
                correct: 1
            },
            {
                question: {
                    en: "What is a 'coffin corner' in American football?",
                    es: "¿Qué es un 'coffin corner' en fútbol americano?",
                    de: "Was ist eine 'Coffin Corner' im American Football?",
                    nl: "Wat is een 'coffin corner' in American football?"
                },
                options: [
                    { en: "End zone corner", es: "Esquina de la zona de anotación", de: "Endzone-Ecke", nl: "Endzone hoek" },
                    { en: "Punt aimed at corner near goal line", es: "Despeje dirigido a la esquina cerca de la línea de gol", de: "Punt auf Ecke nahe der Torlinie gezielt", nl: "Punt gericht op hoek bij doellijn" },
                    { en: "Dangerous tackle area", es: "Área de tackle peligroso", de: "Gefährlicher Tackle-Bereich", nl: "Gevaarlijk tackle gebied" },
                    { en: "Penalty box corner", es: "Esquina de la caja de penalti", de: "Strafraum-Ecke", nl: "Strafschop gebied hoek" }
                ],
                correct: 1
            },
            {
                question: {
                    en: "In tennis, what is an 'approach shot'?",
                    es: "En tenis, ¿qué es un 'approach shot'?",
                    de: "Was ist ein 'Approach Shot' im Tennis?",
                    nl: "In tennis, wat is een 'approach shot'?"
                },
                options: [
                    { en: "First serve of the match", es: "Primer saque del partido", de: "Erster Aufschlag des Spiels", nl: "Eerste serve van de wedstrijd" },
                    { en: "Shot hit while moving to the net", es: "Tiro golpeado mientras se mueve hacia la red", de: "Schlag beim Vorrücken zum Netz", nl: "Schot geslagen terwijl je naar het net beweegt" },
                    { en: "Defensive return", es: "Devolución defensiva", de: "Defensive Rückgabe", nl: "Defensieve terugslag" },
                    { en: "Final point of game", es: "Punto final del juego", de: "Letzter Punkt des Spiels", nl: "Laatste punt van het spel" }
                ],
                correct: 1
            },
            {
                question: {
                    en: "What is 'The Hickory' in golf?",
                    es: "¿Qué es 'The Hickory' en golf?",
                    de: "Was ist 'The Hickory' im Golf?",
                    nl: "Wat is 'The Hickory' in golf?"
                },
                options: [
                    { en: "A famous golf course", es: "Un campo de golf famoso", de: "Ein berühmter Golfplatz", nl: "Een beroemde golfbaan" },
                    { en: "Early wooden golf club shaft material", es: "Material temprano del eje de palo de golf de madera", de: "Frühes hölzernes Golfschläger-Schaftmaterial", nl: "Vroeg houten golfclub schacht materiaal" },
                    { en: "Type of golf ball", es: "Tipo de pelota de golf", de: "Art des Golfballs", nl: "Type golfbal" },
                    { en: "Golf tournament", es: "Torneo de golf", de: "Golfturnier", nl: "Golftoernooi" }
                ],
                correct: 1
            },
            {
                question: {
                    en: "In swimming, what is a 'dolphin kick'?",
                    es: "En natación, ¿qué es una 'patada de delfín'?",
                    de: "Was ist ein 'Delphin-Kick' beim Schwimmen?",
                    nl: "In zwemmen, wat is een 'dolphin kick'?"
                },
                options: [
                    { en: "Underwater undulating kick", es: "Patada ondulante bajo el agua", de: "Unterwasser wellenförmiger Kick", nl: "Onderwater golvende trap" },
                    { en: "Surface swimming technique", es: "Técnica de natación de superficie", de: "Oberflächenschwimmtechnik", nl: "Oppervlakte zwemtechniek" },
                    { en: "Diving entry method", es: "Método de entrada de buceo", de: "Sprung-Eingangsmethode", nl: "Duik ingang methode" },
                    { en: "Backstroke variation", es: "Variación de espalda", de: "Rückenschwimmen-Variation", nl: "Rugslag variatie" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "What is 'The Triple Crown' in horse racing?",
                    es: "¿Qué es 'La Triple Corona' en carreras de caballos?",
                    de: "Was ist die 'Triple Crown' im Pferderennen?",
                    nl: "Wat is 'The Triple Crown' in paardenrennen?"
                },
                options: [
                    { en: "Three consecutive wins", es: "Tres victorias consecutivas", de: "Drei aufeinanderfolgende Siege", nl: "Drie opeenvolgende overwinningen" },
                    { en: "Kentucky Derby, Preakness, Belmont Stakes", es: "Kentucky Derby, Preakness, Belmont Stakes", de: "Kentucky Derby, Preakness, Belmont Stakes", nl: "Kentucky Derby, Preakness, Belmont Stakes" },
                    { en: "Three different jockeys", es: "Tres jinetes diferentes", de: "Drei verschiedene Jockeys", nl: "Drie verschillende jockeys" },
                    { en: "Three year training program", es: "Programa de entrenamiento de tres años", de: "Dreijähriges Trainingsprogramm", nl: "Drie jaar trainingsprogramma" }
                ],
                correct: 1
            },
            {
                question: {
                    en: "In archery, what is 'nocking'?",
                    es: "En tiro con arco, ¿qué es 'nocking'?",
                    de: "Was ist 'Nocking' beim Bogenschießen?",
                    nl: "In boogschieten, wat is 'nocking'?"
                },
                options: [
                    { en: "Hitting the bullseye", es: "Dar en el centro", de: "Ins Schwarze treffen", nl: "De roos raken" },
                    { en: "Placing arrow on the string", es: "Colocar la flecha en la cuerda", de: "Pfeil auf die Sehne legen", nl: "Pijl op de pees plaatsen" },
                    { en: "Drawing the bow", es: "Tensar el arco", de: "Bogen spannen", nl: "Boog spannen" },
                    { en: "Aiming technique", es: "Técnica de apuntar", de: "Zieltechnik", nl: "Miktechniek" }
                ],
                correct: 1
            },
            {
                question: {
                    en: "What is a 'nutmeg' in soccer?",
                    es: "¿Qué es un 'nutmeg' en fútbol?",
                    de: "Was ist ein 'Nutmeg' im Fußball?",
                    nl: "Wat is een 'nutmeg' in voetbal?"
                },
                options: [
                    { en: "Header goal", es: "Gol de cabeza", de: "Kopfballtor", nl: "Kopbaldoelpunt" },
                    { en: "Playing ball through opponent's legs", es: "Jugar la pelota entre las piernas del oponente", de: "Ball durch die Beine des Gegners spielen", nl: "Bal door de benen van tegenstander spelen" },
                    { en: "Free kick technique", es: "Técnica de tiro libre", de: "Freistoßtechnik", nl: "Vrije trap techniek" },
                    { en: "Goalkeeper save", es: "Parada del portero", de: "Torwart-Parade", nl: "Keeper redding" }
                ],
                correct: 1
            },
            {
                question: {
                    en: "In cycling, what is 'drafting'?",
                    es: "En ciclismo, ¿qué es 'drafting'?",
                    de: "Was ist 'Windschatten fahren' beim Radfahren?",
                    nl: "In wielrennen, wat is 'drafting'?"
                },
                options: [
                    { en: "Planning the race route", es: "Planificar la ruta de la carrera", de: "Rennstrecke planen", nl: "Raceruute plannen" },
                    { en: "Riding behind another cyclist for wind protection", es: "Andar detrás de otro ciclista para protección del viento", de: "Hinter einem anderen Radfahrer fahren für Windschutz", nl: "Achter een andere wielrenner rijden voor windbescherming" },
                    { en: "Gear shifting technique", es: "Técnica de cambio de marchas", de: "Gangschalttechnik", nl: "Versnelling schakel techniek" },
                    { en: "Bike design process", es: "Proceso de diseño de bicicleta", de: "Fahrrad-Designprozess", nl: "Fiets ontwerp proces" }
                ],
                correct: 1
            },
            {
                question: {
                    en: "What is 'The Green Jacket' in golf?",
                    es: "¿Qué es 'La Chaqueta Verde' en golf?",
                    de: "Was ist das 'Green Jacket' im Golf?",
                    nl: "Wat is 'The Green Jacket' in golf?"
                },
                options: [
                    { en: "Environmental golf award", es: "Premio de golf ambiental", de: "Umwelt-Golf-Auszeichnung", nl: "Milieu golf award" },
                    { en: "Masters Tournament winner's prize", es: "Premio del ganador del Torneo Masters", de: "Preis für den Masters-Turniersieger", nl: "Masters Toernooi winnaar prijs" },
                    { en: "Caddie uniform", es: "Uniforme de caddie", de: "Caddie-Uniform", nl: "Caddie uniform" },
                    { en: "Golf course maintenance award", es: "Premio de mantenimiento de campo de golf", de: "Golfplatz-Wartungsauszeichnung", nl: "Golfbaan onderhoud award" }
                ],
                correct: 1
            },
            {
                question: {
                    en: "In basketball, what is a 'cherry pick'?",
                    es: "En baloncesto, ¿qué es un 'cherry pick'?",
                    de: "Was ist ein 'Cherry Pick' im Basketball?",
                    nl: "In basketbal, wat is een 'cherry pick'?"
                },
                options: [
                    { en: "Perfect free throw", es: "Tiro libre perfecto", de: "Perfekter Freiwurf", nl: "Perfecte vrije worp" },
                    { en: "Staying near opponent's basket for easy scores", es: "Quedarse cerca de la canasta del oponente para puntuaciones fáciles", de: "In der Nähe des gegnerischen Korbs bleiben für einfache Punkte", nl: "Bij tegenstanders mand blijven voor gemakkelijke scores" },
                    { en: "Stealing the ball cleanly", es: "Robar la pelota limpiamente", de: "Ball sauber stehlen", nl: "Bal netjes stelen" },
                    { en: "Best player selection", es: "Selección del mejor jugador", de: "Beste Spielerauswahl", nl: "Beste speler selectie" }
                ],
                correct: 1
            },
            {
                question: {
                    en: "What is 'The Beanball' in baseball?",
                    es: "¿Qué es 'The Beanball' en béisbol?",
                    de: "Was ist der 'Beanball' im Baseball?",
                    nl: "Wat is 'The Beanball' in honkbal?"
                },
                options: [
                    { en: "Home run ball", es: "Pelota de home run", de: "Home Run Ball", nl: "Home run bal" },
                    { en: "Intentional pitch at batter's head", es: "Lanzamiento intencional a la cabeza del bateador", de: "Absichtlicher Wurf zum Kopf des Schlagmanns", nl: "Opzettelijke worp naar het hoofd van de slagman" },
                    { en: "Slow curveball", es: "Curva lenta", de: "Langsamer Curveball", nl: "Langzame curveball" },
                    { en: "Perfect strike", es: "Strike perfecto", de: "Perfekter Strike", nl: "Perfecte strike" }
                ],
                correct: 1
            },
            {
                question: {
                    en: "In ice hockey, what is 'icing the puck'?",
                    es: "En hockey sobre hielo, ¿qué es 'icing the puck'?",
                    de: "Was ist 'Icing the Puck' im Eishockey?",
                    nl: "In ijshockey, wat is 'icing the puck'?"
                },
                options: [
                    { en: "Cooling the puck", es: "Enfriar el puck", de: "Puck kühlen", nl: "Puck koelen" },
                    { en: "Shooting puck from defensive zone past goal line", es: "Disparar el puck desde la zona defensiva más allá de la línea de gol", de: "Puck aus der Defensivzone über die Torlinie schießen", nl: "Puck schieten vanuit verdedigingszone voorbij doellijn" },
                    { en: "Perfect shot technique", es: "Técnica de tiro perfecta", de: "Perfekte Schusstechnik", nl: "Perfecte schot techniek" },
                    { en: "Celebrating a goal", es: "Celebrar un gol", de: "Ein Tor feiern", nl: "Een doelpunt vieren" }
                ],
                correct: 1
            },
            {
                question: {
                    en: "What is 'The Albatross' in golf?",
                    es: "¿Qué es 'El Albatros' en golf?",
                    de: "Was ist der 'Albatros' im Golf?",
                    nl: "Wat is 'The Albatross' in golf?"
                },
                options: [
                    { en: "One under par", es: "Uno bajo par", de: "Eins unter Par", nl: "Een onder par" },
                    { en: "Two under par", es: "Dos bajo par", de: "Zwei unter Par", nl: "Twee onder par" },
                    { en: "Three under par", es: "Tres bajo par", de: "Drei unter Par", nl: "Drie onder par" },
                    { en: "Four under par", es: "Cuatro bajo par", de: "Vier unter Par", nl: "Vier onder par" }
                ],
                correct: 2
            },
            {
                question: {
                    en: "In wrestling, what is a 'suplex'?",
                    es: "En lucha libre, ¿qué es un 'suplex'?",
                    de: "Was ist ein 'Suplex' im Wrestling?",
                    nl: "In worstelen, wat is een 'suplex'?"
                },
                options: [
                    { en: "Submission hold", es: "Llave de sumisión", de: "Aufgabegriff", nl: "Submissie greep" },
                    { en: "Throwing technique", es: "Técnica de lanzamiento", de: "Wurftechnik", nl: "Worp techniek" },
                    { en: "Pinning combination", es: "Combinación de inmovilización", de: "Pin-Kombination", nl: "Pin combinatie" },
                    { en: "Escape move", es: "Movimiento de escape", de: "Fluchtbewegung", nl: "Ontsnapping beweging" }
                ],
                correct: 1
            },
            {
                question: {
                    en: "What is 'The Pocket' in American football?",
                    es: "¿Qué es 'The Pocket' en fútbol americano?",
                    de: "Was ist 'The Pocket' im American Football?",
                    nl: "Wat is 'The Pocket' in American football?"
                },
                options: [
                    { en: "Equipment storage area", es: "Área de almacenamiento de equipo", de: "Ausrüstungs-Lagerbereich", nl: "Uitrusting opslaggebied" },
                    { en: "Protected area for quarterback", es: "Área protegida para el quarterback", de: "Geschützter Bereich für den Quarterback", nl: "Beschermd gebied voor quarterback" },
                    { en: "End zone corner", es: "Esquina de la zona de anotación", de: "Endzone-Ecke", nl: "Endzone hoek" },
                    { en: "Sideline area", es: "Área de la línea lateral", de: "Seitenlinie-Bereich", nl: "Zijlijn gebied" }
                ],
                correct: 1
            },
            {
                question: {
                    en: "In track and field, what is a 'false start'?",
                    es: "En atletismo, ¿qué es una 'salida falsa'?",
                    de: "Was ist ein 'Fehlstart' in der Leichtathletik?",
                    nl: "In atletiek, wat is een 'valse start'?"
                },
                options: [
                    { en: "Starting before the gun", es: "Empezar antes del disparo", de: "Vor dem Startschuss beginnen", nl: "Starten voor het schot" },
                    { en: "Wrong lane assignment", es: "Asignación de carril incorrecta", de: "Falsche Bahnzuteilung", nl: "Verkeerde baan toewijzing" },
                    { en: "Equipment failure", es: "Falla del equipo", de: "Ausrüstungsausfall", nl: "Uitrusting falen" },
                    { en: "Weather delay", es: "Retraso por clima", de: "Wetterverzögerung", nl: "Weer vertraging" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "What is 'The Sweet Spot' in tennis?",
                    es: "¿Qué es 'The Sweet Spot' en tenis?",
                    de: "Was ist der 'Sweet Spot' im Tennis?",
                    nl: "Wat is 'The Sweet Spot' in tennis?"
                },
                options: [
                    { en: "Center of the court", es: "Centro de la cancha", de: "Mitte des Platzes", nl: "Midden van de baan" },
                    { en: "Optimal hitting area on racquet", es: "Área de golpe óptima en la raqueta", de: "Optimaler Schlagbereich am Schläger", nl: "Optimaal slaggebied op racket" },
                    { en: "Net cord area", es: "Área del cordón de la red", de: "Netzkanten-Bereich", nl: "Netkoord gebied" },
                    { en: "Service box", es: "Caja de servicio", de: "Aufschlagfeld", nl: "Service box" }
                ],
                correct: 1
            },
            {
                question: {
                    en: "In skiing, what is 'carving'?",
                    es: "En esquí, ¿qué es 'carving'?",
                    de: "Was ist 'Carving' beim Skifahren?",
                    nl: "In skiën, wat is 'carving'?"
                },
                options: [
                    { en: "Ski equipment maintenance", es: "Mantenimiento del equipo de esquí", de: "Skiausrüstungs-Wartung", nl: "Ski uitrusting onderhoud" },
                    { en: "Making clean turns using ski edges", es: "Hacer giros limpios usando los cantos del esquí", de: "Saubere Kurven mit Skikanten fahren", nl: "Schone bochten maken met ski randen" },
                    { en: "Jumping technique", es: "Técnica de salto", de: "Sprungtechnik", nl: "Spring techniek" },
                    { en: "Slope grooming", es: "Preparación de pista", de: "Pistenpflege", nl: "Piste preparatie" }
                ],
                correct: 1
            },
            {
                question: {
                    en: "What is 'The Hail Mary' in American football?",
                    es: "¿Qué es 'The Hail Mary' en fútbol americano?",
                    de: "Was ist 'The Hail Mary' im American Football?",
                    nl: "Wat is 'The Hail Mary' in American football?"
                },
                options: [
                    { en: "Pre-game prayer", es: "Oración antes del juego", de: "Gebet vor dem Spiel", nl: "Gebed voor de wedstrijd" },
                    { en: "Long desperation pass", es: "Pase largo de desesperación", de: "Langer Verzweiflungspass", nl: "Lange wanhoop pass" },
                    { en: "Victory celebration", es: "Celebración de victoria", de: "Siegesfeier", nl: "Overwinningsviering" },
                    { en: "Special teams play", es: "Jugada de equipos especiales", de: "Special Teams Spielzug", nl: "Special teams spel" }
                ],
                correct: 1
            },
            {
                question: {
                    en: "In boxing, what is 'clinching'?",
                    es: "En boxeo, ¿qué es 'clinching'?",
                    de: "Was ist 'Clinching' im Boxen?",
                    nl: "In boksen, wat is 'clinching'?"
                },
                options: [
                    { en: "Winning the championship", es: "Ganar el campeonato", de: "Meisterschaft gewinnen", nl: "Kampioenschap winnen" },
                    { en: "Grappling to prevent opponent's punches", es: "Agarrar para prevenir los golpes del oponente", de: "Klammern um Schläge des Gegners zu verhindern", nl: "Vastgrijpen om slagen van tegenstander te voorkomen" },
                    { en: "Perfect knockout punch", es: "Golpe de nocaut perfecto", de: "Perfekter Knockout-Schlag", nl: "Perfecte knockout slag" },
                    { en: "Training technique", es: "Técnica de entrenamiento", de: "Trainingstechnik", nl: "Trainingstechniek" }
                ],
                correct: 1
            },
            {
                question: {
                    en: "What is 'The Immaculate Reception'?",
                    es: "¿Qué es 'The Immaculate Reception'?",
                    de: "Was ist 'The Immaculate Reception'?",
                    nl: "Wat is 'The Immaculate Reception'?"
                },
                options: [
                    { en: "Perfect baseball catch", es: "Atrapada perfecta de béisbol", de: "Perfekter Baseball-Fang", nl: "Perfecte honkbal vangst" },
                    { en: "Famous controversial NFL catch by Franco Harris", es: "Famosa atrapada controvertida de la NFL por Franco Harris", de: "Berühmter kontroverser NFL-Fang von Franco Harris", nl: "Beroemde controversiële NFL vangst door Franco Harris" },
                    { en: "Tennis receiving technique", es: "Técnica de recepción de tenis", de: "Tennis-Empfangstechnik", nl: "Tennis ontvangst techniek" },
                    { en: "Basketball interception", es: "Intercepción de baloncesto", de: "Basketball-Abfangen", nl: "Basketbal onderschepping" }
                ],
                correct: 1
            },
            {
                question: {
                    en: "In golf, what is 'the dance floor'?",
                    es: "En golf, ¿qué es 'the dance floor'?",
                    de: "Was ist 'the dance floor' im Golf?",
                    nl: "In golf, wat is 'the dance floor'?"
                },
                options: [
                    { en: "Clubhouse celebration area", es: "Área de celebración del club", de: "Clubhaus-Feierbereich", nl: "Clubhuis vierings gebied" },
                    { en: "The putting green", es: "El putting green", de: "Das Putting Green", nl: "De putting green" },
                    { en: "Tee box", es: "Tee de salida", de: "Abschlag", nl: "Tee box" },
                    { en: "Sand trap", es: "Trampa de arena", de: "Sandbunker", nl: "Zandvalkuil" }
                ],
                correct: 1
            },
            {
                question: {
                    en: "What is 'The Mendoza Line' in baseball?",
                    es: "¿Qué es 'The Mendoza Line' en béisbol?",
                    de: "Was ist 'The Mendoza Line' im Baseball?",
                    nl: "Wat is 'The Mendoza Line' in honkbal?"
                },
                options: [
                    { en: "Home run boundary", es: "Límite de home run", de: "Home Run Grenze", nl: "Home run grens" },
                    { en: ".200 batting average benchmark", es: "Punto de referencia de promedio de bateo .200", de: ".200 Schlagdurchschnitt-Benchmark", nl: ".200 slaggemiddelde benchmark" },
                    { en: "Foul ball territory", es: "Territorio de pelota foul", de: "Foul Ball Territorium", nl: "Fout bal gebied" },
                    { en: "Pitcher's mound distance", es: "Distancia del montículo del lanzador", de: "Pitcher's Mound Entfernung", nl: "Pitcher's mound afstand" }
                ],
                correct: 1
            },
            {
                question: {
                    en: "In basketball, what is 'the paint'?",
                    es: "En baloncesto, ¿qué es 'the paint'?",
                    de: "Was ist 'the paint' im Basketball?",
                    nl: "In basketbal, wat is 'the paint'?"
                },
                options: [
                    { en: "Three-point line", es: "Línea de tres puntos", de: "Drei-Punkte-Linie", nl: "Drie-punten lijn" },
                    { en: "Free throw lane area", es: "Área del carril de tiro libre", de: "Freiwurf-Gassen-Bereich", nl: "Vrije worp baan gebied" },
                    { en: "Court decoration", es: "Decoración de la cancha", de: "Platzdekoration", nl: "Baan decoratie" },
                    { en: "Sideline boundary", es: "Límite de línea lateral", de: "Seitenlinie-Grenze", nl: "Zijlijn grens" }
                ],
                correct: 1,
                explanation: {
                    en: "In basketball, 'the paint' refers to the free throw lane area, which is often painted a different color from the rest of the court.",
                    es: "En baloncesto, 'the paint' se refiere al área del carril de tiro libre, que a menudo está pintada de un color diferente al resto de la cancha.",
                    de: "Im Basketball bezieht sich 'the paint' auf den Freiwurf-Gassen-Bereich, der oft in einer anderen Farbe als der Rest des Platzes bemalt ist.",
                    nl: "In basketbal verwijst 'the paint' naar het vrije worp baan gebied, dat vaak in een andere kleur is geschilderd dan de rest van de baan."
                }
            },
            {
                question: {
                    en: "What sport is known as 'America's Pastime'?",
                    es: "¿Qué deporte se conoce como 'El Pasatiempo de América'?",
                    de: "Welcher Sport ist als 'America's Pastime' bekannt?",
                    nl: "Welke sport staat bekend als 'America's Pastime'?"
                },
                options: [
                    { en: "Baseball", es: "Béisbol", de: "Baseball", nl: "Honkbal" },
                    { en: "American football", es: "Fútbol americano", de: "American Football", nl: "American football" },
                    { en: "Basketball", es: "Baloncesto", de: "Basketball", nl: "Basketbal" },
                    { en: "Ice hockey", es: "Hockey sobre hielo", de: "Eishockey", nl: "IJshockey" }
                ],
                correct: 0,
                explanation: {
                    en: "Baseball is traditionally known as 'America's Pastime' due to its historical significance and popularity in American culture throughout the 19th and 20th centuries.",
                    es: "El béisbol es tradicionalmente conocido como 'El Pasatiempo de América' debido a su significado histórico y popularidad en la cultura americana a lo largo de los siglos XIX y XX.",
                    de: "Baseball ist traditionell als 'America's Pastime' bekannt aufgrund seiner historischen Bedeutung und Popularität in der amerikanischen Kultur im 19. und 20. Jahrhundert.",
                    nl: "Honkbal staat traditioneel bekend als 'America's Pastime' vanwege zijn historische betekenis en populariteit in de Amerikaanse cultuur gedurende de 19e en 20e eeuw."
                }
            },
            {
                question: {
                    en: "In which sport would you perform a slam dunk?",
                    es: "¿En qué deporte realizarías un slam dunk?",
                    de: "In welchem Sport würdest du einen Slam Dunk machen?",
                    nl: "In welke sport zou je een slam dunk uitvoeren?"
                },
                options: [
                    { en: "Basketball", es: "Baloncesto", de: "Basketball", nl: "Basketbal" },
                    { en: "Volleyball", es: "Voleibol", de: "Volleyball", nl: "Volleybal" },
                    { en: "Tennis", es: "Tenis", de: "Tennis", nl: "Tennis" },
                    { en: "Handball", es: "Balonmano", de: "Handball", nl: "Handbal" }
                ],
                correct: 0,
                explanation: {
                    en: "A slam dunk is a basketball move where a player jumps and forces the ball down through the hoop with one or both hands, creating an impressive and powerful scoring play.",
                    es: "Un slam dunk es un movimiento de baloncesto donde un jugador salta y fuerza la pelota hacia abajo a través del aro con una o ambas manos, creando una jugada de anotación impresionante y poderosa.",
                    de: "Ein Slam Dunk ist ein Basketball-Move, bei dem ein Spieler springt und den Ball mit einer oder beiden Händen durch den Korb drückt, was ein beeindruckendes und kraftvolles Scoring-Spiel erzeugt.",
                    nl: "Een slam dunk is een basketbalbeweging waarbij een speler springt en de bal met een of beide handen door de mand duwt, wat een indrukwekkend en krachtig scoringsspel creëert."
                }
            },
            {
                question: {
                    en: "What is the maximum score possible in ten-pin bowling?",
                    es: "¿Cuál es la puntuación máxima posible en bowling de diez pinos?",
                    de: "Was ist die maximal mögliche Punktzahl beim Zehn-Pin-Bowling?",
                    nl: "Wat is de maximale score mogelijk in tien-pin bowling?"
                },
                options: [
                    { en: "300", es: "300", de: "300", nl: "300" },
                    { en: "250", es: "250", de: "250", nl: "250" },
                    { en: "280", es: "280", de: "280", nl: "280" },
                    { en: "320", es: "320", de: "320", nl: "320" }
                ],
                correct: 0,
                explanation: {
                    en: "The perfect game in ten-pin bowling is 300 points, achieved by bowling 12 consecutive strikes - one in each of the 10 frames, plus two bonus strikes in the 10th frame.",
                    es: "El juego perfecto en bowling de diez pinos es de 300 puntos, logrado al conseguir 12 strikes consecutivos - uno en cada uno de los 10 frames, más dos strikes de bonificación en el décimo frame.",
                    de: "Das perfekte Spiel beim Zehn-Pin-Bowling sind 300 Punkte, erreicht durch 12 aufeinanderfolgende Strikes - einen in jedem der 10 Frames, plus zwei Bonus-Strikes im 10. Frame.",
                    nl: "Het perfecte spel in tien-pin bowling is 300 punten, behaald door 12 opeenvolgende strikes te bowlen - een in elk van de 10 frames, plus twee bonus strikes in het 10e frame."
                }
            },
            {
                question: {
                    en: "Which sport features positions called 'slip', 'gully', and 'silly point'?",
                    es: "¿Qué deporte presenta posiciones llamadas 'slip', 'gully', y 'silly point'?",
                    de: "Welcher Sport hat Positionen namens 'Slip', 'Gully' und 'Silly Point'?",
                    nl: "Welke sport heeft posities genaamd 'slip', 'gully', en 'silly point'?"
                },
                options: [
                    { en: "Cricket", es: "Cricket", de: "Cricket", nl: "Cricket" },
                    { en: "Rugby", es: "Rugby", de: "Rugby", nl: "Rugby" },
                    { en: "Field hockey", es: "Hockey sobre césped", de: "Feldhockey", nl: "Veldhockey" },
                    { en: "Lacrosse", es: "Lacrosse", de: "Lacrosse", nl: "Lacrosse" }
                ],
                correct: 0,
                explanation: {
                    en: "Cricket features fielding positions with unique names like 'slip' (behind the wicket-keeper), 'gully' (between slip and point), and 'silly point' (very close to the batsman on the off side).",
                    es: "El cricket presenta posiciones de campo con nombres únicos como 'slip' (detrás del wicket-keeper), 'gully' (entre slip y point), y 'silly point' (muy cerca del bateador en el lado off).",
                    de: "Cricket hat Feldpositionen mit einzigartigen Namen wie 'Slip' (hinter dem Wicket-Keeper), 'Gully' (zwischen Slip und Point) und 'Silly Point' (sehr nah am Batsman auf der Off-Seite).",
                    nl: "Cricket heeft veldposities met unieke namen zoals 'slip' (achter de wicket-keeper), 'gully' (tussen slip en point), en 'silly point' (heel dicht bij de batsman aan de off side)."
                }
            },
            {
                question: {
                    en: "What does 'LBW' stand for in cricket?",
                    es: "¿Qué significa 'LBW' en cricket?",
                    de: "Wofür steht 'LBW' im Cricket?",
                    nl: "Waar staat 'LBW' voor in cricket?"
                },
                options: [
                    { en: "Leg Before Wicket", es: "Leg Before Wicket", de: "Leg Before Wicket", nl: "Leg Before Wicket" },
                    { en: "Left Batting Wicket", es: "Left Batting Wicket", de: "Left Batting Wicket", nl: "Left Batting Wicket" },
                    { en: "Long Ball Winner", es: "Long Ball Winner", de: "Long Ball Winner", nl: "Long Ball Winner" },
                    { en: "Low Bowling Wide", es: "Low Bowling Wide", de: "Low Bowling Wide", nl: "Low Bowling Wide" }
                ],
                correct: 0,
                explanation: {
                    en: "LBW stands for 'Leg Before Wicket' - a method of dismissal in cricket where the ball hits the batsman's leg/pad in line with the stumps and would have hit the wicket.",
                    es: "LBW significa 'Leg Before Wicket' - un método de eliminación en cricket donde la pelota golpea la pierna/protector del bateador en línea con los stumps y habría golpeado el wicket.",
                    de: "LBW steht für 'Leg Before Wicket' - eine Methode der Ausscheidung im Cricket, bei der der Ball das Bein/Pad des Batsman in Linie mit den Stumps trifft und das Wicket getroffen hätte.",
                    nl: "LBW staat voor 'Leg Before Wicket' - een methode van uitschakeling in cricket waarbij de bal het been/beschermer van de batsman raakt in lijn met de stumps en het wicket zou hebben geraakt."
                }
            },
            {
                question: {
                    en: "In American football, how many points is a safety worth?",
                    es: "En fútbol americano, ¿cuántos puntos vale un safety?",
                    de: "Im American Football, wie viele Punkte ist ein Safety wert?",
                    nl: "In American football, hoeveel punten is een safety waard?"
                },
                options: [
                    { en: "2 points", es: "2 puntos", de: "2 Punkte", nl: "2 punten" },
                    { en: "1 point", es: "1 punto", de: "1 Punkt", nl: "1 punt" },
                    { en: "3 points", es: "3 puntos", de: "3 Punkte", nl: "3 punten" },
                    { en: "6 points", es: "6 puntos", de: "6 Punkte", nl: "6 punten" }
                ],
                correct: 0,
                explanation: {
                    en: "A safety in American football is worth 2 points and occurs when the offense is tackled, commits a foul, or goes out of bounds in their own end zone.",
                    es: "Un safety en fútbol americano vale 2 puntos y ocurre cuando la ofensiva es tacleada, comete una falta, o sale fuera de límites en su propia zona de anotación.",
                    de: "Ein Safety im American Football ist 2 Punkte wert und tritt auf, wenn die Offense getackelt wird, ein Foul begeht oder in ihrer eigenen Endzone ins Aus geht.",
                    nl: "Een safety in American football is 2 punten waard en vindt plaats wanneer de aanval wordt getackeld, een overtreding begaat, of buiten de lijnen gaat in hun eigen eindzone."
                }
            },
            {
                question: {
                    en: "Which tennis Grand Slam tournament is played on clay courts?",
                    es: "¿Qué torneo de Grand Slam de tenis se juega en canchas de arcilla?",
                    de: "Welches Tennis-Grand-Slam-Turnier wird auf Sandplätzen gespielt?",
                    nl: "Welk tennis Grand Slam toernooi wordt gespeeld op gravel banen?"
                },
                options: [
                    { en: "French Open", es: "Roland Garros", de: "French Open", nl: "Roland Garros" },
                    { en: "Wimbledon", es: "Wimbledon", de: "Wimbledon", nl: "Wimbledon" },
                    { en: "US Open", es: "US Open", de: "US Open", nl: "US Open" },
                    { en: "Australian Open", es: "Australian Open", de: "Australian Open", nl: "Australian Open" }
                ],
                correct: 0,
                explanation: {
                    en: "The French Open (Roland Garros) is the only Grand Slam tournament played on clay courts, which creates a slower playing surface and unique challenges for players.",
                    es: "El Roland Garros (French Open) es el único torneo de Grand Slam jugado en canchas de arcilla, lo que crea una superficie de juego más lenta y desafíos únicos para los jugadores.",
                    de: "Die French Open (Roland Garros) sind das einzige Grand-Slam-Turnier auf Sandplätzen, was eine langsamere Spieloberfläche und einzigartige Herausforderungen für die Spieler schafft.",
                    nl: "De French Open (Roland Garros) is het enige Grand Slam toernooi gespeeld op gravel banen, wat een langzamer speeloppervlak en unieke uitdagingen voor spelers creëert."
                }
            }
        ]
    };

    if (typeof window.addLevel === 'function') {
        window.addLevel('warm-up/sports', level10);
    }
})();