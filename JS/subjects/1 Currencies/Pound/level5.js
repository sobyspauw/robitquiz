// Quiz Level 5: Currencies - Pond (Expert)
(function() {
  const level5 = {
    name: {
      en: "Pond - Expert",
      es: "Libra - Experto",
      de: "Pfund - Experte",
      nl: "Pond - Expert"
    },
    questions: [
      {
        question: {
          en: "What is the theoretical foundation of the Bank of England's approach to unconventional monetary policy transmission through portfolio balance effects?",
          es: "¿Cuál es el fundamento teórico del enfoque del Banco de Inglaterra sobre la transmisión de política monetaria no convencional a través de efectos de equilibrio de cartera?",
          de: "Was ist die theoretische Grundlage des Ansatzes der Bank of England zur unkonventionellen geldpolitischen Übertragung durch Portfolio-Balance-Effekte?",
          nl: "Wat is de theoretische basis van de Bank of England's benadering van onconventionele monetaire beleidsoverdracht via portefeuille-balanseffecten?"
        },
        options: [
          {
            en: "Preferred habitat theory combined with imperfect asset substitutability in segmented markets",
            es: "Teoría del hábitat preferido combinada con sustituibilidad imperfecta de activos en mercados segmentados",
            de: "Preferred-Habitat-Theorie kombiniert mit unvollständiger Vermögenssubstituierbarkeit in segmentierten Märkten",
            nl: "Preferred habitat theorie gecombineerd met onvolmaakte activasubstitutie in gesegmenteerde markten"
          },
          {
            en: "Pure expectations hypothesis with rational expectations and efficient markets",
            es: "Hipótesis de expectativas puras con expectativas racionales y mercados eficientes",
            de: "Reine Erwartungshypothese mit rationalen Erwartungen und effizienten Märkten",
            nl: "Pure verwachtingshypothese met rationele verwachtingen en efficiënte markten"
          },
          {
            en: "Liquidity preference theory with homogeneous investor preferences",
            es: "Teoría de preferencia por liquidez con preferencias homogéneas de inversores",
            de: "Liquiditätspräferenztheorie mit homogenen Investorenpräferenzen",
            nl: "Liquiditeitsvoorkeurtheorie met homogene investeerdersvoorkeuren"
          },
          {
            en: "Market segmentation theory based solely on institutional constraints",
            es: "Teoría de segmentación de mercado basada únicamente en restricciones institucionales",
            de: "Marktsegmentierungstheorie basierend ausschließlich auf institutionellen Beschränkungen",
            nl: "Marktsegmentatietheorie gebaseerd uitsluitend op institutionele beperkingen"
          }
        ],
        correct: 0,
        explanation: {
          en: "The BoE's QE transmission mechanism relies on preferred habitat theory, where investors have preferences for specific maturity segments, combined with imperfect substitutability between assets. This creates portfolio rebalancing effects when the central bank purchases securities.",
          es: "El mecanismo de transmisión de QE del BoE se basa en la teoría del hábitat preferido, donde los inversores tienen preferencias por segmentos de vencimiento específicos, combinado con sustituibilidad imperfecta entre activos. Esto crea efectos de reequilibrio de cartera cuando el banco central compra valores.",
          de: "Der QE-Übertragungsmechanismus der BoE basiert auf der Preferred-Habitat-Theorie, bei der Investoren Präferenzen für bestimmte Laufzeitsegmente haben, kombiniert mit unvollständiger Substituierbarkeit zwischen Vermögenswerten. Dies schafft Portfolio-Rebalancing-Effekte, wenn die Zentralbank Wertpapiere kauft.",
          nl: "Het QE-transmissiemechanisme van de BoE is gebaseerd op de preferred habitat theorie, waarbij investeerders voorkeuren hebben voor specifieke looptijdsegmenten, gecombineerd met onvolmaakte substitutie tussen activa. Dit creëert portefeuille-herbalanceringseffecten wanneer de centrale bank effecten koopt."
        }
      },
      {
        question: {
          en: "How does the Bank of England's Term Funding Scheme with additional incentives for SMEs (TFS-SME) address the credit channel transmission mechanism?",
          es: "¿Cómo aborda el Esquema de Financiamiento a Plazo del Banco de Inglaterra con incentivos adicionales para PYMEs (TFS-SME) el mecanismo de transmisión del canal de crédito?",
          de: "Wie geht das Term Funding Scheme der Bank of England mit zusätzlichen Anreizen für KMU (TFS-SME) den Kreditkanal-Übertragungsmechanismus an?",
          nl: "Hoe pakt de Bank of England's Term Funding Scheme met extra incentives voor MKB (TFS-SME) het kredietkanaal transmissiemechanisme aan?"
        },
        options: [
          {
            en: "Provides funding at rates below Bank Rate tied to lending growth, particularly for SME lending",
            es: "Proporciona financiamiento a tasas por debajo de la Tasa del Banco vinculadas al crecimiento crediticio, particularmente para préstamos a PYMEs",
            de: "Bietet Finanzierung zu Zinssätzen unter dem Bankzinssatz an, die an das Kreditwachstum gekoppelt sind, insbesondere für KMU-Kredite",
            nl: "Biedt financiering tegen tarieven onder Bank Rate gekoppeld aan kredietgroei, vooral voor MKB-kredietverlening"
          },
          {
            en: "Directly purchases SME loans from banks at market prices",
            es: "Compra directamente préstamos a PYMEs de bancos a precios de mercado",
            de: "Kauft direkt KMU-Kredite von Banken zu Marktpreisen",
            nl: "Koopt direct MKB-leningen van banken tegen marktprijzen"
          },
          {
            en: "Provides government guarantees for all SME lending without rate conditions",
            es: "Proporciona garantías gubernamentales para todos los préstamos a PYMEs sin condiciones de tasa",
            de: "Bietet Regierungsgarantien für alle KMU-Kredite ohne Zinsbedingungen",
            nl: "Biedt overheidsgaranties voor alle MKB-kredietverlening zonder rentevoorwaarden"
          },
          {
            en: "Sets mandatory lending quotas for banks with penalty rates",
            es: "Establece cuotas de préstamo obligatorias para bancos con tasas de penalización",
            de: "Setzt verbindliche Kreditquoten für Banken mit Strafzinsen fest",
            nl: "Stelt verplichte kredietquota's vast voor banken met boetetarieven"
          }
        ],
        correct: 0,
        explanation: {
          en: "TFS-SME provides banks with funding at rates below Bank Rate, with the rate and allowance linked to their lending growth. Banks receive additional incentives specifically for SME lending, directly addressing credit channel frictions by reducing funding costs and encouraging lending to smaller businesses.",
          es: "TFS-SME proporciona a los bancos financiamiento a tasas por debajo de la Tasa del Banco, con la tasa y asignación vinculadas a su crecimiento crediticio. Los bancos reciben incentivos adicionales específicamente para préstamos a PYMEs, abordando directamente las fricciones del canal de crédito al reducir costos de financiamiento y alentar préstamos a empresas más pequeñas.",
          de: "TFS-SME bietet Banken Finanzierung zu Zinssätzen unter dem Bankzinssatz, wobei Zinssatz und Zuteilung an ihr Kreditwachstum gekoppelt sind. Banken erhalten zusätzliche Anreize speziell für KMU-Kredite, wodurch Kreditkanal-Friktionen direkt durch Senkung der Finanzierungskosten und Förderung der Kreditvergabe an kleinere Unternehmen angegangen werden.",
          nl: "TFS-SME biedt banken financiering tegen tarieven onder Bank Rate, waarbij het tarief en de toewijzing gekoppeld zijn aan hun kredietgroei. Banken ontvangen extra incentives specifiek voor MKB-kredietverlening, waarmee kredietkanaalwrijvingen direct worden aangepakt door financieringskosten te verlagen en kredietverlening aan kleinere bedrijven aan te moedigen."
        }
      },
      {
        question: {
          en: "What is the role of the Bank of England's Real-Time Gross Settlement (RTGS) system in systemic risk management and monetary policy implementation?",
          es: "¿Cuál es el papel del sistema de Liquidación Bruta en Tiempo Real (RTGS) del Banco de Inglaterra en la gestión de riesgo sistémico e implementación de política monetaria?",
          de: "Welche Rolle spielt das Real-Time Gross Settlement (RTGS) System der Bank of England im systemischen Risikomanagement und der geldpolitischen Umsetzung?",
          nl: "Wat is de rol van de Bank of England's Real-Time Gross Settlement (RTGS) systeem in systemisch risicomanagement en monetaire beleidsimplementatie?"
        },
        options: [
          {
            en: "Provides the infrastructure for instant, irrevocable payments that eliminates settlement risk and enables precise liquidity management",
            es: "Proporciona la infraestructura para pagos instantáneos e irrevocables que elimina el riesgo de liquidación y permite gestión precisa de liquidez",
            de: "Bietet die Infrastruktur für sofortige, unwiderrufliche Zahlungen, die das Abwicklungsrisiko eliminiert und präzises Liquiditätsmanagement ermöglicht",
            nl: "Biedt de infrastructuur voor onmiddellijke, onherroepelijke betalingen die afwikkelingsrisico elimineert en nauwkeurig liquiditeitsbeheer mogelijk maakt"
          },
          {
            en: "Operates as a multilateral netting system with end-of-day settlement",
            es: "Opera como un sistema de compensación multilateral con liquidación al final del día",
            de: "Funktioniert als multilaterales Netting-System mit Tagesendabwicklung",
            nl: "Werkt als een multilateraal netting-systeem met einde-dag afwikkeling"
          },
          {
            en: "Primarily focuses on retail payment processing and consumer transactions",
            es: "Se enfoca principalmente en procesamiento de pagos minoristas y transacciones de consumidores",
            de: "Konzentriert sich hauptsächlich auf Einzelhandelszahlungsverarbeitung und Verbrauchertransaktionen",
            nl: "Richt zich vooral op retailbetalingsverwerking en consumententransacties"
          },
          {
            en: "Serves only as a backup system for commercial bank payment networks",
            es: "Sirve solo como sistema de respaldo para redes de pago de bancos comerciales",
            de: "Dient nur als Backup-System für kommerzielle Bankzahlungsnetzwerke",
            nl: "Dient alleen als back-upsysteem voor commerciële bankbetalingsnetwerken"
          }
        ],
        correct: 0,
        explanation: {
          en: "RTGS provides real-time, gross settlement of high-value payments in central bank money, eliminating settlement risk. It's crucial for systemic stability as it processes critical payments between financial institutions and enables the BoE to implement monetary policy through precise liquidity operations and reserve management.",
          es: "RTGS proporciona liquidación bruta en tiempo real de pagos de alto valor en dinero del banco central, eliminando el riesgo de liquidación. Es crucial para la estabilidad sistémica ya que procesa pagos críticos entre instituciones financieras y permite al BoE implementar política monetaria a través de operaciones de liquidez precisas y gestión de reservas.",
          de: "RTGS bietet Echtzeit-Brutto-Abwicklung von hochvolumigen Zahlungen in Zentralbankgeld und eliminiert Abwicklungsrisiken. Es ist entscheidend für systemische Stabilität, da es kritische Zahlungen zwischen Finanzinstituten verarbeitet und der BoE ermöglicht, Geldpolitik durch präzise Liquiditätsoperationen und Reservenmanagement umzusetzen.",
          nl: "RTGS biedt realtime, bruto afwikkeling van hoogwaardige betalingen in centralebankgeld, waarmee afwikkelingsrisico wordt geëlimineerd. Het is cruciaal voor systemische stabiliteit omdat het kritieke betalingen tussen financiële instellingen verwerkt en de BoE in staat stelt monetair beleid te implementeren via nauwkeurige liquiditeitsoperaties en reservebeheer."
        }
      },
      {
        question: {
          en: "How does the Bank of England's approach to climate-related financial risk assessment integrate physical and transition risks into prudential supervision?",
          es: "¿Cómo integra el enfoque del Banco de Inglaterra para la evaluación de riesgo financiero relacionado con el clima los riesgos físicos y de transición en la supervisión prudencial?",
          de: "Wie integriert der Ansatz der Bank of England zur klimabezogenen Finanzrisikobewertung physische und Übergangsrisiken in die Aufsicht?",
          nl: "Hoe integreert de Bank of England's benadering van klimaatgerelateerde financiële risicobeoordeling fysieke en transitierisico's in prudentieel toezicht?"
        },
        options: [
          {
            en: "Uses scenario analysis combining temperature pathways with sectoral transition models and physical damage functions",
            es: "Utiliza análisis de escenarios combinando trayectorias de temperatura con modelos de transición sectorial y funciones de daño físico",
            de: "Verwendet Szenarioanalyse, die Temperaturpfade mit sektoralen Übergangsmodellen und physischen Schadensfunktionen kombiniert",
            nl: "Gebruikt scenarioanalyse die temperatuurpaden combineert met sectorale transitiemodellen en fysieke schaadefuncties"
          },
          {
            en: "Applies simple carbon tax scenarios to existing credit risk models",
            es: "Aplica escenarios simples de impuesto al carbono a modelos de riesgo crediticio existentes",
            de: "Wendet einfache Kohlenstoffsteuerszenarien auf bestehende Kreditrisikomodelle an",
            nl: "Past eenvoudige koolstofbelastingscenario's toe op bestaande kredietrisicomodellen"
          },
          {
            en: "Focuses exclusively on reputational risk from environmental activism",
            es: "Se enfoca exclusivamente en riesgo reputacional del activismo ambiental",
            de: "Konzentriert sich ausschließlich auf Reputationsrisiken durch Umweltaktivismus",
            nl: "Richt zich uitsluitend op reputatierisico van milieuactivisme"
          },
          {
            en: "Uses only historical weather data for risk assessment",
            es: "Utiliza solo datos meteorológicos históricos para evaluación de riesgos",
            de: "Verwendet nur historische Wetterdaten für Risikobewertung",
            nl: "Gebruikt alleen historische weergegevens voor risicobeoordeling"
          }
        ],
        correct: 0,
        explanation: {
          en: "The BoE employs comprehensive scenario analysis that models different climate pathways (physical risks like extreme weather) alongside transition scenarios (policy and technology changes). This involves integrating climate science with economic models to assess impacts on financial institutions' portfolios and systemic stability.",
          es: "El BoE emplea análisis integral de escenarios que modela diferentes trayectorias climáticas (riesgos físicos como clima extremo) junto con escenarios de transición (cambios de política y tecnología). Esto implica integrar ciencia climática con modelos económicos para evaluar impactos en carteras de instituciones financieras y estabilidad sistémica.",
          de: "Die BoE verwendet umfassende Szenarioanalyse, die verschiedene Klimapfade (physische Risiken wie Extremwetter) zusammen mit Übergangsszenarien (Politik- und Technologieänderungen) modelliert. Dies beinhaltet die Integration von Klimawissenschaft mit Wirtschaftsmodellen zur Bewertung von Auswirkungen auf Portfolios von Finanzinstituten und systemische Stabilität.",
          nl: "De BoE gebruikt uitgebreide scenarioanalyse die verschillende klimaatpaden (fysieke risico's zoals extreem weer) modelleert naast transitiescenario's (beleids- en technologieveranderingen). Dit behelst het integreren van klimaatwetenschap met economische modellen om effecten op portefeuilles van financiële instellingen en systemische stabiliteit te beoordelen."
        }
      },
      {
        question: {
          en: "What is the theoretical framework behind the Bank of England's approach to measuring and managing procyclicality in the financial system?",
          es: "¿Cuál es el marco teórico detrás del enfoque del Banco de Inglaterra para medir y gestionar la prociclicidad en el sistema financiero?",
          de: "Was ist der theoretische Rahmen hinter dem Ansatz der Bank of England zur Messung und Verwaltung von Prozyklizität im Finanzsystem?",
          nl: "Wat is het theoretische kader achter de Bank of England's benadering van het meten en beheren van procycliciteit in het financiële systeem?"
        },
        options: [
          {
            en: "Financial accelerator theory combined with dynamic provisioning and countercyclical capital buffers",
            es: "Teoría del acelerador financiero combinada con provisiones dinámicas y amortiguadores de capital contracíclicos",
            de: "Finanzakzelerator-Theorie kombiniert mit dynamischer Vorsorge und antizyklischen Kapitalpuffern",
            nl: "Financiële accelerator theorie gecombineerd met dynamische voorzieningen en anticyclische kapitaalbuffers"
          },
          {
            en: "Static capital requirements based on historical loss averages",
            es: "Requisitos de capital estáticos basados en promedios históricos de pérdidas",
            de: "Statische Kapitalanforderungen basierend auf historischen Verlustdurchschnitten",
            nl: "Statische kapitaalvereisten gebaseerd op historische verliesgemiddelden"
          },
          {
            en: "Market-based pricing mechanisms without regulatory intervention",
            es: "Mecanismos de precios basados en mercado sin intervención regulatoria",
            de: "Marktbasierte Preismechanismen ohne regulatorische Intervention",
            nl: "Marktgebaseerde prijsmechanismen zonder regulatoire interventie"
          },
          {
            en: "Fixed lending ratios regardless of economic cycle position",
            es: "Ratios de préstamo fijos independientemente de la posición del ciclo económico",
            de: "Feste Kreditverhältnisse unabhängig von der Wirtschaftszyklusposition",
            nl: "Vaste kredietverhoudingen ongeacht economische cycluspositie"
          }
        ],
        correct: 0,
        explanation: {
          en: "The BoE's approach is based on financial accelerator theory, which shows how financial frictions amplify economic cycles. They use tools like countercyclical capital buffers that increase during good times to build resilience, and dynamic provisioning that adjusts to economic conditions, helping to smooth credit cycles and reduce systemic risk.",
          es: "El enfoque del BoE se basa en la teoría del acelerador financiero, que muestra cómo las fricciones financieras amplifican los ciclos económicos. Utilizan herramientas como amortiguadores de capital contracíclicos que aumentan durante buenos tiempos para construir resistencia, y provisiones dinámicas que se ajustan a condiciones económicas, ayudando a suavizar ciclos crediticios y reducir riesgo sistémico.",
          de: "Der BoE-Ansatz basiert auf der Finanzakzelerator-Theorie, die zeigt, wie Finanzfriktionen Wirtschaftszyklen verstärken. Sie verwenden Instrumente wie antizyklische Kapitalpuffer, die in guten Zeiten zunehmen, um Widerstandsfähigkeit aufzubauen, und dynamische Vorsorge, die sich an wirtschaftliche Bedingungen anpasst und hilft, Kreditzyklen zu glätten und systemische Risiken zu reduzieren.",
          nl: "De BoE's benadering is gebaseerd op financiële accelerator theorie, die toont hoe financiële wrijvingen economische cycli versterken. Ze gebruiken instrumenten zoals anticyclische kapitaalbuffers die toenemen tijdens goede tijden om veerkracht op te bouwen, en dynamische voorzieningen die aanpassen aan economische omstandigheden, wat helpt kredietcycli af te vlakken en systemisch risico te verminderen."
        }
      },
      {
        question: {
          en: "How does the Bank of England's framework for assessing structural market liquidity incorporate network effects and interconnectedness risks?",
          es: "¿Cómo incorpora el marco del Banco de Inglaterra para evaluar la liquidez estructural del mercado efectos de red y riesgos de interconectividad?",
          de: "Wie integriert das Framework der Bank of England zur Bewertung struktureller Marktliquidität Netzwerkeffekte und Verflechtungsrisiken?",
          nl: "Hoe integreert de Bank of England's raamwerk voor het beoordelen van structurele marktliquiditeit netwerkeffecten en onderlinge verbondenheidsrisico's?"
        },
        options: [
          {
            en: "Uses network topology analysis and contagion models to map dealer-client relationships and funding interdependencies",
            es: "Utiliza análisis de topología de red y modelos de contagio para mapear relaciones dealer-cliente e interdependencias de financiamiento",
            de: "Verwendet Netzwerktopologie-Analyse und Ansteckungsmodelle zur Kartierung von Händler-Kunden-Beziehungen und Finanzierungsabhängigkeiten",
            nl: "Gebruikt netwerktopologie-analyse en besmettingsmodellen om dealer-klant relaties en financieringsafhankelijkheden in kaart te brengen"
          },
          {
            en: "Relies solely on individual firm liquidity ratios without considering connections",
            es: "Se basa únicamente en ratios de liquidez de empresas individuales sin considerar conexiones",
            de: "Verlässt sich ausschließlich auf individuelle Unternehmensliquiditätsverhältnisse ohne Verbindungen zu berücksichtigen",
            nl: "Vertrouwt uitsluitend op individuele bedrijfsliquiditeitsverhoudingen zonder verbindingen te overwegen"
          },
          {
            en: "Focuses only on trading volumes without network analysis",
            es: "Se enfoca solo en volúmenes de negociación sin análisis de red",
            de: "Konzentriert sich nur auf Handelsvolumen ohne Netzwerkanalyse",
            nl: "Richt zich alleen op handelsvolumes zonder netwerkanalyse"
          },
          {
            en: "Uses simple correlation analysis between asset prices",
            es: "Utiliza análisis de correlación simple entre precios de activos",
            de: "Verwendet einfache Korrelationsanalyse zwischen Vermögenspreisen",
            nl: "Gebruikt eenvoudige correlatieanalyse tussen activaprijzen"
          }
        ],
        correct: 0,
        explanation: {
          en: "The BoE employs sophisticated network analysis to understand how market structure affects liquidity. This includes mapping dealer networks, analyzing how stress can propagate through interconnected relationships, and understanding how concentration in market-making can create systemic vulnerabilities during stress periods.",
          es: "El BoE emplea análisis sofisticado de red para entender cómo la estructura del mercado afecta la liquidez. Esto incluye mapear redes de dealers, analizar cómo el estrés puede propagarse a través de relaciones interconectadas, y entender cómo la concentración en creación de mercado puede crear vulnerabilidades sistémicas durante períodos de estrés.",
          de: "Die BoE verwendet sophisticated Netzwerkanalyse, um zu verstehen, wie Marktstruktur die Liquidität beeinflusst. Dies umfasst die Kartierung von Händlernetzwerken, die Analyse, wie sich Stress durch vernetzte Beziehungen ausbreiten kann, und das Verständnis, wie Konzentration im Market-Making systemische Verwundbarkeiten während Stressperioden schaffen kann.",
          nl: "De BoE gebruikt geavanceerde netwerkanalyse om te begrijpen hoe marktstructuur liquiditeit beïnvloedt. Dit omvat het in kaart brengen van dealernetwerken, analyseren hoe stress kan doorgegeven worden via onderling verbonden relaties, en begrijpen hoe concentratie in market-making systemische kwetsbaarheden kan creëren tijdens stressperiodes."
        }
      },
      {
        question: {
          en: "What role does the Sterling Monetary Framework (SMF) play in the Bank of England's operational implementation of monetary policy decisions?",
          es: "¿Qué papel juega el Marco Monetario de la Libra Esterlina (SMF) en la implementación operacional del Banco de Inglaterra de decisiones de política monetaria?",
          de: "Welche Rolle spielt das Sterling Monetary Framework (SMF) in der operativen Umsetzung geldpolitischer Entscheidungen der Bank of England?",
          nl: "Welke rol speelt het Sterling Monetary Framework (SMF) in de Bank of England's operationele implementatie van monetaire beleidsbeslissingen?"
        },
        options: [
          {
            en: "Defines the operational framework for implementing Bank Rate through reserve requirements and standing facilities",
            es: "Define el marco operacional para implementar la Tasa del Banco a través de requisitos de reserva e instalaciones permanentes",
            de: "Definiert den operativen Rahmen zur Umsetzung des Bankzinssatzes durch Reserveanforderungen und ständige Fazilitäten",
            nl: "Definieert het operationele kader voor implementatie van Bank Rate via reservevereisten en permanente faciliteiten"
          },
          {
            en: "Manages only foreign exchange interventions and currency swaps",
            es: "Gestiona solo intervenciones de divisas e intercambios de monedas",
            de: "Verwaltet nur Deviseninterventionen und Währungsswaps",
            nl: "Beheert alleen valutainterventies en valutaswaps"
          },
          {
            en: "Focuses exclusively on government debt management operations",
            es: "Se enfoca exclusivamente en operaciones de gestión de deuda gubernamental",
            de: "Konzentriert sich ausschließlich auf Staatsschuldenverwaltungsoperationen",
            nl: "Richt zich uitsluitend op overheidsschuldbeheeroperaties"
          },
          {
            en: "Operates only the gilt market-making system",
            es: "Opera solo el sistema de creación de mercado de gilts",
            de: "Betreibt nur das Gilt-Market-Making-System",
            nl: "Werkt alleen het gilt-marktmakingsysteem"
          }
        ],
        correct: 0,
        explanation: {
          en: "The SMF is the operational architecture that translates MPC decisions into market reality. It includes reserve averaging, standing deposit and lending facilities, and open market operations. Banks hold reserves at the BoE and can access lending/deposit facilities, with the framework designed to keep market rates close to Bank Rate.",
          es: "El SMF es la arquitectura operacional que traduce las decisiones del MPC en realidad de mercado. Incluye promedio de reservas, facilidades permanentes de depósito y préstamo, y operaciones de mercado abierto. Los bancos mantienen reservas en el BoE y pueden acceder a facilidades de préstamo/depósito, con el marco diseñado para mantener tasas de mercado cerca de la Tasa del Banco.",
          de: "Das SMF ist die operative Architektur, die MPC-Entscheidungen in Marktrealität übersetzt. Es umfasst Reservedurchschnittsbildung, ständige Einlagen- und Kreditfazilitäten und Offenmarktoperationen. Banken halten Reserven bei der BoE und können auf Kredit-/Einlagenfazilitäten zugreifen, wobei der Rahmen darauf ausgelegt ist, Marktzinsen nahe dem Bankzinssatz zu halten.",
          nl: "Het SMF is de operationele architectuur die MPC-beslissingen vertaalt naar marktelijkheid. Het omvat reserve-averaging, permanente deposito- en leenfaciliteiten, en openmarktoperaties. Banken houden reserves bij de BoE en kunnen toegang krijgen tot leen-/depositofaciliteiten, waarbij het kader ontworpen is om markttarieven dicht bij Bank Rate te houden."
        }
      },
      {
        question: {
          en: "How does the Bank of England's approach to measuring systemic risk incorporate the concept of 'fire sales' and amplification mechanisms?",
          es: "¿Cómo incorpora el enfoque del Banco de Inglaterra para medir riesgo sistémico el concepto de 'ventas forzadas' y mecanismos de amplificación?",
          de: "Wie integriert der Ansatz der Bank of England zur Messung systemischer Risiken das Konzept von 'Notverkäufen' und Verstärkungsmechanismen?",
          nl: "Hoe integreert de Bank of England's benadering van het meten van systemisch risico het concept van 'noodverkopen' en versterkingsmechanismen?"
        },
        options: [
          {
            en: "Models feedback loops between asset sales, price declines, and margin calls using dynamic general equilibrium frameworks",
            es: "Modela bucles de retroalimentación entre ventas de activos, declives de precios y llamadas de margen usando marcos de equilibrio general dinámico",
            de: "Modelliert Rückkopplungsschleifen zwischen Vermögensverkäufen, Preisrückgängen und Margin Calls mit dynamischen allgemeinen Gleichgewichtsrahmen",
            nl: "Modelleert feedback loops tussen activaverkopen, prijsdalingen en margin calls met behulp van dynamische algemene evenwichtskaders"
          },
          {
            en: "Uses only static balance sheet analysis without price effects",
            es: "Utiliza solo análisis estático de balance sin efectos de precios",
            de: "Verwendet nur statische Bilanzanalyse ohne Preiseffekte",
            nl: "Gebruikt alleen statische balansanalyse zonder prijseffecten"
          },
          {
            en: "Focuses solely on individual institution stress tests",
            es: "Se enfoca únicamente en pruebas de estrés de instituciones individuales",
            de: "Konzentriert sich ausschließlich auf Stresstests einzelner Institutionen",
            nl: "Richt zich uitsluitend op stresstests van individuele instellingen"
          },
          {
            en: "Relies only on historical correlation analysis",
            es: "Se basa solo en análisis de correlación histórica",
            de: "Stützt sich nur auf historische Korrelationsanalyse",
            nl: "Vertrouwt alleen op historische correlatieanalyse"
          }
        ],
        correct: 0,
        explanation: {
          en: "The BoE recognizes that fire sales create systemic amplification through feedback effects. When institutions are forced to sell assets rapidly, this depresses prices, which worsens other institutions' positions, potentially triggering more sales. Their models capture these dynamic interactions and spillover effects across the financial system.",
          es: "El BoE reconoce que las ventas forzadas crean amplificación sistémica a través de efectos de retroalimentación. Cuando las instituciones se ven obligadas a vender activos rápidamente, esto deprime los precios, lo que empeora las posiciones de otras instituciones, potencialmente desencadenando más ventas. Sus modelos capturan estas interacciones dinámicas y efectos de derrame en el sistema financiero.",
          de: "Die BoE erkennt, dass Notverkäufe systemische Verstärkung durch Rückkopplungseffekte schaffen. Wenn Institutionen gezwungen sind, Vermögenswerte schnell zu verkaufen, drückt dies die Preise, was die Positionen anderer Institutionen verschlechtert und möglicherweise weitere Verkäufe auslöst. Ihre Modelle erfassen diese dynamischen Interaktionen und Spillover-Effekte im Finanzsystem.",
          nl: "De BoE erkent dat noodverkopen systemische versterking creëren via feedback-effecten. Wanneer instellingen gedwongen worden om activa snel te verkopen, drukt dit prijzen, wat de posities van andere instellingen verslechtert en mogelijk meer verkopen triggert. Hun modellen vangen deze dynamische interacties en spillover-effecten in het financiële systeem op."
        }
      },
      {
        question: {
          en: "What is the theoretical foundation of the Bank of England's approach to central bank digital currency (CBDC) design and its implications for monetary sovereignty?",
          es: "¿Cuál es el fundamento teórico del enfoque del Banco de Inglaterra sobre el diseño de moneda digital del banco central (CBDC) y sus implicaciones para la soberanía monetaria?",
          de: "Was ist die theoretische Grundlage des Ansatzes der Bank of England zum Design einer digitalen Zentralbankwährung (CBDC) und deren Auswirkungen auf die Währungssouveränität?",
          nl: "Wat is de theoretische basis van de Bank of England's benadering van centrale bank digitale valuta (CBDC) ontwerp en de implicaties voor monetaire soevereiniteit?"
        },
        options: [
          {
            en: "Maintains monetary sovereignty through programmable money that preserves central bank control over money creation and policy transmission",
            es: "Mantiene soberanía monetaria a través de dinero programable que preserva el control del banco central sobre creación de dinero y transmisión de política",
            de: "Erhält die Währungssouveränität durch programmierbares Geld, das die Kontrolle der Zentralbank über Geldschöpfung und Politikübertragung bewahrt",
            nl: "Behoudt monetaire soevereiniteit via programmeerbaar geld dat centrale bankcontrole over geldcreatie en beleidstransmissie bewaart"
          },
          {
            en: "Delegates monetary policy implementation to private technology companies",
            es: "Delega implementación de política monetaria a empresas privadas de tecnología",
            de: "Delegiert die Umsetzung der Geldpolitik an private Technologieunternehmen",
            nl: "Delegeert monetaire beleidsimplementatie aan private technologiebedrijven"
          },
          {
            en: "Adopts existing cryptocurrency protocols without modification",
            es: "Adopta protocolos de criptomonedas existentes sin modificación",
            de: "Übernimmt bestehende Kryptowährungsprotokolle ohne Änderung",
            nl: "Neemt bestaande cryptocurrency protocollen over zonder wijziging"
          },
          {
            en: "Eliminates all forms of physical currency immediately",
            es: "Elimina todas las formas de moneda física inmediatamente",
            de: "Eliminiert alle Formen physischer Währung sofort",
            nl: "Elimineert alle vormen van fysieke valuta onmiddellijk"
          }
        ],
        correct: 0,
        explanation: {
          en: "The BoE's CBDC approach is designed to preserve and potentially enhance monetary sovereignty. A digital pound would be programmable central bank money, allowing for precise policy implementation while maintaining the central bank's role as the ultimate authority over the monetary system, rather than ceding control to private entities or decentralized protocols.",
          es: "El enfoque CBDC del BoE está diseñado para preservar y potencialmente mejorar la soberanía monetaria. Una libra digital sería dinero programable del banco central, permitiendo implementación precisa de política mientras mantiene el papel del banco central como la autoridad final sobre el sistema monetario, en lugar de ceder control a entidades privadas o protocolos descentralizados.",
          de: "Der CBDC-Ansatz der BoE ist darauf ausgelegt, die Währungssouveränität zu bewahren und möglicherweise zu stärken. Ein digitales Pfund wäre programmierbares Zentralbankgeld, das präzise Politikumsetzung ermöglicht, während die Rolle der Zentralbank als ultimative Autorität über das Währungssystem beibehalten wird, anstatt die Kontrolle an private Entitäten oder dezentrale Protokolle abzugeben.",
          nl: "De BoE's CBDC-benadering is ontworpen om monetaire soevereiniteit te behouden en mogelijk te versterken. Een digitale pond zou programmeerbaar centralebankgeld zijn, wat nauwkeurige beleidsimplementatie mogelijk maakt terwijl de rol van de centrale bank als uiteindelijke autoriteit over het monetaire systeem behouden blijft, in plaats van controle over te dragen aan private entiteiten of gedecentraliseerde protocollen."
        }
      },
      {
        question: {
          en: "How does the Bank of England's framework for assessing the resilience of critical financial market infrastructures (FMIs) address operational and cyber risks?",
          es: "¿Cómo aborda el marco del Banco de Inglaterra para evaluar la resistencia de infraestructuras críticas del mercado financiero (FMIs) los riesgos operacionales y cibernéticos?",
          de: "Wie geht das Framework der Bank of England zur Bewertung der Widerstandsfähigkeit kritischer Finanzmarktinfrastrukturen (FMIs) mit operationellen und Cyber-Risiken um?",
          nl: "Hoe pakt de Bank of England's raamwerk voor het beoordelen van de veerkracht van kritieke financiële marktinfrastructuren (FMI's) operationele en cyberrisico's aan?"
        },
        options: [
          {
            en: "Employs comprehensive operational resilience testing including cyber attack simulations and recovery time objectives",
            es: "Emplea pruebas integrales de resistencia operacional incluyendo simulaciones de ataques cibernéticos y objetivos de tiempo de recuperación",
            de: "Verwendet umfassende operative Resilienztests einschließlich Cyber-Angriffssimulationen und Wiederherstellungszeitziele",
            nl: "Gebruikt uitgebreide operationele veerkrachttests inclusief cyberaanvalsimulaties en hersteltijddoelstellingen"
          },
          {
            en: "Focuses only on traditional operational risk metrics without cyber considerations",
            es: "Se enfoca solo en métricas tradicionales de riesgo operacional sin consideraciones cibernéticas",
            de: "Konzentriert sich nur auf traditionelle operative Risikometriken ohne Cyber-Überlegungen",
            nl: "Richt zich alleen op traditionele operationele risicometriek zonder cyberoverwegingen"
          },
          {
            en: "Relies solely on self-assessment by FMI operators",
            es: "Se basa únicamente en autoevaluación por operadores de FMI",
            de: "Verlässt sich ausschließlich auf Selbstbewertung durch FMI-Betreiber",
            nl: "Vertrouwt uitsluitend op zelfevaluatie door FMI-operators"
          },
          {
            en: "Uses only annual compliance reporting without testing",
            es: "Utiliza solo informes anuales de cumplimiento sin pruebas",
            de: "Verwendet nur jährliche Compliance-Berichte ohne Tests",
            nl: "Gebruikt alleen jaarlijkse compliance-rapportage zonder testen"
          }
        ],
        correct: 0,
        explanation: {
          en: "The BoE uses comprehensive operational resilience frameworks that include regular testing of cyber defenses, business continuity planning, and recovery capabilities. This includes scenario-based testing, penetration testing, and setting specific recovery time objectives to ensure critical financial infrastructure can withstand and quickly recover from operational disruptions.",
          es: "El BoE utiliza marcos integrales de resistencia operacional que incluyen pruebas regulares de defensas cibernéticas, planificación de continuidad empresarial y capacidades de recuperación. Esto incluye pruebas basadas en escenarios, pruebas de penetración y establecimiento de objetivos específicos de tiempo de recuperación para asegurar que la infraestructura financiera crítica pueda resistir y recuperarse rápidamente de interrupciones operacionales.",
          de: "Die BoE verwendet umfassende operative Resilienz-Frameworks, die regelmäßige Tests von Cyber-Abwehr, Geschäftskontinuitätsplanung und Wiederherstellungsfähigkeiten umfassen. Dies beinhaltet szenariobasierte Tests, Penetrationstests und die Festlegung spezifischer Wiederherstellungszeitziele, um sicherzustellen, dass kritische Finanzinfrastruktur operativen Störungen standhalten und sich schnell davon erholen kann.",
          nl: "De BoE gebruikt uitgebreide operationele veerkrachtkaders die regelmatige tests van cyberverdediging, bedrijfscontinuïteitsplanning en herstelmogelijkheden omvatten. Dit omvat scenariogebaseerd testen, penetratietesten en het stellen van specifieke hersteltijddoelstellingen om ervoor te zorgen dat kritieke financiële infrastructuur operationele verstoringen kan weerstaan en er snel van kan herstellen."
        }
      },
      {
        question: {
          en: "What role does the Bank of England's analysis of 'zombie firms' play in their assessment of financial stability and monetary policy effectiveness?",
          es: "¿Qué papel juega el análisis del Banco de Inglaterra de 'empresas zombi' en su evaluación de estabilidad financiera y efectividad de política monetaria?",
          de: "Welche Rolle spielt die Analyse der Bank of England von 'Zombie-Unternehmen' bei ihrer Bewertung der Finanzstabilität und der Wirksamkeit der Geldpolitik?",
          nl: "Welke rol speelt de Bank of England's analyse van 'zombie bedrijven' in hun beoordeling van financiële stabiliteit en monetaire beleidseffectiviteit?"
        },
        options: [
          {
            en: "Assesses how low rates may prevent creative destruction and reduce productivity growth, potentially creating financial stability risks",
            es: "Evalúa cómo las tasas bajas pueden prevenir la destrucción creativa y reducir el crecimiento de productividad, potencialmente creando riesgos de estabilidad financiera",
            de: "Bewertet, wie niedrige Zinsen schöpferische Zerstörung verhindern und Produktivitätswachstum reduzieren können, wodurch möglicherweise Finanzstabilitätsrisiken entstehen",
            nl: "Beoordeelt hoe lage rentes creatieve vernietiging kunnen voorkomen en productiviteitsgroei verminderen, mogelijk financiële stabiliteitsrisico's creërend"
          },
          {
            en: "Focuses only on immediate corporate bankruptcy rates",
            es: "Se enfoca solo en tasas inmediatas de bancarrota corporativa",
            de: "Konzentriert sich nur auf unmittelbare Unternehmenskonkursraten",
            nl: "Richt zich alleen op onmiddellijke bedrijfsfaillissementscijfers"
          },
          {
            en: "Examines only government support programs for businesses",
            es: "Examina solo programas de apoyo gubernamental para empresas",
            de: "Untersucht nur staatliche Unterstützungsprogramme für Unternehmen",
            nl: "Onderzoekt alleen overheidssteunprogramma's voor bedrijven"
          },
          {
            en: "Monitors solely employment levels in declining industries",
            es: "Monitorea únicamente niveles de empleo en industrias en declive",
            de: "Überwacht ausschließlich Beschäftigungsniveaus in rückläufigen Branchen",
            nl: "Monitort uitsluitend werkgelegenheidsniveaus in krimpende industrieën"
          }
        ],
        correct: 0,
        explanation: {
          en: "The BoE recognizes that persistently low interest rates may keep inefficient 'zombie' firms alive, preventing resources from moving to more productive uses. This can reduce overall productivity growth and create hidden vulnerabilities in the financial system, as banks may have exposure to these weak firms that could become problematic when conditions normalize.",
          es: "El BoE reconoce que las tasas de interés persistentemente bajas pueden mantener vivas a empresas 'zombi' ineficientes, previniendo que los recursos se muevan a usos más productivos. Esto puede reducir el crecimiento general de productividad y crear vulnerabilidades ocultas en el sistema financiero, ya que los bancos pueden tener exposición a estas empresas débiles que podrían volverse problemáticas cuando las condiciones se normalicen.",
          de: "Die BoE erkennt, dass anhaltend niedrige Zinssätze ineffiziente 'Zombie'-Unternehmen am Leben erhalten können, wodurch verhindert wird, dass Ressourcen zu produktiveren Verwendungen wechseln. Dies kann das gesamte Produktivitätswachstum reduzieren und versteckte Verwundbarkeiten im Finanzsystem schaffen, da Banken Risikopositionen gegenüber diesen schwachen Unternehmen haben können, die problematisch werden könnten, wenn sich die Bedingungen normalisieren.",
          nl: "De BoE erkent dat aanhoudend lage rentes inefficiënte 'zombie' bedrijven in leven kunnen houden, waardoor bronnen niet naar productievere toepassingen kunnen verschuiven. Dit kan de algehele productiviteitsgroei verminderen en verborgen kwetsbaarheden in het financiële systeem creëren, omdat banken blootstelling kunnen hebben aan deze zwakke bedrijven die problematisch kunnen worden wanneer omstandigheden normaliseren."
        }
      },
      {
        question: {
          en: "How does the Bank of England's approach to assessing climate transition risks incorporate stranded asset theory and sectoral analysis?",
          es: "¿Cómo incorpora el enfoque del Banco de Inglaterra para evaluar riesgos de transición climática la teoría de activos varados y análisis sectorial?",
          de: "Wie integriert der Ansatz der Bank of England zur Bewertung von Klimaübergangsrisiken die Theorie gestrandeter Vermögenswerte und Sektoranalyse?",
          nl: "Hoe integreert de Bank of England's benadering van het beoordelen van klimaattransitierisico's gestrande activa theorie en sectorale analyse?"
        },
        options: [
          {
            en: "Models how carbon-intensive assets may become economically unviable under different climate policy scenarios, using sectoral carbon intensity mapping",
            es: "Modela cómo los activos intensivos en carbono pueden volverse económicamente inviables bajo diferentes escenarios de política climática, usando mapeo de intensidad de carbono sectorial",
            de: "Modelliert, wie kohlenstoffintensive Vermögenswerte unter verschiedenen Klimapolitikszenarien wirtschaftlich unrentabel werden können, unter Verwendung sektoraler Kohlenstoffintensitätskartierung",
            nl: "Modelleert hoe koolstofintensieve activa economisch onhaalbaar kunnen worden onder verschillende klimaatbeleidsscenario's, met gebruik van sectorale koolstofintensiteitsmapping"
          },
          {
            en: "Uses only historical asset price volatility without climate considerations",
            es: "Utiliza solo volatilidad histórica de precios de activos sin consideraciones climáticas",
            de: "Verwendet nur historische Vermögenspreisvolatilität ohne Klimaüberlegungen",
            nl: "Gebruikt alleen historische activaprijsvolatiliteit zonder klimaatoverwegingen"
          },
          {
            en: "Focuses exclusively on physical climate damages to infrastructure",
            es: "Se enfoca exclusivamente en daños climáticos físicos a infraestructura",
            de: "Konzentriert sich ausschließlich auf physische Klimaschäden an der Infrastruktur",
            nl: "Richt zich uitsluitend op fysieke klimaatschade aan infrastructuur"
          },
          {
            en: "Applies uniform risk factors across all sectors and assets",
            es: "Aplica factores de riesgo uniformes en todos los sectores y activos",
            de: "Wendet einheitliche Risikofaktoren auf alle Sektoren und Vermögenswerte an",
            nl: "Past uniforme risicofactoren toe op alle sectoren en activa"
          }
        ],
        correct: 0,
        explanation: {
          en: "The BoE's climate stress testing incorporates stranded asset analysis by modeling how policy changes (carbon pricing, regulations) and technological shifts could make certain assets (coal plants, oil reserves) economically unviable. They use detailed sectoral analysis to understand differential impacts across industries based on carbon intensity and transition pathways.",
          es: "Las pruebas de estrés climático del BoE incorporan análisis de activos varados modelando cómo los cambios de política (precios del carbono, regulaciones) y cambios tecnológicos podrían hacer que ciertos activos (plantas de carbón, reservas de petróleo) sean económicamente inviables. Utilizan análisis sectorial detallado para entender impactos diferenciales en industrias basados en intensidad de carbono y trayectorias de transición.",
          de: "Die Klimastresstests der BoE integrieren Stranded-Asset-Analyse durch Modellierung, wie Politikänderungen (CO2-Preisgestaltung, Regulierungen) und technologische Verschiebungen bestimmte Vermögenswerte (Kohlekraftwerke, Ölreserven) wirtschaftlich unrentabel machen könnten. Sie verwenden detaillierte Sektoranalyse, um differentielle Auswirkungen auf Branchen basierend auf Kohlenstoffintensität und Übergangspfaden zu verstehen.",
          nl: "De BoE's klimaat-stresstests integreren gestrande activa-analyse door te modelleren hoe beleidsveranderingen (koolstofprijzen, regelgeving) en technologische verschuivingen bepaalde activa (kolencentrales, oliereserves) economisch onhaalbaar zouden kunnen maken. Ze gebruiken gedetailleerde sectorale analyse om differentiële effecten op industrieën te begrijpen gebaseerd op koolstofintensiteit en transitiepaden."
        }
      },
      {
        question: {
          en: "What is the Bank of England's theoretical framework for understanding the relationship between financial innovation and systemic risk in digital finance?",
          es: "¿Cuál es el marco teórico del Banco de Inglaterra para entender la relación entre innovación financiera y riesgo sistémico en finanzas digitales?",
          de: "Was ist der theoretische Rahmen der Bank of England zum Verständnis der Beziehung zwischen Finanzinnovation und systemischem Risiko im digitalen Finanzwesen?",
          nl: "Wat is de Bank of England's theoretische kader voor het begrijpen van de relatie tussen financiële innovatie en systemisch risico in digitale financiering?"
        },
        options: [
          {
            en: "Applies 'same risk, same regulation' principle while assessing new systemic risk channels from digital finance ecosystems",
            es: "Aplica el principio de 'mismo riesgo, misma regulación' mientras evalúa nuevos canales de riesgo sistémico de ecosistemas de finanzas digitales",
            de: "Wendet das Prinzip 'gleiches Risiko, gleiche Regulierung' an, während neue systemische Risikokanäle aus digitalen Finanzökosystemen bewertet werden",
            nl: "Past het 'zelfde risico, zelfde regulatie' principe toe terwijl nieuwe systemische risicokanalen van digitale financiële ecosystemen worden beoordeeld"
          },
          {
            en: "Prohibits all forms of digital financial innovation",
            es: "Prohíbe todas las formas de innovación financiera digital",
            de: "Verbietet alle Formen digitaler Finanzinnovation",
            nl: "Verbiedt alle vormen van digitale financiële innovatie"
          },
          {
            en: "Allows unrestricted development of digital finance without oversight",
            es: "Permite desarrollo sin restricciones de finanzas digitales sin supervisión",
            de: "Erlaubt uneingeschränkte Entwicklung digitaler Finanzen ohne Aufsicht",
            nl: "Staat onbeperkte ontwikkeling van digitale financiering toe zonder toezicht"
          },
          {
            en: "Focuses only on traditional banking without considering digital innovations",
            es: "Se enfoca solo en banca tradicional sin considerar innovaciones digitales",
            de: "Konzentriert sich nur auf traditionelles Bankwesen ohne Berücksichtigung digitaler Innovationen",
            nl: "Richt zich alleen op traditioneel bankieren zonder digitale innovaties te overwegen"
          }
        ],
        correct: 0,
        explanation: {
          en: "The BoE adopts a principles-based approach that applies existing regulatory principles to new technologies while identifying novel systemic risks. They recognize that digital finance can create new forms of interconnectedness, concentration, and operational dependencies that require careful assessment and potentially new regulatory tools.",
          es: "El BoE adopta un enfoque basado en principios que aplica principios regulatorios existentes a nuevas tecnologías mientras identifica riesgos sistémicos novedosos. Reconocen que las finanzas digitales pueden crear nuevas formas de interconectividad, concentración y dependencias operacionales que requieren evaluación cuidadosa y potencialmente nuevas herramientas regulatorias.",
          de: "Die BoE verfolgt einen prinzipienbasierten Ansatz, der bestehende regulatorische Prinzipien auf neue Technologien anwendet, während neuartige systemische Risiken identifiziert werden. Sie erkennen, dass digitale Finanzen neue Formen von Vernetzung, Konzentration und operationellen Abhängigkeiten schaffen können, die sorgfältige Bewertung und möglicherweise neue regulatorische Instrumente erfordern.",
          nl: "De BoE hanteert een principengebaseerde benadering die bestaande regulatoire principes toepast op nieuwe technologieën terwijl nieuwe systemische risico's worden geïdentificeerd. Ze erkennen dat digitale financiering nieuwe vormen van onderlinge verbondenheid, concentratie en operationele afhankelijkheden kan creëren die zorgvuldige beoordeling en mogelijk nieuwe regulatoire instrumenten vereisen."
        }
      },
      {
        question: {
          en: "How does the Bank of England's framework for macroprudential policy calibration incorporate dynamic interactions between credit cycles and asset price bubbles?",
          es: "¿Cómo incorpora el marco del Banco de Inglaterra para calibración de política macroprudencial interacciones dinámicas entre ciclos crediticios y burbujas de precios de activos?",
          de: "Wie integriert das Framework der Bank of England zur makroprudenziellen Politikkalibrierung dynamische Wechselwirkungen zwischen Kreditzyklen und Vermögenspreisblasen?",
          nl: "Hoe integreert de Bank of England's kader voor macroprudentiële beleidskalibratie dynamische interacties tussen kredietcycli en activaprijsbubbels?"
        },
        options: [
          {
            en: "Uses early warning indicators combining credit-to-GDP gaps with asset price deviation measures and sectoral concentration metrics",
            es: "Utiliza indicadores de alerta temprana combinando brechas de crédito-a-PIB con medidas de desviación de precios de activos y métricas de concentración sectorial",
            de: "Verwendet Frühwarnindikatoren, die Kredit-zu-BIP-Lücken mit Vermögenspreisabweichungsmaßen und sektoralen Konzentrationskennzahlen kombinieren",
            nl: "Gebruikt vroege waarschuwingsindicatoren die krediet-tot-BBP-gaps combineren met activaprijsafwijkingsmetingen en sectorale concentratiemetrieken"
          },
          {
            en: "Relies solely on backward-looking capital adequacy ratios",
            es: "Se basa únicamente en ratios de adecuación de capital retrospectivos",
            de: "Stützt sich ausschließlich auf rückwärtsgerichtete Eigenkapitalquoten",
            nl: "Vertrouwt uitsluitend op achteruitkijkende kapitaaltoereikendheidsratio's"
          },
          {
            en: "Uses only interest rate adjustments without macroprudential tools",
            es: "Utiliza solo ajustes de tasas de interés sin herramientas macroprudenciales",
            de: "Verwendet nur Zinssatzanpassungen ohne makroprudenzielle Instrumente",
            nl: "Gebruikt alleen renteaanpassingen zonder macroprudentiële instrumenten"
          },
          {
            en: "Focuses exclusively on individual bank stress tests",
            es: "Se enfoca exclusivamente en pruebas de estrés de bancos individuales",
            de: "Konzentriert sich ausschließlich auf Stresstests einzelner Banken",
            nl: "Richt zich uitsluitend op stresstests van individuele banken"
          }
        ],
        correct: 0,
        explanation: {
          en: "The BoE uses a comprehensive set of indicators to identify developing financial imbalances, including credit gaps, asset price measures, and sectoral analysis. They recognize that credit booms and asset bubbles often reinforce each other, requiring tools like countercyclical capital buffers and sectoral capital requirements to address systemic risks proactively.",
          es: "El BoE utiliza un conjunto integral de indicadores para identificar desequilibrios financieros en desarrollo, incluyendo brechas crediticias, medidas de precios de activos y análisis sectorial. Reconocen que los auges crediticios y burbujas de activos a menudo se refuerzan mutuamente, requiriendo herramientas como amortiguadores de capital contracíclicos y requisitos de capital sectorial para abordar riesgos sistémicos proactivamente.",
          de: "Die BoE verwendet einen umfassenden Satz von Indikatoren zur Identifizierung sich entwickelnder finanzieller Ungleichgewichte, einschließlich Kreditlücken, Vermögenspreismaßen und Sektoranalyse. Sie erkennen, dass Kreditbooms und Vermögensblasen sich oft gegenseitig verstärken und Instrumente wie antizyklische Kapitalpuffer und sektorale Kapitalanforderungen erfordern, um systemische Risiken proaktiv anzugehen.",
          nl: "De BoE gebruikt een uitgebreide set indicatoren om zich ontwikkelende financiële onevenwichtigheden te identificeren, inclusief kredietgaps, activaprijsmetingen en sectorale analyse. Ze erkennen dat kredietbooms en activabellenoften elkaar versterken, waardoor instrumenten zoals anticyclische kapitaalbuffers en sectorale kapitaalvereisten nodig zijn om systemische risico's proactief aan te pakken."
        }
      },
      {
        question: {
          en: "What theoretical approach does the Bank of England use to model the transmission of monetary policy through heterogeneous agent effects in credit markets?",
          es: "¿Qué enfoque teórico utiliza el Banco de Inglaterra para modelar la transmisión de política monetaria a través de efectos de agentes heterogéneos en mercados crediticios?",
          de: "Welchen theoretischen Ansatz verwendet die Bank of England zur Modellierung der geldpolitischen Übertragung durch heterogene Agenteneffekte in Kreditmärkten?",
          nl: "Welke theoretische benadering gebruikt de Bank of England om de transmissie van monetair beleid te modelleren via heterogene agent-effecten in kredietmarkten?"
        },
        options: [
          {
            en: "Employs HANK models incorporating borrower-lender heterogeneity with endogenous credit constraints and portfolio choice",
            es: "Emplea modelos HANK incorporando heterogeneidad prestatario-prestamista con restricciones crediticias endógenas y elección de cartera",
            de: "Verwendet HANK-Modelle, die Kreditnehmer-Kreditgeber-Heterogenität mit endogenen Kreditbeschränkungen und Portfoliowahl integrieren",
            nl: "Gebruikt HANK-modellen die lener-uitlener heterogeniteit incorporeren met endogene kredietbeperkingen en portefeuillekeuze"
          },
          {
            en: "Uses only representative agent models with perfect capital markets",
            es: "Utiliza solo modelos de agente representativo con mercados de capital perfectos",
            de: "Verwendet nur repräsentative Agentenmodelle mit perfekten Kapitalmärkten",
            nl: "Gebruikt alleen representatieve agent-modellen met perfecte kapitaalmarkten"
          },
          {
            en: "Applies simple correlation analysis between interest rates and lending",
            es: "Aplica análisis de correlación simple entre tasas de interés y préstamos",
            de: "Wendet einfache Korrelationsanalyse zwischen Zinssätzen und Kreditvergabe an",
            nl: "Past eenvoudige correlatieanalyse toe tussen rentes en kredietverlening"
          },
          {
            en: "Focuses solely on aggregate demand effects without credit channels",
            es: "Se enfoca únicamente en efectos de demanda agregada sin canales crediticios",
            de: "Konzentriert sich ausschließlich auf aggregierte Nachfrageeffekte ohne Kreditkanäle",
            nl: "Richt zich uitsluitend op geaggregeerde vraageffecten zonder kredietkanalen"
          }
        ],
        correct: 0,
        explanation: {
          en: "The BoE uses Heterogeneous Agent New Keynesian (HANK) models that recognize different types of agents (savers, borrowers, constrained vs unconstrained) respond differently to monetary policy. These models capture how policy transmission varies across the population based on balance sheet positions, income, and access to credit.",
          es: "El BoE utiliza modelos Nuevo Keynesianos de Agentes Heterogéneos (HANK) que reconocen que diferentes tipos de agentes (ahorradores, prestatarios, restringidos vs no restringidos) responden de manera diferente a la política monetaria. Estos modelos capturan cómo la transmisión de política varía en la población basada en posiciones de balance, ingresos y acceso a crédito.",
          de: "Die BoE verwendet Heterogeneous Agent New Keynesian (HANK) Modelle, die erkennen, dass verschiedene Arten von Agenten (Sparer, Kreditnehmer, beschränkte vs unbeschränkte) unterschiedlich auf Geldpolitik reagieren. Diese Modelle erfassen, wie sich die Politikübertragung in der Bevölkerung basierend auf Bilanzpositionen, Einkommen und Kreditzugang unterscheidet.",
          nl: "De BoE gebruikt Heterogeneous Agent New Keynesian (HANK) modellen die erkennen dat verschillende types agenten (spaarders, leners, beperkte vs onbeperkte) verschillend reageren op monetair beleid. Deze modellen vangen op hoe beleidstransmissie varieert over de bevolking gebaseerd op balansposities, inkomen en toegang tot krediet."
        }
      },
      {
        question: {
          en: "How does the Bank of England's assessment of global value chain disruptions incorporate network analysis and systemic risk measurement?",
          es: "¿Cómo incorpora la evaluación del Banco de Inglaterra de disrupciones de cadenas de valor globales análisis de red y medición de riesgo sistémico?",
          de: "Wie integriert die Bewertung der Bank of England von globalen Wertschöpfungskettenstörungen Netzwerkanalyse und systemische Risikomessung?",
          nl: "Hoe integreert de Bank of England's beoordeling van globale waardeketenverstoring netwerkanalyse en systemische risicometing?"
        },
        options: [
          {
            en: "Maps supply chain networks to identify critical nodes and potential contagion pathways using input-output analysis and network centrality measures",
            es: "Mapea redes de cadena de suministro para identificar nodos críticos y vías potenciales de contagio usando análisis de insumo-producto y medidas de centralidad de red",
            de: "Kartiert Lieferkettennetzwerke zur Identifizierung kritischer Knoten und potenzieller Ansteckungswege mittels Input-Output-Analyse und Netzwerkzentralitätsmaßen",
            nl: "Brengt toeleveringsketennetwerken in kaart om kritieke knooppunten en potentiële besmettingspaden te identificeren met input-output analyse en netwerkcentraliteitsmetingen"
          },
          {
            en: "Uses only bilateral trade statistics without network considerations",
            es: "Utiliza solo estadísticas de comercio bilateral sin consideraciones de red",
            de: "Verwendet nur bilaterale Handelsstatistiken ohne Netzwerküberlegungen",
            nl: "Gebruikt alleen bilaterale handelsstatistieken zonder netwerkoverwegingen"
          },
          {
            en: "Focuses exclusively on domestic supply chains ignoring global connections",
            es: "Se enfoca exclusivamente en cadenas de suministro domésticas ignorando conexiones globales",
            de: "Konzentriert sich ausschließlich auf inländische Lieferketten und ignoriert globale Verbindungen",
            nl: "Richt zich uitsluitend op binnenlandse toeleveringsketens en negeert globale verbindingen"
          },
          {
            en: "Relies solely on historical correlation analysis of trade flows",
            es: "Se basa únicamente en análisis de correlación histórica de flujos comerciales",
            de: "Stützt sich ausschließlich auf historische Korrelationsanalyse von Handelsströmen",
            nl: "Vertrouwt uitsluitend op historische correlatieanalyse van handelsstromen"
          }
        ],
        correct: 0,
        explanation: {
          en: "The BoE employs network analysis to understand how disruptions can propagate through global value chains. They identify critical nodes (key suppliers, chokepoints) and use measures like betweenness centrality to assess systemic importance. This helps understand how localized disruptions can have global financial implications through supply chain interdependencies.",
          es: "El BoE emplea análisis de red para entender cómo las disrupciones pueden propagarse a través de cadenas de valor globales. Identifican nodos críticos (proveedores clave, puntos de estrangulamiento) y usan medidas como centralidad de intermediación para evaluar importancia sistémica. Esto ayuda a entender cómo disrupciones localizadas pueden tener implicaciones financieras globales a través de interdependencias de cadena de suministro.",
          de: "Die BoE verwendet Netzwerkanalyse, um zu verstehen, wie sich Störungen durch globale Wertschöpfungsketten ausbreiten können. Sie identifizieren kritische Knoten (Schlüssellieferanten, Engpässe) und verwenden Maße wie Betweenness-Zentralität zur Bewertung systemischer Bedeutung. Dies hilft zu verstehen, wie lokalisierte Störungen durch Lieferketten-Interdependenzen globale finanzielle Auswirkungen haben können.",
          nl: "De BoE gebruikt netwerkanalyse om te begrijpen hoe verstoringen kunnen propageren door globale waardeketens. Ze identificeren kritieke knooppunten (hoofdleveranciers, knelpunten) en gebruiken metingen zoals betweenness-centraliteit om systemisch belang te beoordelen. Dit helpt begrijpen hoe gelokaliseerde verstoringen globale financiële implicaties kunnen hebben via toeleveringsketen-onderlinge afhankelijkheden."
        }
      },
      {
        question: {
          en: "What is the Bank of England's approach to modeling the interaction between climate risks and financial stability in their integrated assessment framework?",
          es: "¿Cuál es el enfoque del Banco de Inglaterra para modelar la interacción entre riesgos climáticos y estabilidad financiera en su marco de evaluación integrada?",
          de: "Was ist der Ansatz der Bank of England zur Modellierung der Wechselwirkung zwischen Klimarisiken und Finanzstabilität in ihrem integrierten Bewertungsrahmen?",
          nl: "Wat is de Bank of England's benadering van het modelleren van de interactie tussen klimaatrisico's en financiële stabiliteit in hun geïntegreerde beoordelingskader?"
        },
        options: [
          {
            en: "Integrates climate-economy models with financial system models to capture feedback loops between environmental changes and financial stability",
            es: "Integra modelos clima-economía con modelos del sistema financiero para capturar bucles de retroalimentación entre cambios ambientales y estabilidad financiera",
            de: "Integriert Klima-Wirtschafts-Modelle mit Finanzsystemmodellen, um Rückkopplungsschleifen zwischen Umweltveränderungen und Finanzstabilität zu erfassen",
            nl: "Integreert klimaat-economie modellen met financiëlesysteemmodellen om feedback loops tussen milieuveranderingen en financiële stabiliteit vast te leggen"
          },
          {
            en: "Uses separate, non-integrated models for climate and financial analysis",
            es: "Utiliza modelos separados, no integrados para análisis climático y financiero",
            de: "Verwendet separate, nicht integrierte Modelle für Klima- und Finanzanalyse",
            nl: "Gebruikt gescheiden, niet-geïntegreerde modellen voor klimaat- en financiële analyse"
          },
          {
            en: "Focuses only on direct physical damage without economic feedbacks",
            es: "Se enfoca solo en daño físico directo sin retroalimentaciones económicas",
            de: "Konzentriert sich nur auf direkten physischen Schaden ohne wirtschaftliche Rückkopplungen",
            nl: "Richt zich alleen op directe fysieke schade zonder economische feedbacks"
          },
          {
            en: "Applies constant risk factors without dynamic climate modeling",
            es: "Aplica factores de riesgo constantes sin modelado climático dinámico",
            de: "Wendet konstante Risikofaktoren ohne dynamische Klimamodellierung an",
            nl: "Past constante risicofactoren toe zonder dynamische klimaatmodellering"
          }
        ],
        correct: 0,
        explanation: {
          en: "The BoE develops integrated assessment models that link climate science, economic impacts, and financial system responses. This captures how climate risks affect economic activity, which in turn affects financial institutions, while also considering how financial decisions (investment, lending) can influence climate outcomes through feedback mechanisms.",
          es: "El BoE desarrolla modelos de evaluación integrada que vinculan ciencia climática, impactos económicos y respuestas del sistema financiero. Esto captura cómo los riesgos climáticos afectan la actividad económica, que a su vez afecta las instituciones financieras, mientras también considera cómo las decisiones financieras (inversión, préstamos) pueden influir en resultados climáticos a través de mecanismos de retroalimentación.",
          de: "Die BoE entwickelt integrierte Bewertungsmodelle, die Klimawissenschaft, wirtschaftliche Auswirkungen und Finanzsystemreaktionen verknüpfen. Dies erfasst, wie Klimarisiken die Wirtschaftstätigkeit beeinflussen, was wiederum Finanzinstitute betrifft, während auch berücksichtigt wird, wie finanzielle Entscheidungen (Investitionen, Kreditvergabe) durch Rückkopplungsmechanismen Klimaergebnisse beeinflussen können.",
          nl: "De BoE ontwikkelt geïntegreerde beoordelingsmodellen die klimaatwetenschap, economische effecten en financiëlesysteemresponsen verbinden. Dit vangt op hoe klimaatrisico's economische activiteit beïnvloeden, wat op zijn beurt financiële instellingen beïnvloedt, terwijl ook wordt overwogen hoe financiële beslissingen (investeringen, kredietverlening) klimaatuitkomsten kunnen beïnvloeden via feedback-mechanismen."
        }
      },
      {
        question: {
          en: "How does the Bank of England's approach to assessing the impact of artificial intelligence and machine learning on labor markets and productivity inform its monetary policy stance on the natural rate of unemployment?",
          es: "¿Cómo el enfoque del Banco de Inglaterra para evaluar el impacto de inteligencia artificial y aprendizaje automático en mercados laborales y productividad informa su postura de política monetaria sobre la tasa natural de desempleo?",
          de: "Wie informiert der Ansatz der Bank of England zur Bewertung der Auswirkungen künstlicher Intelligenz und maschinellen Lernens auf Arbeitsmärkte und Produktivität ihre geldpolitische Haltung zur natürlichen Arbeitslosenquote?",
          nl: "Hoe informeert de Bank of England's benadering van het beoordelen van de impact van kunstmatige intelligentie en machine learning op arbeidsmarkten en productiviteit hun monetaire beleidspositie over de natuurlijke werkloosheid?"
        },
        options: [
          {
            en: "Analyzes skill-biased technological change effects on wage Phillips curves, incorporating structural shifts in matching functions and estimates of changing NAIRU through AI-driven labor market disruption",
            es: "Analiza efectos de cambio tecnológico sesgado por habilidades en curvas de Phillips salariales, incorporando cambios estructurales en funciones de emparejamiento y estimaciones de NAIRU cambiante a través de disrupción del mercado laboral impulsada por IA",
            de: "Analysiert skill-biased technologische Änderungseffekte auf Lohn-Phillips-Kurven, integriert strukturelle Verschiebungen in Matching-Funktionen und Schätzungen sich ändernder NAIRU durch KI-getriebene Arbeitsmarktstörungen",
            nl: "Analyseert skill-biased technologische veranderingseffecten op loon Phillips-curves, incorporerend structurele verschuivingen in matching-functies en schattingen van veranderende NAIRU door AI-gedreven arbeidsmarktverstoring"
          },
          {
            en: "Assumes AI will have negligible impact on employment patterns and maintains static NAIRU estimates",
            es: "Asume que IA tendrá impacto insignificante en patrones de empleo y mantiene estimaciones estáticas de NAIRU",
            de: "Nimmt an, dass KI vernachlässigbare Auswirkungen auf Beschäftigungsmuster haben wird und behält statische NAIRU-Schätzungen bei",
            nl: "Veronderstelt dat AI verwaarloosbare impact zal hebben op werkgelegenheidspatronen en behoudt statische NAIRU-schattingen"
          },
          {
            en: "Focuses only on aggregate unemployment rates without sectoral or skill-level disaggregation",
            es: "Se enfoca solo en tasas de desempleo agregadas sin desagregación sectorial o por nivel de habilidad",
            de: "Konzentriert sich nur auf aggregierte Arbeitslosenquoten ohne sektorale oder Skill-Level-Disaggregation",
            nl: "Richt zich alleen op geaggregeerde werkloosheidscijfers zonder sectorale of vaardigheidsniveau-uitsplitsing"
          },
          {
            en: "Uses historical relationships between technology and employment without considering AI's unique characteristics",
            es: "Utiliza relaciones históricas entre tecnología y empleo sin considerar características únicas de IA",
            de: "Verwendet historische Beziehungen zwischen Technologie und Beschäftigung ohne KIs einzigartige Eigenschaften zu berücksichtigen",
            nl: "Gebruikt historische relaties tussen technologie en werkgelegenheid zonder AI's unieke kenmerken te overwegen"
          }
        ],
        correct: 0,
        explanation: {
          en: "The BoE recognizes that AI and machine learning may fundamentally alter labor market dynamics through skill-biased technological change that affects different worker groups asymmetrically. Their analysis incorporates how AI impacts wage-setting behavior (shifting Phillips curves), changes job matching efficiency, and potentially alters the natural rate of unemployment. This requires continuous reassessment of NAIRU estimates to avoid policy errors from using outdated structural relationships.",
          es: "El BoE reconoce que IA y aprendizaje automático pueden alterar fundamentalmente dinámicas del mercado laboral a través de cambio tecnológico sesgado por habilidades que afecta diferentes grupos de trabajadores asimétricamente. Su análisis incorpora cómo IA impacta comportamiento de fijación salarial (cambiando curvas de Phillips), cambia eficiencia de emparejamiento de empleos y potencialmente altera tasa natural de desempleo. Esto requiere reevaluación continua de estimaciones NAIRU para evitar errores de política por usar relaciones estructurales obsoletas.",
          de: "Die BoE erkennt, dass KI und maschinelles Lernen Arbeitsmarktdynamiken fundamental durch skill-biased technologischen Wandel verändern können, der verschiedene Arbeitergruppen asymmetrisch betrifft. Ihre Analyse integriert, wie KI Lohnsetzungsverhalten beeinflusst (Phillips-Kurven verschiebt), Job-Matching-Effizienz ändert und potentiell die natürliche Arbeitslosenquote verändert. Dies erfordert kontinuierliche Neubewertung von NAIRU-Schätzungen, um Politikfehler durch veraltete strukturelle Beziehungen zu vermeiden.",
          nl: "De BoE erkent dat AI en machine learning arbeidsmarktdynamiek fundamenteel kunnen veranderen door skill-biased technologische verandering die verschillende werknemersgroepen asymmetrisch beïnvloedt. Hun analyse incorporeert hoe AI loonzetgedrag beïnvloedt (Phillips-curves verschuivend), jobmatching-efficiëntie verandert en potentieel de natuurlijke werkloosheidsgraad wijzigt. Dit vereist continue herbeoordeling van NAIRU-schattingen om beleidsfouten door verouderde structurele relaties te vermijden."
        }
      },
      {
        question: {
          en: "What is the Bank of England's framework for analyzing the effectiveness of negative interest rate policy (NIRP) and its transmission through bank profitability channels, deposit behavior, and cash hoarding incentives?",
          es: "¿Cuál es el marco del Banco de Inglaterra para analizar la efectividad de política de tasas de interés negativas (NIRP) y su transmisión a través de canales de rentabilidad bancaria, comportamiento de depósitos e incentivos de acumulación de efectivo?",
          de: "Was ist das Framework der Bank of England zur Analyse der Wirksamkeit negativer Zinspolitik (NIRP) und ihrer Übertragung durch Bankrentabilitätskanäle, Einlagenverhalten und Cash-Hortungsanreize?",
          nl: "Wat is de Bank of England's framework voor het analyseren van de effectiviteit van negatief rentebeleid (NIRP) en zijn transmissie via bankwinstgevendheidskanalen, depositogedrag en contant geld hamsteren incentives?"
        },
        options: [
          {
            en: "Evaluates reversal rate thresholds where negative rates become contractionary, analyzing net interest margin compression effects on bank lending, deposit flight risks, and optimal cash storage costs relative to negative deposit rates",
            es: "Evalúa umbrales de tasa de reversión donde tasas negativas se vuelven contractivas, analizando efectos de compresión de margen de interés neto en préstamos bancarios, riesgos de fuga de depósitos y costos óptimos de almacenamiento de efectivo relativo a tasas de depósito negativas",
            de: "Bewertet Umkehr-Zinsschwellen, wo negative Zinsen kontraktiv werden, analysiert Nettozinsmarge-Kompressionseffekte auf Bankkredite, Einlagenfluchtrisiken und optimale Barlagerkosten relativ zu negativen Einlagenzinsen",
            nl: "Evalueert omkeringsrentegrens waar negatieve rentes contractief worden, analyserend netto-rentemarge compressie-effecten op bankkredieten, depositovluchtrisico's en optimale contant geld opslagkosten relatief aan negatieve depositorentes"
          },
          {
            en: "Assumes negative rates transmit identically to positive rate changes with symmetric effects",
            es: "Asume que tasas negativas transmiten idénticamente a cambios de tasa positivos con efectos simétricos",
            de: "Nimmt an, dass negative Zinsen identisch zu positiven Zinsänderungen mit symmetrischen Effekten übertragen",
            nl: "Veronderstelt dat negatieve rentes identiek transmitteren als positieve renteveranderingen met symmetrische effecten"
          },
          {
            en: "Focuses only on theoretical benefits without considering practical implementation constraints",
            es: "Se enfoca solo en beneficios teóricos sin considerar restricciones prácticas de implementación",
            de: "Konzentriert sich nur auf theoretische Vorteile ohne praktische Implementierungsbeschränkungen zu berücksichtigen",
            nl: "Richt zich alleen op theoretische voordelen zonder praktische implementatiebeperkingen te overwegen"
          },
          {
            en: "Uses standard interest rate transmission models without NIRP-specific adjustments",
            es: "Utiliza modelos estándar de transmisión de tasa de interés sin ajustes específicos para NIRP",
            de: "Verwendet standardmäßige Zinssatz-Übertragungsmodelle ohne NIRP-spezifische Anpassungen",
            nl: "Gebruikt standaard rentetransmissiemodellen zonder NIRP-specifieke aanpassingen"
          }
        ],
        correct: 0,
        explanation: {
          en: "The BoE's NIRP analysis recognizes the existence of a 'reversal rate' below which further rate cuts become contractionary rather than expansionary. This occurs when bank net interest margins compress so severely that lending is curtailed. The framework analyzes deposit behavior changes (potential flight to cash or other assets), calculates optimal cash storage costs, and evaluates at what point negative rates' costs outweigh benefits. This sophisticated analysis prevents policy errors from assuming symmetric transmission across positive and negative rate regimes.",
          es: "El análisis NIRP del BoE reconoce la existencia de una 'tasa de reversión' por debajo de la cual recortes adicionales de tasas se vuelven contractivos en lugar de expansivos. Esto ocurre cuando márgenes de interés neto bancario se comprimen tan severamente que préstamos se restringen. El marco analiza cambios de comportamiento de depósitos (fuga potencial a efectivo u otros activos), calcula costos óptimos de almacenamiento de efectivo y evalúa en qué punto costos de tasas negativas superan beneficios. Este análisis sofisticado previene errores de política por asumir transmisión simétrica a través de regímenes de tasas positivas y negativas.",
          de: "Die NIRP-Analyse der BoE erkennt die Existenz eines 'Umkehrzinssatzes' an, unterhalb dessen weitere Zinssenkungen kontraktiv statt expansiv werden. Dies tritt ein, wenn Banknettozinsmargen so stark komprimiert werden, dass Kreditvergabe eingeschränkt wird. Das Framework analysiert Einlagenverhaltensänderungen (potentielle Flucht zu Bargeld oder anderen Vermögenswerten), berechnet optimale Barlagerkosten und bewertet, an welchem Punkt Kosten negativer Zinsen Vorteile überwiegen. Diese sophisticated Analyse verhindert Politikfehler durch Annahme symmetrischer Übertragung über positive und negative Zinsregime.",
          nl: "De BoE's NIRP-analyse erkent het bestaan van een 'omkeringsrente' waaronder verdere renteverlagingen contractief in plaats van expansief worden. Dit treedt op wanneer banknetto-rentemarges zo ernstig comprimeren dat kredietverlening wordt beperkt. Het framework analyseert depositogedragsveranderingen (potentiële vlucht naar contant geld of andere activa), berekent optimale contant geld opslagkosten en evalueert op welk punt kosten van negatieve rentes voordelen overtreffen. Deze geavanceerde analyse voorkomt beleidsfouten door symmetrische transmissie over positieve en negatieve renteregimes aan te nemen."
        }
      },
      {
        question: {
          en: "How does the Bank of England's assessment of the UK's post-Brexit trade relationship with the EU incorporate gravity model estimations, regulatory divergence costs, and dynamic effects on productivity and innovation?",
          es: "¿Cómo la evaluación del Banco de Inglaterra de la relación comercial post-Brexit del Reino Unido con la UE incorpora estimaciones de modelo gravitacional, costos de divergencia regulatoria y efectos dinámicos en productividad e innovación?",
          de: "Wie integriert die Bewertung der Bank of England der post-Brexit Handelsbeziehung des UK mit der EU Gravitationsmodellschätzungen, regulatorische Divergenzkosten und dynamische Effekte auf Produktivität und Innovation?",
          nl: "Hoe integreert de Bank of England's beoordeling van de UK's post-Brexit handelsrelatie met de EU zwaartekrachtmodelschattingen, regulatoire divergentiekosten en dynamische effecten op productiviteit en innovatie?"
        },
        options: [
          {
            en: "Uses augmented gravity equations incorporating non-tariff barrier estimates, services trade frictions, and endogenous productivity effects from reduced market integration and innovation spillovers",
            es: "Utiliza ecuaciones gravitacionales aumentadas incorporando estimaciones de barreras no arancelarias, fricciones de comercio de servicios y efectos de productividad endógenos de integración de mercado reducida y derrames de innovación",
            de: "Verwendet erweiterte Gravitationsgleichungen mit Schätzungen nichttarifärer Barrieren, Dienstleistungshandelsreibungen und endogenen Produktivitätseffekten aus reduzierter Marktintegration und Innovations-Spillovers",
            nl: "Gebruikt versterkte zwaartekrachtvergelijkingen incorporerend niet-tarifaire barrière schattingen, dienstenhandelswrijvingen en endogene productiviteitseffecten van verminderde marktintegratie en innovatiespillovers"
          },
          {
            en: "Focuses only on tariff changes without considering non-tariff barriers or regulatory alignment",
            es: "Se enfoca solo en cambios arancelarios sin considerar barreras no arancelarias o alineación regulatoria",
            de: "Konzentriert sich nur auf Zolländerungen ohne nichttarifäre Barrieren oder regulatorische Ausrichtung zu berücksichtigen",
            nl: "Richt zich alleen op tariefveranderingen zonder niet-tarifaire barrières of regulatoire afstemming te overwegen"
          },
          {
            en: "Uses static trade models without accounting for dynamic productivity and innovation effects",
            es: "Utiliza modelos comerciales estáticos sin considerar efectos dinámicos de productividad e innovación",
            de: "Verwendet statische Handelsmodelle ohne dynamische Produktivitäts- und Innovationseffekte zu berücksichtigen",
            nl: "Gebruikt statische handelsmodellen zonder dynamische productiviteit en innovatie-effecten te verantwoorden"
          },
          {
            en: "Assumes Brexit will have minimal impact on UK-EU trade patterns and economic growth",
            es: "Asume que Brexit tendrá impacto mínimo en patrones comerciales UK-UE y crecimiento económico",
            de: "Nimmt an, dass Brexit minimale Auswirkungen auf UK-EU Handelsmuster und Wirtschaftswachstum haben wird",
            nl: "Veronderstelt dat Brexit minimale impact zal hebben op UK-EU handelspatronen en economische groei"
          }
        ],
        correct: 0,
        explanation: {
          en: "The BoE's Brexit analysis employs sophisticated augmented gravity models that capture both direct trade costs (tariffs, customs procedures) and indirect effects through non-tariff barriers and regulatory divergence. Critically, it incorporates dynamic effects where reduced market integration affects productivity growth through diminished economies of scale, reduced competitive pressure, and lower innovation spillovers from EU research networks. This comprehensive approach recognizes that Brexit's economic impact extends far beyond simple trade volume changes to affect the UK's long-term growth potential.",
          es: "El análisis Brexit del BoE emplea modelos gravitacionales aumentados sofisticados que capturan tanto costos comerciales directos (aranceles, procedimientos aduaneros) como efectos indirectos a través de barreras no arancelarias y divergencia regulatoria. Críticamente, incorpora efectos dinámicos donde integración de mercado reducida afecta crecimiento de productividad a través de economías de escala disminuidas, presión competitiva reducida y derrames de innovación menores de redes de investigación de UE. Este enfoque integral reconoce que impacto económico de Brexit se extiende mucho más allá de cambios simples de volumen comercial para afectar potencial de crecimiento a largo plazo del Reino Unido.",
          de: "Die Brexit-Analyse der BoE verwendet sophisticated erweiterte Gravitationsmodelle, die sowohl direkte Handelskosten (Zölle, Zollverfahren) als auch indirekte Effekte durch nichttarifäre Barrieren und regulatorische Divergenz erfassen. Kritischerweise integriert sie dynamische Effekte, wo reduzierte Marktintegration Produktivitätswachstum durch verminderte Skaleneffekte, reduzierten Wettbewerbsdruck und niedrigere Innovations-Spillovers aus EU-Forschungsnetzwerken beeinflusst. Dieser umfassende Ansatz erkennt an, dass Brexits wirtschaftliche Auswirkungen weit über einfache Handelsvolumenänderungen hinausgehen und das langfristige Wachstumspotential des UK betreffen.",
          nl: "De BoE's Brexit-analyse gebruikt geavanceerde versterkte zwaartekrachtmodellen die zowel directe handelskosten (tarieven, douaneprocedures) als indirecte effecten via niet-tarifaire barrières en regulatoire divergentie vastleggen. Cruciaal integreert het dynamische effecten waar verminderde marktintegratie productiviteitsgroei beïnvloedt door verminderde schaalvoordelen, gereduceerde competitieve druk en lagere innovatiespillovers van EU-onderzoeksnetwerken. Deze uitgebreide benadering erkent dat Brexit's economische impact zich veel verder uitstrekt dan eenvoudige handelsvolumewijzigingen om het UK's langetermijn groeipotentieel te beïnvloeden."
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