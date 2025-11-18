// Quiz Level 9: Currencies - Euro (Expert+)
(function() {
  const level9 = {
    name: {
      en: "Euro Currency - Expert+",
      es: "Moneda Euro - Experto+",
      de: "Euro-Währung - Experte+",
      nl: "Euro Munt - Expert+"
    },
    questions: [
      {
        question: {
          en: "What was the theoretical rationale behind the choice of bilateral central rates in the European Monetary System's Exchange Rate Mechanism (ERM) prior to euro adoption?",
          es: "¿Cuál fue la justificación teórica detrás de la elección de tasas centrales bilaterales en el Mecanismo de Tipo de Cambio (ERM) del Sistema Monetario Europeo antes de la adopción del euro?",
          de: "Was war die theoretische Begründung für die Wahl bilateraler Zentralkurse im Wechselkursmechanismus (WKM) des Europäischen Währungssystems vor der Euro-Einführung?",
          nl: "Wat was de theoretische redenering achter de keuze van bilaterale centrale koersen in het Wisselkoersmechanisme (WKM) van het Europese Monetaire Systeem voorafgaand aan euro-adoptie?"
        },
        options: [
          { en: "Purchasing power parity adjustments based on fundamental equilibrium exchange rates reflecting underlying economic competitiveness", es: "Ajustes de paridad de poder adquisitivo basados en tipos de cambio de equilibrio fundamental que reflejan competitividad económica subyacente", de: "Kaufkraftparitätsanpassungen basierend auf fundamentalen Gleichgewichtswechselkursen, die die zugrundeliegende wirtschaftliche Wettbewerbsfähigkeit widerspiegeln", nl: "Koopkrachtpariteitsaanpassingen gebaseerd op fundamentele evenwichtswisselkoersen die onderliggende economische concurrentiekracht weerspiegelen" },
          { en: "Arbitrary political negotiations", es: "Negociaciones políticas arbitrarias", de: "Willkürliche politische Verhandlungen", nl: "Willekeurige politieke onderhandelingen" },
          { en: "Historical exchange rate averages", es: "Promedios históricos de tipos de cambio", de: "Historische Wechselkursdurchschnitte", nl: "Historische wisselkoersgemiddelden" },
          { en: "Random market fluctuations", es: "Fluctuaciones aleatorias del mercado", de: "Zufällige Marktschwankungen", nl: "Willekeurige marktfluctuaties" }
        ],
        correct: 0,
        explanation: {
          en: "The ERM central rates were theoretically based on purchasing power parity calculations and fundamental equilibrium exchange rates that aimed to reflect each country's underlying economic competitiveness and structural characteristics. This approach sought to establish sustainable exchange rate relationships that could eventually converge to permanent fixed rates under monetary union.",
          es: "Las tasas centrales del ERM se basaron teóricamente en cálculos de paridad de poder adquisitivo y tipos de cambio de equilibrio fundamental que buscaban reflejar la competitividad económica subyacente y características estructurales de cada país. Este enfoque buscaba establecer relaciones de tipo de cambio sostenibles que eventualmente pudieran converger a tasas fijas permanentes bajo unión monetaria.",
          de: "Die WKM-Zentralkurse basierten theoretisch auf Kaufkraftparitätsberechnungen und fundamentalen Gleichgewichtswechselkursen, die die zugrundeliegende wirtschaftliche Wettbewerbsfähigkeit und strukturellen Eigenschaften jedes Landes widerspiegeln sollten. Dieser Ansatz zielte darauf ab, nachhaltige Wechselkursbeziehungen zu etablieren, die schließlich zu dauerhaft festen Kursen unter einer Währungsunion konvergieren könnten.",
          nl: "De WKM-centrale koersen waren theoretisch gebaseerd op koopkrachtpariteitsberekeningen en fundamentele evenwichtswisselkoersen die bedoeld waren om elke land's onderliggende economische concurrentiekracht en structurele kenmerken weer te geven. Deze benadering beoogde duurzame wisselkoersrelaties te vestigen die uiteindelijk zouden kunnen convergeren naar permanente vaste koersen onder monetaire unie."
        }
      },
      {
        question: {
          en: "How did the Balassa-Samuelson effect influence the design of convergence criteria for eurozone membership?",
          es: "¿Cómo influyó el efecto Balassa-Samuelson en el diseño de criterios de convergencia para la membresía de la eurozona?",
          de: "Wie beeinflusste der Balassa-Samuelson-Effekt das Design der Konvergenzkriterien für die Eurozone-Mitgliedschaft?",
          nl: "Hoe beïnvloedde het Balassa-Samuelson effect het ontwerp van convergentiecriteria voor eurozone lidmaatschap?"
        },
        options: [
          { en: "Recognition that catching-up economies would naturally experience higher inflation due to productivity differentials in tradable vs non-tradable sectors", es: "Reconocimiento de que las economías en proceso de alcance experimentarían naturalmente mayor inflación debido a diferenciales de productividad en sectores comerciables vs no comerciables", de: "Anerkennung, dass aufholende Volkswirtschaften natürlich höhere Inflation aufgrund von Produktivitätsdifferenzen in handelbaren vs. nicht-handelbaren Sektoren erfahren würden", nl: "Erkenning dat inhalende economieën natuurlijk hogere inflatie zouden ervaren vanwege productiviteitsverschillen in verhandelbare vs niet-verhandelbare sectoren" },
          { en: "Requirement for identical productivity levels", es: "Requisito de niveles de productividad idénticos", de: "Anforderung identischer Produktivitätsniveaus", nl: "Vereiste van identieke productiviteitsniveaus" },
          { en: "Elimination of all price differences", es: "Eliminación de todas las diferencias de precios", de: "Beseitigung aller Preisunterschiede", nl: "Eliminatie van alle prijsverschillen" },
          { en: "Uniform wage policies across countries", es: "Políticas salariales uniformes entre países", de: "Einheitliche Lohnpolitiken zwischen Ländern", nl: "Uniforme loonbeleid tussen landen" }
        ],
        correct: 0,
        explanation: {
          en: "The Balassa-Samuelson effect explains why converging economies typically experience higher inflation rates due to faster productivity growth in tradable goods sectors relative to non-tradable services. This understanding influenced the flexibility built into convergence criteria, recognizing that some inflation differential was economically justified during the catch-up process rather than being purely a sign of macroeconomic instability.",
          es: "El efecto Balassa-Samuelson explica por qué las economías convergentes típicamente experimentan tasas de inflación más altas debido al crecimiento más rápido de productividad en sectores de bienes comerciables relativo a servicios no comerciables. Esta comprensión influyó en la flexibilidad incorporada en los criterios de convergencia, reconociendo que algún diferencial de inflación estaba económicamente justificado durante el proceso de alcance en lugar de ser puramente una señal de inestabilidad macroeconómica.",
          de: "Der Balassa-Samuelson-Effekt erklärt, warum konvergierende Volkswirtschaften typischerweise höhere Inflationsraten aufgrund schnelleren Produktivitätswachstums in handelbaren Güterbereichen relativ zu nicht-handelbaren Dienstleistungen erfahren. Dieses Verständnis beeinflusste die in die Konvergenzkriterien eingebaute Flexibilität und erkannte an, dass einige Inflationsdifferenz während des Aufholprozesses wirtschaftlich gerechtfertigt war, anstatt rein ein Zeichen makroökonomischer Instabilität zu sein.",
          nl: "Het Balassa-Samuelson effect verklaart waarom convergerende economieën typisch hogere inflatietarieven ervaren vanwege snellere productiviteitsgroei in verhandelbare goederensectoren relatief tot niet-verhandelbare diensten. Dit begrip beïnvloedde de flexibiliteit ingebouwd in convergentiecriteria, erkennend dat enig inflatieverschil economisch gerechtvaardigd was tijdens het inhaalproces in plaats van puur een teken van macro-economische instabiliteit te zijn."
        }
      },
      {
        question: {
          en: "What was the economic significance of the 'no-bailout clause' (Article 125 TFEU) in the original Maastricht Treaty design?",
          es: "¿Cuál fue la importancia económica de la 'cláusula de no rescate' (Artículo 125 TFEU) en el diseño original del Tratado de Maastricht?",
          de: "Was war die wirtschaftliche Bedeutung der 'No-Bailout-Klausel' (Artikel 125 AEUV) im ursprünglichen Maastricht-Vertragsdesign?",
          nl: "Wat was de economische betekenis van de 'no-bailout clausule' (Artikel 125 VWEU) in het oorspronkelijke Maastricht Verdrag ontwerp?"
        },
        options: [
          { en: "Creating market discipline through risk pricing to prevent moral hazard and ensure fiscal responsibility in the absence of centralized fiscal authority", es: "Crear disciplina de mercado a través de precios de riesgo para prevenir riesgo moral y asegurar responsabilidad fiscal en ausencia de autoridad fiscal centralizada", de: "Schaffung von Marktdisziplin durch Risikobepreisung zur Verhinderung von Moral Hazard und Gewährleistung fiskalischer Verantwortung in Abwesenheit zentralisierter fiskalischer Autorität", nl: "Creëren van marktdiscipline door risicoprijsstelling om moral hazard te voorkomen en fiscale verantwoordelijkheid te waarborgen bij afwezigheid van gecentraliseerde fiscale autoriteit" },
          { en: "Preventing all government borrowing", es: "Prevenir todo endeudamiento gubernamental", de: "Verhinderung aller Staatsverschuldung", nl: "Voorkomen van alle overheidsleningen" },
          { en: "Guaranteeing unlimited fiscal transfers", es: "Garantizar transferencias fiscales ilimitadas", de: "Garantie unbegrenzter fiskalischer Transfers", nl: "Garanderen van onbeperkte fiscale transfers" },
          { en: "Eliminating sovereign debt markets", es: "Eliminar mercados de deuda soberana", de: "Beseitigung von Staatsschuldenmärkten", nl: "Elimineren van soevereine schuldenmarkten" }
        ],
        correct: 0,
        explanation: {
          en: "The no-bailout clause was designed to preserve market discipline by ensuring that sovereign borrowing costs would reflect each country's individual fiscal risk. This mechanism was intended to create incentives for fiscal prudence and prevent moral hazard, where countries might engage in excessive borrowing expecting to be bailed out by partners. However, the crisis revealed the tension between this principle and financial stability needs.",
          es: "La cláusula de no rescate fue diseñada para preservar la disciplina de mercado asegurando que los costos de endeudamiento soberano reflejaran el riesgo fiscal individual de cada país. Este mecanismo pretendía crear incentivos para la prudencia fiscal y prevenir riesgo moral, donde países podrían involucrarse en endeudamiento excesivo esperando ser rescatados por socios. Sin embargo, la crisis reveló la tensión entre este principio y las necesidades de estabilidad financiera.",
          de: "Die No-Bailout-Klausel war darauf ausgelegt, Marktdisziplin zu bewahren, indem sichergestellt wurde, dass Staatsanleihenkosten das individuelle fiskalische Risiko jedes Landes widerspiegeln. Dieser Mechanismus sollte Anreize für fiskalische Umsicht schaffen und Moral Hazard verhindern, bei dem Länder übermäßige Verschuldung eingehen könnten in der Erwartung, von Partnern gerettet zu werden. Die Krise offenbarte jedoch die Spannung zwischen diesem Prinzip und Finanzstabilitätsbedürfnissen.",
          nl: "De no-bailout clausule was ontworpen om marktdiscipline te behouden door ervoor te zorgen dat soevereine leenkosten elke land's individuele fiscale risico zouden weerspiegelen. Dit mechanisme was bedoeld om prikkels voor fiscale voorzichtigheid te creëren en moral hazard te voorkomen, waarbij landen zouden kunnen engageren in overmatig lenen verwachtend gered te worden door partners. Echter, de crisis onthulde de spanning tussen dit principe en financiële stabiliteitsbehoeften."
        }
      },
      {
        question: {
          en: "How did the theory of optimum currency areas influence the specific design of European Central Bank institutional governance?",
          es: "¿Cómo influyó la teoría de áreas monetarias óptimas en el diseño específico de la gobernanza institucional del Banco Central Europeo?",
          de: "Wie beeinflusste die Theorie optimaler Währungsräume das spezifische Design der institutionellen Governance der Europäischen Zentralbank?",
          nl: "Hoe beïnvloedde de theorie van optimale valutagebieden het specifieke ontwerp van Europese Centrale Bank institutionele governance?"
        },
        options: [
          { en: "Federal structure with national central bank representation to balance supranational objectives with regional economic diversity and ensure transmission mechanism effectiveness", es: "Estructura federal con representación de bancos centrales nacionales para equilibrar objetivos supranacionales con diversidad económica regional y asegurar efectividad del mecanismo de transmisión", de: "Föderale Struktur mit nationaler Zentralbankvertretung zum Ausgleich supranationaler Ziele mit regionaler wirtschaftlicher Vielfalt und Gewährleistung der Transmissionsmechanismus-Effektivität", nl: "Federale structuur met nationale centrale bank vertegenwoordiging om supranationale doelstellingen te balanceren met regionale economische diversiteit en transmissiemechanisme effectiviteit te waarborgen" },
          { en: "Centralized autocratic decision-making", es: "Toma de decisiones autocrática centralizada", de: "Zentralisierte autokratische Entscheidungsfindung", nl: "Gecentraliseerde autocratische besluitvorming" },
          { en: "Purely national decision-making", es: "Toma de decisiones puramente nacional", de: "Rein nationale Entscheidungsfindung", nl: "Puur nationale besluitvorming" },
          { en: "Private sector control", es: "Control del sector privado", de: "Kontrolle des Privatsektors", nl: "Private sector controle" }
        ],
        correct: 0,
        explanation: {
          en: "The ECB's federal structure reflects optimal currency area theory by incorporating national central banks into the Eurosystem to ensure that monetary policy transmission accounts for diverse regional economic conditions. The Governing Council's composition balances supranational monetary policy objectives with understanding of local transmission mechanisms, addressing the challenge of implementing unified policy across heterogeneous economies.",
          es: "La estructura federal del BCE refleja la teoría de áreas monetarias óptimas incorporando bancos centrales nacionales en el Eurosistema para asegurar que la transmisión de política monetaria tenga en cuenta diversas condiciones económicas regionales. La composición del Consejo de Gobierno equilibra objetivos de política monetaria supranacional con comprensión de mecanismos de transmisión locales, abordando el desafío de implementar política unificada en economías heterogéneas.",
          de: "Die föderale Struktur der EZB spiegelt die Theorie optimaler Währungsräume wider, indem sie nationale Zentralbanken in das Eurosystem einbezieht, um sicherzustellen, dass die geldpolitische Transmission diverse regionale wirtschaftliche Bedingungen berücksichtigt. Die Zusammensetzung des Direktoriums balanciert supranationale geldpolitische Ziele mit Verständnis lokaler Transmissionsmechanismen und adressiert die Herausforderung, einheitliche Politik in heterogenen Volkswirtschaften umzusetzen.",
          nl: "De federale structuur van de ECB weerspiegelt optimale valutagebiedtheorie door nationale centrale banken op te nemen in het Eurosysteem om ervoor te zorgen dat monetaire beleidstransmissie rekening houdt met diverse regionale economische omstandigheden. De samenstelling van de Raad van Bestuur balanceert supranationale monetaire beleidsdoelstellingen met begrip van lokale transmissiemechanismen, waarbij de uitdaging wordt aangegaan van het implementeren van uniform beleid over heterogene economieën."
        }
      },
      {
        question: {
          en: "What was the theoretical foundation for the 3% deficit criterion in the Stability and Growth Pact?",
          es: "¿Cuál fue la base teórica para el criterio de déficit del 3% en el Pacto de Estabilidad y Crecimiento?",
          de: "Was war die theoretische Grundlage für das 3%-Defizitkriterium im Stabilitäts- und Wachstumspakt?",
          nl: "Wat was de theoretische basis voor het 3% deficitcriterium in het Stabiliteits- en Groeipact?"
        },
        options: [
          { en: "Debt sustainability calculus assuming 5% nominal GDP growth and 60% debt-to-GDP ratio would stabilize with 3% deficit limit", es: "Cálculo de sostenibilidad de deuda asumiendo 5% de crecimiento nominal del PIB y ratio deuda-PIB de 60% se estabilizaría con límite de déficit del 3%", de: "Schuldentragfähigkeitsberechnung unter Annahme von 5% nominalem BIP-Wachstum und 60% Schulden-BIP-Verhältnis würde sich mit 3%-Defizitgrenze stabilisieren", nl: "Schuldhoudbaarheidsberekening aannemend 5% nominale BBP-groei en 60% schuld-BBP ratio zou stabiliseren met 3% deficitlimiet" },
          { en: "Random political compromise", es: "Compromiso político aleatorio", de: "Zufälliger politischer Kompromiss", nl: "Willekeurig politiek compromis" },
          { en: "Historical budget averages", es: "Promedios presupuestarios históricos", de: "Historische Haushaltsdurchschnitte", nl: "Historische begrotingsgemiddelden" },
          { en: "Optimal taxation theory", es: "Teoría de tributación óptima", de: "Optimale Besteuerungstheorie", nl: "Optimale belastingtheorie" }
        ],
        correct: 0,
        explanation: {
          en: "The 3% deficit criterion was derived from debt sustainability mathematics: with an assumed long-term nominal GDP growth rate of 5% (approximately 3% real growth plus 2% inflation) and the 60% debt-to-GDP target, a 3% deficit would stabilize the debt ratio (3% = 0.6 × 5%). This formula ensured that deficit spending wouldn't lead to explosive debt dynamics under normal economic conditions.",
          es: "El criterio de déficit del 3% se derivó de las matemáticas de sostenibilidad de deuda: con una tasa asumida de crecimiento nominal del PIB a largo plazo del 5% (aproximadamente 3% de crecimiento real más 2% de inflación) y el objetivo de deuda-PIB del 60%, un déficit del 3% estabilizaría la ratio de deuda (3% = 0.6 × 5%). Esta fórmula aseguró que el gasto deficitario no llevaría a dinámicas explosivas de deuda bajo condiciones económicas normales.",
          de: "Das 3%-Defizitkriterium wurde aus der Schuldentragfähigkeitsmathematik abgeleitet: Bei einer angenommenen langfristigen nominalen BIP-Wachstumsrate von 5% (etwa 3% reales Wachstum plus 2% Inflation) und dem 60%-Schulden-BIP-Ziel würde ein 3%-Defizit das Schuldenverhältnis stabilisieren (3% = 0,6 × 5%). Diese Formel stellte sicher, dass Defizitausgaben unter normalen wirtschaftlichen Bedingungen nicht zu explosiver Schuldendynamik führen würden.",
          nl: "Het 3% deficitcriterium werd afgeleid van schuldhoudbaarheids-mathematiek: met een aangenomen langetermijn nominale BBP-groeivoet van 5% (ongeveer 3% reële groei plus 2% inflatie) en het 60% schuld-BBP doel, zou een 3% deficit de schuldratio stabiliseren (3% = 0,6 × 5%). Deze formule zorgde ervoor dat deficit uitgaven niet zouden leiden tot explosieve schulddynamiek onder normale economische omstandigheden."
        }
      },
      {
        question: {
          en: "How did endogenous money theory influence the ECB's operational framework for money creation?",
          es: "¿Cómo influyó la teoría del dinero endógeno en el marco operacional del BCE para la creación de dinero?",
          de: "Wie beeinflusste die endogene Geldtheorie das operative Rahmenwerk der EZB für Geldschöpfung?",
          nl: "Hoe beïnvloedde endogene geldtheorie het operationele kader van de ECB voor geldcreatie?"
        },
        options: [
          { en: "Recognition that money supply is determined by credit demand and bank lending, leading to interest rate targeting rather than monetary aggregate control", es: "Reconocimiento de que la oferta monetaria está determinada por la demanda crediticia y préstamos bancarios, llevando a objetivos de tasas de interés en lugar de control de agregados monetarios", de: "Anerkennung, dass Geldmenge durch Kreditnachfrage und Bankkreditvergabe bestimmt wird, was zu Zinszielsteuerung statt Geldmengenkontrolle führt", nl: "Erkenning dat geldvoorraad wordt bepaald door kredietvraag en bankuitleningen, leidend tot rentetarief targeting in plaats van monetaire aggregaat controle" },
          { en: "Direct control of money printing", es: "Control directo de impresión de dinero", de: "Direkte Kontrolle des Gelddrucks", nl: "Directe controle van gelddruk" },
          { en: "Fixed money supply growth", es: "Crecimiento fijo de la oferta monetaria", de: "Festes Geldmengenwachstum", nl: "Vaste geldvoorraagroei" },
          { en: "Gold standard mechanisms", es: "Mecanismos del patrón oro", de: "Goldstandard-Mechanismen", nl: "Goudstandaard mechanismen" }
        ],
        correct: 0,
        explanation: {
          en: "Endogenous money theory recognizes that in modern banking systems, money is created through the lending process and credit demand largely determines money supply. This understanding shaped the ECB's focus on interest rate policy rather than direct monetary aggregate targeting, as central banks cannot directly control money supply but can influence credit creation through price (interest rates) rather than quantity mechanisms.",
          es: "La teoría del dinero endógeno reconoce que en sistemas bancarios modernos, el dinero se crea a través del proceso de préstamo y la demanda crediticia determina en gran medida la oferta monetaria. Esta comprensión moldeó el enfoque del BCE en la política de tasas de interés en lugar de objetivos directos de agregados monetarios, ya que los bancos centrales no pueden controlar directamente la oferta monetaria pero pueden influir en la creación de crédito a través del precio (tasas de interés) en lugar de mecanismos de cantidad.",
          de: "Die endogene Geldtheorie erkennt an, dass in modernen Bankensystemen Geld durch den Kreditvergabeprozess geschaffen wird und Kreditnachfrage weitgehend die Geldmenge bestimmt. Dieses Verständnis prägte den Fokus der EZB auf Zinspolitik statt direkter Geldmengenzielsteuerung, da Zentralbanken die Geldmenge nicht direkt kontrollieren können, aber Kreditschöpfung durch Preis (Zinssätze) statt Quantitätsmechanismen beeinflussen können.",
          nl: "Endogene geldtheorie erkent dat in moderne banksystemen geld wordt gecreëerd door het uitleenproces en kredietvraag grotendeels de geldvoorraad bepaalt. Dit begrip vormde de ECB's focus op rentetariefbeleid in plaats van directe monetaire aggregaat targeting, omdat centrale banken de geldvoorraad niet direct kunnen controleren maar kredietcreatie kunnen beïnvloeden door prijs (rentetarieven) in plaats van kwantiteitsmechanismen."
        }
      },
      {
        question: {
          en: "What was the economic logic behind the asymmetric mandate of the ECB compared to the Federal Reserve's dual mandate?",
          es: "¿Cuál fue la lógica económica detrás del mandato asimétrico del BCE comparado con el mandato dual de la Reserva Federal?",
          de: "Was war die wirtschaftliche Logik hinter dem asymmetrischen Mandat der EZB im Vergleich zum Doppelmandat der Federal Reserve?",
          nl: "Wat was de economische logica achter het asymmetrische mandaat van de ECB vergeleken met de Federal Reserve's dubbele mandaat?"
        },
        options: [
          { en: "German Bundesbank influence and belief that price stability is prerequisite for sustainable employment, avoiding inflationary bias in monetary union without fiscal union", es: "Influencia del Bundesbank alemán y creencia de que la estabilidad de precios es prerequisito para empleo sostenible, evitando sesgo inflacionario en unión monetaria sin unión fiscal", de: "Bundesbank-Einfluss und Glaube, dass Preisstabilität Voraussetzung für nachhaltige Beschäftigung ist, Vermeidung inflationärer Verzerrung in Währungsunion ohne Fiskalunion", nl: "Duitse Bundesbank invloed en geloof dat prijsstabiliteit voorwaarde is voor duurzame werkgelegenheid, vermijden van inflationaire bias in monetaire unie zonder fiscale unie" },
          { en: "Arbitrary institutional design", es: "Diseño institucional arbitrario", de: "Willkürliches institutionelles Design", nl: "Willekeurig institutioneel ontwerp" },
          { en: "Copying other central bank models", es: "Copiar otros modelos de bancos centrales", de: "Kopieren anderer Zentralbankmodelle", nl: "Kopiëren van andere centrale bank modellen" },
          { en: "Political expedience", es: "Conveniencia política", de: "Politische Zweckmäßigkeit", nl: "Politieke opportuniteit" }
        ],
        correct: 0,
        explanation: {
          en: "The ECB's price stability focus reflected German Bundesbank influence and the theoretical view that sustainable employment requires price stability as a foundation. In a monetary union without fiscal union, an employment mandate could create inflationary bias as different countries face varying unemployment-inflation trade-offs, while price stability provides a neutral anchor that avoids systematic preference for any particular member state's economic conditions.",
          es: "El enfoque de estabilidad de precios del BCE reflejó la influencia del Bundesbank alemán y la visión teórica de que el empleo sostenible requiere estabilidad de precios como fundamento. En una unión monetaria sin unión fiscal, un mandato de empleo podría crear sesgo inflacionario ya que diferentes países enfrentan diferentes compensaciones desempleo-inflación, mientras que la estabilidad de precios proporciona un ancla neutral que evita preferencia sistemática por las condiciones económicas de cualquier estado miembro particular.",
          de: "Der Preisstabilitätsfokus der EZB spiegelte den Bundesbank-Einfluss und die theoretische Sichtweise wider, dass nachhaltige Beschäftigung Preisstabilität als Grundlage erfordert. In einer Währungsunion ohne Fiskalunion könnte ein Beschäftigungsmandat inflationäre Verzerrung schaffen, da verschiedene Länder unterschiedliche Arbeitslosigkeit-Inflation-Abwägungen haben, während Preisstabilität einen neutralen Anker bietet, der systematische Präferenz für die wirtschaftlichen Bedingungen eines bestimmten Mitgliedstaates vermeidet.",
          nl: "De ECB's prijsstabiliteitsfocus weerspiegelde Duitse Bundesbank invloed en de theoretische visie dat duurzame werkgelegenheid prijsstabiliteit als fundament vereist. In een monetaire unie zonder fiscale unie zou een werkgelegenheidsmandaat inflationaire bias kunnen creëren omdat verschillende landen verschillende werkloosheid-inflatie afwegingen hebben, terwijl prijsstabiliteit een neutraal anker biedt dat systematische voorkeur voor enige bepaalde lidstaat's economische omstandigheden vermijdt."
        }
      },
      {
        question: {
          en: "How did the Mundell-Fleming model's insights influence the eurozone's approach to capital mobility and exchange rate policy?",
          es: "¿Cómo influyeron las ideas del modelo Mundell-Fleming en el enfoque de la eurozona hacia la movilidad de capital y política de tipo de cambio?",
          de: "Wie beeinflussten die Erkenntnisse des Mundell-Fleming-Modells den Eurozone-Ansatz zu Kapitalmobilität und Wechselkurspolitik?",
          nl: "Hoe beïnvloedden de Mundell-Fleming model inzichten de eurozone's benadering van kapitaalmobiliteit en wisselkoersbeleid?"
        },
        options: [
          { en: "Full capital mobility with fixed intra-eurozone rates and floating external rates, recognizing that monetary policy effectiveness requires abandoning intermediate exchange rate targeting", es: "Movilidad de capital completa con tasas fijas intra-eurozona y tasas externas flotantes, reconociendo que la efectividad de política monetaria requiere abandonar objetivos intermedios de tipo de cambio", de: "Vollständige Kapitalmobilität mit festen Intra-Eurozone-Kursen und schwankenden externen Kursen, Anerkennung dass geldpolitische Wirksamkeit das Aufgeben intermediärer Wechselkursziele erfordert", nl: "Volledige kapitaalmobiliteit met vaste intra-eurozone koersen en zwevende externe koersen, erkennend dat monetaire beleidseffectiviteit het opgeven van intermediaire wisselkoersdoelstellingen vereist" },
          { en: "Capital controls on all flows", es: "Controles de capital en todos los flujos", de: "Kapitalkontrollen auf alle Ströme", nl: "Kapitaalcontroles op alle stromen" },
          { en: "Managed floating within narrow bands", es: "Flotación administrada dentro de bandas estrechas", de: "Verwaltetes Floating innerhalb enger Bänder", nl: "Beheerde floating binnen smalle banden" },
          { en: "Pegged exchange rates to dollar", es: "Tipos de cambio fijos al dólar", de: "An Dollar gekoppelte Wechselkurse", nl: "Aan dollar gekoppelde wisselkoersen" }
        ],
        correct: 0,
        explanation: {
          en: "The Mundell-Fleming trilemma guided the eurozone design: with free capital mobility, the choice was between fixed exchange rates or independent monetary policy. The eurozone chose permanently fixed rates (single currency) among members with floating rates externally, allowing unified monetary policy while maintaining capital mobility. This represented a 'corner solution' avoiding the unstable middle ground of adjustable pegs.",
          es: "El trilema Mundell-Fleming guió el diseño de la eurozona: con libre movilidad de capital, la elección era entre tipos de cambio fijos o política monetaria independiente. La eurozona eligió tasas permanentemente fijas (moneda única) entre miembros con tasas flotantes externamente, permitiendo política monetaria unificada mientras mantenía movilidad de capital. Esto representó una 'solución de esquina' evitando el terreno inestable medio de paridades ajustables.",
          de: "Das Mundell-Fleming-Trilemma leitete das Eurozone-Design: Mit freier Kapitalmobilität war die Wahl zwischen festen Wechselkursen oder unabhängiger Geldpolitik. Die Eurozone wählte dauerhaft feste Kurse (Einheitswährung) zwischen Mitgliedern mit extern schwankenden Kursen, was einheitliche Geldpolitik bei Beibehaltung der Kapitalmobilität ermöglichte. Dies stellte eine 'Ecklösung' dar, die den instabilen Mittelweg anpassbarer Bindungen vermied.",
          nl: "Het Mundell-Fleming trilemma leidde het eurozone ontwerp: met vrije kapitaalmobiliteit was de keuze tussen vaste wisselkoersen of onafhankelijk monetair beleid. De eurozone koos permanent vaste koersen (enkele munt) tussen leden met extern zwevende koersen, waardoor uniform monetair beleid mogelijk werd terwijl kapitaalmobiliteit behouden bleef. Dit vertegenwoordigde een 'hoekoplossing' die de instabiele middenweg van aanpasbare koppelingen vermeed."
        }
      },
      {
        question: {
          en: "What was the theoretical basis for the ECB's two-pillar monetary policy strategy combining economic and monetary analysis?",
          es: "¿Cuál fue la base teórica para la estrategia de política monetaria de dos pilares del BCE combinando análisis económico y monetario?",
          de: "Was war die theoretische Grundlage für die Zwei-Säulen-Geldpolitikstrategie der EZB, die wirtschaftliche und monetäre Analyse kombiniert?",
          nl: "Wat was de theoretische basis voor de ECB's twee-pijler monetaire beleidsstrategie die economische en monetaire analyse combineert?"
        },
        options: [
          { en: "Synthesis of New Keynesian short-term price rigidities with monetarist long-term money-inflation relationships, providing cross-checking mechanism for policy decisions", es: "Síntesis de rigideces de precios a corto plazo Nuevas Keynesianas con relaciones monetaristas de dinero-inflación a largo plazo, proporcionando mecanismo de verificación cruzada para decisiones políticas", de: "Synthese neukeynesianischer kurzfristiger Preisrigiditäten mit monetaristischen langfristigen Geld-Inflations-Beziehungen, Bereitstellung eines Querprüfungsmechanismus für politische Entscheidungen", nl: "Synthese van Nieuwe Keynesiaanse korte termijn prijsrigiditeiten met monetaristische lange termijn geld-inflatie relaties, het verstrekken van kruiscontrolemechanisme voor beleidsbeslissingen" },
          { en: "Arbitrary division of analytical work", es: "División arbitraria del trabajo analítico", de: "Willkürliche Aufteilung der analytischen Arbeit", nl: "Willekeurige verdeling van analytisch werk" },
          { en: "Political compromise between countries", es: "Compromiso político entre países", de: "Politischer Kompromiss zwischen Ländern", nl: "Politiek compromis tussen landen" },
          { en: "Bureaucratic organization", es: "Organización burocrática", de: "Bürokratische Organisation", nl: "Bureaucratische organisatie" }
        ],
        correct: 0,
        explanation: {
          en: "The two-pillar strategy reflects theoretical synthesis: the economic analysis pillar incorporates New Keynesian insights about short-term price and wage rigidities, output gaps, and inflation dynamics, while the monetary analysis pillar draws on monetarist long-term relationships between money growth and inflation. This framework provides complementary perspectives and cross-checking mechanisms to avoid over-reliance on any single theoretical approach.",
          es: "La estrategia de dos pilares refleja síntesis teórica: el pilar de análisis económico incorpora ideas Nuevas Keynesianas sobre rigideces de precios y salarios a corto plazo, brechas de producto y dinámicas de inflación, mientras que el pilar de análisis monetario se basa en relaciones monetaristas a largo plazo entre crecimiento monetario e inflación. Este marco proporciona perspectivas complementarias y mecanismos de verificación cruzada para evitar dependencia excesiva en cualquier enfoque teórico único.",
          de: "Die Zwei-Säulen-Strategie spiegelt theoretische Synthese wider: Die wirtschaftliche Analysesäule integriert neukeynesianische Erkenntnisse über kurzfristige Preis- und Lohnrigiditäten, Produktionslücken und Inflationsdynamiken, während die monetäre Analysesäule auf monetaristische langfristige Beziehungen zwischen Geldwachstum und Inflation zurückgreift. Dieses Framework bietet komplementäre Perspektiven und Querprüfungsmechanismen, um übermäßige Abhängigkeit von einem einzigen theoretischen Ansatz zu vermeiden.",
          nl: "De twee-pijler strategie weerspiegelt theoretische synthese: de economische analyse pijler integreert Nieuwe Keynesiaanse inzichten over korte termijn prijs- en loonrigiditeiten, output gaps en inflatiedynamiek, terwijl de monetaire analyse pijler put uit monetaristische lange termijn relaties tussen geldgroei en inflatie. Dit kader biedt complementaire perspectieven en kruiscontrolemechanismen om overmatige afhankelijkheid van enige enkele theoretische benadering te vermijden."
        }
      },
      {
        question: {
          en: "How did the concept of 'time inconsistency' in monetary policy influence the institutional design of ECB independence?",
          es: "¿Cómo influyó el concepto de 'inconsistencia temporal' en política monetaria en el diseño institucional de la independencia del BCE?",
          de: "Wie beeinflusste das Konzept der 'Zeitinkonsistenz' in der Geldpolitik das institutionelle Design der EZB-Unabhängigkeit?",
          nl: "Hoe beïnvloedde het concept van 'tijdinconsistentie' in monetair beleid het institutionele ontwerp van ECB-onafhankelijkheid?"
        },
        options: [
          { en: "Strong institutional independence and long terms to avoid inflationary bias from short-term political pressures and credibly commit to low inflation", es: "Fuerte independencia institucional y términos largos para evitar sesgo inflacionario de presiones políticas a corto plazo y comprometerse creíblemente con baja inflación", de: "Starke institutionelle Unabhängigkeit und lange Amtszeiten zur Vermeidung inflationärer Verzerrung durch kurzfristige politische Drücke und glaubwürdige Verpflichtung zu niedriger Inflation", nl: "Sterke institutionele onafhankelijkheid en lange termijnen om inflationaire bias van korte termijn politieke druk te vermijden en geloofwaardig te committeren aan lage inflatie" },
          { en: "Direct political control", es: "Control político directo", de: "Direkte politische Kontrolle", nl: "Directe politieke controle" },
          { en: "Rotating leadership", es: "Liderazgo rotativo", de: "Rotierende Führung", nl: "Roterend leiderschap" },
          { en: "Market-based appointments", es: "Nombramientos basados en el mercado", de: "Marktbasierte Ernennungen", nl: "Marktgebaseerde benoemingen" }
        ],
        correct: 0,
        explanation: {
          en: "Time inconsistency theory demonstrates that policymakers may be tempted to create surprise inflation to boost short-term output, but rational expectations render this ineffective while creating inflationary bias. The ECB's strong independence (instrument, functional, personal, and financial) with long, non-renewable terms for Executive Board members was designed to solve this credibility problem by removing short-term political incentives and enabling credible commitment to price stability.",
          es: "La teoría de inconsistencia temporal demuestra que los hacedores de política pueden estar tentados a crear inflación sorpresa para impulsar producción a corto plazo, pero las expectativas racionales hacen esto inefectivo mientras crean sesgo inflacionario. La fuerte independencia del BCE (instrumental, funcional, personal y financiera) con términos largos y no renovables para miembros del Comité Ejecutivo fue diseñada para resolver este problema de credibilidad removiendo incentivos políticos a corto plazo y habilitando compromiso creíble con estabilidad de precios.",
          de: "Die Zeitinkonsistenztheorie zeigt, dass Politiker versucht sein könnten, Überraschungsinflation zu schaffen, um kurzfristige Produktion zu steigern, aber rationale Erwartungen machen dies unwirksam während sie inflationäre Verzerrung schaffen. Die starke Unabhängigkeit der EZB (instrumental, funktional, personal und finanziell) mit langen, nicht verlängerbaren Amtszeiten für Direktoriumsmitglieder wurde entwickelt, um dieses Glaubwürdigkeitsproblem zu lösen, indem kurzfristige politische Anreize entfernt und glaubwürdige Verpflichtung zu Preisstabilität ermöglicht werden.",
          nl: "Tijdinconsistentietheorie toont aan dat beleidsmakers verleid kunnen worden om verrassingsinflatie te creëren om korte termijn output te stimuleren, maar rationele verwachtingen maken dit ineffectief terwijl inflationaire bias wordt gecreëerd. De ECB's sterke onafhankelijkheid (instrument, functioneel, persoonlijk en financieel) met lange, niet-vernieuwbare termijnen voor Directieleden was ontworpen om dit geloofwaardigheidsprobleem op te lossen door korte termijn politieke prikkels te verwijderen en geloofwaardige commitment aan prijsstabiliteit mogelijk te maken."
        }
      },
      {
        question: {
          en: "What was the economic rationale behind the choice of the Harmonised Index of Consumer Prices (HICP) as the ECB's inflation measure?",
          es: "¿Cuál fue la justificación económica detrás de la elección del Índice Armonizado de Precios al Consumidor (HICP) como medida de inflación del BCE?",
          de: "Was war die wirtschaftliche Begründung für die Wahl des Harmonisierten Verbraucherpreisindex (HVPI) als Inflationsmaß der EZB?",
          nl: "Wat was de economische redenering achter de keuze van de Geharmoniseerde Index van Consumentenprijzen (HICP) als inflatiemaatstaf van de ECB?"
        },
        options: [
          { en: "Cross-country comparability and uniform methodology to measure price stability across diverse economies with different consumption patterns and statistical traditions", es: "Comparabilidad entre países y metodología uniforme para medir estabilidad de precios en economías diversas con diferentes patrones de consumo y tradiciones estadísticas", de: "Länderübergreifende Vergleichbarkeit und einheitliche Methodik zur Messung der Preisstabilität in verschiedenen Volkswirtschaften mit unterschiedlichen Konsummustern und statistischen Traditionen", nl: "Kruislandvergelijkbaarheid en uniforme methodologie om prijsstabiliteit te meten over diverse economieën met verschillende consumptiepatronen en statistische tradities" },
          { en: "Simplicity of calculation", es: "Simplicidad de cálculo", de: "Einfachheit der Berechnung", nl: "Eenvoud van berekening" },
          { en: "Historical precedent only", es: "Solo precedente histórico", de: "Nur historischer Präzedenzfall", nl: "Alleen historisch precedent" },
          { en: "Political convenience", es: "Conveniencia política", de: "Politische Bequemlichkeit", nl: "Politieke gemak" }
        ],
        correct: 0,
        explanation: {
          en: "The HICP was specifically designed to provide comparable inflation measures across eurozone countries with different economic structures, consumption patterns, and statistical methodologies. This harmonization was crucial for a single monetary policy serving diverse economies, ensuring that the ECB's price stability objective would be meaningful and consistently measured across all member states, avoiding distortions from national statistical differences.",
          es: "El HICP fue específicamente diseñado para proporcionar medidas de inflación comparables entre países de la eurozona con diferentes estructuras económicas, patrones de consumo y metodologías estadísticas. Esta armonización fue crucial para una política monetaria única sirviendo economías diversas, asegurando que el objetivo de estabilidad de precios del BCE fuera significativo y consistentemente medido en todos los estados miembros, evitando distorsiones de diferencias estadísticas nacionales.",
          de: "Der HVPI wurde speziell entwickelt, um vergleichbare Inflationsmaße in Eurozone-Ländern mit unterschiedlichen Wirtschaftsstrukturen, Konsummustern und statistischen Methoden bereitzustellen. Diese Harmonisierung war entscheidend für eine einheitliche Geldpolitik für verschiedene Volkswirtschaften und stellte sicher, dass das Preisstabilitätsziel der EZB bedeutsam und konsistent in allen Mitgliedstaaten gemessen wurde, um Verzerrungen durch nationale statistische Unterschiede zu vermeiden.",
          nl: "De HICP was specifiek ontworpen om vergelijkbare inflatiemaatregelen te bieden over eurozone landen met verschillende economische structuren, consumptiepatronen en statistische methodologieën. Deze harmonisatie was cruciaal voor een enkel monetair beleid dat diverse economieën dient, waardoor werd gewaarborgd dat de ECB's prijsstabiliteitsdoelstelling betekenisvol en consistent gemeten zou worden over alle lidstaten, vermijdend verstoringen van nationale statistische verschillen."
        }
      },
      {
        question: {
          en: "How did the theory of financial accelerator effects influence European financial integration policy leading to euro adoption?",
          es: "¿Cómo influyó la teoría de efectos de acelerador financiero en la política de integración financiera europea llevando a la adopción del euro?",
          de: "Wie beeinflusste die Theorie finanzieller Akzeleratoreffekte die europäische Finanzintegrationspolitik, die zur Euro-Einführung führte?",
          nl: "Hoe beïnvloedde de theorie van financiële accelerator effecten het Europese financiële integratiebeleid leidend tot euro-adoptie?"
        },
        options: [
          { en: "Recognition that financial market integration would amplify monetary policy transmission and reduce asymmetric financial shocks through risk-sharing and capital mobility", es: "Reconocimiento de que la integración del mercado financiero amplificaría la transmisión de política monetaria y reduciría choques financieros asimétricos a través de compartición de riesgos y movilidad de capital", de: "Anerkennung, dass Finanzmarktintegration die geldpolitische Transmission verstärken und asymmetrische Finanzschocks durch Risikoteilung und Kapitalmobilität reduzieren würde", nl: "Erkenning dat financiële marktintegratie monetaire beleidstransmissie zou versterken en asymmetrische financiële schokken zou verminderen door risicoverdeling en kapitaalmobiliteit" },
          { en: "Belief in automatic market stability", es: "Creencia en estabilidad automática del mercado", de: "Glaube an automatische Marktstabilität", nl: "Geloof in automatische marktstabiliteit" },
          { en: "Desire to eliminate all financial markets", es: "Deseo de eliminar todos los mercados financieros", de: "Wunsch, alle Finanzmärkte zu beseitigen", nl: "Verlangen om alle financiële markten te elimineren" },
          { en: "Focus on trade integration only", es: "Enfoque solo en integración comercial", de: "Fokus nur auf Handelsintegration", nl: "Focus alleen op handelsintegratie" }
        ],
        correct: 0,
        explanation: {
          en: "Financial accelerator theory showed how credit market imperfections could amplify real shocks through balance sheet effects and credit constraints. European financial integration was promoted as a way to reduce these frictions by creating deeper, more liquid markets that would enhance monetary policy transmission, provide better risk-sharing across regions, and reduce the probability and impact of asymmetric financial disturbances that could undermine monetary union effectiveness.",
          es: "La teoría del acelerador financiero mostró cómo las imperfecciones del mercado crediticio podrían amplificar choques reales a través de efectos de balance y restricciones crediticias. La integración financiera europea fue promovida como una forma de reducir estas fricciones creando mercados más profundos y líquidos que mejorarían la transmisión de política monetaria, proporcionarían mejor compartición de riesgos entre regiones, y reducirían la probabilidad e impacto de perturbaciones financieras asimétricas que podrían socavar la efectividad de la unión monetaria.",
          de: "Die Finanzakzeleratortheorie zeigte, wie Kreditmarktunvollkommenheiten reale Schocks durch Bilanzeffekte und Kreditbeschränkungen verstärken könnten. Die europäische Finanzintegration wurde als Weg gefördert, diese Reibungen zu reduzieren, indem tiefere, liquidere Märkte geschaffen werden, die die geldpolitische Transmission verbessern, bessere Risikoteilung zwischen Regionen bieten und die Wahrscheinlichkeit und den Einfluss asymmetrischer Finanzstörungen reduzieren würden, die die Wirksamkeit der Währungsunion untergraben könnten.",
          nl: "Financiële accelerator theorie toonde hoe kredietmarktimperfecties reële schokken zouden kunnen versterken door balanseffecten en kredietbeperkingen. Europese financiële integratie werd gepromoot als een manier om deze fricties te verminderen door diepere, meer liquide markten te creëren die monetaire beleidstransmissie zouden verbeteren, betere risicoverdeling over regio's zouden bieden, en de waarschijnlijkheid en impact van asymmetrische financiële verstoringen zouden verminderen die de effectiviteit van monetaire unie zouden kunnen ondermijnen."
        }
      },
      {
        question: {
          en: "What was the theoretical foundation for the 'convergence play' investment strategy in European bond markets during the pre-euro period?",
          es: "¿Cuál fue la base teórica para la estrategia de inversión 'convergence play' en mercados de bonos europeos durante el período pre-euro?",
          de: "Was war die theoretische Grundlage für die 'Convergence Play'-Investitionsstrategie in europäischen Anleihemärkten während der Vor-Euro-Periode?",
          nl: "Wat was de theoretische basis voor de 'convergence play' investeringsstrategie in Europese obligatiemarkten tijdens de pre-euro periode?"
        },
        options: [
          { en: "Expectation that yield differentials would disappear as countries approached monetary union due to elimination of currency risk and convergence of credit risk perceptions", es: "Expectativa de que los diferenciales de rendimiento desaparecerían cuando los países se acercaran a la unión monetaria debido a la eliminación del riesgo de moneda y convergencia de percepciones de riesgo crediticio", de: "Erwartung, dass Renditeunterschiede verschwinden würden, wenn Länder sich der Währungsunion näherten aufgrund der Beseitigung des Währungsrisikos und Konvergenz der Kreditrisikoperzeprionen", nl: "Verwachting dat rendeverschillen zouden verdwijnen toen landen de monetaire unie naderden vanwege eliminatie van valutarisico en convergentie van kredietrisicopercepties" },
          { en: "Random speculation", es: "Especulación aleatoria", de: "Zufällige Spekulation", nl: "Willekeurige speculatie" },
          { en: "Government guarantees", es: "Garantías gubernamentales", de: "Staatliche Garantien", nl: "Overheidsgaranties" },
          { en: "Technical trading rules", es: "Reglas de comercio técnico", de: "Technische Handelsregeln", nl: "Technische handelsregels" }
        ],
        correct: 0,
        explanation: {
          en: "The convergence play was based on the theoretical expectation that as countries moved toward monetary union, yield spreads would narrow due to: (1) elimination of currency/devaluation risk within the union, (2) convergence of inflation expectations, and (3) implicit assumption that credit risk would also converge. Investors bought higher-yielding peripheral bonds expecting yields to converge to the German Bund, generating capital gains. However, this strategy underestimated the persistence of sovereign credit risk differentials.",
          es: "El convergence play se basó en la expectativa teórica de que cuando los países se movieran hacia la unión monetaria, los spreads de rendimiento se estrecharían debido a: (1) eliminación del riesgo de moneda/devaluación dentro de la unión, (2) convergencia de expectativas de inflación, y (3) asunción implícita de que el riesgo crediticio también convergeríe. Los inversores compraron bonos periféricos de mayor rendimiento esperando que los rendimientos convergieran al Bund alemán, generando ganancias de capital. Sin embargo, esta estrategia subestimó la persistencia de diferenciales de riesgo crediticio soberano.",
          de: "Das Convergence Play basierte auf der theoretischen Erwartung, dass sich mit der Bewegung der Länder zur Währungsunion die Renditespreads verengen würden aufgrund von: (1) Beseitigung des Währungs-/Abwertungsrisikos innerhalb der Union, (2) Konvergenz der Inflationserwartungen, und (3) impliziter Annahme, dass Kreditrisiko auch konvergieren würde. Anleger kauften höher rentierende periphere Anleihen in der Erwartung, dass Renditen zum deutschen Bund konvergieren würden, was Kapitalgewinne generierte. Diese Strategie unterschätzte jedoch die Persistenz souveräner Kreditrisikodifferentiale.",
          nl: "Het convergence play was gebaseerd op de theoretische verwachting dat toen landen naar monetaire unie bewogen, yield spreads zouden versmallen vanwege: (1) eliminatie van valuta/devaluatierisico binnen de unie, (2) convergentie van inflatieverwachtingen, en (3) impliciete aanname dat kredietrisico ook zou convergeren. Beleggers kochten hoger renderende perifere obligaties verwachtend dat yields zouden convergeren naar de Duitse Bund, kapitaalwinsten genererend. Echter, deze strategie onderschatte de persistentie van soevereine kredietrisicodifferentialen."
        }
      },
      {
        question: {
          en: "How did New Trade Theory's insights about increasing returns and agglomeration effects influence expectations about European economic integration benefits?",
          es: "¿Cómo influyeron las ideas de la Nueva Teoría del Comercio sobre rendimientos crecientes y efectos de aglomeración en las expectativas sobre beneficios de integración económica europea?",
          de: "Wie beeinflussten die Erkenntnisse der Neuen Handelstheorie über steigende Erträge und Agglomerationseffekte die Erwartungen über die Vorteile der europäischen Wirtschaftsintegration?",
          nl: "Hoe beïnvloedden New Trade Theory's inzichten over toenemende rendementen en agglomeratie-effecten verwachtingen over Europese economische integratievoordelen?"
        },
        options: [
          { en: "Expectation of dynamic gains through specialization, economies of scale, and innovation clusters that would exceed static comparative advantage benefits", es: "Expectativa de ganancias dinámicas a través de especialización, economías de escala y clusters de innovación que excederían beneficios estáticos de ventaja comparativa", de: "Erwartung dynamischer Gewinne durch Spezialisierung, Skalenökonomien und Innovationscluster, die statische komparative Vorteile übertreffen würden", nl: "Verwachting van dynamische winsten door specialisatie, schaalvoordelen en innovatieclusters die statische comparatieve voordelen zouden overtreffen" },
          { en: "Simple tariff elimination benefits", es: "Beneficios simples de eliminación de aranceles", de: "Einfache Zollabbauvorteile", nl: "Eenvoudige tarifeliminatievoordelen" },
          { en: "Perfect competition assumptions", es: "Asunciones de competencia perfecta", de: "Annahmen perfekter Konkurrenz", nl: "Perfecte concurrentie aannames" },
          { en: "Focus on agricultural trade only", es: "Enfoque solo en comercio agrícola", de: "Fokus nur auf Agrarhandel", nl: "Focus alleen op landbouwhandel" }
        ],
        correct: 0,
        explanation: {
          en: "New Trade Theory suggested that integration benefits would go beyond traditional static comparative advantage gains to include dynamic effects from increasing returns to scale, monopolistic competition, and agglomeration economies. These theories predicted that monetary union would enhance these benefits by reducing transaction costs, promoting specialization, fostering innovation clusters, and creating 'home market effects' that would generate sustained productivity growth and industrial concentration in efficient locations.",
          es: "La Nueva Teoría del Comercio sugirió que los beneficios de integración irían más allá de las ganancias estáticas tradicionales de ventaja comparativa para incluir efectos dinámicos de rendimientos crecientes a escala, competencia monopolística y economías de aglomeración. Estas teorías predijeron que la unión monetaria mejoraría estos beneficios reduciendo costos de transacción, promoviendo especialización, fomentando clusters de innovación, y creando 'efectos de mercado doméstico' que generarían crecimiento sostenido de productividad y concentración industrial en ubicaciones eficientes.",
          de: "Die Neue Handelstheorie deutete darauf hin, dass Integrationsvorteile über traditionelle statische komparative Vorteile hinausgehen würden, um dynamische Effekte aus steigenden Skalenerträgen, monopolistischer Konkurrenz und Agglomerationsökonomien zu umfassen. Diese Theorien sagten voraus, dass die Währungsunion diese Vorteile durch Reduzierung von Transaktionskosten, Förderung von Spezialisierung, Förderung von Innovationsclustern und Schaffung von 'Heimmarkteffekten' verstärken würde, die nachhaltiges Produktivitätswachstum und industrielle Konzentration an effizienten Standorten generieren würden.",
          nl: "New Trade Theory suggereerde dat integratievoordelen zouden gaan voorbij traditionele statische comparatieve voordelen om dynamische effecten van toenemende schaalrendementen, monopolistische concurrentie en agglomeratie-economieën te omvatten. Deze theorieën voorspelden dat monetaire unie deze voordelen zou verbeteren door transactiekosten te verminderen, specialisatie te promoten, innovatieclusters te bevorderen, en 'thuismarkteffecten' te creëren die duurzame productiviteitsgroei en industriële concentratie op efficiënte locaties zouden genereren."
        }
      },
      {
        question: {
          en: "What was the theoretical justification for the ECB's initial reluctance to engage in lender-of-last-resort operations for sovereign debt markets?",
          es: "¿Cuál fue la justificación teórica para la renuencia inicial del BCE a involucrarse en operaciones de prestamista de última instancia para mercados de deuda soberana?",
          de: "Was war die theoretische Rechtfertigung für die anfängliche Zurückhaltung der EZB, sich an Lender-of-Last-Resort-Operationen für Staatsschuldenmärkte zu beteiligen?",
          nl: "Wat was de theoretische rechtvaardiging voor de ECB's initiële terughoudendheid om betrokken te raken bij lender-of-last-resort operaties voor soevereine schuldenmarkten?"
        },
        options: [
          { en: "Separation of monetary and fiscal domains to avoid moral hazard, preserve market discipline, and prevent fiscal dominance over monetary policy in accordance with Maastricht Treaty design", es: "Separación de dominios monetarios y fiscales para evitar riesgo moral, preservar disciplina de mercado, y prevenir dominancia fiscal sobre política monetaria de acuerdo con el diseño del Tratado de Maastricht", de: "Trennung monetärer und fiskalischer Bereiche zur Vermeidung von Moral Hazard, Bewahrung der Marktdisziplin und Verhinderung fiskalischer Dominanz über Geldpolitik gemäß Maastricht-Vertragsdesign", nl: "Scheiding van monetaire en fiscale domeinen om moral hazard te vermijden, marktdiscipline te behouden, en fiscale dominantie over monetair beleid te voorkomen in overeenstemming met Maastricht Verdrag ontwerp" },
          { en: "Technical inability to purchase bonds", es: "Incapacidad técnica para comprar bonos", de: "Technische Unfähigkeit, Anleihen zu kaufen", nl: "Technische onmogelijkheid om obligaties te kopen" },
          { en: "Lack of legal authority", es: "Falta de autoridad legal", de: "Mangel an rechtlicher Autorität", nl: "Gebrek aan wettelijke autoriteit" },
          { en: "Insufficient financial resources", es: "Recursos financieros insuficientes", de: "Unzureichende finanzielle Ressourcen", nl: "Onvoldoende financiële middelen" }
        ],
        correct: 0,
        explanation: {
          en: "The ECB's initial position reflected the Maastricht Treaty's institutional design emphasizing separation between monetary policy (ECB responsibility) and fiscal policy (national government responsibility). This separation was intended to preserve market discipline on government borrowing, prevent moral hazard where governments might borrow excessively expecting ECB support, and avoid fiscal dominance where fiscal needs could compromise price stability. The classical central banking view held that LOLR should apply to banks, not governments.",
          es: "La posición inicial del BCE reflejó el diseño institucional del Tratado de Maastricht enfatizando separación entre política monetaria (responsabilidad BCE) y política fiscal (responsabilidad del gobierno nacional). Esta separación pretendía preservar disciplina de mercado en endeudamiento gubernamental, prevenir riesgo moral donde gobiernos podrían endeudarse excesivamente esperando apoyo del BCE, y evitar dominancia fiscal donde necesidades fiscales podrían comprometer estabilidad de precios. La visión clásica de banca central sostenía que LOLR debería aplicarse a bancos, no gobiernos.",
          de: "Die anfängliche Position der EZB spiegelte das institutionelle Design des Maastricht-Vertrags wider, das die Trennung zwischen Geldpolitik (EZB-Verantwortung) und Fiskalpolitik (nationale Regierungsverantwortung) betonte. Diese Trennung sollte Marktdisziplin bei Staatsverschuldung bewahren, Moral Hazard verhindern, bei dem Regierungen übermäßig leihen könnten in Erwartung von EZB-Unterstützung, und fiskalische Dominanz vermeiden, bei der fiskalische Bedürfnisse die Preisstabilität gefährden könnten. Die klassische Zentralbanksichtweise hielt, dass LOLR auf Banken, nicht Regierungen angewendet werden sollte.",
          nl: "De ECB's initiële positie weerspiegelde het Maastricht Verdrag's institutionele ontwerp dat scheiding benadrukte tussen monetair beleid (ECB verantwoordelijkheid) en fiscaal beleid (nationale regering verantwoordelijkheid). Deze scheiding was bedoeld om marktdiscipline op overheidsleningen te behouden, moral hazard te voorkomen waarbij overheden overdadig zouden kunnen lenen verwachtend ECB-steun, en fiscale dominantie te vermijden waarbij fiscale behoeften prijsstabiliteit zouden kunnen compromitteren. De klassieke centrale bankvisie hield dat LOLR zou moeten gelden voor banken, niet overheden."
        }
      },
      {
        question: {
          en: "How did the Lucas Critique influence the ECB's approach to macroeconomic modeling and policy evaluation?",
          es: "¿Cómo influyó la Crítica de Lucas en el enfoque del BCE hacia el modelado macroeconómico y evaluación de políticas?",
          de: "Wie beeinflusste die Lucas-Kritik den EZB-Ansatz zur makroökonomischen Modellierung und Politikbewertung?",
          nl: "Hoe beïnvloedde de Lucas Critique de ECB's benadering van macro-economische modellering en beleidsevaluatie?"
        },
        options: [
          { en: "Emphasis on structural modeling with microfoundations and rational expectations to ensure policy evaluations account for behavioral responses to regime changes", es: "Énfasis en modelado estructural con microfundamentos y expectativas racionales para asegurar que evaluaciones de políticas tengan en cuenta respuestas conductuales a cambios de régimen", de: "Betonung struktureller Modellierung mit Mikrofundamenten und rationalen Erwartungen zur Sicherstellung, dass Politikbewertungen Verhaltensreaktionen auf Regimewechsel berücksichtigen", nl: "Nadruk op structurele modellering met microfunderingen en rationele verwachtingen om ervoor te zorgen dat beleidsevaluaties rekening houden met gedragsreacties op regimeveranderingen" },
          { en: "Reliance only on historical correlations", es: "Dependencia solo de correlaciones históricas", de: "Vertrauen nur auf historische Korrelationen", nl: "Vertrouwen alleen op historische correlaties" },
          { en: "Ignoring expectation formation", es: "Ignorar formación de expectativas", de: "Erwartungsbildung ignorieren", nl: "Verwachtingsvorming negeren" },
          { en: "Using only reduced-form models", es: "Usar solo modelos de forma reducida", de: "Nur reduzierte Modelle verwenden", nl: "Alleen reduced-form modellen gebruiken" }
        ],
        correct: 0,
        explanation: {
          en: "The Lucas Critique demonstrated that econometric relationships could break down when policy regimes change because agents alter their behavior in response to new policies. This insight led the ECB to emphasize structural models with explicit microfoundations and rational expectations, such as Dynamic Stochastic General Equilibrium (DSGE) models, which aim to capture invariant behavioral relationships that remain stable across different policy regimes, enabling more reliable policy analysis and forecasting.",
          es: "La Crítica de Lucas demostró que las relaciones econométricas podrían romperse cuando los regímenes de política cambian porque los agentes alteran su comportamiento en respuesta a nuevas políticas. Esta perspicacia llevó al BCE a enfatizar modelos estructurales con microfundamentos explícitos y expectativas racionales, como modelos de Equilibrio General Dinámico Estocástico (DSGE), que buscan capturar relaciones conductuales invariantes que permanecen estables a través de diferentes regímenes de política, habilitando análisis y pronósticos de política más confiables.",
          de: "Die Lucas-Kritik zeigte, dass ökonometrische Beziehungen zusammenbrechen könnten, wenn sich Politikregime ändern, weil Akteure ihr Verhalten als Reaktion auf neue Politiken ändern. Diese Erkenntnis führte dazu, dass die EZB strukturelle Modelle mit expliziten Mikrofundamenten und rationalen Erwartungen betonte, wie Dynamische Stochastische Allgemeine Gleichgewichts (DSGE)-Modelle, die darauf abzielen, invariante Verhaltensbeziehungen zu erfassen, die über verschiedene Politikregime stabil bleiben und zuverlässigere Politikanalyse und Prognosen ermöglichen.",
          nl: "De Lucas Critique toonde aan dat econometrische relaties zouden kunnen afbreken wanneer beleidsregimes veranderen omdat agenten hun gedrag aanpassen in reactie op nieuw beleid. Dit inzicht leidde de ECB ertoe structurele modellen te benadrukken met expliciete microfunderingen en rationele verwachtingen, zoals Dynamische Stochastische Algemene Evenwichts (DSGE) modellen, die beogen invariante gedragsrelaties vast te leggen die stabiel blijven over verschillende beleidsregimes, waardoor betrouwbaardere beleidsanalyse en voorspelling mogelijk wordt."
        }
      },
      {
        question: {
          en: "What was the economic logic behind the original design of TARGET (Trans-European Automated Real-time Gross settlement Express Transfer system) for the euro area?",
          es: "¿Cuál fue la lógica económica detrás del diseño original de TARGET (Sistema de Transferencia Expresa Automatizada Trans-Europea de Liquidación Bruta en Tiempo Real) para el área del euro?",
          de: "Was war die wirtschaftliche Logik hinter dem ursprünglichen Design von TARGET (Trans-European Automated Real-time Gross settlement Express Transfer system) für den Euroraum?",
          nl: "Wat was de economische logica achter het oorspronkelijke ontwerp van TARGET (Trans-European Automated Real-time Gross settlement Express Transfer system) voor het eurogebied?"
        },
        options: [
          { en: "Creating unified payment infrastructure to ensure equal access to central bank money across borders, supporting monetary policy transmission and financial market integration", es: "Crear infraestructura de pagos unificada para asegurar acceso igual a dinero del banco central a través de fronteras, apoyando transmisión de política monetaria e integración de mercados financieros", de: "Schaffung einheitlicher Zahlungsinfrastruktur zur Gewährleistung gleichen Zugangs zu Zentralbankgeld grenzüberschreitend, Unterstützung geldpolitischer Transmission und Finanzmarktintegration", nl: "Creëren van uniforme betalingsinfrastructuur om gelijke toegang tot centraal bankgeld over grenzen te waarborgen, ondersteunend monetaire beleidstransmissie en financiële marktintegratie" },
          { en: "Reducing payment system costs only", es: "Reducir solo costos del sistema de pagos", de: "Nur Zahlungssystemkosten reduzieren", nl: "Alleen betalingssysteemkosten verminderen" },
          { en: "Replacing all national currencies", es: "Reemplazar todas las monedas nacionales", de: "Alle nationalen Währungen ersetzen", nl: "Alle nationale valuta's vervangen" },
          { en: "Eliminating commercial banks", es: "Eliminar bancos comerciales", de: "Geschäftsbanken eliminieren", nl: "Commerciële banken elimineren" }
        ],
        correct: 0,
        explanation: {
          en: "TARGET was designed as the backbone payment system for the euro area to ensure that all eligible counterparties would have equal access to central bank money regardless of their location, eliminating the 'home bias' in payment systems that could fragment monetary policy transmission. This infrastructure was crucial for creating a level playing field in financial markets, supporting the integration necessary for effective single monetary policy implementation across the diverse eurozone financial landscape.",
          es: "TARGET fue diseñado como el sistema de pagos vertebral para el área del euro para asegurar que todas las contrapartes elegibles tuvieran acceso igual a dinero del banco central independientemente de su ubicación, eliminando el 'sesgo doméstico' en sistemas de pagos que podría fragmentar la transmisión de política monetaria. Esta infraestructura fue crucial para crear condiciones equitativas en mercados financieros, apoyando la integración necesaria para implementación efectiva de política monetaria única a través del diverso paisaje financiero de la eurozona.",
          de: "TARGET wurde als Rückgrat-Zahlungssystem für den Euroraum entwickelt, um sicherzustellen, dass alle berechtigten Geschäftspartner gleichen Zugang zu Zentralbankgeld unabhängig von ihrem Standort haben, wodurch der 'Heimvorteil' in Zahlungssystemen eliminiert wird, der die geldpolitische Transmission fragmentieren könnte. Diese Infrastruktur war entscheidend für die Schaffung gleicher Wettbewerbsbedingungen in Finanzmärkten und unterstützte die für eine effektive einheitliche Geldpolitikumsetzung in der vielfältigen Eurozone-Finanzlandschaft notwendige Integration.",
          nl: "TARGET was ontworpen als het ruggengraat betalingssysteem voor het eurogebied om ervoor te zorgen dat alle berechtigde tegenpartijen gelijke toegang zouden hebben tot centraal bankgeld ongeacht hun locatie, eliminerend de 'thuisbias' in betalingssystemen die monetaire beleidstransmissie zou kunnen fragmenteren. Deze infrastructuur was cruciaal voor het creëren van gelijke condities in financiële markten, ondersteunend de integratie noodzakelijk voor effectieve enkele monetaire beleidsimplementatie over het diverse eurozone financiële landschap."
        }
      },
      {
        question: {
          en: "How did the theory of currency substitution influence the design of euro banknotes and their anti-counterfeiting features?",
          es: "¿Cómo influyó la teoría de sustitución de monedas en el diseño de billetes de euro y sus características antifalsilicación?",
          de: "Wie beeinflusste die Theorie der Währungssubstitution das Design der Euro-Banknoten und ihre Fälschungsschutzmerkmale?",
          nl: "Hoe beïnvloedde de theorie van valutasubstitutie het ontwerp van eurobankbiljetten en hun anti-vervalsingskenmerken?"
        },
        options: [
          { en: "Recognition that public confidence and trust in physical currency security were essential for euro acceptance and adoption as store of value and medium of exchange", es: "Reconocimiento de que la confianza pública y fe en la seguridad de moneda física eran esenciales para aceptación del euro y adopción como reserva de valor y medio de intercambio", de: "Anerkennung, dass öffentliches Vertrauen und Zuversicht in physische Währungssicherheit für Euro-Akzeptanz und Adoption als Wertaufbewahrungsmittel und Tauschmittel wesentlich waren", nl: "Erkenning dat publiek vertrouwen en geloof in fysieke valutaveiligheid essentieel waren voor euro-acceptatie en adoptie als waardeopslag en ruilmiddel" },
          { en: "Artistic design preferences", es: "Preferencias de diseño artístico", de: "Künstlerische Designpräferenzen", nl: "Artistieke ontwerpvoorkeuren" },
          { en: "Manufacturing cost reduction", es: "Reducción de costos de fabricación", de: "Herstellungskostenreduzierung", nl: "Productiekostenverlaging" },
          { en: "International fashion trends", es: "Tendencias de moda internacional", de: "Internationale Modetrends", nl: "Internationale modetrends" }
        ],
        correct: 0,
        explanation: {
          en: "Currency substitution theory emphasizes that acceptance of a new currency depends critically on public confidence in its integrity and security. The euro's sophisticated anti-counterfeiting features (holograms, microprinting, color-changing inks, raised printing, watermarks, and security threads) were designed to establish immediate credibility and prevent substitution away from the euro toward other currencies. Public trust in currency security was seen as fundamental for the euro's function as money and its acceptance across diverse European populations with different historical experiences with currency stability.",
          es: "La teoría de sustitución de monedas enfatiza que la aceptación de una nueva moneda depende críticamente de la confianza pública en su integridad y seguridad. Las características antifalsilicación sofisticadas del euro (hologramas, microimpresión, tintas que cambian de color, impresión en relieve, marcas de agua e hilos de seguridad) fueron diseñadas para establecer credibilidad inmediata y prevenir sustitución del euro hacia otras monedas. La confianza pública en seguridad de moneda fue vista como fundamental para la función del euro como dinero y su aceptación en poblaciones europeas diversas con diferentes experiencias históricas con estabilidad monetaria.",
          de: "Die Währungssubstitutionstheorie betont, dass die Akzeptanz einer neuen Währung kritisch vom öffentlichen Vertrauen in ihre Integrität und Sicherheit abhängt. Die sophistizierten Fälschungsschutzmerkmale des Euro (Hologramme, Mikrodruck, farbwechselnde Tinten, Reliefdruck, Wasserzeichen und Sicherheitsfäden) wurden entwickelt, um sofortige Glaubwürdigkeit zu etablieren und Substitution vom Euro hin zu anderen Währungen zu verhindern. Öffentliches Vertrauen in Währungssicherheit wurde als fundamental für die Funktion des Euro als Geld und seine Akzeptanz in verschiedenen europäischen Bevölkerungen mit unterschiedlichen historischen Erfahrungen mit Währungsstabilität angesehen.",
          nl: "Valutasubstitutietheorie benadrukt dat acceptatie van een nieuwe valuta kritisch afhangt van publiek vertrouwen in zijn integriteit en veiligheid. De euro's geavanceerde anti-vervalsingskenmerken (hologrammen, microdruk, kleurveranderende inkten, reliëfdruk, watermerken en veiligheidsdraadjes) waren ontworpen om onmiddellijke geloofwaardigheid te vestigen en substitutie weg van de euro naar andere valuta's te voorkomen. Publiek vertrouwen in valutaveiligheid werd gezien als fundamenteel voor de euro's functie als geld en zijn acceptatie over diverse Europese bevolkingen met verschillende historische ervaringen met valutastabiliteit."
        }
      },
      {
        question: {
          en: "What was the role of the 'neo-chartalist' or Modern Monetary Theory (MMT) perspective in debates about eurozone fiscal architecture design?",
          es: "¿Cuál fue el papel de la perspectiva 'neo-cartalista' o Teoría Monetaria Moderna (MMT) en debates sobre diseño de arquitectura fiscal de la eurozona?",
          de: "Welche Rolle spielte die 'neo-chartalistische' oder Modern Monetary Theory (MMT)-Perspektive in Debatten über das Design der Eurozone-Fiskalarchitektur?",
          nl: "Wat was de rol van het 'neo-chartalist' of Modern Monetary Theory (MMT) perspectief in debatten over eurozone fiscale architectuur ontwerp?"
        },
        options: [
          { en: "Critical opposition arguing that monetary union without fiscal union creates artificial constraints on government spending capacity and removes essential macroeconomic stabilization tools", es: "Oposición crítica argumentando que unión monetaria sin unión fiscal crea restricciones artificiales en capacidad de gasto gubernamental y remueve herramientas esenciales de estabilización macroeconómica", de: "Kritische Opposition argumentierend, dass Währungsunion ohne Fiskalunion künstliche Beschränkungen der staatlichen Ausgabenkapazität schafft und wesentliche makroökonomische Stabilisierungstools entfernt", nl: "Kritische oppositie argumenterend dat monetaire unie zonder fiscale unie kunstmatige beperkingen op overheidsbestedingscapaciteit creëert en essentiële macro-economische stabilisatietools wegneemt" },
          { en: "Full support for the euro design", es: "Apoyo total para el diseño del euro", de: "Volle Unterstützung für das Euro-Design", nl: "Volledige steun voor het euro-ontwerp" },
          { en: "Indifference to institutional arrangements", es: "Indiferencia a arreglos institucionales", de: "Gleichgültigkeit gegenüber institutionellen Arrangements", nl: "Onverschilligheid voor institutionele arrangementen" },
          { en: "Focus only on microeconomic efficiency", es: "Enfoque solo en eficiencia microeconómica", de: "Fokus nur auf mikroökonomische Effizienz", nl: "Focus alleen op micro-economische efficiëntie" }
        ],
        correct: 0,
        explanation: {
          en: "Neo-chartalist/MMT economists argued that the eurozone's institutional design was fundamentally flawed because it separated monetary sovereignty (centralized at ECB) from fiscal sovereignty (retained by nations), creating what they saw as artificial constraints on government spending. They contended that countries could no longer use their fiscal capacity for macroeconomic stabilization since they couldn't issue debt in a currency they controlled, making them vulnerable to self-fulfilling liquidity crises and requiring either full fiscal union or return to national currencies.",
          es: "Los economistas neo-cartalistas/MMT argumentaron que el diseño institucional de la eurozona era fundamentalmente defectuoso porque separaba soberanía monetaria (centralizada en BCE) de soberanía fiscal (retenida por naciones), creando lo que veían como restricciones artificiales en gasto gubernamental. Contendieron que los países ya no podrían usar su capacidad fiscal para estabilización macroeconómica ya que no podían emitir deuda en una moneda que controlaran, haciéndolos vulnerables a crisis de liquidez autocumplidas y requiriendo unión fiscal completa o retorno a monedas nacionales.",
          de: "Neo-chartalistische/MMT-Ökonomen argumentierten, dass das institutionelle Design der Eurozone grundlegend fehlerhaft war, weil es monetäre Souveränität (zentralisiert bei der EZB) von fiskalischer Souveränität (bei Nationen behalten) trennte, wodurch das geschaffen wurde, was sie als künstliche Beschränkungen staatlicher Ausgaben sahen. Sie behaupteten, dass Länder ihre fiskalische Kapazität nicht mehr für makroökonomische Stabilisierung nutzen könnten, da sie keine Schulden in einer Währung ausgeben könnten, die sie kontrollierten, was sie anfällig für sich selbst erfüllende Liquiditätskrisen machte und entweder vollständige Fiskalunion oder Rückkehr zu nationalen Währungen erforderte.",
          nl: "Neo-chartalist/MMT economen beweerden dat het institutionele ontwerp van de eurozone fundamenteel gebrekkig was omdat het monetaire soevereiniteit (gecentraliseerd bij ECB) scheidde van fiscale soevereiniteit (behouden door naties), creërend wat zij zagen als kunstmatige beperkingen op overheidsuitgaven. Zij beweerden dat landen hun fiscale capaciteit niet langer konden gebruiken voor macro-economische stabilisatie omdat ze geen schuld konden uitgeven in een valuta die ze controleerden, waardoor ze kwetsbaar werden voor zichzelf vervullende liquiditeitscrises en volledige fiscale unie of terugkeer naar nationale valuta's vereisten."
        }
      },
      {
        question: {
          en: "What is the theoretical significance of the 'impossible trinity' or Mundell-Fleming trilemma in eurozone design?",
          es: "¿Cuál es la importancia teórica de la 'trinidad imposible' o trilema de Mundell-Fleming en el diseño de la eurozona?",
          de: "Was ist die theoretische Bedeutung der 'unmöglichen Dreierbeziehung' oder des Mundell-Fleming-Trilemmas im Eurozone-Design?",
          nl: "Wat is de theoretische betekenis van de 'onmogelijke driehoek' of Mundell-Fleming trilemmma in eurozone-ontwerp?"
        },
        options: [
          { en: "Countries cannot simultaneously maintain fixed exchange rates, independent monetary policy, and free capital flows", es: "Los países no pueden mantener simultáneamente tipos de cambio fijos, política monetaria independiente y flujos de capital libres", de: "Länder können nicht gleichzeitig feste Wechselkurse, unabhängige Geldpolitik und freie Kapitalflüsse aufrechterhalten", nl: "Landen kunnen niet gelijktijdig vaste wisselkoersen, onafhankelijk monetair beleid en vrije kapitalstromen handhaven" },
          { en: "Monetary union requires unanimous agreement on all policies", es: "La unión monetaria requiere acuerdo unánime en todas las políticas", de: "Währungsunion erfordert einstimmige Zustimmung zu allen Politiken", nl: "Monetaire unie vereist unanieme overeenstemming over alle beleidsmaatregelen" },
          { en: "Three countries minimum needed for currency union", es: "Mínimo tres países necesarios para unión monetaria", de: "Mindestens drei Länder für Währungsunion erforderlich", nl: "Minimaal drie landen nodig voor valutaunie" },
          { en: "Economic integration occurs in three phases", es: "La integración económica ocurre en tres fases", de: "Wirtschaftsintegration erfolgt in drei Phasen", nl: "Economische integratie vindt plaats in drie fasen" }
        ],
        correct: 0,
        explanation: {
          en: "The Mundell-Fleming trilemma states that a country can achieve only two of three objectives: fixed exchange rates, independent monetary policy, and free capital mobility. The eurozone resolved this by adopting fixed exchange rates (ultimately a single currency) and free capital flows, but sacrificing independent national monetary policies in favor of a common ECB policy. This explains why member countries lost the ability to use exchange rate adjustments and monetary policy for economic stabilization.",
          es: "El trilema de Mundell-Fleming establece que un país puede lograr solo dos de tres objetivos: tipos de cambio fijos, política monetaria independiente y movilidad de capital libre. La eurozona resolvió esto adoptando tipos de cambio fijos (últimamente una moneda única) y flujos de capital libres, pero sacrificando políticas monetarias nacionales independientes a favor de una política común del BCE. Esto explica por qué los países miembros perdieron la capacidad de usar ajustes del tipo de cambio y política monetaria para estabilización económica.",
          de: "Das Mundell-Fleming-Trilemma besagt, dass ein Land nur zwei von drei Zielen erreichen kann: feste Wechselkurse, unabhängige Geldpolitik und freie Kapitalmobilität. Die Eurozone löste dies durch Annahme fester Wechselkurse (letztendlich eine einheitliche Währung) und freier Kapitalflüsse, opferte aber unabhängige nationale Geldpolitiken zugunsten einer gemeinsamen EZB-Politik. Dies erklärt, warum Mitgliedsländer die Fähigkeit verloren, Wechselkursanpassungen und Geldpolitik für wirtschaftliche Stabilisierung zu nutzen.",
          nl: "Het Mundell-Fleming trilemma stelt dat een land slechts twee van drie doelstellingen kan bereiken: vaste wisselkoersen, onafhankelijk monetair beleid en vrije kapitalmobiliteit. De eurozone loste dit op door vaste wisselkoersen (uiteindelijk een enkele valuta) en vrije kapitalstromen aan te nemen, maar door onafhankelijke nationale monetaire beleidsmaatregelen op te offeren ten gunste van een gemeenschappelijk ECB-beleid. Dit verklaart waarom lidstaten het vermogen verloren om wisselkoersaanpassingen en monetair beleid te gebruiken voor economische stabilisatie."
        }
      }
    ]
  };

  // Export for use in the quiz application
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level9;
  } else if (typeof window !== 'undefined') {
    window.level9 = level9;
  }
})();