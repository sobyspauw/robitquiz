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
      },
      {
        question: {
          en: "What is 'Kazaross XG2' in modern backgammon?",
          es: "¿Qué es 'Kazaross XG2' en backgammon moderno?",
          de: "Was ist 'Kazaross XG2' im modernen Backgammon?",
          nl: "Wat is 'Kazaross XG2' in modern backgammon?"
        },
        options: [
          { en: "Adjusting XG rollouts using Kazaross formula for match play", es: "Ajustar rollouts de XG usando fórmula Kazaross para juego de match", de: "XG-Rollouts mit Kazaross-Formel für Match-Spiel anpassen", nl: "XG rollouts aanpassen met Kazaross formule voor wedstrijdspel" },
          { en: "Chess opening theory", es: "Teoría de apertura de ajedrez", de: "Schacheröffnungstheorie", nl: "Schaak openingstheorie" },
          { en: "New cube design", es: "Nuevo diseño de cubo", de: "Neues Würfel-Design", nl: "Nieuw dobbelsteenontwerp" },
          { en: "Tournament format", es: "Formato de torneo", de: "Turnierformat", nl: "Toernooi formaat" }
        ],
        correct: 0,
        explanation: {
          en: "Kazaross XG2 refers to adjusting eXtreme Gammon rollout results for match play using a formula developed by Michalis Kazaross. XG2 rollouts use cubeless money game equities, and the Kazaross formula converts these to match equity tables for specific match scores.",
          es: "Kazaross XG2 se refiere a ajustar resultados de rollout de eXtreme Gammon para juego de match usando una fórmula desarrollada por Michalis Kazaross. Los rollouts XG2 usan equities de juego de dinero sin cubo, y la fórmula Kazaross las convierte a tablas de equity de match para puntajes específicos de match.",
          de: "Kazaross XG2 bezieht sich auf das Anpassen von eXtreme Gammon Rollout-Ergebnissen für Match-Spiel unter Verwendung einer von Michalis Kazaross entwickelten Formel. XG2-Rollouts verwenden würfellose Geldspiel-Equities, und die Kazaross-Formel konvertiert diese zu Match-Equity-Tabellen für spezifische Match-Stände.",
          nl: "Kazaross XG2 verwijst naar het aanpassen van eXtreme Gammon rollout resultaten voor wedstrijdspel met een formule ontwikkeld door Michalis Kazaross. XG2 rollouts gebruiken dobbelsteenloze geldspel equities, en de Kazaross formule converteert deze naar wedstrijd equity tabellen voor specifieke wedstrijdscores."
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
          { en: "Building 6 consecutive points to completely block opponent", es: "Construir 6 puntos consecutivos para bloquear completamente al oponente", de: "6 aufeinanderfolgende Punkte bauen um Gegner komplett zu blockieren", nl: "6 opeenvolgende punten bouwen om tegenstander volledig te blokkeren" },
          { en: "Only using prime numbers", es: "Solo usar números primos", de: "Nur Primzahlen verwenden", nl: "Alleen priemgetallen gebruiken" },
          { en: "Perfect opening position", es: "Posición de apertura perfecta", de: "Perfekte Eröffnungsposition", nl: "Perfecte openingspositie" },
          { en: "Premium gameplay", es: "Juego premium", de: "Premium-Spiel", nl: "Premium gameplay" }
        ],
        correct: 0,
        explanation: {
          en: "A pure prime game focuses on building a full 6-point prime (six consecutive made points) to completely block opponent's back checkers. With a full 6-point prime, opponent cannot escape no matter what they roll. The strategy requires good timing to maintain the prime while advancing it forward.",
          es: "Un juego de prima pura se centra en construir una prima completa de 6 puntos (seis puntos hechos consecutivos) para bloquear completamente las fichas traseras del oponente. Con una prima completa de 6 puntos, el oponente no puede escapar sin importar qué saque. La estrategia requiere buen timing para mantener la prima mientras se avanza hacia adelante.",
          de: "Ein reines Prime-Spiel konzentriert sich auf den Aufbau eines vollen 6-Punkte-Primes (sechs aufeinanderfolgende gemachte Punkte) um die hinteren Steine des Gegners komplett zu blockieren. Mit einem vollen 6-Punkte-Prime kann der Gegner nicht entkommen egal was er würfelt. Die Strategie erfordert gutes Timing um das Prime zu halten während es vorwärts bewegt wird.",
          nl: "Een pure prime spel richt zich op het bouwen van een volledige 6-punts prime (zes opeenvolgende gemaakte punten) om de achterste stenen van tegenstander volledig te blokkeren. Met een volledige 6-punts prime kan tegenstander niet ontsnappen ongeacht wat ze gooien. De strategie vereist goede timing om de prime te behouden terwijl deze vooruit wordt bewogen."
        }
      },
      {
        question: {
          en: "What is the 'take point' in match play vs money play?",
          es: "¿Qué es el 'punto de aceptación' en juego de match vs juego de dinero?",
          de: "Was ist der 'Annahmepunkt' im Match-Spiel vs Geld-Spiel?",
          nl: "Wat is het 'acceptatie punt' in wedstrijdspel vs geldspel?"
        },
        options: [
          { en: "Match play: varies by score; Money play: typically 25%", es: "Juego de match: varía según puntaje; Juego de dinero: típicamente 25%", de: "Match-Spiel: variiert je nach Stand; Geld-Spiel: typisch 25%", nl: "Wedstrijdspel: varieert per score; Geldspel: typisch 25%" },
          { en: "Always 50% regardless", es: "Siempre 50% independientemente", de: "Immer 50% unabhängig", nl: "Altijd 50% ongeacht" },
          { en: "Match play: 25%; Money play: varies", es: "Juego de match: 25%; Juego de dinero: varía", de: "Match-Spiel: 25%; Geld-Spiel: variiert", nl: "Wedstrijdspel: 25%; Geldspel: varieert" },
          { en: "Same in both formats", es: "Igual en ambos formatos", de: "Gleich in beiden Formaten", nl: "Hetzelfde in beide formats" }
        ],
        correct: 0,
        explanation: {
          en: "In money play with no gammons, take point is ~22% (with gammons, ~25%). In match play, it varies dramatically based on score. At some scores (like 2-away/2-away), you can take with as little as 30% or even lower. Match equity tables determine exact take points for each score.",
          es: "En juego de dinero sin gammons, el punto de aceptación es ~22% (con gammons, ~25%). En juego de match, varía dramáticamente según el puntaje. En algunos puntajes (como 2-away/2-away), puedes aceptar con tan poco como 30% o incluso menos. Las tablas de equity de match determinan puntos de aceptación exactos para cada puntaje.",
          de: "Im Geldspiel ohne Gammons liegt der Annahmepunkt bei ~22% (mit Gammons ~25%). Im Match-Spiel variiert er dramatisch je nach Stand. Bei einigen Ständen (wie 2-away/2-away) können Sie mit nur 30% oder sogar weniger annehmen. Match-Equity-Tabellen bestimmen exakte Annahmepunkte für jeden Stand.",
          nl: "In geldspel zonder gammons is het acceptatiepunt ~22% (met gammons, ~25%). In wedstrijdspel varieert het dramatisch op basis van score. Bij sommige scores (zoals 2-away/2-away) kun je accepteren met zo weinig als 30% of zelfs lager. Wedstrijd equity tabellen bepalen exacte acceptatiepunten voor elke score."
        }
      },
      {
        question: {
          en: "What is 'recirculation' in attacking positions?",
          es: "¿Qué es 'recirculación' en posiciones de ataque?",
          de: "Was ist 'Rezirkulation' in Angriffspositionen?",
          nl: "Wat is 'recirculatie' in aanvalposities?"
        },
        options: [
          { en: "Hit checkers re-entering and getting hit again before escaping", es: "Fichas golpeadas volviendo a entrar y siendo golpeadas de nuevo antes de escapar", de: "Geschlagene Steine wieder eintreten und erneut geschlagen werden bevor sie entkommen", nl: "Gerakte stenen weer binnenkomen en opnieuw geraakt worden voordat ze ontsnappen" },
          { en: "Rotating checkers clockwise", es: "Rotar fichas en sentido horario", de: "Steine im Uhrzeigersinn drehen", nl: "Stenen met de klok mee draaien" },
          { en: "Reusing old strategies", es: "Reutilizar viejas estrategias", de: "Alte Strategien wiederverwenden", nl: "Oude strategieën hergebruiken" },
          { en: "Circling the board", es: "Dar vueltas al tablero", de: "Das Brett umkreisen", nl: "Het bord rondcirkelen" }
        ],
        correct: 0,
        explanation: {
          en: "Recirculation occurs in blitz or strong attacking positions when opponent's hit checkers enter from the bar but get hit again before they can escape. This cycle can repeat multiple times, greatly increasing gammon/backgammon chances. Recirculation is a key element of successful blitz attacks.",
          es: "La recirculación ocurre en blitz o posiciones de ataque fuertes cuando las fichas golpeadas del oponente entran desde la barra pero son golpeadas de nuevo antes de poder escapar. Este ciclo puede repetirse múltiples veces, aumentando enormemente las posibilidades de gammon/backgammon. La recirculación es un elemento clave de ataques blitz exitosos.",
          de: "Rezirkulation tritt in Blitz- oder starken Angriffspositionen auf wenn geschlagene Steine des Gegners von der Bar eintreten aber erneut geschlagen werden bevor sie entkommen können. Dieser Zyklus kann sich mehrfach wiederholen, was Gammon/Backgammon-Chancen stark erhöht. Rezirkulation ist ein Schlüsselelement erfolgreicher Blitz-Angriffe.",
          nl: "Recirculatie vindt plaats in blitz of sterke aanvalposities wanneer gerakte stenen van tegenstander van de bar binnenkomen maar opnieuw geraakt worden voordat ze kunnen ontsnappen. Deze cyclus kan meerdere keren herhalen, wat gammon/backgammon kansen enorm verhoogt. Recirculatie is een sleutelelement van succesvolle blitz aanvallen."
        }
      },
      {
        question: {
          en: "What is the 'too good to double' problem?",
          es: "¿Qué es el problema 'demasiado bueno para doblar'?",
          de: "Was ist das 'zu gut zum Verdoppeln'-Problem?",
          nl: "Wat is het 'te goed om te verdubbelen' probleem?"
        },
        options: [
          { en: "Position so strong that doubling lets opponent escape by passing", es: "Posición tan fuerte que doblar deja escapar al oponente al pasar", de: "Position so stark dass Verdoppeln dem Gegner durch Passen Flucht ermöglicht", nl: "Positie zo sterk dat verdubbelen tegenstander laat ontsnappen door te passen" },
          { en: "Being too confident", es: "Ser demasiado confiado", de: "Zu selbstbewusst sein", nl: "Te zelfverzekerd zijn" },
          { en: "Cube value exceeds limit", es: "Valor del cubo excede límite", de: "Würfelwert überschreitet Limit", nl: "Dobbelsteenwaarde overschrijdt limiet" },
          { en: "Excessive doubling", es: "Doblaje excesivo", de: "Übermäßiges Verdoppeln", nl: "Overdreven verdubbelen" }
        ],
        correct: 0,
        explanation: {
          en: "Being too good to double means your position is so strong with high gammon chances that if you double, opponent correctly passes, and you only win 1 point. By NOT doubling, you might win 2 or 3 points via gammon/backgammon. This creates the 'doubling window' - you want to be strong enough for opponent to consider passing, but not so strong they should definitely pass.",
          es: "Ser demasiado bueno para doblar significa que tu posición es tan fuerte con altas posibilidades de gammon que si doblas, el oponente pasa correctamente, y solo ganas 1 punto. Al NO doblar, podrías ganar 2 o 3 puntos vía gammon/backgammon. Esto crea la 'ventana de doblaje' - quieres ser lo suficientemente fuerte para que el oponente considere pasar, pero no tan fuerte que definitivamente deberían pasar.",
          de: "Zu gut zum Verdoppeln zu sein bedeutet Ihre Position ist so stark mit hohen Gammon-Chancen dass wenn Sie verdoppeln, Gegner korrekt passt, und Sie nur 1 Punkt gewinnen. Durch NICHT Verdoppeln könnten Sie 2 oder 3 Punkte via Gammon/Backgammon gewinnen. Dies schafft das 'Verdopplungsfenster' - Sie wollen stark genug sein dass Gegner Passen erwägt, aber nicht so stark dass sie definitiv passen sollten.",
          nl: "Te goed zijn om te verdubbelen betekent dat je positie zo sterk is met hoge gammon kansen dat als je verdubbelt, tegenstander correct past, en je slechts 1 punt wint. Door NIET te verdubbelen, zou je 2 of 3 punten kunnen winnen via gammon/backgammon. Dit creëert het 'verdubbel venster' - je wilt sterk genoeg zijn zodat tegenstander passen overweegt, maar niet zo sterk dat ze zeker zouden moeten passen."
        }
      },
      {
        question: {
          en: "What is 'effective pip count' (EPC)?",
          es: "¿Qué es 'conteo efectivo de pips' (EPC)?",
          de: "Was ist 'effektive Pip-Zählung' (EPC)?",
          nl: "Wat is 'effectieve pip count' (EPC)?"
        },
        options: [
          { en: "Adjusted pip count accounting for distribution and wastage", es: "Conteo de pips ajustado que considera distribución y desperdicio", de: "Angepasste Pip-Zählung unter Berücksichtigung von Verteilung und Verschwendung", nl: "Aangepaste pip count rekening houdend met verdeling en verspilling" },
          { en: "Counting only effective pips", es: "Contar solo pips efectivos", de: "Nur effektive Pips zählen", nl: "Alleen effectieve pips tellen" },
          { en: "Pip count after removal", es: "Conteo de pips después de remoción", de: "Pip-Zählung nach Entfernung", nl: "Pip count na verwijdering" },
          { en: "Average pip value", es: "Valor promedio de pips", de: "Durchschnittlicher Pip-Wert", nl: "Gemiddelde pip waarde" }
        ],
        correct: 0,
        explanation: {
          en: "Effective pip count adjusts raw pip count for position quality. Checkers stacked high waste pips; checkers distributed evenly are more efficient. EPC formulas (like Walter Trice's) add penalties for poor distribution and crossovers needed. EPC gives more accurate racing equity than raw pip count.",
          es: "El conteo efectivo de pips ajusta el conteo bruto de pips por calidad de posición. Fichas apiladas altas desperdician pips; fichas distribuidas uniformemente son más eficientes. Las fórmulas EPC (como la de Walter Trice) añaden penalizaciones por mala distribución y cruces necesarios. EPC da equity de carrera más precisa que el conteo bruto de pips.",
          de: "Effektive Pip-Zählung passt rohe Pip-Zählung für Positionsqualität an. Hoch gestapelte Steine verschwenden Pips; gleichmäßig verteilte Steine sind effizienter. EPC-Formeln (wie Walter Trices) fügen Strafen für schlechte Verteilung und benötigte Übergänge hinzu. EPC gibt genauere Renn-Equity als rohe Pip-Zählung.",
          nl: "Effectieve pip count past ruwe pip count aan voor positiekwaliteit. Hoog gestapelde stenen verspillen pips; gelijkmatig verdeelde stenen zijn efficiënter. EPC formules (zoals Walter Trice's) voegen straffen toe voor slechte verdeling en benodigde overgangen. EPC geeft nauwkeurigere race equity dan ruwe pip count."
        }
      },
      {
        question: {
          en: "What is the 'Jacoby rule' and when is it used?",
          es: "¿Qué es la 'regla Jacoby' y cuándo se usa?",
          de: "Was ist die 'Jacoby-Regel' und wann wird sie verwendet?",
          nl: "Wat is de 'Jacoby regel' en wanneer wordt het gebruikt?"
        },
        options: [
          { en: "Money games: gammons/backgammons only count if cube was turned", es: "Juegos de dinero: gammons/backgammons solo cuentan si se giró el cubo", de: "Geldspiele: Gammons/Backgammons zählen nur wenn Würfel gedreht wurde", nl: "Geldspellen: gammons/backgammons tellen alleen als dobbelsteen werd gedraaid" },
          { en: "Match play only rule", es: "Regla solo para juego de match", de: "Nur Match-Spiel Regel", nl: "Alleen wedstrijdspel regel" },
          { en: "Opening move restriction", es: "Restricción de movimiento de apertura", de: "Eröffnungszug-Einschränkung", nl: "Openingszet beperking" },
          { en: "Cube ownership rule", es: "Regla de propiedad del cubo", de: "Würfelbesitz-Regel", nl: "Dobbelsteenbezit regel" }
        ],
        correct: 0,
        explanation: {
          en: "The Jacoby rule is used in money games (never match play). It states gammons and backgammons only count for extra points if the cube has been turned. This speeds up money games by eliminating slow 'gammon grinding' - if neither player doubles, the game is worth only 1 point regardless of how you win.",
          es: "La regla Jacoby se usa en juegos de dinero (nunca juego de match). Establece que gammons y backgammons solo cuentan por puntos extra si se ha girado el cubo. Esto acelera los juegos de dinero eliminando 'molienda de gammon' lenta - si ningún jugador dobla, el juego vale solo 1 punto independientemente de cómo ganes.",
          de: "Die Jacoby-Regel wird in Geldspielen verwendet (nie Match-Spiel). Sie besagt dass Gammons und Backgammons nur für Extrapunkte zählen wenn der Würfel gedreht wurde. Dies beschleunigt Geldspiele durch Eliminierung langsamen 'Gammon-Grinding' - wenn kein Spieler verdoppelt ist das Spiel nur 1 Punkt wert egal wie Sie gewinnen.",
          nl: "De Jacoby regel wordt gebruikt in geldspellen (nooit wedstrijdspel). Het stelt dat gammons en backgammons alleen tellen voor extra punten als de dobbelsteen is gedraaid. Dit versnelt geldspellen door langzaam 'gammon grinding' te elimineren - als geen van beide spelers verdubbelt, is het spel slechts 1 punt waard ongeacht hoe je wint."
        }
      },
      {
        question: {
          en: "What is a 'double/take, double/pass' position?",
          es: "¿Qué es una posición 'doblar/aceptar, doblar/pasar'?",
          de: "Was ist eine 'Verdoppeln/Nehmen, Verdoppeln/Passen'-Position?",
          nl: "Wat is een 'verdubbelen/nemen, verdubbelen/passen' positie?"
        },
        options: [
          { en: "Correct to double; opponent indifferent between take and pass", es: "Correcto doblar; oponente indiferente entre aceptar y pasar", de: "Korrekt zu verdoppeln; Gegner indifferent zwischen Nehmen und Passen", nl: "Correct om te verdubbelen; tegenstander onverschillig tussen nemen en passen" },
          { en: "Two different positions", es: "Dos posiciones diferentes", de: "Zwei verschiedene Positionen", nl: "Twee verschillende posities" },
          { en: "Alternating cube actions", es: "Acciones de cubo alternantes", de: "Abwechselnde Würfelaktionen", nl: "Afwisselende dobbelsteenacties" },
          { en: "Paradoxical cube situation", es: "Situación paradójica de cubo", de: "Paradoxe Würfelsituation", nl: "Paradoxale dobbelsteensituatie" }
        ],
        correct: 0,
        explanation: {
          en: "This is a theoretical position at the exact double point - you should double, and opponent is exactly at the borderline where taking and passing have equal value. In practice, such positions are rare. Usually it's either double/take or no-double/take or double/pass, but not exactly on the knife-edge.",
          es: "Esta es una posición teórica en el punto de doble exacto - deberías doblar, y el oponente está exactamente en la línea límite donde aceptar y pasar tienen igual valor. En práctica, tales posiciones son raras. Usualmente es doblar/aceptar o no-doblar/aceptar o doblar/pasar, pero no exactamente en el filo de la navaja.",
          de: "Dies ist eine theoretische Position am exakten Verdopplungspunkt - Sie sollten verdoppeln, und Gegner ist genau an der Grenze wo Nehmen und Passen gleichen Wert haben. In der Praxis sind solche Positionen selten. Normalerweise ist es entweder Verdoppeln/Nehmen oder Nicht-Verdoppeln/Nehmen oder Verdoppeln/Passen, aber nicht genau auf Messers Schneide.",
          nl: "Dit is een theoretische positie op het exacte verdubbelpunt - je zou moeten verdubbelen, en tegenstander is precies op de grens waar nemen en passen gelijke waarde hebben. In de praktijk zijn zulke posities zeldzaam. Meestal is het verdubbelen/nemen of niet-verdubbelen/nemen of verdubbelen/passen, maar niet precies op het scherpst van de snede."
        }
      },
      {
        question: {
          en: "What is a 'crunch' and how do you avoid it?",
          es: "¿Qué es un 'crunch' y cómo lo evitas?",
          de: "Was ist ein 'Crunch' und wie vermeidet man ihn?",
          nl: "Wat is een 'crunch' en hoe vermijd je het?"
        },
        options: [
          { en: "Running out of moves; avoid by maintaining spare checkers/timing", es: "Quedarse sin movimientos; evitar manteniendo fichas de repuesto/timing", de: "Keine Züge mehr haben; vermeiden durch Reservesteine/Timing bewahren", nl: "Zonder zetten zitten; vermijden door reserve stenen/timing te behouden" },
          { en: "Critical game situation; unavoidable", es: "Situación crítica de juego; inevitable", de: "Kritische Spielsituation; unvermeidbar", nl: "Kritieke spelsituatie; onvermijdelijk" },
          { en: "Physical board damage; careful handling", es: "Daño físico del tablero; manejo cuidadoso", de: "Physischer Brettschaden; vorsichtige Handhabung", nl: "Fysieke bordschade; voorzichtig hanteren" },
          { en: "Time pressure; play faster", es: "Presión de tiempo; jugar más rápido", de: "Zeitdruck; schneller spielen", nl: "Tijdsdruk; sneller spelen" }
        ],
        correct: 0,
        explanation: {
          en: "The crunch happens when you run out of spare checkers and must break valuable points (like your anchor or prime). To avoid it, maintain timing by: keeping builders, not stripping your position too quickly, recirculating checkers efficiently, and sometimes hitting opponent's checkers to slow the position down.",
          es: "El crunch ocurre cuando te quedas sin fichas de repuesto y debes romper puntos valiosos (como tu ancla o prima). Para evitarlo, mantén timing: manteniendo constructores, no despojando tu posición demasiado rápido, recirculando fichas eficientemente, y a veces golpeando fichas del oponente para ralentizar la posición.",
          de: "Der Crunch passiert wenn Ihnen Reservesteine ausgehen und Sie wertvolle Punkte brechen müssen (wie Ihren Anker oder Prime). Um ihn zu vermeiden, bewahren Sie Timing: Erbauer behalten, Ihre Position nicht zu schnell abbauen, Steine effizient rezirkulieren, und manchmal gegnerische Steine schlagen um die Position zu verlangsamen.",
          nl: "De crunch vindt plaats wanneer je zonder reserve stenen zit en waardevolle punten moet breken (zoals je anker of prime). Om het te vermijden, behoud timing door: bouwers te behouden, je positie niet te snel af te bouwen, stenen efficiënt te recirculeren, en soms stenen van tegenstander te raken om de positie te vertragen."
        }
      },
      {
        question: {
          en: "What is 'tempo' vs 'timing' in backgammon?",
          es: "¿Qué es 'tempo' vs 'timing' en backgammon?",
          de: "Was ist 'Tempo' vs 'Timing' im Backgammon?",
          nl: "Wat is 'tempo' vs 'timing' in backgammon?"
        },
        options: [
          { en: "Tempo: speed of advance; Timing: having spare checkers to wait", es: "Tempo: velocidad de avance; Timing: tener fichas de repuesto para esperar", de: "Tempo: Vorwärtsgeschwindigkeit; Timing: Reservesteine zum Warten haben", nl: "Tempo: snelheid van vooruitgang; Timing: reserve stenen hebben om te wachten" },
          { en: "Same thing different words", es: "Misma cosa palabras diferentes", de: "Dasselbe verschiedene Worte", nl: "Hetzelfde verschillende woorden" },
          { en: "Tempo: clock time; Timing: game duration", es: "Tempo: tiempo de reloj; Timing: duración del juego", de: "Tempo: Uhrzeit; Timing: Spieldauer", nl: "Tempo: kloktijd; Timing: spelduur" },
          { en: "Tempo: beginner; Timing: expert", es: "Tempo: principiante; Timing: experto", de: "Tempo: Anfänger; Timing: Experte", nl: "Tempo: beginner; Timing: expert" }
        ],
        correct: 0,
        explanation: {
          en: "Tempo is the pace of play - how urgently you're racing your checkers forward. Timing is having enough spare checkers to make useful moves while maintaining your structure. Good timing means you won't be forced to break key points prematurely. You can control tempo, but must manage timing carefully.",
          es: "Tempo es el ritmo de juego - qué tan urgentemente estás corriendo tus fichas hacia adelante. Timing es tener suficientes fichas de repuesto para hacer movimientos útiles mientras mantienes tu estructura. Buen timing significa que no te verás obligado a romper puntos clave prematuramente. Puedes controlar el tempo, pero debes manejar el timing cuidadosamente.",
          de: "Tempo ist das Spieltempo - wie dringend Sie Ihre Steine vorwärts rennen. Timing ist genug Reservesteine zu haben um nützliche Züge zu machen während Sie Ihre Struktur bewahren. Gutes Timing bedeutet dass Sie nicht gezwungen werden Schlüsselpunkte vorzeitig zu brechen. Sie können Tempo kontrollieren, müssen aber Timing sorgfältig managen.",
          nl: "Tempo is het speltempo - hoe urgent je je stenen vooruit racet. Timing is genoeg reserve stenen hebben om nuttige zetten te maken terwijl je je structuur behoudt. Goede timing betekent dat je niet gedwongen wordt sleutelpunten voortijdig te breken. Je kunt tempo controleren, maar moet timing zorgvuldig beheren."
        }
      },
      {
        question: {
          en: "What is a 'reference position' in cube theory?",
          es: "¿Qué es una 'posición de referencia' en teoría de cubo?",
          de: "Was ist eine 'Referenzposition' in der Würfel-Theorie?",
          nl: "Wat is een 'referentiepositie' in dobbelsteentheorie?"
        },
        options: [
          { en: "Well-known position used as benchmark for cube decisions", es: "Posición bien conocida usada como punto de referencia para decisiones de cubo", de: "Wohlbekannte Position als Maßstab für Würfelentscheidungen verwendet", nl: "Bekende positie gebruikt als benchmark voor dobbelsteenbeslissingen" },
          { en: "Starting position reference", es: "Referencia de posición inicial", de: "Startpositions-Referenz", nl: "Startpositie referentie" },
          { en: "Ideal theoretical position", es: "Posición teórica ideal", de: "Ideale theoretische Position", nl: "Ideale theoretische positie" },
          { en: "Position documentation", es: "Documentación de posición", de: "Positionsdokumentation", nl: "Positie documentatie" }
        ],
        correct: 0,
        explanation: {
          en: "Reference positions are well-studied benchmark positions used to guide cube decisions in similar situations. For example, 'Kit Woolsey's 8-9-12 position' or specific backgame positions. By comparing your position to known references, you can make better cube decisions. Top players memorize key reference positions.",
          es: "Las posiciones de referencia son posiciones de punto de referencia bien estudiadas usadas para guiar decisiones de cubo en situaciones similares. Por ejemplo, 'la posición 8-9-12 de Kit Woolsey' o posiciones de juego trasero específicas. Al comparar tu posición con referencias conocidas, puedes tomar mejores decisiones de cubo. Los mejores jugadores memorizan posiciones de referencia clave.",
          de: "Referenzpositionen sind gut studierte Benchmark-Positionen die verwendet werden um Würfelentscheidungen in ähnlichen Situationen zu leiten. Zum Beispiel 'Kit Woolseys 8-9-12-Position' oder spezifische Rückspiel-Positionen. Durch Vergleich Ihrer Position mit bekannten Referenzen können Sie bessere Würfelentscheidungen treffen. Top-Spieler memorieren Schlüssel-Referenzpositionen.",
          nl: "Referentieposities zijn goed bestudeerde benchmark posities gebruikt om dobbelsteenbeslissingen te leiden in vergelijkbare situaties. Bijvoorbeeld, 'Kit Woolsey's 8-9-12 positie' of specifieke achterspelposities. Door je positie te vergelijken met bekende referenties, kun je betere dobbelsteenbeslissingen maken. Topspelers onthouden belangrijke referentieposities."
        }
      },
      {
        question: {
          en: "What is a '2-roll vs 3-roll' position?",
          es: "¿Qué es una posición '2-tiradas vs 3-tiradas'?",
          de: "Was ist eine '2-Wurf vs 3-Wurf'-Position?",
          nl: "Wat is een '2-worpen vs 3-worpen' positie?"
        },
        options: [
          { en: "Racing position where one side needs 2 rolls to bear off, other needs 3", es: "Posición de carrera donde un lado necesita 2 tiradas para sacar, el otro necesita 3", de: "Rennposition wo eine Seite 2 Würfe zum Auswürfeln braucht, andere 3", nl: "Race positie waar één kant 2 worpen nodig heeft om uit te gooien, andere 3" },
          { en: "Rolling dice twice vs three times", es: "Tirar dados dos veces vs tres veces", de: "Würfel zweimal vs dreimal werfen", nl: "Dobbelstenen twee keer vs drie keer gooien" },
          { en: "Two players vs three players", es: "Dos jugadores vs tres jugadores", de: "Zwei Spieler vs drei Spieler", nl: "Twee spelers vs drie spelers" },
          { en: "Double vs triple stakes", es: "Apuestas dobles vs triples", de: "Doppelte vs dreifache Einsätze", nl: "Dubbele vs drievoudige inzet" }
        ],
        correct: 0,
        explanation: {
          en: "2-roll vs 3-roll positions are bearing-off races where one player needs (on average) 2 more rolls to finish, the other needs 3. These are critical cube positions. The player needing 2 rolls usually has a huge double, and the 3-roll player is often close to a pass but usually a take due to recube potential.",
          es: "Las posiciones 2-tiradas vs 3-tiradas son carreras de sacar donde un jugador necesita (en promedio) 2 tiradas más para terminar, el otro necesita 3. Estas son posiciones críticas de cubo. El jugador que necesita 2 tiradas usualmente tiene un gran doble, y el jugador de 3-tiradas a menudo está cerca de pasar pero usualmente acepta debido al potencial de recubo.",
          de: "2-Wurf vs 3-Wurf-Positionen sind Auswürfel-Rennen wo ein Spieler (im Durchschnitt) noch 2 Würfe braucht um zu beenden, der andere 3. Dies sind kritische Würfelpositionen. Der Spieler der 2 Würfe braucht hat normalerweise ein riesiges Doppeln, und der 3-Wurf-Spieler ist oft nahe am Passen aber normalerweise ein Nehmen wegen Rückverdopplungspotenzial.",
          nl: "2-worpen vs 3-worpen posities zijn uitgooiraces waar één speler (gemiddeld) nog 2 worpen nodig heeft om te eindigen, de andere 3. Dit zijn kritieke dobbelsteenposities. De speler die 2 worpen nodig heeft heeft meestal een enorme verdubbeling, en de 3-worpen speler is vaak dicht bij passen maar meestal een nemen vanwege herverdubbel potentieel."
        }
      },
      {
        question: {
          en: "What is 'neil's number' or EMG (Effective Match Gammons)?",
          es: "¿Qué es 'neil's number' o EMG (Gammons Efectivos de Match)?",
          de: "Was ist 'neil's number' oder EMG (Effektive Match-Gammons)?",
          nl: "Wat is 'neil's number' of EMG (Effectieve Wedstrijd Gammons)?"
        },
        options: [
          { en: "Formula converting money game gammon value to match equity", es: "Fórmula convirtiendo valor de gammon de juego de dinero a equity de match", de: "Formel zum Konvertieren von Geldspiel-Gammon-Wert zu Match-Equity", nl: "Formule die geldspel gammon waarde converteert naar wedstrijd equity" },
          { en: "Player rating system", es: "Sistema de calificación de jugadores", de: "Spieler-Bewertungssystem", nl: "Speler beoordelingssysteem" },
          { en: "Gammon counting method", es: "Método de conteo de gammon", de: "Gammon-Zählmethode", nl: "Gammon telmethode" },
          { en: "Tournament scoring", es: "Puntuación de torneo", de: "Turnier-Wertung", nl: "Toernooi score" }
        ],
        correct: 0,
        explanation: {
          en: "Neil's Number (developed by Neil Kazaross) converts cubeless money game rollouts to match play equity. It calculates how much gammons are worth at a specific match score. EMG adjusts win/gammon/backgammon percentages based on match score to give accurate match equity, since gammon value varies dramatically by score.",
          es: "Neil's Number (desarrollado por Neil Kazaross) convierte rollouts de juego de dinero sin cubo a equity de juego de match. Calcula cuánto valen los gammons en un puntaje específico de match. EMG ajusta porcentajes de victoria/gammon/backgammon basándose en puntaje de match para dar equity de match precisa, ya que el valor de gammon varía dramáticamente por puntaje.",
          de: "Neil's Number (entwickelt von Neil Kazaross) konvertiert würfellose Geldspiel-Rollouts zu Match-Spiel-Equity. Es berechnet wie viel Gammons bei einem spezifischen Match-Stand wert sind. EMG passt Gewinn/Gammon/Backgammon-Prozentsätze basierend auf Match-Stand an um genaues Match-Equity zu geben, da Gammon-Wert dramatisch je nach Stand variiert.",
          nl: "Neil's Number (ontwikkeld door Neil Kazaross) converteert dobbelsteenloze geldspel rollouts naar wedstrijdspel equity. Het berekent hoeveel gammons waard zijn bij een specifieke wedstrijdscore. EMG past win/gammon/backgammon percentages aan op basis van wedstrijdscore om nauwkeurige wedstrijd equity te geven, aangezien gammon waarde dramatisch varieert per score."
        }
      },
      {
        question: {
          en: "What is a 'beaver' in backgammon?",
          es: "¿Qué es un 'beaver' en backgammon?",
          de: "Was ist ein 'Beaver' im Backgammon?",
          nl: "Wat is een 'beaver' in backgammon?"
        },
        options: [
          { en: "Accepting double and immediately redoubling while keeping cube", es: "Aceptar doble e inmediatamente redoblar mientras se mantiene el cubo", de: "Doppeln annehmen und sofort rückverdoppeln während Würfel behalten wird", nl: "Verdubbeling accepteren en onmiddellijk herverdubbelen terwijl dobbelsteen behouden wordt" },
          { en: "Animal mascot", es: "Mascota animal", de: "Tier-Maskottchen", nl: "Dier mascotte" },
          { en: "Building strategy", es: "Estrategia de construcción", de: "Baustrategie", nl: "Bouwstrategie" },
          { en: "Type of opening", es: "Tipo de apertura", de: "Art der Eröffnung", nl: "Type opening" }
        ],
        correct: 0,
        explanation: {
          en: "A beaver (optional rule, common in money games) allows the player receiving a double to accept AND immediately redouble to 4x while retaining cube ownership. Used when you think the doubler made a mistake. For example, if doubled to 2 but you're actually favored, you beaver to 4 and keep the cube. Very aggressive!",
          es: "Un beaver (regla opcional, común en juegos de dinero) permite al jugador que recibe un doble aceptar E inmediatamente redoblar a 4x mientras retiene la propiedad del cubo. Se usa cuando crees que el doblador cometió un error. Por ejemplo, si te doblan a 2 pero en realidad eres favorito, haces beaver a 4 y mantienes el cubo. ¡Muy agresivo!",
          de: "Ein Beaver (optionale Regel, üblich in Geldspielen) erlaubt dem Spieler der ein Doppeln erhält zu akzeptieren UND sofort auf 4x rückzuverdoppeln während Würfelbesitz behalten wird. Verwendet wenn Sie denken der Verdoppler machte einen Fehler. Zum Beispiel wenn auf 2 verdoppelt aber Sie tatsächlich favorisiert sind, beavern Sie auf 4 und behalten den Würfel. Sehr aggressiv!",
          nl: "Een beaver (optionele regel, gebruikelijk in geldspellen) staat de speler die een verdubbeling ontvangt toe te accepteren EN onmiddellijk te herverdubbelen naar 4x terwijl dobbelsteenbezit behouden wordt. Gebruikt wanneer je denkt dat de verdubbeler een fout maakte. Bijvoorbeeld, als verdubbeld naar 2 maar je bent eigenlijk favoriet, beaver je naar 4 en behoud je de dobbelsteen. Zeer agressief!"
        }
      },
      {
        question: {
          en: "What is a 'raccoon' in backgammon?",
          es: "¿Qué es un 'raccoon' en backgammon?",
          de: "Was ist ein 'Raccoon' im Backgammon?",
          nl: "Wat is een 'raccoon' in backgammon?"
        },
        options: [
          { en: "Re-beavering the beaver - accepting beaver and redoubling again", es: "Re-beaver el beaver - aceptar beaver y redoblar de nuevo", de: "Den Beaver re-beavern - Beaver annehmen und erneut rückverdoppeln", nl: "De beaver her-beaveren - beaver accepteren en opnieuw herverdubbelen" },
          { en: "Night-time playing", es: "Juego nocturno", de: "Nachtspiel", nl: "Nacht spelen" },
          { en: "Stealing checkers", es: "Robar fichas", de: "Steine stehlen", nl: "Stenen stelen" },
          { en: "Masked strategy", es: "Estrategia enmascarada", de: "Maskierte Strategie", nl: "Gemaskeerde strategie" }
        ],
        correct: 0,
        explanation: {
          en: "A raccoon (very rare optional rule) is accepting a beaver and immediately re-beavering to 8x! If opponent doubles to 2, you beaver to 4, they raccoon to 8 (keeping cube). This can escalate quickly. Most serious players don't use raccoons as it gets absurd, but beavers are common in money games.",
          es: "Un raccoon (regla opcional muy rara) es aceptar un beaver e inmediatamente re-beaver a 8x! Si el oponente dobla a 2, haces beaver a 4, ellos raccoon a 8 (manteniendo cubo). Esto puede escalar rápidamente. La mayoría de jugadores serios no usan raccoons ya que se vuelve absurdo, pero los beavers son comunes en juegos de dinero.",
          de: "Ein Raccoon (sehr seltene optionale Regel) ist einen Beaver zu akzeptieren und sofort auf 8x re-zu-beavern! Wenn Gegner auf 2 verdoppelt, beavern Sie auf 4, sie raccoonen auf 8 (Würfel behaltend). Dies kann schnell eskalieren. Die meisten ernsthaften Spieler verwenden keine Raccoons da es absurd wird, aber Beavers sind üblich in Geldspielen.",
          nl: "Een raccoon (zeer zeldzame optionele regel) is een beaver accepteren en onmiddellijk her-beaveren naar 8x! Als tegenstander verdubbelt naar 2, beaver je naar 4, zij raccoonen naar 8 (dobbelsteen behoudend). Dit kan snel escaleren. De meeste serieuze spelers gebruiken geen raccoons omdat het absurd wordt, maar beavers zijn gebruikelijk in geldspellen."
        }
      },
      {
        question: {
          en: "What is 'match equity' and how does it differ from cubeless equity?",
          es: "¿Qué es 'match equity' y en qué se diferencia de equity sin cubo?",
          de: "Was ist 'Match-Equity' und wie unterscheidet es sich von würfelloser Equity?",
          nl: "Wat is 'wedstrijd equity' en hoe verschilt het van dobbelsteenloze equity?"
        },
        options: [
          { en: "Match equity: your probability of winning the match; Cubeless: single game winning %", es: "Match equity: tu probabilidad de ganar el match; Sin cubo: % de ganar un solo juego", de: "Match-Equity: Ihre Wahrscheinlichkeit das Match zu gewinnen; Würfellos: einzelnes Spiel-Gewinn-Prozent", nl: "Wedstrijd equity: je kans om de wedstrijd te winnen; Dobbelsteenloos: enkel spel win percentage" },
          { en: "Same thing different names", es: "Misma cosa nombres diferentes", de: "Dasselbe verschiedene Namen", nl: "Hetzelfde verschillende namen" },
          { en: "Match equity: tournament only; Cubeless: money only", es: "Match equity: solo torneo; Sin cubo: solo dinero", de: "Match-Equity: nur Turnier; Würfellos: nur Geld", nl: "Wedstrijd equity: alleen toernooi; Dobbelsteenloos: alleen geld" },
          { en: "Match equity includes cube; Cubeless doesn't", es: "Match equity incluye cubo; Sin cubo no", de: "Match-Equity beinhaltet Würfel; Würfellos nicht", nl: "Wedstrijd equity omvat dobbelsteen; Dobbelsteenloos niet" }
        ],
        correct: 0,
        explanation: {
          en: "Match equity is your overall probability of winning the match from the current score. Cubeless equity is your winning percentage in the current game position if the cube didn't exist. For example, 70% cubeless equity doesn't mean 70% match equity - you must consider the match score, cube level, and gammon chances to calculate match equity.",
          es: "Match equity es tu probabilidad general de ganar el match desde el puntaje actual. Equity sin cubo es tu porcentaje de ganar en la posición actual del juego si el cubo no existiera. Por ejemplo, 70% equity sin cubo no significa 70% match equity - debes considerar el puntaje del match, nivel del cubo y posibilidades de gammon para calcular match equity.",
          de: "Match-Equity ist Ihre Gesamtwahrscheinlichkeit das Match vom aktuellen Stand zu gewinnen. Würfellose Equity ist Ihr Gewinnprozentsatz in der aktuellen Spielposition wenn der Würfel nicht existierte. Zum Beispiel bedeutet 70% würfellose Equity nicht 70% Match-Equity - Sie müssen Match-Stand, Würfelniveau und Gammon-Chancen berücksichtigen um Match-Equity zu berechnen.",
          nl: "Wedstrijd equity is je totale kans om de wedstrijd te winnen vanaf de huidige score. Dobbelsteenloze equity is je winpercentage in de huidige spelpositie als de dobbelsteen niet bestond. Bijvoorbeeld, 70% dobbelsteenloze equity betekent niet 70% wedstrijd equity - je moet de wedstrijdscore, dobbelsteenniveau en gammon kansen overwegen om wedstrijd equity te berekenen."
        }
      },
      {
        question: {
          en: "What is 'trailer's cube advantage' in match play?",
          es: "¿Qué es 'ventaja de cubo del que va perdiendo' en juego de match?",
          de: "Was ist 'Würfelvorteil des Zurückliegenden' im Match-Spiel?",
          nl: "Wat is 'dobbelsteenvoordeel van de achterliggende' in wedstrijdspel?"
        },
        options: [
          { en: "Trailing player can double more aggressively due to score", es: "Jugador que va perdiendo puede doblar más agresivamente debido al puntaje", de: "Zurückliegender Spieler kann aggressiver verdoppeln wegen Stand", nl: "Achterliggende speler kan agressiever verdubbelen vanwege score" },
          { en: "Leader's advantage with cube", es: "Ventaja del líder con cubo", de: "Vorteil des Führenden mit Würfel", nl: "Voordeel van leider met dobbelsteen" },
          { en: "Trailer gets extra cube", es: "El que va perdiendo obtiene cubo extra", de: "Zurückliegender bekommt Extra-Würfel", nl: "Achterliggende krijgt extra dobbelsteen" },
          { en: "Moving cube towards trailer", es: "Mover cubo hacia el que va perdiendo", de: "Würfel zum Zurückliegenden bewegen", nl: "Dobbelsteen naar achterliggende bewegen" }
        ],
        correct: 0,
        explanation: {
          en: "In match play, the trailing player often has more aggressive cube action. Being behind, they need to win more games, so they can double with less advantage. The leader must be more cautious - they're protecting their lead and can't risk losing double points as easily. This creates asymmetric cube strategy based on match score.",
          es: "En juego de match, el jugador que va perdiendo a menudo tiene acción de cubo más agresiva. Al estar atrás, necesitan ganar más juegos, por lo que pueden doblar con menos ventaja. El líder debe ser más cauteloso - están protegiendo su ventaja y no pueden arriesgar perder puntos dobles tan fácilmente. Esto crea estrategia de cubo asimétrica basada en puntaje de match.",
          de: "Im Match-Spiel hat der zurückliegende Spieler oft aggressivere Würfelaktion. Da er zurückliegt, muss er mehr Spiele gewinnen, also kann er mit weniger Vorteil verdoppeln. Der Führende muss vorsichtiger sein - er schützt seinen Vorsprung und kann es sich nicht so leicht leisten doppelte Punkte zu verlieren. Dies schafft asymmetrische Würfelstrategie basierend auf Match-Stand.",
          nl: "In wedstrijdspel heeft de achterliggende speler vaak agressievere dobbelsteenactie. Omdat ze achterliggen, moeten ze meer spellen winnen, dus kunnen ze verdubbelen met minder voordeel. De leider moet voorzichtiger zijn - ze beschermen hun voorsprong en kunnen het zich niet gemakkelijk veroorloven dubbele punten te verliezen. Dit creëert asymmetrische dobbelsteenstrategie gebaseerd op wedstrijdscore."
        }
      },
      {
        question: {
          en: "What is 'GammOnGo' and why is it useful?",
          es: "¿Qué es 'GammOnGo' y por qué es útil?",
          de: "Was ist 'GammOnGo' und warum ist es nützlich?",
          nl: "Wat is 'GammOnGo' en waarom is het nuttig?"
        },
        options: [
          { en: "Quick calculation to determine if gammons matter at match score", es: "Cálculo rápido para determinar si los gammons importan en puntaje de match", de: "Schnellberechnung um zu bestimmen ob Gammons beim Match-Stand zählen", nl: "Snelle berekening om te bepalen of gammons ertoe doen bij wedstrijdscore" },
          { en: "Mobile app for playing", es: "Aplicación móvil para jugar", de: "Mobile App zum Spielen", nl: "Mobiele app voor spelen" },
          { en: "Gammon probability calculator", es: "Calculadora de probabilidad de gammon", de: "Gammon-Wahrscheinlichkeitsrechner", nl: "Gammon kans calculator" },
          { en: "Tournament format", es: "Formato de torneo", de: "Turnierformat", nl: "Toernooi formaat" }
        ],
        correct: 0,
        explanation: {
          en: "GammOnGo (developed by Chuck Bower) is a simple rule: if the sum of both players' scores to go is odd, gammons matter normally. If even, gammons have reduced or no value. This quick check helps you know whether to play for gammons or just wins at the current match score.",
          es: "GammOnGo (desarrollado por Chuck Bower) es una regla simple: si la suma de los puntajes restantes de ambos jugadores es impar, los gammons importan normalmente. Si es par, los gammons tienen valor reducido o nulo. Esta verificación rápida te ayuda a saber si jugar para gammons o solo victorias en el puntaje actual del match.",
          de: "GammOnGo (entwickelt von Chuck Bower) ist eine einfache Regel: wenn die Summe beider Spieler-Punkte-bis-zum-Ziel ungerade ist, zählen Gammons normal. Wenn gerade, haben Gammons reduzierten oder keinen Wert. Diese Schnellprüfung hilft Ihnen zu wissen ob Sie für Gammons oder nur Siege beim aktuellen Match-Stand spielen sollten.",
          nl: "GammOnGo (ontwikkeld door Chuck Bower) is een simpele regel: als de som van beide spelers' scores tot het doel oneven is, doen gammons normaal mee. Als even, hebben gammons verminderde of geen waarde. Deze snelle check helpt je weten of je voor gammons of alleen overwinningen moet spelen bij de huidige wedstrijdscore."
        }
      },
      {
        question: {
          en: "What is a 'dead cube' situation?",
          es: "¿Qué es una situación de 'cubo muerto'?",
          de: "Was ist eine 'toter Würfel'-Situation?",
          nl: "Wat is een 'dode dobbelsteen' situatie?"
        },
        options: [
          { en: "Position where cube is worthless; neither player will double", es: "Posición donde el cubo no vale nada; ningún jugador doblará", de: "Position wo Würfel wertlos ist; kein Spieler wird verdoppeln", nl: "Positie waar dobbelsteen waardeloos is; geen enkele speler zal verdubbelen" },
          { en: "Cube fell off table", es: "Cubo cayó de la mesa", de: "Würfel vom Tisch gefallen", nl: "Dobbelsteen van tafel gevallen" },
          { en: "Cube at maximum value", es: "Cubo en valor máximo", de: "Würfel bei Maximalwert", nl: "Dobbelsteen op maximale waarde" },
          { en: "Broken cube equipment", es: "Equipo de cubo roto", de: "Kaputte Würfelausrüstung", nl: "Kapotte dobbelsteenuitrusting" }
        ],
        correct: 0,
        explanation: {
          en: "A dead cube situation occurs at certain match scores where neither player will ever double because it's strategically wrong. For example, at 2-away, 2-away (after Crawford), both players should never double - the leader because they're protecting their position, the trailer because doubling gives away cube access without benefit. The game plays out as if there's no cube.",
          es: "Una situación de cubo muerto ocurre en ciertos puntajes de match donde ningún jugador doblará nunca porque es estratégicamente incorrecto. Por ejemplo, en 2-away, 2-away (después de Crawford), ambos jugadores nunca deberían doblar - el líder porque está protegiendo su posición, el que va perdiendo porque doblar entrega acceso al cubo sin beneficio. El juego se desarrolla como si no hubiera cubo.",
          de: "Eine tote-Würfel-Situation tritt bei bestimmten Match-Ständen auf wo kein Spieler jemals verdoppeln wird weil es strategisch falsch ist. Zum Beispiel bei 2-away, 2-away (nach Crawford) sollten beide Spieler niemals verdoppeln - der Führende weil er seine Position schützt, der Zurückliegende weil Verdoppeln Würfelzugang ohne Vorteil weggibt. Das Spiel läuft ab als gäbe es keinen Würfel.",
          nl: "Een dode dobbelsteen situatie vindt plaats bij bepaalde wedstrijdscores waar geen enkele speler ooit zal verdubbelen omdat het strategisch verkeerd is. Bijvoorbeeld, bij 2-away, 2-away (na Crawford), zouden beide spelers nooit moeten verdubbelen - de leider omdat ze hun positie beschermen, de achterliggende omdat verdubbelen dobbelsteentoegang weggeeft zonder voordeel. Het spel speelt zich af alsof er geen dobbelsteen is."
        }
      },
      {
        question: {
          en: "What is the 'Crawford rule' in match play?",
          es: "¿Qué es la 'regla Crawford' en juego de match?",
          de: "Was ist die 'Crawford-Regel' im Match-Spiel?",
          nl: "Wat is de 'Crawford regel' in wedstrijdspel?"
        },
        options: [
          { en: "When one player is 1-away, next game has no doubling cube", es: "Cuando un jugador está a 1 de ganar, el siguiente juego no tiene cubo de doblar", de: "Wenn ein Spieler 1-away ist, hat nächstes Spiel keinen Dopplungswürfel", nl: "Wanneer één speler 1-away is, heeft volgend spel geen verdubbeldobbelsteen" },
          { en: "Mandatory break after 5 games", es: "Descanso obligatorio después de 5 juegos", de: "Pflichtpause nach 5 Spielen", nl: "Verplichte pauze na 5 spellen" },
          { en: "Cube starts at 2", es: "Cubo comienza en 2", de: "Würfel startet bei 2", nl: "Dobbelsteen start bij 2" },
          { en: "Gammons count double", es: "Gammons cuentan doble", de: "Gammons zählen doppelt", nl: "Gammons tellen dubbel" }
        ],
        correct: 0,
        explanation: {
          en: "The Crawford rule states that when one player reaches 1-away from winning the match, the next game is played without the doubling cube (Crawford game). This prevents the trailing player from immediately doubling to win or lose the match on a single game. After the Crawford game, the cube is back in play.",
          es: "La regla Crawford establece que cuando un jugador llega a 1 punto de ganar el match, el siguiente juego se juega sin el cubo de doblar (juego Crawford). Esto previene que el jugador que va perdiendo doble inmediatamente para ganar o perder el match en un solo juego. Después del juego Crawford, el cubo vuelve a estar en juego.",
          de: "Die Crawford-Regel besagt dass wenn ein Spieler 1-away vom Matchsieg erreicht, das nächste Spiel ohne Dopplungswürfel gespielt wird (Crawford-Spiel). Dies verhindert dass der zurückliegende Spieler sofort verdoppelt um das Match in einem einzelnen Spiel zu gewinnen oder verlieren. Nach dem Crawford-Spiel ist der Würfel wieder im Spiel.",
          nl: "De Crawford regel stelt dat wanneer één speler 1-away bereikt van het winnen van de wedstrijd, het volgende spel wordt gespeeld zonder de verdubbeldobbelsteen (Crawford spel). Dit voorkomt dat de achterliggende speler onmiddellijk verdubbelt om de wedstrijd te winnen of verliezen in een enkel spel. Na het Crawford spel is de dobbelsteen weer in het spel."
        }
      },
      {
        question: {
          en: "What is 'XG Roller++' evaluation level?",
          es: "¿Qué es el nivel de evaluación 'XG Roller++'?",
          de: "Was ist 'XG Roller++'-Bewertungsstufe?",
          nl: "Wat is 'XG Roller++' evaluatieniveau?"
        },
        options: [
          { en: "Highest analysis level in eXtreme Gammon using neural nets", es: "Nivel de análisis más alto en eXtreme Gammon usando redes neuronales", de: "Höchste Analysestufe in eXtreme Gammon mit neuronalen Netzen", nl: "Hoogste analyseniveau in eXtreme Gammon met neurale netwerken" },
          { en: "Beginner bot setting", es: "Configuración de bot principiante", de: "Anfänger-Bot-Einstellung", nl: "Beginner bot instelling" },
          { en: "Fast evaluation mode", es: "Modo de evaluación rápida", de: "Schneller Bewertungsmodus", nl: "Snelle evaluatie modus" },
          { en: "Rolling technique", es: "Técnica de lanzamiento", de: "Wurftechnik", nl: "Gooi techniek" }
        ],
        correct: 0,
        explanation: {
          en: "XG Roller++ is the highest-quality evaluation setting in eXtreme Gammon software. It uses deep neural network analysis for the most accurate position assessment, but is very slow. It's primarily used for creating reference positions and studying critical positions. Most analysis uses faster levels (Supremo, World Class) which are nearly as accurate.",
          es: "XG Roller++ es la configuración de evaluación de más alta calidad en el software eXtreme Gammon. Usa análisis de red neuronal profunda para la evaluación de posición más precisa, pero es muy lento. Se usa principalmente para crear posiciones de referencia y estudiar posiciones críticas. La mayoría del análisis usa niveles más rápidos (Supremo, World Class) que son casi tan precisos.",
          de: "XG Roller++ ist die höchstqualitative Bewertungseinstellung in eXtreme Gammon Software. Es verwendet tiefe neuronale Netzwerkanalyse für die genaueste Positionsbewertung, ist aber sehr langsam. Es wird hauptsächlich verwendet um Referenzpositionen zu erstellen und kritische Positionen zu studieren. Die meiste Analyse verwendet schnellere Stufen (Supremo, World Class) die fast so genau sind.",
          nl: "XG Roller++ is de hoogste kwaliteit evaluatie-instelling in eXtreme Gammon software. Het gebruikt diepe neurale netwerk analyse voor de meest nauwkeurige positiebeoordeling, maar is zeer langzaam. Het wordt voornamelijk gebruikt voor het creëren van referentieposities en bestuderen van kritieke posities. De meeste analyse gebruikt snellere niveaus (Supremo, World Class) die bijna even nauwkeurig zijn."
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
