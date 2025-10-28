// Quiz Level 5: Currencies - Cryptocurrency
(function() {
  const level5 = {
    name: {
      en: "Cryptocurrency - DeFi & Smart Contracts",
      es: "Criptomoneda - DeFi y Contratos Inteligentes",
      de: "Kryptowährung - DeFi & Smart Contracts",
      nl: "Cryptocurrency - DeFi & Smart Contracts"
    },
    questions: [
      {
        question: {
          en: "What is an Automated Market Maker (AMM) in DeFi?",
          es: "¿Qué es un Creador de Mercado Automatizado (AMM) en DeFi?",
          de: "Was ist ein Automated Market Maker (AMM) in DeFi?",
          nl: "Wat is een Automated Market Maker (AMM) in DeFi?"
        },
        options: [
          { en: "Smart contract that provides liquidity and determines prices algorithmically", es: "Contrato inteligente que proporciona liquidez y determina precios algorítmicamente", de: "Smart Contract, der Liquidität bereitstellt und Preise algorithmisch bestimmt", nl: "Smart contract die liquiditeit verschaft en prijzen algoritmisch bepaalt" },
          { en: "AI-powered trading bot for cryptocurrency exchanges", es: "Bot de trading impulsado por IA para intercambios de criptomonedas", de: "KI-gesteuerter Trading-Bot für Kryptowährungsbörsen", nl: "AI-aangedreven trading bot voor cryptocurrency exchanges" },
          { en: "Professional market maker using traditional order books", es: "Creador de mercado profesional usando libros de órdenes tradicionales", de: "Professioneller Market Maker mit traditionellen Orderbüchern", nl: "Professionele market maker die traditionele orderboeken gebruikt" },
          { en: "Automated customer service system for DeFi platforms", es: "Sistema automatizado de atención al cliente para plataformas DeFi", de: "Automatisiertes Kundenservice-System für DeFi-Plattformen", nl: "Geautomatiseerd klantenservice systeem voor DeFi platforms" }
        ],
        correct: 0,
        explanation: {
          en: "An AMM is a smart contract protocol that uses mathematical formulas to price assets and provide liquidity without traditional order books. Examples include Uniswap's constant product formula (x*y=k).",
          es: "Un AMM es un protocolo de contrato inteligente que usa fórmulas matemáticas para fijar precios de activos y proporcionar liquidez sin libros de órdenes tradicionales. Ejemplos incluyen la fórmula de producto constante de Uniswap (x*y=k).",
          de: "Ein AMM ist ein Smart Contract-Protokoll, das mathematische Formeln verwendet, um Assets zu bewerten und Liquidität ohne traditionelle Orderbücher bereitzustellen. Beispiele sind Uniswaps Constant Product Formel (x*y=k).",
          nl: "Een AMM is een smart contract protocol dat wiskundige formules gebruikt om assets te prijzen en liquiditeit te verstrekken zonder traditionele orderboeken. Voorbeelden zijn Uniswap's constant product formule (x*y=k)."
        }
      },
      {
        question: {
          en: "What is Total Value Locked (TVL) in DeFi protocols?",
          es: "¿Qué es el Valor Total Bloqueado (TVL) en protocolos DeFi?",
          de: "Was ist Total Value Locked (TVL) in DeFi-Protokollen?",
          nl: "Wat is Total Value Locked (TVL) in DeFi protocollen?"
        },
        options: [
          { en: "Total amount of cryptocurrency assets deposited in a DeFi protocol", es: "Cantidad total de activos de criptomonedas depositados en un protocolo DeFi", de: "Gesamtmenge der in einem DeFi-Protokoll hinterlegten Kryptowährungs-Assets", nl: "Totale hoeveelheid cryptocurrency assets gedeponeerd in een DeFi protocol" },
          { en: "Maximum transaction value allowed on the platform", es: "Valor máximo de transacción permitido en la plataforma", de: "Maximal erlaubter Transaktionswert auf der Plattform", nl: "Maximale transactiewaarde toegestaan op het platform" },
          { en: "Total value of tokens permanently burned by the protocol", es: "Valor total de tokens permanentemente quemados por el protocolo", de: "Gesamtwert der vom Protokoll dauerhaft verbrannten Token", nl: "Totale waarde van tokens permanent verbrand door het protocol" },
          { en: "Cumulative value of all completed transactions", es: "Valor acumulativo de todas las transacciones completadas", de: "Kumulativer Wert aller abgeschlossenen Transaktionen", nl: "Cumulatieve waarde van alle voltooide transacties" }
        ],
        correct: 0,
        explanation: {
          en: "TVL represents the total dollar value of cryptocurrency assets that users have deposited and locked into a DeFi protocol. It's a key metric for measuring the size and adoption of DeFi platforms.",
          es: "TVL representa el valor total en dólares de activos de criptomonedas que los usuarios han depositado y bloqueado en un protocolo DeFi. Es una métrica clave para medir el tamaño y adopción de plataformas DeFi.",
          de: "TVL repräsentiert den gesamten Dollarwert der Kryptowährungs-Assets, die Nutzer in einem DeFi-Protokoll hinterlegt und gesperrt haben. Es ist eine Schlüsselmetrik zur Messung der Größe und Adoption von DeFi-Plattformen.",
          nl: "TVL vertegenwoordigt de totale dollarwaarde van cryptocurrency assets die gebruikers hebben gedeponeerd en vergrendeld in een DeFi protocol. Het is een sleutelmetriek voor het meten van de grootte en adoptie van DeFi platforms."
        }
      },
      {
        question: {
          en: "What is a liquidity pool in DeFi?",
          es: "¿Qué es un pool de liquidez en DeFi?",
          de: "Was ist ein Liquiditätspool in DeFi?",
          nl: "Wat is een liquiditeitspool in DeFi?"
        },
        options: [
          { en: "Collection of funds locked in smart contract to facilitate automated trading", es: "Colección de fondos bloqueados en contrato inteligente para facilitar trading automatizado", de: "Sammlung von Geldern, die in Smart Contracts gesperrt sind, um automatisierten Handel zu ermöglichen", nl: "Verzameling van fondsen vergrendeld in smart contract om geautomatiseerde handel te faciliteren" },
          { en: "Group of investors pooling money for large purchases", es: "Grupo de inversores agrupando dinero para compras grandes", de: "Gruppe von Investoren, die Geld für große Käufe zusammenlegen", nl: "Groep investeerders die geld bundelen voor grote aankopen" },
          { en: "Reserve fund maintained by the protocol for emergencies", es: "Fondo de reserva mantenido por el protocolo para emergencias", de: "Reservefonds, der vom Protokoll für Notfälle gehalten wird", nl: "Reservefonds aangehouden door het protocol voor noodgevallen" },
          { en: "Database storing transaction history for the platform", es: "Base de datos almacenando historial de transacciones para la plataforma", de: "Datenbank, die Transaktionshistorie für die Plattform speichert", nl: "Database die transactiegeschiedenis voor het platform opslaat" }
        ],
        correct: 0,
        explanation: {
          en: "A liquidity pool consists of funds locked in a smart contract that enables users to trade against the pool rather than with other traders directly. Liquidity providers earn fees from trades.",
          es: "Un pool de liquidez consiste en fondos bloqueados en un contrato inteligente que permite a los usuarios comerciar contra el pool en lugar de con otros traders directamente. Los proveedores de liquidez ganan tarifas de los trades.",
          de: "Ein Liquiditätspool besteht aus Geldern, die in einem Smart Contract gesperrt sind und es Nutzern ermöglichen, gegen den Pool zu handeln, anstatt direkt mit anderen Händlern. Liquiditätsanbieter verdienen Gebühren aus Trades.",
          nl: "Een liquiditeitspool bestaat uit fondsen vergrendeld in een smart contract dat gebruikers in staat stelt tegen de pool te handelen in plaats van direct met andere handelaren. Liquiditeitsverschaffers verdienen kosten van trades."
        }
      },
      {
        question: {
          en: "What is a yield farm in DeFi?",
          es: "¿Qué es un yield farm en DeFi?",
          de: "Was ist ein Yield Farm in DeFi?",
          nl: "Wat is een yield farm in DeFi?"
        },
        options: [
          { en: "Agricultural project financed by cryptocurrency", es: "Proyecto agrícola financiado por criptomonedas", de: "Landwirtschaftliches Projekt, das durch Kryptowährung finanziert wird", nl: "Landbouwproject gefinancierd door cryptocurrency" },
          { en: "Strategy of earning maximum returns by moving funds between DeFi protocols", es: "Estrategia de ganar máximos retornos moviendo fondos entre protocolos DeFi", de: "Strategie zur Erzielung maximaler Erträge durch Verschiebung von Geldern zwischen DeFi-Protokollen", nl: "Strategie om maximale rendementen te verdienen door fondsen tussen DeFi protocollen te verplaatsen" },
          { en: "Mining operation that uses renewable energy sources", es: "Operación de minería que usa fuentes de energía renovable", de: "Mining-Operation, die erneuerbare Energiequellen nutzt", nl: "Mining operatie die hernieuwbare energiebronnen gebruikt" },
          { en: "Platform for trading agricultural commodity tokens", es: "Plataforma para comerciar tokens de materias primas agrícolas", de: "Plattform für den Handel mit landwirtschaftlichen Rohstoff-Token", nl: "Platform voor het handelen in landbouwgrondstof tokens" }
        ],
        correct: 1,
        explanation: {
          en: "Yield farming involves strategically moving cryptocurrency between different DeFi protocols to maximize returns through interest, rewards, and incentive programs. It often involves complex strategies across multiple platforms.",
          es: "El yield farming involucra mover estratégicamente criptomonedas entre diferentes protocolos DeFi para maximizar retornos a través de interés, recompensas y programas de incentivos. A menudo involucra estrategias complejas a través de múltiples plataformas.",
          de: "Yield Farming beinhaltet das strategische Verschieben von Kryptowährung zwischen verschiedenen DeFi-Protokollen zur Maximierung der Erträge durch Zinsen, Belohnungen und Anreizprogramme. Es beinhaltet oft komplexe Strategien über mehrere Plattformen.",
          nl: "Yield farming houdt in dat cryptocurrency strategisch wordt verplaatst tussen verschillende DeFi protocollen om rendementen te maximaliseren door rente, beloningen en incentiveprogramma's. Het omvat vaak complexe strategieën over meerdere platforms."
        }
      },
      {
        question: {
          en: "What is a smart contract vulnerability known as a 'reentrancy attack'?",
          es: "¿Qué es una vulnerabilidad de contrato inteligente conocida como 'ataque de reentrada'?",
          de: "Was ist eine Smart Contract-Sicherheitslücke, die als 'Reentrancy-Angriff' bekannt ist?",
          nl: "Wat is een smart contract kwetsbaarheid bekend als een 'reentrancy attack'?"
        },
        options: [
          { en: "Exploit where external call allows recursive function calls before state updates", es: "Exploit donde llamada externa permite llamadas de función recursivas antes de actualizaciones de estado", de: "Exploit, bei dem externe Aufrufe rekursive Funktionsaufrufe vor Statusaktualisierungen ermöglichen", nl: "Exploit waarbij externe oproep recursieve functie-aanroepen toestaat voor statusupdates" },
          { en: "Attack that prevents users from re-entering the platform", es: "Ataque que impide a los usuarios volver a entrar a la plataforma", de: "Angriff, der Benutzer daran hindert, die Plattform erneut zu betreten", nl: "Aanval die gebruikers weerhoudt van hernieuwde toegang tot het platform" },
          { en: "Vulnerability that allows unauthorized contract deployment", es: "Vulnerabilidad que permite despliegue no autorizado de contratos", de: "Sicherheitslücke, die nicht autorisierten Contract-Deployment ermöglicht", nl: "Kwetsbaarheid die ongeautoriseerde contract deployment toestaat" },
          { en: "Bug that causes smart contracts to restart unexpectedly", es: "Bug que causa que los contratos inteligentes se reinicien inesperadamente", de: "Bug, der Smart Contracts dazu bringt, unerwartet neu zu starten", nl: "Bug die ervoor zorgt dat smart contracts onverwacht herstarten" }
        ],
        correct: 0,
        explanation: {
          en: "A reentrancy attack occurs when a smart contract makes an external call to another contract before updating its own state, allowing the called contract to recursively call back and drain funds. The famous DAO hack exploited this vulnerability.",
          es: "Un ataque de reentrada ocurre cuando un contrato inteligente hace una llamada externa a otro contrato antes de actualizar su propio estado, permitiendo al contrato llamado hacer llamadas recursivas de vuelta y drenar fondos. El famoso hack de DAO explotó esta vulnerabilidad.",
          de: "Ein Reentrancy-Angriff tritt auf, wenn ein Smart Contract einen externen Aufruf an einen anderen Contract macht, bevor er seinen eigenen Status aktualisiert, wodurch der aufgerufene Contract rekursiv zurückrufen und Gelder abziehen kann. Der berühmte DAO-Hack nutzte diese Sicherheitslücke aus.",
          nl: "Een reentrancy attack treedt op wanneer een smart contract een externe oproep naar een ander contract maakt voordat het zijn eigen status bijwerkt, waardoor het aangeroepen contract recursief kan terugbellen en fondsen kan weglekken. De beroemde DAO hack maakte gebruik van deze kwetsbaarheid."
        }
      },
      {
        question: {
          en: "What is a Decentralized Autonomous Organization (DAO)?",
          es: "¿Qué es una Organización Autónoma Descentralizada (DAO)?",
          de: "Was ist eine Dezentrale Autonome Organisation (DAO)?",
          nl: "Wat is een Gedecentraliseerde Autonome Organisatie (DAO)?"
        },
        options: [
          { en: "Organization governed by smart contracts and token holders' votes", es: "Organización gobernada por contratos inteligentes y votos de poseedores de tokens", de: "Organisation, die von Smart Contracts und Token-Inhabern regiert wird", nl: "Organisatie bestuurd door smart contracts en stemmen van token houders" },
          { en: "AI-powered autonomous trading system", es: "Sistema de trading autónomo impulsado por IA", de: "KI-gestütztes autonomes Handelssystem", nl: "AI-aangedreven autonoom handelssysteem" },
          { en: "Decentralized application for asset management", es: "Aplicación descentralizada para gestión de activos", de: "Dezentrale Anwendung für Asset-Management", nl: "Gedecentraliseerde applicatie voor asset management" },
          { en: "Distributed database for organizational records", es: "Base de datos distribuida para registros organizacionales", de: "Verteilte Datenbank für Organisationsaufzeichnungen", nl: "Gedistribueerde database voor organisatorische records" }
        ],
        correct: 0,
        explanation: {
          en: "A DAO is an organization where governance decisions are made through smart contracts and token-based voting, removing the need for traditional management structures. Members vote on proposals using governance tokens.",
          es: "Una DAO es una organización donde las decisiones de gobernanza se toman a través de contratos inteligentes y votación basada en tokens, removiendo la necesidad de estructuras de gestión tradicionales. Los miembros votan en propuestas usando tokens de gobernanza.",
          de: "Eine DAO ist eine Organisation, bei der Governance-Entscheidungen durch Smart Contracts und tokenbasierte Abstimmungen getroffen werden, wodurch traditionelle Managementstrukturen überflüssig werden. Mitglieder stimmen über Vorschläge mit Governance-Token ab.",
          nl: "Een DAO is een organisatie waarbij governance-beslissingen worden genomen door smart contracts en token-gebaseerde stemming, waardoor traditionele managementstructuren overbodig worden. Leden stemmen over voorstellen met governance tokens."
        }
      },
      {
        question: {
          en: "What is slippage in DeFi trading?",
          es: "¿Qué es el slippage en trading DeFi?",
          de: "Was ist Slippage beim DeFi-Trading?",
          nl: "Wat is slippage in DeFi trading?"
        },
        options: [
          { en: "Difference between expected and actual trade execution price", es: "Diferencia entre precio esperado y real de ejecución de trade", de: "Unterschied zwischen erwartetem und tatsächlichem Handelsausführungspreis", nl: "Verschil tussen verwachte en werkelijke handelsuitvoerprijs" },
          { en: "Transaction fees charged by the protocol", es: "Tarifas de transacción cobradas por el protocolo", de: "Transaktionsgebühren, die vom Protokoll erhoben werden", nl: "Transactiekosten in rekening gebracht door het protocol" },
          { en: "Time delay between transaction submission and confirmation", es: "Retraso de tiempo entre envío de transacción y confirmación", de: "Zeitverzögerung zwischen Transaktionsübermittlung und Bestätigung", nl: "Tijdsvertraging tussen transactie-indiening en bevestiging" },
          { en: "Loss of funds due to smart contract bugs", es: "Pérdida de fondos debido a bugs de contratos inteligentes", de: "Geldverlust aufgrund von Smart Contract-Bugs", nl: "Verlies van fondsen door smart contract bugs" }
        ],
        correct: 0,
        explanation: {
          en: "Slippage occurs when the actual execution price differs from the expected price due to price movement between trade submission and execution. It's more common in volatile markets or with large trade sizes.",
          es: "El slippage ocurre cuando el precio real de ejecución difiere del precio esperado debido al movimiento de precios entre envío de trade y ejecución. Es más común en mercados volátiles o con tamaños de trade grandes.",
          de: "Slippage tritt auf, wenn der tatsächliche Ausführungspreis vom erwarteten Preis abweicht aufgrund von Preisbewegungen zwischen Handelsübermittlung und -ausführung. Es ist häufiger in volatilen Märkten oder bei großen Handelsgrößen.",
          nl: "Slippage treedt op wanneer de werkelijke uitvoerprijs verschilt van de verwachte prijs door prijsbewegingen tussen trade-indiening en uitvoering. Het is gebruikelijker in volatiele markten of bij grote handelsgroottes."
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
          { en: "Extremely fast loan approval process", es: "Proceso de aprobación de préstamo extremadamente rápido", de: "Extrem schneller Kreditgenehmigungsprozess", nl: "Extreem snel kredietgoedkeuringsproces" },
          { en: "Uncollateralized loan that must be repaid within the same transaction", es: "Préstamo sin garantía que debe pagarse dentro de la misma transacción", de: "Unbesicherter Kredit, der innerhalb derselben Transaktion zurückgezahlt werden muss", nl: "Lening zonder onderpand die binnen dezelfde transactie moet worden terugbetaald" },
          { en: "Loan with very low interest rates", es: "Préstamo con tasas de interés muy bajas", de: "Kredit mit sehr niedrigen Zinssätzen", nl: "Lening met zeer lage rentetarieven" },
          { en: "Short-term loan for day trading", es: "Préstamo a corto plazo para day trading", de: "Kurzfristiger Kredit für Day Trading", nl: "Korte termijn lening voor day trading" }
        ],
        correct: 1,
        explanation: {
          en: "Flash loans allow borrowing large amounts without collateral, but the loan must be repaid within the same blockchain transaction. If repayment fails, the entire transaction reverts, making them useful for arbitrage and complex DeFi strategies.",
          es: "Los préstamos flash permiten pedir prestadas grandes cantidades sin garantía, pero el préstamo debe pagarse dentro de la misma transacción blockchain. Si el pago falla, toda la transacción se revierte, haciéndolos útiles para arbitraje y estrategias DeFi complejas.",
          de: "Flash Loans ermöglichen das Ausleihen großer Beträge ohne Sicherheiten, aber der Kredit muss innerhalb derselben Blockchain-Transaktion zurückgezahlt werden. Wenn die Rückzahlung fehlschlägt, wird die gesamte Transaktion rückgängig gemacht, was sie für Arbitrage und komplexe DeFi-Strategien nützlich macht.",
          nl: "Flash loans maken het mogelijk grote bedragen te lenen zonder onderpand, maar de lening moet binnen dezelfde blockchain transactie worden terugbetaald. Als terugbetaling mislukt, wordt de hele transactie teruggedraaid, waardoor ze nuttig zijn voor arbitrage en complexe DeFi strategieën."
        }
      },
      {
        question: {
          en: "What is a governance token in DeFi protocols?",
          es: "¿Qué es un token de gobernanza en protocolos DeFi?",
          de: "Was ist ein Governance-Token in DeFi-Protokollen?",
          nl: "Wat is een governance token in DeFi protocollen?"
        },
        options: [
          { en: "Token that gives holders voting rights on protocol decisions", es: "Token que otorga a los poseedores derechos de voto en decisiones del protocolo", de: "Token, der Inhabern Stimmrechte bei Protokollentscheidungen gewährt", nl: "Token die houders stemrechten geeft op protocolbeslissingen" },
          { en: "Government-issued token for regulatory compliance", es: "Token emitido por el gobierno para cumplimiento regulatorio", de: "Von der Regierung ausgegebener Token für regulatorische Compliance", nl: "Door de overheid uitgegeven token voor regulatoire naleving" },
          { en: "Token used exclusively for paying transaction fees", es: "Token usado exclusivamente para pagar tarifas de transacción", de: "Token, der ausschließlich für die Zahlung von Transaktionsgebühren verwendet wird", nl: "Token uitsluitend gebruikt voor het betalen van transactiekosten" },
          { en: "Stablecoin backed by government bonds", es: "Stablecoin respaldada por bonos gubernamentales", de: "Stablecoin, der durch Staatsanleihen gedeckt ist", nl: "Stablecoin gedekt door overheidsobligaties" }
        ],
        correct: 0,
        explanation: {
          en: "Governance tokens grant holders the right to vote on protocol changes, parameter adjustments, fund allocation, and other important decisions affecting the DeFi protocol. They enable decentralized decision-making.",
          es: "Los tokens de gobernanza otorgan a los poseedores el derecho a votar sobre cambios de protocolo, ajustes de parámetros, asignación de fondos y otras decisiones importantes que afectan el protocolo DeFi. Permiten toma de decisiones descentralizada.",
          de: "Governance-Token gewähren Inhabern das Recht, über Protokolländerungen, Parameteranpassungen, Mittelzuteilung und andere wichtige Entscheidungen abzustimmen, die das DeFi-Protokoll betreffen. Sie ermöglichen dezentrale Entscheidungsfindung.",
          nl: "Governance tokens verlenen houders het recht om te stemmen over protocolwijzigingen, parameteraanpassingen, fondstoewijzing en andere belangrijke beslissingen die het DeFi protocol beïnvloeden. Ze maken gedecentraliseerde besluitvorming mogelijk."
        }
      },
      {
        question: {
          en: "What is a smart contract oracle problem?",
          es: "¿Qué es el problema del oráculo en contratos inteligentes?",
          de: "Was ist das Oracle-Problem bei Smart Contracts?",
          nl: "Wat is een smart contract oracle probleem?"
        },
        options: [
          { en: "Smart contracts cannot access external data without trusted intermediaries", es: "Los contratos inteligentes no pueden acceder a datos externos sin intermediarios de confianza", de: "Smart Contracts können nicht auf externe Daten ohne vertrauenswürdige Zwischenhändler zugreifen", nl: "Smart contracts kunnen geen toegang krijgen tot externe data zonder vertrouwde tussenpersonen" },
          { en: "Oracles consume too much computational power", es: "Los oráculos consumen demasiado poder computacional", de: "Oracles verbrauchen zu viel Rechenleistung", nl: "Oracles verbruiken te veel rekenkracht" },
          { en: "Oracle predictions are always inaccurate", es: "Las predicciones de oráculos son siempre inexactas", de: "Oracle-Vorhersagen sind immer ungenau", nl: "Oracle voorspellingen zijn altijd onnauwkeurig" },
          { en: "Multiple oracles create conflicting information", es: "Múltiples oráculos crean información conflictiva", de: "Mehrere Oracles erstellen widersprüchliche Informationen", nl: "Meerdere oracles creëren conflicterende informatie" }
        ],
        correct: 0,
        explanation: {
          en: "The oracle problem refers to smart contracts' inability to access external data directly. They need oracles (trusted data sources) to bridge blockchain and real-world information, creating potential centralization and trust issues.",
          es: "El problema del oráculo se refiere a la incapacidad de los contratos inteligentes para acceder a datos externos directamente. Necesitan oráculos (fuentes de datos confiables) para conectar blockchain e información del mundo real, creando potenciales problemas de centralización y confianza.",
          de: "Das Oracle-Problem bezieht sich auf die Unfähigkeit von Smart Contracts, direkt auf externe Daten zuzugreifen. Sie benötigen Oracles (vertrauenswürdige Datenquellen), um Blockchain und reale Informationen zu verbinden, was potenzielle Zentralisierungs- und Vertrauensprobleme schafft.",
          nl: "Het oracle probleem verwijst naar het onvermogen van smart contracts om direct toegang te krijgen tot externe data. Ze hebben oracles (vertrouwde databronnen) nodig om blockchain en real-world informatie te verbinden, wat potentiële centralisatie- en vertrouwensproblemen creëert."
        }
      },
      {
        question: {
          en: "What is a lending protocol in DeFi?",
          es: "¿Qué es un protocolo de préstamos en DeFi?",
          de: "Was ist ein Lending-Protokoll in DeFi?",
          nl: "Wat is een leenprotocol in DeFi?"
        },
        options: [
          { en: "Platform that enables peer-to-peer cryptocurrency lending and borrowing", es: "Plataforma que permite préstamos y préstamos de criptomonedas peer-to-peer", de: "Plattform, die Peer-to-Peer-Kryptowährungs-Verleih und -Ausleihe ermöglicht", nl: "Platform dat peer-to-peer cryptocurrency uitlenen en lenen mogelijk maakt" },
          { en: "Traditional bank that accepts cryptocurrency deposits", es: "Banco tradicional que acepta depósitos de criptomonedas", de: "Traditionelle Bank, die Kryptowährungs-Einlagen akzeptiert", nl: "Traditionele bank die cryptocurrency deposito's accepteert" },
          { en: "Government program for cryptocurrency loans", es: "Programa gubernamental para préstamos de criptomonedas", de: "Regierungsprogramm für Kryptowährungs-Kredite", nl: "Overheidsprogramma voor cryptocurrency leningen" },
          { en: "Insurance system for DeFi investments", es: "Sistema de seguros para inversiones DeFi", de: "Versicherungssystem für DeFi-Investitionen", nl: "Verzekeringssysteem voor DeFi investeringen" }
        ],
        correct: 0,
        explanation: {
          en: "DeFi lending protocols like Aave and Compound allow users to lend their cryptocurrency to earn interest or borrow against their crypto holdings as collateral, all managed through smart contracts without traditional intermediaries.",
          es: "Los protocolos de préstamos DeFi como Aave y Compound permiten a los usuarios prestar sus criptomonedas para ganar interés o pedir prestado contra sus tenencias cripto como garantía, todo gestionado a través de contratos inteligentes sin intermediarios tradicionales.",
          de: "DeFi-Lending-Protokolle wie Aave und Compound ermöglichen es Nutzern, ihre Kryptowährung zu verleihen, um Zinsen zu verdienen, oder gegen ihre Krypto-Bestände als Sicherheiten zu leihen, alles verwaltet durch Smart Contracts ohne traditionelle Zwischenhändler.",
          nl: "DeFi leenprotocollen zoals Aave en Compound stellen gebruikers in staat hun cryptocurrency uit te lenen om rente te verdienen of te lenen tegen hun crypto-bezittingen als onderpand, alles beheerd door smart contracts zonder traditionele tussenpersonen."
        }
      },
      {
        question: {
          en: "What is the purpose of a liquidity mining program?",
          es: "¿Cuál es el propósito de un programa de minería de liquidez?",
          de: "Was ist der Zweck eines Liquidity Mining-Programms?",
          nl: "Wat is het doel van een liquidity mining programma?"
        },
        options: [
          { en: "Incentivize users to provide liquidity by offering token rewards", es: "Incentivar a usuarios a proporcionar liquidez ofreciendo recompensas de tokens", de: "Nutzer dazu anregen, Liquidität bereitzustellen, indem Token-Belohnungen angeboten werden", nl: "Gebruikers aanmoedigen om liquiditeit te verstrekken door token beloningen aan te bieden" },
          { en: "Mine new cryptocurrency tokens using liquidity pools", es: "Minar nuevos tokens de criptomonedas usando pools de liquidez", de: "Neue Kryptowährungs-Token mit Liquiditätspools minen", nl: "Nieuwe cryptocurrency tokens minen met liquiditeitspools" },
          { en: "Extract maximum value from existing liquidity", es: "Extraer máximo valor de liquidez existente", de: "Maximalen Wert aus bestehender Liquidität extrahieren", nl: "Maximale waarde halen uit bestaande liquiditeit" },
          { en: "Automatically compound liquidity rewards", es: "Componer automáticamente recompensas de liquidez", de: "Liquiditätsbelohnungen automatisch zusammensetzen", nl: "Automatisch liquiditeitsbeloningen samenvoegen" }
        ],
        correct: 0,
        explanation: {
          en: "Liquidity mining programs distribute protocol tokens to users who provide liquidity to pools. This bootstraps liquidity for new protocols and rewards early adopters, though it can also lead to mercenary capital that leaves when rewards end.",
          es: "Los programas de minería de liquidez distribuyen tokens de protocolo a usuarios que proporcionan liquidez a pools. Esto arranca liquidez para nuevos protocolos y recompensa a adoptadores tempranos, aunque también puede llevar a capital mercenario que se va cuando terminan las recompensas.",
          de: "Liquidity Mining-Programme verteilen Protokoll-Token an Nutzer, die Liquidität für Pools bereitstellen. Dies startet Liquidität für neue Protokolle und belohnt frühe Anwender, kann aber auch zu Söldnerkapital führen, das geht, wenn Belohnungen enden.",
          nl: "Liquidity mining programma's verdelen protocol tokens aan gebruikers die liquiditeit verstrekken aan pools. Dit start liquiditeit voor nieuwe protocollen en beloont vroege adopters, hoewel het ook kan leiden tot huurlingenkapitaal dat vertrekt wanneer beloningen eindigen."
        }
      },
      {
        question: {
          en: "What is a synthetic asset in DeFi?",
          es: "¿Qué es un activo sintético en DeFi?",
          de: "Was ist ein synthetisches Asset in DeFi?",
          nl: "Wat is een synthetisch asset in DeFi?"
        },
        options: [
          { en: "Derivative token that tracks the price of another asset without holding it", es: "Token derivado que rastrea el precio de otro activo sin poseerlo", de: "Derivat-Token, der den Preis eines anderen Assets verfolgt, ohne es zu besitzen", nl: "Derivaattoken die de prijs van een ander asset volgt zonder het te bezitten" },
          { en: "Artificially created cryptocurrency with no real backing", es: "Criptomoneda creada artificialmente sin respaldo real", de: "Künstlich erstellte Kryptowährung ohne echte Unterlegung", nl: "Kunstmatig gecreëerde cryptocurrency zonder echte dekking" },
          { en: "Combination of multiple cryptocurrencies in one token", es: "Combinación de múltiples criptomonedas en un token", de: "Kombination mehrerer Kryptowährungen in einem Token", nl: "Combinatie van meerdere cryptocurrencies in één token" },
          { en: "Fake asset used for testing DeFi protocols", es: "Activo falso usado para probar protocolos DeFi", de: "Gefälschtes Asset zum Testen von DeFi-Protokollen", nl: "Nep asset gebruikt voor het testen van DeFi protocollen" }
        ],
        correct: 0,
        explanation: {
          en: "Synthetic assets are derivative tokens that track the price of real-world assets (stocks, commodities, currencies) without requiring direct ownership. Protocols like Synthetix enable exposure to traditional assets through crypto.",
          es: "Los activos sintéticos son tokens derivados que rastrean el precio de activos del mundo real (acciones, materias primas, monedas) sin requerir propiedad directa. Protocolos como Synthetix permiten exposición a activos tradicionales a través de cripto.",
          de: "Synthetische Assets sind Derivat-Token, die den Preis realer Assets (Aktien, Rohstoffe, Währungen) verfolgen, ohne direktes Eigentum zu erfordern. Protokolle wie Synthetix ermöglichen Exposure zu traditionellen Assets durch Krypto.",
          nl: "Synthetische assets zijn derivaattokens die de prijs van real-world assets (aandelen, grondstoffen, valuta's) volgen zonder direct eigendom te vereisen. Protocollen zoals Synthetix maken exposure aan traditionele assets mogelijk door crypto."
        }
      },
      {
        question: {
          en: "What is the constant product formula used by Uniswap?",
          es: "¿Qué es la fórmula de producto constante usada por Uniswap?",
          de: "Was ist die Constant Product Formel, die von Uniswap verwendet wird?",
          nl: "Wat is de constant product formule gebruikt door Uniswap?"
        },
        options: [
          { en: "x * y = k (where x and y are token reserves, k is constant)", es: "x * y = k (donde x e y son reservas de tokens, k es constante)", de: "x * y = k (wobei x und y Token-Reserven sind, k ist konstant)", nl: "x * y = k (waarbij x en y token reserves zijn, k is constant)" },
          { en: "x + y = k (sum of token reserves equals constant)", es: "x + y = k (suma de reservas de tokens igual a constante)", de: "x + y = k (Summe der Token-Reserven gleich Konstante)", nl: "x + y = k (som van token reserves gelijk aan constante)" },
          { en: "x / y = k (ratio of tokens remains constant)", es: "x / y = k (proporción de tokens permanece constante)", de: "x / y = k (Verhältnis der Token bleibt konstant)", nl: "x / y = k (verhouding van tokens blijft constant)" },
          { en: "x² + y² = k (quadratic relationship between tokens)", es: "x² + y² = k (relación cuadrática entre tokens)", de: "x² + y² = k (quadratische Beziehung zwischen Token)", nl: "x² + y² = k (kwadratische relatie tussen tokens)" }
        ],
        correct: 0,
        explanation: {
          en: "Uniswap uses the constant product formula x * y = k, where x and y represent the reserves of two tokens in a liquidity pool, and k remains constant. When someone trades, one reserve increases while the other decreases, maintaining the product.",
          es: "Uniswap usa la fórmula de producto constante x * y = k, donde x e y representan las reservas de dos tokens en un pool de liquidez, y k permanece constante. Cuando alguien comercia, una reserva aumenta mientras la otra disminuye, manteniendo el producto.",
          de: "Uniswap verwendet die Constant Product Formel x * y = k, wobei x und y die Reserven zweier Token in einem Liquiditätspool darstellen und k konstant bleibt. Wenn jemand handelt, steigt eine Reserve, während die andere sinkt, wodurch das Produkt erhalten bleibt.",
          nl: "Uniswap gebruikt de constant product formule x * y = k, waarbij x en y de reserves van twee tokens in een liquiditeitspool vertegenwoordigen, en k constant blijft. Wanneer iemand handelt, neemt één reserve toe terwijl de andere afneemt, waarbij het product behouden blijft."
        }
      },
      {
        question: {
          en: "What is a wrapped token in DeFi?",
          es: "¿Qué es un token envuelto en DeFi?",
          de: "Was ist ein Wrapped Token in DeFi?",
          nl: "Wat is een wrapped token in DeFi?"
        },
        options: [
          { en: "Token representing another cryptocurrency to enable cross-chain compatibility", es: "Token que representa otra criptomoneda para permitir compatibilidad entre cadenas", de: "Token, der eine andere Kryptowährung repräsentiert, um Cross-Chain-Kompatibilität zu ermöglichen", nl: "Token die een andere cryptocurrency vertegenwoordigt om cross-chain compatibiliteit mogelijk te maken" },
          { en: "Encrypted token for enhanced security", es: "Token encriptado para seguridad mejorada", de: "Verschlüsselter Token für verbesserte Sicherheit", nl: "Versleutelde token voor verbeterde beveiliging" },
          { en: "Token that bundles multiple assets together", es: "Token que agrupa múltiples activos juntos", de: "Token, der mehrere Assets zusammenbündelt", nl: "Token die meerdere assets samenbundelt" },
          { en: "Gift-wrapped token for promotional campaigns", es: "Token envuelto como regalo para campañas promocionales", de: "Geschenkverpackter Token für Werbekampagnen", nl: "Cadeau-verpakte token voor promotiecampagnes" }
        ],
        correct: 0,
        explanation: {
          en: "Wrapped tokens represent other cryptocurrencies on different blockchains. For example, Wrapped Bitcoin (WBTC) represents Bitcoin on Ethereum, allowing Bitcoin holders to participate in Ethereum DeFi protocols.",
          es: "Los tokens envueltos representan otras criptomonedas en diferentes blockchains. Por ejemplo, Wrapped Bitcoin (WBTC) representa Bitcoin en Ethereum, permitiendo a los poseedores de Bitcoin participar en protocolos DeFi de Ethereum.",
          de: "Wrapped Token repräsentieren andere Kryptowährungen auf verschiedenen Blockchains. Zum Beispiel repräsentiert Wrapped Bitcoin (WBTC) Bitcoin auf Ethereum und ermöglicht es Bitcoin-Inhabern, an Ethereum DeFi-Protokollen teilzunehmen.",
          nl: "Wrapped tokens vertegenwoordigen andere cryptocurrencies op verschillende blockchains. Bijvoorbeeld, Wrapped Bitcoin (WBTC) vertegenwoordigt Bitcoin op Ethereum, waardoor Bitcoin houders kunnen deelnemen aan Ethereum DeFi protocollen."
        }
      },
      {
        question: {
          en: "What is a decentralized exchange (DEX) aggregator?",
          es: "¿Qué es un agregador de intercambio descentralizado (DEX)?",
          de: "Was ist ein Dezentraler Exchange (DEX) Aggregator?",
          nl: "Wat is een gedecentraliseerde exchange (DEX) aggregator?"
        },
        options: [
          { en: "Service that finds best prices across multiple DEXs for trades", es: "Servicio que encuentra mejores precios a través de múltiples DEXs para trades", de: "Service, der die besten Preise über mehrere DEXs für Trades findet", nl: "Service die beste prijzen vindt over meerdere DEXs voor trades" },
          { en: "Platform that combines multiple DEXs into one interface", es: "Plataforma que combina múltiples DEXs en una interfaz", de: "Plattform, die mehrere DEXs in einer Schnittstelle kombiniert", nl: "Platform dat meerdere DEXs combineert in één interface" },
          { en: "News aggregator for DeFi market information", es: "Agregador de noticias para información del mercado DeFi", de: "Nachrichten-Aggregator für DeFi-Marktinformationen", nl: "Nieuwsaggregator voor DeFi marktinformatie" },
          { en: "Tool that automatically trades on behalf of users", es: "Herramienta que comercia automáticamente en nombre de usuarios", de: "Tool, das automatisch im Namen von Nutzern handelt", nl: "Tool die automatisch handelt namens gebruikers" }
        ],
        correct: 0,
        explanation: {
          en: "DEX aggregators like 1inch and Paraswap scan multiple decentralized exchanges to find the best prices and optimal trading routes, often splitting large orders across multiple DEXs to minimize slippage and maximize returns.",
          es: "Los agregadores DEX como 1inch y Paraswap escanean múltiples intercambios descentralizados para encontrar los mejores precios y rutas de trading óptimas, a menudo dividiendo órdenes grandes a través de múltiples DEXs para minimizar slippage y maximizar retornos.",
          de: "DEX-Aggregatoren wie 1inch und Paraswap scannen mehrere dezentrale Börsen, um die besten Preise und optimalen Handelsrouten zu finden, oft große Aufträge über mehrere DEXs aufzuteilen, um Slippage zu minimieren und Erträge zu maximieren.",
          nl: "DEX aggregators zoals 1inch en Paraswap scannen meerdere gedecentraliseerde exchanges om de beste prijzen en optimale handelsroutes te vinden, waarbij grote orders vaak worden verdeeld over meerdere DEXs om slippage te minimaliseren en rendementen te maximaliseren."
        }
      },
      {
        question: {
          en: "What is the difference between permissioned and permissionless DeFi protocols?",
          es: "¿Cuál es la diferencia entre protocolos DeFi con permisos y sin permisos?",
          de: "Was ist der Unterschied zwischen genehmigungsbasierten und genehmigungsfreien DeFi-Protokollen?",
          nl: "Wat is het verschil tussen permissioned en permissionless DeFi protocollen?"
        },
        options: [
          { en: "Permissionless allows anyone to use, permissioned requires approval", es: "Sin permisos permite a cualquiera usar, con permisos requiere aprobación", de: "Genehmigungsfrei ermöglicht jedem die Nutzung, genehmigungsbasiert erfordert Genehmigung", nl: "Permissionless staat iedereen toe om te gebruiken, permissioned vereist goedkeuring" },
          { en: "Permissioned is more decentralized than permissionless", es: "Con permisos es más descentralizado que sin permisos", de: "Genehmigungsbasiert ist dezentraler als genehmigungsfrei", nl: "Permissioned is meer gedecentraliseerd dan permissionless" },
          { en: "Permissionless protocols require government licenses", es: "Protocolos sin permisos requieren licencias gubernamentales", de: "Genehmigungsfreie Protokolle benötigen Regierungslizenzen", nl: "Permissionless protocollen vereisen overheidslicenties" },
          { en: "There is no functional difference between them", es: "No hay diferencia funcional entre ellos", de: "Es gibt keinen funktionalen Unterschied zwischen ihnen", nl: "Er is geen functioneel verschil tussen hen" }
        ],
        correct: 0,
        explanation: {
          en: "Permissionless DeFi protocols allow anyone to interact without approval or identity verification, embodying true decentralization. Permissioned protocols require whitelisting or approval, potentially for regulatory compliance but sacrificing some decentralization.",
          es: "Los protocolos DeFi sin permisos permiten a cualquiera interactuar sin aprobación o verificación de identidad, encarnando verdadera descentralización. Los protocolos con permisos requieren lista blanca o aprobación, potencialmente para cumplimiento regulatorio pero sacrificando algo de descentralización.",
          de: "Genehmigungsfreie DeFi-Protokolle ermöglichen es jedem, ohne Genehmigung oder Identitätsverifikation zu interagieren und verkörpern echte Dezentralisierung. Genehmigungsbasierte Protokolle erfordern Whitelisting oder Genehmigung, möglicherweise für regulatorische Compliance, opfern aber etwas Dezentralisierung.",
          nl: "Permissionless DeFi protocollen staan iedereen toe om te interageren zonder goedkeuring of identiteitsverificatie, wat echte decentralisatie belichaamt. Permissioned protocollen vereisen whitelisting of goedkeuring, mogelijk voor regulatoire compliance maar ten koste van enige decentralisatie."
        }
      },
      {
        question: {
          en: "What is composability in DeFi, often called 'money legos'?",
          es: "¿Qué es la componibilidad en DeFi, a menudo llamada 'legos de dinero'?",
          de: "Was ist Komposierbarkeit in DeFi, oft 'Geld-Legos' genannt?",
          nl: "Wat is composability in DeFi, vaak 'money legos' genoemd?"
        },
        options: [
          { en: "Ability to combine different DeFi protocols to create new financial products", es: "Capacidad de combinar diferentes protocolos DeFi para crear nuevos productos financieros", de: "Fähigkeit, verschiedene DeFi-Protokolle zu kombinieren, um neue Finanzprodukte zu erstellen", nl: "Vermogen om verschillende DeFi protocollen te combineren om nieuwe financiële producten te creëren" },
          { en: "Building DeFi applications using modular programming", es: "Construir aplicaciones DeFi usando programación modular", de: "DeFi-Anwendungen mit modularer Programmierung erstellen", nl: "DeFi applicaties bouwen met modulaire programmering" },
          { en: "Creating physical representations of digital assets", es: "Crear representaciones físicas de activos digitales", de: "Physische Darstellungen digitaler Assets erstellen", nl: "Fysieke representaties van digitale assets creëren" },
          { en: "Decomposing complex financial instruments into simple parts", es: "Descomponer instrumentos financieros complejos en partes simples", de: "Komplexe Finanzinstrumente in einfache Teile zerlegen", nl: "Complexe financiële instrumenten ontleden in eenvoudige onderdelen" }
        ],
        correct: 0,
        explanation: {
          en: "Composability allows DeFi protocols to integrate seamlessly, enabling users to combine lending, trading, yield farming, and other services in sophisticated ways. Like lego blocks, protocols can be stacked and combined to create complex financial strategies.",
          es: "La componibilidad permite que los protocolos DeFi se integren sin problemas, permitiendo a los usuarios combinar préstamos, trading, yield farming y otros servicios de maneras sofisticadas. Como bloques de lego, los protocolos pueden apilarse y combinarse para crear estrategias financieras complejas.",
          de: "Komposierbarkeit ermöglicht es DeFi-Protokollen, sich nahtlos zu integrieren, wodurch Nutzer Kreditvergabe, Handel, Yield Farming und andere Services auf raffinierte Weise kombinieren können. Wie Lego-Bausteine können Protokolle gestapelt und kombiniert werden, um komplexe Finanzstrategien zu erstellen.",
          nl: "Composability stelt DeFi protocollen in staat om naadloos te integreren, waardoor gebruikers lenen, handelen, yield farming en andere diensten op geavanceerde manieren kunnen combineren. Zoals lego blokken kunnen protocollen worden gestapeld en gecombineerd om complexe financiële strategieën te creëren."
        }
      },
      {
        question: {
          en: "What is a smart contract audit in DeFi?",
          es: "¿Qué es una auditoría de contrato inteligente en DeFi?",
          de: "Was ist ein Smart Contract-Audit in DeFi?",
          nl: "Wat is een smart contract audit in DeFi?"
        },
        options: [
          { en: "Security review of smart contract code to identify vulnerabilities", es: "Revisión de seguridad del código de contrato inteligente para identificar vulnerabilidades", de: "Sicherheitsüberprüfung von Smart Contract-Code zur Identifizierung von Schwachstellen", nl: "Beveiligingsreview van smart contract code om kwetsbaarheden te identificeren" },
          { en: "Financial audit of DeFi protocol's accounting records", es: "Auditoría financiera de registros contables del protocolo DeFi", de: "Finanzaudit der Buchhaltungsunterlagen des DeFi-Protokolls", nl: "Financiële audit van DeFi protocol's boekhoudkundige records" },
          { en: "Performance testing of smart contract execution speed", es: "Pruebas de rendimiento de velocidad de ejecución de contrato inteligente", de: "Leistungstest der Smart Contract-Ausführungsgeschwindigkeit", nl: "Prestatie testing van smart contract uitvoeringssnelheid" },
          { en: "Legal compliance review for regulatory requirements", es: "Revisión de cumplimiento legal para requisitos regulatorios", de: "Rechtliche Compliance-Überprüfung für regulatorische Anforderungen", nl: "Juridische compliance review voor regulatoire vereisten" }
        ],
        correct: 0,
        explanation: {
          en: "Smart contract audits involve thorough code reviews by security experts to identify bugs, vulnerabilities, and potential exploits before deployment. They help prevent hacks like reentrancy attacks, though they don't guarantee complete security.",
          es: "Las auditorías de contratos inteligentes involucran revisiones exhaustivas de código por expertos en seguridad para identificar bugs, vulnerabilidades y potenciales exploits antes del despliegue. Ayudan a prevenir hacks como ataques de reentrada, aunque no garantizan seguridad completa.",
          de: "Smart Contract-Audits beinhalten gründliche Code-Reviews durch Sicherheitsexperten zur Identifizierung von Bugs, Schwachstellen und potenziellen Exploits vor dem Deployment. Sie helfen, Hacks wie Reentrancy-Angriffe zu verhindern, garantieren aber keine vollständige Sicherheit.",
          nl: "Smart contract audits omvatten grondige code reviews door beveiligingsexperts om bugs, kwetsbaarheden en potentiële exploits te identificeren voor deployment. Ze helpen hacks zoals reentrancy attacks voorkomen, hoewel ze geen volledige beveiliging garanderen."
        }
      },
      {
        question: {
          en: "What is a cryptocurrency bridge and what risks do they present?",
          es: "¿Qué es un puente de criptomonedas y qué riesgos presentan?",
          de: "Was ist eine Kryptowährungs-Bridge und welche Risiken bergen sie?",
          nl: "Wat is een cryptocurrency bridge en welke risico's brengen ze met zich mee?"
        },
        options: [
          { en: "Protocol enabling asset transfers between blockchains, with smart contract risks", es: "Protocolo que permite transferencias de activos entre blockchains, con riesgos de contratos inteligentes", de: "Protokoll zur Asset-Übertragung zwischen Blockchains, mit Smart Contract-Risiken", nl: "Protocol dat asset transfers tussen blockchains mogelijk maakt, met smart contract risico's" },
          { en: "Physical infrastructure connecting blockchain networks", es: "Infraestructura física que conecta redes blockchain", de: "Physische Infrastruktur zur Verbindung von Blockchain-Netzwerken", nl: "Fysieke infrastructuur die blockchain netwerken verbindt" },
          { en: "Marketing partnership between different crypto projects", es: "Asociación de marketing entre diferentes proyectos crypto", de: "Marketing-Partnerschaft zwischen verschiedenen Krypto-Projekten", nl: "Marketing partnerschap tussen verschillende crypto projecten" },
          { en: "Legal framework for cross-border cryptocurrency regulations", es: "Marco legal para regulaciones de criptomonedas transfronterizas", de: "Rechtlicher Rahmen für grenzüberschreitende Kryptowährungs-Regulierungen", nl: "Juridisch kader voor grensoverschrijdende cryptocurrency regelgeving" }
        ],
        correct: 0,
        explanation: {
          en: "Crypto bridges enable users to transfer assets between different blockchains by locking assets on one chain and minting equivalent tokens on another. They've become major targets for hackers due to large asset pools and complex smart contract vulnerabilities.",
          es: "Los puentes crypto permiten a los usuarios transferir activos entre diferentes blockchains bloqueando activos en una cadena y acuñando tokens equivalentes en otra. Se han convertido en objetivos principales para hackers debido a grandes pools de activos y vulnerabilidades complejas de contratos inteligentes.",
          de: "Krypto-Bridges ermöglichen es Nutzern, Assets zwischen verschiedenen Blockchains zu übertragen, indem sie Assets auf einer Chain sperren und äquivalente Token auf einer anderen prägen. Sie sind zu Hauptzielen für Hacker geworden aufgrund großer Asset-Pools und komplexer Smart Contract-Schwachstellen.",
          nl: "Crypto bridges stellen gebruikers in staat assets tussen verschillende blockchains over te dragen door assets op één chain te vergrendelen en equivalente tokens op een andere te minten. Ze zijn hoofddoelwitten geworden voor hackers vanwege grote asset pools en complexe smart contract kwetsbaarheden."
        }
      }
    ]
  };

  // Export for use in the quiz application
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level5;
  } else if (typeof window !== 'undefined') {
    window.level5 = level5;
  }
})();