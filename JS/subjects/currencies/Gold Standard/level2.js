// Quiz Level 2: Currencies - Goudstandaard
(function() {
  const level2 = {
    name: {
      en: "Gold Standard - Elementary",
      es: "Patrón Oro - Elemental",
      de: "Goldstandard - Grundlagen",
      nl: "Goudstandaard - Elementair"
    },
    questions: [
      {
        question: {
          en: "Which country was the first to officially adopt the gold standard?",
          es: "¿Qué país fue el primero en adoptar oficialmente el patrón oro?",
          de: "Welches Land führte als erstes offiziell den Goldstandard ein?",
          nl: "Welk land was het eerste dat officieel de goudstandaard invoerde?"
        },
        options: [
          { en: "United States", es: "Estados Unidos", de: "Vereinigte Staaten", nl: "Verenigde Staten" },
          { en: "France", es: "Francia", de: "Frankreich", nl: "Frankrijk" },
          { en: "Great Britain", es: "Gran Bretaña", de: "Großbritannien", nl: "Groot-Brittannië" },
          { en: "Germany", es: "Alemania", de: "Deutschland", nl: "Duitsland" }
        ],
        correct: 2,
        explanation: {
          en: "Great Britain was the first country to officially adopt the gold standard in 1816, following the Great Recoinage of 1816. This established the pound sterling as backed by gold, setting a precedent for other nations.",
          es: "Gran Bretaña fue el primer país en adoptar oficialmente el patrón oro en 1816, después de la Gran Recuñación de 1816. Esto estableció la libra esterlina como respaldada por oro, sentando un precedente para otras naciones.",
          de: "Großbritannien war das erste Land, das 1816 offiziell den Goldstandard einführte, nach der Großen Neuprägung von 1816. Dies etablierte das Pfund Sterling als goldgedeckt und setzte einen Präzedenzfall für andere Nationen.",
          nl: "Groot-Brittannië was het eerste land dat officieel de goudstandaard invoerde in 1816, na de Grote Hermunting van 1816. Dit stelde het pond sterling vast als gedekt door goud, wat een precedent schiep voor andere naties."
        }
      },
      {
        question: {
          en: "What was the primary advantage of the gold standard for international trade?",
          es: "¿Cuál era la principal ventaja del patrón oro para el comercio internacional?",
          de: "Was war der Hauptvorteil des Goldstandards für den internationalen Handel?",
          nl: "Wat was het primaire voordeel van de goudstandaard voor internationale handel?"
        },
        options: [
          { en: "Fixed exchange rates between countries", es: "Tipos de cambio fijos entre países", de: "Feste Wechselkurse zwischen Ländern", nl: "Vaste wisselkoersen tussen landen" },
          { en: "Unlimited money printing", es: "Impresión ilimitada de dinero", de: "Unbegrenzte Gelddruckerei", nl: "Onbeperkt geld drukken" },
          { en: "Higher interest rates", es: "Tasas de interés más altas", de: "Höhere Zinssätze", nl: "Hogere rentetarieven" },
          { en: "Faster transactions", es: "Transacciones más rápidas", de: "Schnellere Transaktionen", nl: "Snellere transacties" }
        ],
        correct: 0,
        explanation: {
          en: "The gold standard provided fixed exchange rates between countries, as all currencies were tied to gold at specific rates. This eliminated exchange rate uncertainty and facilitated international trade and investment.",
          es: "El patrón oro proporcionó tipos de cambio fijos entre países, ya que todas las monedas estaban vinculadas al oro a tasas específicas. Esto eliminó la incertidumbre del tipo de cambio y facilitó el comercio y la inversión internacional.",
          de: "Der Goldstandard sorgte für feste Wechselkurse zwischen Ländern, da alle Währungen zu bestimmten Kursen an Gold gebunden waren. Dies beseitigte Wechselkursunsicherheit und erleichterte internationalen Handel und Investitionen.",
          nl: "De goudstandaard zorgde voor vaste wisselkoersen tussen landen, omdat alle valuta's aan goud waren gekoppeld tegen specifieke koersen. Dit elimineerde wisselkoersonzekerheid en faciliteerde internationale handel en investeringen."
        }
      },
      {
        question: {
          en: "When did the United States officially adopt the gold standard?",
          es: "¿Cuándo adoptó oficialmente Estados Unidos el patrón oro?",
          de: "Wann führten die Vereinigten Staaten offiziell den Goldstandard ein?",
          nl: "Wanneer hebben de Verenigde Staten officieel de goudstandaard ingevoerd?"
        },
        options: [
          { en: "1873", es: "1873", de: "1873", nl: "1873" },
          { en: "1879", es: "1879", de: "1879", nl: "1879" },
          { en: "1900", es: "1900", de: "1900", nl: "1900" },
          { en: "1913", es: "1913", de: "1913", nl: "1913" }
        ],
        correct: 1,
        explanation: {
          en: "The United States officially adopted the gold standard in 1879 with the Resumption Act, which restored convertibility of paper currency to gold after it had been suspended during the Civil War.",
          es: "Estados Unidos adoptó oficialmente el patrón oro en 1879 con la Ley de Reanudación, que restauró la convertibilidad del papel moneda a oro después de haber sido suspendida durante la Guerra Civil.",
          de: "Die Vereinigten Staaten führten 1879 mit dem Resumption Act offiziell den Goldstandard ein, der die Konvertibilität von Papiergeld in Gold nach der Aussetzung während des Bürgerkriegs wiederherstellte.",
          nl: "De Verenigde Staten hebben officieel de goudstandaard ingevoerd in 1879 met de Resumption Act, die de convertibiliteit van papiergeld naar goud herstelde nadat deze was opgeschort tijdens de Burgeroorlog."
        }
      },
      {
        question: {
          en: "What was Gresham's Law in relation to bimetallic systems?",
          es: "¿Qué era la Ley de Gresham en relación con los sistemas bimetálicos?",
          de: "Was war Greshams Gesetz in Bezug auf bimetallische Systeme?",
          nl: "Wat was de Wet van Gresham in relatie tot bimetallische systemen?"
        },
        options: [
          { en: "Good money drives out bad money", es: "El dinero bueno expulsa al dinero malo", de: "Gutes Geld verdrängt schlechtes Geld", nl: "Goed geld verdrijft slecht geld" },
          { en: "Bad money drives out good money", es: "El dinero malo expulsa al dinero bueno", de: "Schlechtes Geld verdrängt gutes Geld", nl: "Slecht geld verdrijft goed geld" },
          { en: "Silver is always more valuable than gold", es: "La plata siempre es más valiosa que el oro", de: "Silber ist immer wertvoller als Gold", nl: "Zilver is altijd waardevoller dan goud" },
          { en: "Gold prices must always increase", es: "Los precios del oro siempre deben aumentar", de: "Goldpreise müssen immer steigen", nl: "Goudprijzen moeten altijd stijgen" }
        ],
        correct: 1,
        explanation: {
          en: "Gresham's Law states that 'bad money drives out good money.' In bimetallic systems, when the official ratio differed from market values, people would hoard the undervalued metal and spend the overvalued one, causing the undervalued metal to disappear from circulation.",
          es: "La Ley de Gresham establece que 'el dinero malo expulsa al dinero bueno.' En sistemas bimetálicos, cuando la proporción oficial difería de los valores de mercado, las personas atesorarían el metal subvaluado y gastarían el sobrevaluado, causando que el metal subvaluado desapareciera de la circulación.",
          de: "Greshams Gesetz besagt, dass 'schlechtes Geld gutes Geld verdrängt.' In bimetallischen Systemen, wenn das offizielle Verhältnis von den Marktwerten abwich, würden Menschen das unterbewertete Metall horten und das überbewertete ausgeben, wodurch das unterbewertete Metall aus dem Umlauf verschwand.",
          nl: "De Wet van Gresham stelt dat 'slecht geld goed geld verdrijft.' In bimetallische systemen, wanneer de officiële verhouding verschilde van marktwaarden, zouden mensen het ondergewaardeerde metaal oppotten en het overgewaardeerde uitgeven, waardoor het ondergewaardeerde metaal uit circulatie verdween."
        }
      },
      {
        question: {
          en: "What was the 'Crime of 1873' in U.S. monetary history?",
          es: "¿Qué fue el 'Crimen de 1873' en la historia monetaria de Estados Unidos?",
          de: "Was war das 'Verbrechen von 1873' in der US-Geldgeschichte?",
          nl: "Wat was de 'Misdaad van 1873' in de Amerikaanse monetaire geschiedenis?"
        },
        options: [
          { en: "A major bank robbery", es: "Un gran robo bancario", de: "Ein großer Bankraub", nl: "Een grote bankroof" },
          { en: "The demonetization of silver", es: "La desmonetización de la plata", de: "Die Demonetisierung von Silber", nl: "De demonetisering van zilver" },
          { en: "The theft of gold reserves", es: "El robo de reservas de oro", de: "Der Diebstahl von Goldreserven", nl: "De diefstal van goudreserves" },
          { en: "A currency counterfeiting scandal", es: "Un escándalo de falsificación de moneda", de: "Ein Skandal um Geldfälschung", nl: "Een valsgeld schandaal" }
        ],
        correct: 1,
        explanation: {
          en: "The 'Crime of 1873' refers to the Coinage Act of 1873, which demonetized silver by removing it from the list of authorized coins. This effectively ended bimetallism in the U.S. and was controversial because it reduced the money supply and was seen as favoring creditors over debtors.",
          es: "El 'Crimen de 1873' se refiere a la Ley de Acuñación de 1873, que desmonetizó la plata al eliminarla de la lista de monedas autorizadas. Esto efectivamente terminó con el bimetalismo en Estados Unidos y fue controvertido porque redujo la oferta de dinero y se vio como favorecer a los acreedores sobre los deudores.",
          de: "Das 'Verbrechen von 1873' bezieht sich auf das Münzgesetz von 1873, das Silber demonetisierte, indem es aus der Liste der autorisierten Münzen entfernt wurde. Dies beendete effektiv den Bimetallismus in den USA und war kontrovers, weil es die Geldmenge reduzierte und als Begünstigung der Gläubiger gegenüber den Schuldnern angesehen wurde.",
          nl: "De 'Misdaad van 1873' verwijst naar de Coinage Act van 1873, die zilver demonetiseerde door het van de lijst van geautoriseerde munten te verwijderen. Dit beëindigde effectief het bimetallisme in de VS en was controversieel omdat het de geldvoorraad verminderde en werd gezien als het bevoordelen van crediteuren boven debiteuren."
        }
      },
      {
        question: {
          en: "What does 'mint parity' refer to under the gold standard?",
          es: "¿A qué se refiere la 'paridad de la casa de moneda' bajo el patrón oro?",
          de: "Was bedeutet 'Münzparität' unter dem Goldstandard?",
          nl: "Wat betekent 'muntpariteit' onder de goudstandaard?"
        },
        options: [
          { en: "The equality of coin production between countries", es: "La igualdad de producción de monedas entre países", de: "Die Gleichheit der Münzproduktion zwischen Ländern", nl: "De gelijkheid van muntproductie tussen landen" },
          { en: "The theoretical exchange rate based on gold content", es: "El tipo de cambio teórico basado en el contenido de oro", de: "Der theoretische Wechselkurs basierend auf Goldgehalt", nl: "De theoretische wisselkoers gebaseerd op goudgehalte" },
          { en: "The cost of minting new coins", es: "El costo de acuñar nuevas monedas", de: "Die Kosten für die Prägung neuer Münzen", nl: "De kosten van het slaan van nieuwe munten" },
          { en: "The weight standards for gold coins", es: "Los estándares de peso para monedas de oro", de: "Die Gewichtsstandards für Goldmünzen", nl: "De gewichtstandaarden voor gouden munten" }
        ],
        correct: 1,
        explanation: {
          en: "Mint parity refers to the theoretical exchange rate between two currencies based on their respective gold content. It represents the 'par value' at which currencies should trade if based purely on their gold backing, before considering transaction costs.",
          es: "La paridad de la casa de moneda se refiere al tipo de cambio teórico entre dos monedas basado en su respectivo contenido de oro. Representa el 'valor par' al cual las monedas deberían comerciar si se basan puramente en su respaldo de oro, antes de considerar los costos de transacción.",
          de: "Münzparität bezieht sich auf den theoretischen Wechselkurs zwischen zwei Währungen basierend auf ihrem jeweiligen Goldgehalt. Es repräsentiert den 'Nennwert', zu dem Währungen handeln sollten, wenn sie rein auf ihrer Golddeckung basieren, vor Berücksichtigung der Transaktionskosten.",
          nl: "Muntpariteit verwijst naar de theoretische wisselkoers tussen twee valuta's gebaseerd op hun respectieve goudgehalte. Het vertegenwoordigt de 'pariwaarde' waartegen valuta's zouden moeten handelen als ze puur gebaseerd zijn op hun gouddekking, voordat transactiekosten worden overwogen."
        }
      },
      {
        question: {
          en: "What were 'gold points' in international trade?",
          es: "¿Qué eran los 'puntos de oro' en el comercio internacional?",
          de: "Was waren 'Goldpunkte' im internationalen Handel?",
          nl: "Wat waren 'goudpunten' in internationale handel?"
        },
        options: [
          { en: "Geographic locations where gold was mined", es: "Ubicaciones geográficas donde se extraía oro", de: "Geografische Standorte, wo Gold abgebaut wurde", nl: "Geografische locaties waar goud werd gewonnen" },
          { en: "Exchange rate limits that triggered gold shipments", es: "Límites de tipo de cambio que activaban envíos de oro", de: "Wechselkursgrenzen, die Goldsendungen auslösten", nl: "Wisselkoerslimieten die goudverzendingen activeerden" },
          { en: "Quality grades for gold purity", es: "Grados de calidad para la pureza del oro", de: "Qualitätsstufen für Goldreinheit", nl: "Kwaliteitsgraden voor goudzuiverheid" },
          { en: "Banking centers that stored gold", es: "Centros bancarios que almacenaban oro", de: "Bankzentren, die Gold lagerten", nl: "Bankcentra die goud opslag" }
        ],
        correct: 1,
        explanation: {
          en: "Gold points were the upper and lower limits of exchange rate fluctuation beyond which it became profitable to ship gold rather than trade currencies. When exchange rates moved beyond these points, gold would flow between countries to restore equilibrium.",
          es: "Los puntos de oro eran los límites superior e inferior de fluctuación del tipo de cambio más allá de los cuales se volvía rentable enviar oro en lugar de comerciar monedas. Cuando los tipos de cambio se movían más allá de estos puntos, el oro fluiría entre países para restaurar el equilibrio.",
          de: "Goldpunkte waren die oberen und unteren Grenzen der Wechselkursschwankungen, jenseits derer es rentabel wurde, Gold zu verschiffen anstatt Währungen zu handeln. Wenn Wechselkurse über diese Punkte hinausgingen, würde Gold zwischen Ländern fließen, um das Gleichgewicht wiederherzustellen.",
          nl: "Goudpunten waren de boven- en ondergrenzen van wisselkoersfluctuatie waarboven het winstgevend werd om goud te verzenden in plaats van valuta's te verhandelen. Wanneer wisselkoersen deze punten overschreden, zou goud tussen landen stromen om evenwicht te herstellen."
        }
      },
      {
        question: {
          en: "Which German economist is associated with the quantity theory of money during the gold standard era?",
          es: "¿Qué economista alemán está asociado con la teoría cuantitativa del dinero durante la era del patrón oro?",
          de: "Welcher deutsche Ökonom ist mit der Quantitätstheorie des Geldes während der Goldstandard-Ära verbunden?",
          nl: "Welke Duitse econoom wordt geassocieerd met de kwantiteitstheorie van geld tijdens het goudstandaard tijdperk?"
        },
        options: [
          { en: "Karl Marx", es: "Karl Marx", de: "Karl Marx", nl: "Karl Marx" },
          { en: "Irving Fisher", es: "Irving Fisher", de: "Irving Fisher", nl: "Irving Fisher" },
          { en: "Georg Knapp", es: "Georg Knapp", de: "Georg Knapp", nl: "Georg Knapp" },
          { en: "Ludwig von Mises", es: "Ludwig von Mises", de: "Ludwig von Mises", nl: "Ludwig von Mises" }
        ],
        correct: 2,
        explanation: {
          en: "Georg Knapp, a German economist, developed the 'State Theory of Money' (Chartalism) which challenged the gold standard's foundation by arguing that money's value comes from state acceptance rather than intrinsic value. However, Irving Fisher (American) is more associated with the quantity theory during this period.",
          es: "Georg Knapp, un economista alemán, desarrolló la 'Teoría Estatal del Dinero' (Cartalismo) que desafió los fundamentos del patrón oro argumentando que el valor del dinero proviene de la aceptación estatal en lugar del valor intrínseco. Sin embargo, Irving Fisher (estadounidense) está más asociado con la teoría cuantitativa durante este período.",
          de: "Georg Knapp, ein deutscher Ökonom, entwickelte die 'Staatliche Theorie des Geldes' (Chartalismus), die die Grundlagen des Goldstandards herausforderte, indem sie argumentierte, dass der Wert des Geldes aus staatlicher Akzeptanz und nicht aus innerem Wert stammt. Irving Fisher (Amerikaner) ist jedoch mehr mit der Quantitätstheorie in dieser Zeit verbunden.",
          nl: "Georg Knapp, een Duitse econoom, ontwikkelde de 'Staatstheorie van Geld' (Chartalisme) die de basis van de goudstandaard uitdaagde door te beweren dat de waarde van geld voortkomt uit staatsacceptatie in plaats van intrinsieke waarde. Irving Fisher (Amerikaans) wordt echter meer geassocieerd met de kwantiteitstheorie tijdens deze periode."
        }
      },
      {
        question: {
          en: "What was the main characteristic of the 'limping standard' used by some countries?",
          es: "¿Cuál era la característica principal del 'patrón cojo' usado por algunos países?",
          de: "Was war das Hauptmerkmal des 'hinkenden Standards', den einige Länder verwendeten?",
          nl: "Wat was het hoofdkenmerk van de 'hinkende standaard' gebruikt door sommige landen?"
        },
        options: [
          { en: "Gold backing was reduced to 50%", es: "El respaldo de oro se redujo al 50%", de: "Die Golddeckung wurde auf 50% reduziert", nl: "Gouddekking werd verminderd tot 50%" },
          { en: "Silver coins remained in circulation but weren't freely coined", es: "Las monedas de plata permanecieron en circulación pero no se acuñaban libremente", de: "Silbermünzen blieben im Umlauf, wurden aber nicht frei geprägt", nl: "Zilveren munten bleven in circulatie maar werden niet vrij geslagen" },
          { en: "Gold and silver were used alternately", es: "El oro y la plata se usaban alternativamente", de: "Gold und Silber wurden abwechselnd verwendet", nl: "Goud en zilver werden afwisselend gebruikt" },
          { en: "Only foreign gold was accepted", es: "Solo se aceptaba oro extranjero", de: "Nur ausländisches Gold wurde akzeptiert", nl: "Alleen buitenlands goud werd geaccepteerd" }
        ],
        correct: 1,
        explanation: {
          en: "The 'limping standard' was a transitional monetary system where silver coins remained legal tender and in circulation, but new silver coining was limited or suspended. This allowed countries to gradually transition from bimetallism to the gold standard without completely demonetizing existing silver.",
          es: "El 'patrón cojo' era un sistema monetario de transición donde las monedas de plata permanecían como moneda de curso legal y en circulación, pero la nueva acuñación de plata era limitada o suspendida. Esto permitía a los países hacer una transición gradual del bimetalismo al patrón oro sin desmonetizar completamente la plata existente.",
          de: "Der 'hinkende Standard' war ein Übergangswährungssystem, bei dem Silbermünzen gesetzliches Zahlungsmittel blieben und im Umlauf waren, aber neue Silberprägung war begrenzt oder ausgesetzt. Dies ermöglichte es den Ländern, allmählich vom Bimetallismus zum Goldstandard überzugehen, ohne vorhandenes Silber vollständig zu demonetisieren.",
          nl: "De 'hinkende standaard' was een overgangsmonetair systeem waarbij zilveren munten wettig betaalmiddel bleven en in circulatie, maar nieuwe zilverpraging was beperkt of opgeschort. Dit stelde landen in staat om geleidelijk over te gaan van bimetallisme naar de goudstandaard zonder bestaand zilver volledig te demonetiseren."
        }
      },
      {
        question: {
          en: "What was the 'bank restriction period' in British monetary history?",
          es: "¿Qué fue el 'período de restricción bancaria' en la historia monetaria británica?",
          de: "Was war die 'Bankrestriktionsperiode' in der britischen Geldgeschichte?",
          nl: "Wat was de 'bankrestrictie periode' in de Britse monetaire geschiedenis?"
        },
        options: [
          { en: "1797-1821, when Bank of England notes were not convertible to gold", es: "1797-1821, cuando los billetes del Banco de Inglaterra no eran convertibles a oro", de: "1797-1821, als Banknoten der Bank of England nicht in Gold konvertierbar waren", nl: "1797-1821, toen Bank of England biljetten niet converteerbaar waren naar goud" },
          { en: "1873-1879, when banks couldn't lend money", es: "1873-1879, cuando los bancos no podían prestar dinero", de: "1873-1879, als Banken kein Geld verleihen konnten", nl: "1873-1879, toen banken geen geld konden uitlenen" },
          { en: "1844-1844, when new banks were forbidden", es: "1844-1844, cuando se prohibieron los nuevos bancos", de: "1844-1844, als neue Banken verboten waren", nl: "1844-1844, toen nieuwe banken verboden waren" },
          { en: "1914-1925, during World War I restrictions", es: "1914-1925, durante las restricciones de la Primera Guerra Mundial", de: "1914-1925, während der Beschränkungen des Ersten Weltkriegs", nl: "1914-1925, tijdens Eerste Wereldoorlog restricties" }
        ],
        correct: 0,
        explanation: {
          en: "The Bank Restriction Period (1797-1821) was when the Bank of England suspended convertibility of its notes to gold due to financial pressures from the Napoleonic Wars. This was the first major suspension of the gold standard in Britain and led to significant economic debate about currency and monetary policy.",
          es: "El Período de Restricción Bancaria (1797-1821) fue cuando el Banco de Inglaterra suspendió la convertibilidad de sus billetes a oro debido a presiones financieras de las Guerras Napoleónicas. Esta fue la primera suspensión importante del patrón oro en Gran Bretaña y llevó a un debate económico significativo sobre moneda y política monetaria.",
          de: "Die Bankrestriktionsperiode (1797-1821) war, als die Bank of England die Konvertibilität ihrer Banknoten in Gold aufgrund finanzieller Belastungen durch die Napoleonischen Kriege aussetzte. Dies war die erste große Aussetzung des Goldstandards in Großbritannien und führte zu bedeutenden wirtschaftlichen Debatten über Währung und Geldpolitik.",
          nl: "De Bankrestrictie Periode (1797-1821) was toen de Bank of England de convertibiliteit van haar biljetten naar goud opschortte vanwege financiële druk van de Napoleontische Oorlogen. Dit was de eerste grote opschorting van de goudstandaard in Groot-Brittannië en leidde tot aanzienlijk economisch debat over valuta en monetair beleid."
        }
      },
      {
        question: {
          en: "Which countries formed the Latin Monetary Union in 1865?",
          es: "¿Qué países formaron la Unión Monetaria Latina en 1865?",
          de: "Welche Länder bildeten 1865 die Lateinische Münzunion?",
          nl: "Welke landen vormden de Latijnse Monetaire Unie in 1865?"
        },
        options: [
          { en: "Spain, Portugal, and Italy", es: "España, Portugal e Italia", de: "Spanien, Portugal und Italien", nl: "Spanje, Portugal en Italië" },
          { en: "France, Belgium, Italy, and Switzerland", es: "Francia, Bélgica, Italia y Suiza", de: "Frankreich, Belgien, Italien und die Schweiz", nl: "Frankrijk, België, Italië en Zwitserland" },
          { en: "France, Germany, and Austria", es: "Francia, Alemania y Austria", de: "Frankreich, Deutschland und Österreich", nl: "Frankrijk, Duitsland en Oostenrijk" },
          { en: "All Mediterranean countries", es: "Todos los países mediterráneos", de: "Alle Mittelmeerländer", nl: "Alle mediterrane landen" }
        ],
        correct: 1,
        explanation: {
          en: "The Latin Monetary Union was formed in 1865 by France, Belgium, Italy, and Switzerland. It was an attempt to standardize currency systems based on silver and gold, with common weights and fineness standards. Greece joined later in 1868.",
          es: "La Unión Monetaria Latina fue formada en 1865 por Francia, Bélgica, Italia y Suiza. Fue un intento de estandarizar los sistemas monetarios basados en plata y oro, con pesos comunes y estándares de pureza. Grecia se unió más tarde en 1868.",
          de: "Die Lateinische Münzunion wurde 1865 von Frankreich, Belgien, Italien und der Schweiz gegründet. Es war ein Versuch, Währungssysteme basierend auf Silber und Gold zu standardisieren, mit gemeinsamen Gewichts- und Feinheitsstandards. Griechenland trat später 1868 bei.",
          nl: "De Latijnse Monetaire Unie werd in 1865 gevormd door Frankrijk, België, Italië en Zwitserland. Het was een poging om valutasystemen gebaseerd op zilver en goud te standaardiseren, met gemeenschappelijke gewicht- en zuiverheidsstandaarden. Griekenland sloot zich later aan in 1868."
        }
      },
      {
        question: {
          en: "What was the significance of the California Gold Rush for global monetary systems?",
          es: "¿Cuál fue la importancia de la Fiebre del Oro de California para los sistemas monetarios globales?",
          de: "Was war die Bedeutung des kalifornischen Goldrausches für globale Währungssysteme?",
          nl: "Wat was de betekenis van de Californische Goudkoorts voor wereldwijde monetaire systemen?"
        },
        options: [
          { en: "It made gold so rare that prices increased dramatically", es: "Hizo el oro tan raro que los precios aumentaron dramáticamente", de: "Es machte Gold so selten, dass die Preise dramatisch stiegen", nl: "Het maakte goud zo zeldzaam dat prijzen dramatisch stegen" },
          { en: "It increased global gold supply, causing inflation", es: "Aumentó la oferta global de oro, causando inflación", de: "Es erhöhte das globale Goldangebot und verursachte Inflation", nl: "Het verhoogde de wereldwijde goudvoorraad, wat inflatie veroorzaakte" },
          { en: "It established California as the global financial center", es: "Estableció a California como el centro financiero global", de: "Es etablierte Kalifornien als globales Finanzzentrum", nl: "Het vestigde Californië als het wereldwijde financiële centrum" },
          { en: "It led to the immediate abandonment of silver", es: "Llevó al abandono inmediato de la plata", de: "Es führte zur sofortigen Aufgabe von Silber", nl: "Het leidde tot de onmiddellijke opgeving van zilver" }
        ],
        correct: 1,
        explanation: {
          en: "The California Gold Rush (1849-1855) significantly increased global gold supply, leading to inflation in gold standard countries. This influx of gold increased money supplies and price levels, demonstrating how gold discoveries could affect monetary stability under the gold standard.",
          es: "La Fiebre del Oro de California (1849-1855) aumentó significativamente la oferta global de oro, llevando a inflación en países del patrón oro. Esta afluencia de oro aumentó las ofertas de dinero y los niveles de precios, demostrando cómo los descubrimientos de oro podían afectar la estabilidad monetaria bajo el patrón oro.",
          de: "Der kalifornische Goldrausch (1849-1855) erhöhte das globale Goldangebot erheblich und führte zu Inflation in Goldstandard-Ländern. Dieser Goldzustrom erhöhte Geldmengen und Preisniveaus und demonstrierte, wie Goldentdeckungen die monetäre Stabilität unter dem Goldstandard beeinflussen konnten.",
          nl: "De Californische Goudkoorts (1849-1855) verhoogde de wereldwijde goudvoorraad aanzienlijk, wat leidde tot inflatie in goudstandaard landen. Deze toestroom van goud verhoogde geldvoorraden en prijsniveaus, wat aantoonde hoe goudontdekkingen monetaire stabiliteit onder de goudstandaard konden beïnvloeden."
        }
      },
      {
        question: {
          en: "What was the 'Great Deflation' period under the gold standard?",
          es: "¿Qué fue el período de la 'Gran Deflación' bajo el patrón oro?",
          de: "Was war die 'Große Deflationsperiode' unter dem Goldstandard?",
          nl: "Wat was de 'Grote Deflatie' periode onder de goudstandaard?"
        },
        options: [
          { en: "1873-1896, when prices generally fell due to limited gold supply", es: "1873-1896, cuando los precios generalmente cayeron debido a la oferta limitada de oro", de: "1873-1896, als die Preise aufgrund begrenzten Goldangebots allgemein fielen", nl: "1873-1896, toen prijzen over het algemeen daalden door beperkte goudvoorraad" },
          { en: "1914-1918, during World War I", es: "1914-1918, durante la Primera Guerra Mundial", de: "1914-1918, während des Ersten Weltkriegs", nl: "1914-1918, tijdens de Eerste Wereldoorlog" },
          { en: "1929-1933, during the Great Depression", es: "1929-1933, durante la Gran Depresión", de: "1929-1933, während der Großen Depression", nl: "1929-1933, tijdens de Grote Depressie" },
          { en: "1850-1870, before the classical gold standard", es: "1850-1870, antes del patrón oro clásico", de: "1850-1870, vor dem klassischen Goldstandard", nl: "1850-1870, voor de klassieke goudstandaard" }
        ],
        correct: 0,
        explanation: {
          en: "The Great Deflation (1873-1896) was a period of falling prices in gold standard countries, primarily caused by rapid economic growth outpacing the growth in gold supply. This led to deflationary pressures and contributed to economic difficulties, particularly for debtors and farmers.",
          es: "La Gran Deflación (1873-1896) fue un período de caída de precios en países del patrón oro, causado principalmente por el rápido crecimiento económico que superó el crecimiento en la oferta de oro. Esto llevó a presiones deflacionarias y contribuyó a dificultades económicas, particularmente para deudores y agricultores.",
          de: "Die Große Deflation (1873-1896) war eine Periode fallender Preise in Goldstandard-Ländern, hauptsächlich verursacht durch schnelles Wirtschaftswachstum, das das Wachstum des Goldangebots übertraf. Dies führte zu deflationären Drücken und trug zu wirtschaftlichen Schwierigkeiten bei, besonders für Schuldner und Landwirte.",
          nl: "De Grote Deflatie (1873-1896) was een periode van dalende prijzen in goudstandaard landen, voornamelijk veroorzaakt door snelle economische groei die de groei in goudvoorraad overtrof. Dit leidde tot deflatoire druk en droeg bij aan economische moeilijkheden, vooral voor debiteuren en boeren."
        }
      },
      {
        question: {
          en: "What was the main purpose of central bank discount rates under the gold standard?",
          es: "¿Cuál era el propósito principal de las tasas de descuento de los bancos centrales bajo el patrón oro?",
          de: "Was war der Hauptzweck der Zentralbank-Diskontsätze unter dem Goldstandard?",
          nl: "Wat was het hoofddoel van centrale bank discontovoeten onder de goudstandaard?"
        },
        options: [
          { en: "To control inflation directly", es: "Controlar la inflación directamente", de: "Inflation direkt zu kontrollieren", nl: "Om inflatie direct te controleren" },
          { en: "To attract or repel gold flows", es: "Atraer o repeler flujos de oro", de: "Gold-Ströme anzuziehen oder abzustoßen", nl: "Om goudstromen aan te trekken of af te stoten" },
          { en: "To set currency exchange rates", es: "Fijar tipos de cambio de monedas", de: "Währungswechselkurse festzusetzen", nl: "Om valutawisselkoersen vast te stellen" },
          { en: "To regulate bank profits", es: "Regular las ganancias bancarias", de: "Bankgewinne zu regulieren", nl: "Om bankwinsten te reguleren" }
        ],
        correct: 1,
        explanation: {
          en: "Under the gold standard, central banks used discount rates (interest rates) primarily to attract or repel gold flows. Raising rates would attract foreign capital and gold inflows, while lowering rates would discourage gold inflows or encourage outflows, helping to maintain gold reserves and exchange rate stability.",
          es: "Bajo el patrón oro, los bancos centrales usaban las tasas de descuento (tasas de interés) principalmente para atraer o repeler flujos de oro. Elevar las tasas atraería capital extranjero y entradas de oro, mientras que bajar las tasas desalentaría las entradas de oro o alentaría las salidas, ayudando a mantener las reservas de oro y la estabilidad del tipo de cambio.",
          de: "Unter dem Goldstandard verwendeten Zentralbanken Diskontsätze (Zinssätze) hauptsächlich, um Gold-Ströme anzuziehen oder abzustoßen. Zinssätze zu erhöhen würde ausländisches Kapital und Goldzuflüsse anziehen, während Zinssätze zu senken Goldzuflüsse entmutigen oder Abflüsse fördern würde, was half, Goldreserven und Wechselkursstabilität zu erhalten.",
          nl: "Onder de goudstandaard gebruikten centrale banken discontovoeten (rentetarieven) voornamelijk om goudstromen aan te trekken of af te stoten. Het verhogen van tarieven zou buitenlands kapitaal en goudinstroom aantrekken, terwijl het verlagen van tarieven goudinstroom zou ontmoedigen of uitstroom zou aanmoedigen, wat hielp om goudreserves en wisselkoersstabiliteit te behouden."
        }
      },
      {
        question: {
          en: "What was 'seigniorage' in the context of gold coinage?",
          es: "¿Qué era el 'señoreaje' en el contexto de la acuñación de oro?",
          de: "Was war 'Seigniorage' im Kontext der Goldprägung?",
          nl: "Wat was 'seigniorage' in de context van goudmunting?"
        },
        options: [
          { en: "The profit made by governments from issuing currency", es: "La ganancia obtenida por los gobiernos al emitir moneda", de: "Der Gewinn der Regierungen aus der Währungsausgabe", nl: "De winst gemaakt door regeringen uit het uitgeven van valuta" },
          { en: "The tax on gold mining operations", es: "El impuesto sobre las operaciones de minería de oro", de: "Die Steuer auf Goldbergbau-Operationen", nl: "De belasting op goudmijnoperaties" },
          { en: "The cost of transporting gold internationally", es: "El costo de transportar oro internacionalmente", de: "Die Kosten für den internationalen Goldtransport", nl: "De kosten van internationaal goudtransport" },
          { en: "The fee charged for gold storage", es: "La tarifa cobrada por el almacenamiento de oro", de: "Die Gebühr für Goldlagerung", nl: "De vergoeding voor goudopslag" }
        ],
        correct: 0,
        explanation: {
          en: "Seigniorage refers to the profit that governments make from issuing currency - the difference between the face value of money and the cost of producing it. Under the gold standard, seigniorage was limited because coins had to contain their face value in gold, but governments could still profit from the minting process.",
          es: "El señoreaje se refiere a la ganancia que los gobiernos obtienen al emitir moneda - la diferencia entre el valor nominal del dinero y el costo de producirlo. Bajo el patrón oro, el señoreaje era limitado porque las monedas tenían que contener su valor nominal en oro, pero los gobiernos aún podían obtener ganancias del proceso de acuñación.",
          de: "Seigniorage bezieht sich auf den Gewinn, den Regierungen aus der Währungsausgabe erzielen - die Differenz zwischen dem Nennwert des Geldes und den Produktionskosten. Unter dem Goldstandard war die Seigniorage begrenzt, weil Münzen ihren Nennwert in Gold enthalten mussten, aber Regierungen konnten trotzdem vom Prägeprozess profitieren.",
          nl: "Seigniorage verwijst naar de winst die regeringen maken uit het uitgeven van valuta - het verschil tussen de nominale waarde van geld en de kosten van productie. Onder de goudstandaard was seigniorage beperkt omdat munten hun nominale waarde in goud moesten bevatten, maar regeringen konden nog steeds profiteren van het muntproces."
        }
      },
      {
        question: {
          en: "Which economist wrote 'The Theory of Money and Credit' discussing gold standard mechanisms?",
          es: "¿Qué economista escribió 'La Teoría del Dinero y el Crédito' discutiendo los mecanismos del patrón oro?",
          de: "Welcher Ökonom schrieb 'Die Theorie des Geldes und der Umlaufsmittel' über Goldstandard-Mechanismen?",
          nl: "Welke econoom schreef 'De Theorie van Geld en Krediet' over goudstandaard mechanismen?"
        },
        options: [
          { en: "John Maynard Keynes", es: "John Maynard Keynes", de: "John Maynard Keynes", nl: "John Maynard Keynes" },
          { en: "Ludwig von Mises", es: "Ludwig von Mises", de: "Ludwig von Mises", nl: "Ludwig von Mises" },
          { en: "Milton Friedman", es: "Milton Friedman", de: "Milton Friedman", nl: "Milton Friedman" },
          { en: "Irving Fisher", es: "Irving Fisher", de: "Irving Fisher", nl: "Irving Fisher" }
        ],
        correct: 1,
        explanation: {
          en: "Ludwig von Mises wrote 'The Theory of Money and Credit' (1912), which provided a comprehensive analysis of monetary theory including the gold standard. His work was influential in Austrian school economics and monetary theory, defending sound money principles.",
          es: "Ludwig von Mises escribió 'La Teoría del Dinero y el Crédito' (1912), que proporcionó un análisis comprensivo de la teoría monetaria incluyendo el patrón oro. Su trabajo fue influyente en la escuela económica austriaca y la teoría monetaria, defendiendo principios de dinero sólido.",
          de: "Ludwig von Mises schrieb 'Die Theorie des Geldes und der Umlaufsmittel' (1912), was eine umfassende Analyse der Geldtheorie einschließlich des Goldstandards lieferte. Seine Arbeit war einflussreich in der österreichischen Schule der Nationalökonomie und Geldtheorie und verteidigte solide Geldprinzipien.",
          nl: "Ludwig von Mises schreef 'De Theorie van Geld en Krediet' (1912), wat een uitgebreide analyse van monetaire theorie inclusief de goudstandaard bood. Zijn werk was invloedrijk in de Oostenrijkse school van economie en monetaire theorie, verdedigend van solide geldprincipes."
        }
      },
      {
        question: {
          en: "What was the role of arbitrage in the gold standard system?",
          es: "¿Cuál era el papel del arbitraje en el sistema del patrón oro?",
          de: "Was war die Rolle der Arbitrage im Goldstandard-System?",
          nl: "Wat was de rol van arbitrage in het goudstandaard systeem?"
        },
        options: [
          { en: "To resolve international disputes", es: "Resolver disputas internacionales", de: "Internationale Streitigkeiten zu lösen", nl: "Om internationale geschillen op te lossen" },
          { en: "To profit from price differences and maintain equilibrium", es: "Obtener ganancias de las diferencias de precios y mantener el equilibrio", de: "Von Preisunterschieden zu profitieren und Gleichgewicht zu erhalten", nl: "Om winst te maken van prijsverschillen en evenwicht te behouden" },
          { en: "To regulate gold mining activities", es: "Regular las actividades de minería de oro", de: "Goldbergbau-Aktivitäten zu regulieren", nl: "Om goudmijnactiviteiten te reguleren" },
          { en: "To set official exchange rates", es: "Fijar tipos de cambio oficiales", de: "Offizielle Wechselkurse festzusetzen", nl: "Om officiële wisselkoersen vast te stellen" }
        ],
        correct: 1,
        explanation: {
          en: "Arbitrage played a crucial role in maintaining equilibrium under the gold standard. Arbitrageurs would exploit price differences between markets, buying gold or currencies where they were cheap and selling where they were expensive, which helped keep exchange rates within the gold points and maintained the system's stability.",
          es: "El arbitraje jugó un papel crucial en mantener el equilibrio bajo el patrón oro. Los arbitrajistas explotarían las diferencias de precios entre mercados, comprando oro o monedas donde eran baratos y vendiendo donde eran caros, lo que ayudó a mantener los tipos de cambio dentro de los puntos de oro y mantuvo la estabilidad del sistema.",
          de: "Arbitrage spielte eine entscheidende Rolle bei der Aufrechterhaltung des Gleichgewichts unter dem Goldstandard. Arbitrageure würden Preisunterschiede zwischen Märkten ausnutzen, Gold oder Währungen kaufen, wo sie billig waren, und verkaufen, wo sie teuer waren, was half, Wechselkurse innerhalb der Goldpunkte zu halten und die Stabilität des Systems zu erhalten.",
          nl: "Arbitrage speelde een cruciale rol bij het behouden van evenwicht onder de goudstandaard. Arbitrageurs zouden prijsverschillen tussen markten uitbuiten, goud of valuta's kopen waar ze goedkoop waren en verkopen waar ze duur waren, wat hielp om wisselkoersen binnen de goudpunten te houden en de stabiliteit van het systeem te behouden."
        }
      },
      {
        question: {
          en: "What happened to international trade patterns during the classical gold standard period?",
          es: "¿Qué pasó con los patrones de comercio internacional durante el período del patrón oro clásico?",
          de: "Was geschah mit internationalen Handelsmustern während der klassischen Goldstandard-Periode?",
          nl: "Wat gebeurde er met internationale handelspatronen tijdens de klassieke goudstandaard periode?"
        },
        options: [
          { en: "Trade declined significantly due to currency uncertainty", es: "El comercio disminuyó significativamente debido a la incertidumbre monetaria", de: "Der Handel ging aufgrund von Währungsunsicherheit erheblich zurück", nl: "Handel daalde aanzienlijk door valuta-onzekerheid" },
          { en: "Trade expanded rapidly due to exchange rate stability", es: "El comercio se expandió rápidamente debido a la estabilidad del tipo de cambio", de: "Der Handel expandierte schnell aufgrund von Wechselkursstabilität", nl: "Handel breidde snel uit door wisselkoersstabiliteit" },
          { en: "Only gold-producing countries could participate", es: "Solo los países productores de oro podían participar", de: "Nur goldproduzierende Länder konnten teilnehmen", nl: "Alleen goudproducerende landen konden deelnemen" },
          { en: "Trade was limited to neighboring countries only", es: "El comercio se limitó solo a países vecinos", de: "Der Handel war nur auf Nachbarländer beschränkt", nl: "Handel was beperkt tot alleen buurlanden" }
        ],
        correct: 1,
        explanation: {
          en: "International trade expanded rapidly during the classical gold standard period (1870-1914) due to exchange rate stability and reduced transaction costs. The predictable exchange rates eliminated currency risk for traders and investors, facilitating the first era of economic globalization.",
          es: "El comercio internacional se expandió rápidamente durante el período del patrón oro clásico (1870-1914) debido a la estabilidad del tipo de cambio y la reducción de costos de transacción. Los tipos de cambio predecibles eliminaron el riesgo monetario para comerciantes e inversores, facilitando la primera era de globalización económica.",
          de: "Der internationale Handel expandierte während der klassischen Goldstandard-Periode (1870-1914) schnell aufgrund von Wechselkursstabilität und reduzierten Transaktionskosten. Die vorhersagbaren Wechselkurse eliminierten Währungsrisiken für Händler und Investoren und erleichterten die erste Ära der wirtschaftlichen Globalisierung.",
          nl: "Internationale handel breidde snel uit tijdens de klassieke goudstandaard periode (1870-1914) door wisselkoersstabiliteit en verminderde transactiekosten. De voorspelbare wisselkoersen elimineerden valutarisico voor handelaren en investeerders, wat de eerste era van economische globalisering faciliteerde."
        }
      },
      {
        question: {
          en: "What was the main criticism of the gold standard by early 20th century economists?",
          es: "¿Cuál era la principal crítica al patrón oro por los economistas de principios del siglo XX?",
          de: "Was war die Hauptkritik am Goldstandard durch frühe 20. Jahrhundert Ökonomen?",
          nl: "Wat was de hoofdkritiek op de goudstandaard door vroeg 20e eeuwse economen?"
        },
        options: [
          { en: "It was too complex to understand", es: "Era demasiado complejo de entender", de: "Es war zu komplex zu verstehen", nl: "Het was te complex om te begrijpen" },
          { en: "It limited monetary policy flexibility during economic downturns", es: "Limitó la flexibilidad de la política monetaria durante las recesiones económicas", de: "Es begrenzte die geldpolitische Flexibilität während wirtschaftlicher Abschwünge", nl: "Het beperkte monetaire beleidsflexibiliteit tijdens economische neergang" },
          { en: "It favored only wealthy countries", es: "Favoreció solo a países ricos", de: "Es bevorzugte nur wohlhabende Länder", nl: "Het bevoordeelde alleen rijke landen" },
          { en: "It made gold too expensive", es: "Hizo el oro demasiado caro", de: "Es machte Gold zu teuer", nl: "Het maakte goud te duur" }
        ],
        correct: 1,
        explanation: {
          en: "The main criticism of the gold standard by early 20th century economists was that it limited monetary policy flexibility during economic downturns. Countries couldn't easily expand money supply to stimulate the economy during recessions because they were constrained by their gold reserves, leading to prolonged economic hardships.",
          es: "La principal crítica al patrón oro por los economistas de principios del siglo XX era que limitaba la flexibilidad de la política monetaria durante las recesiones económicas. Los países no podían expandir fácilmente la oferta de dinero para estimular la economía durante las recesiones porque estaban limitados por sus reservas de oro, llevando a dificultades económicas prolongadas.",
          de: "Die Hauptkritik am Goldstandard durch frühe 20. Jahrhundert Ökonomen war, dass er die geldpolitische Flexibilität während wirtschaftlicher Abschwünge begrenzte. Länder konnten die Geldmenge nicht einfach erweitern, um die Wirtschaft während Rezessionen zu stimulieren, weil sie durch ihre Goldreserven eingeschränkt waren, was zu anhaltenden wirtschaftlichen Härten führte.",
          nl: "De hoofdkritiek op de goudstandaard door vroeg 20e eeuwse economen was dat het monetaire beleidsflexibiliteit beperkte tijdens economische neergang. Landen konden de geldvoorraad niet gemakkelijk uitbreiden om de economie te stimuleren tijdens recessies omdat ze beperkt werden door hun goudreserves, wat leidde tot langdurige economische moeilijkheden."
        }
      },
      {
        question: {
          en: "What percentage of gold backing was typically required for currency under the gold standard?",
          es: "¿Qué porcentaje de respaldo de oro se requería típicamente para la moneda bajo el patrón oro?",
          de: "Welcher Prozentsatz an Golddeckung war typischerweise für Währung unter dem Goldstandard erforderlich?",
          nl: "Welk percentage gouddekking was typisch vereist voor valuta onder de goudstandaard?"
        },
        options: [
          { en: "100% - full gold backing for all currency", es: "100% - respaldo completo de oro para toda la moneda", de: "100% - vollständige Golddeckung für alle Währung", nl: "100% - volledige gouddekking voor alle valuta" },
          { en: "25-40% - partial gold reserves", es: "25-40% - reservas parciales de oro", de: "25-40% - teilweise Goldreserven", nl: "25-40% - gedeeltelijke goudreserves" },
          { en: "10% - minimal gold backing", es: "10% - respaldo mínimo de oro", de: "10% - minimale Golddeckung", nl: "10% - minimale gouddekking" },
          { en: "50% - exactly half in gold", es: "50% - exactamente la mitad en oro", de: "50% - genau die Hälfte in Gold", nl: "50% - precies de helft in goud" }
        ],
        correct: 1,
        explanation: {
          en: "Under the gold standard, countries typically maintained gold reserves of 25-40% of their currency in circulation. This partial backing allowed for some flexibility in money supply while maintaining convertibility. Full 100% backing would have been too restrictive for economic growth, while lower percentages would risk confidence in convertibility.",
          es: "Bajo el patrón oro, los países típicamente mantenían reservas de oro del 25-40% de su moneda en circulación. Este respaldo parcial permitía cierta flexibilidad en la oferta de dinero mientras mantenía la convertibilidad. Un respaldo completo del 100% habría sido demasiado restrictivo para el crecimiento económico, mientras que porcentajes más bajos arriesgarían la confianza en la convertibilidad.",
          de: "Unter dem Goldstandard hielten Länder typischerweise Goldreserven von 25-40% ihrer im Umlauf befindlichen Währung. Diese teilweise Deckung ermöglichte etwas Flexibilität in der Geldmenge bei Aufrechterhaltung der Konvertibilität. Eine vollständige 100%ige Deckung wäre zu restriktiv für das Wirtschaftswachstum gewesen, während niedrigere Prozentsätze das Vertrauen in die Konvertibilität gefährdet hätten.",
          nl: "Onder de goudstandaard hielden landen typisch goudreserves aan van 25-40% van hun valuta in circulatie. Deze gedeeltelijke dekking maakte enige flexibiliteit in geldvoorraad mogelijk terwijl convertibiliteit behouden bleef. Volledige 100% dekking zou te restrictief zijn geweest voor economische groei, terwijl lagere percentages het vertrouwen in convertibiliteit zouden riskeren."
        }
      }
    ]
  };

  // Export for use in the quiz application
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level2;
  } else if (typeof window !== 'undefined') {
    window.level2 = level2;
  }
})();