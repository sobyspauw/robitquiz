// Backgammon Quiz - Level 6: Grandmaster
(function() {
  const level6 = {
    name: {
      en: "Backgammon - Grandmaster",
      es: "Backgammon - Gran Maestro",
      de: "Backgammon - Großmeister",
      nl: "Backgammon - Grootmeester"
    },
    questions: [
      {
        question: {
          en: "In match play, what is the '25% take point' rule?",
          es: "En juego de match, ¿qué es la regla del '25% de punto de aceptación'?",
          de: "Im Match-Spiel, was ist die '25%-Annahme-Punkt'-Regel?",
          nl: "In wedstrijdspel, wat is de '25% acceptatiepunt' regel?"
        },
        options: [
          { en: "Accept if you have at least 25% winning chances (22-23% with cube access)", es: "Aceptar si tienes al menos 25% de posibilidades de ganar (22-23% con acceso al cubo)", de: "Akzeptieren wenn Sie mindestens 25% Gewinnchancen haben (22-23% mit Würfelzugriff)", nl: "Accepteren als je tenminste 25% winkans hebt (22-23% met dobbelsteen toegang)" },
          { en: "Double at 25% advantage", es: "Doblar con 25% de ventaja", de: "Verdoppeln bei 25% Vorteil", nl: "Verdubbelen bij 25% voordeel" },
          { en: "Take if opponent has 25% winning chances", es: "Aceptar si el oponente tiene 25% de posibilidades", de: "Annehmen wenn Gegner 25% Gewinnchancen hat", nl: "Accepteren als tegenstander 25% winkans heeft" },
          { en: "Win 25% of games", es: "Ganar 25% de juegos", de: "25% der Spiele gewinnen", nl: "Win 25% van spellen" }
        ],
        correct: 0,
        explanation: {
          en: "The 25% take point means you should accept a double if you have at least 25% winning chances in money games (or about 22-23% in match play when you have cube access/recube potential). Below this threshold, passing is more profitable than accepting and losing.",
          es: "El punto de aceptación del 25% significa que debes aceptar un doble si tienes al menos 25% de posibilidades de ganar en juegos de dinero (o aproximadamente 22-23% en juego de match cuando tienes acceso al cubo/potencial de redoble). Por debajo de este umbral, pasar es más rentable que aceptar y perder.",
          de: "Der 25%-Annahmepunkt bedeutet dass Sie ein Doppeln akzeptieren sollten wenn Sie mindestens 25% Gewinnchancen haben in Geldspielen (oder etwa 22-23% im Match-Spiel wenn Sie Würfelzugriff/Rückverdopplungspotenzial haben). Unter dieser Schwelle ist Passen profitabler als Annehmen und Verlieren.",
          nl: "Het 25% acceptatiepunt betekent dat je een verdubbeling moet accepteren als je tenminste 25% winkans hebt in geldspellen (of ongeveer 22-23% in wedstrijdspel wanneer je dobbelsteentoegang/herverdubbel potentieel hebt). Onder deze drempel is passen winstgevender dan accepteren en verliezen."
        }
      },
      {
        question: {
          en: "What is 'equity' in backgammon?",
          es: "¿Qué es 'equity' en backgammon?",
          de: "Was ist 'Equity' im Backgammon?",
          nl: "Wat is 'equity' in backgammon?"
        },
        options: [
          { en: "Expected value of position in points or money", es: "Valor esperado de posición en puntos o dinero", de: "Erwarteter Wert der Position in Punkten oder Geld", nl: "Verwachte waarde van positie in punten of geld" },
          { en: "Fairness of game", es: "Equidad del juego", de: "Fairness des Spiels", nl: "Eerlijkheid van spel" },
          { en: "Equal positions", es: "Posiciones iguales", de: "Gleiche Positionen", nl: "Gelijke posities" },
          { en: "Quality of play", es: "Calidad de juego", de: "Spielqualität", nl: "Spelkwaliteit" }
        ],
        correct: 0,
        explanation: {
          en: "Equity is the expected value of your position measured in points (match play) or money (money games). For example, if you have 70% winning chances in a 1-point game, your equity is +0.40 (0.70 - 0.30). It's the fundamental metric for evaluating positions and decisions.",
          es: "Equity es el valor esperado de tu posición medido en puntos (juego de match) o dinero (juegos de dinero). Por ejemplo, si tienes 70% de posibilidades de ganar en un juego de 1 punto, tu equity es +0.40 (0.70 - 0.30). Es la métrica fundamental para evaluar posiciones y decisiones.",
          de: "Equity ist der erwartete Wert Ihrer Position gemessen in Punkten (Match-Spiel) oder Geld (Geldspiele). Zum Beispiel wenn Sie 70% Gewinnchancen in einem 1-Punkt-Spiel haben ist Ihr Equity +0,40 (0,70 - 0,30). Es ist die fundamentale Metrik zur Bewertung von Positionen und Entscheidungen.",
          nl: "Equity is de verwachte waarde van je positie gemeten in punten (wedstrijdspel) of geld (geldspellen). Bijvoorbeeld, als je 70% winkans hebt in een 1-punts spel, is je equity +0,40 (0,70 - 0,30). Het is de fundamentele metriek voor het evalueren van posities en beslissingen."
        }
      },
      {
        question: {
          en: "What is 'volatility adjustment' in cube decisions?",
          es: "¿Qué es el 'ajuste de volatilidad' en decisiones de cubo?",
          de: "Was ist 'Volatilitätsanpassung' bei Würfelentscheidungen?",
          nl: "Wat is 'volatiliteitsaanpassing' bij dobbelsteenbeslissingen?"
        },
        options: [
          { en: "Adjusting take point based on gammon chances and position swings", es: "Ajustar punto de aceptación basado en posibilidades de gammon y cambios de posición", de: "Annahmepunkt anpassen basierend auf Gammon-Chancen und Positionsschwankungen", nl: "Acceptatiepunt aanpassen op basis van gammon kansen en positie schommelingen" },
          { en: "Changing cube value during game", es: "Cambiar valor del cubo durante juego", de: "Würfelwert während Spiel ändern", nl: "Dobbelsteenwaarde veranderen tijdens spel" },
          { en: "Adjusting for player emotions", es: "Ajustar por emociones del jugador", de: "An Spielergefühle anpassen", nl: "Aanpassen voor speler emoties" },
          { en: "Speed of doubling decisions", es: "Velocidad de decisiones de doblaje", de: "Geschwindigkeit der Verdopplungsentscheidungen", nl: "Snelheid van verdubbelbeslissingen" }
        ],
        correct: 0,
        explanation: {
          en: "Volatility adjustment accounts for positions with high gammon chances or dramatic position swings. Higher volatility makes doubles more powerful (you can win/lose more) and makes the take point lower. In highly volatile positions, you may double earlier and pass more readily than the standard 25% take point suggests.",
          es: "El ajuste de volatilidad tiene en cuenta posiciones con altas posibilidades de gammon o cambios dramáticos de posición. Mayor volatilidad hace que los dobles sean más poderosos (puedes ganar/perder más) y hace que el punto de aceptación sea más bajo. En posiciones altamente volátiles, puedes doblar antes y pasar más fácilmente que lo que sugiere el punto de aceptación estándar del 25%.",
          de: "Volatilitätsanpassung berücksichtigt Positionen mit hohen Gammon-Chancen oder dramatischen Positionsschwankungen. Höhere Volatilität macht Verdopplungen mächtiger (Sie können mehr gewinnen/verlieren) und macht den Annahmepunkt niedriger. In hochvolatilen Positionen können Sie früher verdoppeln und leichter passen als der Standard-25%-Annahmepunkt nahelegt.",
          nl: "Volatiliteitsaanpassing houdt rekening met posities met hoge gammon kansen of dramatische positie schommelingen. Hogere volatiliteit maakt verdubbelen krachtiger (je kunt meer winnen/verliezen) en maakt het acceptatiepunt lager. In zeer volatiele posities kun je eerder verdubbelen en gemakkelijker passen dan het standaard 25% acceptatiepunt suggereert."
        }
      },
      {
        question: {
          en: "What is 'escape velocity' in racing positions?",
          es: "¿Qué es 'velocidad de escape' en posiciones de carrera?",
          de: "Was ist 'Fluchtgeschwindigkeit' in Rennpositionen?",
          nl: "Wat is 'ontsnappingssnelheid' in race posities?"
        },
        options: [
          { en: "Average pips moved per roll (~8.17 for optimal bearing off)", es: "Promedio de pips movidos por tirada (~8.17 para sacar fichas óptimamente)", de: "Durchschnittliche Pips pro Wurf (~8,17 für optimales Auswürfeln)", nl: "Gemiddelde pips verplaatst per worp (~8,17 voor optimaal uitgooien)" },
          { en: "Speed to escape from opponent's board", es: "Velocidad para escapar del tablero del oponente", de: "Geschwindigkeit um aus Brett des Gegners zu entkommen", nl: "Snelheid om te ontsnappen uit bord van tegenstander" },
          { en: "How fast you roll dice", es: "Qué tan rápido lanzas dados", de: "Wie schnell Sie Würfel werfen", nl: "Hoe snel je dobbelstenen gooit" },
          { en: "Race finishing speed", es: "Velocidad de finalización de carrera", de: "Rennzielgeschwindigkeit", nl: "Race eindsnelheid" }
        ],
        correct: 0,
        explanation: {
          en: "Escape velocity refers to the average number of pips you move per roll. In optimal bearing-off positions, this is approximately 8.17 pips per roll. Understanding this helps evaluate racing positions - if your distribution is poor, you'll have lower escape velocity and need more rolls to bear off.",
          es: "La velocidad de escape se refiere al número promedio de pips que mueves por tirada. En posiciones óptimas de sacar fichas, esto es aproximadamente 8.17 pips por tirada. Entender esto ayuda a evaluar posiciones de carrera - si tu distribución es pobre, tendrás menor velocidad de escape y necesitarás más tiradas para sacar fichas.",
          de: "Fluchtgeschwindigkeit bezieht sich auf die durchschnittliche Anzahl von Pips die Sie pro Wurf bewegen. In optimalen Auswürfelpositionen sind dies etwa 8,17 Pips pro Wurf. Dies zu verstehen hilft Rennpositionen zu bewerten - wenn Ihre Verteilung schlecht ist haben Sie niedrigere Fluchtgeschwindigkeit und brauchen mehr Würfe zum Auswürfeln.",
          nl: "Ontsnappingssnelheid verwijst naar het gemiddelde aantal pips dat je per worp verplaatst. In optimale uitgooiposities is dit ongeveer 8,17 pips per worp. Dit begrijpen helpt race posities te evalueren - als je verdeling slecht is, heb je lagere ontsnappingssnelheid en heb je meer worpen nodig om uit te gooien."
        }
      },
      {
        question: {
          en: "What is a 'redouble to 4' scenario?",
          es: "¿Qué es un escenario de 'redoble a 4'?",
          de: "Was ist ein 'Rückverdopplung auf 4'-Szenario?",
          nl: "Wat is een 'herverdubbel naar 4' scenario?"
        },
        options: [
          { en: "Cube owner redoubles from 2 to 4, opponent loses cube access", es: "Dueño del cubo redobla de 2 a 4, oponente pierde acceso al cubo", de: "Würfelbesitzer verdoppelt von 2 auf 4 zurück, Gegner verliert Würfelzugriff", nl: "Dobbelsteenbezitter herverdubbelt van 2 naar 4, tegenstander verliest dobbelsteentoegang" },
          { en: "Four-player match", es: "Partido de cuatro jugadores", de: "Vier-Spieler-Match", nl: "Vier-speler wedstrijd" },
          { en: "Fourth redouble of game", es: "Cuarto redoble del juego", de: "Vierte Rückverdopplung des Spiels", nl: "Vierde herverdubbel van spel" },
          { en: "Doubling at position 4", es: "Doblar en posición 4", de: "Verdoppeln an Position 4", nl: "Verdubbelen bij positie 4" }
        ],
        correct: 0,
        explanation: {
          en: "A redouble to 4 occurs when the player owning the cube at 2 redoubles it to 4. This is powerful because if the opponent takes, they own the cube but can't use the leverage - you've essentially 'cashed' your cube ownership. The decision involves complex match equity calculations.",
          es: "Un redoble a 4 ocurre cuando el jugador que posee el cubo en 2 lo redobla a 4. Esto es poderoso porque si el oponente acepta, posee el cubo pero no puede usar el apalancamiento - esencialmente has 'cobrado' tu propiedad del cubo. La decisión implica cálculos complejos de equidad de match.",
          de: "Eine Rückverdopplung auf 4 tritt auf wenn der Spieler der den Würfel bei 2 besitzt ihn auf 4 rückverdoppelt. Dies ist mächtig weil wenn der Gegner annimmt besitzt er den Würfel aber kann den Hebel nicht nutzen - Sie haben im Wesentlichen Ihren Würfelbesitz 'ausgezahlt'. Die Entscheidung beinhaltet komplexe Match-Equity-Berechnungen.",
          nl: "Een herverdubbel naar 4 vindt plaats wanneer de speler die de dobbelsteen bij 2 bezit het herverdubbelt naar 4. Dit is krachtig omdat als de tegenstander accepteert, ze de dobbelsteen bezitten maar de hefboomwerking niet kunnen gebruiken - je hebt in wezen je dobbelsteenbezit 'verzilverd'. De beslissing omvat complexe wedstrijd equity berekeningen."
        }
      },
      {
        question: {
          en: "What is the 'Naccel' or 'Thorp count'?",
          es: "¿Qué es el 'Naccel' o 'conteo de Thorp'?",
          de: "Was ist die 'Naccel' oder 'Thorp-Zählung'?",
          nl: "Wat is de 'Naccel' of 'Thorp telling'?"
        },
        options: [
          { en: "Formula adjusting pip count for distribution quality (wastage)", es: "Fórmula que ajusta el conteo de pips por calidad de distribución (desperdicio)", de: "Formel die Pip-Zählung für Verteilungsqualität anpasst (Verschwendung)", nl: "Formule die pip count aanpast voor verdelingskwaliteit (verspilling)" },
          { en: "Player ranking system", es: "Sistema de clasificación de jugadores", de: "Spieler-Rangsystem", nl: "Speler rangschikkingssysteem" },
          { en: "Tournament scoring method", es: "Método de puntuación de torneo", de: "Turnier-Bewertungsmethode", nl: "Toernooi scoringsmethode" },
          { en: "Dice probability calculator", es: "Calculadora de probabilidad de dados", de: "Würfel-Wahrscheinlichkeitsrechner", nl: "Dobbelstenen waarschijnlijkheidscalculator" }
        ],
        correct: 0,
        explanation: {
          en: "The Naccel (Normalized Acceleration) or Thorp count adjusts your raw pip count based on checker distribution inefficiencies. It adds penalties for stacks (wasted checkers) and crossovers (extra rolls needed). Effective pip count = raw pips + wastage adjustments, giving a more accurate racing evaluation.",
          es: "El Naccel (Aceleración Normalizada) o conteo de Thorp ajusta tu conteo de pips bruto basado en ineficiencias de distribución de fichas. Añade penalizaciones por pilas (fichas desperdiciadas) y cruces (tiradas extra necesarias). Conteo efectivo de pips = pips brutos + ajustes de desperdicio, dando una evaluación de carrera más precisa.",
          de: "Die Naccel (Normalisierte Beschleunigung) oder Thorp-Zählung passt Ihre rohe Pip-Zählung basierend auf Steinverteilungsineffizienzen an. Sie fügt Strafen für Stapel (verschwendete Steine) und Überquerungen (zusätzliche Würfe benötigt) hinzu. Effektive Pip-Zählung = rohe Pips + Verschwendungsanpassungen, was eine genauere Rennbewertung ergibt.",
          nl: "De Naccel (Genormaliseerde Versnelling) of Thorp telling past je ruwe pip count aan op basis van steenverdelingsinefficiënties. Het voegt straffen toe voor stapels (verspilde stenen) en oversteekplaatsen (extra worpen nodig). Effectieve pip count = ruwe pips + verspillingsaanpassingen, wat een nauwkeurigere race evaluatie geeft."
        }
      },
      {
        question: {
          en: "What is 'cube efficiency'?",
          es: "¿Qué es 'eficiencia de cubo'?",
          de: "Was ist 'Würfeleffizienz'?",
          nl: "Wat is 'dobbelsteenefficiëntie'?"
        },
        options: [
          { en: "How well winning chances translate into cube power", es: "Qué tan bien las posibilidades de ganar se traducen en poder de cubo", de: "Wie gut Gewinnchancen sich in Würfelkraft übersetzen", nl: "Hoe goed winkansen zich vertalen in dobbelsteenkracht" },
          { en: "Speed of cube decisions", es: "Velocidad de decisiones de cubo", de: "Geschwindigkeit von Würfelentscheidungen", nl: "Snelheid van dobbelsteenbeslissingen" },
          { en: "Cube quality rating", es: "Calificación de calidad del cubo", de: "Würfelqualitätsbewertung", nl: "Dobbelsteenkwaliteit beoordeling" },
          { en: "Optimal cube usage rate", es: "Tasa de uso óptimo del cubo", de: "Optimale Würfelnutzungsrate", nl: "Optimaal dobbelsteengebruik percentage" }
        ],
        correct: 0,
        explanation: {
          en: "Cube efficiency measures how effectively your winning chances translate into cube leverage. Volatile positions (lots of contact, gammons) have LOW efficiency - you need a bigger advantage to double. Pure races have HIGH efficiency - smaller edges justify doubling. This fundamentally affects cube decisions.",
          es: "La eficiencia de cubo mide qué tan efectivamente tus posibilidades de ganar se traducen en apalancamiento de cubo. Posiciones volátiles (mucho contacto, gammons) tienen BAJA eficiencia - necesitas mayor ventaja para doblar. Carreras puras tienen ALTA eficiencia - ventajas menores justifican doblar. Esto afecta fundamentalmente las decisiones de cubo.",
          de: "Würfeleffizienz misst wie effektiv Ihre Gewinnchancen sich in Würfelhebel übersetzen. Volatile Positionen (viel Kontakt, Gammons) haben NIEDRIGE Effizienz - Sie brauchen größeren Vorteil zum Verdoppeln. Reine Rennen haben HOHE Effizienz - kleinere Vorteile rechtfertigen Verdoppeln. Dies beeinflusst fundamental Würfelentscheidungen.",
          nl: "Dobbelsteenefficiëntie meet hoe effectief je winkansen zich vertalen in dobbelsteenhefboomwerking. Volatiele posities (veel contact, gammons) hebben LAGE efficiëntie - je hebt groter voordeel nodig om te verdubbelen. Pure races hebben HOGE efficiëntie - kleinere voordelen rechtvaardigen verdubbelen. Dit beïnvloedt fundamenteel dobbelsteenbeslissingen."
        }
      },
      {
        question: {
          en: "What is the 'n-ply' concept in bot analysis?",
          es: "¿Qué es el concepto 'n-ply' en análisis de bots?",
          de: "Was ist das 'n-ply'-Konzept in der Bot-Analyse?",
          nl: "Wat is het 'n-ply' concept in bot analyse?"
        },
        options: [
          { en: "Depth of move analysis (2-ply = your move + opponent response)", es: "Profundidad de análisis de movimiento (2-ply = tu movimiento + respuesta del oponente)", de: "Tiefe der Zuganalyse (2-ply = Ihr Zug + Gegnerantwort)", nl: "Diepte van zet analyse (2-ply = jouw zet + tegenstander reactie)" },
          { en: "Number of players analyzed", es: "Número de jugadores analizados", de: "Anzahl analysierter Spieler", nl: "Aantal geanalyseerde spelers" },
          { en: "Board layers examined", es: "Capas de tablero examinadas", de: "Untersuchte Brettschichten", nl: "Onderzochte bordlagen" },
          { en: "Plywood board quality", es: "Calidad de tablero de contrachapado", de: "Sperrholzbrettqualität", nl: "Triplex bordkwaliteit" }
        ],
        correct: 0,
        explanation: {
          en: "N-ply refers to analysis depth. 0-ply evaluates just the current position. 1-ply considers your move. 2-ply looks at your move plus opponent's best response. 3-ply adds your counter-response. Modern bots use 2-ply or 3-ply for accurate play, as deeper analysis catches tactical sequences.",
          es: "N-ply se refiere a la profundidad del análisis. 0-ply evalúa solo la posición actual. 1-ply considera tu movimiento. 2-ply mira tu movimiento más la mejor respuesta del oponente. 3-ply añade tu contra-respuesta. Los bots modernos usan 2-ply o 3-ply para juego preciso, ya que el análisis más profundo captura secuencias tácticas.",
          de: "N-ply bezieht sich auf Analysetiefe. 0-ply bewertet nur die aktuelle Position. 1-ply berücksichtigt Ihren Zug. 2-ply betrachtet Ihren Zug plus beste Antwort des Gegners. 3-ply fügt Ihre Gegenantwort hinzu. Moderne Bots verwenden 2-ply oder 3-ply für genaues Spiel, da tiefere Analyse taktische Sequenzen erfasst.",
          nl: "N-ply verwijst naar analysediepte. 0-ply evalueert alleen de huidige positie. 1-ply beschouwt je zet. 2-ply kijkt naar je zet plus tegenstanders beste reactie. 3-ply voegt je tegenreactie toe. Moderne bots gebruiken 2-ply of 3-ply voor nauwkeurig spel, omdat diepere analyse tactische sequenties vangt."
        }
      },
      {
        question: {
          en: "What is 'GNUbg' and why is it historically significant?",
          es: "¿Qué es 'GNUbg' y por qué es históricamente significativo?",
          de: "Was ist 'GNUbg' und warum ist es historisch bedeutsam?",
          nl: "Wat is 'GNUbg' en waarom is het historisch significant?"
        },
        options: [
          { en: "Free open-source AI that revolutionized backgammon analysis", es: "IA de código abierto gratuita que revolucionó el análisis de backgammon", de: "Kostenlose Open-Source-KI die Backgammon-Analyse revolutionierte", nl: "Gratis open-source AI die backgammon analyse revolutioneerde" },
          { en: "Professional tournament organization", es: "Organización de torneo profesional", de: "Professionelle Turnierorganisation", nl: "Professionele toernooiorganisatie" },
          { en: "Backgammon board brand", es: "Marca de tablero de backgammon", de: "Backgammon-Brett-Marke", nl: "Backgammon bord merk" },
          { en: "Rating system for players", es: "Sistema de clasificación para jugadores", de: "Bewertungssystem für Spieler", nl: "Beoordelingssysteem voor spelers" }
        ],
        correct: 0,
        explanation: {
          en: "GNUbg (GNU Backgammon) is a free, open-source AI using neural networks to play at world-class level. It revolutionized learning by making expert analysis accessible to everyone. Players can analyze games, study positions, and understand equity and errors - democratizing backgammon knowledge.",
          es: "GNUbg (GNU Backgammon) es una IA gratuita de código abierto que usa redes neuronales para jugar a nivel de clase mundial. Revolucionó el aprendizaje al hacer el análisis experto accesible para todos. Los jugadores pueden analizar juegos, estudiar posiciones y entender equity y errores - democratizando el conocimiento de backgammon.",
          de: "GNUbg (GNU Backgammon) ist eine kostenlose Open-Source-KI die neuronale Netze verwendet um auf Weltklasse-Niveau zu spielen. Es revolutionierte das Lernen indem es Expertenanalyse für jeden zugänglich machte. Spieler können Spiele analysieren, Positionen studieren und Equity und Fehler verstehen - Demokratisierung von Backgammon-Wissen.",
          nl: "GNUbg (GNU Backgammon) is een gratis, open-source AI die neurale netwerken gebruikt om op wereldklasse niveau te spelen. Het revolutioneerde leren door expertanalyse toegankelijk te maken voor iedereen. Spelers kunnen spellen analyseren, posities bestuderen en equity en fouten begrijpen - democratisering van backgammon kennis."
        }
      },
      {
        question: {
          en: "What is a 'rollout' in backgammon analysis?",
          es: "¿Qué es un 'rollout' en análisis de backgammon?",
          de: "Was ist ein 'Rollout' in der Backgammon-Analyse?",
          nl: "Wat is een 'rollout' in backgammon analyse?"
        },
        options: [
          { en: "Playing position to completion thousands of times to determine equity", es: "Jugar posición hasta completarla miles de veces para determinar equity", de: "Position tausende Male bis Abschluss spielen um Equity zu bestimmen", nl: "Positie duizenden keren tot voltooiing spelen om equity te bepalen" },
          { en: "Rolling dice perfectly", es: "Lanzar dados perfectamente", de: "Würfel perfekt werfen", nl: "Dobbelstenen perfect gooien" },
          { en: "Unrolling the board", es: "Desenrollar el tablero", de: "Das Brett ausrollen", nl: "Het bord uitrollen" },
          { en: "Tournament structure", es: "Estructura de torneo", de: "Turnierstruktur", nl: "Toernooistructuur" }
        ],
        correct: 0,
        explanation: {
          en: "A rollout plays a position to completion many times (typically 1,296+ games) to determine true equity more accurately than neural network evaluation alone. Rollouts settle close decisions and verify theory. They're computationally expensive but provide the most accurate position evaluations.",
          es: "Un rollout juega una posición hasta completarla muchas veces (típicamente 1,296+ juegos) para determinar el equity verdadero con más precisión que solo la evaluación de red neuronal. Los rollouts resuelven decisiones cercanas y verifican teoría. Son computacionalmente costosos pero proporcionan las evaluaciones de posición más precisas.",
          de: "Ein Rollout spielt eine Position viele Male bis zum Abschluss (typischerweise 1.296+ Spiele) um wahres Equity genauer zu bestimmen als nur neuronale Netzwerkbewertung. Rollouts klären knappe Entscheidungen und verifizieren Theorie. Sie sind rechenintensiv aber liefern die genauesten Positionsbewertungen.",
          nl: "Een rollout speelt een positie vele malen tot voltooiing (typisch 1.296+ spellen) om echte equity nauwkeuriger te bepalen dan alleen neurale netwerk evaluatie. Rollouts beslechten krappe beslissingen en verifiëren theorie. Ze zijn rekenintensief maar bieden de meest nauwkeurige positie evaluaties."
        }
      },
      {
        question: {
          en: "What is the 'free drop' at 2-away 2-away score?",
          es: "¿Qué es el 'free drop' en marcador 2-away 2-away?",
          de: "Was ist der 'Free Drop' bei 2-away 2-away Stand?",
          nl: "Wat is de 'free drop' bij 2-away 2-away score?"
        },
        options: [
          { en: "Passing initial double costs nothing - both outcomes lead to Crawford", es: "Pasar doble inicial no cuesta nada - ambos resultados llevan a Crawford", de: "Erstes Doppeln passen kostet nichts - beide Ergebnisse führen zu Crawford", nl: "Passen van initiële verdubbeling kost niets - beide uitkomsten leiden tot Crawford" },
          { en: "Free resignation allowed", es: "Renuncia gratuita permitida", de: "Kostenlose Aufgabe erlaubt", nl: "Gratis opgave toegestaan" },
          { en: "Dropping piece without penalty", es: "Soltar pieza sin penalización", de: "Stein ohne Strafe fallen lassen", nl: "Steen laten vallen zonder straf" },
          { en: "No entry fee needed", es: "No se necesita tarifa de entrada", de: "Keine Eintrittsgebühr erforderlich", nl: "Geen inschrijfgeld nodig" }
        ],
        correct: 0,
        explanation: {
          en: "At 2-away 2-away, passing an initial double costs you nothing because both passing (now 2-away Crawford) and taking-then-losing (also 2-away Crawford) leave you in identical positions. This allows extremely aggressive passing - you only take when you have excellent winning chances.",
          es: "En 2-away 2-away, pasar un doble inicial no te cuesta nada porque tanto pasar (ahora 2-away Crawford) como aceptar-y-perder (también 2-away Crawford) te dejan en posiciones idénticas. Esto permite pasar extremadamente agresivamente - solo aceptas cuando tienes excelentes posibilidades de ganar.",
          de: "Bei 2-away 2-away kostet Sie das Passen eines ersten Doppelns nichts weil sowohl Passen (jetzt 2-away Crawford) als auch Annehmen-dann-Verlieren (auch 2-away Crawford) Sie in identischen Positionen lassen. Dies erlaubt extrem aggressives Passen - Sie nehmen nur an wenn Sie ausgezeichnete Gewinnchancen haben.",
          nl: "Bij 2-away 2-away kost het passen van een initiële verdubbeling je niets omdat zowel passen (nu 2-away Crawford) als accepteren-dan-verliezen (ook 2-away Crawford) je in identieke posities laten. Dit staat extreem agressief passen toe - je accepteert alleen wanneer je uitstekende winkansen hebt."
        }
      },
      {
        question: {
          en: "What is 'market losing' or 'losing your market'?",
          es: "¿Qué es 'market losing' o 'perder tu mercado'?",
          de: "Was ist 'Market Losing' oder 'Ihren Markt verlieren'?",
          nl: "Wat is 'market losing' of 'je markt verliezen'?"
        },
        options: [
          { en: "Position becomes so strong opponent must pass future double", es: "Posición se vuelve tan fuerte que oponente debe pasar doble futuro", de: "Position wird so stark dass Gegner zukünftiges Doppeln passen muss", nl: "Positie wordt zo sterk dat tegenstander toekomstige verdubbeling moet passen" },
          { en: "Stock market crash affects game", es: "Caída del mercado afecta juego", de: "Börsencrash beeinflusst Spiel", nl: "Beurscrash beïnvloedt spel" },
          { en: "Losing betting money", es: "Perder dinero de apuestas", de: "Wettgeld verlieren", nl: "Wedgeld verliezen" },
          { en: "Market position deteriorates", es: "Posición de mercado se deteriora", de: "Marktposition verschlechtert sich", nl: "Marktpositie verslechtert" }
        ],
        correct: 0,
        explanation: {
          en: "Market losing (losing your market) occurs when your position might improve so dramatically that your opponent would have to pass if you waited. To avoid this, you double now while they can still take - securing value even though waiting might give you more advantage. This is crucial in volatile positions.",
          es: "Market losing (perder tu mercado) ocurre cuando tu posición podría mejorar tan dramáticamente que tu oponente tendría que pasar si esperaras. Para evitar esto, doblas ahora mientras aún pueden aceptar - asegurando valor aunque esperar podría darte más ventaja. Esto es crucial en posiciones volátiles.",
          de: "Market Losing (Ihren Markt verlieren) tritt auf wenn sich Ihre Position so dramatisch verbessern könnte dass Ihr Gegner passen müsste wenn Sie warteten. Um dies zu vermeiden verdoppeln Sie jetzt während sie noch annehmen können - Wert sichern obwohl Warten Ihnen mehr Vorteil geben könnte. Dies ist entscheidend in volatilen Positionen.",
          nl: "Market losing (je markt verliezen) vindt plaats wanneer je positie zo dramatisch zou kunnen verbeteren dat je tegenstander zou moeten passen als je wachtte. Om dit te vermijden verdubbel je nu terwijl ze nog kunnen accepteren - waarde veiligstellen ook al zou wachten je meer voordeel kunnen geven. Dit is cruciaal in volatiele posities."
        }
      },
      {
        question: {
          en: "What is a 'take point' in cube theory?",
          es: "¿Qué es un 'punto de aceptación' en teoría de cubo?",
          de: "Was ist ein 'Annahmepunkt' in der Würfeltheorie?",
          nl: "Wat is een 'acceptatiepunt' in dobbelsteentheorie?"
        },
        options: [
          { en: "Minimum winning chances needed to correctly accept double", es: "Probabilidad mínima de ganar necesaria para aceptar correctamente doble", de: "Minimale Gewinnchancen benötigt um Doppeln korrekt anzunehmen", nl: "Minimale winkansen nodig om correct verdubbeling te accepteren" },
          { en: "Point where you take cube physically", es: "Punto donde tomas el cubo físicamente", de: "Punkt wo Sie Würfel physisch nehmen", nl: "Punt waar je dobbelsteen fysiek neemt" },
          { en: "Score threshold for taking", es: "Umbral de puntuación para aceptar", de: "Punktschwelle zum Annehmen", nl: "Score drempel voor accepteren" },
          { en: "Location of cube on board", es: "Ubicación del cubo en el tablero", de: "Standort des Würfels auf Brett", nl: "Locatie van dobbelsteen op bord" }
        ],
        correct: 0,
        explanation: {
          en: "The take point is the minimum winning percentage where accepting a double is correct. In money games with no gammons, it's 25%. However, it adjusts for gammon chances, match score, recube potential, and volatility. Understanding take points is fundamental to correct cube decisions.",
          es: "El punto de aceptación es el porcentaje mínimo de victoria donde aceptar un doble es correcto. En juegos de dinero sin gammons, es 25%. Sin embargo, se ajusta por posibilidades de gammon, marcador de match, potencial de redoble y volatilidad. Entender puntos de aceptación es fundamental para decisiones correctas de cubo.",
          de: "Der Annahmepunkt ist der minimale Gewinnprozentsatz bei dem Annahme eines Doppelns korrekt ist. In Geldspielen ohne Gammons sind es 25%. Er passt sich jedoch an für Gammon-Chancen, Match-Stand, Rückverdopplungspotenzial und Volatilität. Annahmepunkte zu verstehen ist fundamental für korrekte Würfelentscheidungen.",
          nl: "Het acceptatiepunt is het minimale winpercentage waarbij accepteren van een verdubbeling correct is. In geldspellen zonder gammons is het 25%. Het past zich echter aan voor gammon kansen, wedstrijdscore, herverdubbel potentieel en volatiliteit. Acceptatiepunten begrijpen is fundamenteel voor correcte dobbelsteenbeslissingen."
        }
      },
      {
        question: {
          en: "What is 'double point' in cube theory?",
          es: "¿Qué es el 'punto de doble' en teoría de cubo?",
          de: "Was ist 'Doppelpunkt' in der Würfeltheorie?",
          nl: "Wat is 'verdubbelingspunt' in dobbelsteentheorie?"
        },
        options: [
          { en: "Minimum advantage where doubling becomes correct", es: "Ventaja mínima donde doblar se vuelve correcto", de: "Minimaler Vorteil wo Verdoppeln korrekt wird", nl: "Minimaal voordeel waar verdubbelen correct wordt" },
          { en: "Two-point scoring position", es: "Posición de puntuación de dos puntos", de: "Zwei-Punkte-Bewertungsposition", nl: "Twee-punten scoringspositie" },
          { en: "Doubling the point value", es: "Duplicar el valor del punto", de: "Punktwert verdoppeln", nl: "Puntwaarde verdubbelen" },
          { en: "Second cube decision", es: "Segunda decisión de cubo", de: "Zweite Würfelentscheidung", nl: "Tweede dobbelsteenbeslissing" }
        ],
        correct: 0,
        explanation: {
          en: "The double point (or doubling window) is the minimum advantage where offering a double becomes profitable. In money games with no gammons, you can theoretically double at any advantage over 50%, but optimal doubling is around 68% winning chances. The exact point varies with cube efficiency and gammon potential.",
          es: "El punto de doble (o ventana de doblaje) es la ventaja mínima donde ofrecer un doble se vuelve rentable. En juegos de dinero sin gammons, teóricamente puedes doblar con cualquier ventaja sobre 50%, pero el doblaje óptimo es alrededor de 68% de probabilidades de ganar. El punto exacto varía con eficiencia de cubo y potencial de gammon.",
          de: "Der Doppelpunkt (oder Verdopplungsfenster) ist der minimale Vorteil wo Anbieten eines Doppelns profitabel wird. In Geldspielen ohne Gammons können Sie theoretisch bei jedem Vorteil über 50% verdoppeln, aber optimales Verdoppeln liegt bei etwa 68% Gewinnchancen. Der exakte Punkt variiert mit Würfeleffizienz und Gammon-Potenzial.",
          nl: "Het verdubbelingspunt (of verdubbel venster) is het minimale voordeel waarbij het aanbieden van een verdubbeling winstgevend wordt. In geldspellen zonder gammons kun je theoretisch verdubbelen bij elk voordeel boven 50%, maar optimaal verdubbelen ligt rond 68% winkansen. Het exacte punt varieert met dobbelsteenefficiëntie en gammon potentieel."
        }
      },
      {
        question: {
          en: "What is 'match equity' in tournament play?",
          es: "¿Qué es 'equity de match' en juego de torneo?",
          de: "Was ist 'Match-Equity' im Turnierspiel?",
          nl: "Wat is 'wedstrijd equity' in toernooispel?"
        },
        options: [
          { en: "Probability of winning match from current score", es: "Probabilidad de ganar el match desde el marcador actual", de: "Wahrscheinlichkeit Match vom aktuellen Stand zu gewinnen", nl: "Waarschijnlijkheid om wedstrijd te winnen vanaf huidige score" },
          { en: "Equal skill between players", es: "Habilidad igual entre jugadores", de: "Gleiche Fähigkeit zwischen Spielern", nl: "Gelijke vaardigheid tussen spelers" },
          { en: "Fair match conditions", es: "Condiciones justas de match", de: "Faire Match-Bedingungen", nl: "Eerlijke wedstrijdvoorwaarden" },
          { en: "Total equity in match", es: "Equity total en match", de: "Gesamt-Equity im Match", nl: "Totale equity in wedstrijd" }
        ],
        correct: 0,
        explanation: {
          en: "Match equity is your probability of winning the entire match from the current score. For example, at 2-away 3-away, trailing 3-2 in a 5-point match, you might have 35% match equity. Match equity tables (METs) help determine optimal cube decisions based on the match score rather than just the current game.",
          es: "La equity de match es tu probabilidad de ganar el match completo desde el marcador actual. Por ejemplo, en 2-away 3-away, perdiendo 3-2 en un match de 5 puntos, podrías tener 35% de equity de match. Las tablas de equity de match (METs) ayudan a determinar decisiones óptimas de cubo basadas en el marcador del match en lugar de solo el juego actual.",
          de: "Match-Equity ist Ihre Wahrscheinlichkeit das gesamte Match vom aktuellen Stand zu gewinnen. Zum Beispiel bei 2-away 3-away, zurückliegend 3-2 in einem 5-Punkt-Match, könnten Sie 35% Match-Equity haben. Match-Equity-Tabellen (METs) helfen optimale Würfelentscheidungen basierend auf Match-Stand zu bestimmen anstatt nur auf aktuellem Spiel.",
          nl: "Wedstrijd equity is je waarschijnlijkheid om de hele wedstrijd te winnen vanaf de huidige score. Bijvoorbeeld, bij 2-away 3-away, achter met 3-2 in een 5-punts wedstrijd, zou je 35% wedstrijd equity kunnen hebben. Wedstrijd equity tabellen (METs) helpen optimale dobbelsteenbeslissingen te bepalen op basis van wedstrijdscore in plaats van alleen het huidige spel."
        }
      },
      {
        question: {
          en: "What is an 'automatic double' in money games?",
          es: "¿Qué es un 'doble automático' en juegos de dinero?",
          de: "Was ist ein 'automatisches Doppeln' in Geldspielen?",
          nl: "Wat is een 'automatische verdubbeling' in geldspellen?"
        },
        options: [
          { en: "Optional rule: opening roll doubles means cube to 2, centered", es: "Regla opcional: tirada de apertura dobles significa cubo a 2, centrado", de: "Optionale Regel: Eröffnungswurf Pasch bedeutet Würfel auf 2, zentriert", nl: "Optionele regel: openingsworp dubbel betekent dobbelsteen naar 2, gecentreerd" },
          { en: "Computer automatically doubles", es: "Computadora dobla automáticamente", de: "Computer verdoppelt automatisch", nl: "Computer verdubbelt automatisch" },
          { en: "Mandatory doubling each game", es: "Doblaje obligatorio cada juego", de: "Verpflichtendes Verdoppeln jedes Spiel", nl: "Verplicht verdubbelen elk spel" },
          { en: "Double dice always used", es: "Dobles dados siempre usados", de: "Doppelwürfel immer verwendet", nl: "Dubbele dobbelstenen altijd gebruikt" }
        ],
        correct: 0,
        explanation: {
          en: "An automatic double is an optional money game rule where if the opening roll is the same for both players (both roll the same number), the cube automatically goes to 2 and stays centered - both retain doubling rights. This increases variance and is common in high-stakes money games but never used in match play.",
          es: "Un doble automático es una regla opcional de juego de dinero donde si la tirada de apertura es la misma para ambos jugadores (ambos sacan el mismo número), el cubo automáticamente va a 2 y permanece centrado - ambos retienen derechos de doblaje. Esto aumenta la varianza y es común en juegos de dinero de altas apuestas pero nunca se usa en juego de match.",
          de: "Ein automatisches Doppeln ist eine optionale Geldspiel-Regel bei der wenn der Eröffnungswurf für beide Spieler gleich ist (beide würfeln dieselbe Zahl), der Würfel automatisch auf 2 geht und zentriert bleibt - beide behalten Verdopplungsrechte. Dies erhöht Varianz und ist üblich in High-Stakes-Geldspielen aber nie im Match-Spiel verwendet.",
          nl: "Een automatische verdubbeling is een optionele geldspel regel waarbij als de openingsworp hetzelfde is voor beide spelers (beiden gooien hetzelfde nummer), de dobbelsteen automatisch naar 2 gaat en gecentreerd blijft - beiden behouden verdubbel rechten. Dit verhoogt variantie en is gebruikelijk in high-stakes geldspellen maar nooit gebruikt in wedstrijdspel."
        }
      },
      {
        question: {
          en: "What is 'too good to double'?",
          es: "¿Qué es 'demasiado bueno para doblar'?",
          de: "Was ist 'zu gut zum Verdoppeln'?",
          nl: "Wat is 'te goed om te verdubbelen'?"
        },
        options: [
          { en: "Position so strong you'd rather play for gammon than risk opponent passing", es: "Posición tan fuerte que preferirías jugar por gammon que arriesgar que oponente pase", de: "Position so stark dass Sie lieber auf Gammon spielen als zu riskieren dass Gegner passt", nl: "Positie zo sterk dat je liever voor gammon speelt dan risico neemt dat tegenstander past" },
          { en: "Never double in good positions", es: "Nunca doblar en buenas posiciones", de: "Niemals in guten Positionen verdoppeln", nl: "Nooit verdubbelen in goede posities" },
          { en: "Position too complex to double", es: "Posición demasiado compleja para doblar", de: "Position zu komplex zum Verdoppeln", nl: "Positie te complex om te verdubbelen" },
          { en: "Ethical concerns about doubling", es: "Preocupaciones éticas sobre doblar", de: "Ethische Bedenken über Verdoppeln", nl: "Ethische zorgen over verdubbelen" }
        ],
        correct: 0,
        explanation: {
          en: "'Too good to double' means your position is so strong that doubling would be a mistake because the opponent would pass, costing you gammon chances. You're better off playing on for the gammon at current cube level. This typically occurs when you have 85%+ winning chances with significant gammon potential.",
          es: "'Demasiado bueno para doblar' significa que tu posición es tan fuerte que doblar sería un error porque el oponente pasaría, costándote posibilidades de gammon. Es mejor seguir jugando por el gammon al nivel de cubo actual. Esto típicamente ocurre cuando tienes 85%+ de posibilidades de ganar con potencial significativo de gammon.",
          de: "'Zu gut zum Verdoppeln' bedeutet Ihre Position ist so stark dass Verdoppeln ein Fehler wäre weil der Gegner passen würde, was Sie Gammon-Chancen kostet. Sie spielen besser weiter auf Gammon bei aktuellem Würfel-Level. Dies tritt typischerweise auf wenn Sie 85%+ Gewinnchancen mit signifikantem Gammon-Potenzial haben.",
          nl: "'Te goed om te verdubbelen' betekent dat je positie zo sterk is dat verdubbelen een fout zou zijn omdat de tegenstander zou passen, wat je gammon kansen kost. Je speelt beter door voor de gammon op huidig dobbelsteenniveau. Dit gebeurt typisch wanneer je 85%+ winkansen hebt met significant gammon potentieel."
        }
      },
      {
        question: {
          en: "What is 'recube vigorish' or 'recube value'?",
          es: "¿Qué es 'recube vigorish' o 'valor de redoble'?",
          de: "Was ist 'Recube Vigorish' oder 'Rückverdopplungswert'?",
          nl: "Wat is 'recube vigorish' of 'herverdubbel waarde'?"
        },
        options: [
          { en: "Value gained from potential to redouble after accepting", es: "Valor ganado del potencial de redoblar después de aceptar", de: "Wert gewonnen durch Potenzial zurückzuverdoppeln nach Annahme", nl: "Waarde verkregen van potentieel om te herverdubbelen na acceptatie" },
          { en: "Commission on cube transactions", es: "Comisión en transacciones de cubo", de: "Kommission bei Würfeltransaktionen", nl: "Commissie op dobbelsteentransacties" },
          { en: "Cube multiplication rate", es: "Tasa de multiplicación del cubo", de: "Würfel-Multiplikationsrate", nl: "Dobbelsteen vermenigvuldigingspercentage" },
          { en: "Redoubling vigor or energy", es: "Vigor o energía de redoble", de: "Rückverdopplungsvigour oder -energie", nl: "Herverdubbel kracht of energie" }
        ],
        correct: 0,
        explanation: {
          en: "Recube vigorish (or recube value) is the extra equity you gain from owning the cube - the potential to redouble when position swings your way. This value makes taking slightly worse positions correct, because cube ownership gives you leverage. It's why you can take at 22-23% instead of exactly 25% in some positions.",
          es: "Recube vigorish (o valor de redoble) es el equity extra que ganas al poseer el cubo - el potencial de redoblar cuando la posición cambia a tu favor. Este valor hace correcto aceptar posiciones ligeramente peores, porque la propiedad del cubo te da apalancamiento. Es por qué puedes aceptar al 22-23% en lugar de exactamente 25% en algunas posiciones.",
          de: "Recube Vigorish (oder Rückverdopplungswert) ist das zusätzliche Equity das Sie durch Würfelbesitz gewinnen - das Potenzial zurückzuverdoppeln wenn Position sich zu Ihren Gunsten wendet. Dieser Wert macht Annahme leicht schlechterer Positionen korrekt, weil Würfelbesitz Ihnen Hebel gibt. Deshalb können Sie bei 22-23% statt genau 25% in manchen Positionen annehmen.",
          nl: "Recube vigorish (of herverdubbel waarde) is de extra equity die je krijgt door de dobbelsteen te bezitten - het potentieel om te herverdubbelen wanneer positie jouw kant op draait. Deze waarde maakt accepteren van iets slechtere posities correct, omdat dobbelsteenbezit je hefboomwerking geeft. Daarom kun je bij 22-23% accepteren in plaats van precies 25% in sommige posities."
        }
      },
      {
        question: {
          en: "What does 'EMG' stand for in backgammon analysis?",
          es: "¿Qué significa 'EMG' en análisis de backgammon?",
          de: "Wofür steht 'EMG' in der Backgammon-Analyse?",
          nl: "Waar staat 'EMG' voor in backgammon analyse?"
        },
        options: [
          { en: "Error per Move Graded - measure of play accuracy", es: "Error por Movimiento Calificado - medida de precisión de juego", de: "Error pro Zug Bewertet - Maß für Spielgenauigkeit", nl: "Fout per Zet Beoordeeld - maat voor speelnauwkeurigheid" },
          { en: "Extended Match Game format", es: "Formato de Juego de Match Extendido", de: "Erweitertes Match-Spiel-Format", nl: "Uitgebreid Wedstrijd Spel formaat" },
          { en: "Equity Match Grade system", es: "Sistema de Calificación de Equity de Match", de: "Equity-Match-Grad-System", nl: "Equity Wedstrijd Graad systeem" },
          { en: "Electronic Move Generator", es: "Generador Electrónico de Movimientos", de: "Elektronischer Zug-Generator", nl: "Elektronische Zet Generator" }
        ],
        correct: 0,
        explanation: {
          en: "EMG (Error per Move Graded) measures the average equity loss per move, grading play accuracy. Lower EMG means better play. World-class players achieve EMG around 1-3 points per game. EMG analysis helps identify weaknesses in your game - whether in checker play, cube decisions, or specific position types.",
          es: "EMG (Error por Movimiento Calificado) mide la pérdida promedio de equity por movimiento, calificando la precisión del juego. EMG más bajo significa mejor juego. Jugadores de clase mundial logran EMG alrededor de 1-3 puntos por juego. El análisis EMG ayuda a identificar debilidades en tu juego - ya sea en juego de fichas, decisiones de cubo o tipos de posición específicos.",
          de: "EMG (Error pro Zug Bewertet) misst den durchschnittlichen Equity-Verlust pro Zug und bewertet die Spielgenauigkeit. Niedrigeres EMG bedeutet besseres Spiel. Weltklasse-Spieler erreichen EMG um 1-3 Punkte pro Spiel. EMG-Analyse hilft Schwächen in Ihrem Spiel zu identifizieren - ob im Steinspiel, Würfelentscheidungen oder spezifischen Positionstypen.",
          nl: "EMG (Fout per Zet Beoordeeld) meet het gemiddelde equity verlies per zet, en beoordeelt speelnauwkeurigheid. Lagere EMG betekent beter spel. Wereldklasse spelers bereiken EMG rond 1-3 punten per spel. EMG analyse helpt zwaktes in je spel te identificeren - of het nu in steenspel, dobbelsteenbeslissingen of specifieke positietypes is."
        }
      },
      {
        question: {
          en: "What is the 'Jacoby rule' in money games?",
          es: "¿Qué es la 'regla de Jacoby' en juegos de dinero?",
          de: "Was ist die 'Jacoby-Regel' in Geldspielen?",
          nl: "Wat is de 'Jacoby regel' in geldspellen?"
        },
        options: [
          { en: "Gammons/backgammons don't count unless cube has been turned", es: "Gammons/backgammons no cuentan a menos que el cubo haya sido girado", de: "Gammons/Backgammons zählen nicht es sei denn Würfel wurde gedreht", nl: "Gammons/backgammons tellen niet tenzij dobbelsteen is gedraaid" },
          { en: "Player named Jacoby's house rules", es: "Reglas de casa del jugador llamado Jacoby", de: "Hausregeln des Spielers namens Jacoby", nl: "Huisregels van speler genaamd Jacoby" },
          { en: "Doubling cube must be used", es: "El cubo de doblar debe ser usado", de: "Dopplungswürfel muss verwendet werden", nl: "Verdubbeldobbelsteen moet worden gebruikt" },
          { en: "Match play scoring system", es: "Sistema de puntuación de juego de match", de: "Match-Spiel-Bewertungssystem", nl: "Wedstrijdspel scoringssysteem" }
        ],
        correct: 0,
        explanation: {
          en: "The Jacoby rule (common in money games, never in matches) states that gammons and backgammons only count if the cube has been turned. This speeds up play by eliminating slow gammon-grinding positions where one player just plays on for the gammon without doubling. It encourages more aggressive cube action.",
          es: "La regla de Jacoby (común en juegos de dinero, nunca en matches) establece que gammons y backgammons solo cuentan si el cubo ha sido girado. Esto acelera el juego eliminando posiciones lentas de moler-gammon donde un jugador solo juega por el gammon sin doblar. Fomenta acción de cubo más agresiva.",
          de: "Die Jacoby-Regel (üblich in Geldspielen, nie in Matches) besagt dass Gammons und Backgammons nur zählen wenn der Würfel gedreht wurde. Dies beschleunigt das Spiel durch Eliminierung langsamer Gammon-Schleif-Positionen wo ein Spieler nur auf Gammon weiterspielt ohne zu verdoppeln. Es fördert aggressivere Würfelaktion.",
          nl: "De Jacoby regel (gebruikelijk in geldspellen, nooit in wedstrijden) stelt dat gammons en backgammons alleen tellen als de dobbelsteen is gedraaid. Dit versnelt het spel door trage gammon-slijp posities te elimineren waar één speler gewoon doorspeelt voor de gammon zonder te verdubbelen. Het moedigt agressievere dobbelsteenactie aan."
        }
      }
    ]
  };

  // Export for use in the quiz application
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level6;
  } else if (typeof window !== 'undefined') {
    window.level6 = level6;
  }
})();
