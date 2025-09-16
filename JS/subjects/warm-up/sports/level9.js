(function() {
    const level9 = {
        name: {
            en: "Professional Sports Leagues",
            es: "Ligas Deportivas Profesionales",
            de: "Professionelle Sportligen",
            nl: "Professionele Sportcompetities"
        },
        questions: [
            {
                question: {
                    en: "How many teams are in the NFL?",
                    es: "¿Cuántos equipos hay en la NFL?",
                    de: "Wie viele Teams gibt es in der NFL?",
                    nl: "Hoeveel teams zitten er in de NFL?"
                },
                options: [
                    { en: "30", es: "30", de: "30", nl: "30" },
                    { en: "31", es: "31", de: "31", nl: "31" },
                    { en: "32", es: "32", de: "32", nl: "32" },
                    { en: "34", es: "34", de: "34", nl: "34" }
                ],
                correct: 2,
                explanation: {
                    en: "The NFL has 32 teams divided into two conferences (AFC and NFC) with 16 teams each, further organized into four divisions of four teams per conference.",
                    es: "La NFL tiene 32 equipos divididos en dos conferencias (AFC y NFC) con 16 equipos cada una, organizados además en cuatro divisiones de cuatro equipos por conferencia.",
                    de: "Die NFL hat 32 Teams, die in zwei Conferences (AFC und NFC) mit jeweils 16 Teams aufgeteilt sind, weiter organisiert in vier Divisionen mit vier Teams pro Conference.",
                    nl: "De NFL heeft 32 teams verdeeld over twee conferences (AFC en NFC) met elk 16 teams, verder georganiseerd in vier divisies van vier teams per conference."
                }
            },
            {
                question: {
                    en: "Which NBA team has won the most championships?",
                    es: "¿Qué equipo de la NBA ha ganado más campeonatos?",
                    de: "Welches NBA-Team hat die meisten Meisterschaften gewonnen?",
                    nl: "Welk NBA team heeft de meeste kampioenschappen gewonnen?"
                },
                options: [
                    { en: "Lakers", es: "Lakers", de: "Lakers", nl: "Lakers" },
                    { en: "Celtics", es: "Celtics", de: "Celtics", nl: "Celtics" },
                    { en: "Bulls", es: "Bulls", de: "Bulls", nl: "Bulls" },
                    { en: "Warriors", es: "Warriors", de: "Warriors", nl: "Warriors" }
                ],
                correct: 1,
                explanation: {
                    en: "The Boston Celtics have won 17 NBA championships, tied with the Lakers for the most in league history, with their titles spanning from 1957 to 2008.",
                    es: "Los Boston Celtics han ganado 17 campeonatos de la NBA, empatados con los Lakers por la mayor cantidad en la historia de la liga, con sus títulos abarcando desde 1957 hasta 2008.",
                    de: "Die Boston Celtics haben 17 NBA-Meisterschaften gewonnen, gleichauf mit den Lakers für die meisten in der Liga-Geschichte, mit ihren Titeln von 1957 bis 2008.",
                    nl: "De Boston Celtics hebben 17 NBA kampioenschappen gewonnen, gelijk met de Lakers voor de meeste in de competitie geschiedenis, met hun titels van 1957 tot 2008."
                }
            },
            {
                question: {
                    en: "What does MLS stand for?",
                    es: "¿Qué significa MLS?",
                    de: "Wofür steht MLS?",
                    nl: "Waar staat MLS voor?"
                },
                options: [
                    { en: "Major League Soccer", es: "Major League Soccer", de: "Major League Soccer", nl: "Major League Soccer" },
                    { en: "Major League Sports", es: "Major League Sports", de: "Major League Sports", nl: "Major League Sports" },
                    { en: "Multi League System", es: "Multi League System", de: "Multi League System", nl: "Multi League System" },
                    { en: "Metropolitan League Soccer", es: "Metropolitan League Soccer", de: "Metropolitan League Soccer", nl: "Metropolitan League Soccer" }
                ],
                correct: 0,
                explanation: {
                    en: "MLS stands for Major League Soccer, the top professional soccer league in the United States and Canada, established in 1993 and beginning play in 1996.",
                    es: "MLS significa Major League Soccer, la liga profesional de fútbol más importante en Estados Unidos y Canadá, establecida en 1993 y comenzando a jugar en 1996.",
                    de: "MLS steht für Major League Soccer, die oberste professionelle Fußballliga in den Vereinigten Staaten und Kanada, gegründet 1993 und Spielbeginn 1996.",
                    nl: "MLS staat voor Major League Soccer, de hoogste professionele voetbalcompetitie in de Verenigde Staten en Canada, opgericht in 1993 en begonnen met spelen in 1996."
                }
            },
            {
                question: {
                    en: "Which MLB team is known as the 'Bronx Bombers'?",
                    es: "¿Qué equipo de la MLB es conocido como los 'Bombarderos del Bronx'?",
                    de: "Welches MLB-Team ist als 'Bronx Bombers' bekannt?",
                    nl: "Welk MLB team staat bekend als de 'Bronx Bombers'?"
                },
                options: [
                    { en: "Boston Red Sox", es: "Boston Red Sox", de: "Boston Red Sox", nl: "Boston Red Sox" },
                    { en: "New York Yankees", es: "New York Yankees", de: "New York Yankees", nl: "New York Yankees" },
                    { en: "New York Mets", es: "New York Mets", de: "New York Mets", nl: "New York Mets" },
                    { en: "Philadelphia Phillies", es: "Philadelphia Phillies", de: "Philadelphia Phillies", nl: "Philadelphia Phillies" }
                ],
                correct: 1
            },
            {
                question: {
                    en: "How many teams make the NFL playoffs?",
                    es: "¿Cuántos equipos llegan a los playoffs de la NFL?",
                    de: "Wie viele Teams erreichen die NFL-Playoffs?",
                    nl: "Hoeveel teams halen de NFL playoffs?"
                },
                options: [
                    { en: "12", es: "12", de: "12", nl: "12" },
                    { en: "14", es: "14", de: "14", nl: "14" },
                    { en: "16", es: "16", de: "16", nl: "16" },
                    { en: "18", es: "18", de: "18", nl: "18" }
                ],
                correct: 1
            },
            {
                question: {
                    en: "Which English football club has won the most Premier League titles?",
                    es: "¿Qué club de fútbol inglés ha ganado más títulos de la Premier League?",
                    de: "Welcher englische Fußballverein hat die meisten Premier League Titel gewonnen?",
                    nl: "Welke Engelse voetbalclub heeft de meeste Premier League titels gewonnen?"
                },
                options: [
                    { en: "Arsenal", es: "Arsenal", de: "Arsenal", nl: "Arsenal" },
                    { en: "Chelsea", es: "Chelsea", de: "Chelsea", nl: "Chelsea" },
                    { en: "Liverpool", es: "Liverpool", de: "Liverpool", nl: "Liverpool" },
                    { en: "Manchester United", es: "Manchester United", de: "Manchester United", nl: "Manchester United" }
                ],
                correct: 3
            },
            {
                question: {
                    en: "What is the maximum salary cap in the NBA for 2023-24?",
                    es: "¿Cuál es el tope salarial máximo en la NBA para 2023-24?",
                    de: "Was ist die maximale Gehaltsobergrenze in der NBA für 2023-24?",
                    nl: "Wat is de maximale salary cap in de NBA voor 2023-24?"
                },
                options: [
                    { en: "$134 million", es: "$134 millones", de: "$134 Millionen", nl: "$134 miljoen" },
                    { en: "$136 million", es: "$136 millones", de: "$136 Millionen", nl: "$136 miljoen" },
                    { en: "$142 million", es: "$142 millones", de: "$142 Millionen", nl: "$142 miljoen" },
                    { en: "$149 million", es: "$149 millones", de: "$149 Millionen", nl: "$149 miljoen" }
                ],
                correct: 2
            },
            {
                question: {
                    en: "Which NHL team has won the most Stanley Cups?",
                    es: "¿Qué equipo de la NHL ha ganado más Copas Stanley?",
                    de: "Welches NHL-Team hat die meisten Stanley Cups gewonnen?",
                    nl: "Welk NHL team heeft de meeste Stanley Cups gewonnen?"
                },
                options: [
                    { en: "Boston Bruins", es: "Boston Bruins", de: "Boston Bruins", nl: "Boston Bruins" },
                    { en: "Detroit Red Wings", es: "Detroit Red Wings", de: "Detroit Red Wings", nl: "Detroit Red Wings" },
                    { en: "Toronto Maple Leafs", es: "Toronto Maple Leafs", de: "Toronto Maple Leafs", nl: "Toronto Maple Leafs" },
                    { en: "Montreal Canadiens", es: "Montreal Canadiens", de: "Montreal Canadiens", nl: "Montreal Canadiens" }
                ],
                correct: 3
            },
            {
                question: {
                    en: "What is the name of the MLS championship game?",
                    es: "¿Cuál es el nombre del juego de campeonato de la MLS?",
                    de: "Wie heißt das MLS-Meisterschaftsspiel?",
                    nl: "Hoe heet de MLS kampioenschapswedstrijd?"
                },
                options: [
                    { en: "MLS Cup", es: "Copa MLS", de: "MLS Cup", nl: "MLS Cup" },
                    { en: "MLS Championship", es: "Campeonato MLS", de: "MLS-Meisterschaft", nl: "MLS Kampioenschap" },
                    { en: "MLS Final", es: "Final MLS", de: "MLS Final", nl: "MLS Finale" },
                    { en: "MLS Trophy", es: "Trofeo MLS", de: "MLS Trophäe", nl: "MLS Trofee" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "How many regular season games does each NBA team play?",
                    es: "¿Cuántos juegos de temporada regular juega cada equipo de la NBA?",
                    de: "Wie viele Spiele der regulären Saison spielt jedes NBA-Team?",
                    nl: "Hoeveel reguliere seizoen wedstrijden speelt elk NBA team?"
                },
                options: [
                    { en: "78", es: "78", de: "78", nl: "78" },
                    { en: "80", es: "80", de: "80", nl: "80" },
                    { en: "82", es: "82", de: "82", nl: "82" },
                    { en: "84", es: "84", de: "84", nl: "84" }
                ],
                correct: 2
            },
            {
                question: {
                    en: "Which La Liga team has won the most championships?",
                    es: "¿Qué equipo de La Liga ha ganado más campeonatos?",
                    de: "Welches La Liga Team hat die meisten Meisterschaften gewonnen?",
                    nl: "Welk La Liga team heeft de meeste kampioenschappen gewonnen?"
                },
                options: [
                    { en: "Barcelona", es: "Barcelona", de: "Barcelona", nl: "Barcelona" },
                    { en: "Real Madrid", es: "Real Madrid", de: "Real Madrid", nl: "Real Madrid" },
                    { en: "Atletico Madrid", es: "Atlético Madrid", de: "Atletico Madrid", nl: "Atletico Madrid" },
                    { en: "Athletic Bilbao", es: "Athletic Bilbao", de: "Athletic Bilbao", nl: "Athletic Bilbao" }
                ],
                correct: 1
            },
            {
                question: {
                    en: "What is the luxury tax threshold in MLB?",
                    es: "¿Cuál es el umbral del impuesto de lujo en la MLB?",
                    de: "Was ist die Luxussteuer-Grenze in der MLB?",
                    nl: "Wat is de luxury tax drempel in MLB?"
                },
                options: [
                    { en: "$210 million", es: "$210 millones", de: "$210 Millionen", nl: "$210 miljoen" },
                    { en: "$230 million", es: "$230 millones", de: "$230 Millionen", nl: "$230 miljoen" },
                    { en: "$233 million", es: "$233 millones", de: "$233 Millionen", nl: "$233 miljoen" },
                    { en: "$250 million", es: "$250 millones", de: "$250 Millionen", nl: "$250 miljoen" }
                ],
                correct: 2
            },
            {
                question: {
                    en: "Which Serie A team is known as 'The Old Lady'?",
                    es: "¿Qué equipo de la Serie A es conocido como 'La Vieja Señora'?",
                    de: "Welches Serie A Team ist als 'The Old Lady' bekannt?",
                    nl: "Welk Serie A team staat bekend als 'The Old Lady'?"
                },
                options: [
                    { en: "AC Milan", es: "AC Milan", de: "AC Milan", nl: "AC Milan" },
                    { en: "Inter Milan", es: "Inter Milan", de: "Inter Milan", nl: "Inter Milan" },
                    { en: "Juventus", es: "Juventus", de: "Juventus", nl: "Juventus" },
                    { en: "AS Roma", es: "AS Roma", de: "AS Roma", nl: "AS Roma" }
                ],
                correct: 2
            },
            {
                question: {
                    en: "How many teams are in the NHL?",
                    es: "¿Cuántos equipos hay en la NHL?",
                    de: "Wie viele Teams gibt es in der NHL?",
                    nl: "Hoeveel teams zitten er in de NHL?"
                },
                options: [
                    { en: "28", es: "28", de: "28", nl: "28" },
                    { en: "30", es: "30", de: "30", nl: "30" },
                    { en: "32", es: "32", de: "32", nl: "32" },
                    { en: "34", es: "34", de: "34", nl: "34" }
                ],
                correct: 2
            },
            {
                question: {
                    en: "Which Bundesliga team has won the most titles?",
                    es: "¿Qué equipo de la Bundesliga ha ganado más títulos?",
                    de: "Welches Bundesliga-Team hat die meisten Titel gewonnen?",
                    nl: "Welk Bundesliga team heeft de meeste titels gewonnen?"
                },
                options: [
                    { en: "Borussia Dortmund", es: "Borussia Dortmund", de: "Borussia Dortmund", nl: "Borussia Dortmund" },
                    { en: "Bayern Munich", es: "Bayern Múnich", de: "Bayern München", nl: "Bayern Munich" },
                    { en: "Schalke 04", es: "Schalke 04", de: "Schalke 04", nl: "Schalke 04" },
                    { en: "Hamburg SV", es: "Hamburg SV", de: "Hamburg SV", nl: "Hamburg SV" }
                ],
                correct: 1
            },
            {
                question: {
                    en: "What is the minimum age to enter the NBA draft?",
                    es: "¿Cuál es la edad mínima para entrar al draft de la NBA?",
                    de: "Was ist das Mindestalter für den NBA Draft?",
                    nl: "Wat is de minimumleeftijd voor de NBA draft?"
                },
                options: [
                    { en: "18", es: "18", de: "18", nl: "18" },
                    { en: "19", es: "19", de: "19", nl: "19" },
                    { en: "20", es: "20", de: "20", nl: "20" },
                    { en: "21", es: "21", de: "21", nl: "21" }
                ],
                correct: 1
            },
            {
                question: {
                    en: "How many wild card teams make the MLB playoffs from each league?",
                    es: "¿Cuántos equipos de comodín llegan a los playoffs de la MLB de cada liga?",
                    de: "Wie viele Wild Card Teams erreichen die MLB Playoffs aus jeder Liga?",
                    nl: "Hoeveel wild card teams halen de MLB playoffs uit elke league?"
                },
                options: [
                    { en: "2", es: "2", de: "2", nl: "2" },
                    { en: "3", es: "3", de: "3", nl: "3" },
                    { en: "4", es: "4", de: "4", nl: "4" },
                    { en: "5", es: "5", de: "5", nl: "5" }
                ],
                correct: 1
            },
            {
                question: {
                    en: "Which Premier League team is known as 'The Gunners'?",
                    es: "¿Qué equipo de la Premier League es conocido como 'Los Gunners'?",
                    de: "Welches Premier League Team ist als 'The Gunners' bekannt?",
                    nl: "Welk Premier League team staat bekend als 'The Gunners'?"
                },
                options: [
                    { en: "Arsenal", es: "Arsenal", de: "Arsenal", nl: "Arsenal" },
                    { en: "Chelsea", es: "Chelsea", de: "Chelsea", nl: "Chelsea" },
                    { en: "Tottenham", es: "Tottenham", de: "Tottenham", nl: "Tottenham" },
                    { en: "West Ham", es: "West Ham", de: "West Ham", nl: "West Ham" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "What is the revenue sharing percentage in the NFL?",
                    es: "¿Cuál es el porcentaje de reparto de ingresos en la NFL?",
                    de: "Wie hoch ist der Umsatzbeteiligungsprozentsatz in der NFL?",
                    nl: "Wat is het revenue sharing percentage in de NFL?"
                },
                options: [
                    { en: "About 70%", es: "Aproximadamente 70%", de: "Etwa 70%", nl: "Ongeveer 70%" },
                    { en: "About 80%", es: "Aproximadamente 80%", de: "Etwa 80%", nl: "Ongeveer 80%" },
                    { en: "About 90%", es: "Aproximadamente 90%", de: "Etwa 90%", nl: "Ongeveer 90%" },
                    { en: "100%", es: "100%", de: "100%", nl: "100%" }
                ],
                correct: 2
            },
            {
                question: {
                    en: "Which team has won the most FIFA World Cups?",
                    es: "¿Qué equipo ha ganado más Copas del Mundo de la FIFA?",
                    de: "Welches Team hat die meisten FIFA-Weltmeisterschaften gewonnen?",
                    nl: "Welk team heeft de meeste FIFA Wereldbekers gewonnen?"
                },
                options: [
                    { en: "Germany", es: "Alemania", de: "Deutschland", nl: "Duitsland" },
                    { en: "Argentina", es: "Argentina", de: "Argentinien", nl: "Argentinië" },
                    { en: "Italy", es: "Italia", de: "Italien", nl: "Italië" },
                    { en: "Brazil", es: "Brasil", de: "Brasilien", nl: "Brazilië" }
                ],
                correct: 3
            },
            {
                question: {
                    en: "How many games are in an MLB regular season?",
                    es: "¿Cuántos juegos hay en una temporada regular de la MLB?",
                    de: "Wie viele Spiele gibt es in einer MLB-Regulärsaison?",
                    nl: "Hoeveel wedstrijden zitten er in een MLB regulier seizoen?"
                },
                options: [
                    { en: "154", es: "154", de: "154", nl: "154" },
                    { en: "160", es: "160", de: "160", nl: "160" },
                    { en: "162", es: "162", de: "162", nl: "162" },
                    { en: "164", es: "164", de: "164", nl: "164" }
                ],
                correct: 2
            },
            {
                question: {
                    en: "Which Ligue 1 team is known as 'Les Parisiens'?",
                    es: "¿Qué equipo de la Ligue 1 es conocido como 'Les Parisiens'?",
                    de: "Welches Ligue 1 Team ist als 'Les Parisiens' bekannt?",
                    nl: "Welk Ligue 1 team staat bekend als 'Les Parisiens'?"
                },
                options: [
                    { en: "Olympique Marseille", es: "Olympique Marseille", de: "Olympique Marseille", nl: "Olympique Marseille" },
                    { en: "Paris Saint-Germain", es: "Paris Saint-Germain", de: "Paris Saint-Germain", nl: "Paris Saint-Germain" },
                    { en: "AS Monaco", es: "AS Mónaco", de: "AS Monaco", nl: "AS Monaco" },
                    { en: "Olympique Lyon", es: "Olympique Lyon", de: "Olympique Lyon", nl: "Olympique Lyon" }
                ],
                correct: 1
            },
            {
                question: {
                    en: "What is the draft lottery system used for in the NBA?",
                    es: "¿Para qué se usa el sistema de lotería de draft en la NBA?",
                    de: "Wofür wird das Draft-Lotteriesystem in der NBA verwendet?",
                    nl: "Waarvoor wordt het draft lottery systeem gebruikt in de NBA?"
                },
                options: [
                    { en: "Determining playoff seeding", es: "Determinar la clasificación de playoffs", de: "Playoff-Setzung bestimmen", nl: "Playoff seeding bepalen" },
                    { en: "Determining draft order", es: "Determinar el orden del draft", de: "Draft-Reihenfolge bestimmen", nl: "Draft volgorde bepalen" },
                    { en: "Determining salary cap", es: "Determinar el tope salarial", de: "Gehaltsobergrenze bestimmen", nl: "Salary cap bepalen" },
                    { en: "Determining schedule", es: "Determinar el calendario", de: "Spielplan bestimmen", nl: "Schema bepalen" }
                ],
                correct: 1
            },
            {
                question: {
                    en: "Which NHL team is known as 'The Original Six'?",
                    es: "¿Qué equipos de la NHL son conocidos como 'Los Seis Originales'?",
                    de: "Welche NHL-Teams sind als 'The Original Six' bekannt?",
                    nl: "Welke NHL teams staan bekend als 'The Original Six'?"
                },
                options: [
                    { en: "Teams from 1942-1967", es: "Equipos de 1942-1967", de: "Teams von 1942-1967", nl: "Teams van 1942-1967" },
                    { en: "First six NHL teams ever", es: "Los primeros seis equipos de la NHL", de: "Die ersten sechs NHL-Teams überhaupt", nl: "Eerste zes NHL teams ooit" },
                    { en: "Six Canadian teams", es: "Seis equipos canadienses", de: "Sechs kanadische Teams", nl: "Zes Canadese teams" },
                    { en: "Six American teams", es: "Seis equipos estadounidenses", de: "Sechs amerikanische Teams", nl: "Zes Amerikaanse teams" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "How many championships has the Golden State Warriors won since 2000?",
                    es: "¿Cuántos campeonatos han ganado los Golden State Warriors desde 2000?",
                    de: "Wie viele Meisterschaften haben die Golden State Warriors seit 2000 gewonnen?",
                    nl: "Hoeveel kampioenschappen hebben de Golden State Warriors gewonnen sinds 2000?"
                },
                options: [
                    { en: "3", es: "3", de: "3", nl: "3" },
                    { en: "4", es: "4", de: "4", nl: "4" },
                    { en: "5", es: "5", de: "5", nl: "5" },
                    { en: "6", es: "6", de: "6", nl: "6" }
                ],
                correct: 1
            },
            {
                question: {
                    en: "What is the relegation system in European football?",
                    es: "¿Qué es el sistema de relegación en el fútbol europeo?",
                    de: "Was ist das Abstiegssystem im europäischen Fußball?",
                    nl: "Wat is het degradatiesysteem in Europees voetbal?"
                },
                options: [
                    { en: "Bottom teams move to lower division", es: "Los equipos de abajo bajan a división inferior", de: "Schlechteste Teams steigen in niedrigere Division ab", nl: "Onderste teams gaan naar lagere divisie" },
                    { en: "Worst teams are eliminated", es: "Los peores equipos son eliminados", de: "Schlechteste Teams werden eliminiert", nl: "Slechtste teams worden geëlimineerd" },
                    { en: "Teams swap divisions", es: "Los equipos intercambian divisiones", de: "Teams wechseln Divisionen", nl: "Teams wisselen van divisie" },
                    { en: "Random team selection", es: "Selección aleatoria de equipos", de: "Zufällige Teamauswahl", nl: "Willekeurige teamselectie" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "Which NFL team has never won a Super Bowl?",
                    es: "¿Qué equipo de la NFL nunca ha ganado un Super Bowl?",
                    de: "Welches NFL-Team hat noch nie einen Super Bowl gewonnen?",
                    nl: "Welk NFL team heeft nog nooit een Super Bowl gewonnen?"
                },
                options: [
                    { en: "Buffalo Bills", es: "Buffalo Bills", de: "Buffalo Bills", nl: "Buffalo Bills" },
                    { en: "Green Bay Packers", es: "Green Bay Packers", de: "Green Bay Packers", nl: "Green Bay Packers" },
                    { en: "Pittsburgh Steelers", es: "Pittsburgh Steelers", de: "Pittsburgh Steelers", nl: "Pittsburgh Steelers" },
                    { en: "San Francisco 49ers", es: "San Francisco 49ers", de: "San Francisco 49ers", nl: "San Francisco 49ers" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "What is the UEFA Champions League format?",
                    es: "¿Cuál es el formato de la UEFA Champions League?",
                    de: "Was ist das Format der UEFA Champions League?",
                    nl: "Wat is het UEFA Champions League format?"
                },
                options: [
                    { en: "Group stage then knockouts", es: "Fase de grupos luego eliminatorias", de: "Gruppenphase dann K.o.-System", nl: "Groepsfase dan uitschakeling" },
                    { en: "Single elimination only", es: "Solo eliminación directa", de: "Nur K.o.-System", nl: "Alleen uitschakeling" },
                    { en: "Round robin only", es: "Solo todos contra todos", de: "Nur Rundturnier", nl: "Alleen round robin" },
                    { en: "Best of seven series", es: "Serie al mejor de siete", de: "Best-of-Seven-Serie", nl: "Best of seven serie" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "How many teams are promoted from the Championship to the Premier League?",
                    es: "¿Cuántos equipos ascienden del Championship a la Premier League?",
                    de: "Wie viele Teams steigen von der Championship in die Premier League auf?",
                    nl: "Hoeveel teams promoveren van de Championship naar de Premier League?"
                },
                options: [
                    { en: "2", es: "2", de: "2", nl: "2" },
                    { en: "3", es: "3", de: "3", nl: "3" },
                    { en: "4", es: "4", de: "4", nl: "4" },
                    { en: "5", es: "5", de: "5", nl: "5" }
                ],
                correct: 1
            },
            {
                question: {
                    en: "What is the maximum roster size in the NBA?",
                    es: "¿Cuál es el tamaño máximo de roster en la NBA?",
                    de: "Was ist die maximale Kadergröße in der NBA?",
                    nl: "Wat is de maximale roster grootte in de NBA?"
                },
                options: [
                    { en: "12", es: "12", de: "12", nl: "12" },
                    { en: "13", es: "13", de: "13", nl: "13" },
                    { en: "15", es: "15", de: "15", nl: "15" },
                    { en: "17", es: "17", de: "17", nl: "17" }
                ],
                correct: 2
            },
            {
                question: {
                    en: "Which MLB team has the most World Series titles?",
                    es: "¿Qué equipo de la MLB tiene más títulos de Serie Mundial?",
                    de: "Welches MLB-Team hat die meisten World Series-Titel?",
                    nl: "Welk MLB team heeft de meeste World Series titels?"
                },
                options: [
                    { en: "Boston Red Sox", es: "Boston Red Sox", de: "Boston Red Sox", nl: "Boston Red Sox" },
                    { en: "New York Yankees", es: "New York Yankees", de: "New York Yankees", nl: "New York Yankees" },
                    { en: "St. Louis Cardinals", es: "St. Louis Cardinals", de: "St. Louis Cardinals", nl: "St. Louis Cardinals" },
                    { en: "Oakland Athletics", es: "Oakland Athletics", de: "Oakland Athletics", nl: "Oakland Athletics" }
                ],
                correct: 1
            },
            {
                question: {
                    en: "What is the Conference Championship game in the NFL?",
                    es: "¿Qué es el juego de Campeonato de Conferencia en la NFL?",
                    de: "Was ist das Conference Championship Game in der NFL?",
                    nl: "Wat is de Conference Championship wedstrijd in de NFL?"
                },
                options: [
                    { en: "First round of playoffs", es: "Primera ronda de playoffs", de: "Erste Playoff-Runde", nl: "Eerste ronde van playoffs" },
                    { en: "Second round of playoffs", es: "Segunda ronda de playoffs", de: "Zweite Playoff-Runde", nl: "Tweede ronde van playoffs" },
                    { en: "Semi-final before Super Bowl", es: "Semifinal antes del Super Bowl", de: "Halbfinale vor dem Super Bowl", nl: "Halve finale voor Super Bowl" },
                    { en: "Regular season finale", es: "Final de temporada regular", de: "Regulärsaison-Finale", nl: "Reguliere seizoen finale" }
                ],
                correct: 2
            },
            {
                question: {
                    en: "Which team won the first FIFA World Cup?",
                    es: "¿Qué equipo ganó la primera Copa del Mundo de la FIFA?",
                    de: "Welches Team gewann die erste FIFA-Weltmeisterschaft?",
                    nl: "Welk team won de eerste FIFA Wereldbeker?"
                },
                options: [
                    { en: "Brazil", es: "Brasil", de: "Brasilien", nl: "Brazilië" },
                    { en: "Argentina", es: "Argentina", de: "Argentinien", nl: "Argentinië" },
                    { en: "Uruguay", es: "Uruguay", de: "Uruguay", nl: "Uruguay" },
                    { en: "Italy", es: "Italia", de: "Italien", nl: "Italië" }
                ],
                correct: 2
            },
            {
                question: {
                    en: "How many minutes of overtime are played in NHL playoffs?",
                    es: "¿Cuántos minutos de tiempo extra se juegan en los playoffs de la NHL?",
                    de: "Wie viele Minuten Overtime werden in den NHL-Playoffs gespielt?",
                    nl: "Hoeveel minuten overtime worden er gespeeld in NHL playoffs?"
                },
                options: [
                    { en: "5 minutes", es: "5 minutos", de: "5 Minuten", nl: "5 minuten" },
                    { en: "10 minutes", es: "10 minutos", de: "10 Minuten", nl: "10 minuten" },
                    { en: "20 minutes", es: "20 minutos", de: "20 Minuten", nl: "20 minuten" },
                    { en: "Sudden death unlimited", es: "Muerte súbita ilimitada", de: "Sudden Death unbegrenzt", nl: "Sudden death onbeperkt" }
                ],
                correct: 3
            },
            {
                question: {
                    en: "Which La Liga team is known as 'Los Blancos'?",
                    es: "¿Qué equipo de La Liga es conocido como 'Los Blancos'?",
                    de: "Welches La Liga Team ist als 'Los Blancos' bekannt?",
                    nl: "Welk La Liga team staat bekend als 'Los Blancos'?"
                },
                options: [
                    { en: "Barcelona", es: "Barcelona", de: "Barcelona", nl: "Barcelona" },
                    { en: "Real Madrid", es: "Real Madrid", de: "Real Madrid", nl: "Real Madrid" },
                    { en: "Valencia", es: "Valencia", de: "Valencia", nl: "Valencia" },
                    { en: "Sevilla", es: "Sevilla", de: "Sevilla", nl: "Sevilla" }
                ],
                correct: 1
            },
            {
                question: {
                    en: "What is the trade deadline in the NBA?",
                    es: "¿Cuál es la fecha límite de intercambios en la NBA?",
                    de: "Was ist die Trade Deadline in der NBA?",
                    nl: "Wat is de trade deadline in de NBA?"
                },
                options: [
                    { en: "January 15", es: "15 de enero", de: "15. Januar", nl: "15 januari" },
                    { en: "February 8", es: "8 de febrero", de: "8. Februar", nl: "8 februari" },
                    { en: "March 1", es: "1 de marzo", de: "1. März", nl: "1 maart" },
                    { en: "March 15", es: "15 de marzo", de: "15. März", nl: "15 maart" }
                ],
                correct: 1
            },
            {
                question: {
                    en: "How many teams qualify for the UEFA Champions League from England?",
                    es: "¿Cuántos equipos se clasifican para la UEFA Champions League desde Inglaterra?",
                    de: "Wie viele Teams qualifizieren sich aus England für die UEFA Champions League?",
                    nl: "Hoeveel teams kwalificeren zich vanuit Engeland voor de UEFA Champions League?"
                },
                options: [
                    { en: "2", es: "2", de: "2", nl: "2" },
                    { en: "3", es: "3", de: "3", nl: "3" },
                    { en: "4", es: "4", de: "4", nl: "4" },
                    { en: "5", es: "5", de: "5", nl: "5" }
                ],
                correct: 2
            },
            {
                question: {
                    en: "What is the minimum salary in the NFL?",
                    es: "¿Cuál es el salario mínimo en la NFL?",
                    de: "Was ist das Mindestgehalt in der NFL?",
                    nl: "Wat is het minimumsalaris in de NFL?"
                },
                options: [
                    { en: "$610,000", es: "$610,000", de: "$610.000", nl: "$610.000" },
                    { en: "$750,000", es: "$750,000", de: "$750.000", nl: "$750.000" },
                    { en: "$870,000", es: "$870,000", de: "$870.000", nl: "$870.000" },
                    { en: "$1,000,000", es: "$1,000,000", de: "$1.000.000", nl: "$1.000.000" }
                ],
                correct: 2
            },
            {
                question: {
                    en: "Which Premier League team is known as 'The Red Devils'?",
                    es: "¿Qué equipo de la Premier League es conocido como 'Los Diablos Rojos'?",
                    de: "Welches Premier League Team ist als 'The Red Devils' bekannt?",
                    nl: "Welk Premier League team staat bekend als 'The Red Devils'?"
                },
                options: [
                    { en: "Liverpool", es: "Liverpool", de: "Liverpool", nl: "Liverpool" },
                    { en: "Arsenal", es: "Arsenal", de: "Arsenal", nl: "Arsenal" },
                    { en: "Manchester United", es: "Manchester United", de: "Manchester United", nl: "Manchester United" },
                    { en: "Manchester City", es: "Manchester City", de: "Manchester City", nl: "Manchester City" }
                ],
                correct: 2
            },
            {
                question: {
                    en: "How many rounds are in the NBA draft?",
                    es: "¿Cuántas rondas hay en el draft de la NBA?",
                    de: "Wie viele Runden gibt es im NBA Draft?",
                    nl: "Hoeveel rondes zijn er in de NBA draft?"
                },
                options: [
                    { en: "1", es: "1", de: "1", nl: "1" },
                    { en: "2", es: "2", de: "2", nl: "2" },
                    { en: "3", es: "3", de: "3", nl: "3" },
                    { en: "4", es: "4", de: "4", nl: "4" }
                ],
                correct: 1
            },
            {
                question: {
                    en: "Which Serie A team has won the most championships?",
                    es: "¿Qué equipo de la Serie A ha ganado más campeonatos?",
                    de: "Welches Serie A Team hat die meisten Meisterschaften gewonnen?",
                    nl: "Welk Serie A team heeft de meeste kampioenschappen gewonnen?"
                },
                options: [
                    { en: "AC Milan", es: "AC Milan", de: "AC Milan", nl: "AC Milan" },
                    { en: "Inter Milan", es: "Inter Milan", de: "Inter Milan", nl: "Inter Milan" },
                    { en: "Juventus", es: "Juventus", de: "Juventus", nl: "Juventus" },
                    { en: "AS Roma", es: "AS Roma", de: "AS Roma", nl: "AS Roma" }
                ],
                correct: 2
            },
            {
                question: {
                    en: "What is the penalty for exceeding the luxury tax in the NBA?",
                    es: "¿Cuál es la penalidad por exceder el impuesto de lujo en la NBA?",
                    de: "Was ist die Strafe für das Überschreiten der Luxussteuer in der NBA?",
                    nl: "Wat is de straf voor het overschrijden van de luxury tax in de NBA?"
                },
                options: [
                    { en: "Dollar for dollar fine", es: "Multa dólar por dólar", de: "Dollar für Dollar Strafe", nl: "Dollar voor dollar boete" },
                    { en: "Escalating tax rates", es: "Tasas de impuestos escaladas", de: "Eskalierende Steuersätze", nl: "Oplopende belastingtarieven" },
                    { en: "Loss of draft picks", es: "Pérdida de picks de draft", de: "Verlust von Draft Picks", nl: "Verlies van draft picks" },
                    { en: "Player suspension", es: "Suspensión de jugador", de: "Spielersuspension", nl: "Speler schorsing" }
                ],
                correct: 1
            },
            {
                question: {
                    en: "How many wild card teams make the NHL playoffs?",
                    es: "¿Cuántos equipos de comodín llegan a los playoffs de la NHL?",
                    de: "Wie viele Wild Card Teams erreichen die NHL Playoffs?",
                    nl: "Hoeveel wild card teams halen de NHL playoffs?"
                },
                options: [
                    { en: "2", es: "2", de: "2", nl: "2" },
                    { en: "4", es: "4", de: "4", nl: "4" },
                    { en: "6", es: "6", de: "6", nl: "6" },
                    { en: "8", es: "8", de: "8", nl: "8" }
                ],
                correct: 1
            },
            {
                question: {
                    en: "Which Bundesliga team is known as 'Die Roten' (The Reds)?",
                    es: "¿Qué equipo de la Bundesliga es conocido como 'Die Roten' (Los Rojos)?",
                    de: "Welches Bundesliga-Team ist als 'Die Roten' bekannt?",
                    nl: "Welk Bundesliga team staat bekend als 'Die Roten' (De Roden)?"
                },
                options: [
                    { en: "Bayern Munich", es: "Bayern Múnich", de: "Bayern München", nl: "Bayern Munich" },
                    { en: "Borussia Dortmund", es: "Borussia Dortmund", de: "Borussia Dortmund", nl: "Borussia Dortmund" },
                    { en: "Bayer Leverkusen", es: "Bayer Leverkusen", de: "Bayer Leverkusen", nl: "Bayer Leverkusen" },
                    { en: "RB Leipzig", es: "RB Leipzig", de: "RB Leipzig", nl: "RB Leipzig" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "What is the maximum length of an MLB contract?",
                    es: "¿Cuál es la duración máxima de un contrato de la MLB?",
                    de: "Was ist die maximale Laufzeit eines MLB-Vertrags?",
                    nl: "Wat is de maximale lengte van een MLB contract?"
                },
                options: [
                    { en: "5 years", es: "5 años", de: "5 Jahre", nl: "5 jaar" },
                    { en: "7 years", es: "7 años", de: "7 Jahre", nl: "7 jaar" },
                    { en: "10 years", es: "10 años", de: "10 Jahre", nl: "10 jaar" },
                    { en: "No limit", es: "Sin límite", de: "Keine Begrenzung", nl: "Geen limiet" }
                ],
                correct: 3
            },
            {
                question: {
                    en: "Which team won the inaugural MLS Cup?",
                    es: "¿Qué equipo ganó la primera Copa MLS?",
                    de: "Welches Team gewann den ersten MLS Cup?",
                    nl: "Welk team won de eerste MLS Cup?"
                },
                options: [
                    { en: "LA Galaxy", es: "LA Galaxy", de: "LA Galaxy", nl: "LA Galaxy" },
                    { en: "DC United", es: "DC United", de: "DC United", nl: "DC United" },
                    { en: "New England Revolution", es: "New England Revolution", de: "New England Revolution", nl: "New England Revolution" },
                    { en: "Tampa Bay Mutiny", es: "Tampa Bay Mutiny", de: "Tampa Bay Mutiny", nl: "Tampa Bay Mutiny" }
                ],
                correct: 1
            },
            {
                question: {
                    en: "How many teams make the NBA play-in tournament?",
                    es: "¿Cuántos equipos participan en el torneo de play-in de la NBA?",
                    de: "Wie viele Teams nehmen am NBA Play-in Tournament teil?",
                    nl: "Hoeveel teams doen mee aan het NBA play-in toernooi?"
                },
                options: [
                    { en: "4", es: "4", de: "4", nl: "4" },
                    { en: "6", es: "6", de: "6", nl: "6" },
                    { en: "8", es: "8", de: "8", nl: "8" },
                    { en: "10", es: "10", de: "10", nl: "10" }
                ],
                correct: 2
            },
            {
                question: {
                    en: "Which European football league has no salary cap?",
                    es: "¿Qué liga europea de fútbol no tiene tope salarial?",
                    de: "Welche europäische Fußballliga hat keine Gehaltsobergrenze?",
                    nl: "Welke Europese voetbalcompetitie heeft geen salary cap?"
                },
                options: [
                    { en: "Premier League", es: "Premier League", de: "Premier League", nl: "Premier League" },
                    { en: "All major European leagues", es: "Todas las ligas europeas principales", de: "Alle großen europäischen Ligen", nl: "Alle grote Europese competities" },
                    { en: "Bundesliga only", es: "Solo Bundesliga", de: "Nur Bundesliga", nl: "Alleen Bundesliga" },
                    { en: "Serie A only", es: "Solo Serie A", de: "Nur Serie A", nl: "Alleen Serie A" }
                ],
                correct: 1
            },
            {
                question: {
                    en: "What sport is played at Wimbledon?",
                    es: "¿Qué deporte se juega en Wimbledon?",
                    de: "Welcher Sport wird in Wimbledon gespielt?",
                    nl: "Welke sport wordt gespeeld in Wimbledon?"
                },
                options: [
                    { en: "Tennis", es: "Tenis", de: "Tennis", nl: "Tennis" },
                    { en: "Golf", es: "Golf", de: "Golf", nl: "Golf" },
                    { en: "Cricket", es: "Cricket", de: "Cricket", nl: "Cricket" },
                    { en: "Rugby", es: "Rugby", de: "Rugby", nl: "Rugby" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "How many holes are there in a standard golf course?",
                    es: "¿Cuántos hoyos hay en un campo de golf estándar?",
                    de: "Wie viele Löcher gibt es auf einem Standard-Golfplatz?",
                    nl: "Hoeveel holes zijn er op een standaard golfbaan?"
                },
                options: [
                    { en: "18", es: "18", de: "18", nl: "18" },
                    { en: "16", es: "16", de: "16", nl: "16" },
                    { en: "20", es: "20", de: "20", nl: "20" },
                    { en: "9", es: "9", de: "9", nl: "9" }
                ],
                correct: 0
            }
        ]
    };

    if (typeof window.addLevel === 'function') {
        window.addLevel('warm-up/sports', level9);
    }
})();