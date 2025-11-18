// Quiz Level 4: Currencies - Cryptocurrency
(function() {
  const level4 = {
    name: {
      en: "Cryptocurrency - Expert I",
      es: "Criptomoneda - Experto I",
      de: "Kryptowährung - Experte I",
      nl: "Cryptocurrency - Expert I"
    },
    questions: [
      {
        question: {
          en: "What is a cryptocurrency zero-knowledge proof?",
          es: "¿Qué es una prueba de conocimiento cero en criptomonedas?",
          de: "Was ist ein Zero-Knowledge-Proof bei Kryptowährungen?",
          nl: "Wat is een zero-knowledge proof in cryptocurrency?"
        },
        options: [
          { en: "Cryptographic method proving statement without revealing underlying information", es: "Método criptográfico que prueba una declaración sin revelar información subyacente", de: "Kryptographische Methode zum Nachweis einer Aussage ohne Preisgabe zugrunde liegender Informationen", nl: "Cryptografische methode die een bewering bewijst zonder onderliggende informatie te onthullen" },
          { en: "A wallet with no cryptocurrency balance", es: "Una billetera sin saldo de criptomonedas", de: "Eine Wallet ohne Kryptowährungs-Guthaben", nl: "Een wallet zonder cryptocurrency saldo" },
          { en: "Mining with no technical knowledge required", es: "Minería sin conocimiento técnico requerido", de: "Mining ohne erforderliche technische Kenntnisse", nl: "Mining zonder technische kennis vereist" },
          { en: "Trading without any market knowledge", es: "Trading sin conocimiento del mercado", de: "Trading ohne Marktkenntnisse", nl: "Handelen zonder marktkennis" }
        ],
        correct: 0,
        explanation: {
          en: "Zero-knowledge proofs allow one party to prove to another that they know a secret or have certain information without revealing the actual secret or information itself.",
          es: "Las pruebas de conocimiento cero permiten a una parte probar a otra que conoce un secreto o tiene cierta información sin revelar el secreto real o la información en sí.",
          de: "Zero-Knowledge-Proofs ermöglichen es einer Partei, einer anderen zu beweisen, dass sie ein Geheimnis kennt oder bestimmte Informationen hat, ohne das eigentliche Geheimnis oder die Informationen selbst preiszugeben.",
          nl: "Zero-knowledge proofs stellen een partij in staat om aan een ander te bewijzen dat ze een geheim kennen of bepaalde informatie hebben zonder het werkelijke geheim of de informatie zelf te onthullen."
        }
      },
      {
        question: {
          en: "What is cryptocurrency delegated proof of stake (DPoS)?",
          es: "¿Qué es la prueba de participación delegada (DPoS) en criptomonedas?",
          de: "Was ist Delegated Proof of Stake (DPoS) bei Kryptowährungen?",
          nl: "Wat is delegated proof of stake (DPoS) in cryptocurrency?"
        },
        options: [
          { en: "Delegation of mining tasks to professional companies", es: "Delegación de tareas de minería a empresas profesionales", de: "Delegation von Mining-Aufgaben an professionelle Unternehmen", nl: "Delegatie van mining taken aan professionele bedrijven" },
          { en: "Token holders vote for delegates who validate transactions on their behalf", es: "Los poseedores de tokens votan por delegados que validan transacciones en su nombre", de: "Token-Inhaber stimmen für Delegierte ab, die Transaktionen in ihrem Namen validieren", nl: "Token houders stemmen voor afgevaardigden die transacties namens hen valideren" },
          { en: "Government representatives controlling blockchain networks", es: "Representantes del gobierno controlando redes blockchain", de: "Regierungsvertreter kontrollieren Blockchain-Netzwerke", nl: "Overheidsvertegenwoordigers die blockchain netwerken controleren" },
          { en: "Automatic delegation of staking rewards", es: "Delegación automática de recompensas de staking", de: "Automatische Delegation von Staking-Belohnungen", nl: "Automatische delegatie van staking beloningen" }
        ],
        correct: 1,
        explanation: {
          en: "DPoS is a consensus mechanism where token holders vote for a limited number of delegates (witnesses) who are responsible for validating transactions and maintaining the blockchain on behalf of all stakeholders.",
          es: "DPoS es un mecanismo de consenso donde los poseedores de tokens votan por un número limitado de delegados (testigos) que son responsables de validar transacciones y mantener la blockchain en nombre de todos los interesados.",
          de: "DPoS ist ein Konsensmechanismus, bei dem Token-Inhaber für eine begrenzte Anzahl von Delegierten (Zeugen) stimmen, die für die Validierung von Transaktionen und die Wartung der Blockchain im Namen aller Stakeholder verantwortlich sind.",
          nl: "DPoS is een consensus mechanisme waarbij token houders stemmen voor een beperkt aantal afgevaardigden (getuigen) die verantwoordelijk zijn voor het valideren van transacties en het onderhouden van de blockchain namens alle belanghebbenden."
        }
      },
      {
        question: {
          en: "What is a cryptocurrency sidechain?",
          es: "¿Qué es una cadena lateral de criptomonedas?",
          de: "Was ist eine Kryptowährungs-Sidechain?",
          nl: "Wat is een cryptocurrency sidechain?"
        },
        options: [
          { en: "A backup copy of the main blockchain", es: "Una copia de respaldo de la blockchain principal", de: "Eine Backup-Kopie der Haupt-Blockchain", nl: "Een backup kopie van de hoofd blockchain" },
          { en: "Separate blockchain that runs parallel and connects to main chain", es: "Blockchain separada que corre en paralelo y se conecta a la cadena principal", de: "Separate Blockchain, die parallel läuft und mit der Hauptkette verbunden ist", nl: "Aparte blockchain die parallel loopt en verbindt met de hoofdketen" },
          { en: "Chain of transactions on the side of the main network", es: "Cadena de transacciones al lado de la red principal", de: "Kette von Transaktionen neben dem Hauptnetzwerk", nl: "Keten van transacties aan de zijkant van het hoofdnetwerk" },
          { en: "Secondary mining algorithm for additional security", es: "Algoritmo de minería secundario para seguridad adicional", de: "Sekundärer Mining-Algorithmus für zusätzliche Sicherheit", nl: "Secundair mining algoritme voor extra beveiliging" }
        ],
        correct: 1,
        explanation: {
          en: "A sidechain is an independent blockchain that runs parallel to a main blockchain and is connected to it via a two-way peg, allowing assets to be transferred between chains.",
          es: "Una cadena lateral es una blockchain independiente que corre en paralelo a una blockchain principal y está conectada a ella a través de una vinculación bidireccional, permitiendo que los activos se transfieran entre cadenas.",
          de: "Eine Sidechain ist eine unabhängige Blockchain, die parallel zu einer Haupt-Blockchain läuft und über eine bidirektionale Bindung mit ihr verbunden ist, wodurch Assets zwischen den Ketten übertragen werden können.",
          nl: "Een sidechain is een onafhankelijke blockchain die parallel loopt aan een hoofd blockchain en ermee verbonden is via een tweerichtingsverbinding, waardoor assets tussen ketens kunnen worden overgedragen."
        }
      },
      {
        question: {
          en: "What is cryptocurrency cross-chain interoperability?",
          es: "¿Qué es la interoperabilidad entre cadenas de criptomonedas?",
          de: "Was ist Cross-Chain-Interoperabilität bei Kryptowährungen?",
          nl: "Wat is cryptocurrency cross-chain interoperabiliteit?"
        },
        options: [
          { en: "Ability for different blockchains to communicate and share data", es: "Capacidad de diferentes blockchains para comunicarse y compartir datos", de: "Fähigkeit verschiedener Blockchains zu kommunizieren und Daten zu teilen", nl: "Vermogen van verschillende blockchains om te communiceren en data te delen" },
          { en: "Physical connection between mining hardware", es: "Conexión física entre hardware de minería", de: "Physische Verbindung zwischen Mining-Hardware", nl: "Fysieke verbinding tussen mining hardware" },
          { en: "Cross-referencing price data across exchanges", es: "Referencia cruzada de datos de precios entre intercambios", de: "Kreuzreferenzierung von Preisdaten über Börsen hinweg", nl: "Kruisverwijzingen van prijsdata over exchanges" },
          { en: "Compatibility between different wallet software", es: "Compatibilidad entre diferentes software de billeteras", de: "Kompatibilität zwischen verschiedener Wallet-Software", nl: "Compatibiliteit tussen verschillende wallet software" }
        ],
        correct: 0,
        explanation: {
          en: "Cross-chain interoperability refers to the ability of different blockchain networks to interact, communicate, and exchange data or value seamlessly without intermediaries.",
          es: "La interoperabilidad entre cadenas se refiere a la capacidad de diferentes redes blockchain para interactuar, comunicarse e intercambiar datos o valor sin problemas sin intermediarios.",
          de: "Cross-Chain-Interoperabilität bezieht sich auf die Fähigkeit verschiedener Blockchain-Netzwerke, nahtlos zu interagieren, zu kommunizieren und Daten oder Werte ohne Zwischenhändler auszutauschen.",
          nl: "Cross-chain interoperabiliteit verwijst naar het vermogen van verschillende blockchain netwerken om naadloos te interageren, communiceren en data of waarde uit te wisselen zonder tussenpersonen."
        }
      },
      {
        question: {
          en: "What is a cryptocurrency state channel?",
          es: "¿Qué es un canal de estado de criptomonedas?",
          de: "Was ist ein Kryptowährungs-State-Channel?",
          nl: "Wat is een cryptocurrency state channel?"
        },
        options: [
          { en: "Government communication channel for crypto regulations", es: "Canal de comunicación gubernamental para regulaciones crypto", de: "Regierungskommunikationskanal für Krypto-Regulierungen", nl: "Overheidscommunicatiekanaal voor crypto regelgeving" },
          { en: "Off-chain scaling solution enabling instant transactions between parties", es: "Solución de escalabilidad fuera de cadena que permite transacciones instantáneas entre partes", de: "Off-Chain-Skalierungslösung, die sofortige Transaktionen zwischen Parteien ermöglicht", nl: "Off-chain schaaloplossing die instant transacties tussen partijen mogelijk maakt" },
          { en: "Television channel dedicated to cryptocurrency news", es: "Canal de televisión dedicado a noticias de criptomonedas", de: "Fernsehkanal für Kryptowährungs-Nachrichten", nl: "Televisiekanaal gewijd aan cryptocurrency nieuws" },
          { en: "Status indicator for blockchain network health", es: "Indicador de estado para la salud de la red blockchain", de: "Statusanzeige für die Gesundheit des Blockchain-Netzwerks", nl: "Status indicator voor blockchain netwerk gezondheid" }
        ],
        correct: 1,
        explanation: {
          en: "State channels allow participants to conduct multiple transactions off-chain with only the opening and closing transactions recorded on the main blockchain, enabling fast and cheap transactions.",
          es: "Los canales de estado permiten a los participantes realizar múltiples transacciones fuera de cadena con solo las transacciones de apertura y cierre registradas en la blockchain principal, permitiendo transacciones rápidas y baratas.",
          de: "State Channels ermöglichen es Teilnehmern, mehrere Transaktionen off-chain durchzuführen, wobei nur die Eröffnungs- und Schließungstransaktionen in der Haupt-Blockchain aufgezeichnet werden, was schnelle und günstige Transaktionen ermöglicht.",
          nl: "State channels stellen deelnemers in staat om meerdere transacties off-chain uit te voeren waarbij alleen de openings- en sluitingstransacties worden geregistreerd op de hoofd blockchain, waardoor snelle en goedkope transacties mogelijk worden."
        }
      },
      {
        question: {
          en: "What is cryptocurrency plasma scaling?",
          es: "¿Qué es el escalado plasma de criptomonedas?",
          de: "Was ist Kryptowährungs-Plasma-Skalierung?",
          nl: "Wat is cryptocurrency plasma scaling?"
        },
        options: [
          { en: "Using plasma physics to power mining operations", es: "Usar física de plasma para alimentar operaciones de minería", de: "Plasma-Physik zur Stromversorgung von Mining-Operationen verwenden", nl: "Plasma fysica gebruiken om mining operaties aan te drijven" },
          { en: "Hierarchical tree of child chains anchored to main blockchain", es: "Árbol jerárquico de cadenas hijas ancladas a la blockchain principal", de: "Hierarchischer Baum von Kind-Ketten, die an der Haupt-Blockchain verankert sind", nl: "Hiërarchische boom van kind-ketens verankerd aan de hoofd blockchain" },
          { en: "High-energy particle acceleration for faster transactions", es: "Aceleración de partículas de alta energía para transacciones más rápidas", de: "Hochenergie-Teilchenbeschleunigung für schnellere Transaktionen", nl: "Hoge-energie deeltjesversnelling voor snellere transacties" },
          { en: "Liquid cryptocurrency that can change states", es: "Criptomoneda líquida que puede cambiar estados", de: "Flüssige Kryptowährung, die Zustände ändern kann", nl: "Vloeibare cryptocurrency die van staat kan veranderen" }
        ],
        correct: 1,
        explanation: {
          en: "Plasma is a scaling solution that creates a hierarchy of child blockchains (plasma chains) that periodically commit their state to the main Ethereum blockchain, processing transactions off-chain for better scalability.",
          es: "Plasma es una solución de escalabilidad que crea una jerarquía de blockchains hijas (cadenas plasma) que periódicamente confirman su estado a la blockchain principal de Ethereum, procesando transacciones fuera de cadena para mejor escalabilidad.",
          de: "Plasma ist eine Skalierungslösung, die eine Hierarchie von Kind-Blockchains (Plasma-Ketten) erstellt, die periodisch ihren Zustand an die Haupt-Ethereum-Blockchain übertragen und Transaktionen off-chain für bessere Skalierbarkeit verarbeiten.",
          nl: "Plasma is een schaaloplossing die een hiërarchie van kind-blockchains (plasma ketens) creëert die periodiek hun status vastleggen op de hoofd Ethereum blockchain, waarbij transacties off-chain worden verwerkt voor betere schaalbaarheid."
        }
      },
      {
        question: {
          en: "What is cryptocurrency transaction finality?",
          es: "¿Qué es la finalidad de transacción de criptomonedas?",
          de: "Was ist Kryptowährungs-Transaktionsendgültigkeit?",
          nl: "Wat is cryptocurrency transactie finaliteit?"
        },
        options: [
          { en: "The last transaction ever made in a cryptocurrency", es: "La última transacción jamás hecha en una criptomoneda", de: "Die letzte jemals gemachte Transaktion in einer Kryptowährung", nl: "De laatste transactie ooit gemaakt in een cryptocurrency" },
          { en: "Point when transaction becomes irreversible and permanently settled", es: "Punto cuando la transacción se vuelve irreversible y permanentemente liquidada", de: "Punkt, an dem die Transaktion irreversibel und dauerhaft abgewickelt wird", nl: "Punt waarop transactie onomkeerbaar en permanent afgewikkeld wordt" },
          { en: "Final step in setting up a cryptocurrency wallet", es: "Paso final en configurar una billetera de criptomonedas", de: "Letzter Schritt beim Einrichten einer Kryptowährungs-Wallet", nl: "Laatste stap in het opzetten van een cryptocurrency wallet" },
          { en: "Completion of cryptocurrency mining process", es: "Finalización del proceso de minería de criptomonedas", de: "Abschluss des Kryptowährungs-Mining-Prozesses", nl: "Voltooiing van cryptocurrency mining proces" }
        ],
        correct: 1,
        explanation: {
          en: "Transaction finality refers to the point at which a transaction is considered irreversible and cannot be altered or rolled back, providing certainty that the transaction has been permanently settled.",
          es: "La finalidad de transacción se refiere al punto en el que una transacción se considera irreversible y no puede ser alterada o revertida, proporcionando certeza de que la transacción ha sido permanentemente liquidada.",
          de: "Transaktionsendgültigkeit bezieht sich auf den Punkt, an dem eine Transaktion als irreversibel betrachtet wird und nicht geändert oder rückgängig gemacht werden kann, was Gewissheit bietet, dass die Transaktion dauerhaft abgewickelt wurde.",
          nl: "Transactie finaliteit verwijst naar het punt waarop een transactie als onomkeerbaar wordt beschouwd en niet kan worden gewijzigd of teruggedraaid, wat zekerheid biedt dat de transactie permanent is afgewikkeld."
        }
      },
      {
        question: {
          en: "What is cryptocurrency threshold signature scheme?",
          es: "¿Qué es un esquema de firma umbral de criptomonedas?",
          de: "Was ist ein Kryptowährungs-Threshold-Signature-Schema?",
          nl: "Wat is een cryptocurrency threshold signature scheme?"
        },
        options: [
          { en: "Cryptographic protocol requiring minimum number of signatures for transaction authorization", es: "Protocolo criptográfico que requiere número mínimo de firmas para autorización de transacciones", de: "Kryptographisches Protokoll, das eine Mindestanzahl von Signaturen für Transaktionsautorisierung erfordert", nl: "Cryptografisch protocol dat minimum aantal handtekeningen vereist voor transactie autorisatie" },
          { en: "Setting minimum balance thresholds for wallet security", es: "Establecer umbrales de saldo mínimo para seguridad de billetera", de: "Mindestguthaben-Schwellenwerte für Wallet-Sicherheit festlegen", nl: "Minimum saldo drempels instellen voor wallet beveiliging" },
          { en: "Algorithm that determines when to start mining", es: "Algoritmo que determina cuándo empezar a minar", de: "Algorithmus, der bestimmt, wann mit dem Mining begonnen wird", nl: "Algoritme dat bepaalt wanneer te beginnen met minen" },
          { en: "Protocol for managing transaction fee thresholds", es: "Protocolo para gestionar umbrales de tarifas de transacción", de: "Protokoll zur Verwaltung von Transaktionsgebühren-Schwellenwerten", nl: "Protocol voor het beheren van transactiekosten drempels" }
        ],
        correct: 0,
        explanation: {
          en: "Threshold signature schemes require a minimum number of participants (threshold) from a group to collaborate in creating a valid digital signature, enhancing security through distributed trust.",
          es: "Los esquemas de firma umbral requieren un número mínimo de participantes (umbral) de un grupo para colaborar en crear una firma digital válida, mejorando la seguridad a través de confianza distribuida.",
          de: "Threshold-Signature-Schemata erfordern eine Mindestanzahl von Teilnehmern (Schwellenwert) aus einer Gruppe, um bei der Erstellung einer gültigen digitalen Signatur zu kooperieren, was die Sicherheit durch verteiltes Vertrauen erhöht.",
          nl: "Threshold signature schemes vereisen een minimum aantal deelnemers (drempel) uit een groep om samen te werken bij het maken van een geldige digitale handtekening, waardoor beveiliging wordt verbeterd door gedistribueerd vertrouwen."
        }
      },
      {
        question: {
          en: "What is cryptocurrency homomorphic encryption?",
          es: "¿Qué es la encriptación homomórfica de criptomonedas?",
          de: "Was ist homomorphe Verschlüsselung bei Kryptowährungen?",
          nl: "Wat is cryptocurrency homomorphic encryption?"
        },
        options: [
          { en: "Encryption that maintains structure allowing computation on encrypted data", es: "Encriptación que mantiene estructura permitiendo computación en datos encriptados", de: "Verschlüsselung, die Struktur beibehält und Berechnungen auf verschlüsselten Daten ermöglicht", nl: "Versleuteling die structuur behoudt en berekeningen op versleutelde data mogelijk maakt" },
          { en: "Encryption using similar-shaped mathematical functions", es: "Encriptación usando funciones matemáticas de forma similar", de: "Verschlüsselung mit ähnlich geformten mathematischen Funktionen", nl: "Versleuteling met gelijkgevormde wiskundige functies" },
          { en: "Identical encryption methods used across different blockchains", es: "Métodos de encriptación idénticos usados a través de diferentes blockchains", de: "Identische Verschlüsselungsmethoden über verschiedene Blockchains hinweg", nl: "Identieke versleutelingsmethoden gebruikt over verschillende blockchains" },
          { en: "Encryption that creates uniform data patterns", es: "Encriptación que crea patrones de datos uniformes", de: "Verschlüsselung, die einheitliche Datenmuster erstellt", nl: "Versleuteling die uniforme datapatronen creëert" }
        ],
        correct: 0,
        explanation: {
          en: "Homomorphic encryption allows computations to be performed on encrypted data without decrypting it first, enabling privacy-preserving calculations on blockchain networks.",
          es: "La encriptación homomórfica permite realizar computaciones en datos encriptados sin desencriptarlos primero, habilitando cálculos que preservan la privacidad en redes blockchain.",
          de: "Homomorphe Verschlüsselung ermöglicht es, Berechnungen auf verschlüsselten Daten durchzuführen, ohne sie zuerst zu entschlüsseln, was datenschutzwahrende Berechnungen in Blockchain-Netzwerken ermöglicht.",
          nl: "Homomorphic encryption maakt het mogelijk om berekeningen uit te voeren op versleutelde data zonder deze eerst te ontsleutelen, waardoor privacy-behoudende berekeningen op blockchain netwerken mogelijk worden."
        }
      },
      {
        question: {
          en: "What is a cryptocurrency merkle tree?",
          es: "¿Qué es un árbol merkle de criptomonedas?",
          de: "Was ist ein Kryptowährungs-Merkle-Baum?",
          nl: "Wat is een cryptocurrency merkle tree?"
        },
        options: [
          { en: "Binary tree structure that efficiently summarizes all transactions in a block", es: "Estructura de árbol binario que resume eficientemente todas las transacciones en un bloque", de: "Binäre Baumstruktur, die alle Transaktionen in einem Block effizient zusammenfasst", nl: "Binaire boomstructuur die alle transacties in een blok efficiënt samenvat" },
          { en: "Family tree showing cryptocurrency ownership history", es: "Árbol genealógico mostrando historial de propiedad de criptomonedas", de: "Stammbaum, der die Kryptowährungs-Eigentumsgeschichte zeigt", nl: "Stamboom die cryptocurrency eigendomsgeschiedenis toont" },
          { en: "Decision tree for cryptocurrency investment strategies", es: "Árbol de decisión para estrategias de inversión en criptomonedas", de: "Entscheidungsbaum für Kryptowährungs-Investitionsstrategien", nl: "Beslissingsboom voor cryptocurrency investeringsstrategieën" },
          { en: "Hierarchical organization of mining pools", es: "Organización jerárquica de pools de minería", de: "Hierarchische Organisation von Mining-Pools", nl: "Hiërarchische organisatie van mining pools" }
        ],
        correct: 0,
        explanation: {
          en: "A Merkle tree is a binary tree structure where each leaf represents a transaction hash, and each internal node represents a hash of its children, allowing efficient verification of transaction inclusion.",
          es: "Un árbol Merkle es una estructura de árbol binario donde cada hoja representa un hash de transacción, y cada nodo interno representa un hash de sus hijos, permitiendo verificación eficiente de inclusión de transacciones.",
          de: "Ein Merkle-Baum ist eine binäre Baumstruktur, bei der jedes Blatt einen Transaktions-Hash darstellt und jeder interne Knoten einen Hash seiner Kinder, was eine effiziente Verifikation der Transaktionsinklusion ermöglicht.",
          nl: "Een Merkle tree is een binaire boomstructuur waarbij elk blad een transactie hash vertegenwoordigt, en elke interne node een hash van zijn kinderen, wat efficiënte verificatie van transactie-inclusie mogelijk maakt."
        }
      },
      {
        question: {
          en: "What is cryptocurrency ring signature?",
          es: "¿Qué es una firma de anillo de criptomonedas?",
          de: "Was ist eine Ring-Signatur bei Kryptowährungen?",
          nl: "Wat is een cryptocurrency ring signature?"
        },
        options: [
          { en: "Digital signature scheme providing anonymity by hiding signer among group", es: "Esquema de firma digital que proporciona anonimato ocultando al firmante entre un grupo", de: "Digitales Signaturschema, das Anonymität bietet, indem es den Unterzeichner in einer Gruppe versteckt", nl: "Digitaal handtekeningenschema dat anonimiteit biedt door ondertekenaar te verbergen in groep" },
          { en: "Circular arrangement of signatures for enhanced security", es: "Disposición circular de firmas para seguridad mejorada", de: "Kreisförmige Anordnung von Signaturen für verbesserte Sicherheit", nl: "Cirkelvormige rangschikking van handtekeningen voor verbeterde beveiliging" },
          { en: "Signature created using ring-shaped cryptographic hardware", es: "Firma creada usando hardware criptográfico en forma de anillo", de: "Signatur erstellt mit ringförmiger kryptographischer Hardware", nl: "Handtekening gemaakt met ringvormige cryptografische hardware" },
          { en: "Group signature where all members must sign together", es: "Firma de grupo donde todos los miembros deben firmar juntos", de: "Gruppensignatur, bei der alle Mitglieder zusammen signieren müssen", nl: "Groepshandtekening waarbij alle leden samen moeten tekenen" }
        ],
        correct: 0,
        explanation: {
          en: "Ring signatures allow a member of a group to produce a signature on behalf of the group without revealing which member actually signed, providing anonymity while proving group membership.",
          es: "Las firmas de anillo permiten a un miembro de un grupo producir una firma en nombre del grupo sin revelar qué miembro realmente firmó, proporcionando anonimato mientras prueba membresía del grupo.",
          de: "Ring-Signaturen ermöglichen es einem Gruppenmitglied, eine Signatur im Namen der Gruppe zu erstellen, ohne zu enthüllen, welches Mitglied tatsächlich signiert hat, was Anonymität bietet und gleichzeitig die Gruppenmitgliedschaft beweist.",
          nl: "Ring signatures stellen een groepslid in staat om een handtekening te produceren namens de groep zonder te onthullen welk lid daadwerkelijk heeft getekend, wat anonimiteit biedt terwijl groepslidmaatschap wordt bewezen."
        }
      },
      {
        question: {
          en: "What is cryptocurrency commit-reveal scheme?",
          es: "¿Qué es un esquema de compromiso-revelación de criptomonedas?",
          de: "Was ist ein Commit-Reveal-Schema bei Kryptowährungen?",
          nl: "Wat is een cryptocurrency commit-reveal scheme?"
        },
        options: [
          { en: "Two-phase protocol where participants commit to values then reveal them simultaneously", es: "Protocolo de dos fases donde los participantes se comprometen a valores luego los revelan simultáneamente", de: "Zweiphasiges Protokoll, bei dem Teilnehmer sich zu Werten verpflichten und sie dann gleichzeitig offenbaren", nl: "Tweefasig protocol waarbij deelnemers zich vastleggen op waarden en ze vervolgens gelijktijdig onthullen" },
          { en: "Method for permanently committing cryptocurrency to smart contracts", es: "Método para comprometer permanentemente criptomonedas a contratos inteligentes", de: "Methode zur dauerhaften Bindung von Kryptowährung an Smart Contracts", nl: "Methode voor permanent vastleggen van cryptocurrency aan smart contracts" },
          { en: "Process of revealing private keys to recover lost wallets", es: "Proceso de revelar claves privadas para recuperar billeteras perdidas", de: "Prozess der Preisgabe privater Schlüssel zur Wiederherstellung verlorener Wallets", nl: "Proces van het onthullen van private keys om verloren wallets te herstellen" },
          { en: "Protocol for committing to cryptocurrency purchases before execution", es: "Protocolo para comprometerse a compras de criptomonedas antes de la ejecución", de: "Protokoll zur Verpflichtung für Kryptowährungs-Käufe vor der Ausführung", nl: "Protocol voor vastleggen van cryptocurrency aankopen voor uitvoering" }
        ],
        correct: 0,
        explanation: {
          en: "Commit-reveal schemes prevent front-running and ensure fairness by having participants first commit to their choices using cryptographic hashes, then simultaneously reveal their actual values.",
          es: "Los esquemas de compromiso-revelación previenen el front-running y aseguran equidad haciendo que los participantes primero se comprometan a sus elecciones usando hashes criptográficos, luego revelen simultáneamente sus valores reales.",
          de: "Commit-Reveal-Schemata verhindern Front-Running und gewährleisten Fairness, indem Teilnehmer sich zuerst mit kryptographischen Hashes zu ihren Entscheidungen verpflichten und dann gleichzeitig ihre tatsächlichen Werte offenbaren.",
          nl: "Commit-reveal schemes voorkomen front-running en zorgen voor eerlijkheid door deelnemers eerst te laten vastleggen op hun keuzes met cryptografische hashes, en vervolgens gelijktijdig hun werkelijke waarden te onthullen."
        }
      },
      {
        question: {
          en: "What is cryptocurrency bonding curve?",
          es: "¿Qué es una curva de vinculación de criptomonedas?",
          de: "Was ist eine Bonding-Kurve bei Kryptowährungen?",
          nl: "Wat is een cryptocurrency bonding curve?"
        },
        options: [
          { en: "Mathematical relationship determining token price based on supply", es: "Relación matemática que determina el precio del token basado en la oferta", de: "Mathematische Beziehung, die den Token-Preis basierend auf dem Angebot bestimmt", nl: "Wiskundige relatie die tokenprijs bepaalt gebaseerd op aanbod" },
          { en: "Graph showing correlation between different cryptocurrencies", es: "Gráfico mostrando correlación entre diferentes criptomonedas", de: "Grafik, die Korrelation zwischen verschiedenen Kryptowährungen zeigt", nl: "Grafiek die correlatie tussen verschillende cryptocurrencies toont" },
          { en: "Curve representing the strength of blockchain network bonds", es: "Curva representando la fuerza de los vínculos de la red blockchain", de: "Kurve, die die Stärke der Blockchain-Netzwerkbindungen darstellt", nl: "Curve die de sterkte van blockchain netwerk verbindingen weergeeft" },
          { en: "Chart tracking cryptocurrency trading pair relationships", es: "Gráfico rastreando relaciones de pares de trading de criptomonedas", de: "Diagramm zur Verfolgung von Kryptowährungs-Handelspaar-Beziehungen", nl: "Grafiek die cryptocurrency handelspaar relaties volgt" }
        ],
        correct: 0,
        explanation: {
          en: "A bonding curve is a mathematical formula that defines the relationship between a token's price and its supply, automatically adjusting price as tokens are bought or sold without traditional market makers.",
          es: "Una curva de vinculación es una fórmula matemática que define la relación entre el precio de un token y su oferta, ajustando automáticamente el precio cuando se compran o venden tokens sin creadores de mercado tradicionales.",
          de: "Eine Bonding-Kurve ist eine mathematische Formel, die die Beziehung zwischen dem Preis eines Tokens und seinem Angebot definiert und den Preis automatisch anpasst, wenn Token gekauft oder verkauft werden, ohne traditionelle Market Maker.",
          nl: "Een bonding curve is een wiskundige formule die de relatie tussen een token's prijs en zijn aanbod definieert, waarbij de prijs automatisch wordt aangepast wanneer tokens worden gekocht of verkocht zonder traditionele market makers."
        }
      },
      {
        question: {
          en: "What is cryptocurrency transaction ordering optimization?",
          es: "¿Qué es la optimización del orden de transacciones de criptomonedas?",
          de: "Was ist Kryptowährungs-Transaktionsreihenfolgen-Optimierung?",
          nl: "Wat is cryptocurrency transactie volgorde optimalisatie?"
        },
        options: [
          { en: "Arranging transactions to maximize block space efficiency and minimize gas costs", es: "Organizar transacciones para maximizar eficiencia del espacio de bloque y minimizar costos de gas", de: "Transaktionen anordnen, um Blockraum-Effizienz zu maximieren und Gas-Kosten zu minimieren", nl: "Transacties rangschikken om blokruimte-efficiëntie te maximaliseren en gaskosten te minimaliseren" },
          { en: "Organizing cryptocurrency purchases by date and time", es: "Organizar compras de criptomonedas por fecha y hora", de: "Kryptowährungs-Käufe nach Datum und Uhrzeit organisieren", nl: "Cryptocurrency aankopen organiseren op datum en tijd" },
          { en: "Sorting transactions alphabetically for better record keeping", es: "Ordenar transacciones alfabéticamente para mejor mantenimiento de registros", de: "Transaktionen alphabetisch sortieren für bessere Aufzeichnungen", nl: "Transacties alfabetisch sorteren voor betere administratie" },
          { en: "Prioritizing transactions based on sender reputation", es: "Priorizar transacciones basándose en reputación del remitente", de: "Transaktionen basierend auf Sender-Reputation priorisieren", nl: "Transacties prioriteren gebaseerd op afzender reputatie" }
        ],
        correct: 0,
        explanation: {
          en: "Transaction ordering optimization involves arranging transactions within blocks to maximize efficiency, minimize gas costs, and potentially extract maximum value while maintaining protocol rules.",
          es: "La optimización del orden de transacciones involucra organizar transacciones dentro de bloques para maximizar eficiencia, minimizar costos de gas y potencialmente extraer valor máximo mientras se mantienen las reglas del protocolo.",
          de: "Transaktionsreihenfolgen-Optimierung beinhaltet die Anordnung von Transaktionen innerhalb von Blöcken, um Effizienz zu maximieren, Gas-Kosten zu minimieren und möglicherweise maximalen Wert zu extrahieren, während Protokollregeln eingehalten werden.",
          nl: "Transactie volgorde optimalisatie houdt in dat transacties binnen blokken worden gerangschikt om efficiëntie te maximaliseren, gaskosten te minimaliseren en mogelijk maximale waarde te halen terwijl protocolregels worden gehandhaafd."
        }
      },
      {
        question: {
          en: "What is cryptocurrency network partitioning?",
          es: "¿Qué es la partición de red de criptomonedas?",
          de: "Was ist Kryptowährungs-Netzwerk-Partitionierung?",
          nl: "Wat is cryptocurrency netwerk partitionering?"
        },
        options: [
          { en: "Dividing cryptocurrency holdings across multiple wallets", es: "Dividir tenencias de criptomonedas a través de múltiples billeteras", de: "Kryptowährungs-Bestände auf mehrere Wallets aufteilen", nl: "Cryptocurrency bezittingen verdelen over meerdere wallets" },
          { en: "Network split where nodes cannot communicate, creating separate blockchain versions", es: "División de red donde los nodos no pueden comunicarse, creando versiones separadas de blockchain", de: "Netzwerk-Split, bei dem Knoten nicht kommunizieren können und separate Blockchain-Versionen erstellen", nl: "Netwerk split waarbij nodes niet kunnen communiceren, waardoor aparte blockchain versies ontstaan" },
          { en: "Organizing mining equipment into different physical locations", es: "Organizar equipos de minería en diferentes ubicaciones físicas", de: "Mining-Ausrüstung in verschiedenen physischen Standorten organisieren", nl: "Mining apparatuur organiseren op verschillende fysieke locaties" },
          { en: "Splitting cryptocurrency communities into smaller groups", es: "Dividir comunidades de criptomonedas en grupos más pequeños", de: "Kryptowährungs-Communities in kleinere Gruppen aufteilen", nl: "Cryptocurrency gemeenschappen splitsen in kleinere groepen" }
        ],
        correct: 1,
        explanation: {
          en: "Network partitioning occurs when a blockchain network splits into isolated groups that cannot communicate, potentially leading to chain splits and consensus issues until connectivity is restored.",
          es: "La partición de red ocurre cuando una red blockchain se divide en grupos aislados que no pueden comunicarse, potencialmente llevando a divisiones de cadena y problemas de consenso hasta que se restaure la conectividad.",
          de: "Netzwerk-Partitionierung tritt auf, wenn sich ein Blockchain-Netzwerk in isolierte Gruppen aufteilt, die nicht kommunizieren können, was möglicherweise zu Chain-Splits und Konsens-Problemen führt, bis die Konnektivität wiederhergestellt ist.",
          nl: "Netwerk partitionering treedt op wanneer een blockchain netwerk splitst in geïsoleerde groepen die niet kunnen communiceren, wat mogelijk leidt tot keten splitsingen en consensus problemen totdat connectiviteit wordt hersteld."
        }
      },
      {
        question: {
          en: "What is cryptocurrency Byzantine fault tolerance?",
          es: "¿Qué es la tolerancia a fallos bizantinos de criptomonedas?",
          de: "Was ist Byzantine Fault Tolerance bei Kryptowährungen?",
          nl: "Wat is cryptocurrency Byzantine fault tolerance?"
        },
        options: [
          { en: "System's ability to function correctly despite some nodes acting maliciously", es: "Capacidad del sistema para funcionar correctamente a pesar de que algunos nodos actúen maliciosamente", de: "Fähigkeit des Systems, korrekt zu funktionieren, obwohl einige Knoten böswillig handeln", nl: "Vermogen van het systeem om correct te functioneren ondanks dat sommige nodes kwaadaardig handelen" },
          { en: "Fault tolerance systems developed in Byzantine Empire", es: "Sistemas de tolerancia a fallos desarrollados en el Imperio Bizantino", de: "Fehlertoleranz-Systeme entwickelt im Byzantinischen Reich", nl: "Fouttolerantie systemen ontwikkeld in het Byzantijnse Rijk" },
          { en: "Complex error handling for cryptocurrency exchanges", es: "Manejo complejo de errores para intercambios de criptomonedas", de: "Komplexe Fehlerbehandlung für Kryptowährungsbörsen", nl: "Complexe foutafhandeling voor cryptocurrency exchanges" },
          { en: "Tolerance for outdated or slow blockchain nodes", es: "Tolerancia para nodos blockchain obsoletos o lentos", de: "Toleranz für veraltete oder langsame Blockchain-Knoten", nl: "Tolerantie voor verouderde of langzame blockchain nodes" }
        ],
        correct: 0,
        explanation: {
          en: "Byzantine fault tolerance refers to a distributed system's ability to continue operating correctly even when some participants fail, act maliciously, or send conflicting information, crucial for blockchain consensus.",
          es: "La tolerancia a fallos bizantinos se refiere a la capacidad de un sistema distribuido para continuar operando correctamente incluso cuando algunos participantes fallan, actúan maliciosamente o envían información conflictiva, crucial para el consenso blockchain.",
          de: "Byzantine Fault Tolerance bezieht sich auf die Fähigkeit eines verteilten Systems, weiterhin korrekt zu funktionieren, auch wenn einige Teilnehmer ausfallen, böswillig handeln oder widersprüchliche Informationen senden, entscheidend für Blockchain-Konsens.",
          nl: "Byzantine fault tolerance verwijst naar het vermogen van een gedistribueerd systeem om correct te blijven functioneren zelfs wanneer sommige deelnemers falen, kwaadaardig handelen of conflicterende informatie verzenden, cruciaal voor blockchain consensus."
        }
      },
      {
        question: {
          en: "What is cryptocurrency probabilistic finality?",
          es: "¿Qué es la finalidad probabilística de criptomonedas?",
          de: "Was ist probabilistische Endgültigkeit bei Kryptowährungen?",
          nl: "Wat is cryptocurrency probabilistische finaliteit?"
        },
        options: [
          { en: "Transaction finality that increases in probability with each subsequent block", es: "Finalidad de transacción que aumenta en probabilidad con cada bloque subsecuente", de: "Transaktionsendgültigkeit, die mit jedem nachfolgenden Block in der Wahrscheinlichkeit zunimmt", nl: "Transactie finaliteit die in waarschijnlijkheid toeneemt met elk volgend blok" },
          { en: "Random selection of which transactions achieve finality", es: "Selección aleatoria de qué transacciones logran finalidad", de: "Zufällige Auswahl, welche Transaktionen Endgültigkeit erreichen", nl: "Willekeurige selectie van welke transacties finaliteit bereiken" },
          { en: "Mathematical probability calculations for cryptocurrency prices", es: "Cálculos de probabilidad matemática para precios de criptomonedas", de: "Mathematische Wahrscheinlichkeitsberechnungen für Kryptowährungspreise", nl: "Wiskundige waarschijnlijkheidsberekeningen voor cryptocurrency prijzen" },
          { en: "Uncertainty about when transactions will be processed", es: "Incertidumbre sobre cuándo se procesarán las transacciones", de: "Unsicherheit darüber, wann Transaktionen verarbeitet werden", nl: "Onzekerheid over wanneer transacties worden verwerkt" }
        ],
        correct: 0,
        explanation: {
          en: "Probabilistic finality means that transaction finality is not absolute but becomes increasingly certain with each block confirmation, with the probability of reversal decreasing exponentially over time.",
          es: "La finalidad probabilística significa que la finalidad de transacción no es absoluta pero se vuelve cada vez más cierta con cada confirmación de bloque, con la probabilidad de reversión disminuyendo exponencialmente con el tiempo.",
          de: "Probabilistische Endgültigkeit bedeutet, dass Transaktionsendgültigkeit nicht absolut ist, sondern mit jeder Blockbestätigung zunehmend sicher wird, wobei die Wahrscheinlichkeit einer Umkehrung exponentiell mit der Zeit abnimmt.",
          nl: "Probabilistische finaliteit betekent dat transactie finaliteit niet absoluut is maar steeds zekerder wordt met elke blokbevestiging, waarbij de waarschijnlijkheid van omkering exponentieel afneemt in de tijd."
        }
      },
      {
        question: {
          en: "What is cryptocurrency censorship resistance?",
          es: "¿Qué es la resistencia a la censura de criptomonedas?",
          de: "Was ist Zensur-Resistenz bei Kryptowährungen?",
          nl: "Wat is cryptocurrency censuurbestendigheid?"
        },
        options: [
          { en: "Network's ability to process transactions without centralized control or blocking", es: "Capacidad de la red para procesar transacciones sin control centralizado o bloqueo", de: "Fähigkeit des Netzwerks, Transaktionen ohne zentralisierte Kontrolle oder Blockierung zu verarbeiten", nl: "Vermogen van het netwerk om transacties te verwerken zonder gecentraliseerde controle of blokkering" },
          { en: "Government resistance to adopting cryptocurrency regulations", es: "Resistencia del gobierno a adoptar regulaciones de criptomonedas", de: "Regierungswiderstand gegen die Annahme von Kryptowährungs-Regulierungen", nl: "Overheidsweerstand tegen het aannemen van cryptocurrency regelgeving" },
          { en: "Media coverage restrictions for cryptocurrency news", es: "Restricciones de cobertura mediática para noticias de criptomonedas", de: "Medienberichterstattungs-Beschränkungen für Kryptowährungs-Nachrichten", nl: "Media dekking beperkingen voor cryptocurrency nieuws" },
          { en: "User resistance to network protocol changes", es: "Resistencia del usuario a cambios del protocolo de red", de: "Benutzerwiderstand gegen Netzwerkprotokoll-Änderungen", nl: "Gebruikersweerstand tegen netwerk protocol wijzigingen" }
        ],
        correct: 0,
        explanation: {
          en: "Censorship resistance refers to a blockchain network's ability to remain operational and process transactions without interference from governments, corporations, or other centralized authorities attempting to block or censor activity.",
          es: "La resistencia a la censura se refiere a la capacidad de una red blockchain para mantenerse operativa y procesar transacciones sin interferencia de gobiernos, corporaciones u otras autoridades centralizadas que intentan bloquear o censurar actividad.",
          de: "Zensur-Resistenz bezieht sich auf die Fähigkeit eines Blockchain-Netzwerks, operational zu bleiben und Transaktionen zu verarbeiten, ohne Eingriffe von Regierungen, Unternehmen oder anderen zentralisierten Behörden, die versuchen, Aktivitäten zu blockieren oder zu zensieren.",
          nl: "Censuurbestendigheid verwijst naar het vermogen van een blockchain netwerk om operationeel te blijven en transacties te verwerken zonder interferentie van overheden, bedrijven of andere gecentraliseerde autoriteiten die proberen activiteit te blokkeren of censureren."
        }
      },
      {
        question: {
          en: "What is a cryptocurrency oracle and why are they important?",
          es: "¿Qué es un oráculo de criptomonedas y por qué son importantes?",
          de: "Was ist ein Kryptowährungs-Orakel und warum sind sie wichtig?",
          nl: "Wat is een cryptocurrency oracle en waarom zijn ze belangrijk?"
        },
        options: [
          { en: "External data feeds that connect blockchains to real-world information", es: "Feeds de datos externos que conectan blockchains a información del mundo real", de: "Externe Datenfeeds, die Blockchains mit realen Informationen verbinden", nl: "Externe datafeeds die blockchains verbinden met echte wereldinformatie" },
          { en: "A type of cryptocurrency prediction software", es: "Un tipo de software de predicción de criptomonedas", de: "Eine Art Kryptowährungs-Vorhersagesoftware", nl: "Een type cryptocurrency voorspellingssoftware" },
          { en: "Ancient wisdom applied to cryptocurrency trading", es: "Sabiduría antigua aplicada al trading de criptomonedas", de: "Alte Weisheit angewandt auf Kryptowährungs-Handel", nl: "Oude wijsheid toegepast op cryptocurrency handel" },
          { en: "A consultation service for blockchain developers", es: "Un servicio de consultoría para desarrolladores blockchain", de: "Ein Beratungsservice für Blockchain-Entwickler", nl: "Een adviesservice voor blockchain ontwikkelaars" }
        ],
        correct: 0,
        explanation: {
          en: "Oracles are crucial infrastructure that provide external data to smart contracts, enabling them to interact with real-world events like price feeds, weather data, or sports results. They solve the 'oracle problem' of how blockchains access off-chain information.",
          es: "Los oráculos son infraestructura crucial que proporciona datos externos a contratos inteligentes, permitiéndoles interactuar con eventos del mundo real como feeds de precios, datos meteorológicos o resultados deportivos. Resuelven el 'problema del oráculo' de cómo las blockchains acceden a información fuera de la cadena.",
          de: "Orakel sind entscheidende Infrastruktur, die externe Daten an Smart Contracts liefert und es ihnen ermöglicht, mit realen Ereignissen wie Preis-Feeds, Wetterdaten oder Sportergebnissen zu interagieren. Sie lösen das 'Orakel-Problem', wie Blockchains auf Off-Chain-Informationen zugreifen.",
          nl: "Oracles zijn cruciale infrastructuur die externe data aan smart contracts leveren, waardoor ze kunnen interageren met echte wereldgebeurtenissen zoals prijsfeeds, weerdata of sportresultaten. Ze lossen het 'oracle probleem' op van hoe blockchains toegang krijgen tot off-chain informatie."
        }
      },
      {
        question: {
          en: "What is the difference between hot and cold cryptocurrency storage?",
          es: "¿Cuál es la diferencia entre almacenamiento caliente y frío de criptomonedas?",
          de: "Was ist der Unterschied zwischen heißer und kalter Kryptowährungs-Speicherung?",
          nl: "Wat is het verschil tussen hot en cold cryptocurrency opslag?"
        },
        options: [
          { en: "Hot storage is online and accessible, cold storage is offline and more secure", es: "El almacenamiento caliente está en línea y accesible, el almacenamiento frío está fuera de línea y es más seguro", de: "Heiße Speicherung ist online und zugänglich, kalte Speicherung ist offline und sicherer", nl: "Hot storage is online en toegankelijk, cold storage is offline en veiliger" },
          { en: "Hot storage uses high-temperature servers, cold storage uses refrigerated servers", es: "El almacenamiento caliente usa servidores de alta temperatura, el almacenamiento frío usa servidores refrigerados", de: "Heiße Speicherung verwendet Hochtemperatur-Server, kalte Speicherung verwendet gekühlte Server", nl: "Hot storage gebruikt hoge temperatuur servers, cold storage gebruikt gekoelde servers" },
          { en: "Hot storage is for active trading, cold storage is for inactive accounts", es: "El almacenamiento caliente es para trading activo, el almacenamiento frío es para cuentas inactivas", de: "Heiße Speicherung ist für aktiven Handel, kalte Speicherung ist für inaktive Konten", nl: "Hot storage is voor actieve handel, cold storage is voor inactieve accounts" },
          { en: "Hot storage requires authentication, cold storage doesn't", es: "El almacenamiento caliente requiere autenticación, el almacenamiento frío no", de: "Heiße Speicherung erfordert Authentifizierung, kalte Speicherung nicht", nl: "Hot storage vereist authenticatie, cold storage niet" }
        ],
        correct: 0,
        explanation: {
          en: "Hot storage refers to cryptocurrency wallets connected to the internet, making them convenient but more vulnerable to hacking. Cold storage keeps private keys offline (hardware wallets, paper wallets), providing better security at the cost of convenience.",
          es: "El almacenamiento caliente se refiere a billeteras de criptomonedas conectadas a internet, haciéndolas convenientes pero más vulnerables al hackeo. El almacenamiento frío mantiene las llaves privadas fuera de línea (billeteras hardware, billeteras de papel), proporcionando mejor seguridad a costa de conveniencia.",
          de: "Heiße Speicherung bezieht sich auf Kryptowährungs-Wallets, die mit dem Internet verbunden sind, was sie bequem, aber anfälliger für Hacking macht. Kalte Speicherung hält private Schlüssel offline (Hardware-Wallets, Papier-Wallets) und bietet bessere Sicherheit auf Kosten der Bequemlichkeit.",
          nl: "Hot storage verwijst naar cryptocurrency wallets die verbonden zijn met het internet, waardoor ze handig maar kwetsbaarder voor hacking zijn. Cold storage houdt private keys offline (hardware wallets, papieren wallets), wat betere beveiliging biedt ten koste van gemak."
        }
      }
    ]
  };

  // Export for use in the quiz application
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level4;
  } else if (typeof window !== 'undefined') {
    window.level4 = level4;
  }
})();