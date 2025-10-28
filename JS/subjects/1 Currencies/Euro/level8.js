// Quiz Level 8: Currencies - Euro (Expert)
(function() {
  const level8 = {
    name: {
      en: "Euro Currency - Expert",
      es: "Moneda Euro - Experto",
      de: "Euro-Währung - Experte",
      nl: "Euro Munt - Expert"
    },
    questions: [
      {
        question: {
          en: "What was the theoretical foundation behind Mario Draghi's 'whatever it takes' speech and the subsequent OMT programme design?",
          es: "¿Cuál fue la base teórica detrás del discurso 'whatever it takes' de Mario Draghi y el diseño subsecuente del programa OMT?",
          de: "Was war die theoretische Grundlage für Mario Draghis 'whatever it takes'-Rede und das anschließende OMT-Programmdesign?",
          nl: "Wat was de theoretische basis achter Mario Draghi's 'whatever it takes' toespraak en het daaropvolgende OMT-programmaontwerp?"
        },
        options: [
          { en: "Elimination of redenomination risk through credible commitment to eurozone integrity", es: "Eliminación del riesgo de redenominación a través del compromiso creíble con la integridad de la eurozona", de: "Beseitigung des Redenominierungsrisikos durch glaubwürdige Verpflichtung zur Eurozone-Integrität", nl: "Eliminatie van redenominatierisico door geloofwaardige verbintenis tot eurozone-integriteit" },
          { en: "Direct government deficit financing", es: "Financiación directa del déficit gubernamental", de: "Direkte Staatsdefizitfinanzierung", nl: "Directe overheidsdeficitfinanciering" },
          { en: "Exchange rate manipulation", es: "Manipulación del tipo de cambio", de: "Wechselkursmanipulation", nl: "Wisselkoersmanipulatie" },
          { en: "Unconditional quantitative easing", es: "Relajación cuantitativa incondicional", de: "Bedingungslose quantitative Lockerung", nl: "Onvoorwaardelijke kwantitatieve versoepeling" }
        ],
        correct: 0,
        explanation: {
          en: "The OMT was designed to eliminate 'redenomination risk' - the fear that countries might leave the eurozone and reintroduce national currencies. By providing a credible backstop for sovereign bonds, it removed the self-fulfilling prophecy element from sovereign debt crises, restoring the proper transmission of monetary policy.",
          es: "El OMT fue diseñado para eliminar el 'riesgo de redenominación' - el temor de que los países pudieran dejar la eurozona y reintroducir monedas nacionales. Al proporcionar un respaldo creíble para bonos soberanos, eliminó el elemento de profecía autocumplida de las crisis de deuda soberana, restaurando la transmisión adecuada de la política monetaria.",
          de: "Das OMT wurde entwickelt, um das 'Redenominierungsrisiko' zu beseitigen - die Befürchtung, dass Länder die Eurozone verlassen und nationale Währungen wieder einführen könnten. Durch eine glaubwürdige Absicherung für Staatsanleihen wurde das sich selbst erfüllende Prophezeiungselement aus Staatsschuldenkrisen entfernt und die ordnungsgemäße Übertragung der Geldpolitik wiederhergestellt.",
          nl: "Het OMT was ontworpen om 'redenominatierisico' te elimineren - de vrees dat landen de eurozone zouden verlaten en nationale valuta's zouden herintroduceren. Door een geloofwaardige backstop voor soevereine obligaties te bieden, verwijderde het het zich zelf vervullende profetie-element uit soevereine schuldencrises, waardoor de juiste transmissie van monetair beleid werd hersteld."
        }
      },
      {
        question: {
          en: "In the context of the eurozone sovereign debt crisis, what was the 'doom loop' mechanism between banks and sovereigns?",
          es: "En el contexto de la crisis de deuda soberana de la eurozona, ¿cuál fue el mecanismo del 'ciclo de perdición' entre bancos y soberanos?",
          de: "Im Kontext der Eurozone-Staatsschuldenkrise, was war der 'Teufelskreis'-Mechanismus zwischen Banken und Staaten?",
          nl: "In de context van de eurozone soevereine schuldencrisis, wat was het 'doom loop' mechanisme tussen banken en soevereinen?"
        },
        options: [
          { en: "Deteriorating sovereign creditworthiness weakened bank balance sheets holding sovereign bonds, while weak banks increased fiscal costs for government support", es: "El deterioro de la solvencia soberana debilitó los balances bancarios que tenían bonos soberanos, mientras que bancos débiles aumentaron los costos fiscales para el apoyo gubernamental", de: "Sich verschlechternde Staatskreditwürdigkeit schwächte Bankbilanzen mit Staatsanleihen, während schwache Banken die Finanzkosten für staatliche Unterstützung erhöhten", nl: "Verslechterende soevereine kredietwaardigheid verzwakte bankbalansen die soevereine obligaties hielden, terwijl zwakke banken fiscale kosten voor overheidssteun verhoogden" },
          { en: "Central bank policies automatically triggered sovereign defaults", es: "Las políticas del banco central automáticamente desencadenaron defaults soberanos", de: "Zentralbankpolitiken lösten automatisch Staatsausfälle aus", nl: "Centrale bankbeleid activeerde automatisch soevereine defaults" },
          { en: "Exchange rate fluctuations created banking instability", es: "Las fluctuaciones del tipo de cambio crearon inestabilidad bancaria", de: "Wechselkursschwankungen schufen Bankinstabilität", nl: "Wisselkoersfluctuaties creëerden bankinstabiliteit" },
          { en: "Inflation expectations destabilized both sectors simultaneously", es: "Las expectativas de inflación desestabilizaron ambos sectores simultáneamente", de: "Inflationserwartungen destabilisierten beide Sektoren gleichzeitig", nl: "Inflatieverwachtingen destabiliseerden beide sectoren gelijktijdig" }
        ],
        correct: 0,
        explanation: {
          en: "The doom loop describes a vicious cycle where deteriorating sovereign credit quality weakened banks holding large amounts of government bonds, while governments faced increased fiscal pressure from potential bank bailouts. This created a self-reinforcing crisis dynamic that amplified stress in both the banking and sovereign sectors, particularly in peripheral eurozone countries.",
          es: "El ciclo de perdición describe un círculo vicioso donde el deterioro de la calidad crediticia soberana debilitó a los bancos que tenían grandes cantidades de bonos gubernamentales, mientras que los gobiernos enfrentaron mayor presión fiscal por posibles rescates bancarios. Esto creó una dinámica de crisis auto-reforzante que amplificó el estrés tanto en el sector bancario como en el soberano, particularmente en países periféricos de la eurozona.",
          de: "Der Teufelskreis beschreibt einen Teufelskreis, bei dem sich verschlechternde Staatskreditqualität Banken schwächte, die große Mengen Staatsanleihen hielten, während Regierungen erhöhtem fiskalischen Druck durch potenzielle Bankrettungen ausgesetzt waren. Dies schuf eine sich selbst verstärkende Krisendynamik, die Stress sowohl im Bank- als auch im Staatssektor verstärkte, besonders in peripheren Eurozone-Ländern.",
          nl: "De doom loop beschrijft een vicieuze cirkel waarbij verslechterende soevereine kredietkwaliteit banken verzwakte die grote hoeveelheden overheidsobligaties hielden, terwijl overheden verhoogde fiscale druk ondervonden van potentiële bankreddingen. Dit creëerde een zichzelf versterkende crisisdynamiek die stress vergrootte in zowel de bank- als soevereine sectoren, vooral in perifere eurozone landen."
        }
      },
      {
        question: {
          en: "What was the core institutional design flaw that the eurozone crisis exposed regarding optimal currency area theory?",
          es: "¿Cuál fue la falla central de diseño institucional que la crisis de la eurozona expuso respecto a la teoría del área monetaria óptima?",
          de: "Was war der zentrale institutionelle Designfehler, den die Eurozone-Krise bezüglich der Theorie optimaler Währungsräume aufdeckte?",
          nl: "Wat was de kerninstituionele ontwerpfout die de eurozone-crisis blootlegde betreffende de optimale valutagebiedtheorie?"
        },
        options: [
          { en: "Incomplete fiscal integration combined with asymmetric shock absorption capacity and no fiscal risk-sharing mechanism", es: "Integración fiscal incompleta combinada con capacidad asimétrica de absorción de choques y ningún mecanismo de compartición de riesgos fiscales", de: "Unvollständige fiskalische Integration kombiniert mit asymmetrischer Schockabsorptionskapazität und keinem fiskalischen Risikoteilungsmechanismus", nl: "Onvolledige fiscale integratie gecombineerd met asymmetrische schokverwerkingscapaciteit en geen fiscaal risicodelingmechanisme" },
          { en: "Excessive monetary policy accommodation", es: "Acomodación excesiva de política monetaria", de: "Übermäßige geldpolitische Akkommodierung", nl: "Overmatige monetaire beleidsaccommodatie" },
          { en: "Inadequate banking supervision", es: "Supervisión bancaria inadecuada", de: "Unzureichende Bankenaufsicht", nl: "Ontoereikend banktoezicht" },
          { en: "Insufficient capital market integration", es: "Integración insuficiente del mercado de capitales", de: "Unzureichende Kapitalmarktintegration", nl: "Onvoldoende kapitaalmarktintegratie" }
        ],
        correct: 0,
        explanation: {
          en: "The crisis revealed that the eurozone lacked the fiscal federalism necessary for an optimal currency area. Without fiscal risk-sharing mechanisms, automatic stabilizers, or significant labor mobility, member countries couldn't adequately absorb asymmetric shocks. This created unsustainable current account imbalances and divergent competitiveness trends that monetary policy alone couldn't address.",
          es: "La crisis reveló que la eurozona carecía del federalismo fiscal necesario para un área monetaria óptima. Sin mecanismos de compartición de riesgos fiscales, estabilizadores automáticos, o movilidad laboral significativa, los países miembros no pudieron absorber adecuadamente choques asimétricos. Esto creó desequilibrios insostenibles de cuenta corriente y tendencias divergentes de competitividad que la política monetaria sola no pudo abordar.",
          de: "Die Krise offenbarte, dass der Eurozone der für einen optimalen Währungsraum notwendige Fiskalföderalismus fehlte. Ohne fiskalische Risikoteilungsmechanismen, automatische Stabilisatoren oder erhebliche Arbeitsmobilität konnten Mitgliedsländer asymmetrische Schocks nicht angemessen absorbieren. Dies schuf nicht nachhaltige Leistungsbilanzungleichgewichte und divergierende Wettbewerbsfähigkeitstrends, die die Geldpolitik allein nicht bewältigen konnte.",
          nl: "De crisis onthulde dat de eurozone het fiscale federalisme miste dat nodig is voor een optimaal valutagebied. Zonder fiscale risicodelingmechanismen, automatische stabilisatoren, of significante arbeidsmobiliteit konden lidstaten asymmetrische schokken niet adequaat absorberen. Dit creëerde onhoudbare lopende rekening onevenwichtigheden en divergerende competitiviteitstrends die monetair beleid alleen niet kon aanpakken."
        }
      },
      {
        question: {
          en: "How did the ECB's Securities Markets Programme (SMP) differ conceptually from later quantitative easing programmes?",
          es: "¿Cómo difirió conceptualmente el Programa de Mercados de Valores (SMP) del BCE de los programas posteriores de relajación cuantitativa?",
          de: "Wie unterschied sich das Wertpapiermarktprogramm (SMP) der EZB konzeptuell von späteren quantitativen Lockerungsprogrammen?",
          nl: "Hoe verschilde het Securities Markets Programme (SMP) van de ECB conceptueel van latere kwantitatieve versoepeling programma's?"
        },
        options: [
          { en: "SMP was sterilized to avoid monetary expansion, focusing on market functioning rather than monetary stimulus", es: "SMP fue esterilizado para evitar expansión monetaria, enfocándose en el funcionamiento del mercado en lugar de estímulo monetario", de: "SMP wurde sterilisiert, um monetäre Expansion zu vermeiden, mit Fokus auf Marktfunktionieren statt monetärer Stimulation", nl: "SMP werd gesteriliseerd om monetaire expansie te vermijden, gericht op marktfunctionering in plaats van monetaire stimulans" },
          { en: "SMP only purchased corporate bonds", es: "SMP solo compró bonos corporativos", de: "SMP kaufte nur Unternehmensanleihen", nl: "SMP kocht alleen bedrijfsobligaties" },
          { en: "SMP operated with unlimited amounts", es: "SMP operó con cantidades ilimitadas", de: "SMP operierte mit unbegrenzten Beträgen", nl: "SMP opereerde met onbeperkte bedragen" },
          { en: "SMP was fully automated", es: "SMP fue totalmente automatizado", de: "SMP war vollautomatisiert", nl: "SMP was volledig geautomatiseerd" }
        ],
        correct: 0,
        explanation: {
          en: "The SMP was fundamentally different from QE as it was fully sterilized - the liquidity injected through bond purchases was withdrawn through other operations, ensuring no net increase in the monetary base. Its purpose was to restore proper price formation and market functioning in dysfunctional sovereign bond markets, not to provide monetary stimulus through portfolio balance effects.",
          es: "El SMP fue fundamentalmente diferente del QE ya que fue totalmente esterilizado - la liquidez inyectada a través de compras de bonos fue retirada a través de otras operaciones, asegurando ningún aumento neto en la base monetaria. Su propósito fue restaurar la formación adecuada de precios y el funcionamiento del mercado en mercados disfuncionales de bonos soberanos, no proporcionar estímulo monetario a través de efectos de balance de portafolio.",
          de: "Das SMP war grundlegend verschieden von QE, da es vollständig sterilisiert war - die durch Anleihenankäufe injizierte Liquidität wurde durch andere Operationen wieder abgezogen, um sicherzustellen, dass die Geldbasis netto nicht erhöht wurde. Sein Zweck war es, ordnungsgemäße Preisbildung und Marktfunktionieren in dysfunktionalen Staatsanleihmärkten wiederherzustellen, nicht monetäre Stimulation durch Portfoliobalance-Effekte zu bieten.",
          nl: "Het SMP was fundamenteel anders dan QE omdat het volledig gesteriliseerd was - de liquiditeit geïnjecteerd door obligatieaankopen werd weggenomen door andere operaties, waardoor geen netto toename in de monetaire basis werd gewaarborgd. Het doel was het herstellen van juiste prijsvorming en marktfunctionering in disfunctionele soevereine obligatiemarkten, niet het bieden van monetaire stimulans door portefeuillebalanseffecten."
        }
      },
      {
        question: {
          en: "What was the significance of the German Constitutional Court's 2020 ruling on the ECB's asset purchase programmes?",
          es: "¿Cuál fue la importancia de la decisión de 2020 del Tribunal Constitucional Alemán sobre los programas de compra de activos del BCE?",
          de: "Was war die Bedeutung der Entscheidung des deutschen Bundesverfassungsgerichts von 2020 zu den Ankaufprogrammen der EZB?",
          nl: "Wat was de betekenis van de uitspraak van het Duitse Grondwettelijke Hof in 2020 over de activaaankopprogramma's van de ECB?"
        },
        options: [
          { en: "It challenged ECB independence by requiring proportionality assessment and consideration of broader economic effects beyond price stability", es: "Desafió la independencia del BCE al requerir evaluación de proporcionalidad y consideración de efectos económicos más amplios más allá de la estabilidad de precios", de: "Es stellte die EZB-Unabhängigkeit in Frage, indem es Verhältnismäßigkeitsprüfung und Berücksichtigung breiterer wirtschaftlicher Effekte jenseits der Preisstabilität verlangte", nl: "Het daagde ECB-onafhankelijkheid uit door proportionaliteitsbeoordeling en overweging van bredere economische effecten voorbij prijsstabiliteit te vereisen" },
          { en: "It provided unlimited support for ECB policies", es: "Proporcionó apoyo ilimitado para las políticas del BCE", de: "Es bot unbegrenzte Unterstützung für EZB-Politiken", nl: "Het bood onbeperkte steun voor ECB-beleid" },
          { en: "It transferred monetary policy authority to national courts", es: "Transfirió la autoridad de política monetaria a tribunales nacionales", de: "Es übertrug geldpolitische Autorität an nationale Gerichte", nl: "Het droeg monetaire beleidsautoriteit over aan nationale rechtbanken" },
          { en: "It mandated immediate termination of all programmes", es: "Ordenó la terminación inmediata de todos los programas", de: "Es ordnete sofortige Beendigung aller Programme an", nl: "Het verplichtte onmiddellijke beëindiging van alle programma's" }
        ],
        correct: 0,
        explanation: {
          en: "The Karlsruhe court ruling was significant as it demanded that the ECB demonstrate proportionality in its asset purchase programmes and consider their broader economic effects, not just price stability impacts. This represented an unprecedented challenge to ECB independence and the primacy of EU law, creating tension between national constitutional courts and supranational monetary authority.",
          es: "La decisión del tribunal de Karlsruhe fue significativa ya que exigió que el BCE demuestre proporcionalidad en sus programas de compra de activos y considere sus efectos económicos más amplios, no solo impactos en la estabilidad de precios. Esto representó un desafío sin precedentes a la independencia del BCE y la primacía del derecho de la UE, creando tensión entre tribunales constitucionales nacionales y autoridad monetaria supranacional.",
          de: "Das Karlsruher Gerichtsurteil war bedeutsam, da es verlangte, dass die EZB Verhältnismäßigkeit in ihren Ankaufprogrammen demonstriert und ihre breiteren wirtschaftlichen Auswirkungen berücksichtigt, nicht nur Preisstabilitätsimpakte. Dies stellte eine beispiellose Herausforderung der EZB-Unabhängigkeit und des Vorrangs des EU-Rechts dar und schuf Spannungen zwischen nationalen Verfassungsgerichten und supranationaler Währungsautorität.",
          nl: "De Karlsruhe rechtbankuitspraak was significant omdat het eiste dat de ECB proportionaliteit in haar activaaankopprogramma's demonstreerde en hun bredere economische effecten overwoog, niet alleen prijsstabiliteitsimpacten. Dit vertegenwoordigde een ongekende uitdaging voor ECB-onafhankelijkheid en de voorrang van EU-recht, waarbij spanning ontstond tussen nationale grondwettelijke hoven en supranationale monetaire autoriteit."
        }
      },
      {
        question: {
          en: "What was the 'sudden stop' phenomenon that affected peripheral eurozone countries during the crisis?",
          es: "¿Cuál fue el fenómeno de 'parada súbita' que afectó a los países periféricos de la eurozona durante la crisis?",
          de: "Was war das 'Sudden Stop'-Phänomen, das periphere Eurozone-Länder während der Krise betraf?",
          nl: "Wat was het 'sudden stop' fenomeen dat perifere eurozone landen beïnvloedde tijdens de crisis?"
        },
        options: [
          { en: "Abrupt cessation of private capital flows forcing rapid current account adjustment and deleveraging", es: "Cesación abrupta de flujos de capital privado forzando ajuste rápido de cuenta corriente y desapalancamiento", de: "Abrupte Beendigung privater Kapitalströme, die schnelle Leistungsbilanzanpassung und Entschuldung erzwang", nl: "Abrupte beëindiging van private kapitaalstromen die snelle lopende rekening aanpassing en deleveraging afdwong" },
          { en: "Central bank policy rate freezing", es: "Congelamiento de la tasa de política del banco central", de: "Einfrieren des Zentralbank-Leitzinses", nl: "Centrale bank beleidstarief bevriezing" },
          { en: "Government spending cessation", es: "Cesación del gasto gubernamental", de: "Beendigung der Staatsausgaben", nl: "Overheidsuifgavenstop" },
          { en: "Trade embargo implementation", es: "Implementación de embargo comercial", de: "Handelsembargo-Umsetzung", nl: "Handelsembargo implementatie" }
        ],
        correct: 0,
        explanation: {
          en: "The 'sudden stop' describes the abrupt reversal of capital flows to peripheral eurozone countries during the crisis. Previously, these countries had relied on large private capital inflows to finance current account deficits. When investor confidence collapsed, these flows stopped suddenly, forcing rapid and painful adjustments through internal devaluation, deleveraging, and recession.",
          es: "La 'parada súbita' describe la reversión abrupta de flujos de capital hacia países periféricos de la eurozona durante la crisis. Previamente, estos países habían dependido de grandes entradas de capital privado para financiar déficits de cuenta corriente. Cuando la confianza del inversor colapsó, estos flujos se detuvieron súbitamente, forzando ajustes rápidos y dolorosos a través de devaluación interna, desapalancamiento y recesión.",
          de: "Der 'Sudden Stop' beschreibt die abrupte Umkehr der Kapitalströme in periphere Eurozone-Länder während der Krise. Zuvor hatten diese Länder auf große private Kapitalzuflüsse zur Finanzierung von Leistungsbilanzdefiziten gesetzt. Als das Anlegervertrauen zusammenbrach, stoppten diese Ströme plötzlich und erzwangen schnelle und schmerzhafte Anpassungen durch interne Abwertung, Entschuldung und Rezession.",
          nl: "De 'sudden stop' beschrijft de abrupte omkering van kapitaalstromen naar perifere eurozone landen tijdens de crisis. Eerder hadden deze landen vertrouwd op grote private kapitaalinstromen om lopende rekening tekorten te financieren. Toen het vertrouwen van beleggers instortte, stopten deze stromen plotseling, wat snelle en pijnlijke aanpassingen afdwong door interne devaluatie, deleveraging en recessie."
        }
      },
      {
        question: {
          en: "What was the economic rationale behind the ECB's negative interest rate policy implementation in 2014?",
          es: "¿Cuál fue la justificación económica detrás de la implementación de la política de tasas de interés negativas del BCE en 2014?",
          de: "Was war die wirtschaftliche Begründung für die Umsetzung der Negativzinspolitik der EZB im Jahr 2014?",
          nl: "Wat was de economische redenering achter de implementatie van het negatieve rentebeleid van de ECB in 2014?"
        },
        options: [
          { en: "Overcome the effective lower bound constraint while stimulating bank lending and preventing deflationary spiral", es: "Superar la restricción del límite inferior efectivo mientras se estimula el préstamo bancario y se previene la espiral deflacionaria", de: "Überwindung der effektiven Untergrenze bei gleichzeitiger Stimulation der Bankkreditvergabe und Verhinderung einer Deflationsspirale", nl: "Overwinning van de effectieve ondergrens beperking terwijl bankuitleningen werden gestimuleerd en deflationaire spiraal voorkomen" },
          { en: "Increase government revenue through bank fees", es: "Aumentar los ingresos gubernamentales a través de tarifas bancarias", de: "Erhöhung der Staatseinnahmen durch Bankgebühren", nl: "Verhogen van overheidsinkomsten door bankkosten" },
          { en: "Reduce bank profitability to discourage risk-taking", es: "Reducir la rentabilidad bancaria para desalentar la toma de riesgos", de: "Bankenprofitabilität reduzieren, um Risikobereitschaft zu entmutigen", nl: "Bankwinstgevendheid verminderen om risiconame te ontmoedigen" },
          { en: "Automatically balance government budgets", es: "Equilibrar automáticamente los presupuestos gubernamentales", de: "Staatshaushalte automatisch ausgleichen", nl: "Automatisch overheidsbegrotingen balanceren" }
        ],
        correct: 0,
        explanation: {
          en: "The ECB implemented NIRP to push beyond the zero lower bound constraint on conventional monetary policy. By charging banks for excess reserves, it aimed to incentivize lending over hoarding, depreciate the euro, raise inflation expectations, and provide additional monetary stimulus when conventional tools were exhausted, helping to prevent a deflationary spiral in the post-crisis environment.",
          es: "El BCE implementó NIRP para ir más allá de la restricción del límite inferior cero en la política monetaria convencional. Al cobrar a los bancos por reservas excesivas, buscó incentivar préstamos sobre acumulación, depreciar el euro, elevar expectativas de inflación, y proporcionar estímulo monetario adicional cuando las herramientas convencionales se agotaron, ayudando a prevenir una espiral deflacionaria en el entorno post-crisis.",
          de: "Die EZB implementierte NIRP, um über die Nullzinsbeschränkung der konventionellen Geldpolitik hinauszugehen. Durch Gebühren für Überschussreserven zielte sie darauf ab, Kreditvergabe statt Hortung zu fördern, den Euro abzuwerten, Inflationserwartungen zu erhöhen und zusätzliche monetäre Stimulation zu bieten, wenn konventionelle Instrumente erschöpft waren, um eine Deflationsspirale im Post-Krisen-Umfeld zu verhindern.",
          nl: "De ECB implementeerde NIRP om voorbij de nul ondergrens beperking van conventioneel monetair beleid te gaan. Door banken te belasten voor overtollige reserves, beoogde het kredietverlening boven hamsteren aan te moedigen, de euro te devalueren, inflatieverwachtingen te verhogen, en aanvullende monetaire stimulans te bieden wanneer conventionele instrumenten uitgeput waren, helpend een deflationaire spiraal in de post-crisis omgeving te voorkomen."
        }
      },
      {
        question: {
          en: "How did the introduction of the Banking Union address the 'financial trilemma' in the eurozone?",
          es: "¿Cómo abordó la introducción de la Unión Bancaria el 'trilema financiero' en la eurozona?",
          de: "Wie adressierte die Einführung der Bankenunion das 'Finanzielle Trilemma' in der Eurozone?",
          nl: "Hoe behandelde de introductie van de Bankenunie het 'financiële trilemma' in de eurozone?"
        },
        options: [
          { en: "Centralizing supervision and resolution while maintaining financial integration, breaking the impossible trinity of financial stability, national sovereignty, and integration", es: "Centralizando supervisión y resolución mientras se mantiene integración financiera, rompiendo la trinidad imposible de estabilidad financiera, soberanía nacional e integración", de: "Zentralisierung von Aufsicht und Abwicklung bei Beibehaltung finanzieller Integration, Durchbrechung der unmöglichen Dreifaltigkeit von Finanzstabilität, nationaler Souveränität und Integration", nl: "Centralisering van toezicht en resolutie terwijl financiële integratie behouden bleef, doorbreking van de onmogelijke drieëenheid van financiële stabiliteit, nationale soevereiniteit en integratie" },
          { en: "Eliminating all national banking regulations", es: "Eliminando todas las regulaciones bancarias nacionales", de: "Beseitigung aller nationalen Bankenregulierungen", nl: "Eliminatie van alle nationale bankregulaties" },
          { en: "Creating a single european bank", es: "Creando un banco europeo único", de: "Schaffung einer einzigen europäischen Bank", nl: "Creëren van een enkele europese bank" },
          { en: "Implementing uniform deposit insurance", es: "Implementando seguro de depósitos uniforme", de: "Implementierung einheitlicher Einlagensicherung", nl: "Implementeren van uniforme depositoverzekering" }
        ],
        correct: 0,
        explanation: {
          en: "The Banking Union addressed the financial trilemma by centralizing key banking functions (supervision and resolution) at the European level while maintaining financial integration. This broke the impossible trinity where countries couldn't simultaneously have financial stability, national financial sovereignty, and deep financial integration. By pooling sovereignty in banking matters, the eurozone could achieve both stability and integration.",
          es: "La Unión Bancaria abordó el trilema financiero centralizando funciones bancarias clave (supervisión y resolución) a nivel europeo mientras mantenía la integración financiera. Esto rompió la trinidad imposible donde los países no podían tener simultáneamente estabilidad financiera, soberanía financiera nacional e integración financiera profunda. Al unir soberanía en asuntos bancarios, la eurozona pudo lograr tanto estabilidad como integración.",
          de: "Die Bankenunion adressierte das Finanzielle Trilemma durch Zentralisierung wichtiger Bankfunktionen (Aufsicht und Abwicklung) auf europäischer Ebene bei Beibehaltung finanzieller Integration. Dies durchbrach die unmögliche Dreifaltigkeit, bei der Länder nicht gleichzeitig Finanzstabilität, nationale Finanzsouveränität und tiefe Finanzintegration haben konnten. Durch Bündelung der Souveränität in Bankangelegenheiten konnte die Eurozone sowohl Stabilität als auch Integration erreichen.",
          nl: "De Bankenunie behandelde het financiële trilemma door belangrijke bankfuncties (toezicht en resolutie) te centraliseren op Europees niveau terwijl financiële integratie behouden bleef. Dit doorbrak de onmogelijke drieëenheid waarbij landen niet tegelijkertijd financiële stabiliteit, nationale financiële soevereiniteit en diepe financiële integratie konden hebben. Door soevereiniteit in bankzaken te bundelen, kon de eurozone zowel stabiliteit als integratie bereiken."
        }
      },
      {
        question: {
          en: "What was the theoretical framework behind the ECB's forward guidance strategy introduced under Mario Draghi?",
          es: "¿Cuál fue el marco teórico detrás de la estrategia de orientación futura del BCE introducida bajo Mario Draghi?",
          de: "Was war das theoretische Rahmenwerk hinter der Forward Guidance-Strategie der EZB, die unter Mario Draghi eingeführt wurde?",
          nl: "Wat was het theoretische kader achter de forward guidance strategie van de ECB geïntroduceerd onder Mario Draghi?"
        },
        options: [
          { en: "Managing expectations to influence the entire yield curve and enhance monetary policy transmission through commitment to future policy path", es: "Gestionar expectativas para influir en toda la curva de rendimiento y mejorar la transmisión de política monetaria a través del compromiso con la trayectoria futura de política", de: "Erwartungsmanagement zur Beeinflussung der gesamten Zinskurve und Verbesserung der geldpolitischen Transmission durch Verpflichtung zum zukünftigen Politikpfad", nl: "Verwachtingenbeheer om de gehele rentecurve te beïnvloeden en monetaire beleidstransmissie te verbeteren door toewijding aan toekomstig beleidspad" },
          { en: "Providing daily market commentary", es: "Proporcionar comentarios diarios del mercado", de: "Tägliche Marktkommentare bereitstellen", nl: "Dagelijkse marktcommentaar verstrekken" },
          { en: "Eliminating all uncertainty about future policies", es: "Eliminar toda incertidumbre sobre políticas futuras", de: "Beseitigung aller Unsicherheit über zukünftige Politiken", nl: "Elimineren van alle onzekerheid over toekomstig beleid" },
          { en: "Coordinating with fiscal policy automatically", es: "Coordinando automáticamente con política fiscal", de: "Automatische Koordination mit Fiskalpolitik", nl: "Automatisch coördineren met fiscaal beleid" }
        ],
        correct: 0,
        explanation: {
          en: "The ECB's forward guidance was based on expectations theory and the idea that monetary policy effectiveness depends not just on current rates but on expected future policy paths. By providing conditional commitments about future interest rate levels, the ECB aimed to influence longer-term rates and improve policy transmission when short-term rates were constrained by the effective lower bound.",
          es: "La orientación futura del BCE se basó en la teoría de expectativas y la idea de que la efectividad de la política monetaria depende no solo de las tasas actuales sino de las trayectorias futuras esperadas de política. Al proporcionar compromisos condicionales sobre niveles futuros de tasas de interés, el BCE buscó influir en tasas a largo plazo y mejorar la transmisión de política cuando las tasas a corto plazo estaban restringidas por el límite inferior efectivo.",
          de: "Die Forward Guidance der EZB basierte auf der Erwartungstheorie und der Idee, dass die Wirksamkeit der Geldpolitik nicht nur von aktuellen Zinsen, sondern von erwarteten zukünftigen Politikpfaden abhängt. Durch bedingte Verpflichtungen zu zukünftigen Zinsniveaus zielte die EZB darauf ab, längerfristige Zinsen zu beeinflussen und die Politiktransmission zu verbessern, wenn kurzfristige Zinsen durch die effektive Untergrenze begrenzt waren.",
          nl: "De forward guidance van de ECB was gebaseerd op verwachtingentheorie en het idee dat monetaire beleidseffectiviteit niet alleen afhangt van huidige tarieven maar van verwachte toekomstige beleidspaden. Door voorwaardelijke toezeggingen over toekomstige renteniveaus te geven, beoogde de ECB langere termijn tarieven te beïnvloeden en beleidstransmissie te verbeteren wanneer korte termijn tarieven beperkt waren door de effectieve ondergrens."
        }
      },
      {
        question: {
          en: "What was the 'search for yield' problem that the ECB's ultra-low interest rate policies potentially created?",
          es: "¿Cuál fue el problema de 'búsqueda de rendimiento' que las políticas de tasas de interés ultra-bajas del BCE potencialmente crearon?",
          de: "Was war das 'Search for Yield'-Problem, das die ultraniedrigen Zinspolitiken der EZB potenziell schufen?",
          nl: "Wat was het 'search for yield' probleem dat de ultra-lage rentebeleid van de ECB potentieel creëerde?"
        },
        options: [
          { en: "Institutional investors taking excessive risks in pursuit of higher returns, potentially creating asset bubbles and financial instability", es: "Inversores institucionales tomando riesgos excesivos en busca de rendimientos más altos, potencialmente creando burbujas de activos e inestabilidad financiera", de: "Institutionelle Anleger gehen übermäßige Risiken bei der Suche nach höheren Renditen ein, was potenziell Vermögensblasen und Finanzinstabilität schafft", nl: "Institutionele beleggers die overmatige risico's nemen in de zoektocht naar hogere rendementen, potentieel activabellen en financiële instabiliteit creërend" },
          { en: "Banks refusing to lend to any customers", es: "Bancos negándose a prestar a cualquier cliente", de: "Banken verweigern Kredite an alle Kunden", nl: "Banken weigeren leningen aan alle klanten" },
          { en: "Complete elimination of financial markets", es: "Eliminación completa de mercados financieros", de: "Vollständige Beseitigung der Finanzmärkte", nl: "Volledige eliminatie van financiële markten" },
          { en: "Automatic increase in inflation", es: "Aumento automático en inflación", de: "Automatischer Inflationsanstieg", nl: "Automatische toename van inflatie" }
        ],
        correct: 0,
        explanation: {
          en: "The 'search for yield' describes how ultra-low interest rates can incentivize investors (particularly insurance companies, pension funds, and banks) to take on excessive risks to achieve target returns. This can lead to mispricing of risk, asset bubbles, and increased systemic financial stability risks as investors move into riskier assets, potentially undermining the very stability that monetary policy aims to preserve.",
          es: "La 'búsqueda de rendimiento' describe cómo las tasas de interés ultra-bajas pueden incentivar a los inversores (particularmente compañías de seguros, fondos de pensiones y bancos) a tomar riesgos excesivos para lograr rendimientos objetivo. Esto puede llevar a una mala valoración del riesgo, burbujas de activos y mayores riesgos de estabilidad financiera sistémica cuando los inversores se mueven hacia activos más riesgosos, potencialmente socavando la misma estabilidad que la política monetaria busca preservar.",
          de: "Die 'Search for Yield' beschreibt, wie ultraniedrige Zinsen Anleger (insbesondere Versicherungen, Pensionsfonds und Banken) dazu anregen können, übermäßige Risiken einzugehen, um Zielrenditen zu erreichen. Dies kann zu Risikofehlbewertung, Vermögensblasen und erhöhten systemischen Finanzstabilitätsrisiken führen, wenn Anleger in riskantere Anlagen wechseln, was potenziell die Stabilität untergräbt, die die Geldpolitik zu bewahren sucht.",
          nl: "De 'search for yield' beschrijft hoe ultra-lage rentetarieven beleggers (vooral verzekeringsmaatschappijen, pensioenfondsen en banken) kunnen aanzetten tot overmatige risico's om doelrendementen te behalen. Dit kan leiden tot verkeerde risicoprijsstelling, activabellen en verhoogde systemische financiële stabiliteitsrisico's wanneer beleggers naar riskantere activa bewegen, potentieel de stabiliteit ondermijnend die monetair beleid beoogt te behouden."
        }
      },
      {
        question: {
          en: "What was the role of 'capital flight' in amplifying the eurozone crisis dynamics?",
          es: "¿Cuál fue el papel de la 'fuga de capitales' en amplificar las dinámicas de crisis de la eurozona?",
          de: "Welche Rolle spielte 'Kapitalflucht' bei der Verstärkung der Eurozone-Krisendynamik?",
          nl: "Wat was de rol van 'kapitaalvlucht' in het versterken van de eurozone crisis dynamiek?"
        },
        options: [
          { en: "Created self-reinforcing feedback loops where fears of redenomination triggered capital outflows, worsening fiscal positions and increasing redenomination probability", es: "Creó ciclos de retroalimentación auto-reforzantes donde los temores de redenominación desencadenaron salidas de capital, empeorando posiciones fiscales y aumentando la probabilidad de redenominación", de: "Schuf sich selbst verstärkende Rückkopplungsschleifen, bei denen Redenominierungsängste Kapitalabflüsse auslösten, fiskalische Positionen verschlechterten und Redenominierungswahrscheinlichkeit erhöhten", nl: "Creëerde zichzelf versterkende feedback loops waarbij vrees voor redenominatie kapitaaluitstroom veroorzaakte, fiscale posities verslechterend en redenominatiekans verhogend" },
          { en: "Only affected exchange rates", es: "Solo afectó tipos de cambio", de: "Beeinflusste nur Wechselkurse", nl: "Beïnvloedde alleen wisselkoersen" },
          { en: "Automatically stabilized all economies", es: "Estabilizó automáticamente todas las economías", de: "Stabilisierte automatisch alle Volkswirtschaften", nl: "Stabiliseerde automatisch alle economieën" },
          { en: "Had no impact on government financing", es: "No tuvo impacto en la financiación gubernamental", de: "Hatte keinen Einfluss auf Staatsfinanzierung", nl: "Had geen impact op overheidsfinanciering" }
        ],
        correct: 0,
        explanation: {
          en: "Capital flight created vicious cycles during the eurozone crisis. As investors feared potential eurozone breakup or redenomination, they moved funds from peripheral to core countries. This capital outflow increased borrowing costs for affected governments, worsened their fiscal positions, and ironically made the feared redenomination more likely, creating self-fulfilling crisis dynamics that required ECB intervention to break.",
          es: "La fuga de capitales creó círculos viciosos durante la crisis de la eurozona. Cuando los inversores temieron una potencial ruptura de la eurozona o redenominación, movieron fondos de países periféricos a centrales. Esta salida de capital aumentó los costos de endeudamiento para gobiernos afectados, empeoró sus posiciones fiscales, e irónicamente hizo más probable la redenominación temida, creando dinámicas de crisis auto-cumplidas que requirieron intervención del BCE para romper.",
          de: "Kapitalflucht schuf Teufelskreise während der Eurozone-Krise. Als Anleger einen potenziellen Eurozone-Zerfall oder eine Redenominierung befürchteten, verlagerten sie Gelder von peripheren zu Kernländern. Dieser Kapitalabfluss erhöhte Kreditkosten für betroffene Regierungen, verschlechterte ihre fiskalischen Positionen und machte ironischerweise die befürchtete Redenominierung wahrscheinlicher, wodurch sich selbst erfüllende Krisendynamiken entstanden, die EZB-Intervention erforderten.",
          nl: "Kapitaalvlucht creëerde vicieuze cirkels tijdens de eurozone crisis. Toen beleggers een potentiële eurozone breuk of redenominatie vreesden, verplaatsten ze fondsen van perifere naar kernlanden. Deze kapitaaluitstroom verhoogde leenkosten voor getroffen overheden, verslechterde hun fiscale posities, en maakte ironisch genoeg de gevreesde redenominatie waarschijnlijker, waarbij zichzelf vervullende crisisodynamiek ontstond die ECB-interventie vereiste om te doorbreken."
        }
      },
      {
        question: {
          en: "How did the concept of 'fiscal dominance' threaten ECB monetary policy independence during the crisis?",
          es: "¿Cómo amenazó el concepto de 'dominancia fiscal' la independencia de la política monetaria del BCE durante la crisis?",
          de: "Wie bedrohte das Konzept der 'fiskalischen Dominanz' die Unabhängigkeit der EZB-Geldpolitik während der Krise?",
          nl: "Hoe bedreigde het concept van 'fiscale dominantie' de ECB monetaire beleids onafhankelijkheid tijdens de crisis?"
        },
        options: [
          { en: "Pressure for monetary financing of government deficits could force ECB to accommodate fiscal needs rather than pursue price stability", es: "La presión por financiación monetaria de déficits gubernamentales podría forzar al BCE a acomodar necesidades fiscales en lugar de perseguir estabilidad de precios", de: "Druck zur monetären Finanzierung von Staatsdefiziten könnte die EZB zwingen, fiskalische Bedürfnisse zu berücksichtigen statt Preisstabilität anzustreben", nl: "Druk voor monetaire financiering van overheidsdeficiten zou de ECB kunnen dwingen fiscale behoeften te accommoderen in plaats van prijsstabiliteit na te streven" },
          { en: "Automatic coordination of all policies", es: "Coordinación automática de todas las políticas", de: "Automatische Koordination aller Politiken", nl: "Automatische coördinatie van alle beleid" },
          { en: "Enhanced central bank independence", es: "Mayor independencia del banco central", de: "Verstärkte Zentralbankunabhängigkeit", nl: "Versterkte centrale bank onafhankelijkheid" },
          { en: "Elimination of government debt", es: "Eliminación de deuda gubernamental", de: "Beseitigung von Staatsschulden", nl: "Eliminatie van overheidsschuld" }
        ],
        correct: 0,
        explanation: {
          en: "Fiscal dominance occurs when monetary policy becomes subordinated to fiscal needs, potentially forcing the central bank to monetize government debt regardless of inflation consequences. During the eurozone crisis, high debt levels and market pressure created fears that the ECB might be compelled to purchase government bonds not for monetary policy purposes but to prevent sovereign defaults, compromising its primary mandate of price stability.",
          es: "La dominancia fiscal ocurre cuando la política monetaria se subordina a las necesidades fiscales, potencialmente forzando al banco central a monetizar deuda gubernamental independientemente de las consecuencias inflacionarias. Durante la crisis de la eurozona, altos niveles de deuda y presión del mercado crearon temores de que el BCE pudiera ser obligado a comprar bonos gubernamentales no por propósitos de política monetaria sino para prevenir defaults soberanos, comprometiendo su mandato primario de estabilidad de precios.",
          de: "Fiskalische Dominanz tritt auf, wenn die Geldpolitik fiskalischen Bedürfnissen untergeordnet wird, wodurch die Zentralbank potenziell zur Monetisierung von Staatsschulden unabhängig von Inflationsfolgen gezwungen wird. Während der Eurozone-Krise schufen hohe Schuldenstände und Marktdruck Befürchtungen, dass die EZB zum Kauf von Staatsanleihen nicht für geldpolitische Zwecke, sondern zur Verhinderung von Staatsausfällen gedrängt werden könnte, was ihr primäres Mandat der Preisstabilität gefährdete.",
          nl: "Fiscale dominantie treedt op wanneer monetair beleid ondergeschikt wordt aan fiscale behoeften, potentieel de centrale bank dwingend overheidsschuld te monetiseren ongeacht inflatiegevolgen. Tijdens de eurozone crisis creëerden hoge schuldniveaus en marktdruk vrees dat de ECB gedwongen zou kunnen worden overheidsobligaties te kopen niet voor monetaire beleidsdoeleinden maar om soevereine defaults te voorkomen, haar primaire mandaat van prijsstabiliteit compromitterend."
        }
      },
      {
        question: {
          en: "What was the significance of the 'impossible trinity' or 'trilemma' in the context of eurozone monetary policy?",
          es: "¿Cuál fue la importancia de la 'trinidad imposible' o 'trilema' en el contexto de la política monetaria de la eurozona?",
          de: "Was war die Bedeutung der 'unmöglichen Dreifaltigkeit' oder des 'Trilemmas' im Kontext der Eurozone-Geldpolitik?",
          nl: "Wat was de betekenis van de 'onmogelijke drieëenheid' of 'trilemma' in de context van eurozone monetair beleid?"
        },
        options: [
          { en: "Countries cannot simultaneously maintain fixed exchange rates, independent monetary policy, and free capital mobility - eurozone chose fixed rates and capital mobility, sacrificing individual monetary independence", es: "Los países no pueden mantener simultáneamente tipos de cambio fijos, política monetaria independiente y libre movilidad de capital - la eurozona eligió tasas fijas y movilidad de capital, sacrificando independencia monetaria individual", de: "Länder können nicht gleichzeitig feste Wechselkurse, unabhängige Geldpolitik und freien Kapitalverkehr aufrechterhalten - die Eurozone wählte feste Kurse und Kapitalmobilität, opferte individuelle monetäre Unabhängigkeit", nl: "Landen kunnen niet tegelijkertijd vaste wisselkoersen, onafhankelijk monetair beleid en vrije kapitaalmobiliteit handhaven - eurozone koos vaste tarieven en kapitaalmobiliteit, individuele monetaire onafhankelijkheid opofferend" },
          { en: "Three different interest rates must be used", es: "Deben usarse tres tasas de interés diferentes", de: "Drei verschiedene Zinssätze müssen verwendet werden", nl: "Drie verschillende rentetarieven moeten worden gebruikt" },
          { en: "Central banks must have three governors", es: "Los bancos centrales deben tener tres gobernadores", de: "Zentralbanken müssen drei Gouverneure haben", nl: "Centrale banken moeten drie gouverneurs hebben" },
          { en: "Fiscal policy must be coordinated three ways", es: "La política fiscal debe coordinarse de tres maneras", de: "Fiskalpolitik muss dreifach koordiniert werden", nl: "Fiscaal beleid moet op drie manieren gecoördineerd worden" }
        ],
        correct: 0,
        explanation: {
          en: "The impossible trinity states that a country cannot simultaneously have a fixed exchange rate, independent monetary policy, and free capital flows. The eurozone represents a choice to maintain fixed exchange rates (through the single currency) and free capital mobility, necessarily sacrificing individual national monetary policy independence in favor of a single, supranational monetary policy conducted by the ECB.",
          es: "La trinidad imposible establece que un país no puede tener simultáneamente un tipo de cambio fijo, política monetaria independiente y flujos de capital libres. La eurozona representa una elección de mantener tipos de cambio fijos (a través de la moneda única) y libre movilidad de capital, necesariamente sacrificando la independencia de política monetaria nacional individual en favor de una política monetaria única y supranacional conducida por el BCE.",
          de: "Die unmögliche Dreifaltigkeit besagt, dass ein Land nicht gleichzeitig einen festen Wechselkurs, unabhängige Geldpolitik und freie Kapitalströme haben kann. Die Eurozone stellt eine Entscheidung dar, feste Wechselkurse (durch die Einheitswährung) und freie Kapitalmobilität beizubehalten, wodurch notwendigerweise die individuelle nationale geldpolitische Unabhängigkeit zugunsten einer einzigen, supranationalen Geldpolitik der EZB geopfert wird.",
          nl: "De onmogelijke drieëenheid stelt dat een land niet tegelijkertijd een vaste wisselkoers, onafhankelijk monetair beleid en vrije kapitaalstromen kan hebben. De eurozone vertegenwoordigt een keuze om vaste wisselkoersen (door de eenheidsmunt) en vrije kapitaalmobiliteit te behouden, waarbij noodzakelijkerwijs individuele nationale monetaire beleidsonafhankelijkheid wordt geofferd ten gunste van een enkel, supranationaal monetair beleid uitgevoerd door de ECB."
        }
      },
      {
        question: {
          en: "What was the 'internal devaluation' strategy imposed on crisis-affected eurozone countries, and why was it necessary?",
          es: "¿Cuál fue la estrategia de 'devaluación interna' impuesta a los países de la eurozona afectados por la crisis, y por qué fue necesaria?",
          de: "Was war die 'interne Abwertung'-Strategie, die den von der Krise betroffenen Eurozone-Ländern auferlegt wurde, und warum war sie notwendig?",
          nl: "Wat was de 'interne devaluatie' strategie opgelegd aan crisis-getroffen eurozone landen, en waarom was het noodzakelijk?"
        },
        options: [
          { en: "Restoring competitiveness through domestic price and wage deflation since nominal exchange rate devaluation was impossible within the eurozone", es: "Restaurar competitividad a través de deflación doméstica de precios y salarios ya que la devaluación nominal del tipo de cambio era imposible dentro de la eurozona", de: "Wiederherstellung der Wettbewerbsfähigkeit durch inländische Preis- und Lohndeflation, da nominale Wechselkursabwertung innerhalb der Eurozone unmöglich war", nl: "Competitiviteit herstellen door binnenlandse prijs- en loondeflatie omdat nominale wisselkoersdevaluatie onmogelijk was binnen de eurozone" },
          { en: "Increasing government spending automatically", es: "Aumentar automáticamente el gasto gubernamental", de: "Automatische Erhöhung der Staatsausgaben", nl: "Automatisch verhogen van overheidsuitgaven" },
          { en: "Raising all taxes uniformly", es: "Elevar todos los impuestos uniformemente", de: "Einheitliche Erhöhung aller Steuern", nl: "Uniform verhogen van alle belastingen" },
          { en: "Printing national currencies", es: "Imprimir monedas nacionales", de: "Nationale Währungen drucken", nl: "Nationale valuta's drukken" }
        ],
        correct: 0,
        explanation: {
          en: "Internal devaluation was a painful adjustment mechanism where countries couldn't use exchange rate devaluation to restore competitiveness. Instead, they had to reduce domestic prices and wages relative to trading partners through austerity measures, structural reforms, and deflationary pressures. This process was socially and politically costly but was seen as necessary to correct the competitiveness imbalances that had built up during the pre-crisis period.",
          es: "La devaluación interna fue un mecanismo de ajuste doloroso donde los países no podían usar devaluación del tipo de cambio para restaurar competitividad. En su lugar, tuvieron que reducir precios y salarios domésticos relativos a socios comerciales a través de medidas de austeridad, reformas estructurales y presiones deflacionarias. Este proceso fue social y políticamente costoso pero se consideró necesario para corregir los desequilibrios de competitividad que se habían acumulado durante el período pre-crisis.",
          de: "Die interne Abwertung war ein schmerzhafter Anpassungsmechanismus, bei dem Länder keine Wechselkursabwertung zur Wiederherstellung der Wettbewerbsfähigkeit nutzen konnten. Stattdessen mussten sie inländische Preise und Löhne relativ zu Handelspartnern durch Sparmaßnahmen, Strukturreformen und deflationäre Drücke reduzieren. Dieser Prozess war sozial und politisch kostspielig, wurde aber als notwendig erachtet, um die Wettbewerbsungleichgewichte zu korrigieren, die sich während der Vor-Krisen-Periode aufgebaut hatten.",
          nl: "Interne devaluatie was een pijnlijk aanpassingsmechanisme waarbij landen geen wisselkoersdevaluatie konden gebruiken om competitiviteit te herstellen. In plaats daarvan moesten ze binnenlandse prijzen en lonen relatief ten opzichte van handelspartners verlagen door bezuinigingsmaatregelen, structurele hervormingen en deflatoire druk. Dit proces was sociaal en politiek kostbaar maar werd als noodzakelijk beschouwd om de competitiviteitsonevenwichtigheden te corrigeren die zich tijdens de pre-crisis periode hadden opgebouwd."
        }
      },
      {
        question: {
          en: "What was the 'fragmentation' of eurozone financial markets during the crisis, and how did ECB policies address it?",
          es: "¿Cuál fue la 'fragmentación' de los mercados financieros de la eurozona durante la crisis, y cómo abordaron las políticas del BCE?",
          de: "Was war die 'Fragmentierung' der Eurozone-Finanzmärkte während der Krise, und wie adressierten die EZB-Politiken sie?",
          nl: "Wat was de 'fragmentatie' van eurozone financiële markten tijdens de crisis, en hoe behandelden ECB-beleid dit?"
        },
        options: [
          { en: "Growing divergence in borrowing costs and credit conditions across countries despite shared currency, addressed through OMT and asset purchases to restore transmission mechanism", es: "Creciente divergencia en costos de endeudamiento y condiciones crediticias entre países a pesar de moneda compartida, abordada a través de OMT y compras de activos para restaurar mecanismo de transmisión", de: "Wachsende Divergenz bei Kreditkosten und Kreditbedingungen zwischen Ländern trotz gemeinsamer Währung, adressiert durch OMT und Ankäufe zur Wiederherstellung des Transmissionsmechanismus", nl: "Groeiende divergentie in leenkosten en kredietvoorwaarden tussen landen ondanks gedeelde munt, aangepakt door OMT en activaaankopen om transmissiemechanisme te herstellen" },
          { en: "Complete separation of all national markets", es: "Separación completa de todos los mercados nacionales", de: "Vollständige Trennung aller nationalen Märkte", nl: "Volledige scheiding van alle nationale markten" },
          { en: "Uniform pricing across all countries", es: "Precios uniformes en todos los países", de: "Einheitliche Preisgestaltung in allen Ländern", nl: "Uniforme prijsstelling in alle landen" },
          { en: "Automatic market stabilization", es: "Estabilización automática del mercado", de: "Automatische Marktstabilisierung", nl: "Automatische marktstabilisatie" }
        ],
        correct: 0,
        explanation: {
          en: "Financial market fragmentation referred to the divergent borrowing costs and credit conditions that emerged across eurozone countries during the crisis, despite sharing the same currency. This impaired monetary policy transmission as ECB rate changes had very different effects across countries. The ECB addressed this through OMT, asset purchase programmes, and other measures designed to restore the single monetary policy transmission mechanism and reduce unwarranted differences in financing conditions.",
          es: "La fragmentación del mercado financiero se refirió a los costos de endeudamiento divergentes y condiciones crediticias que surgieron entre países de la eurozona durante la crisis, a pesar de compartir la misma moneda. Esto perjudicó la transmisión de política monetaria ya que los cambios de tasa del BCE tuvieron efectos muy diferentes entre países. El BCE abordó esto a través de OMT, programas de compra de activos y otras medidas diseñadas para restaurar el mecanismo único de transmisión de política monetaria y reducir diferencias injustificadas en condiciones de financiación.",
          de: "Finanzmarktfragmentierung bezog sich auf die divergierenden Kreditkosten und Kreditbedingungen, die während der Krise zwischen Eurozone-Ländern entstanden, trotz gemeinsamer Währung. Dies beeinträchtigte die geldpolitische Transmission, da EZB-Zinsänderungen sehr unterschiedliche Auswirkungen zwischen Ländern hatten. Die EZB adressierte dies durch OMT, Ankaufprogramme und andere Maßnahmen zur Wiederherstellung des einheitlichen geldpolitischen Transmissionsmechanismus und Reduzierung ungerechtfertigter Unterschiede in Finanzierungsbedingungen.",
          nl: "Financiële marktfragmentatie verwees naar de divergerende leenkosten en kredietvoorwaarden die ontstonden tussen eurozone landen tijdens de crisis, ondanks het delen van dezelfde munt. Dit schaadde monetaire beleidstransmissie omdat ECB tariefsveranderingen zeer verschillende effecten hadden tussen landen. De ECB behandelde dit door OMT, activaaankopprogramma's en andere maatregelen ontworpen om het enkelvoudige monetaire beleidstransmissiemechanisme te herstellen en ongerechtvaardigde verschillen in financieringsvoorwaarden te verminderen."
        }
      },
      {
        question: {
          en: "What was the economic logic behind the ECB's decision to include corporate bonds in its asset purchase programmes?",
          es: "¿Cuál fue la lógica económica detrás de la decisión del BCE de incluir bonos corporativos en sus programas de compra de activos?",
          de: "Was war die wirtschaftliche Logik hinter der Entscheidung der EZB, Unternehmensanleihen in ihre Ankaufprogramme einzubeziehen?",
          nl: "Wat was de economische logica achter de beslissing van de ECB om bedrijfsobligaties op te nemen in haar activaaankopprogramma's?"
        },
        options: [
          { en: "Enhance monetary policy transmission to the real economy by directly affecting corporate financing conditions and portfolio rebalancing effects", es: "Mejorar la transmisión de política monetaria a la economía real afectando directamente las condiciones de financiación corporativa y efectos de rebalanceo de portafolio", de: "Verbesserung der geldpolitischen Transmission zur Realwirtschaft durch direkte Beeinflussung der Unternehmensfinanzierungsbedingungen und Portfolio-Rebalancing-Effekte", nl: "Verbetering van monetaire beleidstransmissie naar de reële economie door direct bedrijfsfinancieringsvoorwaarden en portefeuille herbalancering effecten te beïnvloeden" },
          { en: "Generate profits for the ECB", es: "Generar ganancias para el BCE", de: "Gewinne für die EZB generieren", nl: "Winst genereren voor de ECB" },
          { en: "Replace government bond markets", es: "Reemplazar mercados de bonos gubernamentales", de: "Staatsanleihenmärkte ersetzen", nl: "Overheidsobligatiemarken vervangen" },
          { en: "Control corporate governance", es: "Controlar gobierno corporativo", de: "Unternehmensführung kontrollieren", nl: "Bedrijfsbestuur controleren" }
        ],
        correct: 0,
        explanation: {
          en: "Including corporate bonds in the CSPP was designed to strengthen monetary policy transmission by directly influencing corporate borrowing costs and encouraging portfolio rebalancing. As investors were pushed out of purchased corporate bonds, they would seek alternative investments, potentially lowering broader financing costs and encouraging risk-taking. This direct channel to corporate financing was seen as crucial for supporting business investment and economic recovery when traditional bank lending channels were impaired.",
          es: "Incluir bonos corporativos en el CSPP fue diseñado para fortalecer la transmisión de política monetaria influyendo directamente en los costos de endeudamiento corporativo y alentando el rebalanceo de portafolio. Como los inversores fueron empujados fuera de bonos corporativos comprados, buscarían inversiones alternativas, potencialmente reduciendo costos de financiación más amplios y alentando la toma de riesgos. Este canal directo a la financiación corporativa se vio como crucial para apoyar la inversión empresarial y recuperación económica cuando los canales tradicionales de préstamos bancarios estaban deteriorados.",
          de: "Die Einbeziehung von Unternehmensanleihen in das CSPP war darauf ausgelegt, die geldpolitische Transmission zu stärken, indem direkt Unternehmensfinanzierungskosten beeinflusst und Portfolio-Rebalancing gefördert wurde. Da Anleger aus gekauften Unternehmensanleihen gedrängt wurden, würden sie alternative Investitionen suchen, was potenziell breitere Finanzierungskosten senken und Risikobereitschaft fördern könnte. Dieser direkte Kanal zur Unternehmensfinanzierung wurde als entscheidend für die Unterstützung von Unternehmensinvestitionen und wirtschaftlicher Erholung angesehen, wenn traditionelle Bankkreditkanäle beeinträchtigt waren.",
          nl: "Het opnemen van bedrijfsobligaties in het CSPP was ontworpen om monetaire beleidstransmissie te versterken door direct bedrijfsleenkosten te beïnvloeden en portefeuille herbalancering aan te moedigen. Omdat beleggers uit gekochte bedrijfsobligaties werden gedreven, zouden ze alternatieve investeringen zoeken, potentieel bredere financieringskosten verlagend en risiconame aanmoedigend. Dit directe kanaal naar bedrijfsfinanciering werd gezien als cruciaal voor het ondersteunen van bedrijfsinvesteringen en economisch herstel wanneer traditionele bankuitleningkanalen waren aangetast."
        }
      },
      {
        question: {
          en: "How did the concept of 'secular stagnation' influence ECB monetary policy thinking in the post-crisis period?",
          es: "¿Cómo influyó el concepto de 'estancamiento secular' en el pensamiento de política monetaria del BCE en el período post-crisis?",
          de: "Wie beeinflusste das Konzept der 'säkularen Stagnation' das geldpolitische Denken der EZB in der Nach-Krisen-Periode?",
          nl: "Hoe beïnvloedde het concept van 'seculaire stagnatie' het ECB monetaire beleidsdenken in de post-crisis periode?"
        },
        options: [
          { en: "Justified prolonged ultra-accommodative policy as low natural interest rates and deficient demand required persistent monetary support to achieve price stability", es: "Justificó política ultra-acomodaticia prolongada ya que tasas de interés naturales bajas y demanda deficiente requirieron apoyo monetario persistente para lograr estabilidad de precios", de: "Rechtfertigte verlängerte ultra-akkommodative Politik, da niedrige natürliche Zinsen und mangelnde Nachfrage persistente monetäre Unterstützung erforderten, um Preisstabilität zu erreichen", nl: "Rechtvaardigde verlengde ultra-accommoderende beleid omdat lage natuurlijke rentetarieven en tekortschietende vraag persistente monetaire ondersteuning vereisten om prijsstabiliteit te bereiken" },
          { en: "Required immediate policy normalization", es: "Requirió normalización inmediata de política", de: "Erforderte sofortige Politiknormalisierung", nl: "Vereiste onmiddellijke beleidsnormalisatie" },
          { en: "Eliminated need for any monetary policy", es: "Eliminó la necesidad de cualquier política monetaria", de: "Beseitigte Bedarf für jede Geldpolitik", nl: "Elimineerde behoefte aan enig monetair beleid" },
          { en: "Focused only on exchange rate targets", es: "Se enfocó solo en objetivos de tipo de cambio", de: "Fokussierte nur auf Wechselkursziele", nl: "Richtte zich alleen op wisselkoersdoelen" }
        ],
        correct: 0,
        explanation: {
          en: "The secular stagnation hypothesis suggested that advanced economies faced a prolonged period of low natural interest rates, weak investment demand, and deflationary pressures due to structural factors like demographics, technology, and inequality. This framework justified the ECB's prolonged ultra-accommodative stance, as traditional policy normalization could push real rates above the low natural rate, inadvertently tightening policy and threatening price stability objectives.",
          es: "La hipótesis de estancamiento secular sugirió que las economías avanzadas enfrentaron un período prolongado de tasas de interés naturales bajas, demanda de inversión débil y presiones deflacionarias debido a factores estructurales como demografía, tecnología y desigualdad. Este marco justificó la postura ultra-acomodaticia prolongada del BCE, ya que la normalización tradicional de política podría empujar las tasas reales por encima de la tasa natural baja, inadvertidamente endureciendo la política y amenazando objetivos de estabilidad de precios.",
          de: "Die säkulare Stagnationshypothese deutete darauf hin, dass fortgeschrittene Volkswirtschaften einer verlängerten Periode niedriger natürlicher Zinsen, schwacher Investitionsnachfrage und deflationärer Drücke aufgrund struktureller Faktoren wie Demografie, Technologie und Ungleichheit gegenüberstanden. Dieser Rahmen rechtfertigte die verlängerte ultra-akkommodative Haltung der EZB, da traditionelle Politiknormalisierung reale Zinsen über die niedrige natürliche Rate drücken könnte, wodurch Politik unbeabsichtigt gestrafft und Preisstabilitätsziele bedroht würden.",
          nl: "De seculaire stagnatihypothese suggereerde dat geavanceerde economieën een verlengde periode van lage natuurlijke rentetarieven, zwakke investeringsvraag en deflatoire druk ondervonden vanwege structurele factoren zoals demografie, technologie en ongelijkheid. Dit kader rechtvaardigde de ECB's verlengde ultra-accommoderende houding, omdat traditionele beleidsnormalisatie reële tarieven boven het lage natuurlijke tarief zou kunnen duwen, per ongeluk beleid verstrakend en prijsstabiliteitsdoelstellingen bedreigend."
        }
      },
      {
        question: {
          en: "What was the 'reversal rate' concept in relation to ECB negative interest rate policy?",
          es: "¿Cuál fue el concepto de 'tasa de reversión' en relación con la política de tasas de interés negativas del BCE?",
          de: "Was war das 'Reversal Rate'-Konzept in Bezug auf die Negativzinspolitik der EZB?",
          nl: "Wat was het 'reversal rate' concept in relatie tot het ECB negatieve rentebeleid?"
        },
        options: [
          { en: "The theoretical threshold below which further rate cuts become counterproductive by undermining bank profitability and reducing credit supply", es: "El umbral teórico debajo del cual mayores recortes de tasas se vuelven contraproducentes al socavar la rentabilidad bancaria y reducir la oferta crediticia", de: "Die theoretische Schwelle, unter der weitere Zinssenkungen kontraproduktiv werden, indem sie Bankenprofitabilität untergraben und Kreditangebot reduzieren", nl: "De theoretische drempel waaronder verdere tariefverlagingen contraproductief worden door bankwinstgevendheid te ondermijnen en kredietaanbod te verminderen" },
          { en: "The rate at which banks reverse their lending decisions", es: "La tasa a la cual los bancos revierten sus decisiones de préstamo", de: "Die Rate, mit der Banken ihre Kreditentscheidungen umkehren", nl: "Het tarief waarmee banken hun leenbeslissingen omkeren" },
          { en: "The automatic return to positive rates", es: "El retorno automático a tasas positivas", de: "Die automatische Rückkehr zu positiven Zinsen", nl: "De automatische terugkeer naar positieve tarieven" },
          { en: "The rate of inflation reversal", es: "La tasa de reversión de inflación", de: "Die Inflationsumkehrrate", nl: "Het inflatieomkeringspercentage" }
        ],
        correct: 0,
        explanation: {
          en: "The reversal rate represents the interest rate level below which monetary accommodation becomes contractionary rather than expansionary. This occurs when negative rates so severely damage bank profitability and intermediation capacity that the resulting reduction in credit supply outweighs the direct stimulative effects of lower rates. The ECB's tiering system was partly designed to avoid hitting this counterproductive threshold.",
          es: "La tasa de reversión representa el nivel de tasa de interés debajo del cual la acomodación monetaria se vuelve contractiva en lugar de expansiva. Esto ocurre cuando las tasas negativas dañan tan severamente la rentabilidad bancaria y capacidad de intermediación que la reducción resultante en oferta crediticia supera los efectos estimulativos directos de tasas más bajas. El sistema de niveles del BCE fue parcialmente diseñado para evitar alcanzar este umbral contraproducente.",
          de: "Die Reversal Rate repräsentiert das Zinsniveau, unter dem monetäre Akkommodierung kontraktiv statt expansiv wird. Dies tritt auf, wenn negative Zinsen Bankenprofitabilität und Intermediationskapazität so stark schädigen, dass die resultierende Kreditangebotsreduzierung die direkten stimulativen Effekte niedrigerer Zinsen überwiegt. Das Staffelungssystem der EZB wurde teilweise entwickelt, um diese kontraproduktive Schwelle zu vermeiden.",
          nl: "Het reversal rate vertegenwoordigt het rentetariefniveau waaronder monetaire accommodatie contractief wordt in plaats van expansief. Dit treedt op wanneer negatieve tarieven bankwinstgevendheid en intermediatiecapaciteit zo ernstig beschadigen dat de resulterende vermindering in kredietaanbod de directe stimulerende effecten van lagere tarieven overschrijdt. Het staffelingssysteem van de ECB was deels ontworpen om deze contraproductieve drempel te vermijden."
        }
      },
      {
        question: {
          en: "What was the European Stability Mechanism (ESM) and its relationship to the eurozone crisis?",
          es: "¿Qué fue el Mecanismo Europeo de Estabilidad (MEDE) y su relación con la crisis de la eurozona?",
          de: "Was war der Europäische Stabilitätsmechanismus (ESM) und seine Beziehung zur Eurozone-Krise?",
          nl: "Wat was het Europees Stabiliteitsmechanisme (ESM) en zijn relatie tot de eurozone-crisis?"
        },
        options: [
          { en: "Permanent crisis resolution mechanism established in 2012", es: "Mecanismo permanente de resolución de crisis establecido en 2012", de: "Permanenter Krisenlösungsmechanismus, der 2012 eingerichtet wurde", nl: "Permanent crisisoplossingsmechanisme opgericht in 2012" },
          { en: "Temporary banking union framework", es: "Marco temporal de unión bancaria", de: "Temporärer Bankenunion-Rahmen", nl: "Tijdelijk bankenunie-kader" },
          { en: "ECB quantitative easing program", es: "Programa de flexibilización cuantitativa del BCE", de: "EZB-Programm zur quantitativen Lockerung", nl: "ECB kwantitatieve versoepeling programma" },
          { en: "Single market integration mechanism", es: "Mecanismo de integración de mercado único", de: "Einheitlicher Marktintegrationsmechanismus", nl: "Interne marktintegratiemechanisme" }
        ],
        correct: 0,
        explanation: {
          en: "The ESM was established in 2012 as a permanent crisis resolution mechanism to provide financial assistance to eurozone countries in severe financial difficulty. It replaced temporary facilities like the EFSF and became the eurozone's primary firewall against future crises, with a lending capacity of €500 billion and the ability to directly recapitalize banks under certain conditions.",
          es: "El MEDE se estableció en 2012 como mecanismo permanente de resolución de crisis para proporcionar asistencia financiera a países de la eurozona en dificultades financieras severas. Reemplazó facilidades temporales como el FEEF y se convirtió en el cortafuegos principal de la eurozona contra futuras crisis, con capacidad de préstamo de €500 mil millones y la habilidad de recapitalizar directamente bancos bajo ciertas condiciones.",
          de: "Der ESM wurde 2012 als permanenter Krisenlösungsmechanismus eingerichtet, um Eurozone-Ländern in schweren finanziellen Schwierigkeiten finanzielle Hilfe zu bieten. Er ersetzte temporäre Einrichtungen wie die EFSF und wurde zur primären Brandmauer der Eurozone gegen zukünftige Krisen mit einer Kreditkapazität von 500 Milliarden Euro und der Fähigkeit, Banken unter bestimmten Bedingungen direkt zu rekapitalisieren.",
          nl: "Het ESM werd opgericht in 2012 als permanent crisisoplossingsmechanisme om financiële bijstand te verlenen aan eurozone-landen in ernstige financiële moeilijkheden. Het verving tijdelijke faciliteiten zoals het EFSF en werd de primaire firewall van de eurozone tegen toekomstige crises, met een uitleencapaciteit van €500 miljard en het vermogen om banken onder bepaalde voorwaarden direct te herkapitaliseren."
        }
      },
      {
        question: {
          en: "What was the significance of Mario Draghi's 'whatever it takes' speech in 2012?",
          es: "¿Cuál fue la importancia del discurso 'lo que sea necesario' de Mario Draghi en 2012?",
          de: "Was war die Bedeutung von Mario Draghis 'Whatever it takes'-Rede im Jahr 2012?",
          nl: "Wat was de betekenis van Mario Draghi's 'whatever it takes' toespraak in 2012?"
        },
        options: [
          { en: "Marked ECB's commitment to preserve the euro and led to OMT program", es: "Marcó el compromiso del BCE de preservar el euro y llevó al programa OMT", de: "Markierte EZBs Engagement zur Euro-Erhaltung und führte zum OMT-Programm", nl: "Markeerde ECB's toewijding om de euro te behouden en leidde tot OMT-programma" },
          { en: "Announced immediate fiscal transfers to troubled countries", es: "Anunció transferencias fiscales inmediatas a países problemáticos", de: "Kündigte sofortige Fiskalübertragungen an Problemländer an", nl: "Kondigde onmiddellijke fiscale overdrachten aan naar problematiese landen aan" },
          { en: "Established new eurozone membership criteria", es: "Estableció nuevos criterios de membresía de la eurozona", de: "Etablierte neue Eurozone-Mitgliedschaftskriterien", nl: "Stelde nieuwe eurozone-lidmaatschapscriteria vast" },
          { en: "Created the European banking union", es: "Creó la unión bancaria europea", de: "Schuf die europäische Bankenunion", nl: "Creëerde de Europese bankenunie" }
        ],
        correct: 0,
        explanation: {
          en: "Draghi's speech at the London conference marked a turning point in the eurozone crisis by demonstrating the ECB's unlimited commitment to preserve the euro. This verbal intervention alone significantly reduced bond spreads and led to the development of the Outright Monetary Transactions (OMT) program, which provided a credible backstop against speculation, even though it was never actually used.",
          es: "El discurso de Draghi en la conferencia de Londres marcó un punto de inflexión en la crisis de la eurozona al demostrar el compromiso ilimitado del BCE de preservar el euro. Esta intervención verbal sola redujo significativamente los diferenciales de bonos y llevó al desarrollo del programa de Transacciones Monetarias Directas (OMT), que proporcionó un respaldo creíble contra especulación, aunque nunca se usó realmente.",
          de: "Draghis Rede bei der Londoner Konferenz markierte einen Wendepunkt in der Eurozone-Krise, indem sie das unbegrenzte Engagement der EZB zur Euro-Erhaltung demonstrierte. Diese verbale Intervention allein reduzierte Anleihe-Spreads erheblich und führte zur Entwicklung des Outright Monetary Transactions (OMT)-Programms, das einen glaubwürdigen Backstop gegen Spekulation bot, obwohl es nie tatsächlich verwendet wurde.",
          nl: "Draghi's toespraak op de Londense conferentie markeerde een keerpunt in de eurozone-crisis door de ECB's onbeperkte toewijding te demonstreren om de euro te behouden. Deze verbale interventie alleen verminderde obligatiespreads aanzienlijk en leidde tot de ontwikkeling van het Outright Monetary Transactions (OMT) programma, dat een geloofwaardige backstop tegen speculatie bood, hoewel het nooit daadwerkelijk werd gebruikt."
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