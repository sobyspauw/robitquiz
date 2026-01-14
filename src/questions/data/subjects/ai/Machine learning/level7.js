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
          { en: "Forward starts empty and adds features, backward starts full and removes features, both guided by model performance", es: "Hacia adelante comienza vacío y agrega características, hacia atrás comienza completo y elimina, ambos guiados por rendimiento", de: "Vorwärts beginnt leer und fügt Features hinzu, rückwärts beginnt voll und entfernt Features, beide geleitet von Modellleistung", nl: "Forward begint leeg en voegt features toe, backward begint vol en verwijdert features, beide geleid door modelprestaties" },
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
      },
      {
        question: {
          en: "What is autoencoder and how is it used for dimensionality reduction?",
          es: "¿Qué es autoencoder y cómo se usa para reducción de dimensionalidad?",
          de: "Was ist ein Autoencoder und wie wird er für Dimensionalitätsreduktion verwendet?",
          nl: "Wat is een autoencoder en hoe wordt het gebruikt voor dimensionaliteitsreductie?"
        },
        options: [
          { en: "Neural network that learns compressed representation by encoding input to lower dimension then reconstructing it", es: "Red neuronal que aprende representación comprimida codificando entrada a menor dimensión luego reconstruyéndola", de: "Neuronales Netzwerk das komprimierte Repräsentation lernt durch Kodierung der Eingabe zu niedrigerer Dimension dann Rekonstruktion", nl: "Neuraal netwerk dat gecomprimeerde representatie leert door input te coderen naar lagere dimensie en dan te reconstrueren" },
          { en: "Automatic feature encoder for categorical variables", es: "Codificador automático de características para variables categóricas", de: "Automatischer Feature-Encoder für kategoriale Variablen", nl: "Automatische feature encoder voor categorische variabelen" },
          { en: "Self-learning algorithm that encodes data patterns", es: "Algoritmo auto-aprendiz que codifica patrones de datos", de: "Selbstlernender Algorithmus der Datenmuster kodiert", nl: "Zelf-lerend algoritme dat datapatronen codeert" },
          { en: "Linear transformation technique like PCA", es: "Técnica de transformación lineal como PCA", de: "Lineare Transformationstechnik wie PCA", nl: "Lineaire transformatietechniek zoals PCA" }
        ],
        correct: 0,
        explanation: {
          en: "Autoencoders are neural networks with a bottleneck layer forcing compression. The encoder maps input to lower-dimensional latent space, decoder reconstructs from this. By minimizing reconstruction error, it learns meaningful compressed representations, capturing non-linear patterns unlike PCA.",
          es: "Autoencoders son redes neuronales con capa de cuello de botella forzando compresión. El codificador mapea entrada a espacio latente de menor dimensión, decodificador reconstruye de esto. Minimizando error de reconstrucción, aprende representaciones comprimidas significativas, capturando patrones no lineales a diferencia de PCA.",
          de: "Autoencoder sind neuronale Netzwerke mit Flaschenhals-Schicht die Kompression erzwingt. Der Encoder bildet Eingabe auf niedrigerdimensionalen latenten Raum ab, Decoder rekonstruiert davon. Durch Minimierung des Rekonstruktionsfehlers lernt es bedeutungsvolle komprimierte Repräsentationen, erfasst nichtlineare Muster im Gegensatz zu PCA.",
          nl: "Autoencoders zijn neurale netwerken met een bottleneck laag die compressie afdwingt. De encoder mapt input naar lagerdimensionale latente ruimte, decoder reconstrueert hiervan. Door reconstructiefout te minimaliseren leert het betekenisvolle gecomprimeerde representaties, legt niet-lineaire patronen vast in tegenstelling tot PCA."
        }
      },
      {
        question: {
          en: "What is the bias-variance decomposition of prediction error?",
          es: "¿Qué es la descomposición sesgo-varianza del error de predicción?",
          de: "Was ist die Bias-Varianz-Zerlegung des Vorhersagefehlers?",
          nl: "Wat is de bias-variance decompositie van voorspellingsfout?"
        },
        options: [
          { en: "Error = Bias² + Variance + Irreducible Error, showing tradeoff between model simplicity and flexibility", es: "Error = Sesgo² + Varianza + Error Irreducible, mostrando tradeoff entre simplicidad y flexibilidad del modelo", de: "Fehler = Bias² + Varianz + Irreduzibler Fehler, zeigt Tradeoff zwischen Modellsimplizität und Flexibilität", nl: "Fout = Bias² + Variantie + Onvermijdbare Fout, toont tradeoff tussen modelsimpliciteit en flexibiliteit" },
          { en: "Splitting error into training and testing components", es: "Dividir error en componentes de entrenamiento y prueba", de: "Aufteilung des Fehlers in Training- und Testkomponenten", nl: "Splitsen van fout in trainings- en testcomponenten" },
          { en: "Measuring bias and variance separately in datasets", es: "Medir sesgo y varianza separadamente en conjuntos de datos", de: "Bias und Varianz separat in Datensätzen messen", nl: "Bias en variantie afzonderlijk meten in datasets" },
          { en: "Decomposing model into biased and variant parts", es: "Descomponer modelo en partes sesgadas y variantes", de: "Modell in voreingenommene und variante Teile zerlegen", nl: "Model ontleden in bevooroordeelde en variante delen" }
        ],
        correct: 0,
        explanation: {
          en: "Expected prediction error decomposes into three components: squared bias (error from wrong assumptions), variance (error from sensitivity to training data), and irreducible error (noise). This formalization explains why we need to balance model complexity.",
          es: "Error de predicción esperado se descompone en tres componentes: sesgo al cuadrado (error de suposiciones incorrectas), varianza (error de sensibilidad a datos de entrenamiento), y error irreducible (ruido). Esta formalización explica por qué necesitamos equilibrar complejidad del modelo.",
          de: "Erwarteter Vorhersagefehler zerlegt sich in drei Komponenten: quadratischer Bias (Fehler aus falschen Annahmen), Varianz (Fehler aus Empfindlichkeit gegenüber Trainingsdaten), und irreduzibler Fehler (Rauschen). Diese Formalisierung erklärt warum wir Modellkomplexität ausbalancieren müssen.",
          nl: "Verwachte voorspellingsfout ontleedt in drie componenten: gekwadrateerde bias (fout van verkeerde aannames), variantie (fout van gevoeligheid voor trainingsdata), en onvermijdbare fout (ruis). Deze formalisering verklaart waarom we modelcomplexiteit moeten balanceren."
        }
      },
      {
        question: {
          en: "What is the difference between parametric and non-parametric models?",
          es: "¿Cuál es la diferencia entre modelos paramétricos y no paramétricos?",
          de: "Was ist der Unterschied zwischen parametrischen und nicht-parametrischen Modellen?",
          nl: "Wat is het verschil tussen parametrische en niet-parametrische modellen?"
        },
        options: [
          { en: "Parametric assumes fixed parameter count, non-parametric parameters grow with data size", es: "Paramétrico asume conteo de parámetros fijo, no paramétrico parámetros crecen con tamaño de datos", de: "Parametrisch nimmt feste Parameteranzahl an, nicht-parametrisch Parameter wachsen mit Datengröße", nl: "Parametrisch veronderstelt vast aantal parameters, niet-parametrisch parameters groeien met datagrootte" },
          { en: "Parametric uses parameters, non-parametric doesn't use any parameters", es: "Paramétrico usa parámetros, no paramétrico no usa parámetros", de: "Parametrisch verwendet Parameter, nicht-parametrisch verwendet keine Parameter", nl: "Parametrisch gebruikt parameters, niet-parametrisch gebruikt geen parameters" },
          { en: "Non-parametric models are always more accurate", es: "Modelos no paramétricos siempre son más precisos", de: "Nicht-parametrische Modelle sind immer genauer", nl: "Niet-parametrische modellen zijn altijd nauwkeuriger" },
          { en: "Parametric models require more data to train", es: "Modelos paramétricos requieren más datos para entrenar", de: "Parametrische Modelle benötigen mehr Daten zum Trainieren", nl: "Parametrische modellen vereisen meer data om te trainen" }
        ],
        correct: 0,
        explanation: {
          en: "Parametric models (linear regression, logistic regression) have fixed parameters regardless of data size, making strong assumptions about data distribution. Non-parametric models (KNN, decision trees) have flexibility that grows with data, making fewer assumptions but requiring more data and computation.",
          es: "Modelos paramétricos (regresión lineal, regresión logística) tienen parámetros fijos independientemente del tamaño de datos, haciendo suposiciones fuertes sobre distribución de datos. Modelos no paramétricos (KNN, árboles de decisión) tienen flexibilidad que crece con datos, haciendo menos suposiciones pero requiriendo más datos y computación.",
          de: "Parametrische Modelle (lineare Regression, logistische Regression) haben feste Parameter unabhängig von Datengröße, machen starke Annahmen über Datenverteilung. Nicht-parametrische Modelle (KNN, Entscheidungsbäume) haben Flexibilität die mit Daten wächst, machen weniger Annahmen aber benötigen mehr Daten und Berechnung.",
          nl: "Parametrische modellen (lineaire regressie, logistische regressie) hebben vaste parameters ongeacht datagrootte, maken sterke aannames over dataverdeling. Niet-parametrische modellen (KNN, beslisbomen) hebben flexibiliteit die groeit met data, maken minder aannames maar vereisen meer data en berekening."
        }
      },
      {
        question: {
          en: "What is heteroscedasticity and why is it problematic in regression?",
          es: "¿Qué es heteroscedasticidad y por qué es problemática en regresión?",
          de: "Was ist Heteroskedastizität und warum ist sie in der Regression problematisch?",
          nl: "Wat is heteroscedasticiteit en waarom is het problematisch in regressie?"
        },
        options: [
          { en: "Non-constant variance of errors across predictions, violates assumptions and affects inference", es: "Varianza no constante de errores a través de predicciones, viola suposiciones y afecta inferencia", de: "Nicht-konstante Varianz von Fehlern über Vorhersagen, verletzt Annahmen und beeinflusst Inferenz", nl: "Niet-constante variantie van fouten over voorspellingen, schendt aannames en beïnvloedt inferentie" },
          { en: "Different feature scales causing computation issues", es: "Diferentes escalas de características causando problemas de computación", de: "Verschiedene Feature-Skalen verursachen Berechnungsprobleme", nl: "Verschillende feature schalen veroorzaken berekeningsproblemen" },
          { en: "Presence of outliers in the dataset", es: "Presencia de valores atípicos en el conjunto de datos", de: "Vorhandensein von Ausreißern im Datensatz", nl: "Aanwezigheid van uitbijters in de dataset" },
          { en: "Correlation between predictor variables", es: "Correlación entre variables predictoras", de: "Korrelation zwischen Prädiktorvariablen", nl: "Correlatie tussen predictorvariabelen" }
        ],
        correct: 0,
        explanation: {
          en: "Heteroscedasticity means error variance changes with predictor values (e.g., errors larger for high predictions). This violates ordinary least squares assumptions, making standard errors and confidence intervals unreliable. Solutions include weighted least squares or robust standard errors.",
          es: "Heteroscedasticidad significa que varianza de error cambia con valores predictores (ej., errores más grandes para predicciones altas). Esto viola suposiciones de mínimos cuadrados ordinarios, haciendo errores estándar e intervalos de confianza no confiables. Soluciones incluyen mínimos cuadrados ponderados o errores estándar robustos.",
          de: "Heteroskedastizität bedeutet Fehlervarianz ändert sich mit Prädiktorwerten (z.B. Fehler größer für hohe Vorhersagen). Dies verletzt gewöhnliche Kleinste-Quadrate-Annahmen, macht Standardfehler und Konfidenzintervalle unzuverlässig. Lösungen beinhalten gewichtete kleinste Quadrate oder robuste Standardfehler.",
          nl: "Heteroscedasticiteit betekent foutvariantie verandert met predictorwaarden (bijv. fouten groter voor hoge voorspellingen). Dit schendt ordinary least squares aannames, maakt standaardfouten en betrouwbaarheidsintervallen onbetrouwbaar. Oplossingen omvatten gewogen kleinste kwadraten of robuuste standaardfouten."
        }
      },
      {
        question: {
          en: "What is multicollinearity and how does it affect regression models?",
          es: "¿Qué es multicolinealidad y cómo afecta a modelos de regresión?",
          de: "Was ist Multikollinearität und wie beeinflusst sie Regressionsmodelle?",
          nl: "Wat is multicollineariteit en hoe beïnvloedt het regressiemodellen?"
        },
        options: [
          { en: "High correlation between predictors causing unstable coefficient estimates and inflated standard errors", es: "Alta correlación entre predictores causando estimaciones de coeficientes inestables y errores estándar inflados", de: "Hohe Korrelation zwischen Prädiktoren verursacht instabile Koeffizientenschätzungen und aufgeblasene Standardfehler", nl: "Hoge correlatie tussen predictors veroorzaakt instabiele coëfficiënt schattingen en opgeblazen standaardfouten" },
          { en: "Multiple output variables in regression", es: "Múltiples variables de salida en regresión", de: "Mehrere Ausgabevariablen in Regression", nl: "Meerdere output variabelen in regressie" },
          { en: "Non-linear relationships between variables", es: "Relaciones no lineales entre variables", de: "Nichtlineare Beziehungen zwischen Variablen", nl: "Niet-lineaire relaties tussen variabelen" },
          { en: "Different scales of predictor variables", es: "Diferentes escalas de variables predictoras", de: "Verschiedene Skalen von Prädiktorvariablen", nl: "Verschillende schalen van predictorvariabelen" }
        ],
        correct: 0,
        explanation: {
          en: "Multicollinearity occurs when predictors are highly correlated, making it difficult to determine individual variable effects. Symptoms include large coefficient changes with small data changes, high VIF (Variance Inflation Factor). Solutions: remove correlated features, use regularization (Ridge), or PCA.",
          es: "Multicolinealidad ocurre cuando predictores están altamente correlacionados, dificultando determinar efectos de variables individuales. Síntomas incluyen grandes cambios de coeficientes con pequeños cambios de datos, alto VIF (Factor de Inflación de Varianza). Soluciones: eliminar características correlacionadas, usar regularización (Ridge), o PCA.",
          de: "Multikollinearität tritt auf wenn Prädiktoren stark korreliert sind, erschwert Bestimmung individueller Variableneffekte. Symptome beinhalten große Koeffizientenänderungen bei kleinen Datenänderungen, hoher VIF (Variance Inflation Factor). Lösungen: korrelierte Features entfernen, Regularisierung (Ridge) verwenden, oder PCA.",
          nl: "Multicollineariteit treedt op wanneer predictors sterk gecorreleerd zijn, maakt het moeilijk individuele variabele effecten te bepalen. Symptomen omvatten grote coëfficiënt veranderingen bij kleine data veranderingen, hoge VIF (Variance Inflation Factor). Oplossingen: verwijder gecorreleerde features, gebruik regularisatie (Ridge), of PCA."
        }
      },
      {
        question: {
          en: "What is cross-entropy loss and when is it preferred over MSE?",
          es: "¿Qué es pérdida de entropía cruzada y cuándo se prefiere sobre MSE?",
          de: "Was ist Cross-Entropy Loss und wann wird es MSE vorgezogen?",
          nl: "Wat is cross-entropy loss en wanneer heeft het voorkeur boven MSE?"
        },
        options: [
          { en: "Logarithmic loss measuring probability distribution difference, better for classification than MSE", es: "Pérdida logarítmica midiendo diferencia de distribución de probabilidad, mejor para clasificación que MSE", de: "Logarithmischer Verlust misst Wahrscheinlichkeitsverteilungsunterschied, besser für Klassifikation als MSE", nl: "Logaritmisch verlies meet kansverdelingsverschil, beter voor classificatie dan MSE" },
          { en: "Loss function combining multiple entropy measures", es: "Función de pérdida combinando múltiples medidas de entropía", de: "Verlustfunktion kombiniert mehrere Entropie-Maße", nl: "Verliesfunctie combineert meerdere entropie metingen" },
          { en: "Cross-validation metric for model selection", es: "Métrica de validación cruzada para selección de modelo", de: "Kreuzvalidierungsmetrik für Modellauswahl", nl: "Cross-validatie metriek voor modelselectie" },
          { en: "Error measurement across different datasets", es: "Medición de error a través de diferentes conjuntos de datos", de: "Fehlermessung über verschiedene Datensätze", nl: "Foutmeting over verschillende datasets" }
        ],
        correct: 0,
        explanation: {
          en: "Cross-entropy loss measures divergence between predicted and true probability distributions: -Σ(y*log(ŷ)). For classification, it penalizes confident wrong predictions more than MSE, provides better gradients, and aligns with maximum likelihood principle. MSE can cause saturated gradients in classification.",
          es: "Pérdida de entropía cruzada mide divergencia entre distribuciones de probabilidad predichas y verdaderas: -Σ(y*log(ŷ)). Para clasificación, penaliza predicciones incorrectas confiadas más que MSE, proporciona mejores gradientes, y se alinea con principio de máxima verosimilitud. MSE puede causar gradientes saturados en clasificación.",
          de: "Cross-Entropy Loss misst Divergenz zwischen vorhergesagten und wahren Wahrscheinlichkeitsverteilungen: -Σ(y*log(ŷ)). Für Klassifikation bestraft es zuversichtliche falsche Vorhersagen mehr als MSE, liefert bessere Gradienten, und stimmt mit Maximum-Likelihood-Prinzip überein. MSE kann gesättigte Gradienten in Klassifikation verursachen.",
          nl: "Cross-entropy loss meet divergentie tussen voorspelde en ware kansverdelingen: -Σ(y*log(ŷ)). Voor classificatie straft het zelfverzekerde verkeerde voorspellingen harder dan MSE, biedt betere gradiënten, en stemt overeen met maximum likelihood principe. MSE kan verzadigde gradiënten veroorzaken in classificatie."
        }
      },
      {
        question: {
          en: "What is the difference between L1 and L2 regularization in terms of their geometric interpretation?",
          es: "¿Cuál es la diferencia entre regularización L1 y L2 en términos de su interpretación geométrica?",
          de: "Was ist der Unterschied zwischen L1- und L2-Regularisierung hinsichtlich ihrer geometrischen Interpretation?",
          nl: "Wat is het verschil tussen L1 en L2 regularisatie in termen van hun geometrische interpretatie?"
        },
        options: [
          { en: "L1 constraint is diamond-shaped promoting sparsity, L2 is circular promoting small weights", es: "Restricción L1 es en forma de diamante promoviendo dispersión, L2 es circular promoviendo pesos pequeños", de: "L1-Beschränkung ist rautenförmig fördert Sparsität, L2 ist kreisförmig fördert kleine Gewichte", nl: "L1 beperking is ruitvormig bevordert sparsity, L2 is cirkelvormig bevordert kleine gewichten" },
          { en: "L1 produces faster convergence than L2", es: "L1 produce convergencia más rápida que L2", de: "L1 erzeugt schnellere Konvergenz als L2", nl: "L1 produceert snellere convergentie dan L2" },
          { en: "L2 always performs better than L1", es: "L2 siempre funciona mejor que L1", de: "L2 funktioniert immer besser als L1", nl: "L2 presteert altijd beter dan L1" },
          { en: "L1 works only with linear models", es: "L1 funciona solo con modelos lineales", de: "L1 funktioniert nur mit linearen Modellen", nl: "L1 werkt alleen met lineaire modellen" }
        ],
        correct: 0,
        explanation: {
          en: "In weight space, L1 penalty (|w|) creates a diamond-shaped constraint region with sharp corners at axes, where optimal solution often lies, zeroing some weights (sparsity). L2 penalty (w²) creates circular region, optimal solution rarely on axes, shrinks all weights smoothly.",
          es: "En espacio de pesos, penalización L1 (|w|) crea región de restricción en forma de diamante con esquinas agudas en ejes, donde solución óptima a menudo yace, haciendo cero algunos pesos (dispersión). Penalización L2 (w²) crea región circular, solución óptima raramente en ejes, encoge todos los pesos suavemente.",
          de: "Im Gewichtsraum erzeugt L1-Strafe (|w|) eine rautenförmige Beschränkungsregion mit scharfen Ecken an Achsen, wo optimale Lösung oft liegt, macht einige Gewichte null (Sparsität). L2-Strafe (w²) erzeugt kreisförmige Region, optimale Lösung selten auf Achsen, schrumpft alle Gewichte glatt.",
          nl: "In gewichtsruimte creëert L1 penalty (|w|) een ruitvormig beperkingsgebied met scherpe hoeken op assen, waar optimale oplossing vaak ligt, maakt sommige gewichten nul (sparsity). L2 penalty (w²) creëert cirkelvormig gebied, optimale oplossing zelden op assen, krimpt alle gewichten glad."
        }
      },
      {
        question: {
          en: "What is bootstrapping and how is it used in machine learning?",
          es: "¿Qué es bootstrapping y cómo se usa en machine learning?",
          de: "Was ist Bootstrapping und wie wird es im maschinellen Lernen verwendet?",
          nl: "Wat is bootstrapping en hoe wordt het gebruikt in machine learning?"
        },
        options: [
          { en: "Resampling with replacement to estimate sampling distributions and uncertainty", es: "Remuestreo con reemplazo para estimar distribuciones de muestreo e incertidumbre", de: "Resampling mit Ersetzung um Stichprobenverteilungen und Unsicherheit zu schätzen", nl: "Hersampling met vervanging om steekproefverdelingen en onzekerheid te schatten" },
          { en: "Initial data loading process for model training", es: "Proceso inicial de carga de datos para entrenamiento de modelo", de: "Initialer Datenladeprozess für Modelltraining", nl: "Initieel data laadproces voor modeltraining" },
          { en: "Method for starting neural networks from scratch", es: "Método para iniciar redes neuronales desde cero", de: "Methode zum Starten neuronaler Netzwerke von Grund auf", nl: "Methode voor het starten van neurale netwerken vanaf nul" },
          { en: "Technique for cleaning and preprocessing data", es: "Técnica para limpiar y preprocesar datos", de: "Technik zum Reinigen und Vorverarbeiten von Daten", nl: "Techniek voor het schonen en voorverwerken van data" }
        ],
        correct: 0,
        explanation: {
          en: "Bootstrapping creates multiple datasets by randomly sampling original data with replacement, each same size as original. Used to estimate confidence intervals, construct bagging ensembles (Random Forest), and assess model stability. Each bootstrap sample typically contains ~63.2% unique original samples.",
          es: "Bootstrapping crea múltiples conjuntos de datos muestreando aleatoriamente datos originales con reemplazo, cada uno del mismo tamaño que original. Usado para estimar intervalos de confianza, construir ensembles bagging (Random Forest), y evaluar estabilidad del modelo. Cada muestra bootstrap típicamente contiene ~63.2% muestras originales únicas.",
          de: "Bootstrapping erstellt mehrere Datensätze durch zufälliges Sampling originaler Daten mit Ersetzung, jeder gleiche Größe wie Original. Verwendet um Konfidenzintervalle zu schätzen, Bagging-Ensembles zu konstruieren (Random Forest), und Modellstabilität zu bewerten. Jede Bootstrap-Stichprobe enthält typisch ~63.2% einzigartige Originalstichproben.",
          nl: "Bootstrapping creëert meerdere datasets door willekeurig originele data te samplen met vervanging, elk dezelfde grootte als origineel. Gebruikt om betrouwbaarheidsintervallen te schatten, bagging ensembles te construeren (Random Forest), en modelstabiliteit te beoordelen. Elke bootstrap sample bevat typisch ~63.2% unieke originele samples."
        }
      },
      {
        question: {
          en: "What is the purpose of stratified sampling in machine learning?",
          es: "¿Cuál es el propósito del muestreo estratificado en machine learning?",
          de: "Was ist der Zweck von stratifiziertem Sampling im maschinellen Lernen?",
          nl: "Wat is het doel van gestratificeerde sampling in machine learning?"
        },
        options: [
          { en: "Maintain class proportions when splitting data to ensure representative train/test sets", es: "Mantener proporciones de clase al dividir datos para asegurar conjuntos de entrenamiento/prueba representativos", de: "Klassenverhältnisse beim Aufteilen von Daten beibehalten um repräsentative Train/Test-Sets sicherzustellen", nl: "Klasseverhoudingen behouden bij splitsen van data om representatieve train/test sets te verzekeren" },
          { en: "Group similar samples together for efficient training", es: "Agrupar muestras similares juntas para entrenamiento eficiente", de: "Ähnliche Stichproben für effizientes Training gruppieren", nl: "Vergelijkbare samples groeperen voor efficiënte training" },
          { en: "Sample data from different layers of hierarchy", es: "Muestrear datos de diferentes capas de jerarquía", de: "Daten aus verschiedenen Hierarchieebenen sampeln", nl: "Data samplen van verschillende hiërarchie lagen" },
          { en: "Reduce computational cost by sampling fewer examples", es: "Reducir costo computacional muestreando menos ejemplos", de: "Rechenkosten durch Sampling weniger Beispiele reduzieren", nl: "Computationele kosten reduceren door minder voorbeelden te samplen" }
        ],
        correct: 0,
        explanation: {
          en: "Stratified sampling preserves the percentage of samples for each class when creating train/test splits, crucial for imbalanced datasets. Without stratification, random splits might under-represent minority classes in training or test sets, leading to biased evaluation and poor generalization.",
          es: "Muestreo estratificado preserva el porcentaje de muestras para cada clase al crear divisiones entrenamiento/prueba, crucial para conjuntos de datos desbalanceados. Sin estratificación, divisiones aleatorias podrían sub-representar clases minoritarias en conjuntos de entrenamiento o prueba, llevando a evaluación sesgada y pobre generalización.",
          de: "Stratifiziertes Sampling bewahrt den Prozentsatz der Stichproben für jede Klasse beim Erstellen von Train/Test-Splits, entscheidend für unausgeglichene Datensätze. Ohne Stratifizierung könnten zufällige Splits Minderheitsklassen in Training- oder Testsets unterrepräsentieren, führt zu voreingenommener Evaluation und schlechter Generalisierung.",
          nl: "Gestratificeerde sampling behoudt het percentage samples voor elke klasse bij het creëren van train/test splits, cruciaal voor ongebalanceerde datasets. Zonder stratificatie kunnen willekeurige splits minderheidsklassen ondervertegenwoordigen in trainings- of testsets, leidt tot bevooroordeelde evaluatie en slechte generalisatie."
        }
      },
      {
        question: {
          en: "What is the difference between correlation and causation in statistical analysis?",
          es: "¿Cuál es la diferencia entre correlación y causación en análisis estadístico?",
          de: "Was ist der Unterschied zwischen Korrelation und Kausalität in statistischer Analyse?",
          nl: "Wat is het verschil tussen correlatie en causatie in statistische analyse?"
        },
        options: [
          { en: "Correlation shows variables move together, causation shows one variable directly affects another", es: "Correlación muestra que variables se mueven juntas, causación muestra que una variable afecta directamente a otra", de: "Korrelation zeigt dass Variablen sich zusammen bewegen, Kausalität zeigt dass eine Variable eine andere direkt beeinflusst", nl: "Correlatie toont dat variabelen samen bewegen, causatie toont dat één variabele een andere direct beïnvloedt" },
          { en: "Correlation is stronger than causation", es: "Correlación es más fuerte que causación", de: "Korrelation ist stärker als Kausalität", nl: "Correlatie is sterker dan causatie" },
          { en: "Causation is easier to prove than correlation", es: "Causación es más fácil de probar que correlación", de: "Kausalität ist einfacher zu beweisen als Korrelation", nl: "Causatie is makkelijker te bewijzen dan correlatie" },
          { en: "They are the same concept in machine learning", es: "Son el mismo concepto en machine learning", de: "Sie sind dasselbe Konzept im maschinellen Lernen", nl: "Het zijn hetzelfde concept in machine learning" }
        ],
        correct: 0,
        explanation: {
          en: "Correlation measures statistical association between variables but doesn't imply causation. Spurious correlations exist (ice cream sales and drowning both correlate with summer). Establishing causation requires controlled experiments, temporal precedence, and ruling out confounding variables. ML models typically find correlations, not causal relationships.",
          es: "Correlación mide asociación estadística entre variables pero no implica causación. Existen correlaciones espurias (ventas de helado y ahogamiento ambos correlacionan con verano). Establecer causación requiere experimentos controlados, precedencia temporal, y descartar variables confusoras. Modelos ML típicamente encuentran correlaciones, no relaciones causales.",
          de: "Korrelation misst statistische Assoziation zwischen Variablen impliziert aber keine Kausalität. Scheinkorrelationen existieren (Eisverkauf und Ertrinken korrelieren beide mit Sommer). Kausalität etablieren erfordert kontrollierte Experimente, zeitliche Präzedenz, und Ausschluss von Störvariablen. ML-Modelle finden typisch Korrelationen, keine kausalen Beziehungen.",
          nl: "Correlatie meet statistische associatie tussen variabelen maar impliceert geen causatie. Valse correlaties bestaan (ijsverkoop en verdrinking correleren beide met zomer). Causatie vaststellen vereist gecontroleerde experimenten, temporele voorrang, en uitsluiten van verstorende variabelen. ML modellen vinden typisch correlaties, geen causale relaties."
        }
      },
      {
        question: {
          en: "What is feature engineering and why is it important?",
          es: "¿Qué es ingeniería de características y por qué es importante?",
          de: "Was ist Feature Engineering und warum ist es wichtig?",
          nl: "Wat is feature engineering en waarom is het belangrijk?"
        },
        options: [
          { en: "Creating new features from raw data to improve model performance through domain knowledge", es: "Crear nuevas características de datos crudos para mejorar rendimiento del modelo mediante conocimiento del dominio", de: "Neue Features aus Rohdaten erstellen um Modellleistung durch Domänenwissen zu verbessern", nl: "Nieuwe features creëren van ruwe data om modelprestaties te verbeteren door domeinkennis" },
          { en: "Automatically selecting best features from dataset", es: "Seleccionar automáticamente mejores características del conjunto de datos", de: "Automatisch beste Features aus Datensatz auswählen", nl: "Automatisch beste features selecteren uit dataset" },
          { en: "Engineering hardware for feature extraction", es: "Ingeniar hardware para extracción de características", de: "Hardware für Feature-Extraktion entwickeln", nl: "Hardware engineeren voor feature extractie" },
          { en: "Standardizing feature scales for training", es: "Estandarizar escalas de características para entrenamiento", de: "Feature-Skalen für Training standardisieren", nl: "Feature schalen standaardiseren voor training" }
        ],
        correct: 0,
        explanation: {
          en: "Feature engineering transforms raw data into features that better represent patterns for algorithms. Examples: creating polynomial features, extracting date components (day/month/year), aggregating statistics, binning continuous variables. Often more impactful than algorithm choice. Deep learning reduces manual feature engineering through representation learning.",
          es: "Ingeniería de características transforma datos crudos en características que mejor representan patrones para algoritmos. Ejemplos: crear características polinomiales, extraer componentes de fecha (día/mes/año), agregar estadísticas, agrupar variables continuas. A menudo más impactante que elección de algoritmo. Deep learning reduce ingeniería manual de características mediante aprendizaje de representación.",
          de: "Feature Engineering transformiert Rohdaten in Features die Muster besser für Algorithmen repräsentieren. Beispiele: polynomiale Features erstellen, Datumskomponenten extrahieren (Tag/Monat/Jahr), Statistiken aggregieren, kontinuierliche Variablen binnen. Oft wirkungsvoller als Algorithmuswahl. Deep Learning reduziert manuelles Feature Engineering durch Repräsentationslernen.",
          nl: "Feature engineering transformeert ruwe data naar features die patronen beter vertegenwoordigen voor algoritmes. Voorbeelden: polynomiale features creëren, datum componenten extraheren (dag/maand/jaar), statistieken aggregeren, continue variabelen binnen. Vaak impactvoller dan algoritme keuze. Deep learning vermindert handmatige feature engineering door representatie leren."
        }
      },
      {
        question: {
          en: "What is the purpose of log transformation in feature preprocessing?",
          es: "¿Cuál es el propósito de la transformación logarítmica en preprocesamiento de características?",
          de: "Was ist der Zweck der logarithmischen Transformation in Feature-Vorverarbeitung?",
          nl: "Wat is het doel van log transformatie in feature voorverwerking?"
        },
        options: [
          { en: "Handle skewed distributions and reduce impact of outliers by compressing large values", es: "Manejar distribuciones sesgadas y reducir impacto de valores atípicos comprimiendo valores grandes", de: "Schiefe Verteilungen behandeln und Auswirkung von Ausreißern reduzieren durch Kompression großer Werte", nl: "Scheefverdelingen behandelen en impact van uitbijters reduceren door grote waarden te comprimeren" },
          { en: "Increase computational speed of algorithms", es: "Aumentar velocidad computacional de algoritmos", de: "Rechengeschwindigkeit von Algorithmen erhöhen", nl: "Computationele snelheid van algoritmes verhogen" },
          { en: "Convert categorical features to numerical", es: "Convertir características categóricas a numéricas", de: "Kategoriale Features in numerische umwandeln", nl: "Categorische features converteren naar numeriek" },
          { en: "Normalize features to standard scale", es: "Normalizar características a escala estándar", de: "Features auf Standardskala normalisieren", nl: "Features normaliseren naar standaardschaal" }
        ],
        correct: 0,
        explanation: {
          en: "Log transformation (log(x) or log(1+x)) is useful for right-skewed data with exponential growth patterns. It compresses large values more than small ones, reducing outlier impact, making distributions more normal, and stabilizing variance. Common for income, population, web traffic data.",
          es: "Transformación logarítmica (log(x) o log(1+x)) es útil para datos sesgados a la derecha con patrones de crecimiento exponencial. Comprime valores grandes más que pequeños, reduciendo impacto de valores atípicos, haciendo distribuciones más normales, y estabilizando varianza. Común para ingresos, población, datos de tráfico web.",
          de: "Logarithmische Transformation (log(x) oder log(1+x)) ist nützlich für rechtsschief verteilte Daten mit exponentiellen Wachstumsmustern. Es komprimiert große Werte mehr als kleine, reduziert Ausreißerauswirkung, macht Verteilungen normaler, und stabilisiert Varianz. Üblich für Einkommens-, Bevölkerungs-, Webverkehrsdaten.",
          nl: "Log transformatie (log(x) of log(1+x)) is nuttig voor rechts-scheef verdeelde data met exponentiële groeipatronen. Het comprimeert grote waarden meer dan kleine, vermindert uitbijter impact, maakt verdelingen normaler, en stabiliseert variantie. Gebruikelijk voor inkomens-, bevolkings-, webverkeer data."
        }
      },
      {
        question: {
          en: "What is the difference between missing at random (MAR) and missing completely at random (MCAR)?",
          es: "¿Cuál es la diferencia entre faltante al azar (MAR) y faltante completamente al azar (MCAR)?",
          de: "Was ist der Unterschied zwischen Missing at Random (MAR) und Missing Completely at Random (MCAR)?",
          nl: "Wat is het verschil tussen missing at random (MAR) en missing completely at random (MCAR)?"
        },
        options: [
          { en: "MCAR missingness unrelated to any data, MAR missingness related to observed but not missing data", es: "Ausencia MCAR no relacionada con ningún dato, ausencia MAR relacionada con datos observados pero no datos faltantes", de: "MCAR-Fehlwerte nicht mit Daten verbunden, MAR-Fehlwerte mit beobachteten aber nicht fehlenden Daten verbunden", nl: "MCAR missingness ongerelateerd aan data, MAR missingness gerelateerd aan geobserveerde maar niet missende data" },
          { en: "MAR is more common than MCAR in practice", es: "MAR es más común que MCAR en práctica", de: "MAR ist in der Praxis häufiger als MCAR", nl: "MAR is gebruikelijker dan MCAR in praktijk" },
          { en: "MCAR requires imputation while MAR doesn't", es: "MCAR requiere imputación mientras MAR no", de: "MCAR benötigt Imputation während MAR nicht", nl: "MCAR vereist imputatie terwijl MAR dat niet doet" },
          { en: "They are the same type of missingness", es: "Son el mismo tipo de ausencia", de: "Sie sind derselbe Typ von Fehlwerten", nl: "Het zijn hetzelfde type missingness" }
        ],
        correct: 0,
        explanation: {
          en: "MCAR means missingness probability is same for all cases (completely random). MAR means missingness depends on observed variables but not the missing values themselves (e.g., men less likely to report weight, but missingness doesn't depend on actual weight). MNAR (Missing Not at Random) means missingness depends on the missing values.",
          es: "MCAR significa que probabilidad de ausencia es igual para todos casos (completamente aleatorio). MAR significa que ausencia depende de variables observadas pero no de valores faltantes mismos (ej., hombres menos propensos a reportar peso, pero ausencia no depende de peso real). MNAR (Missing Not at Random) significa que ausencia depende de valores faltantes.",
          de: "MCAR bedeutet Fehlwahrscheinlichkeit ist gleich für alle Fälle (vollständig zufällig). MAR bedeutet Fehlwerte hängen von beobachteten Variablen ab aber nicht von den fehlenden Werten selbst (z.B. Männer berichten Gewicht weniger wahrscheinlich, aber Fehlwerte hängen nicht von tatsächlichem Gewicht ab). MNAR (Missing Not at Random) bedeutet Fehlwerte hängen von fehlenden Werten ab.",
          nl: "MCAR betekent missingness kans is gelijk voor alle gevallen (volledig willekeurig). MAR betekent missingness hangt af van geobserveerde variabelen maar niet van de missende waarden zelf (bijv. mannen rapporteren gewicht minder waarschijnlijk, maar missingness hangt niet af van werkelijk gewicht). MNAR (Missing Not at Random) betekent missingness hangt af van missende waarden."
        }
      },
      {
        question: {
          en: "What are common imputation strategies for missing data?",
          es: "¿Cuáles son estrategias comunes de imputación para datos faltantes?",
          de: "Was sind gängige Imputationsstrategien für fehlende Daten?",
          nl: "Wat zijn veelvoorkomende imputatiestrategieën voor missende data?"
        },
        options: [
          { en: "Mean/median/mode imputation, KNN imputation, MICE (multiple imputation), or model-based imputation", es: "Imputación media/mediana/moda, imputación KNN, MICE (imputación múltiple), o imputación basada en modelo", de: "Mittelwert/Median/Modus-Imputation, KNN-Imputation, MICE (multiple Imputation), oder modellbasierte Imputation", nl: "Gemiddelde/mediaan/modus imputatie, KNN imputatie, MICE (multiple imputation), of model-gebaseerde imputatie" },
          { en: "Always delete rows with missing values", es: "Siempre eliminar filas con valores faltantes", de: "Zeilen mit fehlenden Werten immer löschen", nl: "Altijd rijen met missende waarden verwijderen" },
          { en: "Replace all missing values with zeros", es: "Reemplazar todos valores faltantes con ceros", de: "Alle fehlenden Werte durch Nullen ersetzen", nl: "Alle missende waarden vervangen met nullen" },
          { en: "Ignore missing values during training", es: "Ignorar valores faltantes durante entrenamiento", de: "Fehlende Werte während Training ignorieren", nl: "Missende waarden negeren tijdens training" }
        ],
        correct: 0,
        explanation: {
          en: "Simple methods: mean/median (numerical), mode (categorical). KNN uses similar samples. MICE (Multivariate Imputation by Chained Equations) iteratively models each feature. Model-based uses predictive models. Choice depends on data type, missingness mechanism, and amount missing. Deletion only suitable for MCAR with little missing data.",
          es: "Métodos simples: media/mediana (numérico), moda (categórico). KNN usa muestras similares. MICE (Imputación Multivariada por Ecuaciones Encadenadas) modela iterativamente cada característica. Basado en modelo usa modelos predictivos. Elección depende de tipo de datos, mecanismo de ausencia, y cantidad faltante. Eliminación solo adecuada para MCAR con pocos datos faltantes.",
          de: "Einfache Methoden: Mittelwert/Median (numerisch), Modus (kategorial). KNN verwendet ähnliche Stichproben. MICE (Multivariate Imputation by Chained Equations) modelliert iterativ jedes Feature. Modellbasiert verwendet prädiktive Modelle. Wahl hängt von Datentyp, Fehlmechanismus und fehlender Menge ab. Löschung nur geeignet für MCAR mit wenig fehlenden Daten.",
          nl: "Eenvoudige methoden: gemiddelde/mediaan (numeriek), modus (categorisch). KNN gebruikt vergelijkbare samples. MICE (Multivariate Imputation by Chained Equations) modelleert iteratief elke feature. Model-gebaseerd gebruikt predictieve modellen. Keuze hangt af van datatype, missingness mechanisme en hoeveelheid missend. Verwijdering alleen geschikt voor MCAR met weinig missende data."
        }
      },
      {
        question: {
          en: "What is one-hot encoding and when should you use it?",
          es: "¿Qué es codificación one-hot y cuándo deberías usarla?",
          de: "Was ist One-Hot-Encoding und wann sollten Sie es verwenden?",
          nl: "Wat is one-hot encoding en wanneer zou je het gebruiken?"
        },
        options: [
          { en: "Creates binary columns for each category value, use for nominal categorical features without ordinal relationship", es: "Crea columnas binarias para cada valor de categoría, usar para características categóricas nominales sin relación ordinal", de: "Erstellt binäre Spalten für jeden Kategoriewert, verwenden für nominale kategoriale Features ohne ordinale Beziehung", nl: "Creëert binaire kolommen voor elke categoriewaarde, gebruik voor nominale categorische features zonder ordinale relatie" },
          { en: "Assigns sequential numbers to categories", es: "Asigna números secuenciales a categorías", de: "Weist Kategorien sequenzielle Nummern zu", nl: "Wijst sequentiële nummers toe aan categorieën" },
          { en: "Only use for numerical features", es: "Solo usar para características numéricas", de: "Nur für numerische Features verwenden", nl: "Alleen gebruiken voor numerieke features" },
          { en: "Reduces dimensionality of categorical features", es: "Reduce dimensionalidad de características categóricas", de: "Reduziert Dimensionalität kategorialer Features", nl: "Vermindert dimensionaliteit van categorische features" }
        ],
        correct: 0,
        explanation: {
          en: "One-hot encoding transforms categorical variable with n categories into n binary columns, one per category. Avoids imposing artificial ordering that label encoding creates. Use for nominal categories (color: red/blue/green). For high cardinality, consider target encoding or embeddings. Drop one column to avoid multicollinearity (dummy variable trap).",
          es: "Codificación one-hot transforma variable categórica con n categorías en n columnas binarias, una por categoría. Evita imponer orden artificial que crea codificación de etiquetas. Usar para categorías nominales (color: rojo/azul/verde). Para alta cardinalidad, considerar codificación objetivo o embeddings. Eliminar una columna para evitar multicolinealidad (trampa de variable ficticia).",
          de: "One-Hot-Encoding transformiert kategoriale Variable mit n Kategorien in n binäre Spalten, eine pro Kategorie. Vermeidet künstliche Ordnung die Label-Encoding erzeugt. Verwenden für nominale Kategorien (Farbe: rot/blau/grün). Für hohe Kardinalität Target-Encoding oder Embeddings erwägen. Eine Spalte entfernen um Multikollinearität zu vermeiden (Dummy-Variable-Falle).",
          nl: "One-hot encoding transformeert categorische variabele met n categorieën naar n binaire kolommen, één per categorie. Vermijdt kunstmatige ordening die label encoding creëert. Gebruik voor nominale categorieën (kleur: rood/blauw/groen). Voor hoge cardinaliteit overwegen target encoding of embeddings. Drop één kolom om multicollineariteit te vermijden (dummy variable trap)."
        }
      },
      {
        question: {
          en: "What is target encoding and what are its risks?",
          es: "¿Qué es codificación objetivo y cuáles son sus riesgos?",
          de: "Was ist Target-Encoding und was sind seine Risiken?",
          nl: "Wat is target encoding en wat zijn de risico's?"
        },
        options: [
          { en: "Replace categories with target variable statistics, risks data leakage and overfitting if not done carefully", es: "Reemplazar categorías con estadísticas de variable objetivo, riesgos de filtración de datos y overfitting si no se hace cuidadosamente", de: "Kategorien durch Zielvariablen-Statistiken ersetzen, Risiken von Datenleckage und Overfitting wenn nicht sorgfältig durchgeführt", nl: "Vervang categorieën met doelvariabele statistieken, risico's van data leakage en overfitting als niet zorgvuldig gedaan" },
          { en: "Encoding scheme that targets specific features", es: "Esquema de codificación que apunta a características específicas", de: "Kodierungsschema das spezifische Features anvisiert", nl: "Coderingsschema dat specifieke features richt" },
          { en: "Always better than one-hot encoding", es: "Siempre mejor que codificación one-hot", de: "Immer besser als One-Hot-Encoding", nl: "Altijd beter dan one-hot encoding" },
          { en: "Used only for binary classification", es: "Usado solo para clasificación binaria", de: "Nur für binäre Klassifikation verwendet", nl: "Alleen gebruikt voor binaire classificatie" }
        ],
        correct: 0,
        explanation: {
          en: "Target encoding replaces categorical values with mean of target variable for that category. Effective for high-cardinality features but prone to overfitting and leakage. Mitigate by: using k-fold target encoding, adding smoothing, computing on training set only, adding noise. Alternative: leave-one-out encoding.",
          es: "Codificación objetivo reemplaza valores categóricos con media de variable objetivo para esa categoría. Efectiva para características de alta cardinalidad pero propensa a overfitting y filtración. Mitigar: usando codificación objetivo k-fold, agregando suavizado, computando solo en conjunto de entrenamiento, agregando ruido. Alternativa: codificación leave-one-out.",
          de: "Target-Encoding ersetzt kategoriale Werte mit Mittelwert der Zielvariable für diese Kategorie. Effektiv für hochkardiale Features aber anfällig für Overfitting und Leckage. Mildern durch: k-fold Target-Encoding verwenden, Glättung hinzufügen, nur auf Trainingsset berechnen, Rauschen hinzufügen. Alternative: Leave-One-Out-Encoding.",
          nl: "Target encoding vervangt categorische waarden met gemiddelde van doelvariabele voor die categorie. Effectief voor hoge-cardinaliteit features maar vatbaar voor overfitting en leakage. Verzachten door: k-fold target encoding gebruiken, smoothing toevoegen, alleen op trainingsset berekenen, ruis toevoegen. Alternatief: leave-one-out encoding."
        }
      },
      {
        question: {
          en: "What is the purpose of polynomial features in regression?",
          es: "¿Cuál es el propósito de características polinomiales en regresión?",
          de: "Was ist der Zweck polynomialer Features in der Regression?",
          nl: "Wat is het doel van polynomiale features in regressie?"
        },
        options: [
          { en: "Capture non-linear relationships by creating interaction and higher-degree terms from existing features", es: "Capturar relaciones no lineales creando términos de interacción y de mayor grado de características existentes", de: "Nichtlineare Beziehungen erfassen durch Erstellen von Interaktions- und höhergradigen Termen aus existierenden Features", nl: "Niet-lineaire relaties vastleggen door interactie en hogere-graad termen te creëren van bestaande features" },
          { en: "Reduce number of features in the model", es: "Reducir número de características en el modelo", de: "Anzahl der Features im Modell reduzieren", nl: "Aantal features in het model reduceren" },
          { en: "Convert categorical to numerical features", es: "Convertir características categóricas a numéricas", de: "Kategoriale in numerische Features umwandeln", nl: "Categorische naar numerieke features converteren" },
          { en: "Speed up linear regression training", es: "Acelerar entrenamiento de regresión lineal", de: "Linear Regression Training beschleunigen", nl: "Lineaire regressie training versnellen" }
        ],
        correct: 0,
        explanation: {
          en: "Polynomial features add terms like x², x³, x*y to capture non-linear patterns while keeping linear regression. Degree-2 adds x₁², x₁x₂, x₂². Increases model flexibility but also dimensionality and overfitting risk. Regularization often needed. Alternative: use inherently non-linear models.",
          es: "Características polinomiales agregan términos como x², x³, x*y para capturar patrones no lineales manteniendo regresión lineal. Grado-2 agrega x₁², x₁x₂, x₂². Aumenta flexibilidad del modelo pero también dimensionalidad y riesgo de overfitting. Regularización a menudo necesaria. Alternativa: usar modelos inherentemente no lineales.",
          de: "Polynomiale Features fügen Terme wie x², x³, x*y hinzu um nichtlineare Muster zu erfassen während lineare Regression beibehalten wird. Grad-2 fügt x₁², x₁x₂, x₂² hinzu. Erhöht Modellflexibilität aber auch Dimensionalität und Overfitting-Risiko. Regularisierung oft nötig. Alternative: inherent nichtlineare Modelle verwenden.",
          nl: "Polynomiale features voegen termen toe zoals x², x³, x*y om niet-lineaire patronen vast te leggen terwijl lineaire regressie behouden blijft. Graad-2 voegt x₁², x₁x₂, x₂² toe. Verhoogt modelflexibiliteit maar ook dimensionaliteit en overfitting risico. Regularisatie vaak nodig. Alternatief: gebruik inherent niet-lineaire modellen."
        }
      },
      {
        question: {
          en: "What is the difference between batch, mini-batch, and stochastic gradient descent?",
          es: "¿Cuál es la diferencia entre descenso de gradiente por lotes, mini-lotes y estocástico?",
          de: "Was ist der Unterschied zwischen Batch-, Mini-Batch- und stochastischem Gradientenabstieg?",
          nl: "Wat is het verschil tussen batch, mini-batch en stochastische gradient descent?"
        },
        options: [
          { en: "Batch uses all data per update, mini-batch uses subset, stochastic uses one sample", es: "Lotes usa todos datos por actualización, mini-lotes usa subconjunto, estocástico usa una muestra", de: "Batch verwendet alle Daten pro Update, Mini-Batch verwendet Teilmenge, stochastisch verwendet eine Stichprobe", nl: "Batch gebruikt alle data per update, mini-batch gebruikt subset, stochastisch gebruikt één sample" },
          { en: "Stochastic is always faster than batch", es: "Estocástico siempre es más rápido que lotes", de: "Stochastisch ist immer schneller als Batch", nl: "Stochastisch is altijd sneller dan batch" },
          { en: "Batch requires less memory than mini-batch", es: "Lotes requiere menos memoria que mini-lotes", de: "Batch benötigt weniger Speicher als Mini-Batch", nl: "Batch vereist minder geheugen dan mini-batch" },
          { en: "Mini-batch always produces best results", es: "Mini-lotes siempre produce mejores resultados", de: "Mini-Batch produziert immer beste Ergebnisse", nl: "Mini-batch produceert altijd beste resultaten" }
        ],
        correct: 0,
        explanation: {
          en: "Batch GD computes gradient using entire dataset (stable but slow, memory intensive). SGD uses single sample (noisy, fast, online learning). Mini-batch (typical: 32-512) balances: parallelizable, stable enough, memory efficient. Mini-batch most common in practice.",
          es: "GD por lotes computa gradiente usando conjunto de datos completo (estable pero lento, intensivo en memoria). SGD usa muestra única (ruidoso, rápido, aprendizaje online). Mini-lotes (típico: 32-512) equilibra: paralelizable, suficientemente estable, eficiente en memoria. Mini-lotes más común en práctica.",
          de: "Batch-GD berechnet Gradienten mit gesamtem Datensatz (stabil aber langsam, speicherintensiv). SGD verwendet einzelne Stichprobe (verrauscht, schnell, Online-Learning). Mini-Batch (typisch: 32-512) balanciert: parallelisierbar, stabil genug, speichereffizient. Mini-Batch am häufigsten in der Praxis.",
          nl: "Batch GD berekent gradiënt met hele dataset (stabiel maar traag, geheugenintensief). SGD gebruikt enkel sample (ruis, snel, online learning). Mini-batch (typisch: 32-512) balanceert: paralleliseerbaar, stabiel genoeg, geheugenefficiënt. Mini-batch meest gebruikelijk in praktijk."
        }
      },
      {
        question: {
          en: "What is the purpose of the Hessian matrix in optimization?",
          es: "¿Cuál es el propósito de la matriz Hessiana en optimización?",
          de: "Was ist der Zweck der Hesse-Matrix in der Optimierung?",
          nl: "Wat is het doel van de Hessian matrix in optimalisatie?"
        },
        options: [
          { en: "Second-order partial derivatives describing curvature of loss surface for faster convergence", es: "Derivadas parciales de segundo orden describiendo curvatura de superficie de pérdida para convergencia más rápida", de: "Partielle Ableitungen zweiter Ordnung beschreiben Krümmung der Verlustoberfläche für schnellere Konvergenz", nl: "Tweede-orde partiële afgeleiden beschrijven kromming van verliesoppervlak voor snellere convergentie" },
          { en: "Matrix for storing model parameters", es: "Matriz para almacenar parámetros del modelo", de: "Matrix zur Speicherung von Modellparametern", nl: "Matrix voor opslaan van modelparameters" },
          { en: "Method for computing gradients faster", es: "Método para computar gradientes más rápido", de: "Methode zur schnelleren Gradientenberechnung", nl: "Methode voor sneller gradiënten berekenen" },
          { en: "Technique for regularizing neural networks", es: "Técnica para regularizar redes neuronales", de: "Technik zur Regularisierung neuronaler Netzwerke", nl: "Techniek voor regulariseren van neurale netwerken" }
        ],
        correct: 0,
        explanation: {
          en: "Hessian matrix contains second-order partial derivatives ∂²L/∂θᵢ∂θⱼ, describing curvature of loss function. Used in Newton's method for optimization (faster convergence than gradient descent). Computationally expensive for high dimensions, so approximate methods (L-BFGS, Hessian-free) often used in deep learning.",
          es: "Matriz Hessiana contiene derivadas parciales de segundo orden ∂²L/∂θᵢ∂θⱼ, describiendo curvatura de función de pérdida. Usado en método de Newton para optimización (convergencia más rápida que descenso de gradiente). Computacionalmente costoso para altas dimensiones, por lo que métodos aproximados (L-BFGS, Hessian-free) a menudo usados en deep learning.",
          de: "Hesse-Matrix enthält partielle Ableitungen zweiter Ordnung ∂²L/∂θᵢ∂θⱼ, beschreibt Krümmung der Verlustfunktion. Verwendet in Newton-Methode für Optimierung (schnellere Konvergenz als Gradientenabstieg). Rechenintensiv für hohe Dimensionen, daher Näherungsmethoden (L-BFGS, Hessian-free) oft in Deep Learning verwendet.",
          nl: "Hessian matrix bevat tweede-orde partiële afgeleiden ∂²L/∂θᵢ∂θⱼ, beschrijft kromming van verliesfunctie. Gebruikt in Newton's methode voor optimalisatie (snellere convergentie dan gradient descent). Rekenintensief voor hoge dimensies, dus benaderingsmethoden (L-BFGS, Hessian-free) vaak gebruikt in deep learning."
        }
      },
      {
        question: {
          en: "What is the difference between L-BFGS and standard gradient descent?",
          es: "¿Cuál es la diferencia entre L-BFGS y descenso de gradiente estándar?",
          de: "Was ist der Unterschied zwischen L-BFGS und Standard-Gradientenabstieg?",
          nl: "Wat is het verschil tussen L-BFGS en standaard gradient descent?"
        },
        options: [
          { en: "L-BFGS approximates second-order information for faster convergence, gradient descent uses only first-order", es: "L-BFGS aproxima información de segundo orden para convergencia más rápida, descenso de gradiente usa solo primer orden", de: "L-BFGS approximiert Informationen zweiter Ordnung für schnellere Konvergenz, Gradientenabstieg verwendet nur erster Ordnung", nl: "L-BFGS benadert tweede-orde informatie voor snellere convergentie, gradient descent gebruikt alleen eerste-orde" },
          { en: "L-BFGS is a type of stochastic gradient descent", es: "L-BFGS es un tipo de descenso de gradiente estocástico", de: "L-BFGS ist eine Art stochastischer Gradientenabstieg", nl: "L-BFGS is een type stochastische gradient descent" },
          { en: "Gradient descent always converges faster than L-BFGS", es: "Descenso de gradiente siempre converge más rápido que L-BFGS", de: "Gradientenabstieg konvergiert immer schneller als L-BFGS", nl: "Gradient descent convergeert altijd sneller dan L-BFGS" },
          { en: "L-BFGS requires more memory than gradient descent", es: "L-BFGS requiere más memoria que descenso de gradiente", de: "L-BFGS benötigt mehr Speicher als Gradientenabstieg", nl: "L-BFGS vereist meer geheugen dan gradient descent" }
        ],
        correct: 0,
        explanation: {
          en: "L-BFGS (Limited-memory BFGS) approximates inverse Hessian using gradients from recent iterations, enabling quasi-Newton optimization. Faster convergence than gradient descent for smooth, convex problems but not suitable for mini-batch/stochastic settings. Common in traditional ML (logistic regression, SVMs) but less in deep learning.",
          es: "L-BFGS (BFGS de memoria limitada) aproxima Hessiana inversa usando gradientes de iteraciones recientes, habilitando optimización cuasi-Newton. Convergencia más rápida que descenso de gradiente para problemas suaves y convexos pero no adecuado para configuraciones mini-lote/estocásticas. Común en ML tradicional (regresión logística, SVMs) pero menos en deep learning.",
          de: "L-BFGS (Limited-memory BFGS) approximiert inverse Hesse-Matrix mit Gradienten aus kürzlichen Iterationen, ermöglicht Quasi-Newton-Optimierung. Schnellere Konvergenz als Gradientenabstieg für glatte konvexe Probleme aber nicht geeignet für Mini-Batch/stochastische Einstellungen. Üblich in traditionellem ML (logistische Regression, SVMs) aber weniger in Deep Learning.",
          nl: "L-BFGS (Limited-memory BFGS) benadert inverse Hessian met gradiënten van recente iteraties, maakt quasi-Newton optimalisatie mogelijk. Snellere convergentie dan gradient descent voor gladde convexe problemen maar niet geschikt voor mini-batch/stochastische settings. Gebruikelijk in traditioneel ML (logistische regressie, SVMs) maar minder in deep learning."
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