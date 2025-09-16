window.addLevel('mind-bender/cryptography', {
  name: {
    en: "Cryptographic Research Frontiers and Future Directions",
    es: "Fronteras de Investigación Criptográfica y Direcciones Futuras",
    de: "Kryptographische Forschungsgrenzen und Zukunftsrichtungen",
    nl: "Cryptografische Onderzoeks Grenzen en Toekomst Richtingen"
  },
  questions: [
    {
      question: {
        en: "What is indistinguishability obfuscation?",
        es: "¿Qué es la ofuscación de indistinguibilidad?",
        de: "Was ist Ununterscheidbarkeits-Verschleierung?",
        nl: "Wat is onderscheidbaarheids obfuscatie?"
      },
      options: [
        { en: "Making code difficult to read", es: "Hacer código difícil de leer", de: "Code schwer lesbar machen", nl: "Code moeilijk leesbaar maken" },
        { en: "A cryptographic primitive that makes functionally equivalent programs computationally indistinguishable", es: "Una primitiva criptográfica que hace programas funcionalmente equivalentes computacionalmente indistinguibles", de: "Ein kryptographisches Primitiv, das funktional äquivalente Programme rechnerisch ununterscheidbar macht", nl: "Een cryptografische primitieve die functioneel equivalente programma's computationeel ononderscheidbaar maakt" },
        { en: "Hiding program execution traces", es: "Ocultar rastros de ejecución de programas", de: "Verbergen von Programmausführungsspuren", nl: "Het verbergen van programma uitvoerings sporen" },
        { en: "Encrypting source code", es: "Cifrar código fuente", de: "Quellcode verschlüsseln", nl: "Broncode versleutelen" }
      ],
      correct: 1,
      explanation: {
        en: "Indistinguishability obfuscation is a powerful cryptographic tool that transforms programs into functionally equivalent but computationally indistinguishable versions, enabling many advanced cryptographic applications.",
        es: "La ofuscación de indistinguibilidad es una herramienta criptográfica poderosa que transforma programas en versiones funcionalmente equivalentes pero computacionalmente indistinguibles, habilitando muchas aplicaciones criptográficas avanzadas.",
        de: "Ununterscheidbarkeits-Verschleierung ist ein mächtiges kryptographisches Werkzeug, das Programme in funktional äquivalente aber rechnerisch ununterscheidbare Versionen transformiert und viele erweiterte kryptographische Anwendungen ermöglicht.",
        nl: "Onderscheidbaarheids obfuscatie is een krachtig cryptografisch hulpmiddel dat programma's transformeert naar functioneel equivalente maar computationeel ononderscheidbare versies, waardoor veel geavanceerde cryptografische toepassingen mogelijk worden."
      }
    },
    {
      question: {
        en: "What is functional encryption?",
        es: "¿Qué es el cifrado funcional?",
        de: "Was ist funktionale Verschlüsselung?",
        nl: "Wat is functionele encryptie?"
      },
      options: [
        { en: "Encryption that works properly", es: "Cifrado que funciona correctamente", de: "Verschlüsselung, die ordnungsgemäß funktioniert", nl: "Encryptie die goed werkt" },
        { en: "Encryption scheme that allows computation of specific functions on encrypted data", es: "Esquema de cifrado que permite cálculo de funciones específicas en datos cifrados", de: "Verschlüsselungsschema, das Berechnung spezifischer Funktionen auf verschlüsselten Daten ermöglicht", nl: "Encryptie schema dat berekening van specifieke functies op versleutelde data mogelijk maakt" },
        { en: "Function-based key derivation", es: "Derivación de claves basada en funciones", de: "Funktionsbasierte Schlüsselableitung", nl: "Functie-gebaseerde sleutel afleiding" },
        { en: "Encrypting program functions", es: "Cifrar funciones de programa", de: "Programmfunktionen verschlüsseln", nl: "Programma functies versleutelen" }
      ],
      correct: 1,
      explanation: {
        en: "Functional encryption enables authorized parties to compute specific functions on encrypted data without learning anything else about the underlying plaintext, generalizing traditional encryption paradigms.",
        es: "El cifrado funcional permite a partes autorizadas calcular funciones específicas en datos cifrados sin aprender nada más sobre el texto plano subyacente, generalizando paradigmas de cifrado tradicionales.",
        de: "Funktionale Verschlüsselung ermöglicht es autorisierten Parteien, spezifische Funktionen auf verschlüsselten Daten zu berechnen, ohne etwas anderes über den zugrundeliegenden Klartext zu erfahren, und verallgemeinert traditionelle Verschlüsselungsparadigmen.",
        nl: "Functionele encryptie stelt geautoriseerde partijen in staat om specifieke functies te berekenen op versleutelde data zonder iets anders te leren over de onderliggende plaintext, waardoor traditionele encryptie paradigma's worden gegeneraliseerd."
      }
    },
    {
      question: {
        en: "What is attribute-based encryption (ABE)?",
        es: "¿Qué es el cifrado basado en atributos (ABE)?",
        de: "Was ist attributbasierte Verschlüsselung (ABE)?",
        nl: "Wat is attribuut-gebaseerde encryptie (ABE)?"
      },
      options: [
        { en: "Encryption based on file attributes", es: "Cifrado basado en atributos de archivo", de: "Verschlüsselung basierend auf Dateiattributen", nl: "Encryptie gebaseerd op bestand attributen" },
        { en: "Encryption scheme where access policies are defined over attributes of users", es: "Esquema de cifrado donde las políticas de acceso se definen sobre atributos de usuarios", de: "Verschlüsselungsschema, bei dem Zugriffsr ichtlinien über Benutzerattribute definiert werden", nl: "Encryptie schema waar toegangs beleid wordt gedefinieerd over attributen van gebruikers" },
        { en: "Encryption with metadata", es: "Cifrado con metadatos", de: "Verschlüsselung mit Metadaten", nl: "Encryptie met metadata" },
        { en: "Tagged encryption system", es: "Sistema de cifrado etiquetado", de: "Getaggtes Verschlüsselungssystem", nl: "Gelabeld encryptie systeem" }
      ],
      correct: 1,
      explanation: {
        en: "Attribute-based encryption allows fine-grained access control where ciphertexts are associated with access structures over attributes, and users can decrypt if their attributes satisfy the policy.",
        es: "El cifrado basado en atributos permite control de acceso de grano fino donde los textos cifrados se asocian con estructuras de acceso sobre atributos, y los usuarios pueden descifrar si sus atributos satisfacen la política.",
        de: "Attributbasierte Verschlüsselung ermöglicht feingegliederte Zugriffskontrolle, bei der Chiffretexte mit Zugriffsstrukturen über Attributen verknüpft sind und Benutzer entschlüsseln können, wenn ihre Attribute die Richtlinie erfüllen.",
        nl: "Attribuut-gebaseerde encryptie maakt fijnkorrelige toegangs controle mogelijk waarbij cipherteksten worden geassocieerd met toegangs structuren over attributen, en gebruikers kunnen decrypteren als hun attributen voldoen aan het beleid."
      }
    },
    {
      question: {
        en: "What is witness encryption?",
        es: "¿Qué es el cifrado de testigo?",
        de: "Was ist Zeugen-Verschlüsselung?",
        nl: "Wat is getuige encryptie?"
      },
      options: [
        { en: "Encryption for legal testimony", es: "Cifrado para testimonio legal", de: "Verschlüsselung für rechtliche Zeugenaussagen", nl: "Encryptie voor juridische getuigenis" },
        { en: "Encryption that can be decrypted using any witness to an NP statement", es: "Cifrado que puede ser descifrado usando cualquier testigo de una declaración NP", de: "Verschlüsselung, die mit jedem Zeugen einer NP-Aussage entschlüsselt werden kann", nl: "Encryptie die kan worden gedecodeerd met elke getuige van een NP verklaring" },
        { en: "Encryption requiring multiple parties", es: "Cifrado que requiere múltiples partes", de: "Verschlüsselung, die mehrere Parteien erfordert", nl: "Encryptie die meerdere partijen vereist" },
        { en: "Timestamped encryption", es: "Cifrado con sello de tiempo", de: "Zeitstempel-Verschlüsselung", nl: "Tijdstempel encryptie" }
      ],
      correct: 1,
      explanation: {
        en: "Witness encryption allows anyone with a witness to an NP statement to decrypt the ciphertext, enabling novel applications like time-lock puzzles and conditional payments.",
        es: "El cifrado de testigo permite a cualquier persona con un testigo de una declaración NP descifrar el texto cifrado, habilitando aplicaciones novedosas como rompecabezas de tiempo y pagos condicionales.",
        de: "Zeugen-Verschlüsselung ermöglicht es jedem mit einem Zeugen einer NP-Aussage, den Chiffretext zu entschlüsseln und ermöglicht neuartige Anwendungen wie Zeitschlösser und bedingte Zahlungen.",
        nl: "Getuige encryptie stelt iedereen met een getuige van een NP verklaring in staat om de ciphertext te decrypteren, waardoor nieuwe toepassingen mogelijk worden zoals tijd-slot puzzels en conditionele betalingen."
      }
    },
    {
      question: {
        en: "What is predicate encryption?",
        es: "¿Qué es el cifrado de predicado?",
        de: "Was ist Prädikat-Verschlüsselung?",
        nl: "Wat is predicaat encryptie?"
      },
      options: [
        { en: "Encryption based on logical predicates", es: "Cifrado basado en predicados lógicos", de: "Verschlüsselung basierend auf logischen Prädikaten", nl: "Encryptie gebaseerd op logische predicaten" },
        { en: "Encryption where decryption is possible if and only if predicate function returns true", es: "Cifrado donde el descifrado es posible si y solo si la función predicado devuelve verdadero", de: "Verschlüsselung, bei der Entschlüsselung nur dann möglich ist, wenn die Prädikatfunktion wahr zurückgibt", nl: "Encryptie waarbij decryptie mogelijk is dan en slechts dan als de predicaat functie waar teruggeeft" },
        { en: "Predictive encryption algorithms", es: "Algoritmos de cifrado predictivos", de: "Vorhersagende Verschlüsselungsalgorithmen", nl: "Voorspellende encryptie algoritmen" },
        { en: "Database query encryption", es: "Cifrado de consultas de base de datos", de: "Datenbankabfrage-Verschlüsselung", nl: "Database query encryptie" }
      ],
      correct: 1,
      explanation: {
        en: "Predicate encryption enables fine-grained access control where a user can decrypt a ciphertext if and only if their secret key satisfies a predicate associated with the ciphertext.",
        es: "El cifrado de predicado permite control de acceso de grano fino donde un usuario puede descifrar un texto cifrado si y solo si su clave secreta satisface un predicado asociado con el texto cifrado.",
        de: "Prädikat-Verschlüsselung ermöglicht feingegliederte Zugriffskontrolle, bei der ein Benutzer einen Chiffretext nur dann entschlüsseln kann, wenn sein geheimer Schlüssel ein mit dem Chiffretext verknüpftes Prädikat erfüllt.",
        nl: "Predicaat encryptie maakt fijnkorrelige toegangs controle mogelijk waarbij een gebruiker een ciphertext alleen kan decrypteren als hun geheime sleutel voldoet aan een predicaat geassocieerd met de ciphertext."
      }
    },
    {
      question: {
        en: "What is searchable encryption?",
        es: "¿Qué es el cifrado con capacidad de búsqueda?",
        de: "Was ist durchsuchbare Verschlüsselung?",
        nl: "Wat is doorzoekbare encryptie?"
      },
      options: [
        { en: "Encryption that can be easily found", es: "Cifrado que puede ser encontrado fácilmente", de: "Verschlüsselung, die leicht gefunden werden kann", nl: "Encryptie die gemakkelijk kan worden gevonden" },
        { en: "Cryptographic techniques that allow searching over encrypted data", es: "Técnicas criptográficas que permiten buscar sobre datos cifrados", de: "Kryptographische Techniken, die das Suchen über verschlüsselte Daten ermöglichen", nl: "Cryptografische technieken die zoeken over versleutelde data mogelijk maken" },
        { en: "Indexed encryption systems", es: "Sistemas de cifrado indexados", de: "Indizierte Verschlüsselungssysteme", nl: "Geïndexeerde encryptie systemen" },
        { en: "Discovery-enabled cryptography", es: "Criptografía habilitada para descubrimiento", de: "Entdeckungsfähige Kryptographie", nl: "Ontdekking-ingeschakelde cryptografie" }
      ],
      correct: 1,
      explanation: {
        en: "Searchable encryption enables users to search for specific keywords or patterns in encrypted data without revealing the search terms or the data contents to the server.",
        es: "El cifrado con capacidad de búsqueda permite a los usuarios buscar palabras clave o patrones específicos en datos cifrados sin revelar los términos de búsqueda o el contenido de los datos al servidor.",
        de: "Durchsuchbare Verschlüsselung ermöglicht es Benutzern, nach spezifischen Schlüsselwörtern oder Mustern in verschlüsselten Daten zu suchen, ohne die Suchbegriffe oder Dateninhalte dem Server preiszugeben.",
        nl: "Doorzoekbare encryptie stelt gebruikers in staat om te zoeken naar specifieke trefwoorden of patronen in versleutelde data zonder de zoektermen of data inhoud aan de server te onthullen."
      }
    },
    {
      question: {
        en: "What is order-preserving encryption?",
        es: "¿Qué es el cifrado que preserva el orden?",
        de: "Was ist ordnungserhaltende Verschlüsselung?",
        nl: "Wat is volgorde-behoudende encryptie?"
      },
      options: [
        { en: "Encryption that maintains execution order", es: "Cifrado que mantiene el orden de ejecución", de: "Verschlüsselung, die Ausführungsreihenfolge beibehält", nl: "Encryptie die uitvoerings volgorde behoudt" },
        { en: "Encryption scheme where the ordering of plaintexts is preserved in ciphertexts", es: "Esquema de cifrado donde el ordenamiento de textos planos se preserva en textos cifrados", de: "Verschlüsselungsschema, bei dem die Reihenfolge der Klartexte in Chiffretexten erhalten bleibt", nl: "Encryptie schema waarbij de ordening van plainteksten behouden blijft in cipherteksten" },
        { en: "Sequential encryption process", es: "Proceso de cifrado secuencial", de: "Sequenzieller Verschlüsselungsprozess", nl: "Sequentiële encryptie proces" },
        { en: "Chronological data encryption", es: "Cifrado de datos cronológico", de: "Chronologische Datenverschlüsselung", nl: "Chronologische data encryptie" }
      ],
      correct: 1,
      explanation: {
        en: "Order-preserving encryption maintains the numerical ordering of plaintexts in the corresponding ciphertexts, enabling range queries on encrypted databases while preserving some privacy.",
        es: "El cifrado que preserva el orden mantiene el ordenamiento numérico de textos planos en los textos cifrados correspondientes, permitiendo consultas de rango en bases de datos cifradas mientras preserva algo de privacidad.",
        de: "Ordnungserhaltende Verschlüsselung behält die numerische Reihenfolge der Klartexte in den entsprechenden Chiffretexten bei und ermöglicht Bereichsabfragen in verschlüsselten Datenbanken unter Wahrung gewisser Privatsphäre.",
        nl: "Volgorde-behoudende encryptie behoudt de numerieke ordening van plainteksten in de corresponderende cipherteksten, waardoor bereik queries op versleutelde databases mogelijk worden terwijl enige privacy wordt behouden."
      }
    },
    {
      question: {
        en: "What is format-preserving encryption (FPE)?",
        es: "¿Qué es el cifrado que preserva el formato (FPE)?",
        de: "Was ist formaterhaltende Verschlüsselung (FPE)?",
        nl: "Wat is formaat-behoudende encryptie (FPE)?"
      },
      options: [
        { en: "Encryption that maintains file formats", es: "Cifrado que mantiene formatos de archivo", de: "Verschlüsselung, die Dateiformate beibehält", nl: "Encryptie die bestand formaten behoudt" },
        { en: "Encryption where ciphertext has the same format and length as plaintext", es: "Cifrado donde el texto cifrado tiene el mismo formato y longitud que el texto plano", de: "Verschlüsselung, bei der Chiffretext dasselbe Format und dieselbe Länge wie Klartext hat", nl: "Encryptie waarbij ciphertext hetzelfde formaat en lengte heeft als plaintext" },
        { en: "Structured data encryption", es: "Cifrado de datos estructurados", de: "Strukturierte Datenverschlüsselung", nl: "Gestructureerde data encryptie" },
        { en: "Template-based encryption", es: "Cifrado basado en plantillas", de: "Vorlagenbasierte Verschlüsselung", nl: "Sjabloon-gebaseerde encryptie" }
      ],
      correct: 1,
      explanation: {
        en: "Format-preserving encryption ensures that encrypted data maintains the same format as the original plaintext, allowing encrypted data to be used in legacy systems without modification.",
        es: "El cifrado que preserva el formato asegura que los datos cifrados mantengan el mismo formato que el texto plano original, permitiendo que datos cifrados sean usados en sistemas legados sin modificación.",
        de: "Formaterhaltende Verschlüsselung stellt sicher, dass verschlüsselte Daten dasselbe Format wie der ursprüngliche Klartext beibehalten, wodurch verschlüsselte Daten in Legacy-Systemen ohne Modifikation verwendet werden können.",
        nl: "Formaat-behoudende encryptie zorgt ervoor dat versleutelde data hetzelfde formaat behoudt als de originele plaintext, waardoor versleutelde data in legacy systemen kan worden gebruikt zonder wijziging."
          }
    },
    {
      question: {
        en: "What is proxy re-encryption?",
        es: "¿Qué es el re-cifrado por proxy?",
        de: "Was ist Proxy-Re-Verschlüsselung?",
        nl: "Wat is proxy her-encryptie?"
      },
      options: [
        { en: "Encryption through proxy servers", es: "Cifrado a través de servidores proxy", de: "Verschlüsselung über Proxy-Server", nl: "Encryptie via proxy servers" },
        { en: "Cryptographic primitive allowing a proxy to transform ciphertexts from one key to another", es: "Primitiva criptográfica que permite a un proxy transformar textos cifrados de una clave a otra", de: "Kryptographisches Primitiv, das einem Proxy ermöglicht, Chiffretexte von einem Schlüssel zu einem anderen zu transformieren", nl: "Cryptografische primitieve die een proxy in staat stelt cipherteksten te transformeren van de ene sleutel naar de andere" },
        { en: "Re-encrypting data for backup", es: "Re-cifrar datos para respaldo", de: "Daten für Backup neu verschlüsseln", nl: "Data her-encrypteren voor backup" },
        { en: "Delegated encryption authority", es: "Autoridad de cifrado delegada", de: "Delegierte Verschlüsselungsbehörde", nl: "Gedelegeerde encryptie autoriteit" }
      ],
      correct: 1,
      explanation: {
        en: "Proxy re-encryption allows a semi-trusted proxy to transform ciphertexts encrypted under one public key into ciphertexts under another public key, without learning the underlying plaintext.",
        es: "El re-cifrado por proxy permite a un proxy semi-confiable transformar textos cifrados encriptados bajo una clave pública en textos cifrados bajo otra clave pública, sin aprender el texto plano subyacente.",
        de: "Proxy-Re-Verschlüsselung ermöglicht es einem halbvertrauenswürdigen Proxy, unter einem öffentlichen Schlüssel verschlüsselte Chiffretexte in Chiffretexte unter einem anderen öffentlichen Schlüssel zu transformieren, ohne den zugrundeliegenden Klartext zu erfahren.",
        nl: "Proxy her-encryptie stelt een semi-vertrouwde proxy in staat om cipherteksten versleuteld onder een publieke sleutel te transformeren naar cipherteksten onder een andere publieke sleutel, zonder de onderliggende plaintext te leren."
      }
    },
    {
      question: {
        en: "What is identity-based encryption (IBE)?",
        es: "¿Qué es el cifrado basado en identidad (IBE)?",
        de: "Was ist identitätsbasierte Verschlüsselung (IBE)?",
        nl: "Wat is identiteit-gebaseerde encryptie (IBE)?"
      },
      options: [
        { en: "Encryption tied to user identity verification", es: "Cifrado vinculado a verificación de identidad de usuario", de: "Verschlüsselung gekoppelt an Benutzeridentitätsverifikation", nl: "Encryptie gekoppeld aan gebruikers identiteit verificatie" },
        { en: "Public key encryption where any string can serve as a public key", es: "Cifrado de clave pública donde cualquier cadena puede servir como clave pública", de: "Public-Key-Verschlüsselung, bei der jede Zeichenfolge als öffentlicher Schlüssel dienen kann", nl: "Publieke sleutel encryptie waarbij elke string kan dienen als publieke sleutel" },
        { en: "Biometric-based cryptography", es: "Criptografía basada en biométrica", de: "Biometrische Kryptographie", nl: "Biometrische cryptografie" },
        { en: "Personal information encryption", es: "Cifrado de información personal", de: "Verschlüsselung persönlicher Informationen", nl: "Persoonlijke informatie encryptie" }
      ],
      correct: 1,
      explanation: {
        en: "Identity-based encryption eliminates the need for a public key infrastructure by allowing any arbitrary string (like email addresses) to function as a public key, with corresponding private keys generated by a trusted authority.",
        es: "El cifrado basado en identidad elimina la necesidad de una infraestructura de clave pública permitiendo que cualquier cadena arbitraria (como direcciones de correo) funcione como clave pública, con claves privadas correspondientes generadas por una autoridad confiable.",
        de: "Identitätsbasierte Verschlüsselung eliminiert die Notwendigkeit einer Public-Key-Infrastruktur, indem sie jede beliebige Zeichenfolge (wie E-Mail-Adressen) als öffentlichen Schlüssel funktionieren lässt, wobei entsprechende private Schlüssel von einer vertrauenswürdigen Autorität generiert werden.",
        nl: "Identiteit-gebaseerde encryptie elimineert de behoefte aan een publieke sleutel infrastructuur door elke willekeurige string (zoals email adressen) te laten functioneren als publieke sleutel, met corresponderende private sleutels gegenereerd door een vertrouwde autoriteit."
      }
    },
    {
      question: {
        en: "What is broadcast encryption?",
        es: "¿Qué es el cifrado de difusión?",
        de: "Was ist Broadcast-Verschlüsselung?",
        nl: "Wat is broadcast encryptie?"
      },
      options: [
        { en: "Encryption for radio broadcasts", es: "Cifrado para transmisiones de radio", de: "Verschlüsselung für Rundfunkübertragungen", nl: "Encryptie voor radio uitzendingen" },
        { en: "Cryptographic method allowing a sender to securely broadcast to a dynamically changing group", es: "Método criptográfico que permite a un emisor difundir de manera segura a un grupo que cambia dinámicamente", de: "Kryptographische Methode, die es einem Sender ermöglicht, sicher an eine sich dynamisch ändernde Gruppe zu senden", nl: "Cryptografische methode die een zender in staat stelt veilig uit te zenden naar een dynamisch veranderende groep" },
        { en: "Wide-area network encryption", es: "Cifrado de red de área amplia", de: "Weitbereichsnetzwerk-Verschlüsselung", nl: "Breed-gebied netwerk encryptie" },
        { en: "Multi-destination messaging", es: "Mensajería de múltiples destinos", de: "Mehrziel-Messaging", nl: "Multi-bestemming berichten" }
      ],
      correct: 1,
      explanation: {
        en: "Broadcast encryption enables efficient secure communication to large, dynamically changing groups where the sender can encrypt once and authorized receivers can decrypt, often used in content distribution systems.",
        es: "El cifrado de difusión permite comunicación segura eficiente a grupos grandes que cambian dinámicamente donde el emisor puede cifrar una vez y receptores autorizados pueden descifrar, a menudo usado en sistemas de distribución de contenido.",
        de: "Broadcast-Verschlüsselung ermöglicht effiziente sichere Kommunikation an große, sich dynamisch ändernde Gruppen, bei der der Sender einmal verschlüsseln kann und autorisierte Empfänger entschlüsseln können, oft in Content-Distribution-Systemen verwendet.",
        nl: "Broadcast encryptie maakt efficiënte veilige communicatie mogelijk naar grote, dynamisch veranderende groepen waarbij de zender eenmaal kan encrypteren en geautoriseerde ontvangers kunnen decrypteren, vaak gebruikt in content distributie systemen."
      }
    },
    {
      question: {
        en: "What is deniable encryption?",
        es: "¿Qué es el cifrado negable?",
        de: "Was ist abstreitbare Verschlüsselung?",
        nl: "Wat is ontkenbare encryptie?"
      },
      options: [
        { en: "Encryption that can be rejected", es: "Cifrado que puede ser rechazado", de: "Verschlüsselung, die abgelehnt werden kann", nl: "Encryptie die kan worden afgewezen" },
        { en: "Cryptographic system providing plausible deniability about encrypted content", es: "Sistema criptográfico que proporciona negación plausible sobre contenido cifrado", de: "Kryptographisches System, das plausible Abstreitbarkeit über verschlüsselte Inhalte bietet", nl: "Cryptografisch systeem dat plausibele ontkenning biedt over versleutelde inhoud" },
        { en: "Reversible encryption", es: "Cifrado reversible", de: "Reversible Verschlüsselung", nl: "Omkeerbare encryptie" },
        { en: "Optional encryption mode", es: "Modo de cifrado opcional", de: "Optionaler Verschlüsselungsmodus", nl: "Optionele encryptie modus" }
      ],
      correct: 1,
      explanation: {
        en: "Deniable encryption allows users to decrypt ciphertext to different plausible plaintexts depending on which key is used, providing protection against coercive attacks where users might be forced to reveal keys.",
        es: "El cifrado negable permite a usuarios descifrar texto cifrado a diferentes textos planos plausibles dependiendo de qué clave se use, proporcionando protección contra ataques coercitivos donde usuarios podrían ser forzados a revelar claves.",
        de: "Abstreitbare Verschlüsselung ermöglicht es Benutzern, Chiffretext zu verschiedenen plausiblen Klartexten zu entschlüsseln, je nachdem welcher Schlüssel verwendet wird, und bietet Schutz vor Zwangsangriffen, bei denen Benutzer zur Preisgabe von Schlüsseln gezwungen werden könnten.",
        nl: "Ontkenbare encryptie stelt gebruikers in staat ciphertext te decrypteren naar verschillende plausibele plainteksten afhankelijk van welke sleutel wordt gebruikt, wat bescherming biedt tegen dwang aanvallen waarbij gebruikers gedwongen zouden kunnen worden sleutels te onthullen."
      }
    },
    {
      question: {
        en: "What is leakage-resilient cryptography?",
        es: "¿Qué es la criptografía resistente a fugas?",
        de: "Was ist leckageresistente Kryptographie?",
        nl: "Wat is lekkage-resistente cryptografie?"
      },
      options: [
        { en: "Cryptography that prevents information leaks", es: "Criptografía que previene fugas de información", de: "Kryptographie, die Informationslecks verhindert", nl: "Cryptografie die informatie lekken voorkomt" },
        { en: "Cryptographic schemes that remain secure even when some secret information leaks", es: "Esquemas criptográficos que permanecen seguros incluso cuando alguna información secreta se filtra", de: "Kryptographische Schemata, die sicher bleiben, auch wenn geheime Informationen lecken", nl: "Cryptografische schema's die veilig blijven zelfs wanneer enige geheime informatie lekt" },
        { en: "Waterproof encryption methods", es: "Métodos de cifrado impermeables", de: "Wasserdichte Verschlüsselungsmethoden", nl: "Waterdichte encryptie methoden" },
        { en: "Anti-tampering cryptographic systems", es: "Sistemas criptográficos anti-manipulación", de: "Anti-Tamper-Kryptographiesysteme", nl: "Anti-knoeien cryptografische systemen" }
      ],
      correct: 1,
      explanation: {
        en: "Leakage-resilient cryptography designs systems that maintain security guarantees even when adversaries obtain partial information about secret keys through side-channel attacks or other leakage sources.",
        es: "La criptografía resistente a fugas diseña sistemas que mantienen garantías de seguridad incluso cuando adversarios obtienen información parcial sobre claves secretas a través de ataques de canales laterales u otras fuentes de fuga.",
        de: "Leckageresistente Kryptographie entwirft Systeme, die Sicherheitsgarantien aufrechterhalten, auch wenn Angreifer partielle Informationen über geheime Schlüssel durch Seitenkanalangriffe oder andere Leckagequellen erhalten.",
        nl: "Lekkage-resistente cryptografie ontwerpt systemen die beveiligings garanties behouden zelfs wanneer tegenstanders gedeeltelijke informatie over geheime sleutels verkrijgen door zijkanaal aanvallen of andere lekkage bronnen."
      }
    },
    {
      question: {
        en: "What is succinct non-interactive arguments of knowledge (SNARKs)?",
        es: "¿Qué son los argumentos sucintos no interactivos de conocimiento (SNARKs)?",
        de: "Was sind knappe nicht-interaktive Argumente des Wissens (SNARKs)?",
        nl: "Wat zijn beknopte niet-interactieve argumenten van kennis (SNARKs)?"
      },
      options: [
        { en: "Compact marine cryptographic protocols", es: "Protocolos criptográficos marinos compactos", de: "Kompakte marine kryptographische Protokolle", nl: "Compacte mariene cryptografische protocollen" },
        { en: "Cryptographic proofs that are short and can be verified quickly without interaction", es: "Pruebas criptográficas que son cortas y pueden verificarse rápidamente sin interacción", de: "Kryptographische Beweise, die kurz sind und schnell ohne Interaktion verifiziert werden können", nl: "Cryptografische bewijzen die kort zijn en snel kunnen worden geverifieerd zonder interactie" },
        { en: "Secure network authentication protocols", es: "Protocolos seguros de autenticación de red", de: "Sichere Netzwerk-Authentifizierungsprotokolle", nl: "Veilige netwerk authenticatie protocollen" },
        { en: "Smart contract verification systems", es: "Sistemas de verificación de contratos inteligentes", de: "Smart-Contract-Verifikationssysteme", nl: "Slimme contract verificatie systemen" }
      ],
      correct: 1,
      explanation: {
        en: "SNARKs are cryptographic proofs that allow one party to prove to another that they know a value or performed a computation correctly, with the proof being both short (succinct) and verifiable without back-and-forth communication.",
        es: "Los SNARKs son pruebas criptográficas que permiten a una parte probar a otra que conoce un valor o realizó un cálculo correctamente, siendo la prueba tanto corta (sucinta) como verificable sin comunicación de ida y vuelta.",
        de: "SNARKs sind kryptographische Beweise, die es einer Partei ermöglichen, einer anderen zu beweisen, dass sie einen Wert kennt oder eine Berechnung korrekt durchgeführt hat, wobei der Beweis sowohl kurz (knapp) als auch ohne Hin-und-Her-Kommunikation verifizierbar ist.",
        nl: "SNARKs zijn cryptografische bewijzen die het ene partij mogelijk maken om aan een ander te bewijzen dat ze een waarde kennen of een berekening correct hebben uitgevoerd, waarbij het bewijs zowel kort (beknopt) als verifieerbaar is zonder heen-en-weer communicatie."
      }
    },
    {
      question: {
        en: "What is verifiable delay functions (VDFs)?",
        es: "¿Qué son las funciones de retraso verificables (VDFs)?",
        de: "Was sind verifizierbare Verzögerungsfunktionen (VDFs)?",
        nl: "Wat zijn verifieerbare vertraging functies (VDFs)?"
      },
      options: [
        { en: "Functions that create network delays", es: "Funciones que crean retrasos de red", de: "Funktionen, die Netzwerkverzögerungen erzeugen", nl: "Functies die netwerk vertragingen creëren" },
        { en: "Cryptographic functions that require a specific amount of sequential time to compute", es: "Funciones criptográficas que requieren una cantidad específica de tiempo secuencial para calcular", de: "Kryptographische Funktionen, die eine spezifische Menge sequenzieller Zeit zur Berechnung benötigen", nl: "Cryptografische functies die een specifieke hoeveelheid sequentiële tijd vereisen om te berekenen" },
        { en: "Time-locked encryption methods", es: "Métodos de cifrado bloqueados por tiempo", de: "Zeitgesperrte Verschlüsselungsmethoden", nl: "Tijd-vergrendelde encryptie methoden" },
        { en: "Scheduling algorithms for cryptographic operations", es: "Algoritmos de programación para operaciones criptográficas", de: "Scheduling-Algorithmen für kryptographische Operationen", nl: "Planning algoritmen voor cryptografische operaties" }
      ],
      correct: 1,
      explanation: {
        en: "VDFs are functions that take a prescribed time to compute (even with parallel processing) but can be quickly verified, useful for creating unpredictable randomness and timestamping in decentralized systems.",
        es: "Los VDFs son funciones que toman un tiempo prescrito para calcular (incluso con procesamiento paralelo) pero pueden verificarse rápidamente, útiles para crear aleatoriedad impredecible y sellado de tiempo en sistemas descentralizados.",
        de: "VDFs sind Funktionen, die eine vorgeschriebene Zeit zur Berechnung benötigen (auch bei paralleler Verarbeitung), aber schnell verifiziert werden können, nützlich für die Erzeugung unvorhersagbarer Zufälligkeit und Zeitstempelung in dezentralen Systemen.",
        nl: "VDFs zijn functies die een voorgeschreven tijd nodig hebben om te berekenen (zelfs met parallelle verwerking) maar snel kunnen worden geverifieerd, nuttig voor het creëren van onvoorspelbare willekeurigheid en tijdstempeling in gedecentraliseerde systemen."
      }
    },
    {
      question: {
        en: "What is the main challenge in post-quantum cryptography implementation?",
        es: "¿Cuál es el principal desafío en la implementación de criptografía post-cuántica?",
        de: "Was ist die Hauptherausforderung bei der Implementierung von Post-Quanten-Kryptographie?",
        nl: "Wat is de grootste uitdaging bij post-quantum cryptografie implementatie?"
      },
      options: [
        { en: "Lack of mathematical foundations", es: "Falta de fundamentos matemáticos", de: "Mangel an mathematischen Grundlagen", nl: "Gebrek aan wiskundige fundamenten" },
        { en: "Balancing security, performance, and key sizes for practical deployment", es: "Equilibrar seguridad, rendimiento y tamaños de clave para despliegue práctico", de: "Ausbalancierung von Sicherheit, Leistung und Schlüsselgrößen für praktischen Einsatz", nl: "Balanceren van beveiliging, prestatie en sleutel groottes voor praktische implementatie" },
        { en: "Quantum computer availability", es: "Disponibilidad de computadoras cuánticas", de: "Verfügbarkeit von Quantencomputern", nl: "Quantum computer beschikbaarheid" },
        { en: "Regulatory approval processes", es: "Procesos de aprobación regulatoria", de: "Regulatorische Genehmigungsverfahren", nl: "Regulatorische goedkeurings processen" }
      ],
      correct: 1,
      explanation: {
        en: "The main challenge in post-quantum cryptography implementation is achieving adequate security against quantum attacks while maintaining acceptable performance and manageable key sizes for real-world deployment.",
        es: "El principal desafío en la implementación de criptografía post-cuántica es lograr seguridad adecuada contra ataques cuánticos mientras se mantiene rendimiento aceptable y tamaños de clave manejables para despliegue en el mundo real.",
        de: "Die Hauptherausforderung bei der Implementierung von Post-Quanten-Kryptographie ist es, angemessene Sicherheit gegen Quantenangriffe zu erreichen, während akzeptable Leistung und handhabbare Schlüsselgrößen für realen Einsatz beibehalten werden.",
        nl: "De grootste uitdaging bij post-quantum cryptografie implementatie is het bereiken van adequate beveiliging tegen quantum aanvallen terwijl acceptabele prestatie en beheersbare sleutel groottes worden behouden voor echte-wereld implementatie."
      }
    },
    {
      question: {
        en: "What is the goal of privacy-preserving cryptography?",
        es: "¿Cuál es el objetivo de la criptografía que preserva la privacidad?",
        de: "Was ist das Ziel der datenschutzerhaltenden Kryptographie?",
        nl: "Wat is het doel van privacy-behoudende cryptografie?"
      },
      options: [
        { en: "Hiding all information from everyone", es: "Ocultar toda la información de todos", de: "Alle Informationen vor jedem verstecken", nl: "Alle informatie voor iedereen verbergen" },
        { en: "Enabling computation and analysis while protecting individual privacy", es: "Habilitar cálculo y análisis mientras se protege la privacidad individual", de: "Berechnung und Analyse ermöglichen während individuelle Privatsphäre geschützt wird", nl: "Berekening en analyse mogelijk maken terwijl individuele privacy wordt beschermd" },
        { en: "Complete data anonymization", es: "Anonimización completa de datos", de: "Vollständige Datenanonymisierung", nl: "Volledige data anonimisering" },
        { en: "Preventing all data collection", es: "Prevenir toda recolección de datos", de: "Alle Datensammlung verhindern", nl: "Alle data verzameling voorkomen" }
      ],
      correct: 1,
      explanation: {
        en: "Privacy-preserving cryptography aims to enable useful computation, data analysis, and services while protecting the privacy of individuals whose data is being processed.",
        es: "La criptografía que preserva la privacidad busca habilitar cálculo útil, análisis de datos y servicios mientras protege la privacidad de individuos cuyos datos están siendo procesados.",
        de: "Datenschutzerhaltende Kryptographie zielt darauf ab, nützliche Berechnungen, Datenanalysen und Dienste zu ermöglichen, während die Privatsphäre der Personen geschützt wird, deren Daten verarbeitet werden.",
        nl: "Privacy-behoudende cryptografie wil nuttige berekeningen, data analyse en services mogelijk maken terwijl de privacy van individuen wiens data wordt verwerkt wordt beschermd."
      }
    },
    {
      question: {
        en: "What is the significance of cryptographic agility in modern systems?",
        es: "¿Cuál es la importancia de la agilidad criptográfica en sistemas modernos?",
        de: "Was ist die Bedeutung kryptographischer Agilität in modernen Systemen?",
        nl: "Wat is de betekenis van cryptografische wendbaarheid in moderne systemen?"
      },
      options: [
        { en: "Faster cryptographic operations", es: "Operaciones criptográficas más rápidas", de: "Schnellere kryptographische Operationen", nl: "Snellere cryptografische operaties" },
        { en: "Ability to quickly adapt to new cryptographic threats and standards", es: "Capacidad de adaptarse rápidamente a nuevas amenazas y estándares criptográficos", de: "Fähigkeit, sich schnell an neue kryptographische Bedrohungen und Standards anzupassen", nl: "Vermogen om snel aan te passen aan nieuwe cryptografische dreigingen en standaarden" },
        { en: "Mobile cryptographic implementations", es: "Implementaciones criptográficas móviles", de: "Mobile kryptographische Implementierungen", nl: "Mobiele cryptografische implementaties" },
        { en: "Flexible key management", es: "Gestión flexible de claves", de: "Flexible Schlüsselverwaltung", nl: "Flexibel sleutel beheer" }
      ],
      correct: 1,
      explanation: {
        en: "Cryptographic agility refers to the ability of systems to rapidly transition between different cryptographic algorithms and protocols as new threats emerge or standards change, crucial for long-term security.",
        es: "La agilidad criptográfica se refiere a la capacidad de sistemas de transicionar rápidamente entre diferentes algoritmos y protocolos criptográficos cuando emergen nuevas amenazas o cambian estándares, crucial para seguridad a largo plazo.",
        de: "Kryptographische Agilität bezieht sich auf die Fähigkeit von Systemen, schnell zwischen verschiedenen kryptographischen Algorithmen und Protokollen zu wechseln, wenn neue Bedrohungen entstehen oder sich Standards ändern, entscheidend für langfristige Sicherheit.",
        nl: "Cryptografische wendbaarheid verwijst naar het vermogen van systemen om snel te schakelen tussen verschillende cryptografische algoritmen en protocollen wanneer nieuwe dreigingen ontstaan of standaarden veranderen, cruciaal voor langetermijn beveiliging."
      }
    },
    {
      question: {
        en: "What represents the future direction of cryptographic research?",
        es: "¿Qué representa la dirección futura de la investigación criptográfica?",
        de: "Was repräsentiert die Zukunftsrichtung der kryptographischen Forschung?",
        nl: "Wat vertegenwoordigt de toekomstige richting van cryptografisch onderzoek?"
      },
      options: [
        { en: "Returning to classical cryptographic methods", es: "Regresar a métodos criptográficos clásicos", de: "Rückkehr zu klassischen kryptographischen Methoden", nl: "Terugkeer naar klassieke cryptografische methoden" },
        { en: "Integration of quantum-resistant, privacy-preserving, and practically efficient solutions", es: "Integración de soluciones resistentes a cuánticos, que preservan privacidad y prácticamente eficientes", de: "Integration quantenresistenter, datenschutzerhaltender und praktisch effizienter Lösungen", nl: "Integratie van quantum-resistente, privacy-behoudende en praktisch efficiënte oplossingen" },
        { en: "Abandoning mathematical cryptography", es: "Abandonar la criptografía matemática", de: "Aufgabe der mathematischen Kryptographie", nl: "Het opgeven van wiskundige cryptografie" },
        { en: "Focus only on quantum cryptography", es: "Enfocarse solo en criptografía cuántica", de: "Fokus nur auf Quantenkryptographie", nl: "Focus alleen op quantum cryptografie" }
      ],
      correct: 1,
      explanation: {
        en: "Future cryptographic research focuses on developing integrated solutions that are simultaneously quantum-resistant, privacy-preserving, practically efficient, and suitable for emerging computing paradigms like cloud computing and IoT.",
        es: "La investigación criptográfica futura se enfoca en desarrollar soluciones integradas que sean simultáneamente resistentes a cuánticos, que preserven privacidad, prácticamente eficientes y adecuadas para paradigmas emergentes como computación en la nube e IoT.",
        de: "Zukünftige kryptographische Forschung konzentriert sich auf die Entwicklung integrierter Lösungen, die gleichzeitig quantenresistent, datenschutzerhaltend, praktisch effizient und für aufkommende Computing-Paradigmen wie Cloud Computing und IoT geeignet sind.",
        nl: "Toekomstig cryptografisch onderzoek richt zich op het ontwikkelen van geïntegreerde oplossingen die tegelijkertijd quantum-resistent, privacy-behoudend, praktisch efficiënt en geschikt zijn voor opkomende computing paradigma's zoals cloud computing en IoT."
      }
    },
    {
      question: {
        en: "What is the primary goal of theoretical cryptography research?",
        es: "¿Cuál es el objetivo principal de la investigación en criptografía teórica?",
        de: "Was ist das Hauptziel theoretischer kryptographischer Forschung?",
        nl: "Wat is het primaire doel van theoretisch cryptografie onderzoek?"
      },
      options: [
        { en: "Creating unbreakable codes", es: "Crear códigos irrompibles", de: "Unbreakbare Codes erstellen", nl: "Onbreekbare codes creëren" },
        { en: "Establishing rigorous mathematical foundations and security proofs for cryptographic systems", es: "Establecer fundamentos matemáticos rigurosos y pruebas de seguridad para sistemas criptográficos", de: "Rigorose mathematische Grundlagen und Sicherheitsbeweise für kryptographische Systeme etablieren", nl: "Het vestigen van rigoureuze wiskundige fundamenten en beveiligings bewijzen voor cryptografische systemen" },
        { en: "Optimizing cryptographic performance", es: "Optimizar rendimiento criptográfico", de: "Kryptographische Leistung optimieren", nl: "Cryptografische prestatie optimaliseren" },
        { en: "Developing new programming languages", es: "Desarrollar nuevos lenguajes de programación", de: "Neue Programmiersprachen entwickeln", nl: "Nieuwe programmeer talen ontwikkelen" }
      ],
      correct: 1,
      explanation: {
        en: "Theoretical cryptography research aims to establish rigorous mathematical foundations, develop formal security models, and provide provable security guarantees for cryptographic constructions.",
        es: "La investigación en criptografía teórica busca establecer fundamentos matemáticos rigurosos, desarrollar modelos formales de seguridad y proporcionar garantías de seguridad demostrables para construcciones criptográficas.",
        de: "Theoretische kryptographische Forschung zielt darauf ab, rigorose mathematische Grundlagen zu etablieren, formale Sicherheitsmodelle zu entwickeln und beweisbare Sicherheitsgarantien für kryptographische Konstruktionen zu liefern.",
        nl: "Theoretisch cryptografie onderzoek wil rigoureuze wiskundige fundamenten vestigen, formele beveiligings modellen ontwikkelen en bewijsbare beveiligings garanties leveren voor cryptografische constructies."
      }
    },
    {
      question: {
        en: "What is the main advantage of code-based cryptography?",
        es: "¿Cuál es la principal ventaja de la criptografía basada en códigos?",
        de: "Was ist der Hauptvorteil code-basierter Kryptographie?",
        nl: "Wat is het belangrijkste voordeel van code-gebaseerde cryptografie?"
      },
      options: [
        { en: "Fast key generation", es: "Generación rápida de claves", de: "Schnelle Schlüsselgenerierung", nl: "Snelle sleutel generatie" },
        { en: "Well-understood mathematical foundation and resistance to quantum attacks", es: "Fundamento matemático bien entendido y resistencia a ataques cuánticos", de: "Gut verstandene mathematische Grundlage und Widerstand gegen Quantenangriffe", nl: "Goed begrepen wiskundige basis en weerstand tegen quantum aanvallen" },
        { en: "Small key sizes", es: "Tamaños de clave pequeños", de: "Kleine Schlüsselgrößen", nl: "Kleine sleutel groottes" },
        { en: "Simple implementation", es: "Implementación simple", de: "Einfache Implementierung", nl: "Eenvoudige implementatie" }
      ],
      correct: 1,
      explanation: {
        en: "Code-based cryptography relies on well-studied error-correcting codes and provides strong resistance to quantum attacks, making it a promising post-quantum cryptographic approach.",
        es: "La criptografía basada en códigos se basa en códigos correctores de errores bien estudiados y proporciona fuerte resistencia a ataques cuánticos, convirtiéndola en un enfoque criptográfico post-cuántico prometedor.",
        de: "Code-basierte Kryptographie basiert auf gut erforschten fehlerkorrigierenden Codes und bietet starken Widerstand gegen Quantenangriffe, was sie zu einem vielversprechenden Post-Quanten-kryptographischen Ansatz macht.",
        nl: "Code-gebaseerde cryptografie is gebaseerd op goed bestudeerde fout-corrigerende codes en biedt sterke weerstand tegen quantum aanvallen, waardoor het een veelbelovende post-quantum cryptografische benadering is."
      }
    },
    {
      question: {
        en: "What is differential privacy in cryptographic contexts?",
        es: "¿Qué es la privacidad diferencial en contextos criptográficos?",
        de: "Was ist differentielle Privatsphäre in kryptographischen Kontexten?",
        nl: "Wat is differentiële privacy in cryptografische contexten?"
      },
      options: [
        { en: "Privacy for different user types", es: "Privacidad para diferentes tipos de usuarios", de: "Privatsphäre für verschiedene Benutzertypen", nl: "Privacy voor verschillende gebruiker types" },
        { en: "Mathematical framework quantifying privacy loss in data analysis", es: "Marco matemático que cuantifica la pérdida de privacidad en análisis de datos", de: "Mathematisches Framework zur Quantifizierung des Privatsphärenverlusts in der Datenanalyse", nl: "Wiskundig raamwerk dat privacy verlies in data analyse kwantificeert" },
        { en: "Selective data encryption", es: "Cifrado selectivo de datos", de: "Selektive Datenverschlüsselung", nl: "Selectieve data encryptie" },
        { en: "Variable privacy settings", es: "Configuraciones de privacidad variables", de: "Variable Privatsphäre-Einstellungen", nl: "Variabele privacy instellingen" }
      ],
      correct: 1,
      explanation: {
        en: "Differential privacy provides a mathematical definition of privacy that quantifies the privacy loss incurred by including an individual's data in a dataset, enabling privacy-preserving data analysis.",
        es: "La privacidad diferencial proporciona una definición matemática de privacidad que cuantifica la pérdida de privacidad incurrida al incluir los datos de un individuo en un conjunto de datos, habilitando análisis de datos que preserva privacidad.",
        de: "Differentielle Privatsphäre bietet eine mathematische Definition von Privatsphäre, die den Privatsphärenverlust quantifiziert, der durch die Einbeziehung der Daten einer Person in einen Datensatz entsteht, und ermöglicht datenschutzerhaltende Datenanalyse.",
        nl: "Differentiële privacy biedt een wiskundige definitie van privacy die het privacy verlies kwantificeert dat wordt opgelopen door de data van een individu in een dataset op te nemen, waardoor privacy-behoudende data analyse mogelijk wordt."
      }
    },
    {
      question: {
        en: "What is the purpose of cryptographic compilers?",
        es: "¿Cuál es el propósito de los compiladores criptográficos?",
        de: "Was ist der Zweck kryptographischer Compiler?",
        nl: "Wat is het doel van cryptografische compilers?"
      },
      options: [
        { en: "Compiling cryptographic source code", es: "Compilar código fuente criptográfico", de: "Kompilieren von kryptographischem Quellcode", nl: "Compileren van cryptografische broncode" },
        { en: "Automatically generating efficient and secure cryptographic implementations from high-level specifications", es: "Generar automáticamente implementaciones criptográficas eficientes y seguras a partir de especificaciones de alto nivel", de: "Automatische Generierung effizienter und sicherer kryptographischer Implementierungen aus hochrangigen Spezifikationen", nl: "Automatisch genereren van efficiënte en veilige cryptografische implementaties uit hoog-niveau specificaties" },
        { en: "Optimizing cryptographic algorithms", es: "Optimizar algoritmos criptográficos", de: "Optimierung kryptographischer Algorithmen", nl: "Optimaliseren van cryptografische algoritmen" },
        { en: "Creating cryptographic documentation", es: "Crear documentación criptográfica", de: "Erstellen kryptographischer Dokumentation", nl: "Cryptografische documentatie creëren" }
      ],
      correct: 1,
      explanation: {
        en: "Cryptographic compilers automatically translate high-level cryptographic protocol descriptions into efficient, secure, and correct implementations, reducing development time and potential security vulnerabilities.",
        es: "Los compiladores criptográficos traducen automáticamente descripciones de protocolos criptográficos de alto nivel en implementaciones eficientes, seguras y correctas, reduciendo tiempo de desarrollo y vulnerabilidades de seguridad potenciales.",
        de: "Kryptographische Compiler übersetzen automatisch hochrangige kryptographische Protokollbeschreibungen in effiziente, sichere und korrekte Implementierungen, wodurch Entwicklungszeit und potentielle Sicherheitsschwachstellen reduziert werden.",
        nl: "Cryptografische compilers vertalen automatisch hoog-niveau cryptografische protocol beschrijvingen naar efficiënte, veilige en correcte implementaties, waardoor ontwikkelings tijd en potentiële beveiligings kwetsbaarheden worden verminderd."
      }
    },
    {
      question: {
        en: "What is homomorphic signatures?",
        es: "¿Qué son las firmas homomórficas?",
        de: "Was sind homomorphe Signaturen?",
        nl: "Wat zijn homomorfische handtekeningen?"
      },
      options: [
        { en: "Signatures with similar structure", es: "Firmas con estructura similar", de: "Signaturen mit ähnlicher Struktur", nl: "Handtekeningen met vergelijkbare structuur" },
        { en: "Digital signatures that allow computation on signed data while preserving authenticity", es: "Firmas digitales que permiten cálculo en datos firmados mientras preservan autenticidad", de: "Digitale Signaturen, die Berechnungen auf signierten Daten ermöglichen, während die Authentizität erhalten bleibt", nl: "Digitale handtekeningen die berekening op ondertekende data mogelijk maken terwijl authenticiteit behouden blijft" },
        { en: "Multi-party signature schemes", es: "Esquemas de firma multi-parte", de: "Mehrteilige Signaturschemas", nl: "Multi-partij handtekening schema's" },
        { en: "Encrypted signature formats", es: "Formatos de firma cifrados", de: "Verschlüsselte Signaturformate", nl: "Versleutelde handtekening formaten" }
      ],
      correct: 1,
      explanation: {
        en: "Homomorphic signatures enable computation on signed data such that the result carries a signature that can be verified as authentic, useful for verifiable computation and cloud computing scenarios.",
        es: "Las firmas homomórficas permiten cálculo en datos firmados tal que el resultado lleva una firma que puede verificarse como auténtica, útil para cálculo verificable y escenarios de computación en la nube.",
        de: "Homomorphe Signaturen ermöglichen Berechnungen auf signierten Daten, sodass das Ergebnis eine Signatur trägt, die als authentisch verifiziert werden kann, nützlich für verifizierbare Berechnung und Cloud-Computing-Szenarien.",
        nl: "Homomorfische handtekeningen maken berekening op ondertekende data mogelijk zodanig dat het resultaat een handtekening draagt die als authentiek kan worden geverifieerd, nuttig voor verifieerbare berekening en cloud computing scenario's."
      }
    },
    {
      question: {
        en: "What is the significance of cryptographic assumptions in security proofs?",
        es: "¿Cuál es la importancia de las suposiciones criptográficas en pruebas de seguridad?",
        de: "Was ist die Bedeutung kryptographischer Annahmen in Sicherheitsbeweisen?",
        nl: "Wat is de betekenis van cryptografische aannames in beveiligings bewijzen?"
      },
      options: [
        { en: "They provide absolute security guarantees", es: "Proporcionan garantías de seguridad absolutas", de: "Sie bieten absolute Sicherheitsgarantien", nl: "Ze bieden absolute beveiligings garanties" },
        { en: "They form the mathematical foundation upon which security arguments are built", es: "Forman la base matemática sobre la cual se construyen argumentos de seguridad", de: "Sie bilden die mathematische Grundlage, auf der Sicherheitsargumente aufgebaut werden", nl: "Ze vormen de wiskundige basis waarop beveiligings argumenten zijn gebouwd" },
        { en: "They eliminate all possible attacks", es: "Eliminan todos los ataques posibles", de: "Sie eliminieren alle möglichen Angriffe", nl: "Ze elimineren alle mogelijke aanvallen" },
        { en: "They guarantee practical security", es: "Garantizan seguridad práctica", de: "Sie garantieren praktische Sicherheit", nl: "Ze garanderen praktische beveiliging" }
      ],
      correct: 1,
      explanation: {
        en: "Cryptographic assumptions (like discrete logarithm or factoring hardness) provide the mathematical foundation for security proofs, allowing us to reduce the security of complex protocols to well-studied computational problems.",
        es: "Las suposiciones criptográficas (como logaritmo discreto o dificultad de factorización) proporcionan la base matemática para pruebas de seguridad, permitiéndonos reducir la seguridad de protocolos complejos a problemas computacionales bien estudiados.",
        de: "Kryptographische Annahmen (wie diskrete Logarithmus- oder Faktorisierungsschwierigkeit) bieten die mathematische Grundlage für Sicherheitsbeweise und ermöglichen es uns, die Sicherheit komplexer Protokolle auf gut erforschte rechnerische Probleme zu reduzieren.",
        nl: "Cryptografische aannames (zoals discrete logaritme of factorisatie hardheid) bieden de wiskundige basis voor beveiligings bewijzen, waardoor we de beveiliging van complexe protocollen kunnen reduceren tot goed bestudeerde computationele problemen."
      }
    },
    {
      question: {
        en: "What is the role of random oracles in cryptographic proofs?",
        es: "¿Cuál es el papel de los oráculos aleatorios en pruebas criptográficas?",
        de: "Was ist die Rolle von Zufallsorakeln in kryptographischen Beweisen?",
        nl: "Wat is de rol van random orakels in cryptografische bewijzen?"
      },
      options: [
        { en: "They provide true randomness", es: "Proporcionan aleatoriedad verdadera", de: "Sie bieten wahre Zufälligkeit", nl: "Ze bieden echte willekeurigheid" },
        { en: "Idealized mathematical objects that model hash functions as perfectly random", es: "Objetos matemáticos idealizados que modelan funciones hash como perfectamente aleatorias", de: "Idealisierte mathematische Objekte, die Hash-Funktionen als perfekt zufällig modellieren", nl: "Geïdealiseerde wiskundige objecten die hash functies als perfect willekeurig modelleren" },
        { en: "Hardware random number generators", es: "Generadores de números aleatorios por hardware", de: "Hardware-Zufallszahlengeneratoren", nl: "Hardware willekeurige nummer generatoren" },
        { en: "Database query systems", es: "Sistemas de consulta de base de datos", de: "Datenbankabfragesysteme", nl: "Database query systemen" }
      ],
      correct: 1,
      explanation: {
        en: "Random oracles are theoretical constructs used in cryptographic proofs to model hash functions as ideally random functions, allowing for security proofs that may not hold for real hash functions.",
        es: "Los oráculos aleatorios son constructos teóricos usados en pruebas criptográficas para modelar funciones hash como funciones idealmente aleatorias, permitiendo pruebas de seguridad que pueden no ser válidas para funciones hash reales.",
        de: "Zufallsorakel sind theoretische Konstrukte, die in kryptographischen Beweisen verwendet werden, um Hash-Funktionen als ideal zufällige Funktionen zu modellieren, wodurch Sicherheitsbeweise ermöglicht werden, die für echte Hash-Funktionen möglicherweise nicht gelten.",
        nl: "Random orakels zijn theoretische constructies gebruikt in cryptografische bewijzen om hash functies te modelleren als ideaal willekeurige functies, waardoor beveiligings bewijzen mogelijk worden die mogelijk niet gelden voor echte hash functies."
      }
    },
    {
      question: {
        en: "What is cryptographic composability?",
        es: "¿Qué es la composabilidad criptográfica?",
        de: "Was ist kryptographische Komposabilität?",
        nl: "Wat is cryptografische composeerbaarheid?"
      },
      options: [
        { en: "Combining multiple cryptographic algorithms", es: "Combinar múltiples algoritmos criptográficos", de: "Kombinieren mehrerer kryptographischer Algorithmen", nl: "Combineren van meerdere cryptografische algoritmen" },
        { en: "Property ensuring that secure protocols remain secure when composed together", es: "Propiedad que asegura que protocolos seguros permanecen seguros cuando se componen juntos", de: "Eigenschaft, die sicherstellt, dass sichere Protokolle sicher bleiben, wenn sie zusammenkomponiert werden", nl: "Eigenschap die zorgt dat veilige protocollen veilig blijven wanneer ze samen worden samengesteld" },
        { en: "Modular cryptographic design", es: "Diseño criptográfico modular", de: "Modulares kryptographisches Design", nl: "Modulair cryptografisch ontwerp" },
        { en: "Reusable cryptographic components", es: "Componentes criptográficos reutilizables", de: "Wiederverwendbare kryptographische Komponenten", nl: "Herbruikbare cryptografische componenten" }
      ],
      correct: 1,
      explanation: {
        en: "Cryptographic composability ensures that when multiple secure protocols are combined or run concurrently, the overall system remains secure, which is crucial for building complex secure systems.",
        es: "La composabilidad criptográfica asegura que cuando múltiples protocolos seguros se combinan o ejecutan concurrentemente, el sistema general permanece seguro, lo cual es crucial para construir sistemas seguros complejos.",
        de: "Kryptographische Komposabilität stellt sicher, dass wenn mehrere sichere Protokolle kombiniert oder gleichzeitig ausgeführt werden, das Gesamtsystem sicher bleibt, was für den Aufbau komplexer sicherer Systeme entscheidend ist.",
        nl: "Cryptografische composeerbaarheid zorgt ervoor dat wanneer meerdere veilige protocollen worden gecombineerd of gelijktijdig worden uitgevoerd, het algehele systeem veilig blijft, wat cruciaal is voor het bouwen van complexe veilige systemen."
      }
    },
    {
      question: {
        en: "What is the universal composability (UC) framework?",
        es: "¿Qué es el marco de composabilidad universal (UC)?",
        de: "Was ist das Universal Composability (UC) Framework?",
        nl: "Wat is het universele composeerbaarheid (UC) raamwerk?"
      },
      options: [
        { en: "A programming framework for cryptography", es: "Un marco de programación para criptografía", de: "Ein Programmierungsrahmen für Kryptographie", nl: "Een programmeer raamwerk voor cryptografie" },
        { en: "Theoretical framework for analyzing security of cryptographic protocols under composition", es: "Marco teórico para analizar seguridad de protocolos criptográficos bajo composición", de: "Theoretischer Rahmen zur Analyse der Sicherheit kryptographischer Protokolle unter Komposition", nl: "Theoretisch raamwerk voor het analyseren van beveiliging van cryptografische protocollen onder compositie" },
        { en: "Universal cryptographic standard", es: "Estándar criptográfico universal", de: "Universeller kryptographischer Standard", nl: "Universele cryptografische standaard" },
        { en: "Cross-platform cryptographic library", es: "Biblioteca criptográfica multiplataforma", de: "Plattformübergreifende kryptographische Bibliothek", nl: "Cross-platform cryptografische bibliotheek" }
      ],
      correct: 1,
      explanation: {
        en: "The UC framework provides a rigorous theoretical foundation for proving that cryptographic protocols maintain their security properties when composed with other protocols in arbitrary environments.",
        es: "El marco UC proporciona una base teórica rigurosa para probar que protocolos criptográficos mantienen sus propiedades de seguridad cuando se componen con otros protocolos en ambientes arbitrarios.",
        de: "Das UC-Framework bietet eine rigorose theoretische Grundlage für den Beweis, dass kryptographische Protokolle ihre Sicherheitseigenschaften beibehalten, wenn sie mit anderen Protokollen in beliebigen Umgebungen komponiert werden.",
        nl: "Het UC raamwerk biedt een rigoureuze theoretische basis voor het bewijzen dat cryptografische protocollen hun beveiligings eigenschappen behouden wanneer ze worden samengesteld met andere protocollen in willekeurige omgevingen."
      }
    },
    {
      question: {
        en: "What is adaptive security in cryptographic protocols?",
        es: "¿Qué es la seguridad adaptiva en protocolos criptográficos?",
        de: "Was ist adaptive Sicherheit in kryptographischen Protokollen?",
        nl: "Wat is adaptieve beveiliging in cryptografische protocollen?"
      },
      options: [
        { en: "Security that adjusts to network conditions", es: "Seguridad que se ajusta a condiciones de red", de: "Sicherheit, die sich an Netzwerkbedingungen anpasst", nl: "Beveiliging die zich aanpast aan netwerk condities" },
        { en: "Security against adversaries who can corrupt parties based on information learned during execution", es: "Seguridad contra adversarios que pueden corromper partes basándose en información aprendida durante ejecución", de: "Sicherheit gegen Angreifer, die Parteien basierend auf während der Ausführung erlernten Informationen korrumpieren können", nl: "Beveiliging tegen tegenstanders die partijen kunnen corrumperen gebaseerd op informatie geleerd tijdens uitvoering" },
        { en: "Self-modifying cryptographic algorithms", es: "Algoritmos criptográficos que se auto-modifican", de: "Selbstmodifizierende kryptographische Algorithmen", nl: "Zelf-modificerende cryptografische algoritmen" },
        { en: "Dynamic key generation", es: "Generación dinámica de claves", de: "Dynamische Schlüsselgenerierung", nl: "Dynamische sleutel generatie" }
      ],
      correct: 1,
      explanation: {
        en: "Adaptive security protects against adversaries who can dynamically choose which parties to corrupt during protocol execution based on the information they observe, representing a stronger security model than static corruption.",
        es: "La seguridad adaptiva protege contra adversarios que pueden elegir dinámicamente qué partes corromper durante ejecución de protocolo basándose en información que observan, representando un modelo de seguridad más fuerte que corrupción estática.",
        de: "Adaptive Sicherheit schützt vor Angreifern, die dynamisch wählen können, welche Parteien sie während der Protokollausführung basierend auf beobachteten Informationen korrumpieren, was ein stärkeres Sicherheitsmodell als statische Korruption darstellt.",
        nl: "Adaptieve beveiliging beschermt tegen tegenstanders die dynamisch kunnen kiezen welke partijen te corrumperen tijdens protocol uitvoering gebaseerd op de informatie die ze observeren, wat een sterker beveiligings model vertegenwoordigt dan statische corruptie."
      }
    },
    {
      question: {
        en: "What is the difference between computational and information-theoretic security?",
        es: "¿Cuál es la diferencia entre seguridad computacional y teórica de información?",
        de: "Was ist der Unterschied zwischen rechnerischer und informationstheoretischer Sicherheit?",
        nl: "Wat is het verschil tussen computationele en informatie-theoretische beveiliging?"
      },
      options: [
        { en: "Computational is faster than information-theoretic", es: "Computacional es más rápido que teórica de información", de: "Rechnerisch ist schneller als informationstheoretisch", nl: "Computationeel is sneller dan informatie-theoretisch" },
        { en: "Computational relies on hardness assumptions while information-theoretic provides unconditional security", es: "Computacional se basa en suposiciones de dificultad mientras teórica de información proporciona seguridad incondicional", de: "Rechnerische basiert auf Schwierigkeitsannahmen, während informationstheoretische unbedingte Sicherheit bietet", nl: "Computationeel vertrouwt op hardheids aannames terwijl informatie-theoretisch onvoorwaardelijke beveiliging biedt" },
        { en: "Information-theoretic uses more computation", es: "Teórica de información usa más computación", de: "Informationstheoretisch verwendet mehr Berechnung", nl: "Informatie-theoretisch gebruikt meer berekening" },
        { en: "They are equivalent security levels", es: "Son niveles de seguridad equivalentes", de: "Sie sind äquivalente Sicherheitsstufen", nl: "Ze zijn equivalente beveiligings niveaus" }
      ],
      correct: 1,
      explanation: {
        en: "Computational security assumes that certain computational problems are hard to solve (like factoring), while information-theoretic security provides unconditional protection regardless of computational power, often requiring additional resources like perfect secrecy.",
        es: "La seguridad computacional asume que ciertos problemas computacionales son difíciles de resolver (como factorización), mientras la seguridad teórica de información proporciona protección incondicional sin importar poder computacional, a menudo requiriendo recursos adicionales como secreto perfecto.",
        de: "Rechnerische Sicherheit nimmt an, dass bestimmte rechnerische Probleme schwer zu lösen sind (wie Faktorisierung), während informationstheoretische Sicherheit unbedingten Schutz unabhängig von Rechenleistung bietet, oft zusätzliche Ressourcen wie perfekte Geheimhaltung erfordert.",
        nl: "Computationele beveiliging veronderstelt dat bepaalde computationele problemen moeilijk op te lossen zijn (zoals factorisatie), terwijl informatie-theoretische beveiliging onvoorwaardelijke bescherming biedt ongeacht computationele kracht, vaak extra bronnen vereist zoals perfecte geheimhouding."
      }
    },
    {
      question: {
        en: "What is the significance of the simulation paradigm in cryptography?",
        es: "¿Cuál es la importancia del paradigma de simulación en criptografía?",
        de: "Was ist die Bedeutung des Simulationsparadigmas in der Kryptographie?",
        nl: "Wat is de betekenis van het simulatie paradigma in cryptografie?"
      },
      options: [
        { en: "It allows testing cryptographic systems", es: "Permite probar sistemas criptográficos", de: "Es ermöglicht das Testen kryptographischer Systeme", nl: "Het maakt het testen van cryptografische systemen mogelijk" },
        { en: "Framework for proving security by showing that attacks can be simulated without access to secrets", es: "Marco para probar seguridad mostrando que ataques pueden ser simulados sin acceso a secretos", de: "Rahmen zum Beweis der Sicherheit durch Zeigen, dass Angriffe ohne Zugang zu Geheimnissen simuliert werden können", nl: "Raamwerk voor het bewijzen van beveiliging door te tonen dat aanvallen kunnen worden gesimuleerd zonder toegang tot geheimen" },
        { en: "Virtual cryptographic environments", es: "Ambientes criptográficos virtuales", de: "Virtuelle kryptographische Umgebungen", nl: "Virtuele cryptografische omgevingen" },
        { en: "Computer modeling of encryption", es: "Modelado computacional de cifrado", de: "Computermodellierung von Verschlüsselung", nl: "Computer modellering van encryptie" }
      ],
      correct: 1,
      explanation: {
        en: "The simulation paradigm is a fundamental proof technique in cryptography where security is demonstrated by showing that any attack on the real protocol can be efficiently simulated without access to secret information.",
        es: "El paradigma de simulación es una técnica fundamental de prueba en criptografía donde la seguridad se demuestra mostrando que cualquier ataque al protocolo real puede ser simulado eficientemente sin acceso a información secreta.",
        de: "Das Simulationsparadigma ist eine grundlegende Beweistechnik in der Kryptographie, bei der Sicherheit durch das Zeigen demonstriert wird, dass jeder Angriff auf das reale Protokoll effizient ohne Zugang zu geheimen Informationen simuliert werden kann.",
        nl: "Het simulatie paradigma is een fundamentele bewijs techniek in cryptografie waarbij beveiliging wordt aangetoond door te laten zien dat elke aanval op het echte protocol efficiënt kan worden gesimuleerd zonder toegang tot geheime informatie."
      }
    },
    {
      question: {
        en: "What is the importance of forward security in cryptographic systems?",
        es: "¿Cuál es la importancia de la seguridad hacia adelante en sistemas criptográficos?",
        de: "Was ist die Bedeutung von Forward-Sicherheit in kryptographischen Systemen?",
        nl: "Wat is het belang van forward beveiliging in cryptografische systemen?"
      },
      options: [
        { en: "Future-proofing against new attacks", es: "Protección futura contra nuevos ataques", de: "Zukunftssicherung gegen neue Angriffe", nl: "Toekomst-bestendig maken tegen nieuwe aanvallen" },
        { en: "Ensuring that compromise of current keys does not affect security of past communications", es: "Asegurar que el compromiso de claves actuales no afecte seguridad de comunicaciones pasadas", de: "Sicherstellen, dass Kompromittierung aktueller Schlüssel die Sicherheit vergangener Kommunikation nicht beeinträchtigt", nl: "Zorgen dat compromittering van huidige sleutels de beveiliging van eerdere communicaties niet beïnvloedt" },
        { en: "Predicting future security threats", es: "Predecir amenazas de seguridad futuras", de: "Vorhersage zukünftiger Sicherheitsbedrohungen", nl: "Voorspellen van toekomstige beveiligings dreigingen" },
        { en: "Automatic security updates", es: "Actualizaciones de seguridad automáticas", de: "Automatische Sicherheitsupdates", nl: "Automatische beveiligings updates" }
      ],
      correct: 1,
      explanation: {
        en: "Forward security ensures that even if long-term keys are compromised, previously encrypted communications remain secure, which is crucial for protecting historical data against future breaches.",
        es: "La seguridad hacia adelante asegura que incluso si claves a largo plazo son comprometidas, comunicaciones previamente cifradas permanecen seguras, lo cual es crucial para proteger datos históricos contra brechas futuras.",
        de: "Forward-Sicherheit stellt sicher, dass auch wenn Langzeitschlüssel kompromittiert werden, zuvor verschlüsselte Kommunikation sicher bleibt, was entscheidend für den Schutz historischer Daten vor zukünftigen Verstößen ist.",
        nl: "Forward beveiliging zorgt ervoor dat zelfs als lange-termijn sleutels worden gecompromitteerd, eerder versleutelde communicaties veilig blijven, wat cruciaal is voor het beschermen van historische data tegen toekomstige inbreuken."
      }
    },
    {
      question: {
        en: "What is the challenge of implementing cryptography in resource-constrained devices?",
        es: "¿Cuál es el desafío de implementar criptografía en dispositivos con recursos limitados?",
        de: "Was ist die Herausforderung bei der Implementierung von Kryptographie in ressourcenbeschränkten Geräten?",
        nl: "Wat is de uitdaging van het implementeren van cryptografie in resource-beperkte apparaten?"
      },
      options: [
        { en: "Lack of cryptographic standards for embedded systems", es: "Falta de estándares criptográficos para sistemas embebidos", de: "Mangel an kryptographischen Standards für eingebettete Systeme", nl: "Gebrek aan cryptografische standaarden voor embedded systemen" },
        { en: "Balancing security requirements with limited computational power, memory, and energy", es: "Equilibrar requisitos de seguridad con poder computacional, memoria y energía limitados", de: "Ausbalancierung von Sicherheitsanforderungen mit begrenzter Rechenleistung, Speicher und Energie", nl: "Balanceren van beveiligings vereisten met beperkte computationele kracht, geheugen en energie" },
        { en: "Difficulty in hardware manufacturing", es: "Dificultad en manufactura de hardware", de: "Schwierigkeit in der Hardware-Herstellung", nl: "Moeilijkheid in hardware fabricage" },
        { en: "Incompatible communication protocols", es: "Protocolos de comunicación incompatibles", de: "Inkompatible Kommunikationsprotokolle", nl: "Incompatibele communicatie protocollen" }
      ],
      correct: 1,
      explanation: {
        en: "Resource-constrained devices like IoT sensors and smart cards must implement cryptography within strict limits on processing power, memory, battery life, and cost, requiring specialized lightweight cryptographic solutions.",
        es: "Dispositivos con recursos limitados como sensores IoT y tarjetas inteligentes deben implementar criptografía dentro de límites estrictos de poder de procesamiento, memoria, vida de batería y costo, requiriendo soluciones criptográficas ligeras especializadas.",
        de: "Ressourcenbeschränkte Geräte wie IoT-Sensoren und Smart Cards müssen Kryptographie innerhalb strenger Grenzen von Verarbeitungsleistung, Speicher, Akkulaufzeit und Kosten implementieren, was spezialisierte leichtgewichtige kryptographische Lösungen erfordert.",
        nl: "Resource-beperkte apparaten zoals IoT sensoren en smart cards moeten cryptografie implementeren binnen strikte limieten van verwerkings kracht, geheugen, batterij leven en kosten, wat gespecialiseerde lichtgewicht cryptografische oplossingen vereist."
      }
    },
    {
      question: {
        en: "What is the role of cryptographic standards organizations?",
        es: "¿Cuál es el papel de las organizaciones de estándares criptográficos?",
        de: "Was ist die Rolle kryptographischer Standards-Organisationen?",
        nl: "Wat is de rol van cryptografische standaard organisaties?"
      },
      options: [
        { en: "Creating proprietary cryptographic algorithms", es: "Crear algoritmos criptográficos propietarios", de: "Erstellung proprietärer kryptographischer Algorithmen", nl: "Het creëren van eigendomsrechtelijke cryptografische algoritmen" },
        { en: "Establishing interoperable, vetted cryptographic standards for widespread adoption", es: "Establecer estándares criptográficos interoperables y examinados para adopción generalizada", de: "Etablierung interoperabler, geprüfter kryptographischer Standards für weitverbreitete Adoption", nl: "Het vestigen van interoperabele, onderzochte cryptografische standaarden voor wijdverspreide adoptie" },
        { en: "Regulating cryptographic research", es: "Regular investigación criptográfica", de: "Regulierung kryptographischer Forschung", nl: "Het reguleren van cryptografisch onderzoek" },
        { en: "Licensing cryptographic implementations", es: "Licenciar implementaciones criptográficas", de: "Lizenzierung kryptographischer Implementierungen", nl: "Het licentiëren van cryptografische implementaties" }
      ],
      correct: 1,
      explanation: {
        en: "Organizations like NIST, ISO, and IETF play crucial roles in developing, standardizing, and promoting cryptographic algorithms and protocols that ensure interoperability and security across different systems and vendors.",
        es: "Organizaciones como NIST, ISO e IETF juegan papeles cruciales en desarrollar, estandarizar y promover algoritmos y protocolos criptográficos que aseguran interoperabilidad y seguridad entre diferentes sistemas y vendedores.",
        de: "Organisationen wie NIST, ISO und IETF spielen entscheidende Rollen bei der Entwicklung, Standardisierung und Förderung kryptographischer Algorithmen und Protokolle, die Interoperabilität und Sicherheit zwischen verschiedenen Systemen und Anbietern gewährleisten.",
        nl: "Organisaties zoals NIST, ISO en IETF spelen cruciale rollen bij het ontwikkelen, standaardiseren en promoten van cryptografische algoritmen en protocollen die interoperabiliteit en beveiliging tussen verschillende systemen en leveranciers waarborgen."
      }
    },
    {
      question: {
        en: "What is the significance of cryptographic hash function families?",
        es: "¿Cuál es la importancia de las familias de funciones hash criptográficas?",
        de: "Was ist die Bedeutung kryptographischer Hash-Funktionsfamilien?",
        nl: "Wat is de betekenis van cryptografische hash functie families?"
      },
      options: [
        { en: "Different hash functions for different data types", es: "Diferentes funciones hash para diferentes tipos de datos", de: "Verschiedene Hash-Funktionen für verschiedene Datentypen", nl: "Verschillende hash functies voor verschillende data types" },
        { en: "Collections of related hash functions providing security against various attack vectors", es: "Colecciones de funciones hash relacionadas que proporcionan seguridad contra varios vectores de ataque", de: "Sammlungen verwandter Hash-Funktionen, die Sicherheit gegen verschiedene Angriffsvektoren bieten", nl: "Verzamelingen van gerelateerde hash functies die beveiliging bieden tegen verschillende aanvals vectoren" },
        { en: "Backward compatibility for hash functions", es: "Compatibilidad hacia atrás para funciones hash", de: "Rückwärtskompatibilität für Hash-Funktionen", nl: "Achterwaartse compatibiliteit voor hash functies" },
        { en: "Performance optimization techniques", es: "Técnicas de optimización de rendimiento", de: "Leistungsoptimierungstechniken", nl: "Prestatie optimalisatie technieken" }
      ],
      correct: 1,
      explanation: {
        en: "Cryptographic hash function families like SHA-2 and SHA-3 provide multiple variants with different output sizes and security properties, allowing selection of appropriate hash functions for specific security requirements and performance constraints.",
        es: "Familias de funciones hash criptográficas como SHA-2 y SHA-3 proporcionan múltiples variantes con diferentes tamaños de salida y propiedades de seguridad, permitiendo selección de funciones hash apropiadas para requisitos específicos de seguridad y restricciones de rendimiento.",
        de: "Kryptographische Hash-Funktionsfamilien wie SHA-2 und SHA-3 bieten mehrere Varianten mit verschiedenen Ausgabegrößen und Sicherheitseigenschaften, wodurch die Auswahl geeigneter Hash-Funktionen für spezifische Sicherheitsanforderungen und Leistungsbeschränkungen ermöglicht wird.",
        nl: "Cryptografische hash functie families zoals SHA-2 en SHA-3 bieden meerdere varianten met verschillende output groottes en beveiligings eigenschappen, waardoor selectie van geschikte hash functies voor specifieke beveiligings vereisten en prestatie beperkingen mogelijk wordt."
      }
    },
    {
      question: {
        en: "What is the importance of cryptographic key lifecycle management?",
        es: "¿Cuál es la importancia de la gestión del ciclo de vida de claves criptográficas?",
        de: "Was ist die Bedeutung des kryptographischen Schlüssel-Lebenszyklus-Managements?",
        nl: "Wat is het belang van cryptografische sleutel levenscyclus beheer?"
      },
      options: [
        { en: "Organizing cryptographic keys by date", es: "Organizar claves criptográficas por fecha", de: "Organisation kryptographischer Schlüssel nach Datum", nl: "Het organiseren van cryptografische sleutels op datum" },
        { en: "Managing the complete lifecycle from generation to secure destruction of cryptographic keys", es: "Gestionar el ciclo de vida completo desde generación hasta destrucción segura de claves criptográficas", de: "Verwaltung des vollständigen Lebenszyklus von der Generierung bis zur sicheren Zerstörung kryptographischer Schlüssel", nl: "Het beheren van de volledige levenscyclus van generatie tot veilige vernietiging van cryptografische sleutels" },
        { en: "Automatic key renewal systems", es: "Sistemas de renovación automática de claves", de: "Automatische Schlüsselerneuerungssysteme", nl: "Automatische sleutel vernieuwings systemen" },
        { en: "Key performance monitoring", es: "Monitoreo de rendimiento de claves", de: "Schlüssel-Leistungsüberwachung", nl: "Sleutel prestatie monitoring" }
      ],
      correct: 1,
      explanation: {
        en: "Proper key lifecycle management encompasses secure key generation, distribution, storage, rotation, revocation, and destruction, ensuring that cryptographic keys maintain their security properties throughout their operational lifetime.",
        es: "La gestión adecuada del ciclo de vida de claves abarca generación, distribución, almacenamiento, rotación, revocación y destrucción seguros de claves, asegurando que las claves criptográficas mantengan sus propiedades de seguridad durante su tiempo de vida operacional.",
        de: "Ordnungsgemäßes Schlüssel-Lebenszyklus-Management umfasst sichere Schlüsselgenerierung, -verteilung, -speicherung, -rotation, -widerruf und -zerstörung und stellt sicher, dass kryptographische Schlüssel ihre Sicherheitseigenschaften während ihrer Betriebszeit beibehalten.",
        nl: "Juist sleutel levenscyclus beheer omvat veilige sleutel generatie, distributie, opslag, rotatie, intrekking en vernietiging, wat zorgt dat cryptografische sleutels hun beveiligings eigenschappen behouden gedurende hun operationele levensduur."
      }
    },
    {
      question: {
        en: "What is the future of quantum-safe cryptographic transitions?",
        es: "¿Cuál es el futuro de las transiciones criptográficas seguras cuánticamente?",
        de: "Was ist die Zukunft quantensicherer kryptographischer Übergänge?",
        nl: "Wat is de toekomst van quantum-veilige cryptografische overgangen?"
      },
      options: [
        { en: "Immediate replacement of all current cryptography", es: "Reemplazo inmediato de toda la criptografía actual", de: "Sofortiger Ersatz aller aktuellen Kryptographie", nl: "Onmiddellijke vervanging van alle huidige cryptografie" },
        { en: "Gradual, hybrid approach combining classical and post-quantum cryptography during transition period", es: "Enfoque gradual e híbrido combinando criptografía clásica y post-cuántica durante período de transición", de: "Gradueller, hybrider Ansatz, der klassische und Post-Quanten-Kryptographie während der Übergangszeit kombiniert", nl: "Geleidelijke, hybride benadering die klassieke en post-quantum cryptografie combineert tijdens overgangs periode" },
        { en: "Waiting for quantum computers to become available", es: "Esperar que las computadoras cuánticas estén disponibles", de: "Warten bis Quantencomputer verfügbar werden", nl: "Wachten tot quantum computers beschikbaar worden" },
        { en: "Abandoning cryptography altogether", es: "Abandonar la criptografía por completo", de: "Kryptographie vollständig aufgeben", nl: "Cryptografie volledig opgeven" }
      ],
      correct: 1,
      explanation: {
        en: "The transition to quantum-safe cryptography will likely be gradual, using hybrid approaches that combine classical and post-quantum algorithms to ensure security during the transition while maintaining interoperability and performance.",
        es: "La transición a criptografía segura cuánticamente probablemente será gradual, usando enfoques híbridos que combinan algoritmos clásicos y post-cuánticos para asegurar seguridad durante la transición mientras mantienen interoperabilidad y rendimiento.",
        de: "Der Übergang zu quantensicherer Kryptographie wird wahrscheinlich graduell sein, unter Verwendung hybrider Ansätze, die klassische und Post-Quanten-Algorithmen kombinieren, um Sicherheit während des Übergangs zu gewährleisten und gleichzeitig Interoperabilität und Leistung zu erhalten.",
        nl: "De overgang naar quantum-veilige cryptografie zal waarschijnlijk geleidelijk zijn, gebruik makend van hybride benaderingen die klassieke en post-quantum algoritmen combineren om beveiliging tijdens de overgang te waarborgen terwijl interoperabiliteit en prestatie behouden blijven."
      }
    },
    {
      question: {
        en: "What represents the convergence of cryptography and other emerging technologies?",
        es: "¿Qué representa la convergencia de criptografía y otras tecnologías emergentes?",
        de: "Was repräsentiert die Konvergenz von Kryptographie und anderen aufkommenden Technologien?",
        nl: "Wat vertegenwoordigt de convergentie van cryptografie en andere opkomende technologieën?"
      },
      options: [
        { en: "Replacement of traditional cryptography", es: "Reemplazo de criptografía tradicional", de: "Ersatz traditioneller Kryptographie", nl: "Vervanging van traditionele cryptografie" },
        { en: "Integration with AI, blockchain, IoT, and cloud computing to create comprehensive security solutions", es: "Integración con IA, blockchain, IoT y computación en la nube para crear soluciones de seguridad integrales", de: "Integration mit KI, Blockchain, IoT und Cloud Computing zur Schaffung umfassender Sicherheitslösungen", nl: "Integratie met AI, blockchain, IoT en cloud computing om uitgebreide beveiligings oplossingen te creëren" },
        { en: "Simplified cryptographic implementations", es: "Implementaciones criptográficas simplificadas", de: "Vereinfachte kryptographische Implementierungen", nl: "Vereenvoudigde cryptografische implementaties" },
        { en: "Separation of security domains", es: "Separación de dominios de seguridad", de: "Trennung von Sicherheitsdomänen", nl: "Scheiding van beveiligings domeinen" }
      ],
      correct: 1,
      explanation: {
        en: "The future of cryptography lies in its integration with emerging technologies like AI for threat detection, blockchain for decentralized trust, IoT for secure connectivity, and cloud computing for scalable security services, creating holistic security ecosystems.",
        es: "El futuro de la criptografía radica en su integración con tecnologías emergentes como IA para detección de amenazas, blockchain para confianza descentralizada, IoT para conectividad segura y computación en la nube para servicios de seguridad escalables, creando ecosistemas de seguridad holísticos.",
        de: "Die Zukunft der Kryptographie liegt in ihrer Integration mit aufkommenden Technologien wie KI für Bedrohungserkennung, Blockchain für dezentrales Vertrauen, IoT für sichere Konnektivität und Cloud Computing für skalierbare Sicherheitsdienste, wodurch ganzheitliche Sicherheitsökosysteme geschaffen werden.",
        nl: "De toekomst van cryptografie ligt in de integratie met opkomende technologieën zoals AI voor dreiging detectie, blockchain voor gedecentraliseerd vertrouwen, IoT voor veilige connectiviteit, en cloud computing voor schaalbare beveiligings services, waardoor holistische beveiligings ecosystemen ontstaan."
      }
    },
    {
      question: {
        en: "What is the fundamental challenge in implementing quantum-safe cryptography migration?",
        es: "¿Cuál es el desafío fundamental en implementar la migración de criptografía cuántica segura?",
        de: "Was ist die grundlegende Herausforderung bei der Implementierung der quantensicheren Kryptographie-Migration?",
        nl: "Wat is de fundamentele uitdaging bij het implementeren van kwantum-veilige cryptografie migratie?"
      },
      options: [
        { en: "Maintaining backward compatibility while ensuring post-quantum security", es: "Mantener compatibilidad hacia atrás mientras se asegura seguridad post-cuántica", de: "Aufrechterhaltung der Rückwärtskompatibilität bei gleichzeitiger Gewährleistung post-quantenkryptographischer Sicherheit", nl: "Behouden van achterwaartse compatibiliteit terwijl post-kwantum veiligheid wordt gewaarborgd" },
        { en: "Increasing key sizes to astronomical proportions", es: "Aumentar tamaños de claves a proporciones astronómicas", de: "Vergrößerung der Schlüsselgrößen auf astronomische Proportionen", nl: "Vergroten van sleutelgroottes tot astronomische proporties" },
        { en: "Converting all existing hardware immediately", es: "Convertir todo el hardware existente inmediatamente", de: "Sofortige Umwandlung aller bestehenden Hardware", nl: "Onmiddellijke conversie van alle bestaande hardware" },
        { en: "Eliminating classical cryptography entirely", es: "Eliminar completamente la criptografía clásica", de: "Vollständige Eliminierung der klassischen Kryptographie", nl: "Volledig elimineren van klassieke cryptografie" }
      ],
      correct: 0,
      explanation: {
        en: "The quantum-safe migration challenge involves transitioning to post-quantum algorithms while maintaining interoperability with existing systems, managing computational overhead, and ensuring a smooth transition period where both classical and quantum-resistant algorithms coexist.",
        es: "El desafío de migración cuántica segura implica transicionar a algoritmos post-cuánticos mientras se mantiene interoperabilidad con sistemas existentes, gestionando sobrecarga computacional y asegurando un período de transición suave donde coexistan algoritmos clásicos y resistentes a cuánticos.",
        de: "Die quantensichere Migrationsherausforderung beinhaltet den Übergang zu post-quantenkryptographischen Algorithmen bei gleichzeitiger Aufrechterhaltung der Interoperabilität mit bestehenden Systemen, Verwaltung des Rechenaufwands und Gewährleistung einer reibungslosen Übergangsphase, in der klassische und quantenresistente Algorithmen koexistieren.",
        nl: "De kwantum-veilige migratie uitdaging behelst de overgang naar post-kwantum algoritmen terwijl interoperabiliteit met bestaande systemen wordt behouden, computational overhead wordt beheerd, en een soepele overgangsperiode wordt gewaarborgd waarin zowel klassieke als kwantum-resistente algoritmen naast elkaar bestaan."
      }
    },
    {
      question: {
        en: "How do homomorphic encryption schemes achieve computation on encrypted data?",
        es: "¿Cómo logran los esquemas de cifrado homomórfico computación en datos cifrados?",
        de: "Wie erreichen homomorphe Verschlüsselungsschemata Berechnungen auf verschlüsselten Daten?",
        nl: "Hoe bereiken homomorfe versleutelings schema's berekeningen op versleutelde gegevens?"
      },
      options: [
        { en: "Preserving algebraic structure through carefully designed mathematical operations", es: "Preservando estructura algebraica a través de operaciones matemáticas cuidadosamente diseñadas", de: "Erhaltung der algebraischen Struktur durch sorgfältig entworfene mathematische Operationen", nl: "Behouden van algebraïsche structuur door zorgvuldig ontworpen wiskundige operaties" },
        { en: "Temporarily decrypting data for computation then re-encrypting", es: "Descifrando temporalmente datos para computación luego re-cifrando", de: "Temporäres Entschlüsseln von Daten für Berechnungen und anschließendes Wiederverschlüsseln", nl: "Tijdelijk ontsleutelen van gegevens voor berekening en dan opnieuw versleutelen" },
        { en: "Using quantum superposition for parallel processing", es: "Usando superposición cuántica para procesamiento paralelo", de: "Verwendung von Quantensuperposition für parallele Verarbeitung", nl: "Gebruik van kwantum superpositie voor parallelle verwerking" },
        { en: "Distributing computation across multiple secure servers", es: "Distribuyendo computación a través de múltiples servidores seguros", de: "Verteilung der Berechnung über mehrere sichere Server", nl: "Verdelen van berekening over meerdere veilige servers" }
      ],
      correct: 0,
      explanation: {
        en: "Homomorphic encryption maintains the algebraic relationships between plaintext operations and ciphertext operations, allowing computations to be performed directly on encrypted data without decryption, with results that when decrypted match what would have been computed on the original plaintext.",
        es: "El cifrado homomórfico mantiene las relaciones algebraicas entre operaciones de texto plano y operaciones de texto cifrado, permitiendo que las computaciones se realicen directamente en datos cifrados sin descifrar, con resultados que cuando se descifran coinciden con lo que se habría computado en el texto plano original.",
        de: "Homomorphe Verschlüsselung erhält die algebraischen Beziehungen zwischen Klartextoperationen und Chiffretextoperationen aufrecht, wodurch Berechnungen direkt auf verschlüsselten Daten ohne Entschlüsselung durchgeführt werden können, mit Ergebnissen, die bei Entschlüsselung dem entsprechen, was am ursprünglichen Klartext berechnet worden wäre.",
        nl: "Homomorfe versleuteling behoudt de algebraïsche relaties tussen plaintext operaties en ciphertext operaties, waardoor berekeningen direct kunnen worden uitgevoerd op versleutelde gegevens zonder ontsleuteling, met resultaten die wanneer ontsleuteld overeenkomen met wat zou zijn berekend op de originele plaintext."
      }
    },
    {
      question: {
        en: "What is the primary security concern with threshold cryptography implementations?",
        es: "¿Cuál es la principal preocupación de seguridad con implementaciones de criptografía de umbral?",
        de: "Was ist das primäre Sicherheitsproblem bei Threshold-Kryptographie-Implementierungen?",
        nl: "Wat is het primaire beveiligingsprobleem met threshold cryptografie implementaties?"
      },
      options: [
        { en: "Ensuring secure secret sharing and reconstruction without exposing the master secret", es: "Asegurar compartición y reconstrucción segura de secretos sin exponer el secreto maestro", de: "Sichere Geheimnisteilung und Rekonstruktion ohne Preisgabe des Hauptgeheimnisses gewährleisten", nl: "Verzekeren van veilige geheim deling en reconstructie zonder het master geheim bloot te leggen" },
        { en: "Managing computational complexity of distributed operations", es: "Gestionando complejidad computacional de operaciones distribuidas", de: "Verwaltung der rechnerischen Komplexität verteilter Operationen", nl: "Beheren van computationele complexiteit van gedistribueerde operaties" },
        { en: "Synchronizing timestamps across multiple participants", es: "Sincronizando marcas de tiempo a través de múltiples participantes", de: "Synchronisierung von Zeitstempeln über mehrere Teilnehmer", nl: "Synchroniseren van tijdstempels over meerdere deelnemers" },
        { en: "Distributing hardware security modules effectively", es: "Distribuyendo módulos de seguridad de hardware efectivamente", de: "Effektive Verteilung von Hardware-Sicherheitsmodulen", nl: "Effectief distribueren van hardware beveiligings modules" }
      ],
      correct: 0,
      explanation: {
        en: "Threshold cryptography's main security challenge is implementing secret sharing schemes (like Shamir's Secret Sharing) that allow k-of-n reconstruction without ever exposing the master secret during normal operations, while preventing information leakage through side channels or malicious participants.",
        es: "El principal desafío de seguridad de la criptografía de umbral es implementar esquemas de compartición de secretos (como Compartición de Secretos de Shamir) que permitan reconstrucción k-de-n sin exponer nunca el secreto maestro durante operaciones normales, mientras se previene filtración de información a través de canales laterales o participantes maliciosos.",
        de: "Die Hauptsicherheitsherausforderung der Threshold-Kryptographie ist die Implementierung von Geheimnis-Sharing-Schemata (wie Shamirs Secret Sharing), die k-von-n-Rekonstruktion ermöglichen, ohne das Hauptgeheimnis während normaler Operationen preiszugeben, während Informationsleckagen durch Seitenkanäle oder bösartige Teilnehmer verhindert werden.",
        nl: "De belangrijkste beveiligingsuitdaging van threshold cryptografie is het implementeren van geheim-delingsschema's (zoals Shamir's Secret Sharing) die k-van-n reconstructie mogelijk maken zonder ooit het master geheim bloot te leggen tijdens normale operaties, terwijl informatielekken door zijkanalen of kwaadwillende deelnemers wordt voorkomen."
      }
    },
    {
      question: {
        en: "What makes format-preserving encryption particularly useful in legacy system integration?",
        es: "¿Qué hace que el cifrado que preserva formato sea particularmente útil en integración de sistemas heredados?",
        de: "Was macht formaterhaltende Verschlüsselung bei der Integration von Legacy-Systemen besonders nützlich?",
        nl: "Wat maakt formaat-behoudende versleuteling bijzonder nuttig bij legacy systeem integratie?"
      },
      options: [
        { en: "Maintaining data format and constraints while providing cryptographic protection", es: "Manteniendo formato y restricciones de datos mientras proporciona protección criptográfica", de: "Aufrechterhaltung von Datenformat und -beschränkungen bei gleichzeitiger kryptographischer Schutz", nl: "Behouden van gegevensformaat en beperkingen terwijl cryptografische bescherming wordt geboden" },
        { en: "Requiring minimal computational resources for encryption operations", es: "Requiriendo recursos computacionales mínimos para operaciones de cifrado", de: "Erfordern minimaler Rechenressourcen für Verschlüsselungsoperationen", nl: "Minimale computationele bronnen vereisen voor versleutelingsoperaties" },
        { en: "Automatically updating legacy code without modification", es: "Actualizando automáticamente código heredado sin modificación", de: "Automatische Aktualisierung von Legacy-Code ohne Änderung", nl: "Automatisch updaten van legacy code zonder wijziging" },
        { en: "Eliminating the need for database schema changes", es: "Eliminando la necesidad de cambios en esquema de base de datos", de: "Eliminierung der Notwendigkeit von Datenbankschema-Änderungen", nl: "Elimineren van de noodzaak voor database schema wijzigingen" }
      ],
      correct: 0,
      explanation: {
        en: "Format-preserving encryption encrypts data while maintaining its original format (length, character set, structure), allowing legacy systems to process encrypted data without modification to existing validation rules, database constraints, or application logic.",
        es: "El cifrado que preserva formato cifra datos mientras mantiene su formato original (longitud, conjunto de caracteres, estructura), permitiendo que sistemas heredados procesen datos cifrados sin modificación a reglas de validación existentes, restricciones de base de datos o lógica de aplicación.",
        de: "Formaterhaltende Verschlüsselung verschlüsselt Daten unter Beibehaltung ihres ursprünglichen Formats (Länge, Zeichensatz, Struktur), wodurch Legacy-Systeme verschlüsselte Daten ohne Änderung bestehender Validierungsregeln, Datenbankbeschränkungen oder Anwendungslogik verarbeiten können.",
        nl: "Formaat-behoudende versleuteling versleutelt gegevens terwijl het oorspronkelijke formaat (lengte, karakterset, structuur) wordt behouden, waardoor legacy systemen versleutelde gegevens kunnen verwerken zonder wijziging van bestaande validatieregels, database beperkingen of applicatie logica."
      }
    },
    {
      question: {
        en: "How do searchable encryption schemes balance security and functionality?",
        es: "¿Cómo equilibran los esquemas de cifrado buscable seguridad y funcionalidad?",
        de: "Wie balancieren durchsuchbare Verschlüsselungsschemata Sicherheit und Funktionalität?",
        nl: "Hoe balanceren doorzoekbare versleutelings schema's veiligheid en functionaliteit?"
      },
      options: [
        { en: "Using cryptographic techniques that reveal minimal information during search operations", es: "Usando técnicas criptográficas que revelan información mínima durante operaciones de búsqueda", de: "Verwendung kryptographischer Techniken, die während Suchoperationen minimale Informationen preisgeben", nl: "Gebruikmaken van cryptografische technieken die minimale informatie onthullen tijdens zoekoperaties" },
        { en: "Periodically decrypting the entire database for indexing", es: "Descifrando periódicamente toda la base de datos para indexación", de: "Periodische Entschlüsselung der gesamten Datenbank zur Indexierung", nl: "Periodiek ontsleutelen van de hele database voor indexering" },
        { en: "Storing search terms in plaintext alongside encrypted data", es: "Almacenando términos de búsqueda en texto plano junto con datos cifrados", de: "Speicherung von Suchbegriffen im Klartext neben verschlüsselten Daten", nl: "Opslaan van zoektermen in plaintext naast versleutelde gegevens" },
        { en: "Using deterministic encryption for all searchable fields", es: "Usando cifrado determinista para todos los campos buscables", de: "Verwendung deterministischer Verschlüsselung für alle durchsuchbaren Felder", nl: "Deterministische versleuteling gebruiken voor alle doorzoekbare velden" }
      ],
      correct: 0,
      explanation: {
        en: "Searchable encryption employs techniques like secure indexes, trapdoor functions, and obfuscated search tokens that allow searching without revealing plaintext content or search patterns, though some schemes accept controlled information leakage for better performance.",
        es: "El cifrado buscable emplea técnicas como índices seguros, funciones trampa y tokens de búsqueda ofuscados que permiten buscar sin revelar contenido de texto plano o patrones de búsqueda, aunque algunos esquemas aceptan filtración controlada de información para mejor rendimiento.",
        de: "Durchsuchbare Verschlüsselung verwendet Techniken wie sichere Indizes, Trapdoor-Funktionen und verschleierte Such-Token, die das Suchen ermöglichen, ohne Klartextinhalt oder Suchmuster preiszugeben, obwohl einige Schemata kontrollierte Informationsleckagen für bessere Leistung akzeptieren.",
        nl: "Doorzoekbare versleuteling gebruikt technieken zoals veilige indexen, trapdoor functies, en verhulde zoek tokens die zoeken mogelijk maken zonder plaintext inhoud of zoek patronen te onthullen, hoewel sommige schema's gecontroleerde informatie lekkage accepteren voor betere prestaties."
      }
    },
    {
      question: {
        en: "What is the fundamental principle behind attribute-based encryption (ABE)?",
        es: "¿Cuál es el principio fundamental detrás del cifrado basado en atributos (ABE)?",
        de: "Was ist das grundlegende Prinzip hinter attributbasierter Verschlüsselung (ABE)?",
        nl: "Wat is het fundamentele principe achter attribuut-gebaseerde versleuteling (ABE)?"
      },
      options: [
        { en: "Encrypting data based on attributes and policies rather than specific identities", es: "Cifrar datos basados en atributos y políticas en lugar de identidades específicas", de: "Verschlüsselung von Daten basierend auf Attributen und Richtlinien anstatt spezifischen Identitäten", nl: "Versleutelen van gegevens gebaseerd op attributen en beleid in plaats van specifieke identiteiten" },
        { en: "Assigning unique cryptographic attributes to each user permanently", es: "Asignando atributos criptográficos únicos a cada usuario permanentemente", de: "Zuweisung einzigartiger kryptographischer Attribute zu jedem Benutzer dauerhaft", nl: "Toewijzen van unieke cryptografische attributen aan elke gebruiker permanent" },
        { en: "Distributing encryption keys based on geographical location", es: "Distribuyendo claves de cifrado basadas en ubicación geográfica", de: "Verteilung von Verschlüsselungsschlüsseln basierend auf geografischem Standort", nl: "Distribueren van versleutelingssleutels gebaseerd op geografische locatie" },
        { en: "Using multiple encryption algorithms simultaneously for security", es: "Usando múltiples algoritmos de cifrado simultáneamente para seguridad", de: "Verwendung mehrerer Verschlüsselungsalgorithmen gleichzeitig für Sicherheit", nl: "Meerdere versleutelingsalgoritmen tegelijk gebruiken voor veiligheid" }
      ],
      correct: 0,
      explanation: {
        en: "ABE enables fine-grained access control by encrypting data with access policies defined over attributes (like role, department, clearance level) rather than individual identities, allowing decryption only when a user's attributes satisfy the policy conditions.",
        es: "ABE permite control de acceso de grano fino al cifrar datos con políticas de acceso definidas sobre atributos (como rol, departamento, nivel de autorización) en lugar de identidades individuales, permitiendo descifrado solo cuando los atributos de un usuario satisfacen las condiciones de la política.",
        de: "ABE ermöglicht feinkörnige Zugriffskontrolle durch Verschlüsselung von Daten mit Zugriffsrichtlinien, die über Attribute (wie Rolle, Abteilung, Freigabestufe) anstatt individuelle Identitäten definiert sind, und erlaubt Entschlüsselung nur, wenn die Attribute eines Benutzers die Richtlinienbedingungen erfüllen.",
        nl: "ABE maakt fijnmazige toegangscontrole mogelijk door gegevens te versleutelen met toegangsbeleid gedefinieerd over attributen (zoals rol, afdeling, machtigingsniveau) in plaats van individuele identiteiten, waardoor ontsleuteling alleen mogelijk is wanneer de attributen van een gebruiker voldoen aan de beleidsvoorwaarden."
      }
    },
    {
      question: {
        en: "How do proxy re-encryption schemes maintain security during delegation?",
        es: "¿Cómo mantienen seguridad los esquemas de re-cifrado proxy durante delegación?",
        de: "Wie wahren Proxy-Re-Verschlüsselungsschemata Sicherheit während der Delegierung?",
        nl: "Hoe behouden proxy re-versleutelings schema's veiligheid tijdens delegatie?"
      },
      options: [
        { en: "Using semi-trusted proxies that can transform ciphertexts without accessing plaintext", es: "Usando proxies semi-confiables que pueden transformar textos cifrados sin acceder a texto plano", de: "Verwendung halb-vertrauenswürdiger Proxies, die Chiffretexte transformieren können, ohne auf Klartext zuzugreifen", nl: "Gebruik van semi-vertrouwde proxies die cipherteksten kunnen transformeren zonder toegang tot plaintext" },
        { en: "Requiring all parties to share master keys before delegation", es: "Requiriendo que todas las partes compartan claves maestras antes de delegación", de: "Erfordern, dass alle Parteien Hauptschlüssel vor Delegierung teilen", nl: "Vereisen dat alle partijen master sleutels delen voor delegatie" },
        { en: "Temporarily decrypting data during the transformation process", es: "Descifrando temporalmente datos durante el proceso de transformación", de: "Temporäre Entschlüsselung von Daten während des Transformationsprozesses", nl: "Tijdelijk ontsleutelen van gegevens tijdens het transformatieproces" },
        { en: "Creating separate encryption keys for each delegation level", es: "Creando claves de cifrado separadas para cada nivel de delegación", de: "Erstellung separater Verschlüsselungsschlüssel für jede Delegierungsebene", nl: "Creëren van aparte versleutelingssleutels voor elk delegatieniveau" }
      ],
      correct: 0,
      explanation: {
        en: "Proxy re-encryption uses cryptographic transformations that allow a semi-trusted proxy to convert Alice's ciphertext into Bob's ciphertext using a re-encryption key, without the proxy ever learning the underlying plaintext or either party's private key.",
        es: "El re-cifrado proxy usa transformaciones criptográficas que permiten a un proxy semi-confiable convertir el texto cifrado de Alice en el texto cifrado de Bob usando una clave de re-cifrado, sin que el proxy nunca aprenda el texto plano subyacente o la clave privada de cualquiera de las partes.",
        de: "Proxy-Re-Verschlüsselung verwendet kryptographische Transformationen, die es einem halb-vertrauenswürdigen Proxy ermöglichen, Alices Chiffretext in Bobs Chiffretext mit einem Re-Verschlüsselungsschlüssel umzuwandeln, ohne dass der Proxy jemals den zugrunde liegenden Klartext oder den privaten Schlüssel einer Partei erfährt.",
        nl: "Proxy re-versleuteling gebruikt cryptografische transformaties die een semi-vertrouwde proxy toestaan om Alice's ciphertekst om te zetten naar Bob's ciphertekst met behulp van een re-versleutelingssleutel, zonder dat de proxy ooit de onderliggende plaintext of de privésleutel van een van beide partijen leert kennen."
      }
    },
    {
      question: {
        en: "What is the primary security goal of secure multi-party computation (MPC)?",
        es: "¿Cuál es el objetivo principal de seguridad de la computación multi-parte segura (MPC)?",
        de: "Was ist das primäre Sicherheitsziel der sicheren Mehrparteien-Berechnung (MPC)?",
        nl: "Wat is het primaire beveiligingsdoel van veilige multi-party berekening (MPC)?"
      },
      options: [
        { en: "Computing joint functions while keeping individual inputs private from all parties", es: "Computar funciones conjuntas mientras mantiene entradas individuales privadas de todas las partes", de: "Berechnung gemeinsamer Funktionen bei gleichzeitiger Geheimhaltung individueller Eingaben vor allen Parteien", nl: "Berekenen van gezamenlijke functies terwijl individuele inputs privé blijven voor alle partijen" },
        { en: "Distributing computational workload across multiple processors efficiently", es: "Distribuyendo carga de trabajo computacional a través de múltiples procesadores eficientemente", de: "Effiziente Verteilung der Rechenlast über mehrere Prozessoren", nl: "Efficiënt verdelen van computationele werkbelasting over meerdere processors" },
        { en: "Synchronizing distributed databases across network partitions", es: "Sincronizando bases de datos distribuidas a través de particiones de red", de: "Synchronisierung verteilter Datenbanken über Netzwerkpartitionen", nl: "Synchroniseren van gedistribueerde databases over netwerkpartities" },
        { en: "Providing fault tolerance for distributed cryptographic operations", es: "Proporcionando tolerancia a fallos para operaciones criptográficas distribuidas", de: "Bereitstellung von Fehlertoleranz für verteilte kryptographische Operationen", nl: "Bieden van fouttolerantie voor gedistribueerde cryptografische operaties" }
      ],
      correct: 0,
      explanation: {
        en: "MPC allows multiple parties to jointly compute a function over their inputs while ensuring that no party learns anything about the others' private inputs beyond what can be inferred from their own input and the final result.",
        es: "MPC permite a múltiples partes computar conjuntamente una función sobre sus entradas mientras asegura que ninguna parte aprenda nada sobre las entradas privadas de otros más allá de lo que puede inferirse de su propia entrada y el resultado final.",
        de: "MPC ermöglicht es mehreren Parteien, gemeinsam eine Funktion über ihre Eingaben zu berechnen, während sichergestellt wird, dass keine Partei etwas über die privaten Eingaben der anderen erfährt, außer dem, was aus ihrer eigenen Eingabe und dem Endergebnis abgeleitet werden kann.",
        nl: "MPC stelt meerdere partijen in staat om gezamenlijk een functie te berekenen over hun inputs terwijl wordt gewaarborgd dat geen enkele partij iets leert over de privé-inputs van anderen behalve wat kan worden afgeleid uit hun eigen input en het eindresultaat."
      }
    },
    {
      question: {
        en: "How do verifiable random functions (VRFs) enhance blockchain security?",
        es: "¿Cómo mejoran las funciones aleatorias verificables (VRF) la seguridad blockchain?",
        de: "Wie verbessern verifizierbare Zufallsfunktionen (VRFs) die Blockchain-Sicherheit?",
        nl: "Hoe verbeteren verifieerbare willekeurige functies (VRFs) blockchain veiligheid?"
      },
      options: [
        { en: "Providing unpredictable yet verifiable randomness for consensus and leader selection", es: "Proporcionando aleatoriedad impredecible pero verificable para consenso y selección de líder", de: "Bereitstellung unvorhersagbarer, aber verifizierbarer Zufälligkeit für Konsens und Anführerauswahl", nl: "Bieden van onvoorspelbare maar verifieerbare willekeurigheid voor consensus en leider selectie" },
        { en: "Encrypting all transaction data with quantum-resistant algorithms", es: "Cifrando todos los datos de transacción con algoritmos resistentes a cuántica", de: "Verschlüsselung aller Transaktionsdaten mit quantenresistenten Algorithmen", nl: "Versleutelen van alle transactiegegevens met kwantumresistente algoritmen" },
        { en: "Automatically validating smart contract code for vulnerabilities", es: "Validando automáticamente código de contrato inteligente para vulnerabilidades", de: "Automatische Validierung von Smart-Contract-Code auf Schwachstellen", nl: "Automatisch valideren van smart contract code op kwetsbaarheden" },
        { en: "Distributing mining rewards based on computational contribution", es: "Distribuyendo recompensas de minería basadas en contribución computacional", de: "Verteilung von Mining-Belohnungen basierend auf rechnerischem Beitrag", nl: "Verdelen van mining beloningen gebaseerd op computationele bijdrage" }
      ],
      correct: 0,
      explanation: {
        en: "VRFs generate pseudorandom outputs that can be publicly verified but remain unpredictable until computed, making them ideal for selecting block producers, committee members, or lottery winners in blockchain systems without allowing prediction or manipulation.",
        es: "Las VRF generan salidas pseudoaleatorias que pueden ser verificadas públicamente pero permanecen impredecibles hasta ser computadas, haciéndolas ideales para seleccionar productores de bloques, miembros de comité o ganadores de lotería en sistemas blockchain sin permitir predicción o manipulación.",
        de: "VRFs erzeugen pseudozufällige Ausgaben, die öffentlich verifiziert werden können, aber unvorhersagbar bleiben, bis sie berechnet werden, wodurch sie ideal für die Auswahl von Blockproduzenten, Ausschussmitgliedern oder Lotteriegewinnern in Blockchain-Systemen sind, ohne Vorhersage oder Manipulation zu ermöglichen.",
        nl: "VRFs genereren pseudowillekeurige outputs die publiekelijk kunnen worden geverifieerd maar onvoorspelbaar blijven tot ze zijn berekend, waardoor ze ideaal zijn voor het selecteren van blokproducenten, commissieleden, of loterij winnaars in blockchain systemen zonder voorspelling of manipulatie toe te staan."
      }
    },
    {
      question: {
        en: "What is the fundamental security assumption underlying elliptic curve cryptography?",
        es: "¿Cuál es la suposición de seguridad fundamental subyacente a la criptografía de curva elíptica?",
        de: "Was ist die grundlegende Sicherheitsannahme, die der elliptischen Kurvenkryptographie zugrunde liegt?",
        nl: "Wat is de fundamentele beveiligingsaanname die ten grondslag ligt aan elliptische curve cryptografie?"
      },
      options: [
        { en: "The computational difficulty of the elliptic curve discrete logarithm problem", es: "La dificultad computacional del problema de logaritmo discreto de curva elíptica", de: "Die rechnerische Schwierigkeit des elliptischen Kurven-Diskreten-Logarithmus-Problems", nl: "De computationele moeilijkheid van het elliptische curve discrete logaritme probleem" },
        { en: "The impossibility of factoring large elliptic curve parameters", es: "La imposibilidad de factorizar parámetros grandes de curva elíptica", de: "Die Unmöglichkeit der Faktorisierung großer elliptischer Kurvenparameter", nl: "De onmogelijkheid van het factoriseren van grote elliptische curve parameters" },
        { en: "The randomness of elliptic curve point generation algorithms", es: "La aleatoriedad de algoritmos de generación de puntos de curva elíptica", de: "Die Zufälligkeit von Elliptische-Kurven-Punktgenerierungsalgorithmen", nl: "De willekeurigheid van elliptische curve punt generatie algoritmen" },
        { en: "The irreversibility of elliptic curve addition operations", es: "La irreversibilidad de operaciones de suma de curva elíptica", de: "Die Irreversibilität von elliptischen Kurven-Additionsoperationen", nl: "De onomkeerbaarheid van elliptische curve optel operaties" }
      ],
      correct: 0,
      explanation: {
        en: "ECC security relies on the elliptic curve discrete logarithm problem (ECDLP): given points P and Q = kP on an elliptic curve, it's computationally infeasible to determine the scalar k, even though curve point addition is efficient to compute in the forward direction.",
        es: "La seguridad de ECC se basa en el problema de logaritmo discreto de curva elíptica (ECDLP): dados puntos P y Q = kP en una curva elíptica, es computacionalmente inviable determinar el escalar k, aunque la suma de puntos de curva es eficiente de computar en dirección directa.",
        de: "Die ECC-Sicherheit beruht auf dem elliptischen Kurven-Diskreten-Logarithmus-Problem (ECDLP): Gegeben Punkte P und Q = kP auf einer elliptischen Kurve ist es rechnerisch unmöglich, den Skalar k zu bestimmen, obwohl die Kurvenpunktaddition in Vorwärtsrichtung effizient zu berechnen ist.",
        nl: "ECC veiligheid berust op het elliptische curve discrete logaritme probleem (ECDLP): gegeven punten P en Q = kP op een elliptische curve, is het computationeel onhaalbaar om de scalaire k te bepalen, ook al is curve punt optelling efficiënt te berekenen in voorwaartse richting."
      }
    },
    {
      question: {
        en: "How does differential privacy protect individual data while enabling statistical analysis?",
        es: "¿Cómo protege la privacidad diferencial datos individuales mientras habilita análisis estadístico?",
        de: "Wie schützt differentielle Privatsphäre individuelle Daten bei gleichzeitiger Ermöglichung statistischer Analyse?",
        nl: "Hoe beschermt differentiële privacy individuele gegevens terwijl statistische analyse mogelijk wordt gemaakt?"
      },
      options: [
        { en: "Adding calibrated noise to query results based on sensitivity and privacy parameters", es: "Agregando ruido calibrado a resultados de consulta basado en sensibilidad y parámetros de privacidad", de: "Hinzufügung kalibrierter Störungen zu Abfrageergebnissen basierend auf Sensitivität und Privatsphäre-Parametern", nl: "Toevoegen van gekalibreerde ruis aan query resultaten gebaseerd op gevoeligheid en privacy parameters" },
        { en: "Encrypting all database entries with unique keys per individual", es: "Cifrando todas las entradas de base de datos con claves únicas por individuo", de: "Verschlüsselung aller Datenbankeinträge mit eindeutigen Schlüsseln pro Individuum", nl: "Versleutelen van alle database entries met unieke sleutels per individu" },
        { en: "Removing identifying information and applying data anonymization", es: "Removiendo información identificadora y aplicando anonimización de datos", de: "Entfernung identifizierender Informationen und Anwendung von Datenanonymisierung", nl: "Verwijderen van identificerende informatie en toepassen van data anonimisering" },
        { en: "Limiting access to aggregated results above minimum threshold counts", es: "Limitando acceso a resultados agregados por encima de conteos de umbral mínimo", de: "Begrenzung des Zugangs zu aggregierten Ergebnissen oberhalb minimaler Schwellenwerte", nl: "Beperken van toegang tot geaggregeerde resultaten boven minimum drempel aantallen" }
      ],
      correct: 0,
      explanation: {
        en: "Differential privacy adds mathematically calibrated random noise to query results, where the noise level is determined by the query's sensitivity (how much one individual can affect the result) and the desired privacy parameter ε, providing strong privacy guarantees while preserving statistical utility.",
        es: "La privacidad diferencial agrega ruido aleatorio matemáticamente calibrado a resultados de consulta, donde el nivel de ruido está determinado por la sensibilidad de la consulta (cuánto puede afectar un individuo el resultado) y el parámetro de privacidad deseado ε, proporcionando garantías de privacidad fuertes mientras preserva utilidad estadística.",
        de: "Differentielle Privatsphäre fügt mathematisch kalibrierten Zufallsstörungen zu Abfrageergebnissen hinzu, wobei der Störpegel durch die Sensitivität der Abfrage (wie viel ein Individuum das Ergebnis beeinflussen kann) und den gewünschten Privatsphäre-Parameter ε bestimmt wird, wodurch starke Privatsphäre-Garantien bei Erhaltung des statistischen Nutzens bereitgestellt werden.",
        nl: "Differentiële privacy voegt wiskundig gekalibreerde willekeurige ruis toe aan query resultaten, waarbij het ruis niveau wordt bepaald door de gevoeligheid van de query (hoeveel één individu het resultaat kan beïnvloeden) en de gewenste privacy parameter ε, waardoor sterke privacy garanties worden geboden terwijl statistische bruikbaarheid wordt behouden."
      }
    },
    {
      question: {
        en: "What is the primary advantage of ring signatures in privacy-preserving systems?",
        es: "¿Cuál es la ventaja principal de las firmas de anillo en sistemas que preservan privacidad?",
        de: "Was ist der Hauptvorteil von Ring-Signaturen in privatsphärenschützenden Systemen?",
        nl: "Wat is het primaire voordeel van ring handtekeningen in privacy-behoudende systemen?"
      },
      options: [
        { en: "Enabling anonymous signatures from within a group without revealing the actual signer", es: "Habilitando firmas anónimas desde dentro de un grupo sin revelar el firmante real", de: "Ermöglichung anonymer Signaturen innerhalb einer Gruppe ohne Preisgabe des tatsächlichen Unterzeichners", nl: "Anonieme handtekeningen mogelijk maken binnen een groep zonder de werkelijke ondertekenaar te onthullen" },
        { en: "Requiring fewer computational resources than traditional digital signatures", es: "Requiriendo menos recursos computacionales que las firmas digitales tradicionales", de: "Erfordern weniger Rechenressourcen als traditionelle digitale Signaturen", nl: "Minder computationele bronnen vereisen dan traditionele digitale handtekeningen" },
        { en: "Providing automatic key distribution across network participants", es: "Proporcionando distribución automática de claves a través de participantes de red", de: "Bereitstellung automatischer Schlüsselverteilung über Netzwerkteilnehmer", nl: "Automatische sleuteldistributie bieden over netwerkdeelnemers" },
        { en: "Enabling signature verification without network connectivity", es: "Habilitando verificación de firma sin conectividad de red", de: "Ermöglichung von Signaturverifizierung ohne Netzwerkverbindung", nl: "Handtekening verificatie mogelijk maken zonder netwerkverbinding" }
      ],
      correct: 0,
      explanation: {
        en: "Ring signatures allow any member of a group to sign messages anonymously, where verifiers can confirm the signature came from someone in the group but cannot determine which specific member signed, providing strong anonymity while maintaining authenticity and non-repudiation for the group.",
        es: "Las firmas de anillo permiten a cualquier miembro de un grupo firmar mensajes anónimamente, donde los verificadores pueden confirmar que la firma vino de alguien en el grupo pero no pueden determinar qué miembro específico firmó, proporcionando anonimidad fuerte mientras mantiene autenticidad y no repudio para el grupo.",
        de: "Ring-Signaturen ermöglichen es jedem Gruppenmitglied, Nachrichten anonym zu signieren, wobei Verifizierer bestätigen können, dass die Signatur von jemandem in der Gruppe stammt, aber nicht bestimmen können, welches spezifische Mitglied signiert hat, wodurch starke Anonymität bei Aufrechterhaltung von Authentizität und Nicht-Abstreitbarkeit für die Gruppe bereitgestellt wird.",
        nl: "Ring handtekeningen stellen elk lid van een groep in staat om berichten anoniem te ondertekenen, waarbij verificateurs kunnen bevestigen dat de handtekening van iemand in de groep kwam maar niet kunnen bepalen welk specifiek lid ondertekende, waardoor sterke anonimiteit wordt geboden terwijl authenticiteit en niet-ontkenning voor de groep wordt behouden."
      }
    }
  ]
});
