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
      },
      {
        question: {
          en: "What is 'PropCount' in modern backgammon analysis?",
          es: "¿Qué es 'PropCount' en el análisis moderno del backgammon?",
          de: "Was ist 'PropCount' in der modernen Backgammon-Analyse?",
          nl: "Wat is 'PropCount' in moderne backgammon analyse?"
        },
        options: [
          { en: "Proportion of gammon wins to total wins", es: "Proporción de victorias gammon sobre victorias totales", de: "Verhältnis von Gammon-Siegen zu Gesamtsiegen", nl: "Verhouding van gammon overwinningen tot totale overwinningen" },
          { en: "Proprietary pip count algorithm", es: "Algoritmo de conteo de pips propietario", de: "Proprietärer Pip-Count-Algorithmus", nl: "Eigen pip count algoritme" },
          { en: "Tournament performance metric", es: "Métrica de rendimiento de torneo", de: "Turnier-Leistungsmetrik", nl: "Toernooi prestatiemeting" },
          { en: "Percentage of proper cube decisions", es: "Porcentaje de decisiones correctas del cubo", de: "Prozentsatz korrekter Würfelentscheidungen", nl: "Percentage juiste dobbelsteenbeslissingen" }
        ],
        correct: 0,
        explanation: {
          en: "PropCount (Proportion Count) measures the ratio of gammon wins to total wins in a position. It's calculated as: gammons/(wins + gammons). This metric is critical for cube decisions because high PropCount positions (>50%) mean gammons are frequent when you win, which drastically changes take points and double points. For example, a position with 70% wins and 40% gammons has PropCount = 40/(70+40) = 36%. Understanding PropCount helps evaluate cube action in complex tactical positions.",
          es: "PropCount (Conteo de Proporción) mide la relación de victorias gammon sobre victorias totales en una posición. Se calcula como: gammons/(victorias + gammons). Esta métrica es crítica para las decisiones del cubo porque posiciones con PropCount alto (>50%) significan que los gammons son frecuentes cuando ganas, lo que cambia drásticamente los puntos de aceptación y puntos de doble. Por ejemplo, una posición con 70% de victorias y 40% de gammons tiene PropCount = 40/(70+40) = 36%. Entender PropCount ayuda a evaluar la acción del cubo en posiciones tácticas complejas.",
          de: "PropCount (Proportionszählung) misst das Verhältnis von Gammon-Siegen zu Gesamtsiegen in einer Position. Es wird berechnet als: Gammons/(Siege + Gammons). Diese Metrik ist kritisch für Würfelentscheidungen, weil Positionen mit hohem PropCount (>50%) bedeuten, dass Gammons häufig sind, wenn man gewinnt, was Take-Points und Double-Points drastisch ändert. Zum Beispiel hat eine Position mit 70% Siegen und 40% Gammons PropCount = 40/(70+40) = 36%. Das Verständnis von PropCount hilft bei der Bewertung von Würfelaktionen in komplexen taktischen Positionen.",
          nl: "PropCount (Proportie Count) meet de verhouding van gammon overwinningen tot totale overwinningen in een positie. Het wordt berekend als: gammons/(overwinningen + gammons). Deze metriek is cruciaal voor dobbelsteenbeslissingen omdat hoge PropCount posities (>50%) betekenen dat gammons frequent zijn wanneer je wint, wat acceptatiepunten en verdubbelpunten drastisch verandert. Bijvoorbeeld, een positie met 70% overwinningen en 40% gammons heeft PropCount = 40/(70+40) = 36%. Het begrijpen van PropCount helpt bij het evalueren van dobbelsteenactie in complexe tactische posities."
        }
      },
      {
        question: {
          en: "What is the 'symmetric position' fallacy in cube theory?",
          es: "¿Qué es la falacia de 'posición simétrica' en la teoría del cubo?",
          de: "Was ist der 'symmetrische Positions'-Trugschluss in der Würfeltheorie?",
          nl: "Wat is de 'symmetrische positie' drogreden in dobbelsteentheorie?"
        },
        options: [
          { en: "Symmetric positions always have 50/50 equity", es: "Las posiciones simétricas siempre tienen equity 50/50", de: "Symmetrische Positionen haben immer 50/50 Equity", nl: "Symmetrische posities hebben altijd 50/50 equity" },
          { en: "Cube ownership breaks symmetry - leader should double", es: "La propiedad del cubo rompe la simetría - el líder debe doblar", de: "Würfelbesitz bricht Symmetrie - Führer sollte verdoppeln", nl: "Dobbelsteenbezit breekt symmetrie - leider moet verdubbelen" },
          { en: "Equal pip counts mean equal chances", es: "Conteos de pips iguales significan chances iguales", de: "Gleiche Pip-Counts bedeuten gleiche Chancen", nl: "Gelijke pip counts betekenen gelijke kansen" },
          { en: "Both players should pass all doubles", es: "Ambos jugadores deberían pasar todos los dobles", de: "Beide Spieler sollten alle Doubles passen", nl: "Beide spelers moeten alle verdubbeling weigeren" }
        ],
        correct: 1,
        explanation: {
          en: "The symmetric position fallacy is the mistaken belief that in perfectly symmetric positions, neither player should double. In reality, whoever owns the cube in a symmetric position (50/50 equity) should redouble immediately in money games, because cube ownership has value and they can force a dead cube by doubling. The opponent should take, creating a dead 4-cube. This counterintuitive principle shows that cube ownership itself has equity value even in equal positions. In match play, this principle varies based on score.",
          es: "La falacia de posición simétrica es la creencia errónea de que en posiciones perfectamente simétricas, ningún jugador debería doblar. En realidad, quien posea el cubo en una posición simétrica (equity 50/50) debería redoblar inmediatamente en juegos por dinero, porque la propiedad del cubo tiene valor y pueden forzar un cubo muerto al doblar. El oponente debería aceptar, creando un cubo muerto de 4. Este principio contraintuitivo muestra que la propiedad del cubo en sí tiene valor de equity incluso en posiciones iguales. En match play, este principio varía según la puntuación.",
          de: "Der symmetrische Positions-Trugschluss ist der irrtümliche Glaube, dass in perfekt symmetrischen Positionen kein Spieler verdoppeln sollte. In Wirklichkeit sollte derjenige, der den Würfel in einer symmetrischen Position (50/50 Equity) besitzt, in Geldspielen sofort wiederverdoppeln, weil Würfelbesitz Wert hat und man einen toten Würfel erzwingen kann. Der Gegner sollte annehmen und einen toten 4-Würfel schaffen. Dieses kontraintuitive Prinzip zeigt, dass Würfelbesitz selbst Equity-Wert hat, auch in gleichen Positionen. Im Match-Spiel variiert dieses Prinzip je nach Stand.",
          nl: "De symmetrische positie drogreden is de onjuiste overtuiging dat in perfect symmetrische posities, geen van beide spelers moet verdubbelen. In werkelijkheid moet degene die de dobbelsteen bezit in een symmetrische positie (50/50 equity) onmiddellijk herverdubbelen in geldspellen, omdat dobbelsteenbezit waarde heeft en ze een dode dobbelsteen kunnen forceren door te verdubbelen. De tegenstander moet accepteren, wat een dode 4-dobbelsteen creëert. Dit contra-intuïtieve principe toont dat dobbelsteenbezit zelf equity waarde heeft, zelfs in gelijke posities. In match play varieert dit principe op basis van score."
        }
      },
      {
        question: {
          en: "What is the 'last roll position' concept in bearoff analysis?",
          es: "¿Qué es el concepto de 'posición de última tirada' en el análisis del bear-off?",
          de: "Was ist das Konzept der 'letzten Wurf-Position' in der Bearoff-Analyse?",
          nl: "Wat is het 'laatste worp positie' concept in uitspeel analyse?"
        },
        options: [
          { en: "Position where one roll wins or loses", es: "Posición donde una tirada gana o pierde", de: "Position, wo ein Wurf gewinnt oder verliert", nl: "Positie waar één worp wint of verliest" },
          { en: "Final checker to bear off", es: "Ficha final para sacar", de: "Letzter Stein zum Auswürfeln", nl: "Laatste steen om uit te spelen" },
          { en: "Calculating outs in contact-less race", es: "Calcular salidas en carrera sin contacto", de: "Berechnung von Outs im kontaktlosen Rennen", nl: "Berekenen van outs in contactloze race" },
          { en: "Position after opponent's last move", es: "Posición después del último movimiento del oponente", de: "Position nach dem letzten Zug des Gegners", nl: "Positie na laatste zet van tegenstander" }
        ],
        correct: 0,
        explanation: {
          en: "A last roll position is one where the outcome will be determined by the very next roll - you either bear off your last checkers and win, or fail and lose. These positions require precise calculation of 'outs' (winning numbers) versus 'failures' (losing numbers). For example, with 2 checkers left on the 3-point and 5-point, you have 20/36 winning rolls (any combination totaling 8+). Last roll positions are critical for cube decisions in bearoff races, as you can precisely calculate equity rather than estimating.",
          es: "Una posición de última tirada es aquella donde el resultado será determinado por la próxima tirada: o sacas tus últimas fichas y ganas, o fallas y pierdes. Estas posiciones requieren cálculo preciso de 'salidas' (números ganadores) versus 'fallos' (números perdedores). Por ejemplo, con 2 fichas restantes en el punto 3 y punto 5, tienes 20/36 tiradas ganadoras (cualquier combinación que totalice 8+). Las posiciones de última tirada son críticas para decisiones del cubo en carreras de bear-off, ya que puedes calcular equity con precisión en lugar de estimar.",
          de: "Eine letzte Wurf-Position ist eine, bei der das Ergebnis durch den allernächsten Wurf bestimmt wird - man würfelt entweder die letzten Steine aus und gewinnt, oder scheitert und verliert. Diese Positionen erfordern präzise Berechnung von 'Outs' (Gewinnzahlen) versus 'Fehlschlägen' (Verlustzahlen). Zum Beispiel hat man mit 2 Steinen auf dem 3-Punkt und 5-Punkt 20/36 Gewinnwürfe (jede Kombination mit Summe 8+). Letzte Wurf-Positionen sind kritisch für Würfelentscheidungen in Bearoff-Rennen, da man Equity präzise berechnen kann, anstatt zu schätzen.",
          nl: "Een laatste worp positie is een positie waar de uitkomst wordt bepaald door de allervolgende worp - je speelt je laatste stenen uit en wint, of faalt en verliest. Deze posities vereisen precieze berekening van 'outs' (winnende getallen) versus 'mislukkingen' (verliezende getallen). Bijvoorbeeld, met 2 stenen over op het 3-punt en 5-punt, heb je 20/36 winnende worpen (elke combinatie die optelt tot 8+). Laatste worp posities zijn cruciaal voor dobbelsteenbeslissingen in uitspeel races, omdat je equity precies kunt berekenen in plaats van schatten."
        }
      },
      {
        question: {
          en: "What is 'pip wastage' versus 'positional wastage' in racing evaluation?",
          es: "¿Qué es el 'desperdicio de pips' versus 'desperdicio posicional' en la evaluación de carreras?",
          de: "Was ist 'Pip-Verschwendung' versus 'Positions-Verschwendung' in der Rennbewertung?",
          nl: "Wat is 'pip verspilling' versus 'positionele verspilling' in race evaluatie?"
        },
        options: [
          { en: "Stacked checkers vs poor distribution", es: "Fichas apiladas vs mala distribución", de: "Gestapelte Steine vs. schlechte Verteilung", nl: "Gestapelde stenen vs slechte distributie" },
          { en: "Raw pips vs effective pips", es: "Pips brutos vs pips efectivos", de: "Rohe Pips vs. effektive Pips", nl: "Ruwe pips vs effectieve pips" },
          { en: "Crossovers vs checker stacking", es: "Cruces vs apilamiento de fichas", de: "Crossovers vs. Steinstapelung", nl: "Kruispunten vs steen stapeling" },
          { en: "Time lost vs space wasted", es: "Tiempo perdido vs espacio desperdiciado", de: "Verlorene Zeit vs. verschwendeter Raum", nl: "Verloren tijd vs verspilde ruimte" }
        ],
        correct: 0,
        explanation: {
          en: "Pip wastage refers to inefficiency from stacked checkers - having multiple checkers on the same point wastes pips because only one can bear off per die number. Positional wastage refers to poor distribution requiring extra crossovers - checkers distributed unevenly across points require more moves to bear off smoothly. A position with 5 checkers on the 6-point has high pip wastage (4 wasted pips). A position with all checkers on the 6-point and 1-point has high positional wastage (gaps force inefficient moves). Elite players optimize both to minimize total wastage.",
          es: "El desperdicio de pips se refiere a la ineficiencia de las fichas apiladas: tener múltiples fichas en el mismo punto desperdicia pips porque solo una puede sacarse por número de dado. El desperdicio posicional se refiere a la mala distribución que requiere cruces extra: fichas distribuidas de manera desigual entre puntos requieren más movimientos para sacar suavemente. Una posición con 5 fichas en el punto 6 tiene alto desperdicio de pips (4 pips desperdiciados). Una posición con todas las fichas en el punto 6 y punto 1 tiene alto desperdicio posicional (los huecos fuerzan movimientos ineficientes). Los jugadores élite optimizan ambos para minimizar el desperdicio total.",
          de: "Pip-Verschwendung bezieht sich auf Ineffizienz durch gestapelte Steine - mehrere Steine auf demselben Punkt verschwenden Pips, weil nur einer pro Würfelzahl ausgewürfelt werden kann. Positions-Verschwendung bezieht sich auf schlechte Verteilung, die zusätzliche Crossovers erfordert - ungleichmäßig verteilte Steine benötigen mehr Züge zum glatten Auswürfeln. Eine Position mit 5 Steinen auf dem 6-Punkt hat hohe Pip-Verschwendung (4 verschwendete Pips). Eine Position mit allen Steinen auf dem 6-Punkt und 1-Punkt hat hohe Positions-Verschwendung (Lücken erzwingen ineffiziente Züge). Elite-Spieler optimieren beide, um die Gesamtverschwendung zu minimieren.",
          nl: "Pip verspilling verwijst naar inefficiëntie van gestapelde stenen - meerdere stenen op hetzelfde punt verspillen pips omdat er maar één per dobbelsteengetal uit kan spelen. Positionele verspilling verwijst naar slechte distributie die extra kruispunten vereist - stenen die ongelijk verdeeld zijn over punten vereisen meer zetten om soepel uit te spelen. Een positie met 5 stenen op het 6-punt heeft hoge pip verspilling (4 verspilde pips). Een positie met alle stenen op het 6-punt en 1-punt heeft hoge positionele verspilling (gaten forceren inefficiënte zetten). Elite spelers optimaliseren beide om totale verspilling te minimaliseren."
        }
      },
      {
        question: {
          en: "What is the 'Magriel safe-bold criterion' for checker play decisions?",
          es: "¿Qué es el 'criterio de seguridad-audacia de Magriel' para decisiones de juego de fichas?",
          de: "Was ist das 'Magriel Sicher-Mutig-Kriterium' für Checker-Play-Entscheidungen?",
          nl: "Wat is het 'Magriel veilig-gedurfd criterium' voor checker play beslissingen?"
        },
        options: [
          { en: "Play safe when leading, bold when trailing", es: "Jugar seguro cuando lideras, audaz cuando vas atrás", de: "Sicher spielen beim Führen, mutig beim Zurückliegen", nl: "Speel veilig bij leiden, gedurfd bij achterstaan" },
          { en: "Always maximize winning chances", es: "Siempre maximizar chances de ganar", de: "Immer Gewinnchancen maximieren", nl: "Altijd winkansen maximaliseren" },
          { en: "Bold in money, safe in matches", es: "Audaz en dinero, seguro en matches", de: "Mutig im Geldspiel, sicher in Matches", nl: "Gedurfd in geldspel, veilig in matches" },
          { en: "Minimize gammon risk always", es: "Minimizar riesgo de gammon siempre", de: "Gammon-Risiko immer minimieren", nl: "Minimaliseer gammon risico altijd" }
        ],
        correct: 0,
        explanation: {
          en: "The Magriel safe-bold criterion, proposed by Paul Magriel, states that when leading in a race, you should play safe (avoid leaving shots, play solid) because you can win by simply bringing checkers home safely. When trailing, you should play bold (take calculated risks, hit loose, create complications) because playing safe will likely lead to a loss anyway. This principle applies primarily in racing and holding game positions. Modern analysis shows this is generally correct, though gammon considerations and cube ownership can modify the optimal strategy.",
          es: "El criterio de seguridad-audacia de Magriel, propuesto por Paul Magriel, establece que cuando lideras en una carrera, debes jugar seguro (evitar dejar golpes, jugar sólido) porque puedes ganar simplemente trayendo fichas a casa de manera segura. Cuando vas atrás, debes jugar audaz (tomar riesgos calculados, golpear suelto, crear complicaciones) porque jugar seguro probablemente conducirá a una pérdida de todos modos. Este principio se aplica principalmente en carreras y posiciones de juego de retención. El análisis moderno muestra que esto es generalmente correcto, aunque las consideraciones de gammon y la propiedad del cubo pueden modificar la estrategia óptima.",
          de: "Das Magriel Sicher-Mutig-Kriterium, vorgeschlagen von Paul Magriel, besagt, dass man beim Führen in einem Rennen sicher spielen sollte (Schüsse vermeiden, solide spielen), weil man gewinnen kann, indem man einfach Steine sicher nach Hause bringt. Beim Zurückliegen sollte man mutig spielen (kalkulierte Risiken eingehen, lose schlagen, Komplikationen schaffen), weil sicheres Spielen wahrscheinlich sowieso zu einer Niederlage führt. Dieses Prinzip gilt hauptsächlich in Renn- und Holding-Game-Positionen. Moderne Analysen zeigen, dass dies im Allgemeinen korrekt ist, obwohl Gammon-Überlegungen und Würfelbesitz die optimale Strategie modifizieren können.",
          nl: "Het Magriel veilig-gedurfd criterium, voorgesteld door Paul Magriel, stelt dat wanneer je leidt in een race, je veilig moet spelen (vermijd schoten, speel solide) omdat je kunt winnen door gewoon stenen veilig naar huis te brengen. Wanneer je achterligt, moet je gedurfd spelen (neem berekende risico's, raak los, creëer complicaties) omdat veilig spelen waarschijnlijk toch tot verlies zal leiden. Dit principe geldt voornamelijk in race en holding game posities. Moderne analyse toont dat dit over het algemeen correct is, hoewel gammon overwegingen en dobbelsteenbezit de optimale strategie kunnen wijzigen."
        }
      },
      {
        question: {
          en: "What is a 'joker' in backgammon terminology?",
          es: "¿Qué es un 'joker' en la terminología del backgammon?",
          de: "Was ist ein 'Joker' in der Backgammon-Terminologie?",
          nl: "Wat is een 'joker' in backgammon terminologie?"
        },
        options: [
          { en: "Wild card doubling opportunity", es: "Oportunidad de doblaje comodín", de: "Wildcard-Verdopplungsmöglichkeit", nl: "Wildcard verdubbel kans" },
          { en: "Extremely lucky roll that wins unexpectedly", es: "Tirada extremadamente afortunada que gana inesperadamente", de: "Extrem glücklicher Wurf, der unerwartet gewinnt", nl: "Extreem gelukkige worp die onverwacht wint" },
          { en: "Opponent's blunder creating winning chance", es: "Error del oponente que crea oportunidad ganadora", de: "Fehler des Gegners, der Gewinnchance schafft", nl: "Blunder van tegenstander die winkans creëert" },
          { en: "Illegal move not caught by opponent", es: "Movimiento ilegal no detectado por el oponente", de: "Illegaler Zug, der vom Gegner nicht erkannt wurde", nl: "Illegale zet niet gezien door tegenstander" }
        ],
        correct: 1,
        explanation: {
          en: "A joker is a very lucky roll that dramatically changes the outcome of a game - typically turning a losing position into a winning one through exceptional luck. For example, rolling the exact double needed to escape from a prime, or hitting a miracle shot on the last possible turn. The term comes from card games where a joker can substitute for any card. In cube decisions, you must account for potential jokers when evaluating volatile positions - sometimes you should double before the opponent gets their joker roll.",
          es: "Un joker es una tirada muy afortunada que cambia dramáticamente el resultado de un juego, típicamente convirtiendo una posición perdedora en una ganadora a través de suerte excepcional. Por ejemplo, sacar el doble exacto necesario para escapar de una prime, o golpear un tiro milagroso en el último turno posible. El término proviene de los juegos de cartas donde un joker puede sustituir cualquier carta. En decisiones del cubo, debes tener en cuenta los jokers potenciales al evaluar posiciones volátiles: a veces debes doblar antes de que el oponente obtenga su tirada joker.",
          de: "Ein Joker ist ein sehr glücklicher Wurf, der das Ergebnis eines Spiels dramatisch ändert - typischerweise eine Verlustposition durch außergewöhnliches Glück in eine Gewinnposition verwandelt. Zum Beispiel genau das Doppel zu würfeln, das zum Entkommen aus einer Prime benötigt wird, oder einen Wunderschuss im letzten möglichen Zug zu treffen. Der Begriff kommt von Kartenspielen, wo ein Joker jede Karte ersetzen kann. Bei Würfelentscheidungen muss man potenzielle Joker bei der Bewertung volatiler Positionen berücksichtigen - manchmal sollte man verdoppeln, bevor der Gegner seinen Joker-Wurf bekommt.",
          nl: "Een joker is een zeer gelukkige worp die de uitkomst van een spel dramatisch verandert - typisch een verliezende positie in een winnende verandert door uitzonderlijk geluk. Bijvoorbeeld, precies het dubbel gooien dat nodig is om te ontsnappen uit een prime, of een wonderschot raken op de laatst mogelijke beurt. De term komt van kaartspellen waar een joker voor elke kaart kan vervangen. In dobbelsteenbeslissingen moet je rekening houden met potentiële jokers bij het evalueren van volatiele posities - soms moet je verdubbelen voordat de tegenstander hun joker worp krijgt."
        }
      },
      {
        question: {
          en: "What is 'contact equity' versus 'racing equity' in position evaluation?",
          es: "¿Qué es la 'equity de contacto' versus 'equity de carrera' en la evaluación de posiciones?",
          de: "Was ist 'Kontakt-Equity' versus 'Renn-Equity' in der Positionsbewertung?",
          nl: "Wat is 'contact equity' versus 'race equity' in positie evaluatie?"
        },
        options: [
          { en: "Equity from hitting vs equity from pure race", es: "Equity de golpear vs equity de carrera pura", de: "Equity vom Schlagen vs. Equity vom reinen Rennen", nl: "Equity van raken vs equity van pure race" },
          { en: "Checker touching vs separated", es: "Fichas tocándose vs separadas", de: "Steine sich berührend vs. getrennt", nl: "Stenen rakend vs gescheiden" },
          { en: "Physical contact required to win", es: "Contacto físico requerido para ganar", de: "Physischer Kontakt erforderlich zum Gewinnen", nl: "Fysiek contact vereist om te winnen" },
          { en: "Gammon equity vs single game equity", es: "Equity de gammon vs equity de juego simple", de: "Gammon-Equity vs. Einzelspiel-Equity", nl: "Gammon equity vs enkel spel equity" }
        ],
        correct: 0,
        explanation: {
          en: "Contact equity is the equity derived from potential hitting opportunities - the value of your position if you hit opponent's blots. Racing equity is the equity from simply outrunning your opponent with no further contact. In complex positions, total equity = contact equity + racing equity. For example, in a holding game, you have minimal racing equity (you're behind in pips) but significant contact equity (you have an anchor and can hit if opponent breaks). Understanding this split helps evaluate whether to play for contact or try to avoid it.",
          es: "La equity de contacto es la equity derivada de oportunidades potenciales de golpeo: el valor de tu posición si golpeas blots del oponente. La equity de carrera es la equity de simplemente superar a tu oponente sin más contacto. En posiciones complejas, equity total = equity de contacto + equity de carrera. Por ejemplo, en un juego de retención, tienes equity de carrera mínima (estás atrás en pips) pero equity de contacto significativa (tienes un ancla y puedes golpear si el oponente rompe). Entender esta división ayuda a evaluar si jugar para contacto o intentar evitarlo.",
          de: "Kontakt-Equity ist die Equity aus potenziellen Schlag-Möglichkeiten - der Wert deiner Position, wenn du Blots des Gegners schlägst. Renn-Equity ist die Equity, den Gegner einfach zu überholen, ohne weiteren Kontakt. In komplexen Positionen gilt: Gesamt-Equity = Kontakt-Equity + Renn-Equity. Zum Beispiel hat man in einem Holding-Game minimale Renn-Equity (man liegt bei Pips zurück), aber signifikante Kontakt-Equity (man hat einen Anker und kann schlagen, wenn der Gegner aufbricht). Das Verständnis dieser Aufteilung hilft zu bewerten, ob man auf Kontakt spielen oder ihn vermeiden sollte.",
          nl: "Contact equity is de equity afgeleid van potentiële raakkansen - de waarde van je positie als je blots van de tegenstander raakt. Race equity is de equity van simpelweg je tegenstander voorbij rennen zonder verder contact. In complexe posities geldt: totale equity = contact equity + race equity. Bijvoorbeeld, in een holding game heb je minimale race equity (je ligt achter in pips) maar aanzienlijke contact equity (je hebt een anker en kunt raken als tegenstander breekt). Het begrijpen van deze splitsing helpt evalueren of je voor contact moet spelen of het moet vermijden."
        }
      },
      {
        question: {
          en: "What is the 'match winning chance' (MWC) calculation method?",
          es: "¿Qué es el método de cálculo de 'probabilidad de ganar el match' (MWC)?",
          de: "Was ist die Berechnungsmethode für 'Match-Gewinnchance' (MWC)?",
          nl: "Wat is de 'match winkans' (MWC) berekeningsmethode?"
        },
        options: [
          { en: "Adding all possible game outcomes weighted by probability", es: "Sumar todos los resultados posibles ponderados por probabilidad", de: "Alle möglichen Spielausgänge gewichtet nach Wahrscheinlichkeit addieren", nl: "Alle mogelijke speluitkomsten optellen gewogen naar waarschijnlijkheid" },
          { en: "50% + (equity × match score adjustment)", es: "50% + (equity × ajuste de puntuación del match)", de: "50% + (Equity × Match-Stand-Anpassung)", nl: "50% + (equity × match score aanpassing)" },
          { en: "Win% - gammon% + backgammon%", es: "Win% - gammon% + backgammon%", de: "Gewinn% - Gammon% + Backgammon%", nl: "Win% - gammon% + backgammon%" },
          { en: "Current score ÷ match length", es: "Puntuación actual ÷ longitud del match", de: "Aktueller Stand ÷ Match-Länge", nl: "Huidige score ÷ match lengte" }
        ],
        correct: 0,
        explanation: {
          en: "MWC is calculated by summing all possible game outcomes (win, win gammon, win backgammon, lose, lose gammon, lose backgammon) weighted by their probabilities and the resulting match equity. Formula: MWC = (P(W)×MET(win) + P(WG)×MET(win+gammon) + P(WB)×MET(win+bg) + P(L)×MET(lose) + P(LG)×MET(lose+gammon) + P(LB)×MET(lose+bg)), where MET is the Match Equity Table value at the resulting score. This precise calculation is essential for optimal cube decisions in match play.",
          es: "MWC se calcula sumando todos los resultados posibles del juego (ganar, ganar gammon, ganar backgammon, perder, perder gammon, perder backgammon) ponderados por sus probabilidades y la equidad de match resultante. Fórmula: MWC = (P(W)×MET(ganar) + P(WG)×MET(ganar+gammon) + P(WB)×MET(ganar+bg) + P(L)×MET(perder) + P(LG)×MET(perder+gammon) + P(LB)×MET(perder+bg)), donde MET es el valor de la tabla de equidad de match en la puntuación resultante. Este cálculo preciso es esencial para decisiones óptimas del cubo en match play.",
          de: "MWC wird berechnet, indem alle möglichen Spielausgänge (Sieg, Sieg mit Gammon, Sieg mit Backgammon, Niederlage, Niederlage mit Gammon, Niederlage mit Backgammon) gewichtet nach ihren Wahrscheinlichkeiten und der resultierenden Match-Equity summiert werden. Formel: MWC = (P(W)×MET(Sieg) + P(WG)×MET(Sieg+Gammon) + P(WB)×MET(Sieg+BG) + P(L)×MET(Niederlage) + P(LG)×MET(Niederlage+Gammon) + P(LB)×MET(Niederlage+BG)), wobei MET der Match-Equity-Tabellenwert beim resultierenden Stand ist. Diese präzise Berechnung ist für optimale Würfelentscheidungen im Match-Spiel unerlässlich.",
          nl: "MWC wordt berekend door alle mogelijke speluitkomsten (winnen, winnen gammon, winnen backgammon, verliezen, verliezen gammon, verliezen backgammon) op te tellen gewogen naar hun waarschijnlijkheden en de resulterende match equity. Formule: MWC = (P(W)×MET(winnen) + P(WG)×MET(winnen+gammon) + P(WB)×MET(winnen+bg) + P(L)×MET(verliezen) + P(LG)×MET(verliezen+gammon) + P(LB)×MET(verliezen+bg)), waarbij MET de Match Equity Table waarde is bij de resulterende score. Deze precieze berekening is essentieel voor optimale dobbelsteenbeslissingen in match play."
        }
      },
      {
        question: {
          en: "What is a 'priming game' versus 'blitzing game' strategic difference?",
          es: "¿Cuál es la diferencia estratégica entre 'juego de priming' versus 'juego de blitzing'?",
          de: "Was ist der strategische Unterschied zwischen 'Priming-Spiel' und 'Blitzing-Spiel'?",
          nl: "Wat is een 'priming game' versus 'blitzen game' strategisch verschil?"
        },
        options: [
          { en: "Building consecutive points vs hitting aggressively", es: "Construir puntos consecutivos vs golpear agresivamente", de: "Aufeinanderfolgende Punkte bauen vs. aggressiv schlagen", nl: "Opeenvolgende punten bouwen vs agressief raken" },
          { en: "Slow buildup vs quick closeout", es: "Acumulación lenta vs cierre rápido", de: "Langsamer Aufbau vs. schneller Closeout", nl: "Langzame opbouw vs snelle closeout" },
          { en: "5-prime vs 6-prime strategy", es: "Estrategia de 5-prime vs 6-prime", de: "5-Prime- vs. 6-Prime-Strategie", nl: "5-prime vs 6-prime strategie" },
          { en: "Timing-dependent vs timing-independent", es: "Dependiente del timing vs independiente del timing", de: "Timing-abhängig vs. Timing-unabhängig", nl: "Timing-afhankelijk vs timing-onafhankelijk" }
        ],
        correct: 1,
        explanation: {
          en: "Priming games focus on building consecutive points (ideally a 6-prime) to trap opponent's back checkers, requiring patience and careful timing. Success depends on maintaining the prime until opponent runs out of constructive moves. Blitzing games emphasize hitting multiple opponent checkers quickly and closing out the board before they can escape, relying on aggressive tempo play. Priming requires slower buildup and precise timing; blitzing requires speed and board closure. The key strategic choice: prime when you have time to build, blitz when you have immediate attacking chances.",
          es: "Los juegos de priming se enfocan en construir puntos consecutivos (idealmente un 6-prime) para atrapar fichas traseras del oponente, requiriendo paciencia y timing cuidadoso. El éxito depende de mantener la prime hasta que el oponente se quede sin movimientos constructivos. Los juegos de blitzing enfatizan golpear múltiples fichas del oponente rápidamente y cerrar el tablero antes de que puedan escapar, confiando en juego de tempo agresivo. Priming requiere acumulación más lenta y timing preciso; blitzing requiere velocidad y cierre del tablero. La elección estratégica clave: prime cuando tienes tiempo para construir, blitz cuando tienes oportunidades de ataque inmediatas.",
          de: "Priming-Spiele konzentrieren sich auf den Aufbau aufeinanderfolgender Punkte (idealerweise eine 6-Prime), um die hinteren Steine des Gegners einzufangen, was Geduld und sorgfältiges Timing erfordert. Erfolg hängt davon ab, die Prime aufrechtzuerhalten, bis dem Gegner die konstruktiven Züge ausgehen. Blitzing-Spiele betonen das schnelle Schlagen mehrerer gegnerischer Steine und das Schließen des Bretts, bevor sie entkommen können, mit aggressivem Tempo-Spiel. Priming erfordert langsameren Aufbau und präzises Timing; Blitzing erfordert Geschwindigkeit und Brett-Schließung. Die strategische Schlüsselwahl: Prime, wenn man Zeit zum Aufbauen hat, Blitz, wenn man sofortige Angriffschancen hat.",
          nl: "Priming games richten zich op het bouwen van opeenvolgende punten (ideaal een 6-prime) om achterste stenen van de tegenstander te vangen, wat geduld en zorgvuldige timing vereist. Succes hangt af van het behouden van de prime tot de tegenstander geen constructieve zetten meer heeft. Blitzen games benadrukken het snel raken van meerdere tegenstander stenen en het sluiten van het bord voordat ze kunnen ontsnappen, vertrouwend op agressief tempo spel. Priming vereist langzamere opbouw en precieze timing; blitzen vereist snelheid en bordsluiting. De strategische sleutelkeuze: prime wanneer je tijd hebt om te bouwen, blitz wanneer je onmiddellijke aanvalskansen hebt."
        }
      },
      {
        question: {
          en: "What is the 'dead cube' in money game versus match play implications?",
          es: "¿Cuáles son las implicaciones del 'cubo muerto' en el juego por dinero versus match play?",
          de: "Was sind die Implikationen des 'toten Würfels' im Geldspiel versus Match-Spiel?",
          nl: "Wat zijn de 'dode dobbelsteen' implicaties in geldspel versus match play?"
        },
        options: [
          { en: "Same effect in both - cube cannot be used further", es: "Mismo efecto en ambos - el cubo no puede usarse más", de: "Gleicher Effekt in beiden - Würfel kann nicht weiter verwendet werden", nl: "Zelfde effect in beide - dobbelsteen kan niet verder worden gebruikt" },
          { en: "Dead cube changes checker play in money, not matches", es: "Cubo muerto cambia juego de fichas en dinero, no en matches", de: "Toter Würfel ändert Checker-Play im Geldspiel, nicht in Matches", nl: "Dode dobbelsteen verandert checker play in geld, niet in matches" },
          { en: "Dead cube = gammon value changes differently", es: "Cubo muerto = valor de gammon cambia de manera diferente", de: "Toter Würfel = Gammon-Wert ändert sich unterschiedlich", nl: "Dode dobbelsteen = gammon waarde verandert anders" },
          { en: "Match play dead cubes are worth more", es: "Cubos muertos en match play valen más", de: "Match-Spiel tote Würfel sind mehr wert", nl: "Match play dode dobbelstenen zijn meer waard" }
        ],
        correct: 2,
        explanation: {
          en: "With a dead cube (maxed out at 4, 8, etc. where neither player can redouble), gammon values change dramatically but differently in money vs matches. In money games, gammons are always worth exactly 2x stake. In match play, gammon value depends entirely on match score - at some scores (e.g., 2-away/3-away), gammons barely matter; at others (e.g., 3-away/4-away), they're critical. This creates completely different optimal checker play strategies. With a dead cube in money games, you always play for/against gammons equally; in matches, you may save/go for gammons aggressively based on score.",
          es: "Con un cubo muerto (maximizado en 4, 8, etc. donde ningún jugador puede redoblar), los valores de gammon cambian drásticamente pero de manera diferente en dinero vs matches. En juegos por dinero, los gammons siempre valen exactamente 2x apuesta. En match play, el valor del gammon depende enteramente de la puntuación del match: en algunas puntuaciones (ej., 2-away/3-away), los gammons apenas importan; en otras (ej., 3-away/4-away), son críticos. Esto crea estrategias de juego de fichas completamente diferentes. Con cubo muerto en juegos por dinero, siempre juegas por/contra gammons equitativamente; en matches, puedes salvar/ir por gammons agresivamente según la puntuación.",
          de: "Mit einem toten Würfel (maximal bei 4, 8 usw., wo kein Spieler mehr wiederverdoppeln kann) ändern sich Gammon-Werte dramatisch, aber unterschiedlich in Geld- vs. Match-Spielen. In Geldspielen sind Gammons immer genau 2x Einsatz wert. Im Match-Spiel hängt der Gammon-Wert vollständig vom Match-Stand ab - bei einigen Ständen (z.B. 2-away/3-away) spielen Gammons kaum eine Rolle; bei anderen (z.B. 3-away/4-away) sind sie kritisch. Dies schafft völlig unterschiedliche optimale Checker-Play-Strategien. Mit totem Würfel in Geldspielen spielt man immer gleichermaßen für/gegen Gammons; in Matches kann man Gammons je nach Stand aggressiv sichern/anstreben.",
          nl: "Met een dode dobbelsteen (gemaximeerd op 4, 8, enz. waar geen speler kan herverdubbelen), veranderen gammon waarden dramatisch maar anders in geld vs matches. In geldspellen zijn gammons altijd precies 2x inzet waard. In match play hangt gammon waarde volledig af van match score - bij sommige scores (bijv. 2-away/3-away), doen gammons er nauwelijks toe; bij andere (bijv. 3-away/4-away), zijn ze cruciaal. Dit creëert volledig verschillende optimale checker play strategieën. Met een dode dobbelsteen in geldspellen speel je altijd gelijk voor/tegen gammons; in matches kun je gammons agressief redden/najagen op basis van score."
        }
      },
      {
        question: {
          en: "What is 'cube efficiency' in position evaluation?",
          es: "¿Qué es la 'eficiencia del cubo' en la evaluación de posiciones?",
          de: "Was ist 'Würfel-Effizienz' in der Positionsbewertung?",
          nl: "Wat is 'dobbelsteenefficiëntie' in positie evaluatie?"
        },
        options: [
          { en: "How often the cube can be doubled", es: "Con qué frecuencia se puede doblar el cubo", de: "Wie oft der Würfel verdoppelt werden kann", nl: "Hoe vaak de dobbelsteen kan worden verdubbeld" },
          { en: "Ratio of actual equity to theoretical max with cube", es: "Proporción de equity real al máximo teórico con cubo", de: "Verhältnis von tatsächlicher Equity zu theoretischem Maximum mit Würfel", nl: "Verhouding van werkelijke equity tot theoretisch maximum met dobbelsteen" },
          { en: "Speed of cube rotation in tournament", es: "Velocidad de rotación del cubo en torneo", de: "Geschwindigkeit der Würfelrotation im Turnier", nl: "Snelheid van dobbelsteenrotatie in toernooi" },
          { en: "Percentage of correct cube decisions made", es: "Porcentaje de decisiones correctas del cubo realizadas", de: "Prozentsatz korrekter Würfelentscheidungen", nl: "Percentage juiste dobbelsteenbeslissingen gemaakt" }
        ],
        correct: 1,
        explanation: {
          en: "Cube efficiency measures how effectively a lead translates into cube leverage. It's the ratio of your actual equity to the theoretical maximum equity you could have with perfect cube usage. A position with high cube efficiency (close to 100%) means you can effectively use your advantage to generate cube action - volatile positions have high efficiency. Low cube efficiency (60-70%) means your advantage is 'locked in' and can't easily be leveraged via the cube - slow, grinding positions have low efficiency. This affects doubling points: lower efficiency requires stronger equity to double.",
          es: "La eficiencia del cubo mide cuán efectivamente una ventaja se traduce en apalancamiento del cubo. Es la proporción de tu equity real al equity máximo teórico que podrías tener con uso perfecto del cubo. Una posición con alta eficiencia del cubo (cerca del 100%) significa que puedes usar efectivamente tu ventaja para generar acción del cubo - posiciones volátiles tienen alta eficiencia. Baja eficiencia del cubo (60-70%) significa que tu ventaja está 'bloqueada' y no puede apalancarse fácilmente vía el cubo - posiciones lentas y de desgaste tienen baja eficiencia. Esto afecta los puntos de doble: menor eficiencia requiere equity más fuerte para doblar.",
          de: "Würfel-Effizienz misst, wie effektiv ein Vorsprung in Würfel-Leverage übersetzt wird. Es ist das Verhältnis deiner tatsächlichen Equity zur theoretischen maximalen Equity, die du mit perfekter Würfelnutzung haben könntest. Eine Position mit hoher Würfel-Effizienz (nahe 100%) bedeutet, dass du deinen Vorteil effektiv nutzen kannst, um Würfel-Aktion zu erzeugen - volatile Positionen haben hohe Effizienz. Niedrige Würfel-Effizienz (60-70%) bedeutet, dass dein Vorteil 'eingeschlossen' ist und nicht leicht über den Würfel gehebelt werden kann - langsame, zermürbende Positionen haben niedrige Effizienz. Dies beeinflusst Verdopplungspunkte: niedrigere Effizienz erfordert stärkere Equity zum Verdoppeln.",
          nl: "Dobbelsteenefficiëntie meet hoe effectief een voorsprong zich vertaalt naar dobbelsteenhefboomwerking. Het is de verhouding van je werkelijke equity tot de theoretische maximale equity die je zou kunnen hebben met perfect dobbelsteengebruik. Een positie met hoge dobbelsteenefficiëntie (dicht bij 100%) betekent dat je je voordeel effectief kunt gebruiken om dobbelsteenactie te genereren - volatiele posities hebben hoge efficiëntie. Lage dobbelsteenefficiëntie (60-70%) betekent dat je voordeel 'vastgezet' is en niet gemakkelijk kan worden benut via de dobbelsteen - langzame, slijpende posities hebben lage efficiëntie. Dit beïnvloedt verdubbelpunten: lagere efficiëntie vereist sterkere equity om te verdubbelen."
        }
      },
      {
        question: {
          en: "What is the 'golden point' in backgammon strategy?",
          es: "¿Qué es el 'punto dorado' en la estrategia del backgammon?",
          de: "Was ist der 'goldene Punkt' in der Backgammon-Strategie?",
          nl: "Wat is het 'gouden punt' in backgammon strategie?"
        },
        options: [
          { en: "The 5-point in your home board", es: "El punto 5 en tu tablero de casa", de: "Der 5-Punkt im Heimfeld", nl: "Het 5-punt in je thuisbord" },
          { en: "The 20-point (opponent's 5-point)", es: "El punto 20 (punto 5 del oponente)", de: "Der 20-Punkt (5-Punkt des Gegners)", nl: "Het 20-punt (tegenstander's 5-punt)" },
          { en: "Midpoint (13-point for both players)", es: "Punto medio (punto 13 para ambos jugadores)", de: "Mittelpunkt (13-Punkt für beide Spieler)", nl: "Middelpunt (13-punt voor beide spelers)" },
          { en: "Bar point (7-point)", es: "Punto de barra (punto 7)", de: "Bar-Punkt (7-Punkt)", nl: "Bar punt (7-punt)" }
        ],
        correct: 0,
        explanation: {
          en: "The golden point is the 5-point in your home board - considered the single most valuable point to own. It serves multiple strategic purposes: creates a strong anchor for the opponent's back checkers to avoid, forms the base of primes (builder for 6-prime), provides excellent coverage for blots in your inner board, and is ideally positioned for bearing off efficiently. The opening priority in backgammon is usually to make your 5-point. Many opening strategies and slot plays revolve around controlling this critical point.",
          es: "El punto dorado es el punto 5 en tu tablero de casa, considerado el punto individual más valioso para poseer. Sirve múltiples propósitos estratégicos: crea un ancla fuerte que las fichas traseras del oponente deben evitar, forma la base de primes (constructor para 6-prime), proporciona excelente cobertura para blots en tu tablero interior, y está idealmente posicionado para sacar eficientemente. La prioridad de apertura en backgammon es usualmente hacer tu punto 5. Muchas estrategias de apertura y jugadas de slot giran en torno a controlar este punto crítico.",
          de: "Der goldene Punkt ist der 5-Punkt im Heimfeld - gilt als der einzeln wertvollste zu besitzende Punkt. Er dient mehreren strategischen Zwecken: schafft einen starken Anker, den die hinteren Steine des Gegners vermeiden müssen, bildet die Basis von Primes (Baustein für 6-Prime), bietet ausgezeichnete Abdeckung für Blots im Innenfeld und ist ideal für effizientes Auswürfeln positioniert. Die Eröffnungspriorität im Backgammon ist normalerweise, den 5-Punkt zu machen. Viele Eröffnungsstrategien und Slot-Plays drehen sich um die Kontrolle dieses kritischen Punkts.",
          nl: "Het gouden punt is het 5-punt in je thuisbord - beschouwd als het individueel meest waardevolle punt om te bezitten. Het dient meerdere strategische doelen: creëert een sterk anker dat achterste stenen van de tegenstander moeten vermijden, vormt de basis van primes (bouwer voor 6-prime), biedt uitstekende dekking voor blots in je binnenste bord, en is ideaal gepositioneerd voor efficiënt uitspelen. De openingsprioriteit in backgammon is meestal om je 5-punt te maken. Veel openingsstrategieën en slot plays draaien om het beheersen van dit kritieke punt."
        }
      },
      {
        question: {
          en: "What is 'normalized score' in match equity calculations?",
          es: "¿Qué es la 'puntuación normalizada' en los cálculos de equidad de match?",
          de: "Was ist 'normalisierter Stand' in Match-Equity-Berechnungen?",
          nl: "Wat is 'genormaliseerde score' in match equity berekeningen?"
        },
        options: [
          { en: "Converting match score to percentage remaining", es: "Convertir puntuación del match a porcentaje restante", de: "Match-Stand in verbleibenden Prozentsatz umwandeln", nl: "Match score omzetten naar resterende percentage" },
          { en: "Adjusting for skill difference between players", es: "Ajustar por diferencia de habilidad entre jugadores", de: "Anpassung für Skill-Unterschied zwischen Spielern", nl: "Aanpassen voor vaardigheid verschil tussen spelers" },
          { en: "Average equity across all match lengths", es: "Equity promedio en todas las longitudes de match", de: "Durchschnittliche Equity über alle Match-Längen", nl: "Gemiddelde equity over alle match lengtes" },
          { en: "Standard deviation of match outcomes", es: "Desviación estándar de resultados del match", de: "Standardabweichung der Match-Ergebnisse", nl: "Standaarddeviatie van match uitkomsten" }
        ],
        correct: 0,
        explanation: {
          en: "Normalized score expresses match position as a percentage of points remaining to win, making it easier to compare equity across different match lengths. For example, in a 7-point match with score 5-3, you're 2-away and opponent is 4-away. The normalized score is 2/(2+4) = 33.3% for you (you need 33.3% of remaining points). Match equity tables can be normalized this way to apply to any match length. This standardization helps pattern recognition - '2-away/4-away' equity is similar regardless of whether it's from 5-3 in a 7-match or 9-5 in an 11-match.",
          es: "La puntuación normalizada expresa la posición del match como un porcentaje de puntos restantes para ganar, facilitando comparar equity entre diferentes longitudes de match. Por ejemplo, en un match de 7 puntos con puntuación 5-3, estás 2-away y el oponente está 4-away. La puntuación normalizada es 2/(2+4) = 33,3% para ti (necesitas el 33,3% de los puntos restantes). Las tablas de equity de match pueden normalizarse de esta manera para aplicarse a cualquier longitud de match. Esta estandarización ayuda al reconocimiento de patrones: la equity '2-away/4-away' es similar independientemente de si es de 5-3 en un match de 7 o 9-5 en un match de 11.",
          de: "Der normalisierte Stand drückt die Match-Position als Prozentsatz der verbleibenden Punkte zum Sieg aus, was den Vergleich von Equity über verschiedene Match-Längen erleichtert. Zum Beispiel, in einem 7-Punkt-Match mit Stand 5-3 ist man 2-away und der Gegner 4-away. Der normalisierte Stand ist 2/(2+4) = 33,3% für dich (du brauchst 33,3% der verbleibenden Punkte). Match-Equity-Tabellen können so normalisiert werden, um auf jede Match-Länge anwendbar zu sein. Diese Standardisierung hilft bei der Mustererkennung - '2-away/4-away' Equity ist ähnlich, unabhängig davon, ob es von 5-3 in einem 7-Match oder 9-5 in einem 11-Match stammt.",
          nl: "Genormaliseerde score drukt match positie uit als een percentage van resterende punten om te winnen, wat het gemakkelijker maakt om equity te vergelijken over verschillende match lengtes. Bijvoorbeeld, in een 7-punts match met score 5-3, ben je 2-away en tegenstander is 4-away. De genormaliseerde score is 2/(2+4) = 33,3% voor jou (je hebt 33,3% van resterende punten nodig). Match equity tabellen kunnen op deze manier worden genormaliseerd om toe te passen op elke match lengte. Deze standaardisatie helpt patroonherkenning - '2-away/4-away' equity is vergelijkbaar ongeacht of het van 5-3 in een 7-match of 9-5 in een 11-match komt."
        }
      },
      {
        question: {
          en: "What is 'rollout standard error' in neural network analysis?",
          es: "¿Qué es el 'error estándar de rollout' en el análisis de red neuronal?",
          de: "Was ist 'Rollout-Standardfehler' in der neuronalen Netzwerkanalyse?",
          nl: "Wat is 'rollout standaardfout' in neurale netwerk analyse?"
        },
        options: [
          { en: "Average mistake rate by the bot", es: "Tasa de error promedio del bot", de: "Durchschnittliche Fehlerrate des Bots", nl: "Gemiddelde foutpercentage van de bot" },
          { en: "Statistical confidence interval of rollout results", es: "Intervalo de confianza estadístico de resultados de rollout", de: "Statistisches Konfidenzintervall der Rollout-Ergebnisse", nl: "Statistisch betrouwbaarheidsinterval van rollout resultaten" },
          { en: "Difference between 1-ply and 2-ply evaluation", es: "Diferencia entre evaluación de 1 capa y 2 capas", de: "Unterschied zwischen 1-Ply- und 2-Ply-Bewertung", nl: "Verschil tussen 1-laags en 2-laags evaluatie" },
          { en: "Bug detection metric in software", es: "Métrica de detección de errores en software", de: "Fehlererkennungsmetrik in Software", nl: "Bug detectie metriek in software" }
        ],
        correct: 1,
        explanation: {
          en: "Rollout standard error (SE) measures the statistical reliability of rollout results. Because rollouts simulate random dice sequences, results vary between runs. SE indicates the confidence interval - smaller SE means more reliable results. For example, if a rollout shows equity = 0.550 ± 0.008 SE, you can be ~68% confident the true equity is between 0.542-0.558, and ~95% confident it's between 0.534-0.566. To reduce SE, you need more trials (typically thousands). SE is critical for evaluating close decisions - a 0.001 equity difference means nothing if SE is 0.010.",
          es: "El error estándar de rollout (SE) mide la confiabilidad estadística de los resultados de rollout. Como los rollouts simulan secuencias de dados aleatorias, los resultados varían entre ejecuciones. SE indica el intervalo de confianza: menor SE significa resultados más confiables. Por ejemplo, si un rollout muestra equity = 0,550 ± 0,008 SE, puedes estar ~68% seguro de que la equity real está entre 0,542-0,558, y ~95% seguro de que está entre 0,534-0,566. Para reducir SE, necesitas más pruebas (típicamente miles). SE es crítico para evaluar decisiones cercanas: una diferencia de equity de 0,001 no significa nada si SE es 0,010.",
          de: "Der Rollout-Standardfehler (SE) misst die statistische Zuverlässigkeit von Rollout-Ergebnissen. Da Rollouts zufällige Würfelsequenzen simulieren, variieren die Ergebnisse zwischen Durchläufen. SE zeigt das Konfidenzintervall an - kleinerer SE bedeutet zuverlässigere Ergebnisse. Zum Beispiel, wenn ein Rollout Equity = 0,550 ± 0,008 SE zeigt, können Sie zu ~68% sicher sein, dass die wahre Equity zwischen 0,542-0,558 liegt, und zu ~95% sicher, dass sie zwischen 0,534-0,566 liegt. Um SE zu reduzieren, braucht man mehr Versuche (typischerweise Tausende). SE ist kritisch für die Bewertung knapper Entscheidungen - ein 0,001 Equity-Unterschied bedeutet nichts, wenn SE 0,010 ist.",
          nl: "Rollout standaardfout (SE) meet de statistische betrouwbaarheid van rollout resultaten. Omdat rollouts willekeurige dobbelsteensequenties simuleren, variëren resultaten tussen runs. SE geeft het betrouwbaarheidsinterval aan - kleinere SE betekent betrouwbaardere resultaten. Bijvoorbeeld, als een rollout equity = 0,550 ± 0,008 SE toont, kun je ~68% zeker zijn dat de echte equity tussen 0,542-0,558 ligt, en ~95% zeker dat het tussen 0,534-0,566 ligt. Om SE te verminderen, heb je meer proeven nodig (typisch duizenden). SE is cruciaal voor het evalueren van krappe beslissingen - een 0,001 equity verschil betekent niets als SE 0,010 is."
        }
      },
      {
        question: {
          en: "What is the 'beaver' rule and when is it advantageous?",
          es: "¿Qué es la regla del 'beaver' y cuándo es ventajosa?",
          de: "Was ist die 'Beaver'-Regel und wann ist sie vorteilhaft?",
          nl: "Wat is de 'beaver' regel en wanneer is het voordelig?"
        },
        options: [
          { en: "Immediate redouble after taking, keeping cube ownership", es: "Redoble inmediato después de aceptar, manteniendo propiedad del cubo", de: "Sofortige Wiederverdopplung nach Annahme, Würfelbesitz behaltend", nl: "Onmiddellijke herverdubbeling na accepteren, dobbelsteenbezit behoudend" },
          { en: "Passing cube to avoid gammon", es: "Pasar cubo para evitar gammon", de: "Würfel passen, um Gammon zu vermeiden", nl: "Dobbelsteen weigeren om gammon te vermijden" },
          { en: "Doubling when exactly 50% equity", es: "Doblar cuando exactamente 50% de equity", de: "Verdoppeln bei genau 50% Equity", nl: "Verdubbelen bij precies 50% equity" },
          { en: "Wild card move allowing any checker play", es: "Movimiento comodín que permite cualquier jugada de ficha", de: "Wildcard-Zug, der jedes Checker-Play erlaubt", nl: "Wildcard zet die elke checker play toestaat" }
        ],
        correct: 0,
        explanation: {
          en: "The beaver is an optional rule (not used in tournaments) where if you're doubled, you can accept AND immediately redouble to the next level while retaining cube ownership. For example, opponent doubles to 2, you beaver to 4 and keep the cube. Beavers are advantageous when you believe your opponent's double was premature or incorrect - you're saying 'not only do I take, but I'm actually the favorite.' The beaver rule discourages loose doubles in money games, as an incorrect double can be severely punished by an immediate beaver.",
          es: "El beaver es una regla opcional (no usada en torneos) donde si te doblan, puedes aceptar E inmediatamente redoblar al siguiente nivel mientras retienes la propiedad del cubo. Por ejemplo, el oponente dobla a 2, tú beaver a 4 y mantienes el cubo. Los beavers son ventajosos cuando crees que el doble de tu oponente fue prematuro o incorrecto: estás diciendo 'no solo acepto, sino que en realidad soy el favorito.' La regla del beaver desalienta dobles sueltos en juegos por dinero, ya que un doble incorrecto puede ser severamente castigado con un beaver inmediato.",
          de: "Der Beaver ist eine optionale Regel (nicht in Turnieren verwendet), bei der man, wenn man verdoppelt wird, annehmen UND sofort auf die nächste Stufe wiederverdoppeln kann, während man den Würfelbesitz behält. Zum Beispiel verdoppelt der Gegner auf 2, man beavert auf 4 und behält den Würfel. Beavers sind vorteilhaft, wenn man glaubt, dass die Verdopplung des Gegners verfrüht oder falsch war - man sagt 'ich nehme nicht nur an, sondern bin tatsächlich der Favorit.' Die Beaver-Regel entmutigt lose Verdopplungen in Geldspielen, da eine falsche Verdopplung durch einen sofortigen Beaver schwer bestraft werden kann.",
          nl: "De beaver is een optionele regel (niet gebruikt in toernooien) waarbij als je verdubbeld wordt, je kunt accepteren EN onmiddellijk herverdubbelen naar het volgende niveau terwijl je dobbelsteenbezit behoudt. Bijvoorbeeld, tegenstander verdubbelt naar 2, jij beavert naar 4 en houdt de dobbelsteen. Beavers zijn voordelig wanneer je gelooft dat de verdubbeling van je tegenstander voorbarig of incorrect was - je zegt 'niet alleen accepteer ik, maar ik ben eigenlijk de favoriet.' De beaver regel ontmoedigt losse verdubbeling in geldspellen, omdat een incorrecte verdubbeling zwaar gestraft kan worden door een onmiddellijke beaver."
        }
      },
      {
        question: {
          en: "What is 'temperature' in backgammon game theory?",
          es: "¿Qué es la 'temperatura' en la teoría de juegos del backgammon?",
          de: "Was ist 'Temperatur' in der Backgammon-Spieltheorie?",
          nl: "Wat is 'temperatuur' in backgammon speltheorie?"
        },
        options: [
          { en: "Rate of equity swing per roll - volatility measure", es: "Tasa de oscilación de equity por tirada - medida de volatilidad", de: "Rate des Equity-Schwungs pro Wurf - Volatilitätsmaß", nl: "Snelheid van equity schommeling per worp - volatiliteit meting" },
          { en: "Player emotion level during match", es: "Nivel de emoción del jugador durante el match", de: "Emotionsniveau des Spielers während des Matches", nl: "Emotie niveau van speler tijdens match" },
          { en: "Clock pressure in timed tournaments", es: "Presión del reloj en torneos cronometrados", de: "Uhrdruck in zeitgesteuerten Turnieren", nl: "Klokdruk in getimede toernooien" },
          { en: "Gammon frequency relative to match score", es: "Frecuencia de gammon relativa a la puntuación del match", de: "Gammon-Häufigkeit relativ zum Match-Stand", nl: "Gammon frequentie relatief aan match score" }
        ],
        correct: 0,
        explanation: {
          en: "Temperature measures how quickly equity changes in a position - essentially, positional volatility. High-temperature positions (blitzes, mutual contact, many hitting chances) have equity swings of 20-40% per exchange. Low-temperature positions (pure races, settled positions) change slowly, maybe 2-5% per roll. Temperature directly affects cube strategy: high-temperature positions require earlier doubling (to avoid market losers), while low-temperature positions allow waiting for higher equity. The concept comes from combinatorial game theory and is critical for optimal cube timing.",
          es: "La temperatura mide qué tan rápido cambia la equity en una posición, esencialmente, la volatilidad posicional. Posiciones de alta temperatura (blitzes, contacto mutuo, muchas oportunidades de golpeo) tienen oscilaciones de equity de 20-40% por intercambio. Posiciones de baja temperatura (carreras puras, posiciones establecidas) cambian lentamente, tal vez 2-5% por tirada. La temperatura afecta directamente la estrategia del cubo: posiciones de alta temperatura requieren doblaje más temprano (para evitar perdedores del mercado), mientras que posiciones de baja temperatura permiten esperar mayor equity. El concepto proviene de la teoría de juegos combinatorios y es crítico para el timing óptimo del cubo.",
          de: "Temperatur misst, wie schnell sich Equity in einer Position ändert - im Wesentlichen positionelle Volatilität. Hochtemperatur-Positionen (Blitzes, gegenseitiger Kontakt, viele Schlagchancen) haben Equity-Schwankungen von 20-40% pro Austausch. Niedrigtemperatur-Positionen (reine Rennen, gesetzte Positionen) ändern sich langsam, vielleicht 2-5% pro Wurf. Temperatur beeinflusst direkt die Würfelstrategie: Hochtemperatur-Positionen erfordern früheres Verdoppeln (um Market Loser zu vermeiden), während Niedrigtemperatur-Positionen das Warten auf höhere Equity erlauben. Das Konzept stammt aus der kombinatorischen Spieltheorie und ist kritisch für optimales Würfel-Timing.",
          nl: "Temperatuur meet hoe snel equity verandert in een positie - in essentie, positionele volatiliteit. Hoge-temperatuur posities (blitzes, wederzijds contact, veel raakkansen) hebben equity schommelingen van 20-40% per uitwisseling. Lage-temperatuur posities (pure races, gevestigde posities) veranderen langzaam, misschien 2-5% per worp. Temperatuur beïnvloedt direct dobbelsteenstrategie: hoge-temperatuur posities vereisen eerdere verdubbeling (om market losers te vermijden), terwijl lage-temperatuur posities wachten op hogere equity toestaan. Het concept komt van combinatorische speltheorie en is cruciaal voor optimale dobbelsteen timing."
        }
      },
      {
        question: {
          en: "What is the 'Naccel 2' position refinement in modern theory?",
          es: "¿Qué es el refinamiento de posición 'Naccel 2' en la teoría moderna?",
          de: "Was ist die 'Naccel 2'-Positionsverfeinerung in der modernen Theorie?",
          nl: "Wat is de 'Naccel 2' positie verfijning in moderne theorie?"
        },
        options: [
          { en: "Position where equity won't change for 2+ rolls", es: "Posición donde la equity no cambiará durante 2+ tiradas", de: "Position, wo sich Equity für 2+ Würfe nicht ändert", nl: "Positie waar equity niet zal veranderen gedurende 2+ worpen" },
          { en: "Second version of neural network software", es: "Segunda versión del software de red neuronal", de: "Zweite Version der neuronalen Netzwerksoftware", nl: "Tweede versie van neurale netwerk software" },
          { en: "2-away/2-away specific cube strategy", es: "Estrategia específica del cubo 2-away/2-away", de: "2-away/2-away-spezifische Würfelstrategie", nl: "2-away/2-away specifieke dobbelsteenstrategie" },
          { en: "Double Naccel - even slower equity change", es: "Doble Naccel - cambio de equity aún más lento", de: "Doppel-Naccel - noch langsamere Equity-Änderung", nl: "Dubbele Naccel - nog langzamere equity verandering" }
        ],
        correct: 3,
        explanation: {
          en: "Naccel 2 (or 'Double Naccel') is an extreme refinement where the position is so locked-up that equity changes glacially even over multiple rolls. While regular Naccel means 'don't double yet because equity won't jump suddenly,' Naccel 2 means 'you can wait several rolls with virtually no market-losing risk.' These occur in deeply locked priming games or mutual holding positions where both players have minimal constructive moves. In Naccel 2 positions, you can safely delay cube action to gather more information, as the position's temperature is near zero.",
          es: "Naccel 2 (o 'Doble Naccel') es un refinamiento extremo donde la posición está tan bloqueada que la equity cambia glacialmente incluso durante múltiples tiradas. Mientras que Naccel regular significa 'no dobles aún porque la equity no saltará repentinamente,' Naccel 2 significa 'puedes esperar varias tiradas con virtualmente ningún riesgo de perder el mercado.' Estos ocurren en juegos de priming profundamente bloqueados o posiciones de retención mutua donde ambos jugadores tienen movimientos constructivos mínimos. En posiciones Naccel 2, puedes retrasar con seguridad la acción del cubo para reunir más información, ya que la temperatura de la posición está cerca de cero.",
          de: "Naccel 2 (oder 'Doppel-Naccel') ist eine extreme Verfeinerung, bei der die Position so festgefahren ist, dass sich die Equity selbst über mehrere Würfe hinweg eiszeitlich langsam ändert. Während normales Naccel bedeutet 'verdopple noch nicht, weil Equity nicht plötzlich springt,' bedeutet Naccel 2 'du kannst mehrere Würfe warten mit praktisch keinem Markt-Verlust-Risiko.' Diese treten in tief festgefahrenen Priming-Spielen oder gegenseitigen Holding-Positionen auf, wo beide Spieler minimale konstruktive Züge haben. In Naccel-2-Positionen kann man Würfel-Aktion sicher verzögern, um mehr Informationen zu sammeln, da die Temperatur der Position nahe Null ist.",
          nl: "Naccel 2 (of 'Dubbele Naccel') is een extreme verfijning waar de positie zo vastgelopen is dat equity ijselijk langzaam verandert, zelfs over meerdere worpen. Terwijl reguliere Naccel betekent 'verdubbel nog niet omdat equity niet plotseling zal springen,' betekent Naccel 2 'je kunt meerdere worpen wachten met vrijwel geen markt-verlies risico.' Deze komen voor in diep vastgelopen priming games of wederzijdse holding posities waar beide spelers minimale constructieve zetten hebben. In Naccel 2 posities kun je veilig dobbelsteenactie uitstellen om meer informatie te verzamelen, omdat de temperatuur van de positie bijna nul is."
        }
      },
      {
        question: {
          en: "What is 'match equity table convergence' at extreme scores?",
          es: "¿Qué es la 'convergencia de tabla de equity de match' en puntuaciones extremas?",
          de: "Was ist 'Match-Equity-Tabellen-Konvergenz' bei extremen Ständen?",
          nl: "Wat is 'match equity tabel convergentie' bij extreme scores?"
        },
        options: [
          { en: "All positions approach 50/50 at high scores", es: "Todas las posiciones se acercan a 50/50 en puntuaciones altas", de: "Alle Positionen nähern sich 50/50 bei hohen Ständen", nl: "Alle posities naderen 50/50 bij hoge scores" },
          { en: "Large leads become insurmountable", es: "Las grandes ventajas se vuelven insuperables", de: "Große Vorsprünge werden unüberwindbar", nl: "Grote voorsprongen worden onoverkomelijk" },
          { en: "Gammon values approach money game levels", es: "Los valores de gammon se acercan a niveles de juego por dinero", de: "Gammon-Werte nähern sich Geldspiel-Niveaus", nl: "Gammon waarden naderen geldspel niveaus" },
          { en: "Match equity equals pip differential", es: "La equity de match es igual al diferencial de pips", de: "Match-Equity gleicht Pip-Differenz", nl: "Match equity gelijk aan pip verschil" }
        ],
        correct: 2,
        explanation: {
          en: "Match equity table convergence means that at very high match scores (both players many points away from victory), match equity values converge toward money game values. For example, at 15-away/15-away, cube actions and gammon values behave almost identically to money play because the match is so long that individual games matter less. Conversely, at extreme disparities (like 2-away/15-away), the trailing player has huge gammon-go incentive. Understanding convergence helps: you can apply money game strategy at high symmetric scores, but must use match equity tables at asymmetric or low scores.",
          es: "La convergencia de tabla de equity de match significa que en puntuaciones de match muy altas (ambos jugadores muchos puntos lejos de la victoria), los valores de equity de match convergen hacia los valores de juego por dinero. Por ejemplo, en 15-away/15-away, las acciones del cubo y los valores de gammon se comportan casi idénticamente al juego por dinero porque el match es tan largo que los juegos individuales importan menos. Por el contrario, en disparidades extremas (como 2-away/15-away), el jugador rezagado tiene un enorme incentivo de gammon-go. Entender la convergencia ayuda: puedes aplicar estrategia de juego por dinero en puntuaciones simétricas altas, pero debes usar tablas de equity de match en puntuaciones asimétricas o bajas.",
          de: "Match-Equity-Tabellen-Konvergenz bedeutet, dass bei sehr hohen Match-Ständen (beide Spieler viele Punkte vom Sieg entfernt) Match-Equity-Werte gegen Geldspiel-Werte konvergieren. Zum Beispiel verhalten sich bei 15-away/15-away Würfel-Aktionen und Gammon-Werte fast identisch zum Geldspiel, weil das Match so lang ist, dass einzelne Spiele weniger wichtig sind. Umgekehrt hat bei extremen Disparitäten (wie 2-away/15-away) der zurückliegende Spieler enormen Gammon-Go-Anreiz. Das Verständnis der Konvergenz hilft: Man kann Geldspiel-Strategie bei hohen symmetrischen Ständen anwenden, muss aber Match-Equity-Tabellen bei asymmetrischen oder niedrigen Ständen verwenden.",
          nl: "Match equity tabel convergentie betekent dat bij zeer hoge match scores (beide spelers vele punten verwijderd van overwinning), match equity waarden convergeren naar geldspel waarden. Bijvoorbeeld, bij 15-away/15-away gedragen dobbelsteenacties en gammon waarden zich bijna identiek aan geldspel omdat de match zo lang is dat individuele spellen minder uitmaken. Omgekeerd heeft bij extreme verschillen (zoals 2-away/15-away), de achterliggende speler enorme gammon-go stimulans. Het begrijpen van convergentie helpt: je kunt geldspel strategie toepassen bij hoge symmetrische scores, maar moet match equity tabellen gebruiken bij asymmetrische of lage scores."
        }
      },
      {
        question: {
          en: "What is a 'clearance number' in bearing off analysis?",
          es: "¿Qué es un 'número de despeje' en el análisis del bear-off?",
          de: "Was ist eine 'Clearance-Zahl' in der Bearoff-Analyse?",
          nl: "Wat is een 'ontruimingsnummer' in uitspeel analyse?"
        },
        options: [
          { en: "Number of pips to clear opponent's anchor", es: "Número de pips para despejar el ancla del oponente", de: "Anzahl der Pips zum Räumen des gegnerischen Ankers", nl: "Aantal pips om anker van tegenstander op te ruimen" },
          { en: "Exact roll needed to bear off all checkers", es: "Tirada exacta necesaria para sacar todas las fichas", de: "Exakter Wurf zum Auswürfeln aller Steine", nl: "Exacte worp nodig om alle stenen uit te spelen" },
          { en: "How many checkers to remove from a point before wasting pips", es: "Cuántas fichas quitar de un punto antes de desperdiciar pips", de: "Wie viele Steine von einem Punkt zu entfernen, bevor Pips verschwendet werden", nl: "Hoeveel stenen van een punt te verwijderen voordat pips verspild worden" },
          { en: "Minimum rolls to empty home board", es: "Tiradas mínimas para vaciar el tablero de casa", de: "Minimale Würfe zum Leeren des Heimfelds", nl: "Minimale worpen om thuisbord te legen" }
        ],
        correct: 2,
        explanation: {
          en: "A clearance number indicates how many checkers you should bear off from a point before moving checkers elsewhere to avoid wastage. For example, with 5 checkers on the 6-point, the clearance number is 1 - you should bear off at least 1 checker before the position wastes pips. With 3 checkers on the 5-point and 4 on the 6-point, you should clear some from the 6-point first. Clearance numbers optimize bearoff efficiency by preventing excessive stacking. This advanced concept helps make the mathematically optimal bearoff plays in racing situations.",
          es: "Un número de despeje indica cuántas fichas debes sacar de un punto antes de mover fichas a otro lugar para evitar desperdicio. Por ejemplo, con 5 fichas en el punto 6, el número de despeje es 1: debes sacar al menos 1 ficha antes de que la posición desperdicie pips. Con 3 fichas en el punto 5 y 4 en el punto 6, debes despejar algunas del punto 6 primero. Los números de despeje optimizan la eficiencia del bear-off al prevenir el apilamiento excesivo. Este concepto avanzado ayuda a hacer las jugadas de bear-off matemáticamente óptimas en situaciones de carrera.",
          de: "Eine Clearance-Zahl gibt an, wie viele Steine man von einem Punkt auswürfeln sollte, bevor man Steine woanders hinbewegt, um Verschwendung zu vermeiden. Zum Beispiel ist bei 5 Steinen auf dem 6-Punkt die Clearance-Zahl 1 - man sollte mindestens 1 Stein auswürfeln, bevor die Position Pips verschwendet. Mit 3 Steinen auf dem 5-Punkt und 4 auf dem 6-Punkt sollte man zuerst einige vom 6-Punkt räumen. Clearance-Zahlen optimieren die Auswürfel-Effizienz, indem sie übermäßiges Stapeln verhindern. Dieses fortgeschrittene Konzept hilft, mathematisch optimale Auswürfel-Plays in Rennsituationen zu machen.",
          nl: "Een ontruimingsnummer geeft aan hoeveel stenen je van een punt moet uitspelen voordat je stenen elders naartoe beweegt om verspilling te voorkomen. Bijvoorbeeld, met 5 stenen op het 6-punt, is het ontruimingsnummer 1 - je moet minstens 1 steen uitspelen voordat de positie pips verspilt. Met 3 stenen op het 5-punt en 4 op het 6-punt, moet je eerst enkele van het 6-punt ontruimen. Ontruimingsnummers optimaliseren uitspeel efficiëntie door overmatige stapeling te voorkomen. Dit geavanceerde concept helpt de wiskundig optimale uitspeel plays te maken in race situaties."
        }
      },
      {
        question: {
          en: "What is the 'Zorba' position in backgammon theory?",
          es: "¿Qué es la posición 'Zorba' en la teoría del backgammon?",
          de: "Was ist die 'Zorba'-Position in der Backgammon-Theorie?",
          nl: "Wat is de 'Zorba' positie in backgammon theorie?"
        },
        options: [
          { en: "Greek opening variation", es: "Variación de apertura griega", de: "Griechische Eröffnungsvariante", nl: "Griekse openingsvariatie" },
          { en: "Mutual 2-point back game reference position", es: "Posición de referencia de back game mutuo de 2 puntos", de: "Gegenseitige 2-Punkt-Back-Game-Referenzposition", nl: "Wederzijdse 2-punts back game referentiepositie" },
          { en: "Dance position - both players on bar", es: "Posición de baile - ambos jugadores en barra", de: "Tanz-Position - beide Spieler auf Bar", nl: "Dans positie - beide spelers op bar" },
          { en: "Cube action at double match point", es: "Acción del cubo en doble punto de match", de: "Würfel-Aktion beim Doppel-Match-Punkt", nl: "Dobbelsteenactie bij dubbel match punt" }
        ],
        correct: 1,
        explanation: {
          en: "The Zorba position is a classic reference position in backgammon theory, representing a symmetrical mutual 2-point back game where both players hold their opponent's 1-point and 3-point (or similar low anchors). Named after Nack Ballard's article analyzing this position type, it demonstrates key back game principles: timing is critical (need sufficient spare checkers to wait), hitting opportunities are mutual (both players have shots when opponent breaks), and the player who breaks first usually loses. Studying Zorba helps understand back game timing and when to commit to or avoid back game strategies.",
          es: "La posición Zorba es una posición de referencia clásica en la teoría del backgammon, representando un back game mutuo simétrico de 2 puntos donde ambos jugadores mantienen el punto 1 y punto 3 de su oponente (o anclas bajas similares). Nombrada en honor al artículo de Nack Ballard que analiza este tipo de posición, demuestra principios clave del back game: el timing es crítico (necesitas suficientes fichas de repuesto para esperar), las oportunidades de golpeo son mutuas (ambos jugadores tienen golpes cuando el oponente rompe), y el jugador que rompe primero generalmente pierde. Estudiar Zorba ayuda a entender el timing del back game y cuándo comprometerse o evitar estrategias de back game.",
          de: "Die Zorba-Position ist eine klassische Referenzposition in der Backgammon-Theorie, die ein symmetrisches gegenseitiges 2-Punkt-Back-Game darstellt, bei dem beide Spieler den 1-Punkt und 3-Punkt des Gegners halten (oder ähnliche niedrige Anker). Nach Nack Ballards Artikel benannt, der diesen Positionstyp analysiert, demonstriert sie wichtige Back-Game-Prinzipien: Timing ist kritisch (man braucht ausreichend Ersatzsteine zum Warten), Schlagmöglichkeiten sind gegenseitig (beide Spieler haben Schüsse, wenn der Gegner aufbricht), und der Spieler, der zuerst aufbricht, verliert normalerweise. Das Studium von Zorba hilft, Back-Game-Timing zu verstehen und wann man sich für Back-Game-Strategien entscheiden oder sie vermeiden sollte.",
          nl: "De Zorba positie is een klassieke referentiepositie in backgammon theorie, die een symmetrisch wederzijds 2-punts back game vertegenwoordigt waar beide spelers het 1-punt en 3-punt van hun tegenstander houden (of vergelijkbare lage ankers). Vernoemd naar Nack Ballard's artikel dat dit positietype analyseert, demonstreert het belangrijke back game principes: timing is cruciaal (je hebt voldoende reserve stenen nodig om te wachten), raakkansen zijn wederzijds (beide spelers hebben schoten wanneer tegenstander breekt), en de speler die eerst breekt verliest meestal. Zorba bestuderen helpt back game timing te begrijpen en wanneer je je moet committeren aan of back game strategieën moet vermijden."
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
