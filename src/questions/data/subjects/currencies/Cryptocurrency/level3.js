// Cryptocurrency Quiz - Level 3
(function() {
  const level3 = {
    name: {
          "en": "Cryptocurrency - Advanced",
          "es": "Criptomoneda - Avanzado",
          "de": "Kryptowährung - Fortgeschritten",
          "nl": "Cryptocurrency - Gevorderd"
    },
    questions: [
      {
        question: {
                  "en": "What is Proof of Work (PoW) consensus mechanism?",
                  "es": "¿Qué es el mecanismo de consenso Prueba de Trabajo (PoW)?",
                  "de": "Was ist der Proof of Work (PoW) Konsensmechanismus?",
                  "nl": "Wat is het Proof of Work (PoW) consensus mechanisme?"
        },
        options: [
        {
                  "en": "Miners compete to solve cryptographic puzzles to validate blocks",
                  "es": "Los mineros compiten para resolver acertijos criptográficos para validar bloques",
                  "de": "Miner konkurrieren um die Lösung kryptographischer Rätsel zur Blockvalidierung",
                  "nl": "Miners concurreren om cryptografische puzzels op te lossen om blokken te valideren"
        },
        {
                  "en": "Users vote on transaction validity",
                  "es": "Los usuarios votan sobre la validez de las transacciones",
                  "de": "Benutzer stimmen über die Gültigkeit von Transaktionen ab",
                  "nl": "Gebruikers stemmen over transactiegeldigheid"
        },
        {
                  "en": "Validators are chosen based on their stake",
                  "es": "Los validadores son elegidos basándose en su participación",
                  "de": "Validatoren werden basierend auf ihrem Einsatz ausgewählt",
                  "nl": "Validators worden gekozen op basis van hun inzet"
        },
        {
                  "en": "A centralized authority validates all transactions",
                  "es": "Una autoridad centralizada valida todas las transacciones",
                  "de": "Eine zentrale Autorität validiert alle Transaktionen",
                  "nl": "Een gecentraliseerde autoriteit valideert alle transacties"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Proof of Work requires miners to solve computationally intensive cryptographic puzzles to validate transactions and create new blocks, securing the network through energy expenditure.",
                  "es": "La Prueba de Trabajo requiere que los mineros resuelvan acertijos criptográficos computacionalmente intensivos para validar transacciones y crear nuevos bloques, asegurando la red a través del gasto de energía.",
                  "de": "Proof of Work erfordert, dass Miner rechenintensive kryptographische Rätsel lösen, um Transaktionen zu validieren und neue Blöcke zu erstellen, wodurch das Netzwerk durch Energieaufwand gesichert wird.",
                  "nl": "Proof of Work vereist dat miners rekenintensieve cryptografische puzzels oplossen om transacties te valideren en nieuwe blokken te maken, waardoor het netwerk wordt beveiligd door energieverbruik."
        }
      },
      {
        question: {
                  "en": "What is Proof of Stake (PoS) and how does it differ from PoW?",
                  "es": "¿Qué es la Prueba de Participación (PoS) y en qué se diferencia de PoW?",
                  "de": "Was ist Proof of Stake (PoS) und wie unterscheidet es sich von PoW?",
                  "nl": "Wat is Proof of Stake (PoS) en hoe verschilt het van PoW?"
        },
        options: [
        {
                  "en": "PoS selects validators based on stake ownership, using less energy than PoW",
                  "es": "PoS selecciona validadores basándose en la propiedad de participación, usando menos energía que PoW",
                  "de": "PoS wählt Validatoren basierend auf Stake-Besitz aus und verbraucht weniger Energie als PoW",
                  "nl": "PoS selecteert validators op basis van stake eigendom, met minder energieverbruik dan PoW"
        },
        {
                  "en": "PoS requires more computational power than PoW",
                  "es": "PoS requiere más poder computacional que PoW",
                  "de": "PoS erfordert mehr Rechenleistung als PoW",
                  "nl": "PoS vereist meer rekenkracht dan PoW"
        },
        {
                  "en": "PoS and PoW are just different names for the same thing",
                  "es": "PoS y PoW son solo nombres diferentes para lo mismo",
                  "de": "PoS und PoW sind nur verschiedene Namen für dasselbe",
                  "nl": "PoS en PoW zijn gewoon verschillende namen voor hetzelfde"
        },
        {
                  "en": "PoS is identical to PoW in energy consumption",
                  "es": "PoS es idéntico a PoW en consumo de energía",
                  "de": "PoS ist identisch mit PoW im Energieverbrauch",
                  "nl": "PoS is identiek aan PoW in energieverbruik"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Proof of Stake selects validators to create new blocks based on the amount of cryptocurrency they hold and are willing to 'stake', consuming significantly less energy than PoW mining.",
                  "es": "La Prueba de Participación selecciona validadores para crear nuevos bloques basándose en la cantidad de criptomoneda que poseen y están dispuestos a 'apostar', consumiendo significativamente menos energía que la minería PoW.",
                  "de": "Proof of Stake wählt Validatoren zur Erstellung neuer Blöcke basierend auf der Menge an Kryptowährung aus, die sie besitzen und bereit sind zu 'staken', und verbraucht deutlich weniger Energie als PoW-Mining.",
                  "nl": "Proof of Stake selecteert validators om nieuwe blokken te maken op basis van de hoeveelheid cryptocurrency die ze bezitten en bereid zijn te 'staken', met aanzienlijk minder energieverbruik dan PoW mining."
        }
      },
      {
        question: {
                  "en": "What is a 51% attack in blockchain networks?",
                  "es": "¿Qué es un ataque del 51% en las redes blockchain?",
                  "de": "Was ist ein 51%-Angriff in Blockchain-Netzwerken?",
                  "nl": "Wat is een 51% aanval in blockchain netwerken?"
        },
        options: [
        {
                  "en": "When 51% of users lose their private keys",
                  "es": "Cuando el 51% de los usuarios pierden sus claves privadas",
                  "de": "Wenn 51% der Benutzer ihre privaten Schlüssel verlieren",
                  "nl": "Wanneer 51% van de gebruikers hun private keys verliezen"
        },
        {
                  "en": "When 51% of transactions fail",
                  "es": "Cuando el 51% de las transacciones fallan",
                  "de": "Wenn 51% der Transaktionen fehlschlagen",
                  "nl": "Wanneer 51% van de transacties mislukken"
        },
        {
                  "en": "When a single entity controls majority of network's mining power",
                  "es": "Cuando una sola entidad controla la mayoría del poder de minería de la red",
                  "de": "Wenn eine einzelne Entität die Mehrheit der Mining-Power des Netzwerks kontrolliert",
                  "nl": "Wanneer een enkele entiteit de meerderheid van de mining power van het netwerk controleert"
        },
        {
                  "en": "When cryptocurrency price drops by 51%",
                  "es": "Cuando el precio de la criptomoneda cae un 51%",
                  "de": "Wenn der Kryptowährungspreis um 51% fällt",
                  "nl": "Wanneer de cryptocurrency prijs met 51% daalt"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "A 51% attack occurs when a single entity gains control of more than half of a blockchain network's mining power, potentially allowing them to reverse transactions and double-spend coins.",
                  "es": "Un ataque del 51% ocurre cuando una sola entidad obtiene control de más de la mitad del poder de minería de una red blockchain, potencialmente permitiéndoles revertir transacciones y gastar monedas dobles.",
                  "de": "Ein 51%-Angriff tritt auf, wenn eine einzelne Entität die Kontrolle über mehr als die Hälfte der Mining-Power eines Blockchain-Netzwerks erlangt, wodurch sie möglicherweise Transaktionen rückgängig machen und Coins doppelt ausgeben können.",
                  "nl": "Een 51% aanval treedt op wanneer een enkele entiteit controle krijgt over meer dan de helft van de mining power van een blockchain netwerk, waardoor ze mogelijk transacties kunnen omkeren en coins dubbel kunnen uitgeven."
        }
      },
      {
        question: {
                  "en": "What are Layer 2 scaling solutions in blockchain?",
                  "es": "¿Qué son las soluciones de escalabilidad de Capa 2 en blockchain?",
                  "de": "Was sind Layer-2-Skalierungslösungen in der Blockchain?",
                  "nl": "Wat zijn Layer 2 schaaloplossingen in blockchain?"
        },
        options: [
        {
                  "en": "Additional security layers for wallets",
                  "es": "Capas adicionales de seguridad para billeteras",
                  "de": "Zusätzliche Sicherheitsschichten für Wallets",
                  "nl": "Extra beveiligingslagen voor wallets"
        },
        {
                  "en": "Secondary blockchains that process transactions off the main chain",
                  "es": "Blockchains secundarias que procesan transacciones fuera de la cadena principal",
                  "de": "Sekundäre Blockchains, die Transaktionen außerhalb der Hauptkette verarbeiten",
                  "nl": "Secundaire blockchains die transacties buiten de hoofdketen verwerken"
        },
        {
                  "en": "A second version of the original blockchain",
                  "es": "Una segunda versión de la blockchain original",
                  "de": "Eine zweite Version der ursprünglichen Blockchain",
                  "nl": "Een tweede versie van de oorspronkelijke blockchain"
        },
        {
                  "en": "Physical hardware upgrades to mining equipment",
                  "es": "Actualizaciones físicas de hardware para equipos de minería",
                  "de": "Physische Hardware-Upgrades für Mining-Ausrüstung",
                  "nl": "Fysieke hardware upgrades voor mining apparatuur"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Layer 2 solutions like Lightning Network or Polygon process transactions off-chain and then settle on the main blockchain, improving scalability and reducing fees while maintaining security.",
                  "es": "Las soluciones de Capa 2 como Lightning Network o Polygon procesan transacciones fuera de la cadena y luego se liquidan en la blockchain principal, mejorando la escalabilidad y reduciendo las tarifas mientras mantienen la seguridad.",
                  "de": "Layer-2-Lösungen wie Lightning Network oder Polygon verarbeiten Transaktionen off-chain und setteln dann auf der Haupt-Blockchain, wodurch Skalierbarkeit verbessert und Gebühren reduziert werden bei Beibehaltung der Sicherheit.",
                  "nl": "Layer 2 oplossingen zoals Lightning Network of Polygon verwerken transacties off-chain en regelen dan af op de hoofdblockchain, waardoor schaalbaarheid wordt verbeterd en kosten worden verlaagd terwijl beveiliging behouden blijft."
        }
      },
      {
        question: {
                  "en": "What is atomic swaps in cryptocurrency?",
                  "es": "¿Qué son los intercambios atómicos en criptomonedas?",
                  "de": "Was sind Atomic Swaps bei Kryptowährungen?",
                  "nl": "Wat zijn atomic swaps in cryptocurrency?"
        },
        options: [
        {
                  "en": "Nuclear-powered mining operations",
                  "es": "Operaciones de minería alimentadas por energía nuclear",
                  "de": "Nuklear-betriebene Mining-Operationen",
                  "nl": "Nucleair-aangedreven mining operaties"
        },
        {
                  "en": "Cross-chain exchanges without intermediaries using smart contracts",
                  "es": "Intercambios entre cadenas sin intermediarios usando contratos inteligentes",
                  "de": "Cross-Chain-Börsen ohne Zwischenhändler mit Smart Contracts",
                  "nl": "Cross-chain uitwisselingen zonder tussenpersonen met smart contracts"
        },
        {
                  "en": "Splitting cryptocurrency into smaller denominations",
                  "es": "Dividir criptomonedas en denominaciones más pequeñas",
                  "de": "Aufteilen von Kryptowährungen in kleinere Stückelungen",
                  "nl": "Cryptocurrency splitsen in kleinere denominaties"
        },
        {
                  "en": "Very small cryptocurrency transactions",
                  "es": "Transacciones de criptomonedas muy pequeñas",
                  "de": "Sehr kleine Kryptowährungstransaktionen",
                  "nl": "Zeer kleine cryptocurrency transacties"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Atomic swaps enable direct peer-to-peer exchanges of different cryptocurrencies across different blockchains without trusted intermediaries, using hash time-locked contracts.",
                  "es": "Los intercambios atómicos permiten intercambios directos peer-to-peer de diferentes criptomonedas a través de diferentes blockchains sin intermediarios de confianza, usando contratos bloqueados por tiempo hash.",
                  "de": "Atomic Swaps ermöglichen direkte Peer-to-Peer-Börsen verschiedener Kryptowährungen über verschiedene Blockchains ohne vertrauenswürdige Zwischenhändler, unter Verwendung von Hash-Time-Locked-Contracts.",
                  "nl": "Atomic swaps maken directe peer-to-peer uitwisselingen mogelijk van verschillende cryptocurrencies over verschillende blockchains zonder vertrouwde tussenpersonen, met gebruik van hash time-locked contracts."
        }
      },
      {
        question: {
                  "en": "What is cryptocurrency sharding?",
                  "es": "¿Qué es el sharding de criptomonedas?",
                  "de": "Was ist Kryptowährungs-Sharding?",
                  "nl": "Wat is cryptocurrency sharding?"
        },
        options: [
        {
                  "en": "Breaking private keys into pieces for security",
                  "es": "Romper claves privadas en pedazos para seguridad",
                  "de": "Private Schlüssel für Sicherheit in Stücke brechen",
                  "nl": "Private keys in stukken breken voor beveiliging"
        },
        {
                  "en": "Partitioning blockchain database to improve scalability",
                  "es": "Particionar la base de datos blockchain para mejorar la escalabilidad",
                  "de": "Partitionierung der Blockchain-Datenbank zur Verbesserung der Skalierbarkeit",
                  "nl": "Partitioneren van blockchain database om schaalbaarheid te verbeteren"
        },
        {
                  "en": "Mining cryptocurrency with broken hardware",
                  "es": "Minar criptomonedas con hardware roto",
                  "de": "Kryptowährung mit defekter Hardware minen",
                  "nl": "Cryptocurrency minen met kapotte hardware"
        },
        {
                  "en": "Splitting cryptocurrency communities into factions",
                  "es": "Dividir comunidades de criptomonedas en facciones",
                  "de": "Kryptowährungs-Communities in Fraktionen aufteilen",
                  "nl": "Cryptocurrency gemeenschappen in facties splitsen"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Sharding divides the blockchain database into smaller, parallel chains (shards) that can process transactions simultaneously, significantly improving network throughput and scalability.",
                  "es": "El sharding divide la base de datos blockchain en cadenas más pequeñas y paralelas (fragmentos) que pueden procesar transacciones simultáneamente, mejorando significativamente el rendimiento y escalabilidad de la red.",
                  "de": "Sharding teilt die Blockchain-Datenbank in kleinere, parallele Ketten (Shards) auf, die Transaktionen gleichzeitig verarbeiten können, wodurch Netzwerkdurchsatz und Skalierbarkeit erheblich verbessert werden.",
                  "nl": "Sharding verdeelt de blockchain database in kleinere, parallelle ketens (shards) die transacties gelijktijdig kunnen verwerken, waardoor netwerkdoorvoer en schaalbaarheid aanzienlijk worden verbeterd."
        }
      },
      {
        question: {
                  "en": "What is a cryptocurrency oracle?",
                  "es": "¿Qué es un oráculo de criptomonedas?",
                  "de": "Was ist ein Kryptowährungs-Oracle?",
                  "nl": "Wat is een cryptocurrency oracle?"
        },
        options: [
        {
                  "en": "Advanced AI for trading algorithms",
                  "es": "IA avanzada para algoritmos de trading",
                  "de": "Fortgeschrittene KI für Trading-Algorithmen",
                  "nl": "Geavanceerde AI voor handelsalgoritmes"
        },
        {
                  "en": "A type of cryptocurrency exchange",
                  "es": "Un tipo de intercambio de criptomonedas",
                  "de": "Eine Art Kryptowährungsbörse",
                  "nl": "Een type cryptocurrency exchange"
        },
        {
                  "en": "A fortune teller who predicts crypto prices",
                  "es": "Un adivino que predice precios de criptomonedas",
                  "de": "Ein Wahrsager, der Krypto-Preise vorhersagt",
                  "nl": "Een waarzegger die crypto prijzen voorspelt"
        },
        {
                  "en": "External data source that provides real-world information to smart contracts",
                  "es": "Fuente de datos externa que proporciona información del mundo real a contratos inteligentes",
                  "de": "Externe Datenquelle, die reale Informationen an Smart Contracts liefert",
                  "nl": "Externe databron die real-world informatie levert aan smart contracts"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Cryptocurrency oracles are third-party services that fetch and verify real-world data (prices, weather, sports scores) and feed it to blockchain smart contracts that cannot access external data directly.",
                  "es": "Los oráculos de criptomonedas son servicios de terceros que obtienen y verifican datos del mundo real (precios, clima, puntuaciones deportivas) y los alimentan a contratos inteligentes de blockchain que no pueden acceder a datos externos directamente.",
                  "de": "Kryptowährungs-Oracles sind Drittanbieter-Services, die reale Daten (Preise, Wetter, Sport-Ergebnisse) abrufen und verifizieren und diese an Blockchain-Smart-Contracts weiterleiten, die nicht direkt auf externe Daten zugreifen können.",
                  "nl": "Cryptocurrency oracles zijn derde partij services die real-world data (prijzen, weer, sportuitslagen) ophalen en verifiëren en deze doorgeven aan blockchain smart contracts die niet direct toegang hebben tot externe data."
        }
      },
      {
        question: {
                  "en": "What is cryptocurrency slashing in Proof of Stake?",
                  "es": "¿Qué es el slashing de criptomonedas en Prueba de Participación?",
                  "de": "Was ist Kryptowährungs-Slashing bei Proof of Stake?",
                  "nl": "Wat is cryptocurrency slashing in Proof of Stake?"
        },
        options: [
        {
                  "en": "Reducing cryptocurrency prices dramatically",
                  "es": "Reducir los precios de criptomonedas dramáticamente",
                  "de": "Kryptowährungspreise dramatisch reduzieren",
                  "nl": "Cryptocurrency prijzen dramatisch verlagen"
        },
        {
                  "en": "A trading strategy for quick profits",
                  "es": "Una estrategia de trading para ganancias rápidas",
                  "de": "Eine Trading-Strategie für schnelle Gewinne",
                  "nl": "Een handelsstrategie voor snelle winsten"
        },
        {
                  "en": "Penalty mechanism that destroys staked tokens for malicious behavior",
                  "es": "Mecanismo de penalización que destruye tokens apostados por comportamiento malicioso",
                  "de": "Bestrafungsmechanismus, der gestakte Token für böswilliges Verhalten zerstört",
                  "nl": "Strafmechanisme dat gestakte tokens vernietigt voor kwaadaardig gedrag"
        },
        {
                  "en": "Cutting transaction fees in half",
                  "es": "Reducir las tarifas de transacción a la mitad",
                  "de": "Transaktionsgebühren halbieren",
                  "nl": "Transactiekosten halveren"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Slashing is a penalty mechanism in PoS networks where validators lose a portion of their staked tokens if they act maliciously, attempt double-signing, or go offline for extended periods.",
                  "es": "El slashing es un mecanismo de penalización en redes PoS donde los validadores pierden una porción de sus tokens apostados si actúan maliciosamente, intentan firmar doble, o se desconectan por períodos extendidos.",
                  "de": "Slashing ist ein Bestrafungsmechanismus in PoS-Netzwerken, bei dem Validatoren einen Teil ihrer gestakten Token verlieren, wenn sie böswillig handeln, Double-Signing versuchen oder für längere Zeit offline gehen.",
                  "nl": "Slashing is een strafmechanisme in PoS netwerken waarbij validators een deel van hun gestakte tokens verliezen als ze kwaadaardig handelen, double-signing proberen, of voor langere tijd offline gaan."
        }
      },
      {
        question: {
                  "en": "What is Maximum Extractable Value (MEV) in blockchain?",
                  "es": "¿Qué es el Valor Extraíble Máximo (MEV) en blockchain?",
                  "de": "Was ist Maximum Extractable Value (MEV) in der Blockchain?",
                  "nl": "Wat is Maximum Extractable Value (MEV) in blockchain?"
        },
        options: [
        {
                  "en": "Profit miners/validators can extract by reordering transactions",
                  "es": "Ganancia que los mineros/validadores pueden extraer reordenando transacciones",
                  "de": "Gewinn, den Miner/Validatoren durch Neuanordnung von Transaktionen extrahieren können",
                  "nl": "Winst die miners/validators kunnen behalen door transacties te herordenen"
        },
        {
                  "en": "Maximum storage capacity of a blockchain",
                  "es": "Capacidad máxima de almacenamiento de una blockchain",
                  "de": "Maximale Speicherkapazität einer Blockchain",
                  "nl": "Maximale opslagcapaciteit van een blockchain"
        },
        {
                  "en": "The maximum price a cryptocurrency can reach",
                  "es": "El precio máximo que puede alcanzar una criptomoneda",
                  "de": "Der Höchstpreis, den eine Kryptowährung erreichen kann",
                  "nl": "De maximumprijs die een cryptocurrency kan bereiken"
        },
        {
                  "en": "The most valuable NFT in a collection",
                  "es": "El NFT más valioso en una colección",
                  "de": "Das wertvollste NFT in einer Sammlung",
                  "nl": "De meest waardevolle NFT in een collectie"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "MEV represents the maximum profit that miners or validators can extract by reordering, including, or excluding transactions within blocks they produce, often through front-running or sandwich attacks.",
                  "es": "MEV representa la ganancia máxima que los mineros o validadores pueden extraer reordenando, incluyendo o excluyendo transacciones dentro de los bloques que producen, a menudo a través de front-running o ataques sandwich.",
                  "de": "MEV stellt den maximalen Gewinn dar, den Miner oder Validatoren durch Neuanordnung, Einbeziehung oder Ausschluss von Transaktionen in von ihnen produzierten Blöcken extrahieren können, oft durch Front-Running oder Sandwich-Angriffe.",
                  "nl": "MEV vertegenwoordigt de maximale winst die miners of validators kunnen behalen door transacties te herordenen, in- of uitsluiten binnen blokken die ze produceren, vaak door front-running of sandwich aanvallen."
        }
      },
      {
        question: {
                  "en": "What is a cryptocurrency rug pull?",
                  "es": "¿Qué es un rug pull de criptomonedas?",
                  "de": "Was ist ein Kryptowährungs-Rug-Pull?",
                  "nl": "Wat is een cryptocurrency rug pull?"
        },
        options: [
        {
                  "en": "Removing outdated cryptocurrencies from exchanges",
                  "es": "Eliminar criptomonedas obsoletas de los intercambios",
                  "de": "Veraltete Kryptowährungen von Börsen entfernen",
                  "nl": "Verouderde cryptocurrencies van exchanges verwijderen"
        },
        {
                  "en": "A legitimate marketing strategy for new tokens",
                  "es": "Una estrategia de marketing legítima para nuevos tokens",
                  "de": "Eine legitime Marketingstrategie für neue Token",
                  "nl": "Een legitieme marketingstrategie voor nieuwe tokens"
        },
        {
                  "en": "A technical upgrade to improve blockchain performance",
                  "es": "Una actualización técnica para mejorar el rendimiento de blockchain",
                  "de": "Ein technisches Upgrade zur Verbesserung der Blockchain-Leistung",
                  "nl": "Een technische upgrade om blockchain prestaties te verbeteren"
        },
        {
                  "en": "Scam where developers abandon project and steal investor funds",
                  "es": "Estafa donde los desarrolladores abandonan el proyecto y roban fondos de inversores",
                  "de": "Betrug, bei dem Entwickler das Projekt verlassen und Investorengelder stehlen",
                  "nl": "Oplichting waarbij ontwikkelaars het project verlaten en investeerdersfondsenstelen"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "A rug pull is a cryptocurrency scam where developers promote a new token, attract investors, then suddenly withdraw all liquidity and abandon the project, leaving investors with worthless tokens.",
                  "es": "Un rug pull es una estafa de criptomonedas donde los desarrolladores promueven un nuevo token, atraen inversores, luego retiran repentinamente toda la liquidez y abandonan el proyecto, dejando a los inversores con tokens sin valor.",
                  "de": "Ein Rug Pull ist ein Kryptowährungsbetrug, bei dem Entwickler einen neuen Token bewerben, Investoren anlocken, dann plötzlich alle Liquidität abziehen und das Projekt verlassen, wodurch Investoren mit wertlosen Token zurückbleiben.",
                  "nl": "Een rug pull is een cryptocurrency oplichting waarbij ontwikkelaars een nieuwe token promoten, investeerders aantrekken, dan plotseling alle liquiditeit wegtrekken en het project verlaten, waardoor investeerders met waardeloze tokens achterblijven."
        }
      },
      {
        question: {
                  "en": "What is cryptocurrency front-running?",
                  "es": "¿Qué es el front-running de criptomonedas?",
                  "de": "Was ist Kryptowährungs-Front-Running?",
                  "nl": "Wat is cryptocurrency front-running?"
        },
        options: [
        {
                  "en": "Being the first to mine a new cryptocurrency",
                  "es": "Ser el primero en minar una nueva criptomoneda",
                  "de": "Der erste sein, der eine neue Kryptowährung mint",
                  "nl": "De eerste zijn die een nieuwe cryptocurrency mint"
        },
        {
                  "en": "Running mining software before others start",
                  "es": "Ejecutar software de minería antes que otros comiencen",
                  "de": "Mining-Software vor anderen starten",
                  "nl": "Mining software draaien voordat anderen beginnen"
        },
        {
                  "en": "Leading a cryptocurrency project development",
                  "es": "Liderar el desarrollo de un proyecto de criptomonedas",
                  "de": "Die Entwicklung eines Kryptowährungsprojekts leiten",
                  "nl": "Het leiden van een cryptocurrency projectontwikkeling"
        },
        {
                  "en": "Placing orders ahead of known large transactions for profit",
                  "es": "Colocar órdenes antes de transacciones grandes conocidas para obtener ganancias",
                  "de": "Aufträge vor bekannten großen Transaktionen für Gewinn platzieren",
                  "nl": "Orders plaatsen voorafgaand aan bekende grote transacties voor winst"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Front-running occurs when someone places a transaction with higher gas fees to execute before a known pending transaction, profiting from the price movement they anticipate.",
                  "es": "El front-running ocurre cuando alguien coloca una transacción con tarifas de gas más altas para ejecutar antes de una transacción pendiente conocida, obteniendo ganancias del movimiento de precios que anticipan.",
                  "de": "Front-Running tritt auf, wenn jemand eine Transaktion mit höheren Gas-Gebühren platziert, um vor einer bekannten ausstehenden Transaktion auszuführen und von der erwarteten Preisbewegung zu profitieren.",
                  "nl": "Front-running treedt op wanneer iemand een transactie plaatst met hogere gaskosten om uit te voeren voor een bekende uitstaande transactie, profiterend van de prijsbeweging die ze verwachten."
        }
      },
      {
        question: {
                  "en": "What is a cryptocurrency flash loan?",
                  "es": "¿Qué es un préstamo flash de criptomonedas?",
                  "de": "Was ist ein Kryptowährungs-Flash-Darlehen?",
                  "nl": "Wat is een cryptocurrency flash loan?"
        },
        options: [
        {
                  "en": "Loans that are approved instantly",
                  "es": "Préstamos que se aprueban instantáneamente",
                  "de": "Darlehen, die sofort genehmigt werden",
                  "nl": "Leningen die direct worden goedgekeurd"
        },
        {
                  "en": "Short-term loans with very high interest rates",
                  "es": "Préstamos a corto plazo con tasas de interés muy altas",
                  "de": "Kurzfristige Darlehen mit sehr hohen Zinssätzen",
                  "nl": "Kortetermijnleningen met zeer hoge rentetarieven"
        },
        {
                  "en": "Uncollateralized loan that must be repaid within same transaction",
                  "es": "Préstamo sin garantía que debe ser pagado dentro de la misma transacción",
                  "de": "Unbesichertes Darlehen, das innerhalb derselben Transaktion zurückgezahlt werden muss",
                  "nl": "Lening zonder onderpand die binnen dezelfde transactie moet worden terugbetaald"
        },
        {
                  "en": "Very fast traditional bank loans for crypto purchases",
                  "es": "Préstamos bancarios tradicionales muy rápidos para compras de criptomonedas",
                  "de": "Sehr schnelle traditionelle Bankkredite für Krypto-Käufe",
                  "nl": "Zeer snelle traditionele bankleningen voor crypto aankopen"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Flash loans are uncollateralized loans that allow borrowing large amounts of cryptocurrency that must be repaid within the same blockchain transaction, often used for arbitrage or complex DeFi strategies.",
                  "es": "Los préstamos flash son préstamos sin garantía que permiten pedir prestadas grandes cantidades de criptomonedas que deben ser pagadas dentro de la misma transacción blockchain, a menudo usados para arbitraje o estrategias DeFi complejas.",
                  "de": "Flash-Darlehen sind unbesicherte Darlehen, die das Ausleihen großer Mengen an Kryptowährung ermöglichen, die innerhalb derselben Blockchain-Transaktion zurückgezahlt werden müssen, oft für Arbitrage oder komplexe DeFi-Strategien verwendet.",
                  "nl": "Flash loans zijn leningen zonder onderpand die het mogelijk maken grote hoeveelheden cryptocurrency te lenen die binnen dezelfde blockchain transactie moeten worden terugbetaald, vaak gebruikt voor arbitrage of complexe DeFi strategieën."
        }
      },
      {
        question: {
                  "en": "What is cryptocurrency impermanent loss?",
                  "es": "¿Qué es la pérdida impermanente de criptomonedas?",
                  "de": "Was ist Kryptowährungs-Impermanent Loss?",
                  "nl": "Wat is cryptocurrency impermanent loss?"
        },
        options: [
        {
                  "en": "Cryptocurrency that can be recovered later",
                  "es": "Criptomoneda que puede ser recuperada más tarde",
                  "de": "Kryptowährung, die später wiederhergestellt werden kann",
                  "nl": "Cryptocurrency die later kan worden hersteld"
        },
        {
                  "en": "Loss liquidity providers face when token prices diverge in a pool",
                  "es": "Pérdida que enfrentan los proveedores de liquidez cuando los precios de tokens divergen en un pool",
                  "de": "Verlust, dem Liquiditätsanbieter gegenüberstehen, wenn Token-Preise in einem Pool divergieren",
                  "nl": "Verlies dat liquiditeitsverschaffers ondervinden wanneer tokenprijzen divergeren in een pool"
        },
        {
                  "en": "Temporary server downtime on exchanges",
                  "es": "Tiempo de inactividad temporal del servidor en intercambios",
                  "de": "Vorübergehende Server-Ausfallzeit an Börsen",
                  "nl": "Tijdelijke serveruitval op exchanges"
        },
        {
                  "en": "Minor fluctuations in trading volume",
                  "es": "Fluctuaciones menores en volumen de trading",
                  "de": "Geringe Schwankungen im Handelsvolumen",
                  "nl": "Kleine schommelingen in handelsvolume"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Impermanent loss occurs when liquidity providers in automated market makers experience loss compared to simply holding tokens, due to price divergence between paired assets in the pool.",
                  "es": "La pérdida impermanente ocurre cuando los proveedores de liquidez en creadores de mercado automatizados experimentan pérdidas comparado con simplemente mantener tokens, debido a la divergencia de precios entre activos emparejados en el pool.",
                  "de": "Impermanent Loss tritt auf, wenn Liquiditätsanbieter in automatisierten Market Makern Verluste im Vergleich zum einfachen Halten von Token erleiden, aufgrund von Preisdivergenz zwischen gepaarten Assets im Pool.",
                  "nl": "Impermanent loss treedt op wanneer liquiditeitsverschaffers in automated market makers verlies ervaren vergeleken met het simpelweg vasthouden van tokens, door prijsdivergentie tussen gepaarde assets in de pool."
        }
      },
      {
        question: {
                  "en": "What is a cryptocurrency yield farm?",
                  "es": "¿Qué es un yield farm de criptomonedas?",
                  "de": "Was ist ein Kryptowährungs-Yield-Farm?",
                  "nl": "Wat is een cryptocurrency yield farm?"
        },
        options: [
        {
                  "en": "Agricultural projects funded by cryptocurrency",
                  "es": "Proyectos agrícolas financiados por criptomonedas",
                  "de": "Landwirtschaftliche Projekte, die durch Kryptowährung finanziert werden",
                  "nl": "Landbouwprojecten gefinancierd door cryptocurrency"
        },
        {
                  "en": "Physical farms that mine cryptocurrency using solar power",
                  "es": "Granjas físicas que minan criptomonedas usando energía solar",
                  "de": "Physische Farmen, die Kryptowährung mit Solarenergie minen",
                  "nl": "Fysieke boerderijen die cryptocurrency minen met zonne-energie"
        },
        {
                  "en": "Cryptocurrency exchanges located in rural areas",
                  "es": "Intercambios de criptomonedas ubicados en áreas rurales",
                  "de": "Kryptowährungsbörsen in ländlichen Gebieten",
                  "nl": "Cryptocurrency exchanges gelegen in landelijke gebieden"
        },
        {
                  "en": "Strategy of earning rewards by providing liquidity to DeFi protocols",
                  "es": "Estrategia de ganar recompensas proporcionando liquidez a protocolos DeFi",
                  "de": "Strategie zur Gewinnerzielung durch Bereitstellung von Liquidität für DeFi-Protokolle",
                  "nl": "Strategie om beloningen te verdienen door liquiditeit te verstrekken aan DeFi protocollen"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Yield farming involves providing cryptocurrency to DeFi protocols (lending platforms, liquidity pools) to earn rewards, often in the form of additional tokens or interest payments.",
                  "es": "El yield farming involucra proporcionar criptomonedas a protocolos DeFi (plataformas de préstamo, pools de liquidez) para ganar recompensas, a menudo en forma de tokens adicionales o pagos de interés.",
                  "de": "Yield Farming beinhaltet die Bereitstellung von Kryptowährung an DeFi-Protokolle (Kreditplattformen, Liquiditätspools), um Belohnungen zu verdienen, oft in Form zusätzlicher Token oder Zinszahlungen.",
                  "nl": "Yield farming houdt in dat cryptocurrency wordt verstrekt aan DeFi protocollen (leenplatforms, liquiditeitspools) om beloningen te verdienen, vaak in de vorm van extra tokens of rentebetalingen."
        }
      },
      {
        question: {
                  "en": "What is a cryptocurrency multisig wallet?",
                  "es": "¿Qué es una billetera multisig de criptomonedas?",
                  "de": "Was ist eine Kryptowährungs-Multisig-Wallet?",
                  "nl": "Wat is een cryptocurrency multisig wallet?"
        },
        options: [
        {
                  "en": "Wallet that can be accessed from multiple devices",
                  "es": "Billetera a la que se puede acceder desde múltiples dispositivos",
                  "de": "Wallet, auf die von mehreren Geräten zugegriffen werden kann",
                  "nl": "Wallet die toegankelijk is vanaf meerdere apparaten"
        },
        {
                  "en": "Wallet with multiple backup copies",
                  "es": "Billetera con múltiples copias de respaldo",
                  "de": "Wallet mit mehreren Backup-Kopien",
                  "nl": "Wallet met meerdere backup kopieën"
        },
        {
                  "en": "Wallet that supports multiple cryptocurrencies",
                  "es": "Billetera que soporta múltiples criptomonedas",
                  "de": "Wallet, die mehrere Kryptowährungen unterstützt",
                  "nl": "Wallet die meerdere cryptocurrencies ondersteunt"
        },
        {
                  "en": "Wallet requiring multiple signatures to authorize transactions",
                  "es": "Billetera que requiere múltiples firmas para autorizar transacciones",
                  "de": "Wallet, die mehrere Signaturen zur Transaktionsautorisierung benötigt",
                  "nl": "Wallet die meerdere handtekeningen vereist om transacties te autoriseren"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "A multisig wallet requires multiple private key signatures (e.g., 2-of-3, 3-of-5) to authorize transactions, providing enhanced security and shared control over funds.",
                  "es": "Una billetera multisig requiere múltiples firmas de claves privadas (ej. 2-de-3, 3-de-5) para autorizar transacciones, proporcionando seguridad mejorada y control compartido sobre los fondos.",
                  "de": "Eine Multisig-Wallet erfordert mehrere private Schlüsselsignaturen (z.B. 2-von-3, 3-von-5) zur Transaktionsautorisierung und bietet verbesserte Sicherheit und geteilte Kontrolle über Gelder.",
                  "nl": "Een multisig wallet vereist meerdere private key handtekeningen (bijv. 2-van-3, 3-van-5) om transacties te autoriseren, wat verbeterde beveiliging en gedeelde controle over fondsen biedt."
        }
      },
      {
        question: {
                  "en": "What is cryptocurrency governance token?",
                  "es": "¿Qué es un token de gobernanza de criptomonedas?",
                  "de": "Was ist ein Kryptowährungs-Governance-Token?",
                  "nl": "Wat is een cryptocurrency governance token?"
        },
        options: [
        {
                  "en": "Token issued by government agencies",
                  "es": "Token emitido por agencias gubernamentales",
                  "de": "Token, der von Regierungsbehörden ausgegeben wird",
                  "nl": "Token uitgegeven door overheidsinstanties"
        },
        {
                  "en": "Token that gives holders voting rights in protocol decisions",
                  "es": "Token que otorga a los poseedores derechos de voto en decisiones del protocolo",
                  "de": "Token, der Inhabern Stimmrechte bei Protokollentscheidungen gewährt",
                  "nl": "Token die houders stemrechten geeft in protocolbeslissingen"
        },
        {
                  "en": "Token that represents ownership of a company",
                  "es": "Token que representa la propiedad de una empresa",
                  "de": "Token, der das Eigentum an einem Unternehmen darstellt",
                  "nl": "Token die eigendom van een bedrijf vertegenwoordigt"
        },
        {
                  "en": "Token used to pay for transaction fees",
                  "es": "Token usado para pagar tarifas de transacción",
                  "de": "Token zur Zahlung von Transaktionsgebühren",
                  "nl": "Token gebruikt om transactiekosten te betalen"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Governance tokens give holders voting rights to participate in protocol decisions such as parameter changes, upgrades, or fund allocation in decentralized autonomous organizations (DAOs).",
                  "es": "Los tokens de gobernanza otorgan a los poseedores derechos de voto para participar en decisiones del protocolo como cambios de parámetros, actualizaciones o asignación de fondos en organizaciones autónomas descentralizadas (DAOs).",
                  "de": "Governance-Token gewähren Inhabern Stimmrechte zur Teilnahme an Protokollentscheidungen wie Parameteränderungen, Upgrades oder Mittelzuteilung in dezentralen autonomen Organisationen (DAOs).",
                  "nl": "Governance tokens geven houders stemrechten om deel te nemen aan protocolbeslissingen zoals parameterwijzigingen, upgrades of fondstoewijzing in gedecentraliseerde autonome organisaties (DAOs)."
        }
      },
      {
        question: {
                  "en": "What is a cryptocurrency liquidity pool?",
                  "es": "¿Qué es un pool de liquidez de criptomonedas?",
                  "de": "Was ist ein Kryptowährungs-Liquiditätspool?",
                  "nl": "Wat is een cryptocurrency liquiditeitspool?"
        },
        options: [
        {
                  "en": "A swimming pool for cryptocurrency miners",
                  "es": "Una piscina para mineros de criptomonedas",
                  "de": "Ein Schwimmbad für Kryptowährungs-Miner",
                  "nl": "Een zwembad voor cryptocurrency miners"
        },
        {
                  "en": "Collection of funds locked in smart contract to facilitate trading",
                  "es": "Colección de fondos bloqueados en contrato inteligente para facilitar el trading",
                  "de": "Sammlung von Geldern, die in Smart Contracts gesperrt sind, um den Handel zu erleichtern",
                  "nl": "Verzameling van fondsen vergrendeld in smart contract om handel te faciliteren"
        },
        {
                  "en": "Group of investors pooling money for crypto purchases",
                  "es": "Grupo de inversores juntando dinero para compras de criptomonedas",
                  "de": "Gruppe von Investoren, die Geld für Krypto-Käufe zusammenlegen",
                  "nl": "Groep investeerders die geld bundelen voor crypto aankopen"
        },
        {
                  "en": "Reserve of cryptocurrency held by exchanges",
                  "es": "Reserva de criptomonedas mantenida por intercambios",
                  "de": "Reserve an Kryptowährung, die von Börsen gehalten wird",
                  "nl": "Reserve van cryptocurrency aangehouden door exchanges"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "A liquidity pool is a collection of cryptocurrencies locked in a smart contract that provides liquidity for decentralized exchanges, enabling automated trading without traditional order books.",
                  "es": "Un pool de liquidez es una colección de criptomonedas bloqueadas en un contrato inteligente que proporciona liquidez para intercambios descentralizados, permitiendo trading automatizado sin libros de órdenes tradicionales.",
                  "de": "Ein Liquiditätspool ist eine Sammlung von Kryptowährungen, die in einem Smart Contract gesperrt sind und Liquidität für dezentrale Börsen bereitstellen, wodurch automatisierter Handel ohne traditionelle Orderbücher ermöglicht wird.",
                  "nl": "Een liquiditeitspool is een verzameling cryptocurrencies vergrendeld in een smart contract dat liquiditeit biedt voor gedecentraliseerde exchanges, waardoor geautomatiseerde handel mogelijk wordt zonder traditionele orderboeken."
        }
      },
      {
        question: {
                  "en": "What is cryptocurrency arbitrage?",
                  "es": "¿Qué es el arbitraje de criptomonedas?",
                  "de": "Was ist Kryptowährungs-Arbitrage?",
                  "nl": "Wat is cryptocurrency arbitrage?"
        },
        options: [
        {
                  "en": "Legal disputes over cryptocurrency ownership",
                  "es": "Disputas legales sobre propiedad de criptomonedas",
                  "de": "Rechtstreitigkeiten über Kryptowährungs-Eigentum",
                  "nl": "Juridische geschillen over cryptocurrency eigendom"
        },
        {
                  "en": "Profiting from price differences across different exchanges",
                  "es": "Obtener ganancias de diferencias de precios a través de diferentes intercambios",
                  "de": "Gewinn aus Preisunterschieden zwischen verschiedenen Börsen",
                  "nl": "Winst maken uit prijsverschillen tussen verschillende exchanges"
        },
        {
                  "en": "Random selection of cryptocurrencies for investment",
                  "es": "Selección aleatoria de criptomonedas para inversión",
                  "de": "Zufällige Auswahl von Kryptowährungen für Investitionen",
                  "nl": "Willekeurige selectie van cryptocurrencies voor investering"
        },
        {
                  "en": "Government regulation of cryptocurrency markets",
                  "es": "Regulación gubernamental de mercados de criptomonedas",
                  "de": "Regierungsregulierung von Kryptowährungsmärkten",
                  "nl": "Overheidsregulering van cryptocurrency markten"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Cryptocurrency arbitrage involves buying cryptocurrency on one exchange where the price is lower and simultaneously selling it on another exchange where the price is higher, profiting from the price difference.",
                  "es": "El arbitraje de criptomonedas involucra comprar criptomonedas en un intercambio donde el precio es más bajo y simultáneamente venderla en otro intercambio donde el precio es más alto, obteniendo ganancias de la diferencia de precios.",
                  "de": "Kryptowährungs-Arbitrage beinhaltet den Kauf von Kryptowährung an einer Börse, wo der Preis niedriger ist, und den gleichzeitigen Verkauf an einer anderen Börse, wo der Preis höher ist, um von der Preisdifferenz zu profitieren.",
                  "nl": "Cryptocurrency arbitrage houdt in dat cryptocurrency wordt gekocht op een exchange waar de prijs lager is en tegelijkertijd wordt verkocht op een andere exchange waar de prijs hoger is, waarbij winst wordt gemaakt uit het prijsverschil."
        }
      },
      {
        question: {
                  "en": "What is a cryptocurrency wrapped token?",
                  "es": "¿Qué es un token envuelto de criptomonedas?",
                  "de": "Was ist ein Kryptowährungs-Wrapped-Token?",
                  "nl": "Wat is een cryptocurrency wrapped token?"
        },
        options: [
        {
                  "en": "Token that's been stolen and recovered",
                  "es": "Token que ha sido robado y recuperado",
                  "de": "Token, der gestohlen und wiederhergestellt wurde",
                  "nl": "Token die is gestolen en hersteld"
        },
        {
                  "en": "Encrypted token for enhanced security",
                  "es": "Token encriptado para seguridad mejorada",
                  "de": "Verschlüsselter Token für verbesserte Sicherheit",
                  "nl": "Versleutelde token voor verbeterde beveiliging"
        },
        {
                  "en": "Token packaged with physical merchandise",
                  "es": "Token empaquetado con mercancía física",
                  "de": "Token, der mit physischen Waren verpackt ist",
                  "nl": "Token verpakt met fysieke goederen"
        },
        {
                  "en": "Representation of cryptocurrency from another blockchain",
                  "es": "Representación de criptomoneda de otra blockchain",
                  "de": "Darstellung von Kryptowährung aus einer anderen Blockchain",
                  "nl": "Representatie van cryptocurrency van een andere blockchain"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "A wrapped token is a cryptocurrency that represents another crypto from a different blockchain, enabling cross-chain interoperability. For example, Wrapped Bitcoin (WBTC) represents Bitcoin on Ethereum.",
                  "es": "Un token envuelto es una criptomoneda que representa otra criptomoneda de una blockchain diferente, permitiendo interoperabilidad entre cadenas. Por ejemplo, Wrapped Bitcoin (WBTC) representa Bitcoin en Ethereum.",
                  "de": "Ein Wrapped Token ist eine Kryptowährung, die eine andere Kryptowährung aus einer anderen Blockchain repräsentiert und Cross-Chain-Interoperabilität ermöglicht. Zum Beispiel repräsentiert Wrapped Bitcoin (WBTC) Bitcoin auf Ethereum.",
                  "nl": "Een wrapped token is een cryptocurrency die een andere crypto van een verschillende blockchain vertegenwoordigt, waardoor cross-chain interoperabiliteit mogelijk wordt. Bijvoorbeeld, Wrapped Bitcoin (WBTC) vertegenwoordigt Bitcoin op Ethereum."
        }
      },
      {
        question: {
                  "en": "What is a flash loan in DeFi?",
                  "es": "¿Qué es un préstamo flash en DeFi?",
                  "de": "Was ist ein Flash Loan in DeFi?",
                  "nl": "Wat is een flash loan in DeFi?"
        },
        options: [
        {
                  "en": "A loan backed by lightning network",
                  "es": "Un préstamo respaldado por lightning network",
                  "de": "Ein durch das Lightning-Netzwerk unterstütztes Darlehen",
                  "nl": "Een lening ondersteund door het lightning netwerk"
        },
        {
                  "en": "A loan that must be repaid within the same transaction",
                  "es": "Un préstamo que debe ser pagado dentro de la misma transacción",
                  "de": "Ein Darlehen, das innerhalb derselben Transaktion zurückgezahlt werden muss",
                  "nl": "Een lening die binnen dezelfde transactie moet worden terugbetaald"
        },
        {
                  "en": "A loan that expires in 24 hours",
                  "es": "Un préstamo que expira en 24 horas",
                  "de": "Ein Darlehen, das in 24 Stunden abläuft",
                  "nl": "Een lening die binnen 24 uur verloopt"
        },
        {
                  "en": "A loan with extremely high interest rates",
                  "es": "Un préstamo con tasas de interés extremadamente altas",
                  "de": "Ein Darlehen mit extrem hohen Zinssätzen",
                  "nl": "Een lening met extreem hoge rentetarieven"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "A flash loan is an uncollateralized loan that must be borrowed and repaid within the same blockchain transaction. If not repaid, the entire transaction reverts, making it risk-free for lenders.",
                  "es": "Un préstamo flash es un préstamo sin garantía que debe ser prestado y pagado dentro de la misma transacción blockchain. Si no se paga, toda la transacción se revierte, haciéndolo libre de riesgo para los prestamistas.",
                  "de": "Ein Flash Loan ist ein unbesichertes Darlehen, das innerhalb derselben Blockchain-Transaktion aufgenommen und zurückgezahlt werden muss. Wird es nicht zurückgezahlt, wird die gesamte Transaktion rückgängig gemacht, was es für Kreditgeber risikofrei macht.",
                  "nl": "Een flash loan is een ongedekte lening die binnen dezelfde blockchain-transactie moet worden geleend en terugbetaald. Als het niet wordt terugbetaald, wordt de hele transactie teruggedraaid, waardoor het risicovrij is voor kredietverstrekkers."
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
                  "en": "Vitalik Buterin",
                  "es": "Vitalik Buterin",
                  "de": "Vitalik Buterin",
                  "nl": "Vitalik Buterin"
        },
        {
                  "en": "Gavin Andresen",
                  "es": "Gavin Andresen",
                  "de": "Gavin Andresen",
                  "nl": "Gavin Andresen"
        },
        {
                  "en": "Satoshi Nakamoto",
                  "es": "Satoshi Nakamoto",
                  "de": "Satoshi Nakamoto",
                  "nl": "Satoshi Nakamoto"
        },
        {
                  "en": "Charlie Lee",
                  "es": "Charlie Lee",
                  "de": "Charlie Lee",
                  "nl": "Charlie Lee"
        }
        ],
        correct: 2,
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
                  "en": "Litecoin (LTC)",
                  "es": "Litecoin (LTC)",
                  "de": "Litecoin (LTC)",
                  "nl": "Litecoin (LTC)"
        },
        {
                  "en": "Bitcoin (BTC)",
                  "es": "Bitcoin (BTC)",
                  "de": "Bitcoin (BTC)",
                  "nl": "Bitcoin (BTC)"
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
                  "en": "Proof of Authority",
                  "es": "Proof of Authority",
                  "de": "Proof of Authority",
                  "nl": "Proof of Authority"
        },
        {
                  "en": "Delegated Proof of Stake",
                  "es": "Delegated Proof of Stake",
                  "de": "Delegated Proof of Stake",
                  "nl": "Delegated Proof of Stake"
        }
        ],
        correct: 0,
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
                  "en": "Centralized database",
                  "es": "Centralized database",
                  "de": "Centralized database",
                  "nl": "Centralized database"
        },
        {
                  "en": "Cloud storage",
                  "es": "Cloud storage",
                  "de": "Cloud storage",
                  "nl": "Cloud storage"
        },
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
        }
        ],
        correct: 3,
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
                  "en": "Storing coins in wallets",
                  "es": "Storing coins in wallets",
                  "de": "Storing coins in wallets",
                  "nl": "Storing coins in wallets"
        },
        {
                  "en": "Buying coins on exchanges",
                  "es": "Buying coins on exchanges",
                  "de": "Buying coins on exchanges",
                  "nl": "Buying coins on exchanges"
        },
        {
                  "en": "Validating transactions and creating new coins",
                  "es": "Validating transactions and creating new coins",
                  "de": "Validating transactions and creating new coins",
                  "nl": "Validating transactions and creating new coins"
        },
        {
                  "en": "Trading coins for profit",
                  "es": "Trading coins for profit",
                  "de": "Trading coins for profit",
                  "nl": "Trading coins for profit"
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
                  "en": "Bank account",
                  "es": "Bank account",
                  "de": "Bank account",
                  "nl": "Bank account"
        },
        {
                  "en": "Physical coin storage",
                  "es": "Physical coin storage",
                  "de": "Physical coin storage",
                  "nl": "Physical coin storage"
        },
        {
                  "en": "Trading platform",
                  "es": "Trading platform",
                  "de": "Trading platform",
                  "nl": "Trading platform"
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
                  "en": "Only Bitcoin",
                  "es": "Only Bitcoin",
                  "de": "Only Bitcoin",
                  "nl": "Only Bitcoin"
        },
        {
                  "en": "Physical coins",
                  "es": "Physical coins",
                  "de": "Physical coins",
                  "nl": "Physical coins"
        },
        {
                  "en": "Government currencies",
                  "es": "Government currencies",
                  "de": "Government currencies",
                  "nl": "Government currencies"
        },
        {
                  "en": "Any cryptocurrency other than Bitcoin",
                  "es": "Any cryptocurrency other than Bitcoin",
                  "de": "Any cryptocurrency other than Bitcoin",
                  "nl": "Any cryptocurrency other than Bitcoin"
        }
        ],
        correct: 3,
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
                  "en": "Platform for buying and selling crypto",
                  "es": "Platform for buying and selling crypto",
                  "de": "Platform for buying and selling crypto",
                  "nl": "Platform for buying and selling crypto"
        },
        {
                  "en": "Mining operation",
                  "es": "Mining operation",
                  "de": "Mining operation",
                  "nl": "Mining operation"
        }
        ],
        correct: 2,
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
                  "en": "Internet Currency Option",
                  "es": "Internet Currency Option",
                  "de": "Internet Currency Option",
                  "nl": "Internet Currency Option"
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
        }
        ],
        correct: 3,
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
                  "en": "Mining equipment",
                  "es": "Mining equipment",
                  "de": "Mining equipment",
                  "nl": "Mining equipment"
        },
        {
                  "en": "Secret code accessing your cryptocurrency",
                  "es": "Secret code accessing your cryptocurrency",
                  "de": "Secret code accessing your cryptocurrency",
                  "nl": "Secret code accessing your cryptocurrency"
        },
        {
                  "en": "Public wallet address",
                  "es": "Public wallet address",
                  "de": "Public wallet address",
                  "nl": "Public wallet address"
        },
        {
                  "en": "Exchange password",
                  "es": "Exchange password",
                  "de": "Exchange password",
                  "nl": "Exchange password"
        }
        ],
        correct: 1,
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
                  "en": "Total value of all coins in circulation",
                  "es": "Total value of all coins in circulation",
                  "de": "Total value of all coins in circulation",
                  "nl": "Total value of all coins in circulation"
        },
        {
                  "en": "Exchange listing price",
                  "es": "Exchange listing price",
                  "de": "Exchange listing price",
                  "nl": "Exchange listing price"
        },
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
        }
        ],
        correct: 0,
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
                  "en": "Government-issued crypto",
                  "es": "Government-issued crypto",
                  "de": "Government-issued crypto",
                  "nl": "Government-issued crypto"
        },
        {
                  "en": "Most valuable coin",
                  "es": "Most valuable coin",
                  "de": "Most valuable coin",
                  "nl": "Most valuable coin"
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
                  "en": "Distributed Finance",
                  "es": "Distributed Finance",
                  "de": "Distributed Finance",
                  "nl": "Distributed Finance"
        },
        {
                  "en": "Digital Finance",
                  "es": "Digital Finance",
                  "de": "Digital Finance",
                  "nl": "Digital Finance"
        },
        {
                  "en": "Direct Finance",
                  "es": "Direct Finance",
                  "de": "Direct Finance",
                  "nl": "Direct Finance"
        },
        {
                  "en": "Decentralized Finance",
                  "es": "Decentralized Finance",
                  "de": "Decentralized Finance",
                  "nl": "Decentralized Finance"
        }
        ],
        correct: 3,
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
                  "en": "Self-executing contract on blockchain",
                  "es": "Self-executing contract on blockchain",
                  "de": "Self-executing contract on blockchain",
                  "nl": "Self-executing contract on blockchain"
        },
        {
                  "en": "Lawyer agreement",
                  "es": "Lawyer agreement",
                  "de": "Lawyer agreement",
                  "nl": "Lawyer agreement"
        },
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
        }
        ],
        correct: 0,
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
                  "en": "Exchange closure",
                  "es": "Exchange closure",
                  "de": "Exchange closure",
                  "nl": "Exchange closure"
        },
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
                  "en": "Splitting coins in half",
                  "es": "Splitting coins in half",
                  "de": "Splitting coins in half",
                  "nl": "Splitting coins in half"
        }
        ],
        correct: 1,
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
                  "en": "Sell cryptocurrency",
                  "es": "Sell cryptocurrency",
                  "de": "Sell cryptocurrency",
                  "nl": "Sell cryptocurrency"
        },
        {
                  "en": "Buy cryptocurrency",
                  "es": "Buy cryptocurrency",
                  "de": "Buy cryptocurrency",
                  "nl": "Buy cryptocurrency"
        },
        {
                  "en": "Hold cryptocurrency long-term",
                  "es": "Hold cryptocurrency long-term",
                  "de": "Hold cryptocurrency long-term",
                  "nl": "Hold cryptocurrency long-term"
        },
        {
                  "en": "Mine cryptocurrency",
                  "es": "Mine cryptocurrency",
                  "de": "Mine cryptocurrency",
                  "nl": "Mine cryptocurrency"
        }
        ],
        correct: 2,
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
                  "en": "Mining tool",
                  "es": "Mining tool",
                  "de": "Mining tool",
                  "nl": "Mining tool"
        },
        {
                  "en": "Trading strategy",
                  "es": "Trading strategy",
                  "de": "Trading strategy",
                  "nl": "Trading strategy"
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
        },
        {
                  "en": "Wallet fee",
                  "es": "Wallet fee",
                  "de": "Wallet fee",
                  "nl": "Wallet fee"
        }
        ],
        correct: 2,
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
                  "en": "New Finance Token",
                  "es": "New Finance Token",
                  "de": "New Finance Token",
                  "nl": "New Finance Token"
        },
        {
                  "en": "National Fund Token",
                  "es": "National Fund Token",
                  "de": "National Fund Token",
                  "nl": "National Fund Token"
        },
        {
                  "en": "Network Function Token",
                  "es": "Network Function Token",
                  "de": "Network Function Token",
                  "nl": "Network Function Token"
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
        },
        {
                  "en": "Price fluctuation intensity",
                  "es": "Price fluctuation intensity",
                  "de": "Price fluctuation intensity",
                  "nl": "Price fluctuation intensity"
        },
        {
                  "en": "Transaction speed",
                  "es": "Transaction speed",
                  "de": "Transaction speed",
                  "nl": "Transaction speed"
        }
        ],
        correct: 2,
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
    module.exports = level3;
  }
})();