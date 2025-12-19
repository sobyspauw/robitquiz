// Backgammon Quiz - Level 8: Champion
(function() {
  const level8 = {
    name: {
      en: "Backgammon - Champion",
      es: "Backgammon - Campeón",
      de: "Backgammon - Champion",
      nl: "Backgammon - Kampioen"
    },
    questions: [
      {
        question: {
          en: "What is 'position matching' in backgammon analysis?",
          es: "¿Qué es 'emparejamiento de posición' en el análisis de backgammon?",
          de: "Was ist 'Position-Matching' in der Backgammon-Analyse?",
          nl: "Wat is 'positie matching' in backgammon-analyse?"
        },
        options: [
          { en: "Finding similar positions in databases to understand cube and checker play decisions", es: "Encontrar posiciones similares en bases de datos para entender decisiones de cubo y juego de fichas", de: "Ähnliche Positionen in Datenbanken finden, um Würfel- und Spielentscheidungen zu verstehen", nl: "Vergelijkbare posities vinden in databases om dobbels- en spelbeslissingen te begrijpen" },
          { en: "Matching your position to your opponent's", es: "Emparejar tu posición con la de tu oponente", de: "Deine Position an die des Gegners anpassen", nl: "Je positie afstemmen op die van je tegenstander" },
          { en: "Ensuring symmetry in holding games", es: "Asegurar simetría en juegos de retención", de: "Symmetrie in Haltespielen sicherstellen", nl: "Symmetrie garanderen in houdspellen" },
          { en: "Aligning checkers with pip count targets", es: "Alinear fichas con objetivos de recuento de pip", de: "Steine an Pip-Count-Zielen ausrichten", nl: "Schijven uitlijnen met pip count doelen" }
        ],
        correct: 0,
        explanation: {
          en: "Position matching involves searching databases (like GNUbg or XG) for similar positions to study how experts handle comparable situations. This helps learn patterns for cube decisions and checker play in similar position types.",
          es: "El emparejamiento de posición implica buscar en bases de datos (como GNUbg o XG) posiciones similares para estudiar cómo los expertos manejan situaciones comparables. Esto ayuda a aprender patrones para decisiones de cubo y juego de fichas en tipos de posición similares.",
          de: "Position-Matching beinhaltet die Suche in Datenbanken (wie GNUbg oder XG) nach ähnlichen Positionen, um zu studieren, wie Experten vergleichbare Situationen handhaben. Dies hilft, Muster für Würfelentscheidungen und Spielzüge in ähnlichen Positionstypen zu lernen.",
          nl: "Positie matching houdt in dat databases (zoals GNUbg of XG) worden doorzocht op vergelijkbare posities om te bestuderen hoe experts vergelijkbare situaties aanpakken. Dit helpt patronen te leren voor dobbelsbeslissingen en spel in vergelijkbare positietypes."
        }
      },
      {
        question: {
          en: "In match play, what is a 'cash point' and when does it occur?",
          es: "En juego de match, ¿qué es un 'punto de efectivo' y cuándo ocurre?",
          de: "Im Match-Spiel, was ist ein 'Cash Point' und wann tritt er auf?",
          nl: "In wedstrijdspel, wat is een 'cash point' en wanneer vindt het plaats?"
        },
        options: [
          { en: "The equity threshold where you should double for value even without redouble threats", es: "El umbral de equidad donde debes doblar por valor incluso sin amenazas de redoblaje", de: "Die Equity-Schwelle, bei der du für Wert verdoppeln solltest, auch ohne Verdopplungsdrohungen", nl: "De equity-drempel waar je voor waarde moet verdubbelen zelfs zonder herverdubbelingsdreiging" },
          { en: "When you convert match equity to prize money", es: "Cuando conviertes equidad de match en dinero del premio", de: "Wenn du Match-Equity in Preisgeld umwandelst", nl: "Wanneer je wedstrijd-equity omzet in prijzengeld" },
          { en: "The score where gammons become valuable", es: "La puntuación donde los gammons se vuelven valiosos", de: "Der Punktestand, bei dem Gammons wertvoll werden", nl: "De score waar gammons waardevol worden" },
          { en: "When you should accept for immediate take profit", es: "Cuando debes aceptar para beneficio inmediato de aceptación", de: "Wenn du für sofortigen Annahmegewinn annehmen solltest", nl: "Wanneer je moet accepteren voor directe acceptatiewinst" }
        ],
        correct: 0,
        explanation: {
          en: "A cash point is when your position is strong enough that you should double purely for value, regardless of cube access considerations. At this equity level, even if opponent takes and owns the cube, your advantage is so large that doubling now is clearly correct.",
          es: "Un punto de efectivo es cuando tu posición es lo suficientemente fuerte como para que debas doblar puramente por valor, independientemente de consideraciones de acceso al cubo. En este nivel de equidad, incluso si el oponente acepta y posee el cubo, tu ventaja es tan grande que doblar ahora es claramente correcto.",
          de: "Ein Cash Point ist, wenn deine Position stark genug ist, dass du rein für den Wert verdoppeln solltest, unabhängig von Überlegungen zum Würfelzugang. Bei diesem Equity-Level ist dein Vorteil so groß, dass Verdoppeln jetzt klar richtig ist, selbst wenn der Gegner annimmt und den Würfel besitzt.",
          nl: "Een cash point is wanneer je positie sterk genoeg is dat je puur voor waarde moet verdubbelen, ongeacht overwegingen van dobbelstoegang. Op dit equity-niveau is je voordeel zo groot dat verdubbelen nu duidelijk correct is, zelfs als tegenstander accepteert en de dobbel bezit."
        }
      },
      {
        question: {
          en: "What is the 'rule of 8' in bearing off positions?",
          es: "¿Qué es la 'regla de 8' en posiciones de sacar fichas?",
          de: "Was ist die 'Regel von 8' in Auswürfelpositionen?",
          nl: "Wat is de 'regel van 8' in uitneemposities?"
        },
        options: [
          { en: "If opponent needs 8+ rolls to bear off all checkers, you can leave shots more freely", es: "Si el oponente necesita 8+ tiros para sacar todas las fichas, puedes dejar tiros más libremente", de: "Wenn der Gegner 8+ Würfe braucht, um alle Steine auszuwürfeln, kannst du freier Shots lassen", nl: "Als tegenstander 8+ worpen nodig heeft om alle schijven uit te nemen, kun je vrijer shots achterlaten" },
          { en: "Subtract 8 from pip count when on roll", es: "Resta 8 del recuento de pip cuando es tu turno", de: "Ziehe 8 vom Pip-Count ab, wenn du am Zug bist", nl: "Trek 8 af van pip count wanneer je aan de beurt bent" },
          { en: "You need 8 checkers in your home board to bear off efficiently", es: "Necesitas 8 fichas en tu tablero interior para sacar eficientemente", de: "Du brauchst 8 Steine in deinem Heimfeld für effizientes Auswürfeln", nl: "Je hebt 8 schijven nodig in je thuisbord om efficiënt uit te nemen" },
          { en: "Crossovers cost 8 pips on average", es: "Los cruces cuestan 8 pips en promedio", de: "Crossovers kosten durchschnittlich 8 Pips", nl: "Crossovers kosten gemiddeld 8 pips" }
        ],
        correct: 0,
        explanation: {
          en: "The rule of 8 states that if your opponent needs 8 or more rolls to bear off all their checkers, you can generally afford to leave shots in the bearoff, since even if hit, you'll likely have time to re-enter and win the race. Very useful for efficient bearoff play.",
          es: "La regla de 8 establece que si tu oponente necesita 8 o más tiros para sacar todas sus fichas, generalmente puedes permitirte dejar tiros en el bearoff, ya que incluso si te golpean, probablemente tendrás tiempo para reingresar y ganar la carrera. Muy útil para juego eficiente de bearoff.",
          de: "Die Regel von 8 besagt, dass wenn dein Gegner 8 oder mehr Würfe braucht, um alle seine Steine auszuwürfeln, du dir normalerweise leisten kannst, Shots beim Auswürfeln zu lassen, da du selbst bei einem Treffer wahrscheinlich Zeit hast, wieder einzutreten und das Rennen zu gewinnen. Sehr nützlich für effizientes Auswürfeln.",
          nl: "De regel van 8 stelt dat als je tegenstander 8 of meer worpen nodig heeft om al hun schijven uit te nemen, je het je over het algemeen kunt veroorloven om shots achter te laten in de bearoff, omdat je zelfs als je geraakt wordt waarschijnlijk tijd hebt om weer binnen te komen en de race te winnen. Zeer nuttig voor efficiënt uitneemspel."
        }
      },
      {
        question: {
          en: "What is 'recube vig' (recube vigorish) in backgammon?",
          es: "¿Qué es 'recube vig' (vigorish de recube) en backgammon?",
          de: "Was ist 'Recube Vig' (Recube Vigorish) im Backgammon?",
          nl: "Wat is 'recube vig' (recube vigorish) in backgammon?"
        },
        options: [
          { en: "The extra equity gained from owning the cube and threatening to redouble", es: "La equidad extra ganada al poseer el cubo y amenazar con redoblar", de: "Die zusätzliche Equity durch Würfelbesitz und Verdopplungsdrohung", nl: "De extra equity verkregen door het bezit van de dobbel en dreigen met herverdubbelen" },
          { en: "The commission charged in money games", es: "La comisión cobrada en juegos de dinero", de: "Die Provision in Geldspielen", nl: "De commissie die in rekening wordt gebracht in geldspellen" },
          { en: "The advantage of doubling first", es: "La ventaja de doblar primero", de: "Der Vorteil des ersten Verdoppelns", nl: "Het voordeel van als eerste verdubbelen" },
          { en: "The risk of accepting a cube", es: "El riesgo de aceptar un cubo", de: "Das Risiko, einen Würfel anzunehmen", nl: "Het risico van het accepteren van een dobbel" }
        ],
        correct: 0,
        explanation: {
          en: "Recube vigorish is the extra value you gain from owning the cube. When you own the cube, you can threaten efficient redoubles, forcing your opponent to play more conservatively. This cube ownership has real equity value beyond the current position's nominal equity.",
          es: "El vigorish de recube es el valor extra que ganas al poseer el cubo. Cuando posees el cubo, puedes amenazar con redoblajes eficientes, obligando a tu oponente a jugar más conservadoramente. Esta propiedad del cubo tiene valor de equidad real más allá de la equidad nominal de la posición actual.",
          de: "Recube Vigorish ist der zusätzliche Wert, den du durch Würfelbesitz gewinnst. Wenn du den Würfel besitzt, kannst du effiziente Verdopplungen androhen, was deinen Gegner zwingt, konservativer zu spielen. Dieser Würfelbesitz hat realen Equity-Wert über die nominale Equity der aktuellen Position hinaus.",
          nl: "Recube vigorish is de extra waarde die je krijgt door de dobbel te bezitten. Wanneer je de dobbel bezit, kun je efficiënte herverdubbelingen dreigen, wat je tegenstander dwingt conservatiever te spelen. Dit dobbelsbezit heeft echte equity-waarde boven de nominale equity van de huidige positie."
        }
      },
      {
        question: {
          en: "What is a 'consulting double' in tournament play?",
          es: "¿Qué es un 'doble consultivo' en juego de torneo?",
          de: "Was ist ein 'Consulting Double' im Turnierplay?",
          nl: "Wat is een 'consulting double' in toernooispel?"
        },
        options: [
          { en: "An early double offered to gauge opponent's take/pass tendencies and risk tolerance", es: "Un doble temprano ofrecido para medir tendencias de aceptación/pase del oponente y tolerancia al riesgo", de: "Eine frühe Verdopplung, um die Annahme-/Pass-Tendenzen und Risikotoleranz des Gegners zu testen", nl: "Een vroege verdubbeling aangeboden om acceptatie/pas tendensen van tegenstander en risicotolerantie te peilen" },
          { en: "Asking your partner for advice before doubling", es: "Pedir consejo a tu compañero antes de doblar", de: "Deinen Partner um Rat fragen, bevor du verdoppelst", nl: "Je partner om advies vragen voordat je verdubbelt" },
          { en: "Using a computer to check doubling decisions", es: "Usar una computadora para verificar decisiones de doblaje", de: "Einen Computer verwenden, um Verdopplungsentscheidungen zu überprüfen", nl: "Een computer gebruiken om verdubbelbeslissingen te controleren" },
          { en: "A double where you consult match equity tables", es: "Un doble donde consultas tablas de equidad de match", de: "Eine Verdopplung, bei der du Match-Equity-Tabellen konsultierst", nl: "Een verdubbeling waarbij je wedstrijd-equity tabellen raadpleegt" }
        ],
        correct: 0,
        explanation: {
          en: "A consulting double is an early, slightly aggressive double used to learn about your opponent's playing style and cube handling. Their response (take or pass) gives you valuable information about their risk tolerance and cube decisions for later in the match. Considered a psychological tool.",
          es: "Un doble consultivo es un doble temprano y ligeramente agresivo usado para aprender sobre el estilo de juego de tu oponente y manejo del cubo. Su respuesta (aceptar o pasar) te da información valiosa sobre su tolerancia al riesgo y decisiones de cubo para más tarde en el match. Considerado una herramienta psicológica.",
          de: "Ein Consulting Double ist eine frühe, leicht aggressive Verdopplung, die verwendet wird, um über den Spielstil und das Würfelhandling deines Gegners zu lernen. Ihre Reaktion (Annahme oder Pass) gibt dir wertvolle Informationen über ihre Risikotoleranz und Würfelentscheidungen für später im Match. Gilt als psychologisches Werkzeug.",
          nl: "Een consulting double is een vroege, licht aggressieve verdubbeling die wordt gebruikt om te leren over de speelstijl en dobbelsbeslissingen van je tegenstander. Hun reactie (accepteren of passen) geeft je waardevolle informatie over hun risicotolerantie en dobbelsbeslissingen voor later in de wedstrijd. Beschouwd als een psychologisch hulpmiddel."
        }
      },
      {
        question: {
          en: "What is the 'Trice count' used for in backgammon?",
          es: "¿Para qué se utiliza el 'recuento de Trice' en backgammon?",
          de: "Wofür wird der 'Trice-Count' im Backgammon verwendet?",
          nl: "Waarvoor wordt de 'Trice count' gebruikt in backgammon?"
        },
        options: [
          { en: "Estimating racing equity by counting crossovers (wastage) in addition to pips", es: "Estimar equidad de carrera contando cruces (desperdicio) además de pips", de: "Schätzung von Renn-Equity durch Zählen von Crossovers (Verschwendung) zusätzlich zu Pips", nl: "Schatten van racing equity door crossovers (verspilling) te tellen naast pips" },
          { en: "Determining when to triple the cube", es: "Determinar cuándo triplicar el cubo", de: "Bestimmen, wann der Würfel verdreifacht werden soll", nl: "Bepalen wanneer de dobbel te verdrievoudigen" },
          { en: "Counting pip differences in three-point matches", es: "Contar diferencias de pip en matches de tres puntos", de: "Pip-Unterschiede in Drei-Punkte-Matches zählen", nl: "Pip-verschillen tellen in drie-punts wedstrijden" },
          { en: "Evaluating three-checker endgames", es: "Evaluar finales de tres fichas", de: "Drei-Stein-Endspiele bewerten", nl: "Drie-schijf eindspellen evalueren" }
        ],
        correct: 0,
        explanation: {
          en: "The Trice count adjusts pip counts by adding wastage for crossovers (moving checkers between quadrants). Each crossover adds inefficiency. This gives a more accurate racing equity estimate than raw pip count alone, especially in races with uneven distributions.",
          es: "El recuento de Trice ajusta los recuentos de pip agregando desperdicio por cruces (mover fichas entre cuadrantes). Cada cruce agrega ineficiencia. Esto proporciona una estimación de equidad de carrera más precisa que el recuento bruto de pip solo, especialmente en carreras con distribuciones desiguales.",
          de: "Der Trice-Count passt Pip-Counts an, indem Verschwendung für Crossovers (Bewegen von Steinen zwischen Quadranten) hinzugefügt wird. Jeder Crossover fügt Ineffizienz hinzu. Dies gibt eine genauere Schätzung der Renn-Equity als der reine Pip-Count allein, besonders bei Rennen mit ungleichmäßigen Verteilungen.",
          nl: "De Trice count past pip counts aan door verspilling toe te voegen voor crossovers (schijven verplaatsen tussen kwadranten). Elke crossover voegt inefficiëntie toe. Dit geeft een nauwkeurigere schatting van racing equity dan alleen de ruwe pip count, vooral in races met ongelijke verdelingen."
        }
      },
      {
        question: {
          en: "What is a 'market loser' in backgammon cube theory?",
          es: "¿Qué es un 'perdedor de mercado' en la teoría del cubo de backgammon?",
          de: "Was ist ein 'Market Loser' in der Backgammon-Würfeltheorie?",
          nl: "Wat is een 'market loser' in backgammon dobbeltheorie?"
        },
        options: [
          { en: "A sequence where you fail to double, then the position improves so much that opponent passes - you 'lost your market'", es: "Una secuencia donde fallas en doblar, luego la posición mejora tanto que el oponente pasa - 'perdiste tu mercado'", de: "Eine Sequenz, in der du nicht verdoppelst, dann verbessert sich die Position so sehr, dass der Gegner passt - du hast 'deinen Markt verloren'", nl: "Een volgorde waarbij je niet verdubbelt, dan verbetert de positie zo veel dat tegenstander past - je hebt 'je markt verloren'" },
          { en: "A position that loses equity in the market", es: "Una posición que pierde equidad en el mercado", de: "Eine Position, die Equity im Markt verliert", nl: "Een positie die equity verliest op de markt" },
          { en: "A player who consistently makes poor market decisions", es: "Un jugador que consistentemente toma malas decisiones de mercado", de: "Ein Spieler, der konsequent schlechte Marktentscheidungen trifft", nl: "Een speler die consequent slechte marktbeslissingen neemt" },
          { en: "When your position deteriorates after doubling", es: "Cuando tu posición se deteriora después de doblar", de: "Wenn sich deine Position nach dem Verdoppeln verschlechtert", nl: "Wanneer je positie verslechtert na verdubbelen" }
        ],
        correct: 0,
        explanation: {
          en: "A market loser occurs when you could have doubled with opponent taking, but you wait - then your position improves so much that when you do double, opponent correctly passes. You 'lost your market' by waiting too long, and would have gained more equity by doubling earlier.",
          es: "Un perdedor de mercado ocurre cuando podrías haber doblado con el oponente aceptando, pero esperas - luego tu posición mejora tanto que cuando doblas, el oponente correctamente pasa. 'Perdiste tu mercado' al esperar demasiado, y habrías ganado más equidad al doblar antes.",
          de: "Ein Market Loser tritt auf, wenn du hättest verdoppeln können mit Gegnerannahme, aber du wartest - dann verbessert sich deine Position so sehr, dass wenn du verdoppelst, der Gegner korrekt passt. Du hast 'deinen Markt verloren', indem du zu lange gewartet hast, und hättest mehr Equity durch früheres Verdoppeln gewonnen.",
          nl: "Een market loser vindt plaats wanneer je had kunnen verdubbelen met tegenstander acceptatie, maar je wacht - dan verbetert je positie zo veel dat wanneer je wel verdubbelt, de tegenstander correct past. Je hebt 'je markt verloren' door te lang te wachten, en zou meer equity hebben verkregen door eerder te verdubbelen."
        }
      },
      {
        question: {
          en: "In match play, what is 'trailer's strategy' at specific scores?",
          es: "En juego de match, ¿qué es la 'estrategia del rezagado' en puntuaciones específicas?",
          de: "Im Match-Spiel, was ist die 'Nachzügler-Strategie' bei bestimmten Punkteständen?",
          nl: "In wedstrijdspel, wat is de 'achterligger strategie' bij specifieke scores?"
        },
        options: [
          { en: "The player behind should often double aggressively to create gammon-go situations and volatility", es: "El jugador rezagado debe a menudo doblar agresivamente para crear situaciones gammon-go y volatilidad", de: "Der zurückliegende Spieler sollte oft aggressiv verdoppeln, um Gammon-Go-Situationen und Volatilität zu schaffen", nl: "De achterliggende speler moet vaak aggressief verdubbelen om gammon-go situaties en volatiliteit te creëren" },
          { en: "The trailer should play conservatively to avoid risks", es: "El rezagado debe jugar conservadoramente para evitar riesgos", de: "Der Nachzügler sollte konservativ spielen, um Risiken zu vermeiden", nl: "De achterligger moet conservatief spelen om risico's te vermijden" },
          { en: "The trailer should never double", es: "El rezagado nunca debe doblar", de: "Der Nachzügler sollte niemals verdoppeln", nl: "De achterligger moet nooit verdubbelen" },
          { en: "The trailer should always go for gammons", es: "El rezagado siempre debe ir por gammons", de: "Der Nachzügler sollte immer auf Gammons gehen", nl: "De achterligger moet altijd voor gammons gaan" }
        ],
        correct: 0,
        explanation: {
          en: "When trailing in a match, you often need to take more risks to catch up. This means doubling aggressively at certain scores (like 2-away 3-away, 3-away 4-away) to create volatile situations where gammons matter more, giving you better chances to overcome the deficit.",
          es: "Cuando vas rezagado en un match, a menudo necesitas tomar más riesgos para alcanzar. Esto significa doblar agresivamente en ciertas puntuaciones (como 2-away 3-away, 3-away 4-away) para crear situaciones volátiles donde los gammons importan más, dándote mejores posibilidades de superar el déficit.",
          de: "Wenn du in einem Match zurückliegst, musst du oft mehr Risiken eingehen, um aufzuholen. Das bedeutet aggressives Verdoppeln bei bestimmten Punkteständen (wie 2-away 3-away, 3-away 4-away), um volatile Situationen zu schaffen, in denen Gammons mehr zählen, was dir bessere Chancen gibt, das Defizit zu überwinden.",
          nl: "Wanneer je achterligt in een wedstrijd, moet je vaak meer risico's nemen om in te halen. Dit betekent aggressief verdubbelen bij bepaalde scores (zoals 2-away 3-away, 3-away 4-away) om volatiele situaties te creëren waarin gammons meer uitmaken, wat je betere kansen geeft om het tekort te overwinnen."
        }
      },
      {
        question: {
          en: "What is 'checker distribution' and why does it matter in races?",
          es: "¿Qué es la 'distribución de fichas' y por qué importa en carreras?",
          de: "Was ist 'Steinverteilung' und warum ist sie wichtig in Rennen?",
          nl: "Wat is 'schijf distributie' en waarom is het belangrijk in races?"
        },
        options: [
          { en: "How evenly checkers are spread across points - smooth distributions waste fewer pips and win more races", es: "Qué tan uniformemente se distribuyen las fichas entre los puntos - distribuciones suaves desperdician menos pips y ganan más carreras", de: "Wie gleichmäßig Steine über Punkte verteilt sind - glatte Verteilungen verschwenden weniger Pips und gewinnen mehr Rennen", nl: "Hoe gelijkmatig schijven over punten zijn verspreid - gladde verdelingen verspillen minder pips en winnen meer races" },
          { en: "The number of checkers in each quadrant", es: "El número de fichas en cada cuadrante", de: "Die Anzahl der Steine in jedem Quadranten", nl: "Het aantal schijven in elk kwadrant" },
          { en: "Where your opponent's checkers are positioned", es: "Dónde están posicionadas las fichas de tu oponente", de: "Wo die Steine deines Gegners positioniert sind", nl: "Waar de schijven van je tegenstander zijn gepositioneerd" },
          { en: "How checkers are allocated between offense and defense", es: "Cómo se asignan las fichas entre ofensiva y defensiva", de: "Wie Steine zwischen Angriff und Verteidigung aufgeteilt sind", nl: "Hoe schijven worden verdeeld tussen aanval en verdediging" }
        ],
        correct: 0,
        explanation: {
          en: "Checker distribution refers to how smoothly your checkers are spread. Stacked distributions (many checkers on few points) waste pips through inefficient rolls. Smooth distributions (checkers spread evenly) maximize pip efficiency. Two positions with identical pip counts can have very different winning chances based on distribution.",
          es: "La distribución de fichas se refiere a qué tan suavemente se distribuyen tus fichas. Distribuciones apiladas (muchas fichas en pocos puntos) desperdician pips a través de tiros ineficientes. Distribuciones suaves (fichas distribuidas uniformemente) maximizan la eficiencia de pip. Dos posiciones con recuentos de pip idénticos pueden tener posibilidades de ganar muy diferentes basadas en la distribución.",
          de: "Steinverteilung bezieht sich darauf, wie glatt deine Steine verteilt sind. Gestapelte Verteilungen (viele Steine auf wenigen Punkten) verschwenden Pips durch ineffiziente Würfe. Glatte Verteilungen (gleichmäßig verteilte Steine) maximieren Pip-Effizienz. Zwei Positionen mit identischen Pip-Counts können sehr unterschiedliche Gewinnchancen haben, basierend auf der Verteilung.",
          nl: "Schijf distributie verwijst naar hoe glad je schijven zijn verspreid. Gestapelde distributies (veel schijven op weinig punten) verspillen pips door inefficiënte worpen. Gladde distributies (schijven gelijkmatig verspreid) maximaliseren pip-efficiëntie. Twee posities met identieke pip counts kunnen zeer verschillende winkansen hebben op basis van distributie."
        }
      },
      {
        question: {
          en: "What is 'flexibility' in checker positioning?",
          es: "¿Qué es la 'flexibilidad' en el posicionamiento de fichas?",
          de: "Was ist 'Flexibilität' in der Steinpositionierung?",
          nl: "Wat is 'flexibiliteit' in schijfpositionering?"
        },
        options: [
          { en: "Having checkers positioned to play multiple rolls effectively - more playable numbers", es: "Tener fichas posicionadas para jugar múltiples tiros efectivamente - más números jugables", de: "Steine so positioniert haben, dass mehrere Würfe effektiv gespielt werden können - mehr spielbare Zahlen", nl: "Schijven zo gepositioneerd hebben dat meerdere worpen effectief gespeeld kunnen worden - meer speelbare nummers" },
          { en: "Being able to move checkers backward", es: "Poder mover fichas hacia atrás", de: "Steine rückwärts bewegen können", nl: "Schijven achteruit kunnen bewegen" },
          { en: "Having spare checkers on anchor points", es: "Tener fichas de repuesto en puntos de anclaje", de: "Ersatzsteine auf Ankerpunkten haben", nl: "Reserve schijven hebben op ankerpunten" },
          { en: "Being able to switch game plans easily", es: "Poder cambiar planes de juego fácilmente", de: "Spielpläne leicht wechseln können", nl: "Gemakkelijk van spelplan kunnen wisselen" }
        ],
        correct: 0,
        explanation: {
          en: "Flexibility means positioning checkers so that many different rolls can be played well. Rigid positions only play certain numbers effectively. Flexible positions give you good plays on most rolls, reducing the impact of bad sequences and maximizing your chances.",
          es: "La flexibilidad significa posicionar fichas para que muchos tiros diferentes puedan jugarse bien. Posiciones rígidas solo juegan ciertos números efectivamente. Posiciones flexibles te dan buenas jugadas en la mayoría de los tiros, reduciendo el impacto de secuencias malas y maximizando tus posibilidades.",
          de: "Flexibilität bedeutet, Steine so zu positionieren, dass viele verschiedene Würfe gut gespielt werden können. Starre Positionen spielen nur bestimmte Zahlen effektiv. Flexible Positionen geben dir gute Spielzüge bei den meisten Würfen, reduzieren die Auswirkungen schlechter Sequenzen und maximieren deine Chancen.",
          nl: "Flexibiliteit betekent schijven zo positioneren dat veel verschillende worpen goed gespeeld kunnen worden. Rigide posities spelen alleen bepaalde nummers effectief. Flexibele posities geven je goede zetten bij de meeste worpen, verminderen de impact van slechte reeksen en maximaliseren je kansen."
        }
      },
      {
        question: {
          en: "What is the 'last roll position' concept in bearoff?",
          es: "¿Qué es el concepto de 'posición del último tiro' en bearoff?",
          de: "Was ist das 'Letzter-Wurf-Positions'-Konzept beim Auswürfeln?",
          nl: "Wat is het 'laatste worp positie' concept in bearoff?"
        },
        options: [
          { en: "The position where one roll determines the winner - critical for cube and checker play decisions", es: "La posición donde un tiro determina el ganador - crítico para decisiones de cubo y juego de fichas", de: "Die Position, bei der ein Wurf den Gewinner bestimmt - kritisch für Würfel- und Spielentscheidungen", nl: "De positie waar één worp de winnaar bepaalt - cruciaal voor dobbels- en spelbeslissingen" },
          { en: "The final position before bearing off begins", es: "La posición final antes de que comience el bearoff", de: "Die letzte Position, bevor das Auswürfeln beginnt", nl: "De laatste positie voordat het uitnemen begint" },
          { en: "When you have exactly one checker left", es: "Cuando te queda exactamente una ficha", de: "Wenn du genau einen Stein übrig hast", nl: "Wanneer je precies één schijf over hebt" },
          { en: "The position after your last legal move", es: "La posición después de tu último movimiento legal", de: "Die Position nach deinem letzten legalen Zug", nl: "De positie na je laatste legale zet" }
        ],
        correct: 0,
        explanation: {
          en: "A last roll position is where the next roll will determine the game's outcome - one player will bear off all checkers or not. These positions have specific doubling and take points that differ from normal bearoffs. Understanding last roll positions is crucial for endgame cube decisions.",
          es: "Una posición de último tiro es donde el siguiente tiro determinará el resultado del juego - un jugador sacará todas las fichas o no. Estas posiciones tienen puntos de doblaje y aceptación específicos que difieren de los bearoffs normales. Entender las posiciones de último tiro es crucial para decisiones de cubo en el final.",
          de: "Eine Letzter-Wurf-Position ist, wo der nächste Wurf das Spielergebnis bestimmen wird - ein Spieler wird alle Steine auswürfeln oder nicht. Diese Positionen haben spezifische Verdopplungs- und Annahmepunkte, die sich von normalen Auswürfeln unterscheiden. Das Verstehen von Letzter-Wurf-Positionen ist entscheidend für Endspiel-Würfelentscheidungen.",
          nl: "Een laatste worp positie is waar de volgende worp de uitkomst van het spel bepaalt - één speler zal alle schijven uitnemen of niet. Deze posities hebben specifieke verdubbel- en acceptatiepunten die verschillen van normale bearoffs. Het begrijpen van laatste worp posities is cruciaal voor eindspel dobbelsbeslissingen."
        }
      },
      {
        question: {
          en: "What is 'equity shift' and when is it most dramatic?",
          es: "¿Qué es el 'cambio de equidad' y cuándo es más dramático?",
          de: "Was ist 'Equity-Shift' und wann ist er am dramatischsten?",
          nl: "Wat is 'equity verschuiving' en wanneer is het het meest dramatisch?"
        },
        options: [
          { en: "Change in equity from one roll to the next - most dramatic in blitzes and contact positions", es: "Cambio en equidad de un tiro al siguiente - más dramático en blitzes y posiciones de contacto", de: "Änderung der Equity von einem Wurf zum nächsten - am dramatischsten in Blitzen und Kontaktpositionen", nl: "Verandering in equity van de ene worp naar de volgende - meest dramatisch in blitzes en contactposities" },
          { en: "Moving equity from checker play to cube play", es: "Mover equidad del juego de fichas al juego de cubo", de: "Equity vom Spielzug zum Würfelspiel verschieben", nl: "Equity verschuiven van schijfspel naar dobbelsspel" },
          { en: "The difference between money game and match equity", es: "La diferencia entre equidad de juego de dinero y match", de: "Der Unterschied zwischen Geldspiel- und Match-Equity", nl: "Het verschil tussen geldspel en wedstrijd equity" },
          { en: "Changing from offensive to defensive positioning", es: "Cambiar de posicionamiento ofensivo a defensivo", de: "Von offensiver zu defensiver Positionierung wechseln", nl: "Veranderen van offensieve naar defensieve positionering" }
        ],
        correct: 0,
        explanation: {
          en: "Equity shift is how much the equity changes between rolls. High-volatility positions (blitzes, complex contact) have large equity shifts - one roll can swing equity dramatically. Low-volatility positions (races, bearoffs) have small, predictable shifts. Understanding equity shift helps with cube timing.",
          es: "El cambio de equidad es cuánto cambia la equidad entre tiros. Posiciones de alta volatilidad (blitzes, contacto complejo) tienen grandes cambios de equidad - un tiro puede cambiar la equidad dramáticamente. Posiciones de baja volatilidad (carreras, bearoffs) tienen cambios pequeños y predecibles. Entender el cambio de equidad ayuda con el timing del cubo.",
          de: "Equity-Shift ist, wie stark sich die Equity zwischen Würfen ändert. Hochvolatile Positionen (Blitze, komplexer Kontakt) haben große Equity-Shifts - ein Wurf kann die Equity dramatisch ändern. Niedrigvolatile Positionen (Rennen, Auswürfel) haben kleine, vorhersagbare Shifts. Das Verstehen von Equity-Shift hilft beim Würfel-Timing.",
          nl: "Equity verschuiving is hoeveel de equity verandert tussen worpen. Hoge-volatiliteit posities (blitzes, complex contact) hebben grote equity verschuivingen - één worp kan equity dramatisch verschuiven. Lage-volatiliteit posities (races, bearoffs) hebben kleine, voorspelbare verschuivingen. Het begrijpen van equity verschuiving helpt met dobbels timing."
        }
      },
      {
        question: {
          en: "What is 'undoubled gammon value' in match equity calculations?",
          es: "¿Qué es el 'valor de gammon no doblado' en cálculos de equidad de match?",
          de: "Was ist 'unverdoppelter Gammon-Wert' in Match-Equity-Berechnungen?",
          nl: "Wat is 'onverdubbelde gammon waarde' in wedstrijd equity berekeningen?"
        },
        options: [
          { en: "How much a gammon helps when the cube is centered - varies greatly by match score", es: "Cuánto ayuda un gammon cuando el cubo está centrado - varía mucho según la puntuación del match", de: "Wie viel ein Gammon hilft, wenn der Würfel zentriert ist - variiert stark nach Match-Punktestand", nl: "Hoeveel een gammon helpt wanneer de dobbel gecentreerd is - varieert sterk per wedstrijdscore" },
          { en: "A gammon when no one has doubled yet", es: "Un gammon cuando nadie ha doblado todavía", de: "Ein Gammon, wenn noch niemand verdoppelt hat", nl: "Een gammon wanneer niemand nog heeft verdubbeld" },
          { en: "The probability of winning a gammon", es: "La probabilidad de ganar un gammon", de: "Die Wahrscheinlichkeit, ein Gammon zu gewinnen", nl: "De waarschijnlijkheid om een gammon te winnen" },
          { en: "Gammon equity in money games", es: "Equidad de gammon en juegos de dinero", de: "Gammon-Equity in Geldspielen", nl: "Gammon equity in geldspellen" }
        ],
        correct: 0,
        explanation: {
          en: "Undoubled gammon value measures how much winning a gammon (instead of a single game) improves your match equity when the cube is still centered. This varies dramatically: at DMP it's 0% (worthless), at 2-away 4-away it might be 70%+, making gammons extremely valuable.",
          es: "El valor de gammon no doblado mide cuánto mejora tu equidad de match ganar un gammon (en lugar de un juego simple) cuando el cubo aún está centrado. Esto varía dramáticamente: en DMP es 0% (sin valor), en 2-away 4-away podría ser 70%+, haciendo que los gammons sean extremadamente valiosos.",
          de: "Der unverdoppelte Gammon-Wert misst, wie sehr ein Gammon-Gewinn (statt eines einfachen Spiels) deine Match-Equity verbessert, wenn der Würfel noch zentriert ist. Dies variiert dramatisch: bei DMP ist es 0% (wertlos), bei 2-away 4-away könnte es 70%+ sein, was Gammons extrem wertvoll macht.",
          nl: "Onverdubbelde gammon waarde meet hoeveel het winnen van een gammon (in plaats van een enkel spel) je wedstrijd equity verbetert wanneer de dobbel nog gecentreerd is. Dit varieert dramatisch: bij DMP is het 0% (waardeloos), bij 2-away 4-away kan het 70%+ zijn, wat gammons extreem waardevol maakt."
        }
      },
      {
        question: {
          en: "What is 'board strength' vs 'race standing' in position evaluation?",
          es: "¿Qué es 'fuerza del tablero' vs 'posición de carrera' en evaluación de posición?",
          de: "Was ist 'Brettsstärke' vs 'Rennstand' in der Positionsbewertung?",
          nl: "Wat is 'bord sterkte' vs 'race stand' in positie evaluatie?"
        },
        options: [
          { en: "Board strength is home board quality; race standing is pip count advantage - both matter differently", es: "Fuerza tablero es calidad tablero interior; posición carrera es ventaja recuento pip - ambas importan diferente", de: "Brettsstärke ist Heimfeld-Qualität; Rennstand ist Pip-Count-Vorteil - beide zählen unterschiedlich", nl: "Bord sterkte is thuisbord kwaliteit; race stand is pip count voordeel - beide maken anders uit" },
          { en: "Board strength is total checker count; race standing is position type", es: "La fuerza del tablero es el recuento total de fichas; la posición de carrera es el tipo de posición", de: "Brettsstärke ist die Gesamtzahl der Steine; Rennstand ist der Positionstyp", nl: "Bord sterkte is totaal schijf aantal; race stand is positie type" },
          { en: "Board strength measures offense; race standing measures defense", es: "La fuerza del tablero mide ofensiva; la posición de carrera mide defensiva", de: "Brettsstärke misst Angriff; Rennstand misst Verteidigung", nl: "Bord sterkte meet aanval; race stand meet verdediging" },
          { en: "They are the same thing measured differently", es: "Son la misma cosa medida de manera diferente", de: "Sie sind dasselbe, nur anders gemessen", nl: "Ze zijn hetzelfde maar anders gemeten" }
        ],
        correct: 0,
        explanation: {
          en: "Board strength refers to the quality of your home board (how many points made, gaps, etc.) - important for hitting and containing. Race standing is your pip count advantage - important for racing. A position can be strong in one but weak in the other, requiring different strategies.",
          es: "La fuerza del tablero se refiere a la calidad de tu tablero interior (cuántos puntos hechos, huecos, etc.) - importante para golpear y contener. La posición de carrera es tu ventaja de recuento de pip - importante para carreras. Una posición puede ser fuerte en una pero débil en la otra, requiriendo diferentes estrategias.",
          de: "Brettsstärke bezieht sich auf die Qualität deines Heimfelds (wie viele Punkte gemacht, Lücken usw.) - wichtig für Schlagen und Einsperren. Rennstand ist dein Pip-Count-Vorteil - wichtig für Rennen. Eine Position kann in einem stark, aber im anderen schwach sein, was unterschiedliche Strategien erfordert.",
          nl: "Bord sterkte verwijst naar de kwaliteit van je thuisbord (hoeveel punten gemaakt, gaten, enz.) - belangrijk voor slaan en vasthouden. Race stand is je pip count voordeel - belangrijk voor racen. Een positie kan sterk zijn in het ene maar zwak in het andere, wat verschillende strategieën vereist."
        }
      },
      {
        question: {
          en: "What is the 'pip-per-roll' concept in efficient bearoff play?",
          es: "¿Qué es el concepto de 'pip por tiro' en juego eficiente de bearoff?",
          de: "Was ist das 'Pip-pro-Wurf'-Konzept beim effizienten Auswürfeln?",
          nl: "Wat is het 'pip-per-worp' concept in efficiënt uitneemspel?"
        },
        options: [
          { en: "Average ~8.17 pips per roll; maximize this by avoiding wastage and gaps", es: "Promedio ~8.17 pips por tiro; maximiza esto evitando desperdicio y huecos", de: "Durchschnittlich ~8,17 Pips pro Wurf; maximiere dies durch Vermeidung von Verschwendung und Lücken", nl: "Gemiddeld ~8.17 pips per worp; maximaliseer dit door verspilling en gaten te vermijden" },
          { en: "The number of pips you can bear off per roll", es: "El número de pips que puedes sacar por tiro", de: "Die Anzahl der Pips, die du pro Wurf auswürfeln kannst", nl: "Het aantal pips dat je per worp kunt uitnemen" },
          { en: "How to calculate doubling decisions in bearoff", es: "Cómo calcular decisiones de doblaje en bearoff", de: "Wie man Verdopplungsentscheidungen beim Auswürfeln berechnet", nl: "Hoe verdubbelbeslissingen te berekenen in bearoff" },
          { en: "The cost of each crossover", es: "El costo de cada cruce", de: "Die Kosten jedes Crossovers", nl: "De kosten van elke crossover" }
        ],
        correct: 0,
        explanation: {
          en: "On average, a roll removes about 8.17 pips worth of checkers. Efficient bearoff play maximizes pips-per-roll by minimizing wastage (rolling higher than needed) and avoiding gaps. Smooth distributions with no gaps bear off fastest. Understanding this helps with bearoff checker play.",
          es: "En promedio, un tiro elimina aproximadamente 8.17 pips de fichas. El juego eficiente de bearoff maximiza los pips por tiro minimizando el desperdicio (tirar más alto de lo necesario) y evitando huecos. Distribuciones suaves sin huecos sacan más rápido. Entender esto ayuda con el juego de fichas de bearoff.",
          de: "Im Durchschnitt entfernt ein Wurf etwa 8,17 Pips an Steinen. Effizientes Auswürfeln maximiert Pips-pro-Wurf durch Minimierung von Verschwendung (höher würfeln als nötig) und Vermeidung von Lücken. Glatte Verteilungen ohne Lücken würfeln am schnellsten aus. Dies zu verstehen hilft beim Auswürfel-Spielzug.",
          nl: "Gemiddeld verwijdert een worp ongeveer 8,17 pips aan schijven. Efficiënt uitneemspel maximaliseert pips-per-worp door verspilling te minimaliseren (hoger gooien dan nodig) en gaten te vermijden. Gladde verdelingen zonder gaten nemen het snelst uit. Dit begrijpen helpt met bearoff schijfspel."
        }
      },
      {
        question: {
          en: "What is a 'timing position' in backgammon?",
          es: "¿Qué es una 'posición de timing' en backgammon?",
          de: "Was ist eine 'Timing-Position' im Backgammon?",
          nl: "Wat is een 'timing positie' in backgammon?"
        },
        options: [
          { en: "A position where both sides race to time moves correctly - often in priming or holding games", es: "Una posición donde ambos lados compiten por temporizar movimientos correctamente - a menudo en juegos de prime o retención", de: "Eine Position, bei der beide Seiten um korrektes Timing der Züge wetteifern - oft in Prime- oder Haltespielen", nl: "Een positie waar beide kanten racen om zetten correct te timen - vaak in prime of houdspellen" },
          { en: "When you need to check the game clock", es: "Cuando necesitas verificar el reloj del juego", de: "Wenn du die Spieluhr überprüfen musst", nl: "Wanneer je de spelklok moet controleren" },
          { en: "The moment to double in a race", es: "El momento para doblar en una carrera", de: "Der Moment zum Verdoppeln in einem Rennen", nl: "Het moment om te verdubbelen in een race" },
          { en: "A position where time pressure affects decisions", es: "Una posición donde la presión de tiempo afecta las decisiones", de: "Eine Position, bei der Zeitdruck Entscheidungen beeinflusst", nl: "Een positie waar tijdsdruk beslissingen beïnvloedt" }
        ],
        correct: 0,
        explanation: {
          en: "Timing positions occur when both players must carefully manage their spare checkers and pips to avoid breaking their position too early or too late. Common in priming games (attacking a prime) and mutual holding games. Whoever runs out of useful moves first usually loses.",
          es: "Las posiciones de timing ocurren cuando ambos jugadores deben gestionar cuidadosamente sus fichas de repuesto y pips para evitar romper su posición demasiado temprano o tarde. Común en juegos de prime (atacando un prime) y juegos de retención mutua. Quien se queda sin movimientos útiles primero generalmente pierde.",
          de: "Timing-Positionen treten auf, wenn beide Spieler ihre Ersatzsteine und Pips sorgfältig verwalten müssen, um zu vermeiden, ihre Position zu früh oder zu spät zu brechen. Häufig in Prime-Spielen (Angriff auf einen Prime) und gegenseitigen Haltespielen. Wer zuerst keine nützlichen Züge mehr hat, verliert normalerweise.",
          nl: "Timing posities komen voor wanneer beide spelers hun reserve schijven en pips zorgvuldig moeten beheren om te voorkomen dat ze hun positie te vroeg of te laat breken. Gebruikelijk in prime spellen (aanval op een prime) en wederzijdse houdspellen. Wie als eerste geen nuttige zetten meer heeft, verliest meestal."
        }
      },
      {
        question: {
          en: "What is 'gammon price' in match play decisions?",
          es: "¿Qué es el 'precio de gammon' en decisiones de juego de match?",
          de: "Was ist 'Gammon-Preis' in Match-Spiel-Entscheidungen?",
          nl: "Wat is 'gammon prijs' in wedstrijdspel beslissingen?"
        },
        options: [
          { en: "The equity cost of risking a gammon loss vs playing safe for a single loss", es: "El costo de equidad de arriesgar una pérdida de gammon vs jugar seguro para una pérdida simple", de: "Die Equity-Kosten, ein Gammon-Verlust zu riskieren vs. sicher für einen einfachen Verlust zu spielen", nl: "De equity kosten van het risico op een gammon verlies vs veilig spelen voor een enkel verlies" },
          { en: "The cube value when a gammon is possible", es: "El valor del cubo cuando un gammon es posible", de: "Der Würfelwert, wenn ein Gammon möglich ist", nl: "De dobbelswaarde wanneer een gammon mogelijk is" },
          { en: "How much you pay to avoid gammons", es: "Cuánto pagas para evitar gammons", de: "Wie viel du zahlst, um Gammons zu vermeiden", nl: "Hoeveel je betaalt om gammons te vermijden" },
          { en: "The match equity difference between winning and losing a gammon", es: "La diferencia de equidad de match entre ganar y perder un gammon", de: "Der Match-Equity-Unterschied zwischen Gammon-Gewinn und -Verlust", nl: "Het wedstrijd equity verschil tussen het winnen en verliezen van een gammon" }
        ],
        correct: 0,
        explanation: {
          en: "Gammon price is how much match equity you sacrifice by risking a gammon instead of playing safe for a certain single game. At some match scores (like DMP) the price is zero - gammons don't hurt. At others (2-away vs. Crawford) the price is huge - a gammon loss might end the match.",
          es: "El precio de gammon es cuánta equidad de match sacrificas al arriesgar un gammon en lugar de jugar seguro por un juego simple seguro. En algunas puntuaciones de match (como DMP) el precio es cero - los gammons no duelen. En otras (2-away vs. Crawford) el precio es enorme - una pérdida de gammon podría terminar el match.",
          de: "Gammon-Preis ist, wie viel Match-Equity du opferst, indem du ein Gammon riskierst, statt sicher für ein einzelnes Spiel zu spielen. Bei manchen Match-Punkteständen (wie DMP) ist der Preis null - Gammons schaden nicht. Bei anderen (2-away vs. Crawford) ist der Preis enorm - ein Gammon-Verlust könnte das Match beenden.",
          nl: "Gammon prijs is hoeveel wedstrijd equity je opoffert door een gammon te risikeren in plaats van veilig te spelen voor een zeker enkel spel. Bij sommige wedstrijdscores (zoals DMP) is de prijs nul - gammons doen geen pijn. Bij anderen (2-away vs. Crawford) is de prijs enorm - een gammon verlies kan de wedstrijd beëindigen."
        }
      },
      {
        question: {
          en: "What is the 'variance reduction' strategy in match play?",
          es: "¿Qué es la estrategia de 'reducción de varianza' en juego de match?",
          de: "Was ist die 'Varianzreduktions'-Strategie im Match-Spiel?",
          nl: "Wat is de 'variantie reductie' strategie in wedstrijdspel?"
        },
        options: [
          { en: "When ahead, make plays that reduce luck factor and preserve your lead (no hitting, avoid volatility)", es: "Cuando vas adelante, haz jugadas que reduzcan el factor suerte y preserven tu ventaja (no golpear, evitar volatilidad)", de: "Wenn du führst, mache Züge, die den Glücksfaktor reduzieren und deinen Vorsprung bewahren (nicht schlagen, Volatilität vermeiden)", nl: "Wanneer voor, maak zetten die de geluksfactor verminderen en je voorsprong behouden (niet slaan, volatiliteit vermijden)" },
          { en: "Doubling to reduce the number of games needed", es: "Doblar para reducir el número de juegos necesarios", de: "Verdoppeln, um die Anzahl benötigter Spiele zu reduzieren", nl: "Verdubbelen om het aantal benodigde spellen te verminderen" },
          { en: "Playing conservatively in all match situations", es: "Jugar conservadoramente en todas las situaciones de match", de: "In allen Match-Situationen konservativ spielen", nl: "Conservatief spelen in alle wedstrijdsituaties" },
          { en: "Using match equity tables to reduce calculation errors", es: "Usar tablas de equidad de match para reducir errores de cálculo", de: "Match-Equity-Tabellen verwenden, um Rechenfehler zu reduzieren", nl: "Wedstrijd equity tabellen gebruiken om rekenfouten te verminderen" }
        ],
        correct: 0,
        explanation: {
          en: "When you're ahead in a match, variance reduction means making plays that minimize luck and volatility - run when you can, avoid contact, don't hit unnecessarily. This preserves your lead by reducing the chance of lucky swings favoring your opponent. The opposite strategy applies when behind.",
          es: "Cuando vas adelante en un match, la reducción de varianza significa hacer jugadas que minimicen la suerte y volatilidad - corre cuando puedas, evita el contacto, no golpees innecesariamente. Esto preserva tu ventaja reduciendo la posibilidad de cambios afortunados que favorezcan a tu oponente. La estrategia opuesta se aplica cuando vas detrás.",
          de: "Wenn du in einem Match führst, bedeutet Varianzreduktion, Züge zu machen, die Glück und Volatilität minimieren - laufe wenn möglich, vermeide Kontakt, schlage nicht unnötig. Dies bewahrt deinen Vorsprung, indem die Chance glücklicher Schwankungen zugunsten deines Gegners reduziert wird. Die gegenteilige Strategie gilt, wenn du zurückliegst.",
          nl: "Wanneer je voor staat in een wedstrijd, betekent variantie reductie zetten maken die geluk en volatiliteit minimaliseren - ren wanneer je kunt, vermijd contact, sla niet onnodig. Dit behoudt je voorsprong door de kans op gelukkige schommelingen in het voordeel van je tegenstander te verminderen. De tegenovergestelde strategie geldt wanneer je achterligt."
        }
      },
      {
        question: {
          en: "What is 'directional equity' in backgammon positions?",
          es: "¿Qué es la 'equidad direccional' en posiciones de backgammon?",
          de: "Was ist 'Richtungs-Equity' in Backgammon-Positionen?",
          nl: "Wat is 'richtings equity' in backgammon posities?"
        },
        options: [
          { en: "Whether your equity is likely to improve or decline - helps determine cube timing", es: "Si tu equidad probablemente mejorará o disminuirá - ayuda a determinar el timing del cubo", de: "Ob sich deine Equity wahrscheinlich verbessern oder verschlechtern wird - hilft beim Würfel-Timing", nl: "Of je equity waarschijnlijk zal verbeteren of afnemen - helpt dobbelstiming te bepalen" },
          { en: "The direction your checkers are moving", es: "La dirección en que se mueven tus fichas", de: "Die Richtung, in die sich deine Steine bewegen", nl: "De richting waarin je schijven bewegen" },
          { en: "Whether you're playing forward or backward", es: "Si estás jugando hacia adelante o hacia atrás", de: "Ob du vorwärts oder rückwärts spielst", nl: "Of je voorwaarts of achterwaarts speelt" },
          { en: "The equity of moving vs. staying still", es: "La equidad de moverse vs. quedarse quieto", de: "Die Equity des Bewegens vs. Stillstehens", nl: "De equity van bewegen vs. stilstaan" }
        ],
        correct: 0,
        explanation: {
          en: "Directional equity asks: is my position getting better or worse over time? If your equity is rising (good direction), you can wait to double. If declining (bad direction), you should double now. This concept is crucial for optimal cube timing in volatile positions.",
          es: "La equidad direccional pregunta: ¿mi posición está mejorando o empeorando con el tiempo? Si tu equidad está subiendo (buena dirección), puedes esperar para doblar. Si está declinando (mala dirección), debes doblar ahora. Este concepto es crucial para el timing óptimo del cubo en posiciones volátiles.",
          de: "Richtungs-Equity fragt: Wird meine Position mit der Zeit besser oder schlechter? Wenn deine Equity steigt (gute Richtung), kannst du mit dem Verdoppeln warten. Wenn sie fällt (schlechte Richtung), solltest du jetzt verdoppeln. Dieses Konzept ist entscheidend für optimales Würfel-Timing in volatilen Positionen.",
          nl: "Richtings equity vraagt: wordt mijn positie beter of slechter in de loop van de tijd? Als je equity stijgt (goede richting), kun je wachten met verdubbelen. Als het daalt (slechte richting), moet je nu verdubbelen. Dit concept is cruciaal voor optimale dobbels timing in volatiele posities."
        }
      },
      {
        question: {
          en: "What is the concept of 'racing equity adjustment' for contact positions?",
          es: "¿Qué es el concepto de 'ajuste de equidad de carrera' para posiciones de contacto?",
          de: "Was ist das Konzept der 'Renn-Equity-Anpassung' für Kontaktpositionen?",
          nl: "Wat is het concept van 'racing equity aanpassing' voor contactposities?"
        },
        options: [
          { en: "Add/subtract equity based on contact elements beyond pure race (threats, board strength, hitting chances)", es: "Agregar/restar equidad basado en elementos de contacto más allá de la carrera pura (amenazas, fuerza del tablero, posibilidades de golpear)", de: "Equity basierend auf Kontaktelementen jenseits des reinen Rennens addieren/subtrahieren (Drohungen, Brettsstärke, Schlagchancen)", nl: "Equity toevoegen/aftrekken gebaseerd op contactelementen voorbij pure race (bedreigingen, bordsterkte, slagkansen)" },
          { en: "Converting contact positions to racing positions", es: "Convertir posiciones de contacto en posiciones de carrera", de: "Kontaktpositionen in Rennpositionen umwandeln", nl: "Contactposities omzetten naar racingposities" },
          { en: "Adjusting pip count for contact risks", es: "Ajustar el recuento de pip por riesgos de contacto", de: "Pip-Count für Kontaktrisiken anpassen", nl: "Pip count aanpassen voor contactrisico's" },
          { en: "Calculating equity after contact ends", es: "Calcular equidad después de que termine el contacto", de: "Equity nach Ende des Kontakts berechnen", nl: "Equity berekenen nadat contact eindigt" }
        ],
        correct: 0,
        explanation: {
          en: "In contact positions, you start with the racing equity (based on pip count) then adjust for contact factors: strong home board adds equity, opponent's advanced anchor subtracts equity, direct shots add/subtract based on who benefits. This gives a better estimate than pip count alone.",
          es: "En posiciones de contacto, comienzas con la equidad de carrera (basada en el recuento de pip) luego ajustas por factores de contacto: tablero interior fuerte agrega equidad, ancla avanzada del oponente resta equidad, tiros directos agregan/restan según quién se beneficia. Esto da una mejor estimación que el recuento de pip solo.",
          de: "In Kontaktpositionen beginnst du mit der Renn-Equity (basierend auf Pip-Count) und passt dann für Kontaktfaktoren an: starkes Heimfeld fügt Equity hinzu, fortgeschrittener Anker des Gegners subtrahiert Equity, direkte Shots addieren/subtrahieren je nachdem, wer profitiert. Dies gibt eine bessere Schätzung als Pip-Count allein.",
          nl: "In contactposities begin je met de racing equity (gebaseerd op pip count) en pas je vervolgens aan voor contactfactoren: sterk thuisbord voegt equity toe, gevorderd anker van tegenstander trekt equity af, directe shots voegen toe/trekken af afhankelijk van wie profiteert. Dit geeft een betere schatting dan pip count alleen."
        }
      },
      {
        question: {
          en: "What is 'match score dependency' in cube and checker play decisions?",
          es: "¿Qué es la 'dependencia de puntuación de match' en decisiones de cubo y juego de fichas?",
          de: "Was ist 'Match-Punktestand-Abhängigkeit' bei Würfel- und Spielentscheidungen?",
          nl: "Wat is 'wedstrijdscore afhankelijkheid' in dobbels- en spelbeslissingen?"
        },
        options: [
          { en: "Optimal strategy changes dramatically based on match score - same position, different play at different scores", es: "La estrategia óptima cambia dramáticamente según la puntuación del match - misma posición, juego diferente en diferentes puntuaciones", de: "Optimale Strategie ändert sich dramatisch basierend auf Match-Punktestand - gleiche Position, anderes Spiel bei verschiedenen Punkteständen", nl: "Optimale strategie verandert dramatisch op basis van wedstrijdscore - zelfde positie, ander spel bij verschillende scores" },
          { en: "How dependent you are on the score to win", es: "Qué tan dependiente eres de la puntuación para ganar", de: "Wie abhängig du vom Punktestand bist, um zu gewinnen", nl: "Hoe afhankelijk je bent van de score om te winnen" },
          { en: "The relationship between score and time remaining", es: "La relación entre puntuación y tiempo restante", de: "Die Beziehung zwischen Punktestand und verbleibender Zeit", nl: "De relatie tussen score en resterende tijd" },
          { en: "Statistical correlation between scores", es: "Correlación estadística entre puntuaciones", de: "Statistische Korrelation zwischen Punkteständen", nl: "Statistische correlatie tussen scores" }
        ],
        correct: 0,
        explanation: {
          en: "Match score dependency means the same position requires completely different plays at different match scores. For example, at DMP you ignore gammons entirely; at 2-away 4-away gammons are crucial. Both cube decisions and checker play (aggressive vs conservative) depend heavily on the current match score.",
          es: "La dependencia de puntuación de match significa que la misma posición requiere jugadas completamente diferentes en diferentes puntuaciones de match. Por ejemplo, en DMP ignoras los gammons completamente; en 2-away 4-away los gammons son cruciales. Tanto las decisiones de cubo como el juego de fichas (agresivo vs conservador) dependen fuertemente de la puntuación actual del match.",
          de: "Match-Punktestand-Abhängigkeit bedeutet, dass dieselbe Position bei verschiedenen Match-Punkteständen völlig unterschiedliche Spielzüge erfordert. Zum Beispiel ignorierst du bei DMP Gammons vollständig; bei 2-away 4-away sind Gammons entscheidend. Sowohl Würfelentscheidungen als auch Spielzüge (aggressiv vs konservativ) hängen stark vom aktuellen Match-Punktestand ab.",
          nl: "Wedstrijdscore afhankelijkheid betekent dat dezelfde positie volledig verschillende zetten vereist bij verschillende wedstrijdscores. Bijvoorbeeld, bij DMP negeer je gammons volledig; bij 2-away 4-away zijn gammons cruciaal. Zowel dobbelsbeslissingen als schijfspel (aggressief vs conservatief) hangen sterk af van de huidige wedstrijdscore."
        }
      },
      {
        question: {
          en: "What is a 'symmetric position' and why is it strategically important?",
          es: "¿Qué es una 'posición simétrica' y por qué es estratégicamente importante?",
          de: "Was ist eine 'symmetrische Position' und warum ist sie strategisch wichtig?",
          nl: "Wat is een 'symmetrische positie' en waarom is het strategisch belangrijk?"
        },
        options: [
          { en: "Mirror-image positions where whoever moves first gains/loses advantage - creates zugzwang situations", es: "Posiciones en espejo donde quien se mueve primero gana/pierde ventaja - crea situaciones de zugzwang", de: "Spiegelbildliche Positionen wo wer zuerst zieht Vorteil gewinnt/verliert - schafft Zugzwang-Situationen", nl: "Spiegelbeeld posities waar wie eerst beweegt voordeel wint/verliest - creëert zugzwang situaties" },
          { en: "Positions with equal pip counts", es: "Posiciones con recuentos de pip iguales", de: "Positionen mit gleichen Pip-Counts", nl: "Posities met gelijke pip counts" },
          { en: "Balanced positions with no advantage", es: "Posiciones equilibradas sin ventaja", de: "Ausgewogene Positionen ohne Vorteil", nl: "Gebalanceerde posities zonder voordeel" },
          { en: "Positions where both players have same board structure", es: "Posiciones donde ambos jugadores tienen la misma estructura de tablero", de: "Positionen wo beide Spieler dieselbe Brettstruktur haben", nl: "Posities waar beide spelers dezelfde bordstructuur hebben" }
        ],
        correct: 0,
        explanation: {
          en: "Symmetric positions are exact mirror images where both players have identical positions. The player on roll has advantage (or disadvantage in zugzwang). These create interesting strategic situations - in holding games, neither wants to break first. Cube decisions in symmetric positions follow special rules.",
          es: "Las posiciones simétricas son imágenes espejo exactas donde ambos jugadores tienen posiciones idénticas. El jugador en turno tiene ventaja (o desventaja en zugzwang). Estas crean situaciones estratégicas interesantes - en juegos de retención, ninguno quiere romper primero. Las decisiones de cubo en posiciones simétricas siguen reglas especiales.",
          de: "Symmetrische Positionen sind exakte Spiegelbilder, wo beide Spieler identische Positionen haben. Der Spieler am Zug hat einen Vorteil (oder Nachteil im Zugzwang). Diese schaffen interessante strategische Situationen - in Haltespielen will keiner zuerst brechen. Würfelentscheidungen in symmetrischen Positionen folgen speziellen Regeln.",
          nl: "Symmetrische posities zijn exacte spiegelbeelden waar beide spelers identieke posities hebben. De speler aan de beurt heeft voordeel (of nadeel in zugzwang). Deze creëren interessante strategische situaties - in houdspellen wil niemand als eerste breken. Dobbelsbeslissingen in symmetrische posities volgen speciale regels."
        }
      },
      {
        question: {
          en: "What is 'effective pip count' (EPC) and how is it calculated?",
          es: "¿Qué es el 'conteo efectivo de pip' (EPC) y cómo se calcula?",
          de: "Was ist 'Effektiver Pip-Count' (EPC) und wie wird er berechnet?",
          nl: "Wat is 'effectieve pip count' (EPC) en hoe wordt het berekend?"
        },
        options: [
          { en: "Pip count adjusted for crossovers and wastage - EPC = raw pips + crossovers × penalty (1-3 pips each)", es: "Conteo de pip ajustado por cruces y desperdicio - EPC = pips brutos + cruces × penalización (1-3 pips cada uno)", de: "Pip-Count angepasst für Crossovers und Verschwendung - EPC = rohe Pips + Crossovers × Strafe (1-3 Pips jeweils)", nl: "Pip count aangepast voor crossovers en verspilling - EPC = ruwe pips + crossovers × boete (1-3 pips elk)" },
          { en: "The number of effective rolls needed to win", es: "El número de tiros efectivos necesarios para ganar", de: "Die Anzahl effektiver Würfe, die zum Gewinnen benötigt werden", nl: "Het aantal effectieve worpen nodig om te winnen" },
          { en: "Pip count divided by average roll", es: "Conteo de pip dividido por tiro promedio", de: "Pip-Count geteilt durch durchschnittlichen Wurf", nl: "Pip count gedeeld door gemiddelde worp" },
          { en: "Pip count minus opponent's pip count", es: "Conteo de pip menos el conteo de pip del oponente", de: "Pip-Count minus Pip-Count des Gegners", nl: "Pip count min pip count van tegenstander" }
        ],
        correct: 0,
        explanation: {
          en: "Effective Pip Count (EPC) adjusts raw pip count for inefficiencies. Each crossover (moving checkers between quadrants) adds 1-3 pips of wastage depending on gaps and distribution. EPC gives a more accurate racing picture than simple pip count, especially when distributions differ significantly.",
          es: "El Conteo Efectivo de Pip (EPC) ajusta el conteo bruto de pip por ineficiencias. Cada cruce (mover fichas entre cuadrantes) agrega 1-3 pips de desperdicio dependiendo de huecos y distribución. EPC da una imagen más precisa de carrera que el simple conteo de pip, especialmente cuando las distribuciones difieren significativamente.",
          de: "Effektiver Pip-Count (EPC) passt rohen Pip-Count für Ineffizienzen an. Jeder Crossover (Bewegen von Steinen zwischen Quadranten) fügt 1-3 Pips Verschwendung hinzu, abhängig von Lücken und Verteilung. EPC gibt ein genaueres Rennbild als einfacher Pip-Count, besonders wenn sich Verteilungen erheblich unterscheiden.",
          nl: "Effectieve Pip Count (EPC) past ruwe pip count aan voor inefficiënties. Elke crossover (schijven verplaatsen tussen kwadranten) voegt 1-3 pips verspilling toe afhankelijk van gaten en verdeling. EPC geeft een nauwkeuriger race beeld dan simpele pip count, vooral wanneer verdelingen significant verschillen."
        }
      },
      {
        question: {
          en: "What is 'cube leverage' in backgammon?",
          es: "¿Qué es el 'apalancamiento del cubo' en backgammon?",
          de: "Was ist 'Würfel-Leverage' im Backgammon?",
          nl: "Wat is 'dobbels leverage' in backgammon?"
        },
        options: [
          { en: "The ability to create powerful redouble threats that force opponent into difficult decisions", es: "La capacidad de crear amenazas de redoblaje poderosas que fuerzan al oponente a decisiones difíciles", de: "Die Fähigkeit starke Verdopplungsdrohungen zu schaffen die Gegner zu schwierigen Entscheidungen zwingen", nl: "Het vermogen om krachtige herverdubbelingsdreigingen te creëren die tegenstander dwingen tot moeilijke beslissingen" },
          { en: "Using the cube to gain advantage", es: "Usar el cubo para ganar ventaja", de: "Den Würfel nutzen um Vorteil zu erlangen", nl: "De dobbel gebruiken om voordeel te krijgen" },
          { en: "The weight of the cube at different values", es: "El peso del cubo en diferentes valores", de: "Das Gewicht des Würfels bei verschiedenen Werten", nl: "Het gewicht van de dobbel bij verschillende waarden" },
          { en: "Doubling at the right moment", es: "Doblar en el momento correcto", de: "Im richtigen Moment verdoppeln", nl: "Verdubbelen op het juiste moment" }
        ],
        correct: 0,
        explanation: {
          en: "Cube leverage is the power to threaten efficient redoubles, creating pressure on your opponent. High leverage means you can force tough take/pass decisions. Positions with good cube leverage (volatile, improving positions) allow you to extract maximum value from cube ownership.",
          es: "El apalancamiento del cubo es el poder de amenazar con redoblajes eficientes, creando presión sobre tu oponente. Alto apalancamiento significa que puedes forzar decisiones difíciles de aceptar/pasar. Posiciones con buen apalancamiento del cubo (volátiles, mejorando posiciones) te permiten extraer el máximo valor de la propiedad del cubo.",
          de: "Würfel-Leverage ist die Macht, effiziente Verdopplungen anzudrohen und Druck auf deinen Gegner zu erzeugen. Hoher Leverage bedeutet, dass du schwierige Annahme-/Pass-Entscheidungen erzwingen kannst. Positionen mit gutem Würfel-Leverage (volatil, sich verbessernde Positionen) ermöglichen es dir, maximalen Wert aus Würfelbesitz zu extrahieren.",
          nl: "Dobbels leverage is de kracht om efficiënte herverdubbelingen te dreigen, waardoor druk op je tegenstander ontstaat. Hoge leverage betekent dat je moeilijke accepteer/pas beslissingen kunt afdwingen. Posities met goede dobbels leverage (volatiel, verbeterende posities) stellen je in staat maximale waarde te halen uit dobbelsbezit."
        }
      },
      {
        question: {
          en: "What is a 'position ID' (XG Position ID) in backgammon software?",
          es: "¿Qué es un 'ID de posición' (XG Position ID) en software de backgammon?",
          de: "Was ist eine 'Positions-ID' (XG Position ID) in Backgammon-Software?",
          nl: "Wat is een 'positie ID' (XG Position ID) in backgammon software?"
        },
        options: [
          { en: "Unique encoded string representing exact board position for sharing and database lookup", es: "Cadena codificada única que representa la posición exacta del tablero para compartir y búsqueda en base de datos", de: "Eindeutig kodierte Zeichenfolge die exakte Brettposition für Austausch und Datenbanksuche darstellt", nl: "Unieke gecodeerde string die exacte bordpositie vertegenwoordigt voor delen en database opzoeken" },
          { en: "The number assigned to each position type", es: "El número asignado a cada tipo de posición", de: "Die jedem Positionstyp zugewiesene Nummer", nl: "Het nummer toegewezen aan elk positie type" },
          { en: "Player identification in online games", es: "Identificación de jugador en juegos en línea", de: "Spieler-Identifikation in Online-Spielen", nl: "Speler identificatie in online spellen" },
          { en: "The position number in a match", es: "El número de posición en un match", de: "Die Positionsnummer in einem Match", nl: "Het positienummer in een wedstrijd" }
        ],
        correct: 0,
        explanation: {
          en: "A Position ID (like XG Position ID or GNUbg ID) is a compact encoded string that uniquely represents a backgammon position. It includes checker placement, cube value, cube owner, and match score. Used for sharing positions, database lookup, and position analysis without needing screenshots.",
          es: "Un ID de Posición (como XG Position ID o GNUbg ID) es una cadena codificada compacta que representa únicamente una posición de backgammon. Incluye ubicación de fichas, valor del cubo, propietario del cubo y puntuación del match. Usado para compartir posiciones, búsqueda en base de datos y análisis de posición sin necesidad de capturas de pantalla.",
          de: "Eine Positions-ID (wie XG Position ID oder GNUbg ID) ist eine kompakte kodierte Zeichenfolge, die eine Backgammon-Position eindeutig darstellt. Sie umfasst Steinplatzierung, Würfelwert, Würfelbesitzer und Match-Punktestand. Wird für Austausch von Positionen, Datenbanksuche und Positionsanalyse ohne Screenshots verwendet.",
          nl: "Een Positie ID (zoals XG Position ID of GNUbg ID) is een compacte gecodeerde string die een backgammon positie uniek vertegenwoordigt. Het omvat schijfplaatsing, dobbelswaarde, dobbelseigenaar en wedstrijdscore. Gebruikt voor het delen van posities, database opzoeken en positie-analyse zonder screenshots."
        }
      },
      {
        question: {
          en: "What is 'money equity' vs 'match equity'?",
          es: "¿Qué es 'equidad de dinero' vs 'equidad de match'?",
          de: "Was ist 'Geld-Equity' vs 'Match-Equity'?",
          nl: "Wat is 'geld equity' vs 'wedstrijd equity'?"
        },
        options: [
          { en: "Money equity: expected point value per game; Match equity: probability of winning the match", es: "Equidad de dinero: valor de punto esperado por juego; Equidad de match: probabilidad de ganar el match", de: "Geld-Equity: erwarteter Punktwert pro Spiel; Match-Equity: Wahrscheinlichkeit das Match zu gewinnen", nl: "Geld equity: verwachte puntwaarde per spel; Wedstrijd equity: waarschijnlijkheid om de wedstrijd te winnen" },
          { en: "Money equity is higher than match equity", es: "La equidad de dinero es mayor que la equidad de match", de: "Geld-Equity ist höher als Match-Equity", nl: "Geld equity is hoger dan wedstrijd equity" },
          { en: "Money equity for cash games, match equity for tournaments", es: "Equidad de dinero para juegos de efectivo, equidad de match para torneos", de: "Geld-Equity für Cash-Spiele, Match-Equity für Turniere", nl: "Geld equity voor cash spellen, wedstrijd equity voor toernooien" },
          { en: "They measure the same thing differently", es: "Miden lo mismo de manera diferente", de: "Sie messen dasselbe auf unterschiedliche Weise", nl: "Ze meten hetzelfde op verschillende manieren" }
        ],
        correct: 0,
        explanation: {
          en: "Money equity measures expected value in points (like +0.65 in a game). Match equity measures your probability of winning the entire match (like 72% chance to win from 3-away 4-away). They're fundamentally different: money equity is linear, match equity is non-linear due to match score effects.",
          es: "La equidad de dinero mide el valor esperado en puntos (como +0.65 en un juego). La equidad de match mide tu probabilidad de ganar el match completo (como 72% de posibilidad de ganar desde 3-away 4-away). Son fundamentalmente diferentes: la equidad de dinero es lineal, la equidad de match es no lineal debido a efectos de puntuación del match.",
          de: "Geld-Equity misst erwarteten Wert in Punkten (wie +0,65 in einem Spiel). Match-Equity misst deine Wahrscheinlichkeit, das gesamte Match zu gewinnen (wie 72% Chance zu gewinnen von 3-away 4-away). Sie sind grundlegend verschieden: Geld-Equity ist linear, Match-Equity ist nicht-linear aufgrund von Match-Punktestand-Effekten.",
          nl: "Geld equity meet verwachte waarde in punten (zoals +0.65 in een spel). Wedstrijd equity meet je waarschijnlijkheid om de hele wedstrijd te winnen (zoals 72% kans om te winnen vanaf 3-away 4-away). Ze zijn fundamenteel verschillend: geld equity is lineair, wedstrijd equity is niet-lineair vanwege wedstrijdscore effecten."
        }
      },
      {
        question: {
          en: "What is 'normalized score' in tournament reporting?",
          es: "¿Qué es la 'puntuación normalizada' en informes de torneo?",
          de: "Was ist 'Normalisierter Punktestand' in Turnierberichten?",
          nl: "Wat is 'genormaliseerde score' in toernooi rapportage?"
        },
        options: [
          { en: "Converting different match lengths to equivalent points (e.g., 7-pt match = 100, so 3-2 = 57.1)", es: "Convertir diferentes longitudes de match a puntos equivalentes (ej., match 7-pt = 100, entonces 3-2 = 57.1)", de: "Verschiedene Match-Längen in äquivalente Punkte umwandeln (z.B. 7-Punkt-Match = 100, also 3-2 = 57,1)", nl: "Verschillende wedstrijdlengtes omzetten naar equivalente punten (bijv. 7-pt wedstrijd = 100, dus 3-2 = 57.1)" },
          { en: "Adjusting scores for time zones", es: "Ajustar puntuaciones para zonas horarias", de: "Punktestände für Zeitzonen anpassen", nl: "Scores aanpassen voor tijdzones" },
          { en: "Standard scoring system for all tournaments", es: "Sistema de puntuación estándar para todos los torneos", de: "Standard-Bewertungssystem für alle Turniere", nl: "Standaard scoringssysteem voor alle toernooien" },
          { en: "Removing outlier results from statistics", es: "Eliminar resultados atípicos de las estadísticas", de: "Ausreißer-Ergebnisse aus Statistiken entfernen", nl: "Uitschieters verwijderen uit statistieken" }
        ],
        correct: 0,
        explanation: {
          en: "Normalized score converts match scores to percentages for comparison across different match lengths. A 7-point match is normalized to 100, so being up 3-2 = 42.9% for opponent, 57.1% for you. This allows comparing positions across matches of different lengths using match equity tables.",
          es: "La puntuación normalizada convierte puntuaciones de match a porcentajes para comparación entre diferentes longitudes de match. Un match de 7 puntos se normaliza a 100, entonces estar 3-2 arriba = 42.9% para oponente, 57.1% para ti. Esto permite comparar posiciones entre matches de diferentes longitudes usando tablas de equidad de match.",
          de: "Normalisierter Punktestand wandelt Match-Punktestände in Prozentsätze für Vergleich über verschiedene Match-Längen um. Ein 7-Punkt-Match wird auf 100 normalisiert, also 3-2 führen = 42,9% für Gegner, 57,1% für dich. Dies ermöglicht Vergleich von Positionen über Matches verschiedener Längen mit Match-Equity-Tabellen.",
          nl: "Genormaliseerde score zet wedstrijdscores om naar percentages voor vergelijking tussen verschillende wedstrijdlengtes. Een 7-punts wedstrijd wordt genormaliseerd naar 100, dus 3-2 voorstaan = 42.9% voor tegenstander, 57.1% voor jou. Dit maakt vergelijking van posities mogelijk tussen wedstrijden van verschillende lengtes met wedstrijd equity tabellen."
        }
      },
      {
        question: {
          en: "What is 'post-Crawford optimal strategy'?",
          es: "¿Qué es la 'estrategia óptima post-Crawford'?",
          de: "Was ist 'Post-Crawford-Optimalstrategie'?",
          nl: "Wat is 'post-Crawford optimale strategie'?"
        },
        options: [
          { en: "Trailer must win 2 games; very aggressive doubling (~55-60%) and liberal takes", es: "El rezagado debe ganar 2 juegos; doblaje muy agresivo (~55-60%) y aceptaciones liberales", de: "Nachzügler muss 2 Spiele gewinnen; sehr aggressives Verdoppeln (~55-60%) und liberale Annahmen", nl: "Achterligger moet 2 spellen winnen; zeer aggressief verdubbelen (~55-60%) en liberale acceptaties" },
          { en: "Never double in post-Crawford games", es: "Nunca doblar en juegos post-Crawford", de: "Niemals in Post-Crawford-Spielen verdoppeln", nl: "Nooit verdubbelen in post-Crawford spellen" },
          { en: "Play conservatively to protect your lead", es: "Jugar conservadoramente para proteger tu ventaja", de: "Konservativ spielen um Vorsprung zu schützen", nl: "Conservatief spelen om je voorsprong te beschermen" },
          { en: "Go for gammons aggressively", es: "Ir por gammons agresivamente", de: "Aggressiv auf Gammons gehen", nl: "Aggressief voor gammons gaan" }
        ],
        correct: 0,
        explanation: {
          en: "Post-Crawford (when the trailer is 1-away and leader is 2+ away), the trailer must win 2 consecutive games. This creates very aggressive cube action: double around 55-60% equity, take quite liberally. Both sides can use the cube effectively, unlike DMP or Crawford.",
          es: "Post-Crawford (cuando el rezagado está a 1-away y el líder a 2+ away), el rezagado debe ganar 2 juegos consecutivos. Esto crea acción de cubo muy agresiva: doblar alrededor del 55-60% de equidad, aceptar bastante liberalmente. Ambos lados pueden usar el cubo efectivamente, a diferencia de DMP o Crawford.",
          de: "Post-Crawford (wenn Nachzügler 1-away ist und Führender 2+ away), muss der Nachzügler 2 aufeinanderfolgende Spiele gewinnen. Dies schafft sehr aggressive Würfelaktionen: verdoppeln bei etwa 55-60% Equity, recht liberal annehmen. Beide Seiten können den Würfel effektiv nutzen, anders als bei DMP oder Crawford.",
          nl: "Post-Crawford (wanneer achterligger 1-away is en leider 2+ away), moet de achterligger 2 opeenvolgende spellen winnen. Dit creëert zeer aggressieve dobbelsactie: verdubbel rond 55-60% equity, accepteer vrij liberaal. Beide kanten kunnen de dobbel effectief gebruiken, in tegenstelling tot DMP of Crawford."
        }
      },
      {
        question: {
          en: "What is 'take/pass point precision' and why does it matter?",
          es: "¿Qué es la 'precisión del punto de aceptar/pasar' y por qué importa?",
          de: "Was ist 'Annahme/Pass-Punkt-Präzision' und warum ist sie wichtig?",
          nl: "Wat is 'accepteer/pas punt precisie' en waarom is het belangrijk?"
        },
        options: [
          { en: "Small errors near take/pass threshold cost significant equity - requires accurate position evaluation", es: "Pequeños errores cerca del umbral de aceptar/pasar cuestan equidad significativa - requiere evaluación precisa de posición", de: "Kleine Fehler nahe der Annahme/Pass-Schwelle kosten signifikante Equity - erfordert genaue Positionsbewertung", nl: "Kleine fouten nabij accepteer/pas drempel kosten aanzienlijke equity - vereist nauwkeurige positie evaluatie" },
          { en: "The exact moment to take or pass", es: "El momento exacto para aceptar o pasar", de: "Der genaue Moment zum Annehmen oder Passen", nl: "Het exacte moment om te accepteren of passen" },
          { en: "How precisely you can calculate equity", es: "Qué tan precisamente puedes calcular equidad", de: "Wie genau du Equity berechnen kannst", nl: "Hoe precies je equity kunt berekenen" },
          { en: "The accuracy of your cube timing", es: "La precisión de tu timing del cubo", de: "Die Genauigkeit deines Würfel-Timings", nl: "De nauwkeurigheid van je dobbels timing" }
        ],
        correct: 0,
        explanation: {
          en: "Near the take/pass threshold (around 25% winning chances in money games), small evaluation errors cause large equity swings. A position that's 24% wins should pass but 26% wins should take - being off by 2% changes the decision. This requires very precise position evaluation skills.",
          es: "Cerca del umbral de aceptar/pasar (alrededor del 25% de posibilidades de ganar en juegos de dinero), pequeños errores de evaluación causan grandes cambios de equidad. Una posición con 24% de victorias debe pasar pero 26% de victorias debe aceptar - estar 2% fuera cambia la decisión. Esto requiere habilidades de evaluación de posición muy precisas.",
          de: "Nahe der Annahme/Pass-Schwelle (etwa 25% Gewinnchancen in Geldspielen) verursachen kleine Bewertungsfehler große Equity-Schwankungen. Eine Position mit 24% Gewinnchancen sollte passen, aber 26% sollte annehmen - 2% daneben zu liegen ändert die Entscheidung. Dies erfordert sehr präzise Positionsbewertungsfähigkeiten.",
          nl: "Nabij de accepteer/pas drempel (rond 25% winkansen in geldspellen) veroorzaken kleine evaluatiefouten grote equity schommelingen. Een positie met 24% winst moet passen maar 26% winst moet accepteren - 2% ernaast zitten verandert de beslissing. Dit vereist zeer precieze positie evaluatievaardigheden."
        }
      },
      {
        question: {
          en: "What is 'skill-luck gradient' in backgammon performance?",
          es: "¿Qué es el 'gradiente de habilidad-suerte' en rendimiento de backgammon?",
          de: "Was ist 'Können-Glück-Gradient' in der Backgammon-Leistung?",
          nl: "Wat is 'vaardigheid-geluk gradiënt' in backgammon prestatie?"
        },
        options: [
          { en: "Ratio of skill impact vs luck impact - longer matches increase skill gradient", es: "Ratio de impacto de habilidad vs impacto de suerte - matches más largos aumentan gradiente de habilidad", de: "Verhältnis von Können-Einfluss vs Glück-Einfluss - längere Matches erhöhen Können-Gradient", nl: "Verhouding van vaardigheidsimpact vs geluksimpact - langere wedstrijden verhogen vaardigheid gradiënt" },
          { en: "How quickly skills improve over time", es: "Qué tan rápido mejoran las habilidades con el tiempo", de: "Wie schnell sich Fähigkeiten im Laufe der Zeit verbessern", nl: "Hoe snel vaardigheden verbeteren in de loop van de tijd" },
          { en: "The learning curve steepness", es: "La pendiente de la curva de aprendizaje", de: "Die Steilheit der Lernkurve", nl: "De steilheid van de leercurve" },
          { en: "Luck distribution across skill levels", es: "Distribución de suerte entre niveles de habilidad", de: "Glücksverteilung über Skill-Levels", nl: "Geluksverdeling over vaardigheidsniveaus" }
        ],
        correct: 0,
        explanation: {
          en: "Skill-luck gradient measures how much skill vs luck determines outcomes. In a single game, luck dominates (low skill gradient). In a 25-point match, skill dominates (high skill gradient). Understanding this helps set appropriate match lengths and manage expectations about variance.",
          es: "El gradiente de habilidad-suerte mide cuánto la habilidad vs suerte determina los resultados. En un juego único, la suerte domina (gradiente de habilidad bajo). En un match de 25 puntos, la habilidad domina (gradiente de habilidad alto). Entender esto ayuda a establecer longitudes de match apropiadas y gestionar expectativas sobre varianza.",
          de: "Können-Glück-Gradient misst, wie viel Können vs Glück Ergebnisse bestimmt. In einem einzelnen Spiel dominiert Glück (niedriger Können-Gradient). In einem 25-Punkt-Match dominiert Können (hoher Können-Gradient). Dies zu verstehen hilft, angemessene Match-Längen festzulegen und Erwartungen über Varianz zu managen.",
          nl: "Vaardigheid-geluk gradiënt meet hoeveel vaardigheid vs geluk de uitkomsten bepaalt. In een enkel spel domineert geluk (lage vaardigheid gradiënt). In een 25-punts wedstrijd domineert vaardigheid (hoge vaardigheid gradiënt). Dit begrijpen helpt geschikte wedstrijdlengtes in te stellen en verwachtingen over variantie te beheren."
        }
      },
      {
        question: {
          en: "What is 'thermometer position' analysis?",
          es: "¿Qué es el análisis de 'posición de termómetro'?",
          de: "Was ist 'Thermometer-Positions'-Analyse?",
          nl: "Wat is 'thermometer positie' analyse?"
        },
        options: [
          { en: "Positions where equity changes smoothly with each pip - useful for calibrating position evaluation", es: "Posiciones donde la equidad cambia suavemente con cada pip - útil para calibrar evaluación de posición", de: "Positionen wo sich Equity glatt mit jedem Pip ändert - nützlich zum Kalibrieren von Positionsbewertung", nl: "Posities waar equity soepel verandert met elke pip - nuttig voor het kalibreren van positie evaluatie" },
          { en: "Measuring the temperature of volatile positions", es: "Medir la temperatura de posiciones volátiles", de: "Temperatur volatiler Positionen messen", nl: "Temperatuur van volatiele posities meten" },
          { en: "Positions that heat up quickly", es: "Posiciones que se calientan rápidamente", de: "Positionen die sich schnell aufheizen", nl: "Posities die snel opwarmen" },
          { en: "Using position heat maps for analysis", es: "Usar mapas de calor de posición para análisis", de: "Positions-Heatmaps für Analyse verwenden", nl: "Positie heatmaps gebruiken voor analyse" }
        ],
        correct: 0,
        explanation: {
          en: "Thermometer positions (usually simple races) have equity that changes predictably with pip count - each pip is worth roughly the same equity. These serve as benchmarks for evaluating more complex positions. If you know a pure race equity, you can adjust for contact elements.",
          es: "Las posiciones de termómetro (generalmente carreras simples) tienen equidad que cambia predeciblemente con el conteo de pip - cada pip vale aproximadamente la misma equidad. Estas sirven como puntos de referencia para evaluar posiciones más complejas. Si conoces la equidad de una carrera pura, puedes ajustar por elementos de contacto.",
          de: "Thermometer-Positionen (normalerweise einfache Rennen) haben Equity, die vorhersagbar mit Pip-Count ändert - jeder Pip ist etwa gleich viel Equity wert. Diese dienen als Benchmarks zur Bewertung komplexerer Positionen. Wenn du reine Renn-Equity kennst, kannst du für Kontaktelemente anpassen.",
          nl: "Thermometer posities (meestal eenvoudige races) hebben equity die voorspelbaar verandert met pip count - elke pip is ongeveer dezelfde equity waard. Deze dienen als benchmarks voor het evalueren van complexere posities. Als je een zuivere race equity kent, kun je aanpassen voor contactelementen."
        }
      },
      {
        question: {
          en: "What is 'gammon price' in cube theory?",
          es: "¿Qué es el 'precio de gammon' en teoría del cubo?",
          de: "Was ist 'Gammon-Preis' in der Würfeltheorie?",
          nl: "Wat is 'gammon prijs' in dobbelstheorie?"
        },
        options: [
          { en: "The equity you sacrifice by avoiding gammon risk vs playing for best result", es: "La equidad que sacrificas al evitar riesgo de gammon vs jugar para mejor resultado", de: "Die Equity die du opferst indem du Gammon-Risiko vermeidest vs für bestes Ergebnis spielst", nl: "De equity die je opoffert door gammon risico te vermijden vs spelen voor beste resultaat" },
          { en: "The cube value when gammons are possible", es: "El valor del cubo cuando los gammons son posibles", de: "Der Würfelwert wenn Gammons möglich sind", nl: "De dobbelswaarde wanneer gammons mogelijk zijn" },
          { en: "Cost of losing a gammon", es: "Costo de perder un gammon", de: "Kosten eines Gammon-Verlusts", nl: "Kosten van het verliezen van een gammon" },
          { en: "Value of winning a gammon", es: "Valor de ganar un gammon", de: "Wert eines Gammon-Gewinns", nl: "Waarde van het winnen van een gammon" }
        ],
        correct: 0,
        explanation: {
          en: "Gammon price is the equity cost of playing safe to avoid gammon vs playing optimally for wins. At DMP, price is zero (gammons don't matter). At 2-away Crawford, price is huge (losing gammon likely ends match). This affects both cube decisions and checker play strategy.",
          es: "El precio de gammon es el costo de equidad de jugar seguro para evitar gammon vs jugar óptimamente para victorias. En DMP, el precio es cero (los gammons no importan). En 2-away Crawford, el precio es enorme (perder gammon probablemente termina el match). Esto afecta tanto decisiones de cubo como estrategia de juego de fichas.",
          de: "Gammon-Preis ist der Equity-Kosten sicher zu spielen um Gammon zu vermeiden vs optimal für Siege zu spielen. Bei DMP ist Preis null (Gammons zählen nicht). Bei 2-away Crawford ist Preis enorm (Gammon-Verlust beendet wahrscheinlich Match). Dies beeinflusst sowohl Würfelentscheidungen als auch Spielzugstrategie.",
          nl: "Gammon prijs is de equity kosten van veilig spelen om gammon te vermijden vs optimaal spelen voor overwinningen. Bij DMP is prijs nul (gammons maken niet uit). Bij 2-away Crawford is prijs enorm (gammon verliezen beëindigt waarschijnlijk wedstrijd). Dit beïnvloedt zowel dobbelsbeslissingen als schijfspel strategie."
        }
      },
      {
        question: {
          en: "What is 'checkerplay equity' vs 'cube equity' in complex positions?",
          es: "¿Qué es 'equidad de juego de fichas' vs 'equidad de cubo' en posiciones complejas?",
          de: "Was ist 'Spielzug-Equity' vs 'Würfel-Equity' in komplexen Positionen?",
          nl: "Wat is 'schijfspel equity' vs 'dobbels equity' in complexe posities?"
        },
        options: [
          { en: "Checkerplay equity: value from optimal moves; Cube equity: additional value from cube access", es: "Equidad de juego de fichas: valor de movimientos óptimos; Equidad de cubo: valor adicional del acceso al cubo", de: "Spielzug-Equity: Wert aus optimalen Zügen; Würfel-Equity: zusätzlicher Wert aus Würfelzugang", nl: "Schijfspel equity: waarde van optimale zetten; Dobbels equity: extra waarde van dobbelstoegang" },
          { en: "They are the same measurement", es: "Son la misma medición", de: "Sie sind dieselbe Messung", nl: "Ze zijn dezelfde meting" },
          { en: "Checkerplay is more important than cube", es: "El juego de fichas es más importante que el cubo", de: "Spielzug ist wichtiger als Würfel", nl: "Schijfspel is belangrijker dan dobbel" },
          { en: "Cube equity includes gammons", es: "La equidad de cubo incluye gammons", de: "Würfel-Equity beinhaltet Gammons", nl: "Dobbels equity omvat gammons" }
        ],
        correct: 0,
        explanation: {
          en: "Checkerplay equity is your position's value assuming optimal moves but no cube actions. Cube equity adds the value from optimal doubling/taking. The total equity is checkerplay equity + cube equity. Strong players maximize both - making best moves AND optimal cube decisions.",
          es: "La equidad de juego de fichas es el valor de tu posición asumiendo movimientos óptimos pero sin acciones de cubo. La equidad de cubo agrega el valor de doblar/aceptar óptimamente. La equidad total es equidad de juego de fichas + equidad de cubo. Jugadores fuertes maximizan ambas - haciendo mejores movimientos Y decisiones óptimas de cubo.",
          de: "Spielzug-Equity ist der Wert deiner Position unter Annahme optimaler Züge aber ohne Würfelaktionen. Würfel-Equity fügt den Wert aus optimalem Verdoppeln/Annehmen hinzu. Die Gesamt-Equity ist Spielzug-Equity + Würfel-Equity. Starke Spieler maximieren beides - beste Züge machen UND optimale Würfelentscheidungen.",
          nl: "Schijfspel equity is de waarde van je positie aannemend optimale zetten maar geen dobbelsacties. Dobbels equity voegt de waarde toe van optimaal verdubbelen/accepteren. De totale equity is schijfspel equity + dobbels equity. Sterke spelers maximaliseren beide - beste zetten maken EN optimale dobbelsbeslissingen."
        }
      },
      {
        question: {
          en: "What is 'live cube' vs 'dead cube' in match play?",
          es: "¿Qué es 'cubo vivo' vs 'cubo muerto' en juego de match?",
          de: "Was ist 'Lebender Würfel' vs 'Toter Würfel' im Match-Spiel?",
          nl: "Wat is 'levende dobbel' vs 'dode dobbel' in wedstrijdspel?"
        },
        options: [
          { en: "Live cube: can still be used effectively; Dead cube: no practical doubling (like DMP, or too good/bad)", es: "Cubo vivo: aún puede usarse efectivamente; Cubo muerto: no hay doblaje práctico (como DMP, o demasiado bueno/malo)", de: "Lebender Würfel: kann noch effektiv genutzt werden; Toter Würfel: kein praktisches Verdoppeln (wie DMP oder zu gut/schlecht)", nl: "Levende dobbel: kan nog effectief gebruikt worden; Dode dobbel: geen praktisch verdubbelen (zoals DMP, of te goed/slecht)" },
          { en: "Live cube is centered, dead cube is owned", es: "El cubo vivo está centrado, el cubo muerto es propiedad", de: "Lebender Würfel ist zentriert, toter Würfel ist im Besitz", nl: "Levende dobbel is gecentreerd, dode dobbel is in bezit" },
          { en: "Live cube is at 2, dead cube is at 64", es: "El cubo vivo está en 2, el cubo muerto está en 64", de: "Lebender Würfel ist bei 2, toter Würfel bei 64", nl: "Levende dobbel is op 2, dode dobbel is op 64" },
          { en: "Live cube can be turned, dead cube cannot", es: "El cubo vivo puede girarse, el cubo muerto no", de: "Lebender Würfel kann gedreht werden, toter nicht", nl: "Levende dobbel kan gedraaid worden, dode dobbel niet" }
        ],
        correct: 0,
        explanation: {
          en: "A live cube has practical doubling value remaining - both players could potentially use it effectively. A dead cube has no practical value: at DMP, nobody doubles; in blowouts, position is too good/bad to double. Dead cube positions should focus purely on winning chances, ignoring cube strategy.",
          es: "Un cubo vivo tiene valor de doblaje práctico restante - ambos jugadores podrían potencialmente usarlo efectivamente. Un cubo muerto no tiene valor práctico: en DMP, nadie dobla; en victorias aplastantes, la posición es demasiado buena/mala para doblar. Posiciones de cubo muerto deben enfocarse puramente en posibilidades de ganar, ignorando estrategia de cubo.",
          de: "Ein lebender Würfel hat noch praktischen Verdopplungswert - beide Spieler könnten ihn potenziell effektiv nutzen. Ein toter Würfel hat keinen praktischen Wert: bei DMP verdoppelt niemand; bei Überläufen ist Position zu gut/schlecht zum Verdoppeln. Tote-Würfel-Positionen sollten sich rein auf Gewinnchancen konzentrieren und Würfelstrategie ignorieren.",
          nl: "Een levende dobbel heeft nog praktische verdubbelswaarde - beide spelers kunnen hem potentieel effectief gebruiken. Een dode dobbel heeft geen praktische waarde: bij DMP verdubbelt niemand; bij verpletterende overwinningen is positie te goed/slecht om te verdubbelen. Dode dobbel posities moeten zich puur richten op winkansen, dobbelsstrategie negerend."
        }
      },
      {
        question: {
          en: "What is a 'double/take window' in backgammon?",
          es: "¿Qué es una 'ventana de doble/aceptar' en backgammon?",
          de: "Was ist ein 'Verdoppeln/Annehmen-Fenster' im Backgammon?",
          nl: "Wat is een 'verdubbel/accepteer venster' in backgammon?"
        },
        options: [
          { en: "The equity range where doubling is correct but opponent should take - core of cube theory", es: "El rango de equidad donde doblar es correcto pero el oponente debe aceptar - núcleo de teoría del cubo", de: "Der Equity-Bereich wo Verdoppeln korrekt ist aber Gegner annehmen sollte - Kern der Würfeltheorie", nl: "Het equity-bereik waar verdubbelen correct is maar tegenstander moet accepteren - kern van dobbelstheorie" },
          { en: "The time period to make cube decisions", es: "El período de tiempo para tomar decisiones de cubo", de: "Der Zeitraum für Würfelentscheidungen", nl: "De tijdsperiode om dobbelsbeslissingen te nemen" },
          { en: "When both players want to double", es: "Cuando ambos jugadores quieren doblar", de: "Wenn beide Spieler verdoppeln wollen", nl: "Wanneer beide spelers willen verdubbelen" },
          { en: "The optimal cube value range", es: "El rango óptimo de valor del cubo", de: "Der optimale Würfelwertbereich", nl: "Het optimale dobbelswaarde bereik" }
        ],
        correct: 0,
        explanation: {
          en: "The double/take window is the equity range between the minimal doubling point and the opponent's last take point. In this window, you should double, and opponent should take. Understanding this window (typically around 50-75% wins in money games) is fundamental to cube theory.",
          es: "La ventana de doble/aceptar es el rango de equidad entre el punto mínimo de doblaje y el último punto de aceptación del oponente. En esta ventana, debes doblar, y el oponente debe aceptar. Entender esta ventana (típicamente alrededor del 50-75% de victorias en juegos de dinero) es fundamental para la teoría del cubo.",
          de: "Das Verdoppeln/Annehmen-Fenster ist der Equity-Bereich zwischen dem minimalen Verdopplungspunkt und dem letzten Annahmepunkt des Gegners. In diesem Fenster solltest du verdoppeln und Gegner sollte annehmen. Dieses Fenster zu verstehen (typisch etwa 50-75% Siege in Geldspielen) ist grundlegend für Würfeltheorie.",
          nl: "Het verdubbel/accepteer venster is het equity-bereik tussen het minimale verdubbelpunt en het laatste acceptatiepunt van tegenstander. In dit venster moet je verdubbelen, en tegenstander moet accepteren. Dit venster begrijpen (meestal rond 50-75% overwinningen in geldspellen) is fundamenteel voor dobbelstheorie."
        }
      },
      {
        question: {
          en: "What is 'equity distribution' in rollout analysis?",
          es: "¿Qué es la 'distribución de equidad' en análisis de rollout?",
          de: "Was ist 'Equity-Verteilung' in der Rollout-Analyse?",
          nl: "Wat is 'equity distributie' in rollout analyse?"
        },
        options: [
          { en: "The spread of possible outcomes (win/gammon/backgammon percentages) from rollouts", es: "La dispersión de resultados posibles (porcentajes de victoria/gammon/backgammon) de rollouts", de: "Die Streuung möglicher Ergebnisse (Sieg/Gammon/Backgammon-Prozentsätze) aus Rollouts", nl: "De spreiding van mogelijke uitkomsten (winst/gammon/backgammon percentages) uit rollouts" },
          { en: "How equity is shared between players", es: "Cómo se comparte la equidad entre jugadores", de: "Wie Equity zwischen Spielern geteilt wird", nl: "Hoe equity wordt gedeeld tussen spelers" },
          { en: "The allocation of computation time", es: "La asignación de tiempo de cómputo", de: "Die Zuweisung der Rechenzeit", nl: "De toewijzing van rekentijd" },
          { en: "Geographic distribution of equity values", es: "Distribución geográfica de valores de equidad", de: "Geografische Verteilung von Equity-Werten", nl: "Geografische distributie van equity waarden" }
        ],
        correct: 0,
        explanation: {
          en: "Equity distribution shows the breakdown of outcomes: what percentage of rollout trials result in wins, gammons, backgammons (for both sides). This helps understand position volatility and risk - two positions with same average equity can have very different distributions (safe vs risky).",
          es: "La distribución de equidad muestra el desglose de resultados: qué porcentaje de pruebas de rollout resultan en victorias, gammons, backgammons (para ambos lados). Esto ayuda a entender volatilidad y riesgo de posición - dos posiciones con la misma equidad promedio pueden tener distribuciones muy diferentes (segura vs arriesgada).",
          de: "Equity-Verteilung zeigt die Aufschlüsselung der Ergebnisse: welcher Prozentsatz der Rollout-Versuche in Siegen, Gammons, Backgammons (für beide Seiten) resultiert. Dies hilft, Positions-Volatilität und Risiko zu verstehen - zwei Positionen mit gleicher durchschnittlicher Equity können sehr unterschiedliche Verteilungen haben (sicher vs riskant).",
          nl: "Equity distributie toont de uitsplitsing van uitkomsten: welk percentage van rollout proeven resulteren in overwinningen, gammons, backgammons (voor beide kanten). Dit helpt positie volatiliteit en risico te begrijpen - twee posities met dezelfde gemiddelde equity kunnen zeer verschillende distributies hebben (veilig vs risicovol)."
        }
      },
      {
        question: {
          en: "What is 'cubeless equity' vs 'cubeful equity'?",
          es: "¿Qué es 'equidad sin cubo' vs 'equidad con cubo'?",
          de: "Was ist 'Würfellose Equity' vs 'Würfelvolle Equity'?",
          nl: "Wat is 'dobbelsloos equity' vs 'dobbelsvol equity'?"
        },
        options: [
          { en: "Cubeless: evaluation assuming no cube exists; Cubeful: includes optimal cube actions", es: "Sin cubo: evaluación asumiendo que no existe cubo; Con cubo: incluye acciones óptimas de cubo", de: "Würfellos: Bewertung unter Annahme dass kein Würfel existiert; Würfelvoll: beinhaltet optimale Würfelaktionen", nl: "Dobbelsloos: evaluatie aannemend dat geen dobbel bestaat; Dobbelsvol: omvat optimale dobbelsacties" },
          { en: "Cubeless is more accurate than cubeful", es: "Sin cubo es más preciso que con cubo", de: "Würfellos ist genauer als würfelvoll", nl: "Dobbelsloos is nauwkeuriger dan dobbelsvol" },
          { en: "Cubeless ignores gammons", es: "Sin cubo ignora gammons", de: "Würfellos ignoriert Gammons", nl: "Dobbelsloos negeert gammons" },
          { en: "They measure different aspects", es: "Miden aspectos diferentes", de: "Sie messen verschiedene Aspekte", nl: "Ze meten verschillende aspecten" }
        ],
        correct: 0,
        explanation: {
          en: "Cubeless equity evaluates positions as if the doubling cube doesn't exist - just raw winning chances. Cubeful equity assumes both players make optimal cube decisions (doubling, taking, passing). Cubeful is always higher for the favored player due to cube leverage. Modern bots report both values.",
          es: "La equidad sin cubo evalúa posiciones como si el cubo de doblaje no existiera - solo posibilidades brutas de ganar. La equidad con cubo asume que ambos jugadores toman decisiones óptimas de cubo (doblar, aceptar, pasar). Con cubo siempre es mayor para el jugador favorecido debido al apalancamiento del cubo. Los bots modernos reportan ambos valores.",
          de: "Würfellose Equity bewertet Positionen als ob der Verdopplungswürfel nicht existiert - nur rohe Gewinnchancen. Würfelvolle Equity nimmt an, dass beide Spieler optimale Würfelentscheidungen treffen (Verdoppeln, Annehmen, Passen). Würfelvoll ist immer höher für den favorisierten Spieler aufgrund von Würfel-Leverage. Moderne Bots berichten beide Werte.",
          nl: "Dobbelsloos equity evalueert posities alsof de verdubbeldobbel niet bestaat - alleen ruwe winkansen. Dobbelsvol equity veronderstelt dat beide spelers optimale dobbelsbeslissingen nemen (verdubbelen, accepteren, passen). Dobbelsvol is altijd hoger voor de favoriete speler vanwege dobbels leverage. Moderne bots rapporteren beide waarden."
        }
      },
      {
        question: {
          en: "What is 'optimal strategy' in backgammon AI context?",
          es: "¿Qué es la 'estrategia óptima' en el contexto de IA de backgammon?",
          de: "Was ist 'Optimale Strategie' im Backgammon-KI-Kontext?",
          nl: "Wat is 'optimale strategie' in backgammon AI context?"
        },
        options: [
          { en: "Playing to maximize expected value (equity) using perfect evaluation and rollouts", es: "Jugar para maximizar valor esperado (equidad) usando evaluación perfecta y rollouts", de: "Spielen um erwarteten Wert (Equity) zu maximieren mit perfekter Bewertung und Rollouts", nl: "Spelen om verwachte waarde (equity) te maximaliseren met perfecte evaluatie en rollouts" },
          { en: "The best known strategy by human players", es: "La mejor estrategia conocida por jugadores humanos", de: "Die beste bekannte Strategie von menschlichen Spielern", nl: "De best bekende strategie door menselijke spelers" },
          { en: "Always doubling when ahead", es: "Siempre doblar cuando vas adelante", de: "Immer verdoppeln wenn man führt", nl: "Altijd verdubbelen wanneer voor" },
          { en: "Following opening book theory", es: "Seguir teoría de libro de aperturas", de: "Eröffnungsbuch-Theorie folgen", nl: "Openingsboek theorie volgen" }
        ],
        correct: 0,
        explanation: {
          en: "In AI, optimal strategy means making the move/cube decision that maximizes expected equity, determined by neural network evaluation and rollouts. Modern bots like XG and GNUbg play near-optimal strategy, better than any human. Optimal doesn't mean winning every game - it means maximizing long-term expectation.",
          es: "En IA, estrategia óptima significa tomar la decisión de movimiento/cubo que maximiza la equidad esperada, determinada por evaluación de red neuronal y rollouts. Bots modernos como XG y GNUbg juegan cerca de estrategia óptima, mejor que cualquier humano. Óptimo no significa ganar cada juego - significa maximizar expectativa a largo plazo.",
          de: "In KI bedeutet optimale Strategie, die Zug-/Würfelentscheidung zu treffen, die erwartete Equity maximiert, bestimmt durch neuronale Netzwerkbewertung und Rollouts. Moderne Bots wie XG und GNUbg spielen nahe optimaler Strategie, besser als jeder Mensch. Optimal bedeutet nicht jedes Spiel zu gewinnen - es bedeutet langfristige Erwartung zu maximieren.",
          nl: "In AI betekent optimale strategie de zet/dobbel beslissing maken die verwachte equity maximaliseert, bepaald door neuraal netwerk evaluatie en rollouts. Moderne bots zoals XG en GNUbg spelen bijna optimale strategie, beter dan enige mens. Optimaal betekent niet elk spel winnen - het betekent langetermijnverwachting maximaliseren."
        }
      },
      {
        question: {
          en: "What is 'variance reduction' in rollout methodology?",
          es: "¿Qué es la 'reducción de varianza' en metodología de rollout?",
          de: "Was ist 'Varianzreduktion' in der Rollout-Methodik?",
          nl: "Wat is 'variantie reductie' in rollout methodologie?"
        },
        options: [
          { en: "Techniques to get more reliable results with fewer trials (truncation, quasi-random seeds)", es: "Técnicas para obtener resultados más confiables con menos pruebas (truncación, semillas cuasi-aleatorias)", de: "Techniken um zuverlässigere Ergebnisse mit weniger Versuchen zu erhalten (Trunkierung, Quasi-Zufalls-Seeds)", nl: "Technieken om betrouwbaardere resultaten te krijgen met minder proeven (afkapping, quasi-willekeurige seeds)" },
          { en: "Reducing the number of rollouts needed", es: "Reducir el número de rollouts necesarios", de: "Die Anzahl benötigter Rollouts reduzieren", nl: "Het aantal benodigde rollouts verminderen" },
          { en: "Making positions less volatile", es: "Hacer posiciones menos volátiles", de: "Positionen weniger volatil machen", nl: "Posities minder volatiel maken" },
          { en: "Decreasing the luck factor", es: "Disminuir el factor suerte", de: "Glücksfaktor verringern", nl: "Geluksfactor verminderen" }
        ],
        correct: 0,
        explanation: {
          en: "Variance reduction uses statistical techniques to get more accurate rollout results with fewer trials. Methods include truncation (stopping losing trials early), quasi-random dice sequences (ensuring representative samples), and stratified sampling. This makes rollouts faster while maintaining accuracy.",
          es: "La reducción de varianza usa técnicas estadísticas para obtener resultados de rollout más precisos con menos pruebas. Los métodos incluyen truncación (detener pruebas perdedoras temprano), secuencias de dados cuasi-aleatorias (asegurando muestras representativas) y muestreo estratificado. Esto hace que los rollouts sean más rápidos mientras se mantiene la precisión.",
          de: "Varianzreduktion nutzt statistische Techniken um genauere Rollout-Ergebnisse mit weniger Versuchen zu erhalten. Methoden umfassen Trunkierung (Verlustversuche früh stoppen), Quasi-Zufalls-Würfelsequenzen (repräsentative Stichproben sicherstellen) und geschichtete Stichprobenentnahme. Dies macht Rollouts schneller bei Beibehaltung der Genauigkeit.",
          nl: "Variantie reductie gebruikt statistische technieken om nauwkeurigere rollout resultaten te krijgen met minder proeven. Methoden omvatten afkapping (verliezende proeven vroeg stoppen), quasi-willekeurige dobbelsteenreeksen (representatieve steekproeven verzekeren) en gestratificeerde bemonstering. Dit maakt rollouts sneller terwijl nauwkeurigheid behouden blijft."
        }
      }
    ]
  };

  // Export for use in the quiz application
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level8;
  } else if (typeof window !== 'undefined') {
    window.level8 = level8;
  }
})();
    ]
  };

  // Export for use in the quiz application
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level8;
  } else if (typeof window !== 'undefined') {
    window.level8 = level8;
  }
})();
