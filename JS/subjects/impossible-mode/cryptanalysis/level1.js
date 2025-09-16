// Cryptanalysis - Level 1: Advanced Code Breaking & Cryptographic Attacks
(function() {
  const level1 = {
    name: {
      en: "Advanced Code Breaking & Cryptographic Attacks",
      es: "Descifrado Avanzado y Ataques Criptográficos",
      de: "Erweiterte Codeentschlüsselung und Kryptographische Angriffe",
      nl: "Geavanceerd Codebreken en Cryptografische Aanvallen"
    },
    questions: [
      {
        question: {
          en: "What is the fundamental principle behind differential cryptanalysis?",
          es: "¿Cuál es el principio fundamental detrás del criptoanálisis diferencial?",
          de: "Was ist das Grundprinzip der differentiellen Kryptanalyse?",
          nl: "Wat is het fundamentele principe achter differentiële cryptanalyse?"
        },
        options: [
          { en: "Analyzing patterns in plaintext-ciphertext pairs with specific differences", es: "Analizar patrones en pares de texto plano-texto cifrado con diferencias específicas", de: "Analyse von Mustern in Klartext-Chiffretext-Paaren mit spezifischen Unterschieden", nl: "Analyseren van patronen in platte tekst-cijfertekst paren met specifieke verschillen" },
          { en: "Breaking codes using frequency analysis", es: "Romper códigos usando análisis de frecuencia", de: "Codeknacken mittels Häufigkeitsanalyse", nl: "Codes breken met frequentieanalyse" },
          { en: "Using quantum computers to factor large numbers", es: "Usar computadoras cuánticas para factorizar números grandes", de: "Quantencomputer zur Faktorisierung großer Zahlen verwenden", nl: "Quantumcomputers gebruiken om grote getallen te ontbinden" },
          { en: "Exploiting timing variations in cryptographic operations", es: "Explotar variaciones de tiempo en operaciones criptográficas", de: "Zeitvariationen in kryptographischen Operationen ausnutzen", nl: "Tijdsvariaties in cryptografische operaties uitbuiten" }
        ],
        correct: 0,
        explanation: {
          en: "Differential cryptanalysis studies how differences in plaintext inputs propagate through the encryption algorithm to create predictable patterns in the ciphertext differences, allowing attackers to recover key information.",
          es: "El criptoanálisis diferencial estudia cómo las diferencias en las entradas de texto plano se propagan a través del algoritmo de cifrado para crear patrones predecibles en las diferencias del texto cifrado, permitiendo a los atacantes recuperar información de la clave.",
          de: "Die differentielle Kryptanalyse untersucht, wie sich Unterschiede in Klartexteingaben durch den Verschlüsselungsalgorithmus fortpflanzen, um vorhersagbare Muster in den Chiffretextunterschieden zu erzeugen, wodurch Angreifer Schlüsselinformationen wiederherstellen können.",
          nl: "Differentiële cryptanalyse bestudeert hoe verschillen in platte tekst inputs zich door het versleutelingsalgoritme verspreiden om voorspelbare patronen te creëren in de cijfertekst verschillen, waardoor aanvallers sleutelinformatie kunnen herstellen."
        }
      },
      {
        question: {
          en: "In RSA cryptanalysis, what is the significance of finding the greatest common divisor (GCD) of two moduli?",
          es: "En el criptoanálisis RSA, ¿cuál es la importancia de encontrar el máximo común divisor (MCD) de dos módulos?",
          de: "Was ist in der RSA-Kryptanalyse die Bedeutung des größten gemeinsamen Teilers (GGT) zweier Moduln?",
          nl: "Wat is in RSA cryptanalyse de betekenis van het vinden van de grootste gemene deler (GGD) van twee moduli?"
        },
        options: [
          { en: "It reveals a common prime factor, compromising both keys", es: "Revela un factor primo común, comprometiendo ambas claves", de: "Es enthüllt einen gemeinsamen Primfaktor und kompromittiert beide Schlüssel", nl: "Het onthult een gemeenschappelijke priemfactor, wat beide sleutels compromitteert" },
          { en: "It provides the private key directly", es: "Proporciona la clave privada directamente", de: "Es liefert den privaten Schlüssel direkt", nl: "Het levert de private sleutel direct op" },
          { en: "It allows brute force attacks", es: "Permite ataques de fuerza bruta", de: "Es ermöglicht Brute-Force-Angriffe", nl: "Het maakt brute force aanvallen mogelijk" },
          { en: "It breaks the digital signature", es: "Rompe la firma digital", de: "Es bricht die digitale Signatur", nl: "Het breekt de digitale handtekening" }
        ],
        correct: 0,
        explanation: {
          en: "When two RSA moduli share a common prime factor, their GCD reveals that factor. Since each modulus n = p×q, knowing one prime allows easy factorization of the modulus, completely breaking the RSA system by revealing both private keys.",
          es: "Cuando dos módulos RSA comparten un factor primo común, su MCD revela ese factor. Dado que cada módulo n = p×q, conocer un primo permite la factorización fácil del módulo, rompiendo completamente el sistema RSA al revelar ambas claves privadas.",
          de: "Wenn zwei RSA-Moduln einen gemeinsamen Primfaktor teilen, enthüllt ihr GGT diesen Faktor. Da jeder Modul n = p×q ist, ermöglicht die Kenntnis einer Primzahl die einfache Faktorisierung des Moduls und bricht das RSA-System vollständig, indem beide privaten Schlüssel preisgegeben werden.",
          nl: "Wanneer twee RSA moduli een gemeenschappelijke priemfactor delen, onthult hun GGD die factor. Omdat elke modulus n = p×q is, maakt het kennen van één priemgetal eenvoudige factorisatie van de modulus mogelijk, wat het RSA systeem volledig breekt door beide private sleutels te onthullen."
        }
      },
      {
        question: {
          en: "What is a timing attack in cryptanalysis?",
          es: "¿Qué es un ataque de temporización en criptoanálisis?",
          de: "Was ist ein Timing-Angriff in der Kryptanalyse?",
          nl: "Wat is een timing aanval in cryptanalyse?"
        },
        options: [
          { en: "Exploiting variations in execution time to extract secret information", es: "Explotar variaciones en el tiempo de ejecución para extraer información secreta", de: "Ausnutzung von Variationen in der Ausführungszeit zur Gewinnung geheimer Informationen", nl: "Uitbuiten van variaties in uitvoeringstijd om geheime informatie te extraheren" },
          { en: "Attacking systems during specific time periods", es: "Atacar sistemas durante períodos de tiempo específicos", de: "Systeme zu bestimmten Zeiten angreifen", nl: "Systemen aanvallen tijdens specifieke tijdsperiodes" },
          { en: "Synchronizing multiple attacks simultaneously", es: "Sincronizar múltiples ataques simultáneamente", de: "Mehrere Angriffe gleichzeitig synchronisieren", nl: "Meerdere aanvallen gelijktijdig synchroniseren" },
          { en: "Breaking time-based encryption protocols", es: "Romper protocolos de cifrado basados en tiempo", de: "Zeitbasierte Verschlüsselungsprotokolle brechen", nl: "Tijdgebaseerde versleutelingsprotocollen breken" }
        ],
        correct: 0,
        explanation: {
          en: "Timing attacks exploit the fact that cryptographic operations may take different amounts of time depending on the input data or secret keys. By measuring these timing variations, attackers can deduce information about the secret key without directly accessing it.",
          es: "Los ataques de temporización explotan el hecho de que las operaciones criptográficas pueden tomar diferentes cantidades de tiempo dependiendo de los datos de entrada o claves secretas. Al medir estas variaciones de tiempo, los atacantes pueden deducir información sobre la clave secreta sin acceder directamente a ella.",
          de: "Timing-Angriffe nutzen die Tatsache aus, dass kryptographische Operationen je nach Eingabedaten oder geheimen Schlüsseln unterschiedlich lange dauern können. Durch Messung dieser Zeitvariationen können Angreifer Informationen über den geheimen Schlüssel ableiten, ohne direkt darauf zuzugreifen.",
          nl: "Timing aanvallen maken gebruik van het feit dat cryptografische operaties verschillende hoeveelheden tijd kunnen kosten afhankelijk van de invoergegevens of geheime sleutels. Door deze tijdsvariaties te meten, kunnen aanvallers informatie over de geheime sleutel afleiden zonder er direct toegang toe te hebben."
        }
      },
      {
        question: {
          en: "What is linear cryptanalysis primarily used to attack?",
          es: "¿Qué se usa principalmente para atacar el criptoanálisis lineal?",
          de: "Was wird hauptsächlich mit linearer Kryptanalyse angegriffen?",
          nl: "Wat wordt hoofdzakelijk aangevallen met lineaire cryptanalyse?"
        },
        options: [
          { en: "Block ciphers by finding linear approximations", es: "Cifrados de bloque encontrando aproximaciones lineales", de: "Blockchiffren durch das Finden linearer Näherungen", nl: "Blokversleuteling door lineaire benaderingen te vinden" },
          { en: "Stream ciphers by analyzing the keystream", es: "Cifrados de flujo analizando el flujo de claves", de: "Stromchiffren durch Analyse des Schlüsselstroms", nl: "Stroomversleuteling door de sleutelstroom te analyseren" },
          { en: "Hash functions by finding collisions", es: "Funciones hash encontrando colisiones", de: "Hash-Funktionen durch das Finden von Kollisionen", nl: "Hash functies door botsingen te vinden" },
          { en: "Public key systems by factoring", es: "Sistemas de clave pública factorizando", de: "Public-Key-Systeme durch Faktorisierung", nl: "Publieke sleutel systemen door factorisatie" }
        ],
        correct: 0,
        explanation: {
          en: "Linear cryptanalysis attacks block ciphers by finding linear relationships between plaintext bits, ciphertext bits, and key bits. It exploits deviations from randomness in these linear approximations to recover the encryption key.",
          es: "El criptoanálisis lineal ataca cifrados de bloque encontrando relaciones lineales entre bits de texto plano, bits de texto cifrado y bits de clave. Explota desviaciones de la aleatoriedad en estas aproximaciones lineales para recuperar la clave de cifrado.",
          de: "Die lineare Kryptanalyse greift Blockchiffren an, indem sie lineare Beziehungen zwischen Klartextbits, Chiffretextbits und Schlüsselbits findet. Sie nutzt Abweichungen von der Zufälligkeit in diesen linearen Näherungen aus, um den Verschlüsselungsschlüssel wiederherzustellen.",
          nl: "Lineaire cryptanalyse valt blokversleuteling aan door lineaire relaties te vinden tussen platte tekst bits, cijfertekst bits en sleutel bits. Het maakt gebruik van afwijkingen van willekeur in deze lineaire benaderingen om de versleutelingssleutel te herstellen."
        }
      },
      {
        question: {
          en: "In side-channel cryptanalysis, what information does power analysis exploit?",
          es: "En el criptoanálisis de canal lateral, ¿qué información explota el análisis de potencia?",
          de: "Welche Informationen nutzt die Leistungsanalyse in der Seitenkanal-Kryptanalyse aus?",
          nl: "Welke informatie maakt power analyse gebruik van in zijkanaal cryptanalyse?"
        },
        options: [
          { en: "Power consumption patterns during cryptographic operations", es: "Patrones de consumo de energía durante operaciones criptográficas", de: "Stromverbrauchsmuster während kryptographischer Operationen", nl: "Stroomverbruikpatronen tijdens cryptografische operaties" },
          { en: "Network traffic patterns", es: "Patrones de tráfico de red", de: "Netzwerk-Traffic-Muster", nl: "Netwerkverkeerpatronen" },
          { en: "File system access patterns", es: "Patrones de acceso al sistema de archivos", de: "Dateisystem-Zugriffsmuster", nl: "Bestandssysteem toegangspatronen" },
          { en: "Memory allocation patterns", es: "Patrones de asignación de memoria", de: "Speicherzuordnungsmuster", nl: "Geheugentoewijzingspatronen" }
        ],
        correct: 0,
        explanation: {
          en: "Power analysis attacks monitor the electrical power consumption of cryptographic devices during operation. Different operations and data values cause varying power consumption patterns, which can reveal secret keys through statistical analysis.",
          es: "Los ataques de análisis de potencia monitorean el consumo de energía eléctrica de dispositivos criptográficos durante la operación. Diferentes operaciones y valores de datos causan patrones de consumo de energía variables, que pueden revelar claves secretas a través del análisis estadístico.",
          de: "Leistungsanalyse-Angriffe überwachen den elektrischen Stromverbrauch kryptographischer Geräte während des Betriebs. Verschiedene Operationen und Datenwerte verursachen unterschiedliche Stromverbrauchsmuster, die durch statistische Analyse geheime Schlüssel preisgeben können.",
          nl: "Power analyse aanvallen monitoren het elektrische stroomverbruik van cryptografische apparaten tijdens werking. Verschillende operaties en datawaarden veroorzaken variërende stroomverbruikpatronen, die geheime sleutels kunnen onthullen door statistische analyse."
        }
      },
      {
        question: {
          en: "What is the fundamental principle behind algebraic cryptanalysis of block ciphers?",
          es: "¿Cuál es el principio fundamental detrás del criptoanálisis algebraico de cifrados de bloque?",
          de: "Was ist das grundlegende Prinzip der algebraischen Kryptanalyse von Blockchiffren?",
          nl: "Wat is het fundamentele principe achter algebraïsche cryptanalyse van blokversleutelingen?"
        },
        options: [
          { en: "Expressing cipher operations as polynomial equations over finite fields", es: "Expresar operaciones de cifrado como ecuaciones polinómicas sobre campos finitos", de: "Darstellung von Verschlüsselungsoperationen als Polynomgleichungen über endlichen Körpern", nl: "Uitdrukken van versleutelingsoperaties als polynoomvergelijkingen over eindige velden" },
          { en: "Using linear algebra to solve cipher systems", es: "Usar álgebra lineal para resolver sistemas de cifrado", de: "Verwendung linearer Algebra zur Lösung von Verschlüsselungssystemen", nl: "Gebruik van lineaire algebra om versleutelingssystemen op te lossen" },
          { en: "Applying group theory to break symmetric keys", es: "Aplicar teoría de grupos para romper claves simétricas", de: "Anwendung der Gruppentheorie zum Brechen symmetrischer Schlüssel", nl: "Toepassen van groepentheorie om symmetrische sleutels te breken" },
          { en: "Utilizing topological methods for key recovery", es: "Utilizar métodos topológicos para recuperación de claves", de: "Verwendung topologischer Methoden zur Schlüsselwiederherstellung", nl: "Gebruik van topologische methoden voor sleutelherstel" }
        ],
        correct: 0,
        explanation: {
          en: "Algebraic cryptanalysis models the entire cipher as a system of multivariate polynomial equations over finite fields, then attempts to solve for the secret key by finding solutions to this system using advanced techniques from computational algebra.",
          es: "El criptoanálisis algebraico modela todo el cifrado como un sistema de ecuaciones polinómicas multivariadas sobre campos finitos, luego intenta resolver la clave secreta encontrando soluciones a este sistema usando técnicas avanzadas del álgebra computacional.",
          de: "Die algebraische Kryptanalyse modelliert die gesamte Verschlüsselung als System multivariater Polynomgleichungen über endlichen Körpern und versucht dann, den geheimen Schlüssel zu lösen, indem Lösungen für dieses System mit fortgeschrittenen Techniken der rechnerischen Algebra gefunden werden.",
          nl: "Algebraïsche cryptanalyse modelleert de hele versleuteling als een systeem van multivariate polynoomvergelijkingen over eindige velden, en probeert vervolgens de geheime sleutel op te lossen door oplossingen voor dit systeem te vinden met geavanceerde technieken uit de computationele algebra."
        }
      },
      {
        question: {
          en: "What is the core principle of fault injection attacks in cryptanalysis?",
          es: "¿Cuál es el principio central de los ataques de inyección de fallas en criptoanálisis?",
          de: "Was ist das Kernprinzip von Fault-Injection-Angriffen in der Kryptanalyse?",
          nl: "Wat is het kernprincipe van fault injection aanvallen in cryptanalyse?"
        },
        options: [
          { en: "Inducing computational errors during encryption to leak key information", es: "Inducir errores computacionales durante el cifrado para filtrar información de la clave", de: "Induzierung rechnerischer Fehler während der Verschlüsselung zur Preisgabe von Schlüsselinformationen", nl: "Induceren van computationele fouten tijdens versleuteling om sleutelinformatie te lekken" },
          { en: "Injecting malicious code into cryptographic libraries", es: "Inyectar código malicioso en bibliotecas criptográficas", de: "Einschleusung bösartigen Codes in kryptographische Bibliotheken", nl: "Injecteren van kwaadaardige code in cryptografische bibliotheken" },
          { en: "Corrupting cryptographic protocols through network faults", es: "Corromper protocolos criptográficos a través de fallas de red", de: "Korruption kryptographischer Protokolle durch Netzwerkfehler", nl: "Corrumperen van cryptografische protocollen door netwerkfouten" },
          { en: "Creating hardware vulnerabilities in crypto processors", es: "Crear vulnerabilidades de hardware en procesadores criptográficos", de: "Schaffung von Hardware-Schwachstellen in Krypto-Prozessoren", nl: "Creëren van hardware kwetsbaarheden in crypto processors" }
        ],
        correct: 0,
        explanation: {
          en: "Fault injection attacks deliberately introduce errors (via voltage glitches, electromagnetic pulses, or laser beams) during cryptographic computations, causing the device to produce faulty outputs that reveal information about the secret key through differential analysis.",
          es: "Los ataques de inyección de fallas introducen deliberadamente errores (via fluctuaciones de voltaje, pulsos electromagnéticos o rayos láser) durante cálculos criptográficos, causando que el dispositivo produzca salidas defectuosas que revelan información sobre la clave secreta a través de análisis diferencial.",
          de: "Fault-Injection-Angriffe führen bewusst Fehler (über Spannungsstörungen, elektromagnetische Impulse oder Laserstrahlen) während kryptographischer Berechnungen ein, wodurch das Gerät fehlerhafte Ausgaben produziert, die Informationen über den geheimen Schlüssel durch differentielle Analyse preisgeben.",
          nl: "Fault injection aanvallen introduceren opzettelijk fouten (via spanningsglitches, elektromagnetische pulsen of laserstralen) tijdens cryptografische berekeningen, waardoor het apparaat foutieve outputs produceert die informatie over de geheime sleutel onthullen door differentiële analyse."
        }
      },
      {
        question: {
          en: "What is the theoretical foundation of cube attacks in cryptanalysis?",
          es: "¿Cuál es la base teórica de los ataques de cubo en criptoanálisis?",
          de: "Was ist die theoretische Grundlage von Cube-Angriffen in der Kryptanalyse?",
          nl: "Wat is de theoretische basis van cube aanvallen in cryptanalyse?"
        },
        options: [
          { en: "Higher-order differential cryptanalysis using multivariate polynomial interpolation", es: "Criptoanálisis diferencial de orden superior usando interpolación polinómica multivariada", de: "Differentielle Kryptanalyse höherer Ordnung unter Verwendung multivariater Polynominterpolation", nl: "Hogere-orde differentiële cryptanalyse met behulp van multivariate polynomiale interpolatie" },
          { en: "Geometric analysis of cipher state spaces", es: "Análisis geométrico de espacios de estado de cifrado", de: "Geometrische Analyse von Chiffre-Zustandsräumen", nl: "Geometrische analyse van versleutelingstoestandsruimten" },
          { en: "Topological attacks on hash functions", es: "Ataques topológicos en funciones hash", de: "Topologische Angriffe auf Hash-Funktionen", nl: "Topologische aanvallen op hash functies" },
          { en: "Quantum mechanical principles in classical cryptography", es: "Principios mecánicos cuánticos en criptografía clásica", de: "Quantenmechanische Prinzipien in klassischer Kryptographie", nl: "Kwantummechanische principes in klassieke cryptografie" }
        ],
        correct: 0,
        explanation: {
          en: "Cube attacks are a form of higher-order differential cryptanalysis that exploits the algebraic structure of ciphers by treating them as multivariate polynomials and using cube summation techniques to recover linear equations involving key bits.",
          es: "Los ataques de cubo son una forma de criptoanálisis diferencial de orden superior que explota la estructura algebraica de los cifrados tratándolos como polinomios multivariados y usando técnicas de suma de cubo para recuperar ecuaciones lineales que involucran bits de clave.",
          de: "Cube-Angriffe sind eine Form der differentiellen Kryptanalyse höherer Ordnung, die die algebraische Struktur von Chiffren ausnutzt, indem sie sie als multivariate Polynome behandelt und Cube-Summationstechniken verwendet, um lineare Gleichungen mit Schlüsselbits zu gewinnen.",
          nl: "Cube aanvallen zijn een vorm van hogere-orde differentiële cryptanalyse die de algebraïsche structuur van versleutelingen uitbuit door ze te behandelen als multivariate polynomen en cube sommatietechnieken te gebruiken om lineaire vergelijkingen met sleutelbits te herstellen."
        }
      },
      {
        question: {
          en: "What is the fundamental challenge in cryptanalysis of post-quantum lattice-based cryptosystems?",
          es: "¿Cuál es el desafío fundamental en el criptoanálisis de criptosistemas post-cuánticos basados en retículos?",
          de: "Was ist die grundlegende Herausforderung bei der Kryptanalyse post-quantischer gitterbasierter Kryptosysteme?",
          nl: "Wat is de fundamentele uitdaging in cryptanalyse van post-kwantum lattice-gebaseerde cryptosystemen?"
        },
        options: [
          { en: "Solving shortest vector problems in high-dimensional lattices", es: "Resolver problemas de vector más corto en retículos de alta dimensión", de: "Lösung kürzester Vektorprobleme in hochdimensionalen Gittern", nl: "Oplossen van kortste vector problemen in hoogdimensionale roosters" },
          { en: "Breaking discrete logarithm assumptions", es: "Romper suposiciones de logaritmo discreto", de: "Brechen von diskreten Logarithmus-Annahmen", nl: "Breken van discrete logaritme aannames" },
          { en: "Factoring large composite numbers efficiently", es: "Factorizar números compuestos grandes eficientemente", de: "Effiziente Faktorisierung großer zusammengesetzter Zahlen", nl: "Efficiënt factoreren van grote samengestelde getallen" },
          { en: "Computing elliptic curve discrete logs", es: "Calcular logaritmos discretos de curvas elípticas", de: "Berechnung elliptischer Kurven-Diskretlogarithmen", nl: "Berekenen van elliptische curve discrete logaritmen" }
        ],
        correct: 0,
        explanation: {
          en: "Lattice-based cryptosystems derive their security from the computational difficulty of solving lattice problems like the shortest vector problem (SVP) or closest vector problem (CVP) in high-dimensional spaces, which are believed to be hard even for quantum computers.",
          es: "Los criptosistemas basados en retículos derivan su seguridad de la dificultad computacional de resolver problemas de retículos como el problema del vector más corto (SVP) o problema del vector más cercano (CVP) en espacios de alta dimensión, que se cree son difíciles incluso para computadoras cuánticas.",
          de: "Gitterbasierte Kryptosysteme leiten ihre Sicherheit von der rechnerischen Schwierigkeit ab, Gitterprobleme wie das kürzeste Vektorproblem (SVP) oder das nächste Vektorproblem (CVP) in hochdimensionalen Räumen zu lösen, die als schwer sogar für Quantencomputer gelten.",
          nl: "Lattice-gebaseerde cryptosystemen halen hun veiligheid uit de computationele moeilijkheid van het oplossen van lattice problemen zoals het kortste vector probleem (SVP) of dichtstbijzijnde vector probleem (CVP) in hoogdimensionale ruimten, die moeilijk worden geacht zelfs voor quantumcomputers."
        }
      },
      {
        question: {
          en: "What is the core principle behind Template Attacks in side-channel cryptanalysis?",
          es: "¿Cuál es el principio central detrás de los Ataques de Plantilla en criptoanálisis de canal lateral?",
          de: "Was ist das Kernprinzip hinter Template-Angriffen in der Seitenkanal-Kryptanalyse?",
          nl: "Wat is het kernprincipe achter Template Attacks in zijkanaal cryptanalyse?"
        },
        options: [
          { en: "Statistical modeling of side-channel leakage patterns for each possible intermediate value", es: "Modelado estadístico de patrones de filtración de canal lateral para cada valor intermedio posible", de: "Statistische Modellierung von Seitenkanal-Leckage-Mustern für jeden möglichen Zwischenwert", nl: "Statistische modellering van zijkanaal lekkage patronen voor elke mogelijke tussenwaarde" },
          { en: "Using predefined attack templates from public databases", es: "Usar plantillas de ataque predefinidas de bases de datos públicas", de: "Verwendung vordefinierter Angriffstemplates aus öffentlichen Datenbanken", nl: "Gebruik van voorgedefinieerde aanval templates uit openbare databases" },
          { en: "Creating standardized formats for cryptanalytic tools", es: "Crear formatos estandarizados para herramientas criptoanalíticas", de: "Erstellung standardisierter Formate für kryptanalytische Werkzeuge", nl: "Creëren van gestandaardiseerde formaten voor cryptanalytische tools" },
          { en: "Implementing generic attack frameworks", es: "Implementar marcos de ataque genéricos", de: "Implementierung generischer Angriffsrahmen", nl: "Implementeren van generieke aanval frameworks" }
        ],
        correct: 0,
        explanation: {
          en: "Template attacks represent the most powerful form of side-channel analysis, building statistical models (templates) during a profiling phase that characterize how the device leaks information for each possible intermediate value, then using these templates for highly efficient key recovery.",
          es: "Los ataques de plantilla representan la forma más poderosa de análisis de canal lateral, construyendo modelos estadísticos (plantillas) durante una fase de perfilado que caracterizan cómo el dispositivo filtra información para cada valor intermedio posible, luego usando estas plantillas para recuperación de claves altamente eficiente.",
          de: "Template-Angriffe stellen die mächtigste Form der Seitenkanal-Analyse dar, indem sie statistische Modelle (Templates) während einer Profiling-Phase erstellen, die charakterisieren, wie das Gerät Informationen für jeden möglichen Zwischenwert preisgibt, und diese Templates dann für hocheffiziente Schlüsselwiederherstellung verwenden.",
          nl: "Template attacks vertegenwoordigen de krachtigste vorm van zijkanaal analyse, waarbij statistische modellen (templates) worden gebouwd tijdens een profileringsfase die karakteriseren hoe het apparaat informatie lekt voor elke mogelijke tussenwaarde, en vervolgens deze templates gebruiken voor zeer efficiënt sleutelherstel."
        }
      },
      {
        question: {
          en: "What is the fundamental concept behind Impossible Differential Cryptanalysis?",
          es: "¿Cuál es el concepto fundamental detrás del Criptoanálisis Diferencial Imposible?",
          de: "Was ist das grundlegende Konzept hinter der Unmöglichen Differentiellen Kryptanalyse?",
          nl: "Wat is het fundamentele concept achter Onmogelijke Differentiële Cryptanalyse?"
        },
        options: [
          { en: "Exploiting differential paths that cannot occur due to cipher structure contradictions", es: "Explotar caminos diferenciales que no pueden ocurrir debido a contradicciones de estructura de cifrado", de: "Ausnutzung differentieller Pfade, die aufgrund von Chiffre-Strukturwidersprüchen nicht auftreten können", nl: "Uitbuiten van differentiële paden die niet kunnen voorkomen vanwege versleutelingsstructuur tegenstrijdigheden" },
          { en: "Finding differentials with zero probability across all rounds", es: "Encontrar diferenciales con probabilidad cero en todas las rondas", de: "Finden von Differentialen mit null Wahrscheinlichkeit über alle Runden", nl: "Vinden van differentialen met nul waarschijnlijkheid over alle ronden" },
          { en: "Using quantum superposition in classical differential analysis", es: "Usar superposición cuántica en análisis diferencial clásico", de: "Verwendung von Quantensuperposition in klassischer Differentialanalyse", nl: "Gebruik van kwantum superpositie in klassieke differentiële analyse" },
          { en: "Applying non-Euclidean geometry to cipher spaces", es: "Aplicar geometría no euclidiana a espacios de cifrado", de: "Anwendung nicht-euklidischer Geometrie auf Chiffre-Räume", nl: "Toepassen van niet-Euclidische meetkunde op versleutelingsruimten" }
        ],
        correct: 0,
        explanation: {
          en: "Impossible differential cryptanalysis identifies differential characteristics that have zero probability due to structural properties of the cipher, then uses the fact that such differentials should never occur to eliminate wrong key guesses and recover the correct key.",
          es: "El criptoanálisis diferencial imposible identifica características diferenciales que tienen probabilidad cero debido a propiedades estructurales del cifrado, luego usa el hecho de que tales diferenciales nunca deberían ocurrir para eliminar conjeturas de clave erróneas y recuperar la clave correcta.",
          de: "Die unmögliche differentielle Kryptanalyse identifiziert differentielle Eigenschaften, die aufgrund struktureller Eigenschaften der Chiffre null Wahrscheinlichkeit haben, und nutzt dann die Tatsache, dass solche Differentiale niemals auftreten sollten, um falsche Schlüsselschätzungen zu eliminieren und den korrekten Schlüssel zu gewinnen.",
          nl: "Onmogelijke differentiële cryptanalyse identificeert differentiële kenmerken die nul waarschijnlijkheid hebben vanwege structurele eigenschappen van de versleuteling, en gebruikt vervolgens het feit dat dergelijke differentialen nooit zouden moeten voorkomen om verkeerde sleutelgissingen te elimineren en de juiste sleutel te herstellen."
        }
      },
      {
        question: {
          en: "What is the theoretical basis of Correlation Power Analysis (CPA) attacks?",
          es: "¿Cuál es la base teórica de los ataques de Análisis de Potencia de Correlación (CPA)?",
          de: "Was ist die theoretische Basis von Correlation Power Analysis (CPA) Angriffen?",
          nl: "Wat is de theoretische basis van Correlation Power Analysis (CPA) aanvallen?"
        },
        options: [
          { en: "Statistical correlation between predicted power consumption models and actual measurements", es: "Correlación estadística entre modelos de consumo de potencia predichos y mediciones reales", de: "Statistische Korrelation zwischen vorhergesagten Stromverbrauchsmodellen und tatsächlichen Messungen", nl: "Statistische correlatie tussen voorspelde stroomverbruikmodellen en werkelijke metingen" },
          { en: "Cross-correlation analysis of electromagnetic emissions", es: "Análisis de correlación cruzada de emisiones electromagnéticas", de: "Kreuzkorrelationsanalyse elektromagnetischer Emissionen", nl: "Kruiscorrelatie analyse van elektromagnetische emissies" },
          { en: "Correlation between different cipher implementations", es: "Correlación entre diferentes implementaciones de cifrado", de: "Korrelation zwischen verschiedenen Chiffre-Implementierungen", nl: "Correlatie tussen verschillende versleutelingsimplementaties" },
          { en: "Mathematical correlation in algebraic structures", es: "Correlación matemática en estructuras algebraicas", de: "Mathematische Korrelation in algebraischen Strukturen", nl: "Wiskundige correlatie in algebraïsche structuren" }
        ],
        correct: 0,
        explanation: {
          en: "CPA attacks use statistical correlation analysis between hypothetical power consumption values (based on a leakage model and key guesses) and actual power measurements to determine the correct key by finding the hypothesis that shows the highest correlation with real traces.",
          es: "Los ataques CPA usan análisis de correlación estadística entre valores de consumo de potencia hipotéticos (basados en un modelo de filtración y conjeturas de clave) y mediciones de potencia reales para determinar la clave correcta encontrando la hipótesis que muestra la correlación más alta con trazas reales.",
          de: "CPA-Angriffe verwenden statistische Korrelationsanalyse zwischen hypothetischen Stromverbrauchswerten (basierend auf einem Leckage-Modell und Schlüsselschätzungen) und tatsächlichen Stromverbrauchsmessungen, um den korrekten Schlüssel zu bestimmen, indem die Hypothese gefunden wird, die die höchste Korrelation mit echten Spuren zeigt.",
          nl: "CPA aanvallen gebruiken statistische correlatie analyse tussen hypothetische stroomverbruikwaarden (gebaseerd op een lekkage model en sleutelgissingen) en werkelijke stroommetingen om de juiste sleutel te bepalen door de hypothese te vinden die de hoogste correlatie toont met echte traces."
        }
      },
      {
        question: {
          en: "What is the core principle behind Boomerang Attacks in block cipher cryptanalysis?",
          es: "¿Cuál es el principio central detrás de los Ataques Boomerang en criptoanálisis de cifrado de bloques?",
          de: "Was ist das Kernprinzip hinter Boomerang-Angriffen in der Blockchiffre-Kryptanalyse?",
          nl: "Wat is het kernprincipe achter Boomerang Attacks in blokversleuteling cryptanalyse?"
        },
        options: [
          { en: "Combining two short differential paths through the middle rounds of a cipher", es: "Combinar dos caminos diferenciales cortos a través de las rondas medias de un cifrado", de: "Kombination zweier kurzer differentieller Pfade durch die mittleren Runden einer Chiffre", nl: "Combineren van twee korte differentiële paden door de middelste ronden van een versleuteling" },
          { en: "Creating cyclical differential patterns that return to the starting point", es: "Crear patrones diferenciales cíclicos que regresan al punto de partida", de: "Erstellung zyklischer differentieller Muster, die zum Ausgangspunkt zurückkehren", nl: "Creëren van cyclische differentiële patronen die terugkeren naar het startpunt" },
          { en: "Using elastic collision dynamics in cryptographic operations", es: "Usar dinámicas de colisión elástica en operaciones criptográficas", de: "Verwendung elastischer Kollisionsdynamik in kryptographischen Operationen", nl: "Gebruik van elastische botsing dynamiek in cryptografische operaties" },
          { en: "Implementing recursive feedback loops in differential cryptanalysis", es: "Implementar bucles de retroalimentación recursiva en criptoanálisis diferencial", de: "Implementierung rekursiver Rückkopplungsschleifen in der differentiellen Kryptanalyse", nl: "Implementeren van recursieve feedback loops in differentiële cryptanalyse" }
        ],
        correct: 0,
        explanation: {
          en: "Boomerang attacks work by finding two short differential characteristics that can be connected through the middle of the cipher, creating a 'boomerang' effect where differences propagate forward and backward to create a distinguisher for the full cipher.",
          es: "Los ataques boomerang funcionan encontrando dos características diferenciales cortas que pueden conectarse a través del medio del cifrado, creando un efecto 'boomerang' donde las diferencias se propagan hacia adelante y atrás para crear un distinguidor para el cifrado completo.",
          de: "Boomerang-Angriffe funktionieren, indem sie zwei kurze differentielle Eigenschaften finden, die durch die Mitte der Chiffre verbunden werden können, wodurch ein 'Boomerang'-Effekt entsteht, bei dem sich Unterschiede vorwärts und rückwärts ausbreiten, um einen Unterscheider für die vollständige Chiffre zu schaffen.",
          nl: "Boomerang aanvallen werken door twee korte differentiële kenmerken te vinden die verbonden kunnen worden door het midden van de versleuteling, waardoor een 'boomerang' effect ontstaat waarbij verschillen zich voorwaarts en achterwaarts verspreiden om een onderscheider voor de volledige versleuteling te creëren."
        }
      },
      {
        question: {
          en: "What is the fundamental challenge in cryptanalysis of Multivariate Cryptography?",
          es: "¿Cuál es el desafío fundamental en el criptoanálisis de Criptografía Multivariada?",
          de: "Was ist die grundlegende Herausforderung bei der Kryptanalyse multivariater Kryptographie?",
          nl: "Wat is de fundamentele uitdaging in cryptanalyse van Multivariate Cryptografie?"
        },
        options: [
          { en: "Solving systems of multivariate polynomial equations over finite fields", es: "Resolver sistemas de ecuaciones polinómicas multivariadas sobre campos finitos", de: "Lösung von Systemen multivariater Polynomgleichungen über endlichen Körpern", nl: "Oplossen van systemen van multivariate polynoomvergelijkingen over eindige velden" },
          { en: "Computing discrete logarithms in multiple groups simultaneously", es: "Calcular logaritmos discretos en múltiples grupos simultáneamente", de: "Berechnung diskreter Logarithmen in mehreren Gruppen gleichzeitig", nl: "Berekenen van discrete logaritmen in meerdere groepen tegelijkertijd" },
          { en: "Breaking multiple encryption layers sequentially", es: "Romper múltiples capas de cifrado secuencialmente", de: "Sequentielle Brechung mehrerer Verschlüsselungsschichten", nl: "Breken van meerdere versleutelingslagen opeenvolgend" },
          { en: "Analyzing correlations between different variables", es: "Analizar correlaciones entre diferentes variables", de: "Analyse von Korrelationen zwischen verschiedenen Variablen", nl: "Analyseren van correlaties tussen verschillende variabelen" }
        ],
        correct: 0,
        explanation: {
          en: "Multivariate cryptography bases its security on the difficulty of solving systems of multivariate polynomial equations over finite fields (the MQ problem), which is NP-complete and believed to be resistant even to quantum attacks.",
          es: "La criptografía multivariada basa su seguridad en la dificultad de resolver sistemas de ecuaciones polinómicas multivariadas sobre campos finitos (el problema MQ), que es NP-completo y se cree resistente incluso a ataques cuánticos.",
          de: "Multivariate Kryptographie basiert ihre Sicherheit auf der Schwierigkeit, Systeme multivariater Polynomgleichungen über endlichen Körpern (das MQ-Problem) zu lösen, das NP-vollständig ist und als resistent sogar gegen Quantenangriffe gilt.",
          nl: "Multivariate cryptografie baseert zijn veiligheid op de moeilijkheid van het oplossen van systemen van multivariate polynoomvergelijkingen over eindige velden (het MQ probleem), dat NP-compleet is en geacht wordt resistent te zijn zelfs tegen kwantumaanvallen."
        }
      },
      {
        question: {
          en: "What is the theoretical foundation of Higher-Order Differential Cryptanalysis?",
          es: "¿Cuál es la base teórica del Criptoanálisis Diferencial de Orden Superior?",
          de: "Was ist die theoretische Grundlage der Differentiellen Kryptanalyse höherer Ordnung?",
          nl: "Wat is de theoretische basis van Hogere-Orde Differentiële Cryptanalyse?"
        },
        options: [
          { en: "Analyzing higher-order derivatives of boolean functions underlying the cipher", es: "Analizar derivadas de orden superior de funciones booleanas subyacentes del cifrado", de: "Analyse höherer Ableitungen boolescher Funktionen der zugrundeliegenden Chiffre", nl: "Analyseren van hogere-orde afgeleiden van booleaanse functies onderliggend aan de versleuteling" },
          { en: "Using calculus of variations in cryptographic analysis", es: "Usar cálculo de variaciones en análisis criptográfico", de: "Verwendung der Variationsrechnung in der kryptographischen Analyse", nl: "Gebruik van variatierekening in cryptografische analyse" },
          { en: "Applying tensor calculus to multi-dimensional cipher spaces", es: "Aplicar cálculo tensorial a espacios de cifrado multidimensionales", de: "Anwendung der Tensorrechnung auf mehrdimensionale Chiffre-Räume", nl: "Toepassen van tensorrekening op multidimensionale versleutelingsruimten" },
          { en: "Implementing differential geometry in algebraic attacks", es: "Implementar geometría diferencial en ataques algebraicos", de: "Implementierung der Differentialgeometrie in algebraischen Angriffen", nl: "Implementeren van differentiële meetkunde in algebraïsche aanvallen" }
        ],
        correct: 0,
        explanation: {
          en: "Higher-order differential cryptanalysis examines the higher-order derivatives of the boolean functions that represent the cipher, looking for non-random behavior in these derivatives to distinguish the cipher from a random function and potentially recover key information.",
          es: "El criptoanálisis diferencial de orden superior examina las derivadas de orden superior de las funciones booleanas que representan el cifrado, buscando comportamiento no aleatorio en estas derivadas para distinguir el cifrado de una función aleatoria y potencialmente recuperar información de la clave.",
          de: "Die differentielle Kryptanalyse höherer Ordnung untersucht die höheren Ableitungen der booleschen Funktionen, die die Chiffre darstellen, und sucht nach nicht-zufälligem Verhalten in diesen Ableitungen, um die Chiffre von einer Zufallsfunktion zu unterscheiden und möglicherweise Schlüsselinformationen zu gewinnen.",
          nl: "Hogere-orde differentiële cryptanalyse onderzoekt de hogere-orde afgeleiden van de booleaanse functies die de versleuteling vertegenwoordigen, op zoek naar niet-willekeurig gedrag in deze afgeleiden om de versleuteling te onderscheiden van een willekeurige functie en mogelijk sleutelinformatie te herstellen."
        }
      },
      {
        question: {
          en: "What is the core principle behind Integral Cryptanalysis (also known as Square Attack)?",
          es: "¿Cuál es el principio central detrás del Criptoanálisis Integral (también conocido como Ataque Cuadrado)?",
          de: "Was ist das Kernprinzip hinter der Integralen Kryptanalyse (auch als Square-Angriff bekannt)?",
          nl: "Wat is het kernprincipe achter Integrale Cryptanalyse (ook bekend als Square Attack)?"
        },
        options: [
          { en: "Exploiting algebraic properties through carefully chosen sets of plaintexts with specific structural patterns", es: "Explotar propiedades algebraicas a través de conjuntos cuidadosamente elegidos de textos planos con patrones estructurales específicos", de: "Ausnutzung algebraischer Eigenschaften durch sorgfältig ausgewählte Klartextsätze mit spezifischen strukturellen Mustern", nl: "Uitbuiten van algebraïsche eigenschappen door zorgvuldig gekozen sets van plainteksten met specifieke structurele patronen" },
          { en: "Integrating multiple attack techniques simultaneously", es: "Integrar múltiples técnicas de ataque simultáneamente", de: "Integration mehrerer Angriffstechniken gleichzeitig", nl: "Integreren van meerdere aanvalstechnieken tegelijkertijd" },
          { en: "Using numerical integration methods in cryptanalysis", es: "Usar métodos de integración numérica en criptoanálisis", de: "Verwendung numerischer Integrationsmethoden in der Kryptanalyse", nl: "Gebruik van numerieke integratiemethoden in cryptanalyse" },
          { en: "Applying integral equations to cipher analysis", es: "Aplicar ecuaciones integrales al análisis de cifrado", de: "Anwendung von Integralgleichungen zur Chiffre-Analyse", nl: "Toepassen van integraalvergelijkingen op versleutelingsanalyse" }
        ],
        correct: 0,
        explanation: {
          en: "Integral cryptanalysis uses sets of chosen plaintexts that follow specific patterns (like being equal in all positions except one), then exploits predictable properties in the corresponding ciphertext sets to recover key information, particularly effective against substitution-permutation networks.",
          es: "El criptoanálisis integral usa conjuntos de textos planos elegidos que siguen patrones específicos (como ser iguales en todas las posiciones excepto una), luego explota propiedades predecibles en los conjuntos de texto cifrado correspondientes para recuperar información de la clave, particularmente efectivo contra redes de sustitución-permutación.",
          de: "Die integrale Kryptanalyse verwendet Sätze gewählter Klartexte, die spezifischen Mustern folgen (wie in allen Positionen außer einer gleich zu sein), und nutzt dann vorhersagbare Eigenschaften in den entsprechenden Chiffretextsätzen aus, um Schlüsselinformationen zu gewinnen, besonders effektiv gegen Substitutions-Permutations-Netzwerke.",
          nl: "Integrale cryptanalyse gebruikt sets van gekozen plainteksten die specifieke patronen volgen (zoals gelijk zijn in alle posities behalve één), en exploiteert vervolgens voorspelbare eigenschappen in de corresponderende cijfertekst sets om sleutelinformatie te herstellen, bijzonder effectief tegen substitutie-permutatie netwerken."
        }
      },
      {
        question: {
          en: "What is the fundamental concept behind Truncated Differential Cryptanalysis?",
          es: "¿Cuál es el concepto fundamental detrás del Criptoanálisis Diferencial Truncado?",
          de: "Was ist das grundlegende Konzept hinter der Abgeschnittenen Differentiellen Kryptanalyse?",
          nl: "Wat is het fundamentele concept achter Afgekapte Differentiële Cryptanalyse?"
        },
        options: [
          { en: "Analyzing partial difference patterns by ignoring specific bit positions or bytes", es: "Analizar patrones de diferencia parciales ignorando posiciones de bits o bytes específicos", de: "Analyse partieller Differenzmuster durch Ignorieren spezifischer Bit-Positionen oder Bytes", nl: "Analyseren van partiële verschil patronen door specifieke bit posities of bytes te negeren" },
          { en: "Truncating cipher rounds to simplify analysis", es: "Truncar rondas de cifrado para simplificar el análisis", de: "Abschneiden von Chiffre-Runden zur Vereinfachung der Analyse", nl: "Afkappen van versleutelingsronden om analyse te vereenvoudigen" },
          { en: "Using shortened differential paths through reduced ciphers", es: "Usar caminos diferenciales acortados a través de cifrados reducidos", de: "Verwendung verkürzter differentieller Pfade durch reduzierte Chiffren", nl: "Gebruik van verkorte differentiële paden door gereduceerde versleutelingen" },
          { en: "Cutting off high-probability differential trails", es: "Cortar senderos diferenciales de alta probabilidad", de: "Abschneiden hochwahrscheinlicher differentieller Pfade", nl: "Afsnijden van hoge-waarschijnlijkheid differentiële paden" }
        ],
        correct: 0,
        explanation: {
          en: "Truncated differential cryptanalysis considers only partial information about differences, ignoring the exact values in certain positions while focusing on whether differences exist, allowing for more practical attacks when full differentials are too complex to trace.",
          es: "El criptoanálisis diferencial truncado considera solo información parcial sobre diferencias, ignorando los valores exactos en ciertas posiciones mientras se enfoca en si existen diferencias, permitiendo ataques más prácticos cuando los diferenciales completos son demasiado complejos para rastrear.",
          de: "Die abgeschnittene differentielle Kryptanalyse betrachtet nur partielle Informationen über Unterschiede, ignoriert die genauen Werte in bestimmten Positionen und konzentriert sich darauf, ob Unterschiede existieren, was praktischere Angriffe ermöglicht, wenn vollständige Differentiale zu komplex zum Verfolgen sind.",
          nl: "Afgekapte differentiële cryptanalyse beschouwt alleen gedeeltelijke informatie over verschillen, negeert de exacte waarden in bepaalde posities terwijl het focust op of verschillen bestaan, wat meer praktische aanvallen mogelijk maakt wanneer volledige differentialen te complex zijn om te volgen."
        }
      },
      {
        question: {
          en: "What is the theoretical foundation of Meet-in-the-Middle attacks with bicliques?",
          es: "¿Cuál es la base teórica de los ataques Meet-in-the-Middle con bicliques?",
          de: "Was ist die theoretische Grundlage von Meet-in-the-Middle-Angriffen mit Bicliques?",
          nl: "Wat is de theoretische basis van Meet-in-the-Middle aanvallen met bicliques?"
        },
        options: [
          { en: "Exploiting partial key-dependent computations in both encryption and decryption directions simultaneously", es: "Explotar cálculos parciales dependientes de clave en direcciones de cifrado y descifrado simultáneamente", de: "Ausnutzung partieller schlüsselabhängiger Berechnungen in Verschlüsselungs- und Entschlüsselungsrichtungen gleichzeitig", nl: "Uitbuiten van gedeeltelijke sleutelafhankelijke berekeningen in zowel versleutelings- als ontsleutelingsrichtingen tegelijkertijd" },
          { en: "Creating bipartite graph representations of cipher structures", es: "Crear representaciones de grafo bipartito de estructuras de cifrado", de: "Erstellung bipartiter Graphdarstellungen von Chiffre-Strukturen", nl: "Creëren van bipartiete graaf representaties van versleutelingsstructuren" },
          { en: "Using bicycle chain metaphors in cryptographic modeling", es: "Usar metáforas de cadena de bicicleta en modelado criptográfico", de: "Verwendung von Fahrradketten-Metaphern in der kryptographischen Modellierung", nl: "Gebruik van fietsetting metaforen in cryptografische modellering" },
          { en: "Implementing double-sided collision searches", es: "Implementar búsquedas de colisión de doble cara", de: "Implementierung doppelseitiger Kollisionssuchen", nl: "Implementeren van dubbelzijdige botsing zoektochten" }
        ],
        correct: 0,
        explanation: {
          en: "Biclique attacks are an advanced form of meet-in-the-middle cryptanalysis that construct sets of intermediate states that can be computed efficiently from both plaintext and ciphertext, creating a 'biclique' structure that allows for optimized key recovery against full-round ciphers.",
          es: "Los ataques biclique son una forma avanzada de criptoanálisis meet-in-the-middle que construyen conjuntos de estados intermedios que pueden calcularse eficientemente tanto desde texto plano como texto cifrado, creando una estructura 'biclique' que permite recuperación de claves optimizada contra cifrados de rondas completas.",
          de: "Biclique-Angriffe sind eine fortgeschrittene Form der Meet-in-the-Middle-Kryptanalyse, die Sätze von Zwischenzuständen konstruiert, die effizient sowohl aus Klartext als auch aus Chiffretext berechnet werden können, wodurch eine 'Biclique'-Struktur entsteht, die optimierte Schlüsselwiederherstellung gegen vollrunde Chiffren ermöglicht.",
          nl: "Biclique aanvallen zijn een geavanceerde vorm van meet-in-the-middle cryptanalyse die sets van tussentoestanden construeren die efficiënt berekend kunnen worden vanuit zowel plaintekst als cijfertekst, waardoor een 'biclique' structuur ontstaat die geoptimaliseerd sleutelherstel mogelijk maakt tegen volledige-ronde versleutelingen."
        }
      },
      {
        question: {
          en: "What is the core principle behind Rotational Cryptanalysis?",
          es: "¿Cuál es el principio central detrás del Criptoanálisis Rotacional?",
          de: "Was ist das Kernprinzip hinter der Rotations-Kryptanalyse?",
          nl: "Wat is het kernprincipe achter Rotationele Cryptanalyse?"
        },
        options: [
          { en: "Exploiting invariance properties under bitwise rotation operations in ARX constructions", es: "Explotar propiedades de invariancia bajo operaciones de rotación bit a bit en construcciones ARX", de: "Ausnutzung von Invarianzeigenschaften unter bitweisen Rotationsoperationen in ARX-Konstruktionen", nl: "Uitbuiten van invariantie eigenschappen onder bitgewijze rotatie operaties in ARX constructies" },
          { en: "Analyzing cipher behavior under coordinate system rotations", es: "Analizar comportamiento de cifrado bajo rotaciones del sistema de coordenadas", de: "Analyse des Chiffre-Verhaltens unter Koordinatensystemrotationen", nl: "Analyseren van versleutelingsgedrag onder coördinatensysteem rotaties" },
          { en: "Using circular permutations in differential analysis", es: "Usar permutaciones circulares en análisis diferencial", de: "Verwendung zirkulärer Permutationen in der Differentialanalyse", nl: "Gebruik van circulaire permutaties in differentiële analyse" },
          { en: "Implementing rotational symmetries in algebraic attacks", es: "Implementar simetrías rotacionales en ataques algebraicos", de: "Implementierung rotationaler Symmetrien in algebraischen Angriffen", nl: "Implementeren van rotationele symmetrieën in algebraïsche aanvallen" }
        ],
        correct: 0,
        explanation: {
          en: "Rotational cryptanalysis exploits the fact that some operations (like addition and rotation) commute in certain ways, creating rotational pairs of plaintexts that lead to predictable relationships in ciphertexts, particularly effective against ARX (Addition, Rotation, XOR) constructions.",
          es: "El criptoanálisis rotacional explota el hecho de que algunas operaciones (como adición y rotación) conmutan de ciertas maneras, creando pares rotacionales de textos planos que llevan a relaciones predecibles en textos cifrados, particularmente efectivo contra construcciones ARX (Adición, Rotación, XOR).",
          de: "Die Rotations-Kryptanalyse nutzt die Tatsache aus, dass einige Operationen (wie Addition und Rotation) auf bestimmte Weise kommutieren und rotational Paare von Klartexten schaffen, die zu vorhersagbaren Beziehungen in Chiffretexten führen, besonders effektiv gegen ARX (Addition, Rotation, XOR) Konstruktionen.",
          nl: "Rotationele cryptanalyse maakt gebruik van het feit dat sommige operaties (zoals optelling en rotatie) op bepaalde manieren commuteren, waardoor rotationele paren van plainteksten ontstaan die leiden tot voorspelbare relaties in cijferteksten, bijzonder effectief tegen ARX (Addition, Rotation, XOR) constructies."
        }
      },
      {
        question: {
          en: "What is the fundamental challenge in cryptanalysis of Code-Based Cryptography?",
          es: "¿Cuál es el desafío fundamental en el criptoanálisis de Criptografía Basada en Códigos?",
          de: "Was ist die grundlegende Herausforderung bei der Kryptanalyse codebasierter Kryptographie?",
          nl: "Wat is de fundamentele uitdaging in cryptanalyse van Code-Gebaseerde Cryptografie?"
        },
        options: [
          { en: "Solving the syndrome decoding problem for random linear codes", es: "Resolver el problema de decodificación de síndrome para códigos lineales aleatorios", de: "Lösung des Syndrom-Decodierungsproblems für zufällige lineare Codes", nl: "Oplossen van het syndroom decodering probleem voor willekeurige lineaire codes" },
          { en: "Breaking error-correcting codes through brute force", es: "Romper códigos de corrección de errores a través de fuerza bruta", de: "Brechen fehlerkorrigierender Codes durch Brute Force", nl: "Breken van foutcorrigerende codes door brute force" },
          { en: "Analyzing software implementation vulnerabilities", es: "Analizar vulnerabilidades de implementación de software", de: "Analyse von Software-Implementierungsschwachstellen", nl: "Analyseren van software implementatie kwetsbaarheden" },
          { en: "Finding patterns in random code constructions", es: "Encontrar patrones en construcciones de código aleatorio", de: "Finden von Mustern in zufälligen Code-Konstruktionen", nl: "Vinden van patronen in willekeurige code constructies" }
        ],
        correct: 0,
        explanation: {
          en: "Code-based cryptography relies on the hardness of decoding random linear codes, specifically the syndrome decoding problem, which is known to be NP-complete and forms the foundation of security for systems like McEliece and Niederreiter cryptosystems.",
          es: "La criptografía basada en códigos se basa en la dificultad de decodificar códigos lineales aleatorios, específicamente el problema de decodificación de síndrome, que se sabe es NP-completo y forma la base de seguridad para sistemas como los criptosistemas McEliece y Niederreiter.",
          de: "Codebasierte Kryptographie beruht auf der Schwierigkeit, zufällige lineare Codes zu decodieren, insbesondere das Syndrom-Decodierungsproblem, das als NP-vollständig bekannt ist und die Sicherheitsbasis für Systeme wie McEliece- und Niederreiter-Kryptosysteme bildet.",
          nl: "Code-gebaseerde cryptografie is gebaseerd op de hardheid van het decoderen van willekeurige lineaire codes, specifiek het syndroom decodering probleem, dat bekend staat als NP-compleet en de veiligheidsbasis vormt voor systemen zoals McEliece en Niederreiter cryptosystemen."
        }
      },
      {
        question: {
          en: "What is the theoretical basis of Slide Attacks in block cipher cryptanalysis?",
          es: "¿Cuál es la base teórica de los Ataques Deslizantes en criptoanálisis de cifrado de bloques?",
          de: "Was ist die theoretische Basis von Slide-Angriffen in der Blockchiffre-Kryptanalyse?",
          nl: "Wat is de theoretische basis van Slide Attacks in blokversleuteling cryptanalyse?"
        },
        options: [
          { en: "Exploiting self-similarity in cipher round structures to create slid pairs", es: "Explotar auto-similitud en estructuras de ronda de cifrado para crear pares deslizados", de: "Ausnutzung von Selbstähnlichkeit in Chiffre-Rundenstrukturen zur Erstellung von Slide-Paaren", nl: "Uitbuiten van zelf-gelijkenis in versleutelingsronde structuren om slide paren te creëren" },
          { en: "Creating sliding window analysis of differential patterns", es: "Crear análisis de ventana deslizante de patrones diferenciales", de: "Erstellung gleitender Fensteranalyse differentieller Muster", nl: "Creëren van glijdend venster analyse van differentiële patronen" },
          { en: "Using temporal sliding techniques in side-channel analysis", es: "Usar técnicas de deslizamiento temporal en análisis de canal lateral", de: "Verwendung zeitlicher Sliding-Techniken in der Seitenkanal-Analyse", nl: "Gebruik van temporele sliding technieken in zijkanaal analyse" },
          { en: "Implementing sliding scale cryptanalytic methodologies", es: "Implementar metodologías criptoanalíticas de escala deslizante", de: "Implementierung gleitender Skala-Kryptanalysemethodologien", nl: "Implementeren van glijdende schaal cryptanalytische methodologieën" }
        ],
        correct: 0,
        explanation: {
          en: "Slide attacks exploit weaknesses in ciphers that have self-similar round functions, creating 'slid pairs' of plaintexts where one can be derived from the other by effectively sliding the cipher rounds, making the attack independent of the number of rounds.",
          es: "Los ataques deslizantes explotan debilidades en cifrados que tienen funciones de ronda auto-similares, creando 'pares deslizados' de textos planos donde uno puede derivarse del otro deslizando efectivamente las rondas del cifrado, haciendo el ataque independiente del número de rondas.",
          de: "Slide-Angriffe nutzen Schwächen in Chiffren mit selbstähnlichen Rundenfunktionen aus und schaffen 'Slide-Paare' von Klartexten, bei denen einer vom anderen abgeleitet werden kann, indem die Chiffre-Runden effektiv verschoben werden, wodurch der Angriff von der Anzahl der Runden unabhängig wird.",
          nl: "Slide aanvallen maken gebruik van zwaktes in versleutelingen die zelf-gelijkaardige ronde functies hebben, waardoor 'slide paren' van plainteksten ontstaan waarbij één afgeleid kan worden van de ander door effectief de versleutelingsronden te verschuiven, waardoor de aanval onafhankelijk wordt van het aantal ronden."
        }
      },
      {
        question: {
          en: "What is the core principle behind Related-Key Attacks in symmetric cryptanalysis?",
          es: "¿Cuál es el principio central detrás de los Ataques de Clave Relacionada en criptoanálisis simétrico?",
          de: "Was ist das Kernprinzip hinter Related-Key-Angriffen in der symmetrischen Kryptanalyse?",
          nl: "Wat is het kernprincipe achter Gerelateerde-Sleutel Aanvallen in symmetrische cryptanalyse?"
        },
        options: [
          { en: "Exploiting mathematical relationships between different encryption keys", es: "Explotar relaciones matemáticas entre diferentes claves de cifrado", de: "Ausnutzung mathematischer Beziehungen zwischen verschiedenen Verschlüsselungsschlüsseln", nl: "Uitbuiten van wiskundige relaties tussen verschillende versleutelingssleutels" },
          { en: "Finding keys that are cryptographically related through shared algorithms", es: "Encontrar claves que están criptográficamente relacionadas a través de algoritmos compartidos", de: "Finden von Schlüsseln, die kryptographisch über gemeinsame Algorithmen verwandt sind", nl: "Vinden van sleutels die cryptografisch gerelateerd zijn door gedeelde algoritmen" },
          { en: "Using family relationships in key generation processes", es: "Usar relaciones familiares en procesos de generación de claves", de: "Verwendung familiärer Beziehungen in Schlüsselerzeugungsprozessen", nl: "Gebruik van familie relaties in sleutelgeneratie processen" },
          { en: "Analyzing social connections between key holders", es: "Analizar conexiones sociales entre portadores de claves", de: "Analyse sozialer Verbindungen zwischen Schlüsselinhabern", nl: "Analyseren van sociale verbindingen tussen sleutelhouders" }
        ],
        correct: 0,
        explanation: {
          en: "Related-key attacks assume the adversary can obtain encryptions under multiple keys that have a known mathematical relationship, exploiting how differences in related keys propagate through the cipher to recover information about all the keys involved.",
          es: "Los ataques de clave relacionada asumen que el adversario puede obtener cifrados bajo múltiples claves que tienen una relación matemática conocida, explotando cómo las diferencias en claves relacionadas se propagan a través del cifrado para recuperar información sobre todas las claves involucradas.",
          de: "Related-Key-Angriffe nehmen an, dass der Angreifer Verschlüsselungen unter mehreren Schlüsseln erhalten kann, die eine bekannte mathematische Beziehung haben, und nutzen aus, wie sich Unterschiede in verwandten Schlüsseln durch die Chiffre ausbreiten, um Informationen über alle beteiligten Schlüssel zu gewinnen.",
          nl: "Gerelateerde-sleutel aanvallen nemen aan dat de tegenstander versleutelingen kan verkrijgen onder meerdere sleutels die een bekende wiskundige relatie hebben, waarbij uitgebuit wordt hoe verschillen in gerelateerde sleutels zich door de versleuteling verspreiden om informatie over alle betrokken sleutels te herstellen."
        }
      },
      {
        question: {
          en: "What is the fundamental concept behind Cold Boot Attacks in cryptanalysis?",
          es: "¿Cuál es el concepto fundamental detrás de los Ataques de Arranque en Frío en criptoanálisis?",
          de: "Was ist das grundlegende Konzept hinter Cold-Boot-Angriffen in der Kryptanalyse?",
          nl: "Wat is het fundamentele concept achter Cold Boot Attacks in cryptanalyse?"
        },
        options: [
          { en: "Exploiting memory remanence to recover cryptographic keys from volatile memory", es: "Explotar remanencia de memoria para recuperar claves criptográficas de memoria volátil", de: "Ausnutzung von Speicherremanenz zur Wiederherstellung kryptographischer Schlüssel aus flüchtigem Speicher", nl: "Uitbuiten van geheugen remanentie om cryptografische sleutels te herstellen uit vluchtig geheugen" },
          { en: "Attacking systems during cold weather conditions", es: "Atacar sistemas durante condiciones de clima frío", de: "Angriff auf Systeme bei kalten Wetterbedingungen", nl: "Aanvallen van systemen tijdens koude weersomstandigheden" },
          { en: "Using cryogenic cooling to slow down encryption processes", es: "Usar enfriamiento criogénico para ralentizar procesos de cifrado", de: "Verwendung kryogener Kühlung zur Verlangsamung von Verschlüsselungsprozessen", nl: "Gebruik van cryogene koeling om versleutelingsprocessen te vertragen" },
          { en: "Implementing thermal analysis of cryptographic hardware", es: "Implementar análisis térmico de hardware criptográfico", de: "Implementierung thermischer Analyse kryptographischer Hardware", nl: "Implementeren van thermische analyse van cryptografische hardware" }
        ],
        correct: 0,
        explanation: {
          en: "Cold boot attacks exploit the fact that DRAM retains data for seconds to minutes after power loss, especially at low temperatures. Attackers can quickly reboot a system and dump memory contents to recover encryption keys that were stored in supposedly volatile memory.",
          es: "Los ataques de arranque en frío explotan el hecho de que la DRAM retiene datos por segundos a minutos después de la pérdida de energía, especialmente a bajas temperaturas. Los atacantes pueden reiniciar rápidamente un sistema y volcar contenidos de memoria para recuperar claves de cifrado que estaban almacenadas en memoria supuestamente volátil.",
          de: "Cold-Boot-Angriffe nutzen die Tatsache aus, dass DRAM Daten für Sekunden bis Minuten nach dem Stromverlust behält, besonders bei niedrigen Temperaturen. Angreifer können ein System schnell neu starten und Speicherinhalte ausgeben, um Verschlüsselungsschlüssel zu gewinnen, die in vermeintlich flüchtigem Speicher gespeichert waren.",
          nl: "Cold boot aanvallen maken gebruik van het feit dat DRAM data behoudt voor seconden tot minuten na stroomverlies, vooral bij lage temperaturen. Aanvallers kunnen snel een systeem herstarten en geheugeninhoud dumpen om versleutelingssleutels te herstellen die opgeslagen waren in zogenaamd vluchtig geheugen."
        }
      },
      {
        question: {
          en: "What is the theoretical foundation of Conditional Differential Cryptanalysis?",
          es: "¿Cuál es la base teórica del Criptoanálisis Diferencial Condicional?",
          de: "Was ist die theoretische Grundlage der Bedingten Differentiellen Kryptanalyse?",
          nl: "Wat is de theoretische basis van Voorwaardelijke Differentiële Cryptanalyse?"
        },
        options: [
          { en: "Analyzing differential behavior under specific conditional constraints on internal states", es: "Analizar comportamiento diferencial bajo restricciones condicionales específicas en estados internos", de: "Analyse differentiellen Verhaltens unter spezifischen bedingten Beschränkungen interner Zustände", nl: "Analyseren van differentieel gedrag onder specifieke voorwaardelijke beperkingen op interne toestanden" },
          { en: "Using conditional probability theory in differential attacks", es: "Usar teoría de probabilidad condicional en ataques diferenciales", de: "Verwendung bedingter Wahrscheinlichkeitstheorie in differentiellen Angriffen", nl: "Gebruik van voorwaardelijke waarschijnlijkheidstheorie in differentiële aanvallen" },
          { en: "Implementing if-then logic in cryptanalytic algorithms", es: "Implementar lógica if-then en algoritmos criptoanalíticos", de: "Implementierung von Wenn-Dann-Logik in kryptanalytischen Algorithmen", nl: "Implementeren van als-dan logica in cryptanalytische algoritmen" },
          { en: "Applying conditional compilation to cipher analysis tools", es: "Aplicar compilación condicional a herramientas de análisis de cifrado", de: "Anwendung bedingter Kompilierung auf Chiffre-Analysetools", nl: "Toepassen van voorwaardelijke compilatie op versleutelingsanalyse tools" }
        ],
        correct: 0,
        explanation: {
          en: "Conditional differential cryptanalysis refines traditional differential analysis by considering additional constraints or conditions on the internal state of the cipher, leading to more precise probability estimates and potentially more effective attacks against specific cipher constructions.",
          es: "El criptoanálisis diferencial condicional refina el análisis diferencial tradicional considerando restricciones o condiciones adicionales en el estado interno del cifrado, llevando a estimaciones de probabilidad más precisas y potencialmente ataques más efectivos contra construcciones de cifrado específicas.",
          de: "Die bedingte differentielle Kryptanalyse verfeinert die traditionelle differentielle Analyse, indem zusätzliche Beschränkungen oder Bedingungen für den internen Zustand der Chiffre berücksichtigt werden, was zu präziseren Wahrscheinlichkeitsschätzungen und möglicherweise effektiveren Angriffen gegen spezifische Chiffre-Konstruktionen führt.",
          nl: "Voorwaardelijke differentiële cryptanalyse verfijnt traditionele differentiële analyse door aanvullende beperkingen of voorwaarden op de interne toestand van de versleuteling te overwegen, wat leidt tot meer precieze waarschijnlijkheidsschattingen en mogelijk meer effectieve aanvallen tegen specifieke versleutelingsconstructies."
        }
      },
      {
        question: {
          en: "What is the core principle behind Mutual Information Analysis (MIA) in side-channel cryptanalysis?",
          es: "¿Cuál es el principio central detrás del Análisis de Información Mutua (MIA) en criptoanálisis de canal lateral?",
          de: "Was ist das Kernprinzip hinter der Mutual Information Analysis (MIA) in der Seitenkanal-Kryptanalyse?",
          nl: "Wat is het kernprincipe achter Mutual Information Analysis (MIA) in zijkanaal cryptanalyse?"
        },
        options: [
          { en: "Measuring statistical dependence between predicted intermediate values and actual leakage measurements", es: "Medir dependencia estadística entre valores intermedios predichos y mediciones de filtración reales", de: "Messung statistischer Abhängigkeit zwischen vorhergesagten Zwischenwerten und tatsächlichen Leckage-Messungen", nl: "Meten van statistische afhankelijkheid tussen voorspelde tussenwaarden en werkelijke lekkage metingen" },
          { en: "Analyzing shared information between different cryptographic algorithms", es: "Analizar información compartida entre diferentes algoritmos criptográficos", de: "Analyse geteilter Informationen zwischen verschiedenen kryptographischen Algorithmen", nl: "Analyseren van gedeelde informatie tussen verschillende cryptografische algoritmen" },
          { en: "Computing mutual understanding between attacker and defender", es: "Calcular entendimiento mutuo entre atacante y defensor", de: "Berechnung gegenseitigen Verständnisses zwischen Angreifer und Verteidiger", nl: "Berekenen van wederzijds begrip tussen aanvaller en verdediger" },
          { en: "Measuring information exchange in cryptographic protocols", es: "Medir intercambio de información en protocolos criptográficos", de: "Messung des Informationsaustauschs in kryptographischen Protokollen", nl: "Meten van informatie-uitwisseling in cryptografische protocollen" }
        ],
        correct: 0,
        explanation: {
          en: "MIA uses mutual information theory to quantify the statistical dependence between hypothetical intermediate values (based on key guesses) and observed side-channel measurements, providing a more generic approach than correlation-based methods without assuming specific leakage models.",
          es: "MIA usa teoría de información mutua para cuantificar la dependencia estadística entre valores intermedios hipotéticos (basados en conjeturas de clave) y mediciones de canal lateral observadas, proporcionando un enfoque más genérico que métodos basados en correlación sin asumir modelos de filtración específicos.",
          de: "MIA verwendet die Theorie der gegenseitigen Information, um die statistische Abhängigkeit zwischen hypothetischen Zwischenwerten (basierend auf Schlüsselschätzungen) und beobachteten Seitenkanal-Messungen zu quantifizieren, und bietet einen generischeren Ansatz als korrelationsbasierte Methoden, ohne spezifische Leckage-Modelle anzunehmen.",
          nl: "MIA gebruikt wederzijdse informatietheorie om de statistische afhankelijkheid te kwantificeren tussen hypothetische tussenwaarden (gebaseerd op sleutelgissingen) en waargenomen zijkanaal metingen, wat een meer generieke benadering biedt dan correlatie-gebaseerde methoden zonder specifieke lekkage modellen aan te nemen."
        }
      },
      {
        question: {
          en: "What is the fundamental concept behind Zero-Correlation Linear Cryptanalysis?",
          es: "¿Cuál es el concepto fundamental detrás del Criptoanálisis Lineal de Correlación Cero?",
          de: "Was ist das grundlegende Konzept hinter der Zero-Correlation Linear Cryptanalysis?",
          nl: "Wat is het fundamentele concept achter Zero-Correlatie Lineaire Cryptanalyse?"
        },
        options: [
          { en: "Exploiting linear approximations with exactly zero correlation to distinguish ciphers from random", es: "Explotar aproximaciones lineales con correlación exactamente cero para distinguir cifrados de aleatorio", de: "Ausnutzung linearer Approximationen mit exakt null Korrelation zur Unterscheidung von Chiffren von Zufälligem", nl: "Uitbuiten van lineaire benaderingen met exact nul correlatie om versleutelingen te onderscheiden van willekeurig" },
          { en: "Removing all correlation from cryptanalytic measurements", es: "Eliminar toda correlación de mediciones criptoanalíticas", de: "Entfernung aller Korrelation aus kryptanalytischen Messungen", nl: "Verwijderen van alle correlatie uit cryptanalytische metingen" },
          { en: "Finding linear paths with minimal computational correlation", es: "Encontrar caminos lineales con correlación computacional mínima", de: "Finden linearer Pfade mit minimaler rechnerischer Korrelation", nl: "Vinden van lineaire paden met minimale computationele correlatie" },
          { en: "Implementing correlation-free statistical analysis methods", es: "Implementar métodos de análisis estadístico libre de correlación", de: "Implementierung korrelationsfreier statistischer Analysemethoden", nl: "Implementeren van correlatievrije statistische analysemethoden" }
        ],
        correct: 0,
        explanation: {
          en: "Zero-correlation linear cryptanalysis identifies linear approximations that have exactly zero correlation for the target cipher but non-zero correlation for random permutations, providing a powerful distinguisher that can be more effective than traditional linear cryptanalysis.",
          es: "El criptoanálisis lineal de correlación cero identifica aproximaciones lineales que tienen correlación exactamente cero para el cifrado objetivo pero correlación no cero para permutaciones aleatorias, proporcionando un distinguidor poderoso que puede ser más efectivo que el criptoanálisis lineal tradicional.",
          de: "Die Zero-Correlation Linear Cryptanalysis identifiziert lineare Approximationen, die exakt null Korrelation für die Zielchiffre haben, aber Nicht-Null-Korrelation für zufällige Permutationen, wodurch ein mächtiger Unterscheider bereitgestellt wird, der effektiver sein kann als traditionelle lineare Kryptanalyse.",
          nl: "Zero-correlatie lineaire cryptanalyse identificeert lineaire benaderingen die exact nul correlatie hebben voor de doelversleuteling maar niet-nul correlatie voor willekeurige permutaties, wat een krachtige onderscheider biedt die effectiever kan zijn dan traditionele lineaire cryptanalyse."
        }
      },
      {
        question: {
          en: "What is the theoretical foundation of Multidimensional Linear Cryptanalysis?",
          es: "¿Cuál es la base teórica del Criptoanálisis Lineal Multidimensional?",
          de: "Was ist die theoretische Grundlage der Mehrdimensionalen Linearen Kryptanalyse?",
          nl: "Wat is de theoretische basis van Multidimensionale Lineaire Cryptanalyse?"
        },
        options: [
          { en: "Simultaneously analyzing multiple linear approximations using vector space theory", es: "Analizar simultáneamente múltiples aproximaciones lineales usando teoría de espacios vectoriales", de: "Gleichzeitige Analyse mehrerer linearer Approximationen unter Verwendung der Vektorraumtheorie", nl: "Gelijktijdig analyseren van meerdere lineaire benaderingen met behulp van vectorruimtetheorie" },
          { en: "Extending linear cryptanalysis to higher-dimensional geometric spaces", es: "Extender criptoanálisis lineal a espacios geométricos de mayor dimensión", de: "Erweiterung der linearen Kryptanalyse auf höherdimensionale geometrische Räume", nl: "Uitbreiden van lineaire cryptanalyse naar hogerdimensionale geometrische ruimten" },
          { en: "Using multidimensional arrays for cryptanalytic data storage", es: "Usar arrays multidimensionales para almacenamiento de datos criptoanalíticos", de: "Verwendung mehrdimensionaler Arrays für kryptanalytische Datenspeicherung", nl: "Gebruik van multidimensionale arrays voor cryptanalytische data opslag" },
          { en: "Applying multidimensional scaling to cipher analysis", es: "Aplicar escalado multidimensional al análisis de cifrado", de: "Anwendung mehrdimensionaler Skalierung zur Chiffre-Analyse", nl: "Toepassen van multidimensionale schaling op versleutelingsanalyse" }
        ],
        correct: 0,
        explanation: {
          en: "Multidimensional linear cryptanalysis considers multiple linear approximations simultaneously as vectors in a linear space, exploiting correlations between different linear masks to extract more key information than single-dimensional approaches.",
          es: "El criptoanálisis lineal multidimensional considera múltiples aproximaciones lineales simultáneamente como vectores en un espacio lineal, explotando correlaciones entre diferentes máscaras lineales para extraer más información de clave que enfoques unidimensionales.",
          de: "Die mehrdimensionale lineare Kryptanalyse betrachtet mehrere lineare Approximationen gleichzeitig als Vektoren in einem linearen Raum und nutzt Korrelationen zwischen verschiedenen linearen Masken aus, um mehr Schlüsselinformationen zu extrahieren als eindimensionale Ansätze.",
          nl: "Multidimensionale lineaire cryptanalyse beschouwt meerdere lineaire benaderingen gelijktijdig als vectoren in een lineaire ruimte, waarbij correlaties tussen verschillende lineaire maskers worden uitgebuit om meer sleutelinformatie te extraheren dan eendimensionale benaderingen."
        }
      },
      {
        question: {
          en: "What is the core principle behind Polytopic Cryptanalysis?",
          es: "¿Cuál es el principio central detrás del Criptoanálisis Politópico?",
          de: "Was ist das Kernprinzip hinter der Polytopischen Kryptanalyse?",
          nl: "Wat is het kernprincipe achter Polytopische Cryptanalyse?"
        },
        options: [
          { en: "Modeling cipher operations as transformations of geometric polytopes in high-dimensional spaces", es: "Modelar operaciones de cifrado como transformaciones de politopos geométricos en espacios de alta dimensión", de: "Modellierung von Chiffre-Operationen als Transformationen geometrischer Polytope in hochdimensionalen Räumen", nl: "Modelleren van versleutelingsoperaties als transformaties van geometrische polytopen in hoogdimensionale ruimten" },
          { en: "Using multiple attack vectors from different political perspectives", es: "Usar múltiples vectores de ataque desde diferentes perspectivas políticas", de: "Verwendung mehrerer Angriffsvektoren aus verschiedenen politischen Perspektiven", nl: "Gebruik van meerdere aanvalsvectoren vanuit verschillende politieke perspectieven" },
          { en: "Analyzing topological properties of cipher state spaces", es: "Analizar propiedades topológicas de espacios de estado de cifrado", de: "Analyse topologischer Eigenschaften von Chiffre-Zustandsräumen", nl: "Analyseren van topologische eigenschappen van versleutelingstoestandsruimten" },
          { en: "Implementing polyhedral optimization in key recovery", es: "Implementar optimización poliédrica en recuperación de claves", de: "Implementierung polyhedraler Optimierung in der Schlüsselwiederherstellung", nl: "Implementeren van polyhedrale optimalisatie in sleutelherstel" }
        ],
        correct: 0,
        explanation: {
          en: "Polytopic cryptanalysis represents cipher operations as geometric transformations of polytopes, using concepts from convex geometry and linear programming to analyze how encryption transforms the geometric structure of plaintext spaces.",
          es: "El criptoanálisis politópico representa operaciones de cifrado como transformaciones geométricas de politopos, usando conceptos de geometría convexa y programación lineal para analizar cómo el cifrado transforma la estructura geométrica de espacios de texto plano.",
          de: "Die polytopische Kryptanalyse stellt Chiffre-Operationen als geometrische Transformationen von Polytopen dar und verwendet Konzepte aus der konvexen Geometrie und linearen Programmierung, um zu analysieren, wie Verschlüsselung die geometrische Struktur von Klartexträumen transformiert.",
          nl: "Polytopische cryptanalyse vertegenwoordigt versleutelingsoperaties als geometrische transformaties van polytopen, waarbij concepten uit convexe meetkunde en lineaire programmering worden gebruikt om te analyseren hoe versleuteling de geometrische structuur van plaintekst ruimten transformeert."
        }
      },
      {
        question: {
          en: "What is the fundamental concept behind Invariant Subspace Attacks?",
          es: "¿Cuál es el concepto fundamental detrás de los Ataques de Subespacio Invariante?",
          de: "Was ist das grundlegende Konzept hinter Invarianten Unterraum-Angriffen?",
          nl: "Wat is het fundamentele concept achter Invariante Deelruimte Aanvallen?"
        },
        options: [
          { en: "Exploiting vector subspaces that remain unchanged under cipher transformations", es: "Explotar subespacios vectoriales que permanecen sin cambios bajo transformaciones de cifrado", de: "Ausnutzung von Vektorunterräumen, die unter Chiffre-Transformationen unverändert bleiben", nl: "Uitbuiten van vectordeelruimten die onveranderd blijven onder versleutelingstransformaties" },
          { en: "Finding mathematical constants that don't change during encryption", es: "Encontrar constantes matemáticas que no cambian durante el cifrado", de: "Finden mathematischer Konstanten, die sich während der Verschlüsselung nicht ändern", nl: "Vinden van wiskundige constanten die niet veranderen tijdens versleuteling" },
          { en: "Using space-invariant filters in cryptographic analysis", es: "Usar filtros invariantes al espacio en análisis criptográfico", de: "Verwendung rauminvarianter Filter in der kryptographischen Analyse", nl: "Gebruik van ruimte-invariante filters in cryptografische analyse" },
          { en: "Implementing time-invariant properties in cipher design", es: "Implementar propiedades invariantes al tiempo en diseño de cifrado", de: "Implementierung zeitinvarianter Eigenschaften im Chiffre-Design", nl: "Implementeren van tijd-invariante eigenschappen in versleutelingsontwerp" }
        ],
        correct: 0,
        explanation: {
          en: "Invariant subspace attacks identify vector subspaces that are mapped to themselves under the cipher's round function, allowing attackers to work within these restricted spaces to recover keys more efficiently than analyzing the full state space.",
          es: "Los ataques de subespacio invariante identifican subespacios vectoriales que se mapean a sí mismos bajo la función de ronda del cifrado, permitiendo a los atacantes trabajar dentro de estos espacios restringidos para recuperar claves más eficientemente que analizando el espacio de estado completo.",
          de: "Invariante Unterraum-Angriffe identifizieren Vektorunterräume, die unter der Rundenfunktion der Chiffre auf sich selbst abgebildet werden, wodurch Angreifer innerhalb dieser eingeschränkten Räume arbeiten können, um Schlüssel effizienter zu gewinnen als bei der Analyse des vollständigen Zustandsraums.",
          nl: "Invariante deelruimte aanvallen identificeren vectordeelruimten die op zichzelf worden afgebeeld onder de rondefunctie van de versleuteling, waardoor aanvallers binnen deze beperkte ruimten kunnen werken om sleutels efficiënter te herstellen dan door de volledige toestandsruimte te analyseren."
        }
      },
      {
        question: {
          en: "What is the theoretical basis of Nonlinear Invariant Attacks in symmetric cryptanalysis?",
          es: "¿Cuál es la base teórica de los Ataques de Invariante No Lineal en criptoanálisis simétrico?",
          de: "Was ist die theoretische Basis nichtlinearer Invarianten-Angriffe in der symmetrischen Kryptanalyse?",
          nl: "Wat is de theoretische basis van Niet-lineaire Invariante Aanvallen in symmetrische cryptanalyse?"
        },
        options: [
          { en: "Exploiting polynomial invariants that remain constant through cipher rounds despite nonlinear operations", es: "Explotar invariantes polinómicas que permanecen constantes a través de rondas de cifrado a pesar de operaciones no lineales", de: "Ausnutzung polynomialer Invarianten, die trotz nichtlinearer Operationen über Chiffre-Runden konstant bleiben", nl: "Uitbuiten van polynomiale invarianten die constant blijven door versleutelingsronden ondanks niet-lineaire operaties" },
          { en: "Using nonlinear differential equations to model cipher behavior", es: "Usar ecuaciones diferenciales no lineales para modelar comportamiento de cifrado", de: "Verwendung nichtlinearer Differentialgleichungen zur Modellierung des Chiffre-Verhaltens", nl: "Gebruik van niet-lineaire differentiaalvergelijkingen om versleutelingsgedrag te modelleren" },
          { en: "Applying chaos theory to cryptographic transformations", es: "Aplicar teoría del caos a transformaciones criptográficas", de: "Anwendung der Chaostheorie auf kryptographische Transformationen", nl: "Toepassen van chaostheorie op cryptografische transformaties" },
          { en: "Implementing fractal geometry in cipher analysis", es: "Implementar geometría fractal en análisis de cifrado", de: "Implementierung der Fraktalgeometrie in der Chiffre-Analyse", nl: "Implementeren van fractale meetkunde in versleutelingsanalyse" }
        ],
        correct: 0,
        explanation: {
          en: "Nonlinear invariant attacks identify polynomial expressions over finite fields that evaluate to the same value for corresponding plaintext and ciphertext pairs, exploiting these relationships to distinguish the cipher from random and potentially recover key information.",
          es: "Los ataques de invariante no lineal identifican expresiones polinómicas sobre campos finitos que evalúan al mismo valor para pares correspondientes de texto plano y texto cifrado, explotando estas relaciones para distinguir el cifrado de aleatorio y potencialmente recuperar información de la clave.",
          de: "Nichtlineare Invarianten-Angriffe identifizieren polynomiale Ausdrücke über endlichen Körpern, die für entsprechende Klartext-Chiffretext-Paare denselben Wert ergeben, und nutzen diese Beziehungen aus, um die Chiffre von Zufälligem zu unterscheiden und möglicherweise Schlüsselinformationen zu gewinnen.",
          nl: "Niet-lineaire invariante aanvallen identificeren polynomiale uitdrukkingen over eindige velden die tot dezelfde waarde evalueren voor corresponderende plaintekst en cijfertekst paren, waarbij deze relaties worden uitgebuit om de versleuteling te onderscheiden van willekeurig en mogelijk sleutelinformatie te herstellen."
        }
      },
      {
        question: {
          en: "What is the core principle behind Yoyo Games in cryptanalytic distinguisher construction?",
          es: "¿Cuál es el principio central detrás de los Juegos Yoyo en construcción de distinguidores criptoanalíticos?",
          de: "Was ist das Kernprinzip hinter Yoyo-Spielen in der kryptanalytischen Unterscheider-Konstruktion?",
          nl: "Wat is het kernprincipe achter Yoyo Games in cryptanalytische onderscheider constructie?"
        },
        options: [
          { en: "Creating iterative processes where intermediate values oscillate in predictable patterns", es: "Crear procesos iterativos donde valores intermedios oscilan en patrones predecibles", de: "Schaffung iterativer Prozesse, bei denen Zwischenwerte in vorhersagbaren Mustern oszillieren", nl: "Creëren van iteratieve processen waarbij tussenwaarden oscilleren in voorspelbare patronen" },
          { en: "Using game theory to model cryptographic interactions", es: "Usar teoría de juegos para modelar interacciones criptográficas", de: "Verwendung der Spieltheorie zur Modellierung kryptographischer Interaktionen", nl: "Gebruik van speltheorie om cryptografische interacties te modelleren" },
          { en: "Implementing recursive bouncing patterns in differential analysis", es: "Implementar patrones de rebote recursivos en análisis diferencial", de: "Implementierung rekursiver Sprungmuster in der Differentialanalyse", nl: "Implementeren van recursieve stuitende patronen in differentiële analyse" },
          { en: "Creating oscillating electromagnetic interference patterns", es: "Crear patrones oscilantes de interferencia electromagnética", de: "Schaffung oszillierender elektromagnetischer Interferenzmuster", nl: "Creëren van oscillerende elektromagnetische interferentiepatronen" }
        ],
        correct: 0,
        explanation: {
          en: "Yoyo games construct distinguishers by creating processes where values at certain positions alternate between a small set of possibilities across multiple rounds, creating a 'yoyo effect' that can be detected statistically to distinguish the cipher from random.",
          es: "Los juegos yoyo construyen distinguidores creando procesos donde valores en ciertas posiciones alternan entre un pequeño conjunto de posibilidades a través de múltiples rondas, creando un 'efecto yoyo' que puede detectarse estadísticamente para distinguir el cifrado de aleatorio.",
          de: "Yoyo-Spiele konstruieren Unterscheider, indem sie Prozesse schaffen, bei denen Werte an bestimmten Positionen über mehrere Runden zwischen einer kleinen Menge von Möglichkeiten alternieren und einen 'Yoyo-Effekt' erzeugen, der statistisch erkannt werden kann, um die Chiffre von Zufälligem zu unterscheiden.",
          nl: "Yoyo games construeren onderscheiders door processen te creëren waarbij waarden op bepaalde posities alterneren tussen een kleine set mogelijkheden over meerdere ronden, wat een 'yoyo effect' creëert dat statistisch kan worden gedetecteerd om de versleuteling te onderscheiden van willekeurig."
        }
      },
      {
        question: {
          en: "What is the fundamental concept behind Division Property in integral cryptanalysis?",
          es: "¿Cuál es el concepto fundamental detrás de la Propiedad de División en criptoanálisis integral?",
          de: "Was ist das grundlegende Konzept hinter der Division Property in der integralen Kryptanalyse?",
          nl: "Wat is het fundamentele concept achter Division Property in integrale cryptanalyse?"
        },
        options: [
          { en: "Tracking how algebraic degrees of monomials propagate through cipher rounds", es: "Rastrear cómo los grados algebraicos de monomios se propagan a través de rondas de cifrado", de: "Verfolgung, wie sich algebraische Grade von Monomen durch Chiffre-Runden ausbreiten", nl: "Volgen hoe algebraïsche graden van monomials zich verspreiden door versleutelingsronden" },
          { en: "Dividing plaintext spaces into equal partitions for analysis", es: "Dividir espacios de texto plano en particiones iguales para análisis", de: "Aufteilung von Klartexträumen in gleiche Partitionen zur Analyse", nl: "Verdelen van plaintekst ruimten in gelijke partities voor analyse" },
          { en: "Using mathematical division operations in cipher construction", es: "Usar operaciones de división matemática en construcción de cifrado", de: "Verwendung mathematischer Divisionsoperationen im Chiffre-Aufbau", nl: "Gebruik van wiskundige deeloperaties in versleutelingsconstructie" },
          { en: "Implementing property-based division of cryptographic keys", es: "Implementar división basada en propiedades de claves criptográficas", de: "Implementierung eigenschaftsbasierter Aufteilung kryptographischer Schlüssel", nl: "Implementeren van eigenschap-gebaseerde verdeling van cryptografische sleutels" }
        ],
        correct: 0,
        explanation: {
          en: "Division property is a generalization of integral cryptanalysis that tracks the algebraic degree of each monomial term in the polynomial representation of the cipher, providing a more precise framework for determining whether the sum over a set equals zero.",
          es: "La propiedad de división es una generalización del criptoanálisis integral que rastrea el grado algebraico de cada término monomio en la representación polinómica del cifrado, proporcionando un marco más preciso para determinar si la suma sobre un conjunto es igual a cero.",
          de: "Die Division Property ist eine Verallgemeinerung der integralen Kryptanalyse, die den algebraischen Grad jedes Monomterms in der polynomialen Darstellung der Chiffre verfolgt und einen präziseren Rahmen zur Bestimmung bereitstellt, ob die Summe über eine Menge null ist.",
          nl: "Division property is een generalisatie van integrale cryptanalyse die de algebraïsche graad van elke monomiaal term in de polynomiale representatie van de versleuteling volgt, wat een preciezer kader biedt om te bepalen of de som over een set gelijk is aan nul."
        }
      },
      {
        question: {
          en: "What is the theoretical foundation of Mixture Differential Cryptanalysis?",
          es: "¿Cuál es la base teórica del Criptoanálisis Diferencial de Mezcla?",
          de: "Was ist die theoretische Grundlage der Mischungs-Differentiellen Kryptanalyse?",
          nl: "Wat is de theoretische basis van Mengsel Differentiële Cryptanalyse?"
        },
        options: [
          { en: "Combining multiple differential characteristics with overlapping key dependencies", es: "Combinar múltiples características diferenciales con dependencias de clave superpuestas", de: "Kombination mehrerer differentieller Eigenschaften mit überlappenden Schlüsselabhängigkeiten", nl: "Combineren van meerdere differentiële kenmerken met overlappende sleutelafhankelijkheden" },
          { en: "Mixing different types of cryptanalytic attacks simultaneously", es: "Mezclar diferentes tipos de ataques criptoanalíticos simultáneamente", de: "Mischung verschiedener Arten kryptanalytischer Angriffe gleichzeitig", nl: "Mengen van verschillende soorten cryptanalytische aanvallen gelijktijdig" },
          { en: "Using chemical mixture theory in cipher analysis", es: "Usar teoría de mezclas químicas en análisis de cifrado", de: "Verwendung chemischer Mischungstheorie in der Chiffre-Analyse", nl: "Gebruik van chemische mengseltheorie in versleutelingsanalyse" },
          { en: "Implementing Gaussian mixture models in differential patterns", es: "Implementar modelos de mezcla gaussiana en patrones diferenciales", de: "Implementierung Gaussscher Mischungsmodelle in differentiellen Mustern", nl: "Implementeren van Gaussische mengsel modellen in differentiële patronen" }
        ],
        correct: 0,
        explanation: {
          en: "Mixture differential cryptanalysis exploits situations where multiple differential paths can be combined because they share common key-dependent intermediate values, allowing for more efficient key recovery by leveraging the relationships between different differential characteristics.",
          es: "El criptoanálisis diferencial de mezcla explota situaciones donde múltiples caminos diferenciales pueden combinarse porque comparten valores intermedios comunes dependientes de la clave, permitiendo recuperación de claves más eficiente aprovechando las relaciones entre diferentes características diferenciales.",
          de: "Die Mischungs-Differentielle Kryptanalyse nutzt Situationen aus, in denen mehrere differentielle Pfade kombiniert werden können, weil sie gemeinsame schlüsselabhängige Zwischenwerte teilen, wodurch eine effizientere Schlüsselwiederherstellung durch Nutzung der Beziehungen zwischen verschiedenen differentiellen Eigenschaften ermöglicht wird.",
          nl: "Mengsel differentiële cryptanalyse maakt gebruik van situaties waarbij meerdere differentiële paden gecombineerd kunnen worden omdat ze gemeenschappelijke sleutelafhankelijke tussenwaarden delen, wat efficiënter sleutelherstel mogelijk maakt door de relaties tussen verschillende differentiële kenmerken te benutten."
        }
      },
      {
        question: {
          en: "What is the core principle behind Partial Key Exposure Attacks in asymmetric cryptanalysis?",
          es: "¿Cuál es el principio central detrás de los Ataques de Exposición Parcial de Clave en criptoanálisis asimétrico?",
          de: "Was ist das Kernprinzip hinter Partial Key Exposure Attacks in der asymmetrischen Kryptanalyse?",
          nl: "Wat is het kernprincipe achter Gedeeltelijke Sleutel Blootstelling Aanvallen in asymmetrische cryptanalyse?"
        },
        options: [
          { en: "Exploiting knowledge of a fraction of key bits to recover the complete private key", es: "Explotar conocimiento de una fracción de bits de clave para recuperar la clave privada completa", de: "Ausnutzung des Wissens über einen Bruchteil von Schlüsselbits zur Wiederherstellung des vollständigen privaten Schlüssels", nl: "Uitbuiten van kennis van een fractie van sleutelbits om de volledige private sleutel te herstellen" },
          { en: "Partially exposing keys through incomplete encryption processes", es: "Exponer parcialmente claves a través de procesos de cifrado incompletos", de: "Partielle Exposition von Schlüsseln durch unvollständige Verschlüsselungsprozesse", nl: "Gedeeltelijk blootstellen van sleutels door onvolledige versleutelingsprocessen" },
          { en: "Using photographic exposure techniques to analyze hardware keys", es: "Usar técnicas de exposición fotográfica para analizar claves de hardware", de: "Verwendung fotografischer Belichtungstechniken zur Analyse von Hardware-Schlüsseln", nl: "Gebruik van fotografische belichtingstechnieken om hardware sleutels te analyseren" },
          { en: "Exposing keys to environmental conditions for analysis", es: "Exponer claves a condiciones ambientales para análisis", de: "Exposition von Schlüsseln gegenüber Umweltbedingungen zur Analyse", nl: "Blootstellen van sleutels aan omgevingsomstandigheden voor analyse" }
        ],
        correct: 0,
        explanation: {
          en: "Partial key exposure attacks leverage lattice-based techniques and number-theoretic properties to reconstruct complete private keys when only a portion of the key bits are known, often through side-channel attacks or implementation vulnerabilities.",
          es: "Los ataques de exposición parcial de clave aprovechan técnicas basadas en retículos y propiedades número-teóricas para reconstruir claves privadas completas cuando solo se conoce una porción de los bits de clave, a menudo a través de ataques de canal lateral o vulnerabilidades de implementación.",
          de: "Partial Key Exposure Attacks nutzen gitterbasierte Techniken und zahlentheoretische Eigenschaften, um vollständige private Schlüssel zu rekonstruieren, wenn nur ein Teil der Schlüsselbits bekannt ist, oft durch Seitenkanal-Angriffe oder Implementierungsschwachstellen.",
          nl: "Gedeeltelijke sleutel blootstelling aanvallen maken gebruik van lattice-gebaseerde technieken en getaltheoretische eigenschappen om volledige private sleutels te reconstrueren wanneer slechts een deel van de sleutelbits bekend is, vaak door zijkanaal aanvallen of implementatie kwetsbaarheden."
        }
      },
      {
        question: {
          en: "What is the fundamental concept behind Rebound Attacks in hash function cryptanalysis?",
          es: "¿Cuál es el concepto fundamental detrás de los Ataques de Rebote en criptoanálisis de funciones hash?",
          de: "Was ist das grundlegende Konzept hinter Rebound-Angriffen in der Hash-Funktions-Kryptanalyse?",
          nl: "Wat is het fundamentele concept achter Rebound Attacks in hash functie cryptanalyse?"
        },
        options: [
          { en: "Using controlled differential propagation in both forward and backward directions through hash rounds", es: "Usar propagación diferencial controlada en direcciones hacia adelante y hacia atrás a través de rondas hash", de: "Verwendung kontrollierter differentieller Ausbreitung in Vorwärts- und Rückwärtsrichtungen durch Hash-Runden", nl: "Gebruik van gecontroleerde differentiële propagatie in zowel voorwaartse als achterwaartse richtingen door hash ronden" },
          { en: "Creating collision patterns that bounce between different hash values", es: "Crear patrones de colisión que rebotan entre diferentes valores hash", de: "Erstellung von Kollisionsmustern, die zwischen verschiedenen Hash-Werten hin und her springen", nl: "Creëren van botsingspatronen die stuiteren tussen verschillende hash waarden" },
          { en: "Implementing elastic collision dynamics in hash computation", es: "Implementar dinámicas de colisión elástica en cálculo hash", de: "Implementierung elastischer Kollisionsdynamik in Hash-Berechnungen", nl: "Implementeren van elastische botsing dynamiek in hash berekening" },
          { en: "Using rebound effects in cryptographic rubber hashing", es: "Usar efectos de rebote en hash criptográfico elástico", de: "Verwendung von Rebound-Effekten in kryptographischem Rubber-Hashing", nl: "Gebruik van rebound effecten in cryptografische rubber hashing" }
        ],
        correct: 0,
        explanation: {
          en: "Rebound attacks are a sophisticated technique for finding hash function collisions that works by precisely controlling the differential propagation through the middle rounds while allowing freedom in the inbound and outbound phases, creating a 'rebound' in the middle.",
          es: "Los ataques de rebote son una técnica sofisticada para encontrar colisiones de funciones hash que funciona controlando precisamente la propagación diferencial a través de las rondas medias mientras permite libertad en las fases de entrada y salida, creando un 'rebote' en el medio.",
          de: "Rebound-Angriffe sind eine ausgeklügelte Technik zum Finden von Hash-Funktions-Kollisionen, die funktioniert, indem die differentielle Ausbreitung durch die mittleren Runden präzise kontrolliert wird, während Freiheit in den Ein- und Ausgangsphasen erlaubt wird, wodurch ein 'Rebound' in der Mitte entsteht.",
          nl: "Rebound attacks zijn een geavanceerde techniek voor het vinden van hash functie botsingen die werkt door de differentiële propagatie door de middelste ronden precies te controleren terwijl vrijheid wordt toegestaan in de inkomende en uitgaande fasen, waardoor een 'rebound' in het midden ontstaat."
        }
      }
    ]
  };

  if (typeof window.addLevel === 'function') {
    window.addLevel('impossible-mode/cryptanalysis', level1);
  }
})();
