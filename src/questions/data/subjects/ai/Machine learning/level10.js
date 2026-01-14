// Machine Learning Quiz - Level 10: Master-Level ML Theory and Applications
(function() {
  const level10 = {
    name: {
      en: "ML Mastery & Theory",
      es: "Maestría y Teoría en ML",
      de: "ML-Meisterschaft & Theorie",
      nl: "ML Meesterschap & Theorie"
    },
    questions: [
      {
        question: {
          en: "What is the PAC (Probably Approximately Correct) learning framework and what guarantees does it provide?",
          es: "¿Qué es el marco de aprendizaje PAC (Probablemente Aproximadamente Correcto) y qué garantías proporciona?",
          de: "Was ist das PAC (Probably Approximately Correct) Lernframework und welche Garantien bietet es?",
          nl: "Wat is het PAC (Probably Approximately Correct) leerframework en welke garanties biedt het?"
        },
        options: [
          { en: "Mathematical framework providing statistical learning bounds for algorithm performance with high probability", es: "Marco matemático que proporciona límites de aprendizaje estadístico para rendimiento de algoritmos con alta probabilidad", de: "Mathematisches Framework das statistische Lernschranken für Algorithmusleistung mit hoher Wahrscheinlichkeit bietet", nl: "Wiskundig raamwerk dat statistische leergrenzen biedt voor algoritmeprestaties met hoge waarschijnlijkheid" },
          { en: "A framework for packing algorithms correctly", es: "Un marco para empaquetar algoritmos correctamente", de: "Ein Framework zum korrekten Verpacken von Algorithmen", nl: "Een raamwerk voor het correct inpakken van algoritmes" },
          { en: "Probabilistic accuracy checking for models", es: "Verificación probabilística de precisión para modelos", de: "Probabilistische Genauigkeitsprüfung für Modelle", nl: "Probabilistische nauwkeurigheidscontrole voor modellen" },
          { en: "A method for approximating correct predictions", es: "Un método para aproximar predicciones correctas", de: "Eine Methode zur Annäherung korrekter Vorhersagen", nl: "Een methode voor het benaderen van correcte voorspellingen" }
        ],
        correct: 0,
        explanation: {
          en: "PAC learning provides theoretical foundations for machine learning by establishing conditions under which algorithms can learn concepts with bounded error and high confidence, fundamental to computational learning theory.",
          es: "El aprendizaje PAC proporciona fundamentos teóricos para machine learning estableciendo condiciones bajo las cuales algoritmos pueden aprender conceptos con error acotado y alta confianza, fundamental para teoría de aprendizaje computacional.",
          de: "PAC-Lernen bietet theoretische Grundlagen für maschinelles Lernen durch Etablierung von Bedingungen unter denen Algorithmen Konzepte mit begrenztem Fehler und hoher Konfidenz lernen können, fundamental für computationale Lerntheorie.",
          nl: "PAC leren biedt theoretische fundamenten voor machine learning door voorwaarden vast te stellen waaronder algoritmes concepten kunnen leren met begrensde fout en hoge vertrouwen, fundamenteel voor computationele leertheorie."
        }
      },
      {
        question: {
          en: "What is the VC (Vapnik-Chervonenkis) dimension and how does it relate to model complexity and generalization?",
          es: "¿Qué es la dimensión VC (Vapnik-Chervonenkis) y cómo se relaciona con la complejidad del modelo y la generalización?",
          de: "Was ist die VC (Vapnik-Chervonenkis) Dimension und wie hängt sie mit Modellkomplexität und Generalisierung zusammen?",
          nl: "Wat is de VC (Vapnik-Chervonenkis) dimensie en hoe verhoudt het zich tot modelcomplexiteit en generalisatie?"
        },
        options: [
          { en: "Maximum number of points a hypothesis class can shatter, characterizing learning capacity and overfitting risk", es: "Número máximo de puntos que una clase de hipótesis puede fragmentar, caracterizando capacidad de aprendizaje y riesgo de overfitting", de: "Maximale Anzahl von Punkten die eine Hypothesenklasse zerschlagen kann, charakterisiert Lernkapazität und Overfitting-Risiko", nl: "Maximum aantal punten dat een hypotheseklasse kan verbrijzelen, karakteriseert leercapaciteit en overfitting risico" },
          { en: "A measure of variance in model predictions", es: "Una medida de varianza en predicciones del modelo", de: "Ein Maß für Varianz in Modellvorhersagen", nl: "Een maat voor variantie in modelvoorspellingen" },
          { en: "The complexity dimension of neural networks", es: "La dimensión de complejidad de redes neuronales", de: "Die Komplexitätsdimension neuronaler Netzwerke", nl: "De complexiteitsdimensie van neurale netwerken" },
          { en: "A validation criterion for model selection", es: "Un criterio de validación para selección de modelos", de: "Ein Validierungskriterium für Modellauswahl", nl: "Een validatiecriterium voor modelselectie" }
        ],
        correct: 0,
        explanation: {
          en: "VC dimension measures the expressive power of a hypothesis class by determining the largest set of points it can perfectly classify in all possible ways, providing theoretical bounds on generalization error through structural risk minimization.",
          es: "La dimensión VC mide el poder expresivo de una clase de hipótesis determinando el conjunto más grande de puntos que puede clasificar perfectamente en todas las formas posibles, proporcionando límites teóricos en error de generalización a través de minimización de riesgo estructural.",
          de: "VC-Dimension misst die Ausdruckskraft einer Hypothesenklasse durch Bestimmung der größten Punktmenge die sie perfekt in allen möglichen Weisen klassifizieren kann, bietet theoretische Schranken für Generalisierungsfehler durch strukturelle Risikominimierung.",
          nl: "VC dimensie meet de uitdrukkingskracht van een hypotheseklasse door de grootste set punten te bepalen die het perfect kan classificeren op alle mogelijke manieren, biedt theoretische grenzen voor generalisatiefout door structurele risicominimalisatie."
        }
      },
      {
        question: {
          en: "What is the No Free Lunch theorem and what are its implications for machine learning algorithm selection?",
          es: "¿Qué es el teorema No Free Lunch y cuáles son sus implicaciones para la selección de algoritmos de machine learning?",
          de: "Was ist das No Free Lunch Theorem und was sind seine Implikationen für die Auswahl maschineller Lernalgorithmen?",
          nl: "Wat is de No Free Lunch stelling en wat zijn de implicaties ervan voor machine learning algoritme selectie?"
        },
        options: [
          { en: "No algorithm performs better than others across all possible problems, emphasizing the importance of domain-specific algorithm selection", es: "Ningún algoritmo funciona mejor que otros en todos los problemas posibles, enfatizando importancia selección algoritmos específicos dominio", de: "Kein Algorithmus funktioniert besser als andere über alle möglichen Probleme, betont die Wichtigkeit domänenspezifischer Algorithmusauswahl", nl: "Geen algoritme presteert beter dan anderen over alle mogelijke problemen, benadrukt het belang van domeinspecifieke algoritme selectie" },
          { en: "Machine learning algorithms require significant computational resources", es: "Los algoritmos de machine learning requieren recursos computacionales significativos", de: "Maschinelle Lernalgorithmen benötigen erhebliche Rechenressourcen", nl: "Machine learning algoritmes vereisen aanzienlijke computationele middelen" },
          { en: "Free algorithms don't exist in machine learning", es: "Los algoritmos gratuitos no existen en machine learning", de: "Kostenlose Algorithmen existieren nicht im maschinellen Lernen", nl: "Gratis algoritmes bestaan niet in machine learning" },
          { en: "All learning requires labeled training data", es: "Todo aprendizaje requiere datos de entrenamiento etiquetados", de: "Alles Lernen erfordert beschriftete Trainingsdaten", nl: "Al het leren vereist gelabelde trainingsdata" }
        ],
        correct: 0,
        explanation: {
          en: "The No Free Lunch theorem proves that averaged over all possible problems, no learning algorithm is superior to any other, highlighting that algorithm effectiveness depends on problem-specific assumptions and domain knowledge.",
          es: "El teorema No Free Lunch prueba que promediado sobre todos los problemas posibles, ningún algoritmo de aprendizaje es superior a cualquier otro, destacando que la efectividad del algoritmo depende de suposiciones específicas del problema y conocimiento del dominio.",
          de: "Das No Free Lunch Theorem beweist dass über alle möglichen Probleme gemittelt kein Lernalgorithmus einem anderen überlegen ist, hebt hervor dass Algorithmuseffektivität von problemspezifischen Annahmen und Domänenwissen abhängt.",
          nl: "De No Free Lunch stelling bewijst dat gemiddeld over alle mogelijke problemen, geen leeralgoritme superieur is aan een ander, benadrukt dat algoritme-effectiviteit afhangt van probleemspecifieke aannames en domeinkennis."
        }
      },
      {
        question: {
          en: "What is algorithmic information theory and how does it relate to the minimum description length (MDL) principle in model selection?",
          es: "¿Qué es la teoría de información algorítmica y cómo se relaciona con el principio de longitud de descripción mínima (MDL) en selección de modelos?",
          de: "Was ist algorithmische Informationstheorie und wie hängt sie mit dem Minimum Description Length (MDL) Prinzip in der Modellauswahl zusammen?",
          nl: "Wat is algoritmische informatietheorie en hoe verhoudt het zich tot het minimum description length (MDL) principe in modelselectie?"
        },
        options: [
          { en: "Framework using Kolmogorov complexity to balance model fit and complexity by preferring models with shortest total description", es: "Marco usando complejidad Kolmogorov para equilibrar ajuste y complejidad del modelo prefiriendo modelos con descripción total más corta", de: "Framework das Kolmogorov-Komplexität verwendet um Modellanpassung und Komplexität zu balancieren durch Bevorzugung Modellen mit kürzester Beschreibung", nl: "Raamwerk dat Kolmogorov complexiteit gebruikt om modelfit en complexiteit te balanceren door modellen met kortste totale beschrijving te prefereren" },
          { en: "Algorithm for measuring computational complexity", es: "Algoritmo para medir complejidad computacional", de: "Algorithmus zur Messung rechnerischer Komplexität", nl: "Algoritme voor het meten van computationele complexiteit" },
          { en: "Theory about information processing in algorithms", es: "Teoría sobre procesamiento de información en algoritmos", de: "Theorie über Informationsverarbeitung in Algorithmen", nl: "Theorie over informatieverwerking in algoritmes" },
          { en: "Method for describing machine learning algorithms", es: "Método para describir algoritmos de machine learning", de: "Methode zur Beschreibung maschineller Lernalgorithmen", nl: "Methode voor het beschrijven van machine learning algoritmes" }
        ],
        correct: 0,
        explanation: {
          en: "MDL principle, grounded in algorithmic information theory, selects models that minimize the sum of model complexity and data encoding cost, providing a principled approach to the bias-variance tradeoff based on Kolmogorov complexity.",
          es: "El principio MDL, basado en teoría de información algorítmica, selecciona modelos que minimizan la suma de complejidad del modelo y costo de codificación de datos, proporcionando un enfoque con principios para el tradeoff sesgo-varianza basado en complejidad de Kolmogorov.",
          de: "MDL-Prinzip, gegründet auf algorithmischer Informationstheorie, wählt Modelle die die Summe von Modellkomplexität und Datenkodierungskosten minimieren, bietet einen prinzipiellen Ansatz für den Bias-Varianz-Tradeoff basierend auf Kolmogorov-Komplexität.",
          nl: "MDL principe, gebaseerd op algoritmische informatietheorie, selecteert modellen die de som van modelcomplexiteit en data-encoderingskosten minimaliseren, biedt een principiële benadering van de bias-variance tradeoff gebaseerd op Kolmogorov complexiteit."
        }
      },
      {
        question: {
          en: "What are the fundamental theoretical limitations of machine learning and how do computational complexity results inform practical algorithm design?",
          es: "¿Cuáles son las limitaciones teóricas fundamentales del machine learning y cómo informan los resultados de complejidad computacional el diseño práctico de algoritmos?",
          de: "Was sind die fundamentalen theoretischen Limitationen des maschinellen Lernens und wie informieren Rechenkomplexitätsergebnisse das praktische Algorithmusdesign?",
          nl: "Wat zijn de fundamentele theoretische beperkingen van machine learning en hoe informeren computationele complexiteitsresultaten praktisch algoritmeontwerp?"
        },
        options: [
          { en: "NP-hardness of many learning problems necessitates approximation algorithms and heuristics, with sample complexity bounds guiding data requirements", es: "NP-dureza de muchos problemas aprendizaje necesita algoritmos aproximación y heurísticas, con límites complejidad muestra guiando requerimientos datos", de: "NP-Härte vieler Lernprobleme erfordert Approximationsalgorithmen und Heuristiken, mit Stichprobenkomplexitätsbeschränkungen die Datenanforderungen leiten", nl: "NP-hardheid van veel leerproblemen vereist benaderingsalgoritmes en heuristieken, met steekproefcomplexiteitsgrenzen die datavereisten leiden" },
          { en: "Machine learning is fundamentally limited by available data", es: "Machine learning está fundamentalmente limitado por datos disponibles", de: "Maschinelles Lernen ist fundamental durch verfügbare Daten begrenzt", nl: "Machine learning is fundamenteel beperkt door beschikbare data" },
          { en: "All learning problems can be solved with enough computation", es: "Todos los problemas de aprendizaje pueden resolverse con suficiente computación", de: "Alle Lernprobleme können mit genug Berechnung gelöst werden", nl: "Alle leerproblemen kunnen worden opgelost met voldoende berekening" },
          { en: "Theoretical limitations only apply to classical algorithms", es: "Las limitaciones teóricas solo se aplican a algoritmos clásicos", de: "Theoretische Limitationen gelten nur für klassische Algorithmen", nl: "Theoretische beperkingen gelden alleen voor klassieke algoritmes" }
        ],
        correct: 0,
        explanation: {
          en: "Many fundamental ML problems are computationally intractable (NP-hard), requiring practical algorithms to use approximations, while sample complexity theory provides bounds on data requirements for learning, informing when learning is even theoretically possible.",
          es: "Muchos problemas fundamentales de ML son computacionalmente intratables (NP-duros), requiriendo algoritmos prácticos para usar aproximaciones, mientras teoría de complejidad de muestra proporciona límites en requerimientos de datos para aprendizaje, informando cuándo el aprendizaje es teóricamente posible.",
          de: "Viele fundamentale ML-Probleme sind rechnerisch unhandhabbar (NP-hart), erfordern praktische Algorithmen um Approximationen zu verwenden, während Stichprobenkomplexitätstheorie Schranken für Datenanforderungen zum Lernen bietet, informiert wann Lernen theoretisch möglich ist.",
          nl: "Veel fundamentele ML problemen zijn computationeel onhandelbaar (NP-hard), vereisen praktische algoritmes om benaderingen te gebruiken, terwijl steekproefcomplexiteitstheorie grenzen biedt voor datavereisten voor leren, informeert wanneer leren theoretisch mogelijk is."
        }
      },
      {
        question: {
          en: "What is SHAP (SHapley Additive exPlanations) and how does it provide model interpretability?",
          es: "¿Qué es SHAP (SHapley Additive exPlanations) y cómo proporciona interpretabilidad del modelo?",
          de: "Was ist SHAP (SHapley Additive exPlanations) und wie bietet es Modellinterpretierbarkeit?",
          nl: "Wat is SHAP (SHapley Additive exPlanations) en hoe biedt het modelinterpreteerbaarheid?"
        },
        options: [
          { en: "Unified framework using game theory to assign consistent feature importance values that sum to model prediction", es: "Marco unificado usando teoría de juegos para asignar valores consistentes de importancia de características que suman a predicción del modelo", de: "Einheitliches Framework mit Spieltheorie um konsistente Feature-Wichtigkeitswerte zuzuweisen die sich zur Modellvorhersage summieren", nl: "Verenigd framework dat speltheorie gebruikt om consistente feature belangwaarden toe te wijzen die optellen tot modelvoorspelling" },
          { en: "Simple visualization tool for machine learning models", es: "Herramienta de visualización simple para modelos de machine learning", de: "Einfaches Visualisierungstool für maschinelle Lernmodelle", nl: "Eenvoudige visualisatietool voor machine learning modellen" },
          { en: "Statistical hypothesis testing for model validation", es: "Pruebas de hipótesis estadísticas para validación de modelos", de: "Statistische Hypothesentests für Modellvalidierung", nl: "Statistische hypothesetesten voor modelvalidatie" },
          { en: "Automatic hyperparameter optimization technique", es: "Técnica de optimización automática de hiperparámetros", de: "Automatische Hyperparameter-Optimierungstechnik", nl: "Automatische hyperparameter optimalisatietechniek" }
        ],
        correct: 0,
        explanation: {
          en: "SHAP values are based on cooperative game theory and provide a unified approach to explaining model predictions. They satisfy important properties like efficiency (sum to model output), symmetry, and dummy feature properties, making them mathematically sound for interpreting any machine learning model.",
          es: "Valores SHAP se basan en teoría de juegos cooperativos y proporcionan un enfoque unificado para explicar predicciones de modelos. Satisfacen propiedades importantes como eficiencia (suman a salida del modelo), simetría y propiedades de características ficticias, haciéndolos matemáticamente sólidos para interpretar cualquier modelo de machine learning.",
          de: "SHAP-Werte basieren auf kooperativer Spieltheorie und bieten einen einheitlichen Ansatz zur Erklärung von Modellvorhersagen. Sie erfüllen wichtige Eigenschaften wie Effizienz (summieren sich zur Modellausgabe), Symmetrie und Dummy-Feature-Eigenschaften, machen sie mathematisch fundiert für die Interpretation jedes maschinellen Lernmodells.",
          nl: "SHAP waarden zijn gebaseerd op coöperatieve speltheorie en bieden een verenigde benadering voor het verklaren van modelvoorspellingen. Ze voldoen aan belangrijke eigenschappen zoals efficiëntie (sommeren tot modeloutput), symmetrie en dummy feature eigenschappen, maken ze wiskundig solide voor het interpreteren van elk machine learning model."
        }
      },
      {
        question: {
          en: "What is algorithmic bias and what are the main sources of bias in machine learning systems?",
          es: "¿Qué es el sesgo algorítmico y cuáles son las principales fuentes de sesgo en sistemas de machine learning?",
          de: "Was ist algorithmische Verzerrung und was sind die Hauptquellen von Verzerrung in maschinellen Lernsystemen?",
          nl: "Wat is algoritmische bias en wat zijn de belangrijkste bronnen van bias in machine learning systemen?"
        },
        options: [
          { en: "Systematic unfairness from historical data, sampling, labeling, representation, or algorithmic design choices", es: "Injusticia sistemática de datos históricos, muestreo, etiquetado, representación o elecciones de diseño algorítmico", de: "Systematische Ungerechtigkeit aus historischen Daten, Stichprobenziehung, Beschriftung, Repräsentation oder algorithmischen Designentscheidungen", nl: "Systematische oneerlijkheid van historische data, steekproeftrekking, labeling, representatie of algoritmische ontwerpkeuzes" },
          { en: "Technical errors in algorithm implementation", es: "Errores técnicos en implementación de algoritmos", de: "Technische Fehler in Algorithmusimplementierung", nl: "Technische fouten in algoritme implementatie" },
          { en: "Preference for specific machine learning algorithms", es: "Preferencia por algoritmos específicos de machine learning", de: "Präferenz für spezifische maschinelle Lernalgorithmen", nl: "Voorkeur voor specifieke machine learning algoritmes" },
          { en: "Computational limitations affecting model performance", es: "Limitaciones computacionales que afectan rendimiento del modelo", de: "Rechnerische Begrenzungen die Modellleistung beeinträchtigen", nl: "Computationele beperkingen die modelprestaties beïnvloeden" }
        ],
        correct: 0,
        explanation: {
          en: "Algorithmic bias stems from various sources: historical bias in training data reflecting past inequalities, sampling bias from non-representative data, labeling bias from human annotators, representation bias where certain groups are underrepresented, and aggregation bias from treating diverse groups as homogeneous.",
          es: "Sesgo algorítmico proviene de varias fuentes: sesgo histórico en datos de entrenamiento reflejando desigualdades pasadas, sesgo de muestreo de datos no representativos, sesgo de etiquetado de anotadores humanos, sesgo de representación donde ciertos grupos están subrepresentados, y sesgo de agregación de tratar grupos diversos como homogéneos.",
          de: "Algorithmische Verzerrung stammt aus verschiedenen Quellen: historische Verzerrung in Trainingsdaten die vergangene Ungleichheiten widerspiegeln, Stichproben-Verzerrung aus nicht-repräsentativen Daten, Beschriftungs-Verzerrung von menschlichen Annotatoren, Repräsentations-Verzerrung wo bestimmte Gruppen unterrepräsentiert sind, und Aggregations-Verzerrung durch Behandlung diverser Gruppen als homogen.",
          nl: "Algoritmische bias komt voort uit verschillende bronnen: historische bias in trainingsdata die vroegere ongelijkheden weergeeft, steekproef bias van niet-representatieve data, labeling bias van menselijke annotators, representatie bias waar bepaalde groepen ondervertegenwoordigd zijn, en aggregatie bias van het behandelen van diverse groepen als homogeen."
        }
      },
      {
        question: {
          en: "What is MLOps and why is it essential for production machine learning systems?",
          es: "¿Qué es MLOps y por qué es esencial para sistemas de machine learning en producción?",
          de: "Was ist MLOps und warum ist es wesentlich für maschinelle Lernsysteme in der Produktion?",
          nl: "Wat is MLOps en waarom is het essentieel voor productie machine learning systemen?"
        },
        options: [
          { en: "Practices combining ML development and operations for reliable, scalable, and maintainable AI systems in production", es: "Prácticas que combinan desarrollo ML y operaciones para sistemas IA confiables, escalables y mantenibles en producción", de: "Praktiken die ML-Entwicklung und Betrieb für zuverlässige, skalierbare und wartbare KI-Systeme in der Produktion kombinieren", nl: "Praktijken die ML ontwikkeling en operaties combineren voor betrouwbare, schaalbare en onderhoudbare AI systemen in productie" },
          { en: "Operations management for machine learning teams", es: "Gestión de operaciones para equipos de machine learning", de: "Betriebsmanagement für maschinelle Lernteams", nl: "Operationeel management voor machine learning teams" },
          { en: "Marketing and operations for ML products", es: "Marketing y operaciones para productos ML", de: "Marketing und Betrieb für ML-Produkte", nl: "Marketing en operaties voor ML producten" },
          { en: "Mathematical optimization for ML algorithms", es: "Optimización matemática para algoritmos ML", de: "Mathematische Optimierung für ML-Algorithmen", nl: "Wiskundige optimalisatie voor ML algoritmes" }
        ],
        correct: 0,
        explanation: {
          en: "MLOps encompasses the entire ML lifecycle including data versioning, model training automation, continuous integration/deployment, monitoring, and governance. It addresses challenges like model drift, reproducibility, scalability, and compliance essential for reliable production AI systems.",
          es: "MLOps abarca todo el ciclo de vida ML incluyendo versionado de datos, automatización de entrenamiento de modelos, integración/despliegue continuo, monitoreo y gobernanza. Aborda desafíos como deriva del modelo, reproducibilidad, escalabilidad y cumplimiento esencial para sistemas IA de producción confiables.",
          de: "MLOps umfasst den gesamten ML-Lebenszyklus einschließlich Daten-Versionierung, Modelltraining-Automatisierung, kontinuierliche Integration/Bereitstellung, Überwachung und Governance. Es behandelt Herausforderungen wie Modell-Drift, Reproduzierbarkeit, Skalierbarkeit und Compliance wesentlich für zuverlässige Produktions-KI-Systeme.",
          nl: "MLOps omvat de hele ML levenscyclus inclusief dataversioning, modeltraining automatisering, continue integratie/deployment, monitoring en governance. Het pakt uitdagingen aan zoals model drift, reproduceerbaarheid, schaalbaarheid en compliance essentieel voor betrouwbare productie AI systemen."
        }
      },
      {
        question: {
          en: "What is model drift and how can it be detected and mitigated in production systems?",
          es: "¿Qué es la deriva del modelo y cómo puede detectarse y mitigarse en sistemas de producción?",
          de: "Was ist Modell-Drift und wie kann es in Produktionssystemen erkannt und gemildert werden?",
          nl: "Wat is model drift en hoe kan het gedetecteerd en gemitigeerd worden in productiesystemen?"
        },
        options: [
          { en: "Performance degradation due to changes in data distribution, detected through monitoring and mitigated by retraining", es: "Degradación del rendimiento debido a cambios en distribución de datos, detectado a través de monitoreo y mitigado por reentrenamiento", de: "Leistungsverschlechterung aufgrund von Änderungen in Datenverteilung, erkannt durch Überwachung und gemildert durch Neutraining", nl: "Prestatievermindering door veranderingen in dataverdeling, gedetecteerd door monitoring en gemitigeerd door hertraining" },
          { en: "Physical movement of model files in storage systems", es: "Movimiento físico de archivos de modelo en sistemas de almacenamiento", de: "Physische Bewegung von Modelldateien in Speichersystemen", nl: "Fysieke beweging van modelbestanden in opslagsystemen" },
          { en: "Gradual changes in model architecture over time", es: "Cambios graduales en arquitectura del modelo con el tiempo", de: "Graduelle Änderungen in Modellarchitektur über Zeit", nl: "Geleidelijke veranderingen in modelarchitectuur over tijd" },
          { en: "Drift in computational requirements for models", es: "Deriva en requerimientos computacionales para modelos", de: "Drift in rechnerischen Anforderungen für Modelle", nl: "Drift in computationele vereisten voor modellen" }
        ],
        correct: 0,
        explanation: {
          en: "Model drift occurs when the statistical properties of input data or target relationships change over time, causing model performance to degrade. Detection involves monitoring prediction quality, data distributions, and feature statistics. Mitigation includes automated retraining, ensemble methods, and adaptive algorithms.",
          es: "Deriva del modelo ocurre cuando propiedades estadísticas de datos de entrada o relaciones objetivo cambian con el tiempo, causando que rendimiento del modelo se degrade. Detección involucra monitorear calidad de predicción, distribuciones de datos y estadísticas de características. Mitigación incluye reentrenamiento automatizado, métodos de conjunto y algoritmos adaptativos.",
          de: "Modell-Drift tritt auf wenn statistische Eigenschaften von Eingabedaten oder Zielbeziehungen sich über Zeit ändern, verursacht Verschlechterung der Modellleistung. Erkennung beinhaltet Überwachung von Vorhersagequalität, Datenverteilungen und Feature-Statistiken. Milderung umfasst automatisiertes Neutraining, Ensemble-Methoden und adaptive Algorithmen.",
          nl: "Model drift treedt op wanneer statistische eigenschappen van invoerdata of doelrelaties veranderen over tijd, veroorzaakt prestatievermindering van het model. Detectie behelst monitoring van voorspellingskwaliteit, datadistributies en feature statistieken. Mitigatie omvat geautomatiseerde hertraining, ensemble methoden en adaptieve algoritmes."
        }
      },
      {
        question: {
          en: "What is LIME (Local Interpretable Model-agnostic Explanations) and how does it work?",
          es: "¿Qué es LIME (Local Interpretable Model-agnostic Explanations) y cómo funciona?",
          de: "Was ist LIME (Local Interpretable Model-agnostic Explanations) und wie funktioniert es?",
          nl: "Wat is LIME (Local Interpretable Model-agnostic Explanations) en hoe werkt het?"
        },
        options: [
          { en: "Explains individual predictions by approximating complex models locally with simple interpretable models", es: "Explica predicciones individuales aproximando modelos complejos localmente con modelos simples interpretables", de: "Erklärt individuelle Vorhersagen durch lokale Approximation komplexer Modelle mit einfachen interpretierbaren Modellen", nl: "Verklaart individuele voorspellingen door complexe modellen lokaal te benaderen met eenvoudige interpreteerbare modellen" },
          { en: "Lightweight machine learning framework for small datasets", es: "Marco de machine learning ligero para conjuntos de datos pequeños", de: "Leichtgewichtiges maschinelles Lern-Framework für kleine Datensätze", nl: "Lichtgewicht machine learning framework voor kleine datasets" },
          { en: "Linear interpolation method for missing values", es: "Método de interpolación lineal para valores faltantes", de: "Lineare Interpolationsmethode für fehlende Werte", nl: "Lineaire interpolatiemethode voor missende waarden" },
          { en: "Loss function optimization for improved model training", es: "Optimización de función de pérdida para mejor entrenamiento de modelo", de: "Verlustfunktionsoptimierung für verbessertes Modelltraining", nl: "Verliesfunctie optimalisatie voor verbeterde modeltraining" }
        ],
        correct: 0,
        explanation: {
          en: "LIME explains predictions by perturbing input data, observing prediction changes, and fitting a local linear model to approximate the complex model's behavior in the neighborhood of the instance being explained, providing intuitive feature importance for individual predictions.",
          es: "LIME explica predicciones perturbando datos de entrada, observando cambios de predicción y ajustando un modelo lineal local para aproximar el comportamiento del modelo complejo en el vecindario de la instancia siendo explicada, proporcionando importancia de características intuitiva para predicciones individuales.",
          de: "LIME erklärt Vorhersagen durch Störung von Eingabedaten, Beobachtung von Vorhersageänderungen und Anpassung eines lokalen linearen Modells um das Verhalten des komplexen Modells in der Nachbarschaft der zu erklärenden Instanz zu approximieren, bietet intuitive Feature-Wichtigkeit für individuelle Vorhersagen.",
          nl: "LIME verklaart voorspellingen door invoerdata te verstoren, voorspellingsveranderingen te observeren en een lokaal lineair model te fitten om het gedrag van het complexe model in de buurt van de uit te leggen instantie te benaderen, biedt intuïtieve feature belangrijkheid voor individuele voorspellingen."
        }
      },
      {
        question: {
          en: "What is fairness in machine learning and what are different fairness metrics?",
          es: "¿Qué es la equidad en machine learning y cuáles son las diferentes métricas de equidad?",
          de: "Was ist Fairness im maschinellen Lernen und was sind verschiedene Fairness-Metriken?",
          nl: "Wat is eerlijkheid in machine learning en wat zijn verschillende eerlijkheidsmetrieken?"
        },
        options: [
          { en: "Ensuring equal treatment across groups using metrics like demographic parity, equality of opportunity, and equalized odds", es: "Asegurar trato igual entre grupos usando métricas como paridad demográfica, igualdad de oportunidad y probabilidades igualadas", de: "Sicherstellung gleicher Behandlung zwischen Gruppen mit Metriken wie demografische Parität, Chancengleichheit und ausgeglichene Quoten", nl: "Zorgen voor gelijke behandeling tussen groepen met metrieken zoals demografische pariteit, gelijkheid van kansen en gelijke odds" },
          { en: "Equal computational resources for all machine learning models", es: "Recursos computacionales iguales para todos los modelos de machine learning", de: "Gleiche Rechenressourcen für alle maschinellen Lernmodelle", nl: "Gelijke computationele middelen voor alle machine learning modellen" },
          { en: "Fair distribution of training data across algorithms", es: "Distribución justa de datos de entrenamiento entre algoritmos", de: "Faire Verteilung von Trainingsdaten über Algorithmen", nl: "Eerlijke verdeling van trainingsdata over algoritmes" },
          { en: "Balanced accuracy across different validation sets", es: "Precisión balanceada a través de diferentes conjuntos de validación", de: "Ausgewogene Genauigkeit über verschiedene Validierungssätze", nl: "Gebalanceerde nauwkeurigheid over verschillende validatiesets" }
        ],
        correct: 0,
        explanation: {
          en: "ML fairness aims to prevent discrimination against protected groups. Key metrics include demographic parity (equal positive rates), equalized opportunity (equal true positive rates), equalized odds (equal true positive and false positive rates), and individual fairness (similar individuals receive similar outcomes).",
          es: "Equidad ML busca prevenir discriminación contra grupos protegidos. Métricas clave incluyen paridad demográfica (tasas positivas iguales), oportunidad igualada (tasas de verdaderos positivos iguales), probabilidades igualadas (tasas iguales de verdaderos positivos y falsos positivos), y equidad individual (individuos similares reciben resultados similares).",
          de: "ML-Fairness zielt darauf ab Diskriminierung gegen geschützte Gruppen zu verhindern. Schlüsselmetriken umfassen demografische Parität (gleiche positive Raten), ausgeglichene Chancen (gleiche echte positive Raten), ausgeglichene Quoten (gleiche echte positive und falsche positive Raten), und individuelle Fairness (ähnliche Individuen erhalten ähnliche Ergebnisse).",
          nl: "ML eerlijkheid beoogt discriminatie tegen beschermde groepen te voorkomen. Sleutelmetrieken omvatten demografische pariteit (gelijke positieve rates), gelijke kansen (gelijke ware positieve rates), gelijke odds (gelijke ware positieve en valse positieve rates), en individuele eerlijkheid (vergelijkbare individuen krijgen vergelijkbare uitkomsten)."
        }
      },
      {
        question: {
          en: "What is federated learning and what are its advantages for privacy-preserving machine learning?",
          es: "¿Qué es el aprendizaje federado y cuáles son sus ventajas para machine learning que preserva privacidad?",
          de: "Was ist Federated Learning und was sind seine Vorteile für datenschutzwahrendes maschinelles Lernen?",
          nl: "Wat is federated learning en wat zijn de voordelen voor privacy-behoudend machine learning?"
        },
        options: [
          { en: "Trains models across decentralized data without sharing raw data, preserving privacy while enabling collaborative learning", es: "Entrena modelos a través de datos descentralizados sin compartir datos crudos, preservando privacidad mientras habilita aprendizaje colaborativo", de: "Trainiert Modelle über dezentralisierte Daten ohne Rohdaten zu teilen, bewahrt Privatsphäre während kollaboratives Lernen ermöglicht wird", nl: "Traint modellen over gedecentraliseerde data zonder ruwe data te delen, behoudt privacy terwijl collaboratief leren mogelijk wordt" },
          { en: "Federal government regulations for machine learning", es: "Regulaciones del gobierno federal para machine learning", de: "Bundesregulierungen für maschinelles Lernen", nl: "Federale overheidsregulaties voor machine learning" },
          { en: "Learning algorithms developed by federal institutions", es: "Algoritmos de aprendizaje desarrollados por instituciones federales", de: "Lernalgorithmen entwickelt von föderalen Institutionen", nl: "Leeralgoritmes ontwikkeld door federale instellingen" },
          { en: "Federation of multiple machine learning frameworks", es: "Federación de múltiples marcos de machine learning", de: "Föderation mehrerer maschineller Lern-Frameworks", nl: "Federatie van meerdere machine learning frameworks" }
        ],
        correct: 0,
        explanation: {
          en: "Federated learning enables training ML models across distributed devices or organizations without centralizing data. Each participant trains locally and shares only model updates, preserving data privacy while benefiting from collective knowledge, particularly valuable for sensitive domains like healthcare and finance.",
          es: "Aprendizaje federado permite entrenar modelos ML a través de dispositivos u organizaciones distribuidas sin centralizar datos. Cada participante entrena localmente y comparte solo actualizaciones del modelo, preservando privacidad de datos mientras se beneficia del conocimiento colectivo, particularmente valioso para dominios sensibles como salud y finanzas.",
          de: "Federated Learning ermöglicht Training von ML-Modellen über verteilte Geräte oder Organisationen ohne Datenzentralisierung. Jeder Teilnehmer trainiert lokal und teilt nur Modell-Updates, bewahrt Datenprivatsphäre während von kollektivem Wissen profitiert wird, besonders wertvoll für sensible Bereiche wie Gesundheitswesen und Finanzen.",
          nl: "Federated learning maakt training van ML modellen mogelijk over gedistribueerde apparaten of organisaties zonder data te centraliseren. Elke deelnemer traint lokaal en deelt alleen modelupdates, behoudt dataprivacy terwijl geprofiteerd wordt van collectieve kennis, bijzonder waardevol voor gevoelige domeinen zoals gezondheidszorg en financiën."
        }
      },
      {
        question: {
          en: "What is A/B testing in machine learning and how is it used for model evaluation in production?",
          es: "¿Qué son las pruebas A/B en machine learning y cómo se usan para evaluación de modelos en producción?",
          de: "Was ist A/B-Testing im maschinellen Lernen und wie wird es für Modellbewertung in der Produktion verwendet?",
          nl: "Wat is A/B testing in machine learning en hoe wordt het gebruikt voor modelevaluatie in productie?"
        },
        options: [
          { en: "Compares performance of different models by randomly exposing users to variants and measuring business metrics", es: "Compara rendimiento de diferentes modelos exponiendo aleatoriamente usuarios a variantes y midiendo métricas de negocio", de: "Vergleicht Leistung verschiedener Modelle durch zufällige Exposition von Benutzern gegenüber Varianten und Messung von Geschäftsmetriken", nl: "Vergelijkt prestaties van verschillende modellen door willekeurig gebruikers bloot te stellen aan varianten en bedrijfsmetrieken te meten" },
          { en: "Testing models with datasets A and B separately", es: "Probar modelos con conjuntos de datos A y B por separado", de: "Testen von Modellen mit Datensätzen A und B separat", nl: "Testen van modellen met datasets A en B afzonderlijk" },
          { en: "Alternating between two different algorithms", es: "Alternar entre dos algoritmos diferentes", de: "Wechseln zwischen zwei verschiedenen Algorithmen", nl: "Wisselen tussen twee verschillende algoritmes" },
          { en: "Binary classification performance evaluation", es: "Evaluación de rendimiento de clasificación binaria", de: "Binäre Klassifikationsleistungsbewertung", nl: "Binaire classificatie prestatie-evaluatie" }
        ],
        correct: 0,
        explanation: {
          en: "A/B testing for ML involves randomly assigning users to different model versions (A, B, etc.) and measuring real-world impact on business metrics like conversion rates, engagement, or revenue. This provides statistically significant evidence of which model performs better in production conditions.",
          es: "Pruebas A/B para ML involucran asignar aleatoriamente usuarios a diferentes versiones de modelo (A, B, etc.) y medir impacto del mundo real en métricas de negocio como tasas de conversión, compromiso o ingresos. Esto proporciona evidencia estadísticamente significativa de qué modelo funciona mejor en condiciones de producción.",
          de: "A/B-Testing für ML beinhaltet zufällige Zuweisung von Benutzern zu verschiedenen Modellversionen (A, B, etc.) und Messung realer Auswirkungen auf Geschäftsmetriken wie Konversionsraten, Engagement oder Umsatz. Dies liefert statistisch signifikante Evidenz welches Modell unter Produktionsbedingungen besser funktioniert.",
          nl: "A/B testing voor ML behelst willekeurig toewijzen van gebruikers aan verschillende modelversies (A, B, etc.) en meten van echte impact op bedrijfsmetrieken zoals conversieratio's, betrokkenheid of omzet. Dit biedt statistisch significante bewijs van welk model beter presteert onder productieomstandigheden."
        }
      },
      {
        question: {
          en: "What is data lineage and why is it important for machine learning governance?",
          es: "¿Qué es el linaje de datos y por qué es importante para la gobernanza de machine learning?",
          de: "Was ist Datenherkunft und warum ist sie wichtig für maschinelle Lern-Governance?",
          nl: "Wat is data lineage en waarom is het belangrijk voor machine learning governance?"
        },
        options: [
          { en: "Tracks data origin, transformations, and dependencies throughout ML pipeline for reproducibility and compliance", es: "Rastrea origen de datos, transformaciones y dependencias a través del pipeline ML para reproducibilidad y cumplimiento", de: "Verfolgt Datenherkunft, Transformationen und Abhängigkeiten durch ML-Pipeline für Reproduzierbarkeit und Compliance", nl: "Volgt data-origine, transformaties en afhankelijkheden door ML pipeline voor reproduceerbaarheid en compliance" },
          { en: "Genetic lineage of datasets from common sources", es: "Linaje genético de conjuntos de datos de fuentes comunes", de: "Genetische Abstammung von Datensätzen aus gemeinsamen Quellen", nl: "Genetische afstamming van datasets van gemeenschappelijke bronnen" },
          { en: "Linear relationships between data features", es: "Relaciones lineales entre características de datos", de: "Lineare Beziehungen zwischen Datenmerkmalen", nl: "Lineaire relaties tussen datafeatures" },
          { en: "Chronological ordering of data collection", es: "Ordenamiento cronológico de recolección de datos", de: "Chronologische Reihenfolge der Datensammlung", nl: "Chronologische ordening van dataverzameling" }
        ],
        correct: 0,
        explanation: {
          en: "Data lineage provides complete visibility into data flow from source to model predictions, tracking transformations, dependencies, and usage. This is crucial for debugging models, ensuring compliance with regulations, maintaining reproducibility, and understanding impact of data changes on model performance.",
          es: "Linaje de datos proporciona visibilidad completa del flujo de datos desde fuente hasta predicciones del modelo, rastreando transformaciones, dependencias y uso. Esto es crucial para depurar modelos, asegurar cumplimiento con regulaciones, mantener reproducibilidad y entender impacto de cambios de datos en rendimiento del modelo.",
          de: "Datenherkunft bietet vollständige Sichtbarkeit in Datenfluss von Quelle zu Modellvorhersagen, verfolgt Transformationen, Abhängigkeiten und Nutzung. Dies ist entscheidend für Debugging von Modellen, Sicherstellung der Compliance mit Vorschriften, Aufrechterhaltung der Reproduzierbarkeit und Verständnis der Auswirkungen von Datenänderungen auf Modellleistung.",
          nl: "Data lineage biedt volledige zichtbaarheid in dataflow van bron tot modelvoorspellingen, volgt transformaties, afhankelijkheden en gebruik. Dit is cruciaal voor debugging van modellen, zorgen voor compliance met regelgeving, behouden van reproduceerbaarheid en begrijpen van impact van datawijzigingen op modelprestaties."
        }
      },
      {
        question: {
          en: "What is differential privacy and how does it protect individual privacy in machine learning?",
          es: "¿Qué es la privacidad diferencial y cómo protege la privacidad individual en machine learning?",
          de: "Was ist differentielle Privatsphäre und wie schützt sie individuelle Privatsphäre im maschinellen Lernen?",
          nl: "Wat is differential privacy en hoe beschermt het individuele privacy in machine learning?"
        },
        options: [
          { en: "Mathematical framework adding calibrated noise to queries, providing provable privacy guarantees while preserving utility", es: "Marco matemático que agrega ruido calibrado a consultas, proporcionando garantías de privacidad demostrables mientras preserva utilidad", de: "Mathematisches Framework das kalibrierten Rauschen zu Abfragen hinzufügt, bietet beweisbare Privatsphäre-Garantien während Nützlichkeit bewahrt wird", nl: "Wiskundig framework dat gekalibreerde ruis toevoegt aan queries, biedt bewijsbare privacygaranties terwijl nut behouden blijft" },
          { en: "Different privacy settings for different users", es: "Diferentes configuraciones de privacidad para diferentes usuarios", de: "Verschiedene Privatsphäre-Einstellungen für verschiedene Benutzer", nl: "Verschillende privacy-instellingen voor verschillende gebruikers" },
          { en: "Privacy protection through data encryption only", es: "Protección de privacidad solo a través de cifrado de datos", de: "Privatsphärenschutz nur durch Datenverschlüsselung", nl: "Privacybescherming alleen door dataversleuteling" },
          { en: "Difference in privacy levels between training and testing", es: "Diferencia en niveles de privacidad entre entrenamiento y prueba", de: "Unterschied in Privatsphäre-Ebenen zwischen Training und Testing", nl: "Verschil in privacyniveaus tussen training en testing" }
        ],
        correct: 0,
        explanation: {
          en: "Differential privacy provides formal privacy guarantees by adding carefully calibrated noise to data or computations, ensuring that the presence or absence of any individual's data doesn't significantly affect the output. This enables statistical analysis while protecting individual privacy with mathematical rigor.",
          es: "Privacidad diferencial proporciona garantías formales de privacidad agregando ruido cuidadosamente calibrado a datos o computaciones, asegurando que la presencia o ausencia de datos de cualquier individuo no afecte significativamente la salida. Esto permite análisis estadístico mientras protege privacidad individual con rigor matemático.",
          de: "Differentielle Privatsphäre bietet formale Privatsphäre-Garantien durch Hinzufügen sorgfältig kalibrierten Rauschens zu Daten oder Berechnungen, stellt sicher dass die Anwesenheit oder Abwesenheit der Daten eines Individuums die Ausgabe nicht signifikant beeinflusst. Dies ermöglicht statistische Analyse während individuelle Privatsphäre mit mathematischer Strenge geschützt wird.",
          nl: "Differential privacy biedt formele privacygaranties door zorgvuldig gekalibreerde ruis toe te voegen aan data of berekeningen, zorgt ervoor dat de aanwezigheid of afwezigheid van iemands data de output niet significant beïnvloedt. Dit maakt statistische analyse mogelijk terwijl individuele privacy beschermd wordt met wiskundige nauwkeurigheid."
        }
      },
      {
        question: {
          en: "What is model versioning and why is it crucial for machine learning operations?",
          es: "¿Qué es el versionado de modelos y por qué es crucial para operaciones de machine learning?",
          de: "Was ist Modell-Versionierung und warum ist sie entscheidend für maschinelle Lern-Operationen?",
          nl: "Wat is model versioning en waarom is het cruciaal voor machine learning operations?"
        },
        options: [
          { en: "Systematic tracking of model changes, enabling rollbacks, experimentation, and collaborative development", es: "Seguimiento sistemático de cambios de modelo, habilitando reversiones, experimentación y desarrollo colaborativo", de: "Systematische Verfolgung von Modelländerungen, ermöglicht Rollbacks, Experimente und kollaborative Entwicklung", nl: "Systematisch volgen van modelwijzigingen, maakt rollbacks, experimenten en collaboratieve ontwikkeling mogelijk" },
          { en: "Creating different versions for different programming languages", es: "Crear diferentes versiones para diferentes lenguajes de programación", de: "Erstellen verschiedener Versionen für verschiedene Programmiersprachen", nl: "Creëren van verschillende versies voor verschillende programmeertalen" },
          { en: "Version control only for source code, not models", es: "Control de versión solo para código fuente, no modelos", de: "Versionskontrolle nur für Quellcode, nicht Modelle", nl: "Versiecontrole alleen voor broncode, niet modellen" },
          { en: "Numbering models sequentially for organization", es: "Numerar modelos secuencialmente para organización", de: "Modelle sequenziell für Organisation nummerieren", nl: "Modellen sequentieel nummeren voor organisatie" }
        ],
        correct: 0,
        explanation: {
          en: "Model versioning tracks changes to models, data, code, and hyperparameters, enabling reproducibility, collaboration, and safe deployments. It allows teams to experiment with confidence, roll back to previous versions when issues arise, and maintain audit trails for compliance and debugging.",
          es: "Versionado de modelos rastrea cambios a modelos, datos, código e hiperparámetros, habilitando reproducibilidad, colaboración y despliegues seguros. Permite a equipos experimentar con confianza, revertir a versiones anteriores cuando surgen problemas y mantener pistas de auditoría para cumplimiento y depuración.",
          de: "Modell-Versionierung verfolgt Änderungen an Modellen, Daten, Code und Hyperparametern, ermöglicht Reproduzierbarkeit, Zusammenarbeit und sichere Bereitstellungen. Es ermöglicht Teams mit Vertrauen zu experimentieren, zu vorherigen Versionen zurückzukehren wenn Probleme auftreten, und Audit-Trails für Compliance und Debugging zu erhalten.",
          nl: "Model versioning volgt wijzigingen aan modellen, data, code en hyperparameters, maakt reproduceerbaarheid, samenwerking en veilige deployments mogelijk. Het stelt teams in staat om met vertrouwen te experimenteren, terug te keren naar vorige versies wanneer problemen ontstaan, en audit trails te behouden voor compliance en debugging."
        }
      },
      {
        question: {
          en: "What is adversarial machine learning and what are the main types of adversarial attacks?",
          es: "¿Qué es el machine learning adversarial y cuáles son los principales tipos de ataques adversariales?",
          de: "Was ist adversariales maschinelles Lernen und was sind die Haupttypen adversarialer Angriffe?",
          nl: "Wat is adversarial machine learning en wat zijn de hoofdtypen adversariale aanvallen?"
        },
        options: [
          { en: "Study of vulnerabilities in ML models including evasion, poisoning, and model extraction attacks", es: "Estudio de vulnerabilidades en modelos ML incluyendo ataques de evasión, envenenamiento y extracción de modelos", de: "Studie von Schwachstellen in ML-Modellen einschließlich Umgehungs-, Vergiftungs- und Modellextraktionsangriffen", nl: "Studie van kwetsbaarheden in ML modellen inclusief ontwijking, vergiftiging en modelextractie aanvallen" },
          { en: "Competition between different machine learning algorithms", es: "Competencia entre diferentes algoritmos de machine learning", de: "Wettbewerb zwischen verschiedenen maschinellen Lernalgorithmen", nl: "Competitie tussen verschillende machine learning algoritmes" },
          { en: "Training models to be adversarial to human users", es: "Entrenar modelos para ser adversariales a usuarios humanos", de: "Training von Modellen um adversarial zu menschlichen Benutzern zu sein", nl: "Training van modellen om adversarieel te zijn tegen menselijke gebruikers" },
          { en: "Using adversarial optimization for better performance", es: "Usar optimización adversarial para mejor rendimiento", de: "Verwendung adversarialer Optimierung für bessere Leistung", nl: "Gebruik van adversariale optimalisatie voor betere prestaties" }
        ],
        correct: 0,
        explanation: {
          en: "Adversarial ML studies how attackers can manipulate ML systems through evasion attacks (crafted inputs to fool models), poisoning attacks (contaminating training data), model extraction (stealing model functionality), and membership inference (determining if data was used in training).",
          es: "ML adversarial estudia cómo atacantes pueden manipular sistemas ML a través de ataques de evasión (entradas diseñadas para engañar modelos), ataques de envenenamiento (contaminar datos de entrenamiento), extracción de modelos (robar funcionalidad del modelo) e inferencia de membresía (determinar si datos fueron usados en entrenamiento).",
          de: "Adversariales ML studiert wie Angreifer ML-Systeme durch Umgehungsangriffe (gestaltete Eingaben um Modelle zu täuschen), Vergiftungsangriffe (Kontamination von Trainingsdaten), Modellextraktion (Stehlen von Modellfunktionalität) und Mitgliedschaftsinferenz (Bestimmung ob Daten im Training verwendet wurden) manipulieren können.",
          nl: "Adversarial ML bestudeert hoe aanvallers ML systemen kunnen manipuleren door ontwijkingsaanvallen (ontworpen inputs om modellen te misleiden), vergiftigingsaanvallen (contamineren van trainingsdata), modelextractie (stelen van modelfunctionaliteit) en lidmaatschapsinferentie (bepalen of data gebruikt werd in training)."
        }
      },
      {
        question: {
          en: "What is model monitoring and what key metrics should be tracked in production?",
          es: "¿Qué es el monitoreo de modelos y qué métricas clave deben rastrearse en producción?",
          de: "Was ist Modell-Überwachung und welche Schlüsselmetriken sollten in der Produktion verfolgt werden?",
          nl: "Wat is model monitoring en welke sleutelmetrieken moeten gevolgd worden in productie?"
        },
        options: [
          { en: "Continuous tracking of model performance, data quality, prediction distribution, and system health metrics", es: "Seguimiento continuo de rendimiento del modelo, calidad de datos, distribución de predicción y métricas de salud del sistema", de: "Kontinuierliche Verfolgung von Modellleistung, Datenqualität, Vorhersageverteilung und Systemgesundheitsmetriken", nl: "Continue tracking van modelprestaties, datakwaliteit, voorspellingsdistributie en systeemgezondheidsmetrieken" },
          { en: "Monitoring only computational resource usage", es: "Monitorear solo uso de recursos computacionales", de: "Überwachung nur des rechnerischen Ressourcenverbrauchs", nl: "Monitoren van alleen computationeel resourcegebruik" },
          { en: "Tracking model development progress", es: "Rastrear progreso de desarrollo del modelo", de: "Verfolgung des Modellentwicklungsfortschritts", nl: "Volgen van modelontwikkelingsvoortgang" },
          { en: "Monitoring team performance and productivity", es: "Monitorear rendimiento y productividad del equipo", de: "Überwachung von Teamleistung und Produktivität", nl: "Monitoren van teamprestaties en productiviteit" }
        ],
        correct: 0,
        explanation: {
          en: "Model monitoring tracks accuracy/performance metrics, data drift indicators, prediction distributions, latency, throughput, error rates, and business KPIs. This enables early detection of model degradation, data issues, or system problems, allowing for proactive maintenance and optimization.",
          es: "Monitoreo de modelos rastrea métricas de precisión/rendimiento, indicadores de deriva de datos, distribuciones de predicción, latencia, rendimiento, tasas de error y KPIs de negocio. Esto permite detección temprana de degradación del modelo, problemas de datos o del sistema, permitiendo mantenimiento proactivo y optimización.",
          de: "Modell-Überwachung verfolgt Genauigkeits-/Leistungsmetriken, Datendrift-Indikatoren, Vorhersageverteilungen, Latenz, Durchsatz, Fehlerrate und Geschäfts-KPIs. Dies ermöglicht frühe Erkennung von Modellverschlechterung, Datenproblemen oder Systemproblemen, ermöglicht proaktive Wartung und Optimierung.",
          nl: "Model monitoring volgt nauwkeurigheid/prestatiemetrieken, data drift indicatoren, voorspellingsverdelingen, latentie, doorvoer, foutpercentages en business KPIs. Dit maakt vroege detectie mogelijk van modelverschlechtering, dataproblemen of systeemproblemen, maakt proactief onderhoud en optimalisatie mogelijk."
        }
      },
      {
        question: {
          en: "What is explainable AI (XAI) and why is it important for high-stakes applications?",
          es: "¿Qué es la IA explicable (XAI) y por qué es importante para aplicaciones de alto riesgo?",
          de: "Was ist erklärbare KI (XAI) und warum ist sie wichtig für risikoreiche Anwendungen?",
          nl: "Wat is verklaarbare AI (XAI) en waarom is het belangrijk voor high-stakes applicaties?"
        },
        options: [
          { en: "Methods to make AI decisions transparent and interpretable for trust, accountability, and regulatory compliance", es: "Métodos para hacer decisiones IA transparentes e interpretables para confianza, responsabilidad y cumplimiento regulatorio", de: "Methoden um KI-Entscheidungen transparent und interpretierbar für Vertrauen, Verantwortlichkeit und regulatorische Compliance zu machen", nl: "Methoden om AI beslissingen transparant en interpreteerbaar te maken voor vertrouwen, verantwoordelijkheid en regulatoire compliance" },
          { en: "AI systems that can explain other AI systems automatically", es: "Sistemas IA que pueden explicar otros sistemas IA automáticamente", de: "KI-Systeme die andere KI-Systeme automatisch erklären können", nl: "AI systemen die andere AI systemen automatisch kunnen uitleggen" },
          { en: "Expert AI systems for specific domains only", es: "Sistemas IA expertos solo para dominios específicos", de: "Experten-KI-Systeme nur für spezifische Bereiche", nl: "Expert AI systemen alleen voor specifieke domeinen" },
          { en: "AI that provides detailed technical documentation", es: "IA que proporciona documentación técnica detallada", de: "KI die detaillierte technische Dokumentation bereitstellt", nl: "AI die gedetailleerde technische documentatie biedt" }
        ],
        correct: 0,
        explanation: {
          en: "XAI is crucial for high-stakes domains like healthcare, finance, and criminal justice where decisions affect lives. It provides interpretable explanations for AI decisions, enabling users to understand, trust, verify, and debug models while meeting regulatory requirements for algorithmic transparency.",
          es: "XAI es crucial para dominios de alto riesgo como salud, finanzas y justicia criminal donde decisiones afectan vidas. Proporciona explicaciones interpretables para decisiones IA, permitiendo a usuarios entender, confiar, verificar y depurar modelos mientras cumple requerimientos regulatorios para transparencia algorítmica.",
          de: "XAI ist entscheidend für risikoreiche Bereiche wie Gesundheitswesen, Finanzen und Strafjustiz wo Entscheidungen Leben beeinflussen. Es bietet interpretierbare Erklärungen für KI-Entscheidungen, ermöglicht Benutzern Modelle zu verstehen, vertrauen, verifizieren und debuggen während regulatorische Anforderungen für algorithmische Transparenz erfüllt werden.",
          nl: "XAI is cruciaal voor high-stakes domeinen zoals gezondheidszorg, financiën en strafrecht waar beslissingen levens beïnvloeden. Het biedt interpreteerbare uitleg voor AI beslissingen, stelt gebruikers in staat om modellen te begrijpen, vertrouwen, verifiëren en debuggen terwijl het voldoet aan regulatoire vereisten voor algoritmische transparantie."
        }
      },
      {
        question: {
          en: "What is edge AI and what are the challenges of deploying machine learning models on edge devices?",
          es: "¿Qué es la IA de borde y cuáles son los desafíos de desplegar modelos de machine learning en dispositivos de borde?",
          de: "Was ist Edge-KI und was sind die Herausforderungen bei der Bereitstellung von maschinellen Lernmodellen auf Edge-Geräten?",
          nl: "Wat is edge AI en wat zijn de uitdagingen van het deployen van machine learning modellen op edge apparaten?"
        },
        options: [
          { en: "AI inference on local devices with constraints of limited compute, memory, power, and connectivity requirements", es: "Inferencia IA en dispositivos locales con restricciones de computación limitada, memoria, energía y requerimientos de conectividad", de: "KI-Inferenz auf lokalen Geräten mit Beschränkungen begrenzter Berechnung, Speicher, Energie und Konnektivitätsanforderungen", nl: "AI inferentie op lokale apparaten met beperkingen van beperkte compute, geheugen, stroom en connectiviteitsvereisten" },
          { en: "AI systems deployed only at network edges", es: "Sistemas IA desplegados solo en bordes de red", de: "KI-Systeme nur an Netzwerkrändern eingesetzt", nl: "AI systemen alleen gedeployed aan netwerk edges" },
          { en: "Cutting-edge AI research and development", es: "Investigación y desarrollo IA de vanguardia", de: "Hochmoderne KI-Forschung und -Entwicklung", nl: "Geavanceerd AI onderzoek en ontwikkeling" },
          { en: "AI for image edge detection algorithms", es: "IA para algoritmos de detección de bordes de imagen", de: "KI für Bildkanten-Erkennungsalgorithmen", nl: "AI voor beeldrand detectie-algoritmes" }
        ],
        correct: 0,
        explanation: {
          en: "Edge AI enables real-time inference on devices like smartphones, IoT sensors, and autonomous vehicles. Key challenges include model compression, quantization, hardware optimization, power efficiency, and maintaining accuracy with limited resources while ensuring privacy and reducing latency.",
          es: "IA de borde habilita inferencia en tiempo real en dispositivos como smartphones, sensores IoT y vehículos autónomos. Desafíos clave incluyen compresión de modelo, cuantización, optimización de hardware, eficiencia energética y mantener precisión con recursos limitados mientras asegura privacidad y reduce latencia.",
          de: "Edge-KI ermöglicht Echtzeit-Inferenz auf Geräten wie Smartphones, IoT-Sensoren und autonomen Fahrzeugen. Hauptherausforderungen umfassen Modellkompression, Quantisierung, Hardware-Optimierung, Energieeffizienz und Genauigkeitserhaltung mit begrenzten Ressourcen während Privatsphäre gewährleistet und Latenz reduziert wird.",
          nl: "Edge AI maakt real-time inferentie mogelijk op apparaten zoals smartphones, IoT sensoren en autonome voertuigen. Belangrijke uitdagingen omvatten modelcompressie, kwantisatie, hardware optimalisatie, energie-efficiëntie en nauwkeurigheid behouden met beperkte middelen terwijl privacy gewaarborgd en latentie verminderd wordt."
        }
      },
      {
        question: {
          en: "What is catastrophic forgetting in neural networks and how can continual learning address it?",
          es: "¿Qué es el olvido catastrófico en redes neuronales y cómo puede el aprendizaje continuo abordarlo?",
          de: "Was ist katastrophales Vergessen in neuronalen Netzwerken und wie kann kontinuierliches Lernen es angehen?",
          nl: "Wat is catastrophic forgetting in neurale netwerken en hoe kan continual learning het aanpakken?"
        },
        options: [
          { en: "Abrupt performance loss on old tasks when learning new ones, mitigated by elastic weight consolidation, replay buffers, or progressive nets", es: "Pérdida abrupta de rendimiento en tareas antiguas al aprender nuevas, mitigado por consolidación elástica de pesos, buffers de repetición o redes progresivas", de: "Abrupter Leistungsverlust bei alten Aufgaben beim Lernen neuer, gemildert durch elastische Gewichtskonsolidierung, Replay-Puffer oder progressive Netze", nl: "Abrupt prestatieverlies op oude taken bij het leren van nieuwe, gemitigeerd door elastische gewichtsconsolidatie, replay buffers of progressieve netten" },
          { en: "Complete memory loss requiring full retraining", es: "Pérdida completa de memoria requiriendo reentrenamiento completo", de: "Vollständiger Gedächtnisverlust erfordert vollständiges Neutraining", nl: "Volledig geheugenverlies vereist volledige hertraining" },
          { en: "Forgetting only catastrophic failure cases", es: "Olvidar solo casos de fallo catastrófico", de: "Vergessen nur katastrophaler Fehlerfälle", nl: "Vergeten van alleen catastrofale faalgevallen" },
          { en: "Gradual decay of neural network weights", es: "Decaimiento gradual de pesos de red neuronal", de: "Gradueller Zerfall neuronaler Netzwerkgewichte", nl: "Geleidelijk verval van neurale netwerkgewichten" }
        ],
        correct: 0,
        explanation: {
          en: "Catastrophic forgetting occurs when neural networks trained on sequential tasks lose performance on earlier tasks upon learning new ones. Solutions include elastic weight consolidation (protecting important weights), experience replay (rehearsing old data), progressive neural networks (adding capacity for new tasks), and knowledge distillation (preserving old task representations).",
          es: "Olvido catastrófico ocurre cuando redes neuronales entrenadas en tareas secuenciales pierden rendimiento en tareas anteriores al aprender nuevas. Soluciones incluyen consolidación elástica de pesos (proteger pesos importantes), repetición de experiencia (ensayar datos antiguos), redes neuronales progresivas (agregar capacidad para nuevas tareas) y destilación de conocimiento (preservar representaciones de tareas antiguas).",
          de: "Katastrophales Vergessen tritt auf wenn neuronale Netzwerke die auf sequenziellen Aufgaben trainiert wurden Leistung bei früheren Aufgaben verlieren beim Lernen neuer. Lösungen umfassen elastische Gewichtskonsolidierung (Schutz wichtiger Gewichte), Erfahrungswiederholung (Probe alter Daten), progressive neuronale Netzwerke (Hinzufügen von Kapazität für neue Aufgaben) und Knowledge Distillation (Bewahren alter Aufgabenrepräsentationen).",
          nl: "Catastrophic forgetting treedt op wanneer neurale netwerken getraind op sequentiële taken prestaties verliezen op eerdere taken bij het leren van nieuwe. Oplossingen omvatten elastische gewichtsconsolidatie (beschermen van belangrijke gewichten), ervaring replay (herhalen van oude data), progressieve neurale netwerken (toevoegen van capaciteit voor nieuwe taken) en knowledge distillation (behouden van oude taak representaties)."
        }
      },
      {
        question: {
          en: "What is neural network pruning at initialization and what does the lottery ticket hypothesis suggest?",
          es: "¿Qué es la poda de redes neuronales en inicialización y qué sugiere la hipótesis del boleto de lotería?",
          de: "Was ist neuronales Netzwerk-Pruning bei Initialisierung und was schlägt die Lottery Ticket Hypothesis vor?",
          nl: "Wat is neural network pruning bij initialisatie en wat suggereert de lottery ticket hypothesis?"
        },
        options: [
          { en: "Dense networks contain sparse subnetworks that can match full network performance when trained from their original initialization", es: "Redes densas contienen subredes dispersas que pueden igualar rendimiento de red completa cuando se entrenan desde su inicialización original", de: "Dichte Netzwerke enthalten spärliche Teilnetzwerke die volle Netzwerkleistung erreichen können wenn von ihrer ursprünglichen Initialisierung trainiert", nl: "Dichte netwerken bevatten dunne subnetwerken die volledige netwerkprestaties kunnen evenaren wanneer getraind vanaf hun originele initialisatie" },
          { en: "Random pruning always produces better networks", es: "Poda aleatoria siempre produce mejores redes", de: "Zufälliges Pruning produziert immer bessere Netzwerke", nl: "Willekeurige pruning produceert altijd betere netwerken" },
          { en: "Pruning at initialization is impossible", es: "Poda en inicialización es imposible", de: "Pruning bei Initialisierung ist unmöglich", nl: "Pruning bij initialisatie is onmogelijk" },
          { en: "Only large networks benefit from pruning", es: "Solo redes grandes se benefician de poda", de: "Nur große Netzwerke profitieren von Pruning", nl: "Alleen grote netwerken profiteren van pruning" }
        ],
        correct: 0,
        explanation: {
          en: "The lottery ticket hypothesis states that randomly initialized dense networks contain sparse subnetworks (winning tickets) that, when isolated and trained from their original initialization, can achieve comparable accuracy to the full network. This challenges conventional wisdom about over-parameterization and suggests successful training may depend on finding favorable initializations rather than network size alone.",
          es: "Hipótesis del boleto de lotería establece que redes densas inicializadas aleatoriamente contienen subredes dispersas (boletos ganadores) que, cuando se aíslan y entrenan desde su inicialización original, pueden lograr precisión comparable a la red completa. Esto desafía sabiduría convencional sobre sobre-parametrización y sugiere que entrenamiento exitoso puede depender de encontrar inicializaciones favorables en lugar de solo tamaño de red.",
          de: "Die Lottery Ticket Hypothesis besagt dass zufällig initialisierte dichte Netzwerke spärliche Teilnetzwerke (Gewinntickets) enthalten die, wenn isoliert und von ihrer ursprünglichen Initialisierung trainiert, vergleichbare Genauigkeit zur vollen Netzwerk erreichen können. Dies stellt konventionelle Weisheit über Über-Parametrisierung in Frage und schlägt vor dass erfolgreiches Training vom Finden günstiger Initialisierungen abhängen kann statt nur Netzwerkgröße.",
          nl: "De lottery ticket hypothesis stelt dat willekeurig geïnitialiseerde dichte netwerken dunne subnetwerken (winnende tickets) bevatten die, wanneer geïsoleerd en getraind vanaf hun originele initialisatie, vergelijkbare nauwkeurigheid kunnen bereiken als het volledige netwerk. Dit daagt conventionele wijsheid over over-parametrisatie uit en suggereert dat succesvol trainen kan afhangen van het vinden van gunstige initialisaties in plaats van alleen netwerkgrootte."
        }
      },
      {
        question: {
          en: "What is neural tangent kernel (NTK) theory and what insights does it provide about infinite-width neural networks?",
          es: "¿Qué es la teoría del kernel tangente neuronal (NTK) y qué perspectivas proporciona sobre redes neuronales de ancho infinito?",
          de: "Was ist Neural Tangent Kernel (NTK) Theorie und welche Einblicke bietet sie über unendlich-breite neuronale Netzwerke?",
          nl: "Wat is neural tangent kernel (NTK) theorie en welke inzichten biedt het over oneindig-brede neurale netwerken?"
        },
        options: [
          { en: "Framework showing infinite-width networks behave as kernel methods with fixed features during gradient descent", es: "Marco mostrando redes de ancho infinito se comportan como métodos de kernel con características fijas durante descenso de gradiente", de: "Framework zeigt dass unendlich-breite Netzwerke sich wie Kernel-Methoden mit festen Features während Gradientenabstieg verhalten", nl: "Framework toont dat oneindig-brede netwerken zich gedragen als kernel methoden met vaste features tijdens gradient descent" },
          { en: "Kernel trick applied to neural network architectures", es: "Truco de kernel aplicado a arquitecturas de redes neuronales", de: "Kernel-Trick angewendet auf neuronale Netzwerkarchitekturen", nl: "Kernel truc toegepast op neurale netwerkarchitecturen" },
          { en: "Tangent space optimization for neural networks", es: "Optimización de espacio tangente para redes neuronales", de: "Tangentialraum-Optimierung für neuronale Netzwerke", nl: "Tangent space optimalisatie voor neurale netwerken" },
          { en: "Network topology analysis using kernel functions", es: "Análisis de topología de red usando funciones de kernel", de: "Netzwerk-Topologie-Analyse mit Kernel-Funktionen", nl: "Netwerktopologie analyse met kernel functies" }
        ],
        correct: 0,
        explanation: {
          en: "NTK theory reveals that in the infinite-width limit, neural networks trained with gradient descent behave like kernel regression with a deterministic kernel that remains constant during training (lazy regime). This provides theoretical understanding of why overparameterized networks generalize well, connects neural networks to classical kernel methods, and explains phenomena like double descent.",
          es: "Teoría NTK revela que en el límite de ancho infinito, redes neuronales entrenadas con descenso de gradiente se comportan como regresión de kernel con un kernel determinista que permanece constante durante entrenamiento (régimen perezoso). Esto proporciona comprensión teórica de por qué redes sobreparametrizadas generalizan bien, conecta redes neuronales a métodos de kernel clásicos y explica fenómenos como descenso doble.",
          de: "NTK-Theorie offenbart dass im unendlich-breiten Limit neuronale Netzwerke die mit Gradientenabstieg trainiert wurden sich wie Kernel-Regression mit einem deterministischen Kernel verhalten der während Training konstant bleibt (lazy regime). Dies bietet theoretisches Verständnis warum überparametrisierte Netzwerke gut generalisieren, verbindet neuronale Netzwerke mit klassischen Kernel-Methoden und erklärt Phänomene wie doppelten Abstieg.",
          nl: "NTK theorie onthult dat in de oneindig-brede limiet, neurale netwerken getraind met gradient descent zich gedragen als kernel regressie met een deterministische kernel die constant blijft tijdens training (lazy regime). Dit biedt theoretisch begrip van waarom overparameterized netwerken goed generaliseren, verbindt neurale netwerken met klassieke kernel methoden en verklaart fenomenen zoals double descent."
        }
      },
      {
        question: {
          en: "What is the double descent phenomenon and how does it challenge traditional bias-variance tradeoff understanding?",
          es: "¿Qué es el fenómeno de descenso doble y cómo desafía la comprensión tradicional del tradeoff sesgo-varianza?",
          de: "Was ist das Double Descent Phänomen und wie stellt es das traditionelle Verständnis des Bias-Varianz-Tradeoffs in Frage?",
          nl: "Wat is het double descent fenomeen en hoe daagt het traditioneel begrip van bias-variance tradeoff uit?"
        },
        options: [
          { en: "Test error decreases, rises at interpolation threshold, then decreases again as model capacity increases beyond perfect training fit", es: "Error de prueba disminuye, aumenta en umbral de interpolación, luego disminuye nuevamente a medida que capacidad del modelo aumenta más allá de ajuste de entrenamiento perfecto", de: "Testfehler sinkt, steigt an Interpolationsschwelle, sinkt dann wieder wenn Modellkapazität über perfekten Trainingsfit hinaus steigt", nl: "Testfout daalt, stijgt bij interpolatiedrempel, daalt dan weer naarmate modelcapaciteit toeneemt voorbij perfecte training fit" },
          { en: "Two-phase descent in gradient optimization", es: "Descenso de dos fases en optimización de gradiente", de: "Zweiphasiger Abstieg in Gradientenoptimierung", nl: "Twee-fase descent in gradient optimalisatie" },
          { en: "Double the learning rate for faster descent", es: "Duplicar tasa de aprendizaje para descenso más rápido", de: "Verdoppeln der Lernrate für schnelleren Abstieg", nl: "Verdubbelen van learning rate voor snellere descent" },
          { en: "Loss descending twice during single epoch", es: "Pérdida descendiendo dos veces durante época única", de: "Verlust sinkt zweimal während einzelner Epoche", nl: "Verlies daalt twee keer tijdens enkele epoch" }
        ],
        correct: 0,
        explanation: {
          en: "Double descent challenges the classical U-shaped bias-variance curve by showing test error can improve again after the interpolation threshold where models perfectly fit training data. In the overparameterized regime, increasing capacity leads to smoother interpolating functions with better generalization, explaining the success of modern deep learning's massive overparameterization.",
          es: "Descenso doble desafía la curva clásica en U de sesgo-varianza mostrando que error de prueba puede mejorar nuevamente después del umbral de interpolación donde modelos ajustan perfectamente datos de entrenamiento. En régimen sobreparametrizado, aumentar capacidad lleva a funciones de interpolación más suaves con mejor generalización, explicando el éxito de sobreparametrización masiva del deep learning moderno.",
          de: "Double Descent stellt die klassische U-förmige Bias-Varianz-Kurve in Frage durch Zeigen dass Testfehler wieder verbessern kann nach der Interpolationsschwelle wo Modelle Trainingsdaten perfekt fitten. Im überparametrisierten Regime führt steigende Kapazität zu glatteren interpolierenden Funktionen mit besserer Generalisierung, erklärt den Erfolg massiver Überparametrisierung des modernen Deep Learning.",
          nl: "Double descent daagt de klassieke U-vormige bias-variance curve uit door te tonen dat testfout opnieuw kan verbeteren na de interpolatiedrempel waar modellen trainingsdata perfect fitten. In het overparameterized regime leidt toenemende capaciteit tot gladdere interpolerende functies met betere generalisatie, verklaart het succes van moderne deep learning's massale overparametrization."
        }
      },
      {
        question: {
          en: "What is meta-learning and how do gradient-based meta-learning approaches like MAML work?",
          es: "¿Qué es meta-aprendizaje y cómo funcionan enfoques de meta-aprendizaje basados en gradiente como MAML?",
          de: "Was ist Meta-Learning und wie funktionieren gradientenbasierte Meta-Learning-Ansätze wie MAML?",
          nl: "Wat is meta-learning en hoe werken gradiënt-gebaseerde meta-learning benaderingen zoals MAML?"
        },
        options: [
          { en: "Learning how to learn by optimizing for rapid adaptation to new tasks through second-order gradients across tasks", es: "Aprender cómo aprender optimizando para adaptación rápida a nuevas tareas a través de gradientes de segundo orden a través de tareas", de: "Lernen wie man lernt durch Optimierung für schnelle Anpassung an neue Aufgaben durch Gradienten zweiter Ordnung über Aufgaben", nl: "Leren hoe te leren door te optimaliseren voor snelle aanpassing aan nieuwe taken door tweede-orde gradiënten over taken" },
          { en: "Meta-analysis of learning algorithm performance", es: "Meta-análisis de rendimiento de algoritmos de aprendizaje", de: "Meta-Analyse von Lernalgorithmus-Leistung", nl: "Meta-analyse van leeralgoritme prestaties" },
          { en: "Learning about metadata in training datasets", es: "Aprender sobre metadatos en conjuntos de datos de entrenamiento", de: "Lernen über Metadaten in Trainingsdatensätzen", nl: "Leren over metadata in trainingsdatasets" },
          { en: "Hierarchical learning with meta-layers", es: "Aprendizaje jerárquico con meta-capas", de: "Hierarchisches Lernen mit Meta-Schichten", nl: "Hiërarchisch leren met meta-lagen" }
        ],
        correct: 0,
        explanation: {
          en: "MAML (Model-Agnostic Meta-Learning) learns an initialization that enables rapid adaptation to new tasks with few gradient steps. It optimizes parameters across a distribution of tasks by computing gradients through the adaptation process itself (second-order gradients), finding a starting point from which models can quickly specialize to new tasks with minimal data.",
          es: "MAML (Model-Agnostic Meta-Learning) aprende una inicialización que habilita adaptación rápida a nuevas tareas con pocos pasos de gradiente. Optimiza parámetros a través de una distribución de tareas computando gradientes a través del proceso de adaptación mismo (gradientes de segundo orden), encontrando un punto de partida desde el cual modelos pueden especializarse rápidamente a nuevas tareas con datos mínimos.",
          de: "MAML (Model-Agnostic Meta-Learning) lernt eine Initialisierung die schnelle Anpassung an neue Aufgaben mit wenigen Gradientenschritten ermöglicht. Es optimiert Parameter über eine Verteilung von Aufgaben durch Berechnung von Gradienten durch den Anpassungsprozess selbst (Gradienten zweiter Ordnung), findet einen Ausgangspunkt von dem Modelle sich schnell auf neue Aufgaben mit minimalen Daten spezialisieren können.",
          nl: "MAML (Model-Agnostic Meta-Learning) leert een initialisatie die snelle aanpassing aan nieuwe taken mogelijk maakt met weinig gradient stappen. Het optimaliseert parameters over een distributie van taken door gradiënten te berekenen door het aanpassingsproces zelf (tweede-orde gradiënten), vindt een startpunt van waaruit modellen zich snel kunnen specialiseren naar nieuwe taken met minimale data."
        }
      },
      {
        question: {
          en: "What is the role of attention mechanisms in modern deep learning and how do transformers utilize self-attention?",
          es: "¿Cuál es el papel de los mecanismos de atención en deep learning moderno y cómo utilizan transformers la auto-atención?",
          de: "Was ist die Rolle von Aufmerksamkeitsmechanismen im modernen Deep Learning und wie nutzen Transformer Self-Attention?",
          nl: "Wat is de rol van attention mechanismen in moderne deep learning en hoe gebruiken transformers self-attention?"
        },
        options: [
          { en: "Enables models to dynamically weight input elements, with self-attention computing relationships between all positions in parallel", es: "Permite a modelos ponderar dinámicamente elementos de entrada, con auto-atención computando relaciones entre todas las posiciones en paralelo", de: "Ermöglicht Modellen Eingabeelemente dynamisch zu gewichten, mit Self-Attention Berechnung von Beziehungen zwischen allen Positionen parallel", nl: "Stelt modellen in staat om invoerelementen dynamisch te wegen, met self-attention berekening van relaties tussen alle posities parallel" },
          { en: "Makes neural networks pay attention during training", es: "Hace que redes neuronales presten atención durante entrenamiento", de: "Bringt neuronale Netzwerke dazu während Training aufzupassen", nl: "Zorgt ervoor dat neurale netwerken aandacht besteden tijdens training" },
          { en: "Attention only to important features", es: "Atención solo a características importantes", de: "Aufmerksamkeit nur auf wichtige Features", nl: "Aandacht alleen voor belangrijke features" },
          { en: "Sequential processing with attention weights", es: "Procesamiento secuencial con pesos de atención", de: "Sequenzielle Verarbeitung mit Aufmerksamkeitsgewichten", nl: "Sequentiële verwerking met attention gewichten" }
        ],
        correct: 0,
        explanation: {
          en: "Self-attention in transformers computes relationships between all positions in a sequence simultaneously using query, key, and value projections. Unlike recurrent networks' sequential processing, transformers process all positions in parallel, enabling efficient capture of long-range dependencies. This architecture revolutionized NLP and is now successful in vision, speech, and multimodal learning.",
          es: "Auto-atención en transformers computa relaciones entre todas las posiciones en una secuencia simultáneamente usando proyecciones de consulta, clave y valor. A diferencia del procesamiento secuencial de redes recurrentes, transformers procesan todas las posiciones en paralelo, permitiendo captura eficiente de dependencias de largo alcance. Esta arquitectura revolucionó NLP y ahora tiene éxito en visión, habla y aprendizaje multimodal.",
          de: "Self-Attention in Transformern berechnet Beziehungen zwischen allen Positionen in einer Sequenz gleichzeitig mit Query-, Key- und Value-Projektionen. Im Gegensatz zu sequenzieller Verarbeitung rekurrenter Netzwerke verarbeiten Transformer alle Positionen parallel, ermöglicht effiziente Erfassung weitreichender Abhängigkeiten. Diese Architektur revolutionierte NLP und ist jetzt erfolgreich in Vision, Sprache und multimodalem Lernen.",
          nl: "Self-attention in transformers berekent relaties tussen alle posities in een sequentie gelijktijdig met query, key en value projecties. In tegenstelling tot sequentiële verwerking van recurrente netwerken, verwerken transformers alle posities parallel, maakt efficiënte vastlegging van lange-afstand afhankelijkheden mogelijk. Deze architectuur revolutioneerde NLP en is nu succesvol in vision, spraak en multi-modaal leren."
        }
      },
      {
        question: {
          en: "What is model distillation in the context of large language models and how does it enable efficient deployment?",
          es: "¿Qué es la destilación de modelos en el contexto de grandes modelos de lenguaje y cómo habilita despliegue eficiente?",
          de: "Was ist Modelldestillation im Kontext großer Sprachmodelle und wie ermöglicht es effiziente Bereitstellung?",
          nl: "Wat is model distillation in de context van grote taalmodellen en hoe maakt het efficiënte deployment mogelijk?"
        },
        options: [
          { en: "Trains smaller student models to mimic larger teacher models' soft predictions, compressing knowledge while maintaining performance", es: "Entrena modelos estudiante más pequeños para imitar predicciones suaves de modelos maestro más grandes, comprimiendo conocimiento mientras mantiene rendimiento", de: "Trainiert kleinere Schüler-Modelle um weiche Vorhersagen größerer Lehrer-Modelle nachzuahmen, komprimiert Wissen während Leistung erhalten bleibt", nl: "Traint kleinere student modellen om zachte voorspellingen van grotere leraar modellen na te bootsen, comprimeert kennis terwijl prestaties behouden blijven" },
          { en: "Distills essential features from training data", es: "Destila características esenciales de datos de entrenamiento", de: "Destilliert wesentliche Features aus Trainingsdaten", nl: "Destilleert essentiële features uit trainingsdata" },
          { en: "Purifies language models by removing noise", es: "Purifica modelos de lenguaje eliminando ruido", de: "Reinigt Sprachmodelle durch Entfernen von Rauschen", nl: "Zuivert taalmodellen door ruis te verwijderen" },
          { en: "Extracts core vocabulary from large models", es: "Extrae vocabulario central de modelos grandes", de: "Extrahiert Kernvokabular aus großen Modellen", nl: "Extraheert kernvocabulaire uit grote modellen" }
        ],
        correct: 0,
        explanation: {
          en: "Knowledge distillation transfers capabilities from massive teacher models (like GPT-4) to compact student models by training students to match the teacher's output distributions (soft labels) rather than just hard labels. This captures richer information about relationships between classes, enabling deployment of efficient models with near-teacher performance on resource-constrained devices.",
          es: "Destilación de conocimiento transfiere capacidades de modelos maestro masivos (como GPT-4) a modelos estudiante compactos entrenando estudiantes para igualar distribuciones de salida del maestro (etiquetas suaves) en lugar de solo etiquetas duras. Esto captura información más rica sobre relaciones entre clases, habilitando despliegue de modelos eficientes con rendimiento cercano al maestro en dispositivos con recursos limitados.",
          de: "Knowledge Distillation überträgt Fähigkeiten von massiven Lehrer-Modellen (wie GPT-4) zu kompakten Schüler-Modellen durch Training von Schülern um Ausgabeverteilungen des Lehrers (weiche Labels) zu erreichen statt nur harte Labels. Dies erfasst reichere Information über Beziehungen zwischen Klassen, ermöglicht Bereitstellung effizienter Modelle mit Lehrer-naher Leistung auf ressourcenbeschränkten Geräten.",
          nl: "Knowledge distillation draagt capaciteiten over van massieve leraar modellen (zoals GPT-4) naar compacte student modellen door studenten te trainen om de output distributies van de leraar (zachte labels) te evenaren in plaats van alleen harde labels. Dit vangt rijkere informatie over relaties tussen klassen, maakt deployment mogelijk van efficiënte modellen met bijna-leraar prestaties op resource-beperkte apparaten."
        }
      },
      {
        question: {
          en: "What is prompt engineering in large language models and what techniques make prompts more effective?",
          es: "¿Qué es la ingeniería de prompts en grandes modelos de lenguaje y qué técnicas hacen los prompts más efectivos?",
          de: "Was ist Prompt Engineering in großen Sprachmodellen und welche Techniken machen Prompts effektiver?",
          nl: "Wat is prompt engineering in grote taalmodellen en welke technieken maken prompts effectiever?"
        },
        options: [
          { en: "Crafting input instructions using techniques like few-shot examples, chain-of-thought reasoning, and role specification", es: "Elaborar instrucciones de entrada usando técnicas como ejemplos de pocos disparos, razonamiento de cadena de pensamiento y especificación de roles", de: "Gestalten von Eingabeanweisungen mit Techniken wie Few-Shot-Beispiele, Chain-of-Thought-Reasoning und Rollenspezifikation", nl: "Ontwerpen van invoer instructies met technieken zoals few-shot voorbeelden, chain-of-thought redeneren en rol specificatie" },
          { en: "Prompt responses from models quickly", es: "Obtener respuestas rápidas de modelos", de: "Schnelle Antworten von Modellen erhalten", nl: "Snelle responses van modellen verkrijgen" },
          { en: "Engineering the user interface for prompts", es: "Diseñar la interfaz de usuario para prompts", de: "Benutzeroberfläche für Prompts gestalten", nl: "Gebruikersinterface voor prompts ontwerpen" },
          { en: "Automatic generation of training prompts", es: "Generación automática de prompts de entrenamiento", de: "Automatische Generierung von Trainings-Prompts", nl: "Automatische generatie van trainings prompts" }
        ],
        correct: 0,
        explanation: {
          en: "Prompt engineering optimizes LLM performance through careful instruction design. Key techniques: few-shot learning (providing examples), chain-of-thought prompting (requesting step-by-step reasoning), role-playing (assigning expert personas), formatting constraints, and iterative refinement. Effective prompts can dramatically improve output quality without model retraining.",
          es: "Ingeniería de prompts optimiza rendimiento LLM a través de diseño cuidadoso de instrucciones. Técnicas clave: aprendizaje de pocos disparos (proporcionar ejemplos), prompting de cadena de pensamiento (solicitar razonamiento paso a paso), juego de roles (asignar personas expertas), restricciones de formato y refinamiento iterativo. Prompts efectivos pueden mejorar dramáticamente calidad de salida sin reentrenar modelo.",
          de: "Prompt Engineering optimiert LLM-Leistung durch sorgfältiges Instruktionsdesign. Schlüsseltechniken: Few-Shot-Learning (Bereitstellen von Beispielen), Chain-of-Thought-Prompting (Anfragen schrittweiser Begründung), Rollenspiel (Zuweisen von Experten-Personas), Formatierungseinschränkungen und iterative Verfeinerung. Effektive Prompts können Ausgabequalität dramatisch verbessern ohne Modell-Neutraining.",
          nl: "Prompt engineering optimaliseert LLM prestaties door zorgvuldig instructieontwerp. Sleuteltechnieken: few-shot learning (voorbeelden bieden), chain-of-thought prompting (verzoeken om stapsgewijze redenering), rollenspel (toewijzen van expert persona's), opmaakbeperkingen en iteratieve verfijning. Effectieve prompts kunnen outputkwaliteit dramatisch verbeteren zonder model hertraining."
        }
      },
      {
        question: {
          en: "What is retrieval-augmented generation (RAG) and how does it enhance language model capabilities?",
          es: "¿Qué es la generación aumentada por recuperación (RAG) y cómo mejora las capacidades de modelos de lenguaje?",
          de: "Was ist Retrieval-Augmented Generation (RAG) und wie verbessert es Sprachmodell-Fähigkeiten?",
          nl: "Wat is retrieval-augmented generation (RAG) en hoe verbetert het taalmodel capaciteiten?"
        },
        options: [
          { en: "Combines neural retrieval with generation by fetching relevant documents to ground outputs in factual knowledge", es: "Combina recuperación neuronal con generación obteniendo documentos relevantes para fundamentar salidas en conocimiento factual", de: "Kombiniert neuronale Suche mit Generierung durch Abrufen relevanter Dokumente um Ausgaben in faktischem Wissen zu verankern", nl: "Combineert neurale retrieval met generatie door relevante documenten op te halen om outputs te gronden in feitelijke kennis" },
          { en: "Generates random augmented data", es: "Genera datos aumentados aleatorios", de: "Generiert zufällige augmentierte Daten", nl: "Genereert willekeurige geaugmenteerde data" },
          { en: "Retrieves and augments training datasets", es: "Recupera y aumenta conjuntos de datos de entrenamiento", de: "Ruft ab und erweitert Trainingsdatensätze", nl: "Haalt op en augmenteert trainingsdatasets" },
          { en: "Augments generation speed through retrieval caching", es: "Aumenta velocidad de generación a través de caché de recuperación", de: "Erweitert Generierungsgeschwindigkeit durch Retrieval-Caching", nl: "Vergroot generatiesnelheid door retrieval caching" }
        ],
        correct: 0,
        explanation: {
          en: "RAG addresses LLM limitations like hallucination and outdated knowledge by retrieving relevant documents from external knowledge bases before generation. The model conditions its outputs on both the input query and retrieved context, enabling accurate, up-to-date responses grounded in verifiable sources without costly retraining.",
          es: "RAG aborda limitaciones LLM como alucinación y conocimiento desactualizado recuperando documentos relevantes de bases de conocimiento externas antes de generación. El modelo condiciona sus salidas tanto en consulta de entrada como contexto recuperado, habilitando respuestas precisas y actualizadas fundamentadas en fuentes verificables sin costoso reentrenamiento.",
          de: "RAG adressiert LLM-Limitationen wie Halluzination und veraltetes Wissen durch Abrufen relevanter Dokumente aus externen Wissensbasen vor der Generierung. Das Modell konditioniert seine Ausgaben sowohl auf Eingabeanfrage als auch abgerufenen Kontext, ermöglicht genaue, aktuelle Antworten verankert in verifizierbaren Quellen ohne kostspieliges Neutraining.",
          nl: "RAG pakt LLM beperkingen aan zoals hallucinatie en verouderde kennis door relevante documenten op te halen uit externe kennisbanken voor generatie. Het model conditioneert zijn outputs op zowel de input query als opgehaalde context, maakt nauwkeurige, actuele antwoorden mogelijk gegrond in verifieerbare bronnen zonder kostbare hertraining."
        }
      },
      {
        question: {
          en: "What is reinforcement learning from human feedback (RLHF) and how is it used to align language models?",
          es: "¿Qué es el aprendizaje por refuerzo a partir de retroalimentación humana (RLHF) y cómo se usa para alinear modelos de lenguaje?",
          de: "Was ist Reinforcement Learning from Human Feedback (RLHF) und wie wird es verwendet um Sprachmodelle auszurichten?",
          nl: "Wat is reinforcement learning from human feedback (RLHF) en hoe wordt het gebruikt om taalmodellen te aligneren?"
        },
        options: [
          { en: "Trains reward models from human preferences, then optimizes language models using RL to maximize human-aligned rewards", es: "Entrena modelos de recompensa a partir de preferencias humanas, luego optimiza modelos de lenguaje usando RL para maximizar recompensas alineadas con humanos", de: "Trainiert Belohnungsmodelle aus menschlichen Präferenzen, optimiert dann Sprachmodelle mit RL um menschlich-ausgerichtete Belohnungen zu maximieren", nl: "Traint beloningsmodellen van menselijke voorkeuren, optimaliseert dan taalmodellen met RL om menselijk-georiënteerde beloningen te maximaliseren" },
          { en: "Human feedback directly updates model weights", es: "Retroalimentación humana actualiza directamente pesos del modelo", de: "Menschliches Feedback aktualisiert direkt Modellgewichte", nl: "Menselijke feedback werkt modelgewichten direct bij" },
          { en: "Reinforces human-written training examples", es: "Refuerza ejemplos de entrenamiento escritos por humanos", de: "Verstärkt von Menschen geschriebene Trainingsbeispiele", nl: "Versterkt door mensen geschreven trainingsvoorbeelden" },
          { en: "Learns from human feedback logs only", es: "Aprende solo de registros de retroalimentación humana", de: "Lernt nur aus menschlichen Feedback-Protokollen", nl: "Leert alleen van menselijke feedback logs" }
        ],
        correct: 0,
        explanation: {
          en: "RLHF aligns LLMs with human values through a multi-stage process: (1) supervised fine-tuning on demonstrations, (2) training a reward model on human preference rankings, (3) optimizing the LLM using PPO or similar RL algorithms to maximize predicted rewards. This produces models that are helpful, harmless, and honest.",
          es: "RLHF alinea LLMs con valores humanos a través de proceso de múltiples etapas: (1) ajuste fino supervisado en demostraciones, (2) entrenar modelo de recompensa en clasificaciones de preferencias humanas, (3) optimizar LLM usando PPO o algoritmos RL similares para maximizar recompensas predichas. Esto produce modelos que son útiles, inofensivos y honestos.",
          de: "RLHF richtet LLMs an menschlichen Werten aus durch mehrstufigen Prozess: (1) überwachtes Fine-Tuning auf Demonstrationen, (2) Training eines Belohnungsmodells auf menschlichen Präferenz-Rankings, (3) Optimierung des LLM mit PPO oder ähnlichen RL-Algorithmen um vorhergesagte Belohnungen zu maximieren. Dies produziert Modelle die hilfreich, harmlos und ehrlich sind.",
          nl: "RLHF aligneert LLMs met menselijke waarden door een meerfasen proces: (1) gesuperviseerde fine-tuning op demonstraties, (2) trainen van een beloningsmodel op menselijke voorkeur rankings, (3) optimaliseren van het LLM met PPO of vergelijkbare RL algoritmes om voorspelde beloningen te maximaliseren. Dit produceert modellen die helpzaam, ongevaarlijk en eerlijk zijn."
        }
      },
      {
        question: {
          en: "What is in-context learning in large language models and how does it differ from traditional fine-tuning?",
          es: "¿Qué es el aprendizaje en contexto en grandes modelos de lenguaje y cómo difiere del ajuste fino tradicional?",
          de: "Was ist In-Context Learning in großen Sprachmodellen und wie unterscheidet es sich von traditionellem Fine-Tuning?",
          nl: "Wat is in-context learning in grote taalmodellen en hoe verschilt het van traditionele fine-tuning?"
        },
        options: [
          { en: "Models perform tasks by conditioning on examples in the prompt without parameter updates, unlike fine-tuning which modifies weights", es: "Modelos realizan tareas condicionando en ejemplos en el prompt sin actualizaciones de parámetros, a diferencia de ajuste fino que modifica pesos", de: "Modelle führen Aufgaben durch Konditionierung auf Beispiele im Prompt ohne Parameterupdates aus, im Gegensatz zu Fine-Tuning das Gewichte modifiziert", nl: "Modellen voeren taken uit door te conditioneren op voorbeelden in de prompt zonder parameter updates, in tegenstelling tot fine-tuning dat gewichten wijzigt" },
          { en: "Learning context embeddings during training", es: "Aprender embeddings de contexto durante entrenamiento", de: "Lernen von Kontext-Embeddings während Training", nl: "Leren van context embeddings tijdens training" },
          { en: "Contextual understanding of training data", es: "Comprensión contextual de datos de entrenamiento", de: "Kontextuelles Verständnis von Trainingsdaten", nl: "Contextueel begrip van trainingsdata" },
          { en: "In-domain learning from context windows", es: "Aprendizaje en dominio de ventanas de contexto", de: "In-Domain-Lernen aus Kontextfenstern", nl: "In-domein leren van contextvensters" }
        ],
        correct: 0,
        explanation: {
          en: "In-context learning enables LLMs to adapt to new tasks by simply conditioning on examples provided in the input prompt, without any gradient updates. This emergent capability allows the same frozen model to perform diverse tasks based solely on prompt engineering, contrasting with fine-tuning which requires updating model parameters on task-specific data.",
          es: "Aprendizaje en contexto permite a LLMs adaptarse a nuevas tareas simplemente condicionando en ejemplos proporcionados en el prompt de entrada, sin actualizaciones de gradiente. Esta capacidad emergente permite que el mismo modelo congelado realice tareas diversas basándose únicamente en ingeniería de prompts, contrastando con ajuste fino que requiere actualizar parámetros del modelo en datos específicos de tarea.",
          de: "In-Context Learning ermöglicht LLMs sich an neue Aufgaben anzupassen durch einfaches Konditionieren auf Beispiele im Eingabe-Prompt, ohne Gradienten-Updates. Diese emergente Fähigkeit ermöglicht demselben eingefrorenen Modell diverse Aufgaben durchzuführen basierend nur auf Prompt Engineering, im Gegensatz zu Fine-Tuning das Aktualisierung von Modellparametern auf aufgabenspezifischen Daten erfordert.",
          nl: "In-context learning stelt LLMs in staat om aan te passen aan nieuwe taken door simpelweg te conditioneren op voorbeelden geleverd in de input prompt, zonder gradiënt updates. Dit emergente vermogen stelt hetzelfde bevroren model in staat diverse taken uit te voeren gebaseerd uitsluitend op prompt engineering, in contrast met fine-tuning dat bijwerken van modelparameters vereist op taak-specifieke data."
        }
      },
      {
        question: {
          en: "What is model quantization awareness training and how does it differ from post-training quantization?",
          es: "¿Qué es el entrenamiento con conciencia de cuantización del modelo y cómo difiere de la cuantización post-entrenamiento?",
          de: "Was ist Quantisierungs-bewusstes Training und wie unterscheidet es sich von Post-Training-Quantisierung?",
          nl: "Wat is model quantization awareness training en hoe verschilt het van post-training quantization?"
        },
        options: [
          { en: "Simulates quantization during training to learn robust low-precision weights, versus post-training which quantizes after training completes", es: "Simula cuantización durante entrenamiento para aprender pesos de baja precisión robustos, versus post-entrenamiento que cuantiza después de que entrenamiento se completa", de: "Simuliert Quantisierung während Training um robuste niedrigpräzise Gewichte zu lernen, versus Post-Training das nach Trainingsabschluss quantisiert", nl: "Simuleert quantization tijdens training om robuuste lage-precisie gewichten te leren, versus post-training dat quantiseert na training voltooid is" },
          { en: "Trains models to be aware of quantization errors", es: "Entrena modelos para estar conscientes de errores de cuantización", de: "Trainiert Modelle um sich Quantisierungsfehlern bewusst zu sein", nl: "Traint modellen om zich bewust te zijn van quantization fouten" },
          { en: "Quantization applied only during inference", es: "Cuantización aplicada solo durante inferencia", de: "Quantisierung nur während Inferenz angewendet", nl: "Quantization alleen toegepast tijdens inferentie" },
          { en: "Awareness of available quantization levels", es: "Conciencia de niveles de cuantización disponibles", de: "Bewusstsein verfügbarer Quantisierungsstufen", nl: "Bewustzijn van beschikbare quantization niveaus" }
        ],
        correct: 0,
        explanation: {
          en: "Quantization-aware training (QAT) inserts fake quantization operations during training, allowing the model to adapt to reduced precision by learning weights that are robust to quantization noise. This typically achieves better accuracy than post-training quantization (PTQ) which simply converts trained full-precision weights, but requires more computational resources during training.",
          es: "Entrenamiento con conciencia de cuantización (QAT) inserta operaciones de cuantización falsas durante entrenamiento, permitiendo que modelo se adapte a precisión reducida aprendiendo pesos que son robustos a ruido de cuantización. Esto típicamente logra mejor precisión que cuantización post-entrenamiento (PTQ) que simplemente convierte pesos entrenados de precisión completa, pero requiere más recursos computacionales durante entrenamiento.",
          de: "Quantisierungs-bewusstes Training (QAT) fügt falsche Quantisierungsoperationen während Training ein, ermöglicht dem Modell sich an reduzierte Präzision anzupassen durch Lernen von Gewichten die robust gegen Quantisierungsrauschen sind. Dies erreicht typisch bessere Genauigkeit als Post-Training-Quantisierung (PTQ) die einfach trainierte Vollpräzisions-Gewichte konvertiert, benötigt aber mehr Rechenressourcen während Training.",
          nl: "Quantization-aware training (QAT) voegt nep quantization operaties in tijdens training, stelt het model in staat om aan te passen aan verminderde precisie door gewichten te leren die robuust zijn tegen quantization ruis. Dit bereikt typisch betere nauwkeurigheid dan post-training quantization (PTQ) dat simpelweg getrainde volledige-precisie gewichten converteert, maar vereist meer computationele middelen tijdens training."
        }
      },
      {
        question: {
          en: "What is neural architecture search (NAS) and what are the main approaches to automating architecture design?",
          es: "¿Qué es la búsqueda de arquitectura neuronal (NAS) y cuáles son los principales enfoques para automatizar el diseño de arquitectura?",
          de: "Was ist Neural Architecture Search (NAS) und was sind die Hauptansätze zur Automatisierung des Architekturdesigns?",
          nl: "Wat is neural architecture search (NAS) en wat zijn de hoofdbenaderingen voor het automatiseren van architectuurontwerp?"
        },
        options: [
          { en: "Automated discovery of optimal architectures using reinforcement learning, evolutionary algorithms, or differentiable search methods", es: "Descubrimiento automatizado de arquitecturas óptimas usando aprendizaje por refuerzo, algoritmos evolutivos o métodos de búsqueda diferenciables", de: "Automatisierte Entdeckung optimaler Architekturen mit Reinforcement Learning, evolutionären Algorithmen oder differenzierbaren Suchmethoden", nl: "Geautomatiseerde ontdekking van optimale architecturen met reinforcement learning, evolutionaire algoritmes of differentieerbare zoekmethoden" },
          { en: "Manually searching through architecture options", es: "Búsqueda manual a través de opciones de arquitectura", de: "Manuelle Suche durch Architekturoptionen", nl: "Handmatig zoeken door architectuuropties" },
          { en: "Network analysis for security vulnerabilities", es: "Análisis de red para vulnerabilidades de seguridad", de: "Netzwerkanalyse für Sicherheitslücken", nl: "Netwerkanalyse voor beveiligingskwetsbaarheden" },
          { en: "Searching for pre-trained architectures online", es: "Buscar arquitecturas pre-entrenadas en línea", de: "Suche nach vortrainierten Architekturen online", nl: "Zoeken naar voorgetrainde architecturen online" }
        ],
        correct: 0,
        explanation: {
          en: "NAS automates the design of neural network architectures. Major approaches include: (1) RL-based (controller RNN proposes architectures), (2) evolutionary (genetic algorithms evolve architectures), (3) gradient-based like DARTS (differentiable architecture search using continuous relaxation), and (4) one-shot methods (train supernet then extract subnetworks). NAS has discovered novel architectures outperforming human designs.",
          es: "NAS automatiza el diseño de arquitecturas de redes neuronales. Enfoques principales incluyen: (1) basado en RL (RNN controlador propone arquitecturas), (2) evolutivo (algoritmos genéticos evolucionan arquitecturas), (3) basado en gradiente como DARTS (búsqueda de arquitectura diferenciable usando relajación continua), y (4) métodos one-shot (entrenar supernet luego extraer subredes). NAS ha descubierto arquitecturas novedosas superando diseños humanos.",
          de: "NAS automatisiert das Design neuronaler Netzwerkarchitekturen. Hauptansätze umfassen: (1) RL-basiert (Controller-RNN schlägt Architekturen vor), (2) evolutionär (genetische Algorithmen entwickeln Architekturen), (3) gradientenbasiert wie DARTS (differenzierbare Architektursuche mit kontinuierlicher Relaxation), und (4) One-Shot-Methoden (trainiere Supernetz dann extrahiere Teilnetze). NAS hat neuartige Architekturen entdeckt die menschliche Designs übertreffen.",
          nl: "NAS automatiseert het ontwerp van neurale netwerkarchitecturen. Belangrijke benaderingen omvatten: (1) RL-gebaseerd (controller RNN stelt architecturen voor), (2) evolutionair (genetische algoritmes evolueren architecturen), (3) gradiënt-gebaseerd zoals DARTS (differentieerbare architectuurzoektocht met continue relaxatie), en (4) one-shot methoden (train supernet dan extraheer subnetwerken). NAS heeft nieuwe architecturen ontdekt die menselijke ontwerpen overtreffen."
        }
      },
      {
        question: {
          en: "What is mixture of experts (MoE) and how does it enable sparse computation in large models?",
          es: "¿Qué es la mezcla de expertos (MoE) y cómo habilita computación dispersa en modelos grandes?",
          de: "Was ist Mixture of Experts (MoE) und wie ermöglicht es spärliche Berechnung in großen Modellen?",
          nl: "Wat is mixture of experts (MoE) en hoe maakt het sparse berekening mogelijk in grote modellen?"
        },
        options: [
          { en: "Routes each input to a subset of expert networks via learned gating, activating only relevant experts for efficient scaling", es: "Enruta cada entrada a un subconjunto de redes expertas vía compuerta aprendida, activando solo expertos relevantes para escalado eficiente", de: "Leitet jede Eingabe zu einer Teilmenge von Experten-Netzwerken über gelerntes Gating, aktiviert nur relevante Experten für effizientes Skalieren", nl: "Routeert elke input naar een subset van expert netwerken via geleerd gating, activeert alleen relevante experts voor efficiënte schaling" },
          { en: "Combines predictions from multiple expert humans", es: "Combina predicciones de múltiples humanos expertos", de: "Kombiniert Vorhersagen mehrerer menschlicher Experten", nl: "Combineert voorspellingen van meerdere menselijke experts" },
          { en: "Mixture model for expert knowledge bases", es: "Modelo de mezcla para bases de conocimiento expertas", de: "Mischmodell für Experten-Wissensbasen", nl: "Mengselmodel voor expert kennisbanken" },
          { en: "Ensemble of specialized domain models", es: "Conjunto de modelos de dominio especializados", de: "Ensemble spezialisierter Domänen-Modelle", nl: "Ensemble van gespecialiseerde domeinmodellen" }
        ],
        correct: 0,
        explanation: {
          en: "MoE architectures contain many expert sub-networks but activate only a sparse subset for each input via a learned gating mechanism. This enables models to scale to trillions of parameters while maintaining computational efficiency, as each input uses only a fraction of total capacity. Models like Switch Transformer and GPT-4 leverage MoE for efficient large-scale training.",
          es: "Arquitecturas MoE contienen muchas subredes expertas pero activan solo un subconjunto disperso para cada entrada vía mecanismo de compuerta aprendido. Esto permite que modelos escalen a trillones de parámetros mientras mantienen eficiencia computacional, ya que cada entrada usa solo una fracción de capacidad total. Modelos como Switch Transformer y GPT-4 aprovechan MoE para entrenamiento eficiente a gran escala.",
          de: "MoE-Architekturen enthalten viele Experten-Teilnetzwerke aktivieren aber nur eine spärliche Teilmenge für jede Eingabe über gelernten Gating-Mechanismus. Dies ermöglicht Modellen auf Billionen von Parametern zu skalieren während rechnerische Effizienz erhalten bleibt, da jede Eingabe nur einen Bruchteil der Gesamtkapazität nutzt. Modelle wie Switch Transformer und GPT-4 nutzen MoE für effizientes großskaliges Training.",
          nl: "MoE architecturen bevatten veel expert sub-netwerken maar activeren alleen een dunne subset voor elke input via een geleerd gating mechanisme. Dit stelt modellen in staat te schalen naar triljoenen parameters terwijl computationele efficiëntie behouden blijft, omdat elke input slechts een fractie van totale capaciteit gebruikt. Modellen zoals Switch Transformer en GPT-4 benutten MoE voor efficiënte grootschalige training."
        }
      },
      {
        question: {
          en: "What is the exploration-exploitation dilemma in bandits and how do algorithms like UCB balance it?",
          es: "¿Qué es el dilema exploración-explotación en bandits y cómo lo equilibran algoritmos como UCB?",
          de: "Was ist das Exploration-Exploitation-Dilemma in Bandits und wie balancieren Algorithmen wie UCB es?",
          nl: "Wat is het exploratie-exploitatie dilemma in bandits en hoe balanceren algoritmes zoals UCB het?"
        },
        options: [
          { en: "Must choose between trying new options to gather information vs selecting currently best-known option, UCB adds optimism bonus", es: "Debe elegir entre probar nuevas opciones para recopilar información vs seleccionar opción actualmente mejor conocida, UCB agrega bonus de optimismo", de: "Muss wählen zwischen Versuch neuer Optionen um Information zu sammeln vs Auswahl aktuell best-bekannter Option, UCB fügt Optimismus-Bonus hinzu", nl: "Moet kiezen tussen nieuwe opties proberen om informatie te verzamelen vs selecteren van huidige best-bekende optie, UCB voegt optimisme bonus toe" },
          { en: "Exploration finds bandits, exploitation uses them", es: "Exploración encuentra bandits, explotación los usa", de: "Exploration findet Bandits, Exploitation nutzt sie", nl: "Exploratie vindt bandits, exploitatie gebruikt ze" },
          { en: "Balance between algorithm speed and accuracy", es: "Balance entre velocidad y precisión del algoritmo", de: "Balance zwischen Algorithmusgeschwindigkeit und Genauigkeit", nl: "Balans tussen algoritme snelheid en nauwkeurigheid" },
          { en: "Trade-off between computational resources", es: "Compensación entre recursos computacionales", de: "Tradeoff zwischen Rechenressourcen", nl: "Afweging tussen computationele middelen" }
        ],
        correct: 0,
        explanation: {
          en: "In multi-armed bandits, agents must balance exploration (trying less-certain options to learn their values) with exploitation (choosing the best-known option). Upper Confidence Bound (UCB) algorithms add an exploration bonus proportional to uncertainty, selecting options with highest upper confidence bound. This provably achieves logarithmic regret, efficiently balancing exploration and exploitation.",
          es: "En bandits multi-brazo, agentes deben equilibrar exploración (probar opciones menos ciertas para aprender sus valores) con explotación (elegir opción mejor conocida). Algoritmos Upper Confidence Bound (UCB) agregan bonus de exploración proporcional a incertidumbre, seleccionando opciones con límite superior de confianza más alto. Esto demostrablemente logra arrepentimiento logarítmico, equilibrando eficientemente exploración y explotación.",
          de: "In Multi-Armed Bandits müssen Agenten Exploration (Versuch weniger sicherer Optionen um ihre Werte zu lernen) mit Exploitation (Wahl der best-bekannten Option) balancieren. Upper Confidence Bound (UCB) Algorithmen fügen Explorations-Bonus proportional zu Unsicherheit hinzu, wählen Optionen mit höchster oberer Vertrauensgrenze. Dies erreicht nachweislich logarithmisches Bedauern, balanciert effizient Exploration und Exploitation.",
          nl: "In multi-armed bandits moeten agents exploratie (minder-zekere opties proberen om hun waarden te leren) balanceren met exploitatie (beste-bekende optie kiezen). Upper Confidence Bound (UCB) algoritmes voegen exploratie bonus toe proportioneel aan onzekerheid, selecteren opties met hoogste upper confidence bound. Dit bereikt bewijsbaar logaritmisch regret, balanceert efficiënt exploratie en exploitatie."
        }
      },
      {
        question: {
          en: "What is the credit assignment problem in reinforcement learning and how do temporal-difference methods address it?",
          es: "¿Qué es el problema de asignación de crédito en aprendizaje por refuerzo y cómo lo abordan métodos de diferencia temporal?",
          de: "Was ist das Kreditvergabeproblem in Reinforcement Learning und wie behandeln Temporal-Difference-Methoden es?",
          nl: "Wat is het credit assignment probleem in reinforcement learning en hoe pakken temporal-difference methoden het aan?"
        },
        options: [
          { en: "Determining which past actions caused delayed rewards, TD learning bootstraps from value estimates to propagate credit faster", es: "Determinar qué acciones pasadas causaron recompensas retrasadas, aprendizaje TD hace bootstrap de estimaciones de valor para propagar crédito más rápido", de: "Bestimmen welche vergangenen Aktionen verzögerte Belohnungen verursachten, TD-Learning bootstrapt von Werteschätzungen um Kredit schneller zu propagieren", nl: "Bepalen welke eerdere acties vertraagde beloningen veroorzaakten, TD learning bootstrapt van waarde schattingen om credit sneller te propageren" },
          { en: "Assigning credit scores to training examples", es: "Asignar puntajes de crédito a ejemplos de entrenamiento", de: "Zuweisen von Kreditscores zu Trainingsbeispielen", nl: "Toewijzen van credit scores aan trainingsvoorbeelden" },
          { en: "Credit for discovering optimal policies", es: "Crédito por descubrir políticas óptimas", de: "Kredit für Entdeckung optimaler Richtlinien", nl: "Credit voor het ontdekken van optimale policies" },
          { en: "Distributing computational credits", es: "Distribuir créditos computacionales", de: "Verteilung rechnerischer Kredite", nl: "Verdelen van computationele credits" }
        ],
        correct: 0,
        explanation: {
          en: "Credit assignment determines which actions in a sequence led to eventual rewards. TD methods like Q-learning and SARSA bootstrap by updating value estimates using predictions of future values rather than waiting for final outcomes (as in Monte Carlo). This allows faster learning by propagating information backwards through time after each step, addressing delayed reward challenges.",
          es: "Asignación de crédito determina qué acciones en una secuencia llevaron a recompensas eventuales. Métodos TD como Q-learning y SARSA hacen bootstrap actualizando estimaciones de valor usando predicciones de valores futuros en lugar de esperar resultados finales (como en Monte Carlo). Esto permite aprendizaje más rápido propagando información hacia atrás en el tiempo después de cada paso, abordando desafíos de recompensa retrasada.",
          de: "Kreditvergabe bestimmt welche Aktionen in einer Sequenz zu eventuellen Belohnungen führten. TD-Methoden wie Q-Learning und SARSA bootstrapen durch Aktualisierung von Werteschätzungen mit Vorhersagen zukünftiger Werte statt auf Endergebnisse zu warten (wie in Monte Carlo). Dies ermöglicht schnelleres Lernen durch Rückwärtspropagierung von Information durch Zeit nach jedem Schritt, behandelt verzögerte Belohnungsherausforderungen.",
          nl: "Credit assignment bepaalt welke acties in een sequentie leidden tot eventuele beloningen. TD methoden zoals Q-learning en SARSA bootstrappen door waarde schattingen bij te werken met voorspellingen van toekomstige waarden in plaats van wachten op uiteindelijke uitkomsten (zoals in Monte Carlo). Dit maakt sneller leren mogelijk door informatie achterwaarts door tijd te propageren na elke stap, pakt vertraagde belonings uitdagingen aan."
        }
      },
      {
        question: {
          en: "What is the Bellman equation and how does it enable dynamic programming in reinforcement learning?",
          es: "¿Qué es la ecuación de Bellman y cómo habilita programación dinámica en aprendizaje por refuerzo?",
          de: "Was ist die Bellman-Gleichung und wie ermöglicht sie dynamische Programmierung in Reinforcement Learning?",
          nl: "Wat is de Bellman vergelijking en hoe maakt het dynamische programmering mogelijk in reinforcement learning?"
        },
        options: [
          { en: "Recursive decomposition of value functions expressing optimal values as immediate reward plus discounted future values", es: "Descomposición recursiva de funciones de valor expresando valores óptimos como recompensa inmediata más valores futuros descontados", de: "Rekursive Zerlegung von Wertfunktionen ausdrückend optimale Werte als sofortige Belohnung plus diskontierte zukünftige Werte", nl: "Recursieve decompositie van waardefuncties die optimale waarden uitdrukken als directe beloning plus gedisconteerde toekomstige waarden" },
          { en: "Equation for computing bell curves in statistics", es: "Ecuación para calcular curvas de campana en estadística", de: "Gleichung zur Berechnung von Glockenkurven in Statistik", nl: "Vergelijking voor het berekenen van klokcurves in statistiek" },
          { en: "Formula for optimal model selection", es: "Fórmula para selección óptima de modelos", de: "Formel für optimale Modellauswahl", nl: "Formule voor optimale modelselectie" },
          { en: "Dynamic programming complexity measure", es: "Medida de complejidad de programación dinámica", de: "Maß für dynamische Programmierungskomplexität", nl: "Dynamische programmering complexiteitsmaat" }
        ],
        correct: 0,
        explanation: {
          en: "The Bellman equation expresses the value of a state recursively as V(s) = max_a [R(s,a) + γ Σ P(s'|s,a) V(s')], decomposing the value into immediate reward and expected discounted future value. This recursive structure enables dynamic programming algorithms like value iteration and policy iteration to efficiently compute optimal policies by bootstrapping from value estimates.",
          es: "Ecuación de Bellman expresa valor de un estado recursivamente como V(s) = max_a [R(s,a) + γ Σ P(s'|s,a) V(s')], descomponiendo valor en recompensa inmediata y valor futuro descontado esperado. Esta estructura recursiva habilita algoritmos de programación dinámica como iteración de valor e iteración de política para calcular eficientemente políticas óptimas haciendo bootstrap de estimaciones de valor.",
          de: "Bellman-Gleichung drückt den Wert eines Zustands rekursiv aus als V(s) = max_a [R(s,a) + γ Σ P(s'|s,a) V(s')], zerlegt Wert in sofortige Belohnung und erwarteten diskontierten zukünftigen Wert. Diese rekursive Struktur ermöglicht dynamische Programmieralgorithmen wie Wert-Iteration und Policy-Iteration um effizient optimale Richtlinien zu berechnen durch Bootstrapping von Werteschätzungen.",
          nl: "Bellman vergelijking drukt de waarde van een staat recursief uit als V(s) = max_a [R(s,a) + γ Σ P(s'|s,a) V(s')], decomponneert waarde in directe beloning en verwachte gedisconteerde toekomstige waarde. Deze recursieve structuur maakt dynamische programmering algoritmes zoals waarde iteratie en policy iteratie mogelijk om efficiënt optimale policies te berekenen door te bootstrappen van waarde schattingen."
        }
      },
      {
        question: {
          en: "What is actor-critic architecture in RL and how does it combine value-based and policy-based methods?",
          es: "¿Qué es la arquitectura actor-crítico en RL y cómo combina métodos basados en valor y basados en política?",
          de: "Was ist Actor-Critic-Architektur in RL und wie kombiniert sie wertbasierte und richtlinienbasierte Methoden?",
          nl: "Wat is actor-critic architectuur in RL en hoe combineert het waarde-gebaseerde en policy-gebaseerde methoden?"
        },
        options: [
          { en: "Actor learns policy selecting actions, critic evaluates actions via value function, critic guides actor's learning", es: "Actor aprende política seleccionando acciones, crítico evalúa acciones vía función de valor, crítico guía aprendizaje del actor", de: "Actor lernt Richtlinie wählend Aktionen, Critic bewertet Aktionen via Wertfunktion, Critic leitet Lernen des Actors", nl: "Actor leert policy selecterend acties, critic evalueert acties via waardefunctie, critic leidt leren van actor" },
          { en: "Two actors compete, critic selects winner", es: "Dos actores compiten, crítico selecciona ganador", de: "Zwei Actors konkurrieren, Critic wählt Gewinner", nl: "Twee actors concurreren, critic selecteert winnaar" },
          { en: "Actor performs actions, critic provides ratings", es: "Actor realiza acciones, crítico proporciona calificaciones", de: "Actor führt Aktionen aus, Critic gibt Bewertungen", nl: "Actor voert acties uit, critic geeft beoordelingen" },
          { en: "Theatrical metaphor for dual-network training", es: "Metáfora teatral para entrenamiento de red dual", de: "Theatralische Metapher für duales Netzwerk-Training", nl: "Theatrale metafoor voor duaal netwerk training" }
        ],
        correct: 0,
        explanation: {
          en: "Actor-critic maintains two components: the actor (policy network) that selects actions, and the critic (value network) that estimates state/action values. The critic evaluates the actor's choices, providing lower-variance gradient estimates than policy gradients alone. This architecture combines strengths of value-based (stability) and policy-based (direct policy optimization) methods, used in algorithms like A3C and PPO.",
          es: "Actor-crítico mantiene dos componentes: el actor (red de política) que selecciona acciones, y el crítico (red de valor) que estima valores de estado/acción. El crítico evalúa elecciones del actor, proporcionando estimaciones de gradiente de menor varianza que gradientes de política solos. Esta arquitectura combina fortalezas de métodos basados en valor (estabilidad) y basados en política (optimización directa de política), usada en algoritmos como A3C y PPO.",
          de: "Actor-Critic erhält zwei Komponenten: den Actor (Policy-Netzwerk) der Aktionen wählt, und den Critic (Wert-Netzwerk) der Zustands-/Aktionswerte schätzt. Der Critic bewertet Wahlen des Actors, bietet Gradienten-Schätzungen mit geringerer Varianz als Policy-Gradienten allein. Diese Architektur kombiniert Stärken wertbasierter (Stabilität) und richtlinienbasierter (direkte Policy-Optimierung) Methoden, verwendet in Algorithmen wie A3C und PPO.",
          nl: "Actor-critic behoudt twee componenten: de actor (policy netwerk) die acties selecteert, en de critic (waarde netwerk) die staat/actie waarden schat. De critic evalueert keuzes van de actor, biedt lagere-variantie gradiënt schattingen dan policy gradiënten alleen. Deze architectuur combineert sterke punten van waarde-gebaseerde (stabiliteit) en policy-gebaseerde (directe policy optimalisatie) methoden, gebruikt in algoritmes zoals A3C en PPO."
        }
      },
      {
        question: {
          en: "What is proximal policy optimization (PPO) and why has it become a dominant RL algorithm?",
          es: "¿Qué es la optimización de política proximal (PPO) y por qué se ha convertido en un algoritmo RL dominante?",
          de: "Was ist Proximal Policy Optimization (PPO) und warum ist es zu einem dominanten RL-Algorithmus geworden?",
          nl: "Wat is proximal policy optimization (PPO) en waarom is het een dominant RL algoritme geworden?"
        },
        options: [
          { en: "Clips policy updates to prevent destructive large changes, balancing sample efficiency and stability for reliable training", es: "Recorta actualizaciones de política para prevenir cambios grandes destructivos, equilibrando eficiencia de muestra y estabilidad para entrenamiento confiable", de: "Clippt Policy-Updates um destruktive große Änderungen zu verhindern, balanciert Stichproben-Effizienz und Stabilität für zuverlässiges Training", nl: "Clipt policy updates om destructieve grote veranderingen te voorkomen, balanceert sample efficiëntie en stabiliteit voor betrouwbare training" },
          { en: "Optimizes policies by proximity to optimal solution", es: "Optimiza políticas por proximidad a solución óptima", de: "Optimiert Richtlinien durch Nähe zu optimaler Lösung", nl: "Optimaliseert policies door nabijheid tot optimale oplossing" },
          { en: "Uses proximal gradients for faster convergence", es: "Usa gradientes proximales para convergencia más rápida", de: "Verwendet proximale Gradienten für schnellere Konvergenz", nl: "Gebruikt proximale gradiënten voor snellere convergentie" },
          { en: "Approximately optimal policy search", es: "Búsqueda de política aproximadamente óptima", de: "Ungefähr optimale Richtliniensuche", nl: "Ongeveer optimale policy zoektocht" }
        ],
        correct: 0,
        explanation: {
          en: "PPO constrains policy updates by clipping the objective function to prevent overly large policy changes that could destabilize training. This simple modification to trust region methods achieves comparable performance to TRPO with first-order optimization, making it more practical. PPO's robustness, sample efficiency, and ease of implementation have made it the go-to algorithm for continuous control and has been used to train ChatGPT.",
          es: "PPO restringe actualizaciones de política recortando función objetivo para prevenir cambios de política excesivamente grandes que podrían desestabilizar entrenamiento. Esta modificación simple a métodos de región de confianza logra rendimiento comparable a TRPO con optimización de primer orden, haciéndolo más práctico. Robustez de PPO, eficiencia de muestra y facilidad de implementación lo han hecho el algoritmo preferido para control continuo y se ha usado para entrenar ChatGPT.",
          de: "PPO beschränkt Policy-Updates durch Clippen der Zielfunktion um übermäßig große Policy-Änderungen zu verhindern die Training destabilisieren könnten. Diese einfache Modifikation zu Trust-Region-Methoden erreicht vergleichbare Leistung zu TRPO mit Optimierung erster Ordnung, macht es praktischer. PPOs Robustheit, Stichproben-Effizienz und einfache Implementierung haben es zum bevorzugten Algorithmus für kontinuierliche Steuerung gemacht und wurde verwendet um ChatGPT zu trainieren.",
          nl: "PPO beperkt policy updates door de objectieve functie te clippen om te grote policy veranderingen te voorkomen die training konden destabiliseren. Deze eenvoudige modificatie van trust region methoden bereikt vergelijkbare prestaties als TRPO met eerste-orde optimalisatie, maakt het praktischer. PPO's robuustheid, sample efficiëntie en gemak van implementatie hebben het het go-to algoritme gemaakt voor continue controle en is gebruikt om ChatGPT te trainen."
        }
      },
      {
        question: {
          en: "What is model-based RL and how does it differ from model-free approaches in sample efficiency?",
          es: "¿Qué es RL basado en modelo y cómo difiere de enfoques sin modelo en eficiencia de muestra?",
          de: "Was ist modellbasiertes RL und wie unterscheidet es sich von modellfreien Ansätzen in Stichproben-Effizienz?",
          nl: "Wat is model-gebaseerde RL en hoe verschilt het van model-vrije benaderingen in sample efficiëntie?"
        },
        options: [
          { en: "Learns environment dynamics model for planning and simulation, achieving higher sample efficiency through imagined experience", es: "Aprende modelo de dinámica de entorno para planificación y simulación, logrando mayor eficiencia de muestra a través de experiencia imaginada", de: "Lernt Umgebungsdynamik-Modell für Planung und Simulation, erreicht höhere Stichproben-Effizienz durch imaginierte Erfahrung", nl: "Leert omgevingsdynamica model voor planning en simulatie, bereikt hogere sample efficiëntie door verbeelde ervaring" },
          { en: "Uses pre-trained models for RL tasks", es: "Usa modelos pre-entrenados para tareas RL", de: "Verwendet vortrainierte Modelle für RL-Aufgaben", nl: "Gebruikt voorgetrainde modellen voor RL taken" },
          { en: "Models the reward function explicitly", es: "Modela la función de recompensa explícitamente", de: "Modelliert die Belohnungsfunktion explizit", nl: "Modelleert de beloningsfunctie expliciet" },
          { en: "Based on statistical models only", es: "Basado solo en modelos estadísticos", de: "Nur auf statistischen Modellen basierend", nl: "Alleen gebaseerd op statistische modellen" }
        ],
        correct: 0,
        explanation: {
          en: "Model-based RL learns a model of environment dynamics (transition and reward functions), enabling planning and simulation of trajectories without real environment interaction. This dramatically improves sample efficiency compared to model-free methods (Q-learning, policy gradients) that learn directly from experience. However, model errors can accumulate, and modern approaches like MuZero and Dreamer combine model-based planning with model-free optimization.",
          es: "RL basado en modelo aprende un modelo de dinámica de entorno (funciones de transición y recompensa), habilitando planificación y simulación de trayectorias sin interacción real con entorno. Esto mejora dramáticamente eficiencia de muestra comparado con métodos sin modelo (Q-learning, gradientes de política) que aprenden directamente de experiencia. Sin embargo, errores de modelo pueden acumularse, y enfoques modernos como MuZero y Dreamer combinan planificación basada en modelo con optimización sin modelo.",
          de: "Modellbasiertes RL lernt ein Modell der Umgebungsdynamik (Übergangs- und Belohnungsfunktionen), ermöglicht Planung und Simulation von Trajektorien ohne echte Umgebungsinteraktion. Dies verbessert dramatisch Stichproben-Effizienz verglichen mit modellfreien Methoden (Q-Learning, Policy-Gradienten) die direkt aus Erfahrung lernen. Jedoch können Modellfehler sich akkumulieren, und moderne Ansätze wie MuZero und Dreamer kombinieren modellbasierte Planung mit modellfreier Optimierung.",
          nl: "Model-gebaseerde RL leert een model van omgevingsdynamica (transitie en beloningsfuncties), maakt planning en simulatie van trajecten mogelijk zonder echte omgevingsinteractie. Dit verbetert dramatisch sample efficiëntie vergeleken met model-vrije methoden (Q-learning, policy gradiënten) die direct leren van ervaring. Echter modelfouten kunnen accumuleren, en moderne benaderingen zoals MuZero en Dreamer combineren model-gebaseerde planning met model-vrije optimalisatie."
        }
      }
    ]
  };

  // Export for use in the quiz application
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level10;
  } else if (typeof window !== 'undefined') {
    window.level10 = level10;
  }
})();
