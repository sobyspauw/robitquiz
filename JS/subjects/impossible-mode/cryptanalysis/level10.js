(() => {
window.addLevel('impossible-mode/cryptanalysis', {
  name: { en: 'Level 10', es: 'Nivel 10', de: 'Level 10', nl: 'Level 10' },
  questions: [
    {
      "question": {
        "en": "In post-quantum cryptanalysis, which property of the Learning With Errors (LWE) problem makes it resistant to quantum attacks using Shor's algorithm?",
        "es": "En criptoanálisis post-cuántico, ¿qué propiedad del problema Learning With Errors (LWE) lo hace resistente a ataques cuánticos usando el algoritmo de Shor?",
        "de": "Welche Eigenschaft des Learning With Errors (LWE)-Problems macht es in der post-Quantenkryptanalyse resistent gegen Quantenangriffe mit Shors Algorithmus?",
        "nl": "Welke eigenschap van het Learning With Errors (LWE) probleem maakt het in post-quantum cryptanalyse resistent tegen quantum aanvallen met Shor's algoritme?"
      },
      "options": [
        { "en": "It is based on integer factorization", "es": "Se basa en factorización de enteros", "de": "Es basiert auf Ganzzahlfaktorisierung", "nl": "Het is gebaseerd op gehele getallen factorisatie" },
        { "en": "It relies on the shortest vector problem in lattices", "es": "Se basa en el problema del vector más corto en retículos", "de": "Es beruht auf dem kürzesten Vektorproblem in Gittern", "nl": "Het steunt op het kortste vectorprobleem in roosters" },
        { "en": "It uses elliptic curve discrete logarithms", "es": "Usa logaritmos discretos de curvas elípticas", "de": "Es verwendet diskrete Logarithmen elliptischer Kurven", "nl": "Het gebruikt elliptische curve discrete logaritmen" },
        { "en": "It employs hash function collisions", "es": "Emplea colisiones de funciones hash", "de": "Es nutzt Hash-Funktions-Kollisionen", "nl": "Het gebruikt hash functie botsingen" }
      ],
      "correctIndex": 1,
      "explanation": {
        "en": "LWE is based on lattice problems, specifically the shortest vector problem, which is believed to be hard even for quantum computers, making it a foundation for post-quantum cryptography.",
        "es": "LWE se basa en problemas de retículos, específicamente el problema del vector más corto, que se cree que es difícil incluso para computadoras cuánticas, convirtiéndolo en base de la criptografía post-cuántica.",
        "de": "LWE basiert auf Gitterproblemen, speziell dem kürzesten Vektorproblem, das selbst für Quantencomputer als schwer gilt und damit eine Grundlage für post-Quantenkryptographie bildet.",
        "nl": "LWE is gebaseerd op roosterproblemer, specifiek het kortste vectorprobleem, waarvan wordt aangenomen dat het moeilijk is zelfs voor quantumcomputers, waardoor het een basis vormt voor post-quantum cryptografie."
      }
    },
    {
      "question": {
        "en": "What is the primary advantage of using homomorphic encryption in side-channel attack resistance compared to traditional encryption schemes?",
        "es": "¿Cuál es la ventaja principal de usar encriptación homomórfica en resistencia a ataques de canal lateral comparado con esquemas de encriptación tradicionales?",
        "de": "Was ist der Hauptvorteil der Verwendung homomorpher Verschlüsselung bei der Resistenz gegen Seitenkanalangriffe im Vergleich zu traditionellen Verschlüsselungsverfahren?",
        "nl": "Wat is het primaire voordeel van homomorfe versleuteling bij weerstand tegen zijkanaal aanvallen vergeleken met traditionele versleutelingsschema's?"
      },
      "options": [
        { "en": "It allows computation on encrypted data without decryption", "es": "Permite computación en datos encriptados sin desencriptar", "de": "Es ermöglicht Berechnungen auf verschlüsselten Daten ohne Entschlüsselung", "nl": "Het staat berekeningen toe op versleutelde data zonder ontsleuteling" },
        { "en": "It uses smaller key sizes for faster operations", "es": "Usa tamaños de clave más pequeños para operaciones más rápidas", "de": "Es verwendet kleinere Schlüsselgrößen für schnellere Operationen", "nl": "Het gebruikt kleinere sleutelgroottes voor snellere operaties" },
        { "en": "It eliminates the need for public key infrastructure", "es": "Elimina la necesidad de infraestructura de clave pública", "de": "Es eliminiert die Notwendigkeit einer Public-Key-Infrastruktur", "nl": "Het elimineert de behoefte aan publieke sleutel infrastructuur" },
        { "en": "It provides perfect forward secrecy automatically", "es": "Proporciona secreto perfecto hacia adelante automáticamente", "de": "Es bietet automatisch perfekte Forward Secrecy", "nl": "Het biedt automatisch perfecte forward secrecy" }
      ],
      "correctIndex": 0,
      "explanation": {
        "en": "Homomorphic encryption's ability to compute on encrypted data means sensitive operations never expose plaintext during processing, significantly reducing side-channel attack surfaces.",
        "es": "La capacidad de la encriptación homomórfica para computar en datos encriptados significa que las operaciones sensibles nunca exponen texto plano durante el procesamiento, reduciendo significativamente las superficies de ataque de canal lateral.",
        "de": "Die Fähigkeit der homomorphen Verschlüsselung, auf verschlüsselten Daten zu rechnen, bedeutet, dass sensible Operationen niemals Klartext während der Verarbeitung preisgeben, was die Angriffsfläche für Seitenkanalangriffe erheblich reduziert.",
        "nl": "Het vermogen van homomorfe versleuteling om te rekenen op versleutelde data betekent dat gevoelige operaties nooit plaintext blootstellen tijdens verwerking, wat de aanvalsoppervlakken voor zijkanaal aanvallen aanzienlijk vermindert."
      }
    },
    {
      "question": {
        "en": "In the context of differential cryptanalysis against AES, what is the maximum expected differential probability for a 4-round differential characteristic?",
        "es": "En el contexto de criptoanálisis diferencial contra AES, ¿cuál es la probabilidad diferencial máxima esperada para una característica diferencial de 4 rondas?",
        "de": "Im Kontext der differenziellen Kryptanalyse gegen AES, was ist die maximal erwartete differentielle Wahrscheinlichkeit für eine 4-Runden-differentielle Charakteristik?",
        "nl": "In de context van differentiële cryptanalyse tegen AES, wat is de maximaal verwachte differentiële waarschijnlijkheid voor een 4-ronde differentiële karakteristiek?"
      },
      "options": [
        { "en": "2^-150", "es": "2^-150", "de": "2^-150", "nl": "2^-150" },
        { "en": "2^-100", "es": "2^-100", "de": "2^-100", "nl": "2^-100" },
        { "en": "2^-75", "es": "2^-75", "de": "2^-75", "nl": "2^-75" },
        { "en": "2^-50", "es": "2^-50", "de": "2^-50", "nl": "2^-50" }
      ],
      "correctIndex": 0,
      "explanation": {
        "en": "Due to AES's wide trail strategy with the MixColumns operation, 4-round differential characteristics have extremely low probability around 2^-150, making practical differential attacks infeasible.",
        "es": "Debido a la estrategia de rastro amplio de AES con la operación MixColumns, las características diferenciales de 4 rondas tienen probabilidad extremadamente baja alrededor de 2^-150, haciendo impracticables los ataques diferenciales prácticos.",
        "de": "Aufgrund von AES's Wide-Trail-Strategie mit der MixColumns-Operation haben 4-Runden-differentielle Charakteristiken eine extrem niedrige Wahrscheinlichkeit um 2^-150, was praktische differentielle Angriffe unmöglich macht.",
        "nl": "Door AES's wide trail strategie met de MixColumns operatie hebben 4-ronde differentiële karakteristieken een extreem lage waarschijnlijkheid rond 2^-150, waardoor praktische differentiële aanvallen onhaalbaar worden."
      }
    },
    {
      "question": {
        "en": "Which advanced technique combines algebraic and differential cryptanalysis to attack block ciphers more effectively?",
        "es": "¿Qué técnica avanzada combina criptoanálisis algebraico y diferencial para atacar cifrados de bloque más efectivamente?",
        "de": "Welche fortgeschrittene Technik kombiniert algebraische und differentielle Kryptanalyse, um Blockchiffren effektiver anzugreifen?",
        "nl": "Welke geavanceerde techniek combineert algebraïsche en differentiële cryptanalyse om blokcijfers effectiever aan te vallen?"
      },
      "options": [
        { "en": "Cube attacks", "es": "Ataques de cubo", "de": "Würfel-Angriffe", "nl": "Kubus aanvallen" },
        { "en": "Boomerang attacks", "es": "Ataques boomerang", "de": "Bumerang-Angriffe", "nl": "Boemerang aanvallen" },
        { "en": "Higher-order differential attacks", "es": "Ataques diferenciales de orden superior", "de": "Höhere-Ordnung-Differentielle-Angriffe", "nl": "Hogere-orde differentiële aanvallen" },
        { "en": "Integral cryptanalysis", "es": "Criptoanálisis integral", "de": "Integrale Kryptanalyse", "nl": "Integrale cryptanalyse" }
      ],
      "correctIndex": 0,
      "explanation": {
        "en": "Cube attacks combine algebraic techniques with higher-order differential analysis, using polynomial representations to recover secret key bits through carefully chosen cube summations.",
        "es": "Los ataques de cubo combinan técnicas algebraicas con análisis diferencial de orden superior, usando representaciones polinomiales para recuperar bits de clave secreta a través de sumaciones de cubo cuidadosamente elegidas.",
        "de": "Würfel-Angriffe kombinieren algebraische Techniken mit höherer-Ordnung-differenzieller Analyse, verwenden polynomiale Darstellungen um geheime Schlüsselbits durch sorgfältig gewählte Würfel-Summationen zu gewinnen.",
        "nl": "Kubus aanvallen combineren algebraïsche technieken met hogere-orde differentiële analyse, waarbij polynomiale representaties worden gebruikt om geheime sleutelbits te herstellen via zorgvuldig gekozen kubus sommaties."
      }
    },
    {
      "question": {
        "en": "In lattice-based cryptanalysis, what is the significance of the Gaussian heuristic in estimating the length of the shortest vector?",
        "es": "En criptoanálisis basado en retículos, ¿cuál es la significancia de la heurística gaussiana al estimar la longitud del vector más corto?",
        "de": "Was ist die Bedeutung der Gauß-Heuristik bei der Schätzung der Länge des kürzesten Vektors in gitterbasierten Kryptanalyse?",
        "nl": "Wat is de betekenis van de Gaussische heuristiek bij het schatten van de lengte van de kortste vector in rooster-gebaseerde cryptanalyse?"
      },
      "options": [
        { "en": "It provides an exact formula for the shortest vector", "es": "Proporciona una fórmula exacta para el vector más corto", "de": "Sie liefert eine exakte Formel für den kürzesten Vektor", "nl": "Het biedt een exacte formule voor de kortste vector" },
        { "en": "It estimates λ₁(L) ≈ √(n/(2πe)) · det(L)^(1/n) for an n-dimensional lattice L", "es": "Estima λ₁(L) ≈ √(n/(2πe)) · det(L)^(1/n) para un retículo L de n dimensiones", "de": "Sie schätzt λ₁(L) ≈ √(n/(2πe)) · det(L)^(1/n) für ein n-dimensionales Gitter L", "nl": "Het schat λ₁(L) ≈ √(n/(2πe)) · det(L)^(1/n) voor een n-dimensionaal rooster L" },
        { "en": "It determines the optimal basis for lattice reduction", "es": "Determina la base óptima para reducción de retículos", "de": "Sie bestimmt die optimale Basis für Gitterreduktion", "nl": "Het bepaalt de optimale basis voor roosterreductie" },
        { "en": "It calculates the exact running time of LLL algorithm", "es": "Calcula el tiempo de ejecución exacto del algoritmo LLL", "de": "Sie berechnet die exakte Laufzeit des LLL-Algorithmus", "nl": "Het berekent de exacte looptijd van het LLL algoritme" }
      ],
      "correctIndex": 1,
      "explanation": {
        "en": "The Gaussian heuristic provides an estimate for the length of the shortest vector λ₁(L) in a random lattice L, crucial for assessing the security of lattice-based cryptosystems and the effectiveness of lattice reduction algorithms.",
        "es": "La heurística gaussiana proporciona una estimación para la longitud del vector más corto λ₁(L) en un retículo aleatorio L, crucial para evaluar la seguridad de criptosistemas basados en retículos y la efectividad de algoritmos de reducción de retículos.",
        "de": "Die Gauß-Heuristik liefert eine Schätzung für die Länge des kürzesten Vektors λ₁(L) in einem zufälligen Gitter L, entscheidend für die Bewertung der Sicherheit gitterbasierter Kryptosysteme und der Effektivität von Gitterreduktionsalgorithmen.",
        "nl": "De Gaussische heuristiek geeft een schatting voor de lengte van de kortste vector λ₁(L) in een willekeurig rooster L, cruciaal voor het beoordelen van de veiligheid van rooster-gebaseerde cryptosystemen en de effectiviteit van roosterreductie algoritmen."
      }
    },
    {
      "question": {
        "en": "What is the main limitation of the BKZ (Block Korkine-Zolotarev) algorithm compared to LLL in lattice reduction?",
        "es": "¿Cuál es la limitación principal del algoritmo BKZ (Block Korkine-Zolotarev) comparado con LLL en reducción de retículos?",
        "de": "Was ist die Hauptbeschränkung des BKZ (Block Korkine-Zolotarev) Algorithmus im Vergleich zu LLL bei der Gitterreduktion?",
        "nl": "Wat is de hoofdbeperking van het BKZ (Block Korkine-Zolotarev) algoritme vergeleken met LLL in roosterreductie?"
      },
      "options": [
        { "en": "BKZ produces worse approximation factors", "es": "BKZ produce factores de aproximación peores", "de": "BKZ produziert schlechtere Approximationsfaktoren", "nl": "BKZ produceert slechtere benaderingsfactoren" },
        { "en": "BKZ has exponential time complexity in the block size", "es": "BKZ tiene complejidad temporal exponencial en el tamaño del bloque", "de": "BKZ hat exponentielle Zeitkomplexität in der Blockgröße", "nl": "BKZ heeft exponentiële tijdscomplexiteit in de blokgrootte" },
        { "en": "BKZ cannot handle integer lattices", "es": "BKZ no puede manejar retículos enteros", "de": "BKZ kann keine ganzzahligen Gitter handhaben", "nl": "BKZ kan geen gehele getallen roosters hanteren" },
        { "en": "BKZ requires more memory than available", "es": "BKZ requiere más memoria de la disponible", "de": "BKZ benötigt mehr Speicher als verfügbar", "nl": "BKZ vereist meer geheugen dan beschikbaar" }
      ],
      "correctIndex": 1,
      "explanation": {
        "en": "BKZ's time complexity is exponential in the block size β, making it impractical for large block sizes despite producing better reduced bases than LLL, which runs in polynomial time.",
        "es": "La complejidad temporal de BKZ es exponencial en el tamaño del bloque β, haciéndolo impracticable para tamaños de bloque grandes a pesar de producir bases reducidas mejores que LLL, que corre en tiempo polinomial.",
        "de": "BKZs Zeitkomplexität ist exponentiell in der Blockgröße β, was es für große Blockgrößen unpraktisch macht, obwohl es bessere reduzierte Basen als LLL produziert, welches in polynomieller Zeit läuft.",
        "nl": "BKZ's tijdscomplexiteit is exponentieel in de blokgrootte β, waardoor het onpraktisch wordt voor grote blokgroottes ondanks het produceren van betere gereduceerde bases dan LLL, dat in polynomiale tijd loopt."
      }
    },
    {
      "question": {
        "en": "In multivariate cryptanalysis, what is the primary challenge when applying Gröbner basis algorithms to solve polynomial systems derived from cipher equations?",
        "es": "En criptoanálisis multivariado, ¿cuál es el desafío principal al aplicar algoritmos de base de Gröbner para resolver sistemas polinomiales derivados de ecuaciones de cifrado?",
        "de": "Was ist die Hauptherausforderung bei der Anwendung von Gröbner-Basis-Algorithmen zur Lösung polynomialer Systeme aus Chiffre-Gleichungen in der multivariaten Kryptanalyse?",
        "nl": "Wat is de primaire uitdaging bij het toepassen van Gröbner basis algoritmen om polynomiale systemen afgeleid van cijfervergelukingen op te lossen in multivariate cryptanalyse?"
      },
      "options": [
        { "en": "The degree of regularity grows exponentially with system size", "es": "El grado de regularidad crece exponencialmente con el tamaño del sistema", "de": "Der Regularitätsgrad wächst exponentiell mit der Systemgröße", "nl": "De graad van regulariteit groeit exponentieel met systeemgrootte" },
        { "en": "Polynomial systems are always underdetermined", "es": "Los sistemas polinomiales son siempre indeterminados", "de": "Polynomiale Systeme sind immer unterbestimmt", "nl": "Polynomiale systemen zijn altijd onderbepaald" },
        { "en": "Gröbner bases cannot handle finite fields", "es": "Las bases de Gröbner no pueden manejar campos finitos", "de": "Gröbner-Basen können endliche Körper nicht handhaben", "nl": "Gröbner bases kunnen geen eindige velden hanteren" },
        { "en": "The algorithms only work for linear systems", "es": "Los algoritmos solo funcionan para sistemas lineales", "de": "Die Algorithmen funktionieren nur für lineare Systeme", "nl": "De algoritmen werken alleen voor lineaire systemen" }
      ],
      "correctIndex": 0,
      "explanation": {
        "en": "The degree of regularity, which determines the computational complexity of Gröbner basis algorithms, typically grows exponentially with the number of variables, making attacks on large systems computationally infeasible.",
        "es": "El grado de regularidad, que determina la complejidad computacional de los algoritmos de base de Gröbner, típicamente crece exponencialmente con el número de variables, haciendo computacionalmente inviables los ataques en sistemas grandes.",
        "de": "Der Regularitätsgrad, der die Berechnungskomplexität von Gröbner-Basis-Algorithmen bestimmt, wächst typischerweise exponentiell mit der Anzahl der Variablen, was Angriffe auf große Systeme rechnerisch unmöglich macht.",
        "nl": "De graad van regulariteit, die de computationele complexiteit van Gröbner basis algoritmen bepaalt, groeit typisch exponentieel met het aantal variabelen, waardoor aanvallen op grote systemen computationeel onhaalbaar worden."
      }
    },
    {
      "question": {
        "en": "What is the significance of the decisional Diffie-Hellman assumption in the security proof of ElGamal encryption?",
        "es": "¿Cuál es la significancia de la suposición decisional de Diffie-Hellman en la prueba de seguridad de la encriptación ElGamal?",
        "de": "Was ist die Bedeutung der entscheidenden Diffie-Hellman-Annahme im Sicherheitsbeweis der ElGamal-Verschlüsselung?",
        "nl": "Wat is de betekenis van de beslissende Diffie-Hellman aanname in het veiligheidsbewijs van ElGamal versleuteling?"
      },
      "options": [
        { "en": "It ensures perfect forward secrecy", "es": "Asegura secreto perfecto hacia adelante", "de": "Sie gewährleistet perfekte Forward Secrecy", "nl": "Het zorgt voor perfecte forward secrecy" },
        { "en": "It provides semantic security against chosen-plaintext attacks", "es": "Proporciona seguridad semántica contra ataques de texto plano elegido", "de": "Sie bietet semantische Sicherheit gegen Chosen-Plaintext-Angriffe", "nl": "Het biedt semantische veiligheid tegen chosen-plaintext aanvallen" },
        { "en": "It prevents key recovery attacks", "es": "Previene ataques de recuperación de clave", "de": "Sie verhindert Schlüssel-Wiederherstellungsangriffe", "nl": "Het voorkomt sleutel herstel aanvallen" },
        { "en": "It enables homomorphic properties", "es": "Habilita propiedades homomórficas", "de": "Sie ermöglicht homomorphe Eigenschaften", "nl": "Het maakt homomorfe eigenschappen mogelijk" }
      ],
      "correctIndex": 1,
      "explanation": {
        "en": "The decisional Diffie-Hellman assumption is crucial for proving that ElGamal encryption achieves semantic security (IND-CPA), meaning that no computationally bounded adversary can distinguish between encryptions of different messages.",
        "es": "La suposición decisional de Diffie-Hellman es crucial para probar que la encriptación ElGamal logra seguridad semántica (IND-CPA), significando que ningún adversario computacionalmente limitado puede distinguir entre encriptaciones de mensajes diferentes.",
        "de": "Die entscheidende Diffie-Hellman-Annahme ist entscheidend für den Beweis, dass ElGamal-Verschlüsselung semantische Sicherheit (IND-CPA) erreicht, was bedeutet, dass kein rechnerisch begrenzter Angreifer zwischen Verschlüsselungen verschiedener Nachrichten unterscheiden kann.",
        "nl": "De beslissende Diffie-Hellman aanname is cruciaal voor het bewijzen dat ElGamal versleuteling semantische veiligheid (IND-CPA) behaalt, wat betekent dat geen computationeel begrensde aanvaller onderscheid kan maken tussen versleutelingen van verschillende berichten."
      }
    },
    {
      "question": {
        "en": "In fault injection attacks on AES, what is the theoretical minimum number of faulty ciphertexts needed to recover the entire 128-bit key using differential fault analysis?",
        "es": "En ataques de inyección de fallas en AES, ¿cuál es el número teórico mínimo de textos cifrados defectuosos necesarios para recuperar toda la clave de 128 bits usando análisis diferencial de fallas?",
        "de": "Bei Fehlerinjektionsangriffen auf AES, was ist die theoretische Mindestanzahl fehlerhafter Chiffretexte, die benötigt wird, um den gesamten 128-Bit-Schlüssel mittels differenzieller Fehleranalyse zu gewinnen?",
        "nl": "Bij foutinjectie aanvallen op AES, wat is het theoretische minimum aantal foutieve cijferteksten nodig om de volledige 128-bit sleutel te herstellen met differentiële foutanalyse?"
      },
      "options": [
        { "en": "1 faulty ciphertext", "es": "1 texto cifrado defectuoso", "de": "1 fehlerhafter Chiffretext", "nl": "1 foutieve cijfertekst" },
        { "en": "2 faulty ciphertexts", "es": "2 textos cifrados defectuosos", "de": "2 fehlerhafte Chiffretexte", "nl": "2 foutieve cijferteksten" },
        { "en": "4 faulty ciphertexts", "es": "4 textos cifrados defectuosos", "de": "4 fehlerhafte Chiffretexte", "nl": "4 foutieve cijferteksten" },
        { "en": "16 faulty ciphertexts", "es": "16 textos cifrados defectuosos", "de": "16 fehlerhafte Chiffretexte", "nl": "16 foutieve cijferteksten" }
      ],
      "correctIndex": 2,
      "explanation": {
        "en": "Theoretically, 4 faulty ciphertexts with single-byte faults in the 9th round can provide enough information to recover the entire last round key through differential fault analysis, assuming optimal fault placement.",
        "es": "Teóricamente, 4 textos cifrados defectuosos con fallas de un solo byte en la 9ª ronda pueden proporcionar suficiente información para recuperar toda la clave de la última ronda a través de análisis diferencial de fallas, asumiendo ubicación óptima de fallas.",
        "de": "Theoretisch können 4 fehlerhafte Chiffretexte mit Ein-Byte-Fehlern in der 9. Runde genügend Informationen liefern, um den gesamten letzten Rundenschlüssel durch differentielle Fehleranalyse zu gewinnen, bei optimaler Fehlerplatzierung.",
        "nl": "Theoretisch kunnen 4 foutieve cijferteksten met single-byte fouten in de 9e ronde genoeg informatie bieden om de volledige laatste ronde sleutel te herstellen via differentiële foutanalyse, uitgaande van optimale foutplaatsing."
      }
    },
    {
      "question": {
        "en": "What distinguishes a zero-knowledge proof of knowledge from a regular zero-knowledge proof in cryptographic protocols?",
        "es": "¿Qué distingue una prueba de conocimiento de conocimiento cero de una prueba de conocimiento cero regular en protocolos criptográficos?",
        "de": "Was unterscheidet einen Zero-Knowledge-Beweis des Wissens von einem regulären Zero-Knowledge-Beweis in kryptographischen Protokollen?",
        "nl": "Wat onderscheidt een zero-knowledge bewijs van kennis van een regulier zero-knowledge bewijs in cryptografische protocollen?"
      },
      "options": [
        { "en": "It has computational soundness instead of perfect soundness", "es": "Tiene solidez computacional en lugar de solidez perfecta", "de": "Es hat rechnerische Korrektheit statt perfekter Korrektheit", "nl": "Het heeft computationele juistheid in plaats van perfecte juistheid" },
        { "en": "It proves the prover actually knows a witness, not just that one exists", "es": "Prueba que el probador realmente conoce un testigo, no solo que existe uno", "de": "Es beweist, dass der Beweiser tatsächlich einen Zeugen kennt, nicht nur dass einer existiert", "nl": "Het bewijst dat de bewijzer daadwerkelijk een getuige kent, niet alleen dat er een bestaat" },
        { "en": "It requires interaction between prover and verifier", "es": "Requiere interacción entre probador y verificador", "de": "Es erfordert Interaktion zwischen Beweiser und Verifizierer", "nl": "Het vereist interactie tussen bewijzer en verificateur" },
        { "en": "It can only be used for NP-complete problems", "es": "Solo puede usarse para problemas NP-completos", "de": "Es kann nur für NP-vollständige Probleme verwendet werden", "nl": "Het kan alleen gebruikt worden voor NP-complete problemen" }
      ],
      "correctIndex": 1,
      "explanation": {
        "en": "A zero-knowledge proof of knowledge has the additional property of 'knowledge soundness' - if a prover can convince a verifier, then there exists an efficient extractor that can extract the witness from the prover's strategy.",
        "es": "Una prueba de conocimiento cero de conocimiento tiene la propiedad adicional de 'solidez de conocimiento' - si un probador puede convencer a un verificador, entonces existe un extractor eficiente que puede extraer el testigo de la estrategia del probador.",
        "de": "Ein Zero-Knowledge-Beweis des Wissens hat die zusätzliche Eigenschaft der 'Wissenssicherheit' - wenn ein Beweiser einen Verifizierer überzeugen kann, dann existiert ein effizienter Extraktor, der den Zeugen aus der Strategie des Beweisers extrahieren kann.",
        "nl": "Een zero-knowledge bewijs van kennis heeft de aanvullende eigenschap van 'kennis juistheid' - als een bewijzer een verificateur kan overtuigen, dan bestaat er een efficiënte extractor die de getuige kan extraheren uit de strategie van de bewijzer."
      }
    },
    {
      "question": {
        "en": "In the context of isogeny-based cryptography, what makes SIDH (Supersingular Isogeny Diffie-Hellman) vulnerable to Castryck-Decru attacks?",
        "es": "En el contexto de criptografía basada en isogenias, ¿qué hace vulnerable SIDH (Supersingular Isogeny Diffie-Hellman) a ataques de Castryck-Decru?",
        "de": "Was macht SIDH (Supersingular Isogeny Diffie-Hellman) im Kontext isogeniebasierter Kryptographie anfällig für Castryck-Decru-Angriffe?",
        "nl": "Wat maakt SIDH (Supersingular Isogeny Diffie-Hellman) kwetsbaar voor Castryck-Decru aanvallen in de context van isogenie-gebaseerde cryptografie?"
      },
      "options": [
        { "en": "The use of smooth degree isogenies", "es": "El uso de isogenias de grado suave", "de": "Die Verwendung von Isogenien glatten Grades", "nl": "Het gebruik van gladde graad isogenieën" },
        { "en": "The auxiliary point information leaked in public keys", "es": "La información de puntos auxiliares filtrada en claves públicas", "de": "Die Hilfspunkt-Information, die in öffentlichen Schlüsseln durchsickert", "nl": "De hulppunt informatie gelekt in publieke sleutels" },
        { "en": "The vulnerability to quantum attacks", "es": "La vulnerabilidad a ataques cuánticos", "de": "Die Anfälligkeit für Quantenangriffe", "nl": "De kwetsbaarheid voor quantum aanvallen" },
        { "en": "The small key sizes used in practice", "es": "Los pequeños tamaños de clave usados en la práctica", "de": "Die kleinen in der Praxis verwendeten Schlüsselgrößen", "nl": "De kleine sleutelgroottes gebruikt in de praktijk" }
      ],
      "correctIndex": 1,
      "explanation": {
        "en": "The Castryck-Decru attack exploits the fact that SIDH public keys contain auxiliary points that leak information about the secret isogeny, allowing polynomial-time key recovery through advanced techniques involving Kummer lines and theta functions.",
        "es": "El ataque de Castryck-Decru explota el hecho de que las claves públicas SIDH contienen puntos auxiliares que filtran información sobre la isogenia secreta, permitiendo recuperación de clave en tiempo polinomial a través de técnicas avanzadas que involucran líneas de Kummer y funciones theta.",
        "de": "Der Castryck-Decru-Angriff nutzt die Tatsache aus, dass SIDH-öffentliche Schlüssel Hilfspunkte enthalten, die Informationen über die geheime Isogenie preisgeben, wodurch polynomiale Schlüsselwiederherstellung durch fortgeschrittene Techniken mit Kummer-Linien und Theta-Funktionen ermöglicht wird.",
        "nl": "De Castryck-Decru aanval exploiteert het feit dat SIDH publieke sleutels hulppunten bevatten die informatie lekken over de geheime isogenie, waardoor polynomiale tijdsleutel herstel mogelijk wordt via geavanceerde technieken met Kummer lijnen en theta functies."
      }
    },
    {
      "question": {
        "en": "What is the primary advantage of using garbled circuits in secure multi-party computation over other approaches?",
        "es": "¿Cuál es la ventaja principal de usar circuitos enredados en computación segura multi-parte sobre otros enfoques?",
        "de": "Was ist der Hauptvorteil der Verwendung verwischter Schaltkreise in sicherer Mehrparteien-Berechnung gegenüber anderen Ansätzen?",
        "nl": "Wat is het primaire voordeel van het gebruik van garbled circuits in veilige multi-party berekening ten opzichte van andere benaderingen?"
      },
      "options": [
        { "en": "Constant round complexity for any circuit", "es": "Complejidad de ronda constante para cualquier circuito", "de": "Konstante Rundenkomplexität für jeden Schaltkreis", "nl": "Constante ronde complexiteit voor elk circuit" },
        { "en": "Information-theoretic security guarantees", "es": "Garantías de seguridad de teoría de la información", "de": "Informationstheoretische Sicherheitsgarantien", "nl": "Informatietheorische veiligheidsgaranties" },
        { "en": "Polynomial time complexity in all parameters", "es": "Complejidad temporal polinomial en todos los parámetros", "de": "Polynomiale Zeitkomplexität in allen Parametern", "nl": "Polynomiale tijdscomplexiteit in alle parameters" },
        { "en": "No communication overhead during evaluation", "es": "Sin sobrecarga de comunicación durante la evaluación", "de": "Keine Kommunikations-Overhead während der Auswertung", "nl": "Geen communicatie overhead tijdens evaluatie" }
      ],
      "correctIndex": 0,
      "explanation": {
        "en": "Garbled circuits enable constant-round secure two-party computation protocols, regardless of the circuit depth, which is a significant advantage over other approaches that typically require rounds proportional to the circuit depth.",
        "es": "Los circuitos enredados permiten protocolos de computación segura de dos partes de ronda constante, independientemente de la profundidad del circuito, lo cual es una ventaja significativa sobre otros enfoques que típicamente requieren rondas proporcionales a la profundidad del circuito.",
        "de": "Verwischte Schaltkreise ermöglichen sichere Zwei-Parteien-Berechnungsprotokolle mit konstanter Rundenzahl, unabhängig von der Schaltkreistiefe, was ein erheblicher Vorteil gegenüber anderen Ansätzen ist, die typischerweise Runden proportional zur Schaltkreistiefe benötigen.",
        "nl": "Garbled circuits maken constante-ronde veilige twee-partij berekening protocollen mogelijk, ongeacht de circuitdiepte, wat een significant voordeel is ten opzichte van andere benaderingen die typisch rondes evenredig aan de circuitdiepte vereisen."
      }
    },
    {
      "question": {
        "en": "In code-based cryptography, what is the significance of the Gilbert-Varshamov bound in assessing the security of McEliece cryptosystem?",
        "es": "En criptografía basada en códigos, ¿cuál es la significancia del límite de Gilbert-Varshamov al evaluar la seguridad del criptosistema McEliece?",
        "de": "Was ist die Bedeutung der Gilbert-Varshamov-Schranke bei der Bewertung der Sicherheit des McEliece-Kryptosystems in codebasierter Kryptographie?",
        "nl": "Wat is de betekenis van de Gilbert-Varshamov grens bij het beoordelen van de veiligheid van het McEliece cryptosysteem in code-gebaseerde cryptografie?"
      },
      "options": [
        { "en": "It gives the maximum number of errors that can be corrected", "es": "Da el número máximo de errores que pueden corregirse", "de": "Sie gibt die maximale Anzahl korrigierbarer Fehler an", "nl": "Het geeft het maximale aantal fouten dat gecorrigeerd kan worden" },
        { "en": "It provides a lower bound on the existence of good error-correcting codes", "es": "Proporciona un límite inferior en la existencia de buenos códigos de corrección de errores", "de": "Sie liefert eine untere Schranke für die Existenz guter fehlerkorrigierender Codes", "nl": "Het biedt een ondergrens voor het bestaan van goede fout-corrigerende codes" },
        { "en": "It determines the optimal key generation algorithm", "es": "Determina el algoritmo óptimo de generación de claves", "de": "Sie bestimmt den optimalen Schlüsselerzeugungsalgorithmus", "nl": "Het bepaalt het optimale sleutelgeneratie algoritme" },
        { "en": "It calculates the exact security level against all attacks", "es": "Calcula el nivel de seguridad exacto contra todos los ataques", "de": "Sie berechnet das exakte Sicherheitsniveau gegen alle Angriffe", "nl": "Het berekent het exacte veiligheidsniveau tegen alle aanvallen" }
      ],
      "correctIndex": 1,
      "explanation": {
        "en": "The Gilbert-Varshamov bound establishes that good random linear codes exist with parameters that meet or exceed this bound, which is crucial for security analysis since it suggests that finding the secret structure among random-looking codes is computationally hard.",
        "es": "El límite de Gilbert-Varshamov establece que existen buenos códigos lineales aleatorios con parámetros que cumplen o exceden este límite, lo cual es crucial para análisis de seguridad ya que sugiere que encontrar la estructura secreta entre códigos de apariencia aleatoria es computacionalmente difícil.",
        "de": "Die Gilbert-Varshamov-Schranke stellt fest, dass gute zufällige lineare Codes mit Parametern existieren, die diese Schranke erfüllen oder überschreiten, was für die Sicherheitsanalyse entscheidend ist, da es darauf hindeutet, dass das Finden der geheimen Struktur unter zufällig aussehenden Codes rechnerisch schwer ist.",
        "nl": "De Gilbert-Varshamov grens stelt vast dat goede willekeurige lineaire codes bestaan met parameters die deze grens bereiken of overschrijden, wat cruciaal is voor veiligheidsanalyse omdat het suggereert dat het vinden van de geheime structuur onder willekeurig ogende codes computationeel moeilijk is."
      }
    },
    {
      "question": {
        "en": "What is the fundamental principle behind timing attacks on RSA implementations using the square-and-multiply algorithm?",
        "es": "¿Cuál es el principio fundamental detrás de los ataques de temporización en implementaciones RSA usando el algoritmo de elevar al cuadrado y multiplicar?",
        "de": "Was ist das Grundprinzip hinter Timing-Angriffen auf RSA-Implementierungen mit dem Square-and-Multiply-Algorithmus?",
        "nl": "Wat is het fundamentele principe achter timing aanvallen op RSA implementaties met het kwadraat-en-vermenigvuldig algoritme?"
      },
      "options": [
        { "en": "Different execution times for squaring vs multiplication operations", "es": "Diferentes tiempos de ejecución para operaciones de elevar al cuadrado vs multiplicación", "de": "Unterschiedliche Ausführungszeiten für Quadrieren vs. Multiplikationsoperationen", "nl": "Verschillende uitvoeringstijden voor kwadrateren vs vermenigvuldigingsoperaties" },
        { "en": "Timing differences based on the Hamming weight of the exponent", "es": "Diferencias de temporización basadas en el peso de Hamming del exponente", "de": "Timing-Unterschiede basierend auf dem Hamming-Gewicht des Exponenten", "nl": "Timing verschillen gebaseerd op het Hamming gewicht van de exponent" },
        { "en": "Variable cache access times during modular arithmetic", "es": "Tiempos variables de acceso al caché durante aritmética modular", "de": "Variable Cache-Zugriffszeiten während modularer Arithmetik", "nl": "Variabele cache toegangstijden tijdens modulaire rekenkunde" },
        { "en": "Branch prediction failures in conditional statements", "es": "Fallas de predicción de rama en declaraciones condicionales", "de": "Branch-Prediction-Fehler in bedingten Anweisungen", "nl": "Branch voorspelling mislukkingen in conditionele statements" }
      ],
      "correctIndex": 1,
      "explanation": {
        "en": "Timing attacks on square-and-multiply exploit the fact that execution time depends on the number of '1' bits in the secret exponent (Hamming weight), as each '1' bit requires an additional multiplication operation beyond the squaring.",
        "es": "Los ataques de temporización en elevar al cuadrado y multiplicar explotan el hecho de que el tiempo de ejecución depende del número de bits '1' en el exponente secreto (peso de Hamming), ya que cada bit '1' requiere una operación de multiplicación adicional además del cuadrado.",
        "de": "Timing-Angriffe auf Square-and-Multiply nutzen die Tatsache aus, dass die Ausführungszeit von der Anzahl der '1'-Bits im geheimen Exponenten (Hamming-Gewicht) abhängt, da jedes '1'-Bit eine zusätzliche Multiplikationsoperation neben dem Quadrieren erfordert.",
        "nl": "Timing aanvallen op kwadraat-en-vermenigvuldig exploiteren het feit dat uitvoeringstijd afhangt van het aantal '1' bits in de geheime exponent (Hamming gewicht), omdat elke '1' bit een extra vermenigvuldigingsoperatie vereist naast het kwadrateren."
      }
    },
    {
      "question": {
        "en": "In the context of hash function cryptanalysis, what makes the rebound attack particularly effective against AES-based hash functions?",
        "es": "En el contexto de criptoanálisis de funciones hash, ¿qué hace el ataque de rebote particularmente efectivo contra funciones hash basadas en AES?",
        "de": "Was macht den Rebound-Angriff im Kontext der Hash-Funktions-Kryptanalyse besonders effektiv gegen AES-basierte Hash-Funktionen?",
        "nl": "Wat maakt de rebound aanval bijzonder effectief tegen AES-gebaseerde hash functies in de context van hash functie cryptanalyse?"
      },
      "options": [
        { "en": "It exploits the invertibility of the AES round function", "es": "Explota la invertibilidad de la función de ronda AES", "de": "Es nutzt die Invertierbarkeit der AES-Rundenfunktion aus", "nl": "Het exploiteert de omkeerbaarheid van de AES ronde functie" },
        { "en": "It uses differential characteristics with high probability", "es": "Usa características diferenciales con alta probabilidad", "de": "Es verwendet differentielle Charakteristiken mit hoher Wahrscheinlichkeit", "nl": "Het gebruikt differentiële karakteristieken met hoge waarschijnlijkheid" },
        { "en": "It bypasses the wide trail strategy completely", "es": "Evita completamente la estrategia de rastro amplio", "de": "Es umgeht die Wide-Trail-Strategie vollständig", "nl": "Het omzeilt de wide trail strategie volledig" },
        { "en": "It requires only single-round analysis", "es": "Requiere solo análisis de una sola ronda", "de": "Es erfordert nur Ein-Runden-Analyse", "nl": "Het vereist alleen single-ronde analyse" }
      ],
      "correctIndex": 0,
      "explanation": {
        "en": "The rebound attack effectively uses the invertibility of AES operations to work both forward and backward from a controlled middle section, allowing attackers to find conforming message pairs more efficiently than brute force methods.",
        "es": "El ataque de rebote usa efectivamente la invertibilidad de las operaciones AES para trabajar hacia adelante y hacia atrás desde una sección media controlada, permitiendo a los atacantes encontrar pares de mensajes conformes más eficientemente que métodos de fuerza bruta.",
        "de": "Der Rebound-Angriff nutzt effektiv die Invertierbarkeit von AES-Operationen, um sowohl vorwärts als auch rückwärts von einem kontrollierten mittleren Abschnitt aus zu arbeiten, was Angreifern ermöglicht, konforme Nachrichtenpaare effizienter als mit Brute-Force-Methoden zu finden.",
        "nl": "De rebound aanval gebruikt effectief de omkeerbaarheid van AES operaties om zowel voorwaarts als achterwaarts te werken vanuit een gecontroleerd middensectie, waardoor aanvallers conforme berichtparen efficiënter kunnen vinden dan brute force methoden."
      }
    },
    {
      "question": {
        "en": "What is the main cryptanalytic concern with the NIST post-quantum signature scheme CRYSTALS-Dilithium?",
        "es": "¿Cuál es la principal preocupación criptoanalítica con el esquema de firma post-cuántico CRYSTALS-Dilithium de NIST?",
        "de": "Was ist das Hauptanliegen der Kryptanalyse beim NIST-Post-Quanten-Signaturverfahren CRYSTALS-Dilithium?",
        "nl": "Wat is de hoofdzaak van cryptanalytische bezorgdheid bij het NIST post-quantum handtekeningschema CRYSTALS-Dilithium?"
      },
      "options": [
        { "en": "Vulnerability to classical lattice reduction attacks", "es": "Vulnerabilidad a ataques clásicos de reducción de retículos", "de": "Anfälligkeit für klassische Gitterreduktionsangriffe", "nl": "Kwetsbaarheid voor klassieke roosterreductie aanvallen" },
        { "en": "Side-channel vulnerabilities in rejection sampling", "es": "Vulnerabilidades de canal lateral en muestreo de rechazo", "de": "Seitenkanalvulnerabilitäten beim Rejection Sampling", "nl": "Zijkanaal kwetsbaarheden in afwijzingsbemonstering" },
        { "en": "Quantum attacks on the underlying Module-LWE problem", "es": "Ataques cuánticos en el problema Module-LWE subyacente", "de": "Quantenangriffe auf das zugrunde liegende Module-LWE-Problem", "nl": "Quantum aanvallen op het onderliggende Module-LWE probleem" },
        { "en": "Forgery attacks using Gaussian sampling techniques", "es": "Ataques de falsificación usando técnicas de muestreo gaussiano", "de": "Fälschungsangriffe mit Gauß-Sampling-Techniken", "nl": "Vervalsingaanvallen met Gaussische bemonstering technieken" }
      ],
      "correctIndex": 1,
      "explanation": {
        "en": "CRYSTALS-Dilithium's rejection sampling process can leak information about the secret key through timing variations and other side-channels, requiring careful constant-time implementations to prevent key recovery attacks.",
        "es": "El proceso de muestreo de rechazo de CRYSTALS-Dilithium puede filtrar información sobre la clave secreta a través de variaciones de temporización y otros canales laterales, requiriendo implementaciones cuidadosas de tiempo constante para prevenir ataques de recuperación de clave.",
        "de": "CRYSTALS-Dilithiums Rejection-Sampling-Prozess kann Informationen über den geheimen Schlüssel durch Timing-Variationen und andere Seitenkanäle preisgeben, was sorgfältige konstante-Zeit-Implementierungen erfordert, um Schlüsselwiederherstellungsangriffe zu verhindern.",
        "nl": "CRYSTALS-Dilithium's afwijzingsbemonsteringsproces kan informatie over de geheime sleutel lekken via timing variaties en andere zijkanalen, wat zorgvuldige constante-tijd implementaties vereist om sleutelherstel aanvallen te voorkomen."
      }
    },
    {
      "question": {
        "en": "In elliptic curve cryptanalysis, what is the significance of the MOV (Menezes-Okamoto-Vanstone) attack?",
        "es": "En criptoanálisis de curvas elípticas, ¿cuál es la significancia del ataque MOV (Menezes-Okamoto-Vanstone)?",
        "de": "Was ist die Bedeutung des MOV (Menezes-Okamoto-Vanstone)-Angriffs in der Elliptische-Kurven-Kryptanalyse?",
        "nl": "Wat is de betekenis van de MOV (Menezes-Okamoto-Vanstone) aanval in elliptische curve cryptanalyse?"
      },
      "options": [
        { "en": "It reduces ECDLP to integer factorization", "es": "Reduce ECDLP a factorización de enteros", "de": "Es reduziert ECDLP auf Ganzzahlfaktorisierung", "nl": "Het reduceert ECDLP tot gehele getallen factorisatie" },
        { "en": "It transfers ECDLP to the discrete log problem in a finite field", "es": "Transfiere ECDLP al problema de logaritmo discreto en un campo finito", "de": "Es überträgt ECDLP auf das diskrete Logarithmusproblem in einem endlichen Körper", "nl": "Het draagt ECDLP over naar het discrete log probleem in een eindig veld" },
        { "en": "It exploits weak random number generation in ECDSA", "es": "Explota la generación débil de números aleatorios en ECDSA", "de": "Es nutzt schwache Zufallszahlenerzeugung in ECDSA aus", "nl": "Het exploiteert zwakke willekeurige getal generatie in ECDSA" },
        { "en": "It uses fault injection to recover private keys", "es": "Usa inyección de fallas para recuperar claves privadas", "de": "Es verwendet Fehlerinjektionen zum Wiederherstellen privater Schlüssel", "nl": "Het gebruikt foutinjectie om privé sleutels te herstellen" }
      ],
      "correctIndex": 1,
      "explanation": {
        "en": "The MOV attack uses the Weil pairing to map the elliptic curve discrete logarithm problem to the discrete logarithm problem in a finite field, where it may be easier to solve. This is why curves with small embedding degrees are avoided in cryptographic applications.",
        "es": "El ataque MOV usa el apareamiento de Weil para mapear el problema de logaritmo discreto de curva elíptica al problema de logaritmo discreto en un campo finito, donde puede ser más fácil de resolver. Por esto se evitan curvas con pequeños grados de incrustación en aplicaciones criptográficas.",
        "de": "Der MOV-Angriff verwendet die Weil-Paarung, um das diskrete Logarithmusproblem der elliptischen Kurve auf das diskrete Logarithmusproblem in einem endlichen Körper abzubilden, wo es möglicherweise einfacher zu lösen ist. Deshalb werden Kurven mit kleinen Einbettungsgraden in kryptographischen Anwendungen vermieden.",
        "nl": "De MOV aanval gebruikt de Weil pairing om het elliptische curve discrete logaritme probleem af te beelden naar het discrete logaritme probleem in een eindig veld, waar het mogelijk makkelijker op te lossen is. Daarom worden curves met kleine embedding graden vermeden in cryptografische toepassingen."
      }
    },
    {
      "question": {
        "en": "What is the primary limitation of using SAT solvers for cryptanalytic attacks on modern block ciphers?",
        "es": "¿Cuál es la limitación principal de usar solucionadores SAT para ataques criptoanalíticos en cifrados de bloque modernos?",
        "de": "Was ist die Hauptbeschränkung bei der Verwendung von SAT-Solvern für kryptanalytische Angriffe auf moderne Blockchiffren?",
        "nl": "Wat is de primaire beperking van het gebruik van SAT solvers voor cryptanalytische aanvallen op moderne blokcijfers?"
      },
      "options": [
        { "en": "SAT solvers cannot handle non-linear operations like S-boxes", "es": "Los solucionadores SAT no pueden manejar operaciones no lineales como S-boxes", "de": "SAT-Solver können nichtlineare Operationen wie S-Boxen nicht handhaben", "nl": "SAT solvers kunnen niet-lineaire operaties zoals S-boxen niet hanteren" },
        { "en": "The CNF representation becomes exponentially large with cipher rounds", "es": "La representación CNF se vuelve exponencialmente grande con las rondas del cifrado", "de": "Die CNF-Darstellung wird mit den Chiffre-Runden exponentiell groß", "nl": "De CNF representatie wordt exponentieel groot met cijfer rondes" },
        { "en": "SAT solvers are deterministic and provide no cryptanalytic advantage", "es": "Los solucionadores SAT son determinísticos y no proporcionan ventaja criptoanalítica", "de": "SAT-Solver sind deterministisch und bieten keinen kryptanalytischen Vorteil", "nl": "SAT solvers zijn deterministisch en bieden geen cryptanalytisch voordeel" },
        { "en": "They cannot work with probabilistic differential characteristics", "es": "No pueden trabajar con características diferenciales probabilísticas", "de": "Sie können nicht mit probabilistischen differenziellen Charakteristiken arbeiten", "nl": "Ze kunnen niet werken met probabilistische differentiële karakteristieken" }
      ],
      "correctIndex": 1,
      "explanation": {
        "en": "The main limitation is that the CNF (Conjunctive Normal Form) representation of modern ciphers grows exponentially with the number of rounds, making SAT-based attacks computationally intractable for full-round implementations of secure ciphers.",
        "es": "La limitación principal es que la representación CNF (Forma Normal Conjuntiva) de cifrados modernos crece exponencialmente con el número de rondas, haciendo computacionalmente intratables los ataques basados en SAT para implementaciones de ronda completa de cifrados seguros.",
        "de": "Die Hauptbeschränkung ist, dass die CNF (Konjunktive Normalform)-Darstellung moderner Chiffren exponentiell mit der Anzahl der Runden wächst, was SAT-basierte Angriffe auf vollständige Runden-Implementierungen sicherer Chiffren rechnerisch untraktabel macht.",
        "nl": "De hoofdbeperking is dat de CNF (Conjunctieve Normale Vorm) representatie van moderne cijfers exponentieel groeit met het aantal rondes, waardoor SAT-gebaseerde aanvallen computationeel onhanteerbaar worden voor volledige-ronde implementaties van veilige cijfers."
      }
    },
    {
      "question": {
        "en": "In the context of white-box cryptography, what is the main goal of algebraic attacks using linearization techniques?",
        "es": "En el contexto de criptografía de caja blanca, ¿cuál es el objetivo principal de los ataques algebraicos usando técnicas de linearización?",
        "de": "Was ist das Hauptziel algebraischer Angriffe mit Linearisierungstechniken im Kontext der White-Box-Kryptographie?",
        "nl": "Wat is het hoofddoel van algebraïsche aanvallen met linearisatie technieken in de context van white-box cryptografie?"
      },
      "options": [
        { "en": "To convert the white-box implementation into linear equations", "es": "Convertir la implementación de caja blanca en ecuaciones lineales", "de": "Die White-Box-Implementierung in lineare Gleichungen umzuwandeln", "nl": "Om de white-box implementatie om te zetten naar lineaire vergelijkingen" },
        { "en": "To extract the secret key through polynomial system solving", "es": "Extraer la clave secreta a través de resolución de sistemas polinomiales", "de": "Den geheimen Schlüssel durch Lösen polynomialer Systeme zu extrahieren", "nl": "Om de geheime sleutel te extraheren via polynomiale systeem oplossing" },
        { "en": "To bypass obfuscation by identifying linear subspaces", "es": "Evitar la ofuscación identificando subespacios lineales", "de": "Verschleierung durch Identifizierung linearer Unterräume zu umgehen", "nl": "Om obfuscatie te omzeilen door lineaire deelruimtes te identificeren" },
        { "en": "To perform differential power analysis on software implementations", "es": "Realizar análisis diferencial de potencia en implementaciones de software", "de": "Differentielle Leistungsanalyse an Software-Implementierungen durchzuführen", "nl": "Om differentiële vermogensanalyse uit te voeren op software implementaties" }
      ],
      "correctIndex": 2,
      "explanation": {
        "en": "Linearization attacks on white-box cryptography aim to identify and exploit linear or affine subspaces within the obfuscated implementation, effectively reducing the search space for key recovery by finding structural weaknesses in the protection mechanisms.",
        "es": "Los ataques de linearización en criptografía de caja blanca buscan identificar y explotar subespacios lineales o afines dentro de la implementación ofuscada, reduciendo efectivamente el espacio de búsqueda para recuperación de clave encontrando debilidades estructurales en los mecanismos de protección.",
        "de": "Linearisierungsangriffe auf White-Box-Kryptographie zielen darauf ab, lineare oder affine Unterräume innerhalb der verschleierten Implementierung zu identifizieren und auszunutzen, wodurch der Suchraum für die Schlüsselwiederherstellung effektiv reduziert wird, indem strukturelle Schwächen in den Schutzmechanismen gefunden werden.",
        "nl": "Linearisatie aanvallen op white-box cryptografie zijn erop gericht lineaire of affiene deelruimtes binnen de geobfusceerde implementatie te identificeren en exploiteren, waardoor de zoekruimte voor sleutelherstel effectief wordt verkleind door structurele zwakheden in de beschermingsmechanismen te vinden."
      }
    },
    {
      "question": {
        "en": "What distinguishes a related-key attack from other cryptanalytic techniques in block cipher analysis?",
        "es": "¿Qué distingue un ataque de clave relacionada de otras técnicas criptoanalíticas en análisis de cifrados de bloque?",
        "de": "Was unterscheidet einen Related-Key-Angriff von anderen kryptanalytischen Techniken in der Blockchiffren-Analyse?",
        "nl": "Wat onderscheidt een gerelateerde-sleutel aanval van andere cryptanalytische technieken in blokcipher analyse?"
      },
      "options": [
        { "en": "It requires knowledge of the plaintext-ciphertext pairs", "es": "Requiere conocimiento de los pares texto plano-texto cifrado", "de": "Es erfordert Kenntnis der Klartext-Chiffretext-Paare", "nl": "Het vereist kennis van de plaintext-ciphertext paren" },
        { "en": "It exploits mathematical relationships between different secret keys", "es": "Explota relaciones matemáticas entre diferentes claves secretas", "de": "Es nutzt mathematische Beziehungen zwischen verschiedenen geheimen Schlüsseln aus", "nl": "Het exploiteert wiskundige relaties tussen verschillende geheime sleutels" },
        { "en": "It only works against stream ciphers, not block ciphers", "es": "Solo funciona contra cifrados de flujo, no cifrados de bloque", "de": "Es funktioniert nur gegen Stromchiffren, nicht gegen Blockchiffren", "nl": "Het werkt alleen tegen stream ciphers, niet blok ciphers" },
        { "en": "It uses only passive observation without chosen inputs", "es": "Usa solo observación pasiva sin entradas elegidas", "de": "Es verwendet nur passive Beobachtung ohne gewählte Eingaben", "nl": "Het gebruikt alleen passieve observatie zonder gekozen inputs" }
      ],
      "correctIndex": 1,
      "explanation": {
        "en": "Related-key attacks are unique because they assume the attacker can observe the encryption process under multiple secret keys that have specific mathematical relationships, such as XOR differences, which can reveal information about the key schedule algorithm.",
        "es": "Los ataques de clave relacionada son únicos porque asumen que el atacante puede observar el proceso de encriptación bajo múltiples claves secretas que tienen relaciones matemáticas específicas, como diferencias XOR, que pueden revelar información sobre el algoritmo de programa de claves.",
        "de": "Related-Key-Angriffe sind einzigartig, weil sie annehmen, dass der Angreifer den Verschlüsselungsprozess unter mehreren geheimen Schlüsseln beobachten kann, die spezifische mathematische Beziehungen haben, wie XOR-Differenzen, die Informationen über den Key-Schedule-Algorithmus preisgeben können.",
        "nl": "Gerelateerde-sleutel aanvallen zijn uniek omdat ze aannemen dat de aanvaller het versleutelingsproces kan observeren onder meerdere geheime sleutels die specifieke wiskundige relaties hebben, zoals XOR verschillen, die informatie over het sleutel schema algoritme kunnen onthullen."
      }
    },
    {
      "question": {
        "en": "In the cryptanalysis of stream ciphers, what makes the Berlekamp-Massey algorithm particularly powerful for attacking linear feedback shift registers?",
        "es": "En el criptoanálisis de cifrados de flujo, ¿qué hace el algoritmo de Berlekamp-Massey particularmente poderoso para atacar registros de desplazamiento de retroalimentación lineal?",
        "de": "Was macht den Berlekamp-Massey-Algorithmus besonders mächtig für Angriffe auf lineare Rückgekoppelte Schieberegister in der Kryptanalyse von Stromchiffren?",
        "nl": "Wat maakt het Berlekamp-Massey algoritme bijzonder krachtig voor het aanvallen van lineaire terugkoppeling schuifregisters in cryptanalyse van stream ciphers?"
      },
      "options": [
        { "en": "It can find the shortest linear recurrence relation from 2L keystream bits", "es": "Puede encontrar la relación de recurrencia lineal más corta de 2L bits de flujo de clave", "de": "Es kann die kürzeste lineare Rekurrenzrelation aus 2L Keystream-Bits finden", "nl": "Het kan de kortste lineaire terugkeer relatie vinden uit 2L keystream bits" },
        { "en": "It works without knowing any keystream bits in advance", "es": "Funciona sin conocer ningún bit de flujo de clave por adelantado", "de": "Es funktioniert ohne vorherige Kenntnis von Keystream-Bits", "nl": "Het werkt zonder voorafgaande kennis van keystream bits" },
        { "en": "It can break non-linear combinations of multiple LFSRs", "es": "Puede romper combinaciones no lineales de múltiples LFSRs", "de": "Es kann nichtlineare Kombinationen mehrerer LFSRs brechen", "nl": "Het kan niet-lineaire combinaties van meerdere LFSRs breken" },
        { "en": "It provides quantum resistance against Shor's algorithm", "es": "Proporciona resistencia cuántica contra el algoritmo de Shor", "de": "Es bietet Quantenresistenz gegen Shors Algorithmus", "nl": "Het biedt quantumweerstand tegen Shor's algoritme" }
      ],
      "correctIndex": 0,
      "explanation": {
        "en": "The Berlekamp-Massey algorithm can determine the minimal polynomial and thus the shortest LFSR that generates a given sequence, requiring only 2L consecutive keystream bits where L is the LFSR length, making it extremely efficient for attacking linear systems.",
        "es": "El algoritmo de Berlekamp-Massey puede determinar el polinomio minimal y así el LFSR más corto que genera una secuencia dada, requiriendo solo 2L bits consecutivos de flujo de clave donde L es la longitud del LFSR, haciéndolo extremadamente eficiente para atacar sistemas lineales.",
        "de": "Der Berlekamp-Massey-Algorithmus kann das minimale Polynom und damit das kürzeste LFSR bestimmen, das eine gegebene Sequenz erzeugt, wobei nur 2L aufeinanderfolgende Keystream-Bits benötigt werden, wobei L die LFSR-Länge ist, was ihn extrem effizient für Angriffe auf lineare Systeme macht.",
        "nl": "Het Berlekamp-Massey algoritme kan het minimale polynoom bepalen en dus het kortste LFSR dat een gegeven sequentie genereert, waarbij slechts 2L opeenvolgende keystream bits nodig zijn waar L de LFSR lengte is, waardoor het extreem efficiënt wordt voor het aanvallen van lineaire systemen."
      }
    },
    {
      "question": {
        "en": "What is the primary advantage of using algebraic immunity as a design criterion for Boolean functions in cryptographic applications?",
        "es": "¿Cuál es la ventaja principal de usar inmunidad algebraica como criterio de diseño para funciones booleanas en aplicaciones criptográficas?",
        "de": "Was ist der Hauptvorteil der Verwendung algebraischer Immunität als Designkriterium für Boolesche Funktionen in kryptographischen Anwendungen?",
        "nl": "Wat is het primaire voordeel van het gebruik van algebraïsche immuniteit als ontwerpcriterium voor Booleaanse functies in cryptografische toepassingen?"
      },
      "options": [
        { "en": "It ensures perfect nonlinearity of the function", "es": "Asegura la no linealidad perfecta de la función", "de": "Es gewährleistet perfekte Nichtlinearität der Funktion", "nl": "Het zorgt voor perfecte niet-lineariteit van de functie" },
        { "en": "It provides resistance against fast algebraic attacks", "es": "Proporciona resistencia contra ataques algebraicos rápidos", "de": "Es bietet Resistenz gegen schnelle algebraische Angriffe", "nl": "Het biedt weerstand tegen snelle algebraïsche aanvallen" },
        { "en": "It maximizes the correlation immunity order", "es": "Maximiza el orden de inmunidad de correlación", "de": "Es maximiert die Korrelations-Immunitätsordnung", "nl": "Het maximaliseert de correlatie immuniteit orde" },
        { "en": "It guarantees optimal diffusion properties", "es": "Garantiza propiedades óptimas de difusión", "de": "Es garantiert optimale Diffusionseigenschaften", "nl": "Het garandeert optimale diffusie eigenschappen" }
      ],
      "correctIndex": 1,
      "explanation": {
        "en": "Algebraic immunity measures the resistance of Boolean functions to algebraic attacks by ensuring that both the function and its complement have no low-degree annihilators, preventing efficient equation system construction for cryptanalytic attacks.",
        "es": "La inmunidad algebraica mide la resistencia de las funciones booleanas a ataques algebraicos asegurando que tanto la función como su complemento no tengan anuladores de grado bajo, previniendo la construcción eficiente de sistemas de ecuaciones para ataques criptoanalíticos.",
        "de": "Algebraische Immunität misst die Resistenz Boolescher Funktionen gegen algebraische Angriffe, indem sichergestellt wird, dass sowohl die Funktion als auch ihr Komplement keine niedriggradigen Annihilatoren haben, wodurch die effiziente Konstruktion von Gleichungssystemen für kryptanalytische Angriffe verhindert wird.",
        "nl": "Algebraïsche immuniteit meet de weerstand van Booleaanse functies tegen algebraïsche aanvallen door ervoor te zorgen dat zowel de functie als zijn complement geen lage-graads annihilators hebben, waardoor efficiënte vergelijkingssysteem constructie voor cryptanalytische aanvallen wordt voorkomen."
      }
    },
    {
      "question": {
        "en": "In post-quantum signature schemes, what makes hash-based signatures like SPHINCS+ particularly attractive despite their large signature sizes?",
        "es": "En esquemas de firma post-cuánticos, ¿qué hace las firmas basadas en hash como SPHINCS+ particularmente atractivas a pesar de sus grandes tamaños de firma?",
        "de": "Was macht hash-basierte Signaturen wie SPHINCS+ in post-Quanten-Signaturverfahren trotz ihrer großen Signaturgrößen besonders attraktiv?",
        "nl": "Wat maakt hash-gebaseerde handtekeningen zoals SPHINCS+ bijzonder aantrekkelijk in post-quantum handtekening schema's ondanks hun grote handtekening groottes?"
      },
      "options": [
        { "en": "They provide the smallest key sizes among all post-quantum schemes", "es": "Proporcionan los tamaños de clave más pequeños entre todos los esquemas post-cuánticos", "de": "Sie bieten die kleinsten Schlüsselgrößen unter allen Post-Quanten-Verfahren", "nl": "Ze bieden de kleinste sleutelgroottes onder alle post-quantum schema's" },
        { "en": "They offer the strongest security guarantees based only on hash function security", "es": "Ofrecen las garantías de seguridad más fuertes basadas solo en la seguridad de funciones hash", "de": "Sie bieten die stärksten Sicherheitsgarantien, basierend nur auf Hash-Funktions-Sicherheit", "nl": "Ze bieden de sterkste veiligheidsgaranties gebaseerd alleen op hash functie veiligheid" },
        { "en": "They enable the fastest signature generation and verification times", "es": "Permiten los tiempos más rápidos de generación y verificación de firmas", "de": "Sie ermöglichen die schnellsten Signaturerzeugungs- und Verifikationszeiten", "nl": "Ze maken de snelste handtekening generatie en verificatie tijden mogelijk" },
        { "en": "They support unlimited signature aggregation capabilities", "es": "Soportan capacidades ilimitadas de agregación de firmas", "de": "Sie unterstützen unbegrenzte Signatur-Aggregationsfähigkeiten", "nl": "Ze ondersteunen onbeperkte handtekening aggregatie mogelijkheden" }
      ],
      "correctIndex": 1,
      "explanation": {
        "en": "Hash-based signatures like SPHINCS+ are attractive because their security relies solely on the security of cryptographic hash functions, providing very conservative security assumptions and proven resistance to both classical and quantum attacks without relying on unproven mathematical problems.",
        "es": "Las firmas basadas en hash como SPHINCS+ son atractivas porque su seguridad depende únicamente de la seguridad de las funciones hash criptográficas, proporcionando suposiciones de seguridad muy conservadoras y resistencia probada tanto a ataques clásicos como cuánticos sin depender de problemas matemáticos no probados.",
        "de": "Hash-basierte Signaturen wie SPHINCS+ sind attraktiv, weil ihre Sicherheit ausschließlich auf der Sicherheit kryptographischer Hash-Funktionen beruht, sehr konservative Sicherheitsannahmen bietet und bewiesene Resistenz gegen sowohl klassische als auch Quantenangriffe ohne Abhängigkeit von unbewiesenen mathematischen Problemen.",
        "nl": "Hash-gebaseerde handtekeningen zoals SPHINCS+ zijn aantrekkelijk omdat hun veiligheid uitsluitend steunt op de veiligheid van cryptografische hash functies, zeer conservatieve veiligheidsaannamen biedt en bewezen weerstand tegen zowel klassieke als quantum aanvallen zonder afhankelijkheid van onbewezen wiskundige problemen."
      }
    },
    {
      "question": {
        "en": "What is the fundamental principle behind Cold Boot attacks on cryptographic implementations?",
        "es": "¿Cuál es el principio fundamental detrás de los ataques Cold Boot en implementaciones criptográficas?",
        "de": "Was ist das Grundprinzip hinter Cold-Boot-Angriffen auf kryptographische Implementierungen?",
        "nl": "Wat is het fundamentele principe achter Cold Boot aanvallen op cryptografische implementaties?"
      },
      "options": [
        { "en": "Exploiting power consumption variations during boot process", "es": "Explotar variaciones de consumo de energía durante el proceso de arranque", "de": "Ausnutzung von Stromverbrauchsschwankungen während des Boot-Prozesses", "nl": "Exploiteren van stroomverbruik variaties tijdens het boot proces" },
        { "en": "Recovering cryptographic keys from RAM after power loss", "es": "Recuperar claves criptográficas de la RAM después de pérdida de energía", "de": "Wiederherstellung kryptographischer Schlüssel aus RAM nach Stromausfall", "nl": "Herstellen van cryptografische sleutels uit RAM na stroomuitval" },
        { "en": "Analyzing electromagnetic emanations during system startup", "es": "Analizar emanaciones electromagnéticas durante el inicio del sistema", "de": "Analyse elektromagnetischer Abstrahlungen während des Systemstarts", "nl": "Analyseren van elektromagnetische uitstralingen tijdens systeem opstarten" },
        { "en": "Intercepting network communications during initialization", "es": "Interceptar comunicaciones de red durante la inicialización", "de": "Abfangen von Netzwerkkommunikation während der Initialisierung", "nl": "Onderscheppen van netwerk communicatie tijdens initialisatie" }
      ],
      "correctIndex": 1,
      "explanation": {
        "en": "Cold Boot attacks exploit the fact that DRAM retains data for seconds to minutes after power loss, especially at low temperatures. Attackers can quickly reboot the system and dump memory contents to recover cryptographic keys that were stored in RAM.",
        "es": "Los ataques Cold Boot explotan el hecho de que DRAM retiene datos por segundos a minutos después de la pérdida de energía, especialmente a bajas temperaturas. Los atacantes pueden reiniciar rápidamente el sistema y volcar contenidos de memoria para recuperar claves criptográficas almacenadas en RAM.",
        "de": "Cold-Boot-Angriffe nutzen die Tatsache aus, dass DRAM Daten für Sekunden bis Minuten nach einem Stromausfall behält, besonders bei niedrigen Temperaturen. Angreifer können das System schnell neu starten und Speicherinhalte ausgeben, um kryptographische Schlüssel zu gewinnen, die im RAM gespeichert waren.",
        "nl": "Cold Boot aanvallen exploiteren het feit dat DRAM data behoudt voor seconden tot minuten na stroomuitval, vooral bij lage temperaturen. Aanvallers kunnen het systeem snel herstarten en geheugen inhoud dumpen om cryptografische sleutels te herstellen die in RAM waren opgeslagen."
      }
    },
    {
      "question": {
        "en": "In the analysis of authenticated encryption schemes, what security property does 'robustness' specifically address?",
        "es": "En el análisis de esquemas de encriptación autenticada, ¿qué propiedad de seguridad aborda específicamente la 'robustez'?",
        "de": "Welche Sicherheitseigenschaft spricht 'Robustheit' speziell in der Analyse authentifizierter Verschlüsselungsverfahren an?",
        "nl": "Welke veiligheidseigenschap adresseert 'robuustheid' specifiek in de analyse van geauthenticeerde versleutelingsschema's?"
      },
      "options": [
        { "en": "Protection against timing attacks during decryption", "es": "Protección contra ataques de temporización durante el descifrado", "de": "Schutz vor Timing-Angriffen während der Entschlüsselung", "nl": "Bescherming tegen timing aanvallen tijdens ontsleuteling" },
        { "en": "Security when the same key is used with different nonce-misuse scenarios", "es": "Seguridad cuando la misma clave se usa con diferentes escenarios de mal uso de nonce", "de": "Sicherheit bei Verwendung desselben Schlüssels in verschiedenen Nonce-Missbrauchsszenarien", "nl": "Veiligheid wanneer dezelfde sleutel wordt gebruikt met verschillende nonce-misbruik scenario's" },
        { "en": "Resistance to differential cryptanalysis attacks", "es": "Resistencia a ataques de criptoanálisis diferencial", "de": "Resistenz gegen differentielle Kryptanalyse-Angriffe", "nl": "Weerstand tegen differentiële cryptanalyse aanvallen" },
        { "en": "Maintaining confidentiality under chosen-ciphertext attacks", "es": "Mantener confidencialidad bajo ataques de texto cifrado elegido", "de": "Aufrechterhaltung der Vertraulichkeit unter Chosen-Ciphertext-Angriffen", "nl": "Handhaven van vertrouwelijkheid onder chosen-ciphertext aanvallen" }
      ],
      "correctIndex": 1,
      "explanation": {
        "en": "Robustness in authenticated encryption refers to the scheme's ability to maintain some level of security even when nonces are repeated or predictable, which is crucial in practice since perfect nonce handling is often difficult to guarantee in real-world implementations.",
        "es": "La robustez en encriptación autenticada se refiere a la capacidad del esquema para mantener algún nivel de seguridad incluso cuando los nonces se repiten o son predecibles, lo cual es crucial en la práctica ya que el manejo perfecto de nonces a menudo es difícil de garantizar en implementaciones del mundo real.",
        "de": "Robustheit in der authentifizierten Verschlüsselung bezieht sich auf die Fähigkeit des Verfahrens, ein gewisses Maß an Sicherheit zu wahren, selbst wenn Nonces wiederholt oder vorhersagbar sind, was in der Praxis entscheidend ist, da perfekte Nonce-Behandlung in realen Implementierungen oft schwer zu garantieren ist.",
        "nl": "Robuustheid in geauthenticeerde versleuteling verwijst naar het vermogen van het schema om enig niveau van veiligheid te behouden zelfs wanneer nonces worden herhaald of voorspelbaar zijn, wat cruciaal is in de praktijk omdat perfecte nonce behandeling vaak moeilijk te garanderen is in echte implementaties."
      }
    },
    {
      "question": {
        "en": "What is the main advantage of using the Number Field Sieve for integer factorization over other factoring algorithms?",
        "es": "¿Cuál es la principal ventaja de usar el Tamiz de Campo Numérico para factorización de enteros sobre otros algoritmos de factorización?",
        "de": "Was ist der Hauptvorteil der Verwendung des Zahlkörpersiebs für Ganzzahlfaktorisierung gegenüber anderen Faktorisierungsalgorithmen?",
        "nl": "Wat is het hoofdvoordeel van het gebruik van de Number Field Sieve voor gehele getal factorisatie ten opzichte van andere factorisatie algoritmen?"
      },
      "options": [
        { "en": "It has polynomial time complexity", "es": "Tiene complejidad temporal polinomial", "de": "Es hat polynomiale Zeitkomplexität", "nl": "Het heeft polynomiale tijdscomplexiteit" },
        { "en": "It achieves the lowest known asymptotic complexity for large integers", "es": "Logra la complejidad asintótica más baja conocida para enteros grandes", "de": "Es erreicht die niedrigste bekannte asymptotische Komplexität für große Ganzzahlen", "nl": "Het bereikt de laagst bekende asymptotische complexiteit voor grote gehele getallen" },
        { "en": "It works efficiently for all types of composite numbers", "es": "Funciona eficientemente para todos los tipos de números compuestos", "de": "Es funktioniert effizient für alle Arten zusammengesetzter Zahlen", "nl": "Het werkt efficiënt voor alle typen samengestelde getallen" },
        { "en": "It requires only classical computational resources", "es": "Requiere solo recursos computacionales clásicos", "de": "Es benötigt nur klassische Rechenressourcen", "nl": "Het vereist alleen klassieke computationele bronnen" }
      ],
      "correctIndex": 1,
      "explanation": {
        "en": "The General Number Field Sieve (GNFS) has the best known asymptotic complexity L[1/3, (64/9)^(1/3)] for factoring large general integers, making it the most efficient algorithm for attacking RSA keys with large moduli in classical computing.",
        "es": "El Tamiz General de Campo Numérico (GNFS) tiene la mejor complejidad asintótica conocida L[1/3, (64/9)^(1/3)] para factorizar enteros generales grandes, haciéndolo el algoritmo más eficiente para atacar claves RSA con módulos grandes en computación clásica.",
        "de": "Das Allgemeine Zahlkörpersieb (GNFS) hat die beste bekannte asymptotische Komplexität L[1/3, (64/9)^(1/3)] für die Faktorisierung großer allgemeiner Ganzzahlen, was es zum effizientesten Algorithmus für Angriffe auf RSA-Schlüssel mit großen Moduli in klassischer Berechnung macht.",
        "nl": "De General Number Field Sieve (GNFS) heeft de best bekende asymptotische complexiteit L[1/3, (64/9)^(1/3)] voor het factoriseren van grote algemene gehele getallen, waardoor het het meest efficiënte algoritme is voor het aanvallen van RSA sleutels met grote moduli in klassieke computing."
      }
    },
    {
      "question": {
        "en": "In quantum cryptanalysis, what makes Grover's algorithm less threatening to symmetric cryptography compared to Shor's impact on public-key systems?",
        "es": "En criptoanálisis cuántico, ¿qué hace el algoritmo de Grover menos amenazante para la criptografía simétrica comparado con el impacto de Shor en sistemas de clave pública?",
        "de": "Was macht Grovers Algorithmus in der Quantenkryptanalyse weniger bedrohlich für symmetrische Kryptographie im Vergleich zu Shors Auswirkung auf Public-Key-Systeme?",
        "nl": "Wat maakt Grover's algoritme minder bedreigend voor symmetrische cryptografie vergeleken met Shor's impact op publieke-sleutel systemen in quantum cryptanalyse?"
      },
      "options": [
        { "en": "Grover's algorithm only provides quadratic speedup", "es": "El algoritmo de Grover solo proporciona aceleración cuadrática", "de": "Grovers Algorithmus bietet nur quadratische Beschleunigung", "nl": "Grover's algoritme biedt alleen kwadratische versnelling" },
        { "en": "Grover's algorithm cannot be implemented on quantum computers", "es": "El algoritmo de Grover no puede implementarse en computadoras cuánticas", "de": "Grovers Algorithmus kann nicht auf Quantencomputern implementiert werden", "nl": "Grover's algoritme kan niet geïmplementeerd worden op quantumcomputers" },
        { "en": "Symmetric ciphers are inherently quantum-resistant", "es": "Los cifrados simétricos son inherentemente resistentes cuánticos", "de": "Symmetrische Chiffren sind von Natur aus quantenresistent", "nl": "Symmetrische cijfers zijn inherent quantum-resistent" },
        { "en": "Grover's algorithm requires exponential quantum memory", "es": "El algoritmo de Grover requiere memoria cuántica exponencial", "de": "Grovers Algorithmus benötigt exponentiellen Quantenspeicher", "nl": "Grover's algoritme vereist exponentieel quantum geheugen" }
      ],
      "correctIndex": 0,
      "explanation": {
        "en": "Grover's algorithm provides only a quadratic speedup, reducing the effective security of symmetric ciphers by half (e.g., AES-256 to ~128-bit security), whereas Shor's algorithm provides exponential speedup against integer factorization and discrete logarithms, completely breaking current public-key systems.",
        "es": "El algoritmo de Grover proporciona solo una aceleración cuadrática, reduciendo la seguridad efectiva de cifrados simétricos a la mitad (ej., AES-256 a ~128-bit de seguridad), mientras que el algoritmo de Shor proporciona aceleración exponencial contra factorización de enteros y logaritmos discretos, rompiendo completamente los sistemas actuales de clave pública.",
        "de": "Grovers Algorithmus bietet nur eine quadratische Beschleunigung, wodurch die effektive Sicherheit symmetrischer Chiffren halbiert wird (z.B. AES-256 zu ~128-Bit-Sicherheit), während Shors Algorithmus exponentielle Beschleunigung gegen Ganzzahlfaktorisierung und diskrete Logarithmen bietet und aktuelle Public-Key-Systeme vollständig bricht.",
        "nl": "Grover's algoritme biedt slechts een kwadratische versnelling, waardoor de effectieve veiligheid van symmetrische cijfers wordt gehalveerd (bijv. AES-256 tot ~128-bit veiligheid), terwijl Shor's algoritme exponentiële versnelling biedt tegen gehele getal factorisatie en discrete logaritmen, waardoor huidige publieke-sleutel systemen volledig worden gebroken."
      }
    },
    {
      "question": {
        "en": "What is the primary challenge in implementing masking countermeasures against side-channel attacks in cryptographic hardware?",
        "es": "¿Cuál es el desafío principal al implementar contramedidas de enmascaramiento contra ataques de canal lateral en hardware criptográfico?",
        "de": "Was ist die Hauptherausforderung bei der Implementierung von Maskierungs-Gegenmaßnahmen gegen Seitenkanalangriffe in kryptographischer Hardware?",
        "nl": "Wat is de primaire uitdaging bij het implementeren van masking tegenmaatregelen tegen zijkanaal aanvallen in cryptografische hardware?"
      },
      "options": [
        { "en": "Masking requires exponentially more computational resources", "es": "El enmascaramiento requiere recursos computacionales exponencialmente más", "de": "Maskierung benötigt exponentiell mehr Rechenressourcen", "nl": "Masking vereist exponentieel meer computationele bronnen" },
        { "en": "Ensuring statistical independence between masked shares at the physical level", "es": "Asegurar independencia estadística entre partes enmascaradas a nivel físico", "de": "Gewährleistung statistischer Unabhängigkeit zwischen maskierten Anteilen auf physischer Ebene", "nl": "Zorgen voor statistische onafhankelijkheid tussen gemaskeerde delen op fysiek niveau" },
        { "en": "Masking only works against power analysis, not electromagnetic attacks", "es": "El enmascaramiento solo funciona contra análisis de potencia, no ataques electromagnéticos", "de": "Maskierung funktioniert nur gegen Leistungsanalyse, nicht gegen elektromagnetische Angriffe", "nl": "Masking werkt alleen tegen vermogensanalyse, niet elektromagnetische aanvallen" },
        { "en": "The overhead makes implementations too slow for practical use", "es": "La sobrecarga hace las implementaciones muy lentas para uso práctico", "de": "Der Overhead macht Implementierungen zu langsam für praktische Nutzung", "nl": "De overhead maakt implementaties te langzaam voor praktisch gebruik" }
      ],
      "correctIndex": 1,
      "explanation": {
        "en": "The main challenge in hardware masking is ensuring that masked shares remain statistically independent at the physical level, as hardware effects like glitches, routing delays, and crosstalk can create dependencies that leak information and compromise the masking scheme's security.",
        "es": "El desafío principal en enmascaramiento de hardware es asegurar que las partes enmascaradas permanezcan estadísticamente independientes a nivel físico, ya que efectos de hardware como glitches, retrasos de enrutamiento y diafonía pueden crear dependencias que filtran información y comprometen la seguridad del esquema de enmascaramiento.",
        "de": "Die Hauptherausforderung bei Hardware-Maskierung ist sicherzustellen, dass maskierte Anteile auf physischer Ebene statistisch unabhängig bleiben, da Hardware-Effekte wie Störungen, Routing-Verzögerungen und Übersprechen Abhängigkeiten schaffen können, die Informationen preisgeben und die Sicherheit des Maskierungsschemas kompromittieren.",
        "nl": "De hoofduitdaging bij hardware masking is ervoor zorgen dat gemaskeerde delen statistisch onafhankelijk blijven op fysiek niveau, omdat hardware effecten zoals glitches, routing vertragingen en overspraak afhankelijkheden kunnen creëren die informatie lekken en de veiligheid van het masking schema compromitteren."
      }
    },
    {
      "question": {
        "en": "In the context of advanced cryptanalysis, what is the significance of the 'hermit crab' technique in attacking block ciphers?",
        "es": "En el contexto de criptoanálisis avanzado, ¿cuál es la significancia de la técnica del 'cangrejo ermitaño' al atacar cifrados de bloque?",
        "de": "Was ist die Bedeutung der 'Einsiedlerkrebs'-Technik beim Angriff auf Blockchiffren im Kontext fortgeschrittener Kryptanalyse?",
        "nl": "Wat is de betekenis van de 'hermit crab' techniek bij het aanvallen van blokcijfers in de context van geavanceerde cryptanalyse?"
      },
      "options": [
        { "en": "It combines meet-in-the-middle with differential cryptanalysis", "es": "Combina meet-in-the-middle con criptoanálisis diferencial", "de": "Es kombiniert Meet-in-the-Middle mit differenzieller Kryptanalyse", "nl": "Het combineert meet-in-the-middle met differentiële cryptanalyse" },
        { "en": "It uses multiple independent attack paths simultaneously", "es": "Usa múltiples caminos de ataque independientes simultáneamente", "de": "Es verwendet mehrere unabhängige Angriffspfade gleichzeitig", "nl": "Het gebruikt meerdere onafhankelijke aanvalpaden tegelijkertijd" },
        { "en": "It exploits weak key schedules by borrowing structures from other ciphers", "es": "Explota programas de clave débiles tomando prestadas estructuras de otros cifrados", "de": "Es nutzt schwache Schlüsselpläne aus, indem es Strukturen von anderen Chiffren borgt", "nl": "Het exploiteert zwakke sleutel schema's door structuren van andere cijfers te lenen" },
        { "en": "It applies quantum principles to classical cryptanalytic methods", "es": "Aplica principios cuánticos a métodos criptoanalíticos clásicos", "de": "Es wendet Quantenprinzipien auf klassische kryptanalytische Methoden an", "nl": "Het past quantum principes toe op klassieke cryptanalytische methoden" }
      ],
      "correctIndex": 2,
      "explanation": {
        "en": "The 'hermit crab' technique is a metaphorical name for attacks that exploit structural similarities between different ciphers, allowing cryptanalysts to 'borrow' attack techniques from one cipher to attack another with similar internal structures, particularly effective against cipher families or variants.",
        "es": "La técnica del 'cangrejo ermitaño' es un nombre metafórico para ataques que explotan similitudes estructurales entre diferentes cifrados, permitiendo a los criptoanalistas 'tomar prestadas' técnicas de ataque de un cifrado para atacar otro con estructuras internas similares, particularmente efectivo contra familias de cifrados o variantes.",
        "de": "Die 'Einsiedlerkrebs'-Technik ist ein metaphorischer Name für Angriffe, die strukturelle Ähnlichkeiten zwischen verschiedenen Chiffren ausnutzen und Kryptoanalytikern ermöglichen, Angriffstechniken von einer Chiffre zu 'borgen', um eine andere mit ähnlichen internen Strukturen anzugreifen, besonders effektiv gegen Chiffre-Familien oder -Varianten.",
        "nl": "De 'hermit crab' techniek is een metaforische naam voor aanvallen die structurele gelijkenissen tussen verschillende cijfers exploiteren, waardoor cryptanalisten aanvalstechnieken van één cijfer kunnen 'lenen' om een ander met vergelijkbare interne structuren aan te vallen, bijzonder effectief tegen cijfer families of varianten."
      }
    },
    {
      "question": {
        "en": "What makes the analysis of tweakable block ciphers more complex compared to traditional block ciphers in cryptanalytic research?",
        "es": "¿Qué hace el análisis de cifrados de bloque ajustables más complejo comparado con cifrados de bloque tradicionales en investigación criptoanalítica?",
        "de": "Was macht die Analyse von tweakable Blockchiffren komplexer im Vergleich zu traditionellen Blockchiffren in der kryptanalytischen Forschung?",
        "nl": "Wat maakt de analyse van tweakable blok cijfers complexer vergeleken met traditionele blok cijfers in cryptanalytisch onderzoek?"
      },
      "options": [
        { "en": "The additional tweak input creates a larger attack surface", "es": "La entrada adicional de ajuste crea una superficie de ataque más grande", "de": "Die zusätzliche Tweak-Eingabe schafft eine größere Angriffsfläche", "nl": "De extra tweak input creëert een groter aanvalsoppervlak" },
        { "en": "Related-tweak attacks introduce new attack vectors beyond related-key attacks", "es": "Los ataques de ajuste relacionado introducen nuevos vectores de ataque más allá de ataques de clave relacionada", "de": "Related-Tweak-Angriffe führen neue Angriffsvektoren jenseits von Related-Key-Angriffen ein", "nl": "Related-tweak aanvallen introduceren nieuwe aanvalsvectoren voorbij related-key aanvallen" },
        { "en": "Tweakable ciphers require quantum analysis methods", "es": "Los cifrados ajustables requieren métodos de análisis cuántico", "de": "Tweakable Chiffren erfordern Quantenanalysemethoden", "nl": "Tweakable cijfers vereisen quantum analyse methoden" },
        { "en": "The computational complexity increases exponentially with tweak size", "es": "La complejidad computacional aumenta exponencialmente con el tamaño del ajuste", "de": "Die Berechnungskomplexität steigt exponentiell mit der Tweak-Größe", "nl": "De computationele complexiteit neemt exponentieel toe met tweak grootte" }
      ],
      "correctIndex": 1,
      "explanation": {
        "en": "Tweakable block ciphers introduce related-tweak attacks as a new cryptanalytic dimension, where attackers can exploit mathematical relationships between different tweak values, similar to related-key attacks but with additional complexity due to the tweak's role in the encryption process.",
        "es": "Los cifrados de bloque ajustables introducen ataques de ajuste relacionado como una nueva dimensión criptoanalítica, donde los atacantes pueden explotar relaciones matemáticas entre diferentes valores de ajuste, similar a ataques de clave relacionada pero con complejidad adicional debido al rol del ajuste en el proceso de encriptación.",
        "de": "Tweakable Blockchiffren führen Related-Tweak-Angriffe als neue kryptanalytische Dimension ein, bei der Angreifer mathematische Beziehungen zwischen verschiedenen Tweak-Werten ausnutzen können, ähnlich Related-Key-Angriffen, aber mit zusätzlicher Komplexität aufgrund der Rolle des Tweaks im Verschlüsselungsprozess.",
        "nl": "Tweakable blok cijfers introduceren related-tweak aanvallen als een nieuwe cryptanalytische dimensie, waarbij aanvallers wiskundige relaties tussen verschillende tweak waarden kunnen exploiteren, vergelijkbaar met related-key aanvallen maar met extra complexiteit vanwege de rol van de tweak in het versleutelingsproces."
      }
    },
    {
      "question": {
        "en": "In advanced side-channel analysis, what distinguishes template attacks from simple power analysis in terms of attack methodology?",
        "es": "En análisis avanzado de canal lateral, ¿qué distingue los ataques de plantilla del análisis simple de potencia en términos de metodología de ataque?",
        "de": "Was unterscheidet Template-Angriffe von einfacher Leistungsanalyse in der fortgeschrittenen Seitenkanalanalyse hinsichtlich der Angriffsmethodik?",
        "nl": "Wat onderscheidt template aanvallen van eenvoudige vermogensanalyse in geavanceerde zijkanaal analyse wat betreft aanvalsmethodologie?"
      },
      "options": [
        { "en": "Template attacks use machine learning while SPA uses statistical correlation", "es": "Los ataques de plantilla usan aprendizaje automático mientras que SPA usa correlación estadística", "de": "Template-Angriffe verwenden maschinelles Lernen, während SPA statistische Korrelation nutzt", "nl": "Template aanvallen gebruiken machine learning terwijl SPA statistische correlatie gebruikt" },
        { "en": "Template attacks require a profiling phase to characterize device behavior", "es": "Los ataques de plantilla requieren una fase de perfilado para caracterizar el comportamiento del dispositivo", "de": "Template-Angriffe benötigen eine Profiling-Phase zur Charakterisierung des Geräteverhaltens", "nl": "Template aanvallen vereisen een profiling fase om apparaat gedrag te karakteriseren" },
        { "en": "Template attacks work only on hardware while SPA targets software", "es": "Los ataques de plantilla funcionan solo en hardware mientras que SPA apunta al software", "de": "Template-Angriffe funktionieren nur auf Hardware, während SPA auf Software abzielt", "nl": "Template aanvallen werken alleen op hardware terwijl SPA software target" },
        { "en": "Template attacks analyze multiple traces simultaneously while SPA uses single traces", "es": "Los ataques de plantilla analizan múltiples trazas simultáneamente mientras que SPA usa trazas únicas", "de": "Template-Angriffe analysieren mehrere Traces gleichzeitig, während SPA einzelne Traces verwendet", "nl": "Template aanvallen analyseren meerdere traces tegelijkertijd terwijl SPA enkele traces gebruikt" }
      ],
      "correctIndex": 1,
      "explanation": {
        "en": "Template attacks are distinguished by their two-phase approach: first a profiling phase where attackers characterize the statistical behavior of the target device under controlled conditions, then an attack phase where they match observed traces against these templates to recover secret information.",
        "es": "Los ataques de plantilla se distinguen por su enfoque de dos fases: primero una fase de perfilado donde los atacantes caracterizan el comportamiento estadístico del dispositivo objetivo bajo condiciones controladas, luego una fase de ataque donde emparejan trazas observadas contra estas plantillas para recuperar información secreta.",
        "de": "Template-Angriffe zeichnen sich durch ihren zweiphasigen Ansatz aus: zuerst eine Profiling-Phase, in der Angreifer das statistische Verhalten des Zielgeräts unter kontrollierten Bedingungen charakterisieren, dann eine Angriffsphase, in der sie beobachtete Traces gegen diese Templates abgleichen, um geheime Informationen zu gewinnen.",
        "nl": "Template aanvallen onderscheiden zich door hun tweefasige benadering: eerst een profiling fase waar aanvallers het statistische gedrag van het doelapparaat karakteriseren onder gecontroleerde omstandigheden, dan een aanvalsfase waar ze waargenomen traces matchen tegen deze templates om geheime informatie te herstellen."
      }
    }
  ]
});
})();
