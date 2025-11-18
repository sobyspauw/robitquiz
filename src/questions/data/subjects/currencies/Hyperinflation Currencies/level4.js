// Quiz Level 4: Currencies - Hyperinflatie valuta (Expert)
(function() {
  const level4 = {
    name: {
      en: "Hyperinflation Currency - Expert",
      es: "Moneda de Hiperinflación - Experto",
      de: "Hyperinflationswährung - Experte",
      nl: "Hyperinflatie Valuta - Expert"
    },
    questions: [
      {
        question: {
          en: "What is the 'fiscal dominance' hypothesis in relation to hyperinflation?",
          es: "¿Qué es la hipótesis de 'dominancia fiscal' en relación con la hiperinflación?",
          de: "Was ist die 'Fiskaldominanz'-Hypothese in Bezug auf Hyperinflation?",
          nl: "Wat is de 'fiscale dominantie' hypothese in relatie tot hyperinflatie?"
        },
        options: [
          { en: "Fiscal policy determines monetary policy outcomes", es: "La política fiscal determina los resultados de la política monetaria", de: "Fiskalpolitik bestimmt die Ergebnisse der Geldpolitik", nl: "Fiscaal beleid bepaalt monetaire beleidsuitkomsten" },
          { en: "Central banks control government spending", es: "Los bancos centrales controlan el gasto gubernamental", de: "Zentralbanken kontrollieren Staatsausgaben", nl: "Centrale banken controleren overheidsuitgaven" },
          { en: "Monetary policy is independent of fiscal concerns", es: "La política monetaria es independiente de las preocupaciones fiscales", de: "Geldpolitik ist unabhängig von fiskalischen Sorgen", nl: "Monetair beleid is onafhankelijk van fiscale zorgen" },
          { en: "Government revenues exceed expenditures", es: "Los ingresos gubernamentales exceden los gastos", de: "Regierungseinnahmen übersteigen Ausgaben", nl: "Overheidsinkomsten overschrijden uitgaven" }
        ],
        correct: 0,
        explanation: {
          en: "Fiscal dominance occurs when unsustainable fiscal deficits force the central bank to monetize government debt, making monetary policy subordinate to fiscal needs and potentially triggering hyperinflation regardless of central bank intentions.",
          es: "La dominancia fiscal ocurre cuando déficits fiscales insostenibles fuerzan al banco central a monetizar la deuda gubernamental, haciendo que la política monetaria sea subordinada a las necesidades fiscales y potencialmente desencadenando hiperinflación independientemente de las intenciones del banco central.",
          de: "Fiskaldominanz tritt auf, wenn unhaltbare Haushaltsdefizite die Zentralbank zwingen, Staatsschulden zu monetarisieren, wodurch die Geldpolitik den fiskalischen Bedürfnissen untergeordnet wird und potenziell Hyperinflation auslöst, unabhängig von den Absichten der Zentralbank.",
          nl: "Fiscale dominantie treedt op wanneer onhoudbare begrotingstekorten de centrale bank dwingen overheidsschuld te monetariseren, waardoor monetair beleid ondergeschikt wordt aan fiscale behoeften en mogelijk hyperinflatie veroorzaakt ongeacht centrale bank intenties."
        }
      },
      {
        question: {
          en: "Which econometric model is specifically designed to analyze hyperinflation dynamics?",
          es: "¿Qué modelo econométrico está específicamente diseñado para analizar las dinámicas de hiperinflación?",
          de: "Welches ökonometrische Modell ist speziell zur Analyse der Hyperinflationsdynamik entwickelt?",
          nl: "Welk econometrisch model is specifiek ontworpen om hyperinflatie dynamiek te analyseren?"
        },
        options: [
          { en: "ARIMA model", es: "Modelo ARIMA", de: "ARIMA-Modell", nl: "ARIMA model" },
          { en: "Cagan's semi-logarithmic model", es: "Modelo semi-logarítmico de Cagan", de: "Cagans semi-logarithmisches Modell", nl: "Cagan's semi-logaritmisch model" },
          { en: "VAR model", es: "Modelo VAR", de: "VAR-Modell", nl: "VAR model" },
          { en: "GARCH model", es: "Modelo GARCH", de: "GARCH-Modell", nl: "GARCH model" }
        ],
        correct: 1,
        explanation: {
          en: "Cagan's semi-logarithmic model (ln(M/P) = α - βπᵉ) was specifically developed to analyze hyperinflation by relating real money balances to expected inflation, capturing the exponential nature of money demand decline during hyperinflation.",
          es: "El modelo semi-logarítmico de Cagan (ln(M/P) = α - βπᵉ) fue específicamente desarrollado para analizar la hiperinflación relacionando saldos reales de dinero con la inflación esperada, capturando la naturaleza exponencial del declive de la demanda de dinero durante la hiperinflación.",
          de: "Cagans semi-logarithmisches Modell (ln(M/P) = α - βπᵉ) wurde speziell zur Analyse der Hyperinflation entwickelt, indem es reale Geldbestände mit erwarteter Inflation verknüpft und die exponentielle Natur des Geldnachfragerückgangs während der Hyperinflation erfasst.",
          nl: "Cagan's semi-logaritmisch model (ln(M/P) = α - βπᵉ) werd specifiek ontwikkeld om hyperinflatie te analyseren door reële geldsaldi te relateren aan verwachte inflatie, waarbij de exponentiële aard van geldvraagdaling tijdens hyperinflatie wordt vastgelegd."
        }
      },
      {
        question: {
          en: "What is the 'flight to quality' phenomenon during hyperinflation crises?",
          es: "¿Qué es el fenómeno de 'huida hacia la calidad' durante las crisis de hiperinflación?",
          de: "Was ist das 'Flight-to-Quality'-Phänomen während Hyperinflationskrisen?",
          nl: "Wat is het 'vlucht naar kwaliteit' fenomeen tijdens hyperinflatie crises?"
        },
        options: [
          { en: "Investors seek domestic government bonds", es: "Los inversores buscan bonos gubernamentales domésticos", de: "Investoren suchen inländische Staatsanleihen", nl: "Investeerders zoeken binnenlandse staatsobligaties" },
          { en: "Capital flows to safe foreign assets and hard currencies", es: "Los flujos de capital van hacia activos extranjeros seguros y monedas fuertes", de: "Kapitalströme zu sicheren ausländischen Vermögenswerten und harten Währungen", nl: "Kapitaalstromen naar veilige buitenlandse activa en harde valuta's" },
          { en: "Investment increases in domestic real estate", es: "La inversión aumenta en bienes raíces domésticos", de: "Investitionen in inländische Immobilien steigen", nl: "Investeringen stijgen in binnenlandse onroerend goed" },
          { en: "Stock market speculation increases", es: "La especulación en el mercado de valores aumenta", de: "Börsenspekulationen nehmen zu", nl: "Aandelenmarkt speculatie neemt toe" }
        ],
        correct: 1,
        explanation: {
          en: "Flight to quality during hyperinflation involves massive capital outflows as investors abandon domestic assets for safe foreign assets (US Treasury bonds, gold, stable foreign currencies), accelerating currency collapse and economic destabilization.",
          es: "La huida hacia la calidad durante la hiperinflación involucra salidas masivas de capital cuando los inversores abandonan activos domésticos por activos extranjeros seguros (bonos del Tesoro de EE.UU., oro, monedas extranjeras estables), acelerando el colapso monetario y la desestabilización económica.",
          de: "Flight-to-Quality während der Hyperinflation beinhaltet massive Kapitalabflüsse, wenn Investoren inländische Vermögenswerte für sichere ausländische Vermögenswerte (US-Staatsanleihen, Gold, stabile ausländische Währungen) aufgeben, was den Währungskollaps und die wirtschaftliche Destabilisierung beschleunigt.",
          nl: "Vlucht naar kwaliteit tijdens hyperinflatie behelst massale kapitaaluitstroom wanneer investeerders binnenlandse activa verlaten voor veilige buitenlandse activa (Amerikaanse staatsobligaties, goud, stabiele buitenlandse valuta's), wat valutainstorting en economische destabilisatie versnelt."
        }
      },
      {
        question: {
          en: "Which balance of payments component is most severely affected during hyperinflation?",
          es: "¿Qué componente de la balanza de pagos se ve más severamente afectado durante la hiperinflación?",
          de: "Welche Komponente der Zahlungsbilanz ist während der Hyperinflation am stärksten betroffen?",
          nl: "Welk onderdeel van de betalingsbalans wordt het zwaarst getroffen tijdens hyperinflatie?"
        },
        options: [
          { en: "Current account", es: "Cuenta corriente", de: "Leistungsbilanz", nl: "Lopende rekening" },
          { en: "Capital and financial account", es: "Cuenta de capital y financiera", de: "Kapital- und Finanzkonto", nl: "Kapitaal- en financiële rekening" },
          { en: "Trade balance", es: "Balanza comercial", de: "Handelsbilanz", nl: "Handelsbalans" },
          { en: "Official reserves", es: "Reservas oficiales", de: "Offizielle Reserven", nl: "Officiële reserves" }
        ],
        correct: 1,
        explanation: {
          en: "The capital and financial account suffers most during hyperinflation due to massive capital flight, as both domestic and foreign investors rapidly move funds out of the country, causing severe balance of payments crises and foreign exchange shortages.",
          es: "La cuenta de capital y financiera sufre más durante la hiperinflación debido a la fuga masiva de capitales, ya que tanto inversores domésticos como extranjeros mueven rápidamente fondos fuera del país, causando severas crisis de balanza de pagos y escasez de divisas.",
          de: "Das Kapital- und Finanzkonto leidet am meisten während der Hyperinflation aufgrund massiver Kapitalflucht, da sowohl inländische als auch ausländische Investoren Gelder schnell aus dem Land bewegen, was schwere Zahlungsbilanzkrisen und Devisenmangel verursacht.",
          nl: "De kapitaal- en financiële rekening lijdt het meest tijdens hyperinflatie door massale kapitaalvlucht, omdat zowel binnenlandse als buitenlandse investeerders snel geld uit het land halen, wat ernstige betalingsbalanscrises en valutatekorten veroorzaakt."
        }
      },
      {
        question: {
          en: "What is the 'peso problem' in the context of hyperinflation analysis?",
          es: "¿Qué es el 'problema del peso' en el contexto del análisis de hiperinflación?",
          de: "Was ist das 'Peso-Problem' im Kontext der Hyperinflationsanalyse?",
          nl: "Wat is het 'peso probleem' in de context van hyperinflatie analyse?"
        },
        options: [
          { en: "Currency overvaluation relative to purchasing power", es: "Sobrevaluación de la moneda relativa al poder adquisitivo", de: "Währungsüberbewertung relativ zur Kaufkraft", nl: "Munt ovenwaardering relatief aan koopkracht" },
          { en: "Small probability of large devaluation affecting expectations", es: "Pequeña probabilidad de gran devaluación afectando expectativas", de: "Geringe Wahrscheinlichkeit großer Abwertung beeinflusst Erwartungen", nl: "Kleine kans op grote devaluatie beïnvloedt verwachtingen" },
          { en: "Lack of foreign currency reserves", es: "Falta de reservas de moneda extranjera", de: "Mangel an Devisenreserven", nl: "Gebrek aan buitenlandse valutareserves" },
          { en: "Excessive money printing by central bank", es: "Impresión excesiva de dinero por el banco central", de: "Exzessives Gelddrucken durch die Zentralbank", nl: "Excessief geld drukken door centrale bank" }
        ],
        correct: 1,
        explanation: {
          en: "The peso problem refers to how a small probability of a large currency devaluation can create persistent deviations from purchasing power parity and affect market expectations, complicating econometric analysis of exchange rate behavior during hyperinflation periods.",
          es: "El problema del peso se refiere a cómo una pequeña probabilidad de una gran devaluación monetaria puede crear desviaciones persistentes de la paridad del poder adquisitivo y afectar las expectativas del mercado, complicando el análisis econométrico del comportamiento del tipo de cambio durante períodos de hiperinflación.",
          de: "Das Peso-Problem bezieht sich darauf, wie eine geringe Wahrscheinlichkeit einer großen Währungsabwertung persistente Abweichungen von der Kaufkraftparität schaffen und Markterwartungen beeinflussen kann, was die ökonometrische Analyse des Wechselkursverhaltens während Hyperinflationsperioden kompliziert.",
          nl: "Het peso probleem verwijst naar hoe een kleine kans op een grote muntdevaluatie persistente afwijkingen van koopkrachtpariteit kan creëren en markt verwachtingen kan beïnvloeden, wat econometrische analyse van wisselkoersgedrag tijdens hyperinflatie periodes compliceert."
        }
      },
      {
        question: {
          en: "Which international financial mechanism was specifically created to address hyperinflation crises?",
          es: "¿Qué mecanismo financiero internacional fue específicamente creado para abordar las crisis de hiperinflación?",
          de: "Welcher internationale Finanzierungsmechanismus wurde speziell zur Bewältigung von Hyperinflationskrisen geschaffen?",
          nl: "Welk internationaal financieel mechanisme werd specifiek gecreëerd om hyperinflatie crises aan te pakken?"
        },
        options: [
          { en: "Extended Fund Facility (EFF)", es: "Mecanismo Ampliado de Financiamiento (EFF)", de: "Erweiterte Finanzierungsfazilität (EFF)", nl: "Uitgebreide Financieringsfaciliteit (EFF)" },
          { en: "Standby Arrangement (SBA)", es: "Acuerdo de Reserva (SBA)", de: "Bereitschaftskredit (SBA)", nl: "Stand-by Arrangement (SBA)" },
          { en: "Structural Adjustment Program (SAP)", es: "Programa de Ajuste Estructural (SAP)", de: "Strukturanpassungsprogramm (SAP)", nl: "Structureel Aanpassingsprogramma (SAP)" },
          { en: "Emergency Financing Mechanism (EFM)", es: "Mecanismo de Financiamiento de Emergencia (EFM)", de: "Notfinanzierungsmechanismus (EFM)", nl: "Noodfinancieringsmechanisme (EFM)" }
        ],
        correct: 0,
        explanation: {
          en: "The IMF's Extended Fund Facility (EFF) was designed specifically for countries facing severe balance of payments problems due to structural issues, including hyperinflation, providing longer-term financing (3-4 years) with more comprehensive conditionality than standard arrangements.",
          es: "El Mecanismo Ampliado de Financiamiento (EFF) del FMI fue diseñado específicamente para países que enfrentan problemas severos de balanza de pagos debido a problemas estructurales, incluyendo hiperinflación, proporcionando financiamiento a largo plazo (3-4 años) con condicionalidad más amplia que los arreglos estándar.",
          de: "Die Erweiterte Finanzierungsfazilität (EFF) des IWF wurde speziell für Länder entwickelt, die schwere Zahlungsbilanzprobleme aufgrund struktureller Probleme, einschließlich Hyperinflation, haben, und bietet längerfristige Finanzierung (3-4 Jahre) mit umfassenderer Konditionalität als Standardvereinbarungen.",
          nl: "De Uitgebreide Financieringsfaciliteit (EFF) van het IMF werd specifiek ontworpen voor landen die ernstige betalingsbalansproblemen hebben door structurele problemen, inclusief hyperinflatie, en biedt langere termijn financiering (3-4 jaar) met meer uitgebreide voorwaarden dan standaard arrangementen."
        }
      },
      {
        question: {
          en: "What is the 'impossible trinity' or 'trilemma' in relation to hyperinflation management?",
          es: "¿Qué es la 'trinidad imposible' o 'trilema' en relación con el manejo de la hiperinflación?",
          de: "Was ist die 'unmögliche Dreifaltigkeit' oder das 'Trilemma' in Bezug auf das Management von Hyperinflation?",
          nl: "Wat is de 'onmogelijke drieeenheid' of 'trilemma' in relatie tot hyperinflatie management?"
        },
        options: [
          { en: "Cannot maintain fixed exchange rate, free capital flows, and independent monetary policy simultaneously", es: "No se puede mantener tipo de cambio fijo, flujos de capital libres y política monetaria independiente simultáneamente", de: "Kann nicht gleichzeitig festen Wechselkurs, freie Kapitalströme und unabhängige Geldpolitik aufrechterhalten", nl: "Kan niet tegelijkertijd vaste wisselkoers, vrije kapitaalstromen en onafhankelijk monetair beleid handhaven" },
          { en: "Cannot control inflation, unemployment, and growth simultaneously", es: "No se puede controlar inflación, desempleo y crecimiento simultáneamente", de: "Kann nicht gleichzeitig Inflation, Arbeitslosigkeit und Wachstum kontrollieren", nl: "Kan niet tegelijkertijd inflatie, werkloosheid en groei controleren" },
          { en: "Cannot maintain fiscal balance, trade balance, and price stability together", es: "No se puede mantener equilibrio fiscal, equilibrio comercial y estabilidad de precios juntos", de: "Kann nicht gleichzeitig Haushaltsgleichgewicht, Handelsgleichgewicht und Preisstabilität aufrechterhalten", nl: "Kan niet tegelijkertijd begrotingsevenwicht, handelsbalans en prijsstabiliteit handhaven" },
          { en: "Cannot achieve full employment, price stability, and external balance concurrently", es: "No se puede lograr pleno empleo, estabilidad de precios y equilibrio externo concurrentemente", de: "Kann nicht gleichzeitig Vollbeschäftigung, Preisstabilität und externes Gleichgewicht erreichen", nl: "Kan niet tegelijkertijd volledige werkgelegenheid, prijsstabiliteit en extern evenwicht bereiken" }
        ],
        correct: 0,
        explanation: {
          en: "The impossible trinity states that a country cannot simultaneously maintain a fixed exchange rate, free capital mobility, and independent monetary policy. During hyperinflation, this constraint forces difficult policy choices about which objective to sacrifice.",
          es: "La trinidad imposible establece que un país no puede mantener simultáneamente un tipo de cambio fijo, movilidad libre de capital y política monetaria independiente. Durante la hiperinflación, esta restricción fuerza decisiones políticas difíciles sobre qué objetivo sacrificar.",
          de: "Die unmögliche Dreifaltigkeit besagt, dass ein Land nicht gleichzeitig einen festen Wechselkurs, freie Kapitalmobilität und unabhängige Geldpolitik aufrechterhalten kann. Während der Hyperinflation zwingt diese Beschränkung zu schwierigen politischen Entscheidungen darüber, welches Ziel geopfert werden soll.",
          nl: "De onmogelijke drieeenheid stelt dat een land niet tegelijkertijd een vaste wisselkoers, vrije kapitaalmobiliteit en onafhankelijk monetair beleid kan handhaven. Tijdens hyperinflatie dwingt deze beperking tot moeilijke beleidskeuzes over welk doel te offeren."
        }
      },
      {
        question: {
          en: "Which advanced stabilization technique involves targeting the growth rate of monetary aggregates?",
          es: "¿Qué técnica avanzada de estabilización involucra apuntar a la tasa de crecimiento de los agregados monetarios?",
          de: "Welche fortgeschrittene Stabilisierungstechnik beinhaltet die Ausrichtung auf die Wachstumsrate monetärer Aggregate?",
          nl: "Welke geavanceerde stabilisatietechniek houdt in dat de groeivoet van monetaire aggregaten wordt beoogd?"
        },
        options: [
          { en: "Inflation targeting", es: "Metas de inflación", de: "Inflationsziel", nl: "Inflatietargeting" },
          { en: "Money growth targeting", es: "Metas de crecimiento monetario", de: "Geldwachstumsziel", nl: "Geldgroei targeting" },
          { en: "Exchange rate targeting", es: "Metas de tipo de cambio", de: "Wechselkursziel", nl: "Wisselkoers targeting" },
          { en: "Interest rate targeting", es: "Metas de tasa de interés", de: "Zinsziel", nl: "Rentetargeting" }
        ],
        correct: 1,
        explanation: {
          en: "Money growth targeting directly controls the expansion of monetary aggregates (M1, M2, M3) to predetermined levels, helping break hyperinflationary spirals by establishing credible limits on money creation and restoring confidence in monetary policy commitment.",
          es: "Las metas de crecimiento monetario controlan directamente la expansión de agregados monetarios (M1, M2, M3) a niveles predeterminados, ayudando a romper espirales hiperinflacionarias estableciendo límites creíbles en la creación de dinero y restaurando confianza en el compromiso de política monetaria.",
          de: "Geldwachstumsziele kontrollieren direkt die Ausweitung monetärer Aggregate (M1, M2, M3) auf vorbestimmte Niveaus, helfen dabei, hyperinflationäre Spiralen zu durchbrechen, indem sie glaubwürdige Grenzen für die Geldschöpfung etablieren und das Vertrauen in das geldpolitische Engagement wiederherstellen.",
          nl: "Geldgroei targeting controleert direct de uitbreiding van monetaire aggregaten (M1, M2, M3) naar vooraf bepaalde niveaus, wat helpt hyperinflatie spiralen te doorbreken door geloofwaardige limieten op geldcreatie vast te stellen en vertrouwen in monetair beleid engagement te herstellen."
        }
      },
      {
        question: {
          en: "What role do 'inflation expectations anchoring' mechanisms play in hyperinflation recovery?",
          es: "¿Qué papel juegan los mecanismos de 'anclaje de expectativas de inflación' en la recuperación de la hiperinflación?",
          de: "Welche Rolle spielen 'Inflationserwartungs-Verankerungsmechanismen' bei der Hyperinflationserholung?",
          nl: "Welke rol spelen 'inflatie verwachtingen verankering' mechanismen in hyperinflatie herstel?"
        },
        options: [
          { en: "They provide backward-looking price references", es: "Proporcionan referencias de precios retrospectivas", de: "Sie bieten rückwärtsgerichtete Preisreferenzen", nl: "Ze bieden achterwaarts kijkende prijsreferenties" },
          { en: "They establish forward-looking credible policy commitments", es: "Establecen compromisos de política creíbles prospectivos", de: "Sie etablieren vorausschauende glaubwürdige Politikzusagen", nl: "Ze vestigen vooruitkijkende geloofwaardige beleidsverplichtingen" },
          { en: "They eliminate all uncertainty about future prices", es: "Eliminan toda incertidumbre sobre precios futuros", de: "Sie beseitigen alle Unsicherheit über zukünftige Preise", nl: "Ze elimineren alle onzekerheid over toekomstige prijzen" },
          { en: "They prevent any price adjustments", es: "Previenen cualquier ajuste de precios", de: "Sie verhindern jegliche Preisanpassungen", nl: "Ze voorkomen alle prijsaanpassingen" }
        ],
        correct: 1,
        explanation: {
          en: "Inflation expectations anchoring establishes credible forward-looking policy commitments that convince economic agents the government will maintain price stability, breaking the self-fulfilling prophecy of hyperinflation and reducing the need for defensive behaviors that fuel inflation.",
          es: "El anclaje de expectativas de inflación establece compromisos de política prospectivos creíbles que convencen a los agentes económicos de que el gobierno mantendrá estabilidad de precios, rompiendo la profecía autocumplida de hiperinflación y reduciendo la necesidad de comportamientos defensivos que alimentan la inflación.",
          de: "Die Verankerung von Inflationserwartungen etabliert glaubwürdige vorausschauende Politikzusagen, die Wirtschaftsakteure davon überzeugen, dass die Regierung Preisstabilität aufrechterhalten wird, wodurch die selbsterfüllende Prophezeiung der Hyperinflation durchbrochen und der Bedarf an defensiven Verhaltensweisen reduziert wird, die Inflation anheizen.",
          nl: "Inflatie verwachtingen verankering vestigt geloofwaardige vooruitkijkende beleidsverplichtingen die economische agenten overtuigen dat de regering prijsstabiliteit zal handhaven, waardoor de zelfvervullende profetie van hyperinflatie wordt doorbroken en de behoefte aan defensief gedrag dat inflatie aanwakkert wordt verminderd."
        }
      },
      {
        question: {
          en: "Which mathematical relationship describes the threshold for hyperinflation sustainability according to modern monetary theory?",
          es: "¿Qué relación matemática describe el umbral para la sostenibilidad de la hiperinflación según la teoría monetaria moderna?",
          de: "Welche mathematische Beziehung beschreibt die Schwelle für Hyperinflationsnachhaltigkeit laut moderner Geldtheorie?",
          nl: "Welke wiskundige relatie beschrijft de drempel voor hyperinflatie duurzaamheid volgens moderne monetaire theorie?"
        },
        options: [
          { en: "Debt-to-GDP ratio exceeds 90%", es: "La relación deuda-PIB excede 90%", de: "Schulden-BIP-Verhältnis übersteigt 90%", nl: "Schuld-BBP verhouding overschrijdt 90%" },
          { en: "Seigniorage revenue equals real interest payments", es: "Los ingresos por señoreaje igualan los pagos reales de intereses", de: "Seigniorage-Einnahmen entsprechen realen Zinszahlungen", nl: "Seigniorage inkomsten gelijk aan reële rentebetalingen" },
          { en: "Money velocity exceeds 10 times per year", es: "La velocidad del dinero excede 10 veces por año", de: "Geldumlaufgeschwindigkeit übersteigt 10-mal pro Jahr", nl: "Geldsnelheid overschrijdt 10 keer per jaar" },
          { en: "Central bank reserves fall below 3 months of imports", es: "Las reservas del banco central caen por debajo de 3 meses de importaciones", de: "Zentralbankreserven fallen unter 3 Monate Importe", nl: "Centrale bank reserves vallen onder 3 maanden import" }
        ],
        correct: 1,
        explanation: {
          en: "The hyperinflation sustainability threshold occurs when seigniorage revenue (money creation profits) equals real interest payments on government debt. Beyond this point, the government must accelerate money printing to meet debt obligations, creating an unsustainable spiral.",
          es: "El umbral de sostenibilidad de hiperinflación ocurre cuando los ingresos por señoreaje (ganancias de creación de dinero) igualan los pagos reales de intereses sobre la deuda gubernamental. Más allá de este punto, el gobierno debe acelerar la impresión de dinero para cumplir obligaciones de deuda, creando una espiral insostenible.",
          de: "Die Hyperinflationsnachhaltigkeitsschwelle tritt auf, wenn Seigniorage-Einnahmen (Geldschöpfungsgewinne) realen Zinszahlungen auf Staatsschulden entsprechen. Jenseits dieses Punktes muss die Regierung das Gelddrucken beschleunigen, um Schuldverpflichtungen zu erfüllen, was eine unhaltbare Spirale schafft.",
          nl: "De hyperinflatie duurzaamheidsdrempel treedt op wanneer seigniorage inkomsten (geldcreatie winsten) gelijk zijn aan reële rentebetalingen op overheidsschuld. Voorbij dit punt moet de regering geld drukken versnellen om schuldverplichtingen na te komen, wat een onhoudbare spiraal creëert."
        }
      },
      {
        question: {
          en: "What is the 'confidence channel' in hyperinflation transmission mechanisms?",
          es: "¿Qué es el 'canal de confianza' en los mecanismos de transmisión de hiperinflación?",
          de: "Was ist der 'Vertrauenskanal' in Hyperinflationsübertragungsmechanismen?",
          nl: "Wat is het 'vertrouwenskanaal' in hyperinflatie transmissiemechanismen?"
        },
        options: [
          { en: "Direct impact of money supply on prices", es: "Impacto directo de la oferta monetaria en los precios", de: "Direkter Einfluss der Geldmenge auf Preise", nl: "Directe impact van geldaanbod op prijzen" },
          { en: "Expectations of future policy actions affect current behavior", es: "Las expectativas de acciones políticas futuras afectan el comportamiento actual", de: "Erwartungen zukünftiger Politikmaßnahmen beeinflussen aktuelles Verhalten", nl: "Verwachtingen van toekomstige beleidsacties beïnvloeden huidig gedrag" },
          { en: "Interest rate changes influence investment decisions", es: "Los cambios en las tasas de interés influyen en las decisiones de inversión", de: "Zinsänderungen beeinflussen Investitionsentscheidungen", nl: "Renteveranderingen beïnvloeden investeringsbeslissingen" },
          { en: "Exchange rate fluctuations affect trade flows", es: "Las fluctuaciones del tipo de cambio afectan los flujos comerciales", de: "Wechselkursschwankungen beeinflussen Handelsströme", nl: "Wisselkoersfluctuaties beïnvloeden handelsstromen" }
        ],
        correct: 1,
        explanation: {
          en: "The confidence channel operates through how economic agents' expectations about future government policy credibility affect their current decisions about spending, saving, and asset holdings, making confidence restoration crucial for stopping hyperinflation even before implementing technical measures.",
          es: "El canal de confianza opera a través de cómo las expectativas de los agentes económicos sobre la credibilidad futura de la política gubernamental afectan sus decisiones actuales sobre gasto, ahorro y tenencias de activos, haciendo que la restauración de confianza sea crucial para detener la hiperinflación incluso antes de implementar medidas técnicas.",
          de: "Der Vertrauenskanal funktioniert dadurch, wie die Erwartungen der Wirtschaftsakteure über die zukünftige Glaubwürdigkeit der Regierungspolitik ihre aktuellen Entscheidungen über Ausgaben, Sparen und Vermögensbestände beeinflussen, wodurch die Wiederherstellung des Vertrauens entscheidend wird, um Hyperinflation zu stoppen, sogar vor der Umsetzung technischer Maßnahmen.",
          nl: "Het vertrouwenskanaal werkt door hoe economische agenten verwachtingen over toekomstige overheidsbeleid geloofwaardigheid hun huidige beslissingen over uitgaven, sparen en activa bezit beïnvloeden, waardoor vertrouwensherstel cruciaal wordt om hyperinflatie te stoppen zelfs voordat technische maatregelen worden geïmplementeerd."
        }
      },
      {
        question: {
          en: "Which sophisticated econometric technique is used to identify structural breaks in hyperinflation time series?",
          es: "¿Qué técnica econométrica sofisticada se usa para identificar quiebres estructurales en series temporales de hiperinflación?",
          de: "Welche anspruchsvolle ökonometrische Technik wird verwendet, um strukturelle Brüche in Hyperinflationszeitreihen zu identifizieren?",
          nl: "Welke geavanceerde econometrische techniek wordt gebruikt om structurele breuken in hyperinflatie tijdreeksen te identificeren?"
        },
        options: [
          { en: "Chow test", es: "Prueba de Chow", de: "Chow-Test", nl: "Chow test" },
          { en: "Granger causality test", es: "Prueba de causalidad de Granger", de: "Granger-Kausalitätstest", nl: "Granger causaliteitstest" },
          { en: "Augmented Dickey-Fuller test", es: "Prueba de Dickey-Fuller aumentada", de: "Erweiterte Dickey-Fuller-Test", nl: "Augmented Dickey-Fuller test" },
          { en: "Johansen cointegration test", es: "Prueba de cointegración de Johansen", de: "Johansen-Kointegrationstest", nl: "Johansen cointegratie test" }
        ],
        correct: 0,
        explanation: {
          en: "The Chow test is specifically designed to detect structural breaks in time series data by testing whether coefficients in a regression model are stable across different time periods, crucial for identifying when hyperinflation begins, peaks, or ends.",
          es: "La prueba de Chow está específicamente diseñada para detectar quiebres estructurales en datos de series temporales probando si los coeficientes en un modelo de regresión son estables a través de diferentes períodos de tiempo, crucial para identificar cuándo la hiperinflación comienza, alcanza su pico o termina.",
          de: "Der Chow-Test ist speziell entwickelt, um strukturelle Brüche in Zeitreihendaten zu erkennen, indem er testet, ob Koeffizienten in einem Regressionsmodell über verschiedene Zeitperioden stabil sind, entscheidend zur Identifizierung, wann Hyperinflation beginnt, ihren Höhepunkt erreicht oder endet.",
          nl: "De Chow test is specifiek ontworpen om structurele breuken in tijdreeksgegevens te detecteren door te testen of coëfficiënten in een regressiemodel stabiel zijn over verschillende tijdsperioden, cruciaal voor het identificeren wanneer hyperinflatie begint, piekt of eindigt."
        }
      },
      {
        question: {
          en: "What is the 'real balance effect' (Pigou effect) during hyperinflation?",
          es: "¿Qué es el 'efecto de saldos reales' (efecto Pigou) durante la hiperinflación?",
          de: "Was ist der 'Realkasseneffekt' (Pigou-Effekt) während der Hyperinflation?",
          nl: "Wat is het 'reële balans effect' (Pigou effect) tijdens hyperinflatie?"
        },
        options: [
          { en: "Rising prices increase real wealth and consumption", es: "El aumento de precios incrementa la riqueza real y el consumo", de: "Steigende Preise erhöhen realen Wohlstand und Konsum", nl: "Stijgende prijzen verhogen reële welvaart en consumptie" },
          { en: "Falling real money balances reduce consumption and aggregate demand", es: "La caída de saldos reales de dinero reduce el consumo y la demanda agregada", de: "Fallende reale Geldbestände reduzieren Konsum und Gesamtnachfrage", nl: "Dalende reële geldsaldi verminderen consumptie en totale vraag" },
          { en: "Interest rates automatically adjust to maintain equilibrium", es: "Las tasas de interés se ajustan automáticamente para mantener el equilibrio", de: "Zinssätze passen sich automatisch an, um Gleichgewicht zu erhalten", nl: "Rentetarieven passen automatisch aan om evenwicht te behouden" },
          { en: "Government spending increases to offset private sector decline", es: "El gasto gubernamental aumenta para compensar la disminución del sector privado", de: "Staatsausgaben steigen, um den Rückgang des Privatsektors auszugleichen", nl: "Overheidsuitgaven stijgen om private sector daling te compenseren" }
        ],
        correct: 1,
        explanation: {
          en: "The real balance effect during hyperinflation describes how rapidly falling real money balances reduce household wealth and purchasing power, leading to decreased consumption and aggregate demand, creating deflationary pressure that can theoretically self-correct hyperinflation if money supply growth stops.",
          es: "El efecto de saldos reales durante la hiperinflación describe cómo la caída rápida de saldos reales de dinero reduce la riqueza de los hogares y el poder adquisitivo, llevando a consumo disminuido y demanda agregada, creando presión deflacionaria que teóricamente puede autocorregir la hiperinflación si el crecimiento de la oferta monetaria se detiene.",
          de: "Der Realkasseneffekt während der Hyperinflation beschreibt, wie schnell fallende reale Geldbestände Haushaltsvermögen und Kaufkraft reduzieren, was zu verringertem Konsum und Gesamtnachfrage führt und deflationären Druck schafft, der theoretisch Hyperinflation selbst korrigieren kann, wenn das Geldmengenwachstum stoppt.",
          nl: "Het reële balans effect tijdens hyperinflatie beschrijft hoe snel dalende reële geldsaldi huishoudelijk vermogen en koopkracht verminderen, leidend tot verminderde consumptie en totale vraag, waardoor deflatoire druk ontstaat die theoretisch hyperinflatie zelf kan corrigeren als geldaanbodgroei stopt."
        }
      },
      {
        question: {
          en: "Which international coordination mechanism helps prevent competitive devaluations during hyperinflation crises?",
          es: "¿Qué mecanismo de coordinación internacional ayuda a prevenir devaluaciones competitivas durante las crisis de hiperinflación?",
          de: "Welcher internationale Koordinationsmechanismus hilft, Wettbewerbsabwertungen während Hyperinflationskrisen zu verhindern?",
          nl: "Welk internationaal coördinatiemechanisme helpt competitieve devaluaties te voorkomen tijdens hyperinflatie crises?"
        },
        options: [
          { en: "Plaza Accord arrangements", es: "Acuerdos del Plaza Accord", de: "Plaza-Abkommen-Vereinbarungen", nl: "Plaza Accord arrangementen" },
          { en: "Bretton Woods system", es: "Sistema de Bretton Woods", de: "Bretton-Woods-System", nl: "Bretton Woods systeem" },
          { en: "IMF Article IV consultations", es: "Consultas del Artículo IV del FMI", de: "IWF-Artikel-IV-Konsultationen", nl: "IMF Artikel IV consultaties" },
          { en: "G7 currency intervention coordination", es: "Coordinación de intervención cambiaria del G7", de: "G7-Währungsinterventionskoordination", nl: "G7 valuta interventie coördinatie" }
        ],
        correct: 2,
        explanation: {
          en: "IMF Article IV consultations provide multilateral surveillance and coordination mechanisms that help prevent competitive devaluations by monitoring exchange rate policies, assessing their global spillover effects, and providing policy recommendations to maintain international monetary stability.",
          es: "Las consultas del Artículo IV del FMI proporcionan mecanismos multilaterales de vigilancia y coordinación que ayudan a prevenir devaluaciones competitivas monitoreando políticas de tipo de cambio, evaluando sus efectos de derrame globales y proporcionando recomendaciones de política para mantener estabilidad monetaria internacional.",
          de: "IWF-Artikel-IV-Konsultationen bieten multilaterale Überwachungs- und Koordinationsmechanismen, die helfen, Wettbewerbsabwertungen zu verhindern, indem sie Wechselkurspolitiken überwachen, ihre globalen Spillover-Effekte bewerten und Politikempfehlungen zur Aufrechterhaltung internationaler Währungsstabilität geben.",
          nl: "IMF Artikel IV consultaties bieden multilaterale toezicht- en coördinatiemechanismen die helpen competitieve devaluaties te voorkomen door wisselkoersbeleid te monitoren, hun mondiale spillover effecten te beoordelen en beleidsaanbevelingen te geven om internationale monetaire stabiliteit te handhaven."
        }
      },
      {
        question: {
          en: "What is the 'monetary overhang' concept in post-hyperinflation reconstruction?",
          es: "¿Qué es el concepto de 'sobrecolgamiento monetario' en la reconstrucción post-hiperinflación?",
          de: "Was ist das Konzept des 'monetären Überhangs' im Wiederaufbau nach der Hyperinflation?",
          nl: "Wat is het 'monetaire overhang' concept in post-hyperinflatie reconstructie?"
        },
        options: [
          { en: "Excess government debt relative to GDP", es: "Deuda gubernamental excesiva relativa al PIB", de: "Exzessive Staatsschulden relativ zum BIP", nl: "Excessieve overheidsschuld relatief aan BBP" },
          { en: "Accumulated liquidity seeking goods in shortage economy", es: "Liquidez acumulada buscando bienes en economía de escasez", de: "Akkumulierte Liquidität sucht Güter in Mangelwirtschaft", nl: "Geaccumuleerde liquiditeit zoekt goederen in schaarste economie" },
          { en: "Foreign currency reserves exceeding domestic needs", es: "Reservas de moneda extranjera excediendo necesidades domésticas", de: "Devisenreserven übersteigen inländische Bedürfnisse", nl: "Buitenlandse valutareserves overschrijden binnenlandse behoeften" },
          { en: "Central bank assets above required levels", es: "Activos del banco central por encima de niveles requeridos", de: "Zentralbankvermögen über erforderlichen Niveaus", nl: "Centrale bank activa boven vereiste niveaus" }
        ],
        correct: 1,
        explanation: {
          en: "Monetary overhang refers to accumulated excess liquidity in the economy that cannot be spent due to goods shortages, typical in post-socialist hyperinflation recovery. When supply normalizes, this overhang can fuel renewed inflation if not properly managed through monetary absorption policies.",
          es: "El sobrecolgamiento monetario se refiere a liquidez excesiva acumulada en la economía que no puede gastarse debido a escasez de bienes, típico en la recuperación de hiperinflación post-socialista. Cuando la oferta se normaliza, este sobrecolgamiento puede alimentar inflación renovada si no se maneja adecuadamente a través de políticas de absorción monetaria.",
          de: "Monetärer Überhang bezieht sich auf akkumulierte überschüssige Liquidität in der Wirtschaft, die aufgrund von Güterknappheit nicht ausgegeben werden kann, typisch in der post-sozialistischen Hyperinflationserholung. Wenn sich das Angebot normalisiert, kann dieser Überhang erneute Inflation anheizen, wenn er nicht ordnungsgemäß durch monetäre Absorptionspolitiken verwaltet wird.",
          nl: "Monetaire overhang verwijst naar geaccumuleerde overtollige liquiditeit in de economie die niet kan worden uitgegeven door goederen tekorten, typisch in post-socialistische hyperinflatie herstel. Wanneer aanbod normaliseert, kan deze overhang hernieuwde inflatie voeden als het niet goed wordt beheerd door monetaire absorptie beleid."
        }
      },
      {
        question: {
          en: "Which advanced macroeconomic model best captures hyperinflation-growth dynamics?",
          es: "¿Qué modelo macroeconómico avanzado captura mejor las dinámicas hiperinflación-crecimiento?",
          de: "Welches fortgeschrittene makroökonomische Modell erfasst am besten Hyperinflation-Wachstumsdynamiken?",
          nl: "Welk geavanceerd macro-economisch model vangt het beste hyperinflatie-groei dynamiek?"
        },
        options: [
          { en: "Mundell-Fleming model", es: "Modelo Mundell-Fleming", de: "Mundell-Fleming-Modell", nl: "Mundell-Fleming model" },
          { en: "Dynamic Stochastic General Equilibrium (DSGE) model", es: "Modelo de Equilibrio General Dinámico Estocástico (DSGE)", de: "Dynamisches Stochastisches Allgemeines Gleichgewichtsmodell (DSGE)", nl: "Dynamisch Stochastisch Algemeen Evenwicht (DSGE) model" },
          { en: "Tobin's q-theory model", es: "Modelo de la teoría q de Tobin", de: "Tobins q-Theorie-Modell", nl: "Tobin's q-theorie model" },
          { en: "Overlapping generations model with money", es: "Modelo de generaciones superpuestas con dinero", de: "Überlappende-Generationen-Modell mit Geld", nl: "Overlappende generaties model met geld" }
        ],
        correct: 3,
        explanation: {
          en: "The overlapping generations model with money best captures hyperinflation-growth dynamics by explicitly modeling how different generations' wealth and consumption decisions interact with monetary policy, showing how hyperinflation can destroy intergenerational wealth transfers and economic growth through portfolio substitution effects.",
          es: "El modelo de generaciones superpuestas con dinero captura mejor las dinámicas hiperinflación-crecimiento modelando explícitamente cómo las decisiones de riqueza y consumo de diferentes generaciones interactúan con la política monetaria, mostrando cómo la hiperinflación puede destruir transferencias de riqueza intergeneracionales y crecimiento económico a través de efectos de sustitución de cartera.",
          de: "Das überlappende-Generationen-Modell mit Geld erfasst am besten Hyperinflation-Wachstumsdynamiken, indem es explizit modelliert, wie verschiedene Generationen Wohlstands- und Konsumentscheidungen mit der Geldpolitik interagieren, und zeigt, wie Hyperinflation intergenerationale Wohlstandsübertragungen und Wirtschaftswachstum durch Portfolio-Substitutionseffekte zerstören kann.",
          nl: "Het overlappende generaties model met geld vangt het beste hyperinflatie-groei dynamiek door expliciet te modelleren hoe verschillende generaties welvaart en consumptie beslissingen interacteren met monetair beleid, tonend hoe hyperinflatie intergenerationele welvaart overdrachten en economische groei kan vernietigen door portefeuille substitutie effecten."
        }
      },
      {
        question: {
          en: "What is the 'credibility revolution' in central banking following hyperinflation experiences?",
          es: "¿Qué es la 'revolución de credibilidad' en la banca central siguiendo experiencias de hiperinflación?",
          de: "Was ist die 'Glaubwürdigkeitsrevolution' im Zentralbankwesen nach Hyperinflationserfahrungen?",
          nl: "Wat is de 'geloofwaardigheidsrevolutie' in centrale bankwezen na hyperinflatie ervaringen?"
        },
        options: [
          { en: "Increased transparency and communication strategies", es: "Estrategias aumentadas de transparencia y comunicación", de: "Erhöhte Transparenz- und Kommunikationsstrategien", nl: "Verhoogde transparantie en communicatie strategieën" },
          { en: "Return to gold standard mechanisms", es: "Retorno a mecanismos del patrón oro", de: "Rückkehr zu Goldstandardmechanismen", nl: "Terugkeer naar goudstandaard mechanismen" },
          { en: "Elimination of central bank independence", es: "Eliminación de la independencia del banco central", de: "Beseitigung der Zentralbankunabhängigkeit", nl: "Eliminatie van centrale bank onafhankelijkheid" },
          { en: "Focus on short-term economic stimulation", es: "Enfoque en estimulación económica de corto plazo", de: "Fokus auf kurzfristige Wirtschaftsstimulation", nl: "Focus op korte termijn economische stimulatie" }
        ],
        correct: 0,
        explanation: {
          en: "The credibility revolution involved central banks adopting increased transparency, forward guidance, and systematic communication strategies to anchor expectations and build public trust, recognizing that credible commitment to price stability is as important as technical policy tools in preventing hyperinflation recurrence.",
          es: "La revolución de credibilidad involucró a los bancos centrales adoptando mayor transparencia, orientación prospectiva y estrategias de comunicación sistemática para anclar expectativas y construir confianza pública, reconociendo que el compromiso creíble con la estabilidad de precios es tan importante como las herramientas técnicas de política para prevenir la recurrencia de hiperinflación.",
          de: "Die Glaubwürdigkeitsrevolution beinhaltete, dass Zentralbanken erhöhte Transparenz, Vorwärtsorientierung und systematische Kommunikationsstrategien adoptierten, um Erwartungen zu verankern und öffentliches Vertrauen aufzubauen, erkennend, dass glaubwürdige Bindung an Preisstabilität genauso wichtig ist wie technische Politikinstrumente zur Verhinderung von Hyperinflationswiederholung.",
          nl: "De geloofwaardigheidsrevolutie behelste centrale banken die verhoogde transparantie, voorwaartse begeleiding en systematische communicatie strategieën adopteerden om verwachtingen te verankeren en publiek vertrouwen op te bouwen, erkennend dat geloofwaardige toewijding aan prijsstabiliteit net zo belangrijk is als technische beleidsinstrumenten in het voorkomen van hyperinflatie herhaling."
        }
      },
      {
        question: {
          en: "Which institutional reform is considered most effective for preventing fiscal dominance that leads to hyperinflation?",
          es: "¿Qué reforma institucional se considera más efectiva para prevenir la dominancia fiscal que lleva a la hiperinflación?",
          de: "Welche institutionelle Reform gilt als am effektivsten zur Verhinderung von Fiskaldominanz, die zu Hyperinflation führt?",
          nl: "Welke institutionele hervorming wordt beschouwd als meest effectief voor het voorkomen van fiscale dominantie die tot hyperinflatie leidt?"
        },
        options: [
          { en: "Constitutional balanced budget requirements", es: "Requisitos constitucionales de presupuesto equilibrado", de: "Verfassungsmäßige Haushalsausgleichsanforderungen", nl: "Constitutionele gebalanceerde begroting vereisten" },
          { en: "Independent fiscal councils with enforcement powers", es: "Consejos fiscales independientes con poderes de cumplimiento", de: "Unabhängige Fiskalräte mit Durchsetzungsbefugnissen", nl: "Onafhankelijke fiscale raden met handhavingsmacht" },
          { en: "Automatic tax increase mechanisms", es: "Mecanismos automáticos de aumento de impuestos", de: "Automatische Steuererhöhungsmechanismen", nl: "Automatische belastingverhoging mechanismen" },
          { en: "Parliamentary spending approval requirements", es: "Requisitos de aprobación parlamentaria de gastos", de: "Parlamentarische Ausgabengenehmigungsanforderungen", nl: "Parlementaire uitgaven goedkeuringsvereisten" }
        ],
        correct: 1,
        explanation: {
          en: "Independent fiscal councils with enforcement powers are most effective because they provide objective fiscal surveillance, can trigger automatic correction mechanisms, and maintain credibility across political cycles, preventing the accumulation of unsustainable deficits that force monetary accommodation and hyperinflation.",
          es: "Los consejos fiscales independientes con poderes de cumplimiento son más efectivos porque proporcionan vigilancia fiscal objetiva, pueden activar mecanismos de corrección automática y mantener credibilidad a través de ciclos políticos, previniendo la acumulación de déficits insostenibles que fuerzan acomodación monetaria e hiperinflación.",
          de: "Unabhängige Fiskalräte mit Durchsetzungsbefugnissen sind am effektivsten, weil sie objektive Fiskalüberwachung bieten, automatische Korrekturmechanismen auslösen können und Glaubwürdigkeit über politische Zyklen hinweg aufrechterhalten, wodurch die Anhäufung unhaltbarer Defizite verhindert wird, die monetäre Akkommodation und Hyperinflation erzwingen.",
          nl: "Onafhankelijke fiscale raden met handhavingsmacht zijn het meest effectief omdat ze objectief fiscaal toezicht bieden, automatische correctiemechanismen kunnen activeren en geloofwaardigheid behouden over politieke cycli, waardoor de ophoping van onhoudbare tekorten wordt voorkomen die monetaire accommodatie en hyperinflatie afdwingen."
        }
      },
      {
        question: {
          en: "What is the 'seigniorage Laffer curve' concept in hyperinflation economics?",
          es: "¿Qué es el concepto de 'curva de Laffer del señoreaje' en economía de hiperinflación?",
          de: "Was ist das Konzept der 'Seigniorage-Laffer-Kurve' in der Hyperinflationsökonomie?",
          nl: "Wat is het 'seigniorage Laffer curve' concept in hyperinflatie economie?"
        },
        options: [
          { en: "Inflation rate beyond which money creation revenues decline", es: "Tasa de inflación más allá de la cual disminuyen los ingresos por creación de dinero", de: "Inflationsrate, jenseits derer Geldschöpfungseinnahmen sinken", nl: "Inflatiepercentage voorbij welke geldcreatie inkomsten dalen" },
          { en: "Tax rate that maximizes government revenue", es: "Tasa impositiva que maximiza los ingresos gubernamentales", de: "Steuersatz, der Staatseinnahmen maximiert", nl: "Belastingtarief dat overheidsinkomsten maximaliseert" },
          { en: "Exchange rate fluctuation band", es: "Banda de fluctuación del tipo de cambio", de: "Wechselkursschwankungsband", nl: "Wisselkoers fluctuatieband" },
          { en: "Interest rate differential between countries", es: "Diferencial de tasas de interés entre países", de: "Zinssatzdifferenz zwischen Ländern", nl: "Renteverschil tussen landen" }
        ],
        correct: 0,
        explanation: {
          en: "The seigniorage Laffer curve shows that government revenue from money creation initially increases with inflation but eventually decreases as hyperinflation destroys the real money base. Beyond the peak, higher inflation paradoxically reduces seigniorage revenues, yet governments often continue printing money, worsening hyperinflation.",
          es: "La curva de Laffer del señoreaje muestra que los ingresos gubernamentales por creación de dinero inicialmente aumentan con la inflación pero eventualmente disminuyen cuando la hiperinflación destruye la base monetaria real. Más allá del pico, mayor inflación paradójicamente reduce ingresos de señoreaje, sin embargo los gobiernos a menudo continúan imprimiendo dinero, empeorando la hiperinflación.",
          de: "Die Seigniorage-Laffer-Kurve zeigt, dass Regierungseinnahmen aus Geldschöpfung zunächst mit Inflation steigen, aber schließlich sinken, wenn Hyperinflation die reale Geldbasis zerstört. Jenseits des Höhepunkts reduziert höhere Inflation paradoxerweise Seigniorage-Einnahmen, doch Regierungen drucken oft weiter Geld, was Hyperinflation verschlimmert.",
          nl: "De seigniorage Laffer curve toont dat overheidsinkomsten uit geldcreatie initieel toenemen met inflatie maar uiteindelijk afnemen wanneer hyperinflatie de reële geldbasis vernietigt. Voorbij de piek vermindert hogere inflatie paradoxaal genoeg seigniorage inkomsten, toch blijven regeringen vaak geld drukken, wat hyperinflatie verergert."
        }
      },
      {
        question: {
          en: "How does the 'real balance effect' mechanism contribute to hyperinflation's self-perpetuation?",
          es: "¿Cómo contribuye el mecanismo del 'efecto de saldo real' a la auto-perpetuación de la hiperinflación?",
          de: "Wie trägt der 'Realkasseneffekt'-Mechanismus zur Selbstverewigung der Hyperinflation bei?",
          nl: "Hoe draagt het 'reële balans effect' mechanisme bij aan hyperinflatie's zelf-perpetuering?"
        },
        options: [
          { en: "Falling real money balances trigger compensatory velocity increases", es: "Saldos monetarios reales decrecientes desencadenan aumentos compensatorios de velocidad", de: "Sinkende Realkassenbestände lösen kompensatorische Geschwindigkeitserhöhungen aus", nl: "Dalende reële geldsaldi veroorzaken compenserende snelheidsstijgingen" },
          { en: "Real interest rates automatically stabilize inflation", es: "Tasas de interés reales estabilizan automáticamente la inflación", de: "Realzinsen stabilisieren automatisch die Inflation", nl: "Reële rentetarieven stabiliseren automatisch inflatie" },
          { en: "Money supply contracts with inflation", es: "Oferta monetaria se contrae con inflación", de: "Geldmenge kontrahiert mit Inflation", nl: "Geldaanbod krimpt met inflatie" },
          { en: "Exchange rates anchor domestic prices", es: "Tipos de cambio anclan precios domésticos", de: "Wechselkurse verankern inländische Preise", nl: "Wisselkoersen verankeren binnenlandse prijzen" }
        ],
        correct: 0,
        explanation: {
          en: "As hyperinflation erodes real money balances, people compensate by accelerating money velocity - spending money faster to avoid inflation losses. This velocity increase amplifies price increases, further eroding real balances and creating a feedback loop that perpetuates hyperinflation even without additional money printing.",
          es: "Cuando la hiperinflación erosiona los saldos monetarios reales, la gente compensa acelerando la velocidad del dinero - gastando dinero más rápido para evitar pérdidas por inflación. Este aumento de velocidad amplifica aumentos de precios, erosionando aún más los saldos reales y creando un bucle de retroalimentación que perpetúa la hiperinflación incluso sin impresión adicional de dinero.",
          de: "Wenn Hyperinflation Realkassenbestände erodiert, kompensieren Menschen dies durch Beschleunigung der Geldumlaufgeschwindigkeit - sie geben Geld schneller aus, um Inflationsverluste zu vermeiden. Diese Geschwindigkeitserhöhung verstärkt Preisanstiege, erodiert Realbestände weiter und schafft eine Rückkopplungsschleife, die Hyperinflation auch ohne zusätzliches Gelddrucken perpetuiert.",
          nl: "Wanneer hyperinflatie reële geldsaldi uitkalt, compenseren mensen dit door geldsnelheid te versnellen - geld sneller uitgeven om inflatieverliezen te vermijden. Deze snelheidsstijging versterkt prijsstijgingen, kalt reële saldi verder uit en creëert een feedbacklus die hyperinflatie perpetueert zelfs zonder additioneel geld drukken."
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