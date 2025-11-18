// Backgammon - Level 10: Grandmaster
(function() {
  const level10 = {
    name: {
      en: "Backgammon - Grandmaster",
      es: "Backgammon - Gran maestro",
      de: "Backgammon - Großmeister",
      nl: "Backgammon - Grootmeester"
    },
    questions: [
      {
        question: {
          en: "What is the 'Woolsey Position' in tournament backgammon?",
          es: "¿Qué es la 'Posición Woolsey' en el backgammon de torneo?",
          de: "Was ist die 'Woolsey-Position' im Turnier-Backgammon?",
          nl: "Wat is de 'Woolsey-positie' in toernooi-backgammon?"
        },
        options: [
          { en: "Double accept", es: "Doblar y aceptar", de: "Verdoppeln und akzeptieren", nl: "Verdubbelen en accepteren" },
          { en: "Too good to double", es: "Demasiado bueno para doblar", de: "Zu gut zum Verdoppeln", nl: "Te goed om te verdubbelen" },
          { en: "Double/pass borderline", es: "Límite entre doblar y pasar", de: "Grenze zwischen Verdoppeln und Passen", nl: "Grens tussen verdubbelen en passen" },
          { en: "Always cash immediately", es: "Siempre cobrar inmediatamente", de: "Immer sofort auszahlen", nl: "Altijd direct innen" }
        ],
        correct: 1,
        explanation: {
          en: "The Woolsey Position refers to situations where you're too good to double because your opponent would pass, but you have excellent winning chances that warrant playing on for a gammon. Named after Kit Woolsey, this concept is crucial in match play decision-making.",
          es: "La Posición Woolsey se refiere a situaciones donde eres demasiado bueno para doblar porque tu oponente pasaría, pero tienes excelentes posibilidades de ganar que justifican seguir jugando por un gammon. Nombrado en honor a Kit Woolsey, este concepto es crucial en la toma de decisiones en partidas de match.",
          de: "Die Woolsey-Position bezieht sich auf Situationen, in denen man zu gut ist, um zu verdoppeln, weil der Gegner passen würde, aber man ausgezeichnete Gewinnchancen hat, die es rechtfertigen, auf ein Gammon weiterzuspielen. Nach Kit Woolsey benannt, ist dieses Konzept für die Entscheidungsfindung im Match-Spiel entscheidend.",
          nl: "De Woolsey-positie verwijst naar situaties waarin je te goed bent om te verdubbelen omdat je tegenstander zou passen, maar je hebt uitstekende winkansen die rechtvaardigen om door te spelen voor een gammon. Vernoemd naar Kit Woolsey, is dit concept cruciaal in match play besluitvorming."
        }
      },
      {
        question: {
          en: "In extreme back games, what pip count differential typically indicates a viable back game position?",
          es: "En back games extremos, ¿qué diferencial de conteo de pips típicamente indica una posición de back game viable?",
          de: "Bei extremen Back Games, welche Pip-Count-Differenz deutet typischerweise auf eine lebensfähige Back-Game-Position hin?",
          nl: "Bij extreme back games, welk pip count verschil duidt typisch op een levensvatbare back game positie?"
        },
        options: [
          { en: "30-50 pips behind", es: "30-50 pips atrás", de: "30-50 Pips zurück", nl: "30-50 pips achter" },
          { en: "60-80 pips behind", es: "60-80 pips atrás", de: "60-80 Pips zurück", nl: "60-80 pips achter" },
          { en: "100-120 pips behind", es: "100-120 pips atrás", de: "100-100 Pips zurück", nl: "100-120 pips achter" },
          { en: "140+ pips behind", es: "140+ pips atrás", de: "140+ Pips zurück", nl: "140+ pips achter" }
        ],
        correct: 2,
        explanation: {
          en: "In extreme back games, you typically need to be 100-120 pips behind to have sufficient timing. Being too far behind (140+) makes it nearly impossible to win, while being too close (60-80) means you'll be forced to break your back game position too early.",
          es: "En back games extremos, típicamente necesitas estar 100-120 pips atrás para tener suficiente timing. Estar demasiado atrás (140+) hace casi imposible ganar, mientras que estar demasiado cerca (60-80) significa que te verás obligado a romper tu posición de back game demasiado temprano.",
          de: "Bei extremen Back Games muss man typischerweise 100-120 Pips zurückliegen, um ausreichendes Timing zu haben. Zu weit zurückzuliegen (140+) macht einen Sieg nahezu unmöglich, während zu nah dran zu sein (60-80) bedeutet, dass man gezwungen wird, die Back-Game-Position zu früh aufzugeben.",
          nl: "Bij extreme back games moet je typisch 100-120 pips achterstaan om voldoende timing te hebben. Te ver achterstaan (140+) maakt het bijna onmogelijk om te winnen, terwijl te dichtbij zijn (60-80) betekent dat je gedwongen wordt om je back game positie te vroeg te breken."
        }
      },
      {
        question: {
          en: "What is 'Turner's Rule' in cube action decisions?",
          es: "¿Qué es la 'Regla de Turner' en decisiones de acción del cubo?",
          de: "Was ist 'Turners Regel' bei Würfel-Aktionsentscheidungen?",
          nl: "Wat is 'Turner's regel' bij dobbelsteenactie beslissingen?"
        },
        options: [
          { en: "Redouble at 25% equity", es: "Redoblar con 25% de equity", de: "Wiederverdoppeln bei 25% Equity", nl: "Herverdubbelen bij 25% equity" },
          { en: "Double when opponent has <30% win rate", es: "Doblar cuando el oponente tiene <30% de tasa de victoria", de: "Verdoppeln, wenn Gegner <30% Gewinnrate hat", nl: "Verdubbelen wanneer tegenstander <30% winkans heeft" },
          { en: "Take doubles at Crawford with >27% wins", es: "Aceptar dobles en Crawford con >27% victorias", de: "Doubles annehmen bei Crawford mit >27% Siegen", nl: "Doubles accepteren bij Crawford met >27% overwinningen" },
          { en: "Initial double at 68% equity", es: "Doble inicial con 68% de equity", de: "Anfängliche Verdopplung bei 68% Equity", nl: "Initiële verdubbeling bij 68% equity" }
        ],
        correct: 3,
        explanation: {
          en: "Turner's Rule states that in money games, you should initial double when your winning chances reach approximately 68%. This accounts for the fact that your opponent has cube ownership and can potentially redouble. The rule helps optimize when to turn the cube from the center.",
          es: "La Regla de Turner establece que en juegos por dinero, debes hacer el doble inicial cuando tus posibilidades de ganar alcanzan aproximadamente el 68%. Esto tiene en cuenta el hecho de que tu oponente tiene la propiedad del cubo y puede potencialmente redoblar. La regla ayuda a optimizar cuándo girar el cubo desde el centro.",
          de: "Turners Regel besagt, dass man in Geldspielen die erste Verdopplung bei etwa 68% Gewinnchancen machen sollte. Dies berücksichtigt, dass der Gegner den Würfel besitzt und potenziell wiederverdoppeln kann. Die Regel hilft zu optimieren, wann man den Würfel vom Zentrum dreht.",
          nl: "Turner's regel stelt dat je in geldspellen de initiële verdubbeling moet doen wanneer je winkansen ongeveer 68% bereiken. Dit houdt rekening met het feit dat je tegenstander het dobbelsteenbezit heeft en mogelijk kan herverdubbelen. De regel helpt optimaliseren wanneer je de dobbelsteen vanuit het midden moet draaien."
        }
      },
      {
        question: {
          en: "What is the 'Neil's Number' concept in match equity decisions?",
          es: "¿Qué es el concepto del 'Número de Neil' en decisiones de equidad de match?",
          de: "Was ist das Konzept der 'Neil-Zahl' bei Match-Equity-Entscheidungen?",
          nl: "Wat is het 'Neil's getal' concept in match equity beslissingen?"
        },
        options: [
          { en: "Optimal pip differential", es: "Diferencial de pips óptimo", de: "Optimale Pip-Differenz", nl: "Optimaal pip verschil" },
          { en: "Break-even gammon rate for taking", es: "Tasa de gammon de equilibrio para aceptar", de: "Break-even-Gammon-Rate zum Annehmen", nl: "Break-even gammon percentage voor accepteren" },
          { en: "Cube ownership value", es: "Valor de propiedad del cubo", de: "Würfelbesitzwert", nl: "Dobbelsteenbezitwaarde" },
          { en: "Crawford game threshold", es: "Umbral del juego Crawford", de: "Crawford-Spiel-Schwelle", nl: "Crawford spel drempel" }
        ],
        correct: 1,
        explanation: {
          en: "Neil's Number (also called Kazaross's Number) refers to the gammon price - the maximum gammon rate you can afford to give your opponent while still having a correct take. It varies based on match score and is calculated as: (Pass value - Dead cube take point) / (Gammon cost - Normal loss cost). This advanced concept is critical for close cube decisions in match play.",
          es: "El Número de Neil (también llamado Número de Kazaross) se refiere al precio del gammon: la tasa máxima de gammon que puedes permitirte darle a tu oponente mientras aún tienes una aceptación correcta. Varía según la puntuación del match y se calcula como: (Valor de pasar - Punto de aceptación del cubo muerto) / (Costo del gammon - Costo de pérdida normal). Este concepto avanzado es crítico para decisiones cercanas del cubo en partidas de match.",
          de: "Neil-Zahl (auch Kazaross-Zahl genannt) bezieht sich auf den Gammon-Preis - die maximale Gammon-Rate, die man dem Gegner gewähren kann, während man noch eine korrekte Annahme hat. Sie variiert je nach Match-Stand und wird berechnet als: (Pass-Wert - Dead-Cube-Take-Punkt) / (Gammon-Kosten - Normale Verlustkosten). Dieses fortgeschrittene Konzept ist kritisch für knappe Würfelentscheidungen im Match-Spiel.",
          nl: "Neil's getal (ook wel Kazaross's getal genoemd) verwijst naar de gammon prijs - het maximale gammon percentage dat je je tegenstander kunt geven terwijl je nog steeds een correcte acceptatie hebt. Het varieert op basis van match score en wordt berekend als: (Pass waarde - Dode dobbelsteen acceptatiepunt) / (Gammon kosten - Normale verlies kosten). Dit geavanceerde concept is cruciaal voor krappe dobbelsteenbeslissingen in match play."
        }
      },
      {
        question: {
          en: "In reference positions, what does 'market loser' refer to?",
          es: "En posiciones de referencia, ¿a qué se refiere 'perdedor del mercado'?",
          de: "Was bedeutet 'Market Loser' in Referenzpositionen?",
          nl: "In referentieposities, waar verwijst 'market loser' naar?"
        },
        options: [
          { en: "Roll that loses gammon", es: "Tirada que pierde gammon", de: "Wurf, der Gammon verliert", nl: "Worp die gammon verliest" },
          { en: "Roll that causes opponent to pass double", es: "Tirada que hace que el oponente rechace el doble", de: "Wurf, der den Gegner veranlasst, die Verdopplung abzulehnen", nl: "Worp die ervoor zorgt dat tegenstander verdubbeling weigert" },
          { en: "Position behind pip count", es: "Posición detrás en conteo de pips", de: "Position hinter Pip-Count", nl: "Positie achter pip count" },
          { en: "Equity drops below 50%", es: "La equidad cae por debajo del 50%", de: "Equity fällt unter 50%", nl: "Equity daalt onder 50%" }
        ],
        correct: 1,
        explanation: {
          en: "A market loser is a roll that improves your position so much that if you doubled, your opponent would pass - but you haven't doubled yet. You 'lose your market' because you miss the opportunity to double while your opponent would still take. This is why in volatile positions, you should sometimes double earlier than pure equity suggests, to avoid losing your market.",
          es: "Un perdedor del mercado es una tirada que mejora tu posición tanto que si doblaras, tu oponente pasaría, pero aún no has doblado. 'Pierdes tu mercado' porque pierdes la oportunidad de doblar mientras tu oponente aún aceptaría. Por esto, en posiciones volátiles, a veces debes doblar antes de lo que sugiere la equidad pura, para evitar perder tu mercado.",
          de: "Ein Market Loser ist ein Wurf, der deine Position so stark verbessert, dass dein Gegner bei einer Verdopplung passen würde - aber du hast noch nicht verdoppelt. Du 'verlierst deinen Markt', weil du die Gelegenheit verpasst zu verdoppeln, während dein Gegner noch annehmen würde. Deshalb solltest du in volatilen Positionen manchmal früher verdoppeln als die reine Equity nahelegt, um deinen Markt nicht zu verlieren.",
          nl: "Een market loser is een worp die je positie zoveel verbetert dat als je zou verdubbelen, je tegenstander zou passen - maar je hebt nog niet verdubbeld. Je 'verliest je markt' omdat je de kans mist om te verdubbelen terwijl je tegenstander nog zou accepteren. Daarom moet je in volatiele posities soms eerder verdubbelen dan pure equity suggereert, om je markt niet te verliezen."
        }
      },
      {
        question: {
          en: "What is the 'Janowski formula' for calculating cube action in racing positions?",
          es: "¿Qué es la 'fórmula de Janowski' para calcular la acción del cubo en posiciones de carrera?",
          de: "Was ist die 'Janowski-Formel' zur Berechnung der Würfelaktion in Rennpositionen?",
          nl: "Wat is de 'Janowski formule' voor het berekenen van dobbelsteenactie in race posities?"
        },
        options: [
          { en: "Pip lead × 8% = win chance", es: "Ventaja de pips × 8% = probabilidad de ganar", de: "Pip-Vorsprung × 8% = Gewinnchance", nl: "Pip voorsprong × 8% = winkans" },
          { en: "Effective pip count ÷ 10", es: "Conteo efectivo de pips ÷ 10", de: "Effektiver Pip-Count ÷ 10", nl: "Effectieve pip count ÷ 10" },
          { en: "(Pip lead - wastage) × turnover", es: "(Ventaja de pips - desperdicio) × rotación", de: "(Pip-Vorsprung - Verschwendung) × Turnover", nl: "(Pip voorsprong - verspilling) × omzet" },
          { en: "√(pip diff) × match score", es: "√(dif pips) × puntuación del match", de: "√(Pip-Diff) × Match-Punktzahl", nl: "√(pip verschil) × match score" }
        ],
        correct: 0,
        explanation: {
          en: "The Janowski formula (also called the 8-9-12 rule) states that in pure racing positions, each pip you're ahead translates to approximately 8% better winning chances. If you're 10 pips ahead, you have roughly 80% win probability. While modern analysis shows slight variations, this rule provides quick over-the-board estimations for cube decisions in racing situations.",
          es: "La fórmula de Janowski (también llamada la regla 8-9-12) establece que en posiciones de carrera puras, cada pip de ventaja se traduce en aproximadamente un 8% más de probabilidades de ganar. Si tienes 10 pips de ventaja, tienes aproximadamente un 80% de probabilidad de ganar. Aunque el análisis moderno muestra ligeras variaciones, esta regla proporciona estimaciones rápidas sobre el tablero para decisiones del cubo en situaciones de carrera.",
          de: "Die Janowski-Formel (auch 8-9-12-Regel genannt) besagt, dass in reinen Rennpositionen jeder Pip Vorsprung etwa 8% bessere Gewinnchancen bedeutet. Wenn man 10 Pips vorne liegt, hat man ungefähr 80% Gewinnwahrscheinlichkeit. Während moderne Analysen leichte Variationen zeigen, bietet diese Regel schnelle Schätzungen am Brett für Würfelentscheidungen in Rennsituationen.",
          nl: "De Janowski formule (ook wel de 8-9-12 regel genoemd) stelt dat in pure race posities, elke pip voorsprong zich vertaalt naar ongeveer 8% betere winkansen. Als je 10 pips voorligt, heb je ruwweg 80% winkans. Hoewel moderne analyse lichte variaties toont, biedt deze regel snelle schattingen tijdens het spel voor dobbelsteenbeslissingen in race situaties."
        }
      },
      {
        question: {
          en: "What is the 'free drop' concept at 2-away, 2-away score?",
          es: "¿Qué es el concepto de 'free drop' en la puntuación 2-away, 2-away?",
          de: "Was ist das 'Free-Drop'-Konzept bei 2-away, 2-away?",
          nl: "Wat is het 'free drop' concept bij 2-away, 2-away score?"
        },
        options: [
          { en: "Never drop any double", es: "Nunca rechazar ningún doble", de: "Niemals eine Verdopplung ablehnen", nl: "Nooit een verdubbeling weigeren" },
          { en: "Can drop without penalty if <25% equity", es: "Puedes rechazar sin penalización si <25% equity", de: "Kann ohne Strafe droppen bei <25% Equity", nl: "Kan zonder straf weigeren bij <25% equity" },
          { en: "Any drop costs same as losing game", es: "Cualquier rechazo cuesta lo mismo que perder el juego", de: "Jeder Drop kostet gleich viel wie Spielverlust", nl: "Elke weigering kost hetzelfde als het spel verliezen" },
          { en: "Must take all gammon-free positions", es: "Debes aceptar todas las posiciones sin gammon", de: "Muss alle gammon-freien Positionen annehmen", nl: "Moet alle gammon-vrije posities accepteren" }
        ],
        correct: 2,
        explanation: {
          en: "At 2-away, 2-away (tied at 2 points to win), dropping a double costs you exactly the same match equity as losing the game - both leave you 2-away, Crawford. Therefore, you should drop aggressively in clearly losing positions rather than accepting and potentially getting gammoned. This is one of the most important match equity concepts, as it changes taking strategy dramatically compared to money play.",
          es: "En 2-away, 2-away (empatados a 2 puntos para ganar), rechazar un doble te cuesta exactamente la misma equidad de match que perder el juego: ambos te dejan 2-away, Crawford. Por lo tanto, debes rechazar agresivamente en posiciones claramente perdedoras en lugar de aceptar y potencialmente recibir un gammon. Este es uno de los conceptos de equidad de match más importantes, ya que cambia la estrategia de aceptación dramáticamente en comparación con el juego por dinero.",
          de: "Bei 2-away, 2-away (unentschieden bei 2 Punkten zum Sieg) kostet das Ablehnen einer Verdopplung genau die gleiche Match-Equity wie das Verlieren des Spiels - beide lassen einen 2-away, Crawford. Daher sollte man in eindeutig verlorenen Positionen aggressiv droppen, anstatt anzunehmen und möglicherweise ein Gammon zu kassieren. Dies ist eines der wichtigsten Match-Equity-Konzepte, da es die Annahmestrategie dramatisch im Vergleich zum Geldspiel ändert.",
          nl: "Bij 2-away, 2-away (gelijk op 2 punten om te winnen), kost het weigeren van een verdubbeling je exact dezelfde match equity als het verliezen van het spel - beide laten je 2-away, Crawford. Daarom moet je agressief weigeren in duidelijk verliezende posities in plaats van accepteren en mogelijk een gammon te krijgen. Dit is een van de belangrijkste match equity concepten, omdat het de acceptatiestrategie dramatisch verandert vergeleken met geldspel."
        }
      },
      {
        question: {
          en: "What is 'Keith count' in backgammon pip counting?",
          es: "¿Qué es el 'conteo de Keith' en el conteo de pips de backgammon?",
          de: "Was ist 'Keith-Zählung' beim Backgammon-Pip-Zählen?",
          nl: "Wat is 'Keith count' in backgammon pip tellen?"
        },
        options: [
          { en: "Simplified racing formula", es: "Fórmula de carrera simplificada", de: "Vereinfachte Rennformel", nl: "Vereenvoudigde race formule" },
          { en: "Mental pip counting method", es: "Método mental de conteo de pips", de: "Mentale Pip-Zählmethode", nl: "Mentale pip telmethode" },
          { en: "Electronic counter system", es: "Sistema de contador electrónico", de: "Elektronisches Zählsystem", nl: "Elektronisch telsysteem" },
          { en: "Post-bear-off calculation", es: "Cálculo después del bear-off", de: "Berechnung nach dem Auswürfeln", nl: "Berekening na het uitspelen" }
        ],
        correct: 1,
        explanation: {
          en: "The Keith count is an advanced mental pip counting method that uses reference points and adjustments to quickly calculate pip counts during play. It involves memorizing key checker distributions and adding/subtracting adjustments for variations. This technique allows strong players to maintain accurate pip counts throughout the game without slowing down play, which is crucial for optimal cube decisions.",
          es: "El conteo de Keith es un método mental avanzado de conteo de pips que usa puntos de referencia y ajustes para calcular rápidamente los conteos de pips durante el juego. Implica memorizar distribuciones clave de fichas y sumar/restar ajustes para variaciones. Esta técnica permite a jugadores fuertes mantener conteos de pips precisos durante todo el juego sin ralentizar el juego, lo cual es crucial para decisiones óptimas del cubo.",
          de: "Die Keith-Zählung ist eine fortgeschrittene mentale Pip-Zählmethode, die Referenzpunkte und Anpassungen verwendet, um Pip-Counts während des Spiels schnell zu berechnen. Sie beinhaltet das Auswendiglernen wichtiger Steinverteilungen und das Addieren/Subtrahieren von Anpassungen für Variationen. Diese Technik ermöglicht es starken Spielern, genaue Pip-Counts während des gesamten Spiels aufrechtzuerhalten, ohne das Spiel zu verlangsamen, was für optimale Würfelentscheidungen entscheidend ist.",
          nl: "De Keith count is een geavanceerde mentale pip telmethode die referentiepunten en aanpassingen gebruikt om snel pip counts te berekenen tijdens het spel. Het houdt in dat je belangrijke steendistributies uit je hoofd leert en aanpassingen optelt/aftrekt voor variaties. Deze techniek stelt sterke spelers in staat om nauwkeurige pip counts bij te houden tijdens het hele spel zonder het spel te vertragen, wat cruciaal is voor optimale dobbelsteenbeslissingen."
        }
      },
      {
        question: {
          en: "In blitz positions, what is the 'attacking point' strategy versus 'blitzing' strategy?",
          es: "En posiciones de blitz, ¿cuál es la estrategia de 'punto de ataque' versus la estrategia de 'blitzing'?",
          de: "In Blitz-Positionen, was ist die 'Angriffspunkt'-Strategie versus 'Blitzing'-Strategie?",
          nl: "In blitz posities, wat is de 'aanvalspunt' strategie versus 'blitzen' strategie?"
        },
        options: [
          { en: "Attack early vs build board first", es: "Atacar temprano vs construir tablero primero", de: "Früh angreifen vs. erst Board aufbauen", nl: "Vroeg aanvallen vs eerst bord opbouwen" },
          { en: "2-point vs 4-point anchor", es: "Ancla de 2 puntos vs ancla de 4 puntos", de: "2-Punkt- vs. 4-Punkt-Anker", nl: "2-punts vs 4-punts anker" },
          { en: "Hit loose vs make points", es: "Golpear suelto vs hacer puntos", de: "Lose schlagen vs. Punkte machen", nl: "Los raken vs punten maken" },
          { en: "Cube early vs wait for contact", es: "Cubo temprano vs esperar contacto", de: "Früh würfeln vs. auf Kontakt warten", nl: "Vroeg dobbelen vs wachten op contact" }
        ],
        correct: 2,
        explanation: {
          en: "The attacking point strategy prioritizes making inner board points while hitting blots, creating a more solid attacking position. Pure blitzing focuses on hitting as many opponent checkers as possible (even with blots) to gain tempo and overwhelm the opponent. Attacking point is generally correct when you can make the 4-point or 5-point while attacking, while pure blitzing is better with strong timing and when you need maximum aggression. Top players must recognize which strategy fits the position.",
          es: "La estrategia de punto de ataque prioriza hacer puntos en el tablero interior mientras golpeas blots, creando una posición de ataque más sólida. El blitzing puro se enfoca en golpear tantas fichas del oponente como sea posible (incluso con blots) para ganar tempo y abrumar al oponente. El punto de ataque es generalmente correcto cuando puedes hacer el punto 4 o 5 mientras atacas, mientras que el blitzing puro es mejor con buen timing y cuando necesitas máxima agresión. Los mejores jugadores deben reconocer qué estrategia se ajusta a la posición.",
          de: "Die Angriffspunkt-Strategie priorisiert das Erstellen von Innenpunkten beim Schlagen von Blots und schafft eine solidere Angriffsposition. Reines Blitzing konzentriert sich darauf, so viele gegnerische Steine wie möglich zu schlagen (auch mit Blots), um Tempo zu gewinnen und den Gegner zu überwältigen. Angriffspunkt ist im Allgemeinen korrekt, wenn man den 4- oder 5-Punkt machen kann, während man angreift, während reines Blitzing besser ist bei starkem Timing und wenn maximale Aggression erforderlich ist. Top-Spieler müssen erkennen, welche Strategie zur Position passt.",
          nl: "De aanvalspunt strategie geeft prioriteit aan het maken van binnenste bordpunten terwijl je blots raakt, wat een meer solide aanvalspositie creëert. Pure blitzen richt zich op het raken van zoveel mogelijk tegenstander stenen (zelfs met blots) om tempo te winnen en de tegenstander te overweldigen. Aanvalspunt is over het algemeen correct wanneer je het 4-punt of 5-punt kunt maken terwijl je aanvalt, terwijl pure blitzen beter is met sterke timing en wanneer je maximale agressie nodig hebt. Topspelers moeten herkennen welke strategie bij de positie past."
        }
      },
      {
        question: {
          en: "What is the 'Rockwell-Kazaross' XG take point formula in complex positions?",
          es: "¿Qué es la fórmula del punto de aceptación 'Rockwell-Kazaross' XG en posiciones complejas?",
          de: "Was ist die 'Rockwell-Kazaross' XG Take-Point-Formel in komplexen Positionen?",
          nl: "Wat is de 'Rockwell-Kazaross' XG acceptatiepunt formule in complexe posities?"
        },
        options: [
          { en: "(G+2B)/(1+G+2B) where G=gammon%, B=bg%", es: "(G+2B)/(1+G+2B) donde G=gammon%, B=bg%", de: "(G+2B)/(1+G+2B) wobei G=Gammon%, B=BG%", nl: "(G+2B)/(1+G+2B) waarbij G=gammon%, B=bg%" },
          { en: "25% - (gammon% × 0.5)", es: "25% - (gammon% × 0,5)", de: "25% - (Gammon% × 0,5)", nl: "25% - (gammon% × 0,5)" },
          { en: "√(equity loss) + 15%", es: "√(pérdida de equity) + 15%", de: "√(Equity-Verlust) + 15%", nl: "√(equity verlies) + 15%" },
          { en: "30% fixed in all positions", es: "30% fijo en todas las posiciones", de: "30% fest in allen Positionen", nl: "30% vast in alle posities" }
        ],
        correct: 0,
        explanation: {
          en: "The Rockwell-Kazaross (RK) formula calculates the minimum winning chances needed to take a double when gammons and backgammons are possible: (G+2B)/(1+G+2B), where G is opponent's gammon rate and B is backgammon rate. For example, if opponent has 20% gammons and 5% backgammons, your take point is (0.20+2×0.05)/(1+0.20+2×0.05) = 0.30/1.30 ≈ 23%. This is crucial for accurate cube decisions in volatile positions.",
          es: "La fórmula Rockwell-Kazaross (RK) calcula las probabilidades mínimas de ganar necesarias para aceptar un doble cuando son posibles gammons y backgammons: (G+2B)/(1+G+2B), donde G es la tasa de gammon del oponente y B es la tasa de backgammon. Por ejemplo, si el oponente tiene 20% de gammons y 5% de backgammons, tu punto de aceptación es (0,20+2×0,05)/(1+0,20+2×0,05) = 0,30/1,30 ≈ 23%. Esto es crucial para decisiones precisas del cubo en posiciones volátiles.",
          de: "Die Rockwell-Kazaross (RK)-Formel berechnet die minimalen Gewinnchancen, die zum Annehmen einer Verdopplung erforderlich sind, wenn Gammons und Backgammons möglich sind: (G+2B)/(1+G+2B), wobei G die Gammon-Rate des Gegners und B die Backgammon-Rate ist. Zum Beispiel, wenn der Gegner 20% Gammons und 5% Backgammons hat, ist der Take-Point (0,20+2×0,05)/(1+0,20+2×0,05) = 0,30/1,30 ≈ 23%. Dies ist entscheidend für genaue Würfelentscheidungen in volatilen Positionen.",
          nl: "De Rockwell-Kazaross (RK) formule berekent de minimale winkansen die nodig zijn om een verdubbeling te accepteren wanneer gammons en backgammons mogelijk zijn: (G+2B)/(1+G+2B), waarbij G het gammon percentage van de tegenstander is en B het backgammon percentage. Bijvoorbeeld, als de tegenstander 20% gammons heeft en 5% backgammons, is je acceptatiepunt (0,20+2×0,05)/(1+0,20+2×0,05) = 0,30/1,30 ≈ 23%. Dit is cruciaal voor nauwkeurige dobbelsteenbeslissingen in volatiele posities."
        }
      },
      {
        question: {
          en: "What is the concept of 'volatility adjustment' in cube decisions?",
          es: "¿Qué es el concepto de 'ajuste de volatilidad' en decisiones del cubo?",
          de: "Was ist das Konzept der 'Volatilitätsanpassung' bei Würfelentscheidungen?",
          nl: "Wat is het concept van 'volatiliteitsaanpassing' in dobbelsteenbeslissingen?"
        },
        options: [
          { en: "Double earlier in high-variance positions", es: "Doblar antes en posiciones de alta varianza", de: "Früher verdoppeln in hochvariablen Positionen", nl: "Eerder verdubbelen in hoge-variantie posities" },
          { en: "Always wait for 70% equity", es: "Siempre esperar 70% de equity", de: "Immer auf 70% Equity warten", nl: "Altijd wachten op 70% equity" },
          { en: "Take more aggressively in volatile games", es: "Aceptar más agresivamente en juegos volátiles", de: "Aggressiver annehmen in volatilen Spielen", nl: "Agressiever accepteren in volatiele spellen" },
          { en: "Adjust for pip count variance", es: "Ajustar por varianza del conteo de pips", de: "Anpassen für Pip-Count-Varianz", nl: "Aanpassen voor pip count variantie" }
        ],
        correct: 0,
        explanation: {
          en: "Volatility adjustment means doubling earlier than pure equity suggests in positions where the game state can change dramatically on the next exchange. In highly volatile positions (many blots, contact, potential for big swings), you should double at lower equity (sometimes 60-65% instead of 68-70%) because you risk losing your market if you roll well. Conversely, in low-volatility positions (pure races, slow positions), you can wait for higher equity before doubling.",
          es: "El ajuste de volatilidad significa doblar antes de lo que sugiere la equity pura en posiciones donde el estado del juego puede cambiar drásticamente en el próximo intercambio. En posiciones altamente volátiles (muchos blots, contacto, potencial para grandes cambios), debes doblar con equity más baja (a veces 60-65% en lugar de 68-70%) porque arriesgas perder tu mercado si tiras bien. Por el contrario, en posiciones de baja volatilidad (carreras puras, posiciones lentas), puedes esperar mayor equity antes de doblar.",
          de: "Volatilitätsanpassung bedeutet, früher zu verdoppeln, als reine Equity nahelegt, in Positionen, in denen sich der Spielzustand beim nächsten Austausch dramatisch ändern kann. In hochvolatilen Positionen (viele Blots, Kontakt, Potenzial für große Schwankungen) sollte man bei niedrigerer Equity verdoppeln (manchmal 60-65% statt 68-70%), weil man riskiert, den Markt zu verlieren, wenn man gut würfelt. Umgekehrt kann man in niedrigvolatilen Positionen (reine Rennen, langsame Positionen) auf höhere Equity warten, bevor man verdoppelt.",
          nl: "Volatiliteitsaanpassing betekent eerder verdubbelen dan pure equity suggereert in posities waar de spelstatus dramatisch kan veranderen bij de volgende uitwisseling. In zeer volatiele posities (veel blots, contact, potentieel voor grote schommelingen), moet je verdubbelen bij lagere equity (soms 60-65% in plaats van 68-70%) omdat je riskeert je markt te verliezen als je goed gooit. Omgekeerd kun je in lage-volatiliteit posities (pure races, langzame posities) wachten op hogere equity voordat je verdubbelt."
        }
      },
      {
        question: {
          en: "What is 'cube leverage' in match play strategy?",
          es: "¿Qué es el 'apalancamiento del cubo' en la estrategia de match play?",
          de: "Was ist 'Würfel-Leverage' in der Match-Play-Strategie?",
          nl: "Wat is 'dobbelsteenhefboomwerking' in match play strategie?"
        },
        options: [
          { en: "Using cube earlier than opponent expects", es: "Usar el cubo antes de lo que el oponente espera", de: "Würfel früher verwenden als Gegner erwartet", nl: "Dobbelsteen eerder gebruiken dan tegenstander verwacht" },
          { en: "Redouble power advantage", es: "Ventaja del poder de redoblar", de: "Wiederverdopplungs-Machtvorteil", nl: "Herverdubbel krachtvoordeel" },
          { en: "Match score influence on cube equity", es: "Influencia de la puntuación del match en la equity del cubo", de: "Match-Stand-Einfluss auf Würfel-Equity", nl: "Match score invloed op dobbelsteenequity" },
          { en: "Physical cube positioning", es: "Posicionamiento físico del cubo", de: "Physische Würfelpositionierung", nl: "Fysieke dobbelsteenpositionering" }
        ],
        correct: 2,
        explanation: {
          en: "Cube leverage refers to how match score affects cube equity differently than money play. At certain scores, the cube becomes much more or less valuable due to the points needed to win the match. For example, at Crawford game, the trailing player has huge leverage with the cube because winning 2 or 4 points has the same match equity value (both win the match). Understanding cube leverage at different match scores is essential for world-class play.",
          es: "El apalancamiento del cubo se refiere a cómo la puntuación del match afecta la equity del cubo de manera diferente que en el juego por dinero. En ciertas puntuaciones, el cubo se vuelve mucho más o menos valioso debido a los puntos necesarios para ganar el match. Por ejemplo, en el juego Crawford, el jugador rezagado tiene un gran apalancamiento con el cubo porque ganar 2 o 4 puntos tiene el mismo valor de equity de match (ambos ganan el match). Entender el apalancamiento del cubo en diferentes puntuaciones de match es esencial para el juego de clase mundial.",
          de: "Würfel-Leverage bezieht sich darauf, wie der Match-Stand die Würfel-Equity anders beeinflusst als beim Geldspiel. Bei bestimmten Ständen wird der Würfel aufgrund der zum Match-Gewinn benötigten Punkte viel mehr oder weniger wertvoll. Zum Beispiel hat beim Crawford-Spiel der zurückliegende Spieler enormen Leverage mit dem Würfel, weil das Gewinnen von 2 oder 4 Punkten den gleichen Match-Equity-Wert hat (beide gewinnen das Match). Das Verständnis von Würfel-Leverage bei verschiedenen Match-Ständen ist für Weltklasse-Spiel unerlässlich.",
          nl: "Dobbelsteenhefboomwerking verwijst naar hoe match score dobbelsteenequity anders beïnvloedt dan geldspel. Bij bepaalde scores wordt de dobbelsteen veel meer of minder waardevol vanwege de punten die nodig zijn om de match te winnen. Bijvoorbeeld, bij Crawford spel heeft de achterblijvende speler enorme hefboomwerking met de dobbelsteen omdat het winnen van 2 of 4 punten dezelfde match equity waarde heeft (beide winnen de match). Het begrijpen van dobbelsteenhefboomwerking bij verschillende match scores is essentieel voor wereldklasse spel."
        }
      },
      {
        question: {
          en: "In reference position theory, what is a 'Thorp count' adjustment?",
          es: "En la teoría de posiciones de referencia, ¿qué es un ajuste de 'conteo de Thorp'?",
          de: "In der Referenzpositionstheorie, was ist eine 'Thorp-Count'-Anpassung?",
          nl: "In referentiepositie theorie, wat is een 'Thorp count' aanpassing?"
        },
        options: [
          { en: "Pip count for checker distribution", es: "Conteo de pips para distribución de fichas", de: "Pip-Count für Steinverteilung", nl: "Pip count voor steendistributie" },
          { en: "Wastage calculation in races", es: "Cálculo de desperdicio en carreras", de: "Verschwendungsberechnung in Rennen", nl: "Verspillingsberekening in races" },
          { en: "Crossover smoothness penalty", es: "Penalización por suavidad de cruce", de: "Crossover-Glattheitsstrafe", nl: "Kruispunt gladheidsstraf" },
          { en: "Match equity table correction", es: "Corrección de tabla de equity de match", de: "Match-Equity-Tabellen-Korrektur", nl: "Match equity tabel correctie" }
        ],
        correct: 1,
        explanation: {
          en: "The Thorp count (also called effective pip count or EPC) adjusts the raw pip count by subtracting wastage - pips that represent inefficient checker distribution. Wastage occurs when checkers are stacked on the same point rather than distributed smoothly. For each checker beyond the first on a point, subtract one pip. This gives a more accurate racing assessment than raw pip count. For example, 5 checkers on the 6-point represents 30 raw pips but only 26 effective pips (30 - 4 wastage).",
          es: "El conteo de Thorp (también llamado conteo efectivo de pips o EPC) ajusta el conteo bruto de pips restando el desperdicio: pips que representan una distribución ineficiente de fichas. El desperdicio ocurre cuando las fichas están apiladas en el mismo punto en lugar de distribuidas suavemente. Por cada ficha más allá de la primera en un punto, resta un pip. Esto da una evaluación de carrera más precisa que el conteo bruto de pips. Por ejemplo, 5 fichas en el punto 6 representan 30 pips brutos pero solo 26 pips efectivos (30 - 4 de desperdicio).",
          de: "Die Thorp-Zählung (auch effektiver Pip-Count oder EPC genannt) passt den rohen Pip-Count an, indem Verschwendung abgezogen wird - Pips, die eine ineffiziente Steinverteilung darstellen. Verschwendung tritt auf, wenn Steine auf demselben Punkt gestapelt sind, anstatt glatt verteilt zu sein. Für jeden Stein nach dem ersten auf einem Punkt wird ein Pip abgezogen. Dies gibt eine genauere Rennbewertung als der rohe Pip-Count. Zum Beispiel repräsentieren 5 Steine auf dem 6-Punkt 30 rohe Pips, aber nur 26 effektive Pips (30 - 4 Verschwendung).",
          nl: "De Thorp count (ook wel effectieve pip count of EPC genoemd) past de ruwe pip count aan door verspilling af te trekken - pips die inefficiënte steendistributie vertegenwoordigen. Verspilling treedt op wanneer stenen op hetzelfde punt gestapeld zijn in plaats van soepel verdeeld. Voor elke steen na de eerste op een punt, trek je één pip af. Dit geeft een nauwkeurigere race beoordeling dan ruwe pip count. Bijvoorbeeld, 5 stenen op het 6-punt vertegenwoordigen 30 ruwe pips maar slechts 26 effectieve pips (30 - 4 verspilling)."
        }
      },
      {
        question: {
          en: "What is the 'gammon-go' versus 'gammon-save' decision threshold in match play?",
          es: "¿Cuál es el umbral de decisión 'gammon-go' versus 'gammon-save' en match play?",
          de: "Was ist die Entscheidungsschwelle 'Gammon-Go' versus 'Gammon-Save' im Match-Spiel?",
          nl: "Wat is de 'gammon-go' versus 'gammon-save' beslissingsdrempel in match play?"
        },
        options: [
          { en: "Always save when <30% wins", es: "Siempre salvar cuando <30% de victorias", de: "Immer sichern bei <30% Siegen", nl: "Altijd redden bij <30% overwinningen" },
          { en: "Based on match equity table gammon values", es: "Basado en valores de gammon de la tabla de equity de match", de: "Basierend auf Match-Equity-Tabellen-Gammon-Werten", nl: "Gebaseerd op match equity tabel gammon waarden" },
          { en: "Go if winning more than twice gammon risk", es: "Ir si ganar es más del doble del riesgo de gammon", de: "Gehen, wenn Gewinnen mehr als doppeltes Gammon-Risiko ist", nl: "Gaan als winnen meer is dan dubbele gammon risico" },
          { en: "Never matters in money play", es: "Nunca importa en juego por dinero", de: "Spielt im Geldspiel nie eine Rolle", nl: "Maakt nooit uit in geldspel" }
        ],
        correct: 1,
        explanation: {
          en: "The gammon-go/gammon-save decision depends heavily on match score and the gammon price (from Neil's Number). At some scores, avoiding gammons is paramount (e.g., 2-away, 3-away where gammon loss ends the match). At other scores, playing normally for maximum wins is correct even with gammon risk. You must consult match equity tables to determine the gammon value at each score. For example, at 3-away, 2-away trailing, getting gammoned is catastrophic, so extreme gammon-saving is warranted.",
          es: "La decisión gammon-go/gammon-save depende en gran medida de la puntuación del match y del precio del gammon (del Número de Neil). En algunas puntuaciones, evitar gammons es primordial (por ejemplo, 2-away, 3-away donde la pérdida de gammon termina el match). En otras puntuaciones, jugar normalmente para máximas victorias es correcto incluso con riesgo de gammon. Debes consultar las tablas de equity de match para determinar el valor del gammon en cada puntuación. Por ejemplo, en 3-away, 2-away perdiendo, recibir un gammon es catastrófico, por lo que se justifica un ahorro extremo de gammon.",
          de: "Die Gammon-Go/Gammon-Save-Entscheidung hängt stark vom Match-Stand und dem Gammon-Preis (aus Neil's Number) ab. Bei einigen Ständen ist die Vermeidung von Gammons von größter Bedeutung (z.B. 2-away, 3-away, wo ein Gammon-Verlust das Match beendet). Bei anderen Ständen ist normales Spielen für maximale Siege korrekt, auch mit Gammon-Risiko. Man muss Match-Equity-Tabellen konsultieren, um den Gammon-Wert bei jedem Stand zu bestimmen. Zum Beispiel ist bei 3-away, 2-away zurückliegend ein Gammon zu bekommen katastrophal, daher ist extremes Gammon-Sichern gerechtfertigt.",
          nl: "De gammon-go/gammon-save beslissing hangt sterk af van match score en de gammon prijs (van Neil's getal). Bij sommige scores is het vermijden van gammons van het grootste belang (bijv. 2-away, 3-away waar gammon verlies de match beëindigt). Bij andere scores is normaal spelen voor maximale overwinningen correct, zelfs met gammon risico. Je moet match equity tabellen raadplegen om de gammon waarde bij elke score te bepalen. Bijvoorbeeld, bij 3-away, 2-away achterliggend, is een gammon krijgen catastrofaal, dus extreem gammon-redden is gerechtvaardigd."
        }
      },
      {
        question: {
          en: "What is the concept of 'recube vig' (vigorish) in cube ownership?",
          es: "¿Qué es el concepto de 'recube vig' (vigorish) en la propiedad del cubo?",
          de: "Was ist das Konzept des 'Recube-Vig' (Vigorish) beim Würfelbesitz?",
          nl: "Wat is het concept van 'recube vig' (vigorish) in dobbelsteenbezit?"
        },
        options: [
          { en: "Fee for using doubling cube", es: "Tarifa por usar el cubo de doblaje", de: "Gebühr für die Verwendung des Dopplerwürfels", nl: "Vergoeding voor het gebruik van de verdubbeldobbelsteen" },
          { en: "Value of owning redouble rights", es: "Valor de poseer derechos de redoble", de: "Wert des Besitzes von Wiederverdopplungsrechten", nl: "Waarde van het bezitten van herverdubbel rechten" },
          { en: "Penalty for accepting doubles", es: "Penalización por aceptar dobles", de: "Strafe für das Annehmen von Doubles", nl: "Straf voor het accepteren van verdubbeling" },
          { en: "Tournament entry tax", es: "Impuesto de entrada al torneo", de: "Turniereintrittsteuer", nl: "Toernooi inschrijvingsbelasting" }
        ],
        correct: 1,
        explanation: {
          en: "Recube vig (vigorish) is the equity value of owning the cube and having the exclusive right to redouble. When you accept a double, you gain cube ownership, which has significant value because you can redouble when the position turns. This value (typically 5-10% equity) means you can accept doubles at equity levels below the theoretical 25% take point. The vig is higher in volatile positions where lead changes are likely. Understanding recube vig is essential for optimal take/pass decisions.",
          es: "Recube vig (vigorish) es el valor de equity de poseer el cubo y tener el derecho exclusivo de redoblar. Cuando aceptas un doble, ganas la propiedad del cubo, que tiene un valor significativo porque puedes redoblar cuando la posición cambia. Este valor (típicamente 5-10% de equity) significa que puedes aceptar dobles en niveles de equity por debajo del punto de aceptación teórico del 25%. El vig es mayor en posiciones volátiles donde es probable que cambie el liderazgo. Entender el recube vig es esencial para decisiones óptimas de aceptar/pasar.",
          de: "Recube-Vig (Vigorish) ist der Equity-Wert des Würfelbesitzes und des exklusiven Rechts zur Wiederverdopplung. Wenn man eine Verdopplung annimmt, erhält man den Würfelbesitz, der einen erheblichen Wert hat, weil man wiederverdoppeln kann, wenn sich die Position wendet. Dieser Wert (typischerweise 5-10% Equity) bedeutet, dass man Verdopplungen bei Equity-Levels unterhalb des theoretischen 25%-Take-Points annehmen kann. Das Vig ist höher in volatilen Positionen, in denen Führungswechsel wahrscheinlich sind. Das Verständnis von Recube-Vig ist für optimale Take/Pass-Entscheidungen unerlässlich.",
          nl: "Recube vig (vigorish) is de equity waarde van het bezitten van de dobbelsteen en het exclusieve recht om te herverdubbelen. Wanneer je een verdubbeling accepteert, krijg je dobbelsteenbezit, wat aanzienlijke waarde heeft omdat je kunt herverdubbelen wanneer de positie verandert. Deze waarde (typisch 5-10% equity) betekent dat je verdubbeling kunt accepteren bij equity niveaus onder het theoretische 25% acceptatiepunt. De vig is hoger in volatiele posities waar leiderschapswisselingen waarschijnlijk zijn. Het begrijpen van recube vig is essentieel voor optimale accepteer/weiger beslissingen."
        }
      },
      {
        question: {
          en: "What is a 'Naccel' position in advanced backgammon theory?",
          es: "¿Qué es una posición 'Naccel' en la teoría avanzada del backgammon?",
          de: "Was ist eine 'Naccel'-Position in der fortgeschrittenen Backgammon-Theorie?",
          nl: "Wat is een 'Naccel' positie in geavanceerde backgammon theorie?"
        },
        options: [
          { en: "No acceleration - slow build position", es: "Sin aceleración - posición de construcción lenta", de: "Keine Beschleunigung - langsame Aufbauposition", nl: "Geen versnelling - langzame opbouwpositie" },
          { en: "Named opening variation", es: "Variación de apertura nombrada", de: "Benannte Eröffnungsvariante", nl: "Genoemde openingsvariatie" },
          { en: "North American championship format", es: "Formato de campeonato norteamericano", de: "Nordamerikanisches Meisterschaftsformat", nl: "Noord-Amerikaans kampioenschap formaat" },
          { en: "Neural network evaluation metric", es: "Métrica de evaluación de red neuronal", de: "Neuronale Netzwerk-Bewertungsmetrik", nl: "Neurale netwerk evaluatie metriek" }
        ],
        correct: 0,
        explanation: {
          en: "A Naccel (No Acceleration) position is one where cube action should be delayed because the position's equity will not change dramatically in the near term. Unlike volatile positions where you must double early to avoid losing your market, Naccel positions allow you to wait and gather more information before committing to cube action. These typically occur in slow, positional games where checker movement is restricted and immediate contact is limited. Recognizing Naccel positions prevents premature doubling.",
          es: "Una posición Naccel (Sin Aceleración) es aquella donde la acción del cubo debe retrasarse porque la equity de la posición no cambiará drásticamente a corto plazo. A diferencia de las posiciones volátiles donde debes doblar temprano para evitar perder tu mercado, las posiciones Naccel te permiten esperar y reunir más información antes de comprometerte con la acción del cubo. Estas típicamente ocurren en juegos lentos y posicionales donde el movimiento de las fichas está restringido y el contacto inmediato es limitado. Reconocer posiciones Naccel previene el doblaje prematuro.",
          de: "Eine Naccel-Position (Keine Beschleunigung) ist eine, bei der Würfelaktion verzögert werden sollte, weil sich die Equity der Position kurzfristig nicht dramatisch ändern wird. Im Gegensatz zu volatilen Positionen, bei denen man früh verdoppeln muss, um den Markt nicht zu verlieren, erlauben Naccel-Positionen zu warten und mehr Informationen zu sammeln, bevor man sich auf Würfelaktion festlegt. Diese treten typischerweise in langsamen, positionellen Spielen auf, bei denen die Steinbewegung eingeschränkt ist und sofortiger Kontakt begrenzt ist. Das Erkennen von Naccel-Positionen verhindert vorzeitiges Verdoppeln.",
          nl: "Een Naccel (Geen Versnelling) positie is een positie waarbij dobbelsteenactie moet worden uitgesteld omdat de equity van de positie niet dramatisch zal veranderen op korte termijn. In tegenstelling tot volatiele posities waar je vroeg moet verdubbelen om je markt niet te verliezen, stellen Naccel posities je in staat om te wachten en meer informatie te verzamelen voordat je je committeert aan dobbelsteenactie. Deze komen typisch voor in langzame, positionele spellen waar steenbeweging beperkt is en onmiddellijk contact beperkt is. Het herkennen van Naccel posities voorkomt voortijdige verdubbeling."
        }
      },
      {
        question: {
          en: "What is the 'Kleinman count' in backgammon racing calculations?",
          es: "¿Qué es el 'conteo de Kleinman' en los cálculos de carrera de backgammon?",
          de: "Was ist die 'Kleinman-Zählung' in Backgammon-Rennberechnungen?",
          nl: "Wat is de 'Kleinman count' in backgammon race berekeningen?"
        },
        options: [
          { en: "Advanced pip counting shortcut", es: "Atajo avanzado de conteo de pips", de: "Fortgeschrittene Pip-Count-Abkürzung", nl: "Geavanceerde pip telling snelkoppeling" },
          { en: "Number of rolls to bear off", es: "Número de tiradas para sacar", de: "Anzahl der Würfe zum Auswürfeln", nl: "Aantal worpen om uit te spelen" },
          { en: "Crossover adjustment method", es: "Método de ajuste de cruce", de: "Crossover-Anpassungsmethode", nl: "Kruispunt aanpassingsmethode" },
          { en: "Tournament rating calculation", es: "Cálculo de calificación de torneo", de: "Turnierwertungsberechnung", nl: "Toernooi rating berekening" }
        ],
        correct: 1,
        explanation: {
          en: "The Kleinman count calculates the minimum number of rolls needed to bear off all checkers from your home board, assuming optimal dice rolls and no wastage. The formula is: Number of rolls = (total checkers - highest occupied point) / 2 + crossovers. For example, with 15 checkers and the highest checker on the 6-point with 4 crossovers: (15 - 6) / 2 + 4 = 8.5, meaning 9 rolls minimum. This helps evaluate bearoff efficiency and timing decisions in pure racing situations.",
          es: "El conteo de Kleinman calcula el número mínimo de tiradas necesarias para sacar todas las fichas de tu tablero de casa, asumiendo tiradas de dados óptimas y sin desperdicio. La fórmula es: Número de tiradas = (fichas totales - punto más alto ocupado) / 2 + cruces. Por ejemplo, con 15 fichas y la ficha más alta en el punto 6 con 4 cruces: (15 - 6) / 2 + 4 = 8,5, lo que significa 9 tiradas mínimo. Esto ayuda a evaluar la eficiencia del bear-off y las decisiones de timing en situaciones de carrera pura.",
          de: "Die Kleinman-Zählung berechnet die minimale Anzahl von Würfen, die zum Auswürfeln aller Steine vom Heimfeld benötigt werden, unter Annahme optimaler Würfelwürfe und keiner Verschwendung. Die Formel lautet: Anzahl der Würfe = (Gesamtsteine - höchster besetzter Punkt) / 2 + Crossovers. Zum Beispiel bei 15 Steinen und dem höchsten Stein auf dem 6-Punkt mit 4 Crossovers: (15 - 6) / 2 + 4 = 8,5, was 9 Würfe Minimum bedeutet. Dies hilft bei der Bewertung der Auswürfel-Effizienz und Timing-Entscheidungen in reinen Rennsituationen.",
          nl: "De Kleinman count berekent het minimale aantal worpen dat nodig is om alle stenen uit te spelen van je thuisbord, uitgaande van optimale dobbelsteenworpen en geen verspilling. De formule is: Aantal worpen = (totaal stenen - hoogst bezette punt) / 2 + kruispunten. Bijvoorbeeld, met 15 stenen en de hoogste steen op het 6-punt met 4 kruispunten: (15 - 6) / 2 + 4 = 8,5, wat 9 worpen minimum betekent. Dit helpt bij het evalueren van uitspeel efficiëntie en timing beslissingen in pure race situaties."
        }
      },
      {
        question: {
          en: "What is 'holding game equity' in advanced position assessment?",
          es: "¿Qué es la 'equity del juego de retención' en la evaluación avanzada de posiciones?",
          de: "Was ist 'Holding-Game-Equity' in der fortgeschrittenen Positionsbewertung?",
          nl: "Wat is 'holding game equity' in geavanceerde positie beoordeling?"
        },
        options: [
          { en: "Value of maintaining defensive anchor", es: "Valor de mantener ancla defensiva", de: "Wert des Beibehaltens eines Verteidigungsankers", nl: "Waarde van behouden defensief anker" },
          { en: "Percentage of games won while holding", es: "Porcentaje de juegos ganados mientras se mantiene", de: "Prozentsatz der gewonnenen Spiele beim Halten", nl: "Percentage gewonnen spellen tijdens vasthouden" },
          { en: "Equity in mutual holding positions", es: "Equity en posiciones de retención mutua", de: "Equity in gegenseitigen Haltepositionen", nl: "Equity in wederzijdse houdposities" },
          { en: "Stock market backgammon betting", es: "Apuestas de backgammon del mercado de valores", de: "Börsen-Backgammon-Wetten", nl: "Aandelenmarkt backgammon wedden" }
        ],
        correct: 0,
        explanation: {
          en: "Holding game equity refers to the defensive value of maintaining an anchor (typically on the 4-point or 5-point) in your opponent's board while trailing in a race. This anchor provides shot opportunities if your opponent leaves a blot, and acts as a landing point for hit checkers. The equity value of a holding game depends on: timing (can you maintain the anchor until opponent must break), board strength (can you trap hit checkers), and racing chances if you get a shot. Strong players carefully evaluate when to maintain versus abandon holding game positions.",
          es: "La equity del juego de retención se refiere al valor defensivo de mantener un ancla (típicamente en el punto 4 o 5) en el tablero de tu oponente mientras estás atrás en una carrera. Esta ancla proporciona oportunidades de golpeo si tu oponente deja un blot, y actúa como punto de aterrizaje para fichas golpeadas. El valor de equity de un juego de retención depende de: timing (¿puedes mantener el ancla hasta que el oponente deba romper?), fuerza del tablero (¿puedes atrapar fichas golpeadas?) y posibilidades de carrera si obtienes un golpe. Los jugadores fuertes evalúan cuidadosamente cuándo mantener versus abandonar posiciones de juego de retención.",
          de: "Holding-Game-Equity bezieht sich auf den defensiven Wert des Beibehaltens eines Ankers (typischerweise auf dem 4- oder 5-Punkt) im Brett des Gegners, während man im Rennen zurückliegt. Dieser Anker bietet Schuss-Möglichkeiten, wenn der Gegner einen Blot hinterlässt, und dient als Landepunkt für geschlagene Steine. Der Equity-Wert eines Holding-Games hängt ab von: Timing (kann man den Anker halten, bis der Gegner aufbrechen muss), Board-Stärke (kann man geschlagene Steine einfangen) und Rennchancen, wenn man einen Schuss bekommt. Starke Spieler bewerten sorgfältig, wann Holding-Game-Positionen beizubehalten oder aufzugeben sind.",
          nl: "Holding game equity verwijst naar de defensieve waarde van het behouden van een anker (typisch op het 4-punt of 5-punt) in het bord van je tegenstander terwijl je achterligt in een race. Dit anker biedt schot kansen als je tegenstander een blot achterlaat, en dient als landingspunt voor gerakte stenen. De equity waarde van een holding game hangt af van: timing (kun je het anker behouden tot de tegenstander moet breken), bordsterkte (kun je gerakte stenen vangen) en race kansen als je een schot krijgt. Sterke spelers evalueren zorgvuldig wanneer ze holding game posities moeten behouden versus verlaten."
        }
      },
      {
        question: {
          en: "What is the 'Robertie formula' for blitz attack evaluation?",
          es: "¿Qué es la 'fórmula de Robertie' para la evaluación de ataque blitz?",
          de: "Was ist die 'Robertie-Formel' für Blitz-Angriffsbewertung?",
          nl: "Wat is de 'Robertie formule' voor blitz aanval evaluatie?"
        },
        options: [
          { en: "Points made × shots × timing = blitz value", es: "Puntos hechos × golpes × timing = valor de blitz", de: "Punkte gemacht × Schüsse × Timing = Blitz-Wert", nl: "Punten gemaakt × schoten × timing = blitz waarde" },
          { en: "Pip lead ÷ board strength", es: "Ventaja de pips ÷ fuerza del tablero", de: "Pip-Vorsprung ÷ Board-Stärke", nl: "Pip voorsprong ÷ bordsterkte" },
          { en: "Count checkers on bar × 10%", es: "Contar fichas en barra × 10%", de: "Steine auf Bar zählen × 10%", nl: "Tel stenen op bar × 10%" },
          { en: "Blot exposure risk calculation", es: "Cálculo de riesgo de exposición de blot", de: "Blot-Expositionsrisiko-Berechnung", nl: "Blot blootstellingsrisico berekening" }
        ],
        correct: 0,
        explanation: {
          en: "The Robertie formula evaluates blitz attack strength by multiplying three factors: points made (inner board strength), available shots (opponent checkers exposed), and timing (can you maintain the attack). A strong blitz has 3-4 inner points made, multiple opponent checkers vulnerable, and sufficient timing (not too far ahead in race) to maintain pressure. Named after Bill Robertie, this heuristic helps decide between pure blitz, attacking point strategy, or positional play when opponent has checkers back.",
          es: "La fórmula de Robertie evalúa la fuerza del ataque blitz multiplicando tres factores: puntos hechos (fuerza del tablero interior), golpes disponibles (fichas del oponente expuestas) y timing (¿puedes mantener el ataque?). Un blitz fuerte tiene 3-4 puntos interiores hechos, múltiples fichas del oponente vulnerables y suficiente timing (no muy adelante en la carrera) para mantener la presión. Nombrada en honor a Bill Robertie, esta heurística ayuda a decidir entre blitz puro, estrategia de punto de ataque o juego posicional cuando el oponente tiene fichas atrás.",
          de: "Die Robertie-Formel bewertet die Blitz-Angriffsstärke durch Multiplikation von drei Faktoren: gemachte Punkte (Innenbrett-Stärke), verfügbare Schüsse (exponierte gegnerische Steine) und Timing (kann man den Angriff aufrechterhalten). Ein starker Blitz hat 3-4 Innenpunkte gemacht, mehrere gegnerische Steine verwundbar und ausreichendes Timing (nicht zu weit vorne im Rennen), um Druck aufrechtzuerhalten. Nach Bill Robertie benannt, hilft diese Heuristik bei der Entscheidung zwischen reinem Blitz, Angriffspunkt-Strategie oder positionellem Spiel, wenn der Gegner Steine hinten hat.",
          nl: "De Robertie formule evalueert blitz aanvalskracht door drie factoren te vermenigvuldigen: gemaakte punten (binnenste bord sterkte), beschikbare schoten (tegenstander stenen blootgesteld) en timing (kun je de aanval volhouden). Een sterke blitz heeft 3-4 binnenste punten gemaakt, meerdere kwetsbare tegenstander stenen en voldoende timing (niet te ver vooruit in race) om druk te behouden. Vernoemd naar Bill Robertie, helpt deze heuristiek bij het beslissen tussen pure blitz, aanvalspunt strategie of positioneel spel wanneer de tegenstander stenen achter heeft."
        }
      },
      {
        question: {
          en: "What is a 'phantom double' in tournament strategy?",
          es: "¿Qué es un 'doble fantasma' en la estrategia de torneo?",
          de: "Was ist ein 'Phantom-Double' in der Turnierstrategie?",
          nl: "Wat is een 'fantoom verdubbeling' in toernooi strategie?"
        },
        options: [
          { en: "Illegal double not noticed", es: "Doble ilegal no notado", de: "Illegale Verdopplung nicht bemerkt", nl: "Illegale verdubbeling niet opgemerkt" },
          { en: "Psychological fake double gesture", es: "Gesto psicológico de doble falso", de: "Psychologische falsche Doppelgeste", nl: "Psychologisch nep verdubbel gebaar" },
          { en: "Not doubling to avoid cube-induced errors", es: "No doblar para evitar errores inducidos por el cubo", de: "Nicht verdoppeln, um würfelbedingte Fehler zu vermeiden", nl: "Niet verdubbelen om dobbelsteeninduceerde fouten te voorkomen" },
          { en: "Double offered but withdrawn", es: "Doble ofrecido pero retirado", de: "Double angeboten aber zurückgezogen", nl: "Verdubbeling aangeboden maar ingetrokken" }
        ],
        correct: 2,
        explanation: {
          en: "A phantom double refers to deliberately NOT doubling in a position where you theoretically should, because doubling would increase your opponent's concentration and reduce their error rate. This advanced psychological concept suggests that in some positions against weaker players, you're better off not doubling and hoping they make checker play errors, rather than doubling and sharpening their focus. While controversial and rarely applicable at the highest levels, it can be relevant in certain tournament situations where your opponent's skill disadvantage is your main edge.",
          es: "Un doble fantasma se refiere a deliberadamente NO doblar en una posición donde teóricamente deberías, porque doblar aumentaría la concentración de tu oponente y reduciría su tasa de error. Este concepto psicológico avanzado sugiere que en algunas posiciones contra jugadores más débiles, es mejor no doblar y esperar que cometan errores en el juego de fichas, en lugar de doblar y agudizar su enfoque. Aunque controvertido y rara vez aplicable en los niveles más altos, puede ser relevante en ciertas situaciones de torneo donde la desventaja de habilidad de tu oponente es tu principal ventaja.",
          de: "Ein Phantom-Double bezieht sich darauf, in einer Position, in der man theoretisch verdoppeln sollte, absichtlich NICHT zu verdoppeln, weil Verdoppeln die Konzentration des Gegners erhöhen und dessen Fehlerrate reduzieren würde. Dieses fortgeschrittene psychologische Konzept legt nahe, dass man in einigen Positionen gegen schwächere Spieler besser dran ist, nicht zu verdoppeln und zu hoffen, dass sie Checker-Play-Fehler machen, anstatt zu verdoppeln und ihren Fokus zu schärfen. Obwohl kontrovers und auf höchstem Niveau selten anwendbar, kann es in bestimmten Turniersituationen relevant sein, in denen der Skill-Nachteil des Gegners der Hauptvorteil ist.",
          nl: "Een fantoom verdubbeling verwijst naar opzettelijk NIET verdubbelen in een positie waar je theoretisch zou moeten, omdat verdubbelen de concentratie van je tegenstander zou verhogen en hun foutpercentage zou verminderen. Dit geavanceerde psychologische concept suggereert dat je in sommige posities tegen zwakkere spelers beter af bent door niet te verdubbelen en te hopen dat ze checker play fouten maken, in plaats van verdubbelen en hun focus aan te scherpen. Hoewel controversieel en zelden toepasbaar op het hoogste niveau, kan het relevant zijn in bepaalde toernooi situaties waar het vaardigheidsnacheel van je tegenstander je belangrijkste voordeel is."
        }
      }
    ]
  };

  // Export for use in the quiz application
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level10;
  } else if (typeof window !== 'undefined') {
    window.level10 = level10;
  }
})();
