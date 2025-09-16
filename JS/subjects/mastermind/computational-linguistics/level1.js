// Computational Linguistics - Level 1: Advanced Language Processing & Analysis
(function() {
  const level1 = {
    name: {
      en: "Advanced Language Processing & Analysis",
      es: "Procesamiento y Análisis Avanzado del Lenguaje",
      de: "Erweiterte Sprachverarbeitung und -analyse",
      nl: "Geavanceerde Taalverwerking en -analyse"
    },
    questions: [
      {
        question: {
          en: "What is the fundamental challenge addressed by the compositionality principle in computational linguistics?",
          es: "¿Cuál es el desafío fundamental abordado por el principio de composicionalidad en lingüística computacional?",
          de: "Was ist die grundlegende Herausforderung, die durch das Kompositionalitätsprinzip in der Computerlinguistik angegangen wird?",
          nl: "Wat is de fundamentele uitdaging die wordt aangepakt door het compositionaliteitsprincipe in computationele linguïstiek?"
        },
        options: [
          { en: "How the meaning of complex expressions derives from their constituent parts", es: "Cómo el significado de expresiones complejas deriva de sus partes constituyentes", de: "Wie sich die Bedeutung komplexer Ausdrücke aus ihren Bestandteilen ableitet", nl: "Hoe de betekenis van complexe uitdrukkingen afgeleid wordt van hun samenstellende delen" },
          { en: "How to process multiple languages simultaneously", es: "Cómo procesar múltiples idiomas simultáneamente", de: "Wie mehrere Sprachen gleichzeitig verarbeitet werden", nl: "Hoe meerdere talen tegelijkertijd te verwerken" },
          { en: "How to optimize computational resources", es: "Cómo optimizar los recursos computacionales", de: "Wie rechnerische Ressourcen optimiert werden", nl: "Hoe computationele resources te optimaliseren" },
          { en: "How to handle spelling errors", es: "Cómo manejar errores ortográficos", de: "Wie Rechtschreibfehler behandelt werden", nl: "Hoe spelfouten te behandelen" }
        ],
        correct: 0,
        explanation: {
          en: "The compositionality principle states that the meaning of a complex linguistic expression is determined by the meanings of its constituent parts and the rules used to combine them. This is crucial for NLP systems to understand how words combine to form meaningful phrases and sentences.",
          es: "El principio de composicionalidad establece que el significado de una expresión lingüística compleja está determinado por los significados de sus partes constituyentes y las reglas utilizadas para combinarlas. Esto es crucial para que los sistemas de PLN entiendan cómo las palabras se combinan para formar frases y oraciones significativas.",
          de: "Das Kompositionalitätsprinzip besagt, dass die Bedeutung eines komplexen sprachlichen Ausdrucks durch die Bedeutungen seiner Bestandteile und die Regeln, die zu ihrer Kombination verwendet werden, bestimmt wird. Dies ist entscheidend für NLP-Systeme, um zu verstehen, wie Wörter sich zu bedeutungsvollen Phrasen und Sätzen verbinden.",
          nl: "Het compositionaliteitsprincipe stelt dat de betekenis van een complexe linguïstische uitdrukking wordt bepaald door de betekenissen van zijn samenstellende delen en de regels die worden gebruikt om ze te combineren. Dit is cruciaal voor NLP-systemen om te begrijpen hoe woorden samenkomen tot betekenisvolle zinsdelen en zinnen."
        }
      },
      {
        question: {
          en: "In dependency parsing, what does the head-dependent relationship represent?",
          es: "En el análisis de dependencias, ¿qué representa la relación cabeza-dependiente?",
          de: "Was repräsentiert die Kopf-Abhängigen-Beziehung beim Dependency-Parsing?",
          nl: "Wat vertegenwoordigt de hoofd-afhankelijke relatie in dependency parsing?"
        },
        options: [
          { en: "Syntactic relationships where one word governs another", es: "Relaciones sintácticas donde una palabra gobierna a otra", de: "Syntaktische Beziehungen, bei denen ein Wort ein anderes regiert", nl: "Syntactische relaties waarbij het ene woord het andere beheerst" },
          { en: "Semantic similarity between words", es: "Similaridad semántica entre palabras", de: "Semantische Ähnlichkeit zwischen Wörtern", nl: "Semantische gelijkenis tussen woorden" },
          { en: "Temporal ordering of events", es: "Ordenamiento temporal de eventos", de: "Zeitliche Reihenfolge von Ereignissen", nl: "Temporele ordening van gebeurtenissen" },
          { en: "Frequency of word co-occurrence", es: "Frecuencia de co-ocurrencia de palabras", de: "Häufigkeit des gemeinsamen Auftretens von Wörtern", nl: "Frequentie van woord co-voorkomen" }
        ],
        correct: 0,
        explanation: {
          en: "In dependency parsing, the head-dependent relationship captures how words are syntactically connected, with the head word governing or modifying the dependent word. This creates a tree structure that represents the grammatical relationships within a sentence.",
          es: "En el análisis de dependencias, la relación cabeza-dependiente captura cómo las palabras están conectadas sintácticamente, con la palabra cabeza gobernando o modificando la palabra dependiente. Esto crea una estructura de árbol que representa las relaciones gramaticales dentro de una oración.",
          de: "Beim Dependency-Parsing erfasst die Kopf-Abhängigen-Beziehung, wie Wörter syntaktisch verbunden sind, wobei das Kopfwort das abhängige Wort regiert oder modifiziert. Dies schafft eine Baumstruktur, die die grammatikalischen Beziehungen innerhalb eines Satzes darstellt.",
          nl: "In dependency parsing legt de hoofd-afhankelijke relatie vast hoe woorden syntactisch verbonden zijn, waarbij het hoofdwoord het afhankelijke woord beheerst of modificeert. Dit creëert een boomstructuur die de grammaticale relaties binnen een zin weergeeft."
        }
      },
      {
        question: {
          en: "What is the primary challenge in handling polysemy for computational systems?",
          es: "¿Cuál es el desafío principal en el manejo de la polisemia para sistemas computacionales?",
          de: "Was ist die primäre Herausforderung bei der Behandlung von Polysemie für rechnerische Systeme?",
          nl: "Wat is de primaire uitdaging bij het omgaan met polysemie voor computationele systemen?"
        },
        options: [
          { en: "Disambiguating which meaning of a word applies in context", es: "Desambiguar qué significado de una palabra se aplica en el contexto", de: "Disambiguierung, welche Bedeutung eines Wortes im Kontext zutrifft", nl: "Ondubbelzinnig maken welke betekenis van een woord van toepassing is in de context" },
          { en: "Storing multiple definitions efficiently", es: "Almacenar múltiples definiciones eficientemente", de: "Mehrere Definitionen effizient speichern", nl: "Meerdere definities efficiënt opslaan" },
          { en: "Translating between languages", es: "Traducir entre idiomas", de: "Übersetzen zwischen Sprachen", nl: "Vertalen tussen talen" },
          { en: "Processing rare words", es: "Procesar palabras raras", de: "Verarbeitung seltener Wörter", nl: "Verwerken van zeldzame woorden" }
        ],
        correct: 0,
        explanation: {
          en: "Polysemy refers to words having multiple related meanings. The key computational challenge is word sense disambiguation - determining which specific meaning of a polysemous word is intended in a given context, which requires sophisticated contextual analysis and semantic understanding.",
          es: "La polisemia se refiere a palabras que tienen múltiples significados relacionados. El desafío computacional clave es la desambiguación del sentido de las palabras: determinar qué significado específico de una palabra polisémica se pretende en un contexto dado, lo que requiere análisis contextual sofisticado y comprensión semántica.",
          de: "Polysemie bezieht sich auf Wörter mit mehreren verwandten Bedeutungen. Die wichtigste rechnerische Herausforderung ist die Wortsinndisambiguierung - die Bestimmung, welche spezifische Bedeutung eines polysemen Wortes in einem gegebenen Kontext beabsichtigt ist, was eine ausgeklügelte kontextuelle Analyse und semantisches Verständnis erfordert.",
          nl: "Polysemie verwijst naar woorden met meerdere gerelateerde betekenissen. De belangrijkste computationele uitdaging is woordbetekenis disambiguatie - bepalen welke specifieke betekenis van een polysemisch woord bedoeld is in een gegeven context, wat geavanceerde contextuele analyse en semantisch begrip vereist."
        }
      },
      {
        question: {
          en: "What does the concept of 'semantic compositionality' address in computational semantics?",
          es: "¿Qué aborda el concepto de 'composicionalidad semántica' en la semántica computacional?",
          de: "Was behandelt das Konzept der 'semantischen Kompositionalität' in der Computersemantik?",
          nl: "Wat behandelt het concept van 'semantische compositionaliteit' in computationele semantiek?"
        },
        options: [
          { en: "How complex meanings emerge from combining simpler semantic units", es: "Cómo emergen significados complejos al combinar unidades semánticas más simples", de: "Wie komplexe Bedeutungen aus der Kombination einfacherer semantischer Einheiten entstehen", nl: "Hoe complexe betekenissen ontstaan uit het combineren van eenvoudigere semantische eenheden" },
          { en: "How to compress semantic representations", es: "Cómo comprimir representaciones semánticas", de: "Wie semantische Darstellungen komprimiert werden", nl: "Hoe semantische representaties te comprimeren" },
          { en: "How to translate semantic structures", es: "Cómo traducir estructuras semánticas", de: "Wie semantische Strukturen übersetzt werden", nl: "Hoe semantische structuren te vertalen" },
          { en: "How to validate semantic consistency", es: "Cómo validar la consistencia semántica", de: "Wie semantische Konsistenz validiert wird", nl: "Hoe semantische consistentie te valideren" }
        ],
        correct: 0,
        explanation: {
          en: "Semantic compositionality is the principle that the meaning of a complex expression is a function of the meanings of its parts and the way they are syntactically combined. In computational semantics, this guides how systems build up semantic representations from individual word meanings to full sentence meanings.",
          es: "La composicionalidad semántica es el principio de que el significado de una expresión compleja es una función de los significados de sus partes y la forma en que se combinan sintácticamente. En la semántica computacional, esto guía cómo los sistemas construyen representaciones semánticas desde significados individuales de palabras hasta significados de oraciones completas.",
          de: "Semantische Kompositionalität ist das Prinzip, dass die Bedeutung eines komplexen Ausdrucks eine Funktion der Bedeutungen seiner Teile und der Art ihrer syntaktischen Kombination ist. In der Computersemantik leitet dies an, wie Systeme semantische Darstellungen von individuellen Wortbedeutungen zu vollständigen Satzbedeutungen aufbauen.",
          nl: "Semantische compositionaliteit is het principe dat de betekenis van een complexe uitdrukking een functie is van de betekenissen van zijn delen en de manier waarop ze syntactisch gecombineerd worden. In computationele semantiek stuurt dit hoe systemen semantische representaties opbouwen van individuele woordbetekenissen tot volledige zinsbetekenissen."
        }
      },
      {
        question: {
          en: "What is the primary function of a Part-of-Speech (POS) tagger in computational linguistics?",
          es: "¿Cuál es la función principal de un etiquetador de Parte del Discurso (POS) en lingüística computacional?",
          de: "Was ist die primäre Funktion eines Part-of-Speech (POS) Taggers in der Computerlinguistik?",
          nl: "Wat is de primaire functie van een Part-of-Speech (POS) tagger in computationele linguïstiek?"
        },
        options: [
          { en: "Assigning grammatical categories to words in context", es: "Asignar categorías gramaticales a las palabras en contexto", de: "Zuweisung grammatischer Kategorien zu Wörtern im Kontext", nl: "Toewijzen van grammaticale categorieën aan woorden in context" },
          { en: "Identifying named entities in text", es: "Identificar entidades nombradas en el texto", de: "Identifizierung benannter Entitäten im Text", nl: "Identificeren van genoemde entiteiten in tekst" },
          { en: "Determining semantic relationships", es: "Determinar relaciones semánticas", de: "Bestimmung semantischer Beziehungen", nl: "Bepalen van semantische relaties" },
          { en: "Extracting key phrases", es: "Extraer frases clave", de: "Extraktion von Schlüsselphrasen", nl: "Extraheren van sleutelzinnen" }
        ],
        correct: 0,
        explanation: {
          en: "A POS tagger assigns grammatical labels (noun, verb, adjective, etc.) to each word in a sentence based on its context and usage. This is crucial for many downstream NLP tasks as it provides essential syntactic information about how words function grammatically in sentences.",
          es: "Un etiquetador POS asigna etiquetas gramaticales (sustantivo, verbo, adjetivo, etc.) a cada palabra en una oración basándose en su contexto y uso. Esto es crucial para muchas tareas posteriores de PLN ya que proporciona información sintáctica esencial sobre cómo funcionan gramaticalmente las palabras en las oraciones.",
          de: "Ein POS-Tagger weist jedem Wort in einem Satz grammatische Labels (Substantiv, Verb, Adjektiv usw.) basierend auf seinem Kontext und Gebrauch zu. Dies ist entscheidend für viele nachgelagerte NLP-Aufgaben, da es wesentliche syntaktische Informationen darüber liefert, wie Wörter grammatisch in Sätzen funktionieren.",
          nl: "Een POS tagger wijst grammaticale labels (zelfstandig naamwoord, werkwoord, bijvoeglijk naamwoord, etc.) toe aan elk woord in een zin gebaseerd op zijn context en gebruik. Dit is cruciaal voor veel downstream NLP taken omdat het essentiële syntactische informatie verschaft over hoe woorden grammaticaal functioneren in zinnen."
        }
      },
      {
        question: {
          en: "What is the fundamental challenge of the binding problem in computational semantics?",
          es: "¿Cuál es el desafío fundamental del problema de enlace en semántica computacional?",
          de: "Was ist die grundlegende Herausforderung des Bindungsproblems in der Computersemantik?",
          nl: "Wat is de fundamentele uitdaging van het bindingsprobleem in computationele semantiek?"
        },
        options: [
          { en: "How to correctly associate quantifiers with their intended variable scopes", es: "Cómo asociar correctamente cuantificadores con sus ámbitos de variable pretendidos", de: "Wie Quantifikatoren korrekt mit ihren beabsichtigten Variablenbereichen assoziiert werden", nl: "Hoe kwantoren correct te associëren met hun beoogde variabele bereiken" },
          { en: "How to link words to their definitions", es: "Cómo vincular palabras con sus definiciones", de: "Wie Wörter mit ihren Definitionen verknüpft werden", nl: "Hoe woorden te koppelen aan hun definities" },
          { en: "How to bind syntactic structures", es: "Cómo enlazar estructuras sintácticas", de: "Wie syntaktische Strukturen gebunden werden", nl: "Hoe syntactische structuren te binden" },
          { en: "How to connect different languages", es: "Cómo conectar diferentes idiomas", de: "Wie verschiedene Sprachen verbunden werden", nl: "Hoe verschillende talen te verbinden" }
        ],
        correct: 0,
        explanation: {
          en: "The binding problem concerns how quantified expressions like 'every student' correctly bind to pronouns and variables within their scope, ensuring proper semantic interpretation of complex logical relationships in natural language.",
          es: "El problema de enlace se refiere a cómo las expresiones cuantificadas como 'cada estudiante' se enlazan correctamente con pronombres y variables dentro de su ámbito, asegurando la interpretación semántica adecuada de relaciones lógicas complejas en el lenguaje natural.",
          de: "Das Bindungsproblem betrifft, wie quantifizierte Ausdrücke wie 'jeder Student' korrekt an Pronomen und Variablen innerhalb ihres Bereichs binden und die ordnungsgemäße semantische Interpretation komplexer logischer Beziehungen in natürlicher Sprache gewährleisten.",
          nl: "Het bindingsprobleem betreft hoe gekwantificeerde uitdrukkingen zoals 'elke student' correct binden aan voornaamwoorden en variabelen binnen hun bereik, en zorgen voor juiste semantische interpretatie van complexe logische relaties in natuurlijke taal."
        }
      },
      {
        question: {
          en: "What does the concept of 'feature unification' accomplish in computational grammars?",
          es: "¿Qué logra el concepto de 'unificación de características' en gramáticas computacionales?",
          de: "Was erreicht das Konzept der 'Feature-Unifikation' in rechnerischen Grammatiken?",
          nl: "Wat bereikt het concept van 'feature unificatie' in computationele grammatica's?"
        },
        options: [
          { en: "Ensures grammatical features are consistent across syntactic constituents", es: "Asegura que las características gramaticales sean consistentes entre constituyentes sintácticos", de: "Stellt sicher, dass grammatische Merkmale über syntaktische Konstituenten hinweg konsistent sind", nl: "Zorgt ervoor dat grammaticale kenmerken consistent zijn over syntactische constituenten" },
          { en: "Combines multiple parsing algorithms", es: "Combina múltiples algoritmos de análisis", de: "Kombiniert mehrere Parsing-Algorithmen", nl: "Combineert meerdere parsing algoritmen" },
          { en: "Merges different language models", es: "Fusiona diferentes modelos de lenguaje", de: "Verschmilzt verschiedene Sprachmodelle", nl: "Voegt verschillende taalmodellen samen" },
          { en: "Unifies semantic representations", es: "Unifica representaciones semánticas", de: "Vereinigt semantische Darstellungen", nl: "Verenigt semantische representaties" }
        ],
        correct: 0,
        explanation: {
          en: "Feature unification is a mechanism that ensures grammatical features (like number, gender, case) are consistent across related syntactic elements, preventing ill-formed structures like 'the cats is running' by enforcing agreement constraints.",
          es: "La unificación de características es un mecanismo que asegura que las características gramaticales (como número, género, caso) sean consistentes entre elementos sintácticos relacionados, previniendo estructuras mal formadas como 'los gatos está corriendo' al imponer restricciones de concordancia.",
          de: "Feature-Unifikation ist ein Mechanismus, der sicherstellt, dass grammatische Merkmale (wie Anzahl, Geschlecht, Kasus) über verwandte syntaktische Elemente hinweg konsistent sind und schlecht geformte Strukturen wie 'die Katzen läuft' durch das Durchsetzen von Übereinstimmungsbeschränkungen verhindert.",
          nl: "Feature unificatie is een mechanisme dat ervoor zorgt dat grammaticale kenmerken (zoals getal, geslacht, naamval) consistent zijn over gerelateerde syntactische elementen, waardoor slecht gevormde structuren zoals 'de katten loopt' worden voorkomen door overeenkomstbeperkingen af te dwingen."
        }
      },
      {
        question: {
          en: "What is the primary challenge addressed by distributional semantics?",
          es: "¿Cuál es el desafío principal abordado por la semántica distribucional?",
          de: "Was ist die primäre Herausforderung, die durch die distributionelle Semantik angegangen wird?",
          nl: "Wat is de primaire uitdaging aangepakt door distributionele semantiek?"
        },
        options: [
          { en: "Deriving word meanings from patterns of co-occurrence in large corpora", es: "Derivar significados de palabras a partir de patrones de co-ocurrencia en grandes corpus", de: "Ableitung von Wortbedeutungen aus Mustern der Koexistenz in großen Korpora", nl: "Afleiden van woordbetekenissen uit patronen van co-voorkomen in grote corpora" },
          { en: "Distributing computational load across processors", es: "Distribuir carga computacional entre procesadores", de: "Verteilung der rechnerischen Last auf Prozessoren", nl: "Verdelen van computationele belasting over processors" },
          { en: "Analyzing statistical distributions of words", es: "Analizar distribuciones estadísticas de palabras", de: "Analyse statistischer Wortverteilungen", nl: "Analyseren van statistische verdelingen van woorden" },
          { en: "Creating distributed databases of meanings", es: "Crear bases de datos distribuidas de significados", de: "Erstellen verteilter Bedeutungsdatenbanken", nl: "Maken van gedistribueerde databases van betekenissen" }
        ],
        correct: 0,
        explanation: {
          en: "Distributional semantics is based on the hypothesis that words with similar meanings will appear in similar contexts. This approach uses large-scale statistical analysis of word co-occurrences to automatically derive semantic representations without manual annotation.",
          es: "La semántica distribucional se basa en la hipótesis de que las palabras con significados similares aparecerán en contextos similares. Este enfoque utiliza análisis estadístico a gran escala de co-ocurrencias de palabras para derivar automáticamente representaciones semánticas sin anotación manual.",
          de: "Distributionelle Semantik basiert auf der Hypothese, dass Wörter mit ähnlichen Bedeutungen in ähnlichen Kontexten erscheinen. Dieser Ansatz verwendet großskalige statistische Analyse von Wort-Koexistenzen, um automatisch semantische Darstellungen ohne manuelle Annotation abzuleiten.",
          nl: "Distributionele semantiek is gebaseerd op de hypothese dat woorden met vergelijkbare betekenissen in vergelijkbare contexten zullen verschijnen. Deze benadering gebruikt grootschalige statistische analyse van woord co-voorkomens om automatisch semantische representaties af te leiden zonder handmatige annotatie."
        }
      },
      {
        question: {
          en: "What is the fundamental goal of discourse representation theory (DRT)?",
          es: "¿Cuál es el objetivo fundamental de la teoría de representación del discurso (DRT)?",
          de: "Was ist das grundlegende Ziel der Diskursrepräsentationstheorie (DRT)?",
          nl: "Wat is het fundamentele doel van discourse representatie theorie (DRT)?"
        },
        options: [
          { en: "Capturing anaphoric relationships and temporal structure across sentences", es: "Capturar relaciones anafóricas y estructura temporal a través de oraciones", de: "Erfassung anaphorischer Beziehungen und zeitlicher Struktur über Sätze hinweg", nl: "Vastleggen van anaforische relaties en temporele structuur over zinnen heen" },
          { en: "Representing individual sentence meanings", es: "Representar significados de oraciones individuales", de: "Darstellung individueller Satzbedeutungen", nl: "Representeren van individuele zinsbetekenissen" },
          { en: "Modeling speech acts and pragmatics", es: "Modelar actos de habla y pragmática", de: "Modellierung von Sprechakten und Pragmatik", nl: "Modelleren van spraakhandelingen en pragmatiek" },
          { en: "Analyzing syntactic structures", es: "Analizar estructuras sintácticas", de: "Analyse syntaktischer Strukturen", nl: "Analyseren van syntactische structuren" }
        ],
        correct: 0,
        explanation: {
          en: "DRT provides a formal framework for representing the meaning of multi-sentence discourses, handling complex phenomena like pronoun resolution, temporal relationships, and information flow that cannot be captured by analyzing sentences in isolation.",
          es: "DRT proporciona un marco formal para representar el significado de discursos de múltiples oraciones, manejando fenómenos complejos como resolución de pronombres, relaciones temporales y flujo de información que no pueden ser capturados analizando oraciones de forma aislada.",
          de: "DRT bietet einen formalen Rahmen zur Darstellung der Bedeutung mehrsätziger Diskurse und behandelt komplexe Phänomene wie Pronomenauflösung, zeitliche Beziehungen und Informationsfluss, die nicht durch isolierte Satzanalyse erfasst werden können.",
          nl: "DRT biedt een formeel kader voor het representeren van de betekenis van meerzins discours, waarbij complexe fenomenen zoals pronomenresolutie, temporele relaties en informatiestromen worden behandeld die niet kunnen worden vastgelegd door zinnen geïsoleerd te analyseren."
        }
      },
      {
        question: {
          en: "What is the central challenge of cross-lingual semantic transfer in multilingual NLP?",
          es: "¿Cuál es el desafío central de la transferencia semántica entre idiomas en PLN multilingüe?",
          de: "Was ist die zentrale Herausforderung des sprachübergreifenden semantischen Transfers in mehrsprachiger NLP?",
          nl: "Wat is de centrale uitdaging van cross-linguale semantische overdracht in meertalige NLP?"
        },
        options: [
          { en: "Preserving semantic content while adapting to different linguistic structures", es: "Preservar contenido semántico mientras se adapta a diferentes estructuras lingüísticas", de: "Bewahrung semantischen Inhalts bei Anpassung an unterschiedliche sprachliche Strukturen", nl: "Behouden van semantische inhoud terwijl aangepast wordt aan verschillende linguïstische structuren" },
          { en: "Translating words between languages", es: "Traducir palabras entre idiomas", de: "Übersetzen von Wörtern zwischen Sprachen", nl: "Vertalen van woorden tussen talen" },
          { en: "Synchronizing processing speeds", es: "Sincronizar velocidades de procesamiento", de: "Synchronisierung von Verarbeitungsgeschwindigkeiten", nl: "Synchroniseren van verwerkingssnelheden" },
          { en: "Managing computational resources", es: "Gestionar recursos computacionales", de: "Verwaltung rechnerischer Ressourcen", nl: "Beheren van computationele resources" }
        ],
        correct: 0,
        explanation: {
          en: "Cross-lingual semantic transfer faces the challenge that languages express similar semantic content through different syntactic structures, lexical patterns, and grammatical mechanisms, requiring sophisticated mapping techniques to preserve meaning across linguistic boundaries.",
          es: "La transferencia semántica entre idiomas enfrenta el desafío de que los idiomas expresan contenido semántico similar a través de diferentes estructuras sintácticas, patrones léxicos y mecanismos gramaticales, requiriendo técnicas de mapeo sofisticadas para preservar el significado a través de fronteras lingüísticas.",
          de: "Der sprachübergreifende semantische Transfer steht vor der Herausforderung, dass Sprachen ähnliche semantische Inhalte durch verschiedene syntaktische Strukturen, lexikalische Muster und grammatische Mechanismen ausdrücken, was ausgeklügelte Mapping-Techniken erfordert, um die Bedeutung über Sprachgrenzen hinweg zu bewahren.",
          nl: "Cross-linguale semantische overdracht staat voor de uitdaging dat talen vergelijkbare semantische inhoud uitdrukken door verschillende syntactische structuren, lexicale patronen en grammaticale mechanismen, wat geavanceerde mapping technieken vereist om betekenis over taalkundige grenzen heen te behouden."
        }
      },
      {
        question: {
          en: "What is the fundamental principle behind statistical parsing models?",
          es: "¿Cuál es el principio fundamental detrás de los modelos estadísticos de análisis sintáctico?",
          de: "Was ist das grundlegende Prinzip hinter statistischen Parsing-Modellen?",
          nl: "Wat is het fundamentele principe achter statistische parsing modellen?"
        },
        options: [
          { en: "Using probabilistic scores to select the most likely syntactic structure", es: "Usar puntajes probabilísticos para seleccionar la estructura sintáctica más probable", de: "Verwendung probabilistischer Bewertungen zur Auswahl der wahrscheinlichsten syntaktischen Struktur", nl: "Gebruik van probabilistische scores om de meest waarschijnlijke syntactische structuur te selecteren" },
          { en: "Applying rule-based transformations", es: "Aplicar transformaciones basadas en reglas", de: "Anwendung regelbasierter Transformationen", nl: "Toepassen van regelgebaseerde transformaties" },
          { en: "Using dictionary lookups for parsing", es: "Usar búsquedas en diccionario para análisis", de: "Verwendung von Wörterbuch-Lookups für das Parsing", nl: "Gebruik van woordenboek lookups voor parsing" },
          { en: "Following deterministic algorithms", es: "Seguir algoritmos determinísticos", de: "Befolgen deterministischer Algorithmen", nl: "Volgen van deterministische algoritmen" }
        ],
        correct: 0,
        explanation: {
          en: "Statistical parsing models use probability distributions learned from annotated corpora to rank different possible syntactic analyses of a sentence, selecting the parse tree with the highest probability given the observed words and their contexts.",
          es: "Los modelos estadísticos de análisis sintáctico usan distribuciones de probabilidad aprendidas de corpus anotados para clasificar diferentes análisis sintácticos posibles de una oración, seleccionando el árbol de análisis con la probabilidad más alta dados las palabras observadas y sus contextos.",
          de: "Statistische Parsing-Modelle verwenden aus annotierten Korpora erlernte Wahrscheinlichkeitsverteilungen, um verschiedene mögliche syntaktische Analysen eines Satzes zu rangieren und den Parse-Baum mit der höchsten Wahrscheinlichkeit angesichts der beobachteten Wörter und ihrer Kontexte auszuwählen.",
          nl: "Statistische parsing modellen gebruiken waarschijnlijkheidsverdelingen geleerd uit geannoteerde corpora om verschillende mogelijke syntactische analyses van een zin te rangschikken, waarbij de parse boom met de hoogste waarschijnlijkheid wordt geselecteerd gegeven de waargenomen woorden en hun contexten."
        }
      },
      {
        question: {
          en: "What is the central challenge of handling syntactic ambiguity in natural language parsing?",
          es: "¿Cuál es el desafío central de manejar la ambigüedad sintáctica en el análisis del lenguaje natural?",
          de: "Was ist die zentrale Herausforderung beim Umgang mit syntaktischer Mehrdeutigkeit beim Parsing natürlicher Sprache?",
          nl: "Wat is de centrale uitdaging van het omgaan met syntactische ambiguïteit in natuurlijke taal parsing?"
        },
        options: [
          { en: "Determining which of multiple possible grammatical structures is intended", es: "Determinar cuál de múltiples estructuras gramaticales posibles está destinada", de: "Bestimmung, welche von mehreren möglichen grammatischen Strukturen beabsichtigt ist", nl: "Bepalen welke van meerdere mogelijke grammaticale structuren bedoeld is" },
          { en: "Identifying unknown words in the sentence", es: "Identificar palabras desconocidas en la oración", de: "Identifizierung unbekannter Wörter im Satz", nl: "Identificeren van onbekende woorden in de zin" },
          { en: "Processing sentences with complex punctuation", es: "Procesar oraciones con puntuación compleja", de: "Verarbeitung von Sätzen mit komplexer Interpunktion", nl: "Verwerken van zinnen met complexe interpunctie" },
          { en: "Handling very long sentences efficiently", es: "Manejar oraciones muy largas eficientemente", de: "Effiziente Behandlung sehr langer Sätze", nl: "Efficiënt omgaan met zeer lange zinnen" }
        ],
        correct: 0,
        explanation: {
          en: "Syntactic ambiguity occurs when a sentence can be parsed in multiple grammatically valid ways. The challenge is to use contextual information, semantic knowledge, and probabilistic models to select the intended interpretation from among the competing syntactic analyses.",
          es: "La ambigüedad sintáctica ocurre cuando una oración puede ser analizada de múltiples maneras gramaticalmente válidas. El desafío es usar información contextual, conocimiento semántico y modelos probabilísticos para seleccionar la interpretación pretendida de entre los análisis sintácticos competidores.",
          de: "Syntaktische Mehrdeutigkeit tritt auf, wenn ein Satz auf mehrere grammatisch gültige Weisen geparst werden kann. Die Herausforderung besteht darin, kontextuelle Informationen, semantisches Wissen und probabilistische Modelle zu verwenden, um die beabsichtigte Interpretation aus den konkurrierenden syntaktischen Analysen auszuwählen.",
          nl: "Syntactische ambiguïteit treedt op wanneer een zin op meerdere grammaticaal geldige manieren kan worden geparsed. De uitdaging is om contextuele informatie, semantische kennis en probabilistische modellen te gebruiken om de bedoelde interpretatie te selecteren uit de concurrerende syntactische analyses."
        }
      },
      {
        question: {
          en: "What is the primary challenge addressed by computational morphology?",
          es: "¿Cuál es el desafío principal abordado por la morfología computacional?",
          de: "Was ist die primäre Herausforderung, die durch die Computermorphologie angegangen wird?",
          nl: "Wat is de primaire uitdaging aangepakt door computationele morfologie?"
        },
        options: [
          { en: "Analyzing word internal structure and morphological processes", es: "Analizar la estructura interna de las palabras y procesos morfológicos", de: "Analyse der internen Wortstruktur und morphologischer Prozesse", nl: "Analyseren van woordinterne structuur en morfologische processen" },
          { en: "Creating new words automatically", es: "Crear nuevas palabras automáticamente", de: "Automatische Erstellung neuer Wörter", nl: "Automatisch nieuwe woorden creëren" },
          { en: "Translating between morphologically rich languages", es: "Traducir entre idiomas morfológicamente ricos", de: "Übersetzen zwischen morphologisch reichen Sprachen", nl: "Vertalen tussen morfologisch rijke talen" },
          { en: "Standardizing word spellings", es: "Estandarizar ortografías de palabras", de: "Standardisierung von Wortschreibweisen", nl: "Standaardiseren van woordspellingen" }
        ],
        correct: 0,
        explanation: {
          en: "Computational morphology deals with analyzing the internal structure of words, including how roots, stems, affixes, and inflections combine to create meaning. This is crucial for handling morphologically rich languages and understanding word formation processes.",
          es: "La morfología computacional se ocupa de analizar la estructura interna de las palabras, incluyendo cómo las raíces, tallos, afijos e inflexiones se combinan para crear significado. Esto es crucial para manejar idiomas morfológicamente ricos y entender procesos de formación de palabras.",
          de: "Die Computermorphologie beschäftigt sich mit der Analyse der internen Wortstruktur, einschließlich der Kombination von Wurzeln, Stämmen, Affixen und Flexionen zur Bedeutungserzeugung. Dies ist entscheidend für den Umgang mit morphologisch reichen Sprachen und das Verständnis von Wortbildungsprozessen.",
          nl: "Computationele morfologie houdt zich bezig met het analyseren van de interne structuur van woorden, inclusief hoe wortels, stammen, affixen en verbuigingen combineren om betekenis te creëren. Dit is cruciaal voor het omgaan met morfologisch rijke talen en het begrijpen van woordvormingsprocessen."
        }
      },
      {
        question: {
          en: "What is the fundamental challenge in computational phonology?",
          es: "¿Cuál es el desafío fundamental en fonología computacional?",
          de: "Was ist die grundlegende Herausforderung in der Computerpho nologie?",
          nl: "Wat is de fundamentele uitdaging in computationele fonologie?"
        },
        options: [
          { en: "Modeling sound patterns and phonological rule interactions", es: "Modelar patrones sonoros e interacciones de reglas fonológicas", de: "Modellierung von Klangmustern und phonologischen Regelinteraktionen", nl: "Modelleren van klankpatronen en fonologische regelinteracties" },
          { en: "Converting text to audio files", es: "Convertir texto a archivos de audio", de: "Konvertierung von Text zu Audiodateien", nl: "Converteren van tekst naar audiobestanden" },
          { en: "Recognizing speech from audio signals", es: "Reconocer habla de señales de audio", de: "Erkennung von Sprache aus Audiosignalen", nl: "Herkennen van spraak uit audiosignalen" },
          { en: "Analyzing acoustic properties of sounds", es: "Analizar propiedades acústicas de sonidos", de: "Analyse akustischer Eigenschaften von Klängen", nl: "Analyseren van akoestische eigenschappen van geluiden" }
        ],
        correct: 0,
        explanation: {
          en: "Computational phonology focuses on modeling the systematic sound patterns of languages and the complex interactions between phonological rules that govern how sounds change in different contexts, which is essential for speech processing and linguistic analysis.",
          es: "La fonología computacional se enfoca en modelar los patrones sonoros sistemáticos de los idiomas y las interacciones complejas entre reglas fonológicas que gobiernan cómo los sonidos cambian en diferentes contextos, lo cual es esencial para el procesamiento del habla y análisis lingüístico.",
          de: "Die Computerpho nologie konzentriert sich auf die Modellierung systematischer Klangmuster von Sprachen und der komplexen Interaktionen zwischen phonologischen Regeln, die bestimmen, wie sich Klänge in verschiedenen Kontexten verändern, was für die Sprachverarbeitung und linguistische Analyse wesentlich ist.",
          nl: "Computationele fonologie richt zich op het modelleren van systematische klankpatronen van talen en de complexe interacties tussen fonologische regels die bepalen hoe geluiden veranderen in verschillende contexten, wat essentieel is voor spraakverwerking en linguïstische analyse."
        }
      },
      {
        question: {
          en: "What is the key challenge in implementing robust co-reference resolution systems?",
          es: "¿Cuál es el desafío clave en implementar sistemas robustos de resolución de correferencia?",
          de: "Was ist die wichtigste Herausforderung bei der Implementierung robuster Koreferenzauflösungssysteme?",
          nl: "Wat is de belangrijkste uitdaging bij het implementeren van robuuste co-referentie resolutie systemen?"
        },
        options: [
          { en: "Determining which mentions in discourse refer to the same entity", es: "Determinar qué menciones en el discurso se refieren a la misma entidad", de: "Bestimmung, welche Erwähnungen im Diskurs sich auf dieselbe Entität beziehen", nl: "Bepalen welke vermeldingen in het discours naar dezelfde entiteit verwijzen" },
          { en: "Identifying all noun phrases in text", es: "Identificar todas las frases nominales en el texto", de: "Identifizierung aller Nominalphrasen im Text", nl: "Identificeren van alle zelfstandige naamwoordgroepen in tekst" },
          { en: "Resolving syntactic ambiguities", es: "Resolver ambigüedades sintácticas", de: "Auflösung syntaktischer Mehrdeutigkeiten", nl: "Oplossen van syntactische ambiguïteiten" },
          { en: "Analyzing semantic relationships", es: "Analizar relaciones semánticas", de: "Analyse semantischer Beziehungen", nl: "Analyseren van semantische relaties" }
        ],
        correct: 0,
        explanation: {
          en: "Co-reference resolution involves identifying when different expressions in a text (like pronouns, definite descriptions, proper names) refer to the same real-world entity. This requires sophisticated reasoning about linguistic and world knowledge to create coherent entity chains.",
          es: "La resolución de correferencia implica identificar cuándo diferentes expresiones en un texto (como pronombres, descripciones definidas, nombres propios) se refieren a la misma entidad del mundo real. Esto requiere razonamiento sofisticado sobre conocimiento lingüístico y del mundo para crear cadenas de entidades coherentes.",
          de: "Koreferenzauflösung beinhaltet die Identifizierung, wann verschiedene Ausdrücke in einem Text (wie Pronomen, definite Beschreibungen, Eigennamen) sich auf dieselbe reale Entität beziehen. Dies erfordert ausgeklügeltes Denken über sprachliches und Weltwissen, um kohärente Entitätsketten zu erstellen.",
          nl: "Co-referentie resolutie houdt in het identificeren wanneer verschillende uitdrukkingen in een tekst (zoals voornaamwoorden, bepaalde beschrijvingen, eigennamen) naar dezelfde echte entiteit verwijzen. Dit vereist geavanceerd redeneren over linguïstische en wereldkennis om coherente entiteitsketens te creëren."
        }
      },
      {
        question: {
          en: "What is the central challenge in lexical semantic analysis?",
          es: "¿Cuál es el desafío central en el análisis semántico léxico?",
          de: "Was ist die zentrale Herausforderung in der lexikalischen semantischen Analyse?",
          nl: "Wat is de centrale uitdaging in lexicale semantische analyse?"
        },
        options: [
          { en: "Capturing fine-grained meaning distinctions and semantic relationships between words", es: "Capturar distinciones de significado detalladas y relaciones semánticas entre palabras", de: "Erfassung feingranularer Bedeutungsunterschiede und semantischer Beziehungen zwischen Wörtern", nl: "Vastleggen van fijnmazige betekenisverschillen en semantische relaties tussen woorden" },
          { en: "Building comprehensive dictionaries", es: "Construir diccionarios comprensivos", de: "Aufbau umfassender Wörterbücher", nl: "Bouwen van uitgebreide woordenboeken" },
          { en: "Analyzing word frequencies", es: "Analizar frecuencias de palabras", de: "Analyse von Wortfrequenzen", nl: "Analyseren van woordfrequenties" },
          { en: "Creating phonetic transcriptions", es: "Crear transcripciones fonéticas", de: "Erstellung phonetischer Transkriptionen", nl: "Creëren van fonetische transcripties" }
        ],
        correct: 0,
        explanation: {
          en: "Lexical semantic analysis deals with understanding and representing word meanings, including synonymy, antonymy, hyponymy, and other semantic relations. The challenge is capturing the subtle distinctions and complex relationships that exist between lexical items in natural language.",
          es: "El análisis semántico léxico se ocupa de entender y representar significados de palabras, incluyendo sinonimia, antonimia, hiponimia y otras relaciones semánticas. El desafío es capturar las distinciones sutiles y relaciones complejas que existen entre elementos léxicos en el lenguaje natural.",
          de: "Die lexikalische semantische Analyse befasst sich mit dem Verstehen und Darstellen von Wortbedeutungen, einschließlich Synonymie, Antonymie, Hyponymie und anderen semantischen Beziehungen. Die Herausforderung besteht darin, die subtilen Unterschiede und komplexen Beziehungen zu erfassen, die zwischen lexikalischen Elementen in natürlicher Sprache bestehen.",
          nl: "Lexicale semantische analyse houdt zich bezig met het begrijpen en representeren van woordbetekenissen, inclusief synonymie, antonymie, hyponymie en andere semantische relaties. De uitdaging is het vastleggen van de subtiele onderscheiden en complexe relaties die bestaan tussen lexicale items in natuurlijke taal."
        }
      },
      {
        question: {
          en: "What is the fundamental challenge in computational pragmatics?",
          es: "¿Cuál es el desafío fundamental en pragmática computacional?",
          de: "Was ist die grundlegende Herausforderung in der Computerpragmatik?",
          nl: "Wat is de fundamentele uitdaging in computationele pragmatiek?"
        },
        options: [
          { en: "Understanding meaning in context beyond literal semantic content", es: "Entender significado en contexto más allá del contenido semántico literal", de: "Verständnis von Bedeutung im Kontext jenseits des wörtlichen semantischen Inhalts", nl: "Begrijpen van betekenis in context voorbij letterlijke semantische inhoud" },
          { en: "Processing grammatical structures efficiently", es: "Procesar estructuras gramaticales eficientemente", de: "Effiziente Verarbeitung grammatischer Strukturen", nl: "Efficiënt verwerken van grammaticale structuren" },
          { en: "Analyzing phonetic variations", es: "Analizar variaciones fonéticas", de: "Analyse phonetischer Variationen", nl: "Analyseren van fonetische variaties" },
          { en: "Creating syntactic parse trees", es: "Crear árboles de análisis sintáctico", de: "Erstellung syntaktischer Parse-Bäume", nl: "Creëren van syntactische parse bomen" }
        ],
        correct: 0,
        explanation: {
          en: "Computational pragmatics addresses how context, speaker intentions, and social factors influence meaning beyond what is literally expressed. This includes phenomena like implicature, speech acts, and context-dependent interpretation that require sophisticated reasoning about communication.",
          es: "La pragmática computacional aborda cómo el contexto, las intenciones del hablante y los factores sociales influyen en el significado más allá de lo que se expresa literalmente. Esto incluye fenómenos como implicatura, actos de habla e interpretación dependiente del contexto que requieren razonamiento sofisticado sobre comunicación.",
          de: "Die Computerpragmatik befasst sich damit, wie Kontext, Sprecherintentionen und soziale Faktoren die Bedeutung über das hinaus beeinflussen, was wörtlich ausgedrückt wird. Dies umfasst Phänomene wie Implikatur, Sprechakte und kontextabhängige Interpretation, die ausgeklügeltes Denken über Kommunikation erfordern.",
          nl: "Computationele pragmatiek behandelt hoe context, sprekersintenties en sociale factoren de betekenis beïnvloeden voorbij wat letterlijk wordt uitgedrukt. Dit omvat fenomenen zoals implicatuur, spraakhandelingen en contextafhankelijke interpretatie die geavanceerd redeneren over communicatie vereisen."
        }
      },
      {
        question: {
          en: "What is the primary goal of computational dialectology?",
          es: "¿Cuál es el objetivo principal de la dialectología computacional?",
          de: "Was ist das primäre Ziel der Computerdialektologie?",
          nl: "Wat is het primaire doel van computationele dialectologie?"
        },
        options: [
          { en: "Modeling and analyzing systematic linguistic variation across geographical regions", es: "Modelar y analizar variación lingüística sistemática a través de regiones geográficas", de: "Modellierung und Analyse systematischer sprachlicher Variation über geografische Regionen", nl: "Modelleren en analyseren van systematische linguïstische variatie over geografische regio's" },
          { en: "Creating universal translation systems", es: "Crear sistemas de traducción universales", de: "Erstellung universeller Übersetzungssysteme", nl: "Creëren van universele vertaalsystemen" },
          { en: "Standardizing language varieties", es: "Estandarizar variedades de idiomas", de: "Standardisierung von Sprachvarietäten", nl: "Standaardiseren van taalvariëteiten" },
          { en: "Teaching multiple dialects simultaneously", es: "Enseñar múltiples dialectos simultáneamente", de: "Gleichzeitiges Unterrichten mehrerer Dialekte", nl: "Gelijktijdig meerdere dialecten onderwijzen" }
        ],
        correct: 0,
        explanation: {
          en: "Computational dialectology uses computational methods to study how languages vary systematically across geographic regions, social groups, and historical periods, helping to identify patterns in linguistic variation and change that might not be apparent through traditional analysis methods.",
          es: "La dialectología computacional usa métodos computacionales para estudiar cómo los idiomas varían sistemáticamente a través de regiones geográficas, grupos sociales y períodos históricos, ayudando a identificar patrones en variación y cambio lingüístico que podrían no ser aparentes a través de métodos de análisis tradicionales.",
          de: "Die Computerdialektologie verwendet rechnerische Methoden, um zu studieren, wie Sprachen systematisch über geografische Regionen, soziale Gruppen und historische Perioden hinweg variieren, und hilft dabei, Muster in sprachlicher Variation und Wandel zu identifizieren, die durch traditionelle Analysemethoden möglicherweise nicht erkennbar sind.",
          nl: "Computationele dialectologie gebruikt computationele methoden om te bestuderen hoe talen systematisch variëren over geografische regio's, sociale groepen en historische periodes, en helpt patronen in linguïstische variatie en verandering te identificeren die mogelijk niet duidelijk zijn door traditionele analysemethoden."
        }
      },
      {
        question: {
          en: "What is the core challenge in implementing robust text normalization systems?",
          es: "¿Cuál es el desafío central en implementar sistemas robustos de normalización de texto?",
          de: "Was ist die Kernherausforderung bei der Implementierung robuster Textnormalisierungssysteme?",
          nl: "Wat is de kernuitdaging bij het implementeren van robuuste tekstnormalisatie systemen?"
        },
        options: [
          { en: "Converting non-standard text forms to canonical representations while preserving meaning", es: "Convertir formas de texto no estándar a representaciones canónicas preservando el significado", de: "Konvertierung nicht-standardisierter Textformen zu kanonischen Darstellungen unter Bewahrung der Bedeutung", nl: "Converteren van niet-standaard tekstvormen naar canonieke representaties terwijl betekenis behouden blijft" },
          { en: "Removing punctuation from all text", es: "Eliminar puntuación de todo texto", de: "Entfernung von Interpunktion aus allen Texten", nl: "Verwijderen van interpunctie uit alle tekst" },
          { en: "Converting text to uppercase", es: "Convertir texto a mayúsculas", de: "Konvertierung von Text zu Großbuchstaben", nl: "Converteren van tekst naar hoofdletters" },
          { en: "Standardizing font sizes and styles", es: "Estandarizar tamaños y estilos de fuente", de: "Standardisierung von Schriftgrößen und -stilen", nl: "Standaardiseren van lettergroottes en -stijlen" }
        ],
        correct: 0,
        explanation: {
          en: "Text normalization deals with converting various non-standard textual forms (abbreviations, numerical expressions, informal spellings) into standard canonical forms while preserving the intended meaning. This is crucial for downstream NLP processing but requires sophisticated linguistic knowledge.",
          es: "La normalización de texto se ocupa de convertir varias formas textuales no estándar (abreviaciones, expresiones numéricas, ortografías informales) en formas canónicas estándar preservando el significado pretendido. Esto es crucial para el procesamiento PLN posterior pero requiere conocimiento lingüístico sofisticado.",
          de: "Textnormalisierung befasst sich mit der Konvertierung verschiedener nicht-standardisierter Textformen (Abkürzungen, numerische Ausdrücke, informelle Schreibweisen) in standardisierte kanonische Formen unter Bewahrung der beabsichtigten Bedeutung. Dies ist für die nachgelagerte NLP-Verarbeitung entscheidend, erfordert aber ausgeklügeltes sprachliches Wissen.",
          nl: "Tekstnormalisatie houdt zich bezig met het converteren van verschillende niet-standaard tekstvormen (afkortingen, numerieke uitdrukkingen, informele spellingen) naar standaard canonieke vormen terwijl de bedoelde betekenis behouden blijft. Dit is cruciaal voor downstream NLP verwerking maar vereist geavanceerde linguïstische kennis."
        }
      },
      {
        question: {
          en: "What is the fundamental challenge in computational sociolinguistics?",
          es: "¿Cuál es el desafío fundamental en sociolingüística computacional?",
          de: "Was ist die grundlegende Herausforderung in der Computersoziolinguistik?",
          nl: "Wat is de fundamentele uitdaging in computationele sociolinguïstiek?"
        },
        options: [
          { en: "Modeling how social factors systematically influence linguistic variation and usage patterns", es: "Modelar cómo factores sociales influyen sistemáticamente en variación lingüística y patrones de uso", de: "Modellierung, wie soziale Faktoren systematisch sprachliche Variation und Nutzungsmuster beeinflussen", nl: "Modelleren hoe sociale factoren systematisch linguïstische variatie en gebruikspatronen beïnvloeden" },
          { en: "Creating social media analysis tools", es: "Crear herramientas de análisis de redes sociales", de: "Erstellung von Social-Media-Analysetools", nl: "Creëren van social media analyse tools" },
          { en: "Studying online communication patterns", es: "Estudiar patrones de comunicación en línea", de: "Studium von Online-Kommunikationsmustern", nl: "Bestuderen van online communicatiepatronen" },
          { en: "Analyzing demographic data", es: "Analizar datos demográficos", de: "Analyse demografischer Daten", nl: "Analyseren van demografische gegevens" }
        ],
        correct: 0,
        explanation: {
          en: "Computational sociolinguistics uses computational methods to study how social variables like age, gender, socioeconomic status, and group membership systematically correlate with linguistic choices, helping to understand the social embedding of language variation and change.",
          es: "La sociolingüística computacional usa métodos computacionales para estudiar cómo variables sociales como edad, género, estatus socioeconómico y pertenencia grupal se correlacionan sistemáticamente con elecciones lingüísticas, ayudando a entender la incrustación social de variación y cambio lingüístico.",
          de: "Die Computersoziolinguistik verwendet rechnerische Methoden, um zu studieren, wie soziale Variablen wie Alter, Geschlecht, sozioökonomischer Status und Gruppenzugehörigkeit systematisch mit sprachlichen Entscheidungen korrelieren, und hilft dabei, die soziale Einbettung sprachlicher Variation und Wandel zu verstehen.",
          nl: "Computationele sociolinguïstiek gebruikt computationele methoden om te bestuderen hoe sociale variabelen zoals leeftijd, geslacht, sociaaleconomische status en groepslidmaatschap systematisch correleren met linguïstische keuzes, wat helpt bij het begrijpen van de sociale inbedding van taalvariatie en -verandering."
        }
      },
      {
        question: {
          en: "What is the primary challenge in computational historical linguistics?",
          es: "¿Cuál es el desafío principal en lingüística histórica computacional?",
          de: "Was ist die primäre Herausforderung in der computationellen historischen Linguistik?",
          nl: "Wat is de primaire uitdaging in computationele historische linguïstiek?"
        },
        options: [
          { en: "Reconstructing language change patterns and phylogenetic relationships from limited data", es: "Reconstruir patrones de cambio de idioma y relaciones filogenéticas de datos limitados", de: "Rekonstruktion von Sprachveränderungsmustern und phylogenetischen Beziehungen aus begrenzten Daten", nl: "Reconstrueren van taalveranderingspatronen en fylogenetische relaties uit beperkte data" },
          { en: "Digitizing ancient manuscripts", es: "Digitalizar manuscritos antiguos", de: "Digitalisierung antiker Manuskripte", nl: "Digitaliseren van oude manuscripten" },
          { en: "Creating historical dictionaries", es: "Crear diccionarios históricos", de: "Erstellung historischer Wörterbücher", nl: "Creëren van historische woordenboeken" },
          { en: "Teaching dead languages", es: "Enseñar lenguas muertas", de: "Unterrichten toter Sprachen", nl: "Onderwijzen van dode talen" }
        ],
        correct: 0,
        explanation: {
          en: "Computational historical linguistics applies quantitative methods to reconstruct how languages have changed over time and to determine genetic relationships between languages. The challenge is working with incomplete historical data to build reliable models of linguistic evolution.",
          es: "La lingüística histórica computacional aplica métodos cuantitativos para reconstruir cómo han cambiado los idiomas a lo largo del tiempo y determinar relaciones genéticas entre idiomas. El desafío es trabajar con datos históricos incompletos para construir modelos confiables de evolución lingüística.",
          de: "Die computationelle historische Linguistik wendet quantitative Methoden an, um zu rekonstruieren, wie sich Sprachen im Laufe der Zeit verändert haben, und um genetische Beziehungen zwischen Sprachen zu bestimmen. Die Herausforderung besteht darin, mit unvollständigen historischen Daten zu arbeiten, um zuverlässige Modelle sprachlicher Evolution zu erstellen.",
          nl: "Computationele historische linguïstiek past kwantitatieve methoden toe om te reconstrueren hoe talen in de loop der tijd zijn veranderd en om genetische relaties tussen talen te bepalen. De uitdaging is werken met onvolledige historische data om betrouwbare modellen van linguïstische evolutie te bouwen."
        }
      },
      {
        question: {
          en: "What is the central challenge in implementing multimodal computational linguistics systems?",
          es: "¿Cuál es el desafío central en implementar sistemas multimodales de lingüística computacional?",
          de: "Was ist die zentrale Herausforderung bei der Implementierung multimodaler computerlinguistischer Systeme?",
          nl: "Wat is de centrale uitdaging bij het implementeren van multimodale computationele linguïstiek systemen?"
        },
        options: [
          { en: "Integrating and aligning information from multiple communicative channels simultaneously", es: "Integrar y alinear información de múltiples canales comunicativos simultáneamente", de: "Integration und Ausrichtung von Informationen aus mehreren Kommunikationskanälen gleichzeitig", nl: "Integreren en uitlijnen van informatie uit meerdere communicatiekanalen tegelijkertijd" },
          { en: "Processing text and images separately", es: "Procesar texto e imágenes por separado", de: "Separate Verarbeitung von Text und Bildern", nl: "Tekst en afbeeldingen apart verwerken" },
          { en: "Converting between different file formats", es: "Convertir entre diferentes formatos de archivo", de: "Konvertierung zwischen verschiedenen Dateiformaten", nl: "Converteren tussen verschillende bestandsformaten" },
          { en: "Storing multimedia content efficiently", es: "Almacenar contenido multimedia eficientemente", de: "Effiziente Speicherung von Multimedia-Inhalten", nl: "Efficiënt opslaan van multimedia inhoud" }
        ],
        correct: 0,
        explanation: {
          en: "Multimodal computational linguistics deals with understanding communication that involves multiple modalities (text, speech, gesture, images) simultaneously. The key challenge is developing methods to integrate and align information across these different channels to achieve coherent interpretation.",
          es: "La lingüística computacional multimodal se ocupa de entender comunicación que involucra múltiples modalidades (texto, habla, gesto, imágenes) simultáneamente. El desafío clave es desarrollar métodos para integrar y alinear información a través de estos diferentes canales para lograr interpretación coherente.",
          de: "Multimodale Computerlinguistik befasst sich mit dem Verständnis von Kommunikation, die mehrere Modalitäten (Text, Sprache, Gestik, Bilder) gleichzeitig umfasst. Die wichtigste Herausforderung besteht darin, Methoden zu entwickeln, um Informationen über diese verschiedenen Kanäle zu integrieren und auszurichten, um eine kohärente Interpretation zu erreichen.",
          nl: "Multimodale computationele linguïstiek houdt zich bezig met het begrijpen van communicatie die meerdere modaliteiten (tekst, spraak, gebaar, afbeeldingen) tegelijkertijd omvat. De belangrijkste uitdaging is het ontwikkelen van methoden om informatie over deze verschillende kanalen te integreren en uit te lijnen om coherente interpretatie te bereiken."
        }
      },
      {
        question: {
          en: "What is the fundamental challenge in computational typology?",
          es: "¿Cuál es el desafío fundamental en tipología computacional?",
          de: "Was ist die grundlegende Herausforderung in der Computertypologie?",
          nl: "Wat is de fundamentele uitdaging in computationele typologie?"
        },
        options: [
          { en: "Discovering and modeling systematic cross-linguistic patterns and universals", es: "Descubrir y modelar patrones y universales inter-lingüísticos sistemáticos", de: "Entdeckung und Modellierung systematischer sprachübergreifender Muster und Universalien", nl: "Ontdekken en modelleren van systematische cross-linguïstische patronen en universalia" },
          { en: "Classifying languages by writing systems", es: "Clasificar idiomas por sistemas de escritura", de: "Klassifizierung von Sprachen nach Schriftsystemen", nl: "Classificeren van talen naar schrijfsystemen" },
          { en: "Creating language learning materials", es: "Crear materiales de aprendizaje de idiomas", de: "Erstellung von Sprachlernmaterialien", nl: "Creëren van taalleermateriaal" },
          { en: "Developing universal keyboards", es: "Desarrollar teclados universales", de: "Entwicklung universeller Tastaturen", nl: "Ontwikkelen van universele toetsenborden" }
        ],
        correct: 0,
        explanation: {
          en: "Computational typology uses statistical and computational methods to identify cross-linguistic patterns, linguistic universals, and systematic variations in how languages structure and organize their grammatical systems, contributing to our understanding of the limits and possibilities of human language.",
          es: "La tipología computacional usa métodos estadísticos y computacionales para identificar patrones inter-lingüísticos, universales lingüísticos y variaciones sistemáticas en cómo los idiomas estructuran y organizan sus sistemas gramaticales, contribuyendo a nuestro entendimiento de los límites y posibilidades del lenguaje humano.",
          de: "Die Computertypologie verwendet statistische und rechnerische Methoden, um sprachübergreifende Muster, sprachliche Universalien und systematische Variationen in der Art und Weise zu identifizieren, wie Sprachen ihre grammatischen Systeme strukturieren und organisieren, was zu unserem Verständnis der Grenzen und Möglichkeiten menschlicher Sprache beiträgt.",
          nl: "Computationele typologie gebruikt statistische en computationele methoden om cross-linguïstische patronen, linguïstische universalia en systematische variaties te identificeren in hoe talen hun grammaticale systemen structureren en organiseren, wat bijdraagt aan ons begrip van de grenzen en mogelijkheden van menselijke taal."
        }
      },
      {
        question: {
          en: "What is the primary challenge in developing robust grammar induction algorithms?",
          es: "¿Cuál es el desafío principal en desarrollar algoritmos robustos de inducción gramatical?",
          de: "Was ist die primäre Herausforderung bei der Entwicklung robuster Grammatikinduktionsalgorithmen?",
          nl: "Wat is de primaire uitdaging bij het ontwikkelen van robuuste grammatica inductie algoritmen?"
        },
        options: [
          { en: "Learning grammatical structures from raw text without prior linguistic annotation", es: "Aprender estructuras gramaticales de texto crudo sin anotación lingüística previa", de: "Lernen grammatischer Strukturen aus rohem Text ohne vorherige sprachliche Annotation", nl: "Leren van grammaticale structuren uit ruwe tekst zonder voorafgaande linguïstische annotatie" },
          { en: "Memorizing all possible grammatical rules", es: "Memorizar todas las reglas gramaticales posibles", de: "Auswendiglernen aller möglichen Grammatikregeln", nl: "Onthouden van alle mogelijke grammaticale regels" },
          { en: "Translating between different grammar formalisms", es: "Traducir entre diferentes formalismos gramaticales", de: "Übersetzen zwischen verschiedenen Grammatikformalismen", nl: "Vertalen tussen verschillende grammatica formalismen" },
          { en: "Creating grammar textbooks automatically", es: "Crear libros de texto de gramática automáticamente", de: "Automatische Erstellung von Grammatiklehrbüchern", nl: "Automatisch grammatica leerboeken creëren" }
        ],
        correct: 0,
        explanation: {
          en: "Grammar induction aims to automatically discover the underlying grammatical structure of a language from unannotated text data. This unsupervised learning task is extremely challenging because it requires identifying hidden syntactic patterns without explicit structural guidance.",
          es: "La inducción gramatical tiene como objetivo descubrir automáticamente la estructura gramatical subyacente de un idioma a partir de datos de texto sin anotar. Esta tarea de aprendizaje no supervisado es extremadamente desafiante porque requiere identificar patrones sintácticos ocultos sin guía estructural explícita.",
          de: "Grammatikinduktion zielt darauf ab, automatisch die zugrundeliegende grammatische Struktur einer Sprache aus unannotierten Textdaten zu entdecken. Diese unüberwachte Lernaufgabe ist extrem herausfordernd, da sie die Identifizierung verborgener syntaktischer Muster ohne explizite strukturelle Führung erfordert.",
          nl: "Grammatica inductie beoogt automatisch de onderliggende grammaticale structuur van een taal te ontdekken uit niet-geannoteerde tekstdata. Deze onbewaakte leertaak is extreem uitdagend omdat het het identificeren van verborgen syntactische patronen vereist zonder expliciete structurele begeleiding."
        }
      },
      {
        question: {
          en: "What is the core challenge in computational construction grammar?",
          es: "¿Cuál es el desafío central en gramática de construcción computacional?",
          de: "Was ist die Kernherausforderung in der computationellen Konstruktionsgrammatik?",
          nl: "Wat is de kernuitdaging in computationele constructie grammatica?"
        },
        options: [
          { en: "Modeling how form-meaning pairs interact systematically across different levels of linguistic organization", es: "Modelar cómo los pares forma-significado interactúan sistemáticamente a través de diferentes niveles de organización lingüística", de: "Modellierung, wie Form-Bedeutungs-Paare systematisch auf verschiedenen Ebenen sprachlicher Organisation interagieren", nl: "Modelleren hoe vorm-betekenis paren systematisch interacteren over verschillende niveaus van linguïstische organisatie" },
          { en: "Building physical structures from language descriptions", es: "Construir estructuras físicas a partir de descripciones de lenguaje", de: "Aufbau physischer Strukturen aus Sprachbeschreibungen", nl: "Bouwen van fysieke structuren uit taalbeschrijvingen" },
          { en: "Creating construction manuals automatically", es: "Crear manuales de construcción automáticamente", de: "Automatische Erstellung von Bauanleitungen", nl: "Automatisch constructie handleidingen creëren" },
          { en: "Analyzing architectural terminology", es: "Analizar terminología arquitectónica", de: "Analyse architektonischer Terminologie", nl: "Analyseren van architecturale terminologie" }
        ],
        correct: 0,
        explanation: {
          en: "Construction grammar views language as a collection of form-meaning constructions ranging from morphemes to complex syntactic patterns. The computational challenge is to model how these constructions interact and combine to create meaning at multiple levels of linguistic structure.",
          es: "La gramática de construcción ve el lenguaje como una colección de construcciones forma-significado que van desde morfemas hasta patrones sintácticos complejos. El desafío computacional es modelar cómo estas construcciones interactúan y se combinan para crear significado en múltiples niveles de estructura lingüística.",
          de: "Die Konstruktionsgrammatik betrachtet Sprache als eine Sammlung von Form-Bedeutungs-Konstruktionen, die von Morphemen bis zu komplexen syntaktischen Mustern reichen. Die computationelle Herausforderung besteht darin, zu modellieren, wie diese Konstruktionen interagieren und sich kombinieren, um Bedeutung auf mehreren Ebenen sprachlicher Struktur zu schaffen.",
          nl: "Constructie grammatica ziet taal als een verzameling van vorm-betekenis constructies die variëren van morfemen tot complexe syntactische patronen. De computationele uitdaging is te modelleren hoe deze constructies interacteren en combineren om betekenis te creëren op meerdere niveaus van linguïstische structuur."
        }
      },
      {
        question: {
          en: "What is the fundamental challenge in computational contact linguistics?",
          es: "¿Cuál es el desafío fundamental en lingüística de contacto computacional?",
          de: "Was ist die grundlegende Herausforderung in der computationellen Kontaktlinguistik?",
          nl: "Wat is de fundamentele uitdaging in computationele contactlinguïstiek?"
        },
        options: [
          { en: "Modeling how languages change through interaction and mutual influence", es: "Modelar cómo los idiomas cambian a través de interacción e influencia mutua", de: "Modellierung, wie sich Sprachen durch Interaktion und gegenseitigen Einfluss verändern", nl: "Modelleren hoe talen veranderen door interactie en wederzijdse invloed" },
          { en: "Creating contact databases for linguists", es: "Crear bases de datos de contacto para lingüistas", de: "Erstellung von Kontaktdatenbanken für Linguisten", nl: "Creëren van contactdatabases voor linguïsten" },
          { en: "Analyzing physical contact between speakers", es: "Analizar contacto físico entre hablantes", de: "Analyse physischen Kontakts zwischen Sprechern", nl: "Analyseren van fysiek contact tussen sprekers" },
          { en: "Studying telecommunication patterns", es: "Estudiar patrones de telecomunicación", de: "Studium von Telekommunikationsmustern", nl: "Bestuderen van telecommunicatiepatronen" }
        ],
        correct: 0,
        explanation: {
          en: "Contact linguistics studies how languages influence each other when speakers of different languages interact. Computational approaches help model complex processes like borrowing, code-switching, and convergence that occur in multilingual communities and lead to language change.",
          es: "La lingüística de contacto estudia cómo los idiomas se influyen mutuamente cuando hablantes de diferentes idiomas interactúan. Los enfoques computacionales ayudan a modelar procesos complejos como préstamo, cambio de código y convergencia que ocurren en comunidades multilingües y llevan al cambio de idioma.",
          de: "Kontaktlinguistik untersucht, wie Sprachen sich gegenseitig beeinflussen, wenn Sprecher verschiedener Sprachen interagieren. Rechnerische Ansätze helfen dabei, komplexe Prozesse wie Entlehnung, Code-Switching und Konvergenz zu modellieren, die in mehrsprachigen Gemeinschaften auftreten und zu Sprachwandel führen.",
          nl: "Contactlinguïstiek bestudeert hoe talen elkaar beïnvloeden wanneer sprekers van verschillende talen interacteren. Computationele benaderingen helpen bij het modelleren van complexe processen zoals lenen, code-switching en convergentie die voorkomen in meertalige gemeenschappen en leiden tot taalverandering."
        }
      },
      {
        question: {
          en: "What is the primary challenge in developing computational models of language acquisition?",
          es: "¿Cuál es el desafío principal en desarrollar modelos computacionales de adquisición del lenguaje?",
          de: "Was ist die primäre Herausforderung bei der Entwicklung rechnerischer Modelle des Spracherwerbs?",
          nl: "Wat is de primaire uitdaging bij het ontwikkelen van computationele modellen van taalverwerving?"
        },
        options: [
          { en: "Simulating how children learn language from limited and noisy input", es: "Simular cómo los niños aprenden lenguaje de entrada limitada y ruidosa", de: "Simulation, wie Kinder Sprache aus begrenzter und verrauschter Eingabe lernen", nl: "Simuleren hoe kinderen taal leren van beperkte en ruisvolle input" },
          { en: "Creating language teaching software", es: "Crear software de enseñanza de idiomas", de: "Erstellung von Sprachlehrsoftware", nl: "Creëren van taalonderwijssoftware" },
          { en: "Analyzing adult language learning", es: "Analizar aprendizaje de idiomas en adultos", de: "Analyse des Sprachlernens bei Erwachsenen", nl: "Analyseren van volwassen taalleren" },
          { en: "Measuring language proficiency automatically", es: "Medir competencia lingüística automáticamente", de: "Automatische Messung sprachlicher Kompetenz", nl: "Automatisch taalvaardigheid meten" }
        ],
        correct: 0,
        explanation: {
          en: "Computational models of language acquisition attempt to explain how children successfully acquire their native language despite receiving relatively limited, often ungrammatical input. This involves modeling complex cognitive processes and statistical learning mechanisms.",
          es: "Los modelos computacionales de adquisición del lenguaje intentan explicar cómo los niños adquieren exitosamente su lengua nativa a pesar de recibir entrada relativamente limitada, a menudo no gramatical. Esto involucra modelar procesos cognitivos complejos y mecanismos de aprendizaje estadístico.",
          de: "Rechnerische Modelle des Spracherwerbs versuchen zu erklären, wie Kinder erfolgreich ihre Muttersprache erwerben, obwohl sie relativ begrenzte, oft ungrammatische Eingaben erhalten. Dies beinhaltet die Modellierung komplexer kognitiver Prozesse und statistischer Lernmechanismen.",
          nl: "Computationele modellen van taalverwerving proberen te verklaren hoe kinderen succesvol hun moedertaal verwerven ondanks het ontvangen van relatief beperkte, vaak ongrammaticale input. Dit omvat het modelleren van complexe cognitieve processen en statistische leermechanismen."
        }
      },
      {
        question: {
          en: "What is the central challenge in computational neurolinguistics?",
          es: "¿Cuál es el desafío central en neurolingüística computacional?",
          de: "Was ist die zentrale Herausforderung in der Computerneurolinguistik?",
          nl: "Wat is de centrale uitdaging in computationele neurolinguïstiek?"
        },
        options: [
          { en: "Modeling the neural mechanisms underlying language processing and representation", es: "Modelar los mecanismos neurales subyacentes al procesamiento y representación del lenguaje", de: "Modellierung der neuronalen Mechanismen, die der Sprachverarbeitung und -darstellung zugrunde liegen", nl: "Modelleren van de neurale mechanismen onderliggend aan taalverwerking en -representatie" },
          { en: "Creating brain imaging software", es: "Crear software de imágenes cerebrales", de: "Erstellung von Gehirn-Bildgebungssoftware", nl: "Creëren van hersenbeeldsoftware" },
          { en: "Analyzing speech therapy outcomes", es: "Analizar resultados de terapia de habla", de: "Analyse von Sprachtherapie-Ergebnissen", nl: "Analyseren van spraaktherapie resultaten" },
          { en: "Diagnosing language disorders", es: "Diagnosticar trastornos del lenguaje", de: "Diagnose von Sprachstörungen", nl: "Diagnosticeren van taalstoornissen" }
        ],
        correct: 0,
        explanation: {
          en: "Computational neurolinguistics combines computational modeling with neuroscientific data to understand how the brain processes and represents language. This interdisciplinary field faces the challenge of bridging different levels of analysis from neural activity to linguistic behavior.",
          es: "La neurolingüística computacional combina modelado computacional con datos neurocientíficos para entender cómo el cerebro procesa y representa el lenguaje. Este campo interdisciplinario enfrenta el desafío de unir diferentes niveles de análisis desde actividad neural hasta comportamiento lingüístico.",
          de: "Die Computerneurolinguistik kombiniert rechnerische Modellierung mit neurowissenschaftlichen Daten, um zu verstehen, wie das Gehirn Sprache verarbeitet und darstellt. Dieses interdisziplinäre Feld steht vor der Herausforderung, verschiedene Analyseebenen von neuronaler Aktivität bis zu sprachlichem Verhalten zu verbinden.",
          nl: "Computationele neurolinguïstiek combineert computationele modellering met neurowetenschappelijke data om te begrijpen hoe de hersenen taal verwerken en representeren. Dit interdisciplinaire veld staat voor de uitdaging om verschillende analyseniveaus te verbinden van neurale activiteit tot linguïstisch gedrag."
        }
      },
      {
        question: {
          en: "What is the fundamental challenge in computational evolutionary linguistics?",
          es: "¿Cuál es el desafío fundamental en lingüística evolutiva computacional?",
          de: "Was ist die grundlegende Herausforderung in der computationellen evolutionären Linguistik?",
          nl: "Wat is de fundamentele uitdaging in computationele evolutionaire linguïstiek?"
        },
        options: [
          { en: "Modeling how language as a complex adaptive system emerges and evolves over time", es: "Modelar cómo el lenguaje como sistema adaptativo complejo emerge y evoluciona con el tiempo", de: "Modellierung, wie Sprache als komplexes adaptives System über die Zeit emergiert und sich entwickelt", nl: "Modelleren hoe taal als complex adaptief systeem ontstaat en evolueert over tijd" },
          { en: "Studying extinct languages only", es: "Estudiar solo idiomas extintos", de: "Studium nur ausgestorbener Sprachen", nl: "Alleen uitgestorven talen bestuderen" },
          { en: "Analyzing DNA sequences for language genes", es: "Analizar secuencias de ADN para genes del lenguaje", de: "Analyse von DNA-Sequenzen für Sprachgene", nl: "Analyseren van DNA-sequenties voor taalgenen" },
          { en: "Creating artificial languages", es: "Crear idiomas artificiales", de: "Erstellung künstlicher Sprachen", nl: "Creëren van kunstmatige talen" }
        ],
        correct: 0,
        explanation: {
          en: "Computational evolutionary linguistics studies how language emerges, changes, and evolves as a complex adaptive system through processes of cultural transmission, innovation, and selection. This requires modeling the interaction between cognitive, social, and environmental factors.",
          es: "La lingüística evolutiva computacional estudia cómo el lenguaje emerge, cambia y evoluciona como un sistema adaptativo complejo a través de procesos de transmisión cultural, innovación y selección. Esto requiere modelar la interacción entre factores cognitivos, sociales y ambientales.",
          de: "Die computationelle evolutionäre Linguistik untersucht, wie Sprache als komplexes adaptives System durch Prozesse kultureller Übertragung, Innovation und Selektion emergiert, sich verändert und entwickelt. Dies erfordert die Modellierung der Interaktion zwischen kognitiven, sozialen und umweltbedingten Faktoren.",
          nl: "Computationele evolutionaire linguïstiek bestudeert hoe taal ontstaat, verandert en evolueert als een complex adaptief systeem door processen van culturele transmissie, innovatie en selectie. Dit vereist het modelleren van de interactie tussen cognitieve, sociale en omgevingsfactoren."
        }
      },
      {
        question: {
          en: "What is the primary goal of computational framework for optimality theory?",
          es: "¿Cuál es el objetivo principal del marco computacional para la teoría de optimalidad?",
          de: "Was ist das primäre Ziel des rechnerischen Rahmenwerks für die Optimalitätstheorie?",
          nl: "Wat is het primaire doel van het computationele kader voor optimaliteitstheorie?"
        },
        options: [
          { en: "Modeling how violable constraints interact to determine optimal linguistic forms", es: "Modelar cómo las restricciones violables interactúan para determinar formas lingüísticas óptimas", de: "Modellierung, wie verletzbare Beschränkungen interagieren, um optimale sprachliche Formen zu bestimmen", nl: "Modelleren hoe schendbare beperkingen interacteren om optimale linguïstische vormen te bepalen" },
          { en: "Finding the fastest parsing algorithms", es: "Encontrar los algoritmos de análisis más rápidos", de: "Finden der schnellsten Parsing-Algorithmen", nl: "Vinden van de snelste parsing algoritmen" },
          { en: "Optimizing computational resources", es: "Optimizar recursos computacionales", de: "Optimierung rechnerischer Ressourcen", nl: "Optimaliseren van computationele resources" },
          { en: "Creating perfect language models", es: "Crear modelos de lenguaje perfectos", de: "Erstellung perfekter Sprachmodelle", nl: "Creëren van perfecte taalmodellen" }
        ],
        correct: 0,
        explanation: {
          en: "Optimality Theory proposes that linguistic forms are selected through the interaction of universal, violable constraints rather than through rigid rules. Computational implementations must model how constraint rankings and interactions determine the optimal candidate from a set of possible forms.",
          es: "La Teoría de Optimalidad propone que las formas lingüísticas se seleccionan a través de la interacción de restricciones universales y violables en lugar de reglas rígidas. Las implementaciones computacionales deben modelar cómo las clasificaciones e interacciones de restricciones determinan el candidato óptimo de un conjunto de formas posibles.",
          de: "Die Optimalitätstheorie schlägt vor, dass sprachliche Formen durch die Interaktion universeller, verletzbarer Beschränkungen anstatt durch starre Regeln ausgewählt werden. Rechnerische Implementierungen müssen modellieren, wie Beschränkungsrankings und -interaktionen den optimalen Kandidaten aus einer Menge möglicher Formen bestimmen.",
          nl: "Optimaliteitstheorie stelt voor dat linguïstische vormen worden geselecteerd door de interactie van universele, schendbare beperkingen in plaats van door rigide regels. Computationele implementaties moeten modelleren hoe beperkingsrangschikkingen en -interacties de optimale kandidaat uit een set mogelijke vormen bepalen."
        }
      },
      {
        question: {
          en: "What is the fundamental challenge in implementing computational cognitive linguistics models?",
          es: "¿Cuál es el desafío fundamental en implementar modelos computacionales de lingüística cognitiva?",
          de: "Was ist die grundlegende Herausforderung bei der Implementierung rechnerischer kognitiver Linguistikmodelle?",
          nl: "Wat is de fundamentele uitdaging bij het implementeren van computationele cognitieve linguïstiek modellen?"
        },
        options: [
          { en: "Modeling how conceptual structures and cognitive processes shape linguistic representation", es: "Modelar cómo estructuras conceptuales y procesos cognitivos dan forma a la representación lingüística", de: "Modellierung, wie konzeptuelle Strukturen und kognitive Prozesse sprachliche Darstellung formen", nl: "Modelleren hoe conceptuele structuren en cognitieve processen linguïstische representatie vormen" },
          { en: "Creating user-friendly interfaces", es: "Crear interfaces amigables para el usuario", de: "Erstellung benutzerfreundlicher Schnittstellen", nl: "Creëren van gebruiksvriendelijke interfaces" },
          { en: "Processing large datasets efficiently", es: "Procesar grandes conjuntos de datos eficientemente", de: "Effiziente Verarbeitung großer Datensätze", nl: "Efficiënt verwerken van grote datasets" },
          { en: "Analyzing brain scans automatically", es: "Analizar escáneres cerebrales automáticamente", de: "Automatische Analyse von Gehirnscans", nl: "Automatisch analyseren van hersenscans" }
        ],
        correct: 0,
        explanation: {
          en: "Cognitive linguistics emphasizes that language is grounded in general cognitive processes and conceptual structures like metaphor, metonymy, and mental spaces. Computational models must capture how these cognitive mechanisms influence linguistic structure and meaning construction.",
          es: "La lingüística cognitiva enfatiza que el lenguaje se basa en procesos cognitivos generales y estructuras conceptuales como metáfora, metonimia y espacios mentales. Los modelos computacionales deben capturar cómo estos mecanismos cognitivos influyen en la estructura lingüística y construcción de significado.",
          de: "Die kognitive Linguistik betont, dass Sprache in allgemeinen kognitiven Prozessen und konzeptuellen Strukturen wie Metapher, Metonymie und mentalen Räumen verwurzelt ist. Rechnerische Modelle müssen erfassen, wie diese kognitiven Mechanismen sprachliche Struktur und Bedeutungskonstruktion beeinflussen.",
          nl: "Cognitieve linguïstiek benadrukt dat taal gebaseerd is op algemene cognitieve processen en conceptuele structuren zoals metafoor, metonymie en mentale ruimten. Computationele modellen moeten vastleggen hoe deze cognitieve mechanismen linguïstische structuur en betekenisconstructie beïnvloeden."
        }
      },
      {
        question: {
          en: "What is the central challenge in computational corpus linguistics?",
          es: "¿Cuál es el desafío central en lingüística de corpus computacional?",
          de: "Was ist die zentrale Herausforderung in der rechnerischen Korpuslinguistik?",
          nl: "Wat is de centrale uitdaging in computationele corpuslinguïstiek?"
        },
        options: [
          { en: "Developing methods to extract meaningful linguistic patterns from massive text collections", es: "Desarrollar métodos para extraer patrones lingüísticos significativos de colecciones masivas de texto", de: "Entwicklung von Methoden zur Extraktion bedeutungsvoller sprachlicher Muster aus massiven Textsammlungen", nl: "Ontwikkelen van methoden om betekenisvolle linguïstische patronen te extraheren uit massale tekstverzamelingen" },
          { en: "Storing large amounts of text efficiently", es: "Almacenar grandes cantidades de texto eficientemente", de: "Effiziente Speicherung großer Textmengen", nl: "Efficiënt opslaan van grote hoeveelheden tekst" },
          { en: "Creating search engines for texts", es: "Crear motores de búsqueda para textos", de: "Erstellung von Suchmaschinen für Texte", nl: "Creëren van zoekmachines voor teksten" },
          { en: "Converting texts to different formats", es: "Convertir textos a diferentes formatos", de: "Konvertierung von Texten in verschiedene Formate", nl: "Converteren van teksten naar verschillende formaten" }
        ],
        correct: 0,
        explanation: {
          en: "Computational corpus linguistics faces the challenge of developing sophisticated statistical and computational methods to identify and analyze linguistic patterns, collocations, grammatical constructions, and semantic associations in very large collections of authentic language data.",
          es: "La lingüística de corpus computacional enfrenta el desafío de desarrollar métodos estadísticos y computacionales sofisticados para identificar y analizar patrones lingüísticos, colocaciones, construcciones gramaticales y asociaciones semánticas en colecciones muy grandes de datos de lenguaje auténtico.",
          de: "Die rechnerische Korpuslinguistik steht vor der Herausforderung, ausgeklügelte statistische und rechnerische Methoden zu entwickeln, um sprachliche Muster, Kollokationen, grammatische Konstruktionen und semantische Assoziationen in sehr großen Sammlungen authentischer Sprachdaten zu identifizieren und zu analysieren.",
          nl: "Computationele corpuslinguïstiek staat voor de uitdaging van het ontwikkelen van geavanceerde statistische en computationele methoden om linguïstische patronen, collocaties, grammaticale constructies en semantische associaties in zeer grote verzamelingen authentieke taaldata te identificeren en analyseren."
        }
      },
      {
        question: {
          en: "What is the primary challenge in computational stylistics and authorship attribution?",
          es: "¿Cuál es el desafío principal en estilística computacional y atribución de autoría?",
          de: "Was ist die primäre Herausforderung in der Computerstilistik und Autorenschaftsattribution?",
          nl: "Wat is de primaire uitdaging in computationele stilistiek en auteurschap attributie?"
        },
        options: [
          { en: "Identifying distinctive linguistic features that reveal individual writing styles", es: "Identificar características lingüísticas distintivas que revelan estilos de escritura individuales", de: "Identifizierung unterscheidender sprachlicher Merkmale, die individuelle Schreibstile offenbaren", nl: "Identificeren van onderscheidende linguïstische kenmerken die individuele schrijfstijlen onthullen" },
          { en: "Improving text readability scores", es: "Mejorar puntuaciones de legibilidad de texto", de: "Verbesserung von Textlesbarkeits-Scores", nl: "Verbeteren van tekstleesbaarheidsscores" },
          { en: "Creating writing style guides", es: "Crear guías de estilo de escritura", de: "Erstellung von Schreibstil-Leitfäden", nl: "Creëren van schrijfstijlgidsen" },
          { en: "Analyzing publication trends", es: "Analizar tendencias de publicación", de: "Analyse von Publikationstrends", nl: "Analyseren van publicatietrends" }
        ],
        correct: 0,
        explanation: {
          en: "Computational stylistics seeks to identify quantifiable linguistic features that characterize individual authors or stylistic periods. This involves sophisticated statistical analysis to distinguish between conscious stylistic choices and unconscious linguistic habits that serve as authorial fingerprints.",
          es: "La estilística computacional busca identificar características lingüísticas cuantificables que caracterizan autores individuales o períodos estilísticos. Esto involucra análisis estadístico sofisticado para distinguir entre elecciones estilísticas conscientes y hábitos lingüísticos inconscientes que sirven como huellas dactilares autoriales.",
          de: "Die Computerstilistik sucht quantifizierbare sprachliche Merkmale zu identifizieren, die individuelle Autoren oder stilistische Perioden charakterisieren. Dies beinhaltet ausgeklügelte statistische Analyse, um zwischen bewussten stilistischen Entscheidungen und unbewussten sprachlichen Gewohnheiten zu unterscheiden, die als autorale Fingerabdrücke dienen.",
          nl: "Computationele stilistiek zoekt kwantificeerbare linguïstische kenmerken te identificeren die individuele auteurs of stilistische periodes karakteriseren. Dit omvat geavanceerde statistische analyse om onderscheid te maken tussen bewuste stilistische keuzes en onbewuste linguïstische gewoonten die dienen als autoriale vingerafdrukken."
        }
      },
      {
        question: {
          en: "What is the fundamental challenge in computational sign language processing?",
          es: "¿Cuál es el desafío fundamental en procesamiento computacional de lenguaje de señas?",
          de: "Was ist die grundlegende Herausforderung bei der computationellen Verarbeitung von Gebärdensprachen?",
          nl: "Wat is de fundamentele uitdaging in computationele gebarentaal verwerking?"
        },
        options: [
          { en: "Modeling the multi-dimensional visual-spatial nature of sign language structure", es: "Modelar la naturaleza visual-espacial multidimensional de la estructura del lenguaje de señas", de: "Modellierung der mehrdimensionalen visuell-räumlichen Natur der Gebärdensprachstruktur", nl: "Modelleren van de multidimensionale visueel-ruimtelijke aard van gebarentaalstructuur" },
          { en: "Creating sign language dictionaries", es: "Crear diccionarios de lenguaje de señas", de: "Erstellung von Gebärdensprach-Wörterbüchern", nl: "Creëren van gebarentaal woordenboeken" },
          { en: "Teaching deaf students to read", es: "Enseñar a estudiantes sordos a leer", de: "Gehörlosen Studenten das Lesen beibringen", nl: "Dove studenten leren lezen" },
          { en: "Converting text to sign language videos", es: "Convertir texto a videos de lenguaje de señas", de: "Konvertierung von Text zu Gebärdensprach-Videos", nl: "Converteren van tekst naar gebarentaal video's" }
        ],
        correct: 0,
        explanation: {
          en: "Sign languages use three-dimensional space, facial expressions, body movements, and simultaneous multi-layered information encoding. Computational processing must handle the complex spatial-temporal relationships and multimodal nature that are fundamentally different from spoken language processing.",
          es: "Los lenguajes de señas usan espacio tridimensional, expresiones faciales, movimientos corporales y codificación de información multicapa simultánea. El procesamiento computacional debe manejar las relaciones espacio-temporales complejas y naturaleza multimodal que son fundamentalmente diferentes del procesamiento de lenguaje hablado.",
          de: "Gebärdensprachen verwenden dreidimensionalen Raum, Gesichtsausdrücke, Körperbewegungen und simultane mehrschichtige Informationskodierung. Die computationelle Verarbeitung muss die komplexen räumlich-zeitlichen Beziehungen und multimodale Natur handhaben, die sich grundlegend von der Verarbeitung gesprochener Sprache unterscheiden.",
          nl: "Gebarentalen gebruiken driedimensionale ruimte, gezichtsuitdrukkingen, lichaamsbewegingen en gelijktijdige meerlaagse informatie-encoding. Computationele verwerking moet de complexe ruimtelijk-temporele relaties en multimodale aard behandelen die fundamenteel verschillen van gesproken taalverwerking."
        }
      },
      {
        question: {
          en: "What is the central challenge in computational endangered language documentation?",
          es: "¿Cuál es el desafío central en documentación computacional de idiomas en peligro de extinción?",
          de: "Was ist die zentrale Herausforderung in der computationellen Dokumentation gefährdeter Sprachen?",
          nl: "Wat is de centrale uitdaging in computationele documentatie van bedreigde talen?"
        },
        options: [
          { en: "Developing methods to analyze and preserve languages with limited data and unique structural properties", es: "Desarrollar métodos para analizar y preservar idiomas con datos limitados y propiedades estructurales únicas", de: "Entwicklung von Methoden zur Analyse und Bewahrung von Sprachen mit begrenzten Daten und einzigartigen strukturellen Eigenschaften", nl: "Ontwikkelen van methoden om talen te analyseren en behouden met beperkte data en unieke structurele eigenschappen" },
          { en: "Creating online language courses", es: "Crear cursos de idiomas en línea", de: "Erstellung von Online-Sprachkursen", nl: "Creëren van online taalcursussen" },
          { en: "Building translation software", es: "Construir software de traducción", de: "Aufbau von Übersetzungssoftware", nl: "Bouwen van vertaalsoftware" },
          { en: "Recording audio and video materials", es: "Grabar materiales de audio y video", de: "Aufnahme von Audio- und Videomaterialien", nl: "Opnemen van audio en video materialen" }
        ],
        correct: 0,
        explanation: {
          en: "Endangered language documentation faces unique computational challenges including working with small datasets, handling unusual phonological and grammatical structures not found in major languages, and developing tools that work with limited linguistic resources and native speaker availability.",
          es: "La documentación de idiomas en peligro enfrenta desafíos computacionales únicos incluyendo trabajar con conjuntos de datos pequeños, manejar estructuras fonológicas y gramaticales inusuales no encontradas en idiomas principales, y desarrollar herramientas que funcionen con recursos lingüísticos limitados y disponibilidad de hablantes nativos.",
          de: "Die Dokumentation gefährdeter Sprachen steht vor einzigartigen rechnerischen Herausforderungen, einschließlich der Arbeit mit kleinen Datensätzen, dem Umgang mit ungewöhnlichen phonologischen und grammatischen Strukturen, die in Hauptsprachen nicht zu finden sind, und der Entwicklung von Werkzeugen, die mit begrenzten sprachlichen Ressourcen und der Verfügbarkeit von Muttersprachlern funktionieren.",
          nl: "Documentatie van bedreigde talen staat voor unieke computationele uitdagingen inclusief werken met kleine datasets, omgaan met ongewone fonologische en grammaticale structuren niet gevonden in hoofdtalen, en ontwikkelen van tools die werken met beperkte linguïstische resources en beschikbaarheid van moedertaalsprekers."
        }
      },
      {
        question: {
          en: "What is the primary challenge in computational formal semantics?",
          es: "¿Cuál es el desafío principal en semántica formal computacional?",
          de: "Was ist die primäre Herausforderung in der computationellen formalen Semantik?",
          nl: "Wat is de primaire uitdaging in computationele formele semantiek?"
        },
        options: [
          { en: "Implementing precise logical representations of meaning that capture natural language semantics", es: "Implementar representaciones lógicas precisas de significado que capturen la semántica del lenguaje natural", de: "Implementierung präziser logischer Bedeutungsdarstellungen, die natürliche Sprachsemantik erfassen", nl: "Implementeren van precieze logische representaties van betekenis die natuurlijke taalsemantiek vastleggen" },
          { en: "Creating user-friendly semantic interfaces", es: "Crear interfaces semánticas amigables para el usuario", de: "Erstellung benutzerfreundlicher semantischer Schnittstellen", nl: "Creëren van gebruiksvriendelijke semantische interfaces" },
          { en: "Processing semantic queries quickly", es: "Procesar consultas semánticas rápidamente", de: "Schnelle Verarbeitung semantischer Anfragen", nl: "Snel verwerken van semantische queries" },
          { en: "Building semantic search engines", es: "Construir motores de búsqueda semánticos", de: "Aufbau semantischer Suchmaschinen", nl: "Bouwen van semantische zoekmachines" }
        ],
        correct: 0,
        explanation: {
          en: "Computational formal semantics aims to provide precise mathematical representations of linguistic meaning using logical frameworks. The challenge is bridging the gap between natural language's complexity and flexibility and the rigid precision required by formal logical systems.",
          es: "La semántica formal computacional tiene como objetivo proporcionar representaciones matemáticas precisas del significado lingüístico usando marcos lógicos. El desafío es cerrar la brecha entre la complejidad y flexibilidad del lenguaje natural y la precisión rígida requerida por sistemas lógicos formales.",
          de: "Die computationelle formale Semantik zielt darauf ab, präzise mathematische Darstellungen sprachlicher Bedeutung mit logischen Rahmenwerken zu liefern. Die Herausforderung besteht darin, die Kluft zwischen der Komplexität und Flexibilität natürlicher Sprache und der rigiden Präzision formaler logischer Systeme zu überbrücken.",
          nl: "Computationele formele semantiek beoogt precieze wiskundige representaties van linguïstische betekenis te bieden met behulp van logische kaders. De uitdaging is het overbruggen van de kloof tussen de complexiteit en flexibiliteit van natuurlijke taal en de rigide precisie vereist door formele logische systemen."
        }
      },
      {
        question: {
          en: "What is the fundamental challenge in computational argument mining?",
          es: "¿Cuál es el desafío fundamental en minería de argumentos computacional?",
          de: "Was ist die grundlegende Herausforderung beim computationellen Argument Mining?",
          nl: "Wat is de fundamentele uitdaging in computationele argumentmining?"
        },
        options: [
          { en: "Automatically identifying and analyzing argumentative structures and relationships in discourse", es: "Identificar y analizar automáticamente estructuras argumentativas y relaciones en el discurso", de: "Automatische Identifizierung und Analyse argumentativer Strukturen und Beziehungen im Diskurs", nl: "Automatisch identificeren en analyseren van argumentatieve structuren en relaties in discours" },
          { en: "Finding factual information in texts", es: "Encontrar información factual en textos", de: "Finden faktischer Informationen in Texten", nl: "Vinden van feitelijke informatie in teksten" },
          { en: "Extracting opinions from social media", es: "Extraer opiniones de redes sociales", de: "Extraktion von Meinungen aus sozialen Medien", nl: "Extraheren van meningen uit social media" },
          { en: "Classifying document types", es: "Clasificar tipos de documentos", de: "Klassifizierung von Dokumenttypen", nl: "Classificeren van documenttypen" }
        ],
        correct: 0,
        explanation: {
          en: "Computational argument mining involves the automatic identification of argumentative components (claims, premises, evidence) and their relationships (support, attack, warrant) in natural language text. This requires sophisticated understanding of rhetorical structure and reasoning patterns.",
          es: "La minería de argumentos computacional involucra la identificación automática de componentes argumentativos (afirmaciones, premisas, evidencia) y sus relaciones (apoyo, ataque, garantía) en texto de lenguaje natural. Esto requiere comprensión sofisticada de estructura retórica y patrones de razonamiento.",
          de: "Computationelles Argument Mining beinhaltet die automatische Identifizierung argumentativer Komponenten (Behauptungen, Prämissen, Belege) und ihrer Beziehungen (Unterstützung, Angriff, Rechtfertigung) in natürlichsprachigem Text. Dies erfordert ausgeklügeltes Verständnis rhetorischer Struktur und Denkmustern.",
          nl: "Computationele argumentmining omvat de automatische identificatie van argumentatieve componenten (claims, premissen, bewijs) en hun relaties (ondersteuning, aanval, waarborg) in natuurlijke taaltekst. Dit vereist geavanceerd begrip van retorische structuur en redeneringspatronen."
        }
      },
      {
        question: {
          en: "What is the central challenge in computational discourse coherence modeling?",
          es: "¿Cuál es el desafío central en modelado computacional de coherencia del discurso?",
          de: "Was ist die zentrale Herausforderung bei der computationellen Modellierung von Diskurskohärenz?",
          nl: "Wat is de centrale uitdaging in computationele discours coherentie modellering?"
        },
        options: [
          { en: "Capturing the complex relationships that make discourse feel unified and meaningful", es: "Capturar las relaciones complejas que hacen que el discurso se sienta unificado y significativo", de: "Erfassung der komplexen Beziehungen, die Diskurs einheitlich und bedeutungsvoll erscheinen lassen", nl: "Vastleggen van de complexe relaties die discours verenigd en betekenisvol doen voelen" },
          { en: "Measuring text length and complexity", es: "Medir longitud y complejidad del texto", de: "Messung von Textlänge und Komplexität", nl: "Meten van tekstlengte en complexiteit" },
          { en: "Identifying grammatical errors", es: "Identificar errores gramaticales", de: "Identifizierung grammatischer Fehler", nl: "Identificeren van grammaticale fouten" },
          { en: "Counting sentence frequencies", es: "Contar frecuencias de oraciones", de: "Zählung von Satzhäufigkeiten", nl: "Tellen van zinfrequenties" }
        ],
        correct: 0,
        explanation: {
          en: "Discourse coherence involves modeling how sentences and larger text segments relate to each other through various linguistic and conceptual relationships to create a unified, meaningful whole. This requires understanding topic continuity, causal relationships, temporal sequences, and thematic development.",
          es: "La coherencia del discurso involucra modelar cómo las oraciones y segmentos de texto más grandes se relacionan entre sí a través de varias relaciones lingüísticas y conceptuales para crear un todo unificado y significativo. Esto requiere entender continuidad temática, relaciones causales, secuencias temporales y desarrollo temático.",
          de: "Diskurskohärenz beinhaltet die Modellierung, wie Sätze und größere Textsegmente durch verschiedene sprachliche und konzeptuelle Beziehungen miteinander in Verbindung stehen, um ein einheitliches, bedeutungsvolles Ganzes zu schaffen. Dies erfordert das Verständnis von Themenkontinuität, kausalen Beziehungen, zeitlichen Sequenzen und thematischer Entwicklung.",
          nl: "Discours coherentie omvat het modelleren hoe zinnen en grotere tekst segmenten zich tot elkaar verhouden door verschillende linguïstische en conceptuele relaties om een verenigd, betekenisvol geheel te creëren. Dit vereist begrip van topic continuïteit, causale relaties, temporele sequenties en thematische ontwikkeling."
        }
      },
      {
        question: {
          en: "What is the fundamental challenge in computational frame semantics?",
          es: "¿Cuál es el desafío fundamental en semántica de marcos computacional?",
          de: "Was ist die grundlegende Herausforderung in der computationellen Frame-Semantik?",
          nl: "Wat is de fundamentele uitdaging in computationele frame semantiek?"
        },
        options: [
          { en: "Modeling how conceptual frames evoke and structure semantic roles and relationships", es: "Modelar cómo los marcos conceptuales evocan y estructuran roles y relaciones semánticas", de: "Modellierung, wie konzeptuelle Frames semantische Rollen und Beziehungen evozieren und strukturieren", nl: "Modelleren hoe conceptuele frames semantische rollen en relaties oproepen en structureren" },
          { en: "Creating visual frameworks for data", es: "Crear marcos visuales para datos", de: "Erstellung visueller Rahmen für Daten", nl: "Creëren van visuele kaders voor data" },
          { en: "Building database schemas", es: "Construir esquemas de base de datos", de: "Aufbau von Datenbankschemas", nl: "Bouwen van database schema's" },
          { en: "Designing user interface frames", es: "Diseñar marcos de interfaz de usuario", de: "Entwurf von Benutzeroberflächen-Frames", nl: "Ontwerpen van gebruikersinterface frames" }
        ],
        correct: 0,
        explanation: {
          en: "Frame semantics proposes that word meanings are understood relative to conceptual structures (frames) that represent knowledge about situations, events, and entities. Computational models must capture how lexical items evoke frames and how frame elements relate to syntactic constituents.",
          es: "La semántica de marcos propone que los significados de las palabras se entienden relativos a estructuras conceptuales (marcos) que representan conocimiento sobre situaciones, eventos y entidades. Los modelos computacionales deben capturar cómo los elementos léxicos evocan marcos y cómo los elementos del marco se relacionan con constituyentes sintácticos.",
          de: "Frame-Semantik schlägt vor, dass Wortbedeutungen relativ zu konzeptuellen Strukturen (Frames) verstanden werden, die Wissen über Situationen, Ereignisse und Entitäten repräsentieren. Rechnerische Modelle müssen erfassen, wie lexikalische Elemente Frames evozieren und wie Frame-Elemente sich zu syntaktischen Konstituenten verhalten.",
          nl: "Frame semantiek stelt voor dat woordbetekenissen begrepen worden relatief aan conceptuele structuren (frames) die kennis over situaties, gebeurtenissen en entiteiten representeren. Computationele modellen moeten vastleggen hoe lexicale items frames oproepen en hoe frame elementen zich verhouden tot syntactische constituenten."
        }
      },
      {
        question: {
          en: "What is the primary challenge in computational lexicography?",
          es: "¿Cuál es el desafío principal en lexicografía computacional?",
          de: "Was ist die primäre Herausforderung in der Computerlexikographie?",
          nl: "Wat is de primaire uitdaging in computationele lexicografie?"
        },
        options: [
          { en: "Automatically extracting, organizing, and representing comprehensive lexical knowledge from large-scale data", es: "Extraer, organizar y representar automáticamente conocimiento léxico comprensivo de datos a gran escala", de: "Automatische Extraktion, Organisation und Darstellung umfassenden lexikalischen Wissens aus großskaligen Daten", nl: "Automatisch extraheren, organiseren en representeren van uitgebreide lexicale kennis uit grootschalige data" },
          { en: "Creating paper dictionaries efficiently", es: "Crear diccionarios en papel eficientemente", de: "Effiziente Erstellung von Papierwörterbüchern", nl: "Efficiënt papieren woordenboeken creëren" },
          { en: "Translating between dictionary formats", es: "Traducir entre formatos de diccionario", de: "Übersetzen zwischen Wörterbuchformaten", nl: "Vertalen tussen woordenboekformaten" },
          { en: "Alphabetizing word lists", es: "Alfabetizar listas de palabras", de: "Alphabetisierung von Wortlisten", nl: "Alfabetiseren van woordlijsten" }
        ],
        correct: 0,
        explanation: {
          en: "Computational lexicography involves automatically discovering and structuring lexical information including word frequencies, collocations, semantic relationships, and usage patterns from large corpora to create comprehensive digital lexical resources.",
          es: "La lexicografía computacional involucra descubrir y estructurar automáticamente información léxica incluyendo frecuencias de palabras, colocaciones, relaciones semánticas y patrones de uso de corpus grandes para crear recursos léxicos digitales comprensivos.",
          de: "Computerlexikographie beinhaltet die automatische Entdeckung und Strukturierung lexikalischer Informationen einschließlich Wortfrequenzen, Kollokationen, semantischen Beziehungen und Gebrauchsmustern aus großen Korpora zur Erstellung umfassender digitaler lexikalischer Ressourcen.",
          nl: "Computationele lexicografie omvat het automatisch ontdekken en structureren van lexicale informatie inclusief woordfrequenties, collocaties, semantische relaties en gebruikspatronen uit grote corpora om uitgebreide digitale lexicale bronnen te creëren."
        }
      },
      {
        question: {
          en: "What is the central challenge in computational sentiment analysis?",
          es: "¿Cuál es el desafío central en análisis de sentimientos computacional?",
          de: "Was ist die zentrale Herausforderung in der computationellen Sentimentanalyse?",
          nl: "Wat is de centrale uitdaging in computationele sentiment analyse?"
        },
        options: [
          { en: "Accurately detecting and interpreting subjective attitudes, emotions, and opinions in text", es: "Detectar e interpretar con precisión actitudes subjetivas, emociones y opiniones en el texto", de: "Genaue Erkennung und Interpretation subjektiver Einstellungen, Emotionen und Meinungen in Texten", nl: "Accuraat detecteren en interpreteren van subjectieve attitudes, emoties en meningen in tekst" },
          { en: "Counting positive and negative words", es: "Contar palabras positivas y negativas", de: "Zählung positiver und negativer Wörter", nl: "Tellen van positieve en negatieve woorden" },
          { en: "Analyzing grammatical structures", es: "Analizar estructuras gramaticales", de: "Analyse grammatischer Strukturen", nl: "Analyseren van grammaticale structuren" },
          { en: "Measuring text length and complexity", es: "Medir longitud y complejidad del texto", de: "Messung von Textlänge und Komplexität", nl: "Meten van tekstlengte en complexiteit" }
        ],
        correct: 0,
        explanation: {
          en: "Sentiment analysis must handle complex phenomena like sarcasm, irony, context-dependent meaning, implicit opinions, and the interaction between multiple sentiment-bearing elements, requiring sophisticated understanding of pragmatics and discourse structure.",
          es: "El análisis de sentimientos debe manejar fenómenos complejos como sarcasmo, ironía, significado dependiente del contexto, opiniones implícitas y la interacción entre múltiples elementos portadores de sentimiento, requiriendo comprensión sofisticada de pragmática y estructura del discurso.",
          de: "Sentimentanalyse muss komplexe Phänomene wie Sarkasmus, Ironie, kontextabhängige Bedeutung, implizite Meinungen und die Interaktion zwischen mehreren sentimenttragenden Elementen handhaben, was ausgeklügeltes Verständnis von Pragmatik und Diskursstruktur erfordert.",
          nl: "Sentiment analyse moet complexe fenomenen behandelen zoals sarcasme, ironie, contextafhankelijke betekenis, impliciete meningen en de interactie tussen meerdere sentimentdragende elementen, wat geavanceerd begrip van pragmatiek en discours structuur vereist."
        }
      },
      {
        question: {
          en: "What is the fundamental challenge in computational information extraction?",
          es: "¿Cuál es el desafío fundamental en extracción de información computacional?",
          de: "Was ist die grundlegende Herausforderung bei der computationellen Informationsextraktion?",
          nl: "Wat is de fundamentele uitdaging in computationele informatie extractie?"
        },
        options: [
          { en: "Automatically identifying and structuring relevant information from unstructured text", es: "Identificar y estructurar automáticamente información relevante de texto no estructurado", de: "Automatische Identifizierung und Strukturierung relevanter Informationen aus unstrukturiertem Text", nl: "Automatisch identificeren en structureren van relevante informatie uit ongestructureerde tekst" },
          { en: "Downloading files from the internet", es: "Descargar archivos de internet", de: "Dateien aus dem Internet herunterladen", nl: "Bestanden downloaden van internet" },
          { en: "Creating backup copies of data", es: "Crear copias de respaldo de datos", de: "Erstellung von Backup-Kopien von Daten", nl: "Creëren van backup kopieën van data" },
          { en: "Compressing text files", es: "Comprimir archivos de texto", de: "Komprimierung von Textdateien", nl: "Comprimeren van tekstbestanden" }
        ],
        correct: 0,
        explanation: {
          en: "Information extraction transforms unstructured natural language text into structured, machine-readable formats by identifying entities, relationships, and events. This requires sophisticated pattern recognition and semantic understanding to handle linguistic variability and ambiguity.",
          es: "La extracción de información transforma texto de lenguaje natural no estructurado en formatos estructurados legibles por máquina identificando entidades, relaciones y eventos. Esto requiere reconocimiento de patrones sofisticado y comprensión semántica para manejar variabilidad lingüística y ambigüedad.",
          de: "Informationsextraktion transformiert unstrukturierten natürlichsprachlichen Text in strukturierte, maschinenlesbare Formate durch die Identifizierung von Entitäten, Beziehungen und Ereignissen. Dies erfordert ausgeklügelte Mustererkennung und semantisches Verständnis, um sprachliche Variabilität und Mehrdeutigkeit zu handhaben.",
          nl: "Informatie extractie transformeert ongestructureerde natuurlijke taaltekst naar gestructureerde, machine-leesbare formaten door entiteiten, relaties en gebeurtenissen te identificeren. Dit vereist geavanceerde patroonherkenning en semantisch begrip om linguïstische variabiliteit en ambiguïteit te behandelen."
        }
      },
      {
        question: {
          en: "What is the primary challenge in computational question answering systems?",
          es: "¿Cuál es el desafío principal en sistemas computacionales de respuesta a preguntas?",
          de: "Was ist die primäre Herausforderung bei computationellen Frage-Antwort-Systemen?",
          nl: "Wat is de primaire uitdaging in computationele vraag-antwoord systemen?"
        },
        options: [
          { en: "Understanding questions and retrieving or generating accurate, relevant answers from knowledge sources", es: "Entender preguntas y recuperar o generar respuestas precisas y relevantes de fuentes de conocimiento", de: "Verständnis von Fragen und Abrufen oder Generieren genauer, relevanter Antworten aus Wissensquellen", nl: "Begrijpen van vragen en ophalen of genereren van accurate, relevante antwoorden uit kennisbronnen" },
          { en: "Storing large databases of questions", es: "Almacenar grandes bases de datos de preguntas", de: "Speicherung großer Fragendatenbanken", nl: "Opslaan van grote databases van vragen" },
          { en: "Creating user-friendly interfaces", es: "Crear interfaces amigables para el usuario", de: "Erstellung benutzerfreundlicher Schnittstellen", nl: "Creëren van gebruiksvriendelijke interfaces" },
          { en: "Processing audio input efficiently", es: "Procesar entrada de audio eficientemente", de: "Effiziente Verarbeitung von Audio-Eingaben", nl: "Efficiënt verwerken van audio-input" }
        ],
        correct: 0,
        explanation: {
          en: "Question answering requires complex natural language understanding to parse question intent, semantic matching to find relevant information, reasoning over knowledge bases, and natural language generation to formulate appropriate responses.",
          es: "La respuesta a preguntas requiere comprensión compleja del lenguaje natural para analizar la intención de la pregunta, coincidencia semántica para encontrar información relevante, razonamiento sobre bases de conocimiento, y generación de lenguaje natural para formular respuestas apropiadas.",
          de: "Frage-Antwort-Systeme erfordern komplexes natürliches Sprachverständnis zur Analyse der Frageintention, semantische Übereinstimmung zur Suche relevanter Informationen, Reasoning über Wissensbasen und natürliche Sprachgenerierung zur Formulierung angemessener Antworten.",
          nl: "Vraag-antwoord systemen vereisen complex natuurlijk taalbegrip om vraagintenties te analyseren, semantische matching om relevante informatie te vinden, redeneren over kennisbanken en natuurlijke taalgeneratie om gepaste antwoorden te formuleren."
        }
      },
      {
        question: {
          en: "What is the central challenge in computational text summarization?",
          es: "¿Cuál es el desafío central en resumen de texto computacional?",
          de: "Was ist die zentrale Herausforderung bei der computationellen Textzusammenfassung?",
          nl: "Wat is de centrale uitdaging in computationele tekst samenvatting?"
        },
        options: [
          { en: "Preserving essential information while reducing length and maintaining coherence", es: "Preservar información esencial mientras se reduce la longitud y se mantiene coherencia", de: "Bewahrung wesentlicher Informationen bei gleichzeitiger Längenreduzierung und Kohärenz-Erhaltung", nl: "Behouden van essentiële informatie terwijl lengte wordt verminderd en coherentie behouden blijft" },
          { en: "Making text shorter by any means", es: "Hacer texto más corto por cualquier medio", de: "Text um jeden Preis kürzer machen", nl: "Tekst korter maken op elke manier" },
          { en: "Converting text to bullet points", es: "Convertir texto a viñetas", de: "Text in Aufzählungspunkte umwandeln", nl: "Tekst omzetten naar opsommingstekens" },
          { en: "Removing all adjectives and adverbs", es: "Remover todos adjetivos y adverbios", de: "Entfernung aller Adjektive und Adverbien", nl: "Verwijderen van alle bijvoeglijke en bijwoordelijke naamwoorden" }
        ],
        correct: 0,
        explanation: {
          en: "Text summarization must identify the most important information, understand relationships between ideas, eliminate redundancy, and generate concise summaries that preserve the original meaning and maintain readability and flow.",
          es: "El resumen de texto debe identificar la información más importante, entender relaciones entre ideas, eliminar redundancia, y generar resúmenes concisos que preserven el significado original y mantengan legibilidad y fluidez.",
          de: "Textzusammenfassung muss die wichtigsten Informationen identifizieren, Beziehungen zwischen Ideen verstehen, Redundanz eliminieren und prägnante Zusammenfassungen generieren, die die ursprüngliche Bedeutung bewahren und Lesbarkeit und Fluss aufrechterhalten.",
          nl: "Tekst samenvatting moet de belangrijkste informatie identificeren, relaties tussen ideeën begrijpen, redundantie elimineren en beknopte samenvattingen genereren die de oorspronkelijke betekenis behouden en leesbaarheid en flow handhaven."
        }
      },
      {
        question: {
          en: "What is the fundamental challenge in computational word sense disambiguation?",
          es: "¿Cuál es el desafío fundamental en desambiguación del sentido de palabras computacional?",
          de: "Was ist die grundlegende Herausforderung bei der computationellen Wortsinndisambiguierung?",
          nl: "Wat is de fundamentele uitdaging in computationele woordbetekenis disambiguatie?"
        },
        options: [
          { en: "Determining which meaning of a polysemous word is intended in a specific context", es: "Determinar qué significado de una palabra polisémica se pretende en un contexto específico", de: "Bestimmung, welche Bedeutung eines polysemen Wortes in einem spezifischen Kontext beabsichtigt ist", nl: "Bepalen welke betekenis van een polysemisch woord bedoeld is in een specifieke context" },
          { en: "Finding synonyms for words", es: "Encontrar sinónimos para palabras", de: "Finden von Synonymen für Wörter", nl: "Vinden van synoniemen voor woorden" },
          { en: "Translating words to other languages", es: "Traducir palabras a otros idiomas", de: "Übersetzen von Wörtern in andere Sprachen", nl: "Vertalen van woorden naar andere talen" },
          { en: "Checking spelling accuracy", es: "Verificar precisión ortográfica", de: "Überprüfung der Rechtschreibgenauigkeit", nl: "Controleren van spellingnauwkeurigheid" }
        ],
        correct: 0,
        explanation: {
          en: "Word sense disambiguation addresses the challenge that many words have multiple meanings (polysemy). Systems must use contextual clues, semantic knowledge, and statistical patterns to select the correct sense from a word's possible meanings in each specific occurrence.",
          es: "La desambiguación del sentido de palabras aborda el desafío de que muchas palabras tienen múltiples significados (polisemia). Los sistemas deben usar pistas contextuales, conocimiento semántico y patrones estadísticos para seleccionar el sentido correcto de los significados posibles de una palabra en cada ocurrencia específica.",
          de: "Wortsinndisambiguierung behandelt die Herausforderung, dass viele Wörter mehrere Bedeutungen haben (Polysemie). Systeme müssen kontextuelle Hinweise, semantisches Wissen und statistische Muster verwenden, um bei jedem spezifischen Auftreten die richtige Bedeutung aus den möglichen Bedeutungen eines Wortes auszuwählen.",
          nl: "Woordbetekenis disambiguatie behandelt de uitdaging dat veel woorden meerdere betekenissen hebben (polysemie). Systemen moeten contextuele aanwijzingen, semantische kennis en statistische patronen gebruiken om de juiste betekenis te selecteren uit de mogelijke betekenissen van een woord bij elke specifieke gebeurtenis."
        }
      },
      {
        question: {
          en: "What is the primary challenge in computational named entity recognition?",
          es: "¿Cuál es el desafío principal en reconocimiento de entidades nombradas computacional?",
          de: "Was ist die primäre Herausforderung bei der computationellen Erkennung benannter Entitäten?",
          nl: "Wat is de primaire uitdaging in computationele named entity recognition?"
        },
        options: [
          { en: "Accurately identifying and classifying proper nouns and specific entities in varied contexts", es: "Identificar y clasificar con precisión nombres propios y entidades específicas en contextos variados", de: "Genaue Identifizierung und Klassifizierung von Eigennamen und spezifischen Entitäten in verschiedenen Kontexten", nl: "Accuraat identificeren en classificeren van eigennamen en specifieke entiteiten in gevarieerde contexten" },
          { en: "Creating lists of all possible names", es: "Crear listas de todos los nombres posibles", de: "Erstellung von Listen aller möglichen Namen", nl: "Creëren van lijsten van alle mogelijke namen" },
          { en: "Counting name frequencies in texts", es: "Contar frecuencias de nombres en textos", de: "Zählung von Namenfrequenzen in Texten", nl: "Tellen van naamfrequenties in teksten" },
          { en: "Translating names between scripts", es: "Traducir nombres entre sistemas de escritura", de: "Übersetzen von Namen zwischen Schriftsystemen", nl: "Vertalen van namen tussen schriftsystemen" }
        ],
        correct: 0,
        explanation: {
          en: "Named entity recognition must handle challenges like ambiguous entity boundaries, context-dependent categorization, multiple entity types, nested entities, and the need to distinguish between common nouns and proper names in diverse domains and languages.",
          es: "El reconocimiento de entidades nombradas debe manejar desafíos como límites ambiguos de entidades, categorización dependiente del contexto, múltiples tipos de entidades, entidades anidadas y la necesidad de distinguir entre sustantivos comunes y nombres propios en dominios y idiomas diversos.",
          de: "Die Erkennung benannter Entitäten muss Herausforderungen wie mehrdeutige Entitätsgrenzen, kontextabhängige Kategorisierung, mehrere Entitätstypen, verschachtelte Entitäten und die Notwendigkeit handhaben, zwischen gemeinsamen Substantiven und Eigennamen in verschiedenen Bereichen und Sprachen zu unterscheiden.",
          nl: "Named entity recognition moet uitdagingen behandelen zoals ambigue entiteitsgrenzen, contextafhankelijke categorisatie, meerdere entiteitstypen, geneste entiteiten en de noodzaak om onderscheid te maken tussen gewone zelfstandige naamwoorden en eigennamen in diverse domeinen en talen."
        }
      },
      {
        question: {
          en: "What is the central challenge in computational topic modeling?",
          es: "¿Cuál es el desafío central en modelado de temas computacional?",
          de: "Was ist die zentrale Herausforderung beim computationellen Topic Modeling?",
          nl: "Wat is de centrale uitdaging in computationele topic modellering?"
        },
        options: [
          { en: "Discovering latent thematic structures and content patterns in large document collections", es: "Descubrir estructuras temáticas latentes y patrones de contenido en grandes colecciones de documentos", de: "Entdeckung latenter thematischer Strukturen und Inhaltsmuster in großen Dokumentsammlungen", nl: "Ontdekken van latente thematische structuren en inhoudspatronen in grote documentverzamelingen" },
          { en: "Organizing documents by publication date", es: "Organizar documentos por fecha de publicación", de: "Organisation von Dokumenten nach Veröffentlichungsdatum", nl: "Organiseren van documenten op publicatiedatum" },
          { en: "Creating document titles automatically", es: "Crear títulos de documentos automáticamente", de: "Automatische Erstellung von Dokumenttiteln", nl: "Automatisch documenttitels creëren" },
          { en: "Counting document word lengths", es: "Contar longitudes de palabras de documentos", de: "Zählung von Dokumentwortlängen", nl: "Tellen van documentwoordlengtes" }
        ],
        correct: 0,
        explanation: {
          en: "Topic modeling uses statistical methods to identify abstract themes or topics that occur in document collections by analyzing patterns of word co-occurrence. The challenge is discovering meaningful, interpretable topics that capture semantic content without prior knowledge of document themes.",
          es: "El modelado de temas usa métodos estadísticos para identificar temas abstractos que ocurren en colecciones de documentos analizando patrones de co-ocurrencia de palabras. El desafío es descubrir temas significativos e interpretables que capturen contenido semántico sin conocimiento previo de temas de documentos.",
          de: "Topic Modeling verwendet statistische Methoden zur Identifizierung abstrakter Themen, die in Dokumentsammlungen auftreten, durch die Analyse von Wort-Koexistenz-Mustern. Die Herausforderung besteht darin, bedeutungsvolle, interpretierbare Themen zu entdecken, die semantischen Inhalt erfassen, ohne Vorwissen über Dokumentthemen.",
          nl: "Topic modelling gebruikt statistische methoden om abstracte thema's te identificeren die voorkomen in documentverzamelingen door patronen van woord co-voorkomen te analyseren. De uitdaging is het ontdekken van betekenisvolle, interpreteerbare onderwerpen die semantische inhoud vastleggen zonder voorkennis van documentthema's."
        }
      },
      {
        question: {
          en: "What is the fundamental challenge in computational machine translation quality estimation?",
          es: "¿Cuál es el desafío fundamental en estimación de calidad de traducción automática computacional?",
          de: "Was ist die grundlegende Herausforderung bei der computationellen Qualitätsbewertung maschineller Übersetzung?",
          nl: "Wat is de fundamentele uitdaging in computationele kwaliteitsschatting van machinevertaling?"
        },
        options: [
          { en: "Assessing translation quality without access to reference translations", es: "Evaluar calidad de traducción sin acceso a traducciones de referencia", de: "Bewertung der Übersetzungsqualität ohne Zugang zu Referenzübersetzungen", nl: "Beoordelen van vertalingskwaliteit zonder toegang tot referentievertalingen" },
          { en: "Comparing translation speeds", es: "Comparar velocidades de traducción", de: "Vergleich von Übersetzungsgeschwindigkeiten", nl: "Vergelijken van vertalingssnelheden" },
          { en: "Counting words in translations", es: "Contar palabras en traducciones", de: "Zählung von Wörtern in Übersetzungen", nl: "Woorden tellen in vertalingen" },
          { en: "Measuring translation costs", es: "Medir costos de traducción", de: "Messung von Übersetzungskosten", nl: "Meten van vertalingskosten" }
        ],
        correct: 0,
        explanation: {
          en: "Quality estimation must predict translation quality without human reference translations by analyzing linguistic features, fluency, adequacy, and semantic preservation. This requires sophisticated models that can assess multiple dimensions of translation quality autonomously.",
          es: "La estimación de calidad debe predecir calidad de traducción sin traducciones de referencia humanas analizando características lingüísticas, fluidez, adecuación y preservación semántica. Esto requiere modelos sofisticados que puedan evaluar múltiples dimensiones de calidad de traducción de forma autónoma.",
          de: "Qualitätsbewertung muss Übersetzungsqualität ohne menschliche Referenzübersetzungen vorhersagen, indem sie sprachliche Merkmale, Flüssigkeit, Angemessenheit und semantische Bewahrung analysiert. Dies erfordert ausgeklügelte Modelle, die mehrere Dimensionen der Übersetzungsqualität autonom bewerten können.",
          nl: "Kwaliteitsschatting moet vertalingskwaliteit voorspellen zonder menselijke referentievertalingen door linguïstische kenmerken, vloeiendheid, adequaatheid en semantische behoud te analyseren. Dit vereist geavanceerde modellen die meerdere dimensies van vertalingskwaliteit autonoom kunnen beoordelen."
        }
      },
      {
        question: {
          en: "What is the primary challenge in computational language modeling?",
          es: "¿Cuál es el desafío principal en modelado de lenguaje computacional?",
          de: "Was ist die primäre Herausforderung beim computationellen Sprachmodeling?",
          nl: "Wat is de primaire uitdaging in computationele taal modellering?"
        },
        options: [
          { en: "Capturing the statistical regularities and contextual dependencies of natural language", es: "Capturar regularidades estadísticas y dependencias contextuales del lenguaje natural", de: "Erfassung statistischer Regelmäßigkeiten und kontextueller Abhängigkeiten natürlicher Sprache", nl: "Vastleggen van statistische regelmatigheden en contextuele afhankelijkheden van natuurlijke taal" },
          { en: "Creating simple word lists", es: "Crear listas simples de palabras", de: "Erstellung einfacher Wortlisten", nl: "Creëren van eenvoudige woordlijsten" },
          { en: "Organizing grammar rules manually", es: "Organizar reglas gramaticales manualmente", de: "Manuelle Organisation grammatischer Regeln", nl: "Handmatig organiseren van grammaticaregels" },
          { en: "Storing language data efficiently", es: "Almacenar datos de lenguaje eficientemente", de: "Effiziente Speicherung von Sprachdaten", nl: "Efficiënt opslaan van taalgegevens" }
        ],
        correct: 0,
        explanation: {
          en: "Language modeling aims to predict the probability of word sequences by learning patterns from training data. The challenge is modeling complex long-range dependencies, handling rare words, capturing semantic relationships, and generalizing to unseen contexts while maintaining computational efficiency.",
          es: "El modelado de lenguaje tiene como objetivo predecir la probabilidad de secuencias de palabras aprendiendo patrones de datos de entrenamiento. El desafío es modelar dependencias complejas de largo alcance, manejar palabras raras, capturar relaciones semánticas y generalizar a contextos no vistos mientras se mantiene eficiencia computacional.",
          de: "Sprachmodeling zielt darauf ab, die Wahrscheinlichkeit von Wortsequenzen vorherzusagen, indem Muster aus Trainingsdaten gelernt werden. Die Herausforderung besteht darin, komplexe Langstreckenabhängigkeiten zu modellieren, seltene Wörter zu handhaben, semantische Beziehungen zu erfassen und auf ungesehene Kontexte zu generalisieren, während die rechnerische Effizienz aufrechterhalten wird.",
          nl: "Taal modellering beoogt de waarschijnlijkheid van woordsequenties te voorspellen door patronen te leren uit trainingsgegevens. De uitdaging is het modelleren van complexe lange-afstand afhankelijkheden, omgaan met zeldzame woorden, semantische relaties vastleggen en generaliseren naar ongeziene contexten terwijl computationele efficiëntie behouden blijft."
        }
      },
      {
        question: {
          en: "What is the central challenge in computational dialogue systems?",
          es: "¿Cuál es el desafío central en sistemas de diálogo computacionales?",
          de: "Was ist die zentrale Herausforderung bei computationellen Dialogsystemen?",
          nl: "Wat is de centrale uitdaging in computationele dialoogsystemen?"
        },
        options: [
          { en: "Managing multi-turn conversations with context awareness and appropriate responses", es: "Gestionar conversaciones de múltiples turnos con conciencia de contexto y respuestas apropiadas", de: "Verwaltung von Multi-Turn-Konversationen mit Kontextbewusstsein und angemessenen Antworten", nl: "Beheren van multi-turn gesprekken met contextbewustzijn en gepaste reacties" },
          { en: "Recording conversation audio clearly", es: "Grabar audio de conversación claramente", de: "Klare Aufnahme von Unterhaltungsaudio", nl: "Helder opnemen van gesprek audio" },
          { en: "Creating conversation transcripts", es: "Crear transcripciones de conversaciones", de: "Erstellung von Gesprächstranskripten", nl: "Creëren van gesprektranscripten" },
          { en: "Counting conversation turns", es: "Contar turnos de conversación", de: "Zählung von Gesprächszügen", nl: "Tellen van gespreksbeurten" }
        ],
        correct: 0,
        explanation: {
          en: "Dialogue systems must maintain conversational context across multiple turns, understand user intentions, track dialogue state, handle topic shifts, resolve ambiguities, and generate contextually appropriate and coherent responses while managing the flow of natural conversation.",
          es: "Los sistemas de diálogo deben mantener contexto conversacional a través de múltiples turnos, entender intenciones de usuario, rastrear estado del diálogo, manejar cambios de tema, resolver ambigüedades y generar respuestas contextualmente apropiadas y coherentes mientras gestionan el flujo de conversación natural.",
          de: "Dialogsysteme müssen Unterhaltungskontext über mehrere Züge hinweg aufrechterhalten, Benutzerabsichten verstehen, Dialogstatus verfolgen, Themenwechsel handhaben, Mehrdeutigkeiten auflösen und kontextuell angemessene und kohärente Antworten generieren, während sie den Fluss natürlicher Unterhaltung verwalten.",
          nl: "Dialoogsystemen moeten conversationele context handhaven over meerdere beurten, gebruikersintenties begrijpen, dialoogstatus bijhouden, onderwerpverschuivingen behandelen, ambiguïteiten oplossen en contextueel gepaste en coherente reacties genereren terwijl ze de stroom van natuurlijk gesprek beheren."
        }
      }
    ]
  };

  if (typeof window.addLevel === 'function') {
    window.addLevel('mastermind/computational-linguistics', level1);
  }
})();
