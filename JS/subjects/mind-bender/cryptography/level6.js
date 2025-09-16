// Cryptography - Level 6: Advanced Protocols and Key Management
window.addLevel('mind-bender/cryptography', {
  name: {
    en: "Advanced Protocols and Key Management",
    es: "Protocolos Avanzados y Gestión de Claves",
    de: "Erweiterte Protokolle und Schlüsselverwaltung",
    nl: "Geavanceerde Protocollen en Sleutelbeheer"
  },
  questions: [
    {
      question: {
        en: "What is the main purpose of Zero-Knowledge Proofs?",
        es: "¿Cuál es el propósito principal de las Pruebas de Conocimiento Cero?",
        de: "Was ist der Hauptzweck von Zero-Knowledge-Beweisen?",
        nl: "Wat is het hoofddoel van Zero-Knowledge Proofs?"
      },
      options: [
        {
          en: "To encrypt data more efficiently",
          es: "Cifrar datos de manera más eficiente",
          de: "Daten effizienter zu verschlüsseln",
          nl: "Data efficiënter versleutelen"
        },
        {
          en: "To prove knowledge of information without revealing the information itself",
          es: "Probar conocimiento de información sin revelar la información misma",
          de: "Wissen über Informationen zu beweisen, ohne die Informationen selbst preiszugeben",
          nl: "Kennis van informatie bewijzen zonder de informatie zelf te onthullen"
        },
        {
          en: "To generate cryptographic keys faster",
          es: "Generar claves criptográficas más rápido",
          de: "Kryptographische Schlüssel schneller zu generieren",
          nl: "Cryptografische sleutels sneller genereren"
        },
        {
          en: "To compress encrypted messages",
          es: "Comprimir mensajes cifrados",
          de: "Verschlüsselte Nachrichten zu komprimieren",
          nl: "Versleutelde berichten comprimeren"
        }
      ],
      correct: 1,
      explanation: {
        en: "Zero-Knowledge Proofs allow one party to prove to another that they know a secret without revealing any information about the secret itself, maintaining privacy while establishing trust.",
        es: "Las Pruebas de Conocimiento Cero permiten a una parte probar a otra que conoce un secreto sin revelar ninguna información sobre el secreto mismo, manteniendo la privacidad mientras establece confianza.",
        de: "Zero-Knowledge-Beweise ermöglichen es einer Partei, einer anderen zu beweisen, dass sie ein Geheimnis kennt, ohne Informationen über das Geheimnis selbst preiszugeben, wodurch Privatsphäre gewahrt und Vertrauen geschaffen wird.",
        nl: "Zero-Knowledge Proofs stellen een partij in staat aan een andere te bewijzen dat ze een geheim kennen zonder informatie over het geheim zelf te onthullen, waarbij privacy behouden blijft terwijl vertrouwen wordt opgebouwd."
      }
    },
    {
      question: {
        en: "What is the main security concern with key escrow systems?",
        es: "¿Cuál es la principal preocupación de seguridad con los sistemas de depósito de claves?",
        de: "Was ist das Hauptsicherheitsproblem bei Key-Escrow-Systemen?",
        nl: "Wat is de hoofdbeveiligingszorg bij key escrow systemen?"
      },
      options: [
        {
          en: "They are too slow to implement",
          es: "Son demasiado lentos de implementar",
          de: "Sie sind zu langsam zu implementieren",
          nl: "Ze zijn te langzaam om te implementeren"
        },
        {
          en: "They create a single point of failure and potential backdoor access",
          es: "Crean un único punto de falla y potencial acceso de puerta trasera",
          de: "Sie schaffen einen Single Point of Failure und potentiellen Backdoor-Zugang",
          nl: "Ze creëren een enkele foutpunt en mogelijke backdoor toegang"
        },
        {
          en: "They require too much computational power",
          es: "Requieren demasiada potencia computacional",
          de: "Sie benötigen zu viel Rechenleistung",
          nl: "Ze vereisen te veel rekenkracht"
        },
        {
          en: "They only work with symmetric encryption",
          es: "Solo funcionan con cifrado simétrico",
          de: "Sie funktionieren nur mit symmetrischer Verschlüsselung",
          nl: "Ze werken alleen met symmetrische versleuteling"
        }
      ],
      correct: 1,
      explanation: {
        en: "Key escrow systems concentrate trust and create vulnerability points where stored keys could be compromised, potentially allowing unauthorized access to all protected data.",
        es: "Los sistemas de depósito de claves concentran la confianza y crean puntos de vulnerabilidad donde las claves almacenadas podrían ser comprometidas, potencialmente permitiendo acceso no autorizado a todos los datos protegidos.",
        de: "Key-Escrow-Systeme konzentrieren Vertrauen und schaffen Verwundbarkeits punkte, wo gespeicherte Schlüssel kompromittiert werden könnten, wodurch potenziell unbefugter Zugang zu allen geschützten Daten ermöglicht wird.",
        nl: "Key escrow systemen concentreren vertrouwen en creëren kwetsbaarheidspunten waar opgeslagen sleutels gecompromitteerd kunnen worden, wat mogelijk ongeautoriseerde toegang tot alle beschermde data toestaat."
      }
    },
    {
      question: {
        en: "What is the primary advantage of threshold cryptography?",
        es: "¿Cuál es la principal ventaja de la criptografía de umbral?",
        de: "Was ist der Hauptvorteil der Threshold-Kryptographie?",
        nl: "Wat is het hoofdvoordeel van threshold cryptografie?"
      },
      options: [
        {
          en: "It's faster than traditional cryptography",
          es: "Es más rápida que la criptografía tradicional",
          de: "Es ist schneller als traditionelle Kryptographie",
          nl: "Het is sneller dan traditionele cryptografie"
        },
        {
          en: "It distributes trust among multiple parties, no single point of failure",
          es: "Distribuye la confianza entre múltiples partes, sin un único punto de falla",
          de: "Es verteilt Vertrauen auf mehrere Parteien, kein Single Point of Failure",
          nl: "Het verdeelt vertrouwen over meerdere partijen, geen enkel foutpunt"
        },
        {
          en: "It uses less memory",
          es: "Usa menos memoria",
          de: "Es verwendet weniger Speicher",
          nl: "Het gebruikt minder geheugen"
        },
        {
          en: "It provides quantum resistance",
          es: "Proporciona resistencia cuántica",
          de: "Es bietet Quantenresistenz",
          nl: "Het biedt quantum weerstand"
        }
      ],
      correct: 1,
      explanation: {
        en: "Threshold cryptography distributes cryptographic operations across multiple parties, requiring a minimum threshold of participants to complete operations, eliminating single points of failure and improving security.",
        es: "La criptografía de umbral distribuye operaciones criptográficas entre múltiples partes, requiriendo un umbral mínimo de participantes para completar operaciones, eliminando puntos únicos de falla y mejorando la seguridad.",
        de: "Threshold-Kryptographie verteilt kryptographische Operationen auf mehrere Parteien und erfordert eine Mindestanzahl von Teilnehmern für die Durchführung von Operationen, wodurch Single Points of Failure eliminiert und die Sicherheit verbessert wird.",
        nl: "Threshold cryptografie verdeelt cryptografische operaties over meerdere partijen, waarbij een minimale drempel van deelnemers vereist is om operaties te voltooien, waardoor enkele foutpunten worden geëlimineerd en de beveiliging wordt verbeterd."
      }
    },
    {
      question: {
        en: "What is Secure Multi-party Computation (SMC) used for?",
        es: "¿Para qué se usa la Computación Segura Multi-parte (SMC)?",
        de: "Wofür wird Secure Multi-party Computation (SMC) verwendet?",
        nl: "Waarvoor wordt Secure Multi-party Computation (SMC) gebruikt?"
      },
      options: [
        {
          en: "To encrypt data with multiple keys simultaneously",
          es: "Cifrar datos con múltiples claves simultáneamente",
          de: "Daten mit mehreren Schlüsseln gleichzeitig zu verschlüsseln",
          nl: "Data versleutelen met meerdere sleutels tegelijkertijd"
        },
        {
          en: "To enable computation on private data without revealing individual inputs",
          es: "Permitir cálculo en datos privados sin revelar entradas individuales",
          de: "Berechnungen auf privaten Daten zu ermöglichen, ohne individuelle Eingaben preiszugeben",
          nl: "Berekeningen op privédata mogelijk maken zonder individuele invoer te onthullen"
        },
        {
          en: "To compress large datasets efficiently",
          es: "Comprimir grandes conjuntos de datos eficientemente",
          de: "Große Datensätze effizient zu komprimieren",
          nl: "Grote datasets efficiënt comprimeren"
        },
        {
          en: "To generate shared random numbers",
          es: "Generar números aleatorios compartidos",
          de: "Gemeinsame Zufallszahlen zu generieren",
          nl: "Gedeelde willekeurige nummers genereren"
        }
      ],
      correct: 1,
      explanation: {
        en: "SMC allows multiple parties to jointly compute a function over their inputs while keeping those inputs private, enabling collaborative computation without revealing sensitive data.",
        es: "SMC permite a múltiples partes calcular conjuntamente una función sobre sus entradas mientras mantiene esas entradas privadas, permitiendo cálculo colaborativo sin revelar datos sensibles.",
        de: "SMC ermöglicht es mehreren Parteien, gemeinsam eine Funktion über ihre Eingaben zu berechnen, während diese Eingaben privat bleiben, wodurch kollaborative Berechnung ohne Preisgabe sensibler Daten möglich wird.",
        nl: "SMC stelt meerdere partijen in staat gezamenlijk een functie over hun invoer te berekenen terwijl die invoer privé blijft, waardoor collaboratieve berekening mogelijk wordt zonder gevoelige data te onthullen."
      }
    },
    {
      question: {
        en: "What is the main purpose of a Certificate Transparency log?",
        es: "¿Cuál es el propósito principal de un registro de Transparencia de Certificados?",
        de: "Was ist der Hauptzweck eines Certificate Transparency Logs?",
        nl: "Wat is het hoofddoel van een Certificate Transparency log?"
      },
      options: [
        {
          en: "To store private keys securely",
          es: "Almacenar claves privadas de forma segura",
          de: "Private Schlüssel sicher zu speichern",
          nl: "Private sleutels veilig opslaan"
        },
        {
          en: "To create a public record of all issued certificates for monitoring",
          es: "Crear un registro público de todos los certificados emitidos para monitoreo",
          de: "Ein öffentliches Register aller ausgestellten Zertifikate zur Überwachung zu erstellen",
          nl: "Een publiek register van alle uitgegeven certificaten maken voor monitoring"
        },
        {
          en: "To encrypt certificate data",
          es: "Cifrar datos de certificados",
          de: "Zertifikatsdaten zu verschlüsseln",
          nl: "Certificaatgegevens versleutelen"
        },
        {
          en: "To validate digital signatures",
          es: "Validar firmas digitales",
          de: "Digitale Signaturen zu validieren",
          nl: "Digitale handtekeningen valideren"
        }
      ],
      correct: 1,
      explanation: {
        en: "Certificate Transparency logs maintain public, tamper-evident records of all certificates issued by Certificate Authorities, allowing domain owners and security researchers to detect misissued certificates.",
        es: "Los registros de Transparencia de Certificados mantienen registros públicos y evidentes de manipulación de todos los certificados emitidos por Autoridades de Certificación, permitiendo a propietarios de dominios e investigadores de seguridad detectar certificados mal emitidos.",
        de: "Certificate Transparency Logs führen öffentliche, manipulationsevidente Aufzeichnungen aller von Certificate Authorities ausgestellten Zertifikate und ermöglichen es Domain-Besitzern und Sicherheitsforschern, falsch ausgestellte Zertifikate zu erkennen.",
        nl: "Certificate Transparency logs onderhouden publieke, sabotage-evidente records van alle certificaten uitgegeven door Certificate Authorities, waardoor domeineigenaren en beveiligingsonderzoekers verkeerd uitgegeven certificaten kunnen detecteren."
      }
    },
    {
      question: {
        en: "What is the main advantage of homomorphic encryption?",
        es: "¿Cuál es la principal ventaja del cifrado homomórfico?",
        de: "Was ist der Hauptvorteil homomorpher Verschlüsselung?",
        nl: "Wat is het hoofdvoordeel van homomorfische versleuteling?"
      },
      options: [
        {
          en: "It's faster than traditional encryption",
          es: "Es más rápida que el cifrado tradicional",
          de: "Es ist schneller als traditionelle Verschlüsselung",
          nl: "Het is sneller dan traditionele versleuteling"
        },
        {
          en: "It allows computation on encrypted data without decryption",
          es: "Permite cálculo en datos cifrados sin descifrado",
          de: "Es ermöglicht Berechnungen auf verschlüsselten Daten ohne Entschlüsselung",
          nl: "Het staat berekeningen toe op versleutelde data zonder ontsleuteling"
        },
        {
          en: "It requires smaller key sizes",
          es: "Requiere tamaños de clave más pequeños",
          de: "Es benötigt kleinere Schlüsselgrößen",
          nl: "Het vereist kleinere sleutelgroottes"
        },
        {
          en: "It provides quantum resistance",
          es: "Proporciona resistencia cuántica",
          de: "Es bietet Quantenresistenz",
          nl: "Het biedt quantum weerstand"
        }
      ],
      correct: 1,
      explanation: {
        en: "Homomorphic encryption enables performing computations on encrypted data while preserving the encryption, allowing cloud computing and data processing without exposing sensitive information.",
        es: "El cifrado homomórfico permite realizar cálculos en datos cifrados mientras preserva el cifrado, permitiendo computación en la nube y procesamiento de datos sin exponer información sensible.",
        de: "Homomorphe Verschlüsselung ermöglicht die Durchführung von Berechnungen auf verschlüsselten Daten unter Beibehaltung der Verschlüsselung, wodurch Cloud-Computing und Datenverarbeitung ohne Preisgabe sensibler Informationen möglich wird.",
        nl: "Homomorfische versleuteling maakt het mogelijk berekeningen uit te voeren op versleutelde data terwijl de versleuteling behouden blijft, waardoor cloud computing en dataverwerking mogelijk wordt zonder gevoelige informatie bloot te stellen."
      }
    },
    {
      question: {
        en: "What is the purpose of a Key Derivation Function (KDF)?",
        es: "¿Cuál es el propósito de una Función de Derivación de Claves (KDF)?",
        de: "Was ist der Zweck einer Key Derivation Function (KDF)?",
        nl: "Wat is het doel van een Key Derivation Function (KDF)?"
      },
      options: [
        {
          en: "To compress cryptographic keys",
          es: "Comprimir claves criptográficas",
          de: "Kryptographische Schlüssel zu komprimieren",
          nl: "Cryptografische sleutels comprimeren"
        },
        {
          en: "To derive one or more keys from a master secret or password",
          es: "Derivar una o más claves de un secreto maestro o contraseña",
          de: "Einen oder mehrere Schlüssel aus einem Master-Geheimnis oder Passwort abzuleiten",
          nl: "Een of meer sleutels afleiden van een hoofdgeheim of wachtwoord"
        },
        {
          en: "To encrypt keys before storage",
          es: "Cifrar claves antes del almacenamiento",
          de: "Schlüssel vor der Speicherung zu verschlüsseln",
          nl: "Sleutels versleutelen voor opslag"
        },
        {
          en: "To generate random keys",
          es: "Generar claves aleatorias",
          de: "Zufällige Schlüssel zu generieren",
          nl: "Willekeurige sleutels genereren"
        }
      ],
      correct: 1,
      explanation: {
        en: "KDFs transform a master secret or password into one or more cryptographic keys, often with specific properties like length or entropy, enabling secure key management and distribution.",
        es: "Las KDF transforman un secreto maestro o contraseña en una o más claves criptográficas, a menudo con propiedades específicas como longitud o entropía, permitiendo gestión y distribución segura de claves.",
        de: "KDFs transformieren ein Master-Geheimnis oder Passwort in einen oder mehrere kryptographische Schlüssel, oft mit spezifischen Eigenschaften wie Länge oder Entropie, wodurch sichere Schlüsselverwaltung und -verteilung ermöglicht wird.",
        nl: "KDFs transformeren een hoofdgeheim of wachtwoord in een of meer cryptografische sleutels, vaak met specifieke eigenschappen zoals lengte of entropie, waardoor veilig sleutelbeheer en -distributie mogelijk wordt."
      }
    },
    {
      question: {
        en: "What is the main security benefit of using session keys?",
        es: "¿Cuál es el principal beneficio de seguridad de usar claves de sesión?",
        de: "Was ist der Hauptsicherheitsvorteil der Verwendung von Sitzungsschlüsseln?",
        nl: "Wat is het hoofdbeveiligingsvoordeel van het gebruik van sessiesleutels?"
      },
      options: [
        {
          en: "They are easier to generate",
          es: "Son más fáciles de generar",
          de: "Sie sind einfacher zu generieren",
          nl: "Ze zijn gemakkelijker te genereren"
        },
        {
          en: "They limit the amount of data encrypted with any single key",
          es: "Limitan la cantidad de datos cifrados con cualquier clave única",
          de: "Sie begrenzen die Menge der mit einem einzelnen Schlüssel verschlüsselten Daten",
          nl: "Ze beperken de hoeveelheid data versleuteld met een enkele sleutel"
        },
        {
          en: "They require less memory",
          es: "Requieren menos memoria",
          de: "Sie benötigen weniger Speicher",
          nl: "Ze vereisen minder geheugen"
        },
        {
          en: "They are quantum-resistant",
          es: "Son resistentes a cuánticos",
          de: "Sie sind quantenresistent",
          nl: "Ze zijn quantum-resistent"
        }
      ],
      correct: 1,
      explanation: {
        en: "Session keys are temporary and regularly rotated, limiting the amount of data encrypted with each key and reducing the impact if any single key is compromised.",
        es: "Las claves de sesión son temporales y regularmente rotadas, limitando la cantidad de datos cifrados con cada clave y reduciendo el impacto si cualquier clave única es comprometida.",
        de: "Sitzungsschlüssel sind temporär und werden regelmäßig gewechselt, wodurch die Menge der mit jedem Schlüssel verschlüsselten Daten begrenzt und die Auswirkungen reduziert werden, falls ein einzelner Schlüssel kompromittiert wird.",
        nl: "Sessiesleutels zijn tijdelijk en worden regelmatig gewisseld, waardoor de hoeveelheid data versleuteld met elke sleutel wordt beperkt en de impact wordt verminderd als een enkele sleutel gecompromitteerd wordt."
      }
    },
    {
      question: {
        en: "What is a side-channel attack?",
        es: "¿Qué es un ataque de canal lateral?",
        de: "Was ist ein Seitenkanalangriff?",
        nl: "Wat is een zijkanaal aanval?"
      },
      options: [
        {
          en: "An attack through network protocols",
          es: "Un ataque a través de protocolos de red",
          de: "Ein Angriff über Netzwerkprotokolle",
          nl: "Een aanval via netwerkprotocollen"
        },
        {
          en: "An attack exploiting physical implementation characteristics",
          es: "Un ataque que explota características de implementación física",
          de: "Ein Angriff, der physische Implementierungsmerkmale ausnutzt",
          nl: "Een aanval die fysieke implementatie-eigenschappen uitbuit"
        },
        {
          en: "An attack on backup channels",
          es: "Un ataque en canales de respaldo",
          de: "Ein Angriff auf Backup-Kanäle",
          nl: "Een aanval op back-upkanalen"
        },
        {
          en: "An attack using social engineering",
          es: "Un ataque usando ingeniería social",
          de: "Ein Angriff mit Social Engineering",
          nl: "Een aanval met social engineering"
        }
      ],
      correct: 1,
      explanation: {
        en: "Side-channel attacks exploit information leaked through physical implementation characteristics like timing, power consumption, electromagnetic emissions, or acoustic signatures rather than attacking the algorithm directly.",
        es: "Los ataques de canal lateral explotan información filtrada a través de características de implementación física como temporización, consumo de energía, emisiones electromagnéticas o firmas acústicas en lugar de atacar el algoritmo directamente.",
        de: "Seitenkanalangriffe nutzen Informationen aus, die durch physische Implementierungsmerkmale wie Timing, Stromverbrauch, elektromagnetische Emissionen oder akustische Signaturen preisgegeben werden, anstatt den Algorithmus direkt anzugreifen.",
        nl: "Zijkanaal aanvallen benutten informatie die lekt door fysieke implementatie-eigenschappen zoals timing, stroomverbruik, elektromagnetische emissies of akoestische handtekeningen in plaats van het algoritme direct aan te vallen."
      }
    },
    {
      question: {
        en: "What is the purpose of key stretching in cryptographic systems?",
        es: "¿Cuál es el propósito del estiramiento de claves en sistemas criptográficos?",
        de: "Was ist der Zweck des Key Stretching in kryptographischen Systemen?",
        nl: "Wat is het doel van key stretching in cryptografische systemen?"
      },
      options: [
        {
          en: "To make keys physically longer",
          es: "Hacer las claves físicamente más largas",
          de: "Schlüssel physisch länger zu machen",
          nl: "Sleutels fysiek langer maken"
        },
        {
          en: "To increase the computational cost of brute force attacks",
          es: "Aumentar el costo computacional de ataques de fuerza bruta",
          de: "Die Rechenkosten von Brute-Force-Angriffen zu erhöhen",
          nl: "De rekenkundige kosten van brute force aanvallen verhogen"
        },
        {
          en: "To compress keys for storage",
          es: "Comprimir claves para almacenamiento",
          de: "Schlüssel für die Speicherung zu komprimieren",
          nl: "Sleutels comprimeren voor opslag"
        },
        {
          en: "To generate random keys",
          es: "Generar claves aleatorias",
          de: "Zufällige Schlüssel zu generieren",
          nl: "Willekeurige sleutels genereren"
        }
      ],
      correct: 1,
      explanation: {
        en: "Key stretching deliberately increases the computational time required to derive keys from passwords, making brute force attacks significantly more expensive and time-consuming for attackers.",
        es: "El estiramiento de claves deliberadamente aumenta el tiempo computacional requerido para derivar claves de contraseñas, haciendo que los ataques de fuerza bruta sean significativamente más costosos y consuman más tiempo para los atacantes.",
        de: "Key Stretching erhöht bewusst die Rechenzeit, die zur Ableitung von Schlüsseln aus Passwörtern benötigt wird, wodurch Brute-Force-Angriffe für Angreifer erheblich teurer und zeitaufwändiger werden.",
        nl: "Key stretching verhoogt opzettelijk de rekentijd die nodig is om sleutels af te leiden van wachtwoorden, waardoor brute force aanvallen aanzienlijk duurder en tijdrovender worden voor aanvallers."
      }
    },
    {
      question: {
        en: "What is the main purpose of a Hardware Security Module (HSM)?",
        es: "¿Cuál es el propósito principal de un Módulo de Seguridad de Hardware (HSM)?",
        de: "Was ist der Hauptzweck eines Hardware Security Module (HSM)?",
        nl: "Wat is het hoofddoel van een Hardware Security Module (HSM)?"
      },
      options: [
        {
          en: "To speed up encryption operations",
          es: "Acelerar operaciones de cifrado",
          de: "Verschlüsselungsoperationen zu beschleunigen",
          nl: "Versleutelingsoperaties versnellen"
        },
        {
          en: "To provide tamper-resistant hardware for key storage and cryptographic operations",
          es: "Proporcionar hardware resistente a manipulaciones para almacenamiento de claves y operaciones criptográficas",
          de: "Manipulationssichere Hardware für Schlüsselspeicherung und kryptographische Operationen bereitzustellen",
          nl: "Sabotagebestendige hardware bieden voor sleutelopslag en cryptografische operaties"
        },
        {
          en: "To compress cryptographic algorithms",
          es: "Comprimir algoritmos criptográficos",
          de: "Kryptographische Algorithmen zu komprimieren",
          nl: "Cryptografische algoritmen comprimeren"
        },
        {
          en: "To generate random numbers only",
          es: "Solo generar números aleatorios",
          de: "Nur Zufallszahlen zu generieren",
          nl: "Alleen willekeurige nummers genereren"
        }
      ],
      correct: 1,
      explanation: {
        en: "HSMs are specialized, tamper-resistant hardware devices designed to securely generate, store, and manage cryptographic keys while performing cryptographic operations in a secure environment.",
        es: "Los HSM son dispositivos de hardware especializados y resistentes a manipulaciones diseñados para generar, almacenar y gestionar claves criptográficas de forma segura mientras realizan operaciones criptográficas en un entorno seguro.",
        de: "HSMs sind spezialisierte, manipulationssichere Hardware-Geräte, die entwickelt wurden, um kryptographische Schlüssel sicher zu generieren, zu speichern und zu verwalten, während sie kryptographische Operationen in einer sicheren Umgebung durchführen.",
        nl: "HSMs zijn gespecialiseerde, sabotagebestendige hardware-apparaten ontworpen om cryptografische sleutels veilig te genereren, op te slaan en te beheren terwijl ze cryptografische operaties uitvoeren in een veilige omgeving."
      }
    },
    {
      question: {
        en: "What is the main difference between a digital signature and a MAC?",
        es: "¿Cuál es la principal diferencia entre una firma digital y un MAC?",
        de: "Was ist der Hauptunterschied zwischen einer digitalen Signatur und einem MAC?",
        nl: "Wat is het hoofdverschil tussen een digitale handtekening en een MAC?"
      },
      options: [
        {
          en: "Digital signatures are faster to compute",
          es: "Las firmas digitales son más rápidas de calcular",
          de: "Digitale Signaturen sind schneller zu berechnen",
          nl: "Digitale handtekeningen zijn sneller te berekenen"
        },
        {
          en: "Digital signatures provide non-repudiation, MACs do not",
          es: "Las firmas digitales proporcionan no repudio, los MAC no",
          de: "Digitale Signaturen bieten Unleugbarkeit, MACs nicht",
          nl: "Digitale handtekeningen bieden non-repudiatie, MACs niet"
        },
        {
          en: "MACs are more secure than digital signatures",
          es: "Los MAC son más seguros que las firmas digitales",
          de: "MACs sind sicherer als digitale Signaturen",
          nl: "MACs zijn veiliger dan digitale handtekeningen"
        },
        {
          en: "Digital signatures only work with symmetric keys",
          es: "Las firmas digitales solo funcionan con claves simétricas",
          de: "Digitale Signaturen funktionieren nur mit symmetrischen Schlüsseln",
          nl: "Digitale handtekeningen werken alleen met symmetrische sleutels"
        }
      ],
      correct: 1,
      explanation: {
        en: "Digital signatures use asymmetric cryptography and provide non-repudiation (sender cannot deny signing), while MACs use symmetric keys and provide authentication but not non-repudiation since both parties share the key.",
        es: "Las firmas digitales usan criptografía asimétrica y proporcionan no repudio (el remitente no puede negar haber firmado), mientras que los MAC usan claves simétricas y proporcionan autenticación pero no no repudio ya que ambas partes comparten la clave.",
        de: "Digitale Signaturen verwenden asymmetrische Kryptographie und bieten Unleugbarkeit (Absender kann das Signieren nicht leugnen), während MACs symmetrische Schlüssel verwenden und Authentifizierung aber keine Unleugbarkeit bieten, da beide Parteien den Schlüssel teilen.",
        nl: "Digitale handtekeningen gebruiken asymmetrische cryptografie en bieden non-repudiatie (afzender kan ondertekenen niet ontkennen), terwijl MACs symmetrische sleutels gebruiken en authenticatie bieden maar geen non-repudiatie omdat beide partijen de sleutel delen."
      }
    },
    {
      question: {
        en: "What is the purpose of key rotation in cryptographic systems?",
        es: "¿Cuál es el propósito de la rotación de claves en sistemas criptográficos?",
        de: "Was ist der Zweck der Schlüsselrotation in kryptographischen Systemen?",
        nl: "Wat is het doel van sleutelrotatie in cryptografische systemen?"
      },
      options: [
        {
          en: "To improve encryption speed",
          es: "Mejorar la velocidad de cifrado",
          de: "Die Verschlüsselungsgeschwindigkeit zu verbessern",
          nl: "De versleutelingssnelheid verbeteren"
        },
        {
          en: "To limit exposure if keys are compromised and maintain forward secrecy",
          es: "Limitar la exposición si las claves son comprometidas y mantener el secreto hacia adelante",
          de: "Die Exposition zu begrenzen, falls Schlüssel kompromittiert werden, und Forward Secrecy zu erhalten",
          nl: "Blootstelling beperken als sleutels gecompromitteerd worden en forward secrecy behouden"
        },
        {
          en: "To reduce memory usage",
          es: "Reducir el uso de memoria",
          de: "Den Speicherverbrauch zu reduzieren",
          nl: "Geheugengebruik verminderen"
        },
        {
          en: "To comply with regulations only",
          es: "Solo para cumplir con regulaciones",
          de: "Nur um Vorschriften zu erfüllen",
          nl: "Alleen om te voldoen aan regelgeving"
        }
      ],
      correct: 1,
      explanation: {
        en: "Key rotation regularly replaces cryptographic keys to limit the amount of data encrypted with any single key and reduce the impact of potential key compromise, while maintaining forward secrecy.",
        es: "La rotación de claves reemplaza regularmente las claves criptográficas para limitar la cantidad de datos cifrados con cualquier clave única y reducir el impacto del compromiso potencial de claves, mientras mantiene el secreto hacia adelante.",
        de: "Schlüsselrotation ersetzt regelmäßig kryptographische Schlüssel, um die Menge der mit einem einzelnen Schlüssel verschlüsselten Daten zu begrenzen und die Auswirkungen einer möglichen Schlüsselkompromittierung zu reduzieren, während Forward Secrecy erhalten bleibt.",
        nl: "Sleutelrotatie vervangt regelmatig cryptografische sleutels om de hoeveelheid data versleuteld met een enkele sleutel te beperken en de impact van mogelijke sleutelcompromittering te verminderen, terwijl forward secrecy behouden blijft."
      }
    },
    {
      question: {
        en: "What is the main security concern with predictable initialization vectors (IVs)?",
        es: "¿Cuál es la principal preocupación de seguridad con vectores de inicialización (IV) predecibles?",
        de: "Was ist das Hauptsicherheitsproblem bei vorhersagbaren Initialisierungsvektoren (IVs)?",
        nl: "Wat is de hoofdbeveiligingszorg bij voorspelbare initialisatievectoren (IVs)?"
      },
      options: [
        {
          en: "They slow down encryption",
          es: "Ralentizan el cifrado",
          de: "Sie verlangsamen die Verschlüsselung",
          nl: "Ze vertragen versleuteling"
        },
        {
          en: "They can reveal patterns in encrypted data",
          es: "Pueden revelar patrones en datos cifrados",
          de: "Sie können Muster in verschlüsselten Daten preisgeben",
          nl: "Ze kunnen patronen in versleutelde data onthullen"
        },
        {
          en: "They use more memory",
          es: "Usan más memoria",
          de: "Sie verwenden mehr Speicher",
          nl: "Ze gebruiken meer geheugen"
        },
        {
          en: "They are incompatible with modern algorithms",
          es: "Son incompatibles con algoritmos modernos",
          de: "Sie sind inkompatibel mit modernen Algorithmen",
          nl: "Ze zijn incompatibel met moderne algoritmen"
        }
      ],
      correct: 1,
      explanation: {
        en: "Predictable or reused IVs can allow attackers to detect patterns in encrypted data, potentially revealing information about the plaintext or enabling various cryptographic attacks.",
        es: "Los IV predecibles o reutilizados pueden permitir a los atacantes detectar patrones en datos cifrados, potencialmente revelando información sobre el texto plano o habilitando varios ataques criptográficos.",
        de: "Vorhersagbare oder wiederverwendete IVs können es Angreifern ermöglichen, Muster in verschlüsselten Daten zu erkennen, wodurch möglicherweise Informationen über den Klartext preisgegeben oder verschiedene kryptographische Angriffe ermöglicht werden.",
        nl: "Voorspelbare of hergebruikte IVs kunnen aanvallers in staat stellen patronen in versleutelde data te detecteren, mogelijk informatie over de platte tekst onthullend of verschillende cryptografische aanvallen mogelijk makend."
      }
    },
    {
      question: {
        en: "What is differential cryptanalysis?",
        es: "¿Qué es el criptoanálisis diferencial?",
        de: "Was ist differenzielle Kryptoanalyse?",
        nl: "Wat is differentiële cryptanalyse?"
      },
      options: [
        {
          en: "A method to compare different encryption algorithms",
          es: "Un método para comparar diferentes algoritmos de cifrado",
          de: "Eine Methode zum Vergleich verschiedener Verschlüsselungsalgorithmen",
          nl: "Een methode om verschillende versleutelingsalgoritmen te vergelijken"
        },
        {
          en: "An attack analyzing how differences in plaintext affect ciphertext",
          es: "Un ataque que analiza cómo las diferencias en texto plano afectan el texto cifrado",
          de: "Ein Angriff, der analysiert, wie Unterschiede im Klartext das Chiffrat beeinflussen",
          nl: "Een aanval die analyseert hoe verschillen in platte tekst de cijfertekst beïnvloeden"
        },
        {
          en: "A technique for generating differential equations",
          es: "Una técnica para generar ecuaciones diferenciales",
          de: "Eine Technik zur Erzeugung von Differentialgleichungen",
          nl: "Een techniek voor het genereren van differentiaalvergelijkingen"
        },
        {
          en: "A method for key distribution",
          es: "Un método para distribución de claves",
          de: "Eine Methode für Schlüsselverteilung",
          nl: "Een methode voor sleutelverdeling"
        }
      ],
      correct: 1,
      explanation: {
        en: "Differential cryptanalysis studies how differences in input (plaintext) propagate through the encryption algorithm to produce differences in output (ciphertext), potentially revealing information about the key.",
        es: "El criptoanálisis diferencial estudia cómo las diferencias en la entrada (texto plano) se propagan a través del algoritmo de cifrado para producir diferencias en la salida (texto cifrado), potencialmente revelando información sobre la clave.",
        de: "Differenzielle Kryptoanalyse untersucht, wie sich Unterschiede in der Eingabe (Klartext) durch den Verschlüsselungsalgorithmus fortpflanzen und Unterschiede in der Ausgabe (Chiffrat) erzeugen, wodurch möglicherweise Informationen über den Schlüssel preisgegeben werden.",
        nl: "Differentiële cryptanalyse bestudeert hoe verschillen in invoer (platte tekst) zich door het versleutelingsalgoritme voortplanten om verschillen in uitvoer (cijfertekst) te produceren, mogelijk informatie over de sleutel onthullend."
      }
    },
    {
      question: {
        en: "What is the purpose of authenticated encryption?",
        es: "¿Cuál es el propósito del cifrado autenticado?",
        de: "Was ist der Zweck der authentifizierten Verschlüsselung?",
        nl: "Wat is het doel van geauthenticeerde versleuteling?"
      },
      options: [
        {
          en: "To encrypt data faster",
          es: "Cifrar datos más rápido",
          de: "Daten schneller zu verschlüsseln",
          nl: "Data sneller versleutelen"
        },
        {
          en: "To provide both confidentiality and integrity/authenticity in one operation",
          es: "Proporcionar tanto confidencialidad como integridad/autenticidad en una operación",
          de: "Sowohl Vertraulichkeit als auch Integrität/Authentizität in einer Operation bereitzustellen",
          nl: "Zowel vertrouwelijkheid als integriteit/authenticiteit in één operatie bieden"
        },
        {
          en: "To use smaller keys",
          es: "Usar claves más pequeñas",
          de: "Kleinere Schlüssel zu verwenden",
          nl: "Kleinere sleutels gebruiken"
        },
        {
          en: "To compress encrypted data",
          es: "Comprimir datos cifrados",
          de: "Verschlüsselte Daten zu komprimieren",
          nl: "Versleutelde data comprimeren"
        }
      ],
      correct: 1,
      explanation: {
        en: "Authenticated encryption combines encryption (confidentiality) with authentication (integrity and authenticity) in a single cryptographic primitive, preventing both eavesdropping and tampering.",
        es: "El cifrado autenticado combina cifrado (confidencialidad) con autenticación (integridad y autenticidad) en una primitiva criptográfica única, previniendo tanto escuchas como manipulación.",
        de: "Authentifizierte Verschlüsselung kombiniert Verschlüsselung (Vertraulichkeit) mit Authentifizierung (Integrität und Authentizität) in einer einzigen kryptographischen Primitiv und verhindert sowohl Abhören als auch Manipulation.",
        nl: "Geauthenticeerde versleuteling combineert versleuteling (vertrouwelijkheid) met authenticatie (integriteit en authenticiteit) in een enkele cryptografische primitief, waardoor zowel afluisteren als manipulatie wordt voorkomen."
      }
    },
    {
      question: {
        en: "What is the main advantage of Elliptic Curve Integrated Encryption Scheme (ECIES)?",
        es: "¿Cuál es la principal ventaja del Esquema de Cifrado Integrado de Curvas Elípticas (ECIES)?",
        de: "Was ist der Hauptvorteil des Elliptic Curve Integrated Encryption Scheme (ECIES)?",
        nl: "Wat is het hoofdvoordeel van het Elliptic Curve Integrated Encryption Scheme (ECIES)?"
      },
      options: [
        {
          en: "It's faster than all other encryption schemes",
          es: "Es más rápido que todos los otros esquemas de cifrado",
          de: "Es ist schneller als alle anderen Verschlüsselungsverfahren",
          nl: "Het is sneller dan alle andere versleutelingsschema's"
        },
        {
          en: "It provides a complete public key encryption system with smaller keys",
          es: "Proporciona un sistema completo de cifrado de clave pública con claves más pequeñas",
          de: "Es bietet ein vollständiges Public-Key-Verschlüsselungssystem mit kleineren Schlüsseln",
          nl: "Het biedt een compleet publieke sleutel versleutelingssysteem met kleinere sleutels"
        },
        {
          en: "It only works with symmetric encryption",
          es: "Solo funciona con cifrado simétrico",
          de: "Es funktioniert nur mit symmetrischer Verschlüsselung",
          nl: "Het werkt alleen met symmetrische versleuteling"
        },
        {
          en: "It requires no key management",
          es: "No requiere gestión de claves",
          de: "Es benötigt keine Schlüsselverwaltung",
          nl: "Het vereist geen sleutelbeheer"
        }
      ],
      correct: 1,
      explanation: {
        en: "ECIES combines elliptic curve cryptography with symmetric encryption and message authentication, providing a complete hybrid encryption system with the efficiency benefits of smaller ECC keys.",
        es: "ECIES combina criptografía de curvas elípticas con cifrado simétrico y autenticación de mensaje, proporcionando un sistema completo de cifrado híbrido con los beneficios de eficiencia de claves ECC más pequeñas.",
        de: "ECIES kombiniert elliptische Kurven-Kryptographie mit symmetrischer Verschlüsselung und Nachrichtenauthentifizierung und bietet ein vollständiges hybrides Verschlüsselungssystem mit den Effizienzvorteilen kleinerer ECC-Schlüssel.",
        nl: "ECIES combineert elliptische curve cryptografie met symmetrische versleuteling en berichtauthenticatie, wat een compleet hybride versleutelingssysteem biedt met de efficiëntievoordelen van kleinere ECC-sleutels."
      }
    },
    {
      question: {
        en: "What is the main purpose of a cryptographic nonce?",
        es: "¿Cuál es el propósito principal de un nonce criptográfico?",
        de: "Was ist der Hauptzweck einer kryptographischen Nonce?",
        nl: "Wat is het hoofddoel van een cryptografische nonce?"
      },
      options: [
        {
          en: "To encrypt the message",
          es: "Cifrar el mensaje",
          de: "Die Nachricht zu verschlüsseln",
          nl: "Het bericht versleutelen"
        },
        {
          en: "To ensure uniqueness and prevent replay attacks",
          es: "Asegurar unicidad y prevenir ataques de repetición",
          de: "Eindeutigkeit zu gewährleisten und Replay-Angriffe zu verhindern",
          nl: "Uniciteit verzekeren en replay aanvallen voorkomen"
        },
        {
          en: "To compress the data",
          es: "Comprimir los datos",
          de: "Die Daten zu komprimieren",
          nl: "De data comprimeren"
        },
        {
          en: "To generate cryptographic keys",
          es: "Generar claves criptográficas",
          de: "Kryptographische Schlüssel zu generieren",
          nl: "Cryptografische sleutels genereren"
        }
      ],
      correct: 1,
      explanation: {
        en: "A nonce (number used once) is a unique value used to ensure that cryptographic operations produce different outputs even with identical inputs, preventing replay attacks and ensuring protocol security.",
        es: "Un nonce (número usado una vez) es un valor único usado para asegurar que las operaciones criptográficas produzcan salidas diferentes incluso con entradas idénticas, previniendo ataques de repetición y asegurando la seguridad del protocolo.",
        de: "Eine Nonce (number used once) ist ein eindeutiger Wert, der verwendet wird, um sicherzustellen, dass kryptographische Operationen verschiedene Ausgaben erzeugen, selbst bei identischen Eingaben, wodurch Replay-Angriffe verhindert und die Protokollsicherheit gewährleistet wird.",
        nl: "Een nonce (number used once) is een unieke waarde die wordt gebruikt om ervoor te zorgen dat cryptografische operaties verschillende uitvoeren produceren zelfs met identieke invoer, waardoor replay aanvallen worden voorkomen en protocolbeveiliging wordt gewaarborgd."
      }
    },
    {
      question: {
        en: "What is the main security goal of perfect secrecy (information-theoretic security)?",
        es: "¿Cuál es el objetivo principal de seguridad del secreto perfecto (seguridad teórica de la información)?",
        de: "Was ist das Hauptsicherheitsziel perfekter Geheimhaltung (informationstheoretische Sicherheit)?",
        nl: "Wat is het hoofdbeveiligingsdoel van perfecte geheimhouding (informatie-theoretische beveiliging)?"
      },
      options: [
        {
          en: "To encrypt data as fast as possible",
          es: "Cifrar datos tan rápido como sea posible",
          de: "Daten so schnell wie möglich zu verschlüsseln",
          nl: "Data zo snel mogelijk versleutelen"
        },
        {
          en: "To ensure ciphertext reveals no information about plaintext",
          es: "Asegurar que el texto cifrado no revele información sobre el texto plano",
          de: "Sicherzustellen, dass das Chiffrat keine Informationen über den Klartext preisgibt",
          nl: "Ervoor zorgen dat cijfertekst geen informatie over platte tekst onthult"
        },
        {
          en: "To use the smallest possible keys",
          es: "Usar las claves más pequeñas posibles",
          de: "Die kleinsten möglichen Schlüssel zu verwenden",
          nl: "De kleinst mogelijke sleutels gebruiken"
        },
        {
          en: "To compress encrypted messages",
          es: "Comprimir mensajes cifrados",
          de: "Verschlüsselte Nachrichten zu komprimieren",
          nl: "Versleutelde berichten comprimeren"
        }
      ],
      correct: 1,
      explanation: {
        en: "Perfect secrecy means that the ciphertext provides no information about the plaintext beyond what was already known, achieving the highest possible level of cryptographic security.",
        es: "El secreto perfecto significa que el texto cifrado no proporciona información sobre el texto plano más allá de lo que ya era conocido, logrando el nivel más alto posible de seguridad criptográfica.",
        de: "Perfekte Geheimhaltung bedeutet, dass das Chiffrat keine Informationen über den Klartext liefert, die über das bereits Bekannte hinausgehen, wodurch das höchstmögliche Niveau kryptographischer Sicherheit erreicht wird.",
        nl: "Perfecte geheimhouding betekent dat de cijfertekst geen informatie over de platte tekst verstrekt voorbij wat al bekend was, waardoor het hoogst mogelijke niveau van cryptografische beveiliging wordt bereikt."
      }
    },
    {
      question: {
        en: "What is the primary purpose of key agreement protocols?",
        es: "¿Cuál es el propósito principal de los protocolos de acuerdo de claves?",
        de: "Was ist der Hauptzweck von Schlüsselvereinbarungsprotokollen?",
        nl: "Wat is het hoofddoel van sleutelovereenkomst protocollen?"
      },
      options: [
        {
          en: "To encrypt messages directly",
          es: "Cifrar mensajes directamente",
          de: "Nachrichten direkt zu verschlüsseln",
          nl: "Berichten direct versleutelen"
        },
        {
          en: "To allow parties to establish a shared secret key over an insecure channel",
          es: "Permitir a las partes establecer una clave secreta compartida sobre un canal inseguro",
          de: "Parteien zu ermöglichen, einen gemeinsamen geheimen Schlüssel über einen unsicheren Kanal zu etablieren",
          nl: "Partijen in staat stellen een gedeelde geheime sleutel vast te stellen via een onveilig kanaal"
        },
        {
          en: "To compress cryptographic keys",
          es: "Comprimir claves criptográficas",
          de: "Kryptographische Schlüssel zu komprimieren",
          nl: "Cryptografische sleutels comprimeren"
        },
        {
          en: "To verify digital signatures",
          es: "Verificar firmas digitales",
          de: "Digitale Signaturen zu verifizieren",
          nl: "Digitale handtekeningen verifiëren"
        }
      ],
      correct: 1,
      explanation: {
        en: "Key agreement protocols enable two or more parties to jointly establish a shared secret key over an insecure communication channel without a trusted third party, forming the basis for secure communication.",
        es: "Los protocolos de acuerdo de claves permiten a dos o más partes establecer conjuntamente una clave secreta compartida sobre un canal de comunicación inseguro sin una tercera parte confiable, formando la base para comunicación segura.",
        de: "Schlüsselvereinbarungsprotokolle ermöglichen es zwei oder mehr Parteien, gemeinsam einen geheimen Schlüssel über einen unsicheren Kommunikationskanal ohne eine vertrauenswürdige dritte Partei zu etablieren und bilden die Grundlage für sichere Kommunikation.",
        nl: "Sleutelovereenkomst protocollen stellen twee of meer partijen in staat gezamenlijk een gedeelde geheime sleutel vast te stellen via een onveilig communicatiekanaal zonder een vertrouwde derde partij, wat de basis vormt voor veilige communicatie."
      }
    },
    {
      question: {
        en: "What is the main advantage of using certificateless cryptography?",
        es: "¿Cuál es la principal ventaja de usar criptografía sin certificados?",
        de: "Was ist der Hauptvorteil der Verwendung zertifikatloser Kryptographie?",
        nl: "Wat is het hoofdvoordeel van het gebruik van certificaatloze cryptografie?"
      },
      options: [
        {
          en: "It's faster than traditional cryptography",
          es: "Es más rápida que la criptografía tradicional",
          de: "Es ist schneller als traditionelle Kryptographie",
          nl: "Het is sneller dan traditionele cryptografie"
        },
        {
          en: "It eliminates certificate management overhead while avoiding key escrow",
          es: "Elimina la sobrecarga de gestión de certificados mientras evita el depósito de claves",
          de: "Es eliminiert den Zertifikatsverwaltungsaufwand und vermeidet Key Escrow",
          nl: "Het elimineert certificaatbeheer overhead terwijl key escrow wordt vermeden"
        },
        {
          en: "It uses smaller keys",
          es: "Usa claves más pequeñas",
          de: "Es verwendet kleinere Schlüssel",
          nl: "Het gebruikt kleinere sleutels"
        },
        {
          en: "It provides quantum resistance",
          es: "Proporciona resistencia cuántica",
          de: "Es bietet Quantenresistenz",
          nl: "Het biedt quantum weerstand"
        }
      ],
      correct: 1,
      explanation: {
        en: "Certificateless cryptography combines the advantages of certificate-based PKI (no key escrow) with identity-based cryptography (no certificate management), eliminating both certificate overhead and the key escrow problem.",
        es: "La criptografía sin certificados combina las ventajas de PKI basada en certificados (sin depósito de claves) con criptografía basada en identidad (sin gestión de certificados), eliminando tanto la sobrecarga de certificados como el problema del depósito de claves.",
        de: "Zertifikatlose Kryptographie kombiniert die Vorteile zertifikatbasierter PKI (kein Key Escrow) mit identitätsbasierter Kryptographie (keine Zertifikatsverwaltung) und eliminiert sowohl Zertifikatsaufwand als auch das Key-Escrow-Problem.",
        nl: "Certificaatloze cryptografie combineert de voordelen van certificaat-gebaseerde PKI (geen key escrow) met identiteit-gebaseerde cryptografie (geen certificaatbeheer), waardoor zowel certificaat overhead als het key escrow probleem worden geëlimineerd."
      }
    },
    {
      question: {
        en: "What is the main purpose of cryptographic agility?",
        es: "¿Cuál es el propósito principal de la agilidad criptográfica?",
        de: "Was ist der Hauptzweck kryptographischer Agilität?",
        nl: "Wat is het hoofddoel van cryptografische beweeglijkheid?"
      },
      options: [
        {
          en: "To make encryption faster",
          es: "Hacer el cifrado más rápido",
          de: "Die Verschlüsselung schneller zu machen",
          nl: "Versleuteling sneller maken"
        },
        {
          en: "To enable easy migration to new cryptographic algorithms when needed",
          es: "Permitir migración fácil a nuevos algoritmos criptográficos cuando sea necesario",
          de: "Eine einfache Migration zu neuen kryptographischen Algorithmen bei Bedarf zu ermöglichen",
          nl: "Gemakkelijke migratie naar nieuwe cryptografische algoritmen mogelijk maken wanneer nodig"
        },
        {
          en: "To use multiple algorithms simultaneously",
          es: "Usar múltiples algoritmos simultáneamente",
          de: "Mehrere Algorithmen gleichzeitig zu verwenden",
          nl: "Meerdere algoritmen tegelijkertijd gebruiken"
        },
        {
          en: "To reduce memory usage",
          es: "Reducir el uso de memoria",
          de: "Den Speicherverbrauch zu reduzieren",
          nl: "Geheugengebruik verminderen"
        }
      ],
      correct: 1,
      explanation: {
        en: "Cryptographic agility refers to designing systems that can easily transition to new cryptographic algorithms when current ones become obsolete or compromised, ensuring long-term security maintainability.",
        es: "La agilidad criptográfica se refiere a diseñar sistemas que puedan hacer una transición fácil a nuevos algoritmos criptográficos cuando los actuales se vuelven obsoletos o comprometidos, asegurando mantenibilidad de seguridad a largo plazo.",
        de: "Kryptographische Agilität bezieht sich auf das Design von Systemen, die leicht zu neuen kryptographischen Algorithmen wechseln können, wenn aktuelle obsolet oder kompromittiert werden, wodurch langfristige Sicherheitswartbarkeit gewährleistet wird.",
        nl: "Cryptografische beweeglijkheid verwijst naar het ontwerpen van systemen die gemakkelijk kunnen overstappen naar nieuwe cryptografische algoritmen wanneer huidige verouderd of gecompromitteerd raken, waardoor langdurige beveiligingsonderhoudbaarheid wordt gewaarborgd."
      }
    },
    {
      question: {
        en: "What is the main difference between identity-based encryption and traditional PKI?",
        es: "¿Cuál es la principal diferencia entre cifrado basado en identidad y PKI tradicional?",
        de: "Was ist der Hauptunterschied zwischen identitätsbasierter Verschlüsselung und traditioneller PKI?",
        nl: "Wat is het hoofdverschil tussen identiteit-gebaseerde versleuteling en traditionele PKI?"
      },
      options: [
        {
          en: "Identity-based encryption is faster",
          es: "El cifrado basado en identidad es más rápido",
          de: "Identitätsbasierte Verschlüsselung ist schneller",
          nl: "Identiteit-gebaseerde versleuteling is sneller"
        },
        {
          en: "Identity-based encryption uses identifiers as public keys, eliminating certificates",
          es: "El cifrado basado en identidad usa identificadores como claves públicas, eliminando certificados",
          de: "Identitätsbasierte Verschlüsselung verwendet Identifikatoren als öffentliche Schlüssel und eliminiert Zertifikate",
          nl: "Identiteit-gebaseerde versleuteling gebruikt identificatoren als publieke sleutels, waardoor certificaten worden geëlimineerd"
        },
        {
          en: "Traditional PKI is more secure",
          es: "PKI tradicional es más seguro",
          de: "Traditionelle PKI ist sicherer",
          nl: "Traditionele PKI is veiliger"
        },
        {
          en: "Identity-based encryption uses symmetric keys only",
          es: "El cifrado basado en identidad usa solo claves simétricas",
          de: "Identitätsbasierte Verschlüsselung verwendet nur symmetrische Schlüssel",
          nl: "Identiteit-gebaseerde versleuteling gebruikt alleen symmetrische sleutels"
        }
      ],
      correct: 1,
      explanation: {
        en: "Identity-based encryption allows any string (like an email address) to serve as a public key, eliminating the need for certificate infrastructure and simplifying key management.",
        es: "El cifrado basado en identidad permite que cualquier cadena (como una dirección de email) sirva como clave pública, eliminando la necesidad de infraestructura de certificados y simplificando la gestión de claves.",
        de: "Identitätsbasierte Verschlüsselung ermöglicht es, dass jede Zeichenkette (wie eine E-Mail-Adresse) als öffentlicher Schlüssel dient, wodurch die Notwendigkeit einer Zertifikatsinfrastruktur eliminiert und die Schlüsselverwaltung vereinfacht wird.",
        nl: "Identiteit-gebaseerde versleuteling stelt elke string (zoals een e-mailadres) in staat te dienen als publieke sleutel, waardoor de behoefte aan certificaatinfrastructuur wordt weggenomen en sleutelbeheer wordt vereenvoudigd."
      }
    },
    {
      question: {
        en: "What is the primary goal of post-quantum cryptography?",
        es: "¿Cuál es el objetivo principal de la criptografía post-cuántica?",
        de: "Was ist das Hauptziel der Post-Quantum-Kryptographie?",
        nl: "Wat is het hoofddoel van post-quantum cryptografie?"
      },
      options: [
        {
          en: "To make encryption faster on quantum computers",
          es: "Hacer el cifrado más rápido en computadoras cuánticas",
          de: "Die Verschlüsselung auf Quantencomputern schneller zu machen",
          nl: "Versleuteling sneller maken op quantumcomputers"
        },
        {
          en: "To develop algorithms secure against both classical and quantum attacks",
          es: "Desarrollar algoritmos seguros contra ataques tanto clásicos como cuánticos",
          de: "Algorithmen zu entwickeln, die sowohl gegen klassische als auch Quantenangriffe sicher sind",
          nl: "Algoritmen ontwikkelen die veilig zijn tegen zowel klassieke als quantumaanvallen"
        },
        {
          en: "To use quantum effects for encryption",
          es: "Usar efectos cuánticos para cifrado",
          de: "Quanteneffekte für die Verschlüsselung zu nutzen",
          nl: "Quantumeffecten gebruiken voor versleuteling"
        },
        {
          en: "To replace all current encryption immediately",
          es: "Reemplazar todo el cifrado actual inmediatamente",
          de: "Alle aktuelle Verschlüsselung sofort zu ersetzen",
          nl: "All huidige versleuteling onmiddellijk vervangen"
        }
      ],
      correct: 1,
      explanation: {
        en: "Post-quantum cryptography aims to develop cryptographic algorithms that remain secure against attacks by both classical computers and future quantum computers, preparing for the quantum computing era.",
        es: "La criptografía post-cuántica tiene como objetivo desarrollar algoritmos criptográficos que permanezcan seguros contra ataques tanto de computadoras clásicas como de futuras computadoras cuánticas, preparándose para la era de la computación cuántica.",
        de: "Post-Quantum-Kryptographie zielt darauf ab, kryptographische Algorithmen zu entwickeln, die gegen Angriffe sowohl von klassischen Computern als auch von zukünftigen Quantencomputern sicher bleiben und sich auf das Quantencomputing-Zeitalter vorbereiten.",
        nl: "Post-quantum cryptografie heeft als doel cryptografische algoritmen te ontwikkelen die veilig blijven tegen aanvallen door zowel klassieke computers als toekomstige quantumcomputers, zich voorbereidend op het quantumcomputing tijdperk."
      }
    },
    {
      question: {
        en: "What is the main security benefit of using a TPM (Trusted Platform Module)?",
        es: "¿Cuál es el principal beneficio de seguridad de usar un TPM (Módulo de Plataforma Confiable)?",
        de: "Was ist der Hauptsicherheitsvorteil der Verwendung eines TPM (Trusted Platform Module)?",
        nl: "Wat is het hoofdbeveiligingsvoordeel van het gebruik van een TPM (Trusted Platform Module)?"
      },
      options: [
        {
          en: "It speeds up cryptographic operations",
          es: "Acelera las operaciones criptográficas",
          de: "Es beschleunigt kryptographische Operationen",
          nl: "Het versnelt cryptografische operaties"
        },
        {
          en: "It provides hardware-based root of trust and secure storage",
          es: "Proporciona raíz de confianza basada en hardware y almacenamiento seguro",
          de: "Es bietet hardware-basierte Root of Trust und sicheren Speicher",
          nl: "Het biedt hardware-gebaseerde root of trust en veilige opslag"
        },
        {
          en: "It encrypts all system memory",
          es: "Cifra toda la memoria del sistema",
          de: "Es verschlüsselt den gesamten Systemspeicher",
          nl: "Het versleutelt alle systeemgeheugen"
        },
        {
          en: "It prevents network attacks",
          es: "Previene ataques de red",
          de: "Es verhindert Netzwerkangriffe",
          nl: "Het voorkomt netwerkaanvallen"
        }
      ],
      correct: 1,
      explanation: {
        en: "TPMs provide a hardware-based root of trust, secure key storage, and platform integrity measurements, forming the foundation for trusted computing and secure boot processes.",
        es: "Los TPM proporcionan una raíz de confianza basada en hardware, almacenamiento seguro de claves y mediciones de integridad de plataforma, formando la base para computación confiable y procesos de arranque seguro.",
        de: "TPMs bieten eine hardware-basierte Root of Trust, sichere Schlüsselspeicherung und Plattformintegritätsmessungen und bilden die Grundlage für vertrauensvolles Computing und sichere Boot-Prozesse.",
        nl: "TPMs bieden een hardware-gebaseerde root of trust, veilige sleutelopslag en platform integriteitsmeetingen, wat de basis vormt voor vertrouwde computing en veilige boot processen."
      }
    },
    {
      question: {
        en: "What is the main purpose of secure enclaves in modern processors?",
        es: "¿Cuál es el propósito principal de enclaves seguros en procesadores modernos?",
        de: "Was ist der Hauptzweck sicherer Enklaven in modernen Prozessoren?",
        nl: "Wat is het hoofddoel van veilige enclaves in moderne processors?"
      },
      options: [
        {
          en: "To improve processor speed",
          es: "Mejorar la velocidad del procesador",
          de: "Die Prozessorgeschwindigkeit zu verbessern",
          nl: "Processorsnelheid verbeteren"
        },
        {
          en: "To create isolated execution environments for sensitive code and data",
          es: "Crear entornos de ejecución aislados para código y datos sensibles",
          de: "Isolierte Ausführungsumgebungen für sensible Code und Daten zu schaffen",
          nl: "Geïsoleerde uitvoeringsomgevingen creëren voor gevoelige code en data"
        },
        {
          en: "To manage multiple operating systems",
          es: "Gestionar múltiples sistemas operativos",
          de: "Mehrere Betriebssysteme zu verwalten",
          nl: "Meerdere besturingssystemen beheren"
        },
        {
          en: "To compress data efficiently",
          es: "Comprimir datos eficientemente",
          de: "Daten effizient zu komprimieren",
          nl: "Data efficiënt comprimeren"
        }
      ],
      correct: 1,
      explanation: {
        en: "Secure enclaves (like Intel SGX) provide hardware-enforced isolation for sensitive computations, protecting code and data from being accessed by privileged software including the OS and hypervisor.",
        es: "Los enclaves seguros (como Intel SGX) proporcionan aislamiento reforzado por hardware para cálculos sensibles, protegiendo código y datos de ser accedidos por software privilegiado incluyendo el OS e hipervisor.",
        de: "Sichere Enklaven (wie Intel SGX) bieten hardware-erzwungene Isolation für sensible Berechnungen und schützen Code und Daten davor, von privilegierter Software einschließlich OS und Hypervisor zugegriffen zu werden.",
        nl: "Veilige enclaves (zoals Intel SGX) bieden hardware-afgedwongen isolatie voor gevoelige berekeningen, waarbij code en data worden beschermd tegen toegang door geprivilegieerde software inclusief het OS en hypervisor."
      }
    },
    {
      question: {
        en: "What is the main challenge in implementing quantum key distribution (QKD)?",
        es: "¿Cuál es el principal desafío en implementar distribución cuántica de claves (QKD)?",
        de: "Was ist die Hauptherausforderung bei der Implementierung von Quantum Key Distribution (QKD)?",
        nl: "Wat is de hoofduitdaging bij het implementeren van quantum key distribution (QKD)?"
      },
      options: [
        {
          en: "It's too slow for practical use",
          es: "Es demasiado lento para uso práctico",
          de: "Es ist zu langsam für praktischen Einsatz",
          nl: "Het is te langzaam voor praktisch gebruik"
        },
        {
          en: "It requires specialized hardware and is distance-limited",
          es: "Requiere hardware especializado y está limitado por distancia",
          de: "Es erfordert spezialisierte Hardware und ist entfernungsbegrenzt",
          nl: "Het vereist gespecialiseerde hardware en is afstand-beperkt"
        },
        {
          en: "It's vulnerable to classical attacks",
          es: "Es vulnerable a ataques clásicos",
          de: "Es ist anfällig für klassische Angriffe",
          nl: "Het is kwetsbaar voor klassieke aanvallen"
        },
        {
          en: "It uses too much energy",
          es: "Usa demasiada energía",
          de: "Es verbraucht zu viel Energie",
          nl: "Het gebruikt te veel energie"
        }
      ],
      correct: 1,
      explanation: {
        en: "QKD requires specialized quantum hardware (photon sources, detectors, quantum channels) and is fundamentally limited by distance due to photon loss, making it challenging for widespread practical deployment.",
        es: "QKD requiere hardware cuántico especializado (fuentes de fotones, detectores, canales cuánticos) y está fundamentalmente limitado por la distancia debido a la pérdida de fotones, haciéndolo desafiante para despliegue práctico generalizado.",
        de: "QKD erfordert spezialisierte Quantenhardware (Photonenquellen, Detektoren, Quantenkanäle) und ist grundlegend durch Entfernung aufgrund von Photonenverlust begrenzt, was es für eine weit verbreitete praktische Bereitstellung herausfordernd macht.",
        nl: "QKD vereist gespecialiseerde quantumhardware (fotonbronnen, detectoren, quantumkanalen) en is fundamenteel beperkt door afstand vanwege fotonverlies, waardoor het uitdagend is voor wijdverspreide praktische implementatie."
      }
    },
    {
      question: {
        en: "What is the main advantage of attribute-based encryption (ABE)?",
        es: "¿Cuál es la principal ventaja del cifrado basado en atributos (ABE)?",
        de: "Was ist der Hauptvorteil attributbasierter Verschlüsselung (ABE)?",
        nl: "Wat is het hoofdvoordeel van attribuut-gebaseerde versleuteling (ABE)?"
      },
      options: [
        {
          en: "It's faster than traditional encryption",
          es: "Es más rápido que el cifrado tradicional",
          de: "Es ist schneller als traditionelle Verschlüsselung",
          nl: "Het is sneller dan traditionele versleuteling"
        },
        {
          en: "It enables fine-grained access control based on user attributes",
          es: "Permite control de acceso de grano fino basado en atributos de usuario",
          de: "Es ermöglicht feinkörnige Zugriffskontrolle basierend auf Benutzerattributen",
          nl: "Het maakt fijnkorrelige toegangscontrole mogelijk gebaseerd op gebruikersattributen"
        },
        {
          en: "It uses smaller keys",
          es: "Usa claves más pequeñas",
          de: "Es verwendet kleinere Schlüssel",
          nl: "Het gebruikt kleinere sleutels"
        },
        {
          en: "It provides quantum resistance",
          es: "Proporciona resistencia cuántica",
          de: "Es bietet Quantenresistenz",
          nl: "Het biedt quantum weerstand"
        }
      ],
      correct: 1,
      explanation: {
        en: "ABE allows encryption policies to be defined using attributes (like role, department, clearance level), enabling fine-grained access control where only users with the required attribute combinations can decrypt data.",
        es: "ABE permite que las políticas de cifrado se definan usando atributos (como rol, departamento, nivel de autorización), habilitando control de acceso de grano fino donde solo usuarios con las combinaciones de atributos requeridas pueden descifrar datos.",
        de: "ABE ermöglicht es, Verschlüsselungsrichtlinien mit Attributen (wie Rolle, Abteilung, Berechtigungsebene) zu definieren und ermöglicht feinkörnige Zugriffskontrolle, bei der nur Benutzer mit den erforderlichen Attributkombinationen Daten entschlüsseln können.",
        nl: "ABE maakt het mogelijk versleutelingsbeleid te definiëren met attributen (zoals rol, afdeling, autorisatieniveau), wat fijnkorrelige toegangscontrole mogelijk maakt waarbij alleen gebruikers met de vereiste attribuutcombinaties data kunnen ontsleutelen."
      }
    },
    {
      question: {
        en: "What is the main purpose of a distributed key generation (DKG) protocol?",
        es: "¿Cuál es el propósito principal de un protocolo de generación distribuida de claves (DKG)?",
        de: "Was ist der Hauptzweck eines Distributed Key Generation (DKG) Protokolls?",
        nl: "Wat is het hoofddoel van een distributed key generation (DKG) protocol?"
      },
      options: [
        {
          en: "To generate keys faster",
          es: "Generar claves más rápido",
          de: "Schlüssel schneller zu generieren",
          nl: "Sleutels sneller genereren"
        },
        {
          en: "To generate shared keys without any party knowing the complete secret",
          es: "Generar claves compartidas sin que ninguna parte conozca el secreto completo",
          de: "Gemeinsame Schlüssel zu generieren, ohne dass eine Partei das vollständige Geheimnis kennt",
          nl: "Gedeelde sleutels genereren zonder dat een partij het volledige geheim kent"
        },
        {
          en: "To compress generated keys",
          es: "Comprimir claves generadas",
          de: "Generierte Schlüssel zu komprimieren",
          nl: "Gegenereerde sleutels comprimeren"
        },
        {
          en: "To validate key correctness",
          es: "Validar la corrección de claves",
          de: "Schlüsselkorrektheit zu validieren",
          nl: "Sleutelcorrectheid valideren"
        }
      ],
      correct: 1,
      explanation: {
        en: "DKG protocols allow multiple parties to collaboratively generate a shared cryptographic key such that no single party learns the complete secret key, eliminating trust requirements for key generation.",
        es: "Los protocolos DKG permiten a múltiples partes generar colaborativamente una clave criptográfica compartida de tal manera que ninguna parte individual aprende la clave secreta completa, eliminando los requisitos de confianza para generación de claves.",
        de: "DKG-Protokolle ermöglichen es mehreren Parteien, gemeinsam einen geteilten kryptographischen Schlüssel zu generieren, so dass keine einzelne Partei den vollständigen geheimen Schlüssel lernt, wodurch Vertrauensanforderungen für die Schlüsselgenerierung eliminiert werden.",
        nl: "DKG-protocollen stellen meerdere partijen in staat gezamenlijk een gedeelde cryptografische sleutel te genereren zodanig dat geen enkele partij de complete geheime sleutel leert, waardoor vertrouwensvereisten voor sleutelgeneratie worden weggenomen."
      }
    },
    {
      question: {
        en: "What is the primary security concern with side-channel attacks on smart cards?",
        es: "¿Cuál es la principal preocupación de seguridad con ataques de canal lateral en tarjetas inteligentes?",
        de: "Was ist das Hauptsicherheitsproblem bei Seitenkanalangriffen auf Smart Cards?",
        nl: "Wat is de primaire beveiligingszorg bij zijkanaal aanvallen op smart cards?"
      },
      options: [
        {
          en: "They slow down the card's performance",
          es: "Ralentizan el rendimiento de la tarjeta",
          de: "Sie verlangsamen die Leistung der Karte",
          nl: "Ze vertragen de prestaties van de kaart"
        },
        {
          en: "They can reveal secret keys through physical measurements",
          es: "Pueden revelar claves secretas a través de mediciones físicas",
          de: "Sie können geheime Schlüssel durch physische Messungen preisgeben",
          nl: "Ze kunnen geheime sleutels onthullen door fysieke metingen"
        },
        {
          en: "They damage the card's hardware",
          es: "Dañan el hardware de la tarjeta",
          de: "Sie beschädigen die Hardware der Karte",
          nl: "Ze beschadigen de hardware van de kaart"
        },
        {
          en: "They prevent normal card operations",
          es: "Previenen operaciones normales de la tarjeta",
          de: "Sie verhindern normale Kartenoperationen",
          nl: "Ze voorkomen normale kaartoperaties"
        }
      ],
      correct: 1,
      explanation: {
        en: "Side-channel attacks on smart cards can extract secret keys by analyzing physical characteristics like power consumption, electromagnetic emissions, or timing during cryptographic operations, bypassing logical security measures.",
        es: "Los ataques de canal lateral en tarjetas inteligentes pueden extraer claves secretas analizando características físicas como consumo de energía, emisiones electromagnéticas o temporización durante operaciones criptográficas, evitando las medidas de seguridad lógicas.",
        de: "Seitenkanalangriffe auf Smart Cards können geheime Schlüssel extrahieren, indem sie physische Eigenschaften wie Stromverbrauch, elektromagnetische Emissionen oder Timing während kryptographischer Operationen analysieren und dabei logische Sicherheitsmaßnahmen umgehen.",
        nl: "Zijkanaal aanvallen op smart cards kunnen geheime sleutels extraheren door fysieke kenmerken zoals stroomverbruik, elektromagnetische emissies of timing tijdens cryptografische operaties te analyseren, waardoor logische beveiligingsmaatregelen worden omzeild."
      }
    },
    {
      question: {
        en: "What is the main security concern with using deterministic encryption?",
        es: "¿Cuál es la principal preocupación de seguridad con el uso de cifrado determinista?",
        de: "Was ist das Hauptsicherheitsproblem bei der Verwendung deterministischer Verschlüsselung?",
        nl: "Wat is de hoofdbeveiligingszorg bij het gebruik van deterministische versleuteling?"
      },
      options: [
        {
          en: "It's too slow for practical use",
          es: "Es demasiado lento para uso práctico",
          de: "Es ist zu langsam für praktischen Einsatz",
          nl: "Het is te langzaam voor praktisch gebruik"
        },
        {
          en: "Identical plaintexts produce identical ciphertexts, revealing patterns",
          es: "Textos planos idénticos producen textos cifrados idénticos, revelando patrones",
          de: "Identische Klartexte erzeugen identische Chiffrate und offenbaren Muster",
          nl: "Identieke platte teksten produceren identieke cijferteksten, waardoor patronen worden onthuld"
        },
        {
          en: "It requires larger keys",
          es: "Requiere claves más grandes",
          de: "Es benötigt größere Schlüssel",
          nl: "Het vereist grotere sleutels"
        },
        {
          en: "It's incompatible with modern systems",
          es: "Es incompatible con sistemas modernos",
          de: "Es ist inkompatibel mit modernen Systemen",
          nl: "Het is incompatibel met moderne systemen"
        }
      ],
      correct: 1,
      explanation: {
        en: "Deterministic encryption always produces the same ciphertext for the same plaintext and key, allowing attackers to identify repeated data patterns and potentially infer information about the encrypted content.",
        es: "El cifrado determinista siempre produce el mismo texto cifrado para el mismo texto plano y clave, permitiendo a los atacantes identificar patrones de datos repetidos y potencialmente inferir información sobre el contenido cifrado.",
        de: "Deterministische Verschlüsselung erzeugt immer dasselbe Chiffrat für denselben Klartext und Schlüssel, wodurch Angreifer wiederholte Datenmuster identifizieren und möglicherweise Informationen über den verschlüsselten Inhalt ableiten können.",
        nl: "Deterministische versleuteling produceert altijd dezelfde cijfertekst voor dezelfde platte tekst en sleutel, waardoor aanvallers herhaalde datapatronen kunnen identificeren en mogelijk informatie over de versleutelde inhoud kunnen afleiden."
      }
    },
    {
      question: {
        en: "What is the main purpose of secure computation on encrypted data (FHE)?",
        es: "¿Cuál es el propósito principal de la computación segura en datos cifrados (FHE)?",
        de: "Was ist der Hauptzweck sicherer Berechnung auf verschlüsselten Daten (FHE)?",
        nl: "Wat is het hoofddoel van veilige berekening op versleutelde data (FHE)?"
      },
      options: [
        {
          en: "To encrypt data faster",
          es: "Cifrar datos más rápido",
          de: "Daten schneller zu verschlüsseln",
          nl: "Data sneller versleutelen"
        },
        {
          en: "To enable arbitrary computations on encrypted data without decryption",
          es: "Permitir cálculos arbitrarios en datos cifrados sin descifrado",
          de: "Beliebige Berechnungen auf verschlüsselten Daten ohne Entschlüsselung zu ermöglichen",
          nl: "Willekeurige berekeningen op versleutelde data mogelijk maken zonder ontsleuteling"
        },
        {
          en: "To compress encrypted data",
          es: "Comprimir datos cifrados",
          de: "Verschlüsselte Daten zu komprimieren",
          nl: "Versleutelde data comprimeren"
        },
        {
          en: "To validate data integrity only",
          es: "Solo validar integridad de datos",
          de: "Nur Datenintegrität zu validieren",
          nl: "Alleen data-integriteit valideren"
        }
      ],
      correct: 1,
      explanation: {
        en: "Fully Homomorphic Encryption (FHE) allows performing arbitrary computations on encrypted data while maintaining the encryption, enabling cloud computing and data processing without exposing sensitive information to the service provider.",
        es: "El Cifrado Totalmente Homomórfico (FHE) permite realizar cálculos arbitrarios en datos cifrados mientras mantiene el cifrado, habilitando computación en la nube y procesamiento de datos sin exponer información sensible al proveedor del servicio.",
        de: "Fully Homomorphic Encryption (FHE) ermöglicht die Durchführung beliebiger Berechnungen auf verschlüsselten Daten unter Beibehaltung der Verschlüsselung, wodurch Cloud-Computing und Datenverarbeitung ohne Preisgabe sensibler Informationen an den Dienstanbieter möglich wird.",
        nl: "Fully Homomorphic Encryption (FHE) maakt het mogelijk willekeurige berekeningen uit te voeren op versleutelde data terwijl de versleuteling behouden blijft, waardoor cloud computing en dataverwerking mogelijk wordt zonder gevoelige informatie bloot te stellen aan de serviceprovider."
      }
    },
    {
      question: {
        en: "What is the main advantage of proxy re-encryption?",
        es: "¿Cuál es la principal ventaja del re-cifrado por proxy?",
        de: "Was ist der Hauptvorteil der Proxy-Re-Verschlüsselung?",
        nl: "Wat is het hoofdvoordeel van proxy re-encryption?"
      },
      options: [
        {
          en: "It's faster than regular encryption",
          es: "Es más rápido que el cifrado regular",
          de: "Es ist schneller als reguläre Verschlüsselung",
          nl: "Het is sneller dan reguliere versleuteling"
        },
        {
          en: "It allows secure delegation of decryption rights without sharing private keys",
          es: "Permite delegación segura de derechos de descifrado sin compartir claves privadas",
          de: "Es ermöglicht sichere Delegation von Entschlüsselungsrechten ohne Teilen privater Schlüssel",
          nl: "Het maakt veilige delegatie van ontsleutelingsrechten mogelijk zonder private sleutels te delen"
        },
        {
          en: "It uses smaller keys",
          es: "Usa claves más pequeñas",
          de: "Es verwendet kleinere Schlüssel",
          nl: "Het gebruikt kleinere sleutels"
        },
        {
          en: "It provides quantum resistance",
          es: "Proporciona resistencia cuántica",
          de: "Es bietet Quantenresistenz",
          nl: "Het biedt quantum weerstand"
        }
      ],
      correct: 1,
      explanation: {
        en: "Proxy re-encryption allows a third party (proxy) to transform ciphertext encrypted under one key into ciphertext encrypted under another key, enabling secure access delegation without exposing private keys to the proxy.",
        es: "El re-cifrado por proxy permite a un tercero (proxy) transformar texto cifrado bajo una clave en texto cifrado bajo otra clave, habilitando delegación de acceso segura sin exponer claves privadas al proxy.",
        de: "Proxy-Re-Verschlüsselung ermöglicht es einem Dritten (Proxy), unter einem Schlüssel verschlüsselten Chiffretext in unter einem anderen Schlüssel verschlüsselten Chiffretext zu transformieren, wodurch sichere Zugriffsdelegation ohne Preisgabe privater Schlüssel an den Proxy möglich wird.",
        nl: "Proxy re-encryption stelt een derde partij (proxy) in staat cijfertekst versleuteld onder een sleutel te transformeren naar cijfertekst versleuteld onder een andere sleutel, waardoor veilige toegangsdelegatie mogelijk wordt zonder private sleutels bloot te stellen aan de proxy."
      }
    },
    {
      question: {
        en: "What is the main purpose of searchable symmetric encryption (SSE)?",
        es: "¿Cuál es el propósito principal del cifrado simétrico buscable (SSE)?",
        de: "Was ist der Hauptzweck durchsuchbarer symmetrischer Verschlüsselung (SSE)?",
        nl: "Wat is het hoofddoel van doorzoekbare symmetrische versleuteling (SSE)?"
      },
      options: [
        {
          en: "To encrypt data faster",
          es: "Cifrar datos más rápido",
          de: "Daten schneller zu verschlüsseln",
          nl: "Data sneller versleutelen"
        },
        {
          en: "To enable keyword searches on encrypted data without decryption",
          es: "Permitir búsquedas por palabra clave en datos cifrados sin descifrado",
          de: "Schlüsselwortsuchen auf verschlüsselten Daten ohne Entschlüsselung zu ermöglichen",
          nl: "Zoekwoord zoekopdrachten op versleutelde data mogelijk maken zonder ontsleuteling"
        },
        {
          en: "To compress encrypted files",
          es: "Comprimir archivos cifrados",
          de: "Verschlüsselte Dateien zu komprimieren",
          nl: "Versleutelde bestanden comprimeren"
        },
        {
          en: "To validate data checksums",
          es: "Validar sumas de verificación de datos",
          de: "Daten-Checksummen zu validieren",
          nl: "Data checksums valideren"
        }
      ],
      correct: 1,
      explanation: {
        en: "SSE allows clients to search for specific keywords in encrypted databases stored on untrusted servers without revealing the data or search patterns to the server, maintaining privacy while enabling functionality.",
        es: "SSE permite a los clientes buscar palabras clave específicas en bases de datos cifradas almacenadas en servidores no confiables sin revelar los datos o patrones de búsqueda al servidor, manteniendo privacidad mientras habilita funcionalidad.",
        de: "SSE ermöglicht es Clients, nach spezifischen Schlüsselwörtern in verschlüsselten Datenbanken auf nicht vertrauenswürdigen Servern zu suchen, ohne die Daten oder Suchmuster an den Server preiszugeben, wodurch Privatsphäre erhalten und Funktionalität ermöglicht wird.",
        nl: "SSE stelt klanten in staat specifieke trefwoorden te zoeken in versleutelde databases opgeslagen op niet-vertrouwde servers zonder de data of zoekpatronen aan de server te onthullen, waarbij privacy behouden blijft terwijl functionaliteit mogelijk wordt."
      }
    },
    {
      question: {
        en: "What is the primary security benefit of using format-preserving encryption (FPE)?",
        es: "¿Cuál es el principal beneficio de seguridad de usar cifrado que preserva formato (FPE)?",
        de: "Was ist der Hauptsicherheitsvorteil der Verwendung formaterhaltender Verschlüsselung (FPE)?",
        nl: "Wat is het hoofdbeveiligingsvoordeel van het gebruik van formaat-behoudende versleuteling (FPE)?"
      },
      options: [
        {
          en: "It's faster than standard encryption",
          es: "Es más rápido que el cifrado estándar",
          de: "Es ist schneller als Standardverschlüsselung",
          nl: "Het is sneller dan standaardversleuteling"
        },
        {
          en: "It allows encryption while maintaining data format for legacy systems",
          es: "Permite cifrado mientras mantiene el formato de datos para sistemas heredados",
          de: "Es ermöglicht Verschlüsselung unter Beibehaltung des Datenformats für Legacy-Systeme",
          nl: "Het maakt versleuteling mogelijk terwijl het dataformaat behouden blijft voor legacy systemen"
        },
        {
          en: "It uses smaller keys",
          es: "Usa claves más pequeñas",
          de: "Es verwendet kleinere Schlüssel",
          nl: "Het gebruikt kleinere sleutels"
        },
        {
          en: "It provides quantum resistance",
          es: "Proporciona resistencia cuántica",
          de: "Es bietet Quantenresistenz",
          nl: "Het biedt quantum weerstand"
        }
      ],
      correct: 1,
      explanation: {
        en: "FPE encrypts data while preserving its original format (like credit card numbers remaining 16 digits), allowing encrypted data to be used in existing systems without modification while maintaining security.",
        es: "FPE cifra datos mientras preserva su formato original (como números de tarjetas de crédito que permanecen de 16 dígitos), permitiendo que los datos cifrados se usen en sistemas existentes sin modificación mientras mantiene seguridad.",
        de: "FPE verschlüsselt Daten unter Beibehaltung ihres ursprünglichen Formats (wie Kreditkartennummern, die 16-stellig bleiben), wodurch verschlüsselte Daten in bestehenden Systemen ohne Änderung verwendet werden können, während die Sicherheit erhalten bleibt.",
        nl: "FPE versleutelt data terwijl het oorspronkelijke formaat behouden blijft (zoals creditcardnummers die 16 cijfers blijven), waardoor versleutelde data gebruikt kan worden in bestaande systemen zonder modificatie terwijl beveiliging behouden blijft."
      }
    },
    {
      question: {
        en: "What is the main purpose of ring signatures in cryptography?",
        es: "¿Cuál es el propósito principal de las firmas de anillo en criptografía?",
        de: "Was ist der Hauptzweck von Ringsignaturen in der Kryptographie?",
        nl: "Wat is het hoofddoel van ring handtekeningen in cryptografie?"
      },
      options: [
        {
          en: "To encrypt messages faster",
          es: "Cifrar mensajes más rápido",
          de: "Nachrichten schneller zu verschlüsseln",
          nl: "Berichten sneller versleutelen"
        },
        {
          en: "To provide anonymous signatures from a group without revealing the actual signer",
          es: "Proporcionar firmas anónimas de un grupo sin revelar el firmante real",
          de: "Anonyme Signaturen von einer Gruppe bereitzustellen, ohne den tatsächlichen Unterzeichner preiszugeben",
          nl: "Anonieme handtekeningen van een groep bieden zonder de werkelijke ondertekenaar te onthullen"
        },
        {
          en: "To compress digital signatures",
          es: "Comprimir firmas digitales",
          de: "Digitale Signaturen zu komprimieren",
          nl: "Digitale handtekeningen comprimeren"
        },
        {
          en: "To validate certificate chains",
          es: "Validar cadenas de certificados",
          de: "Zertifikatsketten zu validieren",
          nl: "Certificaatketens valideren"
        }
      ],
      correct: 1,
      explanation: {
        en: "Ring signatures allow any member of a group to sign a message anonymously on behalf of the group, proving the signature came from the group without revealing which specific member signed it.",
        es: "Las firmas de anillo permiten a cualquier miembro de un grupo firmar un mensaje anónimamente en nombre del grupo, probando que la firma vino del grupo sin revelar qué miembro específico la firmó.",
        de: "Ringsignaturen ermöglichen es jedem Mitglied einer Gruppe, eine Nachricht anonym im Namen der Gruppe zu signieren und zu beweisen, dass die Signatur von der Gruppe stammt, ohne preiszugeben, welches spezifische Mitglied sie signiert hat.",
        nl: "Ring handtekeningen stellen elk lid van een groep in staat een bericht anoniem te ondertekenen namens de groep, waarbij bewezen wordt dat de handtekening van de groep komt zonder te onthullen welk specifiek lid het ondertekend heeft."
      }
    },
    {
      question: {
        en: "What is the main security advantage of using blinding in cryptographic protocols?",
        es: "¿Cuál es la principal ventaja de seguridad de usar cegamiento en protocolos criptográficos?",
        de: "Was ist der Hauptsicherheitsvorteil der Verwendung von Blinding in kryptographischen Protokollen?",
        nl: "Wat is het hoofdbeveiligingsvoordeel van het gebruik van blinding in cryptografische protocollen?"
      },
      options: [
        {
          en: "It makes operations faster",
          es: "Hace las operaciones más rápidas",
          de: "Es macht Operationen schneller",
          nl: "Het maakt operaties sneller"
        },
        {
          en: "It hides the actual data being processed from the server",
          es: "Oculta los datos reales siendo procesados del servidor",
          de: "Es verbirgt die tatsächlich verarbeiteten Daten vor dem Server",
          nl: "Het verbergt de werkelijke data die verwerkt wordt voor de server"
        },
        {
          en: "It reduces memory usage",
          es: "Reduce el uso de memoria",
          de: "Es reduziert den Speicherverbrauch",
          nl: "Het vermindert geheugengebruik"
        },
        {
          en: "It provides quantum resistance",
          es: "Proporciona resistencia cuántica",
          de: "Es bietet Quantenresistenz",
          nl: "Het biedt quantum weerstand"
        }
      ],
      correct: 1,
      explanation: {
        en: "Blinding techniques transform data with random factors before processing, allowing computations to be performed on hidden values while preventing the server from learning the original data or intermediate results.",
        es: "Las técnicas de cegamiento transforman datos con factores aleatorios antes del procesamiento, permitiendo que los cálculos se realicen en valores ocultos mientras previenen que el servidor aprenda los datos originales o resultados intermedios.",
        de: "Blinding-Techniken transformieren Daten mit zufälligen Faktoren vor der Verarbeitung, wodurch Berechnungen auf versteckten Werten durchgeführt werden können, während verhindert wird, dass der Server die ursprünglichen Daten oder Zwischenergebnisse erfährt.",
        nl: "Blinding technieken transformeren data met willekeurige factoren voor verwerking, waardoor berekeningen kunnen worden uitgevoerd op verborgen waarden terwijl wordt voorkomen dat de server de originele data of tussenresultaten leert."
      }
    },
    {
      question: {
        en: "What is the main purpose of group signatures?",
        es: "¿Cuál es el propósito principal de las firmas de grupo?",
        de: "Was ist der Hauptzweck von Gruppensignaturen?",
        nl: "Wat is het hoofddoel van groep handtekeningen?"
      },
      options: [
        {
          en: "To sign multiple documents simultaneously",
          es: "Firmar múltiples documentos simultáneamente",
          de: "Mehrere Dokumente gleichzeitig zu signieren",
          nl: "Meerdere documenten tegelijkertijd ondertekenen"
        },
        {
          en: "To allow anonymous signing with group manager traceability",
          es: "Permitir firma anónima con trazabilidad del gestor de grupo",
          de: "Anonymes Signieren mit Nachverfolgbarkeit durch Gruppenmanager zu ermöglichen",
          nl: "Anoniem ondertekenen mogelijk maken met traceerbaarheid door groepsbeheerder"
        },
        {
          en: "To compress signature sizes",
          es: "Comprimir tamaños de firma",
          de: "Signaturgrößen zu komprimieren",
          nl: "Handtekeninggroottes comprimeren"
        },
        {
          en: "To validate group membership only",
          es: "Solo validar membresía de grupo",
          de: "Nur Gruppenmitgliedschaft zu validieren",
          nl: "Alleen groepslidmaatschap valideren"
        }
      ],
      correct: 1,
      explanation: {
        en: "Group signatures provide anonymity for signers within a group while allowing a designated group manager to trace the identity of signers when necessary, balancing privacy with accountability.",
        es: "Las firmas de grupo proporcionan anonimato para firmantes dentro de un grupo mientras permiten a un gestor de grupo designado rastrear la identidad de firmantes cuando sea necesario, equilibrando privacidad con responsabilidad.",
        de: "Gruppensignaturen bieten Anonymität für Unterzeichner innerhalb einer Gruppe und ermöglichen es einem designierten Gruppenmanager, die Identität der Unterzeichner bei Bedarf zu verfolgen, wodurch Privatsphäre mit Rechenschaftspflicht ausbalanciert wird.",
        nl: "Groep handtekeningen bieden anonimiteit voor ondertekenaars binnen een groep terwijl ze een aangewezen groepsbeheerder toestaan de identiteit van ondertekenaars te traceren wanneer nodig, waarbij privacy wordt gebalanceerd met verantwoording."
      }
    },
    {
      question: {
        en: "What is the main advantage of using tweakable block ciphers?",
        es: "¿Cuál es la principal ventaja de usar cifrados de bloque ajustables?",
        de: "Was ist der Hauptvorteil der Verwendung anpassbarer Blockchiffren?",
        nl: "Wat is het hoofdvoordeel van het gebruik van aanpasbare blokversleuteling?"
      },
      options: [
        {
          en: "They are faster than regular block ciphers",
          es: "Son más rápidos que los cifrados de bloque regulares",
          de: "Sie sind schneller als reguläre Blockchiffren",
          nl: "Ze zijn sneller dan gewone blokversleutelingen"
        },
        {
          en: "They provide domain separation and prevent certain attacks through tweaks",
          es: "Proporcionan separación de dominio y previenen ciertos ataques a través de ajustes",
          de: "Sie bieten Domaintrennung und verhindern bestimmte Angriffe durch Tweaks",
          nl: "Ze bieden domeinscheiding en voorkomen bepaalde aanvallen door tweaks"
        },
        {
          en: "They use smaller keys",
          es: "Usan claves más pequeñas",
          de: "Sie verwenden kleinere Schlüssel",
          nl: "Ze gebruiken kleinere sleutels"
        },
        {
          en: "They provide quantum resistance",
          es: "Proporcionan resistencia cuántica",
          de: "Sie bieten Quantenresistenz",
          nl: "Ze bieden quantum weerstand"
        }
      ],
      correct: 1,
      explanation: {
        en: "Tweakable block ciphers use an additional 'tweak' parameter along with the key, providing domain separation and preventing attacks that rely on relationships between encryptions of related plaintexts.",
        es: "Los cifrados de bloque ajustables usan un parámetro 'ajuste' adicional junto con la clave, proporcionando separación de dominio y previniendo ataques que dependen de relaciones entre cifradores de textos planos relacionados.",
        de: "Anpassbare Blockchiffren verwenden einen zusätzlichen 'Tweak'-Parameter zusammen mit dem Schlüssel, wodurch Domaintrennung bereitgestellt und Angriffe verhindert werden, die auf Beziehungen zwischen Verschlüsselungen verwandter Klartexte basieren.",
        nl: "Aanpasbare blokversleutelingen gebruiken een extra 'tweak' parameter samen met de sleutel, wat domeinscheiding biedt en aanvallen voorkomt die afhankelijk zijn van relaties tussen versleutelingen van gerelateerde platte teksten."
      }
    },
    {
      question: {
        en: "What is the main purpose of cryptographic obfuscation?",
        es: "¿Cuál es el propósito principal de la ofuscación criptográfica?",
        de: "Was ist der Hauptzweck kryptographischer Obfuskation?",
        nl: "Wat is het hoofddoel van cryptografische obfuscatie?"
      },
      options: [
        {
          en: "To compress cryptographic algorithms",
          es: "Comprimir algoritmos criptográficos",
          de: "Kryptographische Algorithmen zu komprimieren",
          nl: "Cryptografische algoritmen comprimeren"
        },
        {
          en: "To hide the internal structure and functionality of programs while preserving their behavior",
          es: "Ocultar la estructura interna y funcionalidad de programas mientras preserva su comportamiento",
          de: "Die interne Struktur und Funktionalität von Programmen zu verbergen, während ihr Verhalten erhalten bleibt",
          nl: "De interne structuur en functionaliteit van programma's verbergen terwijl hun gedrag behouden blijft"
        },
        {
          en: "To make programs run faster",
          es: "Hacer que los programas corran más rápido",
          de: "Programme schneller laufen zu lassen",
          nl: "Programma's sneller laten werken"
        },
        {
          en: "To reduce memory usage",
          es: "Reducir el uso de memoria",
          de: "Den Speicherverbrauch zu reduzieren",
          nl: "Geheugengebruik verminderen"
        }
      ],
      correct: 1,
      explanation: {
        en: "Cryptographic obfuscation aims to make programs 'unintelligible' while preserving functionality, potentially enabling applications like software protection, secure delegation of computation, and eliminating trusted parties in certain protocols.",
        es: "La ofuscación criptográfica tiene como objetivo hacer programas 'ininteligibles' mientras preserva la funcionalidad, potencialmente habilitando aplicaciones como protección de software, delegación segura de computación y eliminando partes confiables en ciertos protocolos.",
        de: "Kryptographische Obfuskation zielt darauf ab, Programme 'unverständlich' zu machen, während die Funktionalität erhalten bleibt, wodurch möglicherweise Anwendungen wie Softwareschutz, sichere Delegation von Berechnungen und Elimination vertrauenswürdiger Parteien in bestimmten Protokollen ermöglicht werden.",
        nl: "Cryptografische obfuscatie heeft als doel programma's 'onbegrijpelijk' te maken terwijl functionaliteit behouden blijft, mogelijk toepassingen mogelijk makend zoals softwarebeveiliging, veilige delegatie van berekening en eliminatie van vertrouwde partijen in bepaalde protocollen."
      }
    },
    {
      question: {
        en: "What is the fundamental security assumption underlying most lattice-based cryptography?",
        es: "¿Cuál es la asunción de seguridad fundamental que subyace a la mayoría de la criptografía basada en retículos?",
        de: "Was ist die grundlegende Sicherheitsannahme der meisten gitterbasierten Kryptographie?",
        nl: "Wat is de fundamentele beveiligingsaanname die ten grondslag ligt aan de meeste rooster-gebaseerde cryptografie?"
      },
      options: [
        { en: "Learning With Errors (LWE) problem hardness", es: "Dureza del problema Learning With Errors (LWE)", de: "Härte des Learning With Errors (LWE) Problems", nl: "Hardheid van het Learning With Errors (LWE) probleem" },
        { en: "Discrete logarithm problem in finite fields", es: "Problema del logaritmo discreto en campos finitos", de: "Diskretes Logarithmusproblem in endlichen Körpern", nl: "Discreet logaritme probleem in eindige velden" },
        { en: "Integer factorization complexity", es: "Complejidad de factorización de enteros", de: "Ganzzahlfaktorisierungs-Komplexität", nl: "Integer factorisatie complexiteit" },
        { en: "Elliptic curve discrete logarithm hardness", es: "Dureza del logaritmo discreto de curva elíptica", de: "Härte des diskreten Logarithmus auf elliptischen Kurven", nl: "Elliptische curve discreet logaritme hardheid" }
      ],
      correct: 0,
      explanation: {
        en: "Lattice-based cryptography primarily relies on the Learning With Errors (LWE) problem and its variants, which remain difficult even for quantum computers, making them promising for post-quantum cryptography.",
        es: "La criptografía basada en retículos se basa principalmente en el problema Learning With Errors (LWE) y sus variantes, que siguen siendo difíciles incluso para computadoras cuánticas, haciéndolos prometedores para la criptografía post-cuántica.",
        de: "Gitterbasierte Kryptographie beruht hauptsächlich auf dem Learning With Errors (LWE) Problem und seinen Varianten, die auch für Quantencomputer schwierig bleiben, wodurch sie vielversprechend für Post-Quanten-Kryptographie sind.",
        nl: "Rooster-gebaseerde cryptografie berust voornamelijk op het Learning With Errors (LWE) probleem en zijn varianten, die moeilijk blijven zelfs voor kwantumcomputers, waardoor ze veelbelovend zijn voor post-kwantum cryptografie."
      }
    },
    {
      question: {
        en: "Which protocol property ensures that a malicious party cannot learn more than what is implied by their inputs and outputs?",
        es: "¿Qué propiedad de protocolo asegura que una parte maliciosa no pueda aprender más de lo que está implicado por sus entradas y salidas?",
        de: "Welche Protokolleigenschaft stellt sicher, dass eine bösartige Partei nicht mehr lernen kann, als durch ihre Ein- und Ausgaben impliziert ist?",
        nl: "Welke protocoleigenschap zorgt ervoor dat een kwaadwillende partij niet meer kan leren dan wat geïmpliceerd wordt door hun invoer en uitvoer?"
      },
      options: [
        { en: "Simulation-based security (privacy)", es: "Seguridad basada en simulación (privacidad)", de: "Simulationsbasierte Sicherheit (Privatsphäre)", nl: "Simulatie-gebaseerde beveiliging (privacy)" },
        { en: "Computational indistinguishability", es: "Indistinguibilidad computacional", de: "Rechnerische Ununterscheidbarkeit", nl: "Computationele ononderscheidbaarheid" },
        { en: "Perfect forward secrecy", es: "Secreto perfecto hacia adelante", de: "Perfekte Vorwärtssicherheit", nl: "Perfecte voorwaartse geheimhouding" },
        { en: "Non-malleability property", es: "Propiedad de no maleabilidad", de: "Nicht-Formbarkeits-Eigenschaft", nl: "Niet-vervormbaarheidseigenschap" }
      ],
      correct: 0,
      explanation: {
        en: "Simulation-based security (privacy) in secure multi-party computation ensures that adversaries learn nothing beyond what can be inferred from their legitimate inputs and the protocol's output, proven through simulator constructions.",
        es: "La seguridad basada en simulación (privacidad) en computación multi-partidaria segura asegura que los adversarios no aprendan nada más allá de lo que puede inferirse de sus entradas legítimas y la salida del protocolo, probado a través de construcciones de simulador.",
        de: "Simulationsbasierte Sicherheit (Privatsphäre) in sicherer Mehrparteien-Berechnung stellt sicher, dass Angreifer nichts über das hinaus lernen, was aus ihren legitimen Eingaben und der Protokollausgabe abgeleitet werden kann, bewiesen durch Simulator-Konstruktionen.",
        nl: "Simulatie-gebaseerde beveiliging (privacy) in veilige multi-partij berekening zorgt ervoor dat tegenstanders niets leren behalve wat afgeleid kan worden uit hun legitieme invoer en de uitvoer van het protocol, bewezen door simulator constructies."
      }
    },
    {
      question: {
        en: "What is the primary advantage of ring signatures over group signatures?",
        es: "¿Cuál es la ventaja principal de las firmas de anillo sobre las firmas de grupo?",
        de: "Was ist der Hauptvorteil von Ringsignaturen gegenüber Gruppensignaturen?",
        nl: "Wat is het belangrijkste voordeel van ringsignaturen ten opzichte van groepsignaturen?"
      },
      options: [
        { en: "No trusted setup or group manager required", es: "No se requiere configuración de confianza o administrador de grupo", de: "Keine vertrauenswürdige Einrichtung oder Gruppenverwalter erforderlich", nl: "Geen vertrouwde setup of groepsbeheerder vereist" },
        { en: "Smaller signature sizes for equivalent security", es: "Tamaños de firma más pequeños para seguridad equivalente", de: "Kleinere Signaturgrößen für äquivalente Sicherheit", nl: "Kleinere handtekeninggroottes voor equivalente beveiliging" },
        { en: "Faster verification algorithms", es: "Algoritmos de verificación más rápidos", de: "Schnellere Verifikationsalgorithmen", nl: "Snellere verificatie algoritmen" },
        { en: "Built-in key escrow capabilities", es: "Capacidades de custodia de claves incorporadas", de: "Eingebaute Schlüssel-Hinterlegungsfähigkeiten", nl: "Ingebouwde sleutel borgstellingscapaciteiten" }
      ],
      correct: 0,
      explanation: {
        en: "Ring signatures provide spontaneous anonymity without requiring a trusted group manager or setup phase. Any user can form a ring using others' public keys and sign anonymously, unlike group signatures which need centralized management.",
        es: "Las firmas de anillo proporcionan anonimato espontáneo sin requerir un administrador de grupo de confianza o fase de configuración. Cualquier usuario puede formar un anillo usando las claves públicas de otros y firmar anónimamente, a diferencia de las firmas de grupo que necesitan gestión centralizada.",
        de: "Ringsignaturen bieten spontane Anonymität ohne einen vertrauenswürdigen Gruppenverwalter oder Setup-Phase zu benötigen. Jeder Benutzer kann einen Ring mit anderen öffentlichen Schlüsseln bilden und anonym signieren, im Gegensatz zu Gruppensignaturen, die zentralisierte Verwaltung benötigen.",
        nl: "Ringsignaturen bieden spontane anonimiteit zonder een vertrouwde groepsbeheerder of setup fase te vereisen. Elke gebruiker kan een ring vormen met andermans openbare sleutels en anoniem ondertekenen, in tegenstelling tot groepsignaturen die gecentraliseerd beheer nodig hebben."
      }
    },
    {
      question: {
        en: "What is the key innovation of the Signal Protocol's Double Ratchet algorithm?",
        es: "¿Cuál es la innovación clave del algoritmo Double Ratchet del Protocolo Signal?",
        de: "Was ist die Schlüsselinnovation des Double Ratchet Algorithmus des Signal-Protokolls?",
        nl: "Wat is de belangrijkste innovatie van het Double Ratchet algoritme van het Signal Protocol?"
      },
      options: [
        { en: "Forward secrecy and post-compromise security through continuous key evolution", es: "Secreto hacia adelante y seguridad post-compromiso a través de evolución continua de claves", de: "Vorwärtssicherheit und Post-Kompromiss-Sicherheit durch kontinuierliche Schlüsseletevolution", nl: "Voorwaartse geheimhouding en post-compromis beveiliging door continue sleutelevolutie" },
        { en: "Quantum-resistant encryption using lattice-based primitives", es: "Cifrado resistente a cuánticos usando primitivas basadas en retículos", de: "Quantenresistente Verschlüsselung mit gitterbasierten Primitiven", nl: "Kwantumresistente versleuteling met rooster-gebaseerde primitieven" },
        { en: "Zero-knowledge authentication without password exchange", es: "Autenticación de conocimiento cero sin intercambio de contraseñas", de: "Zero-Knowledge-Authentifizierung ohne Passwort-Austausch", nl: "Zero-knowledge authenticatie zonder wachtwoord uitwisseling" },
        { en: "Homomorphic encryption for secure computation over encrypted data", es: "Cifrado homomorfó para computación segura sobre datos cifrados", de: "Homomorphe Verschlüsselung für sichere Berechnung über verschlüsselte Daten", nl: "Homomorfische versleuteling voor veilige berekening over versleutelde data" }
      ],
      correct: 0,
      explanation: {
        en: "The Double Ratchet combines Diffie-Hellman ratcheting (forward secrecy) with symmetric ratcheting (immediate key deletion) to provide both forward secrecy and post-compromise security, ensuring message security even if keys are compromised.",
        es: "El Double Ratchet combina ratcheting Diffie-Hellman (secreto hacia adelante) con ratcheting simétrico (eliminación inmediata de claves) para proporcionar tanto secreto hacia adelante como seguridad post-compromiso, asegurando seguridad de mensajes incluso si las claves se ven comprometidas.",
        de: "Das Double Ratchet kombiniert Diffie-Hellman-Ratcheting (Vorwärtssicherheit) mit symmetrischem Ratcheting (sofortige Schlüssellöschung) um sowohl Vorwärtssicherheit als auch Post-Kompromiss-Sicherheit zu bieten, wodurch Nachrichtensicherheit auch bei kompromittierten Schlüsseln gewährleistet wird.",
        nl: "Het Double Ratchet combineert Diffie-Hellman ratcheting (voorwaartse geheimhouding) met symmetrisch ratcheting (onmiddellijke sleutelverwijdering) om zowel voorwaartse geheimhouding als post-compromis beveiliging te bieden, berichtbeveiliging verzekeren zelfs als sleutels gecompromitteerd zijn."
      }
    },
    {
      question: {
        en: "Which property distinguishes identity-based encryption from traditional public key cryptography?",
        es: "¿Qué propiedad distingue el cifrado basado en identidad de la criptografía de clave pública tradicional?",
        de: "Welche Eigenschaft unterscheidet identitätsbasierte Verschlüsselung von traditioneller öffentlicher Schlüssel-Kryptographie?",
        nl: "Welke eigenschap onderscheidt identiteit-gebaseerde versleuteling van traditionele openbare sleutel cryptografie?"
      },
      options: [
        { en: "Public keys can be arbitrary strings like email addresses", es: "Las claves públicas pueden ser cadenas arbitrarias como direcciones de correo electrónico", de: "Öffentliche Schlüssel können beliebige Zeichenketten wie E-Mail-Adressen sein", nl: "Openbare sleutels kunnen willekeurige strings zijn zoals e-mailadressen" },
        { en: "No certificate authorities are needed for key validation", es: "No se necesitan autoridades de certificados para validación de claves", de: "Keine Zertifizierungsstellen werden für Schlüsselvalidierung benötigt", nl: "Geen certificaatautoriteiten zijn nodig voor sleutelvalidatie" },
        { en: "Quantum resistance through lattice-based mathematics", es: "Resistencia cuántica a través de matemáticas basadas en retículos", de: "Quantenresistenz durch gitterbasierte Mathematik", nl: "Kwantumresistentie door rooster-gebaseerde wiskunde" },
        { en: "Perfect forward secrecy is automatically provided", es: "El secreto perfecto hacia adelante se proporciona automáticamente", de: "Perfekte Vorwärtssicherheit wird automatisch bereitgestellt", nl: "Perfecte voorwaartse geheimhouding wordt automatisch geboden" }
      ],
      correct: 0,
      explanation: {
        en: "Identity-based encryption allows arbitrary strings (like email addresses, names, or timestamps) to serve as public keys, eliminating the need for complex certificate infrastructure while requiring a trusted Private Key Generator (PKG) to issue private keys.",
        es: "El cifrado basado en identidad permite que cadenas arbitrarias (como direcciones de correo electrónico, nombres o marcas de tiempo) sirvan como claves públicas, eliminando la necesidad de infraestructura compleja de certificados mientras requiere un Generador de Claves Privadas (PKG) de confianza para emitir claves privadas.",
        de: "Identitätsbasierte Verschlüsselung ermöglicht beliebigen Zeichenketten (wie E-Mail-Adressen, Namen oder Zeitstempel) als öffentliche Schlüssel zu dienen, wodurch die Notwendigkeit komplexer Zertifikatsinfrastruktur eliminiert wird, während ein vertrauenswürdiger Private Key Generator (PKG) zur Ausgabe privater Schlüssel benötigt wird.",
        nl: "Identiteit-gebaseerde versleuteling stelt willekeurige strings (zoals e-mailadressen, namen of tijdstempels) in staat als openbare sleutels te dienen, waarbij de behoefte aan complexe certificaatinfrastructuur wegvalt terwijl een vertrouwde Private Key Generator (PKG) nodig is om private sleutels uit te geven."
      }
    },
    {
      question: {
        en: "What is the main security challenge in threshold cryptography implementations?",
        es: "¿Cuál es el principal desafío de seguridad en implementaciones de criptografía de umbral?",
        de: "Was ist die hauptsächliche Sicherheitsherausforderung in Schwellenwert-Kryptographie-Implementierungen?",
        nl: "Wat is de belangrijkste beveiligingsuitdaging in drempel cryptografie implementaties?"
      },
      options: [
        { en: "Preventing malicious participants from corrupting the shared computation", es: "Prevenir que participantes maliciosos corrompan la computación compartida", de: "Verhindern, dass bösartige Teilnehmer die geteilte Berechnung korrumpieren", nl: "Voorkomen dat kwaadwillende deelnemers de gedeelde berekening corrumperen" },
        { en: "Managing computational complexity of polynomial interpolation", es: "Gestionar la complejidad computacional de interpolación polinomial", de: "Verwaltung der rechnerischen Komplexität der Polynominterpolation", nl: "Beheren van computationele complexiteit van polynoom interpolatie" },
        { en: "Ensuring quantum resistance of the underlying primitives", es: "Asegurar resistencia cuántica de las primitivas subyacentes", de: "Sicherstellen der Quantenresistenz der zugrundeliegenden Primitive", nl: "Waarborgen van kwantumresistentie van de onderliggende primitieven" },
        { en: "Optimizing network bandwidth for distributed key generation", es: "Optimizar el ancho de banda de red para generación de claves distribuidas", de: "Optimierung der Netzwerkbandbreite für verteilte Schlüsselerzeugung", nl: "Optimaliseren van netwerkbandbreedte voor gedistribueerde sleutelgeneratie" }
      ],
      correct: 0,
      explanation: {
        en: "The primary security challenge in threshold cryptography is ensuring robustness against malicious participants who may attempt to provide invalid shares, disrupt the computation, or bias the final result, requiring verifiable secret sharing and zero-knowledge proofs.",
        es: "El principal desafío de seguridad en criptografía de umbral es asegurar robustez contra participantes maliciosos que pueden intentar proporcionar acciones inválidas, interrumpir la computación o sesgar el resultado final, requiriendo intercambio de secretos verificable y pruebas de conocimiento cero.",
        de: "Die hauptsächliche Sicherheitsherausforderung in Schwellenwert-Kryptographie ist die Gewährleistung von Robustheit gegen bösartige Teilnehmer, die versuchen könnten, ungültige Anteile bereitzustellen, die Berechnung zu stören oder das Endergebnis zu verzerren, was verifizierbares Secret Sharing und Zero-Knowledge-Beweise erfordert.",
        nl: "De primaire beveiligingsuitdaging in drempel cryptografie is het waarborgen van robuustheid tegen kwaadwillende deelnemers die mogelijk proberen ongeldige aandelen te verstrekken, de berekening te verstoren of het eindresultaat te beïnvloeden, wat verifieerbaar secret sharing en zero-knowledge bewijzen vereist."
      }
    },
    {
      question: {
        en: "Which cryptographic primitive enables computational integrity without revealing the computation itself?",
        es: "¿Qué primitiva criptográfica permite integridad computacional sin revelar la computación misma?",
        de: "Welche kryptographische Primitive ermöglicht rechnerische Integrität ohne die Berechnung selbst preiszugeben?",
        nl: "Welke cryptografische primitief maakt computationele integriteit mogelijk zonder de berekening zelf te onthullen?"
      },
      options: [
        { en: "Succinct Non-Interactive Arguments of Knowledge (SNARKs)", es: "Argumentos Sucintos No Interactivos de Conocimiento (SNARKs)", de: "Succinct Non-Interactive Arguments of Knowledge (SNARKs)", nl: "Succinct Non-Interactive Arguments of Knowledge (SNARKs)" },
        { en: "Homomorphic message authentication codes", es: "Códigos de autenticación de mensaje homomórficos", de: "Homomorphe Nachrichtenauthentifizierungscodes", nl: "Homomorfische bericht authenticatiecodes" },
        { en: "Merkle tree commitments with hash functions", es: "Compromisos de árbol Merkle with funciones hash", de: "Merkle-Baum-Commitments mit Hash-Funktionen", nl: "Merkle boom commitments met hash functies" },
        { en: "Digital signatures with non-repudiation properties", es: "Firmas digitales con propiedades de no repudio", de: "Digitale Signaturen mit Nicht-Abstreitbarkeits-Eigenschaften", nl: "Digitale handtekeningen met niet-ontkenning eigenschappen" }
      ],
      correct: 0,
      explanation: {
        en: "SNARKs allow proving that a computation was performed correctly without revealing the inputs, outputs, or intermediate states, enabling applications like verifiable computation, privacy-preserving blockchain transactions, and proof-of-knowledge systems.",
        es: "Los SNARKs permiten probar que una computación se realizó correctamente sin revelar las entradas, salidas o estados intermedios, habilitando aplicaciones como computación verificable, transacciones blockchain que preservan privacidad y sistemas de prueba de conocimiento.",
        de: "SNARKs ermöglichen den Beweis, dass eine Berechnung korrekt durchgeführt wurde, ohne Eingaben, Ausgaben oder Zwischenzustände preiszugeben, wodurch Anwendungen wie verifizierbare Berechnung, datenschutzerhaltende Blockchain-Transaktionen und Proof-of-Knowledge-Systeme ermöglicht werden.",
        nl: "SNARKs maken het mogelijk te bewijzen dat een berekening correct werd uitgevoerd zonder de invoer, uitvoer of tussenstates te onthullen, waardoor toepassingen mogelijk worden zoals verifieerbare berekening, privacy-bewarende blockchain transacties en proof-of-knowledge systemen."
      }
    },
    {
      question: {
        en: "What is the primary advantage of proxy re-encryption over traditional key escrow systems?",
        es: "¿Cuál es la ventaja principal de la re-encriptación proxy sobre los sistemas tradicionales de custodia de claves?",
        de: "Was ist der Hauptvorteil von Proxy-Re-Encryption gegenüber traditionellen Key-Escrow-Systemen?",
        nl: "Wat is het belangrijkste voordeel van proxy re-versleuteling ten opzichte van traditionele sleutel borgstelling systemen?"
      },
      options: [
        { en: "Delegated decryption rights without revealing private keys to the proxy", es: "Derechos de descifrado delegados sin revelar claves privadas al proxy", de: "Delegierte Entschlüsselungsrechte ohne Preisgabe privater Schlüssel an den Proxy", nl: "Gedelegeerde ontcijferingsrechten zonder private sleutels aan de proxy te onthullen" },
        { en: "Quantum-resistant security through lattice-based constructions", es: "Seguridad resistente a cuánticos a través de construcciones basadas en retículos", de: "Quantenresistente Sicherheit durch gitterbasierte Konstruktionen", nl: "Kwantumresistente beveiliging door rooster-gebaseerde constructies" },
        { en: "Perfect forward secrecy for all delegated operations", es: "Secreto perfecto hacia adelante para todas las operaciones delegadas", de: "Perfekte Vorwärtssicherheit für alle delegierten Operationen", nl: "Perfecte voorwaartse geheimhouding voor alle gedelegeerde operaties" },
        { en: "Zero-knowledge proof of correct re-encryption", es: "Prueba de conocimiento cero de re-encriptación correcta", de: "Zero-Knowledge-Beweis korrekter Re-Encryption", nl: "Zero-knowledge bewijs van correcte re-versleuteling" }
      ],
      correct: 0,
      explanation: {
        en: "Proxy re-encryption allows Alice to grant Bob access to her encrypted data through a semi-trusted proxy, without the proxy learning Alice's private key or the plaintext. The proxy transforms ciphertexts from Alice's public key to Bob's public key using a re-encryption key.",
        es: "La re-encriptación proxy permite que Alice otorgue a Bob acceso a sus datos cifrados a través de un proxy semi-confiable, sin que el proxy aprenda la clave privada de Alice o el texto plano. El proxy transforma textos cifrados de la clave pública de Alice a la clave pública de Bob usando una clave de re-encriptación.",
        de: "Proxy-Re-Encryption ermöglicht es Alice, Bob Zugang zu ihren verschlüsselten Daten über einen halb-vertrauenswürdigen Proxy zu gewähren, ohne dass der Proxy Alices privaten Schlüssel oder den Klartext lernt. Der Proxy transformiert Chiffretexte von Alices öffentlichem Schlüssel zu Bobs öffentlichem Schlüssel mit einem Re-Encryption-Schlüssel.",
        nl: "Proxy re-versleuteling stelt Alice in staat Bob toegang te verlenen tot haar versleutelde data via een semi-vertrouwde proxy, zonder dat de proxy Alice's private sleutel of de platte tekst leert. De proxy transformeert cijferteksten van Alice's openbare sleutel naar Bob's openbare sleutel met een re-versleutelingssleutel."
      }
    },
    {
      question: {
        en: "Which post-quantum cryptographic approach is based on the difficulty of finding short vectors in high-dimensional lattices?",
        es: "¿Qué enfoque criptográfico post-cuántico se basa en la dificultad de encontrar vectores cortos en retículos de alta dimensión?",
        de: "Welcher Post-Quanten-Kryptographie-Ansatz basiert auf der Schwierigkeit, kurze Vektoren in hochdimensionalen Gittern zu finden?",
        nl: "Welke post-kwantum cryptografische benadering is gebaseerd op de moeilijkheid van het vinden van korte vectoren in hoogdimensionale roosters?"
      },
      options: [
        { en: "Lattice-based cryptography using problems like SVP and CVP", es: "Criptografía basada en retículos usando problemas como SVP y CVP", de: "Gitterbasierte Kryptographie mit Problemen wie SVP und CVP", nl: "Rooster-gebaseerde cryptografie met problemen zoals SVP en CVP" },
        { en: "Code-based cryptography using error-correcting codes", es: "Criptografía basada en códigos usando códigos de corrección de errores", de: "Codebasierte Kryptographie mit fehlerkorrigierenden Codes", nl: "Code-gebaseerde cryptografie met foutcorrigerende codes" },
        { en: "Hash-based signatures using one-way functions", es: "Firmas basadas en hash usando funciones unidireccionales", de: "Hash-basierte Signaturen mit Einwegfunktionen", nl: "Hash-gebaseerde handtekeningen met eenrichtingsfuncties" },
        { en: "Isogeny-based cryptography using elliptic curve walks", es: "Criptografía basada en isogenias usando caminatas de curvas elípticas", de: "Isogenie-basierte Kryptographie mit elliptischen Kurven-Walks", nl: "Isogenie-gebaseerde cryptografie met elliptische curve wandelingen" }
      ],
      correct: 0,
      explanation: {
        en: "Lattice-based cryptography relies on hard problems like the Shortest Vector Problem (SVP) and Closest Vector Problem (CVP) in high-dimensional lattices, which remain computationally difficult even for quantum computers, making them prime candidates for post-quantum standards.",
        es: "La criptografía basada en retículos se basa en problemas difíciles como el Problema del Vector Más Corto (SVP) y el Problema del Vector Más Cercano (CVP) en retículos de alta dimensión, que siguen siendo computacionalmente difíciles incluso para computadoras cuánticas, haciéndolos candidatos principales para estándares post-cuánticos.",
        de: "Gitterbasierte Kryptographie beruht auf harten Problemen wie dem Shortest Vector Problem (SVP) und Closest Vector Problem (CVP) in hochdimensionalen Gittern, die auch für Quantencomputer rechnerisch schwierig bleiben, wodurch sie zu Hauptkandidaten für Post-Quanten-Standards werden.",
        nl: "Rooster-gebaseerde cryptografie berust op moeilijke problemen zoals het Kortste Vector Probleem (SVP) en Dichtste Vector Probleem (CVP) in hoogdimensionale roosters, die computationeel moeilijk blijven zelfs voor kwantumcomputers, waardoor ze primaire kandidaten zijn voor post-kwantum standaarden."
      }
    },
    {
      question: {
        en: "What is the fundamental security property provided by commitment schemes in cryptographic protocols?",
        es: "¿Cuál es la propiedad de seguridad fundamental proporcionada por esquemas de compromiso en protocolos criptográficos?",
        de: "Was ist die grundlegende Sicherheitseigenschaft, die Commitment-Schemata in kryptographischen Protokollen bieten?",
        nl: "Wat is de fundamentele beveiligingseigenschap geboden door commitment schema's in cryptografische protocollen?"
      },
      options: [
        { en: "Binding and hiding properties for committed values", es: "Propiedades de vinculación y ocultación para valores comprometidos", de: "Bindende und verbergende Eigenschaften für zugesagte Werte", nl: "Bindende en verbergende eigenschappen voor toegezegde waarden" },
        { en: "Non-interactive zero-knowledge proof generation", es: "Generación de pruebas de conocimiento cero no interactivas", de: "Nicht-interaktive Zero-Knowledge-Beweisgenerierung", nl: "Niet-interactieve zero-knowledge bewijs generatie" },
        { en: "Perfect forward secrecy for all protocol participants", es: "Secreto perfecto hacia adelante para todos los participantes del protocolo", de: "Perfekte Vorwärtssicherheit für alle Protokollteilnehmer", nl: "Perfecte voorwaartse geheimhouding voor alle protocoldeelnemers" },
        { en: "Homomorphic evaluation over encrypted commitments", es: "Evaluación homomórfica sobre compromisos cifrados", de: "Homomorphe Auswertung über verschlüsselte Commitments", nl: "Homomorfische evaluatie over versleutelde commitments" }
      ],
      correct: 0,
      explanation: {
        en: "Commitment schemes provide two crucial properties: binding (committer cannot change the committed value later) and hiding (the committed value remains secret until revealed), enabling applications like coin flipping, auctions, and secure multi-party computation.",
        es: "Los esquemas de compromiso proporcionan dos propiedades cruciales: vinculación (el comprometedor no puede cambiar el valor comprometido después) y ocultación (el valor comprometido permanece secreto hasta ser revelado), habilitando aplicaciones como lanzamiento de moneda, subastas y computación multi-partidaria segura.",
        de: "Commitment-Schemata bieten zwei entscheidende Eigenschaften: Bindung (Committer kann den zugesagten Wert später nicht ändern) und Verbergung (der zugesagte Wert bleibt geheim bis zur Enthüllung), wodurch Anwendungen wie Münzwurf, Auktionen und sichere Mehrparteien-Berechnung ermöglicht werden.",
        nl: "Commitment schema's bieden twee cruciale eigenschappen: binding (committer kan de toegezegde waarde later niet veranderen) en verberging (de toegezegde waarde blijft geheim tot onthulling), waardoor toepassingen mogelijk worden zoals muntwerpen, veilingen en veilige multi-partij berekening."
      }
    }
  ]
});