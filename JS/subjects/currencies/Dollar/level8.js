// Quiz Template - Level 8: Currencies - Dollar
(function() {
  const level8 = {
    name: {
      en: "US Dollar - Expert",
      es: "Dólar Estadounidense - Experto",
      de: "US-Dollar - Experte",
      nl: "Amerikaanse Dollar - Expert"
    },
    questions: [
      {
        question: {
          en: "What is the Federal Reserve's primary tool for controlling money supply in the economy?",
          es: "¿Cuál es la herramienta principal de la Reserva Federal para controlar la oferta monetaria en la economía?",
          de: "Was ist das primäre Werkzeug der Federal Reserve zur Kontrolle der Geldmenge in der Wirtschaft?",
          nl: "Wat is het primaire instrument van de Federal Reserve voor het beheersen van de geldvoorraad in de economie?"
        },
        options: [
          { en: "Open market operations", es: "Operaciones de mercado abierto", de: "Offenmarktgeschäfte", nl: "Open marktoperaties" },
          { en: "Reserve requirements", es: "Requisitos de reserva", de: "Mindestreserveanforderungen", nl: "Reservevereisten" },
          { en: "Discount rate", es: "Tasa de descuento", de: "Diskontsatz", nl: "Discontovoet" },
          { en: "Currency printing", es: "Impresión de moneda", de: "Währungsdruck", nl: "Valutadruk" }
        ],
        correct: 0,
        explanation: {
          en: "Open market operations are the Fed's most frequently used and flexible tool for monetary policy. By buying and selling government securities, the Fed directly influences the money supply and interest rates in the economy.",
          es: "Las operaciones de mercado abierto son la herramienta más frecuentemente usada y flexible de la Fed para la política monetaria. Al comprar y vender valores gubernamentales, la Fed influye directamente en la oferta monetaria y las tasas de interés en la economía.",
          de: "Offenmarktgeschäfte sind das am häufigsten verwendete und flexibelste Werkzeug der Fed für die Geldpolitik. Durch den Kauf und Verkauf von Staatsanleihen beeinflusst die Fed direkt die Geldmenge und Zinssätze in der Wirtschaft.",
          nl: "Open marktoperaties zijn het meest frequent gebruikte en flexibele instrument van de Fed voor monetair beleid. Door het kopen en verkopen van staatsobligaties beïnvloedt de Fed direct de geldvoorraad en rentetarieven in de economie."
        }
      },
      {
        question: {
          en: "What percentage of global foreign exchange reserves is held in US dollars as of recent estimates?",
          es: "¿Qué porcentaje de las reservas de divisas globales se mantiene en dólares estadounidenses según estimaciones recientes?",
          de: "Welcher Prozentsatz der globalen Devisenreserven wird nach aktuellen Schätzungen in US-Dollar gehalten?",
          nl: "Welk percentage van de wereldwijde valutareserves wordt volgens recente schattingen aangehouden in Amerikaanse dollars?"
        },
        options: [
          { en: "Around 45%", es: "Alrededor del 45%", de: "Etwa 45%", nl: "Ongeveer 45%" },
          { en: "Around 60%", es: "Alrededor del 60%", de: "Etwa 60%", nl: "Ongeveer 60%" },
          { en: "Around 75%", es: "Alrededor del 75%", de: "Etwa 75%", nl: "Ongeveer 75%" },
          { en: "Around 90%", es: "Alrededor del 90%", de: "Etwa 90%", nl: "Ongeveer 90%" }
        ],
        correct: 1,
        explanation: {
          en: "Approximately 60% of global foreign exchange reserves are held in US dollars, making it the world's dominant reserve currency. This reflects the dollar's role in international trade and the stability of US financial institutions.",
          es: "Aproximadamente el 60% de las reservas de divisas globales se mantienen en dólares estadounidenses, convirtiéndolo en la moneda de reserva dominante del mundo. Esto refleja el papel del dólar en el comercio internacional y la estabilidad de las instituciones financieras estadounidenses.",
          de: "Etwa 60% der globalen Devisenreserven werden in US-Dollar gehalten, was ihn zur weltweit dominierenden Reservewährung macht. Dies spiegelt die Rolle des Dollars im internationalen Handel und die Stabilität der US-Finanzinstitutionen wider.",
          nl: "Ongeveer 60% van de wereldwijde valutareserves wordt aangehouden in Amerikaanse dollars, waardoor het de dominante reservevaluta ter wereld is. Dit weerspiegelt de rol van de dollar in de internationale handel en de stabiliteit van Amerikaanse financiële instellingen."
        }
      },
      {
        question: {
          en: "What is the technical term for the Federal Reserve's emergency lending facility during financial crises?",
          es: "¿Cuál es el término técnico para la facilidad de préstamo de emergencia de la Reserva Federal durante crisis financieras?",
          de: "Wie lautet der technische Begriff für die Notfall-Kreditfazilität der Federal Reserve während Finanzkrisen?",
          nl: "Wat is de technische term voor de noodlendfaciliteit van de Federal Reserve tijdens financiële crises?"
        },
        options: [
          { en: "Quantitative Easing", es: "Flexibilización Cuantitativa", de: "Quantitative Lockerung", nl: "Kwantitatieve Versoepeling" },
          { en: "Discount Window", es: "Ventana de Descuento", de: "Diskontfenster", nl: "Discontoloket" },
          { en: "Federal Funds Rate", es: "Tasa de Fondos Federales", de: "Federal Funds Rate", nl: "Federal Funds Tarief" },
          { en: "Term Auction Facility", es: "Facilidad de Subasta a Plazo", de: "Term Auction Facility", nl: "Termijn Veiling Faciliteit" }
        ],
        correct: 1,
        explanation: {
          en: "The Discount Window is the Fed's primary emergency lending facility where banks can borrow directly from the Federal Reserve, typically at a rate higher than the federal funds rate. It serves as a lender of last resort during liquidity crises.",
          es: "La Ventana de Descuento es la facilidad principal de préstamo de emergencia de la Fed donde los bancos pueden pedir prestado directamente de la Reserva Federal, típicamente a una tasa más alta que la tasa de fondos federales. Sirve como prestamista de último recurso durante crisis de liquidez.",
          de: "Das Diskontfenster ist die primäre Notfall-Kreditfazilität der Fed, wo Banken direkt von der Federal Reserve leihen können, typischerweise zu einem Zinssatz über dem Federal Funds Rate. Es dient als Kreditgeber letzter Instanz während Liquiditätskrisen.",
          nl: "Het Discontoloket is de primaire noodlendfaciliteit van de Fed waar banken direct kunnen lenen van de Federal Reserve, typisch tegen een tarief hoger dan de federal funds rate. Het dient als laatste redmiddel kredietverstrekker tijdens liquiditeitscrises."
        }
      },
      {
        question: {
          en: "What economic principle explains why the US can maintain large trade deficits without immediate currency collapse?",
          es: "¿Qué principio económico explica por qué Estados Unidos puede mantener grandes déficits comerciales sin colapso inmediato de la moneda?",
          de: "Welches wirtschaftliche Prinzip erklärt, warum die USA große Handelsdefizite ohne sofortigen Währungskollaps aufrechterhalten können?",
          nl: "Welk economisch principe verklaart waarom de VS grote handelstekorten kunnen aanhouden zonder onmiddellijke valutacollaps?"
        },
        options: [
          { en: "Bretton Woods System", es: "Sistema de Bretton Woods", de: "Bretton-Woods-System", nl: "Bretton Woods Systeem" },
          { en: "Triffin Dilemma", es: "Dilema de Triffin", de: "Triffin-Dilemma", nl: "Triffin Dilemma" },
          { en: "Gold Standard", es: "Patrón Oro", de: "Goldstandard", nl: "Goudstandaard" },
          { en: "Purchasing Power Parity", es: "Paridad del Poder Adquisitivo", de: "Kaufkraftparität", nl: "Koopkrachtpariteit" }
        ],
        correct: 1,
        explanation: {
          en: "The Triffin Dilemma describes how the US, as issuer of the world's reserve currency, must run deficits to provide global liquidity. Other countries demand dollars for reserves and trade, allowing the US to finance deficits by essentially 'exporting' its currency.",
          es: "El Dilema de Triffin describe cómo Estados Unidos, como emisor de la moneda de reserva mundial, debe tener déficits para proporcionar liquidez global. Otros países demandan dólares para reservas y comercio, permitiendo a Estados Unidos financiar déficits esencialmente 'exportando' su moneda.",
          de: "Das Triffin-Dilemma beschreibt, wie die USA als Emittent der weltweiten Reservewährung Defizite eingehen müssen, um globale Liquidität bereitzustellen. Andere Länder verlangen Dollar für Reserven und Handel, was den USA ermöglicht, Defizite zu finanzieren, indem sie im Wesentlichen ihre Währung 'exportieren'.",
          nl: "Het Triffin Dilemma beschrijft hoe de VS, als uitgever van 's werelds reservevaluta, tekorten moet hebben om wereldwijde liquiditeit te bieden. Andere landen eisen dollars voor reserves en handel, waardoor de VS tekorten kan financieren door in wezen hun valuta te 'exporteren'."
        }
      },
      {
        question: {
          en: "What is the official name of the committee that sets US monetary policy?",
          es: "¿Cuál es el nombre oficial del comité que establece la política monetaria estadounidense?",
          de: "Wie heißt das offizielle Komitee, das die US-Geldpolitik festlegt?",
          nl: "Wat is de officiële naam van het comité dat het Amerikaanse monetaire beleid vaststelt?"
        },
        options: [
          { en: "Board of Governors", es: "Junta de Gobernadores", de: "Gouverneursrat", nl: "Raad van Bestuur" },
          { en: "Federal Open Market Committee", es: "Comité Federal de Mercado Abierto", de: "Federal Open Market Committee", nl: "Federal Open Market Committee" },
          { en: "Regional Reserve Banks", es: "Bancos Regionales de Reserva", de: "Regionale Reservebanken", nl: "Regionale Reserve Banken" },
          { en: "Treasury Department", es: "Departamento del Tesoro", de: "Finanzministerium", nl: "Ministerie van Financiën" }
        ],
        correct: 1,
        explanation: {
          en: "The Federal Open Market Committee (FOMC) is the Fed's primary monetary policymaking body. It consists of 12 members: the seven Board of Governors and five regional Fed bank presidents, meeting eight times per year to set interest rates.",
          es: "El Comité Federal de Mercado Abierto (FOMC) es el organismo principal de formulación de política monetaria de la Fed. Consiste en 12 miembros: los siete de la Junta de Gobernadores y cinco presidentes de bancos regionales de la Fed, reuniéndose ocho veces por año para establecer tasas de interés.",
          de: "Das Federal Open Market Committee (FOMC) ist das primäre geldpolitische Entscheidungsgremium der Fed. Es besteht aus 12 Mitgliedern: den sieben Gouverneursratsmitgliedern und fünf regionalen Fed-Bankpräsidenten, die sich achtmal jährlich treffen, um Zinssätze festzulegen.",
          nl: "Het Federal Open Market Committee (FOMC) is het primaire monetaire beleidsmakende orgaan van de Fed. Het bestaat uit 12 leden: de zeven leden van de Raad van Bestuur en vijf regionale Fed bankpresidenten, die acht keer per jaar bijeenkomen om rentetarieven vast te stellen."
        }
      },
      {
        question: {
          en: "What does it mean when the Federal Reserve implements 'quantitative easing'?",
          es: "¿Qué significa cuando la Reserva Federal implementa 'flexibilización cuantitativa'?",
          de: "Was bedeutet es, wenn die Federal Reserve 'quantitative Lockerung' implementiert?",
          nl: "Wat betekent het wanneer de Federal Reserve 'kwantitatieve versoepeling' implementeert?"
        },
        options: [
          { en: "Raising interest rates", es: "Subir las tasas de interés", de: "Zinssätze erhöhen", nl: "Rentetarieven verhogen" },
          { en: "Buying long-term securities to increase money supply", es: "Comprar valores a largo plazo para aumentar la oferta monetaria", de: "Langfristige Wertpapiere kaufen, um die Geldmenge zu erhöhen", nl: "Langetermijneffecten kopen om de geldvoorraad te verhogen" },
          { en: "Selling government bonds", es: "Vender bonos gubernamentales", de: "Staatsanleihen verkaufen", nl: "Staatsobligaties verkopen" },
          { en: "Increasing reserve requirements", es: "Aumentar los requisitos de reserva", de: "Mindestreserveanforderungen erhöhen", nl: "Reservevereisten verhogen" }
        ],
        correct: 1,
        explanation: {
          en: "Quantitative easing involves the Fed purchasing large quantities of long-term securities to inject money directly into the economy when traditional monetary policy (lowering short-term rates) is insufficient, typically when rates are already near zero.",
          es: "La flexibilización cuantitativa involucra que la Fed compre grandes cantidades de valores a largo plazo para inyectar dinero directamente en la economía cuando la política monetaria tradicional (bajar tasas a corto plazo) es insuficiente, típicamente cuando las tasas ya están cerca de cero.",
          de: "Quantitative Lockerung beinhaltet, dass die Fed große Mengen langfristiger Wertpapiere kauft, um Geld direkt in die Wirtschaft zu injizieren, wenn traditionelle Geldpolitik (Senkung kurzfristiger Zinsen) unzureichend ist, typischerweise wenn die Zinsen bereits nahe null sind.",
          nl: "Kwantitatieve versoepeling houdt in dat de Fed grote hoeveelheden langetermijneffecten koopt om geld direct in de economie te injecteren wanneer traditioneel monetair beleid (verlagen van kortetermijnrentes) onvoldoende is, typisch wanneer tarieven al bijna nul zijn."
        }
      },
      {
        question: {
          en: "What is the term for the interest rate that banks charge each other for overnight loans?",
          es: "¿Cuál es el término para la tasa de interés que los bancos se cobran entre sí por préstamos nocturnos?",
          de: "Wie lautet der Begriff für den Zinssatz, den Banken sich gegenseitig für Übernachtkredite berechnen?",
          nl: "Wat is de term voor de rente die banken elkaar rekenen voor overnight leningen?"
        },
        options: [
          { en: "Prime rate", es: "Tasa preferencial", de: "Leitzins", nl: "Prime rate" },
          { en: "Federal funds rate", es: "Tasa de fondos federales", de: "Federal Funds Rate", nl: "Federal funds rate" },
          { en: "Discount rate", es: "Tasa de descuento", de: "Diskontsatz", nl: "Discontovoet" },
          { en: "LIBOR", es: "LIBOR", de: "LIBOR", nl: "LIBOR" }
        ],
        correct: 1,
        explanation: {
          en: "The federal funds rate is the interest rate at which banks lend to each other overnight to meet reserve requirements. It's the Fed's primary policy tool and influences all other interest rates in the economy.",
          es: "La tasa de fondos federales es la tasa de interés a la cual los bancos se prestan entre sí durante la noche para cumplir con los requisitos de reserva. Es la herramienta de política principal de la Fed e influye en todas las otras tasas de interés en la economía.",
          de: "Der Federal Funds Rate ist der Zinssatz, zu dem sich Banken über Nacht Geld leihen, um Mindestreserveanforderungen zu erfüllen. Es ist das primäre Politikinstrument der Fed und beeinflusst alle anderen Zinssätze in der Wirtschaft.",
          nl: "De federal funds rate is de rente waarmee banken elkaar 's nachts geld lenen om te voldoen aan reservevereisten. Het is het primaire beleidsinstrument van de Fed en beïnvloedt alle andere rentetarieven in de economie."
        }
      },
      {
        question: {
          en: "What happens when the Federal Reserve 'sterilizes' its foreign exchange interventions?",
          es: "¿Qué pasa cuando la Reserva Federal 'esteriliza' sus intervenciones de cambio de divisas?",
          de: "Was passiert, wenn die Federal Reserve ihre Deviseninterventionen 'sterilisiert'?",
          nl: "Wat gebeurt er wanneer de Federal Reserve haar valuta-interventies 'steriliseert'?"
        },
        options: [
          { en: "It prevents changes to the domestic money supply", es: "Previene cambios en la oferta monetaria doméstica", de: "Es verhindert Änderungen der inländischen Geldmenge", nl: "Het voorkomt veranderingen in de binnenlandse geldvoorraad" },
          { en: "It automatically adjusts exchange rates", es: "Ajusta automáticamente los tipos de cambio", de: "Es passt automatisch Wechselkurse an", nl: "Het past automatisch wisselkoersen aan" },
          { en: "It increases international reserves", es: "Aumenta las reservas internacionales", de: "Es erhöht internationale Reserven", nl: "Het verhoogt internationale reserves" },
          { en: "It eliminates foreign currency risk", es: "Elimina el riesgo de moneda extranjera", de: "Es eliminiert Fremdwährungsrisiken", nl: "Het elimineert valutarisico" }
        ],
        correct: 0,
        explanation: {
          en: "Sterilization means the Fed offsets the money supply effects of foreign exchange interventions through domestic operations. When buying foreign currency (which would increase money supply), the Fed simultaneously sells domestic bonds to neutralize the effect.",
          es: "La esterilización significa que la Fed compensa los efectos en la oferta monetaria de las intervenciones de cambio de divisas a través de operaciones domésticas. Al comprar moneda extranjera (lo que aumentaría la oferta monetaria), la Fed vende simultáneamente bonos domésticos para neutralizar el efecto.",
          de: "Sterilisation bedeutet, dass die Fed die Geldmengeneffekte von Deviseninterventionen durch inländische Operationen ausgleicht. Beim Kauf von Fremdwährung (was die Geldmenge erhöhen würde) verkauft die Fed gleichzeitig inländische Anleihen, um den Effekt zu neutralisieren.",
          nl: "Sterilisatie betekent dat de Fed de geldvoorraadefecten van valuta-interventies compenseert door binnenlandse operaties. Bij het kopen van vreemde valuta (wat de geldvoorraad zou verhogen) verkoopt de Fed tegelijkertijd binnenlandse obligaties om het effect te neutraliseren."
        }
      },
      {
        question: {
          en: "What is the 'Volcker Rule' in US banking regulation?",
          es: "¿Qué es la 'Regla Volcker' en la regulación bancaria estadounidense?",
          de: "Was ist die 'Volcker-Regel' in der US-Bankenregulierung?",
          nl: "Wat is de 'Volcker Regel' in de Amerikaanse bankregulering?"
        },
        options: [
          { en: "Limits on bank size", es: "Límites en el tamaño de los bancos", de: "Beschränkungen der Bankgröße", nl: "Beperkingen op bankgrootte" },
          { en: "Prohibition of proprietary trading by banks", es: "Prohibición del comercio propietario por bancos", de: "Verbot des Eigenhandels durch Banken", nl: "Verbod op proprietary trading door banken" },
          { en: "Minimum capital requirements", es: "Requisitos mínimos de capital", de: "Mindestkapitalanforderungen", nl: "Minimale kapitaalvereisten" },
          { en: "Interest rate controls", es: "Controles de tasas de interés", de: "Zinssatzkontrollen", nl: "Rentecontroles" }
        ],
        correct: 1,
        explanation: {
          en: "The Volcker Rule, part of the Dodd-Frank Act, prohibits banks from engaging in proprietary trading (trading for their own profit) while allowing market-making and hedging activities. It aims to reduce systemic risk by preventing banks from making speculative investments.",
          es: "La Regla Volcker, parte de la Ley Dodd-Frank, prohíbe a los bancos participar en comercio propietario (comerciar para su propio beneficio) mientras permite actividades de creación de mercado y cobertura. Busca reducir el riesgo sistémico al prevenir que los bancos hagan inversiones especulativas.",
          de: "Die Volcker-Regel, Teil des Dodd-Frank-Gesetzes, verbietet Banken den Eigenhandel (Handel für eigenen Profit), während Market-Making- und Hedging-Aktivitäten erlaubt bleiben. Sie zielt darauf ab, systemische Risiken zu reduzieren, indem sie Banken daran hindert, spekulative Investitionen zu tätigen.",
          nl: "De Volcker Regel, onderdeel van de Dodd-Frank Act, verbiedt banken om deel te nemen aan proprietary trading (handelen voor eigen winst) terwijl market-making en hedging activiteiten zijn toegestaan. Het heeft als doel systemisch risico te verminderen door banken te verhinderen speculatieve investeringen te maken."
        }
      },
      {
        question: {
          en: "What does 'dollarization' mean in international economics?",
          es: "¿Qué significa 'dolarización' en economía internacional?",
          de: "Was bedeutet 'Dollarisierung' in der internationalen Wirtschaft?",
          nl: "Wat betekent 'dollarisatie' in de internationale economie?"
        },
        options: [
          { en: "US economic expansion abroad", es: "Expansión económica estadounidense en el extranjero", de: "US-Wirtschaftsexpansion im Ausland", nl: "Amerikaanse economische expansie in het buitenland" },
          { en: "Foreign countries adopting the US dollar as legal tender", es: "Países extranjeros adoptando el dólar estadounidense como moneda de curso legal", de: "Ausländische Länder, die den US-Dollar als gesetzliches Zahlungsmittel übernehmen", nl: "Buitenlandse landen die de Amerikaanse dollar als wettig betaalmiddel aannemen" },
          { en: "Converting foreign debt to dollars", es: "Convertir deuda extranjera a dólares", de: "Umwandlung von Auslandsschulden in Dollar", nl: "Buitenlandse schuld omzetten naar dollars" },
          { en: "Pricing commodities in dollars", es: "Fijar precios de materias primas en dólares", de: "Rohstoffpreise in Dollar festsetzen", nl: "Grondstoffen prijzen in dollars" }
        ],
        correct: 1,
        explanation: {
          en: "Dollarization occurs when a country officially adopts the US dollar as its legal tender, either partially or completely replacing its domestic currency. Examples include Ecuador, El Salvador, and Panama, which use the dollar to achieve monetary stability.",
          es: "La dolarización ocurre cuando un país oficialmente adopta el dólar estadounidense como su moneda de curso legal, reemplazando parcial o completamente su moneda doméstica. Ejemplos incluyen Ecuador, El Salvador y Panamá, que usan el dólar para lograr estabilidad monetaria.",
          de: "Dollarisierung tritt auf, wenn ein Land offiziell den US-Dollar als gesetzliches Zahlungsmittel übernimmt und teilweise oder vollständig seine inländische Währung ersetzt. Beispiele sind Ecuador, El Salvador und Panama, die den Dollar für monetäre Stabilität verwenden.",
          nl: "Dollarisatie vindt plaats wanneer een land officieel de Amerikaanse dollar aanneemt als wettig betaalmiddel, gedeeltelijk of volledig ter vervanging van zijn binnenlandse valuta. Voorbeelden zijn Ecuador, El Salvador en Panama, die de dollar gebruiken voor monetaire stabiliteit."
        }
      },
      {
        question: {
          en: "What is the 'currency carry trade' strategy in international finance?",
          es: "¿Qué es la estrategia de 'carry trade de divisas' en finanzas internacionales?",
          de: "Was ist die 'Currency Carry Trade'-Strategie in der internationalen Finanzwelt?",
          nl: "Wat is de 'currency carry trade' strategie in internationale financiën?"
        },
        options: [
          { en: "Borrowing in low-interest currencies to invest in high-interest currencies", es: "Pedir prestado en monedas de bajo interés para invertir en monedas de alto interés", de: "Kreditaufnahme in niedrigverzinslichen Währungen zur Investition in hochverzinsliche Währungen", nl: "Lenen in lage-rente valuta's om te investeren in hoge-rente valuta's" },
          { en: "Physical transportation of currency", es: "Transporte físico de moneda", de: "Physischer Transport von Währung", nl: "Fysiek transport van valuta" },
          { en: "Currency hedging strategies", es: "Estrategias de cobertura de divisas", de: "Währungsabsicherungsstrategien", nl: "Valuta hedging strategieën" },
          { en: "Government currency interventions", es: "Intervenciones gubernamentales de divisas", de: "Staatliche Währungsinterventionen", nl: "Overheids valuta-interventies" }
        ],
        correct: 0,
        explanation: {
          en: "A carry trade involves borrowing money in a currency with low interest rates and investing it in a currency with higher interest rates, profiting from the interest rate differential. The US dollar has often been used as a funding currency due to historically low rates.",
          es: "Un carry trade involucra pedir dinero prestado en una moneda con tasas de interés bajas e invertirlo en una moneda con tasas de interés más altas, beneficiándose del diferencial de tasas de interés. El dólar estadounidense ha sido frecuentemente usado como moneda de financiamiento debido a tasas históricamente bajas.",
          de: "Ein Carry Trade beinhaltet das Leihen von Geld in einer Währung mit niedrigen Zinssätzen und die Investition in eine Währung mit höheren Zinssätzen, um vom Zinsdifferential zu profitieren. Der US-Dollar wurde aufgrund historisch niedriger Zinsen oft als Finanzierungswährung verwendet.",
          nl: "Een carry trade houdt in dat er geld wordt geleend in een valuta met lage rentetarieven en geïnvesteerd in een valuta met hogere rentetarieven, profiterend van het renteverschil. De Amerikaanse dollar is vaak gebruikt als financieringsvaluta vanwege historisch lage tarieven."
        }
      },
      {
        question: {
          en: "What is the primary function of the Federal Reserve's System Open Market Account (SOMA)?",
          es: "¿Cuál es la función principal de la Cuenta de Mercado Abierto del Sistema de la Reserva Federal (SOMA)?",
          de: "Was ist die primäre Funktion des System Open Market Account (SOMA) der Federal Reserve?",
          nl: "Wat is de primaire functie van de System Open Market Account (SOMA) van de Federal Reserve?"
        },
        options: [
          { en: "Managing government tax collections", es: "Gestionar las recaudaciones de impuestos gubernamentales", de: "Verwaltung staatlicher Steuereinnahmen", nl: "Beheren van overheidsbelastinginzamelingen" },
          { en: "Holding securities for monetary policy operations", es: "Mantener valores para operaciones de política monetaria", de: "Halten von Wertpapieren für geldpolitische Operationen", nl: "Aanhouden van effecten voor monetaire beleidsoperaties" },
          { en: "Processing international wire transfers", es: "Procesar transferencias internacionales", de: "Bearbeitung internationaler Überweisungen", nl: "Verwerken van internationale overmakingen" },
          { en: "Supervising commercial banks", es: "Supervisar bancos comerciales", de: "Überwachung von Geschäftsbanken", nl: "Toezicht houden op commerciële banken" }
        ],
        correct: 1,
        explanation: {
          en: "SOMA is the Federal Reserve's portfolio that holds securities acquired through open market operations. It contains Treasury securities, agency debt, and mortgage-backed securities used to implement monetary policy and provide liquidity to the financial system.",
          es: "SOMA es el portafolio de la Reserva Federal que mantiene valores adquiridos a través de operaciones de mercado abierto. Contiene valores del Tesoro, deuda de agencias y valores respaldados por hipotecas usados para implementar política monetaria y proporcionar liquidez al sistema financiero.",
          de: "SOMA ist das Portfolio der Federal Reserve, das Wertpapiere aus Offenmarktgeschäften hält. Es enthält Treasury-Wertpapiere, Behördenschulden und hypothekenbesicherte Wertpapiere, die zur Umsetzung der Geldpolitik und zur Bereitstellung von Liquidität für das Finanzsystem verwendet werden.",
          nl: "SOMA is de portefeuille van de Federal Reserve die effecten aanhoudt verkregen door open marktoperaties. Het bevat Treasury effecten, agentschapsschuld en hypotheek-gedekte effecten gebruikt om monetair beleid te implementeren en liquiditeit te bieden aan het financiële systeem."
        }
      },
      {
        question: {
          en: "What does 'repo' mean in Federal Reserve monetary operations?",
          es: "¿Qué significa 'repo' en las operaciones monetarias de la Reserva Federal?",
          de: "Was bedeutet 'Repo' in den geldpolitischen Operationen der Federal Reserve?",
          nl: "Wat betekent 'repo' in de monetaire operaties van de Federal Reserve?"
        },
        options: [
          { en: "Repurchase agreement", es: "Acuerdo de recompra", de: "Rückkaufvereinbarung", nl: "Terugkoopovereenkomst" },
          { en: "Repository system", es: "Sistema de repositorio", de: "Repository-System", nl: "Repository systeem" },
          { en: "Reporting mechanism", es: "Mecanismo de reporte", de: "Berichtsmechanismus", nl: "Rapportage mechanisme" },
          { en: "Reserve position", es: "Posición de reserva", de: "Reserveposition", nl: "Reservepositie" }
        ],
        correct: 0,
        explanation: {
          en: "A repo (repurchase agreement) is a short-term borrowing mechanism where securities are sold with an agreement to repurchase them at a higher price. The Fed uses repos to temporarily inject money into the banking system and manage short-term interest rates.",
          es: "Un repo (acuerdo de recompra) es un mecanismo de préstamo a corto plazo donde los valores se venden con un acuerdo de recomprarlos a un precio más alto. La Fed usa repos para inyectar temporalmente dinero en el sistema bancario y gestionar tasas de interés a corto plazo.",
          de: "Ein Repo (Rückkaufvereinbarung) ist ein kurzfristiger Kreditmechanismus, bei dem Wertpapiere mit der Vereinbarung verkauft werden, sie zu einem höheren Preis zurückzukaufen. Die Fed verwendet Repos, um vorübergehend Geld in das Bankensystem zu injizieren und kurzfristige Zinssätze zu verwalten.",
          nl: "Een repo (terugkoopovereenkomst) is een kortetermijn leenmechanisme waarbij effecten worden verkocht met een overeenkomst om ze tegen een hogere prijs terug te kopen. De Fed gebruikt repos om tijdelijk geld in het banksysteem te injecteren en kortetermijn rentetarieven te beheren."
        }
      },
      {
        question: {
          en: "What is the 'zero lower bound' problem in monetary policy?",
          es: "¿Qué es el problema del 'límite inferior cero' en política monetaria?",
          de: "Was ist das 'Zero Lower Bound'-Problem in der Geldpolitik?",
          nl: "Wat is het 'zero lower bound' probleem in monetair beleid?"
        },
        options: [
          { en: "Banks cannot hold negative reserves", es: "Los bancos no pueden tener reservas negativas", de: "Banken können keine negativen Reserven halten", nl: "Banken kunnen geen negatieve reserves aanhouden" },
          { en: "Interest rates cannot be cut below zero", es: "Las tasas de interés no pueden reducirse por debajo de cero", de: "Zinssätze können nicht unter null gesenkt werden", nl: "Rentetarieven kunnen niet onder nul worden verlaagd" },
          { en: "Money supply cannot be reduced to zero", es: "La oferta monetaria no puede reducirse a cero", de: "Die Geldmenge kann nicht auf null reduziert werden", nl: "Geldvoorraad kan niet tot nul worden teruggebracht" },
          { en: "Government spending cannot be negative", es: "El gasto gubernamental no puede ser negativo", de: "Regierungsausgaben können nicht negativ sein", nl: "Overheidsuitgaven kunnen niet negatief zijn" }
        ],
        correct: 1,
        explanation: {
          en: "The zero lower bound refers to the constraint that nominal interest rates cannot be cut below zero (or only slightly below). When rates reach this floor, traditional monetary policy becomes ineffective, requiring unconventional tools like quantitative easing.",
          es: "El límite inferior cero se refiere a la restricción de que las tasas de interés nominales no pueden reducirse por debajo de cero (o solo ligeramente por debajo). Cuando las tasas alcanzan este piso, la política monetaria tradicional se vuelve inefectiva, requiriendo herramientas no convencionales como la flexibilización cuantitativa.",
          de: "Die Zero Lower Bound bezieht sich auf die Einschränkung, dass nominale Zinssätze nicht unter null (oder nur geringfügig darunter) gesenkt werden können. Wenn die Zinsen diese Untergrenze erreichen, wird traditionelle Geldpolitik wirkungslos und erfordert unkonventionelle Instrumente wie quantitative Lockerung.",
          nl: "De zero lower bound verwijst naar de beperking dat nominale rentetarieven niet onder nul kunnen worden verlaagd (of slechts licht daaronder). Wanneer tarieven deze bodem bereiken, wordt traditioneel monetair beleid ineffectief, wat onconventionele instrumenten zoals kwantitatieve versoepeling vereist."
        }
      },
      {
        question: {
          en: "What is the role of primary dealers in US Treasury markets?",
          es: "¿Cuál es el papel de los distribuidores primarios en los mercados del Tesoro estadounidense?",
          de: "Welche Rolle spielen Primary Dealer in den US-Treasury-Märkten?",
          nl: "Wat is de rol van primary dealers in de Amerikaanse Treasury markten?"
        },
        options: [
          { en: "They set Treasury interest rates", es: "Establecen las tasas de interés del Tesoro", de: "Sie legen Treasury-Zinssätze fest", nl: "Zij stellen Treasury rentetarieven vast" },
          { en: "They are required to bid at Treasury auctions and trade with the Fed", es: "Están obligados a ofertar en subastas del Tesoro y comerciar con la Fed", de: "Sie sind verpflichtet, bei Treasury-Auktionen zu bieten und mit der Fed zu handeln", nl: "Zij zijn verplicht te bieden op Treasury veilingen en handelen met de Fed" },
          { en: "They issue new Treasury securities", es: "Emiten nuevos valores del Tesoro", de: "Sie geben neue Treasury-Wertpapiere aus", nl: "Zij geven nieuwe Treasury effecten uit" },
          { en: "They manage the national debt", es: "Gestionan la deuda nacional", de: "Sie verwalten die Staatsschulden", nl: "Zij beheren de staatsschuld" }
        ],
        correct: 1,
        explanation: {
          en: "Primary dealers are financial institutions with special trading relationships with the Federal Reserve. They must participate meaningfully in Treasury auctions and are counterparties for Fed open market operations, helping ensure liquidity in government securities markets.",
          es: "Los distribuidores primarios son instituciones financieras con relaciones comerciales especiales con la Reserva Federal. Deben participar significativamente en subastas del Tesoro y son contrapartes para operaciones de mercado abierto de la Fed, ayudando a asegurar liquidez en mercados de valores gubernamentales.",
          de: "Primary Dealer sind Finanzinstitutionen mit besonderen Handelsbeziehungen zur Federal Reserve. Sie müssen bedeutsam an Treasury-Auktionen teilnehmen und sind Gegenparteien für Fed-Offenmarktgeschäfte, um Liquidität in den Staatsanleihenmärkten zu gewährleisten.",
          nl: "Primary dealers zijn financiële instellingen met speciale handelsrelaties met de Federal Reserve. Zij moeten betekenisvol deelnemen aan Treasury veilingen en zijn tegenpartijen voor Fed open marktoperaties, om liquiditeit in overheidseffectenmarkten te waarborgen."
        }
      },
      {
        question: {
          en: "What does 'Operation Twist' refer to in Federal Reserve policy?",
          es: "¿A qué se refiere 'Operación Twist' en la política de la Reserva Federal?",
          de: "Worauf bezieht sich 'Operation Twist' in der Federal Reserve-Politik?",
          nl: "Waar verwijst 'Operation Twist' naar in Federal Reserve beleid?"
        },
        options: [
          { en: "Changing the composition of bond holdings to flatten the yield curve", es: "Cambiar la composición de tenencias de bonos para aplanar la curva de rendimiento", de: "Änderung der Zusammensetzung der Anleihenbestände zur Abflachung der Renditekurve", nl: "Veranderen van de samenstelling van obligatiebezit om de rentecurve af te vlakken" },
          { en: "Rapidly changing interest rates", es: "Cambiar rápidamente las tasas de interés", de: "Schnelles Ändern der Zinssätze", nl: "Snel veranderen van rentetarieven" },
          { en: "Foreign exchange interventions", es: "Intervenciones de cambio de divisas", de: "Deviseninterventionen", nl: "Valuta-interventies" },
          { en: "Restructuring Federal Reserve districts", es: "Reestructurar distritos de la Reserva Federal", de: "Umstrukturierung der Federal Reserve-Distrikte", nl: "Herstructureren van Federal Reserve districten" }
        ],
        correct: 0,
        explanation: {
          en: "Operation Twist involves selling short-term Treasury securities and buying long-term ones to 'twist' or flatten the yield curve. This policy aims to lower long-term interest rates without expanding the overall size of the Fed's balance sheet.",
          es: "La Operación Twist involucra vender valores del Tesoro a corto plazo y comprar los de largo plazo para 'torcer' o aplanar la curva de rendimiento. Esta política busca bajar las tasas de interés a largo plazo sin expandir el tamaño general del balance de la Fed.",
          de: "Operation Twist beinhaltet den Verkauf kurzfristiger Treasury-Wertpapiere und den Kauf langfristiger, um die Renditekurve zu 'verdrehen' oder abzuflachen. Diese Politik zielt darauf ab, langfristige Zinssätze zu senken, ohne die Gesamtgröße der Fed-Bilanz zu erweitern.",
          nl: "Operation Twist houdt in het verkopen van kortetermijn Treasury effecten en kopen van langetermijn effecten om de rentecurve te 'verdraaien' of af te vlakken. Dit beleid heeft als doel langetermijn rentetarieven te verlagen zonder de totale omvang van de Fed balans uit te breiden."
        }
      },
      {
        question: {
          en: "What is the 'Taylor Rule' in monetary economics?",
          es: "¿Qué es la 'Regla de Taylor' en economía monetaria?",
          de: "Was ist die 'Taylor-Regel' in der Geldwirtschaft?",
          nl: "Wat is de 'Taylor Regel' in monetaire economie?"
        },
        options: [
          { en: "A formula for setting optimal interest rates based on inflation and output gaps", es: "Una fórmula para establecer tasas de interés óptimas basadas en brechas de inflación y producción", de: "Eine Formel zur Festlegung optimaler Zinssätze basierend auf Inflation und Produktionslücken", nl: "Een formule voor het vaststellen van optimale rentetarieven gebaseerd op inflatie en productiegaps" },
          { en: "A rule for bank capital requirements", es: "Una regla para requisitos de capital bancario", de: "Eine Regel für Bankenkapitalanforderungen", nl: "Een regel voor bankkapitaalvereisten" },
          { en: "A guideline for currency interventions", es: "Una guía para intervenciones de divisas", de: "Eine Richtlinie für Währungsinterventionen", nl: "Een richtlijn voor valuta-interventies" },
          { en: "A method for calculating exchange rates", es: "Un método para calcular tipos de cambio", de: "Eine Methode zur Berechnung von Wechselkursen", nl: "Een methode voor het berekenen van wisselkoersen" }
        ],
        correct: 0,
        explanation: {
          en: "The Taylor Rule is an economic formula that suggests how central banks should adjust interest rates in response to changes in inflation and economic output. It provides a systematic approach to monetary policy by recommending rate changes based on deviations from target inflation and full employment.",
          es: "La Regla de Taylor es una fórmula económica que sugiere cómo los bancos centrales deberían ajustar las tasas de interés en respuesta a cambios en inflación y producción económica. Proporciona un enfoque sistemático a la política monetaria al recomendar cambios de tasas basados en desviaciones de la inflación objetivo y pleno empleo.",
          de: "Die Taylor-Regel ist eine wirtschaftliche Formel, die vorschlägt, wie Zentralbanken Zinssätze als Reaktion auf Änderungen der Inflation und Wirtschaftsleistung anpassen sollten. Sie bietet einen systematischen Ansatz für die Geldpolitik, indem sie Zinsänderungen basierend auf Abweichungen von Zielinflation und Vollbeschäftigung empfiehlt.",
          nl: "De Taylor Regel is een economische formule die suggereert hoe centrale banken rentetarieven zouden moeten aanpassen als reactie op veranderingen in inflatie en economische productie. Het biedt een systematische benadering van monetair beleid door tariefveranderingen aan te bevelen gebaseerd op afwijkingen van doelinflatie en volledige werkgelegenheid."
        }
      },
      {
        question: {
          en: "What is the difference between M1 and M2 money supply measures?",
          es: "¿Cuál es la diferencia entre las medidas de oferta monetaria M1 y M2?",
          de: "Was ist der Unterschied zwischen den Geldmengenaggregaten M1 und M2?",
          nl: "Wat is het verschil tussen M1 en M2 geldvoorraadinstrumenten?"
        },
        options: [
          { en: "M1 includes only currency, M2 includes all bank deposits", es: "M1 incluye solo moneda, M2 incluye todos los depósitos bancarios", de: "M1 umfasst nur Währung, M2 umfasst alle Bankeinlagen", nl: "M1 omvat alleen valuta, M2 omvat alle bankdeposito's" },
          { en: "M2 includes M1 plus savings deposits and money market funds", es: "M2 incluye M1 más depósitos de ahorro y fondos del mercado monetario", de: "M2 umfasst M1 plus Spareinlagen und Geldmarktfonds", nl: "M2 omvat M1 plus spaardeposito's en geldmarktfondsen" },
          { en: "M1 is domestic money, M2 includes foreign currency", es: "M1 es dinero doméstico, M2 incluye moneda extranjera", de: "M1 ist inländisches Geld, M2 umfasst Fremdwährung", nl: "M1 is binnenlands geld, M2 omvat buitenlandse valuta" },
          { en: "M2 is the more liquid measure", es: "M2 es la medida más líquida", de: "M2 ist das liquidere Maß", nl: "M2 is de meer liquide maatstaf" }
        ],
        correct: 1,
        explanation: {
          en: "M1 includes the most liquid forms of money: currency in circulation and checking deposits. M2 is a broader measure that includes M1 plus savings deposits, small time deposits, and retail money market mutual fund shares - less liquid but still readily convertible assets.",
          es: "M1 incluye las formas más líquidas de dinero: moneda en circulación y depósitos corrientes. M2 es una medida más amplia que incluye M1 más depósitos de ahorro, depósitos a plazo pequeños y participaciones de fondos mutuos del mercado monetario minorista - activos menos líquidos pero aún fácilmente convertibles.",
          de: "M1 umfasst die liquidesten Geldformen: Bargeld im Umlauf und Sichteinlagen. M2 ist ein breiteres Maß, das M1 plus Spareinlagen, kleine Termineinlagen und Anteile an Retail-Geldmarktfonds umfasst - weniger liquide, aber noch leicht konvertierbare Vermögenswerte.",
          nl: "M1 omvat de meest liquide vormen van geld: valuta in omloop en lopende rekeningen. M2 is een bredere maatstaf die M1 omvat plus spaardeposito's, kleine termijndeposito's en retail geldmarkt beleggingsfonds aandelen - minder liquide maar nog steeds gemakkelijk converteerbare activa."
        }
      },
      {
        question: {
          en: "What is 'forward guidance' in Federal Reserve communications?",
          es: "¿Qué es la 'guía hacia adelante' en las comunicaciones de la Reserva Federal?",
          de: "Was ist 'Forward Guidance' in der Kommunikation der Federal Reserve?",
          nl: "Wat is 'forward guidance' in Federal Reserve communicatie?"
        },
        options: [
          { en: "Legal advice to banks", es: "Asesoría legal a bancos", de: "Rechtsberatung für Banken", nl: "Juridisch advies aan banken" },
          { en: "Signaling future policy intentions to influence expectations", es: "Señalar intenciones de política futura para influir en expectativas", de: "Signalisierung zukünftiger politischer Absichten zur Beeinflussung von Erwartungen", nl: "Signaleren van toekomstige beleidsintentie om verwachtingen te beïnvloeden" },
          { en: "Historical policy analysis", es: "Análisis histórico de políticas", de: "Historische Politikanalyse", nl: "Historische beleidsanalyse" },
          { en: "Technical assistance programs", es: "Programas de asistencia técnica", de: "Technische Hilfsprogramme", nl: "Technische assistentieprogramma's" }
        ],
        correct: 1,
        explanation: {
          en: "Forward guidance is the Fed's practice of communicating its future policy intentions to financial markets and the public. By signaling likely future interest rate paths or policy actions, the Fed can influence market expectations and economic behavior even before implementing policy changes.",
          es: "La guía hacia adelante es la práctica de la Fed de comunicar sus intenciones de política futura a los mercados financieros y al público. Al señalar trayectorias probables de tasas de interés futuras o acciones de política, la Fed puede influir en expectativas del mercado y comportamiento económico incluso antes de implementar cambios de política.",
          de: "Forward Guidance ist die Praxis der Fed, ihre zukünftigen politischen Absichten an die Finanzmärkte und die Öffentlichkeit zu kommunizieren. Durch die Signalisierung wahrscheinlicher zukünftiger Zinspfade oder politischer Maßnahmen kann die Fed Markterwartungen und wirtschaftliches Verhalten beeinflussen, noch bevor sie politische Änderungen umsetzt.",
          nl: "Forward guidance is de praktijk van de Fed om haar toekomstige beleidsintentie te communiceren naar financiële markten en het publiek. Door waarschijnlijke toekomstige rentepaden of beleidsacties te signaleren, kan de Fed marktverwachtingen en economisch gedrag beïnvloeden nog voordat beleidsveranderingen worden geïmplementeerd."
        }
      },
      {
        question: {
          en: "What is the 'Triffin Dilemma' and how does it affect the US dollar's role as a reserve currency?",
          es: "¿Qué es el 'Dilema de Triffin' y cómo afecta el papel del dólar estadounidense como moneda de reserva?",
          de: "Was ist das 'Triffin-Dilemma' und wie beeinflusst es die Rolle des US-Dollars als Reservewährung?",
          nl: "Wat is het 'Triffin Dilemma' en hoe beïnvloedt het de rol van de Amerikaanse dollar als reservevaluta?"
        },
        options: [
          { en: "The conflict between domestic monetary policy and international reserve currency obligations", es: "El conflicto entre la política monetaria doméstica y las obligaciones de moneda de reserva internacional", de: "Der Konflikt zwischen inländischer Geldpolitik und internationalen Reservewährungsverpflichtungen", nl: "Het conflict tussen binnenlands monetair beleid en internationale reservevaluta verplichtingen" },
          { en: "The technical difficulty of printing enough currency for global demand", es: "La dificultad técnica de imprimir suficiente moneda para la demanda global", de: "Die technische Schwierigkeit, genug Währung für die globale Nachfrage zu drucken", nl: "De technische moeilijkheid van het drukken van voldoende valuta voor wereldwijde vraag" },
          { en: "The choice between gold and silver backing for international currency", es: "La elección entre respaldo de oro y plata para moneda internacional", de: "Die Wahl zwischen Gold- und Silberdeckung für internationale Währung", nl: "De keuze tussen goud en zilver dekking voor internationale valuta" },
          { en: "The legal framework conflict between national and international monetary law", es: "El conflicto del marco legal entre ley monetaria nacional e internacional", de: "Der Rechtsrahmenkonflikt zwischen nationalem und internationalem Währungsrecht", nl: "Het juridische kader conflict tussen nationaal en internationaal monetair recht" }
        ],
        correct: 0,
        explanation: {
          en: "The Triffin Dilemma describes the fundamental conflict faced by a country whose currency serves as the global reserve currency. The US must run trade deficits to supply dollars to the world, but persistent deficits can undermine confidence in the dollar. This creates tension between domestic economic needs and global monetary stability requirements.",
          es: "El Dilema de Triffin describe el conflicto fundamental enfrentado por un país cuya moneda sirve como la moneda de reserva global. EE.UU. debe tener déficits comerciales para suministrar dólares al mundo, pero déficits persistentes pueden socavar la confianza en el dólar. Esto crea tensión entre las necesidades económicas domésticas y los requisitos de estabilidad monetaria global.",
          de: "Das Triffin-Dilemma beschreibt den fundamentalen Konflikt, mit dem ein Land konfrontiert ist, dessen Währung als globale Reservewährung dient. Die USA müssen Handelsdefizite haben, um der Welt Dollars zu liefern, aber persistente Defizite können das Vertrauen in den Dollar untergraben. Dies schafft Spannungen zwischen inländischen wirtschaftlichen Bedürfnissen und globalen Währungsstabilitätsanforderungen.",
          nl: "Het Triffin Dilemma beschrijft het fundamentele conflict waarmee een land wordt geconfronteerd waarvan de valuta dient als mondiale reservevaluta. De VS moeten handelsdeficieten hebben om dollars aan de wereld te leveren, maar aanhoudende deficieten kunnen het vertrouwen in de dollar ondermijnen. Dit creëert spanning tussen binnenlandse economische behoeften en wereldwijde monetaire stabiliteitsvereisten."
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