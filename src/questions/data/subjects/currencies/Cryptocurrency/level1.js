// Quiz Level 1: Currencies - Cryptocurrency
(function() {
  const level1 = {
    name: {
      en: "Cryptocurrency - Beginner",
      es: "Criptomoneda - Principiante",
      de: "Kryptowährung - Anfänger",
      nl: "Cryptocurrency - Beginner"
    },
    questions: [
      {
        question: {
          en: "What was the first cryptocurrency ever created?",
          es: "¿Cuál fue la primera criptomoneda creada?",
          de: "Was war die erste jemals geschaffene Kryptowährung?",
          nl: "Wat was de eerste cryptocurrency die ooit werd gecreëerd?"
        },
        options: [
          { en: "Bitcoin", es: "Bitcoin", de: "Bitcoin", nl: "Bitcoin" },
          { en: "Ethereum", es: "Ethereum", de: "Ethereum", nl: "Ethereum" },
          { en: "Litecoin", es: "Litecoin", de: "Litecoin", nl: "Litecoin" },
          { en: "Ripple", es: "Ripple", de: "Ripple", nl: "Ripple" }
        ],
        correct: 0,
        explanation: {
          en: "Bitcoin was the first cryptocurrency, created by the pseudonymous Satoshi Nakamoto in 2009. It introduced the concept of decentralized digital currency using blockchain technology.",
          es: "Bitcoin fue la primera criptomoneda, creada por el seudónimo Satoshi Nakamoto en 2009. Introdujo el concepto de moneda digital descentralizada utilizando tecnología blockchain.",
          de: "Bitcoin war die erste Kryptowährung, erstellt von dem pseudonymen Satoshi Nakamoto im Jahr 2009. Es führte das Konzept dezentraler digitaler Währung mit Blockchain-Technologie ein.",
          nl: "Bitcoin was de eerste cryptocurrency, gecreëerd door de pseudonieme Satoshi Nakamoto in 2009. Het introduceerde het concept van gedecentraliseerde digitale valuta met blockchain-technologie."
        }
      },
      {
        question: {
          en: "What technology underlies most cryptocurrencies?",
          es: "¿Qué tecnología subyace a la mayoría de las criptomonedas?",
          de: "Welche Technologie liegt den meisten Kryptowährungen zugrunde?",
          nl: "Welke technologie ligt ten grondslag aan de meeste cryptocurrencies?"
        },
        options: [
          { en: "Cloud computing", es: "Computación en la nube", de: "Cloud Computing", nl: "Cloud computing" },
          { en: "Blockchain", es: "Blockchain", de: "Blockchain", nl: "Blockchain" },
          { en: "Artificial intelligence", es: "Inteligencia artificial", de: "Künstliche Intelligenz", nl: "Kunstmatige intelligentie" },
          { en: "Quantum computing", es: "Computación cuántica", de: "Quantencomputing", nl: "Quantum computing" }
        ],
        correct: 1,
        explanation: {
          en: "Blockchain is the distributed ledger technology that underlies most cryptocurrencies. It creates a secure, transparent, and decentralized record of all transactions.",
          es: "Blockchain es la tecnología de libro mayor distribuido que subyace a la mayoría de las criptomonedas. Crea un registro seguro, transparente y descentralizado de todas las transacciones.",
          de: "Blockchain ist die verteilte Ledger-Technologie, die den meisten Kryptowährungen zugrunde liegt. Sie schafft ein sicheres, transparentes und dezentrales Verzeichnis aller Transaktionen.",
          nl: "Blockchain is de gedistribueerde grootboektechnologie die ten grondslag ligt aan de meeste cryptocurrencies. Het creëert een veilige, transparante en gedecentraliseerde record van alle transacties."
        }
      },
      {
        question: {
          en: "Who is the mysterious creator of Bitcoin?",
          es: "¿Quién es el misterioso creador de Bitcoin?",
          de: "Wer ist der geheimnisvolle Schöpfer von Bitcoin?",
          nl: "Wie is de mysterieuze bedenker van Bitcoin?"
        },
        options: [
          { en: "Vitalik Buterin", es: "Vitalik Buterin", de: "Vitalik Buterin", nl: "Vitalik Buterin" },
          { en: "Satoshi Nakamoto", es: "Satoshi Nakamoto", de: "Satoshi Nakamoto", nl: "Satoshi Nakamoto" },
          { en: "Charlie Lee", es: "Charlie Lee", de: "Charlie Lee", nl: "Charlie Lee" },
          { en: "Elon Musk", es: "Elon Musk", de: "Elon Musk", nl: "Elon Musk" }
        ],
        correct: 1,
        explanation: {
          en: "Satoshi Nakamoto is the pseudonym used by the unknown person or group who created Bitcoin. Their true identity remains one of the biggest mysteries in the cryptocurrency world.",
          es: "Satoshi Nakamoto es el seudónimo utilizado por la persona o grupo desconocido que creó Bitcoin. Su verdadera identidad sigue siendo uno de los mayores misterios en el mundo de las criptomonedas.",
          de: "Satoshi Nakamoto ist das Pseudonym der unbekannten Person oder Gruppe, die Bitcoin erschaffen hat. Ihre wahre Identität bleibt eines der größten Geheimnisse in der Kryptowährungswelt.",
          nl: "Satoshi Nakamoto is het pseudoniem gebruikt door de onbekende persoon of groep die Bitcoin creëerde. Hun ware identiteit blijft een van de grootste mysteries in de cryptocurrency wereld."
        }
      },
      {
        question: {
          en: "What is the maximum number of Bitcoin that will ever exist?",
          es: "¿Cuál es el número máximo de Bitcoin que existirá?",
          de: "Wie viele Bitcoin wird es maximal geben?",
          nl: "Wat is het maximale aantal Bitcoin dat ooit zal bestaan?"
        },
        options: [
          { en: "18 million", es: "18 millones", de: "18 Millionen", nl: "18 miljoen" },
          { en: "21 million", es: "21 millones", de: "21 Millionen", nl: "21 miljoen" },
          { en: "25 million", es: "25 millones", de: "25 Millionen", nl: "25 miljoen" },
          { en: "Unlimited", es: "Ilimitado", de: "Unbegrenzt", nl: "Onbeperkt" }
        ],
        correct: 1,
        explanation: {
          en: "Bitcoin has a hard cap of 21 million coins. This scarcity is built into the protocol and is one of the factors that gives Bitcoin its value proposition as 'digital gold.'",
          es: "Bitcoin tiene un límite máximo de 21 millones de monedas. Esta escasez está integrada en el protocolo y es uno de los factores que le da a Bitcoin su propuesta de valor como 'oro digital'.",
          de: "Bitcoin hat eine harte Obergrenze von 21 Millionen Münzen. Diese Knappheit ist in das Protokoll eingebaut und ist einer der Faktoren, die Bitcoin seinen Wertvorschlag als 'digitales Gold' verleihen.",
          nl: "Bitcoin heeft een harde limiet van 21 miljoen munten. Deze schaarste is ingebouwd in het protocol en is een van de factoren die Bitcoin zijn waardepropositie als 'digitaal goud' geeft."
        }
      },
      {
        question: {
          en: "What is mining in cryptocurrency?",
          es: "¿Qué es la minería en criptomonedas?",
          de: "Was ist Mining bei Kryptowährungen?",
          nl: "Wat is mining in cryptocurrency?"
        },
        options: [
          { en: "Extracting coins from the earth", es: "Extraer monedas de la tierra", de: "Münzen aus der Erde extrahieren", nl: "Munten uit de aarde halen" },
          { en: "Validating transactions and creating new blocks", es: "Validar transacciones y crear nuevos bloques", de: "Transaktionen validieren und neue Blöcke erstellen", nl: "Transacties valideren en nieuwe blokken creëren" },
          { en: "Stealing cryptocurrency", es: "Robar criptomonedas", de: "Kryptowährung stehlen", nl: "Cryptocurrency stelen" },
          { en: "Converting crypto to cash", es: "Convertir cripto a efectivo", de: "Krypto in Bargeld umwandeln", nl: "Crypto omzetten naar contant geld" }
        ],
        correct: 1,
        explanation: {
          en: "Mining is the process of validating transactions and adding them to the blockchain. Miners use computational power to solve complex mathematical problems and are rewarded with new cryptocurrency.",
          es: "La minería es el proceso de validar transacciones y agregarlas a la blockchain. Los mineros usan poder computacional para resolver problemas matemáticos complejos y son recompensados con nueva criptomoneda.",
          de: "Mining ist der Prozess der Validierung von Transaktionen und deren Hinzufügung zur Blockchain. Miner verwenden Rechenleistung, um komplexe mathematische Probleme zu lösen und werden mit neuer Kryptowährung belohnt.",
          nl: "Mining is het proces van het valideren van transacties en deze toevoegen aan de blockchain. Miners gebruiken rekenkracht om complexe wiskundige problemen op te lossen en worden beloond met nieuwe cryptocurrency."
        }
      },
      {
        question: {
          en: "What does 'HODL' mean in cryptocurrency culture?",
          es: "¿Qué significa 'HODL' en la cultura de criptomonedas?",
          de: "Was bedeutet 'HODL' in der Kryptowährungskultur?",
          nl: "Wat betekent 'HODL' in de cryptocurrency cultuur?"
        },
        options: [
          { en: "Hold On for Dear Life", es: "Aguantar Por la Vida", de: "Halte Fest um Dein Leben", nl: "Vasthouden Voor Je Leven" },
          { en: "A misspelling of 'hold'", es: "Una falta de ortografía de 'hold'", de: "Ein Schreibfehler von 'hold'", nl: "Een spelfout van 'hold'" },
          { en: "High Order Digital Logic", es: "Lógica Digital de Alto Orden", de: "Hochrangige Digitale Logik", nl: "Hoge Orde Digitale Logica" },
          { en: "Both A and B", es: "Tanto A como B", de: "Sowohl A als auch B", nl: "Zowel A als B" }
        ],
        correct: 3,
        explanation: {
          en: "HODL originated from a misspelling of 'hold' in a 2013 Bitcoin forum post, but has since been backronymized to 'Hold On for Dear Life.' It means to keep cryptocurrency despite market volatility.",
          es: "HODL se originó por una falta de ortografía de 'hold' en una publicación del foro de Bitcoin de 2013, pero desde entonces se ha retroformado como 'Hold On for Dear Life'. Significa mantener criptomonedas a pesar de la volatilidad del mercado.",
          de: "HODL entstand aus einem Schreibfehler von 'hold' in einem Bitcoin-Forum-Post von 2013, wurde aber seitdem zu 'Hold On for Dear Life' rückgebildet. Es bedeutet, Kryptowährung trotz Marktvolatilität zu behalten.",
          nl: "HODL ontstond uit een spelfout van 'hold' in een 2013 Bitcoin forum post, maar is sindsdien teruggevormd tot 'Hold On for Dear Life.' Het betekent cryptocurrency aanhouden ondanks marktvolatiliteit."
        }
      },
      {
        question: {
          en: "What is Ethereum primarily known for?",
          es: "¿Por qué es conocido principalmente Ethereum?",
          de: "Wofür ist Ethereum hauptsächlich bekannt?",
          nl: "Waarvoor staat Ethereum voornamelijk bekend?"
        },
        options: [
          { en: "Being faster than Bitcoin", es: "Ser más rápido que Bitcoin", de: "Schneller als Bitcoin zu sein", nl: "Sneller zijn dan Bitcoin" },
          { en: "Smart contracts and dApps", es: "Contratos inteligentes y dApps", de: "Smart Contracts und dApps", nl: "Smart contracts en dApps" },
          { en: "Having the lowest fees", es: "Tener las tarifas más bajas", de: "Die niedrigsten Gebühren zu haben", nl: "De laagste kosten hebben" },
          { en: "Being anonymous", es: "Ser anónimo", de: "Anonym zu sein", nl: "Anoniem zijn" }
        ],
        correct: 1,
        explanation: {
          en: "Ethereum is primarily known for enabling smart contracts and decentralized applications (dApps). It's a programmable blockchain that goes beyond simple transactions.",
          es: "Ethereum es conocido principalmente por permitir contratos inteligentes y aplicaciones descentralizadas (dApps). Es una blockchain programable que va más allá de transacciones simples.",
          de: "Ethereum ist hauptsächlich dafür bekannt, Smart Contracts und dezentrale Anwendungen (dApps) zu ermöglichen. Es ist eine programmierbare Blockchain, die über einfache Transaktionen hinausgeht.",
          nl: "Ethereum staat voornamelijk bekend voor het mogelijk maken van smart contracts en gedecentraliseerde applicaties (dApps). Het is een programmeerbare blockchain die verder gaat dan eenvoudige transacties."
        }
      },
      {
        question: {
          en: "What is a wallet in cryptocurrency?",
          es: "¿Qué es una billetera en criptomonedas?",
          de: "Was ist eine Wallet bei Kryptowährungen?",
          nl: "Wat is een wallet in cryptocurrency?"
        },
        options: [
          { en: "A physical container for coins", es: "Un contenedor físico para monedas", de: "Ein physischer Behälter für Münzen", nl: "Een fysieke container voor munten" },
          { en: "A software or hardware device to store private keys", es: "Un dispositivo de software o hardware para almacenar claves privadas", de: "Ein Software- oder Hardware-Gerät zur Speicherung privater Schlüssel", nl: "Een software- of hardware-apparaat om private keys op te slaan" },
          { en: "A bank account for crypto", es: "Una cuenta bancaria para cripto", de: "Ein Bankkonto für Krypto", nl: "Een bankrekening voor crypto" },
          { en: "A type of cryptocurrency", es: "Un tipo de criptomoneda", de: "Eine Art von Kryptowährung", nl: "Een type cryptocurrency" }
        ],
        correct: 1,
        explanation: {
          en: "A cryptocurrency wallet is a software or hardware device that stores the private keys needed to access and manage your cryptocurrency. It doesn't actually store the coins themselves.",
          es: "Una billetera de criptomonedas es un dispositivo de software o hardware que almacena las claves privadas necesarias para acceder y gestionar tu criptomoneda. En realidad no almacena las monedas en sí.",
          de: "Eine Kryptowährungswallet ist ein Software- oder Hardware-Gerät, das die privaten Schlüssel speichert, die benötigt werden, um auf Ihre Kryptowährung zuzugreifen und sie zu verwalten. Sie speichert nicht die Münzen selbst.",
          nl: "Een cryptocurrency wallet is een software- of hardware-apparaat dat de private keys opslaat die nodig zijn om toegang te krijgen tot en je cryptocurrency te beheren. Het slaat niet daadwerkelijk de munten zelf op."
        }
      },
      {
        question: {
          en: "What is a 'hard fork' in cryptocurrency?",
          es: "¿Qué es un 'hard fork' en criptomonedas?",
          de: "Was ist eine 'Hard Fork' bei Kryptowährungen?",
          nl: "Wat is een 'hard fork' in cryptocurrency?"
        },
        options: [
          { en: "A mining tool", es: "Una herramienta de minería", de: "Ein Mining-Werkzeug", nl: "Een mining tool" },
          { en: "A permanent split in the blockchain", es: "Una división permanente en la blockchain", de: "Eine permanente Spaltung der Blockchain", nl: "Een permanente splitsing in de blockchain" },
          { en: "A type of wallet", es: "Un tipo de billetera", de: "Eine Art von Wallet", nl: "Een type wallet" },
          { en: "A security feature", es: "Una característica de seguridad", de: "Ein Sicherheitsmerkmal", nl: "Een beveiligingsfunctie" }
        ],
        correct: 1,
        explanation: {
          en: "A hard fork is a permanent divergence from the latest version of a blockchain. It creates a new version that's incompatible with the previous one, potentially creating two separate cryptocurrencies.",
          es: "Un hard fork es una divergencia permanente de la última versión de una blockchain. Crea una nueva versión que es incompatible con la anterior, potencialmente creando dos criptomonedas separadas.",
          de: "Eine Hard Fork ist eine permanente Abweichung von der neuesten Version einer Blockchain. Sie erstellt eine neue Version, die mit der vorherigen inkompatibel ist und möglicherweise zwei separate Kryptowährungen schafft.",
          nl: "Een hard fork is een permanente afwijking van de nieuwste versie van een blockchain. Het creëert een nieuwe versie die incompatibel is met de vorige, mogelijk twee aparte cryptocurrencies creërend."
        }
      },
      {
        question: {
          en: "What does 'DeFi' stand for?",
          es: "¿Qué significa 'DeFi'?",
          de: "Wofür steht 'DeFi'?",
          nl: "Waar staat 'DeFi' voor?"
        },
        options: [
          { en: "Digital Finance", es: "Finanzas Digitales", de: "Digitale Finanzen", nl: "Digitale Financiën" },
          { en: "Decentralized Finance", es: "Finanzas Descentralizadas", de: "Dezentrale Finanzen", nl: "Gedecentraliseerde Financiën" },
          { en: "Defined Finance", es: "Finanzas Definidas", de: "Definierte Finanzen", nl: "Gedefinieerde Financiën" },
          { en: "Distributed Finance", es: "Finanzas Distribuidas", de: "Verteilte Finanzen", nl: "Gedistribueerde Financiën" }
        ],
        correct: 1,
        explanation: {
          en: "DeFi stands for Decentralized Finance. It refers to financial services built on blockchain technology that operate without traditional intermediaries like banks.",
          es: "DeFi significa Finanzas Descentralizadas. Se refiere a servicios financieros construidos en tecnología blockchain que operan sin intermediarios tradicionales como bancos.",
          de: "DeFi steht für Dezentrale Finanzen. Es bezieht sich auf Finanzdienstleistungen, die auf Blockchain-Technologie aufbauen und ohne traditionelle Vermittler wie Banken funktionieren.",
          nl: "DeFi staat voor Gedecentraliseerde Financiën. Het verwijst naar financiële diensten gebouwd op blockchain-technologie die werken zonder traditionele tussenpersonen zoals banken."
        }
      },
      {
        question: {
          en: "What is the native cryptocurrency of the Ethereum network?",
          es: "¿Cuál es la criptomoneda nativa de la red Ethereum?",
          de: "Was ist die native Kryptowährung des Ethereum-Netzwerks?",
          nl: "Wat is de native cryptocurrency van het Ethereum netwerk?"
        },
        options: [
          { en: "Bitcoin", es: "Bitcoin", de: "Bitcoin", nl: "Bitcoin" },
          { en: "Ether (ETH)", es: "Ether (ETH)", de: "Ether (ETH)", nl: "Ether (ETH)" },
          { en: "Litecoin", es: "Litecoin", de: "Litecoin", nl: "Litecoin" },
          { en: "Dogecoin", es: "Dogecoin", de: "Dogecoin", nl: "Dogecoin" }
        ],
        correct: 1,
        explanation: {
          en: "Ether (ETH) is the native cryptocurrency of the Ethereum network. It's used to pay for transaction fees and computational services on the network.",
          es: "Ether (ETH) es la criptomoneda nativa de la red Ethereum. Se usa para pagar tarifas de transacción y servicios computacionales en la red.",
          de: "Ether (ETH) ist die native Kryptowährung des Ethereum-Netzwerks. Es wird verwendet, um Transaktionsgebühren und Rechendienstleistungen im Netzwerk zu bezahlen.",
          nl: "Ether (ETH) is de native cryptocurrency van het Ethereum netwerk. Het wordt gebruikt om transactiekosten en computationele diensten op het netwerk te betalen."
        }
      },
      {
        question: {
          en: "What is an ICO in cryptocurrency?",
          es: "¿Qué es una ICO en criptomonedas?",
          de: "Was ist ein ICO bei Kryptowährungen?",
          nl: "Wat is een ICO in cryptocurrency?"
        },
        options: [
          { en: "International Crypto Organization", es: "Organización Cripto Internacional", de: "Internationale Krypto-Organisation", nl: "Internationale Crypto Organisatie" },
          { en: "Initial Coin Offering", es: "Oferta Inicial de Monedas", de: "Initial Coin Offering", nl: "Initial Coin Offering" },
          { en: "Internet Cryptocurrency Operation", es: "Operación de Criptomoneda de Internet", de: "Internet-Kryptowährungs-Operation", nl: "Internet Cryptocurrency Operatie" },
          { en: "Integrated Crypto Oracle", es: "Oráculo Cripto Integrado", de: "Integriertes Krypto-Orakel", nl: "Geïntegreerd Crypto Oracle" }
        ],
        correct: 1,
        explanation: {
          en: "ICO stands for Initial Coin Offering. It's a fundraising method where new cryptocurrency projects sell tokens to early investors in exchange for established cryptocurrencies like Bitcoin or Ethereum.",
          es: "ICO significa Oferta Inicial de Monedas. Es un método de recaudación de fondos donde nuevos proyectos de criptomonedas venden tokens a inversores tempranos a cambio de criptomonedas establecidas como Bitcoin o Ethereum.",
          de: "ICO steht für Initial Coin Offering. Es ist eine Fundraising-Methode, bei der neue Kryptowährungsprojekte Token an frühe Investoren verkaufen im Austausch für etablierte Kryptowährungen wie Bitcoin oder Ethereum.",
          nl: "ICO staat voor Initial Coin Offering. Het is een fundraising methode waarbij nieuwe cryptocurrency projecten tokens verkopen aan vroege investeerders in ruil voor gevestigde cryptocurrencies zoals Bitcoin of Ethereum."
        }
      },
      {
        question: {
          en: "What is the term for the smallest unit of Bitcoin?",
          es: "¿Cuál es el término para la unidad más pequeña de Bitcoin?",
          de: "Wie nennt man die kleinste Einheit von Bitcoin?",
          nl: "Wat is de term voor de kleinste eenheid van Bitcoin?"
        },
        options: [
          { en: "Satoshi", es: "Satoshi", de: "Satoshi", nl: "Satoshi" },
          { en: "Bit", es: "Bit", de: "Bit", nl: "Bit" },
          { en: "Finney", es: "Finney", de: "Finney", nl: "Finney" },
          { en: "Wei", es: "Wei", de: "Wei", nl: "Wei" }
        ],
        correct: 0,
        explanation: {
          en: "A Satoshi is the smallest unit of Bitcoin, equal to 0.00000001 BTC. It's named after Bitcoin's mysterious creator, Satoshi Nakamoto.",
          es: "Un Satoshi es la unidad más pequeña de Bitcoin, igual a 0.00000001 BTC. Lleva el nombre del misterioso creador de Bitcoin, Satoshi Nakamoto.",
          de: "Ein Satoshi ist die kleinste Einheit von Bitcoin, gleich 0,00000001 BTC. Es ist nach Bitcoins mysteriösem Schöpfer Satoshi Nakamoto benannt.",
          nl: "Een Satoshi is de kleinste eenheid van Bitcoin, gelijk aan 0,00000001 BTC. Het is vernoemd naar Bitcoin's mysterieuze bedenker, Satoshi Nakamoto."
        }
      },
      {
        question: {
          en: "What consensus mechanism does Bitcoin use?",
          es: "¿Qué mecanismo de consenso utiliza Bitcoin?",
          de: "Welchen Konsensmechanismus verwendet Bitcoin?",
          nl: "Welk consensusmechanisme gebruikt Bitcoin?"
        },
        options: [
          { en: "Proof of Stake", es: "Prueba de Participación", de: "Proof of Stake", nl: "Proof of Stake" },
          { en: "Proof of Work", es: "Prueba de Trabajo", de: "Proof of Work", nl: "Proof of Work" },
          { en: "Delegated Proof of Stake", es: "Prueba de Participación Delegada", de: "Delegated Proof of Stake", nl: "Gedelegeerde Proof of Stake" },
          { en: "Proof of Authority", es: "Prueba de Autoridad", de: "Proof of Authority", nl: "Proof of Authority" }
        ],
        correct: 1,
        explanation: {
          en: "Bitcoin uses Proof of Work (PoW) consensus mechanism. Miners compete to solve computationally intensive puzzles to validate transactions and add new blocks to the blockchain.",
          es: "Bitcoin utiliza el mecanismo de consenso Prueba de Trabajo (PoW). Los mineros compiten para resolver acertijos computacionalmente intensivos para validar transacciones y agregar nuevos bloques a la blockchain.",
          de: "Bitcoin verwendet den Proof of Work (PoW) Konsensmechanismus. Miner konkurrieren darum, rechenintensive Rätsel zu lösen, um Transaktionen zu validieren und neue Blöcke zur Blockchain hinzuzufügen.",
          nl: "Bitcoin gebruikt het Proof of Work (PoW) consensusmechanisme. Miners concurreren om computationeel intensieve puzzels op te lossen om transacties te valideren en nieuwe blokken aan de blockchain toe te voegen."
        }
      },
      {
        question: {
          en: "What is a stablecoin?",
          es: "¿Qué es una stablecoin?",
          de: "Was ist ein Stablecoin?",
          nl: "Wat is een stablecoin?"
        },
        options: [
          { en: "A cryptocurrency with stable internet connection", es: "Una criptomoneda con conexión a internet estable", de: "Eine Kryptowährung mit stabiler Internetverbindung", nl: "Een cryptocurrency met stabiele internetverbinding" },
          { en: "A cryptocurrency pegged to a stable asset", es: "Una criptomoneda vinculada a un activo estable", de: "Eine Kryptowährung, die an einen stabilen Vermögenswert gekoppelt ist", nl: "Een cryptocurrency gekoppeld aan een stabiel activum" },
          { en: "A coin that never loses value", es: "Una moneda que nunca pierde valor", de: "Eine Münze, die niemals an Wert verliert", nl: "Een munt die nooit waarde verliest" },
          { en: "The most reliable cryptocurrency", es: "La criptomoneda más confiable", de: "Die zuverlässigste Kryptowährung", nl: "De meest betrouwbare cryptocurrency" }
        ],
        correct: 1,
        explanation: {
          en: "A stablecoin is a cryptocurrency designed to maintain a stable value by being pegged to a stable asset, typically the US dollar, gold, or other cryptocurrencies.",
          es: "Una stablecoin es una criptomoneda diseñada para mantener un valor estable al estar vinculada a un activo estable, típicamente el dólar estadounidense, oro, u otras criptomonedas.",
          de: "Ein Stablecoin ist eine Kryptowährung, die darauf ausgelegt ist, einen stabilen Wert zu halten, indem sie an einen stabilen Vermögenswert gekoppelt wird, typischerweise den US-Dollar, Gold oder andere Kryptowährungen.",
          nl: "Een stablecoin is een cryptocurrency ontworpen om een stabiele waarde te behouden door gekoppeld te zijn aan een stabiel activum, meestal de Amerikaanse dollar, goud, of andere cryptocurrencies."
        }
      },
      {
        question: {
          en: "What does 'FOMO' mean in crypto trading?",
          es: "¿Qué significa 'FOMO' en el trading de criptomonedas?",
          de: "Was bedeutet 'FOMO' beim Krypto-Trading?",
          nl: "Wat betekent 'FOMO' in crypto trading?"
        },
        options: [
          { en: "Fear Of Missing Out", es: "Miedo de Perderse Algo", de: "Angst etwas zu verpassen", nl: "Angst Om Iets Te Missen" },
          { en: "First Order Market Option", es: "Opción de Mercado de Primera Orden", de: "Erste Ordnung Marktoption", nl: "Eerste Orde Markt Optie" },
          { en: "Forward Momentum Opportunity", es: "Oportunidad de Impulso Hacia Adelante", de: "Vorwärts-Momentum-Gelegenheit", nl: "Voorwaartse Momentum Kans" },
          { en: "Financial Operations Management", es: "Gestión de Operaciones Financieras", de: "Finanzoperations-Management", nl: "Financiële Operaties Management" }
        ],
        correct: 0,
        explanation: {
          en: "FOMO stands for 'Fear Of Missing Out.' In crypto trading, it refers to the anxiety that causes investors to make impulsive decisions when they see others profiting from investments.",
          es: "FOMO significa 'Miedo de Perderse Algo'. En el trading de criptomonedas, se refiere a la ansiedad que causa que los inversores tomen decisiones impulsivas cuando ven a otros obteniendo ganancias de inversiones.",
          de: "FOMO steht für 'Fear Of Missing Out' (Angst etwas zu verpassen). Beim Krypto-Trading bezieht es sich auf die Angst, die Investoren dazu bringt, impulsive Entscheidungen zu treffen, wenn sie sehen, wie andere von Investitionen profitieren.",
          nl: "FOMO staat voor 'Fear Of Missing Out' (Angst Om Iets Te Missen). In crypto trading verwijst het naar de angst die investeerders ertoe brengt impulsieve beslissingen te maken wanneer ze anderen zien profiteren van investeringen."
        }
      },
      {
        question: {
          en: "What is an NFT?",
          es: "¿Qué es un NFT?",
          de: "Was ist ein NFT?",
          nl: "Wat is een NFT?"
        },
        options: [
          { en: "New Financial Technology", es: "Nueva Tecnología Financiera", de: "Neue Finanztechnologie", nl: "Nieuwe Financiële Technologie" },
          { en: "Non-Fungible Token", es: "Token No Fungible", de: "Non-Fungible Token", nl: "Non-Fungible Token" },
          { en: "Network File Transfer", es: "Transferencia de Archivo de Red", de: "Netzwerk-Dateiübertragung", nl: "Netwerk Bestandsoverdracht" },
          { en: "Numeric Financial Transaction", es: "Transacción Financiera Numérica", de: "Numerische Finanztransaktion", nl: "Numerieke Financiële Transactie" }
        ],
        correct: 1,
        explanation: {
          en: "NFT stands for Non-Fungible Token. It's a unique digital asset that represents ownership of a specific item, artwork, or content on the blockchain, making it non-interchangeable.",
          es: "NFT significa Token No Fungible. Es un activo digital único que representa la propiedad de un artículo, obra de arte o contenido específico en la blockchain, haciéndolo no intercambiable.",
          de: "NFT steht für Non-Fungible Token. Es ist ein einzigartiger digitaler Vermögenswert, der das Eigentum an einem bestimmten Gegenstand, Kunstwerk oder Inhalt auf der Blockchain repräsentiert und ihn nicht austauschbar macht.",
          nl: "NFT staat voor Non-Fungible Token. Het is een uniek digitaal activum dat eigendom vertegenwoordigt van een specifiek item, kunstwerk, of inhoud op de blockchain, waardoor het niet-uitwisselbaar is."
        }
      },
      {
        question: {
          en: "What is 'gas' in Ethereum transactions?",
          es: "¿Qué es 'gas' en las transacciones de Ethereum?",
          de: "Was ist 'Gas' bei Ethereum-Transaktionen?",
          nl: "Wat is 'gas' in Ethereum transacties?"
        },
        options: [
          { en: "A type of cryptocurrency", es: "Un tipo de criptomoneda", de: "Eine Art von Kryptowährung", nl: "Een type cryptocurrency" },
          { en: "The fee paid for transactions", es: "La tarifa pagada por las transacciones", de: "Die Gebühr für Transaktionen", nl: "De vergoeding betaald voor transacties" },
          { en: "A mining algorithm", es: "Un algoritmo de minería", de: "Ein Mining-Algorithmus", nl: "Een mining algoritme" },
          { en: "A security protocol", es: "Un protocolo de seguridad", de: "Ein Sicherheitsprotokoll", nl: "Een beveiligingsprotocol" }
        ],
        correct: 1,
        explanation: {
          en: "Gas in Ethereum refers to the computational effort required to execute operations. Users pay gas fees in ETH to compensate miners for the computational work needed to process transactions.",
          es: "El gas en Ethereum se refiere al esfuerzo computacional requerido para ejecutar operaciones. Los usuarios pagan tarifas de gas en ETH para compensar a los mineros por el trabajo computacional necesario para procesar transacciones.",
          de: "Gas in Ethereum bezieht sich auf den rechnerischen Aufwand, der zur Ausführung von Operationen erforderlich ist. Benutzer zahlen Gasgebühren in ETH, um Miner für die rechnerische Arbeit zu entschädigen, die zur Verarbeitung von Transaktionen erforderlich ist.",
          nl: "Gas in Ethereum verwijst naar de computationele inspanning vereist om operaties uit te voeren. Gebruikers betalen gas fees in ETH om miners te compenseren voor het computationele werk nodig om transacties te verwerken."
        }
      },
      {
        question: {
          en: "Which cryptocurrency is known as 'digital silver' to Bitcoin's 'digital gold'?",
          es: "¿Qué criptomoneda es conocida como 'plata digital' al 'oro digital' de Bitcoin?",
          de: "Welche Kryptowährung ist als 'digitales Silber' zu Bitcoins 'digitalem Gold' bekannt?",
          nl: "Welke cryptocurrency staat bekend als 'digitaal zilver' ten opzichte van Bitcoin's 'digitaal goud'?"
        },
        options: [
          { en: "Ethereum", es: "Ethereum", de: "Ethereum", nl: "Ethereum" },
          { en: "Ripple", es: "Ripple", de: "Ripple", nl: "Ripple" },
          { en: "Litecoin", es: "Litecoin", de: "Litecoin", nl: "Litecoin" },
          { en: "Cardano", es: "Cardano", de: "Cardano", nl: "Cardano" }
        ],
        correct: 2,
        explanation: {
          en: "Litecoin is often referred to as 'digital silver' to Bitcoin's 'digital gold.' Created by Charlie Lee, it was designed to be a lighter, faster version of Bitcoin for everyday transactions.",
          es: "Litecoin a menudo se refiere como 'plata digital' al 'oro digital' de Bitcoin. Creado por Charlie Lee, fue diseñado para ser una versión más ligera y rápida de Bitcoin para transacciones cotidianas.",
          de: "Litecoin wird oft als 'digitales Silber' zu Bitcoins 'digitalem Gold' bezeichnet. Erstellt von Charlie Lee, wurde es als leichtere, schnellere Version von Bitcoin für alltägliche Transaktionen konzipiert.",
          nl: "Litecoin wordt vaak 'digitaal zilver' genoemd ten opzichte van Bitcoin's 'digitaal goud.' Gecreëerd door Charlie Lee, was het ontworpen om een lichtere, snellere versie van Bitcoin te zijn voor dagelijkse transacties."
        }
      },
      {
        question: {
          en: "What is a cryptocurrency exchange?",
          es: "¿Qué es un intercambio de criptomonedas?",
          de: "Was ist eine Kryptowährungsbörse?",
          nl: "Wat is een cryptocurrency exchange?"
        },
        options: [
          { en: "A place to trade cryptocurrencies", es: "Un lugar para intercambiar criptomonedas", de: "Ein Ort zum Handel mit Kryptowährungen", nl: "Een plek om cryptocurrencies te verhandelen" },
          { en: "A cryptocurrency wallet", es: "Una billetera de criptomonedas", de: "Eine Kryptowährungswallet", nl: "Een cryptocurrency wallet" },
          { en: "A mining pool", es: "Un pool de minería", de: "Ein Mining-Pool", nl: "Een mining pool" },
          { en: "A blockchain network", es: "Una red blockchain", de: "Ein Blockchain-Netzwerk", nl: "Een blockchain netwerk" }
        ],
        correct: 0,
        explanation: {
          en: "A cryptocurrency exchange is a platform where users can buy, sell, and trade cryptocurrencies for other digital or fiat currencies. Popular exchanges include Coinbase, Binance, and Kraken.",
          es: "Un intercambio de criptomonedas es una plataforma donde los usuarios pueden comprar, vender e intercambiar criptomonedas por otras monedas digitales o fiduciarias. Los intercambios populares incluyen Coinbase, Binance y Kraken.",
          de: "Eine Kryptowährungsbörse ist eine Plattform, auf der Benutzer Kryptowährungen gegen andere digitale oder Fiat-Währungen kaufen, verkaufen und handeln können. Beliebte Börsen sind Coinbase, Binance und Kraken.",
          nl: "Een cryptocurrency exchange is een platform waar gebruikers cryptocurrencies kunnen kopen, verkopen en verhandelen voor andere digitale of fiat valuta's. Populaire exchanges zijn Coinbase, Binance en Kraken."
        }
      }
    ]
  };

  // Export for use in the quiz application
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level1;
  } else if (typeof window !== 'undefined') {
    window.level1 = level1;
  }
})();
