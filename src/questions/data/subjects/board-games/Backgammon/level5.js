// Backgammon Quiz - Level 5: Master
(function() {
  const level5 = {
    name: {
      en: "Backgammon - Master",
      es: "Backgammon - Maestro",
      de: "Backgammon - Meister",
      nl: "Backgammon - Meester"
    },
    questions: [
      {
        question: {
          en: "What is 'duplication' in backgammon strategy?",
          es: "¿Qué es la 'duplicación' en la estrategia de backgammon?",
          de: "Was ist 'Duplikation' in der Backgammon-Strategie?",
          nl: "Wat is 'duplicatie' in backgammon strategie?"
        },
        options: [
          { en: "Positioning so opponent needs same numbers for multiple tasks", es: "Posicionar para que el oponente necesite los mismos números para múltiples tareas", de: "Positionieren damit Gegner dieselben Zahlen für mehrere Aufgaben benötigt", nl: "Positioneren zodat tegenstander dezelfde nummers nodig heeft voor meerdere taken" },
          { en: "Making duplicate points", es: "Hacer puntos duplicados", de: "Doppelte Punkte machen", nl: "Dubbele punten maken" },
          { en: "Double roll strategy", es: "Estrategia de doble tirada", de: "Doppelwurf-Strategie", nl: "Dubbele worp strategie" },
          { en: "Two checker stacks", es: "Dos pilas de fichas", de: "Zwei Steinstapel", nl: "Twee steenstapels" }
        ],
        correct: 0,
        explanation: {
          en: "Duplication means positioning checkers so your opponent needs the same dice numbers for different purposes. For example, if they need 6s to both hit your blot AND escape a back checker, their effective hitting numbers are reduced because the 6 is 'duplicated' across both tasks.",
          es: "La duplicación significa posicionar fichas para que tu oponente necesite los mismos números de dados para diferentes propósitos. Por ejemplo, si necesitan 6s tanto para golpear tu blot COMO para escapar una ficha trasera, sus números de golpe efectivos se reducen porque el 6 está 'duplicado' en ambas tareas.",
          de: "Duplikation bedeutet Steine so zu positionieren dass Ihr Gegner dieselben Würfelzahlen für verschiedene Zwecke benötigt. Zum Beispiel wenn sie 6en benötigen um sowohl Ihren Blot zu schlagen ALS AUCH einen hinteren Stein entkommen zu lassen, werden ihre effektiven Trefferzahlen reduziert weil die 6 über beide Aufgaben 'dupliziert' ist.",
          nl: "Duplicatie betekent stenen zo positioneren dat je tegenstander dezelfde dobbelsteennummers nodig heeft voor verschillende doeleinden. Bijvoorbeeld, als ze 6en nodig hebben om zowel je blot te raken ALS een achterste steen te laten ontsnappen, worden hun effectieve raaknummers verminderd omdat de 6 'gedupliceerd' is over beide taken."
        }
      },
      {
        question: {
          en: "When should you consider doubling in a race position?",
          es: "¿Cuándo deberías considerar doblar en una posición de carrera?",
          de: "Wann sollten Sie in einer Rennposition verdoppeln?",
          nl: "Wanneer moet je overwegen te verdubbelen in een race positie?"
        },
        options: [
          { en: "When ahead by about 8-10% in pip count", es: "Cuando estás adelante por aproximadamente 8-10% en conteo de pips", de: "Wenn Sie etwa 8-10% im Pip-Count vorne liegen", nl: "Wanneer je ongeveer 8-10% voorligt in pip count" },
          { en: "When exactly equal", es: "Cuando están exactamente iguales", de: "Wenn genau gleich", nl: "Wanneer exact gelijk" },
          { en: "When behind", es: "Cuando estás atrás", de: "Wenn Sie hinten liegen", nl: "Wanneer achter" },
          { en: "Never double in races", es: "Nunca doblar en carreras", de: "Niemals in Rennen verdoppeln", nl: "Nooit verdubbelen in races" }
        ],
        correct: 0,
        explanation: {
          en: "In pure racing positions with no contact, you should double when you're ahead by roughly 8-10% of the race (typically 10-12 pips in a 120-pip race). This is because racing positions have high cube efficiency - your advantage translates directly into winning chances.",
          es: "En posiciones de carrera pura sin contacto, debes doblar cuando estás adelante por aproximadamente 8-10% de la carrera (típicamente 10-12 pips en una carrera de 120 pips). Esto es porque las posiciones de carrera tienen alta eficiencia de cubo - tu ventaja se traduce directamente en posibilidades de ganar.",
          de: "In reinen Rennpositionen ohne Kontakt sollten Sie verdoppeln wenn Sie etwa 8-10% des Rennens vorne liegen (typischerweise 10-12 Pips in einem 120-Pip-Rennen). Dies liegt daran dass Rennpositionen hohe Würfeleffizienz haben - Ihr Vorteil übersetzt sich direkt in Gewinnchancen.",
          nl: "In pure race posities zonder contact moet je verdubbelen wanneer je ongeveer 8-10% van de race voorligt (typisch 10-12 pips in een 120-pip race). Dit komt omdat race posities hoge dobbelsteenefficiëntie hebben - je voordeel vertaalt zich direct naar winkansen."
        }
      },
      {
        question: {
          en: "What is 'checker play' vs 'cube play'?",
          es: "¿Qué es 'juego de fichas' vs 'juego de cubo'?",
          de: "Was ist 'Steinspiel' vs 'Würfelspiel'?",
          nl: "Wat is 'steenspel' vs 'dobbelsteenspel'?"
        },
        options: [
          { en: "Checker play: moving pieces; Cube play: doubling decisions", es: "Juego de fichas: mover piezas; Juego de cubo: decisiones de doblaje", de: "Steinspiel: Steine bewegen; Würfelspiel: Verdopplungsentscheidungen", nl: "Steenspel: stukken bewegen; Dobbelsteenspel: verdubbelbeslissingen" },
          { en: "Same thing different names", es: "Misma cosa nombres diferentes", de: "Dasselbe verschiedene Namen", nl: "Hetzelfde verschillende namen" },
          { en: "Checker play: beginners; Cube play: experts", es: "Juego de fichas: principiantes; Juego de cubo: expertos", de: "Steinspiel: Anfänger; Würfelspiel: Experten", nl: "Steenspel: beginners; Dobbelsteenspel: experts" },
          { en: "Different game variants", es: "Diferentes variantes de juego", de: "Verschiedene Spielvarianten", nl: "Verschillende spelvarianten" }
        ],
        correct: 0,
        explanation: {
          en: "Checker play refers to the skill of moving your checkers optimally each turn - deciding which checkers to move and where. Cube play refers to decisions about the doubling cube - when to double, when to accept or pass. Both skills are essential for strong backgammon play.",
          es: "El juego de fichas se refiere a la habilidad de mover tus fichas óptimamente cada turno - decidir qué fichas mover y dónde. El juego de cubo se refiere a decisiones sobre el cubo de doblar - cuándo doblar, cuándo aceptar o pasar. Ambas habilidades son esenciales para un juego fuerte de backgammon.",
          de: "Steinspiel bezieht sich auf die Fähigkeit Ihre Steine optimal zu bewegen jeden Zug - zu entscheiden welche Steine zu bewegen und wohin. Würfelspiel bezieht sich auf Entscheidungen über den Dopplungswürfel - wann verdoppeln, wann annehmen oder passen. Beide Fähigkeiten sind wesentlich für starkes Backgammon-Spiel.",
          nl: "Steenspel verwijst naar de vaardigheid om je stenen optimaal te bewegen elke beurt - beslissen welke stenen te bewegen en waar. Dobbelsteenspel verwijst naar beslissingen over de verdubbeldobbelsteen - wanneer te verdubbelen, wanneer te accepteren of passen. Beide vaardigheden zijn essentieel voor sterk backgammon spel."
        }
      },
      {
        question: {
          en: "What is an 'anchor game' strategy?",
          es: "¿Qué es una estrategia de 'juego de ancla'?",
          de: "Was ist eine 'Anker-Spiel'-Strategie?",
          nl: "Wat is een 'anker spel' strategie?"
        },
        options: [
          { en: "Maintaining one strong anchor while building your board", es: "Mantener un ancla fuerte mientras construyes tu tablero", de: "Einen starken Anker halten während Sie Ihr Brett aufbauen", nl: "Eén sterk anker behouden terwijl je je bord bouwt" },
          { en: "Making all points anchors", es: "Hacer todos los puntos anclas", de: "Alle Punkte zu Ankern machen", nl: "Alle punten ankers maken" },
          { en: "Never making anchors", es: "Nunca hacer anclas", de: "Niemals Anker machen", nl: "Nooit ankers maken" },
          { en: "Only defensive play", es: "Solo juego defensivo", de: "Nur defensives Spiel", nl: "Alleen defensief spel" }
        ],
        correct: 0,
        explanation: {
          en: "An anchor game involves establishing and maintaining one solid anchor (usually the opponent's 4-point or 5-point) while building your home board. This balanced strategy gives you defensive security while you wait for a hitting opportunity. It's particularly effective when you're slightly behind in the race.",
          es: "Un juego de ancla implica establecer y mantener un ancla sólida (usualmente el punto 4 o 5 del oponente) mientras construyes tu tablero de casa. Esta estrategia equilibrada te da seguridad defensiva mientras esperas una oportunidad de golpear. Es particularmente efectiva cuando estás ligeramente atrás en la carrera.",
          de: "Ein Anker-Spiel beinhaltet das Etablieren und Halten eines soliden Ankers (normalerweise der 4-Punkt oder 5-Punkt des Gegners) während Sie Ihr Heimfeld aufbauen. Diese ausgewogene Strategie gibt Ihnen defensive Sicherheit während Sie auf eine Treffergelegenheit warten. Es ist besonders effektiv wenn Sie im Rennen leicht zurückliegen.",
          nl: "Een anker spel houdt in dat je één solide anker (meestal het 4-punt of 5-punt van de tegenstander) vestigt en behoudt terwijl je je thuisbord bouwt. Deze gebalanceerde strategie geeft je defensieve veiligheid terwijl je wacht op een raakkans. Het is bijzonder effectief wanneer je iets achterligt in de race."
        }
      },
      {
        question: {
          en: "What is 'priming strategy'?",
          es: "¿Qué es la 'estrategia de prima'?",
          de: "Was ist 'Prime-Strategie'?",
          nl: "Wat is 'prime strategie'?"
        },
        options: [
          { en: "Building consecutive points to block opponent's movement", es: "Construir puntos consecutivos para bloquear el movimiento del oponente", de: "Aufeinanderfolgende Punkte aufbauen um Bewegung des Gegners zu blockieren", nl: "Opeenvolgende punten bouwen om beweging van tegenstander te blokkeren" },
          { en: "Playing in prime time", es: "Jugar en horario estelar", de: "Zur Hauptsendezeit spielen", nl: "Spelen tijdens prime time" },
          { en: "First move advantage", es: "Ventaja de primer movimiento", de: "Erster-Zug-Vorteil", nl: "Eerste zet voordeel" },
          { en: "Prime number strategy", es: "Estrategia de números primos", de: "Primzahl-Strategie", nl: "Priemgetal strategie" }
        ],
        correct: 0,
        explanation: {
          en: "Priming strategy focuses on building consecutive points (usually 4, 5, or 6 in a row) to block your opponent's back checkers from escaping. A strong prime (5+ consecutive points) severely limits their movement options and puts you in control. The ultimate goal is often a full 6-point prime.",
          es: "La estrategia de prima se centra en construir puntos consecutivos (usualmente 4, 5 o 6 en fila) para bloquear que las fichas traseras de tu oponente escapen. Una prima fuerte (5+ puntos consecutivos) limita severamente sus opciones de movimiento y te pone en control. El objetivo final es a menudo una prima completa de 6 puntos.",
          de: "Prime-Strategie konzentriert sich auf das Aufbauen aufeinanderfolgender Punkte (normalerweise 4, 5 oder 6 in Folge) um die hinteren Steine Ihres Gegners am Entkommen zu hindern. Ein starkes Prime (5+ aufeinanderfolgende Punkte) schränkt ihre Bewegungsoptionen stark ein und gibt Ihnen Kontrolle. Das ultimative Ziel ist oft ein volles 6-Punkt-Prime.",
          nl: "Prime strategie richt zich op het bouwen van opeenvolgende punten (meestal 4, 5 of 6 op rij) om de achterste stenen van je tegenstander te blokkeren van ontsnappen. Een sterke prime (5+ opeenvolgende punten) beperkt hun bewegingsopties sterk en geeft je controle. Het ultieme doel is vaak een volledige 6-punts prime."
        }
      },
      {
        question: {
          en: "What is 'blitzing'?",
          es: "¿Qué es 'blitzing'?",
          de: "Was ist 'Blitzen'?",
          nl: "Wat is 'blitsen'?"
        },
        options: [
          { en: "Aggressive attack trying to close out opponent quickly", es: "Ataque agresivo tratando de cerrar al oponente rápidamente", de: "Aggressiver Angriff der versucht Gegner schnell auszusperren", nl: "Agressieve aanval die probeert tegenstander snel te sluiten" },
          { en: "Fast dice rolling", es: "Lanzamiento rápido de dados", de: "Schnelles Würfeln", nl: "Snel dobbelstenen gooien" },
          { en: "Lightning quick moves", es: "Movimientos rápidos como relámpago", de: "Blitzschnelle Züge", nl: "Bliksemsnelle zetten" },
          { en: "Tournament speed play", es: "Juego de velocidad de torneo", de: "Turnier-Schnellspiel", nl: "Toernooi snelheid spel" }
        ],
        correct: 0,
        explanation: {
          en: "A blitz is an aggressive attacking strategy where you try to hit multiple opponent checkers and close out your home board quickly to prevent them from entering. It requires hitting checkers, making home board points rapidly, and maintaining the attack. Blitzes are high-risk, high-reward plays.",
          es: "Un blitz es una estrategia de ataque agresiva donde intentas golpear múltiples fichas del oponente y cerrar tu tablero de casa rápidamente para evitar que entren. Requiere golpear fichas, hacer puntos de tablero de casa rápidamente y mantener el ataque. Los blitzes son jugadas de alto riesgo, alta recompensa.",
          de: "Ein Blitz ist eine aggressive Angriffsstrategie bei der Sie versuchen mehrere gegnerische Steine zu schlagen und Ihr Heimfeld schnell zu schließen um sie am Eintreten zu hindern. Es erfordert Steine zu schlagen, schnell Heimfeld-Punkte zu machen und den Angriff aufrechtzuerhalten. Blitze sind Hochrisiko-Hochgewinn-Spielzüge.",
          nl: "Een blitz is een aggressieve aanvalsstrategie waarbij je probeert meerdere stenen van de tegenstander te raken en je thuisbord snel te sluiten om te voorkomen dat ze binnen komen. Het vereist stenen raken, snel thuisbord punten maken en de aanval behouden. Blitzes zijn hoog-risico, hoog-beloning spelen."
        }
      },
      {
        question: {
          en: "What does 'owning the cube' mean?",
          es: "¿Qué significa 'poseer el cubo'?",
          de: "Was bedeutet 'den Würfel besitzen'?",
          nl: "Wat betekent 'de dobbelsteen bezitten'?"
        },
        options: [
          { en: "Having exclusive right to redouble after accepting", es: "Tener derecho exclusivo de redoblar después de aceptar", de: "Exklusives Recht zum Rückverdoppeln nach Annahme haben", nl: "Exclusief recht hebben om te herverdubbelen na acceptatie" },
          { en: "Physically holding the cube", es: "Sostener físicamente el cubo", de: "Den Würfel physisch halten", nl: "De dobbelsteen fysiek vasthouden" },
          { en: "Buying the equipment", es: "Comprar el equipo", de: "Die Ausrüstung kaufen", nl: "De uitrusting kopen" },
          { en: "Winning the cube auction", es: "Ganar la subasta del cubo", de: "Die Würfel-Auktion gewinnen", nl: "De dobbelsteenveiling winnen" }
        ],
        correct: 0,
        explanation: {
          en: "Owning the cube means having the exclusive right to offer the next double. When you accept your opponent's double, the cube moves to your side at double value and you now own it - only you can redouble. Cube ownership is valuable because it gives you leverage and control over future doubling decisions.",
          es: "Poseer el cubo significa tener el derecho exclusivo de ofrecer el siguiente doble. Cuando aceptas el doble de tu oponente, el cubo se mueve a tu lado al doble de valor y ahora lo posees - solo tú puedes redoblar. La propiedad del cubo es valiosa porque te da apalancamiento y control sobre futuras decisiones de doblaje.",
          de: "Den Würfel besitzen bedeutet das exklusive Recht zu haben das nächste Doppeln anzubieten. Wenn Sie das Doppeln Ihres Gegners annehmen bewegt sich der Würfel zu Ihrer Seite mit doppeltem Wert und Sie besitzen ihn jetzt - nur Sie können rückverdoppeln. Würfelbesitz ist wertvoll weil er Ihnen Hebelwirkung und Kontrolle über zukünftige Verdopplungsentscheidungen gibt.",
          nl: "De dobbelsteen bezitten betekent het exclusieve recht hebben om de volgende verdubbeling aan te bieden. Wanneer je de verdubbeling van je tegenstander accepteert, beweegt de dobbelsteen naar jouw kant met dubbele waarde en je bezit het nu - alleen jij kunt herverdubbelen. Dobbelsteenbezit is waardevol omdat het je hefboomwerking en controle geeft over toekomstige verdubbelbeslissingen."
        }
      },
      {
        question: {
          en: "What is 'breaking contact'?",
          es: "¿Qué es 'romper contacto'?",
          de: "Was ist 'Kontakt brechen'?",
          nl: "Wat is 'contact verbreken'?"
        },
        options: [
          { en: "Moving all checkers past opponent to create pure race", es: "Mover todas las fichas más allá del oponente para crear una carrera pura", de: "Alle Steine am Gegner vorbeibewegen um reines Rennen zu schaffen", nl: "Alle stenen voorbij tegenstander bewegen om pure race te creëren" },
          { en: "Disconnecting from game", es: "Desconectarse del juego", de: "Vom Spiel trennen", nl: "Loskoppelen van spel" },
          { en: "Removing anchors", es: "Quitar anclas", de: "Anker entfernen", nl: "Ankers verwijderen" },
          { en: "Stopping communication", es: "Detener comunicación", de: "Kommunikation stoppen", nl: "Communicatie stoppen" }
        ],
        correct: 0,
        explanation: {
          en: "Breaking contact means maneuvering so all of your checkers pass all of your opponent's checkers, transitioning from a contact position to a pure race. This is desirable when you're ahead in the pip count because it eliminates their hitting chances. However, if you're behind, maintaining contact gives you chances to hit and catch up.",
          es: "Romper contacto significa maniobrar para que todas tus fichas pasen todas las fichas de tu oponente, transitando de una posición de contacto a una carrera pura. Esto es deseable cuando estás adelante en el conteo de pips porque elimina sus posibilidades de golpear. Sin embargo, si estás atrás, mantener contacto te da oportunidades de golpear y recuperarte.",
          de: "Kontakt brechen bedeutet so zu manövrieren dass alle Ihre Steine alle Steine Ihres Gegners passieren, von einer Kontaktposition zu einem reinen Rennen übergehend. Dies ist wünschenswert wenn Sie im Pip-Count vorne liegen weil es ihre Treffermöglichkeiten eliminiert. Jedoch wenn Sie hinten liegen gibt Ihnen Kontakt halten Chancen zu treffen und aufzuholen.",
          nl: "Contact verbreken betekent manoeuvreren zodat al je stenen alle stenen van je tegenstander passeren, overgaand van een contact positie naar een pure race. Dit is wenselijk wanneer je voorligt in de pip count omdat het hun raakkansen elimineert. Echter, als je achterligt, geeft contact behouden je kansen om te raken en in te halen."
        }
      },
      {
        question: {
          en: "What is 'market loss' in doubling decisions?",
          es: "¿Qué es 'pérdida de mercado' en decisiones de doblaje?",
          de: "Was ist 'Marktverlust' bei Verdopplungsentscheidungen?",
          nl: "Wat is 'marktverlies' bij verdubbelbeslissingen?"
        },
        options: [
          { en: "Risk that position improves so much opponent passes later double", es: "Riesgo de que la posición mejore tanto que el oponente pase un doble posterior", de: "Risiko dass Position sich so verbessert dass Gegner späteres Doppeln passt", nl: "Risico dat positie zoveel verbetert dat tegenstander latere verdubbeling past" },
          { en: "Losing money in stock market", es: "Perder dinero en bolsa", de: "Geld am Aktienmarkt verlieren", nl: "Geld verliezen op beurs" },
          { en: "Cube decreasing in value", es: "Cubo disminuyendo en valor", de: "Würfel verliert an Wert", nl: "Dobbelsteen dalend in waarde" },
          { en: "Economic downturn affecting game", es: "Recesión económica afectando juego", de: "Wirtschaftsabschwung beeinflusst Spiel", nl: "Economische neergang beïnvloedt spel" }
        ],
        correct: 0,
        explanation: {
          en: "Market loss occurs when your position might improve dramatically on good rolls, making your opponent's take become a pass. To prevent losing the opportunity to double profitably, you double now before you lose your market - even though waiting might give you a bigger advantage. This is a key cube concept.",
          es: "La pérdida de mercado ocurre cuando tu posición podría mejorar dramáticamente con buenas tiradas, haciendo que la aceptación de tu oponente se convierta en un pase. Para evitar perder la oportunidad de doblar rentablemente, doblas ahora antes de perder tu mercado - aunque esperar podría darte una mayor ventaja. Este es un concepto clave del cubo.",
          de: "Marktverlust tritt auf wenn sich Ihre Position bei guten Würfen dramatisch verbessern könnte, sodass die Annahme Ihres Gegners zu einem Passen wird. Um zu verhindern dass Sie die Gelegenheit verlieren profitabel zu verdoppeln, verdoppeln Sie jetzt bevor Sie Ihren Markt verlieren - obwohl Warten Ihnen einen größeren Vorteil geben könnte. Dies ist ein Schlüsselkonzept des Würfels.",
          nl: "Marktverlies vindt plaats wanneer je positie dramatisch zou kunnen verbeteren bij goede worpen, waardoor de acceptatie van je tegenstander een pas wordt. Om te voorkomen dat je de kans verliest om winstgevend te verdubbelen, verdubbel je nu voordat je je markt verliest - ook al zou wachten je een groter voordeel kunnen geven. Dit is een belangrijk dobbelsteenconcept."
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
          { en: "Both players have anchors in opponent's board", es: "Ambos jugadores tienen anclas en el tablero del oponente", de: "Beide Spieler haben Anker im Brett des Gegners", nl: "Beide spelers hebben ankers in bord van tegenstander" },
          { en: "Both players agree to hold position", es: "Ambos jugadores acuerdan mantener posición", de: "Beide Spieler stimmen zu Position zu halten", nl: "Beide spelers komen overeen positie te houden" },
          { en: "Holding hands during play", es: "Tomarse de las manos durante el juego", de: "Händchenhalten während des Spiels", nl: "Handen vasthouden tijdens spel" },
          { en: "Sharing cube ownership", es: "Compartir propiedad del cubo", de: "Würfelbesitz teilen", nl: "Dobbelsteenbezit delen" }
        ],
        correct: 0,
        explanation: {
          en: "A mutual holding game occurs when both players maintain anchors in each other's board. This creates a tense strategic position where both players must carefully balance building their boards, maintaining timing, and waiting for the other to be forced to break their anchor first. Position and timing become critical.",
          es: "Un juego de retención mutua ocurre cuando ambos jugadores mantienen anclas en el tablero del otro. Esto crea una posición estratégica tensa donde ambos jugadores deben equilibrar cuidadosamente construir sus tableros, mantener el timing y esperar a que el otro se vea obligado a romper su ancla primero. La posición y el timing se vuelven críticos.",
          de: "Ein gegenseitiges Haltespiel tritt auf wenn beide Spieler Anker in den Brettern des anderen halten. Dies schafft eine angespannte strategische Position bei der beide Spieler sorgfältig abwägen müssen zwischen Brettaufbau, Timing-Erhaltung und Warten darauf dass der andere gezwungen wird seinen Anker zuerst zu brechen. Position und Timing werden kritisch.",
          nl: "Een wederzijds vasthoudspel vindt plaats wanneer beide spelers ankers behouden in elkaars bord. Dit creëert een gespannen strategische positie waarbij beide spelers zorgvuldig moeten balanceren tussen het bouwen van hun borden, timing behouden, en wachten tot de ander gedwongen wordt hun anker eerst te breken. Positie en timing worden cruciaal."
        }
      },
      {
        question: {
          en: "What is 'gammon value' and how does it affect cube decisions?",
          es: "¿Qué es 'valor de gammon' y cómo afecta las decisiones de cubo?",
          de: "Was ist 'Gammon-Wert' und wie beeinflusst es Würfelentscheidungen?",
          nl: "Wat is 'gammon waarde' en hoe beïnvloedt het dobbelsteenbeslissingen?"
        },
        options: [
          { en: "Gammon chances make you double earlier and opponent pass sooner", es: "Las posibilidades de gammon te hacen doblar antes y el oponente pasar antes", de: "Gammon-Chancen lassen Sie früher verdoppeln und Gegner früher passen", nl: "Gammon kansen laten je eerder verdubbelen en tegenstander sneller passen" },
          { en: "Gammons worth triple points", es: "Gammons valen triple puntos", de: "Gammons wert dreifache Punkte", nl: "Gammons waard drievoudige punten" },
          { en: "Gammon prevents doubling", es: "Gammon previene doblar", de: "Gammon verhindert Verdoppeln", nl: "Gammon voorkomt verdubbelen" },
          { en: "Value of the ham in the game", es: "Valor del jamón en el juego", de: "Wert des Schinkens im Spiel", nl: "Waarde van de ham in het spel" }
        ],
        correct: 0,
        explanation: {
          en: "Gammon value refers to how gammon possibilities affect cube decisions. High gammon chances make the cube more powerful: the leader can double earlier (hoping for gammons), and the trailer should pass sooner (risking double loss). In positions with many gammon chances, the 25% take point drops significantly lower.",
          es: "El valor de gammon se refiere a cómo las posibilidades de gammon afectan las decisiones de cubo. Altas posibilidades de gammon hacen el cubo más poderoso: el líder puede doblar antes (esperando gammons), y el que va atrás debería pasar antes (arriesgando doble pérdida). En posiciones con muchas posibilidades de gammon, el punto de aceptación del 25% baja significativamente.",
          de: "Gammon-Wert bezieht sich darauf wie Gammon-Möglichkeiten Würfelentscheidungen beeinflussen. Hohe Gammon-Chancen machen den Würfel mächtiger: der Führende kann früher verdoppeln (auf Gammons hoffend), und der Zurückliegende sollte früher passen (doppelten Verlust riskierend). In Positionen mit vielen Gammon-Chancen sinkt der 25%-Annahmepunkt deutlich.",
          nl: "Gammon waarde verwijst naar hoe gammon mogelijkheden dobbelsteenbeslissingen beïnvloeden. Hoge gammon kansen maken de dobbelsteen krachtiger: de leider kan eerder verdubbelen (hopend op gammons), en de achtervolger zou eerder moeten passen (dubbel verlies riskerend). In posities met veel gammon kansen, daalt het 25% acceptatiepunt aanzienlijk."
        }
      },
      {
        question: {
          en: "What is 'pip efficiency' in bearing off?",
          es: "¿Qué es 'eficiencia de pips' al sacar fichas?",
          de: "Was ist 'Pip-Effizienz' beim Auswürfeln?",
          nl: "Wat is 'pip efficiëntie' bij uitgooien?"
        },
        options: [
          { en: "Minimizing wasted pips by optimizing checker distribution", es: "Minimizar pips desperdiciados optimizando distribución de fichas", de: "Verschwendete Pips minimieren durch Optimierung der Steinverteilung", nl: "Verspilde pips minimaliseren door steenverdeling te optimaliseren" },
          { en: "Speed of pip counting", es: "Velocidad de conteo de pips", de: "Geschwindigkeit der Pip-Zählung", nl: "Snelheid van pip telling" },
          { en: "Pip quality measurement", es: "Medición de calidad de pips", de: "Pip-Qualitätsmessung", nl: "Pip kwaliteitsmeting" },
          { en: "Efficiency rating of game", es: "Calificación de eficiencia del juego", de: "Effizienzbewertung des Spiels", nl: "Efficiëntie beoordeling van spel" }
        ],
        correct: 0,
        explanation: {
          en: "Pip efficiency means distributing checkers to minimize wastage during bearing off. Ideally, you want checkers spread evenly so each roll uses its full value. Stacks on high points and gaps on low points create inefficiency. Good distribution means bearing off in approximately 8.17 pips per roll.",
          es: "La eficiencia de pips significa distribuir fichas para minimizar el desperdicio al sacar fichas. Idealmente, quieres fichas distribuidas uniformemente para que cada tirada use su valor completo. Pilas en puntos altos y huecos en puntos bajos crean ineficiencia. Una buena distribución significa sacar fichas en aproximadamente 8.17 pips por tirada.",
          de: "Pip-Effizienz bedeutet Steine so zu verteilen dass Verschwendung beim Auswürfeln minimiert wird. Idealerweise möchten Sie Steine gleichmäßig verteilt damit jeder Wurf seinen vollen Wert nutzt. Stapel auf hohen Punkten und Lücken auf niedrigen Punkten schaffen Ineffizienz. Gute Verteilung bedeutet Auswürfeln mit etwa 8,17 Pips pro Wurf.",
          nl: "Pip efficiëntie betekent stenen verdelen om verspilling tijdens uitgooien te minimaliseren. Ideaal gezien wil je stenen gelijkmatig verspreid zodat elke worp zijn volledige waarde gebruikt. Stapels op hoge punten en gaten op lage punten creëren inefficiëntie. Goede verdeling betekent uitgooien in ongeveer 8,17 pips per worp."
        }
      },
      {
        question: {
          en: "What is the 'doubling window'?",
          es: "¿Qué es la 'ventana de doblaje'?",
          de: "Was ist das 'Verdopplungsfenster'?",
          nl: "Wat is het 'verdubbel venster'?"
        },
        options: [
          { en: "Range between too good to double and too bad to double", es: "Rango entre demasiado bueno para doblar y demasiado malo para doblar", de: "Bereich zwischen zu gut zum Verdoppeln und zu schlecht zum Verdoppeln", nl: "Bereik tussen te goed om te verdubbelen en te slecht om te verdubbelen" },
          { en: "Time window for doubling", es: "Ventana de tiempo para doblar", de: "Zeitfenster zum Verdoppeln", nl: "Tijdvenster voor verdubbelen" },
          { en: "Physical window with cube", es: "Ventana física con cubo", de: "Physisches Fenster mit Würfel", nl: "Fysiek venster met dobbelsteen" },
          { en: "Double-paned game board", es: "Tablero de juego de doble panel", de: "Doppelverglastes Spielbrett", nl: "Dubbelglas spelbord" }
        ],
        correct: 0,
        explanation: {
          en: "The doubling window is the range where you should double: strong enough that opponent might pass, but not so strong you'll likely win anyway without doubling. If too weak, opponent takes easily. If too strong ('too good to double'), you risk losing gammon value by letting them pass. Finding the window is key cube skill.",
          es: "La ventana de doblaje es el rango donde deberías doblar: lo suficientemente fuerte para que el oponente pueda pasar, pero no tan fuerte que probablemente ganarás de todos modos sin doblar. Si demasiado débil, el oponente acepta fácilmente. Si demasiado fuerte ('demasiado bueno para doblar'), arriesgas perder valor de gammon al dejarlos pasar. Encontrar la ventana es habilidad clave del cubo.",
          de: "Das Verdopplungsfenster ist der Bereich wo Sie verdoppeln sollten: stark genug dass Gegner passen könnte, aber nicht so stark dass Sie wahrscheinlich sowieso ohne Verdoppeln gewinnen. Wenn zu schwach nimmt Gegner leicht an. Wenn zu stark ('zu gut zum Verdoppeln') riskieren Sie Gammon-Wert zu verlieren indem Sie sie passen lassen. Das Fenster zu finden ist Schlüsselwürfelfähigkeit.",
          nl: "Het verdubbel venster is het bereik waar je zou moeten verdubbelen: sterk genoeg dat tegenstander zou kunnen passen, maar niet zo sterk dat je waarschijnlijk toch zult winnen zonder verdubbelen. Als te zwak, accepteert tegenstander gemakkelijk. Als te sterk ('te goed om te verdubbelen'), riskeer je gammon waarde te verliezen door ze te laten passen. Het venster vinden is belangrijke dobbelsteenvaardigheid."
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
          { en: "Unexpected good roll that dramatically changes position", es: "Tirada inesperadamente buena que cambia dramáticamente la posición", de: "Unerwartet guter Wurf der Position dramatisch ändert", nl: "Onverwacht goede worp die positie dramatisch verandert" },
          { en: "Playing card in the game", es: "Carta de juego en el juego", de: "Spielkarte im Spiel", nl: "Speelkaart in het spel" },
          { en: "Funny player", es: "Jugador gracioso", de: "Lustiger Spieler", nl: "Grappige speler" },
          { en: "Wild dice roll", es: "Tirada de dados salvaje", de: "Wilder Würfelwurf", nl: "Wilde dobbelsteenworp" }
        ],
        correct: 0,
        explanation: {
          en: "A joker is a lucky roll that dramatically shifts the game in your favor, often against the odds. For example, rolling the perfect number to hit and cover when you had only one or two hitting numbers. Jokers can swing close games and sometimes allow you to snatch victory from poor positions.",
          es: "Un joker es una tirada afortunada que cambia dramáticamente el juego a tu favor, a menudo contra las probabilidades. Por ejemplo, sacar el número perfecto para golpear y cubrir cuando solo tenías uno o dos números de golpe. Los jokers pueden cambiar juegos cerrados y a veces te permiten arrebatar la victoria de posiciones pobres.",
          de: "Ein Joker ist ein glücklicher Wurf der das Spiel dramatisch zu Ihren Gunsten verschiebt, oft gegen die Chancen. Zum Beispiel die perfekte Zahl würfeln um zu schlagen und zu decken wenn Sie nur eine oder zwei Trefferzahlen hatten. Joker können knappe Spiele schwingen lassen und manchmal erlauben sie Ihnen Sieg aus schlechten Positionen zu reißen.",
          nl: "Een joker is een gelukkige worp die het spel dramatisch in je voordeel verschuift, vaak tegen de kansen in. Bijvoorbeeld, het perfecte nummer gooien om te raken en te dekken wanneer je maar één of twee raaknummers had. Jokers kunnen krappe spellen omgooien en soms laten ze je overwinning grijpen uit slechte posities."
        }
      },
      {
        question: {
          en: "What is 'volatility' in a position?",
          es: "¿Qué es 'volatilidad' en una posición?",
          de: "Was ist 'Volatilität' in einer Position?",
          nl: "Wat is 'volatiliteit' in een positie?"
        },
        options: [
          { en: "How much position can swing with single rolls", es: "Cuánto puede cambiar la posición con tiradas individuales", de: "Wie stark Position mit einzelnen Würfen schwanken kann", nl: "Hoeveel positie kan schommelen met enkele worpen" },
          { en: "Temperature of the board", es: "Temperatura del tablero", de: "Temperatur des Bretts", nl: "Temperatuur van het bord" },
          { en: "Player emotion level", es: "Nivel de emoción del jugador", de: "Gefühlsstufe des Spielers", nl: "Emotieniveau van speler" },
          { en: "Speed of gameplay", es: "Velocidad del juego", de: "Spielgeschwindigkeit", nl: "Spelsnelheid" }
        ],
        correct: 0,
        explanation: {
          en: "Volatility refers to how dramatically the position can change with each roll. High-volatility positions (lots of contact, blots exposed, gammon chances) can swing wildly. Low-volatility positions (pure races, closed boards) change predictably. Volatility affects cube decisions - volatile positions favor earlier doubles and passes.",
          es: "La volatilidad se refiere a cuán dramáticamente puede cambiar la posición con cada tirada. Posiciones de alta volatilidad (mucho contacto, blots expuestos, posibilidades de gammon) pueden cambiar salvajemente. Posiciones de baja volatilidad (carreras puras, tableros cerrados) cambian predeciblemente. La volatilidad afecta decisiones de cubo - posiciones volátiles favorecen dobles y pases más tempranos.",
          de: "Volatilität bezieht sich darauf wie dramatisch sich die Position mit jedem Wurf ändern kann. Hoch-volatile Positionen (viel Kontakt, Blots ausgesetzt, Gammon-Chancen) können wild schwanken. Niedrig-volatile Positionen (reine Rennen, geschlossene Bretter) ändern sich vorhersehbar. Volatilität beeinflusst Würfelentscheidungen - volatile Positionen begünstigen frühere Verdopplungen und Passen.",
          nl: "Volatiliteit verwijst naar hoe dramatisch de positie kan veranderen met elke worp. Hoog-volatiele posities (veel contact, blots blootgesteld, gammon kansen) kunnen wild schommelen. Laag-volatiele posities (pure races, gesloten borden) veranderen voorspelbaar. Volatiliteit beïnvloedt dobbelsteenbeslissingen - volatiele posities begunstigen eerdere verdubbelen en passen."
        }
      },
      {
        question: {
          en: "What is 'cube leverage'?",
          es: "¿Qué es 'apalancamiento de cubo'?",
          de: "Was ist 'Würfelhebel'?",
          nl: "Wat is 'dobbelsteenhefboom'?"
        },
        options: [
          { en: "Power gained from owning cube and threatening to redouble", es: "Poder ganado al poseer el cubo y amenazar con redoblar", de: "Macht gewonnen durch Würfelbesitz und Drohung zurückzuverdoppeln", nl: "Kracht verkregen door dobbelsteen te bezitten en te dreigen met herverdubbelen" },
          { en: "Physical tool to move cube", es: "Herramienta física para mover cubo", de: "Physisches Werkzeug um Würfel zu bewegen", nl: "Fysieke tool om dobbelsteen te bewegen" },
          { en: "Cube position on board", es: "Posición del cubo en el tablero", de: "Würfelposition auf Brett", nl: "Dobbelsteenpositie op bord" },
          { en: "Cube multiplication factor", es: "Factor de multiplicación del cubo", de: "Würfel-Multiplikationsfaktor", nl: "Dobbelsteen vermenigvuldigingsfactor" }
        ],
        correct: 0,
        explanation: {
          en: "Cube leverage is the advantage gained from owning the doubling cube. When you own it, your opponent must play more cautiously because you can redouble at any time. This 'threat value' often makes your position play better than its raw evaluation suggests. It's why taking a double when slightly worse can be correct.",
          es: "El apalancamiento de cubo es la ventaja ganada al poseer el cubo de doblar. Cuando lo posees, tu oponente debe jugar más cautelosamente porque puedes redoblar en cualquier momento. Este 'valor de amenaza' a menudo hace que tu posición juegue mejor que lo que sugiere su evaluación cruda. Es por qué aceptar un doble cuando estás ligeramente peor puede ser correcto.",
          de: "Würfelhebel ist der Vorteil der durch Besitz des Dopplungswürfels gewonnen wird. Wenn Sie ihn besitzen muss Ihr Gegner vorsichtiger spielen weil Sie jederzeit rückverdoppeln können. Dieser 'Drohwert' lässt Ihre Position oft besser spielen als ihre rohe Bewertung suggeriert. Deshalb kann es korrekt sein ein Doppeln anzunehmen wenn Sie leicht schlechter stehen.",
          nl: "Dobbelsteenhefboom is het voordeel verkregen door de verdubbeldobbelsteen te bezitten. Wanneer je het bezit, moet je tegenstander voorzichtiger spelen omdat je op elk moment kunt herverdubbelen. Deze 'dreiging waarde' laat je positie vaak beter spelen dan de ruwe evaluatie suggereert. Daarom kan het correct zijn een verdubbeling te accepteren wanneer je iets slechter staat."
        }
      },
      {
        question: {
          en: "What is a 'constructive hit'?",
          es: "¿Qué es un 'golpe constructivo'?",
          de: "Was ist ein 'konstruktiver Treffer'?",
          nl: "Wat is een 'constructieve hit'?"
        },
        options: [
          { en: "Hit that improves your position beyond just sending them back", es: "Golpe que mejora tu posición más allá de solo enviarlos atrás", de: "Treffer der Ihre Position verbessert über bloßes Zurückschicken hinaus", nl: "Hit die je positie verbetert bovenop hen terugsturen" },
          { en: "Friendly hit during practice", es: "Golpe amistoso durante práctica", de: "Freundlicher Treffer während Übung", nl: "Vriendelijke hit tijdens oefening" },
          { en: "Building while hitting", es: "Construir mientras golpeas", de: "Bauen während Schlagen", nl: "Bouwen terwijl raken" },
          { en: "Positive attitude hitting", es: "Golpear con actitud positiva", de: "Schlagen mit positiver Einstellung", nl: "Raken met positieve houding" }
        ],
        correct: 0,
        explanation: {
          en: "A constructive hit accomplishes multiple goals beyond just hitting - for example, hitting while simultaneously making a key point, or hitting while improving your board structure. These are more valuable than simple 'naked' hits because they improve your position in multiple ways. Always look for constructive hitting opportunities.",
          es: "Un golpe constructivo logra múltiples objetivos más allá de solo golpear - por ejemplo, golpear mientras simultáneamente haces un punto clave, o golpear mientras mejoras la estructura de tu tablero. Estos son más valiosos que simples golpes 'desnudos' porque mejoran tu posición de múltiples maneras. Siempre busca oportunidades de golpe constructivo.",
          de: "Ein konstruktiver Treffer erreicht mehrere Ziele über bloßes Schlagen hinaus - zum Beispiel schlagen während gleichzeitig ein Schlüsselpunkt gemacht wird, oder schlagen während Ihre Brettstruktur verbessert wird. Diese sind wertvoller als einfache 'nackte' Treffer weil sie Ihre Position auf mehrere Weisen verbessern. Suchen Sie immer nach konstruktiven Treffergelegenheiten.",
          nl: "Een constructieve hit bereikt meerdere doelen bovenop alleen raken - bijvoorbeeld, raken terwijl je tegelijkertijd een belangrijk punt maakt, of raken terwijl je je bordstructuur verbetert. Deze zijn waardevoller dan simpele 'naakte' hits omdat ze je positie op meerdere manieren verbeteren. Zoek altijd naar constructieve raak kansen."
        }
      },
      {
        question: {
          en: "What does 'racing equity' mean?",
          es: "¿Qué significa 'equity de carrera'?",
          de: "Was bedeutet 'Renn-Equity'?",
          nl: "Wat betekent 'race equity'?"
        },
        options: [
          { en: "Your expected value in current position if it becomes pure race", es: "Tu valor esperado en la posición actual si se convierte en carrera pura", de: "Ihr erwarteter Wert in aktueller Position wenn sie reines Rennen wird", nl: "Je verwachte waarde in huidige positie als het pure race wordt" },
          { en: "Fairness in racing", es: "Equidad en carreras", de: "Fairness im Rennen", nl: "Eerlijkheid in racen" },
          { en: "Equal racing chances", es: "Posibilidades iguales de carrera", de: "Gleiche Rennchancen", nl: "Gelijke race kansen" },
          { en: "Race finish equity", es: "Equidad de finalización de carrera", de: "Rennziel-Equity", nl: "Race finish equity" }
        ],
        correct: 0,
        explanation: {
          en: "Racing equity is your winning chances if all contact were eliminated and the position became a pure race. It's useful for evaluating whether to break contact (when ahead) or maintain it (when behind). Programs calculate racing equity based on pip counts and checker distribution to help with cube and checker decisions.",
          es: "La equity de carrera son tus posibilidades de ganar si todo contacto fuera eliminado y la posición se convirtiera en una carrera pura. Es útil para evaluar si romper contacto (cuando estás adelante) o mantenerlo (cuando estás atrás). Los programas calculan equity de carrera basándose en conteos de pips y distribución de fichas para ayudar con decisiones de cubo y fichas.",
          de: "Renn-Equity sind Ihre Gewinnchancen wenn aller Kontakt eliminiert würde und die Position ein reines Rennen würde. Es ist nützlich zur Bewertung ob Kontakt zu brechen (wenn vorne) oder zu halten (wenn hinten). Programme berechnen Renn-Equity basierend auf Pip-Counts und Steinverteilung um bei Würfel- und Steinentscheidungen zu helfen.",
          nl: "Race equity zijn je winkansen als al het contact werd geëlimineerd en de positie een pure race werd. Het is nuttig voor het evalueren of contact te verbreken (wanneer voor) of te behouden (wanneer achter). Programma's berekenen race equity op basis van pip counts en steenverdeling om te helpen met dobbelsteen- en steenbeslissingen."
        }
      },
      {
        question: {
          en: "What is 'cube ownership' and why is it valuable?",
          es: "¿Qué es 'propiedad del cubo' y por qué es valiosa?",
          de: "Was ist 'Würfelbesitz' und warum ist er wertvoll?",
          nl: "Wat is 'dobbelsteenbezit' en waarom is het waardevol?"
        },
        options: [
          { en: "Exclusive redoubling rights gives you control and leverage", es: "Derechos exclusivos de redoble te dan control y apalancamiento", de: "Exklusive Rückverdopplungsrechte geben Ihnen Kontrolle und Hebel", nl: "Exclusieve herverdubbel rechten geven je controle en hefboom" },
          { en: "Owning the physical cube equipment", es: "Poseer el equipo físico del cubo", de: "Besitz der physischen Würfelausrüstung", nl: "Het fysieke dobbelsteenmateriaal bezitten" },
          { en: "Trademark on cube design", es: "Marca registrada en diseño del cubo", de: "Markenzeichen für Würfel-Design", nl: "Handelsmerk op dobbelsteenontwerp" },
          { en: "Cube position advantage", es: "Ventaja de posición del cubo", de: "Würfelpositionsvorteil", nl: "Dobbelsteenpositie voordeel" }
        ],
        correct: 0,
        explanation: {
          en: "Cube ownership means having exclusive redoubling rights after accepting a double. This is valuable because: 1) You can redouble when position swings your way, 2) Your opponent must play conservatively knowing you might redouble, 3) You have 'last action' on the cube. This leverage often makes taking slightly bad doubles correct.",
          es: "La propiedad del cubo significa tener derechos exclusivos de redoble después de aceptar un doble. Esto es valioso porque: 1) Puedes redoblar cuando la posición cambia a tu favor, 2) Tu oponente debe jugar conservadoramente sabiendo que podrías redoblar, 3) Tienes 'última acción' en el cubo. Este apalancamiento a menudo hace correcto aceptar dobles ligeramente malos.",
          de: "Würfelbesitz bedeutet exklusive Rückverdopplungsrechte zu haben nach Annahme eines Doppelns. Dies ist wertvoll weil: 1) Sie rückverdoppeln können wenn Position sich zu Ihren Gunsten wendet, 2) Ihr Gegner konservativ spielen muss wissend dass Sie rückverdoppeln könnten, 3) Sie 'letzte Aktion' am Würfel haben. Dieser Hebel macht oft leicht schlechte Doppeln anzunehmen korrekt.",
          nl: "Dobbelsteenbezit betekent exclusieve herverdubbel rechten hebben na acceptatie van een verdubbeling. Dit is waardevol omdat: 1) Je kunt herverdubbelen wanneer positie jouw kant op draait, 2) Je tegenstander conservatief moet spelen wetend dat je zou kunnen herverdubbelen, 3) Je 'laatste actie' hebt op de dobbelsteen. Deze hefboom maakt vaak iets slechte verdubbelen accepteren correct."
        }
      },
      {
        question: {
          en: "What is a 'forward anchor'?",
          es: "¿Qué es un 'ancla delantera'?",
          de: "Was ist ein 'vorderer Anker'?",
          nl: "Wat is een 'voorste anker'?"
        },
        options: [
          { en: "Anchor on opponent's 4-point, 5-point, or bar point", es: "Ancla en el punto 4, 5 o punto de barra del oponente", de: "Anker auf 4-Punkt, 5-Punkt oder Bar-Punkt des Gegners", nl: "Anker op 4-punt, 5-punt of bar punt van tegenstander" },
          { en: "Moving anchor forward", es: "Mover ancla hacia adelante", de: "Anker vorwärts bewegen", nl: "Anker vooruit bewegen" },
          { en: "Front position anchor", es: "Ancla de posición frontal", de: "Front-Positions-Anker", nl: "Voorste positie anker" },
          { en: "Future anchor position", es: "Posición de ancla futura", de: "Zukünftige Ankerposition", nl: "Toekomstige anker positie" }
        ],
        correct: 0,
        explanation: {
          en: "Forward anchors (also called advanced anchors) are on your opponent's 4-point (21-point), 5-point (20-point), or bar point (18-point). These are more valuable than deep anchors because they provide better escape opportunities, stronger hitting chances, and better timing. The 5-point anchor is especially prized.",
          es: "Los anclas delanteras (también llamadas anclas avanzadas) están en el punto 4 (punto 21), punto 5 (punto 20) o punto de barra (punto 18) de tu oponente. Estos son más valiosos que anclas profundas porque proporcionan mejores oportunidades de escape, posibilidades de golpeo más fuertes y mejor timing. El ancla del punto 5 es especialmente apreciada.",
          de: "Vordere Anker (auch fortgeschrittene Anker genannt) sind auf dem 4-Punkt (21-Punkt), 5-Punkt (20-Punkt) oder Bar-Punkt (18-Punkt) Ihres Gegners. Diese sind wertvoller als tiefe Anker weil sie bessere Fluchtmöglichkeiten, stärkere Treffermöglichkeiten und besseres Timing bieten. Der 5-Punkt-Anker ist besonders geschätzt.",
          nl: "Voorste ankers (ook wel gevorderde ankers genoemd) zijn op het 4-punt (21-punt), 5-punt (20-punt) of bar punt (18-punt) van je tegenstander. Deze zijn waardevoller dan diepe ankers omdat ze betere ontsnappingsmogelijkheden, sterkere raakkansen en betere timing bieden. Het 5-punt anker is bijzonder gewaardeerd."
        }
      },
      {
        question: {
          en: "What does 'losing your market' mean in cube decisions?",
          es: "¿Qué significa 'perder tu mercado' en decisiones de cubo?",
          de: "Was bedeutet 'Ihren Markt verlieren' bei Würfelentscheidungen?",
          nl: "Wat betekent 'je markt verliezen' bij dobbelsteenbeslissingen?"
        },
        options: [
          { en: "Position becomes too good so opponent passes instead of taking", es: "La posición se vuelve demasiado buena así que el oponente pasa en lugar de aceptar", de: "Position wird zu gut sodass Gegner passt statt anzunehmen", nl: "Positie wordt te goed dus tegenstander past in plaats van te accepteren" },
          { en: "Market crash during game", es: "Caída del mercado durante el juego", de: "Marktcrash während Spiel", nl: "Markt crash tijdens spel" },
          { en: "Losing money bets", es: "Perder apuestas de dinero", de: "Wetten Geld verlieren", nl: "Weddenschap geld verliezen" },
          { en: "Giving up cube value", es: "Renunciar al valor del cubo", de: "Würfelwert aufgeben", nl: "Dobbelsteenwaarde opgeven" }
        ],
        correct: 0,
        explanation: {
          en: "Losing your market means waiting to double until your position becomes so strong that your opponent must pass. By doubling now while they might still take (even if you'd prefer to wait), you secure value. This is especially important in volatile positions where a good sequence could make you 'too good to double.'",
          es: "Perder tu mercado significa esperar para doblar hasta que tu posición se vuelva tan fuerte que tu oponente deba pasar. Al doblar ahora mientras aún podrían aceptar (aunque preferirías esperar), aseguras valor. Esto es especialmente importante en posiciones volátiles donde una buena secuencia podría hacerte 'demasiado bueno para doblar.'",
          de: "Ihren Markt verlieren bedeutet mit dem Verdoppeln zu warten bis Ihre Position so stark wird dass Ihr Gegner passen muss. Indem Sie jetzt verdoppeln während sie noch annehmen könnten (auch wenn Sie lieber warten würden), sichern Sie Wert. Dies ist besonders wichtig in volatilen Positionen wo eine gute Sequenz Sie 'zu gut zum Verdoppeln' machen könnte.",
          nl: "Je markt verliezen betekent wachten met verdubbelen totdat je positie zo sterk wordt dat je tegenstander moet passen. Door nu te verdubbelen terwijl ze nog zouden kunnen accepteren (ook al zou je liever wachten), verzeker je waarde. Dit is vooral belangrijk in volatiele posities waar een goede reeks je 'te goed om te verdubbelen' zou kunnen maken."
        }
      }
    ]
  };

  // Export for use in the quiz application
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level5;
  } else if (typeof window !== 'undefined') {
    window.level5 = level5;
  }
})();
