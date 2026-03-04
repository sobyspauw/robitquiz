// AI ethiek - Level 3 (Intermediate)
// Total questions: 100
// Intermediate concepts in AI ethics - deeper understanding required

module.exports = {
    questions: [
        {
            question: {
                en: "What is algorithmic accountability?",
                es: "¿Qué es la responsabilidad algorítmica?",
                de: "Was ist algorithmische Verantwortlichkeit?",
                nl: "Wat is algoritmische verantwoordelijkheid?"
            },
            options: [
                { en: "Responsibility for AI decisions", es: "Responsabilidad por decisiones de IA", de: "Verantwortung für KI-Entscheidungen", nl: "Verantwoordelijkheid voor AI-beslissingen" },
                { en: "Code optimization", es: "Optimización de código", de: "Code-Optimierung", nl: "Code optimalisatie" },
                { en: "Data collection", es: "Recolección de datos", de: "Datensammlung", nl: "Gegevensverzameling" },
                { en: "Network security", es: "Seguridad de red", de: "Netzwerksicherheit", nl: "Netwerkbeveiliging" }
            ],
            correct: 0,
            explanation: {
                en: "Algorithmic accountability means holding organizations responsible for the decisions and outcomes of their AI systems, including transparency and redress mechanisms.",
                es: "La responsabilidad algorítmica significa hacer a las organizaciones responsables de las decisiones y resultados de sus sistemas de IA, incluyendo transparencia y mecanismos de reparación.",
                de: "Algorithmische Verantwortlichkeit bedeutet, Organisationen für die Entscheidungen und Ergebnisse ihrer KI-Systeme verantwortlich zu machen, einschließlich Transparenz und Abhilfemechanismen.",
                nl: "Algoritmische verantwoordelijkheid betekent organisaties verantwoordelijk houden voor de beslissingen en uitkomsten van hun AI-systemen, inclusief transparantie en verhaalsmechanismen."
            }
        },
        {
            question: {
                en: "What is differential privacy?",
                es: "¿Qué es la privacidad diferencial?",
                de: "Was ist differentielle Privatsphäre?",
                nl: "Wat is differentiële privacy?"
            },
            options: [
                { en: "Mathematical privacy framework", es: "Marco matemático de privacidad", de: "Mathematisches Datenschutz-Framework", nl: "Wiskundig privacykader" },
                { en: "User preferences", es: "Preferencias de usuario", de: "Benutzerpräferenzen", nl: "Gebruikersvoorkeuren" },
                { en: "Access control", es: "Control de acceso", de: "Zugriffskontrolle", nl: "Toegangscontrole" },
                { en: "Password protection", es: "Protección con contraseña", de: "Passwortschutz", nl: "Wachtwoordbeveiliging" }
            ],
            correct: 0,
            explanation: {
                en: "Differential privacy adds mathematical noise to data to protect individual privacy while maintaining statistical accuracy for aggregate analysis.",
                es: "La privacidad diferencial agrega ruido matemático a los datos para proteger la privacidad individual mientras mantiene precisión estadística para análisis agregado.",
                de: "Differentielle Privatsphäre fügt Daten mathematisches Rauschen hinzu, um individuelle Privatsphäre zu schützen und gleichzeitig statistische Genauigkeit für aggregierte Analysen zu erhalten.",
                nl: "Differentiële privacy voegt wiskundige ruis toe aan data om individuele privacy te beschermen terwijl statistische nauwkeurigheid voor geaggregeerde analyse behouden blijft."
            }
        },
        {
            question: {
                en: "What is federated learning's ethical advantage?",
                es: "¿Cuál es la ventaja ética del aprendizaje federado?",
                de: "Was ist der ethische Vorteil des föderierten Lernens?",
                nl: "Wat is het ethische voordeel van federated learning?"
            },
            options: [
                { en: "Data stays on device", es: "Datos permanecen en dispositivo", de: "Daten bleiben auf Gerät", nl: "Data blijft op apparaat" },
                { en: "Faster processing", es: "Procesamiento más rápido", de: "Schnellere Verarbeitung", nl: "Snellere verwerking" },
                { en: "Better accuracy", es: "Mejor precisión", de: "Bessere Genauigkeit", nl: "Betere nauwkeurigheid" },
                { en: "Lower cost", es: "Menor costo", de: "Geringere Kosten", nl: "Lagere kosten" }
            ],
            correct: 0,
            explanation: {
                en: "Federated learning keeps personal data on users' devices, training models locally and only sharing model updates, enhancing privacy protection.",
                es: "El aprendizaje federado mantiene datos personales en dispositivos de usuarios, entrenando modelos localmente y solo compartiendo actualizaciones del modelo, mejorando la protección de privacidad.",
                de: "Föderiertes Lernen hält persönliche Daten auf Benutzergeräten, trainiert Modelle lokal und teilt nur Modellaktualisierungen, was den Datenschutz verbessert.",
                nl: "Federated learning houdt persoonlijke data op gebruikersapparaten, traint modellen lokaal en deelt alleen modelupdates, wat privacybescherming verbetert."
            }
        },
        {
            question: {
                en: "What is the 'right to be forgotten' in AI?",
                es: "¿Qué es el 'derecho al olvido' en IA?",
                de: "Was ist das 'Recht auf Vergessenwerden' in KI?",
                nl: "Wat is het 'recht om vergeten te worden' in AI?"
            },
            options: [
                { en: "Data deletion from models", es: "Eliminación de datos de modelos", de: "Datenlöschung aus Modellen", nl: "Data verwijdering uit modellen" },
                { en: "Memory optimization", es: "Optimización de memoria", de: "Speicheroptimierung", nl: "Geheugenoptimalisatie" },
                { en: "Cache clearing", es: "Limpieza de caché", de: "Cache-Löschung", nl: "Cache wissen" },
                { en: "Version control", es: "Control de versiones", de: "Versionskontrolle", nl: "Versiebeheer" }
            ],
            correct: 0,
            explanation: {
                en: "The right to be forgotten requires AI systems to remove personal data from training sets and models upon request, challenging technical implementation.",
                es: "El derecho al olvido requiere que sistemas de IA eliminen datos personales de conjuntos de entrenamiento y modelos bajo solicitud, desafiando la implementación técnica.",
                de: "Das Recht auf Vergessenwerden erfordert, dass KI-Systeme persönliche Daten aus Trainingssätzen und Modellen auf Anfrage entfernen, was die technische Umsetzung herausfordert.",
                nl: "Het recht om vergeten te worden vereist dat AI-systemen persoonlijke data uit trainingssets en modellen verwijderen op verzoek, wat technische implementatie uitdaagt."
            }
        },
        {
            question: {
                en: "What is counterfactual fairness?",
                es: "¿Qué es la equidad contrafactual?",
                de: "Was ist kontrafaktische Fairness?",
                nl: "Wat is counterfactual fairness?"
            },
            options: [
                { en: "Same outcome if attributes differ", es: "Mismo resultado si atributos difieren", de: "Gleiches Ergebnis bei unterschiedlichen Attributen", nl: "Zelfde uitkomst als attributen verschillen" },
                { en: "Equal distribution", es: "Distribución igual", de: "Gleiche Verteilung", nl: "Gelijke verdeling" },
                { en: "Random selection", es: "Selección aleatoria", de: "Zufällige Auswahl", nl: "Willekeurige selectie" },
                { en: "Performance metrics", es: "Métricas de rendimiento", de: "Leistungsmetriken", nl: "Prestatiemetrieken" }
            ],
            correct: 0,
            explanation: {
                en: "Counterfactual fairness ensures an individual receives the same decision in a hypothetical world where their sensitive attributes (race, gender) differ.",
                es: "La equidad contrafactual asegura que un individuo reciba la misma decisión en un mundo hipotético donde sus atributos sensibles (raza, género) difieren.",
                de: "Kontrafaktische Fairness stellt sicher, dass eine Person die gleiche Entscheidung in einer hypothetischen Welt erhält, in der ihre sensiblen Attribute (Rasse, Geschlecht) unterschiedlich sind.",
                nl: "Counterfactual fairness zorgt ervoor dat een individu dezelfde beslissing ontvangt in een hypothetische wereld waar hun gevoelige attributen (ras, geslacht) verschillen."
            }
        },
        {
            question: {
                en: "What is machine learning interpretability?",
                es: "¿Qué es la interpretabilidad del aprendizaje automático?",
                de: "Was ist Interpretierbarkeit des maschinellen Lernens?",
                nl: "Wat is machine learning interpreteerbaarheid?"
            },
            options: [
                { en: "Understanding model decisions", es: "Entender decisiones del modelo", de: "Modellentscheidungen verstehen", nl: "Modelbeslissingen begrijpen" },
                { en: "Code documentation", es: "Documentación de código", de: "Code-Dokumentation", nl: "Code documentatie" },
                { en: "System performance", es: "Rendimiento del sistema", de: "Systemleistung", nl: "Systeemprestaties" },
                { en: "Data visualization", es: "Visualización de datos", de: "Datenvisualisierung", nl: "Data visualisatie" }
            ],
            correct: 0,
            explanation: {
                en: "ML interpretability means the ability to understand and explain how a machine learning model makes its decisions, crucial for trust and debugging.",
                es: "La interpretabilidad de ML significa la capacidad de entender y explicar cómo un modelo de aprendizaje automático toma sus decisiones, crucial para confianza y depuración.",
                de: "ML-Interpretierbarkeit bedeutet die Fähigkeit zu verstehen und zu erklären, wie ein maschinelles Lernmodell seine Entscheidungen trifft, entscheidend für Vertrauen und Debugging.",
                nl: "ML interpreteerbaarheid betekent het vermogen om te begrijpen en uit te leggen hoe een machine learning model zijn beslissingen neemt, cruciaal voor vertrouwen en debugging."
            }
        },
        {
            question: {
                en: "What is adversarial robustness?",
                es: "¿Qué es la robustez adversaria?",
                de: "Was ist adversariale Robustheit?",
                nl: "Wat is adversarial robuustheid?"
            },
            options: [
                { en: "Resistance to attacks", es: "Resistencia a ataques", de: "Widerstand gegen Angriffe", nl: "Weerstand tegen aanvallen" },
                { en: "System backup", es: "Respaldo del sistema", de: "System-Backup", nl: "Systeem backup" },
                { en: "Error handling", es: "Manejo de errores", de: "Fehlerbehandlung", nl: "Foutafhandeling" },
                { en: "Load balancing", es: "Equilibrio de carga", de: "Lastverteilung", nl: "Load balancing" }
            ],
            correct: 0,
            explanation: {
                en: "Adversarial robustness is an AI system's ability to maintain correct performance when faced with intentionally crafted misleading inputs designed to fool it.",
                es: "La robustez adversaria es la capacidad de un sistema de IA para mantener rendimiento correcto cuando enfrenta entradas engañosas intencionalmente diseñadas para engañarlo.",
                de: "Adversariale Robustheit ist die Fähigkeit eines KI-Systems, korrekte Leistung aufrechtzuerhalten, wenn es mit absichtlich erstellten irreführenden Eingaben konfrontiert wird.",
                nl: "Adversarial robuustheid is het vermogen van een AI-systeem om correcte prestaties te behouden wanneer het geconfronteerd wordt met opzettelijk misleidende invoer."
            }
        },
        {
            question: {
                en: "What is AI alignment problem?",
                es: "¿Qué es el problema de alineación de IA?",
                de: "Was ist das KI-Ausrichtungsproblem?",
                nl: "Wat is het AI alignment probleem?"
            },
            options: [
                { en: "Matching AI goals with human values", es: "Alinear objetivos de IA con valores humanos", de: "KI-Ziele mit menschlichen Werten abstimmen", nl: "AI-doelen afstemmen op menselijke waarden" },
                { en: "Data formatting", es: "Formato de datos", de: "Datenformatierung", nl: "Data formattering" },
                { en: "Model architecture", es: "Arquitectura del modelo", de: "Modellarchitektur", nl: "Model architectuur" },
                { en: "System integration", es: "Integración del sistema", de: "Systemintegration", nl: "Systeem integratie" }
            ],
            correct: 0,
            explanation: {
                en: "The AI alignment problem involves ensuring AI systems pursue goals that align with human values and intentions, preventing harmful unintended consequences.",
                es: "El problema de alineación de IA involucra asegurar que sistemas de IA persigan objetivos que se alineen con valores e intenciones humanas, previniendo consecuencias dañinas no intencionadas.",
                de: "Das KI-Ausrichtungsproblem besteht darin, sicherzustellen, dass KI-Systeme Ziele verfolgen, die mit menschlichen Werten und Absichten übereinstimmen und schädliche unbeabsichtigte Folgen verhindern.",
                nl: "Het AI alignment probleem betreft het waarborgen dat AI-systemen doelen nastreven die overeenkomen met menselijke waarden en intenties, om schadelijke onbedoelde gevolgen te voorkomen."
            }
        },
        {
            question: {
                en: "What is data sovereignty in AI?",
                es: "¿Qué es la soberanía de datos en IA?",
                de: "Was ist Datensouveränität in KI?",
                nl: "Wat is data soevereiniteit in AI?"
            },
            options: [
                { en: "Control over data location", es: "Control sobre ubicación de datos", de: "Kontrolle über Datenspeicherort", nl: "Controle over data locatie" },
                { en: "Data quality", es: "Calidad de datos", de: "Datenqualität", nl: "Data kwaliteit" },
                { en: "Storage capacity", es: "Capacidad de almacenamiento", de: "Speicherkapazität", nl: "Opslagcapaciteit" },
                { en: "Processing speed", es: "Velocidad de procesamiento", de: "Verarbeitungsgeschwindigkeit", nl: "Verwerkingssnelheid" }
            ],
            correct: 0,
            explanation: {
                en: "Data sovereignty refers to the concept that data is subject to the laws and governance of the country where it is collected and stored.",
                es: "La soberanía de datos se refiere al concepto de que los datos están sujetos a las leyes y gobernanza del país donde se recopilan y almacenan.",
                de: "Datensouveränität bezieht sich auf das Konzept, dass Daten den Gesetzen und der Verwaltung des Landes unterliegen, in dem sie gesammelt und gespeichert werden.",
                nl: "Data soevereiniteit verwijst naar het concept dat data onderworpen is aan de wetten en het bestuur van het land waar het verzameld en opgeslagen wordt."
            }
        },
        {
            question: {
                en: "What is synthetic data in ethical AI?",
                es: "¿Qué son datos sintéticos en IA ética?",
                de: "Was sind synthetische Daten in ethischer KI?",
                nl: "Wat is synthetische data in ethische AI?"
            },
            options: [
                { en: "Artificially generated data", es: "Datos generados artificialmente", de: "Künstlich erzeugte Daten", nl: "Kunstmatig gegenereerde data" },
                { en: "Compressed data", es: "Datos comprimidos", de: "Komprimierte Daten", nl: "Gecomprimeerde data" },
                { en: "Encrypted data", es: "Datos encriptados", de: "Verschlüsselte Daten", nl: "Versleutelde data" },
                { en: "Historical data", es: "Datos históricos", de: "Historische Daten", nl: "Historische data" }
            ],
            correct: 0,
            explanation: {
                en: "Synthetic data is artificially generated data that mimics real data patterns while protecting privacy, used to train AI models without exposing sensitive information.",
                es: "Los datos sintéticos son datos generados artificialmente que imitan patrones de datos reales mientras protegen la privacidad, usados para entrenar modelos de IA sin exponer información sensible.",
                de: "Synthetische Daten sind künstlich erzeugte Daten, die reale Datenmuster nachahmen und gleichzeitig die Privatsphäre schützen, verwendet zum Training von KI-Modellen ohne sensible Informationen preiszugeben.",
                nl: "Synthetische data is kunstmatig gegenereerde data die echte datapatronen nabootst terwijl privacy wordt beschermd, gebruikt om AI-modellen te trainen zonder gevoelige informatie bloot te stellen."
            }
        },
        // Continue with 90 more questions following similar intermediate difficulty patterns
        {
            question: {
                en: "How does consent management relate to AI systems?",
                es: "¿Cómo se relaciona la gestión de consentimiento con sistemas de IA?",
                de: "Wie hängt Einwilligungsverwaltung mit KI-Systemen zusammen?",
                nl: "Hoe relateert toestemmingsbeheer aan AI-systemen?"
            },
            options: [
                { en: "User permission for data use", es: "Permiso de usuario para uso de datos", de: "Benutzererlaubnis für Datennutzung", nl: "Gebruikerstoestemming voor datagebruik" },
                { en: "System configuration", es: "Configuración del sistema", de: "Systemkonfiguration", nl: "Systeemconfiguratie" },
                { en: "Performance monitoring", es: "Monitoreo de rendimiento", de: "Leistungsüberwachung", nl: "Prestatiemonitoring" },
                { en: "Version updates", es: "Actualizaciones de versión", de: "Versionsaktualisierungen", nl: "Versie updates" }
            ],
            correct: 0,
            explanation: {
                en: "Consent management in AI involves obtaining and managing user permissions for data collection, processing, and use in machine learning models.",
                es: "La gestión de consentimiento en IA involucra obtener y gestionar permisos de usuarios para recolección, procesamiento y uso de datos en modelos de aprendizaje automático.",
                de: "Einwilligungsverwaltung in KI beinhaltet das Einholen und Verwalten von Benutzererlaubnissen für Datensammlung, -verarbeitung und -nutzung in maschinellen Lernmodellen.",
                nl: "Toestemmingsbeheer in AI betreft het verkrijgen en beheren van gebruikerstoestemmingen voor dataverzameling, -verwerking en -gebruik in machine learning modellen."
            }
        },
        {
            question: {
                en: "What is demographic parity in AI fairness?",
                es: "¿Qué es la paridad demográfica en equidad de IA?",
                de: "Was ist demografische Parität in KI-Fairness?",
                nl: "Wat is demografische pariteit in AI fairness?"
            },
            options: [
                { en: "Equal outcomes across groups", es: "Resultados iguales entre grupos", de: "Gleiche Ergebnisse über Gruppen", nl: "Gelijke uitkomsten over groepen" },
                { en: "Data distribution", es: "Distribución de datos", de: "Datenverteilung", nl: "Data distributie" },
                { en: "Population sampling", es: "Muestreo de población", de: "Bevölkerungsstichproben", nl: "Populatie bemonstering" },
                { en: "Statistical analysis", es: "Análisis estadístico", de: "Statistische Analyse", nl: "Statistische analyse" }
            ],
            correct: 0,
            explanation: {
                en: "Demographic parity requires that AI decisions are independent of sensitive attributes, ensuring equal positive outcome rates across different demographic groups.",
                es: "La paridad demográfica requiere que las decisiones de IA sean independientes de atributos sensibles, asegurando tasas iguales de resultados positivos entre diferentes grupos demográficos.",
                de: "Demografische Parität erfordert, dass KI-Entscheidungen unabhängig von sensiblen Attributen sind und gleiche positive Ergebnisraten über verschiedene demografische Gruppen gewährleisten.",
                nl: "Demografische pariteit vereist dat AI-beslissingen onafhankelijk zijn van gevoelige attributen, waarbij gelijke positieve uitkomstpercentages over verschillende demografische groepen worden gewaarborgd."
            }
        },
        {
            question: {
                en: "What is equalized odds in fairness?",
                es: "¿Qué son las probabilidades igualadas en equidad?",
                de: "Was sind ausgeglichene Chancen in Fairness?",
                nl: "Wat zijn equalized odds in fairness?"
            },
            options: [
                { en: "Equal error rates", es: "Tasas de error iguales", de: "Gleiche Fehlerquoten", nl: "Gelijke foutpercentages" },
                { en: "Random selection", es: "Selección aleatoria", de: "Zufällige Auswahl", nl: "Willekeurige selectie" },
                { en: "Performance metrics", es: "Métricas de rendimiento", de: "Leistungsmetriken", nl: "Prestatiemetrieken" },
                { en: "System balance", es: "Balance del sistema", de: "Systembalance", nl: "Systeembalans" }
            ],
            correct: 0,
            explanation: {
                en: "Equalized odds ensures that true positive and false positive rates are equal across different groups, balancing accuracy and fairness.",
                es: "Las probabilidades igualadas aseguran que las tasas de verdaderos positivos y falsos positivos sean iguales entre diferentes grupos, equilibrando precisión y equidad.",
                de: "Ausgeglichene Chancen stellen sicher, dass wahre positive und falsche positive Raten über verschiedene Gruppen gleich sind und Genauigkeit und Fairness ausgleichen.",
                nl: "Equalized odds zorgen ervoor dat true positive en false positive rates gelijk zijn over verschillende groepen, waarbij nauwkeurigheid en fairness in balans zijn."
            }
        },
        {
            question: {
                en: "What is calibration in AI fairness?",
                es: "¿Qué es la calibración en equidad de IA?",
                de: "Was ist Kalibrierung in KI-Fairness?",
                nl: "Wat is kalibratie in AI fairness?"
            },
            options: [
                { en: "Prediction accuracy equality", es: "Igualdad de precisión de predicción", de: "Gleichheit der Vorhersagegenauigkeit", nl: "Voorspellingsnauwkeurigheid gelijkheid" },
                { en: "Model tuning", es: "Ajuste del modelo", de: "Modellanpassung", nl: "Model afstemming" },
                { en: "Data normalization", es: "Normalización de datos", de: "Datennormalisierung", nl: "Data normalisatie" },
                { en: "System optimization", es: "Optimización del sistema", de: "Systemoptimierung", nl: "Systeem optimalisatie" }
            ],
            correct: 0,
            explanation: {
                en: "Calibration in fairness means that predictions are equally accurate across groups - if a model predicts 70% probability, it should be correct 70% of the time for all groups.",
                es: "La calibración en equidad significa que las predicciones son igualmente precisas entre grupos - si un modelo predice 70% de probabilidad, debe ser correcto 70% del tiempo para todos los grupos.",
                de: "Kalibrierung in Fairness bedeutet, dass Vorhersagen über Gruppen hinweg gleich genau sind - wenn ein Modell 70% Wahrscheinlichkeit vorhersagt, sollte es für alle Gruppen zu 70% korrekt sein.",
                nl: "Kalibratie in fairness betekent dat voorspellingen even nauwkeurig zijn over groepen - als een model 70% waarschijnlijkheid voorspelt, moet het 70% van de tijd correct zijn voor alle groepen."
            }
        },
        {
            question: {
                en: "What is individual fairness?",
                es: "¿Qué es la equidad individual?",
                de: "Was ist individuelle Fairness?",
                nl: "Wat is individuele fairness?"
            },
            options: [
                { en: "Similar treatment for similar individuals", es: "Tratamiento similar para individuos similares", de: "Ähnliche Behandlung für ähnliche Personen", nl: "Gelijke behandeling voor gelijke individuen" },
                { en: "Personal preferences", es: "Preferencias personales", de: "Persönliche Präferenzen", nl: "Persoonlijke voorkeuren" },
                { en: "User profiles", es: "Perfiles de usuario", de: "Benutzerprofile", nl: "Gebruikersprofielen" },
                { en: "Custom settings", es: "Configuraciones personalizadas", de: "Benutzerdefinierte Einstellungen", nl: "Aangepaste instellingen" }
            ],
            correct: 0,
            explanation: {
                en: "Individual fairness requires that similar individuals receive similar treatment and outcomes from AI systems, focusing on consistency at the individual level.",
                es: "La equidad individual requiere que individuos similares reciban tratamiento y resultados similares de sistemas de IA, enfocándose en consistencia a nivel individual.",
                de: "Individuelle Fairness erfordert, dass ähnliche Personen ähnliche Behandlung und Ergebnisse von KI-Systemen erhalten, mit Fokus auf Konsistenz auf individueller Ebene.",
                nl: "Individuele fairness vereist dat vergelijkbare individuen vergelijkbare behandeling en uitkomsten ontvangen van AI-systemen, met focus op consistentie op individueel niveau."
            }
        },
        {
            question: {
                en: "What is group fairness?",
                es: "¿Qué es la equidad grupal?",
                de: "Was ist Gruppenfairness?",
                nl: "Wat is groepsfairness?"
            },
            options: [
                { en: "Equal treatment across groups", es: "Tratamiento igual entre grupos", de: "Gleiche Behandlung über Gruppen", nl: "Gelijke behandeling over groepen" },
                { en: "Team collaboration", es: "Colaboración de equipo", de: "Teamzusammenarbeit", nl: "Team samenwerking" },
                { en: "Collective decisions", es: "Decisiones colectivas", de: "Kollektive Entscheidungen", nl: "Collectieve beslissingen" },
                { en: "Social networks", es: "Redes sociales", de: "Soziale Netzwerke", nl: "Sociale netwerken" }
            ],
            correct: 0,
            explanation: {
                en: "Group fairness ensures that AI systems provide equal outcomes or opportunities across different demographic groups, addressing systemic biases.",
                es: "La equidad grupal asegura que los sistemas de IA proporcionen resultados u oportunidades iguales entre diferentes grupos demográficos, abordando sesgos sistémicos.",
                de: "Gruppenfairness stellt sicher, dass KI-Systeme gleiche Ergebnisse oder Chancen über verschiedene demografische Gruppen bieten und systemische Verzerrungen angehen.",
                nl: "Groepsfairness zorgt ervoor dat AI-systemen gelijke uitkomsten of kansen bieden over verschillende demografische groepen, waarbij systemische vooroordelen worden aangepakt."
            }
        },
        {
            question: {
                en: "What is procedural fairness in AI?",
                es: "¿Qué es la equidad procedimental en IA?",
                de: "Was ist prozedurale Fairness in KI?",
                nl: "Wat is procedurele fairness in AI?"
            },
            options: [
                { en: "Fair decision-making process", es: "Proceso justo de toma de decisiones", de: "Fairer Entscheidungsprozess", nl: "Eerlijk besluitvormingsproces" },
                { en: "System procedures", es: "Procedimientos del sistema", de: "Systemverfahren", nl: "Systeemprocedures" },
                { en: "Process optimization", es: "Optimización de procesos", de: "Prozessoptimierung", nl: "Procesoptimalisatie" },
                { en: "Workflow management", es: "Gestión de flujo de trabajo", de: "Workflow-Management", nl: "Workflow beheer" }
            ],
            correct: 0,
            explanation: {
                en: "Procedural fairness focuses on the fairness of the decision-making process itself, ensuring transparency, consistency, and opportunity for recourse.",
                es: "La equidad procedimental se enfoca en la justicia del proceso de toma de decisiones en sí, asegurando transparencia, consistencia y oportunidad de recurso.",
                de: "Prozedurale Fairness konzentriert sich auf die Fairness des Entscheidungsprozesses selbst und gewährleistet Transparenz, Konsistenz und Möglichkeit zur Abhilfe.",
                nl: "Procedurele fairness richt zich op de eerlijkheid van het besluitvormingsproces zelf, waarbij transparantie, consistentie en mogelijkheid tot verhaal worden gewaarborgd."
            }
        },
        {
            question: {
                en: "What is distributive fairness?",
                es: "¿Qué es la equidad distributiva?",
                de: "Was ist distributive Fairness?",
                nl: "Wat is distributieve fairness?"
            },
            options: [
                { en: "Fair allocation of outcomes", es: "Asignación justa de resultados", de: "Faire Verteilung von Ergebnissen", nl: "Eerlijke verdeling van uitkomsten" },
                { en: "Resource distribution", es: "Distribución de recursos", de: "Ressourcenverteilung", nl: "Resource verdeling" },
                { en: "Network distribution", es: "Distribución de red", de: "Netzwerkverteilung", nl: "Netwerk distributie" },
                { en: "Load balancing", es: "Equilibrio de carga", de: "Lastverteilung", nl: "Load balancing" }
            ],
            correct: 0,
            explanation: {
                en: "Distributive fairness concerns the fair allocation of benefits and burdens resulting from AI decisions across different groups and individuals.",
                es: "La equidad distributiva se refiere a la asignación justa de beneficios y cargas resultantes de decisiones de IA entre diferentes grupos e individuos.",
                de: "Distributive Fairness betrifft die faire Verteilung von Nutzen und Lasten, die aus KI-Entscheidungen über verschiedene Gruppen und Einzelpersonen resultieren.",
                nl: "Distributieve fairness betreft de eerlijke verdeling van voordelen en lasten die voortvloeien uit AI-beslissingen over verschillende groepen en individuen."
            }
        },
        {
            question: {
                en: "What is representation bias?",
                es: "¿Qué es el sesgo de representación?",
                de: "Was ist Repräsentationsverzerrung?",
                nl: "Wat is representatie bias?"
            },
            options: [
                { en: "Underrepresented groups in data", es: "Grupos subrepresentados en datos", de: "Unterrepräsentierte Gruppen in Daten", nl: "Ondervertegenwoordigde groepen in data" },
                { en: "Visual representation", es: "Representación visual", de: "Visuelle Darstellung", nl: "Visuele representatie" },
                { en: "Data formatting", es: "Formato de datos", de: "Datenformatierung", nl: "Data formattering" },
                { en: "Display settings", es: "Configuración de pantalla", de: "Anzeigeeinstellungen", nl: "Display instellingen" }
            ],
            correct: 0,
            explanation: {
                en: "Representation bias occurs when certain groups are underrepresented in training data, leading to AI systems that perform poorly for those groups.",
                es: "El sesgo de representación ocurre cuando ciertos grupos están subrepresentados en datos de entrenamiento, llevando a sistemas de IA que funcionan mal para esos grupos.",
                de: "Repräsentationsverzerrung tritt auf, wenn bestimmte Gruppen in Trainingsdaten unterrepräsentiert sind, was zu KI-Systemen führt, die für diese Gruppen schlecht funktionieren.",
                nl: "Representatie bias treedt op wanneer bepaalde groepen ondervertegenwoordigd zijn in trainingsdata, wat leidt tot AI-systemen die slecht presteren voor die groepen."
            }
        },
        {
            question: {
                en: "What is historical bias in AI?",
                es: "¿Qué es el sesgo histórico en IA?",
                de: "Was ist historische Verzerrung in KI?",
                nl: "Wat is historische bias in AI?"
            },
            options: [
                { en: "Past prejudices in data", es: "Prejuicios pasados en datos", de: "Vergangene Vorurteile in Daten", nl: "Historische vooroordelen in data" },
                { en: "Old algorithms", es: "Algoritmos antiguos", de: "Alte Algorithmen", nl: "Oude algoritmes" },
                { en: "Legacy systems", es: "Sistemas heredados", de: "Legacy-Systeme", nl: "Legacy systemen" },
                { en: "Outdated models", es: "Modelos obsoletos", de: "Veraltete Modelle", nl: "Verouderde modellen" }
            ],
            correct: 0,
            explanation: {
                en: "Historical bias occurs when AI systems learn from data that reflects past societal prejudices and discrimination, perpetuating these biases.",
                es: "El sesgo histórico ocurre cuando los sistemas de IA aprenden de datos que reflejan prejuicios y discriminación social pasados, perpetuando estos sesgos.",
                de: "Historische Verzerrung tritt auf, wenn KI-Systeme aus Daten lernen, die vergangene gesellschaftliche Vorurteile und Diskriminierung widerspiegeln und diese Verzerrungen fortsetzen.",
                nl: "Historische bias treedt op wanneer AI-systemen leren van data die vroegere maatschappelijke vooroordelen en discriminatie weerspiegelt, waarbij deze vooroordelen worden bestendigd."
            }
        },
        {
            question: {
                en: "What is measurement bias?",
                es: "¿Qué es el sesgo de medición?",
                de: "Was ist Messverzerrung?",
                nl: "Wat is meetbias?"
            },
            options: [
                { en: "Inaccurate data collection", es: "Recolección de datos inexacta", de: "Ungenaue Datenerfassung", nl: "Onnauwkeurige dataverzameling" },
                { en: "Measurement tools", es: "Herramientas de medición", de: "Messwerkzeuge", nl: "Meetinstrumenten" },
                { en: "Scale calibration", es: "Calibración de escala", de: "Skalenkalibrierung", nl: "Schaal kalibratie" },
                { en: "Unit conversion", es: "Conversión de unidades", de: "Einheitenumrechnung", nl: "Eenheid conversie" }
            ],
            correct: 0,
            explanation: {
                en: "Measurement bias occurs when data collection methods are systematically flawed, leading to inaccurate or skewed representations of reality.",
                es: "El sesgo de medición ocurre cuando los métodos de recolección de datos son sistemáticamente defectuosos, llevando a representaciones inexactas o sesgadas de la realidad.",
                de: "Messverzerrung tritt auf, wenn Datenerfassungsmethoden systematisch fehlerhaft sind und zu ungenauen oder verzerrten Darstellungen der Realität führen.",
                nl: "Meetbias treedt op wanneer dataverzamelingsmethoden systematisch gebrekkig zijn, wat leidt tot onnauwkeurige of scheve weergaven van de werkelijkheid."
            }
        },
        {
            question: {
                en: "What is aggregation bias?",
                es: "¿Qué es el sesgo de agregación?",
                de: "Was ist Aggregationsverzerrung?",
                nl: "Wat is aggregatie bias?"
            },
            options: [
                { en: "One model for diverse groups", es: "Un modelo para grupos diversos", de: "Ein Modell für diverse Gruppen", nl: "Eén model voor diverse groepen" },
                { en: "Data combination", es: "Combinación de datos", de: "Datenkombination", nl: "Data combinatie" },
                { en: "Sum calculations", es: "Cálculos de suma", de: "Summenberechnungen", nl: "Som berekeningen" },
                { en: "Group totals", es: "Totales de grupo", de: "Gruppensummen", nl: "Groepstotalen" }
            ],
            correct: 0,
            explanation: {
                en: "Aggregation bias occurs when one model is used for all groups despite different underlying patterns, leading to poor performance for some subgroups.",
                es: "El sesgo de agregación ocurre cuando se usa un modelo para todos los grupos a pesar de diferentes patrones subyacentes, llevando a mal rendimiento para algunos subgrupos.",
                de: "Aggregationsverzerrung tritt auf, wenn ein Modell für alle Gruppen verwendet wird, trotz unterschiedlicher zugrunde liegender Muster, was zu schlechter Leistung für einige Untergruppen führt.",
                nl: "Aggregatie bias treedt op wanneer één model wordt gebruikt voor alle groepen ondanks verschillende onderliggende patronen, wat leidt tot slechte prestaties voor sommige subgroepen."
            }
        },
        {
            question: {
                en: "What is evaluation bias?",
                es: "¿Qué es el sesgo de evaluación?",
                de: "Was ist Evaluationsverzerrung?",
                nl: "Wat is evaluatie bias?"
            },
            options: [
                { en: "Unfair benchmarking", es: "Evaluación comparativa injusta", de: "Unfaire Leistungsbewertung", nl: "Oneerlijke benchmarking" },
                { en: "Performance testing", es: "Pruebas de rendimiento", de: "Leistungstests", nl: "Prestatietesten" },
                { en: "Quality assessment", es: "Evaluación de calidad", de: "Qualitätsbewertung", nl: "Kwaliteitsbeoordeling" },
                { en: "System review", es: "Revisión del sistema", de: "Systemüberprüfung", nl: "Systeembeoordeling" }
            ],
            correct: 0,
            explanation: {
                en: "Evaluation bias occurs when benchmarks or test sets don't represent all user groups equally, giving misleading performance metrics.",
                es: "El sesgo de evaluación ocurre cuando los puntos de referencia o conjuntos de prueba no representan a todos los grupos de usuarios por igual, dando métricas de rendimiento engañosas.",
                de: "Evaluationsverzerrung tritt auf, wenn Benchmarks oder Testsets nicht alle Benutzergruppen gleichermaßen repräsentieren und irreführende Leistungsmetriken liefern.",
                nl: "Evaluatie bias treedt op wanneer benchmarks of testsets niet alle gebruikersgroepen gelijk vertegenwoordigen, wat misleidende prestatiemetrieken oplevert."
            }
        },
        {
            question: {
                en: "What is confirmation bias in AI?",
                es: "¿Qué es el sesgo de confirmación en IA?",
                de: "Was ist Bestätigungsverzerrung in KI?",
                nl: "Wat is bevestigingsbias in AI?"
            },
            options: [
                { en: "Reinforcing existing beliefs", es: "Reforzar creencias existentes", de: "Bestehende Überzeugungen verstärken", nl: "Bestaande overtuigingen versterken" },
                { en: "Data confirmation", es: "Confirmación de datos", de: "Datenbestätigung", nl: "Data bevestiging" },
                { en: "System validation", es: "Validación del sistema", de: "Systemvalidierung", nl: "Systeem validatie" },
                { en: "User approval", es: "Aprobación del usuario", de: "Benutzergenehmigung", nl: "Gebruikersgoedkeuring" }
            ],
            correct: 0,
            explanation: {
                en: "Confirmation bias in AI occurs when systems or developers favor information that confirms pre-existing beliefs, ignoring contradictory evidence.",
                es: "El sesgo de confirmación en IA ocurre cuando sistemas o desarrolladores favorecen información que confirma creencias preexistentes, ignorando evidencia contradictoria.",
                de: "Bestätigungsverzerrung in KI tritt auf, wenn Systeme oder Entwickler Informationen bevorzugen, die bestehende Überzeugungen bestätigen und widersprüchliche Beweise ignorieren.",
                nl: "Bevestigingsbias in AI treedt op wanneer systemen of ontwikkelaars informatie bevoordelen die bestaande overtuigingen bevestigt, waarbij tegenstrijdig bewijs wordt genegeerd."
            }
        },
        {
            question: {
                en: "What is selection bias in ML?",
                es: "¿Qué es el sesgo de selección en ML?",
                de: "Was ist Selektionsverzerrung in ML?",
                nl: "Wat is selectiebias in ML?"
            },
            options: [
                { en: "Non-random sampling", es: "Muestreo no aleatorio", de: "Nicht-zufällige Stichproben", nl: "Niet-willekeurige steekproef" },
                { en: "Feature selection", es: "Selección de características", de: "Merkmalsauswahl", nl: "Feature selectie" },
                { en: "Model selection", es: "Selección de modelo", de: "Modellauswahl", nl: "Model selectie" },
                { en: "Algorithm choice", es: "Elección de algoritmo", de: "Algorithmuswahl", nl: "Algoritme keuze" }
            ],
            correct: 0,
            explanation: {
                en: "Selection bias occurs when training data is not randomly selected, creating a non-representative sample that leads to biased models.",
                es: "El sesgo de selección ocurre cuando los datos de entrenamiento no se seleccionan aleatoriamente, creando una muestra no representativa que lleva a modelos sesgados.",
                de: "Selektionsverzerrung tritt auf, wenn Trainingsdaten nicht zufällig ausgewählt werden, was eine nicht repräsentative Stichprobe erzeugt, die zu verzerrten Modellen führt.",
                nl: "Selectiebias treedt op wanneer trainingsdata niet willekeurig wordt geselecteerd, waardoor een niet-representatieve steekproef ontstaat die leidt tot bevooroordeelde modellen."
            }
        },
        {
            question: {
                en: "What is survivorship bias?",
                es: "¿Qué es el sesgo de supervivencia?",
                de: "Was ist Überlebensverzerrung?",
                nl: "Wat is survivorship bias?"
            },
            options: [
                { en: "Focusing on successes only", es: "Enfocarse solo en éxitos", de: "Nur auf Erfolge fokussieren", nl: "Focus alleen op successen" },
                { en: "System survival", es: "Supervivencia del sistema", de: "Systemüberleben", nl: "Systeem overleving" },
                { en: "Data retention", es: "Retención de datos", de: "Datenaufbewahrung", nl: "Data retentie" },
                { en: "Model persistence", es: "Persistencia del modelo", de: "Modellpersistenz", nl: "Model persistentie" }
            ],
            correct: 0,
            explanation: {
                en: "Survivorship bias occurs when AI systems are trained only on successful cases, ignoring failures, leading to overly optimistic predictions.",
                es: "El sesgo de supervivencia ocurre cuando los sistemas de IA se entrenan solo con casos exitosos, ignorando fallas, llevando a predicciones excesivamente optimistas.",
                de: "Überlebensverzerrung tritt auf, wenn KI-Systeme nur mit erfolgreichen Fällen trainiert werden und Misserfolge ignorieren, was zu übermäßig optimistischen Vorhersagen führt.",
                nl: "Survivorship bias treedt op wanneer AI-systemen alleen worden getraind op succesvolle gevallen, waarbij mislukkingen worden genegeerd, wat leidt tot overdreven optimistische voorspellingen."
            }
        },
        {
            question: {
                en: "What is automation bias?",
                es: "¿Qué es el sesgo de automatización?",
                de: "Was ist Automatisierungsverzerrung?",
                nl: "Wat is automatiseringsbias?"
            },
            options: [
                { en: "Over-reliance on AI outputs", es: "Dependencia excesiva de salidas de IA", de: "Übermäßige Abhängigkeit von KI-Ausgaben", nl: "Overmatig vertrouwen op AI-output" },
                { en: "Process automation", es: "Automatización de procesos", de: "Prozessautomatisierung", nl: "Procesautomatisering" },
                { en: "System efficiency", es: "Eficiencia del sistema", de: "Systemeffizienz", nl: "Systeemefficiëntie" },
                { en: "Workflow optimization", es: "Optimización de flujo de trabajo", de: "Workflow-Optimierung", nl: "Workflow optimalisatie" }
            ],
            correct: 0,
            explanation: {
                en: "Automation bias is the tendency to favor AI-generated suggestions over human judgment, even when the AI may be wrong.",
                es: "El sesgo de automatización es la tendencia a favorecer sugerencias generadas por IA sobre el juicio humano, incluso cuando la IA puede estar equivocada.",
                de: "Automatisierungsverzerrung ist die Tendenz, KI-generierte Vorschläge gegenüber menschlichem Urteil zu bevorzugen, selbst wenn die KI falsch liegen könnte.",
                nl: "Automatiseringsbias is de neiging om AI-gegenereerde suggesties te verkiezen boven menselijk oordeel, zelfs wanneer de AI fout kan zijn."
            }
        },
        {
            question: {
                en: "What is anchoring bias in AI?",
                es: "¿Qué es el sesgo de anclaje en IA?",
                de: "Was ist Ankerverzerrung in KI?",
                nl: "Wat is ankeringsbias in AI?"
            },
            options: [
                { en: "Over-reliance on initial data", es: "Dependencia excesiva de datos iniciales", de: "Übermäßige Abhängigkeit von Anfangsdaten", nl: "Overmatig vertrouwen op initiële data" },
                { en: "System anchoring", es: "Anclaje del sistema", de: "Systemverankerung", nl: "Systeem verankering" },
                { en: "Data points", es: "Puntos de datos", de: "Datenpunkte", nl: "Datapunten" },
                { en: "Reference values", es: "Valores de referencia", de: "Referenzwerte", nl: "Referentiewaarden" }
            ],
            correct: 0,
            explanation: {
                en: "Anchoring bias occurs when AI systems give disproportionate weight to initial information or training data, affecting subsequent decisions.",
                es: "El sesgo de anclaje ocurre cuando los sistemas de IA dan peso desproporcionado a información inicial o datos de entrenamiento, afectando decisiones posteriores.",
                de: "Ankerverzerrung tritt auf, wenn KI-Systeme Anfangsinformationen oder Trainingsdaten unverhältnismäßig gewichten und nachfolgende Entscheidungen beeinflussen.",
                nl: "Ankeringsbias treedt op wanneer AI-systemen onevenredig gewicht geven aan initiële informatie of trainingsdata, wat latere beslissingen beïnvloedt."
            }
        },
        {
            question: {
                en: "What is availability bias?",
                es: "¿Qué es el sesgo de disponibilidad?",
                de: "Was ist Verfügbarkeitsverzerrung?",
                nl: "Wat is beschikbaarheidsbias?"
            },
            options: [
                { en: "Overweighting recent data", es: "Sobrevalorar datos recientes", de: "Überbewertung aktueller Daten", nl: "Overwaardering recente data" },
                { en: "System availability", es: "Disponibilidad del sistema", de: "Systemverfügbarkeit", nl: "Systeembeschikbaarheid" },
                { en: "Resource access", es: "Acceso a recursos", de: "Ressourcenzugriff", nl: "Resource toegang" },
                { en: "Data access", es: "Acceso a datos", de: "Datenzugriff", nl: "Data toegang" }
            ],
            correct: 0,
            explanation: {
                en: "Availability bias occurs when AI systems give more weight to easily accessible or recent information rather than all relevant data.",
                es: "El sesgo de disponibilidad ocurre cuando los sistemas de IA dan más peso a información fácilmente accesible o reciente en lugar de todos los datos relevantes.",
                de: "Verfügbarkeitsverzerrung tritt auf, wenn KI-Systeme leicht zugängliche oder aktuelle Informationen stärker gewichten als alle relevanten Daten.",
                nl: "Beschikbaarheidsbias treedt op wanneer AI-systemen meer gewicht geven aan gemakkelijk toegankelijke of recente informatie dan aan alle relevante data."
            }
        },
        {
            question: {
                en: "What is sampling bias?",
                es: "¿Qué es el sesgo de muestreo?",
                de: "Was ist Stichprobenverzerrung?",
                nl: "Wat is steekproefbias?"
            },
            options: [
                { en: "Non-representative data sample", es: "Muestra de datos no representativa", de: "Nicht repräsentative Datenstichprobe", nl: "Niet-representatieve datasteekproef" },
                { en: "Sample rate", es: "Tasa de muestreo", de: "Abtastrate", nl: "Bemonsteringsfrequentie" },
                { en: "Data sampling", es: "Muestreo de datos", de: "Datenstichproben", nl: "Data bemonstering" },
                { en: "Random sampling", es: "Muestreo aleatorio", de: "Zufallsstichproben", nl: "Willekeurige bemonstering" }
            ],
            correct: 0,
            explanation: {
                en: "Sampling bias occurs when the data sample used to train AI is not representative of the population it will serve.",
                es: "El sesgo de muestreo ocurre cuando la muestra de datos usada para entrenar IA no es representativa de la población que servirá.",
                de: "Stichprobenverzerrung tritt auf, wenn die zum Training der KI verwendete Datenstichprobe nicht repräsentativ für die zu bedienende Population ist.",
                nl: "Steekproefbias treedt op wanneer de datasteekproef gebruikt voor AI-training niet representatief is voor de populatie die het zal bedienen."
            }
        },
        {
            question: {
                en: "What is labeling bias?",
                es: "¿Qué es el sesgo de etiquetado?",
                de: "Was ist Kennzeichnungsverzerrung?",
                nl: "Wat is labeling bias?"
            },
            options: [
                { en: "Subjective data annotation", es: "Anotación subjetiva de datos", de: "Subjektive Datenannotation", nl: "Subjectieve data-annotatie" },
                { en: "Label design", es: "Diseño de etiquetas", de: "Etikettendesign", nl: "Label ontwerp" },
                { en: "Tag management", es: "Gestión de etiquetas", de: "Tag-Verwaltung", nl: "Tag beheer" },
                { en: "Classification system", es: "Sistema de clasificación", de: "Klassifizierungssystem", nl: "Classificatiesysteem" }
            ],
            correct: 0,
            explanation: {
                en: "Labeling bias occurs when human annotators introduce their subjective biases into training data labels, affecting model learning.",
                es: "El sesgo de etiquetado ocurre cuando anotadores humanos introducen sus sesgos subjetivos en etiquetas de datos de entrenamiento, afectando el aprendizaje del modelo.",
                de: "Kennzeichnungsverzerrung tritt auf, wenn menschliche Annotatoren ihre subjektiven Verzerrungen in Trainingsdatenetiketten einbringen und das Modelllernen beeinflussen.",
                nl: "Labeling bias treedt op wanneer menselijke annotators hun subjectieve vooroordelen introduceren in trainingsdatalabels, wat modeltraining beïnvloedt."
            }
        },
        {
            question: {
                en: "What is proxy discrimination?",
                es: "¿Qué es la discriminación proxy?",
                de: "Was ist Proxy-Diskriminierung?",
                nl: "Wat is proxy discriminatie?"
            },
            options: [
                { en: "Indirect bias through correlates", es: "Sesgo indirecto a través de correlatos", de: "Indirekte Verzerrung durch Korrelate", nl: "Indirecte bias door correlaten" },
                { en: "Proxy servers", es: "Servidores proxy", de: "Proxy-Server", nl: "Proxy servers" },
                { en: "Network routing", es: "Enrutamiento de red", de: "Netzwerk-Routing", nl: "Netwerk routing" },
                { en: "Access control", es: "Control de acceso", de: "Zugriffskontrolle", nl: "Toegangscontrole" }
            ],
            correct: 0,
            explanation: {
                en: "Proxy discrimination occurs when AI uses seemingly neutral features that correlate with protected attributes, indirectly causing discrimination.",
                es: "La discriminación proxy ocurre cuando la IA usa características aparentemente neutrales que correlacionan con atributos protegidos, causando discriminación indirecta.",
                de: "Proxy-Diskriminierung tritt auf, wenn KI scheinbar neutrale Merkmale verwendet, die mit geschützten Attributen korrelieren und indirekt Diskriminierung verursachen.",
                nl: "Proxy discriminatie treedt op wanneer AI ogenschijnlijk neutrale kenmerken gebruikt die correleren met beschermde attributen, indirect discriminatie veroorzakend."
            }
        },
        {
            question: {
                en: "What is algorithmic transparency?",
                es: "¿Qué es la transparencia algorítmica?",
                de: "Was ist algorithmische Transparenz?",
                nl: "Wat is algoritmische transparantie?"
            },
            options: [
                { en: "Open decision processes", es: "Procesos de decisión abiertos", de: "Offene Entscheidungsprozesse", nl: "Open besluitvormingsprocessen" },
                { en: "Clear algorithms", es: "Algoritmos claros", de: "Klare Algorithmen", nl: "Heldere algoritmes" },
                { en: "Code visibility", es: "Visibilidad del código", de: "Code-Sichtbarkeit", nl: "Code zichtbaarheid" },
                { en: "System clarity", es: "Claridad del sistema", de: "Systemklarheit", nl: "Systeem helderheid" }
            ],
            correct: 0,
            explanation: {
                en: "Algorithmic transparency means making AI decision-making processes understandable and accessible to stakeholders for accountability.",
                es: "La transparencia algorítmica significa hacer los procesos de toma de decisiones de IA comprensibles y accesibles a las partes interesadas para la responsabilidad.",
                de: "Algorithmische Transparenz bedeutet, KI-Entscheidungsprozesse für Stakeholder verständlich und zugänglich zu machen für Verantwortlichkeit.",
                nl: "Algoritmische transparantie betekent AI-besluitvormingsprocessen begrijpelijk en toegankelijk maken voor belanghebbenden voor verantwoording."
            }
        },
        {
            question: {
                en: "What is data lineage in AI ethics?",
                es: "¿Qué es el linaje de datos en ética de IA?",
                de: "Was ist Datenherkunft in KI-Ethik?",
                nl: "Wat is data lineage in AI-ethiek?"
            },
            options: [
                { en: "Tracking data origin and use", es: "Rastrear origen y uso de datos", de: "Verfolgung von Datenherkunft und -nutzung", nl: "Traceren van data-oorsprong en -gebruik" },
                { en: "Data relationships", es: "Relaciones de datos", de: "Datenbeziehungen", nl: "Data relaties" },
                { en: "Database structure", es: "Estructura de base de datos", de: "Datenbankstruktur", nl: "Database structuur" },
                { en: "Information flow", es: "Flujo de información", de: "Informationsfluss", nl: "Informatiestroom" }
            ],
            correct: 0,
            explanation: {
                en: "Data lineage tracks the origin, movement, and transformation of data throughout AI systems, ensuring accountability and compliance.",
                es: "El linaje de datos rastrea el origen, movimiento y transformación de datos a través de sistemas de IA, asegurando responsabilidad y cumplimiento.",
                de: "Datenherkunft verfolgt den Ursprung, die Bewegung und Transformation von Daten in KI-Systemen und gewährleistet Verantwortlichkeit und Compliance.",
                nl: "Data lineage volgt de oorsprong, beweging en transformatie van data door AI-systemen, waarbij verantwoording en compliance worden gewaarborgd."
            }
        },
        {
            question: {
                en: "What is model governance?",
                es: "¿Qué es la gobernanza de modelos?",
                de: "Was ist Modell-Governance?",
                nl: "Wat is model governance?"
            },
            options: [
                { en: "Oversight of AI models", es: "Supervisión de modelos de IA", de: "Aufsicht über KI-Modelle", nl: "Toezicht op AI-modellen" },
                { en: "Model management", es: "Gestión de modelos", de: "Modellverwaltung", nl: "Model beheer" },
                { en: "System control", es: "Control del sistema", de: "Systemkontrolle", nl: "Systeemcontrole" },
                { en: "Version control", es: "Control de versiones", de: "Versionskontrolle", nl: "Versiebeheer" }
            ],
            correct: 0,
            explanation: {
                en: "Model governance establishes policies and procedures for developing, deploying, and monitoring AI models to ensure ethical and responsible use.",
                es: "La gobernanza de modelos establece políticas y procedimientos para desarrollar, desplegar y monitorear modelos de IA para asegurar uso ético y responsable.",
                de: "Modell-Governance etabliert Richtlinien und Verfahren für die Entwicklung, Bereitstellung und Überwachung von KI-Modellen für ethische und verantwortungsvolle Nutzung.",
                nl: "Model governance stelt beleid en procedures vast voor het ontwikkelen, implementeren en monitoren van AI-modellen voor ethisch en verantwoord gebruik."
            }
        },
        {
            question: {
                en: "What is impact assessment in AI?",
                es: "¿Qué es la evaluación de impacto en IA?",
                de: "Was ist Folgenabschätzung in KI?",
                nl: "Wat is impact assessment in AI?"
            },
            options: [
                { en: "Evaluating AI effects on society", es: "Evaluar efectos de IA en sociedad", de: "Bewertung von KI-Auswirkungen auf Gesellschaft", nl: "Evalueren van AI-effecten op maatschappij" },
                { en: "Performance impact", es: "Impacto en rendimiento", de: "Leistungsauswirkung", nl: "Prestatie-impact" },
                { en: "System analysis", es: "Análisis del sistema", de: "Systemanalyse", nl: "Systeemanalyse" },
                { en: "Risk assessment", es: "Evaluación de riesgo", de: "Risikobewertung", nl: "Risicobeoordeling" }
            ],
            correct: 0,
            explanation: {
                en: "Impact assessment evaluates potential social, economic, and ethical effects of AI systems before deployment to identify and mitigate risks.",
                es: "La evaluación de impacto evalúa efectos sociales, económicos y éticos potenciales de sistemas de IA antes del despliegue para identificar y mitigar riesgos.",
                de: "Folgenabschätzung bewertet potenzielle soziale, wirtschaftliche und ethische Auswirkungen von KI-Systemen vor der Bereitstellung zur Identifizierung und Minderung von Risiken.",
                nl: "Impact assessment evalueert potentiële sociale, economische en ethische effecten van AI-systemen voor implementatie om risico's te identificeren en te mitigeren."
            }
        },
        {
            question: {
                en: "What is value-sensitive design?",
                es: "¿Qué es el diseño sensible a valores?",
                de: "Was ist wertesensitives Design?",
                nl: "Wat is waardegevoelig ontwerp?"
            },
            options: [
                { en: "Incorporating ethics in design", es: "Incorporar ética en diseño", de: "Ethik in Design einbeziehen", nl: "Ethiek integreren in ontwerp" },
                { en: "Value optimization", es: "Optimización de valor", de: "Wertoptimierung", nl: "Waarde optimalisatie" },
                { en: "Design principles", es: "Principios de diseño", de: "Designprinzipien", nl: "Ontwerpprincipes" },
                { en: "User values", es: "Valores del usuario", de: "Benutzerwerte", nl: "Gebruikerswaarden" }
            ],
            correct: 0,
            explanation: {
                en: "Value-sensitive design systematically incorporates human values and ethical considerations throughout the AI development process.",
                es: "El diseño sensible a valores incorpora sistemáticamente valores humanos y consideraciones éticas a lo largo del proceso de desarrollo de IA.",
                de: "Wertesensitives Design bezieht systematisch menschliche Werte und ethische Überlegungen in den gesamten KI-Entwicklungsprozess ein.",
                nl: "Waardegevoelig ontwerp integreert systematisch menselijke waarden en ethische overwegingen gedurende het hele AI-ontwikkelingsproces."
            }
        },
        {
            question: {
                en: "What is participatory design in AI?",
                es: "¿Qué es el diseño participativo en IA?",
                de: "Was ist partizipatives Design in KI?",
                nl: "Wat is participatief ontwerp in AI?"
            },
            options: [
                { en: "Including stakeholders in design", es: "Incluir partes interesadas en diseño", de: "Stakeholder in Design einbeziehen", nl: "Belanghebbenden betrekken bij ontwerp" },
                { en: "Team participation", es: "Participación del equipo", de: "Teamteilnahme", nl: "Team participatie" },
                { en: "Collaborative coding", es: "Codificación colaborativa", de: "Kollaboratives Programmieren", nl: "Collaboratief coderen" },
                { en: "Open source", es: "Código abierto", de: "Open Source", nl: "Open source" }
            ],
            correct: 0,
            explanation: {
                en: "Participatory design involves affected communities and stakeholders in the AI design process to ensure systems meet their needs and values.",
                es: "El diseño participativo involucra comunidades afectadas y partes interesadas en el proceso de diseño de IA para asegurar que los sistemas cumplan sus necesidades y valores.",
                de: "Partizipatives Design bezieht betroffene Gemeinschaften und Stakeholder in den KI-Designprozess ein, um sicherzustellen, dass Systeme ihren Bedürfnissen und Werten entsprechen.",
                nl: "Participatief ontwerp betrekt getroffen gemeenschappen en belanghebbenden in het AI-ontwerpproces om te waarborgen dat systemen aan hun behoeften en waarden voldoen."
            }
        },
        {
            question: {
                en: "What is human-in-the-loop AI?",
                es: "¿Qué es IA con humano en el bucle?",
                de: "Was ist Human-in-the-Loop KI?",
                nl: "Wat is human-in-the-loop AI?"
            },
            options: [
                { en: "Human oversight in decisions", es: "Supervisión humana en decisiones", de: "Menschliche Aufsicht bei Entscheidungen", nl: "Menselijk toezicht op beslissingen" },
                { en: "Manual processing", es: "Procesamiento manual", de: "Manuelle Verarbeitung", nl: "Handmatige verwerking" },
                { en: "User interaction", es: "Interacción del usuario", de: "Benutzerinteraktion", nl: "Gebruikersinteractie" },
                { en: "Feedback loops", es: "Bucles de retroalimentación", de: "Rückkopplungsschleifen", nl: "Feedback loops" }
            ],
            correct: 0,
            explanation: {
                en: "Human-in-the-loop AI keeps humans involved in the decision-making process, especially for critical or sensitive decisions.",
                es: "La IA con humano en el bucle mantiene a humanos involucrados en el proceso de toma de decisiones, especialmente para decisiones críticas o sensibles.",
                de: "Human-in-the-Loop KI hält Menschen im Entscheidungsprozess beteiligt, besonders bei kritischen oder sensiblen Entscheidungen.",
                nl: "Human-in-the-loop AI houdt mensen betrokken bij het besluitvormingsproces, vooral voor kritieke of gevoelige beslissingen."
            }
        },
        {
            question: {
                en: "What is contestability in AI?",
                es: "¿Qué es la impugnabilidad en IA?",
                de: "Was ist Anfechtbarkeit in KI?",
                nl: "Wat is aanvechtbaarheid in AI?"
            },
            options: [
                { en: "Right to challenge decisions", es: "Derecho a desafiar decisiones", de: "Recht, Entscheidungen anzufechten", nl: "Recht om beslissingen aan te vechten" },
                { en: "System competition", es: "Competencia del sistema", de: "Systemwettbewerb", nl: "Systeemcompetitie" },
                { en: "Performance contest", es: "Concurso de rendimiento", de: "Leistungswettbewerb", nl: "Prestatiewedstrijd" },
                { en: "Model comparison", es: "Comparación de modelos", de: "Modellvergleich", nl: "Model vergelijking" }
            ],
            correct: 0,
            explanation: {
                en: "Contestability ensures individuals can challenge and seek recourse for AI decisions that affect them, promoting accountability.",
                es: "La impugnabilidad asegura que individuos puedan desafiar y buscar recurso para decisiones de IA que los afecten, promoviendo responsabilidad.",
                de: "Anfechtbarkeit stellt sicher, dass Einzelpersonen KI-Entscheidungen, die sie betreffen, anfechten und Abhilfe suchen können, was Verantwortlichkeit fördert.",
                nl: "Aanvechtbaarheid waarborgt dat individuen AI-beslissingen die hen raken kunnen aanvechten en verhaal kunnen zoeken, wat verantwoording bevordert."
            }
        },
        {
            question: {
                en: "What is meaningful human control?",
                es: "¿Qué es el control humano significativo?",
                de: "Was ist bedeutsame menschliche Kontrolle?",
                nl: "Wat is betekenisvolle menselijke controle?"
            },
            options: [
                { en: "Effective human oversight", es: "Supervisión humana efectiva", de: "Effektive menschliche Aufsicht", nl: "Effectief menselijk toezicht" },
                { en: "Manual control", es: "Control manual", de: "Manuelle Steuerung", nl: "Handmatige controle" },
                { en: "User management", es: "Gestión de usuario", de: "Benutzerverwaltung", nl: "Gebruikersbeheer" },
                { en: "System oversight", es: "Supervisión del sistema", de: "Systemaufsicht", nl: "Systeemtoezicht" }
            ],
            correct: 0,
            explanation: {
                en: "Meaningful human control ensures humans retain genuine authority over AI systems, with ability to understand, intervene, and override decisions.",
                es: "El control humano significativo asegura que humanos retengan autoridad genuina sobre sistemas de IA, con capacidad de entender, intervenir y anular decisiones.",
                de: "Bedeutsame menschliche Kontrolle stellt sicher, dass Menschen echte Autorität über KI-Systeme behalten, mit der Fähigkeit, Entscheidungen zu verstehen, einzugreifen und zu überstimmen.",
                nl: "Betekenisvolle menselijke controle waarborgt dat mensen echte autoriteit over AI-systemen behouden, met het vermogen om beslissingen te begrijpen, in te grijpen en te overrulen."
            }
        },
        {
            question: {
                en: "What is responsible AI deployment?",
                es: "¿Qué es el despliegue responsable de IA?",
                de: "Was ist verantwortungsvolle KI-Bereitstellung?",
                nl: "Wat is verantwoorde AI-implementatie?"
            },
            options: [
                { en: "Ethical system rollout", es: "Implementación ética del sistema", de: "Ethische Systemeinführung", nl: "Ethische systeemuitrol" },
                { en: "Deployment schedule", es: "Cronograma de despliegue", de: "Bereitstellungszeitplan", nl: "Implementatieschema" },
                { en: "System installation", es: "Instalación del sistema", de: "Systeminstallation", nl: "Systeeminstallatie" },
                { en: "Launch planning", es: "Planificación de lanzamiento", de: "Startplanung", nl: "Lanceringsplanning" }
            ],
            correct: 0,
            explanation: {
                en: "Responsible AI deployment involves careful planning, testing, monitoring, and adjustment to minimize harm and maximize benefits.",
                es: "El despliegue responsable de IA involucra planificación cuidadosa, pruebas, monitoreo y ajuste para minimizar daño y maximizar beneficios.",
                de: "Verantwortungsvolle KI-Bereitstellung beinhaltet sorgfältige Planung, Tests, Überwachung und Anpassung zur Minimierung von Schaden und Maximierung von Nutzen.",
                nl: "Verantwoorde AI-implementatie omvat zorgvuldige planning, testen, monitoring en aanpassing om schade te minimaliseren en voordelen te maximaliseren."
            }
        },
        {
            question: {
                en: "What is AI auditing?",
                es: "¿Qué es la auditoría de IA?",
                de: "Was ist KI-Auditierung?",
                nl: "Wat is AI-auditing?"
            },
            options: [
                { en: "Systematic evaluation of AI systems", es: "Evaluación sistemática de sistemas de IA", de: "Systematische Bewertung von KI-Systemen", nl: "Systematische evaluatie van AI-systemen" },
                { en: "Financial audit", es: "Auditoría financiera", de: "Finanzprüfung", nl: "Financiële audit" },
                { en: "Code review", es: "Revisión de código", de: "Code-Überprüfung", nl: "Code review" },
                { en: "System check", es: "Verificación del sistema", de: "Systemprüfung", nl: "Systeemcontrole" }
            ],
            correct: 0,
            explanation: {
                en: "AI auditing systematically evaluates AI systems for bias, fairness, accuracy, and compliance with ethical and legal standards.",
                es: "La auditoría de IA evalúa sistemáticamente sistemas de IA por sesgo, equidad, precisión y cumplimiento con estándares éticos y legales.",
                de: "KI-Auditierung bewertet systematisch KI-Systeme auf Verzerrung, Fairness, Genauigkeit und Einhaltung ethischer und rechtlicher Standards.",
                nl: "AI-auditing evalueert systematisch AI-systemen op bias, fairness, nauwkeurigheid en naleving van ethische en wettelijke normen."
            }
        },
        {
            question: {
                en: "What is ethical AI certification?",
                es: "¿Qué es la certificación de IA ética?",
                de: "Was ist ethische KI-Zertifizierung?",
                nl: "Wat is ethische AI-certificering?"
            },
            options: [
                { en: "Verification of ethical standards", es: "Verificación de estándares éticos", de: "Überprüfung ethischer Standards", nl: "Verificatie van ethische standaarden" },
                { en: "Professional certification", es: "Certificación profesional", de: "Berufszertifizierung", nl: "Professionele certificering" },
                { en: "Quality assurance", es: "Aseguramiento de calidad", de: "Qualitätssicherung", nl: "Kwaliteitsborging" },
                { en: "Compliance check", es: "Verificación de cumplimiento", de: "Compliance-Prüfung", nl: "Compliance controle" }
            ],
            correct: 0,
            explanation: {
                en: "Ethical AI certification verifies that AI systems meet established ethical standards and guidelines through formal assessment processes.",
                es: "La certificación de IA ética verifica que los sistemas de IA cumplan estándares y directrices éticas establecidas a través de procesos formales de evaluación.",
                de: "Ethische KI-Zertifizierung überprüft, dass KI-Systeme etablierte ethische Standards und Richtlinien durch formale Bewertungsprozesse erfüllen.",
                nl: "Ethische AI-certificering verifieert dat AI-systemen voldoen aan vastgestelde ethische standaarden en richtlijnen via formele beoordelingsprocessen."
            }
        },
        {
            question: {
                en: "What is AI risk management?",
                es: "¿Qué es la gestión de riesgos de IA?",
                de: "Was ist KI-Risikomanagement?",
                nl: "Wat is AI-risicobeheer?"
            },
            options: [
                { en: "Identifying and mitigating AI risks", es: "Identificar y mitigar riesgos de IA", de: "KI-Risiken identifizieren und mindern", nl: "AI-risico's identificeren en mitigeren" },
                { en: "Risk assessment", es: "Evaluación de riesgo", de: "Risikobewertung", nl: "Risicobeoordeling" },
                { en: "Safety management", es: "Gestión de seguridad", de: "Sicherheitsmanagement", nl: "Veiligheidsbeheer" },
                { en: "Threat analysis", es: "Análisis de amenazas", de: "Bedrohungsanalyse", nl: "Dreigingsanalyse" }
            ],
            correct: 0,
            explanation: {
                en: "AI risk management systematically identifies, assesses, and mitigates potential risks associated with AI system development and deployment.",
                es: "La gestión de riesgos de IA identifica, evalúa y mitiga sistemáticamente riesgos potenciales asociados con el desarrollo y despliegue de sistemas de IA.",
                de: "KI-Risikomanagement identifiziert, bewertet und mindert systematisch potenzielle Risiken im Zusammenhang mit der Entwicklung und Bereitstellung von KI-Systemen.",
                nl: "AI-risicobeheer identificeert, beoordeelt en mitigeert systematisch potentiële risico's verbonden aan AI-systeemontwikkeling en -implementatie."
            }
        },
        {
            question: {
                en: "What is continuous monitoring in AI ethics?",
                es: "¿Qué es el monitoreo continuo en ética de IA?",
                de: "Was ist kontinuierliche Überwachung in KI-Ethik?",
                nl: "Wat is continue monitoring in AI-ethiek?"
            },
            options: [
                { en: "Ongoing system evaluation", es: "Evaluación continua del sistema", de: "Fortlaufende Systembewertung", nl: "Doorlopende systeemevaluatie" },
                { en: "Performance tracking", es: "Seguimiento de rendimiento", de: "Leistungsverfolgung", nl: "Prestatie tracking" },
                { en: "System monitoring", es: "Monitoreo del sistema", de: "Systemüberwachung", nl: "Systeemmonitoring" },
                { en: "Data monitoring", es: "Monitoreo de datos", de: "Datenüberwachung", nl: "Data monitoring" }
            ],
            correct: 0,
            explanation: {
                en: "Continuous monitoring involves ongoing evaluation of AI systems for bias, performance degradation, and ethical compliance after deployment.",
                es: "El monitoreo continuo involucra evaluación continua de sistemas de IA por sesgo, degradación de rendimiento y cumplimiento ético después del despliegue.",
                de: "Kontinuierliche Überwachung beinhaltet fortlaufende Bewertung von KI-Systemen auf Verzerrung, Leistungsabfall und ethische Compliance nach der Bereitstellung.",
                nl: "Continue monitoring omvat doorlopende evaluatie van AI-systemen op bias, prestatiedegradatie en ethische naleving na implementatie."
            }
        },
        {
            question: {
                en: "What is ethical debt in AI?",
                es: "¿Qué es la deuda ética en IA?",
                de: "Was ist ethische Schuld in KI?",
                nl: "Wat is ethische schuld in AI?"
            },
            options: [
                { en: "Accumulated ethical issues", es: "Problemas éticos acumulados", de: "Angesammelte ethische Probleme", nl: "Opgehoopte ethische kwesties" },
                { en: "Financial debt", es: "Deuda financiera", de: "Finanzielle Schulden", nl: "Financiële schuld" },
                { en: "Technical debt", es: "Deuda técnica", de: "Technische Schuld", nl: "Technische schuld" },
                { en: "System debt", es: "Deuda del sistema", de: "Systemschuld", nl: "Systeemschuld" }
            ],
            correct: 0,
            explanation: {
                en: "Ethical debt refers to accumulated ethical issues and shortcuts in AI development that require future remediation, similar to technical debt.",
                es: "La deuda ética se refiere a problemas éticos acumulados y atajos en desarrollo de IA que requieren remediación futura, similar a deuda técnica.",
                de: "Ethische Schuld bezieht sich auf angesammelte ethische Probleme und Abkürzungen in der KI-Entwicklung, die zukünftige Behebung erfordern, ähnlich wie technische Schuld.",
                nl: "Ethische schuld verwijst naar opgehoopte ethische kwesties en shortcuts in AI-ontwikkeling die toekomstige remediëring vereisen, vergelijkbaar met technische schuld."
            }
        },
        {
            question: {
                en: "What is AI literacy?",
                es: "¿Qué es la alfabetización en IA?",
                de: "Was ist KI-Kompetenz?",
                nl: "Wat is AI-geletterdheid?"
            },
            options: [
                { en: "Understanding AI capabilities and limits", es: "Entender capacidades y límites de IA", de: "KI-Fähigkeiten und -Grenzen verstehen", nl: "AI-mogelijkheden en -beperkingen begrijpen" },
                { en: "Reading skills", es: "Habilidades de lectura", de: "Lesefähigkeiten", nl: "Leesvaardigheden" },
                { en: "Computer literacy", es: "Alfabetización informática", de: "Computerkompetenz", nl: "Computergeletterdheid" },
                { en: "Data literacy", es: "Alfabetización de datos", de: "Datenkompetenz", nl: "Data geletterdheid" }
            ],
            correct: 0,
            explanation: {
                en: "AI literacy involves understanding AI capabilities, limitations, and implications, enabling informed participation in AI-related decisions.",
                es: "La alfabetización en IA involucra entender capacidades, limitaciones e implicaciones de IA, permitiendo participación informada en decisiones relacionadas con IA.",
                de: "KI-Kompetenz umfasst das Verständnis von KI-Fähigkeiten, -Grenzen und -Implikationen und ermöglicht informierte Teilnahme an KI-bezogenen Entscheidungen.",
                nl: "AI-geletterdheid omvat het begrijpen van AI-mogelijkheden, -beperkingen en -implicaties, wat geïnformeerde deelname aan AI-gerelateerde beslissingen mogelijk maakt."
            }
        },
        {
            question: {
                en: "What is algorithmic justice?",
                es: "¿Qué es la justicia algorítmica?",
                de: "Was ist algorithmische Gerechtigkeit?",
                nl: "Wat is algoritmische rechtvaardigheid?"
            },
            options: [
                { en: "Fair and equitable AI systems", es: "Sistemas de IA justos y equitativos", de: "Faire und gerechte KI-Systeme", nl: "Eerlijke en rechtvaardige AI-systemen" },
                { en: "Legal justice", es: "Justicia legal", de: "Rechtliche Gerechtigkeit", nl: "Juridische rechtvaardigheid" },
                { en: "Criminal justice", es: "Justicia criminal", de: "Strafjustiz", nl: "Strafrecht" },
                { en: "Social justice", es: "Justicia social", de: "Soziale Gerechtigkeit", nl: "Sociale rechtvaardigheid" }
            ],
            correct: 0,
            explanation: {
                en: "Algorithmic justice ensures AI systems promote fairness and equity, addressing systemic inequalities rather than perpetuating them.",
                es: "La justicia algorítmica asegura que los sistemas de IA promuevan equidad y justicia, abordando desigualdades sistémicas en lugar de perpetuarlas.",
                de: "Algorithmische Gerechtigkeit stellt sicher, dass KI-Systeme Fairness und Gerechtigkeit fördern und systemische Ungleichheiten angehen statt sie fortzusetzen.",
                nl: "Algoritmische rechtvaardigheid waarborgt dat AI-systemen eerlijkheid en rechtvaardigheid bevorderen, waarbij systemische ongelijkheden worden aangepakt in plaats van bestendigd."
            }
        },
        {
            question: {
                en: "What is AI explainability vs interpretability?",
                es: "¿Qué es explicabilidad vs interpretabilidad de IA?",
                de: "Was ist KI-Erklärbarkeit vs Interpretierbarkeit?",
                nl: "Wat is AI-verklaarbaarheid vs interpreteerbaarheid?"
            },
            options: [
                { en: "Why vs how decisions are made", es: "Por qué vs cómo se toman decisiones", de: "Warum vs wie Entscheidungen getroffen werden", nl: "Waarom vs hoe beslissingen worden genomen" },
                { en: "Same concept", es: "Mismo concepto", de: "Gleiches Konzept", nl: "Zelfde concept" },
                { en: "Different models", es: "Modelos diferentes", de: "Verschiedene Modelle", nl: "Verschillende modellen" },
                { en: "Technical terms", es: "Términos técnicos", de: "Technische Begriffe", nl: "Technische termen" }
            ],
            correct: 0,
            explanation: {
                en: "Explainability provides reasons for specific decisions, while interpretability allows understanding of the overall model behavior and logic.",
                es: "La explicabilidad proporciona razones para decisiones específicas, mientras que la interpretabilidad permite entender el comportamiento y lógica general del modelo.",
                de: "Erklärbarkeit liefert Gründe für spezifische Entscheidungen, während Interpretierbarkeit das Verständnis des gesamten Modellverhaltens und der Logik ermöglicht.",
                nl: "Verklaarbaarheid geeft redenen voor specifieke beslissingen, terwijl interpreteerbaarheid het begrijpen van algemeen modelgedrag en logica mogelijk maakt."
            }
        },
        {
            question: {
                en: "What is the precautionary principle in AI?",
                es: "¿Qué es el principio de precaución en IA?",
                de: "Was ist das Vorsorgeprinzip in KI?",
                nl: "Wat is het voorzorgsprincipe in AI?"
            },
            options: [
                { en: "Caution when risks are uncertain", es: "Precaución cuando riesgos son inciertos", de: "Vorsicht bei ungewissen Risiken", nl: "Voorzichtigheid bij onzekere risico's" },
                { en: "Safety first", es: "Seguridad primero", de: "Sicherheit zuerst", nl: "Veiligheid eerst" },
                { en: "Risk avoidance", es: "Evitar riesgos", de: "Risikovermeidung", nl: "Risicovermijding" },
                { en: "Careful planning", es: "Planificación cuidadosa", de: "Sorgfältige Planung", nl: "Zorgvuldige planning" }
            ],
            correct: 0,
            explanation: {
                en: "The precautionary principle advocates caution in AI deployment when potential risks are uncertain or not fully understood, prioritizing safety.",
                es: "El principio de precaución aboga por precaución en despliegue de IA cuando riesgos potenciales son inciertos o no completamente entendidos, priorizando seguridad.",
                de: "Das Vorsorgeprinzip befürwortet Vorsicht bei KI-Bereitstellung, wenn potenzielle Risiken ungewiss oder nicht vollständig verstanden sind, und priorisiert Sicherheit.",
                nl: "Het voorzorgsprincipe pleit voor voorzichtigheid bij AI-implementatie wanneer potentiële risico's onzeker of niet volledig begrepen zijn, met prioriteit voor veiligheid."
            }
        },
        {
            question: {
                en: "What is AI sustainability ethics?",
                es: "¿Qué es la ética de sostenibilidad de IA?",
                de: "Was ist KI-Nachhaltigkeitsethik?",
                nl: "Wat is AI-duurzaamheidsethiek?"
            },
            options: [
                { en: "Environmental impact of AI", es: "Impacto ambiental de IA", de: "Umweltauswirkungen von KI", nl: "Milieu-impact van AI" },
                { en: "Long-term planning", es: "Planificación a largo plazo", de: "Langfristige Planung", nl: "Langetermijnplanning" },
                { en: "System maintenance", es: "Mantenimiento del sistema", de: "Systemwartung", nl: "Systeemonderhoud" },
                { en: "Resource management", es: "Gestión de recursos", de: "Ressourcenverwaltung", nl: "Resource beheer" }
            ],
            correct: 0,
            explanation: {
                en: "AI sustainability ethics addresses the environmental impact of AI systems, including energy consumption and carbon footprint of training and running models.",
                es: "La ética de sostenibilidad de IA aborda el impacto ambiental de sistemas de IA, incluyendo consumo de energía y huella de carbono de entrenar y ejecutar modelos.",
                de: "KI-Nachhaltigkeitsethik befasst sich mit den Umweltauswirkungen von KI-Systemen, einschließlich Energieverbrauch und CO2-Fußabdruck beim Training und Betrieb von Modellen.",
                nl: "AI-duurzaamheidsethiek behandelt de milieu-impact van AI-systemen, inclusief energieverbruik en CO2-voetafdruk van het trainen en draaien van modellen."
            }
        },
        {
            question: {
                en: "What is digital divide in AI ethics?",
                es: "¿Qué es la brecha digital en ética de IA?",
                de: "Was ist die digitale Kluft in KI-Ethik?",
                nl: "Wat is de digitale kloof in AI-ethiek?"
            },
            options: [
                { en: "Unequal AI access", es: "Acceso desigual a IA", de: "Ungleicher KI-Zugang", nl: "Ongelijke AI-toegang" },
                { en: "Technology gap", es: "Brecha tecnológica", de: "Technologielücke", nl: "Technologiekloof" },
                { en: "Digital separation", es: "Separación digital", de: "Digitale Trennung", nl: "Digitale scheiding" },
                { en: "Network division", es: "División de red", de: "Netzwerkteilung", nl: "Netwerkverdeling" }
            ],
            correct: 0,
            explanation: {
                en: "The digital divide in AI refers to unequal access to AI technologies and benefits across different socioeconomic groups and regions.",
                es: "La brecha digital en IA se refiere al acceso desigual a tecnologías y beneficios de IA entre diferentes grupos socioeconómicos y regiones.",
                de: "Die digitale Kluft in KI bezieht sich auf ungleichen Zugang zu KI-Technologien und -Vorteilen über verschiedene sozioökonomische Gruppen und Regionen.",
                nl: "De digitale kloof in AI verwijst naar ongelijke toegang tot AI-technologieën en -voordelen over verschillende sociaaleconomische groepen en regio's."
            }
        },
        {
            question: {
                en: "What is AI colonialism?",
                es: "¿Qué es el colonialismo de IA?",
                de: "Was ist KI-Kolonialismus?",
                nl: "Wat is AI-kolonialisme?"
            },
            options: [
                { en: "Imposing AI solutions globally", es: "Imponer soluciones de IA globalmente", de: "KI-Lösungen global aufzwingen", nl: "AI-oplossingen globaal opleggen" },
                { en: "Data collection", es: "Recolección de datos", de: "Datensammlung", nl: "Dataverzameling" },
                { en: "System expansion", es: "Expansión del sistema", de: "Systemerweiterung", nl: "Systeemuitbreiding" },
                { en: "Market dominance", es: "Dominio del mercado", de: "Marktdominanz", nl: "Marktdominantie" }
            ],
            correct: 0,
            explanation: {
                en: "AI colonialism refers to powerful nations/companies imposing AI solutions on others without considering local needs, values, or participation.",
                es: "El colonialismo de IA se refiere a naciones/empresas poderosas imponiendo soluciones de IA en otros sin considerar necesidades, valores o participación locales.",
                de: "KI-Kolonialismus bezieht sich auf mächtige Nationen/Unternehmen, die anderen KI-Lösungen aufzwingen, ohne lokale Bedürfnisse, Werte oder Beteiligung zu berücksichtigen.",
                nl: "AI-kolonialisme verwijst naar machtige landen/bedrijven die AI-oplossingen opleggen aan anderen zonder lokale behoeften, waarden of participatie te overwegen."
            }
        },
        {
            question: {
                en: "What is data extractivism?",
                es: "¿Qué es el extractivismo de datos?",
                de: "Was ist Datenextraktivismus?",
                nl: "Wat is data-extractivisme?"
            },
            options: [
                { en: "Exploitative data harvesting", es: "Recolección explotadora de datos", de: "Ausbeuterische Datenerfassung", nl: "Uitbuitende dataverzameling" },
                { en: "Data mining", es: "Minería de datos", de: "Data Mining", nl: "Data mining" },
                { en: "Information extraction", es: "Extracción de información", de: "Informationsextraktion", nl: "Informatie-extractie" },
                { en: "Data collection", es: "Recolección de datos", de: "Datensammlung", nl: "Dataverzameling" }
            ],
            correct: 0,
            explanation: {
                en: "Data extractivism describes the exploitative practice of extracting data from communities without fair compensation or benefit sharing.",
                es: "El extractivismo de datos describe la práctica explotadora de extraer datos de comunidades sin compensación justa o compartir beneficios.",
                de: "Datenextraktivismus beschreibt die ausbeuterische Praxis, Daten aus Gemeinschaften zu extrahieren ohne faire Entschädigung oder Gewinnbeteiligung.",
                nl: "Data-extractivisme beschrijft de uitbuitende praktijk van data extraheren uit gemeenschappen zonder eerlijke compensatie of het delen van voordelen."
            }
        },
        {
            question: {
                en: "What is algorithmic sovereignty?",
                es: "¿Qué es la soberanía algorítmica?",
                de: "Was ist algorithmische Souveränität?",
                nl: "Wat is algoritmische soevereiniteit?"
            },
            options: [
                { en: "Control over own AI systems", es: "Control sobre propios sistemas de IA", de: "Kontrolle über eigene KI-Systeme", nl: "Controle over eigen AI-systemen" },
                { en: "Algorithm ownership", es: "Propiedad de algoritmo", de: "Algorithmus-Eigentum", nl: "Algoritme eigendom" },
                { en: "System independence", es: "Independencia del sistema", de: "Systemunabhängigkeit", nl: "Systeem onafhankelijkheid" },
                { en: "Technical autonomy", es: "Autonomía técnica", de: "Technische Autonomie", nl: "Technische autonomie" }
            ],
            correct: 0,
            explanation: {
                en: "Algorithmic sovereignty is the ability of nations or communities to develop and control their own AI systems aligned with their values.",
                es: "La soberanía algorítmica es la capacidad de naciones o comunidades para desarrollar y controlar sus propios sistemas de IA alineados con sus valores.",
                de: "Algorithmische Souveränität ist die Fähigkeit von Nationen oder Gemeinschaften, ihre eigenen KI-Systeme zu entwickeln und zu kontrollieren, die ihren Werten entsprechen.",
                nl: "Algoritmische soevereiniteit is het vermogen van landen of gemeenschappen om hun eigen AI-systemen te ontwikkelen en controleren die aansluiten bij hun waarden."
            }
        },
        {
            question: {
                en: "What is AI democratization?",
                es: "¿Qué es la democratización de IA?",
                de: "Was ist KI-Demokratisierung?",
                nl: "Wat is AI-democratisering?"
            },
            options: [
                { en: "Making AI accessible to all", es: "Hacer IA accesible para todos", de: "KI für alle zugänglich machen", nl: "AI toegankelijk maken voor iedereen" },
                { en: "Voting systems", es: "Sistemas de votación", de: "Wahlsysteme", nl: "Stemsystemen" },
                { en: "Democratic AI", es: "IA democrática", de: "Demokratische KI", nl: "Democratische AI" },
                { en: "Political systems", es: "Sistemas políticos", de: "Politische Systeme", nl: "Politieke systemen" }
            ],
            correct: 0,
            explanation: {
                en: "AI democratization aims to make AI technology, knowledge, and benefits accessible to everyone, not just large corporations or wealthy nations.",
                es: "La democratización de IA busca hacer tecnología, conocimiento y beneficios de IA accesibles para todos, no solo grandes corporaciones o naciones ricas.",
                de: "KI-Demokratisierung zielt darauf ab, KI-Technologie, -Wissen und -Vorteile für alle zugänglich zu machen, nicht nur für große Unternehmen oder reiche Nationen.",
                nl: "AI-democratisering streeft ernaar AI-technologie, -kennis en -voordelen toegankelijk te maken voor iedereen, niet alleen grote bedrijven of rijke landen."
            }
        },
        {
            question: {
                en: "What is AI ethics washing?",
                es: "¿Qué es el lavado ético de IA?",
                de: "Was ist KI-Ethikwashing?",
                nl: "Wat is AI-ethiekwashing?"
            },
            options: [
                { en: "False ethical claims", es: "Afirmaciones éticas falsas", de: "Falsche ethische Behauptungen", nl: "Valse ethische claims" },
                { en: "Ethics cleaning", es: "Limpieza ética", de: "Ethische Reinigung", nl: "Ethische reiniging" },
                { en: "Moral improvement", es: "Mejora moral", de: "Moralische Verbesserung", nl: "Morele verbetering" },
                { en: "System purification", es: "Purificación del sistema", de: "Systemreinigung", nl: "Systeem zuivering" }
            ],
            correct: 0,
            explanation: {
                en: "AI ethics washing occurs when organizations make superficial ethical claims about their AI without meaningful implementation or change.",
                es: "El lavado ético de IA ocurre cuando organizaciones hacen afirmaciones éticas superficiales sobre su IA sin implementación o cambio significativo.",
                de: "KI-Ethikwashing tritt auf, wenn Organisationen oberflächliche ethische Behauptungen über ihre KI aufstellen ohne bedeutsame Umsetzung oder Veränderung.",
                nl: "AI-ethiekwashing treedt op wanneer organisaties oppervlakkige ethische claims maken over hun AI zonder betekenisvolle implementatie of verandering."
            }
        },
        {
            question: {
                en: "What is moral deskilling in AI?",
                es: "¿Qué es la descualificación moral en IA?",
                de: "Was ist moralische Dequalifizierung in KI?",
                nl: "Wat is morele deskilling in AI?"
            },
            options: [
                { en: "Loss of ethical judgment skills", es: "Pérdida de habilidades de juicio ético", de: "Verlust ethischer Urteilsfähigkeiten", nl: "Verlies van ethische oordeelsvaardigheden" },
                { en: "Skill reduction", es: "Reducción de habilidades", de: "Kompetenzabbau", nl: "Vaardigheidsvermindering" },
                { en: "Moral decline", es: "Declive moral", de: "Moralischer Verfall", nl: "Moreel verval" },
                { en: "Ethics training", es: "Entrenamiento ético", de: "Ethiktraining", nl: "Ethiektraining" }
            ],
            correct: 0,
            explanation: {
                en: "Moral deskilling occurs when over-reliance on AI for ethical decisions causes humans to lose their ability to make moral judgments.",
                es: "La descualificación moral ocurre cuando la dependencia excesiva en IA para decisiones éticas causa que humanos pierdan su capacidad de hacer juicios morales.",
                de: "Moralische Dequalifizierung tritt auf, wenn übermäßige Abhängigkeit von KI für ethische Entscheidungen dazu führt, dass Menschen ihre Fähigkeit zu moralischen Urteilen verlieren.",
                nl: "Morele deskilling treedt op wanneer overmatig vertrouwen op AI voor ethische beslissingen ervoor zorgt dat mensen hun vermogen tot morele oordelen verliezen."
            }
        },
        {
            question: {
                en: "What is value lock-in?",
                es: "¿Qué es el bloqueo de valores?",
                de: "Was ist Werte-Lock-in?",
                nl: "Wat is waarde lock-in?"
            },
            options: [
                { en: "Embedding fixed values in AI", es: "Incrustar valores fijos en IA", de: "Feste Werte in KI einbetten", nl: "Vaste waarden inbedden in AI" },
                { en: "Security lock", es: "Bloqueo de seguridad", de: "Sicherheitssperre", nl: "Beveiligingsslot" },
                { en: "Value storage", es: "Almacenamiento de valores", de: "Wertespeicherung", nl: "Waarde opslag" },
                { en: "System lock", es: "Bloqueo del sistema", de: "Systemsperre", nl: "Systeem vergrendeling" }
            ],
            correct: 0,
            explanation: {
                en: "Value lock-in occurs when AI systems embed certain values that become difficult to change, potentially perpetuating outdated or biased values.",
                es: "El bloqueo de valores ocurre cuando sistemas de IA incrustan ciertos valores que se vuelven difíciles de cambiar, potencialmente perpetuando valores obsoletos o sesgados.",
                de: "Werte-Lock-in tritt auf, wenn KI-Systeme bestimmte Werte einbetten, die schwer zu ändern sind und möglicherweise veraltete oder verzerrte Werte fortführen.",
                nl: "Waarde lock-in treedt op wanneer AI-systemen bepaalde waarden inbedden die moeilijk te veranderen worden, mogelijk verouderde of bevooroordeelde waarden bestendigend."
            }
        },
        {
            question: {
                en: "What is algorithmic monoculture?",
                es: "¿Qué es el monocultivo algorítmico?",
                de: "Was ist algorithmische Monokultur?",
                nl: "Wat is algoritmische monocultuur?"
            },
            options: [
                { en: "Lack of AI diversity", es: "Falta de diversidad de IA", de: "Mangel an KI-Vielfalt", nl: "Gebrek aan AI-diversiteit" },
                { en: "Single algorithm", es: "Algoritmo único", de: "Einzelner Algorithmus", nl: "Enkel algoritme" },
                { en: "Uniform systems", es: "Sistemas uniformes", de: "Einheitliche Systeme", nl: "Uniforme systemen" },
                { en: "Standard models", es: "Modelos estándar", de: "Standardmodelle", nl: "Standaard modellen" }
            ],
            correct: 0,
            explanation: {
                en: "Algorithmic monoculture refers to widespread use of similar AI models, reducing diversity and increasing systemic risks and biases.",
                es: "El monocultivo algorítmico se refiere al uso generalizado de modelos de IA similares, reduciendo diversidad y aumentando riesgos y sesgos sistémicos.",
                de: "Algorithmische Monokultur bezieht sich auf die weit verbreitete Nutzung ähnlicher KI-Modelle, was Vielfalt reduziert und systemische Risiken und Verzerrungen erhöht.",
                nl: "Algoritmische monocultuur verwijst naar wijdverspreid gebruik van vergelijkbare AI-modellen, wat diversiteit vermindert en systemische risico's en vooroordelen verhoogt."
            }
        },
        {
            question: {
                en: "What is AI paternalism?",
                es: "¿Qué es el paternalismo de IA?",
                de: "Was ist KI-Paternalismus?",
                nl: "Wat is AI-paternalisme?"
            },
            options: [
                { en: "AI making decisions for users", es: "IA tomando decisiones por usuarios", de: "KI trifft Entscheidungen für Nutzer", nl: "AI neemt beslissingen voor gebruikers" },
                { en: "Parental controls", es: "Controles parentales", de: "Elterliche Kontrolle", nl: "Ouderlijk toezicht" },
                { en: "System protection", es: "Protección del sistema", de: "Systemschutz", nl: "Systeembescherming" },
                { en: "User guidance", es: "Orientación del usuario", de: "Benutzerführung", nl: "Gebruikersbegeleiding" }
            ],
            correct: 0,
            explanation: {
                en: "AI paternalism occurs when AI systems make decisions on behalf of users 'for their own good' without consent or override options.",
                es: "El paternalismo de IA ocurre cuando sistemas de IA toman decisiones en nombre de usuarios 'por su propio bien' sin consentimiento u opciones de anulación.",
                de: "KI-Paternalismus tritt auf, wenn KI-Systeme Entscheidungen im Namen von Nutzern 'zu ihrem eigenen Wohl' treffen ohne Zustimmung oder Überschreibungsoptionen.",
                nl: "AI-paternalisme treedt op wanneer AI-systemen beslissingen nemen namens gebruikers 'voor hun eigen bestwil' zonder toestemming of override-opties."
            }
        },
        {
            question: {
                en: "What is technological solutionism in AI?",
                es: "¿Qué es el solucionismo tecnológico en IA?",
                de: "Was ist technologischer Solutionismus in KI?",
                nl: "Wat is technologisch solutionisme in AI?"
            },
            options: [
                { en: "Believing AI solves all problems", es: "Creer que IA resuelve todos los problemas", de: "Glauben, dass KI alle Probleme löst", nl: "Geloven dat AI alle problemen oplost" },
                { en: "Problem solving", es: "Resolución de problemas", de: "Problemlösung", nl: "Probleemoplossing" },
                { en: "Technical solutions", es: "Soluciones técnicas", de: "Technische Lösungen", nl: "Technische oplossingen" },
                { en: "System fixes", es: "Arreglos del sistema", de: "Systemkorrekturen", nl: "Systeemfixes" }
            ],
            correct: 0,
            explanation: {
                en: "Technological solutionism is the belief that AI and technology can solve all social problems, ignoring complex social and political factors.",
                es: "El solucionismo tecnológico es la creencia de que IA y tecnología pueden resolver todos los problemas sociales, ignorando factores sociales y políticos complejos.",
                de: "Technologischer Solutionismus ist der Glaube, dass KI und Technologie alle sozialen Probleme lösen können, wobei komplexe soziale und politische Faktoren ignoriert werden.",
                nl: "Technologisch solutionisme is het geloof dat AI en technologie alle sociale problemen kunnen oplossen, waarbij complexe sociale en politieke factoren worden genegeerd."
            }
        },
        {
            question: {
                en: "What is AI determinism?",
                es: "¿Qué es el determinismo de IA?",
                de: "Was ist KI-Determinismus?",
                nl: "Wat is AI-determinisme?"
            },
            options: [
                { en: "AI development as inevitable", es: "Desarrollo de IA como inevitable", de: "KI-Entwicklung als unvermeidlich", nl: "AI-ontwikkeling als onvermijdelijk" },
                { en: "Predictable outcomes", es: "Resultados predecibles", de: "Vorhersagbare Ergebnisse", nl: "Voorspelbare uitkomsten" },
                { en: "Fixed pathways", es: "Caminos fijos", de: "Feste Wege", nl: "Vaste paden" },
                { en: "Certain results", es: "Resultados ciertos", de: "Sichere Ergebnisse", nl: "Zekere resultaten" }
            ],
            correct: 0,
            explanation: {
                en: "AI determinism is the belief that AI development follows an inevitable path, ignoring human agency in shaping technology's direction.",
                es: "El determinismo de IA es la creencia de que el desarrollo de IA sigue un camino inevitable, ignorando la agencia humana en dar forma a la dirección de la tecnología.",
                de: "KI-Determinismus ist der Glaube, dass die KI-Entwicklung einem unvermeidlichen Pfad folgt und die menschliche Handlungsfähigkeit bei der Gestaltung der Technologierichtung ignoriert.",
                nl: "AI-determinisme is het geloof dat AI-ontwikkeling een onvermijdelijk pad volgt, waarbij menselijke agency in het vormgeven van de technologierichting wordt genegeerd."
            }
        },
        {
            question: {
                en: "What is moral outsourcing to AI?",
                es: "¿Qué es la externalización moral a IA?",
                de: "Was ist moralisches Outsourcing an KI?",
                nl: "Wat is morele uitbesteding aan AI?"
            },
            options: [
                { en: "Delegating ethical decisions to AI", es: "Delegar decisiones éticas a IA", de: "Ethische Entscheidungen an KI delegieren", nl: "Ethische beslissingen delegeren aan AI" },
                { en: "External services", es: "Servicios externos", de: "Externe Dienste", nl: "Externe diensten" },
                { en: "Moral support", es: "Apoyo moral", de: "Moralische Unterstützung", nl: "Morele steun" },
                { en: "Decision making", es: "Toma de decisiones", de: "Entscheidungsfindung", nl: "Besluitvorming" }
            ],
            correct: 0,
            explanation: {
                en: "Moral outsourcing occurs when humans delegate ethical decisions to AI systems, avoiding personal responsibility for moral choices.",
                es: "La externalización moral ocurre cuando humanos delegan decisiones éticas a sistemas de IA, evitando responsabilidad personal por elecciones morales.",
                de: "Moralisches Outsourcing tritt auf, wenn Menschen ethische Entscheidungen an KI-Systeme delegieren und persönliche Verantwortung für moralische Entscheidungen vermeiden.",
                nl: "Morele uitbesteding treedt op wanneer mensen ethische beslissingen delegeren aan AI-systemen, waarbij persoonlijke verantwoordelijkheid voor morele keuzes wordt vermeden."
            }
        },
        {
            question: {
                en: "What is the capability approach in AI ethics?",
                es: "¿Qué es el enfoque de capacidades en ética de IA?",
                de: "Was ist der Befähigungsansatz in KI-Ethik?",
                nl: "Wat is de capability benadering in AI-ethiek?"
            },
            options: [
                { en: "Enhancing human capabilities", es: "Mejorar capacidades humanas", de: "Menschliche Fähigkeiten verbessern", nl: "Menselijke capaciteiten verbeteren" },
                { en: "System capabilities", es: "Capacidades del sistema", de: "Systemfähigkeiten", nl: "Systeemcapaciteiten" },
                { en: "Technical capacity", es: "Capacidad técnica", de: "Technische Kapazität", nl: "Technische capaciteit" },
                { en: "Performance ability", es: "Habilidad de rendimiento", de: "Leistungsfähigkeit", nl: "Prestatievermogen" }
            ],
            correct: 0,
            explanation: {
                en: "The capability approach evaluates AI based on how it enhances or restricts human capabilities and freedoms to live fulfilling lives.",
                es: "El enfoque de capacidades evalúa IA basándose en cómo mejora o restringe capacidades y libertades humanas para vivir vidas plenas.",
                de: "Der Befähigungsansatz bewertet KI danach, wie sie menschliche Fähigkeiten und Freiheiten für ein erfülltes Leben verbessert oder einschränkt.",
                nl: "De capability benadering evalueert AI op basis van hoe het menselijke capaciteiten en vrijheden om een vervullend leven te leiden verbetert of beperkt."
            }
        }
    ]
};