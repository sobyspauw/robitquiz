// Quiz Level 8: Currencies - Cryptocurrency
(function() {
  const level8 = {
    name: {
      en: "Cryptocurrency - Expert V",
      es: "Criptomoneda - Experto V",
      de: "Kryptowährung - Experte V",
      nl: "Cryptocurrency - Expert V"
    },
    questions: [
      {
        question: {
          en: "In quantum-resistant blockchain designs, what is the primary advantage of 'Lattice-based' cryptography over other post-quantum approaches?",
          es: "En diseños blockchain resistentes a cuánticos, ¿cuál es la principal ventaja de la criptografía 'basada en retículas' sobre otros enfoques post-cuánticos?",
          de: "Was ist der Hauptvorteil von 'Gitter-basierter' Kryptographie gegenüber anderen Post-Quanten-Ansätzen in quantenresistenten Blockchain-Designs?",
          nl: "Wat is het primaire voordeel van 'Rooster-gebaseerde' cryptografie ten opzichte van andere post-quantum benaderingen in quantum-resistente blockchain ontwerpen?"
        },
        options: [
          { en: "Efficient homomorphic properties enabling privacy-preserving computations", es: "Propiedades homomórficas eficientes que permiten computaciones que preservan privacidad", de: "Effiziente homomorphe Eigenschaften für datenschutzwahrende Berechnungen", nl: "Efficiënte homomorfische eigenschappen die privacy-behoudende berekeningen mogelijk maken" },
          { en: "Smaller key sizes compared to hash-based signatures", es: "Tamaños de clave más pequeños comparados con firmas basadas en hash", de: "Kleinere Schlüsselgrößen im Vergleich zu hash-basierten Signaturen", nl: "Kleinere sleutelgroottes vergeleken met hash-gebaseerde handtekeningen" },
          { en: "Faster signature generation than isogeny-based schemes", es: "Generación de firmas más rápida que esquemas basados en isogenia", de: "Schnellere Signaturgenerierung als isogenie-basierte Schemas", nl: "Snellere handtekening generatie dan isogenie-gebaseerde schema's" },
          { en: "Complete immunity to all known quantum algorithms", es: "Inmunidad completa a todos los algoritmos cuánticos conocidos", de: "Vollständige Immunität gegen alle bekannten Quantenalgorithmen", nl: "Volledige immuniteit tegen alle bekende quantum algoritmen" }
        ],
        correct: 0,
        explanation: {
          en: "Lattice-based cryptography offers unique homomorphic properties that enable privacy-preserving computations while maintaining quantum resistance. This makes it particularly valuable for blockchain applications requiring both quantum security and privacy features like confidential transactions or private smart contracts.",
          es: "La criptografía basada en retículas ofrece propiedades homomórficas únicas que permiten computaciones que preservan privacidad mientras mantienen resistencia cuántica. Esto la hace particularmente valiosa para aplicaciones blockchain que requieren tanto seguridad cuántica como características de privacidad como transacciones confidenciales o contratos inteligentes privados.",
          de: "Gitter-basierte Kryptographie bietet einzigartige homomorphe Eigenschaften, die datenschutzwahrende Berechnungen ermöglichen und gleichzeitig Quantenresistenz aufrechterhalten. Dies macht sie besonders wertvoll für Blockchain-Anwendungen, die sowohl Quantensicherheit als auch Datenschutzfunktionen wie vertrauliche Transaktionen oder private Smart Contracts erfordern.",
          nl: "Rooster-gebaseerde cryptografie biedt unieke homomorfische eigenschappen die privacy-behoudende berekeningen mogelijk maken terwijl quantum weerstand wordt behouden. Dit maakt het bijzonder waardevol voor blockchain applicaties die zowel quantum beveiliging als privacy functies vereisen zoals vertrouwelijke transacties of private smart contracts."
        }
      },
      {
        question: {
          en: "What is the experimental significance of 'Accumulators' in blockchain state management research?",
          es: "¿Cuál es la importancia experimental de los 'Acumuladores' en investigación de gestión de estado blockchain?",
          de: "Was ist die experimentelle Bedeutung von 'Akkumulatoren' in der Blockchain-Zustandsverwaltungsforschung?",
          nl: "Wat is de experimentele betekenis van 'Accumulators' in blockchain toestand management onderzoek?"
        },
        options: [
          { en: "Constant-size proofs of set membership without revealing set contents", es: "Pruebas de tamaño constante de pertenencia a conjunto sin revelar contenidos del conjunto", de: "Konstante Beweis-Größe für Mengenmitgliedschaft ohne Offenlegung der Mengeninhalte", nl: "Constante grootte bewijzen van set lidmaatschap zonder set inhoud te onthullen" },
          { en: "Automatic garbage collection for unused blockchain states", es: "Recolección automática de basura para estados blockchain no utilizados", de: "Automatische Garbage Collection für ungenutzte Blockchain-Zustände", nl: "Automatische garbage collection voor ongebruikte blockchain toestanden" },
          { en: "Energy-efficient mining through accumulated proof-of-work", es: "Minería energéticamente eficiente a través de proof-of-work acumulado", de: "Energieeffizientes Mining durch akkumulierten Proof-of-Work", nl: "Energie-efficiënte mining door geaccumuleerde proof-of-work" },
          { en: "Decentralized storage compression algorithms", es: "Algoritmos de compresión de almacenamiento descentralizado", de: "Dezentrale Speicher-Kompressionsalgorithmen", nl: "Gedecentraliseerde opslag compressie algoritmen" }
        ],
        correct: 0,
        explanation: {
          en: "Cryptographic accumulators enable constant-size proofs for set membership, allowing verification that an element belongs to a set without revealing other set members. This is crucial for blockchain applications requiring privacy-preserving membership proofs, such as anonymous credentials or private state verification.",
          es: "Los acumuladores criptográficos permiten pruebas de tamaño constante para pertenencia a conjuntos, permitiendo verificación de que un elemento pertenece a un conjunto sin revelar otros miembros del conjunto. Esto es crucial para aplicaciones blockchain que requieren pruebas de pertenencia que preservan privacidad, como credenciales anónimas o verificación de estado privado.",
          de: "Kryptographische Akkumulatoren ermöglichen konstante Beweis-Größe für Mengenmitgliedschaft, wodurch verifiziert werden kann, dass ein Element zu einer Menge gehört, ohne andere Mengenmitglieder zu offenbaren. Dies ist entscheidend für Blockchain-Anwendungen, die datenschutzwahrende Mitgliedschaftsbeweise erfordern, wie anonyme Anmeldedaten oder private Zustandsverifikation.",
          nl: "Cryptografische accumulators maken constante grootte bewijzen mogelijk voor set lidmaatschap, waardoor verificatie mogelijk is dat een element tot een set behoort zonder andere set leden te onthullen. Dit is cruciaal voor blockchain applicaties die privacy-behoudende lidmaatschap bewijzen vereisen, zoals anonieme referenties of private toestand verificatie."
        }
      },
      {
        question: {
          en: "In experimental 'Maximal Extractable Value' (MEV) research, what is the theoretical limit of extractable value per block?",
          es: "En investigación experimental de 'Valor Máximo Extraíble' (MEV), ¿cuál es el límite teórico de valor extraíble por bloque?",
          de: "Was ist das theoretische Limit des extrahierbaren Werts pro Block in experimenteller 'Maximal Extractable Value' (MEV)-Forschung?",
          nl: "Wat is de theoretische limiet van extraheerbare waarde per blok in experimenteel 'Maximal Extractable Value' (MEV) onderzoek?"
        },
        options: [
          { en: "Total economic value of all transactions within the block's gas limit", es: "Valor económico total de todas las transacciones dentro del límite de gas del bloque", de: "Gesamter wirtschaftlicher Wert aller Transaktionen innerhalb des Block-Gas-Limits", nl: "Totale economische waarde van alle transacties binnen de gas limiet van het blok" },
          { en: "Sum of all transaction fees paid by users", es: "Suma de todas las tarifas de transacción pagadas por usuarios", de: "Summe aller von Nutzern gezahlten Transaktionsgebühren", nl: "Som van alle transactiekosten betaald door gebruikers" },
          { en: "Block reward plus priority fees only", es: "Recompensa del bloque más tarifas prioritarias solamente", de: "Block-Belohnung plus Prioritätsgebühren nur", nl: "Blok beloning plus prioriteitsfees alleen" },
          { en: "Value determined by proof-of-work difficulty", es: "Valor determinado por dificultad de proof-of-work", de: "Wert bestimmt durch Proof-of-Work-Schwierigkeit", nl: "Waarde bepaald door proof-of-work moeilijkheid" }
        ],
        correct: 0,
        explanation: {
          en: "The theoretical maximum MEV per block is bounded by the total economic value of all possible transaction orderings and inclusions within the block's constraints (gas limit, block size). This includes arbitrage opportunities, liquidations, and sandwich attacks on all available economic activities, limited only by block space and computational constraints.",
          es: "El MEV máximo teórico por bloque está limitado por el valor económico total de todos los ordenamientos e inclusiones de transacciones posibles dentro de las restricciones del bloque (límite de gas, tamaño del bloque). Esto incluye oportunidades de arbitraje, liquidaciones y ataques sándwich en todas las actividades económicas disponibles, limitado solo por espacio de bloque y restricciones computacionales.",
          de: "Der theoretische maximale MEV pro Block ist durch den gesamten wirtschaftlichen Wert aller möglichen Transaktionsordnungen und -einschlüsse innerhalb der Block-Beschränkungen (Gas-Limit, Block-Größe) begrenzt. Dies umfasst Arbitrage-Möglichkeiten, Liquidationen und Sandwich-Angriffe auf alle verfügbaren wirtschaftlichen Aktivitäten, nur durch Block-Space und rechnerische Beschränkungen limitiert.",
          nl: "De theoretische maximale MEV per blok wordt begrensd door de totale economische waarde van alle mogelijke transactie ordeningen en opnames binnen de blok beperkingen (gas limiet, blok grootte). Dit omvat arbitrage mogelijkheden, liquidaties, en sandwich aanvallen op alle beschikbare economische activiteiten, alleen beperkt door blok ruimte en computationele beperkingen."
        }
      },
      {
        question: {
          en: "What is the core innovation of 'Programmable Privacy' research in blockchain systems?",
          es: "¿Cuál es la innovación central de la investigación de 'Privacidad Programable' en sistemas blockchain?",
          de: "Was ist die Kerninnovation der 'Programmable Privacy'-Forschung in Blockchain-Systemen?",
          nl: "Wat is de kerninnovatie van 'Programmable Privacy' onderzoek in blockchain systemen?"
        },
        options: [
          { en: "Application-specific privacy policies enforced at the protocol level", es: "Políticas de privacidad específicas de aplicación aplicadas a nivel de protocolo", de: "Anwendungsspezifische Datenschutzrichtlinien auf Protokollebene durchgesetzt", nl: "Applicatie-specifieke privacy beleid afgedwongen op protocol niveau" },
          { en: "Universal encryption for all blockchain transactions", es: "Cifrado universal para todas las transacciones blockchain", de: "Universelle Verschlüsselung für alle Blockchain-Transaktionen", nl: "Universele encryptie voor alle blockchain transacties" },
          { en: "Automated compliance with international privacy laws", es: "Cumplimiento automatizado con leyes internacionales de privacidad", de: "Automatisierte Einhaltung internationaler Datenschutzgesetze", nl: "Geautomatiseerde naleving van internationale privacy wetten" },
          { en: "Zero-knowledge proofs for all smart contract executions", es: "Pruebas de conocimiento cero para todas las ejecuciones de contratos inteligentes", de: "Zero-Knowledge-Beweise für alle Smart-Contract-Ausführungen", nl: "Zero-knowledge bewijzen voor alle smart contract uitvoeringen" }
        ],
        correct: 0,
        explanation: {
          en: "Programmable privacy enables applications to define and enforce custom privacy policies at the protocol level, allowing fine-grained control over what information is revealed, to whom, and under what conditions. This goes beyond simple encryption to provide context-aware, application-specific privacy guarantees.",
          es: "La privacidad programable permite a las aplicaciones definir y aplicar políticas de privacidad personalizadas a nivel de protocolo, permitiendo control fino sobre qué información se revela, a quién, y bajo qué condiciones. Esto va más allá del cifrado simple para proporcionar garantías de privacidad específicas de aplicación y conscientes del contexto.",
          de: "Programmable Privacy ermöglicht es Anwendungen, benutzerdefinierte Datenschutzrichtlinien auf Protokollebene zu definieren und durchzusetzen, wodurch eine feinkörnige Kontrolle darüber ermöglicht wird, welche Informationen wem und unter welchen Bedingungen preisgegeben werden. Dies geht über einfache Verschlüsselung hinaus und bietet kontextbewusste, anwendungsspezifische Datenschutzgarantien.",
          nl: "Programmable privacy stelt applicaties in staat om aangepaste privacy beleid te definiëren en af te dwingen op protocol niveau, waardoor fijnmazige controle mogelijk is over welke informatie wordt onthuld, aan wie, en onder welke voorwaarden. Dit gaat verder dan eenvoudige encryptie om context-bewuste, applicatie-specifieke privacy garanties te bieden."
        }
      },
      {
        question: {
          en: "In experimental 'Heterogeneous Sharding' designs, what problem does cross-shard state synchronization attempt to solve?",
          es: "En diseños experimentales de 'Sharding Heterogéneo', ¿qué problema intenta resolver la sincronización de estado entre shards?",
          de: "Was für ein Problem versucht die Cross-Shard-Zustandssynchronisation in experimentellen 'Heterogeneous Sharding'-Designs zu lösen?",
          nl: "Welk probleem probeert cross-shard toestand synchronisatie op te lossen in experimentele 'Heterogeneous Sharding' ontwerpen?"
        },
        options: [
          { en: "Atomic execution of transactions spanning multiple specialized shards", es: "Ejecución atómica de transacciones que abarcan múltiples shards especializados", de: "Atomare Ausführung von Transaktionen, die mehrere spezialisierte Shards umfassen", nl: "Atomaire uitvoering van transacties die meerdere gespecialiseerde shards overspannen" },
          { en: "Uniform gas pricing across all network partitions", es: "Precios de gas uniformes en todas las particiones de red", de: "Einheitliche Gas-Preisgestaltung über alle Netzwerkpartitionen", nl: "Uniforme gas prijsstelling over alle netwerk partities" },
          { en: "Centralized validator rotation scheduling", es: "Programación centralizada de rotación de validadores", de: "Zentralisierte Validator-Rotationsplanung", nl: "Gecentraliseerde validator rotatie planning" },
          { en: "Consistent block timing across heterogeneous consensus mechanisms", es: "Tiempo de bloque consistente a través de mecanismos de consenso heterogéneos", de: "Konsistente Block-Timing über heterogene Konsensmechanismen", nl: "Consistente blok timing over heterogene consensus mechanismen" }
        ],
        correct: 0,
        explanation: {
          en: "Cross-shard state synchronization in heterogeneous sharding ensures atomic execution of complex transactions that require interaction between different specialized shards (e.g., DeFi shard, NFT shard, compute shard). This maintains transaction consistency and prevents partial execution failures across the heterogeneous system.",
          es: "La sincronización de estado entre shards en sharding heterogéneo asegura ejecución atómica de transacciones complejas que requieren interacción entre diferentes shards especializados (ej. shard DeFi, shard NFT, shard de cómputo). Esto mantiene consistencia de transacciones y previene fallas de ejecución parcial a través del sistema heterogéneo.",
          de: "Cross-Shard-Zustandssynchronisation in heterogenem Sharding gewährleistet atomare Ausführung komplexer Transaktionen, die Interaktion zwischen verschiedenen spezialisierten Shards erfordern (z.B. DeFi-Shard, NFT-Shard, Compute-Shard). Dies erhält Transaktionskonsistenz und verhindert partielle Ausführungsfehler über das heterogene System.",
          nl: "Cross-shard toestand synchronisatie in heterogene sharding zorgt voor atomaire uitvoering van complexe transacties die interactie vereisen tussen verschillende gespecialiseerde shards (bijv. DeFi shard, NFT shard, compute shard). Dit handhaaft transactie consistentie en voorkomt gedeeltelijke uitvoeringsfalen over het heterogene systeem."
        }
      },
      {
        question: {
          en: "What is the experimental advantage of 'Folding Schemes' over traditional recursive SNARKs in proof composition?",
          es: "¿Cuál es la ventaja experimental de los 'Esquemas de Plegado' sobre SNARKs recursivos tradicionales en composición de pruebas?",
          de: "Was ist der experimentelle Vorteil von 'Folding Schemes' gegenüber traditionellen rekursiven SNARKs in der Beweis-Komposition?",
          nl: "Wat is het experimentele voordeel van 'Folding Schemes' ten opzichte van traditionele recursieve SNARKs in bewijs compositie?"
        },
        options: [
          { en: "Eliminating the need for expensive recursive verification within proofs", es: "Eliminar la necesidad de verificación recursiva costosa dentro de las pruebas", de: "Eliminierung der Notwendigkeit teurer rekursiver Verifikation innerhalb von Beweisen", nl: "Het elimineren van de noodzaak voor dure recursieve verificatie binnen bewijzen" },
          { en: "Achieving constant proof size regardless of computation length", es: "Lograr tamaño de prueba constante independientemente de la longitud de computación", de: "Konstante Beweis-Größe unabhängig von der Berechnungslänge erreichen", nl: "Constante bewijs grootte bereiken ongeacht berekeningslengte" },
          { en: "Enabling perfect zero-knowledge without trusted setup", es: "Permitir conocimiento cero perfecto sin configuración confiada", de: "Perfektes Zero-Knowledge ohne vertrauensw\u00fcrdiges Setup ermöglichen", nl: "Perfect zero-knowledge mogelijk maken zonder vertrouwde setup" },
          { en: "Providing quantum resistance for all proof operations", es: "Proporcionar resistencia cuántica para todas las operaciones de prueba", de: "Quantenresistenz für alle Beweis-Operationen bereitstellen", nl: "Quantum weerstand bieden voor alle bewijs operaties" }
        ],
        correct: 0,
        explanation: {
          en: "Folding schemes avoid the expensive recursive verification circuits required in traditional recursive SNARKs by 'folding' multiple computation instances into a single instance without verification overhead. This makes iterative proof composition much more efficient for long-running computations.",
          es: "Los esquemas de plegado evitan los costosos circuitos de verificación recursiva requeridos en SNARKs recursivos tradicionales 'plegando' múltiples instancias de computación en una sola instancia sin sobrecarga de verificación. Esto hace la composición de pruebas iterativas mucho más eficiente para computaciones de larga duración.",
          de: "Folding Schemes vermeiden die teuren rekursiven Verifikationsschaltkreise, die in traditionellen rekursiven SNARKs erforderlich sind, indem sie mehrere Berechnungsinstanzen in eine einzige Instanz 'falten', ohne Verifikations-Overhead. Dies macht iterative Beweis-Komposition für langandauernde Berechnungen viel effizienter.",
          nl: "Folding schemes vermijden de dure recursieve verificatie circuits die vereist zijn in traditionele recursieve SNARKs door meerdere berekeningsinstanties te 'vouwen' in een enkele instantie zonder verificatie overhead. Dit maakt iteratieve bewijs compositie veel efficiënter voor langlopende berekeningen."
        }
      },
      {
        question: {
          en: "In experimental 'Decentralized Physical Infrastructure Networks' (DePIN), what is the primary tokenomic innovation?",
          es: "En 'Redes de Infraestructura Física Descentralizada' (DePIN) experimentales, ¿cuál es la innovación tokenómica principal?",
          de: "Was ist die primäre tokenomische Innovation in experimentellen 'Decentralized Physical Infrastructure Networks' (DePIN)?",
          nl: "Wat is de primaire tokenomische innovatie in experimentele 'Decentralized Physical Infrastructure Networks' (DePIN)?"
        },
        options: [
          { en: "Proof-of-Physical-Work rewarding real-world infrastructure contributions", es: "Proof-of-Physical-Work recompensando contribuciones de infraestructura del mundo real", de: "Proof-of-Physical-Work zur Belohnung von realen Infrastrukturbeiträgen", nl: "Proof-of-Physical-Work dat bijdragen aan echte infrastructuur beloont" },
          { en: "Automated staking based on geographic location", es: "Staking automatizado basado en ubicación geográfica", de: "Automatisiertes Staking basierend auf geografischer Lage", nl: "Geautomatiseerde staking gebaseerd op geografische locatie" },
          { en: "Cross-chain bridge rewards for infrastructure providers", es: "Recompensas de puente entre cadenas para proveedores de infraestructura", de: "Cross-Chain-Bridge-Belohnungen für Infrastrukturanbieter", nl: "Cross-chain bridge beloningen voor infrastructuur providers" },
          { en: "Dynamic fee adjustment based on network congestion", es: "Ajuste dinámico de tarifas basado en congestión de red", de: "Dynamische Gebührenanpassung basierend auf Netzwerküberlastung", nl: "Dynamische kostenbestandsaanpassing gebaseerd op netwerkcongestie" }
        ],
        correct: 0,
        explanation: {
          en: "DePIN protocols introduce Proof-of-Physical-Work mechanisms that reward participants for providing real-world physical infrastructure (like wireless coverage, storage capacity, or computing power) with tokens. This creates economic incentives for decentralized infrastructure deployment and maintenance.",
          es: "Los protocolos DePIN introducen mecanismos Proof-of-Physical-Work que recompensan a participantes por proporcionar infraestructura física del mundo real (como cobertura inalámbrica, capacidad de almacenamiento, o poder de cómputo) con tokens. Esto crea incentivos económicos para despliegue y mantenimiento de infraestructura descentralizada.",
          de: "DePIN-Protokolle führen Proof-of-Physical-Work-Mechanismen ein, die Teilnehmer für die Bereitstellung realer physischer Infrastruktur (wie drahtlose Abdeckung, Speicherkapazität oder Rechenleistung) mit Token belohnen. Dies schafft wirtschaftliche Anreize für den Einsatz und die Wartung dezentraler Infrastruktur.",
          nl: "DePIN protocollen introduceren Proof-of-Physical-Work mechanismen die deelnemers belonen voor het leveren van echte fysieke infrastructuur (zoals draadloze dekking, opslagcapaciteit, of rekenkracht) met tokens. Dit creëert economische prikkels voor gedecentraliseerde infrastructuur implementatie en onderhoud."
        }
      },
      {
        question: {
          en: "What is the theoretical foundation of 'Witness Encryption' in blockchain privacy applications?",
          es: "¿Cuál es la base teórica del 'Cifrado de Testigo' en aplicaciones de privacidad blockchain?",
          de: "Was ist die theoretische Grundlage von 'Witness Encryption' in Blockchain-Datenschutzanwendungen?",
          nl: "Wat is de theoretische basis van 'Witness Encryption' in blockchain privacy applicaties?"
        },
        options: [
          { en: "Encryption that can only be decrypted by providing a valid witness to an NP statement", es: "Cifrado que solo puede descifrarse proporcionando un testigo válido a una declaración NP", de: "Verschlüsselung, die nur durch Bereitstellung eines gültigen Zeugen für eine NP-Aussage entschlüsselt werden kann", nl: "Encryptie die alleen kan worden ontsleuteld door een geldige getuige te verstrekken aan een NP verklaring" },
          { en: "Time-locked encryption based on computational puzzles", es: "Cifrado bloqueado en tiempo basado en rompecabezas computacionales", de: "Zeitgebundene Verschlüsselung basierend auf rechnerischen Rätseln", nl: "Tijd-vergrendelde encryptie gebaseerd op computationele puzzels" },
          { en: "Multi-party computation enabling collaborative decryption", es: "Computación multi-partidaria que permite descifrado colaborativo", de: "Mehrparteien-Berechnung für kollaborative Entschlüsselung", nl: "Multi-party berekening die collaboratieve ontsleuteling mogelijk maakt" },
          { en: "Quantum key distribution for secure communication channels", es: "Distribución cuántica de claves para canales de comunicación seguros", de: "Quantenschlüsselverteilung für sichere Kommunikationskanäle", nl: "Quantum sleuteldistributie voor veilige communicatiekanalen" }
        ],
        correct: 0,
        explanation: {
          en: "Witness encryption allows encryption of messages that can only be decrypted by someone who possesses a valid witness (proof) for an NP statement. In blockchain applications, this enables conditional decryption based on blockchain events, smart contract states, or cryptographic proofs without revealing the witness.",
          es: "El cifrado de testigo permite cifrado de mensajes que solo pueden descifrarse por alguien que posea un testigo válido (prueba) para una declaración NP. En aplicaciones blockchain, esto permite descifrado condicional basado en eventos blockchain, estados de contratos inteligentes, o pruebas criptográficas sin revelar el testigo.",
          de: "Witness Encryption ermöglicht Verschlüsselung von Nachrichten, die nur von jemandem entschlüsselt werden können, der einen gültigen Zeugen (Beweis) für eine NP-Aussage besitzt. In Blockchain-Anwendungen ermöglicht dies bedingte Entschlüsselung basierend auf Blockchain-Ereignissen, Smart-Contract-Zuständen oder kryptographischen Beweisen ohne Offenlegung des Zeugen.",
          nl: "Witness encryption maakt encryptie van berichten mogelijk die alleen kunnen worden ontsleuteld door iemand die een geldige getuige (bewijs) bezit voor een NP verklaring. In blockchain applicaties maakt dit conditionele ontsleuteling mogelijk gebaseerd op blockchain gebeurtenissen, smart contract toestanden, of cryptografische bewijzen zonder de getuige te onthullen."
        }
      },
      {
        question: {
          en: "In experimental 'Coordinated Multi-chain Consensus', what is the primary research challenge?",
          es: "En 'Consenso Multi-cadena Coordinado' experimental, ¿cuál es el principal desafío de investigación?",
          de: "Was ist die primäre Forschungsherausforderung in experimentellem 'Coordinated Multi-chain Consensus'?",
          nl: "Wat is de primaire onderzoeksuitdaging in experimentele 'Coordinated Multi-chain Consensus'?"
        },
        options: [
          { en: "Achieving global state consistency across heterogeneous blockchain architectures", es: "Lograr consistencia de estado global a través de arquitecturas blockchain heterogéneas", de: "Globale Zustandskonsistenz über heterogene Blockchain-Architekturen erreichen", nl: "Globale toestand consistentie bereiken over heterogene blockchain architecturen" },
          { en: "Reducing transaction fees across all participating chains", es: "Reducir tarifas de transacción en todas las cadenas participantes", de: "Transaktionsgebühren über alle teilnehmenden Ketten reduzieren", nl: "Transactiekosten verminderen over alle deelnemende ketens" },
          { en: "Standardizing smart contract languages for interoperability", es: "Estandarizar lenguajes de contratos inteligentes para interoperabilidad", de: "Smart-Contract-Sprachen für Interoperabilität standardisieren", nl: "Smart contract talen standaardiseren voor interoperabiliteit" },
          { en: "Maximizing mining rewards across multiple networks", es: "Maximizar recompensas de minería a través de múltiples redes", de: "Mining-Belohnungen über mehrere Netzwerke maximieren", nl: "Mining beloningen maximaliseren over meerdere netwerken" }
        ],
        correct: 0,
        explanation: {
          en: "Coordinated multi-chain consensus research focuses on achieving global state consistency across different blockchain architectures while maintaining their individual properties. This involves complex challenges in synchronization, conflict resolution, and maintaining security guarantees across heterogeneous consensus mechanisms.",
          es: "La investigación de consenso multi-cadena coordinado se enfoca en lograr consistencia de estado global a través de diferentes arquitecturas blockchain mientras mantiene sus propiedades individuales. Esto involucra desafíos complejos en sincronización, resolución de conflictos, y mantenimiento de garantías de seguridad a través de mecanismos de consenso heterogéneos.",
          de: "Koordinierte Multi-Chain-Konsens-Forschung konzentriert sich darauf, globale Zustandskonsistenz über verschiedene Blockchain-Architekturen zu erreichen, während ihre individuellen Eigenschaften beibehalten werden. Dies beinhaltet komplexe Herausforderungen in Synchronisation, Konfliktlösung und Aufrechterhaltung von Sicherheitsgarantien über heterogene Konsensmechanismen.",
          nl: "Gecoördineerd multi-chain consensus onderzoek richt zich op het bereiken van globale toestand consistentie over verschillende blockchain architecturen terwijl hun individuele eigenschappen behouden blijven. Dit omvat complexe uitdagingen in synchronisatie, conflict resolutie, en het handhaven van beveiligingsgaranties over heterogene consensus mechanismen."
        }
      },
      {
        question: {
          en: "What is the experimental significance of 'Probabilistic Proofs' in blockchain scalability research?",
          es: "¿Cuál es la importancia experimental de las 'Pruebas Probabilísticas' en investigación de escalabilidad blockchain?",
          de: "Was ist die experimentelle Bedeutung von 'Probabilistischen Beweisen' in der Blockchain-Skalierbarkeitsforschung?",
          nl: "Wat is de experimentele betekenis van 'Probabilistische Bewijzen' in blockchain schaalbaarheid onderzoek?"
        },
        options: [
          { en: "Trading perfect soundness for practical verification efficiency with bounded error rates", es: "Intercambiar solidez perfecta por eficiencia de verificación práctica con tasas de error limitadas", de: "Perfekte Soundness gegen praktische Verifikationseffizienz mit begrenzten Fehlerraten eintauschen", nl: "Perfecte soliditeit ruilen voor praktische verificatie efficiëntie met begrensde foutpercentages" },
          { en: "Eliminating all verification requirements for maximum speed", es: "Eliminar todos los requisitos de verificación para velocidad máxima", de: "Alle Verifikationsanforderungen für maximale Geschwindigkeit eliminieren", nl: "Alle verificatie vereisten elimineren voor maximale snelheid" },
          { en: "Requiring multiple independent verifications for certainty", es: "Requerir múltiples verificaciones independientes para certeza", de: "Mehrere unabhängige Verifikationen für Gewissheit erfordern", nl: "Meerdere onafhankelijke verificaties vereisen voor zekerheid" },
          { en: "Using only deterministic proofs without probability", es: "Usar solo pruebas determinísticas sin probabilidad", de: "Nur deterministische Beweise ohne Wahrscheinlichkeit verwenden", nl: "Alleen deterministische bewijzen gebruiken zonder waarschijnlijkheid" }
        ],
        correct: 0,
        explanation: {
          en: "Probabilistic proofs allow trading perfect soundness guarantees for significantly improved verification efficiency. By accepting a small, bounded probability of error, these systems can achieve much faster verification times and smaller proof sizes, making them practical for high-throughput blockchain applications where perfect security may be less critical than performance.",
          es: "Las pruebas probabilísticas permiten intercambiar garantías de solidez perfecta por eficiencia de verificación significativamente mejorada. Al aceptar una pequeña probabilidad limitada de error, estos sistemas pueden lograr tiempos de verificación mucho más rápidos y tamaños de prueba más pequeños, haciéndolos prácticos para aplicaciones blockchain de alto rendimiento donde seguridad perfecta puede ser menos crítica que rendimiento.",
          de: "Probabilistische Beweise ermöglichen den Austausch perfekter Soundness-Garantien gegen deutlich verbesserte Verifikationseffizienz. Durch Akzeptanz einer kleinen, begrenzten Fehlerwahrscheinlichkeit können diese Systeme viel schnellere Verifikationszeiten und kleinere Beweis-Größen erreichen, was sie praktisch für High-Throughput-Blockchain-Anwendungen macht, wo perfekte Sicherheit weniger kritisch als Performance sein kann.",
          nl: "Probabilistische bewijzen maken het mogelijk om perfecte soliditeit garanties te ruilen voor aanzienlijk verbeterde verificatie efficiëntie. Door een kleine, begrensde fout waarschijnlijkheid te accepteren, kunnen deze systemen veel snellere verificatietijden en kleinere bewijs groottes bereiken, waardoor ze praktisch worden voor high-throughput blockchain applicaties waar perfecte beveiliging minder kritiek kan zijn dan prestaties."
        }
      },
      {
        question: {
          en: "In 'Adaptive Security' research for blockchain protocols, what threat model advancement does it address?",
          es: "En investigación de 'Seguridad Adaptativa' para protocolos blockchain, ¿qué avance en modelo de amenaza aborda?",
          de: "Welchen Fortschritt im Bedrohungsmodell adressiert 'Adaptive Security'-Forschung für Blockchain-Protokolle?",
          nl: "Welke vooruitgang in dreigingsmodel adresseert 'Adaptive Security' onderzoek voor blockchain protocollen?"
        },
        options: [
          { en: "Security against adversaries who can adaptively corrupt participants based on observed behavior", es: "Seguridad contra adversarios que pueden corromper adaptativamente participantes basado en comportamiento observado", de: "Sicherheit gegen Gegner, die Teilnehmer adaptiv basierend auf beobachtetem Verhalten korrumpieren können", nl: "Beveiliging tegen tegenstanders die adaptatief deelnemers kunnen corrumperen gebaseerd op geobserveerd gedrag" },
          { en: "Automatic adjustment of consensus parameters based on network conditions", es: "Ajuste automático de parámetros de consenso basado en condiciones de red", de: "Automatische Anpassung von Konsensparametern basierend auf Netzwerkbedingungen", nl: "Automatische aanpassing van consensus parameters gebaseerd op netwerkomstandigheden" },
          { en: "Dynamic fee structures responding to transaction demand", es: "Estructuras de tarifas dinámicas respondiendo a demanda de transacciones", de: "Dynamische Gebührenstrukturen als Reaktion auf Transaktionsnachfrage", nl: "Dynamische kostenstructuren die reageren op transactiedemand" },
          { en: "Self-healing networks that recover from node failures", es: "Redes de auto-sanación que se recuperan de fallas de nodos", de: "Selbstheilende Netzwerke, die sich von Knotenausfällen erholen", nl: "Zelfherstellende netwerken die herstellen van node storingen" }
        ],
        correct: 0,
        explanation: {
          en: "Adaptive security addresses the threat model where adversaries can dynamically choose which participants to corrupt based on information learned during protocol execution. This is more realistic than static corruption models and requires stronger security guarantees to prevent attacks that exploit real-time intelligence gathering.",
          es: "La seguridad adaptativa aborda el modelo de amenaza donde adversarios pueden elegir dinámicamente qué participantes corromper basado en información aprendida durante ejecución del protocolo. Esto es más realista que modelos de corrupción estática y requiere garantías de seguridad más fuertes para prevenir ataques que explotan recolección de inteligencia en tiempo real.",
          de: "Adaptive Security adressiert das Bedrohungsmodell, bei dem Gegner dynamisch wählen können, welche Teilnehmer sie basierend auf während der Protokollausführung erlernten Informationen korrumpieren. Dies ist realistischer als statische Korruptionsmodelle und erfordert stärkere Sicherheitsgarantien, um Angriffe zu verhindern, die Echtzeit-Intelligence-Gathering ausnutzen.",
          nl: "Adaptive security adresseert het dreigingsmodel waar tegenstanders dynamisch kunnen kiezen welke deelnemers te corrumperen gebaseerd op informatie geleerd tijdens protocol uitvoering. Dit is realistischer dan statische corruptie modellen en vereist sterkere beveiligingsgaranties om aanvallen te voorkomen die real-time intelligence gathering uitbuiten."
        }
      },
      {
        question: {
          en: "What is the core research contribution of 'Functional Commitments' to blockchain data structures?",
          es: "¿Cuál es la contribución de investigación central de los 'Compromisos Funcionales' a estructuras de datos blockchain?",
          de: "Was ist der zentrale Forschungsbeitrag von 'Functional Commitments' zu Blockchain-Datenstrukturen?",
          nl: "Wat is de kern onderzoeksbijdrage van 'Functional Commitments' aan blockchain datastructuren?"
        },
        options: [
          { en: "Enabling proofs of arbitrary computations on committed data without revealing the data", es: "Permitir pruebas de computaciones arbitrarias en datos comprometidos sin revelar los datos", de: "Beweise für beliebige Berechnungen auf committed Daten ermöglichen, ohne die Daten preiszugeben", nl: "Bewijzen van willekeurige berekeningen op gecommitteerde data mogelijk maken zonder de data te onthullen" },
          { en: "Reducing storage requirements through advanced compression algorithms", es: "Reducir requisitos de almacenamiento a través de algoritmos de compresión avanzados", de: "Speicheranforderungen durch fortgeschrittene Kompressionsalgorithmen reduzieren", nl: "Opslagvereisten verminderen door geavanceerde compressie algoritmen" },
          { en: "Enabling automatic verification of smart contract correctness", es: "Permitir verificación automática de corrección de contratos inteligentes", de: "Automatische Verifikation der Smart-Contract-Korrektheit ermöglichen", nl: "Automatische verificatie van smart contract correctheid mogelijk maken" },
          { en: "Providing quantum-resistant encryption for all data operations", es: "Proporcionar cifrado resistente a cuánticos para todas las operaciones de datos", de: "Quantenresistente Verschlüsselung für alle Datenoperationen bereitstellen", nl: "Quantum-resistente encryptie bieden voor alle data operaties" }
        ],
        correct: 0,
        explanation: {
          en: "Functional commitments extend traditional cryptographic commitments to support proofs of arbitrary function evaluations on committed data. This enables privacy-preserving computations where one can prove that a computation was performed correctly on hidden data without revealing the data itself, crucial for confidential smart contracts.",
          es: "Los compromisos funcionales extienden compromisos criptográficos tradicionales para soportar pruebas de evaluaciones de funciones arbitrarias en datos comprometidos. Esto permite computaciones que preservan privacidad donde uno puede probar que una computación se realizó correctamente en datos ocultos sin revelar los datos mismos, crucial para contratos inteligentes confidenciales.",
          de: "Functional Commitments erweitern traditionelle kryptographische Commitments, um Beweise für beliebige Funktionsevaluierungen auf committed Daten zu unterstützen. Dies ermöglicht datenschutzwahrende Berechnungen, bei denen man beweisen kann, dass eine Berechnung korrekt auf verborgenen Daten durchgeführt wurde, ohne die Daten selbst preiszugeben, entscheidend für vertrauliche Smart Contracts.",
          nl: "Functional commitments breiden traditionele cryptografische commitments uit om bewijzen van willekeurige functie evaluaties op gecommitteerde data te ondersteunen. Dit maakt privacy-behoudende berekeningen mogelijk waar men kan bewijzen dat een berekening correct werd uitgevoerd op verborgen data zonder de data zelf te onthullen, cruciaal voor vertrouwelijke smart contracts."
        }
      },
      {
        question: {
          en: "In experimental 'Incentive-Compatible Byzantine Fault Tolerance', what novel mechanism ensures rational behavior?",
          es: "En 'Tolerancia a Fallas Bizantinas Compatible con Incentivos' experimental, ¿qué mecanismo novedoso asegura comportamiento racional?",
          de: "Welcher neuartige Mechanismus gewährleistet rationales Verhalten in experimenteller 'Incentive-Compatible Byzantine Fault Tolerance'?",
          nl: "Welk nieuw mechanisme verzekert rationeel gedrag in experimentele 'Incentive-Compatible Byzantine Fault Tolerance'?"
        },
        options: [
          { en: "Economic penalties that make Byzantine behavior financially irrational", es: "Penalidades económicas que hacen comportamiento bizantino financieramente irracional", de: "Wirtschaftliche Strafen, die byzantinisches Verhalten finanziell irrational machen", nl: "Economische boetes die byzantijns gedrag financieel irrationeel maken" },
          { en: "Automatic slashing of all malicious validators' stakes", es: "Slashing automático de todas las apuestas de validadores maliciosos", de: "Automatisches Slashing aller Stakes böswilliger Validatoren", nl: "Automatische slashing van alle stakes van kwaadaardige validators" },
          { en: "Reputation-based voting weights for consensus participation", es: "Pesos de votación basados en reputación para participación en consenso", de: "Reputationsbasierte Stimmgewichte für Konsensteilnahme", nl: "Reputatie-gebaseerde stemgewichten voor consensus deelname" },
          { en: "Time-delayed reward distribution to prevent manipulation", es: "Distribución de recompensas con retraso temporal para prevenir manipulación", de: "Zeitverzögerte Belohnungsverteilung zur Manipulationsverhinderung", nl: "Tijd-vertraagde beloning distributie om manipulatie te voorkomen" }
        ],
        correct: 0,
        explanation: {
          en: "Incentive-compatible BFT mechanisms design economic penalties such that the expected cost of Byzantine behavior exceeds any potential gains, making rational actors choose honest behavior. This aligns economic incentives with protocol security, ensuring that self-interested participants will behave correctly.",
          es: "Los mecanismos BFT compatibles con incentivos diseñan penalidades económicas tales que el costo esperado del comportamiento bizantino excede cualquier ganancia potencial, haciendo que actores racionales elijan comportamiento honesto. Esto alinea incentivos económicos con seguridad del protocolo, asegurando que participantes auto-interesados se comportarán correctamente.",
          de: "Incentive-compatible BFT-Mechanismen entwerfen wirtschaftliche Strafen so, dass die erwarteten Kosten byzantinischen Verhaltens alle potenziellen Gewinne übersteigen, wodurch rationale Akteure ehrliches Verhalten wählen. Dies richtet wirtschaftliche Anreize an Protokollsicherheit aus und stellt sicher, dass eigeninteressierte Teilnehmer sich korrekt verhalten.",
          nl: "Incentive-compatible BFT mechanismen ontwerpen economische boetes zodanig dat de verwachte kosten van byzantijns gedrag alle potentiële winsten overtreffen, waardoor rationele actoren eerlijk gedrag kiezen. Dit stemt economische prikkels af op protocol beveiliging, waardoor zelfgeïnteresseerde deelnemers zich correct zullen gedragen."
        }
      },
      {
        question: {
          en: "What is the experimental advantage of 'Vector Commitments' in blockchain state management over Merkle trees?",
          es: "¿Cuál es la ventaja experimental de los 'Compromisos Vectoriales' en gestión de estado blockchain sobre árboles Merkle?",
          de: "Was ist der experimentelle Vorteil von 'Vector Commitments' in Blockchain-Zustandsverwaltung gegenüber Merkle-Bäumen?",
          nl: "Wat is het experimentele voordeel van 'Vector Commitments' in blockchain toestand management ten opzichte van Merkle trees?"
        },
        options: [
          { en: "Constant-size proofs for position-binding commitments regardless of vector size", es: "Pruebas de tamaño constante para compromisos de vinculación de posición independientemente del tamaño del vector", de: "Konstante Beweis-Größe für positionsbindende Commitments unabhängig von der Vektorgröße", nl: "Constante grootte bewijzen voor positie-bindende commitments ongeacht vector grootte" },
          { en: "Linear time complexity for all update operations", es: "Complejidad de tiempo lineal para todas las operaciones de actualización", de: "Lineare Zeitkomplexität für alle Update-Operationen", nl: "Lineaire tijd complexiteit voor alle update operaties" },
          { en: "Built-in quantum resistance without additional overhead", es: "Resistencia cuántica incorporada sin sobrecarga adicional", de: "Eingebaute Quantenresistenz ohne zusätzlichen Overhead", nl: "Ingebouwde quantum weerstand zonder extra overhead" },
          { en: "Automatic compression of sparse data structures", es: "Compresión automática de estructuras de datos dispersas", de: "Automatische Kompression spärlicher Datenstrukturen", nl: "Automatische compressie van sparse datastructuren" }
        ],
        correct: 0,
        explanation: {
          en: "Vector commitments enable constant-size proofs for opening any position in a committed vector, regardless of the vector's size. Unlike Merkle trees where proof size grows logarithmically with the number of leaves, vector commitments maintain constant proof size, significantly improving efficiency for large state vectors.",
          es: "Los compromisos vectoriales permiten pruebas de tamaño constante para abrir cualquier posición en un vector comprometido, independientemente del tamaño del vector. A diferencia de los árboles Merkle donde el tamaño de prueba crece logarítmicamente con el número de hojas, los compromisos vectoriales mantienen tamaño de prueba constante, mejorando significativamente la eficiencia para vectores de estado grandes.",
          de: "Vector Commitments ermöglichen konstante Beweis-Größe für das Öffnen jeder Position in einem committed Vektor, unabhängig von der Vektorgröße. Im Gegensatz zu Merkle-Bäumen, wo die Beweis-Größe logarithmisch mit der Anzahl der Blätter wächst, behalten Vector Commitments konstante Beweis-Größe bei, was die Effizienz für große Zustandsvektoren erheblich verbessert.",
          nl: "Vector commitments maken constante grootte bewijzen mogelijk voor het openen van elke positie in een gecommitteerde vector, ongeacht de vector grootte. In tegenstelling tot Merkle trees waar bewijs grootte logaritmisch groeit met het aantal bladeren, behouden vector commitments constante bewijs grootte, wat efficiëntie voor grote toestandsvectoren significant verbetert."
        }
      },
      {
        question: {
          en: "In 'Multi-Dimensional Scaling' research for blockchains, what fundamental trade-off is being explored?",
          es: "En investigación de 'Escalamiento Multi-Dimensional' para blockchains, ¿qué intercambio fundamental se está explorando?",
          de: "Welcher fundamentale Trade-off wird in 'Multi-Dimensional Scaling'-Forschung für Blockchains erforscht?",
          nl: "Welke fundamentele afweging wordt onderzocht in 'Multi-Dimensional Scaling' onderzoek voor blockchains?"
        },
        options: [
          { en: "Simultaneous optimization across throughput, latency, storage, and bandwidth dimensions", es: "Optimización simultánea a través de dimensiones de rendimiento, latencia, almacenamiento y ancho de banda", de: "Simultane Optimierung über Durchsatz-, Latenz-, Speicher- und Bandbreitendimensionen", nl: "Simultane optimalisatie over doorvoer, latentie, opslag, en bandbreedte dimensies" },
          { en: "Balancing transaction fees with network security guarantees", es: "Equilibrar tarifas de transacción con garantías de seguridad de red", de: "Transaktionsgebühren mit Netzwerksicherheitsgarantien ausbalancieren", nl: "Transactiekosten balanceren met netwerkbeveiligingsgaranties" },
          { en: "Trading consensus speed for decentralization levels", es: "Intercambiar velocidad de consenso por niveles de descentralización", de: "Konsensgeschwindigkeit gegen Dezentralisierungsgrade eintauschen", nl: "Consensus snelheid ruilen voor decentralisatie niveaus" },
          { en: "Optimizing mining rewards across different cryptocurrency types", es: "Optimizar recompensas de minería a través de diferentes tipos de criptomonedas", de: "Mining-Belohnungen über verschiedene Kryptowährungstypen optimieren", nl: "Mining beloningen optimaliseren over verschillende cryptocurrency types" }
        ],
        correct: 0,
        explanation: {
          en: "Multi-dimensional scaling research explores how to simultaneously optimize multiple performance dimensions (throughput, latency, storage efficiency, bandwidth usage) rather than focusing on just one metric. This holistic approach recognizes that real-world blockchain applications require balanced improvements across all dimensions rather than maximizing one at the expense of others.",
          es: "La investigación de escalamiento multi-dimensional explora cómo optimizar simultáneamente múltiples dimensiones de rendimiento (rendimiento, latencia, eficiencia de almacenamiento, uso de ancho de banda) en lugar de enfocarse en solo una métrica. Este enfoque holístico reconoce que aplicaciones blockchain del mundo real requieren mejoras equilibradas a través de todas las dimensiones en lugar de maximizar una a expensas de otras.",
          de: "Multi-dimensionale Skalierungsforschung erforscht, wie mehrere Leistungsdimensionen (Durchsatz, Latenz, Speichereffizienz, Bandbreitennutzung) gleichzeitig optimiert werden können, anstatt sich nur auf eine Metrik zu konzentrieren. Dieser ganzheitliche Ansatz erkennt, dass reale Blockchain-Anwendungen ausgewogene Verbesserungen über alle Dimensionen hinweg erfordern, anstatt eine auf Kosten anderer zu maximieren.",
          nl: "Multi-dimensionaal schaling onderzoek verkent hoe meerdere prestatie dimensies (doorvoer, latentie, opslag efficiëntie, bandbreedte gebruik) simultaan te optimaliseren in plaats van zich te richten op slechts één metriek. Deze holistische benadering erkent dat echte blockchain applicaties gebalanceerde verbeteringen over alle dimensies vereisen in plaats van één te maximaliseren ten koste van anderen."
        }
      },
      {
        question: {
          en: "What is a Merkle DAG and how does it improve upon traditional Merkle trees?",
          es: "¿Qué es un Merkle DAG y cómo mejora sobre los árboles Merkle tradicionales?",
          de: "Was ist ein Merkle DAG und wie verbessert es traditionelle Merkle-Bäume?",
          nl: "Wat is een Merkle DAG en hoe verbetert het traditionele Merkle trees?"
        },
        options: [
          { en: "Directed acyclic graph allowing multiple parent references for enhanced data integrity", es: "Grafo acíclico dirigido que permite múltiples referencias padre para integridad de datos mejorada", de: "Gerichteter azyklischer Graph, der mehrere Elternreferenzen für verbesserte Datenintegrität ermöglicht", nl: "Gerichte acyclische graaf die meerdere ouder referenties toestaat voor verbeterde data integriteit" },
          { en: "Linear structure for faster hash computations", es: "Estructura lineal para cálculos hash más rápidos", de: "Lineare Struktur für schnellere Hash-Berechnungen", nl: "Lineaire structuur voor snellere hash berekeningen" },
          { en: "Centralized database with Merkle verification", es: "Base de datos centralizada con verificación Merkle", de: "Zentralisierte Datenbank mit Merkle-Verifikation", nl: "Gecentraliseerde database met Merkle verificatie" },
          { en: "Encrypted version of standard Merkle trees", es: "Versión encriptada de árboles Merkle estándar", de: "Verschlüsselte Version von Standard-Merkle-Bäumen", nl: "Versleutelde versie van standaard Merkle trees" }
        ],
        correct: 0,
        explanation: {
          en: "A Merkle DAG (Directed Acyclic Graph) extends Merkle trees by allowing nodes to have multiple parents, enabling more complex data relationships while maintaining cryptographic integrity. This is used in systems like IPFS for content addressing.",
          es: "Un Merkle DAG (Grafo Acíclico Dirigido) extiende los árboles Merkle permitiendo que los nodos tengan múltiples padres, habilitando relaciones de datos más complejas mientras mantiene integridad criptográfica. Esto se usa en sistemas como IPFS para direccionamiento de contenido.",
          de: "Ein Merkle DAG (Gerichteter Azyklischer Graph) erweitert Merkle-Bäume, indem er Knoten ermöglicht, mehrere Eltern zu haben, wodurch komplexere Datenbeziehungen ermöglicht werden, während die kryptographische Integrität erhalten bleibt. Dies wird in Systemen wie IPFS für Content-Adressierung verwendet.",
          nl: "Een Merkle DAG (Gerichte Acyclische Graaf) breidt Merkle trees uit door nodes toe te staan meerdere ouders te hebben, waardoor complexere data relaties mogelijk zijn terwijl cryptografische integriteit behouden blijft. Dit wordt gebruikt in systemen zoals IPFS voor content adressering."
        }
      },
      {
        question: {
          en: "What is the 'Nothing at Stake' problem in Proof of Stake consensus?",
          es: "¿Cuál es el problema de 'Nada en Juego' en el consenso Prueba de Participación?",
          de: "Was ist das 'Nothing at Stake' Problem im Proof of Stake Konsens?",
          nl: "Wat is het 'Nothing at Stake' probleem in Proof of Stake consensus?"
        },
        options: [
          { en: "Validators can vote on multiple competing chains without penalty", es: "Los validadores pueden votar en múltiples cadenas competidoras sin penalización", de: "Validatoren können auf mehrere konkurrierende Ketten ohne Strafe abstimmen", nl: "Validators kunnen stemmen op meerdere concurrerende chains zonder boete" },
          { en: "Validators lose all staked tokens automatically", es: "Los validadores pierden todos los tokens apostados automáticamente", de: "Validatoren verlieren automatisch alle gestakten Token", nl: "Validators verliezen automatisch alle gestakte tokens" },
          { en: "No rewards are given to validators", es: "No se dan recompensas a los validadores", de: "Keine Belohnungen werden an Validatoren gegeben", nl: "Geen beloningen worden gegeven aan validators" },
          { en: "Stake amounts must be exactly zero", es: "Las cantidades de stake deben ser exactamente cero", de: "Stake-Beträge müssen genau null sein", nl: "Stake bedragen moeten precies nul zijn" }
        ],
        correct: 0,
        explanation: {
          en: "The 'Nothing at Stake' problem occurs when validators can support multiple competing blockchain forks simultaneously without cost, since they don't expend physical resources like in PoW. This is solved through slashing conditions that penalize malicious behavior.",
          es: "El problema de 'Nada en Juego' ocurre cuando los validadores pueden apoyar múltiples forks blockchain competidores simultáneamente sin costo, ya que no gastan recursos físicos como en PoW. Esto se resuelve a través de condiciones de recorte que penalizan comportamiento malicioso.",
          de: "Das 'Nothing at Stake' Problem tritt auf, wenn Validatoren mehrere konkurrierende Blockchain-Forks gleichzeitig ohne Kosten unterstützen können, da sie keine physischen Ressourcen wie bei PoW aufwenden. Dies wird durch Slashing-Bedingungen gelöst, die böswilliges Verhalten bestrafen.",
          nl: "Het 'Nothing at Stake' probleem treedt op wanneer validators meerdere concurrerende blockchain forks simultaan kunnen ondersteunen zonder kosten, omdat ze geen fysieke middelen besteden zoals bij PoW. Dit wordt opgelost door slashing voorwaarden die kwaadaardig gedrag bestraffen."
        }
      },
      {
        question: {
          en: "What is a zk-SNARK and how does it achieve zero-knowledge verification?",
          es: "¿Qué es un zk-SNARK y cómo logra verificación de conocimiento cero?",
          de: "Was ist ein zk-SNARK und wie erreicht es Zero-Knowledge-Verifikation?",
          nl: "Wat is een zk-SNARK en hoe bereikt het zero-knowledge verificatie?"
        },
        options: [
          { en: "Succinct proof system using polynomial commitment schemes and trusted setup", es: "Sistema de prueba sucinta usando esquemas de compromiso polinomial y configuración confiable", de: "Sukzinctes Beweis-System mit polynomialen Commitment-Schemata und vertrauenswürdigem Setup", nl: "Beknopt bewijs systeem met polynomiale commitment schema's en vertrouwde setup" },
          { en: "Database encryption method for blockchain storage", es: "Método de encriptación de base de datos para almacenamiento blockchain", de: "Datenbank-Verschlüsselungsmethode für Blockchain-Speicherung", nl: "Database encryptie methode voor blockchain opslag" },
          { en: "Smart contract programming language", es: "Lenguaje de programación de contratos inteligentes", de: "Smart Contract Programmiersprache", nl: "Smart contract programmeertaal" },
          { en: "Consensus mechanism for private blockchains", es: "Mecanismo de consenso para blockchains privadas", de: "Konsensmechanismus für private Blockchains", nl: "Consensus mechanisme voor private blockchains" }
        ],
        correct: 0,
        explanation: {
          en: "zk-SNARKs (Zero-Knowledge Succinct Non-Interactive Argument of Knowledge) use sophisticated cryptographic techniques including polynomial commitments and trusted setup ceremonies to create compact proofs that verify computation without revealing inputs.",
          es: "Los zk-SNARKs (Argumento No Interactivo Sucinto de Conocimiento Cero) usan técnicas criptográficas sofisticadas incluyendo compromisos polinomiales y ceremonias de configuración confiable para crear pruebas compactas que verifican computación sin revelar entradas.",
          de: "zk-SNARKs (Zero-Knowledge Succinct Non-Interactive Argument of Knowledge) verwenden ausgeklügelte kryptographische Techniken einschließlich polynomialer Commitments und vertrauenswürdiger Setup-Zeremonien, um kompakte Beweise zu erstellen, die Berechnungen verifizieren, ohne Eingaben preiszugeben.",
          nl: "zk-SNARKs (Zero-Knowledge Succinct Non-Interactive Argument of Knowledge) gebruiken geavanceerde cryptografische technieken inclusief polynomiale commitments en vertrouwde setup ceremonies om compacte bewijzen te creëren die berekeningen verifiëren zonder inputs te onthullen."
        }
      },
      {
        question: {
          en: "What is the 'Trilemma of Blockchain Governance' in decentralized systems?",
          es: "¿Cuál es el 'Trilema de Gobernanza Blockchain' en sistemas descentralizados?",
          de: "Was ist das 'Trilemma der Blockchain-Governance' in dezentralisierten Systemen?",
          nl: "Wat is het 'Trilemma van Blockchain Governance' in gedecentraliseerde systemen?"
        },
        options: [
          { en: "Balance between legitimacy, efficiency, and decentralization in decision-making", es: "Equilibrio entre legitimidad, eficiencia y descentralización en toma de decisiones", de: "Gleichgewicht zwischen Legitimität, Effizienz und Dezentralisierung bei Entscheidungsfindung", nl: "Balans tussen legitimiteit, efficiëntie en decentralisatie in besluitvorming" },
          { en: "Trade-off between speed, security, and cost", es: "Intercambio entre velocidad, seguridad y costo", de: "Trade-off zwischen Geschwindigkeit, Sicherheit und Kosten", nl: "Afweging tussen snelheid, veiligheid en kosten" },
          { en: "Conflict between miners, developers, and users", es: "Conflicto entre mineros, desarrolladores y usuarios", de: "Konflikt zwischen Minern, Entwicklern und Nutzern", nl: "Conflict tussen miners, ontwikkelaars en gebruikers" },
          { en: "Choice between public, private, and consortium blockchains", es: "Elección entre blockchains públicas, privadas y de consorcio", de: "Wahl zwischen öffentlichen, privaten und Konsortium-Blockchains", nl: "Keuze tussen publieke, private en consortium blockchains" }
        ],
        correct: 0,
        explanation: {
          en: "The blockchain governance trilemma suggests that it's difficult to simultaneously achieve legitimacy (broad stakeholder acceptance), efficiency (quick decision-making), and decentralization (distributed power) in governance mechanisms.",
          es: "El trilema de gobernanza blockchain sugiere que es difícil lograr simultáneamente legitimidad (aceptación amplia de partes interesadas), eficiencia (toma rápida de decisiones), y descentralización (poder distribuido) en mecanismos de gobernanza.",
          de: "Das Blockchain-Governance-Trilemma besagt, dass es schwierig ist, gleichzeitig Legitimität (breite Stakeholder-Akzeptanz), Effizienz (schnelle Entscheidungsfindung) und Dezentralisierung (verteilte Macht) in Governance-Mechanismen zu erreichen.",
          nl: "Het blockchain governance trilemma suggereert dat het moeilijk is om gelijktijdig legitimiteit (brede stakeholder acceptatie), efficiëntie (snelle besluitvorming), en decentralisatie (verspreide macht) te bereiken in governance mechanismen."
        }
      },
      {
        question: {
          en: "What is 'Composable Security' in multi-protocol blockchain environments?",
          es: "¿Qué es la 'Seguridad Componible' en entornos blockchain multi-protocolo?",
          de: "Was ist 'Composable Security' in Multi-Protokoll-Blockchain-Umgebungen?",
          nl: "Wat is 'Composable Security' in multi-protocol blockchain omgevingen?"
        },
        options: [
          { en: "Security guarantees that hold when protocols interact across different blockchain networks", es: "Garantías de seguridad que se mantienen cuando los protocolos interactúan a través de diferentes redes blockchain", de: "Sicherheitsgarantien, die gelten, wenn Protokolle über verschiedene Blockchain-Netzwerke hinweg interagieren", nl: "Beveiligingsgaranties die gelden wanneer protocollen interageren over verschillende blockchain netwerken" },
          { en: "Modular security architecture for smart contracts", es: "Arquitectura de seguridad modular para contratos inteligentes", de: "Modulare Sicherheitsarchitektur für Smart Contracts", nl: "Modulaire beveiligingsarchitectuur voor smart contracts" },
          { en: "Encryption method for cross-chain transactions", es: "Método de encriptación para transacciones cross-chain", de: "Verschlüsselungsmethode für Cross-Chain-Transaktionen", nl: "Encryptie methode voor cross-chain transacties" },
          { en: "Security audit process for DeFi protocols", es: "Proceso de auditoría de seguridad para protocolos DeFi", de: "Sicherheitsaudit-Prozess für DeFi-Protokolle", nl: "Beveiligingsaudit proces voor DeFi protocollen" }
        ],
        correct: 0,
        explanation: {
          en: "Composable security ensures that when multiple blockchain protocols or smart contracts interact, the combined system maintains the security properties of its individual components. This is crucial for complex DeFi ecosystems where protocols build upon each other.",
          es: "La seguridad componible asegura que cuando múltiples protocolos blockchain o contratos inteligentes interactúan, el sistema combinado mantiene las propiedades de seguridad de sus componentes individuales. Esto es crucial para ecosistemas DeFi complejos donde los protocolos se construyen uno sobre otro.",
          de: "Composable Security stellt sicher, dass, wenn mehrere Blockchain-Protokolle oder Smart Contracts interagieren, das kombinierte System die Sicherheitseigenschaften seiner einzelnen Komponenten beibehält. Dies ist entscheidend für komplexe DeFi-Ökosysteme, wo Protokolle aufeinander aufbauen.",
          nl: "Composable security zorgt ervoor dat wanneer meerdere blockchain protocollen of smart contracts interageren, het gecombineerde systeem de beveiligingseigenschappen van zijn individuele componenten behoudt. Dit is cruciaal voor complexe DeFi ecosystemen waar protocollen op elkaar bouwen."
        }
      }
    ]
  };

  // Export for use in the quiz application
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level8;
  } else if (typeof window !== 'undefined') {
    window.level8 = level8;
  }
})();