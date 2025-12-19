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
      },
      {
        question: {
          en: "What is 'PropCount' in racing analysis?",
          es: "¿Qué es 'PropCount' en análisis de carreras?",
          de: "Was ist 'PropCount' in der Rennanalyse?",
          nl: "Wat is 'PropCount' in race analyse?"
        },
        options: [
          { en: "Probability-based pip count adjusting for checker distribution", es: "Conteo de pips basado en probabilidad ajustando por distribución de fichas", de: "Wahrscheinlichkeitsbasierte Pip-Zählung angepasst für Steinverteilung", nl: "Waarschijnlijkheid-gebaseerde pip count aangepast voor steenverdeling" },
          { en: "Proper checker count verification", es: "Verificación adecuada de conteo de fichas", de: "Korrekte Steinzählungsüberprüfung", nl: "Juiste steen telling verificatie" },
          { en: "Proportional counting system", es: "Sistema de conteo proporcional", de: "Proportionales Zählsystem", nl: "Proportioneel telsysteem" },
          { en: "Property ownership count", es: "Conteo de propiedad", de: "Eigentumszählung", nl: "Eigendom telling" }
        ],
        correct: 0,
        explanation: {
          en: "PropCount (Proportional Count) is an advanced racing formula that adjusts pip count based on probability of bearing off efficiently. It accounts for distribution, gaps, and crossovers more accurately than simple effective pip count, providing better racing equity estimates in close positions.",
          es: "PropCount (Conteo Proporcional) es una fórmula avanzada de carreras que ajusta el conteo de pips basándose en la probabilidad de sacar fichas eficientemente. Tiene en cuenta distribución, huecos y cruces con más precisión que el conteo efectivo de pips simple, proporcionando mejores estimaciones de equity de carrera en posiciones cercanas.",
          de: "PropCount (Proportionaler Count) ist eine fortgeschrittene Rennformel die Pip-Zählung basierend auf Wahrscheinlichkeit effizient auszuwürfeln anpasst. Es berücksichtigt Verteilung, Lücken und Überquerungen genauer als einfache effektive Pip-Zählung und liefert bessere Renn-Equity-Schätzungen in knappen Positionen.",
          nl: "PropCount (Proportionele Telling) is een geavanceerde race formule die pip count aanpast op basis van waarschijnlijkheid om efficiënt uit te gooien. Het houdt rekening met verdeling, gaten en overgangen nauwkeuriger dan simpele effectieve pip count, wat betere race equity schattingen biedt in krappe posities."
        }
      },
      {
        question: {
          en: "What is a 'symmetric position' in backgammon?",
          es: "¿Qué es una 'posición simétrica' en backgammon?",
          de: "Was ist eine 'symmetrische Position' im Backgammon?",
          nl: "Wat is een 'symmetrische positie' in backgammon?"
        },
        options: [
          { en: "Mirror image position where both players have identical structure", es: "Posición de imagen espejo donde ambos jugadores tienen estructura idéntica", de: "Spiegelbildposition wo beide Spieler identische Struktur haben", nl: "Spiegelbeeld positie waar beide spelers identieke structuur hebben" },
          { en: "Balanced board position", es: "Posición equilibrada del tablero", de: "Ausgewogene Brettposition", nl: "Gebalanceerde bordpositie" },
          { en: "Equal point distribution", es: "Distribución igual de puntos", de: "Gleiche Punktverteilung", nl: "Gelijke puntenverdeling" },
          { en: "Mathematically perfect position", es: "Posición matemáticamente perfecta", de: "Mathematisch perfekte Position", nl: "Mathematisch perfecte positie" }
        ],
        correct: 0,
        explanation: {
          en: "A symmetric position is a mirror image where both players have identical checker positions (reflected). These are interesting theoretically because equity should be exactly 0.000 for both players. Symmetric positions help understand pure strategic concepts without positional advantages.",
          es: "Una posición simétrica es una imagen espejo donde ambos jugadores tienen posiciones de fichas idénticas (reflejadas). Estas son interesantes teóricamente porque la equity debería ser exactamente 0.000 para ambos jugadores. Las posiciones simétricas ayudan a entender conceptos estratégicos puros sin ventajas posicionales.",
          de: "Eine symmetrische Position ist ein Spiegelbild wo beide Spieler identische Steinpositionen haben (reflektiert). Diese sind theoretisch interessant weil Equity genau 0,000 für beide Spieler sein sollte. Symmetrische Positionen helfen reine strategische Konzepte ohne Positionsvorteile zu verstehen.",
          nl: "Een symmetrische positie is een spiegelbeeld waar beide spelers identieke steenposities hebben (gereflecteerd). Deze zijn theoretisch interessant omdat equity precies 0,000 zou moeten zijn voor beide spelers. Symmetrische posities helpen pure strategische concepten te begrijpen zonder positionele voordelen."
        }
      },
      {
        question: {
          en: "What is 'error rate' in post-game analysis?",
          es: "¿Qué es 'tasa de error' en análisis post-juego?",
          de: "Was ist 'Fehlerrate' in der Nach-Spiel-Analyse?",
          nl: "Wat is 'foutpercentage' in na-spel analyse?"
        },
        options: [
          { en: "Average equity lost per decision compared to optimal play", es: "Equity promedio perdido por decisión comparado con juego óptimo", de: "Durchschnittliches verlorenes Equity pro Entscheidung verglichen mit optimalem Spiel", nl: "Gemiddeld verloren equity per beslissing vergeleken met optimaal spel" },
          { en: "Percentage of wrong moves made", es: "Porcentaje de movimientos incorrectos hechos", de: "Prozentsatz falscher Züge gemacht", nl: "Percentage verkeerde zetten gemaakt" },
          { en: "How often errors occur", es: "Qué tan a menudo ocurren errores", de: "Wie oft Fehler auftreten", nl: "Hoe vaak fouten voorkomen" },
          { en: "Speed of error correction", es: "Velocidad de corrección de errores", de: "Geschwindigkeit der Fehlerkorrektur", nl: "Snelheid van foutcorrectie" }
        ],
        correct: 0,
        explanation: {
          en: "Error rate measures average equity loss per move or decision. Strong players have low error rates (2-4 points/game), while beginners may lose 10+ points/game. Modern software categorizes errors as blunders (>0.1 equity), errors (>0.05), and doubtful moves, helping identify improvement areas.",
          es: "La tasa de error mide la pérdida promedio de equity por movimiento o decisión. Jugadores fuertes tienen tasas de error bajas (2-4 puntos/juego), mientras que principiantes pueden perder 10+ puntos/juego. El software moderno categoriza errores como desaciertos (>0.1 equity), errores (>0.05) y movimientos dudosos, ayudando a identificar áreas de mejora.",
          de: "Fehlerrate misst durchschnittlichen Equity-Verlust pro Zug oder Entscheidung. Starke Spieler haben niedrige Fehlerraten (2-4 Punkte/Spiel), während Anfänger 10+ Punkte/Spiel verlieren können. Moderne Software kategorisiert Fehler als Patzer (>0,1 Equity), Fehler (>0,05) und zweifelhafte Züge, was hilft Verbesserungsbereiche zu identifizieren.",
          nl: "Foutpercentage meet gemiddeld equity verlies per zet of beslissing. Sterke spelers hebben lage foutpercentages (2-4 punten/spel), terwijl beginners 10+ punten/spel kunnen verliezen. Moderne software categoriseert fouten als blunders (>0,1 equity), fouten (>0,05) en twijfelachtige zetten, wat helpt verbetergebieden te identificeren."
        }
      },
      {
        question: {
          en: "What is 'cube leverage' in match play?",
          es: "¿Qué es 'apalancamiento de cubo' en juego de match?",
          de: "Was ist 'Würfelhebel' im Match-Spiel?",
          nl: "Wat is 'dobbelsteen hefboomwerking' in wedstrijdspel?"
        },
        options: [
          { en: "Strategic value of cube ownership beyond immediate winning chances", es: "Valor estratégico de propiedad del cubo más allá de posibilidades inmediatas de ganar", de: "Strategischer Wert des Würfelbesitzes jenseits sofortiger Gewinnchancen", nl: "Strategische waarde van dobbelsteenbezit naast directe winkansen" },
          { en: "Physical leverage on cube", es: "Apalancamiento físico en cubo", de: "Physischer Hebel am Würfel", nl: "Fysieke hefboomwerking op dobbelsteen" },
          { en: "Cube multiplication power", es: "Poder de multiplicación del cubo", de: "Würfel-Multiplikationskraft", nl: "Dobbelsteen vermenigvuldigingskracht" },
          { en: "Advantage at match score", es: "Ventaja en marcador de match", de: "Vorteil beim Match-Stand", nl: "Voordeel bij wedstrijdscore" }
        ],
        correct: 0,
        explanation: {
          en: "Cube leverage is the strategic advantage of owning the doubling cube - you can threaten efficient redoubles while opponent cannot. In volatile positions, cube ownership can be worth significant equity even when position is slightly worse. This is why taking at 22-23% (with recube vig) is often correct.",
          es: "El apalancamiento de cubo es la ventaja estratégica de poseer el cubo de doblar - puedes amenazar redoblajes eficientes mientras el oponente no puede. En posiciones volátiles, la propiedad del cubo puede valer equity significativo incluso cuando la posición es ligeramente peor. Por esto aceptar al 22-23% (con recube vig) es a menudo correcto.",
          de: "Würfelhebel ist der strategische Vorteil den Dopplungswürfel zu besitzen - Sie können effiziente Rückverdopplungen androhen während Gegner nicht kann. In volatilen Positionen kann Würfelbesitz signifikantes Equity wert sein selbst wenn Position etwas schlechter ist. Deshalb ist Annehmen bei 22-23% (mit Recube Vig) oft korrekt.",
          nl: "Dobbelsteen hefboomwerking is het strategische voordeel van het bezitten van de verdubbeldobbelsteen - je kunt efficiënte herverdubbeling dreigen terwijl tegenstander dat niet kan. In volatiele posities kan dobbelsteenbezit aanzienlijke equity waard zijn zelfs wanneer positie iets slechter is. Daarom is accepteren bij 22-23% (met recube vig) vaak correct."
        }
      },
      {
        question: {
          en: "What is 'normalized score' in tournament reporting?",
          es: "¿Qué es 'puntuación normalizada' en informes de torneo?",
          de: "Was ist 'normalisierte Punktzahl' in Turnierberichten?",
          nl: "Wat is 'genormaliseerde score' in toernooirapportage?"
        },
        options: [
          { en: "Converting match results to standard scale for comparison", es: "Convertir resultados de match a escala estándar para comparación", de: "Match-Ergebnisse auf Standardskala für Vergleich konvertieren", nl: "Wedstrijdresultaten converteren naar standaardschaal voor vergelijking" },
          { en: "Normal distribution of scores", es: "Distribución normal de puntuaciones", de: "Normalverteilung von Punktzahlen", nl: "Normale verdeling van scores" },
          { en: "Average tournament score", es: "Puntuación promedio de torneo", de: "Durchschnittliche Turnierpunktzahl", nl: "Gemiddelde toernooiscore" },
          { en: "Standardized point system", es: "Sistema de puntos estandarizado", de: "Standardisiertes Punktesystem", nl: "Gestandaardiseerd puntensysteem" }
        ],
        correct: 0,
        explanation: {
          en: "Normalized score adjusts match results to account for match length - winning 5-0 in a 5-point match is different from 11-0 in an 11-pointer. Normalization converts all results to equivalent values (often to 11-point match scale) for fair player rating and performance comparison.",
          es: "La puntuación normalizada ajusta resultados de match para tener en cuenta la longitud del match - ganar 5-0 en un match de 5 puntos es diferente de 11-0 en uno de 11 puntos. La normalización convierte todos los resultados a valores equivalentes (a menudo a escala de match de 11 puntos) para clasificación justa de jugadores y comparación de rendimiento.",
          de: "Normalisierte Punktzahl passt Match-Ergebnisse an um Match-Länge zu berücksichtigen - 5-0 zu gewinnen in einem 5-Punkt-Match ist anders als 11-0 in einem 11-Punkte-Match. Normalisierung konvertiert alle Ergebnisse zu äquivalenten Werten (oft zu 11-Punkt-Match-Skala) für faire Spielerbewertung und Leistungsvergleich.",
          nl: "Genormaliseerde score past wedstrijdresultaten aan om wedstrijdlengte te verrekenen - 5-0 winnen in een 5-punts wedstrijd is anders dan 11-0 in een 11-punter. Normalisatie converteert alle resultaten naar equivalente waarden (vaak naar 11-punts wedstrijdschaal) voor eerlijke spelersbeoordeling en prestatie vergelijking."
        }
      },
      {
        question: {
          en: "What is 'equity distribution' in rollout analysis?",
          es: "¿Qué es 'distribución de equity' en análisis de rollout?",
          de: "Was ist 'Equity-Verteilung' in der Rollout-Analyse?",
          nl: "Wat is 'equity verdeling' in rollout analyse?"
        },
        options: [
          { en: "Range of possible outcomes showing equity variance", es: "Rango de resultados posibles mostrando varianza de equity", de: "Bereich möglicher Ergebnisse zeigt Equity-Varianz", nl: "Bereik van mogelijke uitkomsten die equity variantie tonen" },
          { en: "How equity is divided between players", es: "Cómo se divide el equity entre jugadores", de: "Wie Equity zwischen Spielern aufgeteilt wird", nl: "Hoe equity wordt verdeeld tussen spelers" },
          { en: "Spreading equity evenly", es: "Distribuir equity uniformemente", de: "Equity gleichmäßig verteilen", nl: "Equity gelijkmatig verdelen" },
          { en: "Geographic equity spread", es: "Dispersión geográfica de equity", de: "Geografische Equity-Verteilung", nl: "Geografische equity spreiding" }
        ],
        correct: 0,
        explanation: {
          en: "Equity distribution shows the range of possible outcomes from a position. A rollout might show average equity of +0.500, but distribution reveals whether this comes from consistent small wins or volatile gammon chances. Understanding variance helps with risk assessment and cube decisions.",
          es: "La distribución de equity muestra el rango de resultados posibles de una posición. Un rollout podría mostrar equity promedio de +0.500, pero la distribución revela si esto proviene de victorias pequeñas consistentes o posibilidades volátiles de gammon. Entender la varianza ayuda con evaluación de riesgo y decisiones de cubo.",
          de: "Equity-Verteilung zeigt den Bereich möglicher Ergebnisse aus einer Position. Ein Rollout könnte durchschnittliches Equity von +0,500 zeigen, aber Verteilung offenbart ob dies von konsistenten kleinen Siegen oder volatilen Gammon-Chancen kommt. Varianz zu verstehen hilft bei Risikobewertung und Würfelentscheidungen.",
          nl: "Equity verdeling toont het bereik van mogelijke uitkomsten uit een positie. Een rollout zou gemiddelde equity van +0,500 kunnen tonen, maar verdeling onthult of dit komt van consistente kleine overwinningen of volatiele gammon kansen. Variantie begrijpen helpt met risicobeoordeling en dobbelsteenbeslissingen."
        }
      },
      {
        question: {
          en: "What is 'post-Crawford' strategy?",
          es: "¿Qué es estrategia 'post-Crawford'?",
          de: "Was ist 'Nach-Crawford'-Strategie?",
          nl: "Wat is 'na-Crawford' strategie?"
        },
        options: [
          { en: "Strategy after Crawford game when trailing player must double first turn", es: "Estrategia después del juego Crawford cuando jugador perdedor debe doblar primer turno", de: "Strategie nach Crawford-Spiel wenn zurückliegender Spieler im ersten Zug verdoppeln muss", nl: "Strategie na Crawford spel wanneer achterliggende speler eerste beurt moet verdubbelen" },
          { en: "Playing after tournament ends", es: "Jugar después de que termina el torneo", de: "Spielen nachdem Turnier endet", nl: "Spelen nadat toernooi eindigt" },
          { en: "Strategy following Crawford's teachings", es: "Estrategia siguiendo enseñanzas de Crawford", de: "Strategie nach Crawfords Lehren", nl: "Strategie volgend op Crawford's lessen" },
          { en: "Post-game analysis method", es: "Método de análisis post-juego", de: "Nach-Spiel-Analysemethode", nl: "Na-spel analyse methode" }
        ],
        correct: 0,
        explanation: {
          en: "Post-Crawford refers to games after the Crawford game when one player is 1-away. The trailer (still 2+ away) must double immediately or never (automatic double on first turn). The leader should almost never double. This creates unique strategic dynamics where cube decisions are predetermined.",
          es: "Post-Crawford se refiere a juegos después del juego Crawford cuando un jugador está a 1 de ganar. El perdedor (todavía a 2+ de distancia) debe doblar inmediatamente o nunca (doble automático en primer turno). El líder casi nunca debería doblar. Esto crea dinámicas estratégicas únicas donde las decisiones de cubo están predeterminadas.",
          de: "Nach-Crawford bezieht sich auf Spiele nach dem Crawford-Spiel wenn ein Spieler 1-away ist. Der Zurückliegende (noch 2+ away) muss sofort verdoppeln oder nie (automatisches Verdoppeln im ersten Zug). Der Führende sollte fast nie verdoppeln. Dies schafft einzigartige strategische Dynamiken wo Würfelentscheidungen vorbestimmt sind.",
          nl: "Na-Crawford verwijst naar spellen na het Crawford spel wanneer één speler 1-away is. De achterliggende (nog 2+ away) moet onmiddellijk verdubbelen of nooit (automatische verdubbeling bij eerste beurt). De leider zou bijna nooit moeten verdubbelen. Dit creëert unieke strategische dynamiek waarbij dobbelsteenbeslissingen vooraf bepaald zijn."
        }
      },
      {
        question: {
          en: "What is 'take/pass point' precision?",
          es: "¿Qué es precisión de 'punto de aceptar/pasar'?",
          de: "Was ist 'Nehmen/Passen-Punkt'-Präzision?",
          nl: "Wat is 'nemen/passen punt' precisie?"
        },
        options: [
          { en: "Exact winning percentage where taking and passing have equal value", es: "Porcentaje exacto de victoria donde aceptar y pasar tienen igual valor", de: "Exakter Gewinnprozentsatz wo Nehmen und Passen gleichen Wert haben", nl: "Exact winpercentage waar nemen en passen gelijke waarde hebben" },
          { en: "Accuracy of take decisions", es: "Precisión de decisiones de aceptar", de: "Genauigkeit von Nehmen-Entscheidungen", nl: "Nauwkeurigheid van neem beslissingen" },
          { en: "Point location accuracy", es: "Precisión de ubicación de punto", de: "Punktort-Genauigkeit", nl: "Punt locatie nauwkeurigheid" },
          { en: "Decision timing precision", es: "Precisión de tiempo de decisión", de: "Entscheidungszeitpräzision", nl: "Beslissing timing precisie" }
        ],
        correct: 0,
        explanation: {
          en: "Take/pass point precision is the exact winning percentage where you're indifferent between taking and passing a double. In money games it's theoretically 25%, but adjusts for gammons, recube vig, and cube efficiency. Knowing precise take points for different position types improves cube decisions dramatically.",
          es: "La precisión del punto de aceptar/pasar es el porcentaje exacto de victoria donde eres indiferente entre aceptar y pasar un doble. En juegos de dinero es teóricamente 25%, pero se ajusta por gammons, recube vig y eficiencia de cubo. Conocer puntos de aceptación precisos para diferentes tipos de posición mejora dramáticamente las decisiones de cubo.",
          de: "Nehmen/Passen-Punkt-Präzision ist der exakte Gewinnprozentsatz wo Sie indifferent zwischen Nehmen und Passen eines Doppelns sind. In Geldspielen ist es theoretisch 25%, passt sich aber an für Gammons, Recube Vig und Würfeleffizienz. Präzise Annahmepunkte für verschiedene Positionstypen zu kennen verbessert Würfelentscheidungen dramatisch.",
          nl: "Nemen/passen punt precisie is het exacte winpercentage waar je onverschillig bent tussen nemen en passen van een verdubbeling. In geldspellen is het theoretisch 25%, maar past aan voor gammons, recube vig en dobbelsteenefficiëntie. Precieze acceptatiepunten kennen voor verschillende positietypes verbetert dobbelsteenbeslissingen dramatisch."
        }
      },
      {
        question: {
          en: "What is 'variance reduction' in rollouts?",
          es: "¿Qué es 'reducción de varianza' en rollouts?",
          de: "Was ist 'Varianzreduktion' in Rollouts?",
          nl: "Wat is 'variantie reductie' in rollouts?"
        },
        options: [
          { en: "Using same dice sequences for both sides to reduce random noise", es: "Usar las mismas secuencias de dados para ambos lados para reducir ruido aleatorio", de: "Dieselben Würfelsequenzen für beide Seiten verwenden um zufälliges Rauschen zu reduzieren", nl: "Dezelfde dobbelsteenreeksen gebruiken voor beide kanten om willekeurige ruis te verminderen" },
          { en: "Reducing number of rollout trials", es: "Reducir número de pruebas de rollout", de: "Anzahl von Rollout-Versuchen reduzieren", nl: "Aantal rollout proeven verminderen" },
          { en: "Minimizing position variance", es: "Minimizar varianza de posición", de: "Positionsvarianz minimieren", nl: "Positie variantie minimaliseren" },
          { en: "Lowering equity spread", es: "Reducir dispersión de equity", de: "Equity-Streuung senken", nl: "Equity spreiding verlagen" }
        ],
        correct: 0,
        explanation: {
          en: "Variance reduction uses the same random dice sequences for comparing alternatives, eliminating luck as a factor. If both your move and the alternative face the same dice, differences in results come purely from position quality, not random variation. This makes rollouts more efficient and accurate.",
          es: "La reducción de varianza usa las mismas secuencias aleatorias de dados para comparar alternativas, eliminando la suerte como factor. Si tanto tu movimiento como la alternativa enfrentan los mismos dados, las diferencias en resultados provienen puramente de calidad de posición, no variación aleatoria. Esto hace los rollouts más eficientes y precisos.",
          de: "Varianzreduktion verwendet dieselben zufälligen Würfelsequenzen zum Vergleichen von Alternativen, wodurch Glück als Faktor eliminiert wird. Wenn sowohl Ihr Zug als auch die Alternative denselben Würfeln gegenüberstehen kommen Unterschiede in Ergebnissen rein von Positionsqualität, nicht zufälliger Variation. Dies macht Rollouts effizienter und genauer.",
          nl: "Variantie reductie gebruikt dezelfde willekeurige dobbelsteenreeksen voor het vergelijken van alternatieven, waardoor geluk als factor wordt geëlimineerd. Als zowel jouw zet als het alternatief dezelfde dobbelstenen tegenkomen, komen verschillen in resultaten puur van positiekwaliteit, niet willekeurige variatie. Dit maakt rollouts efficiënter en nauwkeuriger."
        }
      },
      {
        question: {
          en: "What is 'cubeful equity' vs 'cubeless equity'?",
          es: "¿Qué es 'equity con cubo' vs 'equity sin cubo'?",
          de: "Was ist 'Equity mit Würfel' vs 'Equity ohne Würfel'?",
          nl: "Wat is 'equity met dobbelsteen' vs 'equity zonder dobbelsteen'?"
        },
        options: [
          { en: "Cubeful includes doubling cube impact; cubeless evaluates position only", es: "Con cubo incluye impacto del cubo de doblar; sin cubo evalúa solo posición", de: "Mit Würfel beinhaltet Dopplungswürfel-Einfluss; ohne Würfel bewertet nur Position", nl: "Met dobbelsteen omvat verdubbeldobbelsteen impact; zonder dobbelsteen evalueert alleen positie" },
          { en: "Different equity calculation methods", es: "Diferentes métodos de cálculo de equity", de: "Verschiedene Equity-Berechnungsmethoden", nl: "Verschillende equity berekenings methoden" },
          { en: "Cube ownership vs no ownership", es: "Propiedad de cubo vs sin propiedad", de: "Würfelbesitz vs kein Besitz", nl: "Dobbelsteenbezit vs geen bezit" },
          { en: "Full game vs single position", es: "Juego completo vs posición única", de: "Vollständiges Spiel vs einzelne Position", nl: "Volledig spel vs enkele positie" }
        ],
        correct: 0,
        explanation: {
          en: "Cubeless equity evaluates just the position as if the doubling cube didn't exist - pure winning/gammon/backgammon chances. Cubeful equity includes optimal cube actions (doubles, takes, passes), which significantly affects value. The difference reveals how much cube decisions matter in that position.",
          es: "Equity sin cubo evalúa solo la posición como si el cubo de doblar no existiera - puras posibilidades de ganar/gammon/backgammon. Equity con cubo incluye acciones óptimas de cubo (dobles, aceptaciones, pases), lo que afecta significativamente el valor. La diferencia revela cuánto importan las decisiones de cubo en esa posición.",
          de: "Equity ohne Würfel bewertet nur die Position als ob der Dopplungswürfel nicht existierte - reine Gewinn/Gammon/Backgammon-Chancen. Equity mit Würfel beinhaltet optimale Würfelaktionen (Verdopplungen, Annahmen, Pässe), was den Wert signifikant beeinflusst. Der Unterschied zeigt wie viel Würfelentscheidungen in dieser Position zählen.",
          nl: "Equity zonder dobbelsteen evalueert alleen de positie alsof de verdubbeldobbelsteen niet bestond - pure win/gammon/backgammon kansen. Equity met dobbelsteen omvat optimale dobbelsteenacties (verdubbelen, nemen, passen), wat de waarde aanzienlijk beïnvloedt. Het verschil onthult hoeveel dobbelsteenbeslissingen ertoe doen in die positie."
        }
      },
      {
        question: {
          en: "What is 'skill luck gradient' in backgammon?",
          es: "¿Qué es 'gradiente de habilidad-suerte' en backgammon?",
          de: "Was ist 'Fähigkeit-Glück-Gradient' im Backgammon?",
          nl: "Wat is 'vaardigheid geluk gradiënt' in backgammon?"
        },
        options: [
          { en: "Balance between skill and luck determining outcomes over time", es: "Balance entre habilidad y suerte determinando resultados con el tiempo", de: "Balance zwischen Fähigkeit und Glück bestimmt Ergebnisse über Zeit", nl: "Balans tussen vaardigheid en geluk die uitkomsten bepaalt over tijd" },
          { en: "Learning curve steepness", es: "Inclinación de curva de aprendizaje", de: "Steilheit der Lernkurve", nl: "Steilheid van leercurve" },
          { en: "Luck distribution pattern", es: "Patrón de distribución de suerte", de: "Glücksverteilungsmuster", nl: "Geluk verdelingspatroon" },
          { en: "Skill rating slope", es: "Pendiente de calificación de habilidad", de: "Fähigkeitsbewertungssteigung", nl: "Vaardigheid beoordeling helling" }
        ],
        correct: 0,
        explanation: {
          en: "Backgammon has significant short-term luck but skill dominates long-term. A beginner might beat a world champion in a single game (40% luck), but over 100+ games skill determines outcomes. Understanding this gradient helps manage emotions and focus on decision quality over results.",
          es: "Backgammon tiene suerte significativa a corto plazo pero la habilidad domina a largo plazo. Un principiante podría vencer a un campeón mundial en un solo juego (40% suerte), pero en 100+ juegos la habilidad determina resultados. Entender este gradiente ayuda a manejar emociones y enfocarse en calidad de decisión sobre resultados.",
          de: "Backgammon hat signifikantes kurzfristiges Glück aber Fähigkeit dominiert langfristig. Ein Anfänger könnte einen Weltmeister in einem einzelnen Spiel schlagen (40% Glück), aber über 100+ Spiele bestimmt Fähigkeit Ergebnisse. Diesen Gradienten zu verstehen hilft Emotionen zu managen und sich auf Entscheidungsqualität über Ergebnisse zu fokussieren.",
          nl: "Backgammon heeft aanzienlijk korte termijn geluk maar vaardigheid domineert lange termijn. Een beginner zou een wereldkampioen kunnen verslaan in een enkel spel (40% geluk), maar over 100+ spellen bepaalt vaardigheid uitkomsten. Deze gradiënt begrijpen helpt emoties te beheren en te focussen op beslissingskwaliteit boven resultaten."
        }
      },
      {
        question: {
          en: "What is 'match score dependency' in cube decisions?",
          es: "¿Qué es 'dependencia de marcador de match' en decisiones de cubo?",
          de: "Was ist 'Match-Stand-Abhängigkeit' bei Würfelentscheidungen?",
          nl: "Wat is 'wedstrijdscore afhankelijkheid' bij dobbelsteenbeslissingen?"
        },
        options: [
          { en: "How cube decisions change dramatically based on current match score", es: "Cómo las decisiones de cubo cambian dramáticamente según marcador actual de match", de: "Wie Würfelentscheidungen sich dramatisch ändern basierend auf aktuellem Match-Stand", nl: "Hoe dobbelsteenbeslissingen dramatisch veranderen op basis van huidige wedstrijdscore" },
          { en: "Relying on score for decisions", es: "Depender del marcador para decisiones", de: "Auf Stand für Entscheidungen verlassen", nl: "Afhankelijk van score voor beslissingen" },
          { en: "Match score tracking accuracy", es: "Precisión de seguimiento de marcador", de: "Match-Stand-Tracking-Genauigkeit", nl: "Wedstrijdscore tracking nauwkeurigheid" },
          { en: "Score-based strategy selection", es: "Selección de estrategia basada en marcador", de: "Punktbasierte Strategieauswahl", nl: "Score-gebaseerde strategie selectie" }
        ],
        correct: 0,
        explanation: {
          en: "Match score dependency means cube decisions vary wildly by score. At 2-away 2-away, you pass almost any double. At 2-away 3-away trailing, you take very aggressively. At DMP (0-0 Crawford), the cube is dead. Understanding these dependencies is crucial for correct match play.",
          es: "La dependencia de marcador de match significa que las decisiones de cubo varían enormemente según el marcador. En 2-away 2-away, pasas casi cualquier doble. En 2-away 3-away perdiendo, aceptas muy agresivamente. En DMP (0-0 Crawford), el cubo está muerto. Entender estas dependencias es crucial para juego de match correcto.",
          de: "Match-Stand-Abhängigkeit bedeutet Würfelentscheidungen variieren wild je nach Stand. Bei 2-away 2-away passen Sie fast jedes Doppeln. Bei 2-away 3-away zurückliegend nehmen Sie sehr aggressiv an. Bei DMP (0-0 Crawford) ist der Würfel tot. Diese Abhängigkeiten zu verstehen ist entscheidend für korrektes Match-Spiel.",
          nl: "Wedstrijdscore afhankelijkheid betekent dat dobbelsteenbeslissingen wild variëren per score. Bij 2-away 2-away pas je bijna elke verdubbeling. Bij 2-away 3-away achterliggend accepteer je zeer agressief. Bij DMP (0-0 Crawford) is de dobbelsteen dood. Deze afhankelijkheden begrijpen is cruciaal voor correct wedstrijdspel."
        }
      },
      {
        question: {
          en: "What is 'optimal strategy' in backgammon AI?",
          es: "¿Qué es 'estrategia óptima' en IA de backgammon?",
          de: "Was ist 'optimale Strategie' in Backgammon-KI?",
          nl: "Wat is 'optimale strategie' in backgammon AI?"
        },
        options: [
          { en: "Strategy that maximizes equity over infinite trials", es: "Estrategia que maximiza equity sobre ensayos infinitos", de: "Strategie die Equity über unendliche Versuche maximiert", nl: "Strategie die equity maximaliseert over oneindige proeven" },
          { en: "Best known strategy", es: "Mejor estrategia conocida", de: "Beste bekannte Strategie", nl: "Beste bekende strategie" },
          { en: "Perfect play without errors", es: "Juego perfecto sin errores", de: "Perfektes Spiel ohne Fehler", nl: "Perfect spel zonder fouten" },
          { en: "AI-recommended moves", es: "Movimientos recomendados por IA", de: "KI-empfohlene Züge", nl: "AI-aanbevolen zetten" }
        ],
        correct: 0,
        explanation: {
          en: "Optimal strategy maximizes expected equity across all possible dice sequences and opponent responses. Modern neural network bots approximate this through training on billions of positions. While we can't guarantee perfection, top bots play near-optimally with error rates under 2 points/game.",
          es: "La estrategia óptima maximiza la equity esperada a través de todas las secuencias posibles de dados y respuestas del oponente. Los bots de redes neuronales modernos aproximan esto mediante entrenamiento en miles de millones de posiciones. Aunque no podemos garantizar perfección, los mejores bots juegan casi óptimamente con tasas de error bajo 2 puntos/juego.",
          de: "Optimale Strategie maximiert erwartetes Equity über alle möglichen Würfelsequenzen und Gegnerantworten. Moderne neuronale Netzwerk-Bots approximieren dies durch Training auf Milliarden von Positionen. Obwohl wir Perfektion nicht garantieren können, spielen Top-Bots nahezu optimal mit Fehlerraten unter 2 Punkten/Spiel.",
          nl: "Optimale strategie maximaliseert verwachte equity over alle mogelijke dobbelsteenreeksen en tegenstander reacties. Moderne neurale netwerk bots benaderen dit door training op miljarden posities. Hoewel we perfectie niet kunnen garanderen, spelen top bots bijna optimaal met foutpercentages onder 2 punten/spel."
        }
      },
      {
        question: {
          en: "What is 'thermometer position' analysis?",
          es: "¿Qué es análisis de 'posición de termómetro'?",
          de: "Was ist 'Thermometer-Positions'-Analyse?",
          nl: "Wat is 'thermometer positie' analyse?"
        },
        options: [
          { en: "Testing position at different cube levels to measure cube efficiency", es: "Probar posición en diferentes niveles de cubo para medir eficiencia de cubo", de: "Position bei verschiedenen Würfelniveaus testen um Würfeleffizienz zu messen", nl: "Positie testen op verschillende dobbelsteenniveaus om dobbelsteenefficiëntie te meten" },
          { en: "Measuring position temperature", es: "Medir temperatura de posición", de: "Positionstemperatur messen", nl: "Positie temperatuur meten" },
          { en: "Heat mapping board positions", es: "Mapeo de calor de posiciones del tablero", de: "Hitzekarte von Brettpositionen", nl: "Warmte mapping van bordposities" },
          { en: "Testing position volatility", es: "Probar volatilidad de posición", de: "Positionsvolatilität testen", nl: "Positie volatiliteit testen" }
        ],
        correct: 0,
        explanation: {
          en: "Thermometer analysis evaluates the same position at cube levels 1, 2, 4, etc. to measure cube efficiency. If equity scales proportionally (doubles at each level), cube efficiency is 100%. If it scales less, efficiency is lower. This reveals how much cube power matters in that position type.",
          es: "El análisis de termómetro evalúa la misma posición en niveles de cubo 1, 2, 4, etc. para medir eficiencia de cubo. Si el equity escala proporcionalmente (se duplica en cada nivel), la eficiencia de cubo es 100%. Si escala menos, la eficiencia es menor. Esto revela cuánto importa el poder del cubo en ese tipo de posición.",
          de: "Thermometer-Analyse bewertet dieselbe Position bei Würfelniveaus 1, 2, 4, usw. um Würfeleffizienz zu messen. Wenn Equity proportional skaliert (verdoppelt bei jedem Niveau) ist Würfeleffizienz 100%. Wenn es weniger skaliert ist Effizienz niedriger. Dies zeigt wie viel Würfelkraft in diesem Positionstyp zählt.",
          nl: "Thermometer analyse evalueert dezelfde positie op dobbelsteenniveaus 1, 2, 4, etc. om dobbelsteenefficiëntie te meten. Als equity proportioneel schaalt (verdubbelt bij elk niveau) is dobbelsteenefficiëntie 100%. Als het minder schaalt is efficiëntie lager. Dit onthult hoeveel dobbelsteenkracht ertoe doet in dat positietype."
        }
      },
      {
        question: {
          en: "What is 'gammon price' in cube theory?",
          es: "¿Qué es 'precio de gammon' en teoría de cubo?",
          de: "Was ist 'Gammon-Preis' in der Würfeltheorie?",
          nl: "Wat is 'gammon prijs' in dobbelsteentheorie?"
        },
        options: [
          { en: "Cost in equity of allowing opponent gammon chances vs doubling now", es: "Costo en equity de permitir posibilidades de gammon al oponente vs doblar ahora", de: "Kosten in Equity Gegner Gammon-Chancen zu erlauben vs jetzt verdoppeln", nl: "Kosten in equity van tegenstander gammon kansen toestaan vs nu verdubbelen" },
          { en: "Value of winning gammon", es: "Valor de ganar gammon", de: "Wert des Gammon-Gewinnens", nl: "Waarde van gammon winnen" },
          { en: "Gammon probability percentage", es: "Porcentaje de probabilidad de gammon", de: "Gammon-Wahrscheinlichkeitsprozentsatz", nl: "Gammon waarschijnlijkheid percentage" },
          { en: "Economic cost of gammons", es: "Costo económico de gammons", de: "Wirtschaftliche Kosten von Gammons", nl: "Economische kosten van gammons" }
        ],
        correct: 0,
        explanation: {
          en: "Gammon price is the equity you sacrifice by waiting instead of doubling when you have gammon chances. If you're too good to double (opponent would pass), you pay the 'gammon price' - the difference between playing for gammon at 1x vs. winning outright at 2x. Balancing this is key cube skill.",
          es: "El precio de gammon es el equity que sacrificas al esperar en lugar de doblar cuando tienes posibilidades de gammon. Si eres demasiado bueno para doblar (oponente pasaría), pagas el 'precio de gammon' - la diferencia entre jugar por gammon a 1x vs. ganar directamente a 2x. Balancear esto es habilidad clave de cubo.",
          de: "Gammon-Preis ist das Equity das Sie opfern indem Sie warten statt zu verdoppeln wenn Sie Gammon-Chancen haben. Wenn Sie zu gut zum Verdoppeln sind (Gegner würde passen) zahlen Sie den 'Gammon-Preis' - der Unterschied zwischen auf Gammon bei 1x spielen vs. direkt bei 2x gewinnen. Dies zu balancieren ist Schlüssel-Würfelfähigkeit.",
          nl: "Gammon prijs is de equity die je opoffert door te wachten in plaats van te verdubbelen wanneer je gammon kansen hebt. Als je te goed bent om te verdubbelen (tegenstander zou passen) betaal je de 'gammon prijs' - het verschil tussen spelen voor gammon op 1x vs. direct winnen op 2x. Dit balanceren is belangrijke dobbelsteenvaardigheid."
        }
      },
      {
        question: {
          en: "What is 'checkerplay equity' vs 'cube equity'?",
          es: "¿Qué es 'equity de juego de fichas' vs 'equity de cubo'?",
          de: "Was ist 'Steinspiel-Equity' vs 'Würfel-Equity'?",
          nl: "Wat is 'steenspel equity' vs 'dobbelsteen equity'?"
        },
        options: [
          { en: "Checkerplay: equity from move decisions; Cube: from doubling decisions", es: "Juego de fichas: equity de decisiones de movimiento; Cubo: de decisiones de doblar", de: "Steinspiel: Equity aus Zugentscheidungen; Würfel: aus Verdopplungsentscheidungen", nl: "Steenspel: equity van zetbeslissingen; Dobbelsteen: van verdubbelbeslissingen" },
          { en: "Different equity calculation methods", es: "Diferentes métodos de cálculo de equity", de: "Verschiedene Equity-Berechnungsmethoden", nl: "Verschillende equity berekenings methoden" },
          { en: "Position vs game equity", es: "Equity de posición vs juego", de: "Positions- vs Spiel-Equity", nl: "Positie vs spel equity" },
          { en: "Tactical vs strategic equity", es: "Equity táctica vs estratégica", de: "Taktisches vs strategisches Equity", nl: "Tactische vs strategische equity" }
        ],
        correct: 0,
        explanation: {
          en: "Checkerplay equity measures your skill at moving checkers optimally each turn. Cube equity measures your doubling cube decisions. Top players excel at both, but many intermediate players are stronger at one than the other. Modern bots separate these for targeted analysis and improvement.",
          es: "Equity de juego de fichas mide tu habilidad para mover fichas óptimamente cada turno. Equity de cubo mide tus decisiones de cubo de doblar. Los mejores jugadores sobresalen en ambos, pero muchos jugadores intermedios son más fuertes en uno que en el otro. Los bots modernos separan estos para análisis y mejora dirigidos.",
          de: "Steinspiel-Equity misst Ihre Fähigkeit Steine optimal zu bewegen jeden Zug. Würfel-Equity misst Ihre Dopplungswürfel-Entscheidungen. Top-Spieler brillieren in beidem, aber viele Fortgeschrittene sind stärker in einem als im anderen. Moderne Bots trennen diese für gezielte Analyse und Verbesserung.",
          nl: "Steenspel equity meet je vaardigheid om stenen optimaal te bewegen elke beurt. Dobbelsteen equity meet je verdubbeldobbelsteen beslissingen. Top spelers blinken uit in beide, maar veel gemiddelde spelers zijn sterker in de ene dan de andere. Moderne bots scheiden deze voor gerichte analyse en verbetering."
        }
      },
      {
        question: {
          en: "What is 'live cube' vs 'dead cube' in match play?",
          es: "¿Qué es 'cubo vivo' vs 'cubo muerto' en juego de match?",
          de: "Was ist 'lebender Würfel' vs 'toter Würfel' im Match-Spiel?",
          nl: "Wat is 'levende dobbelsteen' vs 'dode dobbelsteen' in wedstrijdspel?"
        },
        options: [
          { en: "Live: cube may be used; Dead: cube strategically useless at score", es: "Vivo: cubo puede usarse; Muerto: cubo estratégicamente inútil en marcador", de: "Lebendig: Würfel kann verwendet werden; Tot: Würfel strategisch nutzlos beim Stand", nl: "Levend: dobbelsteen kan worden gebruikt; Dood: dobbelsteen strategisch nutteloos bij score" },
          { en: "Active vs inactive cube", es: "Cubo activo vs inactivo", de: "Aktiver vs inaktiver Würfel", nl: "Actieve vs inactieve dobbelsteen" },
          { en: "Working vs broken cube", es: "Cubo funcionando vs roto", de: "Funktionierender vs kaputter Würfel", nl: "Werkende vs kapotte dobbelsteen" },
          { en: "Valuable vs worthless cube", es: "Cubo valioso vs sin valor", de: "Wertvoller vs wertloser Würfel", nl: "Waardevolle vs waardeloze dobbelsteen" }
        ],
        correct: 0,
        explanation: {
          en: "A live cube may be used by either player. A dead cube occurs at match scores where neither player should ever double (like 2-away 2-away post-Crawford, or DMP). The game plays out as if there's no cube. Recognizing dead cube situations prevents blunders and simplifies decisions.",
          es: "Un cubo vivo puede ser usado por cualquier jugador. Un cubo muerto ocurre en marcadores de match donde ningún jugador debería doblar nunca (como 2-away 2-away post-Crawford, o DMP). El juego se desarrolla como si no hubiera cubo. Reconocer situaciones de cubo muerto previene desaciertos y simplifica decisiones.",
          de: "Ein lebender Würfel kann von jedem Spieler verwendet werden. Ein toter Würfel tritt bei Match-Ständen auf wo kein Spieler jemals verdoppeln sollte (wie 2-away 2-away nach-Crawford, oder DMP). Das Spiel läuft ab als gäbe es keinen Würfel. Tote-Würfel-Situationen zu erkennen verhindert Patzer und vereinfacht Entscheidungen.",
          nl: "Een levende dobbelsteen kan door beide spelers worden gebruikt. Een dode dobbelsteen vindt plaats bij wedstrijdscores waar geen enkele speler ooit zou moeten verdubbelen (zoals 2-away 2-away na-Crawford, of DMP). Het spel speelt zich af alsof er geen dobbelsteen is. Dode dobbelsteen situaties herkennen voorkomt blunders en vereenvoudigt beslissingen."
        }
      },
      {
        question: {
          en: "What is 'position ID' in backgammon software?",
          es: "¿Qué es 'ID de posición' en software de backgammon?",
          de: "Was ist 'Positions-ID' in Backgammon-Software?",
          nl: "Wat is 'positie ID' in backgammon software?"
        },
        options: [
          { en: "Unique identifier encoding exact checker positions for sharing", es: "Identificador único codificando posiciones exactas de fichas para compartir", de: "Eindeutige Kennung kodiert exakte Steinpositionen zum Teilen", nl: "Unieke identificatie codeert exacte steenposities voor delen" },
          { en: "Position identification number", es: "Número de identificación de posición", de: "Positionsidentifikationsnummer", nl: "Positie identificatie nummer" },
          { en: "Player ID in position", es: "ID de jugador en posición", de: "Spieler-ID in Position", nl: "Speler ID in positie" },
          { en: "Position classification code", es: "Código de clasificación de posición", de: "Positionsklassifizierungscode", nl: "Positie classificatie code" }
        ],
        correct: 0,
        explanation: {
          en: "Position ID is a standardized string encoding the exact location of all checkers, cube level, and whose turn it is. This allows sharing positions between players and software. For example, you can paste a Position ID into GNU Backgammon or XG to analyze the same position someone else is discussing.",
          es: "ID de posición es una cadena estandarizada codificando la ubicación exacta de todas las fichas, nivel de cubo y de quién es el turno. Esto permite compartir posiciones entre jugadores y software. Por ejemplo, puedes pegar un ID de Posición en GNU Backgammon o XG para analizar la misma posición que alguien más está discutiendo.",
          de: "Positions-ID ist eine standardisierte Zeichenfolge die den exakten Standort aller Steine, Würfelniveau und wer am Zug ist kodiert. Dies erlaubt Positionen zwischen Spielern und Software zu teilen. Zum Beispiel können Sie eine Positions-ID in GNU Backgammon oder XG einfügen um dieselbe Position zu analysieren die jemand anders diskutiert.",
          nl: "Positie ID is een gestandaardiseerde string die de exacte locatie van alle stenen, dobbelsteenniveau en wiens beurt het is codeert. Dit maakt het delen van posities tussen spelers en software mogelijk. Bijvoorbeeld, je kunt een Positie ID plakken in GNU Backgammon of XG om dezelfde positie te analyseren die iemand anders bespreekt."
        }
      },
      {
        question: {
          en: "What is 'money equity' vs 'match equity'?",
          es: "¿Qué es 'equity de dinero' vs 'equity de match'?",
          de: "Was ist 'Geld-Equity' vs 'Match-Equity'?",
          nl: "Wat is 'geld equity' vs 'wedstrijd equity'?"
        },
        options: [
          { en: "Money: points/stake in single game; Match: probability of winning match", es: "Dinero: puntos/apuesta en juego único; Match: probabilidad de ganar match", de: "Geld: Punkte/Einsatz in Einzelspiel; Match: Wahrscheinlichkeit Match zu gewinnen", nl: "Geld: punten/inzet in enkel spel; Wedstrijd: waarschijnlijkheid om wedstrijd te winnen" },
          { en: "Cash games vs tournament games", es: "Juegos de efectivo vs juegos de torneo", de: "Bargeldspiele vs Turnierspiele", nl: "Contante spellen vs toernooi spellen" },
          { en: "Dollar value vs point value", es: "Valor en dólares vs valor en puntos", de: "Dollarwert vs Punktwert", nl: "Dollarwaarde vs puntwaarde" },
          { en: "Different equity systems", es: "Diferentes sistemas de equity", de: "Verschiedene Equity-Systeme", nl: "Verschillende equity systemen" }
        ],
        correct: 0,
        explanation: {
          en: "Money equity is expected value in points or dollars for the current game, treating each game independently. Match equity is your probability of winning the entire match from the current score. A +0.400 money position might be worth different match equity at different scores (e.g., worthless at DMP, huge at 2-away 3-away).",
          es: "Equity de dinero es valor esperado en puntos o dólares para el juego actual, tratando cada juego independientemente. Equity de match es tu probabilidad de ganar el match completo desde el marcador actual. Una posición de dinero +0.400 podría valer equity de match diferente en diferentes marcadores (ej., sin valor en DMP, enorme en 2-away 3-away).",
          de: "Geld-Equity ist erwarteter Wert in Punkten oder Dollar für das aktuelle Spiel, jedes Spiel unabhängig behandelnd. Match-Equity ist Ihre Wahrscheinlichkeit das gesamte Match vom aktuellen Stand zu gewinnen. Eine +0,400 Geld-Position könnte unterschiedliches Match-Equity bei verschiedenen Ständen wert sein (z.B. wertlos bei DMP, riesig bei 2-away 3-away).",
          nl: "Geld equity is verwachte waarde in punten of dollars voor het huidige spel, elk spel onafhankelijk behandelend. Wedstrijd equity is je waarschijnlijkheid om de hele wedstrijd te winnen vanaf de huidige score. Een +0,400 geld positie zou verschillende wedstrijd equity waard kunnen zijn bij verschillende scores (bijv. waardeloos bij DMP, enorm bij 2-away 3-away)."
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
