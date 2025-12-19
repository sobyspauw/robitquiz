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
      },
      {
        question: {
          en: "What is 'cube equity' in backgammon?",
          es: "¿Qué es 'cube equity' en backgammon?",
          de: "Was ist 'Würfel-Equity' im Backgammon?",
          nl: "Wat is 'dobbelsteen equity' in backgammon?"
        },
        options: [
          { en: "Expected value of position considering doubling decisions", es: "Valor esperado de la posición considerando decisiones de doblar", de: "Erwarteter Wert der Position unter Berücksichtigung von Verdopplungsentscheidungen", nl: "Verwachte waarde van positie rekening houdend met verdubbelbeslissingen" },
          { en: "Fair cube value", es: "Valor justo del cubo", de: "Fairer Würfelwert", nl: "Eerlijke dobbelsteenwaarde" },
          { en: "Cube ownership", es: "Propiedad del cubo", de: "Würfelbesitz", nl: "Dobbelsteenbezit" },
          { en: "Doubling percentage", es: "Porcentaje de doblaje", de: "Verdopplungsprozentsatz", nl: "Verdubbel percentage" }
        ],
        correct: 0,
        explanation: {
          en: "Cube equity is the expected value of your position when optimal cube decisions are made. It accounts for both winning chances and the value of the cube. Modern software uses cube equity to evaluate positions and determine correct cube actions.",
          es: "Cube equity es el valor esperado de tu posición cuando se toman decisiones óptimas de cubo. Tiene en cuenta tanto las posibilidades de ganar como el valor del cubo. El software moderno usa cube equity para evaluar posiciones y determinar acciones correctas del cubo.",
          de: "Würfel-Equity ist der erwartete Wert Ihrer Position wenn optimale Würfelentscheidungen getroffen werden. Es berücksichtigt sowohl Gewinnchancen als auch den Wert des Würfels. Moderne Software verwendet Würfel-Equity um Positionen zu bewerten und korrekte Würfelaktionen zu bestimmen.",
          nl: "Dobbelsteen equity is de verwachte waarde van je positie wanneer optimale dobbelsteenbeslissingen worden genomen. Het houdt rekening met zowel winkansen als de waarde van de dobbelsteen. Moderne software gebruikt dobbelsteen equity om posities te evalueren en correcte dobbelsteenacties te bepalen."
        }
      },
      {
        question: {
          en: "What is a 'market loser' in cube decisions?",
          es: "¿Qué es un 'market loser' en decisiones de cubo?",
          de: "Was ist ein 'Market Loser' bei Würfelentscheidungen?",
          nl: "Wat is een 'market loser' bij dobbelsteenbeslissingen?"
        },
        options: [
          { en: "Position that may improve so much next roll you lose your double", es: "Posición que puede mejorar tanto en la próxima tirada que pierdes tu doble", de: "Position die sich so stark verbessern kann dass Sie Ihre Verdopplung verlieren", nl: "Positie die zoveel kan verbeteren dat je je verdubbeling verliest" },
          { en: "Losing the match", es: "Perder el match", de: "Das Match verlieren", nl: "De wedstrijd verliezen" },
          { en: "Bad cube position", es: "Mala posición de cubo", de: "Schlechte Würfelposition", nl: "Slechte dobbelsteenpositie" },
          { en: "Economic loss", es: "Pérdida económica", de: "Wirtschaftlicher Verlust", nl: "Economisch verlies" }
        ],
        correct: 0,
        explanation: {
          en: "A market loser is when your position is volatile and might improve so much with good rolls that your opponent will drop if you double later. You should double now even if slightly premature because you'll 'lose your market' - your opponent will pass after you improve.",
          es: "Un market loser es cuando tu posición es volátil y podría mejorar tanto con buenas tiradas que tu oponente rechazará si doblas después. Deberías doblar ahora aunque sea ligeramente prematuro porque 'perderás tu mercado' - tu oponente rechazará después de que mejores.",
          de: "Ein Market Loser ist wenn Ihre Position volatil ist und sich mit guten Würfen so stark verbessern könnte dass Ihr Gegner ablehnen wird wenn Sie später verdoppeln. Sie sollten jetzt verdoppeln auch wenn etwas verfrüht weil Sie 'Ihren Markt verlieren' - Ihr Gegner wird ablehnen nachdem Sie sich verbessert haben.",
          nl: "Een market loser is wanneer je positie volatiel is en zoveel kan verbeteren met goede worpen dat je tegenstander zal passen als je later verdubbelt. Je zou nu moeten verdubbelen ook al is het enigszins prematuur omdat je 'je markt verliest' - je tegenstander zal passen nadat je verbetert."
        }
      },
      {
        question: {
          en: "What is 'wastage' in bearing off?",
          es: "¿Qué es 'wastage' al sacar fichas?",
          de: "Was ist 'Verschwendung' beim Auswürfeln?",
          nl: "Wat is 'verspilling' bij uitgooien?"
        },
        options: [
          { en: "Wasting pips by moving within home board instead of bearing off", es: "Desperdiciar pips moviendo dentro del tablero de casa en lugar de sacar", de: "Pips verschwenden indem man im Home Board bewegt statt auszuwürfeln", nl: "Pips verspillen door binnen thuisbord te bewegen in plaats van uit te gooien" },
          { en: "Losing checkers", es: "Perder fichas", de: "Steine verlieren", nl: "Stenen verliezen" },
          { en: "Using too much time", es: "Usar demasiado tiempo", de: "Zu viel Zeit verwenden", nl: "Te veel tijd gebruiken" },
          { en: "Bad moves", es: "Malos movimientos", de: "Schlechte Züge", nl: "Slechte zetten" }
        ],
        correct: 0,
        explanation: {
          en: "Wastage occurs when bearing off if you must use pips to move checkers within your home board rather than actually bearing them off. For example, rolling 5-2 when you only have checkers on the 1-point and 3-point wastes pips. Minimizing wastage is key to bearing off efficiently.",
          es: "Wastage ocurre al sacar fichas si debes usar pips para mover fichas dentro de tu tablero de casa en lugar de realmente sacarlas. Por ejemplo, sacar 5-2 cuando solo tienes fichas en el punto 1 y punto 3 desperdicia pips. Minimizar wastage es clave para sacar fichas eficientemente.",
          de: "Verschwendung tritt beim Auswürfeln auf wenn Sie Pips verwenden müssen um Steine innerhalb Ihres Home Boards zu bewegen anstatt sie tatsächlich auszuwürfeln. Zum Beispiel 5-2 zu würfeln wenn Sie nur Steine auf dem 1-Punkt und 3-Punkt haben verschwendet Pips. Verschwendung zu minimieren ist der Schlüssel zum effizienten Auswürfeln.",
          nl: "Verspilling vindt plaats bij uitgooien als je pips moet gebruiken om stenen binnen je thuisbord te bewegen in plaats van ze daadwerkelijk uit te gooien. Bijvoorbeeld, 5-2 gooien wanneer je alleen stenen hebt op het 1-punt en 3-punt verspilt pips. Verspilling minimaliseren is de sleutel tot efficiënt uitgooien."
        }
      },
      {
        question: {
          en: "What is the 'rule of 8-9-12' in racing?",
          es: "¿Qué es la 'regla de 8-9-12' en carreras?",
          de: "Was ist die 'Regel von 8-9-12' im Rennen?",
          nl: "Wat is de 'regel van 8-9-12' bij racen?"
        },
        options: [
          { en: "Pip count lead needed to double (8 for contact, 9 racing, 12 bearing off)", es: "Ventaja de conteo de pips necesaria para doblar (8 para contacto, 9 carrera, 12 sacando)", de: "Pip-Zählung-Vorsprung zum Verdoppeln nötig (8 für Kontakt, 9 Rennen, 12 Auswürfeln)", nl: "Pip count voorsprong nodig om te verdubbelen (8 voor contact, 9 racen, 12 uitgooien)" },
          { en: "Dice rolling sequence", es: "Secuencia de tirada de dados", de: "Würfel-Sequenz", nl: "Dobbelsteenreeks" },
          { en: "Point making order", es: "Orden de hacer puntos", de: "Punkt-Mach-Reihenfolge", nl: "Punt-maak volgorde" },
          { en: "Move priority", es: "Prioridad de movimiento", de: "Zugpriorität", nl: "Zet prioriteit" }
        ],
        correct: 0,
        explanation: {
          en: "The 8-9-12 rule is a guideline for racing cube decisions. If ahead by 8% in a contact race, 9% in a pure race, or 12% when bearing off, you have a borderline double. It's a rough estimate - modern bots use more precise calculations.",
          es: "La regla 8-9-12 es una guía para decisiones de cubo en carreras. Si vas adelante por 8% en una carrera de contacto, 9% en una carrera pura, o 12% al sacar fichas, tienes un doble límite. Es una estimación aproximada - los bots modernos usan cálculos más precisos.",
          de: "Die 8-9-12-Regel ist eine Richtlinie für Rennwürfel-Entscheidungen. Wenn Sie mit 8% in einem Kontaktrennen, 9% in einem reinen Rennen oder 12% beim Auswürfeln vorne liegen haben Sie eine grenzwertige Verdopplung. Es ist eine grobe Schätzung - moderne Bots verwenden präzisere Berechnungen.",
          nl: "De 8-9-12 regel is een richtlijn voor race dobbelsteenbeslissingen. Als je 8% voor ligt in een contact race, 9% in een pure race, of 12% bij uitgooien, heb je een grensverdubbeling. Het is een ruwe schatting - moderne bots gebruiken preciezere berekeningen."
        }
      },
      {
        question: {
          en: "What is 'controlling the cube' strategically?",
          es: "¿Qué es 'controlar el cubo' estratégicamente?",
          de: "Was ist 'den Würfel kontrollieren' strategisch?",
          nl: "Wat is 'de dobbelsteen controleren' strategisch?"
        },
        options: [
          { en: "Owning the cube to threaten redoubles and control stakes", es: "Poseer el cubo para amenazar redoblajes y controlar apuestas", de: "Den Würfel besitzen um Wiederverdopplungen zu drohen und Einsätze zu kontrollieren", nl: "De dobbelsteen bezitten om herverdubbeling te dreigen en inzet te controleren" },
          { en: "Physically holding it", es: "Sostenerlo físicamente", de: "Ihn physisch halten", nl: "Het fysiek vasthouden" },
          { en: "Deciding when to use it", es: "Decidir cuándo usarlo", de: "Entscheiden wann man ihn verwendet", nl: "Beslissen wanneer het te gebruiken" },
          { en: "Preventing doubles", es: "Prevenir dobles", de: "Verdopplungen verhindern", nl: "Verdubbeling voorkomen" }
        ],
        correct: 0,
        explanation: {
          en: "Controlling the cube means owning it so you alone can redouble. This gives you leverage - you can threaten efficient redoubles while your opponent can't. Sometimes accepting a slightly early double is correct to gain cube control and prevent your opponent's efficient redoubles.",
          es: "Controlar el cubo significa poseerlo para que solo tú puedas redoblar. Esto te da apalancamiento - puedes amenazar redoblajes eficientes mientras tu oponente no puede. A veces aceptar un doble ligeramente temprano es correcto para ganar control del cubo y prevenir redoblajes eficientes de tu oponente.",
          de: "Den Würfel zu kontrollieren bedeutet ihn zu besitzen so dass Sie allein wiederverdoppeln können. Dies gibt Ihnen Hebelwirkung - Sie können effiziente Wiederverdopplungen androhen während Ihr Gegner nicht kann. Manchmal ist es korrekt eine leicht frühe Verdopplung zu akzeptieren um Würfelkontrolle zu gewinnen und effiziente Wiederverdopplungen Ihres Gegners zu verhindern.",
          nl: "De dobbelsteen controleren betekent hem bezitten zodat alleen jij kunt herverdubbelen. Dit geeft je hefboomwerking - je kunt efficiënte herverdubbeling dreigen terwijl je tegenstander dat niet kan. Soms is het correct een enigszins vroege verdubbeling te accepteren om dobbelsteencontrole te krijgen en efficiënte herverdubbeling van je tegenstander te voorkomen."
        }
      },
      {
        question: {
          en: "What is a 'joker' in backgammon?",
          es: "¿Qué es un 'joker' en backgammon?",
          de: "Was ist ein 'Joker' im Backgammon?",
          nl: "Wat is een 'joker' in backgammon?"
        },
        options: [
          { en: "Lucky roll that dramatically swings the game outcome", es: "Tirada afortunada que cambia dramáticamente el resultado del juego", de: "Glückswurf der das Spielergebnis dramatisch verändert", nl: "Gelukkige worp die de speluitkomst dramatisch verandert" },
          { en: "Wild card", es: "Comodín", de: "Wildkarte", nl: "Wildcard" },
          { en: "Funny move", es: "Movimiento gracioso", de: "Lustiger Zug", nl: "Grappige zet" },
          { en: "Bad player", es: "Mal jugador", de: "Schlechter Spieler", nl: "Slechte speler" }
        ],
        correct: 0,
        explanation: {
          en: "A joker is an unexpectedly lucky roll that dramatically changes the outcome - like hitting a miracle shot against the odds or rolling exactly what you need to win. Backgammon has significant variance, and jokers can turn losing positions into wins.",
          es: "Un joker es una tirada inesperadamente afortunada que cambia dramáticamente el resultado - como golpear un tiro milagroso contra las probabilidades o sacar exactamente lo que necesitas para ganar. Backgammon tiene varianza significativa, y los jokers pueden convertir posiciones perdedoras en victorias.",
          de: "Ein Joker ist ein unerwartet glücklicher Wurf der das Ergebnis dramatisch verändert - wie ein Wundertreffer gegen die Chancen oder genau das zu würfeln was Sie zum Gewinnen brauchen. Backgammon hat erhebliche Varianz und Joker können verlierende Positionen in Siege verwandeln.",
          nl: "Een joker is een onverwacht gelukkige worp die de uitkomst dramatisch verandert - zoals een wondertreffer tegen de kansen in of precies gooien wat je nodig hebt om te winnen. Backgammon heeft aanzienlijke variantie en jokers kunnen verliezende posities in overwinningen veranderen."
        }
      },
      {
        question: {
          en: "What is 'cube leverage'?",
          es: "¿Qué es 'cube leverage'?",
          de: "Was ist 'Würfel-Hebelwirkung'?",
          nl: "Wat is 'dobbelsteen hefboomwerking'?"
        },
        options: [
          { en: "Value of owning cube and ability to redouble efficiently", es: "Valor de poseer el cubo y capacidad de redoblar eficientemente", de: "Wert des Würfelbesitzes und Fähigkeit effizient wiederzuverdoppeln", nl: "Waarde van dobbelsteenbezit en vermogen om efficiënt te herverdubbelen" },
          { en: "Physical cube position", es: "Posición física del cubo", de: "Physische Würfelposition", nl: "Fysieke dobbelsteenpositie" },
          { en: "Cube multiplication", es: "Multiplicación del cubo", de: "Würfelmultiplikation", nl: "Dobbelsteenvermenigvuldiging" },
          { en: "Power advantage", es: "Ventaja de poder", de: "Machtvorteil", nl: "Machtvoordeel" }
        ],
        correct: 0,
        explanation: {
          en: "Cube leverage is the strategic advantage of owning the cube. You can threaten efficient redoubles while your opponent cannot, giving you control over the stakes. In volatile positions, cube leverage can be worth significant equity beyond just winning chances.",
          es: "Cube leverage es la ventaja estratégica de poseer el cubo. Puedes amenazar redoblajes eficientes mientras tu oponente no puede, dándote control sobre las apuestas. En posiciones volátiles, cube leverage puede valer equity significativo más allá de solo posibilidades de ganar.",
          de: "Würfel-Hebelwirkung ist der strategische Vorteil den Würfel zu besitzen. Sie können effiziente Wiederverdopplungen androhen während Ihr Gegner nicht kann, was Ihnen Kontrolle über die Einsätze gibt. In volatilen Positionen kann Würfel-Hebelwirkung erhebliches Equity jenseits von Gewinnchancen wert sein.",
          nl: "Dobbelsteen hefboomwerking is het strategische voordeel van het bezitten van de dobbelsteen. Je kunt efficiënte herverdubbeling dreigen terwijl je tegenstander dat niet kan, wat je controle geeft over de inzet. In volatiele posities kan dobbelsteen hefboomwerking aanzienlijke equity waard zijn naast alleen winkansen."
        }
      },
      {
        question: {
          en: "What is a 'closeout' position?",
          es: "¿Qué es una posición de 'closeout'?",
          de: "Was ist eine 'Closeout'-Position?",
          nl: "Wat is een 'closeout' positie?"
        },
        options: [
          { en: "Making all six home board points with opponent on the bar", es: "Hacer los seis puntos del tablero de casa con el oponente en la barra", de: "Alle sechs Home Board Punkte machen mit Gegner auf der Bar", nl: "Alle zes thuisbordpunten maken met tegenstander op de bar" },
          { en: "Closing the game", es: "Cerrar el juego", de: "Das Spiel schließen", nl: "Het spel sluiten" },
          { en: "Final position", es: "Posición final", de: "Endposition", nl: "Eindpositie" },
          { en: "Winning position", es: "Posición ganadora", de: "Gewinnposition", nl: "Winnende positie" }
        ],
        correct: 0,
        explanation: {
          en: "A closeout is when you've closed all six points in your home board while your opponent has one or more checkers on the bar. They cannot enter and must wait for you to open a point. Closeouts usually lead to gammons or backgammons.",
          es: "Un closeout es cuando has cerrado los seis puntos en tu tablero de casa mientras tu oponente tiene una o más fichas en la barra. No pueden entrar y deben esperar a que abras un punto. Los closeouts usualmente llevan a gammons o backgammons.",
          de: "Ein Closeout ist wenn Sie alle sechs Punkte in Ihrem Home Board geschlossen haben während Ihr Gegner einen oder mehrere Steine auf der Bar hat. Sie können nicht eintreten und müssen warten bis Sie einen Punkt öffnen. Closeouts führen normalerweise zu Gammons oder Backgammons.",
          nl: "Een closeout is wanneer je alle zes punten in je thuisbord hebt gesloten terwijl je tegenstander een of meer stenen op de bar heeft. Ze kunnen niet binnenkomen en moeten wachten tot je een punt opent. Closeouts leiden meestal tot gammons of backgammons."
        }
      },
      {
        question: {
          en: "What is 'match equity table' (MET)?",
          es: "¿Qué es 'match equity table' (MET)?",
          de: "Was ist 'Match-Equity-Tabelle' (MET)?",
          nl: "Wat is 'wedstrijd equity tabel' (MET)?"
        },
        options: [
          { en: "Table showing winning probabilities at various match scores", es: "Tabla mostrando probabilidades de ganar en varios puntajes de match", de: "Tabelle zeigt Gewinnwahrscheinlichkeiten bei verschiedenen Match-Ständen", nl: "Tabel met winkansen bij verschillende wedstrijdscores" },
          { en: "Meeting schedule", es: "Cronograma de reuniones", de: "Besprechungsplan", nl: "Vergaderschema" },
          { en: "Equipment list", es: "Lista de equipo", de: "Ausrüstungsliste", nl: "Uitrustingslijst" },
          { en: "Player ranking", es: "Clasificación de jugadores", de: "Spielerrangliste", nl: "Speler ranglijst" }
        ],
        correct: 0,
        explanation: {
          en: "The Match Equity Table shows your winning probability for every possible match score. For example, at 4-2 in a 5-point match, it shows your exact chances. METs are essential for correct cube decisions in tournament play, where match score dramatically affects strategy.",
          es: "La Match Equity Table muestra tu probabilidad de ganar para cada posible puntuación de match. Por ejemplo, en 4-2 en un match a 5 puntos, muestra tus posibilidades exactas. Los METs son esenciales para decisiones correctas de cubo en juego de torneo, donde la puntuación del match afecta dramáticamente la estrategia.",
          de: "Die Match-Equity-Tabelle zeigt Ihre Gewinnwahrscheinlichkeit für jeden möglichen Match-Stand. Zum Beispiel zeigt sie bei 4-2 in einem 5-Punkte-Match Ihre genauen Chancen. METs sind wesentlich für korrekte Würfelentscheidungen im Turnierspiel, wo der Match-Stand die Strategie dramatisch beeinflusst.",
          nl: "De Wedstrijd Equity Tabel toont je winkans voor elke mogelijke wedstrijdscore. Bijvoorbeeld, bij 4-2 in een 5-punts wedstrijd toont het je exacte kansen. METs zijn essentieel voor correcte dobbelsteenbeslissingen in toernooispel, waar wedstrijdscore de strategie dramatisch beïnvloedt."
        }
      },
      {
        question: {
          en: "What is the 'ace-point game'?",
          es: "¿Qué es el 'juego de punto de as'?",
          de: "Was ist das 'Ass-Punkt-Spiel'?",
          nl: "Wat is het 'aas-punt spel'?"
        },
        options: [
          { en: "Holding opponent's 1-point as only anchor in their board", es: "Mantener el punto 1 del oponente como único ancla en su tablero", de: "1-Punkt des Gegners als einzigen Anker in seinem Brett halten", nl: "1-punt van tegenstander als enige anker in hun bord houden" },
          { en: "Making point 1 first", es: "Hacer punto 1 primero", de: "Punkt 1 zuerst machen", nl: "Punt 1 eerst maken" },
          { en: "Rolling all ones", es: "Sacar todos unos", de: "Alle Einsen würfeln", nl: "Alle enen gooien" },
          { en: "Expert level play", es: "Juego de nivel experto", de: "Expertenlevel-Spiel", nl: "Expert niveau spel" }
        ],
        correct: 0,
        explanation: {
          en: "An ace-point game is when you hold only your opponent's 1-point (ace-point) as an anchor. This is generally weak - it's the worst anchor because it's furthest from escaping and offers poor timing. It's better than nothing but you should try to escape or make a better anchor.",
          es: "Un juego de punto de as es cuando solo mantienes el punto 1 (punto de as) de tu oponente como ancla. Esto es generalmente débil - es el peor ancla porque está más lejos de escapar y ofrece mal timing. Es mejor que nada pero deberías intentar escapar o hacer un mejor ancla.",
          de: "Ein Ass-Punkt-Spiel ist wenn Sie nur den 1-Punkt (Ass-Punkt) Ihres Gegners als Anker halten. Dies ist generell schwach - es ist der schlechteste Anker weil er am weitesten vom Entkommen entfernt ist und schlechtes Timing bietet. Es ist besser als nichts aber Sie sollten versuchen zu entkommen oder einen besseren Anker zu machen.",
          nl: "Een aas-punt spel is wanneer je alleen het 1-punt (aas-punt) van je tegenstander als anker houdt. Dit is over het algemeen zwak - het is het slechtste anker omdat het het verst van ontsnappen is en slechte timing biedt. Het is beter dan niets maar je zou moeten proberen te ontsnappen of een beter anker te maken."
        }
      },
      {
        question: {
          en: "What is 'roll equity' vs 'cube equity'?",
          es: "¿Qué es 'roll equity' vs 'cube equity'?",
          de: "Was ist 'Wurf-Equity' vs 'Würfel-Equity'?",
          nl: "Wat is 'worp equity' vs 'dobbelsteen equity'?"
        },
        options: [
          { en: "Roll equity: position value with no doubling; Cube equity: with cube", es: "Roll equity: valor de posición sin doblar; Cube equity: con cubo", de: "Wurf-Equity: Positionswert ohne Verdoppeln; Würfel-Equity: mit Würfel", nl: "Worp equity: positiewaarde zonder verdubbeling; Dobbelsteen equity: met dobbelsteen" },
          { en: "Different equity types", es: "Tipos de equity diferentes", de: "Verschiedene Equity-Typen", nl: "Verschillende equity types" },
          { en: "Dice vs cube values", es: "Valores de dados vs cubo", de: "Würfel- vs Kubikwerte", nl: "Dobbelstenen vs dobbelsteenwaarden" },
          { en: "Position evaluations", es: "Evaluaciones de posición", de: "Positionsbewertungen", nl: "Positie evaluaties" }
        ],
        correct: 0,
        explanation: {
          en: "Roll equity is your position's expected value if the cube didn't exist (cubeless equity). Cube equity includes the doubling cube's impact. The difference shows cube action value. Good players maximize cube equity, not just roll equity.",
          es: "Roll equity es el valor esperado de tu posición si el cubo no existiera (equity sin cubo). Cube equity incluye el impacto del cubo de doblaje. La diferencia muestra el valor de acción del cubo. Los buenos jugadores maximizan cube equity, no solo roll equity.",
          de: "Wurf-Equity ist der erwartete Wert Ihrer Position wenn der Würfel nicht existierte (würfellose Equity). Würfel-Equity beinhaltet den Einfluss des Dopplungswürfels. Der Unterschied zeigt den Würfelaktionswert. Gute Spieler maximieren Würfel-Equity, nicht nur Wurf-Equity.",
          nl: "Worp equity is de verwachte waarde van je positie als de dobbelsteen niet bestond (dobbelsteenloze equity). Dobbelsteen equity omvat de impact van de verdubbeldob. Het verschil toont de dobbelsteenactiewaarde. Goede spelers maximaliseren dobbelsteen equity, niet alleen worp equity."
        }
      },
      {
        question: {
          en: "What is a 'mutual holding game'?",
          es: "¿Qué es un 'juego de retención mutua'?",
          de: "Was ist ein 'gegenseitiges Haltespiel'?",
          nl: "Wat is een 'wederzijds vasthoudspel'?"
        },
        options: [
          { en: "Both players hold anchors in opponent's boards", es: "Ambos jugadores mantienen anclas en los tableros del oponente", de: "Beide Spieler halten Anker in den Brettern des Gegners", nl: "Beide spelers houden ankers in borden van tegenstander" },
          { en: "Shared strategy", es: "Estrategia compartida", de: "Geteilte Strategie", nl: "Gedeelde strategie" },
          { en: "Equal positions", es: "Posiciones iguales", de: "Gleiche Positionen", nl: "Gelijke posities" },
          { en: "Both defending", es: "Ambos defendiendo", de: "Beide verteidigen", nl: "Beide verdedigen" }
        ],
        correct: 0,
        explanation: {
          en: "A mutual holding game occurs when both players maintain anchors in each other's boards while building their home boards. It's a tense positional struggle where timing, anchor quality, and home board development all matter. Breaking first is often dangerous.",
          es: "Un juego de retención mutua ocurre cuando ambos jugadores mantienen anclas en los tableros del otro mientras construyen sus tableros de casa. Es una lucha posicional tensa donde timing, calidad de ancla y desarrollo del tablero de casa importan. Romper primero es a menudo peligroso.",
          de: "Ein gegenseitiges Haltespiel tritt auf wenn beide Spieler Anker in den Brettern des anderen halten während sie ihre Home Boards aufbauen. Es ist ein angespannter Positionskampf wo Timing, Ankerqualität und Home Board Entwicklung alle wichtig sind. Zuerst zu brechen ist oft gefährlich.",
          nl: "Een wederzijds vasthoudspel vindt plaats wanneer beide spelers ankers behouden in elkaars borden terwijl ze hun thuisborden bouwen. Het is een gespannen positionele strijd waarbij timing, ankerkwaliteit en thuisbordontwikkeling allemaal van belang zijn. Als eerste breken is vaak gevaarlijk."
        }
      },
      {
        question: {
          en: "What is 'position duplication' strategy?",
          es: "¿Qué es la estrategia de 'duplicación de posición'?",
          de: "Was ist 'Positions-Duplikations'-Strategie?",
          nl: "Wat is 'positie duplicatie' strategie?"
        },
        options: [
          { en: "Arranging blots so opponent needs same number for multiple tasks", es: "Organizar blots para que el oponente necesite el mismo número para múltiples tareas", de: "Blots so anordnen dass Gegner dieselbe Zahl für mehrere Aufgaben braucht", nl: "Blots zo schikken dat tegenstander hetzelfde getal nodig heeft voor meerdere taken" },
          { en: "Making same points", es: "Hacer los mismos puntos", de: "Dieselben Punkte machen", nl: "Dezelfde punten maken" },
          { en: "Copying opponent", es: "Copiar al oponente", de: "Gegner kopieren", nl: "Tegenstander kopiëren" },
          { en: "Double positions", es: "Posiciones dobles", de: "Doppelte Positionen", nl: "Dubbele posities" }
        ],
        correct: 0,
        explanation: {
          en: "Duplication means positioning your blots so your opponent needs the same number to accomplish different goals - like needing a 6 to both hit you AND escape their back checker. This reduces their effective good rolls because one number serves multiple purposes.",
          es: "La duplicación significa posicionar tus blots para que tu oponente necesite el mismo número para lograr diferentes objetivos - como necesitar un 6 tanto para golpearte COMO para escapar su ficha trasera. Esto reduce sus tiradas buenas efectivas porque un número sirve múltiples propósitos.",
          de: "Duplikation bedeutet Ihre Blots so zu positionieren dass Ihr Gegner dieselbe Zahl braucht um verschiedene Ziele zu erreichen - wie eine 6 zu brauchen um sowohl Sie zu schlagen ALS AUCH ihren hinteren Stein zu entkommen. Dies reduziert ihre effektiv guten Würfe weil eine Zahl mehreren Zwecken dient.",
          nl: "Duplicatie betekent je blots zo positioneren dat je tegenstander hetzelfde getal nodig heeft om verschillende doelen te bereiken - zoals een 6 nodig hebben om zowel jou te raken ALS hun achterste steen te laten ontsnappen. Dit vermindert hun effectief goede worpen omdat één getal meerdere doeleinden dient."
        }
      },
      {
        question: {
          en: "What is the 'minimum distribution' for bearing off?",
          es: "¿Qué es la 'distribución mínima' para sacar fichas?",
          de: "Was ist die 'Mindestverteilung' zum Auswürfeln?",
          nl: "Wat is de 'minimale verdeling' voor uitgooien?"
        },
        options: [
          { en: "Arranging checkers to minimize wasted pips when bearing off", es: "Organizar fichas para minimizar pips desperdiciados al sacar", de: "Steine anordnen um verschwendete Pips beim Auswürfeln zu minimieren", nl: "Stenen schikken om verspilde pips te minimaliseren bij uitgooien" },
          { en: "Fewest checkers", es: "Menos fichas", de: "Wenigste Steine", nl: "Minste stenen" },
          { en: "Smallest spread", es: "Menor dispersión", de: "Kleinste Verbreitung", nl: "Kleinste spreiding" },
          { en: "Basic setup", es: "Configuración básica", de: "Grundaufstellung", nl: "Basis opstelling" }
        ],
        correct: 0,
        explanation: {
          en: "Optimal distribution means arranging checkers in your home board to minimize wastage - ideally with an even distribution across points. For example, spreading checkers from high points (6,5) to lower points prevents rolling high numbers that waste pips when you only have low checkers left.",
          es: "La distribución óptima significa organizar fichas en tu tablero de casa para minimizar desperdicio - idealmente con una distribución uniforme entre puntos. Por ejemplo, dispersar fichas de puntos altos (6,5) a puntos más bajos previene sacar números altos que desperdician pips cuando solo te quedan fichas bajas.",
          de: "Optimale Verteilung bedeutet Steine in Ihrem Home Board anzuordnen um Verschwendung zu minimieren - idealerweise mit gleichmäßiger Verteilung über Punkte. Zum Beispiel verhindert das Verteilen von Steinen von hohen Punkten (6,5) zu niedrigeren Punkten das Würfeln hoher Zahlen die Pips verschwenden wenn Sie nur noch niedrige Steine haben.",
          nl: "Optimale verdeling betekent stenen in je thuisbord schikken om verspilling te minimaliseren - idealiter met een gelijkmatige verdeling over punten. Bijvoorbeeld, stenen spreiden van hoge punten (6,5) naar lagere punten voorkomt het gooien van hoge getallen die pips verspillen wanneer je alleen nog lage stenen hebt."
        }
      },
      {
        question: {
          en: "What is a 'free drop' in match play?",
          es: "¿Qué es un 'free drop' en juego de match?",
          de: "Was ist ein 'freier Abwurf' im Match-Spiel?",
          nl: "Wat is een 'vrije drop' in wedstrijdspel?"
        },
        options: [
          { en: "Dropping a double at certain match scores costs nothing", es: "Rechazar un doble en ciertos puntajes de match no cuesta nada", de: "Eine Verdopplung bei bestimmten Match-Ständen ablehnen kostet nichts", nl: "Een verdubbeling passen bij bepaalde wedstrijdscores kost niets" },
          { en: "Dropping checkers", es: "Soltar fichas", de: "Steine fallenlassen", nl: "Stenen laten vallen" },
          { en: "Losing without penalty", es: "Perder sin penalización", de: "Verlieren ohne Strafe", nl: "Verliezen zonder straf" },
          { en: "Voluntary pass", es: "Pase voluntario", de: "Freiwillige Pass", nl: "Vrijwillige pas" }
        ],
        correct: 0,
        explanation: {
          en: "A free drop occurs at specific match scores where passing a double has the same match winning chances as taking and losing. For example, at 2-away, 4-away (Crawford), you can pass any double for free since taking and losing ends the match the same as passing.",
          es: "Un free drop ocurre en puntajes específicos de match donde rechazar un doble tiene las mismas posibilidades de ganar el match que aceptar y perder. Por ejemplo, en 2-away, 4-away (Crawford), puedes rechazar cualquier doble gratis ya que aceptar y perder termina el match igual que rechazar.",
          de: "Ein freier Abwurf tritt bei spezifischen Match-Ständen auf wo das Ablehnen einer Verdopplung dieselben Match-Gewinnchancen hat wie Nehmen und Verlieren. Zum Beispiel bei 2-away, 4-away (Crawford) können Sie jede Verdopplung kostenlos ablehnen da Nehmen und Verlieren das Match genauso beendet wie Ablehnen.",
          nl: "Een vrije drop vindt plaats bij specifieke wedstrijdscores waar passen van een verdubbeling dezelfde wedstrijdwinkansen heeft als nemen en verliezen. Bijvoorbeeld, bij 2-away, 4-away (Crawford), kun je elke verdubbeling gratis passen omdat nemen en verliezen de wedstrijd hetzelfde beëindigt als passen."
        }
      },
      {
        question: {
          en: "What is 'gammon value' (GV)?",
          es: "¿Qué es 'gammon value' (GV)?",
          de: "Was ist 'Gammon-Wert' (GV)?",
          nl: "Wat is 'gammon waarde' (GV)?"
        },
        options: [
          { en: "How much gammon/backgammon chances affect position equity", es: "Cuánto afectan las posibilidades de gammon/backgammon el equity de posición", de: "Wie stark Gammon/Backgammon-Chancen das Positions-Equity beeinflussen", nl: "Hoeveel gammon/backgammon kansen positie equity beïnvloeden" },
          { en: "Points for gammon", es: "Puntos por gammon", de: "Punkte für Gammon", nl: "Punten voor gammon" },
          { en: "Gammon probability", es: "Probabilidad de gammon", de: "Gammon-Wahrscheinlichkeit", nl: "Gammon kans" },
          { en: "Value of game", es: "Valor del juego", de: "Wert des Spiels", nl: "Waarde van spel" }
        ],
        correct: 0,
        explanation: {
          en: "Gammon value (GV) measures how much gammon and backgammon chances affect a position's equity. High GV positions (like blitzes) have significant gammon potential, making cube decisions more aggressive. In money play, GV matters a lot; in match play at certain scores, GV can be irrelevant.",
          es: "Gammon value (GV) mide cuánto afectan las posibilidades de gammon y backgammon el equity de una posición. Posiciones de alto GV (como blitzes) tienen potencial de gammon significativo, haciendo las decisiones de cubo más agresivas. En juego de dinero, GV importa mucho; en juego de match en ciertos puntajes, GV puede ser irrelevante.",
          de: "Gammon-Wert (GV) misst wie stark Gammon- und Backgammon-Chancen das Equity einer Position beeinflussen. Hohe GV-Positionen (wie Blitzes) haben erhebliches Gammon-Potenzial, was Würfelentscheidungen aggressiver macht. Im Geldspiel zählt GV viel; im Match-Spiel bei bestimmten Ständen kann GV irrelevant sein.",
          nl: "Gammon waarde (GV) meet hoeveel gammon en backgammon kansen de equity van een positie beïnvloeden. Hoge GV posities (zoals blitzes) hebben aanzienlijk gammon potentieel, wat dobbelsteenbeslissingen agressiever maakt. In geldspel is GV belangrijk; in wedstrijdspel bij bepaalde scores kan GV irrelevant zijn."
        }
      },
      {
        question: {
          en: "What is the 'Woolsey window'?",
          es: "¿Qué es la 'ventana de Woolsey'?",
          de: "Was ist das 'Woolsey-Fenster'?",
          nl: "Wat is het 'Woolsey venster'?"
        },
        options: [
          { en: "Range where position is too good to double but also a take", es: "Rango donde la posición es demasiado buena para doblar pero también aceptable", de: "Bereich wo Position zu gut zum Verdoppeln ist aber auch Nehmen", nl: "Bereik waar positie te goed is om te verdubbelen maar ook een nemen" },
          { en: "Opening strategy", es: "Estrategia de apertura", de: "Eröffnungsstrategie", nl: "Openingsstrategie" },
          { en: "Board viewing angle", es: "Ángulo de vista del tablero", de: "Brett-Betrachtungswinkel", nl: "Bordkijkhoek" },
          { en: "Doubling range", es: "Rango de doblaje", de: "Verdopplungsbereich", nl: "Verdubbelbereik" }
        ],
        correct: 0,
        explanation: {
          en: "The Woolsey window is a range where you're too good to double (you'd lose market), but if doubled, it's still a take. This happens in positions with high volatility where doubling now would let opponent pass, but waiting risks improvement. Named after Kit Woolsey.",
          es: "La ventana de Woolsey es un rango donde eres demasiado bueno para doblar (perderías mercado), pero si te doblan, aún es aceptable. Esto ocurre en posiciones con alta volatilidad donde doblar ahora dejaría al oponente rechazar, pero esperar arriesga mejora. Nombrado por Kit Woolsey.",
          de: "Das Woolsey-Fenster ist ein Bereich wo Sie zu gut zum Verdoppeln sind (Sie würden Markt verlieren), aber wenn verdoppelt wird, ist es noch ein Nehmen. Dies geschieht in Positionen mit hoher Volatilität wo jetzt Verdoppeln den Gegner ablehnen ließe, aber Warten Verbesserung riskiert. Benannt nach Kit Woolsey.",
          nl: "Het Woolsey venster is een bereik waar je te goed bent om te verdubbelen (je zou markt verliezen), maar als verdubbeld wordt, is het nog steeds een nemen. Dit gebeurt in posities met hoge volatiliteit waar nu verdubbelen tegenstander zou laten passen, maar wachten verbetering riskeert. Genoemd naar Kit Woolsey."
        }
      },
      {
        question: {
          en: "What is a 'crunch position'?",
          es: "¿Qué es una 'posición de crunch'?",
          de: "Was ist eine 'Crunch-Position'?",
          nl: "Wat is een 'crunch positie'?"
        },
        options: [
          { en: "Running out of good moves and forced to break key points", es: "Quedarse sin buenos movimientos y obligado a romper puntos clave", de: "Keine guten Züge mehr haben und gezwungen sein Schlüsselpunkte zu brechen", nl: "Zonder goede zetten zitten en gedwongen worden sleutelpunten te breken" },
          { en: "Critical position", es: "Posición crítica", de: "Kritische Position", nl: "Kritieke positie" },
          { en: "Tight position", es: "Posición apretada", de: "Enge Position", nl: "Krappe positie" },
          { en: "Pressure situation", es: "Situación de presión", de: "Drucksituation", nl: "Druksituatie" }
        ],
        correct: 0,
        explanation: {
          en: "The crunch happens when you run out of timing and must break valuable points because you have no other moves. This usually occurs in priming battles or holding games when your spare checkers are exhausted. Getting crunched often signals the beginning of a collapse.",
          es: "El crunch ocurre cuando te quedas sin timing y debes romper puntos valiosos porque no tienes otros movimientos. Esto usualmente ocurre en batallas de primas o juegos de retención cuando tus fichas de repuesto están agotadas. Ser crunched a menudo señala el comienzo de un colapso.",
          de: "Der Crunch passiert wenn Ihnen das Timing ausgeht und Sie wertvolle Punkte brechen müssen weil Sie keine anderen Züge haben. Dies geschieht normalerweise in Priming-Kämpfen oder Haltespielen wenn Ihre Reservesteine erschöpft sind. Gecruncht zu werden signalisiert oft den Beginn eines Zusammenbruchs.",
          nl: "De crunch vindt plaats wanneer je geen timing meer hebt en waardevolle punten moet breken omdat je geen andere zetten hebt. Dit gebeurt meestal in prime gevechten of vasthoudspellen wanneer je reserve stenen uitgeput zijn. Gecruncht worden signaleert vaak het begin van een ineenstorting."
        }
      },
      {
        question: {
          en: "What does it mean to 'own the doubling window'?",
          es: "¿Qué significa 'poseer la ventana de doblaje'?",
          de: "Was bedeutet 'das Verdopplungsfenster besitzen'?",
          nl: "Wat betekent het 'het verdubbel venster bezitten'?"
        },
        options: [
          { en: "Having cube control in position with clear doubling opportunities", es: "Tener control del cubo en posición con claras oportunidades de doblaje", de: "Würfelkontrolle in Position mit klaren Verdopplungsmöglichkeiten haben", nl: "Dobbelsteencontrole hebben in positie met duidelijke verdubbelmogelijkheden" },
          { en: "Controlling game tempo", es: "Controlar tempo del juego", de: "Spieltempo kontrollieren", nl: "Speltempo controleren" },
          { en: "Best cube position", es: "Mejor posición de cubo", de: "Beste Würfelposition", nl: "Beste dobbelsteenpositie" },
          { en: "Strategic advantage", es: "Ventaja estratégica", de: "Strategischer Vorteil", nl: "Strategisch voordeel" }
        ],
        correct: 0,
        explanation: {
          en: "Owning the doubling window means you have cube access in a volatile position where you're likely to get efficient doubles/redoubles. Your opponent, lacking cube access, can't counter-double and must fear your threats. This is a major strategic advantage in complex positions.",
          es: "Poseer la ventana de doblaje significa que tienes acceso al cubo en una posición volátil donde es probable que obtengas dobles/redoblajes eficientes. Tu oponente, sin acceso al cubo, no puede contra-doblar y debe temer tus amenazas. Esta es una ventaja estratégica importante en posiciones complejas.",
          de: "Das Verdopplungsfenster zu besitzen bedeutet Sie haben Würfelzugang in einer volatilen Position wo Sie wahrscheinlich effiziente Verdopplungen/Wiederverdopplungen bekommen. Ihr Gegner ohne Würfelzugang kann nicht gegenverdoppeln und muss Ihre Drohungen fürchten. Dies ist ein großer strategischer Vorteil in komplexen Positionen.",
          nl: "Het verdubbel venster bezitten betekent dat je dobbelsteentoegang hebt in een volatiele positie waar je waarschijnlijk efficiënte verdubbeling/herverdubbeling krijgt. Je tegenstander, zonder dobbelsteentoegang, kan niet tegenverdubbelen en moet je dreigingen vrezen. Dit is een groot strategisch voordeel in complexe posities."
        }
      },
      {
        question: {
          en: "What is 'pip wastage' in racing positions?",
          es: "¿Qué es 'pip wastage' en posiciones de carrera?",
          de: "Was ist 'Pip-Verschwendung' in Rennpositionen?",
          nl: "Wat is 'pip verspilling' in raceposities?"
        },
        options: [
          { en: "Using more pips than necessary due to poor distribution", es: "Usar más pips de los necesarios debido a mala distribución", de: "Mehr Pips als nötig verwenden wegen schlechter Verteilung", nl: "Meer pips gebruiken dan nodig door slechte verdeling" },
          { en: "Losing pips", es: "Perder pips", de: "Pips verlieren", nl: "Pips verliezen" },
          { en: "Inefficient movement", es: "Movimiento ineficiente", de: "Ineffiziente Bewegung", nl: "Inefficiënte beweging" },
          { en: "Bad rolls", es: "Malas tiradas", de: "Schlechte Würfe", nl: "Slechte worpen" }
        ],
        correct: 0,
        explanation: {
          en: "Pip wastage occurs when your distribution forces you to use more pips than optimal to bear off. For example, having all checkers on the 1-point means rolling 6-5 wastes 9 pips (you only bear off 2 checkers). Good distribution minimizes expected wastage.",
          es: "Pip wastage ocurre cuando tu distribución te obliga a usar más pips de lo óptimo para sacar. Por ejemplo, tener todas las fichas en el punto 1 significa que sacar 6-5 desperdicia 9 pips (solo sacas 2 fichas). Buena distribución minimiza wastage esperado.",
          de: "Pip-Verschwendung tritt auf wenn Ihre Verteilung Sie zwingt mehr Pips als optimal zu verwenden um auszuwürfeln. Zum Beispiel bedeutet alle Steine auf dem 1-Punkt zu haben dass 6-5 zu würfeln 9 Pips verschwendet (Sie würfeln nur 2 Steine aus). Gute Verteilung minimiert erwartete Verschwendung.",
          nl: "Pip verspilling vindt plaats wanneer je verdeling je dwingt meer pips te gebruiken dan optimaal om uit te gooien. Bijvoorbeeld, alle stenen op het 1-punt hebben betekent dat 6-5 gooien 9 pips verspilt (je gooit slechts 2 stenen uit). Goede verdeling minimaliseert verwachte verspilling."
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
