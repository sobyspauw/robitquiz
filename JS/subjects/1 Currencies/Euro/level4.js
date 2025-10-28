// Quiz Level 4: Currencies - Euro (Intermediate+)
(function() {
  const level4 = {
    name: {
      en: "Euro - Intermediate+",
      es: "Euro - Intermedio+",
      de: "Euro - Mittelstufe+",
      nl: "Euro - Gemiddeld+"
    },
    questions: [
      {
        question: {
          en: "What is the transmission mechanism of ECB monetary policy?",
          es: "¿Cuál es el mecanismo de transmisión de la política monetaria del BCE?",
          de: "Was ist der Übertragungsmechanismus der EZB-Geldpolitik?",
          nl: "Wat is het transmissiemechanisme van ECB-monetair beleid?"
        },
        options: [
          { en: "Direct control of all interest rates", es: "Control directo de todas las tasas de interés", de: "Direkte Kontrolle aller Zinssätze", nl: "Directe controle van alle rentetarieven" },
          { en: "Through multiple channels affecting the economy", es: "A través de múltiples canales que afectan la economía", de: "Über mehrere Kanäle, die die Wirtschaft beeinflussen", nl: "Via meerdere kanalen die de economie beïnvloeden" },
          { en: "Only through government bond yields", es: "Solo a través de rendimientos de bonos gubernamentales", de: "Nur über Staatsanleihenrenditen", nl: "Alleen via overheidsobligatierendementen" },
          { en: "Exclusively via exchange rate changes", es: "Exclusivamente a través de cambios de tipo de cambio", de: "Ausschließlich über Wechselkursänderungen", nl: "Uitsluitend via wisselkoersveranderingen" }
        ],
        correct: 1,
        explanation: {
          en: "ECB monetary policy works through multiple transmission channels: interest rate channel (affecting borrowing costs), bank lending channel (bank credit supply), asset price channel (wealth effects), and exchange rate channel (competitiveness effects).",
          es: "La política monetaria del BCE funciona a través de múltiples canales de transmisión: canal de tasa de interés (afectando costos de endeudamiento), canal de préstamos bancarios (oferta de crédito bancario), canal de precios de activos (efectos de riqueza), y canal de tipo de cambio (efectos de competitividad).",
          de: "Die EZB-Geldpolitik wirkt über mehrere Übertragungskanäle: Zinssatzkanal (beeinflusst Kreditkosten), Bankkreditkanal (Bankkreditangebot), Vermögenspreiskanal (Wohlstandseffekte) und Wechselkurskanal (Wettbewerbseffekte).",
          nl: "ECB-monetair beleid werkt via meerdere transmissiekanalen: rentekanaal (beïnvloedt leenkosten), bankuitleenkanaal (bankkredietaanbod), activaprijskanaal (vermogenseffecten), en wisselkoerskanaal (concurrentie-effecten)."
        }
      },
      {
        question: {
          en: "What is the role of minimum reserve requirements in the eurozone?",
          es: "¿Cuál es el papel de los requisitos de reserva mínima en la eurozona?",
          de: "Was ist die Rolle der Mindestreserveanforderungen in der Eurozone?",
          nl: "Wat is de rol van minimale reservevereisten in de eurozone?"
        },
        options: [
          { en: "Control money supply and stabilize money markets", es: "Controlar oferta monetaria y estabilizar mercados monetarios", de: "Geldversorgung kontrollieren und Geldmärkte stabilisieren", nl: "Geldvoorraad controleren en geldmarkten stabiliseren" },
          { en: "Generate revenue for the ECB", es: "Generar ingresos para el BCE", de: "Einnahmen für die EZB generieren", nl: "Inkomsten genereren voor de ECB" },
          { en: "Prevent bank failures only", es: "Solo prevenir quiebras bancarias", de: "Nur Bankpleiten verhindern", nl: "Alleen bankfaillissementen voorkomen" },
          { en: "Regulate international trade", es: "Regular comercio internacional", de: "Internationalen Handel regulieren", nl: "Internationale handel reguleren" }
        ],
        correct: 0,
        explanation: {
          en: "Minimum reserve requirements serve to control the money supply, stabilize short-term money market rates, and create a structural liquidity shortage that makes banks dependent on ECB refinancing operations.",
          es: "Los requisitos de reserva mínima sirven para controlar la oferta monetaria, estabilizar las tasas del mercado monetario a corto plazo, y crear una escasez estructural de liquidez que hace que los bancos dependan de las operaciones de refinanciamiento del BCE.",
          de: "Mindestreserveanforderungen dienen dazu, die Geldversorgung zu kontrollieren, kurzfristige Geldmarktzinsen zu stabilisieren und einen strukturellen Liquiditätsmangel zu schaffen, der Banken von EZB-Refinanzierungsgeschäften abhängig macht.",
          nl: "Minimale reservevereisten dienen om de geldvoorraad te controleren, korte termijn geldmarkttarieven te stabiliseren, en een structureel liquiditeitstekort te creëren dat banken afhankelijk maakt van ECB-herfinancieringsoperaties."
        }
      },
      {
        question: {
          en: "What distinguishes the ECB's longer-term refinancing operations (LTROs)?",
          es: "¿Qué distingue las operaciones de refinanciamiento a largo plazo (LTRO) del BCE?",
          de: "Was unterscheidet die längerfristigen Refinanzierungsgeschäfte (LRG) der EZB?",
          nl: "Wat onderscheidt de langere termijn herfinancieringsoperaties (LTRO's) van de ECB?"
        },
        options: [
          { en: "Provide liquidity for 3-month to 4-year periods", es: "Proporcionan liquidez por períodos de 3 meses a 4 años", de: "Stellen Liquidität für 3-Monats- bis 4-Jahres-Zeiträume bereit", nl: "Verschaffen liquiditeit voor 3-maanden tot 4-jaar periodes" },
          { en: "Only available during crises", es: "Solo disponibles durante crisis", de: "Nur während Krisen verfügbar", nl: "Alleen beschikbaar tijdens crises" },
          { en: "Replace main refinancing operations", es: "Reemplazan operaciones principales de refinanciamiento", de: "Ersetzen Hauptrefinanzierungsgeschäfte", nl: "Vervangen hoofdherfinancieringsoperaties" },
          { en: "Set long-term interest rates directly", es: "Establecen tasas de interés a largo plazo directamente", de: "Setzen langfristige Zinssätze direkt", nl: "Stellen lange termijn rentes direct vast" }
        ],
        correct: 0,
        explanation: {
          en: "LTROs provide banks with longer-term funding (from 3 months to 4 years) at pre-determined rates, helping banks plan their funding and supporting the transmission of monetary policy to longer-term rates.",
          es: "Las LTRO proporcionan a los bancos financiamiento a largo plazo (de 3 meses a 4 años) a tasas predeterminadas, ayudando a los bancos a planificar su financiamiento y apoyando la transmisión de política monetaria a tasas a largo plazo.",
          de: "LRGs bieten Banken längerfristige Finanzierung (von 3 Monaten bis 4 Jahren) zu vorher festgelegten Zinssätzen und helfen Banken bei der Finanzierungsplanung und unterstützen die Übertragung der Geldpolitik auf längerfristige Zinssätze.",
          nl: "LTRO's verschaffen banken langere termijn financiering (van 3 maanden tot 4 jaar) tegen vooraf bepaalde tarieven, helpen banken hun financiering te plannen en ondersteunen de transmissie van monetair beleid naar langere termijn tarieven."
        }
      },
      {
        question: {
          en: "What characterizes the European Exchange Rate Mechanism (ERM)?",
          es: "¿Qué caracteriza el Mecanismo Europeo de Tipos de Cambio (MTC)?",
          de: "Was charakterisiert den Europäischen Wechselkursmechanismus (EWM)?",
          nl: "Wat kenmerkt het Europees Wisselkoersmechanisme (EWM)?"
        },
        options: [
          { en: "Predecessor to ERM II for Euro candidates", es: "Predecesor del MTC II para candidatos al Euro", de: "Vorgänger des WKM II für Euro-Kandidaten", nl: "Voorganger van WKM II voor Euro-kandidaten" },
          { en: "Current system for eurozone countries", es: "Sistema actual para países de la eurozona", de: "Aktuelles System für Eurozone-Länder", nl: "Huidig systeem voor eurozone-landen" },
          { en: "Floating exchange rate system", es: "Sistema de tipo de cambio flotante", de: "Flexibles Wechselkurssystem", nl: "Zwevend wisselkoerssysteem" },
          { en: "Gold standard replacement", es: "Reemplazo del patrón oro", de: "Goldstandard-Ersatz", nl: "Goudstandaard vervanging" }
        ],
        correct: 0,
        explanation: {
          en: "The original ERM (1979-1999) was a system of semi-fixed exchange rates among European currencies that preceded the euro. It helped stabilize exchange rates and prepare for monetary union, with ERM II continuing this role for euro candidates.",
          es: "El MTC original (1979-1999) fue un sistema de tipos de cambio semifijos entre monedas europeas que precedió al euro. Ayudó a estabilizar tipos de cambio y preparar para la unión monetaria, con el MTC II continuando este papel para candidatos al euro.",
          de: "Der ursprüngliche EWM (1979-1999) war ein System von halbfesten Wechselkursen zwischen europäischen Währungen, das dem Euro vorausging. Er half, Wechselkurse zu stabilisieren und auf die Währungsunion vorzubereiten, wobei der WKM II diese Rolle für Euro-Kandidaten fortsetzt.",
          nl: "Het oorspronkelijke EWM (1979-1999) was een systeem van semi-vaste wisselkoersen tussen Europese valuta's dat voorafging aan de euro. Het hielp wisselkoersen te stabiliseren en voor te bereiden op monetaire unie, waarbij WKM II deze rol voortzet voor euro-kandidaten."
        }
      },
      {
        question: {
          en: "What is the significance of the ECB's collateral framework?",
          es: "¿Cuál es la importancia del marco de garantías del BCE?",
          de: "Was ist die Bedeutung des Sicherheitenrahmens der EZB?",
          nl: "Wat is het belang van het onderpandkader van de ECB?"
        },
        options: [
          { en: "Defines acceptable assets for refinancing operations", es: "Define activos aceptables para operaciones de refinanciamiento", de: "Definiert akzeptable Vermögenswerte für Refinanzierungsgeschäfte", nl: "Definieert acceptabele activa voor herfinancieringsoperaties" },
          { en: "Sets bank capital requirements", es: "Establece requisitos de capital bancario", de: "Setzt Bankenkapitalanforderungen", nl: "Stelt bankkapitaalvereisten vast" },
          { en: "Regulates securities trading", es: "Regula comercio de valores", de: "Reguliert Wertpapierhandel", nl: "Reguleert effectenhandel" },
          { en: "Controls government borrowing", es: "Controla endeudamiento gubernamental", de: "Kontrolliert Staatsverschuldung", nl: "Controleert overheidsleningen" }
        ],
        correct: 0,
        explanation: {
          en: "The ECB's collateral framework specifies which assets banks can use as collateral when borrowing from the Eurosystem. It includes government bonds, corporate bonds, covered bonds, and asset-backed securities meeting specific criteria.",
          es: "El marco de garantías del BCE especifica qué activos pueden usar los bancos como garantía al pedir prestado del Eurosistema. Incluye bonos gubernamentales, bonos corporativos, bonos cubiertos y valores respaldados por activos que cumplen criterios específicos.",
          de: "Der Sicherheitenrahmen der EZB spezifiziert, welche Vermögenswerte Banken als Sicherheiten verwenden können, wenn sie vom Eurosystem leihen. Er umfasst Staatsanleihen, Unternehmensanleihen, Pfandbriefe und forderungsbesicherte Wertpapiere, die spezifische Kriterien erfüllen.",
          nl: "Het onderpandkader van de ECB specificeert welke activa banken kunnen gebruiken als onderpand bij het lenen van het Eurosysteem. Het omvat overheidsobligaties, bedrijfsobligaties, gedekte obligaties en door activa gedekte effecten die specifieke criteria ontmoeten."
        }
      },
      {
        question: {
          en: "What is the purpose of the ECB's marginal lending facility?",
          es: "¿Cuál es el propósito de la facilidad de préstamo marginal del BCE?",
          de: "Was ist der Zweck der Spitzenrefinanzierungsfazilität der EZB?",
          nl: "Wat is het doel van de marginale uitleenfaciliteit van de ECB?"
        },
        options: [
          { en: "Provide overnight lending to banks at penalty rates", es: "Proporcionar préstamos nocturnos a bancos a tasas penalizadoras", de: "Übernachtkredite an Banken zu Strafzinsen bereitstellen", nl: "Overnight leningen aan banken tegen straftarieven verstrekken" },
          { en: "Replace main refinancing operations", es: "Reemplazar operaciones principales de refinanciamiento", de: "Hauptrefinanzierungsgeschäfte ersetzen", nl: "Hoofdherfinancieringsoperaties vervangen" },
          { en: "Finance government operations", es: "Financiar operaciones gubernamentales", de: "Regierungsoperationen finanzieren", nl: "Overheidsoperaties financieren" },
          { en: "Support international trade", es: "Apoyar comercio internacional", de: "Internationalen Handel unterstützen", nl: "Internationale handel ondersteunen" }
        ],
        correct: 0,
        explanation: {
          en: "The marginal lending facility provides overnight credit to banks at rates above the main refinancing rate, serving as a safety valve and creating a ceiling for overnight market rates in the euro area.",
          es: "La facilidad de préstamo marginal proporciona crédito nocturno a bancos a tasas superiores a la tasa de refinanciamiento principal, sirviendo como válvula de seguridad y creando un techo para las tasas del mercado nocturno en el área euro.",
          de: "Die Spitzenrefinanzierungsfazilität stellt Übernachtkredite an Banken zu Zinssätzen über dem Hauptrefinanzierungssatz bereit, dient als Sicherheitsventil und schafft eine Obergrenze für Tagesgeldsätze im Euro-Raum.",
          nl: "De marginale uitleenfaciliteit verstrekt overnight krediet aan banken tegen tarieven boven de hoofdherfinancieringsrente, dient als veiligheidsklep en creëert een plafond voor overnight markttarieven in de eurozone."
        }
      },
      {
        question: {
          en: "How does the ECB's deposit facility function?",
          es: "¿Cómo funciona la facilidad de depósito del BCE?",
          de: "Wie funktioniert die Einlagefazilität der EZB?",
          nl: "Hoe functioneert de depositofaciliteit van de ECB?"
        },
        options: [
          { en: "Banks deposit excess liquidity overnight at ECB", es: "Los bancos depositan liquidez excesiva nocturna en el BCE", de: "Banken deponieren überschüssige Liquidität über Nacht bei der EZB", nl: "Banken deponeren overtollige liquiditeit overnight bij de ECB" },
          { en: "ECB provides long-term funding to banks", es: "El BCE proporciona financiamiento a largo plazo a bancos", de: "EZB stellt langfristige Finanzierung für Banken bereit", nl: "ECB verstrekt lange termijn financiering aan banken" },
          { en: "Government bonds are traded", es: "Se comercian bonos gubernamentales", de: "Staatsanleihen werden gehandelt", nl: "Overheidsobligaties worden verhandeld" },
          { en: "International reserves are managed", es: "Se gestionan reservas internacionales", de: "Internationale Reserven werden verwaltet", nl: "Internationale reserves worden beheerd" }
        ],
        correct: 0,
        explanation: {
          en: "The deposit facility allows banks to deposit excess liquidity overnight with the ECB at a rate below the main refinancing rate, creating a floor for overnight market rates and helping implement monetary policy.",
          es: "La facilidad de depósito permite a los bancos depositar liquidez excesiva nocturna con el BCE a una tasa inferior a la tasa de refinanciamiento principal, creando un piso para las tasas del mercado nocturno y ayudando a implementar política monetaria.",
          de: "Die Einlagefazilität ermöglicht es Banken, überschüssige Liquidität über Nacht bei der EZB zu einem Zinssatz unter dem Hauptrefinanzierungssatz zu deponieren, was eine Untergrenze für Tagesgeldsätze schafft und bei der Umsetzung der Geldpolitik hilft.",
          nl: "De depositofaciliteit stelt banken in staat overtollige liquiditeit overnight bij de ECB te deponeren tegen een tarief onder de hoofdherfinancieringsrente, wat een bodem creëert voor overnight markttarieven en helpt bij het implementeren van monetair beleid."
        }
      },
      {
        question: {
          en: "What is the role of national central banks in monetary policy implementation?",
          es: "¿Cuál es el papel de los bancos centrales nacionales en la implementación de política monetaria?",
          de: "Was ist die Rolle der nationalen Zentralbanken bei der Umsetzung der Geldpolitik?",
          nl: "Wat is de rol van nationale centrale banken bij de implementatie van monetair beleid?"
        },
        options: [
          { en: "Execute ECB decisions in their jurisdictions", es: "Ejecutar decisiones del BCE en sus jurisdicciones", de: "EZB-Entscheidungen in ihren Zuständigkeitsbereichen ausführen", nl: "ECB-beslissingen uitvoeren in hun rechtsgebieden" },
          { en: "Set independent monetary policies", es: "Establecer políticas monetarias independientes", de: "Unabhängige Geldpolitiken festlegen", nl: "Onafhankelijk monetair beleid vaststellen" },
          { en: "Compete with ECB policies", es: "Competir con políticas del BCE", de: "Mit EZB-Politiken konkurrieren", nl: "Concurreren met ECB-beleid" },
          { en: "Focus only on domestic issues", es: "Enfocarse solo en asuntos domésticos", de: "Sich nur auf inländische Angelegenheiten konzentrieren", nl: "Zich alleen richten op binnenlandse zaken" }
        ],
        correct: 0,
        explanation: {
          en: "National central banks implement ECB monetary policy decisions in their respective countries, conducting refinancing operations, managing reserves, and maintaining operational relationships with domestic banks while following unified Eurosystem policies.",
          es: "Los bancos centrales nacionales implementan las decisiones de política monetaria del BCE en sus respectivos países, realizando operaciones de refinanciamiento, gestionando reservas y manteniendo relaciones operativas con bancos domésticos mientras siguen políticas unificadas del Eurosistema.",
          de: "Nationale Zentralbanken setzen EZB-Geldpolitikentscheidungen in ihren jeweiligen Ländern um, führen Refinanzierungsgeschäfte durch, verwalten Reserven und unterhalten operative Beziehungen zu inländischen Banken, während sie einheitliche Eurosystem-Politiken befolgen.",
          nl: "Nationale centrale banken implementeren ECB-monetaire beleidsbeslissingen in hun respectievelijke landen, voeren herfinancieringsoperaties uit, beheren reserves en onderhouden operationele relaties met binnenlandse banken terwijl ze uniforme Eurosysteem-beleid volgen."
        }
      },
      {
        question: {
          en: "What characterizes the ECB's operational framework?",
          es: "¿Qué caracteriza el marco operacional del BCE?",
          de: "Was charakterisiert das operative Rahmenwerk der EZB?",
          nl: "Wat kenmerkt het operationele kader van de ECB?"
        },
        options: [
          { en: "Decentralized execution with centralized decision-making", es: "Ejecución descentralizada con toma de decisiones centralizada", de: "Dezentrale Ausführung mit zentraler Entscheidungsfindung", nl: "Gedecentraliseerde uitvoering met gecentraliseerde besluitvorming" },
          { en: "Each country sets its own policies", es: "Cada país establece sus propias políticas", de: "Jedes Land setzt seine eigenen Politiken", nl: "Elk land stelt zijn eigen beleid vast" },
          { en: "Only direct ECB operations", es: "Solo operaciones directas del BCE", de: "Nur direkte EZB-Operationen", nl: "Alleen directe ECB-operaties" },
          { en: "Market-driven policy implementation", es: "Implementación de política impulsada por el mercado", de: "Marktgetriebene Politikumsetzung", nl: "Marktgedreven beleidsimplementatie" }
        ],
        correct: 0,
        explanation: {
          en: "The ECB operates through a decentralized framework where monetary policy decisions are made centrally by the Governing Council but implemented by national central banks in their respective jurisdictions, ensuring uniform policy across the eurozone.",
          es: "El BCE opera a través de un marco descentralizado donde las decisiones de política monetaria se toman centralmente por el Consejo de Gobierno pero se implementan por bancos centrales nacionales en sus respectivas jurisdicciones, asegurando política uniforme en toda la eurozona.",
          de: "Die EZB operiert durch ein dezentrales Rahmenwerk, wo geldpolitische Entscheidungen zentral vom Rat getroffen, aber von nationalen Zentralbanken in ihren jeweiligen Zuständigkeitsbereichen umgesetzt werden, um einheitliche Politik in der Eurozone zu gewährleisten.",
          nl: "De ECB opereert via een gedecentraliseerd kader waarbij monetaire beleidsbeslissingen centraal worden genomen door de Raad van Bestuur maar geïmplementeerd door nationale centrale banken in hun respectievelijke rechtsgebieden, wat uniform beleid in de eurozone verzekert."
        }
      },
      {
        question: {
          en: "What is the concept of 'fiscal dominance' in monetary policy?",
          es: "¿Qué es el concepto de 'dominancia fiscal' en política monetaria?",
          de: "Was ist das Konzept der 'fiskalischen Dominanz' in der Geldpolitik?",
          nl: "Wat is het concept van 'fiscale dominantie' in monetair beleid?"
        },
        options: [
          { en: "When fiscal policy constrains monetary policy independence", es: "Cuando la política fiscal limita la independencia de la política monetaria", de: "Wenn Fiskalpolitik die geldpolitische Unabhängigkeit einschränkt", nl: "Wanneer fiscaal beleid de onafhankelijkheid van monetair beleid beperkt" },
          { en: "Central bank controls government spending", es: "El banco central controla el gasto gubernamental", de: "Zentralbank kontrolliert Regierungsausgaben", nl: "Centrale bank controleert overheidsuitgaven" },
          { en: "Monetary policy determines tax rates", es: "La política monetaria determina las tasas impositivas", de: "Geldpolitik bestimmt Steuersätze", nl: "Monetair beleid bepaalt belastingtarieven" },
          { en: "Perfect coordination between policies", es: "Coordinación perfecta entre políticas", de: "Perfekte Koordination zwischen Politiken", nl: "Perfecte coördinatie tussen beleid" }
        ],
        correct: 0,
        explanation: {
          en: "Fiscal dominance occurs when large government deficits and debt levels pressure the central bank to keep interest rates low or purchase government bonds, potentially compromising price stability and monetary policy independence.",
          es: "La dominancia fiscal ocurre cuando grandes déficits gubernamentales y niveles de deuda presionan al banco central a mantener tasas de interés bajas o comprar bonos gubernamentales, potencialmente comprometiendo la estabilidad de precios y la independencia de política monetaria.",
          de: "Fiskalische Dominanz tritt auf, wenn große Regierungsdefizite und Schuldenstände die Zentralbank unter Druck setzen, Zinssätze niedrig zu halten oder Staatsanleihen zu kaufen, was möglicherweise Preisstabilität und geldpolitische Unabhängigkeit gefährdet.",
          nl: "Fiscale dominantie treedt op wanneer grote overheidstekorten en schuldniveaus de centrale bank onder druk zetten om rentetarieven laag te houden of overheidsobligaties te kopen, wat mogelijk prijsstabiliteit en monetaire beleidsindependentie compromitteert."
        }
      },
      {
        question: {
          en: "What is the ECB's approach to financial stability assessment?",
          es: "¿Cuál es el enfoque del BCE para la evaluación de estabilidad financiera?",
          de: "Was ist der Ansatz der EZB zur Finanzstabilitätsbewertung?",
          nl: "Wat is de ECB's benadering van financiële stabiliteitsbeoordeling?"
        },
        options: [
          { en: "Macroprudential oversight and systemic risk monitoring", es: "Supervisión macroprudencial y monitoreo de riesgo sistémico", de: "Makroprudenzielle Aufsicht und systemische Risikoüberwachung", nl: "Macroprudentieel toezicht en systemische risicomonitoring" },
          { en: "Individual bank profitability analysis", es: "Análisis de rentabilidad de bancos individuales", de: "Analyse der Rentabilität einzelner Banken", nl: "Individuele bankwinstgevendheidsanalyse" },
          { en: "Consumer protection enforcement", es: "Aplicación de protección al consumidor", de: "Verbraucherschutz-Durchsetzung", nl: "Consumentenbeschermingshandhaving" },
          { en: "Stock market regulation", es: "Regulación del mercado de valores", de: "Börsenregulierung", nl: "Beurzenregulering" }
        ],
        correct: 0,
        explanation: {
          en: "The ECB's financial stability assessment focuses on macroprudential oversight, monitoring systemic risks, analyzing interconnectedness in the financial system, and identifying potential threats to eurozone financial stability rather than individual institution supervision.",
          es: "La evaluación de estabilidad financiera del BCE se enfoca en supervisión macroprudencial, monitoreo de riesgos sistémicos, análisis de interconexión en el sistema financiero, e identificación de amenazas potenciales a la estabilidad financiera de la eurozona en lugar de supervisión de instituciones individuales.",
          de: "Die Finanzstabilitätsbewertung der EZB konzentriert sich auf makroprudenzielle Aufsicht, Überwachung systemischer Risiken, Analyse der Verflechtung im Finanzsystem und Identifizierung potenzieller Bedrohungen für die Finanzstabilität der Eurozone anstatt auf individuelle Institutionsaufsicht.",
          nl: "De ECB's financiële stabiliteitsbeoordeling richt zich op macroprudentieel toezicht, monitoring van systemische risico's, analyse van vervlechting in het financiële systeem, en identificatie van potentiële bedreigingen voor eurozone financiële stabiliteit in plaats van individueel instellingstoezicht."
        }
      },
      {
        question: {
          en: "How does the ECB coordinate with other central banks globally?",
          es: "¿Cómo coordina el BCE con otros bancos centrales globalmente?",
          de: "Wie koordiniert die EZB mit anderen Zentralbanken weltweit?",
          nl: "Hoe coördineert de ECB met andere centrale banken wereldwijd?"
        },
        options: [
          { en: "Through swap lines and international forums", es: "A través de líneas de intercambio y foros internacionales", de: "Über Swap-Linien und internationale Foren", nl: "Via swaplijnen en internationale forums" },
          { en: "Only during financial crises", es: "Solo durante crisis financieras", de: "Nur während Finanzkrisen", nl: "Alleen tijdens financiële crises" },
          { en: "ECB operates completely independently", es: "El BCE opera completamente independiente", de: "EZB operiert völlig unabhängig", nl: "ECB opereert volledig onafhankelijk" },
          { en: "Formal monetary union with all central banks", es: "Unión monetaria formal con todos los bancos centrales", de: "Formelle Währungsunion mit allen Zentralbanken", nl: "Formele monetaire unie met alle centrale banken" }
        ],
        correct: 0,
        explanation: {
          en: "The ECB coordinates globally through currency swap agreements with major central banks, participation in international forums like the BIS and G20, and sharing information on monetary policy and financial stability issues.",
          es: "El BCE coordina globalmente a través de acuerdos de intercambio de divisas con bancos centrales importantes, participación en foros internacionales como el BIS y G20, y compartir información sobre política monetaria y asuntos de estabilidad financiera.",
          de: "Die EZB koordiniert global durch Währungsswap-Vereinbarungen mit wichtigen Zentralbanken, Teilnahme an internationalen Foren wie BIS und G20, und Informationsaustausch über Geldpolitik und Finanzstabilitätsfragen.",
          nl: "De ECB coördineert wereldwijd via valutaswapovereenkomsten met belangrijke centrale banken, deelname aan internationale forums zoals BIS en G20, en het delen van informatie over monetair beleid en financiële stabiliteitskwesties."
        }
      },
      {
        question: {
          en: "What is the significance of the ECB's independence?",
          es: "¿Cuál es la importancia de la independencia del BCE?",
          de: "Was ist die Bedeutung der Unabhängigkeit der EZB?",
          nl: "Wat is het belang van de onafhankelijkheid van de ECB?"
        },
        options: [
          { en: "Protects monetary policy from political interference", es: "Protege la política monetaria de interferencia política", de: "Schützt Geldpolitik vor politischer Einmischung", nl: "Beschermt monetair beleid tegen politieke inmenging" },
          { en: "Allows unlimited government financing", es: "Permite financiamiento gubernamental ilimitado", de: "Ermöglicht unbegrenzte Regierungsfinanzierung", nl: "Staat onbeperkte overheidsfinanciering toe" },
          { en: "Eliminates democratic oversight", es: "Elimina supervisión democrática", de: "Beseitigt demokratische Aufsicht", nl: "Elimineert democratisch toezicht" },
          { en: "Prevents international cooperation", es: "Previene cooperación internacional", de: "Verhindert internationale Zusammenarbeit", nl: "Voorkomt internationale samenwerking" }
        ],
        correct: 0,
        explanation: {
          en: "ECB independence is crucial for credible monetary policy, protecting price stability objectives from short-term political pressures, and maintaining market confidence in the central bank's commitment to its mandate.",
          es: "La independencia del BCE es crucial para una política monetaria creíble, protegiendo objetivos de estabilidad de precios de presiones políticas a corto plazo, y manteniendo confianza del mercado en el compromiso del banco central con su mandato.",
          de: "Die Unabhängigkeit der EZB ist entscheidend für glaubwürdige Geldpolitik, Schutz der Preisstabilitätsziele vor kurzfristigen politischen Pressionen und Aufrechterhaltung des Marktvertrauens in das Engagement der Zentralbank für ihr Mandat.",
          nl: "ECB-onafhankelijkheid is cruciaal voor geloofwaardig monetair beleid, bescherming van prijsstabiliteitsdoelstellingen tegen korte termijn politieke druk, en behoud van marktvertrouwen in de toewijding van de centrale bank aan haar mandaat."
        }
      },
      {
        question: {
          en: "What role does the ECB play in the Single Supervisory Mechanism?",
          es: "¿Qué papel juega el BCE en el Mecanismo Único de Supervisión?",
          de: "Welche Rolle spielt die EZB im Einheitlichen Aufsichtsmechanismus?",
          nl: "Welke rol speelt de ECB in het Eenheids Toezichtsmechanisme?"
        },
        options: [
          { en: "Supervises significant banks across the eurozone", es: "Supervisa bancos significativos en toda la eurozona", de: "Überwacht bedeutende Banken in der gesamten Eurozone", nl: "Houdt toezicht op significante banken in de hele eurozone" },
          { en: "Only provides technical assistance", es: "Solo proporciona asistencia técnica", de: "Stellt nur technische Hilfe bereit", nl: "Verstrekt alleen technische hulp" },
          { en: "Regulates only monetary policy", es: "Regula solo política monetaria", de: "Reguliert nur Geldpolitik", nl: "Reguleert alleen monetair beleid" },
          { en: "Manages payment systems exclusively", es: "Gestiona sistemas de pago exclusivamente", de: "Verwaltet ausschließlich Zahlungssysteme", nl: "Beheert uitsluitend betalingssystemen" }
        ],
        correct: 0,
        explanation: {
          en: "Within the SSM, the ECB directly supervises around 115 significant banks representing about 82% of eurozone banking assets, while national supervisors handle smaller banks under ECB oversight, creating comprehensive banking supervision.",
          es: "Dentro del MUS, el BCE supervisa directamente alrededor de 115 bancos significativos representando cerca del 82% de activos bancarios de la eurozona, mientras supervisores nacionales manejan bancos más pequeños bajo supervisión del BCE, creando supervisión bancaria integral.",
          de: "Innerhalb des ESM überwacht die EZB direkt etwa 115 bedeutende Banken, die etwa 82% der Eurozone-Bankvermögen repräsentieren, während nationale Aufseher kleinere Banken unter EZB-Aufsicht handhaben, was umfassende Bankenaufsicht schafft.",
          nl: "Binnen het ETM houdt de ECB direct toezicht op ongeveer 115 significante banken die ongeveer 82% van eurozone bankactiva vertegenwoordigen, terwijl nationale toezichthouders kleinere banken onder ECB-toezicht behandelen, wat uitgebreide banktoezicht creëert."
        }
      },
      {
        question: {
          en: "How does the ECB's communication strategy affect markets?",
          es: "¿Cómo afecta la estrategia de comunicación del BCE a los mercados?",
          de: "Wie beeinflusst die Kommunikationsstrategie der EZB die Märkte?",
          nl: "Hoe beïnvloedt de communicatiestrategie van de ECB de markten?"
        },
        options: [
          { en: "Shapes market expectations and reduces uncertainty", es: "Modela expectativas del mercado y reduce incertidumbre", de: "Formt Markterwartungen und reduziert Unsicherheit", nl: "Vormt marktverwachtingen en vermindert onzekerheid" },
          { en: "Has no impact on financial markets", es: "No tiene impacto en mercados financieros", de: "Hat keinen Einfluss auf Finanzmärkte", nl: "Heeft geen impact op financiële markten" },
          { en: "Only affects government bond markets", es: "Solo afecta mercados de bonos gubernamentales", de: "Beeinflusst nur Staatsanleihenmärkte", nl: "Beïnvloedt alleen overheidsobligatie markten" },
          { en: "Creates more market volatility", es: "Crea más volatilidad del mercado", de: "Schafft mehr Marktvolatilität", nl: "Creëert meer marktvolatiliteit" }
        ],
        correct: 0,
        explanation: {
          en: "The ECB's communication strategy, including press conferences, speeches, and forward guidance, helps shape market expectations about future policy actions, reduces uncertainty, and enhances the effectiveness of monetary policy transmission.",
          es: "La estrategia de comunicación del BCE, incluyendo conferencias de prensa, discursos y orientación futura, ayuda a moldear expectativas del mercado sobre acciones futuras de política, reduce incertidumbre y mejora la efectividad de transmisión de política monetaria.",
          de: "Die Kommunikationsstrategie der EZB, einschließlich Pressekonferenzen, Reden und Forward Guidance, hilft dabei, Markterwartungen über zukünftige Politikmaßnahmen zu formen, Unsicherheit zu reduzieren und die Wirksamkeit der geldpolitischen Übertragung zu verbessern.",
          nl: "De communicatiestrategie van de ECB, inclusief persconferenties, toespraken en forward guidance, helpt marktverwachtingen over toekomstige beleidsacties te vormen, vermindert onzekerheid en verbetert de effectiviteit van monetaire beleidstransmissie."
        }
      },
      {
        question: {
          en: "What characterizes the ECB's price stability definition evolution?",
          es: "¿Qué caracteriza la evolución de la definición de estabilidad de precios del BCE?",
          de: "Was charakterisiert die Entwicklung der Preisstabilitätsdefinition der EZB?",
          nl: "Wat kenmerkt de evolutie van de ECB's prijsstabiliteitsdefinitie?"
        },
        options: [
          { en: "Shifted from asymmetric to symmetric 2% target", es: "Cambió de objetivo asimétrico a simétrico del 2%", de: "Wechselte von asymmetrischem zu symmetrischem 2%-Ziel", nl: "Verschoof van asymmetrisch naar symmetrisch 2% doel" },
          { en: "Maintained unchanged since 1998", es: "Se mantuvo sin cambios desde 1998", de: "Blieb seit 1998 unverändert", nl: "Bleef ongewijzigd sinds 1998" },
          { en: "Frequently changes based on economic conditions", es: "Cambia frecuentemente basado en condiciones económicas", de: "Ändert sich häufig basierend auf wirtschaftlichen Bedingungen", nl: "Verandert frequent gebaseerd op economische omstandigheden" },
          { en: "Only considers deflation risks", es: "Solo considera riesgos de deflación", de: "Berücksichtigt nur Deflationsrisiken", nl: "Houdt alleen rekening met deflatierisico's" }
        ],
        correct: 0,
        explanation: {
          en: "In 2021, the ECB updated its price stability definition from 'close to but below 2%' to a symmetric 2% target, recognizing that both excessive inflation and deflation are equally undesirable deviations from price stability.",
          es: "En 2021, el BCE actualizó su definición de estabilidad de precios de 'cerca pero por debajo del 2%' a un objetivo simétrico del 2%, reconociendo que tanto inflación excesiva como deflación son desviaciones igualmente indeseables de la estabilidad de precios.",
          de: "2021 aktualisierte die EZB ihre Preisstabilitätsdefinition von 'nahe, aber unter 2%' zu einem symmetrischen 2%-Ziel und erkannte an, dass sowohl übermäßige Inflation als auch Deflation gleichermaßen unerwünschte Abweichungen von der Preisstabilität sind.",
          nl: "In 2021 werkte de ECB haar prijsstabiliteitsdefinitie bij van 'dicht bij maar onder 2%' naar een symmetrisch 2% doel, erkennend dat zowel buitensporige inflatie als deflatie even onwenselijke afwijkingen van prijsstabiliteit zijn."
        }
      },
      {
        question: {
          en: "What is the role of repo operations in ECB monetary policy?",
          es: "¿Cuál es el papel de las operaciones repo en la política monetaria del BCE?",
          de: "Was ist die Rolle von Repo-Geschäften in der EZB-Geldpolitik?",
          nl: "Wat is de rol van repo-operaties in ECB-monetair beleid?"
        },
        options: [
          { en: "Provide temporary liquidity against collateral", es: "Proporcionan liquidez temporal contra garantías", de: "Stellen temporäre Liquidität gegen Sicherheiten bereit", nl: "Verschaffen tijdelijke liquiditeit tegen onderpand" },
          { en: "Permanent money creation", es: "Creación permanente de dinero", de: "Permanente Geldschöpfung", nl: "Permanente geldschepping" },
          { en: "Direct government financing", es: "Financiamiento directo del gobierno", de: "Direkte Regierungsfinanzierung", nl: "Directe overheidsfinanciering" },
          { en: "Currency exchange operations", es: "Operaciones de intercambio de divisas", de: "Währungsaustauschoperationen", nl: "Valutawisseloperaties" }
        ],
        correct: 0,
        explanation: {
          en: "Repo (repurchase) operations are the ECB's main monetary policy tool, providing banks with temporary liquidity in exchange for eligible collateral, with agreements to reverse the transaction at maturity, controlling money market rates.",
          es: "Las operaciones repo (recompra) son la principal herramienta de política monetaria del BCE, proporcionando a los bancos liquidez temporal a cambio de garantías elegibles, con acuerdos para revertir la transacción al vencimiento, controlando tasas del mercado monetario.",
          de: "Repo-(Rückkauf-)Geschäfte sind das wichtigste geldpolitische Instrument der EZB, das Banken temporäre Liquidität im Austausch gegen zulässige Sicherheiten bereitstellt, mit Vereinbarungen zur Umkehrung der Transaktion bei Fälligkeit, wodurch Geldmarktzinsen kontrolliert werden.",
          nl: "Repo-(terugkoop-)operaties zijn het hoofdinstrument van ECB-monetair beleid, dat banken tijdelijke liquiditeit verschaft in ruil voor geschikt onderpand, met overeenkomsten om de transactie bij vervaldatum om te keren, wat geldmarkttarieven controleert."
        }
      },
      {
        question: {
          en: "How does the ECB address climate change considerations?",
          es: "¿Cómo aborda el BCE las consideraciones del cambio climático?",
          de: "Wie geht die EZB mit Klimawandel-Überlegungen um?",
          nl: "Hoe behandelt de ECB klimaatveranderingsoverwegingen?"
        },
        options: [
          { en: "Integrates climate risks into monetary policy framework", es: "Integra riesgos climáticos en el marco de política monetaria", de: "Integriert Klimarisiken in das geldpolitische Rahmenwerk", nl: "Integreert klimaatrisico's in monetair beleidskader" },
          { en: "Completely ignores environmental factors", es: "Ignora completamente factores ambientales", de: "Ignoriert Umweltfaktoren völlig", nl: "Negeert milieufactoren volledig" },
          { en: "Only focuses on short-term economic impacts", es: "Solo se enfoca en impactos económicos a corto plazo", de: "Konzentriert sich nur auf kurzfristige wirtschaftliche Auswirkungen", nl: "Richt zich alleen op korte termijn economische effecten" },
          { en: "Sets environmental regulations for banks", es: "Establece regulaciones ambientales para bancos", de: "Setzt Umweltvorschriften für Banken", nl: "Stelt milieuregulaties voor banken vast" }
        ],
        correct: 0,
        explanation: {
          en: "The ECB increasingly considers climate-related financial risks in its monetary policy, banking supervision, and financial stability assessments, recognizing climate change as a structural challenge affecting price stability and financial system resilience.",
          es: "El BCE considera cada vez más los riesgos financieros relacionados con el clima en su política monetaria, supervisión bancaria y evaluaciones de estabilidad financiera, reconociendo el cambio climático como un desafío estructural que afecta la estabilidad de precios y la resistencia del sistema financiero.",
          de: "Die EZB berücksichtigt zunehmend klimabezogene Finanzrisiken in ihrer Geldpolitik, Bankenaufsicht und Finanzstabilitätsbewertungen und erkennt den Klimawandel als strukturelle Herausforderung an, die Preisstabilität und Finanzssystemwiderstandsfähigkeit beeinflusst.",
          nl: "De ECB houdt steeds meer rekening met klimaat-gerelateerde financiële risico's in haar monetair beleid, banktoezicht en financiële stabiliteitsevaluaties, erkennend dat klimaatverandering een structurele uitdaging is die prijsstabiliteit en financieel systeembestendigheid beïnvloedt."
        }
      },
      {
        question: {
          en: "What is the significance of the ECB's analytical framework?",
          es: "¿Cuál es la importancia del marco analítico del BCE?",
          de: "Was ist die Bedeutung des analytischen Rahmenwerks der EZB?",
          nl: "Wat is het belang van het analytisch kader van de ECB?"
        },
        options: [
          { en: "Combines economic and monetary analysis for policy decisions", es: "Combina análisis económico y monetario para decisiones de política", de: "Kombiniert wirtschaftliche und monetäre Analyse für Politikentscheidungen", nl: "Combineert economische en monetaire analyse voor beleidsbeslissingen" },
          { en: "Relies only on statistical models", es: "Se basa solo en modelos estadísticos", de: "Stützt sich nur auf statistische Modelle", nl: "Vertrouwt alleen op statistische modellen" },
          { en: "Uses single economic indicator", es: "Usa un solo indicador económico", de: "Verwendet einen einzigen Wirtschaftsindikator", nl: "Gebruikt één economische indicator" },
          { en: "Ignores monetary aggregates", es: "Ignora agregados monetarios", de: "Ignoriert Geldmengenaggregate", nl: "Negeert monetaire aggregaten" }
        ],
        correct: 0,
        explanation: {
          en: "The ECB's two-pillar analytical framework combines economic analysis (examining real economic developments and price pressures) with monetary analysis (focusing on money and credit growth) to assess risks to price stability comprehensively.",
          es: "El marco analítico de dos pilares del BCE combina análisis económico (examinando desarrollos económicos reales y presiones de precios) con análisis monetario (enfocándose en crecimiento de dinero y crédito) para evaluar riesgos a la estabilidad de precios de manera integral.",
          de: "Das zweisäulige analytische Rahmenwerk der EZB kombiniert Wirtschaftsanalyse (Untersuchung realer wirtschaftlicher Entwicklungen und Preisdruck) mit Geldmengenanalyse (Fokus auf Geld- und Kreditwachstum) zur umfassenden Bewertung von Risiken für die Preisstabilität.",
          nl: "Het tweepijler analytisch kader van de ECB combineert economische analyse (onderzoek van reële economische ontwikkelingen en prijsdruk) met monetaire analyse (focus op geld- en kredietgroei) om risico's voor prijsstabiliteit uitgebreid te beoordelen."
        }
      },
      {
        question: {
          en: "What is the debt-to-GDP ratio criterion in the Maastricht Treaty?",
          es: "¿Cuál es el criterio de la relación deuda-PIB en el Tratado de Maastricht?",
          de: "Was ist das Schulden-zu-BIP-Verhältnis-Kriterium im Vertrag von Maastricht?",
          nl: "Wat is het schuld-tot-BBP-ratio criterium in het Verdrag van Maastricht?"
        },
        options: [
          { en: "Maximum 60% of GDP", es: "Máximo 60% del PIB", de: "Maximal 60% des BIP", nl: "Maximaal 60% van het BBP" },
          { en: "Maximum 50% of GDP", es: "Máximo 50% del PIB", de: "Maximal 50% des BIP", nl: "Maximaal 50% van het BBP" },
          { en: "Maximum 70% of GDP", es: "Máximo 70% del PIB", de: "Maximal 70% des BIP", nl: "Maximaal 70% van het BBP" },
          { en: "Maximum 80% of GDP", es: "Máximo 80% del PIB", de: "Maximal 80% des BIP", nl: "Maximaal 80% van het BBP" }
        ],
        correct: 0,
        explanation: {
          en: "The Maastricht Treaty establishes that government debt should not exceed 60% of GDP. This criterion, along with the budget deficit limit of 3% of GDP, forms the fiscal rules for eurozone membership and continues to apply through the Stability and Growth Pact.",
          es: "El Tratado de Maastricht establece que la deuda gubernamental no debe exceder el 60% del PIB. Este criterio, junto con el límite de déficit presupuestario del 3% del PIB, forma las reglas fiscales para la membresía en la eurozona y continúa aplicándose a través del Pacto de Estabilidad y Crecimiento.",
          de: "Der Vertrag von Maastricht legt fest, dass die Staatsverschuldung 60% des BIP nicht überschreiten sollte. Dieses Kriterium bildet zusammen mit der Haushaltsdefizitgrenze von 3% des BIP die Haushaltsregeln für die Eurozone-Mitgliedschaft und gilt weiterhin durch den Stabilitäts- und Wachstumspakt.",
          nl: "Het Verdrag van Maastricht stelt vast dat overheidsschuld niet meer dan 60% van het BBP mag bedragen. Dit criterium vormt samen met de begrotingstekortlimiet van 3% van het BBP de fiscale regels voor eurozone-lidmaatschap en blijft van toepassing via het Stabiliteits- en Groeipact."
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