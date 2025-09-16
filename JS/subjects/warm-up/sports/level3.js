(function() {
    const level3 = {
        name: {
            en: "Team Sports Rules and Gameplay",
            es: "Reglas y Jugabilidad de Deportes de Equipo",
            de: "Teamsport Regeln und Spielweise",
            nl: "Teamsporten Regels en Gameplay"
        },
        questions: [
            {
                question: {
                    en: "In soccer, how many substitutions are allowed per team during regular play?",
                    es: "En fútbol, ¿cuántas sustituciones se permiten por equipo durante el juego regular?",
                    de: "Im Fußball, wie viele Auswechslungen sind pro Team während des regulären Spiels erlaubt?",
                    nl: "In voetbal, hoeveel wissels zijn toegestaan per team tijdens regulier spel?"
                },
                options: [
                    { en: "3", es: "3", de: "3", nl: "3" },
                    { en: "5", es: "5", de: "5", nl: "5" },
                    { en: "7", es: "7", de: "7", nl: "7" },
                    { en: "Unlimited", es: "Ilimitadas", de: "Unbegrenzt", nl: "Onbeperkt" }
                ],
                correct: 1,
                explanation: {
                    en: "Modern soccer rules allow 5 substitutions per team during regular play, increased from 3 in recent years to help manage player workload and injuries.",
                    es: "Las reglas modernas del fútbol permiten 5 sustituciones por equipo durante el juego regular, aumentado de 3 en años recientes para ayudar a manejar la carga de trabajo y lesiones de los jugadores.",
                    de: "Moderne Fußballregeln erlauben 5 Auswechslungen pro Team während des regulären Spiels, erhöht von 3 in den letzten Jahren, um Spielerbelastung und Verletzungen zu handhaben.",
                    nl: "Moderne voetbalregels staan 5 wissels per team toe tijdens regulier spel, verhoogd van 3 in recente jaren om spelersbelasting en blessures te helpen beheren."
                }
            },
            {
                question: {
                    en: "In basketball, what is the shot clock duration in the NBA?",
                    es: "En baloncesto, ¿cuál es la duración del reloj de lanzamiento en la NBA?",
                    de: "Im Basketball, wie lang ist die Wurfuhr in der NBA?",
                    nl: "In basketbal, wat is de duur van de schotkklok in de NBA?"
                },
                options: [
                    { en: "20 seconds", es: "20 segundos", de: "20 Sekunden", nl: "20 seconden" },
                    { en: "24 seconds", es: "24 segundos", de: "24 Sekunden", nl: "24 seconden" },
                    { en: "30 seconds", es: "30 segundos", de: "30 Sekunden", nl: "30 seconden" },
                    { en: "35 seconds", es: "35 segundos", de: "35 Sekunden", nl: "35 seconden" }
                ],
                correct: 1,
                explanation: {
                    en: "The NBA shot clock is 24 seconds, giving teams a limited time to attempt a shot and keeping the game fast-paced and exciting.",
                    es: "El reloj de lanzamiento de la NBA es de 24 segundos, dando a los equipos un tiempo limitado para intentar un tiro y manteniendo el juego rápido y emocionante.",
                    de: "Die NBA-Wurfuhr beträgt 24 Sekunden und gibt den Teams eine begrenzte Zeit für einen Wurfversuch, um das Spiel schnell und aufregend zu halten.",
                    nl: "De NBA schotklock is 24 seconden, wat teams een beperkte tijd geeft om een schot te proberen en het spel snel en spannend houdt."
                }
            },
            {
                question: {
                    en: "In American football, how many downs does a team get to advance 10 yards?",
                    es: "En fútbol americano, ¿cuántos downs tiene un equipo para avanzar 10 yardas?",
                    de: "Im American Football, wie viele Versuche hat ein Team, um 10 Yards zu erreichen?",
                    nl: "In American football, hoeveel downs krijgt een team om 10 yards te overbruggen?"
                },
                options: [
                    { en: "3", es: "3", de: "3", nl: "3" },
                    { en: "4", es: "4", de: "4", nl: "4" },
                    { en: "5", es: "5", de: "5", nl: "5" },
                    { en: "6", es: "6", de: "6", nl: "6" }
                ],
                correct: 1,
                explanation: {
                    en: "Teams get 4 downs to advance 10 yards and earn a new set of downs. If they fail, possession goes to the opposing team.",
                    es: "Los equipos obtienen 4 downs para avanzar 10 yardas y ganar un nuevo conjunto de downs. Si fallan, la posesión va al equipo contrario.",
                    de: "Teams erhalten 4 Versuche, um 10 Yards zu erreichen und neue Versuche zu verdienen. Bei Misserfolg geht der Ballbesitz an das gegnerische Team.",
                    nl: "Teams krijgen 4 downs om 10 yards te overbruggen en een nieuwe set downs te verdienen. Als ze falen, gaat balbezit naar het tegenstanders team."
                }
            },
            {
                question: {
                    en: "In volleyball, what is the maximum number of hits a team can make before sending the ball over the net?",
                    es: "En voleibol, ¿cuál es el número máximo de toques que puede hacer un equipo antes de enviar la pelota por encima de la red?",
                    de: "Im Volleyball, wie oft darf ein Team maximal den Ball berühren, bevor er über das Netz gespielt wird?",
                    nl: "In volleybal, wat is het maximale aantal aanrakingen dat een team kan maken voordat de bal over het net gaat?"
                },
                options: [
                    { en: "2", es: "2", de: "2", nl: "2" },
                    { en: "3", es: "3", de: "3", nl: "3" },
                    { en: "4", es: "4", de: "4", nl: "4" },
                    { en: "5", es: "5", de: "5", nl: "5" }
                ],
                correct: 1,
                explanation: {
                    en: "Teams can hit the ball a maximum of 3 times before sending it over the net, typically: bump, set, and spike.",
                    es: "Los equipos pueden golpear la pelota un máximo de 3 veces antes de enviarla por encima de la red, típicamente: recepción, colocación y remate.",
                    de: "Teams können den Ball maximal 3 Mal berühren, bevor sie ihn über das Netz senden, typischerweise: Annahme, Zuspiel und Angriff.",
                    nl: "Teams kunnen de bal maximaal 3 keer raken voordat ze hem over het net sturen, meestal: pass, set en smash."
                }
            },
            {
                question: {
                    en: "In ice hockey, what is the penalty for fighting?",
                    es: "En hockey sobre hielo, ¿cuál es la penalidad por pelear?",
                    de: "Im Eishockey, was ist die Strafe für Kämpfe?",
                    nl: "In ijshockey, wat is de straf voor vechten?"
                },
                options: [
                    { en: "2 minutes", es: "2 minutos", de: "2 Minuten", nl: "2 minuten" },
                    { en: "5 minutes", es: "5 minutos", de: "5 Minuten", nl: "5 minuten" },
                    { en: "10 minutes", es: "10 minutos", de: "10 Minuten", nl: "10 minuten" },
                    { en: "Game ejection", es: "Expulsión del juego", de: "Spielausschluss", nl: "Wedstrijduitsluiting" }
                ],
                correct: 1,
                explanation: {
                    en: "Fighting in ice hockey results in a 5-minute major penalty for both players involved, with teams playing short-handed during the penalty.",
                    es: "Pelear en hockey sobre hielo resulta en una penalidad mayor de 5 minutos para ambos jugadores involucrados, con equipos jugando en inferioridad numérica durante la penalidad.",
                    de: "Kämpfe im Eishockey führen zu einer 5-Minuten-Hauptstrafe für beide beteiligten Spieler, wobei die Teams während der Strafe in Unterzahl spielen.",
                    nl: "Vechten in ijshockey resulteert in een 5-minuten hoofdstraf voor beide betrokken spelers, waarbij teams in ondertall spelen tijdens de straf."
                }
            },
            {
                question: {
                    en: "In rugby union, how many players are in a scrum?",
                    es: "En rugby union, ¿cuántos jugadores hay en un scrum?",
                    de: "Im Rugby Union, wie viele Spieler sind in einem Gedränge?",
                    nl: "In rugby union, hoeveel spelers zitten er in een scrum?"
                },
                options: [
                    { en: "6", es: "6", de: "6", nl: "6" },
                    { en: "7", es: "7", de: "7", nl: "7" },
                    { en: "8", es: "8", de: "8", nl: "8" },
                    { en: "9", es: "9", de: "9", nl: "9" }
                ],
                correct: 2,
                explanation: {
                    en: "A rugby scrum consists of 8 players from each team (16 total): 3 front row players, 2 second row players, and 3 back row players per team.",
                    es: "Un scrum de rugby consiste en 8 jugadores de cada equipo (16 total): 3 jugadores de primera línea, 2 jugadores de segunda línea, y 3 jugadores de tercera línea por equipo.",
                    de: "Ein Rugby-Gedränge besteht aus 8 Spielern von jedem Team (16 insgesamt): 3 Spieler der ersten Reihe, 2 Spieler der zweiten Reihe und 3 Spieler der dritten Reihe pro Team.",
                    nl: "Een rugby scrum bestaat uit 8 spelers van elk team (16 totaal): 3 voorste rij spelers, 2 tweede rij spelers, en 3 derde rij spelers per team."
                }
            },
            {
                question: {
                    en: "In baseball, what constitutes a walk?",
                    es: "En béisbol, ¿qué constituye una base por bolas?",
                    de: "Im Baseball, was ist ein Walk?",
                    nl: "In honkbal, wat is een walk?"
                },
                options: [
                    { en: "3 balls", es: "3 bolas", de: "3 Balls", nl: "3 balls" },
                    { en: "4 balls", es: "4 bolas", de: "4 Balls", nl: "4 balls" },
                    { en: "5 balls", es: "5 bolas", de: "5 Balls", nl: "5 balls" },
                    { en: "6 balls", es: "6 bolas", de: "6 Balls", nl: "6 balls" }
                ],
                correct: 1,
                explanation: {
                    en: "A walk occurs when a pitcher throws 4 balls (pitches outside the strike zone), allowing the batter to advance to first base safely.",
                    es: "Una base por bolas ocurre cuando un lanzador lanza 4 bolas (lanzamientos fuera de la zona de strike), permitiendo al bateador avanzar a primera base con seguridad.",
                    de: "Ein Walk tritt auf, wenn ein Pitcher 4 Balls (Würfe außerhalb der Strike Zone) wirft und dem Batter erlaubt, sicher zur ersten Base zu laufen.",
                    nl: "Een walk komt voor wanneer een pitcher 4 balls gooit (worpen buiten de strike zone), waardoor de batter veilig naar het eerste honk mag lopen."
                }
            },
            {
                question: {
                    en: "In cricket, how many runs are awarded for hitting the ball over the boundary without bouncing?",
                    es: "En cricket, ¿cuántas carreras se otorgan por golpear la pelota sobre el límite sin rebotar?",
                    de: "Im Cricket, wie viele Läufe werden vergeben, wenn der Ball über die Grenze geschlagen wird, ohne zu hüpfen?",
                    nl: "In cricket, hoeveel runs worden toegekend voor het slaan van de bal over de grens zonder stuiteren?"
                },
                options: [
                    { en: "4", es: "4", de: "4", nl: "4" },
                    { en: "5", es: "5", de: "5", nl: "5" },
                    { en: "6", es: "6", de: "6", nl: "6" },
                    { en: "8", es: "8", de: "8", nl: "8" }
                ],
                correct: 2,
                explanation: {
                    en: "In cricket, hitting the ball over the boundary without bouncing (on the full) awards 6 runs, the maximum possible from a single hit.",
                    es: "En cricket, golpear la pelota sobre el límite sin rebotar (de lleno) otorga 6 carreras, el máximo posible de un solo golpe.",
                    de: "Im Cricket wird das Schlagen des Balls über die Grenze ohne Aufspringen (direkt) mit 6 Läufen belohnt, dem Maximum aus einem einzigen Schlag.",
                    nl: "In cricket levert het slaan van de bal over de grens zonder stuiteren (direct) 6 runs op, het maximum mogelijk van één slag."
                }
            },
            {
                question: {
                    en: "In handball, how long can a goalkeeper hold the ball?",
                    es: "En balonmano, ¿cuánto tiempo puede retener el portero la pelota?",
                    de: "Im Handball, wie lange darf der Torwart den Ball halten?",
                    nl: "In handbal, hoe lang mag een keeper de bal vasthouden?"
                },
                options: [
                    { en: "2 seconds", es: "2 segundos", de: "2 Sekunden", nl: "2 seconden" },
                    { en: "3 seconds", es: "3 segundos", de: "3 Sekunden", nl: "3 seconden" },
                    { en: "5 seconds", es: "5 segundos", de: "5 Sekunden", nl: "5 seconden" },
                    { en: "10 seconds", es: "10 segundos", de: "10 Sekunden", nl: "10 seconden" }
                ],
                correct: 1,
                explanation: {
                    en: "A handball goalkeeper can hold the ball for a maximum of 3 seconds before they must pass, dribble, or shoot to keep the game flowing.",
                    es: "Un portero de balonmano puede retener la pelota por un máximo de 3 segundos antes de que deba pasar, driblear o tirar para mantener el juego fluyendo.",
                    de: "Ein Handballtorhüter kann den Ball maximal 3 Sekunden halten, bevor er passen, dribbeln oder werfen muss, um das Spiel am Laufen zu halten.",
                    nl: "Een handbal keeper mag de bal maximaal 3 seconden vasthouden voordat hij moet passen, dribbelen of schieten om het spel vlot te laten verlopen."
                }
            },
            {
                question: {
                    en: "In water polo, what happens when the shot clock expires?",
                    es: "En waterpolo, ¿qué pasa cuando expira el reloj de tiro?",
                    de: "Beim Wasserball, was passiert, wenn die Wurfuhr abläuft?",
                    nl: "In waterpolo, wat gebeurt er als de shotclock afloopt?"
                },
                options: [
                    { en: "Free throw for opponent", es: "Tiro libre para el oponente", de: "Freiwurf für den Gegner", nl: "Vrije worp voor tegenstander" },
                    { en: "Turnover to opponent", es: "Pérdida de balón al oponente", de: "Ballverlust an den Gegner", nl: "Bal gaat naar tegenstander" },
                    { en: "Restart from center", es: "Reinicio desde el centro", de: "Neustart von der Mitte", nl: "Herstart vanaf het midden" },
                    { en: "Technical foul", es: "Falta técnica", de: "Technisches Foul", nl: "Technische fout" }
                ],
                correct: 1,
                explanation: {
                    en: "When the water polo shot clock expires, possession turns over to the opposing team. Teams have 30 seconds to attempt a shot.",
                    es: "Cuando expira el reloj de tiro de waterpolo, la posesión pasa al equipo contrario. Los equipos tienen 30 segundos para intentar un tiro.",
                    de: "Wenn die Wasserball-Wurfuhr abläuft, geht der Ballbesitz an das gegnerische Team über. Teams haben 30 Sekunden für einen Wurfversuch.",
                    nl: "Wanneer de waterpolo schotklock afloopt, gaat balbezit over naar het tegenstander team. Teams hebben 30 seconden om een schot te proberen."
                }
            },
            {
                question: {
                    en: "In netball, which positions can shoot goals?",
                    es: "En netball, ¿qué posiciones pueden anotar goles?",
                    de: "Im Netball, welche Positionen können Tore schießen?",
                    nl: "In netbal, welke posities kunnen doelpunten scoren?"
                },
                options: [
                    { en: "Goal Shooter only", es: "Solo Goal Shooter", de: "Nur Goal Shooter", nl: "Alleen Goal Shooter" },
                    { en: "Goal Shooter and Goal Attack", es: "Goal Shooter y Goal Attack", de: "Goal Shooter und Goal Attack", nl: "Goal Shooter en Goal Attack" },
                    { en: "Any forward player", es: "Cualquier jugador de adelante", de: "Jeder Angriffsspieler", nl: "Elke aanvallende speler" },
                    { en: "All players", es: "Todos los jugadores", de: "Alle Spieler", nl: "Alle spelers" }
                ],
                correct: 1,
                explanation: {
                    en: "In netball, only the Goal Shooter (GS) and Goal Attack (GA) positions can shoot goals. They must be in the goal circle to score.",
                    es: "En netball, solo las posiciones Goal Shooter (GS) y Goal Attack (GA) pueden anotar goles. Deben estar en el círculo de gol para anotar.",
                    de: "Im Netball können nur die Positionen Goal Shooter (GS) und Goal Attack (GA) Tore schießen. Sie müssen im Torkreis sein, um zu punkten.",
                    nl: "In netbal kunnen alleen de Goal Shooter (GS) en Goal Attack (GA) posities doelpunten scoren. Ze moeten in de doelcirkel zijn om te scoren."
                }
            },
            {
                question: {
                    en: "In field hockey, what is the duration of each period?",
                    es: "En hockey sobre césped, ¿cuál es la duración de cada período?",
                    de: "Im Feldhockey, wie lang ist jede Spielzeit?",
                    nl: "In veldhockey, wat is de duur van elke periode?"
                },
                options: [
                    { en: "12 minutes", es: "12 minutos", de: "12 Minuten", nl: "12 minuten" },
                    { en: "15 minutes", es: "15 minutos", de: "15 Minuten", nl: "15 minuten" },
                    { en: "17.5 minutes", es: "17,5 minutos", de: "17,5 Minuten", nl: "17,5 minuten" },
                    { en: "20 minutes", es: "20 minutos", de: "20 Minuten", nl: "20 minuten" }
                ],
                correct: 1,
                explanation: {
                    en: "Field hockey consists of four 15-minute periods (quarters), making a total of 60 minutes of playing time.",
                    es: "El hockey sobre césped consiste en cuatro períodos de 15 minutos (cuartos), haciendo un total de 60 minutos de tiempo de juego.",
                    de: "Feldhockey besteht aus vier 15-Minuten-Perioden (Vierteln), was eine Gesamtspielzeit von 60 Minuten ergibt.",
                    nl: "Veldhockey bestaat uit vier periodes van 15 minuten (kwarten), voor een totaal van 60 minuten speeltijd."
                }
            },
            {
                question: {
                    en: "In lacrosse, how many players are on the field for each team in men's lacrosse?",
                    es: "En lacrosse, ¿cuántos jugadores hay en el campo por cada equipo en lacrosse masculino?",
                    de: "Im Lacrosse, wie viele Spieler sind für jedes Team im Herren-Lacrosse auf dem Feld?",
                    nl: "In lacrosse, hoeveel spelers zijn er op het veld voor elk team in heren lacrosse?"
                },
                options: [
                    { en: "8", es: "8", de: "8", nl: "8" },
                    { en: "9", es: "9", de: "9", nl: "9" },
                    { en: "10", es: "10", de: "10", nl: "10" },
                    { en: "11", es: "11", de: "11", nl: "11" }
                ],
                correct: 2,
                explanation: {
                    en: "Men's lacrosse teams have 10 players on the field: 1 goalie, 3 defenders, 3 midfielders, and 3 attackers.",
                    es: "Los equipos de lacrosse masculino tienen 10 jugadores en el campo: 1 portero, 3 defensores, 3 mediocampistas y 3 atacantes.",
                    de: "Herren-Lacrosse-Teams haben 10 Spieler auf dem Feld: 1 Torwart, 3 Verteidiger, 3 Mittelfeldspieler und 3 Angreifer.",
                    nl: "Heren lacrosse teams hebben 10 spelers op het veld: 1 doelman, 3 verdedigers, 3 middenvelders en 3 aanvallers."
                }
            },
            {
                question: {
                    en: "In Australian Rules Football, how many points is a goal worth?",
                    es: "En el fútbol australiano, ¿cuántos puntos vale un gol?",
                    de: "Im Australian Rules Football, wie viele Punkte ist ein Tor wert?",
                    nl: "In Australian Rules Football, hoeveel punten is een goal waard?"
                },
                options: [
                    { en: "4", es: "4", de: "4", nl: "4" },
                    { en: "5", es: "5", de: "5", nl: "5" },
                    { en: "6", es: "6", de: "6", nl: "6" },
                    { en: "7", es: "7", de: "7", nl: "7" }
                ],
                correct: 2,
                explanation: {
                    en: "In Australian Rules Football, a goal is worth 6 points. It's scored by kicking the ball between the two tall goal posts.",
                    es: "En el fútbol australiano, un gol vale 6 puntos. Se anota pateando la pelota entre los dos postes altos de gol.",
                    de: "Im Australian Rules Football ist ein Tor 6 Punkte wert. Es wird erzielt, indem der Ball zwischen die beiden hohen Torpfosten getreten wird.",
                    nl: "In Australian Rules Football is een goal 6 punten waard. Het wordt gescoord door de bal tussen de twee hoge doelpalen te trappen."
                }
            },
            {
                question: {
                    en: "In tennis doubles, what is the correct serving order?",
                    es: "En dobles de tenis, ¿cuál es el orden correcto de saque?",
                    de: "Im Tennis-Doppel, was ist die richtige Aufschlagreihenfolge?",
                    nl: "In tennis dubbelspel, wat is de juiste serveerorde?"
                },
                options: [
                    { en: "Same player serves entire set", es: "El mismo jugador saca todo el set", de: "Derselbe Spieler schlägt den ganzen Satz auf", nl: "Dezelfde speler serveert de hele set" },
                    { en: "Alternates between teams each game", es: "Alterna entre equipos cada juego", de: "Wechselt zwischen den Teams jedes Spiel", nl: "Wisselt tussen teams elk spel" },
                    { en: "Alternates between all players each point", es: "Alterna entre todos los jugadores cada punto", de: "Wechselt zwischen allen Spielern jeden Punkt", nl: "Wisselt tussen alle spelers elk punt" },
                    { en: "Players choose randomly", es: "Los jugadores eligen aleatoriamente", de: "Spieler wählen zufällig", nl: "Spelers kiezen willekeurig" }
                ],
                correct: 1,
                explanation: {
                    en: "In tennis doubles, teams alternate serving each game. The serving order rotates: Team A player 1, Team B player 1, Team A player 2, Team B player 2.",
                    es: "En dobles de tenis, los equipos alternan el saque cada juego. El orden de saque rota: Equipo A jugador 1, Equipo B jugador 1, Equipo A jugador 2, Equipo B jugador 2.",
                    de: "Im Tennis-Doppel wechseln die Teams den Aufschlag jedes Spiel. Die Aufschlagreihenfolge rotiert: Team A Spieler 1, Team B Spieler 1, Team A Spieler 2, Team B Spieler 2.",
                    nl: "In tennis dubbelspel wisselen teams de service elk spel. De serveerorde roteert: Team A speler 1, Team B speler 1, Team A speler 2, Team B speler 2."
                }
            },
            {
                question: {
                    en: "In soccer, what is the offside rule?",
                    es: "En fútbol, ¿cuál es la regla del fuera de juego?",
                    de: "Im Fußball, was ist die Abseitsregel?",
                    nl: "In voetbal, wat is de buitenspelregel?"
                },
                options: [
                    { en: "Player cannot be ahead of the ball", es: "El jugador no puede estar adelante del balón", de: "Spieler kann nicht vor dem Ball stehen", nl: "Speler mag niet voor de bal staan" },
                    { en: "Player cannot be in opponent's half", es: "El jugador no puede estar en la mitad del oponente", de: "Spieler darf nicht in der gegnerischen Hälfte sein", nl: "Speler mag niet in de helft van de tegenstander zijn" },
                    { en: "Player cannot be closer to goal than second-last opponent when ball is played by teammate", es: "El jugador no puede estar más cerca del gol que el penúltimo oponente cuando un compañero toca el balón", de: "Spieler darf nicht näher zum Tor sein als der zweitletzte Gegner, wenn ein Mitspieler den Ball spielt", nl: "Speler mag niet dichter bij het doel zijn dan de een-na-laatste tegenstander wanneer een teamgenoot de bal speelt" },
                    { en: "Player cannot touch ball with hands", es: "El jugador no puede tocar el balón con las manos", de: "Spieler darf den Ball nicht mit den Händen berühren", nl: "Speler mag de bal niet met handen aanraken" }
                ],
                correct: 2,
                explanation: {
                    en: "A player is offside if they are nearer to the opponent's goal line than both the ball and the second-to-last opponent when the ball is played by a teammate.",
                    es: "Un jugador está en fuera de juego si está más cerca de la línea de gol del oponente que tanto la pelota como el penúltimo oponente cuando un compañero juega la pelota.",
                    de: "Ein Spieler steht abseits, wenn er näher zur gegnerischen Torlinie steht als sowohl der Ball als auch der zweitletzte Gegner, wenn ein Mitspieler den Ball spielt.",
                    nl: "Een speler staat buitenspel als hij dichter bij de doellijn van de tegenstander staat dan zowel de bal als de een-na-laatste tegenstander wanneer een teamgenoot de bal speelt."
                }
            },
            {
                question: {
                    en: "In basketball, what is a technical foul?",
                    es: "En baloncesto, ¿qué es una falta técnica?",
                    de: "Im Basketball, was ist ein technisches Foul?",
                    nl: "In basketbal, wat is een technische fout?"
                },
                options: [
                    { en: "Illegal contact with opponent", es: "Contacto ilegal con el oponente", de: "Illegaler Kontakt mit dem Gegner", nl: "Illegaal contact met tegenstander" },
                    { en: "Unsportsmanlike conduct", es: "Conducta antideportiva", de: "Unsportliches Verhalten", nl: "Onsportief gedrag" },
                    { en: "Traveling with the ball", es: "Caminar con el balón", de: "Schrittfehler mit dem Ball", nl: "Lopen met de bal" },
                    { en: "Double dribbling", es: "Doble drible", de: "Doppeldribbling", nl: "Dubbel dribbelen" }
                ],
                correct: 1,
                explanation: {
                    en: "Technical fouls are called for unsportsmanlike conduct, including arguing with referees, taunting opponents, or excessive celebrations that violate game rules.",
                    es: "Las faltas técnicas se cobran por conducta antideportiva, incluyendo discutir con árbitros, burlarse de oponentes, o celebraciones excesivas que violan las reglas del juego.",
                    de: "Technische Fouls werden für unsportliches Verhalten vergeben, einschließlich Streit mit Schiedsrichtern, Verspotten von Gegnern oder übermäßige Feiern, die gegen Spielregeln verstoßen.",
                    nl: "Technische fouten worden gegeven voor onsportief gedrag, inclusief ruzie met scheidsrechters, pesten van tegenstanders, of overdreven vieringen die spelregels overtreden."
                }
            },
            {
                question: {
                    en: "In American football, what is a safety worth?",
                    es: "En fútbol americano, ¿cuánto vale un safety?",
                    de: "Im American Football, wie viel ist ein Safety wert?",
                    nl: "In American football, hoeveel is een safety waard?"
                },
                options: [
                    { en: "1 point", es: "1 punto", de: "1 Punkt", nl: "1 punt" },
                    { en: "2 points", es: "2 puntos", de: "2 Punkte", nl: "2 punten" },
                    { en: "3 points", es: "3 puntos", de: "3 Punkte", nl: "3 punten" },
                    { en: "6 points", es: "6 puntos", de: "6 Punkte", nl: "6 punten" }
                ],
                correct: 1
            },
            {
                question: {
                    en: "In volleyball, what is a libero not allowed to do?",
                    es: "En voleibol, ¿qué no se le permite hacer a un libero?",
                    de: "Im Volleyball, was darf ein Libero nicht tun?",
                    nl: "In volleybal, wat mag een libero niet doen?"
                },
                options: [
                    { en: "Serve", es: "Sacar", de: "Aufschlagen", nl: "Serveren" },
                    { en: "Attack above net height", es: "Atacar por encima de la altura de la red", de: "Über Netzhöhe angreifen", nl: "Aanvallen boven nethoogte" },
                    { en: "Set from front row", es: "Colocar desde la fila delantera", de: "Aus der Vorderreihe stellen", nl: "Opzetten vanuit de voorste rij" },
                    { en: "All of the above", es: "Todas las anteriores", de: "Alle oben genannten", nl: "Alle bovenstaande" }
                ],
                correct: 3
            },
            {
                question: {
                    en: "In ice hockey, how long is a minor penalty?",
                    es: "En hockey sobre hielo, ¿cuánto dura una penalidad menor?",
                    de: "Im Eishockey, wie lang ist eine kleine Strafe?",
                    nl: "In ijshockey, hoe lang duurt een kleine straf?"
                },
                options: [
                    { en: "1 minute", es: "1 minuto", de: "1 Minute", nl: "1 minuut" },
                    { en: "2 minutes", es: "2 minutos", de: "2 Minuten", nl: "2 minuten" },
                    { en: "3 minutes", es: "3 minutos", de: "3 Minuten", nl: "3 minuten" },
                    { en: "5 minutes", es: "5 minutos", de: "5 Minuten", nl: "5 minuten" }
                ],
                correct: 1
            },
            {
                question: {
                    en: "In rugby league, how many tackles is a team allowed before losing possession?",
                    es: "En rugby league, ¿cuántos tackles se le permiten a un equipo antes de perder la posesión?",
                    de: "In der Rugby League, wie viele Tackles sind einem Team erlaubt, bevor es den Ballbesitz verliert?",
                    nl: "In rugby league, hoeveel tackles zijn een team toegestaan voordat ze balbezit verliezen?"
                },
                options: [
                    { en: "4", es: "4", de: "4", nl: "4" },
                    { en: "5", es: "5", de: "5", nl: "5" },
                    { en: "6", es: "6", de: "6", nl: "6" },
                    { en: "7", es: "7", de: "7", nl: "7" }
                ],
                correct: 2
            },
            {
                question: {
                    en: "In baseball, what is a balk?",
                    es: "En béisbol, ¿qué es un balk?",
                    de: "Im Baseball, was ist ein Balk?",
                    nl: "In honkbal, wat is een balk?"
                },
                options: [
                    { en: "Illegal pitch motion by pitcher", es: "Movimiento ilegal de lanzamiento por el pitcher", de: "Illegale Wurfbewegung des Pitchers", nl: "Illegale werpbeweging door pitcher" },
                    { en: "Hit by pitch", es: "Golpeado por lanzamiento", de: "Vom Ball getroffen", nl: "Geraakt door worp" },
                    { en: "Foul ball", es: "Pelota foul", de: "Foul Ball", nl: "Foute bal" },
                    { en: "Strikeout", es: "Ponche", de: "Strikeout", nl: "Strikeout" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "In cricket, what is a maiden over?",
                    es: "En cricket, ¿qué es un maiden over?",
                    de: "Im Cricket, was ist ein Maiden Over?",
                    nl: "In cricket, wat is een maiden over?"
                },
                options: [
                    { en: "First over of the match", es: "Primer over del partido", de: "Erstes Over des Spiels", nl: "Eerste over van de wedstrijd" },
                    { en: "Over with no runs scored", es: "Over sin carreras anotadas", de: "Over ohne erzielte Läufe", nl: "Over zonder gescoorde runs" },
                    { en: "Over with a wicket taken", es: "Over con un wicket tomado", de: "Over mit einem genommenen Wicket", nl: "Over met een genomen wicket" },
                    { en: "Final over of the match", es: "Último over del partido", de: "Letztes Over des Spiels", nl: "Laatste over van de wedstrijd" }
                ],
                correct: 1
            },
            {
                question: {
                    en: "In handball, what is the goal area called?",
                    es: "En balonmano, ¿cómo se llama el área de gol?",
                    de: "Im Handball, wie heißt der Torraum?",
                    nl: "In handbal, hoe heet het doelgebied?"
                },
                options: [
                    { en: "Goal box", es: "Caja de gol", de: "Torkasten", nl: "Doelkast" },
                    { en: "Crease", es: "Área", de: "Torraum", nl: "Doelgebied" },
                    { en: "6-meter line", es: "Línea de 6 metros", de: "6-Meter-Linie", nl: "6-meter lijn" },
                    { en: "Goal circle", es: "Círculo de gol", de: "Torkreis", nl: "Doelcirkel" }
                ],
                correct: 1
            },
            {
                question: {
                    en: "In water polo, how deep must the water be?",
                    es: "En waterpolo, ¿qué profundidad debe tener el agua?",
                    de: "Beim Wasserball, wie tief muss das Wasser sein?",
                    nl: "In waterpolo, hoe diep moet het water zijn?"
                },
                options: [
                    { en: "At least 1.5 meters", es: "Al menos 1,5 metros", de: "Mindestens 1,5 Meter", nl: "Minstens 1,5 meter" },
                    { en: "At least 1.8 meters", es: "Al menos 1,8 metros", de: "Mindestens 1,8 Meter", nl: "Minstens 1,8 meter" },
                    { en: "At least 2.0 meters", es: "Al menos 2,0 metros", de: "Mindestens 2,0 Meter", nl: "Minstens 2,0 meter" },
                    { en: "At least 2.5 meters", es: "Al menos 2,5 metros", de: "Mindestens 2,5 Meter", nl: "Minstens 2,5 meter" }
                ],
                correct: 2
            },
            {
                question: {
                    en: "In netball, how long is each quarter?",
                    es: "En netball, ¿cuánto dura cada cuarto?",
                    de: "Im Netball, wie lang ist jedes Viertel?",
                    nl: "In netbal, hoe lang duurt elk kwart?"
                },
                options: [
                    { en: "12 minutes", es: "12 minutos", de: "12 Minuten", nl: "12 minuten" },
                    { en: "15 minutes", es: "15 minutos", de: "15 Minuten", nl: "15 minuten" },
                    { en: "18 minutes", es: "18 minutos", de: "18 Minuten", nl: "18 minuten" },
                    { en: "20 minutes", es: "20 minutos", de: "20 Minuten", nl: "20 minuten" }
                ],
                correct: 1
            },
            {
                question: {
                    en: "In field hockey, what is a penalty corner?",
                    es: "En hockey sobre césped, ¿qué es un penalty corner?",
                    de: "Im Feldhockey, was ist eine Strafecke?",
                    nl: "In veldhockey, wat is een penalty corner?"
                },
                options: [
                    { en: "Free hit from corner", es: "Tiro libre desde la esquina", de: "Freischlag aus der Ecke", nl: "Vrije slag vanuit de hoek" },
                    { en: "Awarded for defensive foul in circle", es: "Otorgado por falta defensiva en el círculo", de: "Vergeben für Defensivfoul im Kreis", nl: "Toegekend voor defensieve overtreding in cirkel" },
                    { en: "Penalty shot", es: "Tiro penal", de: "Strafschuss", nl: "Strafschot" },
                    { en: "Corner kick", es: "Tiro de esquina", de: "Eckball", nl: "Hoekschop" }
                ],
                correct: 1
            },
            {
                question: {
                    en: "In lacrosse, what is cradling?",
                    es: "En lacrosse, ¿qué es el cradling?",
                    de: "Im Lacrosse, was ist Cradling?",
                    nl: "In lacrosse, wat is cradling?"
                },
                options: [
                    { en: "Throwing the ball", es: "Lanzar la pelota", de: "Den Ball werfen", nl: "De bal gooien" },
                    { en: "Catching the ball", es: "Atrapar la pelota", de: "Den Ball fangen", nl: "De bal vangen" },
                    { en: "Rocking the stick to keep ball secure", es: "Mecer el palo para mantener la pelota segura", de: "Den Stock wiegen, um den Ball zu sichern", nl: "De stick schommelen om de bal veilig te houden" },
                    { en: "Running with the ball", es: "Correr con la pelota", de: "Mit dem Ball laufen", nl: "Rennen met de bal" }
                ],
                correct: 2
            },
            {
                question: {
                    en: "In Australian Rules Football, what is a behind worth?",
                    es: "En fútbol australiano, ¿cuánto vale un behind?",
                    de: "Im Australian Rules Football, wie viel ist ein Behind wert?",
                    nl: "In Australian Rules Football, hoeveel is een behind waard?"
                },
                options: [
                    { en: "1 point", es: "1 punto", de: "1 Punkt", nl: "1 punt" },
                    { en: "2 points", es: "2 puntos", de: "2 Punkte", nl: "2 punten" },
                    { en: "3 points", es: "3 puntos", de: "3 Punkte", nl: "3 punten" },
                    { en: "No points", es: "Sin puntos", de: "Keine Punkte", nl: "Geen punten" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "In soccer, what is the maximum length of a match including stoppage time?",
                    es: "En fútbol, ¿cuál es la duración máxima de un partido incluyendo tiempo de descuento?",
                    de: "Im Fußball, was ist die maximale Spielzeit einschließlich Nachspielzeit?",
                    nl: "In voetbal, wat is de maximale duur van een wedstrijd inclusief blessuretijd?"
                },
                options: [
                    { en: "90 minutes", es: "90 minutos", de: "90 Minuten", nl: "90 minuten" },
                    { en: "There is no maximum", es: "No hay máximo", de: "Es gibt kein Maximum", nl: "Er is geen maximum" },
                    { en: "100 minutes", es: "100 minutos", de: "100 Minuten", nl: "100 minuten" },
                    { en: "120 minutes", es: "120 minutos", de: "120 Minuten", nl: "120 minuten" }
                ],
                correct: 1
            },
            {
                question: {
                    en: "In basketball, what is the 3-second rule?",
                    es: "En baloncesto, ¿qué es la regla de 3 segundos?",
                    de: "Im Basketball, was ist die 3-Sekunden-Regel?",
                    nl: "In basketbal, wat is de 3-seconden regel?"
                },
                options: [
                    { en: "Maximum time to shoot", es: "Tiempo máximo para tirar", de: "Maximale Zeit zum Werfen", nl: "Maximale tijd om te schieten" },
                    { en: "Maximum time in opponent's key", es: "Tiempo máximo en la zona del oponente", de: "Maximale Zeit in der gegnerischen Zone", nl: "Maximale tijd in de zone van tegenstander" },
                    { en: "Maximum time to inbound ball", es: "Tiempo máximo para hacer un saque", de: "Maximale Zeit für Einwurf", nl: "Maximale tijd voor inworp" },
                    { en: "Maximum time for free throw", es: "Tiempo máximo para tiro libre", de: "Maximale Zeit für Freiwurf", nl: "Maximale tijd voor vrije worp" }
                ],
                correct: 1
            },
            {
                question: {
                    en: "In American football, what is an audible?",
                    es: "En fútbol americano, ¿qué es un audible?",
                    de: "Im American Football, was ist ein Audible?",
                    nl: "In American football, wat is een audible?"
                },
                options: [
                    { en: "Loud crowd noise", es: "Ruido fuerte de la multitud", de: "Lauter Publikumslärm", nl: "Luid publieklawaai" },
                    { en: "Changing the play at the line", es: "Cambiar la jugada en la línea", de: "Spielzug an der Linie ändern", nl: "Het spel wijzigen aan de lijn" },
                    { en: "Referee's whistle", es: "Silbato del árbitro", de: "Schiedsrichterpfiff", nl: "Fluitje van de scheidsrechter" },
                    { en: "Coach's instructions", es: "Instrucciones del entrenador", de: "Anweisungen des Trainers", nl: "Instructies van de coach" }
                ],
                correct: 1
            },
            {
                question: {
                    en: "In volleyball, what is a kill?",
                    es: "En voleibol, ¿qué es un kill?",
                    de: "Im Volleyball, was ist ein Kill?",
                    nl: "In volleybal, wat is een kill?"
                },
                options: [
                    { en: "Serving an ace", es: "Sacar un ace", de: "Ein Ass aufschlagen", nl: "Een ace serveren" },
                    { en: "Blocking opponent's attack", es: "Bloquear el ataque del oponente", de: "Gegnerischen Angriff blocken", nl: "Aanval van tegenstander blokkeren" },
                    { en: "Unreturnable attack hit", es: "Golpe de ataque indevolvible", de: "Nicht rückspielbare Angriffsschlag", nl: "Niet-retourneerbare aanvalsslag" },
                    { en: "Winning the set", es: "Ganar el set", de: "Den Satz gewinnen", nl: "De set winnen" }
                ],
                correct: 2
            },
            {
                question: {
                    en: "In ice hockey, what is icing?",
                    es: "En hockey sobre hielo, ¿qué es el icing?",
                    de: "Im Eishockey, was ist Icing?",
                    nl: "In ijshockey, wat is icing?"
                },
                options: [
                    { en: "Hitting puck from defensive zone past goal line", es: "Golpear el puck desde la zona defensiva más allá de la línea de gol", de: "Puck aus der Defensivzone über die Torlinie schlagen", nl: "Puck slaan vanuit verdedigingszone voorbij doellijn" },
                    { en: "Fighting penalty", es: "Penalidad por pelear", de: "Kampfstrafe", nl: "Vechtstraf" },
                    { en: "Freezing conditions", es: "Condiciones de congelación", de: "Gefrierbedingungen", nl: "Vriesomstandigheden" },
                    { en: "Goal celebration", es: "Celebración de gol", de: "Torfeier", nl: "Doelviering" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "In rugby union, what is a lineout?",
                    es: "En rugby union, ¿qué es un lineout?",
                    de: "Im Rugby Union, was ist ein Lineout?",
                    nl: "In rugby union, wat is een lineout?"
                },
                options: [
                    { en: "Restarting play when ball goes out", es: "Reiniciar el juego cuando el balón sale", de: "Spiel neu starten wenn Ball rausgeht", nl: "Spel hervatten als bal uit gaat" },
                    { en: "Scoring attempt", es: "Intento de puntuación", de: "Punktversuch", nl: "Scoringspoging" },
                    { en: "Penalty kick", es: "Tiro penal", de: "Straftritt", nl: "Strafschop" },
                    { en: "Player substitution", es: "Sustitución de jugador", de: "Spielerwechsel", nl: "Spelerswissel" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "In baseball, what is the designated hitter rule?",
                    es: "En béisbol, ¿cuál es la regla del bateador designado?",
                    de: "Im Baseball, was ist die Designated Hitter Regel?",
                    nl: "In honkbal, wat is de designated hitter regel?"
                },
                options: [
                    { en: "Player who only plays defense", es: "Jugador que solo juega defensa", de: "Spieler der nur Verteidigung spielt", nl: "Speler die alleen verdedigt" },
                    { en: "Player who bats for pitcher", es: "Jugador que batea por el lanzador", de: "Spieler der für den Pitcher schlägt", nl: "Speler die slaat voor de pitcher" },
                    { en: "Best hitter on team", es: "Mejor bateador del equipo", de: "Bester Schläger im Team", nl: "Beste slagman van het team" },
                    { en: "Player who leads off each inning", es: "Jugador que abre cada entrada", de: "Spieler der jedes Inning eröffnet", nl: "Speler die elk inning opent" }
                ],
                correct: 1
            },
            {
                question: {
                    en: "In cricket, how many ways can a batsman be out?",
                    es: "En cricket, ¿de cuántas maneras puede estar out un bateador?",
                    de: "Im Cricket, auf wie viele Arten kann ein Batsman out sein?",
                    nl: "In cricket, op hoeveel manieren kan een batsman uit zijn?"
                },
                options: [
                    { en: "8", es: "8", de: "8", nl: "8" },
                    { en: "9", es: "9", de: "9", nl: "9" },
                    { en: "10", es: "10", de: "10", nl: "10" },
                    { en: "11", es: "11", de: "11", nl: "11" }
                ],
                correct: 2
            },
            {
                question: {
                    en: "In handball, what is a penalty throw awarded for?",
                    es: "En balonmano, ¿por qué se otorga un lanzamiento penal?",
                    de: "Im Handball, wofür wird ein Strafwurf vergeben?",
                    nl: "In handbal, waarvoor wordt een strafworp toegekend?"
                },
                options: [
                    { en: "Any foul", es: "Cualquier falta", de: "Jedes Foul", nl: "Elke overtreding" },
                    { en: "Major foul preventing goal chance", es: "Falta mayor que previene oportunidad de gol", de: "Schweres Foul das Torchance verhindert", nl: "Ernstige overtreding die doelkans verhindert" },
                    { en: "Time wasting", es: "Pérdida de tiempo", de: "Zeitschinderei", nl: "Tijdrekken" },
                    { en: "Arguing with referee", es: "Discutir con el árbitro", de: "Streit mit Schiedsrichter", nl: "Ruzie met scheidsrechter" }
                ],
                correct: 1
            },
            {
                question: {
                    en: "In water polo, what is exclusion?",
                    es: "En waterpolo, ¿qué es la exclusión?",
                    de: "Beim Wasserball, was ist Ausschluss?",
                    nl: "In waterpolo, wat is uitsluiting?"
                },
                options: [
                    { en: "Permanent removal from game", es: "Expulsión permanente del juego", de: "Permanenter Ausschluss vom Spiel", nl: "Permanente verwijdering uit wedstrijd" },
                    { en: "Temporary removal for 20 seconds", es: "Expulsión temporal por 20 segundos", de: "Zeitweiliger Ausschluss für 20 Sekunden", nl: "Tijdelijke verwijdering voor 20 seconden" },
                    { en: "Yellow card warning", es: "Advertencia de tarjeta amarilla", de: "Gelbe Karte Warnung", nl: "Gele kaart waarschuwing" },
                    { en: "Time-out penalty", es: "Penalidad de tiempo muerto", de: "Time-out Strafe", nl: "Time-out straf" }
                ],
                correct: 1
            },
            {
                question: {
                    en: "In netball, what happens if the ball hits the post?",
                    es: "En netball, ¿qué pasa si la pelota golpea el poste?",
                    de: "Im Netball, was passiert wenn der Ball den Pfosten trifft?",
                    nl: "In netbal, wat gebeurt er als de bal de paal raakt?"
                },
                options: [
                    { en: "Goal is awarded", es: "Se otorga gol", de: "Tor wird vergeben", nl: "Doel wordt toegekend" },
                    { en: "Ball remains in play", es: "El balón sigue en juego", de: "Ball bleibt im Spiel", nl: "Bal blijft in spel" },
                    { en: "Play stops", es: "El juego se detiene", de: "Spiel stoppt", nl: "Spel stopt" },
                    { en: "Throw-in awarded", es: "Se otorga saque lateral", de: "Einwurf wird vergeben", nl: "Inworp wordt toegekend" }
                ],
                correct: 1
            },
            {
                question: {
                    en: "In field hockey, what is a green card?",
                    es: "En hockey sobre césped, ¿qué es una tarjeta verde?",
                    de: "Im Feldhockey, was ist eine grüne Karte?",
                    nl: "In veldhockey, wat is een groene kaart?"
                },
                options: [
                    { en: "2-minute suspension", es: "Suspensión de 2 minutos", de: "2-Minuten-Sperre", nl: "2-minuten schorsing" },
                    { en: "Warning/caution", es: "Advertencia/precaución", de: "Warnung/Vorsicht", nl: "Waarschuwing/voorzichtigheid" },
                    { en: "5-minute suspension", es: "Suspensión de 5 minutos", de: "5-Minuten-Sperre", nl: "5-minuten schorsing" },
                    { en: "Match ejection", es: "Expulsión del partido", de: "Spielausschluss", nl: "Wedstrijduitsluiting" }
                ],
                correct: 1
            },
            {
                question: {
                    en: "In lacrosse, what is checking?",
                    es: "En lacrosse, ¿qué es el checking?",
                    de: "Im Lacrosse, was ist Checking?",
                    nl: "In lacrosse, wat is checking?"
                },
                options: [
                    { en: "Verifying team roster", es: "Verificar lista del equipo", de: "Teamliste überprüfen", nl: "Teamlijst controleren" },
                    { en: "Physical contact to disrupt opponent", es: "Contacto físico para perturbar al oponente", de: "Körperkontakt um Gegner zu stören", nl: "Fysiek contact om tegenstander te verstoren" },
                    { en: "Counting goals", es: "Contar goles", de: "Tore zählen", nl: "Doelen tellen" },
                    { en: "Equipment inspection", es: "Inspección de equipo", de: "Ausrüstungsinspektion", nl: "Uitrustingsinspectie" }
                ],
                correct: 1
            },
            {
                question: {
                    en: "In Australian Rules Football, what is a mark?",
                    es: "En fútbol australiano, ¿qué es un mark?",
                    de: "Im Australian Rules Football, was ist ein Mark?",
                    nl: "In Australian Rules Football, wat is een mark?"
                },
                options: [
                    { en: "Catching ball from kick over 15 meters", es: "Atrapar balón de patada sobre 15 metros", de: "Ball aus Tritt über 15 Meter fangen", nl: "Bal vangen uit trap over 15 meter" },
                    { en: "Scoring position marker", es: "Marcador de posición de puntuación", de: "Punktepositionsmarkierung", nl: "Scoringpositiemarkering" },
                    { en: "Field boundary line", es: "Línea límite del campo", de: "Feldgrenzlinie", nl: "Veldgrenslijn" },
                    { en: "Player position", es: "Posición del jugador", de: "Spielerposition", nl: "Spelerpositie" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "In team sports, what does 'home field advantage' typically refer to?",
                    es: "En deportes de equipo, ¿a qué se refiere típicamente la 'ventaja de campo local'?",
                    de: "In Teamsportarten, worauf bezieht sich typischerweise der 'Heimvorteil'?",
                    nl: "In teamsporten, waar verwijst 'thuisvoordeel' meestal naar?"
                },
                options: [
                    { en: "Better equipment", es: "Mejor equipo", de: "Bessere Ausrüstung", nl: "Betere uitrusting" },
                    { en: "Familiar playing conditions and crowd support", es: "Condiciones de juego familiares y apoyo de la multitud", de: "Vertraute Spielbedingungen und Publikumsunterstützung", nl: "Bekende speelomstandigheden en publiek support" },
                    { en: "More timeouts allowed", es: "Más tiempos muertos permitidos", de: "Mehr Timeouts erlaubt", nl: "Meer time-outs toegestaan" },
                    { en: "Favorable referee decisions", es: "Decisiones arbitrales favorables", de: "Günstige Schiedsrichterentscheidungen", nl: "Gunstige scheidsrechtersbeslissingen" }
                ],
                correct: 1,
                explanation: {
                    en: "Home field advantage refers to the benefits a team gains from playing on their familiar field with supportive fans, including knowledge of playing conditions, crowd energy, and reduced travel fatigue.",
                    es: "La ventaja de campo local se refiere a los beneficios que obtiene un equipo al jugar en su campo familiar con fanáticos que lo apoyan, incluyendo conocimiento de las condiciones de juego, energía de la multitud y reducción de fatiga por viaje.",
                    de: "Der Heimvorteil bezieht sich auf die Vorteile, die ein Team durch das Spielen auf seinem vertrauten Feld mit unterstützenden Fans erhält, einschließlich Kenntnis der Spielbedingungen, Publikumsenergie und reduzierter Reisemüdigkeit.",
                    nl: "Thuisvoordeel verwijst naar de voordelen die een team krijgt door te spelen op hun bekende veld met ondersteunende fans, inclusief kennis van speelomstandigheden, publiekenergie en verminderde reisvermoeidheid."
                }
            },
            {
                question: {
                    en: "In soccer, what is the minimum number of players a team must have on the field to continue playing?",
                    es: "En fútbol, ¿cuál es el número mínimo de jugadores que debe tener un equipo en el campo para continuar jugando?",
                    de: "Im Fußball, wie viele Spieler muss ein Team mindestens auf dem Feld haben, um weiterspielen zu können?",
                    nl: "In voetbal, wat is het minimale aantal spelers dat een team op het veld moet hebben om te kunnen blijven spelen?"
                },
                options: [
                    { en: "6", es: "6", de: "6", nl: "6" },
                    { en: "7", es: "7", de: "7", nl: "7" },
                    { en: "8", es: "8", de: "8", nl: "8" },
                    { en: "9", es: "9", de: "9", nl: "9" }
                ],
                correct: 1,
                explanation: {
                    en: "A soccer team must have at least 7 players on the field to continue playing. If a team has fewer than 7 players due to red cards or injuries, the match is abandoned.",
                    es: "Un equipo de fútbol debe tener al menos 7 jugadores en el campo para continuar jugando. Si un equipo tiene menos de 7 jugadores debido a tarjetas rojas o lesiones, el partido se abandona.",
                    de: "Ein Fußballteam muss mindestens 7 Spieler auf dem Feld haben, um weiterspielen zu können. Wenn ein Team aufgrund von roten Karten oder Verletzungen weniger als 7 Spieler hat, wird das Spiel abgebrochen.",
                    nl: "Een voetbalteam moet minstens 7 spelers op het veld hebben om te kunnen blijven spelen. Als een team minder dan 7 spelers heeft door rode kaarten of blessures, wordt de wedstrijd afgebroken."
                }
            },
            {
                question: {
                    en: "In basketball, what is a double-double?",
                    es: "En baloncesto, ¿qué es un doble-doble?",
                    de: "Im Basketball, was ist ein Double-Double?",
                    nl: "In basketbal, wat is een double-double?"
                },
                options: [
                    { en: "Scoring 20+ points twice", es: "Anotar 20+ puntos dos veces", de: "20+ Punkte zweimal erzielen", nl: "20+ punten twee keer scoren" },
                    { en: "Double digits in two statistical categories", es: "Dos dígitos en dos categorías estadísticas", de: "Zweistellige Zahlen in zwei statistischen Kategorien", nl: "Dubbele cijfers in twee statistische categorieën" },
                    { en: "Playing in both halves", es: "Jugar en ambas mitades", de: "In beiden Halbzeiten spielen", nl: "Spelen in beide helften" },
                    { en: "Two technical fouls", es: "Dos faltas técnicas", de: "Zwei technische Fouls", nl: "Twee technische fouten" }
                ],
                correct: 1,
                explanation: {
                    en: "A double-double occurs when a player reaches double digits (10 or more) in two of the five major statistical categories: points, rebounds, assists, steals, and blocks in a single game.",
                    es: "Un doble-doble ocurre cuando un jugador alcanza dos dígitos (10 o más) en dos de las cinco categorías estadísticas principales: puntos, rebotes, asistencias, robos y bloqueos en un solo juego.",
                    de: "Ein Double-Double tritt auf, wenn ein Spieler in zwei der fünf Hauptkategorien der Statistik zweistellige Zahlen (10 oder mehr) erreicht: Punkte, Rebounds, Assists, Steals und Blocks in einem Spiel.",
                    nl: "Een double-double vindt plaats wanneer een speler dubbele cijfers (10 of meer) behaalt in twee van de vijf belangrijkste statistische categorieën: punten, rebounds, assists, steals en blocks in één wedstrijd."
                }
            },
            {
                question: {
                    en: "In American football, what is a touchback?",
                    es: "En fútbol americano, ¿qué es un touchback?",
                    de: "Im American Football, was ist ein Touchback?",
                    nl: "In American football, wat is een touchback?"
                },
                options: [
                    { en: "Tackled in own end zone", es: "Tacleado en su propia zona de anotación", de: "In der eigenen Endzone getackelt", nl: "Getackeld in eigen eindzone" },
                    { en: "Ball goes out of bounds in end zone", es: "El balón sale de límites en zona de anotación", de: "Ball geht in der Endzone ins Aus", nl: "Bal gaat uit de lijnen in eindzone" },
                    { en: "Touchdown celebration", es: "Celebración de touchdown", de: "Touchdown-Feier", nl: "Touchdown viering" },
                    { en: "Backward pass", es: "Pase hacia atrás", de: "Rückpass", nl: "Achterwaartse pass" }
                ],
                correct: 1,
                explanation: {
                    en: "A touchback occurs when the ball becomes dead in a team's own end zone, typically from a kickoff or punt that goes into the end zone. The receiving team gets possession at their 25-yard line.",
                    es: "Un touchback ocurre cuando el balón se vuelve muerto en la zona de anotación del propio equipo, típicamente de un kickoff o punt que va a la zona de anotación. El equipo receptor obtiene posesión en su línea de 25 yardas.",
                    de: "Ein Touchback tritt auf, wenn der Ball in der eigenen Endzone eines Teams tot wird, typischerweise durch einen Kickoff oder Punt, der in die Endzone geht. Das empfangende Team erhält Ballbesitz an ihrer 25-Yard-Linie.",
                    nl: "Een touchback vindt plaats wanneer de bal dood wordt in de eigen eindzone van een team, meestal door een kickoff of punt die in de eindzone gaat. Het ontvangende team krijgt balbezit op hun 25-yard lijn."
                }
            },
            {
                question: {
                    en: "In volleyball, what is the libero's jersey color requirement?",
                    es: "En voleibol, ¿cuál es el requisito de color de camiseta del libero?",
                    de: "Im Volleyball, was ist die Trikotfarbanforderung für den Libero?",
                    nl: "In volleybal, wat is de truitkleur vereiste voor de libero?"
                },
                options: [
                    { en: "Same as team", es: "Igual que el equipo", de: "Gleich wie das Team", nl: "Hetzelfde als team" },
                    { en: "Always white", es: "Siempre blanco", de: "Immer weiß", nl: "Altijd wit" },
                    { en: "Contrasting color from team", es: "Color contrastante del equipo", de: "Kontrastfarbe zum Team", nl: "Contrasterende kleur van team" },
                    { en: "Always black", es: "Siempre negro", de: "Immer schwarz", nl: "Altijd zwart" }
                ],
                correct: 2,
                explanation: {
                    en: "The libero must wear a jersey that contrasts in color with the rest of their team so they can be easily identified by officials and spectators as having different playing restrictions.",
                    es: "El libero debe usar una camiseta que contraste en color con el resto de su equipo para que pueda ser fácilmente identificado por oficiales y espectadores como que tiene diferentes restricciones de juego.",
                    de: "Der Libero muss ein Trikot tragen, das farblich vom Rest des Teams kontrastiert, damit er von Offiziellen und Zuschauern leicht als jemand mit anderen Spielbeschränkungen identifiziert werden kann.",
                    nl: "De libero moet een trui dragen die qua kleur contrasteert met de rest van hun team zodat ze gemakkelijk geïdentificeerd kunnen worden door officials en toeschouwers als hebbende verschillende spelbeperkingen."
                }
            },
            {
                question: {
                    en: "In ice hockey, what is a hat trick?",
                    es: "En hockey sobre hielo, ¿qué es un hat trick?",
                    de: "Im Eishockey, was ist ein Hattrick?",
                    nl: "In ijshockey, wat is een hattrick?"
                },
                options: [
                    { en: "Three assists in one game", es: "Tres asistencias en un juego", de: "Drei Assists in einem Spiel", nl: "Drie assists in één wedstrijd" },
                    { en: "Three goals by one player in one game", es: "Tres goles de un jugador en un juego", de: "Drei Tore eines Spielers in einem Spiel", nl: "Drie doelpunten van één speler in één wedstrijd" },
                    { en: "Three penalties in one game", es: "Tres penalidades en un juego", de: "Drei Strafen in einem Spiel", nl: "Drie straffen in één wedstrijd" },
                    { en: "Three periods played", es: "Tres períodos jugados", de: "Drei gespielte Perioden", nl: "Drie gespeelde periodes" }
                ],
                correct: 1,
                explanation: {
                    en: "A hat trick in ice hockey is when a single player scores three goals in one game. Traditionally, fans throw their hats onto the ice to celebrate this achievement.",
                    es: "Un hat trick en hockey sobre hielo es cuando un solo jugador anota tres goles en un juego. Tradicionalmente, los fanáticos lanzan sus sombreros al hielo para celebrar este logro.",
                    de: "Ein Hattrick im Eishockey ist, wenn ein einzelner Spieler drei Tore in einem Spiel erzielt. Traditionell werfen Fans ihre Hüte aufs Eis, um diese Leistung zu feiern.",
                    nl: "Een hattrick in ijshockey is wanneer één speler drie doelpunten scoort in één wedstrijd. Traditioneel gooien fans hun hoeden op het ijs om deze prestatie te vieren."
                }
            },
            {
                question: {
                    en: "In rugby union, what is a conversion attempt?",
                    es: "En rugby union, ¿qué es un intento de conversión?",
                    de: "Im Rugby Union, was ist ein Erhöhungsversuch?",
                    nl: "In rugby union, wat is een conversiepoging?"
                },
                options: [
                    { en: "Kick attempt after scoring a try", es: "Intento de patada después de anotar un try", de: "Trittversuch nach dem Erzielen eines Try", nl: "Schoppoging na het scoren van een try" },
                    { en: "Changing player positions", es: "Cambiar posiciones de jugador", de: "Spielerpositionen ändern", nl: "Spelersposities veranderen" },
                    { en: "Converting a penalty", es: "Convertir una penalidad", de: "Eine Strafe umwandeln", nl: "Een straf omzetten" },
                    { en: "Switching game tactics", es: "Cambiar tácticas de juego", de: "Spieltaktiken wechseln", nl: "Speltactieken wisselen" }
                ],
                correct: 0,
                explanation: {
                    en: "A conversion is a kick attempt made after scoring a try (5 points) to earn an additional 2 points. The kick is taken from a position in line with where the try was scored.",
                    es: "Una conversión es un intento de patada hecho después de anotar un try (5 puntos) para ganar 2 puntos adicionales. La patada se toma desde una posición en línea con donde se anotó el try.",
                    de: "Eine Erhöhung ist ein Trittversuch nach dem Erzielen eines Try (5 Punkte), um zusätzliche 2 Punkte zu erhalten. Der Tritt wird von einer Position in der Linie genommen, wo der Try erzielt wurde.",
                    nl: "Een conversie is een schoppoging gemaakt na het scoren van een try (5 punten) om extra 2 punten te verdienen. De schop wordt genomen vanaf een positie in lijn met waar de try werd gescoord."
                }
            }
        ]
    };

    if (typeof window.addLevel === 'function') {
        window.addLevel('warm-up/sports', level3);
    }
})();