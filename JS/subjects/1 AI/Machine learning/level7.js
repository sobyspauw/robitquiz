// Machine Learning Quiz - Level 7: Advanced Statistical Methods and Time Series
(function() {
  const level7 = {
    name: {
      en: "Statistical ML & Time Series",
      es: "ML Estadístico y Series Temporales",
      de: "Statistisches ML & Zeitreihen",
      nl: "Statistisch ML & Tijdreeksen"
    },
    questions: [
      {
        question: {
          en: "What is the difference between frequentist and Bayesian approaches in machine learning?",
          es: "¿Cuál es la diferencia entre enfoques frecuentistas y bayesianos en machine learning?",
          de: "Was ist der Unterschied zwischen frequentistischen und bayesianischen Ansätzen im maschinellen Lernen?",
          nl: "Wat is het verschil tussen frequentistische en Bayesiaanse benaderingen in machine learning?"
        },
        options: [
          { en: "Frequentist treats parameters as fixed, Bayesian treats them as random variables with distributions", es: "Frecuentista trata parámetros como fijos, Bayesiano los trata como variables aleatorias con distribuciones", de: "Frequentist behandelt Parameter als fest, Bayesianisch behandelt sie als Zufallsvariablen mit Verteilungen", nl: "Frequentist behandelt parameters als vast, Bayesiaans behandelt ze als willekeurige variabelen met distributies" },
          { en: "Frequentist is faster than Bayesian", es: "Frecuentista es más rápido que Bayesiano", de: "Frequentist ist schneller als Bayesianisch", nl: "Frequentist is sneller dan Bayesiaans" },
          { en: "Bayesian requires more data than frequentist", es: "Bayesiano requiere más datos que frecuentista", de: "Bayesianisch benötigt mehr Daten als Frequentist", nl: "Bayesiaans vereist meer data dan frequentist" },
          { en: "Frequentist uses probabilities, Bayesian uses statistics", es: "Frecuentista usa probabilidades, Bayesiano usa estadísticas", de: "Frequentist verwendet Wahrscheinlichkeiten, Bayesianisch verwendet Statistiken", nl: "Frequentist gebruikt kansen, Bayesiaans gebruikt statistieken" }
        ],
        correct: 0,
        explanation: {
          en: "Frequentist methods treat model parameters as fixed unknown constants, while Bayesian methods treat parameters as random variables with prior distributions that are updated with observed data to form posterior distributions.",
          es: "Los métodos frecuentistas tratan los parámetros del modelo como constantes desconocidas fijas, mientras que los métodos bayesianos tratan los parámetros como variables aleatorias con distribuciones previas que se actualizan con datos observados para formar distribuciones posteriores.",
          de: "Frequentistische Methoden behandeln Modellparameter als feste unbekannte Konstanten, während bayesianische Methoden Parameter als Zufallsvariablen mit Vorab-Verteilungen behandeln, die mit beobachteten Daten aktualisiert werden, um Posterior-Verteilungen zu bilden.",
          nl: "Frequentistische methoden behandelen modelparameters als vaste onbekende constanten, terwijl Bayesiaanse methoden parameters behandelen als willekeurige variabelen met prior distributies die worden bijgewerkt met geobserveerde data om posterior distributies te vormen."
        }
      },
      {
        question: {
          en: "What is Principal Component Analysis (PCA) used for in machine learning?",
          es: "¿Para qué se usa el Análisis de Componentes Principales (PCA) en machine learning?",
          de: "Wofür wird die Hauptkomponentenanalyse (PCA) im maschinellen Lernen verwendet?",
          nl: "Waarvoor wordt Principal Component Analysis (PCA) gebruikt in machine learning?"
        },
        options: [
          { en: "Dimensionality reduction by finding directions of maximum variance", es: "Reducción de dimensionalidad encontrando direcciones de máxima varianza", de: "Dimensionalitätsreduktion durch Finden von Richtungen maximaler Varianz", nl: "Dimensionaliteitsreductie door richtingen van maximale variantie te vinden" },
          { en: "Finding the principal components of computer hardware", es: "Encontrar los componentes principales del hardware de computadora", de: "Die Hauptkomponenten der Computer-Hardware finden", nl: "De hoofdcomponenten van computerhardware vinden" },
          { en: "Analyzing the primary causes of model errors", es: "Analizar las causas primarias de errores del modelo", de: "Die primären Ursachen von Modellfehlern analysieren", nl: "De primaire oorzaken van modelfouten analyseren" },
          { en: "Selecting the most important features manually", es: "Seleccionar las características más importantes manualmente", de: "Die wichtigsten Merkmale manuell auswählen", nl: "De belangrijkste features handmatig selecteren" }
        ],
        correct: 0,
        explanation: {
          en: "PCA transforms high-dimensional data to a lower-dimensional space by finding orthogonal directions (principal components) that capture the maximum variance in the data, useful for visualization and reducing computational complexity.",
          es: "PCA transforma datos de alta dimensión a un espacio de menor dimensión encontrando direcciones ortogonales (componentes principales) que capturan la máxima varianza en los datos, útil para visualización y reducir complejidad computacional.",
          de: "PCA transformiert hochdimensionale Daten in einen niedrigerdimensionalen Raum durch Finden orthogonaler Richtungen (Hauptkomponenten), die die maximale Varianz in den Daten erfassen, nützlich für Visualisierung und Reduzierung der Rechenkomplexität.",
          nl: "PCA transformeert hoogdimensionale data naar een lagerdimensionale ruimte door orthogonale richtingen (hoofdcomponenten) te vinden die de maximale variantie in de data vastleggen, nuttig voor visualisatie en het verminderen van computationele complexiteit."
        }
      },
      {
        question: {
          en: "What is the purpose of the Akaike Information Criterion (AIC) in model selection?",
          es: "¿Cuál es el propósito del Criterio de Información de Akaike (AIC) en selección de modelos?",
          de: "Was ist der Zweck des Akaike-Informationskriteriums (AIC) bei der Modellauswahl?",
          nl: "Wat is het doel van het Akaike Information Criterion (AIC) in modelselectie?"
        },
        options: [
          { en: "Balance model complexity and goodness of fit to avoid overfitting", es: "Equilibrar complejidad del modelo y bondad de ajuste para evitar overfitting", de: "Modellkomplexität und Anpassungsgüte ausbalancieren um Overfitting zu vermeiden", nl: "Modelcomplexiteit en goodness of fit balanceren om overfitting te vermijden" },
          { en: "Measure the accuracy of individual predictions", es: "Medir la precisión de predicciones individuales", de: "Die Genauigkeit einzelner Vorhersagen messen", nl: "De nauwkeurigheid van individuele voorspellingen meten" },
          { en: "Calculate the computational complexity of algorithms", es: "Calcular la complejidad computacional de algoritmos", de: "Die Rechenkomplexität von Algorithmen berechnen", nl: "De computationele complexiteit van algoritmes berekenen" },
          { en: "Determine the optimal learning rate", es: "Determinar la tasa de aprendizaje óptima", de: "Die optimale Lernrate bestimmen", nl: "De optimale learning rate bepalen" }
        ],
        correct: 0,
        explanation: {
          en: "AIC penalizes model complexity while rewarding goodness of fit, helping select models that generalize well by trading off between underfitting and overfitting, calculated as 2k - 2ln(L) where k is parameters and L is likelihood.",
          es: "AIC penaliza la complejidad del modelo mientras recompensa la bondad de ajuste, ayudando a seleccionar modelos que generalicen bien intercambiando entre underfitting y overfitting, calculado como 2k - 2ln(L) donde k son parámetros y L es verosimilitud.",
          de: "AIC bestraft Modellkomplexität während es Anpassungsgüte belohnt, hilft bei der Auswahl von Modellen die gut generalisieren durch Abwägung zwischen Underfitting und Overfitting, berechnet als 2k - 2ln(L) wobei k Parameter und L Likelihood ist.",
          nl: "AIC straft modelcomplexiteit af terwijl het goodness of fit beloont, helpt bij het selecteren van modellen die goed generaliseren door af te wegen tussen underfitting en overfitting, berekend als 2k - 2ln(L) waarbij k parameters en L likelihood is."
        }
      },
      {
        question: {
          en: "What are Markov models and when are they useful in machine learning?",
          es: "¿Qué son los modelos de Markov y cuándo son útiles en machine learning?",
          de: "Was sind Markov-Modelle und wann sind sie nützlich im maschinellen Lernen?",
          nl: "Wat zijn Markov modellen en wanneer zijn ze nuttig in machine learning?"
        },
        options: [
          { en: "Models where future states depend only on current state, useful for sequential data", es: "Modelos donde estados futuros dependen solo del estado actual, útiles para datos secuenciales", de: "Modelle wo zukünftige Zustände nur vom aktuellen Zustand abhängen, nützlich für sequenzielle Daten", nl: "Modellen waarbij toekomstige toestanden alleen afhangen van de huidige toestand, nuttig voor sequentiële data" },
          { en: "Models named after scientist Markov for image processing", es: "Modelos nombrados por el científico Markov para procesamiento de imágenes", de: "Nach dem Wissenschaftler Markov benannte Modelle für Bildverarbeitung", nl: "Modellen genoemd naar wetenschapper Markov voor beeldverwerking" },
          { en: "Statistical models that require complete independence", es: "Modelos estadísticos que requieren independencia completa", de: "Statistische Modelle die vollständige Unabhängigkeit erfordern", nl: "Statistische modellen die volledige onafhankelijkheid vereisen" },
          { en: "Models that can predict any future event", es: "Modelos que pueden predecir cualquier evento futuro", de: "Modelle die jedes zukünftige Ereignis vorhersagen können", nl: "Modellen die elke toekomstige gebeurtenis kunnen voorspellen" }
        ],
        correct: 0,
        explanation: {
          en: "Markov models assume the Markov property: future states depend only on the current state, not the entire history. They're useful for modeling sequential data like speech recognition, natural language processing, and time series analysis.",
          es: "Los modelos de Markov asumen la propiedad de Markov: estados futuros dependen solo del estado actual, no de toda la historia. Son útiles para modelar datos secuenciales como reconocimiento de voz, procesamiento de lenguaje natural y análisis de series temporales.",
          de: "Markov-Modelle nehmen die Markov-Eigenschaft an: zukünftige Zustände hängen nur vom aktuellen Zustand ab, nicht von der gesamten Geschichte. Sie sind nützlich für die Modellierung sequenzieller Daten wie Spracherkennung, natürliche Sprachverarbeitung und Zeitreihenanalyse.",
          nl: "Markov modellen veronderstellen de Markov eigenschap: toekomstige toestanden hangen alleen af van de huidige toestand, niet van de hele geschiedenis. Ze zijn nuttig voor het modelleren van sequentiële data zoals spraakherkenning, natuurlijke taalverwerking en tijdreeksanalyse."
        }
      },
      {
        question: {
          en: "What is the difference between time series forecasting and cross-sectional analysis?",
          es: "¿Cuál es la diferencia entre pronóstico de series temporales y análisis transversal?",
          de: "Was ist der Unterschied zwischen Zeitreihen-Vorhersage und Querschnittsanalyse?",
          nl: "Wat is het verschil tussen tijdreeks voorspelling en cross-sectionele analyse?"
        },
        options: [
          { en: "Time series uses temporal order and trends, cross-sectional analyzes snapshot data at one time point", es: "Series temporales usa orden temporal y tendencias, transversal analiza datos de instantánea en un punto temporal", de: "Zeitreihen verwenden zeitliche Ordnung und Trends, Querschnitt analysiert Momentaufnahme-Daten zu einem Zeitpunkt", nl: "Tijdreeksen gebruiken temporele volgorde en trends, cross-sectioneel analyseert momentopname data op één tijdstip" },
          { en: "Time series is faster than cross-sectional analysis", es: "Series temporales es más rápido que análisis transversal", de: "Zeitreihen sind schneller als Querschnittsanalyse", nl: "Tijdreeksen zijn sneller dan cross-sectionele analyse" },
          { en: "Cross-sectional uses more advanced algorithms", es: "Transversal usa algoritmos más avanzados", de: "Querschnitt verwendet fortgeschrittenere Algorithmen", nl: "Cross-sectioneel gebruikt geavanceerdere algoritmes" },
          { en: "Time series only works with numerical data", es: "Series temporales solo funciona con datos numéricos", de: "Zeitreihen funktionieren nur mit numerischen Daten", nl: "Tijdreeksen werken alleen met numerieke data" }
        ],
        correct: 0,
        explanation: {
          en: "Time series forecasting leverages temporal patterns, seasonality, and trends in data collected over time to predict future values, while cross-sectional analysis examines relationships between variables at a single point in time across different entities.",
          es: "El pronóstico de series temporales aprovecha patrones temporales, estacionalidad y tendencias en datos recolectados a lo largo del tiempo para predecir valores futuros, mientras el análisis transversal examina relaciones entre variables en un solo punto temporal a través de diferentes entidades.",
          de: "Zeitreihen-Vorhersage nutzt zeitliche Muster, Saisonalität und Trends in über die Zeit gesammelten Daten um zukünftige Werte vorherzusagen, während Querschnittsanalyse Beziehungen zwischen Variablen zu einem einzigen Zeitpunkt über verschiedene Entitäten hinweg untersucht.",
          nl: "Tijdreeks voorspelling benut temporele patronen, seizoensgebondenheid en trends in data verzameld over tijd om toekomstige waarden te voorspellen, terwijl cross-sectionele analyse relaties tussen variabelen op één tijdstip over verschillende entiteiten onderzoekt."
        }
      },
      {
        question: {
          en: "What is the curse of dimensionality and how does it affect machine learning algorithms?",
          es: "¿Qué es la maldición de la dimensionalidad y cómo afecta a los algoritmos de machine learning?",
          de: "Was ist der Fluch der Dimensionalität und wie beeinflusst er maschinelle Lernalgorithmen?",
          nl: "Wat is de vloek van dimensionaliteit en hoe beïnvloedt het machine learning algoritmes?"
        },
        options: [
          { en: "Performance degradation in high-dimensional spaces due to sparse data and increased computational complexity", es: "Degradación del rendimiento en espacios de alta dimensión debido a datos dispersos y mayor complejidad computacional", de: "Leistungsverschlechterung in hochdimensionalen Räumen aufgrund spärlicher Daten und erhöhter rechnerischer Komplexität", nl: "Prestatievermindering in hoogdimensionale ruimtes door sparse data en verhoogde computationele complexiteit" },
          { en: "Inability to visualize data beyond three dimensions", es: "Incapacidad para visualizar datos más allá de tres dimensiones", de: "Unfähigkeit Daten jenseits von drei Dimensionen zu visualisieren", nl: "Onvermogen om data te visualiseren boven drie dimensies" },
          { en: "Linear increase in storage requirements", es: "Aumento lineal en requerimientos de almacenamiento", de: "Linearer Anstieg der Speicheranforderungen", nl: "Lineaire toename in opslagvereisten" },
          { en: "Limitation of algorithms to specific dimensions", es: "Limitación de algoritmos a dimensiones específicas", de: "Begrenzung von Algorithmen auf spezifische Dimensionen", nl: "Beperking van algoritmes tot specifieke dimensies" }
        ],
        correct: 0,
        explanation: {
          en: "The curse of dimensionality refers to problems that arise when working with high-dimensional data: data becomes increasingly sparse, distances become less meaningful, and many algorithms require exponentially more data to maintain performance, necessitating dimensionality reduction techniques.",
          es: "La maldición de la dimensionalidad se refiere a problemas que surgen al trabajar con datos de alta dimensión: los datos se vuelven cada vez más dispersos, las distancias se vuelven menos significativas, y muchos algoritmos requieren exponencialmente más datos para mantener el rendimiento, necesitando técnicas de reducción de dimensionalidad.",
          de: "Der Fluch der Dimensionalität bezieht sich auf Probleme die beim Arbeiten mit hochdimensionalen Daten entstehen: Daten werden zunehmend spärlich, Entfernungen werden weniger bedeutsam, und viele Algorithmen benötigen exponentiell mehr Daten um die Leistung zu erhalten, erfordern Dimensionalitätsreduktionstechniken.",
          nl: "De vloek van dimensionaliteit verwijst naar problemen die ontstaan bij het werken met hoogdimensionale data: data wordt steeds meer sparse, afstanden worden minder betekenisvol, en veel algoritmes hebben exponentieel meer data nodig om prestaties te behouden, vereisen dimensionaliteitsreductietechnieken."
        }
      },
      {
        question: {
          en: "What is Independent Component Analysis (ICA) and how does it differ from PCA?",
          es: "¿Qué es el Análisis de Componentes Independientes (ICA) y cómo difiere del PCA?",
          de: "Was ist Independent Component Analysis (ICA) und wie unterscheidet es sich von PCA?",
          nl: "Wat is Independent Component Analysis (ICA) en hoe verschilt het van PCA?"
        },
        options: [
          { en: "ICA finds statistically independent components while PCA finds orthogonal components with maximum variance", es: "ICA encuentra componentes estadísticamente independientes mientras PCA encuentra componentes ortogonales con máxima varianza", de: "ICA findet statistisch unabhängige Komponenten während PCA orthogonale Komponenten mit maximaler Varianz findet", nl: "ICA vindt statistisch onafhankelijke componenten terwijl PCA orthogonale componenten met maximale variantie vindt" },
          { en: "ICA is faster than PCA for dimensionality reduction", es: "ICA es más rápido que PCA para reducción de dimensionalidad", de: "ICA ist schneller als PCA für Dimensionalitätsreduktion", nl: "ICA is sneller dan PCA voor dimensionaliteitsreductie" },
          { en: "ICA works only with non-linear relationships", es: "ICA funciona solo con relaciones no lineales", de: "ICA funktioniert nur mit nichtlinearen Beziehungen", nl: "ICA werkt alleen met niet-lineaire relaties" },
          { en: "PCA requires labeled data while ICA doesn't", es: "PCA requiere datos etiquetados mientras ICA no", de: "PCA benötigt beschriftete Daten während ICA nicht", nl: "PCA vereist gelabelde data terwijl ICA dat niet doet" }
        ],
        correct: 0,
        explanation: {
          en: "ICA assumes that observed data is a linear mixture of independent source signals and tries to recover these independent components, useful for blind source separation. PCA finds orthogonal directions of maximum variance without considering statistical independence.",
          es: "ICA asume que los datos observados son una mezcla lineal de señales fuente independientes e intenta recuperar estos componentes independientes, útil para separación ciega de fuentes. PCA encuentra direcciones ortogonales de máxima varianza sin considerar independencia estadística.",
          de: "ICA nimmt an dass beobachtete Daten eine lineare Mischung unabhängiger Quellsignale sind und versucht diese unabhängigen Komponenten zu rekonstruieren, nützlich für blinde Quellentrennung. PCA findet orthogonale Richtungen maximaler Varianz ohne statistische Unabhängigkeit zu berücksichtigen.",
          nl: "ICA veronderstelt dat geobserveerde data een lineaire mix is van onafhankelijke bronsignalen en probeert deze onafhankelijke componenten te herstellen, nuttig voor blinde bronscheiding. PCA vindt orthogonale richtingen van maximale variantie zonder statistische onafhankelijkheid te overwegen."
        }
      },
      {
        question: {
          en: "What is feature selection and what are the main categories of feature selection methods?",
          es: "¿Qué es la selección de características y cuáles son las principales categorías de métodos de selección de características?",
          de: "Was ist Feature-Selektion und was sind die Hauptkategorien von Feature-Selektionsmethoden?",
          nl: "Wat is feature selectie en wat zijn de hoofdcategorieën van feature selectiemethoden?"
        },
        options: [
          { en: "Filter, wrapper, and embedded methods for selecting relevant features while removing irrelevant ones", es: "Métodos de filtro, envoltorio y embebidos para seleccionar características relevantes mientras se eliminan las irrelevantes", de: "Filter-, Wrapper- und eingebettete Methoden zur Auswahl relevanter Features während irrelevante entfernt werden", nl: "Filter, wrapper en embedded methoden voor het selecteren van relevante features terwijl irrelevante worden weggenomen" },
          { en: "Manual selection of features based on domain expertise", es: "Selección manual de características basada en experiencia del dominio", de: "Manuelle Auswahl von Features basierend auf Domänenexpertise", nl: "Handmatige selectie van features gebaseerd op domeinexpertise" },
          { en: "Random selection of subset of available features", es: "Selección aleatoria de subconjunto de características disponibles", de: "Zufällige Auswahl einer Teilmenge verfügbarer Features", nl: "Willekeurige selectie van subset van beschikbare features" },
          { en: "Selecting features with highest computational efficiency", es: "Seleccionar características con mayor eficiencia computacional", de: "Auswahl von Features mit höchster rechnerischer Effizienz", nl: "Selecteren van features met hoogste computationele efficiëntie" }
        ],
        correct: 0,
        explanation: {
          en: "Feature selection methods include: Filter methods (statistical tests, correlation), Wrapper methods (forward/backward selection using model performance), and Embedded methods (built into algorithm like Lasso). These reduce overfitting, improve interpretability, and decrease computational cost.",
          es: "Los métodos de selección de características incluyen: Métodos de filtro (pruebas estadísticas, correlación), Métodos de envoltorio (selección hacia adelante/atrás usando rendimiento del modelo), y Métodos embebidos (integrados en algoritmo como Lasso). Estos reducen overfitting, mejoran interpretabilidad y disminuyen costo computacional.",
          de: "Feature-Selektionsmethoden umfassen: Filter-Methoden (statistische Tests, Korrelation), Wrapper-Methoden (Vorwärts-/Rückwärtsselektion mit Modellleistung), und eingebettete Methoden (in Algorithmus integriert wie Lasso). Diese reduzieren Overfitting, verbessern Interpretierbarkeit und verringern Rechenkosten.",
          nl: "Feature selectiemethoden omvatten: Filter methoden (statistische tests, correlatie), Wrapper methoden (voorwaartse/achterwaartse selectie met modelprestaties), en Embedded methoden (ingebouwd in algoritme zoals Lasso). Deze verminderen overfitting, verbeteren interpreteerbaarheid en verlagen computationele kosten."
        }
      },
      {
        question: {
          en: "What is t-distributed Stochastic Neighbor Embedding (t-SNE) and when is it most effective?",
          es: "¿Qué es t-distributed Stochastic Neighbor Embedding (t-SNE) y cuándo es más efectivo?",
          de: "Was ist t-distributed Stochastic Neighbor Embedding (t-SNE) und wann ist es am effektivsten?",
          nl: "Wat is t-distributed Stochastic Neighbor Embedding (t-SNE) en wanneer is het meest effectief?"
        },
        options: [
          { en: "Non-linear dimensionality reduction excellent for visualization and preserving local neighborhood structure", es: "Reducción de dimensionalidad no lineal excelente para visualización y preservar estructura de vecindario local", de: "Nichtlineare Dimensionalitätsreduktion exzellent für Visualisierung und Erhaltung lokaler Nachbarschaftsstruktur", nl: "Niet-lineaire dimensionaliteitsreductie uitstekend voor visualisatie en behoud van lokale buurtstructuur" },
          { en: "Linear transformation for feature engineering", es: "Transformación lineal para ingeniería de características", de: "Lineare Transformation für Feature Engineering", nl: "Lineaire transformatie voor feature engineering" },
          { en: "Clustering algorithm for unsupervised learning", es: "Algoritmo de clustering para aprendizaje no supervisado", de: "Clustering-Algorithmus für unüberwachtes Lernen", nl: "Clustering algoritme voor ongesuperviseerd leren" },
          { en: "Feature selection technique for high-dimensional data", es: "Técnica de selección de características para datos de alta dimensión", de: "Feature-Selektionstechnik für hochdimensionale Daten", nl: "Feature selectietechniek voor hoogdimensionale data" }
        ],
        correct: 0,
        explanation: {
          en: "t-SNE is particularly effective for visualizing high-dimensional data in 2D/3D by preserving local similarities while allowing global structure to emerge. It's excellent for exploratory data analysis and cluster visualization but shouldn't be used for general dimensionality reduction due to its stochastic nature.",
          es: "t-SNE es particularmente efectivo para visualizar datos de alta dimensión en 2D/3D preservando similitudes locales mientras permite que emerja estructura global. Es excelente para análisis exploratorio de datos y visualización de clusters pero no debería usarse para reducción general de dimensionalidad debido a su naturaleza estocástica.",
          de: "t-SNE ist besonders effektiv für die Visualisierung hochdimensionaler Daten in 2D/3D durch Erhaltung lokaler Ähnlichkeiten während globale Struktur entstehen kann. Es ist exzellent für explorative Datenanalyse und Cluster-Visualisierung aber sollte nicht für allgemeine Dimensionalitätsreduktion verwendet werden aufgrund seiner stochastischen Natur.",
          nl: "t-SNE is bijzonder effectief voor het visualiseren van hoogdimensionale data in 2D/3D door lokale gelijkenissen te behouden terwijl globale structuur kan ontstaan. Het is uitstekend voor exploratieve data-analyse en cluster visualisatie maar zou niet gebruikt moeten worden voor algemene dimensionaliteitsreductie vanwege zijn stochastische aard."
        }
      },
      {
        question: {
          en: "What is UMAP (Uniform Manifold Approximation and Projection) and how does it compare to t-SNE?",
          es: "¿Qué es UMAP (Uniform Manifold Approximation and Projection) y cómo se compara con t-SNE?",
          de: "Was ist UMAP (Uniform Manifold Approximation and Projection) und wie vergleicht es sich mit t-SNE?",
          nl: "Wat is UMAP (Uniform Manifold Approximation and Projection) en hoe verhoudt het zich tot t-SNE?"
        },
        options: [
          { en: "Faster dimensionality reduction that better preserves global structure while maintaining local relationships", es: "Reducción de dimensionalidad más rápida que preserva mejor la estructura global mientras mantiene relaciones locales", de: "Schnellere Dimensionalitätsreduktion die globale Struktur besser erhält während lokale Beziehungen erhalten bleiben", nl: "Snellere dimensionaliteitsreductie die globale structuur beter behoudt terwijl lokale relaties behouden blijven" },
          { en: "Supervised version of t-SNE with labeled data", es: "Versión supervisada de t-SNE con datos etiquetados", de: "Überwachte Version von t-SNE mit beschrifteten Daten", nl: "Gesuperviseerde versie van t-SNE met gelabelde data" },
          { en: "Linear alternative to t-SNE for feature reduction", es: "Alternativa lineal a t-SNE para reducción de características", de: "Lineare Alternative zu t-SNE für Feature-Reduktion", nl: "Lineair alternatief voor t-SNE voor feature reductie" },
          { en: "Clustering algorithm that extends t-SNE capabilities", es: "Algoritmo de clustering que extiende capacidades de t-SNE", de: "Clustering-Algorithmus der t-SNE-Fähigkeiten erweitert", nl: "Clustering algoritme dat t-SNE mogelijkheden uitbreidt" }
        ],
        correct: 0,
        explanation: {
          en: "UMAP is based on mathematical foundations from manifold learning and topological data analysis, offering faster computation than t-SNE while better preserving both local and global structure. It's more suitable for general dimensionality reduction and scales better to larger datasets.",
          es: "UMAP se basa en fundamentos matemáticos del aprendizaje de variedades y análisis topológico de datos, ofreciendo computación más rápida que t-SNE mientras preserva mejor tanto estructura local como global. Es más adecuado para reducción general de dimensionalidad y escala mejor a conjuntos de datos más grandes.",
          de: "UMAP basiert auf mathematischen Grundlagen aus Mannigfaltigkeitslernen und topologischer Datenanalyse, bietet schnellere Berechnung als t-SNE während sowohl lokale als auch globale Struktur besser erhalten bleiben. Es ist geeigneter für allgemeine Dimensionalitätsreduktion und skaliert besser auf größere Datensätze.",
          nl: "UMAP is gebaseerd op wiskundige fundamenten van manifold learning en topologische data-analyse, biedt snellere berekening dan t-SNE terwijl zowel lokale als globale structuur beter behouden blijven. Het is geschikter voor algemene dimensionaliteitsreductie en schaalt beter naar grotere datasets."
        }
      },
      {
        question: {
          en: "What is factor analysis and how does it differ from PCA in terms of underlying assumptions?",
          es: "¿Qué es el análisis factorial y cómo difiere del PCA en términos de suposiciones subyacentes?",
          de: "Was ist Faktorenanalyse und wie unterscheidet sie sich von PCA bezüglich zugrundeliegender Annahmen?",
          nl: "Wat is factoranalyse en hoe verschilt het van PCA in termen van onderliggende aannames?"
        },
        options: [
          { en: "Factor analysis assumes latent factors generate observed variables, PCA is purely mathematical transformation", es: "Análisis factorial asume factores latentes generan variables observadas, PCA es transformación puramente matemática", de: "Faktorenanalyse nimmt an latente Faktoren generieren beobachtete Variablen, PCA ist rein mathematische Transformation", nl: "Factoranalyse veronderstelt latente factoren genereren geobserveerde variabelen, PCA is puur wiskundige transformatie" },
          { en: "Factor analysis is faster to compute than PCA", es: "Análisis factorial es más rápido de calcular que PCA", de: "Faktorenanalyse ist schneller zu berechnen als PCA", nl: "Factoranalyse is sneller te berekenen dan PCA" },
          { en: "PCA requires more assumptions about data distribution", es: "PCA requiere más suposiciones sobre distribución de datos", de: "PCA benötigt mehr Annahmen über Datenverteilung", nl: "PCA vereist meer aannames over dataverdeling" },
          { en: "Factor analysis works only with categorical variables", es: "Análisis factorial funciona solo con variables categóricas", de: "Faktorenanalyse funktioniert nur mit kategorialen Variablen", nl: "Factoranalyse werkt alleen met categorische variabelen" }
        ],
        correct: 0,
        explanation: {
          en: "Factor analysis posits that observed variables are linear combinations of unobserved latent factors plus error terms, seeking to explain correlations through these factors. PCA is a mathematical technique finding linear combinations that maximize variance without assuming causal latent variables.",
          es: "El análisis factorial postula que variables observadas son combinaciones lineales de factores latentes no observados más términos de error, buscando explicar correlaciones a través de estos factores. PCA es una técnica matemática que encuentra combinaciones lineales que maximizan varianza sin asumir variables latentes causales.",
          de: "Faktorenanalyse postuliert dass beobachtete Variablen lineare Kombinationen unbeobachteter latenter Faktoren plus Fehlerterme sind, versucht Korrelationen durch diese Faktoren zu erklären. PCA ist eine mathematische Technik die lineare Kombinationen findet die Varianz maximieren ohne kausale latente Variablen anzunehmen.",
          nl: "Factoranalyse stelt dat geobserveerde variabelen lineaire combinaties zijn van ongeobserveerde latente factoren plus fouttermen, zoekt correlaties te verklaren door deze factoren. PCA is een wiskundige techniek die lineaire combinaties vindt die variantie maximaliseren zonder causale latente variabelen aan te nemen."
        }
      },
      {
        question: {
          en: "What are mutual information and information gain, and how are they used in feature selection?",
          es: "¿Qué son la información mutua y la ganancia de información, y cómo se usan en selección de características?",
          de: "Was sind Mutual Information und Information Gain, und wie werden sie in Feature-Selektion verwendet?",
          nl: "Wat zijn mutual information en information gain, en hoe worden ze gebruikt in feature selectie?"
        },
        options: [
          { en: "Measures of statistical dependence between features and target variable for ranking feature relevance", es: "Medidas de dependencia estadística entre características y variable objetivo para clasificar relevancia de características", de: "Maße statistischer Abhängigkeit zwischen Features und Zielvariable zur Rangfolge der Feature-Relevanz", nl: "Maten van statistische afhankelijkheid tussen features en doelvariabele voor het rangschikken van feature relevantie" },
          { en: "Algorithms for automatically generating new features", es: "Algoritmos para generar automáticamente nuevas características", de: "Algorithmen zur automatischen Generierung neuer Features", nl: "Algoritmes voor het automatisch genereren van nieuwe features" },
          { en: "Metrics for measuring model prediction accuracy", es: "Métricas para medir precisión de predicción del modelo", de: "Metriken zur Messung der Modellvorhersagegenauigkeit", nl: "Metrieken voor het meten van modelvoorspellingsnauwkeurigheid" },
          { en: "Techniques for handling missing values in datasets", es: "Técnicas para manejar valores faltantes en conjuntos de datos", de: "Techniken zur Behandlung fehlender Werte in Datensätzen", nl: "Technieken voor het omgaan met missende waarden in datasets" }
        ],
        correct: 0,
        explanation: {
          en: "Mutual information measures the amount of information obtained about one random variable through observing another, quantifying non-linear relationships. Information gain measures reduction in entropy when splitting data by a feature, both serving as filter methods for feature selection.",
          es: "La información mutua mide la cantidad de información obtenida sobre una variable aleatoria observando otra, cuantificando relaciones no lineales. La ganancia de información mide reducción en entropía al dividir datos por una característica, ambas sirviendo como métodos de filtro para selección de características.",
          de: "Mutual Information misst die Menge an Information die über eine Zufallsvariable durch Beobachtung einer anderen erhalten wird, quantifiziert nichtlineare Beziehungen. Information Gain misst Entropie-Reduktion beim Teilen von Daten durch ein Feature, beide dienen als Filter-Methoden für Feature-Selektion.",
          nl: "Mutual information meet de hoeveelheid informatie verkregen over één willekeurige variabele door een andere te observeren, kwantificeert niet-lineaire relaties. Information gain meet entropie-reductie bij het splitsen van data door een feature, beide dienen als filter methoden voor feature selectie."
        }
      },
      {
        question: {
          en: "What is the difference between univariate and multivariate feature selection methods?",
          es: "¿Cuál es la diferencia entre métodos de selección de características univariados y multivariados?",
          de: "Was ist der Unterschied zwischen univariaten und multivariaten Feature-Selektionsmethoden?",
          nl: "Wat is het verschil tussen univariate en multivariate feature selectiemethoden?"
        },
        options: [
          { en: "Univariate evaluates features individually, multivariate considers feature interactions and dependencies", es: "Univariado evalúa características individualmente, multivariado considera interacciones y dependencias de características", de: "Univariat bewertet Features individuell, multivariat berücksichtigt Feature-Interaktionen und Abhängigkeiten", nl: "Univariaat evalueert features individueel, multivariaat overweegt feature interacties en afhankelijkheden" },
          { en: "Univariate is faster but multivariate is more accurate", es: "Univariado es más rápido pero multivariado es más preciso", de: "Univariat ist schneller aber multivariat ist genauer", nl: "Univariaat is sneller maar multivariaat is nauwkeuriger" },
          { en: "Univariate works with numerical data, multivariate with categorical", es: "Univariado funciona con datos numéricos, multivariado con categóricos", de: "Univariat funktioniert mit numerischen Daten, multivariat mit kategorialen", nl: "Univariaat werkt met numerieke data, multivariaat met categorische" },
          { en: "Multivariate requires labeled data while univariate doesn't", es: "Multivariado requiere datos etiquetados mientras univariado no", de: "Multivariat benötigt beschriftete Daten während univariat nicht", nl: "Multivariaat vereist gelabelde data terwijl univariaat dat niet doet" }
        ],
        correct: 0,
        explanation: {
          en: "Univariate methods evaluate each feature independently (like chi-square, ANOVA F-test) which is computationally efficient but misses feature interactions. Multivariate methods consider relationships between features, potentially finding better feature subsets but at higher computational cost.",
          es: "Métodos univariados evalúan cada característica independientemente (como chi-cuadrado, prueba F de ANOVA) que es computacionalmente eficiente pero pierde interacciones de características. Métodos multivariados consideran relaciones entre características, potencialmente encontrando mejores subconjuntos de características pero con mayor costo computacional.",
          de: "Univariate Methoden bewerten jedes Feature unabhängig (wie Chi-Quadrat, ANOVA F-Test) was rechnerisch effizient ist aber Feature-Interaktionen verpasst. Multivariate Methoden berücksichtigen Beziehungen zwischen Features, finden potentiell bessere Feature-Untergruppen aber mit höheren Rechenkosten.",
          nl: "Univariate methoden evalueren elke feature onafhankelijk (zoals chi-kwadraat, ANOVA F-test) wat computationeel efficiënt is maar feature interacties mist. Multivariate methoden overwegen relaties tussen features, vinden mogelijk betere feature subsets maar met hogere computationele kosten."
        }
      },
      {
        question: {
          en: "What is Linear Discriminant Analysis (LDA) and how does it differ from PCA for dimensionality reduction?",
          es: "¿Qué es el Análisis Discriminante Lineal (LDA) y cómo difiere del PCA para reducción de dimensionalidad?",
          de: "Was ist Linear Discriminant Analysis (LDA) und wie unterscheidet es sich von PCA für Dimensionalitätsreduktion?",
          nl: "Wat is Linear Discriminant Analysis (LDA) en hoe verschilt het van PCA voor dimensionaliteitsreductie?"
        },
        options: [
          { en: "LDA maximizes class separability while PCA maximizes variance, LDA is supervised while PCA is unsupervised", es: "LDA maximiza separabilidad de clases mientras PCA maximiza varianza, LDA es supervisado mientras PCA es no supervisado", de: "LDA maximiert Klassentrennung während PCA Varianz maximiert, LDA ist überwacht während PCA unüberwacht ist", nl: "LDA maximaliseert klassenscheiding terwijl PCA variantie maximaliseert, LDA is gesuperviseerd terwijl PCA ongesuperviseerd is" },
          { en: "LDA works only with categorical features", es: "LDA funciona solo con características categóricas", de: "LDA funktioniert nur mit kategorialen Features", nl: "LDA werkt alleen met categorische features" },
          { en: "PCA requires more computational resources than LDA", es: "PCA requiere más recursos computacionales que LDA", de: "PCA benötigt mehr Rechenressourcen als LDA", nl: "PCA vereist meer computationele middelen dan LDA" },
          { en: "LDA can only reduce to two dimensions", es: "LDA solo puede reducir a dos dimensiones", de: "LDA kann nur auf zwei Dimensionen reduzieren", nl: "LDA kan alleen reduceren tot twee dimensies" }
        ],
        correct: 0,
        explanation: {
          en: "LDA finds linear combinations of features that maximize the ratio of between-class to within-class variance, making it ideal for classification tasks. PCA finds directions of maximum variance regardless of class labels, making it better for unsupervised dimensionality reduction and data compression.",
          es: "LDA encuentra combinaciones lineales de características que maximizan la razón de varianza entre clases a varianza dentro de clases, haciéndolo ideal para tareas de clasificación. PCA encuentra direcciones de máxima varianza independientemente de etiquetas de clase, haciéndolo mejor para reducción de dimensionalidad no supervisada y compresión de datos.",
          de: "LDA findet lineare Kombinationen von Features die das Verhältnis von Zwischen-Klassen- zu Binnen-Klassen-Varianz maximieren, macht es ideal für Klassifikationsaufgaben. PCA findet Richtungen maximaler Varianz unabhängig von Klassenlabels, macht es besser für unüberwachte Dimensionalitätsreduktion und Datenkompression.",
          nl: "LDA vindt lineaire combinaties van features die de verhouding van tussen-klassen tot binnen-klassen variantie maximaliseren, maakt het ideaal voor classificatietaken. PCA vindt richtingen van maximale variantie ongeacht klasselabels, maakt het beter voor ongesuperviseerde dimensionaliteitsreductie en datacompressie."
        }
      },
      {
        question: {
          en: "What is the elbow method in the context of dimensionality reduction and feature selection?",
          es: "¿Qué es el método del codo en el contexto de reducción de dimensionalidad y selección de características?",
          de: "Was ist die Ellbogenmethode im Kontext von Dimensionalitätsreduktion und Feature-Selektion?",
          nl: "Wat is de elbow methode in de context van dimensionaliteitsreductie en feature selectie?"
        },
        options: [
          { en: "Technique for finding optimal number of components by plotting explained variance and identifying the elbow point", es: "Técnica para encontrar número óptimo de componentes graficando varianza explicada e identificando punto de codo", de: "Technik zur Findung optimaler Komponentenanzahl durch Plotten erklärter Varianz und Identifikation des Ellbogenpunkts", nl: "Techniek voor het vinden van optimaal aantal componenten door verklaarde variantie te plotten en het elbow punt te identificeren" },
          { en: "Method for detecting outliers in high-dimensional data", es: "Método para detectar valores atípicos en datos de alta dimensión", de: "Methode zur Erkennung von Ausreißern in hochdimensionalen Daten", nl: "Methode voor het detecteren van uitbijters in hoogdimensionale data" },
          { en: "Algorithm for non-linear feature transformation", es: "Algoritmo para transformación no lineal de características", de: "Algorithmus für nichtlineare Feature-Transformation", nl: "Algoritme voor niet-lineaire feature transformatie" },
          { en: "Technique for measuring feature correlation strength", es: "Técnica para medir fuerza de correlación de características", de: "Technik zur Messung der Feature-Korrelationsstärke", nl: "Techniek voor het meten van feature correlatiesterkte" }
        ],
        correct: 0,
        explanation: {
          en: "The elbow method plots cumulative explained variance against number of components in PCA or similar techniques. The 'elbow' is where adding more components yields diminishing returns in explained variance, helping determine the optimal number of dimensions to retain for effective dimensionality reduction.",
          es: "El método del codo grafica varianza explicada acumulativa contra número de componentes en PCA o técnicas similares. El 'codo' es donde agregar más componentes produce rendimientos decrecientes en varianza explicada, ayudando a determinar el número óptimo de dimensiones a retener para reducción efectiva de dimensionalidad.",
          de: "Die Ellbogenmethode plottet kumulative erklärte Varianz gegen Anzahl der Komponenten in PCA oder ähnlichen Techniken. Der 'Ellbogen' ist wo das Hinzufügen weiterer Komponenten abnehmende Erträge in erklärter Varianz bringt, hilft die optimale Anzahl zu behaltender Dimensionen für effektive Dimensionalitätsreduktion zu bestimmen.",
          nl: "De elbow methode plot cumulatieve verklaarde variantie tegen aantal componenten in PCA of vergelijkbare technieken. De 'elbow' is waar het toevoegen van meer componenten afnemende opbrengsten geeft in verklaarde variantie, helpt het optimale aantal dimensies te bepalen om te behouden voor effectieve dimensionaliteitsreductie."
        }
      },
      {
        question: {
          en: "What is recursive feature elimination (RFE) and how does it work?",
          es: "¿Qué es la eliminación recursiva de características (RFE) y cómo funciona?",
          de: "Was ist rekursive Feature-Elimination (RFE) und wie funktioniert sie?",
          nl: "Wat is recursive feature elimination (RFE) en hoe werkt het?"
        },
        options: [
          { en: "Iteratively trains model, ranks features by importance, removes least important, until optimal subset found", es: "Iterativamente entrena modelo, clasifica características por importancia, elimina menos importantes, hasta encontrar subconjunto óptimo", de: "Trainiert iterativ Modell, ordnet Features nach Wichtigkeit, entfernt unwichtigste, bis optimale Teilmenge gefunden", nl: "Traint iteratief model, rankt features naar belangrijkheid, verwijdert minst belangrijke, tot optimale subset gevonden" },
          { en: "Removes features with high correlation sequentially", es: "Elimina características con alta correlación secuencialmente", de: "Entfernt Features mit hoher Korrelation sequenziell", nl: "Verwijdert features met hoge correlatie sequentieel" },
          { en: "Eliminates features based on statistical significance tests", es: "Elimina características basado en pruebas de significancia estadística", de: "Eliminiert Features basierend auf statistischen Signifikanztests", nl: "Elimineert features gebaseerd op statistische significantietests" },
          { en: "Recursively applies PCA to reduce feature dimensions", es: "Aplica recursivamente PCA para reducir dimensiones de características", de: "Wendet rekursiv PCA an um Feature-Dimensionen zu reduzieren", nl: "Past recursief PCA toe om feature dimensies te verminderen" }
        ],
        correct: 0,
        explanation: {
          en: "RFE is a wrapper method that starts with all features, trains a model, ranks features by their importance (weights/coefficients), eliminates the least important feature(s), and repeats until reaching the desired number of features, using cross-validation to find the optimal subset.",
          es: "RFE es un método de envoltorio que comienza con todas las características, entrena un modelo, clasifica características por su importancia (pesos/coeficientes), elimina la(s) característica(s) menos importante(s), y repite hasta alcanzar el número deseado de características, usando validación cruzada para encontrar el subconjunto óptimo.",
          de: "RFE ist eine Wrapper-Methode die mit allen Features beginnt, ein Modell trainiert, Features nach ihrer Wichtigkeit (Gewichte/Koeffizienten) ordnet, das/die unwichtigste(n) Feature(s) eliminiert, und wiederholt bis die gewünschte Anzahl Features erreicht ist, verwendet Kreuzvalidierung um die optimale Teilmenge zu finden.",
          nl: "RFE is een wrapper methode die begint met alle features, een model traint, features rankt naar hun belangrijkheid (gewichten/coëfficiënten), de minst belangrijke feature(s) elimineert, en herhaalt tot het gewenste aantal features bereikt is, gebruikt cross-validatie om de optimale subset te vinden."
        }
      },
      {
        question: {
          en: "What is variance thresholding and when is it useful in feature selection?",
          es: "¿Qué es el umbral de varianza y cuándo es útil en selección de características?",
          de: "Was ist Varianz-Schwellwert und wann ist er nützlich in Feature-Selektion?",
          nl: "Wat is variance thresholding en wanneer is het nuttig in feature selectie?"
        },
        options: [
          { en: "Removes features with low variance as they provide little information for distinguishing samples", es: "Elimina características con baja varianza ya que proporcionan poca información para distinguir muestras", de: "Entfernt Features mit niedriger Varianz da sie wenig Information zur Unterscheidung von Stichproben bieten", nl: "Verwijdert features met lage variantie omdat ze weinig informatie bieden voor het onderscheiden van samples" },
          { en: "Sets threshold for acceptable prediction variance", es: "Establece umbral para varianza de predicción aceptable", de: "Setzt Schwellwert für akzeptable Vorhersagevarianz", nl: "Stelt drempel in voor acceptabele voorspellingsvariantie" },
          { en: "Measures threshold for feature correlation strength", es: "Mide umbral para fuerza de correlación de características", de: "Misst Schwellwert für Feature-Korrelationsstärke", nl: "Meet drempel voor feature correlatiesterkte" },
          { en: "Controls variance in cross-validation results", es: "Controla varianza en resultados de validación cruzada", de: "Kontrolliert Varianz in Kreuzvalidierungsergebnissen", nl: "Controleert variantie in cross-validatie resultaten" }
        ],
        correct: 0,
        explanation: {
          en: "Variance thresholding is a simple filter method that removes features with variance below a specified threshold. Features with very low variance (e.g., quasi-constant features) provide minimal information for machine learning models and can be safely removed to reduce dimensionality.",
          es: "El umbral de varianza es un método de filtro simple que elimina características con varianza por debajo de un umbral especificado. Características con varianza muy baja (ej., características cuasi-constantes) proporcionan información mínima para modelos de machine learning y pueden eliminarse con seguridad para reducir dimensionalidad.",
          de: "Varianz-Schwellwert ist eine einfache Filter-Methode die Features mit Varianz unter einem spezifizierten Schwellwert entfernt. Features mit sehr niedriger Varianz (z.B. quasi-konstante Features) bieten minimale Information für maschinelle Lernmodelle und können sicher entfernt werden um Dimensionalität zu reduzieren.",
          nl: "Variance thresholding is een eenvoudige filter methode die features verwijdert met variantie onder een gespecificeerde drempel. Features met zeer lage variantie (bijv. quasi-constante features) bieden minimale informatie voor machine learning modellen en kunnen veilig worden weggenomen om dimensionaliteit te verminderen."
        }
      },
      {
        question: {
          en: "What is kernel PCA and when would you use it instead of standard PCA?",
          es: "¿Qué es kernel PCA y cuándo lo usarías en lugar de PCA estándar?",
          de: "Was ist Kernel-PCA und wann würden Sie es anstelle von Standard-PCA verwenden?",
          nl: "Wat is kernel PCA en wanneer zou je het gebruiken in plaats van standaard PCA?"
        },
        options: [
          { en: "Non-linear dimensionality reduction using kernel trick to capture complex patterns that linear PCA cannot", es: "Reducción de dimensionalidad no lineal usando truco del kernel para capturar patrones complejos que PCA lineal no puede", de: "Nichtlineare Dimensionalitätsreduktion mit Kernel-Trick um komplexe Muster zu erfassen die lineares PCA nicht kann", nl: "Niet-lineaire dimensionaliteitsreductie met kernel trick om complexe patronen vast te leggen die lineaire PCA niet kan" },
          { en: "Faster computation than standard PCA", es: "Computación más rápida que PCA estándar", de: "Schnellere Berechnung als Standard-PCA", nl: "Snellere berekening dan standaard PCA" },
          { en: "Works only with categorical features", es: "Funciona solo con características categóricas", de: "Funktioniert nur mit kategorialen Features", nl: "Werkt alleen met categorische features" },
          { en: "Automatically determines optimal number of components", es: "Determina automáticamente número óptimo de componentes", de: "Bestimmt automatisch optimale Anzahl von Komponenten", nl: "Bepaalt automatisch optimaal aantal componenten" }
        ],
        correct: 0,
        explanation: {
          en: "Kernel PCA applies the kernel trick to perform PCA in a high-dimensional feature space without explicitly computing the transformation, enabling non-linear dimensionality reduction. It's useful when data has non-linear structure that standard PCA cannot capture effectively.",
          es: "Kernel PCA aplica el truco del kernel para realizar PCA en un espacio de características de alta dimensión sin calcular explícitamente la transformación, habilitando reducción de dimensionalidad no lineal. Es útil cuando datos tienen estructura no lineal que PCA estándar no puede capturar efectivamente.",
          de: "Kernel-PCA wendet den Kernel-Trick an um PCA in einem hochdimensionalen Feature-Raum durchzuführen ohne explizit die Transformation zu berechnen, ermöglicht nichtlineare Dimensionalitätsreduktion. Es ist nützlich wenn Daten nichtlineare Struktur haben die Standard-PCA nicht effektiv erfassen kann.",
          nl: "Kernel PCA past de kernel trick toe om PCA uit te voeren in een hoogdimensionale feature ruimte zonder expliciet de transformatie te berekenen, maakt niet-lineaire dimensionaliteitsreductie mogelijk. Het is nuttig wanneer data niet-lineaire structuur heeft die standaard PCA niet effectief kan vastleggen."
        }
      },
      {
        question: {
          en: "What is forward selection vs backward elimination in wrapper feature selection methods?",
          es: "¿Qué es selección hacia adelante vs eliminación hacia atrás en métodos de selección de características de envoltorio?",
          de: "Was ist Vorwärtsselektion vs Rückwärtselimination in Wrapper Feature-Selektionsmethoden?",
          nl: "Wat is forward selection vs backward elimination in wrapper feature selectiemethoden?"
        },
        options: [
          { en: "Forward starts empty and adds features, backward starts full and removes features, both guided by model performance", es: "Hacia adelante comienza vacío y agrega características, hacia atrás comienza completo y elimina características, ambos guiados por rendimiento del modelo", de: "Vorwärts beginnt leer und fügt Features hinzu, rückwärts beginnt voll und entfernt Features, beide geleitet von Modellleistung", nl: "Forward begint leeg en voegt features toe, backward begint vol en verwijdert features, beide geleid door modelprestaties" },
          { en: "Forward is faster than backward elimination", es: "Hacia adelante es más rápido que eliminación hacia atrás", de: "Vorwärts ist schneller als Rückwärtselimination", nl: "Forward is sneller dan backward elimination" },
          { en: "Backward works only with linear models", es: "Hacia atrás funciona solo con modelos lineales", de: "Rückwärts funktioniert nur mit linearen Modellen", nl: "Backward werkt alleen met lineaire modellen" },
          { en: "Forward selection requires labeled data", es: "Selección hacia adelante requiere datos etiquetados", de: "Vorwärtsselektion benötigt beschriftete Daten", nl: "Forward selection vereist gelabelde data" }
        ],
        correct: 0,
        explanation: {
          en: "Forward selection begins with an empty feature set and iteratively adds the feature that most improves model performance. Backward elimination starts with all features and iteratively removes the feature whose removal least hurts performance. Both use cross-validation to guide decisions.",
          es: "Selección hacia adelante comienza con conjunto vacío de características e iterativamente agrega la característica que más mejora rendimiento del modelo. Eliminación hacia atrás comienza con todas las características e iterativamente elimina la característica cuya eliminación menos daña el rendimiento. Ambos usan validación cruzada para guiar decisiones.",
          de: "Vorwärtsselektion beginnt mit einer leeren Feature-Menge und fügt iterativ das Feature hinzu das die Modellleistung am meisten verbessert. Rückwärtselimination beginnt mit allen Features und entfernt iterativ das Feature dessen Entfernung die Leistung am wenigsten schadet. Beide verwenden Kreuzvalidierung um Entscheidungen zu leiten.",
          nl: "Forward selection begint met een lege feature set en voegt iteratief de feature toe die modelprestaties het meest verbetert. Backward elimination begint met alle features en verwijdert iteratief de feature waarvan verwijdering prestaties het minst schaadt. Beide gebruiken cross-validatie om beslissingen te leiden."
        }
      },
      {
        question: {
          en: "What is the difference between feature scaling methods: standardization, normalization, and robust scaling?",
          es: "¿Cuál es la diferencia entre métodos de escalado de características: estandarización, normalización y escalado robusto?",
          de: "Was ist der Unterschied zwischen Feature-Skalierungsmethoden: Standardisierung, Normalisierung und robuste Skalierung?",
          nl: "Wat is het verschil tussen feature scaling methoden: standaardisatie, normalisatie en robuuste schaling?"
        },
        options: [
          { en: "Standardization uses mean/std, normalization scales to [0,1], robust scaling uses median/IQR for outlier resistance", es: "Estandarización usa media/desv_est, normalización escala a [0,1], escalado robusto usa mediana/RIC para resistencia a valores atípicos", de: "Standardisierung verwendet Mittelwert/Stdabw, Normalisierung skaliert auf [0,1], robuste Skalierung verwendet Median/IQR für Ausreißerresistenz", nl: "Standaardisatie gebruikt gemiddelde/std, normalisatie schaalt naar [0,1], robuuste schaling gebruikt mediaan/IQR voor uitbijterresistentie" },
          { en: "All three methods produce identical results", es: "Los tres métodos producen resultados idénticos", de: "Alle drei Methoden produzieren identische Ergebnisse", nl: "Alle drie methoden produceren identieke resultaten" },
          { en: "Normalization is only for categorical features", es: "Normalización es solo para características categóricas", de: "Normalisierung ist nur für kategoriale Features", nl: "Normalisatie is alleen voor categorische features" },
          { en: "Robust scaling requires the most computational resources", es: "Escalado robusto requiere más recursos computacionales", de: "Robuste Skalierung benötigt die meisten Rechenressourcen", nl: "Robuuste schaling vereist de meeste computationele middelen" }
        ],
        correct: 0,
        explanation: {
          en: "Standardization (z-score) centers data around mean with unit variance. Min-max normalization scales to [0,1] range. Robust scaling uses median and interquartile range, making it less sensitive to outliers. Choice depends on data distribution and algorithm requirements.",
          es: "Estandarización (z-score) centra datos alrededor de la media con varianza unitaria. Normalización min-max escala a rango [0,1]. Escalado robusto usa mediana y rango intercuartil, haciéndolo menos sensible a valores atípicos. La elección depende de distribución de datos y requerimientos del algoritmo.",
          de: "Standardisierung (z-score) zentriert Daten um Mittelwert mit Einheitsvarianz. Min-Max-Normalisierung skaliert auf [0,1] Bereich. Robuste Skalierung verwendet Median und Interquartilsbereich, macht es weniger empfindlich für Ausreißer. Wahl hängt von Datenverteilung und Algorithmusanforderungen ab.",
          nl: "Standaardisatie (z-score) centreert data rond gemiddelde met eenheidsvariantie. Min-max normalisatie schaalt naar [0,1] bereik. Robuuste schaling gebruikt mediaan en interkwartielafstand, maakt het minder gevoelig voor uitbijters. Keuze hangt af van dataverdeling en algoritmevereisten."
        }
      }
    ]
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level7;
  } else if (typeof window !== 'undefined') {
    window.level7 = level7;
  }
})();