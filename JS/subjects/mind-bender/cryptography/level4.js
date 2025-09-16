// Cryptography - Level 4: Public Key Cryptography and Digital Signatures
window.addLevel('mind-bender/cryptography', {
  name: {
    en: "Public Key Cryptography and Digital Signatures",
    es: "Criptografía de Clave Pública y Firmas Digitales",
    de: "Public-Key-Kryptografie und Digitale Signaturen",
    nl: "Publieke Sleutel Cryptografie en Digitale Handtekeningen"
  },
  questions: [
    {
      question: {
        en: "What is the fundamental principle behind public key cryptography?",
        es: "¿Cuál es el principio fundamental detrás de la criptografía de clave pública?",
        de: "Was ist das Grundprinzip der Public-Key-Kryptografie?",
        nl: "Wat is het fundamentele principe achter publieke sleutel cryptografie?"
      },
      options: [
        {
          en: "Using the same key for encryption and decryption",
          es: "Usar la misma clave para cifrado y descifrado",
          de: "Verwendung desselben Schlüssels für Verschlüsselung und Entschlüsselung",
          nl: "Dezelfde sleutel gebruiken voor versleuteling en ontsleuteling"
        },
        {
          en: "Using a pair of mathematically related keys",
          es: "Usar un par de claves matemáticamente relacionadas",
          de: "Verwendung eines Paares mathematisch verwandter Schlüssel",
          nl: "Een paar wiskundig gerelateerde sleutels gebruiken"
        },
        {
          en: "Using multiple symmetric keys in sequence",
          es: "Usar múltiples claves simétricas en secuencia",
          de: "Verwendung mehrerer symmetrischer Schlüssel in Folge",
          nl: "Meerdere symmetrische sleutels achtereenvolgens gebruiken"
        },
        {
          en: "Using random key generation for each message",
          es: "Usar generación de claves aleatorias para cada mensaje",
          de: "Verwendung zufälliger Schlüsselgenerierung für jede Nachricht",
          nl: "Willekeurige sleutelgeneratie voor elke boodschap gebruiken"
        }
      ],
      correct: 1,
      explanation: {
        en: "Public key cryptography uses a pair of mathematically related keys: a public key for encryption and a private key for decryption (or vice versa for digital signatures).",
        es: "La criptografía de clave pública usa un par de claves matemáticamente relacionadas: una clave pública para cifrado y una clave privada para descifrado (o viceversa para firmas digitales).",
        de: "Public-Key-Kryptografie verwendet ein Paar mathematisch verwandter Schlüssel: einen öffentlichen Schlüssel für die Verschlüsselung und einen privaten Schlüssel für die Entschlüsselung (oder umgekehrt für digitale Signaturen).",
        nl: "Publieke sleutel cryptografie gebruikt een paar wiskundig gerelateerde sleutels: een publieke sleutel voor versleuteling en een private sleutel voor ontsleuteling (of omgekeerd voor digitale handtekeningen)."
      }
    },
    {
      question: {
        en: "Which mathematical problem forms the basis of RSA encryption?",
        es: "¿Qué problema matemático forma la base del cifrado RSA?",
        de: "Welches mathematische Problem bildet die Grundlage der RSA-Verschlüsselung?",
        nl: "Welk wiskundig probleem vormt de basis van RSA-versleuteling?"
      },
      options: [
        {
          en: "Discrete logarithm problem",
          es: "Problema del logaritmo discreto",
          de: "Diskretes Logarithmus-Problem",
          nl: "Discreet logaritme probleem"
        },
        {
          en: "Factorization of large composite numbers",
          es: "Factorización de números compuestos grandes",
          de: "Faktorisierung großer zusammengesetzter Zahlen",
          nl: "Factorisatie van grote samengestelde getallen"
        },
        {
          en: "Elliptic curve problem",
          es: "Problema de curvas elípticas",
          de: "Elliptische Kurven Problem",
          nl: "Elliptische curve probleem"
        },
        {
          en: "Knapsack problem",
          es: "Problema de la mochila",
          de: "Rucksack-Problem",
          nl: "Rugzak probleem"
        }
      ],
      correct: 1,
      explanation: {
        en: "RSA security relies on the difficulty of factoring large composite numbers that are the product of two large prime numbers.",
        es: "La seguridad RSA se basa en la dificultad de factorizar números compuestos grandes que son el producto de dos números primos grandes.",
        de: "Die RSA-Sicherheit beruht auf der Schwierigkeit, große zusammengesetzte Zahlen zu faktorisieren, die das Produkt zweier großer Primzahlen sind.",
        nl: "RSA-beveiliging is gebaseerd op de moeilijkheid van het factoriseren van grote samengestelde getallen die het product zijn van twee grote priemgetallen."
      }
    },
    {
      question: {
        en: "What is the minimum recommended key size for RSA in 2024?",
        es: "¿Cuál es el tamaño mínimo de clave recomendado para RSA en 2024?",
        de: "Was ist die minimal empfohlene Schlüsselgröße für RSA im Jahr 2024?",
        nl: "Wat is de minimaal aanbevolen sleutelgrootte voor RSA in 2024?"
      },
      options: [
        {
          en: "1024 bits",
          es: "1024 bits",
          de: "1024 Bits",
          nl: "1024 bits"
        },
        {
          en: "2048 bits",
          es: "2048 bits",
          de: "2048 Bits",
          nl: "2048 bits"
        },
        {
          en: "3072 bits",
          es: "3072 bits",
          de: "3072 Bits",
          nl: "3072 bits"
        },
        {
          en: "4096 bits",
          es: "4096 bits",
          de: "4096 Bits",
          nl: "4096 bits"
        }
      ],
      correct: 2,
      explanation: {
        en: "NIST currently recommends a minimum of 3072-bit RSA keys for new applications, as 2048-bit keys are being phased out due to advancing computational capabilities.",
        es: "NIST actualmente recomienda un mínimo de claves RSA de 3072 bits para nuevas aplicaciones, ya que las claves de 2048 bits están siendo eliminadas gradualmente debido al avance de las capacidades computacionales.",
        de: "NIST empfiehlt derzeit mindestens 3072-Bit-RSA-Schlüssel für neue Anwendungen, da 2048-Bit-Schlüssel aufgrund fortschreitender Rechenleistung schrittweise auslaufen.",
        nl: "NIST beveelt momenteel minimaal 3072-bit RSA-sleutels aan voor nieuwe toepassingen, omdat 2048-bit sleutels geleidelijk worden uitgefaseerd vanwege toenemende rekencapaciteiten."
      }
    },
    {
      question: {
        en: "What advantage does Elliptic Curve Cryptography (ECC) have over RSA?",
        es: "¿Qué ventaja tiene la Criptografía de Curvas Elípticas (ECC) sobre RSA?",
        de: "Welchen Vorteil hat die Elliptic Curve Cryptography (ECC) gegenüber RSA?",
        nl: "Welk voordeel heeft Elliptic Curve Cryptography (ECC) ten opzichte van RSA?"
      },
      options: [
        {
          en: "ECC is easier to implement",
          es: "ECC es más fácil de implementar",
          de: "ECC ist einfacher zu implementieren",
          nl: "ECC is gemakkelijker te implementeren"
        },
        {
          en: "ECC provides equivalent security with smaller key sizes",
          es: "ECC proporciona seguridad equivalente con tamaños de clave más pequeños",
          de: "ECC bietet gleichwertige Sicherheit mit kleineren Schlüsselgrößen",
          nl: "ECC biedt gelijkwaardige beveiliging met kleinere sleutelgroottes"
        },
        {
          en: "ECC is faster for all operations",
          es: "ECC es más rápido para todas las operaciones",
          de: "ECC ist schneller für alle Operationen",
          nl: "ECC is sneller voor alle bewerkingen"
        },
        {
          en: "ECC requires less memory",
          es: "ECC requiere menos memoria",
          de: "ECC benötigt weniger Speicher",
          nl: "ECC vereist minder geheugen"
        }
      ],
      correct: 1,
      explanation: {
        en: "ECC provides equivalent security to RSA with much smaller key sizes (e.g., 256-bit ECC ≈ 3072-bit RSA), making it more efficient for constrained environments.",
        es: "ECC proporciona seguridad equivalente a RSA con tamaños de clave mucho más pequeños (ej., ECC de 256 bits ≈ RSA de 3072 bits), haciéndolo más eficiente para entornos restringidos.",
        de: "ECC bietet gleichwertige Sicherheit wie RSA mit viel kleineren Schlüsselgrößen (z.B. 256-Bit ECC ≈ 3072-Bit RSA), was es für eingeschränkte Umgebungen effizienter macht.",
        nl: "ECC biedt gelijkwaardige beveiliging aan RSA met veel kleinere sleutelgroottes (bijv. 256-bit ECC ≈ 3072-bit RSA), waardoor het efficiënter is voor beperkte omgevingen."
      }
    },
    {
      question: {
        en: "What is a digital signature used for?",
        es: "¿Para qué se usa una firma digital?",
        de: "Wofür wird eine digitale Signatur verwendet?",
        nl: "Waarvoor wordt een digitale handtekening gebruikt?"
      },
      options: [
        {
          en: "Data encryption only",
          es: "Solo cifrado de datos",
          de: "Nur Datenverschlüsselung",
          nl: "Alleen data-versleuteling"
        },
        {
          en: "Authentication and non-repudiation",
          es: "Autenticación y no repudio",
          de: "Authentifizierung und Unleugbarkeit",
          nl: "Authenticatie en non-repudiatie"
        },
        {
          en: "Key exchange only",
          es: "Solo intercambio de claves",
          de: "Nur Schlüsselaustausch",
          nl: "Alleen sleuteluitwisseling"
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
        en: "Digital signatures provide authentication (proving who sent the message) and non-repudiation (preventing the sender from denying they sent it).",
        es: "Las firmas digitales proporcionan autenticación (probando quién envió el mensaje) y no repudio (evitando que el remitente niegue haberlo enviado).",
        de: "Digitale Signaturen bieten Authentifizierung (Nachweis, wer die Nachricht gesendet hat) und Unleugbarkeit (Verhinderung, dass der Absender leugnet, sie gesendet zu haben).",
        nl: "Digitale handtekeningen bieden authenticatie (bewijzen wie het bericht stuurde) en non-repudiatie (voorkomen dat de verzender ontkent het te hebben verzonden)."
      }
    },
    {
      question: {
        en: "In the Diffie-Hellman key exchange, what information is kept secret?",
        es: "En el intercambio de claves Diffie-Hellman, ¿qué información se mantiene secreta?",
        de: "Beim Diffie-Hellman-Schlüsselaustausch, welche Information wird geheim gehalten?",
        nl: "In de Diffie-Hellman sleuteluitwisseling, welke informatie wordt geheim gehouden?"
      },
      options: [
        {
          en: "The generator g and modulus p",
          es: "El generador g y el módulo p",
          de: "Der Generator g und der Modulus p",
          nl: "De generator g en modulus p"
        },
        {
          en: "The private keys of both parties",
          es: "Las claves privadas de ambas partes",
          de: "Die privaten Schlüssel beider Parteien",
          nl: "De private sleutels van beide partijen"
        },
        {
          en: "The public keys exchanged",
          es: "Las claves públicas intercambiadas",
          de: "Die ausgetauschten öffentlichen Schlüssel",
          nl: "De uitgewisselde publieke sleutels"
        },
        {
          en: "The final shared secret only",
          es: "Solo el secreto compartido final",
          de: "Nur das endgültige geteilte Geheimnis",
          nl: "Alleen het uiteindelijke gedeelde geheim"
        }
      ],
      correct: 1,
      explanation: {
        en: "In Diffie-Hellman, each party keeps their private key secret. The generator, modulus, and public keys are transmitted openly, but the private keys enable computation of the shared secret.",
        es: "En Diffie-Hellman, cada parte mantiene secreta su clave privada. El generador, módulo y claves públicas se transmiten abiertamente, pero las claves privadas permiten el cálculo del secreto compartido.",
        de: "Bei Diffie-Hellman hält jede Partei ihren privaten Schlüssel geheim. Generator, Modulus und öffentliche Schlüssel werden offen übertragen, aber die privaten Schlüssel ermöglichen die Berechnung des geteilten Geheimnisses.",
        nl: "Bij Diffie-Hellman houdt elke partij hun private sleutel geheim. De generator, modulus en publieke sleutels worden openlijk verzonden, maar de private sleutels maken berekening van het gedeelde geheim mogelijk."
      }
    },
    {
      question: {
        en: "What is the purpose of a Certificate Authority (CA) in PKI?",
        es: "¿Cuál es el propósito de una Autoridad de Certificación (CA) en PKI?",
        de: "Was ist der Zweck einer Certificate Authority (CA) in PKI?",
        nl: "Wat is het doel van een Certificate Authority (CA) in PKI?"
      },
      options: [
        {
          en: "To generate private keys for users",
          es: "Generar claves privadas para usuarios",
          de: "Private Schlüssel für Benutzer zu generieren",
          nl: "Private sleutels genereren voor gebruikers"
        },
        {
          en: "To verify and certify the authenticity of public keys",
          es: "Verificar y certificar la autenticidad de las claves públicas",
          de: "Die Authentizität öffentlicher Schlüssel zu verifizieren und zu zertifizieren",
          nl: "De authenticiteit van publieke sleutels verifiëren en certificeren"
        },
        {
          en: "To store encrypted messages",
          es: "Almacenar mensajes cifrados",
          de: "Verschlüsselte Nachrichten zu speichern",
          nl: "Versleutelde berichten opslaan"
        },
        {
          en: "To perform key escrow services",
          es: "Realizar servicios de custodia de claves",
          de: "Key-Escrow-Dienste durchzuführen",
          nl: "Sleutel escrow diensten uitvoeren"
        }
      ],
      correct: 1,
      explanation: {
        en: "A Certificate Authority issues digital certificates that bind public keys to the identity of their owners, providing trust in the authenticity of public keys.",
        es: "Una Autoridad de Certificación emite certificados digitales que vinculan claves públicas a la identidad de sus propietarios, proporcionando confianza en la autenticidad de las claves públicas.",
        de: "Eine Certificate Authority stellt digitale Zertifikate aus, die öffentliche Schlüssel an die Identität ihrer Besitzer binden und Vertrauen in die Authentizität öffentlicher Schlüssel schaffen.",
        nl: "Een Certificate Authority geeft digitale certificaten uit die publieke sleutels koppelen aan de identiteit van hun eigenaars, waardoor vertrouwen in de authenticiteit van publieke sleutels wordt geboden."
      }
    },
    {
      question: {
        en: "What is the main vulnerability that padding schemes like OAEP protect against in RSA?",
        es: "¿Cuál es la vulnerabilidad principal que los esquemas de relleno como OAEP protegen en RSA?",
        de: "Was ist die Hauptverwundbarkeit, gegen die Padding-Schemata wie OAEP in RSA schützen?",
        nl: "Wat is de hoofdkwetsbaarheid waar padding-schema's zoals OAEP tegen beschermen in RSA?"
      },
      options: [
        {
          en: "Brute force attacks",
          es: "Ataques de fuerza bruta",
          de: "Brute-Force-Angriffe",
          nl: "Brute force aanvallen"
        },
        {
          en: "Chosen plaintext attacks",
          es: "Ataques de texto plano elegido",
          de: "Chosen-Plaintext-Angriffe",
          nl: "Chosen plaintext aanvallen"
        },
        {
          en: "Side-channel attacks",
          es: "Ataques de canal lateral",
          de: "Seitenkanalangriffe",
          nl: "Zijkanaal aanvallen"
        },
        {
          en: "Man-in-the-middle attacks",
          es: "Ataques de hombre en el medio",
          de: "Man-in-the-Middle-Angriffe",
          nl: "Man-in-the-middle aanvallen"
        }
      ],
      correct: 1,
      explanation: {
        en: "OAEP (Optimal Asymmetric Encryption Padding) protects against chosen plaintext attacks by adding randomness and preventing attackers from learning information about encrypted messages.",
        es: "OAEP (Relleno de Cifrado Asimétrico Óptimo) protege contra ataques de texto plano elegido agregando aleatoriedad y evitando que los atacantes aprendan información sobre mensajes cifrados.",
        de: "OAEP (Optimal Asymmetric Encryption Padding) schützt vor Chosen-Plaintext-Angriffen durch Hinzufügung von Zufälligkeit und verhindert, dass Angreifer Informationen über verschlüsselte Nachrichten erfahren.",
        nl: "OAEP (Optimal Asymmetric Encryption Padding) beschermt tegen chosen plaintext aanvallen door willekeurigheid toe te voegen en te voorkomen dat aanvallers informatie over versleutelde berichten leren."
      }
    },
    {
      question: {
        en: "Which hash function is commonly used with RSA-PSS signature scheme?",
        es: "¿Qué función hash se usa comúnmente con el esquema de firma RSA-PSS?",
        de: "Welche Hash-Funktion wird häufig mit dem RSA-PSS-Signaturschema verwendet?",
        nl: "Welke hash-functie wordt vaak gebruikt met het RSA-PSS handtekeningschema?"
      },
      options: [
        {
          en: "MD5",
          es: "MD5",
          de: "MD5",
          nl: "MD5"
        },
        {
          en: "SHA-1",
          es: "SHA-1",
          de: "SHA-1",
          nl: "SHA-1"
        },
        {
          en: "SHA-256",
          es: "SHA-256",
          de: "SHA-256",
          nl: "SHA-256"
        },
        {
          en: "CRC32",
          es: "CRC32",
          de: "CRC32",
          nl: "CRC32"
        }
      ],
      correct: 2,
      explanation: {
        en: "SHA-256 is commonly used with RSA-PSS as it provides strong collision resistance and is recommended by current security standards, unlike the deprecated MD5 and SHA-1.",
        es: "SHA-256 se usa comúnmente con RSA-PSS ya que proporciona fuerte resistencia a colisiones y es recomendado por los estándares de seguridad actuales, a diferencia de MD5 y SHA-1 que están obsoletos.",
        de: "SHA-256 wird häufig mit RSA-PSS verwendet, da es starke Kollisionsresistenz bietet und von aktuellen Sicherheitsstandards empfohlen wird, im Gegensatz zu den veralteten MD5 und SHA-1.",
        nl: "SHA-256 wordt vaak gebruikt met RSA-PSS omdat het sterke botsingsresistentie biedt en wordt aanbevolen door huidige beveiligingsstandaarden, in tegenstelling tot de verouderde MD5 en SHA-1."
      }
    },
    {
      question: {
        en: "What is the primary security concern with ElGamal encryption?",
        es: "¿Cuál es la principal preocupación de seguridad con el cifrado ElGamal?",
        de: "Was ist das Hauptsicherheitsproblem bei der ElGamal-Verschlüsselung?",
        nl: "Wat is de primaire beveiligingszorg bij ElGamal-versleuteling?"
      },
      options: [
        {
          en: "It's vulnerable to factorization attacks",
          es: "Es vulnerable a ataques de factorización",
          de: "Es ist anfällig für Faktorisierungsangriffe",
          nl: "Het is kwetsbaar voor factorisatieaanvallen"
        },
        {
          en: "It produces ciphertexts twice the size of the plaintext",
          es: "Produce textos cifrados del doble del tamaño del texto plano",
          de: "Es erzeugt Chiffretexte doppelt so groß wie der Klartext",
          nl: "Het produceert cijferteksten twee keer zo groot als de platte tekst"
        },
        {
          en: "It's not semantically secure without proper randomization",
          es: "No es semánticamente seguro sin aleatorización adecuada",
          de: "Es ist ohne ordnungsgemäße Randomisierung nicht semantisch sicher",
          nl: "Het is niet semantisch veilig zonder juiste randomisatie"
        },
        {
          en: "It requires a trusted third party",
          es: "Requiere una tercera parte confiable",
          de: "Es erfordert eine vertrauenswürdige dritte Partei",
          nl: "Het vereist een vertrouwde derde partij"
        }
      ],
      correct: 2,
      explanation: {
        en: "ElGamal encryption is not semantically secure if the same randomness is used for encrypting the same message, as it will produce identical ciphertexts, revealing patterns.",
        es: "El cifrado ElGamal no es semánticamente seguro si se usa la misma aleatoriedad para cifrar el mismo mensaje, ya que producirá textos cifrados idénticos, revelando patrones.",
        de: "ElGamal-Verschlüsselung ist nicht semantisch sicher, wenn dieselbe Zufälligkeit für die Verschlüsselung derselben Nachricht verwendet wird, da sie identische Chiffretexte erzeugt und Muster preisgibt.",
        nl: "ElGamal-versleuteling is niet semantisch veilig als dezelfde willekeurigheid wordt gebruikt voor het versleutelen van hetzelfde bericht, omdat het identieke cijferteksten produceert, waardoor patronen worden onthuld."
      }
    },
    {
      question: {
        en: "What does forward secrecy (perfect forward secrecy) provide?",
        es: "¿Qué proporciona el secreto hacia adelante (secreto hacia adelante perfecto)?",
        de: "Was bietet Forward Secrecy (Perfect Forward Secrecy)?",
        nl: "Wat biedt forward secrecy (perfect forward secrecy)?"
      },
      options: [
        {
          en: "Protection against future quantum computers",
          es: "Protección contra futuras computadoras cuánticas",
          de: "Schutz vor zukünftigen Quantencomputern",
          nl: "Bescherming tegen toekomstige quantumcomputers"
        },
        {
          en: "Encryption of past communications even if long-term keys are compromised",
          es: "Cifrado de comunicaciones pasadas incluso si las claves a largo plazo se ven comprometidas",
          de: "Verschlüsselung vergangener Kommunikation auch wenn langfristige Schlüssel kompromittiert werden",
          nl: "Versleuteling van eerdere communicaties zelfs als lange-termijn sleutels gecompromitteerd zijn"
        },
        {
          en: "Faster key generation",
          es: "Generación de claves más rápida",
          de: "Schnellere Schlüsselgenerierung",
          nl: "Snellere sleutelgeneratie"
        },
        {
          en: "Automatic key rotation",
          es: "Rotación automática de claves",
          de: "Automatische Schlüsselrotation",
          nl: "Automatische sleutelrotatie"
        }
      ],
      correct: 1,
      explanation: {
        en: "Forward secrecy ensures that past communications remain encrypted and secure even if the long-term private keys are later compromised, by using ephemeral session keys.",
        es: "El secreto hacia adelante asegura que las comunicaciones pasadas permanezcan cifradas y seguras incluso si las claves privadas a largo plazo se ven comprometidas posteriormente, usando claves de sesión efímeras.",
        de: "Forward Secrecy stellt sicher, dass vergangene Kommunikation verschlüsselt und sicher bleibt, selbst wenn die langfristigen privaten Schlüssel später kompromittiert werden, durch die Verwendung ephemerer Sitzungsschlüssel.",
        nl: "Forward secrecy zorgt ervoor dat eerdere communicaties versleuteld en veilig blijven, zelfs als de lange-termijn private sleutels later gecompromitteerd worden, door gebruik van kortstondige sessiesleutels."
      }
    },
    {
      question: {
        en: "Which elliptic curve is recommended by NIST for 256-bit security?",
        es: "¿Qué curva elíptica es recomendada por NIST para seguridad de 256 bits?",
        de: "Welche elliptische Kurve wird von NIST für 256-Bit-Sicherheit empfohlen?",
        nl: "Welke elliptische curve wordt door NIST aanbevolen voor 256-bit beveiliging?"
      },
      options: [
        {
          en: "secp256k1",
          es: "secp256k1",
          de: "secp256k1",
          nl: "secp256k1"
        },
        {
          en: "P-256 (secp256r1)",
          es: "P-256 (secp256r1)",
          de: "P-256 (secp256r1)",
          nl: "P-256 (secp256r1)"
        },
        {
          en: "Curve25519",
          es: "Curve25519",
          de: "Curve25519",
          nl: "Curve25519"
        },
        {
          en: "brainpoolP256r1",
          es: "brainpoolP256r1",
          de: "brainpoolP256r1",
          nl: "brainpoolP256r1"
        }
      ],
      correct: 1,
      explanation: {
        en: "P-256 (secp256r1) is the NIST-recommended elliptic curve for 256-bit security, widely used in TLS and other security protocols.",
        es: "P-256 (secp256r1) es la curva elíptica recomendada por NIST para seguridad de 256 bits, ampliamente usada en TLS y otros protocolos de seguridad.",
        de: "P-256 (secp256r1) ist die von NIST empfohlene elliptische Kurve für 256-Bit-Sicherheit, weit verbreitet in TLS und anderen Sicherheitsprotokollen.",
        nl: "P-256 (secp256r1) is de door NIST aanbevolen elliptische curve voor 256-bit beveiliging, veel gebruikt in TLS en andere beveiligingsprotocollen."
      }
    },
    {
      question: {
        en: "What is a timing attack in the context of RSA implementation?",
        es: "¿Qué es un ataque de temporización en el contexto de implementación RSA?",
        de: "Was ist ein Timing-Angriff im Kontext der RSA-Implementierung?",
        nl: "Wat is een timing-aanval in de context van RSA-implementatie?"
      },
      options: [
        {
          en: "An attack that exploits variations in execution time",
          es: "Un ataque que explota variaciones en el tiempo de ejecución",
          de: "Ein Angriff, der Variationen in der Ausführungszeit ausnutzt",
          nl: "Een aanval die variaties in uitvoeringstijd uitbuit"
        },
        {
          en: "An attack that synchronizes with system clock",
          es: "Un ataque que se sincroniza con el reloj del sistema",
          de: "Ein Angriff, der sich mit der Systemuhr synchronisiert",
          nl: "Een aanval die synchroniseert met de systeemklok"
        },
        {
          en: "An attack that delays message transmission",
          es: "Un ataque que retrasa la transmisión de mensajes",
          de: "Ein Angriff, der die Nachrichtenübertragung verzögert",
          nl: "Een aanval die berichtverzending vertraagt"
        },
        {
          en: "An attack based on replay of old messages",
          es: "Un ataque basado en reproducción de mensajes antiguos",
          de: "Ein Angriff basierend auf der Wiederholung alter Nachrichten",
          nl: "Een aanval gebaseerd op herhaling van oude berichten"
        }
      ],
      correct: 0,
      explanation: {
        en: "A timing attack analyzes variations in execution time of cryptographic operations to extract secret information, such as private key bits in RSA implementations.",
        es: "Un ataque de temporización analiza variaciones en el tiempo de ejecución de operaciones criptográficas para extraer información secreta, como bits de clave privada en implementaciones RSA.",
        de: "Ein Timing-Angriff analysiert Variationen in der Ausführungszeit kryptographischer Operationen, um geheime Informationen zu extrahieren, wie private Schlüsselbits in RSA-Implementierungen.",
        nl: "Een timing-aanval analyseert variaties in uitvoeringstijd van cryptografische operaties om geheime informatie te verkrijgen, zoals private sleutelbits in RSA-implementaties."
      }
    },
    {
      question: {
        en: "What is the purpose of key stretching in password-based cryptography?",
        es: "¿Cuál es el propósito del estiramiento de claves en criptografía basada en contraseñas?",
        de: "Was ist der Zweck des Key Stretching in passwort-basierter Kryptographie?",
        nl: "Wat is het doel van key stretching in op wachtwoord gebaseerde cryptografie?"
      },
      options: [
        {
          en: "To make passwords longer",
          es: "Hacer las contraseñas más largas",
          de: "Passwörter länger zu machen",
          nl: "Wachtwoorden langer maken"
        },
        {
          en: "To slow down brute force attacks",
          es: "Ralentizar ataques de fuerza bruta",
          de: "Brute-Force-Angriffe zu verlangsamen",
          nl: "Brute force aanvallen vertragen"
        },
        {
          en: "To compress password storage",
          es: "Comprimir el almacenamiento de contraseñas",
          de: "Passwort-Speicherung zu komprimieren",
          nl: "Wachtwoordopslag comprimeren"
        },
        {
          en: "To enable password sharing",
          es: "Habilitar el intercambio de contraseñas",
          de: "Passwort-Sharing zu ermöglichen",
          nl: "Wachtwoord delen mogelijk maken"
        }
      ],
      correct: 1,
      explanation: {
        en: "Key stretching deliberately slows down the key derivation process, making brute force attacks computationally expensive and time-consuming for attackers.",
        es: "El estiramiento de claves deliberadamente ralentiza el proceso de derivación de claves, haciendo que los ataques de fuerza bruta sean computacionalmente costosos y consuman tiempo para los atacantes.",
        de: "Key Stretching verlangsamt den Schlüsselableitungsprozess bewusst und macht Brute-Force-Angriffe rechenaufwändig und zeitaufwändig für Angreifer.",
        nl: "Key stretching vertraagt opzettelijk het sleutelafleiding proces, waardoor brute force aanvallen rekenkundig duur en tijdrovend worden voor aanvallers."
      }
    },
    {
      question: {
        en: "Which protocol commonly uses ephemeral Diffie-Hellman for key exchange?",
        es: "¿Qué protocolo usa comúnmente Diffie-Hellman efímero para intercambio de claves?",
        de: "Welches Protokoll verwendet häufig ephemeres Diffie-Hellman für Schlüsselaustausch?",
        nl: "Welk protocol gebruikt gewoonlijk ephemeral Diffie-Hellman voor sleuteluitwisseling?"
      },
      options: [
        {
          en: "HTTP",
          es: "HTTP",
          de: "HTTP",
          nl: "HTTP"
        },
        {
          en: "TLS/SSL",
          es: "TLS/SSL",
          de: "TLS/SSL",
          nl: "TLS/SSL"
        },
        {
          en: "FTP",
          es: "FTP",
          de: "FTP",
          nl: "FTP"
        },
        {
          en: "SMTP",
          es: "SMTP",
          de: "SMTP",
          nl: "SMTP"
        }
      ],
      correct: 1,
      explanation: {
        en: "TLS/SSL commonly uses ephemeral Diffie-Hellman (DHE or ECDHE) to establish session keys while providing forward secrecy.",
        es: "TLS/SSL comúnmente usa Diffie-Hellman efímero (DHE o ECDHE) para establecer claves de sesión mientras proporciona secreto hacia adelante.",
        de: "TLS/SSL verwendet häufig ephemeres Diffie-Hellman (DHE oder ECDHE), um Sitzungsschlüssel zu etablieren und Forward Secrecy zu bieten.",
        nl: "TLS/SSL gebruikt gewoonlijk ephemeral Diffie-Hellman (DHE of ECDHE) om sessiesleutels tot stand te brengen terwijl forward secrecy wordt geboden."
      }
    },
    {
      question: {
        en: "What is a certificate chain in PKI?",
        es: "¿Qué es una cadena de certificados en PKI?",
        de: "Was ist eine Zertifikatskette in PKI?",
        nl: "Wat is een certificaatketen in PKI?"
      },
      options: [
        {
          en: "A series of encrypted messages",
          es: "Una serie de mensajes cifrados",
          de: "Eine Serie verschlüsselter Nachrichten",
          nl: "Een serie versleutelde berichten"
        },
        {
          en: "A sequence of certificates linking an end-entity to a trusted root CA",
          es: "Una secuencia de certificados que vincula una entidad final a una CA raíz confiable",
          de: "Eine Sequenz von Zertifikaten, die eine Endentität mit einer vertrauenswürdigen Root-CA verbindet",
          nl: "Een reeks certificaten die een eindentiteit koppelt aan een vertrouwde root CA"
        },
        {
          en: "A backup of all certificates",
          es: "Una copia de seguridad de todos los certificados",
          de: "Ein Backup aller Zertifikate",
          nl: "Een back-up van alle certificaten"
        },
        {
          en: "A list of revoked certificates",
          es: "Una lista de certificados revocados",
          de: "Eine Liste widerrufener Zertifikate",
          nl: "Een lijst van ingetrokken certificaten"
        }
      ],
      correct: 1,
      explanation: {
        en: "A certificate chain is a hierarchical sequence of digital certificates that establishes trust from an end-entity certificate up to a trusted root Certificate Authority.",
        es: "Una cadena de certificados es una secuencia jerárquica de certificados digitales que establece confianza desde un certificado de entidad final hasta una Autoridad de Certificación raíz confiable.",
        de: "Eine Zertifikatskette ist eine hierarchische Sequenz digitaler Zertifikate, die Vertrauen von einem Endentitätszertifikat bis zu einer vertrauenswürdigen Root-Certificate Authority etabliert.",
        nl: "Een certificaatketen is een hiërarchische reeks digitale certificaten die vertrouwen vestigt van een eindentiteitscertificaat tot een vertrouwde root Certificate Authority."
      }
    },
    {
      question: {
        en: "What is the main difference between ECDSA and ECDH?",
        es: "¿Cuál es la principal diferencia entre ECDSA y ECDH?",
        de: "Was ist der Hauptunterschied zwischen ECDSA und ECDH?",
        nl: "Wat is het hoofdverschil tussen ECDSA en ECDH?"
      },
      options: [
        {
          en: "ECDSA uses smaller key sizes",
          es: "ECDSA usa tamaños de clave más pequeños",
          de: "ECDSA verwendet kleinere Schlüsselgrößen",
          nl: "ECDSA gebruikt kleinere sleutelgroottes"
        },
        {
          en: "ECDSA is for digital signatures, ECDH is for key agreement",
          es: "ECDSA es para firmas digitales, ECDH es para acuerdo de claves",
          de: "ECDSA ist für digitale Signaturen, ECDH ist für Schlüsselvereinbarung",
          nl: "ECDSA is voor digitale handtekeningen, ECDH is voor sleutelovereenkomst"
        },
        {
          en: "ECDH is faster than ECDSA",
          es: "ECDH es más rápido que ECDSA",
          de: "ECDH ist schneller als ECDSA",
          nl: "ECDH is sneller dan ECDSA"
        },
        {
          en: "ECDSA works only with prime curves",
          es: "ECDSA funciona solo con curvas primas",
          de: "ECDSA funktioniert nur mit Primkurven",
          nl: "ECDSA werkt alleen met priemcurves"
        }
      ],
      correct: 1,
      explanation: {
        en: "ECDSA (Elliptic Curve Digital Signature Algorithm) is used for creating and verifying digital signatures, while ECDH (Elliptic Curve Diffie-Hellman) is used for key agreement between parties.",
        es: "ECDSA (Algoritmo de Firma Digital de Curva Elíptica) se usa para crear y verificar firmas digitales, mientras que ECDH (Diffie-Hellman de Curva Elíptica) se usa para acuerdo de claves entre partes.",
        de: "ECDSA (Elliptic Curve Digital Signature Algorithm) wird zum Erstellen und Verifizieren digitaler Signaturen verwendet, während ECDH (Elliptic Curve Diffie-Hellman) für Schlüsselvereinbarung zwischen Parteien verwendet wird.",
        nl: "ECDSA (Elliptic Curve Digital Signature Algorithm) wordt gebruikt voor het maken en verifiëren van digitale handtekeningen, terwijl ECDH (Elliptic Curve Diffie-Hellman) wordt gebruikt voor sleutelovereenkomst tussen partijen."
      }
    },
    {
      question: {
        en: "What is a hybrid cryptosystem?",
        es: "¿Qué es un criptosistema híbrido?",
        de: "Was ist ein hybrides Kryptosystem?",
        nl: "Wat is een hybride cryptosysteem?"
      },
      options: [
        {
          en: "A system using both classical and quantum cryptography",
          es: "Un sistema que usa tanto criptografía clásica como cuántica",
          de: "Ein System, das sowohl klassische als auch Quantenkryptographie verwendet",
          nl: "Een systeem dat zowel klassieke als quantumcryptografie gebruikt"
        },
        {
          en: "A system combining symmetric and asymmetric cryptography",
          es: "Un sistema que combina criptografía simétrica y asimétrica",
          de: "Ein System, das symmetrische und asymmetrische Kryptographie kombiniert",
          nl: "Een systeem dat symmetrische en asymmetrische cryptografie combineert"
        },
        {
          en: "A system using multiple hash functions",
          es: "Un sistema que usa múltiples funciones hash",
          de: "Ein System, das mehrere Hash-Funktionen verwendet",
          nl: "Een systeem dat meerdere hash-functies gebruikt"
        },
        {
          en: "A system with both hardware and software components",
          es: "Un sistema con componentes tanto de hardware como de software",
          de: "Ein System mit sowohl Hardware- als auch Software-Komponenten",
          nl: "Een systeem met zowel hardware- als software-componenten"
        }
      ],
      correct: 1,
      explanation: {
        en: "A hybrid cryptosystem combines the efficiency of symmetric cryptography for bulk data encryption with the key management advantages of asymmetric cryptography.",
        es: "Un criptosistema híbrido combina la eficiencia de la criptografía simétrica para cifrado de datos masivos con las ventajas de gestión de claves de la criptografía asimétrica.",
        de: "Ein hybrides Kryptosystem kombiniert die Effizienz symmetrischer Kryptographie für Massendatenverschlüsselung mit den Schlüsselverwaltungsvorteilen asymmetrischer Kryptographie.",
        nl: "Een hybride cryptosysteem combineert de efficiëntie van symmetrische cryptografie voor bulk dataversleuteling met de sleutelbeheervoordelen van asymmetrische cryptografie."
      }
    },
    {
      question: {
        en: "What is the purpose of certificate pinning?",
        es: "¿Cuál es el propósito del anclaje de certificados?",
        de: "Was ist der Zweck des Certificate Pinning?",
        nl: "Wat is het doel van certificate pinning?"
      },
      options: [
        {
          en: "To reduce certificate file sizes",
          es: "Reducir el tamaño de los archivos de certificados",
          de: "Zertifikatsdateigrößen zu reduzieren",
          nl: "Certificaatbestandsgroottes verkleinen"
        },
        {
          en: "To prevent man-in-the-middle attacks using rogue certificates",
          es: "Prevenir ataques de hombre en el medio usando certificados falsos",
          de: "Man-in-the-Middle-Angriffe mit gefälschten Zertifikaten zu verhindern",
          nl: "Man-in-the-middle aanvallen met valse certificaten voorkomen"
        },
        {
          en: "To automatically renew certificates",
          es: "Renovar automáticamente los certificados",
          de: "Zertifikate automatisch zu erneuern",
          nl: "Certificaten automatisch vernieuwen"
        },
        {
          en: "To compress certificate data",
          es: "Comprimir datos de certificados",
          de: "Zertifikatsdaten zu komprimieren",
          nl: "Certificaatgegevens comprimeren"
        }
      ],
      correct: 1,
      explanation: {
        en: "Certificate pinning associates a host with its expected certificate or public key, preventing attackers from using fraudulent certificates issued by compromised or rogue Certificate Authorities.",
        es: "El anclaje de certificados asocia un host con su certificado o clave pública esperada, evitando que los atacantes usen certificados fraudulentos emitidos por Autoridades de Certificación comprometidas o falsas.",
        de: "Certificate Pinning verbindet einen Host mit seinem erwarteten Zertifikat oder öffentlichen Schlüssel und verhindert, dass Angreifer betrügerische Zertifikate kompromittierter oder gefälschter Certificate Authorities verwenden.",
        nl: "Certificate pinning associeert een host met zijn verwachte certificaat of publieke sleutel, waardoor aanvallers worden tegengehouden frauduleuze certificaten te gebruiken die uitgegeven zijn door gecompromitteerde of valse Certificate Authorities."
      }
    },
    {
      question: {
        en: "Which attack is RSA particularly vulnerable to when small public exponents are used?",
        es: "¿A qué ataque es particularmente vulnerable RSA cuando se usan exponentes públicos pequeños?",
        de: "Für welchen Angriff ist RSA besonders anfällig, wenn kleine öffentliche Exponenten verwendet werden?",
        nl: "Voor welke aanval is RSA bijzonder kwetsbaar wanneer kleine publieke exponenten worden gebruikt?"
      },
      options: [
        {
          en: "Coppersmith's attack",
          es: "Ataque de Coppersmith",
          de: "Coppersmith-Angriff",
          nl: "Coppersmith-aanval"
        },
        {
          en: "Bleichenbacher's attack",
          es: "Ataque de Bleichenbacher",
          de: "Bleichenbacher-Angriff",
          nl: "Bleichenbacher-aanval"
        },
        {
          en: "Wiener's attack",
          es: "Ataque de Wiener",
          de: "Wiener-Angriff",
          nl: "Wiener-aanval"
        },
        {
          en: "Low public exponent attack",
          es: "Ataque de exponente público bajo",
          de: "Angriff mit niedrigem öffentlichen Exponenten",
          nl: "Lage publieke exponent aanval"
        }
      ],
      correct: 3,
      explanation: {
        en: "The low public exponent attack exploits small values like e=3, where if the same message is encrypted for multiple recipients, the plaintext can be recovered using the Chinese Remainder Theorem.",
        es: "El ataque de exponente público bajo explota valores pequeños como e=3, donde si el mismo mensaje se cifra para múltiples destinatarios, el texto plano puede recuperarse usando el Teorema del Resto Chino.",
        de: "Der Angriff mit niedrigem öffentlichen Exponenten nutzt kleine Werte wie e=3 aus, wo, wenn dieselbe Nachricht für mehrere Empfänger verschlüsselt wird, der Klartext mit dem Chinesischen Restsatz wiederhergestellt werden kann.",
        nl: "De lage publieke exponent aanval benut kleine waarden zoals e=3, waar als hetzelfde bericht voor meerdere ontvangers wordt versleuteld, de platte tekst kan worden hersteld met behulp van de Chinese Reststelling."
      }
    },
    {
      question: {
        en: "What is the main purpose of PKCS#1 standard?",
        es: "¿Cuál es el propósito principal del estándar PKCS#1?",
        de: "Was ist der Hauptzweck des PKCS#1-Standards?",
        nl: "Wat is het hoofddoel van de PKCS#1 standaard?"
      },
      options: [
        {
          en: "To define elliptic curve operations",
          es: "Definir operaciones de curvas elípticas",
          de: "Elliptische Kurvenoperationen zu definieren",
          nl: "Elliptische curve operaties definiëren"
        },
        {
          en: "To specify RSA encryption and signature schemes",
          es: "Especificar esquemas de cifrado y firma RSA",
          de: "RSA-Verschlüsselungs- und Signaturverfahren zu spezifizieren",
          nl: "RSA-versleutelings- en handtekeningschema's specificeren"
        },
        {
          en: "To define hash function standards",
          es: "Definir estándares de funciones hash",
          de: "Hash-Funktionsstandards zu definieren",
          nl: "Hash-functie standaarden definiëren"
        },
        {
          en: "To establish certificate formats",
          es: "Establecer formatos de certificados",
          de: "Zertifikatformate zu etablieren",
          nl: "Certificaatformaten vaststellen"
        }
      ],
      correct: 1,
      explanation: {
        en: "PKCS#1 (Public-Key Cryptography Standards #1) defines the mathematical definitions and properties of RSA public and private key functions, including encryption, decryption, and signature schemes.",
        es: "PKCS#1 (Estándares de Criptografía de Clave Pública #1) define las definiciones matemáticas y propiedades de las funciones de clave pública y privada RSA, incluyendo esquemas de cifrado, descifrado y firma.",
        de: "PKCS#1 (Public-Key Cryptography Standards #1) definiert die mathematischen Definitionen und Eigenschaften von RSA öffentlichen und privaten Schlüsselfunktionen, einschließlich Verschlüsselungs-, Entschlüsselungs- und Signaturverfahren.",
        nl: "PKCS#1 (Public-Key Cryptography Standards #1) definieert de wiskundige definities en eigenschappen van RSA publieke en private sleutelfuncties, inclusief versleutelings-, ontsleutelings- en handtekeningschema's."
      }
    },
    {
      question: {
        en: "What is the relationship between discrete logarithm and Diffie-Hellman security?",
        es: "¿Cuál es la relación entre el logaritmo discreto y la seguridad de Diffie-Hellman?",
        de: "Was ist die Beziehung zwischen diskretem Logarithmus und Diffie-Hellman-Sicherheit?",
        nl: "Wat is de relatie tussen discreet logaritme en Diffie-Hellman beveiliging?"
      },
      options: [
        {
          en: "They are unrelated problems",
          es: "Son problemas no relacionados",
          de: "Sie sind unabhängige Probleme",
          nl: "Het zijn niet-gerelateerde problemen"
        },
        {
          en: "Discrete logarithm is easier than Diffie-Hellman",
          es: "El logaritmo discreto es más fácil que Diffie-Hellman",
          de: "Diskreter Logarithmus ist einfacher als Diffie-Hellman",
          nl: "Discreet logaritme is gemakkelijker dan Diffie-Hellman"
        },
        {
          en: "Diffie-Hellman security relies on the difficulty of the discrete logarithm problem",
          es: "La seguridad de Diffie-Hellman se basa en la dificultad del problema del logaritmo discreto",
          de: "Diffie-Hellman-Sicherheit beruht auf der Schwierigkeit des diskreten Logarithmus-Problems",
          nl: "Diffie-Hellman beveiliging is gebaseerd op de moeilijkheid van het discreet logaritme probleem"
        },
        {
          en: "Discrete logarithm requires Diffie-Hellman to solve",
          es: "El logaritmo discreto requiere Diffie-Hellman para resolver",
          de: "Diskreter Logarithmus erfordert Diffie-Hellman zum Lösen",
          nl: "Discreet logaritme vereist Diffie-Hellman om op te lossen"
        }
      ],
      correct: 2,
      explanation: {
        en: "The security of Diffie-Hellman key exchange is based on the computational difficulty of solving the discrete logarithm problem in finite groups.",
        es: "La seguridad del intercambio de claves Diffie-Hellman se basa en la dificultad computacional de resolver el problema del logaritmo discreto en grupos finitos.",
        de: "Die Sicherheit des Diffie-Hellman-Schlüsselaustauschs basiert auf der rechnerischen Schwierigkeit, das diskrete Logarithmus-Problem in endlichen Gruppen zu lösen.",
        nl: "De beveiliging van Diffie-Hellman sleuteluitwisseling is gebaseerd op de rekenkundige moeilijkheid van het oplossen van het discreet logaritme probleem in eindige groepen."
      }
    },
    {
      question: {
        en: "What does OCSP (Online Certificate Status Protocol) provide?",
        es: "¿Qué proporciona OCSP (Protocolo de Estado de Certificado en Línea)?",
        de: "Was bietet OCSP (Online Certificate Status Protocol)?",
        nl: "Wat biedt OCSP (Online Certificate Status Protocol)?"
      },
      options: [
        {
          en: "Certificate generation services",
          es: "Servicios de generación de certificados",
          de: "Zertifikatsgenerierungsdienste",
          nl: "Certificaatgeneratiediensten"
        },
        {
          en: "Real-time certificate revocation status checking",
          es: "Verificación en tiempo real del estado de revocación de certificados",
          de: "Echtzeit-Überprüfung des Zertifikatswiderrufsstatus",
          nl: "Real-time controle van certificaat intrekkingsstatus"
        },
        {
          en: "Certificate backup and recovery",
          es: "Respaldo y recuperación de certificados",
          de: "Zertifikatsicherung und -wiederherstellung",
          nl: "Certificaat back-up en herstel"
        },
        {
          en: "Certificate compression algorithms",
          es: "Algoritmos de compresión de certificados",
          de: "Zertifikatskompressionsalgorithmen",
          nl: "Certificaat compressie-algoritmes"
        }
      ],
      correct: 1,
      explanation: {
        en: "OCSP provides real-time checking of certificate revocation status, offering an alternative to Certificate Revocation Lists (CRLs) with more timely updates.",
        es: "OCSP proporciona verificación en tiempo real del estado de revocación de certificados, ofreciendo una alternativa a las Listas de Revocación de Certificados (CRL) con actualizaciones más oportunas.",
        de: "OCSP bietet Echtzeit-Überprüfung des Zertifikatswiderrufsstatus und stellt eine Alternative zu Certificate Revocation Lists (CRLs) mit zeitnahen Updates dar.",
        nl: "OCSP biedt real-time controle van certificaat intrekkingsstatus, en biedt een alternatief voor Certificate Revocation Lists (CRLs) met meer tijdige updates."
      }
    },
    {
      question: {
        en: "What is the main security concern with reusing the same nonce in ECDSA?",
        es: "¿Cuál es la principal preocupación de seguridad al reusar el mismo nonce en ECDSA?",
        de: "Was ist das Hauptsicherheitsproblem bei der Wiederverwendung derselben Nonce in ECDSA?",
        nl: "Wat is de hoofdbeveiligingszorg bij het hergebruiken van dezelfde nonce in ECDSA?"
      },
      options: [
        {
          en: "It makes signatures larger",
          es: "Hace que las firmas sean más grandes",
          de: "Es macht Signaturen größer",
          nl: "Het maakt handtekeningen groter"
        },
        {
          en: "It reveals the private key",
          es: "Revela la clave privada",
          de: "Es enthüllt den privaten Schlüssel",
          nl: "Het onthult de private sleutel"
        },
        {
          en: "It makes verification slower",
          es: "Hace la verificación más lenta",
          de: "Es macht die Verifikation langsamer",
          nl: "Het maakt verificatie langzamer"
        },
        {
          en: "It reduces signature randomness",
          es: "Reduce la aleatoriedad de la firma",
          de: "Es reduziert die Signaturzufälligkeit",
          nl: "Het vermindert handtekening willekeurigheid"
        }
      ],
      correct: 1,
      explanation: {
        en: "Reusing the same nonce (k value) in ECDSA signatures allows attackers to recover the private key through mathematical analysis of the signature components.",
        es: "Reusar el mismo nonce (valor k) en firmas ECDSA permite a los atacantes recuperar la clave privada a través del análisis matemático de los componentes de la firma.",
        de: "Die Wiederverwendung derselben Nonce (k-Wert) in ECDSA-Signaturen ermöglicht es Angreifern, den privaten Schlüssel durch mathematische Analyse der Signaturkomponenten zu gewinnen.",
        nl: "Het hergebruiken van dezelfde nonce (k-waarde) in ECDSA-handtekeningen stelt aanvallers in staat de private sleutel te herstellen door wiskundige analyse van de handtekeningcomponenten."
      }
    },
    {
      question: {
        en: "What is the purpose of salt in password hashing with public key derivation?",
        es: "¿Cuál es el propósito de la sal en el hash de contraseñas con derivación de clave pública?",
        de: "Was ist der Zweck von Salt beim Passwort-Hashing mit öffentlicher Schlüsselableitung?",
        nl: "Wat is het doel van zout bij wachtwoord hashing met publieke sleutelafleiding?"
      },
      options: [
        {
          en: "To make passwords taste better",
          es: "Hacer que las contraseñas sepan mejor",
          de: "Passwörter schmackhafter zu machen",
          nl: "Wachtwoorden beter te laten smaken"
        },
        {
          en: "To prevent rainbow table attacks",
          es: "Prevenir ataques de tabla arcoíris",
          de: "Rainbow-Table-Angriffe zu verhindern",
          nl: "Rainbow table aanvallen voorkomen"
        },
        {
          en: "To compress password storage",
          es: "Comprimir el almacenamiento de contraseñas",
          de: "Passwort-Speicherung zu komprimieren",
          nl: "Wachtwoordopslag comprimeren"
        },
        {
          en: "To enable password recovery",
          es: "Habilitar la recuperación de contraseñas",
          de: "Passwort-Wiederherstellung zu ermöglichen",
          nl: "Wachtwoordherstel mogelijk maken"
        }
      ],
      correct: 1,
      explanation: {
        en: "Salt adds unique random data to passwords before hashing, preventing attackers from using precomputed rainbow tables to crack password hashes.",
        es: "La sal añade datos aleatorios únicos a las contraseñas antes del hash, evitando que los atacantes usen tablas arcoíris precomputadas para descifrar hashes de contraseñas.",
        de: "Salt fügt eindeutige zufällige Daten zu Passwörtern vor dem Hashing hinzu und verhindert, dass Angreifer vorberechnete Rainbow-Tables zum Knacken von Passwort-Hashes verwenden.",
        nl: "Zout voegt unieke willekeurige data toe aan wachtwoorden voor hashing, waardoor aanvallers worden verhinderd vooraf berekende rainbow tables te gebruiken om wachtwoord hashes te kraken."
      }
    },
    {
      question: {
        en: "What is key escrow in the context of cryptography?",
        es: "¿Qué es el depósito de claves en el contexto de la criptografía?",
        de: "Was ist Key Escrow im Kontext der Kryptographie?",
        nl: "Wat is key escrow in de context van cryptografie?"
      },
      options: [
        {
          en: "A method to generate stronger keys",
          es: "Un método para generar claves más fuertes",
          de: "Eine Methode zur Generierung stärkerer Schlüssel",
          nl: "Een methode om sterkere sleutels te genereren"
        },
        {
          en: "The practice of storing encryption keys with a third party",
          es: "La práctica de almacenar claves de cifrado con una tercera parte",
          de: "Die Praxis, Verschlüsselungsschlüssel bei einer dritten Partei zu hinterlegen",
          nl: "De praktijk van het opslaan van versleutelingssleutels bij een derde partij"
        },
        {
          en: "A technique to speed up encryption",
          es: "Una técnica para acelerar el cifrado",
          de: "Eine Technik zur Beschleunigung der Verschlüsselung",
          nl: "Een techniek om versleuteling te versnellen"
        },
        {
          en: "A way to share keys between users",
          es: "Una forma de compartir claves entre usuarios",
          de: "Eine Möglichkeit, Schlüssel zwischen Benutzern zu teilen",
          nl: "Een manier om sleutels tussen gebruikers te delen"
        }
      ],
      correct: 1,
      explanation: {
        en: "Key escrow involves storing copies of encryption keys with a trusted third party, allowing authorized access to encrypted data when needed for legal or recovery purposes.",
        es: "El depósito de claves implica almacenar copias de claves de cifrado con una tercera parte confiable, permitiendo acceso autorizado a datos cifrados cuando se necesite para propósitos legales o de recuperación.",
        de: "Key Escrow beinhaltet die Hinterlegung von Kopien der Verschlüsselungsschlüssel bei einer vertrauenswürdigen dritten Partei, um autorisierten Zugang zu verschlüsselten Daten für rechtliche oder Wiederherstellungszwecke zu ermöglichen.",
        nl: "Key escrow houdt in dat kopieën van versleutelingssleutels worden opgeslagen bij een vertrouwde derde partij, waardoor geautoriseerde toegang tot versleutelde data mogelijk wordt wanneer nodig voor juridische of hersteldoeleinden."
      }
    },
    {
      question: {
        en: "Which of the following is a post-quantum cryptographic algorithm?",
        es: "¿Cuál de los siguientes es un algoritmo criptográfico post-cuántico?",
        de: "Welcher der folgenden ist ein post-quantenkryptographischer Algorithmus?",
        nl: "Welke van de volgende is een post-quantum cryptografisch algoritme?"
      },
      options: [
        {
          en: "RSA",
          es: "RSA",
          de: "RSA",
          nl: "RSA"
        },
        {
          en: "ECDSA",
          es: "ECDSA",
          de: "ECDSA",
          nl: "ECDSA"
        },
        {
          en: "Kyber",
          es: "Kyber",
          de: "Kyber",
          nl: "Kyber"
        },
        {
          en: "Diffie-Hellman",
          es: "Diffie-Hellman",
          de: "Diffie-Hellman",
          nl: "Diffie-Hellman"
        }
      ],
      correct: 2,
      explanation: {
        en: "Kyber is a lattice-based key encapsulation mechanism selected by NIST as a standard for post-quantum cryptography, designed to resist attacks from quantum computers.",
        es: "Kyber es un mecanismo de encapsulación de claves basado en retículas seleccionado por NIST como estándar para criptografía post-cuántica, diseñado para resistir ataques de computadoras cuánticas.",
        de: "Kyber ist ein gitterbasierter Schlüsselkapselungsmechanismus, der von NIST als Standard für post-quantenkryptographie ausgewählt wurde und entwickelt wurde, um Angriffen von Quantencomputern zu widerstehen.",
        nl: "Kyber is een rooster-gebaseerd sleutelinkapsulingsmechanisme geselecteerd door NIST als standaard voor post-quantum cryptografie, ontworpen om aanvallen van quantumcomputers te weerstaan."
      }
    },
    {
      question: {
        en: "What is the main advantage of using Ed25519 over traditional ECDSA?",
        es: "¿Cuál es la principal ventaja de usar Ed25519 sobre ECDSA tradicional?",
        de: "Was ist der Hauptvorteil der Verwendung von Ed25519 gegenüber traditioneller ECDSA?",
        nl: "Wat is het hoofdvoordeel van het gebruiken van Ed25519 ten opzichte van traditionele ECDSA?"
      },
      options: [
        {
          en: "Larger key sizes",
          es: "Tamaños de clave más grandes",
          de: "Größere Schlüsselgrößen",
          nl: "Grotere sleutelgroottes"
        },
        {
          en: "Better performance and resistance to side-channel attacks",
          es: "Mejor rendimiento y resistencia a ataques de canal lateral",
          de: "Bessere Leistung und Resistenz gegen Seitenkanalangriffe",
          nl: "Betere prestaties en weerstand tegen zijkanaal aanvallen"
        },
        {
          en: "Compatibility with RSA",
          es: "Compatibilidad con RSA",
          de: "Kompatibilität mit RSA",
          nl: "Compatibiliteit met RSA"
        },
        {
          en: "Lower computational requirements",
          es: "Menores requisitos computacionales",
          de: "Geringere Rechenanforderungen",
          nl: "Lagere rekenkundige vereisten"
        }
      ],
      correct: 1,
      explanation: {
        en: "Ed25519 offers better performance, stronger security guarantees, and is designed to be resistant to various side-channel attacks compared to traditional ECDSA implementations.",
        es: "Ed25519 ofrece mejor rendimiento, garantías de seguridad más fuertes, y está diseñado para ser resistente a varios ataques de canal lateral comparado con implementaciones ECDSA tradicionales.",
        de: "Ed25519 bietet bessere Leistung, stärkere Sicherheitsgarantien und ist darauf ausgelegt, resistent gegen verschiedene Seitenkanalangriffe zu sein, verglichen mit traditionellen ECDSA-Implementierungen.",
        nl: "Ed25519 biedt betere prestaties, sterkere beveiligingsgaranties, en is ontworpen om weerstand te bieden tegen verschillende zijkanaal aanvallen vergeleken met traditionele ECDSA-implementaties."
      }
    },
    {
      question: {
        en: "What is Perfect Forward Secrecy (PFS) in the context of TLS?",
        es: "¿Qué es el Secreto Hacia Adelante Perfecto (PFS) en el contexto de TLS?",
        de: "Was ist Perfect Forward Secrecy (PFS) im Kontext von TLS?",
        nl: "Wat is Perfect Forward Secrecy (PFS) in de context van TLS?"
      },
      options: [
        {
          en: "A method to compress TLS handshakes",
          es: "Un método para comprimir handshakes TLS",
          de: "Eine Methode zur Kompression von TLS-Handshakes",
          nl: "Een methode om TLS-handshakes te comprimeren"
        },
        {
          en: "A property ensuring past session keys remain secure even if long-term keys are compromised",
          es: "Una propiedad que asegura que las claves de sesión pasadas permanezcan seguras incluso si las claves a largo plazo se ven comprometidas",
          de: "Eine Eigenschaft, die sicherstellt, dass vergangene Sitzungsschlüssel sicher bleiben, selbst wenn langfristige Schlüssel kompromittiert werden",
          nl: "Een eigenschap die ervoor zorgt dat eerdere sessiesleutels veilig blijven, zelfs als lange-termijn sleutels gecompromitteerd worden"
        },
        {
          en: "A way to speed up TLS connections",
          es: "Una forma de acelerar conexiones TLS",
          de: "Eine Möglichkeit, TLS-Verbindungen zu beschleunigen",
          nl: "Een manier om TLS-verbindingen te versnellen"
        },
        {
          en: "A protocol for certificate validation",
          es: "Un protocolo para validación de certificados",
          de: "Ein Protokoll für Zertifikatvalidierung",
          nl: "Een protocol voor certificaatvalidatie"
        }
      ],
      correct: 1,
      explanation: {
        en: "Perfect Forward Secrecy ensures that even if an attacker later compromises the server's long-term private key, they cannot decrypt previously recorded TLS sessions that used ephemeral keys.",
        es: "El Secreto Hacia Adelante Perfecto asegura que incluso si un atacante posteriormente compromete la clave privada a largo plazo del servidor, no puede descifrar sesiones TLS previamente grabadas que usaron claves efímeras.",
        de: "Perfect Forward Secrecy stellt sicher, dass selbst wenn ein Angreifer später den langfristigen privaten Schlüssel des Servers kompromittiert, er zuvor aufgezeichnete TLS-Sitzungen, die ephemere Schlüssel verwendeten, nicht entschlüsseln kann.",
        nl: "Perfect Forward Secrecy zorgt ervoor dat zelfs als een aanvaller later de lange-termijn private sleutel van de server compromitteert, zij eerder opgenomen TLS-sessies die kortstondige sleutels gebruikten niet kunnen ontsleutelen."
      }
    },
    {
      question: {
        en: "What is the security strength of a 2048-bit RSA key approximately equivalent to in symmetric encryption?",
        es: "¿A qué es aproximadamente equivalente la fuerza de seguridad de una clave RSA de 2048 bits en cifrado simétrico?",
        de: "Welcher Sicherheitsstärke in symmetrischer Verschlüsselung entspricht ein 2048-Bit-RSA-Schlüssel ungefähr?",
        nl: "Aan welke beveiligingssterkte in symmetrische versleuteling is een 2048-bit RSA-sleutel ongeveer gelijkwaardig?"
      },
      options: [
        {
          en: "80 bits",
          es: "80 bits",
          de: "80 Bits",
          nl: "80 bits"
        },
        {
          en: "112 bits",
          es: "112 bits",
          de: "112 Bits",
          nl: "112 bits"
        },
        {
          en: "128 bits",
          es: "128 bits",
          de: "128 Bits",
          nl: "128 bits"
        },
        {
          en: "256 bits",
          es: "256 bits",
          de: "256 Bits",
          nl: "256 bits"
        }
      ],
      correct: 1,
      explanation: {
        en: "A 2048-bit RSA key provides approximately 112 bits of security strength, which is equivalent to a 112-bit symmetric key in terms of computational effort required to break it.",
        es: "Una clave RSA de 2048 bits proporciona aproximadamente 112 bits de fuerza de seguridad, que es equivalente a una clave simétrica de 112 bits en términos del esfuerzo computacional requerido para romperla.",
        de: "Ein 2048-Bit-RSA-Schlüssel bietet ungefähr 112 Bits Sicherheitsstärke, was einem 112-Bit-symmetrischen Schlüssel in Bezug auf den erforderlichen rechnerischen Aufwand zum Brechen entspricht.",
        nl: "Een 2048-bit RSA-sleutel biedt ongeveer 112 bits beveiligingssterkte, wat gelijkwaardig is aan een 112-bit symmetrische sleutel in termen van rekenkundige inspanning die nodig is om het te breken."
      }
    },
    {
      question: {
        en: "What is the primary purpose of HSMs (Hardware Security Modules) in PKI?",
        es: "¿Cuál es el propósito principal de los HSM (Módulos de Seguridad de Hardware) en PKI?",
        de: "Was ist der Hauptzweck von HSMs (Hardware Security Modules) in PKI?",
        nl: "Wat is het primaire doel van HSMs (Hardware Security Modules) in PKI?"
      },
      options: [
        {
          en: "To speed up cryptographic operations",
          es: "Acelerar operaciones criptográficas",
          de: "Kryptographische Operationen zu beschleunigen",
          nl: "Cryptografische operaties versnellen"
        },
        {
          en: "To provide secure key storage and generation",
          es: "Proporcionar almacenamiento y generación segura de claves",
          de: "Sichere Schlüsselspeicherung und -generierung bereitzustellen",
          nl: "Veilige sleutelopslag en -generatie bieden"
        },
        {
          en: "To compress certificate data",
          es: "Comprimir datos de certificados",
          de: "Zertifikatsdaten zu komprimieren",
          nl: "Certificaatgegevens comprimeren"
        },
        {
          en: "To manage network connections",
          es: "Gestionar conexiones de red",
          de: "Netzwerkverbindungen zu verwalten",
          nl: "Netwerkverbindingen beheren"
        }
      ],
      correct: 1,
      explanation: {
        en: "HSMs provide tamper-resistant hardware for secure storage and generation of cryptographic keys, offering higher security than software-only solutions for critical PKI operations.",
        es: "Los HSM proporcionan hardware resistente a manipulaciones para almacenamiento y generación segura de claves criptográficas, ofreciendo mayor seguridad que las soluciones solo de software para operaciones PKI críticas.",
        de: "HSMs bieten manipulationssichere Hardware für sichere Speicherung und Generierung kryptographischer Schlüssel und bieten höhere Sicherheit als reine Software-Lösungen für kritische PKI-Operationen.",
        nl: "HSMs bieden sabotagebestendige hardware voor veilige opslag en generatie van cryptografische sleutels, wat hogere beveiliging biedt dan alleen software-oplossingen voor kritische PKI-operaties."
      }
    },
    {
      question: {
        en: "What is the main security benefit of using ephemeral keys in key exchange protocols?",
        es: "¿Cuál es el principal beneficio de seguridad de usar claves efímeras en protocolos de intercambio de claves?",
        de: "Was ist der Hauptsicherheitsvorteil der Verwendung ephemerer Schlüssel in Schlüsselaustauschprotokollen?",
        nl: "Wat is het hoofdbeveiligingsvoordeel van het gebruiken van kortstondige sleutels in sleuteluitwisselingsprotocollen?"
      },
      options: [
        {
          en: "They are easier to generate",
          es: "Son más fáciles de generar",
          de: "Sie sind einfacher zu generieren",
          nl: "Ze zijn gemakkelijker te genereren"
        },
        {
          en: "They provide forward secrecy",
          es: "Proporcionan secreto hacia adelante",
          de: "Sie bieten Forward Secrecy",
          nl: "Ze bieden forward secrecy"
        },
        {
          en: "They use less memory",
          es: "Usan menos memoria",
          de: "Sie verwenden weniger Speicher",
          nl: "Ze gebruiken minder geheugen"
        },
        {
          en: "They are compatible with older systems",
          es: "Son compatibles con sistemas más antiguos",
          de: "Sie sind kompatibel mit älteren Systemen",
          nl: "Ze zijn compatibel met oudere systemen"
        }
      ],
      correct: 1,
      explanation: {
        en: "Ephemeral keys are temporary keys generated for each session and discarded afterward, providing forward secrecy by ensuring that compromise of long-term keys doesn't affect past communications.",
        es: "Las claves efímeras son claves temporales generadas para cada sesión y descartadas después, proporcionando secreto hacia adelante al asegurar que el compromiso de claves a largo plazo no afecte comunicaciones pasadas.",
        de: "Ephemere Schlüssel sind temporäre Schlüssel, die für jede Sitzung generiert und danach verworfen werden, und bieten Forward Secrecy, indem sie sicherstellen, dass eine Kompromittierung langfristiger Schlüssel vergangene Kommunikation nicht beeinflusst.",
        nl: "Kortstondige sleutels zijn tijdelijke sleutels die voor elke sessie worden gegenereerd en daarna weggegooid, wat forward secrecy biedt door ervoor te zorgen dat compromittering van lange-termijn sleutels eerdere communicaties niet beïnvloedt."
      }
    },
    {
      question: {
        en: "What is the Pohlig-Hellman attack used against?",
        es: "¿Contra qué se usa el ataque Pohlig-Hellman?",
        de: "Wogegen wird der Pohlig-Hellman-Angriff eingesetzt?",
        nl: "Waartegen wordt de Pohlig-Hellman aanval gebruikt?"
      },
      options: [
        {
          en: "RSA encryption",
          es: "Cifrado RSA",
          de: "RSA-Verschlüsselung",
          nl: "RSA-versleuteling"
        },
        {
          en: "Discrete logarithm problems with smooth order groups",
          es: "Problemas de logaritmo discreto con grupos de orden suave",
          de: "Diskrete Logarithmus-Probleme mit Gruppen glatter Ordnung",
          nl: "Discreet logaritme problemen met gladde orde groepen"
        },
        {
          en: "Elliptic curve point multiplication",
          es: "Multiplicación de puntos de curvas elípticas",
          de: "Elliptische Kurven-Punktmultiplikation",
          nl: "Elliptische curve punt vermenigvuldiging"
        },
        {
          en: "Hash function collisions",
          es: "Colisiones de funciones hash",
          de: "Hash-Funktions-Kollisionen",
          nl: "Hash-functie botsingen"
        }
      ],
      correct: 1,
      explanation: {
        en: "The Pohlig-Hellman attack is used against discrete logarithm problems in groups where the group order has many small prime factors, making the problem easier to solve.",
        es: "El ataque Pohlig-Hellman se usa contra problemas de logaritmo discreto en grupos donde el orden del grupo tiene muchos factores primos pequeños, haciendo el problema más fácil de resolver.",
        de: "Der Pohlig-Hellman-Angriff wird gegen diskrete Logarithmus-Probleme in Gruppen eingesetzt, bei denen die Gruppenordnung viele kleine Primfaktoren hat, wodurch das Problem leichter zu lösen ist.",
        nl: "De Pohlig-Hellman aanval wordt gebruikt tegen discreet logaritme problemen in groepen waar de groepsorde veel kleine priemfactoren heeft, waardoor het probleem gemakkelijker op te lossen is."
      }
    },
    {
      question: {
        en: "What is the main purpose of certificate transparency logs?",
        es: "¿Cuál es el propósito principal de los registros de transparencia de certificados?",
        de: "Was ist der Hauptzweck von Certificate Transparency Logs?",
        nl: "Wat is het hoofddoel van certificate transparency logs?"
      },
      options: [
        {
          en: "To store private keys securely",
          es: "Almacenar claves privadas de forma segura",
          de: "Private Schlüssel sicher zu speichern",
          nl: "Private sleutels veilig opslaan"
        },
        {
          en: "To publicly log certificate issuance for detection of misissued certificates",
          es: "Registrar públicamente la emisión de certificados para detección de certificados mal emitidos",
          de: "Zertifikatsausstellung öffentlich zu protokollieren zur Erkennung falsch ausgestellter Zertifikate",
          nl: "Certificaatuitgifte publiek loggen voor detectie van verkeerd uitgegeven certificaten"
        },
        {
          en: "To speed up certificate validation",
          es: "Acelerar la validación de certificados",
          de: "Zertifikatvalidierung zu beschleunigen",
          nl: "Certificaatvalidatie versnellen"
        },
        {
          en: "To compress certificate data",
          es: "Comprimir datos de certificados",
          de: "Zertifikatsdaten zu komprimieren",
          nl: "Certificaatgegevens comprimeren"
        }
      ],
      correct: 1,
      explanation: {
        en: "Certificate transparency logs create public, tamper-proof records of all certificates issued by Certificate Authorities, allowing domain owners to monitor and detect unauthorized certificates.",
        es: "Los registros de transparencia de certificados crean registros públicos y a prueba de manipulaciones de todos los certificados emitidos por Autoridades de Certificación, permitiendo a los propietarios de dominios monitorear y detectar certificados no autorizados.",
        de: "Certificate Transparency Logs erstellen öffentliche, manipulationssichere Aufzeichnungen aller von Certificate Authorities ausgestellten Zertifikate, wodurch Domain-Besitzer unbefugte Zertifikate überwachen und erkennen können.",
        nl: "Certificate transparency logs creëren publieke, sabotagebestendige records van alle certificaten uitgegeven door Certificate Authorities, waardoor domeineigenaren ongeautoriseerde certificaten kunnen monitoren en detecteren."
      }
    },
    {
      question: {
        en: "What is the main advantage of elliptic curve cryptography over RSA?",
        es: "¿Cuál es la ventaja principal de la criptografía de curva elíptica sobre RSA?",
        de: "Was ist der Hauptvorteil der elliptischen Kurvenkryptografie gegenüber RSA?",
        nl: "Wat is het hoofdvoordeel van elliptische curve cryptografie boven RSA?"
      },
      options: [
        {
          en: "Faster key generation",
          es: "Generación de claves más rápida",
          de: "Schnellere Schlüsselgenerierung",
          nl: "Snellere sleutelgeneratie"
        },
        {
          en: "Smaller key sizes for equivalent security",
          es: "Tamaños de clave más pequeños para seguridad equivalente",
          de: "Kleinere Schlüsselgrößen für äquivalente Sicherheit",
          nl: "Kleinere sleutelgroottes voor equivalente beveiliging"
        },
        {
          en: "Better resistance to quantum attacks",
          es: "Mejor resistencia a ataques cuánticos",
          de: "Bessere Resistenz gegen Quantenangriffe",
          nl: "Betere weerstand tegen quantum aanvallen"
        },
        {
          en: "Simpler mathematical operations",
          es: "Operaciones matemáticas más simples",
          de: "Einfachere mathematische Operationen",
          nl: "Eenvoudigere wiskundige operaties"
        }
      ],
      correct: 1,
      explanation: {
        en: "ECC provides equivalent security to RSA with much smaller key sizes (160-bit ECC ≈ 1024-bit RSA), resulting in faster operations, less memory usage, and reduced bandwidth requirements.",
        es: "ECC proporciona seguridad equivalente a RSA con tamaños de clave mucho más pequeños (ECC de 160-bit ≈ RSA de 1024-bit), resultando en operaciones más rápidas, menor uso de memoria y menores requisitos de ancho de banda.",
        de: "ECC bietet äquivalente Sicherheit zu RSA mit viel kleineren Schlüsselgrößen (160-Bit ECC ≈ 1024-Bit RSA), was zu schnelleren Operationen, geringerem Speicherverbrauch und reduzierten Bandbreitenanforderungen führt.",
        nl: "ECC biedt equivalente beveiliging aan RSA met veel kleinere sleutelgroottes (160-bit ECC ≈ 1024-bit RSA), resulterend in snellere operaties, minder geheugengebruik en verminderde bandbreedtevereisten."
      }
    },
    {
      question: {
        en: "What is a side-channel attack in cryptography?",
        es: "¿Qué es un ataque de canal lateral en criptografía?",
        de: "Was ist ein Seitenkanalangriff in der Kryptografie?",
        nl: "Wat is een zijkanaal-aanval in cryptografie?"
      },
      options: [
        {
          en: "An attack that exploits physical information leakage",
          es: "Un ataque que explota la fuga de información física",
          de: "Ein Angriff, der physische Informationsleckagen ausnutzt",
          nl: "Een aanval die fysieke informatielekken uitbuit"
        },
        {
          en: "An attack through network channels",
          es: "Un ataque a través de canales de red",
          de: "Ein Angriff über Netzwerkkanäle",
          nl: "Een aanval via netwerkkanalen"
        },
        {
          en: "An attack on cryptographic algorithms",
          es: "Un ataque a algoritmos criptográficos",
          de: "Ein Angriff auf kryptografische Algorithmen",
          nl: "Een aanval op cryptografische algoritmen"
        },
        {
          en: "An attack using multiple computers",
          es: "Un ataque usando múltiples computadoras",
          de: "Ein Angriff mit mehreren Computern",
          nl: "Een aanval met meerdere computers"
        }
      ],
      correct: 0,
      explanation: {
        en: "Side-channel attacks exploit physical information leaked during cryptographic operations, such as timing variations, power consumption, electromagnetic emissions, or acoustic information, rather than breaking the mathematical algorithm itself.",
        es: "Los ataques de canal lateral explotan información física filtrada durante operaciones criptográficas, como variaciones de tiempo, consumo de energía, emisiones electromagnéticas o información acústica, en lugar de romper el algoritmo matemático mismo.",
        de: "Seitenkanal-angriffe nutzen physische Informationen aus, die während kryptografischen Operationen geleakt werden, wie Timing-Variationen, Stromverbrauch, elektromagnetische Emissionen oder akustische Informationen, anstatt den mathematischen Algorithmus selbst zu brechen.",
        nl: "Zijkanaal-aanvallen benutten fysieke informatie die lekt tijdens cryptografische operaties, zoals timing variaties, stroomverbruik, elektromagnetische emissies of akoestische informatie, in plaats van het wiskundige algoritme zelf te breken."
      }
    },
    {
      question: {
        en: "What is perfect forward secrecy in key exchange protocols?",
        es: "¿Qué es el secreto perfecto hacia adelante en protocolos de intercambio de claves?",
        de: "Was ist Perfect Forward Secrecy bei Schlüsselaustauschprotokollen?",
        nl: "Wat is perfect forward secrecy in sleuteluitwisselingsprotocollen?"
      },
      options: [
        {
          en: "Keys are never compromised",
          es: "Las claves nunca se comprometen",
          de: "Schlüssel werden niemals kompromittiert",
          nl: "Sleutels worden nooit gecompromitteerd"
        },
        {
          en: "Past session keys remain secure even if long-term keys are compromised",
          es: "Las claves de sesión pasadas permanecen seguras incluso si las claves a largo plazo se comprometen",
          de: "Vergangene Sitzungsschlüssel bleiben sicher, auch wenn langfristige Schlüssel kompromittiert werden",
          nl: "Eerdere sessiesleutels blijven veilig zelfs als langetermijn sleutels gecompromitteerd worden"
        },
        {
          en: "Keys are generated perfectly randomly",
          es: "Las claves se generan perfectamente al azar",
          de: "Schlüssel werden perfekt zufällig generiert",
          nl: "Sleutels worden perfect willekeurig gegenereerd"
        },
        {
          en: "Future keys cannot be predicted",
          es: "Las claves futuras no pueden predecirse",
          de: "Zukünftige Schlüssel können nicht vorhergesagt werden",
          nl: "Toekomstige sleutels kunnen niet voorspeld worden"
        }
      ],
      correct: 1,
      explanation: {
        en: "Perfect forward secrecy ensures that compromise of long-term private keys does not compromise past session keys, because session keys are derived from ephemeral key exchanges that are not stored.",
        es: "El secreto perfecto hacia adelante asegura que el compromiso de claves privadas a largo plazo no compromete claves de sesión pasadas, porque las claves de sesión se derivan de intercambios de claves efímeras que no se almacenan.",
        de: "Perfect Forward Secrecy stellt sicher, dass die Kompromittierung langfristiger privater Schlüssel vergangene Sitzungsschlüssel nicht kompromittiert, da Sitzungsschlüssel aus ephemeren Schlüsselaustauschen abgeleitet werden, die nicht gespeichert werden.",
        nl: "Perfect forward secrecy zorgt ervoor dat compromittering van langetermijn private sleutels geen eerdere sessiesleutels compromitteert, omdat sessiesleutels worden afgeleid van tijdelijke sleuteluitwisselingen die niet opgeslagen worden."
      }
    },
    {
      question: {
        en: "What is the main purpose of OAEP (Optimal Asymmetric Encryption Padding) in RSA?",
        es: "¿Cuál es el propósito principal de OAEP (Relleno de Cifrado Asimétrico Óptimo) en RSA?",
        de: "Was ist der Hauptzweck von OAEP (Optimal Asymmetric Encryption Padding) in RSA?",
        nl: "Wat is het hoofddoel van OAEP (Optimal Asymmetric Encryption Padding) in RSA?"
      },
      options: [
        {
          en: "To increase encryption speed",
          es: "Aumentar la velocidad de cifrado",
          de: "Die Verschlüsselungsgeschwindigkeit zu erhöhen",
          nl: "Versleutelingssnelheid verhogen"
        },
        {
          en: "To provide semantic security against chosen plaintext attacks",
          es: "Proporcionar seguridad semántica contra ataques de texto plano elegido",
          de: "Semantische Sicherheit gegen gewählte Klartext-Angriffe zu bieten",
          nl: "Semantische beveiliging bieden tegen gekozen platte tekst aanvallen"
        },
        {
          en: "To reduce key size requirements",
          es: "Reducir los requisitos de tamaño de clave",
          de: "Schlüsselgrößenanforderungen zu reduzieren",
          nl: "Sleutelgroottevereisten verminderen"
        },
        {
          en: "To enable batch encryption",
          es: "Habilitar cifrado por lotes",
          de: "Batch-Verschlüsselung zu ermöglichen",
          nl: "Batch-versleuteling mogelijk maken"
        }
      ],
      correct: 1,
      explanation: {
        en: "OAEP (Optimal Asymmetric Encryption Padding) adds randomness to RSA encryption, making it semantically secure and protecting against chosen plaintext attacks by ensuring identical plaintexts produce different ciphertexts.",
        es: "OAEP (Relleno de Cifrado Asimétrico Óptimo) añade aleatoriedad al cifrado RSA, haciéndolo semánticamente seguro y protegiendo contra ataques de texto plano elegido asegurando que textos planos idénticos produzcan textos cifrados diferentes.",
        de: "OAEP (Optimal Asymmetric Encryption Padding) fügt RSA-Verschlüsselung Zufälligkeit hinzu, macht sie semantisch sicher und schützt vor gewählten Klartext-Angriffen, indem sichergestellt wird, dass identische Klartexte verschiedene Chiffretexte produzieren.",
        nl: "OAEP (Optimal Asymmetric Encryption Padding) voegt willekeurigheid toe aan RSA-versleuteling, maakt het semantisch veilig en beschermt tegen gekozen platte tekst aanvallen door ervoor te zorgen dat identieke platte teksten verschillende cijferteksten produceren."
      }
    },
    {
      question: {
        en: "What is a hash collision and why is it problematic for digital signatures?",
        es: "¿Qué es una colisión hash y por qué es problemática para las firmas digitales?",
        de: "Was ist eine Hash-Kollision und warum ist sie für digitale Signaturen problematisch?",
        nl: "Wat is een hash-botsing en waarom is het problematisch voor digitale handtekeningen?"
      },
      options: [
        {
          en: "Two different inputs producing the same hash output, allowing signature forgery",
          es: "Dos entradas diferentes que producen la misma salida hash, permitiendo falsificación de firmas",
          de: "Zwei verschiedene Eingaben, die dieselbe Hash-Ausgabe erzeugen, wodurch Signaturfälschung ermöglicht wird",
          nl: "Twee verschillende invoeren die dezelfde hash-uitvoer produceren, waardoor handtekeningvervalsing mogelijk wordt"
        },
        {
          en: "A hash function failing to produce output",
          es: "Una función hash que falla al producir salida",
          de: "Eine Hash-Funktion, die keine Ausgabe produziert",
          nl: "Een hash-functie die faalt om uitvoer te produceren"
        },
        {
          en: "Hash values being too long",
          es: "Valores hash siendo demasiado largos",
          de: "Hash-Werte, die zu lang sind",
          nl: "Hash-waarden die te lang zijn"
        },
        {
          en: "Hash functions being too slow",
          es: "Funciones hash siendo demasiado lentas",
          de: "Hash-Funktionen, die zu langsam sind",
          nl: "Hash-functies die te langzaam zijn"
        }
      ],
      correct: 0,
      explanation: {
        en: "A hash collision occurs when two different inputs produce the same hash output. This is problematic for digital signatures because if an attacker can find two different messages with the same hash, they can transfer a valid signature from one message to another.",
        es: "Una colisión hash ocurre cuando dos entradas diferentes producen la misma salida hash. Esto es problemático para firmas digitales porque si un atacante puede encontrar dos mensajes diferentes con el mismo hash, pueden transferir una firma válida de un mensaje a otro.",
        de: "Eine Hash-Kollision tritt auf, wenn zwei verschiedene Eingaben dieselbe Hash-Ausgabe erzeugen. Dies ist für digitale Signaturen problematisch, weil wenn ein Angreifer zwei verschiedene Nachrichten mit demselben Hash finden kann, kann er eine gültige Signatur von einer Nachricht auf eine andere übertragen.",
        nl: "Een hash-botsing treedt op wanneer twee verschillende invoeren dezelfde hash-uitvoer produceren. Dit is problematisch voor digitale handtekeningen omdat als een aanvaller twee verschillende berichten kan vinden met dezelfde hash, ze een geldige handtekening van het ene bericht naar het andere kunnen overbrengen."
      }
    },
    {
      question: {
        en: "What is the Pohlig-Hellman attack used against?",
        es: "¿Contra qué se usa el ataque Pohlig-Hellman?",
        de: "Wogegen wird der Pohlig-Hellman-Angriff eingesetzt?",
        nl: "Waartegen wordt de Pohlig-Hellman aanval gebruikt?"
      },
      options: [
        {
          en: "RSA encryption with small primes",
          es: "Cifrado RSA con primos pequeños",
          de: "RSA-Verschlüsselung mit kleinen Primzahlen",
          nl: "RSA-versleuteling met kleine priemgetallen"
        },
        {
          en: "Discrete logarithm problems with smooth order",
          es: "Problemas de logaritmo discreto con orden suave",
          de: "Diskrete Logarithmus-Probleme mit glatter Ordnung",
          nl: "Discreet logaritme problemen met gladde orde"
        },
        {
          en: "Elliptic curve point multiplication",
          es: "Multiplicación de puntos de curva elíptica",
          de: "Elliptische Kurven-Punktmultiplikation",
          nl: "Elliptische curve puntmultiplicatie"
        },
        {
          en: "Hash function preimage resistance",
          es: "Resistencia de preimagen de función hash",
          de: "Hash-Funktions-Preimage-Resistenz",
          nl: "Hash-functie preimage weerstand"
        }
      ],
      correct: 1,
      explanation: {
        en: "The Pohlig-Hellman attack efficiently solves the discrete logarithm problem when the order of the group has only small prime factors (is B-smooth), by reducing the problem to smaller subgroups.",
        es: "El ataque Pohlig-Hellman resuelve eficientemente el problema del logaritmo discreto cuando el orden del grupo tiene solo factores primos pequeños (es B-suave), reduciendo el problema a subgrupos más pequeños.",
        de: "Der Pohlig-Hellman-Angriff löst effizient das diskrete Logarithmus-Problem, wenn die Ordnung der Gruppe nur kleine Primfaktoren hat (B-glatt ist), indem das Problem auf kleinere Untergruppen reduziert wird.",
        nl: "De Pohlig-Hellman aanval lost efficiënt het discreet logaritme probleem op wanneer de orde van de groep alleen kleine priemfactoren heeft (B-glad is), door het probleem te reduceren tot kleinere subgroepen."
      }
    },
    {
      question: {
        en: "What is the primary security assumption behind the ElGamal cryptosystem?",
        es: "¿Cuál es la suposición de seguridad primaria detrás del criptosistema ElGamal?",
        de: "Was ist die primäre Sicherheitsannahme hinter dem ElGamal-Kryptosystem?",
        nl: "Wat is de primaire beveiligingsaanname achter het ElGamal cryptosysteem?"
      },
      options: [
        {
          en: "The difficulty of integer factorization",
          es: "La dificultad de la factorización de enteros",
          de: "Die Schwierigkeit der Ganzzahl-Faktorisierung",
          nl: "De moeilijkheid van gehele getallen factorization"
        },
        {
          en: "The difficulty of the discrete logarithm problem",
          es: "La dificultad del problema del logaritmo discreto",
          de: "Die Schwierigkeit des diskreten Logarithmus-Problems",
          nl: "De moeilijkheid van het discreet logaritme probleem"
        },
        {
          en: "The difficulty of elliptic curve operations",
          es: "La dificultad de las operaciones de curva elíptica",
          de: "Die Schwierigkeit elliptischer Kurvenoperationen",
          nl: "De moeilijkheid van elliptische curve operaties"
        },
        {
          en: "The difficulty of polynomial factorization",
          es: "La dificultad de la factorización polinomial",
          de: "Die Schwierigkeit der Polynomfaktorisierung",
          nl: "De moeilijkheid van polynoom factorization"
        }
      ],
      correct: 1,
      explanation: {
        en: "ElGamal encryption and signature schemes rely on the difficulty of solving the discrete logarithm problem in cyclic groups, making it computationally infeasible to recover the private key from the public key.",
        es: "Los esquemas de cifrado y firma ElGamal se basan en la dificultad de resolver el problema del logaritmo discreto en grupos cíclicos, haciendo computacionalmente inviable recuperar la clave privada de la clave pública.",
        de: "ElGamal-Verschlüsselungs- und Signaturverfahren beruhen auf der Schwierigkeit, das diskrete Logarithmus-Problem in zyklischen Gruppen zu lösen, wodurch es rechnerisch unmöglich wird, den privaten Schlüssel aus dem öffentlichen Schlüssel zu gewinnen.",
        nl: "ElGamal versleutelings- en handtekeningschema's vertrouwen op de moeilijkheid van het oplossen van het discreet logaritme probleem in cyclische groepen, waardoor het computationeel onhaalbaar wordt om de private sleutel te herstellen uit de publieke sleutel."
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
          en: "A time-memory tradeoff attack for cracking hashes",
          es: "Un ataque de intercambio tiempo-memoria para romper hashes",
          de: "Ein Zeit-Speicher-Kompromiss-Angriff zum Knacken von Hashes",
          nl: "Een tijd-geheugen afweging aanval voor het kraken van hashes"
        },
        {
          en: "An attack using multiple colored encryption keys",
          es: "Un ataque usando múltiples claves de cifrado coloreadas",
          de: "Ein Angriff mit mehreren farbigen Verschlüsselungsschlüsseln",
          nl: "Een aanval met meerdere gekleurde versleutelingssleutels"
        },
        {
          en: "A visual cryptographic attack method",
          es: "Un método de ataque criptográfico visual",
          de: "Eine visuelle kryptografische Angriffsmethode",
          nl: "Een visuele cryptografische aanvalsmethode"
        },
        {
          en: "An attack on color-based authentication",
          es: "Un ataque a autenticación basada en colores",
          de: "Ein Angriff auf farbbasierte Authentifizierung",
          nl: "Een aanval op kleur-gebaseerde authenticatie"
        }
      ],
      correct: 0,
      explanation: {
        en: "Rainbow tables are precomputed tables of hash values and their corresponding plaintexts, using time-memory tradeoff techniques to speed up password cracking by avoiding the need to compute hashes during the attack.",
        es: "Las tablas arcoíris son tablas precomputadas de valores hash y sus textos planos correspondientes, usando técnicas de intercambio tiempo-memoria para acelerar el descifrado de contraseñas evitando la necesidad de computar hashes durante el ataque.",
        de: "Rainbow-Tables sind vorberechnete Tabellen von Hash-Werten und ihren entsprechenden Klartexten, die Zeit-Speicher-Kompromiss-Techniken verwenden, um das Passwort-Knacken zu beschleunigen, indem die Notwendigkeit vermieden wird, Hashes während des Angriffs zu berechnen.",
        nl: "Rainbow tables zijn vooraf berekende tabellen van hash-waarden en hun corresponderende platte teksten, waarbij tijd-geheugen afweging technieken worden gebruikt om wachtwoordkraken te versnellen door de noodzaak te vermijden om hashes tijdens de aanval te berekenen."
      }
    },
    {
      question: {
        en: "What is the difference between authentication and non-repudiation?",
        es: "¿Cuál es la diferencia entre autenticación y no repudio?",
        de: "Was ist der Unterschied zwischen Authentifizierung und Nicht-Abstreitbarkeit?",
        nl: "Wat is het verschil tussen authenticatie en niet-verwerping?"
      },
      options: [
        {
          en: "Authentication verifies identity, non-repudiation prevents denial of actions",
          es: "La autenticación verifica identidad, el no repudio previene la negación de acciones",
          de: "Authentifizierung verifiziert Identität, Nicht-Abstreitbarkeit verhindert die Leugnung von Aktionen",
          nl: "Authenticatie verifieert identiteit, niet-verwerping voorkomt ontkenning van acties"
        },
        {
          en: "They are the same concept",
          es: "Son el mismo concepto",
          de: "Sie sind dasselbe Konzept",
          nl: "Ze zijn hetzelfde concept"
        },
        {
          en: "Authentication is stronger than non-repudiation",
          es: "La autenticación es más fuerte que el no repudio",
          de: "Authentifizierung ist stärker als Nicht-Abstreitbarkeit",
          nl: "Authenticatie is sterker dan niet-verwerping"
        },
        {
          en: "Non-repudiation only applies to digital signatures",
          es: "El no repudio solo se aplica a firmas digitales",
          de: "Nicht-Abstreitbarkeit gilt nur für digitale Signaturen",
          nl: "Niet-verwerping geldt alleen voor digitale handtekeningen"
        }
      ],
      correct: 0,
      explanation: {
        en: "Authentication verifies that a claimed identity is genuine, while non-repudiation ensures that a party cannot later deny having performed an action, typically achieved through digital signatures with trusted timestamps.",
        es: "La autenticación verifica que una identidad reclamada es genuina, mientras que el no repudio asegura que una parte no pueda negar después haber realizado una acción, típicamente logrado a través de firmas digitales con marcas de tiempo confiables.",
        de: "Authentifizierung verifiziert, dass eine behauptete Identität echt ist, während Nicht-Abstreitbarkeit sicherstellt, dass eine Partei später nicht leugnen kann, eine Aktion durchgeführt zu haben, typischerweise erreicht durch digitale Signaturen mit vertrauenswürdigen Zeitstempeln.",
        nl: "Authenticatie verifieert dat een beweerde identiteit echt is, terwijl niet-verwerping ervoor zorgt dat een partij later niet kan ontkennen een actie te hebben uitgevoerd, typisch bereikt door digitale handtekeningen met vertrouwde tijdstempels."
      }
    },
    {
      question: {
        en: "What is the Bleichenbacher padding oracle attack?",
        es: "¿Qué es el ataque de oráculo de relleno de Bleichenbacher?",
        de: "Was ist der Bleichenbacher Padding-Oracle-Angriff?",
        nl: "Wat is de Bleichenbacher padding oracle aanval?"
      },
      options: [
        {
          en: "An attack on RSA PKCS#1 v1.5 padding",
          es: "Un ataque al relleno RSA PKCS#1 v1.5",
          de: "Ein Angriff auf RSA PKCS#1 v1.5 Padding",
          nl: "Een aanval op RSA PKCS#1 v1.5 padding"
        },
        {
          en: "An attack on elliptic curve signatures",
          es: "Un ataque a firmas de curva elíptica",
          de: "Ein Angriff auf elliptische Kurven-Signaturen",
          nl: "Een aanval op elliptische curve handtekeningen"
        },
        {
          en: "An attack on hash functions",
          es: "Un ataque a funciones hash",
          de: "Ein Angriff auf Hash-Funktionen",
          nl: "Een aanval op hash-functies"
        },
        {
          en: "An attack on symmetric key generation",
          es: "Un ataque a la generación de claves simétricas",
          de: "Ein Angriff auf symmetrische Schlüsselgenerierung",
          nl: "Een aanval op symmetrische sleutelgeneratie"
        }
      ],
      correct: 0,
      explanation: {
        en: "Bleichenbacher's attack exploits RSA PKCS#1 v1.5 padding by using error messages from a padding oracle to gradually decrypt ciphertexts without knowing the private key, demonstrating the importance of constant-time implementations.",
        es: "El ataque de Bleichenbacher explota el relleno RSA PKCS#1 v1.5 usando mensajes de error de un oráculo de relleno para descifrar gradualmente textos cifrados sin conocer la clave privada, demostrando la importancia de implementaciones de tiempo constante.",
        de: "Bleichenbachers Angriff nutzt RSA PKCS#1 v1.5 Padding aus, indem er Fehlermeldungen von einem Padding-Orakel verwendet, um Chiffretexte schrittweise zu entschlüsseln, ohne den privaten Schlüssel zu kennen, was die Wichtigkeit konstant-Zeit-Implementierungen demonstriert.",
        nl: "Bleichenbachers aanval benut RSA PKCS#1 v1.5 padding door foutmeldingen van een padding oracle te gebruiken om geleidelijk cijferteksten te ontsleutelen zonder de private sleutel te kennen, wat het belang van constante-tijd implementaties toont."
      }
    },
    {
      question: {
        en: "What is the purpose of key stretching in password-based cryptography?",
        es: "¿Cuál es el propósito del estiramiento de claves en criptografía basada en contraseñas?",
        de: "Was ist der Zweck von Key Stretching in passwort-basierter Kryptografie?",
        nl: "Wat is het doel van sleuteluitrekking in wachtwoord-gebaseerde cryptografie?"
      },
      options: [
        {
          en: "To make keys longer in bits",
          es: "Hacer las claves más largas en bits",
          de: "Schlüssel in Bits länger zu machen",
          nl: "Sleutels langer maken in bits"
        },
        {
          en: "To slow down brute force attacks by increasing computation time",
          es: "Ralentizar ataques de fuerza bruta aumentando el tiempo de computación",
          de: "Brute-Force-Angriffe zu verlangsamen, indem die Berechnungszeit erhöht wird",
          nl: "Brute force aanvallen vertragen door rekentijd te verhogen"
        },
        {
          en: "To compress password data",
          es: "Comprimir datos de contraseña",
          de: "Passwort-Daten zu komprimieren",
          nl: "Wachtwoordgegevens comprimeren"
        },
        {
          en: "To encrypt passwords multiple times",
          es: "Cifrar contraseñas múltiples veces",
          de: "Passwörter mehrfach zu verschlüsseln",
          nl: "Wachtwoorden meerdere keren versleutelen"
        }
      ],
      correct: 1,
      explanation: {
        en: "Key stretching (or key strengthening) uses computationally expensive functions like PBKDF2, bcrypt, or scrypt to deliberately slow down the key derivation process, making brute force attacks against weak passwords much more time-consuming and expensive.",
        es: "El estiramiento de claves usa funciones computacionalmente costosas como PBKDF2, bcrypt, o scrypt para ralentizar deliberadamente el proceso de derivación de claves, haciendo que los ataques de fuerza bruta contra contraseñas débiles sean mucho más costosos en tiempo y recursos.",
        de: "Key Stretching verwendet rechnerisch aufwändige Funktionen wie PBKDF2, bcrypt oder scrypt, um den Schlüssel-Ableitungsprozess absichtlich zu verlangsamen und Brute-Force-Angriffe gegen schwache Passwörter viel zeitaufwändiger und teurer zu machen.",
        nl: "Sleuteluitrekking gebruikt computationeel dure functies zoals PBKDF2, bcrypt, of scrypt om het sleutelafleiding proces opzettelijk te vertragen, waardoor brute force aanvallen tegen zwakke wachtwoorden veel tijdrovender en duurder worden."
      }
    },
    {
      question: {
        en: "What is homomorphic encryption used for?",
        es: "¿Para qué se usa el cifrado homomórfico?",
        de: "Wofür wird homomorphe Verschlüsselung verwendet?",
        nl: "Waarvoor wordt homomorfische versleuteling gebruikt?"
      },
      options: [
        {
          en: "Performing computations on encrypted data without decrypting it",
          es: "Realizar computaciones en datos cifrados sin descifrarlos",
          de: "Berechnungen auf verschlüsselten Daten durchführen, ohne sie zu entschlüsseln",
          nl: "Berekeningen uitvoeren op versleutelde gegevens zonder ze te ontsleutelen"
        },
        {
          en: "Creating multiple copies of encrypted data",
          es: "Crear múltiples copias de datos cifrados",
          de: "Mehrere Kopien verschlüsselter Daten erstellen",
          nl: "Meerdere kopieën van versleutelde gegevens maken"
        },
        {
          en: "Converting between different encryption algorithms",
          es: "Convertir entre diferentes algoritmos de cifrado",
          de: "Zwischen verschiedenen Verschlüsselungsalgorithmen konvertieren",
          nl: "Converteren tussen verschillende versleutelingsalgoritmes"
        },
        {
          en: "Compressing encrypted files",
          es: "Comprimir archivos cifrados",
          de: "Verschlüsselte Dateien komprimieren",
          nl: "Versleutelde bestanden comprimeren"
        }
      ],
      correct: 0,
      explanation: {
        en: "Homomorphic encryption allows computations to be performed directly on encrypted data, with the results remaining encrypted. When decrypted, the results match what would have been obtained by performing the same computations on the unencrypted data.",
        es: "El cifrado homomórfico permite que las computaciones se realicen directamente en datos cifrados, con los resultados permaneciendo cifrados. Cuando se descifran, los resultados coinciden con lo que se habría obtenido realizando las mismas computaciones en los datos no cifrados.",
        de: "Homomorphe Verschlüsselung ermöglicht es, Berechnungen direkt auf verschlüsselten Daten durchzuführen, wobei die Ergebnisse verschlüsselt bleiben. Wenn entschlüsselt, stimmen die Ergebnisse mit dem überein, was durch die gleichen Berechnungen auf den unverschlüsselten Daten erhalten worden wäre.",
        nl: "Homomorfische versleuteling maakt het mogelijk om berekeningen direct uit te voeren op versleutelde gegevens, waarbij de resultaten versleuteld blijven. Wanneer ontsleuteld, komen de resultaten overeen met wat zou zijn verkregen door dezelfde berekeningen uit te voeren op de onversleutelde gegevens."
      }
    },
    {
      question: {
        en: "What is the main security concern with deterministic encryption?",
        es: "¿Cuál es la principal preocupación de seguridad con el cifrado determinístico?",
        de: "Was ist das Hauptsicherheitsanliegen bei deterministischer Verschlüsselung?",
        nl: "Wat is de belangrijkste beveiligingszorg bij deterministische versleuteling?"
      },
      options: [
        {
          en: "It's too slow to compute",
          es: "Es demasiado lento de computar",
          de: "Es ist zu langsam zu berechnen",
          nl: "Het is te langzaam om te berekenen"
        },
        {
          en: "Identical plaintexts always produce identical ciphertexts, revealing patterns",
          es: "Textos planos idénticos siempre producen textos cifrados idénticos, revelando patrones",
          de: "Identische Klartexte produzieren immer identische Chiffretexte und enthüllen Muster",
          nl: "Identieke platte teksten produceren altijd identieke cijferteksten, waardoor patronen worden onthuld"
        },
        {
          en: "It requires very large key sizes",
          es: "Requiere tamaños de clave muy grandes",
          de: "Es erfordert sehr große Schlüsselgrößen",
          nl: "Het vereist zeer grote sleutelgroottes"
        },
        {
          en: "It can only encrypt small amounts of data",
          es: "Solo puede cifrar pequeñas cantidades de datos",
          de: "Es kann nur kleine Datenmengen verschlüsseln",
          nl: "Het kan alleen kleine hoeveelheden gegevens versleutelen"
        }
      ],
      correct: 1,
      explanation: {
        en: "Deterministic encryption always produces the same ciphertext for the same plaintext, which can reveal patterns in the encrypted data. This lack of semantic security makes it vulnerable to frequency analysis and other statistical attacks.",
        es: "El cifrado determinístico siempre produce el mismo texto cifrado para el mismo texto plano, lo cual puede revelar patrones en los datos cifrados. Esta falta de seguridad semántica lo hace vulnerable a análisis de frecuencia y otros ataques estadísticos.",
        de: "Deterministische Verschlüsselung produziert immer denselben Chiffretext für denselben Klartext, was Muster in den verschlüsselten Daten enthüllen kann. Dieser Mangel an semantischer Sicherheit macht sie anfällig für Frequenzanalyse und andere statistische Angriffe.",
        nl: "Deterministische versleuteling produceert altijd dezelfde cijfertekst voor dezelfde platte tekst, wat patronen in de versleutelde gegevens kan onthullen. Dit gebrek aan semantische beveiliging maakt het kwetsbaar voor frequentieanalyse en andere statistische aanvallen."
      }
    },
    {
      question: {
        en: "What is a commitment scheme in cryptography?",
        es: "¿Qué es un esquema de compromiso en criptografía?",
        de: "Was ist ein Commitment-Schema in der Kryptografie?",
        nl: "Wat is een commitment schema in cryptografie?"
      },
      options: [
        {
          en: "A protocol that allows binding to a value while keeping it secret until revelation",
          es: "Un protocolo que permite vincularse a un valor manteniéndolo secreto hasta la revelación",
          de: "Ein Protokoll, das es ermöglicht, sich an einen Wert zu binden, während er bis zur Enthüllung geheim gehalten wird",
          nl: "Een protocol dat het mogelijk maakt om zich te binden aan een waarde terwijl deze geheim wordt gehouden tot onthulling"
        },
        {
          en: "A method for long-term key storage",
          es: "Un método para almacenamiento de claves a largo plazo",
          de: "Eine Methode zur langfristigen Schlüsselspeicherung",
          nl: "Een methode voor langetermijn sleutelopslag"
        },
        {
          en: "A way to guarantee network connections",
          es: "Una forma de garantizar conexiones de red",
          de: "Ein Weg, um Netzwerkverbindungen zu garantieren",
          nl: "Een manier om netwerkverbindingen te garanderen"
        },
        {
          en: "A protocol for data compression",
          es: "Un protocolo para compresión de datos",
          de: "Ein Protokoll für Datenkompression",
          nl: "Een protocol voor gegevenscompressie"
        }
      ],
      correct: 0,
      explanation: {
        en: "A commitment scheme allows a party to commit to a chosen value while keeping it hidden, with the ability to reveal the committed value later. It provides two key properties: binding (cannot change the committed value) and hiding (the value remains secret until revealed).",
        es: "Un esquema de compromiso permite a una parte comprometerse a un valor elegido manteniéndolo oculto, con la capacidad de revelar el valor comprometido después. Proporciona dos propiedades clave: vinculación (no puede cambiar el valor comprometido) y ocultación (el valor permanece secreto hasta ser revelado).",
        de: "Ein Commitment-Schema ermöglicht es einer Partei, sich zu einem gewählten Wert zu verpflichten, während er verborgen bleibt, mit der Möglichkeit, den verpflichteten Wert später zu enthüllen. Es bietet zwei Schlüsseleigenschaften: Bindung (kann den verpflichteten Wert nicht ändern) und Verstecken (der Wert bleibt geheim, bis er enthüllt wird).",
        nl: "Een commitment schema stelt een partij in staat om zich te committeren aan een gekozen waarde terwijl deze verborgen blijft, met de mogelijkheid om de toegezegde waarde later te onthullen. Het biedt twee sleuteleigenschappen: binding (kan de toegezegde waarde niet veranderen) en verbergen (de waarde blijft geheim tot onthulling)."
      }
    },
    {
      question: {
        en: "What is the security significance of the Decisional Diffie-Hellman (DDH) assumption?",
        es: "¿Cuál es el significado de seguridad de la suposición Diffie-Hellman Decisional (DDH)?",
        de: "Was ist die Sicherheitsbedeutung der Decisional Diffie-Hellman (DDH) Annahme?",
        nl: "Wat is de beveiligingsbetekenis van de Decisional Diffie-Hellman (DDH) aanname?"
      },
      options: [
        {
          en: "It's weaker than the standard Diffie-Hellman assumption",
          es: "Es más débil que la suposición Diffie-Hellman estándar",
          de: "Sie ist schwächer als die Standard-Diffie-Hellman-Annahme",
          nl: "Het is zwakker dan de standaard Diffie-Hellman aanname"
        },
        {
          en: "It enables semantic security for ElGamal encryption",
          es: "Permite seguridad semántica para el cifrado ElGamal",
          de: "Sie ermöglicht semantische Sicherheit für ElGamal-Verschlüsselung",
          nl: "Het maakt semantische beveiliging mogelijk voor ElGamal versleuteling"
        },
        {
          en: "It only applies to elliptic curve cryptography",
          es: "Solo se aplica a criptografía de curva elíptica",
          de: "Sie gilt nur für elliptische Kurvenkryptografie",
          nl: "Het geldt alleen voor elliptische curve cryptografie"
        },
        {
          en: "It guarantees perfect forward secrecy",
          es: "Garantiza secreto perfecto hacia adelante",
          de: "Sie garantiert Perfect Forward Secrecy",
          nl: "Het garandeert perfect forward secrecy"
        }
      ],
      correct: 1,
      explanation: {
        en: "The DDH assumption states that it's hard to distinguish between Diffie-Hellman tuples and random tuples. This stronger assumption (compared to the computational DH assumption) enables semantic security for ElGamal encryption and other cryptographic constructions.",
        es: "La suposición DDH establece que es difícil distinguir entre tuplas Diffie-Hellman y tuplas aleatorias. Esta suposición más fuerte (comparada con la suposición DH computacional) permite seguridad semántica para el cifrado ElGamal y otras construcciones criptográficas.",
        de: "Die DDH-Annahme besagt, dass es schwer ist, zwischen Diffie-Hellman-Tupeln und zufälligen Tupeln zu unterscheiden. Diese stärkere Annahme (im Vergleich zur rechnerischen DH-Annahme) ermöglicht semantische Sicherheit für ElGamal-Verschlüsselung und andere kryptografische Konstruktionen.",
        nl: "De DDH aanname stelt dat het moeilijk is om onderscheid te maken tussen Diffie-Hellman tupels en willekeurige tupels. Deze sterkere aanname (vergeleken met de computationele DH aanname) maakt semantische beveiliging mogelijk voor ElGamal versleuteling en andere cryptografische constructies."
      }
    },
    {
      question: {
        en: "What is the main difference between stream ciphers and block ciphers in public key cryptography applications?",
        es: "¿Cuál es la principal diferencia entre cifrados de flujo y cifrados de bloque en aplicaciones de criptografía de clave pública?",
        de: "Was ist der Hauptunterschied zwischen Stream-Chiffren und Block-Chiffren in Public-Key-Kryptografie-Anwendungen?",
        nl: "Wat is het hoofdverschil tussen stream ciphers en blok ciphers in publieke sleutel cryptografie toepassingen?"
      },
      options: [
        {
          en: "Stream ciphers are used for key exchange, block ciphers for data encryption",
          es: "Los cifrados de flujo se usan para intercambio de claves, los cifrados de bloque para cifrado de datos",
          de: "Stream-Chiffren werden für Schlüsselaustausch verwendet, Block-Chiffren für Datenverschlüsselung",
          nl: "Stream ciphers worden gebruikt voor sleuteluitwisseling, blok ciphers voor gegevensversleuteling"
        },
        {
          en: "Public key systems typically use hybrid approaches with block ciphers for bulk data",
          es: "Los sistemas de clave pública típicamente usan enfoques híbridos con cifrados de bloque para datos masivos",
          de: "Public-Key-Systeme verwenden typischerweise hybride Ansätze mit Block-Chiffren für Massendaten",
          nl: "Publieke sleutel systemen gebruiken typisch hybride benaderingen met blok ciphers voor bulk gegevens"
        },
        {
          en: "Stream ciphers provide better non-repudiation",
          es: "Los cifrados de flujo proporcionan mejor no repudio",
          de: "Stream-Chiffren bieten bessere Nicht-Abstreitbarkeit",
          nl: "Stream ciphers bieden betere niet-verwerping"
        },
        {
          en: "Block ciphers cannot be used with digital signatures",
          es: "Los cifrados de bloque no pueden usarse con firmas digitales",
          de: "Block-Chiffren können nicht mit digitalen Signaturen verwendet werden",
          nl: "Blok ciphers kunnen niet worden gebruikt met digitale handtekeningen"
        }
      ],
      correct: 1,
      explanation: {
        en: "In practice, public key cryptography is typically used in hybrid systems where RSA or ECC encrypts a symmetric key, which then encrypts the actual data using block ciphers like AES. This combines the key exchange benefits of public key crypto with the speed of symmetric encryption.",
        es: "En la práctica, la criptografía de clave pública se usa típicamente en sistemas híbridos donde RSA o ECC cifra una clave simétrica, que luego cifra los datos reales usando cifrados de bloque como AES. Esto combina los beneficios de intercambio de claves de la criptografía de clave pública con la velocidad del cifrado simétrico.",
        de: "In der Praxis wird Public-Key-Kryptografie typischerweise in hybriden Systemen verwendet, wo RSA oder ECC einen symmetrischen Schlüssel verschlüsselt, der dann die eigentlichen Daten mit Block-Chiffren wie AES verschlüsselt. Dies kombiniert die Schlüsselaustausch-Vorteile der Public-Key-Kryptografie mit der Geschwindigkeit symmetrischer Verschlüsselung.",
        nl: "In de praktijk wordt publieke sleutel cryptografie typisch gebruikt in hybride systemen waar RSA of ECC een symmetrische sleutel versleutelt, die vervolgens de werkelijke gegevens versleutelt met blok ciphers zoals AES. Dit combineert de voordelen van sleuteluitwisseling van publieke sleutel crypto met de snelheid van symmetrische versleuteling."
      }
    }
  ]
});
