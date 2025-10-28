// AI Ethics Quiz - Level 5: Accountability and Responsibility
(function() {
  const level5 = {
    name: {
      en: "AI Ethics Level 5",
      es: "Etica de IA Nivel 5",
      de: "KI-Ethik Stufe 5",
      nl: "AI Ethiek Level 5"
    },
    questions: [
      {
        question: {
          en: "What is the concept of 'algorithmic auditing' in AI systems?",
          es: "Que es el concepto de 'auditoria algoritmica' en sistemas de IA?",
          de: "Was ist das Konzept des 'algorithmischen Audits' in KI-Systemen?",
          nl: "Wat is het concept van 'algoritmische auditing' in AI systemen?"
        },
        options: [
          { en: "Regularly examining AI systems for bias, fairness, and performance", es: "Examinar regularmente sistemas de IA para sesgo, equidad y rendimiento", de: "Regelmaessige Pruefung von KI-Systemen auf Verzerrung, Fairness und Leistung", nl: "Regelmatig onderzoeken van AI systemen op bias, eerlijkheid en prestatie" },
          { en: "Counting how many times AI is used", es: "Contar cuantas veces se usa la IA", de: "Zaehlen wie oft KI verwendet wird", nl: "Tellen hoe vaak AI gebruikt wordt" },
          { en: "Checking if AI saves money", es: "Verificar si la IA ahorra dinero", de: "Pruefen ob KI Geld spart", nl: "Controleren of AI geld bespaart" },
          { en: "Testing AI speed only", es: "Solo probar la velocidad de IA", de: "Nur KI-Geschwindigkeit testen", nl: "Alleen AI snelheid testen" }
        ],
        correct: 0,
        explanation: {
          en: "Algorithmic auditing involves systematic examination of AI systems to identify potential biases, ensure fairness, and verify that the system performs as intended across different groups and scenarios.",
          es: "La auditoria algoritmica involucra examinacion sistematica de sistemas de IA para identificar posibles sesgos, asegurar equidad y verificar que el sistema funcione como se pretende en diferentes grupos y escenarios.",
          de: "Algorithmisches Auditing beinhaltet systematische Untersuchung von KI-Systemen um potentielle Verzerrungen zu identifizieren, Fairness sicherzustellen und zu verifizieren dass das System wie beabsichtigt in verschiedenen Gruppen und Szenarien funktioniert.",
          nl: "Algoritmische auditing houdt systematisch onderzoek van AI systemen in om mogelijke bias te identificeren, eerlijkheid te waarborgen en te verifiëren dat het systeem werkt zoals bedoeld voor verschillende groepen en scenario's."
        }
      },
      {
        question: {
          en: "What does 'differential privacy' aim to protect in AI data processing?",
          es: "Que busca proteger la 'privacidad diferencial' en el procesamiento de datos de IA?",
          de: "Was zielt 'differential privacy' darauf ab in der KI-Datenverarbeitung zu schuetzen?",
          nl: "Wat beoogt 'differential privacy' te beschermen in AI data verwerking?"
        },
        options: [
          { en: "Individual privacy while allowing useful data analysis", es: "Privacidad individual mientras permite analisis de datos util", de: "Individuelle Privatsphaere waehrend nuetzliche Datenanalyse ermoeglicht wird", nl: "Individuele privacy terwijl nuttige data-analyse mogelijk blijft" },
          { en: "Different types of databases", es: "Diferentes tipos de bases de datos", de: "Verschiedene Arten von Datenbanken", nl: "Verschillende soorten databases" },
          { en: "Separating private and public data", es: "Separar datos privados y publicos", de: "Private und oeffentliche Daten trennen", nl: "Privé en publieke data scheiden" },
          { en: "Making data processing faster", es: "Hacer el procesamiento de datos mas rapido", de: "Datenverarbeitung schneller machen", nl: "Data verwerking sneller maken" }
        ],
        correct: 0,
        explanation: {
          en: "Differential privacy is a mathematical framework that provides strong privacy guarantees by adding controlled noise to data, ensuring individual records cannot be identified while preserving the statistical utility of the dataset.",
          es: "La privacidad diferencial es un marco matematico que proporciona fuertes garantias de privacidad agregando ruido controlado a los datos, asegurando que registros individuales no puedan ser identificados mientras preserva la utilidad estadistica del conjunto de datos.",
          de: "Differential Privacy ist ein mathematisches Framework das starke Privatsphaeren-Garantien bietet durch hinzufuegen von kontrolliertem Rauschen zu Daten, wodurch sichergestellt wird dass individuelle Datensaetze nicht identifiziert werden koennen waehrend die statistische Nuetzlichkeit des Datensatzes erhalten bleibt.",
          nl: "Differential privacy is een wiskundig framework dat sterke privacy garanties biedt door gecontroleerde ruis toe te voegen aan data, waardoor individuele records niet geïdentificeerd kunnen worden terwijl de statistische bruikbaarheid van de dataset behouden blijft."
        }
      },
      {
        question: {
          en: "What is 'value alignment' in the context of advanced AI systems?",
          es: "Que es la 'alineacion de valores' en el contexto de sistemas de IA avanzados?",
          de: "Was ist 'Wertausrichtung' im Kontext fortgeschrittener KI-Systeme?",
          nl: "Wat is 'waarde-uitlijning' in de context van geavanceerde AI systemen?"
        },
        options: [
          { en: "Making sure AI systems pursue goals compatible with human values", es: "Asegurar que sistemas de IA persigan objetivos compatibles con valores humanos", de: "Sicherstellen dass KI-Systeme Ziele verfolgen die mit menschlichen Werten vereinbar sind", nl: "Ervoor zorgen dat AI systemen doelen nastreven die verenigbaar zijn met menselijke waarden" },
          { en: "Aligning AI hardware components correctly", es: "Alinear correctamente componentes de hardware de IA", de: "KI-Hardware-Komponenten korrekt ausrichten", nl: "AI hardware componenten correct uitlijnen" },
          { en: "Setting the same price for all AI services", es: "Establecer el mismo precio para todos los servicios de IA", de: "Den gleichen Preis fuer alle KI-Dienste setzen", nl: "Dezelfde prijs instellen voor alle AI diensten" },
          { en: "Making AI work at the same speed", es: "Hacer que la IA funcione a la misma velocidad", de: "KI mit der gleichen Geschwindigkeit arbeiten lassen", nl: "AI op dezelfde snelheid laten werken" }
        ],
        correct: 0,
        explanation: {
          en: "Value alignment is the challenge of ensuring that advanced AI systems understand and pursue objectives that are genuinely beneficial to humanity, avoiding scenarios where AI optimizes for goals that seem right but lead to harmful outcomes.",
          es: "La alineacion de valores es el desafio de asegurar que sistemas de IA avanzados entiendan y persigan objetivos que son genuinamente beneficiosos para la humanidad, evitando escenarios donde la IA optimiza objetivos que parecen correctos pero llevan a resultados daninos.",
          de: "Wertausrichtung ist die Herausforderung sicherzustellen dass fortgeschrittene KI-Systeme Ziele verstehen und verfolgen die genuinen Nutzen fuer die Menschheit bringen, wobei Szenarien vermieden werden wo KI fuer Ziele optimiert die richtig erscheinen aber zu schaedlichen Ergebnissen fuehren.",
          nl: "Waarde-uitlijning is de uitdaging ervoor te zorgen dat geavanceerde AI systemen doelen begrijpen en nastreven die oprecht gunstig zijn voor de mensheid, waarbij scenario's vermeden worden waar AI optimaliseert voor doelen die juist lijken maar leiden tot schadelijke uitkomsten."
        }
      },
      {
        question: {
          en: "What is the 'trolley problem' analogy used to illustrate in AI ethics?",
          es: "Para que se usa la analogia del 'problema del tranvia' en etica de IA?",
          de: "Wofuer wird die 'Trolley-Problem' Analogie in der KI-Ethik verwendet?",
          nl: "Waarvoor wordt de 'trolley probleem' analogie gebruikt in AI ethiek?"
        },
        options: [
          { en: "How AI should make difficult moral decisions involving trade-offs", es: "Como la IA deberia tomar decisiones morales dificiles que involucran compromisos", de: "Wie KI schwierige moralische Entscheidungen mit Abwaegungen treffen sollte", nl: "Hoe AI moeilijke morele beslissingen met afwegingen zou moeten maken" },
          { en: "How to design better transportation AI", es: "Como disenar mejor IA de transporte", de: "Wie bessere Transport-KI zu entwerfen", nl: "Hoe betere transport AI te ontwerpen" },
          { en: "How AI systems should handle trolley scheduling", es: "Como sistemas de IA deberian manejar programacion de tranvias", de: "Wie KI-Systeme Trolley-Planung handhaben sollten", nl: "Hoe AI systemen trolley planning zouden moeten afhandelen" },
          { en: "How to solve traffic problems with AI", es: "Como resolver problemas de trafico con IA", de: "Wie Verkehrsprobleme mit KI geloest werden", nl: "Hoe verkeersprobllemen op te lossen met AI" }
        ],
        correct: 0,
        explanation: {
          en: "The trolley problem is used in AI ethics to explore how autonomous systems should make moral decisions when lives are at stake, such as in self-driving cars choosing between different harmful outcomes.",
          es: "El problema del tranvia se usa en etica de IA para explorar como sistemas autonomos deberian tomar decisiones morales cuando vidas estan en riesgo, como en autos autonomos eligiendo entre diferentes resultados daninos.",
          de: "Das Trolley-Problem wird in der KI-Ethik verwendet um zu erforschen wie autonome Systeme moralische Entscheidungen treffen sollten wenn Leben auf dem Spiel stehen, wie bei selbstfahrenden Autos die zwischen verschiedenen schaedlichen Ergebnissen waehlen.",
          nl: "Het trolley probleem wordt gebruikt in AI ethiek om te onderzoeken hoe autonome systemen morele beslissingen zouden moeten nemen wanneer levens op het spel staan, zoals bij zelfrijdende auto's die kiezen tussen verschillende schadelijke uitkomsten."
        }
      },
      {
        question: {
          en: "What does 'AI explicability' require beyond simple transparency?",
          es: "Que requiere la 'explicabilidad de IA' mas alla de simple transparencia?",
          de: "Was erfordert 'KI-Erklaerbarkeit' ueber einfache Transparenz hinaus?",
          nl: "Wat vereist 'AI uitlegbaarheid' naast eenvoudige transparantie?"
        },
        options: [
          { en: "Providing understandable explanations tailored to different audiences", es: "Proporcionar explicaciones comprensibles adaptadas a diferentes audiencias", de: "Verstaendliche Erklaerungen liefern die auf verschiedene Zielgruppen zugeschnitten sind", nl: "Begrijpelijke uitleg bieden die aangepast is aan verschillende doelgroepen" },
          { en: "Making AI code completely public", es: "Hacer completamente publico el codigo de IA", de: "KI-Code vollstaendig oeffentlich machen", nl: "AI code volledig openbaar maken" },
          { en: "Using only simple algorithms", es: "Usar solo algoritmos simples", de: "Nur einfache Algorithmen verwenden", nl: "Alleen eenvoudige algoritmes gebruiken" },
          { en: "Showing all training data", es: "Mostrar todos los datos de entrenamiento", de: "Alle Trainingsdaten zeigen", nl: "Alle trainingsdata tonen" }
        ],
        correct: 0,
        explanation: {
          en: "AI explicability goes beyond transparency by requiring that explanations be meaningful and comprehensible to the specific audience - whether technical experts, regulators, or end users - rather than just revealing the underlying mechanics.",
          es: "La explicabilidad de IA va mas alla de la transparencia requiriendo que las explicaciones sean significativas y comprensibles para la audiencia especifica - ya sean expertos tecnicos, reguladores o usuarios finales - en lugar de solo revelar la mecanica subyacente.",
          de: "KI-Erklaerbarkeit geht ueber Transparenz hinaus indem sie verlangt dass Erklaerungen sinnvoll und verstaendlich fuer die spezifische Zielgruppe sind - seien es technische Experten, Regulatoren oder Endnutzer - anstatt nur die zugrundeliegende Mechanik zu offenbaren.",
          nl: "AI uitlegbaarheid gaat verder dan transparantie door te eisen dat uitleg betekenisvol en begrijpelijk is voor het specifieke publiek - of dat nu technische experts, regelgevers of eindgebruikers zijn - in plaats van alleen de onderliggende mechanica te onthullen."
        }
      },
      {
        question: {
          en: "What is 'moral agency' in AI and who bears responsibility for AI decisions?",
          es: "Que es la 'agencia moral' en IA y quien tiene responsabilidad por las decisiones de IA?",
          de: "Was ist 'moralische Handlungsfaehigkeit' in der KI und wer traegt Verantwortung fuer KI-Entscheidungen?",
          nl: "Wat is 'morele handelingsbevoegdheid' in AI en wie draagt verantwoordelijkheid voor AI beslissingen?"
        },
        options: [
          { en: "Humans remain responsible as AI lacks moral agency and cannot be held accountable", es: "Los humanos siguen siendo responsables ya que la IA carece de agencia moral y no puede ser responsabilizada", de: "Menschen bleiben verantwortlich da KI moralische Handlungsfaehigkeit fehlt und nicht verantwortlich gemacht werden kann", nl: "Mensen blijven verantwoordelijk omdat AI morele handelingsbevoegdheid mist en niet verantwoordelijk gehouden kan worden" },
          { en: "AI systems are fully responsible for their own decisions", es: "Los sistemas de IA son completamente responsables de sus propias decisiones", de: "KI-Systeme sind vollstaendig verantwortlich fuer ihre eigenen Entscheidungen", nl: "AI systemen zijn volledig verantwoordelijk voor hun eigen beslissingen" },
          { en: "No one is responsible for AI decisions", es: "Nadie es responsable de las decisiones de IA", de: "Niemand ist verantwortlich fuer KI-Entscheidungen", nl: "Niemand is verantwoordelijk voor AI beslissingen" },
          { en: "Only the computer programmers are responsible", es: "Solo los programadores de computadoras son responsables", de: "Nur die Computerprogrammierer sind verantwortlich", nl: "Alleen de computerprogrammeurs zijn verantwoordelijk" }
        ],
        correct: 0,
        explanation: {
          en: "Currently, AI systems lack moral agency and cannot be held morally responsible. Responsibility typically falls on humans - developers, deployers, users, or organizations - depending on the context and nature of the decision.",
          es: "Actualmente, los sistemas de IA carecen de agencia moral y no pueden ser responsabilizados moralmente. La responsabilidad tipicamente recae en humanos - desarrolladores, implementadores, usuarios u organizaciones - dependiendo del contexto y naturaleza de la decision.",
          de: "Derzeit fehlt KI-Systemen moralische Handlungsfaehigkeit und sie koennen nicht moralisch verantwortlich gemacht werden. Die Verantwortung liegt typischerweise bei Menschen - Entwicklern, Bereitstellern, Nutzern oder Organisationen - je nach Kontext und Art der Entscheidung.",
          nl: "Momenteel missen AI systemen morele handelingsbevoegdheid en kunnen ze niet moreel verantwoordelijk gehouden worden. Verantwoordelijkheid ligt meestal bij mensen - ontwikkelaars, implementeerders, gebruikers of organisaties - afhankelijk van de context en aard van de beslissing."
        }
      },
      {
        question: {
          en: "What is 'human oversight' in AI systems?",
          es: "Que es la 'supervision humana' en sistemas de IA?",
          de: "Was ist 'menschliche Aufsicht' in KI-Systemen?",
          nl: "Wat is 'menselijk toezicht' in AI systemen?"
        },
        options: [
          { en: "Meaningful human control and monitoring of AI decisions and operations", es: "Control y monitoreo humano significativo de decisiones y operaciones de IA", de: "Bedeutungsvolle menschliche Kontrolle und Ueberwachung von KI-Entscheidungen und -Operationen", nl: "Betekenisvolle menselijke controle en monitoring van AI beslissingen en operaties" },
          { en: "Having humans physically watch AI computers", es: "Tener humanos observando fisicamente computadoras de IA", de: "Menschen physisch KI-Computer beobachten lassen", nl: "Mensen fysiek AI computers laten observeren" },
          { en: "Only technical supervision of hardware", es: "Solo supervision tecnica de hardware", de: "Nur technische Ueberwachung von Hardware", nl: "Alleen technisch toezicht op hardware" },
          { en: "Checking AI output once per year", es: "Verificar salida de IA una vez por ano", de: "KI-Ausgabe einmal pro Jahr pruefen", nl: "AI output eens per jaar controleren" }
        ],
        correct: 0,
        explanation: {
          en: "Human oversight involves maintaining meaningful human control over AI systems, including the ability to intervene, override decisions, monitor performance, and ensure systems operate within intended parameters and ethical boundaries.",
          es: "La supervision humana involucra mantener control humano significativo sobre sistemas de IA, incluyendo la capacidad de intervenir, anular decisiones, monitorear rendimiento y asegurar que los sistemas operen dentro de parametros intencionales y limites eticos.",
          de: "Menschliche Aufsicht beinhaltet die Aufrechterhaltung bedeutungsvoller menschlicher Kontrolle ueber KI-Systeme, einschliesslich der Faehigkeit einzugreifen, Entscheidungen zu ueberstimmen, Leistung zu ueberwachen und sicherzustellen dass Systeme innerhalb beabsichtigter Parameter und ethischer Grenzen operieren.",
          nl: "Menselijk toezicht houdt het behouden van betekenisvolle menselijke controle over AI systemen in, inclusief het vermogen om in te grijpen, beslissingen te overrulen, prestaties te monitoren en ervoor te zorgen dat systemen binnen bedoelde parameters en ethische grenzen opereren."
        }
      },
      {
        question: {
          en: "What is 'liability' in the context of AI harm?",
          es: "Que es la 'responsabilidad legal' en el contexto de dano por IA?",
          de: "Was ist 'Haftung' im Kontext von KI-Schaeden?",
          nl: "Wat is 'aansprakelijkheid' in de context van AI schade?"
        },
        options: [
          { en: "Legal responsibility for damages or harm caused by AI systems", es: "Responsabilidad legal por danos o perjuicios causados por sistemas de IA", de: "Rechtliche Verantwortung fuer Schaeden oder Harm verursacht durch KI-Systeme", nl: "Juridische verantwoordelijkheid voor schade veroorzaakt door AI systemen" },
          { en: "The tendency of AI to make mistakes", es: "La tendencia de la IA a cometer errores", de: "Die Tendenz von KI Fehler zu machen", nl: "De neiging van AI om fouten te maken" },
          { en: "The cost of developing AI systems", es: "El costo de desarrollar sistemas de IA", de: "Die Kosten der Entwicklung von KI-Systemen", nl: "De kosten van het ontwikkelen van AI systemen" },
          { en: "How likely AI is to work correctly", es: "Que tan probable es que la IA funcione correctamente", de: "Wie wahrscheinlich es ist dass KI korrekt funktioniert", nl: "Hoe waarschijnlijk het is dat AI correct werkt" }
        ],
        correct: 0,
        explanation: {
          en: "Liability refers to legal responsibility for damages caused by AI systems. This includes questions of who can be held legally accountable when AI causes harm - the developer, deployer, user, or owner of the system.",
          es: "La responsabilidad legal se refiere a la responsabilidad juridica por danos causados por sistemas de IA. Esto incluye preguntas sobre quien puede ser legalmente responsable cuando la IA causa dano - el desarrollador, implementador, usuario o propietario del sistema.",
          de: "Haftung bezieht sich auf rechtliche Verantwortung fuer Schaeden verursacht durch KI-Systeme. Dies beinhaltet Fragen wer rechtlich verantwortlich gemacht werden kann wenn KI Schaden verursacht - der Entwickler, Bereitsteller, Nutzer oder Eigentuemer des Systems.",
          nl: "Aansprakelijkheid verwijst naar juridische verantwoordelijkheid voor schade veroorzaakt door AI systemen. Dit omvat vragen over wie juridisch verantwoordelijk gehouden kan worden wanneer AI schade veroorzaakt - de ontwikkelaar, implementeerder, gebruiker of eigenaar van het systeem."
        }
      },
      {
        question: {
          en: "What is 'algorithmic accountability' in AI governance?",
          es: "Que es la 'responsabilidad algoritmica' en la gobernanza de IA?",
          de: "Was ist 'algorithmische Verantwortlichkeit' in der KI-Governance?",
          nl: "Wat is 'algoritmische verantwoordelijkheid' in AI governance?"
        },
        options: [
          { en: "Systems and processes to ensure AI decisions can be explained, challenged, and corrected", es: "Sistemas y procesos para asegurar que decisiones de IA puedan ser explicadas, desafiadas y corregidas", de: "Systeme und Prozesse um sicherzustellen dass KI-Entscheidungen erklaert, angefochten und korrigiert werden koennen", nl: "Systemen en processen om ervoor te zorgen dat AI beslissingen uitgelegd, betwist en gecorrigeerd kunnen worden" },
          { en: "Making algorithms count numbers correctly", es: "Hacer que algoritmos cuenten numeros correctamente", de: "Algorithmen dazu bringen Zahlen korrekt zu zaehlen", nl: "Algoritmes getallen correct laten tellen" },
          { en: "Ensuring algorithms run efficiently", es: "Asegurar que algoritmos funcionen eficientemente", de: "Sicherstellen dass Algorithmen effizient laufen", nl: "Ervoor zorgen dat algoritmes efficiënt werken" },
          { en: "Publishing all algorithm source code", es: "Publicar todo el codigo fuente de algoritmos", de: "Allen Algorithmus-Quellcode veroeffentlichen", nl: "Alle algoritme broncode publiceren" }
        ],
        correct: 0,
        explanation: {
          en: "Algorithmic accountability involves establishing mechanisms to ensure AI systems can be held accountable for their decisions, including processes for explanation, appeal, correction, and oversight to prevent and address harmful outcomes.",
          es: "La responsabilidad algoritmica involucra establecer mecanismos para asegurar que sistemas de IA puedan ser responsabilizados por sus decisiones, incluyendo procesos para explicacion, apelacion, correccion y supervision para prevenir y abordar resultados daninos.",
          de: "Algorithmische Verantwortlichkeit beinhaltet die Etablierung von Mechanismen um sicherzustellen dass KI-Systeme fuer ihre Entscheidungen verantwortlich gemacht werden koennen, einschliesslich Prozessen fuer Erklaerung, Berufung, Korrektur und Aufsicht um schaedliche Ergebnisse zu verhindern und anzugehen.",
          nl: "Algoritmische verantwoordelijkheid houdt het vaststellen van mechanismen in om ervoor te zorgen dat AI systemen verantwoordelijk gehouden kunnen worden voor hun beslissingen, inclusief processen voor uitleg, beroep, correctie en toezicht om schadelijke uitkomsten te voorkomen en aan te pakken."
        }
      },
      {
        question: {
          en: "What is 'distributed responsibility' in AI systems?",
          es: "Que es la 'responsabilidad distribuida' en sistemas de IA?",
          de: "Was ist 'verteilte Verantwortung' in KI-Systemen?",
          nl: "Wat is 'verspreide verantwoordelijkheid' in AI systemen?"
        },
        options: [
          { en: "Responsibility shared among multiple stakeholders in the AI development and deployment chain", es: "Responsabilidad compartida entre multiples partes interesadas en la cadena de desarrollo e implementacion de IA", de: "Verantwortung geteilt zwischen mehreren Stakeholdern in der KI-Entwicklungs- und Bereitstellungskette", nl: "Verantwoordelijkheid gedeeld tussen meerdere belanghebbenden in de AI ontwikkelings- en implementatieketen" },
          { en: "Responsibility handled by distributed computing systems", es: "Responsabilidad manejada por sistemas de computacion distribuida", de: "Verantwortung behandelt durch verteilte Computersysteme", nl: "Verantwoordelijkheid behandeld door gedistribueerde computersystemen" },
          { en: "Spreading liability costs across many companies", es: "Distribuir costos de responsabilidad entre muchas companias", de: "Haftungskosten auf viele Unternehmen verteilen", nl: "Aansprakelijkheidskosten spreiden over vele bedrijven" },
          { en: "Giving everyone equal responsibility regardless of involvement", es: "Dar a todos responsabilidad igual independientemente de la participacion", de: "Allen gleiche Verantwortung geben unabhaengig von der Beteiligung", nl: "Iedereen gelijke verantwoordelijkheid geven ongeacht betrokkenheid" }
        ],
        correct: 0,
        explanation: {
          en: "Distributed responsibility recognizes that AI systems involve multiple parties (developers, data providers, deployers, users, regulators) who each bear different levels and types of responsibility based on their role and control over the system.",
          es: "La responsabilidad distribuida reconoce que los sistemas de IA involucran multiples partes (desarrolladores, proveedores de datos, implementadores, usuarios, reguladores) que cada uno lleva diferentes niveles y tipos de responsabilidad basados en su rol y control sobre el sistema.",
          de: "Verteilte Verantwortung erkennt an dass KI-Systeme mehrere Parteien (Entwickler, Datenanbieter, Bereitsteller, Nutzer, Regulatoren) involvieren die jeweils verschiedene Ebenen und Arten von Verantwortung basierend auf ihrer Rolle und Kontrolle ueber das System tragen.",
          nl: "Verspreide verantwoordelijkheid erkent dat AI systemen meerdere partijen betrekken (ontwikkelaars, data aanbieders, implementeerders, gebruikers, regelgevers) die elk verschillende niveaus en soorten verantwoordelijkheid dragen gebaseerd op hun rol en controle over het systeem."
        }
      },
      {
        question: {
          en: "What is 'moral hazard' in AI decision-making systems?",
          es: "Que es el 'riesgo moral' en sistemas de toma de decisiones de IA?",
          de: "Was ist 'moralisches Risiko' in KI-Entscheidungssystemen?",
          nl: "Wat is 'moral hazard' in AI besluitvormingssystemen?"
        },
        options: [
          { en: "When people take greater risks because they don't bear full consequences of AI decisions", es: "Cuando las personas toman mayores riesgos porque no soportan las consecuencias completas de las decisiones de IA", de: "Wenn Menschen groessere Risiken eingehen weil sie nicht die vollen Konsequenzen von KI-Entscheidungen tragen", nl: "Wanneer mensen grotere risico's nemen omdat ze niet de volledige gevolgen van AI beslissingen dragen" },
          { en: "AI systems becoming dangerous to humans", es: "Sistemas de IA volviendose peligrosos para humanos", de: "KI-Systeme werden gefaehrlich fuer Menschen", nl: "AI systemen die gevaarlijk worden voor mensen" },
          { en: "Ethical dilemmas built into AI programming", es: "Dilemas eticos incorporados en la programacion de IA", de: "Ethische Dilemmata in KI-Programmierung eingebaut", nl: "Ethische dilemma's ingebouwd in AI programmering" },
          { en: "AI making morally wrong decisions", es: "IA tomando decisiones moralmente incorrectas", de: "KI trifft moralisch falsche Entscheidungen", nl: "AI die moreel verkeerde beslissingen neemt" }
        ],
        correct: 0,
        explanation: {
          en: "Moral hazard occurs when individuals or organizations take greater risks because they don't bear the full consequences of those risks, often because responsibility is shifted to AI systems or insurance covers potential damages.",
          es: "El riesgo moral ocurre cuando individuos u organizaciones toman mayores riesgos porque no soportan las consecuencias completas de esos riesgos, a menudo porque la responsabilidad se traslada a sistemas de IA o el seguro cubre danos potenciales.",
          de: "Moralisches Risiko tritt auf wenn Individuen oder Organisationen groessere Risiken eingehen weil sie nicht die vollen Konsequenzen dieser Risiken tragen, oft weil Verantwortung auf KI-Systeme verlagert wird oder Versicherungen potentielle Schaeden abdecken.",
          nl: "Moral hazard treedt op wanneer individuen of organisaties grotere risico's nemen omdat ze niet de volledige gevolgen van die risico's dragen, vaak omdat verantwoordelijkheid verschoven wordt naar AI systemen of verzekeringen mogelijke schade dekken."
        }
      },
      {
        question: {
          en: "What is 'strict liability' versus 'negligence liability' for AI systems?",
          es: "Que es 'responsabilidad estricta' versus 'responsabilidad por negligencia' para sistemas de IA?",
          de: "Was ist 'Gefaehrdungshaftung' versus 'Fahrlässigkeitshaftung' fuer KI-Systeme?",
          nl: "Wat is 'strikte aansprakelijkheid' versus 'nalatigheidsaansprakelijkheid' voor AI systemen?"
        },
        options: [
          { en: "Strict liability holds parties responsible regardless of fault; negligence requires proving carelessness", es: "Responsabilidad estricta responsabiliza a las partes independientemente de la culpa; negligencia requiere probar descuido", de: "Gefaehrdungshaftung macht Parteien unabhaengig von Verschulden verantwortlich; Fahrlässigkeit erfordert Nachweis von Sorglosigkeit", nl: "Strikte aansprakelijkheid houdt partijen verantwoordelijk ongeacht schuld; nalatigheid vereist bewijs van onzorgvuldigheid" },
          { en: "Strict liability is for serious crimes; negligence is for minor issues", es: "Responsabilidad estricta es para crimenes serios; negligencia es para problemas menores", de: "Gefaehrdungshaftung ist fuer schwere Verbrechen; Fahrlässigkeit ist fuer kleinere Probleme", nl: "Strikte aansprakelijkheid is voor ernstige misdrijven; nalatigheid is voor kleine problemen" },
          { en: "Both concepts mean exactly the same thing", es: "Ambos conceptos significan exactamente lo mismo", de: "Beide Konzepte bedeuten genau dasselbe", nl: "Beide concepten betekenen precies hetzelfde" },
          { en: "Strict liability applies only to humans; negligence applies only to AI", es: "Responsabilidad estricta aplica solo a humanos; negligencia aplica solo a IA", de: "Gefaehrdungshaftung gilt nur fuer Menschen; Fahrlässigkeit gilt nur fuer KI", nl: "Strikte aansprakelijkheid geldt alleen voor mensen; nalatigheid geldt alleen voor AI" }
        ],
        correct: 0,
        explanation: {
          en: "Strict liability holds parties responsible for harm caused by their AI systems regardless of whether they acted negligently, while negligence liability requires proving that the responsible party failed to exercise reasonable care in developing or deploying the AI.",
          es: "La responsabilidad estricta responsabiliza a las partes por dano causado por sus sistemas de IA independientemente de si actuaron con negligencia, mientras que la responsabilidad por negligencia requiere probar que la parte responsable fallo en ejercer cuidado razonable al desarrollar o implementar la IA.",
          de: "Gefaehrdungshaftung macht Parteien verantwortlich fuer Schaden verursacht durch ihre KI-Systeme unabhaengig davon ob sie fahrlässig gehandelt haben, waehrend Fahrlässigkeitshaftung erfordert zu beweisen dass die verantwortliche Partei versagt hat angemessene Sorgfalt bei der Entwicklung oder Bereitstellung der KI zu ueben.",
          nl: "Strikte aansprakelijkheid houdt partijen verantwoordelijk voor schade veroorzaakt door hun AI systemen ongeacht of ze nalatig handelden, terwijl nalatigheidsaansprakelijkheid vereist te bewijzen dat de verantwoordelijke partij faalde redelijke zorg uit te oefenen bij het ontwikkelen of implementeren van de AI."
        }
      },
      {
        question: {
          en: "What is 'human-in-the-loop' (HITL) in AI accountability?",
          es: "Que es 'humano en el bucle' (HITL) en responsabilidad de IA?",
          de: "Was ist 'Human-in-the-Loop' (HITL) in der KI-Verantwortlichkeit?",
          nl: "Wat is 'human-in-the-loop' (HITL) in AI verantwoordelijkheid?"
        },
        options: [
          { en: "Keeping humans involved in critical AI decision-making processes", es: "Mantener humanos involucrados en procesos criticos de toma de decisiones de IA", de: "Menschen in kritischen KI-Entscheidungsprozessen einbezogen halten", nl: "Mensen betrokken houden bij kritieke AI besluitvormingsprocessen" },
          { en: "Training AI using human feedback loops", es: "Entrenar IA usando bucles de retroalimentacion humana", de: "KI mit menschlichen Feedback-Schleifen trainieren", nl: "AI trainen met menselijke feedback loops" },
          { en: "Physically connecting humans to AI hardware", es: "Conectar fisicamente humanos a hardware de IA", de: "Menschen physisch mit KI-Hardware verbinden", nl: "Mensen fysiek verbinden met AI hardware" },
          { en: "Having humans debug AI code continuously", es: "Tener humanos depurando codigo de IA continuamente", de: "Menschen kontinuierlich KI-Code debuggen lassen", nl: "Mensen continu AI code laten debuggen" }
        ],
        correct: 0,
        explanation: {
          en: "Human-in-the-loop systems maintain human involvement in AI decision-making, ensuring that humans can intervene, oversee, or make final decisions in critical or high-stakes situations to maintain accountability and control.",
          es: "Los sistemas humano en el bucle mantienen participacion humana en la toma de decisiones de IA, asegurando que humanos puedan intervenir, supervisar o tomar decisiones finales en situaciones criticas o de alto riesgo para mantener responsabilidad y control.",
          de: "Human-in-the-Loop-Systeme behalten menschliche Beteiligung in KI-Entscheidungsfindung bei und stellen sicher dass Menschen eingreifen, ueberwachen oder endgueltige Entscheidungen in kritischen oder risikoreichen Situationen treffen koennen um Verantwortlichkeit und Kontrolle zu behalten.",
          nl: "Human-in-the-loop systemen behouden menselijke betrokkenheid bij AI besluitvorming, waardoor mensen kunnen ingrijpen, toezicht houden of definitieve beslissingen nemen in kritieke of risicovolle situaties om verantwoordelijkheid en controle te behouden."
        }
      },
      {
        question: {
          en: "What is 'retrospective responsibility' versus 'prospective responsibility' in AI?",
          es: "Que es 'responsabilidad retrospectiva' versus 'responsabilidad prospectiva' en IA?",
          de: "Was ist 'retrospektive Verantwortung' versus 'prospektive Verantwortung' in der KI?",
          nl: "Wat is 'retrospectieve verantwoordelijkheid' versus 'prospectieve verantwoordelijkheid' in AI?"
        },
        options: [
          { en: "Retrospective assigns blame after harm occurs; prospective focuses on preventing future harm", es: "Retrospectiva asigna culpa despues de que ocurre dano; prospectiva se enfoca en prevenir dano futuro", de: "Retrospektiv weist Schuld zu nachdem Schaden aufgetreten ist; prospektiv fokussiert auf Verhinderung zukuenftigen Schadens", nl: "Retrospectief wijst schuld toe nadat schade optreedt; prospectief richt zich op het voorkomen van toekomstige schade" },
          { en: "Retrospective is for past AI decisions; prospective is for current AI decisions", es: "Retrospectiva es para decisiones pasadas de IA; prospectiva es para decisiones actuales de IA", de: "Retrospektiv ist fuer vergangene KI-Entscheidungen; prospektiv ist fuer aktuelle KI-Entscheidungen", nl: "Retrospectief is voor eerdere AI beslissingen; prospectief is voor huidige AI beslissingen" },
          { en: "Retrospective looks at AI performance; prospective looks at AI potential", es: "Retrospectiva examina rendimiento de IA; prospectiva examina potencial de IA", de: "Retrospektiv betrachtet KI-Leistung; prospektiv betrachtet KI-Potenzial", nl: "Retrospectief kijkt naar AI prestaties; prospectief kijkt naar AI potentieel" },
          { en: "Both concepts are identical in meaning", es: "Ambos conceptos son identicos en significado", de: "Beide Konzepte sind identisch in der Bedeutung", nl: "Beide concepten zijn identiek in betekenis" }
        ],
        correct: 0,
        explanation: {
          en: "Retrospective responsibility involves assigning blame and accountability after harm has occurred, while prospective responsibility focuses on taking steps to prevent potential future harm and ensuring proper safeguards are in place.",
          es: "La responsabilidad retrospectiva involucra asignar culpa y responsabilidad despues de que ha ocurrido dano, mientras que la responsabilidad prospectiva se enfoca en tomar medidas para prevenir dano futuro potencial y asegurar que las salvaguardas apropiadas esten en su lugar.",
          de: "Retrospektive Verantwortung beinhaltet die Zuweisung von Schuld und Verantwortlichkeit nachdem Schaden aufgetreten ist, waehrend prospektive Verantwortung darauf fokussiert Schritte zu unternehmen um potentiellen zukuenftigen Schaden zu verhindern und sicherzustellen dass angemessene Schutzmaßnahmen vorhanden sind.",
          nl: "Retrospectieve verantwoordelijkheid houdt het toewijzen van schuld en verantwoordelijkheid in nadat schade is opgetreden, terwijl prospectieve verantwoordelijkheid zich richt op het nemen van stappen om potentiële toekomstige schade te voorkomen en ervoor te zorgen dat juiste waarborgen aanwezig zijn."
        }
      },
      {
        question: {
          en: "What is 'organizational accountability' for AI systems?",
          es: "Que es la 'responsabilidad organizacional' para sistemas de IA?",
          de: "Was ist 'organisatorische Verantwortlichkeit' fuer KI-Systeme?",
          nl: "Wat is 'organisatorische verantwoordelijkheid' voor AI systemen?"
        },
        options: [
          { en: "Institutional processes and structures to ensure responsible AI development and deployment", es: "Procesos y estructuras institucionales para asegurar desarrollo e implementacion responsable de IA", de: "Institutionelle Prozesse und Strukturen um verantwortungsvolle KI-Entwicklung und -Bereitstellung sicherzustellen", nl: "Institutionele processen en structuren om verantwoordelijke AI ontwikkeling en implementatie te waarborgen" },
          { en: "Making individual employees personally liable for all AI decisions", es: "Hacer que empleados individuales sean personalmente responsables de todas las decisiones de IA", de: "Einzelne Mitarbeiter persoenlich haftbar fuer alle KI-Entscheidungen machen", nl: "Individuele werknemers persoonlijk aansprakelijk maken voor alle AI beslissingen" },
          { en: "Only the CEO being responsible for AI outcomes", es: "Solo el CEO siendo responsable de resultados de IA", de: "Nur der CEO ist verantwortlich fuer KI-Ergebnisse", nl: "Alleen de CEO is verantwoordelijk voor AI uitkomsten" },
          { en: "Organizing AI systems alphabetically", es: "Organizar sistemas de IA alfabeticamente", de: "KI-Systeme alphabetisch organisieren", nl: "AI systemen alfabetisch organiseren" }
        ],
        correct: 0,
        explanation: {
          en: "Organizational accountability involves establishing institutional frameworks, governance structures, clear roles and responsibilities, oversight mechanisms, and cultural practices that ensure responsible AI development and deployment across the organization.",
          es: "La responsabilidad organizacional involucra establecer marcos institucionales, estructuras de gobernanza, roles y responsabilidades claros, mecanismos de supervision y practicas culturales que aseguren desarrollo e implementacion responsable de IA a traves de la organizacion.",
          de: "Organisatorische Verantwortlichkeit beinhaltet die Etablierung institutioneller Rahmenwerke, Governance-Strukturen, klarer Rollen und Verantwortlichkeiten, Aufsichtsmechanismen und kultureller Praktiken die verantwortungsvolle KI-Entwicklung und -Bereitstellung in der Organisation sicherstellen.",
          nl: "Organisatorische verantwoordelijkheid houdt het vaststellen van institutionele kaders, governance structuren, duidelijke rollen en verantwoordelijkheden, toezichtmechanismen en culturele praktijken in die verantwoordelijke AI ontwikkeling en implementatie door de organisatie waarborgen."
        }
      },
      {
        question: {
          en: "What is 'algo transparency' requirement in accountability frameworks?",
          es: "Que es el requisito de 'transparencia algoritmica' en marcos de responsabilidad?",
          de: "Was ist die 'algorithmische Transparenz'-Anforderung in Verantwortlichkeitsrahmen?",
          nl: "Wat is de 'algoritmische transparantie' vereiste in verantwoordelijkheidskaders?"
        },
        options: [
          { en: "Obligation to disclose how AI systems work and make decisions to relevant stakeholders", es: "Obligacion de divulgar como funcionan los sistemas de IA y toman decisiones a partes interesadas relevantes", de: "Verpflichtung offenzulegen wie KI-Systeme funktionieren und Entscheidungen treffen gegenueber relevanten Stakeholdern", nl: "Verplichting om bekend te maken hoe AI systemen werken en beslissingen nemen aan relevante belanghebbenden" },
          { en: "Making all AI algorithms completely public on the internet", es: "Hacer todos los algoritmos de IA completamente publicos en internet", de: "Alle KI-Algorithmen vollstaendig oeffentlich im Internet machen", nl: "Alle AI algoritmes volledig openbaar maken op internet" },
          { en: "Using only open-source software for AI development", es: "Usar solo software de codigo abierto para desarrollo de IA", de: "Nur Open-Source-Software fuer KI-Entwicklung verwenden", nl: "Alleen open-source software gebruiken voor AI ontwikkeling" },
          { en: "Providing glass cases for AI hardware", es: "Proporcionar cajas de vidrio para hardware de IA", de: "Glasgehaeuse fuer KI-Hardware bereitstellen", nl: "Glazen kasten bieden voor AI hardware" }
        ],
        correct: 0,
        explanation: {
          en: "Algorithmic transparency requirements mandate that organizations provide appropriate disclosure about their AI systems' functioning, decision-making processes, and limitations to stakeholders who need this information for oversight, compliance, or affected individuals seeking recourse.",
          es: "Los requisitos de transparencia algoritmica exigen que las organizaciones proporcionen divulgacion apropiada sobre el funcionamiento de sus sistemas de IA, procesos de toma de decisiones y limitaciones a partes interesadas que necesitan esta informacion para supervision, cumplimiento o individuos afectados que buscan recurso.",
          de: "Algorithmische Transparenzanforderungen verlangen dass Organisationen angemessene Offenlegung ueber das Funktionieren ihrer KI-Systeme, Entscheidungsprozesse und Begrenzungen gegenueber Stakeholdern bereitstellen die diese Informationen fuer Aufsicht, Compliance oder betroffene Individuen die Rechtsmittel suchen benoetigen.",
          nl: "Algoritmische transparantie vereisten mandateren dat organisaties passende onthulling verstrekken over het functioneren van hun AI systemen, besluitvormingsprocessen en beperkingen aan belanghebbenden die deze informatie nodig hebben voor toezicht, compliance of getroffen individuen die verhaal zoeken."
        }
      },
      {
        question: {
          en: "What is 'accountability by design' in AI development?",
          es: "Que es 'responsabilidad por diseno' en desarrollo de IA?",
          de: "Was ist 'Verantwortlichkeit by Design' in der KI-Entwicklung?",
          nl: "Wat is 'verantwoordelijkheid by design' in AI ontwikkeling?"
        },
        options: [
          { en: "Building accountability mechanisms into AI systems from the earliest stages of development", es: "Construir mecanismos de responsabilidad en sistemas de IA desde las primeras etapas de desarrollo", de: "Verantwortlichkeitsmechanismen von den fruehesten Entwicklungsstadien an in KI-Systeme einbauen", nl: "Verantwoordelijkheidsmechanismen inbouwen in AI systemen vanaf de vroegste ontwikkelingsstadia" },
          { en: "Designing AI systems to look aesthetically pleasing", es: "Disenar sistemas de IA para que se vean esteticamente agradables", de: "KI-Systeme aesthetisch ansprechend gestalten", nl: "AI systemen ontwerpen om er esthetisch aantrekkelijk uit te zien" },
          { en: "Creating accountability only after AI deployment", es: "Crear responsabilidad solo despues del despliegue de IA", de: "Verantwortlichkeit erst nach KI-Bereitstellung schaffen", nl: "Verantwoordelijkheid alleen creëren na AI implementatie" },
          { en: "Assigning blame for design flaws", es: "Asignar culpa por fallas de diseno", de: "Schuld fuer Designfehler zuweisen", nl: "Schuld toewijzen voor ontwerpfouten" }
        ],
        correct: 0,
        explanation: {
          en: "Accountability by design involves incorporating accountability principles, oversight mechanisms, audit trails, explainability features, and governance structures into AI systems from the beginning of the development process rather than as an afterthought.",
          es: "La responsabilidad por diseno involucra incorporar principios de responsabilidad, mecanismos de supervision, rastros de auditoria, caracteristicas de explicabilidad y estructuras de gobernanza en sistemas de IA desde el comienzo del proceso de desarrollo en lugar de como una reflexion posterior.",
          de: "Verantwortlichkeit by Design beinhaltet die Einbeziehung von Verantwortlichkeitsprinzipien, Aufsichtsmechanismen, Audit-Pfaden, Erklaerbarkeitsfunktionen und Governance-Strukturen in KI-Systeme von Beginn des Entwicklungsprozesses an anstatt als nachtraeglichen Einfall.",
          nl: "Verantwoordelijkheid by design houdt het opnemen van verantwoordelijkheidsprincipes, toezichtmechanismen, audit trails, uitlegbaarheidskenmerken en governance structuren in AI systemen vanaf het begin van het ontwikkelingsproces in plaats van als een nagedachte."
        }
      },
      {
        question: {
          en: "What is 'chain of custody' in AI accountability?",
          es: "Que es 'cadena de custodia' en responsabilidad de IA?",
          de: "Was ist 'Beweiskette' in der KI-Verantwortlichkeit?",
          nl: "Wat is 'chain of custody' in AI verantwoordelijkheid?"
        },
        options: [
          { en: "Documented tracking of AI system development, deployment, and decision-making processes", es: "Seguimiento documentado de desarrollo, despliegue y procesos de toma de decisiones de sistemas de IA", de: "Dokumentierte Verfolgung von KI-Systementwicklung, -Bereitstellung und Entscheidungsprozessen", nl: "Gedocumenteerde tracking van AI systeem ontwikkeling, implementatie en besluitvormingsprocessen" },
          { en: "Physical security for AI hardware", es: "Seguridad fisica para hardware de IA", de: "Physische Sicherheit fuer KI-Hardware", nl: "Fysieke beveiliging voor AI hardware" },
          { en: "Legal ownership of AI systems", es: "Propiedad legal de sistemas de IA", de: "Rechtliches Eigentum an KI-Systemen", nl: "Juridisch eigendom van AI systemen" },
          { en: "Transferring AI between different companies", es: "Transferir IA entre diferentes companias", de: "KI zwischen verschiedenen Unternehmen uebertragen", nl: "AI overdragen tussen verschillende bedrijven" }
        ],
        correct: 0,
        explanation: {
          en: "Chain of custody in AI involves maintaining detailed, auditable records of how AI systems were developed, trained, tested, deployed, and how they make decisions, ensuring transparency and accountability throughout the system's lifecycle.",
          es: "La cadena de custodia en IA involucra mantener registros detallados y auditables de como los sistemas de IA fueron desarrollados, entrenados, probados, desplegados y como toman decisiones, asegurando transparencia y responsabilidad a lo largo del ciclo de vida del sistema.",
          de: "Beweiskette in der KI beinhaltet die Fuehrung detaillierter, auditierbare Aufzeichnungen darueber wie KI-Systeme entwickelt, trainiert, getestet, bereitgestellt wurden und wie sie Entscheidungen treffen, was Transparenz und Verantwortlichkeit waehrend des gesamten Systemlebenszyklus sicherstellt.",
          nl: "Chain of custody in AI houdt het bijhouden van gedetailleerde, auditeerbare records in van hoe AI systemen ontwikkeld, getraind, getest, geïmplementeerd werden en hoe ze beslissingen nemen, wat transparantie en verantwoordelijkheid gedurende de hele systeemlevenscyclus waarborgt."
        }
      },
      {
        question: {
          en: "What is 'remediation' in AI accountability frameworks?",
          es: "Que es 'remediacion' en marcos de responsabilidad de IA?",
          de: "Was ist 'Abhilfe' in KI-Verantwortlichkeitsrahmen?",
          nl: "Wat is 'remediatie' in AI verantwoordelijkheidskaders?"
        },
        options: [
          { en: "Processes to correct harm, compensate affected parties, and prevent future similar issues", es: "Procesos para corregir dano, compensar partes afectadas y prevenir problemas similares futuros", de: "Prozesse um Schaden zu korrigieren, betroffene Parteien zu entschaedigen und zukuenftige aehnliche Probleme zu verhindern", nl: "Processen om schade te corrigeren, getroffen partijen te compenseren en toekomstige soortgelijke problemen te voorkomen" },
          { en: "Teaching AI systems about medicine", es: "Ensenar a sistemas de IA sobre medicina", de: "KI-Systemen Medizin beibringen", nl: "AI systemen leren over geneeskunde" },
          { en: "Removing AI systems entirely", es: "Eliminar sistemas de IA completamente", de: "KI-Systeme vollstaendig entfernen", nl: "AI systemen volledig verwijderen" },
          { en: "Upgrading AI hardware regularly", es: "Actualizar hardware de IA regularmente", de: "KI-Hardware regelmaessig aufrüsten", nl: "AI hardware regelmatig upgraden" }
        ],
        correct: 0,
        explanation: {
          en: "Remediation involves comprehensive responses to AI-caused harm, including correcting the immediate problem, providing compensation or redress to affected parties, implementing systemic changes to prevent recurrence, and learning from the incident.",
          es: "La remediacion involucra respuestas integrales al dano causado por IA, incluyendo corregir el problema inmediato, proporcionar compensacion o reparacion a partes afectadas, implementar cambios sistemicos para prevenir recurrencia y aprender del incidente.",
          de: "Abhilfe beinhaltet umfassende Antworten auf KI-verursachte Schaeden, einschliesslich Korrektur des unmittelbaren Problems, Bereitstellung von Entschaedigung oder Wiedergutmachung fuer betroffene Parteien, Implementierung systemischer Aenderungen zur Verhinderung von Wiederholung und Lernen aus dem Vorfall.",
          nl: "Remediatie houdt uitgebreide reacties op AI-veroorzaakte schade in, inclusief het corrigeren van het directe probleem, het bieden van compensatie of herstel aan getroffen partijen, het implementeren van systemische veranderingen om herhaling te voorkomen en leren van het incident."
        }
      },
      {
        question: {
          en: "What is 'moral responsibility' in AI development?",
          es: "Que es 'responsabilidad moral' en el desarrollo de IA?",
          de: "Was ist 'moralische Verantwortung' in der KI-Entwicklung?",
          nl: "Wat is 'morele verantwoordelijkheid' in AI ontwikkeling?"
        },
        options: [
          { en: "The ethical obligation to consider consequences and be answerable for AI system impacts", es: "La obligacion etica de considerar consecuencias y ser responsable por los impactos del sistema de IA", de: "Die ethische Verpflichtung Konsequenzen zu beruecksichtigen und fuer KI-Systemauswirkungen verantwortlich zu sein", nl: "De ethische verplichting om gevolgen te overwegen en verantwoordelijk te zijn voor AI systeem impacts" },
          { en: "Only legal liability for AI failures", es: "Solo responsabilidad legal por fallas de IA", de: "Nur rechtliche Haftung fuer KI-Versagen", nl: "Alleen juridische aansprakelijkheid voor AI falen" },
          { en: "Teaching AI systems to be moral", es: "Ensenar a sistemas de IA a ser morales", de: "KI-Systeme Moral beibringen", nl: "AI systemen leren moreel te zijn" },
          { en: "Avoiding all responsibility for AI actions", es: "Evitar toda responsabilidad por acciones de IA", de: "Jede Verantwortung fuer KI-Aktionen vermeiden", nl: "Alle verantwoordelijkheid voor AI acties vermijden" }
        ],
        correct: 0,
        explanation: {
          en: "Moral responsibility in AI development encompasses the ethical duty to consider potential consequences of AI systems, ensure human oversight, and be accountable for the impacts these systems have on individuals and society.",
          es: "La responsabilidad moral en el desarrollo de IA abarca el deber etico de considerar las consecuencias potenciales de los sistemas de IA, asegurar supervision humana y ser responsable por los impactos que estos sistemas tienen en individuos y la sociedad.",
          de: "Moralische Verantwortung in der KI-Entwicklung umfasst die ethische Pflicht moegliche Konsequenzen von KI-Systemen zu beruecksichtigen, menschliche Aufsicht sicherzustellen und fuer die Auswirkungen verantwortlich zu sein die diese Systeme auf Individuen und die Gesellschaft haben.",
          nl: "Morele verantwoordelijkheid in AI ontwikkeling omvat de ethische plicht om potentiele gevolgen van AI systemen te overwegen, menselijk toezicht te waarborgen en verantwoordelijk te zijn voor de impacts die deze systemen hebben op individuen en de samenleving."
        }
      
      }
    ]
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level5;
  } else if (typeof window !== 'undefined') {
    window.level5 = level5;
  }
})();