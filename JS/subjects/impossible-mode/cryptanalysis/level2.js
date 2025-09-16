// Cryptanalysis - Level 2: Advanced Algebraic & Lattice-Based Attacks
(function() {
  const level2 = {
    name: {
      en: "Advanced Algebraic & Lattice-Based Attacks",
      es: "Ataques Algebraicos Avanzados y Basados en Retículas",
      de: "Erweiterte Algebraische und Gitter-basierte Angriffe",
      nl: "Geavanceerde Algebraïsche en Lattice-gebaseerde Aanvallen"
    },
    questions: [
      {
        question: {
          en: "What is the primary advantage of lattice-based cryptanalysis over traditional factoring approaches?",
          es: "¿Cuál es la ventaja principal del criptoanálisis basado en retículas sobre los enfoques tradicionales de factorización?",
          de: "Was ist der Hauptvorteil der gitter-basierten Kryptanalyse gegenüber traditionellen Faktorisierungsansätzen?",
          nl: "Wat is het primaire voordeel van lattice-gebaseerde cryptanalyse ten opzichte van traditionele factorisatiebenaderingen?"
        },
        options: [
          { en: "Polynomial-time algorithms for shortest vector problems in specific lattice structures", es: "Algoritmos de tiempo polinomial para problemas de vector más corto en estructuras de retícula específicas", de: "Polynomialzeit-Algorithmen für kürzeste Vektor-Probleme in spezifischen Gitterstrukturen", nl: "Polynomiale-tijd algoritmen voor kortste vector problemen in specifieke lattice structuren" },
          { en: "Always faster execution compared to factoring", es: "Ejecución siempre más rápida comparada con la factorización", de: "Immer schnellere Ausführung im Vergleich zur Faktorisierung", nl: "Altijd snellere uitvoering vergeleken met factorisatie" },
          { en: "Requires less computational memory", es: "Requiere menos memoria computacional", de: "Benötigt weniger Rechenspeicher", nl: "Vereist minder computationeel geheugen" },
          { en: "Works only on classical computers", es: "Funciona solo en computadoras clásicas", de: "Funktioniert nur auf klassischen Computern", nl: "Werkt alleen op klassieke computers" }
        ],
        correct: 0,
        explanation: {
          en: "Lattice-based cryptanalysis can exploit specific geometric properties of lattices to solve certain mathematical problems more efficiently than general factoring. The LLL algorithm and its variants provide polynomial-time solutions for approximate shortest vector problems, enabling attacks on RSA variants and other systems with small private exponents.",
          es: "El criptoanálisis basado en retículas puede explotar propiedades geométricas específicas de las retículas para resolver ciertos problemas matemáticos más eficientemente que la factorización general. El algoritmo LLL y sus variantes proporcionan soluciones de tiempo polinomial para problemas aproximados de vector más corto, habilitando ataques en variantes RSA y otros sistemas con exponentes privados pequeños.",
          de: "Gitter-basierte Kryptanalyse kann spezifische geometrische Eigenschaften von Gittern ausnutzen, um bestimmte mathematische Probleme effizienter zu lösen als allgemeine Faktorisierung. Der LLL-Algorithmus und seine Varianten bieten Polynomialzeit-Lösungen für approximative kürzeste Vektor-Probleme und ermöglichen Angriffe auf RSA-Varianten und andere Systeme mit kleinen privaten Exponenten.",
          nl: "Lattice-gebaseerde cryptanalyse kan specifieke geometrische eigenschappen van lattices uitbuiten om bepaalde wiskundige problemen efficiënter op te lossen dan algemene factorisatie. Het LLL-algoritme en zijn varianten bieden polynomiale-tijd oplossingen voor benaderende kortste vector problemen, waardoor aanvallen mogelijk worden op RSA-varianten en andere systemen met kleine private exponenten."
        }
      },
      {
        question: {
          en: "In algebraic cryptanalysis, what is the significance of the Gröbner basis method?",
          es: "En el criptoanálisis algebraico, ¿cuál es la importancia del método de base de Gröbner?",
          de: "Was ist in der algebraischen Kryptanalyse die Bedeutung der Gröbner-Basis-Methode?",
          nl: "Wat is in algebraïsche cryptanalyse de betekenis van de Gröbner basis methode?"
        },
        options: [
          { en: "Systematically solves polynomial equation systems representing cryptographic operations", es: "Resuelve sistemáticamente sistemas de ecuaciones polinomiales que representan operaciones criptográficas", de: "Löst systematisch polynomiale Gleichungssysteme, die kryptographische Operationen repräsentieren", nl: "Lost systematisch polynomiale vergelijkingssystemen op die cryptografische operaties representeren" },
          { en: "Only works for linear cryptographic systems", es: "Solo funciona para sistemas criptográficos lineales", de: "Funktioniert nur für lineare kryptographische Systeme", nl: "Werkt alleen voor lineaire cryptografische systemen" },
          { en: "Provides quantum resistance guarantees", es: "Proporciona garantías de resistencia cuántica", de: "Bietet Quantenresistenz-Garantien", nl: "Biedt kwantumweerstand garanties" },
          { en: "Replaces all traditional cryptanalytic methods", es: "Reemplaza todos los métodos criptoanalíticos tradicionales", de: "Ersetzt alle traditionellen kryptanalytischen Methoden", nl: "Vervangt alle traditionele cryptanalytische methoden" }
        ],
        correct: 0,
        explanation: {
          en: "Gröbner basis algorithms provide a systematic approach to solving systems of polynomial equations that arise from modeling cryptographic algorithms algebraically. This method can break certain block ciphers by expressing their operations as polynomial equations and finding solutions that reveal the secret key.",
          es: "Los algoritmos de base de Gröbner proporcionan un enfoque sistemático para resolver sistemas de ecuaciones polinomiales que surgen del modelado algebraico de algoritmos criptográficos. Este método puede romper ciertos cifrados de bloque expresando sus operaciones como ecuaciones polinomiales y encontrando soluciones que revelan la clave secreta.",
          de: "Gröbner-Basis-Algorithmen bieten einen systematischen Ansatz zur Lösung von polynomialen Gleichungssystemen, die aus der algebraischen Modellierung kryptographischer Algorithmen entstehen. Diese Methode kann bestimmte Blockchiffren brechen, indem sie deren Operationen als polynomiale Gleichungen ausdrückt und Lösungen findet, die den geheimen Schlüssel preisgeben.",
          nl: "Gröbner basis algoritmen bieden een systematische benadering voor het oplossen van systemen van polynomiale vergelijkingen die ontstaan uit het algebraïsch modelleren van cryptografische algoritmen. Deze methode kan bepaalde blokversleutelingen breken door hun operaties uit te drukken als polynomiale vergelijkingen en oplossingen te vinden die de geheime sleutel onthullen."
        }
      },
      {
        question: {
          en: "What is the cube attack method in cryptanalysis?",
          es: "¿Qué es el método de ataque de cubo en criptoanálisis?",
          de: "Was ist die Cube-Attack-Methode in der Kryptanalyse?",
          nl: "Wat is de cube attack methode in cryptanalyse?"
        },
        options: [
          { en: "Higher-order differential attack exploiting polynomial structure of cryptographic functions", es: "Ataque diferencial de orden superior que explota la estructura polinomial de funciones criptográficas", de: "Höherer-Ordnung-Differential-Angriff, der die polynomiale Struktur kryptographischer Funktionen ausnutzt", nl: "Hogere-orde differentiële aanval die de polynomiale structuur van cryptografische functies uitbuit" },
          { en: "Three-dimensional visualization of ciphertext patterns", es: "Visualización tridimensional de patrones de texto cifrado", de: "Dreidimensionale Visualisierung von Chiffretextmustern", nl: "Driedimensionale visualisatie van cijfertekst patronen" },
          { en: "Physical attack on cubic hardware implementations", es: "Ataque físico en implementaciones de hardware cúbicas", de: "Physischer Angriff auf kubische Hardware-Implementierungen", nl: "Fysieke aanval op kubieke hardware implementaties" },
          { en: "Brute force search using cubic complexity", es: "Búsqueda de fuerza bruta usando complejidad cúbica", de: "Brute-Force-Suche mit kubischer Komplexität", nl: "Brute force zoeken met kubieke complexiteit" }
        ],
        correct: 0,
        explanation: {
          en: "Cube attacks are a generalization of higher-order differential cryptanalysis that exploit the low-degree polynomial representation of cryptographic primitives. By analyzing how the output changes when multiple input bits are simultaneously varied, attackers can recover key bits through polynomial interpolation and solving systems of equations.",
          es: "Los ataques de cubo son una generalización del criptoanálisis diferencial de orden superior que explota la representación polinomial de bajo grado de primitivas criptográficas. Al analizar cómo cambia la salida cuando múltiples bits de entrada se varían simultáneamente, los atacantes pueden recuperar bits de clave a través de interpolación polinomial y resolución de sistemas de ecuaciones.",
          de: "Cube-Angriffe sind eine Verallgemeinerung der höheren-Ordnung-Differential-Kryptanalyse, die die niedriggradige polynomiale Darstellung kryptographischer Primitive ausnutzt. Durch Analyse, wie sich die Ausgabe ändert, wenn mehrere Eingabebits gleichzeitig variiert werden, können Angreifer Schlüsselbits durch polynomiale Interpolation und Lösung von Gleichungssystemen wiederherstellen.",
          nl: "Cube aanvallen zijn een generalisatie van hogere-orde differentiële cryptanalyse die de lage-graad polynomiale representatie van cryptografische primitieven uitbuiten. Door te analyseren hoe de output verandert wanneer meerdere input bits tegelijkertijd worden gevarieerd, kunnen aanvallers sleutelbits herstellen door polynomiale interpolatie en het oplossen van vergelijkingssystemen."
        }
      },
      {
        question: {
          en: "What is the fundamental principle behind the LLL lattice reduction algorithm?",
          es: "¿Cuál es el principio fundamental detrás del algoritmo de reducción de retícula LLL?",
          de: "Was ist das grundlegende Prinzip hinter dem LLL-Gitterreduktionsalgorithmus?",
          nl: "Wat is het fundamentele principe achter het LLL lattice reductie algoritme?"
        },
        options: [
          { en: "Iteratively shortens and orthogonalizes lattice basis vectors using Gram-Schmidt process", es: "Acorta y ortogonaliza iterativamente vectores base de retícula usando el proceso de Gram-Schmidt", de: "Verkürzt und orthogonalisiert iterativ Gitter-Basisvektoren mit dem Gram-Schmidt-Verfahren", nl: "Verkort en orthogonaliseert iteratief lattice basisvectoren met het Gram-Schmidt proces" },
          { en: "Finds exact shortest vectors in all lattice dimensions", es: "Encuentra vectores más cortos exactos en todas las dimensiones de retícula", de: "Findet exakte kürzeste Vektoren in allen Gitterdimensionen", nl: "Vindt exacte kortste vectoren in alle lattice dimensies" },
          { en: "Converts lattice problems to factoring problems", es: "Convierte problemas de retícula en problemas de factorización", de: "Konvertiert Gitterprobleme zu Faktorisierungsproblemen", nl: "Converteert lattice problemen naar factorisatieproblemen" },
          { en: "Uses quantum superposition for parallel computation", es: "Usa superposición cuántica para computación paralela", de: "Verwendet Quantensuperposition für parallele Berechnung", nl: "Gebruikt kwantumsuperpositie voor parallelle berekening" }
        ],
        correct: 0,
        explanation: {
          en: "The LLL algorithm uses a modified Gram-Schmidt orthogonalization process combined with size reduction to produce a reduced lattice basis where vectors are relatively short and nearly orthogonal. This approximation to the shortest vector problem runs in polynomial time and enables practical cryptanalytic attacks.",
          es: "El algoritmo LLL usa un proceso de ortogonalización de Gram-Schmidt modificado combinado con reducción de tamaño para producir una base de retícula reducida donde los vectores son relativamente cortos y casi ortogonales. Esta aproximación al problema del vector más corto se ejecuta en tiempo polinomial y permite ataques criptoanalíticos prácticos.",
          de: "Der LLL-Algorithmus verwendet ein modifiziertes Gram-Schmidt-Orthogonalisierungsverfahren kombiniert mit Größenreduktion, um eine reduzierte Gitterbasis zu erzeugen, wo Vektoren relativ kurz und nahezu orthogonal sind. Diese Approximation des kürzesten Vektor-Problems läuft in Polynomialzeit und ermöglicht praktische kryptanalytische Angriffe.",
          nl: "Het LLL-algoritme gebruikt een gemodificeerd Gram-Schmidt orthogonalisatieproces gecombineerd met groottereductie om een gereduceerde lattice basis te produceren waar vectoren relatief kort en bijna orthogonaal zijn. Deze benadering van het kortste vector probleem draait in polynomiale tijd en maakt praktische cryptanalytische aanvallen mogelijk."
        }
      },
      {
        question: {
          en: "In post-quantum cryptanalysis, what makes lattice-based schemes vulnerable to quantum attacks?",
          es: "En el criptoanálisis post-cuántico, ¿qué hace vulnerables a los esquemas basados en retículas a ataques cuánticos?",
          de: "Was macht in der Post-Quanten-Kryptanalyse gitter-basierte Schemata anfällig für Quantenangriffe?",
          nl: "Wat maakt in post-kwantum cryptanalyse lattice-gebaseerde schema's kwetsbaar voor kwantumaanvallen?"
        },
        options: [
          { en: "Shor's algorithm cannot efficiently solve lattice problems, but Grover's algorithm provides quadratic speedup", es: "El algoritmo de Shor no puede resolver eficientemente problemas de retícula, pero el algoritmo de Grover proporciona aceleración cuadrática", de: "Shors Algorithmus kann Gitterprobleme nicht effizient lösen, aber Grovers Algorithmus bietet quadratische Beschleunigung", nl: "Shor's algoritme kan lattice problemen niet efficiënt oplossen, maar Grover's algoritme biedt kwadratische versnelling" },
          { en: "All lattice problems are efficiently solvable by quantum computers", es: "Todos los problemas de retícula son eficientemente resolubles por computadoras cuánticas", de: "Alle Gitterprobleme sind effizient lösbar durch Quantencomputer", nl: "Alle lattice problemen zijn efficiënt oplosbaar door kwantumcomputers" },
          { en: "Quantum computers can factor lattice structures directly", es: "Las computadoras cuánticas pueden factorizar estructuras de retícula directamente", de: "Quantencomputer können Gitterstrukturen direkt faktorisieren", nl: "Kwantumcomputers kunnen lattice structuren direct factoriseren" },
          { en: "Lattice schemes are completely quantum-resistant", es: "Los esquemas de retícula son completamente resistentes a lo cuántico", de: "Gitter-Schemata sind vollständig quantenresistent", nl: "Lattice schema's zijn volledig kwantumresistent" }
        ],
        correct: 0,
        explanation: {
          en: "While Shor's algorithm efficiently breaks RSA and elliptic curve cryptography, it doesn't directly apply to lattice problems. However, Grover's algorithm provides a quadratic speedup for brute-force searches, effectively halving the security level of lattice-based schemes. Additionally, specialized quantum algorithms may exist for specific lattice structures.",
          es: "Mientras que el algoritmo de Shor rompe eficientemente RSA y criptografía de curva elíptica, no se aplica directamente a problemas de retícula. Sin embargo, el algoritmo de Grover proporciona una aceleración cuadrática para búsquedas de fuerza bruta, reduciendo efectivamente a la mitad el nivel de seguridad de esquemas basados en retículas. Además, pueden existir algoritmos cuánticos especializados para estructuras específicas de retícula.",
          de: "Während Shors Algorithmus RSA und elliptische Kurven-Kryptographie effizient bricht, gilt er nicht direkt für Gitterprobleme. Jedoch bietet Grovers Algorithmus eine quadratische Beschleunigung für Brute-Force-Suchen, wodurch das Sicherheitsniveau gitter-basierter Schemata effektiv halbiert wird. Zusätzlich können spezialisierte Quantenalgorithmen für spezifische Gitterstrukturen existieren.",
          nl: "Terwijl Shor's algoritme RSA en elliptische curve cryptografie efficiënt breekt, is het niet direct van toepassing op lattice problemen. Echter, Grover's algoritme biedt een kwadratische versnelling voor brute-force zoekopdrachten, waardoor het beveiligingsniveau van lattice-gebaseerde schema's effectief wordt gehalveerd. Daarnaast kunnen gespecialiseerde kwantumalgoritmen bestaan voor specifieke lattice structuren."
        }
      },
      {
        question: {
          en: "What is a fault injection attack and how does it compromise AES implementations?",
          es: "¿Qué es un ataque de inyección de fallas y cómo compromete las implementaciones AES?",
          de: "Was ist ein Fault-Injection-Angriff und wie kompromittiert er AES-Implementierungen?",
          nl: "Wat is een fault injection aanval en hoe compromitteert het AES-implementaties?"
        },
        options: [
          { en: "Induces computational errors during encryption to reveal key information through differential analysis", es: "Induce errores computacionales durante el cifrado para revelar información de clave a través de análisis diferencial", de: "Induziert Berechnungsfehler während der Verschlüsselung, um Schlüsselinformationen durch Differentialanalyse zu enthüllen", nl: "Veroorzaakt rekenfouten tijdens versleuteling om sleutelinformatie te onthullen door differentiële analyse" },
          { en: "Only works on software implementations", es: "Solo funciona en implementaciones de software", de: "Funktioniert nur bei Software-Implementierungen", nl: "Werkt alleen op software implementaties" },
          { en: "Requires physical access to memory", es: "Requiere acceso físico a la memoria", de: "Erfordert physischen Zugang zum Speicher", nl: "Vereist fysieke toegang tot geheugen" },
          { en: "Is purely a timing-based attack", es: "Es puramente un ataque basado en tiempo", de: "Ist rein ein zeitbasierter Angriff", nl: "Is puur een timing-gebaseerde aanval" }
        ],
        correct: 0,
        explanation: {
          en: "Fault injection attacks deliberately introduce computational errors (through voltage glitching, electromagnetic pulses, or laser illumination) during cryptographic operations. By comparing correct and faulty outputs, attackers can perform differential fault analysis to extract secret keys from AES and other algorithms.",
          es: "Los ataques de inyección de fallas introducen deliberadamente errores computacionales (a través de fallas de voltaje, pulsos electromagnéticos o iluminación láser) durante operaciones criptográficas. Comparando salidas correctas y defectuosas, los atacantes pueden realizar análisis diferencial de fallas para extraer claves secretas de AES y otros algoritmos.",
          de: "Fault-Injection-Angriffe führen absichtlich Berechnungsfehler ein (durch Spannungsglitches, elektromagnetische Impulse oder Laserbeleuchtung) während kryptographischer Operationen. Durch Vergleich korrekter und fehlerhafter Ausgaben können Angreifer differentielle Fehleranalyse durchführen, um geheime Schlüssel aus AES und anderen Algorithmen zu extrahieren.",
          nl: "Fault injection aanvallen introduceren opzettelijk rekenfouten (door spanningsglitches, elektromagnetische pulsen of laserverlichting) tijdens cryptografische operaties. Door correcte en foutieve outputs te vergelijken, kunnen aanvallers differentiële foutanalyse uitvoeren om geheime sleutels uit AES en andere algoritmen te extraheren."
        }
      },
      {
        question: {
          en: "What characterizes a rebound attack on hash functions?",
          es: "¿Qué caracteriza un ataque de rebote en funciones hash?",
          de: "Was charakterisiert einen Rebound-Angriff auf Hash-Funktionen?",
          nl: "Wat kenmerkt een rebound aanval op hash functies?"
        },
        options: [
          { en: "Exploits the limited diffusion in the middle rounds by working bidirectionally from start and end", es: "Explota la difusión limitada en las rondas medias trabajando bidireccionalmente desde el inicio y el final", de: "Nutzt die begrenzte Diffusion in den mittleren Runden aus, indem bidirektional von Anfang und Ende gearbeitet wird", nl: "Buit de beperkte diffusie in de middelste rondes uit door bidirectioneel vanaf begin en einde te werken" },
          { en: "Only applies to collision-resistant hash functions", es: "Solo se aplica a funciones hash resistentes a colisiones", de: "Gilt nur für kollisionsresistente Hash-Funktionen", nl: "Is alleen van toepassing op botsingsbestendige hash functies" },
          { en: "Uses birthday paradox for preimage attacks", es: "Usa la paradoja del cumpleaños para ataques de preimagen", de: "Verwendet das Geburtstags-Paradoxon für Preimage-Angriffe", nl: "Gebruikt de verjaardagsparadox voor preimage aanvallen" },
          { en: "Relies on weak key schedules only", es: "Se basa solo en horarios de clave débiles", de: "Beruht nur auf schwachen Schlüsselplänen", nl: "Vertrouwt alleen op zwakke sleutelschema's" }
        ],
        correct: 0,
        explanation: {
          en: "Rebound attacks target the reduced diffusion properties in the middle rounds of hash functions. Attackers work forward from the start and backward from the end, meeting in the middle where diffusion is limited. This technique has been successfully applied to break reduced-round versions of Whirlpool and other hash functions.",
          es: "Los ataques de rebote se dirigen a las propiedades de difusión reducida en las rondas medias de funciones hash. Los atacantes trabajan hacia adelante desde el inicio y hacia atrás desde el final, encontrándose en el medio donde la difusión es limitada. Esta técnica se ha aplicado exitosamente para romper versiones de rondas reducidas de Whirlpool y otras funciones hash.",
          de: "Rebound-Angriffe zielen auf die reduzierten Diffusionseigenschaften in den mittleren Runden von Hash-Funktionen ab. Angreifer arbeiten vorwärts vom Start und rückwärts vom Ende, treffen sich in der Mitte, wo die Diffusion begrenzt ist. Diese Technik wurde erfolgreich angewendet, um reduzierte-Runden-Versionen von Whirlpool und anderen Hash-Funktionen zu brechen.",
          nl: "Rebound aanvallen richten zich op de verminderde diffusie-eigenschappen in de middelste rondes van hash functies. Aanvallers werken voorwaarts vanaf het begin en achterwaarts vanaf het einde, en ontmoeten elkaar in het midden waar diffusie beperkt is. Deze techniek is succesvol toegepast om gereduceerde-ronde versies van Whirlpool en andere hash functies te breken."
        }
      },
      {
        question: {
          en: "How does Correlation Power Analysis (CPA) differ from Simple Power Analysis (SPA)?",
          es: "¿Cómo difiere el Análisis de Potencia de Correlación (CPA) del Análisis de Potencia Simple (SPA)?",
          de: "Wie unterscheidet sich die Correlation Power Analysis (CPA) von der Simple Power Analysis (SPA)?",
          nl: "Hoe verschilt Correlation Power Analysis (CPA) van Simple Power Analysis (SPA)?"
        },
        options: [
          { en: "CPA uses statistical correlation between power consumption and hypothetical intermediate values to recover keys", es: "CPA usa correlación estadística entre consumo de energía y valores intermedios hipotéticos para recuperar claves", de: "CPA verwendet statistische Korrelation zwischen Stromverbrauch und hypothetischen Zwischenwerten zur Schlüsselwiederherstellung", nl: "CPA gebruikt statistische correlatie tussen stroomverbruik en hypothetische tussenwaarden om sleutels te herstellen" },
          { en: "CPA requires fewer power traces than SPA", es: "CPA requiere menos trazas de energía que SPA", de: "CPA benötigt weniger Stromspuren als SPA", nl: "CPA vereist minder stroomsporen dan SPA" },
          { en: "CPA only works on unprotected implementations", es: "CPA solo funciona en implementaciones no protegidas", de: "CPA funktioniert nur bei ungeschützten Implementierungen", nl: "CPA werkt alleen op onbeschermde implementaties" },
          { en: "CPA analyzes only the overall power consumption pattern", es: "CPA analiza solo el patrón general de consumo de energía", de: "CPA analysiert nur das Gesamtstromverbrauchsmuster", nl: "CPA analyseert alleen het algemene stroomverbruikspatroon" }
        ],
        correct: 0,
        explanation: {
          en: "CPA uses statistical methods to correlate measured power consumption with theoretical power models based on hypothetical intermediate values during cryptographic operations. Unlike SPA which looks for visible patterns, CPA can recover keys even when individual traces don't show obvious patterns, making it more powerful against protected implementations.",
          es: "CPA usa métodos estadísticos para correlacionar el consumo de energía medido con modelos teóricos de energía basados en valores intermedios hipotéticos durante operaciones criptográficas. A diferencia de SPA que busca patrones visibles, CPA puede recuperar claves incluso cuando las trazas individuales no muestran patrones obvios, haciéndolo más poderoso contra implementaciones protegidas.",
          de: "CPA verwendet statistische Methoden, um gemessenen Stromverbrauch mit theoretischen Strommodellen basierend auf hypothetischen Zwischenwerten während kryptographischer Operationen zu korrelieren. Im Gegensatz zu SPA, das nach sichtbaren Mustern sucht, kann CPA Schlüssel auch dann wiederherstellen, wenn einzelne Spuren keine offensichtlichen Muster zeigen, was es mächtiger gegen geschützte Implementierungen macht.",
          nl: "CPA gebruikt statistische methoden om gemeten stroomverbruik te correleren met theoretische stroommodellen gebaseerd op hypothetische tussenwaarden tijdens cryptografische operaties. In tegenstelling tot SPA dat zoekt naar zichtbare patronen, kan CPA sleutels herstellen zelfs wanneer individuele sporen geen voor de hand liggende patronen tonen, waardoor het krachtiger is tegen beschermde implementaties."
        }
      },
      {
        question: {
          en: "What is the significance of Walsh transforms in Boolean function cryptanalysis?",
          es: "¿Cuál es la importancia de las transformadas de Walsh en el criptoanálisis de funciones booleanas?",
          de: "Was ist die Bedeutung der Walsh-Transformationen in der booleschen Funktions-Kryptanalyse?",
          nl: "Wat is de betekenis van Walsh transformaties in Booleaanse functie cryptanalyse?"
        },
        options: [
          { en: "Measures nonlinearity and correlation immunity by analyzing spectral properties of Boolean functions", es: "Mide no linealidad e inmunidad de correlación analizando propiedades espectrales de funciones booleanas", de: "Misst Nichtlinearität und Korrelationsimmunität durch Analyse spektraler Eigenschaften boolescher Funktionen", nl: "Meet niet-lineariteit en correlatieimmuniteit door spectrale eigenschappen van Booleaanse functies te analyseren" },
          { en: "Only applicable to linear cryptographic systems", es: "Solo aplicable a sistemas criptográficos lineales", de: "Nur anwendbar auf lineare kryptographische Systeme", nl: "Alleen toepasbaar op lineaire cryptografische systemen" },
          { en: "Transforms ciphertext into plaintext directly", es: "Transforma texto cifrado en texto plano directamente", de: "Transformiert Chiffretext direkt in Klartext", nl: "Transformeert cijfertekst direct naar platte tekst" },
          { en: "Used only for key generation algorithms", es: "Usado solo para algoritmos de generación de claves", de: "Nur für Schlüsselgenerierungsalgorithmen verwendet", nl: "Gebruikt alleen voor sleutelgeneratie algoritmen" }
        ],
        correct: 0,
        explanation: {
          en: "Walsh transforms convert Boolean functions to the frequency domain, revealing their spectral properties. This allows cryptanalysts to measure nonlinearity (resistance to linear approximation) and correlation immunity (resistance to correlation attacks). Functions with flat Walsh spectra have good cryptographic properties.",
          es: "Las transformadas de Walsh convierten funciones booleanas al dominio de frecuencia, revelando sus propiedades espectrales. Esto permite a los criptoanalistas medir la no linealidad (resistencia a aproximación lineal) e inmunidad de correlación (resistencia a ataques de correlación). Las funciones con espectros Walsh planos tienen buenas propiedades criptográficas.",
          de: "Walsh-Transformationen konvertieren boolesche Funktionen in den Frequenzbereich und enthüllen ihre spektralen Eigenschaften. Dies ermöglicht es Kryptanalytikern, Nichtlinearität (Widerstand gegen lineare Approximation) und Korrelationsimmunität (Widerstand gegen Korrelationsangriffe) zu messen. Funktionen mit flachen Walsh-Spektren haben gute kryptographische Eigenschaften.",
          nl: "Walsh transformaties converteren Booleaanse functies naar het frequentiedomein, waarbij hun spectrale eigenschappen worden onthuld. Dit stelt cryptanalisten in staat om niet-lineariteit (weerstand tegen lineaire benadering) en correlatieimmuniteit (weerstand tegen correlatieaanvallen) te meten. Functies met vlakke Walsh-spectra hebben goede cryptografische eigenschappen."
        }
      },
      {
        question: {
          en: "What is an integral attack and how does it exploit structural properties?",
          es: "¿Qué es un ataque integral y cómo explota las propiedades estructurales?",
          de: "Was ist ein Integral-Angriff und wie nutzt er strukturelle Eigenschaften aus?",
          nl: "Wat is een integraal aanval en hoe buit het structurele eigenschappen uit?"
        },
        options: [
          { en: "Analyzes how the sum of ciphertext bits varies when specific plaintext bits are held constant or varied systematically", es: "Analiza cómo varía la suma de bits de texto cifrado cuando bits específicos de texto plano se mantienen constantes o se varían sistemáticamente", de: "Analysiert, wie sich die Summe der Chiffretextbits verändert, wenn spezifische Klartextbits konstant gehalten oder systematisch variiert werden", nl: "Analyseert hoe de som van cijfertekstbits varieert wanneer specifieke platte tekst bits constant worden gehouden of systematisch worden gevarieerd" },
          { en: "Only works against stream ciphers", es: "Solo funciona contra cifrados de flujo", de: "Funktioniert nur gegen Stromchiffren", nl: "Werkt alleen tegen stroomversleutelingen" },
          { en: "Requires knowledge of the complete key schedule", es: "Requiere conocimiento del horario completo de claves", de: "Benötigt Kenntnis des vollständigen Schlüsselplans", nl: "Vereist kennis van het volledige sleutelschema" },
          { en: "Is identical to linear cryptanalysis", es: "Es idéntico al criptoanálisis lineal", de: "Ist identisch mit linearer Kryptanalyse", nl: "Is identiek aan lineaire cryptanalyse" }
        ],
        correct: 0,
        explanation: {
          en: "Integral attacks (also called square attacks) exploit the byte-oriented structure of block ciphers like AES. By examining sets of plaintexts where some bytes are constant and others take all possible values, attackers can identify distinguishing properties that don't hold for random permutations, enabling key recovery.",
          es: "Los ataques integrales (también llamados ataques cuadrados) explotan la estructura orientada a bytes de cifrados de bloque como AES. Examinando conjuntos de textos planos donde algunos bytes son constantes y otros toman todos los valores posibles, los atacantes pueden identificar propiedades distintivas que no se mantienen para permutaciones aleatorias, habilitando la recuperación de claves.",
          de: "Integral-Angriffe (auch Square-Angriffe genannt) nutzen die byte-orientierte Struktur von Blockchiffren wie AES aus. Durch Untersuchung von Klartextmengen, wo einige Bytes konstant sind und andere alle möglichen Werte annehmen, können Angreifer unterscheidende Eigenschaften identifizieren, die für zufällige Permutationen nicht gelten, was Schlüsselwiederherstellung ermöglicht.",
          nl: "Integraal aanvallen (ook wel square aanvallen genoemd) buiten de byte-georiënteerde structuur van blokversleutelingen zoals AES uit. Door sets van platte teksten te onderzoeken waar sommige bytes constant zijn en andere alle mogelijke waarden aannemen, kunnen aanvallers onderscheidende eigenschappen identificeren die niet gelden voor willekeurige permutaties, waardoor sleutelherstel mogelijk wordt."
        }
      },
      {
        question: {
          en: "What makes related-key attacks particularly dangerous in practice?",
          es: "¿Qué hace que los ataques de clave relacionada sean particularmente peligrosos en la práctica?",
          de: "Was macht Related-Key-Angriffe in der Praxis besonders gefährlich?",
          nl: "Wat maakt gerelateerde-sleutel aanvallen bijzonder gevaarlijk in de praktijk?"
        },
        options: [
          { en: "Exploits relationships between different keys to break cryptosystems even with strong individual key resistance", es: "Explota relaciones entre diferentes claves para romper criptosistemas incluso con fuerte resistencia de clave individual", de: "Nutzt Beziehungen zwischen verschiedenen Schlüsseln aus, um Kryptosysteme zu brechen, selbst bei starker individueller Schlüsselresistenz", nl: "Buit relaties tussen verschillende sleutels uit om cryptosystemen te breken zelfs met sterke individuele sleutelweerstand" },
          { en: "Only work when keys are identical", es: "Solo funcionan cuando las claves son idénticas", de: "Funktionieren nur, wenn Schlüssel identisch sind", nl: "Werken alleen wanneer sleutels identiek zijn" },
          { en: "Require physical access to key storage", es: "Requieren acceso físico al almacenamiento de claves", de: "Benötigen physischen Zugang zur Schlüsselspeicherung", nl: "Vereisen fysieke toegang tot sleutelopslag" },
          { en: "Are purely theoretical with no practical applications", es: "Son puramente teóricos sin aplicaciones prácticas", de: "Sind rein theoretisch ohne praktische Anwendungen", nl: "Zijn puur theoretisch zonder praktische toepassingen" }
        ],
        correct: 0,
        explanation: {
          en: "Related-key attacks exploit mathematical relationships between keys (such as XOR differences or linear relationships) to break cryptosystems that would otherwise be secure against single-key attacks. These attacks are particularly concerning in scenarios with key derivation functions or when keys are generated from related sources.",
          es: "Los ataques de clave relacionada explotan relaciones matemáticas entre claves (como diferencias XOR o relaciones lineales) para romper criptosistemas que de otro modo serían seguros contra ataques de clave única. Estos ataques son particularmente preocupantes en escenarios con funciones de derivación de claves o cuando las claves se generan desde fuentes relacionadas.",
          de: "Related-Key-Angriffe nutzen mathematische Beziehungen zwischen Schlüsseln (wie XOR-Differenzen oder lineare Beziehungen) aus, um Kryptosysteme zu brechen, die andernfalls gegen Single-Key-Angriffe sicher wären. Diese Angriffe sind besonders besorgniserregend in Szenarien mit Schlüsselableitungsfunktionen oder wenn Schlüssel aus verwandten Quellen generiert werden.",
          nl: "Gerelateerde-sleutel aanvallen buiten wiskundige relaties tussen sleutels uit (zoals XOR-verschillen of lineaire relaties) om cryptosystemen te breken die anders veilig zouden zijn tegen enkele-sleutel aanvallen. Deze aanvallen zijn bijzonder zorgwekkend in scenario's met sleutelafleiding functies of wanneer sleutels worden gegenereerd uit gerelateerde bronnen."
        }
      },
      {
        question: {
          en: "What is template attack methodology in side-channel cryptanalysis?",
          es: "¿Cuál es la metodología de ataque de plantilla en el criptoanálisis de canal lateral?",
          de: "Was ist die Template-Angriffsmethodik in der Seitenkanal-Kryptanalyse?",
          nl: "Wat is de template aanval methodologie in zijkanaal cryptanalyse?"
        },
        options: [
          { en: "Creates statistical models of power/EM traces for each possible intermediate value to classify unknown measurements", es: "Crea modelos estadísticos de trazas de energía/EM para cada valor intermedio posible para clasificar mediciones desconocidas", de: "Erstellt statistische Modelle von Strom-/EM-Spuren für jeden möglichen Zwischenwert zur Klassifizierung unbekannter Messungen", nl: "Creëert statistische modellen van stroom/EM-sporen voor elke mogelijke tussenwaarde om onbekende metingen te classificeren" },
          { en: "Uses predetermined attack patterns from a database", es: "Usa patrones de ataque predeterminados de una base de datos", de: "Verwendet vorbestimmte Angriffsmuster aus einer Datenbank", nl: "Gebruikt vooraf bepaalde aanvalspatronen uit een database" },
          { en: "Only works on hardware security modules", es: "Solo funciona en módulos de seguridad de hardware", de: "Funktioniert nur bei Hardware-Sicherheitsmodulen", nl: "Werkt alleen op hardware beveiligingsmodules" },
          { en: "Requires identical devices for profiling and attack", es: "Requiere dispositivos idénticos para perfilado y ataque", de: "Benötigt identische Geräte für Profilerstellung und Angriff", nl: "Vereist identieke apparaten voor profilering en aanval" }
        ],
        correct: 0,
        explanation: {
          en: "Template attacks build statistical models (typically multivariate Gaussian) from a profiling phase on a similar device, then use these templates to classify measurements from the target device. This approach can be very effective even with noise and represents the strongest form of side-channel attack when profiling is possible.",
          es: "Los ataques de plantilla construyen modelos estadísticos (típicamente Gaussianos multivariados) desde una fase de perfilado en un dispositivo similar, luego usan estas plantillas para clasificar mediciones del dispositivo objetivo. Este enfoque puede ser muy efectivo incluso con ruido y representa la forma más fuerte de ataque de canal lateral cuando el perfilado es posible.",
          de: "Template-Angriffe erstellen statistische Modelle (typischerweise multivariate Gaußsche) aus einer Profiling-Phase auf einem ähnlichen Gerät, dann verwenden diese Templates zur Klassifizierung von Messungen vom Zielgerät. Dieser Ansatz kann sehr effektiv sein, selbst mit Rauschen, und stellt die stärkste Form des Seitenkanal-Angriffs dar, wenn Profiling möglich ist.",
          nl: "Template aanvallen bouwen statistische modellen (typisch multivariate Gaussiaanse) uit een profileringsfase op een vergelijkbaar apparaat, gebruiken dan deze templates om metingen van het doelapparaat te classificeren. Deze benadering kan zeer effectief zijn zelfs met ruis en vertegenwoordigt de sterkste vorm van zijkanaal aanval wanneer profilering mogelijk is."
        }
      },
      {
        question: {
          en: "How do side-channel countermeasures like masking work at the algorithmic level?",
          es: "¿Cómo funcionan las contramedidas de canal lateral como el enmascaramiento a nivel algorítmico?",
          de: "Wie funktionieren Seitenkanal-Gegenmaßnahmen wie Masking auf algorithmischer Ebene?",
          nl: "Hoe werken zijkanaal tegenmaatregelen zoals maskering op algoritmisch niveau?"
        },
        options: [
          { en: "Randomizes intermediate values by XORing with random masks, requiring secure mask refreshing and higher-order security", es: "Aleatoriza valores intermedios mediante XOR con máscaras aleatorias, requiriendo actualización segura de máscaras y seguridad de orden superior", de: "Randomisiert Zwischenwerte durch XOR mit zufälligen Masken, erfordert sichere Masken-Erneuerung und höhere Ordnungssicherheit", nl: "Randomiseert tussenwaarden door XOR met willekeurige maskers, vereist veilige maskervernieuwing en hogere-orde beveiliging" },
          { en: "Simply adds random delays to operations", es: "Simplemente añade retrasos aleatorios a las operaciones", de: "Fügt einfach zufällige Verzögerungen zu Operationen hinzu", nl: "Voegt eenvoudig willekeurige vertragingen toe aan operaties" },
          { en: "Encrypts all intermediate computations", es: "Cifra todas las computaciones intermedias", de: "Verschlüsselt alle Zwischenberechnungen", nl: "Versleutelt alle tussenberekeningen" },
          { en: "Only works against first-order attacks", es: "Solo funciona contra ataques de primer orden", de: "Funktioniert nur gegen Angriffe erster Ordnung", nl: "Werkt alleen tegen eerste-orde aanvallen" }
        ],
        correct: 0,
        explanation: {
          en: "Boolean masking splits sensitive intermediate values into random shares using XOR operations. To maintain security against higher-order attacks, masks must be refreshed securely and all operations must be performed in the masked domain. This requires careful algorithmic design and formal verification of security properties.",
          es: "El enmascaramiento booleano divide valores intermedios sensibles en participaciones aleatorias usando operaciones XOR. Para mantener seguridad contra ataques de orden superior, las máscaras deben actualizarse de manera segura y todas las operaciones deben realizarse en el dominio enmascarado. Esto requiere diseño algorítmico cuidadoso y verificación formal de propiedades de seguridad.",
          de: "Boolesches Masking teilt sensitive Zwischenwerte in zufällige Anteile mittels XOR-Operationen auf. Um Sicherheit gegen höhere Ordnungsangriffe zu erhalten, müssen Masken sicher erneuert werden und alle Operationen müssen im maskierten Bereich durchgeführt werden. Dies erfordert sorgfältiges algorithmisches Design und formale Verifikation von Sicherheitseigenschaften.",
          nl: "Booleaanse maskering splitst gevoelige tussenwaarden in willekeurige aandelen met XOR-operaties. Om beveiliging tegen hogere-orde aanvallen te behouden, moeten maskers veilig worden vernieuwd en alle operaties moeten in het gemaskeerde domein worden uitgevoerd. Dit vereist zorgvuldig algoritmisch ontwerp en formele verificatie van beveiligingseigenschappen."
        }
      },
      {
        question: {
          en: "What is Grover's algorithm's impact on symmetric cryptography security levels?",
          es: "¿Cuál es el impacto del algoritmo de Grover en los niveles de seguridad de la criptografía simétrica?",
          de: "Was ist Grovers Algorithmus' Auswirkung auf Sicherheitsniveaus symmetrischer Kryptographie?",
          nl: "Wat is Grover's algoritme's impact op symmetrische cryptografie beveiligingsniveaus?"
        },
        options: [
          { en: "Provides quadratic speedup for brute-force key search, effectively halving security levels of symmetric ciphers", es: "Proporciona aceleración cuadrática para búsqueda de clave por fuerza bruta, reduciendo efectivamente a la mitad los niveles de seguridad de cifrados simétricos", de: "Bietet quadratische Beschleunigung für Brute-Force-Schlüsselsuche, wodurch Sicherheitsniveaus symmetrischer Chiffren effektiv halbiert werden", nl: "Biedt kwadratische versnelling voor brute-force sleutelzoeken, waardoor beveiligingsniveaus van symmetrische versleutelingen effectief worden gehalveerd" },
          { en: "Completely breaks all symmetric encryption instantly", es: "Rompe completamente toda la encriptación simétrica instantáneamente", de: "Bricht alle symmetrische Verschlüsselung sofort vollständig", nl: "Breekt alle symmetrische versleuteling onmiddellijk volledig" },
          { en: "Only affects public key cryptography", es: "Solo afecta la criptografía de clave pública", de: "Betrifft nur Public-Key-Kryptographie", nl: "Beïnvloedt alleen publieke sleutel cryptografie" },
          { en: "Has no impact on properly designed systems", es: "No tiene impacto en sistemas adecuadamente diseñados", de: "Hat keine Auswirkung auf ordnungsgemäß entworfene Systeme", nl: "Heeft geen impact op goed ontworpen systemen" }
        ],
        correct: 0,
        explanation: {
          en: "Grover's algorithm can search an unsorted database of N items in O(√N) time, compared to classical O(N). For cryptography, this means a quantum computer could find a k-bit symmetric key in 2^(k/2) operations instead of 2^(k-1), effectively halving the security level. AES-128 would provide only ~64 bits of quantum security.",
          es: "El algoritmo de Grover puede buscar una base de datos no ordenada de N elementos en tiempo O(√N), comparado con O(N) clásico. Para criptografía, esto significa que una computadora cuántica podría encontrar una clave simétrica de k bits en 2^(k/2) operaciones en lugar de 2^(k-1), reduciendo efectivamente a la mitad el nivel de seguridad. AES-128 proporcionaría solo ~64 bits de seguridad cuántica.",
          de: "Grovers Algorithmus kann eine unsortierte Datenbank von N Elementen in O(√N) Zeit durchsuchen, verglichen mit klassischem O(N). Für Kryptographie bedeutet dies, dass ein Quantencomputer einen k-Bit symmetrischen Schlüssel in 2^(k/2) Operationen statt 2^(k-1) finden könnte, wodurch das Sicherheitsniveau effektiv halbiert wird. AES-128 würde nur ~64 Bits Quantensicherheit bieten.",
          nl: "Grover's algoritme kan een ongesorteerde database van N items doorzoeken in O(√N) tijd, vergeleken met klassieke O(N). Voor cryptografie betekent dit dat een kwantumcomputer een k-bit symmetrische sleutel zou kunnen vinden in 2^(k/2) operaties in plaats van 2^(k-1), waardoor het beveiligingsniveau effectief wordt gehalveerd. AES-128 zou slechts ~64 bits kwantumbeveiliging bieden."
        }
      },
      {
        question: {
          en: "What are the vulnerabilities specific to homomorphic encryption schemes?",
          es: "¿Cuáles son las vulnerabilidades específicas de los esquemas de cifrado homomórfico?",
          de: "Was sind die spezifischen Verwundbarkeiten homomorpher Verschlüsselungsschemata?",
          nl: "Wat zijn de kwetsbaarheden specifiek voor homomorfische versleutelingsschema's?"
        },
        options: [
          { en: "Noise growth during computation can reveal information about plaintexts and operations performed", es: "El crecimiento del ruido durante la computación puede revelar información sobre textos planos y operaciones realizadas", de: "Rauschenwachstum während der Berechnung kann Informationen über Klartexte und durchgeführte Operationen preisgeben", nl: "Ruisgroei tijdens berekening kan informatie onthullen over platte teksten en uitgevoerde operaties" },
          { en: "They are completely immune to all cryptanalytic attacks", es: "Son completamente inmunes a todos los ataques criptoanalíticos", de: "Sie sind vollständig immun gegen alle kryptanalytischen Angriffe", nl: "Ze zijn volledig immuun voor alle cryptanalytische aanvallen" },
          { en: "Only vulnerable to quantum attacks", es: "Solo vulnerables a ataques cuánticos", de: "Nur anfällig für Quantenangriffe", nl: "Alleen kwetsbaar voor kwantumaanvallen" },
          { en: "Can only be broken through physical access", es: "Solo pueden romperse a través de acceso físico", de: "Können nur durch physischen Zugang gebrochen werden", nl: "Kunnen alleen worden gebroken door fysieke toegang" }
        ],
        correct: 0,
        explanation: {
          en: "Homomorphic encryption schemes accumulate noise with each operation, and this noise growth pattern can leak information about the computations being performed. Additionally, the structure of operations may be revealed through timing analysis, circuit depth analysis, or by examining the noise distribution in intermediate results.",
          es: "Los esquemas de cifrado homomórfico acumulan ruido con cada operación, y este patrón de crecimiento de ruido puede filtrar información sobre las computaciones que se están realizando. Además, la estructura de las operaciones puede revelarse a través del análisis de tiempo, análisis de profundidad de circuito, o examinando la distribución de ruido en resultados intermedios.",
          de: "Homomorphe Verschlüsselungsschemata akkumulieren Rauschen mit jeder Operation, und dieses Rauschenwachstumsmuster kann Informationen über die durchgeführten Berechnungen preisgeben. Zusätzlich kann die Struktur der Operationen durch Timing-Analyse, Schaltkreistiefe-Analyse oder durch Untersuchung der Rauschverteilung in Zwischenergebnissen aufgedeckt werden.",
          nl: "Homomorfische versleutelingsschema's accumuleren ruis bij elke operatie, en dit ruisgroeipatroon kan informatie lekken over de uitgevoerde berekeningen. Daarnaast kan de structuur van operaties worden onthuld door timing-analyse, circuitdiepte-analyse, of door de ruisverdeling in tussenresultaten te onderzoeken."
        }
      },
      {
        question: {
          en: "What is the significance of the Baby-Step Giant-Step algorithm in cryptanalysis?",
          es: "¿Cuál es la importancia del algoritmo Baby-Step Giant-Step en criptoanálisis?",
          de: "Was ist die Bedeutung des Baby-Step-Giant-Step-Algorithmus in der Kryptanalyse?",
          nl: "Wat is de betekenis van het Baby-Step Giant-Step algoritme in cryptanalyse?"
        },
        options: [
          { en: "Solves discrete logarithm problems in O(√n) time and space using meet-in-the-middle approach", es: "Resuelve problemas de logaritmo discreto en tiempo y espacio O(√n) usando enfoque de encuentro en el medio", de: "Löst diskrete Logarithmusprobleme in O(√n) Zeit und Raum mittels Meet-in-the-Middle-Ansatz", nl: "Lost discrete logaritme problemen op in O(√n) tijd en ruimte met meet-in-the-middle benadering" },
          { en: "Only applicable to RSA factorization", es: "Solo aplicable a la factorización RSA", de: "Nur anwendbar auf RSA-Faktorisierung", nl: "Alleen toepasbaar op RSA-factorisatie" },
          { en: "Requires quantum computers for implementation", es: "Requiere computadoras cuánticas para implementación", de: "Benötigt Quantencomputer für Implementierung", nl: "Vereist kwantumcomputers voor implementatie" },
          { en: "Works only on elliptic curve cryptography", es: "Funciona solo en criptografía de curva elíptica", de: "Funktioniert nur bei elliptischer Kurven-Kryptographie", nl: "Werkt alleen op elliptische curve cryptografie" }
        ],
        correct: 0,
        explanation: {
          en: "The Baby-Step Giant-Step algorithm is a space-time tradeoff for solving discrete logarithm problems. It computes and stores 'baby steps' (small multiples) and then takes 'giant steps' (large multiples) until a collision is found. This achieves O(√n) complexity, making it faster than brute force but requiring significant memory.",
          es: "El algoritmo Baby-Step Giant-Step es un intercambio espacio-tiempo para resolver problemas de logaritmo discreto. Calcula y almacena 'pasos de bebé' (múltiplos pequeños) y luego toma 'pasos gigantes' (múltiplos grandes) hasta que se encuentra una colisión. Esto logra complejidad O(√n), haciéndolo más rápido que la fuerza bruta pero requiriendo memoria significativa.",
          de: "Der Baby-Step-Giant-Step-Algorithmus ist ein Raum-Zeit-Kompromiss zur Lösung diskreter Logarithmusprobleme. Er berechnet und speichert 'Baby-Steps' (kleine Vielfache) und nimmt dann 'Giant-Steps' (große Vielfache) bis eine Kollision gefunden wird. Dies erreicht O(√n) Komplexität, macht es schneller als Brute-Force, benötigt aber erheblichen Speicher.",
          nl: "Het Baby-Step Giant-Step algoritme is een ruimte-tijd afweging voor het oplossen van discrete logaritme problemen. Het berekent en slaat 'baby steps' (kleine veelvouden) op en neemt dan 'giant steps' (grote veelvouden) totdat een botsing wordt gevonden. Dit bereikt O(√n) complexiteit, waardoor het sneller is dan brute force maar aanzienlijk geheugen vereist."
        }
      },
      {
        question: {
          en: "What is differential-linear cryptanalysis and how does it combine two attack methods?",
          es: "¿Qué es el criptoanálisis diferencial-lineal y cómo combina dos métodos de ataque?",
          de: "Was ist differential-lineare Kryptanalyse und wie kombiniert sie zwei Angriffsmethoden?",
          nl: "Wat is differentieel-lineaire cryptanalyse en hoe combineert het twee aanvalsmethoden?"
        },
        options: [
          { en: "Uses differential characteristics in early rounds followed by linear approximations in later rounds", es: "Usa características diferenciales en rondas tempranas seguidas de aproximaciones lineales en rondas posteriores", de: "Verwendet differentielle Charakteristiken in frühen Runden gefolgt von linearen Approximationen in späteren Runden", nl: "Gebruikt differentiële karakteristieken in vroege rondes gevolgd door lineaire benaderingen in latere rondes" },
          { en: "Only works on linear ciphers", es: "Solo funciona en cifrados lineales", de: "Funktioniert nur bei linearen Chiffren", nl: "Werkt alleen op lineaire versleutelingen" },
          { en: "Requires identical plaintexts for analysis", es: "Requiere textos planos idénticos para análisis", de: "Benötigt identische Klartexte für Analyse", nl: "Vereist identieke platte teksten voor analyse" },
          { en: "Is purely a theoretical attack with no practical applications", es: "Es puramente un ataque teórico sin aplicaciones prácticas", de: "Ist rein ein theoretischer Angriff ohne praktische Anwendungen", nl: "Is puur een theoretische aanval zonder praktische toepassingen" }
        ],
        correct: 0,
        explanation: {
          en: "Differential-linear cryptanalysis combines the strengths of both differential and linear cryptanalysis. It exploits differential characteristics in the first part of the cipher and linear approximations in the second part, connected through intermediate states. This hybrid approach can be more effective than either method alone against certain ciphers.",
          es: "El criptoanálisis diferencial-lineal combina las fortalezas tanto del criptoanálisis diferencial como lineal. Explota características diferenciales en la primera parte del cifrado y aproximaciones lineales en la segunda parte, conectadas a través de estados intermedios. Este enfoque híbrido puede ser más efectivo que cualquiera de los métodos por separado contra ciertos cifrados.",
          de: "Differential-lineare Kryptanalyse kombiniert die Stärken sowohl der differentiellen als auch der linearen Kryptanalyse. Sie nutzt differentielle Charakteristiken im ersten Teil der Chiffre und lineare Approximationen im zweiten Teil aus, verbunden durch Zwischenzustände. Dieser Hybridansatz kann effektiver sein als jede Methode allein gegen bestimmte Chiffren.",
          nl: "Differentieel-lineaire cryptanalyse combineert de sterke punten van zowel differentiële als lineaire cryptanalyse. Het buit differentiële karakteristieken uit in het eerste deel van de versleuteling en lineaire benaderingen in het tweede deel, verbonden door tussentoestanden. Deze hybride benadering kan effectiever zijn dan beide methoden afzonderlijk tegen bepaalde versleutelingen."
        }
      },
      {
        question: {
          en: "What is the role of algebraic immunity in cryptanalytic resistance?",
          es: "¿Cuál es el papel de la inmunidad algebraica en la resistencia criptoanalítica?",
          de: "Was ist die Rolle der algebraischen Immunität in der kryptanalytischen Resistenz?",
          nl: "Wat is de rol van algebraïsche immuniteit in cryptanalytische weerstand?"
        },
        options: [
          { en: "Measures resistance to algebraic attacks by quantifying the degree of annihilating polynomials", es: "Mide resistencia a ataques algebraicos cuantificando el grado de polinomios aniquiladores", de: "Misst Widerstand gegen algebraische Angriffe durch Quantifizierung des Grads vernichtender Polynome", nl: "Meet weerstand tegen algebraïsche aanvallen door de graad van vernietigende polynomen te kwantificeren" },
          { en: "Only applies to public key cryptosystems", es: "Solo se aplica a criptosistemas de clave pública", de: "Gilt nur für Public-Key-Kryptosysteme", nl: "Geldt alleen voor publieke sleutel cryptosystemen" },
          { en: "Guarantees complete security against all attacks", es: "Garantiza seguridad completa contra todos los ataques", de: "Garantiert vollständige Sicherheit gegen alle Angriffe", nl: "Garandeert volledige beveiliging tegen alle aanvallen" },
          { en: "Is unrelated to Boolean function properties", es: "No está relacionado con las propiedades de funciones booleanas", de: "Ist nicht mit booleschen Funktionseigenschaften verbunden", nl: "Is niet gerelateerd aan Booleaanse functie-eigenschappen" }
        ],
        correct: 0,
        explanation: {
          en: "Algebraic immunity measures how well a Boolean function resists algebraic attacks, specifically the minimum degree of non-zero polynomials that annihilate either the function or its complement. Higher algebraic immunity indicates better resistance to algebraic cryptanalysis techniques that try to solve systems of polynomial equations.",
          es: "La inmunidad algebraica mide qué tan bien resiste una función booleana los ataques algebraicos, específicamente el grado mínimo de polinomios no nulos que aniquilan ya sea la función o su complemento. Una inmunidad algebraica más alta indica mejor resistencia a técnicas de criptoanálisis algebraico que intentan resolver sistemas de ecuaciones polinomiales.",
          de: "Algebraische Immunität misst, wie gut eine boolesche Funktion algebraischen Angriffen widersteht, spezifisch den minimalen Grad nicht-null Polynome, die entweder die Funktion oder ihr Komplement vernichten. Höhere algebraische Immunität zeigt besseren Widerstand gegen algebraische Kryptanalyse-Techniken an, die versuchen, Systeme polynomialer Gleichungen zu lösen.",
          nl: "Algebraïsche immuniteit meet hoe goed een Booleaanse functie weerstand biedt tegen algebraïsche aanvallen, specifiek de minimale graad van niet-nul polynomen die ofwel de functie of zijn complement vernietigen. Hogere algebraïsche immuniteit wijst op betere weerstand tegen algebraïsche cryptanalyse technieken die proberen systemen van polynomiale vergelijkingen op te lossen."
        }
      },
      {
        question: {
          en: "How do quantum cryptanalytic algorithms beyond Shor's algorithm threaten current cryptography?",
          es: "¿Cómo los algoritmos criptoanalíticos cuánticos más allá del algoritmo de Shor amenazan la criptografía actual?",
          de: "Wie bedrohen quantenkryptanalytische Algorithmen jenseits von Shors Algorithmus die aktuelle Kryptographie?",
          nl: "Hoe bedreigen kwantum cryptanalytische algoritmen voorbij Shor's algoritme de huidige cryptografie?"
        },
        options: [
          { en: "Simon's algorithm exploits period-finding for specific symmetric constructions, while quantum walks attack certain hash functions", es: "El algoritmo de Simon explota el hallazgo de períodos para construcciones simétricas específicas, mientras que las caminatas cuánticas atacan ciertas funciones hash", de: "Simons Algorithmus nutzt Periodenfindung für spezifische symmetrische Konstruktionen aus, während Quantenwanderungen bestimmte Hash-Funktionen angreifen", nl: "Simon's algoritme buit periodevinding uit voor specifieke symmetrische constructies, terwijl kwantumwandelingen bepaalde hash functies aanvallen" },
          { en: "All quantum algorithms are based on Shor's approach", es: "Todos los algoritmos cuánticos se basan en el enfoque de Shor", de: "Alle Quantenalgorithmen basieren auf Shors Ansatz", nl: "Alle kwantumalgoritmen zijn gebaseerd op Shor's benadering" },
          { en: "Quantum algorithms only affect public key cryptography", es: "Los algoritmos cuánticos solo afectan la criptografía de clave pública", de: "Quantenalgorithmen betreffen nur Public-Key-Kryptographie", nl: "Kwantumalgoritmen beïnvloeden alleen publieke sleutel cryptografie" },
          { en: "No other quantum algorithms pose cryptanalytic threats", es: "Ningún otro algoritmo cuántico presenta amenazas criptoanalíticas", de: "Keine anderen Quantenalgorithmen stellen kryptanalytische Bedrohungen dar", nl: "Geen andere kwantumalgoritmen vormen cryptanalytische bedreigingen" }
        ],
        correct: 0,
        explanation: {
          en: "Beyond Shor's algorithm, Simon's algorithm can break symmetric constructions based on finding periods in functions, threatening certain modes of operation and MAC constructions. Quantum walks can provide speedups for finding collisions in hash functions. Additionally, amplitude amplification can enhance various search-based cryptanalytic techniques.",
          es: "Más allá del algoritmo de Shor, el algoritmo de Simon puede romper construcciones simétricas basadas en encontrar períodos en funciones, amenazando ciertos modos de operación y construcciones MAC. Las caminatas cuánticas pueden proporcionar aceleraciones para encontrar colisiones en funciones hash. Además, la amplificación de amplitud puede mejorar varias técnicas criptoanalíticas basadas en búsqueda.",
          de: "Jenseits von Shors Algorithmus kann Simons Algorithmus symmetrische Konstruktionen brechen, die auf dem Finden von Perioden in Funktionen basieren, und bedroht bestimmte Betriebsmodi und MAC-Konstruktionen. Quantenwanderungen können Beschleunigungen beim Finden von Kollisionen in Hash-Funktionen bieten. Zusätzlich kann Amplitudenverstärkung verschiedene suchbasierte kryptanalytische Techniken verbessern.",
          nl: "Voorbij Shor's algoritme kan Simon's algoritme symmetrische constructies breken gebaseerd op het vinden van perioden in functies, wat bepaalde operatiemodi en MAC-constructies bedreigt. Kwantumwandelingen kunnen versnellingen bieden voor het vinden van botsingen in hash functies. Daarnaast kan amplitude amplificatie verschillende zoek-gebaseerde cryptanalytische technieken verbeteren."
        }
      },
      {
        question: {
          en: "What makes post-quantum signature schemes vulnerable to specific cryptanalytic techniques?",
          es: "¿Qué hace vulnerables a los esquemas de firma post-cuántica a técnicas criptoanalíticas específicas?",
          de: "Was macht Post-Quanten-Signaturschemata anfällig für spezifische kryptanalytische Techniken?",
          nl: "Wat maakt post-kwantum handtekeningschema's kwetsbaar voor specifieke cryptanalytische technieken?"
        },
        options: [
          { en: "Large signature sizes and mathematical structures enable lattice reduction, algebraic attacks, and side-channel exploitation", es: "Tamaños grandes de firma y estructuras matemáticas habilitan reducción de retículas, ataques algebraicos y explotación de canal lateral", de: "Große Signaturgrößen und mathematische Strukturen ermöglichen Gitterreduktion, algebraische Angriffe und Seitenkanal-Ausnutzung", nl: "Grote handtekeninggroottes en wiskundige structuren maken lattice reductie, algebraïsche aanvallen en zijkanaal-exploitatie mogelijk" },
          { en: "They are immune to all classical and quantum attacks", es: "Son inmunes a todos los ataques clásicos y cuánticos", de: "Sie sind immun gegen alle klassischen und Quantenangriffe", nl: "Ze zijn immuun voor alle klassieke en kwantumaanvallen" },
          { en: "Only vulnerable during key generation phase", es: "Solo vulnerables durante la fase de generación de claves", de: "Nur anfällig während der Schlüsselerzeugungsphase", nl: "Alleen kwetsbaar tijdens sleutelgeneratiefase" },
          { en: "Have identical security properties to RSA signatures", es: "Tienen propiedades de seguridad idénticas a las firmas RSA", de: "Haben identische Sicherheitseigenschaften wie RSA-Signaturen", nl: "Hebben identieke beveiligingseigenschappen als RSA-handtekeningen" }
        ],
        correct: 0,
        explanation: {
          en: "Post-quantum signature schemes face unique challenges: lattice-based schemes may be vulnerable to improved lattice reduction algorithms; hash-based schemes have large signature sizes that may leak timing information; multivariate schemes can be attacked through algebraic methods; and isogeny-based schemes may have weak points in their mathematical structure.",
          es: "Los esquemas de firma post-cuántica enfrentan desafíos únicos: los esquemas basados en retículas pueden ser vulnerables a algoritmos mejorados de reducción de retículas; los esquemas basados en hash tienen tamaños grandes de firma que pueden filtrar información de tiempo; los esquemas multivariados pueden ser atacados a través de métodos algebraicos; y los esquemas basados en isogenia pueden tener puntos débiles en su estructura matemática.",
          de: "Post-Quanten-Signaturschemata stehen vor einzigartigen Herausforderungen: gitterbasierte Schemata können anfällig für verbesserte Gitterreduktionsalgorithmen sein; hashbasierte Schemata haben große Signaturgrößen, die Timing-Informationen preisgeben können; multivariate Schemata können durch algebraische Methoden angegriffen werden; und isogeniebasierte Schemata können Schwachstellen in ihrer mathematischen Struktur haben.",
          nl: "Post-kwantum handtekeningschema's staan voor unieke uitdagingen: lattice-gebaseerde schema's kunnen kwetsbaar zijn voor verbeterde lattice reductie algoritmen; hash-gebaseerde schema's hebben grote handtekeninggroottes die timing-informatie kunnen lekken; multivariate schema's kunnen worden aangevallen door algebraïsche methoden; en isogenie-gebaseerde schema's kunnen zwakke punten hebben in hun wiskundige structuur."
        }
      },
      {
        question: {
          en: "What is the cube-tester approach in cryptanalysis?",
          es: "¿Qué es el enfoque cube-tester en criptoanálisis?",
          de: "Was ist der Cube-Tester-Ansatz in der Kryptanalyse?",
          nl: "Wat is de cube-tester benadering in cryptanalyse?"
        },
        options: [
          { en: "Tests for non-random behavior by computing higher-order derivatives to detect non-polynomial components", es: "Prueba comportamiento no aleatorio computando derivadas de orden superior para detectar componentes no polinomiales", de: "Testet auf nicht-zufälliges Verhalten durch Berechnung höherer Ordnungsableitungen zur Erkennung nicht-polynomialer Komponenten", nl: "Test voor niet-willekeurig gedrag door hogere-orde derivaten te berekenen om niet-polynomiale componenten te detecteren" },
          { en: "Only applicable to block ciphers with 128-bit keys", es: "Solo aplicable a cifrados de bloque con claves de 128 bits", de: "Nur anwendbar auf Blockchiffren mit 128-Bit-Schlüsseln", nl: "Alleen toepasbaar op blokversleutelingen met 128-bit sleutels" },
          { en: "Requires physical access to the encryption device", es: "Requiere acceso físico al dispositivo de cifrado", de: "Benötigt physischen Zugang zum Verschlüsselungsgerät", nl: "Vereist fysieke toegang tot het versleutelingsapparaat" },
          { en: "Is a purely timing-based attack", es: "Es un ataque puramente basado en tiempo", de: "Ist ein rein zeitbasierter Angriff", nl: "Is een puur timing-gebaseerde aanval" }
        ],
        correct: 0,
        explanation: {
          en: "Cube testers analyze the algebraic structure of cryptographic functions by computing higher-order derivatives (cubes). When summed over all possible values of certain variables, these derivatives should be zero for random functions but may be non-zero for structured cryptographic functions, revealing weaknesses.",
          es: "Los cube testers analizan la estructura algebraica de funciones criptográficas computando derivadas de orden superior (cubos). Cuando se suman sobre todos los valores posibles de ciertas variables, estas derivadas deberían ser cero para funciones aleatorias pero pueden ser no-cero para funciones criptográficas estructuradas, revelando debilidades.",
          de: "Cube-Tester analysieren die algebraische Struktur kryptographischer Funktionen durch Berechnung höherer Ordnungsableitungen (Würfel). Wenn über alle möglichen Werte bestimmter Variablen summiert, sollten diese Ableitungen für zufällige Funktionen null sein, können aber für strukturierte kryptographische Funktionen ungleich null sein und Schwächen aufdecken.",
          nl: "Cube testers analyseren de algebraïsche structuur van cryptografische functies door hogere-orde derivaten (kubussen) te berekenen. Wanneer gesommeerd over alle mogelijke waarden van bepaalde variabelen, zouden deze derivaten nul moeten zijn voor willekeurige functies maar kunnen niet-nul zijn voor gestructureerde cryptografische functies, waarbij zwakheden worden onthuld."
        }
      },
      {
        question: {
          en: "How do meet-in-the-middle attacks exploit time-memory tradeoffs?",
          es: "¿Cómo los ataques meet-in-the-middle explotan intercambios tiempo-memoria?",
          de: "Wie nutzen Meet-in-the-Middle-Angriffe Zeit-Speicher-Kompromatisse aus?",
          nl: "Hoe benutten meet-in-the-middle aanvallen tijd-geheugen afwegingen?"
        },
        options: [
          { en: "Precomputes partial results from both directions and searches for matches to reduce overall computational complexity", es: "Precomputa resultados parciales desde ambas direcciones y busca coincidencias para reducir la complejidad computacional general", de: "Berechnet partielle Ergebnisse aus beiden Richtungen vor und sucht nach Übereinstimmungen zur Reduzierung der Gesamtberechnungskomplexität", nl: "Berekent partiële resultaten vooraf vanuit beide richtingen en zoekt naar overeenkomsten om de algehele rekenkundige complexiteit te verminderen" },
          { en: "Only works against single-round ciphers", es: "Solo funciona contra cifrados de una sola ronda", de: "Funktioniert nur gegen Ein-Runden-Chiffren", nl: "Werkt alleen tegen één-ronde versleutelingen" },
          { en: "Requires identical memory and time complexity", es: "Requiere complejidad idéntica de memoria y tiempo", de: "Benötigt identische Speicher- und Zeitkomplexität", nl: "Vereist identieke geheugen- en tijdcomplexiteit" },
          { en: "Cannot be applied to hash function cryptanalysis", es: "No se puede aplicar al criptoanálisis de funciones hash", de: "Kann nicht auf Hash-Funktions-Kryptanalyse angewendet werden", nl: "Kan niet worden toegepast op hash functie cryptanalyse" }
        ],
        correct: 0,
        explanation: {
          en: "Meet-in-the-middle attacks work by computing forward from the plaintext and backward from the ciphertext, meeting in the middle. By storing intermediate values and looking for collisions, the attack can break multiple encryption with complexity roughly 2^(n/2) instead of 2^n, trading memory for computational time.",
          es: "Los ataques meet-in-the-middle funcionan computando hacia adelante desde el texto plano y hacia atrás desde el texto cifrado, encontrándose en el medio. Al almacenar valores intermedios y buscar colisiones, el ataque puede romper cifrado múltiple con complejidad aproximadamente 2^(n/2) en lugar de 2^n, intercambiando memoria por tiempo computacional.",
          de: "Meet-in-the-Middle-Angriffe funktionieren durch Berechnung vorwärts vom Klartext und rückwärts vom Chiffretext, treffen sich in der Mitte. Durch Speicherung von Zwischenwerten und Suche nach Kollisionen kann der Angriff mehrfache Verschlüsselung mit Komplexität ungefähr 2^(n/2) statt 2^n brechen, tauscht Speicher gegen Rechenzeit.",
          nl: "Meet-in-the-middle aanvallen werken door voorwaarts te berekenen vanaf de platte tekst en achterwaarts vanaf de cijfertekst, ontmoeten elkaar in het midden. Door tussenwaarden op te slaan en te zoeken naar botsingen, kan de aanval meervoudige versleuteling breken met complexiteit ongeveer 2^(n/2) in plaats van 2^n, waarbij geheugen wordt geruild voor rekentijd."
        }
      },
      {
        question: {
          en: "What is the significance of impossible differential cryptanalysis?",
          es: "¿Cuál es la importancia del criptoanálisis diferencial imposible?",
          de: "Was ist die Bedeutung der unmöglichen Differential-Kryptanalyse?",
          nl: "Wat is de betekenis van onmogelijke differentiële cryptanalyse?"
        },
        options: [
          { en: "Exploits differential characteristics that cannot occur, using contradiction to eliminate wrong key hypotheses", es: "Explota características diferenciales que no pueden ocurrir, usando contradicción para eliminar hipótesis de clave incorrectas", de: "Nutzt differentielle Charakteristiken aus, die nicht auftreten können, verwendet Widerspruch zur Eliminierung falscher Schlüsselhypothesen", nl: "Buit differentiële karakteristieken uit die niet kunnen voorkomen, gebruikt tegenstrijdigheid om verkeerde sleutelhypothesen te elimineren" },
          { en: "Only works on theoretically perfect ciphers", es: "Solo funciona en cifrados teóricamente perfectos", de: "Funktioniert nur bei theoretisch perfekten Chiffren", nl: "Werkt alleen op theoretisch perfecte versleutelingen" },
          { en: "Requires knowledge of all round keys", es: "Requiere conocimiento de todas las claves de ronda", de: "Benötigt Kenntnis aller Rundenschlüssel", nl: "Vereist kennis van alle rondesleutels" },
          { en: "Is identical to standard differential cryptanalysis", es: "Es idéntico al criptoanálisis diferencial estándar", de: "Ist identisch mit Standard-Differential-Kryptanalyse", nl: "Is identiek aan standaard differentiële cryptanalyse" }
        ],
        correct: 0,
        explanation: {
          en: "Impossible differential attacks identify differential characteristics with probability zero - transitions that cannot occur in the cipher structure. When such a differential is observed, it indicates that the key guess is wrong, allowing systematic elimination of incorrect keys through proof by contradiction.",
          es: "Los ataques diferenciales imposibles identifican características diferenciales con probabilidad cero - transiciones que no pueden ocurrir en la estructura del cifrado. Cuando se observa tal diferencial, indica que la suposición de clave es incorrecta, permitiendo eliminación sistemática de claves incorrectas a través de prueba por contradicción.",
          de: "Unmögliche Differential-Angriffe identifizieren differentielle Charakteristiken mit Wahrscheinlichkeit null - Übergänge, die in der Chiffrestruktur nicht auftreten können. Wenn ein solches Differential beobachtet wird, zeigt es an, dass die Schlüsselvermutung falsch ist, was systematische Eliminierung inkorrekter Schlüssel durch Beweis per Widerspruch ermöglicht.",
          nl: "Onmogelijke differentiële aanvallen identificeren differentiële karakteristieken met kans nul - overgangen die niet kunnen voorkomen in de versleutelingsstructuur. Wanneer zo'n differentieel wordt waargenomen, geeft het aan dat de sleutelgissing verkeerd is, waardoor systematische eliminatie van incorrecte sleutels mogelijk wordt door bewijs uit het ongerijmde."
        }
      },
      {
        question: {
          en: "What are the challenges in cryptanalyzing authenticated encryption schemes?",
          es: "¿Cuáles son los desafíos en el criptoanálisis de esquemas de cifrado autenticado?",
          de: "Was sind die Herausforderungen bei der Kryptanalyse authentifizierter Verschlüsselungsschemata?",
          nl: "Wat zijn de uitdagingen bij het cryptanalyseren van geauthenticeerde versleutelingsschema's?"
        },
        options: [
          { en: "Must simultaneously break confidentiality and authenticity properties while handling associated data", es: "Debe romper simultáneamente propiedades de confidencialidad y autenticidad mientras maneja datos asociados", de: "Muss gleichzeitig Vertraulichkeits- und Authentizitätseigenschaften brechen während assoziierte Daten verarbeitet werden", nl: "Moet gelijktijdig vertrouwelijkheids- en authenticiteits eigenschappen breken terwijl geassocieerde data wordt verwerkt" },
          { en: "They are always easier to break than separate encryption and MAC", es: "Son siempre más fáciles de romper que cifrado y MAC separados", de: "Sie sind immer einfacher zu brechen als separate Verschlüsselung und MAC", nl: "Ze zijn altijd makkelijker te breken dan gescheiden versleuteling en MAC" },
          { en: "Only require breaking the encryption component", es: "Solo requieren romper el componente de cifrado", de: "Benötigen nur das Brechen der Verschlüsselungskomponente", nl: "Vereisen alleen het breken van de versleutelingscomponent" },
          { en: "Cannot be analyzed using traditional cryptanalytic methods", es: "No se pueden analizar usando métodos criptoanalíticos tradicionales", de: "Können nicht mit traditionellen kryptanalytischen Methoden analysiert werden", nl: "Kunnen niet worden geanalyseerd met traditionele cryptanalytische methoden" }
        ],
        correct: 0,
        explanation: {
          en: "Authenticated encryption schemes like AES-GCM, ChaCha20-Poly1305, or OCB combine encryption and authentication, creating complex interactions. Cryptanalysts must consider attacks that break confidentiality (plaintext recovery), authenticity (forgery attacks), or both, while handling additional authenticated data (AAD) that affects the authentication tag.",
          es: "Los esquemas de cifrado autenticado como AES-GCM, ChaCha20-Poly1305, u OCB combinan cifrado y autenticación, creando interacciones complejas. Los criptoanalistas deben considerar ataques que rompan confidencialidad (recuperación de texto plano), autenticidad (ataques de falsificación), o ambos, mientras manejan datos adicionales autenticados (AAD) que afectan la etiqueta de autenticación.",
          de: "Authentifizierte Verschlüsselungsschemata wie AES-GCM, ChaCha20-Poly1305 oder OCB kombinieren Verschlüsselung und Authentifizierung und schaffen komplexe Wechselwirkungen. Kryptanalytiker müssen Angriffe berücksichtigen, die Vertraulichkeit (Klartextwiederherstellung), Authentizität (Fälschungsangriffe) oder beides brechen, während zusätzliche authentifizierte Daten (AAD) verarbeitet werden, die das Authentifizierungs-Tag beeinflussen.",
          nl: "Geauthenticeerde versleutelingsschema's zoals AES-GCM, ChaCha20-Poly1305, of OCB combineren versleuteling en authenticatie, wat complexe interacties creëert. Cryptanalisten moeten aanvallen overwegen die vertrouwelijkheid (platte tekst herstel), authenticiteit (vervalsingsaanvallen), of beide breken, terwijl ze aanvullende geauthenticeerde data (AAD) verwerken die de authenticatietag beïnvloedt."
        }
      },
      {
        question: {
          en: "What is the role of S-box analysis in modern block cipher cryptanalysis?",
          es: "¿Cuál es el papel del análisis de S-box en el criptoanálisis moderno de cifrados de bloque?",
          de: "Was ist die Rolle der S-Box-Analyse in der modernen Blockchiffre-Kryptanalyse?",
          nl: "Wat is de rol van S-box analyse in moderne blokversleuteling cryptanalyse?"
        },
        options: [
          { en: "Analyzes substitution properties including differential uniformity, nonlinearity, and algebraic degree", es: "Analiza propiedades de sustitución incluyendo uniformidad diferencial, no linealidad y grado algebraico", de: "Analysiert Substitutionseigenschaften einschließlich differentieller Uniformität, Nichtlinearität und algebraischem Grad", nl: "Analyseert substitutieeigenschappen inclusief differentiële uniformiteit, niet-lineariteit en algebraïsche graad" },
          { en: "Only examines the size of the S-box", es: "Solo examina el tamaño de la S-box", de: "Untersucht nur die Größe der S-Box", nl: "Onderzoekt alleen de grootte van de S-box" },
          { en: "Is irrelevant for modern cipher analysis", es: "Es irrelevante para el análisis de cifrados modernos", de: "Ist irrelevant für moderne Chiffreanalyse", nl: "Is irrelevant voor moderne versleutelingsanalyse" },
          { en: "Only applies to linear cryptanalysis", es: "Solo se aplica al criptoanálisis lineal", de: "Gilt nur für lineare Kryptanalyse", nl: "Geldt alleen voor lineaire cryptanalyse" }
        ],
        correct: 0,
        explanation: {
          en: "S-box analysis examines multiple cryptographic properties: differential uniformity (maximum probability of output differences), nonlinearity (distance from linear functions), algebraic degree (complexity of polynomial representation), correlation immunity, and algebraic immunity. These properties determine resistance to various cryptanalytic attacks.",
          es: "El análisis de S-box examina múltiples propiedades criptográficas: uniformidad diferencial (probabilidad máxima de diferencias de salida), no linealidad (distancia de funciones lineales), grado algebraico (complejidad de representación polinomial), inmunidad de correlación e inmunidad algebraica. Estas propiedades determinan la resistencia a varios ataques criptoanalíticos.",
          de: "S-Box-Analyse untersucht mehrere kryptographische Eigenschaften: differentielle Uniformität (maximale Wahrscheinlichkeit von Ausgabedifferenzen), Nichtlinearität (Abstand von linearen Funktionen), algebraischer Grad (Komplexität der Polynomdarstellung), Korrelationsimmunität und algebraische Immunität. Diese Eigenschaften bestimmen die Resistenz gegen verschiedene kryptanalytische Angriffe.",
          nl: "S-box analyse onderzoekt meerdere cryptografische eigenschappen: differentiële uniformiteit (maximale kans op output verschillen), niet-lineariteit (afstand tot lineaire functies), algebraïsche graad (complexiteit van polynomiale representatie), correlatieimmuniteit en algebraïsche immuniteit. Deze eigenschappen bepalen de weerstand tegen verschillende cryptanalytische aanvallen."
        }
      },
      {
        question: {
          en: "How do rotational cryptanalysis techniques work?",
          es: "¿Cómo funcionan las técnicas de criptoanálisis rotacional?",
          de: "Wie funktionieren rotationelle Kryptanalyse-Techniken?",
          nl: "Hoe werken rotationele cryptanalyse technieken?"
        },
        options: [
          { en: "Exploits invariances under bit rotations to find correlations that persist through cipher operations", es: "Explota invarianzas bajo rotaciones de bits para encontrar correlaciones que persisten a través de operaciones de cifrado", de: "Nutzt Invarianzen unter Bitrotationen aus, um Korrelationen zu finden, die durch Chiffreoperationen bestehen bleiben", nl: "Buit invarianties onder bit rotaties uit om correlaties te vinden die aanhouden door versleutelingsoperaties" },
          { en: "Only works on ciphers with circular key schedules", es: "Solo funciona en cifrados con horarios de clave circulares", de: "Funktioniert nur bei Chiffren mit zirkulären Schlüsselprogrammen", nl: "Werkt alleen op versleutelingen met circulaire sleutelschema's" },
          { en: "Requires physical rotation of hardware components", es: "Requiere rotación física de componentes de hardware", de: "Benötigt physische Rotation von Hardware-Komponenten", nl: "Vereist fysieke rotatie van hardware componenten" },
          { en: "Is identical to differential cryptanalysis", es: "Es idéntico al criptoanálisis diferencial", de: "Ist identisch mit Differential-Kryptanalyse", nl: "Is identiek aan differentiële cryptanalyse" }
        ],
        correct: 0,
        explanation: {
          en: "Rotational cryptanalysis looks for statistical properties that are preserved under bit rotation operations. If a cipher maintains certain probabilistic relationships when inputs are rotated, these invariances can be exploited to distinguish the cipher from a random permutation and potentially recover key information.",
          es: "El criptoanálisis rotacional busca propiedades estadísticas que se preservan bajo operaciones de rotación de bits. Si un cifrado mantiene ciertas relaciones probabilísticas cuando las entradas se rotan, estas invarianzas pueden explotarse para distinguir el cifrado de una permutación aleatoria y potencialmente recuperar información de clave.",
          de: "Rotationelle Kryptanalyse sucht nach statistischen Eigenschaften, die unter Bitrotationsoperationen erhalten bleiben. Wenn eine Chiffre bestimmte probabilistische Beziehungen aufrechtertält, wenn Eingaben rotiert werden, können diese Invarianzen ausgenutzt werden, um die Chiffre von einer zufälligen Permutation zu unterscheiden und möglicherweise Schlüsselinformationen zu gewinnen.",
          nl: "Rotationele cryptanalyse zoekt naar statistische eigenschappen die behouden blijven onder bit rotatie operaties. Als een versleuteling bepaalde probabilistische relaties behoudt wanneer inputs worden geroteerd, kunnen deze invarianties worden uitgebuit om de versleuteling te onderscheiden van een willekeurige permutatie en mogelijk sleutelinformatie te herstellen."
        }
      },
      {
        question: {
          en: "What makes timing attacks particularly dangerous in real-world implementations?",
          es: "¿Qué hace que los ataques de tiempo sean particularmente peligrosos en implementaciones del mundo real?",
          de: "Was macht Timing-Angriffe in realen Implementierungen besonders gefährlich?",
          nl: "Wat maakt timing aanvallen bijzonder gevaarlijk in echte implementaties?"
        },
        options: [
          { en: "Exploit data-dependent execution times in algorithms to extract secret information remotely", es: "Explotan tiempos de ejecución dependientes de datos en algoritmos para extraer información secreta remotamente", de: "Nutzen datenabhängige Ausführungszeiten in Algorithmen aus, um geheime Informationen ferngesteuert zu extrahieren", nl: "Buiten data-afhankelijke uitvoeringstijden in algoritmen uit om geheime informatie op afstand te extraheren" },
          { en: "Only work on unencrypted communications", es: "Solo funcionan en comunicaciones no cifradas", de: "Funktionieren nur bei unverschlüsselten Kommunikationen", nl: "Werken alleen op onversleutelde communicaties" },
          { en: "Require direct physical access to the processor", es: "Requieren acceso físico directo al procesador", de: "Benötigen direkten physischen Zugang zum Prozessor", nl: "Vereisen directe fysieke toegang tot de processor" },
          { en: "Are completely mitigated by constant-time implementations", es: "Son completamente mitigados por implementaciones de tiempo constante", de: "Werden vollständig durch Konstant-Zeit-Implementierungen gemildert", nl: "Worden volledig gemitigeerd door constante-tijd implementaties" }
        ],
        correct: 0,
        explanation: {
          en: "Timing attacks analyze variations in execution time that depend on secret data, such as conditional branches, memory access patterns, or variable-time operations. These can be exploited over networks, making them particularly dangerous since attackers don't need physical access to extract sensitive information like cryptographic keys.",
          es: "Los ataques de tiempo analizan variaciones en el tiempo de ejecución que dependen de datos secretos, como ramas condicionales, patrones de acceso a memoria u operaciones de tiempo variable. Estos pueden explotarse a través de redes, haciéndolos particularmente peligrosos ya que los atacantes no necesitan acceso físico para extraer información sensible como claves criptográficas.",
          de: "Timing-Angriffe analysieren Variationen in der Ausführungszeit, die von geheimen Daten abhängen, wie bedingte Verzweigungen, Speicherzugriffsmuster oder variable Zeitoperationen. Diese können über Netzwerke ausgenutzt werden, was sie besonders gefährlich macht, da Angreifer keinen physischen Zugang benötigen, um sensible Informationen wie kryptographische Schlüssel zu extrahieren.",
          nl: "Timing aanvallen analyseren variaties in uitvoeringstijd die afhangen van geheime data, zoals voorwaardelijke vertakkingen, geheugentoeganspatronen of variabele-tijd operaties. Deze kunnen worden uitgebuit over netwerken, waardoor ze bijzonder gevaarlijk zijn omdat aanvallers geen fysieke toegang nodig hebben om gevoelige informatie zoals cryptografische sleutels te extraheren."
        }
      },
      {
        question: {
          en: "What is the significance of the XSL (eXtended Sparse Linearization) attack?",
          es: "¿Cuál es la importancia del ataque XSL (Linealización Esparcida Extendida)?",
          de: "Was ist die Bedeutung des XSL (eXtended Sparse Linearization) Angriffs?",
          nl: "Wat is de betekenis van de XSL (eXtended Sparse Linearization) aanval?"
        },
        options: [
          { en: "Attempts to solve overdetermined systems of polynomial equations arising from block cipher algebraic representations", es: "Intenta resolver sistemas sobredeterminados de ecuaciones polinomiales que surgen de representaciones algebraicas de cifrados de bloque", de: "Versucht überbestimmte Systeme polynomialer Gleichungen zu lösen, die aus algebraischen Darstellungen von Blockchiffren entstehen", nl: "Probeert overbepaalde systemen van polynomiale vergelijkingen op te lossen die voortkomen uit algebraïsche representaties van blokversleutelingen" },
          { en: "Only works against stream ciphers", es: "Solo funciona contra cifrados de flujo", de: "Funktioniert nur gegen Stromchiffren", nl: "Werkt alleen tegen stroomversleutelingen" },
          { en: "Is a purely theoretical attack with no practical implications", es: "Es un ataque puramente teórico sin implicaciones prácticas", de: "Ist ein rein theoretischer Angriff ohne praktische Implikationen", nl: "Is een puur theoretische aanval zonder praktische implicaties" },
          { en: "Requires quantum computers for implementation", es: "Requiere computadoras cuánticas para implementación", de: "Benötigt Quantencomputer für Implementierung", nl: "Vereist kwantumcomputers voor implementatie" }
        ],
        correct: 0,
        explanation: {
          en: "The XSL attack represents block ciphers as systems of polynomial equations over finite fields and attempts to solve them directly. While the attack's practicality against AES remains debated, it highlighted the importance of understanding algebraic properties of block ciphers and influenced the design of newer algorithms.",
          es: "El ataque XSL representa cifrados de bloque como sistemas de ecuaciones polinomiales sobre campos finitos e intenta resolverlos directamente. Aunque la practicidad del ataque contra AES permanece debatida, destacó la importancia de entender las propiedades algebraicas de los cifrados de bloque e influyó en el diseño de algoritmos más nuevos.",
          de: "Der XSL-Angriff stellt Blockchiffren als Systeme polynomialer Gleichungen über endlichen Körpern dar und versucht, sie direkt zu lösen. Während die Praktikabilität des Angriffs gegen AES umstritten bleibt, hob er die Wichtigkeit des Verständnisses algebraischer Eigenschaften von Blockchiffren hervor und beeinflusste das Design neuerer Algorithmen.",
          nl: "De XSL aanval stelt blokversleutelingen voor als systemen van polynomiale vergelijkingen over eindige velden en probeert ze direct op te lossen. Hoewel de praktische toepasbaarheid van de aanval tegen AES betwist blijft, benadrukte het het belang van het begrijpen van algebraïsche eigenschappen van blokversleutelingen en beïnvloedde het ontwerp van nieuwere algoritmen."
        }
      },
      {
        question: {
          en: "How do boomerang attacks combine differential characteristics?",
          es: "¿Cómo los ataques boomerang combinan características diferenciales?",
          de: "Wie kombinieren Bumerang-Angriffe differentielle Charakteristiken?",
          nl: "Hoe combineren boomerang aanvallen differentiële karakteristieken?"
        },
        options: [
          { en: "Uses two short differential characteristics in a sandwich attack structure to cover more cipher rounds", es: "Usa dos características diferenciales cortas en una estructura de ataque sándwich para cubrir más rondas de cifrado", de: "Verwendet zwei kurze differentielle Charakteristiken in einer Sandwich-Angriffsstruktur, um mehr Chiffrerunden abzudecken", nl: "Gebruikt twee korte differentiële karakteristieken in een sandwich aanvalsstructuur om meer versleutelingsrondes te dekken" },
          { en: "Only works on ciphers with reversible operations", es: "Solo funciona en cifrados con operaciones reversibles", de: "Funktioniert nur bei Chiffren mit umkehrbaren Operationen", nl: "Werkt alleen op versleutelingen met omkeerbare operaties" },
          { en: "Requires identical differential probabilities", es: "Requiere probabilidades diferenciales idénticas", de: "Benötigt identische differentielle Wahrscheinlichkeiten", nl: "Vereist identieke differentiële kansen" },
          { en: "Cannot be applied to key recovery attacks", es: "No se puede aplicar a ataques de recuperación de claves", de: "Kann nicht auf Schlüsselwiederherstellungsangriffe angewendet werden", nl: "Kan niet worden toegepast op sleutelherstel aanvallen" }
        ],
        correct: 0,
        explanation: {
          en: "Boomerang attacks use a quartet structure with two differential characteristics: one for the top part of the cipher and another for the bottom part. The attack works by encrypting pairs with specific differences, then using the cipher's structure to create a 'boomerang' effect that reveals information about the key through the middle rounds.",
          es: "Los ataques boomerang usan una estructura de cuarteto con dos características diferenciales: una para la parte superior del cifrado y otra para la parte inferior. El ataque funciona cifrando pares con diferencias específicas, luego usando la estructura del cifrado para crear un efecto 'boomerang' que revela información sobre la clave a través de las rondas medias.",
          de: "Bumerang-Angriffe verwenden eine Quartett-Struktur mit zwei differentiellen Charakteristiken: eine für den oberen Teil der Chiffre und eine andere für den unteren Teil. Der Angriff funktioniert durch Verschlüsselung von Paaren mit spezifischen Differenzen, dann Verwendung der Chiffrestruktur zur Erzeugung eines 'Bumerang'-Effekts, der Informationen über den Schlüssel durch die mittleren Runden enthüllt.",
          nl: "Boomerang aanvallen gebruiken een kwartet structuur met twee differentiële karakteristieken: één voor het bovenste deel van de versleuteling en een ander voor het onderste deel. De aanval werkt door paren te versleutelen met specifieke verschillen, dan de versleutelingsstructuur te gebruiken om een 'boomerang' effect te creëren dat informatie over de sleutel onthult door de middelste rondes."
        }
      },
      {
        question: {
          en: "What is the polynomial method in cryptanalysis of stream ciphers?",
          es: "¿Qué es el método polinomial en el criptoanálisis de cifrados de flujo?",
          de: "Was ist die Polynommethode in der Kryptanalyse von Stromchiffren?",
          nl: "Wat is de polynomiale methode in cryptanalyse van stroomversleutelingen?"
        },
        options: [
          { en: "Models the keystream generation as a system of polynomial equations to find algebraic relationships", es: "Modela la generación de flujo de claves como un sistema de ecuaciones polinomiales para encontrar relaciones algebraicas", de: "Modelliert die Schlüsselstromgenerierung als System polynomialer Gleichungen zur Findung algebraischer Beziehungen", nl: "Modelleert de sleutelstroomgeneratie als een systeem van polynomiale vergelijkingen om algebraïsche relaties te vinden" },
          { en: "Only works on linear feedback shift registers", es: "Solo funciona en registros de desplazamiento con retroalimentación lineal", de: "Funktioniert nur bei linearen Rückkopplungsschieberegistern", nl: "Werkt alleen op lineaire terugkoppelschuifregisters" },
          { en: "Requires knowledge of the complete internal state", es: "Requiere conocimiento del estado interno completo", de: "Benötigt Kenntnis des vollständigen internen Zustands", nl: "Vereist kennis van de volledige interne toestand" },
          { en: "Is identical to linear cryptanalysis", es: "Es idéntico al criptoanálisis lineal", de: "Ist identisch mit linearer Kryptanalyse", nl: "Is identiek aan lineaire cryptanalyse" }
        ],
        correct: 0,
        explanation: {
          en: "The polynomial method represents the internal state update and output functions of stream ciphers as polynomial equations over finite fields. By collecting sufficient keystream bits, attackers can set up systems of equations and attempt to solve for the internal state or key bits using algebraic techniques.",
          es: "El método polinomial representa las funciones de actualización de estado interno y salida de cifrados de flujo como ecuaciones polinomiales sobre campos finitos. Recolectando suficientes bits de flujo de claves, los atacantes pueden establecer sistemas de ecuaciones e intentar resolver para los bits de estado interno o clave usando técnicas algebraicas.",
          de: "Die Polynommethode stellt die internen Zustandsaktualisierungs- und Ausgabefunktionen von Stromchiffren als polynomiale Gleichungen über endlichen Körpern dar. Durch Sammlung ausreichender Schlüsselstrombits können Angreifer Gleichungssysteme aufstellen und versuchen, für interne Zustands- oder Schlüsselbits mit algebraischen Techniken zu lösen.",
          nl: "De polynomiale methode stelt de interne toestandsupdate en output functies van stroomversleutelingen voor als polynomiale vergelijkingen over eindige velden. Door voldoende sleutelstroombitjes te verzamelen, kunnen aanvallers systemen van vergelijkingen opstellen en proberen op te lossen voor de interne toestand of sleutelbits met algebraïsche technieken."
        }
      },
      {
        question: {
          en: "What are the key principles behind zero-correlation linear cryptanalysis?",
          es: "¿Cuáles son los principios clave detrás del criptoanálisis lineal de correlación cero?",
          de: "Was sind die Schlüsselprinzipien hinter der Null-Korrelations-linearen Kryptanalyse?",
          nl: "Wat zijn de hoofdprincipes achter nul-correlatie lineaire cryptanalyse?"
        },
        options: [
          { en: "Exploits linear approximations with exactly zero correlation to distinguish cipher from random permutations", es: "Explota aproximaciones lineales con correlación exactamente cero para distinguir el cifrado de permutaciones aleatorias", de: "Nutzt lineare Approximationen mit exakt null Korrelation aus, um Chiffren von zufälligen Permutationen zu unterscheiden", nl: "Buit lineaire benaderingen uit met exact nul correlatie om versleuteling te onderscheiden van willekeurige permutaties" },
          { en: "Only works when all correlations are zero", es: "Solo funciona cuando todas las correlaciones son cero", de: "Funktioniert nur, wenn alle Korrelationen null sind", nl: "Werkt alleen wanneer alle correlaties nul zijn" },
          { en: "Requires perfect linear approximations", es: "Requiere aproximaciones lineales perfectas", de: "Benötigt perfekte lineare Approximationen", nl: "Vereist perfecte lineaire benaderingen" },
          { en: "Is identical to impossible differential cryptanalysis", es: "Es idéntico al criptoanálisis diferencial imposible", de: "Ist identisch mit unmöglicher Differential-Kryptanalyse", nl: "Is identiek aan onmogelijke differentiële cryptanalyse" }
        ],
        correct: 0,
        explanation: {
          en: "Zero-correlation linear cryptanalysis identifies linear approximations that have correlation exactly zero (rather than close to zero). These zero-correlation properties can be used to distinguish the cipher from a random permutation and potentially recover key information, similar to how impossible differentials work.",
          es: "El criptoanálisis lineal de correlación cero identifica aproximaciones lineales que tienen correlación exactamente cero (en lugar de cercana a cero). Estas propiedades de correlación cero pueden usarse para distinguir el cifrado de una permutación aleatoria y potencialmente recuperar información de clave, similar a cómo funcionan los diferenciales imposibles.",
          de: "Null-Korrelations-lineare Kryptanalyse identifiziert lineare Approximationen, die Korrelation exakt null haben (anstatt nahe null). Diese Null-Korrelations-Eigenschaften können verwendet werden, um die Chiffre von einer zufälligen Permutation zu unterscheiden und möglicherweise Schlüsselinformationen zu gewinnen, ähnlich wie unmögliche Differentiale funktionieren.",
          nl: "Nul-correlatie lineaire cryptanalyse identificeert lineaire benaderingen die exact nul correlatie hebben (in plaats van dicht bij nul). Deze nul-correlatie eigenschappen kunnen worden gebruikt om de versleuteling te onderscheiden van een willekeurige permutatie en mogelijk sleutelinformatie te herstellen, vergelijkbaar met hoe onmogelijke differentiëlen werken."
        }
      },
      {
        question: {
          en: "How do cache-timing attacks exploit microarchitectural features?",
          es: "¿Cómo los ataques de tiempo de caché explotan características microarquitecturales?",
          de: "Wie nutzen Cache-Timing-Angriffe mikroarchitektonische Merkmale aus?",
          nl: "Hoe benutten cache-timing aanvallen microarchitecturale kenmerken?"
        },
        options: [
          { en: "Monitor memory access patterns through cache hit/miss timing to infer secret-dependent data accesses", es: "Monitorean patrones de acceso a memoria a través del tiempo de acierto/fallo de caché para inferir accesos a datos dependientes de secretos", de: "Überwachen Speicherzugriffsmuster durch Cache-Hit/Miss-Timing, um geheimnis-abhängige Datenzugriffe zu erschließen", nl: "Monitoren geheugentoeganspatronen door cache hit/miss timing om geheim-afhankelijke data-toegangen af te leiden" },
          { en: "Only work on single-core processors", es: "Solo funcionan en procesadores de un solo núcleo", de: "Funktionieren nur bei Einzel-Kern-Prozessoren", nl: "Werken alleen op single-core processors" },
          { en: "Require direct access to cache memory", es: "Requieren acceso directo a la memoria caché", de: "Benötigen direkten Zugang zum Cache-Speicher", nl: "Vereisen directe toegang tot cache geheugen" },
          { en: "Are completely prevented by address space layout randomization", es: "Son completamente prevenidos por la aleatorización del diseño del espacio de direcciones", de: "Werden vollständig durch Adressraum-Layout-Randomisierung verhindert", nl: "Worden volledig voorkomen door address space layout randomization" }
        ],
        correct: 0,
        explanation: {
          en: "Cache-timing attacks exploit the fact that memory accesses to cached data are faster than accesses to non-cached data. By measuring access times, attackers can infer which memory locations were accessed, potentially revealing secret-dependent lookup table accesses in cryptographic implementations like AES.",
          es: "Los ataques de tiempo de caché explotan el hecho de que los accesos a memoria a datos en caché son más rápidos que los accesos a datos no almacenados en caché. Midiendo tiempos de acceso, los atacantes pueden inferir qué ubicaciones de memoria fueron accedidas, potencialmente revelando accesos a tablas de búsqueda dependientes de secretos en implementaciones criptográficas como AES.",
          de: "Cache-Timing-Angriffe nutzen die Tatsache aus, dass Speicherzugriffe auf gecachte Daten schneller sind als Zugriffe auf nicht-gecachte Daten. Durch Messung von Zugriffszeiten können Angreifer erschließen, welche Speicherorte zugegriffen wurden, wodurch möglicherweise geheimnis-abhängige Nachschlagetabellen-Zugriffe in kryptographischen Implementierungen wie AES enthüllt werden.",
          nl: "Cache-timing aanvallen buiten het feit uit dat geheugentoegang tot gecachte data sneller is dan toegang tot niet-gecachte data. Door toegangstijden te meten, kunnen aanvallers afleiden welke geheugenlocaties werden benaderd, mogelijk geheim-afhankelijke opzoektabel toegangen in cryptografische implementaties zoals AES onthullend."
        }
      },
      {
        question: {
          en: "What is the significance of the multiplex attacks on stream ciphers?",
          es: "¿Cuál es la importancia de los ataques multiplex en cifrados de flujo?",
          de: "Was ist die Bedeutung der Multiplex-Angriffe auf Stromchiffren?",
          nl: "Wat is de betekenis van de multiplex aanvallen op stroomversleutelingen?"
        },
        options: [
          { en: "Exploits correlations between multiple keystream sequences to recover internal state faster than individual analysis", es: "Explota correlaciones entre múltiples secuencias de flujo de claves para recuperar estado interno más rápido que el análisis individual", de: "Nutzt Korrelationen zwischen mehreren Schlüsselfstromsequenzen aus, um internen Zustand schneller als individuelle Analyse wiederherzustellen", nl: "Buit correlaties uit tussen meerdere sleutelstroomsequenties om interne toestand sneller te herstellen dan individuele analyse" },
          { en: "Only applies to hardware-based stream ciphers", es: "Solo se aplica a cifrados de flujo basados en hardware", de: "Gilt nur für hardware-basierte Stromchiffren", nl: "Geldt alleen voor hardware-gebaseerde stroomversleutelingen" },
          { en: "Requires identical initialization vectors", es: "Requiere vectores de inicialización idénticos", de: "Benötigt identische Initialisierungsvektoren", nl: "Vereist identieke initialisatievectoren" },
          { en: "Works only on linear stream ciphers", es: "Funciona solo en cifrados de flujo lineales", de: "Funktioniert nur bei linearen Stromchiffren", nl: "Werkt alleen op lineaire stroomversleutelingen" }
        ],
        correct: 0,
        explanation: {
          en: "Multiplex attacks analyze multiple related keystream sequences simultaneously to exploit correlations that might not be apparent when examining single streams. This approach can significantly reduce the complexity of recovering the internal state or key material compared to attacking individual keystreams separately.",
          es: "Los ataques multiplex analizan múltiples secuencias de flujo de claves relacionadas simultáneamente para explotar correlaciones que podrían no ser aparentes al examinar flujos individuales. Este enfoque puede reducir significativamente la complejidad de recuperar el estado interno o material de clave comparado con atacar flujos de claves individuales por separado.",
          de: "Multiplex-Angriffe analysieren mehrere verwandte Schlüsselfstromsequenzen gleichzeitig, um Korrelationen auszunutzen, die bei der Untersuchung einzelner Ströme möglicherweise nicht offensichtlich sind. Dieser Ansatz kann die Komplexität der Wiederherstellung des internen Zustands oder Schlüsselmaterials im Vergleich zum separaten Angriff auf einzelne Schlüffelströme erheblich reduzieren.",
          nl: "Multiplex aanvallen analyseren meerdere gerelateerde sleutelstroomsequenties gelijktijdig om correlaties uit te buiten die mogelijk niet duidelijk zijn bij het onderzoeken van enkele stromen. Deze benadering kan de complexiteit van het herstellen van de interne toestand of sleutelmateriaal aanzienlijk verminderen vergeleken met het afzonderlijk aanvallen van individuele sleutelstromen."
        }
      },
      {
        question: {
          en: "What makes algebraic fault analysis particularly powerful against AES?",
          es: "¿Qué hace que el análisis algebraico de fallas sea particularmente poderoso contra AES?",
          de: "Was macht die algebraische Fehleranalyse besonders mächtig gegen AES?",
          nl: "Wat maakt algebraïsche foutanalyse bijzonder krachtig tegen AES?"
        },
        options: [
          { en: "Combines fault injection with algebraic equation solving to create efficient key recovery from minimal faulty ciphertexts", es: "Combina inyección de fallas con resolución de ecuaciones algebraicas para crear recuperación eficiente de claves desde textos cifrados defectuosos mínimos", de: "Kombiniert Fault-Injection mit algebraischer Gleichungslösung zur effizienten Schlüsselwiederherstellung aus minimalen fehlerhaften Chiffretexten", nl: "Combineert fault injection met algebraïsche vergelijking oplossing om efficiënt sleutelherstel te creëren uit minimale foutieve cijferteksten" },
          { en: "Only works on the final round of AES", es: "Solo funciona en la ronda final de AES", de: "Funktioniert nur in der finalen Runde von AES", nl: "Werkt alleen op de finale ronde van AES" },
          { en: "Requires hundreds of fault injections", es: "Requiere cientos de inyecciones de fallas", de: "Benötigt Hunderte von Fault-Injections", nl: "Vereist honderden fault injecties" },
          { en: "Cannot be combined with other cryptanalytic techniques", es: "No se puede combinar con otras técnicas criptoanalíticas", de: "Kann nicht mit anderen kryptanalytischen Techniken kombiniert werden", nl: "Kan niet worden gecombineerd met andere cryptanalytische technieken" }
        ],
        correct: 0,
        explanation: {
          en: "Algebraic fault analysis represents the AES algorithm as a system of polynomial equations and uses fault injection to create additional constraints. Even a single fault can provide enough information to significantly reduce the search space through algebraic manipulation, making it one of the most efficient fault-based attacks against AES.",
          es: "El análisis algebraico de fallas representa el algoritmo AES como un sistema de ecuaciones polinomiales y usa inyección de fallas para crear restricciones adicionales. Incluso una sola falla puede proporcionar suficiente información para reducir significativamente el espacio de búsqueda a través de manipulación algebraica, haciéndolo uno de los ataques basados en fallas más eficientes contra AES.",
          de: "Algebraische Fehleranalyse stellt den AES-Algorithmus als System polynomialer Gleichungen dar und verwendet Fault-Injection zur Erzeugung zusätzlicher Beschränkungen. Selbst ein einzelner Fehler kann ausreichende Informationen liefern, um den Suchraum durch algebraische Manipulation erheblich zu reduzieren, was es zu einem der effizientesten fehler-basierten Angriffe gegen AES macht.",
          nl: "Algebraïsche foutanalyse stelt het AES-algoritme voor als een systeem van polynomiale vergelijkingen en gebruikt fault injection om aanvullende beperkingen te creëren. Zelfs een enkele fout kan voldoende informatie verschaffen om de zoekruimte aanzienlijk te verkleinen door algebraïsche manipulatie, waardoor het een van de meest efficiënte fout-gebaseerde aanvallen tegen AES wordt."
        }
      },
      {
        question: {
          en: "What characterizes higher-order differential cryptanalysis?",
          es: "¿Qué caracteriza el criptoanálisis diferencial de orden superior?",
          de: "Was charakterisiert die höhere-Ordnung-Differential-Kryptanalyse?",
          nl: "Wat kenmerkt hogere-orde differentiële cryptanalyse?"
        },
        options: [
          { en: "Analyzes derivatives of cryptographic functions of degree greater than one to detect non-randomness", es: "Analiza derivadas de funciones criptográficas de grado mayor que uno para detectar no aleatoriedad", de: "Analysiert Ableitungen kryptographischer Funktionen von Grad größer als eins zur Erkennung von Nicht-Zufälligkeit", nl: "Analyseert derivaten van cryptografische functies van graad groter dan één om niet-willekeurigheid te detecteren" },
          { en: "Only works on first-order differential properties", es: "Solo funciona en propiedades diferenciales de primer orden", de: "Funktioniert nur bei differentiellen Eigenschaften erster Ordnung", nl: "Werkt alleen op eerste-orde differentiële eigenschappen" },
          { en: "Requires linear approximations of the cipher", es: "Requiere aproximaciones lineales del cifrado", de: "Benötigt lineare Approximationen der Chiffre", nl: "Vereist lineaire benaderingen van de versleuteling" },
          { en: "Is only applicable to hash functions", es: "Solo es aplicable a funciones hash", de: "Ist nur anwendbar auf Hash-Funktionen", nl: "Is alleen toepasbaar op hash functies" }
        ],
        correct: 0,
        explanation: {
          en: "Higher-order differential cryptanalysis examines higher-order derivatives (second, third, etc.) of cryptographic functions. These derivatives can reveal structural properties that aren't visible in first-order analysis, particularly useful against ciphers designed to resist standard differential attacks but vulnerable to higher-order statistical analysis.",
          es: "El criptoanálisis diferencial de orden superior examina derivadas de orden superior (segundo, tercero, etc.) de funciones criptográficas. Estas derivadas pueden revelar propiedades estructurales que no son visibles en análisis de primer orden, particularmente útiles contra cifrados diseñados para resistir ataques diferenciales estándar pero vulnerables a análisis estadístico de orden superior.",
          de: "Höhere-Ordnung-Differential-Kryptanalyse untersucht höhere-Ordnung-Ableitungen (zweite, dritte, usw.) kryptographischer Funktionen. Diese Ableitungen können strukturelle Eigenschaften enthüllen, die in erster-Ordnung-Analyse nicht sichtbar sind, besonders nützlich gegen Chiffren, die darauf ausgelegt sind, Standard-Differential-Angriffen zu widerstehen, aber anfällig für höhere-Ordnung-statistische Analyse sind.",
          nl: "Hogere-orde differentiële cryptanalyse onderzoekt hogere-orde derivaten (tweede, derde, enz.) van cryptografische functies. Deze derivaten kunnen structurele eigenschappen onthullen die niet zichtbaar zijn in eerste-orde analyse, bijzonder nuttig tegen versleutelingen ontworpen om standaard differentiële aanvallen te weerstaan maar kwetsbaar voor hogere-orde statistische analyse."
        }
      },
      {
        question: {
          en: "How do truncated differential attacks work against block ciphers?",
          es: "¿Cómo funcionan los ataques diferenciales truncados contra cifrados de bloque?",
          de: "Wie funktionieren trunkierte Differential-Angriffe gegen Blockchiffren?",
          nl: "Hoe werken afgeknotte differentiële aanvallen tegen blokversleutelingen?"
        },
        options: [
          { en: "Focus on partial differences in specific bit positions while ignoring others to find higher-probability characteristics", es: "Se enfocan en diferencias parciales en posiciones específicas de bits mientras ignoran otras para encontrar características de mayor probabilidad", de: "Konzentrieren sich auf partielle Differenzen in spezifischen Bitpositionen während andere ignoriert werden, um höhere-Wahrscheinlichkeits-Charakteristiken zu finden", nl: "Richten zich op partiële verschillen in specifieke bitposities terwijl anderen worden genegeerd om hogere-kans karakteristieken te vinden" },
          { en: "Only work on the first round of encryption", es: "Solo funcionan en la primera ronda de cifrado", de: "Funktionieren nur in der ersten Verschlüsselungsrunde", nl: "Werken alleen op de eerste ronde van versleuteling" },
          { en: "Require complete knowledge of all bit differences", es: "Requieren conocimiento completo de todas las diferencias de bits", de: "Benötigen vollständige Kenntnis aller Bit-Differenzen", nl: "Vereisen volledige kennis van alle bitverschillen" },
          { en: "Are only applicable to stream ciphers", es: "Solo son aplicables a cifrados de flujo", de: "Sind nur anwendbar auf Stromchiffren", nl: "Zijn alleen toepasbaar op stroomversleutelingen" }
        ],
        correct: 0,
        explanation: {
          en: "Truncated differential attacks consider only partial information about differences, typically focusing on whether specific bytes or nibbles have non-zero differences while ignoring the exact values. This approach can find differential characteristics with higher probabilities than full differentials, making attacks practical against more rounds.",
          es: "Los ataques diferenciales truncados consideran solo información parcial sobre diferencias, típicamente enfocándose en si bytes o nibbles específicos tienen diferencias no cero mientras ignoran los valores exactos. Este enfoque puede encontrar características diferenciales con probabilidades más altas que diferenciales completos, haciendo los ataques prácticos contra más rondas.",
          de: "Trunkierte Differential-Angriffe berücksichtigen nur partielle Informationen über Differenzen, konzentrieren sich typischerweise darauf, ob spezifische Bytes oder Nibbles Nicht-Null-Differenzen haben, während die exakten Werte ignoriert werden. Dieser Ansatz kann differentielle Charakteristiken mit höheren Wahrscheinlichkeiten als vollständige Differentiale finden, wodurch Angriffe gegen mehr Runden praktisch werden.",
          nl: "Afgeknotte differentiële aanvallen beschouwen alleen partiële informatie over verschillen, richten zich typisch op of specifieke bytes of nibbles niet-nul verschillen hebben terwijl de exacte waarden worden genegeerd. Deze benadering kan differentiële karakteristieken vinden met hogere kansen dan volledige differentiëlen, waardoor aanvallen praktisch worden tegen meer rondes."
        }
      },
      {
        question: {
          en: "What is the role of linear hulls in advanced linear cryptanalysis?",
          es: "¿Cuál es el papel de los cascos lineales en el criptoanálisis lineal avanzado?",
          de: "Was ist die Rolle linearer Hüllen in der erweiterten linearen Kryptanalyse?",
          nl: "Wat is de rol van lineaire hulls in geavanceerde lineaire cryptanalyse?"
        },
        options: [
          { en: "Combine multiple linear approximations with the same input/output masks to increase overall bias", es: "Combinan múltiples aproximaciones lineales con las mismas máscaras de entrada/salida para aumentar el sesgo general", de: "Kombinieren mehrere lineare Approximationen mit denselben Eingabe-/Ausgabemasken zur Erhöhung der Gesamtverzerrung", nl: "Combineren meerdere lineaire benaderingen met dezelfde invoer/uitvoer maskers om totale bias te vergroten" },
          { en: "Only work with single linear approximations", es: "Solo funcionan con aproximaciones lineales únicas", de: "Funktionieren nur mit einzelnen linearen Approximationen", nl: "Werken alleen met enkele lineaire benaderingen" },
          { en: "Are used only in key scheduling algorithms", es: "Se usan solo en algoritmos de programación de claves", de: "Werden nur in Schlüssel-Scheduling-Algorithmen verwendet", nl: "Worden alleen gebruikt in sleutelplanning algoritmen" },
          { en: "Have no practical cryptanalytic applications", es: "No tienen aplicaciones criptoanalíticas prácticas", de: "Haben keine praktischen kryptanalytischen Anwendungen", nl: "Hebben geen praktische cryptanalytische toepassingen" }
        ],
        correct: 0,
        explanation: {
          en: "Linear hulls represent the set of all linear approximations that have the same input and output linear masks but may traverse different intermediate paths through the cipher. By combining these approximations, the total bias can be significantly higher than individual approximations, improving attack effectiveness.",
          es: "Los cascos lineales representan el conjunto de todas las aproximaciones lineales que tienen las mismas máscaras lineales de entrada y salida pero pueden atravesar diferentes rutas intermedias a través del cifrado. Al combinar estas aproximaciones, el sesgo total puede ser significativamente más alto que aproximaciones individuales, mejorando la efectividad del ataque.",
          de: "Lineare Hüllen repräsentieren die Menge aller linearen Approximationen, die dieselben Eingabe- und Ausgabe-linearen Masken haben, aber verschiedene Zwischenpfade durch die Chiffre durchlaufen können. Durch Kombination dieser Approximationen kann die Gesamtverzerrung erheblich höher sein als einzelne Approximationen, wodurch die Angriffseffektivität verbessert wird.",
          nl: "Lineaire hulls vertegenwoordigen de set van alle lineaire benaderingen die dezelfde invoer en uitvoer lineaire maskers hebben maar verschillende tussenliggende paden door de versleuteling kunnen doorlopen. Door deze benaderingen te combineren, kan de totale bias aanzienlijk hoger zijn dan individuele benaderingen, waardoor de aanvaleffectiviteit wordt verbeterd."
        }
      },
      {
        question: {
          en: "What makes slide attacks effective against certain cipher constructions?",
          es: "¿Qué hace efectivos los ataques deslizantes contra ciertas construcciones de cifrado?",
          de: "Was macht Slide-Angriffe gegen bestimmte Chiffrekonstruktionen effektiv?",
          nl: "Wat maakt slide aanvallen effectief tegen bepaalde versleutelingsconstructies?"
        },
        options: [
          { en: "Exploit self-similarity in round functions and key schedules to create relations between different plaintext-ciphertext pairs", es: "Explotan auto-similitud en funciones de ronda y horarios de clave para crear relaciones entre diferentes pares de texto plano-texto cifrado", de: "Nutzen Selbstähnlichkeit in Rundenfunktionen und Schlüsselprogrammen aus, um Beziehungen zwischen verschiedenen Klartext-Chiffretext-Paaren zu schaffen", nl: "Buiten zelf-gelijkenis uit in ronde functies en sleutelschema's om relaties te creëren tussen verschillende platte tekst-cijfertekst paren" },
          { en: "Only work on ciphers with identical round keys", es: "Solo funcionan en cifrados con claves de ronda idénticas", de: "Funktionieren nur bei Chiffren mit identischen Rundenschlüsseln", nl: "Werken alleen op versleutelingen met identieke rondesleutels" },
          { en: "Require knowledge of the complete key schedule", es: "Requieren conocimiento del horario completo de claves", de: "Benötigen Kenntnis des vollständigen Schlüsselprogramms", nl: "Vereisen kennis van het volledige sleutelschema" },
          { en: "Are only effective against stream ciphers", es: "Solo son efectivos contra cifrados de flujo", de: "Sind nur effektiv gegen Stromchiffren", nl: "Zijn alleen effectief tegen stroomversleutelingen" }
        ],
        correct: 0,
        explanation: {
          en: "Slide attacks exploit the self-similarity property of some ciphers where the round function remains largely unchanged across rounds. By finding plaintext pairs that have a specific sliding relationship, attackers can create equations that allow key recovery without analyzing the internal structure of individual rounds.",
          es: "Los ataques deslizantes explotan la propiedad de auto-similitud de algunos cifrados donde la función de ronda permanece en gran medida sin cambios a través de las rondas. Al encontrar pares de texto plano que tienen una relación deslizante específica, los atacantes pueden crear ecuaciones que permiten la recuperación de claves sin analizar la estructura interna de rondas individuales.",
          de: "Slide-Angriffe nutzen die Selbstähnlichkeitseigenschaft einiger Chiffren aus, wo die Rundenfunktion über Runden hinweg weitgehend unverändert bleibt. Durch Finden von Klartextpaaren, die eine spezifische Gleitbeziehung haben, können Angreifer Gleichungen erstellen, die Schlüsselwiederherstellung ohne Analyse der internen Struktur einzelner Runden ermöglichen.",
          nl: "Slide aanvallen buiten de zelf-gelijkenis eigenschap van sommige versleutelingen uit waar de ronde functie grotendeels onveranderd blijft over rondes heen. Door platte tekst paren te vinden die een specifieke glijdende relatie hebben, kunnen aanvallers vergelijkingen creëren die sleutelherstel mogelijk maken zonder de interne structuur van individuele rondes te analyseren."
        }
      }
    ]
  };

  if (typeof window.addLevel === 'function') {
    window.addLevel('impossible-mode/cryptanalysis', level2);
  }
})();
