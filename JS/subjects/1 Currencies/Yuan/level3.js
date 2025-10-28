// Quiz Level 3: Currencies - Yuan (Intermediate)
(function() {
  const level3 = {
    name: {
      en: "Yuan - Intermediate",
      es: "Yuan - Intermedio",
      de: "Yuan - Mittelstufe",
      nl: "Yuan - Gemiddeld"
    },
    questions: [
      {
        question: {
          en: "What is the primary mechanism behind the Yuan's exchange rate formation under the current managed float system?",
          es: "¿Cuál es el mecanismo principal detrás de la formación del tipo de cambio del Yuan bajo el sistema actual de flotación administrada?",
          de: "Was ist der primäre Mechanismus hinter der Wechselkursbildung des Yuan unter dem aktuellen verwalteten Float-System?",
          nl: "Wat is het primaire mechanisme achter de wisselkoersvorming van de Yuan onder het huidige beheerde float systeem?"
        },
        options: [
          { en: "Market forces alone determine the rate", es: "Solo las fuerzas del mercado determinan la tasa", de: "Marktkräfte allein bestimmen den Kurs", nl: "Marktkrachten alleen bepalen de koers" },
          { en: "PBOC sets daily reference rate based on previous day's closing and basket currencies", es: "PBOC establece tasa de referencia diaria basada en el cierre del día anterior y monedas de la canasta", de: "PBOC setzt täglichen Referenzkurs basierend auf Vortagsschluss und Korbwährungen", nl: "PBOC stelt dagelijkse referentiekoers vast gebaseerd op vorige dag's sluiting en mandvaluta's" },
          { en: "Gold reserves back the exchange rate", es: "Las reservas de oro respaldan el tipo de cambio", de: "Goldreserven stützen den Wechselkurs", nl: "Goudreserves ondersteunen de wisselkoers" },
          { en: "Interest rate parity determines the value", es: "La paridad de tasas de interés determina el valor", de: "Zinsparitäten bestimmen den Wert", nl: "Rentepariteit bepaalt de waarde" }
        ],
        correct: 1,
        explanation: {
          en: "The PBOC sets a daily reference rate (middle rate) for USD/CNY based on the previous trading day's closing price and movements in a basket of currencies, around which the Yuan can fluctuate within a ±2% band.",
          es: "El PBOC establece una tasa de referencia diaria (tasa media) para USD/CNY basada en el precio de cierre del día de trading anterior y movimientos en una canasta de monedas, alrededor de la cual el Yuan puede fluctuar dentro de una banda de ±2%.",
          de: "Die PBOC setzt einen täglichen Referenzkurs (Mittelkurs) für USD/CNY basierend auf dem Schlusskurs des vorherigen Handelstages und Bewegungen in einem Währungskorb fest, um den der Yuan innerhalb eines ±2%-Bandes schwanken kann.",
          nl: "De PBOC stelt een dagelijkse referentiekoers (middenkoers) vast voor USD/CNY gebaseerd op de sluitingsprijs van de vorige handelsdag en bewegingen in een mand van valuta's, waarbinnen de Yuan kan fluctueren binnen een ±2% band."
        }
      },
      {
        question: {
          en: "Which of the following best explains the concept of 'Yuan internationalization trilemma'?",
          es: "¿Cuál de las siguientes opciones explica mejor el concepto del 'trilema de internacionalización del Yuan'?",
          de: "Welche der folgenden Optionen erklärt am besten das Konzept des 'Yuan-Internationalisierungs-Trilemmas'?",
          nl: "Welke van de volgende verklaart het beste het concept van het 'Yuan internationalisatie trilemma'?"
        },
        options: [
          { en: "China cannot simultaneously maintain capital controls, exchange rate stability, and monetary policy independence", es: "China no puede mantener simultáneamente controles de capital, estabilidad del tipo de cambio e independencia de política monetaria", de: "China kann nicht gleichzeitig Kapitalkontrollen, Wechselkursstabilität und geldpolitische Unabhängigkeit aufrechterhalten", nl: "China kan niet tegelijkertijd kapitaalcontroles, wisselkoersstabiliteit en monetaire beleidsindependentie handhaven" },
          { en: "Yuan cannot be used for trade, investment, and reserves simultaneously", es: "El Yuan no puede usarse para comercio, inversión y reservas simultáneamente", de: "Der Yuan kann nicht gleichzeitig für Handel, Investitionen und Reserven verwendet werden", nl: "Yuan kan niet tegelijkertijd gebruikt worden voor handel, investeringen en reserves" },
          { en: "Digital Yuan cannot coexist with physical Yuan and offshore Yuan", es: "El Yuan digital no puede coexistir con el Yuan físico y el Yuan offshore", de: "Digitaler Yuan kann nicht mit physischem Yuan und Offshore-Yuan koexistieren", nl: "Digitale Yuan kan niet naast fysieke Yuan en offshore Yuan bestaan" },
          { en: "China must choose between BRI, AIIB, and BRICS for Yuan promotion", es: "China debe elegir entre BRI, AIIB y BRICS para la promoción del Yuan", de: "China muss zwischen BRI, AIIB und BRICS für Yuan-Förderung wählen", nl: "China moet kiezen tussen BRI, AIIB en BRICS voor Yuan promotie" }
        ],
        correct: 0,
        explanation: {
          en: "The Yuan internationalization faces the classic impossible trinity: China cannot simultaneously maintain complete capital controls, exchange rate stability, and independent monetary policy. To internationalize the Yuan, China must gradually relax at least one of these constraints.",
          es: "La internacionalización del Yuan enfrenta la clásica trinidad imposible: China no puede mantener simultáneamente controles de capital completos, estabilidad del tipo de cambio y política monetaria independiente. Para internacionalizar el Yuan, China debe relajar gradualmente al menos una de estas restricciones.",
          de: "Die Yuan-Internationalisierung steht vor dem klassischen unmöglichen Trilemma: China kann nicht gleichzeitig vollständige Kapitalkontrollen, Wechselkursstabilität und unabhängige Geldpolitik aufrechterhalten. Um den Yuan zu internationalisieren, muss China mindestens eine dieser Beschränkungen schrittweise lockern.",
          nl: "Yuan internationalisatie staat voor het klassieke onmogelijke trilemma: China kan niet tegelijkertijd volledige kapitaalcontroles, wisselkoersstabiliteit en onafhankelijk monetair beleid handhaven. Om de Yuan te internationaliseren moet China geleidelijk ten minste één van deze beperkingen versoepelen."
        }
      },
      {
        question: {
          en: "What role does the Shanghai Interbank Offered Rate (SHIBOR) play in Yuan monetary policy transmission?",
          es: "¿Qué papel juega la Tasa de Oferta Interbancaria de Shanghai (SHIBOR) en la transmisión de la política monetaria del Yuan?",
          de: "Welche Rolle spielt der Shanghai Interbank Offered Rate (SHIBOR) bei der Übertragung der Yuan-Geldpolitik?",
          nl: "Welke rol speelt de Shanghai Interbank Offered Rate (SHIBOR) in de Yuan monetaire beleidstransmissie?"
        },
        options: [
          { en: "It directly determines government bond yields", es: "Determina directamente los rendimientos de bonos gubernamentales", de: "Es bestimmt direkt die Staatsanleiherenditen", nl: "Het bepaalt direct de opbrengsten van staatsobligaties" },
          { en: "It serves as the benchmark for Yuan interest rate derivatives and loan pricing", es: "Sirve como referencia para derivados de tasas de interés del Yuan y precios de préstamos", de: "Es dient als Benchmark für Yuan-Zinsderivate und Kreditpreise", nl: "Het dient als benchmark voor Yuan rentederivaten en leningprijsstelling" },
          { en: "It controls foreign exchange intervention levels", es: "Controla los niveles de intervención de divisas", de: "Es kontrolliert Deviseninterventionsebenen", nl: "Het controleert valutainterventieniveaus" },
          { en: "It sets reserve requirement ratios for banks", es: "Establece los ratios de requerimientos de reserva para bancos", de: "Es setzt Mindestreservesätze für Banken", nl: "Het stelt reservevereisteratio's voor banken vast" }
        ],
        correct: 1,
        explanation: {
          en: "SHIBOR serves as China's key benchmark interest rate, providing reference rates for Yuan-denominated interest rate derivatives, corporate loans, and other financial products, helping transmit PBOC monetary policy signals to the broader economy.",
          es: "SHIBOR sirve como la tasa de interés de referencia clave de China, proporcionando tasas de referencia para derivados de tasas de interés denominados en Yuan, préstamos corporativos y otros productos financieros, ayudando a transmitir señales de política monetaria del PBOC a la economía más amplia.",
          de: "SHIBOR dient als Chinas wichtigster Referenzzinssatz und bietet Referenzsätze für Yuan-denominierte Zinsderivate, Unternehmenskredite und andere Finanzprodukte, wodurch geldpolitische Signale der PBOC an die breitere Wirtschaft übertragen werden.",
          nl: "SHIBOR dient als China's belangrijkste benchmark rentetarief, dat referentietarieven biedt voor Yuan-gedenomineerde rentederivaten, bedrijfsleningen en andere financiële producten, en helpt bij het doorgeven van PBOC monetaire beleidssignalen aan de bredere economie."
        }
      },
      {
        question: {
          en: "How does the Qualified Domestic Institutional Investor (QDII) scheme impact Yuan capital flows?",
          es: "¿Cómo impacta el esquema de Inversor Institucional Doméstico Calificado (QDII) en los flujos de capital del Yuan?",
          de: "Wie wirkt sich das Qualified Domestic Institutional Investor (QDII) Schema auf Yuan-Kapitalflüsse aus?",
          nl: "Hoe beïnvloedt het Qualified Domestic Institutional Investor (QDII) schema de Yuan kapitaalstromen?"
        },
        options: [
          { en: "It allows foreign investors to buy Chinese stocks directly", es: "Permite a inversores extranjeros comprar acciones chinas directamente", de: "Es erlaubt ausländischen Investoren, chinesische Aktien direkt zu kaufen", nl: "Het stelt buitenlandse beleggers in staat Chinese aandelen direct te kopen" },
          { en: "It enables Chinese institutional investors to invest overseas using Yuan", es: "Permite a inversores institucionales chinos invertir en el extranjero usando Yuan", de: "Es ermöglicht chinesischen institutionellen Investoren, mit Yuan im Ausland zu investieren", nl: "Het stelt Chinese institutionele beleggers in staat om met Yuan in het buitenland te investeren" },
          { en: "It controls the daily exchange rate fixing mechanism", es: "Controla el mecanismo de fijación diaria del tipo de cambio", de: "Es kontrolliert den täglichen Wechselkursfixierungsmechanismus", nl: "Het controleert het dagelijkse wisselkoersfixatiemechanisme" },
          { en: "It regulates Yuan clearing in Hong Kong", es: "Regula la compensación de Yuan en Hong Kong", de: "Es reguliert Yuan-Clearing in Hongkong", nl: "Het reguleert Yuan clearing in Hong Kong" }
        ],
        correct: 1,
        explanation: {
          en: "The QDII scheme allows qualified Chinese institutional investors (banks, insurers, fund managers) to invest overseas using Yuan, creating legitimate outward capital flows and supporting Yuan internationalization by increasing overseas Yuan holdings.",
          es: "El esquema QDII permite a inversores institucionales chinos calificados (bancos, aseguradoras, gestores de fondos) invertir en el extranjero usando Yuan, creando flujos de capital salientes legítimos y apoyando la internacionalización del Yuan al aumentar las tenencias de Yuan en el extranjero.",
          de: "Das QDII-Schema erlaubt qualifizierten chinesischen institutionellen Investoren (Banken, Versicherern, Fondsmanagern), mit Yuan im Ausland zu investieren, wodurch legitime Kapitalabflüsse geschaffen und die Yuan-Internationalisierung durch erhöhte Overseas-Yuan-Bestände unterstützt werden.",
          nl: "Het QDII-schema stelt gekwalificeerde Chinese institutionele beleggers (banken, verzekeraars, fondsmanagers) in staat om met Yuan in het buitenland te investeren, waardoor legitieme uitgaande kapitaalstromen ontstaan en Yuan internationalisatie wordt ondersteund door verhoogde buitenlandse Yuan-bezittingen."
        }
      },
      {
        question: {
          en: "What is the significance of the China Foreign Exchange Trade System (CFETS) Yuan index?",
          es: "¿Cuál es la importancia del índice Yuan del Sistema de Comercio de Divisas de China (CFETS)?",
          de: "Was ist die Bedeutung des China Foreign Exchange Trade System (CFETS) Yuan-Index?",
          nl: "Wat is de betekenis van de China Foreign Exchange Trade System (CFETS) Yuan index?"
        },
        options: [
          { en: "It measures Yuan's performance against a trade-weighted basket of currencies", es: "Mide el rendimiento del Yuan contra una canasta de monedas ponderada por comercio", de: "Es misst die Leistung des Yuan gegen einen handelsgewichteten Währungskorb", nl: "Het meet de prestatie van de Yuan tegen een handelgewogen mand van valuta's" },
          { en: "It sets the maximum daily trading volumes for Yuan", es: "Establece los volúmenes máximos de comercio diario para el Yuan", de: "Es setzt die maximalen täglichen Handelsvolumen für den Yuan", nl: "Het stelt de maximale dagelijkse handelsvolumes voor de Yuan vast" },
          { en: "It determines Yuan convertibility ratios", es: "Determina los ratios de convertibilidad del Yuan", de: "Es bestimmt Yuan-Konvertibilitätsverhältnisse", nl: "Het bepaalt Yuan convertibiliteitsratio's" },
          { en: "It controls foreign banks' Yuan operations", es: "Controla las operaciones de Yuan de bancos extranjeros", de: "Es kontrolliert Yuan-Operationen ausländischer Banken", nl: "Het controleert de Yuan operaties van buitenlandse banken" }
        ],
        correct: 0,
        explanation: {
          en: "The CFETS Yuan index measures the Yuan's strength against a basket of 24 currencies weighted by China's trade relationships, providing a broader view of Yuan competitiveness beyond just the USD/CNY bilateral rate.",
          es: "El índice Yuan CFETS mide la fortaleza del Yuan contra una canasta de 24 monedas ponderada por las relaciones comerciales de China, proporcionando una visión más amplia de la competitividad del Yuan más allá de solo la tasa bilateral USD/CNY.",
          de: "Der CFETS Yuan-Index misst die Stärke des Yuan gegen einen Korb von 24 Währungen, gewichtet nach Chinas Handelsbeziehungen, und bietet eine breitere Sicht auf die Yuan-Wettbewerbsfähigkeit jenseits nur des bilateralen USD/CNY-Kurses.",
          nl: "De CFETS Yuan index meet de sterkte van de Yuan tegen een mand van 24 valuta's gewogen naar China's handelsrelaties, wat een breder beeld geeft van Yuan competitiviteit dan alleen de bilaterale USD/CNY koers."
        }
      },
      {
        question: {
          en: "How does the 'dual circulation' economic strategy affect Yuan policy?",
          es: "¿Cómo afecta la estrategia económica de 'circulación dual' a la política del Yuan?",
          de: "Wie wirkt sich die Wirtschaftsstrategie der 'dualen Zirkulation' auf die Yuan-Politik aus?",
          nl: "Hoe beïnvloedt de 'dual circulation' economische strategie het Yuan beleid?"
        },
        options: [
          { en: "It requires maintaining two separate Yuan currencies", es: "Requiere mantener dos monedas Yuan separadas", de: "Es erfordert die Aufrechterhaltung von zwei separaten Yuan-Währungen", nl: "Het vereist het handhaven van twee afzonderlijke Yuan valuta's" },
          { en: "It balances domestic economic resilience with international Yuan usage", es: "Equilibra la resistencia económica doméstica con el uso internacional del Yuan", de: "Es balanciert innenwirtschaftliche Widerstandsfähigkeit mit internationaler Yuan-Nutzung", nl: "Het balanceert binnenlandse economische veerkracht met internationaal Yuan gebruik" },
          { en: "It mandates equal trade volumes in Yuan and US Dollars", es: "Exige volúmenes de comercio iguales en Yuan y Dólares estadounidenses", de: "Es schreibt gleiche Handelsvolumen in Yuan und US-Dollar vor", nl: "Het verplicht gelijke handelsvolumes in Yuan en US Dollars" },
          { en: "It creates separate monetary policies for each circulation", es: "Crea políticas monetarias separadas para cada circulación", de: "Es schafft separate Geldpolitiken für jeden Kreislauf", nl: "Het creëert afzonderlijke monetaire beleidsmaatregelen voor elke circulatie" }
        ],
        correct: 1,
        explanation: {
          en: "The dual circulation strategy emphasizes strengthening domestic economic cycles while maintaining international engagement. For Yuan policy, this means developing domestic financial markets and Yuan usage while gradually advancing internationalization to reduce external dependencies.",
          es: "La estrategia de circulación dual enfatiza fortalecer los ciclos económicos domésticos mientras mantiene el compromiso internacional. Para la política del Yuan, esto significa desarrollar mercados financieros domésticos y uso del Yuan mientras avanza gradualmente la internacionalización para reducir dependencias externas.",
          de: "Die duale Zirkulationsstrategie betont die Stärkung der inländischen Wirtschaftskreisläufe bei Aufrechterhaltung des internationalen Engagements. Für die Yuan-Politik bedeutet dies die Entwicklung inländischer Finanzmärkte und Yuan-Nutzung bei gleichzeitigem schrittweisen Vorantreiben der Internationalisierung zur Reduzierung externer Abhängigkeiten.",
          nl: "De dual circulation strategie benadrukt het versterken van binnenlandse economische cycli terwijl internationale betrokkenheid behouden blijft. Voor Yuan beleid betekent dit het ontwikkelen van binnenlandse financiële markten en Yuan gebruik terwijl internationalisatie geleidelijk wordt bevorderd om externe afhankelijkheden te verminderen."
        }
      },
      {
        question: {
          en: "What is the function of Yuan clearing banks in offshore financial centers?",
          es: "¿Cuál es la función de los bancos de compensación de Yuan en centros financieros offshore?",
          de: "Was ist die Funktion von Yuan-Clearingbanken in Offshore-Finanzzentren?",
          nl: "Wat is de functie van Yuan clearing banken in offshore financiële centra?"
        },
        options: [
          { en: "They convert Yuan to local currencies automatically", es: "Convierten Yuan a monedas locales automáticamente", de: "Sie konvertieren Yuan automatisch in lokale Währungen", nl: "Ze converteren Yuan automatisch naar lokale valuta's" },
          { en: "They provide Yuan liquidity and settlement services for local financial institutions", es: "Proporcionan liquidez en Yuan y servicios de liquidación para instituciones financieras locales", de: "Sie bieten Yuan-Liquidität und Abwicklungsdienste für lokale Finanzinstitute", nl: "Ze bieden Yuan liquiditeit en afwikkelingsdiensten voor lokale financiële instellingen" },
          { en: "They regulate Yuan exchange rates in their jurisdiction", es: "Regulan los tipos de cambio del Yuan en su jurisdicción", de: "Sie regulieren Yuan-Wechselkurse in ihrer Jurisdiktion", nl: "Ze reguleren Yuan wisselkoersen in hun jurisdictie" },
          { en: "They issue Yuan-denominated credit cards globally", es: "Emiten tarjetas de crédito denominadas en Yuan globalmente", de: "Sie geben Yuan-denominierte Kreditkarten global aus", nl: "Ze geven Yuan-gedenomineerde creditcards wereldwijd uit" }
        ],
        correct: 1,
        explanation: {
          en: "Yuan clearing banks in offshore centers like London, Frankfurt, and Singapore provide crucial infrastructure by offering Yuan liquidity, payment settlement, and clearing services to local financial institutions, facilitating Yuan transactions without routing through mainland China.",
          es: "Los bancos de compensación de Yuan en centros offshore como Londres, Frankfurt y Singapur proporcionan infraestructura crucial ofreciendo liquidez en Yuan, liquidación de pagos y servicios de compensación a instituciones financieras locales, facilitando transacciones en Yuan sin enrutar a través de China continental.",
          de: "Yuan-Clearingbanken in Offshore-Zentren wie London, Frankfurt und Singapur bieten entscheidende Infrastruktur durch die Bereitstellung von Yuan-Liquidität, Zahlungsabwicklung und Clearing-Diensten für lokale Finanzinstitute, wodurch Yuan-Transaktionen ohne Weiterleitung über Festlandchina ermöglicht werden.",
          nl: "Yuan clearing banken in offshore centra zoals Londen, Frankfurt en Singapore bieden cruciale infrastructuur door Yuan liquiditeit, betalingsafwikkeling en clearing diensten aan lokale financiële instellingen te bieden, wat Yuan transacties faciliteert zonder routing via vasteland China."
        }
      },
      {
        question: {
          en: "Which factor most constrains the Yuan's role as a global reserve currency?",
          es: "¿Qué factor restringe más el papel del Yuan como moneda de reserva global?",
          de: "Welcher Faktor beschränkt die Rolle des Yuan als globale Reservewährung am meisten?",
          nl: "Welke factor beperkt de rol van de Yuan als wereldwijde reservevaluta het meest?"
        },
        options: [
          { en: "Limited availability of Yuan-denominated safe assets", es: "Disponibilidad limitada de activos seguros denominados en Yuan", de: "Begrenzte Verfügbarkeit Yuan-denominierter sicherer Vermögenswerte", nl: "Beperkte beschikbaarheid van Yuan-gedenomineerde veilige activa" },
          { en: "High volatility of Yuan exchange rates", es: "Alta volatilidad de los tipos de cambio del Yuan", de: "Hohe Volatilität der Yuan-Wechselkurse", nl: "Hoge volatiliteit van Yuan wisselkoersen" },
          { en: "Lack of Yuan convertibility in emerging markets", es: "Falta de convertibilidad del Yuan en mercados emergentes", de: "Mangel an Yuan-Konvertibilität in Schwellenmärkten", nl: "Gebrek aan Yuan convertibiliteit in opkomende markten" },
          { en: "Insufficient Yuan trading volumes globally", es: "Volúmenes de comercio de Yuan insuficientes globalmente", de: "Unzureichende Yuan-Handelsvolumen global", nl: "Onvoldoende Yuan handelsvolumes wereldwijd" }
        ],
        correct: 0,
        explanation: {
          en: "The limited supply of deep, liquid, and safe Yuan-denominated assets (particularly government bonds) constrains central banks' ability to hold significant Yuan reserves. Reserve currencies require large, accessible bond markets for liquidity management.",
          es: "La oferta limitada de activos denominados en Yuan profundos, líquidos y seguros (particularmente bonos gubernamentales) limita la capacidad de los bancos centrales de mantener reservas significativas en Yuan. Las monedas de reserva requieren mercados de bonos grandes y accesibles para gestión de liquidez.",
          de: "Das begrenzte Angebot an tiefen, liquiden und sicheren Yuan-denominierten Vermögenswerten (insbesondere Staatsanleihen) beschränkt die Fähigkeit der Zentralbanken, bedeutende Yuan-Reserven zu halten. Reservewährungen benötigen große, zugängliche Anleihemärkte für Liquiditätsmanagement.",
          nl: "Het beperkte aanbod van diepe, liquide en veilige Yuan-gedenomineerde activa (met name staatsobligaties) beperkt het vermogen van centrale banken om significante Yuan reserves aan te houden. Reservevaluta's vereisen grote, toegankelijke obligatiemarkten voor liquiditeitsbeheer."
        }
      },
      {
        question: {
          en: "How do Yuan-denominated commodity contracts contribute to internationalization?",
          es: "¿Cómo contribuyen los contratos de commodities denominados en Yuan a la internacionalización?",
          de: "Wie tragen Yuan-denominierte Rohstoffkontrakte zur Internationalisierung bei?",
          nl: "Hoe dragen Yuan-gedenomineerde grondstofcontracten bij aan internationalisatie?"
        },
        options: [
          { en: "They provide alternatives to US Dollar commodity pricing and create Yuan demand from commodity traders", es: "Proporcionan alternativas a los precios de commodities en Dólar estadounidense y crean demanda de Yuan de comerciantes de commodities", de: "Sie bieten Alternativen zur US-Dollar-Rohstoffpreisbildung und schaffen Yuan-Nachfrage von Rohstoffhändlern", nl: "Ze bieden alternatieven voor US Dollar grondstofprijsstelling en creëren Yuan vraag van grondstofhandelaren" },
          { en: "They automatically hedge Yuan exchange rate risks", es: "Cubren automáticamente los riesgos del tipo de cambio del Yuan", de: "Sie hedgen automatisch Yuan-Wechselkursrisiken", nl: "Ze hedgen automatisch Yuan wisselkoersrisico's" },
          { en: "They replace all existing commodity exchanges globally", es: "Reemplazan todos los intercambios de commodities existentes globalmente", de: "Sie ersetzen alle bestehenden Rohstoffbörsen global", nl: "Ze vervangen alle bestaande grondstofbeurzen wereldwijd" },
          { en: "They limit commodity price volatility internationally", es: "Limitan la volatilidad de precios de commodities internacionalmente", de: "Sie begrenzen die Rohstoffpreisvolatilität international", nl: "Ze beperken grondstofprijsvolatiliteit internationaal" }
        ],
        correct: 0,
        explanation: {
          en: "Yuan-denominated commodity contracts (like crude oil futures on Shanghai International Energy Exchange) provide alternatives to traditional US Dollar pricing, creating structural demand for Yuan from international commodity traders and reducing global dependence on Dollar-based pricing systems.",
          es: "Los contratos de commodities denominados en Yuan (como futuros de petróleo crudo en el Shanghai International Energy Exchange) proporcionan alternativas a los precios tradicionales en Dólar estadounidense, creando demanda estructural de Yuan de comerciantes de commodities internacionales y reduciendo la dependencia global de sistemas de precios basados en Dólar.",
          de: "Yuan-denominierte Rohstoffkontrakte (wie Rohöl-Futures an der Shanghai International Energy Exchange) bieten Alternativen zur traditionellen US-Dollar-Preisbildung und schaffen strukturelle Yuan-Nachfrage von internationalen Rohstoffhändlern, wodurch die globale Abhängigkeit von Dollar-basierten Preissystemen reduziert wird.",
          nl: "Yuan-gedenomineerde grondstofcontracten (zoals ruwe olie futures op Shanghai International Energy Exchange) bieden alternatieven voor traditionele US Dollar prijsstelling, wat structurele Yuan vraag creëert van internationale grondstofhandelaren en wereldwijde afhankelijkheid van Dollar-gebaseerde prijssystemen vermindert."
        }
      },
      {
        question: {
          en: "What is the primary challenge facing digital Yuan (DCEP) international adoption?",
          es: "¿Cuál es el principal desafío que enfrenta la adopción internacional del Yuan digital (DCEP)?",
          de: "Was ist die primäre Herausforderung für die internationale Adoption des digitalen Yuan (DCEP)?",
          nl: "Wat is de primaire uitdaging voor internationale adoptie van de digitale Yuan (DCEP)?"
        },
        options: [
          { en: "Technical compatibility with existing payment systems", es: "Compatibilidad técnica con sistemas de pago existentes", de: "Technische Kompatibilität mit bestehenden Zahlungssystemen", nl: "Technische compatibiliteit met bestaande betalingssystemen" },
          { en: "Concerns about monetary sovereignty and surveillance implications", es: "Preocupaciones sobre soberanía monetaria e implicaciones de vigilancia", de: "Bedenken über monetäre Souveränität und Überwachungsimplikationen", nl: "Zorgen over monetaire soevereiniteit en surveillanceimplicaties" },
          { en: "Insufficient processing capacity for global transactions", es: "Capacidad de procesamiento insuficiente para transacciones globales", de: "Unzureichende Verarbeitungskapazität für globale Transaktionen", nl: "Onvoldoende verwerkingscapaciteit voor wereldwijde transacties" },
          { en: "Lack of Yuan denomination in digital form", es: "Falta de denominación en Yuan en forma digital", de: "Mangel an Yuan-Denomination in digitaler Form", nl: "Gebrek aan Yuan denominatie in digitale vorm" }
        ],
        correct: 1,
        explanation: {
          en: "The primary challenge for international DCEP adoption is concerns about monetary sovereignty and potential surveillance capabilities, as foreign governments and users worry about China's ability to monitor and control cross-border digital Yuan transactions.",
          es: "El principal desafío para la adopción internacional del DCEP son las preocupaciones sobre soberanía monetaria y capacidades potenciales de vigilancia, ya que gobiernos extranjeros y usuarios se preocupan por la capacidad de China de monitorear y controlar transacciones transfronterizas de Yuan digital.",
          de: "Die primäre Herausforderung für die internationale DCEP-Adoption sind Bedenken über monetäre Souveränität und potenzielle Überwachungskapazitäten, da ausländische Regierungen und Nutzer sich über Chinas Fähigkeit zur Überwachung und Kontrolle grenzüberschreitender digitaler Yuan-Transaktionen sorgen.",
          nl: "De primaire uitdaging voor internationale DCEP-adoptie zijn zorgen over monetaire soevereiniteit en potentiële surveillancecapaciteiten, omdat buitenlandse overheden en gebruikers zich zorgen maken over China's vermogen om grensoverschrijdende digitale Yuan transacties te monitoren en controleren."
        }
      },
      {
        question: {
          en: "How does the Shanghai-London Stock Connect program facilitate Yuan internationalization?",
          es: "¿Cómo facilita el programa Shanghai-London Stock Connect la internacionalización del Yuan?",
          de: "Wie erleichtert das Shanghai-London Stock Connect Programm die Yuan-Internationalisierung?",
          nl: "Hoe faciliteert het Shanghai-London Stock Connect programma Yuan internationalisatie?"
        },
        options: [
          { en: "It allows direct currency conversion between Yuan and Sterling", es: "Permite conversión directa de moneda entre Yuan y Libra Esterlina", de: "Es erlaubt direkte Währungskonversion zwischen Yuan und Pfund Sterling", nl: "Het staat directe valutaconversie tussen Yuan en Pond Sterling toe" },
          { en: "It enables cross-border trading of equities while maintaining currency segregation", es: "Permite comercio transfronterizo de acciones mientras mantiene segregación de monedas", de: "Es ermöglicht grenzüberschreitenden Aktienhandel bei Aufrechterhaltung der Währungstrennung", nl: "Het maakt grensoverschrijdende handel in aandelen mogelijk terwijl valutascheiding behouden blijft" },
          { en: "It creates automatic Yuan settlements for all London trades", es: "Crea liquidaciones automáticas en Yuan para todos los comercios de Londres", de: "Es schafft automatische Yuan-Abwicklungen für alle London-Handel", nl: "Het creëert automatische Yuan afwikkelingen voor alle Londense handel" },
          { en: "It eliminates exchange rate risks for international investors", es: "Elimina riesgos de tipo de cambio para inversores internacionales", de: "Es eliminiert Wechselkursrisiken für internationale Investoren", nl: "Het elimineert wisselkoersrisico's voor internationale beleggers" }
        ],
        correct: 1,
        explanation: {
          en: "The Shanghai-London Stock Connect allows investors to trade eligible shares in each other's markets through local brokers and settlement systems while maintaining currency segregation, facilitating cross-border capital flows without forcing immediate currency conversion.",
          es: "El Shanghai-London Stock Connect permite a inversores comerciar acciones elegibles en los mercados del otro a través de corredores locales y sistemas de liquidación mientras mantiene segregación de monedas, facilitando flujos de capital transfronterizos sin forzar conversión inmediata de moneda.",
          de: "Das Shanghai-London Stock Connect ermöglicht es Investoren, berechtigte Aktien in den jeweiligen Märkten über lokale Broker und Abwicklungssysteme zu handeln, während die Währungstrennung aufrechterhalten wird, wodurch grenzüberschreitende Kapitalflüsse ohne erzwungene sofortige Währungskonversion ermöglicht werden.",
          nl: "Het Shanghai-London Stock Connect stelt beleggers in staat om in elkaars markten gekwalificeerde aandelen te verhandelen via lokale makelaars en afwikkelingssystemen terwijl valutascheiding behouden blijft, wat grensoverschrijdende kapitaalstromen faciliteert zonder gedwongen directe valutaconversie."
        }
      },
      {
        question: {
          en: "What role do central bank digital currencies (CBDCs) play in Yuan's competitive position globally?",
          es: "¿Qué papel juegan las monedas digitales de bancos centrales (CBDC) en la posición competitiva global del Yuan?",
          de: "Welche Rolle spielen digitale Zentralbankwährungen (CBDCs) für die globale Wettbewerbsposition des Yuan?",
          nl: "Welke rol spelen centrale bank digitale valuta's (CBDC's) in de wereldwijde concurrentiepositie van de Yuan?"
        },
        options: [
          { en: "CBDCs automatically make all currencies equal in international markets", es: "Las CBDC automáticamente hacen que todas las monedas sean iguales en mercados internacionales", de: "CBDCs machen automatisch alle Währungen in internationalen Märkten gleich", nl: "CBDC's maken automatisch alle valuta's gelijk op internationale markten" },
          { en: "China's early DCEP development provides first-mover advantages in cross-border digital payments", es: "El desarrollo temprano del DCEP de China proporciona ventajas de primer movimiento en pagos digitales transfronterizos", de: "Chinas frühe DCEP-Entwicklung bietet First-Mover-Vorteile bei grenzüberschreitenden digitalen Zahlungen", nl: "China's vroege DCEP-ontwikkeling biedt first-mover voordelen in grensoverschrijdende digitale betalingen" },
          { en: "CBDCs eliminate the need for foreign exchange markets entirely", es: "Las CBDC eliminan completamente la necesidad de mercados de divisas", de: "CBDCs eliminieren vollständig die Notwendigkeit von Devisenmärkten", nl: "CBDC's elimineren volledig de behoefte aan valutamarkten" },
          { en: "Digital currencies prevent all forms of monetary policy transmission", es: "Las monedas digitales previenen todas las formas de transmisión de política monetaria", de: "Digitale Währungen verhindern alle Formen der geldpolitischen Übertragung", nl: "Digitale valuta's voorkomen alle vormen van monetaire beleidstransmissie" }
        ],
        correct: 1,
        explanation: {
          en: "China's advanced development of the digital Yuan (DCEP) provides potential first-mover advantages in cross-border digital payments, potentially allowing Yuan-based transactions to bypass traditional correspondent banking systems and compete more effectively with established reserve currencies.",
          es: "El desarrollo avanzado de China del Yuan digital (DCEP) proporciona ventajas potenciales de primer movimiento en pagos digitales transfronterizos, potencialmente permitiendo que transacciones basadas en Yuan eviten sistemas bancarios corresponsales tradicionales y compitan más efectivamente con monedas de reserva establecidas.",
          de: "Chinas fortgeschrittene Entwicklung des digitalen Yuan (DCEP) bietet potenzielle First-Mover-Vorteile bei grenzüberschreitenden digitalen Zahlungen und ermöglicht es Yuan-basierten Transaktionen möglicherweise, traditionelle Korrespondentbanksysteme zu umgehen und effektiver mit etablierten Reservewährungen zu konkurrieren.",
          nl: "China's geavanceerde ontwikkeling van de digitale Yuan (DCEP) biedt potentiële first-mover voordelen in grensoverschrijdende digitale betalingen, wat Yuan-gebaseerde transacties mogelijk in staat stelt traditionele correspondentbanksystemen te omzeilen en effectiever te concurreren met gevestigde reservevaluta's."
        }
      },
      {
        question: {
          en: "Which institutional development has been most crucial for Yuan bond market growth?",
          es: "¿Qué desarrollo institucional ha sido más crucial para el crecimiento del mercado de bonos en Yuan?",
          de: "Welche institutionelle Entwicklung war am entscheidendsten für das Wachstum des Yuan-Anleihemarktes?",
          nl: "Welke institutionele ontwikkeling is het cruciaalst geweest voor de groei van de Yuan obligatiemarkt?"
        },
        options: [
          { en: "Creation of international Yuan rating agencies", es: "Creación de agencias internacionales de calificación en Yuan", de: "Schaffung internationaler Yuan-Ratingagenturen", nl: "Creatie van internationale Yuan ratingbureaus" },
          { en: "Introduction of Bond Connect allowing foreign access to China's interbank bond market", es: "Introducción de Bond Connect permitiendo acceso extranjero al mercado interbancario de bonos de China", de: "Einführung von Bond Connect, das ausländischen Zugang zu Chinas Interbanken-Anleihenmarkt ermöglicht", nl: "Introductie van Bond Connect dat buitenlandse toegang tot China's interbancaire obligatiemarkt mogelijk maakt" },
          { en: "Establishment of Yuan-only trading platforms", es: "Establecimiento de plataformas de comercio exclusivas en Yuan", de: "Etablierung von Yuan-exklusiven Handelsplattformen", nl: "Vestiging van Yuan-exclusieve handelsplatforms" },
          { en: "Mandatory Yuan denomination for all Chinese corporate bonds", es: "Denominación obligatoria en Yuan para todos los bonos corporativos chinos", de: "Obligatorische Yuan-Denomination für alle chinesischen Unternehmensanleihen", nl: "Verplichte Yuan denominatie voor alle Chinese bedrijfsobligaties" }
        ],
        correct: 1,
        explanation: {
          en: "Bond Connect, launched in 2017, has been crucial by providing foreign institutional investors streamlined access to China's massive interbank bond market while maintaining existing custody and settlement arrangements, significantly boosting foreign participation in Yuan bonds.",
          es: "Bond Connect, lanzado en 2017, ha sido crucial al proporcionar a inversores institucionales extranjeros acceso simplificado al masivo mercado interbancario de bonos de China mientras mantiene arreglos existentes de custodia y liquidación, aumentando significativamente la participación extranjera en bonos en Yuan.",
          de: "Bond Connect, 2017 gestartet, war entscheidend, indem es ausländischen institutionellen Investoren rationalisierten Zugang zu Chinas massivem Interbanken-Anleihenmarkt bot, während bestehende Verwahrungs- und Abwicklungsvereinbarungen beibehalten wurden, wodurch die ausländische Beteiligung an Yuan-Anleihen erheblich gesteigert wurde.",
          nl: "Bond Connect, gelanceerd in 2017, is cruciaal geweest door buitenlandse institutionele beleggers gestroomlijnde toegang te bieden tot China's massieve interbancaire obligatiemarkt terwijl bestaande bewaar- en afwikkelingsarrangementen behouden bleven, wat buitenlandse participatie in Yuan obligaties significant verhoogde."
        }
      },
      {
        question: {
          en: "How does the Asian Infrastructure Investment Bank (AIIB) support Yuan internationalization?",
          es: "¿Cómo apoya el Banco Asiático de Inversión en Infraestructura (AIIB) la internacionalización del Yuan?",
          de: "Wie unterstützt die Asiatische Infrastruktur-Investmentbank (AIIB) die Yuan-Internationalisierung?",
          nl: "Hoe ondersteunt de Asian Infrastructure Investment Bank (AIIB) Yuan internationalisatie?"
        },
        options: [
          { en: "It exclusively uses Yuan for all lending operations", es: "Usa exclusivamente Yuan para todas las operaciones de préstamo", de: "Es verwendet ausschließlich Yuan für alle Kreditoperationen", nl: "Het gebruikt exclusief Yuan voor alle leenoperaties" },
          { en: "It provides Yuan-denominated financing options and encourages Yuan usage in project settlements", es: "Proporciona opciones de financiamiento denominadas in Yuan y fomenta el uso de Yuan en liquidaciones de proyectos", de: "Es bietet Yuan-denominierte Finanzierungsoptionen und fördert Yuan-Nutzung in Projektabwicklungen", nl: "Het biedt Yuan-gedenomineerde financieringsopties en moedigt Yuan gebruik aan in projectafwikkelingen" },
          { en: "It converts all member contributions to Yuan automatically", es: "Convierte automáticamente todas las contribuciones de miembros a Yuan", de: "Es konvertiert alle Mitgliedsbeiträge automatisch in Yuan", nl: "Het converteert alle ledencontributies automatisch naar Yuan" },
          { en: "It requires all infrastructure projects to price materials in Yuan", es: "Requiere que todos los proyectos de infraestructura precien materiales en Yuan", de: "Es verlangt, dass alle Infrastrukturprojekte Materialien in Yuan bepreisen", nl: "Het vereist dat alle infrastructuurprojecten materialen in Yuan prijzen" }
        ],
        correct: 1,
        explanation: {
          en: "The AIIB supports Yuan internationalization by offering Yuan-denominated financing options alongside other major currencies, encouraging borrowers to consider Yuan for project financing and settlements, thus creating practical demand for Yuan in infrastructure development across Asia.",
          es: "El AIIB apoya la internacionalización del Yuan ofreciendo opciones de financiamiento denominadas en Yuan junto con otras monedas principales, alentando a prestatarios a considerar el Yuan para financiamiento y liquidaciones de proyectos, creando así demanda práctica de Yuan en desarrollo de infraestructura a través de Asia.",
          de: "Die AIIB unterstützt die Yuan-Internationalisierung, indem sie Yuan-denominierte Finanzierungsoptionen neben anderen Hauptwährungen anbietet und Kreditnehmer ermutigt, Yuan für Projektfinanzierung und -abwicklungen zu berücksichtigen, wodurch praktische Yuan-Nachfrage in der Infrastrukturentwicklung in ganz Asien geschaffen wird.",
          nl: "De AIIB ondersteunt Yuan internationalisatie door Yuan-gedenomineerde financieringsopties aan te bieden naast andere belangrijke valuta's, wat kredietnemers aanmoedigt Yuan te overwegen voor projectfinanciering en afwikkelingen, waardoor praktische Yuan vraag wordt gecreëerd in infrastructuurontwikkeling door heel Azië."
        }
      },
      {
        question: {
          en: "What is the significance of the China International Payment System (CIPS) Phase II implementation?",
          es: "¿Cuál es la importancia de la implementación de la Fase II del Sistema Internacional de Pagos de China (CIPS)?",
          de: "Was ist die Bedeutung der Implementierung von Phase II des China International Payment System (CIPS)?",
          nl: "Wat is de betekenis van de China International Payment System (CIPS) Fase II implementatie?"
        },
        options: [
          { en: "It extends operating hours to provide 24/7 global Yuan clearing services", es: "Extiende las horas operativas para proporcionar servicios de compensación global de Yuan 24/7", de: "Es erweitert die Betriebszeiten für 24/7-globale Yuan-Clearing-Services", nl: "Het breidt operationele uren uit om 24/7 wereldwijde Yuan clearing diensten te bieden" },
          { en: "It replaces the SWIFT system entirely for all international transactions", es: "Reemplaza completamente el sistema SWIFT para todas las transacciones internacionales", de: "Es ersetzt das SWIFT-System vollständig für alle internationalen Transaktionen", nl: "Het vervangt het SWIFT systeem volledig voor alle internationale transacties" },
          { en: "It limits Yuan transactions to Asia-Pacific region only", es: "Limita las transacciones en Yuan solo a la región Asia-Pacífico", de: "Es begrenzt Yuan-Transaktionen nur auf die Asien-Pazifik-Region", nl: "Het beperkt Yuan transacties tot alleen de Azië-Pacific regio" },
          { en: "It requires all participants to maintain Yuan reserves in Beijing", es: "Requiere que todos los participantes mantengan reservas en Yuan en Beijing", de: "Es verlangt, dass alle Teilnehmer Yuan-Reserven in Peking unterhalten", nl: "Het vereist dat alle deelnemers Yuan reserves in Beijing aanhouden" }
        ],
        correct: 0,
        explanation: {
          en: "CIPS Phase II significantly enhanced global Yuan clearing capabilities by extending operating hours to overlap with major global financial centers, enabling 24/7 Yuan clearing services and improving the system's competitiveness with established international payment infrastructures.",
          es: "CIPS Fase II mejoró significativamente las capacidades globales de compensación de Yuan extendiendo las horas operativas para superponerse con los principales centros financieros globales, habilitando servicios de compensación de Yuan 24/7 y mejorando la competitividad del sistema con infraestructuras de pago internacionales establecidas.",
          de: "CIPS Phase II verbesserte die globalen Yuan-Clearing-Kapazitäten erheblich, indem sie die Betriebszeiten zur Überlappung mit wichtigen globalen Finanzzentren erweiterte, 24/7-Yuan-Clearing-Services ermöglichte und die Wettbewerbsfähigkeit des Systems gegenüber etablierten internationalen Zahlungsinfrastrukturen verbesserte.",
          nl: "CIPS Fase II verbeterde de wereldwijde Yuan clearing capaciteiten aanzienlijk door operationele uren uit te breiden om te overlappen met belangrijke wereldwijde financiële centra, waardoor 24/7 Yuan clearing diensten mogelijk werden en de concurrentiepositie van het systeem tegenover gevestigde internationale betalingsinfrastructuren verbeterde."
        }
      },
      {
        question: {
          en: "Which mechanism allows the PBOC to influence offshore Yuan (CNH) liquidity most effectively?",
          es: "¿Qué mecanismo permite al PBOC influir en la liquidez del Yuan offshore (CNH) más efectivamente?",
          de: "Welcher Mechanismus ermöglicht es der PBOC, die Offshore-Yuan (CNH) Liquidität am effektivsten zu beeinflussen?",
          nl: "Welk mechanisme stelt de PBOC in staat om offshore Yuan (CNH) liquiditeit het meest effectief te beïnvloeden?"
        },
        options: [
          { en: "Direct intervention in Hong Kong forex markets", es: "Intervención directa en mercados forex de Hong Kong", de: "Direkte Intervention in Hongkonger Devisenmärkten", nl: "Directe interventie in Hong Kong forex markten" },
          { en: "Controlling Yuan liquidity supply to Hong Kong clearing banks", es: "Controlando el suministro de liquidez en Yuan a bancos de compensación de Hong Kong", de: "Kontrolle der Yuan-Liquiditätsversorgung an Hongkonger Clearingbanken", nl: "Controle van Yuan liquiditeitsvoorziening aan Hong Kong clearing banken" },
          { en: "Setting CNH interest rates independently from CNY rates", es: "Estableciendo tasas de interés CNH independientemente de las tasas CNY", de: "Unabhängige Festsetzung von CNH-Zinssätzen von CNY-Sätzen", nl: "Onafhankelijk vaststellen van CNH rentetarieven van CNY tarieven" },
          { en: "Requiring all CNH trades to be approved in advance", es: "Requiriendo que todos los comercios CNH sean aprobados por adelantado", de: "Verlangen der Vorabgenehmigung aller CNH-Handel", nl: "Vereisen dat alle CNH handel vooraf goedgekeurd wordt" }
        ],
        correct: 1,
        explanation: {
          en: "The PBOC can most effectively influence CNH liquidity by controlling the supply of Yuan liquidity to Hong Kong clearing banks through various channels including swap agreements, direct liquidity provision, and settlement arrangements, which directly impacts CNH market conditions.",
          es: "El PBOC puede influir más efectivamente en la liquidez CNH controlando el suministro de liquidez en Yuan a bancos de compensación de Hong Kong a través de varios canales incluyendo acuerdos de swap, provisión directa de liquidez y arreglos de liquidación, lo que impacta directamente las condiciones del mercado CNH.",
          de: "Die PBOC kann CNH-Liquidität am effektivsten beeinflussen, indem sie die Yuan-Liquiditätsversorgung an Hongkonger Clearingbanken durch verschiedene Kanäle einschließlich Swap-Vereinbarungen, direkter Liquiditätsbereitstellung und Abwicklungsvereinbarungen kontrolliert, was CNH-Marktbedingungen direkt beeinflusst.",
          nl: "De PBOC kan CNH liquiditeit het meest effectief beïnvloeden door de Yuan liquiditeitsvoorziening aan Hong Kong clearing banken te controleren via verschillende kanalen inclusief swapovereenkomsten, directe liquiditeitsvoorziening en afwikkelingsarrangementen, wat direct impact heeft op CNH marktomstandigheden."
        }
      },
      {
        question: {
          en: "How do Regional Comprehensive Economic Partnership (RCEP) provisions impact Yuan usage?",
          es: "¿Cómo impactan las disposiciones del Acuerdo Económico Integral Regional (RCEP) en el uso del Yuan?",
          de: "Wie wirken sich die Bestimmungen der Regional Comprehensive Economic Partnership (RCEP) auf die Yuan-Nutzung aus?",
          nl: "Hoe beïnvloeden Regional Comprehensive Economic Partnership (RCEP) bepalingen het Yuan gebruik?"
        },
        options: [
          { en: "RCEP mandates Yuan usage for all trade between member countries", es: "RCEP exige el uso del Yuan para todo el comercio entre países miembros", de: "RCEP schreibt Yuan-Nutzung für den gesamten Handel zwischen Mitgliedsländern vor", nl: "RCEP verplicht Yuan gebruik voor alle handel tussen lidlanden" },
          { en: "RCEP provides framework for reduced trade barriers and enhanced payment system connections", es: "RCEP proporciona marco para barreras comerciales reducidas y conexiones mejoradas de sistemas de pago", de: "RCEP bietet Rahmen für reduzierte Handelsbarrieren und verbesserte Zahlungssystemverbindungen", nl: "RCEP biedt kader voor verminderde handelsbarrières en verbeterde betalingssysteemverbindingen" },
          { en: "RCEP prohibits use of US Dollars in regional trade", es: "RCEP prohíbe el uso de Dólares estadounidenses en comercio regional", de: "RCEP verbietet die Verwendung von US-Dollars im regionalen Handel", nl: "RCEP verbiedt gebruik van US Dollars in regionale handel" },
          { en: "RCEP creates a new common currency to replace Yuan", es: "RCEP crea una nueva moneda común para reemplazar al Yuan", de: "RCEP schafft eine neue gemeinsame Währung zum Ersatz des Yuan", nl: "RCEP creëert een nieuwe gemeenschappelijke valuta om de Yuan te vervangen" }
        ],
        correct: 1,
        explanation: {
          en: "RCEP provides a framework for reduced trade barriers, improved regulatory cooperation, and enhanced payment system connections among member countries, creating conditions more conducive to Yuan usage in regional trade without mandating specific currency usage.",
          es: "RCEP proporciona un marco para barreras comerciales reducidas, cooperación regulatoria mejorada y conexiones mejoradas de sistemas de pago entre países miembros, creando condiciones más propicias para el uso del Yuan en comercio regional sin exigir uso específico de moneda.",
          de: "RCEP bietet einen Rahmen für reduzierte Handelsbarrieren, verbesserte regulatorische Zusammenarbeit und verbesserte Zahlungssystemverbindungen zwischen Mitgliedsländern, wodurch Bedingungen geschaffen werden, die der Yuan-Nutzung im regionalen Handel förderlicher sind, ohne spezifische Währungsnutzung zu verlangen.",
          nl: "RCEP biedt een kader voor verminderde handelsbarrières, verbeterde regulatoire samenwerking en verbeterde betalingssysteemverbindingen tussen lidlanden, wat omstandigheden creëert die gunstiger zijn voor Yuan gebruik in regionale handel zonder specifiek valutagebruik te verplichten."
        }
      },
      {
        question: {
          en: "What is the primary function of the Yuan's 'counter-cyclical adjustment factor' in exchange rate determination?",
          es: "¿Cuál es la función principal del 'factor de ajuste contra-cíclico' del Yuan en la determinación del tipo de cambio?",
          de: "Was ist die primäre Funktion des 'kontrazyklischen Anpassungsfaktors' des Yuan bei der Wechselkursbestimmung?",
          nl: "Wat is de primaire functie van de 'contra-cyclische aanpassingsfactor' van de Yuan in wisselkoersbepaling?"
        },
        options: [
          { en: "It automatically adjusts Yuan value based on inflation differentials", es: "Ajusta automáticamente el valor del Yuan basado en diferenciales de inflación", de: "Es passt den Yuan-Wert automatisch basierend auf Inflationsdifferenzialen an", nl: "Het past automatisch Yuan waarde aan gebaseerd op inflatieverschillen" },
          { en: "It helps reduce excessive volatility and one-way speculation pressures on the Yuan", es: "Ayuda a reducir volatilidad excesiva y presiones de especulación unidireccional sobre el Yuan", de: "Es hilft, übermäßige Volatilität und einseitigen Spekulationsdruck auf den Yuan zu reduzieren", nl: "Het helpt overdreven volatiliteit en eenrichtingsspeculatiedruk op de Yuan te verminderen" },
          { en: "It synchronizes Yuan movements with commodity price cycles", es: "Sincroniza movimientos del Yuan con ciclos de precios de commodities", de: "Es synchronisiert Yuan-Bewegungen mit Rohstoffpreiszyklen", nl: "Het synchroniseert Yuan bewegingen met grondstofprijscycli" },
          { en: "It maintains fixed parities with all major trading partner currencies", es: "Mantiene paridades fijas con todas las monedas de socios comerciales principales", de: "Es hält feste Paritäten mit allen wichtigen Handelspartnerwährungen aufrecht", nl: "Het handhaaft vaste pariteiten met alle belangrijke handelspartnervaluta's" }
        ],
        correct: 1,
        explanation: {
          en: "The counter-cyclical adjustment factor is used by the PBOC to dampen excessive volatility and counter one-way speculative pressures on the Yuan by adjusting the daily reference rate setting mechanism, helping maintain more orderly exchange rate movements.",
          es: "El factor de ajuste contra-cíclico es usado por el PBOC para amortiguar volatilidad excesiva y contrarrestar presiones especulativas unidireccionales sobre el Yuan ajustando el mecanismo de establecimiento de tasa de referencia diaria, ayudando a mantener movimientos de tipo de cambio más ordenados.",
          de: "Der kontrazyklische Anpassungsfaktor wird von der PBOC verwendet, um übermäßige Volatilität zu dämpfen und einseitigen Spekulationsdruck auf den Yuan durch Anpassung des täglichen Referenzkurs-Festsetzungsmechanismus entgegenzuwirken, wodurch geordnetere Wechselkursbewegungen aufrechterhalten werden.",
          nl: "De contra-cyclische aanpassingsfactor wordt door de PBOC gebruikt om overdreven volatiliteit te dempen en eenrichtingsspeculatiedruk op de Yuan tegen te gaan door het dagelijkse referentiekoersstellingsmechanisme aan te passen, wat helpt bij het handhaven van meer ordelijke wisselkoersbewegingen."
        }
      },
      {
        question: {
          en: "Which factor most limits Yuan adoption in international reserves despite China's economic size?",
          es: "¿Qué factor limita más la adopción del Yuan en reservas internacionales a pesar del tamaño económico de China?",
          de: "Welcher Faktor begrenzt die Yuan-Adoption in internationalen Reserven trotz Chinas Wirtschaftsgröße am meisten?",
          nl: "Welke factor beperkt Yuan adoptie in internationale reserves het meest ondanks China's economische omvang?"
        },
        options: [
          { en: "Insufficient Yuan interest rates compared to other major currencies", es: "Tasas de interés del Yuan insuficientes comparadas con otras monedas principales", de: "Unzureichende Yuan-Zinssätze im Vergleich zu anderen Hauptwährungen", nl: "Onvoldoende Yuan rentetarieven vergeleken met andere hoofdvaluta's" },
          { en: "Limited depth and liquidity of Yuan government bond markets relative to reserve currency needs", es: "Profundidad y liquidez limitadas de mercados de bonos gubernamentales en Yuan relativo a necesidades de moneda de reserva", de: "Begrenzte Tiefe und Liquidität der Yuan-Staatsanleihenmärkte relativ zu Reservewährungsbedürfnissen", nl: "Beperkte diepte en liquiditeit van Yuan staatsobligatiemkten relatief aan reservevalutabehoeften" },
          { en: "High transaction costs for Yuan-denominated international transfers", es: "Altos costos de transacción para transferencias internacionales denominadas en Yuan", de: "Hohe Transaktionskosten für Yuan-denominierte internationale Überweisungen", nl: "Hoge transactiekosten voor Yuan-gedenomineerde internationale overmakingen" },
          { en: "Regulatory restrictions on Yuan usage in emerging market economies", es: "Restricciones regulatorias sobre el uso del Yuan en economías de mercados emergentes", de: "Regulatorische Beschränkungen der Yuan-Nutzung in Schwellenländern", nl: "Regulatoire beperkingen op Yuan gebruik in opkomende markten" }
        ],
        correct: 1,
        explanation: {
          en: "The main constraint on Yuan reserve adoption is the limited depth and liquidity of Yuan government bond markets compared to what central banks require for reserve management. Reserve currencies need large, deep, and liquid sovereign bond markets for effective liquidity management and risk-free asset holdings.",
          es: "La principal restricción en la adopción de reservas en Yuan es la profundidad y liquidez limitadas de mercados de bonos gubernamentales en Yuan comparado con lo que los bancos centrales requieren para gestión de reservas. Las monedas de reserva necesitan mercados de bonos soberanos grandes, profundos y líquidos para gestión efectiva de liquidez y tenencias de activos libres de riesgo.",
          de: "Die Hauptbeschränkung der Yuan-Reservenadoption ist die begrenzte Tiefe und Liquidität der Yuan-Staatsanleihenmärkte im Vergleich zu dem, was Zentralbanken für das Reservenmanagement benötigen. Reservewährungen benötigen große, tiefe und liquide Staatsanleihenmärkte für effektives Liquiditätsmanagement und risikofreie Vermögensbestände.",
          nl: "De hoofdbeperking voor Yuan reserve adoptie is de beperkte diepte en liquiditeit van Yuan staatsobligatiemarken vergeleken met wat centrale banken nodig hebben voor reservebeheer. Reservevaluta's hebben grote, diepe en liquide staatsobliagtiemarkten nodig voor effectief liquiditeitsbeheer en risicovrije activabezittingen."
        }
      },
      {
        question: {
          en: "What distinguishes the 'two-tier' Yuan system (onshore CNY vs offshore CNH)?",
          es: "¿Qué distingue el sistema de Yuan de 'dos niveles' (CNY onshore vs CNH offshore)?",
          de: "Was unterscheidet das 'zweistufige' Yuan-System (Onshore CNY vs. Offshore CNH)?",
          nl: "Wat onderscheidt het 'twee-tier' Yuan systeem (onshore CNY vs offshore CNH)?"
        },
        options: [
          { en: "CNY has strict capital controls while CNH trades more freely in international markets", es: "CNY tiene controles de capital estrictos mientras CNH comercia más libremente en mercados internacionales", de: "CNY hat strenge Kapitalkontrollen während CNH freier auf internationalen Märkten handelt", nl: "CNY heeft strikte kapitaalcontroles terwijl CNH vrijer handelt op internationale markten" },
          { en: "CNY is digital while CNH is physical currency only", es: "CNY es digital mientras CNH es solo moneda física", de: "CNY ist digital während CNH nur physische Währung ist", nl: "CNY is digitaal terwijl CNH alleen fysieke valuta is" },
          { en: "CNY is used domestically while CNH is exclusively for Belt and Road projects", es: "CNY se usa domésticamente mientras CNH es exclusivamente para proyectos de Franja y Ruta", de: "CNY wird im Inland verwendet während CNH ausschließlich für Gürtel- und Straßen-Projekte ist", nl: "CNY wordt binnenlands gebruikt terwijl CNH exclusief voor Belt and Road projecten is" },
          { en: "CNY and CNH have no meaningful differences", es: "CNY y CNH no tienen diferencias significativas", de: "CNY und CNH haben keine bedeutsamen Unterschiede", nl: "CNY en CNH hebben geen betekenisvolle verschillen" }
        ],
        correct: 0,
        explanation: {
          en: "The two-tier system reflects China's gradual capital account liberalization: CNY (onshore) operates under strict capital controls and PBOC management, while CNH (offshore, primarily in Hong Kong) trades more freely with market-determined rates, though the PBOC can still influence CNH liquidity.",
          es: "El sistema de dos niveles refleja la liberalización gradual de la cuenta de capital de China: CNY (onshore) opera bajo controles de capital estrictos y gestión del PBOC, mientras CNH (offshore, principalmente en Hong Kong) comercia más libremente con tasas determinadas por mercado, aunque el PBOC aún puede influir en la liquidez CNH.",
          de: "Das zweistufige System spiegelt Chinas schrittweise Kapitalkonten-Liberalisierung wider: CNY (Onshore) operiert unter strengen Kapitalkontrollen und PBOC-Management, während CNH (Offshore, hauptsächlich in Hongkong) freier mit marktbestimmten Kursen handelt, obwohl die PBOC CNH-Liquidität noch beeinflussen kann.",
          nl: "Het twee-tier systeem weerspiegelt China's geleidelijke kapitaalrekening liberalisatie: CNY (onshore) opereert onder strikte kapitaalcontroles en PBOC management, terwijl CNH (offshore, voornamelijk in Hong Kong) vrijer handelt met markt-bepaalde tarieven, hoewel de PBOC CNH liquiditeit nog steeds kan beïnvloeden."
        }
      }
    ]
  };

  // Export for use in the quiz application
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level3;
  } else if (typeof window !== 'undefined') {
    window.level3 = level3;
  }
})();
