// Backgammon - Level 3 (Intermediate)
// Total: 100 questions
// Focus: Complex strategies, advanced pip counting, and sophisticated tactics

module.exports = {
    questions: [
        // Questions 1-10: Advanced opening theory
        {
            question: {
                en: "What is the 'split or slot' opening principle?",
                es: "¿Cuál es el principio de apertura 'dividir o ranura'?",
                de: "Was ist das 'Split oder Slot' Eröffnungsprinzip?",
                nl: "Wat is het 'split of slot' openingsprincipe?"
            },
            options: [
                {en: "Choice between splitting back men or slotting 5-point", es: "Elección entre dividir hombres traseros o ranurar punto 5", de: "Wahl zwischen Hintermänner teilen oder 5-Punkt slotten", nl: "Keuze tussen achterste mannen splitsen of 5-punt slotten"},
                {en: "Always split first", es: "Siempre dividir primero", de: "Immer zuerst teilen", nl: "Altijd eerst splitsen"},
                {en: "Never slot the 5-point", es: "Nunca ranurar el punto 5", de: "Nie den 5-Punkt slotten", nl: "Nooit de 5-punt slotten"},
                {en: "Random choice", es: "Elección aleatoria", de: "Zufällige Wahl", nl: "Willekeurige keuze"}
            ],
            correct: 0,
            explanation: {
                en: "The split or slot debate centers on whether to split back checkers (safer) or slot the 5-point (more aggressive). Both have merit depending on opponent's style and match score.",
                es: "El debate dividir o ranurar se centra en si dividir fichas traseras (más seguro) o ranurar el punto 5 (más agresivo).",
                de: "Die Split oder Slot Debatte dreht sich darum ob man Hintermänner teilt (sicherer) oder den 5-Punkt slottet (aggressiver).",
                nl: "Het split of slot debat draait om achterste stenen splitsen (veiliger) of 5-punt slotten (agressiever)."
            }
        },
        {
            question: {
                en: "What's the 'Magriel pure play' concept?",
                es: "¿Cuál es el concepto de 'juego puro de Magriel'?",
                de: "Was ist das 'Magriel Pure Play' Konzept?",
                nl: "Wat is het 'Magriel pure play' concept?"
            },
            options: [
                {en: "Making the technically best play regardless", es: "Hacer la mejor jugada técnica sin importar", de: "Den technisch besten Zug machen egal was", nl: "De technisch beste zet maken ongeacht"],
                {en: "Playing for gammons", es: "Jugar por gammons", de: "Auf Gammons spielen", nl: "Spelen voor gammons"},
                {en: "Conservative style", es: "Estilo conservador", de: "Konservativer Stil", nl: "Conservatieve stijl"},
                {en: "Match play only", es: "Solo juego de partida", de: "Nur Match-Spiel", nl: "Alleen match spel"}
            ],
            correct: 0,
            explanation: {
                en: "Pure play means making the objectively best move without considering opponent's weaknesses or psychological factors. It's theoretically sound but may miss exploitation opportunities.",
                es: "El juego puro significa hacer el mejor movimiento objetivo sin considerar las debilidades del oponente o factores psicológicos.",
                de: "Pure Play bedeutet den objektiv besten Zug zu machen ohne Schwächen des Gegners oder psychologische Faktoren zu berücksichtigen.",
                nl: "Pure play betekent de objectief beste zet maken zonder tegenstanders zwakheden of psychologische factoren te overwegen."
            }
        },
        {
            question: {
                en: "What is 'diversification' in opening play?",
                es: "¿Qué es la 'diversificación' en el juego de apertura?",
                de: "Was ist 'Diversifikation' im Eröffnungsspiel?",
                nl: "Wat is 'diversificatie' in openingsspel?"
            },
            options: [
                {en: "Creating multiple game plans", es: "Crear múltiples planes de juego", de: "Mehrere Spielpläne erstellen", nl: "Meerdere speelplannen creëren"},
                {en: "Playing randomly", es: "Jugar aleatoriamente", de: "Zufällig spielen", nl: "Willekeurig spelen"},
                {en: "Focusing on one strategy", es: "Enfocarse en una estrategia", de: "Auf eine Strategie fokussieren", nl: "Focussen op één strategie"},
                {en: "Defensive play only", es: "Solo juego defensivo", de: "Nur defensives Spiel", nl: "Alleen defensief spel"}
            ],
            correct: 0,
            explanation: {
                en: "Diversification means creating builders and maintaining flexibility for multiple strategic options rather than committing to one plan early.",
                es: "La diversificación significa crear constructores y mantener flexibilidad para múltiples opciones estratégicas en lugar de comprometerse con un plan temprano.",
                de: "Diversifikation bedeutet Builder zu erstellen und Flexibilität für mehrere strategische Optionen zu behalten statt sich früh festzulegen.",
                nl: "Diversificatie betekent bouwers creëren en flexibiliteit behouden voor meerdere strategische opties in plaats van vroeg vastleggen."
            }
        },
        {
            question: {
                en: "What's the modern view on opening 6-3?",
                es: "¿Cuál es la visión moderna sobre la apertura 6-3?",
                de: "Was ist die moderne Sicht auf die 6-3 Eröffnung?",
                nl: "Wat is de moderne kijk op opening 6-3?"
            },
            options: [
                {en: "24/15 or 24/18 13/10", es: "24/15 o 24/18 13/10", de: "24/15 oder 24/18 13/10", nl: "24/15 of 24/18 13/10"},
                {en: "Always 24/15", es: "Siempre 24/15", de: "Immer 24/15", nl: "Altijd 24/15"},
                {en: "Make the 3-point", es: "Hacer el punto 3", de: "Den 3-Punkt machen", nl: "De 3-punt maken"},
                {en: "Split the back men", es: "Dividir los hombres traseros", de: "Die Hintermänner teilen", nl: "De achterste mannen splitsen"}
            ],
            correct: 0,
            explanation: {
                en: "Modern theory favors 24/15 (running) or 24/18 13/10 (splitting and building). Both aim to activate back checkers while maintaining flexibility.",
                es: "La teoría moderna favorece 24/15 (correr) o 24/18 13/10 (dividir y construir). Ambos buscan activar fichas traseras.",
                de: "Moderne Theorie bevorzugt 24/15 (laufen) oder 24/18 13/10 (teilen und bauen). Beide aktivieren Hintermänner.",
                nl: "Moderne theorie geeft voorkeur aan 24/15 (rennen) of 24/18 13/10 (splitsen en bouwen)."
            }
        },
        {
            question: {
                en: "What's the 'tempo play' in response to opponent's split?",
                es: "¿Cuál es el 'juego de tempo' en respuesta a la división del oponente?",
                de: "Was ist das 'Tempo-Spiel' als Antwort auf Gegners Split?",
                nl: "Wat is het 'tempo spel' als reactie op tegenstanders split?"
            },
            options: [
                {en: "Hit to gain time advantage", es: "Golpear para ganar ventaja de tiempo", de: "Schlagen für Zeitvorteil", nl: "Slaan voor tijdvoordeel"},
                {en: "Ignore and build", es: "Ignorar y construir", de: "Ignorieren und bauen", nl: "Negeren en bouwen"},
                {en: "Copy their play", es: "Copiar su jugada", de: "Ihren Zug kopieren", nl: "Hun zet kopiëren"},
                {en: "Double immediately", es: "Doblar inmediatamente", de: "Sofort verdoppeln", nl: "Direct verdubbelen"}
            ],
            correct: 0,
            explanation: {
                en: "Tempo play involves hitting opponent's split checker to gain time while they re-enter, allowing you to improve your position with the extra tempo.",
                es: "El juego de tempo implica golpear la ficha dividida del oponente para ganar tiempo mientras re-entran.",
                de: "Tempo-Spiel bedeutet den geteilten Stein des Gegners zu schlagen um Zeit zu gewinnen während er wieder einwürfelt.",
                nl: "Tempo spel houdt in tegenstanders gesplitste steen slaan om tijd te winnen terwijl ze herinvoeren."
            }
        },
        {
            question: {
                en: "What's the 'California position' structure?",
                es: "¿Cuál es la estructura de la 'posición California'?",
                de: "Was ist die 'California Position' Struktur?",
                nl: "Wat is de 'California positie' structuur?"
            },
            options: [
                {en: "Anchor on 20 or 21 with advanced builders", es: "Ancla en 20 o 21 con constructores avanzados", de: "Anker auf 20 oder 21 mit fortgeschrittenen Buildern", nl: "Anker op 20 of 21 met gevorderde bouwers"},
                {en: "All checkers in home board", es: "Todas las fichas en tablero interior", de: "Alle Steine im Heimfeld", nl: "Alle stenen in thuisveld"},
                {en: "Priming game", es: "Juego de prime", de: "Prime-Spiel", nl: "Prime spel"},
                {en: "Back game structure", es: "Estructura de juego trasero", de: "Backgame-Struktur", nl: "Back game structuur"}
            ],
            correct: 0,
            explanation: {
                en: "The California position features an advanced anchor (20 or 21 point) with well-placed builders, offering both safety and attacking chances.",
                es: "La posición California presenta un ancla avanzada (punto 20 o 21) con constructores bien colocados.",
                de: "Die California Position zeigt einen fortgeschrittenen Anker (20 oder 21 Punkt) mit gut platzierten Buildern.",
                nl: "De California positie heeft een gevorderd anker (20 of 21 punt) met goed geplaatste bouwers."
            }
        },
        {
            question: {
                en: "What's the '2-1 backgame timing' principle?",
                es: "¿Cuál es el principio de 'timing 2-1 del juego trasero'?",
                de: "Was ist das '2-1 Backgame Timing' Prinzip?",
                nl: "Wat is het '2-1 backgame timing' principe?"
            },
            options: [
                {en: "Need 40+ pip lead in timing", es: "Necesitar 40+ pips de ventaja en timing", de: "40+ Pips Timing-Vorsprung brauchen", nl: "40+ pips voorsprong in timing nodig"},
                {en: "Always play backgames", es: "Siempre jugar juegos traseros", de: "Immer Backgames spielen", nl: "Altijd backgames spelen"},
                {en: "Avoid at all costs", es: "Evitar a toda costa", de: "Um jeden Preis vermeiden", nl: "Koste wat kost vermijden"},
                {en: "Match play only", es: "Solo juego de partida", de: "Nur Match-Spiel", nl: "Alleen match spel"}
            ],
            correct: 0,
            explanation: {
                en: "A 2-1 backgame (holding opponent's 1 and 2 points) requires excellent timing - typically 40+ pips ahead in the race to maintain the position.",
                es: "Un juego trasero 2-1 (manteniendo puntos 1 y 2 del oponente) requiere excelente timing - típicamente 40+ pips adelante.",
                de: "Ein 2-1 Backgame (Gegners 1 und 2 Punkt halten) braucht exzellentes Timing - typisch 40+ Pips Vorsprung.",
                nl: "Een 2-1 backgame (tegenstanders 1 en 2 punten vasthouden) vereist uitstekende timing - typisch 40+ pips voorsprong."
            }
        },
        {
            question: {
                en: "What's 'Snowie's law' about blitz attacks?",
                es: "¿Qué dice la 'ley de Snowie' sobre ataques blitz?",
                de: "Was ist 'Snowies Gesetz' über Blitz-Angriffe?",
                nl: "Wat is 'Snowie's wet' over blitz aanvallen?"
            },
            options: [
                {en: "Attack when ahead in race or structure", es: "Atacar cuando adelante en carrera o estructura", de: "Angreifen wenn im Rennen oder Struktur vorne", nl: "Aanvallen wanneer voor in race of structuur"},
                {en: "Never blitz", es: "Nunca blitz", de: "Nie blitzen", nl: "Nooit blitzen"},
                {en: "Always blitz with 2 on bar", es: "Siempre blitz con 2 en barra", de: "Immer blitzen mit 2 auf Bar", nl: "Altijd blitzen met 2 op bar"},
                {en: "Random attacks", es: "Ataques aleatorios", de: "Zufällige Angriffe", nl: "Willekeurige aanvallen"}
            ],
            correct: 0,
            explanation: {
                en: "Snowie's law: Blitz when you're ahead in the race OR have better board structure. If behind in both, play more positionally.",
                es: "Ley de Snowie: Blitz cuando estés adelante en la carrera O tengas mejor estructura de tablero.",
                de: "Snowies Gesetz: Blitzen wenn man im Rennen ODER in der Brettstruktur vorne ist.",
                nl: "Snowie's wet: Blitz wanneer je voorstaat in de race OF betere bordstructuur hebt."
            }
        },
        {
            question: {
                en: "What's the 'Woolsey-Heinrich rule' for cube action?",
                es: "¿Cuál es la 'regla Woolsey-Heinrich' para acción del cubo?",
                de: "Was ist die 'Woolsey-Heinrich Regel' für Würfel-Aktion?",
                nl: "Wat is de 'Woolsey-Heinrich regel' voor kubus actie?"
            },
            options: [
                {en: "Risk vs gain calculation for borderline doubles", es: "Cálculo riesgo vs ganancia para dobles límite", de: "Risiko vs Gewinn Berechnung für Grenz-Verdopplungen", nl: "Risico vs winst berekening voor grens verdubbeling"},
                {en: "Always take", es: "Siempre tomar", de: "Immer annehmen", nl: "Altijd taken"},
                {en: "Never double early", es: "Nunca doblar temprano", de: "Nie früh verdoppeln", nl: "Nooit vroeg verdubbelen"},
                {en: "Match play only", es: "Solo juego de partida", de: "Nur Match-Spiel", nl: "Alleen match spel"}
            ],
            correct: 0,
            explanation: {
                en: "The Woolsey-Heinrich rule weighs risk versus gain: if the cost of a bad take is less than the gain from opponent's drop, lean toward doubling.",
                es: "La regla Woolsey-Heinrich pesa riesgo versus ganancia: si el costo de una mala toma es menor que la ganancia del abandono.",
                de: "Die Woolsey-Heinrich Regel wägt Risiko gegen Gewinn: wenn Kosten einer schlechten Annahme kleiner als Gewinn durch Aufgabe.",
                nl: "De Woolsey-Heinrich regel weegt risico versus winst: als kosten van slechte take kleiner dan winst van drop."
            }
        },
        {
            question: {
                en: "What's 'Simborg's rule' for bearoff cube action?",
                es: "¿Cuál es la 'regla de Simborg' para acción del cubo en salida?",
                de: "Was ist 'Simborgs Regel' für Bearoff Würfel-Aktion?",
                nl: "Wat is 'Simborg's regel' voor bearoff kubus actie?"
            },
            options: [
                {en: "Double when 10% ahead in bearoff race", es: "Doblar cuando 10% adelante en carrera de salida", de: "Verdoppeln bei 10% Vorsprung im Bearoff-Rennen", nl: "Verdubbel bij 10% voorsprong in bearoff race"},
                {en: "Never double in bearoff", es: "Nunca doblar en salida", de: "Nie im Bearoff verdoppeln", nl: "Nooit verdubbelen in bearoff"},
                {en: "Wait for 15% lead", es: "Esperar 15% de ventaja", de: "Auf 15% Führung warten", nl: "Wacht op 15% voorsprong"},
                {en: "Random doubling", es: "Doblaje aleatorio", de: "Zufälliges Verdoppeln", nl: "Willekeurige verdubbeling"}
            ],
            correct: 0,
            explanation: {
                en: "Simborg's rule: In a pure bearoff race, double when approximately 10% ahead in winning chances (roughly 55-45 or better).",
                es: "Regla de Simborg: En una carrera de salida pura, doblar cuando aproximadamente 10% adelante en probabilidades de ganar.",
                de: "Simborgs Regel: Im reinen Bearoff-Rennen verdoppeln bei etwa 10% Vorsprung in Gewinnchancen.",
                nl: "Simborg's regel: In pure bearoff race, verdubbel bij ongeveer 10% voorsprong in winkansen."
            }
        }
        // Questions 11-20: Advanced priming concepts
        {
            question: {
                en: "What's a 'broken prime' and how to use it?",
                es: "¿Qué es un 'prime roto' y cómo usarlo?",
                de: "Was ist eine 'gebrochene Prime' und wie nutzt man sie?",
                nl: "Wat is een 'gebroken prime' en hoe gebruik je het?"
            },
            options: [
                {en: "5-point prime with gap, still effective", es: "Prime de 5 puntos con hueco, aún efectivo", de: "5-Punkt Prime mit Lücke, trotzdem effektiv", nl: "5-punt prime met gat, nog steeds effectief"},
                {en: "Useless structure", es: "Estructura inútil", de: "Nutzlose Struktur", nl: "Nutteloze structuur"},
                {en: "Always complete it", es: "Siempre completarlo", de: "Immer vervollständigen", nl: "Altijd completeren"},
                {en: "Abandon immediately", es: "Abandonar inmediatamente", de: "Sofort aufgeben", nl: "Direct opgeven"}
            ],
            correct: 0,
            explanation: {
                en: "A broken prime (5 consecutive points with a gap) can still be highly effective, especially if the gap is behind opponent's checkers or difficult to exploit.",
                es: "Un prime roto (5 puntos consecutivos con un hueco) puede ser altamente efectivo, especialmente si el hueco está detrás de las fichas del oponente.",
                de: "Eine gebrochene Prime (5 aufeinanderfolgende Punkte mit Lücke) kann sehr effektiv sein, besonders wenn die Lücke hinter gegnerischen Steinen ist.",
                nl: "Een gebroken prime (5 opeenvolgende punten met gat) kan zeer effectief zijn, vooral als het gat achter tegenstanders stenen is."
            }
        },
        {
            question: {
                en: "What's 'prime versus prime' correct strategy?",
                es: "¿Cuál es la estrategia correcta 'prime versus prime'?",
                de: "Was ist die korrekte 'Prime gegen Prime' Strategie?",
                nl: "Wat is de correcte 'prime versus prime' strategie?"
            },
            options: [
                {en: "First to break usually loses", es: "El primero en romper generalmente pierde", de: "Wer zuerst bricht verliert meist", nl: "Eerste die breekt verliest meestal"},
                {en: "Race immediately", es: "Carrera inmediatamente", de: "Sofort rennen", nl: "Direct racen"},
                {en: "Double early", es: "Doblar temprano", de: "Früh verdoppeln", nl: "Vroeg verdubbelen"},
                {en: "Hit everything", es: "Golpear todo", de: "Alles schlagen", nl: "Alles slaan"}
            ],
            correct: 0,
            explanation: {
                en: "In prime versus prime, timing is crucial. The player forced to break their prime first usually loses, so maintaining spare checkers for timing is essential.",
                es: "En prime versus prime, el timing es crucial. El jugador forzado a romper su prime primero generalmente pierde.",
                de: "Bei Prime gegen Prime ist Timing entscheidend. Der Spieler der seine Prime zuerst brechen muss verliert meist.",
                nl: "Bij prime versus prime is timing cruciaal. De speler gedwongen zijn prime eerst te breken verliest meestal."
            }
        },
        {
            question: {
                en: "What's the 'golden prime' formation?",
                es: "¿Cuál es la formación 'prime dorado'?",
                de: "Was ist die 'goldene Prime' Formation?",
                nl: "Wat is de 'gouden prime' formatie?"
            },
            options: [
                {en: "6-point prime from 4 to 9 points", es: "Prime de 6 puntos del 4 al 9", de: "6-Punkt Prime von 4 bis 9", nl: "6-punt prime van 4 tot 9 punten"},
                {en: "Any 6-point prime", es: "Cualquier prime de 6 puntos", de: "Jede 6-Punkt Prime", nl: "Elke 6-punt prime"},
                {en: "5-point prime only", es: "Solo prime de 5 puntos", de: "Nur 5-Punkt Prime", nl: "Alleen 5-punt prime"},
                {en: "Home board prime", es: "Prime del tablero interior", de: "Heimfeld Prime", nl: "Thuisveld prime"}
            ],
            correct: 0,
            explanation: {
                en: "The golden prime from points 4-9 is ideal: it traps checkers effectively while maintaining good distribution for later bearoff.",
                es: "El prime dorado de puntos 4-9 es ideal: atrapa fichas efectivamente mientras mantiene buena distribución para salida posterior.",
                de: "Die goldene Prime von Punkten 4-9 ist ideal: sie fängt Steine effektiv während gute Verteilung für späteren Bearoff erhalten bleibt.",
                nl: "De gouden prime van punten 4-9 is ideaal: vangt stenen effectief terwijl goede verdeling voor latere bearoff behouden blijft."
            }
        },
        {
            question: {
                en: "What's 'walking a prime' technique?",
                es: "¿Qué es la técnica de 'caminar un prime'?",
                de: "Was ist die 'Prime laufen' Technik?",
                nl: "Wat is de 'prime lopen' techniek?"
            },
            options: [
                {en: "Rolling prime forward point by point", es: "Rodar prime hacia adelante punto por punto", de: "Prime Punkt für Punkt vorwärts rollen", nl: "Prime punt voor punt vooruit rollen"},
                {en: "Breaking the prime", es: "Romper el prime", de: "Die Prime brechen", nl: "De prime breken"},
                {en: "Jumping over prime", es: "Saltar sobre el prime", de: "Über die Prime springen", nl: "Over de prime springen"},
                {en: "Static prime", es: "Prime estático", de: "Statische Prime", nl: "Statische prime"}
            ],
            correct: 0,
            explanation: {
                en: "Walking a prime means systematically moving it forward by making new points ahead while releasing rear points, maintaining the blockade while advancing.",
                es: "Caminar un prime significa moverlo sistemáticamente hacia adelante haciendo nuevos puntos adelante mientras se liberan puntos traseros.",
                de: "Eine Prime laufen bedeutet sie systematisch vorwärts zu bewegen durch neue Punkte vorne während hintere Punkte aufgegeben werden.",
                nl: "Een prime lopen betekent systematisch vooruit bewegen door nieuwe punten vooraan te maken terwijl achterste punten vrijgegeven worden."
            }
        },
        {
            question: {
                en: "What's the '4-3 backgame' structure?",
                es: "¿Cuál es la estructura del 'juego trasero 4-3'?",
                de: "Was ist die '4-3 Backgame' Struktur?",
                nl: "Wat is de '4-3 backgame' structuur?"
            },
            options: [
                {en: "Holding opponent's 3 and 4 points", es: "Mantener puntos 3 y 4 del oponente", de: "Gegners 3 und 4 Punkt halten", nl: "Tegenstanders 3 en 4 punten vasthouden"},
                {en: "Making your own 3-4", es: "Hacer tu propio 3-4", de: "Eigene 3-4 machen", nl: "Je eigen 3-4 maken"},
                {en: "Rolling 4-3", es: "Sacar 4-3", de: "4-3 würfeln", nl: "4-3 gooien"},
                {en: "Any backgame", es: "Cualquier juego trasero", de: "Jedes Backgame", nl: "Elk backgame"}
            ],
            correct: 0,
            explanation: {
                en: "The 4-3 backgame (holding opponent's 3 and 4 points) is strong but requires less timing than deeper backgames, making it more practical.",
                es: "El juego trasero 4-3 (manteniendo puntos 3 y 4 del oponente) es fuerte pero requiere menos timing que juegos traseros más profundos.",
                de: "Das 4-3 Backgame (Gegners 3 und 4 Punkt halten) ist stark aber braucht weniger Timing als tiefere Backgames.",
                nl: "Het 4-3 backgame (tegenstanders 3 en 4 punten vasthouden) is sterk maar vereist minder timing dan diepere backgames."
            }
        },
        {
            question: {
                en: "What's 'containment game' strategy?",
                es: "¿Qué es la estrategia de 'juego de contención'?",
                de: "Was ist die 'Containment Game' Strategie?",
                nl: "Wat is 'containment game' strategie?"
            },
            options: [
                {en: "Trapping one checker while racing others", es: "Atrapar una ficha mientras corres con otras", de: "Einen Stein fangen während andere rennen", nl: "Eén steen vangen terwijl anderen racen"},
                {en: "Full prime always", es: "Prime completo siempre", de: "Immer volle Prime", nl: "Altijd volledige prime"},
                {en: "Never contain", es: "Nunca contener", de: "Nie eindämmen", nl: "Nooit insluiten"},
                {en: "Defensive only", es: "Solo defensivo", de: "Nur defensiv", nl: "Alleen defensief"}
            ],
            correct: 0,
            explanation: {
                en: "Containment involves trapping one or two opponent checkers behind a partial prime while racing with the rest, balancing offense and defense.",
                es: "La contención implica atrapar una o dos fichas del oponente detrás de un prime parcial mientras corres con el resto.",
                de: "Containment bedeutet ein oder zwei gegnerische Steine hinter einer teilweisen Prime zu fangen während man mit dem Rest rennt.",
                nl: "Containment houdt in één of twee tegenstander stenen achter een gedeeltelijke prime vangen terwijl met de rest geracet wordt."
            }
        },
        {
            question: {
                en: "What's the 'back anchor dilemma'?",
                es: "¿Cuál es el 'dilema del ancla trasera'?",
                de: "Was ist das 'Hinteranker Dilemma'?",
                nl: "Wat is het 'achter anker dilemma'?"
            },
            options: [
                {en: "When to break anchor vs hold for shot", es: "Cuándo romper ancla vs mantener para tiro", de: "Wann Anker brechen vs auf Schuss halten", nl: "Wanneer anker breken vs houden voor schot"},
                {en: "Always hold anchor", es: "Siempre mantener ancla", de: "Immer Anker halten", nl: "Altijd anker houden"},
                {en: "Break immediately", es: "Romper inmediatamente", de: "Sofort brechen", nl: "Direct breken"},
                {en: "No dilemma exists", es: "No existe dilema", de: "Kein Dilemma existiert", nl: "Geen dilemma bestaat"}
            ],
            correct: 0,
            explanation: {
                en: "The back anchor dilemma is deciding when to run from a defensive anchor: too early leaves shots, too late loses the race. Timing is critical.",
                es: "El dilema del ancla trasera es decidir cuándo correr desde un ancla defensiva: muy temprano deja tiros, muy tarde pierde la carrera.",
                de: "Das Hinteranker Dilemma ist zu entscheiden wann man vom defensiven Anker läuft: zu früh gibt Schüsse, zu spät verliert das Rennen.",
                nl: "Het achter anker dilemma is beslissen wanneer te rennen vanaf defensief anker: te vroeg geeft schoten, te laat verliest de race."
            }
        },
        {
            question: {
                en: "What's 'switching points' in prime maintenance?",
                es: "¿Qué es 'cambiar puntos' en mantenimiento de prime?",
                de: "Was ist 'Punkte wechseln' in Prime-Wartung?",
                nl: "Wat is 'punten wisselen' in prime onderhoud?"
            },
            options: [
                {en: "Moving checkers between adjacent points", es: "Mover fichas entre puntos adyacentes", de: "Steine zwischen benachbarten Punkten bewegen", nl: "Stenen tussen aangrenzende punten bewegen"},
                {en: "Breaking the prime", es: "Romper el prime", de: "Die Prime brechen", nl: "De prime breken"},
                {en: "Making new points", es: "Hacer nuevos puntos", de: "Neue Punkte machen", nl: "Nieuwe punten maken"},
                {en: "Abandoning structure", es: "Abandonar estructura", de: "Struktur aufgeben", nl: "Structuur opgeven"}
            ],
            correct: 0,
            explanation: {
                en: "Switching points involves moving spare checkers between adjacent made points to maintain flexibility and adjust to dice rolls while keeping the prime.",
                es: "Cambiar puntos implica mover fichas de repuesto entre puntos adyacentes hechos para mantener flexibilidad mientras se mantiene el prime.",
                de: "Punkte wechseln bedeutet Ersatzsteine zwischen benachbarten gemachten Punkten zu bewegen für Flexibilität während die Prime gehalten wird.",
                nl: "Punten wisselen houdt in reserve stenen tussen aangrenzende gemaakte punten bewegen voor flexibiliteit terwijl prime behouden blijft."
            }
        },
        {
            question: {
                en: "What's the 'squeeze play' technique?",
                es: "¿Qué es la técnica de 'juego de presión'?",
                de: "Was ist die 'Squeeze Play' Technik?",
                nl: "Wat is de 'squeeze play' techniek?"
            },
            options: [
                {en: "Forcing opponent to crack their position", es: "Forzar al oponente a romper su posición", de: "Gegner zwingen seine Position zu brechen", nl: "Tegenstander dwingen positie te breken"},
                {en: "Physical pressure", es: "Presión física", de: "Physischer Druck", nl: "Fysieke druk"},
                {en: "Time pressure", es: "Presión de tiempo", de: "Zeitdruck", nl: "Tijdsdruk"},
                {en: "Cube pressure", es: "Presión del cubo", de: "Würfeldruck", nl: "Kubus druk"}
            ],
            correct: 0,
            explanation: {
                en: "Squeeze play forces opponent to make awkward moves that damage their position, typically by maintaining a prime while they run out of timing.",
                es: "El juego de presión fuerza al oponente a hacer movimientos incómodos que dañan su posición, típicamente manteniendo un prime.",
                de: "Squeeze Play zwingt den Gegner zu unbequemen Zügen die seine Position beschädigen, typisch durch Prime halten.",
                nl: "Squeeze play dwingt tegenstander tot ongemakkelijke zetten die hun positie beschadigen, typisch door prime vast te houden."
            }
        },
        {
            question: {
                en: "What's 'prime timing' calculation?",
                es: "¿Qué es el cálculo de 'timing del prime'?",
                de: "Was ist 'Prime Timing' Berechnung?",
                nl: "Wat is 'prime timing' berekening?"
            },
            options: [
                {en: "Count spare pips to maintain prime", es: "Contar pips de repuesto para mantener prime", de: "Ersatz-Pips zählen um Prime zu halten", nl: "Reserve pips tellen om prime te behouden"},
                {en: "Clock time", es: "Tiempo del reloj", de: "Uhrzeit", nl: "Klok tijd"},
                {en: "Random timing", es: "Timing aleatorio", de: "Zufälliges Timing", nl: "Willekeurige timing"},
                {en: "Speed of play", es: "Velocidad de juego", de: "Spielgeschwindigkeit", nl: "Speelsnelheid"}
            ],
            correct: 0,
            explanation: {
                en: "Prime timing counts how many spare pips you have (checkers not in the prime) to maintain the blockade before being forced to break it.",
                es: "El timing del prime cuenta cuántos pips de repuesto tienes (fichas no en el prime) para mantener el bloqueo antes de ser forzado a romperlo.",
                de: "Prime Timing zählt wie viele Ersatz-Pips man hat (Steine nicht in der Prime) um die Blockade zu halten bevor man sie brechen muss.",
                nl: "Prime timing telt hoeveel reserve pips je hebt (stenen niet in de prime) om de blokkade te behouden voordat je moet breken."
            }
        }
        // Questions 21-30: Advanced cube handling
        {
            question: {
                en: "What's 'market losing sequence' in cube theory?",
                es: "¿Qué es la 'secuencia de pérdida de mercado' en teoría del cubo?",
                de: "Was ist die 'Markt-Verlust-Sequenz' in der Würfeltheorie?",
                nl: "Wat is 'markt verliezende volgorde' in kubus theorie?"
            },
            options: [
                {en: "Rolls that create efficient double", es: "Tiradas que crean doble eficiente", de: "Würfe die effizientes Doppel erzeugen", nl: "Worpen die efficiënte verdubbeling creëren"},
                {en: "Bad dice sequence", es: "Secuencia de dados mala", de: "Schlechte Würfelsequenz", nl: "Slechte dobbelsteen volgorde"},
                {en: "Losing streak", es: "Racha perdedora", de: "Pechsträhne", nl: "Verliesreeks"},
                {en: "Market crash", es: "Caída del mercado", de: "Markt-Crash", nl: "Markt crash"}
            ],
            correct: 0,
            explanation: {
                en: "Market losing sequences are specific rolls that shift position from no double/take to double/pass, missing the doubling window entirely.",
                es: "Las secuencias de pérdida de mercado son tiradas específicas que cambian la posición de no doblar/tomar a doblar/pasar.",
                de: "Markt-Verlust-Sequenzen sind spezifische Würfe die Position von kein Doppel/Annahme zu Doppel/Aufgabe verschieben.",
                nl: "Markt verliezende volgordes zijn specifieke worpen die positie verschuiven van geen verdubbeling/take naar verdubbeling/pas."
            }
        },
        {
            question: {
                en: "What's the 'cube leverage paradox'?",
                es: "¿Qué es la 'paradoja del apalancamiento del cubo'?",
                de: "Was ist das 'Würfel-Hebelwirkung Paradox'?",
                nl: "Wat is de 'kubus hefboom paradox'?"
            },
            options: [
                {en: "Lower cube value can mean higher leverage", es: "Menor valor del cubo puede significar mayor apalancamiento", de: "Niedrigerer Würfelwert kann höhere Hebelwirkung bedeuten", nl: "Lagere kubus waarde kan hogere hefboom betekenen"},
                {en: "Always maximum leverage", es: "Siempre apalancamiento máximo", de: "Immer maximale Hebelwirkung", nl: "Altijd maximale hefboom"},
                {en: "No paradox exists", es: "No existe paradoja", de: "Kein Paradox existiert", nl: "Geen paradox bestaat"},
                {en: "Random leverage", es: "Apalancamiento aleatorio", de: "Zufällige Hebelwirkung", nl: "Willekeurige hefboom"}
            ],
            correct: 0,
            explanation: {
                en: "Paradoxically, a lower cube (like 2) can have higher leverage than a higher cube (like 8) at certain match scores due to gammon implications.",
                es: "Paradójicamente, un cubo más bajo (como 2) puede tener mayor apalancamiento que uno más alto (como 8) en ciertas puntuaciones.",
                de: "Paradoxerweise kann ein niedrigerer Würfel (wie 2) höhere Hebelwirkung als ein höherer (wie 8) bei bestimmten Spielständen haben.",
                nl: "Paradoxaal kan een lagere kubus (zoals 2) hogere hefboom hebben dan een hogere (zoals 8) bij bepaalde match scores."
            }
        },
        {
            question: {
                en: "What's 'reference position' doubling?",
                es: "¿Qué es el doblaje de 'posición de referencia'?",
                de: "Was ist 'Referenzposition' Verdopplung?",
                nl: "Wat is 'referentie positie' verdubbeling?"
            },
            options: [
                {en: "Using known positions as benchmarks", es: "Usar posiciones conocidas como referencias", de: "Bekannte Positionen als Benchmarks nutzen", nl: "Bekende posities als benchmarks gebruiken"},
                {en: "Random doubling", es: "Doblaje aleatorio", de: "Zufälliges Verdoppeln", nl: "Willekeurige verdubbeling"},
                {en: "Never double", es: "Nunca doblar", de: "Nie verdoppeln", nl: "Nooit verdubbelen"},
                {en: "Always double", es: "Siempre doblar", de: "Immer verdoppeln", nl: "Altijd verdubbelen"}
            ],
            correct: 0,
            explanation: {
                en: "Reference positions are well-studied positions with known equities used to calibrate doubling decisions in similar positions.",
                es: "Las posiciones de referencia son posiciones bien estudiadas con equidades conocidas usadas para calibrar decisiones de doblaje.",
                de: "Referenzpositionen sind gut studierte Positionen mit bekannten Equities zur Kalibrierung von Verdopplungsentscheidungen.",
                nl: "Referentie posities zijn goed bestudeerde posities met bekende equities gebruikt voor kalibreren van verdubbeling beslissingen."
            }
        },
        {
            question: {
                en: "What's 'doubling window theory'?",
                es: "¿Qué es la 'teoría de la ventana de doblaje'?",
                de: "Was ist die 'Verdopplungsfenster Theorie'?",
                nl: "Wat is 'verdubbeling venster theorie'?"
            },
            options: [
                {en: "Optimal equity range for efficient doubles", es: "Rango de equidad óptimo para dobles eficientes", de: "Optimaler Equity-Bereich für effiziente Doppel", nl: "Optimale equity bereik voor efficiënte verdubbeling"},
                {en: "Time to decide", es: "Tiempo para decidir", de: "Zeit zu entscheiden", nl: "Tijd om te beslissen"},
                {en: "Physical window", es: "Ventana física", de: "Physisches Fenster", nl: "Fysiek venster"},
                {en: "Computer screen", es: "Pantalla de computadora", de: "Computerbildschirm", nl: "Computer scherm"}
            ],
            correct: 0,
            explanation: {
                en: "The doubling window is the equity range (typically 50-65%) where it's correct to double and opponent should take, maximizing cube efficiency.",
                es: "La ventana de doblaje es el rango de equidad (típicamente 50-65%) donde es correcto doblar y el oponente debe tomar.",
                de: "Das Verdopplungsfenster ist der Equity-Bereich (typisch 50-65%) wo Verdoppeln korrekt ist und Gegner annehmen sollte.",
                nl: "Het verdubbeling venster is het equity bereik (typisch 50-65%) waar verdubbelen correct is en tegenstander moet taken."
            }
        },
        {
            question: {
                en: "What's 'too good to double' position?",
                es: "¿Qué es una posición 'demasiado buena para doblar'?",
                de: "Was ist eine 'zu gut zum Verdoppeln' Position?",
                nl: "Wat is een 'te goed om te verdubbelen' positie?"
            },
            options: [
                {en: "Position worth more undoubled for gammon", es: "Posición que vale más sin doblar por gammon", de: "Position wertvoller unverdoppelt für Gammon", nl: "Positie waardevoller onverdubbeld voor gammon"},
                {en: "Always double", es: "Siempre doblar", de: "Immer verdoppeln", nl: "Altijd verdubbelen"},
                {en: "Never happens", es: "Nunca sucede", de: "Passiert nie", nl: "Gebeurt nooit"},
                {en: "Bad position", es: "Posición mala", de: "Schlechte Position", nl: "Slechte positie"}
            ],
            correct: 0,
            explanation: {
                en: "Too good positions have such high gammon chances that playing for undoubled gammon (worth 2 points) exceeds value of doubled single game.",
                es: "Las posiciones demasiado buenas tienen tan altas probabilidades de gammon que jugar por gammon sin doblar excede el valor del juego simple doblado.",
                de: "Zu gute Positionen haben so hohe Gammon-Chancen dass unverdoppeltes Gammon-Spiel den Wert des verdoppelten Einzelspiels übersteigt.",
                nl: "Te goede posities hebben zulke hoge gammon kansen dat spelen voor onverdubbelde gammon de waarde van verdubbeld enkel spel overstijgt."
            }
        },
        {
            question: {
                en: "What's 'Kauder paradox' in cube handling?",
                es: "¿Qué es la 'paradoja de Kauder' en manejo del cubo?",
                de: "Was ist das 'Kauder Paradox' in der Würfelhandhabung?",
                nl: "Wat is 'Kauder paradox' in kubus behandeling?"
            },
            options: [
                {en: "Correct to beaver but not to accept", es: "Correcto hacer beaver pero no aceptar", de: "Korrekt zu beavern aber nicht anzunehmen", nl: "Correct om te beaveren maar niet accepteren"},
                {en: "Always beaver", es: "Siempre beaver", de: "Immer beavern", nl: "Altijd beaveren"},
                {en: "Never beaver", es: "Nunca beaver", de: "Nie beavern", nl: "Nooit beaveren"},
                {en: "Random beavers", es: "Beavers aleatorios", de: "Zufällige Beaver", nl: "Willekeurige beavers"}
            ],
            correct: 0,
            explanation: {
                en: "The Kauder paradox occurs in positions where it's technically correct to beaver (immediately redouble) but wrong to take the initial double.",
                es: "La paradoja de Kauder ocurre en posiciones donde es técnicamente correcto hacer beaver pero incorrecto tomar el doble inicial.",
                de: "Das Kauder Paradox tritt in Positionen auf wo es technisch korrekt ist zu beavern aber falsch das initiale Doppel anzunehmen.",
                nl: "De Kauder paradox treedt op in posities waar het technisch correct is te beaveren maar verkeerd om initiële verdubbeling te taken."
            }
        },
        {
            question: {
                en: "What's 'cube trap' strategy?",
                es: "¿Qué es la estrategia de 'trampa del cubo'?",
                de: "Was ist die 'Würfelfalle' Strategie?",
                nl: "Wat is 'kubus val' strategie?"
            },
            options: [
                {en: "Delaying double to induce bad take", es: "Retrasar doble para inducir mala toma", de: "Doppel verzögern um schlechte Annahme zu induzieren", nl: "Verdubbeling uitstellen om slechte take te induceren"},
                {en: "Physical trap", es: "Trampa física", de: "Physische Falle", nl: "Fysieke val"},
                {en: "Always double early", es: "Siempre doblar temprano", de: "Immer früh verdoppeln", nl: "Altijd vroeg verdubbelen"},
                {en: "Never trap", es: "Nunca trampa", de: "Nie Falle", nl: "Nooit val"}
            ],
            correct: 0,
            explanation: {
                en: "Cube trap involves holding the cube slightly past optimal point to induce opponent to take when position deteriorates further.",
                es: "La trampa del cubo implica mantener el cubo ligeramente pasado el punto óptimo para inducir al oponente a tomar cuando la posición se deteriora.",
                de: "Würfelfalle bedeutet den Würfel leicht über optimalen Punkt zu halten um Gegner zur Annahme zu verleiten wenn Position sich verschlechtert.",
                nl: "Kubus val houdt in de kubus iets voorbij optimaal punt houden om tegenstander te verleiden tot take als positie verslechtert."
            }
        },
        {
            question: {
                en: "What's 'recube efficiency' concept?",
                es: "¿Qué es el concepto de 'eficiencia de recubo'?",
                de: "Was ist das 'Recube-Effizienz' Konzept?",
                nl: "Wat is 'herverdubbeling efficiëntie' concept?"
            },
            options: [
                {en: "Value of owning cube for redoubling", es: "Valor de poseer el cubo para redoblar", de: "Wert des Würfelbesitzes zum Wiederverdoppeln", nl: "Waarde van kubus bezit voor herverdubbeling"},
                {en: "Speed of doubling", es: "Velocidad de doblaje", de: "Geschwindigkeit des Verdoppelns", nl: "Snelheid van verdubbeling"},
                {en: "Cube quality", es: "Calidad del cubo", de: "Würfelqualität", nl: "Kubus kwaliteit"},
                {en: "Random efficiency", es: "Eficiencia aleatoria", de: "Zufällige Effizienz", nl: "Willekeurige efficiëntie"}
            ],
            correct: 0,
            explanation: {
                en: "Recube efficiency measures how well positioned you are to use cube ownership for future redoubles, adding 10-15% value to takes.",
                es: "La eficiencia de recubo mide qué tan bien posicionado estás para usar la propiedad del cubo para futuros redobles.",
                de: "Recube-Effizienz misst wie gut positioniert man ist um Würfelbesitz für zukünftige Wiederverdopplungen zu nutzen.",
                nl: "Herverdubbeling efficiëntie meet hoe goed gepositioneerd je bent om kubus eigendom voor toekomstige herverdubbelingen te gebruiken."
            }
        },
        {
            question: {
                en: "What's 'live cube' vs 'dead cube'?",
                es: "¿Qué es 'cubo vivo' vs 'cubo muerto'?",
                de: "Was ist 'lebendiger Würfel' vs 'toter Würfel'?",
                nl: "Wat is 'levende kubus' vs 'dode kubus'?"
            },
            options: [
                {en: "Cube that can vs cannot be turned", es: "Cubo que puede vs no puede ser girado", de: "Würfel der gedreht vs nicht gedreht werden kann", nl: "Kubus die wel vs niet gedraaid kan worden"},
                {en: "Physical condition", es: "Condición física", de: "Physischer Zustand", nl: "Fysieke conditie"},
                {en: "Active vs inactive", es: "Activo vs inactivo", de: "Aktiv vs inaktiv", nl: "Actief vs inactief"},
                {en: "New vs old cube", es: "Cubo nuevo vs viejo", de: "Neuer vs alter Würfel", nl: "Nieuwe vs oude kubus"}
            ],
            correct: 0,
            explanation: {
                en: "A live cube can still be turned (doubled/redoubled), while a dead cube cannot due to match score (Crawford) or maximum value reached.",
                es: "Un cubo vivo aún puede ser girado (doblado/redoblado), mientras un cubo muerto no puede debido a puntuación o valor máximo.",
                de: "Ein lebendiger Würfel kann noch gedreht werden (verdoppelt), während ein toter Würfel nicht kann wegen Spielstand oder Maximalwert.",
                nl: "Een levende kubus kan nog gedraaid worden (verdubbeld), terwijl een dode kubus niet kan vanwege match score of maximum waarde."
            }
        },
        {
            question: {
                en: "What's 'cube access' importance?",
                es: "¿Cuál es la importancia del 'acceso al cubo'?",
                de: "Was ist die Wichtigkeit des 'Würfelzugangs'?",
                nl: "Wat is het belang van 'kubus toegang'?"
            },
            options: [
                {en: "Ability to double affects take decisions", es: "Habilidad de doblar afecta decisiones de toma", de: "Fähigkeit zu verdoppeln beeinflusst Annahmeentscheidungen", nl: "Vermogen te verdubbelen beïnvloedt take beslissingen"},
                {en: "Physical reach", es: "Alcance físico", de: "Physische Reichweite", nl: "Fysiek bereik"},
                {en: "Cube visibility", es: "Visibilidad del cubo", de: "Würfelsichtbarkeit", nl: "Kubus zichtbaarheid"},
                {en: "No importance", es: "Sin importancia", de: "Keine Wichtigkeit", nl: "Geen belang"}
            ],
            correct: 0,
            explanation: {
                en: "Cube access (ability to double) significantly affects take/drop decisions. Limited access (like at certain match scores) changes optimal strategy.",
                es: "El acceso al cubo (habilidad de doblar) afecta significativamente las decisiones de tomar/abandonar.",
                de: "Würfelzugang (Fähigkeit zu verdoppeln) beeinflusst signifikant Annahme/Aufgabe Entscheidungen.",
                nl: "Kubus toegang (vermogen te verdubbelen) beïnvloedt significant take/drop beslissingen."
            }
        }
        // Questions 31-40: Backgame strategy
        {
            question: {
                en: "What's optimal backgame anchor combination?",
                es: "¿Cuál es la combinación óptima de anclas para juego trasero?",
                de: "Was ist die optimale Backgame-Anker Kombination?",
                nl: "Wat is de optimale backgame anker combinatie?"
            },
            options: [
                {en: "2-3 or 2-4 points", es: "Puntos 2-3 o 2-4", de: "2-3 oder 2-4 Punkte", nl: "2-3 of 2-4 punten"},
                {en: "1-2 points only", es: "Solo puntos 1-2", de: "Nur 1-2 Punkte", nl: "Alleen 1-2 punten"},
                {en: "Any two points", es: "Cualquiera dos puntos", de: "Beliebige zwei Punkte", nl: "Willekeurige twee punten"},
                {en: "Three anchors", es: "Tres anclas", de: "Drei Anker", nl: "Drie ankers"}
            ],
            correct: 0,
            explanation: {
                en: "The 2-3 or 2-4 backgame anchors provide best coverage for hitting during bearoff while requiring less timing than deeper anchors.",
                es: "Las anclas de juego trasero 2-3 o 2-4 proporcionan mejor cobertura para golpear durante la salida requiriendo menos timing.",
                de: "Die 2-3 oder 2-4 Backgame-Anker bieten beste Abdeckung zum Schlagen während Bearoff mit weniger Timing-Bedarf.",
                nl: "De 2-3 of 2-4 backgame ankers bieden beste dekking voor slaan tijdens bearoff met minder timing nodig."
            }
        },
        {
            question: {
                en: "What's 'timing lead' in backgames?",
                es: "¿Qué es la 'ventaja de timing' en juegos traseros?",
                de: "Was ist 'Timing-Vorsprung' in Backgames?",
                nl: "Wat is 'timing voorsprong' in backgames?"
            },
            options: [
                {en: "Extra pips to maintain structure", es: "Pips extra para mantener estructura", de: "Extra Pips um Struktur zu halten", nl: "Extra pips om structuur te behouden"},
                {en: "Clock advantage", es: "Ventaja de reloj", de: "Uhrvorteil", nl: "Klok voordeel"},
                {en: "Leading position", es: "Posición líder", de: "Führende Position", nl: "Leidende positie"},
                {en: "Speed of play", es: "Velocidad de juego", de: "Spielgeschwindigkeit", nl: "Speelsnelheid"}
            ],
            correct: 0,
            explanation: {
                en: "Timing lead in backgames refers to spare checkers/pips that allow maintaining home board structure while opponent bears off.",
                es: "La ventaja de timing en juegos traseros refiere a fichas/pips de repuesto que permiten mantener estructura del tablero interior.",
                de: "Timing-Vorsprung in Backgames bedeutet Ersatzsteine/Pips die erlauben Heimfeld-Struktur zu halten während Gegner abträgt.",
                nl: "Timing voorsprong in backgames verwijst naar reserve stenen/pips die toestaan thuisveld structuur te behouden."
            }
        },
        {
            question: {
                en: "What's 'crunch position' in backgames?",
                es: "¿Qué es la 'posición crítica' en juegos traseros?",
                de: "Was ist die 'Crunch Position' in Backgames?",
                nl: "Wat is 'crunch positie' in backgames?"
            },
            options: [
                {en: "When forced to break home board", es: "Cuando forzado a romper tablero interior", de: "Wenn gezwungen Heimfeld zu brechen", nl: "Wanneer gedwongen thuisveld te breken"},
                {en: "Starting position", es: "Posición inicial", de: "Startposition", nl: "Startpositie"},
                {en: "Winning position", es: "Posición ganadora", de: "Gewinnposition", nl: "Winnende positie"},
                {en: "Doubling point", es: "Punto de doblar", de: "Verdopplungspunkt", nl: "Verdubbeling punt"}
            ],
            correct: 0,
            explanation: {
                en: "The crunch position occurs when backgame player runs out of timing and must break their home board, often losing the game.",
                es: "La posición crítica ocurre cuando el jugador de juego trasero se queda sin timing y debe romper su tablero interior.",
                de: "Die Crunch Position tritt auf wenn der Backgame-Spieler kein Timing mehr hat und sein Heimfeld brechen muss.",
                nl: "De crunch positie treedt op wanneer backgame speler geen timing meer heeft en thuisveld moet breken."
            }
        },
        {
            question: {
                en: "What's 'ace-point game' winning strategy?",
                es: "¿Cuál es la estrategia ganadora del 'juego del punto as'?",
                de: "Was ist die Gewinnstrategie des 'Ass-Punkt-Spiels'?",
                nl: "Wat is de winnende strategie van 'aas-punt spel'?"
            },
            options: [
                {en: "Wait for double shot opportunity", es: "Esperar oportunidad de tiro doble", de: "Auf Doppelschuss-Gelegenheit warten", nl: "Wachten op dubbel schot kans"},
                {en: "Run immediately", es: "Correr inmediatamente", de: "Sofort laufen", nl: "Direct rennen"},
                {en: "Never leave anchor", es: "Nunca dejar ancla", de: "Nie Anker verlassen", nl: "Nooit anker verlaten"},
                {en: "Always cube", es: "Siempre cubo", de: "Immer Würfel", nl: "Altijd kubus"}
            ],
            correct: 0,
            explanation: {
                en: "Ace-point games require patience, waiting for opponent to leave a double shot (two blots) which dramatically improves winning chances.",
                es: "Los juegos del punto as requieren paciencia, esperando que el oponente deje un tiro doble que mejora dramáticamente las probabilidades.",
                de: "Ass-Punkt-Spiele erfordern Geduld, warten bis Gegner einen Doppelschuss lässt was Gewinnchancen dramatisch verbessert.",
                nl: "Aas-punt spelen vereisen geduld, wachten tot tegenstander dubbel schot laat wat winkansen dramatisch verbetert."
            }
        },
        {
            question: {
                en: "What's 'back game cube strategy'?",
                es: "¿Cuál es la 'estrategia del cubo en juego trasero'?",
                de: "Was ist die 'Backgame Würfelstrategie'?",
                nl: "Wat is 'backgame kubus strategie'?"
            },
            options: [
                {en: "Opponent should double early", es: "Oponente debe doblar temprano", de: "Gegner sollte früh verdoppeln", nl: "Tegenstander moet vroeg verdubbelen"},
                {en: "Never double", es: "Nunca doblar", de: "Nie verdoppeln", nl: "Nooit verdubbelen"},
                {en: "Always take", es: "Siempre tomar", de: "Immer annehmen", nl: "Altijd taken"},
                {en: "Random cubing", es: "Cubos aleatorios", de: "Zufälliges Würfeln", nl: "Willekeurige kubus"}
            ],
            correct: 0,
            explanation: {
                en: "In backgames, the leader should double early before backgame timing improves, as backgame chances increase with development.",
                es: "En juegos traseros, el líder debe doblar temprano antes que el timing del juego trasero mejore.",
                de: "In Backgames sollte der Führende früh verdoppeln bevor sich das Backgame-Timing verbessert.",
                nl: "In backgames moet de leider vroeg verdubbelen voordat backgame timing verbetert."
            }
        },
        {
            question: {
                en: "What's '23-point anchor' strategy?",
                es: "¿Cuál es la estrategia del 'ancla del punto 23'?",
                de: "Was ist die '23-Punkt-Anker' Strategie?",
                nl: "Wat is '23-punt anker' strategie?"
            },
            options: [
                {en: "Defensive anchor with escape potential", es: "Ancla defensiva con potencial de escape", de: "Defensiver Anker mit Fluchtpotential", nl: "Defensief anker met ontsnappingspotentieel"},
                {en: "Aggressive attack", es: "Ataque agresivo", de: "Aggressiver Angriff", nl: "Agressieve aanval"},
                {en: "Backgame position", es: "Posición de juego trasero", de: "Backgame Position", nl: "Backgame positie"},
                {en: "Priming game", es: "Juego de prime", de: "Prime-Spiel", nl: "Prime spel"}
            ],
            correct: 0,
            explanation: {
                en: "The 23-point anchor provides defensive safety while maintaining good escape timing, bridging between running and holding games.",
                es: "El ancla del punto 23 proporciona seguridad defensiva mientras mantiene buen timing de escape.",
                de: "Der 23-Punkt-Anker bietet defensive Sicherheit während gutes Flucht-Timing erhalten bleibt.",
                nl: "Het 23-punt anker biedt defensieve veiligheid terwijl goede ontsnappings timing behouden blijft."
            }
        },
        {
            question: {
                en: "What's 'deuce-point game' characteristic?",
                es: "¿Cuál es la característica del 'juego del punto dos'?",
                de: "Was ist die Eigenschaft des 'Zwei-Punkt-Spiels'?",
                nl: "Wat is kenmerkend voor 'twee-punt spel'?"
            },
            options: [
                {en: "Deep anchor requiring perfect timing", es: "Ancla profunda requiriendo timing perfecto", de: "Tiefer Anker der perfektes Timing braucht", nl: "Diep anker dat perfect timing vereist"},
                {en: "Always winning", es: "Siempre ganando", de: "Immer gewinnend", nl: "Altijd winnend"},
                {en: "Easy to play", es: "Fácil de jugar", de: "Leicht zu spielen", nl: "Makkelijk te spelen"},
                {en: "No strategy needed", es: "No necesita estrategia", de: "Keine Strategie nötig", nl: "Geen strategie nodig"}
            ],
            correct: 0,
            explanation: {
                en: "The deuce-point (2-point) game features a deep defensive anchor that requires excellent timing to be effective, often difficult to win.",
                es: "El juego del punto dos presenta un ancla defensiva profunda que requiere excelente timing para ser efectiva.",
                de: "Das Zwei-Punkt-Spiel zeigt einen tiefen defensiven Anker der exzellentes Timing braucht um effektiv zu sein.",
                nl: "Het twee-punt spel heeft een diep defensief anker dat uitstekende timing vereist om effectief te zijn."
            }
        },
        {
            question: {
                en: "What's 'partial backgame' concept?",
                es: "¿Qué es el concepto de 'juego trasero parcial'?",
                de: "Was ist das 'teilweise Backgame' Konzept?",
                nl: "Wat is 'gedeeltelijk backgame' concept?"
            },
            options: [
                {en: "One deep anchor plus advanced anchor", es: "Un ancla profunda más ancla avanzada", de: "Ein tiefer Anker plus fortgeschrittener Anker", nl: "Een diep anker plus gevorderd anker"},
                {en: "Half the checkers back", es: "Mitad de fichas atrás", de: "Halbe Steine hinten", nl: "Helft stenen achter"},
                {en: "Playing slowly", es: "Jugar lentamente", de: "Langsam spielen", nl: "Langzaam spelen"},
                {en: "Incomplete game", es: "Juego incompleto", de: "Unvollständiges Spiel", nl: "Onvolledig spel"}
            ],
            correct: 0,
            explanation: {
                en: "A partial backgame combines one deep anchor (1-3 points) with an advanced anchor (18-21), balancing defense with escape chances.",
                es: "Un juego trasero parcial combina un ancla profunda (puntos 1-3) con un ancla avanzada (18-21).",
                de: "Ein teilweises Backgame kombiniert einen tiefen Anker (1-3 Punkte) mit einem fortgeschrittenen Anker (18-21).",
                nl: "Een gedeeltelijk backgame combineert een diep anker (1-3 punten) met een gevorderd anker (18-21)."
            }
        },
        {
            question: {
                en: "What's 'backgame recycle' technique?",
                es: "¿Qué es la técnica de 'reciclaje de juego trasero'?",
                de: "Was ist die 'Backgame Recycling' Technik?",
                nl: "Wat is 'backgame recycling' techniek?"
            },
            options: [
                {en: "Getting hit to maintain timing", es: "Ser golpeado para mantener timing", de: "Geschlagen werden um Timing zu halten", nl: "Geslagen worden om timing te behouden"},
                {en: "Starting over", es: "Empezar de nuevo", de: "Neu anfangen", nl: "Opnieuw beginnen"},
                {en: "Changing strategy", es: "Cambiar estrategia", de: "Strategie wechseln", nl: "Strategie veranderen"},
                {en: "Abandoning game", es: "Abandonar juego", de: "Spiel aufgeben", nl: "Spel opgeven"}
            ],
            correct: 0,
            explanation: {
                en: "Backgame recycle involves deliberately getting hit to send checkers back, maintaining timing for the backgame structure.",
                es: "El reciclaje de juego trasero implica ser golpeado deliberadamente para enviar fichas atrás, manteniendo timing.",
                de: "Backgame Recycling bedeutet absichtlich geschlagen zu werden um Steine zurückzusenden und Timing zu halten.",
                nl: "Backgame recycling houdt in opzettelijk geslagen worden om stenen terug te sturen en timing te behouden."
            }
        },
        {
            question: {
                en: "What's 'forward anchor' role in backgames?",
                es: "¿Cuál es el rol del 'ancla adelantada' en juegos traseros?",
                de: "Was ist die Rolle des 'vorderen Ankers' in Backgames?",
                nl: "Wat is de rol van 'voorwaarts anker' in backgames?"
            },
            options: [
                {en: "Escape route for back checkers", es: "Ruta de escape para fichas traseras", de: "Fluchtroute für hintere Steine", nl: "Ontsnappingsroute voor achterste stenen"},
                {en: "Main defense", es: "Defensa principal", de: "Hauptverteidigung", nl: "Hoofdverdediging"},
                {en: "Attack position", es: "Posición de ataque", de: "Angriffsposition", nl: "Aanvalspositie"},
                {en: "No importance", es: "Sin importancia", de: "Keine Wichtigkeit", nl: "Geen belang"}
            ],
            correct: 0,
            explanation: {
                en: "In backgames, a forward anchor (opponent's bar or 5-point) provides crucial escape route and prevents total containment.",
                es: "En juegos traseros, un ancla adelantada (barra o punto 5 del oponente) proporciona ruta de escape crucial.",
                de: "In Backgames bietet ein vorderer Anker (Gegners Bar oder 5-Punkt) wichtige Fluchtroute und verhindert totale Eindämmung.",
                nl: "In backgames biedt een voorwaarts anker (tegenstanders bar of 5-punt) cruciale ontsnappingsroute."
            }
        },
        // Questions 41-50: Blitz attack and holding games
        {
            question: {
                en: "What defines a successful blitz attack?",
                es: "¿Qué define un ataque relámpago exitoso?",
                de: "Was definiert einen erfolgreichen Blitzangriff?",
                nl: "Wat definieert een succesvolle blitz aanval?"
            },
            options: [
                {en: "Closing 3+ inner board points quickly", es: "Cerrar 3+ puntos internos rápidamente", de: "3+ innere Punkte schnell schließen", nl: "3+ binnenste punten snel sluiten"},
                {en: "Racing ahead only", es: "Solo correr adelante", de: "Nur voraus rennen", nl: "Alleen vooruit racen"},
                {en: "Hitting once", es: "Golpear una vez", de: "Einmal treffen", nl: "Eenmaal raken"},
                {en: "Building primes", es: "Construir primas", de: "Primes bauen", nl: "Primes bouwen"}
            ],
            correct: 0,
            explanation: {
                en: "A blitz requires closing multiple inner board points rapidly while opponent has checkers on bar. Three closed points make reentry difficult, four or more can be devastating.",
                es: "Un ataque relámpago requiere cerrar múltiples puntos internos rápidamente mientras el oponente tiene fichas en la barra.",
                de: "Ein Blitz erfordert mehrere innere Punkte schnell zu schließen während der Gegner Steine auf der Bar hat.",
                nl: "Een blitz vereist meerdere binnenste punten snel sluiten terwijl tegenstander stenen op de bar heeft."
            }
        },
        {
            question: {
                en: "In holding games, what's the key strategic goal?",
                es: "En juegos de retención, ¿cuál es el objetivo estratégico clave?",
                de: "In Haltespielen, was ist das strategische Hauptziel?",
                nl: "In holding games, wat is het belangrijkste strategische doel?"
            },
            options: [
                {en: "Maintain advanced anchor while building", es: "Mantener ancla avanzada mientras construyes", de: "Fortgeschrittenen Anker halten beim Bauen", nl: "Geavanceerd anker behouden tijdens bouwen"},
                {en: "Race immediately", es: "Correr inmediatamente", de: "Sofort rennen", nl: "Meteen racen"},
                {en: "Hit everything", es: "Golpear todo", de: "Alles treffen", nl: "Alles raken"},
                {en: "Build backgame", es: "Construir juego trasero", de: "Backgame bauen", nl: "Backgame bouwen"}
            ],
            correct: 0,
            explanation: {
                en: "Holding games center on keeping an advanced anchor (opponent's 4, 5, or bar-point) while developing your position. This prevents opponent from freely bearing in and provides hitting chances.",
                es: "Los juegos de retención se centran en mantener un ancla avanzada mientras desarrollas tu posición.",
                de: "Haltespiele drehen sich darum einen fortgeschrittenen Anker zu halten während man die Position entwickelt.",
                nl: "Holding games draaien om het behouden van een geavanceerd anker terwijl je je positie ontwikkelt."
            }
        },
        {
            question: {
                en: "What's a 'mutual holding game' position?",
                es: "¿Qué es una posición de 'juego de retención mutua'?",
                de: "Was ist eine 'gegenseitige Haltespiel' Position?",
                nl: "Wat is een 'wederzijds holding game' positie?"
            },
            options: [
                {en: "Both sides have advanced anchors", es: "Ambos lados tienen anclas avanzadas", de: "Beide Seiten haben fortgeschrittene Anker", nl: "Beide zijden hebben geavanceerde ankers"},
                {en: "One side holds", es: "Un lado retiene", de: "Eine Seite hält", nl: "Een kant houdt"},
                {en: "Pure race", es: "Carrera pura", de: "Reines Rennen", nl: "Pure race"},
                {en: "Backgame vs prime", es: "Juego trasero vs prima", de: "Backgame gegen Prime", nl: "Backgame vs prime"}
            ],
            correct: 0,
            explanation: {
                en: "Mutual holding games occur when both players have advanced anchors. These lead to complex timing battles where breaking the anchor first often loses. Cube decisions are particularly difficult.",
                es: "Los juegos de retención mutua ocurren cuando ambos jugadores tienen anclas avanzadas, llevando a batallas de tiempo complejas.",
                de: "Gegenseitige Haltespiele entstehen wenn beide Spieler fortgeschrittene Anker haben, was zu komplexen Timing-Kämpfen führt.",
                nl: "Wederzijdse holding games ontstaan wanneer beide spelers geavanceerde ankers hebben, wat tot complexe timing gevechten leidt."
            }
        },
        {
            question: {
                en: "What's Ward's racing formula comparing?",
                es: "¿Qué compara la fórmula de carrera de Ward?",
                de: "Was vergleicht Ward's Rennformel?",
                nl: "Wat vergelijkt Ward's race formule?"
            },
            options: [
                {en: "Adjusted pip count with wastage", es: "Conteo de pips ajustado con desperdicio", de: "Angepasste Pip-Zählung mit Verschwendung", nl: "Aangepaste pip telling met verspilling"},
                {en: "Pure pip count", es: "Conteo puro de pips", de: "Reine Pip-Zählung", nl: "Pure pip telling"},
                {en: "Number of crossovers", es: "Número de cruces", de: "Anzahl der Überquerungen", nl: "Aantal crossovers"},
                {en: "Checker distribution", es: "Distribución de fichas", de: "Steinverteilung", nl: "Stenen verdeling"}
            ],
            correct: 0,
            explanation: {
                en: "Ward's formula adds 2 pips per checker still outside home board (wastage adjustment) to get effective pip count. This accounts for the inefficiency of bearing off with gaps.",
                es: "La fórmula de Ward añade 2 pips por ficha fuera del cuadrante interno para obtener el conteo efectivo.",
                de: "Ward's Formel addiert 2 Pips pro Stein außerhalb des Heimbretts für die effektive Pip-Zählung.",
                nl: "Ward's formule voegt 2 pips toe per steen buiten het thuisbord voor effectieve pip telling."
            }
        },
        {
            question: {
                en: "When should you break contact in a holding game?",
                es: "¿Cuándo debes romper contacto en un juego de retención?",
                de: "Wann sollte man Kontakt in einem Haltespiel aufgeben?",
                nl: "Wanneer moet je contact verbreken in een holding game?"
            },
            options: [
                {en: "When racing lead compensates for shot risk", es: "Cuando ventaja en carrera compensa riesgo de tiro", de: "Wenn Rennvorsprung Schussrisiko kompensiert", nl: "Als race voorsprong schot risico compenseert"},
                {en: "Never break first", es: "Nunca romper primero", de: "Nie zuerst aufgeben", nl: "Nooit eerst verbreken"},
                {en: "Always immediately", es: "Siempre inmediatamente", de: "Immer sofort", nl: "Altijd meteen"},
                {en: "After opponent breaks", es: "Después que oponente rompe", de: "Nachdem Gegner aufgibt", nl: "Nadat tegenstander verbreekt"}
            ],
            correct: 0,
            explanation: {
                en: "Breaking contact requires calculating if your racing advantage outweighs the hitting risks. Generally need 20+ pip lead or opponent having stripped points to justify running.",
                es: "Romper contacto requiere calcular si tu ventaja en carrera supera los riesgos de ser golpeado.",
                de: "Kontakt aufgeben erfordert zu berechnen ob der Rennvorteil die Trefferrisiken überwiegt.",
                nl: "Contact verbreken vereist berekenen of je race voordeel opweegt tegen het risico geraakt te worden."
            }
        },
        {
            question: {
                en: "What's the 'seven point rule' in bearoff?",
                es: "¿Cuál es la 'regla de siete puntos' en la salida?",
                de: "Was ist die 'Sieben-Punkte-Regel' beim Auswürfeln?",
                nl: "Wat is de 'zeven punten regel' bij het uitspelen?"
            },
            options: [
                {en: "Sum of two highest points should be ≤7", es: "Suma de dos puntos más altos debe ser ≤7", de: "Summe der zwei höchsten Punkte sollte ≤7 sein", nl: "Som van twee hoogste punten moet ≤7 zijn"},
                {en: "Need 7 checkers off", es: "Necesitas 7 fichas fuera", de: "Brauche 7 Steine raus", nl: "7 stenen uit nodig"},
                {en: "7 rolls to finish", es: "7 tiradas para terminar", de: "7 Würfe zum Ende", nl: "7 worpen tot einde"},
                {en: "Keep 7 checkers home", es: "Mantener 7 fichas en casa", de: "7 Steine zuhause halten", nl: "7 stenen thuis houden"}
            ],
            correct: 0,
            explanation: {
                en: "In bearoff, if the sum of your two highest occupied points is 7 or less, you can always bear off with any roll. This principle helps optimize checker distribution for efficient bearoff.",
                es: "En la salida, si la suma de tus dos puntos ocupados más altos es 7 o menos, siempre puedes sacar con cualquier tirada.",
                de: "Beim Auswürfeln, wenn die Summe der zwei höchsten besetzten Punkte 7 oder weniger ist, kann man mit jedem Wurf auswürfeln.",
                nl: "Bij uitspelen, als de som van je twee hoogste bezette punten 7 of minder is, kun je altijd uitspelen met elke worp."
            }
        },
        {
            question: {
                en: "What characterizes an 'ace-point holding game'?",
                es: "¿Qué caracteriza un 'juego de retención de punto as'?",
                de: "Was charakterisiert ein 'Ass-Punkt Haltespiel'?",
                nl: "Wat kenmerkt een 'aas-punt holding game'?"
            },
            options: [
                {en: "Deep anchor requiring perfect timing", es: "Ancla profunda requiriendo tiempo perfecto", de: "Tiefer Anker erfordert perfektes Timing", nl: "Diep anker vereist perfecte timing"},
                {en: "Easy to win", es: "Fácil de ganar", de: "Leicht zu gewinnen", nl: "Makkelijk te winnen"},
                {en: "Always doubles", es: "Siempre dobla", de: "Immer verdoppeln", nl: "Altijd verdubbelen"},
                {en: "Pure racing", es: "Carrera pura", de: "Reines Rennen", nl: "Pure race"}
            ],
            correct: 0,
            explanation: {
                en: "Ace-point games have the deepest possible anchor. While hard to win (need ~30% winning chances), they're resilient against gammons and create shot opportunities if opponent leaves blots.",
                es: "Los juegos de punto as tienen el ancla más profunda posible, siendo difíciles de ganar pero resistentes contra gammons.",
                de: "Ass-Punkt Spiele haben den tiefstmöglichen Anker, schwer zu gewinnen aber widerstandsfähig gegen Gammons.",
                nl: "Aas-punt spelen hebben het diepst mogelijke anker, moeilijk te winnen maar bestand tegen gammons."
            }
        },
        {
            question: {
                en: "What's the 'crossover count' measuring?",
                es: "¿Qué mide el 'conteo de cruces'?",
                de: "Was misst die 'Überquerungszählung'?",
                nl: "Wat meet de 'crossover telling'?"
            },
            options: [
                {en: "Number of quadrant boundaries to cross", es: "Número de límites de cuadrante a cruzar", de: "Anzahl zu überquerender Quadrantengrenzen", nl: "Aantal kwadrant grenzen te kruisen"},
                {en: "Total pip count", es: "Conteo total de pips", de: "Gesamte Pip-Zählung", nl: "Totale pip telling"},
                {en: "Checkers on bar", es: "Fichas en la barra", de: "Steine auf der Bar", nl: "Stenen op de bar"},
                {en: "Points owned", es: "Puntos poseídos", de: "Besessene Punkte", nl: "Punten in bezit"}
            ],
            correct: 0,
            explanation: {
                en: "Crossover count totals how many quadrant boundaries (6-7, 12-13, 18-19 points) each checker must cross to reach home. Fewer crossovers means more efficient bearoff potential.",
                es: "El conteo de cruces suma cuántos límites de cuadrante debe cruzar cada ficha para llegar a casa.",
                de: "Die Überquerungszählung summiert wie viele Quadrantengrenzen jeder Stein überqueren muss um nach Hause zu kommen.",
                nl: "Crossover telling telt hoeveel kwadrantgrenzen elke steen moet kruisen om thuis te komen."
            }
        },
        {
            question: {
                en: "When is 'clearing from the rear' correct?",
                es: "¿Cuándo es correcto 'limpiar desde atrás'?",
                de: "Wann ist 'von hinten räumen' korrekt?",
                nl: "Wanneer is 'van achter opruimen' correct?"
            },
            options: [
                {en: "To maintain even distribution in bearoff", es: "Para mantener distribución pareja en salida", de: "Um gleichmäßige Verteilung beim Auswürfeln zu halten", nl: "Om gelijke verdeling bij uitspelen te behouden"},
                {en: "Always clear front first", es: "Siempre limpiar frente primero", de: "Immer vorne zuerst räumen", nl: "Altijd voor eerst opruimen"},
                {en: "Never clear rear", es: "Nunca limpiar atrás", de: "Nie hinten räumen", nl: "Nooit achter opruimen"},
                {en: "Random choice", es: "Elección aleatoria", de: "Zufällige Wahl", nl: "Willekeurige keuze"}
            ],
            correct: 0,
            explanation: {
                en: "Clearing from rear points (5-6) first in bearoff maintains smooth distribution, avoiding gaps and stacked points. This minimizes wastage and maximizes bearoff efficiency.",
                es: "Limpiar desde puntos traseros primero en la salida mantiene una distribución suave, evitando huecos y puntos apilados.",
                de: "Von hinteren Punkten zuerst räumen hält eine gleichmäßige Verteilung beim Auswürfeln.",
                nl: "Van achterste punten eerst opruimen houdt een soepele verdeling bij het uitspelen."
            }
        },
        {
            question: {
                en: "What's the 'Trice formula' for racing decisions?",
                es: "¿Cuál es la 'fórmula Trice' para decisiones de carrera?",
                de: "Was ist die 'Trice Formel' für Rennentscheidungen?",
                nl: "Wat is de 'Trice formule' voor race beslissingen?"
            },
            options: [
                {en: "8% lead needed plus 2% per roll", es: "8% ventaja necesaria más 2% por tirada", de: "8% Vorsprung nötig plus 2% pro Wurf", nl: "8% voorsprong nodig plus 2% per worp"},
                {en: "10% flat lead", es: "10% ventaja plana", de: "10% flacher Vorsprung", nl: "10% vaste voorsprong"},
                {en: "No formula exists", es: "No existe fórmula", de: "Keine Formel existiert", nl: "Geen formule bestaat"},
                {en: "5% per checker", es: "5% por ficha", de: "5% pro Stein", nl: "5% per steen"}
            ],
            correct: 0,
            explanation: {
                en: "Trice's racing formula suggests needing 8% pip lead to double, plus 2% additional for each roll from bearoff start. This accounts for the random variance in racing positions.",
                es: "La fórmula de Trice sugiere necesitar 8% de ventaja en pips para doblar, más 2% adicional por cada tirada desde el inicio.",
                de: "Trice's Formel schlägt vor 8% Pip-Vorsprung zum Verdoppeln zu brauchen, plus 2% zusätzlich pro Wurf vom Start.",
                nl: "Trice's formule suggereert 8% pip voorsprong nodig voor verdubbelen, plus 2% extra per worp vanaf start."
            }
        },
        // Questions 51-60: Match play and advanced timing
        {
            question: {
                en: "What's the 'gammon value' at 4-away 4-away?",
                es: "¿Cuál es el 'valor gammon' en 4-away 4-away?",
                de: "Was ist der 'Gammon-Wert' bei 4-away 4-away?",
                nl: "Wat is de 'gammon waarde' bij 4-away 4-away?"
            },
            options: [
                {en: "About 0.5 (50% extra value)", es: "Cerca de 0.5 (50% valor extra)", de: "Etwa 0.5 (50% extra Wert)", nl: "Ongeveer 0.5 (50% extra waarde)"},
                {en: "Always 1.0", es: "Siempre 1.0", de: "Immer 1.0", nl: "Altijd 1.0"},
                {en: "Zero value", es: "Valor cero", de: "Null Wert", nl: "Nul waarde"},
                {en: "Double value", es: "Doble valor", de: "Doppelter Wert", nl: "Dubbele waarde"}
            ],
            correct: 0,
            explanation: {
                en: "At 4-away 4-away, gammons are worth about 50% extra. This makes aggressive gammon-going plays more attractive compared to money play where gammon value is 1.0.",
                es: "En 4-away 4-away, los gammons valen aproximadamente 50% extra, haciendo jugadas agresivas más atractivas.",
                de: "Bei 4-away 4-away sind Gammons etwa 50% extra wert, was aggressive Spielzüge attraktiver macht.",
                nl: "Bij 4-away 4-away zijn gammons ongeveer 50% extra waard, wat agressieve spelen aantrekkelijker maakt."
            }
        },
        {
            question: {
                en: "What defines a 'mandatory double' in match play?",
                es: "¿Qué define un 'doble obligatorio' en juego de partida?",
                de: "Was definiert ein 'Pflicht-Doppel' im Match-Spiel?",
                nl: "Wat definieert een 'verplichte verdubbeling' in match play?"
            },
            options: [
                {en: "Must double when cube loses value next", es: "Debe doblar cuando cubo pierde valor después", de: "Muss doppeln wenn Würfel danach Wert verliert", nl: "Moet verdubbelen als kubus daarna waarde verliest"},
                {en: "Always double", es: "Siempre doblar", de: "Immer doppeln", nl: "Altijd verdubbelen"},
                {en: "Never double", es: "Nunca doblar", de: "Nie doppeln", nl: "Nooit verdubbelen"},
                {en: "Random decision", es: "Decisión aleatoria", de: "Zufällige Entscheidung", nl: "Willekeurige beslissing"}
            ],
            correct: 0,
            explanation: {
                en: "Mandatory doubles occur when the cube becomes useless at certain scores (like 2-away Crawford). You must double while it still has value or lose the cube's leverage entirely.",
                es: "Los dobles obligatorios ocurren cuando el cubo se vuelve inútil en ciertos puntajes, debes doblar mientras tiene valor.",
                de: "Pflicht-Doppel treten auf wenn der Würfel bei bestimmten Ständen nutzlos wird, man muss doppeln solange er Wert hat.",
                nl: "Verplichte verdubbelingen komen voor wanneer de kubus waardeloos wordt bij bepaalde scores."
            }
        },
        {
            question: {
                en: "What's 'Woolsey's Law' for blitz cube decisions?",
                es: "¿Cuál es la 'Ley de Woolsey' para decisiones de cubo en ataque?",
                de: "Was ist 'Woolsey's Gesetz' für Blitz-Würfel Entscheidungen?",
                nl: "Wat is 'Woolsey's Wet' voor blitz kubus beslissingen?"
            },
            options: [
                {en: "For money, need 4+ inner board points", es: "Por dinero, necesitas 4+ puntos internos", de: "Um Geld, brauche 4+ innere Punkte", nl: "Voor geld, 4+ binnenste punten nodig"},
                {en: "Always cube in blitz", es: "Siempre cubo en ataque", de: "Immer Würfel im Blitz", nl: "Altijd kubus in blitz"},
                {en: "Never cube early", es: "Nunca cubo temprano", de: "Nie früh würfeln", nl: "Nooit vroeg kubus"},
                {en: "Opponent decides", es: "Oponente decide", de: "Gegner entscheidet", nl: "Tegenstander beslist"}
            ],
            correct: 0,
            explanation: {
                en: "Woolsey's Law states for money play, you generally need 4 inner board points made before doubling in a blitz. In matches, this adjusts based on gammon value and match score.",
                es: "La Ley de Woolsey establece que generalmente necesitas 4 puntos internos hechos antes de doblar en un ataque.",
                de: "Woolsey's Gesetz besagt man braucht generell 4 innere Punkte bevor man in einem Blitz doppelt.",
                nl: "Woolsey's Wet stelt dat je meestal 4 binnenste punten nodig hebt voor verdubbeling in een blitz."
            }
        },
        {
            question: {
                en: "When do you activate gammons at 2-away 4-away?",
                es: "¿Cuándo activas gammons en 2-away 4-away?",
                de: "Wann aktiviert man Gammons bei 2-away 4-away?",
                nl: "Wanneer activeer je gammons bij 2-away 4-away?"
            },
            options: [
                {en: "Leader doubles to activate for trailer", es: "Líder dobla para activar para perseguidor", de: "Führender doppelt um für Verfolger zu aktivieren", nl: "Leider verdubbelt om voor achtervolger te activeren"},
                {en: "Trailer doubles", es: "Perseguidor dobla", de: "Verfolger doppelt", nl: "Achtervolger verdubbelt"},
                {en: "Never activate", es: "Nunca activar", de: "Nie aktivieren", nl: "Nooit activeren"},
                {en: "Both double", es: "Ambos doblan", de: "Beide doppeln", nl: "Beiden verdubbelen"}
            ],
            correct: 0,
            explanation: {
                en: "At 2-away 4-away, the leader doubles to 2 to activate gammons for the trailer. This makes gammons matter for the trailer (winning 4 points reaches Crawford).",
                es: "En 2-away 4-away, el líder dobla a 2 para activar gammons para el perseguidor, haciendo que importen.",
                de: "Bei 2-away 4-away doppelt der Führende auf 2 um Gammons für den Verfolger zu aktivieren.",
                nl: "Bij 2-away 4-away verdubbelt de leider naar 2 om gammons voor achtervolger te activeren."
            }
        },
        {
            question: {
                en: "What's 'DMP' (Double Match Point) cube strategy?",
                es: "¿Cuál es la estrategia de cubo 'DMP' (Punto Doble de Partida)?",
                de: "Was ist die 'DMP' (Doppel-Matchpunkt) Würfel-Strategie?",
                nl: "Wat is 'DMP' (Double Match Point) kubus strategie?"
            },
            options: [
                {en: "No cube - gammons don't matter", es: "Sin cubo - gammons no importan", de: "Kein Würfel - Gammons zählen nicht", nl: "Geen kubus - gammons tellen niet"},
                {en: "Always cube", es: "Siempre cubo", de: "Immer Würfel", nl: "Altijd kubus"},
                {en: "Gammons count double", es: "Gammons cuentan doble", de: "Gammons zählen doppelt", nl: "Gammons tellen dubbel"},
                {en: "Normal cube use", es: "Uso normal de cubo", de: "Normale Würfel-Nutzung", nl: "Normaal kubus gebruik"}
            ],
            correct: 0,
            explanation: {
                en: "At DMP (both players need 1 point), there's no doubling cube and gammons/backgammons don't matter. This dramatically changes strategy toward pure winning chances.",
                es: "En DMP (ambos necesitan 1 punto), no hay cubo y los gammons no importan, cambiando la estrategia hacia probabilidades puras.",
                de: "Bei DMP (beide brauchen 1 Punkt) gibt es keinen Würfel und Gammons zählen nicht, was die Strategie stark ändert.",
                nl: "Bij DMP (beiden 1 punt nodig) is er geen kubus en tellen gammons niet, wat strategie drastisch verandert."
            }
        },
        {
            question: {
                en: "What's the 'free drop' concept in matches?",
                es: "¿Cuál es el concepto de 'rechazo gratis' en partidas?",
                de: "Was ist das 'Free Drop' Konzept in Matches?",
                nl: "Wat is het 'free drop' concept in matches?"
            },
            options: [
                {en: "Can pass one cube without equity loss", es: "Puede pasar un cubo sin pérdida de equidad", de: "Kann einen Würfel ohne Equity-Verlust passen", nl: "Kan een kubus passen zonder equity verlies"},
                {en: "Always take cubes", es: "Siempre tomar cubos", de: "Immer Würfel nehmen", nl: "Altijd kubus aannemen"},
                {en: "Drop all cubes", es: "Rechazar todos los cubos", de: "Alle Würfel ablehnen", nl: "Alle kubussen weigeren"},
                {en: "Random choice", es: "Elección aleatoria", de: "Zufällige Wahl", nl: "Willekeurige keuze"}
            ],
            correct: 0,
            explanation: {
                en: "Free drop occurs at scores like 5-away 1-away post-Crawford. The trailer can drop one cube without changing match winning chances, making the first double less powerful.",
                es: "El rechazo gratis ocurre en puntajes como 5-away 1-away post-Crawford, donde rechazar no cambia las probabilidades.",
                de: "Free Drop tritt bei Ständen wie 5-away 1-away post-Crawford auf, wo Ablehnen die Gewinnchancen nicht ändert.",
                nl: "Free drop komt voor bij scores zoals 5-away 1-away post-Crawford, waar weigeren de winkansen niet verandert."
            }
        },
        {
            question: {
                en: "What's 'Janowski's doubling window' formula?",
                es: "¿Cuál es la fórmula de 'ventana de doblaje de Janowski'?",
                de: "Was ist 'Janowski's Verdopplungsfenster' Formel?",
                nl: "Wat is 'Janowski's verdubbelingsvenster' formule?"
            },
            options: [
                {en: "Double between 22-25% cubeless take point", es: "Doblar entre 22-25% punto de toma sin cubo", de: "Doppeln zwischen 22-25% würfelloser Annahmepunkt", nl: "Verdubbelen tussen 22-25% kubusloos aanname punt"},
                {en: "Always at 25%", es: "Siempre en 25%", de: "Immer bei 25%", nl: "Altijd bij 25%"},
                {en: "Never calculate", es: "Nunca calcular", de: "Nie berechnen", nl: "Nooit berekenen"},
                {en: "50% win rate", es: "50% tasa de victoria", de: "50% Gewinnrate", nl: "50% winkans"}
            ],
            correct: 0,
            explanation: {
                en: "Janowski's formula calculates the doubling window based on match score. Generally double when opponent's cubeless take point is between 22-25%, adjusted for gammon rates.",
                es: "La fórmula de Janowski calcula la ventana de doblaje basada en el puntaje, generalmente entre 22-25%.",
                de: "Janowski's Formel berechnet das Verdopplungsfenster basierend auf dem Spielstand, generell zwischen 22-25%.",
                nl: "Janowski's formule berekent het verdubbelingsvenster op basis van score, meestal tussen 22-25%."
            }
        },
        {
            question: {
                en: "What's the 'settlement value' in a position?",
                es: "¿Cuál es el 'valor de acuerdo' en una posición?",
                de: "Was ist der 'Settlement-Wert' in einer Position?",
                nl: "Wat is de 'settlement waarde' in een positie?"
            },
            options: [
                {en: "Equity if game ended by agreement", es: "Equidad si juego termina por acuerdo", de: "Equity wenn Spiel durch Einigung endet", nl: "Equity als spel eindigt door overeenkomst"},
                {en: "Cube value only", es: "Solo valor del cubo", de: "Nur Würfelwert", nl: "Alleen kubus waarde"},
                {en: "Always zero", es: "Siempre cero", de: "Immer null", nl: "Altijd nul"},
                {en: "Match score", es: "Puntaje de partida", de: "Match-Stand", nl: "Match score"}
            ],
            correct: 0,
            explanation: {
                en: "Settlement value represents the fair equity if players agreed to end the game immediately. It factors in winning chances, gammon/backgammon probabilities, and cube position.",
                es: "El valor de acuerdo representa la equidad justa si los jugadores acordaran terminar el juego inmediatamente.",
                de: "Settlement-Wert repräsentiert die faire Equity wenn Spieler sich einigen das Spiel sofort zu beenden.",
                nl: "Settlement waarde vertegenwoordigt eerlijke equity als spelers overeenkomen het spel direct te eindigen."
            }
        },
        {
            question: {
                en: "What's 'recube vigorish' in match play?",
                es: "¿Qué es el 'vigorish de recubo' en juego de partida?",
                de: "Was ist 'Recube Vigorish' im Match-Spiel?",
                nl: "Wat is 'recube vigorish' in match play?"
            },
            options: [
                {en: "Extra value from owning the cube", es: "Valor extra de poseer el cubo", de: "Extra Wert vom Würfelbesitz", nl: "Extra waarde van kubus bezit"},
                {en: "No extra value", es: "Sin valor extra", de: "Kein extra Wert", nl: "Geen extra waarde"},
                {en: "Always 25%", es: "Siempre 25%", de: "Immer 25%", nl: "Altijd 25%"},
                {en: "Lose value", es: "Perder valor", de: "Wert verlieren", nl: "Waarde verliezen"}
            ],
            correct: 0,
            explanation: {
                en: "Recube vigorish is the additional equity from cube ownership - ability to redouble at optimal time. Worth about 10-12% extra equity in volatile positions.",
                es: "El vigorish de recubo es la equidad adicional por poseer el cubo - poder redoblar en momento óptimo.",
                de: "Recube Vigorish ist die zusätzliche Equity vom Würfelbesitz - Fähigkeit zur optimalen Zeit zu redoppeln.",
                nl: "Recube vigorish is de extra equity van kubus bezit - mogelijkheid om optimaal te herverdubblelen."
            }
        },
        {
            question: {
                en: "What's 'Neil's numbers' for match equity?",
                es: "¿Cuáles son los 'números de Neil' para equidad de partida?",
                de: "Was sind 'Neil's Zahlen' für Match-Equity?",
                nl: "Wat zijn 'Neil's getallen' voor match equity?"
            },
            options: [
                {en: "Simple formula: 50% + 15% per point difference", es: "Fórmula simple: 50% + 15% por diferencia", de: "Einfache Formel: 50% + 15% pro Punkt", nl: "Simpele formule: 50% + 15% per punt verschil"},
                {en: "Complex calculation", es: "Cálculo complejo", de: "Komplexe Berechnung", nl: "Complexe berekening"},
                {en: "Always 50-50", es: "Siempre 50-50", de: "Immer 50-50", nl: "Altijd 50-50"},
                {en: "Random values", es: "Valores aleatorios", de: "Zufällige Werte", nl: "Willekeurige waarden"}
            ],
            correct: 0,
            explanation: {
                en: "Neil's numbers provide quick match equity estimates: leader has 50% + 15% per point ahead. At 3-away 5-away, leader has about 50% + 30% = 80% match winning chances.",
                es: "Los números de Neil dan estimaciones rápidas: líder tiene 50% + 15% por punto de ventaja.",
                de: "Neil's Zahlen geben schnelle Schätzungen: Führender hat 50% + 15% pro Punkt Vorsprung.",
                nl: "Neil's getallen geven snelle schattingen: leider heeft 50% + 15% per punt voorsprong."
            }
        },
        // Questions 61-70: Computer analysis and modern theory
        {
            question: {
                en: "What's 'PR' (Performance Rating) measuring?",
                es: "¿Qué mide el 'PR' (Calificación de Rendimiento)?",
                de: "Was misst 'PR' (Performance Rating)?",
                nl: "Wat meet 'PR' (Performance Rating)?"
            },
            options: [
                {en: "Average error per decision in EMG", es: "Error promedio por decisión en EMG", de: "Durchschnittlicher Fehler pro Entscheidung in EMG", nl: "Gemiddelde fout per beslissing in EMG"},
                {en: "Total wins", es: "Victorias totales", de: "Gesamte Siege", nl: "Totale winsten"},
                {en: "Luck factor", es: "Factor suerte", de: "Glücksfaktor", nl: "Geluksfactor"},
                {en: "Speed of play", es: "Velocidad de juego", de: "Spielgeschwindigkeit", nl: "Speelsnelheid"}
            ],
            correct: 0,
            explanation: {
                en: "PR measures average error per decision in EMG (Equivalent to Money Game). World-class players achieve PR under 5, intermediate players 8-12, beginners often 15+.",
                es: "PR mide el error promedio por decisión en EMG. Jugadores de clase mundial logran PR bajo 5, intermedios 8-12.",
                de: "PR misst durchschnittlichen Fehler pro Entscheidung in EMG. Weltklasse-Spieler erreichen PR unter 5.",
                nl: "PR meet gemiddelde fout per beslissing in EMG. Wereldklasse spelers halen PR onder 5."
            }
        },
        {
            question: {
                en: "What's a 'rollout' in backgammon analysis?",
                es: "¿Qué es un 'rollout' en análisis de backgammon?",
                de: "Was ist ein 'Rollout' in der Backgammon-Analyse?",
                nl: "Wat is een 'rollout' in backgammon analyse?"
            },
            options: [
                {en: "Simulating position thousands of times", es: "Simular posición miles de veces", de: "Position tausende Male simulieren", nl: "Positie duizenden keren simuleren"},
                {en: "One game only", es: "Solo un juego", de: "Nur ein Spiel", nl: "Slechts één spel"},
                {en: "Dice analysis", es: "Análisis de dados", de: "Würfelanalyse", nl: "Dobbelsteen analyse"},
                {en: "Player rating", es: "Calificación de jugador", de: "Spielerbewertung", nl: "Speler beoordeling"}
            ],
            correct: 0,
            explanation: {
                en: "A rollout plays a position thousands of times with different dice sequences to determine the most accurate equity and best play. Modern programs use 5,000+ games for reliable results.",
                es: "Un rollout juega una posición miles de veces con diferentes secuencias de dados para determinar la mejor jugada.",
                de: "Ein Rollout spielt eine Position tausende Male mit verschiedenen Würfelsequenzen für beste Spielzüge.",
                nl: "Een rollout speelt een positie duizenden keren met verschillende dobbelsteensequenties voor beste zet."
            }
        },
        {
            question: {
                en: "What's 'MWC' in match play analysis?",
                es: "¿Qué es 'MWC' en análisis de juego de partida?",
                de: "Was ist 'MWC' in der Match-Spiel Analyse?",
                nl: "Wat is 'MWC' in match play analyse?"
            },
            options: [
                {en: "Match Winning Chances percentage", es: "Porcentaje de probabilidades de ganar partida", de: "Match-Gewinnchancen Prozentsatz", nl: "Match winnende kansen percentage"},
                {en: "Money Won Count", es: "Conteo de dinero ganado", de: "Geld gewonnen Zählung", nl: "Geld gewonnen telling"},
                {en: "Maximum Wager Cube", es: "Cubo de apuesta máxima", de: "Maximaler Wettwürfel", nl: "Maximale inzet kubus"},
                {en: "Move With Caution", es: "Mover con precaución", de: "Mit Vorsicht bewegen", nl: "Beweeg met voorzichtigheid"}
            ],
            correct: 0,
            explanation: {
                en: "MWC (Match Winning Chances) represents the probability of winning the entire match from current score and position. Used for all match play decisions instead of simple equity.",
                es: "MWC representa la probabilidad de ganar toda la partida desde el puntaje y posición actual.",
                de: "MWC repräsentiert die Wahrscheinlichkeit das gesamte Match vom aktuellen Stand zu gewinnen.",
                nl: "MWC vertegenwoordigt de kans om de hele match te winnen vanaf huidige score en positie."
            }
        },
        {
            question: {
                en: "What's 'duplication' strategy in backgammon?",
                es: "¿Qué es la estrategia de 'duplicación' en backgammon?",
                de: "Was ist die 'Duplizierungs' Strategie im Backgammon?",
                nl: "Wat is 'duplicatie' strategie in backgammon?"
            },
            options: [
                {en: "Making same numbers work for multiple goals", es: "Hacer que mismos números funcionen para múltiples objetivos", de: "Gleiche Zahlen für mehrere Ziele nutzen", nl: "Zelfde getallen voor meerdere doelen laten werken"},
                {en: "Rolling doubles", es: "Sacar dobles", de: "Pasch würfeln", nl: "Dubbelen gooien"},
                {en: "Two checkers per point", es: "Dos fichas por punto", de: "Zwei Steine pro Punkt", nl: "Twee stenen per punt"},
                {en: "Double the cube", es: "Doblar el cubo", de: "Würfel verdoppeln", nl: "Kubus verdubbelen"}
            ],
            correct: 0,
            explanation: {
                en: "Duplication arranges your checkers so opponent needs the same dice numbers for different purposes (hitting, covering, escaping). This reduces their effective good rolls by creating conflicts.",
                es: "La duplicación arregla tus fichas para que el oponente necesite los mismos números para diferentes propósitos.",
                de: "Duplizierung arrangiert Steine so dass der Gegner gleiche Würfelzahlen für verschiedene Zwecke braucht.",
                nl: "Duplicatie arrangeert je stenen zodat tegenstander dezelfde getallen voor verschillende doelen nodig heeft."
            }
        },
        {
            question: {
                en: "What's 'diversification' in opening strategy?",
                es: "¿Qué es 'diversificación' en estrategia de apertura?",
                de: "Was ist 'Diversifikation' in der Eröffnungsstrategie?",
                nl: "Wat is 'diversificatie' in openingsstrategie?"
            },
            options: [
                {en: "Spreading builders to work with many rolls", es: "Distribuir constructores para trabajar con muchas tiradas", de: "Builder verteilen für viele Würfe", nl: "Bouwers spreiden voor veel worpen"},
                {en: "Making one point", es: "Hacer un punto", de: "Einen Punkt machen", nl: "Een punt maken"},
                {en: "Running immediately", es: "Correr inmediatamente", de: "Sofort rennen", nl: "Meteen rennen"},
                {en: "Stacking checkers", es: "Apilar fichas", de: "Steine stapeln", nl: "Stenen stapelen"}
            ],
            correct: 0,
            explanation: {
                en: "Diversification places checkers on different points to maximize the number of productive rolls next turn. Better than stacking which creates inflexibility and wastes rolls.",
                es: "La diversificación coloca fichas en diferentes puntos para maximizar el número de tiradas productivas.",
                de: "Diversifikation platziert Steine auf verschiedenen Punkten um produktive Würfe zu maximieren.",
                nl: "Diversificatie plaatst stenen op verschillende punten om productieve worpen te maximaliseren."
            }
        },
        {
            question: {
                en: "What's 'tempo' in backgammon context?",
                es: "¿Qué es 'tempo' en contexto de backgammon?",
                de: "Was ist 'Tempo' im Backgammon-Kontext?",
                nl: "Wat is 'tempo' in backgammon context?"
            },
            options: [
                {en: "Initiative - forcing opponent to react", es: "Iniciativa - forzar al oponente a reaccionar", de: "Initiative - Gegner zum Reagieren zwingen", nl: "Initiatief - tegenstander dwingen te reageren"},
                {en: "Speed of play", es: "Velocidad de juego", de: "Spielgeschwindigkeit", nl: "Speelsnelheid"},
                {en: "Time per move", es: "Tiempo por movimiento", de: "Zeit pro Zug", nl: "Tijd per zet"},
                {en: "Match clock", es: "Reloj de partida", de: "Match-Uhr", nl: "Match klok"}
            ],
            correct: 0,
            explanation: {
                en: "Tempo represents having the initiative - making threats that force opponent to respond defensively rather than improving their position. Losing tempo means falling behind in development.",
                es: "Tempo representa tener la iniciativa - hacer amenazas que fuerzan al oponente a responder defensivamente.",
                de: "Tempo bedeutet Initiative zu haben - Drohungen die den Gegner zu defensiven Reaktionen zwingen.",
                nl: "Tempo betekent initiatief hebben - dreigingen maken die tegenstander dwingen defensief te reageren."
            }
        },
        {
            question: {
                en: "What's 'connectivity' measuring in positions?",
                es: "¿Qué mide la 'conectividad' en posiciones?",
                de: "Was misst 'Konnektivität' in Positionen?",
                nl: "Wat meet 'connectiviteit' in posities?"
            },
            options: [
                {en: "How well checkers support each other", es: "Qué tan bien las fichas se apoyan entre sí", de: "Wie gut Steine sich gegenseitig unterstützen", nl: "Hoe goed stenen elkaar ondersteunen"},
                {en: "Internet speed", es: "Velocidad de internet", de: "Internet-Geschwindigkeit", nl: "Internet snelheid"},
                {en: "Dice combinations", es: "Combinaciones de dados", de: "Würfelkombinationen", nl: "Dobbelsteen combinaties"},
                {en: "Points owned", es: "Puntos poseídos", de: "Besessene Punkte", nl: "Punten in bezit"}
            ],
            correct: 0,
            explanation: {
                en: "Connectivity measures how checkers work together - spare checkers within 6 pips can combine to make points. High connectivity creates flexible positions with many good rolls.",
                es: "La conectividad mide cómo las fichas trabajan juntas - fichas de repuesto dentro de 6 pips pueden combinarse.",
                de: "Konnektivität misst wie Steine zusammenarbeiten - Ersatzsteine innerhalb 6 Pips können Punkte bilden.",
                nl: "Connectiviteit meet hoe stenen samenwerken - reserve stenen binnen 6 pips kunnen punten maken."
            }
        },
        {
            question: {
                en: "What's the 'bot paradox' in modern play?",
                es: "¿Cuál es la 'paradoja del bot' en juego moderno?",
                de: "Was ist das 'Bot-Paradoxon' im modernen Spiel?",
                nl: "Wat is de 'bot paradox' in modern spel?"
            },
            options: [
                {en: "Computers play differently than humans teach", es: "Computadoras juegan diferente a como humanos enseñan", de: "Computer spielen anders als Menschen lehren", nl: "Computers spelen anders dan mensen leren"},
                {en: "Bots always win", es: "Bots siempre ganan", de: "Bots gewinnen immer", nl: "Bots winnen altijd"},
                {en: "Humans play better", es: "Humanos juegan mejor", de: "Menschen spielen besser", nl: "Mensen spelen beter"},
                {en: "No difference", es: "Sin diferencia", de: "Kein Unterschied", nl: "Geen verschil"}
            ],
            correct: 0,
            explanation: {
                en: "The bot paradox: computer analysis shows many traditional human teachings were wrong. Bots play more aggressively, take more risks, and value different concepts than classical theory suggested.",
                es: "La paradoja del bot: el análisis computacional muestra que muchas enseñanzas humanas tradicionales estaban equivocadas.",
                de: "Das Bot-Paradoxon: Computeranalyse zeigt dass viele traditionelle menschliche Lehren falsch waren.",
                nl: "De bot paradox: computer analyse toont dat veel traditionele menselijke lessen fout waren."
            }
        },
        {
            question: {
                en: "What's 'effective pip count' (EPC)?",
                es: "¿Qué es el 'conteo efectivo de pips' (EPC)?",
                de: "Was ist die 'effektive Pip-Zählung' (EPC)?",
                nl: "Wat is 'effectieve pip telling' (EPC)?"
            },
            options: [
                {en: "Adjusted count including wastage", es: "Conteo ajustado incluyendo desperdicio", de: "Angepasste Zählung mit Verschwendung", nl: "Aangepaste telling inclusief verspilling"},
                {en: "Simple pip count", es: "Conteo simple de pips", de: "Einfache Pip-Zählung", nl: "Simpele pip telling"},
                {en: "Checker count", es: "Conteo de fichas", de: "Steinzählung", nl: "Stenen telling"},
                {en: "Point count", es: "Conteo de puntos", de: "Punktzählung", nl: "Punten telling"}
            ],
            correct: 0,
            explanation: {
                en: "EPC adjusts raw pip count for wastage - checkers stacked on low points, gaps in home board, and checkers already borne off. More accurate than simple pip count for racing decisions.",
                es: "EPC ajusta el conteo crudo de pips por desperdicio - fichas apiladas, huecos, y fichas ya sacadas.",
                de: "EPC passt rohe Pip-Zählung für Verschwendung an - gestapelte Steine, Lücken, ausgewürfelte Steine.",
                nl: "EPC past ruwe pip telling aan voor verspilling - gestapelde stenen, gaten, uitgespeelde stenen."
            }
        },
        {
            question: {
                en: "What's 'zone theory' in backgammon?",
                es: "¿Qué es la 'teoría de zonas' en backgammon?",
                de: "Was ist die 'Zonen-Theorie' im Backgammon?",
                nl: "Wat is 'zone theorie' in backgammon?"
            },
            options: [
                {en: "Dividing board into strategic regions", es: "Dividir tablero en regiones estratégicas", de: "Brett in strategische Regionen teilen", nl: "Bord verdelen in strategische regio's"},
                {en: "Time zones for play", es: "Zonas horarias para jugar", de: "Zeitzonen zum Spielen", nl: "Tijdzones voor spelen"},
                {en: "Cube zones", es: "Zonas de cubo", de: "Würfelzonen", nl: "Kubus zones"},
                {en: "Safety zones", es: "Zonas de seguridad", de: "Sicherheitszonen", nl: "Veiligheids zones"}
            ],
            correct: 0,
            explanation: {
                en: "Zone theory divides the board into strategic regions: outfield (opponent's outer board), mid-board (your outer board), and inner board. Different principles apply to checker play in each zone.",
                es: "La teoría de zonas divide el tablero en regiones: campo exterior, tablero medio, y tablero interno.",
                de: "Zonen-Theorie teilt das Brett in Regionen: Außenfeld, Mittelbrett, und Innenbrett.",
                nl: "Zone theorie verdeelt het bord in regio's: buitenveld, middenbord, en binnenbord."
            }
        },
        // Questions 71-80: Advanced endgame and special positions
        {
            question: {
                en: "What's the 'Jacoby rule' in money games?",
                es: "¿Cuál es la 'regla Jacoby' en juegos por dinero?",
                de: "Was ist die 'Jacoby-Regel' in Geldspielen?",
                nl: "Wat is de 'Jacoby regel' in geldspelen?"
            },
            options: [
                {en: "Gammons only count if cube was turned", es: "Gammons solo cuentan si cubo fue girado", de: "Gammons zählen nur wenn Würfel gedreht wurde", nl: "Gammons tellen alleen als kubus gedraaid is"},
                {en: "No gammons allowed", es: "No se permiten gammons", de: "Keine Gammons erlaubt", nl: "Geen gammons toegestaan"},
                {en: "Double gammons", es: "Gammons dobles", de: "Doppelte Gammons", nl: "Dubbele gammons"},
                {en: "Automatic doubles", es: "Dobles automáticos", de: "Automatische Doppel", nl: "Automatische verdubbeling"}
            ],
            correct: 0,
            explanation: {
                en: "Jacoby rule: gammons and backgammons only count if the cube has been turned. This speeds up money games by encouraging earlier cube action when gammons are likely.",
                es: "Regla Jacoby: gammons y backgammons solo cuentan si el cubo ha sido girado, acelerando el juego.",
                de: "Jacoby-Regel: Gammons und Backgammons zählen nur wenn der Würfel gedreht wurde.",
                nl: "Jacoby regel: gammons en backgammons tellen alleen als de kubus gedraaid is."
            }
        },
        {
            question: {
                en: "What's 'hypergammon' variant?",
                es: "¿Qué es la variante 'hypergammon'?",
                de: "Was ist die 'Hypergammon' Variante?",
                nl: "Wat is de 'hypergammon' variant?"
            },
            options: [
                {en: "Starting with only 3 checkers each", es: "Empezar con solo 3 fichas cada uno", de: "Mit nur 3 Steinen pro Spieler starten", nl: "Starten met slechts 3 stenen elk"},
                {en: "Extra checkers", es: "Fichas extra", de: "Extra Steine", nl: "Extra stenen"},
                {en: "No doubling cube", es: "Sin cubo de doblaje", de: "Kein Verdopplungswürfel", nl: "Geen verdubbelingskubus"},
                {en: "Larger board", es: "Tablero más grande", de: "Größeres Brett", nl: "Groter bord"}
            ],
            correct: 0,
            explanation: {
                en: "Hypergammon uses only 3 checkers per player on their 1, 2, and 3 points. Games are extremely tactical, volatile, and finish quickly. Popular for studying pure tactics.",
                es: "Hypergammon usa solo 3 fichas por jugador en puntos 1, 2 y 3. Juegos extremadamente tácticos y volátiles.",
                de: "Hypergammon nutzt nur 3 Steine pro Spieler auf Punkten 1, 2 und 3. Extrem taktisch und volatil.",
                nl: "Hypergammon gebruikt slechts 3 stenen per speler op punten 1, 2 en 3. Extreem tactisch en volatiel."
            }
        },
        {
            question: {
                en: "What's a 'beaver' in cube action?",
                es: "¿Qué es un 'beaver' en acción de cubo?",
                de: "Was ist ein 'Beaver' bei Würfelaktionen?",
                nl: "Wat is een 'beaver' in kubus actie?"
            },
            options: [
                {en: "Immediate redouble while keeping cube", es: "Redoble inmediato manteniendo cubo", de: "Sofortige Wiederverdopplung bei Würfelbehalten", nl: "Onmiddellijke herverdubbeling terwijl kubus behouden"},
                {en: "Refusing double", es: "Rechazar doble", de: "Doppel ablehnen", nl: "Verdubbeling weigeren"},
                {en: "Taking double", es: "Tomar doble", de: "Doppel annehmen", nl: "Verdubbeling aannemen"},
                {en: "Initial double", es: "Doble inicial", de: "Anfangsdoppel", nl: "Initiële verdubbeling"}
            ],
            correct: 0,
            explanation: {
                en: "A beaver allows the player receiving a double to immediately redouble to 4 while retaining cube ownership. Used when opponent's double was a clear mistake.",
                es: "Un beaver permite al jugador que recibe un doble redoblar inmediatamente a 4 manteniendo la posesión del cubo.",
                de: "Ein Beaver erlaubt dem Spieler der ein Doppel erhält sofort auf 4 zu redoppeln bei Würfelbesitz.",
                nl: "Een beaver staat de speler die verdubbeling ontvangt toe om direct te herverdubbelen naar 4 met kubusbezit."
            }
        },
        {
            question: {
                en: "What's 'Nactation' notation system?",
                es: "¿Qué es el sistema de notación 'Nactation'?",
                de: "Was ist das 'Nactation' Notationssystem?",
                nl: "Wat is het 'Nactation' notatie systeem?"
            },
            options: [
                {en: "Two-letter codes for each point", es: "Códigos de dos letras para cada punto", de: "Zwei-Buchstaben-Codes für jeden Punkt", nl: "Twee-letter codes voor elk punt"},
                {en: "Numbers only", es: "Solo números", de: "Nur Zahlen", nl: "Alleen nummers"},
                {en: "Algebraic notation", es: "Notación algebraica", de: "Algebraische Notation", nl: "Algebraïsche notatie"},
                {en: "No standard exists", es: "No existe estándar", de: "Kein Standard existiert", nl: "Geen standaard bestaat"}
            ],
            correct: 0,
            explanation: {
                en: "Nactation uses two-letter codes (like 'ge' for golden point) to describe positions concisely. Created by Nack Ballard for efficient position communication and analysis.",
                es: "Nactation usa códigos de dos letras para describir posiciones concisamente, creado por Nack Ballard.",
                de: "Nactation nutzt Zwei-Buchstaben-Codes um Positionen prägnant zu beschreiben, erstellt von Nack Ballard.",
                nl: "Nactation gebruikt twee-letter codes om posities beknopt te beschrijven, gemaakt door Nack Ballard."
            }
        },
        {
            question: {
                en: "What's the 'doubling window' concept?",
                es: "¿Qué es el concepto de 'ventana de doblaje'?",
                de: "Was ist das 'Verdopplungsfenster' Konzept?",
                nl: "Wat is het 'verdubbelingsvenster' concept?"
            },
            options: [
                {en: "Optimal range between too good and not good enough", es: "Rango óptimo entre demasiado bueno y no suficientemente bueno", de: "Optimaler Bereich zwischen zu gut und nicht gut genug", nl: "Optimaal bereik tussen te goed en niet goed genoeg"},
                {en: "Always double", es: "Siempre doblar", de: "Immer verdoppeln", nl: "Altijd verdubbelen"},
                {en: "Never double", es: "Nunca doblar", de: "Nie verdoppeln", nl: "Nooit verdubbelen"},
                {en: "Random timing", es: "Tiempo aleatorio", de: "Zufälliges Timing", nl: "Willekeurige timing"}
            ],
            correct: 0,
            explanation: {
                en: "The doubling window is the equity range where doubling is correct - not too good to double (opponent drops correctly) and not too bad (opponent takes correctly and you're worse).",
                es: "La ventana de doblaje es el rango de equidad donde doblar es correcto - ni demasiado bueno ni demasiado malo.",
                de: "Das Verdopplungsfenster ist der Equity-Bereich wo Verdoppeln korrekt ist - weder zu gut noch zu schlecht.",
                nl: "Het verdubbelingsvenster is het equity bereik waar verdubbelen correct is - niet te goed noch te slecht."
            }
        },
        {
            question: {
                en: "What's 'post-ace-point' game plan?",
                es: "¿Cuál es el plan de juego 'post-punto-as'?",
                de: "Was ist der 'Post-Ass-Punkt' Spielplan?",
                nl: "Wat is het 'post-aas-punt' spelplan?"
            },
            options: [
                {en: "Wait for shot then run if missed", es: "Esperar tiro luego correr si falla", de: "Auf Schuss warten dann rennen wenn verfehlt", nl: "Wacht op schot dan rennen als gemist"},
                {en: "Attack immediately", es: "Atacar inmediatamente", de: "Sofort angreifen", nl: "Meteen aanvallen"},
                {en: "Build prime", es: "Construir prima", de: "Prime bauen", nl: "Prime bouwen"},
                {en: "Always hold", es: "Siempre mantener", de: "Immer halten", nl: "Altijd vasthouden"}
            ],
            correct: 0,
            explanation: {
                en: "From ace-point anchor, wait for a shot opportunity. If you hit, contain the checker. If you miss, run your back checkers immediately while opponent enters from bar.",
                es: "Desde ancla de punto as, esperar oportunidad de tiro. Si golpeas, contener. Si fallas, correr inmediatamente.",
                de: "Vom Ass-Punkt Anker auf Schusschance warten. Bei Treffer eindämmen, bei Verfehlung sofort rennen.",
                nl: "Van aas-punt anker wachten op schotkans. Bij treffer indammen, bij missen meteen rennen."
            }
        },
        {
            question: {
                en: "What's 'Clark's number' for bearoff?",
                es: "¿Qué es el 'número de Clark' para salida?",
                de: "Was ist 'Clark's Zahl' fürs Auswürfeln?",
                nl: "Wat is 'Clark's getal' voor uitspelen?"
            },
            options: [
                {en: "90 - pip count gives winning percentage", es: "90 - conteo pips da porcentaje de victoria", de: "90 - Pip-Zählung gibt Gewinnprozent", nl: "90 - pip telling geeft winpercentage"},
                {en: "Always 50%", es: "Siempre 50%", de: "Immer 50%", nl: "Altijd 50%"},
                {en: "Pip count times 2", es: "Conteo pips por 2", de: "Pip-Zählung mal 2", nl: "Pip telling keer 2"},
                {en: "No formula", es: "Sin fórmula", de: "Keine Formel", nl: "Geen formule"}
            ],
            correct: 0,
            explanation: {
                en: "Clark's number: when on roll in pure race, your winning chances are approximately (90 - your pip count) percent. Simple but surprisingly accurate for quick estimates.",
                es: "Número de Clark: cuando tienes turno en carrera pura, tus probabilidades son aproximadamente (90 - tu conteo pips) por ciento.",
                de: "Clark's Zahl: Am Zug in reinem Rennen sind Gewinnchancen etwa (90 - eigene Pip-Zählung) Prozent.",
                nl: "Clark's getal: aan beurt in pure race zijn winkansen ongeveer (90 - je pip telling) procent."
            }
        },
        {
            question: {
                en: "What's 'pay now or pay later' principle?",
                es: "¿Cuál es el principio 'pagar ahora o pagar después'?",
                de: "Was ist das 'Jetzt oder später zahlen' Prinzip?",
                nl: "Wat is het 'betaal nu of betaal later' principe?"
            },
            options: [
                {en: "Take risks early when cost is lower", es: "Tomar riesgos temprano cuando costo es menor", de: "Früh Risiken eingehen wenn Kosten niedriger", nl: "Neem risico's vroeg wanneer kosten lager zijn"},
                {en: "Never take risks", es: "Nunca tomar riesgos", de: "Nie Risiken eingehen", nl: "Nooit risico's nemen"},
                {en: "Always play safe", es: "Siempre jugar seguro", de: "Immer sicher spielen", nl: "Altijd veilig spelen"},
                {en: "Random choice", es: "Elección aleatoria", de: "Zufällige Wahl", nl: "Willekeurige keuze"}
            ],
            correct: 0,
            explanation: {
                en: "Pay now or pay later: taking calculated risks early (like leaving shots) often costs less than being forced into worse positions later. Early game shots risk singles, late game risks gammons.",
                es: "Pagar ahora o después: tomar riesgos calculados temprano cuesta menos que ser forzado a peores posiciones después.",
                de: "Jetzt oder später zahlen: Frühe kalkulierte Risiken kosten weniger als später in schlechtere Positionen gezwungen werden.",
                nl: "Betaal nu of later: berekende risico's vroeg nemen kost minder dan later in slechtere posities gedwongen worden."
            }
        },
        {
            question: {
                en: "What's the 'Isight method' for pip counting?",
                es: "¿Qué es el 'método Isight' para contar pips?",
                de: "Was ist die 'Isight-Methode' zum Pip-Zählen?",
                nl: "Wat is de 'Isight methode' voor pip tellen?"
            },
            options: [
                {en: "Count differences from starting position", es: "Contar diferencias desde posición inicial", de: "Unterschiede von Startposition zählen", nl: "Verschillen vanaf startpositie tellen"},
                {en: "Count all pips", es: "Contar todos los pips", de: "Alle Pips zählen", nl: "Alle pips tellen"},
                {en: "Estimate only", es: "Solo estimar", de: "Nur schätzen", nl: "Alleen schatten"},
                {en: "Use computer", es: "Usar computadora", de: "Computer nutzen", nl: "Computer gebruiken"}
            ],
            correct: 0,
            explanation: {
                en: "Isight method counts how each checker has moved from its starting position, then adjusts from the baseline 167. Faster than counting every pip individually.",
                es: "El método Isight cuenta cómo cada ficha se ha movido desde su posición inicial, luego ajusta desde 167 base.",
                de: "Isight-Methode zählt wie jeder Stein sich von Startposition bewegt hat, dann von 167 Basis anpassen.",
                nl: "Isight methode telt hoe elke steen vanaf startpositie bewogen is, dan aanpassen vanaf 167 basis."
            }
        },
        {
            question: {
                en: "What's 'gammon save' vs 'gammon go'?",
                es: "¿Qué es 'salvar gammon' vs 'ir por gammon'?",
                de: "Was ist 'Gammon retten' vs 'Gammon anstreben'?",
                nl: "Wat is 'gammon redden' vs 'gammon gaan'?"
            },
            options: [
                {en: "Avoiding vs pursuing gammon based on score", es: "Evitar vs perseguir gammon basado en puntaje", de: "Vermeiden vs anstreben von Gammon je nach Stand", nl: "Vermijden vs nastreven gammon op basis van score"},
                {en: "Always save", es: "Siempre salvar", de: "Immer retten", nl: "Altijd redden"},
                {en: "Always go", es: "Siempre ir", de: "Immer anstreben", nl: "Altijd gaan"},
                {en: "Random choice", es: "Elección aleatoria", de: "Zufällige Wahl", nl: "Willekeurige keuze"}
            ],
            correct: 0,
            explanation: {
                en: "Gammon save prioritizes avoiding being gammoned when it matters for match score. Gammon go aggressively pursues gammoning opponent when the extra points significantly help.",
                es: "Salvar gammon prioriza evitar ser gammoneado cuando importa para el puntaje. Ir por gammon persigue agresivamente.",
                de: "Gammon retten priorisiert Gammon-Vermeidung wenn es für Spielstand zählt. Gammon anstreben verfolgt aggressiv.",
                nl: "Gammon redden prioriteert gammon vermijden wanneer het telt voor score. Gammon gaan streeft agressief na."
            }
        },
        // Questions 81-90: Tournament play and advanced concepts
        {
            question: {
                en: "What's 'clock management' in tournament play?",
                es: "¿Qué es la 'gestión del reloj' en juego de torneo?",
                de: "Was ist 'Zeitmanagement' im Turnierspiel?",
                nl: "Wat is 'klok management' in toernooispel?"
            },
            options: [
                {en: "Balancing speed with accuracy under time pressure", es: "Equilibrar velocidad con precisión bajo presión de tiempo", de: "Geschwindigkeit mit Genauigkeit unter Zeitdruck ausbalancieren", nl: "Snelheid met nauwkeurigheid balanceren onder tijdsdruk"},
                {en: "Playing as fast as possible", es: "Jugar lo más rápido posible", de: "So schnell wie möglich spielen", nl: "Zo snel mogelijk spelen"},
                {en: "No time limits", es: "Sin límites de tiempo", de: "Keine Zeitbegrenzung", nl: "Geen tijdslimiet"},
                {en: "Slow play always", es: "Juego lento siempre", de: "Immer langsam spielen", nl: "Altijd langzaam spelen"}
            ],
            correct: 0,
            explanation: {
                en: "Clock management involves saving time on routine plays to have more time for critical decisions. Most tournaments use 12-15 second delays with 2-3 minute reserve banks.",
                es: "La gestión del reloj implica ahorrar tiempo en jugadas rutinarias para tener más tiempo en decisiones críticas.",
                de: "Zeitmanagement bedeutet bei Routine-Zügen Zeit sparen für kritische Entscheidungen.",
                nl: "Klok management betekent tijd besparen bij routine zetten voor kritieke beslissingen."
            }
        },
        {
            question: {
                en: "What's the 'trailer's paradox' at 2-away 5-away?",
                es: "¿Cuál es la 'paradoja del perseguidor' en 2-away 5-away?",
                de: "Was ist das 'Verfolger-Paradoxon' bei 2-away 5-away?",
                nl: "Wat is de 'achtervolgers paradox' bij 2-away 5-away?"
            },
            options: [
                {en: "Should double aggressively despite being behind", es: "Debe doblar agresivamente a pesar de estar atrás", de: "Sollte aggressiv doppeln trotz Rückstand", nl: "Moet agressief verdubbelen ondanks achterstand"},
                {en: "Never double", es: "Nunca doblar", de: "Nie verdoppeln", nl: "Nooit verdubbelen"},
                {en: "Always take", es: "Siempre tomar", de: "Immer annehmen", nl: "Altijd aannemen"},
                {en: "Drop all doubles", es: "Rechazar todos los dobles", de: "Alle Doppel ablehnen", nl: "Alle verdubbelingen weigeren"}
            ],
            correct: 0,
            explanation: {
                en: "At 2-away 5-away, the trailer (behind player) should double very aggressively because winning 2 points gets to Crawford, while losing costs little extra in match equity.",
                es: "En 2-away 5-away, el perseguidor debe doblar muy agresivamente porque ganar 2 puntos llega a Crawford.",
                de: "Bei 2-away 5-away sollte der Verfolger sehr aggressiv doppeln da 2 Punkte zu Crawford führen.",
                nl: "Bij 2-away 5-away moet de achtervolger zeer agressief verdubbelen omdat 2 punten naar Crawford leidt."
            }
        },
        {
            question: {
                en: "What's 'XG Roller++' in computer analysis?",
                es: "¿Qué es 'XG Roller++' en análisis computacional?",
                de: "Was ist 'XG Roller++' in der Computeranalyse?",
                nl: "Wat is 'XG Roller++' in computer analyse?"
            },
            options: [
                {en: "Highest analysis level with extended rollouts", es: "Nivel más alto de análisis con rollouts extendidos", de: "Höchste Analysestufe mit erweiterten Rollouts", nl: "Hoogste analyse niveau met uitgebreide rollouts"},
                {en: "Basic analysis", es: "Análisis básico", de: "Basis-Analyse", nl: "Basis analyse"},
                {en: "Player name", es: "Nombre de jugador", de: "Spielername", nl: "Speler naam"},
                {en: "Tournament name", es: "Nombre de torneo", de: "Turniername", nl: "Toernooi naam"}
            ],
            correct: 0,
            explanation: {
                en: "XG Roller++ is eXtreme Gammon's highest analysis level, using 5184-trial rollouts with variance reduction. It's the gold standard for position analysis accuracy.",
                es: "XG Roller++ es el nivel más alto de análisis de eXtreme Gammon, usando 5184 pruebas con reducción de varianza.",
                de: "XG Roller++ ist eXtreme Gammon's höchste Analysestufe mit 5184 Rollouts und Varianzreduktion.",
                nl: "XG Roller++ is eXtreme Gammon's hoogste analyse niveau met 5184 rollouts en variantie reductie."
            }
        },
        {
            question: {
                en: "What's 'PRAT' in rating systems?",
                es: "¿Qué es 'PRAT' en sistemas de calificación?",
                de: "Was ist 'PRAT' in Bewertungssystemen?",
                nl: "Wat is 'PRAT' in rating systemen?"
            },
            options: [
                {en: "Performance Rating Adjusted by Time", es: "Calificación de Rendimiento Ajustada por Tiempo", de: "Performance Rating Angepasst nach Zeit", nl: "Performance Rating Aangepast voor Tijd"},
                {en: "Player Rating Average Total", es: "Total Promedio de Calificación de Jugador", de: "Spieler Bewertung Durchschnitt Gesamt", nl: "Speler Rating Gemiddelde Totaal"},
                {en: "Points Recorded After Tournament", es: "Puntos Registrados Después del Torneo", de: "Punkte Nach Turnier Aufgezeichnet", nl: "Punten Geregistreerd Na Toernooi"},
                {en: "Professional Rating Achievement Test", es: "Prueba de Logro de Calificación Profesional", de: "Professioneller Bewertungs-Leistungstest", nl: "Professionele Rating Prestatie Test"}
            ],
            correct: 0,
            explanation: {
                en: "PRAT adjusts Performance Rating based on thinking time used. Players using less time with same PR are considered stronger, reflecting practical playing strength.",
                es: "PRAT ajusta la Calificación de Rendimiento basada en el tiempo de pensamiento usado.",
                de: "PRAT passt Performance Rating basierend auf verwendete Denkzeit an.",
                nl: "PRAT past Performance Rating aan op basis van gebruikte denktijd."
            }
        },
        {
            question: {
                en: "What's 'Mochy's rule' for late game hits?",
                es: "¿Cuál es la 'regla de Mochy' para golpes tardíos?",
                de: "Was ist 'Mochy's Regel' für späte Treffer?",
                nl: "Wat is 'Mochy's regel' voor late treffers?"
            },
            options: [
                {en: "Hit when racing deficit exceeds crossovers", es: "Golpear cuando déficit en carrera excede cruces", de: "Treffen wenn Renndefizit Überquerungen übersteigt", nl: "Raken wanneer race tekort crossovers overschrijdt"},
                {en: "Never hit late", es: "Nunca golpear tarde", de: "Nie spät treffen", nl: "Nooit laat raken"},
                {en: "Always hit", es: "Siempre golpear", de: "Immer treffen", nl: "Altijd raken"},
                {en: "Random choice", es: "Elección aleatoria", de: "Zufällige Wahl", nl: "Willekeurige keuze"}
            ],
            correct: 0,
            explanation: {
                en: "Mochy's rule: in late game positions, hit when your racing deficit in pips exceeds the number of crossovers remaining. This accounts for the wastage from sending checkers back.",
                es: "Regla de Mochy: en posiciones tardías, golpear cuando tu déficit en pips excede el número de cruces restantes.",
                de: "Mochy's Regel: In späten Positionen treffen wenn Pip-Defizit die verbleibenden Überquerungen übersteigt.",
                nl: "Mochy's regel: in late game posities raken wanneer pip tekort het aantal resterende crossovers overschrijdt."
            }
        },
        {
            question: {
                en: "What's 'stick theory' in match play?",
                es: "¿Qué es la 'teoría del palo' en juego de partida?",
                de: "Was ist die 'Stock-Theorie' im Match-Spiel?",
                nl: "Wat is 'stok theorie' in match play?"
            },
            options: [
                {en: "Using cube as weapon to force errors", es: "Usar cubo como arma para forzar errores", de: "Würfel als Waffe nutzen um Fehler zu erzwingen", nl: "Kubus als wapen gebruiken om fouten te forceren"},
                {en: "Never cube", es: "Nunca cubo", de: "Nie Würfel", nl: "Nooit kubus"},
                {en: "Always take", es: "Siempre tomar", de: "Immer annehmen", nl: "Altijd aannemen"},
                {en: "Random cubing", es: "Cubo aleatorio", de: "Zufälliger Würfel", nl: "Willekeurige kubus"}
            ],
            correct: 0,
            explanation: {
                en: "Stick theory uses the cube as a 'big stick' to pressure opponents into errors. Aggressive doubling at certain scores forces difficult decisions that often lead to mistakes.",
                es: "La teoría del palo usa el cubo como 'palo grande' para presionar oponentes hacia errores.",
                de: "Stock-Theorie nutzt den Würfel als 'großen Stock' um Gegner zu Fehlern zu drängen.",
                nl: "Stok theorie gebruikt de kubus als 'grote stok' om tegenstanders tot fouten te dwingen."
            }
        },
        {
            question: {
                en: "What's 'Ballard-Weaver' correction for PR?",
                es: "¿Qué es la 'corrección Ballard-Weaver' para PR?",
                de: "Was ist die 'Ballard-Weaver' Korrektur für PR?",
                nl: "Wat is de 'Ballard-Weaver' correctie voor PR?"
            },
            options: [
                {en: "Adjusting PR for luck factor in matches", es: "Ajustar PR por factor suerte en partidas", de: "PR für Glücksfaktor in Matches anpassen", nl: "PR aanpassen voor geluksfactor in matches"},
                {en: "No adjustment", es: "Sin ajuste", de: "Keine Anpassung", nl: "Geen aanpassing"},
                {en: "Double PR", es: "Doblar PR", de: "PR verdoppeln", nl: "PR verdubbelen"},
                {en: "Ignore PR", es: "Ignorar PR", de: "PR ignorieren", nl: "PR negeren"}
            ],
            correct: 0,
            explanation: {
                en: "Ballard-Weaver correction adjusts Performance Rating for the luck factor in a match. Removes the bias where lucky players appear to play better due to easier decisions.",
                es: "La corrección Ballard-Weaver ajusta la Calificación de Rendimiento por el factor suerte en una partida.",
                de: "Ballard-Weaver Korrektur passt Performance Rating für den Glücksfaktor in einem Match an.",
                nl: "Ballard-Weaver correctie past Performance Rating aan voor de geluksfactor in een match."
            }
        },
        {
            question: {
                en: "What's 'Trice count' for position evaluation?",
                es: "¿Qué es el 'conteo Trice' para evaluación de posición?",
                de: "Was ist der 'Trice Count' für Positionsbewertung?",
                nl: "Wat is 'Trice telling' voor positie evaluatie?"
            },
            options: [
                {en: "Combining pip count with position features", es: "Combinar conteo pips con características de posición", de: "Pip-Zählung mit Positionsmerkmalen kombinieren", nl: "Pip telling combineren met positie kenmerken"},
                {en: "Just pip count", es: "Solo conteo pips", de: "Nur Pip-Zählung", nl: "Alleen pip telling"},
                {en: "Random number", es: "Número aleatorio", de: "Zufallszahl", nl: "Willekeurig getal"},
                {en: "Match score", es: "Puntaje de partida", de: "Match-Stand", nl: "Match score"}
            ],
            correct: 0,
            explanation: {
                en: "Trice count adjusts raw pip count for positional features: builders, prime strength, blot exposure, and timing. Provides more accurate position evaluation than pip count alone.",
                es: "El conteo Trice ajusta el conteo de pips crudo por características posicionales para evaluación más precisa.",
                de: "Trice Count passt rohe Pip-Zählung für Positionsmerkmale an für genauere Bewertung.",
                nl: "Trice telling past ruwe pip telling aan voor positie kenmerken voor nauwkeurigere evaluatie."
            }
        },
        {
            question: {
                en: "What's 'symmetric bearoff' principle?",
                es: "¿Cuál es el principio de 'salida simétrica'?",
                de: "Was ist das 'symmetrische Auswürfeln' Prinzip?",
                nl: "Wat is het 'symmetrisch uitspelen' principe?"
            },
            options: [
                {en: "Maintaining even distribution across points", es: "Mantener distribución pareja entre puntos", de: "Gleichmäßige Verteilung über Punkte halten", nl: "Gelijke verdeling over punten behouden"},
                {en: "Stack on low points", es: "Apilar en puntos bajos", de: "Auf niedrigen Punkten stapeln", nl: "Stapelen op lage punten"},
                {en: "Clear high points first", es: "Limpiar puntos altos primero", de: "Hohe Punkte zuerst räumen", nl: "Hoge punten eerst opruimen"},
                {en: "Random bearoff", es: "Salida aleatoria", de: "Zufälliges Auswürfeln", nl: "Willekeurig uitspelen"}
            ],
            correct: 0,
            explanation: {
                en: "Symmetric bearoff maintains checkers evenly distributed across home board points. This minimizes wastage and maximizes the number of useful rolls for bearing off.",
                es: "La salida simétrica mantiene fichas distribuidas uniformemente entre puntos del cuadrante interno.",
                de: "Symmetrisches Auswürfeln hält Steine gleichmäßig über Heimbrett-Punkte verteilt.",
                nl: "Symmetrisch uitspelen houdt stenen gelijk verdeeld over thuisbord punten."
            }
        },
        {
            question: {
                en: "What's 'GWC' vs 'GWL' in analysis?",
                es: "¿Qué es 'GWC' vs 'GWL' en análisis?",
                de: "Was ist 'GWC' vs 'GWL' in der Analyse?",
                nl: "Wat is 'GWC' vs 'GWL' in analyse?"
            },
            options: [
                {en: "Gammon Win/Lose Chances percentages", es: "Porcentajes de probabilidades de ganar/perder Gammon", de: "Gammon Gewinn/Verlust Chancen Prozentsätze", nl: "Gammon Win/Verlies Kansen percentages"},
                {en: "Game Win Count", es: "Conteo de victorias de juego", de: "Spiel Gewinn Zählung", nl: "Spel Win Telling"},
                {en: "General Win Calculation", es: "Cálculo general de victoria", de: "Allgemeine Gewinn Berechnung", nl: "Algemene Win Berekening"},
                {en: "Global Win Chart", es: "Gráfico global de victoria", de: "Globales Gewinn Diagramm", nl: "Globale Win Grafiek"}
            ],
            correct: 0,
            explanation: {
                en: "GWC (Gammon Win Chances) and GWL (Gammon Lose Chances) show the probability of winning or losing by gammon/backgammon. Critical for cube decisions and match play strategy.",
                es: "GWC y GWL muestran la probabilidad de ganar o perder por gammon/backgammon, crítico para decisiones de cubo.",
                de: "GWC und GWL zeigen Wahrscheinlichkeit für Gammon/Backgammon Gewinn oder Verlust.",
                nl: "GWC en GWL tonen kans op winnen of verliezen door gammon/backgammon."
            }
        },
        // Questions 91-100: Expert concepts and modern innovations
        {
            question: {
                en: "What's 'neural network architecture' in modern bots?",
                es: "¿Qué es la 'arquitectura de red neuronal' en bots modernos?",
                de: "Was ist die 'neuronale Netzwerkarchitektur' in modernen Bots?",
                nl: "Wat is 'neurale netwerk architectuur' in moderne bots?"
            },
            options: [
                {en: "Multi-layer pattern recognition system", es: "Sistema de reconocimiento de patrones multicapa", de: "Mehrschichtiges Mustererkennungssystem", nl: "Multi-laag patroon herkenningssysteem"},
                {en: "Simple lookup table", es: "Tabla de búsqueda simple", de: "Einfache Nachschlagetabelle", nl: "Simpele opzoektabel"},
                {en: "Random generator", es: "Generador aleatorio", de: "Zufallsgenerator", nl: "Willekeurige generator"},
                {en: "Database only", es: "Solo base de datos", de: "Nur Datenbank", nl: "Alleen database"}
            ],
            correct: 0,
            explanation: {
                en: "Modern backgammon bots use neural networks with multiple hidden layers to evaluate positions. These networks learn patterns from millions of positions through self-play training.",
                es: "Los bots modernos usan redes neuronales con múltiples capas ocultas para evaluar posiciones.",
                de: "Moderne Bots nutzen neuronale Netze mit mehreren versteckten Schichten zur Positionsbewertung.",
                nl: "Moderne bots gebruiken neurale netwerken met meerdere verborgen lagen voor positie evaluatie."
            }
        },
        {
            question: {
                en: "What's 'volatility' measuring in positions?",
                es: "¿Qué mide la 'volatilidad' en posiciones?",
                de: "Was misst 'Volatilität' in Positionen?",
                nl: "Wat meet 'volatiliteit' in posities?"
            },
            options: [
                {en: "How much equity changes with different rolls", es: "Cuánto cambia la equidad con diferentes tiradas", de: "Wie stark sich Equity mit verschiedenen Würfen ändert", nl: "Hoeveel equity verandert met verschillende worpen"},
                {en: "Speed of play", es: "Velocidad de juego", de: "Spielgeschwindigkeit", nl: "Speelsnelheid"},
                {en: "Number of checkers", es: "Número de fichas", de: "Anzahl der Steine", nl: "Aantal stenen"},
                {en: "Match score", es: "Puntaje de partida", de: "Match-Stand", nl: "Match score"}
            ],
            correct: 0,
            explanation: {
                en: "Volatility measures how dramatically equity swings with different dice rolls. High volatility positions favor the underdog and affect cube decisions significantly.",
                es: "La volatilidad mide cuán dramáticamente oscila la equidad con diferentes tiradas de dados.",
                de: "Volatilität misst wie dramatisch sich Equity mit verschiedenen Würfeln ändert.",
                nl: "Volatiliteit meet hoe dramatisch equity schommelt met verschillende dobbelsteenworpen."
            }
        },
        {
            question: {
                en: "What's 'Kleinman count' measuring?",
                es: "¿Qué mide el 'conteo Kleinman'?",
                de: "Was misst der 'Kleinman Count'?",
                nl: "Wat meet de 'Kleinman telling'?"
            },
            options: [
                {en: "Race efficiency including gaps and stacks", es: "Eficiencia de carrera incluyendo huecos y pilas", de: "Renneffizienz einschließlich Lücken und Stapel", nl: "Race efficiëntie inclusief gaten en stapels"},
                {en: "Simple pip count", es: "Conteo simple de pips", de: "Einfache Pip-Zählung", nl: "Simpele pip telling"},
                {en: "Cube value", es: "Valor del cubo", de: "Würfelwert", nl: "Kubus waarde"},
                {en: "Match equity", es: "Equidad de partida", de: "Match-Equity", nl: "Match equity"}
            ],
            correct: 0,
            explanation: {
                en: "Kleinman count adjusts pip count for racing efficiency by adding penalties for gaps, stacks, and checkers on low points. More accurate than raw pip count for race evaluation.",
                es: "El conteo Kleinman ajusta el conteo de pips por eficiencia añadiendo penalizaciones por huecos y pilas.",
                de: "Kleinman Count passt Pip-Zählung für Renneffizienz an mit Strafen für Lücken und Stapel.",
                nl: "Kleinman telling past pip telling aan voor race efficiëntie met straffen voor gaten en stapels."
            }
        },
        {
            question: {
                en: "What's 'cube leverage' in match play?",
                es: "¿Qué es el 'apalancamiento del cubo' en juego de partida?",
                de: "Was ist 'Würfel-Hebelwirkung' im Match-Spiel?",
                nl: "Wat is 'kubus hefboomwerking' in match play?"
            },
            options: [
                {en: "How much cube value varies with score", es: "Cuánto varía el valor del cubo con el puntaje", de: "Wie stark Würfelwert mit Spielstand variiert", nl: "Hoeveel kubus waarde varieert met score"},
                {en: "Fixed at 2x", es: "Fijo en 2x", de: "Fest bei 2x", nl: "Vast op 2x"},
                {en: "No variation", es: "Sin variación", de: "Keine Variation", nl: "Geen variatie"},
                {en: "Random factor", es: "Factor aleatorio", de: "Zufallsfaktor", nl: "Willekeurige factor"}
            ],
            correct: 0,
            explanation: {
                en: "Cube leverage describes how cube value changes based on match score. At some scores doubling has huge leverage (like 2-away 2-away), at others minimal impact.",
                es: "El apalancamiento del cubo describe cómo el valor del cubo cambia según el puntaje de la partida.",
                de: "Würfel-Hebelwirkung beschreibt wie Würfelwert sich basierend auf Match-Stand ändert.",
                nl: "Kubus hefboomwerking beschrijft hoe kubus waarde verandert op basis van match score."
            }
        },
        {
            question: {
                en: "What's 'reference position' in cube theory?",
                es: "¿Qué es la 'posición de referencia' en teoría del cubo?",
                de: "Was ist die 'Referenzposition' in der Würfeltheorie?",
                nl: "Wat is 'referentie positie' in kubus theorie?"
            },
            options: [
                {en: "Standard positions for cube action points", es: "Posiciones estándar para puntos de acción del cubo", de: "Standardpositionen für Würfel-Aktionspunkte", nl: "Standaard posities voor kubus actie punten"},
                {en: "Starting position", es: "Posición inicial", de: "Startposition", nl: "Startpositie"},
                {en: "Random position", es: "Posición aleatoria", de: "Zufällige Position", nl: "Willekeurige positie"},
                {en: "Ending position", es: "Posición final", de: "Endposition", nl: "Eindpositie"}
            ],
            correct: 0,
            explanation: {
                en: "Reference positions are well-studied positions that serve as benchmarks for cube decisions. Knowing key reference positions helps evaluate similar positions quickly.",
                es: "Las posiciones de referencia son posiciones bien estudiadas que sirven como puntos de referencia para decisiones del cubo.",
                de: "Referenzpositionen sind gut studierte Positionen die als Maßstab für Würfelentscheidungen dienen.",
                nl: "Referentie posities zijn goed bestudeerde posities die als maatstaf voor kubus beslissingen dienen."
            }
        },
        {
            question: {
                en: "What's 'efficient doubling' principle?",
                es: "¿Cuál es el principio de 'doblaje eficiente'?",
                de: "Was ist das 'effiziente Verdopplung' Prinzip?",
                nl: "Wat is het 'efficiënt verdubbelen' principe?"
            },
            options: [
                {en: "Double when you lose market by improving", es: "Doblar cuando pierdes mercado al mejorar", de: "Verdoppeln wenn man durch Verbesserung Markt verliert", nl: "Verdubbelen wanneer je markt verliest door verbetering"},
                {en: "Always double early", es: "Siempre doblar temprano", de: "Immer früh verdoppeln", nl: "Altijd vroeg verdubbelen"},
                {en: "Never double", es: "Nunca doblar", de: "Nie verdoppeln", nl: "Nooit verdubbelen"},
                {en: "Random timing", es: "Tiempo aleatorio", de: "Zufälliges Timing", nl: "Willekeurige timing"}
            ],
            correct: 0,
            explanation: {
                en: "Efficient doubling means offering when you're about to lose your market - opponent will drop if you improve further. Maximizes cube value without giving unnecessary winning chances.",
                es: "El doblaje eficiente significa ofrecer cuando estás por perder tu mercado - el oponente rechazará si mejoras más.",
                de: "Effiziente Verdopplung bedeutet anzubieten wenn man seinen Markt verliert - Gegner wird bei Verbesserung ablehnen.",
                nl: "Efficiënt verdubbelen betekent aanbieden wanneer je je markt verliest - tegenstander zal weigeren bij verbetering."
            }
        },
        {
            question: {
                en: "What's 'Sho Sengoku count' for racing?",
                es: "¿Qué es el 'conteo Sho Sengoku' para carrera?",
                de: "Was ist der 'Sho Sengoku Count' fürs Rennen?",
                nl: "Wat is de 'Sho Sengoku telling' voor racen?"
            },
            options: [
                {en: "Half-crossover adjustments for accuracy", es: "Ajustes de medio cruce para precisión", de: "Halbe-Überquerung Anpassungen für Genauigkeit", nl: "Halve-crossover aanpassingen voor nauwkeurigheid"},
                {en: "Full pip count", es: "Conteo completo de pips", de: "Volle Pip-Zählung", nl: "Volledige pip telling"},
                {en: "No adjustments", es: "Sin ajustes", de: "Keine Anpassungen", nl: "Geen aanpassingen"},
                {en: "Double counting", es: "Conteo doble", de: "Doppelte Zählung", nl: "Dubbele telling"}
            ],
            correct: 0,
            explanation: {
                en: "Sho Sengoku count uses half-crossovers (counting mid-quadrant positions) for more accurate racing evaluation. Particularly useful in close races where precision matters.",
                es: "El conteo Sho Sengoku usa medios cruces para evaluación de carrera más precisa en carreras cerradas.",
                de: "Sho Sengoku Count nutzt halbe Überquerungen für genauere Rennbewertung in knappen Rennen.",
                nl: "Sho Sengoku telling gebruikt halve crossovers voor nauwkeurigere race evaluatie in krappe races."
            }
        },
        {
            question: {
                en: "What's 'contact synergy' concept?",
                es: "¿Qué es el concepto de 'sinergia de contacto'?",
                de: "Was ist das 'Kontakt-Synergie' Konzept?",
                nl: "Wat is het 'contact synergie' concept?"
            },
            options: [
                {en: "Checkers working together in contact positions", es: "Fichas trabajando juntas en posiciones de contacto", de: "Steine arbeiten zusammen in Kontaktpositionen", nl: "Stenen werken samen in contact posities"},
                {en: "Breaking contact", es: "Romper contacto", de: "Kontakt brechen", nl: "Contact verbreken"},
                {en: "Pure race", es: "Carrera pura", de: "Reines Rennen", nl: "Pure race"},
                {en: "No contact", es: "Sin contacto", de: "Kein Kontakt", nl: "Geen contact"}
            ],
            correct: 0,
            explanation: {
                en: "Contact synergy describes how checkers support each other in contact positions - builders, points, and blot coverage working together to create threats and maintain flexibility.",
                es: "La sinergia de contacto describe cómo las fichas se apoyan entre sí en posiciones de contacto.",
                de: "Kontakt-Synergie beschreibt wie Steine sich in Kontaktpositionen gegenseitig unterstützen.",
                nl: "Contact synergie beschrijft hoe stenen elkaar ondersteunen in contact posities."
            }
        },
        {
            question: {
                en: "What's the 'Kauder paradox' in cube theory?",
                es: "¿Qué es la 'paradoja de Kauder' en teoría del cubo?",
                de: "Was ist das 'Kauder-Paradoxon' in der Würfeltheorie?",
                nl: "Wat is de 'Kauder paradox' in kubus theorie?"
            },
            options: [
                {en: "Sometimes correct to double when behind", es: "A veces correcto doblar cuando estás atrás", de: "Manchmal korrekt zu verdoppeln wenn hinten", nl: "Soms correct om te verdubbelen wanneer achter"},
                {en: "Never double when behind", es: "Nunca doblar cuando atrás", de: "Nie verdoppeln wenn hinten", nl: "Nooit verdubbelen wanneer achter"},
                {en: "Always double ahead", es: "Siempre doblar adelante", de: "Immer verdoppeln wenn vorne", nl: "Altijd verdubbelen wanneer voor"},
                {en: "No paradox exists", es: "No existe paradoja", de: "Kein Paradoxon existiert", nl: "Geen paradox bestaat"}
            ],
            correct: 0,
            explanation: {
                en: "Kauder paradox: in highly volatile positions with gammon chances, it can be correct to double even when slightly behind in equity. The cube leverage compensates for the disadvantage.",
                es: "Paradoja de Kauder: en posiciones muy volátiles puede ser correcto doblar incluso estando ligeramente atrás.",
                de: "Kauder-Paradoxon: in hochvolatilen Positionen kann Verdoppeln korrekt sein auch wenn leicht hinten.",
                nl: "Kauder paradox: in zeer volatiele posities kan verdubbelen correct zijn zelfs wanneer licht achter."
            }
        },
        {
            question: {
                en: "What's 'Snowie 4.0 benchmark' in analysis?",
                es: "¿Qué es el 'punto de referencia Snowie 4.0' en análisis?",
                de: "Was ist der 'Snowie 4.0 Benchmark' in der Analyse?",
                nl: "Wat is de 'Snowie 4.0 benchmark' in analyse?"
            },
            options: [
                {en: "Historic standard for position evaluation", es: "Estándar histórico para evaluación de posición", de: "Historischer Standard für Positionsbewertung", nl: "Historische standaard voor positie evaluatie"},
                {en: "Current best bot", es: "Mejor bot actual", de: "Aktuell bester Bot", nl: "Huidige beste bot"},
                {en: "Beginner level", es: "Nivel principiante", de: "Anfängerlevel", nl: "Beginner niveau"},
                {en: "Random play", es: "Juego aleatorio", de: "Zufälliges Spiel", nl: "Willekeurig spel"}
            ],
            correct: 0,
            explanation: {
                en: "Snowie 4.0 was the benchmark bot for many years, establishing standards for position evaluation. While surpassed by XG and GNU, many concepts still reference Snowie's evaluations.",
                es: "Snowie 4.0 fue el bot de referencia por muchos años, estableciendo estándares para evaluación de posiciones.",
                de: "Snowie 4.0 war jahrelang der Benchmark-Bot und etablierte Standards für Positionsbewertung.",
                nl: "Snowie 4.0 was jarenlang de benchmark bot en stelde standaarden voor positie evaluatie."
            }
        }
    ]
};