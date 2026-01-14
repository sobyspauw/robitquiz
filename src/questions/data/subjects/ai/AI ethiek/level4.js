// AI ethiek Quiz - Level 4
(function() {
  const level4 = {
    name: {
          "en": "AI Ethics Level 4",
          "es": "Etica de IA Nivel 4",
          "de": "KI-Ethik Stufe 4",
          "nl": "AI Ethiek Level 4"
    },
    questions: [
      {
        question: {
                  "en": "What is 'consent fatigue' in the context of AI data collection?",
                  "es": "Que es la 'fatiga del consentimiento' en el contexto de recoleccion de datos de IA?",
                  "de": "Was ist 'Einwilligungsmuedigkeit' im Kontext der KI-Datensammlung?",
                  "nl": "Wat is 'toestemmingsmoeheid' in de context van AI data verzameling?"
        },
        options: [
        {
                  "en": "When people get tired of AI",
                  "es": "Cuando las personas se cansan de la IA",
                  "de": "Wenn Menschen der KI muede werden",
                  "nl": "Wanneer mensen moe worden van AI"
        },
        {
                  "en": "When consent expires",
                  "es": "Cuando el consentimiento expira",
                  "de": "Wenn die Einwilligung ablaeuft",
                  "nl": "Wanneer toestemming verloopt"
        },
        {
                  "en": "When people become overwhelmed by constant consent requests and agree without reading",
                  "es": "Cuando las personas se abruman por constantes solicitudes de consentimiento y aceptan sin leer",
                  "de": "Wenn Menschen von staendigen Einwilligungsanfragen ueberwaeltigt werden und zustimmen ohne zu lesen",
                  "nl": "Wanneer mensen overweldigd raken door constante toestemmingsverzoeken en instemmen zonder te lezen"
        },
        {
                  "en": "When consent forms are too long",
                  "es": "Cuando los formularios de consentimiento son demasiado largos",
                  "de": "Wenn Einwilligungsformulare zu lang sind",
                  "nl": "Wanneer toestemmingsformulieren te lang zijn"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Consent fatigue occurs when users are bombarded with so many permission requests that they stop carefully considering what they're agreeing to, undermining the principle of informed consent.",
                  "es": "La fatiga del consentimiento ocurre cuando los usuarios son bombardeados con tantas solicitudes de permiso que dejan de considerar cuidadosamente a que estan aceptando, socavando el principio del consentimiento informado.",
                  "de": "Einwilligungsmuedigkeit tritt auf wenn Nutzer mit so vielen Erlaubnisanfragen bombardiert werden dass sie aufhoeren sorgfaeltig zu bedenken wozu sie zustimmen, was das Prinzip der informierten Einwilligung untergraebt.",
                  "nl": "Toestemmingsmoeheid treedt op wanneer gebruikers gebombardeerd worden met zoveel toestemmingsverzoeken dat ze stoppen met zorgvuldig overwegen waar ze mee instemmen, wat het principe van geïnformeerde toestemming ondermijnt."
        }
      },
      {
        question: {
                  "en": "What is 'explainable AI' (XAI) designed to address?",
                  "es": "Que esta disenada para abordar la 'IA explicable' (XAI)?",
                  "de": "Was soll 'erklaerbare KI' (XAI) adressieren?",
                  "nl": "Wat is 'uitlegbare AI' (XAI) ontworpen om aan te pakken?"
        },
        options: [
        {
                  "en": "Making AI decisions understandable to humans",
                  "es": "Hacer las decisiones de IA comprensibles para humanos",
                  "de": "KI-Entscheidungen fuer Menschen verstaendlich machen",
                  "nl": "AI beslissingen begrijpelijk maken voor mensen"
        },
        {
                  "en": "Creating AI user manuals",
                  "es": "Crear manuales de usuario de IA",
                  "de": "KI-Benutzerhandbuecher erstellen",
                  "nl": "AI gebruikershandleidingen maken"
        },
        {
                  "en": "Making AI explain jokes",
                  "es": "Hacer que la IA explique chistes",
                  "de": "KI Witze erklaeren lassen",
                  "nl": "AI grappen laten uitleggen"
        },
        {
                  "en": "Teaching AI to speak multiple languages",
                  "es": "Ensenar a la IA a hablar multiples idiomas",
                  "de": "KI mehrere Sprachen beibringen",
                  "nl": "AI meerdere talen leren spreken"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Explainable AI aims to make AI decision-making processes transparent and interpretable, allowing humans to understand how and why specific decisions were made, which is crucial for trust and accountability.",
                  "es": "La IA explicable busca hacer los procesos de toma de decisiones de IA transparentes e interpretables, permitiendo a los humanos entender como y por que se tomaron decisiones especificas, lo cual es crucial para la confianza y responsabilidad.",
                  "de": "Erklaerbare KI zielt darauf ab KI-Entscheidungsprozesse transparent und interpretierbar zu machen, wodurch Menschen verstehen koennen wie und warum spezifische Entscheidungen getroffen wurden, was fuer Vertrauen und Verantwortlichkeit entscheidend ist.",
                  "nl": "Uitlegbare AI heeft als doel AI besluitvormingsprocessen transparant en interpreteerbaar te maken, waardoor mensen kunnen begrijpen hoe en waarom specifieke beslissingen genomen werden, wat cruciaal is voor vertrouwen en verantwoordelijkheid."
        }
      },
      {
        question: {
                  "en": "What is the 'right to explanation' under GDPR for AI decisions?",
                  "es": "Que es el 'derecho a explicacion' bajo GDPR para decisiones de IA?",
                  "de": "Was ist das 'Recht auf Erklaerung' unter DSGVO fuer KI-Entscheidungen?",
                  "nl": "Wat is het 'recht op uitleg' onder GDPR voor AI beslissingen?"
        },
        options: [
        {
                  "en": "The right to get AI training",
                  "es": "El derecho a recibir entrenamiento de IA",
                  "de": "Das Recht auf KI-Training",
                  "nl": "Het recht om AI training te krijgen"
        },
        {
                  "en": "The right to explain AI to others",
                  "es": "El derecho a explicar IA a otros",
                  "de": "Das Recht KI anderen zu erklaeren",
                  "nl": "Het recht om AI aan anderen uit te leggen"
        },
        {
                  "en": "The right to refuse all AI",
                  "es": "El derecho a rechazar toda IA",
                  "de": "Das Recht alle KI abzulehnen",
                  "nl": "Het recht om alle AI te weigeren"
        },
        {
                  "en": "The right to know why an AI made a specific decision about you",
                  "es": "El derecho a saber por que una IA tomo una decision especifica sobre ti",
                  "de": "Das Recht zu wissen warum eine KI eine spezifische Entscheidung ueber dich getroffen hat",
                  "nl": "Het recht om te weten waarom een AI een specifieke beslissing over jou nam"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Under GDPR, individuals have the right to receive meaningful information about the logic involved in automated decision-making that significantly affects them, ensuring transparency and accountability.",
                  "es": "Bajo GDPR, los individuos tienen el derecho a recibir informacion significativa sobre la logica involucrada en la toma de decisiones automatizada que les afecta significativamente, asegurando transparencia y responsabilidad.",
                  "de": "Unter der DSGVO haben Individuen das Recht aussagekraeftige Informationen ueber die Logik zu erhalten die bei automatisierten Entscheidungen involviert ist die sie erheblich betreffen, was Transparenz und Verantwortlichkeit sicherstellt.",
                  "nl": "Onder GDPR hebben individuen het recht om betekenisvolle informatie te ontvangen over de logica die betrokken is bij geautomatiseerde besluitvorming die hen significant beïnvloedt, wat transparantie en verantwoordelijkheid waarborgt."
        }
      },
      {
        question: {
                  "en": "What does 'AI governance framework' typically include?",
                  "es": "Que incluye tipicamente un 'marco de gobernanza de IA'?",
                  "de": "Was beinhaltet typischerweise ein 'KI-Governance-Rahmenwerk'?",
                  "nl": "Wat omvat een 'AI governance framework' typisch?"
        },
        options: [
        {
                  "en": "Government control of all AI",
                  "es": "Control gubernamental de toda IA",
                  "de": "Staatliche Kontrolle aller KI",
                  "nl": "Overheidscontrole over alle AI"
        },
        {
                  "en": "Marketing strategies for AI",
                  "es": "Estrategias de marketing para IA",
                  "de": "Marketing-Strategien fuer KI",
                  "nl": "Marketing strategieën voor AI"
        },
        {
                  "en": "Only technical specifications",
                  "es": "Solo especificaciones tecnicas",
                  "de": "Nur technische Spezifikationen",
                  "nl": "Alleen technische specificaties"
        },
        {
                  "en": "Policies, procedures, and oversight structures for responsible AI use",
                  "es": "Politicas, procedimientos y estructuras de supervision para uso responsable de IA",
                  "de": "Richtlinien, Verfahren und Aufsichtsstrukturen fuer verantwortungsvolle KI-Nutzung",
                  "nl": "Beleid, procedures en toezichtstructuren voor verantwoord AI gebruik"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "AI governance frameworks establish comprehensive policies, procedures, accountability structures, and oversight mechanisms to ensure AI systems are developed and deployed responsibly, ethically, and in compliance with regulations.",
                  "es": "Los marcos de gobernanza de IA establecen politicas integrales, procedimientos, estructuras de responsabilidad y mecanismos de supervision para asegurar que los sistemas de IA se desarrollen y desplieguen de manera responsable, etica y en cumplimiento con regulaciones.",
                  "de": "KI-Governance-Rahmenwerke etablieren umfassende Richtlinien, Verfahren, Verantwortlichkeitsstrukturen und Aufsichtsmechanismen um sicherzustellen dass KI-Systeme verantwortungsvoll, ethisch und in Uebereinstimmung mit Vorschriften entwickelt und eingesetzt werden.",
                  "nl": "AI governance frameworks stellen uitgebreide beleidsregels, procedures, verantwoordelijkheidsstructuren en toezichtmechanismen vast om te zorgen dat AI systemen verantwoordelijk, ethisch en in overeenstemming met regelgeving ontwikkeld en ingezet worden."
        }
      },
      {
        question: {
                  "en": "What is 'adversarial AI' in the context of AI ethics?",
                  "es": "Que es 'IA adversaria' en el contexto de etica de IA?",
                  "de": "Was ist 'adversariale KI' im Kontext der KI-Ethik?",
                  "nl": "Wat is 'adversarial AI' in de context van AI ethiek?"
        },
        options: [
        {
                  "en": "Techniques used to trick AI systems into making wrong decisions",
                  "es": "Tecnicas usadas para enganar sistemas de IA para tomar decisiones incorrectas",
                  "de": "Techniken die verwendet werden um KI-Systeme zu falschen Entscheidungen zu verleiten",
                  "nl": "Technieken gebruikt om AI systemen te misleiden tot verkeerde beslissingen"
        },
        {
                  "en": "AI systems that compete in games",
                  "es": "Sistemas de IA que compiten en juegos",
                  "de": "KI-Systeme die in Spielen konkurrieren",
                  "nl": "AI systemen die concurreren in spellen"
        },
        {
                  "en": "Military AI applications",
                  "es": "Aplicaciones militares de IA",
                  "de": "Militaerische KI-Anwendungen",
                  "nl": "Militaire AI toepassingen"
        },
        {
                  "en": "AI that argues with users",
                  "es": "IA que discute con usuarios",
                  "de": "KI die mit Nutzern streitet",
                  "nl": "AI die ruzie maakt met gebruikers"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Adversarial AI involves deliberately crafted inputs designed to fool AI systems, exposing vulnerabilities and raising ethical concerns about AI security and reliability in critical applications.",
                  "es": "La IA adversaria involucra entradas deliberadamente creadas disenadas para enganar sistemas de IA, exponiendo vulnerabilidades y generando preocupaciones eticas sobre la seguridad y confiabilidad de IA en aplicaciones criticas.",
                  "de": "Adversariale KI beinhaltet absichtlich erstellte Eingaben die darauf abzielen KI-Systeme zu taeuschen, wodurch Schwachstellen aufgedeckt werden und ethische Bedenken ueber KI-Sicherheit und Zuverlaessigkeit in kritischen Anwendungen entstehen.",
                  "nl": "Adversarial AI betreft opzettelijk gecreëerde inputs ontworpen om AI systemen te misleiden, wat kwetsbaarheden blootlegt en ethische zorgen oproept over AI veiligheid en betrouwbaarheid in kritieke toepassingen."
        }
      },
      {
        question: {
                  "en": "What is 'model interpretability' in machine learning?",
                  "es": "Que es 'interpretabilidad del modelo' en aprendizaje automatico?",
                  "de": "Was ist 'Modellinterpretierbarkeit' im maschinellen Lernen?",
                  "nl": "Wat is 'model interpreteerbaarheid' in machine learning?"
        },
        options: [
        {
                  "en": "The model's ability to work with different software",
                  "es": "La capacidad del modelo de trabajar con diferentes software",
                  "de": "Die Faehigkeit des Modells mit verschiedener Software zu arbeiten",
                  "nl": "Het vermogen van het model om met verschillende software te werken"
        },
        {
                  "en": "How well a model performs on test data",
                  "es": "Que tan bien funciona un modelo en datos de prueba",
                  "de": "Wie gut ein Modell bei Testdaten abschneidet",
                  "nl": "Hoe goed een model presteert op testdata"
        },
        {
                  "en": "How fast a model can translate languages",
                  "es": "Que tan rapido un modelo puede traducir idiomas",
                  "de": "Wie schnell ein Modell Sprachen uebersetzen kann",
                  "nl": "Hoe snel een model talen kan vertalen"
        },
        {
                  "en": "The degree to which humans can understand how a model makes predictions",
                  "es": "El grado en que humanos pueden entender como un modelo hace predicciones",
                  "de": "Der Grad zu dem Menschen verstehen koennen wie ein Modell Vorhersagen trifft",
                  "nl": "De mate waarin mensen kunnen begrijpen hoe een model voorspellingen maakt"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Model interpretability refers to how well humans can understand the reasoning behind a model's predictions, which is crucial for building trust and ensuring accountability in AI systems.",
                  "es": "La interpretabilidad del modelo se refiere a que tan bien los humanos pueden entender el razonamiento detras de las predicciones de un modelo, lo cual es crucial para construir confianza y asegurar responsabilidad en sistemas de IA.",
                  "de": "Modellinterpretierbarkeit bezieht sich darauf wie gut Menschen die Begruendung hinter den Vorhersagen eines Modells verstehen koennen, was entscheidend ist um Vertrauen aufzubauen und Verantwortlichkeit in KI-Systemen sicherzustellen.",
                  "nl": "Model interpreteerbaarheid verwijst naar hoe goed mensen de redenering achter voorspellingen van een model kunnen begrijpen, wat cruciaal is voor het opbouwen van vertrouwen en het waarborgen van verantwoordelijkheid in AI systemen."
        }
      },
      {
        question: {
                  "en": "What are 'attention mechanisms' used for in explainable AI?",
                  "es": "Para que se usan 'mecanismos de atencion' en IA explicable?",
                  "de": "Wofuer werden 'Aufmerksamkeitsmechanismen' in erklaerbarer KI verwendet?",
                  "nl": "Waarvoor worden 'attention mechanismen' gebruikt in uitlegbare AI?"
        },
        options: [
        {
                  "en": "To make AI systems pay attention to users",
                  "es": "Para hacer que sistemas de IA presten atencion a usuarios",
                  "de": "Um KI-Systeme dazu zu bringen Nutzern Aufmerksamkeit zu schenken",
                  "nl": "Om AI systemen aandacht te laten besteden aan gebruikers"
        },
        {
                  "en": "To prevent AI from getting distracted",
                  "es": "Para prevenir que la IA se distraiga",
                  "de": "Um zu verhindern dass KI abgelenkt wird",
                  "nl": "Om te voorkomen dat AI afgeleid wordt"
        },
        {
                  "en": "To improve AI memory capacity",
                  "es": "Para mejorar capacidad de memoria de IA",
                  "de": "Um KI-Speicherkapazitaet zu verbessern",
                  "nl": "Om AI geheugencapaciteit te verbeteren"
        },
        {
                  "en": "To show which parts of input data the model focuses on when making decisions",
                  "es": "Para mostrar en que partes de datos de entrada se enfoca el modelo al tomar decisiones",
                  "de": "Um zu zeigen auf welche Teile der Eingabedaten sich das Modell bei Entscheidungen konzentriert",
                  "nl": "Om te tonen op welke delen van inputdata het model zich richt bij het nemen van beslissingen"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Attention mechanisms in AI help visualize which parts of the input data the model considers most important for its predictions, providing transparency into the decision-making process.",
                  "es": "Los mecanismos de atencion en IA ayudan a visualizar que partes de los datos de entrada el modelo considera mas importantes para sus predicciones, proporcionando transparencia en el proceso de toma de decisiones.",
                  "de": "Aufmerksamkeitsmechanismen in KI helfen zu visualisieren welche Teile der Eingabedaten das Modell fuer seine Vorhersagen am wichtigsten haelt, wodurch Transparenz in den Entscheidungsprozess gebracht wird.",
                  "nl": "Attention mechanismen in AI helpen visualiseren welke delen van de inputdata het model het belangrijkst acht voor zijn voorspellingen, wat transparantie biedt in het besluitvormingsproces."
        }
      },
      {
        question: {
                  "en": "What is 'algo transparency' in AI systems?",
                  "es": "Que es 'transparencia algoritmica' en sistemas de IA?",
                  "de": "Was ist 'algorithmische Transparenz' in KI-Systemen?",
                  "nl": "Wat is 'algoritmische transparantie' in AI systemen?"
        },
        options: [
        {
                  "en": "Showing all data sources to everyone",
                  "es": "Mostrar todas las fuentes de datos a todos",
                  "de": "Alle Datenquellen allen zeigen",
                  "nl": "Alle databronnen aan iedereen tonen"
        },
        {
                  "en": "Making AI code publicly available",
                  "es": "Hacer codigo de IA disponible publicamente",
                  "de": "KI-Code oeffentlich verfuegbar machen",
                  "nl": "AI code publiek beschikbaar maken"
        },
        {
                  "en": "Openness about how AI algorithms work and make decisions",
                  "es": "Apertura sobre como funcionan y toman decisiones los algoritmos de IA",
                  "de": "Offenheit darueber wie KI-Algorithmen funktionieren und Entscheidungen treffen",
                  "nl": "Openheid over hoe AI algoritmes werken en beslissingen nemen"
        },
        {
                  "en": "Using clear glass screens for AI interfaces",
                  "es": "Usar pantallas de vidrio transparente para interfaces de IA",
                  "de": "Durchsichtige Glasbildschirme fuer KI-Schnittstellen verwenden",
                  "nl": "Gebruik van doorzichtige glazen schermen voor AI interfaces"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Algorithmic transparency involves providing clear information about how AI systems operate, what data they use, and how they reach decisions, enabling stakeholders to understand and evaluate AI behavior.",
                  "es": "La transparencia algoritmica involucra proporcionar informacion clara sobre como operan los sistemas de IA, que datos usan y como llegan a decisiones, permitiendo a interesados entender y evaluar el comportamiento de IA.",
                  "de": "Algorithmische Transparenz beinhaltet klare Informationen darueber zu liefern wie KI-Systeme operieren, welche Daten sie verwenden und wie sie zu Entscheidungen gelangen, wodurch Stakeholder KI-Verhalten verstehen und bewerten koennen.",
                  "nl": "Algoritmische transparantie houdt in dat duidelijke informatie verstrekt wordt over hoe AI systemen werken, welke data ze gebruiken en hoe ze tot beslissingen komen, waardoor belanghebbenden AI gedrag kunnen begrijpen en evalueren."
        }
      },
      {
        question: {
                  "en": "What is a 'black box' problem in machine learning models?",
                  "es": "Que es el problema de 'caja negra' en modelos de aprendizaje automatico?",
                  "de": "Was ist das 'Black Box'-Problem in maschinellen Lernmodellen?",
                  "nl": "Wat is het 'black box' probleem in machine learning modellen?"
        },
        options: [
        {
                  "en": "When AI systems are stored in black containers",
                  "es": "Cuando sistemas de IA se almacenan en contenedores negros",
                  "de": "Wenn KI-Systeme in schwarzen Behaeltern gespeichert werden",
                  "nl": "Wanneer AI systemen in zwarte containers worden opgeslagen"
        },
        {
                  "en": "When AI systems fail to process dark images",
                  "es": "Cuando sistemas de IA fallan en procesar imagenes oscuras",
                  "de": "Wenn KI-Systeme dunkle Bilder nicht verarbeiten koennen",
                  "nl": "Wanneer AI systemen falen bij het verwerken van donkere afbeeldingen"
        },
        {
                  "en": "When AI systems crash and show black screens",
                  "es": "Cuando sistemas de IA se bloquean y muestran pantallas negras",
                  "de": "Wenn KI-Systeme abstuerzen und schwarze Bildschirme zeigen",
                  "nl": "Wanneer AI systemen crashen en zwarte schermen tonen"
        },
        {
                  "en": "When AI decision-making processes are opaque and cannot be easily understood or explained",
                  "es": "Cuando procesos de decision IA son opacos y no pueden entenderse o explicarse facilmente",
                  "de": "Wenn KI-Entscheidungsprozesse undurchsichtig sind und nicht leicht verstanden werden koennen",
                  "nl": "Wanneer AI besluitvormingsprocessen ondoorzichtig zijn en niet gemakkelijk begrepen kunnen worden"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "The black box problem refers to AI systems whose internal decision-making processes are not transparent or interpretable, making it difficult to understand how they arrive at specific conclusions or predictions.",
                  "es": "El problema de caja negra se refiere a sistemas de IA cuyos procesos internos de toma de decisiones no son transparentes o interpretables, haciendo dificil entender como llegan a conclusiones o predicciones especificas.",
                  "de": "Das Black-Box-Problem bezieht sich auf KI-Systeme deren interne Entscheidungsprozesse nicht transparent oder interpretierbar sind, was es schwierig macht zu verstehen wie sie zu spezifischen Schlussfolgerungen oder Vorhersagen gelangen.",
                  "nl": "Het black box probleem verwijst naar AI systemen waarvan de interne besluitvormingsprocessen niet transparant of interpreteerbaar zijn, waardoor het moeilijk is te begrijpen hoe ze tot specifieke conclusies of voorspellingen komen."
        }
      },
      {
        question: {
                  "en": "What are LIME and SHAP in explainable AI?",
                  "es": "Que son LIME y SHAP en IA explicable?",
                  "de": "Was sind LIME und SHAP in erklaerbarer KI?",
                  "nl": "Wat zijn LIME en SHAP in uitlegbare AI?"
        },
        options: [
        {
                  "en": "Programming languages for AI development",
                  "es": "Lenguajes de programacion para desarrollo de IA",
                  "de": "Programmiersprachen fuer KI-Entwicklung",
                  "nl": "Programmeertalen voor AI ontwikkeling"
        },
        {
                  "en": "Methods for explaining individual AI model predictions by showing feature importance",
                  "es": "Metodos para explicar predicciones de modelos IA mostrando importancia de caracteristicas",
                  "de": "Methoden zur Erklaerung individueller KI-Modellvorhersagen durch Merkmalswichtigkeit",
                  "nl": "Methoden voor uitleggen van individuele AI voorspellingen door feature belangrijkheid te tonen"
        },
        {
                  "en": "Hardware components for AI systems",
                  "es": "Componentes de hardware para sistemas de IA",
                  "de": "Hardware-Komponenten fuer KI-Systeme",
                  "nl": "Hardware componenten voor AI systemen"
        },
        {
                  "en": "Types of citrus fruits used in AI training",
                  "es": "Tipos de frutas citricas usadas en entrenamiento de IA",
                  "de": "Arten von Zitrusfruechten die im KI-Training verwendet werden",
                  "nl": "Soorten citrusvruchten gebruikt in AI training"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "LIME (Local Interpretable Model-agnostic Explanations) and SHAP (SHapley Additive exPlanations) are popular techniques for explaining machine learning predictions by showing which features contributed most to specific decisions.",
                  "es": "LIME (Explicaciones Locales Interpretables Agnosticas al Modelo) y SHAP (Explicaciones Aditivas de Shapley) son tecnicas populares para explicar predicciones de aprendizaje automatico mostrando que caracteristicas contribuyeron mas a decisiones especificas.",
                  "de": "LIME (Local Interpretable Model-agnostic Explanations) und SHAP (SHapley Additive exPlanations) sind beliebte Techniken zur Erklaerung von Vorhersagen des maschinellen Lernens durch Anzeigen welche Merkmale am meisten zu spezifischen Entscheidungen beigetragen haben.",
                  "nl": "LIME (Local Interpretable Model-agnostic Explanations) en SHAP (SHapley Additive exPlanations) zijn populaire technieken voor het uitleggen van machine learning voorspellingen door te tonen welke features het meest bijdroegen aan specifieke beslissingen."
        }
      },
      {
        question: {
                  "en": "What is 'global explainability' versus 'local explainability' in AI?",
                  "es": "Que es 'explicabilidad global' versus 'explicabilidad local' en IA?",
                  "de": "Was ist 'globale Erklaerbarkeit' versus 'lokale Erklaerbarkeit' in der KI?",
                  "nl": "Wat is 'globale uitlegbaarheid' versus 'lokale uitlegbaarheid' in AI?"
        },
        options: [
        {
                  "en": "Global explains hardware; local explains software",
                  "es": "Global explica hardware; local explica software",
                  "de": "Global erklaert Hardware; lokal erklaert Software",
                  "nl": "Globaal verklaart hardware; lokaal verklaart software"
        },
        {
                  "en": "Global explains overall model behavior; local explains individual predictions",
                  "es": "Global explica comportamiento general del modelo; local explica predicciones individuales",
                  "de": "Global erklaert das Gesamtverhalten des Modells; lokal erklaert individuelle Vorhersagen",
                  "nl": "Globaal verklaart het algehele modelgedrag; lokaal verklaart individuele voorspellingen"
        },
        {
                  "en": "Global uses worldwide data; local uses regional data",
                  "es": "Global usa datos mundiales; local usa datos regionales",
                  "de": "Global verwendet weltweite Daten; lokal verwendet regionale Daten",
                  "nl": "Globaal gebruikt wereldwijde data; lokaal gebruikt regionale data"
        },
        {
                  "en": "Global is for large models; local is for small models",
                  "es": "Global es para modelos grandes; local es para modelos pequenos",
                  "de": "Global ist fuer grosse Modelle; lokal ist fuer kleine Modelle",
                  "nl": "Globaal is voor grote modellen; lokaal is voor kleine modellen"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Global explainability provides understanding of how an AI model behaves overall across all inputs, while local explainability focuses on explaining why the model made a specific decision for a particular input.",
                  "es": "La explicabilidad global proporciona entendimiento de como un modelo de IA se comporta en general a traves de todas las entradas, mientras que la explicabilidad local se enfoca en explicar por que el modelo tomo una decision especifica para una entrada particular.",
                  "de": "Globale Erklaerbarkeit bietet Verstaendnis davon wie sich ein KI-Modell insgesamt ueber alle Eingaben hinweg verhaelt, waehrend lokale Erklaerbarkeit darauf fokussiert zu erklaeren warum das Modell eine spezifische Entscheidung fuer eine bestimmte Eingabe getroffen hat.",
                  "nl": "Globale uitlegbaarheid biedt begrip van hoe een AI model zich over het algemeen gedraagt over alle inputs, terwijl lokale uitlegbaarheid zich richt op het uitleggen waarom het model een specifieke beslissing nam voor een bepaalde input."
        }
      },
      {
        question: {
                  "en": "What is 'post-hoc explainability' in machine learning?",
                  "es": "Que es 'explicabilidad post-hoc' en aprendizaje automatico?",
                  "de": "Was ist 'Post-hoc-Erklaerbarkeit' im maschinellen Lernen?",
                  "nl": "Wat is 'post-hoc uitlegbaarheid' in machine learning?"
        },
        options: [
        {
                  "en": "Explaining model decisions after the model has been trained and deployed",
                  "es": "Explicar decisiones del modelo despues de que el modelo ha sido entrenado y desplegado",
                  "de": "Modelentscheidungen erklaeren nachdem das Modell trainiert und eingesetzt wurde",
                  "nl": "Model beslissingen uitleggen nadat het model is getraind en ingezet"
        },
        {
                  "en": "Explaining models in Latin",
                  "es": "Explicar modelos en latin",
                  "de": "Modelle auf Latein erklaeren",
                  "nl": "Modellen in het Latijn uitleggen"
        },
        {
                  "en": "Explaining models only during training",
                  "es": "Explicar modelos solo durante entrenamiento",
                  "de": "Modelle nur waehrend des Trainings erklaeren",
                  "nl": "Modellen alleen tijdens training uitleggen"
        },
        {
                  "en": "Pre-explaining models before training",
                  "es": "Pre-explicar modelos antes del entrenamiento",
                  "de": "Modelle vor dem Training vorab erklaeren",
                  "nl": "Modellen vooraf uitleggen voor training"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Post-hoc explainability involves applying explanation techniques to already-trained models to understand their behavior, as opposed to building interpretability into the model from the beginning (intrinsic explainability).",
                  "es": "La explicabilidad post-hoc involucra aplicar tecnicas de explicacion a modelos ya entrenados para entender su comportamiento, en oposicion a construir interpretabilidad en el modelo desde el principio (explicabilidad intrinseca).",
                  "de": "Post-hoc-Erklaerbarkeit beinhaltet die Anwendung von Erklaerungstechniken auf bereits trainierte Modelle um ihr Verhalten zu verstehen, im Gegensatz dazu Interpretierbarkeit von Anfang an in das Modell einzubauen (intrinsische Erklaerbarkeit).",
                  "nl": "Post-hoc uitlegbaarheid houdt in dat verklaringstechnieken toegepast worden op reeds getrainde modellen om hun gedrag te begrijpen, in tegenstelling tot het inbouwen van interpreteerbaarheid in het model vanaf het begin (intrinsieke uitlegbaarheid)."
        }
      },
      {
        question: {
                  "en": "What are 'counterfactual explanations' in AI?",
                  "es": "Que son 'explicaciones contrafactuales' en IA?",
                  "de": "Was sind 'kontrafaktische Erklaerungen' in der KI?",
                  "nl": "Wat zijn 'contrafeitelijke verklaringen' in AI?"
        },
        options: [
        {
                  "en": "False explanations generated by AI",
                  "es": "Explicaciones falsas generadas por IA",
                  "de": "Falsche Erklaerungen die von KI generiert werden",
                  "nl": "Valse verklaringen gegenereerd door AI"
        },
        {
                  "en": "Explanations showing what would need to change for a different AI decision",
                  "es": "Explicaciones que muestran que necesitaria cambiar para una decision de IA diferente",
                  "de": "Erklaerungen die zeigen was sich aendern muesste fuer eine andere KI-Entscheidung",
                  "nl": "Verklaringen die tonen wat er zou moeten veranderen voor een andere AI beslissing"
        },
        {
                  "en": "Explanations that contradict the AI's decision",
                  "es": "Explicaciones que contradicen la decision de la IA",
                  "de": "Erklaerungen die der KI-Entscheidung widersprechen",
                  "nl": "Verklaringen die de AI beslissing tegenspreken"
        },
        {
                  "en": "Explanations based on historical facts",
                  "es": "Explicaciones basadas en hechos historicos",
                  "de": "Erklaerungen basierend auf historischen Fakten",
                  "nl": "Verklaringen gebaseerd op historische feiten"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Counterfactual explanations describe the minimal changes needed to inputs that would result in a different prediction, helping users understand decision boundaries and what factors are most important for specific outcomes.",
                  "es": "Las explicaciones contrafactuales describen los cambios minimos necesarios en las entradas que resultarian en una prediccion diferente, ayudando a usuarios entender limites de decision y que factores son mas importantes para resultados especificos.",
                  "de": "Kontrafaktische Erklaerungen beschreiben die minimalen Aenderungen an Eingaben die zu einer anderen Vorhersage fuehren wuerden, wodurch Nutzern geholfen wird Entscheidungsgrenzen zu verstehen und welche Faktoren fuer spezifische Ergebnisse am wichtigsten sind.",
                  "nl": "Contrafeitelijke verklaringen beschrijven de minimale veranderingen nodig aan inputs die zouden resulteren in een andere voorspelling, wat gebruikers helpt beslissingsgrenzen te begrijpen en welke factoren het belangrijkst zijn voor specifieke uitkomsten."
        }
      },
      {
        question: {
                  "en": "What is the trade-off between model accuracy and interpretability?",
                  "es": "Cual es el intercambio entre precision del modelo e interpretabilidad?",
                  "de": "Was ist der Kompromiss zwischen Modellgenauigkeit und Interpretierbarkeit?",
                  "nl": "Wat is de afweging tussen model nauwkeurigheid en interpreteerbaarheid?"
        },
        options: [
        {
                  "en": "Interpretable models are always more accurate",
                  "es": "Modelos interpretables son siempre mas precisos",
                  "de": "Interpretierbare Modelle sind immer genauer",
                  "nl": "Interpreteerbare modellen zijn altijd nauwkeuriger"
        },
        {
                  "en": "More complex, accurate models are often less interpretable than simpler ones",
                  "es": "Modelos mas complejos y precisos son a menudo menos interpretables que los simples",
                  "de": "Komplexere, genauere Modelle sind oft weniger interpretierbar als einfachere",
                  "nl": "Meer complexe, nauwkeurige modellen zijn vaak minder interpreteerbaar dan eenvoudige"
        },
        {
                  "en": "There is no relationship between accuracy and interpretability",
                  "es": "No hay relacion entre precision e interpretabilidad",
                  "de": "Es gibt keine Beziehung zwischen Genauigkeit und Interpretierbarkeit",
                  "nl": "Er is geen verband tussen nauwkeurigheid en interpreteerbaarheid"
        },
        {
                  "en": "Accurate models are always more interpretable",
                  "es": "Modelos precisos son siempre mas interpretables",
                  "de": "Genaue Modelle sind immer interpretierbarer",
                  "nl": "Nauwkeurige modellen zijn altijd interpreteerbaarder"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "There's often a trade-off where more complex models (like deep neural networks) achieve higher accuracy but are harder to interpret, while simpler models (like linear regression) are more interpretable but may have lower accuracy.",
                  "es": "A menudo hay un intercambio donde modelos mas complejos (como redes neuronales profundas) logran mayor precision pero son mas dificiles de interpretar, mientras que modelos simples (como regresion lineal) son mas interpretables pero pueden tener menor precision.",
                  "de": "Es gibt oft einen Kompromiss wo komplexere Modelle (wie tiefe neuronale Netzwerke) hoehere Genauigkeit erreichen aber schwerer zu interpretieren sind, waehrend einfachere Modelle (wie lineare Regression) interpretierbarer sind aber moeglicherweise geringere Genauigkeit haben.",
                  "nl": "Er is vaak een afweging waarbij complexere modellen (zoals diepe neurale netwerken) hogere nauwkeurigheid bereiken maar moeilijker te interpreteren zijn, terwijl eenvoudigere modellen (zoals lineaire regressie) interpreteerbaarder zijn maar mogelijk lagere nauwkeurigheid hebben."
        }
      },
      {
        question: {
                  "en": "What is 'algorithmic recourse' in explainable AI?",
                  "es": "Que es 'recurso algoritmico' en IA explicable?",
                  "de": "Was ist 'algorithmischer Rechtsbehelf' in erklaerbarer KI?",
                  "nl": "Wat is 'algoritmisch verhaal' in uitlegbare AI?"
        },
        options: [
        {
                  "en": "Emergency shutdown procedures for AI",
                  "es": "Procedimientos de apagado de emergencia para IA",
                  "de": "Notabschaltverfahren fuer KI",
                  "nl": "Noodstop procedures voor AI"
        },
        {
                  "en": "Legal appeals against AI decisions",
                  "es": "Apelaciones legales contra decisiones de IA",
                  "de": "Rechtliche Einsprueche gegen KI-Entscheidungen",
                  "nl": "Juridische beroepen tegen AI beslissingen"
        },
        {
                  "en": "Backup algorithms when primary ones fail",
                  "es": "Algoritmos de respaldo cuando fallan los primarios",
                  "de": "Backup-Algorithmen wenn primaere versagen",
                  "nl": "Backup algoritmes wanneer primaire falen"
        },
        {
                  "en": "Actionable recommendations for individuals to achieve desired AI outcomes",
                  "es": "Recomendaciones accionables para que individuos logren resultados deseados de IA",
                  "de": "Umsetzbare Empfehlungen fuer Individuen um gewuenschte KI-Ergebnisse zu erreichen",
                  "nl": "Uitvoerbare aanbevelingen voor individuen om gewenste AI uitkomsten te bereiken"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Algorithmic recourse provides individuals with actionable steps they can take to change an AI system's decision about them, such as specific actions to improve a loan application or job candidacy.",
                  "es": "El recurso algoritmico proporciona a individuos pasos accionables que pueden tomar para cambiar la decision de un sistema de IA sobre ellos, como acciones especificas para mejorar una solicitud de prestamo o candidatura laboral.",
                  "de": "Algorithmischer Rechtsbehelf bietet Individuen umsetzbare Schritte die sie unternehmen koennen um eine KI-Systementscheidung ueber sie zu aendern, wie spezifische Aktionen um einen Kreditantrag oder Stellenbewerbung zu verbessern.",
                  "nl": "Algoritmisch verhaal biedt individuen uitvoerbare stappen die ze kunnen nemen om een AI systeem beslissing over hen te veranderen, zoals specifieke acties om een leningaanvraag of baan kandidatuur te verbeteren."
        }
      },
      {
        question: {
                  "en": "What is 'feature attribution' in explainable AI?",
                  "es": "Que es 'atribucion de caracteristicas' en IA explicable?",
                  "de": "Was ist 'Merkmalszuordnung' in erklaerbarer KI?",
                  "nl": "Wat is 'feature attributie' in uitlegbare AI?"
        },
        options: [
        {
                  "en": "Giving credit to the creators of AI features",
                  "es": "Dar credito a los creadores de caracteristicas de IA",
                  "de": "Den Entwicklern von KI-Funktionen Anerkennung geben",
                  "nl": "Credits geven aan de makers van AI features"
        },
        {
                  "en": "Describing the technical specifications of features",
                  "es": "Describir las especificaciones tecnicas de caracteristicas",
                  "de": "Die technischen Spezifikationen von Merkmalen beschreiben",
                  "nl": "De technische specificaties van features beschrijven"
        },
        {
                  "en": "Determining how much each input feature contributed to a model's prediction",
                  "es": "Determinar cuanto contribuyo cada caracteristica de entrada a la prediccion del modelo",
                  "de": "Bestimmen wie viel jedes Eingabemerkmal zur Vorhersage des Modells beigetragen hat",
                  "nl": "Bepalen hoeveel elke input feature bijdroeg aan de voorspelling van het model"
        },
        {
                  "en": "Organizing features alphabetically",
                  "es": "Organizar caracteristicas alfabeticamente",
                  "de": "Merkmale alphabetisch organisieren",
                  "nl": "Features alfabetisch organiseren"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Feature attribution techniques quantify the contribution of each input feature to a model's output, helping to understand which aspects of the input data were most important for a particular prediction.",
                  "es": "Las tecnicas de atribucion de caracteristicas cuantifican la contribucion de cada caracteristica de entrada a la salida del modelo, ayudando a entender que aspectos de los datos de entrada fueron mas importantes para una prediccion particular.",
                  "de": "Merkmalszuordnungstechniken quantifizieren den Beitrag jedes Eingabemerkmals zur Ausgabe des Modells und helfen zu verstehen welche Aspekte der Eingabedaten fuer eine bestimmte Vorhersage am wichtigsten waren.",
                  "nl": "Feature attributie technieken kwantificeren de bijdrage van elke input feature aan de output van het model, wat helpt begrijpen welke aspecten van de inputdata het belangrijkst waren voor een bepaalde voorspelling."
        }
      },
      {
        question: {
                  "en": "What is 'concept drift' and how does it affect AI explainability?",
                  "es": "Que es 'deriva de conceptos' y como afecta la explicabilidad de IA?",
                  "de": "Was ist 'Konzeptdrift' und wie beeinflusst es die KI-Erklaerbarkeit?",
                  "nl": "Wat is 'concept drift' en hoe beïnvloedt het AI uitlegbaarheid?"
        },
        options: [
        {
                  "en": "When AI explanations become too complex",
                  "es": "Cuando explicaciones de IA se vuelven demasiado complejas",
                  "de": "Wenn KI-Erklaerungen zu komplex werden",
                  "nl": "Wanneer AI verklaringen te complex worden"
        },
        {
                  "en": "When users lose interest in AI explanations",
                  "es": "Cuando usuarios pierden interes en explicaciones de IA",
                  "de": "Wenn Nutzer das Interesse an KI-Erklaerungen verlieren",
                  "nl": "Wanneer gebruikers interesse verliezen in AI verklaringen"
        },
        {
                  "en": "When AI concepts become outdated and need replacement",
                  "es": "Cuando conceptos de IA se vuelven obsoletos y necesitan reemplazo",
                  "de": "Wenn KI-Konzepte veraltet werden und Ersatz benoetigen",
                  "nl": "Wanneer AI concepten verouderd raken en vervanging nodig hebben"
        },
        {
                  "en": "When the relationship between inputs and outputs changes over time, requiring updated explanations",
                  "es": "Cuando relacion entre entradas y salidas cambia con tiempo requiriendo explicaciones nuevas",
                  "de": "Wenn die Beziehung zwischen Ein-/Ausgaben sich aendert und neue Erklaerungen erfordert",
                  "nl": "Wanneer relatie tussen inputs/outputs verandert en bijgewerkte verklaringen vereist"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Concept drift occurs when the statistical properties of data change over time, meaning that previously valid explanations may no longer accurately describe model behavior, requiring continuous monitoring and updating of explanation methods.",
                  "es": "La deriva de conceptos ocurre cuando las propiedades estadisticas de los datos cambian con el tiempo, significando que explicaciones previamente validas pueden ya no describir con precision el comportamiento del modelo, requiriendo monitoreo continuo y actualizacion de metodos de explicacion.",
                  "de": "Konzeptdrift tritt auf wenn sich die statistischen Eigenschaften von Daten ueber die Zeit aendern, was bedeutet dass zuvor gueltige Erklaerungen moeglicherweise nicht mehr genau das Modellverhalten beschreiben, was kontinuierliche Ueberwachung und Aktualisierung von Erklaerungsmethoden erfordert.",
                  "nl": "Concept drift treedt op wanneer de statistische eigenschappen van data veranderen over tijd, wat betekent dat eerder geldige verklaringen mogelijk niet langer nauwkeurig het modelgedrag beschrijven, wat continue monitoring en bijwerking van verklaringsmethoden vereist."
        }
      },
      {
        question: {
                  "en": "What is 'gradient-based attribution' in neural network explainability?",
                  "es": "Que es 'atribucion basada en gradientes' en explicabilidad de redes neuronales?",
                  "de": "Was ist 'gradientenbasierte Zuordnung' in der Erklaerbarkeit neuronaler Netzwerke?",
                  "nl": "Wat is 'gradient-gebaseerde attributie' in neurale netwerk uitlegbaarheid?"
        },
        options: [
        {
                  "en": "Using derivatives to determine which input features most influence network outputs",
                  "es": "Usar derivadas para determinar que caracteristicas de entrada mas influyen en las salidas de la red",
                  "de": "Ableitungen verwenden um zu bestimmen welche Eingabemerkmale Netzwerkausgaben beeinflussen",
                  "nl": "Gebruik van afgeleiden om te bepalen welke input features de netwerk outputs het meest beïnvloeden"
        },
        {
                  "en": "Creating smooth transitions between network layers",
                  "es": "Crear transiciones suaves entre capas de red",
                  "de": "Sanfte Uebergaenge zwischen Netzwerkschichten erstellen",
                  "nl": "Vloeiende overgangen maken tussen netwerklagen"
        },
        {
                  "en": "Assigning colors based on gradient values",
                  "es": "Asignar colores basados en valores de gradiente",
                  "de": "Farben basierend auf Gradientenwerten zuweisen",
                  "nl": "Kleuren toewijzen gebaseerd op gradient waarden"
        },
        {
                  "en": "Gradually increasing the difficulty of training examples",
                  "es": "Aumentar gradualmente la dificultad de ejemplos de entrenamiento",
                  "de": "Die Schwierigkeit von Trainingsbeispielen graduell erhoehen",
                  "nl": "Geleidelijk verhogen van de moeilijkheid van trainingsvoorbeelden"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Gradient-based attribution methods use the gradient (derivative) of the output with respect to inputs to understand which input features have the strongest influence on the model's decision, providing insights into model sensitivity.",
                  "es": "Los metodos de atribucion basados en gradientes usan el gradiente (derivada) de la salida con respecto a las entradas para entender que caracteristicas de entrada tienen la influencia mas fuerte en la decision del modelo, proporcionando perspectivas sobre la sensibilidad del modelo.",
                  "de": "Gradientenbasierte Zuordnungsmethoden verwenden den Gradienten (Ableitung) der Ausgabe bezueglich der Eingaben um zu verstehen welche Eingabemerkmale den staerksten Einfluss auf die Entscheidung des Modells haben, wodurch Einblicke in die Modellsensitivitaet gewonnen werden.",
                  "nl": "Gradient-gebaseerde attributie methoden gebruiken de gradient (afgeleide) van de output ten opzichte van inputs om te begrijpen welke input features de sterkste invloed hebben op de beslissing van het model, wat inzicht geeft in model gevoeligheid."
        }
      },
      {
        question: {
                  "en": "What is the difference between 'intrinsic' and 'post-hoc' interpretability?",
                  "es": "Cual es la diferencia entre interpretabilidad 'intrinseca' y 'post-hoc'?",
                  "de": "Was ist der Unterschied zwischen 'intrinsischer' und 'Post-hoc'-Interpretierbarkeit?",
                  "nl": "Wat is het verschil tussen 'intrinsieke' en 'post-hoc' interpreteerbaarheid?"
        },
        options: [
        {
                  "en": "Intrinsic uses internal data; post-hoc uses external data",
                  "es": "Intrinseca usa datos internos; post-hoc usa datos externos",
                  "de": "Intrinsisch verwendet interne Daten; Post-hoc verwendet externe Daten",
                  "nl": "Intrinsiek gebruikt interne data; post-hoc gebruikt externe data"
        },
        {
                  "en": "Intrinsic is for simple models; post-hoc is for complex models",
                  "es": "Intrinseca es para modelos simples; post-hoc es para modelos complejos",
                  "de": "Intrinsisch ist fuer einfache Modelle; Post-hoc ist fuer komplexe Modelle",
                  "nl": "Intrinsiek is voor eenvoudige modellen; post-hoc is voor complexe modellen"
        },
        {
                  "en": "Intrinsic is automatic; post-hoc requires human intervention",
                  "es": "Intrinseca es automatica; post-hoc requiere intervencion humana",
                  "de": "Intrinsisch ist automatisch; Post-hoc erfordert menschliche Intervention",
                  "nl": "Intrinsiek is automatisch; post-hoc vereist menselijke interventie"
        },
        {
                  "en": "Intrinsic is built into the model; post-hoc is applied after training",
                  "es": "Intrinseca esta construida en el modelo; post-hoc se aplica despues del entrenamiento",
                  "de": "Intrinsisch ist in das Modell eingebaut; Post-hoc wird nach dem Training angewendet",
                  "nl": "Intrinsiek is ingebouwd in het model; post-hoc wordt toegepast na training"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Intrinsic interpretability means the model is inherently interpretable by design (like decision trees), while post-hoc interpretability involves applying explanation techniques to already-trained models that weren't designed to be interpretable.",
                  "es": "La interpretabilidad intrinseca significa que el modelo es inherentemente interpretable por diseno (como arboles de decision), mientras que la interpretabilidad post-hoc involucra aplicar tecnicas de explicacion a modelos ya entrenados que no fueron disenados para ser interpretables.",
                  "de": "Intrinsische Interpretierbarkeit bedeutet dass das Modell von Design her inhaerent interpretierbar ist (wie Entscheidungsbaeume), waehrend Post-hoc-Interpretierbarkeit das Anwenden von Erklaerungstechniken auf bereits trainierte Modelle beinhaltet die nicht dafuer entworfen wurden interpretierbar zu sein.",
                  "nl": "Intrinsieke interpreteerbaarheid betekent dat het model inherent interpreteerbaar is door ontwerp (zoals beslissingsbomen), terwijl post-hoc interpreteerbaarheid het toepassen van verklaringstechnieken behelst op reeds getrainde modellen die niet ontworpen waren om interpreteerbaar te zijn."
        }
      },
      {
        question: {
                  "en": "What is 'model transparency' in the context of regulatory compliance?",
                  "es": "Que es 'transparencia del modelo' en el contexto de cumplimiento regulatorio?",
                  "de": "Was ist 'Modelltransparenz' im Kontext der regulatorischen Compliance?",
                  "nl": "Wat is 'model transparantie' in de context van regelgevingsnaleving?"
        },
        options: [
        {
                  "en": "Using only simple algorithms that everyone can understand",
                  "es": "Usar solo algoritmos simples que todos puedan entender",
                  "de": "Nur einfache Algorithmen verwenden die jeder verstehen kann",
                  "nl": "Alleen eenvoudige algoritmes gebruiken die iedereen kan begrijpen"
        },
        {
                  "en": "Publishing all training data publicly",
                  "es": "Publicar todos los datos de entrenamiento publicamente",
                  "de": "Alle Trainingsdaten oeffentlich veroeffentlichen",
                  "nl": "Alle trainingsdata publiek publiceren"
        },
        {
                  "en": "Clear documentation about model architecture, training data, and decisions for regulatory review",
                  "es": "Documentacion clara sobre arquitectura, datos de entrenamiento y decisiones para revision",
                  "de": "Klare Dokumentation ueber Modellarchitektur, Trainingsdaten und Entscheidungen fuer Pruefung",
                  "nl": "Duidelijke documentatie over modelarchitectuur, trainingsdata en beslissingen voor toetsing"
        },
        {
                  "en": "Making AI models completely open source",
                  "es": "Hacer que modelos de IA sean completamente de codigo abierto",
                  "de": "KI-Modelle vollstaendig Open Source machen",
                  "nl": "AI modellen volledig open source maken"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Model transparency for regulatory compliance involves providing comprehensive documentation about how AI systems work, including their architecture, training processes, data sources, and decision-making logic, enabling regulators to assess compliance with applicable laws and standards.",
                  "es": "La transparencia del modelo para cumplimiento regulatorio involucra proporcionar documentacion integral sobre como funcionan los sistemas de IA, incluyendo su arquitectura, procesos de entrenamiento, fuentes de datos y logica de toma de decisiones, permitiendo a reguladores evaluar el cumplimiento con leyes y estandares aplicables.",
                  "de": "Modelltransparenz fuer regulatorische Compliance beinhaltet umfassende Dokumentation darueber wie KI-Systeme funktionieren, einschliesslich ihrer Architektur, Trainingsprozesse, Datenquellen und Entscheidungslogik, wodurch Regulatoren die Einhaltung anwendbarer Gesetze und Standards bewerten koennen.",
                  "nl": "Model transparantie voor regelgevingsnaleving houdt in dat uitgebreide documentatie verstrekt wordt over hoe AI systemen werken, inclusief hun architectuur, trainingsprocessen, databronnen en besluitvormingslogica, waardoor toezichthouders naleving van toepasselijke wetten en standaarden kunnen beoordelen."
        }
      },
      {
        question: {
                  "en": "What is 'saliency mapping' in visual AI explainability?",
                  "es": "Que es 'mapeo de saliencia' en explicabilidad visual de IA?",
                  "de": "Was ist 'Salienz-Mapping' in visueller KI-Erklaerbarkeit?",
                  "nl": "Wat is 'saliency mapping' in visuele AI uitlegbaarheid?"
        },
        options: [
        {
                  "en": "Creating geographic maps from satellite images",
                  "es": "Crear mapas geograficos de imagenes satelitales",
                  "de": "Geografische Karten aus Satellitenbildern erstellen",
                  "nl": "Geografische kaarten maken van satellietbeelden"
        },
        {
                  "en": "Highlighting which pixels in an image most influenced the model's classification",
                  "es": "Resaltar que pixeles en imagen mas influyeron en clasificacion del modelo",
                  "de": "Hervorheben welche Pixel im Bild die Klassifikation des Modells am meisten beeinflussten",
                  "nl": "Benadrukken welke pixels in afbeelding classificatie van model het meest beïnvloedden"
        },
        {
                  "en": "Organizing images by brightness",
                  "es": "Organizar imagenes por brillo",
                  "de": "Bilder nach Helligkeit organisieren",
                  "nl": "Afbeeldingen organiseren op helderheid"
        },
        {
                  "en": "Mapping colors to different categories",
                  "es": "Mapear colores a diferentes categorias",
                  "de": "Farben verschiedenen Kategorien zuordnen",
                  "nl": "Kleuren toewijzen aan verschillende categorieën"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Saliency maps visualize which parts of input images were most important for neural network decisions by computing gradients of outputs with respect to input pixels, showing attention areas.",
                  "es": "Los mapas de saliencia visualizan que partes de imagenes de entrada fueron mas importantes para decisiones de redes neuronales computando gradientes de salidas respecto a pixeles de entrada, mostrando areas de atencion.",
                  "de": "Salienz-Maps visualisieren welche Teile von Eingabebildern am wichtigsten fuer Entscheidungen neuronaler Netzwerke waren durch Berechnung von Gradienten der Ausgaben bezueglich Eingabepixeln, wodurch Aufmerksamkeitsbereiche gezeigt werden.",
                  "nl": "Saliency maps visualiseren welke delen van input afbeeldingen het belangrijkst waren voor neurale netwerk beslissingen door gradiënten van outputs ten opzichte van input pixels te berekenen, wat aandachtsgebieden toont."
        }
      },
      {
        question: {
                  "en": "What are 'anchor explanations' in AI?",
                  "es": "Que son 'explicaciones de anclaje' en IA?",
                  "de": "Was sind 'Anker-Erklaerungen' in der KI?",
                  "nl": "Wat zijn 'anchor verklaringen' in AI?"
        },
        options: [
        {
                  "en": "Primary features that stabilize model predictions",
                  "es": "Caracteristicas primarias que estabilizan predicciones del modelo",
                  "de": "Primaere Merkmale die Modellvorhersagen stabilisieren",
                  "nl": "Primaire features die modelvoorspellingen stabiliseren"
        },
        {
                  "en": "Explanations that link AI to web pages",
                  "es": "Explicaciones que enlazan IA a paginas web",
                  "de": "Erklaerungen die KI mit Webseiten verknuepfen",
                  "nl": "Verklaringen die AI koppelen aan webpagina's"
        },
        {
                  "en": "Sufficient conditions that guarantee a specific prediction regardless of other features",
                  "es": "Condiciones suficientes que garantizan prediccion especifica sin importar otras caracteristicas",
                  "de": "Hinreichende Bedingungen die spezifische Vorhersage garantieren unabhaengig von anderen Merkmalen",
                  "nl": "Voldoende voorwaarden die specifieke voorspelling garanderen ongeacht andere features"
        },
        {
                  "en": "Fixed reference points in training data",
                  "es": "Puntos de referencia fijos en datos de entrenamiento",
                  "de": "Feste Referenzpunkte in Trainingsdaten",
                  "nl": "Vaste referentiepunten in trainingsdata"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Anchor explanations identify minimal sets of features that, when present, guarantee the model's prediction with high probability, providing rule-like if-then explanations that are easy for humans to understand.",
                  "es": "Las explicaciones de anclaje identifican conjuntos minimos de caracteristicas que, cuando estan presentes, garantizan la prediccion del modelo con alta probabilidad, proporcionando explicaciones tipo regla if-then faciles de entender para humanos.",
                  "de": "Anker-Erklaerungen identifizieren minimale Merkmalsmengen die, wenn vorhanden, die Modellvorhersage mit hoher Wahrscheinlichkeit garantieren, wodurch regelaehnliche Wenn-Dann-Erklaerungen bereitgestellt werden die fuer Menschen leicht verstaendlich sind.",
                  "nl": "Anchor verklaringen identificeren minimale sets van features die, wanneer aanwezig, de modelvoorspelling met hoge waarschijnlijkheid garanderen, wat regel-achtige if-then verklaringen biedt die gemakkelijk te begrijpen zijn voor mensen."
        }
      },
      {
        question: {
                  "en": "What is 'model cards' documentation approach?",
                  "es": "Que es el enfoque de documentacion de 'tarjetas de modelo'?",
                  "de": "Was ist der 'Model Cards' Dokumentationsansatz?",
                  "nl": "Wat is de 'model cards' documentatie aanpak?"
        },
        options: [
        {
                  "en": "Business cards for AI developers",
                  "es": "Tarjetas de presentacion para desarrolladores de IA",
                  "de": "Visitenkarten fuer KI-Entwickler",
                  "nl": "Visitekaartjes voor AI ontwikkelaars"
        },
        {
                  "en": "Standardized documentation reporting model details, performance, limitations, and ethical considerations",
                  "es": "Documentacion estandarizada reportando detalles, rendimiento, limitaciones y consideraciones eticas",
                  "de": "Standardisierte Dokumentation die Modelldetails, Leistung, Einschraenkungen und ethische Ueberlegungen berichtet",
                  "nl": "Gestandaardiseerde documentatie die modeldetails, prestaties, beperkingen en ethische overwegingen rapporteert"
        },
        {
                  "en": "Trading cards for AI enthusiasts",
                  "es": "Tarjetas coleccionables para entusiastas de IA",
                  "de": "Sammelkarten fuer KI-Enthusiasten",
                  "nl": "Verzamelkaarten voor AI enthousiastelingen"
        },
        {
                  "en": "Physical cards with model specifications",
                  "es": "Tarjetas fisicas con especificaciones del modelo",
                  "de": "Physische Karten mit Modellspezifikationen",
                  "nl": "Fysieke kaarten met modelspecificaties"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Model cards provide structured, transparent documentation about AI models including their intended use, training data, performance across demographics, limitations, and ethical considerations, promoting responsible AI deployment.",
                  "es": "Las tarjetas de modelo proporcionan documentacion estructurada y transparente sobre modelos de IA incluyendo su uso previsto, datos de entrenamiento, rendimiento entre demografias, limitaciones y consideraciones eticas, promoviendo despliegue responsable de IA.",
                  "de": "Model Cards bieten strukturierte, transparente Dokumentation ueber KI-Modelle einschliesslich ihres beabsichtigten Einsatzes, Trainingsdaten, Leistung ueber Demografien, Einschraenkungen und ethischen Ueberlegungen, was verantwortungsvolle KI-Bereitstellung foerdert.",
                  "nl": "Model cards bieden gestructureerde, transparante documentatie over AI modellen inclusief hun beoogd gebruik, trainingsdata, prestaties over demografieën, beperkingen en ethische overwegingen, wat verantwoorde AI inzet bevordert."
        }
      },
      {
        question: {
                  "en": "What is 'datasheets for datasets' concept?",
                  "es": "Que es el concepto de 'hojas de datos para conjuntos de datos'?",
                  "de": "Was ist das 'Datenblaetter fuer Datensaetze' Konzept?",
                  "nl": "Wat is het 'datasheets for datasets' concept?"
        },
        options: [
        {
                  "en": "Database schemas and table definitions",
                  "es": "Esquemas de base de datos y definiciones de tablas",
                  "de": "Datenbankschemata und Tabellendefinitionen",
                  "nl": "Database schemas en tabel definities"
        },
        {
                  "en": "Standardized documentation describing dataset creation, composition, and intended use",
                  "es": "Documentacion estandarizada describiendo creacion, composicion y uso previsto de conjunto datos",
                  "de": "Standardisierte Dokumentation die Datensatzerstellung, Zusammensetzung und beabsichtigte Verwendung beschreibt",
                  "nl": "Gestandaardiseerde documentatie die dataset creatie, samenstelling en beoogd gebruik beschrijft"
        },
        {
                  "en": "Paper printouts of data samples",
                  "es": "Impresiones en papel de muestras de datos",
                  "de": "Papierausdrucke von Datenproben",
                  "nl": "Papieren afdrukken van datasamples"
        },
        {
                  "en": "Spreadsheets containing dataset values",
                  "es": "Hojas de calculo conteniendo valores de conjunto de datos",
                  "de": "Tabellen mit Datensatzwerten",
                  "nl": "Spreadsheets met dataset waarden"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Datasheets for datasets provide comprehensive metadata about datasets including their motivation, composition, collection process, preprocessing, distribution, maintenance, and legal/ethical considerations, enabling informed dataset selection and use.",
                  "es": "Las hojas de datos para conjuntos de datos proporcionan metadatos completos sobre conjuntos de datos incluyendo su motivacion, composicion, proceso de recoleccion, preprocesamiento, distribucion, mantenimiento y consideraciones legales/eticas, permitiendo seleccion y uso informado de conjuntos de datos.",
                  "de": "Datenblaetter fuer Datensaetze bieten umfassende Metadaten ueber Datensaetze einschliesslich ihrer Motivation, Zusammensetzung, Sammelprozess, Vorverarbeitung, Verteilung, Wartung und rechtlichen/ethischen Ueberlegungen, was informierte Datensatzauswahl und -verwendung ermoeglicht.",
                  "nl": "Datasheets for datasets bieden uitgebreide metadata over datasets inclusief hun motivatie, samenstelling, verzamelproces, preprocessing, distributie, onderhoud en juridische/ethische overwegingen, wat geïnformeerde dataset selectie en gebruik mogelijk maakt."
        }
      },
      {
        question: {
                  "en": "What is 'layer-wise relevance propagation' (LRP)?",
                  "es": "Que es 'propagacion de relevancia por capas' (LRP)?",
                  "de": "Was ist 'schichtweise Relevanzpropagierung' (LRP)?",
                  "nl": "Wat is 'layer-wise relevance propagation' (LRP)?"
        },
        options: [
        {
                  "en": "Method for training neural networks layer by layer",
                  "es": "Metodo para entrenar redes neuronales capa por capa",
                  "de": "Methode zum schichtweisen Trainieren neuronaler Netzwerke",
                  "nl": "Methode voor laag-voor-laag trainen van neurale netwerken"
        },
        {
                  "en": "Protocol for data transmission between layers",
                  "es": "Protocolo para transmision de datos entre capas",
                  "de": "Protokoll fuer Datenuebertragung zwischen Schichten",
                  "nl": "Protocol voor datatransmissie tussen lagen"
        },
        {
                  "en": "Technique that traces prediction contributions back through network layers to input features",
                  "es": "Tecnica que rastrea contribuciones de prediccion a traves de capas de red hacia caracteristicas entrada",
                  "de": "Technik die Vorhersagebeitraege durch Netzwerkschichten zurueck zu Eingabemerkmalen verfolgt",
                  "nl": "Techniek die voorspellingsbijdragen terug traceert door netwerklagen naar input features"
        },
        {
                  "en": "Ranking of network layers by importance",
                  "es": "Clasificacion de capas de red por importancia",
                  "de": "Rangfolge von Netzwerkschichten nach Wichtigkeit",
                  "nl": "Rangschikking van netwerklagen op belangrijkheid"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Layer-wise relevance propagation decomposes neural network predictions by redistributing relevance scores backwards through the network layers, attributing the final prediction to individual input features in a mathematically principled way.",
                  "es": "La propagacion de relevancia por capas descompone predicciones de redes neuronales redistribuyendo puntuaciones de relevancia hacia atras a traves de capas de red, atribuyendo la prediccion final a caracteristicas de entrada individuales de manera matematicamente fundamentada.",
                  "de": "Schichtweise Relevanzpropagierung zerlegt Vorhersagen neuronaler Netzwerke durch Rueckwaertsverteilung von Relevanzwerten durch die Netzwerkschichten, wobei die endgueltige Vorhersage einzelnen Eingabemerkmalen auf mathematisch fundierte Weise zugeordnet wird.",
                  "nl": "Layer-wise relevance propagation decomponeert neurale netwerk voorspellingen door relevantie scores achterwaarts te herdistribueren door netwerklagen, wat de finale voorspelling toeschrijft aan individuele input features op wiskundig gefundeerde wijze."
        }
      },
      {
        question: {
                  "en": "What is 'integrated gradients' explanation method?",
                  "es": "Que es el metodo de explicacion 'gradientes integrados'?",
                  "de": "Was ist die 'integrierte Gradienten' Erklaerungsmethode?",
                  "nl": "Wat is de 'integrated gradients' verklaringsmethode?"
        },
        options: [
        {
                  "en": "Unified gradient calculation across layers",
                  "es": "Calculo de gradiente unificado entre capas",
                  "de": "Einheitliche Gradientenberechnung ueber Schichten",
                  "nl": "Geünificeerde gradiënt berekening over lagen"
        },
        {
                  "en": "Merging gradients from different models",
                  "es": "Fusionar gradientes de diferentes modelos",
                  "de": "Gradienten von verschiedenen Modellen verschmelzen",
                  "nl": "Gradiënten van verschillende modellen samenvoegen"
        },
        {
                  "en": "Attribution method that integrates gradients along path from baseline to actual input",
                  "es": "Metodo de atribucion que integra gradientes a lo largo del camino desde linea base hasta entrada real",
                  "de": "Attributionsmethode die Gradienten entlang Pfad von Basislinie bis tatsaechlicher Eingabe integriert",
                  "nl": "Attributie methode die gradiënten integreert langs pad van baseline naar werkelijke input"
        },
        {
                  "en": "Combining multiple gradient descent algorithms",
                  "es": "Combinar multiples algoritmos de descenso de gradiente",
                  "de": "Mehrere Gradientenabstiegsalgorithmen kombinieren",
                  "nl": "Meerdere gradient descent algoritmes combineren"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Integrated gradients computes feature attributions by accumulating gradients along a path from a baseline input (typically all zeros) to the actual input, satisfying desirable axioms like sensitivity and implementation invariance.",
                  "es": "Los gradientes integrados computan atribuciones de caracteristicas acumulando gradientes a lo largo de un camino desde entrada de linea base (tipicamente todos ceros) hasta entrada real, satisfaciendo axiomas deseables como sensibilidad e invariancia de implementacion.",
                  "de": "Integrierte Gradienten berechnen Merkmalszuordnungen durch Akkumulation von Gradienten entlang eines Pfades von einer Basiseingabe (typischerweise alle Nullen) zur tatsaechlichen Eingabe, wodurch wuenschenswerte Axiome wie Sensitivitaet und Implementierungsinvarianz erfuellt werden.",
                  "nl": "Integrated gradients berekent feature attributies door gradiënten te accumuleren langs een pad van een baseline input (typisch alle nullen) naar de werkelijke input, wat gewenste axioma's zoals gevoeligheid en implementatie-invariantie bevredigt."
        }
      },
      {
        question: {
                  "en": "What is 'concept-based explanation' in AI?",
                  "es": "Que es 'explicacion basada en conceptos' en IA?",
                  "de": "Was ist 'konzeptbasierte Erklaerung' in der KI?",
                  "nl": "Wat is 'concept-gebaseerde verklaring' in AI?"
        },
        options: [
        {
                  "en": "Creating abstract models of AI behavior",
                  "es": "Crear modelos abstractos de comportamiento de IA",
                  "de": "Abstrakte Modelle von KI-Verhalten erstellen",
                  "nl": "Abstracte modellen van AI gedrag creëren"
        },
        {
                  "en": "Defining core ideas behind AI algorithms",
                  "es": "Definir ideas centrales detras de algoritmos de IA",
                  "de": "Kernideen hinter KI-Algorithmen definieren",
                  "nl": "Kernideeën achter AI algoritmes definiëren"
        },
        {
                  "en": "Categorizing explanations by topic",
                  "es": "Categorizar explicaciones por tema",
                  "de": "Erklaerungen nach Thema kategorisieren",
                  "nl": "Verklaringen categoriseren op onderwerp"
        },
        {
                  "en": "Explaining predictions using high-level human-understandable concepts rather than raw features",
                  "es": "Explicar predicciones usando conceptos de alto nivel comprensibles para humanos en vez de caracteristicas crudas",
                  "de": "Vorhersagen mit hochrangigen menschenverstaendlichen Konzepten erklaeren anstatt rohen Merkmalen",
                  "nl": "Voorspellingen uitleggen met hoog-niveau menselijk begrijpelijke concepten in plaats van ruwe features"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Concept-based explanations interpret model predictions in terms of higher-level concepts meaningful to humans (like 'striped', 'furry', 'dangerous') rather than individual pixels or low-level features, bridging the semantic gap between models and users.",
                  "es": "Las explicaciones basadas en conceptos interpretan predicciones del modelo en terminos de conceptos de nivel superior significativos para humanos (como 'rayado', 'peludo', 'peligroso') en lugar de pixeles individuales o caracteristicas de bajo nivel, cerrando la brecha semantica entre modelos y usuarios.",
                  "de": "Konzeptbasierte Erklaerungen interpretieren Modellvorhersagen in Begriffen von hoeheren Konzepten die fuer Menschen bedeutsam sind (wie 'gestreift', 'pelzig', 'gefaehrlich') anstatt einzelner Pixel oder niedrigrangiger Merkmale, wodurch die semantische Luecke zwischen Modellen und Nutzern ueberbrueckt wird.",
                  "nl": "Concept-gebaseerde verklaringen interpreteren modelvoorspellingen in termen van hoger-niveau concepten die betekenisvol zijn voor mensen (zoals 'gestreept', 'harig', 'gevaarlijk') in plaats van individuele pixels of laag-niveau features, wat de semantische kloof tussen modellen en gebruikers overbrugt."
        }
      },
      {
        question: {
                  "en": "What is 'influence functions' in model debugging?",
                  "es": "Que son 'funciones de influencia' en depuracion de modelos?",
                  "de": "Was sind 'Einflussfunktionen' beim Modell-Debugging?",
                  "nl": "Wat zijn 'influence functions' in model debugging?"
        },
        options: [
        {
                  "en": "Impact measurements of hyperparameters",
                  "es": "Mediciones de impacto de hiperparametros",
                  "de": "Auswirkungsmessungen von Hyperparametern",
                  "nl": "Impact metingen van hyperparameters"
        },
        {
                  "en": "Mathematical formulas for model predictions",
                  "es": "Formulas matematicas para predicciones del modelo",
                  "de": "Mathematische Formeln fuer Modellvorhersagen",
                  "nl": "Wiskundige formules voor modelvoorspellingen"
        },
        {
                  "en": "Methods identifying which training examples most influenced specific predictions",
                  "es": "Metodos que identifican que ejemplos de entrenamiento mas influyeron en predicciones especificas",
                  "de": "Methoden die identifizieren welche Trainingsbeispiele spezifische Vorhersagen am meisten beeinflussten",
                  "nl": "Methoden die identificeren welke trainingsvoorbeelden specifieke voorspellingen het meest beïnvloedden"
        },
        {
                  "en": "Functions that control model behavior",
                  "es": "Funciones que controlan comportamiento del modelo",
                  "de": "Funktionen die Modellverhalten steuern",
                  "nl": "Functies die modelgedrag controleren"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Influence functions trace model predictions back to individual training examples, revealing which training data points had the most impact on specific predictions and helping identify problematic training data or understand model behavior.",
                  "es": "Las funciones de influencia rastrean predicciones del modelo hasta ejemplos de entrenamiento individuales, revelando que puntos de datos de entrenamiento tuvieron mayor impacto en predicciones especificas y ayudando a identificar datos de entrenamiento problematicos o entender comportamiento del modelo.",
                  "de": "Einflussfunktionen verfolgen Modellvorhersagen zurueck zu einzelnen Trainingsbeispielen, enthullen welche Trainingsdatenpunkte den groessten Einfluss auf spezifische Vorhersagen hatten und helfen problematische Trainingsdaten zu identifizieren oder Modellverhalten zu verstehen.",
                  "nl": "Influence functions traceren modelvoorspellingen terug naar individuele trainingsvoorbeelden, onthullen welke trainingsdatapunten de grootste impact hadden op specifieke voorspellingen en helpen problematische trainingsdata te identificeren of modelgedrag te begrijpen."
        }
      },
      {
        question: {
                  "en": "What is 'prototype-based explanation'?",
                  "es": "Que es 'explicacion basada en prototipos'?",
                  "de": "Was ist 'prototypbasierte Erklaerung'?",
                  "nl": "Wat is 'prototype-gebaseerde verklaring'?"
        },
        options: [
        {
                  "en": "Using preliminary versions of AI models",
                  "es": "Usar versiones preliminares de modelos de IA",
                  "de": "Vorlaeufige Versionen von KI-Modellen verwenden",
                  "nl": "Voorlopige versies van AI modellen gebruiken"
        },
        {
                  "en": "Creating template explanations for all predictions",
                  "es": "Crear explicaciones de plantilla para todas las predicciones",
                  "de": "Vorlagenerklaerungen fuer alle Vorhersagen erstellen",
                  "nl": "Template verklaringen creëren voor alle voorspellingen"
        },
        {
                  "en": "Explaining predictions by showing similar representative examples from training data",
                  "es": "Explicar predicciones mostrando ejemplos representativos similares de datos de entrenamiento",
                  "de": "Vorhersagen erklaeren durch Zeigen aehnlicher repraesentativer Beispiele aus Trainingsdaten",
                  "nl": "Voorspellingen uitleggen door vergelijkbare representatieve voorbeelden uit trainingsdata te tonen"
        },
        {
                  "en": "Explaining models during development phase",
                  "es": "Explicar modelos durante fase de desarrollo",
                  "de": "Modelle waehrend Entwicklungsphase erklaeren",
                  "nl": "Modellen uitleggen tijdens ontwikkelingsfase"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Prototype-based explanations help users understand model predictions by presenting representative training examples (prototypes) that are similar to the input being classified, making abstract model decisions more concrete and relatable.",
                  "es": "Las explicaciones basadas en prototipos ayudan a usuarios entender predicciones del modelo presentando ejemplos de entrenamiento representativos (prototipos) que son similares a la entrada siendo clasificada, haciendo decisiones abstractas del modelo mas concretas y relacionables.",
                  "de": "Prototypbasierte Erklaerungen helfen Nutzern Modellvorhersagen zu verstehen indem repraesentative Trainingsbeispiele (Prototypen) praesentiert werden die der zu klassifizierenden Eingabe aehnlich sind, wodurch abstrakte Modellentscheidungen konkreter und nachvollziehbarer werden.",
                  "nl": "Prototype-gebaseerde verklaringen helpen gebruikers modelvoorspellingen te begrijpen door representatieve trainingsvoorbeelden (prototypes) te presenteren die vergelijkbaar zijn met de input die geclassificeerd wordt, wat abstracte modelbeslissingen concreter en herkenbaarder maakt."
        }
      },
      {
        question: {
                  "en": "What is 'example-based explanation'?",
                  "es": "Que es 'explicacion basada en ejemplos'?",
                  "de": "Was ist 'beispielbasierte Erklaerung'?",
                  "nl": "Wat is 'voorbeeld-gebaseerde verklaring'?"
        },
        options: [
        {
                  "en": "Using similar past cases to justify current predictions",
                  "es": "Usar casos pasados similares para justificar predicciones actuales",
                  "de": "Aehnliche vergangene Faelle verwenden um aktuelle Vorhersagen zu begruenden",
                  "nl": "Vergelijkbare eerdere gevallen gebruiken om huidige voorspellingen te rechtvaardigen"
        },
        {
                  "en": "Providing sample code for AI implementation",
                  "es": "Proporcionar codigo de muestra para implementacion de IA",
                  "de": "Beispielcode fuer KI-Implementierung bereitstellen",
                  "nl": "Voorbeeldcode geven voor AI implementatie"
        },
        {
                  "en": "Demonstrating AI features with tutorials",
                  "es": "Demostrar caracteristicas de IA con tutoriales",
                  "de": "KI-Funktionen mit Tutorials demonstrieren",
                  "nl": "AI features demonstreren met tutorials"
        },
        {
                  "en": "Teaching models through examples",
                  "es": "Ensenar modelos a traves de ejemplos",
                  "de": "Modelle durch Beispiele lehren",
                  "nl": "Modellen leren door voorbeelden"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Example-based explanations leverage case-based reasoning, explaining predictions by retrieving and presenting similar instances from the training set, helping users understand model decisions through familiar analogies rather than abstract rules.",
                  "es": "Las explicaciones basadas en ejemplos aprovechan razonamiento basado en casos, explicando predicciones recuperando y presentando instancias similares del conjunto de entrenamiento, ayudando a usuarios entender decisiones del modelo a traves de analogias familiares en lugar de reglas abstractas.",
                  "de": "Beispielbasierte Erklaerungen nutzen fallbasiertes Schliessen, erklaeren Vorhersagen durch Abrufen und Praesentieren aehnlicher Instanzen aus dem Trainingssatz, helfen Nutzern Modellentscheidungen durch vertraute Analogien anstatt abstrakter Regeln zu verstehen.",
                  "nl": "Voorbeeld-gebaseerde verklaringen benutten case-based reasoning, leggen voorspellingen uit door vergelijkbare instanties uit de trainingsset op te halen en te presenteren, helpen gebruikers modelbeslissingen te begrijpen via bekende analogieën in plaats van abstracte regels."
        }
      },
      {
        question: {
                  "en": "What is 'GradCAM' in visual model explanation?",
                  "es": "Que es 'GradCAM' en explicacion de modelos visuales?",
                  "de": "Was ist 'GradCAM' in visueller Modellerklaerung?",
                  "nl": "Wat is 'GradCAM' in visuele model verklaring?"
        },
        options: [
        {
                  "en": "Gradient camera for capturing training images",
                  "es": "Camara de gradiente para capturar imagenes de entrenamiento",
                  "de": "Gradienten-Kamera zum Aufnehmen von Trainingsbildern",
                  "nl": "Gradient camera voor het vastleggen van trainingsbeelden"
        },
        {
                  "en": "Gradient-weighted Class Activation Mapping showing important regions for CNN predictions",
                  "es": "Mapeo de Activacion de Clase Ponderado por Gradiente mostrando regiones importantes para predicciones CNN",
                  "de": "Gradientengewichtetes Klassenaktivierungs-Mapping das wichtige Regionen fuer CNN-Vorhersagen zeigt",
                  "nl": "Gradiënt-gewogen Klasse Activatie Mapping die belangrijke regio's toont voor CNN voorspellingen"
        },
        {
                  "en": "Graph-based computational model",
                  "es": "Modelo computacional basado en grafos",
                  "de": "Graphenbasiertes Rechenmodell",
                  "nl": "Graph-gebaseerd computationeel model"
        },
        {
                  "en": "Graduated color mapping for visualizations",
                  "es": "Mapeo de color graduado para visualizaciones",
                  "de": "Abgestuftes Farb-Mapping fuer Visualisierungen",
                  "nl": "Gegradeerd kleur mapping voor visualisaties"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Gradient-weighted Class Activation Mapping (GradCAM) produces visual explanations for CNN decisions by highlighting which regions of input images were most important for predictions, using gradient information to weight activation maps.",
                  "es": "El Mapeo de Activacion de Clase Ponderado por Gradiente (GradCAM) produce explicaciones visuales para decisiones de CNN resaltando que regiones de imagenes de entrada fueron mas importantes para predicciones, usando informacion de gradiente para ponderar mapas de activacion.",
                  "de": "Gradientengewichtetes Klassenaktivierungs-Mapping (GradCAM) produziert visuelle Erklaerungen fuer CNN-Entscheidungen durch Hervorhebung welche Regionen von Eingabebildern am wichtigsten fuer Vorhersagen waren, wobei Gradienteninformationen verwendet werden um Aktivierungskarten zu gewichten.",
                  "nl": "Gradiënt-gewogen Klasse Activatie Mapping (GradCAM) produceert visuele verklaringen voor CNN beslissingen door te benadrukken welke regio's van input afbeeldingen het belangrijkst waren voor voorspellingen, door gradient informatie te gebruiken om activatie maps te wegen."
        }
      },
      {
        question: {
                  "en": "What is 'decision tree approximation' for explaining complex models?",
                  "es": "Que es 'aproximacion de arbol de decision' para explicar modelos complejos?",
                  "de": "Was ist 'Entscheidungsbaum-Approximation' zur Erklaerung komplexer Modelle?",
                  "nl": "Wat is 'beslissingsboom benadering' voor uitleg van complexe modellen?"
        },
        options: [
        {
                  "en": "Pruning decision trees for efficiency",
                  "es": "Podar arboles de decision para eficiencia",
                  "de": "Entscheidungsbaeume zur Effizienz beschneiden",
                  "nl": "Beslissingsbomen snoeien voor efficiëntie"
        },
        {
                  "en": "Converting neural networks to decision trees",
                  "es": "Convertir redes neuronales a arboles de decision",
                  "de": "Neuronale Netzwerke in Entscheidungsbaeume konvertieren",
                  "nl": "Neurale netwerken converteren naar beslissingsbomen"
        },
        {
                  "en": "Estimating optimal tree depth for training",
                  "es": "Estimar profundidad optima de arbol para entrenamiento",
                  "de": "Optimale Baumtiefe fuer Training schaetzen",
                  "nl": "Optimale boomdiepte schatten voor training"
        },
        {
                  "en": "Using simpler decision trees to approximate and explain complex black-box model behavior",
                  "es": "Usar arboles de decision mas simples para aproximar y explicar comportamiento de modelos de caja negra complejos",
                  "de": "Einfachere Entscheidungsbaeume verwenden um komplexes Black-Box-Modellverhalten zu approximieren und zu erklaeren",
                  "nl": "Eenvoudigere beslissingsbomen gebruiken om complex black-box model gedrag te benaderen en uit te leggen"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Decision tree approximation creates interpretable decision tree surrogates that mimic complex model behavior, providing rule-based explanations that are easier for humans to understand while approximating the original model's decisions.",
                  "es": "La aproximacion de arbol de decision crea sustitutos de arboles de decision interpretables que imitan comportamiento de modelo complejo, proporcionando explicaciones basadas en reglas mas faciles de entender para humanos mientras aproximan decisiones del modelo original.",
                  "de": "Entscheidungsbaum-Approximation erstellt interpretierbare Entscheidungsbaum-Surrogate die komplexes Modellverhalten nachahmen, bieten regelbasierte Erklaerungen die fuer Menschen leichter verstaendlich sind waehrend die Entscheidungen des urspruenglichen Modells approximiert werden.",
                  "nl": "Beslissingsboom benadering creëert interpreteerbare beslissingsboom surrogaten die complex modelgedrag imiteren, bieden regel-gebaseerde verklaringen die gemakkelijker te begrijpen zijn voor mensen terwijl ze de beslissingen van het originele model benaderen."
        }
      },
      {
        question: {
                  "en": "What is 'rule extraction' from neural networks?",
                  "es": "Que es 'extraccion de reglas' de redes neuronales?",
                  "de": "Was ist 'Regelextraktion' aus neuronalen Netzwerken?",
                  "nl": "Wat is 'regel extractie' uit neurale netwerken?"
        },
        options: [
        {
                  "en": "Converting neural network knowledge into explicit if-then rules for interpretability",
                  "es": "Convertir conocimiento de red neuronal en reglas if-then explicitas para interpretabilidad",
                  "de": "Neuronales Netzwerk-Wissen in explizite Wenn-Dann-Regeln fuer Interpretierbarkeit konvertieren",
                  "nl": "Neuraal netwerk kennis converteren naar expliciete if-then regels voor interpreteerbaarheid"
        },
        {
                  "en": "Mining training rules from hyperparameters",
                  "es": "Minar reglas de entrenamiento de hiperparametros",
                  "de": "Trainingsregeln aus Hyperparametern extrahieren",
                  "nl": "Trainingsregels uit hyperparameters delven"
        },
        {
                  "en": "Extracting data validation rules from inputs",
                  "es": "Extraer reglas de validacion de datos de entradas",
                  "de": "Datenvalidierungsregeln aus Eingaben extrahieren",
                  "nl": "Data validatie regels uit inputs halen"
        },
        {
                  "en": "Finding mathematical formulas in network weights",
                  "es": "Encontrar formulas matematicas en pesos de red",
                  "de": "Mathematische Formeln in Netzwerkgewichten finden",
                  "nl": "Wiskundige formules vinden in netwerk gewichten"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Rule extraction techniques transform learned neural network representations into symbolic, human-readable rules (like 'IF feature X > threshold AND feature Y < value THEN class A'), making implicit network knowledge explicit and understandable.",
                  "es": "Las tecnicas de extraccion de reglas transforman representaciones de redes neuronales aprendidas en reglas simbolicas legibles para humanos (como 'SI caracteristica X > umbral Y caracteristica Y < valor ENTONCES clase A'), haciendo conocimiento implicito de red explicito y comprensible.",
                  "de": "Regelextraktionstechniken transformieren gelernte neuronale Netzwerkrepresentationen in symbolische, menschenlesbare Regeln (wie 'WENN Merkmal X > Schwelle UND Merkmal Y < Wert DANN Klasse A'), machen implizites Netzwerkwissen explizit und verstaendlich.",
                  "nl": "Regel extractie technieken transformeren geleerde neurale netwerk representaties naar symbolische, menselijk leesbare regels (zoals 'ALS feature X > drempel EN feature Y < waarde DAN klasse A'), maken impliciete netwerk kennis expliciet en begrijpelijk."
        }
      },
      {
        question: {
                  "en": "What is 'sensitivity analysis' in model interpretability?",
                  "es": "Que es 'analisis de sensibilidad' en interpretabilidad de modelos?",
                  "de": "Was ist 'Sensitivitaetsanalyse' in Modellinterpretierbarkeit?",
                  "nl": "Wat is 'gevoeligheidsanalyse' in model interpreteerbaarheid?"
        },
        options: [
        {
                  "en": "Measuring emotional responses of AI systems",
                  "es": "Medir respuestas emocionales de sistemas de IA",
                  "de": "Emotionale Reaktionen von KI-Systemen messen",
                  "nl": "Emotionele reacties van AI systemen meten"
        },
        {
                  "en": "Analyzing training data quality",
                  "es": "Analizar calidad de datos de entrenamiento",
                  "de": "Trainingsdatenqualitaet analysieren",
                  "nl": "Trainingsdata kwaliteit analyseren"
        },
        {
                  "en": "Examining how model outputs change when inputs are perturbed",
                  "es": "Examinar como salidas del modelo cambian cuando entradas son perturbadas",
                  "de": "Untersuchen wie Modellausgaben sich aendern wenn Eingaben gestoert werden",
                  "nl": "Onderzoeken hoe model outputs veranderen wanneer inputs verstoord worden"
        },
        {
                  "en": "Testing model robustness to noise",
                  "es": "Probar robustez del modelo al ruido",
                  "de": "Modellrobustheit gegenueber Rauschen testen",
                  "nl": "Model robuustheid tegen ruis testen"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Sensitivity analysis systematically varies input features to observe corresponding changes in model predictions, revealing which inputs most strongly influence outputs and helping understand model decision boundaries and feature importance.",
                  "es": "El analisis de sensibilidad varia sistematicamente caracteristicas de entrada para observar cambios correspondientes en predicciones del modelo, revelando que entradas influyen mas fuertemente en salidas y ayudando a entender limites de decision del modelo e importancia de caracteristicas.",
                  "de": "Sensitivitaetsanalyse variiert systematisch Eingabemerkmale um entsprechende Aenderungen in Modellvorhersagen zu beobachten, enthullt welche Eingaben Ausgaben am staerksten beeinflussen und hilft Modellentscheidungsgrenzen und Merkmalswichtigkeit zu verstehen.",
                  "nl": "Gevoeligheidsanalyse varieert systematisch input features om overeenkomstige veranderingen in modelvoorspellingen te observeren, onthult welke inputs outputs het sterkst beïnvloeden en helpt model beslissingsgrenzen en feature belangrijkheid te begrijpen."
        }
      },
      {
        question: {
                  "en": "What is 'contrastive explanation' in AI?",
                  "es": "Que es 'explicacion contrastiva' en IA?",
                  "de": "Was ist 'kontrastive Erklaerung' in der KI?",
                  "nl": "Wat is 'contrastieve verklaring' in AI?"
        },
        options: [
        {
                  "en": "Using high-contrast visualizations",
                  "es": "Usar visualizaciones de alto contraste",
                  "de": "Hochkontrast-Visualisierungen verwenden",
                  "nl": "Hoog-contrast visualisaties gebruiken"
        },
        {
                  "en": "Explaining why model chose one class over another by highlighting differences",
                  "es": "Explicar por que modelo eligio una clase sobre otra resaltando diferencias",
                  "de": "Erklaeren warum Modell eine Klasse gegenueber einer anderen waehlte durch Hervorhebung von Unterschieden",
                  "nl": "Uitleggen waarom model één klasse boven een andere koos door verschillen te benadrukken"
        },
        {
                  "en": "Comparing multiple AI models side by side",
                  "es": "Comparar multiples modelos de IA lado a lado",
                  "de": "Mehrere KI-Modelle nebeneinander vergleichen",
                  "nl": "Meerdere AI modellen naast elkaar vergelijken"
        },
        {
                  "en": "Highlighting errors versus correct predictions",
                  "es": "Destacar errores versus predicciones correctas",
                  "de": "Fehler versus korrekte Vorhersagen hervorheben",
                  "nl": "Fouten versus correcte voorspellingen benadrukken"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Contrastive explanations answer 'why P rather than Q?' questions, explaining model decisions by contrasting the chosen prediction with relevant alternatives, focusing on discriminative features that distinguished between options.",
                  "es": "Las explicaciones contrastivas responden preguntas 'por que P en lugar de Q?', explicando decisiones del modelo contrastando la prediccion elegida con alternativas relevantes, enfocandose en caracteristicas discriminativas que distinguieron entre opciones.",
                  "de": "Kontrastive Erklaerungen beantworten 'warum P anstatt Q?' Fragen, erklaeren Modellentscheidungen durch Kontrastierung der gewaehlten Vorhersage mit relevanten Alternativen, fokussieren auf diskriminative Merkmale die zwischen Optionen unterschieden.",
                  "nl": "Contrastieve verklaringen beantwoorden 'waarom P in plaats van Q?' vragen, leggen modelbeslissingen uit door de gekozen voorspelling te contrasteren met relevante alternatieven, focussen op discriminatieve features die onderscheid maakten tussen opties."
        }
      },
      {
        question: {
                  "en": "What is 'semantic explanation' versus 'statistical explanation'?",
                  "es": "Que es 'explicacion semantica' versus 'explicacion estadistica'?",
                  "de": "Was ist 'semantische Erklaerung' versus 'statistische Erklaerung'?",
                  "nl": "Wat is 'semantische verklaring' versus 'statistische verklaring'?"
        },
        options: [
        {
                  "en": "Semantic is for NLP; statistical is for other domains",
                  "es": "Semantica es para NLP; estadistica es para otros dominios",
                  "de": "Semantisch ist fuer NLP; statistisch ist fuer andere Domaenen",
                  "nl": "Semantisch is voor NLP; statistisch is voor andere domeinen"
        },
        {
                  "en": "Semantic uses meaningful concepts; statistical uses numerical feature correlations",
                  "es": "Semantica usa conceptos significativos; estadistica usa correlaciones de caracteristicas numericas",
                  "de": "Semantisch verwendet bedeutungsvolle Konzepte; statistisch verwendet numerische Merkmalskorrelationen",
                  "nl": "Semantisch gebruikt betekenisvolle concepten; statistisch gebruikt numerieke feature correlaties"
        },
        {
                  "en": "Semantic uses words; statistical uses numbers",
                  "es": "Semantica usa palabras; estadistica usa numeros",
                  "de": "Semantisch verwendet Woerter; statistisch verwendet Zahlen",
                  "nl": "Semantisch gebruikt woorden; statistisch gebruikt getallen"
        },
        {
                  "en": "Semantic is qualitative; statistical is always quantitative",
                  "es": "Semantica es cualitativa; estadistica es siempre cuantitativa",
                  "de": "Semantisch ist qualitativ; statistisch ist immer quantitativ",
                  "nl": "Semantisch is kwalitatief; statistisch is altijd kwantitatief"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Semantic explanations provide interpretations in terms of high-level, domain-meaningful concepts that humans naturally understand, while statistical explanations rely on correlations between raw features or numerical patterns, which may be less intuitive.",
                  "es": "Las explicaciones semanticas proporcionan interpretaciones en terminos de conceptos de alto nivel significativos para el dominio que humanos entienden naturalmente, mientras que explicaciones estadisticas dependen de correlaciones entre caracteristicas crudas o patrones numericos que pueden ser menos intuitivos.",
                  "de": "Semantische Erklaerungen bieten Interpretationen in Begriffen hochrangiger, domaenen-bedeutsamer Konzepte die Menschen natuerlich verstehen, waehrend statistische Erklaerungen auf Korrelationen zwischen rohen Merkmalen oder numerischen Mustern beruhen die weniger intuitiv sein koennen.",
                  "nl": "Semantische verklaringen bieden interpretaties in termen van hoog-niveau, domein-betekenisvolle concepten die mensen natuurlijk begrijpen, terwijl statistische verklaringen vertrouwen op correlaties tussen ruwe features of numerieke patronen die minder intuïtief kunnen zijn."
        }
      },
      {
        question: {
                  "en": "What is 'faithfulness' of explanations in XAI?",
                  "es": "Que es 'fidelidad' de explicaciones en XAI?",
                  "de": "Was ist 'Treue' von Erklaerungen in XAI?",
                  "nl": "Wat is 'trouwheid' van verklaringen in XAI?"
        },
        options: [
        {
                  "en": "User trust in AI explanations",
                  "es": "Confianza de usuario en explicaciones de IA",
                  "de": "Nutzervertrauen in KI-Erklaerungen",
                  "nl": "Gebruikersvertrouwen in AI verklaringen"
        },
        {
                  "en": "How accurately explanations reflect actual model decision-making processes",
                  "es": "Que tan precisamente explicaciones reflejan procesos reales de toma de decisiones del modelo",
                  "de": "Wie genau Erklaerungen tatsaechliche Modellentscheidungsprozesse widerspiegeln",
                  "nl": "Hoe nauwkeurig verklaringen werkelijke model besluitvormingsprocessen weerspiegelen"
        },
        {
                  "en": "Consistency of explanations over time",
                  "es": "Consistencia de explicaciones a lo largo del tiempo",
                  "de": "Konsistenz von Erklaerungen ueber Zeit",
                  "nl": "Consistentie van verklaringen over tijd"
        },
        {
                  "en": "Reliability of explanation methods",
                  "es": "Confiabilidad de metodos de explicacion",
                  "de": "Zuverlaessigkeit von Erklaerungsmethoden",
                  "nl": "Betrouwbaarheid van verklaringsmethoden"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Faithfulness measures whether explanations truly represent how the model makes decisions rather than providing plausible-sounding but inaccurate justifications, ensuring explanations are trustworthy and not misleading.",
                  "es": "La fidelidad mide si explicaciones realmente representan como el modelo toma decisiones en lugar de proporcionar justificaciones que suenan plausibles pero inexactas, asegurando que explicaciones sean confiables y no enganosas.",
                  "de": "Treue misst ob Erklaerungen wirklich darstellen wie das Modell Entscheidungen trifft anstatt plausibel klingende aber ungenaue Begruendungen zu liefern, stellt sicher dass Erklaerungen vertrauenswuerdig und nicht irrefuehrend sind.",
                  "nl": "Trouwheid meet of verklaringen werkelijk weergeven hoe het model beslissingen neemt in plaats van aannemelijk klinkende maar onnauwkeurige rechtvaardigingen te geven, zorgt ervoor dat verklaringen betrouwbaar en niet misleidend zijn."
        }
      },
      {
        question: {
                  "en": "What is 'simulatability' in interpretable AI?",
                  "es": "Que es 'simulabilidad' en IA interpretable?",
                  "de": "Was ist 'Simulierbarkeit' in interpretierbarer KI?",
                  "nl": "Wat is 'simuleerbaarheid' in interpreteerbare AI?"
        },
        options: [
        {
                  "en": "Testing models with synthetic data",
                  "es": "Probar modelos con datos sinteticos",
                  "de": "Modelle mit synthetischen Daten testen",
                  "nl": "Modellen testen met synthetische data"
        },
        {
                  "en": "Whether humans can mentally simulate model's decision process for given inputs",
                  "es": "Si humanos pueden simular mentalmente proceso de decision del modelo para entradas dadas",
                  "de": "Ob Menschen den Entscheidungsprozess des Modells fuer gegebene Eingaben mental simulieren koennen",
                  "nl": "Of mensen mentaal het beslissingsproces van het model kunnen simuleren voor gegeven inputs"
        },
        {
                  "en": "Ability to run model in simulation environments",
                  "es": "Capacidad de ejecutar modelo en entornos de simulacion",
                  "de": "Faehigkeit Modell in Simulationsumgebungen auszufuehren",
                  "nl": "Vermogen om model in simulatieomgevingen te draaien"
        },
        {
                  "en": "Creating virtual copies of AI systems",
                  "es": "Crear copias virtuales de sistemas de IA",
                  "de": "Virtuelle Kopien von KI-Systemen erstellen",
                  "nl": "Virtuele kopieën van AI systemen creëren"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Simulatability means a human can step through the model's entire computation in their head, understanding each step. Simple models like short decision trees are simulatable; deep neural networks typically are not.",
                  "es": "Simulabilidad significa que un humano puede recorrer toda la computacion del modelo en su cabeza, entendiendo cada paso. Modelos simples como arboles de decision cortos son simulables; redes neuronales profundas tipicamente no lo son.",
                  "de": "Simulierbarkeit bedeutet dass ein Mensch die gesamte Berechnung des Modells im Kopf durchgehen kann wobei jeder Schritt verstanden wird. Einfache Modelle wie kurze Entscheidungsbaeume sind simulierbar; tiefe neuronale Netzwerke typischerweise nicht.",
                  "nl": "Simuleerbaarheid betekent dat een mens de hele berekening van het model in hun hoofd kan doorlopen, elke stap begrijpend. Eenvoudige modellen zoals korte beslissingsbomen zijn simuleerbaar; diepe neurale netwerken typisch niet."
        }
      },
      {
        question: {
                  "en": "What is 'decomposability' in model interpretability?",
                  "es": "Que es 'descomponibilidad' en interpretabilidad de modelos?",
                  "de": "Was ist 'Zerlegbarkeit' in Modellinterpretierbarkeit?",
                  "nl": "Wat is 'ontleedbaarheid' in model interpreteerbaarheid?"
        },
        options: [
        {
                  "en": "Modular architecture design",
                  "es": "Diseno de arquitectura modular",
                  "de": "Modulares Architekturdesign",
                  "nl": "Modulair architectuur ontwerp"
        },
        {
                  "en": "Separating training and inference phases",
                  "es": "Separar fases de entrenamiento e inferencia",
                  "de": "Trainings- und Inferenzphasen trennen",
                  "nl": "Trainings- en inferentie fasen scheiden"
        },
        {
                  "en": "Whether each part of model (input, parameters, calculations) is interpretable individually",
                  "es": "Si cada parte del modelo (entrada, parametros, calculos) es interpretable individualmente",
                  "de": "Ob jeder Teil des Modells (Eingabe, Parameter, Berechnungen) einzeln interpretierbar ist",
                  "nl": "Of elk deel van model (input, parameters, berekeningen) individueel interpreteerbaar is"
        },
        {
                  "en": "Breaking models into smaller sub-models",
                  "es": "Dividir modelos en submodelos mas pequenos",
                  "de": "Modelle in kleinere Teilmodelle aufteilen",
                  "nl": "Modellen opdelen in kleinere sub-modellen"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Decomposability requires that every component of the model - inputs, parameters, and intermediate calculations - admits an intuitive explanation, allowing complete understanding by examining individual parts.",
                  "es": "La descomponibilidad requiere que cada componente del modelo - entradas, parametros y calculos intermedios - admita una explicacion intuitiva, permitiendo comprension completa examinando partes individuales.",
                  "de": "Zerlegbarkeit erfordert dass jede Komponente des Modells - Eingaben, Parameter und Zwischenberechnungen - eine intuitive Erklaerung zulaesst, was vollstaendiges Verstaendnis durch Untersuchung einzelner Teile ermoeglicht.",
                  "nl": "Ontleedbaarheid vereist dat elke component van het model - inputs, parameters en tussenberekeningen - een intuïtieve verklaring toestaat, wat volledig begrip mogelijk maakt door individuele delen te onderzoeken."
        }
      },
      {
        question: {
                  "en": "What is 'algorithmic transparency requirement' in AI regulation?",
                  "es": "Que es 'requisito de transparencia algoritmica' en regulacion de IA?",
                  "de": "Was ist 'algorithmische Transparenzanforderung' in KI-Regulierung?",
                  "nl": "Wat is 'algoritmische transparantie vereiste' in AI regelgeving?"
        },
        options: [
        {
                  "en": "Legal obligations to disclose AI system functionality and decision logic to stakeholders",
                  "es": "Obligaciones legales de divulgar funcionalidad de sistema IA y logica de decision a partes interesadas",
                  "de": "Gesetzliche Verpflichtungen KI-Systemfunktionalitaet und Entscheidungslogik Stakeholdern offenzulegen",
                  "nl": "Wettelijke verplichtingen om AI systeem functionaliteit en beslissingslogica aan belanghebbenden bekend te maken"
        },
        {
                  "en": "Publishing model architectures publicly",
                  "es": "Publicar arquitecturas de modelo publicamente",
                  "de": "Modellarchitekturen oeffentlich veroeffentlichen",
                  "nl": "Model architecturen publiek publiceren"
        },
        {
                  "en": "Providing API documentation",
                  "es": "Proporcionar documentacion de API",
                  "de": "API-Dokumentation bereitstellen",
                  "nl": "API documentatie verstrekken"
        },
        {
                  "en": "Making all AI code open source",
                  "es": "Hacer todo codigo de IA de codigo abierto",
                  "de": "Allen KI-Code Open Source machen",
                  "nl": "Alle AI code open source maken"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Algorithmic transparency requirements in regulations like GDPR and proposed AI Acts mandate that organizations deploying AI systems provide meaningful information about how algorithms work, enabling oversight and accountability.",
                  "es": "Los requisitos de transparencia algoritmica en regulaciones como GDPR y Actas de IA propuestas ordenan que organizaciones desplegando sistemas de IA proporcionen informacion significativa sobre como funcionan algoritmos, permitiendo supervision y responsabilidad.",
                  "de": "Algorithmische Transparenzanforderungen in Vorschriften wie GDPR und vorgeschlagenen KI-Gesetzen verpflichten Organisationen die KI-Systeme einsetzen aussagekraeftige Informationen darueber zu liefern wie Algorithmen funktionieren, was Aufsicht und Verantwortlichkeit ermoeglicht.",
                  "nl": "Algoritmische transparantie vereisten in regelgeving zoals GDPR en voorgestelde AI Acts verplichten organisaties die AI systemen inzetten om betekenisvolle informatie te verstrekken over hoe algoritmes werken, wat toezicht en verantwoordelijkheid mogelijk maakt."
        }
      }
    ]
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level4;
  }
})();