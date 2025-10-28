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
          { en: "No algorithm performs better than others across all possible problems, emphasizing the importance of domain-specific algorithm selection", es: "Ningún algoritmo funciona mejor que otros en todos los problemas posibles, enfatizando la importancia de selección de algoritmos específicos del dominio", de: "Kein Algorithmus funktioniert besser als andere über alle möglichen Probleme, betont die Wichtigkeit domänenspezifischer Algorithmusauswahl", nl: "Geen algoritme presteert beter dan anderen over alle mogelijke problemen, benadrukt het belang van domeinspecifieke algoritme selectie" },
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
          { en: "Framework using Kolmogorov complexity to balance model fit and complexity by preferring models with shortest total description", es: "Marco usando complejidad de Kolmogorov para equilibrar ajuste y complejidad del modelo prefiriendo modelos con descripción total más corta", de: "Framework das Kolmogorov-Komplexität verwendet um Modellanpassung und Komplexität zu balancieren durch Bevorzugung von Modellen mit kürzester Gesamtbeschreibung", nl: "Raamwerk dat Kolmogorov complexiteit gebruikt om modelfit en complexiteit te balanceren door modellen met kortste totale beschrijving te prefereren" },
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
          { en: "NP-hardness of many learning problems necessitates approximation algorithms and heuristics, with sample complexity bounds guiding data requirements", es: "NP-dureza de muchos problemas de aprendizaje necesita algoritmos de aproximación y heurísticas, con límites de complejidad de muestra guiando requerimientos de datos", de: "NP-Härte vieler Lernprobleme erfordert Approximationsalgorithmen und Heuristiken, mit Stichprobenkomplexitätsschranken die Datenanforderungen leiten", nl: "NP-hardheid van veel leerproblemen vereist benaderingsalgoritmes en heuristieken, met steekproefcomplexiteitsgrenzen die datavereisten leiden" },
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
