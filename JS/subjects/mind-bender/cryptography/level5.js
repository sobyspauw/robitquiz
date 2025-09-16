// Cryptography - Level 5: Hash Functions and Message Authentication
window.addLevel('mind-bender/cryptography', {
  name: {
    en: "Hash Functions and Message Authentication",
    es: "Funciones Hash y Autenticación de Mensajes",
    de: "Hash-Funktionen und Nachrichtenauthentifizierung",
    nl: "Hash-functies en Berichtauthenticatie"
  },
  questions: [
    {
      question: {
        en: "What is the primary purpose of a cryptographic hash function?",
        es: "¿Cuál es el propósito principal de una función hash criptográfica?",
        de: "Was ist der Hauptzweck einer kryptographischen Hash-Funktion?",
        nl: "Wat is het hoofddoel van een cryptografische hash-functie?"
      },
      options: [
        {
          en: "To encrypt data reversibly",
          es: "Cifrar datos de forma reversible",
          de: "Daten umkehrbar zu verschlüsseln",
          nl: "Data omkeerbaar versleutelen"
        },
        {
          en: "To create a fixed-size digest from variable-size input",
          es: "Crear un resumen de tamaño fijo a partir de entrada de tamaño variable",
          de: "Einen Digest fester Größe aus Eingaben variabler Größe zu erstellen",
          nl: "Een vaste grootte samenvatting maken van variabele grootte invoer"
        },
        {
          en: "To generate random numbers",
          es: "Generar números aleatorios",
          de: "Zufallszahlen zu generieren",
          nl: "Willekeurige nummers genereren"
        },
        {
          en: "To compress files",
          es: "Comprimir archivos",
          de: "Dateien zu komprimieren",
          nl: "Bestanden comprimeren"
        }
      ],
      correct: 1,
      explanation: {
        en: "A cryptographic hash function takes input of any size and produces a fixed-size output (digest or hash), providing data integrity verification and digital fingerprinting.",
        es: "Una función hash criptográfica toma entrada de cualquier tamaño y produce una salida de tamaño fijo (resumen o hash), proporcionando verificación de integridad de datos y huella digital.",
        de: "Eine kryptographische Hash-Funktion nimmt Eingaben beliebiger Größe und erzeugt eine Ausgabe fester Größe (Digest oder Hash), die Datenintegritätsprüfung und digitale Fingerabdrücke ermöglicht.",
        nl: "Een cryptografische hash-functie neemt invoer van elke grootte en produceert een uitvoer van vaste grootte (samenvatting of hash), wat data-integriteitsverificatie en digitale vingerafdrukken biedt."
      }
    },
    {
      question: {
        en: "Which property ensures that finding two inputs with the same hash output is computationally infeasible?",
        es: "¿Qué propiedad asegura que encontrar dos entradas con la misma salida hash sea computacionalmente inviable?",
        de: "Welche Eigenschaft stellt sicher, dass das Finden zweier Eingaben mit derselben Hash-Ausgabe rechnerisch nicht durchführbar ist?",
        nl: "Welke eigenschap zorgt ervoor dat het vinden van twee invoeren met dezelfde hash-uitvoer rekenkundig onhaalbaar is?"
      },
      options: [
        {
          en: "Preimage resistance",
          es: "Resistencia a preimagen",
          de: "Preimage-Resistenz",
          nl: "Preimage weerstand"
        },
        {
          en: "Collision resistance",
          es: "Resistencia a colisiones",
          de: "Kollisionsresistenz",
          nl: "Botsings weerstand"
        },
        {
          en: "Second preimage resistance",
          es: "Resistencia a segunda preimagen",
          de: "Zweite Preimage-Resistenz",
          nl: "Tweede preimage weerstand"
        },
        {
          en: "Avalanche effect",
          es: "Efecto avalancha",
          de: "Lawinen-Effekt",
          nl: "Lawine effect"
        }
      ],
      correct: 1,
      explanation: {
        en: "Collision resistance means it should be computationally infeasible to find two different inputs that produce the same hash output, preventing hash collisions.",
        es: "La resistencia a colisiones significa que debe ser computacionalmente inviable encontrar dos entradas diferentes que produzcan la misma salida hash, previniendo colisiones hash.",
        de: "Kollisionsresistenz bedeutet, dass es rechnerisch nicht durchführbar sein sollte, zwei verschiedene Eingaben zu finden, die dieselbe Hash-Ausgabe erzeugen, um Hash-Kollisionen zu verhindern.",
        nl: "Botsings weerstand betekent dat het rekenkundig onhaalbaar moet zijn om twee verschillende invoeren te vinden die dezelfde hash-uitvoer produceren, waardoor hash-botsingen worden voorkomen."
      }
    },
    {
      question: {
        en: "What is the output size of SHA-256?",
        es: "¿Cuál es el tamaño de salida de SHA-256?",
        de: "Was ist die Ausgabegröße von SHA-256?",
        nl: "Wat is de uitvoergrootte van SHA-256?"
      },
      options: [
        {
          en: "128 bits",
          es: "128 bits",
          de: "128 Bits",
          nl: "128 bits"
        },
        {
          en: "160 bits",
          es: "160 bits",
          de: "160 Bits",
          nl: "160 bits"
        },
        {
          en: "256 bits",
          es: "256 bits",
          de: "256 Bits",
          nl: "256 bits"
        },
        {
          en: "512 bits",
          es: "512 bits",
          de: "512 Bits",
          nl: "512 bits"
        }
      ],
      correct: 2,
      explanation: {
        en: "SHA-256 (Secure Hash Algorithm 256) produces a 256-bit (32-byte) hash digest, regardless of the input size.",
        es: "SHA-256 (Algoritmo Hash Seguro 256) produce un resumen hash de 256 bits (32 bytes), independientemente del tamaño de entrada.",
        de: "SHA-256 (Secure Hash Algorithm 256) erzeugt einen 256-Bit (32-Byte) Hash-Digest, unabhängig von der Eingabegröße.",
        nl: "SHA-256 (Secure Hash Algorithm 256) produceert een 256-bit (32-byte) hash-samenvatting, ongeacht de invoergrootte."
      }
    },
    {
      question: {
        en: "What is an HMAC?",
        es: "¿Qué es un HMAC?",
        de: "Was ist ein HMAC?",
        nl: "Wat is een HMAC?"
      },
      options: [
        {
          en: "A type of symmetric cipher",
          es: "Un tipo de cifrado simétrico",
          de: "Eine Art symmetrischer Chiffre",
          nl: "Een soort symmetrische cijfer"
        },
        {
          en: "A hash-based message authentication code",
          es: "Un código de autenticación de mensaje basado en hash",
          de: "Ein hash-basierter Nachrichtenauthentifizierungscode",
          nl: "Een hash-gebaseerde berichtauthenticatiecode"
        },
        {
          en: "A public key algorithm",
          es: "Un algoritmo de clave pública",
          de: "Ein Public-Key-Algorithmus",
          nl: "Een publieke sleutel algoritme"
        },
        {
          en: "A random number generator",
          es: "Un generador de números aleatorios",
          de: "Ein Zufallszahlengenerator",
          nl: "Een willekeurige nummergenerator"
        }
      ],
      correct: 1,
      explanation: {
        en: "HMAC (Hash-based Message Authentication Code) uses a cryptographic hash function combined with a secret key to provide message authentication and integrity verification.",
        es: "HMAC (Código de Autenticación de Mensaje Basado en Hash) usa una función hash criptográfica combinada con una clave secreta para proporcionar autenticación de mensaje y verificación de integridad.",
        de: "HMAC (Hash-based Message Authentication Code) verwendet eine kryptographische Hash-Funktion kombiniert mit einem geheimen Schlüssel, um Nachrichtenauthentifizierung und Integritätsprüfung zu bieten.",
        nl: "HMAC (Hash-based Message Authentication Code) gebruikt een cryptografische hash-functie gecombineerd met een geheime sleutel om berichtauthenticatie en integriteitsverificatie te bieden."
      }
    },
    {
      question: {
        en: "What is the main weakness of MD5?",
        es: "¿Cuál es la principal debilidad de MD5?",
        de: "Was ist die Hauptschwäche von MD5?",
        nl: "Wat is de hoofdzwakte van MD5?"
      },
      options: [
        {
          en: "It produces variable-length output",
          es: "Produce salida de longitud variable",
          de: "Es erzeugt Ausgaben variabler Länge",
          nl: "Het produceert uitvoer van variabele lengte"
        },
        {
          en: "It is vulnerable to collision attacks",
          es: "Es vulnerable a ataques de colisión",
          de: "Es ist anfällig für Kollisionsangriffe",
          nl: "Het is kwetsbaar voor botsingsaanvallen"
        },
        {
          en: "It requires too much memory",
          es: "Requiere demasiada memoria",
          de: "Es benötigt zu viel Speicher",
          nl: "Het vereist te veel geheugen"
        },
        {
          en: "It only works with small inputs",
          es: "Solo funciona con entradas pequeñas",
          de: "Es funktioniert nur mit kleinen Eingaben",
          nl: "Het werkt alleen met kleine invoeren"
        }
      ],
      correct: 1,
      explanation: {
        en: "MD5 is cryptographically broken due to its vulnerability to collision attacks, where different inputs can produce the same hash output, making it unsuitable for security applications.",
        es: "MD5 está criptográficamente roto debido a su vulnerabilidad a ataques de colisión, donde diferentes entradas pueden producir la misma salida hash, haciéndolo inadecuado para aplicaciones de seguridad.",
        de: "MD5 ist kryptographisch gebrochen aufgrund seiner Anfälligkeit für Kollisionsangriffe, bei denen verschiedene Eingaben dieselbe Hash-Ausgabe erzeugen können, was es für Sicherheitsanwendungen ungeeignet macht.",
        nl: "MD5 is cryptografisch gebroken vanwege zijn kwetsbaarheid voor botsingsaanvallen, waar verschillende invoeren dezelfde hash-uitvoer kunnen produceren, waardoor het ongeschikt is voor beveiligingstoepassingen."
      }
    },
    {
      question: {
        en: "What is a rainbow table attack?",
        es: "¿Qué es un ataque de tabla arcoíris?",
        de: "Was ist ein Rainbow-Table-Angriff?",
        nl: "Wat is een rainbow table aanval?"
      },
      options: [
        {
          en: "An attack using colorful visual patterns",
          es: "Un ataque usando patrones visuales coloridos",
          de: "Ein Angriff mit bunten visuellen Mustern",
          nl: "Een aanval met kleurrijke visuele patronen"
        },
        {
          en: "An attack using precomputed hash tables to crack passwords",
          es: "Un ataque usando tablas hash precomputadas para descifrar contraseñas",
          de: "Ein Angriff mit vorberechneten Hash-Tabellen zum Knacken von Passwörtern",
          nl: "Een aanval met vooraf berekende hash-tabellen om wachtwoorden te kraken"
        },
        {
          en: "A denial of service attack",
          es: "Un ataque de denegación de servicio",
          de: "Ein Denial-of-Service-Angriff",
          nl: "Een denial-of-service aanval"
        },
        {
          en: "A network protocol vulnerability",
          es: "Una vulnerabilidad de protocolo de red",
          de: "Eine Netzwerkprotokoll-Verwundbarkeit",
          nl: "Een netwerkprotocol kwetsbaarheid"
        }
      ],
      correct: 1,
      explanation: {
        en: "A rainbow table attack uses precomputed tables of hash values and their corresponding plaintext inputs to quickly reverse hash functions and crack passwords.",
        es: "Un ataque de tabla arcoíris usa tablas precomputadas de valores hash y sus entradas de texto plano correspondientes para revertir rápidamente funciones hash y descifrar contraseñas.",
        de: "Ein Rainbow-Table-Angriff verwendet vorberechnete Tabellen von Hash-Werten und ihren entsprechenden Klartext-Eingaben, um Hash-Funktionen schnell umzukehren und Passwörter zu knacken.",
        nl: "Een rainbow table aanval gebruikt vooraf berekende tabellen van hash-waarden en hun overeenkomstige platte tekst invoeren om hash-functies snel om te keren en wachtwoorden te kraken."
      }
    },
    {
      question: {
        en: "What is the purpose of salt in password hashing?",
        es: "¿Cuál es el propósito de la sal en el hash de contraseñas?",
        de: "Was ist der Zweck von Salt beim Passwort-Hashing?",
        nl: "Wat is het doel van zout bij wachtwoord hashing?"
      },
      options: [
        {
          en: "To make passwords longer",
          es: "Hacer las contraseñas más largas",
          de: "Passwörter länger zu machen",
          nl: "Wachtwoorden langer maken"
        },
        {
          en: "To add unique random data preventing rainbow table attacks",
          es: "Añadir datos aleatorios únicos previniendo ataques de tabla arcoíris",
          de: "Eindeutige zufällige Daten hinzuzufügen, um Rainbow-Table-Angriffe zu verhindern",
          nl: "Unieke willekeurige data toevoegen om rainbow table aanvallen te voorkomen"
        },
        {
          en: "To encrypt the password",
          es: "Cifrar la contraseña",
          de: "Das Passwort zu verschlüsseln",
          nl: "Het wachtwoord versleutelen"
        },
        {
          en: "To compress the hash output",
          es: "Comprimir la salida hash",
          de: "Die Hash-Ausgabe zu komprimieren",
          nl: "De hash-uitvoer comprimeren"
        }
      ],
      correct: 1,
      explanation: {
        en: "Salt adds unique random data to each password before hashing, ensuring that identical passwords produce different hashes and preventing rainbow table attacks.",
        es: "La sal añade datos aleatorios únicos a cada contraseña antes del hash, asegurando que contraseñas idénticas produzcan hashes diferentes y previniendo ataques de tabla arcoíris.",
        de: "Salt fügt eindeutige zufällige Daten zu jedem Passwort vor dem Hashing hinzu, wodurch sichergestellt wird, dass identische Passwörter verschiedene Hashes erzeugen und Rainbow-Table-Angriffe verhindert werden.",
        nl: "Zout voegt unieke willekeurige data toe aan elk wachtwoord voor hashing, wat ervoor zorgt dat identieke wachtwoorden verschillende hashes produceren en rainbow table aanvallen voorkomt."
      }
    },
    {
      question: {
        en: "Which is the strongest member of the SHA-2 family?",
        es: "¿Cuál es el miembro más fuerte de la familia SHA-2?",
        de: "Welches ist das stärkste Mitglied der SHA-2-Familie?",
        nl: "Welke is het sterkste lid van de SHA-2 familie?"
      },
      options: [
        {
          en: "SHA-224",
          es: "SHA-224",
          de: "SHA-224",
          nl: "SHA-224"
        },
        {
          en: "SHA-256",
          es: "SHA-256",
          de: "SHA-256",
          nl: "SHA-256"
        },
        {
          en: "SHA-384",
          es: "SHA-384",
          de: "SHA-384",
          nl: "SHA-384"
        },
        {
          en: "SHA-512",
          es: "SHA-512",
          de: "SHA-512",
          nl: "SHA-512"
        }
      ],
      correct: 3,
      explanation: {
        en: "SHA-512 provides the highest security level in the SHA-2 family with a 512-bit digest, offering 256 bits of security strength against collision attacks.",
        es: "SHA-512 proporciona el nivel de seguridad más alto en la familia SHA-2 con un resumen de 512 bits, ofreciendo 256 bits de fuerza de seguridad contra ataques de colisión.",
        de: "SHA-512 bietet das höchste Sicherheitsniveau in der SHA-2-Familie mit einem 512-Bit-Digest und bietet 256 Bits Sicherheitsstärke gegen Kollisionsangriffe.",
        nl: "SHA-512 biedt het hoogste beveiligingsniveau in de SHA-2 familie met een 512-bit samenvatting, wat 256 bits beveiligingssterkte biedt tegen botsingsaanvallen."
      }
    },
    {
      question: {
        en: "What is SHA-3's underlying construction called?",
        es: "¿Cómo se llama la construcción subyacente de SHA-3?",
        de: "Wie heißt die zugrunde liegende Konstruktion von SHA-3?",
        nl: "Hoe heet de onderliggende constructie van SHA-3?"
      },
      options: [
        {
          en: "Merkle-Damgård",
          es: "Merkle-Damgård",
          de: "Merkle-Damgård",
          nl: "Merkle-Damgård"
        },
        {
          en: "Sponge construction",
          es: "Construcción esponja",
          de: "Schwamm-Konstruktion",
          nl: "Spons constructie"
        },
        {
          en: "Feistel network",
          es: "Red Feistel",
          de: "Feistel-Netzwerk",
          nl: "Feistel netwerk"
        },
        {
          en: "Substitution-permutation network",
          es: "Red de sustitución-permutación",
          de: "Substitutions-Permutations-Netzwerk",
          nl: "Substitutie-permutatie netwerk"
        }
      ],
      correct: 1,
      explanation: {
        en: "SHA-3 is based on the Keccak algorithm which uses a sponge construction, a different approach from the Merkle-Damgård construction used by SHA-1 and SHA-2.",
        es: "SHA-3 se basa en el algoritmo Keccak que usa una construcción esponja, un enfoque diferente de la construcción Merkle-Damgård usada por SHA-1 y SHA-2.",
        de: "SHA-3 basiert auf dem Keccak-Algorithmus, der eine Schwamm-Konstruktion verwendet, einen anderen Ansatz als die Merkle-Damgård-Konstruktion von SHA-1 und SHA-2.",
        nl: "SHA-3 is gebaseerd op het Keccak-algoritme dat een spons constructie gebruikt, een andere benadering dan de Merkle-Damgård constructie gebruikt door SHA-1 en SHA-2."
      }
    },
    {
      question: {
        en: "What is the birthday attack based on?",
        es: "¿En qué se basa el ataque de cumpleaños?",
        de: "Worauf basiert der Geburtstagsangriff?",
        nl: "Waarop is de verjaardagsaanval gebaseerd?"
      },
      options: [
        {
          en: "The birthday paradox probability theory",
          es: "La teoría de probabilidad de la paradoja del cumpleaños",
          de: "Die Wahrscheinlichkeitstheorie des Geburtstagsparadoxons",
          nl: "De waarschijnlijkheidstheorie van de verjaardagsparadox"
        },
        {
          en: "Attacking systems on specific dates",
          es: "Atacar sistemas en fechas específicas",
          de: "Systeme an bestimmten Daten anzugreifen",
          nl: "Systemen aanvallen op specifieke data"
        },
        {
          en: "Using birth certificates as attack vectors",
          es: "Usar certificados de nacimiento como vectores de ataque",
          de: "Geburtsurkunden als Angriffsvektoren zu verwenden",
          nl: "Geboorteaktes gebruiken als aanvalsvectoren"
        },
        {
          en: "Social engineering based on birthdays",
          es: "Ingeniería social basada en cumpleaños",
          de: "Social Engineering basierend auf Geburtstagen",
          nl: "Social engineering gebaseerd op verjaardagen"
        }
      ],
      correct: 0,
      explanation: {
        en: "The birthday attack exploits the birthday paradox, which shows that collisions occur more frequently than expected, requiring only √2^n operations to find a collision in an n-bit hash.",
        es: "El ataque de cumpleaños explota la paradoja del cumpleaños, que muestra que las colisiones ocurren más frecuentemente de lo esperado, requiriendo solo √2^n operaciones para encontrar una colisión en un hash de n bits.",
        de: "Der Geburtstagsangriff nutzt das Geburtstagsparadoxon aus, das zeigt, dass Kollisionen häufiger auftreten als erwartet, und nur √2^n Operationen benötigt, um eine Kollision in einem n-Bit-Hash zu finden.",
        nl: "De verjaardagsaanval benut de verjaardagsparadox, die toont dat botsingen vaker voorkomen dan verwacht, waarbij slechts √2^n operaties nodig zijn om een botsing te vinden in een n-bit hash."
      }
    },
    {
      question: {
        en: "What is a MAC (Message Authentication Code) used for?",
        es: "¿Para qué se usa un MAC (Código de Autenticación de Mensaje)?",
        de: "Wofür wird ein MAC (Message Authentication Code) verwendet?",
        nl: "Waarvoor wordt een MAC (Message Authentication Code) gebruikt?"
      },
      options: [
        {
          en: "Media Access Control",
          es: "Control de Acceso a Medios",
          de: "Media Access Control",
          nl: "Media Access Control"
        },
        {
          en: "Message authentication and integrity verification",
          es: "Autenticación de mensaje y verificación de integridad",
          de: "Nachrichtenauthentifizierung und Integritätsprüfung",
          nl: "Berichtauthenticatie en integriteitsverificatie"
        },
        {
          en: "Computer hardware identification",
          es: "Identificación de hardware de computadora",
          de: "Computerhardware-Identifikation",
          nl: "Computer hardware identificatie"
        },
        {
          en: "Network routing protocols",
          es: "Protocolos de enrutamiento de red",
          de: "Netzwerk-Routing-Protokolle",
          nl: "Netwerk routering protocollen"
        }
      ],
      correct: 1,
      explanation: {
        en: "In cryptography, a MAC (Message Authentication Code) provides both authentication and integrity verification, ensuring the message came from the expected sender and hasn't been tampered with.",
        es: "En criptografía, un MAC (Código de Autenticación de Mensaje) proporciona tanto autenticación como verificación de integridad, asegurando que el mensaje vino del remitente esperado y no ha sido manipulado.",
        de: "In der Kryptographie bietet ein MAC (Message Authentication Code) sowohl Authentifizierung als auch Integritätsprüfung und stellt sicher, dass die Nachricht vom erwarteten Absender stammt und nicht manipuliert wurde.",
        nl: "In cryptografie biedt een MAC (Message Authentication Code) zowel authenticatie als integriteitsverificatie, wat ervoor zorgt dat het bericht van de verwachte afzender komt en niet gemanipuleerd is."
      }
    },
    {
      question: {
        en: "What is the difference between HMAC and CBC-MAC?",
        es: "¿Cuál es la diferencia entre HMAC y CBC-MAC?",
        de: "Was ist der Unterschied zwischen HMAC und CBC-MAC?",
        nl: "Wat is het verschil tussen HMAC en CBC-MAC?"
      },
      options: [
        {
          en: "HMAC uses hash functions, CBC-MAC uses block ciphers",
          es: "HMAC usa funciones hash, CBC-MAC usa cifrados de bloque",
          de: "HMAC verwendet Hash-Funktionen, CBC-MAC verwendet Blockchiffren",
          nl: "HMAC gebruikt hash-functies, CBC-MAC gebruikt blok ciphers"
        },
        {
          en: "HMAC is faster than CBC-MAC",
          es: "HMAC es más rápido que CBC-MAC",
          de: "HMAC ist schneller als CBC-MAC",
          nl: "HMAC is sneller dan CBC-MAC"
        },
        {
          en: "CBC-MAC provides better security",
          es: "CBC-MAC proporciona mejor seguridad",
          de: "CBC-MAC bietet bessere Sicherheit",
          nl: "CBC-MAC biedt betere beveiliging"
        },
        {
          en: "They are the same thing",
          es: "Son la misma cosa",
          de: "Sie sind dasselbe",
          nl: "Ze zijn hetzelfde"
        }
      ],
      correct: 0,
      explanation: {
        en: "HMAC is based on cryptographic hash functions (like SHA-256), while CBC-MAC is based on block ciphers (like AES) used in CBC mode for message authentication.",
        es: "HMAC se basa en funciones hash criptográficas (como SHA-256), mientras que CBC-MAC se basa en cifrados de bloque (como AES) usados en modo CBC para autenticación de mensaje.",
        de: "HMAC basiert auf kryptographischen Hash-Funktionen (wie SHA-256), während CBC-MAC auf Blockchiffren (wie AES) basiert, die im CBC-Modus für Nachrichtenauthentifizierung verwendet werden.",
        nl: "HMAC is gebaseerd op cryptografische hash-functies (zoals SHA-256), terwijl CBC-MAC gebaseerd is op blok ciphers (zoals AES) gebruikt in CBC-modus voor berichtauthenticatie."
      }
    },
    {
      question: {
        en: "What is the security issue with using SHA-1 today?",
        es: "¿Cuál es el problema de seguridad con usar SHA-1 hoy?",
        de: "Was ist das Sicherheitsproblem bei der heutigen Verwendung von SHA-1?",
        nl: "Wat is het beveiligingsprobleem met het gebruik van SHA-1 vandaag?"
      },
      options: [
        {
          en: "It's too slow for modern systems",
          es: "Es demasiado lento para sistemas modernos",
          de: "Es ist zu langsam für moderne Systeme",
          nl: "Het is te langzaam voor moderne systemen"
        },
        {
          en: "It has been proven vulnerable to collision attacks",
          es: "Ha sido probado vulnerable a ataques de colisión",
          de: "Es wurde als anfällig für Kollisionsangriffe erwiesen",
          nl: "Het is bewezen kwetsbaar voor botsingsaanvallen"
        },
        {
          en: "It produces too short output",
          es: "Produce salida demasiado corta",
          de: "Es erzeugt zu kurze Ausgaben",
          nl: "Het produceert te korte uitvoer"
        },
        {
          en: "It requires too much memory",
          es: "Requiere demasiada memoria",
          de: "Es benötigt zu viel Speicher",
          nl: "Het vereist te veel geheugen"
        }
      ],
      correct: 1,
      explanation: {
        en: "SHA-1 has been cryptographically broken with practical collision attacks demonstrated, making it unsuitable for security-critical applications. Major browsers and certificate authorities have deprecated its use.",
        es: "SHA-1 ha sido criptográficamente roto con ataques de colisión prácticos demostrados, haciéndolo inadecuado para aplicaciones críticas de seguridad. Los principales navegadores y autoridades de certificación han descontinuado su uso.",
        de: "SHA-1 wurde kryptographisch gebrochen mit praktischen Kollisionsangriffen demonstriert, was es für sicherheitskritische Anwendungen ungeeignet macht. Große Browser und Zertifizierungsstellen haben seine Verwendung eingestellt.",
        nl: "SHA-1 is cryptografisch gebroken met praktische botsingsaanvallen aangetoond, waardoor het ongeschikt is voor beveiligingskritische toepassingen. Grote browsers en certificaatautoriteiten hebben het gebruik ervan afgeschaft."
      }
    },
    {
      question: {
        en: "What is a Merkle tree used for?",
        es: "¿Para qué se usa un árbol de Merkle?",
        de: "Wofür wird ein Merkle-Baum verwendet?",
        nl: "Waarvoor wordt een Merkle tree gebruikt?"
      },
      options: [
        {
          en: "Efficient verification of large data structures",
          es: "Verificación eficiente de estructuras de datos grandes",
          de: "Effiziente Verifikation großer Datenstrukturen",
          nl: "Efficiënte verificatie van grote datastructuren"
        },
        {
          en: "Sorting algorithms",
          es: "Algoritmos de ordenamiento",
          de: "Sortieralgorithmen",
          nl: "Sorteer algoritmen"
        },
        {
          en: "Data compression",
          es: "Compresión de datos",
          de: "Datenkompression",
          nl: "Data compressie"
        },
        {
          en: "Network routing",
          es: "Enrutamiento de red",
          de: "Netzwerk-Routing",
          nl: "Netwerk routing"
        }
      ],
      correct: 0,
      explanation: {
        en: "A Merkle tree is a binary tree of hashes that allows efficient and secure verification of large data structures, widely used in blockchain, distributed systems, and peer-to-peer networks.",
        es: "Un árbol de Merkle es un árbol binario de hashes que permite verificación eficiente y segura de estructuras de datos grandes, ampliamente usado en blockchain, sistemas distribuidos y redes peer-to-peer.",
        de: "Ein Merkle-Baum ist ein binärer Baum von Hashes, der effiziente und sichere Verifikation großer Datenstrukturen ermöglicht, weit verbreitet in Blockchain, verteilten Systemen und Peer-to-Peer-Netzwerken.",
        nl: "Een Merkle tree is een binaire boom van hashes die efficiënte en veilige verificatie van grote datastructuren mogelijk maakt, veel gebruikt in blockchain, gedistribueerde systemen en peer-to-peer netwerken."
      }
    },
    {
      question: {
        en: "What is the avalanche effect in hash functions?",
        es: "¿Qué es el efecto avalancha en funciones hash?",
        de: "Was ist der Lawinen-Effekt bei Hash-Funktionen?",
        nl: "Wat is het lawine effect bij hash-functies?"
      },
      options: [
        {
          en: "Hash functions becoming slower over time",
          es: "Las funciones hash se vuelven más lentas con el tiempo",
          de: "Hash-Funktionen werden mit der Zeit langsamer",
          nl: "Hash-functies worden langzamer in de loop van de tijd"
        },
        {
          en: "Small input changes cause large output changes",
          es: "Pequeños cambios en la entrada causan grandes cambios en la salida",
          de: "Kleine Eingabeänderungen verursachen große Ausgabeänderungen",
          nl: "Kleine invoerveranderingen veroorzaken grote uitvoerveranderingen"
        },
        {
          en: "Hash collisions spreading to other values",
          es: "Las colisiones hash se extienden a otros valores",
          de: "Hash-Kollisionen breiten sich auf andere Werte aus",
          nl: "Hash-botsingen verspreiden naar andere waarden"
        },
        {
          en: "Memory usage increasing exponentially",
          es: "El uso de memoria aumenta exponencialmente",
          de: "Speicherverbrauch steigt exponentiell",
          nl: "Geheugengebruik neemt exponentieel toe"
        }
      ],
      correct: 1,
      explanation: {
        en: "The avalanche effect means that a small change in input (even a single bit) should cause a significant change in the output, with approximately half the output bits changing on average.",
        es: "El efecto avalancha significa que un pequeño cambio en la entrada (incluso un solo bit) debe causar un cambio significativo en la salida, con aproximadamente la mitad de los bits de salida cambiando en promedio.",
        de: "Der Lawinen-Effekt bedeutet, dass eine kleine Änderung in der Eingabe (sogar ein einzelnes Bit) eine signifikante Änderung in der Ausgabe verursachen sollte, wobei durchschnittlich etwa die Hälfte der Ausgabebits sich ändern.",
        nl: "Het lawine effect betekent dat een kleine verandering in de invoer (zelfs een enkele bit) een significante verandering in de uitvoer moet veroorzaken, waarbij gemiddeld ongeveer de helft van de uitvoerbits verandert."
      }
    },
    {
      question: {
        en: "What is PBKDF2 used for?",
        es: "¿Para qué se usa PBKDF2?",
        de: "Wofür wird PBKDF2 verwendet?",
        nl: "Waarvoor wordt PBKDF2 gebruikt?"
      },
      options: [
        {
          en: "File compression",
          es: "Compresión de archivos",
          de: "Dateikompression",
          nl: "Bestandscompressie"
        },
        {
          en: "Password-based key derivation",
          es: "Derivación de claves basada en contraseñas",
          de: "Passwort-basierte Schlüsselableitung",
          nl: "Op wachtwoord gebaseerde sleutelafleiding"
        },
        {
          en: "Public key encryption",
          es: "Cifrado de clave pública",
          de: "Public-Key-Verschlüsselung",
          nl: "Publieke sleutel versleuteling"
        },
        {
          en: "Digital signatures",
          es: "Firmas digitales",
          de: "Digitale Signaturen",
          nl: "Digitale handtekeningen"
        }
      ],
      correct: 1,
      explanation: {
        en: "PBKDF2 (Password-Based Key Derivation Function 2) derives cryptographic keys from passwords using salt and multiple iterations to make brute force attacks more difficult.",
        es: "PBKDF2 (Función de Derivación de Claves Basada en Contraseñas 2) deriva claves criptográficas de contraseñas usando sal y múltiples iteraciones para hacer más difíciles los ataques de fuerza bruta.",
        de: "PBKDF2 (Password-Based Key Derivation Function 2) leitet kryptographische Schlüssel aus Passwörtern mit Salt und mehreren Iterationen ab, um Brute-Force-Angriffe schwieriger zu machen.",
        nl: "PBKDF2 (Password-Based Key Derivation Function 2) leidt cryptografische sleutels af van wachtwoorden met zout en meerdere iteraties om brute force aanvallen moeilijker te maken."
      }
    },
    {
      question: {
        en: "What is the main advantage of scrypt over PBKDF2?",
        es: "¿Cuál es la principal ventaja de scrypt sobre PBKDF2?",
        de: "Was ist der Hauptvorteil von scrypt gegenüber PBKDF2?",
        nl: "Wat is het hoofdvoordeel van scrypt ten opzichte van PBKDF2?"
      },
      options: [
        {
          en: "It's faster to compute",
          es: "Es más rápido de computar",
          de: "Es ist schneller zu berechnen",
          nl: "Het is sneller te berekenen"
        },
        {
          en: "It's memory-hard, making ASIC attacks more difficult",
          es: "Es de memoria intensiva, haciendo más difíciles los ataques ASIC",
          de: "Es ist speicherintensiv, wodurch ASIC-Angriffe schwieriger werden",
          nl: "Het is geheugen-intensief, waardoor ASIC-aanvallen moeilijker worden"
        },
        {
          en: "It produces longer output",
          es: "Produce salida más larga",
          de: "Es erzeugt längere Ausgaben",
          nl: "Het produceert langere uitvoer"
        },
        {
          en: "It requires no salt",
          es: "No requiere sal",
          de: "Es benötigt kein Salt",
          nl: "Het vereist geen zout"
        }
      ],
      correct: 1,
      explanation: {
        en: "Scrypt is memory-hard, requiring significant amounts of memory in addition to computation time, making it more resistant to specialized hardware (ASIC) attacks compared to PBKDF2.",
        es: "Scrypt es de memoria intensiva, requiriendo cantidades significativas de memoria además del tiempo de cálculo, haciéndolo más resistente a ataques de hardware especializado (ASIC) comparado con PBKDF2.",
        de: "Scrypt ist speicherintensiv und benötigt neben der Rechenzeit erhebliche Mengen an Speicher, wodurch es resistenter gegen spezialisierte Hardware (ASIC) -Angriffe im Vergleich zu PBKDF2 wird.",
        nl: "Scrypt is geheugen-intensief, waarbij naast rekentijd aanzienlijke hoeveelheden geheugen nodig zijn, waardoor het meer weerstand biedt tegen gespecialiseerde hardware (ASIC) aanvallen vergeleken met PBKDF2."
      }
    },
    {
      question: {
        en: "What is Argon2 designed to resist?",
        es: "¿Contra qué está diseñado Argon2 para resistir?",
        de: "Wogegen ist Argon2 entworfen, um zu widerstehen?",
        nl: "Waar is Argon2 ontworpen om tegen te weerstaan?"
      },
      options: [
        {
          en: "Network attacks only",
          es: "Solo ataques de red",
          de: "Nur Netzwerkangriffe",
          nl: "Alleen netwerkaanvallen"
        },
        {
          en: "Both time-memory trade-off and side-channel attacks",
          es: "Tanto ataques de compensación tiempo-memoria como de canal lateral",
          de: "Sowohl Zeit-Speicher-Austausch- als auch Seitenkanalangriffe",
          nl: "Zowel tijd-geheugen wisselwerking als zijkanaal aanvallen"
        },
        {
          en: "Only brute force attacks",
          es: "Solo ataques de fuerza bruta",
          de: "Nur Brute-Force-Angriffe",
          nl: "Alleen brute force aanvallen"
        },
        {
          en: "Quantum computer attacks",
          es: "Ataques de computadoras cuánticas",
          de: "Quantencomputer-Angriffe",
          nl: "Quantumcomputer aanvallen"
        }
      ],
      correct: 1,
      explanation: {
        en: "Argon2 is designed to resist both time-memory trade-off attacks (like those against scrypt) and side-channel attacks, making it the winner of the Password Hashing Competition.",
        es: "Argon2 está diseñado para resistir tanto ataques de compensación tiempo-memoria (como los contra scrypt) como ataques de canal lateral, haciéndolo el ganador de la Competencia de Hash de Contraseñas.",
        de: "Argon2 ist darauf ausgelegt, sowohl Zeit-Speicher-Austausch-Angriffen (wie die gegen scrypt) als auch Seitenkanalangriffen zu widerstehen, was es zum Gewinner der Password Hashing Competition macht.",
        nl: "Argon2 is ontworpen om weerstand te bieden tegen zowel tijd-geheugen wisselwerking aanvallen (zoals die tegen scrypt) als zijkanaal aanvallen, waardoor het de winnaar is van de Password Hashing Competition."
      }
    },
    {
      question: {
        en: "What is a commitment scheme in cryptography?",
        es: "¿Qué es un esquema de compromiso en criptografía?",
        de: "Was ist ein Commitment-Schema in der Kryptographie?",
        nl: "Wat is een commitment schema in cryptografie?"
      },
      options: [
        {
          en: "A way to encrypt data",
          es: "Una forma de cifrar datos",
          de: "Eine Möglichkeit, Daten zu verschlüsseln",
          nl: "Een manier om data te versleutelen"
        },
        {
          en: "A method to commit to a value without revealing it until later",
          es: "Un método para comprometerse con un valor sin revelarlo hasta más tarde",
          de: "Eine Methode, sich auf einen Wert festzulegen, ohne ihn bis später preiszugeben",
          nl: "Een methode om zich te committeren aan een waarde zonder deze tot later te onthullen"
        },
        {
          en: "A digital signature algorithm",
          es: "Un algoritmo de firma digital",
          de: "Ein digitaler Signaturalgorithmus",
          nl: "Een digitaal handtekening algoritme"
        },
        {
          en: "A key exchange protocol",
          es: "Un protocolo de intercambio de claves",
          de: "Ein Schlüsselaustauschprotokoll",
          nl: "Een sleuteluitwisseling protocol"
        }
      ],
      correct: 1,
      explanation: {
        en: "A commitment scheme allows one party to commit to a chosen value while keeping it hidden, with the ability to reveal the committed value later in a verifiable way.",
        es: "Un esquema de compromiso permite a una parte comprometerse con un valor elegido mientras lo mantiene oculto, con la capacidad de revelar el valor comprometido más tarde de manera verificable.",
        de: "Ein Commitment-Schema ermöglicht es einer Partei, sich auf einen gewählten Wert festzulegen, während er verborgen bleibt, mit der Fähigkeit, den festgelegten Wert später auf überprüfbare Weise zu enthüllen.",
        nl: "Een commitment schema stelt een partij in staat zich te committeren aan een gekozen waarde terwijl deze verborgen blijft, met de mogelijkheid om de gecommitteerde waarde later op een verifieerbare manier te onthullen."
      }
    },
    {
      question: {
        en: "What is the purpose of HKDF (HMAC-based Key Derivation Function)?",
        es: "¿Cuál es el propósito de HKDF (Función de Derivación de Claves Basada en HMAC)?",
        de: "Was ist der Zweck von HKDF (HMAC-based Key Derivation Function)?",
        nl: "Wat is het doel van HKDF (HMAC-based Key Derivation Function)?"
      },
      options: [
        {
          en: "To compress cryptographic keys",
          es: "Comprimir claves criptográficas",
          de: "Kryptographische Schlüssel zu komprimieren",
          nl: "Cryptografische sleutels comprimeren"
        },
        {
          en: "To derive multiple keys from a single source key",
          es: "Derivar múltiples claves de una sola clave fuente",
          de: "Mehrere Schlüssel aus einem einzigen Quellschlüssel abzuleiten",
          nl: "Meerdere sleutels afleiden van een enkele bronsleutel"
        },
        {
          en: "To encrypt hash functions",
          es: "Cifrar funciones hash",
          de: "Hash-Funktionen zu verschlüsseln",
          nl: "Hash-functies versleutelen"
        },
        {
          en: "To generate random numbers",
          es: "Generar números aleatorios",
          de: "Zufallszahlen zu generieren",
          nl: "Willekeurige nummers genereren"
        }
      ],
      correct: 1,
      explanation: {
        en: "HKDF is used to derive one or more cryptographically strong keys from a source key material, providing extract-and-expand functionality for key management in protocols like TLS.",
        es: "HKDF se usa para derivar una o más claves criptográficamente fuertes de un material de clave fuente, proporcionando funcionalidad de extracción y expansión para gestión de claves en protocolos como TLS.",
        de: "HKDF wird verwendet, um einen oder mehrere kryptographisch starke Schlüssel aus einem Quellschlüsselmaterial abzuleiten und bietet Extract-and-Expand-Funktionalität für Schlüsselverwaltung in Protokollen wie TLS.",
        nl: "HKDF wordt gebruikt om een of meer cryptografisch sterke sleutels af te leiden van een bronsleutelmateriaal, wat extract-en-expand functionaliteit biedt voor sleutelbeheer in protocollen zoals TLS."
      }
    },
    {
      question: {
        en: "What is the difference between a hash function and a checksum?",
        es: "¿Cuál es la diferencia entre una función hash y una suma de verificación?",
        de: "Was ist der Unterschied zwischen einer Hash-Funktion und einer Prüfsumme?",
        nl: "Wat is het verschil tussen een hash-functie en een checksum?"
      },
      options: [
        {
          en: "No difference, they're identical",
          es: "No hay diferencia, son idénticas",
          de: "Kein Unterschied, sie sind identisch",
          nl: "Geen verschil, ze zijn identiek"
        },
        {
          en: "Hash functions are cryptographically secure, checksums detect accidental errors",
          es: "Las funciones hash son criptográficamente seguras, las sumas de verificación detectan errores accidentales",
          de: "Hash-Funktionen sind kryptographisch sicher, Prüfsummen erkennen versehentliche Fehler",
          nl: "Hash-functies zijn cryptografisch veilig, checksums detecteren onbedoelde fouten"
        },
        {
          en: "Checksums are always faster",
          es: "Las sumas de verificación siempre son más rápidas",
          de: "Prüfsummen sind immer schneller",
          nl: "Checksums zijn altijd sneller"
        },
        {
          en: "Hash functions only work on text",
          es: "Las funciones hash solo funcionan con texto",
          de: "Hash-Funktionen funktionieren nur mit Text",
          nl: "Hash-functies werken alleen met tekst"
        }
      ],
      correct: 1,
      explanation: {
        en: "Cryptographic hash functions are designed for security and resistance to attacks, while checksums (like CRC32) are designed for error detection and are not secure against intentional manipulation.",
        es: "Las funciones hash criptográficas están diseñadas para seguridad y resistencia a ataques, mientras que las sumas de verificación (como CRC32) están diseñadas para detección de errores y no son seguras contra manipulación intencional.",
        de: "Kryptographische Hash-Funktionen sind für Sicherheit und Widerstand gegen Angriffe entworfen, während Prüfsummen (wie CRC32) für Fehlererkennung entworfen sind und nicht sicher gegen absichtliche Manipulation sind.",
        nl: "Cryptografische hash-functies zijn ontworpen voor beveiliging en weerstand tegen aanvallen, terwijl checksums (zoals CRC32) ontworpen zijn voor foutdetectie en niet veilig zijn tegen opzettelijke manipulatie."
      }
    },
    {
      question: {
        en: "What is the main security property that BLAKE2 hash function provides over SHA-2?",
        es: "¿Cuál es la principal propiedad de seguridad que la función hash BLAKE2 proporciona sobre SHA-2?",
        de: "Was ist die Hauptsicherheitseigenschaft, die die Hash-Funktion BLAKE2 gegenüber SHA-2 bietet?",
        nl: "Wat is de belangrijkste beveiligingseigenschap die de BLAKE2 hash-functie biedt ten opzichte van SHA-2?"
      },
      options: [
        {
          en: "Higher speed with similar security",
          es: "Mayor velocidad con seguridad similar",
          de: "Höhere Geschwindigkeit bei ähnlicher Sicherheit",
          nl: "Hogere snelheid met vergelijkbare beveiliging"
        },
        {
          en: "Better collision resistance",
          es: "Mejor resistencia a colisiones",
          de: "Bessere Kollisionsresistenz",
          nl: "Betere botsings weerstand"
        },
        {
          en: "Larger output size",
          es: "Tamaño de salida más grande",
          de: "Größere Ausgabegröße",
          nl: "Grotere uitvoergrootte"
        },
        {
          en: "Quantum resistance",
          es: "Resistencia cuántica",
          de: "Quantenresistenz",
          nl: "Quantum weerstand"
        }
      ],
      correct: 0,
      explanation: {
        en: "BLAKE2 is designed to be faster than SHA-2 while providing at least the same level of security. It's optimized for speed on modern processors while maintaining cryptographic strength.",
        es: "BLAKE2 está diseñado para ser más rápido que SHA-2 mientras proporciona al menos el mismo nivel de seguridad. Está optimizado para velocidad en procesadores modernos mientras mantiene la fuerza criptográfica.",
        de: "BLAKE2 ist darauf ausgelegt, schneller als SHA-2 zu sein, während es mindestens das gleiche Sicherheitsniveau bietet. Es ist für Geschwindigkeit auf modernen Prozessoren optimiert, während es die kryptographische Stärke beibehält.",
        nl: "BLAKE2 is ontworpen om sneller te zijn dan SHA-2 terwijl het ten minste hetzelfde beveiligingsniveau biedt. Het is geoptimaliseerd voor snelheid op moderne processors terwijl het cryptografische sterkte behoudt."
      }
    },
    {
      question: {
        en: "What is the purpose of domain separation in hash functions?",
        es: "¿Cuál es el propósito de la separación de dominio en funciones hash?",
        de: "Was ist der Zweck der Domain-Separation bei Hash-Funktionen?",
        nl: "Wat is het doel van domeinscheiding in hash-functies?"
      },
      options: [
        {
          en: "To make hashing faster",
          es: "Hacer el hash más rápido",
          de: "Das Hashing schneller zu machen",
          nl: "Hashing sneller maken"
        },
        {
          en: "To prevent different applications from interfering with each other",
          es: "Prevenir que diferentes aplicaciones interfieran entre sí",
          de: "Zu verhindern, dass verschiedene Anwendungen sich gegenseitig stören",
          nl: "Voorkomen dat verschillende toepassingen elkaar verstoren"
        },
        {
          en: "To reduce memory usage",
          es: "Reducir el uso de memoria",
          de: "Den Speicherverbrauch zu reduzieren",
          nl: "Geheugengebruik verminderen"
        },
        {
          en: "To compress the output",
          es: "Comprimir la salida",
          de: "Die Ausgabe zu komprimieren",
          nl: "De uitvoer comprimeren"
        }
      ],
      correct: 1,
      explanation: {
        en: "Domain separation ensures that hash function usage in different contexts (digital signatures, key derivation, etc.) produces different outputs even for the same input, preventing cross-protocol attacks.",
        es: "La separación de dominio asegura que el uso de funciones hash en diferentes contextos (firmas digitales, derivación de claves, etc.) produzca diferentes salidas incluso para la misma entrada, previniendo ataques entre protocolos.",
        de: "Domain-Separation stellt sicher, dass die Verwendung von Hash-Funktionen in verschiedenen Kontexten (digitale Signaturen, Schlüsselableitung, etc.) verschiedene Ausgaben für dieselbe Eingabe erzeugt und Cross-Protocol-Angriffe verhindert.",
        nl: "Domeinscheiding zorgt ervoor dat hash-functie gebruik in verschillende contexten (digitale handtekeningen, sleutelafleiding, enz.) verschillende uitvoeren produceert zelfs voor dezelfde invoer, waardoor cross-protocol aanvallen worden voorkomen."
      }
    },
    {
      question: {
        en: "What is the key stretching technique used by bcrypt?",
        es: "¿Cuál es la técnica de estiramiento de claves usada por bcrypt?",
        de: "Was ist die Key-Stretching-Technik, die von bcrypt verwendet wird?",
        nl: "Wat is de key stretching techniek gebruikt door bcrypt?"
      },
      options: [
        {
          en: "Multiple iterations of SHA-256",
          es: "Múltiples iteraciones de SHA-256",
          de: "Mehrere Iterationen von SHA-256",
          nl: "Meerdere iteraties van SHA-256"
        },
        {
          en: "Adaptive iteration count based on Blowfish cipher",
          es: "Contador de iteraciones adaptativo basado en cifrado Blowfish",
          de: "Adaptive Iterationsanzahl basierend auf Blowfish-Chiffre",
          nl: "Adaptieve iteratie telling gebaseerd op Blowfish cipher"
        },
        {
          en: "Memory-intensive hashing",
          es: "Hash intensivo en memoria",
          de: "Speicherintensives Hashing",
          nl: "Geheugen-intensieve hashing"
        },
        {
          en: "Quantum-resistant algorithms",
          es: "Algoritmos resistentes a cuánticos",
          de: "Quantenresistente Algorithmen",
          nl: "Quantum-resistente algoritmen"
        }
      ],
      correct: 1,
      explanation: {
        en: "Bcrypt uses an adaptive iteration count (cost factor) with the Blowfish cipher to make password cracking computationally expensive, with the ability to increase difficulty over time.",
        es: "Bcrypt usa un contador de iteraciones adaptativo (factor de costo) con el cifrado Blowfish para hacer el cracking de contraseñas computacionalmente costoso, con la capacidad de aumentar la dificultad con el tiempo.",
        de: "Bcrypt verwendet eine adaptive Iterationsanzahl (Kostenfaktor) mit der Blowfish-Chiffre, um das Knacken von Passwörtern rechnerisch teuer zu machen, mit der Fähigkeit, die Schwierigkeit über die Zeit zu erhöhen.",
        nl: "Bcrypt gebruikt een adaptieve iteratie telling (kostenfactor) met de Blowfish cipher om wachtwoord kraken rekenkundig duur te maken, met de mogelijkheid om de moeilijkheid in de loop van de tijd te verhogen."
      }
    },
    {
      question: {
        en: "What is the primary advantage of using SHAKE over fixed-output hash functions?",
        es: "¿Cuál es la principal ventaja de usar SHAKE sobre funciones hash de salida fija?",
        de: "Was ist der Hauptvorteil der Verwendung von SHAKE gegenüber Hash-Funktionen mit fester Ausgabe?",
        nl: "Wat is het hoofdvoordeel van het gebruik van SHAKE ten opzichte van hash-functies met vaste uitvoer?"
      },
      options: [
        {
          en: "Higher security than SHA-3",
          es: "Mayor seguridad que SHA-3",
          de: "Höhere Sicherheit als SHA-3",
          nl: "Hogere beveiliging dan SHA-3"
        },
        {
          en: "Variable-length output that can be customized",
          es: "Salida de longitud variable que puede personalizarse",
          de: "Variable Ausgabelänge, die angepasst werden kann",
          nl: "Variabele lengte uitvoer die aangepast kan worden"
        },
        {
          en: "Faster computation speed",
          es: "Velocidad de cálculo más rápida",
          de: "Schnellere Berechnungsgeschwindigkeit",
          nl: "Snellere rekensnelheid"
        },
        {
          en: "Better resistance to quantum attacks",
          es: "Mejor resistencia a ataques cuánticos",
          de: "Bessere Resistenz gegen Quantenangriffe",
          nl: "Betere weerstand tegen quantumaanvallen"
        }
      ],
      correct: 1,
      explanation: {
        en: "SHAKE (Secure Hash Algorithm and Keccak) functions are extendable-output functions (XOFs) that can produce output of any desired length, providing flexibility for applications that need different hash sizes.",
        es: "Las funciones SHAKE (Algoritmo Hash Seguro y Keccak) son funciones de salida extensible (XOF) que pueden producir salida de cualquier longitud deseada, proporcionando flexibilidad para aplicaciones que necesitan diferentes tamaños de hash.",
        de: "SHAKE (Secure Hash Algorithm and Keccak) Funktionen sind erweiterbare Ausgabefunktionen (XOFs), die Ausgaben beliebiger gewünschter Länge erzeugen können und Flexibilität für Anwendungen bieten, die verschiedene Hash-Größen benötigen.",
        nl: "SHAKE (Secure Hash Algorithm and Keccak) functies zijn uitbreidbare-uitvoer functies (XOFs) die uitvoer van elke gewenste lengte kunnen produceren, wat flexibiliteit biedt voor toepassingen die verschillende hash-groottes nodig hebben."
      }
    },
    {
      question: {
        en: "What is the main purpose of HMAC-SHA256 in TLS handshake?",
        es: "¿Cuál es el propósito principal de HMAC-SHA256 en el handshake TLS?",
        de: "Was ist der Hauptzweck von HMAC-SHA256 im TLS-Handshake?",
        nl: "Wat is het hoofddoel van HMAC-SHA256 in TLS handshake?"
      },
      options: [
        {
          en: "Data compression",
          es: "Compresión de datos",
          de: "Datenkompression",
          nl: "Data compressie"
        },
        {
          en: "Message integrity and authentication in handshake messages",
          es: "Integridad de mensaje y autenticación en mensajes de handshake",
          de: "Nachrichtenintegrität und Authentifizierung in Handshake-Nachrichten",
          nl: "Berichtintegriteit en authenticatie in handshake berichten"
        },
        {
          en: "Key encryption",
          es: "Cifrado de claves",
          de: "Schlüsselverschlüsselung",
          nl: "Sleutel versleuteling"
        },
        {
          en: "Random number generation",
          es: "Generación de números aleatorios",
          de: "Zufallszahlenerzeugung",
          nl: "Willekeurige nummergeneratie"
        }
      ],
      correct: 1,
      explanation: {
        en: "In TLS handshake, HMAC-SHA256 is used to ensure message integrity and authenticity of handshake messages, preventing tampering and man-in-the-middle attacks during the key exchange process.",
        es: "En el handshake TLS, HMAC-SHA256 se usa para asegurar la integridad y autenticidad de mensajes del handshake, previniendo manipulación y ataques de hombre en el medio durante el proceso de intercambio de claves.",
        de: "Im TLS-Handshake wird HMAC-SHA256 verwendet, um Nachrichtenintegrität und Authentizität der Handshake-Nachrichten sicherzustellen und Manipulation und Man-in-the-Middle-Angriffe während des Schlüsselaustauschs zu verhindern.",
        nl: "In TLS handshake wordt HMAC-SHA256 gebruikt om berichtintegriteit en authenticiteit van handshake berichten te verzekeren, waardoor manipulatie en man-in-the-middle aanvallen tijdens het sleuteluitwisseling proces worden voorkomen."
      }
    },
    {
      question: {
        en: "What is the key difference between KMAC and HMAC?",
        es: "¿Cuál es la diferencia clave entre KMAC y HMAC?",
        de: "Was ist der Hauptunterschied zwischen KMAC und HMAC?",
        nl: "Wat is het belangrijkste verschil tussen KMAC en HMAC?"
      },
      options: [
        {
          en: "KMAC is based on Keccak/SHA-3, HMAC is based on Merkle-Damgård hashes",
          es: "KMAC se basa en Keccak/SHA-3, HMAC se basa en hashes Merkle-Damgård",
          de: "KMAC basiert auf Keccak/SHA-3, HMAC basiert auf Merkle-Damgård-Hashes",
          nl: "KMAC is gebaseerd op Keccak/SHA-3, HMAC is gebaseerd op Merkle-Damgård hashes"
        },
        {
          en: "KMAC is faster than HMAC",
          es: "KMAC es más rápido que HMAC",
          de: "KMAC ist schneller als HMAC",
          nl: "KMAC is sneller dan HMAC"
        },
        {
          en: "KMAC uses symmetric encryption",
          es: "KMAC usa cifrado simétrico",
          de: "KMAC verwendet symmetrische Verschlüsselung",
          nl: "KMAC gebruikt symmetrische versleuteling"
        },
        {
          en: "HMAC provides better security",
          es: "HMAC proporciona mejor seguridad",
          de: "HMAC bietet bessere Sicherheit",
          nl: "HMAC biedt betere beveiliging"
        }
      ],
      correct: 0,
      explanation: {
        en: "KMAC (Keccak Message Authentication Code) is built on the SHA-3/Keccak sponge construction, while HMAC is designed for Merkle-Damgård construction hash functions like SHA-2.",
        es: "KMAC (Código de Autenticación de Mensaje Keccak) está construido sobre la construcción esponja SHA-3/Keccak, mientras que HMAC está diseñado para funciones hash de construcción Merkle-Damgård como SHA-2.",
        de: "KMAC (Keccak Message Authentication Code) basiert auf der SHA-3/Keccak-Schwamm-Konstruktion, während HMAC für Merkle-Damgård-Konstruktion Hash-Funktionen wie SHA-2 entworfen ist.",
        nl: "KMAC (Keccak Message Authentication Code) is gebouwd op de SHA-3/Keccak spons constructie, terwijl HMAC ontworpen is voor Merkle-Damgård constructie hash-functies zoals SHA-2."
      }
    },
    {
      question: {
        en: "What is the recommended approach for storing passwords in modern applications?",
        es: "¿Cuál es el enfoque recomendado para almacenar contraseñas en aplicaciones modernas?",
        de: "Was ist der empfohlene Ansatz für die Speicherung von Passwörtern in modernen Anwendungen?",
        nl: "Wat is de aanbevolen benadering voor het opslaan van wachtwoorden in moderne applicaties?"
      },
      options: [
        {
          en: "Store in plaintext for easy access",
          es: "Almacenar en texto plano para fácil acceso",
          de: "In Klartext speichern für einfachen Zugriff",
          nl: "Opslaan in platte tekst voor gemakkelijke toegang"
        },
        {
          en: "Use Argon2, bcrypt, or scrypt with proper salt",
          es: "Usar Argon2, bcrypt, o scrypt con sal apropiada",
          de: "Argon2, bcrypt oder scrypt mit ordnungsgemäßem Salt verwenden",
          nl: "Argon2, bcrypt, of scrypt gebruiken met juiste zout"
        },
        {
          en: "Use MD5 with salt",
          es: "Usar MD5 con sal",
          de: "MD5 mit Salt verwenden",
          nl: "MD5 met zout gebruiken"
        },
        {
          en: "Use simple SHA-256 hash",
          es: "Usar hash SHA-256 simple",
          de: "Einfachen SHA-256-Hash verwenden",
          nl: "Eenvoudige SHA-256 hash gebruiken"
        }
      ],
      correct: 1,
      explanation: {
        en: "Modern password storage should use purpose-built password hashing functions like Argon2, bcrypt, or scrypt with unique salts, as they're designed to be slow and resist brute force attacks.",
        es: "El almacenamiento moderno de contraseñas debe usar funciones hash de contraseñas especializadas como Argon2, bcrypt, o scrypt con sales únicas, ya que están diseñadas para ser lentas y resistir ataques de fuerza bruta.",
        de: "Moderne Passwort-Speicherung sollte speziell entwickelte Passwort-Hashing-Funktionen wie Argon2, bcrypt oder scrypt mit eindeutigen Salts verwenden, da sie darauf ausgelegt sind, langsam zu sein und Brute-Force-Angriffen zu widerstehen.",
        nl: "Moderne wachtwoordopslag moet speciaal gebouwde wachtwoord hashing functies zoals Argon2, bcrypt, of scrypt met unieke zouten gebruiken, omdat ze ontworpen zijn om langzaam te zijn en weerstand te bieden aan brute force aanvallen."
      }
    },
    {
      question: {
        en: "What is the difference between MAC and digital signatures for message authentication?",
        es: "¿Cuál es la diferencia entre MAC y firmas digitales para autenticación de mensajes?",
        de: "Was ist der Unterschied zwischen MAC und digitalen Signaturen für Nachrichtenauthentifizierung?",
        nl: "Wat is het verschil tussen MAC en digitale handtekeningen voor berichtauthenticatie?"
      },
      options: [
        {
          en: "MAC uses symmetric keys, digital signatures use asymmetric keys",
          es: "MAC usa claves simétricas, las firmas digitales usan claves asimétricas",
          de: "MAC verwendet symmetrische Schlüssel, digitale Signaturen verwenden asymmetrische Schlüssel",
          nl: "MAC gebruikt symmetrische sleutels, digitale handtekeningen gebruiken asymmetrische sleutels"
        },
        {
          en: "MAC provides encryption, digital signatures only authenticate",
          es: "MAC proporciona cifrado, las firmas digitales solo autentican",
          de: "MAC bietet Verschlüsselung, digitale Signaturen authentifizieren nur",
          nl: "MAC biedt versleuteling, digitale handtekeningen authenticeren alleen"
        },
        {
          en: "No difference, they're interchangeable",
          es: "Sin diferencia, son intercambiables",
          de: "Kein Unterschied, sie sind austauschbar",
          nl: "Geen verschil, ze zijn verwisselbaar"
        },
        {
          en: "MAC is faster but less secure",
          es: "MAC es más rápido pero menos seguro",
          de: "MAC ist schneller aber weniger sicher",
          nl: "MAC is sneller maar minder veilig"
        }
      ],
      correct: 0,
      explanation: {
        en: "MAC (Message Authentication Code) uses symmetric cryptography with shared secret keys, while digital signatures use asymmetric cryptography with public/private key pairs. Digital signatures also provide non-repudiation.",
        es: "MAC (Código de Autenticación de Mensaje) usa criptografía simétrica con claves secretas compartidas, mientras que las firmas digitales usan criptografía asimétrica con pares de claves públicas/privadas. Las firmas digitales también proporcionan no repudio.",
        de: "MAC (Message Authentication Code) verwendet symmetrische Kryptographie mit gemeinsamen geheimen Schlüsseln, während digitale Signaturen asymmetrische Kryptographie mit öffentlichen/privaten Schlüsselpaaren verwenden. Digitale Signaturen bieten auch Nicht-Abstreitbarkeit.",
        nl: "MAC (Message Authentication Code) gebruikt symmetrische cryptografie met gedeelde geheime sleutels, terwijl digitale handtekeningen asymmetrische cryptografie gebruiken met publieke/private sleutelparen. Digitale handtekeningen bieden ook niet-verwerping."
      }
    },
    {
      question: {
        en: "What is the avalanche effect in hash functions?",
        es: "¿Qué es el efecto avalancha en funciones hash?",
        de: "Was ist der Lawineneffekt in Hash-Funktionen?",
        nl: "Wat is het lawine-effect in hash-functies?"
      },
      options: [
        {
          en: "A small input change causes large output change",
          es: "Un pequeño cambio en la entrada causa un gran cambio en la salida",
          de: "Eine kleine Eingabeänderung verursacht eine große Ausgabeänderung",
          nl: "Een kleine invoerverandering veroorzaakt een grote uitvoerverandering"
        },
        {
          en: "Hash functions become exponentially slower",
          es: "Las funciones hash se vuelven exponencialmente más lentas",
          de: "Hash-Funktionen werden exponentiell langsamer",
          nl: "Hash-functies worden exponentieel langzamer"
        },
        {
          en: "Output size increases with input size",
          es: "El tamaño de salida aumenta con el tamaño de entrada",
          de: "Die Ausgabegröße steigt mit der Eingabegröße",
          nl: "Uitvoergrootte neemt toe met invoergrootte"
        },
        {
          en: "Multiple inputs produce identical hashes",
          es: "Múltiples entradas producen hashes idénticos",
          de: "Mehrere Eingaben erzeugen identische Hashes",
          nl: "Meerdere invoeren produceren identieke hashes"
        }
      ],
      correct: 0,
      explanation: {
        en: "The avalanche effect means that changing even a single bit in the input should cause approximately half of the output bits to flip, ensuring that similar inputs produce very different hash values.",
        es: "El efecto avalancha significa que cambiar incluso un solo bit en la entrada debería hacer que aproximadamente la mitad de los bits de salida cambien, asegurando que entradas similares produzcan valores hash muy diferentes.",
        de: "Der Lawineneffekt bedeutet, dass das Ändern auch nur eines einzigen Bits in der Eingabe dazu führen sollte, dass etwa die Hälfte der Ausgabebits umkippen, wodurch sichergestellt wird, dass ähnliche Eingaben sehr unterschiedliche Hash-Werte erzeugen.",
        nl: "Het lawine-effect betekent dat het veranderen van zelfs een enkele bit in de invoer ervoor moet zorgen dat ongeveer de helft van de uitvoerbits omslaan, wat ervoor zorgt dat vergelijkbare invoeren zeer verschillende hash-waarden produceren."
      }
    },
    {
      question: {
        en: "What is the primary advantage of HMAC over simple hash-based MACs?",
        es: "¿Cuál es la ventaja principal de HMAC sobre MACs basados en hash simples?",
        de: "Was ist der Hauptvorteil von HMAC gegenüber einfachen hash-basierten MACs?",
        nl: "Wat is het hoofdvoordeel van HMAC ten opzichte van eenvoudige hash-gebaseerde MACs?"
      },
      options: [
        {
          en: "It's faster to compute",
          es: "Es más rápido de computar",
          de: "Es ist schneller zu berechnen",
          nl: "Het is sneller te berekenen"
        },
        {
          en: "It prevents length extension attacks",
          es: "Previene ataques de extensión de longitud",
          de: "Es verhindert Längen-Erweiterungsangriffe",
          nl: "Het voorkomt lengte-extensie aanvallen"
        },
        {
          en: "It produces shorter output",
          es: "Produce salida más corta",
          de: "Es erzeugt kürzere Ausgabe",
          nl: "Het produceert kortere uitvoer"
        },
        {
          en: "It requires fewer keys",
          es: "Requiere menos claves",
          de: "Es benötigt weniger Schlüssel",
          nl: "Het vereist minder sleutels"
        }
      ],
      correct: 1,
      explanation: {
        en: "HMAC (Hash-based Message Authentication Code) uses a specific construction that prevents length extension attacks, which can be successful against simple constructions like Hash(key||message).",
        es: "HMAC (Código de Autenticación de Mensaje basado en Hash) usa una construcción específica que previene ataques de extensión de longitud, que pueden ser exitosos contra construcciones simples como Hash(clave||mensaje).",
        de: "HMAC (Hash-based Message Authentication Code) verwendet eine spezifische Konstruktion, die Längen-Erweiterungsangriffe verhindert, die gegen einfache Konstruktionen wie Hash(Schlüssel||Nachricht) erfolgreich sein können.",
        nl: "HMAC (Hash-based Message Authentication Code) gebruikt een specifieke constructie die lengte-extensie aanvallen voorkomt, die succesvol kunnen zijn tegen eenvoudige constructies zoals Hash(sleutel||bericht)."
      }
    },
    {
      question: {
        en: "What property makes SHA-3 different from SHA-1 and SHA-2?",
        es: "¿Qué propiedad hace que SHA-3 sea diferente de SHA-1 y SHA-2?",
        de: "Welche Eigenschaft macht SHA-3 anders als SHA-1 und SHA-2?",
        nl: "Welke eigenschap maakt SHA-3 anders dan SHA-1 en SHA-2?"
      },
      options: [
        {
          en: "It uses a sponge construction instead of Merkle-Damgård",
          es: "Usa una construcción esponja en lugar de Merkle-Damgård",
          de: "Es verwendet eine Schwammkonstruktion anstelle von Merkle-Damgård",
          nl: "Het gebruikt een spons constructie in plaats van Merkle-Damgård"
        },
        {
          en: "It produces variable-length output",
          es: "Produce salida de longitud variable",
          de: "Es erzeugt Ausgabe variabler Länge",
          nl: "Het produceert uitvoer van variabele lengte"
        },
        {
          en: "It's quantum-resistant",
          es: "Es resistente a quantum",
          de: "Es ist quantenresistent",
          nl: "Het is quantumbestendig"
        },
        {
          en: "It only works with small inputs",
          es: "Solo funciona con entradas pequeñas",
          de: "Es funktioniert nur mit kleinen Eingaben",
          nl: "Het werkt alleen met kleine invoeren"
        }
      ],
      correct: 0,
      explanation: {
        en: "SHA-3 is based on the Keccak algorithm and uses a sponge construction, which is fundamentally different from the Merkle-Damgård construction used by SHA-1 and SHA-2, making it resistant to length extension attacks.",
        es: "SHA-3 está basado en el algoritmo Keccak y usa una construcción esponja, que es fundamentalmente diferente de la construcción Merkle-Damgård usada por SHA-1 y SHA-2, haciéndolo resistente a ataques de extensión de longitud.",
        de: "SHA-3 basiert auf dem Keccak-Algorithmus und verwendet eine Schwammkonstruktion, die sich grundlegend von der Merkle-Damgård-Konstruktion unterscheidet, die von SHA-1 und SHA-2 verwendet wird, was es resistent gegen Längen-Erweiterungsangriffe macht.",
        nl: "SHA-3 is gebaseerd op het Keccak-algoritme en gebruikt een spons constructie, die fundamenteel verschilt van de Merkle-Damgård constructie gebruikt door SHA-1 en SHA-2, waardoor het bestand is tegen lengte-extensie aanvallen."
      }
    },
    {
      question: {
        en: "What is a collision-resistant hash function?",
        es: "¿Qué es una función hash resistente a colisiones?",
        de: "Was ist eine kollisionsresistente Hash-Funktion?",
        nl: "Wat is een botsingsbestendige hash-functie?"
      },
      options: [
        {
          en: "A function where it's hard to find two inputs with the same output",
          es: "Una función donde es difícil encontrar dos entradas con la misma salida",
          de: "Eine Funktion, bei der es schwer ist, zwei Eingaben mit der gleichen Ausgabe zu finden",
          nl: "Een functie waar het moeilijk is om twee invoeren met dezelfde uitvoer te vinden"
        },
        {
          en: "A function that never produces the same output twice",
          es: "Una función que nunca produce la misma salida dos veces",
          de: "Eine Funktion, die niemals dieselbe Ausgabe zweimal erzeugt",
          nl: "Een functie die nooit tweemaal dezelfde uitvoer produceert"
        },
        {
          en: "A function immune to all attacks",
          es: "Una función inmune a todos los ataques",
          de: "Eine Funktion, die gegen alle Angriffe immun ist",
          nl: "Een functie die immuun is voor alle aanvallen"
        },
        {
          en: "A function that works only with encrypted data",
          es: "Una función que solo funciona con datos cifrados",
          de: "Eine Funktion, die nur mit verschlüsselten Daten funktioniert",
          nl: "Een functie die alleen werkt met versleutelde gegevens"
        }
      ],
      correct: 0,
      explanation: {
        en: "Collision resistance means it should be computationally infeasible to find two different inputs that produce the same hash output. This is essential for digital signatures and data integrity.",
        es: "La resistencia a colisiones significa que debe ser computacionalmente inviable encontrar dos entradas diferentes que produzcan la misma salida hash. Esto es esencial para firmas digitales e integridad de datos.",
        de: "Kollisionsresistenz bedeutet, dass es rechnerisch unmöglich sein sollte, zwei verschiedene Eingaben zu finden, die dieselbe Hash-Ausgabe erzeugen. Dies ist wesentlich für digitale Signaturen und Datenintegrität.",
        nl: "Botsingsbestendigheid betekent dat het computationeel onhaalbaar moet zijn om twee verschillende invoeren te vinden die dezelfde hash-uitvoer produceren. Dit is essentieel voor digitale handtekeningen en data-integriteit."
      }
    },
    {
      question: {
        en: "What is the purpose of key derivation functions (KDFs)?",
        es: "¿Cuál es el propósito de las funciones de derivación de claves (KDFs)?",
        de: "Was ist der Zweck von Schlüssel-Ableitungsfunktionen (KDFs)?",
        nl: "Wat is het doel van sleutelafleiding functies (KDFs)?"
      },
      options: [
        {
          en: "To derive multiple keys from a single master key",
          es: "Derivar múltiples claves de una sola clave maestra",
          de: "Mehrere Schlüssel von einem einzigen Hauptschlüssel abzuleiten",
          nl: "Meerdere sleutels afleiden van een enkele hoofdsleutel"
        },
        {
          en: "To encrypt data directly",
          es: "Cifrar datos directamente",
          de: "Daten direkt zu verschlüsseln",
          nl: "Data direct versleutelen"
        },
        {
          en: "To generate random numbers",
          es: "Generar números aleatorios",
          de: "Zufallszahlen zu generieren",
          nl: "Willekeurige nummers genereren"
        },
        {
          en: "To compress keys for storage",
          es: "Comprimir claves para almacenamiento",
          de: "Schlüssel für die Speicherung zu komprimieren",
          nl: "Sleutels comprimeren voor opslag"
        }
      ],
      correct: 0,
      explanation: {
        en: "Key Derivation Functions (KDFs) like PBKDF2, bcrypt, and scrypt derive one or more cryptographic keys from a password or other secret value, often with salt and iteration counts for security.",
        es: "Las Funciones de Derivación de Claves (KDFs) como PBKDF2, bcrypt, y scrypt derivan una o más claves criptográficas de una contraseña u otro valor secreto, a menudo con sal e iteraciones para seguridad.",
        de: "Schlüssel-Ableitungsfunktionen (KDFs) wie PBKDF2, bcrypt und scrypt leiten einen oder mehrere kryptographische Schlüssel aus einem Passwort oder anderen geheimen Wert ab, oft mit Salt und Iterationszählungen für Sicherheit.",
        nl: "Sleutelafleiding Functies (KDFs) zoals PBKDF2, bcrypt, en scrypt leiden een of meer cryptografische sleutels af van een wachtwoord of andere geheime waarde, vaak met zout en iteratietellingen voor beveiliging."
      }
    },
    {
      question: {
        en: "What is the main vulnerability that led to the deprecation of MD5?",
        es: "¿Cuál es la principal vulnerabilidad que llevó a la desaprobación de MD5?",
        de: "Was ist die Hauptvulnerabilität, die zur Abwertung von MD5 führte?",
        nl: "Wat is de hoofdkwetsbaarheid die leidde tot de afkeuring van MD5?"
      },
      options: [
        {
          en: "Collision attacks became practical",
          es: "Los ataques de colisión se volvieron prácticos",
          de: "Kollisionsangriffe wurden praktisch",
          nl: "Botsingsaanvallen werden praktisch"
        },
        {
          en: "It was too slow for modern systems",
          es: "Era demasiado lento para sistemas modernos",
          de: "Es war zu langsam für moderne Systeme",
          nl: "Het was te langzaam voor moderne systemen"
        },
        {
          en: "It produced output that was too short",
          es: "Producía salida que era demasiado corta",
          de: "Es erzeugte Ausgabe, die zu kurz war",
          nl: "Het produceerde uitvoer die te kort was"
        },
        {
          en: "It required too much memory",
          es: "Requería demasiada memoria",
          de: "Es benötigte zu viel Speicher",
          nl: "Het vereiste te veel geheugen"
        }
      ],
      correct: 0,
      explanation: {
        en: "MD5 was deprecated primarily because researchers found efficient methods to generate collision attacks, making it unsuitable for security-critical applications like digital signatures and certificate validation.",
        es: "MD5 fue desaprobado principalmente porque los investigadores encontraron métodos eficientes para generar ataques de colisión, haciéndolo inadecuado para aplicaciones críticas de seguridad como firmas digitales y validación de certificados.",
        de: "MD5 wurde hauptsächlich abgewertet, weil Forscher effiziente Methoden zur Erzeugung von Kollisionsangriffen fanden, wodurch es für sicherheitskritische Anwendungen wie digitale Signaturen und Zertifikatsvalidierung ungeeignet wurde.",
        nl: "MD5 werd hoofdzakelijk afgekeurd omdat onderzoekers efficiënte methoden vonden om botsingsaanvallen te genereren, waardoor het ongeschikt werd voor beveiligingskritische toepassingen zoals digitale handtekeningen en certificaatvalidatie."
      }
    },
    {
      question: {
        en: "What is a preimage attack on hash functions?",
        es: "¿Qué es un ataque de preimagen en funciones hash?",
        de: "Was ist ein Preimage-Angriff auf Hash-Funktionen?",
        nl: "Wat is een preimage aanval op hash-functies?"
      },
      options: [
        {
          en: "Finding an input that produces a specific hash output",
          es: "Encontrar una entrada que produzca una salida hash específica",
          de: "Eine Eingabe finden, die eine spezifische Hash-Ausgabe erzeugt",
          nl: "Een invoer vinden die een specifieke hash-uitvoer produceert"
        },
        {
          en: "Finding two inputs with the same hash",
          es: "Encontrar dos entradas con el mismo hash",
          de: "Zwei Eingaben mit demselben Hash finden",
          nl: "Twee invoeren vinden met dezelfde hash"
        },
        {
          en: "Reversing the hash function completely",
          es: "Reversar completamente la función hash",
          de: "Die Hash-Funktion vollständig umkehren",
          nl: "De hash-functie volledig omdraaien"
        },
        {
          en: "Breaking the avalanche effect",
          es: "Romper el efecto avalancha",
          de: "Den Lawineneffekt brechen",
          nl: "Het lawine-effect breken"
        }
      ],
      correct: 0,
      explanation: {
        en: "A preimage attack involves finding an input that produces a given hash output. A first preimage attack finds any input for a specific hash, while a second preimage attack finds a different input for a given input/hash pair.",
        es: "Un ataque de preimagen involucra encontrar una entrada que produzca una salida hash dada. Un ataque de primera preimagen encuentra cualquier entrada para un hash específico, mientras que un ataque de segunda preimagen encuentra una entrada diferente para un par entrada/hash dado.",
        de: "Ein Preimage-Angriff beinhaltet das Finden einer Eingabe, die eine gegebene Hash-Ausgabe erzeugt. Ein First-Preimage-Angriff findet eine beliebige Eingabe für einen spezifischen Hash, während ein Second-Preimage-Angriff eine andere Eingabe für ein gegebenes Eingabe/Hash-Paar findet.",
        nl: "Een preimage aanval houdt in het vinden van een invoer die een gegeven hash-uitvoer produceert. Een eerste preimage aanval vindt elke invoer voor een specifieke hash, terwijl een tweede preimage aanval een andere invoer vindt voor een gegeven invoer/hash paar."
      }
    },
    {
      question: {
        en: "What is the birthday paradox in relation to hash functions?",
        es: "¿Qué es la paradoja del cumpleaños en relación con las funciones hash?",
        de: "Was ist das Geburtstagsparadox in Bezug auf Hash-Funktionen?",
        nl: "Wat is de verjaardagsparadox in relatie tot hash-functies?"
      },
      options: [
        {
          en: "Collisions are more likely than expected due to mathematical probability",
          es: "Las colisiones son más probables de lo esperado debido a la probabilidad matemática",
          de: "Kollisionen sind wahrscheinlicher als erwartet aufgrund mathematischer Wahrscheinlichkeit",
          nl: "Botsingen zijn waarschijnlijker dan verwacht door wiskundige waarschijnlijkheid"
        },
        {
          en: "Hash functions work better on dates",
          es: "Las funciones hash funcionan mejor con fechas",
          de: "Hash-Funktionen funktionieren besser mit Daten",
          nl: "Hash-functies werken beter op datums"
        },
        {
          en: "Older hash functions are weaker",
          es: "Las funciones hash más antiguas son más débiles",
          de: "Ältere Hash-Funktionen sind schwächer",
          nl: "Oudere hash-functies zijn zwakker"
        },
        {
          en: "Hash functions fail after one year",
          es: "Las funciones hash fallan después de un año",
          de: "Hash-Funktionen versagen nach einem Jahr",
          nl: "Hash-functies falen na een jaar"
        }
      ],
      correct: 0,
      explanation: {
        en: "The birthday paradox shows that you need approximately √(2^n) attempts to find a collision in an n-bit hash function, which is much fewer than the 2^n attempts needed for preimage attacks.",
        es: "La paradoja del cumpleaños muestra que necesitas aproximadamente √(2^n) intentos para encontrar una colisión en una función hash de n-bits, que es mucho menos que los 2^n intentos necesarios para ataques de preimagen.",
        de: "Das Geburtstagsparadox zeigt, dass man etwa √(2^n) Versuche benötigt, um eine Kollision in einer n-Bit-Hash-Funktion zu finden, was viel weniger ist als die 2^n Versuche, die für Preimage-Angriffe benötigt werden.",
        nl: "De verjaardagsparadox toont aan dat je ongeveer √(2^n) pogingen nodig hebt om een botsing te vinden in een n-bit hash-functie, wat veel minder is dan de 2^n pogingen nodig voor preimage aanvallen."
      }
    },
    {
      question: {
        en: "What is the main purpose of salt in password hashing?",
        es: "¿Cuál es el propósito principal de la sal en el hash de contraseñas?",
        de: "Was ist der Hauptzweck von Salt beim Passwort-Hashing?",
        nl: "Wat is het hoofddoel van zout in wachtwoord hashing?"
      },
      options: [
        {
          en: "To prevent rainbow table attacks and make each hash unique",
          es: "Prevenir ataques de tabla arcoíris y hacer cada hash único",
          de: "Rainbow-Table-Angriffe zu verhindern und jeden Hash einzigartig zu machen",
          nl: "Rainbow table aanvallen voorkomen en elke hash uniek maken"
        },
        {
          en: "To encrypt the password",
          es: "Cifrar la contraseña",
          de: "Das Passwort zu verschlüsseln",
          nl: "Het wachtwoord versleutelen"
        },
        {
          en: "To make hashing faster",
          es: "Hacer el hash más rápido",
          de: "Das Hashing schneller zu machen",
          nl: "Hashing sneller maken"
        },
        {
          en: "To compress the password",
          es: "Comprimir la contraseña",
          de: "Das Passwort zu komprimieren",
          nl: "Het wachtwoord comprimeren"
        }
      ],
      correct: 0,
      explanation: {
        en: "Salt is a random value added to passwords before hashing to ensure that identical passwords produce different hashes, preventing rainbow table attacks and making each hash unique even for common passwords.",
        es: "La sal es un valor aleatorio añadido a las contraseñas antes del hash para asegurar que contraseñas idénticas produzcan hashes diferentes, previniendo ataques de tabla arcoíris y haciendo cada hash único incluso para contraseñas comunes.",
        de: "Salt ist ein zufälliger Wert, der Passwörtern vor dem Hashing hinzugefügt wird, um sicherzustellen, dass identische Passwörter verschiedene Hashes erzeugen, Rainbow-Table-Angriffe verhindern und jeden Hash einzigartig machen, auch für häufige Passwörter.",
        nl: "Zout is een willekeurige waarde toegevoegd aan wachtwoorden voor hashing om ervoor te zorgen dat identieke wachtwoorden verschillende hashes produceren, rainbow table aanvallen voorkomen en elke hash uniek maken, zelfs voor veelgebruikte wachtwoorden."
      }
    },
    {
      question: {
        en: "What is a merkle tree and how does it use hash functions?",
        es: "¿Qué es un árbol merkle y cómo usa funciones hash?",
        de: "Was ist ein Merkle-Baum und wie verwendet er Hash-Funktionen?",
        nl: "Wat is een merkle tree en hoe gebruikt het hash-functies?"
      },
      options: [
        {
          en: "A binary tree where each node contains a hash of its children",
          es: "Un árbol binario donde cada nodo contiene un hash de sus hijos",
          de: "Ein Binärbaum, bei dem jeder Knoten einen Hash seiner Kinder enthält",
          nl: "Een binaire boom waar elke knoop een hash van zijn kinderen bevat"
        },
        {
          en: "A data structure for storing passwords",
          es: "Una estructura de datos para almacenar contraseñas",
          de: "Eine Datenstruktur zum Speichern von Passwörtern",
          nl: "Een datastructuur voor het opslaan van wachtwoorden"
        },
        {
          en: "A method for encrypting data",
          es: "Un método para cifrar datos",
          de: "Eine Methode zur Datenverschlüsselung",
          nl: "Een methode voor het versleutelen van gegevens"
        },
        {
          en: "A network protocol using hashes",
          es: "Un protocolo de red que usa hashes",
          de: "Ein Netzwerkprotokoll mit Hashes",
          nl: "Een netwerkprotocol dat hashes gebruikt"
        }
      ],
      correct: 0,
      explanation: {
        en: "A Merkle tree is a binary tree where each leaf node is a hash of a data block, and each non-leaf node is a hash of its children. This allows efficient verification of data integrity and is used in blockchain and distributed systems.",
        es: "Un árbol Merkle es un árbol binario donde cada nodo hoja es un hash de un bloque de datos, y cada nodo no-hoja es un hash de sus hijos. Esto permite verificación eficiente de integridad de datos y se usa en blockchain y sistemas distribuidos.",
        de: "Ein Merkle-Baum ist ein Binärbaum, bei dem jeder Blattknoten ein Hash eines Datenblocks ist und jeder Nicht-Blattknoten ein Hash seiner Kinder. Dies ermöglicht effiziente Datenintegritätsprüfung und wird in Blockchain und verteilten Systemen verwendet.",
        nl: "Een Merkle tree is een binaire boom waar elke bladknoop een hash is van een datablok, en elke niet-bladknoop een hash is van zijn kinderen. Dit maakt efficiënte verificatie van data-integriteit mogelijk en wordt gebruikt in blockchain en gedistribueerde systemen."
      }
    },
    {
      question: {
        en: "What is the difference between strong and weak collision resistance?",
        es: "¿Cuál es la diferencia entre resistencia fuerte y débil a colisiones?",
        de: "Was ist der Unterschied zwischen starker und schwacher Kollisionsresistenz?",
        nl: "Wat is het verschil tussen sterke en zwakke botsingsbestendigheid?"
      },
      options: [
        {
          en: "Strong: hard to find any collision; Weak: hard to find collision for specific input",
          es: "Fuerte: difícil encontrar cualquier colisión; Débil: difícil encontrar colisión para entrada específica",
          de: "Stark: schwer, eine beliebige Kollision zu finden; Schwach: schwer, Kollision für spezifische Eingabe zu finden",
          nl: "Sterk: moeilijk om een botsing te vinden; Zwak: moeilijk om botsing te vinden voor specifieke invoer"
        },
        {
          en: "Strong is faster than weak",
          es: "Fuerte es más rápido que débil",
          de: "Stark ist schneller als schwach",
          nl: "Sterk is sneller dan zwak"
        },
        {
          en: "They refer to hash output length",
          es: "Se refieren a la longitud de salida hash",
          de: "Sie beziehen sich auf die Hash-Ausgabelänge",
          nl: "Ze verwijzen naar hash-uitvoerlengte"
        },
        {
          en: "Strong works with any input, weak only with text",
          es: "Fuerte funciona con cualquier entrada, débil solo con texto",
          de: "Stark funktioniert mit beliebiger Eingabe, schwach nur mit Text",
          nl: "Sterk werkt met elke invoer, zwak alleen met tekst"
        }
      ],
      correct: 0,
      explanation: {
        en: "Strong collision resistance (collision resistance) means it's hard to find any two inputs that hash to the same output. Weak collision resistance (second preimage resistance) means it's hard to find a second input that hashes to the same output as a given first input.",
        es: "La resistencia fuerte a colisiones significa que es difícil encontrar cualesquiera dos entradas que produzcan el mismo hash. La resistencia débil a colisiones significa que es difícil encontrar una segunda entrada que produzca el mismo hash que una primera entrada dada.",
        de: "Starke Kollisionsresistenz bedeutet, dass es schwer ist, zwei beliebige Eingaben zu finden, die denselben Hash erzeugen. Schwache Kollisionsresistenz bedeutet, dass es schwer ist, eine zweite Eingabe zu finden, die denselben Hash wie eine gegebene erste Eingabe erzeugt.",
        nl: "Sterke botsingsbestendigheid betekent dat het moeilijk is om twee willekeurige invoeren te vinden die naar dezelfde uitvoer hashen. Zwakke botsingsbestendigheid betekent dat het moeilijk is om een tweede invoer te vinden die naar dezelfde uitvoer hasht als een gegeven eerste invoer."
      }
    },
    {
      question: {
        en: "What is the purpose of iteration count in password-based key derivation?",
        es: "¿Cuál es el propósito del conteo de iteraciones en la derivación de claves basada en contraseñas?",
        de: "Was ist der Zweck der Iterationszahl bei passwort-basierter Schlüsselableitung?",
        nl: "Wat is het doel van iteratietelling in wachtwoord-gebaseerde sleutelafleiding?"
      },
      options: [
        {
          en: "To slow down the process and increase computational cost for attackers",
          es: "Ralentizar el proceso y aumentar el costo computacional para atacantes",
          de: "Den Prozess zu verlangsamen und die Rechenkosten für Angreifer zu erhöhen",
          nl: "Het proces vertragen en computationele kosten verhogen voor aanvallers"
        },
        {
          en: "To generate multiple keys simultaneously",
          es: "Generar múltiples claves simultáneamente",
          de: "Mehrere Schlüssel gleichzeitig zu generieren",
          nl: "Meerdere sleutels tegelijkertijd genereren"
        },
        {
          en: "To make the output longer",
          es: "Hacer la salida más larga",
          de: "Die Ausgabe länger zu machen",
          nl: "De uitvoer langer maken"
        },
        {
          en: "To reduce memory usage",
          es: "Reducir el uso de memoria",
          de: "Den Speicherverbrauch zu reduzieren",
          nl: "Geheugengebruik verminderen"
        }
      ],
      correct: 0,
      explanation: {
        en: "Iteration count (work factor) in functions like PBKDF2 determines how many times the underlying hash function is applied, making the key derivation process slower and more expensive for brute force attackers while remaining manageable for legitimate users.",
        es: "El conteo de iteraciones (factor de trabajo) en funciones como PBKDF2 determina cuántas veces se aplica la función hash subyacente, haciendo el proceso de derivación de claves más lento y costoso para atacantes de fuerza bruta mientras permanece manejable para usuarios legítimos.",
        de: "Die Iterationszahl (Arbeitsfaktor) in Funktionen wie PBKDF2 bestimmt, wie oft die zugrunde liegende Hash-Funktion angewendet wird, wodurch der Schlüssel-Ableitungsprozess für Brute-Force-Angreifer langsamer und teurer wird, während er für legitime Benutzer beherrschbar bleibt.",
        nl: "Iteratietelling (werkfactor) in functies zoals PBKDF2 bepaalt hoe vaak de onderliggende hash-functie wordt toegepast, waardoor het sleutelafleiding proces langzamer en duurder wordt voor brute force aanvallers terwijl het beheersbaar blijft voor legitieme gebruikers."
      }
    },
    {
      question: {
        en: "What is the main security concern with length extension attacks?",
        es: "¿Cuál es la principal preocupación de seguridad con los ataques de extensión de longitud?",
        de: "Was ist das Hauptsicherheitsanliegen bei Längen-Erweiterungsangriffen?",
        nl: "Wat is de hoofdbeveiligingszorg bij lengte-extensie aanvallen?"
      },
      options: [
        {
          en: "Attackers can append data to messages without knowing the secret key",
          es: "Los atacantes pueden añadir datos a mensajes sin conocer la clave secreta",
          de: "Angreifer können Daten an Nachrichten anhängen, ohne den geheimen Schlüssel zu kennen",
          nl: "Aanvallers kunnen data toevoegen aan berichten zonder de geheime sleutel te kennen"
        },
        {
          en: "Hash functions become too slow",
          es: "Las funciones hash se vuelven demasiado lentas",
          de: "Hash-Funktionen werden zu langsam",
          nl: "Hash-functies worden te langzaam"
        },
        {
          en: "Memory usage increases exponentially",
          es: "El uso de memoria aumenta exponencialmente",
          de: "Der Speicherverbrauch steigt exponentiell",
          nl: "Geheugengebruik neemt exponentieel toe"
        },
        {
          en: "The hash output becomes predictable",
          es: "La salida hash se vuelve predecible",
          de: "Die Hash-Ausgabe wird vorhersagbar",
          nl: "De hash-uitvoer wordt voorspelbaar"
        }
      ],
      correct: 0,
      explanation: {
        en: "Length extension attacks exploit the internal structure of Merkle-Damgård hash functions, allowing attackers to append chosen data to a message and compute a valid hash for the extended message without knowing the original secret key.",
        es: "Los ataques de extensión de longitud explotan la estructura interna de las funciones hash Merkle-Damgård, permitiendo a los atacantes añadir datos elegidos a un mensaje y computar un hash válido para el mensaje extendido sin conocer la clave secreta original.",
        de: "Längen-Erweiterungsangriffe nutzen die interne Struktur von Merkle-Damgård-Hash-Funktionen aus, wodurch Angreifer gewählte Daten an eine Nachricht anhängen und einen gültigen Hash für die erweiterte Nachricht berechnen können, ohne den ursprünglichen geheimen Schlüssel zu kennen.",
        nl: "Lengte-extensie aanvallen benutten de interne structuur van Merkle-Damgård hash-functies, waardoor aanvallers gekozen data aan een bericht kunnen toevoegen en een geldige hash voor het uitgebreide bericht kunnen berekenen zonder de oorspronkelijke geheime sleutel te kennen."
      }
    },
    {
      question: {
        en: "What is the difference between HMAC-SHA256 and just SHA256(key||message)?",
        es: "¿Cuál es la diferencia entre HMAC-SHA256 y solo SHA256(clave||mensaje)?",
        de: "Was ist der Unterschied zwischen HMAC-SHA256 und nur SHA256(Schlüssel||Nachricht)?",
        nl: "Wat is het verschil tussen HMAC-SHA256 en alleen SHA256(sleutel||bericht)?"
      },
      options: [
        {
          en: "HMAC is secure against length extension attacks",
          es: "HMAC es seguro contra ataques de extensión de longitud",
          de: "HMAC ist sicher gegen Längen-Erweiterungsangriffe",
          nl: "HMAC is veilig tegen lengte-extensie aanvallen"
        },
        {
          en: "HMAC is faster to compute",
          es: "HMAC es más rápido de computar",
          de: "HMAC ist schneller zu berechnen",
          nl: "HMAC is sneller te berekenen"
        },
        {
          en: "HMAC produces longer output",
          es: "HMAC produce salida más larga",
          de: "HMAC erzeugt längere Ausgabe",
          nl: "HMAC produceert langere uitvoer"
        },
        {
          en: "No difference in security",
          es: "Sin diferencia en seguridad",
          de: "Kein Unterschied in der Sicherheit",
          nl: "Geen verschil in beveiliging"
        }
      ],
      correct: 0,
      explanation: {
        en: "HMAC uses a specific construction (key ⊕ opad || hash(key ⊕ ipad || message)) that prevents length extension attacks, while simple concatenation like SHA256(key||message) is vulnerable to these attacks with Merkle-Damgård hash functions.",
        es: "HMAC usa una construcción específica (clave ⊕ opad || hash(clave ⊕ ipad || mensaje)) que previene ataques de extensión de longitud, mientras que la concatenación simple como SHA256(clave||mensaje) es vulnerable a estos ataques con funciones hash Merkle-Damgård.",
        de: "HMAC verwendet eine spezifische Konstruktion (Schlüssel ⊕ opad || hash(Schlüssel ⊕ ipad || Nachricht)), die Längen-Erweiterungsangriffe verhindert, während einfache Verkettung wie SHA256(Schlüssel||Nachricht) bei Merkle-Damgård-Hash-Funktionen anfällig für diese Angriffe ist.",
        nl: "HMAC gebruikt een specifieke constructie (sleutel ⊕ opad || hash(sleutel ⊕ ipad || bericht)) die lengte-extensie aanvallen voorkomt, terwijl eenvoudige concatenatie zoals SHA256(sleutel||bericht) kwetsbaar is voor deze aanvallen bij Merkle-Damgård hash-functies."
      }
    },
    {
      question: {
        en: "What is the security implication of using a fast hash function for password storage?",
        es: "¿Cuál es la implicación de seguridad de usar una función hash rápida para almacenamiento de contraseñas?",
        de: "Was ist die Sicherheitsimplikation der Verwendung einer schnellen Hash-Funktion für Passwort-Speicherung?",
        nl: "Wat is de beveiligingsimplicatie van het gebruik van een snelle hash-functie voor wachtwoordopslag?"
      },
      options: [
        {
          en: "It enables faster brute force attacks",
          es: "Permite ataques de fuerza bruta más rápidos",
          de: "Es ermöglicht schnellere Brute-Force-Angriffe",
          nl: "Het maakt snellere brute force aanvallen mogelijk"
        },
        {
          en: "It improves user experience",
          es: "Mejora la experiencia del usuario",
          de: "Es verbessert die Benutzererfahrung",
          nl: "Het verbetert de gebruikerservaring"
        },
        {
          en: "It reduces server load",
          es: "Reduce la carga del servidor",
          de: "Es reduziert die Serverlast",
          nl: "Het vermindert serverbelasting"
        },
        {
          en: "It has no security impact",
          es: "No tiene impacto en la seguridad",
          de: "Es hat keine Sicherheitsauswirkungen",
          nl: "Het heeft geen beveiligingsimpact"
        }
      ],
      correct: 0,
      explanation: {
        en: "Fast hash functions like MD5 or SHA-1 make brute force and dictionary attacks much faster and cheaper for attackers. This is why slow, purpose-built functions like bcrypt, scrypt, or Argon2 should be used for password hashing.",
        es: "Las funciones hash rápidas como MD5 o SHA-1 hacen que los ataques de fuerza bruta y diccionario sean mucho más rápidos y baratos para los atacantes. Por eso se deben usar funciones lentas y especializadas como bcrypt, scrypt, o Argon2 para hash de contraseñas.",
        de: "Schnelle Hash-Funktionen wie MD5 oder SHA-1 machen Brute-Force- und Wörterbuchangriffe für Angreifer viel schneller und billiger. Deshalb sollten langsame, speziell entwickelte Funktionen wie bcrypt, scrypt oder Argon2 für Passwort-Hashing verwendet werden.",
        nl: "Snelle hash-functies zoals MD5 of SHA-1 maken brute force en woordenboek aanvallen veel sneller en goedkoper voor aanvallers. Daarom moeten langzame, speciaal gebouwde functies zoals bcrypt, scrypt, of Argon2 worden gebruikt voor wachtwoord hashing."
      }
    },
    {
      question: {
        en: "What does 'cryptographically secure' mean for a hash function?",
        es: "¿Qué significa 'criptográficamente seguro' para una función hash?",
        de: "Was bedeutet 'kryptographisch sicher' für eine Hash-Funktion?",
        nl: "Wat betekent 'cryptografisch veilig' voor een hash-functie?"
      },
      options: [
        {
          en: "It resists preimage, second preimage, and collision attacks",
          es: "Resiste ataques de preimagen, segunda preimagen y colisión",
          de: "Es widersteht Preimage-, Second-Preimage- und Kollisionsangriffen",
          nl: "Het weerstaat preimage, tweede preimage, en botsingsaanvallen"
        },
        {
          en: "It can encrypt and decrypt data",
          es: "Puede cifrar y descifrar datos",
          de: "Es kann Daten verschlüsseln und entschlüsseln",
          nl: "Het kan gegevens versleutelen en ontsleutelen"
        },
        {
          en: "It produces output of variable length",
          es: "Produce salida de longitud variable",
          de: "Es erzeugt Ausgabe variabler Länge",
          nl: "Het produceert uitvoer van variabele lengte"
        },
        {
          en: "It works only with digital signatures",
          es: "Solo funciona con firmas digitales",
          de: "Es funktioniert nur mit digitalen Signaturen",
          nl: "Het werkt alleen met digitale handtekeningen"
        }
      ],
      correct: 0,
      explanation: {
        en: "A cryptographically secure hash function must be resistant to three main types of attacks: preimage attacks (finding input for given hash), second preimage attacks (finding different input with same hash as given input), and collision attacks (finding any two inputs with same hash).",
        es: "Una función hash criptográficamente segura debe ser resistente a tres tipos principales de ataques: ataques de preimagen (encontrar entrada para hash dado), ataques de segunda preimagen (encontrar entrada diferente con mismo hash que entrada dada), y ataques de colisión (encontrar dos entradas con mismo hash).",
        de: "Eine kryptographisch sichere Hash-Funktion muss gegen drei Haupttypen von Angriffen resistent sein: Preimage-Angriffe (Eingabe für gegebenen Hash finden), Second-Preimage-Angriffe (andere Eingabe mit gleichem Hash wie gegebene Eingabe finden) und Kollisionsangriffe (zwei beliebige Eingaben mit gleichem Hash finden).",
        nl: "Een cryptografisch veilige hash-functie moet bestand zijn tegen drie hoofdtypen van aanvallen: preimage aanvallen (invoer vinden voor gegeven hash), tweede preimage aanvallen (andere invoer vinden met dezelfde hash als gegeven invoer), en botsingsaanvallen (twee willekeurige invoeren vinden met dezelfde hash)."
      }
    },
    {
      question: {
        en: "What is the role of hash functions in digital timestamping?",
        es: "¿Cuál es el papel de las funciones hash en el marcado de tiempo digital?",
        de: "Welche Rolle spielen Hash-Funktionen bei digitaler Zeitstempelung?",
        nl: "Wat is de rol van hash-functies in digitale tijdstempeling?"
      },
      options: [
        {
          en: "To create a compact commitment to data at a specific time",
          es: "Crear un compromiso compacto con datos en un tiempo específico",
          de: "Ein kompaktes Commitment zu Daten zu einem bestimmten Zeitpunkt zu erstellen",
          nl: "Een compacte commitment maken aan data op een specifiek tijdstip"
        },
        {
          en: "To encrypt the timestamp",
          es: "Cifrar la marca de tiempo",
          de: "Den Zeitstempel zu verschlüsseln",
          nl: "De tijdstempel versleutelen"
        },
        {
          en: "To generate the current time",
          es: "Generar la hora actual",
          de: "Die aktuelle Zeit zu generieren",
          nl: "De huidige tijd genereren"
        },
        {
          en: "To compress time data",
          es: "Comprimir datos de tiempo",
          de: "Zeitdaten zu komprimieren",
          nl: "Tijdgegevens comprimeren"
        }
      ],
      correct: 0,
      explanation: {
        en: "In digital timestamping, hash functions create a compact fingerprint of data that can be timestamped by a trusted authority, proving the data existed at a specific time without revealing the actual data content.",
        es: "En el marcado de tiempo digital, las funciones hash crean una huella compacta de datos que puede ser marcada con tiempo por una autoridad confiable, probando que los datos existían en un tiempo específico sin revelar el contenido real de los datos.",
        de: "Bei der digitalen Zeitstempelung erstellen Hash-Funktionen einen kompakten Fingerabdruck von Daten, der von einer vertrauenswürdigen Autorität mit einem Zeitstempel versehen werden kann, wodurch bewiesen wird, dass die Daten zu einem bestimmten Zeitpunkt existierten, ohne den tatsächlichen Dateninhalt preiszugeben.",
        nl: "Bij digitale tijdstempeling creëren hash-functies een compacte vingerafdruk van gegevens die getijdstempeld kunnen worden door een vertrouwde autoriteit, wat bewijst dat de gegevens op een specifiek tijdstip bestonden zonder de werkelijke gegevensinhoud prijs te geven."
      }
    },
    {
      question: {
        en: "What is the primary difference between a hash function and a checksum?",
        es: "¿Cuál es la diferencia principal entre una función hash y una suma de verificación?",
        de: "Was ist der Hauptunterschied zwischen einer Hash-Funktion und einer Prüfsumme?",
        nl: "Wat is het hoofdverschil tussen een hash-functie en een checksum?"
      },
      options: [
        {
          en: "Hash functions are designed to resist cryptographic attacks, checksums detect accidental errors",
          es: "Las funciones hash están diseñadas para resistir ataques criptográficos, las sumas de verificación detectan errores accidentales",
          de: "Hash-Funktionen sind darauf ausgelegt, kryptographischen Angriffen zu widerstehen, Prüfsummen erkennen versehentliche Fehler",
          nl: "Hash-functies zijn ontworpen om cryptografische aanvallen te weerstaan, checksums detecteren accidentele fouten"
        },
        {
          en: "Hash functions are faster than checksums",
          es: "Las funciones hash son más rápidas que las sumas de verificación",
          de: "Hash-Funktionen sind schneller als Prüfsummen",
          nl: "Hash-functies zijn sneller dan checksums"
        },
        {
          en: "Checksums produce longer output",
          es: "Las sumas de verificación producen salida más larga",
          de: "Prüfsummen erzeugen längere Ausgabe",
          nl: "Checksums produceren langere uitvoer"
        },
        {
          en: "They are identical in function",
          es: "Son idénticos en función",
          de: "Sie sind funktional identisch",
          nl: "Ze zijn identiek in functie"
        }
      ],
      correct: 0,
      explanation: {
        en: "Cryptographic hash functions are designed to be secure against intentional attacks and collision finding, while checksums like CRC are designed primarily to detect accidental data corruption and are not secure against malicious modification.",
        es: "Las funciones hash criptográficas están diseñadas para ser seguras contra ataques intencionales y búsqueda de colisiones, mientras que las sumas de verificación como CRC están diseñadas principalmente para detectar corrupción accidental de datos y no son seguras contra modificación maliciosa.",
        de: "Kryptographische Hash-Funktionen sind darauf ausgelegt, gegen absichtliche Angriffe und Kollisionsfindung sicher zu sein, während Prüfsummen wie CRC hauptsächlich darauf ausgelegt sind, versehentliche Datenkorruption zu erkennen und nicht gegen bösartige Modifikationen sicher sind.",
        nl: "Cryptografische hash-functies zijn ontworpen om veilig te zijn tegen opzettelijke aanvallen en botsing vinding, terwijl checksums zoals CRC hoofdzakelijk ontworpen zijn om accidentele datacorruptie te detecteren en niet veilig zijn tegen kwaadwillende modificatie."
      }
    },
    {
      question: {
        en: "What is the main advantage of using Argon2 for password hashing?",
        es: "¿Cuál es la ventaja principal de usar Argon2 para hash de contraseñas?",
        de: "Was ist der Hauptvorteil der Verwendung von Argon2 für Passwort-Hashing?",
        nl: "Wat is het hoofdvoordeel van het gebruik van Argon2 voor wachtwoord hashing?"
      },
      options: [
        {
          en: "It's memory-hard and resistant to specialized hardware attacks",
          es: "Es intensivo en memoria y resistente a ataques de hardware especializado",
          de: "Es ist speicher-hart und resistent gegen spezialisierte Hardware-Angriffe",
          nl: "Het is geheugen-zwaar en bestand tegen gespecialiseerde hardware aanvallen"
        },
        {
          en: "It's the fastest password hashing algorithm",
          es: "Es el algoritmo de hash de contraseñas más rápido",
          de: "Es ist der schnellste Passwort-Hashing-Algorithmus",
          nl: "Het is het snelste wachtwoord hashing algoritme"
        },
        {
          en: "It produces the shortest hash output",
          es: "Produce la salida hash más corta",
          de: "Es erzeugt die kürzeste Hash-Ausgabe",
          nl: "Het produceert de kortste hash-uitvoer"
        },
        {
          en: "It works without salt",
          es: "Funciona sin sal",
          de: "Es funktioniert ohne Salt",
          nl: "Het werkt zonder zout"
        }
      ],
      correct: 0,
      explanation: {
        en: "Argon2 is memory-hard, meaning it requires a significant amount of memory to compute, making it resistant to attacks using specialized hardware like ASICs or GPUs. It won the Password Hashing Competition in 2015.",
        es: "Argon2 es intensivo en memoria, lo que significa que requiere una cantidad significativa de memoria para computar, haciéndolo resistente a ataques usando hardware especializado como ASICs o GPUs. Ganó la Competencia de Hash de Contraseñas en 2015.",
        de: "Argon2 ist speicher-hart, das bedeutet es benötigt eine erhebliche Menge an Speicher zur Berechnung, wodurch es resistent gegen Angriffe mit spezialisierter Hardware wie ASICs oder GPUs wird. Es gewann 2015 den Password Hashing Competition.",
        nl: "Argon2 is geheugen-zwaar, wat betekent dat het een aanzienlijke hoeveelheid geheugen nodig heeft om te berekenen, waardoor het bestand is tegen aanvallen met gespecialiseerde hardware zoals ASICs of GPU's. Het won de Password Hashing Competition in 2015."
      }
    },
    {
      question: {
        en: "What is the security purpose of key stretching algorithms like PBKDF2?",
        es: "¿Cuál es el propósito de seguridad de los algoritmos de estiramiento de claves como PBKDF2?",
        de: "Was ist der Sicherheitszweck von Key-Stretching-Algorithmen wie PBKDF2?",
        nl: "Wat is het beveiligingsdoel van sleutelrek algoritmes zoals PBKDF2?"
      },
      options: [
        {
          en: "To make password cracking computationally expensive",
          es: "Hacer que el descifrado de contraseñas sea computacionalmente costoso",
          de: "Das Knacken von Passwörtern rechnerisch teuer zu machen",
          nl: "Wachtwoordkraken computationeel duur maken"
        },
        {
          en: "To generate longer passwords",
          es: "Generar contraseñas más largas",
          de: "Längere Passwörter zu generieren",
          nl: "Langere wachtwoorden genereren"
        },
        {
          en: "To encrypt passwords directly",
          es: "Cifrar contraseñas directamente",
          de: "Passwörter direkt zu verschlüsseln",
          nl: "Wachtwoorden direct versleutelen"
        },
        {
          en: "To eliminate the need for salts",
          es: "Eliminar la necesidad de sales",
          de: "Die Notwendigkeit von Salts zu eliminieren",
          nl: "De behoefte aan zouten elimineren"
        }
      ],
      correct: 0,
      explanation: {
        en: "Key stretching algorithms like PBKDF2 deliberately slow down the key derivation process by applying the hash function many times (iterations), making brute force attacks much more time-consuming and expensive for attackers while remaining acceptable for legitimate users.",
        es: "Los algoritmos de estiramiento de claves como PBKDF2 ralentizan deliberadamente el proceso de derivación de claves aplicando la función hash muchas veces (iteraciones), haciendo que los ataques de fuerza bruta sean mucho más lentos y costosos para los atacantes mientras permanecen aceptables para usuarios legítimos.",
        de: "Key-Stretching-Algorithmen wie PBKDF2 verlangsamen absichtlich den Schlüssel-Ableitungsprozess, indem sie die Hash-Funktion viele Male (Iterationen) anwenden, wodurch Brute-Force-Angriffe für Angreifer viel zeitaufwändiger und teurer werden, während sie für legitime Benutzer akzeptabel bleiben.",
        nl: "Sleutelrek algoritmes zoals PBKDF2 vertragen opzettelijk het sleutelafleiding proces door de hash-functie vele malen (iteraties) toe te passen, waardoor brute force aanvallen veel tijdrovender en duurder worden voor aanvallers terwijl ze acceptabel blijven voor legitieme gebruikers."
      }
    },
    {
      question: {
        en: "What is the primary role of nonces in cryptographic protocols and hash-based authentication?",
        es: "¿Cuál es el papel principal de los nonces en protocolos criptográficos y autenticación basada en hash?",
        de: "Was ist die primäre Rolle von Nonces in kryptographischen Protokollen und hash-basierter Authentifizierung?",
        nl: "Wat is de primaire rol van nonces in cryptografische protocollen en hash-gebaseerde authenticatie?"
      },
      options: [
        {
          en: "To prevent replay attacks and ensure freshness",
          es: "Prevenir ataques de repetición y asegurar frescura",
          de: "Wiederholungsangriffe zu verhindern und Frische zu gewährleisten",
          nl: "Replay aanvallen voorkomen en frisheid garanderen"
        },
        {
          en: "To encrypt the hash output",
          es: "Cifrar la salida hash",
          de: "Die Hash-Ausgabe zu verschlüsseln",
          nl: "De hash-uitvoer versleutelen"
        },
        {
          en: "To compress the message data",
          es: "Comprimir los datos del mensaje",
          de: "Die Nachrichtendaten zu komprimieren",
          nl: "De berichtgegevens comprimeren"
        },
        {
          en: "To generate symmetric keys",
          es: "Generar claves simétricas",
          de: "Symmetrische Schlüssel zu generieren",
          nl: "Symmetrische sleutels genereren"
        }
      ],
      correct: 0,
      explanation: {
        en: "Nonces (numbers used once) are random or pseudo-random values that ensure each cryptographic operation is unique, preventing replay attacks where an attacker reuses previously captured messages or authentication tokens.",
        es: "Los nonces (números usados una vez) son valores aleatorios o pseudo-aleatorios que aseguran que cada operación criptográfica sea única, previniendo ataques de repetición donde un atacante reutiliza mensajes o tokens de autenticación previamente capturados.",
        de: "Nonces (numbers used once) sind zufällige oder pseudo-zufällige Werte, die sicherstellen, dass jede kryptographische Operation einzigartig ist, wodurch Wiederholungsangriffe verhindert werden, bei denen ein Angreifer zuvor erfasste Nachrichten oder Authentifizierungstoken wiederverwendet.",
        nl: "Nonces (numbers used once) zijn willekeurige of pseudo-willekeurige waarden die ervoor zorgen dat elke cryptografische operatie uniek is, waardoor replay aanvallen worden voorkomen waarbij een aanvaller eerder vastgelegde berichten of authenticatietokens hergebruikt."
      }
    }
  ]
});