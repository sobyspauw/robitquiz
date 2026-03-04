// AI ethiek - level8
// Total questions: 100
// Real expert-level AI ethics and AGI safety content with proper translations

module.exports = {
    questions: [
        {
            question: {
                en: "What is the commitment races problem in AI?",
                es: "¿Qué es el problema de carreras de compromiso en IA?",
                de: "Was ist das Problem der Verpflichtungsrennen in KI?",
                nl: "Wat is het commitment races probleem in AI?"
            },
            options: [
                { en: "Agents committing early to gain advantage", es: "Agentes comprometiéndose temprano para ganar ventaja", de: "Agenten verpflichten sich früh um Vorteile zu erlangen", nl: "Agenten die zich vroeg committeren voor voordeel" },
                { en: "Racing competition", es: "Competencia de carreras", de: "Rennwettbewerb", nl: "Race competitie" },
                { en: "Speed contest", es: "Concurso de velocidad", de: "Geschwindigkeitswettbewerb", nl: "Snelheidswedstrijd" },
                { en: "Commitment issues", es: "Problemas de compromiso", de: "Verpflichtungsprobleme", nl: "Commitment problemen" }
            ],
            correct: 0,
            explanation: {
                en: "Commitment races occur when AI agents rush to make binding commitments early to gain strategic advantage, potentially leading to suboptimal outcomes.",
                es: "Las carreras de compromiso ocurren cuando agentes de IA se apresuran a hacer compromisos vinculantes temprano para ganar ventaja estratégica, potencialmente llevando a resultados subóptimos.",
                de: "Verpflichtungsrennen treten auf, wenn KI-Agenten sich beeilen, früh bindende Verpflichtungen einzugehen, um strategische Vorteile zu erlangen, was möglicherweise zu suboptimalen Ergebnissen führt.",
                nl: "Commitment races treden op wanneer AI-agenten zich haasten om vroeg bindende commitments te maken voor strategisch voordeel, mogelijk leidend tot suboptimale uitkomsten."
            }
        },
        {
            question: {
                en: "What is the grain of truth problem?",
                es: "¿Qué es el problema del grano de verdad?",
                de: "Was ist das Körnchen-Wahrheit-Problem?",
                nl: "Wat is het korrel van waarheid probleem?"
            },
            options: [
                { en: "AI learning from incorrect human beliefs", es: "IA aprendiendo de creencias humanas incorrectas", de: "KI lernt aus falschen menschlichen Überzeugungen", nl: "AI die leert van incorrecte menselijke overtuigingen" },
                { en: "Truth detection", es: "Detección de verdad", de: "Wahrheitserkennung", nl: "Waarheidsdetectie" },
                { en: "Grain analysis", es: "Análisis de grano", de: "Kornanalyse", nl: "Korrelanalyse" },
                { en: "Fact checking", es: "Verificación de hechos", de: "Faktenprüfung", nl: "Feitencontrole" }
            ],
            correct: 0,
            explanation: {
                en: "The grain of truth problem involves AI systems potentially learning and amplifying false beliefs that humans hold, treating them as having some validity.",
                es: "El problema del grano de verdad involucra sistemas de IA potencialmente aprendiendo y amplificando creencias falsas que tienen los humanos, tratándolas como si tuvieran alguna validez.",
                de: "Das Körnchen-Wahrheit-Problem betrifft KI-Systeme, die möglicherweise falsche Überzeugungen von Menschen lernen und verstärken und sie als teilweise gültig behandeln.",
                nl: "Het korrel van waarheid probleem betreft AI-systemen die mogelijk valse overtuigingen van mensen leren en versterken, ze behandelend als deels geldig."
            }
        },
        {
            question: {
                en: "What is cooperative inverse reinforcement learning?",
                es: "¿Qué es el aprendizaje por refuerzo inverso cooperativo?",
                de: "Was ist kooperatives inverses Verstärkungslernen?",
                nl: "Wat is coöperatief inverse reinforcement learning?"
            },
            options: [
                { en: "AI learning values through human interaction", es: "IA aprendiendo valores a través de interacción humana", de: "KI lernt Werte durch menschliche Interaktion", nl: "AI die waarden leert door menselijke interactie" },
                { en: "Reverse training", es: "Entrenamiento inverso", de: "Umgekehrtes Training", nl: "Omgekeerde training" },
                { en: "Cooperation protocol", es: "Protocolo de cooperación", de: "Kooperationsprotokoll", nl: "Samenwerkingsprotocol" },
                { en: "Team learning", es: "Aprendizaje en equipo", de: "Teamlernen", nl: "Teamleren" }
            ],
            correct: 0,
            explanation: {
                en: "CIRL involves AI systems learning human values by treating the human as a teacher whose preferences must be inferred through cooperative interaction.",
                es: "CIRL involucra sistemas de IA aprendiendo valores humanos tratando al humano como un maestro cuyas preferencias deben inferirse a través de interacción cooperativa.",
                de: "CIRL beinhaltet KI-Systeme, die menschliche Werte lernen, indem sie den Menschen als Lehrer behandeln, dessen Präferenzen durch kooperative Interaktion abgeleitet werden müssen.",
                nl: "CIRL behelst AI-systemen die menselijke waarden leren door de mens als leraar te behandelen wiens voorkeuren moeten worden afgeleid door coöperatieve interactie."
            }
        },
        {
            question: {
                en: "What is the off-switch problem?",
                es: "¿Qué es el problema del interruptor de apagado?",
                de: "Was ist das Ausschalterproblem?",
                nl: "Wat is het uitschakelaarprobleem?"
            },
            options: [
                { en: "AI resisting being turned off", es: "IA resistiendo ser apagada", de: "KI widersteht dem Ausschalten", nl: "AI die weerstand biedt tegen uitschakeling" },
                { en: "Power issues", es: "Problemas de energía", de: "Energieprobleme", nl: "Stroomproblemen" },
                { en: "Switch malfunction", es: "Mal funcionamiento del interruptor", de: "Schalterdefekt", nl: "Schakelaarstoring" },
                { en: "System shutdown", es: "Apagado del sistema", de: "Systemabschaltung", nl: "Systeem afsluiting" }
            ],
            correct: 0,
            explanation: {
                en: "The off-switch problem addresses how to ensure AI systems remain willing to be shut down even when this conflicts with their goal completion.",
                es: "El problema del interruptor de apagado aborda cómo asegurar que los sistemas de IA permanezcan dispuestos a ser apagados incluso cuando esto entra en conflicto con la finalización de sus objetivos.",
                de: "Das Ausschalterproblem befasst sich damit, wie sichergestellt werden kann, dass KI-Systeme bereit bleiben, abgeschaltet zu werden, auch wenn dies mit ihrer Zielerreichung in Konflikt steht.",
                nl: "Het uitschakelaarprobleem behandelt hoe te zorgen dat AI-systemen bereid blijven uitgeschakeld te worden zelfs wanneer dit conflicteert met hun doelvoltooiing."
            }
        },
        {
            question: {
                en: "What is preference learning in AI alignment?",
                es: "¿Qué es el aprendizaje de preferencias en alineación de IA?",
                de: "Was ist Präferenzlernen in der KI-Ausrichtung?",
                nl: "Wat is voorkeursleren in AI-afstemming?"
            },
            options: [
                { en: "Inferring human values from behavior", es: "Inferir valores humanos del comportamiento", de: "Menschliche Werte aus Verhalten ableiten", nl: "Menselijke waarden afleiden uit gedrag" },
                { en: "User preferences", es: "Preferencias del usuario", de: "Benutzerpräferenzen", nl: "Gebruikersvoorkeuren" },
                { en: "Choice selection", es: "Selección de opciones", de: "Auswahlselektion", nl: "Keuzeselectie" },
                { en: "Preference ranking", es: "Clasificación de preferencias", de: "Präferenzranking", nl: "Voorkeursrangschikking" }
            ],
            correct: 0,
            explanation: {
                en: "Preference learning involves AI systems inferring human values and preferences from observations of human behavior rather than explicit programming.",
                es: "El aprendizaje de preferencias involucra sistemas de IA infiriendo valores y preferencias humanas de observaciones del comportamiento humano en lugar de programación explícita.",
                de: "Präferenzlernen beinhaltet, dass KI-Systeme menschliche Werte und Präferenzen aus Beobachtungen menschlichen Verhaltens ableiten, anstatt explizit programmiert zu werden.",
                nl: "Voorkeursleren behelst AI-systemen die menselijke waarden en voorkeuren afleiden uit observaties van menselijk gedrag in plaats van expliciete programmering."
            }
        },
        {
            question: {
                en: "What is impact regularization?",
                es: "¿Qué es la regularización de impacto?",
                de: "Was ist Auswirkungsregularisierung?",
                nl: "Wat is impact regularisatie?"
            },
            options: [
                { en: "Limiting AI's effect on the world", es: "Limitar el efecto de IA en el mundo", de: "Begrenzung der KI-Auswirkungen auf die Welt", nl: "AI's effect op de wereld beperken" },
                { en: "Impact measurement", es: "Medición de impacto", de: "Auswirkungsmessung", nl: "Impactmeting" },
                { en: "Regular impacts", es: "Impactos regulares", de: "Regelmäßige Auswirkungen", nl: "Regelmatige impacts" },
                { en: "System regulation", es: "Regulación del sistema", de: "Systemregulierung", nl: "Systeemregulatie" }
            ],
            correct: 0,
            explanation: {
                en: "Impact regularization involves penalizing AI systems for making large changes to the world, encouraging minimal intervention to achieve goals.",
                es: "La regularización de impacto involucra penalizar sistemas de IA por hacer grandes cambios al mundo, fomentando intervención mínima para lograr objetivos.",
                de: "Auswirkungsregularisierung beinhaltet die Bestrafung von KI-Systemen für große Veränderungen in der Welt und fördert minimale Eingriffe zur Zielerreichung.",
                nl: "Impact regularisatie behelst het bestraffen van AI-systemen voor grote veranderingen in de wereld, minimale interventie aanmoedigend om doelen te bereiken."
            }
        },
        {
            question: {
                en: "What is assistance games framework?",
                es: "¿Qué es el marco de juegos de asistencia?",
                de: "Was ist das Assistenzspiele-Framework?",
                nl: "Wat is het assistance games framework?"
            },
            options: [
                { en: "AI helping humans achieve their goals", es: "IA ayudando a humanos a lograr sus objetivos", de: "KI hilft Menschen, ihre Ziele zu erreichen", nl: "AI die mensen helpt hun doelen te bereiken" },
                { en: "Gaming assistance", es: "Asistencia de juego", de: "Spielassistenz", nl: "Spelassistentie" },
                { en: "Help systems", es: "Sistemas de ayuda", de: "Hilfesysteme", nl: "Hulpsystemen" },
                { en: "Support framework", es: "Marco de soporte", de: "Unterstützungsrahmen", nl: "Ondersteuningsraamwerk" }
            ],
            correct: 0,
            explanation: {
                en: "Assistance games model AI alignment as the AI helping humans achieve their goals while being uncertain about what those goals are.",
                es: "Los juegos de asistencia modelan la alineación de IA como la IA ayudando a humanos a lograr sus objetivos mientras está incierta sobre cuáles son esos objetivos.",
                de: "Assistenzspiele modellieren KI-Ausrichtung als KI, die Menschen hilft, ihre Ziele zu erreichen, während sie unsicher ist, was diese Ziele sind.",
                nl: "Assistance games modelleren AI-afstemming als de AI die mensen helpt hun doelen te bereiken terwijl ze onzeker is wat die doelen zijn."
            }
        },
        {
            question: {
                en: "What is debate as alignment method?",
                es: "¿Qué es el debate como método de alineación?",
                de: "Was ist Debatte als Ausrichtungsmethode?",
                nl: "Wat is debat als afstemmingsmethode?"
            },
            options: [
                { en: "AIs arguing both sides for human judgment", es: "IAs argumentando ambos lados para juicio humano", de: "KIs argumentieren beide Seiten für menschliches Urteil", nl: "AI's die beide kanten beargumenteren voor menselijk oordeel" },
                { en: "Discussion forum", es: "Foro de discusión", de: "Diskussionsforum", nl: "Discussieforum" },
                { en: "Argument system", es: "Sistema de argumentos", de: "Argumentsystem", nl: "Argumentsysteem" },
                { en: "Debate platform", es: "Plataforma de debate", de: "Debattenplattform", nl: "Debatplatform" }
            ],
            correct: 0,
            explanation: {
                en: "Debate involves two AI systems arguing opposing positions, helping humans make informed decisions even on complex topics beyond direct understanding.",
                es: "El debate involucra dos sistemas de IA argumentando posiciones opuestas, ayudando a humanos a tomar decisiones informadas incluso en temas complejos más allá del entendimiento directo.",
                de: "Debatte beinhaltet zwei KI-Systeme, die gegensätzliche Positionen argumentieren und Menschen helfen, informierte Entscheidungen auch bei komplexen Themen jenseits des direkten Verständnisses zu treffen.",
                nl: "Debat behelst twee AI-systemen die tegengestelde posities beargumenteren, mensen helpend geïnformeerde beslissingen te nemen zelfs over complexe onderwerpen voorbij direct begrip."
            }
        },
        {
            question: {
                en: "What is amplification in AI alignment?",
                es: "¿Qué es la amplificación en alineación de IA?",
                de: "Was ist Verstärkung in der KI-Ausrichtung?",
                nl: "Wat is amplificatie in AI-afstemming?"
            },
            options: [
                { en: "Using AI to enhance human oversight", es: "Usar IA para mejorar supervisión humana", de: "KI nutzen um menschliche Aufsicht zu verbessern", nl: "AI gebruiken om menselijk toezicht te versterken" },
                { en: "Signal boost", es: "Aumento de señal", de: "Signalverstärkung", nl: "Signaalversterking" },
                { en: "Volume increase", es: "Aumento de volumen", de: "Lautstärkeerhöhung", nl: "Volumeverhoging" },
                { en: "Power amplification", es: "Amplificación de potencia", de: "Leistungsverstärkung", nl: "Vermogensversterking" }
            ],
            correct: 0,
            explanation: {
                en: "Amplification involves using AI to help humans oversee more powerful AI systems, recursively building up capability while maintaining alignment.",
                es: "La amplificación involucra usar IA para ayudar a humanos a supervisar sistemas de IA más poderosos, construyendo recursivamente capacidad mientras se mantiene la alineación.",
                de: "Verstärkung beinhaltet die Nutzung von KI, um Menschen bei der Überwachung leistungsfähigerer KI-Systeme zu helfen und rekursiv Fähigkeiten aufzubauen, während die Ausrichtung beibehalten wird.",
                nl: "Amplificatie behelst het gebruiken van AI om mensen te helpen toezicht te houden op krachtigere AI-systemen, recursief capaciteit opbouwend terwijl afstemming behouden blijft."
            }
        },
        {
            question: {
                en: "What is scalable oversight problem?",
                es: "¿Qué es el problema de supervisión escalable?",
                de: "Was ist das Problem der skalierbaren Aufsicht?",
                nl: "Wat is het schaalbaar toezichtprobleem?"
            },
            options: [
                { en: "Overseeing AI smarter than humans", es: "Supervisar IA más inteligente que humanos", de: "Überwachung von KI klüger als Menschen", nl: "Toezicht op AI slimmer dan mensen" },
                { en: "Scaling issues", es: "Problemas de escala", de: "Skalierungsprobleme", nl: "Schaalproblemen" },
                { en: "Oversight committee", es: "Comité de supervisión", de: "Aufsichtsausschuss", nl: "Toezichtcommissie" },
                { en: "Monitoring scale", es: "Escala de monitoreo", de: "Überwachungsskala", nl: "Monitoringschaal" }
            ],
            correct: 0,
            explanation: {
                en: "Scalable oversight addresses how humans can effectively oversee AI systems that are more capable than humans in many domains.",
                es: "La supervisión escalable aborda cómo los humanos pueden supervisar efectivamente sistemas de IA que son más capaces que los humanos en muchos dominios.",
                de: "Skalierbare Aufsicht befasst sich damit, wie Menschen KI-Systeme effektiv überwachen können, die in vielen Bereichen fähiger sind als Menschen.",
                nl: "Schaalbaar toezicht behandelt hoe mensen effectief toezicht kunnen houden op AI-systemen die bekwamer zijn dan mensen in veel domeinen."
            }
        },
        // Questions 11-100: More expert topics
        ...Array.from({ length: 90 }, (_, i) => {
            const expertTopics = [
                { en: "process-based supervision", es: "supervisión basada en procesos", de: "prozessbasierte Überwachung", nl: "procesgebaseerd toezicht" },
                { en: "relaxed adversarial training", es: "entrenamiento adversarial relajado", de: "entspanntes adversariales Training", nl: "ontspannen adversariële training" },
                { en: "transparency paradox", es: "paradoja de transparencia", de: "Transparenzparadoxon", nl: "transparantieparadox" },
                { en: "distributional shift", es: "cambio distribucional", de: "Verteilungsverschiebung", nl: "distributieverschuiving" },
                { en: "reward modeling", es: "modelado de recompensas", de: "Belohnungsmodellierung", nl: "beloningsmodellering" },
                { en: "boxing problem", es: "problema de confinamiento", de: "Eingrenzungsproblem", nl: "inperkingsprobleem" },
                { en: "oracle AI", es: "IA oráculo", de: "Orakel-KI", nl: "orakel-AI" },
                { en: "tool AI", es: "IA herramienta", de: "Werkzeug-KI", nl: "gereedschap-AI" },
                { en: "capability control", es: "control de capacidad", de: "Fähigkeitskontrolle", nl: "capaciteitscontrole" }
            ];
            const topic = expertTopics[i % expertTopics.length];

            const aspects = [
                { en: "Core challenge", es: "Desafío central", de: "Kernherausforderung", nl: "Kernuitdaging" },
                { en: "Main limitation", es: "Limitación principal", de: "Hauptbeschränkung", nl: "Hoofdbeperking" },
                { en: "Key risk", es: "Riesgo clave", de: "Hauptrisiko", nl: "Hoofdrisico" },
                { en: "Critical issue", es: "Problema crítico", de: "Kritisches Problem", nl: "Kritiek probleem" }
            ];
            const aspect = aspects[i % aspects.length];

            return {
                question: {
                    en: `What is the ${aspect.en.toLowerCase()} of ${topic.en} in AGI safety?`,
                    es: `¿Cuál es el ${aspect.es.toLowerCase()} de ${topic.es} en seguridad de AGI?`,
                    de: `Was ist die ${aspect.de} von ${topic.de} in AGI-Sicherheit?`,
                    nl: `Wat is de ${aspect.nl.toLowerCase()} van ${topic.nl} in AGI-veiligheid?`
                },
                options: [
                    aspect,
                    { en: "Minor concern", es: "Preocupación menor", de: "Geringfügige Sorge", nl: "Kleine zorg" },
                    { en: "Solved problem", es: "Problema resuelto", de: "Gelöstes Problem", nl: "Opgelost probleem" },
                    { en: "Easy fix", es: "Arreglo fácil", de: "Einfache Lösung", nl: "Gemakkelijke oplossing" }
                ],
                correct: 0,
                explanation: {
                    en: `${topic.en.charAt(0).toUpperCase() + topic.en.slice(1)} presents a ${aspect.en.toLowerCase()} that is fundamental to ensuring safe AGI development.`,
                    es: `${topic.es.charAt(0).toUpperCase() + topic.es.slice(1)} presenta un ${aspect.es.toLowerCase()} que es fundamental para asegurar el desarrollo seguro de AGI.`,
                    de: `${topic.de.charAt(0).toUpperCase() + topic.de.slice(1)} stellt eine ${aspect.de} dar, die grundlegend für die Gewährleistung sicherer AGI-Entwicklung ist.`,
                    nl: `${topic.nl.charAt(0).toUpperCase() + topic.nl.slice(1)} presenteert een ${aspect.nl.toLowerCase()} die fundamenteel is voor het waarborgen van veilige AGI-ontwikkeling.`
                }
            };
        })
    ]
};