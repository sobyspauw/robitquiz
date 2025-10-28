// Quiz Level 7: Currencies - Euro (Advanced+)
(function() {
  const level7 = {
    name: {
      en: "Euro Currency - Advanced+",
      es: "Moneda Euro - Avanzado+",
      de: "Euro-Währung - Fortgeschritten+",
      nl: "Euro Munt - Gevorderd+"
    },
    questions: [
      {
        question: {
          en: "What is the primary function of the TARGET2 system in the eurozone?",
          es: "¿Cuál es la función principal del sistema TARGET2 en la eurozona?",
          de: "Was ist die Hauptfunktion des TARGET2-Systems in der Eurozone?",
          nl: "Wat is de primaire functie van het TARGET2-systeem in de eurozone?"
        },
        options: [
          { en: "Real-time gross settlement for large-value payments", es: "Liquidación bruta en tiempo real para pagos de gran valor", de: "Echtzeit-Bruttoabwicklung für Großbeträge", nl: "Real-time bruttoafwikkeling voor grote betalingen" },
          { en: "Retail payment processing only", es: "Solo procesamiento de pagos minoristas", de: "Nur Einzelhandelszahlungsverarbeitung", nl: "Alleen retailbetalingsverwerking" },
          { en: "Foreign exchange trading platform", es: "Plataforma de comercio de divisas", de: "Devisenhandelsplattform", nl: "Valutahandelsplatform" },
          { en: "Government bond auction system", es: "Sistema de subastas de bonos gubernamentales", de: "Staatsanleihen-Auktionssystem", nl: "Overheidsobligo veilingsysteem" }
        ],
        correct: 0,
        explanation: {
          en: "TARGET2 (Trans-European Automated Real-time Gross settlement Express Transfer system) processes large-value payments in euros in real-time, ensuring final settlement for critical financial transactions across the eurozone.",
          es: "TARGET2 (Sistema de Transferencia Expresa Automatizada Trans-Europea de Liquidación Bruta en Tiempo Real) procesa pagos de gran valor en euros en tiempo real, asegurando la liquidación final para transacciones financieras críticas en toda la eurozona.",
          de: "TARGET2 (Trans-European Automated Real-time Gross settlement Express Transfer system) verarbeitet Großbeträge in Euro in Echtzeit und gewährleistet die endgültige Abwicklung kritischer Finanztransaktionen in der gesamten Eurozone.",
          nl: "TARGET2 (Trans-European Automated Real-time Gross settlement Express Transfer system) verwerkt grote betalingen in euro's in real-time, waardoor definitieve afwikkeling wordt gewaarborgd voor kritieke financiële transacties in de eurozone."
        }
      },
      {
        question: {
          en: "What triggers the accumulation of TARGET2 balances between national central banks?",
          es: "¿Qué desencadena la acumulación de saldos TARGET2 entre bancos centrales nacionales?",
          de: "Was löst die Anhäufung von TARGET2-Salden zwischen nationalen Zentralbanken aus?",
          nl: "Wat veroorzaakt de accumulatie van TARGET2-saldi tussen nationale centrale banken?"
        },
        options: [
          { en: "Cross-border payment flows without corresponding private capital flows", es: "Flujos de pagos transfronterizos sin flujos de capital privado correspondientes", de: "Grenzüberschreitende Zahlungsströme ohne entsprechende private Kapitalströme", nl: "Grensoverschrijdende betalingsstromen zonder corresponderende private kapitaalstromen" },
          { en: "Differences in national interest rates", es: "Diferencias en las tasas de interés nacionales", de: "Unterschiede in nationalen Zinssätzen", nl: "Verschillen in nationale rentetarieven" },
          { en: "Currency conversion fees", es: "Tarifas de conversión de moneda", de: "Währungsumtauschgebühren", nl: "Valutaconversiekosten" },
          { en: "Technical system errors", es: "Errores técnicos del sistema", de: "Technische Systemfehler", nl: "Technische systeemfouten" }
        ],
        correct: 0,
        explanation: {
          en: "TARGET2 balances arise when cross-border payments are not offset by equivalent private capital flows. For example, if capital flees from one country to another, the central bank of the origin country accumulates negative balances while the destination country accumulates positive balances.",
          es: "Los saldos TARGET2 surgen cuando los pagos transfronterizos no son compensados por flujos de capital privado equivalentes. Por ejemplo, si el capital huye de un país a otro, el banco central del país de origen acumula saldos negativos mientras que el país de destino acumula saldos positivos.",
          de: "TARGET2-Salden entstehen, wenn grenzüberschreitende Zahlungen nicht durch entsprechende private Kapitalströme ausgeglichen werden. Wenn beispielsweise Kapital von einem Land in ein anderes fließt, akkumuliert die Zentralbank des Ursprungslandes negative Salden, während das Zielland positive Salden anhäuft.",
          nl: "TARGET2-saldi ontstaan wanneer grensoverschrijdende betalingen niet worden gecompenseerd door equivalente private kapitaalstromen. Bijvoorbeeld, als kapitaal vlucht van het ene land naar het andere, accumuleert de centrale bank van het oorsprongsland negatieve saldi terwijl het bestemmingsland positieve saldi opbouwt."
        }
      },
      {
        question: {
          en: "Which operational framework does the ECB use for implementing monetary policy through standing facilities?",
          es: "¿Qué marco operacional utiliza el BCE para implementar la política monetaria a través de facilidades permanentes?",
          de: "Welches operative Rahmenwerk nutzt die EZB zur Umsetzung der Geldpolitik durch ständige Fazilitäten?",
          nl: "Welk operationeel kader gebruikt de ECB voor het implementeren van monetair beleid via permanente faciliteiten?"
        },
        options: [
          { en: "Corridor system with deposit and marginal lending facilities", es: "Sistema de corredor con facilidades de depósito y préstamo marginal", de: "Korridor-System mit Einlagen- und Spitzenrefinanzierungsfazilität", nl: "Corridorsysteem met deposito- en marginale leenfaciliteiten" },
          { en: "Fixed rate system with unlimited liquidity", es: "Sistema de tasa fija con liquidez ilimitada", de: "Festzinssystem mit unbegrenzter Liquidität", nl: "Vast tariefsysteem met onbeperkte liquiditeit" },
          { en: "Auction-only system without standing facilities", es: "Sistema solo de subastas sin facilidades permanentes", de: "Nur-Auktions-System ohne ständige Fazilitäten", nl: "Alleen-veilingsysteem zonder permanente faciliteiten" },
          { en: "Bilateral lending arrangements", es: "Acuerdos de préstamo bilateral", de: "Bilaterale Kreditvereinbarungen", nl: "Bilaterale leenregelingen" }
        ],
        correct: 0,
        explanation: {
          en: "The ECB operates a corridor system where the deposit facility provides a floor and the marginal lending facility provides a ceiling for overnight market rates, with the main refinancing rate typically positioned between them to guide short-term interest rates.",
          es: "El BCE opera un sistema de corredor donde la facilidad de depósito proporciona un piso y la facilidad de préstamo marginal proporciona un techo para las tasas de mercado nocturno, con la tasa de refinanciación principal típicamente posicionada entre ellas para guiar las tasas de interés a corto plazo.",
          de: "Die EZB betreibt ein Korridor-System, bei dem die Einlagefazilität eine Untergrenze und die Spitzenrefinanzierungsfazilität eine Obergrenze für Tagesgeld-Marktsätze bietet, wobei der Hauptrefinanzierungssatz typischerweise dazwischen positioniert ist, um kurzfristige Zinssätze zu steuern.",
          nl: "De ECB opereert een corridorsysteem waarbij de depositofaciliteit een bodem en de marginale leenfaciliteit een plafond biedt voor overnight markttarieven, met het hoofdherfinancieringstarief typisch gepositioneerd ertussen om korte termijn rentetarieven te leiden."
        }
      },
      {
        question: {
          en: "What is the 'tiering system' introduced by the ECB in September 2019?",
          es: "¿Qué es el 'sistema de niveles' introducido por el BCE en septiembre de 2019?",
          de: "Was ist das 'Staffelungssystem', das die EZB im September 2019 eingeführt hat?",
          nl: "Wat is het 'staffelingssysteem' dat de ECB in september 2019 heeft geïntroduceerd?"
        },
        options: [
          { en: "A system exempting part of bank reserves from negative deposit rates", es: "Un sistema que exime parte de las reservas bancarias de tasas de depósito negativas", de: "Ein System, das einen Teil der Bankreserven von negativen Einlagensätzen befreit", nl: "Een systeem dat een deel van bankreserves vrijstelt van negatieve depositorentetarieven" },
          { en: "Different capital requirements based on bank size", es: "Diferentes requisitos de capital basados en el tamaño del banco", de: "Unterschiedliche Kapitalanforderungen basierend auf Bankgröße", nl: "Verschillende kapitaalvereisten gebaseerd op bankgrootte" },
          { en: "A classification system for systemically important banks", es: "Un sistema de clasificación para bancos sistémicamente importantes", de: "Ein Klassifizierungssystem für systemisch wichtige Banken", nl: "Een classificatiesysteem voor systeemrelevante banken" },
          { en: "Graduated penalties for non-compliance", es: "Penalizaciones graduadas por incumplimiento", de: "Abgestufte Strafen bei Nichteinhaltung", nl: "Geleidelijke boetes voor niet-naleving" }
        ],
        correct: 0,
        explanation: {
          en: "The tiering system exempts banks from paying the negative deposit rate on part of their excess reserves (up to six times their minimum reserve requirements), helping to mitigate the impact of negative rates on bank profitability while maintaining monetary accommodation.",
          es: "El sistema de niveles exime a los bancos de pagar la tasa de depósito negativa en parte de sus reservas excesivas (hasta seis veces sus requisitos de reserva mínima), ayudando a mitigar el impacto de las tasas negativas en la rentabilidad bancaria mientras mantiene la acomodación monetaria.",
          de: "Das Staffelungssystem befreit Banken davon, den negativen Einlagensatz auf einen Teil ihrer Überschussreserven zu zahlen (bis zum Sechsfachen ihrer Mindestreserveanforderungen), was hilft, die Auswirkungen negativer Zinsen auf die Bankenprofitabilität zu mildern, während die geldpolitische Akkommodierung aufrechterhalten wird.",
          nl: "Het staffelingssysteem stelt banken vrij van het betalen van het negatieve depositorentarief op een deel van hun overtollige reserves (tot zes keer hun minimale reservevereisten), wat helpt de impact van negatieve tarieven op bankwinstgevendheid te verzachten terwijl monetaire accommodatie behouden blijft."
        }
      },
      {
        question: {
          en: "In ECB repo operations, what role does the 'haircut' serve?",
          es: "En las operaciones repo del BCE, ¿qué papel cumple el 'descuento'?",
          de: "Welche Rolle spielt der 'Haircut' bei EZB-Repo-Geschäften?",
          nl: "Welke rol vervult de 'haircut' in ECB repo-operaties?"
        },
        options: [
          { en: "Risk management by requiring collateral value to exceed loan amount", es: "Gestión de riesgo al requerir que el valor de la garantía exceda el monto del préstamo", de: "Risikomanagement durch Forderung, dass der Sicherheitenwert den Kreditbetrag übersteigt", nl: "Risicobeheer door te vereisen dat zekerheidwaarde het leenbedrag overschrijdt" },
          { en: "Interest rate reduction for preferred borrowers", es: "Reducción de tasa de interés para prestatarios preferidos", de: "Zinssatzreduktion für bevorzugte Kreditnehmer", nl: "Rentetariefverlaging voor voorkeurskredietnemer" },
          { en: "Fee charged for operational services", es: "Tarifa cobrada por servicios operacionales", de: "Gebühr für operative Dienstleistungen", nl: "Vergoeding voor operationele diensten" },
          { en: "Penalty for late submission of bids", es: "Penalización por presentación tardía de ofertas", de: "Strafe für verspätete Gebotsabgabe", nl: "Boete voor late indiening van biedingen" }
        ],
        correct: 0,
        explanation: {
          en: "Haircuts are risk control measures that require the market value of collateral to exceed the credit amount by a certain percentage. This protects the ECB against potential losses from collateral value declines and ensures adequate security for all credit operations.",
          es: "Los descuentos son medidas de control de riesgo que requieren que el valor de mercado de la garantía exceda el monto del crédito en un cierto porcentaje. Esto protege al BCE contra pérdidas potenciales por caídas en el valor de la garantía y asegura seguridad adecuada para todas las operaciones de crédito.",
          de: "Haircuts sind Risikokontrollmaßnahmen, die erfordern, dass der Marktwert der Sicherheiten den Kreditbetrag um einen bestimmten Prozentsatz übersteigt. Dies schützt die EZB vor potenziellen Verlusten durch Wertverluste der Sicherheiten und gewährleistet angemessene Sicherheit für alle Kreditgeschäfte.",
          nl: "Haircuts zijn risicobeheersingsmaatregelen die vereisen dat de marktwaarde van onderpand het kredietbedrag met een bepaald percentage overschrijdt. Dit beschermt de ECB tegen potentiële verliezen door waardedaling van onderpand en zorgt voor adequate zekerheid voor alle kredietoperaties."
        }
      },
      {
        question: {
          en: "What distinguishes 'fine-tuning operations' from regular ECB monetary policy operations?",
          es: "¿Qué distingue las 'operaciones de ajuste fino' de las operaciones regulares de política monetaria del BCE?",
          de: "Was unterscheidet 'Feinsteuerungsgeschäfte' von regulären geldpolitischen Operationen der EZB?",
          nl: "Wat onderscheidt 'fine-tuning operaties' van reguliere ECB monetaire beleidsoperaties?"
        },
        options: [
          { en: "They are conducted irregularly to address unexpected liquidity fluctuations", es: "Se conducen irregularmente para abordar fluctuaciones de liquidez inesperadas", de: "Sie werden unregelmäßig durchgeführt, um unerwartete Liquiditätsschwankungen zu bewältigen", nl: "Ze worden onregelmatig uitgevoerd om onverwachte liquiditeitsfluctuaties aan te pakken" },
          { en: "They use only government bonds as collateral", es: "Usan solo bonos gubernamentales como garantía", de: "Sie verwenden nur Staatsanleihen als Sicherheiten", nl: "Ze gebruiken alleen overheidsobligaties als onderpand" },
          { en: "They have longer maturities than standard operations", es: "Tienen vencimientos más largos que las operaciones estándar", de: "Sie haben längere Laufzeiten als Standardgeschäfte", nl: "Ze hebben langere looptijden dan standaard operaties" },
          { en: "They are only available to primary dealers", es: "Solo están disponibles para distribuidores primarios", de: "Sie stehen nur Primärhändlern zur Verfügung", nl: "Ze zijn alleen beschikbaar voor primaire dealers" }
        ],
        correct: 0,
        explanation: {
          en: "Fine-tuning operations are non-regular monetary policy operations conducted by the ECB to manage liquidity in the market and steer interest rates, particularly to smooth unexpected fluctuations in market liquidity that could affect the implementation of monetary policy.",
          es: "Las operaciones de ajuste fino son operaciones de política monetaria no regulares conducidas por el BCE para gestionar la liquidez en el mercado y dirigir las tasas de interés, particularmente para suavizar fluctuaciones inesperadas en la liquidez del mercado que podrían afectar la implementación de la política monetaria.",
          de: "Feinsteuerungsgeschäfte sind nicht-reguläre geldpolitische Operationen der EZB zur Liquiditätssteuerung im Markt und zur Zinslenkung, insbesondere um unerwartete Schwankungen der Marktliquidität zu glätten, die die Umsetzung der Geldpolitik beeinträchtigen könnten.",
          nl: "Fine-tuning operaties zijn niet-reguliere monetaire beleidsoperaties uitgevoerd door de ECB om liquiditeit in de markt te beheren en rentetarieven te sturen, vooral om onverwachte fluctuaties in marktliquiditeit glad te strijken die de implementatie van monetair beleid zouden kunnen beïnvloeden."
        }
      },
      {
        question: {
          en: "What is the significance of the 'allotment ratio' in ECB refinancing operations?",
          es: "¿Cuál es la importancia del 'ratio de adjudicación' en las operaciones de refinanciación del BCE?",
          de: "Was ist die Bedeutung der 'Zuteilungsquote' bei EZB-Refinanzierungsgeschäften?",
          nl: "Wat is de betekenis van de 'toewijzingsratio' in ECB herfinancieringsoperaties?"
        },
        options: [
          { en: "It determines the proportion of bids satisfied when demand exceeds supply", es: "Determina la proporción de ofertas satisfechas cuando la demanda excede la oferta", de: "Es bestimmt den Anteil der erfüllten Gebote, wenn die Nachfrage das Angebot übersteigt", nl: "Het bepaalt het aandeel van biedingen dat wordt voldaan wanneer vraag het aanbod overschrijdt" },
          { en: "It sets the minimum interest rate for participating banks", es: "Establece la tasa de interés mínima para bancos participantes", de: "Es legt den Mindestzinssatz für teilnehmende Banken fest", nl: "Het stelt het minimale rentetarief vast voor deelnemende banken" },
          { en: "It calculates the risk weight of collateral", es: "Calcula el peso de riesgo de la garantía", de: "Es berechnet das Risikogewicht der Sicherheiten", nl: "Het berekent het risicogewicht van onderpand" },
          { en: "It measures the operational efficiency of the system", es: "Mide la eficiencia operacional del sistema", de: "Es misst die operative Effizienz des Systems", nl: "Het meet de operationele efficiëntie van het systeem" }
        ],
        correct: 0,
        explanation: {
          en: "The allotment ratio indicates what percentage of each bank's bid is satisfied in oversubscribed operations. For example, a 50% allotment ratio means banks receive half of what they bid for, helping the ECB control the total amount of liquidity injected into the system.",
          es: "El ratio de adjudicación indica qué porcentaje de la oferta de cada banco se satisface en operaciones con exceso de demanda. Por ejemplo, un ratio de adjudicación del 50% significa que los bancos reciben la mitad de lo que ofertaron, ayudando al BCE a controlar la cantidad total de liquidez inyectada en el sistema.",
          de: "Die Zuteilungsquote gibt an, welcher Prozentsatz des Gebots jeder Bank bei überzeichneten Geschäften erfüllt wird. Eine 50%-Zuteilungsquote bedeutet beispielsweise, dass Banken die Hälfte dessen erhalten, was sie geboten haben, was der EZB hilft, die Gesamtmenge der in das System eingespeisten Liquidität zu kontrollieren.",
          nl: "De toewijzingsratio geeft aan welk percentage van elke bank's bod wordt voldaan in overtekende operaties. Bijvoorbeeld, een 50% toewijzingsratio betekent dat banken de helft ontvangen van wat ze hebben geboden, waardoor de ECB de totale hoeveelheid liquiditeit die in het systeem wordt geïnjecteerd kan controleren."
        }
      },
      {
        question: {
          en: "Which institution provides the technical infrastructure for TARGET2 operations?",
          es: "¿Qué institución proporciona la infraestructura técnica para las operaciones TARGET2?",
          de: "Welche Institution stellt die technische Infrastruktur für TARGET2-Operationen bereit?",
          nl: "Welke instelling biedt de technische infrastructuur voor TARGET2-operaties?"
        },
        options: [
          { en: "Deutsche Bundesbank, Banque de France, and Banca d'Italia", es: "Deutsche Bundesbank, Banque de France y Banca d'Italia", de: "Deutsche Bundesbank, Banque de France und Banca d'Italia", nl: "Deutsche Bundesbank, Banque de France en Banca d'Italia" },
          { en: "European Central Bank exclusively", es: "Banco Central Europeo exclusivamente", de: "Europäische Zentralbank ausschließlich", nl: "Europese Centrale Bank exclusief" },
          { en: "SWIFT consortium", es: "Consorcio SWIFT", de: "SWIFT-Konsortium", nl: "SWIFT consortium" },
          { en: "European Investment Bank", es: "Banco Europeo de Inversiones", de: "Europäische Investitionsbank", nl: "Europese Investeringsbank" }
        ],
        correct: 0,
        explanation: {
          en: "TARGET2 is operated by three central banks - Deutsche Bundesbank, Banque de France, and Banca d'Italia - which provide the technical platform and infrastructure. This shared responsibility ensures system resilience and distributes operational expertise across major eurozone economies.",
          es: "TARGET2 es operado por tres bancos centrales: Deutsche Bundesbank, Banque de France y Banca d'Italia, que proporcionan la plataforma técnica y la infraestructura. Esta responsabilidad compartida asegura la resistencia del sistema y distribuye la experiencia operacional entre las principales economías de la eurozona.",
          de: "TARGET2 wird von drei Zentralbanken betrieben - Deutsche Bundesbank, Banque de France und Banca d'Italia - die die technische Plattform und Infrastruktur bereitstellen. Diese geteilte Verantwortung gewährleistet Systemresilienz und verteilt operative Expertise auf große Eurozone-Volkswirtschaften.",
          nl: "TARGET2 wordt beheerd door drie centrale banken - Deutsche Bundesbank, Banque de France en Banca d'Italia - die het technische platform en infrastructuur bieden. Deze gedeelde verantwoordelijkheid zorgt voor systeemweerbaarheid en verdeelt operationele expertise over grote eurozone economieën."
        }
      },
      {
        question: {
          en: "What is the purpose of the ECB's 'minimum reserve requirements' in the current monetary policy framework?",
          es: "¿Cuál es el propósito de los 'requisitos de reserva mínima' del BCE en el marco actual de política monetaria?",
          de: "Was ist der Zweck der 'Mindestreserveanforderungen' der EZB im aktuellen geldpolitischen Rahmen?",
          nl: "Wat is het doel van de ECB's 'minimale reservevereisten' in het huidige monetaire beleidskader?"
        },
        options: [
          { en: "To stabilize money market rates and create structural liquidity demand", es: "Estabilizar las tasas del mercado monetario y crear demanda estructural de liquidez", de: "Geldmarktsätze stabilisieren und strukturelle Liquiditätsnachfrage schaffen", nl: "Geldmarkttarieven stabiliseren en structurele liquiditeitsvraag creëren" },
          { en: "To control inflation directly", es: "Controlar la inflación directamente", de: "Inflation direkt kontrollieren", nl: "Inflatie direct controleren" },
          { en: "To generate revenue for the ECB", es: "Generar ingresos para el BCE", de: "Einnahmen für die EZB generieren", nl: "Inkomsten genereren voor de ECB" },
          { en: "To restrict bank lending capacity", es: "Restringir la capacidad de préstamo bancario", de: "Bankkreditkapazität einschränken", nl: "Bankleencapaciteit beperken" }
        ],
        correct: 0,
        explanation: {
          en: "Minimum reserve requirements serve to stabilize money market interest rates by creating a structural liquidity shortage that banks must satisfy through ECB operations. This gives the ECB better control over short-term rates and provides automatic stabilizers during liquidity fluctuations.",
          es: "Los requisitos de reserva mínima sirven para estabilizar las tasas de interés del mercado monetario creando un déficit estructural de liquidez que los bancos deben satisfacer a través de operaciones del BCE. Esto da al BCE mejor control sobre las tasas a corto plazo y proporciona estabilizadores automáticos durante fluctuaciones de liquidez.",
          de: "Mindestreserveanforderungen dienen der Stabilisierung der Geldmarktzinsen durch Schaffung eines strukturellen Liquiditätsmangels, den Banken durch EZB-Geschäfte befriedigen müssen. Dies gibt der EZB bessere Kontrolle über kurzfristige Zinsen und bietet automatische Stabilisatoren bei Liquiditätsschwankungen.",
          nl: "Minimale reservevereisten dienen om geldmarkttarieven te stabiliseren door een structureel liquiditeittekort te creëren dat banken moeten voldoen door ECB-operaties. Dit geeft de ECB betere controle over korte termijn tarieven en biedt automatische stabilisatoren tijdens liquiditeitsfluctuaties."
        }
      },
      {
        question: {
          en: "What is the main difference between 'longer-term refinancing operations' (LTROs) and 'main refinancing operations' (MROs)?",
          es: "¿Cuál es la principal diferencia entre las 'operaciones de refinanciación a más largo plazo' (LTROs) y las 'operaciones principales de refinanciación' (MROs)?",
          de: "Was ist der Hauptunterschied zwischen 'längerfristigen Refinanzierungsgeschäften' (LTROs) und 'Hauptrefinanzierungsgeschäften' (MROs)?",
          nl: "Wat is het hoofdverschil tussen 'langere termijn herfinancieringsoperaties' (LTRO's) en 'hoofdherfinancieringsoperaties' (MRO's)?"
        },
        options: [
          { en: "LTROs have longer maturities and provide more stable funding", es: "LTROs tienen vencimientos más largos y proporcionan financiación más estable", de: "LTROs haben längere Laufzeiten und bieten stabilere Finanzierung", nl: "LTRO's hebben langere looptijden en bieden stabielere financiering" },
          { en: "LTROs use different collateral requirements", es: "LTROs usan diferentes requisitos de garantía", de: "LTROs verwenden unterschiedliche Sicherheitenanforderungen", nl: "LTRO's gebruiken verschillende onderpandvereisten" },
          { en: "LTROs are only for government bonds", es: "LTROs son solo para bonos gubernamentales", de: "LTROs sind nur für Staatsanleihen", nl: "LTRO's zijn alleen voor overheidsobligaties" },
          { en: "LTROs have higher interest rates", es: "LTROs tienen tasas de interés más altas", de: "LTROs haben höhere Zinssätze", nl: "LTRO's hebben hogere rentetarieven" }
        ],
        correct: 0,
        explanation: {
          en: "LTROs typically have maturities of three months or longer, providing banks with more stable and predictable funding compared to weekly MROs. This helps banks with their funding planning and reduces the frequency of refinancing, though both operations use the same collateral framework.",
          es: "Los LTROs típicamente tienen vencimientos de tres meses o más, proporcionando a los bancos financiación más estable y predecible comparada con los MROs semanales. Esto ayuda a los bancos con su planificación de financiación y reduce la frecuencia de refinanciación, aunque ambas operaciones usan el mismo marco de garantías.",
          de: "LTROs haben typischerweise Laufzeiten von drei Monaten oder länger und bieten Banken stabilere und vorhersagbarere Finanzierung im Vergleich zu wöchentlichen MROs. Dies hilft Banken bei ihrer Finanzierungsplanung und reduziert die Refinanzierungsfrequenz, obwohl beide Geschäfte denselben Sicherheitenrahmen verwenden.",
          nl: "LTRO's hebben typisch looptijden van drie maanden of langer, waardoor banken stabielere en voorspelbaardere financiering krijgen vergeleken met wekelijkse MRO's. Dit helpt banken met hun financieringsplanning en vermindert de frequentie van herfinanciering, hoewel beide operaties hetzelfde onderpandkader gebruiken."
        }
      },
      {
        question: {
          en: "What determines the 'benchmark allotment amount' in ECB main refinancing operations?",
          es: "¿Qué determina el 'monto de adjudicación de referencia' en las operaciones principales de refinanciación del BCE?",
          de: "Was bestimmt den 'Referenzzuteilungsbetrag' bei EZB-Hauptrefinanzierungsgeschäften?",
          nl: "Wat bepaalt het 'benchmark toewijzingsbedrag' in ECB hoofdherfinancieringsoperaties?"
        },
        options: [
          { en: "The banking system's liquidity needs to meet reserve requirements and autonomous factors", es: "Las necesidades de liquidez del sistema bancario para cumplir requisitos de reserva y factores autónomos", de: "Der Liquiditätsbedarf des Bankensystems zur Erfüllung von Reserveanforderungen und autonomen Faktoren", nl: "De liquiditeitsbehoeften van het banksysteem om reservevereisten en autonome factoren te voldoen" },
          { en: "The total capital of participating banks", es: "El capital total de los bancos participantes", de: "Das Gesamtkapital der teilnehmenden Banken", nl: "Het totale kapitaal van deelnemende banken" },
          { en: "Previous week's trading volumes", es: "Volúmenes de negociación de la semana anterior", de: "Handelsvolumen der Vorwoche", nl: "Handelsvolumes van de vorige week" },
          { en: "Government debt issuance schedules", es: "Calendarios de emisión de deuda gubernamental", de: "Staatsschulden-Emissionspläne", nl: "Overheidsschulduitgifteschema's" }
        ],
        correct: 0,
        explanation: {
          en: "The benchmark allotment amount is calculated based on the banking system's expected liquidity needs, considering minimum reserve requirements, autonomous liquidity factors (like banknotes in circulation and government deposits), and the desired level of excess liquidity to ensure smooth money market functioning.",
          es: "El monto de adjudicación de referencia se calcula basado en las necesidades de liquidez esperadas del sistema bancario, considerando requisitos de reserva mínima, factores de liquidez autónomos (como billetes en circulación y depósitos gubernamentales), y el nivel deseado de liquidez excesiva para asegurar el funcionamiento suave del mercado monetario.",
          de: "Der Referenzzuteilungsbetrag wird basierend auf dem erwarteten Liquiditätsbedarf des Bankensystems berechnet, unter Berücksichtigung von Mindestreserveanforderungen, autonomen Liquiditätsfaktoren (wie umlaufende Banknoten und Staatseinlagen) und dem gewünschten Überschussliquiditätsniveau für ein reibungsloses Funktionieren des Geldmarkts.",
          nl: "Het benchmark toewijzingsbedrag wordt berekend op basis van de verwachte liquiditeitsbehoeften van het banksysteem, rekening houdend met minimale reservevereisten, autonome liquiditeitsfactoren (zoals bankbiljetten in omloop en overheidsdeposito's), en het gewenste niveau van overtollige liquiditeit om soepele geldmarktwerking te waarborgen."
        }
      },
      {
        question: {
          en: "What is the role of 'eligible collateral' in ECB credit operations?",
          es: "¿Cuál es el papel de la 'garantía elegible' en las operaciones de crédito del BCE?",
          de: "Welche Rolle spielt 'notenbankfähige Sicherheiten' bei EZB-Kreditgeschäften?",
          nl: "Wat is de rol van 'geschikt onderpand' in ECB kredietoperaties?"
        },
        options: [
          { en: "To secure all credit extended by the ECB to counterparties", es: "Asegurar todo el crédito extendido por el BCE a contrapartes", de: "Alle von der EZB an Geschäftspartner gewährten Kredite abzusichern", nl: "Alle door de ECB aan tegenpartijen verstrekte kredieten veilig te stellen" },
          { en: "To determine interest rates for operations", es: "Determinar tasas de interés para operaciones", de: "Zinssätze für Geschäfte bestimmen", nl: "Rentetarieven voor operaties bepalen" },
          { en: "To calculate bank capital requirements", es: "Calcular requisitos de capital bancario", de: "Bankenkapitalanforderungen berechnen", nl: "Bankkapitaalvereisten berekenen" },
          { en: "To set trading limits for banks", es: "Establecer límites de negociación para bancos", de: "Handelslimits für Banken festlegen", nl: "Handelslimieten voor banken vaststellen" }
        ],
        correct: 0,
        explanation: {
          en: "Eligible collateral is required to secure all credit operations between the ECB and its counterparties, protecting the ECB against credit risk. The collateral framework defines which assets are acceptable and their risk control measures, ensuring the ECB can recover funds if a counterparty defaults.",
          es: "La garantía elegible es requerida para asegurar todas las operaciones de crédito entre el BCE y sus contrapartes, protegiendo al BCE contra el riesgo crediticio. El marco de garantías define qué activos son aceptables y sus medidas de control de riesgo, asegurando que el BCE pueda recuperar fondos si una contraparte incumple.",
          de: "Notenbankfähige Sicherheiten sind erforderlich, um alle Kreditgeschäfte zwischen der EZB und ihren Geschäftspartnern abzusichern und die EZB vor Kreditrisiken zu schützen. Der Sicherheitenrahmen definiert, welche Vermögenswerte akzeptabel sind und ihre Risikokontrollmaßnahmen, um sicherzustellen, dass die EZB Gelder zurückfordern kann, wenn ein Geschäftspartner ausfällt.",
          nl: "Geschikt onderpand is vereist om alle kredietoperaties tussen de ECB en haar tegenpartijen veilig te stellen, waardoor de ECB wordt beschermd tegen kredietrisico. Het onderpandkader definieert welke activa acceptabel zijn en hun risicobeheersingsmaatregelen, waardoor wordt gewaarborgd dat de ECB fondsen kan terugvorderen als een tegenpartij in gebreke blijft."
        }
      },
      {
        question: {
          en: "How does the ECB's 'two-tier system' for the deposit facility work?",
          es: "¿Cómo funciona el 'sistema de dos niveles' del BCE para la facilidad de depósito?",
          de: "Wie funktioniert das 'zweistufige System' der EZB für die Einlagefazilität?",
          nl: "Hoe werkt het 'twee-tier systeem' van de ECB voor de depositofaciliteit?"
        },
        options: [
          { en: "Banks pay negative rates only on reserves exceeding the exemption threshold", es: "Los bancos pagan tasas negativas solo en reservas que exceden el umbral de exención", de: "Banken zahlen negative Zinsen nur auf Reserven über der Befreiungsgrenze", nl: "Banken betalen negatieve tarieven alleen op reserves die de vrijstellingsdrempel overschrijden" },
          { en: "Different rates apply to different types of banks", es: "Diferentes tasas se aplican a diferentes tipos de bancos", de: "Unterschiedliche Zinssätze gelten für verschiedene Bankentypen", nl: "Verschillende tarieven gelden voor verschillende banktypes" },
          { en: "Rates change twice per day", es: "Las tasas cambian dos veces por día", de: "Zinssätze ändern sich zweimal täglich", nl: "Tarieven veranderen twee keer per dag" },
          { en: "Only government bonds receive preferential treatment", es: "Solo los bonos gubernamentales reciben trato preferencial", de: "Nur Staatsanleihen erhalten Vorzugsbehandlung", nl: "Alleen overheidsobligaties krijgen preferentiële behandeling" }
        ],
        correct: 0,
        explanation: {
          en: "The two-tier system means banks are exempt from negative deposit rates on holdings up to six times their minimum reserve requirements, while amounts above this threshold are subject to the negative deposit rate. This helps protect bank profitability while maintaining the effectiveness of negative rate policy.",
          es: "El sistema de dos niveles significa que los bancos están exentos de tasas de depósito negativas en tenencias hasta seis veces sus requisitos de reserva mínima, mientras que los montos por encima de este umbral están sujetos a la tasa de depósito negativa. Esto ayuda a proteger la rentabilidad bancaria mientras mantiene la efectividad de la política de tasas negativas.",
          de: "Das zweistufige System bedeutet, dass Banken von negativen Einlagensätzen auf Bestände bis zum Sechsfachen ihrer Mindestreserveanforderungen befreit sind, während Beträge über dieser Schwelle dem negativen Einlagensatz unterliegen. Dies hilft, die Bankenprofitabilität zu schützen, während die Wirksamkeit der Negativzinspolitik erhalten bleibt.",
          nl: "Het twee-tier systeem betekent dat banken vrijgesteld zijn van negatieve depositorentertarieven op bezittingen tot zes keer hun minimale reservevereisten, terwijl bedragen boven deze drempel onderworpen zijn aan het negatieve depositorentarief. Dit helpt bankwinstgevendheid te beschermen terwijl de effectiviteit van negatief rentebeleid behouden blijft."
        }
      },
      {
        question: {
          en: "What is the significance of 'T2S' (TARGET2-Securities) in European financial market infrastructure?",
          es: "¿Cuál es la importancia de 'T2S' (TARGET2-Securities) en la infraestructura del mercado financiero europeo?",
          de: "Was ist die Bedeutung von 'T2S' (TARGET2-Securities) in der europäischen Finanzmarktinfrastruktur?",
          nl: "Wat is de betekenis van 'T2S' (TARGET2-Securities) in de Europese financiële marktinfrastructuur?"
        },
        options: [
          { en: "It provides securities settlement services in central bank money", es: "Proporciona servicios de liquidación de valores en dinero del banco central", de: "Es bietet Wertpapierabwicklungsdienste in Zentralbankgeld", nl: "Het biedt effectenafwikkelingsdiensten in centraal bankgeld" },
          { en: "It replaces the TARGET2 payment system", es: "Reemplaza el sistema de pagos TARGET2", de: "Es ersetzt das TARGET2-Zahlungssystem", nl: "Het vervangt het TARGET2-betalingssysteem" },
          { en: "It handles only government bond transactions", es: "Maneja solo transacciones de bonos gubernamentales", de: "Es verarbeitet nur Staatsanleihen-Transaktionen", nl: "Het behandelt alleen overheidsobligatietransacties" },
          { en: "It operates independently of central banks", es: "Opera independientemente de los bancos centrales", de: "Es operiert unabhängig von Zentralbanken", nl: "Het opereert onafhankelijk van centrale banken" }
        ],
        correct: 0,
        explanation: {
          en: "T2S is a securities settlement platform that enables Central Securities Depositories to settle securities transactions in central bank money, providing delivery-versus-payment functionality and harmonizing post-trade processes across Europe while reducing settlement risk and costs.",
          es: "T2S es una plataforma de liquidación de valores que permite a los Depositarios Centrales de Valores liquidar transacciones de valores en dinero del banco central, proporcionando funcionalidad de entrega contra pago y armonizando procesos post-negociación en toda Europa mientras reduce el riesgo y costos de liquidación.",
          de: "T2S ist eine Wertpapierabwicklungsplattform, die es Zentralen Wertpapierverwahrern ermöglicht, Wertpapiertransaktionen in Zentralbankgeld abzuwickeln, Delivery-versus-Payment-Funktionalität bietet und Post-Trade-Prozesse europaweit harmonisiert, während Abwicklungsrisiken und -kosten reduziert werden.",
          nl: "T2S is een effectenafwikkelingsplatform dat Centrale Effectenbewaarinstellingen in staat stelt effectentransacties af te wikkelen in centraal bankgeld, delivery-versus-payment functionaliteit biedt en post-trade processen harmoniseert in heel Europa terwijl afwikkelingsrisico en kosten worden verminderd."
        }
      },
      {
        question: {
          en: "What triggers the ECB's 'marginal lending facility' to be used by banks?",
          es: "¿Qué desencadena que los bancos usen la 'facilidad de préstamo marginal' del BCE?",
          de: "Was löst die Nutzung der 'Spitzenrefinanzierungsfazilität' der EZB durch Banken aus?",
          nl: "Wat veroorzaakt dat banken de 'marginale leenfaciliteit' van de ECB gebruiken?"
        },
        options: [
          { en: "Banks cannot obtain sufficient liquidity from market sources or regular ECB operations", es: "Los bancos no pueden obtener liquidez suficiente de fuentes de mercado u operaciones regulares del BCE", de: "Banken können nicht ausreichend Liquidität aus Marktquellen oder regulären EZB-Geschäften erhalten", nl: "Banken kunnen onvoldoende liquiditeit verkrijgen uit marktbronnen of reguliere ECB-operaties" },
          { en: "Banks want to earn higher interest rates", es: "Los bancos quieren ganar tasas de interés más altas", de: "Banken wollen höhere Zinssätze verdienen", nl: "Banken willen hogere rentetarieven verdienen" },
          { en: "The facility offers better collateral terms", es: "La facilidad ofrece mejores términos de garantía", de: "Die Fazilität bietet bessere Sicherheitenbedingungen", nl: "De faciliteit biedt betere onderpandvoorwaarden" },
          { en: "Banks are required to use it monthly", es: "Los bancos están obligados a usarla mensualmente", de: "Banken sind verpflichtet, sie monatlich zu nutzen", nl: "Banken zijn verplicht deze maandelijks te gebruiken" }
        ],
        correct: 0,
        explanation: {
          en: "The marginal lending facility serves as a 'safety valve' for banks that cannot obtain sufficient overnight funding from the market or through regular ECB refinancing operations. Banks typically avoid it due to its penalty rate (usually 100 basis points above the main rate), using it only when facing acute liquidity shortages.",
          es: "La facilidad de préstamo marginal sirve como una 'válvula de seguridad' para bancos que no pueden obtener financiación nocturna suficiente del mercado o a través de operaciones regulares de refinanciación del BCE. Los bancos típicamente la evitan debido a su tasa de penalización (usualmente 100 puntos básicos por encima de la tasa principal), usándola solo cuando enfrentan escasez aguda de liquidez.",
          de: "Die Spitzenrefinanzierungsfazilität dient als 'Sicherheitsventil' für Banken, die nicht ausreichend Übernachtfinanzierung vom Markt oder durch reguläre EZB-Refinanzierungsgeschäfte erhalten können. Banken meiden sie typischerweise wegen ihres Strafzinses (meist 100 Basispunkte über dem Hauptsatz) und nutzen sie nur bei akuten Liquiditätsengpässen.",
          nl: "De marginale leenfaciliteit dient als 'veiligheidsklep' voor banken die onvoldoende overnight financiering kunnen verkrijgen van de markt of via reguliere ECB herfinancieringsoperaties. Banken vermijden deze doorgaans vanwege het boetetarief (meestal 100 basispunten boven het hoofdtarief), en gebruiken het alleen bij acute liquiditeitstekorten."
        }
      },
      {
        question: {
          en: "How does the ECB coordinate monetary policy implementation across different time zones in the eurozone?",
          es: "¿Cómo coordina el BCE la implementación de política monetaria a través de diferentes zonas horarias en la eurozona?",
          de: "Wie koordiniert die EZB die geldpolitische Umsetzung über verschiedene Zeitzonen in der Eurozone hinweg?",
          nl: "Hoe coördineert de ECB de implementatie van monetair beleid over verschillende tijdzones in de eurozone?"
        },
        options: [
          { en: "All operations follow Central European Time for uniformity", es: "Todas las operaciones siguen la Hora Central Europea para uniformidad", de: "Alle Geschäfte folgen der Mitteleuropäischen Zeit für Einheitlichkeit", nl: "Alle operaties volgen Midden-Europese Tijd voor uniformiteit" },
          { en: "Each country operates on local time", es: "Cada país opera en hora local", de: "Jedes Land operiert in Ortszeit", nl: "Elk land opereert op lokale tijd" },
          { en: "Operations are staggered throughout the day", es: "Las operaciones se escalonan durante el día", de: "Geschäfte sind über den Tag gestaffelt", nl: "Operaties worden gespreid over de dag" },
          { en: "Only major financial centers participate", es: "Solo participan los principales centros financieros", de: "Nur große Finanzzentren nehmen teil", nl: "Alleen grote financiële centra nemen deel" }
        ],
        correct: 0,
        explanation: {
          en: "The ECB uses Central European Time (CET/CEST) as the standard for all monetary policy operations across the eurozone, regardless of local time zones. This ensures synchronized implementation of monetary policy and prevents arbitrage opportunities that could arise from timing differences in policy execution.",
          es: "El BCE usa la Hora Central Europea (CET/CEST) como estándar para todas las operaciones de política monetaria en la eurozona, independientemente de las zonas horarias locales. Esto asegura implementación sincronizada de la política monetaria y previene oportunidades de arbitraje que podrían surgir de diferencias de tiempo en la ejecución de políticas.",
          de: "Die EZB verwendet die Mitteleuropäische Zeit (MEZ/MESZ) als Standard für alle geldpolitischen Operationen in der Eurozone, unabhängig von lokalen Zeitzonen. Dies gewährleistet eine synchronisierte Umsetzung der Geldpolitik und verhindert Arbitragemöglichkeiten, die durch Zeitunterschiede bei der Politikausführung entstehen könnten.",
          nl: "De ECB gebruikt Midden-Europese Tijd (MET/MEST) als standaard voor alle monetaire beleidsoperaties in de eurozone, ongeacht lokale tijdzones. Dit zorgt voor gesynchroniseerde implementatie van monetair beleid en voorkomt arbitragemogelijkheden die zouden kunnen ontstaan door tijdsverschillen in beleidsuitvoering."
        }
      },
      {
        question: {
          en: "What is the purpose of 'autonomous factors' in ECB liquidity management?",
          es: "¿Cuál es el propósito de los 'factores autónomos' en la gestión de liquidez del BCE?",
          de: "Was ist der Zweck der 'autonomen Faktoren' im EZB-Liquiditätsmanagement?",
          nl: "Wat is het doel van 'autonome factoren' in ECB liquiditeitsbeheer?"
        },
        options: [
          { en: "They represent liquidity factors outside the ECB's direct control that affect banking system liquidity", es: "Representan factores de liquidez fuera del control directo del BCE que afectan la liquidez del sistema bancario", de: "Sie repräsentieren Liquiditätsfaktoren außerhalb der direkten EZB-Kontrolle, die die Liquidität des Bankensystems beeinflussen", nl: "Ze vertegenwoordigen liquiditeitsfactoren buiten directe ECB-controle die de liquiditeit van het banksysteem beïnvloeden" },
          { en: "They are interest rates set automatically by market forces", es: "Son tasas de interés establecidas automáticamente por fuerzas del mercado", de: "Es sind Zinssätze, die automatisch durch Marktkräfte festgelegt werden", nl: "Het zijn rentetarieven die automatisch door marktkrachten worden vastgesteld" },
          { en: "They determine the capital adequacy of banks", es: "Determinan la adecuación de capital de los bancos", de: "Sie bestimmen die Kapitaladäquanz der Banken", nl: "Ze bepalen de kapitaaltoereikendheid van banken" },
          { en: "They control cross-border payment flows", es: "Controlan los flujos de pagos transfronterizos", de: "Sie kontrollieren grenzüberschreitende Zahlungsströme", nl: "Ze controleren grensoverschrijdende betalingsstromen" }
        ],
        correct: 0,
        explanation: {
          en: "Autonomous factors include elements like banknotes in circulation, government deposits with central banks, and foreign exchange operations that affect banking system liquidity independently of ECB policy operations. The ECB must forecast and offset these factors through its regular operations to maintain desired liquidity conditions.",
          es: "Los factores autónomos incluyen elementos como billetes en circulación, depósitos gubernamentales con bancos centrales, y operaciones de cambio de divisas que afectan la liquidez del sistema bancario independientemente de las operaciones de política del BCE. El BCE debe pronosticar y compensar estos factores a través de sus operaciones regulares para mantener las condiciones de liquidez deseadas.",
          de: "Autonome Faktoren umfassen Elemente wie umlaufende Banknoten, Staatseinlagen bei Zentralbanken und Devisenoperationen, die die Liquidität des Bankensystems unabhängig von EZB-Politikoperationen beeinflussen. Die EZB muss diese Faktoren prognostizieren und durch ihre regulären Geschäfte ausgleichen, um gewünschte Liquiditätsbedingungen aufrechtzuerhalten.",
          nl: "Autonome factoren omvatten elementen zoals bankbiljetten in omloop, overheidsdeposito's bij centrale banken, en valutaoperaties die de liquiditeit van het banksysteem beïnvloeden onafhankelijk van ECB-beleidsoperaties. De ECB moet deze factoren voorspellen en compenseren via haar reguliere operaties om gewenste liquiditeitsomstandigheden te handhaven."
        }
      },
      {
        question: {
          en: "What distinguishes the ECB's approach to collateral valuation from other major central banks?",
          es: "¿Qué distingue el enfoque del BCE para la valoración de garantías de otros bancos centrales importantes?",
          de: "Was unterscheidet den EZB-Ansatz zur Sicherheitenbewertung von anderen großen Zentralbanken?",
          nl: "Wat onderscheidt de ECB's benadering van onderpandwaardering van andere grote centrale banken?"
        },
        options: [
          { en: "The ECB accepts a broader range of collateral from multiple jurisdictions and rating agencies", es: "El BCE acepta una gama más amplia de garantías de múltiples jurisdicciones y agencias de calificación", de: "Die EZB akzeptiert eine breitere Palette von Sicherheiten aus mehreren Jurisdiktionen und Ratingagenturen", nl: "De ECB accepteert een breder scala aan onderpand uit meerdere jurisdicties en ratingbureaus" },
          { en: "The ECB only accepts government securities", es: "El BCE solo acepta valores gubernamentales", de: "Die EZB akzeptiert nur Staatsanleihen", nl: "De ECB accepteert alleen overheidspapieren" },
          { en: "The ECB uses fixed valuations regardless of market conditions", es: "El BCE usa valoraciones fijas independientemente de las condiciones del mercado", de: "Die EZB verwendet feste Bewertungen unabhängig von Marktbedingungen", nl: "De ECB gebruikt vaste waarderingen ongeacht marktomstandigheden" },
          { en: "The ECB relies exclusively on internal ratings", es: "El BCE se basa exclusivamente en calificaciones internas", de: "Die EZB verlässt sich ausschließlich auf interne Ratings", nl: "De ECB vertrouwt uitsluitend op interne ratings" }
        ],
        correct: 0,
        explanation: {
          en: "The ECB operates a 'single list' collateral framework accepting eligible assets from all eurozone countries and applying uniform risk control measures. This broader approach accommodates the diverse financial markets across the eurozone while maintaining equivalent risk protection through harmonized haircuts and eligibility criteria.",
          es: "El BCE opera un marco de garantías de 'lista única' aceptando activos elegibles de todos los países de la eurozona y aplicando medidas uniformes de control de riesgo. Este enfoque más amplio acomoda los diversos mercados financieros en la eurozona mientras mantiene protección de riesgo equivalente a través de descuentos armonizados y criterios de elegibilidad.",
          de: "Die EZB betreibt einen 'Single List'-Sicherheitenrahmen, der notenbankfähige Vermögenswerte aus allen Eurozone-Ländern akzeptiert und einheitliche Risikokontrollmaßnahmen anwendet. Dieser breitere Ansatz berücksichtigt die vielfältigen Finanzmärkte in der Eurozone, während durch harmonisierte Haircuts und Zulassungskriterien gleichwertiger Risikoschutz gewährleistet wird.",
          nl: "De ECB opereert een 'single list' onderpandkader dat geschikt onderpand uit alle eurozone landen accepteert en uniforme risicobeheersingsmaatregelen toepast. Deze bredere benadering accommodeert de diverse financiële markten in de eurozone terwijl equivalente risicobescherming wordt gehandhaafd door geharmoniseerde haircuts en geschiktheidscriteria."
        }
      },
      {
        question: {
          en: "What is the purpose of the ECB's Targeted Longer-Term Refinancing Operations (TLTROs)?",
          es: "¿Cuál es el propósito de las Operaciones de Refinanciamiento a Largo Plazo Dirigidas (TLTRO) del BCE?",
          de: "Was ist der Zweck der gezielten längerfristigen Refinanzierungsgeschäfte (TLTROs) der EZB?",
          nl: "Wat is het doel van de Targeted Longer-Term Refinancing Operations (TLTROs) van de ECB?"
        },
        options: [
          { en: "Incentivize bank lending to real economy sectors", es: "Incentivar préstamos bancarios a sectores de economía real", de: "Bankkredite an Realwirtschaftssektoren incentivieren", nl: "Bankuitlening aan reële economie sectoren stimuleren" },
          { en: "Provide unlimited liquidity to all banks", es: "Proporcionar liquidez ilimitada a todos los bancos", de: "Unbegrenzte Liquidität für alle Banken bereitstellen", nl: "Onbeperkte liquiditeit aan alle banken verstrekken" },
          { en: "Replace all other ECB operations", es: "Reemplazar todas las demás operaciones del BCE", de: "Alle anderen EZB-Geschäfte ersetzen", nl: "Alle andere ECB-operaties vervangen" },
          { en: "Fund government deficit spending", es: "Financiar gasto deficitario gubernamental", de: "Staatliche Defizitausgaben finanzieren", nl: "Overheidstekortuitgaven financieren" }
        ],
        correct: 0,
        explanation: {
          en: "TLTROs provide banks with long-term funding at attractive rates conditional on their lending performance to the real economy, particularly to non-financial corporations and households. The rates can even become negative if banks exceed lending benchmarks, creating strong incentives for credit intermediation.",
          es: "Las TLTRO proporcionan a los bancos financiamiento a largo plazo a tasas atractivas condicionado a su desempeño crediticio hacia la economía real, particularmente a corporaciones no financieras y hogares. Las tasas pueden incluso volverse negativas si los bancos superan las referencias crediticias, creando incentivos fuertes para intermediación crediticia.",
          de: "TLTROs bieten Banken langfristige Finanzierung zu attraktiven Zinssätzen bedingt durch ihre Kreditvergabe-Performance an die Realwirtschaft, insbesondere an nicht-finanzielle Unternehmen und Haushalte. Die Zinssätze können sogar negativ werden, wenn Banken Kreditbenchmarks übertreffen, was starke Anreize für Kreditintermediation schafft.",
          nl: "TLTROs bieden banken langetermijnfinanciering tegen aantrekkelijke tarieven voorwaardelijk aan hun uitleenprestaties aan de reële economie, met name aan niet-financiële bedrijven en huishoudens. De tarieven kunnen zelfs negatief worden als banken uitleenbenchmarks overtreffen, wat sterke prikkels voor kredietintermediatie creëert."
        }
      },
      {
        question: {
          en: "How does the ECB's tiered system for the deposit facility rate work?",
          es: "¿Cómo funciona el sistema de niveles del BCE para la tasa de facilidad de depósito?",
          de: "Wie funktioniert das Staffelungssystem der EZB für den Einlagefazilitätssatz?",
          nl: "Hoe werkt het gelaagde systeem van de ECB voor de depositofaciliteitsrente?"
        },
        options: [
          { en: "Exempts portion of bank reserves from negative rates", es: "Exime una porción de las reservas bancarias de tasas negativas", de: "Befreit einen Teil der Bankreserven von negativen Zinssätzen", nl: "Vrijstelt een deel van bankreserves van negatieve rentes" },
          { en: "Applies uniform negative rates to all deposits", es: "Aplica tasas negativas uniformes a todos los depósitos", de: "Wendet einheitliche Negativzinsen auf alle Einlagen an", nl: "Past uniforme negatieve rentes toe op alle deposito's" },
          { en: "Only affects government deposits", es: "Solo afecta depósitos gubernamentales", de: "Betrifft nur Staatseinlagen", nl: "Beïnvloedt alleen overheidsdeposito's" },
          { en: "Sets different rates for different countries", es: "Establece tasas diferentes para diferentes países", de: "Setzt verschiedene Zinssätze für verschiedene Länder", nl: "Stelt verschillende tarieven vast voor verschillende landen" }
        ],
        correct: 0,
        explanation: {
          en: "The tiered system exempts a multiple of banks' minimum reserve requirements from the negative deposit facility rate, reducing the burden on bank profitability while preserving the accommodative stance. Banks pay 0% on exempt amounts and the negative rate on excess holdings, balancing monetary transmission with financial stability considerations.",
          es: "El sistema de niveles exime un múltiplo de los requerimientos de reservas mínimas de los bancos de la tasa negativa de facilidad de depósito, reduciendo la carga en la rentabilidad bancaria mientras preserva la postura acomodaticia. Los bancos pagan 0% en cantidades exentas y la tasa negativa en tenencias excesivas, equilibrando transmisión monetaria con consideraciones de estabilidad financiera.",
          de: "Das Staffelungssystem befreit ein Vielfaches der Mindestreserveanforderungen der Banken vom negativen Einlagefazilitätssatz, wodurch die Belastung der Bankenprofitabilität reduziert wird, während die akkommodierende Haltung beibehalten wird. Banken zahlen 0% auf befreite Beträge und den negativen Zinssatz auf Überschussbestände, wodurch Geldtransmission mit Finanzstabilitätsüberlegungen ausbalanciert wird.",
          nl: "Het gelaagde systeem vrijstelt een veelvoud van banken's minimale reservevereisten van de negatieve depositofaciliteitsrente, waardoor de last op bankwinstgevendheid wordt verminderd terwijl de accommoderende houding behouden blijft. Banken betalen 0% over vrijgestelde bedragen en de negatieve rente over overtollige bezittingen, waarmee monetaire transmissie wordt gebalanceerd met financiële stabiliteitsconsideraties."
        }
      }
    ]
  };

  // Export for use in the quiz application
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level7;
  } else if (typeof window !== 'undefined') {
    window.level7 = level7;
  }
})();