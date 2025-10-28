// Quiz Level 4: Currencies - British Pound (Advanced)
(function() {
  const level4 = {
    name: {
      en: "British Pound - Advanced",
      es: "Libra Esterlina - Avanzado",
      de: "Britisches Pfund - Fortgeschritten",
      nl: "Britse Pond - Gevorderd"
    },
    questions: [
      {
        question: {
          en: "What is the theoretical framework behind the Bank of England's stress testing methodology for systemic risk assessment?",
          es: "¿Cuál es el marco teórico detrás de la metodología de pruebas de estrés del Banco de Inglaterra para evaluación de riesgo sistémico?",
          de: "Was ist der theoretische Rahmen hinter der Stresstesting-Methodologie der Bank of England für systemische Risikobewertung?",
          nl: "Wat is het theoretische kader achter de Bank of England's stresstest methodologie voor systemische risicobeoordeling?"
        },
        options: [
          { en: "Tail risk modeling with conditional Value-at-Risk under extreme scenarios", es: "Modelado de riesgo de cola con Valor en Riesgo condicional bajo escenarios extremos", de: "Tail-Risk-Modellierung mit bedingtem Value-at-Risk unter extremen Szenarien", nl: "Staartrisico modellering met conditionele Value-at-Risk onder extreme scenario's" },
          { en: "Simple historical correlation analysis", es: "Análisis de correlación histórica simple", de: "Einfache historische Korrelationsanalyse", nl: "Eenvoudige historische correlatieanalyse" },
          { en: "Static balance sheet ratio examination", es: "Examen estático de ratios de balance", de: "Statische Bilanzanalyse-Untersuchung", nl: "Statisch balans ratio onderzoek" },
          { en: "Market capitalization weighted assessments", es: "Evaluaciones ponderadas por capitalización de mercado", de: "Marktkapitalisierung-gewichtete Bewertungen", nl: "Marktkapitalisatie gewogen beoordelingen" }
        ],
        correct: 0,
        explanation: {
          en: "The Bank of England's stress testing uses sophisticated tail risk modeling with conditional Value-at-Risk (cVaR) to assess how banks would perform under severe but plausible adverse scenarios. This methodology captures non-linear relationships and extreme correlations that emerge during financial crises, going beyond simple historical analysis to model systemic vulnerabilities.",
          es: "Las pruebas de estrés del Banco de Inglaterra utilizan modelado sofisticado de riesgo de cola con Valor en Riesgo condicional (cVaR) para evaluar cómo se desempeñarían los bancos bajo escenarios adversos severos pero plausibles. Esta metodología captura relaciones no lineales y correlaciones extremas que emergen durante crisis financieras, yendo más allá del análisis histórico simple para modelar vulnerabilidades sistémicas.",
          de: "Die Stresstests der Bank of England verwenden sophisticated Tail-Risk-Modellierung mit bedingtem Value-at-Risk (cVaR), um zu bewerten, wie Banken unter schweren aber plausiblen adversen Szenarien abschneiden würden. Diese Methodologie erfasst nicht-lineare Beziehungen und extreme Korrelationen, die während Finanzkrisen auftreten, und geht über einfache historische Analyse hinaus, um systemische Vulnerabilitäten zu modellieren.",
          nl: "De Bank of England's stresstests gebruiken geavanceerde staartrisico modellering met conditionele Value-at-Risk (cVaR) om te beoordelen hoe banken zouden presteren onder ernstige maar plausibele negatieve scenario's. Deze methodologie vangt niet-lineaire relaties en extreme correlaties die optreden tijdens financiële crises, verder gaand dan eenvoudige historische analyse om systemische kwetsbaarheden te modelleren."
        }
      },
      {
        question: {
          en: "How does the 'Term Funding Scheme' (TFS) operate as a monetary policy transmission mechanism?",
          es: "¿Cómo opera el 'Esquema de Financiamiento a Plazo' (TFS) como mecanismo de transmisión de política monetaria?",
          de: "Wie funktioniert das 'Term Funding Scheme' (TFS) als geldpolitischer Übertragungsmechanismus?",
          nl: "Hoe werkt het 'Term Funding Scheme' (TFS) als monetair beleid transmissiemechanisme?"
        },
        options: [
          { en: "Provides long-term funding to banks at rates close to Bank Rate to enhance credit transmission", es: "Proporciona financiamiento a largo plazo a bancos a tasas cercanas a la Tasa Bancaria para mejorar transmisión crediticia", de: "Bietet langfristige Finanzierung für Banken zu Zinssätzen nahe dem Leitzins zur Verbesserung der Kreditübertragung", nl: "Biedt langetermijnfinanciering aan banken tegen tarieven dicht bij de Bank Rate om krediet transmissie te verbeteren" },
          { en: "Directly purchases corporate bonds in secondary markets", es: "Compra directamente bonos corporativos en mercados secundarios", de: "Kauft direkt Unternehmensanleihen in Sekundärmärkten", nl: "Koopt direct bedrijfsobligaties in secundaire markten" },
          { en: "Sets mandatory lending quotas for commercial banks", es: "Establece cuotas de préstamo obligatorias para bancos comerciales", de: "Setzt obligatorische Kreditquoten für Geschäftsbanken fest", nl: "Stelt verplichte leenquota's vast voor commerciële banken" },
          { en: "Manages foreign exchange intervention operations", es: "Gestiona operaciones de intervención de divisas", de: "Verwaltet Deviseninterventionsoperationen", nl: "Beheert valuta interventie operaties" }
        ],
        correct: 0,
        explanation: {
          en: "The Term Funding Scheme provides banks with long-term funding (typically 4 years) at rates close to Bank Rate, conditional on maintaining or expanding lending to the real economy. This ensures that low policy rates are effectively transmitted to borrowers, particularly when money markets are impaired. The TFS incentivizes banks to lend by offering cheaper funding rates to institutions that expand lending.",
          es: "El Esquema de Financiamiento a Plazo proporciona a los bancos financiamiento a largo plazo (típicamente 4 años) a tasas cercanas a la Tasa Bancaria, condicionado a mantener o expandir préstamos a la economía real. Esto asegura que las tasas de política bajas se transmitan efectivamente a los prestatarios, particularmente cuando los mercados monetarios están deteriorados. El TFS incentiva a los bancos a prestar ofreciendo tasas de financiamiento más baratas a instituciones que expanden préstamos.",
          de: "Das Term Funding Scheme bietet Banken langfristige Finanzierung (typischerweise 4 Jahre) zu Zinssätzen nahe dem Leitzins, bedingt durch die Aufrechterhaltung oder Ausweitung von Krediten an die Realwirtschaft. Dies stellt sicher, dass niedrige Politikzinssätze effektiv an Kreditnehmer übertragen werden, besonders wenn Geldmärkte beeinträchtigt sind. Das TFS incentiviert Banken zum Kreditvergabe, indem es günstigere Finanzierungszinssätze für Institutionen anbietet, die Kredite ausweiten.",
          nl: "Het Term Funding Scheme biedt banken langetermijnfinanciering (typisch 4 jaar) tegen tarieven dicht bij de Bank Rate, voorwaardelijk op het behouden of uitbreiden van leningen aan de reële economie. Dit zorgt ervoor dat lage beleidstarieven effectief worden overgedragen aan leners, vooral wanneer geldmarkten verstoord zijn. Het TFS stimuleert banken om te lenen door goedkopere financieringstarieven aan te bieden aan instellingen die leningen uitbreiden."
        }
      },
      {
        question: {
          en: "What is the 'Funding for Lending Scheme' and how does it differ from quantitative easing in transmission channels?",
          es: "¿Qué es el 'Esquema de Financiamiento para Préstamos' y cómo difiere de la flexibilización cuantitativa en canales de transmisión?",
          de: "Was ist das 'Funding for Lending Scheme' und wie unterscheidet es sich von quantitativer Lockerung in Übertragungskanälen?",
          nl: "Wat is het 'Funding for Lending Scheme' en hoe verschilt het van kwantitatieve versoepeling in transmissiekanalen?"
        },
        options: [
          { en: "Targets bank lending directly rather than portfolio balance effects through asset purchases", es: "Se dirige directamente a préstamos bancarios en lugar de efectos de equilibrio de cartera a través de compras de activos", de: "Zielt direkt auf Bankkredite ab statt auf Portfolio-Balance-Effekte durch Anleihekäufe", nl: "Richt zich direct op bankleningen in plaats van portfolio balans effecten door activaaankopen" },
          { en: "Only affects government bond yields", es: "Solo afecta los rendimientos de bonos gubernamentales", de: "Beeinflusst nur Staatsanleihenrenditen", nl: "Beïnvloedt alleen staatsobligatie rendementen" },
          { en: "Works exclusively through exchange rate channels", es: "Funciona exclusivamente a través de canales de tipo de cambio", de: "Funktioniert ausschließlich über Wechselkurskanäle", nl: "Werkt uitsluitend via wisselkoerskanalen" },
          { en: "Operates identical transmission mechanisms to QE", es: "Opera mecanismos de transmisión idénticos a QE", de: "Betreibt identische Übertragungsmechanismen wie QE", nl: "Hanteert identieke transmissiemechanismen als QE" }
        ],
        correct: 0,
        explanation: {
          en: "The Funding for Lending Scheme (FLS) works by providing cheap, long-term funding to banks and building societies conditional on their lending performance, directly targeting the bank lending channel. This differs from QE, which primarily works through portfolio balance effects, signaling, and wealth effects by purchasing government bonds. FLS aims to repair the credit transmission mechanism when banks face funding pressures, while QE works through broader financial market effects.",
          es: "El Esquema de Financiamiento para Préstamos (FLS) funciona proporcionando financiamiento barato y a largo plazo a bancos y sociedades de construcción condicionado a su desempeño crediticio, dirigiéndose directamente al canal de préstamos bancarios. Esto difiere de QE, que funciona principalmente a través de efectos de equilibrio de cartera, señalización y efectos de riqueza comprando bonos gubernamentales. FLS busca reparar el mecanismo de transmisión crediticia cuando los bancos enfrentan presiones de financiamiento, mientras QE funciona a través de efectos más amplios del mercado financiero.",
          de: "Das Funding for Lending Scheme (FLS) funktioniert, indem es billige, langfristige Finanzierung für Banken und Bausparkassen bereitstellt, bedingt durch ihre Kreditvergabe-Performance, und direkt auf den Bankkreditkanal abzielt. Dies unterscheidet sich von QE, das hauptsächlich durch Portfolio-Balance-Effekte, Signaling und Vermögenseffekte durch den Kauf von Staatsanleihen funktioniert. FLS zielt darauf ab, den Kreditübertragungsmechanismus zu reparieren, wenn Banken Finanzierungsdrücke haben, während QE durch breitere Finanzmarkteffekte funktioniert.",
          nl: "Het Funding for Lending Scheme (FLS) werkt door goedkope, langetermijnfinanciering aan banken en bouwverenigingen te bieden voorwaardelijk op hun leenprestaties, direct gericht op het bankleenkanaal. Dit verschilt van QE, dat primair werkt door portfolio balans effecten, signalering en vermogenseffecten door het kopen van staatsobligaties. FLS heeft tot doel het krediet transmissiemechanisme te herstellen wanneer banken financieringsdruk ondervinden, terwijl QE werkt door bredere financiële markteffecten."
        }
      },
      {
        question: {
          en: "How does the Bank of England's 'Corporate Bond Purchase Scheme' (CBPS) impact credit risk premiums in sterling markets?",
          es: "¿Cómo impacta el 'Esquema de Compra de Bonos Corporativos' (CBPS) del Banco de Inglaterra las primas de riesgo crediticio en mercados de libras esterlinas?",
          de: "Wie beeinflusst das 'Corporate Bond Purchase Scheme' (CBPS) der Bank of England Kreditrisikoprämien in Sterling-Märkten?",
          nl: "Hoe beïnvloedt de Bank of England's 'Corporate Bond Purchase Scheme' (CBPS) kredietrisico premies in sterling markten?"
        },
        options: [
          { en: "Compresses credit spreads through portfolio balance effects and reduces term premiums", es: "Comprime los spreads crediticios a través de efectos de equilibrio de cartera y reduce primas de plazo", de: "Komprimiert Kreditspreads durch Portfolio-Balance-Effekte und reduziert Laufzeitprämien", nl: "Comprimeert krediet spreads door portfolio balans effecten en reduceert looptijd premies" },
          { en: "Only affects government bond markets", es: "Solo afecta mercados de bonos gubernamentales", de: "Beeinflusst nur Staatsanleihenmärkte", nl: "Beïnvloedt alleen staatsobligatie markten" },
          { en: "Increases volatility in corporate bond markets", es: "Aumenta volatilidad en mercados de bonos corporativos", de: "Erhöht Volatilität in Unternehmensanleihenmärkten", nl: "Verhoogt volatiliteit in bedrijfsobligatie markten" },
          { en: "Has no measurable impact on credit conditions", es: "No tiene impacto medible en condiciones crediticias", de: "Hat keinen messbaren Einfluss auf Kreditbedingungen", nl: "Heeft geen meetbare impact op kredietcondities" }
        ],
        correct: 0,
        explanation: {
          en: "The Corporate Bond Purchase Scheme compresses credit spreads by reducing the supply of corporate bonds available to private investors, forcing them into substitute assets and lowering risk premiums. This portfolio balance effect reduces borrowing costs for companies and improves monetary policy transmission. The scheme also signals the Bank's commitment to supporting credit markets, providing confidence effects that further reduce term premiums and credit risk pricing.",
          es: "El Esquema de Compra de Bonos Corporativos comprime los spreads crediticios reduciendo la oferta de bonos corporativos disponibles para inversores privados, forzándolos hacia activos sustitutos y reduciendo primas de riesgo. Este efecto de equilibrio de cartera reduce costos de préstamo para empresas y mejora la transmisión de política monetaria. El esquema también señala el compromiso del Banco de apoyar mercados crediticios, proporcionando efectos de confianza que reducen aún más las primas de plazo y precios de riesgo crediticio.",
          de: "Das Corporate Bond Purchase Scheme komprimiert Kreditspreads, indem es das Angebot von Unternehmensanleihen für private Investoren reduziert, sie in Ersatzanlagen drängt und Risikoprämien senkt. Dieser Portfolio-Balance-Effekt reduziert Kreditkosten für Unternehmen und verbessert die geldpolitische Übertragung. Das Schema signalisiert auch das Engagement der Bank zur Unterstützung von Kreditmärkten und bietet Vertrauenseffekte, die Laufzeitprämien und Kreditrisikopreise weiter reduzieren.",
          nl: "Het Corporate Bond Purchase Scheme comprimeert krediet spreads door het aanbod van bedrijfsobligaties beschikbaar voor private investeerders te verminderen, hen duwend naar vervangbare activa en risicopremies verlagend. Dit portfolio balans effect vermindert leenkosten voor bedrijven en verbetert monetaire beleidstransmissie. Het schema signaleert ook de Bank's toewijding om kredietmarkten te ondersteunen, vertrouwenseffecten biedend die looptijd premies en kredietrisico prijsstelling verder verminderen."
        }
      },
      {
        question: {
          en: "What is the 'Financial Policy Committee's' role in implementing macroprudential policy in the UK?",
          es: "¿Cuál es el papel del 'Comité de Política Financiera' en implementar política macroprudencial en el Reino Unido?",
          de: "Was ist die Rolle des 'Financial Policy Committee' bei der Umsetzung makroprudenzieller Politik im Vereinigten Königreich?",
          nl: "Wat is de rol van het 'Financial Policy Committee' in het implementeren van macroprudentieel beleid in het VK?"
        },
        options: [
          { en: "Identifies systemic risks and deploys tools like countercyclical capital buffers", es: "Identifica riesgos sistémicos y despliega herramientas como amortiguadores de capital contracíclicos", de: "Identifiziert systemische Risiken und setzt Instrumente wie antizyklische Kapitalpuffer ein", nl: "Identificeert systemische risico's en zet instrumenten in zoals anticyclische kapitaalbuffers" },
          { en: "Sets interest rates for monetary policy", es: "Establece tasas de interés para política monetaria", de: "Setzt Zinssätze für Geldpolitik", nl: "Stelt rentetarieven vast voor monetair beleid" },
          { en: "Regulates individual bank capital requirements only", es: "Regula solo requisitos de capital bancario individual", de: "Reguliert nur individuelle Bankkapitalanforderungen", nl: "Reguleert alleen individuele bankkapitaalvereisten" },
          { en: "Manages day-to-day banking supervision", es: "Gestiona supervisión bancaria día a día", de: "Verwaltet tägliche Bankenaufsicht", nl: "Beheert dagelijkse banktoezicht" }
        ],
        correct: 0,
        explanation: {
          en: "The Financial Policy Committee (FPC) is responsible for identifying, monitoring, and taking action to address systemic risks to the UK financial system. It has powers to deploy macroprudential tools including countercyclical capital buffers, sectoral capital requirements, and loan-to-value/debt-to-income limits on mortgages. The FPC operates alongside but separately from the MPC, focusing on financial stability rather than price stability, and can issue directions to regulators to implement its policy decisions.",
          es: "El Comité de Política Financiera (FPC) es responsable de identificar, monitorear y tomar acción para abordar riesgos sistémicos al sistema financiero del Reino Unido. Tiene poderes para desplegar herramientas macroprudenciales incluyendo amortiguadores de capital contracíclicos, requisitos de capital sectoriales y límites de préstamo a valor/deuda a ingreso en hipotecas. El FPC opera junto pero separadamente del MPC, enfocándose en estabilidad financiera en lugar de estabilidad de precios, y puede emitir directivas a reguladores para implementar sus decisiones de política.",
          de: "Das Financial Policy Committee (FPC) ist verantwortlich für die Identifizierung, Überwachung und Ergreifung von Maßnahmen zur Bewältigung systemischer Risiken für das britische Finanzsystem. Es hat Befugnisse zur Einsetzung makroprudenzieller Instrumente einschließlich antizyklischer Kapitalpuffer, sektoraler Kapitalanforderungen und Loan-to-Value/Debt-to-Income-Limits bei Hypotheken. Das FPC arbeitet neben, aber getrennt vom MPC, mit Fokus auf Finanzstabilität statt Preisstabilität, und kann Anweisungen an Regulierer zur Umsetzung seiner Politikentscheidungen ausgeben.",
          nl: "Het Financial Policy Committee (FPC) is verantwoordelijk voor het identificeren, monitoren en actie ondernemen om systemische risico's voor het Britse financiële systeem aan te pakken. Het heeft bevoegdheden om macroprudentiële instrumenten in te zetten waaronder anticyclische kapitaalbuffers, sectorale kapitaalvereisten en loan-to-value/debt-to-income limieten op hypotheken. Het FPC opereert naast maar gescheiden van het MPC, gericht op financiële stabiliteit in plaats van prijsstabiliteit, en kan richtlijnen aan toezichthouders uitgeven om beleidsbeslissingen te implementeren."
        }
      },
      {
        question: {
          en: "How does the 'Sterling Monetary Framework' handle operational implementation of negative interest rates?",
          es: "¿Cómo maneja el 'Marco Monetario de Libras Esterlinas' la implementación operacional de tasas de interés negativas?",
          de: "Wie handhabt das 'Sterling Monetary Framework' die operative Umsetzung negativer Zinssätze?",
          nl: "Hoe handelt het 'Sterling Monetary Framework' de operationele implementatie van negatieve rentetarieven af?"
        },
        options: [
          { en: "Uses tiered reserve system to limit bank cost transmission while maintaining policy effectiveness", es: "Usa sistema de reservas escalonado para limitar transmisión de costos bancarios mientras mantiene efectividad política", de: "Verwendet gestuftes Reservesystem zur Begrenzung von Bankkosten-Übertragung bei Erhaltung der Politikwirksamkeit", nl: "Gebruikt getierd reservesysteem om bankkostentransmissie te beperken terwijl beleidseffectiviteit behouden blijft" },
          { en: "Prohibits negative rates under all circumstances", es: "Prohíbe tasas negativas bajo todas las circunstancias", de: "Verbietet negative Zinssätze unter allen Umständen", nl: "Verbiedt negatieve tarieven onder alle omstandigheden" },
          { en: "Applies uniform negative rates to all bank reserves", es: "Aplica tasas negativas uniformes a todas las reservas bancarias", de: "Wendet einheitliche negative Zinssätze auf alle Bankreserven an", nl: "Past uniforme negatieve tarieven toe op alle bankreserves" },
          { en: "Only affects interbank lending rates", es: "Solo afecta tasas de préstamos interbancarios", de: "Beeinflusst nur Interbankenzinssätze", nl: "Beïnvloedt alleen interbancaire leenrentes" }
        ],
        correct: 0,
        explanation: {
          en: "The Sterling Monetary Framework is designed to implement negative rates through a tiered system that would exempt a portion of bank reserves from negative rates, similar to the European Central Bank's approach. This protects bank profitability while ensuring policy transmission. The framework includes provisions for negative rates on central bank reserves above a certain threshold, maintaining the signaling effect of negative policy rates while limiting adverse effects on bank intermediation and financial stability.",
          es: "El Marco Monetario de Libras Esterlinas está diseñado para implementar tasas negativas a través de un sistema escalonado que eximiría una porción de las reservas bancarias de tasas negativas, similar al enfoque del Banco Central Europeo. Esto protege la rentabilidad bancaria mientras asegura transmisión política. El marco incluye provisiones para tasas negativas en reservas del banco central por encima de cierto umbral, manteniendo el efecto de señalización de tasas políticas negativas mientras limita efectos adversos en intermediación bancaria y estabilidad financiera.",
          de: "Das Sterling Monetary Framework ist darauf ausgelegt, negative Zinssätze durch ein gestuftes System umzusetzen, das einen Teil der Bankreserven von negativen Zinssätzen ausnehmen würde, ähnlich dem Ansatz der Europäischen Zentralbank. Dies schützt die Bankprofitabilität bei gleichzeitiger Gewährleistung der Politikübertragung. Das Framework umfasst Bestimmungen für negative Zinssätze auf Zentralbankreserven oberhalb einer bestimmten Schwelle und erhält den Signaling-Effekt negativer Politikzinssätze bei gleichzeitiger Begrenzung negativer Auswirkungen auf Bankintermediation und Finanzstabilität.",
          nl: "Het Sterling Monetary Framework is ontworpen om negatieve tarieven te implementeren door een getierd systeem dat een deel van bankreserves zou vrijstellen van negatieve tarieven, vergelijkbaar met de Europese Centrale Bank benadering. Dit beschermt bankwinstgevendheid terwijl beleidstransmissie wordt gewaarborgd. Het framework bevat voorzieningen voor negatieve tarieven op centrale bankreserves boven een bepaalde drempel, het signaaleffect van negatieve beleidstarieven behoudend terwijl negatieve effecten op bankintermediation en financiële stabiliteit worden beperkt."
        }
      },
      {
        question: {
          en: "What is the 'Contingent Term Repo Facility' and its role in sterling money market operations?",
          es: "¿Qué es la 'Facilidad de Repo a Plazo Contingente' y su papel en operaciones del mercado monetario de libras esterlinas?",
          de: "Was ist die 'Contingent Term Repo Facility' und ihre Rolle in Sterling-Geldmarktoperationen?",
          nl: "Wat is de 'Contingent Term Repo Facility' en de rol ervan in sterling geldmarkt operaties?"
        },
        options: [
          { en: "Provides backstop liquidity during market stress to maintain monetary policy transmission", es: "Proporciona liquidez de respaldo durante estrés de mercado para mantener transmisión de política monetaria", de: "Bietet Backstop-Liquidität während Marktstress zur Aufrechterhaltung der geldpolitischen Übertragung", nl: "Biedt backstop liquiditeit tijdens marktstress om monetaire beleidstransmissie te behouden" },
          { en: "Conducts regular weekly repo operations", es: "Conduce operaciones repo semanales regulares", de: "Führt regelmäßige wöchentliche Repo-Operationen durch", nl: "Voert reguliere wekelijkse repo operaties uit" },
          { en: "Manages foreign exchange reserves", es: "Gestiona reservas de divisas", de: "Verwaltet Devisenreserven", nl: "Beheert valutareserves" },
          { en: "Sets collateral requirements for commercial banks", es: "Establece requisitos de colateral para bancos comerciales", de: "Setzt Sicherheitenanforderungen für Geschäftsbanken", nl: "Stelt onderpandvereisten vast voor commerciële banken" }
        ],
        correct: 0,
        explanation: {
          en: "The Contingent Term Repo Facility (CTRF) serves as a backstop liquidity provision mechanism that can be activated during periods of market stress when normal money market functioning is impaired. It provides term funding against high-quality collateral to ensure that monetary policy rates are effectively transmitted even when interbank markets are disrupted. The CTRF is designed to be used only when market-based funding is insufficient, helping maintain financial stability while preserving market discipline.",
          es: "La Facilidad de Repo a Plazo Contingente (CTRF) sirve como mecanismo de provisión de liquidez de respaldo que puede activarse durante períodos de estrés de mercado cuando el funcionamiento normal del mercado monetario está deteriorado. Proporciona financiamiento a plazo contra colateral de alta calidad para asegurar que las tasas de política monetaria se transmitan efectivamente incluso cuando los mercados interbancarios están interrumpidos. El CTRF está diseñado para usarse solo cuando el financiamiento basado en mercado es insuficiente, ayudando a mantener estabilidad financiera mientras preserva disciplina de mercado.",
          de: "Die Contingent Term Repo Facility (CTRF) dient als Backstop-Liquiditätsbereitstellungsmechanismus, der während Marktstressperioden aktiviert werden kann, wenn das normale Geldmarktfunktionieren beeinträchtigt ist. Sie bietet Laufzeitfinanzierung gegen hochwertige Sicherheiten, um sicherzustellen, dass geldpolitische Zinssätze effektiv übertragen werden, auch wenn Interbankenmärkte gestört sind. Die CTRF ist darauf ausgelegt, nur verwendet zu werden, wenn marktbasierte Finanzierung unzureichend ist, und hilft, Finanzstabilität zu erhalten bei gleichzeitiger Bewahrung der Marktdisziplin.",
          nl: "De Contingent Term Repo Facility (CTRF) dient als backstop liquiditeitsvoorziening mechanisme dat kan worden geactiveerd tijdens perioden van marktstress wanneer normale geldmarktfunctionering is verstoord. Het biedt termijnfinanciering tegen hoogwaardige onderpand om ervoor te zorgen dat monetaire beleidstarieven effectief worden overgedragen zelfs wanneer interbancaire markten verstoord zijn. De CTRF is ontworpen om alleen gebruikt te worden wanneer marktgebaseerde financiering onvoldoende is, helpend financiële stabiliteit te behouden terwijl marktdiscipline behouden blijft."
        }
      },
      {
        question: {
          en: "How does the 'Indexed Long-Term Repo' operation support the Bank of England's quantitative easing implementation?",
          es: "¿Cómo apoya la operación 'Repo Indexado a Largo Plazo' la implementación de flexibilización cuantitativa del Banco de Inglaterra?",
          de: "Wie unterstützt die 'Indexed Long-Term Repo'-Operation die Quantitative Lockerung-Umsetzung der Bank of England?",
          nl: "Hoe ondersteunt de 'Indexed Long-Term Repo' operatie de Bank of England's kwantitatieve versoepeling implementatie?"
        },
        options: [
          { en: "Provides indexed funding linked to Bank Rate to maintain policy transmission during large balance sheet operations", es: "Proporciona financiamiento indexado vinculado a la Tasa Bancaria para mantener transmisión política durante operaciones de balance grandes", de: "Bietet indexierte Finanzierung gekoppelt an den Leitzins zur Aufrechterhaltung der Politikübertragung während großer Bilanzoperationen", nl: "Biedt geïndexeerde financiering gekoppeld aan de Bank Rate om beleidstransmissie te behouden tijdens grote balansoperaties" },
          { en: "Directly purchases government bonds for QE portfolio", es: "Compra directamente bonos gubernamentales para cartera QE", de: "Kauft direkt Staatsanleihen für QE-Portfolio", nl: "Koopt direct staatsobligaties voor QE portefeuille" },
          { en: "Manages interest payments on reserves", es: "Gestiona pagos de interés sobre reservas", de: "Verwaltet Zinszahlungen auf Reserven", nl: "Beheert rentebetalingen op reserves" },
          { en: "Controls inflation expectations through forward guidance", es: "Controla expectativas de inflación a través de guía prospectiva", de: "Kontrolliert Inflationserwartungen durch Forward Guidance", nl: "Controleert inflatieverwachtingen door forward guidance" }
        ],
        correct: 0,
        explanation: {
          en: "The Indexed Long-Term Repo (ILTR) provides banks with long-term funding at rates indexed to Bank Rate, ensuring that changes in monetary policy are transmitted effectively even when the central bank's balance sheet is expanded through QE. This maintains the link between Bank Rate and funding costs in the banking system, preventing the large stock of reserves created by QE from impairing the transmission of policy rate changes to the real economy.",
          es: "El Repo Indexado a Largo Plazo (ILTR) proporciona a los bancos financiamiento a largo plazo a tasas indexadas a la Tasa Bancaria, asegurando que los cambios en política monetaria se transmitan efectivamente incluso cuando el balance del banco central se expande a través de QE. Esto mantiene el vínculo entre la Tasa Bancaria y costos de financiamiento en el sistema bancario, previniendo que el gran stock de reservas creado por QE deteriore la transmisión de cambios de tasas de política a la economía real.",
          de: "Das Indexed Long-Term Repo (ILTR) bietet Banken langfristige Finanzierung zu Zinssätzen, die an den Leitzins indexiert sind, und stellt sicher, dass Änderungen der Geldpolitik effektiv übertragen werden, auch wenn die Bilanz der Zentralbank durch QE erweitert wird. Dies erhält die Verbindung zwischen Leitzins und Finanzierungskosten im Bankensystem aufrecht und verhindert, dass der große Bestand an Reserven, der durch QE geschaffen wurde, die Übertragung von Politikzinsänderungen an die Realwirtschaft beeinträchtigt.",
          nl: "De Indexed Long-Term Repo (ILTR) biedt banken langetermijnfinanciering tegen tarieven geïndexeerd aan de Bank Rate, ervoor zorgend dat veranderingen in monetair beleid effectief worden overgedragen zelfs wanneer de centrale bank balans wordt uitgebreid door QE. Dit behoudt de link tussen Bank Rate en financieringskosten in het banksysteem, voorkomend dat de grote voorraad reserves gecreëerd door QE de transmissie van beleidstarief veranderingen naar de reële economie verstoort."
        }
      },
      {
        question: {
          en: "What role does the 'Sterling Risk-Free Rate Working Group' play in benchmark rate transition?",
          es: "¿Qué papel juega el 'Grupo de Trabajo de Tasa Libre de Riesgo de Libras Esterlinas' en la transición de tasas de referencia?",
          de: "Welche Rolle spielt die 'Sterling Risk-Free Rate Working Group' beim Benchmark-Zinssatz-Übergang?",
          nl: "Welke rol speelt de 'Sterling Risk-Free Rate Working Group' in benchmark rentetarief transitie?"
        },
        options: [
          { en: "Coordinates transition from LIBOR to SONIA across sterling markets and contracts", es: "Coordina transición de LIBOR a SONIA a través de mercados y contratos de libras esterlinas", de: "Koordiniert Übergang von LIBOR zu SONIA über Sterling-Märkte und -Verträge", nl: "Coördineert transitie van LIBOR naar SONIA over sterling markten en contracten" },
          { en: "Sets daily SONIA rates", es: "Establece tasas SONIA diarias", de: "Setzt tägliche SONIA-Zinssätze", nl: "Stelt dagelijkse SONIA tarieven vast" },
          { en: "Regulates derivatives trading", es: "Regula comercio de derivados", de: "Reguliert Derivatehandel", nl: "Reguleert derivatenhandel" },
          { en: "Manages government bond auctions", es: "Gestiona subastas de bonos gubernamentales", de: "Verwaltet Staatsanleihen-Auktionen", nl: "Beheert staatsobligatie veilingen" }
        ],
        correct: 0,
        explanation: {
          en: "The Sterling Risk-Free Rate Working Group, convened by the Bank of England, coordinates the transition from LIBOR to SONIA (Sterling Overnight Index Average) across sterling markets. It brings together market participants to develop transition plans, identify challenges, and ensure smooth migration of contracts and market practices. The group plays a crucial role in maintaining financial stability during the benchmark transition by providing guidance on contract conversion, fallback provisions, and market adoption of the new risk-free rate.",
          es: "El Grupo de Trabajo de Tasa Libre de Riesgo de Libras Esterlinas, convocado por el Banco de Inglaterra, coordina la transición de LIBOR a SONIA (Promedio del Índice Nocturno de Esterlinas) a través de mercados de libras esterlinas. Reúne participantes del mercado para desarrollar planes de transición, identificar desafíos y asegurar migración suave de contratos y prácticas de mercado. El grupo juega un papel crucial en mantener estabilidad financiera durante la transición de referencia proporcionando guía sobre conversión de contratos, provisiones de respaldo y adopción de mercado de la nueva tasa libre de riesgo.",
          de: "Die Sterling Risk-Free Rate Working Group, einberufen von der Bank of England, koordiniert den Übergang von LIBOR zu SONIA (Sterling Overnight Index Average) über Sterling-Märkte. Sie bringt Marktteilnehmer zusammen, um Übergangspläne zu entwickeln, Herausforderungen zu identifizieren und eine reibungslose Migration von Verträgen und Marktpraktiken sicherzustellen. Die Gruppe spielt eine entscheidende Rolle bei der Aufrechterhaltung der Finanzstabilität während des Benchmark-Übergangs, indem sie Anleitung zur Vertragskonversion, Fallback-Bestimmungen und Marktadoption des neuen risikofreien Zinssatzes bietet.",
          nl: "De Sterling Risk-Free Rate Working Group, bijeengeroepen door de Bank of England, coördineert de transitie van LIBOR naar SONIA (Sterling Overnight Index Average) over sterling markten. Het brengt marktdeelnemers samen om transitieplannen te ontwikkelen, uitdagingen te identificeren en soepele migratie van contracten en marktpraktijken te waarborgen. De groep speelt een cruciale rol in het behouden van financiële stabiliteit tijdens de benchmark transitie door begeleiding te bieden over contractconversie, fallback voorzieningen en marktadoptie van de nieuwe risicovrije rente."
        }
      },
      {
        question: {
          en: "How does the Bank of England's 'Climate Stress Testing' methodology incorporate transition risks into financial stability assessment?",
          es: "¿Cómo incorpora la metodología de 'Pruebas de Estrés Climático' del Banco de Inglaterra riesgos de transición en evaluación de estabilidad financiera?",
          de: "Wie integriert die 'Climate Stress Testing'-Methodologie der Bank of England Übergangsrisiken in die Finanzstabilitätsbewertung?",
          nl: "Hoe incorporeert de Bank of England's 'Climate Stress Testing' methodologie transitierisico's in financiële stabiliteitsbeoordeling?"
        },
        options: [
          { en: "Models economic impacts of climate policy changes on bank portfolios over multiple scenarios", es: "Modela impactos económicos de cambios de política climática en carteras bancarias sobre múltiples escenarios", de: "Modelliert wirtschaftliche Auswirkungen von Klimapolitikänderungen auf Bankportfolios über mehrere Szenarien", nl: "Modelleert economische impacts van klimaatbeleidsveranderingen op bankportefeuilles over meerdere scenario's" },
          { en: "Only assesses physical climate risks", es: "Solo evalúa riesgos climáticos físicos", de: "Bewertet nur physische Klimarisiken", nl: "Beoordeelt alleen fysieke klimaatrisico's" },
          { en: "Focuses exclusively on carbon tax implications", es: "Se enfoca exclusivamente en implicaciones de impuestos al carbono", de: "Fokussiert ausschließlich auf Kohlenstoffsteuer-Implikationen", nl: "Richt zich uitsluitend op koolstofbelasting implicaties" },
          { en: "Examines only real estate exposure to sea level rise", es: "Examina solo exposición inmobiliaria al aumento del nivel del mar", de: "Untersucht nur Immobilienexposition gegenüber Meeresspiegelanstieg", nl: "Onderzoekt alleen vastgoedblootstelling aan zeespiegelstijging" }
        ],
        correct: 0,
        explanation: {
          en: "The Bank of England's Climate Stress Testing incorporates transition risks by modeling how different climate policy scenarios (early/late/no additional action) affect economic sectors and thereby impact bank loan portfolios, trading books, and operational risks. The methodology assesses how rapid decarbonization policies, carbon pricing, and technological transitions could create credit losses, operational challenges, and market risks for financial institutions, going beyond physical climate risks to capture policy-driven economic disruption.",
          es: "Las Pruebas de Estrés Climático del Banco de Inglaterra incorporan riesgos de transición modelando cómo diferentes escenarios de política climática (acción temprana/tardía/sin acción adicional) afectan sectores económicos y por tanto impactan carteras de préstamos bancarios, libros de comercio y riesgos operacionales. La metodología evalúa cómo políticas de descarbonización rápida, precios del carbono y transiciones tecnológicas podrían crear pérdidas crediticias, desafíos operacionales y riesgos de mercado para instituciones financieras, yendo más allá de riesgos climáticos físicos para capturar disrupción económica impulsada por políticas.",
          de: "Das Climate Stress Testing der Bank of England integriert Übergangsrisiken, indem es modelliert, wie verschiedene Klimapolitik-Szenarien (frühe/späte/keine zusätzliche Aktion) Wirtschaftssektoren beeinflussen und dadurch Bankkreditportfolios, Handelsbücher und operative Risiken beeinträchtigen. Die Methodologie bewertet, wie schnelle Dekarbonisierungspolitiken, Kohlenstoffpreise und technologische Übergänge Kreditverluste, operative Herausforderungen und Marktrisiken für Finanzinstitutionen schaffen könnten, über physische Klimarisiken hinausgehend, um politikgesteuerte wirtschaftliche Disruption zu erfassen.",
          nl: "De Bank of England's Climate Stress Testing incorporeert transitierisico's door te modelleren hoe verschillende klimaatbeleid scenario's (vroege/late/geen aanvullende actie) economische sectoren beïnvloeden en daardoor bankleenportefeuilles, handelsboeken en operationele risico's impacteren. De methodologie beoordeelt hoe snelle decarbonisatie beleidsmaatregelen, koolstofprijsstelling en technologische transities kredietverliezen, operationele uitdagingen en marktrisico's voor financiële instellingen zouden kunnen creëren, verder gaand dan fysieke klimaatrisico's om beleidsgedreven economische verstoring vast te leggen."
        }
      },
      {
        question: {
          en: "What is the theoretical foundation of the Bank of England's 'Network Analysis' approach to systemic risk assessment?",
          es: "¿Cuál es la base teórica del enfoque de 'Análisis de Redes' del Banco de Inglaterra para evaluación de riesgo sistémico?",
          de: "Was ist die theoretische Grundlage des 'Network Analysis'-Ansatzes der Bank of England zur systemischen Risikobewertung?",
          nl: "Wat is de theoretische basis van de Bank of England's 'Network Analysis' benadering voor systemische risicobeoordeling?"
        },
        options: [
          { en: "Graph theory and contagion modeling to map interconnectedness and identify systemically important nodes", es: "Teoría de grafos y modelado de contagio para mapear interconexión e identificar nodos sistémicamente importantes", de: "Graphentheorie und Ansteckungsmodellierung zur Kartierung von Vernetzung und Identifizierung systemisch wichtiger Knoten", nl: "Grafentheorie en besmettingsmodellering om onderlinge verbondenheid in kaart te brengen en systemisch belangrijke knooppunten te identificeren" },
          { en: "Simple correlation analysis between asset prices", es: "Análisis de correlación simple entre precios de activos", de: "Einfache Korrelationsanalyse zwischen Vermögenspreisen", nl: "Eenvoudige correlatieanalyse tussen activaprijzen" },
          { en: "Traditional credit risk assessment methodologies", es: "Metodologías tradicionales de evaluación de riesgo crediticio", de: "Traditionelle Kreditrisikobewertungsmethodologien", nl: "Traditionele kredietrisico beoordelingsmethodologieën" },
          { en: "Historical stress testing based on single institution failures", es: "Pruebas de estrés históricas basadas en fallas de instituciones únicas", de: "Historische Stresstests basierend auf Einzelinstitut-Ausfällen", nl: "Historische stresstests gebaseerd op enkele instelling faillissementen" }
        ],
        correct: 0,
        explanation: {
          en: "The Bank of England's Network Analysis approach uses graph theory and contagion modeling to understand how financial institutions are interconnected through lending, derivatives exposures, and other relationships. This methodology identifies systemically important financial institutions (SIFIs) by analyzing network centrality measures, assesses potential contagion pathways, and evaluates how shocks might propagate through the financial system. The approach goes beyond bilateral relationships to capture complex, multi-layered network effects that could amplify systemic risks.",
          es: "El enfoque de Análisis de Redes del Banco de Inglaterra usa teoría de grafos y modelado de contagio para entender cómo las instituciones financieras están interconectadas a través de préstamos, exposiciones de derivados y otras relaciones. Esta metodología identifica instituciones financieras sistémicamente importantes (SIFIs) analizando medidas de centralidad de red, evalúa vías potenciales de contagio y evalúa cómo los shocks podrían propagarse a través del sistema financiero. El enfoque va más allá de relaciones bilaterales para capturar efectos de red complejos y multicapa que podrían amplificar riesgos sistémicos.",
          de: "Der Network Analysis-Ansatz der Bank of England verwendet Graphentheorie und Ansteckungsmodellierung, um zu verstehen, wie Finanzinstitutionen durch Kreditvergabe, Derivat-Exposures und andere Beziehungen miteinander verbunden sind. Diese Methodologie identifiziert systemisch wichtige Finanzinstitutionen (SIFIs), indem sie Netzwerk-Zentralitätsmaße analysiert, potenzielle Ansteckungswege bewertet und evaluiert, wie Schocks sich durch das Finanzsystem ausbreiten könnten. Der Ansatz geht über bilaterale Beziehungen hinaus, um komplexe, mehrschichtige Netzwerkeffekte zu erfassen, die systemische Risiken verstärken könnten.",
          nl: "De Bank of England's Network Analysis benadering gebruikt grafentheorie en besmettingsmodellering om te begrijpen hoe financiële instellingen onderling verbonden zijn door leningen, derivatenblootstellingen en andere relaties. Deze methodologie identificeert systemisch belangrijke financiële instellingen (SIFIs) door netwerk centraliteit metingen te analyseren, beoordeelt potentiële besmettingspaden en evalueert hoe schokken zich zouden kunnen voortplanten door het financiële systeem. De benadering gaat verder dan bilaterale relaties om complexe, meerlagige netwerkeffecten vast te leggen die systemische risico's zouden kunnen versterken."
        }
      },
      {
        question: {
          en: "How does the 'Dynamic Stochastic General Equilibrium' (DSGE) model inform Bank of England monetary policy decisions?",
          es: "¿Cómo informa el modelo de 'Equilibrio General Dinámico Estocástico' (DSGE) las decisiones de política monetaria del Banco de Inglaterra?",
          de: "Wie informiert das 'Dynamic Stochastic General Equilibrium' (DSGE) Modell die geldpolitischen Entscheidungen der Bank of England?",
          nl: "Hoe informeert het 'Dynamic Stochastic General Equilibrium' (DSGE) model de Bank of England monetaire beleidsbeslissingen?"
        },
        options: [
          { en: "Provides microfounded framework for analyzing policy transmission and optimal responses to shocks", es: "Proporciona marco microfundamentado para analizar transmisión política y respuestas óptimas a shocks", de: "Bietet mikrofundiertes Framework zur Analyse von Politikübertragung und optimalen Antworten auf Schocks", nl: "Biedt microgefundeerd kader voor het analyseren van beleidstransmissie en optimale reacties op schokken" },
          { en: "Only forecasts inflation using historical data", es: "Solo pronostica inflación usando datos históricos", de: "Prognostiziert nur Inflation anhand historischer Daten", nl: "Voorspelt alleen inflatie met historische gegevens" },
          { en: "Determines exchange rate policy exclusively", es: "Determina política de tipo de cambio exclusivamente", de: "Bestimmt Wechselkurspolitik ausschließlich", nl: "Bepaalt wisselkoersbeleid uitsluitend" },
          { en: "Focuses solely on labor market dynamics", es: "Se enfoca únicamente en dinámicas del mercado laboral", de: "Fokussiert ausschließlich auf Arbeitsmarktdynamik", nl: "Richt zich uitsluitend op arbeidsmarktdynamiek" }
        ],
        correct: 0,
        explanation: {
          en: "The Bank of England uses DSGE models as part of its monetary policy framework to provide a coherent, microfounded analysis of how the economy responds to various shocks and policy interventions. These models help policymakers understand transmission mechanisms, evaluate optimal policy responses, and conduct counterfactual analysis. The DSGE framework incorporates rational expectations, intertemporal optimization, and market clearing to provide insights into how monetary policy affects inflation, output, and employment through various channels including interest rates, exchange rates, and expectations.",
          es: "El Banco de Inglaterra usa modelos DSGE como parte de su marco de política monetaria para proporcionar un análisis coherente y microfundamentado de cómo la economía responde a varios shocks e intervenciones políticas. Estos modelos ayudan a los formuladores de políticas a entender mecanismos de transmisión, evaluar respuestas políticas óptimas y conducir análisis contrafactual. El marco DSGE incorpora expectativas racionales, optimización intertemporal y equilibrio de mercado para proporcionar insights sobre cómo la política monetaria afecta inflación, producto y empleo a través de varios canales incluyendo tasas de interés, tipos de cambio y expectativas.",
          de: "Die Bank of England nutzt DSGE-Modelle als Teil ihres geldpolitischen Frameworks, um eine kohärente, mikrofundierte Analyse zu bieten, wie die Wirtschaft auf verschiedene Schocks und Politikinterventionen reagiert. Diese Modelle helfen Politikern, Übertragungsmechanismen zu verstehen, optimale Politikantworten zu bewerten und kontrafaktische Analysen durchzuführen. Das DSGE-Framework integriert rationale Erwartungen, intertemporale Optimierung und Markträumung, um Einblicke zu bieten, wie Geldpolitik Inflation, Output und Beschäftigung durch verschiedene Kanäle einschließlich Zinssätzen, Wechselkursen und Erwartungen beeinflusst.",
          nl: "De Bank of England gebruikt DSGE modellen als onderdeel van haar monetaire beleidskader om een coherente, microgefundeerde analyse te bieden van hoe de economie reageert op verschillende schokken en beleidsinterventies. Deze modellen helpen beleidsmakers transmissiemechanismen te begrijpen, optimale beleidsreacties te evalueren en contrafeitelijke analyse uit te voeren. Het DSGE kader incorporeert rationele verwachtingen, intertemporale optimalisatie en marktruiming om inzichten te bieden in hoe monetair beleid inflatie, output en werkgelegenheid beïnvloedt door verschillende kanalen inclusief rentetarieven, wisselkoersen en verwachtingen."
        }
      },
      {
        question: {
          en: "What is the 'Counter-Cyclical Capital Buffer' and how does it interact with monetary policy in the UK framework?",
          es: "¿Qué es el 'Amortiguador de Capital Contracíclico' y cómo interactúa con la política monetaria en el marco del Reino Unido?",
          de: "Was ist der 'Antizyklische Kapitalpuffer' und wie interagiert er mit der Geldpolitik im britischen Framework?",
          nl: "Wat is de 'Anticyclische Kapitaalbuffer' en hoe interacteert het met monetair beleid in het Britse kader?"
        },
        options: [
          { en: "Macroprudential tool that can complement or substitute for monetary policy in addressing credit cycles", es: "Herramienta macroprudencial que puede complementar o sustituir política monetaria al abordar ciclos crediticios", de: "Makroprudenzielles Instrument, das Geldpolitik bei der Bewältigung von Kreditzyklen ergänzen oder ersetzen kann", nl: "Macroprudentieel instrument dat monetair beleid kan aanvullen of vervangen bij het aanpakken van kredietcycli" },
          { en: "Direct component of interest rate setting mechanism", es: "Componente directo del mecanismo de establecimiento de tasas de interés", de: "Direkter Bestandteil des Zinssetzungsmechanismus", nl: "Direct onderdeel van rentetarief vaststelling mechanisme" },
          { en: "Fixed capital requirement that never changes", es: "Requisito de capital fijo que nunca cambia", de: "Feste Kapitalanforderung, die sich nie ändert", nl: "Vaste kapitaalvereiste die nooit verandert" },
          { en: "Tool exclusively for international capital flows", es: "Herramienta exclusivamente para flujos de capital internacional", de: "Instrument ausschließlich für internationale Kapitalströme", nl: "Instrument uitsluitend voor internationale kapitaalstromen" }
        ],
        correct: 0,
        explanation: {
          en: "The Counter-Cyclical Capital Buffer (CCyB) is a macroprudential tool that requires banks to hold additional capital during periods of excessive credit growth, which can be released during downturns to support lending. It interacts with monetary policy by providing an alternative means to address credit cycles - when monetary policy is constrained (e.g., at the zero lower bound) or when tightening rates would have unwanted side effects, the CCyB can be increased to cool credit markets. This separation of tools allows for more targeted policy responses.",
          es: "El Amortiguador de Capital Contracíclico (CCyB) es una herramienta macroprudencial que requiere que los bancos mantengan capital adicional durante períodos de crecimiento crediticio excesivo, que puede liberarse durante recesiones para apoyar préstamos. Interactúa con la política monetaria proporcionando un medio alternativo para abordar ciclos crediticios - cuando la política monetaria está restringida (ej., en el límite inferior cero) o cuando ajustar tasas tendría efectos secundarios no deseados, el CCyB puede aumentarse para enfriar mercados crediticios. Esta separación de herramientas permite respuestas políticas más dirigidas.",
          de: "Der Antizyklische Kapitalpuffer (CCyB) ist ein makroprudenzielles Instrument, das von Banken verlangt, zusätzliches Kapital während Perioden übermäßigen Kreditwachstums zu halten, das während Abschwüngen freigegeben werden kann, um Kreditvergabe zu unterstützen. Er interagiert mit Geldpolitik, indem er alternative Mittel zur Bewältigung von Kreditzyklen bietet - wenn Geldpolitik beschränkt ist (z.B. an der Nulluntergrenze) oder wenn Zinserhöhungen unerwünschte Nebeneffekte hätten, kann der CCyB erhöht werden, um Kreditmärkte abzukühlen. Diese Trennung von Instrumenten ermöglicht gezieltere Politikantworten.",
          nl: "De Anticyclische Kapitaalbuffer (CCyB) is een macroprudentieel instrument dat banken vereist extra kapitaal aan te houden tijdens perioden van excessieve kredietgroei, dat kan worden vrijgegeven tijdens neergang om leningen te ondersteunen. Het interacteert met monetair beleid door een alternatief middel te bieden om kredietcycli aan te pakken - wanneer monetair beleid beperkt is (bijv. aan de nul ondergrens) of wanneer tariefverhogingen ongewenste bijeffecten zouden hebben, kan de CCyB worden verhoogd om kredietmarkten af te koelen. Deze scheiding van instrumenten maakt meer gerichte beleidsreacties mogelijk."
        }
      },
      {
        question: {
          en: "How does the Bank of England's approach to 'Unconventional Monetary Policy' differ from the ECB's in terms of market functioning preservation?",
          es: "¿Cómo difiere el enfoque del Banco de Inglaterra hacia 'Política Monetaria No Convencional' del BCE en términos de preservación del funcionamiento del mercado?",
          de: "Wie unterscheidet sich der Ansatz der Bank of England zur 'Unkonventionellen Geldpolitik' von dem der EZB in Bezug auf die Erhaltung der Marktfunktion?",
          nl: "Hoe verschilt de Bank of England's benadering van 'Onconventioneel Monetair Beleid' van de ECB wat betreft marktfunctionering behoud?"
        },
        options: [
          { en: "Emphasizes market-based price discovery while ECB focuses more on yield curve control", es: "Enfatiza descubrimiento de precios basado en mercado mientras BCE se enfoca más en control de curva de rendimiento", de: "Betont marktbasierte Preisfindung während EZB sich mehr auf Zinskurvenkontrolle konzentriert", nl: "Benadrukt marktgebaseerde prijsontdekking terwijl ECB zich meer richt op opbrengstcurve controle" },
          { en: "Uses identical approaches to asset purchases", es: "Usa enfoques idénticos para compras de activos", de: "Verwendet identische Ansätze für Anleihekäufe", nl: "Gebruikt identieke benaderingen voor activaaankopen" },
          { en: "Only purchases government bonds like the ECB", es: "Solo compra bonos gubernamentales como el BCE", de: "Kauft nur Staatsanleihen wie die EZB", nl: "Koopt alleen staatsobligaties zoals de ECB" },
          { en: "Focuses exclusively on bank lending channels", es: "Se enfoca exclusivamente en canales de préstamos bancarios", de: "Fokussiert ausschließlich auf Bankkreditkanäle", nl: "Richt zich uitsluitend op bankleenkanalen" }
        ],
        correct: 0,
        explanation: {
          en: "The Bank of England's unconventional monetary policy approach emphasizes preserving market-based price discovery mechanisms while providing necessary monetary accommodation. Unlike the ECB's more extensive yield curve intervention and forward guidance on specific rate paths, the BoE tends to allow greater market functioning in price formation while using QE and other tools. The BoE's Corporate Bond Purchase Scheme, for example, aims to restore market functioning rather than suppress yields, and its communication strategy generally avoids committing to specific future rate paths that might impair market price discovery.",
          es: "El enfoque de política monetaria no convencional del Banco de Inglaterra enfatiza preservar mecanismos de descubrimiento de precios basados en mercado mientras proporciona acomodación monetaria necesaria. A diferencia de la intervención más extensa de curva de rendimiento del BCE y guía prospectiva sobre trayectorias específicas de tasas, el BoE tiende a permitir mayor funcionamiento de mercado en formación de precios mientras usa QE y otras herramientas. El Esquema de Compra de Bonos Corporativos del BoE, por ejemplo, busca restaurar funcionamiento de mercado en lugar de suprimir rendimientos, y su estrategia de comunicación generalmente evita comprometerse a trayectorias futuras específicas de tasas que podrían deteriorar descubrimiento de precios de mercado.",
          de: "Der Ansatz der Bank of England zur unkonventionellen Geldpolitik betont die Erhaltung marktbasierter Preisfindungsmechanismen bei gleichzeitiger Bereitstellung notwendiger monetärer Akkommodation. Im Gegensatz zur extensiveren Zinskurvenintervention der EZB und Forward Guidance zu spezifischen Zinspfaden neigt die BoE dazu, größeres Marktfunktionieren in der Preisbildung zu ermöglichen, während sie QE und andere Instrumente nutzt. Das Corporate Bond Purchase Scheme der BoE zielt beispielsweise darauf ab, Marktfunktionieren zu restaurieren statt Renditen zu unterdrücken, und ihre Kommunikationsstrategie vermeidet es generell, sich auf spezifische zukünftige Zinspfade festzulegen, die Marktpreisfindung beeinträchtigen könnten.",
          nl: "De Bank of England's onconventionele monetaire beleidsaanpak benadrukt het behouden van marktgebaseerde prijsontdekkingsmechanismen terwijl noodzakelijke monetaire accommodatie wordt geboden. In tegenstelling tot de ECB's meer uitgebreide opbrengstcurve interventie en forward guidance over specifieke rentepaden, neigt de BoE ertoe groter marktfunctioneren in prijsvorming toe te staan terwijl QE en andere instrumenten worden gebruikt. De BoE's Corporate Bond Purchase Scheme, bijvoorbeeld, heeft tot doel marktfunctioneren te herstellen in plaats van opbrengsten te onderdrukken, en haar communicatiestrategie vermijdt over het algemeen het vastleggen op specifieke toekomstige rentepaden die marktprijsontdekking zouden kunnen schaden."
        }
      },
      {
        question: {
          en: "What is the theoretical basis for the Bank of England's 'Sectoral Capital Requirements' as a macroprudential tool?",
          es: "¿Cuál es la base teórica para los 'Requisitos de Capital Sectoriales' del Banco de Inglaterra como herramienta macroprudencial?",
          de: "Was ist die theoretische Grundlage für die 'Sektoralen Kapitalanforderungen' der Bank of England als makroprudenzielles Instrument?",
          nl: "Wat is de theoretische basis voor de Bank of England's 'Sectorale Kapitaalvereisten' als macroprudentieel instrument?"
        },
        options: [
          { en: "Targeted intervention to address sector-specific bubbles without affecting broader economic activity", es: "Intervención dirigida para abordar burbujas específicas de sector sin afectar actividad económica más amplia", de: "Gezielte Intervention zur Bewältigung sektorspezifischer Blasen ohne Beeinträchtigung breiterer Wirtschaftsaktivität", nl: "Gerichte interventie om sectorspecifieke bubbels aan te pakken zonder bredere economische activiteit te beïnvloeden" },
          { en: "Uniform capital requirements across all sectors", es: "Requisitos de capital uniformes en todos los sectores", de: "Einheitliche Kapitalanforderungen über alle Sektoren", nl: "Uniforme kapitaalvereisten over alle sectoren" },
          { en: "Replacement for monetary policy tools", es: "Reemplazo para herramientas de política monetaria", de: "Ersatz für geldpolitische Instrumente", nl: "Vervanging voor monetaire beleidsinstrumenten" },
          { en: "Focus only on international banking exposures", es: "Enfoque solo en exposiciones bancarias internacionales", de: "Fokus nur auf internationale Bankenexposures", nl: "Focus alleen op internationale bankblootstellingen" }
        ],
        correct: 0,
        explanation: {
          en: "Sectoral Capital Requirements are based on the theory that targeted macroprudential intervention can address sector-specific risks (such as housing bubbles) without the need for broad-based monetary policy tightening that might harm other parts of the economy. This approach recognizes that systemic risks can build up in specific sectors while the overall economy remains stable. By requiring banks to hold additional capital against exposures to particular sectors experiencing rapid credit growth or elevated valuations, regulators can cool specific markets while maintaining supportive monetary conditions elsewhere.",
          es: "Los Requisitos de Capital Sectoriales se basan en la teoría de que la intervención macroprudencial dirigida puede abordar riesgos específicos de sector (como burbujas inmobiliarias) sin necesidad de ajuste amplio de política monetaria que podría dañar otras partes de la economía. Este enfoque reconoce que los riesgos sistémicos pueden acumularse en sectores específicos mientras la economía general permanece estable. Al requerir que los bancos mantengan capital adicional contra exposiciones a sectores particulares que experimentan crecimiento crediticio rápido o valuaciones elevadas, los reguladores pueden enfriar mercados específicos mientras mantienen condiciones monetarias de apoyo en otros lugares.",
          de: "Sektorale Kapitalanforderungen basieren auf der Theorie, dass gezielte makroprudenzielle Intervention sektorspezifische Risiken (wie Immobilienblasen) bewältigen kann, ohne die Notwendigkeit einer breit angelegten geldpolitischen Straffung, die anderen Teilen der Wirtschaft schaden könnte. Dieser Ansatz erkennt an, dass systemische Risiken in spezifischen Sektoren aufbauen können, während die Gesamtwirtschaft stabil bleibt. Indem von Banken verlangt wird, zusätzliches Kapital gegen Exposures zu bestimmten Sektoren zu halten, die schnelles Kreditwachstum oder erhöhte Bewertungen erfahren, können Regulierer spezifische Märkte abkühlen, während sie unterstützende monetäre Bedingungen anderswo aufrechterhalten.",
          nl: "Sectorale Kapitaalvereisten zijn gebaseerd op de theorie dat gerichte macroprudentiële interventie sectorspecifieke risico's (zoals huizenbubbels) kan aanpakken zonder de noodzaak voor brede monetaire beleidsverstrakking die andere delen van de economie zou kunnen schaden. Deze benadering erkent dat systemische risico's kunnen opbouwen in specifieke sectoren terwijl de algehele economie stabiel blijft. Door banken te vereisen extra kapitaal aan te houden tegen blootstellingen aan bepaalde sectoren die snelle kredietgroei of verhoogde waarderingen ervaren, kunnen toezichthouders specifieke markten afkoelen terwijl ondersteunende monetaire condities elders worden behouden."
        }
      },
      {
        question: {
          en: "How does the 'Loan-to-Value' (LTV) ratio tool function within the UK's macroprudential framework?",
          es: "¿Cómo funciona la herramienta de ratio 'Préstamo a Valor' (LTV) dentro del marco macroprudencial del Reino Unido?",
          de: "Wie funktioniert das 'Loan-to-Value' (LTV) Ratio-Instrument innerhalb des britischen makroprudenziellen Frameworks?",
          nl: "Hoe functioneert het 'Loan-to-Value' (LTV) ratio instrument binnen het Britse macroprudentiële kader?"
        },
        options: [
          { en: "Limits high-LTV lending to contain household leverage and housing market risks", es: "Limita préstamos de alto LTV para contener apalancamiento doméstico y riesgos del mercado inmobiliario", de: "Begrenzt High-LTV-Kreditvergabe zur Eindämmung von Haushalts-Leverage und Immobilienmarktrisiken", nl: "Beperkt hoge-LTV leningen om huishoudsolvabiliteit en woningmarktrisico's te beheersen" },
          { en: "Only applies to commercial real estate", es: "Solo se aplica a bienes raíces comerciales", de: "Gilt nur für Gewerbeimmobilien", nl: "Geldt alleen voor commercieel vastgoed" },
          { en: "Sets uniform limits across all types of credit", es: "Establece límites uniformes en todos los tipos de crédito", de: "Setzt einheitliche Limits für alle Kreditarten", nl: "Stelt uniforme limieten vast voor alle kredietsoorten" },
          { en: "Functions as a monetary policy transmission mechanism", es: "Funciona como mecanismo de transmisión de política monetaria", de: "Funktioniert als geldpolitischer Übertragungsmechanismus", nl: "Functioneert als monetair beleid transmissiemechanisme" }
        ],
        correct: 0,
        explanation: {
          en: "The LTV ratio tool allows regulators to limit the proportion of high loan-to-value mortgage lending that lenders can undertake, typically restricting lending above 90% LTV to a certain percentage of new mortgage flow. This macroprudential tool helps contain household leverage and housing market risks by ensuring borrowers have sufficient equity stakes in their properties, reducing both individual default risk and systemic vulnerabilities from housing market corrections. The FPC can adjust these limits based on emerging risks in the housing market.",
          es: "La herramienta de ratio LTV permite a los reguladores limitar la proporción de préstamos hipotecarios de alto préstamo a valor que los prestamistas pueden emprender, típicamente restringiendo préstamos por encima del 90% LTV a cierto porcentaje del flujo hipotecario nuevo. Esta herramienta macroprudencial ayuda a contener apalancamiento doméstico y riesgos del mercado inmobiliario asegurando que los prestatarios tengan participaciones de capital suficientes en sus propiedades, reduciendo tanto riesgo de incumplimiento individual como vulnerabilidades sistémicas de correcciones del mercado inmobiliario. El FPC puede ajustar estos límites basándose en riesgos emergentes en el mercado inmobiliario.",
          de: "Das LTV-Ratio-Instrument ermöglicht es Regulierern, den Anteil der High-Loan-to-Value-Hypothekenkreditvergabe zu begrenzen, den Kreditgeber unternehmen können, typischerweise durch Beschränkung von Krediten über 90% LTV auf einen bestimmten Prozentsatz des neuen Hypothekenstroms. Dieses makroprudenzielle Instrument hilft, Haushalts-Leverage und Immobilienmarktrisiken einzudämmen, indem sichergestellt wird, dass Kreditnehmer ausreichende Eigenkapitalanteile in ihren Immobilien haben, wodurch sowohl individuelles Ausfallrisiko als auch systemische Vulnerabilitäten durch Immobilienmarktkorrekturen reduziert werden. Das FPC kann diese Limits basierend auf aufkommenden Risiken im Immobilienmarkt anpassen.",
          nl: "Het LTV ratio instrument stelt toezichthouders in staat het aandeel van hoge loan-to-value hypotheekverstrekking dat kredietverstrekkers kunnen ondernemen te beperken, typisch door leningen boven 90% LTV te beperken tot een bepaald percentage van nieuwe hypotheekstroom. Dit macroprudentiële instrument helpt huishoudleverage en woningmarktrisico's te beheersen door ervoor te zorgen dat leners voldoende eigen vermogensaandelen in hun eigendommen hebben, zowel individueel wanbetalingsrisico als systemische kwetsbaarheden van woningmarktcorrecties verminderend. Het FPC kan deze limieten aanpassen gebaseerd op opkomende risico's in de woningmarkt."
        }
      },
      {
        question: {
          en: "What is the role of 'Gilt Reference Prices' in the Bank of England's quantitative easing operations?",
          es: "¿Cuál es el papel de los 'Precios de Referencia de Gilts' en las operaciones de flexibilización cuantitativa del Banco de Inglaterra?",
          de: "Was ist die Rolle der 'Gilt Reference Prices' in den quantitativen Lockerungsoperationen der Bank of England?",
          nl: "Wat is de rol van 'Gilt Reference Prices' in de Bank of England's kwantitatieve versoepeling operaties?"
        },
        options: [
          { en: "Establishes fair value benchmarks to prevent market manipulation during large-scale asset purchases", es: "Establece referencias de valor justo para prevenir manipulación de mercado durante compras de activos a gran escala", de: "Etabliert Fair-Value-Benchmarks zur Verhinderung von Marktmanipulation während großangelegter Anleihekäufe", nl: "Vestigt eerlijke waarde benchmarks om marktmanipulatie te voorkomen tijdens grootschalige activaaankopen" },
          { en: "Determines the Bank Rate directly", es: "Determina la Tasa Bancaria directamente", de: "Bestimmt den Leitzins direkt", nl: "Bepaalt de Bank Rate direct" },
          { en: "Sets inflation targets", es: "Establece objetivos de inflación", de: "Setzt Inflationsziele", nl: "Stelt inflatiedoelen vast" },
          { en: "Only applies to corporate bond purchases", es: "Solo se aplica a compras de bonos corporativos", de: "Gilt nur für Unternehmensanleihekäufe", nl: "Geldt alleen voor bedrijfsobligatie aankopen" }
        ],
        correct: 0,
        explanation: {
          en: "Gilt Reference Prices serve as fair value benchmarks during the Bank of England's quantitative easing operations to ensure transparent and fair pricing in large-scale government bond purchases. These reference prices help prevent market manipulation by providing objective pricing standards and ensure that the Bank's purchases do not artificially distort gilt yields beyond the intended policy effect. The system helps maintain market integrity while achieving the portfolio balance effects necessary for effective QE transmission.",
          es: "Los Precios de Referencia de Gilts sirven como referencias de valor justo durante las operaciones de flexibilización cuantitativa del Banco de Inglaterra para asegurar precios transparentes y justos en compras de bonos gubernamentales a gran escala. Estos precios de referencia ayudan a prevenir manipulación de mercado proporcionando estándares de precios objetivos y aseguran que las compras del Banco no distorsionen artificialmente los rendimientos de gilts más allá del efecto político pretendido. El sistema ayuda a mantener integridad de mercado mientras logra los efectos de equilibrio de cartera necesarios para transmisión QE efectiva.",
          de: "Gilt Reference Prices dienen als Fair-Value-Benchmarks während der quantitativen Lockerungsoperationen der Bank of England, um transparente und faire Preisgestaltung bei großangelegten Staatsanleihekäufen sicherzustellen. Diese Referenzpreise helfen Marktmanipulation zu verhindern, indem sie objektive Preisstandards bieten und sicherstellen, dass die Käufe der Bank Gilt-Renditen nicht künstlich über den beabsichtigten Politikeffekt hinaus verzerren. Das System hilft Marktintegrität aufrechtzuerhalten, während die für effektive QE-Übertragung notwendigen Portfolio-Balance-Effekte erreicht werden.",
          nl: "Gilt Reference Prices dienen als eerlijke waarde benchmarks tijdens de Bank of England's kwantitatieve versoepeling operaties om transparante en eerlijke prijsstelling in grootschalige staatsobligatie aankopen te waarborgen. Deze referentieprijzen helpen marktmanipulatie te voorkomen door objectieve prijsstandaarden te bieden en zorgen ervoor dat de Bank's aankopen gilt opbrengsten niet kunstmatig vervormen voorbij het beoogde beleidseffect. Het systeem helpt marktintegriteit te behouden terwijl de portfolio balans effecten noodzakelijk voor effectieve QE transmissie worden bereikt."
        }
      },
      {
        question: {
          en: "How does the 'Financial Stability Strategy' integrate climate risks into the UK's overall monetary and financial policy framework?",
          es: "¿Cómo integra la 'Estrategia de Estabilidad Financiera' riesgos climáticos en el marco general de política monetaria y financiera del Reino Unido?",
          de: "Wie integriert die 'Financial Stability Strategy' Klimarisiken in das gesamte Geld- und Finanzpolitik-Framework des Vereinigten Königreichs?",
          nl: "Hoe integreert de 'Financial Stability Strategy' klimaatrisico's in het algehele monetaire en financiële beleidskader van het VK?"
        },
        options: [
          { en: "Incorporates climate stress testing and disclosure requirements as systemic risk management tools", es: "Incorpora pruebas de estrés climático y requisitos de divulgación como herramientas de gestión de riesgo sistémico", de: "Integriert Klimastresstests und Offenlegungsanforderungen als systemische Risikomanagement-Instrumente", nl: "Incorporeert klimaat stresstests en openbaarmakingsvereisten als systemische risicobeheer instrumenten" },
          { en: "Only focuses on traditional financial risks", es: "Solo se enfoca en riesgos financieros tradicionales", de: "Fokussiert nur auf traditionelle Finanzrisiken", nl: "Richt zich alleen op traditionele financiële risico's" },
          { en: "Excludes environmental considerations from policy", es: "Excluye consideraciones ambientales de la política", de: "Schließt Umweltüberlegungen von der Politik aus", nl: "Sluit milieuoverwegingen uit van beleid" },
          { en: "Addresses climate risks only through carbon pricing", es: "Aborda riesgos climáticos solo a través de precios de carbono", de: "Bewältigt Klimarisiken nur durch Kohlenstoffpreise", nl: "Pakt klimaatrisico's alleen aan door koolstofprijsstelling" }
        ],
        correct: 0,
        explanation: {
          en: "The Financial Stability Strategy integrates climate risks by recognizing them as sources of systemic financial risk that require dedicated monitoring and policy responses. This includes mandatory climate stress testing for banks and insurers, enhanced disclosure requirements through the Task Force on Climate-related Financial Disclosures (TCFD), and consideration of climate risks in macroprudential policy decisions. The approach recognizes that both physical risks (extreme weather) and transition risks (policy changes toward net zero) can create systemic vulnerabilities requiring proactive financial sector preparation.",
          es: "La Estrategia de Estabilidad Financiera integra riesgos climáticos reconociéndolos como fuentes de riesgo financiero sistémico que requieren monitoreo dedicado y respuestas políticas. Esto incluye pruebas de estrés climático obligatorias para bancos y aseguradoras, requisitos de divulgación mejorados a través del Grupo de Trabajo sobre Divulgaciones Financieras Relacionadas con el Clima (TCFD), y consideración de riesgos climáticos en decisiones de política macroprudencial. El enfoque reconoce que tanto riesgos físicos (clima extremo) como riesgos de transición (cambios políticos hacia cero neto) pueden crear vulnerabilidades sistémicas que requieren preparación proactiva del sector financiero.",
          de: "Die Financial Stability Strategy integriert Klimarisiken, indem sie diese als Quellen systemischer Finanzrisiken anerkennt, die dediziertes Monitoring und Politikantworten erfordern. Dies umfasst obligatorische Klimastresstests für Banken und Versicherer, verbesserte Offenlegungsanforderungen durch die Task Force on Climate-related Financial Disclosures (TCFD) und Berücksichtigung von Klimarisiken in makroprudenziellen Politikentscheidungen. Der Ansatz erkennt an, dass sowohl physische Risiken (extremes Wetter) als auch Übergangsrisiken (Politikänderungen in Richtung Netto-Null) systemische Vulnerabilitäten schaffen können, die proaktive Finanzsektor-Vorbereitung erfordern.",
          nl: "De Financial Stability Strategy integreert klimaatrisico's door ze te erkennen als bronnen van systemisch financieel risico die toegewijde monitoring en beleidsreacties vereisen. Dit omvat verplichte klimaat stresstests voor banken en verzekeraars, verbeterde openbaarmakingsvereisten door de Task Force on Climate-related Financial Disclosures (TCFD), en overweging van klimaatrisico's in macroprudentiële beleidsbeslissingen. De benadering erkent dat zowel fysieke risico's (extreem weer) als transitierisico's (beleidsveranderingen naar netto nul) systemische kwetsbaarheden kunnen creëren die proactieve financiële sector voorbereiding vereisen."
        }
      },
      {
        question: {
          en: "What is the 'Systemic Risk Buffer' and how does it differ from other capital requirements in the UK framework?",
          es: "¿Qué es el 'Amortiguador de Riesgo Sistémico' y cómo difiere de otros requisitos de capital en el marco del Reino Unido?",
          de: "Was ist der 'Systemische Risiko Puffer' und wie unterscheidet er sich von anderen Kapitalanforderungen im britischen Framework?",
          nl: "Wat is de 'Systemische Risico Buffer' en hoe verschilt het van andere kapitaalvereisten in het Britse kader?"
        },
        options: [
          { en: "Institution-specific buffer for systemically important financial institutions based on their individual risk profile", es: "Amortiguador específico de institución para instituciones financieras sistémicamente importantes basado en su perfil de riesgo individual", de: "Institutsspezifischer Puffer für systemisch wichtige Finanzinstitutionen basierend auf ihrem individuellen Risikoprofil", nl: "Instelling-specifieke buffer voor systemisch belangrijke financiële instellingen gebaseerd op hun individuele risicoprofiel" },
          { en: "Uniform buffer applied equally to all banks", es: "Amortiguador uniforme aplicado igualmente a todos los bancos", de: "Einheitlicher Puffer, der gleichermaßen auf alle Banken angewendet wird", nl: "Uniforme buffer gelijk toegepast op alle banken" },
          { en: "Buffer only for international operations", es: "Amortiguador solo para operaciones internacionales", de: "Puffer nur für internationale Operationen", nl: "Buffer alleen voor internationale operaties" },
          { en: "Temporary crisis response measure", es: "Medida temporal de respuesta a crisis", de: "Temporäre Krisenreaktionsmaßnahme", nl: "Tijdelijke crisisreactie maatregel" }
        ],
        correct: 0,
        explanation: {
          en: "The Systemic Risk Buffer (SRB) is an institution-specific capital requirement applied to systemically important financial institutions (SIFIs) based on their individual contribution to systemic risk. Unlike the Counter-Cyclical Capital Buffer which varies with economic cycles and applies broadly, the SRB is tailored to each institution's systemic footprint, considering factors like size, interconnectedness, complexity, and substitutability. This targeted approach ensures that institutions whose failure would pose the greatest threat to financial stability hold additional capital proportionate to their systemic importance.",
          es: "El Amortiguador de Riesgo Sistémico (SRB) es un requisito de capital específico de institución aplicado a instituciones financieras sistémicamente importantes (SIFIs) basado en su contribución individual al riesgo sistémico. A diferencia del Amortiguador de Capital Contracíclico que varía con ciclos económicos y se aplica ampliamente, el SRB se adapta a la huella sistémica de cada institución, considerando factores como tamaño, interconexión, complejidad y sustituibilidad. Este enfoque dirigido asegura que las instituciones cuyo fracaso representaría la mayor amenaza a la estabilidad financiera mantengan capital adicional proporcional a su importancia sistémica.",
          de: "Der Systemische Risiko Puffer (SRB) ist eine institutsspezifische Kapitalanforderung, die auf systemisch wichtige Finanzinstitutionen (SIFIs) basierend auf ihrem individuellen Beitrag zum systemischen Risiko angewendet wird. Anders als der Antizyklische Kapitalpuffer, der mit Wirtschaftszyklen variiert und breit angewendet wird, ist der SRB auf den systemischen Fußabdruck jeder Institution zugeschnitten und berücksichtigt Faktoren wie Größe, Vernetzung, Komplexität und Ersetzbarkeit. Dieser gezielte Ansatz stellt sicher, dass Institutionen, deren Ausfall die größte Bedrohung für die Finanzstabilität darstellen würde, zusätzliches Kapital proportional zu ihrer systemischen Bedeutung halten.",
          nl: "De Systemische Risico Buffer (SRB) is een instelling-specifieke kapitaalvereiste toegepast op systemisch belangrijke financiële instellingen (SIFIs) gebaseerd op hun individuele bijdrage aan systemisch risico. Anders dan de Anticyclische Kapitaalbuffer die varieert met economische cycli en breed wordt toegepast, is de SRB toegesneden op elke instelling's systemische voetafdruk, factoren overwegende zoals grootte, onderlinge verbondenheid, complexiteit en vervangbaarheid. Deze gerichte benadering zorgt ervoor dat instellingen wier faillissement de grootste bedreiging voor financiële stabiliteit zou vormen extra kapitaal aanhouden evenredig aan hun systemische belang."
        }
      },
      {
        question: {
          en: "How does the 'Bank Recovery and Resolution Directive' implementation affect the Bank of England's financial stability mandate?",
          es: "¿Cómo afecta la implementación de la 'Directiva de Recuperación y Resolución Bancaria' el mandato de estabilidad financiera del Banco de Inglaterra?",
          de: "Wie beeinflusst die Umsetzung der 'Bank Recovery and Resolution Directive' das Finanzstabilitätsmandat der Bank of England?",
          nl: "Hoe beïnvloedt de implementatie van de 'Bank Recovery and Resolution Directive' het financiële stabiliteitsmandaat van de Bank of England?"
        },
        options: [
          { en: "Provides resolution tools to manage bank failures without taxpayer bailouts while maintaining financial stability", es: "Proporciona herramientas de resolución para gestionar fallas bancarias sin rescates de contribuyentes mientras mantiene estabilidad financiera", de: "Bietet Abwicklungsinstrumente zur Verwaltung von Bankausfällen ohne Steuerzahler-Rettungen bei Aufrechterhaltung der Finanzstabilität", nl: "Biedt resolutie instrumenten om bankfaillissementen te beheren zonder belastingbetaler reddingsoperaties terwijl financiële stabiliteit behouden blijft" },
          { en: "Eliminates the Bank's role in bank supervision", es: "Elimina el papel del Banco en supervisión bancaria", de: "Eliminiert die Rolle der Bank in der Bankenaufsicht", nl: "Elimineert de Bank's rol in banktoezicht" },
          { en: "Only affects international banks", es: "Solo afecta bancos internacionales", de: "Betrifft nur internationale Banken", nl: "Beïnvloedt alleen internationale banken" },
          { en: "Requires automatic bailouts for all failing banks", es: "Requiere rescates automáticos para todos los bancos en quiebra", de: "Erfordert automatische Rettungen für alle ausfallenden Banken", nl: "Vereist automatische reddingsoperaties voor alle falende banken" }
        ],
        correct: 0,
        explanation: {
          en: "The Bank Recovery and Resolution Directive (BRRD) implementation provides the Bank of England with enhanced resolution tools to manage failing banks in an orderly way without requiring taxpayer bailouts. These tools include bail-in powers, bridge institutions, asset separation, and sale of business tools. This strengthens the Bank's financial stability mandate by ensuring that bank failures can be managed in a way that maintains critical economic functions, protects depositors, and minimizes contagion risks while imposing losses on shareholders and creditors rather than taxpayers.",
          es: "La implementación de la Directiva de Recuperación y Resolución Bancaria (BRRD) proporciona al Banco de Inglaterra herramientas de resolución mejoradas para gestionar bancos en quiebra de manera ordenada sin requerir rescates de contribuyentes. Estas herramientas incluyen poderes de bail-in, instituciones puente, separación de activos y herramientas de venta de negocios. Esto fortalece el mandato de estabilidad financiera del Banco asegurando que las fallas bancarias puedan gestionarse de manera que mantenga funciones económicas críticas, proteja depositantes y minimice riesgos de contagio mientras impone pérdidas a accionistas y acreedores en lugar de contribuyentes.",
          de: "Die Umsetzung der Bank Recovery and Resolution Directive (BRRD) bietet der Bank of England verbesserte Abwicklungsinstrumente zur ordnungsgemäßen Verwaltung ausfallender Banken ohne erforderliche Steuerzahler-Rettungen. Diese Instrumente umfassen Bail-in-Befugnisse, Brückeninstitutionen, Vermögenstrennung und Geschäftsverkaufs-Tools. Dies stärkt das Finanzstabilitätsmandat der Bank, indem sichergestellt wird, dass Bankausfälle so verwaltet werden können, dass kritische wirtschaftliche Funktionen aufrechterhalten, Einleger geschützt und Ansteckungsrisiken minimiert werden, während Verluste Aktionären und Gläubigern statt Steuerzahlern auferlegt werden.",
          nl: "De implementatie van de Bank Recovery and Resolution Directive (BRRD) biedt de Bank of England verbeterde resolutie instrumenten om falende banken op ordelijke wijze te beheren zonder belastingbetaler reddingsoperaties te vereisen. Deze instrumenten omvatten bail-in bevoegdheden, bruginstelling, activascheiding en bedrijfsverkoop instrumenten. Dit versterkt de Bank's financiële stabiliteitsmandaat door ervoor te zorgen dat bankfaillissementen kunnen worden beheerd op een manier die kritieke economische functies behoudt, deposanten beschermt en besmettingsrisico's minimaliseert terwijl verliezen worden opgelegd aan aandeelhouders en crediteuren in plaats van belastingbetalers."
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