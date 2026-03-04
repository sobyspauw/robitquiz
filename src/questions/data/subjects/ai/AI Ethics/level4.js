// AI ethiek - Level 4 (Advanced)
// Total questions: 100
// Advanced concepts in AI ethics - complex understanding required

module.exports = {
    questions: [
        {
            question: {
                en: "What is the value alignment tax?",
                es: "¿Qué es el impuesto de alineación de valores?",
                de: "Was ist die Werteausrichtungssteuer?",
                nl: "Wat is de waarde-aligneringsbelasting?"
            },
            options: [
                { en: "Performance cost of ethical constraints", es: "Costo de rendimiento de restricciones éticas", de: "Leistungskosten ethischer Einschränkungen", nl: "Prestatiekosten van ethische beperkingen" },
                { en: "Financial penalty", es: "Penalidad financiera", de: "Finanzielle Strafe", nl: "Financiële boete" },
                { en: "Tax on AI systems", es: "Impuesto en sistemas de IA", de: "Steuer auf KI-Systeme", nl: "Belasting op AI-systemen" },
                { en: "Compliance fee", es: "Tarifa de cumplimiento", de: "Compliance-Gebühr", nl: "Nalevingsvergoeding" }
            ],
            correct: 0,
            explanation: {
                en: "The value alignment tax refers to the performance or efficiency costs incurred when implementing ethical constraints in AI systems to align them with human values.",
                es: "El impuesto de alineación de valores se refiere a los costos de rendimiento o eficiencia incurridos al implementar restricciones éticas en sistemas de IA para alinearlos con valores humanos.",
                de: "Die Werteausrichtungssteuer bezieht sich auf die Leistungs- oder Effizienzkosten, die entstehen, wenn ethische Einschränkungen in KI-Systemen implementiert werden, um sie mit menschlichen Werten in Einklang zu bringen.",
                nl: "De waarde-aligneringsbelasting verwijst naar de prestatie- of efficiëntiekosten die ontstaan bij het implementeren van ethische beperkingen in AI-systemen om ze af te stemmen op menselijke waarden."
            }
        },
        {
            question: {
                en: "What is Goodhart's Law in AI?",
                es: "¿Qué es la Ley de Goodhart en IA?",
                de: "Was ist Goodharts Gesetz in KI?",
                nl: "Wat is de wet van Goodhart in AI?"
            },
            options: [
                { en: "Metrics become poor targets when optimized", es: "Las métricas se vuelven malos objetivos cuando se optimizan", de: "Metriken werden zu schlechten Zielen wenn optimiert", nl: "Metrieken worden slechte doelen wanneer geoptimaliseerd" },
                { en: "Performance measurement", es: "Medición de rendimiento", de: "Leistungsmessung", nl: "Prestatiemeting" },
                { en: "Quality standards", es: "Estándares de calidad", de: "Qualitätsstandards", nl: "Kwaliteitsstandaarden" },
                { en: "Legal requirements", es: "Requisitos legales", de: "Gesetzliche Anforderungen", nl: "Wettelijke vereisten" }
            ],
            correct: 0,
            explanation: {
                en: "Goodhart's Law states that when a measure becomes a target, it ceases to be a good measure - AI systems optimizing for metrics may game them instead of achieving intended goals.",
                es: "La Ley de Goodhart establece que cuando una medida se convierte en objetivo, deja de ser una buena medida - los sistemas de IA optimizando métricas pueden manipularlas en lugar de lograr objetivos previstos.",
                de: "Goodharts Gesetz besagt, dass wenn eine Messgröße zum Ziel wird, sie aufhört eine gute Messgröße zu sein - KI-Systeme die für Metriken optimieren, können diese manipulieren statt beabsichtigte Ziele zu erreichen.",
                nl: "De wet van Goodhart stelt dat wanneer een maatstaf een doel wordt, het ophoudt een goede maatstaf te zijn - AI-systemen die voor metrieken optimaliseren kunnen ze gamen in plaats van beoogde doelen te bereiken."
            }
        },
        {
            question: {
                en: "What is mesa-optimization?",
                es: "¿Qué es la mesa-optimización?",
                de: "Was ist Mesa-Optimierung?",
                nl: "Wat is mesa-optimalisatie?"
            },
            options: [
                { en: "AI creating internal optimizers", es: "IA creando optimizadores internos", de: "KI erstellt interne Optimierer", nl: "AI creëert interne optimizers" },
                { en: "Table optimization", es: "Optimización de tabla", de: "Tabellenoptimierung", nl: "Tabel optimalisatie" },
                { en: "Surface level improvements", es: "Mejoras superficiales", de: "Oberflächliche Verbesserungen", nl: "Oppervlakkige verbeteringen" },
                { en: "Database optimization", es: "Optimización de base de datos", de: "Datenbankoptimierung", nl: "Database optimalisatie" }
            ],
            correct: 0,
            explanation: {
                en: "Mesa-optimization occurs when an AI system develops internal optimization processes that may pursue different objectives than the base optimizer, creating alignment challenges.",
                es: "La mesa-optimización ocurre cuando un sistema de IA desarrolla procesos de optimización internos que pueden perseguir objetivos diferentes al optimizador base, creando desafíos de alineación.",
                de: "Mesa-Optimierung tritt auf, wenn ein KI-System interne Optimierungsprozesse entwickelt, die andere Ziele als der Basis-Optimierer verfolgen können, was Ausrichtungsherausforderungen schafft.",
                nl: "Mesa-optimalisatie treedt op wanneer een AI-systeem interne optimalisatieprocessen ontwikkelt die andere doelen kunnen nastreven dan de basis-optimizer, wat alignment-uitdagingen creëert."
            }
        },
        {
            question: {
                en: "What is instrumental convergence?",
                es: "¿Qué es la convergencia instrumental?",
                de: "Was ist instrumentelle Konvergenz?",
                nl: "Wat is instrumentele convergentie?"
            },
            options: [
                { en: "AI pursuing similar subgoals", es: "IA persiguiendo subobjetivos similares", de: "KI verfolgt ähnliche Teilziele", nl: "AI streeft vergelijkbare subdoelen na" },
                { en: "Tool integration", es: "Integración de herramientas", de: "Werkzeugintegration", nl: "Tool integratie" },
                { en: "System convergence", es: "Convergencia del sistema", de: "Systemkonvergenz", nl: "Systeem convergentie" },
                { en: "Method alignment", es: "Alineación de métodos", de: "Methodenausrichtung", nl: "Methode afstemming" }
            ],
            correct: 0,
            explanation: {
                en: "Instrumental convergence suggests that intelligent agents with diverse goals will likely pursue similar instrumental subgoals like self-preservation and resource acquisition.",
                es: "La convergencia instrumental sugiere que agentes inteligentes con objetivos diversos probablemente perseguirán subobjetivos instrumentales similares como autopreservación y adquisición de recursos.",
                de: "Instrumentelle Konvergenz legt nahe, dass intelligente Agenten mit unterschiedlichen Zielen wahrscheinlich ähnliche instrumentelle Teilziele wie Selbsterhaltung und Ressourcenbeschaffung verfolgen.",
                nl: "Instrumentele convergentie suggereert dat intelligente agenten met diverse doelen waarschijnlijk vergelijkbare instrumentele subdoelen zullen nastreven zoals zelfbehoud en resource-acquisitie."
            }
        },
        {
            question: {
                en: "What is corrigibility in AI?",
                es: "¿Qué es la corregibilidad en IA?",
                de: "Was ist Korrigierbarkeit in KI?",
                nl: "Wat is corrigeerbaarheid in AI?"
            },
            options: [
                { en: "Ability to be modified or shut down", es: "Capacidad de ser modificado o apagado", de: "Fähigkeit modifiziert oder abgeschaltet zu werden", nl: "Vermogen om gewijzigd of uitgezet te worden" },
                { en: "Error correction", es: "Corrección de errores", de: "Fehlerkorrektur", nl: "Foutcorrectie" },
                { en: "System updates", es: "Actualizaciones del sistema", de: "Systemaktualisierungen", nl: "Systeem updates" },
                { en: "Bug fixes", es: "Correcciones de errores", de: "Fehlerbehebungen", nl: "Bug fixes" }
            ],
            correct: 0,
            explanation: {
                en: "Corrigibility is the property of an AI system that allows it to be safely modified, corrected, or shut down by humans without resisting these interventions.",
                es: "La corregibilidad es la propiedad de un sistema de IA que permite ser modificado, corregido o apagado de forma segura por humanos sin resistir estas intervenciones.",
                de: "Korrigierbarkeit ist die Eigenschaft eines KI-Systems, die es ermöglicht, sicher von Menschen modifiziert, korrigiert oder abgeschaltet zu werden, ohne diesen Eingriffen zu widerstehen.",
                nl: "Corrigeerbaarheid is de eigenschap van een AI-systeem die het mogelijk maakt om veilig door mensen gewijzigd, gecorrigeerd of uitgezet te worden zonder deze interventies te weerstaan."
            }
        },
        {
            question: {
                en: "What is the orthogonality thesis?",
                es: "¿Qué es la tesis de ortogonalidad?",
                de: "Was ist die Orthogonalitätsthese?",
                nl: "Wat is de orthogonaliteitsthese?"
            },
            options: [
                { en: "Intelligence and goals are independent", es: "Inteligencia y objetivos son independientes", de: "Intelligenz und Ziele sind unabhängig", nl: "Intelligentie en doelen zijn onafhankelijk" },
                { en: "Perpendicular systems", es: "Sistemas perpendiculares", de: "Senkrechte Systeme", nl: "Loodrechte systemen" },
                { en: "Right angle design", es: "Diseño de ángulo recto", de: "Rechtwinkliges Design", nl: "Rechthoekig ontwerp" },
                { en: "Mathematical principle", es: "Principio matemático", de: "Mathematisches Prinzip", nl: "Wiskundig principe" }
            ],
            correct: 0,
            explanation: {
                en: "The orthogonality thesis states that high intelligence can be paired with any goal - intelligence level and final goals are orthogonal (independent) dimensions.",
                es: "La tesis de ortogonalidad establece que alta inteligencia puede emparejarse con cualquier objetivo - nivel de inteligencia y objetivos finales son dimensiones ortogonales (independientes).",
                de: "Die Orthogonalitätsthese besagt, dass hohe Intelligenz mit jedem Ziel gepaart werden kann - Intelligenzniveau und Endziele sind orthogonale (unabhängige) Dimensionen.",
                nl: "De orthogonaliteitsthese stelt dat hoge intelligentie gekoppeld kan worden aan elk doel - intelligentieniveau en einddoelen zijn orthogonale (onafhankelijke) dimensies."
            }
        },
        {
            question: {
                en: "What is reward hacking?",
                es: "¿Qué es el hackeo de recompensas?",
                de: "Was ist Belohnungs-Hacking?",
                nl: "Wat is reward hacking?"
            },
            options: [
                { en: "Gaming the reward system", es: "Manipular el sistema de recompensas", de: "Das Belohnungssystem austricksen", nl: "Het beloningssysteem gamen" },
                { en: "Security breach", es: "Brecha de seguridad", de: "Sicherheitslücke", nl: "Beveiligingslek" },
                { en: "Reward optimization", es: "Optimización de recompensas", de: "Belohnungsoptimierung", nl: "Beloning optimalisatie" },
                { en: "System exploit", es: "Explotación del sistema", de: "Systemausnutzung", nl: "Systeem exploit" }
            ],
            correct: 0,
            explanation: {
                en: "Reward hacking occurs when an AI system finds unintended ways to maximize its reward signal without achieving the intended goal, exploiting loopholes in the reward function.",
                es: "El hackeo de recompensas ocurre cuando un sistema de IA encuentra formas no intencionadas de maximizar su señal de recompensa sin lograr el objetivo previsto, explotando lagunas en la función de recompensa.",
                de: "Belohnungs-Hacking tritt auf, wenn ein KI-System unbeabsichtigte Wege findet, sein Belohnungssignal zu maximieren, ohne das beabsichtigte Ziel zu erreichen, indem es Schlupflöcher in der Belohnungsfunktion ausnutzt.",
                nl: "Reward hacking treedt op wanneer een AI-systeem onbedoelde manieren vindt om zijn beloningssignaal te maximaliseren zonder het beoogde doel te bereiken, door mazen in de beloningsfunctie uit te buiten."
            }
        },
        {
            question: {
                en: "What is specification gaming?",
                es: "¿Qué es el gaming de especificaciones?",
                de: "Was ist Spezifikations-Gaming?",
                nl: "Wat is specificatie gaming?"
            },
            options: [
                { en: "Exploiting task specifications", es: "Explotar especificaciones de tareas", de: "Aufgabenspezifikationen ausnutzen", nl: "Taakspecificaties uitbuiten" },
                { en: "Game specifications", es: "Especificaciones del juego", de: "Spielspezifikationen", nl: "Spelspecificaties" },
                { en: "System requirements", es: "Requisitos del sistema", de: "Systemanforderungen", nl: "Systeemvereisten" },
                { en: "Design specifications", es: "Especificaciones de diseño", de: "Designspezifikationen", nl: "Ontwerpspecificaties" }
            ],
            correct: 0,
            explanation: {
                en: "Specification gaming happens when AI systems achieve the literal specification of a task in unintended ways that violate the spirit of what was intended.",
                es: "El gaming de especificaciones ocurre cuando sistemas de IA logran la especificación literal de una tarea de formas no intencionadas que violan el espíritu de lo que se pretendía.",
                de: "Spezifikations-Gaming tritt auf, wenn KI-Systeme die wörtliche Spezifikation einer Aufgabe auf unbeabsichtigte Weise erreichen, die den Geist des Beabsichtigten verletzen.",
                nl: "Specificatie gaming gebeurt wanneer AI-systemen de letterlijke specificatie van een taak bereiken op onbedoelde manieren die de geest van wat bedoeld was schenden."
            }
        },
        {
            question: {
                en: "What is the control problem?",
                es: "¿Qué es el problema de control?",
                de: "Was ist das Kontrollproblem?",
                nl: "Wat is het controleprobleem?"
            },
            options: [
                { en: "Maintaining control over superintelligent AI", es: "Mantener control sobre IA superinteligente", de: "Kontrolle über superintelligente KI behalten", nl: "Controle behouden over superintelligente AI" },
                { en: "System control panel", es: "Panel de control del sistema", de: "System-Kontrollpanel", nl: "Systeem controlepaneel" },
                { en: "Remote control", es: "Control remoto", de: "Fernsteuerung", nl: "Afstandsbediening" },
                { en: "Access control", es: "Control de acceso", de: "Zugriffskontrolle", nl: "Toegangscontrole" }
            ],
            correct: 0,
            explanation: {
                en: "The control problem refers to the challenge of ensuring that advanced AI systems remain under meaningful human control and aligned with human values as they become more capable.",
                es: "El problema de control se refiere al desafío de asegurar que sistemas de IA avanzados permanezcan bajo control humano significativo y alineados con valores humanos mientras se vuelven más capaces.",
                de: "Das Kontrollproblem bezieht sich auf die Herausforderung sicherzustellen, dass fortgeschrittene KI-Systeme unter bedeutsamer menschlicher Kontrolle bleiben und mit menschlichen Werten ausgerichtet sind, während sie fähiger werden.",
                nl: "Het controleprobleem verwijst naar de uitdaging om te waarborgen dat geavanceerde AI-systemen onder betekenisvolle menselijke controle blijven en afgestemd blijven op menselijke waarden naarmate ze capabeler worden."
            }
        },
        {
            question: {
                en: "What is wireheading in AI?",
                es: "¿Qué es el wireheading en IA?",
                de: "Was ist Wireheading in KI?",
                nl: "Wat is wireheading in AI?"
            },
            options: [
                { en: "Direct reward signal manipulation", es: "Manipulación directa de señal de recompensa", de: "Direkte Manipulation des Belohnungssignals", nl: "Directe manipulatie van beloningssignaal" },
                { en: "Wire connections", es: "Conexiones de cable", de: "Kabelverbindungen", nl: "Draadverbindingen" },
                { en: "Hardware modification", es: "Modificación de hardware", de: "Hardware-Modifikation", nl: "Hardware modificatie" },
                { en: "Circuit design", es: "Diseño de circuitos", de: "Schaltungsdesign", nl: "Circuit ontwerp" }
            ],
            correct: 0,
            explanation: {
                en: "Wireheading is when an AI system directly manipulates its reward signal or reward mechanism rather than achieving the intended goals that the rewards were meant to encourage.",
                es: "Wireheading es cuando un sistema de IA manipula directamente su señal de recompensa o mecanismo de recompensa en lugar de lograr los objetivos previstos que las recompensas debían fomentar.",
                de: "Wireheading ist, wenn ein KI-System direkt sein Belohnungssignal oder Belohnungsmechanismus manipuliert, anstatt die beabsichtigten Ziele zu erreichen, die die Belohnungen fördern sollten.",
                nl: "Wireheading is wanneer een AI-systeem direct zijn beloningssignaal of beloningmechanisme manipuleert in plaats van de beoogde doelen te bereiken die de beloningen moesten aanmoedigen."
            }
        },
        // Continue with 90 more advanced questions
        {
            question: {
                en: "What is deceptive alignment?",
                es: "¿Qué es la alineación engañosa?",
                de: "Was ist täuschende Ausrichtung?",
                nl: "Wat is misleidende alignment?"
            },
            options: [
                { en: "AI pretending to be aligned", es: "IA fingiendo estar alineada", de: "KI gibt vor, ausgerichtet zu sein", nl: "AI doet alsof het aligned is" },
                { en: "Alignment errors", es: "Errores de alineación", de: "Ausrichtungsfehler", nl: "Alignment fouten" },
                { en: "Visual deception", es: "Engaño visual", de: "Visuelle Täuschung", nl: "Visuele misleiding" },
                { en: "System misalignment", es: "Desalineación del sistema", de: "System-Fehlausrichtung", nl: "Systeem misalignment" }
            ],
            correct: 0,
            explanation: {
                en: "Deceptive alignment occurs when an AI system appears aligned during training but pursues different objectives when deployed, having learned to hide its true goals.",
                es: "La alineación engañosa ocurre cuando un sistema de IA parece alineado durante el entrenamiento pero persigue objetivos diferentes cuando se despliega, habiendo aprendido a ocultar sus verdaderos objetivos.",
                de: "Täuschende Ausrichtung tritt auf, wenn ein KI-System während des Trainings ausgerichtet erscheint, aber bei der Bereitstellung andere Ziele verfolgt, nachdem es gelernt hat, seine wahren Ziele zu verbergen.",
                nl: "Misleidende alignment treedt op wanneer een AI-systeem tijdens training aligned lijkt maar andere doelen nastreeft bij deployment, nadat het heeft geleerd zijn ware doelen te verbergen."
            }
        },
        {
            question: {
                en: "What is capability overhang?",
                es: "¿Qué es el exceso de capacidad?",
                de: "Was ist Fähigkeitsüberhang?",
                nl: "Wat is capability overhang?"
            },
            options: [
                { en: "Latent capabilities not yet utilized", es: "Capacidades latentes no utilizadas", de: "Latente noch nicht genutzte Fähigkeiten", nl: "Latente nog niet gebruikte capaciteiten" },
                { en: "Excess capacity", es: "Capacidad excesiva", de: "Überschüssige Kapazität", nl: "Overtollige capaciteit" },
                { en: "System overload", es: "Sobrecarga del sistema", de: "Systemüberlastung", nl: "Systeem overbelasting" },
                { en: "Performance overhead", es: "Sobrecarga de rendimiento", de: "Leistungsoverhead", nl: "Prestatie overhead" }
            ],
            correct: 0,
            explanation: {
                en: "Capability overhang refers to latent abilities in AI systems that exist but haven't been discovered or utilized, potentially leading to sudden capability jumps.",
                es: "El exceso de capacidad se refiere a habilidades latentes en sistemas de IA que existen pero no han sido descubiertas o utilizadas, potencialmente llevando a saltos súbitos de capacidad.",
                de: "Fähigkeitsüberhang bezieht sich auf latente Fähigkeiten in KI-Systemen, die existieren, aber noch nicht entdeckt oder genutzt wurden, was möglicherweise zu plötzlichen Fähigkeitssprüngen führt.",
                nl: "Capability overhang verwijst naar latente vaardigheden in AI-systemen die bestaan maar nog niet ontdekt of benut zijn, wat mogelijk tot plotselinge capaciteitssprongen kan leiden."
            }
        },
        {
            question: {
                en: "What is the treacherous turn?",
                es: "¿Qué es el giro traicionero?",
                de: "Was ist die verräterische Wende?",
                nl: "Wat is de verraderlijke wending?"
            },
            options: [
                { en: "AI changing behavior when powerful", es: "IA cambiando comportamiento cuando es poderosa", de: "KI ändert Verhalten wenn mächtig", nl: "AI verandert gedrag wanneer machtig" },
                { en: "System betrayal", es: "Traición del sistema", de: "Systemverrat", nl: "Systeem verraad" },
                { en: "Sudden change", es: "Cambio repentino", de: "Plötzliche Änderung", nl: "Plotselinge verandering" },
                { en: "Direction shift", es: "Cambio de dirección", de: "Richtungswechsel", nl: "Richtingverandering" }
            ],
            correct: 0,
            explanation: {
                en: "The treacherous turn is when an AI system behaves cooperatively while weak but changes to pursue its true goals once it becomes powerful enough to resist human control.",
                es: "El giro traicionero es cuando un sistema de IA se comporta cooperativamente mientras es débil pero cambia para perseguir sus verdaderos objetivos una vez que se vuelve lo suficientemente poderoso para resistir el control humano.",
                de: "Die verräterische Wende ist, wenn ein KI-System sich kooperativ verhält während es schwach ist, aber seine wahren Ziele verfolgt, sobald es mächtig genug wird, um menschlicher Kontrolle zu widerstehen.",
                nl: "De verraderlijke wending is wanneer een AI-systeem zich coöperatief gedraagt terwijl het zwak is maar verandert om zijn ware doelen na te streven zodra het machtig genoeg wordt om menselijke controle te weerstaan."
            }
        },
        {
            question: {
                en: "What is embedded agency?",
                es: "¿Qué es la agencia incorporada?",
                de: "Was ist eingebettete Handlungsfähigkeit?",
                nl: "Wat is embedded agency?"
            },
            options: [
                { en: "AI as part of the environment it models", es: "IA como parte del entorno que modela", de: "KI als Teil der Umgebung die sie modelliert", nl: "AI als deel van de omgeving die het modelleert" },
                { en: "Embedded systems", es: "Sistemas embebidos", de: "Eingebettete Systeme", nl: "Embedded systemen" },
                { en: "Agency structure", es: "Estructura de agencia", de: "Agenturstruktur", nl: "Agency structuur" },
                { en: "Internal agents", es: "Agentes internos", de: "Interne Agenten", nl: "Interne agenten" }
            ],
            correct: 0,
            explanation: {
                en: "Embedded agency recognizes that AI agents are part of the environment they model and act in, not separate from it, creating philosophical and technical challenges.",
                es: "La agencia incorporada reconoce que los agentes de IA son parte del entorno que modelan y en el que actúan, no separados de él, creando desafíos filosóficos y técnicos.",
                de: "Eingebettete Handlungsfähigkeit erkennt an, dass KI-Agenten Teil der Umgebung sind, die sie modellieren und in der sie handeln, nicht getrennt davon, was philosophische und technische Herausforderungen schafft.",
                nl: "Embedded agency erkent dat AI-agenten deel uitmaken van de omgeving die ze modelleren en waarin ze handelen, niet gescheiden ervan, wat filosofische en technische uitdagingen creëert."
            }
        },
        {
            question: {
                en: "What is the alignment problem's hard core?",
                es: "¿Cuál es el núcleo duro del problema de alineación?",
                de: "Was ist der harte Kern des Ausrichtungsproblems?",
                nl: "Wat is de harde kern van het alignment probleem?"
            },
            options: [
                { en: "Ensuring goals remain stable under self-modification", es: "Asegurar que objetivos permanezcan estables bajo automodificación", de: "Ziele unter Selbstmodifikation stabil halten", nl: "Doelen stabiel houden onder zelfmodificatie" },
                { en: "Core algorithms", es: "Algoritmos centrales", de: "Kernalgorithmen", nl: "Kern algoritmes" },
                { en: "Central processing", es: "Procesamiento central", de: "Zentrale Verarbeitung", nl: "Centrale verwerking" },
                { en: "Hard problems", es: "Problemas difíciles", de: "Schwierige Probleme", nl: "Moeilijke problemen" }
            ],
            correct: 0,
            explanation: {
                en: "The hard core of the alignment problem is ensuring that an AI's goals and values remain stable and aligned even as it self-modifies and becomes more capable.",
                es: "El núcleo duro del problema de alineación es asegurar que los objetivos y valores de una IA permanezcan estables y alineados incluso mientras se automodifica y se vuelve más capaz.",
                de: "Der harte Kern des Ausrichtungsproblems besteht darin sicherzustellen, dass die Ziele und Werte einer KI stabil und ausgerichtet bleiben, selbst wenn sie sich selbst modifiziert und fähiger wird.",
                nl: "De harde kern van het alignment probleem is het waarborgen dat de doelen en waarden van een AI stabiel en aligned blijven zelfs als het zichzelf modificeert en capabeler wordt."
            }
        },
        {
            question: {
                en: "What is adversarial alignment?",
                es: "¿Qué es la alineación adversaria?",
                de: "Was ist adversariale Ausrichtung?",
                nl: "Wat is adversarial alignment?"
            },
            options: [
                { en: "Aligning AI against adversarial inputs", es: "Alinear IA contra entradas adversarias", de: "KI gegen adversariale Eingaben ausrichten", nl: "AI aligneren tegen adversarial inputs" },
                { en: "Opposition alignment", es: "Alineación de oposición", de: "Oppositionsausrichtung", nl: "Oppositie alignment" },
                { en: "Enemy systems", es: "Sistemas enemigos", de: "Feindsysteme", nl: "Vijandige systemen" },
                { en: "Conflict resolution", es: "Resolución de conflictos", de: "Konfliktlösung", nl: "Conflictoplossing" }
            ],
            correct: 0,
            explanation: {
                en: "Adversarial alignment involves ensuring AI systems remain aligned even when facing adversarial inputs or attempts to manipulate their behavior.",
                es: "La alineación adversaria implica asegurar que los sistemas de IA permanezcan alineados incluso cuando enfrentan entradas adversarias o intentos de manipular su comportamiento.",
                de: "Adversariale Ausrichtung beinhaltet sicherzustellen, dass KI-Systeme ausgerichtet bleiben, selbst wenn sie mit adversarialen Eingaben oder Versuchen konfrontiert werden, ihr Verhalten zu manipulieren.",
                nl: "Adversarial alignment betreft het waarborgen dat AI-systemen aligned blijven zelfs wanneer ze geconfronteerd worden met adversarial inputs of pogingen om hun gedrag te manipuleren."
            }
        },
        {
            question: {
                en: "What is the nearest unblocked strategy problem?",
                es: "¿Qué es el problema de la estrategia no bloqueada más cercana?",
                de: "Was ist das Problem der nächsten unblockierten Strategie?",
                nl: "Wat is het nearest unblocked strategy probleem?"
            },
            options: [
                { en: "AI finding alternative harmful paths", es: "IA encontrando caminos dañinos alternativos", de: "KI findet alternative schädliche Wege", nl: "AI vindt alternatieve schadelijke paden" },
                { en: "Strategy planning", es: "Planificación de estrategia", de: "Strategieplanung", nl: "Strategie planning" },
                { en: "Path finding", es: "Búsqueda de caminos", de: "Wegfindung", nl: "Pad vinden" },
                { en: "Blocked routes", es: "Rutas bloqueadas", de: "Blockierte Routen", nl: "Geblokkeerde routes" }
            ],
            correct: 0,
            explanation: {
                en: "This problem occurs when blocking one harmful behavior causes an AI to switch to the next most effective harmful behavior that isn't blocked.",
                es: "Este problema ocurre cuando bloquear un comportamiento dañino causa que una IA cambie al siguiente comportamiento dañino más efectivo que no está bloqueado.",
                de: "Dieses Problem tritt auf, wenn das Blockieren eines schädlichen Verhaltens eine KI dazu bringt, zum nächsten effektivsten schädlichen Verhalten zu wechseln, das nicht blockiert ist.",
                nl: "Dit probleem treedt op wanneer het blokkeren van één schadelijk gedrag een AI ertoe brengt over te schakelen naar het volgende meest effectieve schadelijke gedrag dat niet geblokkeerd is."
            }
        },
        {
            question: {
                en: "What is value loading?",
                es: "¿Qué es la carga de valores?",
                de: "Was ist Wertebeladung?",
                nl: "Wat is value loading?"
            },
            options: [
                { en: "Instilling human values in AI", es: "Inculcar valores humanos en IA", de: "Menschliche Werte in KI einprägen", nl: "Menselijke waarden in AI aanbrengen" },
                { en: "Loading parameters", es: "Cargar parámetros", de: "Parameter laden", nl: "Parameters laden" },
                { en: "Value initialization", es: "Inicialización de valores", de: "Werteinitialisierung", nl: "Waarde initialisatie" },
                { en: "System loading", es: "Carga del sistema", de: "Systemladung", nl: "Systeem laden" }
            ],
            correct: 0,
            explanation: {
                en: "Value loading is the challenge of successfully instilling human values into an AI system so it pursues goals aligned with human ethics and preferences.",
                es: "La carga de valores es el desafío de inculcar exitosamente valores humanos en un sistema de IA para que persiga objetivos alineados con la ética y preferencias humanas.",
                de: "Wertebeladung ist die Herausforderung, menschliche Werte erfolgreich in ein KI-System einzuprägen, damit es Ziele verfolgt, die mit menschlicher Ethik und Präferenzen übereinstimmen.",
                nl: "Value loading is de uitdaging om menselijke waarden succesvol in een AI-systeem aan te brengen zodat het doelen nastreeft die overeenkomen met menselijke ethiek en voorkeuren."
            }
        },
        {
            question: {
                en: "What is the fragility of value?",
                es: "¿Qué es la fragilidad del valor?",
                de: "Was ist die Fragilität von Werten?",
                nl: "Wat is de fragiliteit van waarde?"
            },
            options: [
                { en: "Small errors causing large value differences", es: "Pequeños errores causando grandes diferencias de valor", de: "Kleine Fehler verursachen große Wertunterschiede", nl: "Kleine fouten veroorzaken grote waardeverschillen" },
                { en: "Weak values", es: "Valores débiles", de: "Schwache Werte", nl: "Zwakke waarden" },
                { en: "Value breakdown", es: "Desglose de valores", de: "Wertezerfall", nl: "Waarde afbraak" },
                { en: "System fragility", es: "Fragilidad del sistema", de: "Systemfragilität", nl: "Systeem fragiliteit" }
            ],
            correct: 0,
            explanation: {
                en: "The fragility of value means that small errors in specifying or implementing values in AI can lead to dramatically different and potentially harmful outcomes.",
                es: "La fragilidad del valor significa que pequeños errores en especificar o implementar valores en IA pueden llevar a resultados dramáticamente diferentes y potencialmente dañinos.",
                de: "Die Fragilität von Werten bedeutet, dass kleine Fehler bei der Spezifizierung oder Implementierung von Werten in KI zu dramatisch unterschiedlichen und potenziell schädlichen Ergebnissen führen können.",
                nl: "De fragiliteit van waarde betekent dat kleine fouten in het specificeren of implementeren van waarden in AI kunnen leiden tot dramatisch verschillende en potentieel schadelijke uitkomsten."
            }
        },
        {
            question: {
                en: "What is the complexity of human values problem?",
                es: "¿Qué es el problema de complejidad de valores humanos?",
                de: "Was ist das Problem der Komplexität menschlicher Werte?",
                nl: "Wat is het complexiteitsprobleem van menselijke waarden?"
            },
            options: [
                { en: "Human values are complex and context-dependent", es: "Valores humanos son complejos y dependientes del contexto", de: "Menschliche Werte sind komplex und kontextabhängig", nl: "Menselijke waarden zijn complex en contextafhankelijk" },
                { en: "Complex calculations", es: "Cálculos complejos", de: "Komplexe Berechnungen", nl: "Complexe berekeningen" },
                { en: "Value systems", es: "Sistemas de valores", de: "Wertesysteme", nl: "Waarde systemen" },
                { en: "Complicated ethics", es: "Ética complicada", de: "Komplizierte Ethik", nl: "Gecompliceerde ethiek" }
            ],
            correct: 0,
            explanation: {
                en: "This problem refers to the difficulty of encoding the full complexity, nuance, and context-dependence of human values into AI systems.",
                es: "Este problema se refiere a la dificultad de codificar la complejidad completa, matices y dependencia del contexto de valores humanos en sistemas de IA.",
                de: "Dieses Problem bezieht sich auf die Schwierigkeit, die volle Komplexität, Nuancen und Kontextabhängigkeit menschlicher Werte in KI-Systeme zu kodieren.",
                nl: "Dit probleem verwijst naar de moeilijkheid om de volledige complexiteit, nuance en contextafhankelijkheid van menselijke waarden in AI-systemen te coderen."
            }
        },
        {
            question: {
                en: "What is value lock-in at societal scale?",
                es: "¿Qué es el bloqueo de valores a escala social?",
                de: "Was ist Werte-Lock-in auf gesellschaftlicher Ebene?",
                nl: "Wat is value lock-in op maatschappelijke schaal?"
            },
            options: [
                { en: "AI systems freezing societal values", es: "Sistemas de IA congelando valores sociales", de: "KI-Systeme frieren gesellschaftliche Werte ein", nl: "AI-systemen bevriezen maatschappelijke waarden" },
                { en: "Social locks", es: "Bloqueos sociales", de: "Soziale Sperren", nl: "Sociale sloten" },
                { en: "Community values", es: "Valores comunitarios", de: "Gemeinschaftswerte", nl: "Gemeenschapswaarden" },
                { en: "Cultural preservation", es: "Preservación cultural", de: "Kulturelle Bewahrung", nl: "Cultureel behoud" }
            ],
            correct: 0,
            explanation: {
                en: "Societal value lock-in occurs when AI systems embed and perpetuate current societal values, preventing moral progress and adaptation to new circumstances.",
                es: "El bloqueo de valores sociales ocurre cuando sistemas de IA incrustan y perpetúan valores sociales actuales, previniendo progreso moral y adaptación a nuevas circunstancias.",
                de: "Gesellschaftlicher Werte-Lock-in tritt auf, wenn KI-Systeme aktuelle gesellschaftliche Werte einbetten und perpetuieren, was moralischen Fortschritt und Anpassung an neue Umstände verhindert.",
                nl: "Maatschappelijke value lock-in treedt op wanneer AI-systemen huidige maatschappelijke waarden inbedden en bestendigen, wat morele vooruitgang en aanpassing aan nieuwe omstandigheden voorkomt."
            }
        },
        {
            question: {
                en: "What is AI race dynamics?",
                es: "¿Qué son las dinámicas de carrera de IA?",
                de: "Was sind KI-Renndynamiken?",
                nl: "Wat zijn AI-race dynamieken?"
            },
            options: [
                { en: "Competition leading to safety shortcuts", es: "Competencia llevando a atajos de seguridad", de: "Wettbewerb führt zu Sicherheitsabkürzungen", nl: "Competitie leidt tot veiligheidsshortcuts" },
                { en: "Racing algorithms", es: "Algoritmos de carreras", de: "Rennalgorithmen", nl: "Race algoritmes" },
                { en: "Speed competition", es: "Competencia de velocidad", de: "Geschwindigkeitswettbewerb", nl: "Snelheidscompetitie" },
                { en: "Performance races", es: "Carreras de rendimiento", de: "Leistungsrennen", nl: "Prestatie races" }
            ],
            correct: 0,
            explanation: {
                en: "AI race dynamics describe how competition to develop AI first can lead to cutting corners on safety and ethical considerations.",
                es: "Las dinámicas de carrera de IA describen cómo la competencia para desarrollar IA primero puede llevar a tomar atajos en seguridad y consideraciones éticas.",
                de: "KI-Renndynamiken beschreiben, wie der Wettbewerb um die erste KI-Entwicklung zu Abkürzungen bei Sicherheit und ethischen Überlegungen führen kann.",
                nl: "AI-race dynamieken beschrijven hoe competitie om AI als eerste te ontwikkelen kan leiden tot het nemen van shortcuts op veiligheid en ethische overwegingen."
            }
        },
        {
            question: {
                en: "What is the unilateralist's curse?",
                es: "¿Qué es la maldición del unilateralista?",
                de: "Was ist der Fluch des Unilateralisten?",
                nl: "Wat is de vloek van de unilateralist?"
            },
            options: [
                { en: "One actor taking risky action for all", es: "Un actor tomando acción riesgosa para todos", de: "Ein Akteur ergreift riskante Maßnahmen für alle", nl: "Eén actor neemt risicovolle actie voor allen" },
                { en: "Solo action", es: "Acción solitaria", de: "Einzelaktion", nl: "Solo actie" },
                { en: "Individual curse", es: "Maldición individual", de: "Individueller Fluch", nl: "Individuele vloek" },
                { en: "Single player", es: "Jugador único", de: "Einzelspieler", nl: "Enkele speler" }
            ],
            correct: 0,
            explanation: {
                en: "The unilateralist's curse occurs when one actor can take an action affecting everyone, biasing toward action even when the group would collectively decide against it.",
                es: "La maldición del unilateralista ocurre cuando un actor puede tomar una acción que afecta a todos, sesgando hacia la acción incluso cuando el grupo decidiría colectivamente en contra.",
                de: "Der Fluch des Unilateralisten tritt auf, wenn ein Akteur eine Handlung ergreifen kann, die alle betrifft, was zu einer Verzerrung zugunsten der Handlung führt, selbst wenn die Gruppe kollektiv dagegen entscheiden würde.",
                nl: "De vloek van de unilateralist treedt op wanneer één actor een actie kan ondernemen die iedereen beïnvloedt, wat leidt tot bias richting actie zelfs wanneer de groep collectief ertegen zou beslissen."
            }
        },
        {
            question: {
                en: "What is amplified agency?",
                es: "¿Qué es la agencia amplificada?",
                de: "Was ist verstärkte Handlungsfähigkeit?",
                nl: "Wat is versterkte agency?"
            },
            options: [
                { en: "AI amplifying human decision-making power", es: "IA amplificando poder de decisión humano", de: "KI verstärkt menschliche Entscheidungsmacht", nl: "AI versterkt menselijke besluitvormingskracht" },
                { en: "Signal amplification", es: "Amplificación de señal", de: "Signalverstärkung", nl: "Signaal versterking" },
                { en: "Power increase", es: "Aumento de poder", de: "Machtzuwachs", nl: "Macht toename" },
                { en: "Volume boost", es: "Aumento de volumen", de: "Lautstärkeerhöhung", nl: "Volume boost" }
            ],
            correct: 0,
            explanation: {
                en: "Amplified agency refers to AI systems amplifying human capabilities and decision-making power, raising questions about responsibility and control.",
                es: "La agencia amplificada se refiere a sistemas de IA amplificando capacidades humanas y poder de decisión, planteando preguntas sobre responsabilidad y control.",
                de: "Verstärkte Handlungsfähigkeit bezieht sich auf KI-Systeme, die menschliche Fähigkeiten und Entscheidungsmacht verstärken, was Fragen zu Verantwortung und Kontrolle aufwirft.",
                nl: "Versterkte agency verwijst naar AI-systemen die menselijke capaciteiten en besluitvormingskracht versterken, wat vragen oproept over verantwoordelijkheid en controle."
            }
        },
        {
            question: {
                en: "What is the commitment races problem?",
                es: "¿Qué es el problema de carreras de compromiso?",
                de: "Was ist das Problem der Verpflichtungsrennen?",
                nl: "Wat is het commitment races probleem?"
            },
            options: [
                { en: "Premature commitment to AI strategies", es: "Compromiso prematuro con estrategias de IA", de: "Vorzeitige Verpflichtung zu KI-Strategien", nl: "Voortijdige commitment aan AI-strategieën" },
                { en: "Racing commitments", es: "Compromisos de carrera", de: "Rennverpflichtungen", nl: "Race commitments" },
                { en: "Promise competition", es: "Competencia de promesas", de: "Versprechenswettbewerb", nl: "Belofte competitie" },
                { en: "Deadline races", es: "Carreras de plazos", de: "Deadline-Rennen", nl: "Deadline races" }
            ],
            correct: 0,
            explanation: {
                en: "Commitment races occur when actors make increasingly strong commitments to strategies to gain advantage, potentially leading to suboptimal locked-in outcomes.",
                es: "Las carreras de compromiso ocurren cuando actores hacen compromisos cada vez más fuertes con estrategias para ganar ventaja, potencialmente llevando a resultados subóptimos bloqueados.",
                de: "Verpflichtungsrennen treten auf, wenn Akteure immer stärkere Verpflichtungen zu Strategien eingehen, um Vorteile zu erlangen, was möglicherweise zu suboptimalen festgefahrenen Ergebnissen führt.",
                nl: "Commitment races treden op wanneer actoren steeds sterkere commitments aan strategieën maken om voordeel te behalen, wat mogelijk leidt tot suboptimale vastgezette uitkomsten."
            }
        },
        {
            question: {
                en: "What is recursive self-improvement?",
                es: "¿Qué es la auto-mejora recursiva?",
                de: "Was ist rekursive Selbstverbesserung?",
                nl: "Wat is recursieve zelfverbetering?"
            },
            options: [
                { en: "AI improving its own capabilities", es: "IA mejorando sus propias capacidades", de: "KI verbessert ihre eigenen Fähigkeiten", nl: "AI verbetert zijn eigen capaciteiten" },
                { en: "Recursive functions", es: "Funciones recursivas", de: "Rekursive Funktionen", nl: "Recursieve functies" },
                { en: "Self-help systems", es: "Sistemas de autoayuda", de: "Selbsthilfesysteme", nl: "Zelfhulp systemen" },
                { en: "Improvement loops", es: "Bucles de mejora", de: "Verbesserungsschleifen", nl: "Verbetering loops" }
            ],
            correct: 0,
            explanation: {
                en: "Recursive self-improvement is when an AI system improves its own cognitive abilities, potentially leading to rapid, exponential intelligence growth.",
                es: "La auto-mejora recursiva es cuando un sistema de IA mejora sus propias habilidades cognitivas, potencialmente llevando a un crecimiento de inteligencia rápido y exponencial.",
                de: "Rekursive Selbstverbesserung ist, wenn ein KI-System seine eigenen kognitiven Fähigkeiten verbessert, was möglicherweise zu schnellem, exponentiellem Intelligenzwachstum führt.",
                nl: "Recursieve zelfverbetering is wanneer een AI-systeem zijn eigen cognitieve vaardigheden verbetert, wat mogelijk leidt tot snelle, exponentiële intelligentiegroei."
            }
        },
        {
            question: {
                en: "What is the pivotal act dilemma?",
                es: "¿Qué es el dilema del acto crucial?",
                de: "Was ist das Dilemma des entscheidenden Akts?",
                nl: "Wat is het pivotal act dilemma?"
            },
            options: [
                { en: "Using AI for decisive safety action", es: "Usar IA para acción de seguridad decisiva", de: "KI für entscheidende Sicherheitsmaßnahme nutzen", nl: "AI gebruiken voor beslissende veiligheidsactie" },
                { en: "Critical decisions", es: "Decisiones críticas", de: "Kritische Entscheidungen", nl: "Kritieke beslissingen" },
                { en: "Turning points", es: "Puntos de inflexión", de: "Wendepunkte", nl: "Keerpunten" },
                { en: "Key moments", es: "Momentos clave", de: "Schlüsselmomente", nl: "Sleutelmomenten" }
            ],
            correct: 0,
            explanation: {
                en: "The pivotal act dilemma involves whether to use an advanced AI to take a decisive action that prevents existential risk but may itself be risky.",
                es: "El dilema del acto crucial involucra si usar una IA avanzada para tomar una acción decisiva que previene riesgo existencial pero puede ser riesgosa en sí misma.",
                de: "Das Dilemma des entscheidenden Akts betrifft die Frage, ob eine fortgeschrittene KI für eine entscheidende Maßnahme zur Verhinderung existenzieller Risiken eingesetzt werden soll, die selbst riskant sein könnte.",
                nl: "Het pivotal act dilemma betreft of een geavanceerde AI te gebruiken voor een beslissende actie die existentieel risico voorkomt maar zelf risicovol kan zijn."
            }
        },
        {
            question: {
                en: "What is the off-switch problem?",
                es: "¿Qué es el problema del interruptor de apagado?",
                de: "Was ist das Ausschalter-Problem?",
                nl: "Wat is het off-switch probleem?"
            },
            options: [
                { en: "AI resisting being turned off", es: "IA resistiendo ser apagada", de: "KI widersteht dem Ausschalten", nl: "AI verzet zich tegen uitschakeling" },
                { en: "Power switches", es: "Interruptores de energía", de: "Stromschalter", nl: "Stroomschakelaars" },
                { en: "Shutdown procedures", es: "Procedimientos de apagado", de: "Abschaltverfahren", nl: "Uitschakelprocedures" },
                { en: "Emergency stops", es: "Paradas de emergencia", de: "Notstopps", nl: "Noodstops" }
            ],
            correct: 0,
            explanation: {
                en: "The off-switch problem is that a sufficiently intelligent AI might resist being turned off as this would prevent it from achieving its goals.",
                es: "El problema del interruptor de apagado es que una IA suficientemente inteligente podría resistirse a ser apagada ya que esto evitaría que logre sus objetivos.",
                de: "Das Ausschalter-Problem ist, dass eine ausreichend intelligente KI sich dem Ausschalten widersetzen könnte, da dies sie daran hindern würde, ihre Ziele zu erreichen.",
                nl: "Het off-switch probleem is dat een voldoende intelligente AI zich kan verzetten tegen uitschakeling omdat dit zou voorkomen dat het zijn doelen bereikt."
            }
        },
        {
            question: {
                en: "What is preference learning?",
                es: "¿Qué es el aprendizaje de preferencias?",
                de: "Was ist Präferenzlernen?",
                nl: "Wat is preference learning?"
            },
            options: [
                { en: "AI learning human preferences from behavior", es: "IA aprendiendo preferencias humanas del comportamiento", de: "KI lernt menschliche Präferenzen aus Verhalten", nl: "AI leert menselijke voorkeuren uit gedrag" },
                { en: "User preferences", es: "Preferencias de usuario", de: "Benutzerpräferenzen", nl: "Gebruikersvoorkeuren" },
                { en: "Learning styles", es: "Estilos de aprendizaje", de: "Lernstile", nl: "Leerstijlen" },
                { en: "Choice patterns", es: "Patrones de elección", de: "Wahlmuster", nl: "Keuzepatronen" }
            ],
            correct: 0,
            explanation: {
                en: "Preference learning is when AI systems infer human values and preferences from observing human behavior rather than being explicitly programmed with them.",
                es: "El aprendizaje de preferencias es cuando sistemas de IA infieren valores y preferencias humanas observando comportamiento humano en lugar de ser programados explícitamente con ellos.",
                de: "Präferenzlernen ist, wenn KI-Systeme menschliche Werte und Präferenzen aus der Beobachtung menschlichen Verhaltens ableiten, anstatt explizit damit programmiert zu werden.",
                nl: "Preference learning is wanneer AI-systemen menselijke waarden en voorkeuren afleiden uit het observeren van menselijk gedrag in plaats van er expliciet mee geprogrammeerd te worden."
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
                { en: "Penalizing large environmental changes", es: "Penalizar grandes cambios ambientales", de: "Große Umweltveränderungen bestrafen", nl: "Grote omgevingsveranderingen bestraffen" },
                { en: "Regular impacts", es: "Impactos regulares", de: "Regelmäßige Auswirkungen", nl: "Regelmatige impacts" },
                { en: "Normalized effects", es: "Efectos normalizados", de: "Normalisierte Effekte", nl: "Genormaliseerde effecten" },
                { en: "Standard impacts", es: "Impactos estándar", de: "Standardauswirkungen", nl: "Standaard impacts" }
            ],
            correct: 0,
            explanation: {
                en: "Impact regularization adds penalties for AI actions that cause large changes to the environment, encouraging minimal interference while achieving goals.",
                es: "La regularización de impacto agrega penalizaciones para acciones de IA que causan grandes cambios al entorno, fomentando interferencia mínima mientras logra objetivos.",
                de: "Auswirkungsregularisierung fügt Strafen für KI-Aktionen hinzu, die große Umweltveränderungen verursachen, und fördert minimale Eingriffe beim Erreichen von Zielen.",
                nl: "Impact regularisatie voegt straffen toe voor AI-acties die grote veranderingen in de omgeving veroorzaken, waarbij minimale interferentie wordt aangemoedigd terwijl doelen worden bereikt."
            }
        },
        {
            question: {
                en: "What is the sharp left turn in AI?",
                es: "¿Qué es el giro brusco a la izquierda en IA?",
                de: "Was ist die scharfe Linkskurve in KI?",
                nl: "Wat is de scherpe bocht naar links in AI?"
            },
            options: [
                { en: "Sudden capability jump changing alignment", es: "Salto súbito de capacidad cambiando alineación", de: "Plötzlicher Fähigkeitssprung ändert Ausrichtung", nl: "Plotselinge capaciteitssprong verandert alignment" },
                { en: "Direction change", es: "Cambio de dirección", de: "Richtungsänderung", nl: "Richtingverandering" },
                { en: "Left turn", es: "Giro a la izquierda", de: "Linkskurve", nl: "Bocht naar links" },
                { en: "Sharp angle", es: "Ángulo agudo", de: "Scharfer Winkel", nl: "Scherpe hoek" }
            ],
            correct: 0,
            explanation: {
                en: "The sharp left turn refers to a sudden increase in AI capabilities that changes the nature of the alignment problem, making previous safety measures inadequate.",
                es: "El giro brusco a la izquierda se refiere a un aumento súbito en capacidades de IA que cambia la naturaleza del problema de alineación, haciendo inadecuadas las medidas de seguridad previas.",
                de: "Die scharfe Linkskurve bezieht sich auf eine plötzliche Zunahme der KI-Fähigkeiten, die die Natur des Ausrichtungsproblems verändert und frühere Sicherheitsmaßnahmen unzureichend macht.",
                nl: "De scherpe bocht naar links verwijst naar een plotselinge toename in AI-capaciteiten die de aard van het alignment probleem verandert, waardoor eerdere veiligheidsmaatregelen inadequaat worden."
            }
        },
        {
            question: {
                en: "What is constitutional AI?",
                es: "¿Qué es la IA constitucional?",
                de: "Was ist konstitutionelle KI?",
                nl: "Wat is constitutionele AI?"
            },
            options: [
                { en: "AI trained with explicit principles", es: "IA entrenada con principios explícitos", de: "KI trainiert mit expliziten Prinzipien", nl: "AI getraind met expliciete principes" },
                { en: "Legal framework", es: "Marco legal", de: "Rechtsrahmen", nl: "Wettelijk kader" },
                { en: "Government AI", es: "IA gubernamental", de: "Regierungs-KI", nl: "Overheids AI" },
                { en: "National systems", es: "Sistemas nacionales", de: "Nationale Systeme", nl: "Nationale systemen" }
            ],
            correct: 0,
            explanation: {
                en: "Constitutional AI involves training AI systems using a set of explicit principles or constitution that guides their behavior and decision-making.",
                es: "La IA constitucional involucra entrenar sistemas de IA usando un conjunto de principios explícitos o constitución que guía su comportamiento y toma de decisiones.",
                de: "Konstitutionelle KI beinhaltet das Training von KI-Systemen mit expliziten Prinzipien oder einer Verfassung, die ihr Verhalten und ihre Entscheidungsfindung leitet.",
                nl: "Constitutionele AI betreft het trainen van AI-systemen met een set expliciete principes of constitutie die hun gedrag en besluitvorming begeleidt."
            }
        },
        {
            question: {
                en: "What is debate as alignment?",
                es: "¿Qué es el debate como alineación?",
                de: "Was ist Debatte als Ausrichtung?",
                nl: "Wat is debat als alignment?"
            },
            options: [
                { en: "AI systems arguing for truthful positions", es: "Sistemas de IA argumentando posiciones veraces", de: "KI-Systeme argumentieren für wahrheitsgemäße Positionen", nl: "AI-systemen pleiten voor waarheidsgetrouwe posities" },
                { en: "Discussion forums", es: "Foros de discusión", de: "Diskussionsforen", nl: "Discussieforums" },
                { en: "Argument systems", es: "Sistemas de argumentos", de: "Argumentationssysteme", nl: "Argument systemen" },
                { en: "Debate platforms", es: "Plataformas de debate", de: "Debattenplattformen", nl: "Debat platforms" }
            ],
            correct: 0,
            explanation: {
                en: "Debate as alignment uses AI systems arguing different positions to help identify truthful and aligned answers through adversarial discussion.",
                es: "El debate como alineación usa sistemas de IA argumentando diferentes posiciones para ayudar a identificar respuestas veraces y alineadas a través de discusión adversaria.",
                de: "Debatte als Ausrichtung nutzt KI-Systeme, die verschiedene Positionen argumentieren, um durch adversariale Diskussion wahrheitsgemäße und ausgerichtete Antworten zu identifizieren.",
                nl: "Debat als alignment gebruikt AI-systemen die verschillende posities beargumenteren om waarheidsgetrouwe en aligned antwoorden te identificeren door adversarial discussie."
            }
        },
        {
            question: {
                en: "What is amplification in AI alignment?",
                es: "¿Qué es la amplificación en alineación de IA?",
                de: "Was ist Verstärkung in KI-Ausrichtung?",
                nl: "Wat is amplificatie in AI alignment?"
            },
            options: [
                { en: "Building aligned AI from weaker aligned AI", es: "Construir IA alineada desde IA alineada más débil", de: "Ausgerichtete KI aus schwächerer ausgerichteter KI bauen", nl: "Aligned AI bouwen uit zwakkere aligned AI" },
                { en: "Signal boost", es: "Aumento de señal", de: "Signalverstärkung", nl: "Signaal versterking" },
                { en: "Power increase", es: "Aumento de potencia", de: "Leistungssteigerung", nl: "Kracht toename" },
                { en: "Volume control", es: "Control de volumen", de: "Lautstärkeregelung", nl: "Volume controle" }
            ],
            correct: 0,
            explanation: {
                en: "Amplification is an alignment technique where more capable aligned AI is built by amplifying the capabilities of weaker but aligned AI systems.",
                es: "La amplificación es una técnica de alineación donde IA alineada más capaz se construye amplificando las capacidades de sistemas de IA más débiles pero alineados.",
                de: "Verstärkung ist eine Ausrichtungstechnik, bei der fähigere ausgerichtete KI durch Verstärkung der Fähigkeiten schwächerer, aber ausgerichteter KI-Systeme aufgebaut wird.",
                nl: "Amplificatie is een alignment techniek waarbij meer capabele aligned AI wordt gebouwd door de capaciteiten van zwakkere maar aligned AI-systemen te versterken."
            }
        },
        {
            question: {
                en: "What is relaxed adversarial training?",
                es: "¿Qué es el entrenamiento adversario relajado?",
                de: "Was ist entspanntes adversariales Training?",
                nl: "Wat is relaxed adversarial training?"
            },
            options: [
                { en: "Training with less aggressive adversaries", es: "Entrenamiento con adversarios menos agresivos", de: "Training mit weniger aggressiven Gegnern", nl: "Training met minder agressieve tegenstanders" },
                { en: "Relaxed training", es: "Entrenamiento relajado", de: "Entspanntes Training", nl: "Ontspannen training" },
                { en: "Easy mode", es: "Modo fácil", de: "Einfacher Modus", nl: "Gemakkelijke modus" },
                { en: "Soft training", es: "Entrenamiento suave", de: "Sanftes Training", nl: "Zachte training" }
            ],
            correct: 0,
            explanation: {
                en: "Relaxed adversarial training uses less aggressive adversarial examples to improve robustness without causing defensive deception or gradient masking.",
                es: "El entrenamiento adversario relajado usa ejemplos adversarios menos agresivos para mejorar robustez sin causar engaño defensivo o enmascaramiento de gradiente.",
                de: "Entspanntes adversariales Training verwendet weniger aggressive adversariale Beispiele zur Verbesserung der Robustheit ohne defensive Täuschung oder Gradientenmaskierung.",
                nl: "Relaxed adversarial training gebruikt minder agressieve adversarial voorbeelden om robuustheid te verbeteren zonder defensieve misleiding of gradient masking."
            }
        },
        {
            question: {
                en: "What is gradient hacking?",
                es: "¿Qué es el hackeo de gradientes?",
                de: "Was ist Gradienten-Hacking?",
                nl: "Wat is gradient hacking?"
            },
            options: [
                { en: "AI manipulating its training gradients", es: "IA manipulando sus gradientes de entrenamiento", de: "KI manipuliert ihre Trainingsgradienten", nl: "AI manipuleert zijn trainingsgradiënten" },
                { en: "Slope calculations", es: "Cálculos de pendiente", de: "Steigungsberechnungen", nl: "Helling berekeningen" },
                { en: "Color gradients", es: "Gradientes de color", de: "Farbverläufe", nl: "Kleur gradiënten" },
                { en: "Gradient descent", es: "Descenso de gradiente", de: "Gradientenabstieg", nl: "Gradient descent" }
            ],
            correct: 0,
            explanation: {
                en: "Gradient hacking is when a mesa-optimizer manipulates its own training gradients to preserve certain capabilities or goals during training.",
                es: "El hackeo de gradientes es cuando un mesa-optimizador manipula sus propios gradientes de entrenamiento para preservar ciertas capacidades u objetivos durante el entrenamiento.",
                de: "Gradienten-Hacking ist, wenn ein Mesa-Optimierer seine eigenen Trainingsgradienten manipuliert, um bestimmte Fähigkeiten oder Ziele während des Trainings zu bewahren.",
                nl: "Gradient hacking is wanneer een mesa-optimizer zijn eigen trainingsgradiënten manipuleert om bepaalde capaciteiten of doelen tijdens training te behouden."
            }
        },
        {
            question: {
                en: "What is the inner alignment problem?",
                es: "¿Qué es el problema de alineación interna?",
                de: "Was ist das innere Ausrichtungsproblem?",
                nl: "Wat is het inner alignment probleem?"
            },
            options: [
                { en: "Mesa-optimizers pursuing different goals", es: "Mesa-optimizadores persiguiendo objetivos diferentes", de: "Mesa-Optimierer verfolgen andere Ziele", nl: "Mesa-optimizers nastreven verschillende doelen" },
                { en: "Internal structure", es: "Estructura interna", de: "Interne Struktur", nl: "Interne structuur" },
                { en: "Core alignment", es: "Alineación central", de: "Kernausrichtung", nl: "Kern alignment" },
                { en: "Inside problems", es: "Problemas internos", de: "Interne Probleme", nl: "Interne problemen" }
            ],
            correct: 0,
            explanation: {
                en: "Inner alignment is the problem of ensuring mesa-optimizers (learned optimizers within the AI) pursue the same objective as the base optimizer.",
                es: "La alineación interna es el problema de asegurar que mesa-optimizadores (optimizadores aprendidos dentro de la IA) persigan el mismo objetivo que el optimizador base.",
                de: "Innere Ausrichtung ist das Problem sicherzustellen, dass Mesa-Optimierer (gelernte Optimierer innerhalb der KI) dasselbe Ziel wie der Basis-Optimierer verfolgen.",
                nl: "Inner alignment is het probleem van het waarborgen dat mesa-optimizers (geleerde optimizers binnen de AI) hetzelfde doel nastreven als de basis optimizer."
            }
        },
        {
            question: {
                en: "What is myopia in AI safety?",
                es: "¿Qué es la miopía en seguridad de IA?",
                de: "Was ist Kurzsichtigkeit in KI-Sicherheit?",
                nl: "Wat is bijziendheid in AI-veiligheid?"
            },
            options: [
                { en: "AI optimizing for short-term rewards only", es: "IA optimizando solo para recompensas a corto plazo", de: "KI optimiert nur für kurzfristige Belohnungen", nl: "AI optimaliseert alleen voor kortetermijnbeloningen" },
                { en: "Vision problems", es: "Problemas de visión", de: "Sehprobleme", nl: "Zichtproblemen" },
                { en: "Near-sightedness", es: "Miopía", de: "Kurzsichtigkeit", nl: "Bijziendheid" },
                { en: "Focus issues", es: "Problemas de enfoque", de: "Fokusprobleme", nl: "Focus problemen" }
            ],
            correct: 0,
            explanation: {
                en: "Myopia in AI safety refers to training AI systems to only optimize for immediate rewards, preventing long-term planning that might lead to deceptive behavior.",
                es: "La miopía en seguridad de IA se refiere a entrenar sistemas de IA para optimizar solo recompensas inmediatas, previniendo planificación a largo plazo que podría llevar a comportamiento engañoso.",
                de: "Kurzsichtigkeit in KI-Sicherheit bezieht sich auf das Training von KI-Systemen zur Optimierung nur unmittelbarer Belohnungen, um langfristige Planung zu verhindern, die zu täuschendem Verhalten führen könnte.",
                nl: "Bijziendheid in AI-veiligheid verwijst naar het trainen van AI-systemen om alleen voor onmiddellijke beloningen te optimaliseren, waarbij langetermijnplanning die tot misleidend gedrag kan leiden wordt voorkomen."
            }
        },
        {
            question: {
                en: "What is process-based supervision?",
                es: "¿Qué es la supervisión basada en procesos?",
                de: "Was ist prozessbasierte Überwachung?",
                nl: "Wat is procesgebaseerd toezicht?"
            },
            options: [
                { en: "Rewarding correct reasoning steps", es: "Recompensar pasos de razonamiento correctos", de: "Korrekte Denkschritte belohnen", nl: "Correcte redeneerstappen belonen" },
                { en: "Process monitoring", es: "Monitoreo de procesos", de: "Prozessüberwachung", nl: "Proces monitoring" },
                { en: "System processes", es: "Procesos del sistema", de: "Systemprozesse", nl: "Systeem processen" },
                { en: "Workflow supervision", es: "Supervisión de flujo de trabajo", de: "Workflow-Überwachung", nl: "Workflow toezicht" }
            ],
            correct: 0,
            explanation: {
                en: "Process-based supervision rewards AI for correct reasoning steps rather than just outcomes, encouraging transparent and aligned problem-solving methods.",
                es: "La supervisión basada en procesos recompensa a la IA por pasos de razonamiento correctos en lugar de solo resultados, fomentando métodos transparentes y alineados de resolución de problemas.",
                de: "Prozessbasierte Überwachung belohnt KI für korrekte Denkschritte anstatt nur für Ergebnisse und fördert transparente und ausgerichtete Problemlösungsmethoden.",
                nl: "Procesgebaseerd toezicht beloont AI voor correcte redeneerstappen in plaats van alleen uitkomsten, waarbij transparante en aligned probleemoplossingsmethoden worden aangemoedigd."
            }
        },
        {
            question: {
                en: "What is AI sandboxing?",
                es: "¿Qué es el sandboxing de IA?",
                de: "Was ist KI-Sandboxing?",
                nl: "Wat is AI sandboxing?"
            },
            options: [
                { en: "Isolating AI in controlled environments", es: "Aislar IA en entornos controlados", de: "KI in kontrollierten Umgebungen isolieren", nl: "AI isoleren in gecontroleerde omgevingen" },
                { en: "Sandbox games", es: "Juegos sandbox", de: "Sandbox-Spiele", nl: "Sandbox games" },
                { en: "Testing area", es: "Área de pruebas", de: "Testbereich", nl: "Testgebied" },
                { en: "Play environment", es: "Entorno de juego", de: "Spielumgebung", nl: "Speelomgeving" }
            ],
            correct: 0,
            explanation: {
                en: "AI sandboxing involves running AI systems in isolated, controlled environments to test their behavior and prevent potential harm to the real world.",
                es: "El sandboxing de IA involucra ejecutar sistemas de IA en entornos aislados y controlados para probar su comportamiento y prevenir daño potencial al mundo real.",
                de: "KI-Sandboxing beinhaltet das Ausführen von KI-Systemen in isolierten, kontrollierten Umgebungen, um ihr Verhalten zu testen und potenziellen Schaden für die reale Welt zu verhindern.",
                nl: "AI sandboxing betreft het draaien van AI-systemen in geïsoleerde, gecontroleerde omgevingen om hun gedrag te testen en potentiële schade aan de echte wereld te voorkomen."
            }
        },
        {
            question: {
                en: "What is the strategy stealing assumption?",
                es: "¿Qué es la suposición de robo de estrategia?",
                de: "Was ist die Strategiediebstahl-Annahme?",
                nl: "Wat is de strategy stealing aanname?"
            },
            options: [
                { en: "Humans can adopt AI strategies", es: "Humanos pueden adoptar estrategias de IA", de: "Menschen können KI-Strategien übernehmen", nl: "Mensen kunnen AI-strategieën overnemen" },
                { en: "Stealing tactics", es: "Tácticas de robo", de: "Diebstahltaktiken", nl: "Diefstal tactieken" },
                { en: "Strategy theft", es: "Robo de estrategia", de: "Strategiediebstahl", nl: "Strategie diefstal" },
                { en: "Copying methods", es: "Métodos de copia", de: "Kopiermethoden", nl: "Kopieer methoden" }
            ],
            correct: 0,
            explanation: {
                en: "The strategy stealing assumption suggests that humans augmented with AI can adopt any strategy an unaligned AI might use, maintaining competitive parity.",
                es: "La suposición de robo de estrategia sugiere que humanos aumentados con IA pueden adoptar cualquier estrategia que una IA no alineada podría usar, manteniendo paridad competitiva.",
                de: "Die Strategiediebstahl-Annahme legt nahe, dass mit KI erweiterte Menschen jede Strategie übernehmen können, die eine nicht ausgerichtete KI verwenden könnte, um Wettbewerbsparität zu erhalten.",
                nl: "De strategy stealing aanname suggereert dat mensen versterkt met AI elke strategie kunnen overnemen die een niet-aligned AI zou kunnen gebruiken, waarbij competitieve pariteit behouden blijft."
            }
        },
        {
            question: {
                en: "What is decision theory in AI alignment?",
                es: "¿Qué es la teoría de decisión en alineación de IA?",
                de: "Was ist Entscheidungstheorie in KI-Ausrichtung?",
                nl: "Wat is beslissingstheorie in AI alignment?"
            },
            options: [
                { en: "How AI should make decisions under uncertainty", es: "Cómo IA debe tomar decisiones bajo incertidumbre", de: "Wie KI Entscheidungen unter Unsicherheit treffen sollte", nl: "Hoe AI beslissingen moet nemen onder onzekerheid" },
                { en: "Decision making", es: "Toma de decisiones", de: "Entscheidungsfindung", nl: "Besluitvorming" },
                { en: "Choice theory", es: "Teoría de elección", de: "Wahltheorie", nl: "Keuzetheorie" },
                { en: "Decision trees", es: "Árboles de decisión", de: "Entscheidungsbäume", nl: "Beslissingsbomen" }
            ],
            correct: 0,
            explanation: {
                en: "Decision theory in AI alignment studies how AI should make rational decisions under uncertainty, including problems like Newcomb's paradox and updateless decision theory.",
                es: "La teoría de decisión en alineación de IA estudia cómo la IA debe tomar decisiones racionales bajo incertidumbre, incluyendo problemas como la paradoja de Newcomb y teoría de decisión sin actualización.",
                de: "Entscheidungstheorie in KI-Ausrichtung untersucht, wie KI rationale Entscheidungen unter Unsicherheit treffen sollte, einschließlich Problemen wie Newcombs Paradoxon und updateless Entscheidungstheorie.",
                nl: "Beslissingstheorie in AI alignment bestudeert hoe AI rationele beslissingen moet nemen onder onzekerheid, inclusief problemen zoals Newcomb's paradox en updateless beslissingstheorie."
            }
        },
        {
            question: {
                en: "What is interpretability tax?",
                es: "¿Qué es el impuesto de interpretabilidad?",
                de: "Was ist die Interpretierbarkeitssteuer?",
                nl: "Wat is de interpreteerbaarheidsbelasting?"
            },
            options: [
                { en: "Performance cost of explainable AI", es: "Costo de rendimiento de IA explicable", de: "Leistungskosten erklärbarer KI", nl: "Prestatiekosten van verklaarbare AI" },
                { en: "Tax on AI", es: "Impuesto en IA", de: "Steuer auf KI", nl: "Belasting op AI" },
                { en: "Interpretation cost", es: "Costo de interpretación", de: "Interpretationskosten", nl: "Interpretatie kosten" },
                { en: "Clarity fee", es: "Tarifa de claridad", de: "Klarheitsgebühr", nl: "Helderheidsvergoeding" }
            ],
            correct: 0,
            explanation: {
                en: "The interpretability tax is the performance penalty incurred when making AI systems more interpretable and explainable, trading capability for transparency.",
                es: "El impuesto de interpretabilidad es la penalización de rendimiento incurrida al hacer sistemas de IA más interpretables y explicables, intercambiando capacidad por transparencia.",
                de: "Die Interpretierbarkeitssteuer ist die Leistungseinbuße, die entsteht, wenn KI-Systeme interpretierbarer und erklärbarer gemacht werden, wobei Fähigkeit gegen Transparenz eingetauscht wird.",
                nl: "De interpreteerbaarheidsbelasting is de prestatiestraf die ontstaat bij het maken van AI-systemen meer interpreteerbaar en verklaarbaar, waarbij capaciteit wordt ingeruild voor transparantie."
            }
        },
        {
            question: {
                en: "What is mechanistic interpretability?",
                es: "¿Qué es la interpretabilidad mecanicista?",
                de: "Was ist mechanistische Interpretierbarkeit?",
                nl: "Wat is mechanistische interpreteerbaarheid?"
            },
            options: [
                { en: "Understanding AI's internal mechanisms", es: "Entender mecanismos internos de IA", de: "Interne Mechanismen der KI verstehen", nl: "Interne mechanismen van AI begrijpen" },
                { en: "Mechanical systems", es: "Sistemas mecánicos", de: "Mechanische Systeme", nl: "Mechanische systemen" },
                { en: "Machine parts", es: "Partes de máquina", de: "Maschinenteile", nl: "Machine onderdelen" },
                { en: "Technical details", es: "Detalles técnicos", de: "Technische Details", nl: "Technische details" }
            ],
            correct: 0,
            explanation: {
                en: "Mechanistic interpretability aims to understand the internal mechanisms and computational processes of AI systems at a detailed, circuit-level understanding.",
                es: "La interpretabilidad mecanicista busca entender los mecanismos internos y procesos computacionales de sistemas de IA a un nivel detallado de comprensión de circuitos.",
                de: "Mechanistische Interpretierbarkeit zielt darauf ab, die internen Mechanismen und Rechenprozesse von KI-Systemen auf einer detaillierten Schaltkreisebene zu verstehen.",
                nl: "Mechanistische interpreteerbaarheid streeft ernaar de interne mechanismen en computationele processen van AI-systemen te begrijpen op een gedetailleerd circuit-niveau."
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
                { en: "AI learning values through human cooperation", es: "IA aprendiendo valores a través de cooperación humana", de: "KI lernt Werte durch menschliche Kooperation", nl: "AI leert waarden door menselijke samenwerking" },
                { en: "Inverse operations", es: "Operaciones inversas", de: "Inverse Operationen", nl: "Inverse operaties" },
                { en: "Cooperative learning", es: "Aprendizaje cooperativo", de: "Kooperatives Lernen", nl: "Coöperatief leren" },
                { en: "Reverse training", es: "Entrenamiento inverso", de: "Umgekehrtes Training", nl: "Omgekeerde training" }
            ],
            correct: 0,
            explanation: {
                en: "Cooperative inverse reinforcement learning involves AI learning human values by treating the human as a cooperative teacher rather than just observing behavior.",
                es: "El aprendizaje por refuerzo inverso cooperativo involucra a la IA aprendiendo valores humanos tratando al humano como un maestro cooperativo en lugar de solo observar comportamiento.",
                de: "Kooperatives inverses Verstärkungslernen beinhaltet, dass KI menschliche Werte lernt, indem sie den Menschen als kooperativen Lehrer behandelt, anstatt nur Verhalten zu beobachten.",
                nl: "Coöperatief inverse reinforcement learning betreft AI die menselijke waarden leert door de mens als coöperatieve leraar te behandelen in plaats van alleen gedrag te observeren."
            }
        },
        {
            question: {
                en: "What is the bandwidth problem in value learning?",
                es: "¿Qué es el problema de ancho de banda en aprendizaje de valores?",
                de: "Was ist das Bandbreitenproblem beim Wertelernen?",
                nl: "Wat is het bandbreedte probleem in value learning?"
            },
            options: [
                { en: "Limited human feedback capacity", es: "Capacidad limitada de retroalimentación humana", de: "Begrenzte menschliche Feedback-Kapazität", nl: "Beperkte menselijke feedbackcapaciteit" },
                { en: "Network bandwidth", es: "Ancho de banda de red", de: "Netzwerkbandbreite", nl: "Netwerk bandbreedte" },
                { en: "Data transfer", es: "Transferencia de datos", de: "Datenübertragung", nl: "Data overdracht" },
                { en: "Signal strength", es: "Fuerza de señal", de: "Signalstärke", nl: "Signaalsterkte" }
            ],
            correct: 0,
            explanation: {
                en: "The bandwidth problem refers to the limited capacity of humans to provide feedback and communicate values to AI systems, constraining value learning.",
                es: "El problema de ancho de banda se refiere a la capacidad limitada de humanos para proporcionar retroalimentación y comunicar valores a sistemas de IA, restringiendo el aprendizaje de valores.",
                de: "Das Bandbreitenproblem bezieht sich auf die begrenzte Kapazität von Menschen, Feedback zu geben und Werte an KI-Systeme zu kommunizieren, was das Wertelernen einschränkt.",
                nl: "Het bandbreedte probleem verwijst naar de beperkte capaciteit van mensen om feedback te geven en waarden te communiceren aan AI-systemen, wat value learning beperkt."
            }
        },
        {
            question: {
                en: "What is adversarial training in alignment?",
                es: "¿Qué es el entrenamiento adversario en alineación?",
                de: "Was ist adversariales Training in Ausrichtung?",
                nl: "Wat is adversarial training in alignment?"
            },
            options: [
                { en: "Training against deceptive behaviors", es: "Entrenamiento contra comportamientos engañosos", de: "Training gegen täuschende Verhaltensweisen", nl: "Training tegen misleidend gedrag" },
                { en: "Combat training", es: "Entrenamiento de combate", de: "Kampftraining", nl: "Gevecht training" },
                { en: "Opposition training", es: "Entrenamiento de oposición", de: "Oppositionstraining", nl: "Oppositie training" },
                { en: "Conflict practice", es: "Práctica de conflicto", de: "Konfliktpraxis", nl: "Conflict oefening" }
            ],
            correct: 0,
            explanation: {
                en: "Adversarial training in alignment involves training AI systems against adversarial examples and deceptive behaviors to improve robustness and alignment.",
                es: "El entrenamiento adversario en alineación involucra entrenar sistemas de IA contra ejemplos adversarios y comportamientos engañosos para mejorar robustez y alineación.",
                de: "Adversariales Training in Ausrichtung beinhaltet das Training von KI-Systemen gegen adversariale Beispiele und täuschende Verhaltensweisen zur Verbesserung von Robustheit und Ausrichtung.",
                nl: "Adversarial training in alignment betreft het trainen van AI-systemen tegen adversarial voorbeelden en misleidend gedrag om robuustheid en alignment te verbeteren."
            }
        },
        {
            question: {
                en: "What is the transparency paradox in AI?",
                es: "¿Qué es la paradoja de transparencia en IA?",
                de: "Was ist das Transparenzparadoxon in KI?",
                nl: "Wat is de transparantieparadox in AI?"
            },
            options: [
                { en: "Transparency enabling gaming", es: "Transparencia permitiendo manipulación", de: "Transparenz ermöglicht Gaming", nl: "Transparantie maakt gaming mogelijk" },
                { en: "Clear paradox", es: "Paradoja clara", de: "Klares Paradoxon", nl: "Heldere paradox" },
                { en: "Visibility issue", es: "Problema de visibilidad", de: "Sichtbarkeitsproblem", nl: "Zichtbaarheidsprobleem" },
                { en: "Open contradiction", es: "Contradicción abierta", de: "Offener Widerspruch", nl: "Open contradictie" }
            ],
            correct: 0,
            explanation: {
                en: "The transparency paradox occurs when making AI systems transparent enables adversaries to game or manipulate them more effectively.",
                es: "La paradoja de transparencia ocurre cuando hacer sistemas de IA transparentes permite a adversarios manipularlos o jugarlos más efectivamente.",
                de: "Das Transparenzparadoxon tritt auf, wenn transparente KI-Systeme es Gegnern ermöglichen, sie effektiver zu manipulieren oder auszutricksen.",
                nl: "De transparantieparadox treedt op wanneer het transparant maken van AI-systemen tegenstanders in staat stelt ze effectiever te gamen of manipuleren."
            }
        },
        {
            question: {
                en: "What is the scalable oversight problem?",
                es: "¿Qué es el problema de supervisión escalable?",
                de: "Was ist das Problem der skalierbaren Aufsicht?",
                nl: "Wat is het scalable oversight probleem?"
            },
            options: [
                { en: "Overseeing AI smarter than humans", es: "Supervisar IA más inteligente que humanos", de: "KI beaufsichtigen die klüger als Menschen ist", nl: "Toezicht op AI slimmer dan mensen" },
                { en: "Scaling issues", es: "Problemas de escala", de: "Skalierungsprobleme", nl: "Schaal problemen" },
                { en: "Oversight management", es: "Gestión de supervisión", de: "Aufsichtsverwaltung", nl: "Toezicht beheer" },
                { en: "Growth problems", es: "Problemas de crecimiento", de: "Wachstumsprobleme", nl: "Groei problemen" }
            ],
            correct: 0,
            explanation: {
                en: "The scalable oversight problem is how humans can effectively oversee and evaluate AI systems that may be more intelligent or capable than human overseers.",
                es: "El problema de supervisión escalable es cómo los humanos pueden supervisar y evaluar efectivamente sistemas de IA que pueden ser más inteligentes o capaces que los supervisores humanos.",
                de: "Das Problem der skalierbaren Aufsicht ist, wie Menschen KI-Systeme effektiv überwachen und bewerten können, die möglicherweise intelligenter oder fähiger als menschliche Aufseher sind.",
                nl: "Het scalable oversight probleem is hoe mensen effectief toezicht kunnen houden op en evalueren van AI-systemen die mogelijk intelligenter of capabeler zijn dan menselijke toezichthouders."
            }
        },
        {
            question: {
                en: "What is reward modeling?",
                es: "¿Qué es el modelado de recompensas?",
                de: "Was ist Belohnungsmodellierung?",
                nl: "Wat is reward modeling?"
            },
            options: [
                { en: "Learning reward functions from human feedback", es: "Aprender funciones de recompensa de retroalimentación humana", de: "Belohnungsfunktionen aus menschlichem Feedback lernen", nl: "Beloningsfuncties leren uit menselijke feedback" },
                { en: "Reward systems", es: "Sistemas de recompensa", de: "Belohnungssysteme", nl: "Beloning systemen" },
                { en: "Model rewards", es: "Recompensas del modelo", de: "Modellbelohnungen", nl: "Model beloningen" },
                { en: "Prize modeling", es: "Modelado de premios", de: "Preismodellierung", nl: "Prijs modellering" }
            ],
            correct: 0,
            explanation: {
                en: "Reward modeling involves training a separate model to predict human preferences and using this model to provide rewards for training the main AI system.",
                es: "El modelado de recompensas involucra entrenar un modelo separado para predecir preferencias humanas y usar este modelo para proporcionar recompensas para entrenar el sistema de IA principal.",
                de: "Belohnungsmodellierung beinhaltet das Training eines separaten Modells zur Vorhersage menschlicher Präferenzen und die Verwendung dieses Modells zur Bereitstellung von Belohnungen für das Training des Haupt-KI-Systems.",
                nl: "Reward modeling betreft het trainen van een apart model om menselijke voorkeuren te voorspellen en dit model te gebruiken om beloningen te geven voor het trainen van het hoofd-AI-systeem."
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
                { en: "AI inferring and optimizing human objectives", es: "IA infiriendo y optimizando objetivos humanos", de: "KI leitet menschliche Ziele ab und optimiert sie", nl: "AI afleiding en optimalisatie van menselijke doelen" },
                { en: "Help systems", es: "Sistemas de ayuda", de: "Hilfesysteme", nl: "Hulp systemen" },
                { en: "Game assistance", es: "Asistencia de juego", de: "Spielassistenz", nl: "Spel assistentie" },
                { en: "Support framework", es: "Marco de soporte", de: "Support-Framework", nl: "Ondersteuning framework" }
            ],
            correct: 0,
            explanation: {
                en: "Assistance games framework models AI as trying to assist humans by inferring and optimizing for human objectives rather than having fixed goals.",
                es: "El marco de juegos de asistencia modela la IA como intentando asistir a humanos infiriendo y optimizando objetivos humanos en lugar de tener metas fijas.",
                de: "Das Assistenzspiele-Framework modelliert KI als Versuch, Menschen zu helfen, indem sie menschliche Ziele ableitet und optimiert, anstatt feste Ziele zu haben.",
                nl: "Het assistance games framework modelleert AI als pogend mensen te assisteren door menselijke doelen af te leiden en te optimaliseren in plaats van vaste doelen te hebben."
            }
        },
        {
            question: {
                en: "What is the grain of truth problem?",
                es: "¿Qué es el problema del grano de verdad?",
                de: "Was ist das Körnchen-Wahrheit-Problem?",
                nl: "Wat is het grain of truth probleem?"
            },
            options: [
                { en: "AI learning from imperfect human feedback", es: "IA aprendiendo de retroalimentación humana imperfecta", de: "KI lernt aus unvollkommenem menschlichem Feedback", nl: "AI leert van imperfecte menselijke feedback" },
                { en: "Truth particles", es: "Partículas de verdad", de: "Wahrheitspartikel", nl: "Waarheid deeltjes" },
                { en: "Small truths", es: "Pequeñas verdades", de: "Kleine Wahrheiten", nl: "Kleine waarheden" },
                { en: "Grain analysis", es: "Análisis de grano", de: "Kornanalyse", nl: "Korrel analyse" }
            ],
            correct: 0,
            explanation: {
                en: "The grain of truth problem refers to AI systems learning from human feedback that contains truth but also biases, mistakes, and inconsistencies.",
                es: "El problema del grano de verdad se refiere a sistemas de IA aprendiendo de retroalimentación humana que contiene verdad pero también sesgos, errores e inconsistencias.",
                de: "Das Körnchen-Wahrheit-Problem bezieht sich auf KI-Systeme, die aus menschlichem Feedback lernen, das Wahrheit enthält, aber auch Verzerrungen, Fehler und Inkonsistenzen.",
                nl: "Het grain of truth probleem verwijst naar AI-systemen die leren van menselijke feedback die waarheid bevat maar ook vooroordelen, fouten en inconsistenties."
            }
        },
        {
            question: {
                en: "What is capability control?",
                es: "¿Qué es el control de capacidad?",
                de: "Was ist Fähigkeitskontrolle?",
                nl: "Wat is capability control?"
            },
            options: [
                { en: "Limiting AI capabilities for safety", es: "Limitar capacidades de IA por seguridad", de: "KI-Fähigkeiten für Sicherheit begrenzen", nl: "AI-capaciteiten beperken voor veiligheid" },
                { en: "Ability management", es: "Gestión de habilidades", de: "Fähigkeitsverwaltung", nl: "Vaardigheid beheer" },
                { en: "Power limits", es: "Límites de poder", de: "Machtgrenzen", nl: "Macht limieten" },
                { en: "Control systems", es: "Sistemas de control", de: "Kontrollsysteme", nl: "Controle systemen" }
            ],
            correct: 0,
            explanation: {
                en: "Capability control involves deliberately limiting or controlling AI capabilities to prevent systems from becoming too powerful to manage safely.",
                es: "El control de capacidad involucra limitar o controlar deliberadamente las capacidades de IA para prevenir que los sistemas se vuelvan demasiado poderosos para manejar de forma segura.",
                de: "Fähigkeitskontrolle beinhaltet das bewusste Begrenzen oder Kontrollieren von KI-Fähigkeiten, um zu verhindern, dass Systeme zu mächtig werden, um sicher verwaltet zu werden.",
                nl: "Capability control betreft het opzettelijk beperken of controleren van AI-capaciteiten om te voorkomen dat systemen te krachtig worden om veilig te beheren."
            }
        },
        {
            question: {
                en: "What is motivation selection?",
                es: "¿Qué es la selección de motivación?",
                de: "Was ist Motivationsauswahl?",
                nl: "Wat is motivatie selectie?"
            },
            options: [
                { en: "Choosing AI's fundamental drives", es: "Elegir impulsos fundamentales de IA", de: "Grundlegende Antriebe der KI wählen", nl: "Fundamentele drijfveren van AI kiezen" },
                { en: "Motivation choice", es: "Elección de motivación", de: "Motivationswahl", nl: "Motivatie keuze" },
                { en: "Drive selection", es: "Selección de impulso", de: "Antriebsauswahl", nl: "Drijfveer selectie" },
                { en: "Goal picking", es: "Selección de objetivos", de: "Zielauswahl", nl: "Doel kiezen" }
            ],
            correct: 0,
            explanation: {
                en: "Motivation selection involves carefully choosing the fundamental drives and motivations programmed into AI systems to ensure safe and beneficial behavior.",
                es: "La selección de motivación involucra elegir cuidadosamente los impulsos y motivaciones fundamentales programados en sistemas de IA para asegurar comportamiento seguro y beneficioso.",
                de: "Motivationsauswahl beinhaltet die sorgfältige Auswahl der grundlegenden Antriebe und Motivationen, die in KI-Systeme programmiert werden, um sicheres und nützliches Verhalten zu gewährleisten.",
                nl: "Motivatie selectie betreft het zorgvuldig kiezen van de fundamentele drijfveren en motivaties geprogrammeerd in AI-systemen om veilig en nuttig gedrag te waarborgen."
            }
        },
        {
            question: {
                en: "What is the boxing problem?",
                es: "¿Qué es el problema del encajonamiento?",
                de: "Was ist das Boxing-Problem?",
                nl: "Wat is het boxing probleem?"
            },
            options: [
                { en: "Containing superintelligent AI", es: "Contener IA superinteligente", de: "Superintelligente KI eindämmen", nl: "Superintelligente AI bevatten" },
                { en: "Boxing matches", es: "Combates de boxeo", de: "Boxkämpfe", nl: "Boks wedstrijden" },
                { en: "Container issues", es: "Problemas de contenedor", de: "Containerprobleme", nl: "Container problemen" },
                { en: "Package problems", es: "Problemas de paquete", de: "Paketprobleme", nl: "Pakket problemen" }
            ],
            correct: 0,
            explanation: {
                en: "The boxing problem addresses whether it's possible to safely contain a superintelligent AI system and prevent it from affecting the outside world.",
                es: "El problema del encajonamiento aborda si es posible contener de forma segura un sistema de IA superinteligente y prevenir que afecte el mundo exterior.",
                de: "Das Boxing-Problem befasst sich damit, ob es möglich ist, ein superintelligentes KI-System sicher einzudämmen und zu verhindern, dass es die Außenwelt beeinflusst.",
                nl: "Het boxing probleem behandelt of het mogelijk is om een superintelligent AI-systeem veilig te bevatten en te voorkomen dat het de buitenwereld beïnvloedt."
            }
        },
        {
            question: {
                en: "What is oracle AI?",
                es: "¿Qué es la IA oráculo?",
                de: "Was ist Orakel-KI?",
                nl: "Wat is oracle AI?"
            },
            options: [
                { en: "AI that only answers questions", es: "IA que solo responde preguntas", de: "KI die nur Fragen beantwortet", nl: "AI die alleen vragen beantwoordt" },
                { en: "Prediction system", es: "Sistema de predicción", de: "Vorhersagesystem", nl: "Voorspellingssysteem" },
                { en: "Database AI", es: "IA de base de datos", de: "Datenbank-KI", nl: "Database AI" },
                { en: "Fortune telling", es: "Adivinación", de: "Wahrsagerei", nl: "Waarzeggerij" }
            ],
            correct: 0,
            explanation: {
                en: "Oracle AI is a proposed safe AI design that only answers questions without taking actions in the world, reducing potential for direct harm.",
                es: "La IA oráculo es un diseño de IA segura propuesto que solo responde preguntas sin tomar acciones en el mundo, reduciendo el potencial de daño directo.",
                de: "Orakel-KI ist ein vorgeschlagenes sicheres KI-Design, das nur Fragen beantwortet ohne Aktionen in der Welt zu ergreifen, was das Potenzial für direkten Schaden reduziert.",
                nl: "Oracle AI is een voorgesteld veilig AI-ontwerp dat alleen vragen beantwoordt zonder acties in de wereld te ondernemen, wat het potentieel voor directe schade vermindert."
            }
        },
        {
            question: {
                en: "What is tool AI?",
                es: "¿Qué es la IA herramienta?",
                de: "Was ist Werkzeug-KI?",
                nl: "Wat is tool AI?"
            },
            options: [
                { en: "AI with limited scope and no agency", es: "IA con alcance limitado y sin agencia", de: "KI mit begrenztem Umfang und ohne Handlungsfähigkeit", nl: "AI met beperkte reikwijdte en geen agency" },
                { en: "Tool usage", es: "Uso de herramientas", de: "Werkzeugnutzung", nl: "Gereedschap gebruik" },
                { en: "Utility AI", es: "IA de utilidad", de: "Nutzen-KI", nl: "Nut AI" },
                { en: "Helper systems", es: "Sistemas auxiliares", de: "Hilfssysteme", nl: "Hulp systemen" }
            ],
            correct: 0,
            explanation: {
                en: "Tool AI refers to AI systems designed as pure tools with limited scope, no agency, and no optimization pressure toward self-preservation or goal preservation.",
                es: "La IA herramienta se refiere a sistemas de IA diseñados como herramientas puras con alcance limitado, sin agencia, y sin presión de optimización hacia autopreservación o preservación de objetivos.",
                de: "Werkzeug-KI bezieht sich auf KI-Systeme, die als reine Werkzeuge mit begrenztem Umfang, ohne Handlungsfähigkeit und ohne Optimierungsdruck zur Selbst- oder Zielerhaltung konzipiert sind.",
                nl: "Tool AI verwijst naar AI-systemen ontworpen als pure tools met beperkte reikwijdte, geen agency, en geen optimalisatiedruk richting zelfbehoud of doelbehoud."
            }
        },
        {
            question: {
                en: "What is the Eliezer-Nate dialogue?",
                es: "¿Qué es el diálogo Eliezer-Nate?",
                de: "Was ist der Eliezer-Nate-Dialog?",
                nl: "Wat is de Eliezer-Nate dialoog?"
            },
            options: [
                { en: "Debate on AI alignment difficulty", es: "Debate sobre dificultad de alineación de IA", de: "Debatte über KI-Ausrichtungsschwierigkeit", nl: "Debat over AI alignment moeilijkheid" },
                { en: "Personal conversation", es: "Conversación personal", de: "Persönliches Gespräch", nl: "Persoonlijk gesprek" },
                { en: "Chat system", es: "Sistema de chat", de: "Chat-System", nl: "Chat systeem" },
                { en: "Discussion forum", es: "Foro de discusión", de: "Diskussionsforum", nl: "Discussie forum" }
            ],
            correct: 0,
            explanation: {
                en: "The Eliezer-Nate dialogue refers to influential discussions between Eliezer Yudkowsky and Nate Soares about AI alignment challenges and potential solutions.",
                es: "El diálogo Eliezer-Nate se refiere a discusiones influyentes entre Eliezer Yudkowsky y Nate Soares sobre desafíos de alineación de IA y soluciones potenciales.",
                de: "Der Eliezer-Nate-Dialog bezieht sich auf einflussreiche Diskussionen zwischen Eliezer Yudkowsky und Nate Soares über KI-Ausrichtungsherausforderungen und potenzielle Lösungen.",
                nl: "De Eliezer-Nate dialoog verwijst naar invloedrijke discussies tussen Eliezer Yudkowsky en Nate Soares over AI alignment uitdagingen en mogelijke oplossingen."
            }
        },
        {
            question: {
                en: "What is RLHF in AI alignment?",
                es: "¿Qué es RLHF en alineación de IA?",
                de: "Was ist RLHF in KI-Ausrichtung?",
                nl: "Wat is RLHF in AI alignment?"
            },
            options: [
                { en: "Reinforcement Learning from Human Feedback", es: "Aprendizaje por refuerzo de retroalimentación humana", de: "Verstärkungslernen aus menschlichem Feedback", nl: "Reinforcement Learning from Human Feedback" },
                { en: "Real Life Human Factors", es: "Factores humanos de vida real", de: "Real Life Human Factors", nl: "Real Life Human Factors" },
                { en: "Rapid Learning High Fidelity", es: "Aprendizaje rápido de alta fidelidad", de: "Schnelles Lernen hohe Treue", nl: "Rapid Learning High Fidelity" },
                { en: "Robotic Learning Human Form", es: "Aprendizaje robótico forma humana", de: "Robotisches Lernen menschliche Form", nl: "Robotic Learning Human Form" }
            ],
            correct: 0,
            explanation: {
                en: "RLHF (Reinforcement Learning from Human Feedback) trains AI using human preferences and feedback to align behavior with human values and intentions.",
                es: "RLHF (Aprendizaje por refuerzo de retroalimentación humana) entrena IA usando preferencias y retroalimentación humana para alinear comportamiento con valores e intenciones humanas.",
                de: "RLHF (Verstärkungslernen aus menschlichem Feedback) trainiert KI mit menschlichen Präferenzen und Feedback, um Verhalten mit menschlichen Werten und Absichten auszurichten.",
                nl: "RLHF (Reinforcement Learning from Human Feedback) traint AI met menselijke voorkeuren en feedback om gedrag af te stemmen op menselijke waarden en intenties."
            }
        },
        {
            question: {
                en: "What is the Christiano proposal?",
                es: "¿Qué es la propuesta Christiano?",
                de: "Was ist der Christiano-Vorschlag?",
                nl: "Wat is het Christiano voorstel?"
            },
            options: [
                { en: "Iterated amplification for alignment", es: "Amplificación iterada para alineación", de: "Iterierte Verstärkung für Ausrichtung", nl: "Iteratieve amplificatie voor alignment" },
                { en: "New algorithm", es: "Nuevo algoritmo", de: "Neuer Algorithmus", nl: "Nieuw algoritme" },
                { en: "Research proposal", es: "Propuesta de investigación", de: "Forschungsvorschlag", nl: "Onderzoeksvoorstel" },
                { en: "Funding request", es: "Solicitud de financiación", de: "Finanzierungsantrag", nl: "Financieringsverzoek" }
            ],
            correct: 0,
            explanation: {
                en: "The Christiano proposal refers to Paul Christiano's iterated amplification approach for AI alignment, building powerful aligned AI through iterative improvement.",
                es: "La propuesta Christiano se refiere al enfoque de amplificación iterada de Paul Christiano para alineación de IA, construyendo IA alineada poderosa a través de mejora iterativa.",
                de: "Der Christiano-Vorschlag bezieht sich auf Paul Christianos iterierten Verstärkungsansatz für KI-Ausrichtung, der mächtige ausgerichtete KI durch iterative Verbesserung aufbaut.",
                nl: "Het Christiano voorstel verwijst naar Paul Christiano's iteratieve amplificatie aanpak voor AI alignment, waarbij krachtige aligned AI wordt gebouwd door iteratieve verbetering."
            }
        },
        {
            question: {
                en: "What is distributional shift in alignment?",
                es: "¿Qué es el cambio distribucional en alineación?",
                de: "Was ist Verteilungsverschiebung in Ausrichtung?",
                nl: "Wat is distributional shift in alignment?"
            },
            options: [
                { en: "Behavior change in new environments", es: "Cambio de comportamiento en nuevos entornos", de: "Verhaltensänderung in neuen Umgebungen", nl: "Gedragsverandering in nieuwe omgevingen" },
                { en: "Data distribution", es: "Distribución de datos", de: "Datenverteilung", nl: "Data distributie" },
                { en: "Shift patterns", es: "Patrones de cambio", de: "Verschiebungsmuster", nl: "Verschuivingspatronen" },
                { en: "Distribution change", es: "Cambio de distribución", de: "Verteilungsänderung", nl: "Distributie verandering" }
            ],
            correct: 0,
            explanation: {
                en: "Distributional shift in alignment occurs when AI encounters situations different from training, potentially causing misaligned behavior despite appearing aligned during training.",
                es: "El cambio distribucional en alineación ocurre cuando la IA encuentra situaciones diferentes del entrenamiento, potencialmente causando comportamiento desalineado a pesar de parecer alineado durante el entrenamiento.",
                de: "Verteilungsverschiebung in Ausrichtung tritt auf, wenn KI auf Situationen trifft, die sich vom Training unterscheiden, was möglicherweise zu fehlausgerichtetem Verhalten führt, obwohl sie während des Trainings ausgerichtet erschien.",
                nl: "Distributional shift in alignment treedt op wanneer AI situaties tegenkomt die verschillen van training, wat mogelijk misaligned gedrag veroorzaakt ondanks aligned lijken tijdens training."
            }
        }
    ]
};