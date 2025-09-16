// Cryptography - Level 3: Modern Cryptography and Symmetric Systems
window.addLevel('mind-bender/cryptography', {
  name: {
    en: "Modern Cryptography and Symmetric Systems",
    es: "Criptografía Moderna y Sistemas Simétricos",
    de: "Moderne Kryptographie und Symmetrische Systeme",
    nl: "Moderne Cryptografie en Symmetrische Systemen"
  },
  questions: [
    {
      question: {
        en: "What is the key length of the Data Encryption Standard (DES)?",
        es: "¿Cuál es la longitud de clave del Estándar de Cifrado de Datos (DES)?",
        de: "Wie lang ist der Schlüssel des Data Encryption Standard (DES)?",
        nl: "Wat is de sleutellengte van de Data Encryption Standard (DES)?"
      },
      options: [
        { en: "56 bits", es: "56 bits", de: "56 Bits", nl: "56 bits" },
        { en: "64 bits", es: "64 bits", de: "64 Bits", nl: "64 bits" },
        { en: "128 bits", es: "128 bits", de: "128 Bits", nl: "128 bits" },
        { en: "256 bits", es: "256 bits", de: "256 Bits", nl: "256 bits" }
      ],
      correct: 0,
      explanation: {
        en: "DES uses a 56-bit effective key length (though stored as 64 bits with 8 parity bits). This short key length made DES vulnerable to brute force attacks by the late 1990s.",
        es: "DES usa una longitud de clave efectiva de 56 bits (aunque se almacena como 64 bits con 8 bits de paridad). Esta longitud de clave corta hizo que DES fuera vulnerable a ataques de fuerza bruta a finales de los años 90.",
        de: "DES verwendet eine effektive Schlüssellänge von 56 Bit (obwohl als 64 Bit mit 8 Paritätsbits gespeichert). Diese kurze Schlüssellänge machte DES Ende der 1990er Jahre anfällig für Brute-Force-Angriffe.",
        nl: "DES gebruikt een effectieve sleutellengte van 56 bits (hoewel opgeslagen als 64 bits met 8 pariteits bits). Deze korte sleutellengte maakte DES kwetsbaar voor brute force aanvallen tegen het einde van de jaren 90."
      }
    },
    {
      question: {
        en: "Which encryption mode is NOT recommended due to identical plaintext blocks producing identical ciphertext blocks?",
        es: "¿Qué modo de cifrado NO se recomienda debido a que bloques de texto plano idénticos producen bloques de texto cifrado idénticos?",
        de: "Welcher Verschlüsselungsmodus wird NICHT empfohlen, da identische Klartextblöcke identische Chiffretextblöcke erzeugen?",
        nl: "Welke versleutelingsmodus wordt NIET aanbevolen omdat identieke platte tekst blokken identieke cijfertekst blokken produceren?"
      },
      options: [
        { en: "Electronic Codebook (ECB)", es: "Libro de Códigos Electrónico (ECB)", de: "Electronic Codebook (ECB)", nl: "Electronic Codebook (ECB)" },
        { en: "Cipher Block Chaining (CBC)", es: "Encadenamiento de Bloques de Cifrado (CBC)", de: "Cipher Block Chaining (CBC)", nl: "Cipher Block Chaining (CBC)" },
        { en: "Counter Mode (CTR)", es: "Modo Contador (CTR)", de: "Counter Mode (CTR)", nl: "Counter Mode (CTR)" },
        { en: "Galois/Counter Mode (GCM)", es: "Modo Galois/Contador (GCM)", de: "Galois/Counter Mode (GCM)", nl: "Galois/Counter Mode (GCM)" }
      ],
      correct: 0,
      explanation: {
        en: "ECB mode encrypts each block independently, so identical plaintext blocks produce identical ciphertext blocks, revealing patterns and making it cryptographically weak.",
        es: "El modo ECB cifra cada bloque independientemente, por lo que bloques de texto plano idénticos producen bloques de texto cifrado idénticos, revelando patrones y haciéndolo criptográficamente débil.",
        de: "ECB-Modus verschlüsselt jeden Block unabhängig, sodass identische Klartextblöcke identische Chiffretextblöcke erzeugen, Muster offenlegen und es kryptographisch schwach machen.",
        nl: "ECB-modus versleutelt elk blok onafhankelijk, zodat identieke platte tekst blokken identieke cijfertekst blokken produceren, wat patronen onthult en het cryptografisch zwak maakt."
      }
    },
    {
      question: {
        en: "What does AES stand for?",
        es: "¿Qué significa AES?",
        de: "Wofür steht AES?",
        nl: "Waar staat AES voor?"
      },
      options: [
        { en: "Advanced Encryption Standard", es: "Estándar de Cifrado Avanzado", de: "Advanced Encryption Standard", nl: "Advanced Encryption Standard" },
        { en: "Asymmetric Encryption System", es: "Sistema de Cifrado Asimétrico", de: "Asymmetrisches Verschlüsselungssystem", nl: "Asymmetrisch Versleutelingssysteem" },
        { en: "Authenticated Encryption Scheme", es: "Esquema de Cifrado Autenticado", de: "Authentifiziertes Verschlüsselungsschema", nl: "Geauthenticeerd Versleutelingsschema" },
        { en: "Automated Encryption Service", es: "Servicio de Cifrado Automatizado", de: "Automatisierter Verschlüsselungsdienst", nl: "Geautomatiseerde Versleutelingsservice" }
      ],
      correct: 0,
      explanation: {
        en: "AES stands for Advanced Encryption Standard. It replaced DES in 2001 and is the current U.S. federal standard for symmetric encryption, supporting 128, 192, and 256-bit keys.",
        es: "AES significa Estándar de Cifrado Avanzado. Reemplazó a DES en 2001 y es el estándar federal actual de EE.UU. para cifrado simétrico, soportando claves de 128, 192 y 256 bits.",
        de: "AES steht für Advanced Encryption Standard. Es ersetzte DES im Jahr 2001 und ist der aktuelle US-Bundesstandard für symmetrische Verschlüsselung, der 128-, 192- und 256-Bit-Schlüssel unterstützt.",
        nl: "AES staat voor Advanced Encryption Standard. Het verving DES in 2001 en is de huidige Amerikaanse federale standaard voor symmetrische versleuteling, met ondersteuning voor 128, 192 en 256-bit sleutels."
      }
    },
    {
      question: {
        en: "Which cryptographic primitive provides both confidentiality and authenticity?",
        es: "¿Qué primitiva criptográfica proporciona tanto confidencialidad como autenticidad?",
        de: "Welche kryptographische Primitive bietet sowohl Vertraulichkeit als auch Authentizität?",
        nl: "Welke cryptografische primitieve biedt zowel vertrouwelijkheid als authenticiteit?"
      },
      options: [
        { en: "Hash function", es: "Función hash", de: "Hash-Funktion", nl: "Hash functie" },
        { en: "Digital signature", es: "Firma digital", de: "Digitale Signatur", nl: "Digitale handtekening" },
        { en: "Authenticated encryption", es: "Cifrado autenticado", de: "Authentifizierte Verschlüsselung", nl: "Geauthenticeerde versleuteling" },
        { en: "Key exchange", es: "Intercambio de claves", de: "Schlüsselaustausch", nl: "Sleuteluitwisseling" }
      ],
      correct: 2,
      explanation: {
        en: "Authenticated encryption combines encryption (confidentiality) with message authentication (authenticity/integrity) in a single operation, such as AES-GCM or ChaCha20-Poly1305.",
        es: "El cifrado autenticado combina cifrado (confidencialidad) con autenticación de mensajes (autenticidad/integridad) en una sola operación, como AES-GCM o ChaCha20-Poly1305.",
        de: "Authentifizierte Verschlüsselung kombiniert Verschlüsselung (Vertraulichkeit) mit Nachrichtenauthentifizierung (Authentizität/Integrität) in einem einzigen Vorgang, wie AES-GCM oder ChaCha20-Poly1305.",
        nl: "Geauthenticeerde versleuteling combineert versleuteling (vertrouwelijkheid) met berichtauthenticatie (authenticiteit/integriteit) in één bewerking, zoals AES-GCM of ChaCha20-Poly1305."
      }
    },
    {
      question: {
        en: "What is the block size of AES?",
        es: "¿Cuál es el tamaño de bloque de AES?",
        de: "Wie groß ist die Blockgröße von AES?",
        nl: "Wat is de blokgrootte van AES?"
      },
      options: [
        { en: "64 bits", es: "64 bits", de: "64 Bits", nl: "64 bits" },
        { en: "128 bits", es: "128 bits", de: "128 Bits", nl: "128 bits" },
        { en: "256 bits", es: "256 bits", de: "256 Bits", nl: "256 bits" },
        { en: "512 bits", es: "512 bits", de: "512 Bits", nl: "512 bits" }
      ],
      correct: 1,
      explanation: {
        en: "AES always uses a 128-bit (16-byte) block size, regardless of the key length (128, 192, or 256 bits). The key length affects the number of rounds, not the block size.",
        es: "AES siempre usa un tamaño de bloque de 128 bits (16 bytes), independientemente de la longitud de la clave (128, 192 o 256 bits). La longitud de la clave afecta el número de rondas, no el tamaño del bloque.",
        de: "AES verwendet immer eine 128-Bit (16-Byte) Blockgröße, unabhängig von der Schlüssellänge (128, 192 oder 256 Bit). Die Schlüssellänge beeinflusst die Anzahl der Runden, nicht die Blockgröße.",
        nl: "AES gebruikt altijd een 128-bit (16-byte) blokgrootte, ongeacht de sleutellengte (128, 192 of 256 bits). De sleutellengte beïnvloedt het aantal rondes, niet de blokgrootte."
      }
    },
    {
      question: {
        en: "Which attack method was used to successfully break DES in 1998?",
        es: "¿Qué método de ataque fue usado para romper exitosamente DES en 1998?",
        de: "Welche Angriffsmethode wurde 1998 erfolgreich verwendet, um DES zu brechen?",
        nl: "Welke aanvalsmethode werd gebruikt om DES succesvol te breken in 1998?"
      },
      options: [
        { en: "Differential cryptanalysis", es: "Criptoanálisis diferencial", de: "Differentielle Kryptoanalyse", nl: "Differentiële cryptoanalyse" },
        { en: "Linear cryptanalysis", es: "Criptoanálisis lineal", de: "Lineare Kryptoanalyse", nl: "Lineaire cryptoanalyse" },
        { en: "Brute force attack", es: "Ataque de fuerza bruta", de: "Brute-Force-Angriff", nl: "Brute force aanval" },
        { en: "Side-channel attack", es: "Ataque de canal lateral", de: "Seitenkanalangriff", nl: "Zijkanaal aanval" }
      ],
      correct: 2,
      explanation: {
        en: "The Electronic Frontier Foundation's DES Cracker machine broke DES using a brute force attack in 1998, trying all possible 56-bit keys in about 56 hours, proving DES was no longer secure.",
        es: "La máquina DES Cracker de la Electronic Frontier Foundation rompió DES usando un ataque de fuerza bruta en 1998, probando todas las claves posibles de 56 bits en aproximadamente 56 horas, probando que DES ya no era seguro.",
        de: "Die DES Cracker Maschine der Electronic Frontier Foundation brach DES 1998 mit einem Brute-Force-Angriff, indem sie alle möglichen 56-Bit-Schlüssel in etwa 56 Stunden ausprobierte und bewies, dass DES nicht mehr sicher war.",
        nl: "De DES Cracker machine van de Electronic Frontier Foundation brak DES met een brute force aanval in 1998, waarbij alle mogelijke 56-bit sleutels in ongeveer 56 uur werden geprobeerd, wat bewees dat DES niet langer veilig was."
      }
    },
    {
      question: {
        en: "What is the main purpose of an initialization vector (IV) in encryption?",
        es: "¿Cuál es el propósito principal de un vector de inicialización (IV) en el cifrado?",
        de: "Was ist der Hauptzweck eines Initialisierungsvektors (IV) in der Verschlüsselung?",
        nl: "Wat is het hoofddoel van een initialisatievector (IV) bij versleuteling?"
      },
      options: [
        { en: "To extend the key length", es: "Para extender la longitud de la clave", de: "Um die Schlüssellänge zu erweitern", nl: "Om de sleutellengte te verlengen" },
        { en: "To ensure different ciphertext for identical plaintext", es: "Para asegurar texto cifrado diferente para texto plano idéntico", de: "Um unterschiedliche Chiffretexte für identische Klartexte sicherzustellen", nl: "Om verschillende cijfertekst voor identieke platte tekst te verzekeren" },
        { en: "To compress the data", es: "Para comprimir los datos", de: "Um die Daten zu komprimieren", nl: "Om de data te comprimeren" },
        { en: "To authenticate the message", es: "Para autenticar el mensaje", de: "Um die Nachricht zu authentifizieren", nl: "Om het bericht te authenticeren" }
      ],
      correct: 1,
      explanation: {
        en: "An IV ensures that identical plaintexts encrypted with the same key produce different ciphertexts, preventing pattern recognition and making the encryption more secure.",
        es: "Un IV asegura que textos planos idénticos cifrados con la misma clave produzcan textos cifrados diferentes, previniendo el reconocimiento de patrones y haciendo el cifrado más seguro.",
        de: "Ein IV stellt sicher, dass identische Klartexte, die mit demselben Schlüssel verschlüsselt werden, unterschiedliche Chiffretexte erzeugen, wodurch Mustererkennung verhindert und die Verschlüsselung sicherer wird.",
        nl: "Een IV zorgt ervoor dat identieke platte teksten die met dezelfde sleutel versleuteld worden, verschillende cijferteksten produceren, wat patroonherkenning voorkomt en de versleuteling veiliger maakt."
      }
    },
    {
      question: {
        en: "Which symmetric cipher is known for its resistance to timing attacks?",
        es: "¿Qué cifrado simétrico es conocido por su resistencia a ataques de temporización?",
        de: "Welche symmetrische Chiffre ist für ihre Resistenz gegen Timing-Angriffe bekannt?",
        nl: "Welk symmetrisch cijfer staat bekend om zijn weerstand tegen timing-aanvallen?"
      },
      options: [
        { en: "DES", es: "DES", de: "DES", nl: "DES" },
        { en: "AES", es: "AES", de: "AES", nl: "AES" },
        { en: "ChaCha20", es: "ChaCha20", de: "ChaCha20", nl: "ChaCha20" },
        { en: "Blowfish", es: "Blowfish", de: "Blowfish", nl: "Blowfish" }
      ],
      correct: 2,
      explanation: {
        en: "ChaCha20 is a stream cipher designed to have consistent execution time regardless of input, making it resistant to timing attacks. Its operations don't depend on secret data for execution time.",
        es: "ChaCha20 es un cifrado de flujo diseñado para tener tiempo de ejecución consistente independientemente de la entrada, haciéndolo resistente a ataques de temporización. Sus operaciones no dependen de datos secretos para el tiempo de ejecución.",
        de: "ChaCha20 ist eine Stream-Chiffre, die so konzipiert ist, dass sie unabhängig von der Eingabe eine konsistente Ausführungszeit hat, wodurch sie gegen Timing-Angriffe resistent ist. Ihre Operationen hängen nicht von geheimen Daten für die Ausführungszeit ab.",
        nl: "ChaCha20 is een stream-cijfer ontworpen om consistente uitvoeringstijd te hebben ongeacht de invoer, waardoor het resistent is tegen timing-aanvallen. De operaties hangen niet af van geheime data voor uitvoeringstijd."
      }
    },
    {
      question: {
        en: "What is the key difference between stream ciphers and block ciphers?",
        es: "¿Cuál es la diferencia clave entre cifrados de flujo y cifrados de bloque?",
        de: "Was ist der Hauptunterschied zwischen Stream-Chiffren und Block-Chiffren?",
        nl: "Wat is het belangrijkste verschil tussen stream-cijfers en blok-cijfers?"
      },
      options: [
        { en: "Stream ciphers encrypt one bit/byte at a time, block ciphers encrypt fixed-size blocks", es: "Los cifrados de flujo cifran un bit/byte a la vez, los cifrados de bloque cifran bloques de tamaño fijo", de: "Stream-Chiffren verschlüsseln ein Bit/Byte auf einmal, Block-Chiffren verschlüsseln Blöcke fester Größe", nl: "Stream-cijfers versleutelen één bit/byte tegelijk, blok-cijfers versleutelen blokken van vaste grootte" },
        { en: "Stream ciphers are faster than block ciphers", es: "Los cifrados de flujo son más rápidos que los cifrados de bloque", de: "Stream-Chiffren sind schneller als Block-Chiffren", nl: "Stream-cijfers zijn sneller dan blok-cijfers" },
        { en: "Stream ciphers use longer keys than block ciphers", es: "Los cifrados de flujo usan claves más largas que los cifrados de bloque", de: "Stream-Chiffren verwenden längere Schlüssel als Block-Chiffren", nl: "Stream-cijfers gebruiken langere sleutels dan blok-cijfers" },
        { en: "Stream ciphers are more secure than block ciphers", es: "Los cifrados de flujo son más seguros que los cifrados de bloque", de: "Stream-Chiffren sind sicherer als Block-Chiffren", nl: "Stream-cijfers zijn veiliger dan blok-cijfers" }
      ],
      correct: 0,
      explanation: {
        en: "Stream ciphers encrypt data one bit or byte at a time using a keystream, while block ciphers encrypt data in fixed-size blocks (like 128 bits for AES).",
        es: "Los cifrados de flujo cifran datos un bit o byte a la vez usando un flujo de claves, mientras que los cifrados de bloque cifran datos en bloques de tamaño fijo (como 128 bits para AES).",
        de: "Stream-Chiffren verschlüsseln Daten ein Bit oder Byte auf einmal mit einem Schlüsselstrom, während Block-Chiffren Daten in Blöcken fester Größe verschlüsseln (wie 128 Bit für AES).",
        nl: "Stream-cijfers versleutelen data één bit of byte tegelijk met behulp van een sleutelstroom, terwijl blok-cijfers data versleutelen in blokken van vaste grootte (zoals 128 bits voor AES)."
      }
    },
    {
      question: {
        en: "What does Triple DES (3DES) do to improve upon DES?",
        es: "¿Qué hace Triple DES (3DES) para mejorar DES?",
        de: "Was macht Triple DES (3DES), um DES zu verbessern?",
        nl: "Wat doet Triple DES (3DES) om DES te verbeteren?"
      },
      options: [
        { en: "Uses a different algorithm", es: "Usa un algoritmo diferente", de: "Verwendet einen anderen Algorithmus", nl: "Gebruikt een ander algoritme" },
        { en: "Applies DES encryption three times", es: "Aplica cifrado DES tres veces", de: "Wendet DES-Verschlüsselung dreimal an", nl: "Past DES-versleuteling drie keer toe" },
        { en: "Increases the block size", es: "Aumenta el tamaño del bloque", de: "Erhöht die Blockgröße", nl: "Vergroot de blokgrootte" },
        { en: "Uses quantum encryption", es: "Usa cifrado cuántico", de: "Verwendet Quantenverschlüsselung", nl: "Gebruikt kwantumversleuteling" }
      ],
      correct: 1,
      explanation: {
        en: "3DES applies the DES algorithm three times with different keys, effectively creating a 112-bit or 168-bit key length, making it much more resistant to brute force attacks than single DES.",
        es: "3DES aplica el algoritmo DES tres veces con diferentes claves, creando efectivamente una longitud de clave de 112 bits o 168 bits, haciéndolo mucho más resistente a ataques de fuerza bruta que DES simple.",
        de: "3DES wendet den DES-Algorithmus dreimal mit verschiedenen Schlüsseln an, wodurch effektiv eine 112-Bit- oder 168-Bit-Schlüssellänge entsteht, die viel resistenter gegen Brute-Force-Angriffe ist als einfaches DES.",
        nl: "3DES past het DES-algoritme drie keer toe met verschillende sleutels, wat effectief een sleutellengte van 112-bit of 168-bit creëert, waardoor het veel resistenter is tegen brute force aanvallen dan enkele DES."
      }
    },
    {
      question: {
        en: "Which cryptographic concept ensures that a small change in plaintext results in a large change in ciphertext?",
        es: "¿Qué concepto criptográfico asegura que un pequeño cambio en el texto plano resulte en un gran cambio en el texto cifrado?",
        de: "Welches kryptographische Konzept stellt sicher, dass eine kleine Änderung im Klartext zu einer großen Änderung im Chiffretext führt?",
        nl: "Welk cryptografisch concept zorgt ervoor dat een kleine verandering in platte tekst resulteert in een grote verandering in cijfertekst?"
      },
      options: [
        { en: "Confusion", es: "Confusión", de: "Verwirrung", nl: "Verwarring" },
        { en: "Diffusion", es: "Difusión", de: "Diffusion", nl: "Diffusie" },
        { en: "Avalanche effect", es: "Efecto avalancha", de: "Lawineneffekt", nl: "Lawine-effect" },
        { en: "Perfect secrecy", es: "Secreto perfecto", de: "Perfekte Geheimhaltung", nl: "Perfecte geheimhouding" }
      ],
      correct: 2,
      explanation: {
        en: "The avalanche effect ensures that a small change in input (plaintext or key) produces a significant change in output (ciphertext), making cryptanalysis more difficult.",
        es: "El efecto avalancha asegura que un pequeño cambio en la entrada (texto plano o clave) produzca un cambio significativo en la salida (texto cifrado), haciendo el criptoanálisis más difícil.",
        de: "Der Lawineneffekt stellt sicher, dass eine kleine Änderung in der Eingabe (Klartext oder Schlüssel) eine signifikante Änderung in der Ausgabe (Chiffretext) bewirkt, wodurch die Kryptoanalyse erschwert wird.",
        nl: "Het lawine-effect zorgt ervoor dat een kleine verandering in de invoer (platte tekst of sleutel) een significante verandering in de uitvoer (cijfertekst) produceert, waardoor cryptoanalyse moeilijker wordt."
      }
    },
    {
      question: {
        en: "What is the primary advantage of using Galois/Counter Mode (GCM)?",
        es: "¿Cuál es la ventaja principal de usar el Modo Galois/Contador (GCM)?",
        de: "Was ist der Hauptvorteil der Verwendung des Galois/Counter Mode (GCM)?",
        nl: "Wat is het hoofdvoordeel van het gebruik van Galois/Counter Mode (GCM)?"
      },
      options: [
        { en: "Faster encryption speed", es: "Velocidad de cifrado más rápida", de: "Schnellere Verschlüsselungsgeschwindigkeit", nl: "Snellere versleutelingssnelheid" },
        { en: "Provides authenticated encryption", es: "Proporciona cifrado autenticado", de: "Bietet authentifizierte Verschlüsselung", nl: "Biedt geauthenticeerde versleuteling" },
        { en: "Uses shorter keys", es: "Usa claves más cortas", de: "Verwendet kürzere Schlüssel", nl: "Gebruikt kortere sleutels" },
        { en: "Works with any block cipher", es: "Funciona con cualquier cifrado de bloque", de: "Funktioniert mit jeder Block-Chiffre", nl: "Werkt met elk blok-cijfer" }
      ],
      correct: 1,
      explanation: {
        en: "GCM provides both encryption and authentication in a single mode, ensuring both confidentiality and integrity/authenticity of data while being efficient and parallelizable.",
        es: "GCM proporciona tanto cifrado como autenticación en un solo modo, asegurando tanto confidencialidad como integridad/autenticidad de los datos mientras es eficiente y paralelizable.",
        de: "GCM bietet sowohl Verschlüsselung als auch Authentifizierung in einem einzigen Modus und gewährleistet sowohl Vertraulichkeit als auch Integrität/Authentizität der Daten, während es effizient und parallelisierbar ist.",
        nl: "GCM biedt zowel versleuteling als authenticatie in één modus, wat zowel vertrouwelijkheid als integriteit/authenticiteit van data verzekert terwijl het efficiënt en paralleliseerbaar is."
      }
    },
    {
      question: {
        en: "Which operation is fundamental to the AES SubBytes transformation?",
        es: "¿Qué operación es fundamental para la transformación SubBytes de AES?",
        de: "Welche Operation ist grundlegend für die AES SubBytes-Transformation?",
        nl: "Welke bewerking is fundamenteel voor de AES SubBytes-transformatie?"
      },
      options: [
        { en: "S-box substitution", es: "Sustitución S-box", de: "S-Box-Substitution", nl: "S-box substitutie" },
        { en: "Matrix multiplication", es: "Multiplicación de matrices", de: "Matrixmultiplikation", nl: "Matrix vermenigvuldiging" },
        { en: "Bit rotation", es: "Rotación de bits", de: "Bit-Rotation", nl: "Bit rotatie" },
        { en: "XOR operation", es: "Operación XOR", de: "XOR-Operation", nl: "XOR operatie" }
      ],
      correct: 0,
      explanation: {
        en: "The SubBytes transformation in AES uses S-box (substitution box) lookup tables to replace each byte with another byte, providing the non-linear transformation crucial for security.",
        es: "La transformación SubBytes en AES usa tablas de búsqueda S-box (caja de sustitución) para reemplazar cada byte con otro byte, proporcionando la transformación no lineal crucial para la seguridad.",
        de: "Die SubBytes-Transformation in AES verwendet S-Box (Substitutionsbox) Lookup-Tabellen, um jedes Byte durch ein anderes Byte zu ersetzen und die für die Sicherheit entscheidende nichtlineare Transformation zu bieten.",
        nl: "De SubBytes-transformatie in AES gebruikt S-box (substitutie-box) opzoektabellen om elke byte te vervangen door een andere byte, wat de niet-lineaire transformatie biedt die cruciaal is voor veiligheid."
      }
    },
    {
      question: {
        en: "What is a nonce in cryptography?",
        es: "¿Qué es un nonce en criptografía?",
        de: "Was ist eine Nonce in der Kryptographie?",
        nl: "Wat is een nonce in cryptografie?"
      },
      options: [
        { en: "A number used once", es: "Un número usado una vez", de: "Eine nur einmal verwendete Zahl", nl: "Een getal dat één keer gebruikt wordt" },
        { en: "A new encryption key", es: "Una nueva clave de cifrado", de: "Ein neuer Verschlüsselungsschlüssel", nl: "Een nieuwe versleutelingssleutel" },
        { en: "A type of hash function", es: "Un tipo de función hash", de: "Eine Art Hash-Funktion", nl: "Een type hash functie" },
        { en: "A decryption algorithm", es: "Un algoritmo de descifrado", de: "Ein Entschlüsselungsalgorithmus", nl: "Een ontcijferingsalgoritme" }
      ],
      correct: 0,
      explanation: {
        en: "A nonce (number used once) is a unique value used only once in a cryptographic communication to prevent replay attacks and ensure freshness of messages.",
        es: "Un nonce (número usado una vez) es un valor único usado solo una vez en una comunicación criptográfica para prevenir ataques de repetición y asegurar la frescura de los mensajes.",
        de: "Eine Nonce (number used once) ist ein eindeutiger Wert, der nur einmal in einer kryptographischen Kommunikation verwendet wird, um Replay-Angriffe zu verhindern und die Aktualität von Nachrichten zu gewährleisten.",
        nl: "Een nonce (number used once) is een unieke waarde die slechts één keer wordt gebruikt in een cryptografische communicatie om replay-aanvallen te voorkomen en de versheid van berichten te waarborgen."
      }
    },
    {
      question: {
        en: "Which cryptographic standard replaced DES as the U.S. government standard?",
        es: "¿Qué estándar criptográfico reemplazó a DES como el estándar del gobierno de EE.UU.?",
        de: "Welcher kryptographische Standard ersetzte DES als Standard der US-Regierung?",
        nl: "Welke cryptografische standaard verving DES als de standaard van de Amerikaanse regering?"
      },
      options: [
        { en: "RSA", es: "RSA", de: "RSA", nl: "RSA" },
        { en: "AES", es: "AES", de: "AES", nl: "AES" },
        { en: "SHA-256", es: "SHA-256", de: "SHA-256", nl: "SHA-256" },
        { en: "ECC", es: "ECC", de: "ECC", nl: "ECC" }
      ],
      correct: 1,
      explanation: {
        en: "AES (Advanced Encryption Standard) replaced DES in 2001 as the U.S. federal standard for symmetric encryption after a public competition where Rijndael algorithm was selected.",
        es: "AES (Estándar de Cifrado Avanzado) reemplazó a DES en 2001 como el estándar federal de EE.UU. para cifrado simétrico después de una competencia pública donde se seleccionó el algoritmo Rijndael.",
        de: "AES (Advanced Encryption Standard) ersetzte DES im Jahr 2001 als US-Bundesstandard für symmetrische Verschlüsselung nach einem öffentlichen Wettbewerb, bei dem der Rijndael-Algorithmus ausgewählt wurde.",
        nl: "AES (Advanced Encryption Standard) verving DES in 2001 als de Amerikaanse federale standaard voor symmetrische versleuteling na een openbare competitie waarbij het Rijndael-algoritme werd geselecteerd."
      }
    },
    {
      question: {
        en: "What is the main weakness of using the same key for both encryption and authentication?",
        es: "¿Cuál es la principal debilidad de usar la misma clave tanto para cifrado como para autenticación?",
        de: "Was ist die Hauptschwäche der Verwendung desselben Schlüssels für Verschlüsselung und Authentifizierung?",
        nl: "Wat is de belangrijkste zwakte van het gebruik van dezelfde sleutel voor zowel versleuteling als authenticatie?"
      },
      options: [
        { en: "It's too slow", es: "Es demasiado lento", de: "Es ist zu langsam", nl: "Het is te langzaam" },
        { en: "It creates cryptographic vulnerabilities", es: "Crea vulnerabilidades criptográficas", de: "Es schafft kryptographische Schwachstellen", nl: "Het creëert cryptografische kwetsbaarheden" },
        { en: "It uses too much memory", es: "Usa demasiada memoria", de: "Es verwendet zu viel Speicher", nl: "Het gebruikt te veel geheugen" },
        { en: "It's not compatible with modern systems", es: "No es compatible con sistemas modernos", de: "Es ist nicht mit modernen Systemen kompatibel", nl: "Het is niet compatibel met moderne systemen" }
      ],
      correct: 1,
      explanation: {
        en: "Using the same key for encryption and authentication can create vulnerabilities and violate cryptographic separation principles. It's better to use different keys or authenticated encryption modes like GCM.",
        es: "Usar la misma clave para cifrado y autenticación puede crear vulnerabilidades y violar principios de separación criptográfica. Es mejor usar claves diferentes o modos de cifrado autenticado como GCM.",
        de: "Die Verwendung desselben Schlüssels für Verschlüsselung und Authentifizierung kann Schwachstellen schaffen und kryptographische Trennungsprinzipien verletzen. Es ist besser, verschiedene Schlüssel oder authentifizierte Verschlüsselungsmodi wie GCM zu verwenden.",
        nl: "Het gebruik van dezelfde sleutel voor versleuteling en authenticatie kan kwetsbaarheden creëren en cryptografische scheidingsprincipes schenden. Het is beter om verschillende sleutels te gebruiken of geauthenticeerde versleutelingsmodi zoals GCM."
      }
    },
    {
      question: {
        en: "Which cipher mode allows for parallel encryption of multiple blocks?",
        es: "¿Qué modo de cifrado permite el cifrado paralelo de múltiples bloques?",
        de: "Welcher Chiffre-Modus ermöglicht die parallele Verschlüsselung mehrerer Blöcke?",
        nl: "Welke cijfermodus maakt parallelle versleuteling van meerdere blokken mogelijk?"
      },
      options: [
        { en: "CBC (Cipher Block Chaining)", es: "CBC (Encadenamiento de Bloques de Cifrado)", de: "CBC (Cipher Block Chaining)", nl: "CBC (Cipher Block Chaining)" },
        { en: "CFB (Cipher Feedback)", es: "CFB (Retroalimentación de Cifrado)", de: "CFB (Cipher Feedback)", nl: "CFB (Cipher Feedback)" },
        { en: "CTR (Counter)", es: "CTR (Contador)", de: "CTR (Counter)", nl: "CTR (Counter)" },
        { en: "OFB (Output Feedback)", es: "OFB (Retroalimentación de Salida)", de: "OFB (Output Feedback)", nl: "OFB (Output Feedback)" }
      ],
      correct: 2,
      explanation: {
        en: "CTR mode encrypts a counter value and XORs it with plaintext, making each block independent and allowing parallel processing, unlike CBC which requires sequential processing due to chaining.",
        es: "El modo CTR cifra un valor contador y lo XOR con el texto plano, haciendo cada bloque independiente y permitiendo procesamiento paralelo, a diferencia de CBC que requiere procesamiento secuencial debido al encadenamiento.",
        de: "CTR-Modus verschlüsselt einen Zählerwert und XORt ihn mit dem Klartext, wodurch jeder Block unabhängig wird und parallele Verarbeitung ermöglicht, im Gegensatz zu CBC, das aufgrund der Verkettung sequenzielle Verarbeitung erfordert.",
        nl: "CTR-modus versleutelt een tellerwaarde en XOR't deze met platte tekst, waardoor elk blok onafhankelijk wordt en parallelle verwerking mogelijk is, in tegenstelling tot CBC dat sequentiële verwerking vereist vanwege de ketting."
      }
    },
    {
      question: {
        en: "What does perfect forward secrecy ensure?",
        es: "¿Qué asegura el secreto hacia adelante perfecto?",
        de: "Was gewährleistet Perfect Forward Secrecy?",
        nl: "Wat verzekert perfect forward secrecy?"
      },
      options: [
        { en: "Keys are never reused", es: "Las claves nunca se reusan", de: "Schlüssel werden nie wiederverwendet", nl: "Sleutels worden nooit hergebruikt" },
        { en: "Past communications remain secure even if long-term keys are compromised", es: "Las comunicaciones pasadas permanecen seguras incluso si las claves a largo plazo están comprometidas", de: "Vergangene Kommunikationen bleiben sicher, auch wenn Langzeitschlüssel kompromittiert werden", nl: "Eerdere communicaties blijven veilig zelfs als langetermijnsleutels gecompromitteerd zijn" },
        { en: "Encryption is unbreakable", es: "El cifrado es inquebrantable", de: "Die Verschlüsselung ist unknackbar", nl: "Versleuteling is onbreekbaar" },
        { en: "Messages cannot be intercepted", es: "Los mensajes no pueden ser interceptados", de: "Nachrichten können nicht abgefangen werden", nl: "Berichten kunnen niet onderschept worden" }
      ],
      correct: 1,
      explanation: {
        en: "Perfect forward secrecy ensures that even if long-term private keys are compromised, past session communications remain secure because each session uses unique, ephemeral keys that are deleted after use.",
        es: "El secreto hacia adelante perfecto asegura que incluso si las claves privadas a largo plazo están comprometidas, las comunicaciones de sesiones pasadas permanecen seguras porque cada sesión usa claves únicas y efímeras que se eliminan después del uso.",
        de: "Perfect Forward Secrecy stellt sicher, dass auch wenn Langzeit-Privatschlüssel kompromittiert werden, vergangene Sitzungskommunikationen sicher bleiben, weil jede Sitzung einzigartige, ephemere Schlüssel verwendet, die nach Gebrauch gelöscht werden.",
        nl: "Perfect forward secrecy zorgt ervoor dat zelfs als langetermijn privésleutels gecompromitteerd zijn, eerdere sessiecommunicaties veilig blijven omdat elke sessie unieke, tijdelijke sleutels gebruikt die na gebruik worden verwijderd."
      }
    },
    {
      question: {
        en: "Which attack exploits the timing differences in cryptographic operations?",
        es: "¿Qué ataque explota las diferencias de temporización en operaciones criptográficas?",
        de: "Welcher Angriff nutzt Zeitunterschiede in kryptographischen Operationen aus?",
        nl: "Welke aanval maakt gebruik van timing-verschillen in cryptografische bewerkingen?"
      },
      options: [
        { en: "Brute force attack", es: "Ataque de fuerza bruta", de: "Brute-Force-Angriff", nl: "Brute force aanval" },
        { en: "Man-in-the-middle attack", es: "Ataque de hombre en el medio", de: "Man-in-the-Middle-Angriff", nl: "Man-in-the-middle aanval" },
        { en: "Timing attack", es: "Ataque de temporización", de: "Timing-Angriff", nl: "Timing-aanval" },
        { en: "Dictionary attack", es: "Ataque de diccionario", de: "Wörterbuch-Angriff", nl: "Woordenboek aanval" }
      ],
      correct: 2,
      explanation: {
        en: "A timing attack analyzes the time taken to execute cryptographic algorithms to extract information about secret keys or data, exploiting variations in execution time based on different inputs.",
        es: "Un ataque de temporización analiza el tiempo tomado para ejecutar algoritmos criptográficos para extraer información sobre claves secretas o datos, explotando variaciones en el tiempo de ejecución basadas en diferentes entradas.",
        de: "Ein Timing-Angriff analysiert die Zeit, die für die Ausführung kryptographischer Algorithmen benötigt wird, um Informationen über geheime Schlüssel oder Daten zu extrahieren, indem Variationen in der Ausführungszeit basierend auf verschiedenen Eingaben ausgenutzt werden.",
        nl: "Een timing-aanval analyseert de tijd die nodig is om cryptografische algoritmen uit te voeren om informatie over geheime sleutels of data te extraheren, door gebruik te maken van variaties in uitvoeringstijd gebaseerd op verschillende invoer."
      }
    },
    {
      question: {
        en: "What is the primary purpose of key derivation functions (KDFs)?",
        es: "¿Cuál es el propósito principal de las funciones de derivación de claves (KDFs)?",
        de: "Was ist der Hauptzweck von Schlüsselableitungsfunktionen (KDFs)?",
        nl: "Wat is het hoofddoel van sleutelafleiding functies (KDFs)?"
      },
      options: [
        { en: "To generate random numbers", es: "Para generar números aleatorios", de: "Um Zufallszahlen zu generieren", nl: "Om willekeurige getallen te genereren" },
        { en: "To derive cryptographic keys from passwords or other key material", es: "Para derivar claves criptográficas de contraseñas u otro material de clave", de: "Um kryptographische Schlüssel aus Passwörtern oder anderem Schlüsselmaterial abzuleiten", nl: "Om cryptografische sleutels af te leiden van wachtwoorden of ander sleutelmateriaal" },
        { en: "To compress data", es: "Para comprimir datos", de: "Um Daten zu komprimieren", nl: "Om data te comprimeren" },
        { en: "To verify digital signatures", es: "Para verificar firmas digitales", de: "Um digitale Signaturen zu verifizieren", nl: "Om digitale handtekeningen te verifiëren" }
      ],
      correct: 1,
      explanation: {
        en: "KDFs transform passwords or other input key material into cryptographically strong keys suitable for encryption, often adding salt and using multiple iterations to resist brute force attacks.",
        es: "Los KDFs transforman contraseñas u otro material de entrada de clave en claves criptográficamente fuertes adecuadas para cifrado, a menudo agregando sal y usando múltiples iteraciones para resistir ataques de fuerza bruta.",
        de: "KDFs transformieren Passwörter oder anderes Eingabeschlüsselmaterial in kryptographisch starke Schlüssel, die für die Verschlüsselung geeignet sind, oft unter Hinzufügung von Salt und Verwendung mehrerer Iterationen, um Brute-Force-Angriffen zu widerstehen.",
        nl: "KDF's transformeren wachtwoorden of ander invoer sleutelmateriaal naar cryptografisch sterke sleutels geschikt voor versleuteling, vaak met toevoeging van zout en gebruik van meerdere iteraties om brute force aanvallen te weerstaan."
      }
    },
    {
      question: {
        en: "Which symmetric encryption algorithm is known for its simplicity and speed in software implementations?",
        es: "¿Qué algoritmo de cifrado simétrico es conocido por su simplicidad y velocidad en implementaciones de software?",
        de: "Welcher symmetrische Verschlüsselungsalgorithmus ist für seine Einfachheit und Geschwindigkeit in Software-Implementierungen bekannt?",
        nl: "Welk symmetrisch versleutelingsalgoritme staat bekend om zijn eenvoud en snelheid in software-implementaties?"
      },
      options: [
        { en: "AES", es: "AES", de: "AES", nl: "AES" },
        { en: "ChaCha20", es: "ChaCha20", de: "ChaCha20", nl: "ChaCha20" },
        { en: "Blowfish", es: "Blowfish", de: "Blowfish", nl: "Blowfish" },
        { en: "Twofish", es: "Twofish", de: "Twofish", nl: "Twofish" }
      ],
      correct: 1,
      explanation: {
        en: "ChaCha20 is designed for high performance in software implementations, using simple operations (addition, rotation, XOR) that are efficient on general-purpose processors without requiring special hardware support.",
        es: "ChaCha20 está diseñado para alto rendimiento en implementaciones de software, usando operaciones simples (suma, rotación, XOR) que son eficientes en procesadores de propósito general sin requerir soporte de hardware especial.",
        de: "ChaCha20 ist für hohe Leistung in Software-Implementierungen konzipiert und verwendet einfache Operationen (Addition, Rotation, XOR), die auf Allzweckprozessoren effizient sind, ohne spezielle Hardware-Unterstützung zu benötigen.",
        nl: "ChaCha20 is ontworpen voor hoge prestaties in software-implementaties, met gebruik van eenvoudige bewerkingen (optelling, rotatie, XOR) die efficiënt zijn op algemene processors zonder speciale hardware-ondersteuning te vereisen."
      }
    },
    {
      question: {
        en: "What is the main security concern with ECB (Electronic Codebook) mode?",
        es: "¿Cuál es la principal preocupación de seguridad con el modo ECB (Libro de Códigos Electrónico)?",
        de: "Was ist das Hauptsicherheitsproblem mit dem ECB (Electronic Codebook) Modus?",
        nl: "Wat is de belangrijkste beveiligingszorg met ECB (Electronic Codebook) modus?"
      },
      options: [
        { en: "It's too slow", es: "Es demasiado lento", de: "Es ist zu langsam", nl: "Het is te langzaam" },
        { en: "It reveals patterns in the plaintext", es: "Revela patrones en el texto plano", de: "Es offenbart Muster im Klartext", nl: "Het onthult patronen in de platte tekst" },
        { en: "It requires too much memory", es: "Requiere demasiada memoria", de: "Es benötigt zu viel Speicher", nl: "Het vereist te veel geheugen" },
        { en: "It's not compatible with AES", es: "No es compatible con AES", de: "Es ist nicht mit AES kompatibel", nl: "Het is niet compatibel met AES" }
      ],
      correct: 1,
      explanation: {
        en: "ECB mode encrypts identical plaintext blocks to identical ciphertext blocks, revealing patterns and structure in the original data, making it unsuitable for most cryptographic applications.",
        es: "El modo ECB cifra bloques de texto plano idénticos a bloques de texto cifrado idénticos, revelando patrones y estructura en los datos originales, haciéndolo inadecuado para la mayoría de aplicaciones criptográficas.",
        de: "ECB-Modus verschlüsselt identische Klartextblöcke zu identischen Chiffretextblöcken, wodurch Muster und Struktur in den ursprünglichen Daten offenbart werden, was ihn für die meisten kryptographischen Anwendungen ungeeignet macht.",
        nl: "ECB-modus versleutelt identieke platte tekst blokken naar identieke cijfertekst blokken, wat patronen en structuur in de oorspronkelijke data onthult, waardoor het ongeschikt is voor de meeste cryptografische toepassingen."
      }
    },
    {
      question: {
        en: "Which property of cryptographic hash functions prevents finding two inputs with the same output?",
        es: "¿Qué propiedad de las funciones hash criptográficas previene encontrar dos entradas con la misma salida?",
        de: "Welche Eigenschaft kryptographischer Hash-Funktionen verhindert das Finden zweier Eingaben mit derselben Ausgabe?",
        nl: "Welke eigenschap van cryptografische hash-functies voorkomt het vinden van twee invoeren met dezelfde uitvoer?"
      },
      options: [
        { en: "Pre-image resistance", es: "Resistencia a pre-imagen", de: "Pre-Image-Resistenz", nl: "Pre-image resistentie" },
        { en: "Second pre-image resistance", es: "Resistencia a segunda pre-imagen", de: "Zweite Pre-Image-Resistenz", nl: "Tweede pre-image resistentie" },
        { en: "Collision resistance", es: "Resistencia a colisiones", de: "Kollisionsresistenz", nl: "Botsingsresistentie" },
        { en: "Avalanche effect", es: "Efecto avalancha", de: "Lawineneffekt", nl: "Lawine-effect" }
      ],
      correct: 2,
      explanation: {
        en: "Collision resistance ensures it's computationally infeasible to find two different inputs that produce the same hash output, which is crucial for digital signatures and data integrity.",
        es: "La resistencia a colisiones asegura que es computacionalmente inviable encontrar dos entradas diferentes que produzcan la misma salida hash, lo cual es crucial para firmas digitales e integridad de datos.",
        de: "Kollisionsresistenz stellt sicher, dass es rechnerisch unmöglich ist, zwei verschiedene Eingaben zu finden, die dieselbe Hash-Ausgabe erzeugen, was für digitale Signaturen und Datenintegrität entscheidend ist.",
        nl: "Botsingsresistentie zorgt ervoor dat het computationeel onuitvoerbaar is om twee verschillende invoeren te vinden die dezelfde hash-uitvoer produceren, wat cruciaal is voor digitale handtekeningen en data-integriteit."
      }
    },
    {
      question: {
        en: "What is the primary difference between stream ciphers and one-time pads?",
        es: "¿Cuál es la principal diferencia entre cifrados de flujo y libretas de un solo uso?",
        de: "Was ist der Hauptunterschied zwischen Stream-Chiffren und Einmal-Pads?",
        nl: "Wat is het belangrijkste verschil tussen stream-cijfers en one-time pads?"
      },
      options: [
        { en: "Stream ciphers use pseudorandom keys, one-time pads use truly random keys", es: "Los cifrados de flujo usan claves pseudoaleatorias, las libretas de un solo uso usan claves verdaderamente aleatorias", de: "Stream-Chiffren verwenden pseudozufällige Schlüssel, Einmal-Pads verwenden wirklich zufällige Schlüssel", nl: "Stream-cijfers gebruiken pseudowillekeurige sleutels, one-time pads gebruiken echt willekeurige sleutels" },
        { en: "Stream ciphers are faster", es: "Los cifrados de flujo son más rápidos", de: "Stream-Chiffren sind schneller", nl: "Stream-cijfers zijn sneller" },
        { en: "One-time pads use block encryption", es: "Las libretas de un solo uso usan cifrado de bloque", de: "Einmal-Pads verwenden Blockverschlüsselung", nl: "One-time pads gebruiken blokversleuteling" },
        { en: "Stream ciphers provide authentication", es: "Los cifrados de flujo proporcionan autenticación", de: "Stream-Chiffren bieten Authentifizierung", nl: "Stream-cijfers bieden authenticatie" }
      ],
      correct: 0,
      explanation: {
        en: "Stream ciphers generate pseudorandom keystreams from a shorter key using algorithms, while one-time pads use truly random keys as long as the message, providing perfect secrecy but with practical limitations.",
        es: "Los cifrados de flujo generan flujos de claves pseudoaleatorios de una clave más corta usando algoritmos, mientras que las libretas de un solo uso usan claves verdaderamente aleatorias tan largas como el mensaje, proporcionando secreto perfecto pero con limitaciones prácticas.",
        de: "Stream-Chiffren generieren pseudozufällige Schlüsselströme aus einem kürzeren Schlüssel mit Algorithmen, während Einmal-Pads wirklich zufällige Schlüssel so lang wie die Nachricht verwenden, was perfekte Geheimhaltung bietet, aber praktische Grenzen hat.",
        nl: "Stream-cijfers genereren pseudowillekeurige sleutelstromen uit een kortere sleutel met algoritmen, terwijl one-time pads echt willekeurige sleutels gebruiken zo lang als het bericht, wat perfecte geheimhouding biedt maar met praktische beperkingen."
      }
    },
    {
      question: {
        en: "Which attack method specifically targets the mathematical relationship between plaintext and ciphertext?",
        es: "¿Qué método de ataque específicamente apunta a la relación matemática entre texto plano y texto cifrado?",
        de: "Welche Angriffsmethode zielt speziell auf die mathematische Beziehung zwischen Klartext und Chiffretext ab?",
        nl: "Welke aanvalsmethode richt zich specifiek op de wiskundige relatie tussen platte tekst en cijfertekst?"
      },
      options: [
        { en: "Brute force attack", es: "Ataque de fuerza bruta", de: "Brute-Force-Angriff", nl: "Brute force aanval" },
        { en: "Linear cryptanalysis", es: "Criptoanálisis lineal", de: "Lineare Kryptoanalyse", nl: "Lineaire cryptoanalyse" },
        { en: "Social engineering", es: "Ingeniería social", de: "Social Engineering", nl: "Social engineering" },
        { en: "Man-in-the-middle attack", es: "Ataque de hombre en el medio", de: "Man-in-the-Middle-Angriff", nl: "Man-in-the-middle aanval" }
      ],
      correct: 1,
      explanation: {
        en: "Linear cryptanalysis exploits linear approximations between plaintext, ciphertext, and key bits to recover secret key information through statistical analysis of known plaintext-ciphertext pairs.",
        es: "El criptoanálisis lineal explota aproximaciones lineales entre bits de texto plano, texto cifrado y clave para recuperar información de clave secreta a través de análisis estadístico de pares conocidos texto plano-texto cifrado.",
        de: "Lineare Kryptoanalyse nutzt lineare Approximationen zwischen Klartext-, Chiffretext- und Schlüsselbits aus, um geheime Schlüsselinformationen durch statistische Analyse bekannter Klartext-Chiffretext-Paare zu gewinnen.",
        nl: "Lineaire cryptoanalyse maakt gebruik van lineaire benaderingen tussen platte tekst-, cijfertekst- en sleutelbits om geheime sleutelinformatie te herstellen door statistische analyse van bekende platte tekst-cijfertekst paren."
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
        { en: "To make passwords longer", es: "Para hacer las contraseñas más largas", de: "Um Passwörter länger zu machen", nl: "Om wachtwoorden langer te maken" },
        { en: "To prevent rainbow table attacks", es: "Para prevenir ataques de tabla arcoíris", de: "Um Rainbow-Table-Angriffe zu verhindern", nl: "Om rainbow table aanvallen te voorkomen" },
        { en: "To compress the hash", es: "Para comprimir el hash", de: "Um den Hash zu komprimieren", nl: "Om de hash te comprimeren" },
        { en: "To encrypt the password", es: "Para cifrar la contraseña", de: "Um das Passwort zu verschlüsseln", nl: "Om het wachtwoord te versleutelen" }
      ],
      correct: 1,
      explanation: {
        en: "Salt is a unique random value added to passwords before hashing to prevent rainbow table attacks and ensure that identical passwords produce different hashes.",
        es: "La sal es un valor aleatorio único agregado a las contraseñas antes del hash para prevenir ataques de tabla arcoíris y asegurar que contraseñas idénticas produzcan hashes diferentes.",
        de: "Salt ist ein eindeutiger zufälliger Wert, der Passwörtern vor dem Hashing hinzugefügt wird, um Rainbow-Table-Angriffe zu verhindern und sicherzustellen, dass identische Passwörter verschiedene Hashes erzeugen.",
        nl: "Zout is een unieke willekeurige waarde toegevoegd aan wachtwoorden voor hashing om rainbow table aanvallen te voorkomen en ervoor te zorgen dat identieke wachtwoorden verschillende hashes produceren."
      }
    },
    {
      question: {
        en: "Which symmetric cipher was specifically designed to be resistant to differential and linear cryptanalysis?",
        es: "¿Qué cifrado simétrico fue específicamente diseñado para ser resistente al criptoanálisis diferencial y lineal?",
        de: "Welche symmetrische Chiffre wurde speziell entwickelt, um gegen differentielle und lineare Kryptoanalyse resistent zu sein?",
        nl: "Welk symmetrisch cijfer werd specifiek ontworpen om resistent te zijn tegen differentiële en lineaire cryptoanalyse?"
      },
      options: [
        { en: "DES", es: "DES", de: "DES", nl: "DES" },
        { en: "AES", es: "AES", de: "AES", nl: "AES" },
        { en: "Blowfish", es: "Blowfish", de: "Blowfish", nl: "Blowfish" },
        { en: "RC4", es: "RC4", de: "RC4", nl: "RC4" }
      ],
      correct: 1,
      explanation: {
        en: "AES (Rijndael) was explicitly designed with resistance to differential and linear cryptanalysis in mind, using carefully chosen S-boxes and the wide trail strategy to provide provable security margins.",
        es: "AES (Rijndael) fue explícitamente diseñado con resistencia al criptoanálisis diferencial y lineal en mente, usando S-boxes cuidadosamente elegidas y la estrategia de sendero amplio para proporcionar márgenes de seguridad demostrables.",
        de: "AES (Rijndael) wurde explizit mit Blick auf Resistenz gegen differentielle und lineare Kryptoanalyse entwickelt, unter Verwendung sorgfältig gewählter S-Boxen und der Wide-Trail-Strategie, um beweisbare Sicherheitsmargen zu bieten.",
        nl: "AES (Rijndael) werd expliciet ontworpen met weerstand tegen differentiële en lineaire cryptoanalyse in gedachten, waarbij zorgvuldig gekozen S-boxen en de wide trail strategie worden gebruikt om aantoonbare veiligheidsmarges te bieden."
      }
    },
    {
      question: {
        en: "What does HMAC stand for in cryptography?",
        es: "¿Qué significa HMAC en criptografía?",
        de: "Wofür steht HMAC in der Kryptographie?",
        nl: "Waar staat HMAC voor in cryptografie?"
      },
      options: [
        { en: "Hash-based Message Authentication Code", es: "Código de Autenticación de Mensaje Basado en Hash", de: "Hash-basierter Nachrichtenauthentifizierungscode", nl: "Hash-gebaseerde Bericht Authenticatiecode" },
        { en: "Hybrid Message Authentication Cipher", es: "Cifrado de Autenticación de Mensaje Híbrido", de: "Hybride Nachrichtenauthentifizierungschiffre", nl: "Hybride Bericht Authenticatiecijfer" },
        { en: "Hardware Message Authentication Control", es: "Control de Autenticación de Mensaje de Hardware", de: "Hardware-Nachrichtenauthentifizierungssteuerung", nl: "Hardware Bericht Authenticatie Controle" },
        { en: "High-security Message Authentication Code", es: "Código de Autenticación de Mensaje de Alta Seguridad", de: "Hochsicherheits-Nachrichtenauthentifizierungscode", nl: "Hoge-veiligheid Bericht Authenticatiecode" }
      ],
      correct: 0,
      explanation: {
        en: "HMAC stands for Hash-based Message Authentication Code. It combines a cryptographic hash function with a secret key to provide both data integrity and authenticity verification.",
        es: "HMAC significa Código de Autenticación de Mensaje Basado en Hash. Combina una función hash criptográfica con una clave secreta para proporcionar tanto integridad de datos como verificación de autenticidad.",
        de: "HMAC steht für Hash-basierter Nachrichtenauthentifizierungscode. Es kombiniert eine kryptographische Hash-Funktion mit einem geheimen Schlüssel, um sowohl Datenintegrität als auch Authentizitätsprüfung zu bieten.",
        nl: "HMAC staat voor Hash-gebaseerde Bericht Authenticatiecode. Het combineert een cryptografische hash-functie met een geheime sleutel om zowel data-integriteit als authenticiteitsverificatie te bieden."
      }
    },
    {
      question: {
        en: "Which mode of operation turns a block cipher into a stream cipher?",
        es: "¿Qué modo de operación convierte un cifrado de bloque en un cifrado de flujo?",
        de: "Welcher Betriebsmodus verwandelt eine Block-Chiffre in eine Stream-Chiffre?",
        nl: "Welke bewerkingsmodus verandert een blok-cijfer in een stream-cijfer?"
      },
      options: [
        { en: "ECB (Electronic Codebook)", es: "ECB (Libro de Códigos Electrónico)", de: "ECB (Electronic Codebook)", nl: "ECB (Electronic Codebook)" },
        { en: "CBC (Cipher Block Chaining)", es: "CBC (Encadenamiento de Bloques de Cifrado)", de: "CBC (Cipher Block Chaining)", nl: "CBC (Cipher Block Chaining)" },
        { en: "CTR (Counter)", es: "CTR (Contador)", de: "CTR (Counter)", nl: "CTR (Counter)" },
        { en: "All of the above", es: "Todas las anteriores", de: "Alle oben genannten", nl: "Alle bovenstaande" }
      ],
      correct: 2,
      explanation: {
        en: "CTR mode encrypts a counter value and XORs the result with plaintext, effectively turning the block cipher into a stream cipher that encrypts data one bit or byte at a time.",
        es: "El modo CTR cifra un valor contador y XOR el resultado con el texto plano, efectivamente convirtiendo el cifrado de bloque en un cifrado de flujo que cifra datos un bit o byte a la vez.",
        de: "CTR-Modus verschlüsselt einen Zählerwert und XORt das Ergebnis mit dem Klartext, wodurch die Block-Chiffre effektiv in eine Stream-Chiffre verwandelt wird, die Daten ein Bit oder Byte auf einmal verschlüsselt.",
        nl: "CTR-modus versleutelt een tellerwaarde en XOR't het resultaat met platte tekst, waardoor het blok-cijfer effectief wordt omgezet in een stream-cijfer dat data één bit of byte tegelijk versleutelt."
      }
    },
    {
      question: {
        en: "What is the main security advantage of using different keys for encryption and authentication?",
        es: "¿Cuál es la principal ventaja de seguridad de usar diferentes claves para cifrado y autenticación?",
        de: "Was ist der Hauptsicherheitsvorteil der Verwendung verschiedener Schlüssel für Verschlüsselung und Authentifizierung?",
        nl: "Wat is het belangrijkste beveiligingsvoordeel van het gebruik van verschillende sleutels voor versleuteling en authenticatie?"
      },
      options: [
        { en: "It's faster to compute", es: "Es más rápido de calcular", de: "Es ist schneller zu berechnen", nl: "Het is sneller te berekenen" },
        { en: "It provides cryptographic separation and reduces attack surface", es: "Proporciona separación criptográfica y reduce la superficie de ataque", de: "Es bietet kryptographische Trennung und reduziert die Angriffsfläche", nl: "Het biedt cryptografische scheiding en vermindert het aanvalsoppervlak" },
        { en: "It uses less memory", es: "Usa menos memoria", de: "Es verwendet weniger Speicher", nl: "Het gebruikt minder geheugen" },
        { en: "It's easier to implement", es: "Es más fácil de implementar", de: "Es ist einfacher zu implementieren", nl: "Het is makkelijker te implementeren" }
      ],
      correct: 1,
      explanation: {
        en: "Using separate keys for encryption and authentication follows the principle of cryptographic separation, reducing potential vulnerabilities and limiting the impact if one key is compromised.",
        es: "Usar claves separadas para cifrado y autenticación sigue el principio de separación criptográfica, reduciendo vulnerabilidades potenciales y limitando el impacto si una clave está comprometida.",
        de: "Die Verwendung separater Schlüssel für Verschlüsselung und Authentifizierung folgt dem Prinzip der kryptographischen Trennung, reduziert potentielle Schwachstellen und begrenzt die Auswirkungen, wenn ein Schlüssel kompromittiert wird.",
        nl: "Het gebruik van aparte sleutels voor versleuteling en authenticatie volgt het principe van cryptografische scheiding, vermindert potentiële kwetsbaarheden en beperkt de impact als één sleutel gecompromitteerd wordt."
      }
    },
    {
      question: {
        en: "Which cryptographic primitive is essential for secure key exchange over insecure channels?",
        es: "¿Qué primitiva criptográfica es esencial para el intercambio seguro de claves sobre canales inseguros?",
        de: "Welche kryptographische Primitive ist wesentlich für den sicheren Schlüsselaustausch über unsichere Kanäle?",
        nl: "Welke cryptografische primitieve is essentieel voor veilige sleuteluitwisseling over onveilige kanalen?"
      },
      options: [
        { en: "Symmetric encryption", es: "Cifrado simétrico", de: "Symmetrische Verschlüsselung", nl: "Symmetrische versleuteling" },
        { en: "Hash functions", es: "Funciones hash", de: "Hash-Funktionen", nl: "Hash functies" },
        { en: "Public key cryptography", es: "Criptografía de clave pública", de: "Public-Key-Kryptographie", nl: "Publieke sleutel cryptografie" },
        { en: "Message authentication codes", es: "Códigos de autenticación de mensaje", de: "Nachrichtenauthentifizierungscodes", nl: "Bericht authenticatiecodes" }
      ],
      correct: 2,
      explanation: {
        en: "Public key cryptography enables secure key exchange over insecure channels by using mathematically related key pairs where the public key can be shared openly while keeping the private key secret.",
        es: "La criptografía de clave pública permite el intercambio seguro de claves sobre canales inseguros usando pares de claves matemáticamente relacionados donde la clave pública puede compartirse abiertamente mientras se mantiene secreta la clave privada.",
        de: "Public-Key-Kryptographie ermöglicht sicheren Schlüsselaustausch über unsichere Kanäle durch die Verwendung mathematisch verwandter Schlüsselpaare, bei denen der öffentliche Schlüssel offen geteilt werden kann, während der private Schlüssel geheim bleibt.",
        nl: "Publieke sleutel cryptografie maakt veilige sleuteluitwisseling over onveilige kanalen mogelijk door gebruik van wiskundig gerelateerde sleutelparen waarbij de publieke sleutel openlijk gedeeld kan worden terwijl de privé sleutel geheim blijft."
      }
    },
    {
      question: {
        en: "What is the primary weakness of the RC4 stream cipher?",
        es: "¿Cuál es la principal debilidad del cifrado de flujo RC4?",
        de: "Was ist die Hauptschwäche der RC4-Stream-Chiffre?",
        nl: "Wat is de belangrijkste zwakte van het RC4 stream-cijfer?"
      },
      options: [
        { en: "It's too slow", es: "Es demasiado lento", de: "Es ist zu langsam", nl: "Het is te langzaam" },
        { en: "Biases in the keystream output", es: "Sesgos en la salida del flujo de claves", de: "Verzerrungen in der Schlüsselstrom-Ausgabe", nl: "Vertekeningen in de sleutelstroom uitvoer" },
        { en: "It requires too much memory", es: "Requiere demasiada memoria", de: "Es benötigt zu viel Speicher", nl: "Het vereist te veel geheugen" },
        { en: "It's not compatible with modern systems", es: "No es compatible con sistemas modernos", de: "Es ist nicht mit modernen Systemen kompatibel", nl: "Het is niet compatibel met moderne systemen" }
      ],
      correct: 1,
      explanation: {
        en: "RC4 has several known biases in its keystream output, including the Fluhrer, Mantin, and Shamir attack, and biases in the first bytes of output, making it cryptographically weak and unsuitable for modern use.",
        es: "RC4 tiene varios sesgos conocidos en su salida de flujo de claves, incluyendo el ataque Fluhrer, Mantin y Shamir, y sesgos en los primeros bytes de salida, haciéndolo criptográficamente débil e inadecuado para uso moderno.",
        de: "RC4 hat mehrere bekannte Verzerrungen in seiner Schlüsselstrom-Ausgabe, einschließlich des Fluhrer-, Mantin- und Shamir-Angriffs und Verzerrungen in den ersten Ausgabe-Bytes, wodurch es kryptographisch schwach und für moderne Verwendung ungeeignet ist.",
        nl: "RC4 heeft verschillende bekende vertekeningen in zijn sleutelstroom uitvoer, waaronder de Fluhrer, Mantin en Shamir aanval, en vertekeningen in de eerste bytes van uitvoer, waardoor het cryptografisch zwak en ongeschikt voor modern gebruik is."
      }
    },
    {
      question: {
        en: "Which AES key size is considered quantum-resistant according to NIST recommendations?",
        es: "¿Qué tamaño de clave AES se considera resistente cuántico según las recomendaciones del NIST?",
        de: "Welche AES-Schlüsselgröße gilt laut NIST-Empfehlungen als quantenresistent?",
        nl: "Welke AES sleutelgrootte wordt beschouwd als kwantum-resistent volgens NIST aanbevelingen?"
      },
      options: [
        { en: "128 bits", es: "128 bits", de: "128 Bits", nl: "128 bits" },
        { en: "192 bits", es: "192 bits", de: "192 Bits", nl: "192 bits" },
        { en: "256 bits", es: "256 bits", de: "256 Bits", nl: "256 bits" },
        { en: "None are quantum-resistant", es: "Ninguno es resistente cuántico", de: "Keiner ist quantenresistent", nl: "Geen zijn kwantum-resistent" }
      ],
      correct: 2,
      explanation: {
        en: "NIST recommends AES-256 for quantum resistance because Grover's algorithm can effectively halve the key length, making AES-256 equivalent to 128-bit security against quantum computers, which is still considered secure.",
        es: "NIST recomienda AES-256 para resistencia cuántica porque el algoritmo de Grover puede efectivamente reducir a la mitad la longitud de la clave, haciendo AES-256 equivalente a seguridad de 128 bits contra computadoras cuánticas, lo cual aún se considera seguro.",
        de: "NIST empfiehlt AES-256 für Quantenresistenz, weil Grovers Algorithmus die Schlüssellänge effektiv halbieren kann, wodurch AES-256 128-Bit-Sicherheit gegen Quantencomputer entspricht, was immer noch als sicher gilt.",
        nl: "NIST beveelt AES-256 aan voor kwantumweerstand omdat Grover's algoritme de sleutellengte effectief kan halveren, waardoor AES-256 equivalent is aan 128-bit beveiliging tegen kwantumcomputers, wat nog steeds als veilig wordt beschouwd."
      }
    },
    {
      question: {
        en: "What is the main purpose of padding in block cipher modes?",
        es: "¿Cuál es el propósito principal del relleno en los modos de cifrado de bloque?",
        de: "Was ist der Hauptzweck von Padding in Block-Chiffre-Modi?",
        nl: "Wat is het hoofddoel van padding in blok-cijfer modi?"
      },
      options: [
        { en: "To increase security", es: "Para aumentar la seguridad", de: "Um die Sicherheit zu erhöhen", nl: "Om de veiligheid te verhogen" },
        { en: "To make plaintext fit block size requirements", es: "Para hacer que el texto plano se ajuste a los requisitos de tamaño de bloque", de: "Um Klartext an Block-Größen-Anforderungen anzupassen", nl: "Om platte tekst te laten passen bij blokgrootte-eisen" },
        { en: "To compress the data", es: "Para comprimir los datos", de: "Um die Daten zu komprimieren", nl: "Om de data te comprimeren" },
        { en: "To authenticate the message", es: "Para autenticar el mensaje", de: "Um die Nachricht zu authentifizieren", nl: "Om het bericht te authenticeren" }
      ],
      correct: 1,
      explanation: {
        en: "Padding ensures that plaintext data fits the fixed block size requirements of block ciphers by adding extra bytes to the last block if it's shorter than the required block size.",
        es: "El relleno asegura que los datos de texto plano se ajusten a los requisitos de tamaño de bloque fijo de los cifrados de bloque agregando bytes extra al último bloque si es más corto que el tamaño de bloque requerido.",
        de: "Padding stellt sicher, dass Klartextdaten den festen Blockgrößen-Anforderungen von Block-Chiffren entsprechen, indem zusätzliche Bytes zum letzten Block hinzugefügt werden, wenn er kürzer ist als die erforderliche Blockgröße.",
        nl: "Padding zorgt ervoor dat platte tekst data past bij de vaste blokgrootte-eisen van blok-cijfers door extra bytes toe te voegen aan het laatste blok als het korter is dan de vereiste blokgrootte."
      }
    },
    {
      question: {
        en: "Which attack exploits the mathematical structure of cryptographic algorithms?",
        es: "¿Qué ataque explota la estructura matemática de los algoritmos criptográficos?",
        de: "Welcher Angriff nutzt die mathematische Struktur kryptographischer Algorithmen aus?",
        nl: "Welke aanval maakt gebruik van de wiskundige structuur van cryptografische algoritmen?"
      },
      options: [
        { en: "Brute force attack", es: "Ataque de fuerza bruta", de: "Brute-Force-Angriff", nl: "Brute force aanval" },
        { en: "Social engineering", es: "Ingeniería social", de: "Social Engineering", nl: "Social engineering" },
        { en: "Algebraic attack", es: "Ataque algebraico", de: "Algebraischer Angriff", nl: "Algebraïsche aanval" },
        { en: "Physical attack", es: "Ataque físico", de: "Physischer Angriff", nl: "Fysieke aanval" }
      ],
      correct: 2,
      explanation: {
        en: "Algebraic attacks exploit the mathematical structure and relationships within cryptographic algorithms by representing them as systems of equations and attempting to solve for secret values.",
        es: "Los ataques algebraicos explotan la estructura matemática y las relaciones dentro de los algoritmos criptográficos representándolos como sistemas de ecuaciones e intentando resolver valores secretos.",
        de: "Algebraische Angriffe nutzen die mathematische Struktur und Beziehungen innerhalb kryptographischer Algorithmen aus, indem sie sie als Gleichungssysteme darstellen und versuchen, geheime Werte zu lösen.",
        nl: "Algebraïsche aanvallen maken gebruik van de wiskundige structuur en relaties binnen cryptografische algoritmen door ze voor te stellen als stelsels vergelijkingen en te proberen geheime waarden op te lossen."
      }
    },
    {
      question: {
        en: "What is the significance of the number of rounds in symmetric ciphers?",
        es: "¿Cuál es la importancia del número de rondas en los cifrados simétricos?",
        de: "Was ist die Bedeutung der Anzahl der Runden in symmetrischen Chiffren?",
        nl: "Wat is de betekenis van het aantal rondes in symmetrische cijfers?"
      },
      options: [
        { en: "More rounds always mean better security", es: "Más rondas siempre significan mejor seguridad", de: "Mehr Runden bedeuten immer bessere Sicherheit", nl: "Meer rondes betekent altijd betere veiligheid" },
        { en: "Rounds balance security and performance", es: "Las rondas equilibran seguridad y rendimiento", de: "Runden balancieren Sicherheit und Leistung", nl: "Rondes balanceren veiligheid en prestaties" },
        { en: "The number of rounds is always fixed", es: "El número de rondas siempre es fijo", de: "Die Anzahl der Runden ist immer fest", nl: "Het aantal rondes is altijd vast" },
        { en: "Rounds only affect encryption speed", es: "Las rondas solo afectan la velocidad de cifrado", de: "Runden beeinflussen nur die Verschlüsselungsgeschwindigkeit", nl: "Rondes beïnvloeden alleen versleutelingssnelheid" }
      ],
      correct: 1,
      explanation: {
        en: "The number of rounds in symmetric ciphers represents a trade-off between security and performance. More rounds generally increase security against cryptanalysis but also increase computational overhead.",
        es: "El número de rondas en cifrados simétricos representa un equilibrio entre seguridad y rendimiento. Más rondas generalmente aumentan la seguridad contra criptoanálisis pero también aumentan la sobrecarga computacional.",
        de: "Die Anzahl der Runden in symmetrischen Chiffren stellt einen Kompromiss zwischen Sicherheit und Leistung dar. Mehr Runden erhöhen im Allgemeinen die Sicherheit gegen Kryptoanalyse, aber auch den rechnerischen Aufwand.",
        nl: "Het aantal rondes in symmetrische cijfers vertegenwoordigt een afweging tussen veiligheid en prestaties. Meer rondes verhogen over het algemeen de veiligheid tegen cryptoanalyse maar verhogen ook de computationele overhead."
      }
    },
    {
      question: {
        en: "What is the purpose of key expansion in block ciphers?",
        es: "¿Cuál es el propósito de la expansión de clave en cifrados de bloque?",
        de: "Was ist der Zweck der Schlüsselerweiterung in Blockchiffren?",
        nl: "Wat is het doel van sleuteluitbreiding in blokversleuteling?"
      },
      options: [
        { en: "To generate multiple round keys from a single master key", es: "Para generar múltiples claves de ronda de una sola clave maestra", de: "Um mehrere Rundenschlüssel aus einem einzigen Hauptschlüssel zu erzeugen", nl: "Om meerdere rondesleutels te genereren uit een enkele hoofdsleutel" },
        { en: "To compress the encryption key size", es: "Para comprimir el tamaño de la clave de cifrado", de: "Um die Verschlüsselungsschlüsselgröße zu komprimieren", nl: "Om de versleutelingssleutelgrootte te comprimeren" },
        { en: "To convert plaintext to ciphertext", es: "Para convertir texto plano a texto cifrado", de: "Um Klartext in Chiffretext umzuwandeln", nl: "Om platte tekst naar versleutelde tekst om te zetten" },
        { en: "To validate key authenticity", es: "Para validar la autenticidad de la clave", de: "Um die Schlüsselauthentizität zu validieren", nl: "Om sleutelgeloofwaardigheid te valideren" }
      ],
      correct: 0,
      explanation: {
        en: "Key expansion (or key schedule) generates multiple round keys from the initial encryption key. Each round of the cipher uses a different subkey derived from the original key, providing security by ensuring each round has unique key material.",
        es: "La expansión de clave (o programa de clave) genera múltiples claves de ronda de la clave de cifrado inicial. Cada ronda del cifrado usa una subclave diferente derivada de la clave original, proporcionando seguridad al asegurar que cada ronda tiene material de clave único.",
        de: "Schlüsselerweiterung (oder Schlüsselplan) erzeugt mehrere Rundenschlüssel aus dem anfänglichen Verschlüsselungsschlüssel. Jede Runde der Chiffre verwendet einen anderen Unterschlüssel, der aus dem ursprünglichen Schlüssel abgeleitet wird, und bietet Sicherheit, indem sichergestellt wird, dass jede Runde einzigartiges Schlüsselmaterial hat.",
        nl: "Sleuteluitbreiding (of sleutelschema) genereert meerdere rondesleutels uit de initiële versleutelingssleutel. Elke ronde van de versleuteling gebruikt een andere subsleutel afgeleid van de oorspronkelijke sleutel, wat veiligheid biedt door ervoor te zorgen dat elke ronde uniek sleutelmateriaal heeft."
      }
    },
    {
      question: {
        en: "What is a cryptographic salt and why is it important?",
        es: "¿Qué es una sal criptográfica y por qué es importante?",
        de: "Was ist ein kryptographisches Salz und warum ist es wichtig?",
        nl: "Wat is een cryptografisch zout en waarom is het belangrijk?"
      },
      options: [
        { en: "Random data added to passwords before hashing to prevent rainbow table attacks", es: "Datos aleatorios añadidos a contraseñas antes del hashing para prevenir ataques de tabla arcoíris", de: "Zufällige Daten, die zu Passwörtern vor dem Hashing hinzugefügt werden, um Rainbow-Table-Angriffe zu verhindern", nl: "Willekeurige data toegevoegd aan wachtwoorden voor hashing om regenboogtabelaanvallen te voorkomen" },
        { en: "A method to encrypt network communications", es: "Un método para cifrar comunicaciones de red", de: "Eine Methode zur Verschlüsselung der Netzwerkkommunikation", nl: "Een methode om netwerkcommunicatie te versleutelen" },
        { en: "A technique to compress encrypted data", es: "Una técnica para comprimir datos cifrados", de: "Eine Technik zur Komprimierung verschlüsselter Daten", nl: "Een techniek om versleutelde data te comprimeren" },
        { en: "A way to verify message integrity", es: "Una forma de verificar la integridad del mensaje", de: "Ein Weg zur Überprüfung der Nachrichtenintegrität", nl: "Een manier om berichtintegriteit te verifiëren" }
      ],
      correct: 0,
      explanation: {
        en: "A cryptographic salt is random data that is added to a password before hashing. This ensures that identical passwords produce different hash values, preventing attackers from using precomputed rainbow tables to crack password hashes.",
        es: "Una sal criptográfica son datos aleatorios que se añaden a una contraseña antes del hashing. Esto asegura que contraseñas idénticas produzcan valores hash diferentes, previniendo que atacantes usen tablas arcoíris precomputadas para descifrar hashes de contraseñas.",
        de: "Ein kryptographisches Salz sind zufällige Daten, die zu einem Passwort vor dem Hashing hinzugefügt werden. Dies stellt sicher, dass identische Passwörter unterschiedliche Hash-Werte erzeugen und verhindert, dass Angreifer vorberechnete Rainbow-Tabellen verwenden, um Passwort-Hashes zu knacken.",
        nl: "Een cryptografisch zout is willekeurige data die wordt toegevoegd aan een wachtwoord voor hashing. Dit zorgt ervoor dat identieke wachtwoorden verschillende hashwaarden produceren, wat voorkomt dat aanvallers voorberekende regenboogtabellen gebruiken om wachtwoordhashes te kraken."
      }
    },
    {
      question: {
        en: "What is the concept of perfect forward secrecy in cryptographic protocols?",
        es: "¿Cuál es el concepto de secreto perfecto hacia adelante en protocolos criptográficos?",
        de: "Was ist das Konzept der Perfect Forward Secrecy in kryptographischen Protokollen?",
        nl: "Wat is het concept van perfect forward secrecy in cryptografische protocollen?"
      },
      options: [
        { en: "Ensures that compromise of long-term keys cannot decrypt past communication sessions", es: "Asegura que el compromiso de claves a largo plazo no pueda descifrar sesiones de comunicación pasadas", de: "Stellt sicher, dass eine Kompromittierung langfristiger Schlüssel vergangene Kommunikationssitzungen nicht entschlüsseln kann", nl: "Zorgt ervoor dat compromittering van langetermijnsleutels geen vorige communicatiesessies kan ontsleutelen" },
        { en: "Guarantees that encryption keys never expire", es: "Garantiza que las claves de cifrado nunca expiren", de: "Garantiert, dass Verschlüsselungsschlüssel niemals ablaufen", nl: "Garandeert dat versleutelingssleutels nooit verlopen" },
        { en: "Prevents all future communications from being intercepted", es: "Previene que todas las comunicaciones futuras sean interceptadas", de: "Verhindert, dass alle zukünftigen Kommunikationen abgefangen werden", nl: "Voorkomt dat alle toekomstige communicaties worden onderschept" },
        { en: "Ensures perfect encryption with no computational overhead", es: "Asegura cifrado perfecto sin sobrecarga computacional", de: "Gewährleistet perfekte Verschlüsselung ohne rechnerischen Aufwand", nl: "Zorgt voor perfecte versleuteling zonder computationele overhead" }
      ],
      correct: 0,
      explanation: {
        en: "Perfect Forward Secrecy (PFS) ensures that if long-term private keys are compromised, previously recorded encrypted communications cannot be decrypted. This is achieved by using ephemeral session keys that are not derived from long-term keys and are discarded after each session.",
        es: "El Secreto Perfecto Hacia Adelante (PFS) asegura que si las claves privadas a largo plazo se ven comprometidas, las comunicaciones cifradas previamente registradas no pueden ser descifradas. Esto se logra usando claves de sesión efímeras que no se derivan de claves a largo plazo y se descartan después de cada sesión.",
        de: "Perfect Forward Secrecy (PFS) stellt sicher, dass wenn langfristige private Schlüssel kompromittiert werden, zuvor aufgezeichnete verschlüsselte Kommunikation nicht entschlüsselt werden kann. Dies wird durch die Verwendung ephemerer Sitzungsschlüssel erreicht, die nicht von langfristigen Schlüsseln abgeleitet werden und nach jeder Sitzung verworfen werden.",
        nl: "Perfect Forward Secrecy (PFS) zorgt ervoor dat als langetermijn privésleutels gecompromitteerd worden, eerder opgenomen versleutelde communicaties niet kunnen worden ontsleuteld. Dit wordt bereikt door tijdelijke sessiesleutels te gebruiken die niet afgeleid zijn van langetermijnsleutels en weggegooid worden na elke sessie."
      }
    },
    {
      question: {
        en: "What is the difference between a cipher and a code in cryptography?",
        es: "¿Cuál es la diferencia entre un cifrado y un código en criptografía?",
        de: "Was ist der Unterschied zwischen einer Chiffre und einem Code in der Kryptographie?",
        nl: "Wat is het verschil tussen een cijfer en een code in cryptografie?"
      },
      options: [
        { en: "Ciphers work on individual characters/bits, codes work on complete words/phrases", es: "Los cifrados trabajan en caracteres/bits individuales, los códigos trabajan en palabras/frases completas", de: "Chiffren arbeiten mit einzelnen Zeichen/Bits, Codes arbeiten mit vollständigen Wörtern/Phrasen", nl: "Cijfers werken op individuele karakters/bits, codes werken op complete woorden/zinnen" },
        { en: "Ciphers are always symmetric, codes are always asymmetric", es: "Los cifrados son siempre simétricos, los códigos son siempre asimétricos", de: "Chiffren sind immer symmetrisch, Codes sind immer asymmetrisch", nl: "Cijfers zijn altijd symmetrisch, codes zijn altijd asymmetrisch" },
        { en: "Ciphers use mathematical operations, codes use linguistic substitution", es: "Los cifrados usan operaciones matemáticas, los códigos usan sustitución lingüística", de: "Chiffren verwenden mathematische Operationen, Codes verwenden sprachliche Substitution", nl: "Cijfers gebruiken wiskundige operaties, codes gebruiken taalkundige substitutie" },
        { en: "Ciphers are modern, codes are historical methods only", es: "Los cifrados son modernos, los códigos son métodos históricos solamente", de: "Chiffren sind modern, Codes sind nur historische Methoden", nl: "Cijfers zijn modern, codes zijn alleen historische methoden" }
      ],
      correct: 0,
      explanation: {
        en: "Ciphers operate on individual characters or bits using algorithmic transformations (like AES or RSA), while codes replace entire words or phrases with predetermined symbols or codewords (like Morse code or military codebooks). Ciphers preserve the structure of the message, codes do not.",
        es: "Los cifrados operan en caracteres o bits individuales usando transformaciones algorítmicas (como AES o RSA), mientras que los códigos reemplazan palabras o frases completas con símbolos o palabras código predeterminadas (como código Morse o libros de códigos militares). Los cifrados preservan la estructura del mensaje, los códigos no.",
        de: "Chiffren operieren auf einzelnen Zeichen oder Bits unter Verwendung algorithmischer Transformationen (wie AES oder RSA), während Codes ganze Wörter oder Phrasen mit vorbestimmten Symbolen oder Codewörtern ersetzen (wie Morse-Code oder militärische Codebücher). Chiffren bewahren die Struktur der Nachricht, Codes nicht.",
        nl: "Cijfers werken op individuele karakters of bits met algoritmische transformaties (zoals AES of RSA), terwijl codes hele woorden of zinnen vervangen met vooraf bepaalde symbolen of codewoorden (zoals morsecode of militaire codeboeken). Cijfers behouden de structuur van het bericht, codes niet."
      }
    },
    {
      question: {
        en: "What is the primary security benefit of key derivation functions (KDFs) in modern cryptography?",
        es: "¿Cuál es el beneficio de seguridad principal de las funciones de derivación de claves (KDFs) en criptografía moderna?",
        de: "Was ist der hauptsächliche Sicherheitsvorteil von Schlüsselableitungsfunktionen (KDFs) in der modernen Kryptographie?",
        nl: "Wat is het belangrijkste beveiligingsvoordeel van sleutelafgeleidingsfuncties (KDFs) in moderne cryptografie?"
      },
      options: [
        { en: "Stretches weak passwords to resist brute force attacks", es: "Extiende contraseñas débiles para resistir ataques de fuerza bruta", de: "Streckt schwache Passwörter um Brute-Force-Angriffen zu widerstehen", nl: "Rekt zwakke wachtwoorden uit om brute force aanvallen te weerstaan" },
        { en: "Compresses large keys to manageable sizes", es: "Comprime claves grandes a tamaños manejables", de: "Komprimiert große Schlüssel auf handhabbare Größen", nl: "Comprimeert grote sleutels tot beheersbare grootten" },
        { en: "Eliminates need for initialization vectors", es: "Elimina la necesidad de vectores de inicialización", de: "Eliminiert Bedarf an Initialisierungsvektoren", nl: "Elimineert behoefte aan initialisatievectoren" },
        { en: "Provides perfect forward secrecy automatically", es: "Proporciona secreto perfecto hacia adelante automáticamente", de: "Bietet automatisch perfekte Vorwärtssicherheit", nl: "Biedt automatisch perfecte voorwaartse geheimhouding" }
      ],
      correct: 0,
      explanation: {
        en: "KDFs like PBKDF2, scrypt, and Argon2 use computational expensive operations (iterations, memory usage) to transform weak passwords into strong cryptographic keys, making brute force attacks computationally infeasible.",
        es: "Los KDFs como PBKDF2, scrypt y Argon2 usan operaciones computacionalmente costosas (iteraciones, uso de memoria) para transformar contraseñas débiles en claves criptográficas fuertes, haciendo los ataques de fuerza bruta computacionalmente inviables.",
        de: "KDFs wie PBKDF2, scrypt und Argon2 verwenden rechnerisch aufwändige Operationen (Iterationen, Speicherverbrauch) um schwache Passwörter in starke kryptographische Schlüssel zu transformieren, wodurch Brute-Force-Angriffe rechnerisch nicht durchführbar werden.",
        nl: "KDFs zoals PBKDF2, scrypt en Argon2 gebruiken computationeel dure operaties (iteraties, geheugengebruik) om zwakke wachtwoorden om te zetten in sterke cryptografische sleutels, waardoor brute force aanvallen computationeel onuitvoerbaar worden."
      }
    },
    {
      question: {
        en: "What distinguishes authenticated encryption from traditional encryption modes?",
        es: "¿Qué distingue el cifrado autenticado de los modos de cifrado tradicionales?",
        de: "Was unterscheidet authentifizierte Verschlüsselung von traditionellen Verschlüsselungsmodi?",
        nl: "Wat onderscheidt geauthenticeerde versleuteling van traditionele versleutelingsmodi?"
      },
      options: [
        { en: "Simultaneously provides confidentiality and integrity verification", es: "Proporciona simultáneamente confidencialidad y verificación de integridad", de: "Bietet gleichzeitig Vertraulichkeit und Integritätsprüfung", nl: "Biedt tegelijkertijd vertrouwelijkheid en integriteitsverificatie" },
        { en: "Uses asymmetric keys instead of symmetric keys", es: "Usa claves asimétricas en lugar de claves simétricas", de: "Verwendet asymmetrische Schlüssel anstatt symmetrische Schlüssel", nl: "Gebruikt asymmetrische sleutels in plaats van symmetrische sleutels" },
        { en: "Requires hardware security modules for operation", es: "Requiere módulos de seguridad de hardware para operar", de: "Benötigt Hardware-Sicherheitsmodule für den Betrieb", nl: "Vereist hardware beveiligingsmodules voor werking" },
        { en: "Eliminates need for key exchange protocols", es: "Elimina la necesidad de protocolos de intercambio de claves", de: "Eliminiert Bedarf an Schlüsselaustauschprotokollen", nl: "Elimineert behoefte aan sleuteluitwisselingsprotocollen" }
      ],
      correct: 0,
      explanation: {
        en: "Authenticated encryption modes like GCM and ChaCha20-Poly1305 combine encryption with message authentication codes (MACs) to ensure both data confidentiality and authenticity/integrity in a single operation.",
        es: "Los modos de cifrado autenticado como GCM y ChaCha20-Poly1305 combinan cifrado con códigos de autenticación de mensajes (MACs) para asegurar tanto confidencialidad de datos como autenticidad/integridad en una sola operación.",
        de: "Authentifizierte Verschlüsselungsmodi wie GCM und ChaCha20-Poly1305 kombinieren Verschlüsselung mit Message Authentication Codes (MACs) um sowohl Datenvertraulichkeit als auch Authentizität/Integrität in einer Operation zu gewährleisten.",
        nl: "Geauthenticeerde versleutelingsmodi zoals GCM en ChaCha20-Poly1305 combineren versleuteling met message authentication codes (MACs) om zowel datavertrouwelijkheid als authenticiteit/integriteit in één operatie te garanderen."
      }
    },
    {
      question: {
        en: "Which cryptographic primitive is essential for secure random number generation in modern systems?",
        es: "¿Qué primitiva criptográfica es esencial para la generación de números aleatorios seguros en sistemas modernos?",
        de: "Welche kryptographische Primitive ist wesentlich für sichere Zufallszahlengenerierung in modernen Systemen?",
        nl: "Welke cryptografische primitief is essentieel voor veilige willekeurige nummergeneratie in moderne systemen?"
      },
      options: [
        { en: "Cryptographically secure pseudorandom number generators (CSPRNGs)", es: "Generadores de números pseudoaleatorios criptográficamente seguros (CSPRNGs)", de: "Kryptographisch sichere Pseudozufallszahlengeneratoren (CSPRNGs)", nl: "Cryptografisch veilige pseudowillekeurige nummergeneratoren (CSPRNGs)" },
        { en: "Linear congruential generators with large moduli", es: "Generadores congruenciales lineales with móduli grandes", de: "Lineare Kongruenzgeneratoren mit großen Moduli", nl: "Lineaire congruente generatoren met grote moduli" },
        { en: "Mersenne Twister algorithms with cryptographic seeds", es: "Algoritmos Mersenne Twister con semillas criptográficas", de: "Mersenne Twister Algorithmen mit kryptographischen Seeds", nl: "Mersenne Twister algoritmen met cryptografische seeds" },
        { en: "Fibonacci sequence generators with prime initialization", es: "Generadores de secuencia Fibonacci con inicialización prima", de: "Fibonacci-Sequenzgeneratoren mit Priminitialisierung", nl: "Fibonacci sequentie generatoren met prieminitialisatie" }
      ],
      correct: 0,
      explanation: {
        en: "CSPRNGs like ChaCha20, AES-CTR, or hardware-based entropy sources provide cryptographically secure randomness that is computationally indistinguishable from true randomness, essential for keys, nonces, and salts.",
        es: "Los CSPRNGs como ChaCha20, AES-CTR, o fuentes de entropía basadas en hardware proporcionan aleatoriedad criptográficamente segura que es computacionalmente indistinguible de la aleatoriedad verdadera, esencial para claves, nonces y sales.",
        de: "CSPRNGs wie ChaCha20, AES-CTR oder hardware-basierte Entropiequellen bieten kryptographisch sichere Zufälligkeit, die rechnerisch nicht von echter Zufälligkeit unterscheidbar ist, wesentlich für Schlüssel, Nonces und Salts.",
        nl: "CSPRNGs zoals ChaCha20, AES-CTR of hardware-gebaseerde entropiebronnen bieden cryptografisch veilige willekeurigheid die computationeel niet te onderscheiden is van echte willekeurigheid, essentieel voor sleutels, nonces en salts."
      }
    },
    {
      question: {
        en: "What is the primary advantage of the ChaCha20 stream cipher over AES in certain applications?",
        es: "¿Cuál es la ventaja principal del cifrado de flujo ChaCha20 sobre AES en ciertas aplicaciones?",
        de: "Was ist der Hauptvorteil der ChaCha20-Stromchiffre gegenüber AES in bestimmten Anwendungen?",
        nl: "Wat is het belangrijkste voordeel van de ChaCha20 stream-cijfer ten opzichte van AES in bepaalde toepassingen?"
      },
      options: [
        { en: "Better performance on software-only implementations without AES-NI", es: "Mejor rendimiento en implementaciones solo de software sin AES-NI", de: "Bessere Leistung bei reinen Software-Implementierungen ohne AES-NI", nl: "Betere prestaties op software-only implementaties zonder AES-NI" },
        { en: "Larger key sizes providing quantum resistance", es: "Tamaños de clave más grandes proporcionando resistencia cuántica", de: "Größere Schlüsselgrößen bieten Quantenresistenz", nl: "Grotere sleutelgroottes die kwantumresistentie bieden" },
        { en: "Native support for elliptic curve cryptography", es: "Soporte nativo para criptografía de curva elíptica", de: "Native Unterstützung für elliptische Kurvenkryptographie", nl: "Native ondersteuning voor elliptische curve cryptografie" },
        { en: "Built-in compression reducing bandwidth requirements", es: "Compresión incorporada reduciendo requisitos de ancho de banda", de: "Eingebaute Kompression reduziert Bandbreitenanforderungen", nl: "Ingebouwde compressie vermindert bandbreedtevereisten" }
      ],
      correct: 0,
      explanation: {
        en: "ChaCha20 performs excellently on general-purpose CPUs without dedicated AES hardware instructions (AES-NI), making it ideal for mobile devices, embedded systems, and older processors where AES hardware acceleration isn't available.",
        es: "ChaCha20 funciona excelentemente en CPUs de propósito general sin instrucciones de hardware AES dedicadas (AES-NI), haciéndolo ideal para dispositivos móviles, sistemas embebidos y procesadores antiguos donde la aceleración de hardware AES no está disponible.",
        de: "ChaCha20 funktioniert ausgezeichnet auf Allzweck-CPUs ohne dedizierte AES-Hardware-Instruktionen (AES-NI), wodurch es ideal für mobile Geräte, eingebettete Systeme und ältere Prozessoren ist, wo AES-Hardware-Beschleunigung nicht verfügbar ist.",
        nl: "ChaCha20 presteert uitstekend op algemene CPUs zonder toegewijde AES hardware instructies (AES-NI), waardoor het ideaal is voor mobiele apparaten, embedded systemen en oudere processors waar AES hardware acceleratie niet beschikbaar is."
      }
    },
    {
      question: {
        en: "What is the fundamental security principle behind salt usage in password hashing?",
        es: "¿Cuál es el principio de seguridad fundamental detrás del uso de sal en el hash de contraseñas?",
        de: "Was ist das grundlegende Sicherheitsprinzip hinter der Verwendung von Salt beim Passwort-Hashing?",
        nl: "Wat is het fundamentele beveiligingsprincipe achter salt gebruik bij wachtwoord hashing?"
      },
      options: [
        { en: "Prevents rainbow table attacks and identical password hash collisions", es: "Previene ataques de tabla arcoíris y colisiones de hash de contraseñas idénticas", de: "Verhindert Rainbow-Table-Angriffe und identische Passwort-Hash-Kollisionen", nl: "Voorkomt rainbow table aanvallen en identieke wachtwoord hash botsingen" },
        { en: "Increases computational complexity of hash functions", es: "Aumenta la complejidad computacional de las funciones hash", de: "Erhöht rechnerische Komplexität von Hash-Funktionen", nl: "Verhoogt computationele complexiteit van hash functies" },
        { en: "Provides perfect forward secrecy for stored passwords", es: "Proporciona secreto perfecto hacia adelante para contraseñas almacenadas", de: "Bietet perfekte Vorwärtssicherheit für gespeicherte Passwörter", nl: "Biedt perfecte voorwaartse geheimhouding voor opgeslagen wachtwoorden" },
        { en: "Enables password recovery through cryptographic inversion", es: "Permite recuperación de contraseñas a través de inversión criptográfica", de: "Ermöglicht Passwort-Wiederherstellung durch kryptographische Umkehrung", nl: "Maakt wachtwoordherstel mogelijk door cryptografische inversie" }
      ],
      correct: 0,
      explanation: {
        en: "Salt (random data) added to passwords before hashing ensures that identical passwords produce different hashes, preventing rainbow table attacks and making it impossible to identify users with the same password.",
        es: "La sal (datos aleatorios) agregada a las contraseñas antes del hash asegura que contraseñas idénticas produzcan hashes diferentes, previniendo ataques de tabla arcoíris y haciendo imposible identificar usuarios con la misma contraseña.",
        de: "Salt (Zufallsdaten) zu Passwörtern vor dem Hashing hinzugefügt stellt sicher, dass identische Passwörter verschiedene Hashes produzieren, verhindert Rainbow-Table-Angriffe und macht es unmöglich, Benutzer mit demselben Passwort zu identifizieren.",
        nl: "Salt (willekeurige data) toegevoegd aan wachtwoorden voor hashing zorgt ervoor dat identieke wachtwoorden verschillende hashes produceren, voorkomt rainbow table aanvallen en maakt het onmogelijk gebruikers met hetzelfde wachtwoord te identificeren."
      }
    },
    {
      question: {
        en: "Which attack vector specifically targets the implementation rather than the cryptographic algorithm itself?",
        es: "¿Qué vector de ataque específicamente apunta a la implementación en lugar del algoritmo criptográfico mismo?",
        de: "Welcher Angriffsvektor zielt speziell auf die Implementierung anstatt auf den kryptographischen Algorithmus selbst ab?",
        nl: "Welke aanvalsvector richt zich specifiek op de implementatie in plaats van het cryptografische algoritme zelf?"
      },
      options: [
        { en: "Side-channel attacks exploiting timing, power, or electromagnetic emissions", es: "Ataques de canal lateral explotando tiempo, potencia o emisiones electromagnéticas", de: "Seitenkanal-Angriffe, die Timing, Strom oder elektromagnetische Emissionen ausnutzen", nl: "Side-channel aanvallen die timing, vermogen of elektromagnetische emissies uitbuiten" },
        { en: "Differential cryptanalysis of S-box structures", es: "Criptoanálisis diferencial de estructuras S-box", de: "Differentielle Kryptoanalyse von S-Box-Strukturen", nl: "Differentiële cryptoanalyse van S-box structuren" },
        { en: "Linear approximation attacks on round functions", es: "Ataques de aproximación lineal en funciones de ronda", de: "Lineare Approximationsangriffe auf Rundenfunktionen", nl: "Lineaire benadering aanvallen op ronde functies" },
        { en: "Birthday paradox exploiting hash collision probability", es: "Paradoja del cumpleaños explotando probabilidad de colisión hash", de: "Geburtstagsparadoxon, das Hash-Kollisionswahrscheinlichkeit ausnutzt", nl: "Verjaardagsparadox die hash botsingsWaarschijnlijkheid uitbuit" }
      ],
      correct: 0,
      explanation: {
        en: "Side-channel attacks exploit physical characteristics of cryptographic implementations (timing variations, power consumption, electromagnetic radiation) rather than mathematical weaknesses in the algorithms, requiring careful implementation to mitigate.",
        es: "Los ataques de canal lateral explotan características físicas de implementaciones criptográficas (variaciones de tiempo, consumo de energía, radiación electromagnética) en lugar de debilidades matemáticas en los algoritmos, requiriendo implementación cuidadosa para mitigar.",
        de: "Seitenkanal-Angriffe nutzen physische Eigenschaften kryptographischer Implementierungen (Timing-Variationen, Stromverbrauch, elektromagnetische Strahlung) anstatt mathematische Schwächen in den Algorithmen aus, erfordern sorgfältige Implementierung zur Minderung.",
        nl: "Side-channel aanvallen benutten fysieke kenmerken van cryptografische implementaties (timing variaties, stroomverbruik, elektromagnetische straling) in plaats van wiskundige zwakheden in de algoritmen, wat zorgvuldige implementatie vereist om te verzachten."
      }
    },
    {
      question: {
        en: "What is the primary security consideration when implementing counter mode (CTR) encryption?",
        es: "¿Cuál es la consideración de seguridad principal al implementar cifrado en modo contador (CTR)?",
        de: "Was ist die hauptsächliche Sicherheitsüberlegung bei der Implementierung von Counter Mode (CTR) Verschlüsselung?",
        nl: "Wat is de belangrijkste beveiligingsoverweging bij het implementeren van counter mode (CTR) versleuteling?"
      },
      options: [
        { en: "Counter values must never be reused with the same key", es: "Los valores del contador nunca deben reutilizarse con la misma clave", de: "Counter-Werte dürfen niemals mit demselben Schlüssel wiederverwendet werden", nl: "Counter waarden mogen nooit hergebruikt worden met dezelfde sleutel" },
        { en: "Block size must be larger than message length", es: "El tamaño del bloque debe ser mayor que la longitud del mensaje", de: "Blockgröße muss größer als Nachrichtenlänge sein", nl: "Blokgrootte moet groter zijn dan berichtlengte" },
        { en: "Counter increment must use prime number sequences", es: "El incremento del contador debe usar secuencias de números primos", de: "Counter-Inkrement muss Primzahlsequenzen verwenden", nl: "Counter increment moet priemgetal sequenties gebruiken" },
        { en: "Initialization vector must be cryptographically random", es: "El vector de inicialización debe ser criptográficamente aleatorio", de: "Initialisierungsvektor muss kryptographisch zufällig sein", nl: "Initialisatievector moet cryptografisch willekeurig zijn" }
      ],
      correct: 0,
      explanation: {
        en: "CTR mode security critically depends on never reusing counter values with the same key, as this would produce identical keystream blocks, allowing XOR-based plaintext recovery attacks. Each encryption must use unique counter sequences.",
        es: "La seguridad del modo CTR depende críticamente de nunca reutilizar valores de contador con la misma clave, ya que esto produciría bloques de flujo de clave idénticos, permitiendo ataques de recuperación de texto plano basados en XOR. Cada cifrado debe usar secuencias de contador únicas.",
        de: "CTR-Modus-Sicherheit hängt kritisch davon ab, Counter-Werte niemals mit demselben Schlüssel zu wiederholen, da dies identische Keystream-Blöcke erzeugen würde, was XOR-basierte Klartext-Wiederherstellungsangriffe ermöglicht. Jede Verschlüsselung muss einzigartige Counter-Sequenzen verwenden.",
        nl: "CTR mode beveiliging hangt kritisch af van het nooit hergebruiken van counter waarden met dezelfde sleutel, omdat dit identieke keystream blokken zou produceren, wat XOR-gebaseerde plaintext herstel aanvallen mogelijk maakt. Elke versleuteling moet unieke counter sequenties gebruiken."
      }
    },
    {
      question: {
        en: "Which cryptographic concept ensures that compromising long-term keys doesn't reveal past session communications?",
        es: "¿Qué concepto criptográfico asegura que comprometer claves a largo plazo no revele comunicaciones de sesiones pasadas?",
        de: "Welches kryptographische Konzept stellt sicher, dass die Kompromittierung langfristiger Schlüssel vergangene Sitzungskommunikationen nicht preisgibt?",
        nl: "Welk cryptografisch concept zorgt ervoor dat het compromitteren van lange-termijn sleutels geen vroegere sessiecommunicaties onthult?"
      },
      options: [
        { en: "Perfect Forward Secrecy (PFS) using ephemeral key exchange", es: "Secreto Perfecto hacia Adelante (PFS) usando intercambio de claves efímeras", de: "Perfect Forward Secrecy (PFS) mit ephemeralem Schlüsselaustausch", nl: "Perfect Forward Secrecy (PFS) met kortstondige sleuteluitwisseling" },
        { en: "Key escrow with trusted third-party storage", es: "Custodia de claves con almacenamiento de terceros de confianza", de: "Schlüssel-Hinterlegung mit vertrauenswürdiger Drittanbieter-Speicherung", nl: "Sleutel borgstelling met vertrouwde derde partij opslag" },
        { en: "Symmetric key rotation at fixed intervals", es: "Rotación de claves simétricas a intervalos fijos", de: "Symmetrische Schlüsselrotation in festen Intervallen", nl: "Symmetrische sleutelrotatie op vaste intervallen" },
        { en: "Hardware security module key protection", es: "Protección de claves de módulo de seguridad de hardware", de: "Hardware-Sicherheitsmodul-Schlüsselschutz", nl: "Hardware beveiligingsmodule sleutelprotectie" }
      ],
      correct: 0,
      explanation: {
        en: "Perfect Forward Secrecy uses ephemeral (temporary) keys for each session that are discarded after use. Even if long-term authentication keys are compromised, past communications remain secure because session keys were never stored or derivable.",
        es: "El Secreto Perfecto hacia Adelante usa claves efímeras (temporales) para cada sesión que se descartan después del uso. Incluso si las claves de autenticación a largo plazo se comprometen, las comunicaciones pasadas permanecen seguras porque las claves de sesión nunca fueron almacenadas o derivables.",
        de: "Perfect Forward Secrecy verwendet ephemere (temporäre) Schlüssel für jede Sitzung, die nach Gebrauch verworfen werden. Selbst wenn langfristige Authentifizierungsschlüssel kompromittiert werden, bleiben vergangene Kommunikationen sicher, da Sitzungsschlüssel nie gespeichert oder ableitbar waren.",
        nl: "Perfect Forward Secrecy gebruikt kortstondige (tijdelijke) sleutels voor elke sessie die na gebruik worden weggegooid. Zelfs als lange-termijn authenticatiesleutels gecompromitteerd worden, blijven vroegere communicaties veilig omdat sessiesleutels nooit opgeslagen of afleidbaar waren."
      }
    },
    {
      question: {
        en: "What is the fundamental difference between semantic security and computational security in cryptography?",
        es: "¿Cuál es la diferencia fundamental entre seguridad semántica y seguridad computacional en criptografía?",
        de: "Was ist der grundlegende Unterschied zwischen semantischer Sicherheit und rechnerischer Sicherheit in der Kryptographie?",
        nl: "Wat is het fundamentele verschil tussen semantische beveiliging en computationele beveiliging in cryptografie?"
      },
      options: [
        { en: "Semantic security prevents any information leakage; computational security assumes limited attacker resources", es: "La seguridad semántica previene cualquier fuga de información; la seguridad computacional asume recursos limitados del atacante", de: "Semantische Sicherheit verhindert jeglichen Informationsleck; rechnerische Sicherheit nimmt begrenzte Angreifer-Ressourcen an", nl: "Semantische beveiliging voorkomt elke informatie lekkage; computationele beveiliging veronderstelt beperkte aanvaller middelen" },
        { en: "Semantic security applies to symmetric ciphers; computational security applies to asymmetric ciphers", es: "La seguridad semántica se aplica a cifrados simétricos; la seguridad computacional se aplica a cifrados asimétricos", de: "Semantische Sicherheit gilt für symmetrische Chiffren; rechnerische Sicherheit gilt für asymmetrische Chiffren", nl: "Semantische beveiliging geldt voor symmetrische cijfers; computationele beveiliging geldt voor asymmetrische cijfers" },
        { en: "Semantic security requires hardware modules; computational security uses software only", es: "La seguridad semántica requiere módulos de hardware; la seguridad computacional usa solo software", de: "Semantische Sicherheit erfordert Hardware-Module; rechnerische Sicherheit verwendet nur Software", nl: "Semantische beveiliging vereist hardware modules; computationele beveiliging gebruikt alleen software" },
        { en: "Semantic security focuses on key management; computational security focuses on algorithm design", es: "La seguridad semántica se centra en gestión de claves; la seguridad computacional se centra en diseño de algoritmos", de: "Semantische Sicherheit fokussiert auf Schlüsselverwaltung; rechnerische Sicherheit fokussiert auf Algorithmus-Design", nl: "Semantische beveiliging richt zich op sleutelbeheer; computationele beveiliging richt zich op algoritme ontwerp" }
      ],
      correct: 0,
      explanation: {
        en: "Semantic security is an ideal notion requiring that no partial information about plaintext is leaked from ciphertext, while computational security is practical, assuming attackers have polynomial-time bounded computational resources and cannot break the system within reasonable time.",
        es: "La seguridad semántica es una noción ideal que requiere que no se filtre información parcial sobre el texto plano del texto cifrado, mientras que la seguridad computacional es práctica, asumiendo que los atacantes tienen recursos computacionales limitados en tiempo polinómico y no pueden romper el sistema en tiempo razonable.",
        de: "Semantische Sicherheit ist ein ideales Konzept, das erfordert, dass keine Teilinformationen über Klartext aus Chiffretext durchsickern, während rechnerische Sicherheit praktisch ist und annimmt, dass Angreifer polynomial-zeitbegrenzte Rechenressourcen haben und das System nicht in angemessener Zeit brechen können.",
        nl: "Semantische beveiliging is een ideaal begrip dat vereist dat geen gedeeltelijke informatie over plaintext lekt uit ciphertext, terwijl computationele beveiliging praktisch is, aannemend dat aanvallers polynomiaal-tijd begrensde computationele middelen hebben en het systeem niet binnen redelijke tijd kunnen breken."
      }
    },
    {
      question: {
        en: "Which property makes block ciphers suitable for constructing cryptographic hash functions?",
        es: "¿Qué propiedad hace que los cifrados de bloque sean adecuados para construir funciones hash criptográficas?",
        de: "Welche Eigenschaft macht Blockchiffren geeignet für die Konstruktion kryptographischer Hash-Funktionen?",
        nl: "Welke eigenschap maakt blokcijfers geschikt voor het construeren van cryptografische hash functies?"
      },
      options: [
        { en: "Pseudorandom permutation property with compression function construction", es: "Propiedad de permutación pseudoaleatoria con construcción de función de compresión", de: "Pseudozufällige Permutationseigenschaft mit Kompressionsfunktionskonstruktion", nl: "Pseudowillekeurige permutatie eigenschap met compressiefunctie constructie" },
        { en: "Variable key length supporting arbitrary input sizes", es: "Longitud de clave variable soportando tamaños de entrada arbitrarios", de: "Variable Schlüssellänge unterstützt beliebige Eingabegrößen", nl: "Variabele sleutellengte ondersteunt willekeurige invoergroottes" },
        { en: "Inherent collision resistance without additional modifications", es: "Resistencia a colisiones inherente sin modificaciones adicionales", de: "Inherente Kollisionsresistenz ohne zusätzliche Modifikationen", nl: "Inherente botsingsresistentie zonder aanvullende modificaties" },
        { en: "Native support for message authentication without separate MAC algorithms", es: "Soporte nativo para autenticación de mensajes sin algoritmos MAC separados", de: "Native Unterstützung für Nachrichtenauthentifizierung ohne separate MAC-Algorithmen", nl: "Native ondersteuning voor berichtauthenticatie zonder aparte MAC algoritmen" }
      ],
      correct: 0,
      explanation: {
        en: "Block ciphers act as pseudorandom permutations and can be used in constructions like Davies-Meyer or Miyaguchi-Preneel to build compression functions, which are then used in hash function constructions like Merkle-Damgård to process arbitrary-length inputs.",
        es: "Los cifrados de bloque actúan como permutaciones pseudoaleatorias y pueden usarse en construcciones como Davies-Meyer o Miyaguchi-Preneel para construir funciones de compresión, que luego se usan en construcciones de funciones hash como Merkle-Damgård para procesar entradas de longitud arbitraria.",
        de: "Blockchiffren wirken als pseudozufällige Permutationen und können in Konstruktionen wie Davies-Meyer oder Miyaguchi-Preneel verwendet werden, um Kompressionsfunktionen zu bauen, die dann in Hash-Funktionskonstruktionen wie Merkle-Damgård verwendet werden, um Eingaben beliebiger Länge zu verarbeiten.",
        nl: "Blokcijfers werken als pseudowillekeurige permutaties en kunnen gebruikt worden in constructies zoals Davies-Meyer of Miyaguchi-Preneel om compressiefuncties te bouwen, die dan gebruikt worden in hash functie constructies zoals Merkle-Damgård om invoer van willekeurige lengte te verwerken."
      }
    }
  ]
});
