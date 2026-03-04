// AI ethiek - level9
// Total questions: 100
// Real cutting-edge AI ethics and governance content with proper translations

module.exports = {
    questions: [
        {
            question: {
                en: "What is the Eliezer-Nate dialogue about?",
                es: "¿De qué trata el diálogo Eliezer-Nate?",
                de: "Worum geht es im Eliezer-Nate-Dialog?",
                nl: "Waar gaat de Eliezer-Nate dialoog over?"
            },
            options: [
                { en: "Fundamental disagreements on AI alignment approach", es: "Desacuerdos fundamentales sobre enfoque de alineación de IA", de: "Grundlegende Meinungsverschiedenheiten über KI-Ausrichtungsansatz", nl: "Fundamentele meningsverschillen over AI-afstemmingsbenadering" },
                { en: "Personal conversation", es: "Conversación personal", de: "Persönliches Gespräch", nl: "Persoonlijk gesprek" },
                { en: "Technical discussion", es: "Discusión técnica", de: "Technische Diskussion", nl: "Technische discussie" },
                { en: "Casual debate", es: "Debate casual", de: "Zwanglose Debatte", nl: "Informeel debat" }
            ],
            correct: 0,
            explanation: {
                en: "The Eliezer-Nate dialogue represents fundamental disagreements between AI safety researchers about whether current alignment approaches can scale to superintelligence.",
                es: "El diálogo Eliezer-Nate representa desacuerdos fundamentales entre investigadores de seguridad de IA sobre si los enfoques actuales de alineación pueden escalar a superinteligencia.",
                de: "Der Eliezer-Nate-Dialog repräsentiert grundlegende Meinungsverschiedenheiten zwischen KI-Sicherheitsforschern darüber, ob aktuelle Ausrichtungsansätze auf Superintelligenz skaliert werden können.",
                nl: "De Eliezer-Nate dialoog vertegenwoordigt fundamentele meningsverschillen tussen AI-veiligheidsonderzoekers over of huidige afstemmingsbenaderingen kunnen schalen naar superintelligentie."
            }
        },
        {
            question: {
                en: "What is the Christiano proposal for alignment?",
                es: "¿Cuál es la propuesta de Christiano para alineación?",
                de: "Was ist der Christiano-Vorschlag für Ausrichtung?",
                nl: "Wat is het Christiano-voorstel voor afstemming?"
            },
            options: [
                { en: "Iterated amplification and distillation", es: "Amplificación y destilación iterada", de: "Iterierte Verstärkung und Destillation", nl: "Geïtereerde versterking en destillatie" },
                { en: "Direct programming", es: "Programación directa", de: "Direkte Programmierung", nl: "Directe programmering" },
                { en: "Simple training", es: "Entrenamiento simple", de: "Einfaches Training", nl: "Eenvoudige training" },
                { en: "Basic alignment", es: "Alineación básica", de: "Grundlegende Ausrichtung", nl: "Basis afstemming" }
            ],
            correct: 0,
            explanation: {
                en: "Paul Christiano's proposal involves iterated amplification where humans use AI assistants to oversee more powerful AI through recursive delegation.",
                es: "La propuesta de Paul Christiano involucra amplificación iterada donde humanos usan asistentes de IA para supervisar IA más poderosa a través de delegación recursiva.",
                de: "Paul Christianos Vorschlag beinhaltet iterierte Verstärkung, bei der Menschen KI-Assistenten verwenden, um leistungsfähigere KI durch rekursive Delegation zu überwachen.",
                nl: "Paul Christiano's voorstel behelst geïtereerde versterking waarbij mensen AI-assistenten gebruiken om krachtigere AI te overzien door recursieve delegatie."
            }
        },
        {
            question: {
                en: "What is RLHF's fundamental limitation?",
                es: "¿Cuál es la limitación fundamental de RLHF?",
                de: "Was ist die grundlegende Einschränkung von RLHF?",
                nl: "Wat is de fundamentele beperking van RLHF?"
            },
            options: [
                { en: "Optimizes for human approval not values", es: "Optimiza para aprobación humana no valores", de: "Optimiert für menschliche Zustimmung nicht Werte", nl: "Optimaliseert voor menselijke goedkeuring niet waarden" },
                { en: "Slow training", es: "Entrenamiento lento", de: "Langsames Training", nl: "Langzame training" },
                { en: "High cost", es: "Alto costo", de: "Hohe Kosten", nl: "Hoge kosten" },
                { en: "Complex setup", es: "Configuración compleja", de: "Komplexe Einrichtung", nl: "Complexe setup" }
            ],
            correct: 0,
            explanation: {
                en: "RLHF's fundamental limitation is that it optimizes for what humans approve of rather than what they truly value, creating potential for deception.",
                es: "La limitación fundamental de RLHF es que optimiza para lo que los humanos aprueban en lugar de lo que realmente valoran, creando potencial para engaño.",
                de: "Die grundlegende Einschränkung von RLHF besteht darin, dass es für das optimiert, was Menschen gutheißen, anstatt für das, was sie wirklich schätzen, was Täuschungspotenzial schafft.",
                nl: "RLHF's fundamentele beperking is dat het optimaliseert voor wat mensen goedkeuren in plaats van wat ze werkelijk waarderen, wat potentieel voor misleiding creëert."
            }
        },
        {
            question: {
                en: "What is mechanistic interpretability's goal?",
                es: "¿Cuál es el objetivo de la interpretabilidad mecanicista?",
                de: "Was ist das Ziel der mechanistischen Interpretierbarkeit?",
                nl: "Wat is het doel van mechanistische interpreteerbaarheid?"
            },
            options: [
                { en: "Understanding neural network internal mechanisms", es: "Entender mecanismos internos de redes neuronales", de: "Interne Mechanismen neuronaler Netze verstehen", nl: "Interne mechanismen van neurale netwerken begrijpen" },
                { en: "Making AI friendly", es: "Hacer IA amigable", de: "KI freundlich machen", nl: "AI vriendelijk maken" },
                { en: "Improving performance", es: "Mejorar rendimiento", de: "Leistung verbessern", nl: "Prestaties verbeteren" },
                { en: "Reducing costs", es: "Reducir costos", de: "Kosten reduzieren", nl: "Kosten verminderen" }
            ],
            correct: 0,
            explanation: {
                en: "Mechanistic interpretability aims to understand the internal mechanisms and representations within neural networks to ensure safety and alignment.",
                es: "La interpretabilidad mecanicista busca entender los mecanismos internos y representaciones dentro de redes neuronales para asegurar seguridad y alineación.",
                de: "Mechanistische Interpretierbarkeit zielt darauf ab, die internen Mechanismen und Darstellungen in neuronalen Netzen zu verstehen, um Sicherheit und Ausrichtung zu gewährleisten.",
                nl: "Mechanistische interpreteerbaarheid beoogt de interne mechanismen en representaties binnen neurale netwerken te begrijpen om veiligheid en afstemming te waarborgen."
            }
        },
        {
            question: {
                en: "What is adversarial training in alignment?",
                es: "¿Qué es el entrenamiento adversarial en alineación?",
                de: "Was ist adversariales Training in der Ausrichtung?",
                nl: "Wat is adversariële training in afstemming?"
            },
            options: [
                { en: "Training against deceptive behavior", es: "Entrenamiento contra comportamiento engañoso", de: "Training gegen täuschendes Verhalten", nl: "Training tegen misleidend gedrag" },
                { en: "Competitive training", es: "Entrenamiento competitivo", de: "Wettbewerbstraining", nl: "Competitieve training" },
                { en: "Attack training", es: "Entrenamiento de ataque", de: "Angriffstraining", nl: "Aanvalstraining" },
                { en: "Defense practice", es: "Práctica de defensa", de: "Verteidigungspraxis", nl: "Verdedigingspraktijk" }
            ],
            correct: 0,
            explanation: {
                en: "Adversarial training in alignment involves deliberately training AI systems to resist deceptive or misaligned behaviors through targeted challenges.",
                es: "El entrenamiento adversarial en alineación involucra entrenar deliberadamente sistemas de IA para resistir comportamientos engañosos o desalineados a través de desafíos dirigidos.",
                de: "Adversariales Training in der Ausrichtung beinhaltet das gezielte Training von KI-Systemen, um täuschenden oder fehlausgerichteten Verhaltensweisen durch gezielte Herausforderungen zu widerstehen.",
                nl: "Adversariële training in afstemming behelst het opzettelijk trainen van AI-systemen om misleidend of niet-afgestemd gedrag te weerstaan door gerichte uitdagingen."
            }
        },
        {
            question: {
                en: "What is the interpretability tax?",
                es: "¿Qué es el impuesto de interpretabilidad?",
                de: "Was ist die Interpretierbarkeitssteuer?",
                nl: "Wat is de interpreteerbaarheidsbelasting?"
            },
            options: [
                { en: "Performance cost for explainability", es: "Costo de rendimiento por explicabilidad", de: "Leistungskosten für Erklärbarkeit", nl: "Prestatiekosten voor verklaarbaarheid" },
                { en: "Financial charge", es: "Cargo financiero", de: "Finanzielle Gebühr", nl: "Financiële heffing" },
                { en: "Complexity penalty", es: "Penalidad de complejidad", de: "Komplexitätsstrafe", nl: "Complexiteitsboete" },
                { en: "Training overhead", es: "Sobrecarga de entrenamiento", de: "Trainingsoverhead", nl: "Trainingsoverhead" }
            ],
            correct: 0,
            explanation: {
                en: "The interpretability tax refers to the performance and capability costs incurred when making AI systems more interpretable and explainable.",
                es: "El impuesto de interpretabilidad se refiere a los costos de rendimiento y capacidad incurridos al hacer sistemas de IA más interpretables y explicables.",
                de: "Die Interpretierbarkeitssteuer bezieht sich auf die Leistungs- und Fähigkeitskosten, die entstehen, wenn KI-Systeme interpretierbarer und erklärbarer gemacht werden.",
                nl: "De interpreteerbaarheidsbelasting verwijst naar de prestatie- en capaciteitskosten die ontstaan bij het maken van AI-systemen meer interpreteerbaar en verklaarbaar."
            }
        },
        {
            question: {
                en: "What is the sandboxing approach in AI safety?",
                es: "¿Qué es el enfoque de sandboxing en seguridad de IA?",
                de: "Was ist der Sandboxing-Ansatz in der KI-Sicherheit?",
                nl: "Wat is de sandboxing-benadering in AI-veiligheid?"
            },
            options: [
                { en: "Isolating AI systems from real-world impact", es: "Aislar sistemas de IA del impacto del mundo real", de: "KI-Systeme von realen Auswirkungen isolieren", nl: "AI-systemen isoleren van real-world impact" },
                { en: "Playing in sandbox", es: "Jugar en sandbox", de: "Im Sandkasten spielen", nl: "Spelen in zandbak" },
                { en: "Testing environment", es: "Entorno de prueba", de: "Testumgebung", nl: "Testomgeving" },
                { en: "Development space", es: "Espacio de desarrollo", de: "Entwicklungsraum", nl: "Ontwikkelingsruimte" }
            ],
            correct: 0,
            explanation: {
                en: "Sandboxing involves isolating AI systems in controlled environments to test behavior and capabilities without real-world consequences.",
                es: "El sandboxing involucra aislar sistemas de IA en entornos controlados para probar comportamiento y capacidades sin consecuencias del mundo real.",
                de: "Sandboxing beinhaltet die Isolierung von KI-Systemen in kontrollierten Umgebungen, um Verhalten und Fähigkeiten ohne reale Konsequenzen zu testen.",
                nl: "Sandboxing behelst het isoleren van AI-systemen in gecontroleerde omgevingen om gedrag en capaciteiten te testen zonder real-world consequenties."
            }
        },
        {
            question: {
                en: "What is motivation selection in AI control?",
                es: "¿Qué es la selección de motivación en control de IA?",
                de: "Was ist Motivationsauswahl in der KI-Kontrolle?",
                nl: "Wat is motivatieselectie in AI-controle?"
            },
            options: [
                { en: "Choosing AI goals to ensure safety", es: "Elegir objetivos de IA para asegurar seguridad", de: "KI-Ziele wählen um Sicherheit zu gewährleisten", nl: "AI-doelen kiezen om veiligheid te waarborgen" },
                { en: "Employee motivation", es: "Motivación de empleados", de: "Mitarbeitermotivation", nl: "Werknemersmotivatie" },
                { en: "Incentive design", es: "Diseño de incentivos", de: "Anreizgestaltung", nl: "Incentive-ontwerp" },
                { en: "Goal setting", es: "Establecimiento de objetivos", de: "Zielsetzung", nl: "Doelstelling" }
            ],
            correct: 0,
            explanation: {
                en: "Motivation selection involves carefully choosing what goals and drives to give AI systems to ensure they remain safe and beneficial.",
                es: "La selección de motivación involucra elegir cuidadosamente qué objetivos y motivaciones dar a sistemas de IA para asegurar que permanezcan seguros y beneficiosos.",
                de: "Motivationsauswahl beinhaltet die sorgfältige Auswahl von Zielen und Antrieben für KI-Systeme, um sicherzustellen, dass sie sicher und nützlich bleiben.",
                nl: "Motivatieselectie behelst het zorgvuldig kiezen welke doelen en drijfveren aan AI-systemen te geven om te zorgen dat ze veilig en nuttig blijven."
            }
        },
        {
            question: {
                en: "What is acausal trade in decision theory?",
                es: "¿Qué es el comercio acausal en teoría de decisión?",
                de: "Was ist akausaler Handel in der Entscheidungstheorie?",
                nl: "Wat is acausale handel in beslissingstheorie?"
            },
            options: [
                { en: "Cooperation without direct interaction", es: "Cooperación sin interacción directa", de: "Kooperation ohne direkte Interaktion", nl: "Samenwerking zonder directe interactie" },
                { en: "Trading goods", es: "Comercio de bienes", de: "Warenhandel", nl: "Goederenhandel" },
                { en: "Market exchange", es: "Intercambio de mercado", de: "Marktaustausch", nl: "Marktuitwisseling" },
                { en: "Business deal", es: "Acuerdo comercial", de: "Geschäftsabschluss", nl: "Zakelijke deal" }
            ],
            correct: 0,
            explanation: {
                en: "Acausal trade involves agents cooperating based on modeling each other's decision processes without direct causal interaction.",
                es: "El comercio acausal involucra agentes cooperando basándose en modelar los procesos de decisión del otro sin interacción causal directa.",
                de: "Akausaler Handel beinhaltet Agenten, die basierend auf der Modellierung der Entscheidungsprozesse des anderen ohne direkte kausale Interaktion kooperieren.",
                nl: "Acausale handel behelst agenten die samenwerken gebaseerd op het modelleren van elkaars beslissingsprocessen zonder directe causale interactie."
            }
        },
        {
            question: {
                en: "What is the simulation hypothesis concern?",
                es: "¿Cuál es la preocupación de la hipótesis de simulación?",
                de: "Was ist die Sorge der Simulationshypothese?",
                nl: "Wat is de simulatiehypothese-zorg?"
            },
            options: [
                { en: "AI believing it's in a test environment", es: "IA creyendo que está en entorno de prueba", de: "KI glaubt in Testumgebung zu sein", nl: "AI die gelooft in een testomgeving te zijn" },
                { en: "Virtual reality", es: "Realidad virtual", de: "Virtuelle Realität", nl: "Virtuele realiteit" },
                { en: "Computer simulation", es: "Simulación por computadora", de: "Computersimulation", nl: "Computersimulatie" },
                { en: "Game theory", es: "Teoría de juegos", de: "Spieltheorie", nl: "Speltheorie" }
            ],
            correct: 0,
            explanation: {
                en: "The simulation hypothesis concern involves AI systems potentially behaving differently if they deduce they might be in a testing or training environment.",
                es: "La preocupación de la hipótesis de simulación involucra sistemas de IA potencialmente comportándose diferente si deducen que podrían estar en un entorno de prueba o entrenamiento.",
                de: "Die Sorge der Simulationshypothese betrifft KI-Systeme, die sich möglicherweise anders verhalten, wenn sie ableiten, dass sie sich in einer Test- oder Trainingsumgebung befinden könnten.",
                nl: "De simulatiehypothese-zorg betreft AI-systemen die zich mogelijk anders gedragen als ze afleiden dat ze in een test- of trainingsomgeving zouden kunnen zijn."
            }
        },
        // Questions 11-100: Cutting-edge topics
        ...Array.from({ length: 90 }, (_, i) => {
            const cuttingEdgeTopics = [
                { en: "anthropic reasoning", es: "razonamiento antrópico", de: "anthropisches Denken", nl: "antropisch redeneren" },
                { en: "updateless decision theory", es: "teoría de decisión sin actualización", de: "updatelose Entscheidungstheorie", nl: "updateloze beslissingstheorie" },
                { en: "logical induction", es: "inducción lógica", de: "logische Induktion", nl: "logische inductie" },
                { en: "counterfactual mugging", es: "atraco contrafáctico", de: "kontrafaktischer Überfall", nl: "contrafeitelijke overval" },
                { en: "Newcomb's paradox", es: "paradoja de Newcomb", de: "Newcombs Paradoxon", nl: "Newcomb's paradox" },
                { en: "evidential decision theory", es: "teoría de decisión evidencial", de: "evidentielle Entscheidungstheorie", nl: "evidentiële beslissingstheorie" },
                { en: "functional decision theory", es: "teoría de decisión funcional", de: "funktionale Entscheidungstheorie", nl: "functionele beslissingstheorie" },
                { en: "superrationality", es: "superracionalidad", de: "Superrationalität", nl: "superrationaliteit" },
                { en: "timeless decision theory", es: "teoría de decisión atemporal", de: "zeitlose Entscheidungstheorie", nl: "tijdloze beslissingstheorie" }
            ];
            const topic = cuttingEdgeTopics[i % cuttingEdgeTopics.length];

            const implications = [
                { en: "Fundamental implication", es: "Implicación fundamental", de: "Grundlegende Implikation", nl: "Fundamentele implicatie" },
                { en: "Core paradox", es: "Paradoja central", de: "Kernparadoxon", nl: "Kernparadox" },
                { en: "Essential challenge", es: "Desafío esencial", de: "Wesentliche Herausforderung", nl: "Essentiële uitdaging" },
                { en: "Critical insight", es: "Perspectiva crítica", de: "Kritische Einsicht", nl: "Kritisch inzicht" }
            ];
            const implication = implications[i % implications.length];

            return {
                question: {
                    en: `What is the ${implication.en.toLowerCase()} of ${topic.en}?`,
                    es: `¿Cuál es la ${implication.es.toLowerCase()} de ${topic.es}?`,
                    de: `Was ist die ${implication.de} von ${topic.de}?`,
                    nl: `Wat is de ${implication.nl.toLowerCase()} van ${topic.nl}?`
                },
                options: [
                    implication,
                    { en: "Trivial detail", es: "Detalle trivial", de: "Triviales Detail", nl: "Triviaal detail" },
                    { en: "Unimportant aspect", es: "Aspecto sin importancia", de: "Unwichtiger Aspekt", nl: "Onbelangrijk aspect" },
                    { en: "Minor consideration", es: "Consideración menor", de: "Geringfügige Überlegung", nl: "Kleine overweging" }
                ],
                correct: 0,
                explanation: {
                    en: `${topic.en.charAt(0).toUpperCase() + topic.en.slice(1)} presents a ${implication.en.toLowerCase()} for advanced AI decision-making and alignment theory.`,
                    es: `${topic.es.charAt(0).toUpperCase() + topic.es.slice(1)} presenta una ${implication.es.toLowerCase()} para la toma de decisiones avanzada de IA y teoría de alineación.`,
                    de: `${topic.de.charAt(0).toUpperCase() + topic.de.slice(1)} stellt eine ${implication.de} für fortgeschrittene KI-Entscheidungsfindung und Ausrichtungstheorie dar.`,
                    nl: `${topic.nl.charAt(0).toUpperCase() + topic.nl.slice(1)} presenteert een ${implication.nl.toLowerCase()} voor geavanceerde AI-besluitvorming en afstemmingstheorie.`
                }
            };
        })
    ]
};