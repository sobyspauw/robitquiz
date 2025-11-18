// Quiz Level 3: Currencies - Cryptocurrency
(function() {
  const level3 = {
    name: {
      en: "Cryptocurrency - Advanced",
      es: "Criptomoneda - Avanzado",
      de: "Kryptowährung - Fortgeschritten",
      nl: "Cryptocurrency - Gevorderd"
    },
    questions: [
      {
        question: {
          en: "What is Proof of Work (PoW) consensus mechanism?",
          es: "¿Qué es el mecanismo de consenso Prueba de Trabajo (PoW)?",
          de: "Was ist der Proof of Work (PoW) Konsensmechanismus?",
          nl: "Wat is het Proof of Work (PoW) consensus mechanisme?"
        },
        options: [
          { en: "Miners compete to solve cryptographic puzzles to validate blocks", es: "Los mineros compiten para resolver acertijos criptográficos para validar bloques", de: "Miner konkurrieren um die Lösung kryptographischer Rätsel zur Blockvalidierung", nl: "Miners concurreren om cryptografische puzzels op te lossen om blokken te valideren" },
          { en: "Validators are chosen based on their stake", es: "Los validadores son elegidos basándose en su participación", de: "Validatoren werden basierend auf ihrem Einsatz ausgewählt", nl: "Validators worden gekozen op basis van hun inzet" },
          { en: "A centralized authority validates all transactions", es: "Una autoridad centralizada valida todas las transacciones", de: "Eine zentrale Autorität validiert alle Transaktionen", nl: "Een gecentraliseerde autoriteit valideert alle transacties" },
          { en: "Users vote on transaction validity", es: "Los usuarios votan sobre la validez de las transacciones", de: "Benutzer stimmen über die Gültigkeit von Transaktionen ab", nl: "Gebruikers stemmen over transactiegeldigheid" }
        ],
        correct: 0,
        explanation: {
          en: "Proof of Work requires miners to solve computationally intensive cryptographic puzzles to validate transactions and create new blocks, securing the network through energy expenditure.",
          es: "La Prueba de Trabajo requiere que los mineros resuelvan acertijos criptográficos computacionalmente intensivos para validar transacciones y crear nuevos bloques, asegurando la red a través del gasto de energía.",
          de: "Proof of Work erfordert, dass Miner rechenintensive kryptographische Rätsel lösen, um Transaktionen zu validieren und neue Blöcke zu erstellen, wodurch das Netzwerk durch Energieaufwand gesichert wird.",
          nl: "Proof of Work vereist dat miners rekenintensieve cryptografische puzzels oplossen om transacties te valideren en nieuwe blokken te maken, waardoor het netwerk wordt beveiligd door energieverbruik."
        }
      },
      {
        question: {
          en: "What is Proof of Stake (PoS) and how does it differ from PoW?",
          es: "¿Qué es la Prueba de Participación (PoS) y en qué se diferencia de PoW?",
          de: "Was ist Proof of Stake (PoS) und wie unterscheidet es sich von PoW?",
          nl: "Wat is Proof of Stake (PoS) en hoe verschilt het van PoW?"
        },
        options: [
          { en: "PoS is identical to PoW in energy consumption", es: "PoS es idéntico a PoW en consumo de energía", de: "PoS ist identisch mit PoW im Energieverbrauch", nl: "PoS is identiek aan PoW in energieverbruik" },
          { en: "PoS selects validators based on stake ownership, using less energy than PoW", es: "PoS selecciona validadores basándose en la propiedad de participación, usando menos energía que PoW", de: "PoS wählt Validatoren basierend auf Stake-Besitz aus und verbraucht weniger Energie als PoW", nl: "PoS selecteert validators op basis van stake eigendom, met minder energieverbruik dan PoW" },
          { en: "PoS requires more computational power than PoW", es: "PoS requiere más poder computacional que PoW", de: "PoS erfordert mehr Rechenleistung als PoW", nl: "PoS vereist meer rekenkracht dan PoW" },
          { en: "PoS and PoW are just different names for the same thing", es: "PoS y PoW son solo nombres diferentes para lo mismo", de: "PoS und PoW sind nur verschiedene Namen für dasselbe", nl: "PoS en PoW zijn gewoon verschillende namen voor hetzelfde" }
        ],
        correct: 1,
        explanation: {
          en: "Proof of Stake selects validators to create new blocks based on the amount of cryptocurrency they hold and are willing to 'stake', consuming significantly less energy than PoW mining.",
          es: "La Prueba de Participación selecciona validadores para crear nuevos bloques basándose en la cantidad de criptomoneda que poseen y están dispuestos a 'apostar', consumiendo significativamente menos energía que la minería PoW.",
          de: "Proof of Stake wählt Validatoren zur Erstellung neuer Blöcke basierend auf der Menge an Kryptowährung aus, die sie besitzen und bereit sind zu 'staken', und verbraucht deutlich weniger Energie als PoW-Mining.",
          nl: "Proof of Stake selecteert validators om nieuwe blokken te maken op basis van de hoeveelheid cryptocurrency die ze bezitten en bereid zijn te 'staken', met aanzienlijk minder energieverbruik dan PoW mining."
        }
      },
      {
        question: {
          en: "What is a 51% attack in blockchain networks?",
          es: "¿Qué es un ataque del 51% en las redes blockchain?",
          de: "Was ist ein 51%-Angriff in Blockchain-Netzwerken?",
          nl: "Wat is een 51% aanval in blockchain netwerken?"
        },
        options: [
          { en: "When 51% of users lose their private keys", es: "Cuando el 51% de los usuarios pierden sus claves privadas", de: "Wenn 51% der Benutzer ihre privaten Schlüssel verlieren", nl: "Wanneer 51% van de gebruikers hun private keys verliezen" },
          { en: "When a single entity controls majority of network's mining power", es: "Cuando una sola entidad controla la mayoría del poder de minería de la red", de: "Wenn eine einzelne Entität die Mehrheit der Mining-Power des Netzwerks kontrolliert", nl: "Wanneer een enkele entiteit de meerderheid van de mining power van het netwerk controleert" },
          { en: "When 51% of transactions fail", es: "Cuando el 51% de las transacciones fallan", de: "Wenn 51% der Transaktionen fehlschlagen", nl: "Wanneer 51% van de transacties mislukken" },
          { en: "When cryptocurrency price drops by 51%", es: "Cuando el precio de la criptomoneda cae un 51%", de: "Wenn der Kryptowährungspreis um 51% fällt", nl: "Wanneer de cryptocurrency prijs met 51% daalt" }
        ],
        correct: 1,
        explanation: {
          en: "A 51% attack occurs when a single entity gains control of more than half of a blockchain network's mining power, potentially allowing them to reverse transactions and double-spend coins.",
          es: "Un ataque del 51% ocurre cuando una sola entidad obtiene control de más de la mitad del poder de minería de una red blockchain, potencialmente permitiéndoles revertir transacciones y gastar monedas dobles.",
          de: "Ein 51%-Angriff tritt auf, wenn eine einzelne Entität die Kontrolle über mehr als die Hälfte der Mining-Power eines Blockchain-Netzwerks erlangt, wodurch sie möglicherweise Transaktionen rückgängig machen und Coins doppelt ausgeben können.",
          nl: "Een 51% aanval treedt op wanneer een enkele entiteit controle krijgt over meer dan de helft van de mining power van een blockchain netwerk, waardoor ze mogelijk transacties kunnen omkeren en coins dubbel kunnen uitgeven."
        }
      },
      {
        question: {
          en: "What are Layer 2 scaling solutions in blockchain?",
          es: "¿Qué son las soluciones de escalabilidad de Capa 2 en blockchain?",
          de: "Was sind Layer-2-Skalierungslösungen in der Blockchain?",
          nl: "Wat zijn Layer 2 schaaloplossingen in blockchain?"
        },
        options: [
          { en: "Secondary blockchains that process transactions off the main chain", es: "Blockchains secundarias que procesan transacciones fuera de la cadena principal", de: "Sekundäre Blockchains, die Transaktionen außerhalb der Hauptkette verarbeiten", nl: "Secundaire blockchains die transacties buiten de hoofdketen verwerken" },
          { en: "Physical hardware upgrades to mining equipment", es: "Actualizaciones físicas de hardware para equipos de minería", de: "Physische Hardware-Upgrades für Mining-Ausrüstung", nl: "Fysieke hardware upgrades voor mining apparatuur" },
          { en: "A second version of the original blockchain", es: "Una segunda versión de la blockchain original", de: "Eine zweite Version der ursprünglichen Blockchain", nl: "Een tweede versie van de oorspronkelijke blockchain" },
          { en: "Additional security layers for wallets", es: "Capas adicionales de seguridad para billeteras", de: "Zusätzliche Sicherheitsschichten für Wallets", nl: "Extra beveiligingslagen voor wallets" }
        ],
        correct: 0,
        explanation: {
          en: "Layer 2 solutions like Lightning Network or Polygon process transactions off-chain and then settle on the main blockchain, improving scalability and reducing fees while maintaining security.",
          es: "Las soluciones de Capa 2 como Lightning Network o Polygon procesan transacciones fuera de la cadena y luego se liquidan en la blockchain principal, mejorando la escalabilidad y reduciendo las tarifas mientras mantienen la seguridad.",
          de: "Layer-2-Lösungen wie Lightning Network oder Polygon verarbeiten Transaktionen off-chain und setteln dann auf der Haupt-Blockchain, wodurch Skalierbarkeit verbessert und Gebühren reduziert werden bei Beibehaltung der Sicherheit.",
          nl: "Layer 2 oplossingen zoals Lightning Network of Polygon verwerken transacties off-chain en regelen dan af op de hoofdblockchain, waardoor schaalbaarheid wordt verbeterd en kosten worden verlaagd terwijl beveiliging behouden blijft."
        }
      },
      {
        question: {
          en: "What is atomic swaps in cryptocurrency?",
          es: "¿Qué son los intercambios atómicos en criptomonedas?",
          de: "Was sind Atomic Swaps bei Kryptowährungen?",
          nl: "Wat zijn atomic swaps in cryptocurrency?"
        },
        options: [
          { en: "Very small cryptocurrency transactions", es: "Transacciones de criptomonedas muy pequeñas", de: "Sehr kleine Kryptowährungstransaktionen", nl: "Zeer kleine cryptocurrency transacties" },
          { en: "Cross-chain exchanges without intermediaries using smart contracts", es: "Intercambios entre cadenas sin intermediarios usando contratos inteligentes", de: "Cross-Chain-Börsen ohne Zwischenhändler mit Smart Contracts", nl: "Cross-chain uitwisselingen zonder tussenpersonen met smart contracts" },
          { en: "Splitting cryptocurrency into smaller denominations", es: "Dividir criptomonedas en denominaciones más pequeñas", de: "Aufteilen von Kryptowährungen in kleinere Stückelungen", nl: "Cryptocurrency splitsen in kleinere denominaties" },
          { en: "Nuclear-powered mining operations", es: "Operaciones de minería alimentadas por energía nuclear", de: "Nuklear-betriebene Mining-Operationen", nl: "Nucleair-aangedreven mining operaties" }
        ],
        correct: 1,
        explanation: {
          en: "Atomic swaps enable direct peer-to-peer exchanges of different cryptocurrencies across different blockchains without trusted intermediaries, using hash time-locked contracts.",
          es: "Los intercambios atómicos permiten intercambios directos peer-to-peer de diferentes criptomonedas a través de diferentes blockchains sin intermediarios de confianza, usando contratos bloqueados por tiempo hash.",
          de: "Atomic Swaps ermöglichen direkte Peer-to-Peer-Börsen verschiedener Kryptowährungen über verschiedene Blockchains ohne vertrauenswürdige Zwischenhändler, unter Verwendung von Hash-Time-Locked-Contracts.",
          nl: "Atomic swaps maken directe peer-to-peer uitwisselingen mogelijk van verschillende cryptocurrencies over verschillende blockchains zonder vertrouwde tussenpersonen, met gebruik van hash time-locked contracts."
        }
      },
      {
        question: {
          en: "What is cryptocurrency sharding?",
          es: "¿Qué es el sharding de criptomonedas?",
          de: "Was ist Kryptowährungs-Sharding?",
          nl: "Wat is cryptocurrency sharding?"
        },
        options: [
          { en: "Breaking private keys into pieces for security", es: "Romper claves privadas en pedazos para seguridad", de: "Private Schlüssel für Sicherheit in Stücke brechen", nl: "Private keys in stukken breken voor beveiliging" },
          { en: "Partitioning blockchain database to improve scalability", es: "Particionar la base de datos blockchain para mejorar la escalabilidad", de: "Partitionierung der Blockchain-Datenbank zur Verbesserung der Skalierbarkeit", nl: "Partitioneren van blockchain database om schaalbaarheid te verbeteren" },
          { en: "Mining cryptocurrency with broken hardware", es: "Minar criptomonedas con hardware roto", de: "Kryptowährung mit defekter Hardware minen", nl: "Cryptocurrency minen met kapotte hardware" },
          { en: "Splitting cryptocurrency communities into factions", es: "Dividir comunidades de criptomonedas en facciones", de: "Kryptowährungs-Communities in Fraktionen aufteilen", nl: "Cryptocurrency gemeenschappen in facties splitsen" }
        ],
        correct: 1,
        explanation: {
          en: "Sharding divides the blockchain database into smaller, parallel chains (shards) that can process transactions simultaneously, significantly improving network throughput and scalability.",
          es: "El sharding divide la base de datos blockchain en cadenas más pequeñas y paralelas (fragmentos) que pueden procesar transacciones simultáneamente, mejorando significativamente el rendimiento y escalabilidad de la red.",
          de: "Sharding teilt die Blockchain-Datenbank in kleinere, parallele Ketten (Shards) auf, die Transaktionen gleichzeitig verarbeiten können, wodurch Netzwerkdurchsatz und Skalierbarkeit erheblich verbessert werden.",
          nl: "Sharding verdeelt de blockchain database in kleinere, parallelle ketens (shards) die transacties gelijktijdig kunnen verwerken, waardoor netwerkdoorvoer en schaalbaarheid aanzienlijk worden verbeterd."
        }
      },
      {
        question: {
          en: "What is a cryptocurrency oracle?",
          es: "¿Qué es un oráculo de criptomonedas?",
          de: "Was ist ein Kryptowährungs-Oracle?",
          nl: "Wat is een cryptocurrency oracle?"
        },
        options: [
          { en: "A fortune teller who predicts crypto prices", es: "Un adivino que predice precios de criptomonedas", de: "Ein Wahrsager, der Krypto-Preise vorhersagt", nl: "Een waarzegger die crypto prijzen voorspelt" },
          { en: "External data source that provides real-world information to smart contracts", es: "Fuente de datos externa que proporciona información del mundo real a contratos inteligentes", de: "Externe Datenquelle, die reale Informationen an Smart Contracts liefert", nl: "Externe databron die real-world informatie levert aan smart contracts" },
          { en: "A type of cryptocurrency exchange", es: "Un tipo de intercambio de criptomonedas", de: "Eine Art Kryptowährungsbörse", nl: "Een type cryptocurrency exchange" },
          { en: "Advanced AI for trading algorithms", es: "IA avanzada para algoritmos de trading", de: "Fortgeschrittene KI für Trading-Algorithmen", nl: "Geavanceerde AI voor handelsalgoritmes" }
        ],
        correct: 1,
        explanation: {
          en: "Cryptocurrency oracles are third-party services that fetch and verify real-world data (prices, weather, sports scores) and feed it to blockchain smart contracts that cannot access external data directly.",
          es: "Los oráculos de criptomonedas son servicios de terceros que obtienen y verifican datos del mundo real (precios, clima, puntuaciones deportivas) y los alimentan a contratos inteligentes de blockchain que no pueden acceder a datos externos directamente.",
          de: "Kryptowährungs-Oracles sind Drittanbieter-Services, die reale Daten (Preise, Wetter, Sport-Ergebnisse) abrufen und verifizieren und diese an Blockchain-Smart-Contracts weiterleiten, die nicht direkt auf externe Daten zugreifen können.",
          nl: "Cryptocurrency oracles zijn derde partij services die real-world data (prijzen, weer, sportuitslagen) ophalen en verifiëren en deze doorgeven aan blockchain smart contracts die niet direct toegang hebben tot externe data."
        }
      },
      {
        question: {
          en: "What is cryptocurrency slashing in Proof of Stake?",
          es: "¿Qué es el slashing de criptomonedas en Prueba de Participación?",
          de: "Was ist Kryptowährungs-Slashing bei Proof of Stake?",
          nl: "Wat is cryptocurrency slashing in Proof of Stake?"
        },
        options: [
          { en: "Reducing cryptocurrency prices dramatically", es: "Reducir los precios de criptomonedas dramáticamente", de: "Kryptowährungspreise dramatisch reduzieren", nl: "Cryptocurrency prijzen dramatisch verlagen" },
          { en: "Penalty mechanism that destroys staked tokens for malicious behavior", es: "Mecanismo de penalización que destruye tokens apostados por comportamiento malicioso", de: "Bestrafungsmechanismus, der gestakte Token für böswilliges Verhalten zerstört", nl: "Strafmechanisme dat gestakte tokens vernietigt voor kwaadaardig gedrag" },
          { en: "Cutting transaction fees in half", es: "Reducir las tarifas de transacción a la mitad", de: "Transaktionsgebühren halbieren", nl: "Transactiekosten halveren" },
          { en: "A trading strategy for quick profits", es: "Una estrategia de trading para ganancias rápidas", de: "Eine Trading-Strategie für schnelle Gewinne", nl: "Een handelsstrategie voor snelle winsten" }
        ],
        correct: 1,
        explanation: {
          en: "Slashing is a penalty mechanism in PoS networks where validators lose a portion of their staked tokens if they act maliciously, attempt double-signing, or go offline for extended periods.",
          es: "El slashing es un mecanismo de penalización en redes PoS donde los validadores pierden una porción de sus tokens apostados si actúan maliciosamente, intentan firmar doble, o se desconectan por períodos extendidos.",
          de: "Slashing ist ein Bestrafungsmechanismus in PoS-Netzwerken, bei dem Validatoren einen Teil ihrer gestakten Token verlieren, wenn sie böswillig handeln, Double-Signing versuchen oder für längere Zeit offline gehen.",
          nl: "Slashing is een strafmechanisme in PoS netwerken waarbij validators een deel van hun gestakte tokens verliezen als ze kwaadaardig handelen, double-signing proberen, of voor langere tijd offline gaan."
        }
      },
      {
        question: {
          en: "What is Maximum Extractable Value (MEV) in blockchain?",
          es: "¿Qué es el Valor Extraíble Máximo (MEV) en blockchain?",
          de: "Was ist Maximum Extractable Value (MEV) in der Blockchain?",
          nl: "Wat is Maximum Extractable Value (MEV) in blockchain?"
        },
        options: [
          { en: "The maximum price a cryptocurrency can reach", es: "El precio máximo que puede alcanzar una criptomoneda", de: "Der Höchstpreis, den eine Kryptowährung erreichen kann", nl: "De maximumprijs die een cryptocurrency kan bereiken" },
          { en: "Profit miners/validators can extract by reordering transactions", es: "Ganancia que los mineros/validadores pueden extraer reordenando transacciones", de: "Gewinn, den Miner/Validatoren durch Neuanordnung von Transaktionen extrahieren können", nl: "Winst die miners/validators kunnen behalen door transacties te herordenen" },
          { en: "Maximum storage capacity of a blockchain", es: "Capacidad máxima de almacenamiento de una blockchain", de: "Maximale Speicherkapazität einer Blockchain", nl: "Maximale opslagcapaciteit van een blockchain" },
          { en: "The most valuable NFT in a collection", es: "El NFT más valioso en una colección", de: "Das wertvollste NFT in einer Sammlung", nl: "De meest waardevolle NFT in een collectie" }
        ],
        correct: 1,
        explanation: {
          en: "MEV represents the maximum profit that miners or validators can extract by reordering, including, or excluding transactions within blocks they produce, often through front-running or sandwich attacks.",
          es: "MEV representa la ganancia máxima que los mineros o validadores pueden extraer reordenando, incluyendo o excluyendo transacciones dentro de los bloques que producen, a menudo a través de front-running o ataques sandwich.",
          de: "MEV stellt den maximalen Gewinn dar, den Miner oder Validatoren durch Neuanordnung, Einbeziehung oder Ausschluss von Transaktionen in von ihnen produzierten Blöcken extrahieren können, oft durch Front-Running oder Sandwich-Angriffe.",
          nl: "MEV vertegenwoordigt de maximale winst die miners of validators kunnen behalen door transacties te herordenen, in- of uitsluiten binnen blokken die ze produceren, vaak door front-running of sandwich aanvallen."
        }
      },
      {
        question: {
          en: "What is a cryptocurrency rug pull?",
          es: "¿Qué es un rug pull de criptomonedas?",
          de: "Was ist ein Kryptowährungs-Rug-Pull?",
          nl: "Wat is een cryptocurrency rug pull?"
        },
        options: [
          { en: "A legitimate marketing strategy for new tokens", es: "Una estrategia de marketing legítima para nuevos tokens", de: "Eine legitime Marketingstrategie für neue Token", nl: "Een legitieme marketingstrategie voor nieuwe tokens" },
          { en: "Scam where developers abandon project and steal investor funds", es: "Estafa donde los desarrolladores abandonan el proyecto y roban fondos de inversores", de: "Betrug, bei dem Entwickler das Projekt verlassen und Investorengelder stehlen", nl: "Oplichting waarbij ontwikkelaars het project verlaten en investeerdersfondsenstelen" },
          { en: "A technical upgrade to improve blockchain performance", es: "Una actualización técnica para mejorar el rendimiento de blockchain", de: "Ein technisches Upgrade zur Verbesserung der Blockchain-Leistung", nl: "Een technische upgrade om blockchain prestaties te verbeteren" },
          { en: "Removing outdated cryptocurrencies from exchanges", es: "Eliminar criptomonedas obsoletas de los intercambios", de: "Veraltete Kryptowährungen von Börsen entfernen", nl: "Verouderde cryptocurrencies van exchanges verwijderen" }
        ],
        correct: 1,
        explanation: {
          en: "A rug pull is a cryptocurrency scam where developers promote a new token, attract investors, then suddenly withdraw all liquidity and abandon the project, leaving investors with worthless tokens.",
          es: "Un rug pull es una estafa de criptomonedas donde los desarrolladores promueven un nuevo token, atraen inversores, luego retiran repentinamente toda la liquidez y abandonan el proyecto, dejando a los inversores con tokens sin valor.",
          de: "Ein Rug Pull ist ein Kryptowährungsbetrug, bei dem Entwickler einen neuen Token bewerben, Investoren anlocken, dann plötzlich alle Liquidität abziehen und das Projekt verlassen, wodurch Investoren mit wertlosen Token zurückbleiben.",
          nl: "Een rug pull is een cryptocurrency oplichting waarbij ontwikkelaars een nieuwe token promoten, investeerders aantrekken, dan plotseling alle liquiditeit wegtrekken en het project verlaten, waardoor investeerders met waardeloze tokens achterblijven."
        }
      },
      {
        question: {
          en: "What is cryptocurrency front-running?",
          es: "¿Qué es el front-running de criptomonedas?",
          de: "Was ist Kryptowährungs-Front-Running?",
          nl: "Wat is cryptocurrency front-running?"
        },
        options: [
          { en: "Running mining software before others start", es: "Ejecutar software de minería antes que otros comiencen", de: "Mining-Software vor anderen starten", nl: "Mining software draaien voordat anderen beginnen" },
          { en: "Placing orders ahead of known large transactions for profit", es: "Colocar órdenes antes de transacciones grandes conocidas para obtener ganancias", de: "Aufträge vor bekannten großen Transaktionen für Gewinn platzieren", nl: "Orders plaatsen voorafgaand aan bekende grote transacties voor winst" },
          { en: "Being the first to mine a new cryptocurrency", es: "Ser el primero en minar una nueva criptomoneda", de: "Der erste sein, der eine neue Kryptowährung mint", nl: "De eerste zijn die een nieuwe cryptocurrency mint" },
          { en: "Leading a cryptocurrency project development", es: "Liderar el desarrollo de un proyecto de criptomonedas", de: "Die Entwicklung eines Kryptowährungsprojekts leiten", nl: "Het leiden van een cryptocurrency projectontwikkeling" }
        ],
        correct: 1,
        explanation: {
          en: "Front-running occurs when someone places a transaction with higher gas fees to execute before a known pending transaction, profiting from the price movement they anticipate.",
          es: "El front-running ocurre cuando alguien coloca una transacción con tarifas de gas más altas para ejecutar antes de una transacción pendiente conocida, obteniendo ganancias del movimiento de precios que anticipan.",
          de: "Front-Running tritt auf, wenn jemand eine Transaktion mit höheren Gas-Gebühren platziert, um vor einer bekannten ausstehenden Transaktion auszuführen und von der erwarteten Preisbewegung zu profitieren.",
          nl: "Front-running treedt op wanneer iemand een transactie plaatst met hogere gaskosten om uit te voeren voor een bekende uitstaande transactie, profiterend van de prijsbeweging die ze verwachten."
        }
      },
      {
        question: {
          en: "What is a cryptocurrency flash loan?",
          es: "¿Qué es un préstamo flash de criptomonedas?",
          de: "Was ist ein Kryptowährungs-Flash-Darlehen?",
          nl: "Wat is een cryptocurrency flash loan?"
        },
        options: [
          { en: "Very fast traditional bank loans for crypto purchases", es: "Préstamos bancarios tradicionales muy rápidos para compras de criptomonedas", de: "Sehr schnelle traditionelle Bankkredite für Krypto-Käufe", nl: "Zeer snelle traditionele bankleningen voor crypto aankopen" },
          { en: "Uncollateralized loan that must be repaid within same transaction", es: "Préstamo sin garantía que debe ser pagado dentro de la misma transacción", de: "Unbesichertes Darlehen, das innerhalb derselben Transaktion zurückgezahlt werden muss", nl: "Lening zonder onderpand die binnen dezelfde transactie moet worden terugbetaald" },
          { en: "Loans that are approved instantly", es: "Préstamos que se aprueban instantáneamente", de: "Darlehen, die sofort genehmigt werden", nl: "Leningen die direct worden goedgekeurd" },
          { en: "Short-term loans with very high interest rates", es: "Préstamos a corto plazo con tasas de interés muy altas", de: "Kurzfristige Darlehen mit sehr hohen Zinssätzen", nl: "Kortetermijnleningen met zeer hoge rentetarieven" }
        ],
        correct: 1,
        explanation: {
          en: "Flash loans are uncollateralized loans that allow borrowing large amounts of cryptocurrency that must be repaid within the same blockchain transaction, often used for arbitrage or complex DeFi strategies.",
          es: "Los préstamos flash son préstamos sin garantía que permiten pedir prestadas grandes cantidades de criptomonedas que deben ser pagadas dentro de la misma transacción blockchain, a menudo usados para arbitraje o estrategias DeFi complejas.",
          de: "Flash-Darlehen sind unbesicherte Darlehen, die das Ausleihen großer Mengen an Kryptowährung ermöglichen, die innerhalb derselben Blockchain-Transaktion zurückgezahlt werden müssen, oft für Arbitrage oder komplexe DeFi-Strategien verwendet.",
          nl: "Flash loans zijn leningen zonder onderpand die het mogelijk maken grote hoeveelheden cryptocurrency te lenen die binnen dezelfde blockchain transactie moeten worden terugbetaald, vaak gebruikt voor arbitrage of complexe DeFi strategieën."
        }
      },
      {
        question: {
          en: "What is cryptocurrency impermanent loss?",
          es: "¿Qué es la pérdida impermanente de criptomonedas?",
          de: "Was ist Kryptowährungs-Impermanent Loss?",
          nl: "Wat is cryptocurrency impermanent loss?"
        },
        options: [
          { en: "Temporary server downtime on exchanges", es: "Tiempo de inactividad temporal del servidor en intercambios", de: "Vorübergehende Server-Ausfallzeit an Börsen", nl: "Tijdelijke serveruitval op exchanges" },
          { en: "Loss liquidity providers face when token prices diverge in a pool", es: "Pérdida que enfrentan los proveedores de liquidez cuando los precios de tokens divergen en un pool", de: "Verlust, dem Liquiditätsanbieter gegenüberstehen, wenn Token-Preise in einem Pool divergieren", nl: "Verlies dat liquiditeitsverschaffers ondervinden wanneer tokenprijzen divergeren in een pool" },
          { en: "Cryptocurrency that can be recovered later", es: "Criptomoneda que puede ser recuperada más tarde", de: "Kryptowährung, die später wiederhergestellt werden kann", nl: "Cryptocurrency die later kan worden hersteld" },
          { en: "Minor fluctuations in trading volume", es: "Fluctuaciones menores en volumen de trading", de: "Geringe Schwankungen im Handelsvolumen", nl: "Kleine schommelingen in handelsvolume" }
        ],
        correct: 1,
        explanation: {
          en: "Impermanent loss occurs when liquidity providers in automated market makers experience loss compared to simply holding tokens, due to price divergence between paired assets in the pool.",
          es: "La pérdida impermanente ocurre cuando los proveedores de liquidez en creadores de mercado automatizados experimentan pérdidas comparado con simplemente mantener tokens, debido a la divergencia de precios entre activos emparejados en el pool.",
          de: "Impermanent Loss tritt auf, wenn Liquiditätsanbieter in automatisierten Market Makern Verluste im Vergleich zum einfachen Halten von Token erleiden, aufgrund von Preisdivergenz zwischen gepaarten Assets im Pool.",
          nl: "Impermanent loss treedt op wanneer liquiditeitsverschaffers in automated market makers verlies ervaren vergeleken met het simpelweg vasthouden van tokens, door prijsdivergentie tussen gepaarde assets in de pool."
        }
      },
      {
        question: {
          en: "What is a cryptocurrency yield farm?",
          es: "¿Qué es un yield farm de criptomonedas?",
          de: "Was ist ein Kryptowährungs-Yield-Farm?",
          nl: "Wat is een cryptocurrency yield farm?"
        },
        options: [
          { en: "Physical farms that mine cryptocurrency using solar power", es: "Granjas físicas que minan criptomonedas usando energía solar", de: "Physische Farmen, die Kryptowährung mit Solarenergie minen", nl: "Fysieke boerderijen die cryptocurrency minen met zonne-energie" },
          { en: "Strategy of earning rewards by providing liquidity to DeFi protocols", es: "Estrategia de ganar recompensas proporcionando liquidez a protocolos DeFi", de: "Strategie zur Gewinnerzielung durch Bereitstellung von Liquidität für DeFi-Protokolle", nl: "Strategie om beloningen te verdienen door liquiditeit te verstrekken aan DeFi protocollen" },
          { en: "Agricultural projects funded by cryptocurrency", es: "Proyectos agrícolas financiados por criptomonedas", de: "Landwirtschaftliche Projekte, die durch Kryptowährung finanziert werden", nl: "Landbouwprojecten gefinancierd door cryptocurrency" },
          { en: "Cryptocurrency exchanges located in rural areas", es: "Intercambios de criptomonedas ubicados en áreas rurales", de: "Kryptowährungsbörsen in ländlichen Gebieten", nl: "Cryptocurrency exchanges gelegen in landelijke gebieden" }
        ],
        correct: 1,
        explanation: {
          en: "Yield farming involves providing cryptocurrency to DeFi protocols (lending platforms, liquidity pools) to earn rewards, often in the form of additional tokens or interest payments.",
          es: "El yield farming involucra proporcionar criptomonedas a protocolos DeFi (plataformas de préstamo, pools de liquidez) para ganar recompensas, a menudo en forma de tokens adicionales o pagos de interés.",
          de: "Yield Farming beinhaltet die Bereitstellung von Kryptowährung an DeFi-Protokolle (Kreditplattformen, Liquiditätspools), um Belohnungen zu verdienen, oft in Form zusätzlicher Token oder Zinszahlungen.",
          nl: "Yield farming houdt in dat cryptocurrency wordt verstrekt aan DeFi protocollen (leenplatforms, liquiditeitspools) om beloningen te verdienen, vaak in de vorm van extra tokens of rentebetalingen."
        }
      },
      {
        question: {
          en: "What is a cryptocurrency multisig wallet?",
          es: "¿Qué es una billetera multisig de criptomonedas?",
          de: "Was ist eine Kryptowährungs-Multisig-Wallet?",
          nl: "Wat is een cryptocurrency multisig wallet?"
        },
        options: [
          { en: "Wallet that supports multiple cryptocurrencies", es: "Billetera que soporta múltiples criptomonedas", de: "Wallet, die mehrere Kryptowährungen unterstützt", nl: "Wallet die meerdere cryptocurrencies ondersteunt" },
          { en: "Wallet requiring multiple signatures to authorize transactions", es: "Billetera que requiere múltiples firmas para autorizar transacciones", de: "Wallet, die mehrere Signaturen zur Transaktionsautorisierung benötigt", nl: "Wallet die meerdere handtekeningen vereist om transacties te autoriseren" },
          { en: "Wallet with multiple backup copies", es: "Billetera con múltiples copias de respaldo", de: "Wallet mit mehreren Backup-Kopien", nl: "Wallet met meerdere backup kopieën" },
          { en: "Wallet that can be accessed from multiple devices", es: "Billetera a la que se puede acceder desde múltiples dispositivos", de: "Wallet, auf die von mehreren Geräten zugegriffen werden kann", nl: "Wallet die toegankelijk is vanaf meerdere apparaten" }
        ],
        correct: 1,
        explanation: {
          en: "A multisig wallet requires multiple private key signatures (e.g., 2-of-3, 3-of-5) to authorize transactions, providing enhanced security and shared control over funds.",
          es: "Una billetera multisig requiere múltiples firmas de claves privadas (ej. 2-de-3, 3-de-5) para autorizar transacciones, proporcionando seguridad mejorada y control compartido sobre los fondos.",
          de: "Eine Multisig-Wallet erfordert mehrere private Schlüsselsignaturen (z.B. 2-von-3, 3-von-5) zur Transaktionsautorisierung und bietet verbesserte Sicherheit und geteilte Kontrolle über Gelder.",
          nl: "Een multisig wallet vereist meerdere private key handtekeningen (bijv. 2-van-3, 3-van-5) om transacties te autoriseren, wat verbeterde beveiliging en gedeelde controle over fondsen biedt."
        }
      },
      {
        question: {
          en: "What is cryptocurrency governance token?",
          es: "¿Qué es un token de gobernanza de criptomonedas?",
          de: "Was ist ein Kryptowährungs-Governance-Token?",
          nl: "Wat is een cryptocurrency governance token?"
        },
        options: [
          { en: "Token issued by government agencies", es: "Token emitido por agencias gubernamentales", de: "Token, der von Regierungsbehörden ausgegeben wird", nl: "Token uitgegeven door overheidsinstanties" },
          { en: "Token that gives holders voting rights in protocol decisions", es: "Token que otorga a los poseedores derechos de voto en decisiones del protocolo", de: "Token, der Inhabern Stimmrechte bei Protokollentscheidungen gewährt", nl: "Token die houders stemrechten geeft in protocolbeslissingen" },
          { en: "Token that represents ownership of a company", es: "Token que representa la propiedad de una empresa", de: "Token, der das Eigentum an einem Unternehmen darstellt", nl: "Token die eigendom van een bedrijf vertegenwoordigt" },
          { en: "Token used to pay for transaction fees", es: "Token usado para pagar tarifas de transacción", de: "Token zur Zahlung von Transaktionsgebühren", nl: "Token gebruikt om transactiekosten te betalen" }
        ],
        correct: 1,
        explanation: {
          en: "Governance tokens give holders voting rights to participate in protocol decisions such as parameter changes, upgrades, or fund allocation in decentralized autonomous organizations (DAOs).",
          es: "Los tokens de gobernanza otorgan a los poseedores derechos de voto para participar en decisiones del protocolo como cambios de parámetros, actualizaciones o asignación de fondos en organizaciones autónomas descentralizadas (DAOs).",
          de: "Governance-Token gewähren Inhabern Stimmrechte zur Teilnahme an Protokollentscheidungen wie Parameteränderungen, Upgrades oder Mittelzuteilung in dezentralen autonomen Organisationen (DAOs).",
          nl: "Governance tokens geven houders stemrechten om deel te nemen aan protocolbeslissingen zoals parameterwijzigingen, upgrades of fondstoewijzing in gedecentraliseerde autonome organisaties (DAOs)."
        }
      },
      {
        question: {
          en: "What is a cryptocurrency liquidity pool?",
          es: "¿Qué es un pool de liquidez de criptomonedas?",
          de: "Was ist ein Kryptowährungs-Liquiditätspool?",
          nl: "Wat is een cryptocurrency liquiditeitspool?"
        },
        options: [
          { en: "A swimming pool for cryptocurrency miners", es: "Una piscina para mineros de criptomonedas", de: "Ein Schwimmbad für Kryptowährungs-Miner", nl: "Een zwembad voor cryptocurrency miners" },
          { en: "Collection of funds locked in smart contract to facilitate trading", es: "Colección de fondos bloqueados en contrato inteligente para facilitar el trading", de: "Sammlung von Geldern, die in Smart Contracts gesperrt sind, um den Handel zu erleichtern", nl: "Verzameling van fondsen vergrendeld in smart contract om handel te faciliteren" },
          { en: "Group of investors pooling money for crypto purchases", es: "Grupo de inversores juntando dinero para compras de criptomonedas", de: "Gruppe von Investoren, die Geld für Krypto-Käufe zusammenlegen", nl: "Groep investeerders die geld bundelen voor crypto aankopen" },
          { en: "Reserve of cryptocurrency held by exchanges", es: "Reserva de criptomonedas mantenida por intercambios", de: "Reserve an Kryptowährung, die von Börsen gehalten wird", nl: "Reserve van cryptocurrency aangehouden door exchanges" }
        ],
        correct: 1,
        explanation: {
          en: "A liquidity pool is a collection of cryptocurrencies locked in a smart contract that provides liquidity for decentralized exchanges, enabling automated trading without traditional order books.",
          es: "Un pool de liquidez es una colección de criptomonedas bloqueadas en un contrato inteligente que proporciona liquidez para intercambios descentralizados, permitiendo trading automatizado sin libros de órdenes tradicionales.",
          de: "Ein Liquiditätspool ist eine Sammlung von Kryptowährungen, die in einem Smart Contract gesperrt sind und Liquidität für dezentrale Börsen bereitstellen, wodurch automatisierter Handel ohne traditionelle Orderbücher ermöglicht wird.",
          nl: "Een liquiditeitspool is een verzameling cryptocurrencies vergrendeld in een smart contract dat liquiditeit biedt voor gedecentraliseerde exchanges, waardoor geautomatiseerde handel mogelijk wordt zonder traditionele orderboeken."
        }
      },
      {
        question: {
          en: "What is cryptocurrency arbitrage?",
          es: "¿Qué es el arbitraje de criptomonedas?",
          de: "Was ist Kryptowährungs-Arbitrage?",
          nl: "Wat is cryptocurrency arbitrage?"
        },
        options: [
          { en: "Legal disputes over cryptocurrency ownership", es: "Disputas legales sobre propiedad de criptomonedas", de: "Rechtstreitigkeiten über Kryptowährungs-Eigentum", nl: "Juridische geschillen over cryptocurrency eigendom" },
          { en: "Profiting from price differences across different exchanges", es: "Obtener ganancias de diferencias de precios a través de diferentes intercambios", de: "Gewinn aus Preisunterschieden zwischen verschiedenen Börsen", nl: "Winst maken uit prijsverschillen tussen verschillende exchanges" },
          { en: "Random selection of cryptocurrencies for investment", es: "Selección aleatoria de criptomonedas para inversión", de: "Zufällige Auswahl von Kryptowährungen für Investitionen", nl: "Willekeurige selectie van cryptocurrencies voor investering" },
          { en: "Government regulation of cryptocurrency markets", es: "Regulación gubernamental de mercados de criptomonedas", de: "Regierungsregulierung von Kryptowährungsmärkten", nl: "Overheidsregulering van cryptocurrency markten" }
        ],
        correct: 1,
        explanation: {
          en: "Cryptocurrency arbitrage involves buying cryptocurrency on one exchange where the price is lower and simultaneously selling it on another exchange where the price is higher, profiting from the price difference.",
          es: "El arbitraje de criptomonedas involucra comprar criptomonedas en un intercambio donde el precio es más bajo y simultáneamente venderla en otro intercambio donde el precio es más alto, obteniendo ganancias de la diferencia de precios.",
          de: "Kryptowährungs-Arbitrage beinhaltet den Kauf von Kryptowährung an einer Börse, wo der Preis niedriger ist, und den gleichzeitigen Verkauf an einer anderen Börse, wo der Preis höher ist, um von der Preisdifferenz zu profitieren.",
          nl: "Cryptocurrency arbitrage houdt in dat cryptocurrency wordt gekocht op een exchange waar de prijs lager is en tegelijkertijd wordt verkocht op een andere exchange waar de prijs hoger is, waarbij winst wordt gemaakt uit het prijsverschil."
        }
      },
      {
        question: {
          en: "What is a cryptocurrency wrapped token?",
          es: "¿Qué es un token envuelto de criptomonedas?",
          de: "Was ist ein Kryptowährungs-Wrapped-Token?",
          nl: "Wat is een cryptocurrency wrapped token?"
        },
        options: [
          { en: "Token packaged with physical merchandise", es: "Token empaquetado con mercancía física", de: "Token, der mit physischen Waren verpackt ist", nl: "Token verpakt met fysieke goederen" },
          { en: "Representation of cryptocurrency from another blockchain", es: "Representación de criptomoneda de otra blockchain", de: "Darstellung von Kryptowährung aus einer anderen Blockchain", nl: "Representatie van cryptocurrency van een andere blockchain" },
          { en: "Encrypted token for enhanced security", es: "Token encriptado para seguridad mejorada", de: "Verschlüsselter Token für verbesserte Sicherheit", nl: "Versleutelde token voor verbeterde beveiliging" },
          { en: "Token that's been stolen and recovered", es: "Token que ha sido robado y recuperado", de: "Token, der gestohlen und wiederhergestellt wurde", nl: "Token die is gestolen en hersteld" }
        ],
        correct: 1,
        explanation: {
          en: "A wrapped token is a cryptocurrency that represents another crypto from a different blockchain, enabling cross-chain interoperability. For example, Wrapped Bitcoin (WBTC) represents Bitcoin on Ethereum.",
          es: "Un token envuelto es una criptomoneda que representa otra criptomoneda de una blockchain diferente, permitiendo interoperabilidad entre cadenas. Por ejemplo, Wrapped Bitcoin (WBTC) representa Bitcoin en Ethereum.",
          de: "Ein Wrapped Token ist eine Kryptowährung, die eine andere Kryptowährung aus einer anderen Blockchain repräsentiert und Cross-Chain-Interoperabilität ermöglicht. Zum Beispiel repräsentiert Wrapped Bitcoin (WBTC) Bitcoin auf Ethereum.",
          nl: "Een wrapped token is een cryptocurrency die een andere crypto van een verschillende blockchain vertegenwoordigt, waardoor cross-chain interoperabiliteit mogelijk wordt. Bijvoorbeeld, Wrapped Bitcoin (WBTC) vertegenwoordigt Bitcoin op Ethereum."
        }
      },
      {
        question: {
          en: "What is a flash loan in DeFi?",
          es: "¿Qué es un préstamo flash en DeFi?",
          de: "Was ist ein Flash Loan in DeFi?",
          nl: "Wat is een flash loan in DeFi?"
        },
        options: [
          { en: "A loan that must be repaid within the same transaction", es: "Un préstamo que debe ser pagado dentro de la misma transacción", de: "Ein Darlehen, das innerhalb derselben Transaktion zurückgezahlt werden muss", nl: "Een lening die binnen dezelfde transactie moet worden terugbetaald" },
          { en: "A loan with extremely high interest rates", es: "Un préstamo con tasas de interés extremadamente altas", de: "Ein Darlehen mit extrem hohen Zinssätzen", nl: "Een lening met extreem hoge rentetarieven" },
          { en: "A loan that expires in 24 hours", es: "Un préstamo que expira en 24 horas", de: "Ein Darlehen, das in 24 Stunden abläuft", nl: "Een lening die binnen 24 uur verloopt" },
          { en: "A loan backed by lightning network", es: "Un préstamo respaldado por lightning network", de: "Ein durch das Lightning-Netzwerk unterstütztes Darlehen", nl: "Een lening ondersteund door het lightning netwerk" }
        ],
        correct: 0,
        explanation: {
          en: "A flash loan is an uncollateralized loan that must be borrowed and repaid within the same blockchain transaction. If not repaid, the entire transaction reverts, making it risk-free for lenders.",
          es: "Un préstamo flash es un préstamo sin garantía que debe ser prestado y pagado dentro de la misma transacción blockchain. Si no se paga, toda la transacción se revierte, haciéndolo libre de riesgo para los prestamistas.",
          de: "Ein Flash Loan ist ein unbesichertes Darlehen, das innerhalb derselben Blockchain-Transaktion aufgenommen und zurückgezahlt werden muss. Wird es nicht zurückgezahlt, wird die gesamte Transaktion rückgängig gemacht, was es für Kreditgeber risikofrei macht.",
          nl: "Een flash loan is een ongedekte lening die binnen dezelfde blockchain-transactie moet worden geleend en terugbetaald. Als het niet wordt terugbetaald, wordt de hele transactie teruggedraaid, waardoor het risicovrij is voor kredietverstrekkers."
        }
      }
    ]
  };

  // Export for use in the quiz application
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level3;
  } else if (typeof window !== 'undefined') {
    window.level3 = level3;
  }
})();