// Cryptocurrency Quiz - Level 2
(function() {
  const level2 = {
    name: {
          "en": "Cryptocurrency - Intermediate",
          "es": "Criptomoneda - Intermedio",
          "de": "Kryptowährung - Mittelstufe",
          "nl": "Cryptocurrency - Gemiddeld"
    },
    questions: [
      {
        question: {
                  "en": "What is a blockchain?",
                  "es": "¿Qué es una blockchain?",
                  "de": "Was ist eine Blockchain?",
                  "nl": "Wat is een blockchain?"
        },
        options: [
        {
                  "en": "A distributed ledger of transactions",
                  "es": "Un libro mayor distribuido de transacciones",
                  "de": "Ein verteiltes Transaktionsbuch",
                  "nl": "Een gedistribueerd transactieboek"
        },
        {
                  "en": "A digital wallet",
                  "es": "Una billetera digital",
                  "de": "Eine digitale Geldbörse",
                  "nl": "Een digitale portemonnee"
        },
        {
                  "en": "A type of cryptocurrency",
                  "es": "Un tipo de criptomoneda",
                  "de": "Eine Art Kryptowährung",
                  "nl": "Een type cryptocurrency"
        },
        {
                  "en": "A mining software",
                  "es": "Un software de minería",
                  "de": "Eine Mining-Software",
                  "nl": "Een mining software"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "A blockchain is a distributed ledger technology that maintains a continuously growing list of records (blocks) that are linked and secured using cryptography.",
                  "es": "Una blockchain es una tecnología de libro mayor distribuido que mantiene una lista de registros (bloques) en continuo crecimiento que están vinculados y asegurados usando criptografía.",
                  "de": "Eine Blockchain ist eine verteilte Ledger-Technologie, die eine kontinuierlich wachsende Liste von Datensätzen (Blöcken) führt, die mittels Kryptografie verknüpft und gesichert sind.",
                  "nl": "Een blockchain is een gedistribueerde grootboektechnologie die een continu groeiende lijst van records (blokken) bijhoudt die gekoppeld en beveiligd zijn met cryptografie."
        }
      },
      {
        question: {
                  "en": "What is cryptocurrency mining?",
                  "es": "¿Qué es la minería de criptomonedas?",
                  "de": "Was ist Kryptowährungs-Mining?",
                  "nl": "Wat is cryptocurrency mining?"
        },
        options: [
        {
                  "en": "Buying cryptocurrencies online",
                  "es": "Comprar criptomonedas en línea",
                  "de": "Kryptowährungen online kaufen",
                  "nl": "Cryptocurrencies online kopen"
        },
        {
                  "en": "Processing transactions and securing the network",
                  "es": "Procesar transacciones y asegurar la red",
                  "de": "Transaktionen verarbeiten und das Netzwerk sichern",
                  "nl": "Transacties verwerken en het netwerk beveiligen"
        },
        {
                  "en": "Creating new cryptocurrency types",
                  "es": "Crear nuevos tipos de criptomonedas",
                  "de": "Neue Kryptowährungstypen erstellen",
                  "nl": "Nieuwe cryptocurrency typen maken"
        },
        {
                  "en": "Digging for digital coins underground",
                  "es": "Cavar monedas digitales bajo tierra",
                  "de": "Digitale Münzen unterirdisch graben",
                  "nl": "Digitale munten ondergronds graven"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Cryptocurrency mining is the process of validating transactions and adding them to the blockchain while securing the network, earning rewards in the form of new coins.",
                  "es": "La minería de criptomonedas es el proceso de validar transacciones y agregarlas a la blockchain mientras se asegura la red, obteniendo recompensas en forma de nuevas monedas.",
                  "de": "Kryptowährungs-Mining ist der Prozess der Validierung von Transaktionen und deren Hinzufügung zur Blockchain bei gleichzeitiger Netzwerksicherung, wobei Belohnungen in Form neuer Münzen verdient werden.",
                  "nl": "Cryptocurrency mining is het proces van het valideren van transacties en het toevoegen aan de blockchain terwijl het netwerk wordt beveiligd, waarbij beloningen in de vorm van nieuwe munten worden verdiend."
        }
      },
      {
        question: {
                  "en": "What is Ethereum?",
                  "es": "¿Qué es Ethereum?",
                  "de": "Was ist Ethereum?",
                  "nl": "Wat is Ethereum?"
        },
        options: [
        {
                  "en": "A blockchain platform for smart contracts",
                  "es": "Una plataforma blockchain para contratos inteligentes",
                  "de": "Eine Blockchain-Plattform für Smart Contracts",
                  "nl": "Een blockchain platform voor smart contracts"
        },
        {
                  "en": "A type of Bitcoin",
                  "es": "Un tipo de Bitcoin",
                  "de": "Eine Art Bitcoin",
                  "nl": "Een type Bitcoin"
        },
        {
                  "en": "A cryptocurrency exchange",
                  "es": "Un intercambio de criptomonedas",
                  "de": "Eine Kryptowährungsbörse",
                  "nl": "Een cryptocurrency exchange"
        },
        {
                  "en": "A mining hardware company",
                  "es": "Una empresa de hardware de minería",
                  "de": "Ein Mining-Hardware-Unternehmen",
                  "nl": "Een mining hardware bedrijf"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Ethereum is a decentralized blockchain platform that enables smart contracts and decentralized applications (DApps) to be built and deployed.",
                  "es": "Ethereum es una plataforma blockchain descentralizada que permite construir e implementar contratos inteligentes y aplicaciones descentralizadas (DApps).",
                  "de": "Ethereum ist eine dezentrale Blockchain-Plattform, die es ermöglicht, Smart Contracts und dezentrale Anwendungen (DApps) zu erstellen und bereitzustellen.",
                  "nl": "Ethereum is een gedecentraliseerd blockchain platform dat het mogelijk maakt om smart contracts en gedecentraliseerde applicaties (DApps) te bouwen en te deployen."
        }
      },
      {
        question: {
                  "en": "What is a cryptocurrency wallet?",
                  "es": "¿Qué es una billetera de criptomonedas?",
                  "de": "Was ist eine Kryptowährungs-Wallet?",
                  "nl": "Wat is een cryptocurrency wallet?"
        },
        options: [
        {
                  "en": "A physical bag for storing coins",
                  "es": "Una bolsa física para almacenar monedas",
                  "de": "Eine physische Tasche zum Aufbewahren von Münzen",
                  "nl": "Een fysieke tas voor het bewaren van munten"
        },
        {
                  "en": "Software that stores private keys",
                  "es": "Software que almacena claves privadas",
                  "de": "Software, das private Schlüssel speichert",
                  "nl": "Software die private keys opslaat"
        },
        {
                  "en": "A website for trading cryptocurrencies",
                  "es": "Un sitio web para comerciar criptomonedas",
                  "de": "Eine Website für den Handel mit Kryptowährungen",
                  "nl": "Een website voor het handelen in cryptocurrencies"
        },
        {
                  "en": "A bank account for digital money",
                  "es": "Una cuenta bancaria para dinero digital",
                  "de": "Ein Bankkonto für digitales Geld",
                  "nl": "Een bankrekening voor digitaal geld"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "A cryptocurrency wallet is software that stores private keys and allows users to send, receive, and manage their digital assets securely.",
                  "es": "Una billetera de criptomonedas es software que almacena claves privadas y permite a los usuarios enviar, recibir y gestionar sus activos digitales de forma segura.",
                  "de": "Eine Kryptowährungs-Wallet ist Software, die private Schlüssel speichert und es Benutzern ermöglicht, ihre digitalen Assets sicher zu senden, zu empfangen und zu verwalten.",
                  "nl": "Een cryptocurrency wallet is software die private keys opslaat en gebruikers in staat stelt om hun digitale assets veilig te verzenden, ontvangen en beheren."
        }
      },
      {
        question: {
                  "en": "What does 'HODL' mean in cryptocurrency culture?",
                  "es": "¿Qué significa 'HODL' en la cultura de criptomonedas?",
                  "de": "Was bedeutet 'HODL' in der Kryptowährungskultur?",
                  "nl": "Wat betekent 'HODL' in de cryptocurrency cultuur?"
        },
        options: [
        {
                  "en": "Hashing Operations for Distributed Logging",
                  "es": "Operaciones de Hash para Registro Distribuido",
                  "de": "Hashing-Operationen für verteilte Protokollierung",
                  "nl": "Hashing Operaties voor Gedistribueerde Logging"
        },
        {
                  "en": "Hold On for Dear Life - long-term holding strategy",
                  "es": "Hold On for Dear Life - estrategia de retención a largo plazo",
                  "de": "Hold On for Dear Life - langfristige Haltestrategie",
                  "nl": "Hold On for Dear Life - lange termijn hold strategie"
        },
        {
                  "en": "Hardware-Optimized Digital Lock",
                  "es": "Cerradura Digital Optimizada por Hardware",
                  "de": "Hardware-Optimiertes Digitales Schloss",
                  "nl": "Hardware-Geoptimaliseerd Digitaal Slot"
        },
        {
                  "en": "High-Order Digital Ledger",
                  "es": "Libro Mayor Digital de Alto Orden",
                  "de": "High-Order Digital Ledger",
                  "nl": "High-Order Digital Ledger"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "HODL originated from a misspelled 'hold' in a Bitcoin forum and became a popular term meaning to hold cryptocurrency long-term regardless of market volatility.",
                  "es": "HODL se originó de un 'hold' mal escrito en un foro de Bitcoin y se convirtió en un término popular que significa mantener criptomonedas a largo plazo independientemente de la volatilidad del mercado.",
                  "de": "HODL entstand aus einem falsch geschriebenen 'hold' in einem Bitcoin-Forum und wurde zu einem beliebten Begriff, der bedeutet, Kryptowährungen langfristig zu halten, unabhängig von der Marktvolatilität.",
                  "nl": "HODL ontstond uit een verkeerd gespelde 'hold' in een Bitcoin forum en werd een populaire term die betekent cryptocurrency lange termijn vasthouden ongeacht marktvolatiliteit."
        }
      },
      {
        question: {
                  "en": "What is a smart contract?",
                  "es": "¿Qué es un contrato inteligente?",
                  "de": "Was ist ein Smart Contract?",
                  "nl": "Wat is een smart contract?"
        },
        options: [
        {
                  "en": "A legal document written by lawyers",
                  "es": "Un documento legal escrito por abogados",
                  "de": "Ein von Anwälten verfasstes Rechtsdokument",
                  "nl": "Een juridisch document geschreven door advocaten"
        },
        {
                  "en": "A contract that can think and make decisions",
                  "es": "Un contrato que puede pensar y tomar decisiones",
                  "de": "Ein Vertrag, der denken und Entscheidungen treffen kann",
                  "nl": "Een contract dat kan denken en beslissingen maken"
        },
        {
                  "en": "An AI-powered contract negotiator",
                  "es": "Un negociador de contratos impulsado por IA",
                  "de": "Ein KI-gestützter Vertragsverhandler",
                  "nl": "Een AI-gedreven contractonderhandelaar"
        },
        {
                  "en": "Self-executing contract with terms directly written into code",
                  "es": "Contrato autoejecutante con términos escritos directamente en código",
                  "de": "Selbstausführender Vertrag mit direkt in Code geschriebenen Bedingungen",
                  "nl": "Zelfuitvoerend contract met voorwaarden direct geschreven in code"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "A smart contract is a self-executing contract with the terms of the agreement directly written into lines of code, automatically executing when conditions are met.",
                  "es": "Un contrato inteligente es un contrato autoejecutante con los términos del acuerdo escritos directamente en líneas de código, ejecutándose automáticamente cuando se cumplen las condiciones.",
                  "de": "Ein Smart Contract ist ein selbstausführender Vertrag, bei dem die Vertragsbedingungen direkt in Codezeilen geschrieben sind und automatisch ausgeführt werden, wenn Bedingungen erfüllt sind.",
                  "nl": "Een smart contract is een zelfuitvoerend contract waarbij de voorwaarden van de overeenkomst direct in coderegels zijn geschreven en automatisch worden uitgevoerd wanneer aan voorwaarden wordt voldaan."
        }
      },
      {
        question: {
                  "en": "What is the difference between Bitcoin and altcoins?",
                  "es": "¿Cuál es la diferencia entre Bitcoin y altcoins?",
                  "de": "Was ist der Unterschied zwischen Bitcoin und Altcoins?",
                  "nl": "Wat is het verschil tussen Bitcoin en altcoins?"
        },
        options: [
        {
                  "en": "Bitcoin is more expensive than all altcoins",
                  "es": "Bitcoin es más caro que todas las altcoins",
                  "de": "Bitcoin ist teurer als alle Altcoins",
                  "nl": "Bitcoin is duurder dan alle altcoins"
        },
        {
                  "en": "There is no difference",
                  "es": "No hay diferencia",
                  "de": "Es gibt keinen Unterschied",
                  "nl": "Er is geen verschil"
        },
        {
                  "en": "Bitcoin is digital, altcoins are physical",
                  "es": "Bitcoin es digital, las altcoins son físicas",
                  "de": "Bitcoin ist digital, Altcoins sind physisch",
                  "nl": "Bitcoin is digitaal, altcoins zijn fysiek"
        },
        {
                  "en": "Bitcoin was first, altcoins are alternative cryptocurrencies",
                  "es": "Bitcoin fue primero, las altcoins son criptomonedas alternativas",
                  "de": "Bitcoin war zuerst, Altcoins sind alternative Kryptowährungen",
                  "nl": "Bitcoin was eerst, altcoins zijn alternatieve cryptocurrencies"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Bitcoin was the first cryptocurrency, while altcoins (alternative coins) are all other cryptocurrencies created after Bitcoin, each with their own features and purposes.",
                  "es": "Bitcoin fue la primera criptomoneda, mientras que las altcoins (monedas alternativas) son todas las otras criptomonedas creadas después de Bitcoin, cada una con sus propias características y propósitos.",
                  "de": "Bitcoin war die erste Kryptowährung, während Altcoins (alternative Münzen) alle anderen nach Bitcoin erstellten Kryptowährungen sind, jede mit ihren eigenen Eigenschaften und Zwecken.",
                  "nl": "Bitcoin was de eerste cryptocurrency, terwijl altcoins (alternatieve munten) alle andere cryptocurrencies zijn die na Bitcoin zijn gemaakt, elk met hun eigen eigenschappen en doeleinden."
        }
      },
      {
        question: {
                  "en": "What is a cryptocurrency exchange?",
                  "es": "¿Qué es un intercambio de criptomonedas?",
                  "de": "Was ist eine Kryptowährungsbörse?",
                  "nl": "Wat is een cryptocurrency exchange?"
        },
        options: [
        {
                  "en": "A government agency that regulates crypto",
                  "es": "Una agencia gubernamental que regula las criptomonedas",
                  "de": "Eine Regierungsbehörde, die Krypto reguliert",
                  "nl": "Een overheidsinstantie die crypto reguleert"
        },
        {
                  "en": "A place to physically exchange paper money",
                  "es": "Un lugar para intercambiar físicamente dinero en papel",
                  "de": "Ein Ort zum physischen Austausch von Papiergeld",
                  "nl": "Een plaats om fysiek papiergeld uit te wisselen"
        },
        {
                  "en": "A platform for buying, selling, and trading cryptocurrencies",
                  "es": "Una plataforma para comprar, vender e intercambiar criptomonedas",
                  "de": "Eine Plattform zum Kaufen, Verkaufen und Handeln von Kryptowährungen",
                  "nl": "Een platform voor het kopen, verkopen en handelen van cryptocurrencies"
        },
        {
                  "en": "A type of blockchain technology",
                  "es": "Un tipo de tecnología blockchain",
                  "de": "Eine Art Blockchain-Technologie",
                  "nl": "Een type blockchain technologie"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "A cryptocurrency exchange is a digital platform where users can buy, sell, and trade cryptocurrencies using various payment methods and trading pairs.",
                  "es": "Un intercambio de criptomonedas es una plataforma digital donde los usuarios pueden comprar, vender e intercambiar criptomonedas usando varios métodos de pago y pares de trading.",
                  "de": "Eine Kryptowährungsbörse ist eine digitale Plattform, auf der Benutzer Kryptowährungen mit verschiedenen Zahlungsmethoden und Handelspaaren kaufen, verkaufen und handeln können.",
                  "nl": "Een cryptocurrency exchange is een digitaal platform waar gebruikers cryptocurrencies kunnen kopen, verkopen en handelen met verschillende betaalmethoden en handelsparen."
        }
      },
      {
        question: {
                  "en": "What does 'market cap' mean for cryptocurrencies?",
                  "es": "¿Qué significa 'capitalización de mercado' para las criptomonedas?",
                  "de": "Was bedeutet 'Marktkapitalisierung' für Kryptowährungen?",
                  "nl": "Wat betekent 'market cap' voor cryptocurrencies?"
        },
        options: [
        {
                  "en": "Total value of all coins in circulation",
                  "es": "Valor total de todas las monedas en circulación",
                  "de": "Gesamtwert aller im Umlauf befindlichen Münzen",
                  "nl": "Totale waarde van alle munten in omloop"
        },
        {
                  "en": "The maximum price a cryptocurrency can reach",
                  "es": "El precio máximo que puede alcanzar una criptomoneda",
                  "de": "Der Höchstpreis, den eine Kryptowährung erreichen kann",
                  "nl": "De maximumprijs die een cryptocurrency kan bereiken"
        },
        {
                  "en": "The limit on daily trading volume",
                  "es": "El límite en el volumen de trading diario",
                  "de": "Die Begrenzung des täglichen Handelsvolumens",
                  "nl": "De limiet op dagelijks handelsvolume"
        },
        {
                  "en": "The number of coins that can be mined",
                  "es": "El número de monedas que se pueden minar",
                  "de": "Die Anzahl der Münzen, die gemint werden können",
                  "nl": "Het aantal munten dat kan worden gemined"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Market capitalization (market cap) is calculated by multiplying the current price of a cryptocurrency by the total number of coins in circulation, representing the total market value.",
                  "es": "La capitalización de mercado se calcula multiplicando el precio actual de una criptomoneda por el número total de monedas en circulación, representando el valor total del mercado.",
                  "de": "Die Marktkapitalisierung wird berechnet, indem der aktuelle Preis einer Kryptowährung mit der Gesamtzahl der im Umlauf befindlichen Münzen multipliziert wird, was den Gesamtmarktwert darstellt.",
                  "nl": "Marktkapitalisatie wordt berekend door de huidige prijs van een cryptocurrency te vermenigvuldigen met het totale aantal munten in omloop, wat de totale marktwaarde vertegenwoordigt."
        }
      },
      {
        question: {
                  "en": "What is a private key in cryptocurrency?",
                  "es": "¿Qué es una clave privada en criptomonedas?",
                  "de": "Was ist ein privater Schlüssel bei Kryptowährungen?",
                  "nl": "Wat is een private key in cryptocurrency?"
        },
        options: [
        {
                  "en": "A mining algorithm",
                  "es": "Un algoritmo de minería",
                  "de": "Ein Mining-Algorithmus",
                  "nl": "Een mining algoritme"
        },
        {
                  "en": "A public address for receiving payments",
                  "es": "Una dirección pública para recibir pagos",
                  "de": "Eine öffentliche Adresse zum Empfangen von Zahlungen",
                  "nl": "Een openbaar adres voor het ontvangen van betalingen"
        },
        {
                  "en": "A password for cryptocurrency exchanges",
                  "es": "Una contraseña para intercambios de criptomonedas",
                  "de": "Ein Passwort für Kryptowährungsbörsen",
                  "nl": "Een wachtwoord voor cryptocurrency exchanges"
        },
        {
                  "en": "A secret code that controls access to your cryptocurrencies",
                  "es": "Un código secreto que controla el acceso a tus criptomonedas",
                  "de": "Ein Geheimcode, der den Zugang zu Ihren Kryptowährungen kontrolliert",
                  "nl": "Een geheime code die toegang tot je cryptocurrencies controleert"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "A private key is a secret cryptographic code that proves ownership of cryptocurrencies and allows you to send transactions. Anyone with your private key can access your funds.",
                  "es": "Una clave privada es un código criptográfico secreto que prueba la propiedad de criptomonedas y te permite enviar transacciones. Cualquiera con tu clave privada puede acceder a tus fondos.",
                  "de": "Ein privater Schlüssel ist ein geheimer kryptographischer Code, der das Eigentum an Kryptowährungen beweist und es Ihnen ermöglicht, Transaktionen zu senden. Jeder mit Ihrem privaten Schlüssel kann auf Ihre Gelder zugreifen.",
                  "nl": "Een private key is een geheime cryptografische code die eigendom van cryptocurrencies bewijst en je in staat stelt transacties te verzenden. Iedereen met je private key kan toegang krijgen tot je geld."
        }
      },
      {
        question: {
                  "en": "What is a public key in cryptocurrency?",
                  "es": "¿Qué es una clave pública en criptomonedas?",
                  "de": "Was ist ein öffentlicher Schlüssel bei Kryptowährungen?",
                  "nl": "Wat is een public key in cryptocurrency?"
        },
        options: [
        {
                  "en": "A key for unlocking blockchain records",
                  "es": "Una clave para desbloquear registros de blockchain",
                  "de": "Ein Schlüssel zum Entsperren von Blockchain-Aufzeichnungen",
                  "nl": "Een sleutel voor het ontgrendelen van blockchain records"
        },
        {
                  "en": "An address others can use to send you cryptocurrency",
                  "es": "Una dirección que otros pueden usar para enviarte criptomonedas",
                  "de": "Eine Adresse, die andere verwenden können, um Ihnen Kryptowährung zu senden",
                  "nl": "Een adres dat anderen kunnen gebruiken om je cryptocurrency te sturen"
        },
        {
                  "en": "A government-issued cryptocurrency license",
                  "es": "Una licencia de criptomonedas emitida por el gobierno",
                  "de": "Eine von der Regierung ausgestellte Kryptowährungslizenz",
                  "nl": "Een door de overheid uitgegeven cryptocurrency licentie"
        },
        {
                  "en": "A password everyone knows",
                  "es": "Una contraseña que todos conocen",
                  "de": "Ein Passwort, das jeder kennt",
                  "nl": "Een wachtwoord dat iedereen kent"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "A public key is derived from your private key and serves as your cryptocurrency address that others can use to send you funds. It's safe to share publicly.",
                  "es": "Una clave pública se deriva de tu clave privada y sirve como tu dirección de criptomonedas que otros pueden usar para enviarte fondos. Es seguro compartirla públicamente.",
                  "de": "Ein öffentlicher Schlüssel wird von Ihrem privaten Schlüssel abgeleitet und dient als Ihre Kryptowährungsadresse, die andere verwenden können, um Ihnen Gelder zu senden. Es ist sicher, ihn öffentlich zu teilen.",
                  "nl": "Een public key wordt afgeleid van je private key en dient als je cryptocurrency adres dat anderen kunnen gebruiken om je geld te sturen. Het is veilig om deze openbaar te delen."
        }
      },
      {
        question: {
                  "en": "What is cryptocurrency volatility?",
                  "es": "¿Qué es la volatilidad de las criptomonedas?",
                  "de": "Was ist Kryptowährungsvolatilität?",
                  "nl": "Wat is cryptocurrency volatiliteit?"
        },
        options: [
        {
                  "en": "The ability of crypto to evaporate",
                  "es": "La capacidad de las criptomonedas de evaporarse",
                  "de": "Die Fähigkeit von Krypto zu verdampfen",
                  "nl": "Het vermogen van crypto om te verdampen"
        },
        {
                  "en": "How quickly cryptocurrency prices change",
                  "es": "Qué tan rápido cambian los precios de las criptomonedas",
                  "de": "Wie schnell sich Kryptowährungspreise ändern",
                  "nl": "Hoe snel cryptocurrency prijzen veranderen"
        },
        {
                  "en": "The explosive nature of blockchain technology",
                  "es": "La naturaleza explosiva de la tecnología blockchain",
                  "de": "Die explosive Natur der Blockchain-Technologie",
                  "nl": "De explosieve aard van blockchain technologie"
        },
        {
                  "en": "The electrical consumption of mining",
                  "es": "El consumo eléctrico de la minería",
                  "de": "Der Stromverbrauch des Minings",
                  "nl": "Het elektriciteitsverbruik van mining"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Cryptocurrency volatility refers to the rapid and significant price fluctuations that digital currencies experience, often much higher than traditional assets.",
                  "es": "La volatilidad de las criptomonedas se refiere a las fluctuaciones de precios rápidas y significativas que experimentan las monedas digitales, a menudo mucho más altas que los activos tradicionales.",
                  "de": "Kryptowährungsvolatilität bezieht sich auf die schnellen und signifikanten Preisschwankungen, die digitale Währungen erleben, oft viel höher als bei traditionellen Vermögenswerten.",
                  "nl": "Cryptocurrency volatiliteit verwijst naar de snelle en significante prijsschommelingen die digitale valuta's ervaren, vaak veel hoger dan traditionele activa."
        }
      },
      {
        question: {
                  "en": "What is a cryptocurrency fork?",
                  "es": "¿Qué es una bifurcación de criptomonedas?",
                  "de": "Was ist eine Kryptowährungs-Fork?",
                  "nl": "Wat is een cryptocurrency fork?"
        },
        options: [
        {
                  "en": "A way to eat while trading crypto",
                  "es": "Una forma de comer mientras se comercia con criptomonedas",
                  "de": "Eine Art zu essen während des Krypto-Handels",
                  "nl": "Een manier om te eten tijdens het handelen in crypto"
        },
        {
                  "en": "A change or upgrade to a blockchain's protocol",
                  "es": "Un cambio o actualización al protocolo de una blockchain",
                  "de": "Eine Änderung oder Aktualisierung des Blockchain-Protokolls",
                  "nl": "Een verandering of upgrade van een blockchain protocol"
        },
        {
                  "en": "A mining tool shaped like a fork",
                  "es": "Una herramienta de minería con forma de tenedor",
                  "de": "Ein gabelförmiges Mining-Werkzeug",
                  "nl": "Een mining tool in de vorm van een vork"
        },
        {
                  "en": "Splitting cryptocurrency between two wallets",
                  "es": "Dividir criptomonedas entre dos billeteras",
                  "de": "Kryptowährung zwischen zwei Wallets aufteilen",
                  "nl": "Cryptocurrency verdelen tussen twee wallets"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "A cryptocurrency fork is a change to the blockchain's protocol rules. A hard fork creates a new cryptocurrency, while a soft fork is backward-compatible.",
                  "es": "Una bifurcación de criptomonedas es un cambio a las reglas del protocolo de la blockchain. Una bifurcación dura crea una nueva criptomoneda, mientras que una bifurcación suave es compatible hacia atrás.",
                  "de": "Eine Kryptowährungs-Fork ist eine Änderung der Blockchain-Protokollregeln. Eine Hard Fork erstellt eine neue Kryptowährung, während eine Soft Fork rückwärtskompatibel ist.",
                  "nl": "Een cryptocurrency fork is een wijziging van de blockchain protocolregels. Een hard fork creëert een nieuwe cryptocurrency, terwijl een soft fork achterwaarts compatibel is."
        }
      },
      {
        question: {
                  "en": "What is DeFi (Decentralized Finance)?",
                  "es": "¿Qué es DeFi (Finanzas Descentralizadas)?",
                  "de": "Was ist DeFi (Dezentrale Finanzen)?",
                  "nl": "Wat is DeFi (Gedecentraliseerde Financiën)?"
        },
        options: [
        {
                  "en": "A new type of cryptocurrency",
                  "es": "Un nuevo tipo de criptomoneda",
                  "de": "Eine neue Art von Kryptowährung",
                  "nl": "Een nieuw type cryptocurrency"
        },
        {
                  "en": "Traditional banking with digital features",
                  "es": "Banca tradicional con características digitales",
                  "de": "Traditionelles Banking mit digitalen Funktionen",
                  "nl": "Traditioneel bankieren met digitale functies"
        },
        {
                  "en": "Government-controlled digital currency",
                  "es": "Moneda digital controlada por el gobierno",
                  "de": "Staatlich kontrollierte digitale Währung",
                  "nl": "Door de overheid gecontroleerde digitale valuta"
        },
        {
                  "en": "Financial services built on blockchain without intermediaries",
                  "es": "Servicios financieros construidos en blockchain sin intermediarios",
                  "de": "Finanzdienstleistungen auf Blockchain ohne Zwischenhändler",
                  "nl": "Financiële diensten gebouwd op blockchain zonder tussenpersonen"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "DeFi (Decentralized Finance) refers to financial services and applications built on blockchain networks that operate without traditional intermediaries like banks.",
                  "es": "DeFi (Finanzas Descentralizadas) se refiere a servicios y aplicaciones financieras construidas en redes blockchain que operan sin intermediarios tradicionales como bancos.",
                  "de": "DeFi (Dezentrale Finanzen) bezieht sich auf Finanzdienstleistungen und Anwendungen, die auf Blockchain-Netzwerken aufgebaut sind und ohne traditionelle Zwischenhändler wie Banken operieren.",
                  "nl": "DeFi (Gedecentraliseerde Financiën) verwijst naar financiële diensten en applicaties gebouwd op blockchain netwerken die opereren zonder traditionele tussenpersonen zoals banken."
        }
      },
      {
        question: {
                  "en": "What is a stablecoin?",
                  "es": "¿Qué es una stablecoin?",
                  "de": "Was ist ein Stablecoin?",
                  "nl": "Wat is een stablecoin?"
        },
        options: [
        {
                  "en": "A cryptocurrency with stable internet connection",
                  "es": "Una criptomoneda con conexión a internet estable",
                  "de": "Eine Kryptowährung mit stabiler Internetverbindung",
                  "nl": "Een cryptocurrency met stabiele internetverbinding"
        },
        {
                  "en": "A cryptocurrency designed to maintain stable value",
                  "es": "Una criptomoneda diseñada para mantener valor estable",
                  "de": "Eine Kryptowährung, die darauf ausgelegt ist, einen stabilen Wert zu erhalten",
                  "nl": "Een cryptocurrency ontworpen om stabiele waarde te behouden"
        },
        {
                  "en": "A cryptocurrency used only by governments",
                  "es": "Una criptomoneda usada solo por gobiernos",
                  "de": "Eine Kryptowährung, die nur von Regierungen verwendet wird",
                  "nl": "Een cryptocurrency die alleen door overheden wordt gebruikt"
        },
        {
                  "en": "A cryptocurrency that cannot be traded",
                  "es": "Una criptomoneda que no se puede comerciar",
                  "de": "Eine Kryptowährung, die nicht gehandelt werden kann",
                  "nl": "Een cryptocurrency die niet kan worden verhandeld"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "A stablecoin is a type of cryptocurrency designed to maintain a stable value relative to a reference asset, such as the US dollar or gold.",
                  "es": "Una stablecoin es un tipo de criptomoneda diseñada para mantener un valor estable relativo a un activo de referencia, como el dólar estadounidense u oro.",
                  "de": "Ein Stablecoin ist eine Art Kryptowährung, die darauf ausgelegt ist, einen stabilen Wert relativ zu einem Referenzvermögen wie dem US-Dollar oder Gold zu erhalten.",
                  "nl": "Een stablecoin is een type cryptocurrency ontworpen om een stabiele waarde te behouden ten opzichte van een referentie-actief, zoals de Amerikaanse dollar of goud."
        }
      },
      {
        question: {
                  "en": "What is an NFT (Non-Fungible Token)?",
                  "es": "¿Qué es un NFT (Token No Fungible)?",
                  "de": "Was ist ein NFT (Non-Fungible Token)?",
                  "nl": "Wat is een NFT (Non-Fungible Token)?"
        },
        options: [
        {
                  "en": "A new form of digital wallet",
                  "es": "Una nueva forma de billetera digital",
                  "de": "Eine neue Form digitaler Geldbörse",
                  "nl": "Een nieuwe vorm van digitale portemonnee"
        },
        {
                  "en": "A unique digital asset that cannot be replicated",
                  "es": "Un activo digital único que no puede ser replicado",
                  "de": "Ein einzigartiges digitales Asset, das nicht repliziert werden kann",
                  "nl": "Een uniek digitaal asset dat niet kan worden gerepliceerd"
        },
        {
                  "en": "A type of cryptocurrency mining",
                  "es": "Un tipo de minería de criptomonedas",
                  "de": "Eine Art Kryptowährungs-Mining",
                  "nl": "Een type cryptocurrency mining"
        },
        {
                  "en": "A cryptocurrency exchange platform",
                  "es": "Una plataforma de intercambio de criptomonedas",
                  "de": "Eine Kryptowährungsbörsenplattform",
                  "nl": "Een cryptocurrency exchange platform"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "An NFT (Non-Fungible Token) is a unique digital certificate stored on a blockchain that proves ownership of a specific digital asset, making it non-interchangeable.",
                  "es": "Un NFT (Token No Fungible) es un certificado digital único almacenado en una blockchain que prueba la propiedad de un activo digital específico, haciéndolo no intercambiable.",
                  "de": "Ein NFT (Non-Fungible Token) ist ein einzigartiges digitales Zertifikat, das auf einer Blockchain gespeichert ist und das Eigentum an einem spezifischen digitalen Asset beweist, wodurch es nicht austauschbar wird.",
                  "nl": "Een NFT (Non-Fungible Token) is een uniek digitaal certificaat opgeslagen op een blockchain dat eigendom van een specifiek digitaal asset bewijst, waardoor het niet uitwisselbaar is."
        }
      },
      {
        question: {
                  "en": "What is the purpose of cryptocurrency consensus mechanisms?",
                  "es": "¿Cuál es el propósito de los mecanismos de consenso de criptomonedas?",
                  "de": "Was ist der Zweck von Kryptowährungs-Konsensmechanismen?",
                  "nl": "Wat is het doel van cryptocurrency consensus mechanismen?"
        },
        options: [
        {
                  "en": "To create new types of cryptocurrencies",
                  "es": "Crear nuevos tipos de criptomonedas",
                  "de": "Neue Arten von Kryptowährungen zu schaffen",
                  "nl": "Om nieuwe soorten cryptocurrencies te creëren"
        },
        {
                  "en": "To make all users agree on political issues",
                  "es": "Hacer que todos los usuarios estén de acuerdo en temas políticos",
                  "de": "Alle Benutzer bei politischen Themen zum Einverständnis zu bringen",
                  "nl": "Om alle gebruikers het eens te laten zijn over politieke kwesties"
        },
        {
                  "en": "To determine cryptocurrency prices",
                  "es": "Determinar los precios de las criptomonedas",
                  "de": "Kryptowährungspreise zu bestimmen",
                  "nl": "Om cryptocurrency prijzen te bepalen"
        },
        {
                  "en": "To validate transactions and maintain network security",
                  "es": "Validar transacciones y mantener la seguridad de la red",
                  "de": "Transaktionen zu validieren und die Netzwerksicherheit zu gewährleisten",
                  "nl": "Om transacties te valideren en netwerkbeveiliging te handhaven"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Consensus mechanisms ensure all network participants agree on the validity of transactions and the current state of the blockchain, maintaining security and preventing fraud.",
                  "es": "Los mecanismos de consenso aseguran que todos los participantes de la red estén de acuerdo sobre la validez de las transacciones y el estado actual de la blockchain, manteniendo la seguridad y previniendo el fraude.",
                  "de": "Konsensmechanismen stellen sicher, dass alle Netzwerkteilnehmer über die Gültigkeit von Transaktionen und den aktuellen Zustand der Blockchain übereinstimmen, wodurch Sicherheit gewährleistet und Betrug verhindert wird.",
                  "nl": "Consensus mechanismen zorgen ervoor dat alle netwerkdeelnemers het eens zijn over de geldigheid van transacties en de huidige staat van de blockchain, waardoor beveiliging wordt gehandhaafd en fraude wordt voorkomen."
        }
      },
      {
        question: {
                  "en": "What does 'FOMO' mean in cryptocurrency trading?",
                  "es": "¿Qué significa 'FOMO' en el trading de criptomonedas?",
                  "de": "Was bedeutet 'FOMO' beim Kryptowährungshandel?",
                  "nl": "Wat betekent 'FOMO' in cryptocurrency trading?"
        },
        options: [
        {
                  "en": "Fear Of Missing Out - anxiety about missing profitable opportunities",
                  "es": "Fear Of Missing Out - ansiedad por perder oportunidades rentables",
                  "de": "Fear Of Missing Out - Angst, profitable Gelegenheiten zu verpassen",
                  "nl": "Fear Of Missing Out - angst om winstgevende kansen te missen"
        },
        {
                  "en": "Find Optimal Market Options",
                  "es": "Encontrar Opciones de Mercado Óptimas",
                  "de": "Optimale Marktoptionen finden",
                  "nl": "Vind Optimale Markt Opties"
        },
        {
                  "en": "Fast Order Management Operation",
                  "es": "Operación de Gestión de Órdenes Rápida",
                  "de": "Schnelle Auftragsverwaltungsoperation",
                  "nl": "Snelle Order Management Operatie"
        },
        {
                  "en": "Final Outcome Market Opportunity",
                  "es": "Oportunidad de Mercado de Resultado Final",
                  "de": "Endgültige Marktgelegenheit",
                  "nl": "Finale Uitkomst Markt Gelegenheid"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "FOMO (Fear Of Missing Out) in crypto trading refers to the anxiety-driven impulse to buy when prices are rising rapidly, often leading to poor investment decisions.",
                  "es": "FOMO (Fear Of Missing Out) en el trading de criptomonedas se refiere al impulso impulsado por la ansiedad de comprar cuando los precios están subiendo rápidamente, a menudo llevando a malas decisiones de inversión.",
                  "de": "FOMO (Fear Of Missing Out) beim Krypto-Trading bezieht sich auf den angstgetriebenen Impuls zu kaufen, wenn die Preise schnell steigen, was oft zu schlechten Investitionsentscheidungen führt.",
                  "nl": "FOMO (Fear Of Missing Out) in crypto trading verwijst naar de angstgedreven impuls om te kopen wanneer prijzen snel stijgen, wat vaak leidt tot slechte investeringsbeslissingen."
        }
      },
      {
        question: {
                  "en": "What is cryptocurrency market manipulation?",
                  "es": "¿Qué es la manipulación del mercado de criptomonedas?",
                  "de": "Was ist Kryptowährungsmarktmanipulation?",
                  "nl": "Wat is cryptocurrency marktmanipulatie?"
        },
        options: [
        {
                  "en": "Artificial price movements through coordinated buying/selling",
                  "es": "Movimientos artificiales de precios a través de compra/venta coordinada",
                  "de": "Künstliche Preisbewegungen durch koordiniertes Kaufen/Verkaufen",
                  "nl": "Kunstmatige prijsbewegingen door gecoördineerd kopen/verkopen"
        },
        {
                  "en": "Government regulation of cryptocurrency prices",
                  "es": "Regulación gubernamental de precios de criptomonedas",
                  "de": "Regierungsregulierung von Kryptowährungspreisen",
                  "nl": "Overheidsregulering van cryptocurrency prijzen"
        },
        {
                  "en": "Legal trading strategies to maximize profits",
                  "es": "Estrategias de trading legales para maximizar ganancias",
                  "de": "Legale Handelsstrategien zur Gewinnmaximierung",
                  "nl": "Legale handelsstrategieën om winst te maximaliseren"
        },
        {
                  "en": "Technical analysis of price charts",
                  "es": "Análisis técnico de gráficos de precios",
                  "de": "Technische Analyse von Preisdiagrammen",
                  "nl": "Technische analyse van prijsgrafieken"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Market manipulation involves artificial price movements created through coordinated efforts like pump-and-dump schemes, wash trading, or spreading false information.",
                  "es": "La manipulación del mercado involucra movimientos artificiales de precios creados a través de esfuerzos coordinados como esquemas de pump-and-dump, wash trading, o difundir información falsa.",
                  "de": "Marktmanipulation beinhaltet künstliche Preisbewegungen, die durch koordinierte Bemühungen wie Pump-and-Dump-Schemata, Wash Trading oder das Verbreiten falscher Informationen entstehen.",
                  "nl": "Marktmanipulatie behelst kunstmatige prijsbewegingen die ontstaan door gecoördineerde inspanningen zoals pump-and-dump schemas, wash trading, of het verspreiden van valse informatie."
        }
      },
      {
        question: {
                  "en": "What is a cryptocurrency whitepaper?",
                  "es": "¿Qué es un whitepaper de criptomonedas?",
                  "de": "Was ist ein Kryptowährungs-Whitepaper?",
                  "nl": "Wat is een cryptocurrency whitepaper?"
        },
        options: [
        {
                  "en": "A technical document describing a cryptocurrency project",
                  "es": "Un documento técnico que describe un proyecto de criptomoneda",
                  "de": "Ein technisches Dokument, das ein Kryptowährungsprojekt beschreibt",
                  "nl": "Een technisch document dat een cryptocurrency project beschrijft"
        },
        {
                  "en": "A price prediction chart",
                  "es": "Un gráfico de predicción de precios",
                  "de": "Ein Preisvorhersagediagramm",
                  "nl": "Een prijsvoorspellingsgrafiek"
        },
        {
                  "en": "A trading license",
                  "es": "Una licencia de trading",
                  "de": "Eine Handelslizenz",
                  "nl": "Een handelslicentie"
        },
        {
                  "en": "A government regulation document",
                  "es": "Un documento de regulación gubernamental",
                  "de": "Ein Regierungsdokument",
                  "nl": "Een overheidsregulatiedocument"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "A whitepaper is a technical document that describes the concept, technology, and implementation details of a cryptocurrency project. Bitcoin's whitepaper, published by Satoshi Nakamoto in 2008, started it all.",
                  "es": "Un whitepaper es un documento técnico que describe el concepto, tecnología y detalles de implementación de un proyecto de criptomoneda. El whitepaper de Bitcoin, publicado por Satoshi Nakamoto en 2008, lo comenzó todo.",
                  "de": "Ein Whitepaper ist ein technisches Dokument, das das Konzept, die Technologie und Implementierungsdetails eines Kryptowährungsprojekts beschreibt. Bitcoins Whitepaper, 2008 von Satoshi Nakamoto veröffentlicht, begann alles.",
                  "nl": "Een whitepaper is een technisch document dat het concept, de technologie en implementatiedetails van een cryptocurrency project beschrijft. Bitcoin's whitepaper, gepubliceerd door Satoshi Nakamoto in 2008, begon het allemaal."
        }
      },
      {
        question: {
                  "en": "Who created Bitcoin?",
                  "es": "Who created Bitcoin?",
                  "de": "Who created Bitcoin?",
                  "nl": "Who created Bitcoin?"
        },
        options: [
        {
                  "en": "Gavin Andresen",
                  "es": "Gavin Andresen",
                  "de": "Gavin Andresen",
                  "nl": "Gavin Andresen"
        },
        {
                  "en": "Vitalik Buterin",
                  "es": "Vitalik Buterin",
                  "de": "Vitalik Buterin",
                  "nl": "Vitalik Buterin"
        },
        {
                  "en": "Charlie Lee",
                  "es": "Charlie Lee",
                  "de": "Charlie Lee",
                  "nl": "Charlie Lee"
        },
        {
                  "en": "Satoshi Nakamoto",
                  "es": "Satoshi Nakamoto",
                  "de": "Satoshi Nakamoto",
                  "nl": "Satoshi Nakamoto"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Satoshi Nakamoto is the pseudonymous creator of Bitcoin, first released in 2009.",
                  "es": "Satoshi Nakamoto is the pseudonymous creator of Bitcoin, first released in 2009.",
                  "de": "Satoshi Nakamoto is the pseudonymous creator of Bitcoin, first released in 2009.",
                  "nl": "Satoshi Nakamoto is the pseudonymous creator of Bitcoin, first released in 2009."
        }
      },
      {
        question: {
                  "en": "What is Ethereum's native cryptocurrency?",
                  "es": "What is Ethereum's native cryptocurrency?",
                  "de": "What is Ethereum's native cryptocurrency?",
                  "nl": "What is Ethereum's native cryptocurrency?"
        },
        options: [
        {
                  "en": "Ether (ETH)",
                  "es": "Ether (ETH)",
                  "de": "Ether (ETH)",
                  "nl": "Ether (ETH)"
        },
        {
                  "en": "Ripple (XRP)",
                  "es": "Ripple (XRP)",
                  "de": "Ripple (XRP)",
                  "nl": "Ripple (XRP)"
        },
        {
                  "en": "Bitcoin (BTC)",
                  "es": "Bitcoin (BTC)",
                  "de": "Bitcoin (BTC)",
                  "nl": "Bitcoin (BTC)"
        },
        {
                  "en": "Litecoin (LTC)",
                  "es": "Litecoin (LTC)",
                  "de": "Litecoin (LTC)",
                  "nl": "Litecoin (LTC)"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Ether (ETH) is the native cryptocurrency of the Ethereum blockchain launched in 2015.",
                  "es": "Ether (ETH) is the native cryptocurrency of the Ethereum blockchain launched in 2015.",
                  "de": "Ether (ETH) is the native cryptocurrency of the Ethereum blockchain launched in 2015.",
                  "nl": "Ether (ETH) is the native cryptocurrency of the Ethereum blockchain launched in 2015."
        }
      },
      {
        question: {
                  "en": "What consensus mechanism does Bitcoin use?",
                  "es": "What consensus mechanism does Bitcoin use?",
                  "de": "What consensus mechanism does Bitcoin use?",
                  "nl": "What consensus mechanism does Bitcoin use?"
        },
        options: [
        {
                  "en": "Proof of Authority",
                  "es": "Proof of Authority",
                  "de": "Proof of Authority",
                  "nl": "Proof of Authority"
        },
        {
                  "en": "Proof of Work",
                  "es": "Proof of Work",
                  "de": "Proof of Work",
                  "nl": "Proof of Work"
        },
        {
                  "en": "Proof of Stake",
                  "es": "Proof of Stake",
                  "de": "Proof of Stake",
                  "nl": "Proof of Stake"
        },
        {
                  "en": "Delegated Proof of Stake",
                  "es": "Delegated Proof of Stake",
                  "de": "Delegated Proof of Stake",
                  "nl": "Delegated Proof of Stake"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Bitcoin uses Proof of Work consensus requiring miners to solve cryptographic puzzles.",
                  "es": "Bitcoin uses Proof of Work consensus requiring miners to solve cryptographic puzzles.",
                  "de": "Bitcoin uses Proof of Work consensus requiring miners to solve cryptographic puzzles.",
                  "nl": "Bitcoin uses Proof of Work consensus requiring miners to solve cryptographic puzzles."
        }
      },
      {
        question: {
                  "en": "What is a blockchain?",
                  "es": "What is a blockchain?",
                  "de": "What is a blockchain?",
                  "nl": "What is a blockchain?"
        },
        options: [
        {
                  "en": "Payment processor",
                  "es": "Payment processor",
                  "de": "Payment processor",
                  "nl": "Payment processor"
        },
        {
                  "en": "Distributed ledger of transactions",
                  "es": "Distributed ledger of transactions",
                  "de": "Distributed ledger of transactions",
                  "nl": "Distributed ledger of transactions"
        },
        {
                  "en": "Cloud storage",
                  "es": "Cloud storage",
                  "de": "Cloud storage",
                  "nl": "Cloud storage"
        },
        {
                  "en": "Centralized database",
                  "es": "Centralized database",
                  "de": "Centralized database",
                  "nl": "Centralized database"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "A blockchain is a distributed ledger that records transactions across multiple computers.",
                  "es": "A blockchain is a distributed ledger that records transactions across multiple computers.",
                  "de": "A blockchain is a distributed ledger that records transactions across multiple computers.",
                  "nl": "A blockchain is a distributed ledger that records transactions across multiple computers."
        }
      },
      {
        question: {
                  "en": "What is cryptocurrency mining?",
                  "es": "What is cryptocurrency mining?",
                  "de": "What is cryptocurrency mining?",
                  "nl": "What is cryptocurrency mining?"
        },
        options: [
        {
                  "en": "Buying coins on exchanges",
                  "es": "Buying coins on exchanges",
                  "de": "Buying coins on exchanges",
                  "nl": "Buying coins on exchanges"
        },
        {
                  "en": "Trading coins for profit",
                  "es": "Trading coins for profit",
                  "de": "Trading coins for profit",
                  "nl": "Trading coins for profit"
        },
        {
                  "en": "Validating transactions and creating new coins",
                  "es": "Validating transactions and creating new coins",
                  "de": "Validating transactions and creating new coins",
                  "nl": "Validating transactions and creating new coins"
        },
        {
                  "en": "Storing coins in wallets",
                  "es": "Storing coins in wallets",
                  "de": "Storing coins in wallets",
                  "nl": "Storing coins in wallets"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Cryptocurrency mining involves validating transactions and being rewarded with new coins.",
                  "es": "Cryptocurrency mining involves validating transactions and being rewarded with new coins.",
                  "de": "Cryptocurrency mining involves validating transactions and being rewarded with new coins.",
                  "nl": "Cryptocurrency mining involves validating transactions and being rewarded with new coins."
        }
      },
      {
        question: {
                  "en": "What is a cryptocurrency wallet?",
                  "es": "What is a cryptocurrency wallet?",
                  "de": "What is a cryptocurrency wallet?",
                  "nl": "What is a cryptocurrency wallet?"
        },
        options: [
        {
                  "en": "Software storing private keys",
                  "es": "Software storing private keys",
                  "de": "Software storing private keys",
                  "nl": "Software storing private keys"
        },
        {
                  "en": "Trading platform",
                  "es": "Trading platform",
                  "de": "Trading platform",
                  "nl": "Trading platform"
        },
        {
                  "en": "Physical coin storage",
                  "es": "Physical coin storage",
                  "de": "Physical coin storage",
                  "nl": "Physical coin storage"
        },
        {
                  "en": "Bank account",
                  "es": "Bank account",
                  "de": "Bank account",
                  "nl": "Bank account"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "A cryptocurrency wallet is software that stores the private keys needed to access your coins.",
                  "es": "A cryptocurrency wallet is software that stores the private keys needed to access your coins.",
                  "de": "A cryptocurrency wallet is software that stores the private keys needed to access your coins.",
                  "nl": "A cryptocurrency wallet is software that stores the private keys needed to access your coins."
        }
      },
      {
        question: {
                  "en": "What is an altcoin?",
                  "es": "What is an altcoin?",
                  "de": "What is an altcoin?",
                  "nl": "What is an altcoin?"
        },
        options: [
        {
                  "en": "Government currencies",
                  "es": "Government currencies",
                  "de": "Government currencies",
                  "nl": "Government currencies"
        },
        {
                  "en": "Physical coins",
                  "es": "Physical coins",
                  "de": "Physical coins",
                  "nl": "Physical coins"
        },
        {
                  "en": "Any cryptocurrency other than Bitcoin",
                  "es": "Any cryptocurrency other than Bitcoin",
                  "de": "Any cryptocurrency other than Bitcoin",
                  "nl": "Any cryptocurrency other than Bitcoin"
        },
        {
                  "en": "Only Bitcoin",
                  "es": "Only Bitcoin",
                  "de": "Only Bitcoin",
                  "nl": "Only Bitcoin"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "An altcoin is any cryptocurrency alternative to Bitcoin, such as Ethereum or Litecoin.",
                  "es": "An altcoin is any cryptocurrency alternative to Bitcoin, such as Ethereum or Litecoin.",
                  "de": "An altcoin is any cryptocurrency alternative to Bitcoin, such as Ethereum or Litecoin.",
                  "nl": "An altcoin is any cryptocurrency alternative to Bitcoin, such as Ethereum or Litecoin."
        }
      },
      {
        question: {
                  "en": "What is a cryptocurrency exchange?",
                  "es": "What is a cryptocurrency exchange?",
                  "de": "What is a cryptocurrency exchange?",
                  "nl": "What is a cryptocurrency exchange?"
        },
        options: [
        {
                  "en": "Blockchain network",
                  "es": "Blockchain network",
                  "de": "Blockchain network",
                  "nl": "Blockchain network"
        },
        {
                  "en": "Wallet provider",
                  "es": "Wallet provider",
                  "de": "Wallet provider",
                  "nl": "Wallet provider"
        },
        {
                  "en": "Mining operation",
                  "es": "Mining operation",
                  "de": "Mining operation",
                  "nl": "Mining operation"
        },
        {
                  "en": "Platform for buying and selling crypto",
                  "es": "Platform for buying and selling crypto",
                  "de": "Platform for buying and selling crypto",
                  "nl": "Platform for buying and selling crypto"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "A cryptocurrency exchange is a platform where users can buy, sell, and trade cryptocurrencies.",
                  "es": "A cryptocurrency exchange is a platform where users can buy, sell, and trade cryptocurrencies.",
                  "de": "A cryptocurrency exchange is a platform where users can buy, sell, and trade cryptocurrencies.",
                  "nl": "A cryptocurrency exchange is a platform where users can buy, sell, and trade cryptocurrencies."
        }
      },
      {
        question: {
                  "en": "What does ICO stand for?",
                  "es": "What does ICO stand for?",
                  "de": "What does ICO stand for?",
                  "nl": "What does ICO stand for?"
        },
        options: [
        {
                  "en": "Investment Coin Operation",
                  "es": "Investment Coin Operation",
                  "de": "Investment Coin Operation",
                  "nl": "Investment Coin Operation"
        },
        {
                  "en": "International Crypto Organization",
                  "es": "International Crypto Organization",
                  "de": "International Crypto Organization",
                  "nl": "International Crypto Organization"
        },
        {
                  "en": "Initial Coin Offering",
                  "es": "Initial Coin Offering",
                  "de": "Initial Coin Offering",
                  "nl": "Initial Coin Offering"
        },
        {
                  "en": "Internet Currency Option",
                  "es": "Internet Currency Option",
                  "de": "Internet Currency Option",
                  "nl": "Internet Currency Option"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "ICO stands for Initial Coin Offering, a fundraising method for new cryptocurrencies.",
                  "es": "ICO stands for Initial Coin Offering, a fundraising method for new cryptocurrencies.",
                  "de": "ICO stands for Initial Coin Offering, a fundraising method for new cryptocurrencies.",
                  "nl": "ICO stands for Initial Coin Offering, a fundraising method for new cryptocurrencies."
        }
      },
      {
        question: {
                  "en": "What is a private key?",
                  "es": "What is a private key?",
                  "de": "What is a private key?",
                  "nl": "What is a private key?"
        },
        options: [
        {
                  "en": "Exchange password",
                  "es": "Exchange password",
                  "de": "Exchange password",
                  "nl": "Exchange password"
        },
        {
                  "en": "Mining equipment",
                  "es": "Mining equipment",
                  "de": "Mining equipment",
                  "nl": "Mining equipment"
        },
        {
                  "en": "Public wallet address",
                  "es": "Public wallet address",
                  "de": "Public wallet address",
                  "nl": "Public wallet address"
        },
        {
                  "en": "Secret code accessing your cryptocurrency",
                  "es": "Secret code accessing your cryptocurrency",
                  "de": "Secret code accessing your cryptocurrency",
                  "nl": "Secret code accessing your cryptocurrency"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "A private key is a secret alphanumeric code that allows you to access and spend your cryptocurrency.",
                  "es": "A private key is a secret alphanumeric code that allows you to access and spend your cryptocurrency.",
                  "de": "A private key is a secret alphanumeric code that allows you to access and spend your cryptocurrency.",
                  "nl": "A private key is a secret alphanumeric code that allows you to access and spend your cryptocurrency."
        }
      },
      {
        question: {
                  "en": "What is market capitalization in crypto?",
                  "es": "What is market capitalization in crypto?",
                  "de": "What is market capitalization in crypto?",
                  "nl": "What is market capitalization in crypto?"
        },
        options: [
        {
                  "en": "Number of coins mined",
                  "es": "Number of coins mined",
                  "de": "Number of coins mined",
                  "nl": "Number of coins mined"
        },
        {
                  "en": "Daily trading volume",
                  "es": "Daily trading volume",
                  "de": "Daily trading volume",
                  "nl": "Daily trading volume"
        },
        {
                  "en": "Exchange listing price",
                  "es": "Exchange listing price",
                  "de": "Exchange listing price",
                  "nl": "Exchange listing price"
        },
        {
                  "en": "Total value of all coins in circulation",
                  "es": "Total value of all coins in circulation",
                  "de": "Total value of all coins in circulation",
                  "nl": "Total value of all coins in circulation"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Market cap is calculated by multiplying the current price by the total number of coins in circulation.",
                  "es": "Market cap is calculated by multiplying the current price by the total number of coins in circulation.",
                  "de": "Market cap is calculated by multiplying the current price by the total number of coins in circulation.",
                  "nl": "Market cap is calculated by multiplying the current price by the total number of coins in circulation."
        }
      },
      {
        question: {
                  "en": "What is a stablecoin?",
                  "es": "What is a stablecoin?",
                  "de": "What is a stablecoin?",
                  "nl": "What is a stablecoin?"
        },
        options: [
        {
                  "en": "Very old cryptocurrency",
                  "es": "Very old cryptocurrency",
                  "de": "Very old cryptocurrency",
                  "nl": "Very old cryptocurrency"
        },
        {
                  "en": "Most valuable coin",
                  "es": "Most valuable coin",
                  "de": "Most valuable coin",
                  "nl": "Most valuable coin"
        },
        {
                  "en": "Government-issued crypto",
                  "es": "Government-issued crypto",
                  "de": "Government-issued crypto",
                  "nl": "Government-issued crypto"
        },
        {
                  "en": "Cryptocurrency pegged to stable asset",
                  "es": "Cryptocurrency pegged to stable asset",
                  "de": "Cryptocurrency pegged to stable asset",
                  "nl": "Cryptocurrency pegged to stable asset"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "A stablecoin is cryptocurrency designed to maintain stable value by being pegged to assets like USD.",
                  "es": "A stablecoin is cryptocurrency designed to maintain stable value by being pegged to assets like USD.",
                  "de": "A stablecoin is cryptocurrency designed to maintain stable value by being pegged to assets like USD.",
                  "nl": "A stablecoin is cryptocurrency designed to maintain stable value by being pegged to assets like USD."
        }
      },
      {
        question: {
                  "en": "What is DeFi?",
                  "es": "What is DeFi?",
                  "de": "What is DeFi?",
                  "nl": "What is DeFi?"
        },
        options: [
        {
                  "en": "Direct Finance",
                  "es": "Direct Finance",
                  "de": "Direct Finance",
                  "nl": "Direct Finance"
        },
        {
                  "en": "Digital Finance",
                  "es": "Digital Finance",
                  "de": "Digital Finance",
                  "nl": "Digital Finance"
        },
        {
                  "en": "Decentralized Finance",
                  "es": "Decentralized Finance",
                  "de": "Decentralized Finance",
                  "nl": "Decentralized Finance"
        },
        {
                  "en": "Distributed Finance",
                  "es": "Distributed Finance",
                  "de": "Distributed Finance",
                  "nl": "Distributed Finance"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "DeFi (Decentralized Finance) refers to financial services built on blockchain without intermediaries.",
                  "es": "DeFi (Decentralized Finance) refers to financial services built on blockchain without intermediaries.",
                  "de": "DeFi (Decentralized Finance) refers to financial services built on blockchain without intermediaries.",
                  "nl": "DeFi (Decentralized Finance) refers to financial services built on blockchain without intermediaries."
        }
      },
      {
        question: {
                  "en": "What is a smart contract?",
                  "es": "What is a smart contract?",
                  "de": "What is a smart contract?",
                  "nl": "What is a smart contract?"
        },
        options: [
        {
                  "en": "Trading bot",
                  "es": "Trading bot",
                  "de": "Trading bot",
                  "nl": "Trading bot"
        },
        {
                  "en": "Paper contract",
                  "es": "Paper contract",
                  "de": "Paper contract",
                  "nl": "Paper contract"
        },
        {
                  "en": "Lawyer agreement",
                  "es": "Lawyer agreement",
                  "de": "Lawyer agreement",
                  "nl": "Lawyer agreement"
        },
        {
                  "en": "Self-executing contract on blockchain",
                  "es": "Self-executing contract on blockchain",
                  "de": "Self-executing contract on blockchain",
                  "nl": "Self-executing contract on blockchain"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "A smart contract is self-executing code on blockchain that automatically enforces agreement terms.",
                  "es": "A smart contract is self-executing code on blockchain that automatically enforces agreement terms.",
                  "de": "A smart contract is self-executing code on blockchain that automatically enforces agreement terms.",
                  "nl": "A smart contract is self-executing code on blockchain that automatically enforces agreement terms."
        }
      },
      {
        question: {
                  "en": "What is cryptocurrency halving?",
                  "es": "What is cryptocurrency halving?",
                  "de": "What is cryptocurrency halving?",
                  "nl": "What is cryptocurrency halving?"
        },
        options: [
        {
                  "en": "Reduction in mining rewards",
                  "es": "Reduction in mining rewards",
                  "de": "Reduction in mining rewards",
                  "nl": "Reduction in mining rewards"
        },
        {
                  "en": "Market crash",
                  "es": "Market crash",
                  "de": "Market crash",
                  "nl": "Market crash"
        },
        {
                  "en": "Exchange closure",
                  "es": "Exchange closure",
                  "de": "Exchange closure",
                  "nl": "Exchange closure"
        },
        {
                  "en": "Splitting coins in half",
                  "es": "Splitting coins in half",
                  "de": "Splitting coins in half",
                  "nl": "Splitting coins in half"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Halving is when mining rewards are cut in half, occurring approximately every four years for Bitcoin.",
                  "es": "Halving is when mining rewards are cut in half, occurring approximately every four years for Bitcoin.",
                  "de": "Halving is when mining rewards are cut in half, occurring approximately every four years for Bitcoin.",
                  "nl": "Halving is when mining rewards are cut in half, occurring approximately every four years for Bitcoin."
        }
      },
      {
        question: {
                  "en": "What does HODL mean?",
                  "es": "What does HODL mean?",
                  "de": "What does HODL mean?",
                  "nl": "What does HODL mean?"
        },
        options: [
        {
                  "en": "Mine cryptocurrency",
                  "es": "Mine cryptocurrency",
                  "de": "Mine cryptocurrency",
                  "nl": "Mine cryptocurrency"
        },
        {
                  "en": "Buy cryptocurrency",
                  "es": "Buy cryptocurrency",
                  "de": "Buy cryptocurrency",
                  "nl": "Buy cryptocurrency"
        },
        {
                  "en": "Sell cryptocurrency",
                  "es": "Sell cryptocurrency",
                  "de": "Sell cryptocurrency",
                  "nl": "Sell cryptocurrency"
        },
        {
                  "en": "Hold cryptocurrency long-term",
                  "es": "Hold cryptocurrency long-term",
                  "de": "Hold cryptocurrency long-term",
                  "nl": "Hold cryptocurrency long-term"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "HODL originated from a misspelled 'hold' and means holding cryptocurrency long-term despite volatility.",
                  "es": "HODL originated from a misspelled 'hold' and means holding cryptocurrency long-term despite volatility.",
                  "de": "HODL originated from a misspelled 'hold' and means holding cryptocurrency long-term despite volatility.",
                  "nl": "HODL originated from a misspelled 'hold' and means holding cryptocurrency long-term despite volatility."
        }
      },
      {
        question: {
                  "en": "What is a cryptocurrency fork?",
                  "es": "What is a cryptocurrency fork?",
                  "de": "What is a cryptocurrency fork?",
                  "nl": "What is a cryptocurrency fork?"
        },
        options: [
        {
                  "en": "Split creating new blockchain version",
                  "es": "Split creating new blockchain version",
                  "de": "Split creating new blockchain version",
                  "nl": "Split creating new blockchain version"
        },
        {
                  "en": "Wallet type",
                  "es": "Wallet type",
                  "de": "Wallet type",
                  "nl": "Wallet type"
        },
        {
                  "en": "Trading strategy",
                  "es": "Trading strategy",
                  "de": "Trading strategy",
                  "nl": "Trading strategy"
        },
        {
                  "en": "Mining tool",
                  "es": "Mining tool",
                  "de": "Mining tool",
                  "nl": "Mining tool"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "A fork occurs when a blockchain splits into two separate chains with different rules.",
                  "es": "A fork occurs when a blockchain splits into two separate chains with different rules.",
                  "de": "A fork occurs when a blockchain splits into two separate chains with different rules.",
                  "nl": "A fork occurs when a blockchain splits into two separate chains with different rules."
        }
      },
      {
        question: {
                  "en": "What is gas fee in Ethereum?",
                  "es": "What is gas fee in Ethereum?",
                  "de": "What is gas fee in Ethereum?",
                  "nl": "What is gas fee in Ethereum?"
        },
        options: [
        {
                  "en": "Wallet fee",
                  "es": "Wallet fee",
                  "de": "Wallet fee",
                  "nl": "Wallet fee"
        },
        {
                  "en": "Storage cost",
                  "es": "Storage cost",
                  "de": "Storage cost",
                  "nl": "Storage cost"
        },
        {
                  "en": "Mining reward",
                  "es": "Mining reward",
                  "de": "Mining reward",
                  "nl": "Mining reward"
        },
        {
                  "en": "Transaction processing cost",
                  "es": "Transaction processing cost",
                  "de": "Transaction processing cost",
                  "nl": "Transaction processing cost"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Gas fees are payments made to compensate for computing energy required to process Ethereum transactions.",
                  "es": "Gas fees are payments made to compensate for computing energy required to process Ethereum transactions.",
                  "de": "Gas fees are payments made to compensate for computing energy required to process Ethereum transactions.",
                  "nl": "Gas fees are payments made to compensate for computing energy required to process Ethereum transactions."
        }
      },
      {
        question: {
                  "en": "What is an NFT?",
                  "es": "What is an NFT?",
                  "de": "What is an NFT?",
                  "nl": "What is an NFT?"
        },
        options: [
        {
                  "en": "Network Function Token",
                  "es": "Network Function Token",
                  "de": "Network Function Token",
                  "nl": "Network Function Token"
        },
        {
                  "en": "National Fund Token",
                  "es": "National Fund Token",
                  "de": "National Fund Token",
                  "nl": "National Fund Token"
        },
        {
                  "en": "New Finance Token",
                  "es": "New Finance Token",
                  "de": "New Finance Token",
                  "nl": "New Finance Token"
        },
        {
                  "en": "Non-Fungible Token",
                  "es": "Non-Fungible Token",
                  "de": "Non-Fungible Token",
                  "nl": "Non-Fungible Token"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "NFT (Non-Fungible Token) represents unique digital assets on blockchain, unlike fungible cryptocurrencies.",
                  "es": "NFT (Non-Fungible Token) represents unique digital assets on blockchain, unlike fungible cryptocurrencies.",
                  "de": "NFT (Non-Fungible Token) represents unique digital assets on blockchain, unlike fungible cryptocurrencies.",
                  "nl": "NFT (Non-Fungible Token) represents unique digital assets on blockchain, unlike fungible cryptocurrencies."
        }
      },
      {
        question: {
                  "en": "What is cryptocurrency volatility?",
                  "es": "What is cryptocurrency volatility?",
                  "de": "What is cryptocurrency volatility?",
                  "nl": "What is cryptocurrency volatility?"
        },
        options: [
        {
                  "en": "Transaction speed",
                  "es": "Transaction speed",
                  "de": "Transaction speed",
                  "nl": "Transaction speed"
        },
        {
                  "en": "Price fluctuation intensity",
                  "es": "Price fluctuation intensity",
                  "de": "Price fluctuation intensity",
                  "nl": "Price fluctuation intensity"
        },
        {
                  "en": "Mining difficulty",
                  "es": "Mining difficulty",
                  "de": "Mining difficulty",
                  "nl": "Mining difficulty"
        },
        {
                  "en": "Market size",
                  "es": "Market size",
                  "de": "Market size",
                  "nl": "Market size"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Volatility measures how much and how quickly cryptocurrency prices change over time.",
                  "es": "Volatility measures how much and how quickly cryptocurrency prices change over time.",
                  "de": "Volatility measures how much and how quickly cryptocurrency prices change over time.",
                  "nl": "Volatility measures how much and how quickly cryptocurrency prices change over time."
        }
      }
    ]
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level2;
  }
})();