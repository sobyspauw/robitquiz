window.addLevel('mind-bender/cryptography', {
  name: {
    en: "Quantum Cryptography and Post-Quantum Security",
    es: "Criptografía Cuántica y Seguridad Post-Cuántica",
    de: "Quantenkryptografie und Post-Quanten-Sicherheit",
    nl: "Quantumcryptografie en Post-Quantum Beveiliging"
  },
  questions: [
    {
      question: {
        en: "What is the fundamental principle behind quantum key distribution (QKD)?",
        es: "¿Cuál es el principio fundamental detrás de la distribución de claves cuánticas (QKD)?",
        de: "Was ist das Grundprinzip der Quantenschlüsselverteilung (QKD)?",
        nl: "Wat is het fundamentele principe achter quantum sleutel distributie (QKD)?"
      },
      options: [
        { en: "Heisenberg uncertainty principle", es: "Principio de incertidumbre de Heisenberg", de: "Heisenbergsche Unschärferelation", nl: "Heisenberg onzekerheidsbeginsel" },
        { en: "Quantum entanglement", es: "Entrelazamiento cuántico", de: "Quantenverschränkung", nl: "Quantum verstrengeling" },
        { en: "No-cloning theorem", es: "Teorema de no clonación", de: "No-Cloning-Theorem", nl: "No-cloning theorema" },
        { en: "Wave-particle duality", es: "Dualidad onda-partícula", de: "Welle-Teilchen-Dualismus", nl: "Golf-deeltje dualiteit" }
      ],
      correct: 2,
      explanation: {
        en: "QKD relies on the no-cloning theorem, which states that quantum information cannot be copied without disturbing the original state, making eavesdropping detectable.",
        es: "QKD se basa en el teorema de no clonación, que establece que la información cuántica no puede copiarse sin perturbar el estado original, haciendo detectable la interceptación.",
        de: "QKD basiert auf dem No-Cloning-Theorem, das besagt, dass Quanteninformation nicht kopiert werden kann, ohne den ursprünglichen Zustand zu stören, wodurch Abhören erkennbar wird.",
        nl: "QKD is gebaseerd op het no-cloning theorema, dat stelt dat quantum informatie niet gekopieerd kan worden zonder de originele toestand te verstoren, waardoor afluisteren detecteerbaar wordt."
      }
    },
    {
      question: {
        en: "Which quantum cryptographic protocol uses polarized photons?",
        es: "¿Qué protocolo criptográfico cuántico utiliza fotones polarizados?",
        de: "Welches quantenkryptographische Protokoll verwendet polarisierte Photonen?",
        nl: "Welk quantum cryptografisch protocol gebruikt gepolariseerde fotonen?"
      },
      options: [
        { en: "BB84", es: "BB84", de: "BB84", nl: "BB84" },
        { en: "B92", es: "B92", de: "B92", nl: "B92" },
        { en: "E91", es: "E91", de: "E91", nl: "E91" },
        { en: "SARG04", es: "SARG04", de: "SARG04", nl: "SARG04" }
      ],
      correct: 0,
      explanation: {
        en: "BB84 (Bennett-Brassard 1984) was the first quantum key distribution protocol, using four polarization states of photons to encode quantum bits.",
        es: "BB84 (Bennett-Brassard 1984) fue el primer protocolo de distribución de claves cuánticas, usando cuatro estados de polarización de fotones para codificar bits cuánticos.",
        de: "BB84 (Bennett-Brassard 1984) war das erste Quantenschlüsselverteilungsprotokoll, das vier Polarisationszustände von Photonen zur Kodierung von Quantenbits verwendet.",
        nl: "BB84 (Bennett-Brassard 1984) was het eerste quantum sleutel distributie protocol, dat vier polarisatie toestanden van fotonen gebruikt om quantum bits te coderen."
      }
    },
    {
      question: {
        en: "What is the main threat that quantum computers pose to current cryptographic systems?",
        es: "¿Cuál es la principal amenaza que representan las computadoras cuánticas para los sistemas criptográficos actuales?",
        de: "Was ist die Hauptbedrohung, die Quantencomputer für aktuelle kryptographische Systeme darstellen?",
        nl: "Wat is de grootste bedreiging die quantum computers vormen voor huidige cryptografische systemen?"
      },
      options: [
        { en: "Breaking symmetric encryption", es: "Romper el cifrado simétrico", de: "Brechen symmetrischer Verschlüsselung", nl: "Breken van symmetrische encryptie" },
        { en: "Breaking public key cryptography", es: "Romper la criptografía de clave pública", de: "Brechen der Public-Key-Kryptographie", nl: "Breken van publieke sleutel cryptografie" },
        { en: "Breaking hash functions", es: "Romper las funciones hash", de: "Brechen von Hash-Funktionen", nl: "Breken van hash functies" },
        { en: "Breaking digital certificates", es: "Romper los certificados digitales", de: "Brechen digitaler Zertifikate", nl: "Breken van digitale certificaten" }
      ],
      correct: 1,
      explanation: {
        en: "Shor's algorithm allows quantum computers to efficiently factor large integers and solve discrete logarithms, breaking RSA, ECC, and other public key systems.",
        es: "El algoritmo de Shor permite a las computadoras cuánticas factorizar eficientemente enteros grandes y resolver logaritmos discretos, rompiendo RSA, ECC y otros sistemas de clave pública.",
        de: "Shors Algorithmus ermöglicht es Quantencomputern, große Ganzzahlen effizient zu faktorisieren und diskrete Logarithmen zu lösen, wodurch RSA, ECC und andere Public-Key-Systeme gebrochen werden.",
        nl: "Shor's algoritme stelt quantum computers in staat om efficiënt grote gehele getallen te ontbinden en discrete logaritmen op te lossen, waardoor RSA, ECC en andere publieke sleutel systemen worden gebroken."
      }
    },
    {
      question: {
        en: "Which post-quantum cryptographic approach is based on lattice problems?",
        es: "¿Qué enfoque criptográfico post-cuántico se basa en problemas de retícula?",
        de: "Welcher Post-Quanten-Kryptographie-Ansatz basiert auf Gitterproblemen?",
        nl: "Welke post-quantum cryptografische aanpak is gebaseerd op rooster problemen?"
      },
      options: [
        { en: "NTRU", es: "NTRU", de: "NTRU", nl: "NTRU" },
        { en: "McEliece", es: "McEliece", de: "McEliece", nl: "McEliece" },
        { en: "Rainbow", es: "Rainbow", de: "Rainbow", nl: "Rainbow" },
        { en: "SPHINCS", es: "SPHINCS", de: "SPHINCS", nl: "SPHINCS" }
      ],
      correct: 0,
      explanation: {
        en: "NTRU (N-th degree TRUncated polynomial ring) is a lattice-based cryptosystem that relies on the difficulty of finding short vectors in high-dimensional lattices.",
        es: "NTRU (anillo polinomial truncado de grado N) es un criptosistema basado en retículas que se basa en la dificultad de encontrar vectores cortos en retículas de alta dimensión.",
        de: "NTRU (N-ten Grades TRUncated polynomial ring) ist ein gitterbasiertes Kryptosystem, das auf der Schwierigkeit beruht, kurze Vektoren in hochdimensionalen Gittern zu finden.",
        nl: "NTRU (N-de graads TRUncated polynoom ring) is een rooster-gebaseerd cryptosysteem dat vertrouwt op de moeilijkheid van het vinden van korte vectoren in hoog-dimensionale roosters."
      }
    },
    {
      question: {
        en: "What is the purpose of quantum error correction in quantum cryptography?",
        es: "¿Cuál es el propósito de la corrección de errores cuánticos en la criptografía cuántica?",
        de: "Was ist der Zweck der Quantenfehlerkorrektur in der Quantenkryptographie?",
        nl: "Wat is het doel van quantum fout correctie in quantum cryptografie?"
      },
      options: [
        { en: "Prevent decoherence and maintain quantum states", es: "Prevenir la decoherencia y mantener estados cuánticos", de: "Dekohärenz verhindern und Quantenzustände aufrechterhalten", nl: "Decoherentie voorkomen en quantum toestanden behouden" },
        { en: "Detect eavesdropping attempts", es: "Detectar intentos de espionaje", de: "Lauschangriffe erkennen", nl: "Afluisterpogingen detecteren" },
        { en: "Increase transmission speed", es: "Aumentar la velocidad de transmisión", de: "Übertragungsgeschwindigkeit erhöhen", nl: "Transmissie snelheid verhogen" },
        { en: "Reduce computational complexity", es: "Reducir la complejidad computacional", de: "Rechenkomplexität reduzieren", nl: "Computationele complexiteit verminderen" }
      ],
      correct: 0,
      explanation: {
        en: "Quantum error correction protects quantum information from decoherence and other quantum noise, ensuring the integrity of quantum states during computation and communication.",
        es: "La corrección de errores cuánticos protege la información cuántica de la decoherencia y otros ruidos cuánticos, asegurando la integridad de los estados cuánticos durante el cálculo y la comunicación.",
        de: "Quantenfehlerkorrektur schützt Quanteninformation vor Dekohärenz und anderen Quantenrauschen und gewährleistet die Integrität von Quantenzuständen während Berechnung und Kommunikation.",
        nl: "Quantum fout correctie beschermt quantum informatie tegen decoherentie en andere quantum ruis, en zorgt voor de integriteit van quantum toestanden tijdens berekening en communicatie."
      }
    },
    {
      question: {
        en: "Which hash-based post-quantum signature scheme was standardized by NIST?",
        es: "¿Qué esquema de firma post-cuántica basado en hash fue estandarizado por NIST?",
        de: "Welches hash-basierte Post-Quanten-Signaturschema wurde von NIST standardisiert?",
        nl: "Welk hash-gebaseerd post-quantum handtekening schema werd gestandaardiseerd door NIST?"
      },
      options: [
        { en: "XMSS", es: "XMSS", de: "XMSS", nl: "XMSS" },
        { en: "SPHINCS+", es: "SPHINCS+", de: "SPHINCS+", nl: "SPHINCS+" },
        { en: "LMS", es: "LMS", de: "LMS", nl: "LMS" },
        { en: "WOTS+", es: "WOTS+", de: "WOTS+", nl: "WOTS+" }
      ],
      correct: 1,
      explanation: {
        en: "SPHINCS+ was selected by NIST as a standardized hash-based signature scheme for post-quantum cryptography, offering stateless signatures with strong security guarantees.",
        es: "SPHINCS+ fue seleccionado por NIST como un esquema de firma basado en hash estandarizado para criptografía post-cuántica, ofreciendo firmas sin estado con fuertes garantías de seguridad.",
        de: "SPHINCS+ wurde von NIST als standardisiertes hash-basiertes Signaturschema für Post-Quanten-Kryptographie ausgewählt, das zustandslose Signaturen mit starken Sicherheitsgarantien bietet.",
        nl: "SPHINCS+ werd door NIST geselecteerd als een gestandaardiseerd hash-gebaseerd handtekening schema voor post-quantum cryptografie, dat staatloze handtekeningen biedt met sterke beveiligingsgaranties."
      }
    },
    {
      question: {
        en: "What is quantum supremacy in the context of cryptography?",
        es: "¿Qué es la supremacía cuántica en el contexto de la criptografía?",
        de: "Was ist Quantenüberlegenheit im Kontext der Kryptographie?",
        nl: "Wat is quantum suprematie in de context van cryptografie?"
      },
      options: [
        { en: "When quantum computers can break classical encryption", es: "Cuando las computadoras cuánticas pueden romper el cifrado clásico", de: "Wenn Quantencomputer klassische Verschlüsselung brechen können", nl: "Wanneer quantum computers klassieke encryptie kunnen breken" },
        { en: "When quantum computers outperform classical computers", es: "Cuando las computadoras cuánticas superan a las computadoras clásicas", de: "Wenn Quantencomputer klassische Computer übertreffen", nl: "Wanneer quantum computers klassieke computers overtreffen" },
        { en: "When quantum cryptography becomes widely adopted", es: "Cuando la criptografía cuántica se adopta ampliamente", de: "Wenn Quantenkryptographie weit verbreitet wird", nl: "Wanneer quantum cryptografie breed wordt geadopteerd" },
        { en: "When quantum algorithms are proven secure", es: "Cuando los algoritmos cuánticos se prueban seguros", de: "Wenn Quantenalgorithmen als sicher bewiesen werden", nl: "Wanneer quantum algoritmen bewezen veilig zijn" }
      ],
      correct: 1,
      explanation: {
        en: "Quantum supremacy refers to the point where quantum computers can perform certain tasks exponentially faster than the best classical computers, which has implications for breaking current cryptographic systems.",
        es: "La supremacía cuántica se refiere al punto donde las computadoras cuánticas pueden realizar ciertas tareas exponencialmente más rápido que las mejores computadoras clásicas, lo que tiene implicaciones para romper los sistemas criptográficos actuales.",
        de: "Quantenüberlegenheit bezieht sich auf den Punkt, an dem Quantencomputer bestimmte Aufgaben exponentiell schneller ausführen können als die besten klassischen Computer, was Auswirkungen auf das Brechen aktueller kryptographischer Systeme hat.",
        nl: "Quantum suprematie verwijst naar het punt waar quantum computers bepaalde taken exponentieel sneller kunnen uitvoeren dan de beste klassieke computers, wat gevolgen heeft voor het breken van huidige cryptografische systemen."
      }
    },
    {
      question: {
        en: "Which protocol uses quantum entanglement for key distribution?",
        es: "¿Qué protocolo utiliza el entrelazamiento cuántico para la distribución de claves?",
        de: "Welches Protokoll verwendet Quantenverschränkung für die Schlüsselverteilung?",
        nl: "Welk protocol gebruikt quantum verstrengeling voor sleutel distributie?"
      },
      options: [
        { en: "BB84", es: "BB84", de: "BB84", nl: "BB84" },
        { en: "B92", es: "B92", de: "B92", nl: "B92" },
        { en: "E91", es: "E91", de: "E91", nl: "E91" },
        { en: "SARG04", es: "SARG04", de: "SARG04", nl: "SARG04" }
      ],
      correct: 2,
      explanation: {
        en: "E91 (Ekert 1991) uses quantum entanglement between particles to establish a secure key, with security based on Bell's theorem and the violation of Bell inequalities.",
        es: "E91 (Ekert 1991) utiliza el entrelazamiento cuántico entre partículas para establecer una clave segura, con seguridad basada en el teorema de Bell y la violación de las desigualdades de Bell.",
        de: "E91 (Ekert 1991) verwendet Quantenverschränkung zwischen Teilchen, um einen sicheren Schlüssel zu etablieren, mit Sicherheit basierend auf Bells Theorem und der Verletzung von Bell-Ungleichungen.",
        nl: "E91 (Ekert 1991) gebruikt quantum verstrengeling tussen deeltjes om een veilige sleutel tot stand te brengen, met beveiliging gebaseerd op Bell's theorema en de schending van Bell ongelijkheden."
      }
    },
    {
      question: {
        en: "What is the main advantage of isogeny-based cryptography?",
        es: "¿Cuál es la principal ventaja de la criptografía basada en isogenia?",
        de: "Was ist der Hauptvorteil der isogenie-basierten Kryptographie?",
        nl: "Wat is het hoofdvoordeel van isogenie-gebaseerde cryptografie?"
      },
      options: [
        { en: "Small key sizes", es: "Tamaños de clave pequeños", de: "Kleine Schlüsselgrößen", nl: "Kleine sleutel groottes" },
        { en: "Fast computation", es: "Cálculo rápido", de: "Schnelle Berechnung", nl: "Snelle berekening" },
        { en: "Perfect forward secrecy", es: "Secreto perfecto hacia adelante", de: "Perfekte Forward Secrecy", nl: "Perfecte forward secrecy" },
        { en: "Quantum resistance", es: "Resistencia cuántica", de: "Quantenresistenz", nl: "Quantum weerstand" }
      ],
      correct: 0,
      explanation: {
        en: "Isogeny-based cryptography offers relatively small key sizes compared to other post-quantum approaches, making it attractive for resource-constrained environments.",
        es: "La criptografía basada en isogenia ofrece tamaños de clave relativamente pequeños en comparación con otros enfoques post-cuánticos, haciéndola atractiva para entornos con recursos limitados.",
        de: "Isogenie-basierte Kryptographie bietet relativ kleine Schlüsselgrößen im Vergleich zu anderen Post-Quanten-Ansätzen, was sie für ressourcenbeschränkte Umgebungen attraktiv macht.",
        nl: "Isogenie-gebaseerde cryptografie biedt relatief kleine sleutel groottes vergeleken met andere post-quantum benaderingen, waardoor het aantrekkelijk is voor resource-beperkte omgevingen."
      }
    },
    {
      question: {
        en: "Which quantum algorithm poses a threat to elliptic curve cryptography?",
        es: "¿Qué algoritmo cuántico representa una amenaza para la criptografía de curva elíptica?",
        de: "Welcher Quantenalgorithmus stellt eine Bedrohung für die elliptische Kurvenkryptographie dar?",
        nl: "Welk quantum algoritme vormt een bedreiging voor elliptische curve cryptografie?"
      },
      options: [
        { en: "Grover's algorithm", es: "Algoritmo de Grover", de: "Grovers Algorithmus", nl: "Grover's algoritme" },
        { en: "Shor's algorithm", es: "Algoritmo de Shor", de: "Shors Algorithmus", nl: "Shor's algoritme" },
        { en: "Deutsch-Jozsa algorithm", es: "Algoritmo de Deutsch-Jozsa", de: "Deutsch-Jozsa-Algorithmus", nl: "Deutsch-Jozsa algoritme" },
        { en: "Simon's algorithm", es: "Algoritmo de Simon", de: "Simons Algorithmus", nl: "Simon's algoritme" }
      ],
      correct: 1,
      explanation: {
        en: "Shor's algorithm can efficiently solve the elliptic curve discrete logarithm problem, which is the foundation of elliptic curve cryptography's security.",
        es: "El algoritmo de Shor puede resolver eficientemente el problema del logaritmo discreto de curva elíptica, que es la base de la seguridad de la criptografía de curva elíptica.",
        de: "Shors Algorithmus kann das elliptische Kurven-Diskrete-Logarithmus-Problem effizient lösen, das die Grundlage für die Sicherheit der elliptischen Kurvenkryptographie ist.",
        nl: "Shor's algoritme kan het elliptische curve discrete logaritme probleem efficiënt oplossen, wat de basis is van de beveiliging van elliptische curve cryptografie."
      }
    },
    {
      question: {
        en: "What is a quantum random number generator (QRNG)?",
        es: "¿Qué es un generador de números aleatorios cuántico (QRNG)?",
        de: "Was ist ein Quantenzufallszahlengenerator (QRNG)?",
        nl: "Wat is een quantum willekeurige nummer generator (QRNG)?"
      },
      options: [
        { en: "A device that generates truly random numbers using quantum phenomena", es: "Un dispositivo que genera números verdaderamente aleatorios usando fenómenos cuánticos", de: "Ein Gerät, das wirklich zufällige Zahlen mit Quantenphänomenen erzeugt", nl: "Een apparaat dat echt willekeurige nummers genereert met quantum verschijnselen" },
        { en: "A classical pseudorandom number generator", es: "Un generador de números pseudoaleatorios clásico", de: "Ein klassischer Pseudozufallszahlengenerator", nl: "Een klassieke pseudo-willekeurige nummer generator" },
        { en: "A quantum computer for cryptographic operations", es: "Una computadora cuántica para operaciones criptográficas", de: "Ein Quantencomputer für kryptographische Operationen", nl: "Een quantum computer voor cryptografische operaties" },
        { en: "A hash function based on quantum mechanics", es: "Una función hash basada en mecánica cuántica", de: "Eine Hash-Funktion basierend auf Quantenmechanik", nl: "Een hash functie gebaseerd op quantum mechanica" }
      ],
      correct: 0,
      explanation: {
        en: "A QRNG exploits quantum phenomena like photon arrival times or quantum tunneling to generate genuinely random numbers, which are crucial for cryptographic key generation.",
        es: "Un QRNG explota fenómenos cuánticos como tiempos de llegada de fotones o túnel cuántico para generar números genuinamente aleatorios, que son cruciales para la generación de claves criptográficas.",
        de: "Ein QRNG nutzt Quantenphänomene wie Photonenankunftszeiten oder Quantentunneling, um wirklich zufällige Zahlen zu erzeugen, die für die Erzeugung kryptographischer Schlüssel entscheidend sind.",
        nl: "Een QRNG benut quantum verschijnselen zoals foton aankomst tijden of quantum tunneling om echt willekeurige nummers te genereren, die cruciaal zijn voor cryptografische sleutel generatie."
      }
    },
    {
      question: {
        en: "What is the primary challenge in implementing quantum key distribution over long distances?",
        es: "¿Cuál es el principal desafío en la implementación de distribución de claves cuánticas a largas distancias?",
        de: "Was ist die Hauptherausforderung bei der Implementierung von Quantenschlüsselverteilung über große Entfernungen?",
        nl: "Wat is de primaire uitdaging bij het implementeren van quantum sleutel distributie over lange afstanden?"
      },
      options: [
        { en: "Photon loss and decoherence", es: "Pérdida de fotones y decoherencia", de: "Photonenverlust und Dekohärenz", nl: "Foton verlies en decoherentie" },
        { en: "High computational complexity", es: "Alta complejidad computacional", de: "Hohe Rechenkomplexität", nl: "Hoge computationele complexiteit" },
        { en: "Large key sizes", es: "Tamaños de clave grandes", de: "Große Schlüsselgrößen", nl: "Grote sleutel groottes" },
        { en: "Slow transmission rates", es: "Velocidades de transmisión lentas", de: "Langsame Übertragungsraten", nl: "Langzame transmissie snelheden" }
      ],
      correct: 0,
      explanation: {
        en: "Photon loss in optical fibers and environmental decoherence limit the practical range of QKD systems, typically requiring quantum repeaters for long-distance communication.",
        es: "La pérdida de fotones en fibras ópticas y la decoherencia ambiental limitan el alcance práctico de los sistemas QKD, típicamente requiriendo repetidores cuánticos para comunicación de larga distancia.",
        de: "Photonenverlust in optischen Fasern und Umgebungsdekohärenz begrenzen die praktische Reichweite von QKD-Systemen, die typischerweise Quantenrepeater für Langstreckenkommunikation benötigen.",
        nl: "Foton verlies in optische vezels en omgevings decoherentie beperken het praktische bereik van QKD systemen, wat typisch quantum repeaters vereist voor lange afstands communicatie."
      }
    },
    {
      question: {
        en: "Which post-quantum signature scheme is based on multivariate cryptography?",
        es: "¿Qué esquema de firma post-cuántica se basa en criptografía multivariable?",
        de: "Welches Post-Quanten-Signaturschema basiert auf multivariater Kryptographie?",
        nl: "Welk post-quantum handtekening schema is gebaseerd op multivariate cryptografie?"
      },
      options: [
        { en: "FALCON", es: "FALCON", de: "FALCON", nl: "FALCON" },
        { en: "DILITHIUM", es: "DILITHIUM", de: "DILITHIUM", nl: "DILITHIUM" },
        { en: "Rainbow", es: "Rainbow", de: "Rainbow", nl: "Rainbow" },
        { en: "SPHINCS+", es: "SPHINCS+", de: "SPHINCS+", nl: "SPHINCS+" }
      ],
      correct: 2,
      explanation: {
        en: "Rainbow is a multivariate signature scheme that relies on the difficulty of solving systems of multivariate polynomial equations over finite fields.",
        es: "Rainbow es un esquema de firma multivariable que se basa en la dificultad de resolver sistemas de ecuaciones polinómicas multivariables sobre campos finitos.",
        de: "Rainbow ist ein multivariates Signaturschema, das auf der Schwierigkeit beruht, Systeme multivariater Polynomgleichungen über endlichen Körpern zu lösen.",
        nl: "Rainbow is een multivariaat handtekening schema dat vertrouwt op de moeilijkheid van het oplossen van systemen van multivariate polynoom vergelijkingen over eindige velden."
      }
    },
    {
      question: {
        en: "What is quantum teleportation in the context of quantum cryptography?",
        es: "¿Qué es la teletransportación cuántica en el contexto de la criptografía cuántica?",
        de: "Was ist Quantenteleportation im Kontext der Quantenkryptographie?",
        nl: "Wat is quantum teleportatie in de context van quantum cryptografie?"
      },
      options: [
        { en: "Instantaneous transfer of quantum information", es: "Transferencia instantánea de información cuántica", de: "Sofortige Übertragung von Quanteninformation", nl: "Onmiddellijke overdracht van quantum informatie" },
        { en: "Transfer of quantum states using entanglement and classical communication", es: "Transferencia de estados cuánticos usando entrelazamiento y comunicación clásica", de: "Übertragung von Quantenzuständen mittels Verschränkung und klassischer Kommunikation", nl: "Overdracht van quantum toestanden met verstrengeling en klassieke communicatie" },
        { en: "Physical movement of quantum particles", es: "Movimiento físico de partículas cuánticas", de: "Physische Bewegung von Quantenteilchen", nl: "Fysieke beweging van quantum deeltjes" },
        { en: "Duplication of quantum information", es: "Duplicación de información cuántica", de: "Duplikation von Quanteninformation", nl: "Duplicatie van quantum informatie" }
      ],
      correct: 1,
      explanation: {
        en: "Quantum teleportation transfers the quantum state of a particle to another particle using quantum entanglement and classical communication, without physically moving the particle itself.",
        es: "La teletransportación cuántica transfiere el estado cuántico de una partícula a otra partícula usando entrelazamiento cuántico y comunicación clásica, sin mover físicamente la partícula misma.",
        de: "Quantenteleportation überträgt den Quantenzustand eines Teilchens auf ein anderes Teilchen mittels Quantenverschränkung und klassischer Kommunikation, ohne das Teilchen selbst physisch zu bewegen.",
        nl: "Quantum teleportatie draagt de quantum toestand van een deeltje over naar een ander deeltje met quantum verstrengeling en klassieke communicatie, zonder het deeltje zelf fysiek te verplaatsen."
      }
    },
    {
      question: {
        en: "Which quantum-safe encryption algorithm was selected by NIST for standardization?",
        es: "¿Qué algoritmo de cifrado cuántico-seguro fue seleccionado por NIST para estandarización?",
        de: "Welcher quantensichere Verschlüsselungsalgorithmus wurde von NIST zur Standardisierung ausgewählt?",
        nl: "Welk quantum-veilig encryptie algoritme werd door NIST geselecteerd voor standaardisatie?"
      },
      options: [
        { en: "KYBER", es: "KYBER", de: "KYBER", nl: "KYBER" },
        { en: "NTRU", es: "NTRU", de: "NTRU", nl: "NTRU" },
        { en: "SABER", es: "SABER", de: "SABER", nl: "SABER" },
        { en: "FrodoKEM", es: "FrodoKEM", de: "FrodoKEM", nl: "FrodoKEM" }
      ],
      correct: 0,
      explanation: {
        en: "KYBER (now called ML-KEM) was selected by NIST as the standard for quantum-resistant public key encryption and key establishment, based on the learning-with-errors problem.",
        es: "KYBER (ahora llamado ML-KEM) fue seleccionado por NIST como el estándar para cifrado de clave pública resistente a cuánticos y establecimiento de claves, basado en el problema de aprendizaje con errores.",
        de: "KYBER (jetzt ML-KEM genannt) wurde von NIST als Standard für quantenresistente Public-Key-Verschlüsselung und Schlüsseletablierung ausgewählt, basierend auf dem Learning-with-Errors-Problem.",
        nl: "KYBER (nu ML-KEM genoemd) werd door NIST geselecteerd als de standaard voor quantum-resistente publieke sleutel encryptie en sleutel vestiging, gebaseerd op het learning-with-errors probleem."
      }
    },
    {
      question: {
        en: "What is the advantage of Grover's algorithm for symmetric cryptography?",
        es: "¿Cuál es la ventaja del algoritmo de Grover para la criptografía simétrica?",
        de: "Was ist der Vorteil von Grovers Algorithmus für die symmetrische Kryptographie?",
        nl: "Wat is het voordeel van Grover's algoritme voor symmetrische cryptografie?"
      },
      options: [
        { en: "It breaks symmetric encryption completely", es: "Rompe completamente el cifrado simétrico", de: "Es bricht symmetrische Verschlüsselung vollständig", nl: "Het breekt symmetrische encryptie volledig" },
        { en: "It provides quadratic speedup for brute force attacks", es: "Proporciona aceleración cuadrática para ataques de fuerza bruta", de: "Es bietet quadratische Beschleunigung für Brute-Force-Angriffe", nl: "Het biedt kwadratische versnelling voor brute force aanvallen" },
        { en: "It makes symmetric encryption quantum-resistant", es: "Hace que el cifrado simétrico sea resistente a cuánticos", de: "Es macht symmetrische Verschlüsselung quantenresistent", nl: "Het maakt symmetrische encryptie quantum-resistent" },
        { en: "It eliminates the need for keys", es: "Elimina la necesidad de claves", de: "Es eliminiert die Notwendigkeit von Schlüsseln", nl: "Het elimineert de behoefte aan sleutels" }
      ],
      correct: 1,
      explanation: {
        en: "Grover's algorithm provides a quadratic speedup for searching unsorted databases, effectively halving the security level of symmetric ciphers (e.g., AES-128 becomes equivalent to 64-bit security).",
        es: "El algoritmo de Grover proporciona una aceleración cuadrática para buscar bases de datos no ordenadas, reduciendo efectivamente a la mitad el nivel de seguridad de los cifrados simétricos (ej. AES-128 se vuelve equivalente a seguridad de 64 bits).",
        de: "Grovers Algorithmus bietet eine quadratische Beschleunigung für die Suche in unsortierten Datenbanken und halbiert effektiv das Sicherheitsniveau symmetrischer Chiffren (z.B. wird AES-128 zu 64-Bit-Sicherheit äquivalent).",
        nl: "Grover's algoritme biedt een kwadratische versnelling voor het zoeken in ongesorteerde databases, waardoor het beveiligingsniveau van symmetrische ciphers effectief wordt gehalveerd (bijv. AES-128 wordt equivalent aan 64-bit beveiliging)."
      }
    },
    {
      question: {
        en: "What is a quantum repeater?",
        es: "¿Qué es un repetidor cuántico?",
        de: "Was ist ein Quantenrepeater?",
        nl: "Wat is een quantum repeater?"
      },
      options: [
        { en: "A device that amplifies quantum signals", es: "Un dispositivo que amplifica señales cuánticas", de: "Ein Gerät, das Quantensignale verstärkt", nl: "Een apparaat dat quantum signalen versterkt" },
        { en: "A device that extends quantum communication range using entanglement", es: "Un dispositivo que extiende el alcance de comunicación cuántica usando entrelazamiento", de: "Ein Gerät, das die Quantenkommunikationsreichweite mittels Verschränkung erweitert", nl: "Een apparaat dat de quantum communicatie bereik uitbreidt met verstrengeling" },
        { en: "A quantum computer for cryptographic operations", es: "Una computadora cuántica para operaciones criptográficas", de: "Ein Quantencomputer für kryptographische Operationen", nl: "Een quantum computer voor cryptografische operaties" },
        { en: "A classical signal repeater", es: "Un repetidor de señal clásico", de: "Ein klassischer Signalrepeater", nl: "Een klassieke signaal repeater" }
      ],
      correct: 1,
      explanation: {
        en: "A quantum repeater uses quantum entanglement swapping and quantum error correction to extend the range of quantum key distribution beyond the limits imposed by photon loss in optical fibers.",
        es: "Un repetidor cuántico usa intercambio de entrelazamiento cuántico y corrección de errores cuánticos para extender el alcance de la distribución de claves cuánticas más allá de los límites impuestos por la pérdida de fotones en fibras ópticas.",
        de: "Ein Quantenrepeater verwendet Quantenverschränkungsaustausch und Quantenfehlerkorrektur, um die Reichweite der Quantenschlüsselverteilung über die durch Photonenverlust in optischen Fasern auferlegten Grenzen hinaus zu erweitern.",
        nl: "Een quantum repeater gebruikt quantum verstrengeling uitwisseling en quantum fout correctie om het bereik van quantum sleutel distributie uit te breiden voorbij de limieten die opgelegd worden door foton verlies in optische vezels."
      }
    },
    {
      question: {
        en: "Which cryptographic primitive is most affected by quantum attacks?",
        es: "¿Qué primitiva criptográfica se ve más afectada por los ataques cuánticos?",
        de: "Welche kryptographische Primitive ist am meisten von Quantenangriffen betroffen?",
        nl: "Welke cryptografische primitieve wordt het meest beïnvloed door quantum aanvallen?"
      },
      options: [
        { en: "Symmetric encryption", es: "Cifrado simétrico", de: "Symmetrische Verschlüsselung", nl: "Symmetrische encryptie" },
        { en: "Hash functions", es: "Funciones hash", de: "Hash-Funktionen", nl: "Hash functies" },
        { en: "Public key cryptography", es: "Criptografía de clave pública", de: "Public-Key-Kryptographie", nl: "Publieke sleutel cryptografie" },
        { en: "Message authentication codes", es: "Códigos de autenticación de mensaje", de: "Nachrichtenauthentifizierungscodes", nl: "Bericht authenticatie codes" }
      ],
      correct: 2,
      explanation: {
        en: "Public key cryptography is most vulnerable to quantum attacks because Shor's algorithm can efficiently solve the mathematical problems (factoring and discrete logarithms) that these systems rely on.",
        es: "La criptografía de clave pública es más vulnerable a los ataques cuánticos porque el algoritmo de Shor puede resolver eficientemente los problemas matemáticos (factorización y logaritmos discretos) en los que se basan estos sistemas.",
        de: "Public-Key-Kryptographie ist am anfälligsten für Quantenangriffe, weil Shors Algorithmus die mathematischen Probleme (Faktorisierung und diskrete Logarithmen) effizient lösen kann, auf denen diese Systeme basieren.",
        nl: "Publieke sleutel cryptografie is het meest kwetsbaar voor quantum aanvallen omdat Shor's algoritme efficiënt de wiskundige problemen (factorization en discrete logaritmen) kan oplossen waarop deze systemen vertrouwen."
      }
    },
    {
      question: {
        en: "What is the security assumption behind code-based cryptography?",
        es: "¿Cuál es la suposición de seguridad detrás de la criptografía basada en códigos?",
        de: "Was ist die Sicherheitsannahme hinter codebasierter Kryptographie?",
        nl: "Wat is de beveiligings aanname achter code-gebaseerde cryptografie?"
      },
      options: [
        { en: "Difficulty of factoring large integers", es: "Dificultad de factorizar enteros grandes", de: "Schwierigkeit der Faktorisierung großer Ganzzahlen", nl: "Moeilijkheid van het ontbinden van grote gehele getallen" },
        { en: "Difficulty of solving discrete logarithms", es: "Dificultad de resolver logaritmos discretos", de: "Schwierigkeit der Lösung diskreter Logarithmen", nl: "Moeilijkheid van het oplossen van discrete logaritmen" },
        { en: "Difficulty of decoding random linear codes", es: "Dificultad de decodificar códigos lineales aleatorios", de: "Schwierigkeit der Dekodierung zufälliger linearer Codes", nl: "Moeilijkheid van het decoderen van willekeurige lineaire codes" },
        { en: "Difficulty of finding short vectors in lattices", es: "Dificultad de encontrar vectores cortos en retículas", de: "Schwierigkeit kurze Vektoren in Gittern zu finden", nl: "Moeilijkheid van het vinden van korte vectoren in roosters" }
      ],
      correct: 2,
      explanation: {
        en: "Code-based cryptography relies on the difficulty of decoding random linear error-correcting codes, which is believed to be hard even for quantum computers.",
        es: "La criptografía basada en códigos se basa en la dificultad de decodificar códigos lineales de corrección de errores aleatorios, que se cree que es difícil incluso para computadoras cuánticas.",
        de: "Codebasierte Kryptographie beruht auf der Schwierigkeit der Dekodierung zufälliger linearer Fehlerkorrekturcodes, was selbst für Quantencomputer als schwer angenommen wird.",
        nl: "Code-gebaseerde cryptografie vertrouwt op de moeilijkheid van het decoderen van willekeurige lineaire fout-corrigerende codes, wat geloofde wordt moeilijk te zijn zelfs voor quantum computers."
      }
    },
    {
      question: {
        en: "What is quantum key recycling?",
        es: "¿Qué es el reciclaje de claves cuánticas?",
        de: "Was ist Quantenschlüssel-Recycling?",
        nl: "Wat is quantum sleutel recycling?"
      },
      options: [
        { en: "Reusing quantum keys multiple times", es: "Reutilizar claves cuánticas múltiples veces", de: "Mehrfache Wiederverwendung von Quantenschlüsseln", nl: "Hergebruik van quantum sleutels meerdere keren" },
        { en: "Converting classical keys to quantum keys", es: "Convertir claves clásicas a claves cuánticas", de: "Umwandlung klassischer Schlüssel in Quantenschlüssel", nl: "Omzetten van klassieke sleutels naar quantum sleutels" },
        { en: "Extracting additional randomness from partially compromised quantum keys", es: "Extraer aleatoriedad adicional de claves cuánticas parcialmente comprometidas", de: "Gewinnung zusätzlicher Zufälligkeit aus teilweise kompromittierten Quantenschlüsseln", nl: "Het winnen van extra willekeurigheid uit gedeeltelijk gecompromitteerde quantum sleutels" },
        { en: "Generating new quantum keys from old ones", es: "Generar nuevas claves cuánticas a partir de las antiguas", de: "Erzeugung neuer Quantenschlüssel aus alten", nl: "Genereren van nieuwe quantum sleutels uit oude" }
      ],
      correct: 2,
      explanation: {
        en: "Quantum key recycling is a technique to extract additional secure key material from quantum keys that may have been partially compromised during transmission, using privacy amplification methods.",
        es: "El reciclaje de claves cuánticas es una técnica para extraer material de clave seguro adicional de claves cuánticas que pueden haber sido parcialmente comprometidas durante la transmisión, usando métodos de amplificación de privacidad.",
        de: "Quantenschlüssel-Recycling ist eine Technik zur Extraktion zusätzlichen sicheren Schlüsselmaterials aus Quantenschlüsseln, die während der Übertragung teilweise kompromittiert worden sein könnten, unter Verwendung von Privacy-Amplification-Methoden.",
        nl: "Quantum sleutel recycling is een techniek om extra veilig sleutel materiaal te winnen uit quantum sleutels die gedeeltelijk gecompromitteerd kunnen zijn tijdens transmissie, met privacy versterking methoden."
      }
    },
    {
      question: {
        en: "Which post-quantum signature scheme offers the smallest signature sizes?",
        es: "¿Qué esquema de firma post-cuántica ofrece los tamaños de firma más pequeños?",
        de: "Welches Post-Quanten-Signaturschema bietet die kleinsten Signaturgrößen?",
        nl: "Welk post-quantum handtekening schema biedt de kleinste handtekening groottes?"
      },
      options: [
        { en: "DILITHIUM", es: "DILITHIUM", de: "DILITHIUM", nl: "DILITHIUM" },
        { en: "FALCON", es: "FALCON", de: "FALCON", nl: "FALCON" },
        { en: "SPHINCS+", es: "SPHINCS+", de: "SPHINCS+", nl: "SPHINCS+" },
        { en: "Rainbow", es: "Rainbow", de: "Rainbow", nl: "Rainbow" }
      ],
      correct: 1,
      explanation: {
        en: "FALCON offers the smallest signature sizes among NIST-standardized post-quantum signature schemes, based on lattice problems and using the NTRU lattice structure.",
        es: "FALCON ofrece los tamaños de firma más pequeños entre los esquemas de firma post-cuántica estandarizados por NIST, basado en problemas de retícula y usando la estructura de retícula NTRU.",
        de: "FALCON bietet die kleinsten Signaturgrößen unter den von NIST standardisierten Post-Quanten-Signaturschemata, basierend auf Gitterproblemen und unter Verwendung der NTRU-Gitterstruktur.",
        nl: "FALCON biedt de kleinste handtekening groottes onder de NIST-gestandaardiseerde post-quantum handtekening schema's, gebaseerd op rooster problemen en met de NTRU rooster structuur."
      }
    },
    {
      question: {
        en: "What is the main limitation of quantum cryptography compared to classical cryptography?",
        es: "¿Cuál es la principal limitación de la criptografía cuántica en comparación con la criptografía clásica?",
        de: "Was ist die Hauptbeschränkung der Quantenkryptographie im Vergleich zur klassischen Kryptographie?",
        nl: "Wat is de hoofdbeperking van quantum cryptografie vergeleken met klassieke cryptografie?"
      },
      options: [
        { en: "Limited transmission distance and infrastructure requirements", es: "Distancia de transmisión limitada y requisitos de infraestructura", de: "Begrenzte Übertragungsdistanz und Infrastrukturanforderungen", nl: "Beperkte transmissie afstand en infrastructuur vereisten" },
        { en: "Weaker security guarantees", es: "Garantías de seguridad más débiles", de: "Schwächere Sicherheitsgarantien", nl: "Zwakkere beveiligings garanties" },
        { en: "Higher computational complexity", es: "Mayor complejidad computacional", de: "Höhere Rechenkomplexität", nl: "Hogere computationele complexiteit" },
        { en: "Larger key sizes", es: "Tamaños de clave más grandes", de: "Größere Schlüsselgrößen", nl: "Grotere sleutel groottes" }
      ],
      correct: 0,
      explanation: {
        en: "Quantum cryptography is limited by photon loss over distances, requiring specialized infrastructure like quantum repeaters for long-range communication, unlike classical cryptography which works over existing networks.",
        es: "La criptografía cuántica está limitada por la pérdida de fotones a distancias, requiriendo infraestructura especializada como repetidores cuánticos para comunicación de largo alcance, a diferencia de la criptografía clásica que funciona sobre redes existentes.",
        de: "Quantenkryptographie ist durch Photonenverlust über Entfernungen begrenzt und benötigt spezialisierte Infrastruktur wie Quantenrepeater für Langstreckenkommunikation, im Gegensatz zur klassischen Kryptographie, die über bestehende Netzwerke funktioniert.",
        nl: "Quantum cryptografie is beperkt door foton verlies over afstanden, en vereist gespecialiseerde infrastructuur zoals quantum repeaters voor lange afstands communicatie, in tegenstelling tot klassieke cryptografie die werkt over bestaande netwerken."
      }
    },
    {
      question: {
        en: "What is hybrid post-quantum cryptography?",
        es: "¿Qué es la criptografía híbrida post-cuántica?",
        de: "Was ist hybride Post-Quanten-Kryptographie?",
        nl: "Wat is hybride post-quantum cryptografie?"
      },
      options: [
        { en: "Using both classical and quantum computers", es: "Usar tanto computadoras clásicas como cuánticas", de: "Verwendung sowohl klassischer als auch Quantencomputer", nl: "Gebruik van zowel klassieke als quantum computers" },
        { en: "Combining classical and post-quantum algorithms for security", es: "Combinar algoritmos clásicos y post-cuánticos para seguridad", de: "Kombination klassischer und Post-Quanten-Algorithmen für Sicherheit", nl: "Combineren van klassieke en post-quantum algoritmen voor beveiliging" },
        { en: "Mixing symmetric and asymmetric encryption", es: "Mezclar cifrado simétrico y asimétrico", de: "Mischen symmetrischer und asymmetrischer Verschlüsselung", nl: "Mengen van symmetrische en asymmetrische encryptie" },
        { en: "Using multiple post-quantum algorithms together", es: "Usar múltiples algoritmos post-cuánticos juntos", de: "Verwendung mehrerer Post-Quanten-Algorithmen zusammen", nl: "Gebruik van meerdere post-quantum algoritmen samen" }
      ],
      correct: 1,
      explanation: {
        en: "Hybrid post-quantum cryptography combines traditional cryptographic algorithms with post-quantum algorithms to provide security against both classical and quantum attacks during the transition period.",
        es: "La criptografía híbrida post-cuántica combina algoritmos criptográficos tradicionales con algoritmos post-cuánticos para proporcionar seguridad contra ataques tanto clásicos como cuánticos durante el período de transición.",
        de: "Hybride Post-Quanten-Kryptographie kombiniert traditionelle kryptographische Algorithmen mit Post-Quanten-Algorithmen, um Sicherheit gegen sowohl klassische als auch Quantenangriffe während der Übergangszeit zu bieten.",
        nl: "Hybride post-quantum cryptografie combineert traditionele cryptografische algoritmen met post-quantum algoritmen om beveiliging te bieden tegen zowel klassieke als quantum aanvallen tijdens de overgangsperiode."
      }
    },
    {
      question: {
        en: "What is the quantum threat timeline according to current estimates?",
        es: "¿Cuál es la cronología de la amenaza cuántica según las estimaciones actuales?",
        de: "Was ist der Quantenbedrohungszeitplan nach aktuellen Schätzungen?",
        nl: "Wat is de quantum dreiging tijdlijn volgens huidige schattingen?"
      },
      options: [
        { en: "Cryptographically relevant quantum computers exist now", es: "Las computadoras cuánticas criptográficamente relevantes existen ahora", de: "Kryptographisch relevante Quantencomputer existieren jetzt", nl: "Cryptografisch relevante quantum computers bestaan nu" },
        { en: "10-15 years for breaking current encryption", es: "10-15 años para romper el cifrado actual", de: "10-15 Jahre zum Brechen aktueller Verschlüsselung", nl: "10-15 jaar om huidige encryptie te breken" },
        { en: "50+ years for any practical quantum computer", es: "50+ años para cualquier computadora cuántica práctica", de: "50+ Jahre für jeden praktischen Quantencomputer", nl: "50+ jaar voor elke praktische quantum computer" },
        { en: "Quantum computers will never break encryption", es: "Las computadoras cuánticas nunca romperán el cifrado", de: "Quantencomputer werden niemals Verschlüsselung brechen", nl: "Quantum computers zullen nooit encryptie breken" }
      ],
      correct: 1,
      explanation: {
        en: "Current expert estimates suggest that cryptographically relevant quantum computers capable of breaking RSA and ECC may emerge within 10-15 years, driving the urgency for post-quantum cryptography adoption.",
        es: "Las estimaciones actuales de expertos sugieren que las computadoras cuánticas criptográficamente relevantes capaces de romper RSA y ECC pueden emerger dentro de 10-15 años, impulsando la urgencia para la adopción de criptografía post-cuántica.",
        de: "Aktuelle Expertenschätzungen deuten darauf hin, dass kryptographisch relevante Quantencomputer, die RSA und ECC brechen können, innerhalb von 10-15 Jahren entstehen könnten, was die Dringlichkeit für die Einführung von Post-Quanten-Kryptographie verstärkt.",
        nl: "Huidige expert schattingen suggereren dat cryptografisch relevante quantum computers die RSA en ECC kunnen breken binnen 10-15 jaar kunnen ontstaan, wat de urgentie voor post-quantum cryptografie adoptie verhoogt."
      }
    },
    {
      question: {
        en: "What is crypto-agility in the context of post-quantum migration?",
        es: "¿Qué es la cripto-agilidad en el contexto de migración post-cuántica?",
        de: "Was ist Krypto-Agilität im Kontext der Post-Quanten-Migration?",
        nl: "Wat is crypto-wendbaarheid in de context van post-quantum migratie?"
      },
      options: [
        { en: "The ability to quickly switch cryptographic algorithms", es: "La capacidad de cambiar rápidamente algoritmos criptográficos", de: "Die Fähigkeit, kryptographische Algorithmen schnell zu wechseln", nl: "Het vermogen om snel cryptografische algoritmen te wisselen" },
        { en: "Using multiple algorithms simultaneously", es: "Usar múltiples algoritmos simultáneamente", de: "Verwendung mehrerer Algorithmen gleichzeitig", nl: "Gebruik van meerdere algoritmen tegelijkertijd" },
        { en: "Adapting key sizes dynamically", es: "Adaptar tamaños de clave dinámicamente", de: "Schlüsselgrößen dynamisch anpassen", nl: "Sleutel groottes dynamisch aanpassen" },
        { en: "Automatically updating security parameters", es: "Actualizar automáticamente parámetros de seguridad", de: "Automatische Aktualisierung von Sicherheitsparametern", nl: "Automatisch bijwerken van beveiligings parameters" }
      ],
      correct: 0,
      explanation: {
        en: "Crypto-agility is the ability of systems to rapidly transition between different cryptographic algorithms without major architectural changes, crucial for responding to quantum threats and algorithm vulnerabilities.",
        es: "La cripto-agilidad es la capacidad de los sistemas para transicionar rápidamente entre diferentes algoritmos criptográficos sin cambios arquitectónicos mayores, crucial para responder a amenazas cuánticas y vulnerabilidades de algoritmos.",
        de: "Krypto-Agilität ist die Fähigkeit von Systemen, schnell zwischen verschiedenen kryptographischen Algorithmen zu wechseln ohne größere architektonische Änderungen, entscheidend für die Reaktion auf Quantenbedrohungen und Algorithmusverwundbarkeiten.",
        nl: "Crypto-wendbaarheid is het vermogen van systemen om snel over te schakelen tussen verschillende cryptografische algoritmen zonder grote architecturale wijzigingen, cruciaal voor het reageren op quantum dreigingen en algoritme kwetsbaarheden."
      }
    },
    {
      question: {
        en: "Which quantum phenomenon is exploited in quantum coin flipping protocols?",
        es: "¿Qué fenómeno cuántico se explota en los protocolos de lanzamiento de moneda cuántico?",
        de: "Welches Quantenphänomen wird in Quantenmünzwurf-Protokollen ausgenutzt?",
        nl: "Welk quantum verschijnsel wordt benut in quantum munt gooien protocollen?"
      },
      options: [
        { en: "Quantum superposition", es: "Superposición cuántica", de: "Quantenüberlagerung", nl: "Quantum superpositie" },
        { en: "Quantum entanglement", es: "Entrelazamiento cuántico", de: "Quantenverschränkung", nl: "Quantum verstrengeling" },
        { en: "Quantum measurement", es: "Medición cuántica", de: "Quantenmessung", nl: "Quantum meting" },
        { en: "All of the above", es: "Todas las anteriores", de: "Alle oben genannten", nl: "Alle bovenstaande" }
      ],
      correct: 3,
      explanation: {
        en: "Quantum coin flipping protocols exploit multiple quantum phenomena: superposition to create fair random outcomes, entanglement for correlation, and measurement to collapse quantum states into classical results.",
        es: "Los protocolos de lanzamiento de moneda cuántico explotan múltiples fenómenos cuánticos: superposición para crear resultados aleatorios justos, entrelazamiento para correlación, y medición para colapsar estados cuánticos en resultados clásicos.",
        de: "Quantenmünzwurf-Protokolle nutzen mehrere Quantenphänomene: Überlagerung für faire zufällige Ergebnisse, Verschränkung für Korrelation und Messung zum Kollabieren von Quantenzuständen in klassische Ergebnisse.",
        nl: "Quantum munt gooien protocollen benutten meerdere quantum verschijnselen: superpositie voor eerlijke willekeurige uitkomsten, verstrengeling voor correlatie, en meting om quantum toestanden te laten instorten tot klassieke resultaten."
      }
    },
    {
      question: {
        en: "What is the main advantage of stateless hash-based signatures?",
        es: "¿Cuál es la principal ventaja de las firmas basadas en hash sin estado?",
        de: "Was ist der Hauptvorteil zustandsloser hash-basierter Signaturen?",
        nl: "Wat is het hoofdvoordeel van staatloze hash-gebaseerde handtekeningen?"
      },
      options: [
        { en: "No need to maintain state between signatures", es: "No necesidad de mantener estado entre firmas", de: "Keine Notwendigkeit, Zustand zwischen Signaturen zu erhalten", nl: "Geen noodzaak om staat tussen handtekeningen te onderhouden" },
        { en: "Smaller signature sizes", es: "Tamaños de firma más pequeños", de: "Kleinere Signaturgrößen", nl: "Kleinere handtekening groottes" },
        { en: "Faster signature generation", es: "Generación de firma más rápida", de: "Schnellere Signaturgenerierung", nl: "Snellere handtekening generatie" },
        { en: "Better quantum resistance", es: "Mejor resistencia cuántica", de: "Bessere Quantenresistenz", nl: "Betere quantum weerstand" }
      ],
      correct: 0,
      explanation: {
        en: "Stateless hash-based signatures like SPHINCS+ don't require maintaining state information between signatures, eliminating the risk of key reuse and making them safer for distributed systems.",
        es: "Las firmas basadas en hash sin estado como SPHINCS+ no requieren mantener información de estado entre firmas, eliminando el riesgo de reutilización de claves y haciéndolas más seguras para sistemas distribuidos.",
        de: "Zustandslose hash-basierte Signaturen wie SPHINCS+ benötigen keine Zustandsinformationen zwischen Signaturen, wodurch das Risiko der Schlüsselwiederverwendung eliminiert und sie für verteilte Systeme sicherer werden.",
        nl: "Staatloze hash-gebaseerde handtekeningen zoals SPHINCS+ vereisen geen staat informatie tussen handtekeningen, waardoor het risico van sleutel hergebruik wordt geëlimineerd en ze veiliger worden voor gedistribueerde systemen."
      }
    },
    {
      question: {
        en: "What is quantum advantage in cryptanalysis?",
        es: "¿Qué es la ventaja cuántica en criptoanálisis?",
        de: "Was ist Quantenvorteil in der Kryptoanalyse?",
        nl: "Wat is quantum voordeel in cryptanalyse?"
      },
      options: [
        { en: "Using quantum computers to create better encryption", es: "Usar computadoras cuánticas para crear mejor cifrado", de: "Verwendung von Quantencomputern für bessere Verschlüsselung", nl: "Gebruik van quantum computers om betere encryptie te creëren" },
        { en: "Exponential speedup in breaking certain cryptographic schemes", es: "Aceleración exponencial en romper ciertos esquemas criptográficos", de: "Exponentielle Beschleunigung beim Brechen bestimmter kryptographischer Schemata", nl: "Exponentiële versnelling bij het breken van bepaalde cryptografische schema's" },
        { en: "Perfect security against all attacks", es: "Seguridad perfecta contra todos los ataques", de: "Perfekte Sicherheit gegen alle Angriffe", nl: "Perfecte beveiliging tegen alle aanvallen" },
        { en: "Quantum error correction in cryptography", es: "Corrección de errores cuánticos en criptografía", de: "Quantenfehlerkorrektur in der Kryptographie", nl: "Quantum fout correctie in cryptografie" }
      ],
      correct: 1,
      explanation: {
        en: "Quantum advantage in cryptanalysis refers to the exponential speedup quantum computers provide in solving certain mathematical problems that underlie current cryptographic systems, like factoring and discrete logarithms.",
        es: "La ventaja cuántica en criptoanálisis se refiere a la aceleración exponencial que las computadoras cuánticas proporcionan al resolver ciertos problemas matemáticos que subyacen a los sistemas criptográficos actuales, como factorización y logaritmos discretos.",
        de: "Quantenvorteil in der Kryptoanalyse bezieht sich auf die exponentielle Beschleunigung, die Quantencomputer beim Lösen bestimmter mathematischer Probleme bieten, die aktuellen kryptographischen Systemen zugrunde liegen, wie Faktorisierung und diskrete Logarithmen.",
        nl: "Quantum voordeel in cryptanalyse verwijst naar de exponentiële versnelling die quantum computers bieden bij het oplossen van bepaalde wiskundige problemen die ten grondslag liggen aan huidige cryptografische systemen, zoals factorization en discrete logaritmen."
      }
    },
    {
      question: {
        en: "Which parameter is most critical for the security of lattice-based cryptography?",
        es: "¿Qué parámetro es más crítico para la seguridad de la criptografía basada en retículas?",
        de: "Welcher Parameter ist am kritischsten für die Sicherheit gitterbasierter Kryptographie?",
        nl: "Welke parameter is het meest kritiek voor de beveiliging van rooster-gebaseerde cryptografie?"
      },
      options: [
        { en: "Lattice dimension", es: "Dimensión de retícula", de: "Gitterdimension", nl: "Rooster dimensie" },
        { en: "Modulus size", es: "Tamaño del módulo", de: "Modulusgröße", nl: "Modulus grootte" },
        { en: "Error distribution", es: "Distribución de error", de: "Fehlerverteilung", nl: "Fout distributie" },
        { en: "All of the above", es: "Todas las anteriores", de: "Alle oben genannten", nl: "Alle bovenstaande" }
      ],
      correct: 3,
      explanation: {
        en: "The security of lattice-based cryptography depends on all these parameters: lattice dimension affects the problem hardness, modulus size determines the working space, and error distribution controls the noise level in the Learning With Errors problem.",
        es: "La seguridad de la criptografía basada en retículas depende de todos estos parámetros: la dimensión de retícula afecta la dureza del problema, el tamaño del módulo determina el espacio de trabajo, y la distribución de error controla el nivel de ruido en el problema de Aprendizaje con Errores.",
        de: "Die Sicherheit gitterbasierter Kryptographie hängt von all diesen Parametern ab: Gitterdimension beeinflusst die Problemhärte, Modulusgröße bestimmt den Arbeitsraum, und Fehlerverteilung kontrolliert das Rauschpegel im Learning-with-Errors-Problem.",
        nl: "De beveiliging van rooster-gebaseerde cryptografie hangt af van al deze parameters: rooster dimensie beïnvloedt de probleem hardheid, modulus grootte bepaalt de werk ruimte, en fout distributie controleert het ruis niveau in het Learning With Errors probleem."
      }
    },
    {
      question: {
        en: "What is the quantum Fourier transform used for in cryptography?",
        es: "¿Para qué se utiliza la transformada de Fourier cuántica en criptografía?",
        de: "Wofür wird die Quantenfouriertransformation in der Kryptographie verwendet?",
        nl: "Waarvoor wordt de quantum Fourier transformatie gebruikt in cryptografie?"
      },
      options: [
        { en: "Generating quantum random numbers", es: "Generar números aleatorios cuánticos", de: "Erzeugung von Quantenzufallszahlen", nl: "Genereren van quantum willekeurige nummers" },
        { en: "Key component of Shor's algorithm", es: "Componente clave del algoritmo de Shor", de: "Schlüsselkomponente von Shors Algorithmus", nl: "Sleutel component van Shor's algoritme" },
        { en: "Quantum error correction", es: "Corrección de errores cuánticos", de: "Quantenfehlerkorrektur", nl: "Quantum fout correctie" },
        { en: "Quantum key distribution", es: "Distribución de claves cuánticas", de: "Quantenschlüsselverteilung", nl: "Quantum sleutel distributie" }
      ],
      correct: 1,
      explanation: {
        en: "The quantum Fourier transform is a crucial component of Shor's algorithm, used to extract the period of a function, which enables factoring large integers and solving discrete logarithms efficiently.",
        es: "La transformada de Fourier cuántica es un componente crucial del algoritmo de Shor, usado para extraer el período de una función, lo que permite factorizar enteros grandes y resolver logaritmos discretos eficientemente.",
        de: "Die Quantenfouriertransformation ist eine entscheidende Komponente von Shors Algorithmus, verwendet zur Extraktion der Periode einer Funktion, die das effiziente Faktorisieren großer Ganzzahlen und Lösen diskreter Logarithmen ermöglicht.",
        nl: "De quantum Fourier transformatie is een cruciale component van Shor's algoritme, gebruikt om de periode van een functie te extraheren, wat het efficiënt ontbinden van grote gehele getallen en oplossen van discrete logaritmen mogelijk maakt."
      }
    },
    {
      question: {
        en: "What makes multivariate cryptography quantum-resistant?",
        es: "¿Qué hace que la criptografía multivariable sea resistente a cuánticos?",
        de: "Was macht multivariate Kryptographie quantenresistent?",
        nl: "Wat maakt multivariate cryptografie quantum-resistent?"
      },
      options: [
        { en: "It uses quantum mechanics principles", es: "Utiliza principios de mecánica cuántica", de: "Es verwendet Prinzipien der Quantenmechanik", nl: "Het gebruikt quantum mechanica principes" },
        { en: "Solving multivariate polynomial systems remains hard for quantum computers", es: "Resolver sistemas de polinomios multivariables sigue siendo difícil para computadoras cuánticas", de: "Das Lösen multivariater Polynomensysteme bleibt für Quantencomputer schwer", nl: "Het oplossen van multivariate polynoom systemen blijft moeilijk voor quantum computers" },
        { en: "It uses very large key sizes", es: "Utiliza tamaños de clave muy grandes", de: "Es verwendet sehr große Schlüsselgrößen", nl: "Het gebruikt zeer grote sleutel groottes" },
        { en: "It combines multiple encryption algorithms", es: "Combina múltiples algoritmos de cifrado", de: "Es kombiniert mehrere Verschlüsselungsalgorithmen", nl: "Het combineert meerdere encryptie algoritmen" }
      ],
      correct: 1,
      explanation: {
        en: "Multivariate cryptography is quantum-resistant because solving systems of multivariate polynomial equations over finite fields is believed to remain computationally hard even for quantum computers.",
        es: "La criptografía multivariable es resistente a cuánticos porque resolver sistemas de ecuaciones polinómicas multivariables sobre campos finitos se cree que sigue siendo computacionalmente difícil incluso para computadoras cuánticas.",
        de: "Multivariate Kryptographie ist quantenresistent, weil das Lösen von Systemen multivariater Polynomgleichungen über endlichen Körpern auch für Quantencomputer als rechnerisch schwer angenommen wird.",
        nl: "Multivariate cryptografie is quantum-resistent omdat het oplossen van systemen van multivariate polynoom vergelijkingen over eindige velden geloofde wordt computationeel moeilijk te blijven zelfs voor quantum computers."
      }
    },
    {
      question: {
        en: "What is the difference between quantum-safe and quantum-secure cryptography?",
        es: "¿Cuál es la diferencia entre criptografía cuántico-segura y cuántico-protegida?",
        de: "Was ist der Unterschied zwischen quantensicherer und quantensecurer Kryptographie?",
        nl: "Wat is het verschil tussen quantum-veilige en quantum-beveiligde cryptografie?"
      },
      options: [
        { en: "No difference, they are the same", es: "No hay diferencia, son lo mismo", de: "Kein Unterschied, sie sind dasselbe", nl: "Geen verschil, ze zijn hetzelfde" },
        { en: "Quantum-safe resists quantum attacks, quantum-secure uses quantum mechanics", es: "Cuántico-segura resiste ataques cuánticos, cuántico-protegida usa mecánica cuántica", de: "Quantensicher widersteht Quantenangriffen, quantensecure verwendet Quantenmechanik", nl: "Quantum-veilig weerstaat quantum aanvallen, quantum-beveiligd gebruikt quantum mechanica" },
        { en: "Quantum-safe is theoretical, quantum-secure is practical", es: "Cuántico-segura es teórica, cuántico-protegida es práctica", de: "Quantensicher ist theoretisch, quantensecure ist praktisch", nl: "Quantum-veilig is theoretisch, quantum-beveiligd is praktisch" },
        { en: "They refer to different time periods", es: "Se refieren a diferentes períodos de tiempo", de: "Sie beziehen sich auf verschiedene Zeiträume", nl: "Ze verwijzen naar verschillende tijd periodes" }
      ],
      correct: 1,
      explanation: {
        en: "Quantum-safe cryptography refers to classical algorithms that resist quantum attacks (post-quantum cryptography), while quantum-secure cryptography uses quantum mechanics principles like QKD for security.",
        es: "La criptografía cuántico-segura se refiere a algoritmos clásicos que resisten ataques cuánticos (criptografía post-cuántica), mientras que la criptografía cuántico-protegida usa principios de mecánica cuántica como QKD para seguridad.",
        de: "Quantensichere Kryptographie bezieht sich auf klassische Algorithmen, die Quantenangriffen widerstehen (Post-Quanten-Kryptographie), während quantensecure Kryptographie Quantenmechanikprinzipien wie QKD für Sicherheit verwendet.",
        nl: "Quantum-veilige cryptografie verwijst naar klassieke algoritmen die quantum aanvallen weerstaan (post-quantum cryptografie), terwijl quantum-beveiligde cryptografie quantum mechanica principes zoals QKD gebruikt voor beveiliging."
      }
    },
    {
      question: {
        en: "What is the main challenge in implementing post-quantum cryptography in existing systems?",
        es: "¿Cuál es el principal desafío en implementar criptografía post-cuántica en sistemas existentes?",
        de: "Was ist die Hauptherausforderung bei der Implementierung von Post-Quanten-Kryptographie in bestehenden Systemen?",
        nl: "Wat is de grootste uitdaging bij het implementeren van post-quantum cryptografie in bestaande systemen?"
      },
      options: [
        { en: "Lack of mathematical foundation", es: "Falta de fundamento matemático", de: "Mangel an mathematischer Grundlage", nl: "Gebrek aan wiskundige basis" },
        { en: "Larger key sizes and computational overhead", es: "Tamaños de clave más grandes y sobrecarga computacional", de: "Größere Schlüsselgrößen und Rechenaufwand", nl: "Grotere sleutel groottes en computationele overhead" },
        { en: "Incompatibility with internet protocols", es: "Incompatibilidad con protocolos de internet", de: "Inkompatibilität mit Internetprotokollen", nl: "Incompatibiliteit met internet protocollen" },
        { en: "Lack of standardization", es: "Falta de estandarización", de: "Mangel an Standardisierung", nl: "Gebrek aan standaardisatie" }
      ],
      correct: 1,
      explanation: {
        en: "The main challenge is that post-quantum algorithms typically have larger key sizes, signature sizes, and computational requirements compared to current systems, requiring significant infrastructure updates and performance optimization.",
        es: "El principal desafío es que los algoritmos post-cuánticos típicamente tienen tamaños de clave más grandes, tamaños de firma y requisitos computacionales comparados con los sistemas actuales, requiriendo actualizaciones significativas de infraestructura y optimización de rendimiento.",
        de: "Die Hauptherausforderung ist, dass Post-Quanten-Algorithmen typischerweise größere Schlüssel-, Signaturgrößen und Rechenanforderungen im Vergleich zu aktuellen Systemen haben, was erhebliche Infrastruktur-Updates und Leistungsoptimierung erfordert.",
        nl: "De grootste uitdaging is dat post-quantum algoritmen typisch grotere sleutel groottes, handtekening groottes en computationele vereisten hebben vergeleken met huidige systemen, waardoor significante infrastructuur updates en prestatie optimalisatie vereist zijn."
      }
    },
    {
      question: {
        en: "What is quantum-resistant blockchain?",
        es: "¿Qué es blockchain resistente a cuánticos?",
        de: "Was ist quantenresistente Blockchain?",
        nl: "Wat is quantum-resistente blockchain?"
      },
      options: [
        { en: "Blockchain that uses quantum computers for mining", es: "Blockchain que usa computadoras cuánticas para minería", de: "Blockchain, die Quantencomputer für Mining verwendet", nl: "Blockchain die quantum computers gebruikt voor mining" },
        { en: "Blockchain protected against quantum attacks through post-quantum cryptography", es: "Blockchain protegida contra ataques cuánticos mediante criptografía post-cuántica", de: "Blockchain geschützt gegen Quantenangriffe durch Post-Quanten-Kryptographie", nl: "Blockchain beschermd tegen quantum aanvallen door post-quantum cryptografie" },
        { en: "Blockchain that stores quantum information", es: "Blockchain que almacena información cuántica", de: "Blockchain, die Quanteninformation speichert", nl: "Blockchain die quantum informatie opslaat" },
        { en: "Blockchain with quantum error correction", es: "Blockchain con corrección de errores cuánticos", de: "Blockchain mit Quantenfehlerkorrektur", nl: "Blockchain met quantum fout correctie" }
      ],
      correct: 1,
      explanation: {
        en: "Quantum-resistant blockchain refers to blockchain systems that replace vulnerable cryptographic algorithms (like ECDSA) with post-quantum alternatives to protect against future quantum computer attacks.",
        es: "Blockchain resistente a cuánticos se refiere a sistemas blockchain que reemplazan algoritmos criptográficos vulnerables (como ECDSA) con alternativas post-cuánticas para proteger contra futuros ataques de computadoras cuánticas.",
        de: "Quantenresistente Blockchain bezieht sich auf Blockchain-Systeme, die anfällige kryptographische Algorithmen (wie ECDSA) durch Post-Quanten-Alternativen ersetzen, um gegen zukünftige Quantencomputerangriffe zu schützen.",
        nl: "Quantum-resistente blockchain verwijst naar blockchain systemen die kwetsbare cryptografische algoritmen (zoals ECDSA) vervangen met post-quantum alternatieven om te beschermen tegen toekomstige quantum computer aanvallen."
      }
    },
    {
      question: {
        en: "What is the relationship between quantum computing and classical cryptanalysis?",
        es: "¿Cuál es la relación entre computación cuántica y criptoanálisis clásico?",
        de: "Was ist die Beziehung zwischen Quantencomputing und klassischer Kryptoanalyse?",
        nl: "Wat is de relatie tussen quantum computing en klassieke cryptanalyse?"
      },
      options: [
        { en: "They are completely unrelated", es: "Son completamente no relacionadas", de: "Sie sind völlig unabhängig", nl: "Ze zijn volledig ongerelateerd" },
        { en: "Quantum computing makes all classical cryptanalysis obsolete", es: "La computación cuántica hace obsoleto todo el criptoanálisis clásico", de: "Quantencomputing macht alle klassische Kryptoanalyse obsolet", nl: "Quantum computing maakt alle klassieke cryptanalyse overbodig" },
        { en: "Quantum algorithms can provide exponential speedups for certain cryptanalytic problems", es: "Los algoritmos cuánticos pueden proporcionar aceleraciones exponenciales para ciertos problemas criptoanalíticos", de: "Quantenalgorithmen können exponentielle Beschleunigungen für bestimmte kryptoanalytische Probleme bieten", nl: "Quantum algoritmen kunnen exponentiële versnellingen bieden voor bepaalde cryptanalytische problemen" },
        { en: "Classical cryptanalysis is superior to quantum methods", es: "El criptoanálisis clásico es superior a los métodos cuánticos", de: "Klassische Kryptoanalyse ist quantenmethoden überlegen", nl: "Klassieke cryptanalyse is superieur aan quantum methoden" }
      ],
      correct: 2,
      explanation: {
        en: "Quantum computing enhances classical cryptanalysis by providing exponential speedups for specific problems like integer factorization and discrete logarithms, while classical methods remain important for other cryptanalytic tasks.",
        es: "La computación cuántica mejora el criptoanálisis clásico proporcionando aceleraciones exponenciales para problemas específicos como factorización de enteros y logaritmos discretos, mientras que los métodos clásicos siguen siendo importantes para otras tareas criptoanalíticas.",
        de: "Quantencomputing verbessert die klassische Kryptoanalyse durch exponentielle Beschleunigungen für spezifische Probleme wie Ganzzahlfaktorisierung und diskrete Logarithmen, während klassische Methoden für andere kryptoanalytische Aufgaben wichtig bleiben.",
        nl: "Quantum computing verbetert klassieke cryptanalyse door exponentiële versnellingen te bieden voor specifieke problemen zoals gehele getal factorization en discrete logaritmen, terwijl klassieke methoden belangrijk blijven voor andere cryptanalytische taken."
      }
    },
    {
      question: {
        en: "What is the main advantage of isogeny-based cryptography?",
        es: "¿Cuál es la principal ventaja de la criptografía basada en isogenias?",
        de: "Was ist der Hauptvorteil isogeniebasierter Kryptographie?",
        nl: "Wat is het hoofdvoordeel van isogenie-gebaseerde cryptografie?"
      },
      options: [
        { en: "Extremely small key sizes compared to other post-quantum methods", es: "Tamaños de clave extremadamente pequeños comparados con otros métodos post-cuánticos", de: "Extrem kleine Schlüsselgrößen im Vergleich zu anderen Post-Quanten-Methoden", nl: "Extreem kleine sleutel groottes vergeleken met andere post-quantum methoden" },
        { en: "Fastest computation speed", es: "Velocidad de cálculo más rápida", de: "Schnellste Berechnungsgeschwindigkeit", nl: "Snelste reken snelheid" },
        { en: "Perfect forward secrecy by default", es: "Secreto hacia adelante perfecto por defecto", de: "Perfekte Forward Secrecy standardmäßig", nl: "Perfecte forward secrecy standaard" },
        { en: "Immunity to all known attacks", es: "Inmunidad a todos los ataques conocidos", de: "Immunität gegen alle bekannten Angriffe", nl: "Immuniteit tegen alle bekende aanvallen" }
      ],
      correct: 0,
      explanation: {
        en: "Isogeny-based cryptography offers very small key sizes (hundreds of bytes) compared to other post-quantum alternatives like lattice-based systems (thousands of bytes), making it attractive for constrained environments.",
        es: "La criptografía basada en isogenias ofrece tamaños de clave muy pequeños (cientos de bytes) comparados con otras alternativas post-cuánticas como sistemas basados en retículas (miles de bytes), haciéndola atractiva para entornos restringidos.",
        de: "Isogeniebasierte Kryptographie bietet sehr kleine Schlüsselgrößen (Hunderte von Bytes) im Vergleich zu anderen Post-Quanten-Alternativen wie gitterbasierten Systemen (Tausende von Bytes), was sie für eingeschränkte Umgebungen attraktiv macht.",
        nl: "Isogenie-gebaseerde cryptografie biedt zeer kleine sleutel groottes (honderden bytes) vergeleken met andere post-quantum alternatieven zoals rooster-gebaseerde systemen (duizenden bytes), waardoor het aantrekkelijk is voor beperkte omgevingen."
      }
    },
    {
      question: {
        en: "What is the primary security concern with code-based cryptography?",
        es: "¿Cuál es la principal preocupación de seguridad con la criptografía basada en códigos?",
        de: "Was ist das Hauptsicherheitsproblem bei codebasierter Kryptographie?",
        nl: "Wat is de primaire beveiligingszorg bij code-gebaseerde cryptografie?"
      },
      options: [
        { en: "Vulnerability to quantum algorithms", es: "Vulnerabilidad a algoritmos cuánticos", de: "Verwundbarkeit gegenüber Quantenalgorithmen", nl: "Kwetsbaarheid voor quantum algoritmen" },
        { en: "Large public key sizes making implementation challenging", es: "Tamaños grandes de clave pública haciendo la implementación desafiante", de: "Große öffentliche Schlüsselgrößen machen die Implementierung herausfordernd", nl: "Grote publieke sleutel groottes maken implementatie uitdagend" },
        { en: "Slow encryption speed", es: "Velocidad de cifrado lenta", de: "Langsame Verschlüsselungsgeschwindigkeit", nl: "Langzame versleutelings snelheid" },
        { en: "Limited mathematical foundation", es: "Fundamento matemático limitado", de: "Begrenzte mathematische Grundlage", nl: "Beperkte wiskundige basis" }
      ],
      correct: 1,
      explanation: {
        en: "Code-based cryptography suffers from very large public key sizes (often megabytes), making it impractical for many applications despite its strong security foundation based on error-correcting codes.",
        es: "La criptografía basada en códigos sufre de tamaños de clave pública muy grandes (a menudo megabytes), haciéndola impráctica para muchas aplicaciones a pesar de su sólida base de seguridad basada en códigos de corrección de errores.",
        de: "Codebasierte Kryptographie leidet unter sehr großen öffentlichen Schlüsselgrößen (oft Megabytes), was sie für viele Anwendungen unpraktisch macht, trotz ihrer starken Sicherheitsbasis basierend auf fehlerkorrigierenden Codes.",
        nl: "Code-gebaseerde cryptografie lijdt onder zeer grote publieke sleutel groottes (vaak megabytes), waardoor het onpraktisch wordt voor veel toepassingen ondanks zijn sterke beveiligingsbasis gebaseerd op fout-corrigerende codes."
      }
    },
    {
      question: {
        en: "What is quantum key distribution's main theoretical advantage?",
        es: "¿Cuál es la principal ventaja teórica de la distribución cuántica de claves?",
        de: "Was ist der theoretische Hauptvorteil der Quantenschlüsselverteilung?",
        nl: "Wat is het belangrijkste theoretische voordeel van quantum sleutel distributie?"
      },
      options: [
        { en: "Faster key generation than classical methods", es: "Generación de claves más rápida que métodos clásicos", de: "Schnellere Schlüsselgenerierung als klassische Methoden", nl: "Snellere sleutel generatie dan klassieke methoden" },
        { en: "Information-theoretic security based on laws of physics", es: "Seguridad teórica de información basada en leyes de la física", de: "Informationstheoretische Sicherheit basierend auf Gesetzen der Physik", nl: "Informatie-theoretische beveiliging gebaseerd op natuurwetten" },
        { en: "Smaller key sizes than classical systems", es: "Tamaños de clave más pequeños que sistemas clásicos", de: "Kleinere Schlüsselgrößen als klassische Systeme", nl: "Kleinere sleutel groottes dan klassieke systemen" },
        { en: "Compatibility with all existing infrastructure", es: "Compatibilidad con toda la infraestructura existente", de: "Kompatibilität mit der gesamten bestehenden Infrastruktur", nl: "Compatibiliteit met alle bestaande infrastructuur" }
      ],
      correct: 1,
      explanation: {
        en: "QKD's main advantage is that its security is based on fundamental laws of quantum physics rather than computational assumptions, providing information-theoretic security that remains secure even against unlimited computational power.",
        es: "La principal ventaja de QKD es que su seguridad se basa en leyes fundamentales de la física cuántica en lugar de suposiciones computacionales, proporcionando seguridad teórica de información que permanece segura incluso contra poder computacional ilimitado.",
        de: "QKDs Hauptvorteil ist, dass ihre Sicherheit auf fundamentalen Gesetzen der Quantenphysik basiert anstatt auf rechnerischen Annahmen, wodurch informationstheoretische Sicherheit bereitgestellt wird, die auch gegen unbegrenzte Rechenleistung sicher bleibt.",
        nl: "Het hoofdvoordeel van QKD is dat de beveiliging gebaseerd is op fundamentele wetten van de quantum fysica in plaats van computationele aannames, wat informatie-theoretische beveiliging biedt die veilig blijft zelfs tegen onbeperkte rekenkracht."
      }
    },
    {
      question: {
        en: "What is the main challenge in multivariate cryptography?",
        es: "¿Cuál es el principal desafío en la criptografía multivariada?",
        de: "Was ist die Hauptherausforderung in der multivariaten Kryptographie?",
        nl: "Wat is de hoofduitdaging in multivariate cryptografie?"
      },
      options: [
        { en: "Lack of quantum resistance", es: "Falta de resistencia cuántica", de: "Mangel an Quantenresistenz", nl: "Gebrek aan quantum resistentie" },
        { en: "Balancing security with efficiency while avoiding algebraic attacks", es: "Equilibrar seguridad con eficiencia mientras evita ataques algebraicos", de: "Sicherheit mit Effizienz ausbalancieren während algebraische Angriffe vermieden werden", nl: "Beveiliging balanceren met efficiëntie terwijl algebraïsche aanvallen worden vermeden" },
        { en: "Complex mathematical foundation", es: "Fundamento matemático complejo", de: "Komplexe mathematische Grundlage", nl: "Complexe wiskundige basis" },
        { en: "Incompatibility with digital signatures", es: "Incompatibilidad con firmas digitales", de: "Inkompatibilität mit digitalen Signaturen", nl: "Incompatibiliteit met digitale handtekeningen" }
      ],
      correct: 1,
      explanation: {
        en: "Multivariate cryptography faces the challenge of finding the right balance between security parameters and system efficiency while resisting sophisticated algebraic attacks that exploit the polynomial structure.",
        es: "La criptografía multivariada enfrenta el desafío de encontrar el equilibrio correcto entre parámetros de seguridad y eficiencia del sistema mientras resiste ataques algebraicos sofisticados que explotan la estructura polinomial.",
        de: "Multivariate Kryptographie steht vor der Herausforderung, das richtige Gleichgewicht zwischen Sicherheitsparametern und Systemeffizienz zu finden, während sie ausgeklügelten algebraischen Angriffen widersteht, die die Polynomstruktur ausnutzen.",
        nl: "Multivariate cryptografie staat voor de uitdaging het juiste evenwicht te vinden tussen beveiligingsparameters en systeemefficiëntie terwijl het weerstand biedt tegen geavanceerde algebraïsche aanvallen die de polynoom structuur uitbuiten."
      }
    },
    {
      question: {
        en: "What is the main security principle behind hash-based signatures?",
        es: "¿Cuál es el principio de seguridad principal detrás de las firmas basadas en hash?",
        de: "Was ist das Hauptsicherheitsprinzip hinter hash-basierten Signaturen?",
        nl: "Wat is het belangrijkste beveiligingsprincipe achter hash-gebaseerde handtekeningen?"
      },
      options: [
        { en: "Computational difficulty of discrete logarithms", es: "Dificultad computacional de logaritmos discretos", de: "Rechenschwierigkeit diskreter Logarithmen", nl: "Computationele moeilijkheid van discrete logaritmen" },
        { en: "Security relies only on the strength of the underlying hash function", es: "La seguridad depende solo de la fortaleza de la función hash subyacente", de: "Sicherheit beruht nur auf der Stärke der zugrundeliegenden Hash-Funktion", nl: "Beveiliging berust alleen op de sterkte van de onderliggende hash functie" },
        { en: "Elliptic curve mathematics", es: "Matemáticas de curvas elípticas", de: "Elliptische Kurven-Mathematik", nl: "Elliptische curve wiskunde" },
        { en: "Lattice reduction problems", es: "Problemas de reducción de retículas", de: "Gitterreduktionsprobleme", nl: "Rooster reductie problemen" }
      ],
      correct: 1,
      explanation: {
        en: "Hash-based signatures derive their security solely from the cryptographic strength of hash functions, making them quantum-resistant as long as the hash function itself remains secure.",
        es: "Las firmas basadas en hash derivan su seguridad únicamente de la fortaleza criptográfica de las funciones hash, haciéndolas resistentes a cuánticos mientras la función hash misma permanezca segura.",
        de: "Hash-basierte Signaturen leiten ihre Sicherheit ausschließlich von der kryptographischen Stärke der Hash-Funktionen ab, wodurch sie quantenresistent sind, solange die Hash-Funktion selbst sicher bleibt.",
        nl: "Hash-gebaseerde handtekeningen leiden hun beveiliging uitsluitend af van de cryptografische sterkte van hash functies, waardoor ze quantum-resistent zijn zolang de hash functie zelf veilig blijft."
      }
    },
    {
      question: {
        en: "What is the primary vulnerability that quantum computers exploit to break RSA encryption?",
        es: "¿Cuál es la vulnerabilidad principal que las computadoras cuánticas explotan para romper el cifrado RSA?",
        de: "Was ist die hauptsächliche Verwundbarkeit, die Quantencomputer ausnutzen, um RSA-Verschlüsselung zu brechen?",
        nl: "Wat is de primaire kwetsbaarheid die quantumcomputers uitbuiten om RSA versleuteling te breken?"
      },
      options: [
        { en: "Shor's algorithm for efficient integer factorization", es: "Algoritmo de Shor para factorización eficiente de enteros", de: "Shors Algorithmus für effiziente Ganzzahlfaktorisierung", nl: "Shor's algoritme voor efficiënte integer factorisatie" },
        { en: "Grover's algorithm for key search acceleration", es: "Algoritmo de Grover para aceleración de búsqueda de claves", de: "Grovers Algorithmus für Schlüsselsuch-Beschleunigung", nl: "Grover's algoritme voor sleutelzoek versnelling" },
        { en: "Quantum annealing for optimization problems", es: "Recocido cuántico para problemas de optimización", de: "Quantum Annealing für Optimierungsprobleme", nl: "Quantum annealing voor optimalisatieproblemen" },
        { en: "Deutsch-Jozsa algorithm for function analysis", es: "Algoritmo de Deutsch-Jozsa para análisis de funciones", de: "Deutsch-Jozsa-Algorithmus für Funktionsanalyse", nl: "Deutsch-Jozsa algoritme voor functieanalyse" }
      ],
      correct: 0,
      explanation: {
        en: "Shor's algorithm provides exponential speedup for integer factorization on quantum computers, directly breaking the mathematical foundation of RSA encryption which relies on the difficulty of factoring large composite numbers.",
        es: "El algoritmo de Shor proporciona aceleración exponencial para factorización de enteros en computadoras cuánticas, rompiendo directamente la base matemática del cifrado RSA que se basa en la dificultad de factorizar números compuestos grandes.",
        de: "Shors Algorithmus bietet exponentielle Beschleunigung für Ganzzahlfaktorisierung auf Quantencomputern und bricht direkt die mathematische Grundlage der RSA-Verschlüsselung, die auf der Schwierigkeit der Faktorisierung großer zusammengesetzter Zahlen beruht.",
        nl: "Shor's algoritme biedt exponentiële versnelling voor integer factorisatie op quantumcomputers, waardoor de wiskundige basis van RSA versleuteling direct gebroken wordt die berust op de moeilijkheid van het factoriseren van grote samengestelde getallen."
      }
    },
    {
      question: {
        en: "Which post-quantum signature scheme is based on the hardness of finding collisions in multivariate polynomial systems?",
        es: "¿Qué esquema de firma post-cuántico se basa en la dureza de encontrar colisiones en sistemas polinomiales multivariados?",
        de: "Welches Post-Quanten-Signaturschema basiert auf der Schwierigkeit, Kollisionen in multivariaten Polynomialsystemen zu finden?",
        nl: "Welk post-quantum handtekeningschema is gebaseerd op de hardheid van het vinden van botsingen in multivariate polynoom systemen?"
      },
      options: [
        { en: "Multivariate cryptography (e.g., Rainbow, GeMSS)", es: "Criptografía multivariada (ej., Rainbow, GeMSS)", de: "Multivariate Kryptographie (z.B. Rainbow, GeMSS)", nl: "Multivariate cryptografie (bijv. Rainbow, GeMSS)" },
        { en: "Lattice-based schemes (e.g., CRYSTALS-DILITHIUM)", es: "Esquemas basados en retículos (ej., CRYSTALS-DILITHIUM)", de: "Gitterbasierte Schemata (z.B. CRYSTALS-DILITHIUM)", nl: "Rooster-gebaseerde schema's (bijv. CRYSTALS-DILITHIUM)" },
        { en: "Hash-based signatures (e.g., SPHINCS+)", es: "Firmas basadas en hash (ej., SPHINCS+)", de: "Hash-basierte Signaturen (z.B. SPHINCS+)", nl: "Hash-gebaseerde handtekeningen (bijv. SPHINCS+)" },
        { en: "Code-based cryptography (e.g., Classic McEliece)", es: "Criptografía basada en códigos (ej., Classic McEliece)", de: "Codebasierte Kryptographie (z.B. Classic McEliece)", nl: "Code-gebaseerde cryptografie (bijv. Classic McEliece)" }
      ],
      correct: 0,
      explanation: {
        en: "Multivariate cryptography relies on the difficulty of solving systems of multivariate polynomial equations over finite fields, which remains hard even for quantum computers. Examples include Rainbow and GeMSS signature schemes.",
        es: "La criptografía multivariada se basa en la dificultad de resolver sistemas de ecuaciones polinomiales multivariadas sobre campos finitos, que sigue siendo difícil incluso para computadoras cuánticas. Los ejemplos incluyen esquemas de firma Rainbow y GeMSS.",
        de: "Multivariate Kryptographie beruht auf der Schwierigkeit, Systeme multivariater Polynomgleichungen über endlichen Körpern zu lösen, was auch für Quantencomputer schwer bleibt. Beispiele sind Rainbow- und GeMSS-Signaturschemata.",
        nl: "Multivariate cryptografie berust op de moeilijkheid van het oplossen van systemen van multivariate polynoomvergelijkingen over eindige velden, wat moeilijk blijft zelfs voor quantumcomputers. Voorbeelden zijn Rainbow en GeMSS handtekeningschema's."
      }
    },
    {
      question: {
        en: "What is the fundamental limitation of current quantum key distribution systems?",
        es: "¿Cuál es la limitación fundamental de los sistemas actuales de distribución de claves cuánticas?",
        de: "Was ist die grundlegende Begrenzung aktueller Quantenschlüsselverteilungssysteme?",
        nl: "Wat is de fundamentele beperking van huidige quantum sleutel distributie systemen?"
      },
      options: [
        { en: "Limited transmission distance due to photon loss and no quantum repeaters", es: "Distancia de transmisión limitada debido a pérdida de fotones y falta de repetidores cuánticos", de: "Begrenzte Übertragungsentfernung aufgrund von Photonenverlust und fehlenden Quantenrepeatern", nl: "Beperkte transmissieafstand door fotonverlies en geen quantum repeaters" },
        { en: "Vulnerability to quantum computer attacks", es: "Vulnerabilidad a ataques de computadoras cuánticas", de: "Verwundbarkeit gegenüber Quantencomputer-Angriffen", nl: "Kwetsbaarheid voor quantumcomputer aanvallen" },
        { en: "Requirement for specialized quantum-resistant hardware", es: "Requisito de hardware especializado resistente a cuánticos", de: "Erfordernis spezialisierter quantenresistenter Hardware", nl: "Vereiste voor gespecialiseerde quantumresistente hardware" },
        { en: "Incompatibility with existing network protocols", es: "Incompatibilidad con protocolos de red existentes", de: "Inkompatibilität mit bestehenden Netzwerkprotokollen", nl: "Incompatibiliteit met bestaande netwerkprotocollen" }
      ],
      correct: 0,
      explanation: {
        en: "Current QKD systems are limited by photon loss over fiber optic cables and the lack of quantum repeaters, restricting secure key distribution to relatively short distances (typically <200km). Quantum repeaters remain a significant technical challenge.",
        es: "Los sistemas QKD actuales están limitados por la pérdida de fotones en cables de fibra óptica y la falta de repetidores cuánticos, restringiendo la distribución segura de claves a distancias relativamente cortas (típicamente <200km). Los repetidores cuánticos siguen siendo un desafío técnico significativo.",
        de: "Aktuelle QKD-Systeme sind durch Photonenverlust über Glasfaserkabel und das Fehlen von Quantenrepeatern begrenzt, wodurch sichere Schlüsselverteilung auf relativ kurze Entfernungen beschränkt wird (typischerweise <200km). Quantenrepeater bleiben eine erhebliche technische Herausforderung.",
        nl: "Huidige QKD systemen zijn beperkt door fotonverlies over glasvezelkabels en het ontbreken van quantum repeaters, wat veilige sleuteldistributie beperkt tot relatief korte afstanden (typisch <200km). Quantum repeaters blijven een significante technische uitdaging."
      }
    },
    {
      question: {
        en: "Which quantum-resistant key encapsulation mechanism was selected as a NIST standard?",
        es: "¿Qué mecanismo de encapsulación de claves resistente a cuánticos fue seleccionado como estándar NIST?",
        de: "Welcher quantenresistente Schlüssel-Verkapselungsmechanismus wurde als NIST-Standard ausgewählt?",
        nl: "Welk quantumresistent sleutel inkapseling mechanisme werd geselecteerd als NIST standaard?"
      },
      options: [
        { en: "CRYSTALS-KYBER based on Module-LWE", es: "CRYSTALS-KYBER basado en Module-LWE", de: "CRYSTALS-KYBER basierend auf Module-LWE", nl: "CRYSTALS-KYBER gebaseerd op Module-LWE" },
        { en: "SIKE based on supersingular elliptic curves", es: "SIKE basado en curvas elípticas supersingulares", de: "SIKE basierend auf supersingulären elliptischen Kurven", nl: "SIKE gebaseerd op supersingulaire elliptische curves" },
        { en: "Classic McEliece based on error-correcting codes", es: "Classic McEliece basado en códigos de corrección de errores", de: "Classic McEliece basierend auf fehlerkorrigierenden Codes", nl: "Classic McEliece gebaseerd op foutcorrigerende codes" },
        { en: "NTRU based on polynomial lattices", es: "NTRU basado en retículos polinomiales", de: "NTRU basierend auf Polynomgittern", nl: "NTRU gebaseerd op polynoom roosters" }
      ],
      correct: 0,
      explanation: {
        en: "CRYSTALS-KYBER, based on the Module Learning With Errors (Module-LWE) problem, was selected by NIST as the standard for post-quantum key encapsulation due to its strong security properties and efficient implementation.",
        es: "CRYSTALS-KYBER, basado en el problema Module Learning With Errors (Module-LWE), fue seleccionado por NIST como el estándar para encapsulación de claves post-cuántica debido a sus fuertes propiedades de seguridad e implementación eficiente.",
        de: "CRYSTALS-KYBER, basierend auf dem Module Learning With Errors (Module-LWE) Problem, wurde von NIST als Standard für Post-Quanten-Schlüsselverkapselung ausgewählt aufgrund seiner starken Sicherheitseigenschaften und effizienten Implementierung.",
        nl: "CRYSTALS-KYBER, gebaseerd op het Module Learning With Errors (Module-LWE) probleem, werd door NIST geselecteerd als de standaard voor post-quantum sleutel inkapseling vanwege zijn sterke beveiligingseigenschappen en efficiënte implementatie."
      }
    },
    {
      question: {
        en: "What is the primary advantage of isogeny-based cryptography over lattice-based approaches?",
        es: "¿Cuál es la ventaja principal de la criptografía basada en isogenias sobre los enfoques basados en retículos?",
        de: "Was ist der Hauptvorteil der isogenie-basierten Kryptographie gegenüber gitterbasierten Ansätzen?",
        nl: "Wat is het belangrijkste voordeel van isogenie-gebaseerde cryptografie ten opzichte van rooster-gebaseerde benaderingen?"
      },
      options: [
        { en: "Significantly smaller key sizes for equivalent security levels", es: "Tamaños de clave significativamente más pequeños para niveles de seguridad equivalentes", de: "Erheblich kleinere Schlüssselgrößen für äquivalente Sicherheitsstufen", nl: "Significant kleinere sleutelgroottes voor equivalente beveiligingsniveaus" },
        { en: "Faster encryption and decryption operations", es: "Operaciones de cifrado y descifrado más rápidas", de: "Schnellere Verschlüsselungs- und Entschlüsselungsoperationen", nl: "Snellere versleutelings- en ontcijferingsoperaties" },
        { en: "Better resistance to side-channel attacks", es: "Mejor resistencia a ataques de canal lateral", de: "Bessere Resistenz gegen Seitenkanal-Angriffe", nl: "Betere weerstand tegen side-channel aanvallen" },
        { en: "Native support for homomorphic encryption", es: "Soporte nativo para cifrado homomorfó", de: "Native Unterstützung für homomorphe Verschlüsselung", nl: "Native ondersteuning voor homomorfische versleuteling" }
      ],
      correct: 0,
      explanation: {
        en: "Isogeny-based cryptography (like SIKE, though recently broken) offered much smaller key sizes compared to lattice-based schemes, making them attractive for bandwidth-constrained applications, though security concerns have limited their adoption.",
        es: "La criptografía basada en isogenias (como SIKE, aunque recientemente rota) ofrecía tamaños de clave mucho más pequeños comparados con esquemas basados en retículos, haciéndolos atractivos para aplicaciones con restricciones de ancho de banda, aunque preocupaciones de seguridad han limitado su adopción.",
        de: "Isogenie-basierte Kryptographie (wie SIKE, obwohl kürzlich gebrochen) bot viel kleinere Schlüssselgrößen im Vergleich zu gitterbasierten Schemata, wodurch sie für bandbreitenbeschränkte Anwendungen attraktiv wurden, obwohl Sicherheitsbedenken ihre Akzeptanz begrenzt haben.",
        nl: "Isogenie-gebaseerde cryptografie (zoals SIKE, hoewel recent gebroken) bood veel kleinere sleutelgroottes vergeleken met rooster-gebaseerde schema's, waardoor ze aantrekkelijk waren voor bandbreedte-beperkte toepassingen, hoewel beveiligingszorgen hun adoptie hebben beperkt."
      }
    },
    {
      question: {
        en: "What is the main security assumption underlying the NTRU cryptosystem?",
        es: "¿Cuál es la asunción de seguridad principal que subyace al criptosistema NTRU?",
        de: "Was ist die hauptsächliche Sicherheitsannahme des NTRU-Kryptosystems?",
        nl: "Wat is de belangrijkste beveiligingsaanname die ten grondslag ligt aan het NTRU cryptosysteem?"
      },
      options: [
        { en: "Shortest Vector Problem (SVP) in polynomial rings", es: "Problema del Vector Más Corto (SVP) en anillos polinomiales", de: "Shortest Vector Problem (SVP) in Polynomringen", nl: "Kortste Vector Probleem (SVP) in polynoomringen" },
        { en: "Discrete logarithm problem in polynomial fields", es: "Problema del logaritmo discreto en campos polinomiales", de: "Diskretes Logarithmusproblem in Polynomfeldern", nl: "Discreet logaritme probleem in polynoomvelden" },
        { en: "Integer factorization of composite polynomials", es: "Factorización entera de polinomios compuestos", de: "Ganzzahlfaktorisierung zusammengesetzter Polynome", nl: "Integer factorisatie van samengestelde polynomen" },
        { en: "Elliptic curve discrete logarithm hardness", es: "Dureza del logaritmo discreto de curva elíptica", de: "Härte des diskreten Logarithmus auf elliptischen Kurven", nl: "Elliptische curve discreet logaritme hardheid" }
      ],
      correct: 0,
      explanation: {
        en: "NTRU is based on the difficulty of finding short vectors in polynomial ring lattices. The security relies on the Shortest Vector Problem (SVP) and Closest Vector Problem (CVP) in these specialized lattice structures.",
        es: "NTRU se basa en la dificultad de encontrar vectores cortos en retículos de anillos polinomiales. La seguridad se basa en el Problema del Vector Más Corto (SVP) y el Problema del Vector Más Cercano (CVP) en estas estructuras de retículo especializadas.",
        de: "NTRU basiert auf der Schwierigkeit, kurze Vektoren in Polynomring-Gittern zu finden. Die Sicherheit beruht auf dem Shortest Vector Problem (SVP) und Closest Vector Problem (CVP) in diesen spezialisierten Gitterstrukturen.",
        nl: "NTRU is gebaseerd op de moeilijkheid van het vinden van korte vectoren in polynoomring roosters. De beveiliging berust op het Kortste Vector Probleem (SVP) en Dichtste Vector Probleem (CVP) in deze gespecialiseerde roosterstructuren."
      }
    },
    {
      question: {
        en: "Which quantum algorithm poses the greatest threat to elliptic curve cryptography?",
        es: "¿Qué algoritmo cuántico plantea la mayor amenaza para la criptografía de curva elíptica?",
        de: "Welcher Quantenalgorithmus stellt die größte Bedrohung für elliptische Kurvenkryptographie dar?",
        nl: "Welk quantum algoritme vormt de grootste bedreiging voor elliptische curve cryptografie?"
      },
      options: [
        { en: "Modified Shor's algorithm for elliptic curve discrete logarithms", es: "Algoritmo de Shor modificado para logaritmos discretos de curvas elípticas", de: "Modifizierter Shor-Algorithmus für elliptische Kurven-Logarithmen", nl: "Gemodificeerd Shor's algoritme voor elliptische curve discrete logaritmen" },
        { en: "Grover's algorithm for brute force key search", es: "Algoritmo de Grover para búsqueda de claves por fuerza bruta", de: "Grovers Algorithmus für Brute-Force-Schlüsselsuche", nl: "Grover's algoritme voor brute force sleutelzoeken" },
        { en: "Simon's algorithm for period finding", es: "Algoritmo de Simon para encontrar períodos", de: "Simons Algorithmus für Periodenfindung", nl: "Simon's algoritme voor periode vinding" },
        { en: "Quantum annealing for optimization problems", es: "Recocido cuántico para problemas de optimización", de: "Quantum Annealing für Optimierungsprobleme", nl: "Quantum annealing voor optimalisatieproblemen" }
      ],
      correct: 0,
      explanation: {
        en: "A modified version of Shor's algorithm can solve the elliptic curve discrete logarithm problem efficiently on quantum computers, completely breaking the security foundation of elliptic curve cryptography (ECC).",
        es: "Una versión modificada del algoritmo de Shor puede resolver el problema del logaritmo discreto de curva elíptica eficientemente en computadoras cuánticas, rompiendo completamente la base de seguridad de la criptografía de curva elíptica (ECC).",
        de: "Eine modifizierte Version von Shors Algorithmus kann das elliptische Kurven-Diskrete-Logarithmus-Problem effizient auf Quantencomputern lösen und bricht dabei vollständig die Sicherheitsgrundlage der elliptischen Kurvenkryptographie (ECC).",
        nl: "Een gemodificeerde versie van Shor's algoritme kan het elliptische curve discrete logaritme probleem efficiënt oplossen op quantumcomputers, waardoor de beveiligingsbasis van elliptische curve cryptografie (ECC) volledig wordt gebroken."
      }
    },
    {
      question: {
        en: "What is the primary challenge in implementing quantum-safe migration strategies?",
        es: "¿Cuál es el desafío principal en implementar estrategias de migración seguras cuánticas?",
        de: "Was ist die hauptsächliche Herausforderung bei der Implementierung quantensicherer Migrationsstrategien?",
        nl: "Wat is de primaire uitdaging bij het implementeren van quantum-veilige migratie strategieën?"
      },
      options: [
        { en: "Hybrid security during transition period and performance overhead", es: "Seguridad híbrida durante período de transición y sobrecarga de rendimiento", de: "Hybrid-Sicherheit während der Übergangszeit und Leistungs-Overhead", nl: "Hybride beveiliging tijdens transitieperiode en prestatie overhead" },
        { en: "Lack of standardized post-quantum algorithms", es: "Falta de algoritmos post-cuánticos estandarizados", de: "Mangel an standardisierten Post-Quanten-Algorithmen", nl: "Gebrek aan gestandaardiseerde post-quantum algoritmen" },
        { en: "Incompatibility with existing hardware infrastructure", es: "Incompatibilidad con infraestructura de hardware existente", de: "Inkompatibilität mit bestehender Hardware-Infrastruktur", nl: "Incompatibiliteit met bestaande hardware infrastructuur" },
        { en: "Legal and regulatory compliance requirements", es: "Requisitos de cumplimiento legal y regulatorio", de: "Rechtliche und regulatorische Compliance-Anforderungen", nl: "Juridische en regelgevings compliance vereisten" }
      ],
      correct: 0,
      explanation: {
        en: "The main challenge is maintaining security during the transition period when both classical and post-quantum systems must coexist, while managing the significant performance overhead of current post-quantum algorithms and ensuring interoperability.",
        es: "El principal desafío es mantener la seguridad durante el período de transición cuando tanto los sistemas clásicos como los post-cuánticos deben coexistir, mientras se gestiona la sobrecarga significativa de rendimiento de los algoritmos post-cuánticos actuales y se asegura la interoperabilidad.",
        de: "Die Hauptherausforderung besteht darin, die Sicherheit während der Übergangszeit aufrechtzuerhalten, wenn sowohl klassische als auch Post-Quanten-Systeme koexistieren müssen, während der erhebliche Leistungs-Overhead aktueller Post-Quanten-Algorithmen verwaltet und Interoperabilität gewährleistet wird.",
        nl: "De hoofduitdaging is het handhaven van beveiliging tijdens de transitieperiode wanneer zowel klassieke als post-quantum systemen moeten samenstaan, terwijl de significante prestatie overhead van huidige post-quantum algoritmen wordt beheerd en interoperabiliteit wordt gewaarborgd."
      }
    },
    {
      question: {
        en: "Which property makes quantum entanglement useful for cryptographic applications beyond key distribution?",
        es: "¿Qué propiedad hace que el entrelazamiento cuántico sea útil para aplicaciones criptográficas más allá de la distribución de claves?",
        de: "Welche Eigenschaft macht Quantenverschränkung für kryptographische Anwendungen über die Schlüsselverteilung hinaus nützlich?",
        nl: "Welke eigenschap maakt quantum verstrengeling nuttig voor cryptografische toepassingen voorbij sleutel distributie?"
      },
      options: [
        { en: "Non-local correlations enabling secure multi-party computation protocols", es: "Correlaciones no locales habilitando protocolos de computación multi-partidaria segura", de: "Nicht-lokale Korrelationen ermöglichen sichere Mehrparteien-Berechnungsprotokolle", nl: "Niet-lokale correlaties die veilige multi-partij berekening protocollen mogelijk maken" },
        { en: "Faster computation through quantum parallelism", es: "Computación más rápida a través de paralelismo cuántico", de: "Schnellere Berechnung durch Quantenparallelismus", nl: "Snellere berekening door quantum parallelisme" },
        { en: "Perfect random number generation capabilities", es: "Capacidades de generación de números aleatorios perfectos", de: "Perfekte Zufallszahlengenerierungsfähigkeiten", nl: "Perfecte willekeurige nummer generatie capaciteiten" },
        { en: "Quantum error correction for noisy channels", es: "Corrección de errores cuánticos para canales ruidosos", de: "Quantenfehlerkorrektur für rauschende Kanäle", nl: "Quantum fout correctie voor ruisende kanalen" }
      ],
      correct: 0,
      explanation: {
        en: "Quantum entanglement enables non-local correlations that can be used in secure multi-party computation, quantum secret sharing, and Byzantine agreement protocols, providing security guarantees that are impossible with classical systems.",
        es: "El entrelazamiento cuántico habilita correlaciones no locales que pueden usarse en computación multi-partidaria segura, compartimiento de secretos cuánticos y protocolos de acuerdo bizantino, proporcionando garantías de seguridad que son imposibles con sistemas clásicos.",
        de: "Quantenverschränkung ermöglicht nicht-lokale Korrelationen, die in sicherer Mehrparteien-Berechnung, quantenem Secret Sharing und byzantinischen Einigungsprotokollen verwendet werden können und Sicherheitsgarantien bieten, die mit klassischen Systemen unmöglich sind.",
        nl: "Quantum verstrengeling maakt niet-lokale correlaties mogelijk die gebruikt kunnen worden in veilige multi-partij berekening, quantum secret sharing, en Byzantijnse overeenstemming protocollen, wat beveiligingsgaranties biedt die onmogelijk zijn met klassieke systemen."
      }
    },
    {
      question: {
        en: "What is the fundamental trade-off in code-based post-quantum cryptography?",
        es: "¿Cuál es el intercambio fundamental en la criptografía post-cuántica basada en códigos?",
        de: "Was ist der grundlegende Kompromiss in codebasierter Post-Quanten-Kryptographie?",
        nl: "Wat is de fundamentele afweging in code-gebaseerde post-quantum cryptografie?"
      },
      options: [
        { en: "Very large public key sizes versus strong security guarantees", es: "Tamaños de clave pública muy grandes versus garantías de seguridad fuertes", de: "Sehr große öffentliche Schlüssselgrößen versus starke Sicherheitsgarantien", nl: "Zeer grote openbare sleutelgroottes versus sterke beveiligingsgaranties" },
        { en: "Fast encryption speed versus slow decryption operations", es: "Velocidad de cifrado rápida versus operaciones de descifrado lentas", de: "Schnelle Verschlüsselungsgeschwindigkeit versus langsame Entschlüsselungsoperationen", nl: "Snelle versleutelingssnelheid versus langzame ontcijferingsoperaties" },
        { en: "Quantum resistance versus classical vulnerability", es: "Resistencia cuántica versus vulnerabilidad clásica", de: "Quantenresistenz versus klassische Verwundbarkeit", nl: "Quantum weerstand versus klassieke kwetsbaarheid" },
        { en: "Perfect forward secrecy versus computational efficiency", es: "Secreto perfecto hacia adelante versus eficiencia computacional", de: "Perfekte Vorwärtssicherheit versus rechnerische Effizienz", nl: "Perfecte voorwaartse geheimhouding versus computationele efficiëntie" }
      ],
      correct: 0,
      explanation: {
        en: "Code-based cryptography like Classic McEliece offers excellent security based on well-studied NP-hard problems, but suffers from extremely large public key sizes (often hundreds of KB to several MB), making it impractical for many applications despite strong security.",
        es: "La criptografía basada en códigos como Classic McEliece ofrece excelente seguridad basada en problemas NP-duros bien estudiados, pero sufre de tamaños de clave pública extremadamente grandes (a menudo cientos de KB a varios MB), haciéndola impráctica para muchas aplicaciones a pesar de la seguridad fuerte.",
        de: "Codebasierte Kryptographie wie Classic McEliece bietet ausgezeichnete Sicherheit basierend auf gut untersuchten NP-harten Problemen, leidet aber unter extrem großen öffentlichen Schlüssselgrößen (oft hunderte KB bis mehrere MB), wodurch sie trotz starker Sicherheit für viele Anwendungen unpraktisch wird.",
        nl: "Code-gebaseerde cryptografie zoals Classic McEliece biedt uitstekende beveiliging gebaseerd op goed bestudeerde NP-harde problemen, maar lijdt onder extreem grote openbare sleutelgroottes (vaak honderden KB tot verschillende MB), waardoor het ondanks sterke beveiliging onpraktisch wordt voor veel toepassingen."
      }
    }
  ]
});
