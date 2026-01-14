// AI ethiek Quiz - Level 5
(function() {
  const level5 = {
    name: {
          "en": "AI Ethics Level 5",
          "es": "Etica de IA Nivel 5",
          "de": "KI-Ethik Stufe 5",
          "nl": "AI Ethiek Level 5"
    },
    questions: [
      {
        question: {
                  "en": "What is the concept of 'algorithmic auditing' in AI systems?",
                  "es": "Que es el concepto de 'auditoria algoritmica' en sistemas de IA?",
                  "de": "Was ist das Konzept des 'algorithmischen Audits' in KI-Systemen?",
                  "nl": "Wat is het concept van 'algoritmische auditing' in AI systemen?"
        },
        options: [
        {
                  "en": "Checking if AI saves money",
                  "es": "Verificar si la IA ahorra dinero",
                  "de": "Pruefen ob KI Geld spart",
                  "nl": "Controleren of AI geld bespaart"
        },
        {
                  "en": "Testing AI speed only",
                  "es": "Solo probar la velocidad de IA",
                  "de": "Nur KI-Geschwindigkeit testen",
                  "nl": "Alleen AI snelheid testen"
        },
        {
                  "en": "Counting how many times AI is used",
                  "es": "Contar cuantas veces se usa la IA",
                  "de": "Zaehlen wie oft KI verwendet wird",
                  "nl": "Tellen hoe vaak AI gebruikt wordt"
        },
        {
                  "en": "Regularly examining AI systems for bias, fairness, and performance",
                  "es": "Examinar regularmente sistemas de IA para sesgo, equidad y rendimiento",
                  "de": "Regelmaessige Pruefung von KI-Systemen auf Verzerrung, Fairness und Leistung",
                  "nl": "Regelmatig onderzoeken van AI systemen op bias, eerlijkheid en prestatie"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Algorithmic auditing involves systematic examination of AI systems to identify potential biases, ensure fairness, and verify that the system performs as intended across different groups and scenarios.",
                  "es": "La auditoria algoritmica involucra examinacion sistematica de sistemas de IA para identificar posibles sesgos, asegurar equidad y verificar que el sistema funcione como se pretende en diferentes grupos y escenarios.",
                  "de": "Algorithmisches Auditing beinhaltet systematische Untersuchung von KI-Systemen um potentielle Verzerrungen zu identifizieren, Fairness sicherzustellen und zu verifizieren dass das System wie beabsichtigt in verschiedenen Gruppen und Szenarien funktioniert.",
                  "nl": "Algoritmische auditing houdt systematisch onderzoek van AI systemen in om mogelijke bias te identificeren, eerlijkheid te waarborgen en te verifiëren dat het systeem werkt zoals bedoeld voor verschillende groepen en scenario's."
        }
      },
      {
        question: {
                  "en": "What does 'differential privacy' aim to protect in AI data processing?",
                  "es": "Que busca proteger la 'privacidad diferencial' en el procesamiento de datos de IA?",
                  "de": "Was zielt 'differential privacy' darauf ab in der KI-Datenverarbeitung zu schuetzen?",
                  "nl": "Wat beoogt 'differential privacy' te beschermen in AI data verwerking?"
        },
        options: [
        {
                  "en": "Making data processing faster",
                  "es": "Hacer el procesamiento de datos mas rapido",
                  "de": "Datenverarbeitung schneller machen",
                  "nl": "Data verwerking sneller maken"
        },
        {
                  "en": "Different types of databases",
                  "es": "Diferentes tipos de bases de datos",
                  "de": "Verschiedene Arten von Datenbanken",
                  "nl": "Verschillende soorten databases"
        },
        {
                  "en": "Individual privacy while allowing useful data analysis",
                  "es": "Privacidad individual mientras permite analisis de datos util",
                  "de": "Individuelle Privatsphaere waehrend nuetzliche Datenanalyse ermoeglicht wird",
                  "nl": "Individuele privacy terwijl nuttige data-analyse mogelijk blijft"
        },
        {
                  "en": "Separating private and public data",
                  "es": "Separar datos privados y publicos",
                  "de": "Private und oeffentliche Daten trennen",
                  "nl": "Privé en publieke data scheiden"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Differential privacy is a mathematical framework that provides strong privacy guarantees by adding controlled noise to data, ensuring individual records cannot be identified while preserving the statistical utility of the dataset.",
                  "es": "La privacidad diferencial es un marco matematico que proporciona fuertes garantias de privacidad agregando ruido controlado a los datos, asegurando que registros individuales no puedan ser identificados mientras preserva la utilidad estadistica del conjunto de datos.",
                  "de": "Differential Privacy ist ein mathematisches Framework das starke Privatsphaeren-Garantien bietet durch hinzufuegen von kontrolliertem Rauschen zu Daten, wodurch sichergestellt wird dass individuelle Datensaetze nicht identifiziert werden koennen waehrend die statistische Nuetzlichkeit des Datensatzes erhalten bleibt.",
                  "nl": "Differential privacy is een wiskundig framework dat sterke privacy garanties biedt door gecontroleerde ruis toe te voegen aan data, waardoor individuele records niet geïdentificeerd kunnen worden terwijl de statistische bruikbaarheid van de dataset behouden blijft."
        }
      },
      {
        question: {
                  "en": "What is 'value alignment' in the context of advanced AI systems?",
                  "es": "Que es la 'alineacion de valores' en el contexto de sistemas de IA avanzados?",
                  "de": "Was ist 'Wertausrichtung' im Kontext fortgeschrittener KI-Systeme?",
                  "nl": "Wat is 'waarde-uitlijning' in de context van geavanceerde AI systemen?"
        },
        options: [
        {
                  "en": "Setting the same price for all AI services",
                  "es": "Establecer el mismo precio para todos los servicios de IA",
                  "de": "Den gleichen Preis fuer alle KI-Dienste setzen",
                  "nl": "Dezelfde prijs instellen voor alle AI diensten"
        },
        {
                  "en": "Making AI work at the same speed",
                  "es": "Hacer que la IA funcione a la misma velocidad",
                  "de": "KI mit der gleichen Geschwindigkeit arbeiten lassen",
                  "nl": "AI op dezelfde snelheid laten werken"
        },
        {
                  "en": "Making sure AI systems pursue goals compatible with human values",
                  "es": "Asegurar que sistemas de IA persigan objetivos compatibles con valores humanos",
                  "de": "Sicherstellen dass KI-Systeme Ziele verfolgen die mit menschlichen Werten vereinbar sind",
                  "nl": "Ervoor zorgen dat AI systemen doelen nastreven die verenigbaar zijn met menselijke waarden"
        },
        {
                  "en": "Aligning AI hardware components correctly",
                  "es": "Alinear correctamente componentes de hardware de IA",
                  "de": "KI-Hardware-Komponenten korrekt ausrichten",
                  "nl": "AI hardware componenten correct uitlijnen"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Value alignment is the challenge of ensuring that advanced AI systems understand and pursue objectives that are genuinely beneficial to humanity, avoiding scenarios where AI optimizes for goals that seem right but lead to harmful outcomes.",
                  "es": "La alineacion de valores es el desafio de asegurar que sistemas de IA avanzados entiendan y persigan objetivos que son genuinamente beneficiosos para la humanidad, evitando escenarios donde la IA optimiza objetivos que parecen correctos pero llevan a resultados daninos.",
                  "de": "Wertausrichtung ist die Herausforderung sicherzustellen dass fortgeschrittene KI-Systeme Ziele verstehen und verfolgen die genuinen Nutzen fuer die Menschheit bringen, wobei Szenarien vermieden werden wo KI fuer Ziele optimiert die richtig erscheinen aber zu schaedlichen Ergebnissen fuehren.",
                  "nl": "Waarde-uitlijning is de uitdaging ervoor te zorgen dat geavanceerde AI systemen doelen begrijpen en nastreven die oprecht gunstig zijn voor de mensheid, waarbij scenario's vermeden worden waar AI optimaliseert voor doelen die juist lijken maar leiden tot schadelijke uitkomsten."
        }
      },
      {
        question: {
                  "en": "What is the 'trolley problem' analogy used to illustrate in AI ethics?",
                  "es": "Para que se usa la analogia del 'problema del tranvia' en etica de IA?",
                  "de": "Wofuer wird die 'Trolley-Problem' Analogie in der KI-Ethik verwendet?",
                  "nl": "Waarvoor wordt de 'trolley probleem' analogie gebruikt in AI ethiek?"
        },
        options: [
        {
                  "en": "How AI should make difficult moral decisions involving trade-offs",
                  "es": "Como la IA deberia tomar decisiones morales dificiles que involucran compromisos",
                  "de": "Wie KI schwierige moralische Entscheidungen mit Abwaegungen treffen sollte",
                  "nl": "Hoe AI moeilijke morele beslissingen met afwegingen zou moeten maken"
        },
        {
                  "en": "How to solve traffic problems with AI",
                  "es": "Como resolver problemas de trafico con IA",
                  "de": "Wie Verkehrsprobleme mit KI geloest werden",
                  "nl": "Hoe verkeersprobllemen op te lossen met AI"
        },
        {
                  "en": "How to design better transportation AI",
                  "es": "Como disenar mejor IA de transporte",
                  "de": "Wie bessere Transport-KI zu entwerfen",
                  "nl": "Hoe betere transport AI te ontwerpen"
        },
        {
                  "en": "How AI systems should handle trolley scheduling",
                  "es": "Como sistemas de IA deberian manejar programacion de tranvias",
                  "de": "Wie KI-Systeme Trolley-Planung handhaben sollten",
                  "nl": "Hoe AI systemen trolley planning zouden moeten afhandelen"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "The trolley problem is used in AI ethics to explore how autonomous systems should make moral decisions when lives are at stake, such as in self-driving cars choosing between different harmful outcomes.",
                  "es": "El problema del tranvia se usa en etica de IA para explorar como sistemas autonomos deberian tomar decisiones morales cuando vidas estan en riesgo, como en autos autonomos eligiendo entre diferentes resultados daninos.",
                  "de": "Das Trolley-Problem wird in der KI-Ethik verwendet um zu erforschen wie autonome Systeme moralische Entscheidungen treffen sollten wenn Leben auf dem Spiel stehen, wie bei selbstfahrenden Autos die zwischen verschiedenen schaedlichen Ergebnissen waehlen.",
                  "nl": "Het trolley probleem wordt gebruikt in AI ethiek om te onderzoeken hoe autonome systemen morele beslissingen zouden moeten nemen wanneer levens op het spel staan, zoals bij zelfrijdende auto's die kiezen tussen verschillende schadelijke uitkomsten."
        }
      },
      {
        question: {
                  "en": "What does 'AI explicability' require beyond simple transparency?",
                  "es": "Que requiere la 'explicabilidad de IA' mas alla de simple transparencia?",
                  "de": "Was erfordert 'KI-Erklaerbarkeit' ueber einfache Transparenz hinaus?",
                  "nl": "Wat vereist 'AI uitlegbaarheid' naast eenvoudige transparantie?"
        },
        options: [
        {
                  "en": "Making AI code completely public",
                  "es": "Hacer completamente publico el codigo de IA",
                  "de": "KI-Code vollstaendig oeffentlich machen",
                  "nl": "AI code volledig openbaar maken"
        },
        {
                  "en": "Showing all training data",
                  "es": "Mostrar todos los datos de entrenamiento",
                  "de": "Alle Trainingsdaten zeigen",
                  "nl": "Alle trainingsdata tonen"
        },
        {
                  "en": "Using only simple algorithms",
                  "es": "Usar solo algoritmos simples",
                  "de": "Nur einfache Algorithmen verwenden",
                  "nl": "Alleen eenvoudige algoritmes gebruiken"
        },
        {
                  "en": "Providing understandable explanations tailored to different audiences",
                  "es": "Proporcionar explicaciones comprensibles adaptadas a diferentes audiencias",
                  "de": "Verstaendliche Erklaerungen liefern die auf verschiedene Zielgruppen zugeschnitten sind",
                  "nl": "Begrijpelijke uitleg bieden die aangepast is aan verschillende doelgroepen"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "AI explicability goes beyond transparency by requiring that explanations be meaningful and comprehensible to the specific audience - whether technical experts, regulators, or end users - rather than just revealing the underlying mechanics.",
                  "es": "La explicabilidad de IA va mas alla de la transparencia requiriendo que las explicaciones sean significativas y comprensibles para la audiencia especifica - ya sean expertos tecnicos, reguladores o usuarios finales - en lugar de solo revelar la mecanica subyacente.",
                  "de": "KI-Erklaerbarkeit geht ueber Transparenz hinaus indem sie verlangt dass Erklaerungen sinnvoll und verstaendlich fuer die spezifische Zielgruppe sind - seien es technische Experten, Regulatoren oder Endnutzer - anstatt nur die zugrundeliegende Mechanik zu offenbaren.",
                  "nl": "AI uitlegbaarheid gaat verder dan transparantie door te eisen dat uitleg betekenisvol en begrijpelijk is voor het specifieke publiek - of dat nu technische experts, regelgevers of eindgebruikers zijn - in plaats van alleen de onderliggende mechanica te onthullen."
        }
      },
      {
        question: {
                  "en": "What is 'moral agency' in AI and who bears responsibility for AI decisions?",
                  "es": "Que es la 'agencia moral' en IA y quien tiene responsabilidad por las decisiones de IA?",
                  "de": "Was ist 'moralische Handlungsfaehigkeit' in der KI und wer traegt Verantwortung fuer KI-Entscheidungen?",
                  "nl": "Wat is 'morele handelingsbevoegdheid' in AI en wie draagt verantwoordelijkheid voor AI beslissingen?"
        },
        options: [
        {
                  "en": "AI systems are fully responsible for their own decisions",
                  "es": "Los sistemas de IA son completamente responsables de sus propias decisiones",
                  "de": "KI-Systeme sind vollstaendig verantwortlich fuer ihre eigenen Entscheidungen",
                  "nl": "AI systemen zijn volledig verantwoordelijk voor hun eigen beslissingen"
        },
        {
                  "en": "Humans remain responsible as AI lacks moral agency and cannot be held accountable",
                  "es": "Humanos siguen responsables ya que IA carece de agencia moral y no puede responsabilizarse",
                  "de": "Menschen bleiben verantwortlich da KI moralische Handlungsfaehigkeit fehlt",
                  "nl": "Mensen blijven verantwoordelijk omdat AI morele handelingsbevoegdheid mist"
        },
        {
                  "en": "No one is responsible for AI decisions",
                  "es": "Nadie es responsable de las decisiones de IA",
                  "de": "Niemand ist verantwortlich fuer KI-Entscheidungen",
                  "nl": "Niemand is verantwoordelijk voor AI beslissingen"
        },
        {
                  "en": "Only the computer programmers are responsible",
                  "es": "Solo los programadores de computadoras son responsables",
                  "de": "Nur die Computerprogrammierer sind verantwortlich",
                  "nl": "Alleen de computerprogrammeurs zijn verantwoordelijk"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Currently, AI systems lack moral agency and cannot be held morally responsible. Responsibility typically falls on humans - developers, deployers, users, or organizations - depending on the context and nature of the decision.",
                  "es": "Actualmente, los sistemas de IA carecen de agencia moral y no pueden ser responsabilizados moralmente. La responsabilidad tipicamente recae en humanos - desarrolladores, implementadores, usuarios u organizaciones - dependiendo del contexto y naturaleza de la decision.",
                  "de": "Derzeit fehlt KI-Systemen moralische Handlungsfaehigkeit und sie koennen nicht moralisch verantwortlich gemacht werden. Die Verantwortung liegt typischerweise bei Menschen - Entwicklern, Bereitstellern, Nutzern oder Organisationen - je nach Kontext und Art der Entscheidung.",
                  "nl": "Momenteel missen AI systemen morele handelingsbevoegdheid en kunnen ze niet moreel verantwoordelijk gehouden worden. Verantwoordelijkheid ligt meestal bij mensen - ontwikkelaars, implementeerders, gebruikers of organisaties - afhankelijk van de context en aard van de beslissing."
        }
      },
      {
        question: {
                  "en": "What is 'human oversight' in AI systems?",
                  "es": "Que es la 'supervision humana' en sistemas de IA?",
                  "de": "Was ist 'menschliche Aufsicht' in KI-Systemen?",
                  "nl": "Wat is 'menselijk toezicht' in AI systemen?"
        },
        options: [
        {
                  "en": "Only technical supervision of hardware",
                  "es": "Solo supervision tecnica de hardware",
                  "de": "Nur technische Ueberwachung von Hardware",
                  "nl": "Alleen technisch toezicht op hardware"
        },
        {
                  "en": "Having humans physically watch AI computers",
                  "es": "Tener humanos observando fisicamente computadoras de IA",
                  "de": "Menschen physisch KI-Computer beobachten lassen",
                  "nl": "Mensen fysiek AI computers laten observeren"
        },
        {
                  "en": "Meaningful human control and monitoring of AI decisions and operations",
                  "es": "Control y monitoreo humano significativo de decisiones y operaciones de IA",
                  "de": "Bedeutungsvolle menschliche Kontrolle und Ueberwachung von KI-Entscheidungen und -Operationen",
                  "nl": "Betekenisvolle menselijke controle en monitoring van AI beslissingen en operaties"
        },
        {
                  "en": "Checking AI output once per year",
                  "es": "Verificar salida de IA una vez por ano",
                  "de": "KI-Ausgabe einmal pro Jahr pruefen",
                  "nl": "AI output eens per jaar controleren"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Human oversight involves maintaining meaningful human control over AI systems, including the ability to intervene, override decisions, monitor performance, and ensure systems operate within intended parameters and ethical boundaries.",
                  "es": "La supervision humana involucra mantener control humano significativo sobre sistemas de IA, incluyendo la capacidad de intervenir, anular decisiones, monitorear rendimiento y asegurar que los sistemas operen dentro de parametros intencionales y limites eticos.",
                  "de": "Menschliche Aufsicht beinhaltet die Aufrechterhaltung bedeutungsvoller menschlicher Kontrolle ueber KI-Systeme, einschliesslich der Faehigkeit einzugreifen, Entscheidungen zu ueberstimmen, Leistung zu ueberwachen und sicherzustellen dass Systeme innerhalb beabsichtigter Parameter und ethischer Grenzen operieren.",
                  "nl": "Menselijk toezicht houdt het behouden van betekenisvolle menselijke controle over AI systemen in, inclusief het vermogen om in te grijpen, beslissingen te overrulen, prestaties te monitoren en ervoor te zorgen dat systemen binnen bedoelde parameters en ethische grenzen opereren."
        }
      },
      {
        question: {
                  "en": "What is 'liability' in the context of AI harm?",
                  "es": "Que es la 'responsabilidad legal' en el contexto de dano por IA?",
                  "de": "Was ist 'Haftung' im Kontext von KI-Schaeden?",
                  "nl": "Wat is 'aansprakelijkheid' in de context van AI schade?"
        },
        options: [
        {
                  "en": "How likely AI is to work correctly",
                  "es": "Que tan probable es que la IA funcione correctamente",
                  "de": "Wie wahrscheinlich es ist dass KI korrekt funktioniert",
                  "nl": "Hoe waarschijnlijk het is dat AI correct werkt"
        },
        {
                  "en": "The cost of developing AI systems",
                  "es": "El costo de desarrollar sistemas de IA",
                  "de": "Die Kosten der Entwicklung von KI-Systemen",
                  "nl": "De kosten van het ontwikkelen van AI systemen"
        },
        {
                  "en": "The tendency of AI to make mistakes",
                  "es": "La tendencia de la IA a cometer errores",
                  "de": "Die Tendenz von KI Fehler zu machen",
                  "nl": "De neiging van AI om fouten te maken"
        },
        {
                  "en": "Legal responsibility for damages or harm caused by AI systems",
                  "es": "Responsabilidad legal por danos o perjuicios causados por sistemas de IA",
                  "de": "Rechtliche Verantwortung fuer Schaeden oder Harm verursacht durch KI-Systeme",
                  "nl": "Juridische verantwoordelijkheid voor schade veroorzaakt door AI systemen"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Liability refers to legal responsibility for damages caused by AI systems. This includes questions of who can be held legally accountable when AI causes harm - the developer, deployer, user, or owner of the system.",
                  "es": "La responsabilidad legal se refiere a la responsabilidad juridica por danos causados por sistemas de IA. Esto incluye preguntas sobre quien puede ser legalmente responsable cuando la IA causa dano - el desarrollador, implementador, usuario o propietario del sistema.",
                  "de": "Haftung bezieht sich auf rechtliche Verantwortung fuer Schaeden verursacht durch KI-Systeme. Dies beinhaltet Fragen wer rechtlich verantwortlich gemacht werden kann wenn KI Schaden verursacht - der Entwickler, Bereitsteller, Nutzer oder Eigentuemer des Systems.",
                  "nl": "Aansprakelijkheid verwijst naar juridische verantwoordelijkheid voor schade veroorzaakt door AI systemen. Dit omvat vragen over wie juridisch verantwoordelijk gehouden kan worden wanneer AI schade veroorzaakt - de ontwikkelaar, implementeerder, gebruiker of eigenaar van het systeem."
        }
      },
      {
        question: {
                  "en": "What is 'algorithmic accountability' in AI governance?",
                  "es": "Que es la 'responsabilidad algoritmica' en la gobernanza de IA?",
                  "de": "Was ist 'algorithmische Verantwortlichkeit' in der KI-Governance?",
                  "nl": "Wat is 'algoritmische verantwoordelijkheid' in AI governance?"
        },
        options: [
        {
                  "en": "Systems and processes to ensure AI decisions can be explained, challenged, and corrected",
                  "es": "Sistemas y procesos para asegurar que decisiones IA puedan explicarse, desafiarse y corregirse",
                  "de": "Systeme und Prozesse um sicherzustellen dass KI-Entscheidungen erklaert werden koennen",
                  "nl": "Systemen en processen om ervoor te zorgen dat AI beslissingen uitgelegd kunnen worden"
        },
        {
                  "en": "Ensuring algorithms run efficiently",
                  "es": "Asegurar que algoritmos funcionen eficientemente",
                  "de": "Sicherstellen dass Algorithmen effizient laufen",
                  "nl": "Ervoor zorgen dat algoritmes efficiënt werken"
        },
        {
                  "en": "Making algorithms count numbers correctly",
                  "es": "Hacer que algoritmos cuenten numeros correctamente",
                  "de": "Algorithmen dazu bringen Zahlen korrekt zu zaehlen",
                  "nl": "Algoritmes getallen correct laten tellen"
        },
        {
                  "en": "Publishing all algorithm source code",
                  "es": "Publicar todo el codigo fuente de algoritmos",
                  "de": "Allen Algorithmus-Quellcode veroeffentlichen",
                  "nl": "Alle algoritme broncode publiceren"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Algorithmic accountability involves establishing mechanisms to ensure AI systems can be held accountable for their decisions, including processes for explanation, appeal, correction, and oversight to prevent and address harmful outcomes.",
                  "es": "La responsabilidad algoritmica involucra establecer mecanismos para asegurar que sistemas de IA puedan ser responsabilizados por sus decisiones, incluyendo procesos para explicacion, apelacion, correccion y supervision para prevenir y abordar resultados daninos.",
                  "de": "Algorithmische Verantwortlichkeit beinhaltet die Etablierung von Mechanismen um sicherzustellen dass KI-Systeme fuer ihre Entscheidungen verantwortlich gemacht werden koennen, einschliesslich Prozessen fuer Erklaerung, Berufung, Korrektur und Aufsicht um schaedliche Ergebnisse zu verhindern und anzugehen.",
                  "nl": "Algoritmische verantwoordelijkheid houdt het vaststellen van mechanismen in om ervoor te zorgen dat AI systemen verantwoordelijk gehouden kunnen worden voor hun beslissingen, inclusief processen voor uitleg, beroep, correctie en toezicht om schadelijke uitkomsten te voorkomen en aan te pakken."
        }
      },
      {
        question: {
                  "en": "What is 'distributed responsibility' in AI systems?",
                  "es": "Que es la 'responsabilidad distribuida' en sistemas de IA?",
                  "de": "Was ist 'verteilte Verantwortung' in KI-Systemen?",
                  "nl": "Wat is 'verspreide verantwoordelijkheid' in AI systemen?"
        },
        options: [
        {
                  "en": "Responsibility handled by distributed computing systems",
                  "es": "Responsabilidad manejada por sistemas de computacion distribuida",
                  "de": "Verantwortung behandelt durch verteilte Computersysteme",
                  "nl": "Verantwoordelijkheid behandeld door gedistribueerde computersystemen"
        },
        {
                  "en": "Responsibility shared among multiple stakeholders in the AI development and deployment chain",
                  "es": "Responsabilidad compartida entre multiples partes en cadena de desarrollo e implementacion IA",
                  "de": "Verantwortung geteilt zwischen mehreren Stakeholdern in KI-Entwicklungs- und Einsatzkette",
                  "nl": "Verantwoordelijkheid gedeeld tussen meerdere belanghebbenden in AI ontwikkeling en inzet"
        },
        {
                  "en": "Spreading liability costs across many companies",
                  "es": "Distribuir costos de responsabilidad entre muchas companias",
                  "de": "Haftungskosten auf viele Unternehmen verteilen",
                  "nl": "Aansprakelijkheidskosten spreiden over vele bedrijven"
        },
        {
                  "en": "Giving everyone equal responsibility regardless of involvement",
                  "es": "Dar a todos responsabilidad igual independientemente de la participacion",
                  "de": "Allen gleiche Verantwortung geben unabhaengig von der Beteiligung",
                  "nl": "Iedereen gelijke verantwoordelijkheid geven ongeacht betrokkenheid"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Distributed responsibility recognizes that AI systems involve multiple parties (developers, data providers, deployers, users, regulators) who each bear different levels and types of responsibility based on their role and control over the system.",
                  "es": "La responsabilidad distribuida reconoce que los sistemas de IA involucran multiples partes (desarrolladores, proveedores de datos, implementadores, usuarios, reguladores) que cada uno lleva diferentes niveles y tipos de responsabilidad basados en su rol y control sobre el sistema.",
                  "de": "Verteilte Verantwortung erkennt an dass KI-Systeme mehrere Parteien (Entwickler, Datenanbieter, Bereitsteller, Nutzer, Regulatoren) involvieren die jeweils verschiedene Ebenen und Arten von Verantwortung basierend auf ihrer Rolle und Kontrolle ueber das System tragen.",
                  "nl": "Verspreide verantwoordelijkheid erkent dat AI systemen meerdere partijen betrekken (ontwikkelaars, data aanbieders, implementeerders, gebruikers, regelgevers) die elk verschillende niveaus en soorten verantwoordelijkheid dragen gebaseerd op hun rol en controle over het systeem."
        }
      },
      {
        question: {
                  "en": "What is 'moral hazard' in AI decision-making systems?",
                  "es": "Que es el 'riesgo moral' en sistemas de toma de decisiones de IA?",
                  "de": "Was ist 'moralisches Risiko' in KI-Entscheidungssystemen?",
                  "nl": "Wat is 'moral hazard' in AI besluitvormingssystemen?"
        },
        options: [
        {
                  "en": "AI making morally wrong decisions",
                  "es": "IA tomando decisiones moralmente incorrectas",
                  "de": "KI trifft moralisch falsche Entscheidungen",
                  "nl": "AI die moreel verkeerde beslissingen neemt"
        },
        {
                  "en": "When people take greater risks because they don't bear full consequences of AI decisions",
                  "es": "Cuando personas toman mayores riesgos porque no soportan consecuencias completas de IA",
                  "de": "Wenn Menschen groessere Risiken eingehen weil sie nicht volle Konsequenzen von KI tragen",
                  "nl": "Wanneer mensen grotere risico's nemen omdat ze niet de volledige gevolgen van AI beslissingen dragen"
        },
        {
                  "en": "AI systems becoming dangerous to humans",
                  "es": "Sistemas de IA volviendose peligrosos para humanos",
                  "de": "KI-Systeme werden gefaehrlich fuer Menschen",
                  "nl": "AI systemen die gevaarlijk worden voor mensen"
        },
        {
                  "en": "Ethical dilemmas built into AI programming",
                  "es": "Dilemas eticos incorporados en la programacion de IA",
                  "de": "Ethische Dilemmata in KI-Programmierung eingebaut",
                  "nl": "Ethische dilemma's ingebouwd in AI programmering"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Moral hazard occurs when individuals or organizations take greater risks because they don't bear the full consequences of those risks, often because responsibility is shifted to AI systems or insurance covers potential damages.",
                  "es": "El riesgo moral ocurre cuando individuos u organizaciones toman mayores riesgos porque no soportan las consecuencias completas de esos riesgos, a menudo porque la responsabilidad se traslada a sistemas de IA o el seguro cubre danos potenciales.",
                  "de": "Moralisches Risiko tritt auf wenn Individuen oder Organisationen groessere Risiken eingehen weil sie nicht die vollen Konsequenzen dieser Risiken tragen, oft weil Verantwortung auf KI-Systeme verlagert wird oder Versicherungen potentielle Schaeden abdecken.",
                  "nl": "Moral hazard treedt op wanneer individuen of organisaties grotere risico's nemen omdat ze niet de volledige gevolgen van die risico's dragen, vaak omdat verantwoordelijkheid verschoven wordt naar AI systemen of verzekeringen mogelijke schade dekken."
        }
      },
      {
        question: {
                  "en": "What is 'strict liability' versus 'negligence liability' for AI systems?",
                  "es": "Que es 'responsabilidad estricta' versus 'responsabilidad por negligencia' para sistemas de IA?",
                  "de": "Was ist 'Gefaehrdungshaftung' versus 'Fahrlässigkeitshaftung' fuer KI-Systeme?",
                  "nl": "Wat is 'strikte aansprakelijkheid' versus 'nalatigheidsaansprakelijkheid' voor AI systemen?"
        },
        options: [
        {
                  "en": "Strict liability applies only to humans; negligence applies only to AI",
                  "es": "Responsabilidad estricta aplica solo a humanos; negligencia aplica solo a IA",
                  "de": "Gefaehrdungshaftung gilt nur fuer Menschen; Fahrlässigkeit gilt nur fuer KI",
                  "nl": "Strikte aansprakelijkheid geldt alleen voor mensen; nalatigheid geldt alleen voor AI"
        },
        {
                  "en": "Strict liability is for serious crimes; negligence is for minor issues",
                  "es": "Responsabilidad estricta es para crimenes serios; negligencia es para problemas menores",
                  "de": "Gefaehrdungshaftung ist fuer schwere Verbrechen; Fahrlässigkeit ist fuer kleinere Probleme",
                  "nl": "Strikte aansprakelijkheid is voor ernstige misdrijven; nalatigheid is voor kleine problemen"
        },
        {
                  "en": "Strict liability holds parties responsible regardless of fault; negligence requires proof",
                  "es": "Responsabilidad estricta responsabiliza sin importar culpa; negligencia requiere probar descuido",
                  "de": "Gefaehrdungshaftung macht verantwortlich ohne Verschulden; Fahrlässigkeit erfordert Nachweis",
                  "nl": "Strikte aansprakelijkheid houdt verantwoordelijk ongeacht schuld; nalatigheid vereist bewijs"
        },
        {
                  "en": "Both concepts mean exactly the same thing",
                  "es": "Ambos conceptos significan exactamente lo mismo",
                  "de": "Beide Konzepte bedeuten genau dasselbe",
                  "nl": "Beide concepten betekenen precies hetzelfde"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Strict liability holds parties responsible for harm caused by their AI systems regardless of whether they acted negligently, while negligence liability requires proving that the responsible party failed to exercise reasonable care in developing or deploying the AI.",
                  "es": "La responsabilidad estricta responsabiliza a las partes por dano causado por sus sistemas de IA independientemente de si actuaron con negligencia, mientras que la responsabilidad por negligencia requiere probar que la parte responsable fallo en ejercer cuidado razonable al desarrollar o implementar la IA.",
                  "de": "Gefaehrdungshaftung macht Parteien verantwortlich fuer Schaden verursacht durch ihre KI-Systeme unabhaengig davon ob sie fahrlässig gehandelt haben, waehrend Fahrlässigkeitshaftung erfordert zu beweisen dass die verantwortliche Partei versagt hat angemessene Sorgfalt bei der Entwicklung oder Bereitstellung der KI zu ueben.",
                  "nl": "Strikte aansprakelijkheid houdt partijen verantwoordelijk voor schade veroorzaakt door hun AI systemen ongeacht of ze nalatig handelden, terwijl nalatigheidsaansprakelijkheid vereist te bewijzen dat de verantwoordelijke partij faalde redelijke zorg uit te oefenen bij het ontwikkelen of implementeren van de AI."
        }
      },
      {
        question: {
                  "en": "What is 'human-in-the-loop' (HITL) in AI accountability?",
                  "es": "Que es 'humano en el bucle' (HITL) en responsabilidad de IA?",
                  "de": "Was ist 'Human-in-the-Loop' (HITL) in der KI-Verantwortlichkeit?",
                  "nl": "Wat is 'human-in-the-loop' (HITL) in AI verantwoordelijkheid?"
        },
        options: [
        {
                  "en": "Having humans debug AI code continuously",
                  "es": "Tener humanos depurando codigo de IA continuamente",
                  "de": "Menschen kontinuierlich KI-Code debuggen lassen",
                  "nl": "Mensen continu AI code laten debuggen"
        },
        {
                  "en": "Training AI using human feedback loops",
                  "es": "Entrenar IA usando bucles de retroalimentacion humana",
                  "de": "KI mit menschlichen Feedback-Schleifen trainieren",
                  "nl": "AI trainen met menselijke feedback loops"
        },
        {
                  "en": "Physically connecting humans to AI hardware",
                  "es": "Conectar fisicamente humanos a hardware de IA",
                  "de": "Menschen physisch mit KI-Hardware verbinden",
                  "nl": "Mensen fysiek verbinden met AI hardware"
        },
        {
                  "en": "Keeping humans involved in critical AI decision-making processes",
                  "es": "Mantener humanos involucrados en procesos criticos de toma de decisiones de IA",
                  "de": "Menschen in kritischen KI-Entscheidungsprozessen einbezogen halten",
                  "nl": "Mensen betrokken houden bij kritieke AI besluitvormingsprocessen"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Human-in-the-loop systems maintain human involvement in AI decision-making, ensuring that humans can intervene, oversee, or make final decisions in critical or high-stakes situations to maintain accountability and control.",
                  "es": "Los sistemas humano en el bucle mantienen participacion humana en la toma de decisiones de IA, asegurando que humanos puedan intervenir, supervisar o tomar decisiones finales en situaciones criticas o de alto riesgo para mantener responsabilidad y control.",
                  "de": "Human-in-the-Loop-Systeme behalten menschliche Beteiligung in KI-Entscheidungsfindung bei und stellen sicher dass Menschen eingreifen, ueberwachen oder endgueltige Entscheidungen in kritischen oder risikoreichen Situationen treffen koennen um Verantwortlichkeit und Kontrolle zu behalten.",
                  "nl": "Human-in-the-loop systemen behouden menselijke betrokkenheid bij AI besluitvorming, waardoor mensen kunnen ingrijpen, toezicht houden of definitieve beslissingen nemen in kritieke of risicovolle situaties om verantwoordelijkheid en controle te behouden."
        }
      },
      {
        question: {
                  "en": "What is 'retrospective responsibility' versus 'prospective responsibility' in AI?",
                  "es": "Que es 'responsabilidad retrospectiva' versus 'responsabilidad prospectiva' en IA?",
                  "de": "Was ist 'retrospektive Verantwortung' versus 'prospektive Verantwortung' in der KI?",
                  "nl": "Wat is 'retrospectieve verantwoordelijkheid' versus 'prospectieve verantwoordelijkheid' in AI?"
        },
        options: [
        {
                  "en": "Retrospective is for past AI decisions; prospective is for current AI decisions",
                  "es": "Retrospectiva es para decisiones pasadas de IA; prospectiva es para decisiones actuales de IA",
                  "de": "Retrospektiv ist fuer vergangene KI-Entscheidungen; prospektiv ist fuer aktuelle KI-Entscheidungen",
                  "nl": "Retrospectief is voor eerdere AI beslissingen; prospectief is voor huidige AI beslissingen"
        },
        {
                  "en": "Retrospective looks at AI performance; prospective looks at AI potential",
                  "es": "Retrospectiva examina rendimiento de IA; prospectiva examina potencial de IA",
                  "de": "Retrospektiv betrachtet KI-Leistung; prospektiv betrachtet KI-Potenzial",
                  "nl": "Retrospectief kijkt naar AI prestaties; prospectief kijkt naar AI potentieel"
        },
        {
                  "en": "Both concepts are identical in meaning",
                  "es": "Ambos conceptos son identicos en significado",
                  "de": "Beide Konzepte sind identisch in der Bedeutung",
                  "nl": "Beide concepten zijn identiek in betekenis"
        },
        {
                  "en": "Retrospective assigns blame after harm occurs; prospective focuses on preventing future harm",
                  "es": "Retrospectiva asigna culpa despues de que ocurre dano; prospectiva se enfoca en prevenir dano futuro",
                  "de": "Retrospektiv weist Schuld zu nach Schaden; prospektiv fokussiert auf Schadenspraevention",
                  "nl": "Retrospectief wijst schuld toe na schade; prospectief richt zich op voorkomen toekomstige schade"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Retrospective responsibility involves assigning blame and accountability after harm has occurred, while prospective responsibility focuses on taking steps to prevent potential future harm and ensuring proper safeguards are in place.",
                  "es": "La responsabilidad retrospectiva involucra asignar culpa y responsabilidad despues de que ha ocurrido dano, mientras que la responsabilidad prospectiva se enfoca en tomar medidas para prevenir dano futuro potencial y asegurar que las salvaguardas apropiadas esten en su lugar.",
                  "de": "Retrospektive Verantwortung beinhaltet die Zuweisung von Schuld und Verantwortlichkeit nachdem Schaden aufgetreten ist, waehrend prospektive Verantwortung darauf fokussiert Schritte zu unternehmen um potentiellen zukuenftigen Schaden zu verhindern und sicherzustellen dass angemessene Schutzmaßnahmen vorhanden sind.",
                  "nl": "Retrospectieve verantwoordelijkheid houdt het toewijzen van schuld en verantwoordelijkheid in nadat schade is opgetreden, terwijl prospectieve verantwoordelijkheid zich richt op het nemen van stappen om potentiële toekomstige schade te voorkomen en ervoor te zorgen dat juiste waarborgen aanwezig zijn."
        }
      },
      {
        question: {
                  "en": "What is 'organizational accountability' for AI systems?",
                  "es": "Que es la 'responsabilidad organizacional' para sistemas de IA?",
                  "de": "Was ist 'organisatorische Verantwortlichkeit' fuer KI-Systeme?",
                  "nl": "Wat is 'organisatorische verantwoordelijkheid' voor AI systemen?"
        },
        options: [
        {
                  "en": "Organizing AI systems alphabetically",
                  "es": "Organizar sistemas de IA alfabeticamente",
                  "de": "KI-Systeme alphabetisch organisieren",
                  "nl": "AI systemen alfabetisch organiseren"
        },
        {
                  "en": "Only the CEO being responsible for AI outcomes",
                  "es": "Solo el CEO siendo responsable de resultados de IA",
                  "de": "Nur der CEO ist verantwortlich fuer KI-Ergebnisse",
                  "nl": "Alleen de CEO is verantwoordelijk voor AI uitkomsten"
        },
        {
                  "en": "Institutional processes and structures to ensure responsible AI development and deployment",
                  "es": "Procesos y estructuras institucionales para asegurar desarrollo e implementacion responsable de IA",
                  "de": "Institutionelle Prozesse und Strukturen um verantwortungsvolle KI-Entwicklung sicherzustellen",
                  "nl": "Institutionele processen en structuren om verantwoordelijke AI ontwikkeling te waarborgen"
        },
        {
                  "en": "Making individual employees personally liable for all AI decisions",
                  "es": "Hacer que empleados individuales sean personalmente responsables de todas las decisiones de IA",
                  "de": "Einzelne Mitarbeiter persoenlich haftbar fuer alle KI-Entscheidungen machen",
                  "nl": "Individuele werknemers persoonlijk aansprakelijk maken voor alle AI beslissingen"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Organizational accountability involves establishing institutional frameworks, governance structures, clear roles and responsibilities, oversight mechanisms, and cultural practices that ensure responsible AI development and deployment across the organization.",
                  "es": "La responsabilidad organizacional involucra establecer marcos institucionales, estructuras de gobernanza, roles y responsabilidades claros, mecanismos de supervision y practicas culturales que aseguren desarrollo e implementacion responsable de IA a traves de la organizacion.",
                  "de": "Organisatorische Verantwortlichkeit beinhaltet die Etablierung institutioneller Rahmenwerke, Governance-Strukturen, klarer Rollen und Verantwortlichkeiten, Aufsichtsmechanismen und kultureller Praktiken die verantwortungsvolle KI-Entwicklung und -Bereitstellung in der Organisation sicherstellen.",
                  "nl": "Organisatorische verantwoordelijkheid houdt het vaststellen van institutionele kaders, governance structuren, duidelijke rollen en verantwoordelijkheden, toezichtmechanismen en culturele praktijken in die verantwoordelijke AI ontwikkeling en implementatie door de organisatie waarborgen."
        }
      },
      {
        question: {
                  "en": "What is 'algo transparency' requirement in accountability frameworks?",
                  "es": "Que es el requisito de 'transparencia algoritmica' en marcos de responsabilidad?",
                  "de": "Was ist die 'algorithmische Transparenz'-Anforderung in Verantwortlichkeitsrahmen?",
                  "nl": "Wat is de 'algoritmische transparantie' vereiste in verantwoordelijkheidskaders?"
        },
        options: [
        {
                  "en": "Obligation to disclose how AI systems work and make decisions to relevant stakeholders",
                  "es": "Obligacion de divulgar como funcionan sistemas IA y toman decisiones a partes interesadas relevantes",
                  "de": "Verpflichtung offenzulegen wie KI-Systeme funktionieren und entscheiden gegenueber Stakeholdern",
                  "nl": "Verplichting om bekend te maken hoe AI systemen werken en beslissen aan belanghebbenden"
        },
        {
                  "en": "Providing glass cases for AI hardware",
                  "es": "Proporcionar cajas de vidrio para hardware de IA",
                  "de": "Glasgehaeuse fuer KI-Hardware bereitstellen",
                  "nl": "Glazen kasten bieden voor AI hardware"
        },
        {
                  "en": "Using only open-source software for AI development",
                  "es": "Usar solo software de codigo abierto para desarrollo de IA",
                  "de": "Nur Open-Source-Software fuer KI-Entwicklung verwenden",
                  "nl": "Alleen open-source software gebruiken voor AI ontwikkeling"
        },
        {
                  "en": "Making all AI algorithms completely public on the internet",
                  "es": "Hacer todos los algoritmos de IA completamente publicos en internet",
                  "de": "Alle KI-Algorithmen vollstaendig oeffentlich im Internet machen",
                  "nl": "Alle AI algoritmes volledig openbaar maken op internet"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Algorithmic transparency requirements mandate that organizations provide appropriate disclosure about their AI systems' functioning, decision-making processes, and limitations to stakeholders who need this information for oversight, compliance, or affected individuals seeking recourse.",
                  "es": "Los requisitos de transparencia algoritmica exigen que las organizaciones proporcionen divulgacion apropiada sobre el funcionamiento de sus sistemas de IA, procesos de toma de decisiones y limitaciones a partes interesadas que necesitan esta informacion para supervision, cumplimiento o individuos afectados que buscan recurso.",
                  "de": "Algorithmische Transparenzanforderungen verlangen dass Organisationen angemessene Offenlegung ueber das Funktionieren ihrer KI-Systeme, Entscheidungsprozesse und Begrenzungen gegenueber Stakeholdern bereitstellen die diese Informationen fuer Aufsicht, Compliance oder betroffene Individuen die Rechtsmittel suchen benoetigen.",
                  "nl": "Algoritmische transparantie vereisten mandateren dat organisaties passende onthulling verstrekken over het functioneren van hun AI systemen, besluitvormingsprocessen en beperkingen aan belanghebbenden die deze informatie nodig hebben voor toezicht, compliance of getroffen individuen die verhaal zoeken."
        }
      },
      {
        question: {
                  "en": "What is 'accountability by design' in AI development?",
                  "es": "Que es 'responsabilidad por diseno' en desarrollo de IA?",
                  "de": "Was ist 'Verantwortlichkeit by Design' in der KI-Entwicklung?",
                  "nl": "Wat is 'verantwoordelijkheid by design' in AI ontwikkeling?"
        },
        options: [
        {
                  "en": "Building accountability mechanisms into AI systems from the earliest stages of development",
                  "es": "Construir mecanismos de responsabilidad en sistemas de IA desde las primeras etapas de desarrollo",
                  "de": "Verantwortlichkeitsmechanismen von den fruehesten Entwicklungsstadien an in KI-Systeme einbauen",
                  "nl": "Verantwoordelijkheidsmechanismen inbouwen in AI systemen vanaf de vroegste ontwikkelingsstadia"
        },
        {
                  "en": "Designing AI systems to look aesthetically pleasing",
                  "es": "Disenar sistemas de IA para que se vean esteticamente agradables",
                  "de": "KI-Systeme aesthetisch ansprechend gestalten",
                  "nl": "AI systemen ontwerpen om er esthetisch aantrekkelijk uit te zien"
        },
        {
                  "en": "Assigning blame for design flaws",
                  "es": "Asignar culpa por fallas de diseno",
                  "de": "Schuld fuer Designfehler zuweisen",
                  "nl": "Schuld toewijzen voor ontwerpfouten"
        },
        {
                  "en": "Creating accountability only after AI deployment",
                  "es": "Crear responsabilidad solo despues del despliegue de IA",
                  "de": "Verantwortlichkeit erst nach KI-Bereitstellung schaffen",
                  "nl": "Verantwoordelijkheid alleen creëren na AI implementatie"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Accountability by design involves incorporating accountability principles, oversight mechanisms, audit trails, explainability features, and governance structures into AI systems from the beginning of the development process rather than as an afterthought.",
                  "es": "La responsabilidad por diseno involucra incorporar principios de responsabilidad, mecanismos de supervision, rastros de auditoria, caracteristicas de explicabilidad y estructuras de gobernanza en sistemas de IA desde el comienzo del proceso de desarrollo en lugar de como una reflexion posterior.",
                  "de": "Verantwortlichkeit by Design beinhaltet die Einbeziehung von Verantwortlichkeitsprinzipien, Aufsichtsmechanismen, Audit-Pfaden, Erklaerbarkeitsfunktionen und Governance-Strukturen in KI-Systeme von Beginn des Entwicklungsprozesses an anstatt als nachtraeglichen Einfall.",
                  "nl": "Verantwoordelijkheid by design houdt het opnemen van verantwoordelijkheidsprincipes, toezichtmechanismen, audit trails, uitlegbaarheidskenmerken en governance structuren in AI systemen vanaf het begin van het ontwikkelingsproces in plaats van als een nagedachte."
        }
      },
      {
        question: {
                  "en": "What is 'chain of custody' in AI accountability?",
                  "es": "Que es 'cadena de custodia' en responsabilidad de IA?",
                  "de": "Was ist 'Beweiskette' in der KI-Verantwortlichkeit?",
                  "nl": "Wat is 'chain of custody' in AI verantwoordelijkheid?"
        },
        options: [
        {
                  "en": "Physical security for AI hardware",
                  "es": "Seguridad fisica para hardware de IA",
                  "de": "Physische Sicherheit fuer KI-Hardware",
                  "nl": "Fysieke beveiliging voor AI hardware"
        },
        {
                  "en": "Legal ownership of AI systems",
                  "es": "Propiedad legal de sistemas de IA",
                  "de": "Rechtliches Eigentum an KI-Systemen",
                  "nl": "Juridisch eigendom van AI systemen"
        },
        {
                  "en": "Documented tracking of AI system development, deployment, and decision-making processes",
                  "es": "Seguimiento documentado de desarrollo, despliegue y procesos de toma de decisiones de sistemas de IA",
                  "de": "Dokumentierte Verfolgung von KI-Systementwicklung, -Bereitstellung und Entscheidungsprozessen",
                  "nl": "Gedocumenteerde tracking van AI systeem ontwikkeling, implementatie en besluitvormingsprocessen"
        },
        {
                  "en": "Transferring AI between different companies",
                  "es": "Transferir IA entre diferentes companias",
                  "de": "KI zwischen verschiedenen Unternehmen uebertragen",
                  "nl": "AI overdragen tussen verschillende bedrijven"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Chain of custody in AI involves maintaining detailed, auditable records of how AI systems were developed, trained, tested, deployed, and how they make decisions, ensuring transparency and accountability throughout the system's lifecycle.",
                  "es": "La cadena de custodia en IA involucra mantener registros detallados y auditables de como los sistemas de IA fueron desarrollados, entrenados, probados, desplegados y como toman decisiones, asegurando transparencia y responsabilidad a lo largo del ciclo de vida del sistema.",
                  "de": "Beweiskette in der KI beinhaltet die Fuehrung detaillierter, auditierbare Aufzeichnungen darueber wie KI-Systeme entwickelt, trainiert, getestet, bereitgestellt wurden und wie sie Entscheidungen treffen, was Transparenz und Verantwortlichkeit waehrend des gesamten Systemlebenszyklus sicherstellt.",
                  "nl": "Chain of custody in AI houdt het bijhouden van gedetailleerde, auditeerbare records in van hoe AI systemen ontwikkeld, getraind, getest, geïmplementeerd werden en hoe ze beslissingen nemen, wat transparantie en verantwoordelijkheid gedurende de hele systeemlevenscyclus waarborgt."
        }
      },
      {
        question: {
                  "en": "What is 'remediation' in AI accountability frameworks?",
                  "es": "Que es 'remediacion' en marcos de responsabilidad de IA?",
                  "de": "Was ist 'Abhilfe' in KI-Verantwortlichkeitsrahmen?",
                  "nl": "Wat is 'remediatie' in AI verantwoordelijkheidskaders?"
        },
        options: [
        {
                  "en": "Upgrading AI hardware regularly",
                  "es": "Actualizar hardware de IA regularmente",
                  "de": "KI-Hardware regelmaessig aufrüsten",
                  "nl": "AI hardware regelmatig upgraden"
        },
        {
                  "en": "Processes to correct harm, compensate affected parties, and prevent future similar issues",
                  "es": "Procesos para corregir dano, compensar partes afectadas y prevenir problemas similares futuros",
                  "de": "Prozesse um Schaden zu korrigieren, Parteien zu entschaedigen und aehnliche Probleme zu verhindern",
                  "nl": "Processen om schade te corrigeren, partijen te compenseren en soortgelijke problemen te voorkomen"
        },
        {
                  "en": "Teaching AI systems about medicine",
                  "es": "Ensenar a sistemas de IA sobre medicina",
                  "de": "KI-Systemen Medizin beibringen",
                  "nl": "AI systemen leren over geneeskunde"
        },
        {
                  "en": "Removing AI systems entirely",
                  "es": "Eliminar sistemas de IA completamente",
                  "de": "KI-Systeme vollstaendig entfernen",
                  "nl": "AI systemen volledig verwijderen"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Remediation involves comprehensive responses to AI-caused harm, including correcting the immediate problem, providing compensation or redress to affected parties, implementing systemic changes to prevent recurrence, and learning from the incident.",
                  "es": "La remediacion involucra respuestas integrales al dano causado por IA, incluyendo corregir el problema inmediato, proporcionar compensacion o reparacion a partes afectadas, implementar cambios sistemicos para prevenir recurrencia y aprender del incidente.",
                  "de": "Abhilfe beinhaltet umfassende Antworten auf KI-verursachte Schaeden, einschliesslich Korrektur des unmittelbaren Problems, Bereitstellung von Entschaedigung oder Wiedergutmachung fuer betroffene Parteien, Implementierung systemischer Aenderungen zur Verhinderung von Wiederholung und Lernen aus dem Vorfall.",
                  "nl": "Remediatie houdt uitgebreide reacties op AI-veroorzaakte schade in, inclusief het corrigeren van het directe probleem, het bieden van compensatie of herstel aan getroffen partijen, het implementeren van systemische veranderingen om herhaling te voorkomen en leren van het incident."
        }
      },
      {
        question: {
                  "en": "What is 'moral responsibility' in AI development?",
                  "es": "Que es 'responsabilidad moral' en el desarrollo de IA?",
                  "de": "Was ist 'moralische Verantwortung' in der KI-Entwicklung?",
                  "nl": "Wat is 'morele verantwoordelijkheid' in AI ontwikkeling?"
        },
        options: [
        {
                  "en": "Teaching AI systems to be moral",
                  "es": "Ensenar a sistemas de IA a ser morales",
                  "de": "KI-Systeme Moral beibringen",
                  "nl": "AI systemen leren moreel te zijn"
        },
        {
                  "en": "The ethical obligation to consider consequences and be answerable for AI system impacts",
                  "es": "La obligacion etica de considerar consecuencias y ser responsable por los impactos del sistema de IA",
                  "de": "Die ethische Verpflichtung Konsequenzen zu beruecksichtigen und fuer KI-Auswirkungen verantwortlich",
                  "nl": "De ethische verplichting gevolgen te overwegen en verantwoordelijk te zijn voor AI impacts"
        },
        {
                  "en": "Avoiding all responsibility for AI actions",
                  "es": "Evitar toda responsabilidad por acciones de IA",
                  "de": "Jede Verantwortung fuer KI-Aktionen vermeiden",
                  "nl": "Alle verantwoordelijkheid voor AI acties vermijden"
        },
        {
                  "en": "Only legal liability for AI failures",
                  "es": "Solo responsabilidad legal por fallas de IA",
                  "de": "Nur rechtliche Haftung fuer KI-Versagen",
                  "nl": "Alleen juridische aansprakelijkheid voor AI falen"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Moral responsibility in AI development encompasses the ethical duty to consider potential consequences of AI systems, ensure human oversight, and be accountable for the impacts these systems have on individuals and society.",
                  "es": "La responsabilidad moral en el desarrollo de IA abarca el deber etico de considerar las consecuencias potenciales de los sistemas de IA, asegurar supervision humana y ser responsable por los impactos que estos sistemas tienen en individuos y la sociedad.",
                  "de": "Moralische Verantwortung in der KI-Entwicklung umfasst die ethische Pflicht moegliche Konsequenzen von KI-Systemen zu beruecksichtigen, menschliche Aufsicht sicherzustellen und fuer die Auswirkungen verantwortlich zu sein die diese Systeme auf Individuen und die Gesellschaft haben.",
                  "nl": "Morele verantwoordelijkheid in AI ontwikkeling omvat de ethische plicht om potentiele gevolgen van AI systemen te overwegen, menselijk toezicht te waarborgen en verantwoordelijk te zijn voor de impacts die deze systemen hebben op individuen en de samenleving."
        }
      },
      {
        question: {
                  "en": "What is 'causal responsibility' in AI systems?",
                  "es": "Que es 'responsabilidad causal' en sistemas de IA?",
                  "de": "Was ist 'kausale Verantwortung' in KI-Systemen?",
                  "nl": "Wat is 'causale verantwoordelijkheid' in AI systemen?"
        },
        options: [
        {
                  "en": "Legal liability for financial causes",
                  "es": "Responsabilidad legal por causas financieras",
                  "de": "Rechtliche Haftung fuer finanzielle Ursachen",
                  "nl": "Juridische aansprakelijkheid voor financiele oorzaken"
        },
        {
                  "en": "Responsibility for explaining cause and effect",
                  "es": "Responsabilidad de explicar causa y efecto",
                  "de": "Verantwortung Ursache und Wirkung zu erklaeren",
                  "nl": "Verantwoordelijkheid voor het uitleggen van oorzaak en gevolg"
        },
        {
                  "en": "Being responsible because one's actions caused a particular outcome",
                  "es": "Ser responsable porque las acciones de uno causaron un resultado particular",
                  "de": "Verantwortlich sein weil die eigenen Handlungen ein bestimmtes Ergebnis verursacht haben",
                  "nl": "Verantwoordelijk zijn omdat iemands acties een bepaalde uitkomst veroorzaakten"
        },
        {
                  "en": "Only technical attribution of errors",
                  "es": "Solo atribucion tecnica de errores",
                  "de": "Nur technische Zuordnung von Fehlern",
                  "nl": "Alleen technische toewijzing van fouten"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Causal responsibility focuses on whether someone's actions or decisions led to a particular outcome. In AI, this involves determining which parties in the development or deployment chain causally contributed to an AI system's harmful outcome.",
                  "es": "La responsabilidad causal se enfoca en si las acciones o decisiones de alguien llevaron a un resultado particular. En IA, esto involucra determinar que partes en la cadena de desarrollo o despliegue contribuyeron causalmente a un resultado danino del sistema de IA.",
                  "de": "Kausale Verantwortung fokussiert darauf ob jemandes Handlungen oder Entscheidungen zu einem bestimmten Ergebnis gefuehrt haben. In der KI beinhaltet dies die Bestimmung welche Parteien in der Entwicklungs- oder Bereitstellungskette kausal zu einem schaedlichen Ergebnis des KI-Systems beigetragen haben.",
                  "nl": "Causale verantwoordelijkheid richt zich op of iemands acties of beslissingen tot een bepaalde uitkomst leidden. In AI houdt dit het bepalen in welke partijen in de ontwikkelings- of implementatieketen causaal bijdroegen aan een schadelijke uitkomst van het AI systeem."
        }
      },
      {
        question: {
                  "en": "What is 'role responsibility' versus 'capacity responsibility' in AI?",
                  "es": "Que es 'responsabilidad de rol' versus 'responsabilidad de capacidad' en IA?",
                  "de": "Was ist 'Rollenverantwortung' versus 'Kapazitaetsverantwortung' in der KI?",
                  "nl": "Wat is 'rol verantwoordelijkheid' versus 'capaciteitsverantwoordelijkheid' in AI?"
        },
        options: [
        {
                  "en": "Role is legal; capacity is technical",
                  "es": "Rol es legal; capacidad es tecnico",
                  "de": "Rolle ist rechtlich; Kapazitaet ist technisch",
                  "nl": "Rol is juridisch; capaciteit is technisch"
        },
        {
                  "en": "Both mean exactly the same thing",
                  "es": "Ambos significan exactamente lo mismo",
                  "de": "Beide bedeuten genau dasselbe",
                  "nl": "Beide betekenen precies hetzelfde"
        },
        {
                  "en": "Role is responsibility from position; capacity is responsibility from ability to act",
                  "es": "Rol es responsabilidad por posicion; capacidad es responsabilidad por habilidad de actuar",
                  "de": "Rolle ist Verantwortung aus Position; Kapazitaet ist Verantwortung aus Handlungsfaehigkeit",
                  "nl": "Rol is verantwoordelijkheid uit positie; capaciteit is verantwoordelijkheid uit vermogen te handelen"
        },
        {
                  "en": "Role is for managers; capacity is for developers",
                  "es": "Rol es para gerentes; capacidad es para desarrolladores",
                  "de": "Rolle ist fuer Manager; Kapazitaet ist fuer Entwickler",
                  "nl": "Rol is voor managers; capaciteit is voor ontwikkelaars"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Role responsibility derives from one's position or role (e.g., a CEO's responsibility for their company's AI), while capacity responsibility stems from one's ability to prevent or influence outcomes (e.g., a developer who could fix a known bug).",
                  "es": "La responsabilidad de rol deriva de la posicion o rol de uno (ej., la responsabilidad de un CEO por la IA de su empresa), mientras que la responsabilidad de capacidad proviene de la habilidad de uno para prevenir o influenciar resultados (ej., un desarrollador que podria arreglar un error conocido).",
                  "de": "Rollenverantwortung ergibt sich aus der Position oder Rolle (z.B. Verantwortung eines CEO fuer die KI seines Unternehmens), waehrend Kapazitaetsverantwortung aus der Faehigkeit stammt Ergebnisse zu verhindern oder zu beeinflussen (z.B. ein Entwickler der einen bekannten Fehler beheben koennte).",
                  "nl": "Rol verantwoordelijkheid komt voort uit iemands positie of rol (bijv. verantwoordelijkheid van een CEO voor de AI van hun bedrijf), terwijl capaciteitsverantwoordelijkheid voortkomt uit iemands vermogen om uitkomsten te voorkomen of te beinvloeden (bijv. een ontwikkelaar die een bekende bug kon fixen)."
        }
      },
      {
        question: {
                  "en": "What is an 'AI impact assessment' in accountability frameworks?",
                  "es": "Que es una 'evaluacion de impacto de IA' en marcos de responsabilidad?",
                  "de": "Was ist eine 'KI-Folgenabschaetzung' in Verantwortlichkeitsrahmen?",
                  "nl": "Wat is een 'AI impactbeoordeling' in verantwoordelijkheidskaders?"
        },
        options: [
        {
                  "en": "Evaluating only financial costs",
                  "es": "Evaluar solo costos financieros",
                  "de": "Nur finanzielle Kosten bewerten",
                  "nl": "Alleen financiele kosten evalueren"
        },
        {
                  "en": "Measuring physical damage from AI hardware",
                  "es": "Medir dano fisico de hardware de IA",
                  "de": "Physischen Schaden durch KI-Hardware messen",
                  "nl": "Fysieke schade van AI hardware meten"
        },
        {
                  "en": "Testing how fast AI can process data",
                  "es": "Probar que tan rapido IA puede procesar datos",
                  "de": "Testen wie schnell KI Daten verarbeiten kann",
                  "nl": "Testen hoe snel AI data kan verwerken"
        },
        {
                  "en": "Systematic evaluation of potential consequences before deploying AI systems",
                  "es": "Evaluacion sistematica de consecuencias potenciales antes de desplegar sistemas de IA",
                  "de": "Systematische Bewertung moeglicher Konsequenzen vor Bereitstellung von KI-Systemen",
                  "nl": "Systematische evaluatie van potentiele gevolgen voor implementatie van AI systemen"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "AI impact assessments systematically analyze potential social, ethical, legal, and technical consequences of AI systems before deployment, helping identify risks, ensure accountability, and guide responsible development decisions.",
                  "es": "Las evaluaciones de impacto de IA analizan sistematicamente las consecuencias sociales, eticas, legales y tecnicas potenciales de sistemas de IA antes del despliegue, ayudando a identificar riesgos, asegurar responsabilidad y guiar decisiones de desarrollo responsable.",
                  "de": "KI-Folgenabschaetzungen analysieren systematisch potentielle soziale, ethische, rechtliche und technische Konsequenzen von KI-Systemen vor der Bereitstellung, helfen Risiken zu identifizieren, Verantwortlichkeit sicherzustellen und verantwortungsvolle Entwicklungsentscheidungen zu leiten.",
                  "nl": "AI impactbeoordelingen analyseren systematisch potentiele sociale, ethische, juridische en technische gevolgen van AI systemen voor implementatie, helpen risico's identificeren, verantwoordelijkheid waarborgen en verantwoordelijke ontwikkelingsbeslissingen leiden."
        }
      },
      {
        question: {
                  "en": "What is 'vicarious liability' in AI contexts?",
                  "es": "Que es 'responsabilidad vicaria' en contextos de IA?",
                  "de": "Was ist 'stellvertretende Haftung' in KI-Kontexten?",
                  "nl": "Wat is 'plaatsvervangende aansprakelijkheid' in AI contexten?"
        },
        options: [
        {
                  "en": "Responsibility shared equally among all users",
                  "es": "Responsabilidad compartida igualmente entre todos los usuarios",
                  "de": "Verantwortung gleichmaessig unter allen Nutzern geteilt",
                  "nl": "Verantwoordelijkheid gelijk gedeeld onder alle gebruikers"
        },
        {
                  "en": "Legal responsibility of an entity for actions of its employees or agents using AI",
                  "es": "Responsabilidad legal de una entidad por acciones de sus empleados o agentes usando IA",
                  "de": "Rechtliche Verantwortung einer Entitaet fuer Handlungen ihrer Mitarbeiter bei KI-Nutzung",
                  "nl": "Juridische verantwoordelijkheid van een entiteit voor acties van werknemers bij AI gebruik"
        },
        {
                  "en": "AI systems experiencing human emotions",
                  "es": "Sistemas de IA experimentando emociones humanas",
                  "de": "KI-Systeme erleben menschliche Emotionen",
                  "nl": "AI systemen die menselijke emoties ervaren"
        },
        {
                  "en": "Virtual reality applications of AI",
                  "es": "Aplicaciones de realidad virtual de IA",
                  "de": "Virtual-Reality-Anwendungen von KI",
                  "nl": "Virtual reality toepassingen van AI"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Vicarious liability holds organizations or employers legally responsible for AI-related actions of their employees or agents acting within the scope of their employment, even if the organization itself didn't directly cause the harm.",
                  "es": "La responsabilidad vicaria responsabiliza legalmente a organizaciones o empleadores por acciones relacionadas con IA de sus empleados o agentes actuando dentro del alcance de su empleo, incluso si la organizacion misma no causo directamente el dano.",
                  "de": "Stellvertretende Haftung macht Organisationen oder Arbeitgeber rechtlich verantwortlich fuer KI-bezogene Handlungen ihrer Mitarbeiter oder Vertreter die im Rahmen ihrer Beschaeftigung handeln, selbst wenn die Organisation den Schaden nicht direkt verursacht hat.",
                  "nl": "Plaatsvervangende aansprakelijkheid houdt organisaties of werkgevers juridisch verantwoordelijk voor AI-gerelateerde acties van hun werknemers of vertegenwoordigers die binnen hun werkbereik handelen, zelfs als de organisatie zelf de schade niet direct veroorzaakte."
        }
      },
      {
        question: {
                  "en": "What is 'substantive accountability' versus 'procedural accountability'?",
                  "es": "Que es 'responsabilidad sustantiva' versus 'responsabilidad procesal'?",
                  "de": "Was ist 'inhaltliche Verantwortlichkeit' versus 'verfahrensmaessige Verantwortlichkeit'?",
                  "nl": "Wat is 'substantiele verantwoordelijkheid' versus 'procedurele verantwoordelijkheid'?"
        },
        options: [
        {
                  "en": "Both concepts are identical",
                  "es": "Ambos conceptos son identicos",
                  "de": "Beide Konzepte sind identisch",
                  "nl": "Beide concepten zijn identiek"
        },
        {
                  "en": "Substantive is for developers; procedural is for users",
                  "es": "Sustantiva es para desarrolladores; procesal es para usuarios",
                  "de": "Inhaltlich ist fuer Entwickler; verfahrensmaessig ist fuer Nutzer",
                  "nl": "Substantieel is voor ontwikkelaars; procedureel is voor gebruikers"
        },
        {
                  "en": "Substantive is legal; procedural is ethical",
                  "es": "Sustantiva es legal; procesal es etica",
                  "de": "Inhaltlich ist rechtlich; verfahrensmaessig ist ethisch",
                  "nl": "Substantieel is juridisch; procedureel is ethisch"
        },
        {
                  "en": "Substantive focuses on outcomes; procedural focuses on following proper processes",
                  "es": "Sustantiva se enfoca en resultados; procesal se enfoca en seguir procesos apropiados",
                  "de": "Inhaltlich fokussiert auf Ergebnisse; verfahrensmaessig fokussiert auf korrekte Prozesse",
                  "nl": "Substantieel richt zich op uitkomsten; procedureel richt zich op volgen juiste processen"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Substantive accountability judges whether AI systems produce fair, safe, and beneficial outcomes, while procedural accountability evaluates whether proper processes, protocols, and governance structures were followed during development and deployment.",
                  "es": "La responsabilidad sustantiva juzga si los sistemas de IA producen resultados justos, seguros y beneficiosos, mientras que la responsabilidad procesal evalua si se siguieron procesos, protocolos y estructuras de gobernanza apropiados durante el desarrollo y despliegue.",
                  "de": "Inhaltliche Verantwortlichkeit beurteilt ob KI-Systeme faire, sichere und vorteilhafte Ergebnisse produzieren, waehrend verfahrensmaessige Verantwortlichkeit bewertet ob angemessene Prozesse, Protokolle und Governance-Strukturen waehrend Entwicklung und Bereitstellung befolgt wurden.",
                  "nl": "Substantiele verantwoordelijkheid beoordeelt of AI systemen eerlijke, veilige en voordelige uitkomsten produceren, terwijl procedurele verantwoordelijkheid evalueert of juiste processen, protocollen en governance structuren gevolgd werden tijdens ontwikkeling en implementatie."
        }
      },
      {
        question: {
                  "en": "What is 'answerability' as a component of accountability?",
                  "es": "Que es 'responsabilidad de responder' como componente de la responsabilidad?",
                  "de": "Was ist 'Rechenschaftspflicht' als Komponente der Verantwortlichkeit?",
                  "nl": "Wat is 'verantwoording afleggen' als component van verantwoordelijkheid?"
        },
        options: [
        {
                  "en": "The ability of AI to answer questions correctly",
                  "es": "La capacidad de IA para responder preguntas correctamente",
                  "de": "Die Faehigkeit von KI Fragen korrekt zu beantworten",
                  "nl": "Het vermogen van AI om vragen correct te beantwoorden"
        },
        {
                  "en": "The obligation to explain and justify decisions and actions to stakeholders",
                  "es": "La obligacion de explicar y justificar decisiones y acciones a partes interesadas",
                  "de": "Die Verpflichtung Entscheidungen und Handlungen gegenueber Stakeholdern zu erklaeren",
                  "nl": "De verplichting om beslissingen en acties aan belanghebbenden uit te leggen en te rechtvaardigen"
        },
        {
                  "en": "Only technical documentation requirements",
                  "es": "Solo requisitos de documentacion tecnica",
                  "de": "Nur technische Dokumentationsanforderungen",
                  "nl": "Alleen technische documentatie vereisten"
        },
        {
                  "en": "Creating FAQ documents for AI systems",
                  "es": "Crear documentos de preguntas frecuentes para sistemas de IA",
                  "de": "FAQ-Dokumente fuer KI-Systeme erstellen",
                  "nl": "FAQ documenten maken voor AI systemen"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Answerability is the requirement that those responsible for AI systems must be able to explain and justify their decisions, actions, and the system's behavior to relevant stakeholders, including regulators, affected individuals, and the public.",
                  "es": "La responsabilidad de responder es el requisito de que los responsables de sistemas de IA deben poder explicar y justificar sus decisiones, acciones y el comportamiento del sistema a partes interesadas relevantes, incluyendo reguladores, individuos afectados y el publico.",
                  "de": "Rechenschaftspflicht ist die Anforderung dass Verantwortliche fuer KI-Systeme in der Lage sein muessen ihre Entscheidungen, Handlungen und das Systemverhalten gegenueber relevanten Stakeholdern einschliesslich Regulatoren, betroffenen Individuen und der Oeffentlichkeit zu erklaeren und zu rechtfertigen.",
                  "nl": "Verantwoording afleggen is de vereiste dat verantwoordelijken voor AI systemen hun beslissingen, acties en het systeemgedrag moeten kunnen uitleggen en rechtvaardigen aan relevante belanghebbenden, inclusief regelgevers, getroffen individuen en het publiek."
        }
      },
      {
        question: {
                  "en": "What is 'enforcement' in AI accountability?",
                  "es": "Que es 'aplicacion' en responsabilidad de IA?",
                  "de": "Was ist 'Durchsetzung' in der KI-Verantwortlichkeit?",
                  "nl": "Wat is 'handhaving' in AI verantwoordelijkheid?"
        },
        options: [
        {
                  "en": "Physical security for AI installations",
                  "es": "Seguridad fisica para instalaciones de IA",
                  "de": "Physische Sicherheit fuer KI-Installationen",
                  "nl": "Fysieke beveiliging voor AI installaties"
        },
        {
                  "en": "Making AI systems work faster",
                  "es": "Hacer que sistemas de IA funcionen mas rapido",
                  "de": "KI-Systeme schneller arbeiten lassen",
                  "nl": "AI systemen sneller laten werken"
        },
        {
                  "en": "Mechanisms to ensure compliance and impose consequences for accountability failures",
                  "es": "Mecanismos para asegurar cumplimiento e imponer consecuencias por fallas de responsabilidad",
                  "de": "Mechanismen um Compliance sicherzustellen und Konsequenzen bei Verantwortlichkeitsversagen durchzusetzen",
                  "nl": "Mechanismen om compliance te waarborgen en consequenties op te leggen bij verantwoordelijkheidsfalen"
        },
        {
                  "en": "Only legal prosecution of developers",
                  "es": "Solo enjuiciamiento legal de desarrolladores",
                  "de": "Nur rechtliche Verfolgung von Entwicklern",
                  "nl": "Alleen juridische vervolging van ontwikkelaars"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Enforcement involves the systems, regulations, and processes that ensure AI accountability standards are followed, including audits, sanctions, penalties, legal remedies, and institutional mechanisms to address violations and compel compliance.",
                  "es": "La aplicacion involucra los sistemas, regulaciones y procesos que aseguran que se sigan los estandares de responsabilidad de IA, incluyendo auditorias, sanciones, penalidades, remedios legales y mecanismos institucionales para abordar violaciones y obligar al cumplimiento.",
                  "de": "Durchsetzung umfasst die Systeme, Vorschriften und Prozesse die sicherstellen dass KI-Verantwortlichkeitsstandards befolgt werden, einschliesslich Audits, Sanktionen, Strafen, rechtliche Abhilfen und institutionelle Mechanismen um Verstoesse anzugehen und Compliance zu erzwingen.",
                  "nl": "Handhaving omvat de systemen, regelgeving en processen die waarborgen dat AI verantwoordelijkheidsstandaarden gevolgd worden, inclusief audits, sancties, boetes, juridische remedies en institutionele mechanismen om overtredingen aan te pakken en compliance af te dwingen."
        }
      },
      {
        question: {
                  "en": "What is 'redress' in AI accountability frameworks?",
                  "es": "Que es 'reparacion' en marcos de responsabilidad de IA?",
                  "de": "Was ist 'Wiedergutmachung' in KI-Verantwortlichkeitsrahmen?",
                  "nl": "Wat is 'verhaal' in AI verantwoordelijkheidskaders?"
        },
        options: [
        {
                  "en": "Rewriting AI code after deployment",
                  "es": "Reescribir codigo de IA despues del despliegue",
                  "de": "KI-Code nach Bereitstellung neu schreiben",
                  "nl": "AI code herschrijven na implementatie"
        },
        {
                  "en": "Only financial compensation for companies",
                  "es": "Solo compensacion financiera para companias",
                  "de": "Nur finanzielle Entschaedigung fuer Unternehmen",
                  "nl": "Alleen financiele compensatie voor bedrijven"
        },
        {
                  "en": "Changing AI system interfaces",
                  "es": "Cambiar interfaces de sistemas de IA",
                  "de": "KI-Systemschnittstellen aendern",
                  "nl": "AI systeem interfaces veranderen"
        },
        {
                  "en": "Mechanisms for affected individuals to seek remedy when harmed by AI systems",
                  "es": "Mecanismos para que individuos afectados busquen remedio cuando son danados por sistemas de IA",
                  "de": "Mechanismen fuer betroffene Individuen um Abhilfe zu suchen wenn durch KI-Systeme geschaedigt",
                  "nl": "Mechanismen voor getroffen individuen om verhaal te zoeken bij schade door AI systemen"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Redress mechanisms provide affected individuals with accessible ways to challenge AI decisions, seek explanations, request corrections, obtain compensation, and have harmful outcomes reversed or mitigated through appeals, complaints, or legal processes.",
                  "es": "Los mecanismos de reparacion proporcionan a individuos afectados formas accesibles de desafiar decisiones de IA, buscar explicaciones, solicitar correcciones, obtener compensacion y revertir o mitigar resultados daninos a traves de apelaciones, quejas o procesos legales.",
                  "de": "Wiedergutmachungsmechanismen bieten betroffenen Individuen zugaengliche Wege um KI-Entscheidungen anzufechten, Erklaerungen zu suchen, Korrekturen zu verlangen, Entschaedigung zu erhalten und schaedliche Ergebnisse durch Berufungen, Beschwerden oder rechtliche Prozesse rueckgaengig zu machen oder abzumildern.",
                  "nl": "Verhaalmechanismen bieden getroffen individuen toegankelijke manieren om AI beslissingen aan te vechten, uitleg te zoeken, correcties aan te vragen, compensatie te verkrijgen en schadelijke uitkomsten teruggedraaid of verzacht te krijgen via beroepen, klachten of juridische processen."
        }
      },
      {
        question: {
                  "en": "What is 'delegated responsibility' in AI contexts?",
                  "es": "Que es 'responsabilidad delegada' en contextos de IA?",
                  "de": "Was ist 'delegierte Verantwortung' in KI-Kontexten?",
                  "nl": "Wat is 'gedelegeerde verantwoordelijkheid' in AI contexten?"
        },
        options: [
        {
                  "en": "Only legal delegation of authority",
                  "es": "Solo delegacion legal de autoridad",
                  "de": "Nur rechtliche Autoritaetsdelegation",
                  "nl": "Alleen juridische delegatie van autoriteit"
        },
        {
                  "en": "Completely removing human responsibility",
                  "es": "Remover completamente la responsabilidad humana",
                  "de": "Menschliche Verantwortung vollstaendig entfernen",
                  "nl": "Menselijke verantwoordelijkheid volledig verwijderen"
        },
        {
                  "en": "Transferring specific tasks to AI while retaining ultimate accountability",
                  "es": "Transferir tareas especificas a IA mientras se retiene responsabilidad ultima",
                  "de": "Spezifische Aufgaben an KI uebertragen waehrend ultimative Verantwortlichkeit behalten wird",
                  "nl": "Specifieke taken overdragen aan AI terwijl uiteindelijke verantwoordelijkheid behouden blijft"
        },
        {
                  "en": "AI systems delegating to other AI systems",
                  "es": "Sistemas de IA delegando a otros sistemas de IA",
                  "de": "KI-Systeme delegieren an andere KI-Systeme",
                  "nl": "AI systemen delegeren aan andere AI systemen"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Delegated responsibility involves humans assigning specific decision-making or operational tasks to AI systems while maintaining ultimate accountability for outcomes. The delegation of tasks does not eliminate human responsibility for proper oversight and system performance.",
                  "es": "La responsabilidad delegada involucra que humanos asignen tareas especificas de toma de decisiones u operacionales a sistemas de IA mientras mantienen responsabilidad ultima por los resultados. La delegacion de tareas no elimina la responsabilidad humana por supervision apropiada y rendimiento del sistema.",
                  "de": "Delegierte Verantwortung beinhaltet dass Menschen spezifische Entscheidungs- oder Betriebsaufgaben an KI-Systeme zuweisen waehrend sie ultimative Verantwortlichkeit fuer Ergebnisse behalten. Die Delegation von Aufgaben beseitigt nicht die menschliche Verantwortung fuer angemessene Aufsicht und Systemleistung.",
                  "nl": "Gedelegeerde verantwoordelijkheid houdt in dat mensen specifieke besluitvormings- of operationele taken toewijzen aan AI systemen terwijl ze uiteindelijke verantwoordelijkheid voor uitkomsten behouden. De delegatie van taken elimineert niet de menselijke verantwoordelijkheid voor passend toezicht en systeemprestaties."
        }
      },
      {
        question: {
                  "en": "What is the 'responsibility gap' problem in advanced AI?",
                  "es": "Que es el problema de la 'brecha de responsabilidad' en IA avanzada?",
                  "de": "Was ist das 'Verantwortungsluecken'-Problem in fortgeschrittener KI?",
                  "nl": "Wat is het 'verantwoordelijkheidskloof' probleem in geavanceerde AI?"
        },
        options: [
        {
                  "en": "Gaps in AI training data",
                  "es": "Brechas en datos de entrenamiento de IA",
                  "de": "Luecken in KI-Trainingsdaten",
                  "nl": "Hiaten in AI trainingsdata"
        },
        {
                  "en": "Differences in AI processing speeds",
                  "es": "Diferencias en velocidades de procesamiento de IA",
                  "de": "Unterschiede in KI-Verarbeitungsgeschwindigkeiten",
                  "nl": "Verschillen in AI verwerkingssnelheden"
        },
        {
                  "en": "Difficulty assigning accountability when AI acts autonomously beyond human control or prediction",
                  "es": "Dificultad asignando responsabilidad cuando IA actua autonomamente mas alla de control humano",
                  "de": "Schwierigkeit Verantwortlichkeit zuzuweisen wenn KI autonom jenseits menschlicher Kontrolle handelt",
                  "nl": "Moeilijkheid verantwoordelijkheid toe te wijzen wanneer AI autonoom handelt buiten menselijke controle"
        },
        {
                  "en": "The physical distance between AI servers",
                  "es": "La distancia fisica entre servidores de IA",
                  "de": "Die physische Distanz zwischen KI-Servern",
                  "nl": "De fysieke afstand tussen AI servers"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "The responsibility gap emerges with highly autonomous AI systems that can make unexpected decisions or take actions that were not explicitly programmed, creating situations where neither developers, operators, nor users can be easily held responsible using traditional accountability frameworks.",
                  "es": "La brecha de responsabilidad emerge con sistemas de IA altamente autonomos que pueden tomar decisiones inesperadas o acciones que no fueron explicitamente programadas, creando situaciones donde ni desarrolladores, operadores ni usuarios pueden ser facilmente responsabilizados usando marcos tradicionales de responsabilidad.",
                  "de": "Die Verantwortungsluecke entsteht bei hochautonomen KI-Systemen die unerwartete Entscheidungen treffen oder Handlungen ausfuehren koennen die nicht explizit programmiert wurden, wodurch Situationen entstehen wo weder Entwickler, Betreiber noch Nutzer mit traditionellen Verantwortlichkeitsrahmen leicht verantwortlich gemacht werden koennen.",
                  "nl": "De verantwoordelijkheidskloof ontstaat bij zeer autonome AI systemen die onverwachte beslissingen kunnen nemen of acties uitvoeren die niet expliciet geprogrammeerd waren, wat situaties creëert waar noch ontwikkelaars, operatoren noch gebruikers gemakkelijk verantwoordelijk gehouden kunnen worden met traditionele verantwoordelijkheidskaders."
        }
      },
      {
        question: {
                  "en": "What is 'forward-looking responsibility' in AI governance?",
                  "es": "Que es 'responsabilidad prospectiva' en gobernanza de IA?",
                  "de": "Was ist 'zukunftsgerichtete Verantwortung' in der KI-Governance?",
                  "nl": "Wat is 'vooruitziende verantwoordelijkheid' in AI governance?"
        },
        options: [
        {
                  "en": "Predicting AI market trends",
                  "es": "Predecir tendencias del mercado de IA",
                  "de": "KI-Markttrends vorhersagen",
                  "nl": "AI markttrends voorspellen"
        },
        {
                  "en": "Only focusing on current AI capabilities",
                  "es": "Solo enfocarse en capacidades actuales de IA",
                  "de": "Nur auf aktuelle KI-Faehigkeiten fokussieren",
                  "nl": "Alleen focussen op huidige AI capaciteiten"
        },
        {
                  "en": "Proactive obligation to prevent future harm and ensure beneficial AI outcomes",
                  "es": "Obligacion proactiva de prevenir dano futuro y asegurar resultados beneficiosos de IA",
                  "de": "Proaktive Verpflichtung zukuenftigen Schaden zu verhindern und vorteilhafte KI-Ergebnisse sicherzustellen",
                  "nl": "Proactieve verplichting om toekomstige schade te voorkomen en voordelige AI uitkomsten te waarborgen"
        },
        {
                  "en": "Planning AI hardware upgrades",
                  "es": "Planear actualizaciones de hardware de IA",
                  "de": "KI-Hardware-Upgrades planen",
                  "nl": "AI hardware upgrades plannen"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Forward-looking responsibility emphasizes the proactive duty to anticipate potential risks, implement safeguards, continuously monitor systems, and take preventive action to ensure AI systems remain beneficial and aligned with societal values over time.",
                  "es": "La responsabilidad prospectiva enfatiza el deber proactivo de anticipar riesgos potenciales, implementar salvaguardas, monitorear continuamente sistemas y tomar accion preventiva para asegurar que sistemas de IA permanezcan beneficiosos y alineados con valores sociales a lo largo del tiempo.",
                  "de": "Zukunftsgerichtete Verantwortung betont die proaktive Pflicht potentielle Risiken zu antizipieren, Schutzmaßnahmen zu implementieren, Systeme kontinuierlich zu ueberwachen und praeventive Maßnahmen zu ergreifen um sicherzustellen dass KI-Systeme im Laufe der Zeit vorteilhaft und mit gesellschaftlichen Werten ausgerichtet bleiben.",
                  "nl": "Vooruitziende verantwoordelijkheid benadrukt de proactieve plicht om potentiele risico's te anticiperen, waarborgen te implementeren, systemen continu te monitoren en preventieve actie te nemen om ervoor te zorgen dat AI systemen in de loop van de tijd voordelig en afgestemd blijven op maatschappelijke waarden."
        }
      },
      {
        question: {
                  "en": "What is 'collective responsibility' for AI systems?",
                  "es": "Que es 'responsabilidad colectiva' para sistemas de IA?",
                  "de": "Was ist 'kollektive Verantwortung' fuer KI-Systeme?",
                  "nl": "Wat is 'collectieve verantwoordelijkheid' voor AI systemen?"
        },
        options: [
        {
                  "en": "Shared accountability among society, institutions, and individuals for AI's societal impacts",
                  "es": "Responsabilidad compartida entre sociedad, instituciones e individuos por impactos sociales de IA",
                  "de": "Geteilte Verantwortlichkeit zwischen Gesellschaft, Institutionen und Individuen fuer KI-Auswirkungen",
                  "nl": "Gedeelde verantwoordelijkheid tussen samenleving, instituties en individuen voor AI maatschappelijke impacts"
        },
        {
                  "en": "Collecting data for AI training",
                  "es": "Recolectar datos para entrenamiento de IA",
                  "de": "Daten fuer KI-Training sammeln",
                  "nl": "Data verzamelen voor AI training"
        },
        {
                  "en": "AI systems working together",
                  "es": "Sistemas de IA trabajando juntos",
                  "de": "KI-Systeme arbeiten zusammen",
                  "nl": "AI systemen die samenwerken"
        },
        {
                  "en": "Only group decisions about AI development",
                  "es": "Solo decisiones grupales sobre desarrollo de IA",
                  "de": "Nur Gruppenentscheidungen ueber KI-Entwicklung",
                  "nl": "Alleen groepsbeslissingen over AI ontwikkeling"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Collective responsibility recognizes that creating beneficial AI requires shared accountability across multiple actors including developers, deployers, regulators, researchers, civil society, and users, each contributing to responsible AI governance within their sphere of influence.",
                  "es": "La responsabilidad colectiva reconoce que crear IA beneficiosa requiere responsabilidad compartida entre multiples actores incluyendo desarrolladores, implementadores, reguladores, investigadores, sociedad civil y usuarios, cada uno contribuyendo a gobernanza responsable de IA dentro de su esfera de influencia.",
                  "de": "Kollektive Verantwortung erkennt an dass die Schaffung vorteilhafter KI geteilte Verantwortlichkeit ueber mehrere Akteure hinweg erfordert einschliesslich Entwicklern, Bereitstellern, Regulatoren, Forschern, Zivilgesellschaft und Nutzern, die jeweils zur verantwortungsvollen KI-Governance in ihrem Einflussbereich beitragen.",
                  "nl": "Collectieve verantwoordelijkheid erkent dat het creëren van voordelige AI gedeelde verantwoordelijkheid vereist over meerdere actoren inclusief ontwikkelaars, implementeerders, regelgevers, onderzoekers, civiele samenleving en gebruikers, die elk bijdragen aan verantwoordelijke AI governance binnen hun invloedssfeer."
        }
      },
      {
        question: {
                  "en": "What is 'outcome accountability' in AI systems?",
                  "es": "Que es 'responsabilidad de resultados' en sistemas de IA?",
                  "de": "Was ist 'Ergebnisverantwortlichkeit' in KI-Systemen?",
                  "nl": "Wat is 'uitkomst verantwoordelijkheid' in AI systemen?"
        },
        options: [
        {
                  "en": "Being held responsible for actual results and consequences of AI decisions",
                  "es": "Ser responsabilizado por resultados reales y consecuencias de decisiones de IA",
                  "de": "Fuer tatsaechliche Ergebnisse und Konsequenzen von KI-Entscheidungen verantwortlich gemacht werden",
                  "nl": "Verantwoordelijk gehouden worden voor werkelijke resultaten en gevolgen van AI beslissingen"
        },
        {
                  "en": "Only documenting AI outputs",
                  "es": "Solo documentar salidas de IA",
                  "de": "Nur KI-Ausgaben dokumentieren",
                  "nl": "Alleen AI outputs documenteren"
        },
        {
                  "en": "Measuring AI processing speed",
                  "es": "Medir velocidad de procesamiento de IA",
                  "de": "KI-Verarbeitungsgeschwindigkeit messen",
                  "nl": "AI verwerkingssnelheid meten"
        },
        {
                  "en": "Predicting future AI performance",
                  "es": "Predecir rendimiento futuro de IA",
                  "de": "Zukuenftige KI-Leistung vorhersagen",
                  "nl": "Toekomstige AI prestaties voorspellen"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Outcome accountability focuses on holding parties responsible for the actual impacts and consequences of AI systems, regardless of intentions or processes followed, emphasizing that those deploying AI must answer for real-world results.",
                  "es": "La responsabilidad de resultados se enfoca en responsabilizar a las partes por los impactos reales y consecuencias de sistemas de IA, independientemente de intenciones o procesos seguidos, enfatizando que quienes despliegan IA deben responder por resultados del mundo real.",
                  "de": "Ergebnisverantwortlichkeit fokussiert darauf Parteien fuer die tatsaechlichen Auswirkungen und Konsequenzen von KI-Systemen verantwortlich zu machen, unabhaengig von Absichten oder befolgten Prozessen, wobei betont wird dass diejenigen die KI bereitstellen fuer reale Ergebnisse Rechenschaft ablegen muessen.",
                  "nl": "Uitkomst verantwoordelijkheid richt zich op het verantwoordelijk houden van partijen voor de werkelijke impacts en gevolgen van AI systemen, ongeacht intenties of gevolgde processen, benadrukkend dat degenen die AI implementeren moeten verantwoorden voor echte resultaten."
        }
      },
      {
        question: {
                  "en": "What is 'meaningful human control' principle in AI accountability?",
                  "es": "Que es el principio de 'control humano significativo' en responsabilidad de IA?",
                  "de": "Was ist das Prinzip 'bedeutungsvolle menschliche Kontrolle' in der KI-Verantwortlichkeit?",
                  "nl": "Wat is het 'betekenisvolle menselijke controle' principe in AI verantwoordelijkheid?"
        },
        options: [
        {
                  "en": "Ensuring humans can effectively understand, oversee, and intervene in AI decision-making",
                  "es": "Asegurar que humanos puedan efectivamente entender, supervisar e intervenir en toma de decisiones de IA",
                  "de": "Sicherstellen dass Menschen KI-Entscheidungsfindung effektiv verstehen, ueberwachen und eingreifen koennen",
                  "nl": "Waarborgen dat mensen effectief kunnen begrijpen, toezicht houden en ingrijpen in AI besluitvorming"
        },
        {
                  "en": "Only technical access to AI systems",
                  "es": "Solo acceso tecnico a sistemas de IA",
                  "de": "Nur technischer Zugang zu KI-Systemen",
                  "nl": "Alleen technische toegang tot AI systemen"
        },
        {
                  "en": "Humans pressing buttons to start AI",
                  "es": "Humanos presionando botones para iniciar IA",
                  "de": "Menschen druecken Knoepfe um KI zu starten",
                  "nl": "Mensen die knoppen indrukken om AI te starten"
        },
        {
                  "en": "Humans designing attractive AI interfaces",
                  "es": "Humanos disenando interfaces atractivas de IA",
                  "de": "Menschen entwerfen attraktive KI-Schnittstellen",
                  "nl": "Mensen die aantrekkelijke AI interfaces ontwerpen"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Meaningful human control requires that humans have sufficient understanding, oversight capacity, and ability to intervene in AI systems to make informed decisions about their use and bear genuine responsibility for outcomes, going beyond nominal or superficial involvement.",
                  "es": "El control humano significativo requiere que humanos tengan suficiente comprension, capacidad de supervision y habilidad para intervenir en sistemas de IA para tomar decisiones informadas sobre su uso y asumir responsabilidad genuina por resultados, yendo mas alla de participacion nominal o superficial.",
                  "de": "Bedeutungsvolle menschliche Kontrolle erfordert dass Menschen ausreichendes Verstaendnis, Ueberwachungskapazitaet und Faehigkeit zum Eingriff in KI-Systeme haben um informierte Entscheidungen ueber deren Nutzung zu treffen und echte Verantwortung fuer Ergebnisse zu tragen, ueber nominale oder oberflaechliche Beteiligung hinausgehend.",
                  "nl": "Betekenisvolle menselijke controle vereist dat mensen voldoende begrip, toezichtcapaciteit en vermogen hebben om in te grijpen in AI systemen om geïnformeerde beslissingen te nemen over hun gebruik en oprechte verantwoordelijkheid te dragen voor uitkomsten, verder gaand dan nominale of oppervlakkige betrokkenheid."
        }
      },
      {
        question: {
                  "en": "What is 'accountability washing' in AI?",
                  "es": "Que es 'lavado de responsabilidad' en IA?",
                  "de": "Was ist 'Verantwortlichkeitswashing' in der KI?",
                  "nl": "Wat is 'verantwoordelijkheids washing' in AI?"
        },
        options: [
        {
                  "en": "Updating accountability documentation",
                  "es": "Actualizar documentacion de responsabilidad",
                  "de": "Verantwortlichkeitsdokumentation aktualisieren",
                  "nl": "Verantwoordelijkheidsdocumentatie updaten"
        },
        {
                  "en": "Cleaning AI hardware regularly",
                  "es": "Limpiar hardware de IA regularmente",
                  "de": "KI-Hardware regelmaessig reinigen",
                  "nl": "AI hardware regelmatig schoonmaken"
        },
        {
                  "en": "Creating appearance of accountability without substantive mechanisms or genuine responsibility",
                  "es": "Crear apariencia de responsabilidad sin mecanismos sustantivos o responsabilidad genuina",
                  "de": "Erscheinungsbild von Verantwortlichkeit schaffen ohne substantielle Mechanismen",
                  "nl": "Schijn van verantwoordelijkheid creëren zonder substantiele mechanismen of oprechte verantwoordelijkheid"
        },
        {
                  "en": "Removing old accountability reports",
                  "es": "Eliminar informes de responsabilidad antiguos",
                  "de": "Alte Verantwortlichkeitsberichte entfernen",
                  "nl": "Oude verantwoordelijkheidsrapporten verwijderen"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Accountability washing involves organizations creating superficial accountability structures, policies, or statements without implementing meaningful oversight, enforcement, or genuine mechanisms to address AI harms, essentially performing accountability theater.",
                  "es": "El lavado de responsabilidad involucra organizaciones creando estructuras de responsabilidad superficiales, politicas o declaraciones sin implementar supervision significativa, aplicacion o mecanismos genuinos para abordar danos de IA, esencialmente realizando teatro de responsabilidad.",
                  "de": "Verantwortlichkeitswashing beinhaltet dass Organisationen oberflaechliche Verantwortlichkeitsstrukturen, Richtlinien oder Erklaerungen schaffen ohne bedeutungsvolle Aufsicht, Durchsetzung oder echte Mechanismen zur Bewaeltigung von KI-Schaeden zu implementieren, im Wesentlichen Verantwortlichkeitstheater auffuehren.",
                  "nl": "Verantwoordelijkheids washing houdt in dat organisaties oppervlakkige verantwoordelijkheidsstructuren, beleid of verklaringen creëren zonder betekenisvolle toezicht, handhaving of oprechte mechanismen te implementeren om AI schade aan te pakken, in wezen verantwoordelijkheidstheater uitvoeren."
        }
      },
      {
        question: {
                  "en": "What is 'stakeholder accountability' in AI governance?",
                  "es": "Que es 'responsabilidad de partes interesadas' en gobernanza de IA?",
                  "de": "Was ist 'Stakeholder-Verantwortlichkeit' in der KI-Governance?",
                  "nl": "Wat is 'stakeholder verantwoordelijkheid' in AI governance?"
        },
        options: [
        {
                  "en": "Only shareholders owning AI companies",
                  "es": "Solo accionistas que poseen companias de IA",
                  "de": "Nur Aktionaere die KI-Unternehmen besitzen",
                  "nl": "Alleen aandeelhouders die AI bedrijven bezitten"
        },
        {
                  "en": "People who invest in AI development",
                  "es": "Personas que invierten en desarrollo de IA",
                  "de": "Menschen die in KI-Entwicklung investieren",
                  "nl": "Mensen die investeren in AI ontwikkeling"
        },
        {
                  "en": "Only government regulators",
                  "es": "Solo reguladores gubernamentales",
                  "de": "Nur staatliche Regulatoren",
                  "nl": "Alleen overheidsregelgevers"
        },
        {
                  "en": "Being answerable to all parties affected by or involved with AI systems",
                  "es": "Ser responsable ante todas las partes afectadas o involucradas con sistemas de IA",
                  "de": "Gegenueber allen von KI-Systemen betroffenen oder beteiligten Parteien rechenschaftspflichtig sein",
                  "nl": "Verantwoording verschuldigd zijn aan alle partijen die getroffen of betrokken zijn bij AI systemen"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Stakeholder accountability recognizes that AI developers and deployers must be answerable to diverse groups including affected individuals, communities, employees, customers, civil society, regulators, and the broader public who have legitimate interests in how AI systems operate.",
                  "es": "La responsabilidad de partes interesadas reconoce que desarrolladores e implementadores de IA deben ser responsables ante diversos grupos incluyendo individuos afectados, comunidades, empleados, clientes, sociedad civil, reguladores y el publico mas amplio que tienen intereses legitimos en como operan los sistemas de IA.",
                  "de": "Stakeholder-Verantwortlichkeit erkennt an dass KI-Entwickler und -Bereitsteller gegenueber verschiedenen Gruppen rechenschaftspflichtig sein muessen einschliesslich betroffener Individuen, Gemeinschaften, Mitarbeitern, Kunden, Zivilgesellschaft, Regulatoren und der breiteren Oeffentlichkeit die legitime Interessen daran haben wie KI-Systeme operieren.",
                  "nl": "Stakeholder verantwoordelijkheid erkent dat AI ontwikkelaars en implementeerders verantwoording verschuldigd moeten zijn aan diverse groepen inclusief getroffen individuen, gemeenschappen, werknemers, klanten, civiele samenleving, regelgevers en het bredere publiek die legitieme belangen hebben in hoe AI systemen opereren."
        }
      },
      {
        question: {
                  "en": "What is 'accountability infrastructure' in AI systems?",
                  "es": "Que es 'infraestructura de responsabilidad' en sistemas de IA?",
                  "de": "Was ist 'Verantwortlichkeitsinfrastruktur' in KI-Systemen?",
                  "nl": "Wat is 'verantwoordelijkheidsinfrastructuur' in AI systemen?"
        },
        options: [
        {
                  "en": "Only legal compliance departments",
                  "es": "Solo departamentos de cumplimiento legal",
                  "de": "Nur rechtliche Compliance-Abteilungen",
                  "nl": "Alleen juridische compliance afdelingen"
        },
        {
                  "en": "Network cables connecting AI systems",
                  "es": "Cables de red conectando sistemas de IA",
                  "de": "Netzwerkkabel die KI-Systeme verbinden",
                  "nl": "Netwerkkabels die AI systemen verbinden"
        },
        {
                  "en": "Physical buildings housing AI hardware",
                  "es": "Edificios fisicos que albergan hardware de IA",
                  "de": "Physische Gebaeude die KI-Hardware beherbergen",
                  "nl": "Fysieke gebouwen die AI hardware huisvesten"
        },
        {
                  "en": "Technical and organizational systems enabling oversight, documentation, and enforcement",
                  "es": "Sistemas tecnicos y organizacionales que permiten supervision, documentacion y aplicacion",
                  "de": "Technische und organisatorische Systeme die Aufsicht, Dokumentation und Durchsetzung ermoeglichen",
                  "nl": "Technische en organisatorische systemen die toezicht, documentatie en handhaving mogelijk maken"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Accountability infrastructure encompasses the technical tools (audit logs, monitoring systems, explainability features) and organizational structures (governance boards, ethics committees, reporting mechanisms) that enable effective accountability for AI systems throughout their lifecycle.",
                  "es": "La infraestructura de responsabilidad abarca las herramientas tecnicas (registros de auditoria, sistemas de monitoreo, caracteristicas de explicabilidad) y estructuras organizacionales (juntas de gobernanza, comites de etica, mecanismos de reporte) que permiten responsabilidad efectiva para sistemas de IA a lo largo de su ciclo de vida.",
                  "de": "Verantwortlichkeitsinfrastruktur umfasst die technischen Werkzeuge (Audit-Protokolle, Ueberwachungssysteme, Erklaerbarkeitsfunktionen) und organisatorische Strukturen (Governance-Boards, Ethikkomitees, Meldemechanismen) die effektive Verantwortlichkeit fuer KI-Systeme waehrend ihres gesamten Lebenszyklus ermoeglichen.",
                  "nl": "Verantwoordelijkheidsinfrastructuur omvat de technische tools (audit logs, monitoringsystemen, uitlegbaarheidskenmerken) en organisatorische structuren (governance boards, ethiek commissies, rapportage mechanismen) die effectieve verantwoordelijkheid voor AI systemen gedurende hun levenscyclus mogelijk maken."
        }
      },
      {
        question: {
                  "en": "What is 'algorithmic due process' in AI decision-making?",
                  "es": "Que es 'debido proceso algoritmico' en toma de decisiones de IA?",
                  "de": "Was ist 'algorithmisches ordentliches Verfahren' in der KI-Entscheidungsfindung?",
                  "nl": "Wat is 'algoritmisch behoorlijk proces' in AI besluitvorming?"
        },
        options: [
        {
                  "en": "Processing AI algorithms efficiently",
                  "es": "Procesar algoritmos de IA eficientemente",
                  "de": "KI-Algorithmen effizient verarbeiten",
                  "nl": "AI algoritmes efficiënt verwerken"
        },
        {
                  "en": "Fair procedures including notice, explanation, and opportunity to challenge AI decisions",
                  "es": "Procedimientos justos incluyendo notificacion, explicacion y oportunidad de desafiar decisiones de IA",
                  "de": "Faire Verfahren einschliesslich Benachrichtigung, Erklaerung und Moeglichkeit KI-Entscheidungen anzufechten",
                  "nl": "Eerlijke procedures inclusief kennisgeving, uitleg en mogelijkheid om AI beslissingen aan te vechten"
        },
        {
                  "en": "Following software development best practices",
                  "es": "Seguir mejores practicas de desarrollo de software",
                  "de": "Software-Entwicklungsbest-Practices befolgen",
                  "nl": "Software ontwikkeling best practices volgen"
        },
        {
                  "en": "Only legal requirements for AI development",
                  "es": "Solo requisitos legales para desarrollo de IA",
                  "de": "Nur rechtliche Anforderungen fuer KI-Entwicklung",
                  "nl": "Alleen juridische vereisten voor AI ontwikkeling"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Algorithmic due process ensures that individuals affected by automated decisions receive fair treatment including adequate notice that AI is being used, meaningful explanation of how decisions are made, and effective mechanisms to contest or appeal adverse outcomes.",
                  "es": "El debido proceso algoritmico asegura que individuos afectados por decisiones automatizadas reciban trato justo incluyendo notificacion adecuada de que se usa IA, explicacion significativa de como se toman decisiones y mecanismos efectivos para contestar o apelar resultados adversos.",
                  "de": "Algorithmisches ordentliches Verfahren stellt sicher dass von automatisierten Entscheidungen betroffene Individuen faire Behandlung erhalten einschliesslich angemessener Benachrichtigung dass KI verwendet wird, bedeutungsvolle Erklaerung wie Entscheidungen getroffen werden und effektive Mechanismen um nachteilige Ergebnisse anzufechten oder anzufechten.",
                  "nl": "Algoritmisch behoorlijk proces waarborgt dat individuen getroffen door geautomatiseerde beslissingen eerlijke behandeling ontvangen inclusief adequate kennisgeving dat AI gebruikt wordt, betekenisvolle uitleg van hoe beslissingen genomen worden en effectieve mechanismen om nadelige uitkomsten te betwisten of aan te vechten."
        }
      },
      {
        question: {
                  "en": "What is 'continuous accountability' in AI lifecycle management?",
                  "es": "Que es 'responsabilidad continua' en gestion del ciclo de vida de IA?",
                  "de": "Was ist 'kontinuierliche Verantwortlichkeit' im KI-Lebenszyklus-Management?",
                  "nl": "Wat is 'continue verantwoordelijkheid' in AI levenscyclus management?"
        },
        options: [
        {
                  "en": "Only accountability during initial development",
                  "es": "Solo responsabilidad durante desarrollo inicial",
                  "de": "Nur Verantwortlichkeit waehrend initialer Entwicklung",
                  "nl": "Alleen verantwoordelijkheid tijdens initiele ontwikkeling"
        },
        {
                  "en": "Constantly updating AI documentation",
                  "es": "Actualizar constantemente documentacion de IA",
                  "de": "KI-Dokumentation staendig aktualisieren",
                  "nl": "Voortdurend AI documentatie updaten"
        },
        {
                  "en": "Running AI systems 24/7 without breaks",
                  "es": "Ejecutar sistemas de IA 24/7 sin pausas",
                  "de": "KI-Systeme 24/7 ohne Pausen betreiben",
                  "nl": "AI systemen 24/7 zonder pauzes draaien"
        },
        {
                  "en": "Ongoing monitoring, assessment, and responsibility throughout AI system's entire operational life",
                  "es": "Monitoreo, evaluacion y responsabilidad continua durante toda la vida operacional del sistema de IA",
                  "de": "Laufende Ueberwachung, Bewertung und Verantwortung waehrend des gesamten Betriebslebens des KI-Systems",
                  "nl": "Doorlopende monitoring, beoordeling en verantwoordelijkheid gedurende hele operationele leven van AI systeem"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Continuous accountability recognizes that responsibility for AI systems doesn't end at deployment but requires ongoing monitoring, regular assessment, adaptation to changing contexts, and sustained oversight to ensure systems remain safe, fair, and beneficial over time.",
                  "es": "La responsabilidad continua reconoce que la responsabilidad por sistemas de IA no termina en el despliegue sino que requiere monitoreo continuo, evaluacion regular, adaptacion a contextos cambiantes y supervision sostenida para asegurar que los sistemas permanezcan seguros, justos y beneficiosos a lo largo del tiempo.",
                  "de": "Kontinuierliche Verantwortlichkeit erkennt an dass Verantwortung fuer KI-Systeme nicht bei der Bereitstellung endet sondern laufende Ueberwachung, regelmaessige Bewertung, Anpassung an veraenderte Kontexte und nachhaltige Aufsicht erfordert um sicherzustellen dass Systeme im Laufe der Zeit sicher, fair und vorteilhaft bleiben.",
                  "nl": "Continue verantwoordelijkheid erkent dat verantwoordelijkheid voor AI systemen niet eindigt bij implementatie maar doorlopende monitoring, regelmatige beoordeling, aanpassing aan veranderende contexten en aanhoudend toezicht vereist om ervoor te zorgen dat systemen veilig, eerlijk en voordelig blijven in de loop van de tijd."
        }
      },
      {
        question: {
                  "en": "What is 'conditional accountability' in AI deployment?",
                  "es": "Que es 'responsabilidad condicional' en despliegue de IA?",
                  "de": "Was ist 'bedingte Verantwortlichkeit' in der KI-Bereitstellung?",
                  "nl": "Wat is 'voorwaardelijke verantwoordelijkheid' in AI implementatie?"
        },
        options: [
        {
                  "en": "Accountability levels varying based on context, risk level, and application domain",
                  "es": "Niveles de responsabilidad variando segun contexto, nivel de riesgo y dominio de aplicacion",
                  "de": "Verantwortlichkeitsebenen variieren basierend auf Kontext, Risikoniveau und Anwendungsbereich",
                  "nl": "Verantwoordelijkheidsniveaus variëren op basis van context, risiconiveau en toepassingsdomein"
        },
        {
                  "en": "Only being accountable under certain legal conditions",
                  "es": "Solo ser responsable bajo ciertas condiciones legales",
                  "de": "Nur unter bestimmten rechtlichen Bedingungen verantwortlich sein",
                  "nl": "Alleen verantwoordelijk zijn onder bepaalde juridische voorwaarden"
        },
        {
                  "en": "Temporary accountability during testing only",
                  "es": "Responsabilidad temporal solo durante pruebas",
                  "de": "Voruebergehende Verantwortlichkeit nur waehrend Tests",
                  "nl": "Tijdelijke verantwoordelijkheid alleen tijdens testen"
        },
        {
                  "en": "Accountability that expires after time",
                  "es": "Responsabilidad que expira despues de tiempo",
                  "de": "Verantwortlichkeit die nach Zeit ablaeuft",
                  "nl": "Verantwoordelijkheid die na tijd verloopt"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Conditional accountability recognizes that appropriate accountability mechanisms should be proportionate to the risks and stakes involved - high-risk AI applications (healthcare, criminal justice) require more stringent accountability than low-risk applications (content recommendations).",
                  "es": "La responsabilidad condicional reconoce que los mecanismos apropiados de responsabilidad deberian ser proporcionales a los riesgos y apuestas involucradas - aplicaciones de IA de alto riesgo (salud, justicia penal) requieren responsabilidad mas estricta que aplicaciones de bajo riesgo (recomendaciones de contenido).",
                  "de": "Bedingte Verantwortlichkeit erkennt an dass angemessene Verantwortlichkeitsmechanismen proportional zu den involvierten Risiken und Einsaetzen sein sollten - Hochrisiko-KI-Anwendungen (Gesundheitswesen, Strafjustiz) erfordern strengere Verantwortlichkeit als Niedrigrisiko-Anwendungen (Inhaltsempfehlungen).",
                  "nl": "Voorwaardelijke verantwoordelijkheid erkent dat passende verantwoordelijkheidsmechanismen evenredig moeten zijn aan de betrokken risico's en belangen - hoog-risico AI toepassingen (gezondheidszorg, strafrechtspraak) vereisen strengere verantwoordelijkheid dan laag-risico toepassingen (content aanbevelingen)."
        }
      }
    ]
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level5;
  }
})();