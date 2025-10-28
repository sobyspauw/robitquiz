// Quiz Level 5: Currencies - Goudstandaard
(function() {
  const level5 = {
    name: {
      en: "Gold Standard - Upper-Intermediate",
      es: "Patrón Oro - Intermedio Superior",
      de: "Goldstandard - Obere Mittelstufe",
      nl: "Goudstandaard - Gevorderd"
    },
    questions: [
      {
        question: {
          en: "What was the typical gold content ratio for countries on the gold standard?",
          es: "¿Cuál era la proporción típica de contenido de oro para países en el patrón oro?",
          de: "Wie hoch war der typische Goldgehalt für Länder unter dem Goldstandard?",
          nl: "Wat was de typische goudgehalte verhouding voor landen onder de goudstandaard?"
        },
        options: [
          { en: "25% gold backing of currency", es: "25% de respaldo de oro de la moneda", de: "25% Golddeckung der Währung", nl: "25% goudgedekte valuta" },
          { en: "50% gold backing of currency", es: "50% de respaldo de oro de la moneda", de: "50% Golddeckung der Währung", nl: "50% goudgedekte valuta" },
          { en: "100% gold backing of currency", es: "100% de respaldo de oro de la moneda", de: "100% Golddeckung der Währung", nl: "100% goudgedekte valuta" },
          { en: "No fixed ratio required", es: "No se requería proporción fija", de: "Keine feste Ratio erforderlich", nl: "Geen vaste verhouding vereist" }
        ],
        correct: 2,
        explanation: {
          en: "Under the classical gold standard, currencies were supposed to be 100% backed by gold reserves. This meant that every unit of currency in circulation could theoretically be exchanged for a fixed amount of gold.",
          es: "Bajo el patrón oro clásico, las monedas debían estar 100% respaldadas por reservas de oro. Esto significaba que cada unidad de moneda en circulación podía teóricamente intercambiarse por una cantidad fija de oro.",
          de: "Unter dem klassischen Goldstandard sollten Währungen zu 100% durch Goldreserven gedeckt sein. Das bedeutete, dass jede Währungseinheit im Umlauf theoretisch gegen eine feste Menge Gold getauscht werden konnte.",
          nl: "Onder de klassieke goudstandaard moesten valuta's 100% gedekt zijn door goudreserves. Dit betekende dat elke valuta-eenheid in omloop theoretisch kon worden omgewisseld voor een vaste hoeveelheid goud."
        }
      },
      {
        question: {
          en: "Which mechanism helped maintain balance of payments equilibrium under the gold standard?",
          es: "¿Qué mecanismo ayudó a mantener el equilibrio de la balanza de pagos bajo el patrón oro?",
          de: "Welcher Mechanismus half dabei, das Zahlungsbilanzgleichgewicht unter dem Goldstandard aufrechtzuerhalten?",
          nl: "Welk mechanisme hielp het evenwicht van de betalingsbalans te handhaven onder de goudstandaard?"
        },
        options: [
          { en: "The price-specie flow mechanism", es: "El mecanismo de flujo precio-especie", de: "Der Preis-Spezies-Flussmechanismus", nl: "Het prijs-specie stroomechanisme" },
          { en: "Central bank intervention", es: "Intervención del banco central", de: "Zentralbank-Intervention", nl: "Centrale bank interventie" },
          { en: "Government spending controls", es: "Controles de gasto gubernamental", de: "Regierungsausgabenkontrollen", nl: "Overheidsuitgaven controles" },
          { en: "Import quotas and tariffs", es: "Cuotas de importación y aranceles", de: "Importquoten und Zölle", nl: "Importquota en tarieven" }
        ],
        correct: 0,
        explanation: {
          en: "The price-specie flow mechanism, described by David Hume, was the automatic adjustment process under the gold standard. When gold flowed out due to trade deficits, domestic prices fell, making exports more competitive and imports less attractive, thus restoring balance.",
          es: "El mecanismo de flujo precio-especie, descrito por David Hume, fue el proceso de ajuste automático bajo el patrón oro. Cuando el oro salía debido a déficits comerciales, los precios domésticos caían, haciendo las exportaciones más competitivas y las importaciones menos atractivas, restaurando así el equilibrio.",
          de: "Der Preis-Spezies-Flussmechanismus, beschrieben von David Hume, war der automatische Anpassungsprozess unter dem Goldstandard. Wenn Gold aufgrund von Handelsdefiziten abfloss, fielen die inländischen Preise, wodurch Exporte wettbewerbsfähiger und Importe weniger attraktiv wurden, was das Gleichgewicht wiederherstellte.",
          nl: "Het prijs-specie stroomechanisme, beschreven door David Hume, was het automatische aanpassingsproces onder de goudstandaard. Wanneer goud wegstroomde door handelstekorten, daalden binnenlandse prijzen, waardoor export competitiever werd en import minder aantrekkelijk, waardoor het evenwicht werd hersteld."
        }
      },
      {
        question: {
          en: "What was the significance of the gold-silver ratio during bimetallic periods?",
          es: "¿Cuál fue la significancia de la proporción oro-plata durante los períodos bimetálicos?",
          de: "Welche Bedeutung hatte das Gold-Silber-Verhältnis während der bimetallischen Perioden?",
          nl: "Wat was de betekenis van de goud-zilver verhouding tijdens bimetallische perioden?"
        },
        options: [
          { en: "It was irrelevant to monetary policy", es: "Era irrelevante para la política monetaria", de: "Es war irrelevant für die Geldpolitik", nl: "Het was irrelevant voor monetair beleid" },
          { en: "It determined which metal would be hoarded and which would circulate, according to Gresham's Law", es: "Determinaba qué metal sería atesorado y cuál circularía, según la Ley de Gresham", de: "Es bestimmte, welches Metall gehortet und welches zirkuliert würde, nach Greshams Gesetz", nl: "Het bepaalde welk metaal zou worden opgepot en welk zou circuleren, volgens de Wet van Gresham" },
          { en: "It was always fixed at 15:1", es: "Siempre estaba fijada en 15:1", de: "Es war immer auf 15:1 festgesetzt", nl: "Het was altijd vastgesteld op 15:1" },
          { en: "It only affected coin production", es: "Solo afectaba la producción de monedas", de: "Es betraf nur die Münzproduktion", nl: "Het beïnvloedde alleen muntproductie" }
        ],
        correct: 1,
        explanation: {
          en: "Under bimetallism, when the market ratio of gold to silver differed from the official ratio, Gresham's Law applied: the undervalued metal would be exported or hoarded, while the overvalued metal would remain in circulation, causing instability.",
          es: "Bajo el bimetalismo, cuando la proporción de mercado de oro a plata difería de la proporción oficial, se aplicaba la Ley de Gresham: el metal subvaluado sería exportado o atesorado, mientras que el metal sobrevaluado permanecería en circulación, causando inestabilidad.",
          de: "Unter dem Bimetallismus, wenn das Marktverhältnis von Gold zu Silber vom offiziellen Verhältnis abwich, galt Greshams Gesetz: das unterbewertete Metall würde exportiert oder gehortet, während das überbewertete Metall im Umlauf blieb und Instabilität verursachte.",
          nl: "Onder het bimetallisme, wanneer de marktverhouding van goud tot zilver verschilde van de officiële verhouding, gold de Wet van Gresham: het ondergewaardeerde metaal zou worden geëxporteerd of opgepot, terwijl het overgewaardeerde metaal in omloop zou blijven, wat instabiliteit veroorzaakte."
        }
      },
      {
        question: {
          en: "How did the establishment of the Federal Reserve (1913) relate to the gold standard?",
          es: "¿Cómo se relacionó el establecimiento de la Reserva Federal (1913) con el patrón oro?",
          de: "Wie stand die Gründung der Federal Reserve (1913) im Zusammenhang mit dem Goldstandard?",
          nl: "Hoe verhield de oprichting van de Federal Reserve (1913) zich tot de goudstandaard?"
        },
        options: [
          { en: "The Federal Reserve immediately abandoned the gold standard", es: "La Reserva Federal abandonó inmediatamente el patrón oro", de: "Die Federal Reserve gab sofort den Goldstandard auf", nl: "De Federal Reserve verliet onmiddellijk de goudstandaard" },
          { en: "The Federal Reserve was required to maintain 40% gold backing for its notes", es: "La Reserva Federal debía mantener un respaldo de oro del 40% para sus billetes", de: "Die Federal Reserve musste 40% Golddeckung für ihre Banknoten aufrechterhalten", nl: "De Federal Reserve was verplicht 40% gouddekking voor haar bankbiljetten te handhaven" },
          { en: "The Federal Reserve replaced gold with silver", es: "La Reserva Federal reemplazó el oro con plata", de: "Die Federal Reserve ersetzte Gold durch Silber", nl: "De Federal Reserve verving goud door zilver" },
          { en: "The Federal Reserve had no relationship to gold", es: "La Reserva Federal no tenía relación con el oro", de: "Die Federal Reserve hatte keine Beziehung zu Gold", nl: "De Federal Reserve had geen relatie met goud" }
        ],
        correct: 1,
        explanation: {
          en: "The Federal Reserve Act of 1913 established the Fed while maintaining the gold standard. Federal Reserve Notes were required to be backed by at least 40% gold reserves, ensuring the US remained on the gold standard until 1933.",
          es: "La Ley de la Reserva Federal de 1913 estableció la Fed mientras mantenía el patrón oro. Los billetes de la Reserva Federal debían estar respaldados por al menos 40% de reservas de oro, asegurando que EEUU permaneciera en el patrón oro hasta 1933.",
          de: "Das Federal Reserve Act von 1913 gründete die Fed unter Beibehaltung des Goldstandards. Federal Reserve Notes mussten durch mindestens 40% Goldreserven gedeckt sein, was sicherstellte, dass die USA bis 1933 beim Goldstandard blieben.",
          nl: "De Federal Reserve Act van 1913 richtte de Fed op terwijl de goudstandaard werd gehandhaafd. Federal Reserve Notes moesten gedekt zijn door ten minste 40% goudreserves, wat ervoor zorgde dat de VS op de goudstandaard bleef tot 1933."
        }
      },
      {
        question: {
          en: "What was the 'sterling area' and its relationship to the gold standard?",
          es: "¿Qué fue el 'área de la libra esterlina' y su relación con el patrón oro?",
          de: "Was war der 'Sterling-Bereich' und seine Beziehung zum Goldstandard?",
          nl: "Wat was het 'sterling gebied' en de relatie ervan met de goudstandaard?"
        },
        options: [
          { en: "A mining region in Britain", es: "Una región minera en Gran Bretaña", de: "Ein Bergbaugebiet in Großbritannien", nl: "Een mijnbouwgebied in Groot-Brittannië" },
          { en: "A group of countries that pegged their currencies to the British pound and held sterling reserves instead of gold", es: "Un grupo de países que vincularon sus monedas a la libra británica y mantuvieron reservas de libras esterlinas en lugar de oro", de: "Eine Gruppe von Ländern, die ihre Währungen an das britische Pfund koppelten und Sterling-Reserven anstatt Gold hielten", nl: "Een groep landen die hun valuta's koppelden aan het Britse pond en sterling reserves aanhielden in plaats van goud" },
          { en: "A gold storage facility in London", es: "Una instalación de almacenamiento de oro en Londres", de: "Eine Goldlagereinrichtung in London", nl: "Een goudopslagfaciliteit in Londen" },
          { en: "A trading zone for precious metals", es: "Una zona comercial para metales preciosos", de: "Eine Handelszone für Edelmetalle", nl: "Een handelszone voor edele metalen" }
        ],
        correct: 1,
        explanation: {
          en: "The sterling area was a monetary union of countries (mainly British Commonwealth nations) that pegged their currencies to the pound sterling and held British pounds as reserves rather than gold, effectively extending Britain's monetary influence globally.",
          es: "El área de la libra esterlina fue una unión monetaria de países (principalmente naciones de la Commonwealth británica) que vincularon sus monedas a la libra esterlina y mantuvieron libras británicas como reservas en lugar de oro, extendiendo efectivamente la influencia monetaria de Gran Bretaña globalmente.",
          de: "Der Sterling-Bereich war eine Währungsunion von Ländern (hauptsächlich britische Commonwealth-Nationen), die ihre Währungen an das Pfund Sterling koppelten und britische Pfund als Reserven anstatt Gold hielten, wodurch Großbritanniens monetärer Einfluss global erweitert wurde.",
          nl: "Het sterling gebied was een monetaire unie van landen (voornamelijk Britse Gemenebest naties) die hun valuta's koppelden aan het pond sterling en Britse ponden als reserves aanhielden in plaats van goud, waardoor Groot-Brittannië's monetaire invloed wereldwijd werd uitgebreid."
        }
      },
      {
        question: {
          en: "What was the concept of 'sterilization' in gold standard monetary policy?",
          es: "¿Qué fue el concepto de 'esterilización' en la política monetaria del patrón oro?",
          de: "Was war das Konzept der 'Sterilisation' in der Goldstandard-Geldpolitik?",
          nl: "Wat was het concept van 'sterilisatie' in het goudstandaard monetaire beleid?"
        },
        options: [
          { en: "Cleaning gold coins to prevent disease", es: "Limpiar monedas de oro para prevenir enfermedades", de: "Reinigung von Goldmünzen zur Krankheitsprävention", nl: "Het schoonmaken van gouden munten om ziekte te voorkomen" },
          { en: "Central bank actions to offset the monetary effects of gold flows through open market operations", es: "Acciones del banco central para compensar los efectos monetarios de los flujos de oro a través de operaciones de mercado abierto", de: "Zentralbankmaßnahmen zum Ausgleich der monetären Auswirkungen von Goldströmen durch Offenmarktgeschäfte", nl: "Centrale bank acties om de monetaire effecten van goudstromen te compenseren via open markt operaties" },
          { en: "Removing impurities from gold reserves", es: "Eliminar impurezas de las reservas de oro", de: "Entfernung von Verunreinigungen aus Goldreserven", nl: "Het verwijderen van onzuiverheden uit goudreserves" },
          { en: "Separating gold from silver in bimetallic systems", es: "Separar oro de plata en sistemas bimetálicos", de: "Trennung von Gold und Silber in bimetallischen Systemen", nl: "Het scheiden van goud van zilver in bimetallische systemen" }
        ],
        correct: 1,
        explanation: {
          en: "Sterilization was the practice where central banks offset gold inflows or outflows through opposite domestic monetary operations, preventing the automatic adjustment mechanism of the gold standard from affecting the domestic money supply.",
          es: "La esterilización fue la práctica donde los bancos centrales compensaron las entradas o salidas de oro a través de operaciones monetarias domésticas opuestas, evitando que el mecanismo de ajuste automático del patrón oro afectara la oferta monetaria doméstica.",
          de: "Sterilisation war die Praxis, bei der Zentralbanken Gold-Zuflüsse oder -Abflüsse durch entgegengesetzte inländische Geldoperationen ausglichen und so verhinderten, dass der automatische Anpassungsmechanismus des Goldstandards die inländische Geldmenge beeinflusste.",
          nl: "Sterilisatie was de praktijk waarbij centrale banken goudinstroom of -uitstroom compenseerden door tegengestelde binnenlandse monetaire operaties, waardoor het automatische aanpassingsmechanisme van de goudstandaard werd verhinderd de binnenlandse geldvoorraad te beïnvloeden."
        }
      },
      {
        question: {
          en: "How did the panic of 1907 influence attitudes toward the gold standard in the United States?",
          es: "¿Cómo influyó el pánico de 1907 en las actitudes hacia el patrón oro en Estados Unidos?",
          de: "Wie beeinflusste die Panik von 1907 die Einstellungen zum Goldstandard in den Vereinigten Staaten?",
          nl: "Hoe beïnvloedde de paniek van 1907 de houding ten opzichte van de goudstandaard in de Verenigde Staten?"
        },
        options: [
          { en: "It strengthened support for the gold standard", es: "Fortaleció el apoyo al patrón oro", de: "Es stärkte die Unterstützung für den Goldstandard", nl: "Het versterkte de steun voor de goudstandaard" },
          { en: "It highlighted the need for monetary reform and led to the creation of the Federal Reserve", es: "Destacó la necesidad de reforma monetaria y llevó a la creación de la Reserva Federal", de: "Es verdeutlichte die Notwendigkeit einer Währungsreform und führte zur Gründung der Federal Reserve", nl: "Het benadrukte de behoefte aan monetaire hervorming en leidde tot de oprichting van de Federal Reserve" },
          { en: "It had no impact on monetary policy", es: "No tuvo impacto en la política monetaria", de: "Es hatte keinen Einfluss auf die Geldpolitik", nl: "Het had geen impact op monetair beleid" },
          { en: "It led to immediate abandonment of gold", es: "Llevó al abandono inmediato del oro", de: "Es führte zur sofortigen Aufgabe von Gold", nl: "Het leidde tot onmiddellijke verlating van goud" }
        ],
        correct: 1,
        explanation: {
          en: "The 1907 financial panic demonstrated the rigidity of the gold standard system and the need for a central bank that could provide liquidity during crises. This led to the Aldrich-Vreeland Act and ultimately the Federal Reserve Act of 1913.",
          es: "El pánico financiero de 1907 demostró la rigidez del sistema del patrón oro y la necesidad de un banco central que pudiera proporcionar liquidez durante las crisis. Esto llevó a la Ley Aldrich-Vreeland y finalmente a la Ley de la Reserva Federal de 1913.",
          de: "Die Finanzpanik von 1907 demonstrierte die Starrheit des Goldstandard-Systems und die Notwendigkeit einer Zentralbank, die während Krisen Liquidität bereitstellen konnte. Dies führte zum Aldrich-Vreeland Act und schließlich zum Federal Reserve Act von 1913.",
          nl: "De financiële paniek van 1907 toonde de starheid van het goudstandaard systeem aan en de behoefte aan een centrale bank die liquiditeit kon verstrekken tijdens crises. Dit leidde tot de Aldrich-Vreeland Act en uiteindelijk de Federal Reserve Act van 1913."
        }
      },
      {
        question: {
          en: "What was the relationship between the gold standard and colonial monetary systems?",
          es: "¿Cuál fue la relación entre el patrón oro y los sistemas monetarios coloniales?",
          de: "Welche Beziehung bestand zwischen dem Goldstandard und kolonialen Währungssystemen?",
          nl: "Wat was de relatie tussen de goudstandaard en koloniale monetaire systemen?"
        },
        options: [
          { en: "Colonies operated completely independent monetary systems", es: "Las colonias operaron sistemas monetarios completamente independientes", de: "Kolonien betrieben völlig unabhängige Währungssysteme", nl: "Koloniën opereerden volledig onafhankelijke monetaire systemen" },
          { en: "Most colonies used currency boards that maintained fixed exchange rates with the metropolitan currency", es: "La mayoría de colonias usaron juntas monetarias que mantuvieron tipos de cambio fijos con la moneda metropolitana", de: "Die meisten Kolonien nutzten Currency Boards, die feste Wechselkurse zur Metropolwährung aufrechterhielten", nl: "De meeste koloniën gebruikten currency boards die vaste wisselkoersen met de metropolitaanse valuta handhaafden" },
          { en: "All colonies used only gold coins", es: "Todas las colonias usaron solo monedas de oro", de: "Alle Kolonien verwendeten nur Goldmünzen", nl: "Alle koloniën gebruikten alleen gouden munten" },
          { en: "Colonies were prohibited from using gold", es: "Las colonias tenían prohibido usar oro", de: "Kolonien war die Verwendung von Gold verboten", nl: "Koloniën werd verboden goud te gebruiken" }
        ],
        correct: 1,
        explanation: {
          en: "Colonial currency boards were established to maintain fixed exchange rates with the metropolitan currency (usually on the gold standard). These boards backed local currency 100% with reserves of the metropolitan currency, effectively extending the gold standard to the colonies.",
          es: "Las juntas monetarias coloniales se establecieron para mantener tipos de cambio fijos con la moneda metropolitana (usualmente en el patrón oro). Estas juntas respaldaron la moneda local 100% con reservas de la moneda metropolitana, extendiendo efectivamente el patrón oro a las colonias.",
          de: "Koloniale Currency Boards wurden eingerichtet, um feste Wechselkurse zur Metropolwährung (meist im Goldstandard) aufrechtzuerhalten. Diese Boards deckten die lokale Währung zu 100% mit Reserven der Metropolwährung ab und erweiterten den Goldstandard effektiv auf die Kolonien.",
          nl: "Koloniale currency boards werden opgericht om vaste wisselkoersen met de metropolitaanse valuta (meestal op de goudstandaard) te handhaven. Deze boards dekten lokale valuta 100% met reserves van de metropolitaanse valuta, waardoor de goudstandaard effectief werd uitgebreid naar de koloniën."
        }
      },
      {
        question: {
          en: "What was the significance of the Gold Reserve Act of 1934 in the United States?",
          es: "¿Cuál fue la significancia de la Ley de Reserva de Oro de 1934 en Estados Unidos?",
          de: "Welche Bedeutung hatte der Gold Reserve Act von 1934 in den Vereinigten Staaten?",
          nl: "Wat was de betekenis van de Gold Reserve Act van 1934 in de Verenigde Staten?"
        },
        options: [
          { en: "It restored the full gold standard", es: "Restauró el patrón oro completo", de: "Es stellte den vollen Goldstandard wieder her", nl: "Het herstelde de volledige goudstandaard" },
          { en: "It devalued the dollar from $20.67 to $35 per ounce of gold and nationalized gold holdings", es: "Devaluó el dólar de $20.67 a $35 por onza de oro y nacionalizó las tenencias de oro", de: "Es wertete den Dollar von $20,67 auf $35 pro Unze Gold ab und verstaatlichte Goldbestände", nl: "Het devalueerde de dollar van $20,67 naar $35 per ounce goud en nationaliseerde goudbestanden" },
          { en: "It abolished all connection to gold", es: "Abolió toda conexión con el oro", de: "Es schaffte jede Verbindung zu Gold ab", nl: "Het schafte alle verbinding met goud af" },
          { en: "It returned to the pre-1933 gold price", es: "Regresó al precio del oro anterior a 1933", de: "Es kehrte zum Gold-Preis von vor 1933 zurück", nl: "Het keerde terug naar de goudprijs van voor 1933" }
        ],
        correct: 1,
        explanation: {
          en: "The Gold Reserve Act of 1934 officially devalued the dollar by raising the gold price from $20.67 to $35 per ounce (a 69% devaluation) and transferred all gold from the Federal Reserve to the Treasury, ending private gold ownership while maintaining limited gold convertibility for foreign governments.",
          es: "La Ley de Reserva de Oro de 1934 oficialmente devaluó el dólar elevando el precio del oro de $20.67 a $35 por onza (una devaluación del 69%) y transfirió todo el oro de la Reserva Federal al Tesoro, terminando la propiedad privada de oro mientras mantenía convertibilidad limitada de oro para gobiernos extranjeros.",
          de: "Der Gold Reserve Act von 1934 wertete offiziell den Dollar ab, indem er den Goldpreis von $20,67 auf $35 pro Unze erhöhte (eine 69%ige Abwertung) und übertrug alles Gold von der Federal Reserve zum Treasury, beendete privaten Goldbesitz während er begrenzte Goldkonvertibilität für ausländische Regierungen aufrechterhielt.",
          nl: "De Gold Reserve Act van 1934 devalueerde officieel de dollar door de goudprijs te verhogen van $20,67 naar $35 per ounce (een 69% devaluatie) en droeg al het goud over van de Federal Reserve aan de Treasury, waardoor privé goudbezit werd beëindigd terwijl beperkte goudconvertibiliteit voor buitenlandse regeringen werd gehandhaafd."
        }
      },
      {
        question: {
          en: "How did the 'rules of the game' under the gold standard theoretically work?",
          es: "¿Cómo funcionaron teóricamente las 'reglas del juego' bajo el patrón oro?",
          de: "Wie funktionierten die 'Spielregeln' unter dem Goldstandard theoretisch?",
          nl: "Hoe werkten de 'spelregels' onder de goudstandaard theoretisch?"
        },
        options: [
          { en: "Countries with gold outflows would raise interest rates and reduce money supply, while countries with gold inflows would do the opposite", es: "Países con salidas de oro subirían las tasas de interés y reducirían la oferta monetaria, mientras que países con entradas de oro harían lo opuesto", de: "Länder mit Goldabflüssen würden Zinssätze erhöhen und Geldmenge reduzieren, während Länder mit Goldzuflüssen das Gegenteil tun würden", nl: "Landen met gouduitstroom zouden rentetarieven verhogen en geldvoorraad verminderen, terwijl landen met goudinstroom het tegenovergestelde zouden doen" },
          { en: "All countries would maintain identical interest rates", es: "Todos los países mantendrían tasas de interés idénticas", de: "Alle Länder würden identische Zinssätze aufrechterhalten", nl: "Alle landen zouden identieke rentetarieven handhaven" },
          { en: "Countries would ignore gold flows completely", es: "Los países ignorarían completamente los flujos de oro", de: "Länder würden Goldströme völlig ignorieren", nl: "Landen zouden goudstromen volledig negeren" },
          { en: "Only gold-producing countries could participate", es: "Solo países productores de oro podrían participar", de: "Nur goldproduzierende Länder könnten teilnehmen", nl: "Alleen goudproducerende landen konden deelnemen" }
        ],
        correct: 0,
        explanation: {
          en: "The 'rules of the game' required central banks to reinforce gold flows: countries losing gold should raise interest rates and contract money supply to attract gold back, while countries gaining gold should lower rates and expand money supply, facilitating automatic balance of payments adjustment.",
          es: "Las 'reglas del juego' requerían que los bancos centrales reforzaran los flujos de oro: países perdiendo oro deberían subir las tasas de interés y contraer la oferta monetaria para atraer oro de vuelta, mientras que países ganando oro deberían bajar las tasas y expandir la oferta monetaria, facilitando el ajuste automático de la balanza de pagos.",
          de: "Die 'Spielregeln' verlangten von Zentralbanken, Goldströme zu verstärken: Länder, die Gold verloren, sollten Zinssätze erhöhen und Geldmenge kontrahieren, um Gold zurückzuziehen, während Länder, die Gold gewannen, Zinssätze senken und Geldmenge erweitern sollten, um automatische Zahlungsbilanzanpassung zu erleichtern.",
          nl: "De 'spelregels' vereisten dat centrale banken goudstromen zouden versterken: landen die goud verloren zouden rentetarieven moeten verhogen en geldvoorraad verkleinen om goud terug te trekken, terwijl landen die goud wonnen tarieven zouden verlagen en geldvoorraad uitbreiden, om automatische betalingsbalansaanpassing te faciliteren."
        }
      },
      {
        question: {
          en: "What was the role of arbitrage in maintaining exchange rate stability under the gold standard?",
          es: "¿Cuál fue el papel del arbitraje en mantener la estabilidad del tipo de cambio bajo el patrón oro?",
          de: "Welche Rolle spielte die Arbitrage bei der Aufrechterhaltung der Wechselkursstabilität unter dem Goldstandard?",
          nl: "Wat was de rol van arbitrage bij het handhaven van wisselkoersstabiliteit onder de goudstandaard?"
        },
        options: [
          { en: "Arbitrage had no role in the gold standard", es: "El arbitraje no tuvo papel en el patrón oro", de: "Arbitrage spielte keine Rolle beim Goldstandard", nl: "Arbitrage speelde geen rol in de goudstandaard" },
          { en: "Arbitrageurs would exploit exchange rate deviations by shipping gold when it became profitable, keeping rates within gold points", es: "Los arbitrajistas explotarían desviaciones del tipo de cambio enviando oro cuando se volviera rentable, manteniendo las tasas dentro de los puntos de oro", de: "Arbitrageure würden Wechselkursabweichungen ausnutzen, indem sie Gold versendeten, wenn es profitabel wurde, und die Kurse innerhalb der Goldpunkte hielten", nl: "Arbitrageurs zouden wisselkoersafwijkingen uitbuiten door goud te verschepen wanneer het winstgevend werd, waardoor koersen binnen goudpunten bleven" },
          { en: "Arbitrage only applied to silver transactions", es: "El arbitraje solo se aplicaba a transacciones de plata", de: "Arbitrage galt nur für Silbertransaktionen", nl: "Arbitrage gold alleen voor zilvertransacties" },
          { en: "Arbitrage was prohibited under the gold standard", es: "El arbitraje estaba prohibido bajo el patrón oro", de: "Arbitrage war unter dem Goldstandard verboten", nl: "Arbitrage was verboden onder de goudstandaard" }
        ],
        correct: 1,
        explanation: {
          en: "Gold arbitrage was crucial for exchange rate stability. When exchange rates deviated beyond the gold points (the cost of shipping gold), arbitrageurs would buy gold in the cheaper market and sell it in the more expensive one, automatically correcting exchange rate deviations and maintaining the fixed rate system.",
          es: "El arbitraje de oro fue crucial para la estabilidad del tipo de cambio. Cuando los tipos de cambio se desviaban más allá de los puntos de oro (el costo de enviar oro), los arbitrajistas comprarían oro en el mercado más barato y lo venderían en el más caro, corrigiendo automáticamente las desviaciones del tipo de cambio y manteniendo el sistema de tasa fija.",
          de: "Goldarbitrage war entscheidend für die Wechselkursstabilität. Wenn Wechselkurse über die Goldpunkte hinaus abwichen (die Kosten des Goldversands), würden Arbitrageure Gold im billigeren Markt kaufen und im teureren verkaufen, wodurch Wechselkursabweichungen automatisch korrigiert und das feste Kurssystem aufrechterhalten wurde.",
          nl: "Goudarbitrage was cruciaal voor wisselkoersstabiliteit. Wanneer wisselkoersen afweken voorbij de goudpunten (de kosten van goudverscheping), zouden arbitrageurs goud kopen in de goedkopere markt en verkopen in de duurdere, waardoor wisselkoersafwijkingen automatisch werden gecorrigeerd en het vaste koerssysteem werd gehandhaafd."
        }
      },
      {
        question: {
          en: "How did seasonal patterns affect gold standard operations in agricultural economies?",
          es: "¿Cómo afectaron los patrones estacionales las operaciones del patrón oro en economías agrícolas?",
          de: "Wie beeinflussten saisonale Muster die Goldstandard-Operationen in Agrarwirtschaften?",
          nl: "Hoe beïnvloedden seizoenspatronen de goudstandaard operaties in agrarische economieën?"
        },
        options: [
          { en: "Seasonal patterns had no impact on monetary systems", es: "Los patrones estacionales no tuvieron impacto en los sistemas monetarios", de: "Saisonale Muster hatten keinen Einfluss auf Währungssysteme", nl: "Seizoenspatronen hadden geen impact op monetaire systemen" },
          { en: "Harvest seasons created predictable gold flows as agricultural exports peaked, requiring central bank management", es: "Las temporadas de cosecha crearon flujos de oro predecibles cuando las exportaciones agrícolas alcanzaron su pico, requiriendo gestión del banco central", de: "Erntezeiten schufen vorhersagbare Goldströme, wenn landwirtschaftliche Exporte ihren Höhepunkt erreichten, was Zentralbank-Management erforderte", nl: "Oogstseizoen creëerde voorspelbare goudstromen wanneer agrarische export piekte, wat centrale bank management vereiste" },
          { en: "Agriculture was disconnected from the gold standard", es: "La agricultura estaba desconectada del patrón oro", de: "Die Landwirtschaft war vom Goldstandard getrennt", nl: "Landbouw was losgekoppeld van de goudstandaard" },
          { en: "Only industrial countries used the gold standard", es: "Solo países industriales usaron el patrón oro", de: "Nur Industrieländer nutzten den Goldstandard", nl: "Alleen industriële landen gebruikten de goudstandaard" }
        ],
        correct: 1,
        explanation: {
          en: "In agricultural economies, harvest seasons created predictable seasonal demands for currency and credit, leading to gold outflows when crops were sold internationally. Central banks had to anticipate and manage these seasonal patterns to maintain gold standard stability.",
          es: "En economías agrícolas, las temporadas de cosecha crearon demandas estacionales predecibles de moneda y crédito, llevando a salidas de oro cuando los cultivos se vendían internacionalmente. Los bancos centrales tenían que anticipar y gestionar estos patrones estacionales para mantener la estabilidad del patrón oro.",
          de: "In Agrarwirtschaften schufen Erntezeiten vorhersagbare saisonale Nachfrage nach Währung und Kredit, was zu Goldabflüssen führte, wenn Ernten international verkauft wurden. Zentralbanken mussten diese saisonalen Muster antizipieren und verwalten, um die Goldstandard-Stabilität aufrechtzuerhalten.",
          nl: "In agrarische economieën creëerden oogstseizoen voorspelbare seizoensgebonden vraag naar valuta en krediet, wat leidde tot gouduitstroom wanneer gewassen internationaal werden verkocht. Centrale banken moesten deze seizoenspatronen anticiperen en beheren om goudstandaard stabiliteit te handhaven."
        }
      },
      {
        question: {
          en: "What was the significance of the Genoa Conference (1922) for international monetary cooperation?",
          es: "¿Cuál fue la significancia de la Conferencia de Génova (1922) para la cooperación monetaria internacional?",
          de: "Welche Bedeutung hatte die Konferenz von Genua (1922) für die internationale Währungskooperation?",
          nl: "Wat was de betekenis van de Conferentie van Genua (1922) voor internationale monetaire samenwerking?"
        },
        options: [
          { en: "It established the International Monetary Fund", es: "Estableció el Fondo Monetario Internacional", de: "Es gründete den Internationalen Währungsfonds", nl: "Het vestigde het Internationaal Monetair Fonds" },
          { en: "It promoted the gold exchange standard and central bank cooperation to economize on gold use", es: "Promovió el patrón de intercambio de oro y la cooperación de bancos centrales para economizar en el uso del oro", de: "Es förderte den Gold-Devisen-Standard und die Zusammenarbeit der Zentralbanken zur Einsparung von Gold", nl: "Het promootte de goud-wisselstandaard en centrale bank samenwerking om goudgebruik te economiseren" },
          { en: "It abandoned all international monetary cooperation", es: "Abandonó toda cooperación monetaria internacional", de: "Es gab jede internationale Währungskooperation auf", nl: "Het verliet alle internationale monetaire samenwerking" },
          { en: "It created a new world currency", es: "Creó una nueva moneda mundial", de: "Es schuf eine neue Weltwährung", nl: "Het creëerde een nieuwe wereldvaluta" }
        ],
        correct: 1,
        explanation: {
          en: "The Genoa Conference of 1922 recommended adopting the gold exchange standard and closer central bank cooperation to economize on scarce gold reserves. It encouraged countries to hold foreign exchange (dollars and pounds) alongside gold as reserves, presaging the Bretton Woods system.",
          es: "La Conferencia de Génova de 1922 recomendó adoptar el patrón de intercambio de oro y una cooperación más estrecha de bancos centrales para economizar en las escasas reservas de oro. Alentó a los países a mantener divisas (dólares y libras) junto al oro como reservas, presagiando el sistema de Bretton Woods.",
          de: "Die Konferenz von Genua 1922 empfahl die Übernahme des Gold-Devisen-Standards und engere Zusammenarbeit der Zentralbanken zur Einsparung knapper Goldreserven. Sie ermutigte Länder, Devisen (Dollar und Pfund) neben Gold als Reserven zu halten, was das Bretton-Woods-System vorwegnahm.",
          nl: "De Conferentie van Genua van 1922 beviel de adoptie van de goud-wisselstandaard aan en nauwere centrale bank samenwerking om schaarse goudreserves te economiseren. Het moedigde landen aan om buitenlandse valuta (dollars en ponden) naast goud als reserves aan te houden, wat het Bretton Woods systeem voorafschaduwde."
        }
      },
      {
        question: {
          en: "How did war finance practices during WWI permanently change the gold standard?",
          es: "¿Cómo cambiaron permanentemente las prácticas de financiación de guerra durante la Primera Guerra Mundial al patrón oro?",
          de: "Wie veränderten Kriegsfinanzierungspraktiken während des Ersten Weltkriegs den Goldstandard dauerhaft?",
          nl: "Hoe veranderden oorlogsfinancieringspraktijken tijdens WOI de goudstandaard permanent?"
        },
        options: [
          { en: "War finance had no lasting impact", es: "La financiación de guerra no tuvo impacto duradero", de: "Kriegsfinanzierung hatte keine dauerhafte Auswirkung", nl: "Oorlogsfinanciering had geen blijvende impact" },
          { en: "Countries learned they could suspend convertibility during emergencies and print money, weakening the gold standard's credibility", es: "Los países aprendieron que podían suspender la convertibilidad durante emergencias e imprimir dinero, debilitando la credibilidad del patrón oro", de: "Länder lernten, dass sie die Konvertibilität während Notfällen suspendieren und Geld drucken konnten, was die Glaubwürdigkeit des Goldstandards schwächte", nl: "Landen leerden dat ze convertibiliteit konden opschorten tijdens noodsituaties en geld konden drukken, wat de geloofwaardigheid van de goudstandaard verzwakte" },
          { en: "All countries returned to exactly the same gold standard as before", es: "Todos los países regresaron exactamente al mismo patrón oro de antes", de: "Alle Länder kehrten genau zum gleichen Goldstandard wie zuvor zurück", nl: "Alle landen keerden terug naar exact dezelfde goudstandaard als voorheen" },
          { en: "War made gold more valuable", es: "La guerra hizo que el oro fuera más valioso", de: "Krieg machte Gold wertvoller", nl: "Oorlog maakte goud waardevoller" }
        ],
        correct: 1,
        explanation: {
          en: "WWI demonstrated that countries could successfully suspend gold convertibility to finance massive expenditures through money creation. This precedent permanently changed expectations about the gold standard's inviolability and made future suspensions more politically acceptable.",
          es: "La Primera Guerra Mundial demostró que los países podían suspender exitosamente la convertibilidad del oro para financiar gastos masivos a través de la creación de dinero. Este precedente cambió permanentemente las expectativas sobre la inviolabilidad del patrón oro e hizo las futuras suspensiones más políticamente aceptables.",
          de: "Der Erste Weltkrieg zeigte, dass Länder erfolgreich die Goldkonvertibilität suspendieren konnten, um massive Ausgaben durch Geldschöpfung zu finanzieren. Dieser Präzedenzfall veränderte dauerhaft die Erwartungen über die Unantastbarkeit des Goldstandards und machte zukünftige Suspendierungen politisch akzeptabler.",
          nl: "WOI toonde aan dat landen succesvol goudconvertibiliteit konden opschorten om massale uitgaven te financieren door geldcreatie. Dit precedent veranderde permanent verwachtingen over de onschendbaarheid van de goudstandaard en maakte toekomstige opschortingen politiek acceptabeler."
        }
      },
      {
        question: {
          en: "What was the relationship between the gold standard and income distribution within countries?",
          es: "¿Cuál fue la relación entre el patrón oro y la distribución del ingreso dentro de los países?",
          de: "Welche Beziehung bestand zwischen dem Goldstandard und der Einkommensverteilung innerhalb von Ländern?",
          nl: "Wat was de relatie tussen de goudstandaard en inkomensverdeling binnen landen?"
        },
        options: [
          { en: "The gold standard had no effect on income distribution", es: "El patrón oro no tuvo efecto en la distribución del ingreso", de: "Der Goldstandard hatte keinen Einfluss auf die Einkommensverteilung", nl: "De goudstandaard had geen effect op inkomensverdeling" },
          { en: "The gold standard's deflationary bias tended to favor creditors and hurt debtors, affecting wealth distribution", es: "El sesgo deflacionario del patrón oro tendía a favorecer a los acreedores y perjudicar a los deudores, afectando la distribución de la riqueza", de: "Die deflationäre Neigung des Goldstandards begünstigte Gläubiger und schadete Schuldnern, was die Vermögensverteilung beeinflusste", nl: "De deflatoire neiging van de goudstandaard bevoordeelde crediteuren en benadeelde debiteuren, wat vermogensverdeling beïnvloedde" },
          { en: "The gold standard made everyone equally wealthy", es: "El patrón oro hizo a todos igualmente ricos", de: "Der Goldstandard machte alle gleich wohlhabend", nl: "De goudstandaard maakte iedereen even welvarend" },
          { en: "Only the wealthy could participate in the gold standard", es: "Solo los ricos podían participar en el patrón oro", de: "Nur die Wohlhabenden konnten am Goldstandard teilnehmen", nl: "Alleen de rijken konden deelnemen aan de goudstandaard" }
        ],
        correct: 1,
        explanation: {
          en: "The gold standard's constraint on money supply growth often led to deflationary periods, which systematically favored creditors (who were repaid in more valuable money) over debtors (farmers, workers with loans). This created significant political tensions and distributional conflicts.",
          es: "La restricción del patrón oro en el crecimiento de la oferta monetaria a menudo llevó a períodos deflacionarios, que favorecieron sistemáticamente a los acreedores (que fueron pagados con dinero más valioso) sobre los deudores (agricultores, trabajadores con préstamos). Esto creó tensiones políticas significativas y conflictos distributivos.",
          de: "Die Beschränkung des Goldstandards auf das Geldmengenwachstum führte oft zu deflationären Perioden, die systematisch Gläubiger (die in wertvollererem Geld zurückgezahlt wurden) gegenüber Schuldnern (Bauern, Arbeiter mit Krediten) begünstigten. Dies schuf erhebliche politische Spannungen und Verteilungskonflikte.",
          nl: "De beperking van de goudstandaard op geldvoorraagroei leidde vaak tot deflatoire perioden, die systematisch crediteuren (die werden terugbetaald in waardevoller geld) boven debiteuren (boeren, arbeiders met leningen) bevoordeelden. Dit creëerde significante politieke spanningen en verdelingconflicten."
        }
      },
      {
        question: {
          en: "How did the development of financial markets in London support the international gold standard?",
          es: "¿Cómo apoyó el desarrollo de los mercados financieros en Londres al patrón oro internacional?",
          de: "Wie unterstützte die Entwicklung der Finanzmärkte in London den internationalen Goldstandard?",
          nl: "Hoe ondersteunde de ontwikkeling van financiële markten in Londen de internationale goudstandaard?"
        },
        options: [
          { en: "London markets had no special role", es: "Los mercados de Londres no tuvieron papel especial", de: "Londoner Märkte hatten keine besondere Rolle", nl: "Londense markten hadden geen speciale rol" },
          { en: "London's deep financial markets allowed countries to borrow rather than ship gold, reducing pressure on gold reserves", es: "Los mercados financieros profundos de Londres permitieron a los países pedir prestado en lugar de enviar oro, reduciendo la presión sobre las reservas de oro", de: "Londons tiefe Finanzmärkte ermöglichten es Ländern zu leihen anstatt Gold zu versenden, was den Druck auf Goldreserven reduzierte", nl: "Londens diepe financiële markten stelden landen in staat te lenen in plaats van goud te verschepen, wat druk op goudreserves verminderde" },
          { en: "London only traded in commodities, not finance", es: "Londres solo comerciaba en materias primas, no finanzas", de: "London handelte nur mit Rohstoffen, nicht mit Finanzen", nl: "Londen handelde alleen in grondstoffen, niet financiën" },
          { en: "London markets were closed to international participants", es: "Los mercados de Londres estaban cerrados a participantes internacionales", de: "Londoner Märkte waren für internationale Teilnehmer geschlossen", nl: "Londense markten waren gesloten voor internationale deelnemers" }
        ],
        correct: 1,
        explanation: {
          en: "London's sophisticated financial markets, including the acceptance market, discount houses, and international banking, allowed temporary balance of payments imbalances to be financed through credit rather than immediate gold shipments, providing flexibility that helped the gold standard function smoothly.",
          es: "Los mercados financieros sofisticados de Londres, incluyendo el mercado de aceptaciones, casas de descuento y banca internacional, permitieron que los desequilibrios temporales de la balanza de pagos se financiaran a través de crédito en lugar de envíos inmediatos de oro, proporcionando flexibilidad que ayudó al patrón oro a funcionar suavemente.",
          de: "Londons sophistizierte Finanzmärkte, einschließlich des Akzeptmarktes, Diskonthäuser und internationaler Banken, ermöglichten es, temporäre Zahlungsbilanzungleichgewichte durch Kredit anstatt sofortige Goldsendungen zu finanzieren, was Flexibilität bot, die dem Goldstandard half, reibungslos zu funktionieren.",
          nl: "Londens geavanceerde financiële markten, inclusief de acceptatiemarkt, discontohuizen en internationale bankwezen, maakten het mogelijk tijdelijke betalingsbalansonevenwichtigheden te financieren door krediet in plaats van onmiddellijke goudverzendingen, wat flexibiliteit bood die de goudstandaard hielp soepel te functioneren."
        }
      },
      {
        question: {
          en: "What was the impact of the California and Klondike gold rushes on global monetary conditions?",
          es: "¿Cuál fue el impacto de las fiebres del oro de California y Klondike en las condiciones monetarias globales?",
          de: "Welche Auswirkungen hatten die Gold-Rushes in Kalifornien und Klondike auf die globalen Währungsbedingungen?",
          nl: "Wat was de impact van de goudkoorts in Californië en Klondike op wereldwijde monetaire omstandigheden?"
        },
        options: [
          { en: "They caused severe global deflation", es: "Causaron deflación global severa", de: "Sie verursachten schwere globale Deflation", nl: "Ze veroorzaakten ernstige wereldwijde deflatie" },
          { en: "They increased global gold supply, helping end the deflationary period of the 1890s and supporting economic recovery", es: "Aumentaron la oferta global de oro, ayudando a terminar el período deflacionario de 1890s y apoyando la recuperación económica", de: "Sie erhöhten das globale Goldangebot, halfen dabei, die deflationäre Periode der 1890er Jahre zu beenden und unterstützten die wirtschaftliche Erholung", nl: "Ze verhoogden de wereldwijde goudvoorraad, hielpen het deflatoire tijdperk van de 1890s te beëindigen en ondersteunden economisch herstel" },
          { en: "They had no monetary impact", es: "No tuvieron impacto monetario", de: "Sie hatten keine monetäre Auswirkung", nl: "Ze hadden geen monetaire impact" },
          { en: "They caused countries to abandon the gold standard", es: "Causaron que países abandonaran el patrón oro", de: "Sie verursachten, dass Länder den Goldstandard aufgaben", nl: "Ze veroorzaakten dat landen de goudstandaard verlieten" }
        ],
        correct: 1,
        explanation: {
          en: "The gold discoveries in California (1849), Australia (1850s), South Africa (1880s), and Klondike (1890s) significantly increased the global gold supply, ending the deflationary 'Long Depression' and ushering in a period of mild inflation and economic expansion from the 1890s onward.",
          es: "Los descubrimientos de oro en California (1849), Australia (1850s), Sudáfrica (1880s) y Klondike (1890s) aumentaron significativamente la oferta global de oro, terminando la 'Larga Depresión' deflacionaria e iniciando un período de inflación leve y expansión económica desde 1890s en adelante.",
          de: "Die Goldentdeckungen in Kalifornien (1849), Australien (1850er), Südafrika (1880er) und Klondike (1890er) erhöhten das globale Goldangebot erheblich, beendeten die deflationäre 'Lange Depression' und leiteten ab den 1890er Jahren eine Periode milder Inflation und wirtschaftlicher Expansion ein.",
          nl: "De goudontdekkingen in Californië (1849), Australië (1850s), Zuid-Afrika (1880s) en Klondike (1890s) verhoogden de wereldwijde goudvoorraad aanzienlijk, beëindigden de deflatoire 'Lange Depressie' en luidden een periode van milde inflatie en economische expansie in vanaf de 1890s."
        }
      },
      {
        question: {
          en: "How did technological advances in gold extraction and processing affect the gold standard?",
          es: "¿Cómo afectaron los avances tecnológicos en extracción y procesamiento de oro al patrón oro?",
          de: "Wie wirkten sich technologische Fortschritte in der Goldgewinnung und -verarbeitung auf den Goldstandard aus?",
          nl: "Hoe beïnvloedden technologische vooruitgang in goudwinning en -verwerking de goudstandaard?"
        },
        options: [
          { en: "Technology had no impact on gold production", es: "La tecnología no tuvo impacto en la producción de oro", de: "Technologie hatte keinen Einfluss auf die Goldproduktion", nl: "Technologie had geen impact op goudproductie" },
          { en: "The cyanide process and other innovations dramatically increased gold production, affecting global money supply", es: "El proceso de cianuro y otras innovaciones aumentaron dramáticamente la producción de oro, afectando la oferta monetaria global", de: "Das Zyanid-Verfahren und andere Innovationen erhöhten die Goldproduktion dramatisch und beeinflussten die globale Geldversorgung", nl: "Het cyanideproces en andere innovaties verhoogden goudproductie dramatisch, wat de wereldwijde geldvoorraad beïnvloedde" },
          { en: "New technology made gold worthless", es: "La nueva tecnología hizo que el oro no tuviera valor", de: "Neue Technologie machte Gold wertlos", nl: "Nieuwe technologie maakte goud waardeloos" },
          { en: "Technology was banned in gold mining", es: "La tecnología estaba prohibida en la minería de oro", de: "Technologie war im Goldbergbau verboten", nl: "Technologie was verboden in goudwinning" }
        ],
        correct: 1,
        explanation: {
          en: "The development of the cyanide extraction process (1887) and other technological advances allowed profitable extraction of gold from previously uneconomical low-grade ores, significantly increasing global gold production and affecting money supply conditions under the gold standard.",
          es: "El desarrollo del proceso de extracción de cianuro (1887) y otros avances tecnológicos permitieron la extracción rentable de oro de minerales de baja ley previamente no económicos, aumentando significativamente la producción global de oro y afectando las condiciones de oferta monetaria bajo el patrón oro.",
          de: "Die Entwicklung des Zyanid-Extraktionsverfahrens (1887) und andere technologische Fortschritte ermöglichten die profitable Gewinnung von Gold aus zuvor unwirtschaftlichen niedriggradigen Erzen, was die globale Goldproduktion erheblich steigerte und die Geldangebotskonditionen unter dem Goldstandard beeinflusste.",
          nl: "De ontwikkeling van het cyanide-extractieproces (1887) en andere technologische vooruitgang maakte winstgevende winning van goud uit voorheen oneconomische laagwaardige ertsen mogelijk, wat de wereldwijde goudproductie aanzienlijk verhoogde en geldaanbodcondities onder de goudstandaard beïnvloedde."
        }
      },
      {
        question: {
          en: "What was the theoretical foundation of the quantity theory of money in relation to the gold standard?",
          es: "¿Cuál fue la base teórica de la teoría cuantitativa del dinero en relación con el patrón oro?",
          de: "Was war die theoretische Grundlage der Quantitätstheorie des Geldes in Bezug auf den Goldstandard?",
          nl: "Wat was de theoretische basis van de kwantiteitstheorie van geld in relatie tot de goudstandaard?"
        },
        options: [
          { en: "MV = PQ: Money supply times velocity equals price level times quantity of goods, with gold controlling money supply", es: "MV = PQ: Oferta monetaria por velocidad iguala nivel de precios por cantidad de bienes, con el oro controlando la oferta monetaria", de: "MV = PQ: Geldmenge mal Umlaufgeschwindigkeit gleich Preisniveau mal Gütermenge, wobei Gold die Geldmenge kontrolliert", nl: "MV = PQ: Geldvoorraad maal snelheid gelijk prijsniveau maal hoeveelheid goederen, waarbij goud de geldvoorraad controleerde" },
          { en: "Gold price was determined by government decree", es: "El precio del oro era determinado por decreto gubernamental", de: "Der Goldpreis wurde durch Regierungsdekret bestimmt", nl: "Goudprijs werd bepaald door regeringsbesluit" },
          { en: "Money supply was irrelevant to prices", es: "La oferta monetaria era irrelevante para los precios", de: "Geldmenge war irrelevant für Preise", nl: "Geldvoorraad was irrelevant voor prijzen" },
          { en: "Only velocity mattered for price determination", es: "Solo la velocidad importaba para la determinación de precios", de: "Nur die Geschwindigkeit war wichtig für die Preisbestimmung", nl: "Alleen snelheid was belangrijk voor prijsbepaling" }
        ],
        correct: 0,
        explanation: {
          en: "The quantity theory (MV = PQ) provided the theoretical framework for understanding how the gold standard worked: gold supply determined money supply (M), which along with velocity (V) determined the price level (P) for a given quantity of goods (Q). This explained how gold discoveries caused inflation.",
          es: "La teoría cuantitativa (MV = PQ) proporcionó el marco teórico para entender cómo funcionaba el patrón oro: la oferta de oro determinaba la oferta monetaria (M), que junto con la velocidad (V) determinaba el nivel de precios (P) para una cantidad dada de bienes (Q). Esto explicaba cómo los descubrimientos de oro causaban inflación.",
          de: "Die Quantitätstheorie (MV = PQ) lieferte den theoretischen Rahmen zum Verständnis der Funktionsweise des Goldstandards: Goldangebot bestimmte Geldmenge (M), die zusammen mit der Umlaufgeschwindigkeit (V) das Preisniveau (P) für eine gegebene Gütermenge (Q) bestimmte. Dies erklärte, wie Goldentdeckungen Inflation verursachten.",
          nl: "De kwantiteitstheorie (MV = PQ) verschafte het theoretische kader voor het begrijpen van hoe de goudstandaard werkte: goudaanbod bepaalde geldvoorraad (M), die samen met snelheid (V) het prijsniveau (P) bepaalde voor een gegeven hoeveelheid goederen (Q). Dit verklaarde hoe goudontdekkingen inflatie veroorzaakten."
        }
      },
      {
        question: {
          en: "How did the interwar gold standard (1925-1931) differ from the classical gold standard?",
          es: "¿Cómo difirió el patrón oro de entreguerras (1925-1931) del patrón oro clásico?",
          de: "Wie unterschied sich der Zwischenkriegs-Goldstandard (1925-1931) vom klassischen Goldstandard?",
          nl: "Hoe verschilde de interbellum goudstandaard (1925-1931) van de klassieke goudstandaard?"
        },
        options: [
          { en: "It was identical to the classical system", es: "Era idéntico al sistema clásico", de: "Es war identisch mit dem klassischen System", nl: "Het was identiek aan het klassieke systeem" },
          { en: "It relied more on central bank cooperation and gold exchange mechanisms rather than automatic adjustment", es: "Se basó más en la cooperación de bancos centrales y mecanismos de intercambio de oro en lugar de ajuste automático", de: "Es verließ sich mehr auf Zentralbank-Kooperation und Gold-Devisen-Mechanismen anstatt automatische Anpassung", nl: "Het vertrouwde meer op centrale bank samenwerking en goud-wissel mechanismen in plaats van automatische aanpassing" },
          { en: "It abandoned gold completely", es: "Abandonó completamente el oro", de: "Es gab Gold völlig auf", nl: "Het verliet goud volledig" },
          { en: "It only used silver as backing", es: "Solo usó plata como respaldo", de: "Es verwendete nur Silber als Deckung", nl: "Het gebruikte alleen zilver als dekking" }
        ],
        correct: 1,
        explanation: {
          en: "The interwar gold standard was a 'managed' system that relied heavily on central bank cooperation, sterilization policies, and the gold exchange standard rather than the automatic price-specie flow mechanism. This made it more fragile and ultimately unsustainable during the Great Depression.",
          es: "El patrón oro de entreguerras fue un sistema 'gestionado' que se basó mucho en la cooperación de bancos centrales, políticas de esterilización y el patrón de intercambio de oro en lugar del mecanismo automático de flujo precio-especie. Esto lo hizo más frágil y finalmente insostenible durante la Gran Depresión.",
          de: "Der Zwischenkriegs-Goldstandard war ein 'verwaltetes' System, das stark auf Zentralbank-Kooperation, Sterilisationspolitiken und den Gold-Devisen-Standard anstatt auf den automatischen Preis-Spezies-Flussmechanismus setzte. Dies machte ihn fragiler und letztlich während der Großen Depression nicht nachhaltig.",
          nl: "De interbellum goudstandaard was een 'beheerd' systeem dat zwaar vertrouwde op centrale bank samenwerking, sterilisatiebeleid en de goud-wisselstandaard in plaats van het automatische prijs-specie stroomechanisme. Dit maakte het fragiler en uiteindelijk onhoudbaar tijdens de Grote Depressie."
        }
      }
    ]
  };

  // Export for use in the quiz application
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level5;
  } else if (typeof window !== 'undefined') {
    window.level5 = level5;
  }
})();