// Quiz Level 2: Currencies - Euro
(function() {
  const level2 = {
    name: {
      en: "Euro - Intermediate",
      es: "Euro - Intermedio",
      de: "Euro - Mittelstufe",
      nl: "Euro - Gemiddeld"
    },
    questions: [
      {
        question: {
          en: "What is the primary mandate of the European Central Bank?",
          es: "¿Cuál es el mandato principal del Banco Central Europeo?",
          de: "Was ist das Hauptmandat der Europäischen Zentralbank?",
          nl: "Wat is het primaire mandaat van de Europese Centrale Bank?"
        },
        options: [
          { en: "Price stability", es: "Estabilidad de precios", de: "Preisstabilität", nl: "Prijsstabiliteit" },
          { en: "Full employment", es: "Pleno empleo", de: "Vollbeschäftigung", nl: "Volledige werkgelegenheid" },
          { en: "Economic growth", es: "Crecimiento económico", de: "Wirtschaftswachstum", nl: "Economische groei" },
          { en: "Fiscal balance", es: "Equilibrio fiscal", de: "Fiskalisches Gleichgewicht", nl: "Fiscaal evenwicht" }
        ],
        correct: 0,
        explanation: {
          en: "The ECB's primary mandate is to maintain price stability in the eurozone, defined as inflation close to but below 2% over the medium term. This is the overriding objective that takes precedence over other economic goals.",
          es: "El mandato principal del BCE es mantener la estabilidad de precios en la eurozona, definida como inflación cercana pero por debajo del 2% a medio plazo. Este es el objetivo primordial que tiene precedencia sobre otros objetivos económicos.",
          de: "Das Hauptmandat der EZB ist die Aufrechterhaltung der Preisstabilität in der Eurozone, definiert als Inflation nahe, aber unter 2% mittelfristig. Dies ist das übergeordnete Ziel, das Vorrang vor anderen wirtschaftlichen Zielen hat.",
          nl: "Het primaire mandaat van de ECB is het handhaven van prijsstabiliteit in de eurozone, gedefinieerd als inflatie dicht bij maar onder de 2% op middellange termijn. Dit is het overkoepelende doel dat voorrang heeft boven andere economische doelen."
        }
      },
      {
        question: {
          en: "What is the target inflation rate for the eurozone?",
          es: "¿Cuál es la tasa de inflación objetivo para la eurozona?",
          de: "Wie hoch ist die Zielinflationsrate für die Eurozone?",
          nl: "Wat is het streefinflatiepercentage voor de eurozone?"
        },
        options: [
          { en: "Below 2%", es: "Menos del 2%", de: "Unter 2%", nl: "Onder de 2%" },
          { en: "Close to 2%", es: "Cerca del 2%", de: "Nahe 2%", nl: "Dicht bij 2%" },
          { en: "Above 2%", es: "Más del 2%", de: "Über 2%", nl: "Boven de 2%" },
          { en: "Exactly 2%", es: "Exactamente 2%", de: "Genau 2%", nl: "Precies 2%" }
        ],
        correct: 1,
        explanation: {
          en: "The ECB revised its inflation target in 2021 to 2% over the medium term, representing a symmetric target. Previously, it aimed for 'close to but below 2%', but now views both undershooting and overshooting as equally undesirable.",
          es: "El BCE revisó su objetivo de inflación en 2021 al 2% a medio plazo, representando un objetivo simétrico. Anteriormente, apuntaba a 'cerca pero por debajo del 2%', pero ahora ve tanto quedarse corto como excederse como igualmente indeseables.",
          de: "Die EZB überarbeitete ihr Inflationsziel 2021 auf 2% mittelfristig, was ein symmetrisches Ziel darstellt. Zuvor zielte sie auf 'nahe, aber unter 2%', aber jetzt betrachtet sie sowohl Unter- als auch Überschreitung als gleichermaßen unerwünscht.",
          nl: "De ECB herzag haar inflatiedoel in 2021 naar 2% op middellange termijn, wat een symmetrisch doel vertegenwoordigt. Eerder richtte ze op 'dicht bij maar onder 2%', maar nu beschouwt ze zowel onderschieten als overschieten als even onwenselijk."
        }
      },
      {
        question: {
          en: "How often does the ECB Governing Council meet to discuss monetary policy?",
          es: "¿Con qué frecuencia se reúne el Consejo de Gobierno del BCE para discutir política monetaria?",
          de: "Wie oft trifft sich der EZB-Rat, um über Geldpolitik zu diskutieren?",
          nl: "Hoe vaak komt de Raad van Bestuur van de ECB bijeen om monetair beleid te bespreken?"
        },
        options: [
          { en: "Monthly", es: "Mensualmente", de: "Monatlich", nl: "Maandelijks" },
          { en: "Every six weeks", es: "Cada seis semanas", de: "Alle sechs Wochen", nl: "Elke zes weken" },
          { en: "Quarterly", es: "Trimestralmente", de: "Vierteljährlich", nl: "Driemaandelijks" },
          { en: "Twice yearly", es: "Dos veces al año", de: "Zweimal jährlich", nl: "Twee keer per jaar" }
        ],
        correct: 1,
        explanation: {
          en: "The ECB Governing Council meets every six weeks (8 times per year) to assess economic conditions and make monetary policy decisions. This schedule allows for regular policy reviews while maintaining consistency and predictability.",
          es: "El Consejo de Gobierno del BCE se reúne cada seis semanas (8 veces al año) para evaluar las condiciones económicas y tomar decisiones de política monetaria. Este cronograma permite revisiones regulares de política mientras mantiene consistencia y previsibilidad.",
          de: "Der EZB-Rat trifft sich alle sechs Wochen (8 Mal pro Jahr), um wirtschaftliche Bedingungen zu bewerten und geldpolitische Entscheidungen zu treffen. Dieser Zeitplan ermöglicht regelmäßige Politikbewertungen bei gleichzeitiger Wahrung von Konsistenz und Vorhersagbarkeit.",
          nl: "De Raad van Bestuur van de ECB komt elke zes weken (8 keer per jaar) bijeen om economische omstandigheden te beoordelen en monetaire beleidsbeslissingen te nemen. Dit schema maakt regelmatige beleidsevaluaties mogelijk terwijl consistentie en voorspelbaarheid behouden blijven."
        }
      },
      {
        question: {
          en: "What is the composition of the ECB Governing Council?",
          es: "¿Cuál es la composición del Consejo de Gobierno del BCE?",
          de: "Wie setzt sich der EZB-Rat zusammen?",
          nl: "Wat is de samenstelling van de Raad van Bestuur van de ECB?"
        },
        options: [
          { en: "6 Executive Board members only", es: "Solo 6 miembros del Comité Ejecutivo", de: "Nur 6 Vorstandsmitglieder", nl: "Alleen 6 directieleden" },
          { en: "National central bank governors only", es: "Solo gobernadores de bancos centrales nacionales", de: "Nur nationale Zentralbankpräsidenten", nl: "Alleen nationale centrale bankpresidenten" },
          { en: "6 Executive Board + 20 national governors", es: "6 del Comité Ejecutivo + 20 gobernadores nacionales", de: "6 Vorstand + 20 nationale Präsidenten", nl: "6 directieleden + 20 nationale presidenten" },
          { en: "Ministers of Finance from eurozone", es: "Ministros de Finanzas de la eurozona", de: "Finanzminister der Eurozone", nl: "Ministers van Financiën van de eurozone" }
        ],
        correct: 2,
        explanation: {
          en: "The ECB Governing Council consists of the 6 members of the Executive Board plus the 20 governors of the national central banks of eurozone countries. This structure ensures representation from both the supranational and national levels.",
          es: "El Consejo de Gobierno del BCE consiste en los 6 miembros del Comité Ejecutivo más los 20 gobernadores de los bancos centrales nacionales de países de la eurozona. Esta estructura asegura representación tanto del nivel supranacional como nacional.",
          de: "Der EZB-Rat besteht aus den 6 Mitgliedern des Vorstands plus den 20 Präsidenten der nationalen Zentralbanken der Eurozone-Länder. Diese Struktur gewährleistet Vertretung sowohl auf supranationaler als auch nationaler Ebene.",
          nl: "De Raad van Bestuur van de ECB bestaat uit de 6 leden van de directie plus de 20 presidenten van de nationale centrale banken van eurozone-landen. Deze structuur zorgt voor vertegenwoordiging op zowel supranationaal als nationaal niveau."
        }
      },
      {
        question: {
          en: "What is the main refinancing rate?",
          es: "¿Qué es la tasa de refinanciamiento principal?",
          de: "Was ist der Hauptrefinanzierungssatz?",
          nl: "Wat is de hoofdherfinancieringsrente?"
        },
        options: [
          { en: "Rate banks pay to borrow from ECB", es: "Tasa que pagan los bancos para pedir prestado al BCE", de: "Zinssatz, den Banken zahlen, um von der EZB zu leihen", nl: "Rente die banken betalen om te lenen van de ECB" },
          { en: "Rate ECB pays on bank deposits", es: "Tasa que paga el BCE en depósitos bancarios", de: "Zinssatz, den die EZB auf Bankeinlagen zahlt", nl: "Rente die de ECB betaalt op bankdeposito's" },
          { en: "Commercial lending rate", es: "Tasa de préstamos comerciales", de: "Geschäftlicher Kreditzins", nl: "Commerciële uitleenrente" },
          { en: "Government bond yield", es: "Rendimiento de bonos gubernamentales", de: "Staatsanleihenrendite", nl: "Overheidsobligatierendement" }
        ],
        correct: 0,
        explanation: {
          en: "The main refinancing rate is the interest rate at which banks can borrow money from the ECB through main refinancing operations (MROs). It's the key policy rate that influences other interest rates in the eurozone economy.",
          es: "La tasa de refinanciamiento principal es la tasa de interés a la que los bancos pueden pedir dinero prestado al BCE a través de operaciones principales de refinanciamiento (OPR). Es la tasa de política clave que influye en otras tasas de interés en la economía de la eurozona.",
          de: "Der Hauptrefinanzierungssatz ist der Zinssatz, zu dem Banken Geld von der EZB durch Hauptrefinanzierungsgeschäfte (HRG) leihen können. Es ist der Schlüssel-Leitzins, der andere Zinssätze in der Eurozone-Wirtschaft beeinflusst.",
          nl: "De hoofdherfinancieringsrente is de rente waartegen banken geld kunnen lenen van de ECB via hoofdherfinancieringsoperaties (HHO's). Het is de belangrijkste beleidsrente die andere rentes in de eurozone-economie beïnvloedt."
        }
      },
      {
        question: {
          en: "What are the three key ECB interest rates?",
          es: "¿Cuáles son las tres tasas de interés clave del BCE?",
          de: "Was sind die drei wichtigsten EZB-Zinssätze?",
          nl: "Wat zijn de drie belangrijkste ECB-rentes?"
        },
        options: [
          { en: "Main, deposit, marginal lending", es: "Principal, depósito, préstamo marginal", de: "Haupt-, Einlagen-, Spitzenrefinanzierungssatz", nl: "Hoofd-, deposito-, marginale uitleenrente" },
          { en: "Short, medium, long-term rates", es: "Tasas a corto, medio y largo plazo", de: "Kurz-, mittel-, langfristige Zinssätze", nl: "Korte, middellange, lange termijn rentes" },
          { en: "Real, nominal, inflation rates", es: "Tasas reales, nominales, de inflación", de: "Real-, Nominal-, Inflationszinssätze", nl: "Reële, nominale, inflatierentes" },
          { en: "Consumer, business, government rates", es: "Tasas de consumo, empresas, gobierno", de: "Verbraucher-, Geschäfts-, Regierungszinssätze", nl: "Consumenten-, bedrijfs-, overheidstarieven" }
        ],
        correct: 0,
        explanation: {
          en: "The ECB uses three key interest rates: the main refinancing rate (weekly lending to banks), the deposit facility rate (overnight deposits from banks), and the marginal lending facility rate (overnight lending to banks). These form the interest rate corridor.",
          es: "El BCE usa tres tasas de interés clave: la tasa de refinanciamiento principal (préstamos semanales a bancos), la tasa de facilidad de depósito (depósitos nocturnos de bancos), y la tasa de facilidad de préstamo marginal (préstamos nocturnos a bancos). Estas forman el corredor de tasas de interés.",
          de: "Die EZB verwendet drei wichtige Zinssätze: den Hauptrefinanzierungssatz (wöchentliche Kredite an Banken), den Einlagefazilitätssatz (Übernachteinlagen von Banken) und den Spitzenrefinanzierungssatz (Übernachtkredite an Banken). Diese bilden den Zinskorridor.",
          nl: "De ECB gebruikt drie belangrijke rentes: de hoofdherfinancieringsrente (wekelijkse uitleen aan banken), de depositofaciliteitsrente (overnight deposito's van banken), en de marginale uitleenfaciliteitsrente (overnight uitleen aan banken). Deze vormen de rentecorridor."
        }
      },
      {
        question: {
          en: "What is quantitative easing in the context of ECB policy?",
          es: "¿Qué es la flexibilización cuantitativa en el contexto de la política del BCE?",
          de: "Was ist quantitative Lockerung im Kontext der EZB-Politik?",
          nl: "Wat is kwantitatieve versoepeling in de context van ECB-beleid?"
        },
        options: [
          { en: "Buying government bonds to increase money supply", es: "Comprar bonos gubernamentales para aumentar la oferta monetaria", de: "Staatsanleihen kaufen, um die Geldmenge zu erhöhen", nl: "Overheidsobligaties kopen om de geldhoeveelheid te verhogen" },
          { en: "Reducing bank reserve requirements", es: "Reducir requisitos de reservas bancarias", de: "Reduzierung der Bankreserveanforderungen", nl: "Bankreservevereisten verlagen" },
          { en: "Increasing interest rates rapidly", es: "Aumentar las tasas de interés rápidamente", de: "Zinssätze schnell erhöhen", nl: "Rentes snel verhogen" },
          { en: "Limiting commercial bank lending", es: "Limitar préstamos de bancos comerciales", de: "Geschäftskredite von Banken begrenzen", nl: "Commerciële bankuitleen beperken" }
        ],
        correct: 0,
        explanation: {
          en: "Quantitative easing (QE) involves the ECB purchasing large quantities of government and corporate bonds to inject money into the economy when conventional monetary policy becomes ineffective, typically when interest rates are near zero.",
          es: "La flexibilización cuantitativa (QE) involucra al BCE comprando grandes cantidades de bonos gubernamentales y corporativos para inyectar dinero en la economía cuando la política monetaria convencional se vuelve inefectiva, típicamente cuando las tasas de interés están cerca de cero.",
          de: "Quantitative Lockerung (QE) beinhaltet, dass die EZB große Mengen an Staats- und Unternehmensanleihen kauft, um Geld in die Wirtschaft zu injizieren, wenn die konventionelle Geldpolitik unwirksam wird, typischerweise wenn die Zinssätze nahe null sind.",
          nl: "Kwantitatieve versoepeling (QE) houdt in dat de ECB grote hoeveelheden staats- en bedrijfsobligaties koopt om geld in de economie te injecteren wanneer conventioneel monetair beleid ineffectief wordt, typisch wanneer rentes dicht bij nul zijn."
        }
      },
      {
        question: {
          en: "What is the Asset Purchase Programme (APP)?",
          es: "¿Qué es el Programa de Compra de Activos (APP)?",
          de: "Was ist das Ankaufprogramm für Wertpapiere (APP)?",
          nl: "Wat is het Asset Purchase Programme (APP)?"
        },
        options: [
          { en: "ECB's quantitative easing program", es: "Programa de flexibilización cuantitativa del BCE", de: "Quantitative Lockerungsprogramm der EZB", nl: "ECB's kwantitatieve versoepelprogramma" },
          { en: "Bank stress testing procedure", es: "Procedimiento de pruebas de estrés bancario", de: "Bankenstresstest-Verfahren", nl: "Bankstresstest procedure" },
          { en: "Currency exchange mechanism", es: "Mecanismo de intercambio de divisas", de: "Währungsaustausch-Mechanismus", nl: "Valutawisselmechanisme" },
          { en: "Inflation targeting framework", es: "Marco de objetivos de inflación", de: "Inflationsziel-Rahmen", nl: "Inflatiedoelstellingskader" }
        ],
        correct: 0,
        explanation: {
          en: "The Asset Purchase Programme (APP) is the ECB's quantitative easing initiative that includes purchasing various types of bonds (government, corporate, covered bonds) to stimulate the eurozone economy by increasing liquidity and lowering borrowing costs.",
          es: "El Programa de Compra de Activos (APP) es la iniciativa de flexibilización cuantitativa del BCE que incluye comprar varios tipos de bonos (gubernamentales, corporativos, bonos cubiertos) para estimular la economía de la eurozona aumentando la liquidez y reduciendo costos de endeudamiento.",
          de: "Das Ankaufprogramm für Wertpapiere (APP) ist die quantitative Lockerungsinitiative der EZB, die den Kauf verschiedener Anleihentypen (Staats-, Unternehmens-, Pfandbriefe) umfasst, um die Eurozone-Wirtschaft durch Erhöhung der Liquidität und Senkung der Kreditkosten zu stimulieren.",
          nl: "Het Asset Purchase Programme (APP) is de ECB's kwantitatieve versoepelingsinitiatie die de aankoop van verschillende soorten obligaties (staats-, bedrijfs-, gedekte obligaties) omvat om de eurozone-economie te stimuleren door liquiditeit te verhogen en leenkosten te verlagen."
        }
      },
      {
        question: {
          en: "What is the role of national central banks in the Eurosystem?",
          es: "¿Cuál es el papel de los bancos centrales nacionales en el Eurosistema?",
          de: "Was ist die Rolle der nationalen Zentralbanken im Eurosystem?",
          nl: "Wat is de rol van nationale centrale banken in het Eurosysteem?"
        },
        options: [
          { en: "Independent monetary policy making", es: "Formulación independiente de política monetaria", de: "Unabhängige Geldpolitikgestaltung", nl: "Onafhankelijke monetaire beleidsvorming" },
          { en: "Implementing ECB decisions nationally", es: "Implementar decisiones del BCE nacionalmente", de: "EZB-Entscheidungen national umsetzen", nl: "ECB-beslissingen nationaal implementeren" },
          { en: "Competing with ECB policies", es: "Competir con políticas del BCE", de: "Mit EZB-Politiken konkurrieren", nl: "Concurreren met ECB-beleid" },
          { en: "Setting local exchange rates", es: "Establecer tipos de cambio locales", de: "Lokale Wechselkurse festlegen", nl: "Lokale wisselkoersen vaststellen" }
        ],
        correct: 1,
        explanation: {
          en: "National central banks in the Eurosystem implement ECB monetary policy decisions at the national level, conduct market operations, manage payment systems, and provide banking services, while monetary policy decisions are made centrally by the ECB.",
          es: "Los bancos centrales nacionales en el Eurosistema implementan las decisiones de política monetaria del BCE a nivel nacional, conducen operaciones de mercado, gestionan sistemas de pago y proporcionan servicios bancarios, mientras que las decisiones de política monetaria se toman centralmente por el BCE.",
          de: "Nationale Zentralbanken im Eurosystem setzen EZB-Geldpolitikentscheidungen auf nationaler Ebene um, führen Marktoperationen durch, verwalten Zahlungssysteme und bieten Bankdienstleistungen an, während geldpolitische Entscheidungen zentral von der EZB getroffen werden.",
          nl: "Nationale centrale banken in het Eurosysteem implementeren ECB-monetaire beleidsbeslissingen op nationaal niveau, voeren marktoperaties uit, beheren betalingssystemen en bieden bankdiensten, terwijl monetaire beleidsbeslissingen centraal door de ECB worden genomen."
        }
      },
      {
        question: {
          en: "What is the main difference between the Eurosystem and the ESCB?",
          es: "¿Cuál es la principal diferencia entre el Eurosistema y el SEBC?",
          de: "Was ist der Hauptunterschied zwischen dem Eurosystem und dem ESZB?",
          nl: "Wat is het hoofdverschil tussen het Eurosysteem en het ESCB?"
        },
        options: [
          { en: "Eurosystem includes only eurozone central banks", es: "El Eurosistema incluye solo bancos centrales de la eurozona", de: "Eurosystem umfasst nur Eurozone-Zentralbanken", nl: "Eurosysteem omvat alleen eurozone centrale banken" },
          { en: "ESCB has more decision-making power", es: "El SEBC tiene más poder de decisión", de: "ESZB hat mehr Entscheidungsgewalt", nl: "ESCB heeft meer beslissingsmacht" },
          { en: "They are the same institution", es: "Son la misma institución", de: "Sie sind dieselbe Institution", nl: "Ze zijn dezelfde instelling" },
          { en: "Eurosystem only handles payments", es: "El Eurosistema solo maneja pagos", de: "Eurosystem behandelt nur Zahlungen", nl: "Eurosysteem behandelt alleen betalingen" }
        ],
        correct: 0,
        explanation: {
          en: "The Eurosystem consists of the ECB and the central banks of eurozone countries, while the European System of Central Banks (ESCB) includes the ECB and all EU central banks, including those from non-eurozone countries.",
          es: "El Eurosistema consiste en el BCE y los bancos centrales de países de la eurozona, mientras que el Sistema Europeo de Bancos Centrales (SEBC) incluye el BCE y todos los bancos centrales de la UE, incluyendo aquellos de países no eurozona.",
          de: "Das Eurosystem besteht aus der EZB und den Zentralbanken der Eurozone-Länder, während das Europäische System der Zentralbanken (ESZB) die EZB und alle EU-Zentralbanken umfasst, einschließlich derer aus Nicht-Eurozone-Ländern.",
          nl: "Het Eurosysteem bestaat uit de ECB en de centrale banken van eurozone-landen, terwijl het Europees Stelsel van Centrale Banken (ESCB) de ECB en alle EU-centrale banken omvat, inclusief die van niet-eurozone landen."
        }
      },
      {
        question: {
          en: "What is the 'two-pillar strategy' of ECB monetary policy?",
          es: "¿Qué es la 'estrategia de dos pilares' de la política monetaria del BCE?",
          de: "Was ist die 'Zwei-Säulen-Strategie' der EZB-Geldpolitik?",
          nl: "Wat is de 'twee-pilaren strategie' van ECB-monetair beleid?"
        },
        options: [
          { en: "Economic and monetary analysis", es: "Análisis económico y monetario", de: "Wirtschaftliche und monetäre Analyse", nl: "Economische en monetaire analyse" },
          { en: "Inflation and unemployment targeting", es: "Objetivos de inflación y desempleo", de: "Inflations- und Arbeitslosenziele", nl: "Inflatie- en werkloosheidsdoelstellingen" },
          { en: "National and supranational policies", es: "Políticas nacionales y supranacionales", de: "Nationale und supranationale Politiken", nl: "Nationale en supranationale beleid" },
          { en: "Short-term and long-term rates", es: "Tasas a corto y largo plazo", de: "Kurz- und langfristige Zinssätze", nl: "Korte en lange termijn rentes" }
        ],
        correct: 0,
        explanation: {
          en: "The ECB's two-pillar strategy involves economic analysis (real economic developments, price pressures) and monetary analysis (money supply, credit growth) to assess risks to price stability and guide monetary policy decisions.",
          es: "La estrategia de dos pilares del BCE involucra análisis económico (desarrollos económicos reales, presiones de precios) y análisis monetario (oferta monetaria, crecimiento crediticio) para evaluar riesgos a la estabilidad de precios y guiar decisiones de política monetaria.",
          de: "Die Zwei-Säulen-Strategie der EZB umfasst Wirtschaftsanalyse (reale Wirtschaftsentwicklungen, Preisdruck) und Geldmengenanalyse (Geldversorgung, Kreditwachstum) zur Bewertung von Risiken für die Preisstabilität und zur Leitung geldpolitischer Entscheidungen.",
          nl: "De twee-pilaren strategie van de ECB behelst economische analyse (reële economische ontwikkelingen, prijsdruk) en monetaire analyse (geldvoorraad, kredietgroei) om risico's voor prijsstabiliteit te beoordelen en monetaire beleidsbeslissingen te leiden."
        }
      },
      {
        question: {
          en: "What is the purpose of the ECB's forward guidance?",
          es: "¿Cuál es el propósito de la orientación futura del BCE?",
          de: "Was ist der Zweck der Forward Guidance der EZB?",
          nl: "Wat is het doel van de forward guidance van de ECB?"
        },
        options: [
          { en: "To communicate future policy intentions", es: "Para comunicar intenciones de política futura", de: "Um zukünftige Politikabsichten zu kommunizieren", nl: "Om toekomstige beleidsintentiektes te communiceren" },
          { en: "To set binding future interest rates", es: "Para establecer tasas de interés futuras vinculantes", de: "Um verbindliche zukünftige Zinssätze festzulegen", nl: "Om bindende toekomstige rentes vast te stellen" },
          { en: "To predict exact economic outcomes", es: "Para predecir resultados económicos exactos", de: "Um genaue wirtschaftliche Ergebnisse vorherzusagen", nl: "Om exacte economische uitkomsten te voorspellen" },
          { en: "To replace monetary policy tools", es: "Para reemplazar herramientas de política monetaria", de: "Um geldpolitische Instrumente zu ersetzen", nl: "Om monetaire beleidsinstrumenten te vervangen" }
        ],
        correct: 0,
        explanation: {
          en: "Forward guidance is a communication tool where the ECB provides information about its likely future monetary policy path, helping markets and economic actors form expectations and making policy more effective by reducing uncertainty.",
          es: "La orientación futura es una herramienta de comunicación donde el BCE proporciona información sobre su probable trayectoria futura de política monetaria, ayudando a mercados y actores económicos a formar expectativas y haciendo la política más efectiva reduciendo incertidumbre.",
          de: "Forward Guidance ist ein Kommunikationsinstrument, bei dem die EZB Informationen über ihren wahrscheinlichen zukünftigen Geldpolitikpfad bereitstellt, was Märkten und Wirtschaftsakteuren hilft, Erwartungen zu bilden und Politik durch Unsicherheitsreduzierung effektiver macht.",
          nl: "Forward guidance is een communicatiemiddel waarbij de ECB informatie verschaft over haar waarschijnlijke toekomstige monetaire beleidskoers, wat markten en economische actoren helpt verwachtingen te vormen en beleid effectiever maakt door onzekerheid te verminderen."
        }
      },
      {
        question: {
          en: "What role do TARGET2 payments play in the eurozone?",
          es: "¿Qué papel juegan los pagos TARGET2 en la eurozona?",
          de: "Welche Rolle spielen TARGET2-Zahlungen in der Eurozone?",
          nl: "Welke rol spelen TARGET2-betalingen in de eurozone?"
        },
        options: [
          { en: "Real-time gross settlement for large payments", es: "Liquidación bruta en tiempo real para pagos grandes", de: "Echtzeit-Bruttoabwicklung für große Zahlungen", nl: "Realtime bruto vereffening voor grote betalingen" },
          { en: "Consumer credit card processing", es: "Procesamiento de tarjetas de crédito de consumo", de: "Verbraucher-Kreditkartenverarbeitung", nl: "Consument creditcardverwerking" },
          { en: "International trade financing", es: "Financiamiento de comercio internacional", de: "Internationale Handelsfinanzierung", nl: "Internationale handelsfinanciering" },
          { en: "Currency exchange services", es: "Servicios de cambio de divisas", de: "Währungsumtauschdienstleistungen", nl: "Valutawissel diensten" }
        ],
        correct: 0,
        explanation: {
          en: "TARGET2 (Trans-European Automated Real-time Gross settlement Express Transfer system) is the ECB's payment system that processes large-value payments between banks in real-time, ensuring efficient and secure euro transactions across the eurozone.",
          es: "TARGET2 (Sistema de Transferencia Exprés de Liquidación Bruta Automatizada en Tiempo Real Trans-Europea) es el sistema de pagos del BCE que procesa pagos de gran valor entre bancos en tiempo real, asegurando transacciones en euros eficientes y seguras en toda la eurozona.",
          de: "TARGET2 (Trans-European Automated Real-time Gross settlement Express Transfer system) ist das Zahlungssystem der EZB, das Großbetragsahlungen zwischen Banken in Echtzeit verarbeitet und effiziente und sichere Euro-Transaktionen in der gesamten Eurozone gewährleistet.",
          nl: "TARGET2 (Trans-European Automated Real-time Gross settlement Express Transfer system) is het betalingssysteem van de ECB dat grootwaarde betalingen tussen banken in realtime verwerkt, wat efficiënte en veilige euro-transacties in de hele eurozone verzekert."
        }
      },
      {
        question: {
          en: "What is the Pandemic Emergency Purchase Programme (PEPP)?",
          es: "¿Qué es el Programa de Compras de Emergencia Pandémica (PEPP)?",
          de: "Was ist das Pandemie-Notfallkaufprogramm (PEPP)?",
          nl: "Wat is het Pandemic Emergency Purchase Programme (PEPP)?"
        },
        options: [
          { en: "COVID-19 economic stimulus bond purchases", es: "Compras de bonos de estímulo económico COVID-19", de: "COVID-19 Wirtschaftsstimulus-Anleihekäufe", nl: "COVID-19 economische stimulans obligatieaankopen" },
          { en: "Bank recapitalization program", es: "Programa de recapitalización bancaria", de: "Banken-Rekapitalisierungsprogramm", nl: "Bank herkapitalisatieprogramma" },
          { en: "Emergency lending to governments", es: "Préstamos de emergencia a gobiernos", de: "Notfallkredite an Regierungen", nl: "Noodleningen aan overheden" },
          { en: "Healthcare sector funding", es: "Financiamiento del sector salud", de: "Finanzierung des Gesundheitssektors", nl: "Financiering zorgsector" }
        ],
        correct: 0,
        explanation: {
          en: "The PEPP was launched in March 2020 as an emergency response to the COVID-19 pandemic, involving €1.85 trillion in bond purchases with flexible implementation to counter the pandemic's economic impact on the eurozone.",
          es: "El PEPP se lanzó en marzo 2020 como respuesta de emergencia a la pandemia COVID-19, involucrando €1.85 billones en compras de bonos con implementación flexible para contrarrestar el impacto económico de la pandemia en la eurozona.",
          de: "Das PEPP wurde im März 2020 als Notfallreaktion auf die COVID-19-Pandemie gestartet und umfasst 1,85 Billionen Euro an Anleihekäufen mit flexibler Umsetzung, um den wirtschaftlichen Auswirkungen der Pandemie in der Eurozone entgegenzuwirken.",
          nl: "Het PEPP werd gelanceerd in maart 2020 als noodrespons op de COVID-19-pandemie, behelzend €1,85 biljoen aan obligatieaankopen met flexibele implementatie om de economische impact van de pandemie op de eurozone tegen te gaan."
        }
      },
      {
        question: {
          en: "What is the ECB's definition of price stability?",
          es: "¿Cuál es la definición de estabilidad de precios del BCE?",
          de: "Was ist die Definition von Preisstabilität der EZB?",
          nl: "Wat is de ECB's definitie van prijsstabiliteit?"
        },
        options: [
          { en: "Zero inflation", es: "Inflación cero", de: "Null-Inflation", nl: "Nul inflatie" },
          { en: "2% inflation over the medium term", es: "2% de inflación a medio plazo", de: "2% Inflation mittelfristig", nl: "2% inflatie op middellange termijn" },
          { en: "Between 1-3% inflation", es: "Entre 1-3% de inflación", de: "Zwischen 1-3% Inflation", nl: "Tussen 1-3% inflatie" },
          { en: "Deflation prevention only", es: "Solo prevención de deflación", de: "Nur Deflationsprävention", nl: "Alleen deflatiepreventie" }
        ],
        correct: 1,
        explanation: {
          en: "Since the 2021 strategy review, the ECB defines price stability as 2% inflation over the medium term. This represents a symmetric target, meaning the ECB considers both excessive inflation and deflation as deviations from price stability.",
          es: "Desde la revisión estratégica de 2021, el BCE define la estabilidad de precios como 2% de inflación a medio plazo. Esto representa un objetivo simétrico, significando que el BCE considera tanto inflación excesiva como deflación como desviaciones de la estabilidad de precios.",
          de: "Seit der Strategieüberprüfung 2021 definiert die EZB Preisstabilität als 2% Inflation mittelfristig. Dies stellt ein symmetrisches Ziel dar, was bedeutet, dass die EZB sowohl übermäßige Inflation als auch Deflation als Abweichungen von der Preisstabilität betrachtet.",
          nl: "Sinds de strategierevisie van 2021 definieert de ECB prijsstabiliteit als 2% inflatie op middellange termijn. Dit vertegenwoordigt een symmetrisch doel, wat betekent dat de ECB zowel buitensporige inflatie als deflatie beschouwt als afwijkingen van prijsstabiliteit."
        }
      },
      {
        question: {
          en: "What is the significance of the ECB's banking supervision role?",
          es: "¿Cuál es la importancia del papel de supervisión bancaria del BCE?",
          de: "Was ist die Bedeutung der Bankenaufsichtsrolle der EZB?",
          nl: "Wat is het belang van de banktoezichtrol van de ECB?"
        },
        options: [
          { en: "Supervises all eurozone banks directly", es: "Supervisa todos los bancos de la eurozona directamente", de: "Überwacht alle Eurozone-Banken direkt", nl: "Houdt direct toezicht op alle eurozone-banken" },
          { en: "Supervises significant banks and systemic institutions", es: "Supervisa bancos significativos e instituciones sistémicas", de: "Überwacht bedeutende Banken und systemische Institutionen", nl: "Houdt toezicht op significante banken en systemische instellingen" },
          { en: "Only provides banking licenses", es: "Solo proporciona licencias bancarias", de: "Stellt nur Banklizenzen aus", nl: "Verstrekt alleen banklicenties" },
          { en: "Manages deposit insurance only", es: "Solo gestiona seguro de depósitos", de: "Verwaltet nur Einlagensicherung", nl: "Beheert alleen depositogarantie" }
        ],
        correct: 1,
        explanation: {
          en: "Since 2014, the ECB supervises significant banks (those with assets over €30 billion or representing >20% of national GDP) and systemically important institutions, while national supervisors handle smaller banks. This Single Supervisory Mechanism enhances financial stability.",
          es: "Desde 2014, el BCE supervisa bancos significativos (aquellos con activos sobre €30 mil millones o representando >20% del PIB nacional) e instituciones sistémicamente importantes, mientras supervisores nacionales manejan bancos más pequeños. Este Mecanismo Único de Supervisión mejora la estabilidad financiera.",
          de: "Seit 2014 überwacht die EZB bedeutende Banken (solche mit Vermögen über 30 Milliarden Euro oder >20% des nationalen BIP) und systemisch wichtige Institutionen, während nationale Aufseher kleinere Banken handhaben. Dieser Einheitliche Aufsichtsmechanismus verbessert die Finanzstabilität.",
          nl: "Sinds 2014 houdt de ECB toezicht op significante banken (die met activa boven €30 miljard of >20% van nationaal BBP vertegenwoordigend) en systemisch belangrijke instellingen, terwijl nationale toezichthouders kleinere banken behandelen. Dit Eenheids Toezichtsmechanisme verbetert financiële stabiliteit."
        }
      },
      {
        question: {
          en: "What is the Single Resolution Mechanism (SRM) in relation to eurozone banking?",
          es: "¿Qué es el Mecanismo Único de Resolución (SRM) en relación con la banca de la eurozona?",
          de: "Was ist der Einheitliche Abwicklungsmechanismus (SRM) in Bezug auf das Bankwesen der Eurozone?",
          nl: "Wat is het Single Resolution Mechanism (SRM) in relatie tot eurozone bankwezen?"
        },
        options: [
          { en: "Framework for orderly bank failure resolution", es: "Marco para resolución ordenada de quiebras bancarias", de: "Rahmen für geordnete Bankausfallabwicklung", nl: "Kader voor ordelijke bankafwikkeling bij faillissement" },
          { en: "System for merging banks", es: "Sistema para fusionar bancos", de: "System zur Bankenfusion", nl: "Systeem voor bankfusies" },
          { en: "Deposit guarantee scheme", es: "Esquema de garantía de depósitos", de: "Einlagensicherungssystem", nl: "Depositogarantieregeling" },
          { en: "Bank licensing authority", es: "Autoridad de licencias bancarias", de: "Banklizenzierungsbehörde", nl: "Banklicentie autoriteit" }
        ],
        correct: 0,
        explanation: {
          en: "The SRM provides a framework for resolving failing banks in an orderly manner while minimizing costs to taxpayers and maintaining financial stability. It works alongside the Single Supervisory Mechanism to create comprehensive eurozone banking oversight.",
          es: "El SRM proporciona un marco para resolver bancos en quiebra de manera ordenada mientras minimiza costos para contribuyentes y mantiene estabilidad financiera. Funciona junto al Mecanismo Único de Supervisión para crear supervisión bancaria integral de la eurozona.",
          de: "Der SRM bietet einen Rahmen für die geordnete Abwicklung ausfallender Banken bei gleichzeitiger Minimierung der Kosten für Steuerzahler und Aufrechterhaltung der Finanzstabilität. Er arbeitet neben dem Einheitlichen Aufsichtsmechanismus, um umfassende Eurozone-Bankenaufsicht zu schaffen.",
          nl: "Het SRM biedt een kader voor het ordelijk afwikkelen van falende banken terwijl kosten voor belastingbetalers geminimaliseerd worden en financiële stabiliteit behouden blijft. Het werkt naast het Eenheids Toezichtsmechanisme om uitgebreide eurozone banktoezicht te creëren."
        }
      },
      {
        question: {
          en: "What is the purpose of the ECB's stress tests for banks?",
          es: "¿Cuál es el propósito de las pruebas de estrés del BCE para bancos?",
          de: "Was ist der Zweck der EZB-Stresstests für Banken?",
          nl: "Wat is het doel van de ECB's stresstests voor banken?"
        },
        options: [
          { en: "To assess bank resilience under adverse scenarios", es: "Para evaluar la resistencia bancaria bajo escenarios adversos", de: "Um Bankenresilienz unter widrigen Szenarien zu bewerten", nl: "Om bankweerbaarheid onder negatieve scenario's te beoordelen" },
          { en: "To determine bank profitability", es: "Para determinar la rentabilidad bancaria", de: "Um Bankrentabilität zu bestimmen", nl: "Om bankwinstgevendheid te bepalen" },
          { en: "To set interest rates for banks", es: "Para establecer tasas de interés para bancos", de: "Um Zinssätze für Banken festzulegen", nl: "Om rentes voor banken vast te stellen" },
          { en: "To approve bank mergers", es: "Para aprobar fusiones bancarias", de: "Um Bankenfusionen zu genehmigen", nl: "Om bankfusies goed te keuren" }
        ],
        correct: 0,
        explanation: {
          en: "ECB stress tests evaluate how banks would cope with hypothetical adverse economic scenarios (recession, market crashes, etc.) to ensure they maintain adequate capital levels and can continue lending during economic downturns, promoting financial stability.",
          es: "Las pruebas de estrés del BCE evalúan cómo los bancos enfrentarían escenarios económicos adversos hipotéticos (recesión, colapsos de mercado, etc.) para asegurar que mantengan niveles adecuados de capital y puedan continuar prestando durante crisis económicas, promoviendo estabilidad financiera.",
          de: "EZB-Stresstests bewerten, wie Banken mit hypothetischen widrigen Wirtschaftsszenarien (Rezession, Marktcrashs usw.) umgehen würden, um sicherzustellen, dass sie angemessene Kapitalebenen beibehalten und während wirtschaftlicher Abschwünge weiter Kredite vergeben können, was die Finanzstabilität fördert.",
          nl: "ECB-stresstests evalueren hoe banken zouden omgaan met hypothetische negatieve economische scenario's (recessie, marktcrashes, etc.) om te verzekeren dat ze adequate kapitaalniveaus behouden en kunnen blijven uitlenen tijdens economische neergang, wat financiële stabiliteit bevordert."
        }
      },
      {
        question: {
          en: "What characterizes the ECB's unconventional monetary policy tools?",
          es: "¿Qué caracteriza las herramientas de política monetaria no convencionales del BCE?",
          de: "Was charakterisiert die unkonventionellen geldpolitischen Instrumente der EZB?",
          nl: "Wat kenmerkt de onconventionele monetaire beleidsinstrumenten van de ECB?"
        },
        options: [
          { en: "Used when interest rates hit zero lower bound", es: "Usadas cuando tasas de interés llegan al límite inferior cero", de: "Verwendet, wenn Zinssätze die Nullzinsgrenze erreichen", nl: "Gebruikt wanneer rentes de nul-ondergrens bereiken" },
          { en: "Replace all traditional monetary policy", es: "Reemplazan toda política monetaria tradicional", de: "Ersetzen alle traditionelle Geldpolitik", nl: "Vervangen alle traditionele monetaire politiek" },
          { en: "Only target specific economic sectors", es: "Solo se dirigen a sectores económicos específicos", de: "Zielen nur auf spezifische Wirtschaftssektoren", nl: "Richten zich alleen op specifieke economische sectoren" },
          { en: "Automatically adjust to economic conditions", es: "Se ajustan automáticamente a condiciones económicas", de: "Passen sich automatisch an Wirtschaftsbedingungen an", nl: "Passen automatisch aan aan economische omstandigheden" }
        ],
        correct: 0,
        explanation: {
          en: "Unconventional monetary policy tools like quantitative easing, negative interest rates, and forward guidance are deployed when conventional tools (lowering short-term rates) become ineffective, typically when rates approach the zero lower bound during severe economic downturns.",
          es: "Herramientas de política monetaria no convencionales como flexibilización cuantitativa, tasas de interés negativas y orientación futura se implementan cuando herramientas convencionales (reducir tasas a corto plazo) se vuelven inefectivas, típicamente cuando tasas se acercan al límite inferior cero durante crisis económicas severas.",
          de: "Unkonventionelle geldpolitische Instrumente wie quantitative Lockerung, negative Zinssätze und Forward Guidance werden eingesetzt, wenn konventionelle Instrumente (Senkung kurzfristiger Zinssätze) unwirksam werden, typischerweise wenn Zinssätze sich der Nullzinsgrenze während schwerer wirtschaftlicher Abschwünge nähern.",
          nl: "Onconventionele monetaire beleidsinstrumenten zoals kwantitatieve versoepeling, negatieve rentes en forward guidance worden ingezet wanneer conventionele instrumenten (verlagen van korte termijn rentes) ineffectief worden, typisch wanneer rentes de nul-ondergrens benaderen tijdens ernstige economische neergang."
        }
      },
      {
        question: {
          en: "When was the name 'Euro' officially adopted for the single European currency?",
          es: "¿Cuándo se adoptó oficialmente el nombre 'Euro' para la moneda europea única?",
          de: "Wann wurde der Name 'Euro' offiziell für die einheitliche europäische Währung übernommen?",
          nl: "Wanneer werd de naam 'Euro' officieel aangenomen voor de Europese eenheidsmunt?"
        },
        options: [
          { en: "1992", es: "1992", de: "1992", nl: "1992" },
          { en: "1995", es: "1995", de: "1995", nl: "1995" },
          { en: "1997", es: "1997", de: "1997", nl: "1997" },
          { en: "1999", es: "1999", de: "1999", nl: "1999" }
        ],
        correct: 1,
        explanation: {
          en: "The name 'Euro' was officially adopted in December 1995 at the European Council meeting in Madrid. The name was chosen to be neutral and acceptable to all member states, replacing the previously proposed name 'ECU' (European Currency Unit).",
          es: "El nombre 'Euro' se adoptó oficialmente en diciembre de 1995 en la reunión del Consejo Europeo en Madrid. El nombre fue elegido para ser neutral y aceptable para todos los estados miembros, reemplazando el nombre previamente propuesto 'ECU' (Unidad Monetaria Europea).",
          de: "Der Name 'Euro' wurde offiziell im Dezember 1995 auf der Tagung des Europäischen Rates in Madrid übernommen. Der Name wurde gewählt, um neutral und für alle Mitgliedstaaten akzeptabel zu sein und ersetzte den zuvor vorgeschlagenen Namen 'ECU' (Europäische Währungseinheit).",
          nl: "De naam 'Euro' werd officieel aangenomen in december 1995 tijdens de Europese Raad bijeenkomst in Madrid. De naam werd gekozen om neutraal en acceptabel te zijn voor alle lidstaten, ter vervanging van de eerder voorgestelde naam 'ECU' (Europese Valuta Eenheid)."
        }
      }
    ]
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level2;
  } else if (typeof window !== 'undefined') {
    window.level2 = level2;
  }
})();