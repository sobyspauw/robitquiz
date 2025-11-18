// Backgammon Quiz - Level 4: Expert
(function() {
  const level4 = {
    name: {
      en: "Backgammon - Expert",
      es: "Backgammon - Experto",
      de: "Backgammon - Experte",
      nl: "Backgammon - Expert"
    },
    questions: [
      {
        question: {
          en: "What is 'slotting' in backgammon strategy?",
          es: "¿Qué es 'slotting' en la estrategia de backgammon?",
          de: "Was ist 'Slotting' in der Backgammon-Strategie?",
          nl: "Wat is 'slotting' in backgammon strategie?"
        },
        options: [
          { en: "Placing a single checker on a point to make it next turn", es: "Colocar una sola ficha en un punto para hacerlo en el siguiente turno", de: "Einen einzelnen Stein auf einen Punkt setzen um ihn im nächsten Zug zu machen", nl: "Een enkele steen op een punt plaatsen om het de volgende beurt te maken" },
          { en: "Removing checkers", es: "Quitar fichas", de: "Steine entfernen", nl: "Stenen verwijderen" },
          { en: "Blocking opponent", es: "Bloquear oponente", de: "Gegner blockieren", nl: "Tegenstander blokkeren" },
          { en: "Stacking checkers high", es: "Apilar fichas alto", de: "Steine hoch stapeln", nl: "Stenen hoog stapelen" }
        ],
        correct: 0,
        explanation: {
          en: "Slotting means placing a single checker (blot) on a valuable point you want to make, accepting the risk of being hit. It's most commonly done on your 5-point or bar point in the opening. If not hit, you can cover it next turn to make the point.",
          es: "Slotting significa colocar una sola ficha (blot) en un punto valioso que quieres hacer, aceptando el riesgo de ser golpeado. Se hace más comúnmente en tu punto 5 o punto de barra en la apertura. Si no es golpeado, puedes cubrirlo en el siguiente turno para hacer el punto.",
          de: "Slotting bedeutet einen einzelnen Stein (Blot) auf einen wertvollen Punkt zu setzen den Sie machen wollen, wobei Sie das Risiko akzeptieren geschlagen zu werden. Es wird am häufigsten auf Ihrem 5-Punkt oder Bar-Punkt in der Eröffnung gemacht. Wenn nicht geschlagen können Sie ihn im nächsten Zug abdecken um den Punkt zu machen.",
          nl: "Slotting betekent een enkele steen (blot) plaatsen op een waardevol punt dat je wilt maken, waarbij je het risico accepteert geraakt te worden. Het wordt meestal gedaan op je 5-punt of bar punt bij de opening. Als het niet geraakt wordt, kun je het de volgende beurt dekken om het punt te maken."
        }
      },
      {
        question: {
          en: "What is a 'running game' position?",
          es: "¿Qué es una posición de 'juego de carrera'?",
          de: "Was ist eine 'Rennspiel'-Position?",
          nl: "Wat is een 'renspel' positie?"
        },
        options: [
          { en: "When both players have escaped back checkers and race home", es: "Cuando ambos jugadores han escapado fichas traseras y corren a casa", de: "Wenn beide Spieler ihre hinteren Steine entkommen sind und nach Hause rennen", nl: "Wanneer beide spelers achterste stenen zijn ontsnapt en naar huis racen" },
          { en: "Running away", es: "Huir", de: "Weglaufen", nl: "Wegrennen" },
          { en: "Fast game", es: "Juego rápido", de: "Schnelles Spiel", nl: "Snel spel" },
          { en: "Exercise position", es: "Posición de ejercicio", de: "Übungsposition", nl: "Oefenpositie" }
        ],
        correct: 0,
        explanation: {
          en: "A running game occurs when both players have successfully escaped their back checkers from the opponent's home board. The game becomes a race with minimal or no contact, decided primarily by pip count and dice rolls.",
          es: "Un juego de carrera ocurre cuando ambos jugadores han escapado exitosamente sus fichas traseras del tablero de casa del oponente. El juego se convierte en una carrera con mínimo o ningún contacto, decidido principalmente por el conteo de pips y las tiradas de dados.",
          de: "Ein Rennspiel entsteht wenn beide Spieler ihre hinteren Steine erfolgreich aus dem Heimfeld des Gegners entkommen sind. Das Spiel wird zu einem Rennen mit minimalem oder keinem Kontakt, hauptsächlich durch Pip-Zählung und Würfelwürfe entschieden.",
          nl: "Een renspel vindt plaats wanneer beide spelers hun achterste stenen succesvol uit het thuisbord van de tegenstander hebben laten ontsnappen. Het spel wordt een race met minimaal of geen contact, voornamelijk beslist door pip count en dobbelsteenworpen."
        }
      },
      {
        question: {
          en: "What does 'splitting' your back checkers mean?",
          es: "¿Qué significa 'dividir' tus fichas traseras?",
          de: "Was bedeutet 'Aufteilen' Ihrer hinteren Steine?",
          nl: "Wat betekent 'splitsen' van je achterste stenen?"
        },
        options: [
          { en: "Moving one back checker forward from opponent's 1-point anchor", es: "Mover una ficha trasera hacia adelante desde el ancla del punto 1 del oponente", de: "Einen hinteren Stein vom 1-Punkt-Anker des Gegners vorwärts bewegen", nl: "Een achterste steen vooruit bewegen vanaf het 1-punt anker van de tegenstander" },
          { en: "Breaking all anchors", es: "Romper todos los anclajes", de: "Alle Anker brechen", nl: "Alle ankers breken" },
          { en: "Dividing your checkers equally", es: "Dividir tus fichas equitativamente", de: "Ihre Steine gleichmäßig teilen", nl: "Je stenen gelijk verdelen" },
          { en: "Separating pieces physically", es: "Separar piezas físicamente", de: "Stücke physisch trennen", nl: "Stukken fysiek scheiden" }
        ],
        correct: 0,
        explanation: {
          en: "Splitting means moving one of your two back checkers forward from your opponent's 1-point, typically to their 2, 3, or 4-point. This aggressive play improves your chances to make an advanced anchor or escape, but risks getting hit and creating more contact.",
          es: "Dividir significa mover una de tus dos fichas traseras hacia adelante desde el punto 1 de tu oponente, típicamente a su punto 2, 3 o 4. Esta jugada agresiva mejora tus posibilidades de hacer un ancla avanzada o escapar, pero arriesga ser golpeado y crear más contacto.",
          de: "Aufteilen bedeutet einen Ihrer zwei hinteren Steine vom 1-Punkt Ihres Gegners vorwärts zu bewegen, typischerweise zu seinem 2-, 3- oder 4-Punkt. Dieses aggressive Spiel verbessert Ihre Chancen einen fortgeschrittenen Anker zu machen oder zu entkommen, riskiert aber geschlagen zu werden und mehr Kontakt zu schaffen.",
          nl: "Splitsen betekent een van je twee achterste stenen vooruit bewegen vanaf het 1-punt van je tegenstander, typisch naar hun 2, 3, of 4-punt. Dit aggressieve spel verbetert je kansen om een gevorderd anker te maken of te ontsnappen, maar riskeert geraakt te worden en meer contact te creëren."
        }
      },
      {
        question: {
          en: "What is a 'holding game'?",
          es: "¿Qué es un 'juego de retención'?",
          de: "Was ist ein 'Haltespiel'?",
          nl: "Wat is een 'vasthoudspel'?"
        },
        options: [
          { en: "Maintaining an anchor while opponent brings checkers home", es: "Mantener un ancla mientras el oponente trae fichas a casa", de: "Einen Anker halten während Gegner Steine nach Hause bringt", nl: "Een anker behouden terwijl tegenstander stenen naar huis brengt" },
          { en: "Holding the doubling cube", es: "Sostener el cubo de doblar", de: "Den Dopplungswürfel halten", nl: "De verdubbeldobbelsteen vasthouden" },
          { en: "Not moving checkers", es: "No mover fichas", de: "Steine nicht bewegen", nl: "Stenen niet bewegen" },
          { en: "Gripping the board", es: "Agarrar el tablero", de: "Das Brett greifen", nl: "Het bord vastgrijpen" }
        ],
        correct: 0,
        explanation: {
          en: "A holding game is when you maintain an anchor (usually advanced) in your opponent's board while they bring their checkers around. You hope to hit a late shot when they're forced to break their home board, potentially winning the game from behind.",
          es: "Un juego de retención es cuando mantienes un ancla (usualmente avanzada) en el tablero de tu oponente mientras traen sus fichas. Esperas golpear un tiro tardío cuando se vean obligados a romper su tablero de casa, potencialmente ganando el juego desde atrás.",
          de: "Ein Haltespiel ist wenn Sie einen Anker (normalerweise fortgeschritten) im Brett Ihres Gegners halten während sie ihre Steine herumbringen. Sie hoffen einen späten Treffer zu landen wenn sie gezwungen sind ihr Heimfeld zu brechen, möglicherweise das Spiel von hinten gewinnend.",
          nl: "Een vasthoudspel is wanneer je een anker (meestal gevorderd) in het bord van je tegenstander behoudt terwijl zij hun stenen rondmaken. Je hoopt een late treffer te maken wanneer ze gedwongen worden hun thuisbord te breken, mogelijk het spel van achter winnend."
        }
      },
      {
        question: {
          en: "What is 'timing' in backgammon?",
          es: "¿Qué es el 'timing' en backgammon?",
          de: "Was ist 'Timing' im Backgammon?",
          nl: "Wat is 'timing' in backgammon?"
        },
        options: [
          { en: "Having enough checkers to move while waiting for opportunity", es: "Tener suficientes fichas para mover mientras esperas una oportunidad", de: "Genug Steine zum Bewegen haben während man auf Gelegenheit wartet", nl: "Genoeg stenen hebben om te bewegen terwijl je wacht op een kans" },
          { en: "Game duration", es: "Duración del juego", de: "Spieldauer", nl: "Spelduur" },
          { en: "Using a timer", es: "Usar un temporizador", de: "Einen Timer verwenden", nl: "Een timer gebruiken" },
          { en: "Speed of play", es: "Velocidad de juego", de: "Spielgeschwindigkeit", nl: "Spelsnelheid" }
        ],
        correct: 0,
        explanation: {
          en: "Timing refers to having enough spare checkers to make useful moves while maintaining your position. Good timing means you won't be forced to break key points prematurely. Poor timing forces you to wreck your position before getting your shot.",
          es: "El timing se refiere a tener suficientes fichas de repuesto para hacer movimientos útiles mientras mantienes tu posición. Buen timing significa que no te verás obligado a romper puntos clave prematuramente. Mal timing te obliga a arruinar tu posición antes de conseguir tu tiro.",
          de: "Timing bezieht sich darauf genug Reservesteine zu haben um nützliche Züge zu machen während Sie Ihre Position halten. Gutes Timing bedeutet dass Sie nicht gezwungen werden wichtige Punkte vorzeitig zu brechen. Schlechtes Timing zwingt Sie Ihre Position zu ruinieren bevor Sie Ihren Treffer bekommen.",
          nl: "Timing verwijst naar het hebben van genoeg reserve stenen om nuttige zetten te maken terwijl je je positie behoudt. Goede timing betekent dat je niet gedwongen wordt belangrijke punten voortijdig te breken. Slechte timing dwingt je je positie te vernietigen voordat je je treffer krijgt."
        }
      },
      {
        question: {
          en: "What are 'builders' in your position?",
          es: "¿Qué son los 'constructores' en tu posición?",
          de: "Was sind 'Erbauer' in Ihrer Position?",
          nl: "Wat zijn 'bouwers' in je positie?"
        },
        options: [
          { en: "Checkers positioned to make key points on future rolls", es: "Fichas posicionadas para hacer puntos clave en tiradas futuras", de: "Steine positioniert um Schlüsselpunkte bei zukünftigen Würfen zu machen", nl: "Stenen gepositioneerd om belangrijke punten te maken bij toekomstige worpen" },
          { en: "Construction workers", es: "Trabajadores de construcción", de: "Bauarbeiter", nl: "Bouwvakkers" },
          { en: "Strongest checkers", es: "Fichas más fuertes", de: "Stärkste Steine", nl: "Sterkste stenen" },
          { en: "Board makers", es: "Fabricantes de tableros", de: "Brett-Hersteller", nl: "Bordmakers" }
        ],
        correct: 0,
        explanation: {
          en: "Builders are checkers positioned on points like your 8-point or 11-point (midpoint) that are within range of making valuable points in your home board. Having multiple builders increases your chances of making key points like your 4-point or 5-point.",
          es: "Los constructores son fichas posicionadas en puntos como tu punto 8 u 11 (punto medio) que están dentro del rango para hacer puntos valiosos en tu tablero de casa. Tener múltiples constructores aumenta tus posibilidades de hacer puntos clave como tu punto 4 o 5.",
          de: "Erbauer sind Steine die auf Punkten wie Ihrem 8-Punkt oder 11-Punkt (Mittelpunkt) positioniert sind die in Reichweite sind um wertvolle Punkte in Ihrem Heimfeld zu machen. Mehrere Erbauer zu haben erhöht Ihre Chancen Schlüsselpunkte wie Ihren 4-Punkt oder 5-Punkt zu machen.",
          nl: "Bouwers zijn stenen gepositioneerd op punten zoals je 8-punt of 11-punt (middelpunt) die binnen bereik zijn om waardevolle punten te maken in je thuisbord. Meerdere bouwers hebben vergroot je kansen om belangrijke punten te maken zoals je 4-punt of 5-punt."
        }
      },
      {
        question: {
          en: "What does it mean to 'leave a shot'?",
          es: "¿Qué significa 'dejar un tiro'?",
          de: "Was bedeutet 'einen Schuss lassen'?",
          nl: "Wat betekent het 'een schot laten'?"
        },
        options: [
          { en: "Leaving a blot within hitting range of opponent's checkers", es: "Dejar un blot dentro del rango de golpe de las fichas del oponente", de: "Einen Blot in Schlagreichweite der gegnerischen Steine lassen", nl: "Een blot binnen bereik laten van tegenstanders stenen" },
          { en: "Missing an opportunity", es: "Perder una oportunidad", de: "Eine Gelegenheit verpassen", nl: "Een kans missen" },
          { en: "Taking a photograph", es: "Tomar una fotografía", de: "Ein Foto machen", nl: "Een foto maken" },
          { en: "Removing checkers", es: "Quitar fichas", de: "Steine entfernen", nl: "Stenen verwijderen" }
        ],
        correct: 0,
        explanation: {
          en: "Leaving a shot means leaving one or more blots within range (1-6 pips away) of your opponent's checkers. Sometimes you must leave shots due to forced moves, or you might leave them intentionally (like slotting) to gain a positional advantage.",
          es: "Dejar un tiro significa dejar uno o más blots dentro del rango (1-6 pips de distancia) de las fichas de tu oponente. A veces debes dejar tiros debido a movimientos forzados, o podrías dejarlos intencionalmente (como slotting) para ganar una ventaja posicional.",
          de: "Einen Schuss lassen bedeutet einen oder mehrere Blots in Reichweite (1-6 Pips entfernt) der gegnerischen Steine zu lassen. Manchmal müssen Sie Schüsse lassen aufgrund erzwungener Züge, oder Sie lassen sie absichtlich (wie Slotting) um einen Positionsvorteil zu gewinnen.",
          nl: "Een schot laten betekent een of meer blots binnen bereik (1-6 pips afstand) van je tegenstanders stenen laten. Soms moet je schoten laten door gedwongen zetten, of je zou ze opzettelijk kunnen laten (zoals slotting) om een positioneel voordeel te krijgen."
        }
      },
      {
        question: {
          en: "What is a 'direct shot' vs 'indirect shot'?",
          es: "¿Qué es un 'tiro directo' vs 'tiro indirecto'?",
          de: "Was ist ein 'direkter Schuss' vs 'indirekter Schuss'?",
          nl: "Wat is een 'direct schot' vs 'indirect schot'?"
        },
        options: [
          { en: "Direct: 6 or fewer pips away (one die); Indirect: 7+ pips (both dice)", es: "Directo: 6 o menos pips (un dado); Indirecto: 7+ pips (ambos dados)", de: "Direkt: 6 oder weniger Pips (ein Würfel); Indirekt: 7+ Pips (beide Würfel)", nl: "Direct: 6 of minder pips (één dobbelsteen); Indirect: 7+ pips (beide dobbelstenen)" },
          { en: "Direct: straight line; Indirect: diagonal", es: "Directo: línea recta; Indirecto: diagonal", de: "Direkt: gerade Linie; Indirekt: diagonal", nl: "Direct: rechte lijn; Indirect: diagonaal" },
          { en: "Direct: immediate; Indirect: next turn", es: "Directo: inmediato; Indirecto: siguiente turno", de: "Direkt: sofort; Indirekt: nächster Zug", nl: "Direct: onmiddellijk; Indirect: volgende beurt" },
          { en: "Direct: front; Indirect: back", es: "Directo: frente; Indirecto: atrás", de: "Direkt: vorne; Indirekt: hinten", nl: "Direct: voor; Indirect: achter" }
        ],
        correct: 0,
        explanation: {
          en: "A direct shot is when your blot is 6 or fewer pips away from an opponent's checker, making it hittable with a single die. An indirect shot is 7 or more pips away, requiring both dice to hit. Direct shots are about 3 times more likely to be hit than indirect shots.",
          es: "Un tiro directo es cuando tu blot está a 6 o menos pips de una ficha del oponente, haciéndolo golpeable con un solo dado. Un tiro indirecto está a 7 o más pips, requiriendo ambos dados para golpear. Los tiros directos son aproximadamente 3 veces más probables de ser golpeados que los indirectos.",
          de: "Ein direkter Schuss ist wenn Ihr Blot 6 oder weniger Pips von einem gegnerischen Stein entfernt ist, was ihn mit einem einzelnen Würfel schlagbar macht. Ein indirekter Schuss ist 7 oder mehr Pips entfernt und erfordert beide Würfel zum Schlagen. Direkte Schüsse werden etwa 3-mal häufiger getroffen als indirekte Schüsse.",
          nl: "Een direct schot is wanneer je blot 6 of minder pips van een steen van de tegenstander is, waardoor het raakbaar is met één dobbelsteen. Een indirect schot is 7 of meer pips weg, wat beide dobbelstenen vereist om te raken. Directe schoten worden ongeveer 3 keer vaker geraakt dan indirecte schoten."
        }
      },
      {
        question: {
          en: "What is 'stacking' and why is it generally bad?",
          es: "¿Qué es 'apilar' y por qué es generalmente malo?",
          de: "Was ist 'Stapeln' und warum ist es generell schlecht?",
          nl: "Wat is 'stapelen' en waarom is het over het algemeen slecht?"
        },
        options: [
          { en: "Having many checkers on one point wastes checker mobility", es: "Tener muchas fichas en un punto desperdicia la movilidad de las fichas", de: "Viele Steine auf einem Punkt zu haben verschwendet Steinmobilität", nl: "Veel stenen op één punt hebben verspilt steenmobiliteit" },
          { en: "Building towers", es: "Construir torres", de: "Türme bauen", nl: "Torens bouwen" },
          { en: "Putting pieces away", es: "Guardar piezas", de: "Stücke weglegen", nl: "Stukken opbergen" },
          { en: "Organizing checkers", es: "Organizar fichas", de: "Steine organisieren", nl: "Stenen organiseren" }
        ],
        correct: 0,
        explanation: {
          en: "Stacking means having too many checkers (usually 4+) on a single point. This is inefficient because only 2 checkers are needed to own a point - the extra checkers lose mobility and can't help make other points or escape. It's especially bad in the opening and midgame.",
          es: "Apilar significa tener demasiadas fichas (usualmente 4+) en un solo punto. Esto es ineficiente porque solo se necesitan 2 fichas para poseer un punto - las fichas extra pierden movilidad y no pueden ayudar a hacer otros puntos o escapar. Es especialmente malo en la apertura y el juego medio.",
          de: "Stapeln bedeutet zu viele Steine (normalerweise 4+) auf einem einzelnen Punkt zu haben. Dies ist ineffizient weil nur 2 Steine benötigt werden um einen Punkt zu besitzen - die zusätzlichen Steine verlieren Mobilität und können nicht helfen andere Punkte zu machen oder zu entkommen. Es ist besonders schlecht in der Eröffnung und im Mittelspiel.",
          nl: "Stapelen betekent te veel stenen (meestal 4+) op een enkel punt hebben. Dit is inefficiënt omdat slechts 2 stenen nodig zijn om een punt te bezitten - de extra stenen verliezen mobiliteit en kunnen niet helpen andere punten te maken of te ontsnappen. Het is vooral slecht in de opening en midgame."
        }
      },
      {
        question: {
          en: "What is the 'golden point' and why is it valuable?",
          es: "¿Qué es el 'punto dorado' y por qué es valioso?",
          de: "Was ist der 'goldene Punkt' und warum ist er wertvoll?",
          nl: "Wat is het 'gouden punt' en waarom is het waardevol?"
        },
        options: [
          { en: "Your 5-point (or opponent's 20-point) - most valuable point to own", es: "Tu punto 5 (o punto 20 del oponente) - el punto más valioso para poseer", de: "Ihr 5-Punkt (oder 20-Punkt des Gegners) - wertvollster Punkt zum Besitzen", nl: "Je 5-punt (of 20-punt van tegenstander) - meest waardevolle punt om te bezitten" },
          { en: "Point worth gold", es: "Punto que vale oro", de: "Punkt der Gold wert ist", nl: "Punt dat goud waard is" },
          { en: "Your 1-point", es: "Tu punto 1", de: "Ihr 1-Punkt", nl: "Je 1-punt" },
          { en: "The bar point", es: "El punto de barra", de: "Der Bar-Punkt", nl: "Het bar punt" }
        ],
        correct: 0,
        explanation: {
          en: "The golden point is your 5-point in your home board (point 5 from your perspective, point 20 from opponent's perspective). It's the most valuable point because it's optimally positioned for both blocking and building a prime. Making your 5-point early is a top priority.",
          es: "El punto dorado es tu punto 5 en tu tablero de casa (punto 5 desde tu perspectiva, punto 20 desde la perspectiva del oponente). Es el punto más valioso porque está óptimamente posicionado tanto para bloquear como para construir una prima. Hacer tu punto 5 temprano es una prioridad máxima.",
          de: "Der goldene Punkt ist Ihr 5-Punkt in Ihrem Heimfeld (Punkt 5 aus Ihrer Perspektive, Punkt 20 aus Perspektive des Gegners). Er ist der wertvollste Punkt weil er optimal für Blockieren und Prime-Aufbau positioniert ist. Ihren 5-Punkt früh zu machen ist oberste Priorität.",
          nl: "Het gouden punt is je 5-punt in je thuisbord (punt 5 vanuit jouw perspectief, punt 20 vanuit perspectief van tegenstander). Het is het meest waardevolle punt omdat het optimaal gepositioneerd is voor zowel blokkeren als het bouwen van een prime. Je 5-punt vroeg maken is een topprioriteit."
        }
      },
      {
        question: {
          en: "What is a 'stripped position'?",
          es: "¿Qué es una 'posición despojada'?",
          de: "Was ist eine 'abgespecktePosition'?",
          nl: "Wat is een 'gestripte positie'?"
        },
        options: [
          { en: "Having few checkers in position to cover blots or make points", es: "Tener pocas fichas en posición para cubrir blots o hacer puntos", de: "Wenige Steine in Position haben um Blots zu decken oder Punkte zu machen", nl: "Weinig stenen in positie hebben om blots te dekken of punten te maken" },
          { en: "Naked position", es: "Posición desnuda", de: "Nackte Position", nl: "Naakte positie" },
          { en: "Removed all checkers", es: "Todas las fichas removidas", de: "Alle Steine entfernt", nl: "Alle stenen verwijderd" },
          { en: "Clean board", es: "Tablero limpio", de: "Sauberes Brett", nl: "Schoon bord" }
        ],
        correct: 0,
        explanation: {
          en: "A stripped position is when you have few spare checkers available to cover blots, make new points, or provide flexibility. This often happens when racing or bearing off with poor distribution. Stripped positions are vulnerable and have poor timing.",
          es: "Una posición despojada es cuando tienes pocas fichas de repuesto disponibles para cubrir blots, hacer nuevos puntos o proporcionar flexibilidad. Esto a menudo ocurre al correr o sacar fichas con mala distribución. Las posiciones despojadas son vulnerables y tienen mal timing.",
          de: "Eine abgespeckte Position ist wenn Sie wenige Reservesteine verfügbar haben um Blots zu decken, neue Punkte zu machen oder Flexibilität zu bieten. Dies passiert oft beim Rennen oder Auswürfeln mit schlechter Verteilung. Abgespeckte Positionen sind verwundbar und haben schlechtes Timing.",
          nl: "Een gestripte positie is wanneer je weinig reserve stenen beschikbaar hebt om blots te dekken, nieuwe punten te maken of flexibiliteit te bieden. Dit gebeurt vaak bij racen of uitgooien met slechte verdeling. Gestripte posities zijn kwetsbaar en hebben slechte timing."
        }
      },
      {
        question: {
          en: "What is 'diversification' in backgammon strategy?",
          es: "¿Qué es la 'diversificación' en la estrategia de backgammon?",
          de: "Was ist 'Diversifikation' in der Backgammon-Strategie?",
          nl: "Wat is 'diversificatie' in backgammon strategie?"
        },
        options: [
          { en: "Spreading checkers to cover more numbers for key tasks", es: "Dispersar fichas para cubrir más números para tareas clave", de: "Steine verteilen um mehr Zahlen für Schlüsselaufgaben abzudecken", nl: "Stenen spreiden om meer nummers te dekken voor belangrijke taken" },
          { en: "Playing different games", es: "Jugar diferentes juegos", de: "Verschiedene Spiele spielen", nl: "Verschillende spellen spelen" },
          { en: "Variety of moves", es: "Variedad de movimientos", de: "Vielzahl von Zügen", nl: "Variëteit aan zetten" },
          { en: "Different strategies", es: "Diferentes estrategias", de: "Verschiedene Strategien", nl: "Verschillende strategieën" }
        ],
        correct: 0,
        explanation: {
          en: "Diversification means positioning your checkers so they can accomplish important tasks with many different dice rolls. For example, having builders on both your 8-point and 11-point gives you more numbers to make your 5-point than having all builders on one point.",
          es: "La diversificación significa posicionar tus fichas para que puedan lograr tareas importantes con muchas tiradas de dados diferentes. Por ejemplo, tener constructores tanto en tu punto 8 como en el 11 te da más números para hacer tu punto 5 que tener todos los constructores en un punto.",
          de: "Diversifikation bedeutet Ihre Steine so zu positionieren dass sie wichtige Aufgaben mit vielen verschiedenen Würfelwürfen erfüllen können. Zum Beispiel gibt Ihnen Erbauer auf Ihrem 8-Punkt und 11-Punkt mehr Zahlen um Ihren 5-Punkt zu machen als alle Erbauer auf einem Punkt zu haben.",
          nl: "Diversificatie betekent je stenen zo positioneren dat ze belangrijke taken kunnen volbrengen met veel verschillende dobbelsteenworpen. Bijvoorbeeld, bouwers hebben op zowel je 8-punt als 11-punt geeft je meer nummers om je 5-punt te maken dan alle bouwers op één punt te hebben."
        }
      },
      {
        question: {
          en: "What is a 'dance' in backgammon?",
          es: "¿Qué es un 'baile' en backgammon?",
          de: "Was ist ein 'Tanz' im Backgammon?",
          nl: "Wat is een 'dans' in backgammon?"
        },
        options: [
          { en: "Failing to enter from the bar on your turn", es: "Fallar al entrar desde la barra en tu turno", de: "Nicht vom Bar eintreten in Ihrem Zug", nl: "Niet binnen komen vanaf de bar tijdens je beurt" },
          { en: "Moving quickly", es: "Moverse rápidamente", de: "Sich schnell bewegen", nl: "Snel bewegen" },
          { en: "Celebration move", es: "Movimiento de celebración", de: "Feierbewegung", nl: "Viering beweging" },
          { en: "Pattern of moves", es: "Patrón de movimientos", de: "Bewegungsmuster", nl: "Patroon van zetten" }
        ],
        correct: 0,
        explanation: {
          en: "A 'dance' means you fail to enter a checker from the bar because all six entry points in your opponent's home board are blocked. You lose your entire turn. The more points your opponent has made in their home board, the more likely you'll dance.",
          es: "Un 'baile' significa que no logras entrar una ficha desde la barra porque los seis puntos de entrada en el tablero de casa de tu oponente están bloqueados. Pierdes tu turno completo. Cuantos más puntos haya hecho tu oponente en su tablero de casa, más probable es que bailes.",
          de: "Ein 'Tanz' bedeutet dass Sie einen Stein vom Bar nicht eintreten können weil alle sechs Eintritspunkte im Heimfeld Ihres Gegners blockiert sind. Sie verlieren Ihren gesamten Zug. Je mehr Punkte Ihr Gegner in seinem Heimfeld gemacht hat, desto wahrscheinlicher tanzen Sie.",
          nl: "Een 'dans' betekent dat je een steen niet kunt binnen laten komen vanaf de bar omdat alle zes toegangspunten in het thuisbord van je tegenstander geblokkeerd zijn. Je verliest je hele beurt. Hoe meer punten je tegenstander in hun thuisbord heeft gemaakt, hoe waarschijnlijker je danst."
        }
      },
      {
        question: {
          en: "What is 'the opening book' in backgammon?",
          es: "¿Qué es 'el libro de apertura' en backgammon?",
          de: "Was ist 'das Eröffnungsbuch' im Backgammon?",
          nl: "Wat is 'het openingsboek' in backgammon?"
        },
        options: [
          { en: "Standard optimal responses for each opening roll", es: "Respuestas óptimas estándar para cada tirada de apertura", de: "Standard optimale Antworten für jeden Eröffnungswurf", nl: "Standaard optimale reacties voor elke openingsworp" },
          { en: "Instruction manual", es: "Manual de instrucciones", de: "Bedienungsanleitung", nl: "Handleiding" },
          { en: "Rule book", es: "Libro de reglas", de: "Regelbuch", nl: "Regelboek" },
          { en: "Tournament guide", es: "Guía de torneo", de: "Turnierführer", nl: "Toernooi gids" }
        ],
        correct: 0,
        explanation: {
          en: "The opening book refers to the well-established optimal moves for all 15 possible opening rolls and common responses. Learning these moves is fundamental because strong opening play has been thoroughly analyzed by computers and experts. For example, 3-1 is always played 8/5 6/5.",
          es: "El libro de apertura se refiere a los movimientos óptimos bien establecidos para todas las 15 tiradas de apertura posibles y respuestas comunes. Aprender estos movimientos es fundamental porque el juego de apertura fuerte ha sido analizado exhaustivamente por computadoras y expertos. Por ejemplo, 3-1 siempre se juega 8/5 6/5.",
          de: "Das Eröffnungsbuch bezieht sich auf die gut etablierten optimalen Züge für alle 15 möglichen Eröffnungswürfe und gängigen Antworten. Diese Züge zu lernen ist fundamental weil starkes Eröffnungsspiel gründlich von Computern und Experten analysiert wurde. Zum Beispiel wird 3-1 immer 8/5 6/5 gespielt.",
          nl: "Het openingsboek verwijst naar de goed gevestigde optimale zetten voor alle 15 mogelijke openingsworpen en veelvoorkomende reacties. Deze zetten leren is fundamenteel omdat sterk openingsspel grondig is geanalyseerd door computers en experts. Bijvoorbeeld, 3-1 wordt altijd gespeeld 8/5 6/5."
        }
      },
      {
        question: {
          en: "What is a 'pure prime' game?",
          es: "¿Qué es un juego de 'prima pura'?",
          de: "Was ist ein 'reines Prime'-Spiel?",
          nl: "Wat is een 'pure prime' spel?"
        },
        options: [
          { en: "Building a 6-point prime to trap opponent's back checkers", es: "Construir una prima de 6 puntos para atrapar las fichas traseras del oponente", de: "Ein 6-Punkte-Prime aufbauen um hinteren Steine des Gegners zu fangen", nl: "Een 6-punts prime bouwen om achterste stenen van tegenstander te vangen" },
          { en: "Best game possible", es: "Mejor juego posible", de: "Bestmögliches Spiel", nl: "Best mogelijke spel" },
          { en: "First game", es: "Primer juego", de: "Erstes Spiel", nl: "Eerste spel" },
          { en: "Primary strategy", es: "Estrategia primaria", de: "Primärstrategie", nl: "Primaire strategie" }
        ],
        correct: 0,
        explanation: {
          en: "A pure priming game is when your main strategy is to build a full 6-point prime (six consecutive points) to trap your opponent's back checkers. This prevents them from escaping and puts you in complete control. The opponent must wait until you're forced to break your prime.",
          es: "Un juego de prima pura es cuando tu estrategia principal es construir una prima completa de 6 puntos (seis puntos consecutivos) para atrapar las fichas traseras de tu oponente. Esto les impide escapar y te pone en control completo. El oponente debe esperar hasta que te veas obligado a romper tu prima.",
          de: "Ein reines Prime-Spiel ist wenn Ihre Hauptstrategie ist ein volles 6-Punkte-Prime (sechs aufeinanderfolgende Punkte) aufzubauen um die hinteren Steine Ihres Gegners zu fangen. Dies verhindert ihr Entkommen und gibt Ihnen vollständige Kontrolle. Der Gegner muss warten bis Sie gezwungen sind Ihr Prime zu brechen.",
          nl: "Een pure prime spel is wanneer je hoofdstrategie is om een volle 6-punts prime (zes opeenvolgende punten) te bouwen om de achterste stenen van je tegenstander te vangen. Dit voorkomt hun ontsnapping en geeft je volledige controle. De tegenstander moet wachten totdat je gedwongen bent je prime te breken."
        }
      },
      {
        question: {
          en: "What is 'recirculation' of checkers?",
          es: "¿Qué es la 'recirculación' de fichas?",
          de: "Was ist 'Rezirkulation' von Steinen?",
          nl: "Wat is 'recirculatie' van stenen?"
        },
        options: [
          { en: "Moving checkers through your board multiple times for better positioning", es: "Mover fichas a través de tu tablero múltiples veces para mejor posicionamiento", de: "Steine mehrmals durch Ihr Brett bewegen für bessere Positionierung", nl: "Stenen meerdere keren door je bord bewegen voor betere positionering" },
          { en: "Recycling checkers", es: "Reciclar fichas", de: "Steine recyceln", nl: "Stenen recyclen" },
          { en: "Circular movement", es: "Movimiento circular", de: "Kreisbewegung", nl: "Cirkelvormige beweging" },
          { en: "Rotating board", es: "Rotar tablero", de: "Brett drehen", nl: "Bord draaien" }
        ],
        correct: 0,
        explanation: {
          en: "Recirculation means using checkers that have moved forward to help with tasks in the back. For example, moving checkers from your midpoint to your outer board, then using them as builders to make points in your home board. It's about efficient checker reuse.",
          es: "La recirculación significa usar fichas que se han movido hacia adelante para ayudar con tareas en la parte trasera. Por ejemplo, mover fichas desde tu punto medio a tu tablero exterior, luego usarlas como constructores para hacer puntos en tu tablero de casa. Se trata de reutilización eficiente de fichas.",
          de: "Rezirkulation bedeutet Steine die sich vorwärts bewegt haben zu verwenden um bei Aufgaben im Rücken zu helfen. Zum Beispiel Steine von Ihrem Mittelpunkt zu Ihrem äußeren Brett bewegen, dann sie als Erbauer verwenden um Punkte in Ihrem Heimfeld zu machen. Es geht um effiziente Steinwiederverwendung.",
          nl: "Recirculatie betekent stenen gebruiken die vooruit zijn bewogen om te helpen met taken aan de achterkant. Bijvoorbeeld, stenen bewegen van je middelpunt naar je buitenbord, en ze dan gebruiken als bouwers om punten te maken in je thuisbord. Het gaat om efficiënte steen hergebruik."
        }
      },
      {
        question: {
          en: "What is a 'back game'?",
          es: "¿Qué es un 'juego trasero'?",
          de: "Was ist ein 'Rückspiel'?",
          nl: "Wat is een 'achterspel'?"
        },
        options: [
          { en: "Holding two anchors in opponent's home board waiting to hit", es: "Mantener dos anclas en el tablero de casa del oponente esperando golpear", de: "Zwei Anker im Heimfeld des Gegners halten und auf Schlagen warten", nl: "Twee ankers in het thuisbord van tegenstander houden wachtend om te raken" },
          { en: "Playing defensively", es: "Jugar defensivamente", de: "Defensiv spielen", nl: "Defensief spelen" },
          { en: "Behind in the race", es: "Atrás en la carrera", de: "Im Rennen zurück", nl: "Achter in de race" },
          { en: "Rear position", es: "Posición trasera", de: "Hintere Position", nl: "Achterste positie" }
        ],
        correct: 0,
        explanation: {
          en: "A back game is an advanced strategy where you deliberately hold two anchors deep in your opponent's home board (like 1-point and 3-point). You wait for them to expose shots when bearing off. Back games require excellent timing and are risky but can win from far behind.",
          es: "Un juego trasero es una estrategia avanzada donde deliberadamente mantienes dos anclas profundas en el tablero de casa de tu oponente (como punto 1 y punto 3). Esperas que expongan tiros al sacar fichas. Los juegos traseros requieren excelente timing y son arriesgados pero pueden ganar desde muy atrás.",
          de: "Ein Rückspiel ist eine fortgeschrittene Strategie bei der Sie absichtlich zwei Anker tief im Heimfeld Ihres Gegners halten (wie 1-Punkt und 3-Punkt). Sie warten darauf dass sie Schüsse freilegen beim Auswürfeln. Rückspiele erfordern exzellentes Timing und sind riskant aber können von weit hinten gewinnen.",
          nl: "Een achterspel is een geavanceerde strategie waarbij je opzettelijk twee ankers diep in het thuisbord van je tegenstander houdt (zoals 1-punt en 3-punt). Je wacht tot ze schoten blootleggen bij het uitgooien. Achterspellen vereisen uitstekende timing en zijn risicovol maar kunnen winnen van ver achter."
        }
      },
      {
        question: {
          en: "What is a '5-point anchor' strategy?",
          es: "¿Qué es una estrategia de 'ancla de 5 puntos'?",
          de: "Was ist eine '5-Punkt-Anker'-Strategie?",
          nl: "Wat is een '5-punts anker' strategie?"
        },
        options: [
          { en: "Holding opponent's 5-point (your 20-point) as advanced anchor", es: "Mantener el punto 5 del oponente (tu punto 20) como ancla avanzada", de: "5-Punkt des Gegners (Ihr 20-Punkt) als fortgeschrittenen Anker halten", nl: "5-punt van tegenstander (jouw 20-punt) vasthouden als gevorderd anker" },
          { en: "Making five points in a row", es: "Hacer cinco puntos en fila", de: "Fünf Punkte in Folge machen", nl: "Vijf punten op rij maken" },
          { en: "Scoring 5 points", es: "Marcar 5 puntos", de: "5 Punkte erzielen", nl: "5 punten scoren" },
          { en: "Five anchor total", es: "Cinco anclas en total", de: "Fünf Anker insgesamt", nl: "Vijf ankers totaal" }
        ],
        correct: 0,
        explanation: {
          en: "The 5-point anchor strategy involves holding your opponent's 5-point (which is your 20-point) as an advanced anchor. This is the most valuable advanced anchor because it provides excellent timing, good escape opportunities, and strong hitting chances when your opponent bears off.",
          es: "La estrategia de ancla de 5 puntos implica mantener el punto 5 de tu oponente (que es tu punto 20) como ancla avanzada. Esta es el ancla avanzada más valiosa porque proporciona excelente timing, buenas oportunidades de escape y fuertes posibilidades de golpear cuando tu oponente saca fichas.",
          de: "Die 5-Punkt-Anker-Strategie beinhaltet den 5-Punkt Ihres Gegners (was Ihr 20-Punkt ist) als fortgeschrittenen Anker zu halten. Dies ist der wertvollste fortgeschrittene Anker weil er exzellentes Timing, gute Fluchtmöglichkeiten und starke Trefferchancen bietet wenn Ihr Gegner auswürfelt.",
          nl: "De 5-punts anker strategie houdt in dat je het 5-punt van je tegenstander (wat jouw 20-punt is) als gevorderd anker vasthoudt. Dit is het meest waardevolle gevorderde anker omdat het uitstekende timing, goede ontsnappingsmogelijkheden en sterke raakkansen biedt wanneer je tegenstander uitgaat."
        }
      },
      {
        question: {
          en: "What does it mean when a position has 'contact'?",
          es: "¿Qué significa cuando una posición tiene 'contacto'?",
          de: "Was bedeutet es wenn eine Position 'Kontakt' hat?",
          nl: "Wat betekent het wanneer een positie 'contact' heeft?"
        },
        options: [
          { en: "Checkers can still potentially hit each other", es: "Las fichas todavía pueden potencialmente golpearse entre sí", de: "Steine können sich noch potenziell gegenseitig schlagen", nl: "Stenen kunnen elkaar nog potentieel raken" },
          { en: "Pieces touching", es: "Piezas tocándose", de: "Stücke berühren sich", nl: "Stukken raken elkaar" },
          { en: "Players communicating", es: "Jugadores comunicándose", de: "Spieler kommunizieren", nl: "Spelers communiceren" },
          { en: "Physical contact", es: "Contacto físico", de: "Körperlicher Kontakt", nl: "Fysiek contact" }
        ],
        correct: 0,
        explanation: {
          en: "A position has contact when there's still potential for checkers to hit each other - typically when one or both players still have checkers that haven't passed their opponent's checkers. Once all checkers have passed, it becomes a pure race with no contact.",
          es: "Una posición tiene contacto cuando todavía hay potencial para que las fichas se golpeen entre sí - típicamente cuando uno o ambos jugadores todavía tienen fichas que no han pasado las fichas del oponente. Una vez que todas las fichas han pasado, se convierte en una carrera pura sin contacto.",
          de: "Eine Position hat Kontakt wenn es noch Potenzial gibt dass Steine sich gegenseitig schlagen - typischerweise wenn ein oder beide Spieler noch Steine haben die die Steine des Gegners nicht passiert haben. Sobald alle Steine passiert haben wird es ein reines Rennen ohne Kontakt.",
          nl: "Een positie heeft contact wanneer er nog potentieel is voor stenen om elkaar te raken - typisch wanneer een of beide spelers nog stenen hebben die de stenen van de tegenstander niet zijn gepasseerd. Zodra alle stenen zijn gepasseerd, wordt het een pure race zonder contact."
        }
      },
      {
        question: {
          en: "What is 'flexibility' in checker play?",
          es: "¿Qué es la 'flexibilidad' en el juego de fichas?",
          de: "Was ist 'Flexibilität' im Steinspiel?",
          nl: "Wat is 'flexibiliteit' in steenspel?"
        },
        options: [
          { en: "Having multiple good options for future rolls", es: "Tener múltiples buenas opciones para tiradas futuras", de: "Mehrere gute Optionen für zukünftige Würfe haben", nl: "Meerdere goede opties hebben voor toekomstige worpen" },
          { en: "Bending the board", es: "Doblar el tablero", de: "Das Brett biegen", nl: "Het bord buigen" },
          { en: "Changing strategy", es: "Cambiar estrategia", de: "Strategie ändern", nl: "Strategie veranderen" },
          { en: "Physical movement", es: "Movimiento físico", de: "Physische Bewegung", nl: "Fysieke beweging" }
        ],
        correct: 0,
        explanation: {
          en: "Flexibility means positioning your checkers so you have good options for many different future rolls. Flexible positions avoid being forced into bad moves. For example, having builders on multiple points gives you flexibility to make various key points depending on what you roll.",
          es: "La flexibilidad significa posicionar tus fichas para que tengas buenas opciones para muchas tiradas futuras diferentes. Las posiciones flexibles evitan verse obligado a hacer malos movimientos. Por ejemplo, tener constructores en múltiples puntos te da flexibilidad para hacer varios puntos clave dependiendo de lo que saques.",
          de: "Flexibilität bedeutet Ihre Steine so zu positionieren dass Sie gute Optionen für viele verschiedene zukünftige Würfe haben. Flexible Positionen vermeiden gezwungen zu werden schlechte Züge zu machen. Zum Beispiel gibt Ihnen Erbauer auf mehreren Punkten Flexibilität verschiedene Schlüsselpunkte zu machen je nachdem was Sie würfeln.",
          nl: "Flexibiliteit betekent je stenen zo positioneren dat je goede opties hebt voor veel verschillende toekomstige worpen. Flexibele posities vermijden gedwongen worden tot slechte zetten. Bijvoorbeeld, bouwers hebben op meerdere punten geeft je flexibiliteit om verschillende belangrijke punten te maken afhankelijk van wat je gooit."
        }
      }
    ]
  };

  // Export for use in the quiz application
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level4;
  } else if (typeof window !== 'undefined') {
    window.level4 = level4;
  }
})();
