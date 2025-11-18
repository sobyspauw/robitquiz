// Quiz Level 6: Currencies - Cryptocurrency
(function() {
  const level6 = {
    name: {
      en: "Cryptocurrency - NFTs & Advanced Blockchain",
      es: "Criptomoneda - NFTs y Blockchain Avanzado",
      de: "Kryptowährung - NFTs & Fortgeschrittene Blockchain",
      nl: "Cryptocurrency - NFTs & Geavanceerde Blockchain"
    },
    questions: [
      {
        question: {
          en: "What is the ERC-721 standard primarily used for?",
          es: "¿Para qué se utiliza principalmente el estándar ERC-721?",
          de: "Wofür wird der ERC-721-Standard hauptsächlich verwendet?",
          nl: "Waarvoor wordt de ERC-721 standaard voornamelijk gebruikt?"
        },
        options: [
          { en: "Creating fungible tokens on Ethereum", es: "Crear tokens fungibles en Ethereum", de: "Erstellung fungibler Token auf Ethereum", nl: "Het maken van fungible tokens op Ethereum" },
          { en: "Creating non-fungible tokens (NFTs) on Ethereum", es: "Crear tokens no fungibles (NFTs) en Ethereum", de: "Erstellung non-fungibler Token (NFTs) auf Ethereum", nl: "Het maken van non-fungible tokens (NFTs) op Ethereum" },
          { en: "Creating stablecoins on Ethereum", es: "Crear stablecoins en Ethereum", de: "Erstellung von Stablecoins auf Ethereum", nl: "Het maken van stablecoins op Ethereum" },
          { en: "Creating governance tokens on Ethereum", es: "Crear tokens de gobernanza en Ethereum", de: "Erstellung von Governance-Token auf Ethereum", nl: "Het maken van governance tokens op Ethereum" }
        ],
        correct: 1,
        explanation: {
          en: "ERC-721 is the standard for non-fungible tokens (NFTs) on Ethereum. Each token is unique and cannot be exchanged on a 1:1 basis like fungible tokens, making it perfect for representing unique digital assets.",
          es: "ERC-721 es el estándar para tokens no fungibles (NFTs) en Ethereum. Cada token es único y no puede intercambiarse en una base 1:1 como tokens fungibles, haciéndolo perfecto para representar activos digitales únicos.",
          de: "ERC-721 ist der Standard für non-fungible Token (NFTs) auf Ethereum. Jeder Token ist einzigartig und kann nicht auf 1:1-Basis wie fungible Token getauscht werden, was ihn perfekt für die Darstellung einzigartiger digitaler Assets macht.",
          nl: "ERC-721 is de standaard voor non-fungible tokens (NFTs) op Ethereum. Elke token is uniek en kan niet op 1:1 basis worden uitgewisseld zoals fungible tokens, waardoor het perfect is voor het vertegenwoordigen van unieke digitale assets."
        }
      },
      {
        question: {
          en: "What does 'minting' an NFT mean?",
          es: "¿Qué significa 'mintear' un NFT?",
          de: "Was bedeutet das 'Minting' eines NFTs?",
          nl: "Wat betekent 'minting' van een NFT?"
        },
        options: [
          { en: "Creating and issuing a new unique token on the blockchain", es: "Crear y emitir un nuevo token único en la blockchain", de: "Erstellen und Ausgeben eines neuen einzigartigen Tokens auf der Blockchain", nl: "Het maken en uitgeven van een nieuwe unieke token op de blockchain" },
          { en: "Transferring an NFT to a new owner", es: "Transferir un NFT a un nuevo propietario", de: "Übertragung eines NFTs an einen neuen Besitzer", nl: "Een NFT overdragen aan een nieuwe eigenaar" },
          { en: "Destroying an existing NFT permanently", es: "Destruir un NFT existente permanentemente", de: "Dauerhafte Zerstörung eines bestehenden NFTs", nl: "Een bestaande NFT permanent vernietigen" },
          { en: "Converting a fungible token into an NFT", es: "Convertir un token fungible en un NFT", de: "Umwandlung eines fungiblen Tokens in ein NFT", nl: "Een fungible token omzetten naar een NFT" }
        ],
        correct: 0,
        explanation: {
          en: "Minting an NFT refers to the process of creating and recording a new unique token on the blockchain. This involves executing a smart contract function that assigns ownership and metadata to a new token ID.",
          es: "Mintear un NFT se refiere al proceso de crear y registrar un nuevo token único en la blockchain. Esto involucra ejecutar una función de contrato inteligente que asigna propiedad y metadatos a un nuevo ID de token.",
          de: "Das Minting eines NFTs bezieht sich auf den Prozess der Erstellung und Aufzeichnung eines neuen einzigartigen Tokens auf der Blockchain. Dies beinhaltet die Ausführung einer Smart Contract-Funktion, die einem neuen Token-ID Eigentum und Metadaten zuweist.",
          nl: "Minting van een NFT verwijst naar het proces van het maken en registreren van een nieuwe unieke token op de blockchain. Dit houdt in dat een smart contract functie wordt uitgevoerd die eigendom en metadata toewijst aan een nieuwe token ID."
        }
      },
      {
        question: {
          en: "What is the main difference between ERC-721 and ERC-1155 standards?",
          es: "¿Cuál es la principal diferencia entre los estándares ERC-721 y ERC-1155?",
          de: "Was ist der Hauptunterschied zwischen den Standards ERC-721 und ERC-1155?",
          nl: "Wat is het hoofdverschil tussen ERC-721 en ERC-1155 standaarden?"
        },
        options: [
          { en: "ERC-1155 allows both fungible and non-fungible tokens in one contract", es: "ERC-1155 permite tanto tokens fungibles como no fungibles en un contrato", de: "ERC-1155 ermöglicht sowohl fungible als auch non-fungible Token in einem Contract", nl: "ERC-1155 staat zowel fungible als non-fungible tokens toe in één contract" },
          { en: "ERC-721 is faster than ERC-1155", es: "ERC-721 es más rápido que ERC-1155", de: "ERC-721 ist schneller als ERC-1155", nl: "ERC-721 is sneller dan ERC-1155" },
          { en: "ERC-1155 only works on different blockchains", es: "ERC-1155 solo funciona en blockchains diferentes", de: "ERC-1155 funktioniert nur auf verschiedenen Blockchains", nl: "ERC-1155 werkt alleen op verschillende blockchains" },
          { en: "ERC-721 has better security features", es: "ERC-721 tiene mejores características de seguridad", de: "ERC-721 hat bessere Sicherheitsfeatures", nl: "ERC-721 heeft betere beveiligingsfuncties" }
        ],
        correct: 0,
        explanation: {
          en: "ERC-1155 is a multi-token standard that can handle both fungible and non-fungible tokens within a single smart contract, making it more gas-efficient for batch operations. ERC-721 handles only unique non-fungible tokens.",
          es: "ERC-1155 es un estándar multi-token que puede manejar tanto tokens fungibles como no fungibles dentro de un solo contrato inteligente, haciéndolo más eficiente en gas para operaciones en lote. ERC-721 maneja solo tokens no fungibles únicos.",
          de: "ERC-1155 ist ein Multi-Token-Standard, der sowohl fungible als auch non-fungible Token innerhalb eines einzigen Smart Contracts verwalten kann, was ihn gaseffizienter für Batch-Operationen macht. ERC-721 verwaltet nur einzigartige non-fungible Token.",
          nl: "ERC-1155 is een multi-token standaard die zowel fungible als non-fungible tokens kan verwerken binnen één smart contract, waardoor het gas-efficiënter is voor batch operaties. ERC-721 verwerkt alleen unieke non-fungible tokens."
        }
      },
      {
        question: {
          en: "What is IPFS in the context of NFT metadata storage?",
          es: "¿Qué es IPFS en el contexto del almacenamiento de metadatos de NFT?",
          de: "Was ist IPFS im Kontext der NFT-Metadaten-Speicherung?",
          nl: "Wat is IPFS in de context van NFT metadata opslag?"
        },
        options: [
          { en: "InterPlanetary File System - decentralized storage for NFT data", es: "Sistema de Archivos InterPlanetario - almacenamiento descentralizado para datos NFT", de: "InterPlanetary File System - dezentrale Speicherung für NFT-Daten", nl: "InterPlanetary File System - gedecentraliseerde opslag voor NFT data" },
          { en: "Internet Protocol File Sharing - a centralized database", es: "Compartición de Archivos de Protocolo de Internet - una base de datos centralizada", de: "Internet Protocol File Sharing - eine zentralisierte Datenbank", nl: "Internet Protocol File Sharing - een gecentraliseerde database" },
          { en: "Integrated Platform File Storage - blockchain-based storage", es: "Almacenamiento de Archivos de Plataforma Integrada - almacenamiento basado en blockchain", de: "Integrated Platform File Storage - blockchain-basierte Speicherung", nl: "Integrated Platform File Storage - blockchain-gebaseerde opslag" },
          { en: "International Public File System - government-controlled storage", es: "Sistema de Archivos Públicos Internacional - almacenamiento controlado por gobierno", de: "International Public File System - staatlich kontrollierte Speicherung", nl: "International Public File System - door de overheid gecontroleerde opslag" }
        ],
        correct: 0,
        explanation: {
          en: "IPFS (InterPlanetary File System) is a distributed, peer-to-peer protocol for storing and sharing data. NFTs often store their metadata and media files on IPFS to ensure decentralized, persistent storage that isn't dependent on centralized servers.",
          es: "IPFS (Sistema de Archivos InterPlanetario) es un protocolo distribuido, peer-to-peer para almacenar y compartir datos. Los NFTs a menudo almacenan sus metadatos y archivos de medios en IPFS para asegurar almacenamiento descentralizado y persistente que no depende de servidores centralizados.",
          de: "IPFS (InterPlanetary File System) ist ein verteiltes, Peer-to-Peer-Protokoll zum Speichern und Teilen von Daten. NFTs speichern oft ihre Metadaten und Mediendateien auf IPFS, um dezentrale, persistente Speicherung sicherzustellen, die nicht von zentralisierten Servern abhängt.",
          nl: "IPFS (InterPlanetary File System) is een gedistribueerd, peer-to-peer protocol voor het opslaan en delen van data. NFTs slaan vaak hun metadata en mediabestanden op IPFS op om gedecentraliseerde, persistente opslag te verzekeren die niet afhankelijk is van gecentraliseerde servers."
        }
      },
      {
        question: {
          en: "What is the purpose of royalties in NFT smart contracts?",
          es: "¿Cuál es el propósito de las regalías en contratos inteligentes de NFT?",
          de: "Was ist der Zweck von Lizenzgebühren in NFT-Smart-Contracts?",
          nl: "Wat is het doel van royalties in NFT smart contracts?"
        },
        options: [
          { en: "To ensure creators receive a percentage of secondary sales", es: "Para asegurar que los creadores reciban un porcentaje de ventas secundarias", de: "Um sicherzustellen, dass Schöpfer einen Prozentsatz der Sekundärverkäufe erhalten", nl: "Om ervoor te zorgen dat makers een percentage van secundaire verkopen ontvangen" },
          { en: "To pay transaction fees to miners", es: "Para pagar tarifas de transacción a mineros", de: "Um Transaktionsgebühren an Miner zu zahlen", nl: "Om transactiekosten aan miners te betalen" },
          { en: "To fund the development of new NFT standards", es: "Para financiar el desarrollo de nuevos estándares NFT", de: "Um die Entwicklung neuer NFT-Standards zu finanzieren", nl: "Om de ontwikkeling van nieuwe NFT standaarden te financieren" },
          { en: "To prevent unauthorized copying of NFTs", es: "Para prevenir copia no autorizada de NFTs", de: "Um unbefugtes Kopieren von NFTs zu verhindern", nl: "Om ongeautoriseerde kopieën van NFTs te voorkomen" }
        ],
        correct: 0,
        explanation: {
          en: "NFT royalties are programmed payments that ensure original creators continue to receive a percentage (usually 2.5-10%) of the sale price every time their NFT is resold, providing ongoing revenue for artists and creators.",
          es: "Las regalías de NFT son pagos programados que aseguran que los creadores originales continúen recibiendo un porcentaje (usualmente 2.5-10%) del precio de venta cada vez que su NFT se revende, proporcionando ingresos continuos para artistas y creadores.",
          de: "NFT-Lizenzgebühren sind programmierte Zahlungen, die sicherstellen, dass ursprüngliche Schöpfer weiterhin einen Prozentsatz (normalerweise 2,5-10%) des Verkaufspreises erhalten, jedes Mal wenn ihr NFT weiterverkauft wird, wodurch laufende Einnahmen für Künstler und Schöpfer bereitgestellt werden.",
          nl: "NFT royalties zijn geprogrammeerde betalingen die ervoor zorgen dat originele makers blijven een percentage (meestal 2,5-10%) van de verkoopprijs ontvangen elke keer dat hun NFT wordt doorverkocht, wat doorlopende inkomsten biedt voor kunstenaars en makers."
        }
      },
      {
        question: {
          en: "What is 'proof of ownership' in the context of NFTs?",
          es: "¿Qué es 'prueba de propiedad' en el contexto de NFTs?",
          de: "Was ist 'Eigentumsnachweis' im Kontext von NFTs?",
          nl: "Wat is 'proof of ownership' in de context van NFTs?"
        },
        options: [
          { en: "Cryptographic verification that someone owns a specific NFT", es: "Verificación criptográfica de que alguien posee un NFT específico", de: "Kryptographische Verifikation, dass jemand ein spezifisches NFT besitzt", nl: "Cryptografische verificatie dat iemand een specifieke NFT bezit" },
          { en: "Legal documentation proving NFT ownership", es: "Documentación legal probando propiedad de NFT", de: "Rechtliche Dokumentation zum Nachweis des NFT-Eigentums", nl: "Juridische documentatie die NFT eigendom bewijst" },
          { en: "Physical certificate associated with digital assets", es: "Certificado físico asociado con activos digitales", de: "Physisches Zertifikat, das mit digitalen Assets verbunden ist", nl: "Fysiek certificaat geassocieerd met digitale assets" },
          { en: "Government registration of NFT ownership", es: "Registro gubernamental de propiedad de NFT", de: "Staatliche Registrierung des NFT-Eigentums", nl: "Overheidsregistratie van NFT eigendom" }
        ],
        correct: 0,
        explanation: {
          en: "Proof of ownership in NFTs refers to the cryptographic evidence on the blockchain that demonstrates someone controls the private key associated with a particular NFT. This is verifiable, immutable, and doesn't require third-party validation.",
          es: "La prueba de propiedad en NFTs se refiere a la evidencia criptográfica en la blockchain que demuestra que alguien controla la clave privada asociada con un NFT particular. Esto es verificable, inmutable, y no requiere validación de terceros.",
          de: "Eigentumsnachweis bei NFTs bezieht sich auf den kryptographischen Beweis auf der Blockchain, der zeigt, dass jemand den privaten Schlüssel kontrolliert, der mit einem bestimmten NFT verbunden ist. Dies ist verifizierbar, unveränderlich und erfordert keine Validierung durch Dritte.",
          nl: "Proof of ownership bij NFTs verwijst naar het cryptografische bewijs op de blockchain dat toont dat iemand de private key controleert die geassocieerd is met een bepaalde NFT. Dit is verifieerbaar, onveranderlijk en vereist geen validatie door derden."
        }
      },
      {
        question: {
          en: "What is a 'rug pull' in the context of NFT projects?",
          es: "¿Qué es un 'rug pull' en el contexto de proyectos NFT?",
          de: "Was ist ein 'Rug Pull' im Kontext von NFT-Projekten?",
          nl: "Wat is een 'rug pull' in de context van NFT projecten?"
        },
        options: [
          { en: "A legitimate marketing strategy for NFT launches", es: "Una estrategia de marketing legítima para lanzamientos de NFT", de: "Eine legitime Marketingstrategie für NFT-Launches", nl: "Een legitieme marketingstrategie voor NFT launches" },
          { en: "Scam where creators abandon the project and steal funds", es: "Estafa donde los creadores abandonan el proyecto y roban fondos", de: "Betrug, bei dem Schöpfer das Projekt verlassen und Gelder stehlen", nl: "Oplichting waarbij makers het project verlaten en fondsen stelen" },
          { en: "Technical issue causing NFT metadata to disappear", es: "Problema técnico causando que los metadatos de NFT desaparezcan", de: "Technisches Problem, das zum Verschwinden von NFT-Metadaten führt", nl: "Technisch probleem waardoor NFT metadata verdwijnt" },
          { en: "Process of removing NFTs from marketplace listings", es: "Proceso de remover NFTs de listados de marketplace", de: "Prozess der Entfernung von NFTs aus Marketplace-Listen", nl: "Proces van het verwijderen van NFTs uit marketplace listings" }
        ],
        correct: 1,
        explanation: {
          en: "A rug pull in NFT projects occurs when creators promote an NFT collection, collect funds from sales, and then abandon the project without delivering promised features, leaving investors with worthless NFTs.",
          es: "Un rug pull en proyectos NFT ocurre cuando los creadores promueven una colección NFT, recolectan fondos de ventas, y luego abandonan el proyecto sin entregar características prometidas, dejando a los inversores con NFTs sin valor.",
          de: "Ein Rug Pull bei NFT-Projekten tritt auf, wenn Schöpfer eine NFT-Sammlung bewerben, Gelder aus Verkäufen sammeln und dann das Projekt verlassen, ohne versprochene Features zu liefern, wodurch Investoren mit wertlosen NFTs zurückbleiben.",
          nl: "Een rug pull in NFT projecten treedt op wanneer makers een NFT collectie promoten, fondsen verzamelen uit verkopen, en dan het project verlaten zonder beloofde functies te leveren, waardoor investeerders met waardeloze NFTs achterblijven."
        }
      },
      {
        question: {
          en: "What is the difference between on-chain and off-chain NFT metadata storage?",
          es: "¿Cuál es la diferencia entre almacenamiento de metadatos NFT on-chain y off-chain?",
          de: "Was ist der Unterschied zwischen On-Chain- und Off-Chain-NFT-Metadaten-Speicherung?",
          nl: "Wat is het verschil tussen on-chain en off-chain NFT metadata opslag?"
        },
        options: [
          { en: "On-chain is stored directly on blockchain, off-chain uses external storage", es: "On-chain se almacena directamente en blockchain, off-chain usa almacenamiento externo", de: "On-Chain wird direkt auf der Blockchain gespeichert, Off-Chain nutzt externe Speicherung", nl: "On-chain wordt direct op blockchain opgeslagen, off-chain gebruikt externe opslag" },
          { en: "On-chain is cheaper than off-chain storage", es: "On-chain es más barato que almacenamiento off-chain", de: "On-Chain ist billiger als Off-Chain-Speicherung", nl: "On-chain is goedkoper dan off-chain opslag" },
          { en: "Off-chain provides better security than on-chain", es: "Off-chain proporciona mejor seguridad que on-chain", de: "Off-Chain bietet bessere Sicherheit als On-Chain", nl: "Off-chain biedt betere beveiliging dan on-chain" },
          { en: "There is no functional difference between them", es: "No hay diferencia funcional entre ellos", de: "Es gibt keinen funktionalen Unterschied zwischen ihnen", nl: "Er is geen functioneel verschil tussen hen" }
        ],
        correct: 0,
        explanation: {
          en: "On-chain storage keeps NFT metadata directly on the blockchain (more expensive but permanent), while off-chain storage uses external services like IPFS or centralized servers (cheaper but potentially less permanent or accessible).",
          es: "El almacenamiento on-chain mantiene metadatos NFT directamente en la blockchain (más caro pero permanente), mientras que el almacenamiento off-chain usa servicios externos como IPFS o servidores centralizados (más barato pero potencialmente menos permanente o accesible).",
          de: "On-Chain-Speicherung hält NFT-Metadaten direkt auf der Blockchain (teurer aber permanent), während Off-Chain-Speicherung externe Services wie IPFS oder zentralisierte Server nutzt (billiger aber potenziell weniger permanent oder zugänglich).",
          nl: "On-chain opslag houdt NFT metadata direct op de blockchain (duurder maar permanent), terwijl off-chain opslag externe services zoals IPFS of gecentraliseerde servers gebruikt (goedkoper maar mogelijk minder permanent of toegankelijk)."
        }
      },
      {
        question: {
          en: "What is a profile picture (PFP) NFT collection?",
          es: "¿Qué es una colección NFT de foto de perfil (PFP)?",
          de: "Was ist eine Profilbild (PFP) NFT-Sammlung?",
          nl: "Wat is een profielfoto (PFP) NFT collectie?"
        },
        options: [
          { en: "NFTs specifically designed for use as social media avatars", es: "NFTs específicamente diseñados para usar como avatares de redes sociales", de: "NFTs, die speziell für die Verwendung als Social Media-Avatare entwickelt wurden", nl: "NFTs specifiek ontworpen voor gebruik als social media avatars" },
          { en: "NFTs that can only be viewed as profile pictures", es: "NFTs que solo pueden verse como fotos de perfil", de: "NFTs, die nur als Profilbilder angezeigt werden können", nl: "NFTs die alleen als profielfotos kunnen worden bekeken" },
          { en: "Photographs of famous people sold as NFTs", es: "Fotografías de personas famosas vendidas como NFTs", de: "Fotografien berühmter Personen, die als NFTs verkauft werden", nl: "Foto's van beroemde mensen verkocht als NFTs" },
          { en: "NFTs that automatically change based on market prices", es: "NFTs que cambian automáticamente basándose en precios de mercado", de: "NFTs, die sich automatisch basierend auf Marktpreisen ändern", nl: "NFTs die automatisch veranderen op basis van marktprijzen" }
        ],
        correct: 0,
        explanation: {
          en: "PFP NFT collections like CryptoPunks, Bored Ape Yacht Club, and Azuki are digital artworks designed primarily for use as profile pictures on social media platforms, often featuring algorithmic generation with various traits and rarities.",
          es: "Las colecciones NFT PFP como CryptoPunks, Bored Ape Yacht Club, y Azuki son obras de arte digitales diseñadas principalmente para usar como fotos de perfil en plataformas de redes sociales, a menudo presentando generación algorítmica con varios rasgos y rarezas.",
          de: "PFP-NFT-Sammlungen wie CryptoPunks, Bored Ape Yacht Club und Azuki sind digitale Kunstwerke, die hauptsächlich für die Verwendung als Profilbilder auf Social Media-Plattformen entwickelt wurden, oft mit algorithmischer Generierung mit verschiedenen Eigenschaften und Seltenheiten.",
          nl: "PFP NFT collecties zoals CryptoPunks, Bored Ape Yacht Club, en Azuki zijn digitale kunstwerken ontworpen voornamelijk voor gebruik als profielfotos op social media platforms, vaak met algoritmische generatie met verschillende eigenschappen en zeldzaamheden."
        }
      },
      {
        question: {
          en: "What is an NFT marketplace and how does it function?",
          es: "¿Qué es un marketplace de NFT y cómo funciona?",
          de: "Was ist ein NFT-Marktplatz und wie funktioniert er?",
          nl: "Wat is een NFT marketplace en hoe functioneert het?"
        },
        options: [
          { en: "Platform where users can buy, sell, and trade NFTs", es: "Plataforma donde usuarios pueden comprar, vender e intercambiar NFTs", de: "Plattform, auf der Nutzer NFTs kaufen, verkaufen und handeln können", nl: "Platform waar gebruikers NFTs kunnen kopen, verkopen en verhandelen" },
          { en: "Government-regulated exchange for digital assets", es: "Intercambio regulado por el gobierno para activos digitales", de: "Staatlich regulierte Börse für digitale Assets", nl: "Door de overheid gereguleerde exchange voor digitale assets" },
          { en: "Physical location where NFTs are displayed", es: "Ubicación física donde se muestran NFTs", de: "Physischer Ort, an dem NFTs ausgestellt werden", nl: "Fysieke locatie waar NFTs worden tentoongesteld" },
          { en: "Software for creating new NFT collections", es: "Software para crear nuevas colecciones NFT", de: "Software zur Erstellung neuer NFT-Sammlungen", nl: "Software voor het maken van nieuwe NFT collecties" }
        ],
        correct: 0,
        explanation: {
          en: "NFT marketplaces like OpenSea, Rarible, and Foundation are platforms that facilitate the buying, selling, and trading of NFTs. They provide user interfaces, handle transactions, and often include features like auctions, offers, and collection browsing.",
          es: "Los marketplaces de NFT como OpenSea, Rarible, y Foundation son plataformas que facilitan la compra, venta e intercambio de NFTs. Proporcionan interfaces de usuario, manejan transacciones, y a menudo incluyen características como subastas, ofertas, y navegación de colecciones.",
          de: "NFT-Marktplätze wie OpenSea, Rarible und Foundation sind Plattformen, die den Kauf, Verkauf und Handel von NFTs erleichtern. Sie bieten Benutzeroberflächen, wickeln Transaktionen ab und enthalten oft Features wie Auktionen, Angebote und Sammlungsdurchsicht.",
          nl: "NFT marketplaces zoals OpenSea, Rarible, en Foundation zijn platforms die het kopen, verkopen en verhandelen van NFTs faciliteren. Ze bieden gebruikersinterfaces, verwerken transacties, en bevatten vaak functies zoals veilingen, biedingen, en collectie browsing."
        }
      },
      {
        question: {
          en: "What is 'utility' in NFT projects?",
          es: "¿Qué es 'utilidad' en proyectos NFT?",
          de: "Was ist 'Utility' in NFT-Projekten?",
          nl: "Wat is 'utility' in NFT projecten?"
        },
        options: [
          { en: "Additional benefits or functionality beyond just owning the NFT", es: "Beneficios adicionales o funcionalidad más allá de solo poseer el NFT", de: "Zusätzliche Vorteile oder Funktionalität über den bloßen Besitz des NFTs hinaus", nl: "Extra voordelen of functionaliteit naast het alleen bezitten van de NFT" },
          { en: "The electricity cost of minting NFTs", es: "El costo de electricidad de mintear NFTs", de: "Die Stromkosten für das Minting von NFTs", nl: "De elektriciteitskosten van het minten van NFTs" },
          { en: "The ability to copy and paste NFT images", es: "La capacidad de copiar y pegar imágenes NFT", de: "Die Fähigkeit, NFT-Bilder zu kopieren und einzufügen", nl: "Het vermogen om NFT afbeeldingen te kopiëren en plakken" },
          { en: "The technical specifications of the blockchain", es: "Las especificaciones técnicas de la blockchain", de: "Die technischen Spezifikationen der Blockchain", nl: "De technische specificaties van de blockchain" }
        ],
        correct: 0,
        explanation: {
          en: "NFT utility refers to additional value propositions beyond the artwork itself, such as access to exclusive communities, events, games, governance rights, or future airdrops. This utility gives NFTs functional value beyond speculation.",
          es: "La utilidad NFT se refiere a propuestas de valor adicionales más allá de la obra de arte en sí, como acceso a comunidades exclusivas, eventos, juegos, derechos de gobernanza, o airdrops futuros. Esta utilidad da a los NFTs valor funcional más allá de la especulación.",
          de: "NFT-Utility bezieht sich auf zusätzliche Wertversprechen über das Kunstwerk selbst hinaus, wie Zugang zu exklusiven Communities, Events, Spielen, Governance-Rechten oder zukünftigen Airdrops. Diese Utility gibt NFTs funktionalen Wert über Spekulation hinaus.",
          nl: "NFT utility verwijst naar extra waardeproposities naast het kunstwerk zelf, zoals toegang tot exclusieve gemeenschappen, evenementen, games, governance rechten, of toekomstige airdrops. Deze utility geeft NFTs functionele waarde naast speculatie."
        }
      },
      {
        question: {
          en: "What is a 'floor price' in NFT collections?",
          es: "¿Qué es un 'precio mínimo' en colecciones NFT?",
          de: "Was ist ein 'Floor Price' in NFT-Sammlungen?",
          nl: "Wat is een 'floor price' in NFT collecties?"
        },
        options: [
          { en: "The lowest listed price for any NFT in a collection", es: "El precio listado más bajo para cualquier NFT en una colección", de: "Der niedrigste gelistete Preis für jedes NFT in einer Sammlung", nl: "De laagste genoteerde prijs voor elke NFT in een collectie" },
          { en: "The original minting price of the NFTs", es: "El precio original de minteo de los NFTs", de: "Der ursprüngliche Minting-Preis der NFTs", nl: "De oorspronkelijke minting prijs van de NFTs" },
          { en: "The price at which all NFTs must be sold", es: "El precio al cual todos los NFTs deben venderse", de: "Der Preis, zu dem alle NFTs verkauft werden müssen", nl: "De prijs waarvoor alle NFTs moeten worden verkocht" },
          { en: "The minimum bid accepted in auctions", es: "La oferta mínima aceptada en subastas", de: "Das Mindestgebot, das bei Auktionen akzeptiert wird", nl: "Het minimumbod geaccepteerd in veilingen" }
        ],
        correct: 0,
        explanation: {
          en: "Floor price represents the lowest asking price for any NFT currently listed for sale in a collection. It's an important metric that indicates the minimum entry point for buying into a particular NFT project.",
          es: "El precio mínimo representa el precio de venta más bajo para cualquier NFT actualmente listado para venta en una colección. Es una métrica importante que indica el punto de entrada mínimo para comprar en un proyecto NFT particular.",
          de: "Der Floor Price repräsentiert den niedrigsten Angebotspreis für jedes NFT, das derzeit zum Verkauf in einer Sammlung gelistet ist. Es ist eine wichtige Metrik, die den minimalen Einstiegspunkt für den Kauf in ein bestimmtes NFT-Projekt anzeigt.",
          nl: "Floor price vertegenwoordigt de laagste vraagprijs voor elke NFT die momenteel te koop staat in een collectie. Het is een belangrijke metriek die het minimale instappunt aangeeft voor het kopen in een bepaald NFT project."
        }
      },
      {
        question: {
          en: "What is the concept of 'rarity' in algorithmically generated NFT collections?",
          es: "¿Qué es el concepto de 'rareza' en colecciones NFT generadas algorítmicamente?",
          de: "Was ist das Konzept der 'Seltenheit' in algorithmisch generierten NFT-Sammlungen?",
          nl: "Wat is het concept van 'zeldzaamheid' in algoritmisch gegenereerde NFT collecties?"
        },
        options: [
          { en: "How few NFTs have specific traits or combinations of traits", es: "Qué tan pocos NFTs tienen rasgos específicos o combinaciones de rasgos", de: "Wie wenige NFTs spezifische Eigenschaften oder Kombinationen von Eigenschaften haben", nl: "Hoeveel NFTs specifieke eigenschappen of combinaties van eigenschappen hebben" },
          { en: "The age of the NFT since it was minted", es: "La edad del NFT desde que fue minteado", de: "Das Alter des NFTs seit dem Minting", nl: "De leeftijd van de NFT sinds het werd gemint" },
          { en: "The file size of the NFT image", es: "El tamaño de archivo de la imagen NFT", de: "Die Dateigröße des NFT-Bildes", nl: "De bestandsgrootte van de NFT afbeelding" },
          { en: "The number of times an NFT has been traded", es: "El número de veces que un NFT ha sido comerciado", de: "Die Anzahl der Male, die ein NFT gehandelt wurde", nl: "Het aantal keren dat een NFT is verhandeld" }
        ],
        correct: 0,
        explanation: {
          en: "Rarity in NFT collections refers to how uncommon specific traits or trait combinations are within the collection. Rarer traits typically make NFTs more valuable, with some tools calculating overall rarity scores based on trait frequency.",
          es: "La rareza en colecciones NFT se refiere a qué tan poco comunes son rasgos específicos o combinaciones de rasgos dentro de la colección. Los rasgos más raros típicamente hacen a los NFTs más valiosos, con algunas herramientas calculando puntuaciones de rareza general basadas en frecuencia de rasgos.",
          de: "Seltenheit in NFT-Sammlungen bezieht sich darauf, wie ungewöhnlich spezifische Eigenschaften oder Eigenschaftskombinationen innerhalb der Sammlung sind. Seltenere Eigenschaften machen NFTs typischerweise wertvoller, mit einigen Tools, die Gesamt-Seltenheits-Scores basierend auf Eigenschaftshäufigkeit berechnen.",
          nl: "Zeldzaamheid in NFT collecties verwijst naar hoe ongewoon specifieke eigenschappen of eigenschap combinaties zijn binnen de collectie. Zeldzamere eigenschappen maken NFTs doorgaans waardevoller, met sommige tools die algemene zeldzaamheidscores berekenen gebaseerd op eigenschap frequentie."
        }
      },
      {
        question: {
          en: "What is an NFT 'burn' and why might someone do it?",
          es: "¿Qué es 'quemar' un NFT y por qué alguien podría hacerlo?",
          de: "Was ist ein NFT-'Burn' und warum könnte jemand das tun?",
          nl: "Wat is een NFT 'burn' en waarom zou iemand dat doen?"
        },
        options: [
          { en: "Permanently destroying an NFT by sending it to an unrecoverable address", es: "Destruir permanentemente un NFT enviándolo a una dirección irrecuperable", de: "Dauerhaftes Zerstören eines NFTs durch Senden an eine unwiederbringliche Adresse", nl: "Permanent vernietigen van een NFT door het naar een onherstelbaar adres te sturen" },
          { en: "Converting an NFT back to cryptocurrency", es: "Convertir un NFT de vuelta a criptomoneda", de: "Ein NFT zurück in Kryptowährung umwandeln", nl: "Een NFT terug omzetten naar cryptocurrency" },
          { en: "Transferring ownership to the original creator", es: "Transferir propiedad al creador original", de: "Eigentumsübertragung an den ursprünglichen Schöpfer", nl: "Eigendom overdragen aan de oorspronkelijke maker" },
          { en: "Encrypting the NFT to prevent viewing", es: "Cifrar el NFT para prevenir visualización", de: "Das NFT verschlüsseln, um das Betrachten zu verhindern", nl: "De NFT versleutelen om weergave te voorkomen" }
        ],
        correct: 0,
        explanation: {
          en: "Burning an NFT means permanently removing it from circulation by sending it to a 'burn address' (an address where no one has the private key). This might be done to reduce supply, create scarcity, access special features, or for artistic/symbolic purposes.",
          es: "Quemar un NFT significa removerlo permanentemente de circulación enviándolo a una 'dirección de quema' (una dirección donde nadie tiene la clave privada). Esto podría hacerse para reducir suministro, crear escasez, acceder a características especiales, o por propósitos artísticos/simbólicos.",
          de: "Ein NFT zu verbrennen bedeutet, es dauerhaft aus dem Umlauf zu entfernen, indem es an eine 'Burn-Adresse' gesendet wird (eine Adresse, bei der niemand den privaten Schlüssel hat). Dies könnte getan werden, um das Angebot zu reduzieren, Knappheit zu schaffen, auf spezielle Features zuzugreifen oder für künstlerische/symbolische Zwecke.",
          nl: "Een NFT verbranden betekent het permanent uit circulatie halen door het naar een 'burn adres' te sturen (een adres waarvan niemand de private key heeft). Dit kan worden gedaan om aanbod te verminderen, schaarste te creëren, toegang tot speciale functies te krijgen, of voor artistieke/symbolische doeleinden."
        }
      },
      {
        question: {
          en: "What is the role of smart contracts in facilitating NFT auctions?",
          es: "¿Cuál es el papel de los contratos inteligentes en facilitar subastas NFT?",
          de: "Welche Rolle spielen Smart Contracts bei der Ermöglichung von NFT-Auktionen?",
          nl: "Wat is de rol van smart contracts bij het faciliteren van NFT veilingen?"
        },
        options: [
          { en: "Automatically handle bidding, timing, and transfers without intermediaries", es: "Manejar automáticamente ofertas, tiempo y transferencias sin intermediarios", de: "Automatisches Verwalten von Geboten, Timing und Übertragungen ohne Zwischenhändler", nl: "Automatisch afhandelen van biedingen, timing en overdrachten zonder tussenpersonen" },
          { en: "Store high-resolution images of NFTs", es: "Almacenar imágenes de alta resolución de NFTs", de: "Hochauflösende Bilder von NFTs speichern", nl: "Hoge resolutie afbeeldingen van NFTs opslaan" },
          { en: "Verify the authenticity of physical artworks", es: "Verificar la autenticidad de obras de arte físicas", de: "Die Authentizität physischer Kunstwerke verifizieren", nl: "De authenticiteit van fysieke kunstwerken verifiëren" },
          { en: "Calculate market prices for similar NFTs", es: "Calcular precios de mercado para NFTs similares", de: "Marktpreise für ähnliche NFTs berechnen", nl: "Marktprijzen berekenen voor vergelijkbare NFTs" }
        ],
        correct: 0,
        explanation: {
          en: "Smart contracts automate NFT auctions by managing bid tracking, enforcing timing rules, determining winners, and automatically transferring both the NFT to the highest bidder and funds to the seller, all without requiring manual intervention.",
          es: "Los contratos inteligentes automatizan subastas NFT gestionando seguimiento de ofertas, aplicando reglas de tiempo, determinando ganadores, y transfiriendo automáticamente tanto el NFT al postor más alto como fondos al vendedor, todo sin requerir intervención manual.",
          de: "Smart Contracts automatisieren NFT-Auktionen durch Verwaltung der Gebotverfolgung, Durchsetzung von Timing-Regeln, Bestimmung von Gewinnern und automatische Übertragung sowohl des NFTs an den Höchstbietenden als auch der Gelder an den Verkäufer, alles ohne manuelle Intervention.",
          nl: "Smart contracts automatiseren NFT veilingen door bied tracking te beheren, timing regels af te dwingen, winnaars te bepalen, en automatisch zowel de NFT naar de hoogste bieder als fondsen naar de verkoper over te dragen, allemaal zonder handmatige interventie."
        }
      },
      {
        question: {
          en: "What is 'generative art' in the context of NFTs?",
          es: "¿Qué es 'arte generativo' en el contexto de NFTs?",
          de: "Was ist 'generative Kunst' im Kontext von NFTs?",
          nl: "Wat is 'generatieve kunst' in de context van NFTs?"
        },
        options: [
          { en: "Art created using algorithms and code, often with randomness", es: "Arte creado usando algoritmos y código, a menudo con aleatoriedad", de: "Kunst, die mit Algorithmen und Code erstellt wird, oft mit Zufälligkeit", nl: "Kunst gemaakt met algoritmen en code, vaak met willekeur" },
          { en: "Art that generates cryptocurrency when viewed", es: "Arte que genera criptomoneda cuando se ve", de: "Kunst, die Kryptowährung generiert, wenn sie betrachtet wird", nl: "Kunst die cryptocurrency genereert wanneer bekeken" },
          { en: "Art created by artificial intelligence only", es: "Arte creado solo por inteligencia artificial", de: "Kunst, die nur von künstlicher Intelligenz erstellt wird", nl: "Kunst gemaakt alleen door kunstmatige intelligentie" },
          { en: "Traditional art that is converted into digital format", es: "Arte tradicional que se convierte a formato digital", de: "Traditionelle Kunst, die in digitales Format umgewandelt wird", nl: "Traditionele kunst die wordt omgezet naar digitaal formaat" }
        ],
        correct: 0,
        explanation: {
          en: "Generative art uses algorithms, code, and often randomness to create unique artworks. Projects like Art Blocks feature artists who write code that generates different variations, creating unique pieces when the NFT is minted.",
          es: "El arte generativo usa algoritmos, código, y a menudo aleatoriedad para crear obras de arte únicas. Proyectos como Art Blocks presentan artistas que escriben código que genera diferentes variaciones, creando piezas únicas cuando el NFT es minteado.",
          de: "Generative Kunst verwendet Algorithmen, Code und oft Zufälligkeit, um einzigartige Kunstwerke zu schaffen. Projekte wie Art Blocks zeigen Künstler, die Code schreiben, der verschiedene Variationen generiert und einzigartige Stücke schafft, wenn das NFT gemint wird.",
          nl: "Generatieve kunst gebruikt algoritmen, code, en vaak willekeur om unieke kunstwerken te maken. Projecten zoals Art Blocks tonen kunstenaars die code schrijven die verschillende variaties genereert, waarbij unieke stukken worden gemaakt wanneer de NFT wordt gemint."
        }
      },
      {
        question: {
          en: "What is 'gas optimization' in NFT smart contracts?",
          es: "¿Qué es 'optimización de gas' en contratos inteligentes NFT?",
          de: "Was ist 'Gas-Optimierung' in NFT-Smart-Contracts?",
          nl: "Wat is 'gas optimalisatie' in NFT smart contracts?"
        },
        options: [
          { en: "Techniques to reduce transaction costs when minting or trading NFTs", es: "Técnicas para reducir costos de transacción al mintear o comerciar NFTs", de: "Techniken zur Reduzierung von Transaktionskosten beim Minting oder Handel von NFTs", nl: "Technieken om transactiekosten te verminderen bij het minten of verhandelen van NFTs" },
          { en: "Converting NFTs to use less storage space", es: "Convertir NFTs para usar menos espacio de almacenamiento", de: "NFTs konvertieren, um weniger Speicherplatz zu verwenden", nl: "NFTs converteren om minder opslagruimte te gebruiken" },
          { en: "Speeding up NFT metadata loading times", es: "Acelerar tiempos de carga de metadatos NFT", de: "Beschleunigung der NFT-Metadaten-Ladezeiten", nl: "NFT metadata laadtijden versnellen" },
          { en: "Reducing the file size of NFT images", es: "Reducir el tamaño de archivo de imágenes NFT", de: "Reduzierung der Dateigröße von NFT-Bildern", nl: "Bestandsgrootte van NFT afbeeldingen verkleinen" }
        ],
        correct: 0,
        explanation: {
          en: "Gas optimization involves writing smart contract code more efficiently to reduce the computational resources required for transactions, thereby lowering gas fees for users when minting, buying, or selling NFTs.",
          es: "La optimización de gas involucra escribir código de contrato inteligente más eficientemente para reducir los recursos computacionales requeridos para transacciones, por lo tanto reduciendo tarifas de gas para usuarios al mintear, comprar, o vender NFTs.",
          de: "Gas-Optimierung beinhaltet das effizientere Schreiben von Smart Contract-Code, um die für Transaktionen erforderlichen Rechenressourcen zu reduzieren und dadurch die Gasgebühren für Nutzer beim Minting, Kauf oder Verkauf von NFTs zu senken.",
          nl: "Gas optimalisatie houdt in dat smart contract code efficiënter wordt geschreven om de computationele bronnen die nodig zijn voor transacties te verminderen, waardoor gaskosten voor gebruikers worden verlaagd bij het minten, kopen, of verkopen van NFTs."
        }
      },
      {
        question: {
          en: "What is the concept of 'crosschain NFTs' and why are they important?",
          es: "¿Qué es el concepto de 'NFTs de cadenas cruzadas' y por qué son importantes?",
          de: "Was ist das Konzept von 'Cross-Chain-NFTs' und warum sind sie wichtig?",
          nl: "Wat is het concept van 'crosschain NFTs' en waarom zijn ze belangrijk?"
        },
        options: [
          { en: "NFTs that can exist and be transferred across multiple blockchains", es: "NFTs que pueden existir y transferirse a través de múltiples blockchains", de: "NFTs, die auf mehreren Blockchains existieren und übertragen werden können", nl: "NFTs die kunnen bestaan en worden overgedragen over meerdere blockchains" },
          { en: "NFTs that represent physical objects from different countries", es: "NFTs que representan objetos físicos de diferentes países", de: "NFTs, die physische Objekte aus verschiedenen Ländern repräsentieren", nl: "NFTs die fysieke objecten uit verschillende landen vertegenwoordigen" },
          { en: "NFTs created through collaboration between different artists", es: "NFTs creados a través de colaboración entre diferentes artistas", de: "NFTs, die durch Zusammenarbeit zwischen verschiedenen Künstlern erstellt wurden", nl: "NFTs gemaakt door samenwerking tussen verschillende kunstenaars" },
          { en: "NFTs that can be converted between different file formats", es: "NFTs que pueden convertirse entre diferentes formatos de archivo", de: "NFTs, die zwischen verschiedenen Dateiformaten konvertiert werden können", nl: "NFTs die kunnen worden geconverteerd tussen verschillende bestandsformaten" }
        ],
        correct: 0,
        explanation: {
          en: "Cross-chain NFTs can operate across multiple blockchain networks, allowing users to move their NFTs between different ecosystems. This interoperability reduces platform lock-in and provides access to different features, marketplaces, and communities.",
          es: "Los NFTs de cadenas cruzadas pueden operar a través de múltiples redes blockchain, permitiendo a usuarios mover sus NFTs entre diferentes ecosistemas. Esta interoperabilidad reduce el bloqueo de plataforma y proporciona acceso a diferentes características, marketplaces, y comunidades.",
          de: "Cross-Chain-NFTs können über mehrere Blockchain-Netzwerke hinweg operieren und ermöglichen es Nutzern, ihre NFTs zwischen verschiedenen Ökosystemen zu bewegen. Diese Interoperabilität reduziert Platform-Lock-in und bietet Zugang zu verschiedenen Features, Marktplätzen und Communities.",
          nl: "Cross-chain NFTs kunnen opereren over meerdere blockchain netwerken, waardoor gebruikers hun NFTs kunnen verplaatsen tussen verschillende ecosystemen. Deze interoperabiliteit vermindert platform lock-in en biedt toegang tot verschillende functies, marketplaces, en gemeenschappen."
        }
      },
      {
        question: {
          en: "What is 'dynamic NFT' or 'programmable NFT' technology?",
          es: "¿Qué es la tecnología de 'NFT dinámico' o 'NFT programable'?",
          de: "Was ist 'dynamische NFT'- oder 'programmierbare NFT'-Technologie?",
          nl: "Wat is 'dynamische NFT' of 'programmeerbare NFT' technologie?"
        },
        options: [
          { en: "NFTs that can change properties based on external data or conditions", es: "NFTs que pueden cambiar propiedades basándose en datos externos o condiciones", de: "NFTs, die Eigenschaften basierend auf externen Daten oder Bedingungen ändern können", nl: "NFTs die eigenschappen kunnen veranderen gebaseerd op externe data of voorwaarden" },
          { en: "NFTs that automatically increase in value over time", es: "NFTs que aumentan automáticamente en valor con el tiempo", de: "NFTs, die automatisch über die Zeit an Wert gewinnen", nl: "NFTs die automatisch in waarde stijgen over tijd" },
          { en: "NFTs that can be copied and pasted freely", es: "NFTs que pueden copiarse y pegarse libremente", de: "NFTs, die frei kopiert und eingefügt werden können", nl: "NFTs die vrij gekopieerd en geplakt kunnen worden" },
          { en: "NFTs that require programming skills to view", es: "NFTs que requieren habilidades de programación para ver", de: "NFTs, die Programmierkenntnisse zum Betrachten erfordern", nl: "NFTs die programmeervaardigheden vereisen om te bekijken" }
        ],
        correct: 0,
        explanation: {
          en: "Dynamic or programmable NFTs can change their appearance, properties, or metadata based on external triggers like time, weather data, user interactions, or blockchain events. This creates more interactive and evolving digital assets.",
          es: "Los NFTs dinámicos o programables pueden cambiar su apariencia, propiedades, o metadatos basándose en disparadores externos como tiempo, datos meteorológicos, interacciones de usuario, o eventos blockchain. Esto crea activos digitales más interactivos y evolutivos.",
          de: "Dynamische oder programmierbare NFTs können ihr Aussehen, ihre Eigenschaften oder Metadaten basierend auf externen Auslösern wie Zeit, Wetterdaten, Nutzerinteraktionen oder Blockchain-Events ändern. Dies schafft interaktivere und sich entwickelnde digitale Assets.",
          nl: "Dynamische of programmeerbare NFTs kunnen hun uiterlijk, eigenschappen, of metadata veranderen gebaseerd op externe triggers zoals tijd, weerdata, gebruikersinteracties, of blockchain gebeurtenissen. Dit creëert meer interactieve en evoluerende digitale assets."
        }
      },
      {
        question: {
          en: "What is the difference between fungible and non-fungible tokens?",
          es: "¿Cuál es la diferencia entre tokens fungibles y no fungibles?",
          de: "Was ist der Unterschied zwischen fungiblen und nicht-fungiblen Token?",
          nl: "Wat is het verschil tussen fungible en non-fungible tokens?"
        },
        options: [
          { en: "Fungible tokens are interchangeable, non-fungible tokens are unique", es: "Los tokens fungibles son intercambiables, los tokens no fungibles son únicos", de: "Fungible Token sind austauschbar, nicht-fungible Token sind einzigartig", nl: "Fungible tokens zijn uitwisselbaar, non-fungible tokens zijn uniek" },
          { en: "Fungible tokens are newer technology", es: "Los tokens fungibles son tecnología más nueva", de: "Fungible Token sind neuere Technologie", nl: "Fungible tokens zijn nieuwere technologie" },
          { en: "Non-fungible tokens are always worth more", es: "Los tokens no fungibles siempre valen más", de: "Nicht-fungible Token sind immer mehr wert", nl: "Non-fungible tokens zijn altijd meer waard" },
          { en: "There is no real difference", es: "No hay diferencia real", de: "Es gibt keinen wirklichen Unterschied", nl: "Er is geen echt verschil" }
        ],
        correct: 0,
        explanation: {
          en: "Fungible tokens (like Bitcoin or ETH) are identical and interchangeable - one Bitcoin equals any other Bitcoin. Non-fungible tokens (NFTs) are unique and cannot be replaced with something else - each has distinct properties.",
          es: "Los tokens fungibles (como Bitcoin o ETH) son idénticos e intercambiables - un Bitcoin equivale a cualquier otro Bitcoin. Los tokens no fungibles (NFTs) son únicos y no pueden ser reemplazados por otra cosa - cada uno tiene propiedades distintas.",
          de: "Fungible Token (wie Bitcoin oder ETH) sind identisch und austauschbar - ein Bitcoin entspricht jedem anderen Bitcoin. Nicht-fungible Token (NFTs) sind einzigartig und können nicht durch etwas anderes ersetzt werden - jeder hat unterschiedliche Eigenschaften.",
          nl: "Fungible tokens (zoals Bitcoin of ETH) zijn identiek en uitwisselbaar - één Bitcoin is gelijk aan elke andere Bitcoin. Non-fungible tokens (NFTs) zijn uniek en kunnen niet vervangen worden door iets anders - elk heeft onderscheidende eigenschappen."
        }
      }
    ]
  };

  // Export for use in the quiz application
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level6;
  } else if (typeof window !== 'undefined') {
    window.level6 = level6;
  }
})();