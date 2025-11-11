// AI Ethics Quiz - Level 4: Transparency and Explainability
(function() {
  const level4 = {
    name: {
      en: "AI Ethics Level 4",
      es: "Etica de IA Nivel 4",
      de: "KI-Ethik Stufe 4",
      nl: "AI Ethiek Level 4"
    },
    questions: [
      {
        question: {
          en: "What is 'consent fatigue' in the context of AI data collection?",
          es: "Que es la 'fatiga del consentimiento' en el contexto de recoleccion de datos de IA?",
          de: "Was ist 'Einwilligungsmuedigkeit' im Kontext der KI-Datensammlung?",
          nl: "Wat is 'toestemmingsmoeheid' in de context van AI data verzameling?"
        },
        options: [
          { en: "When people become overwhelmed by constant consent requests and agree without reading", es: "Cuando las personas se abruman por constantes solicitudes de consentimiento y aceptan sin leer", de: "Wenn Menschen von staendigen Einwilligungsanfragen ueberwaeltigt werden und zustimmen ohne zu lesen", nl: "Wanneer mensen overweldigd raken door constante toestemmingsverzoeken en instemmen zonder te lezen" },
          { en: "When consent forms are too long", es: "Cuando los formularios de consentimiento son demasiado largos", de: "Wenn Einwilligungsformulare zu lang sind", nl: "Wanneer toestemmingsformulieren te lang zijn" },
          { en: "When people get tired of AI", es: "Cuando las personas se cansan de la IA", de: "Wenn Menschen der KI muede werden", nl: "Wanneer mensen moe worden van AI" },
          { en: "When consent expires", es: "Cuando el consentimiento expira", de: "Wenn die Einwilligung ablaeuft", nl: "Wanneer toestemming verloopt" }
        ],
        correct: 0,
        explanation: {
          en: "Consent fatigue occurs when users are bombarded with so many permission requests that they stop carefully considering what they're agreeing to, undermining the principle of informed consent.",
          es: "La fatiga del consentimiento ocurre cuando los usuarios son bombardeados con tantas solicitudes de permiso que dejan de considerar cuidadosamente a que estan aceptando, socavando el principio del consentimiento informado.",
          de: "Einwilligungsmuedigkeit tritt auf wenn Nutzer mit so vielen Erlaubnisanfragen bombardiert werden dass sie aufhoeren sorgfaeltig zu bedenken wozu sie zustimmen, was das Prinzip der informierten Einwilligung untergraebt.",
          nl: "Toestemmingsmoeheid treedt op wanneer gebruikers gebombardeerd worden met zoveel toestemmingsverzoeken dat ze stoppen met zorgvuldig overwegen waar ze mee instemmen, wat het principe van geïnformeerde toestemming ondermijnt."
        }
      },
      {
        question: {
          en: "What is 'explainable AI' (XAI) designed to address?",
          es: "Que esta disenada para abordar la 'IA explicable' (XAI)?",
          de: "Was soll 'erklaerbare KI' (XAI) adressieren?",
          nl: "Wat is 'uitlegbare AI' (XAI) ontworpen om aan te pakken?"
        },
        options: [
          { en: "Making AI decisions understandable to humans", es: "Hacer las decisiones de IA comprensibles para humanos", de: "KI-Entscheidungen fuer Menschen verstaendlich machen", nl: "AI beslissingen begrijpelijk maken voor mensen" },
          { en: "Teaching AI to speak multiple languages", es: "Ensenar a la IA a hablar multiples idiomas", de: "KI mehrere Sprachen beibringen", nl: "AI meerdere talen leren spreken" },
          { en: "Making AI explain jokes", es: "Hacer que la IA explique chistes", de: "KI Witze erklaeren lassen", nl: "AI grappen laten uitleggen" },
          { en: "Creating AI user manuals", es: "Crear manuales de usuario de IA", de: "KI-Benutzerhandbuecher erstellen", nl: "AI gebruikershandleidingen maken" }
        ],
        correct: 0,
        explanation: {
          en: "Explainable AI aims to make AI decision-making processes transparent and interpretable, allowing humans to understand how and why specific decisions were made, which is crucial for trust and accountability.",
          es: "La IA explicable busca hacer los procesos de toma de decisiones de IA transparentes e interpretables, permitiendo a los humanos entender como y por que se tomaron decisiones especificas, lo cual es crucial para la confianza y responsabilidad.",
          de: "Erklaerbare KI zielt darauf ab KI-Entscheidungsprozesse transparent und interpretierbar zu machen, wodurch Menschen verstehen koennen wie und warum spezifische Entscheidungen getroffen wurden, was fuer Vertrauen und Verantwortlichkeit entscheidend ist.",
          nl: "Uitlegbare AI heeft als doel AI besluitvormingsprocessen transparant en interpreteerbaar te maken, waardoor mensen kunnen begrijpen hoe en waarom specifieke beslissingen genomen werden, wat cruciaal is voor vertrouwen en verantwoordelijkheid."
        }
      },
      {
        question: {
          en: "What is the 'right to explanation' under GDPR for AI decisions?",
          es: "Que es el 'derecho a explicacion' bajo GDPR para decisiones de IA?",
          de: "Was ist das 'Recht auf Erklaerung' unter DSGVO fuer KI-Entscheidungen?",
          nl: "Wat is het 'recht op uitleg' onder GDPR voor AI beslissingen?"
        },
        options: [
          { en: "The right to know why an AI made a specific decision about you", es: "El derecho a saber por que una IA tomo una decision especifica sobre ti", de: "Das Recht zu wissen warum eine KI eine spezifische Entscheidung ueber dich getroffen hat", nl: "Het recht om te weten waarom een AI een specifieke beslissing over jou nam" },
          { en: "The right to explain AI to others", es: "El derecho a explicar IA a otros", de: "Das Recht KI anderen zu erklaeren", nl: "Het recht om AI aan anderen uit te leggen" },
          { en: "The right to get AI training", es: "El derecho a recibir entrenamiento de IA", de: "Das Recht auf KI-Training", nl: "Het recht om AI training te krijgen" },
          { en: "The right to refuse all AI", es: "El derecho a rechazar toda IA", de: "Das Recht alle KI abzulehnen", nl: "Het recht om alle AI te weigeren" }
        ],
        correct: 0,
        explanation: {
          en: "Under GDPR, individuals have the right to receive meaningful information about the logic involved in automated decision-making that significantly affects them, ensuring transparency and accountability.",
          es: "Bajo GDPR, los individuos tienen el derecho a recibir informacion significativa sobre la logica involucrada en la toma de decisiones automatizada que les afecta significativamente, asegurando transparencia y responsabilidad.",
          de: "Unter der DSGVO haben Individuen das Recht aussagekraeftige Informationen ueber die Logik zu erhalten die bei automatisierten Entscheidungen involviert ist die sie erheblich betreffen, was Transparenz und Verantwortlichkeit sicherstellt.",
          nl: "Onder GDPR hebben individuen het recht om betekenisvolle informatie te ontvangen over de logica die betrokken is bij geautomatiseerde besluitvorming die hen significant beïnvloedt, wat transparantie en verantwoordelijkheid waarborgt."
        }
      },
      {
        question: {
          en: "What does 'AI governance framework' typically include?",
          es: "Que incluye tipicamente un 'marco de gobernanza de IA'?",
          de: "Was beinhaltet typischerweise ein 'KI-Governance-Rahmenwerk'?",
          nl: "Wat omvat een 'AI governance framework' typisch?"
        },
        options: [
          { en: "Government control of all AI", es: "Control gubernamental de toda IA", de: "Staatliche Kontrolle aller KI", nl: "Overheidscontrole over alle AI" },
          { en: "Policies, procedures, and oversight structures for responsible AI use", es: "Politicas, procedimientos y estructuras de supervision para uso responsable de IA", de: "Richtlinien, Verfahren und Aufsichtsstrukturen fuer verantwortungsvolle KI-Nutzung", nl: "Beleid, procedures en toezichtstructuren voor verantwoord AI gebruik" },
          { en: "Only technical specifications", es: "Solo especificaciones tecnicas", de: "Nur technische Spezifikationen", nl: "Alleen technische specificaties" },
          { en: "Marketing strategies for AI", es: "Estrategias de marketing para IA", de: "Marketing-Strategien fuer KI", nl: "Marketing strategieën voor AI" }
        ],
        correct: 1,
        explanation: {
          en: "AI governance frameworks establish comprehensive policies, procedures, accountability structures, and oversight mechanisms to ensure AI systems are developed and deployed responsibly, ethically, and in compliance with regulations.",
          es: "Los marcos de gobernanza de IA establecen politicas integrales, procedimientos, estructuras de responsabilidad y mecanismos de supervision para asegurar que los sistemas de IA se desarrollen y desplieguen de manera responsable, etica y en cumplimiento con regulaciones.",
          de: "KI-Governance-Rahmenwerke etablieren umfassende Richtlinien, Verfahren, Verantwortlichkeitsstrukturen und Aufsichtsmechanismen um sicherzustellen dass KI-Systeme verantwortungsvoll, ethisch und in Uebereinstimmung mit Vorschriften entwickelt und eingesetzt werden.",
          nl: "AI governance frameworks stellen uitgebreide beleidsregels, procedures, verantwoordelijkheidsstructuren en toezichtmechanismen vast om te zorgen dat AI systemen verantwoordelijk, ethisch en in overeenstemming met regelgeving ontwikkeld en ingezet worden."
        }
      },
      {
        question: {
          en: "What is 'adversarial AI' in the context of AI ethics?",
          es: "Que es 'IA adversaria' en el contexto de etica de IA?",
          de: "Was ist 'adversariale KI' im Kontext der KI-Ethik?",
          nl: "Wat is 'adversarial AI' in de context van AI ethiek?"
        },
        options: [
          { en: "AI systems that compete in games", es: "Sistemas de IA que compiten en juegos", de: "KI-Systeme die in Spielen konkurrieren", nl: "AI systemen die concurreren in spellen" },
          { en: "Techniques used to trick AI systems into making wrong decisions", es: "Tecnicas usadas para enganar sistemas de IA para tomar decisiones incorrectas", de: "Techniken die verwendet werden um KI-Systeme zu falschen Entscheidungen zu verleiten", nl: "Technieken gebruikt om AI systemen te misleiden tot verkeerde beslissingen" },
          { en: "AI that argues with users", es: "IA que discute con usuarios", de: "KI die mit Nutzern streitet", nl: "AI die ruzie maakt met gebruikers" },
          { en: "Military AI applications", es: "Aplicaciones militares de IA", de: "Militaerische KI-Anwendungen", nl: "Militaire AI toepassingen" }
        ],
        correct: 1,
        explanation: {
          en: "Adversarial AI involves deliberately crafted inputs designed to fool AI systems, exposing vulnerabilities and raising ethical concerns about AI security and reliability in critical applications.",
          es: "La IA adversaria involucra entradas deliberadamente creadas disenadas para enganar sistemas de IA, exponiendo vulnerabilidades y generando preocupaciones eticas sobre la seguridad y confiabilidad de IA en aplicaciones criticas.",
          de: "Adversariale KI beinhaltet absichtlich erstellte Eingaben die darauf abzielen KI-Systeme zu taeuschen, wodurch Schwachstellen aufgedeckt werden und ethische Bedenken ueber KI-Sicherheit und Zuverlaessigkeit in kritischen Anwendungen entstehen.",
          nl: "Adversarial AI betreft opzettelijk gecreëerde inputs ontworpen om AI systemen te misleiden, wat kwetsbaarheden blootlegt en ethische zorgen oproept over AI veiligheid en betrouwbaarheid in kritieke toepassingen."
        }
      },
      {
        question: {
          en: "What is 'model interpretability' in machine learning?",
          es: "Que es 'interpretabilidad del modelo' en aprendizaje automatico?",
          de: "Was ist 'Modellinterpretierbarkeit' im maschinellen Lernen?",
          nl: "Wat is 'model interpreteerbaarheid' in machine learning?"
        },
        options: [
          { en: "The degree to which humans can understand how a model makes predictions", es: "El grado en que humanos pueden entender como un modelo hace predicciones", de: "Der Grad zu dem Menschen verstehen koennen wie ein Modell Vorhersagen trifft", nl: "De mate waarin mensen kunnen begrijpen hoe een model voorspellingen maakt" },
          { en: "How fast a model can translate languages", es: "Que tan rapido un modelo puede traducir idiomas", de: "Wie schnell ein Modell Sprachen uebersetzen kann", nl: "Hoe snel een model talen kan vertalen" },
          { en: "The model's ability to work with different software", es: "La capacidad del modelo de trabajar con diferentes software", de: "Die Faehigkeit des Modells mit verschiedener Software zu arbeiten", nl: "Het vermogen van het model om met verschillende software te werken" },
          { en: "How well a model performs on test data", es: "Que tan bien funciona un modelo en datos de prueba", de: "Wie gut ein Modell bei Testdaten abschneidet", nl: "Hoe goed een model presteert op testdata" }
        ],
        correct: 0,
        explanation: {
          en: "Model interpretability refers to how well humans can understand the reasoning behind a model's predictions, which is crucial for building trust and ensuring accountability in AI systems.",
          es: "La interpretabilidad del modelo se refiere a que tan bien los humanos pueden entender el razonamiento detras de las predicciones de un modelo, lo cual es crucial para construir confianza y asegurar responsabilidad en sistemas de IA.",
          de: "Modellinterpretierbarkeit bezieht sich darauf wie gut Menschen die Begruendung hinter den Vorhersagen eines Modells verstehen koennen, was entscheidend ist um Vertrauen aufzubauen und Verantwortlichkeit in KI-Systemen sicherzustellen.",
          nl: "Model interpreteerbaarheid verwijst naar hoe goed mensen de redenering achter voorspellingen van een model kunnen begrijpen, wat cruciaal is voor het opbouwen van vertrouwen en het waarborgen van verantwoordelijkheid in AI systemen."
        }
      },
      {
        question: {
          en: "What are 'attention mechanisms' used for in explainable AI?",
          es: "Para que se usan 'mecanismos de atencion' en IA explicable?",
          de: "Wofuer werden 'Aufmerksamkeitsmechanismen' in erklaerbarer KI verwendet?",
          nl: "Waarvoor worden 'attention mechanismen' gebruikt in uitlegbare AI?"
        },
        options: [
          { en: "To show which parts of input data the model focuses on when making decisions", es: "Para mostrar en que partes de datos de entrada se enfoca el modelo al tomar decisiones", de: "Um zu zeigen auf welche Teile der Eingabedaten sich das Modell bei Entscheidungen konzentriert", nl: "Om te tonen op welke delen van inputdata het model zich richt bij het nemen van beslissingen" },
          { en: "To make AI systems pay attention to users", es: "Para hacer que sistemas de IA presten atencion a usuarios", de: "Um KI-Systeme dazu zu bringen Nutzern Aufmerksamkeit zu schenken", nl: "Om AI systemen aandacht te laten besteden aan gebruikers" },
          { en: "To prevent AI from getting distracted", es: "Para prevenir que la IA se distraiga", de: "Um zu verhindern dass KI abgelenkt wird", nl: "Om te voorkomen dat AI afgeleid wordt" },
          { en: "To improve AI memory capacity", es: "Para mejorar capacidad de memoria de IA", de: "Um KI-Speicherkapazitaet zu verbessern", nl: "Om AI geheugencapaciteit te verbeteren" }
        ],
        correct: 0,
        explanation: {
          en: "Attention mechanisms in AI help visualize which parts of the input data the model considers most important for its predictions, providing transparency into the decision-making process.",
          es: "Los mecanismos de atencion en IA ayudan a visualizar que partes de los datos de entrada el modelo considera mas importantes para sus predicciones, proporcionando transparencia en el proceso de toma de decisiones.",
          de: "Aufmerksamkeitsmechanismen in KI helfen zu visualisieren welche Teile der Eingabedaten das Modell fuer seine Vorhersagen am wichtigsten haelt, wodurch Transparenz in den Entscheidungsprozess gebracht wird.",
          nl: "Attention mechanismen in AI helpen visualiseren welke delen van de inputdata het model het belangrijkst acht voor zijn voorspellingen, wat transparantie biedt in het besluitvormingsproces."
        }
      },
      {
        question: {
          en: "What is 'algo transparency' in AI systems?",
          es: "Que es 'transparencia algoritmica' en sistemas de IA?",
          de: "Was ist 'algorithmische Transparenz' in KI-Systemen?",
          nl: "Wat is 'algoritmische transparantie' in AI systemen?"
        },
        options: [
          { en: "Openness about how AI algorithms work and make decisions", es: "Apertura sobre como funcionan y toman decisiones los algoritmos de IA", de: "Offenheit darueber wie KI-Algorithmen funktionieren und Entscheidungen treffen", nl: "Openheid over hoe AI algoritmes werken en beslissingen nemen" },
          { en: "Using clear glass screens for AI interfaces", es: "Usar pantallas de vidrio transparente para interfaces de IA", de: "Durchsichtige Glasbildschirme fuer KI-Schnittstellen verwenden", nl: "Gebruik van doorzichtige glazen schermen voor AI interfaces" },
          { en: "Making AI code publicly available", es: "Hacer codigo de IA disponible publicamente", de: "KI-Code oeffentlich verfuegbar machen", nl: "AI code publiek beschikbaar maken" },
          { en: "Showing all data sources to everyone", es: "Mostrar todas las fuentes de datos a todos", de: "Alle Datenquellen allen zeigen", nl: "Alle databronnen aan iedereen tonen" }
        ],
        correct: 0,
        explanation: {
          en: "Algorithmic transparency involves providing clear information about how AI systems operate, what data they use, and how they reach decisions, enabling stakeholders to understand and evaluate AI behavior.",
          es: "La transparencia algoritmica involucra proporcionar informacion clara sobre como operan los sistemas de IA, que datos usan y como llegan a decisiones, permitiendo a interesados entender y evaluar el comportamiento de IA.",
          de: "Algorithmische Transparenz beinhaltet klare Informationen darueber zu liefern wie KI-Systeme operieren, welche Daten sie verwenden und wie sie zu Entscheidungen gelangen, wodurch Stakeholder KI-Verhalten verstehen und bewerten koennen.",
          nl: "Algoritmische transparantie houdt in dat duidelijke informatie verstrekt wordt over hoe AI systemen werken, welke data ze gebruiken en hoe ze tot beslissingen komen, waardoor belanghebbenden AI gedrag kunnen begrijpen en evalueren."
        }
      },
      {
        question: {
          en: "What is a 'black box' problem in machine learning models?",
          es: "Que es el problema de 'caja negra' en modelos de aprendizaje automatico?",
          de: "Was ist das 'Black Box'-Problem in maschinellen Lernmodellen?",
          nl: "Wat is het 'black box' probleem in machine learning modellen?"
        },
        options: [
          { en: "When AI decision-making processes are opaque and cannot be easily understood or explained", es: "Cuando procesos de toma de decisiones de IA son opacos y no pueden ser facilmente entendidos o explicados", de: "Wenn KI-Entscheidungsprozesse undurchsichtig sind und nicht leicht verstanden oder erklaert werden koennen", nl: "Wanneer AI besluitvormingsprocessen ondoorzichtig zijn en niet gemakkelijk begrepen of uitgelegd kunnen worden" },
          { en: "When AI systems are stored in black containers", es: "Cuando sistemas de IA se almacenan en contenedores negros", de: "Wenn KI-Systeme in schwarzen Behaeltern gespeichert werden", nl: "Wanneer AI systemen in zwarte containers worden opgeslagen" },
          { en: "When AI systems fail to process dark images", es: "Cuando sistemas de IA fallan en procesar imagenes oscuras", de: "Wenn KI-Systeme dunkle Bilder nicht verarbeiten koennen", nl: "Wanneer AI systemen falen bij het verwerken van donkere afbeeldingen" },
          { en: "When AI systems crash and show black screens", es: "Cuando sistemas de IA se bloquean y muestran pantallas negras", de: "Wenn KI-Systeme abstuerzen und schwarze Bildschirme zeigen", nl: "Wanneer AI systemen crashen en zwarte schermen tonen" }
        ],
        correct: 0,
        explanation: {
          en: "The black box problem refers to AI systems whose internal decision-making processes are not transparent or interpretable, making it difficult to understand how they arrive at specific conclusions or predictions.",
          es: "El problema de caja negra se refiere a sistemas de IA cuyos procesos internos de toma de decisiones no son transparentes o interpretables, haciendo dificil entender como llegan a conclusiones o predicciones especificas.",
          de: "Das Black-Box-Problem bezieht sich auf KI-Systeme deren interne Entscheidungsprozesse nicht transparent oder interpretierbar sind, was es schwierig macht zu verstehen wie sie zu spezifischen Schlussfolgerungen oder Vorhersagen gelangen.",
          nl: "Het black box probleem verwijst naar AI systemen waarvan de interne besluitvormingsprocessen niet transparant of interpreteerbaar zijn, waardoor het moeilijk is te begrijpen hoe ze tot specifieke conclusies of voorspellingen komen."
        }
      },
      {
        question: {
          en: "What are LIME and SHAP in explainable AI?",
          es: "Que son LIME y SHAP en IA explicable?",
          de: "Was sind LIME und SHAP in erklaerbarer KI?",
          nl: "Wat zijn LIME en SHAP in uitlegbare AI?"
        },
        options: [
          { en: "Methods for explaining individual AI model predictions by showing feature importance", es: "Metodos para explicar predicciones individuales de modelos de IA mostrando importancia de caracteristicas", de: "Methoden zur Erklaerung individueller KI-Modellvorhersagen durch Anzeigen der Merkmalswichtigkeit", nl: "Methoden voor het uitleggen van individuele AI model voorspellingen door feature belangrijkheid te tonen" },
          { en: "Types of citrus fruits used in AI training", es: "Tipos de frutas citricas usadas en entrenamiento de IA", de: "Arten von Zitrusfruechten die im KI-Training verwendet werden", nl: "Soorten citrusvruchten gebruikt in AI training" },
          { en: "Programming languages for AI development", es: "Lenguajes de programacion para desarrollo de IA", de: "Programmiersprachen fuer KI-Entwicklung", nl: "Programmeertalen voor AI ontwikkeling" },
          { en: "Hardware components for AI systems", es: "Componentes de hardware para sistemas de IA", de: "Hardware-Komponenten fuer KI-Systeme", nl: "Hardware componenten voor AI systemen" }
        ],
        correct: 0,
        explanation: {
          en: "LIME (Local Interpretable Model-agnostic Explanations) and SHAP (SHapley Additive exPlanations) are popular techniques for explaining machine learning predictions by showing which features contributed most to specific decisions.",
          es: "LIME (Explicaciones Locales Interpretables Agnosticas al Modelo) y SHAP (Explicaciones Aditivas de Shapley) son tecnicas populares para explicar predicciones de aprendizaje automatico mostrando que caracteristicas contribuyeron mas a decisiones especificas.",
          de: "LIME (Local Interpretable Model-agnostic Explanations) und SHAP (SHapley Additive exPlanations) sind beliebte Techniken zur Erklaerung von Vorhersagen des maschinellen Lernens durch Anzeigen welche Merkmale am meisten zu spezifischen Entscheidungen beigetragen haben.",
          nl: "LIME (Local Interpretable Model-agnostic Explanations) en SHAP (SHapley Additive exPlanations) zijn populaire technieken voor het uitleggen van machine learning voorspellingen door te tonen welke features het meest bijdroegen aan specifieke beslissingen."
        }
      },
      {
        question: {
          en: "What is 'global explainability' versus 'local explainability' in AI?",
          es: "Que es 'explicabilidad global' versus 'explicabilidad local' en IA?",
          de: "Was ist 'globale Erklaerbarkeit' versus 'lokale Erklaerbarkeit' in der KI?",
          nl: "Wat is 'globale uitlegbaarheid' versus 'lokale uitlegbaarheid' in AI?"
        },
        options: [
          { en: "Global explains overall model behavior; local explains individual predictions", es: "Global explica comportamiento general del modelo; local explica predicciones individuales", de: "Global erklaert das Gesamtverhalten des Modells; lokal erklaert individuelle Vorhersagen", nl: "Globaal verklaart het algehele modelgedrag; lokaal verklaart individuele voorspellingen" },
          { en: "Global uses worldwide data; local uses regional data", es: "Global usa datos mundiales; local usa datos regionales", de: "Global verwendet weltweite Daten; lokal verwendet regionale Daten", nl: "Globaal gebruikt wereldwijde data; lokaal gebruikt regionale data" },
          { en: "Global is for large models; local is for small models", es: "Global es para modelos grandes; local es para modelos pequenos", de: "Global ist fuer grosse Modelle; lokal ist fuer kleine Modelle", nl: "Globaal is voor grote modellen; lokaal is voor kleine modellen" },
          { en: "Global explains hardware; local explains software", es: "Global explica hardware; local explica software", de: "Global erklaert Hardware; lokal erklaert Software", nl: "Globaal verklaart hardware; lokaal verklaart software" }
        ],
        correct: 0,
        explanation: {
          en: "Global explainability provides understanding of how an AI model behaves overall across all inputs, while local explainability focuses on explaining why the model made a specific decision for a particular input.",
          es: "La explicabilidad global proporciona entendimiento de como un modelo de IA se comporta en general a traves de todas las entradas, mientras que la explicabilidad local se enfoca en explicar por que el modelo tomo una decision especifica para una entrada particular.",
          de: "Globale Erklaerbarkeit bietet Verstaendnis davon wie sich ein KI-Modell insgesamt ueber alle Eingaben hinweg verhaelt, waehrend lokale Erklaerbarkeit darauf fokussiert zu erklaeren warum das Modell eine spezifische Entscheidung fuer eine bestimmte Eingabe getroffen hat.",
          nl: "Globale uitlegbaarheid biedt begrip van hoe een AI model zich over het algemeen gedraagt over alle inputs, terwijl lokale uitlegbaarheid zich richt op het uitleggen waarom het model een specifieke beslissing nam voor een bepaalde input."
        }
      },
      {
        question: {
          en: "What is 'post-hoc explainability' in machine learning?",
          es: "Que es 'explicabilidad post-hoc' en aprendizaje automatico?",
          de: "Was ist 'Post-hoc-Erklaerbarkeit' im maschinellen Lernen?",
          nl: "Wat is 'post-hoc uitlegbaarheid' in machine learning?"
        },
        options: [
          { en: "Explaining model decisions after the model has been trained and deployed", es: "Explicar decisiones del modelo despues de que el modelo ha sido entrenado y desplegado", de: "Modelentscheidungen erklaeren nachdem das Modell trainiert und eingesetzt wurde", nl: "Model beslissingen uitleggen nadat het model is getraind en ingezet" },
          { en: "Explaining models only during training", es: "Explicar modelos solo durante entrenamiento", de: "Modelle nur waehrend des Trainings erklaeren", nl: "Modellen alleen tijdens training uitleggen" },
          { en: "Pre-explaining models before training", es: "Pre-explicar modelos antes del entrenamiento", de: "Modelle vor dem Training vorab erklaeren", nl: "Modellen vooraf uitleggen voor training" },
          { en: "Explaining models in Latin", es: "Explicar modelos en latin", de: "Modelle auf Latein erklaeren", nl: "Modellen in het Latijn uitleggen" }
        ],
        correct: 0,
        explanation: {
          en: "Post-hoc explainability involves applying explanation techniques to already-trained models to understand their behavior, as opposed to building interpretability into the model from the beginning (intrinsic explainability).",
          es: "La explicabilidad post-hoc involucra aplicar tecnicas de explicacion a modelos ya entrenados para entender su comportamiento, en oposicion a construir interpretabilidad en el modelo desde el principio (explicabilidad intrinseca).",
          de: "Post-hoc-Erklaerbarkeit beinhaltet die Anwendung von Erklaerungstechniken auf bereits trainierte Modelle um ihr Verhalten zu verstehen, im Gegensatz dazu Interpretierbarkeit von Anfang an in das Modell einzubauen (intrinsische Erklaerbarkeit).",
          nl: "Post-hoc uitlegbaarheid houdt in dat verklaringstechnieken toegepast worden op reeds getrainde modellen om hun gedrag te begrijpen, in tegenstelling tot het inbouwen van interpreteerbaarheid in het model vanaf het begin (intrinsieke uitlegbaarheid)."
        }
      },
      {
        question: {
          en: "What are 'counterfactual explanations' in AI?",
          es: "Que son 'explicaciones contrafactuales' en IA?",
          de: "Was sind 'kontrafaktische Erklaerungen' in der KI?",
          nl: "Wat zijn 'contrafeitelijke verklaringen' in AI?"
        },
        options: [
          { en: "Explanations showing what would need to change for a different AI decision", es: "Explicaciones que muestran que necesitaria cambiar para una decision de IA diferente", de: "Erklaerungen die zeigen was sich aendern muesste fuer eine andere KI-Entscheidung", nl: "Verklaringen die tonen wat er zou moeten veranderen voor een andere AI beslissing" },
          { en: "Explanations that contradict the AI's decision", es: "Explicaciones que contradicen la decision de la IA", de: "Erklaerungen die der KI-Entscheidung widersprechen", nl: "Verklaringen die de AI beslissing tegenspreken" },
          { en: "False explanations generated by AI", es: "Explicaciones falsas generadas por IA", de: "Falsche Erklaerungen die von KI generiert werden", nl: "Valse verklaringen gegenereerd door AI" },
          { en: "Explanations based on historical facts", es: "Explicaciones basadas en hechos historicos", de: "Erklaerungen basierend auf historischen Fakten", nl: "Verklaringen gebaseerd op historische feiten" }
        ],
        correct: 0,
        explanation: {
          en: "Counterfactual explanations describe the minimal changes needed to inputs that would result in a different prediction, helping users understand decision boundaries and what factors are most important for specific outcomes.",
          es: "Las explicaciones contrafactuales describen los cambios minimos necesarios en las entradas que resultarian en una prediccion diferente, ayudando a usuarios entender limites de decision y que factores son mas importantes para resultados especificos.",
          de: "Kontrafaktische Erklaerungen beschreiben die minimalen Aenderungen an Eingaben die zu einer anderen Vorhersage fuehren wuerden, wodurch Nutzern geholfen wird Entscheidungsgrenzen zu verstehen und welche Faktoren fuer spezifische Ergebnisse am wichtigsten sind.",
          nl: "Contrafeitelijke verklaringen beschrijven de minimale veranderingen nodig aan inputs die zouden resulteren in een andere voorspelling, wat gebruikers helpt beslissingsgrenzen te begrijpen en welke factoren het belangrijkst zijn voor specifieke uitkomsten."
        }
      },
      {
        question: {
          en: "What is the trade-off between model accuracy and interpretability?",
          es: "Cual es el intercambio entre precision del modelo e interpretabilidad?",
          de: "Was ist der Kompromiss zwischen Modellgenauigkeit und Interpretierbarkeit?",
          nl: "Wat is de afweging tussen model nauwkeurigheid en interpreteerbaarheid?"
        },
        options: [
          { en: "More complex, accurate models are often less interpretable than simpler ones", es: "Modelos mas complejos y precisos son a menudo menos interpretables que los simples", de: "Komplexere, genauere Modelle sind oft weniger interpretierbar als einfachere", nl: "Meer complexe, nauwkeurige modellen zijn vaak minder interpreteerbaar dan eenvoudige" },
          { en: "Accurate models are always more interpretable", es: "Modelos precisos son siempre mas interpretables", de: "Genaue Modelle sind immer interpretierbarer", nl: "Nauwkeurige modellen zijn altijd interpreteerbaarder" },
          { en: "Interpretable models are always more accurate", es: "Modelos interpretables son siempre mas precisos", de: "Interpretierbare Modelle sind immer genauer", nl: "Interpreteerbare modellen zijn altijd nauwkeuriger" },
          { en: "There is no relationship between accuracy and interpretability", es: "No hay relacion entre precision e interpretabilidad", de: "Es gibt keine Beziehung zwischen Genauigkeit und Interpretierbarkeit", nl: "Er is geen verband tussen nauwkeurigheid en interpreteerbaarheid" }
        ],
        correct: 0,
        explanation: {
          en: "There's often a trade-off where more complex models (like deep neural networks) achieve higher accuracy but are harder to interpret, while simpler models (like linear regression) are more interpretable but may have lower accuracy.",
          es: "A menudo hay un intercambio donde modelos mas complejos (como redes neuronales profundas) logran mayor precision pero son mas dificiles de interpretar, mientras que modelos simples (como regresion lineal) son mas interpretables pero pueden tener menor precision.",
          de: "Es gibt oft einen Kompromiss wo komplexere Modelle (wie tiefe neuronale Netzwerke) hoehere Genauigkeit erreichen aber schwerer zu interpretieren sind, waehrend einfachere Modelle (wie lineare Regression) interpretierbarer sind aber moeglicherweise geringere Genauigkeit haben.",
          nl: "Er is vaak een afweging waarbij complexere modellen (zoals diepe neurale netwerken) hogere nauwkeurigheid bereiken maar moeilijker te interpreteren zijn, terwijl eenvoudigere modellen (zoals lineaire regressie) interpreteerbaarder zijn maar mogelijk lagere nauwkeurigheid hebben."
        }
      },
      {
        question: {
          en: "What is 'algorithmic recourse' in explainable AI?",
          es: "Que es 'recurso algoritmico' en IA explicable?",
          de: "Was ist 'algorithmischer Rechtsbehelf' in erklaerbarer KI?",
          nl: "Wat is 'algoritmisch verhaal' in uitlegbare AI?"
        },
        options: [
          { en: "Actionable recommendations for individuals to achieve desired AI outcomes", es: "Recomendaciones accionables para que individuos logren resultados deseados de IA", de: "Umsetzbare Empfehlungen fuer Individuen um gewuenschte KI-Ergebnisse zu erreichen", nl: "Uitvoerbare aanbevelingen voor individuen om gewenste AI uitkomsten te bereiken" },
          { en: "Legal appeals against AI decisions", es: "Apelaciones legales contra decisiones de IA", de: "Rechtliche Einsprueche gegen KI-Entscheidungen", nl: "Juridische beroepen tegen AI beslissingen" },
          { en: "Emergency shutdown procedures for AI", es: "Procedimientos de apagado de emergencia para IA", de: "Notabschaltverfahren fuer KI", nl: "Noodstop procedures voor AI" },
          { en: "Backup algorithms when primary ones fail", es: "Algoritmos de respaldo cuando fallan los primarios", de: "Backup-Algorithmen wenn primaere versagen", nl: "Backup algoritmes wanneer primaire falen" }
        ],
        correct: 0,
        explanation: {
          en: "Algorithmic recourse provides individuals with actionable steps they can take to change an AI system's decision about them, such as specific actions to improve a loan application or job candidacy.",
          es: "El recurso algoritmico proporciona a individuos pasos accionables que pueden tomar para cambiar la decision de un sistema de IA sobre ellos, como acciones especificas para mejorar una solicitud de prestamo o candidatura laboral.",
          de: "Algorithmischer Rechtsbehelf bietet Individuen umsetzbare Schritte die sie unternehmen koennen um eine KI-Systementscheidung ueber sie zu aendern, wie spezifische Aktionen um einen Kreditantrag oder Stellenbewerbung zu verbessern.",
          nl: "Algoritmisch verhaal biedt individuen uitvoerbare stappen die ze kunnen nemen om een AI systeem beslissing over hen te veranderen, zoals specifieke acties om een leningaanvraag of baan kandidatuur te verbeteren."
        }
      },
      {
        question: {
          en: "What is 'feature attribution' in explainable AI?",
          es: "Que es 'atribucion de caracteristicas' en IA explicable?",
          de: "Was ist 'Merkmalszuordnung' in erklaerbarer KI?",
          nl: "Wat is 'feature attributie' in uitlegbare AI?"
        },
        options: [
          { en: "Determining how much each input feature contributed to a model's prediction", es: "Determinar cuanto contribuyo cada caracteristica de entrada a la prediccion del modelo", de: "Bestimmen wie viel jedes Eingabemerkmal zur Vorhersage des Modells beigetragen hat", nl: "Bepalen hoeveel elke input feature bijdroeg aan de voorspelling van het model" },
          { en: "Giving credit to the creators of AI features", es: "Dar credito a los creadores de caracteristicas de IA", de: "Den Entwicklern von KI-Funktionen Anerkennung geben", nl: "Credits geven aan de makers van AI features" },
          { en: "Organizing features alphabetically", es: "Organizar caracteristicas alfabeticamente", de: "Merkmale alphabetisch organisieren", nl: "Features alfabetisch organiseren" },
          { en: "Describing the technical specifications of features", es: "Describir las especificaciones tecnicas de caracteristicas", de: "Die technischen Spezifikationen von Merkmalen beschreiben", nl: "De technische specificaties van features beschrijven" }
        ],
        correct: 0,
        explanation: {
          en: "Feature attribution techniques quantify the contribution of each input feature to a model's output, helping to understand which aspects of the input data were most important for a particular prediction.",
          es: "Las tecnicas de atribucion de caracteristicas cuantifican la contribucion de cada caracteristica de entrada a la salida del modelo, ayudando a entender que aspectos de los datos de entrada fueron mas importantes para una prediccion particular.",
          de: "Merkmalszuordnungstechniken quantifizieren den Beitrag jedes Eingabemerkmals zur Ausgabe des Modells und helfen zu verstehen welche Aspekte der Eingabedaten fuer eine bestimmte Vorhersage am wichtigsten waren.",
          nl: "Feature attributie technieken kwantificeren de bijdrage van elke input feature aan de output van het model, wat helpt begrijpen welke aspecten van de inputdata het belangrijkst waren voor een bepaalde voorspelling."
        }
      },
      {
        question: {
          en: "What is 'concept drift' and how does it affect AI explainability?",
          es: "Que es 'deriva de conceptos' y como afecta la explicabilidad de IA?",
          de: "Was ist 'Konzeptdrift' und wie beeinflusst es die KI-Erklaerbarkeit?",
          nl: "Wat is 'concept drift' en hoe beïnvloedt het AI uitlegbaarheid?"
        },
        options: [
          { en: "When the relationship between inputs and outputs changes over time, requiring updated explanations", es: "Cuando la relacion entre entradas y salidas cambia con el tiempo, requiriendo explicaciones actualizadas", de: "Wenn sich die Beziehung zwischen Eingaben und Ausgaben ueber die Zeit aendert und aktualisierte Erklaerungen erfordert", nl: "Wanneer de relatie tussen inputs en outputs verandert over tijd, wat bijgewerkte verklaringen vereist" },
          { en: "When AI concepts become outdated and need replacement", es: "Cuando conceptos de IA se vuelven obsoletos y necesitan reemplazo", de: "Wenn KI-Konzepte veraltet werden und Ersatz benoetigen", nl: "Wanneer AI concepten verouderd raken en vervanging nodig hebben" },
          { en: "When AI explanations become too complex", es: "Cuando explicaciones de IA se vuelven demasiado complejas", de: "Wenn KI-Erklaerungen zu komplex werden", nl: "Wanneer AI verklaringen te complex worden" },
          { en: "When users lose interest in AI explanations", es: "Cuando usuarios pierden interes en explicaciones de IA", de: "Wenn Nutzer das Interesse an KI-Erklaerungen verlieren", nl: "Wanneer gebruikers interesse verliezen in AI verklaringen" }
        ],
        correct: 0,
        explanation: {
          en: "Concept drift occurs when the statistical properties of data change over time, meaning that previously valid explanations may no longer accurately describe model behavior, requiring continuous monitoring and updating of explanation methods.",
          es: "La deriva de conceptos ocurre cuando las propiedades estadisticas de los datos cambian con el tiempo, significando que explicaciones previamente validas pueden ya no describir con precision el comportamiento del modelo, requiriendo monitoreo continuo y actualizacion de metodos de explicacion.",
          de: "Konzeptdrift tritt auf wenn sich die statistischen Eigenschaften von Daten ueber die Zeit aendern, was bedeutet dass zuvor gueltige Erklaerungen moeglicherweise nicht mehr genau das Modellverhalten beschreiben, was kontinuierliche Ueberwachung und Aktualisierung von Erklaerungsmethoden erfordert.",
          nl: "Concept drift treedt op wanneer de statistische eigenschappen van data veranderen over tijd, wat betekent dat eerder geldige verklaringen mogelijk niet langer nauwkeurig het modelgedrag beschrijven, wat continue monitoring en bijwerking van verklaringsmethoden vereist."
        }
      },
      {
        question: {
          en: "What is 'gradient-based attribution' in neural network explainability?",
          es: "Que es 'atribucion basada en gradientes' en explicabilidad de redes neuronales?",
          de: "Was ist 'gradientenbasierte Zuordnung' in der Erklaerbarkeit neuronaler Netzwerke?",
          nl: "Wat is 'gradient-gebaseerde attributie' in neurale netwerk uitlegbaarheid?"
        },
        options: [
          { en: "Using derivatives to determine which input features most influence network outputs", es: "Usar derivadas para determinar que caracteristicas de entrada mas influyen en las salidas de la red", de: "Ableitungen verwenden um zu bestimmen welche Eingabemerkmale die Netzwerkausgaben am meisten beeinflussen", nl: "Gebruik van afgeleiden om te bepalen welke input features de netwerk outputs het meest beïnvloeden" },
          { en: "Gradually increasing the difficulty of training examples", es: "Aumentar gradualmente la dificultad de ejemplos de entrenamiento", de: "Die Schwierigkeit von Trainingsbeispielen graduell erhoehen", nl: "Geleidelijk verhogen van de moeilijkheid van trainingsvoorbeelden" },
          { en: "Assigning colors based on gradient values", es: "Asignar colores basados en valores de gradiente", de: "Farben basierend auf Gradientenwerten zuweisen", nl: "Kleuren toewijzen gebaseerd op gradient waarden" },
          { en: "Creating smooth transitions between network layers", es: "Crear transiciones suaves entre capas de red", de: "Sanfte Uebergaenge zwischen Netzwerkschichten erstellen", nl: "Vloeiende overgangen maken tussen netwerklagen" }
        ],
        correct: 0,
        explanation: {
          en: "Gradient-based attribution methods use the gradient (derivative) of the output with respect to inputs to understand which input features have the strongest influence on the model's decision, providing insights into model sensitivity.",
          es: "Los metodos de atribucion basados en gradientes usan el gradiente (derivada) de la salida con respecto a las entradas para entender que caracteristicas de entrada tienen la influencia mas fuerte en la decision del modelo, proporcionando perspectivas sobre la sensibilidad del modelo.",
          de: "Gradientenbasierte Zuordnungsmethoden verwenden den Gradienten (Ableitung) der Ausgabe bezueglich der Eingaben um zu verstehen welche Eingabemerkmale den staerksten Einfluss auf die Entscheidung des Modells haben, wodurch Einblicke in die Modellsensitivitaet gewonnen werden.",
          nl: "Gradient-gebaseerde attributie methoden gebruiken de gradient (afgeleide) van de output ten opzichte van inputs om te begrijpen welke input features de sterkste invloed hebben op de beslissing van het model, wat inzicht geeft in model gevoeligheid."
        }
      },
      {
        question: {
          en: "What is the difference between 'intrinsic' and 'post-hoc' interpretability?",
          es: "Cual es la diferencia entre interpretabilidad 'intrinseca' y 'post-hoc'?",
          de: "Was ist der Unterschied zwischen 'intrinsischer' und 'Post-hoc'-Interpretierbarkeit?",
          nl: "Wat is het verschil tussen 'intrinsieke' en 'post-hoc' interpreteerbaarheid?"
        },
        options: [
          { en: "Intrinsic is built into the model; post-hoc is applied after training", es: "Intrinseca esta construida en el modelo; post-hoc se aplica despues del entrenamiento", de: "Intrinsisch ist in das Modell eingebaut; Post-hoc wird nach dem Training angewendet", nl: "Intrinsiek is ingebouwd in het model; post-hoc wordt toegepast na training" },
          { en: "Intrinsic is for simple models; post-hoc is for complex models", es: "Intrinseca es para modelos simples; post-hoc es para modelos complejos", de: "Intrinsisch ist fuer einfache Modelle; Post-hoc ist fuer komplexe Modelle", nl: "Intrinsiek is voor eenvoudige modellen; post-hoc is voor complexe modellen" },
          { en: "Intrinsic uses internal data; post-hoc uses external data", es: "Intrinseca usa datos internos; post-hoc usa datos externos", de: "Intrinsisch verwendet interne Daten; Post-hoc verwendet externe Daten", nl: "Intrinsiek gebruikt interne data; post-hoc gebruikt externe data" },
          { en: "Intrinsic is automatic; post-hoc requires human intervention", es: "Intrinseca es automatica; post-hoc requiere intervencion humana", de: "Intrinsisch ist automatisch; Post-hoc erfordert menschliche Intervention", nl: "Intrinsiek is automatisch; post-hoc vereist menselijke interventie" }
        ],
        correct: 0,
        explanation: {
          en: "Intrinsic interpretability means the model is inherently interpretable by design (like decision trees), while post-hoc interpretability involves applying explanation techniques to already-trained models that weren't designed to be interpretable.",
          es: "La interpretabilidad intrinseca significa que el modelo es inherentemente interpretable por diseno (como arboles de decision), mientras que la interpretabilidad post-hoc involucra aplicar tecnicas de explicacion a modelos ya entrenados que no fueron disenados para ser interpretables.",
          de: "Intrinsische Interpretierbarkeit bedeutet dass das Modell von Design her inhaerent interpretierbar ist (wie Entscheidungsbaeume), waehrend Post-hoc-Interpretierbarkeit das Anwenden von Erklaerungstechniken auf bereits trainierte Modelle beinhaltet die nicht dafuer entworfen wurden interpretierbar zu sein.",
          nl: "Intrinsieke interpreteerbaarheid betekent dat het model inherent interpreteerbaar is door ontwerp (zoals beslissingsbomen), terwijl post-hoc interpreteerbaarheid het toepassen van verklaringstechnieken behelst op reeds getrainde modellen die niet ontworpen waren om interpreteerbaar te zijn."
        }
      },
      {
        question: {
          en: "What is 'model transparency' in the context of regulatory compliance?",
          es: "Que es 'transparencia del modelo' en el contexto de cumplimiento regulatorio?",
          de: "Was ist 'Modelltransparenz' im Kontext der regulatorischen Compliance?",
          nl: "Wat is 'model transparantie' in de context van regelgevingsnaleving?"
        },
        options: [
          { en: "Providing clear documentation about model architecture, training data, and decision processes for regulatory review", es: "Proporcionar documentacion clara sobre arquitectura del modelo, datos de entrenamiento y procesos de decision para revision regulatoria", de: "Klare Dokumentation ueber Modellarchitektur, Trainingsdaten und Entscheidungsprozesse fuer regulatorische Pruefung bereitzustellen", nl: "Het verstrekken van duidelijke documentatie over modelarchitectuur, trainingsdata en besluitvormingsprocessen voor regulatoire toetsing" },
          { en: "Making AI models completely open source", es: "Hacer que modelos de IA sean completamente de codigo abierto", de: "KI-Modelle vollstaendig Open Source machen", nl: "AI modellen volledig open source maken" },
          { en: "Using only simple algorithms that everyone can understand", es: "Usar solo algoritmos simples que todos puedan entender", de: "Nur einfache Algorithmen verwenden die jeder verstehen kann", nl: "Alleen eenvoudige algoritmes gebruiken die iedereen kan begrijpen" },
          { en: "Publishing all training data publicly", es: "Publicar todos los datos de entrenamiento publicamente", de: "Alle Trainingsdaten oeffentlich veroeffentlichen", nl: "Alle trainingsdata publiek publiceren" }
        ],
        correct: 0,
        explanation: {
          en: "Model transparency for regulatory compliance involves providing comprehensive documentation about how AI systems work, including their architecture, training processes, data sources, and decision-making logic, enabling regulators to assess compliance with applicable laws and standards.",
          es: "La transparencia del modelo para cumplimiento regulatorio involucra proporcionar documentacion integral sobre como funcionan los sistemas de IA, incluyendo su arquitectura, procesos de entrenamiento, fuentes de datos y logica de toma de decisiones, permitiendo a reguladores evaluar el cumplimiento con leyes y estandares aplicables.",
          de: "Modelltransparenz fuer regulatorische Compliance beinhaltet umfassende Dokumentation darueber wie KI-Systeme funktionieren, einschliesslich ihrer Architektur, Trainingsprozesse, Datenquellen und Entscheidungslogik, wodurch Regulatoren die Einhaltung anwendbarer Gesetze und Standards bewerten koennen.",
          nl: "Model transparantie voor regelgevingsnaleving houdt in dat uitgebreide documentatie verstrekt wordt over hoe AI systemen werken, inclusief hun architectuur, trainingsprocessen, databronnen en besluitvormingslogica, waardoor toezichthouders naleving van toepasselijke wetten en standaarden kunnen beoordelen."
        }
      }
    ]
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level4;
  } else if (typeof window !== 'undefined') {
    window.level4 = level4;
  }
})();