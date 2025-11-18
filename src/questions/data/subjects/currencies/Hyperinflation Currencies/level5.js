// Quiz Level 5: Currencies - Hyperinflatie valuta (Master)
(function() {
  const level5 = {
    name: {
      en: "Hyperinflation Currency - Master",
      es: "Moneda de Hiperinflación - Maestro",
      de: "Hyperinflationswährung - Meister",
      nl: "Hyperinflatie Valuta - Meester"
    },
    questions: [
      {
        question: {
          en: "In game-theoretic models of hyperinflation, what creates the 'prisoner's dilemma' between government and central bank?",
          es: "En modelos de teoría de juegos de hiperinflación, ¿qué crea el 'dilema del prisionero' entre gobierno y banco central?",
          de: "In spieltheoretischen Modellen der Hyperinflation, was schafft das 'Gefangenendilemma' zwischen Regierung und Zentralbank?",
          nl: "In speltheoretische modellen van hyperinflatie, wat creëert het 'gevangenendilemma' tussen regering en centrale bank?"
        },
        options: [
          { en: "Both benefit from coordination but have incentives to defect", es: "Ambos se benefician de la coordinación pero tienen incentivos para desertar", de: "Beide profitieren von Koordination, haben aber Anreize zu defektieren", nl: "Beiden profiteren van coördinatie maar hebben prikkels om af te wijken" },
          { en: "Information asymmetries prevent optimal outcomes", es: "Las asimetrías de información previenen resultados óptimos", de: "Informationsasymmetrien verhindern optimale Ergebnisse", nl: "Informatie asymmetrieën voorkomen optimale uitkomsten" },
          { en: "External shocks disrupt equilibrium strategies", es: "Los choques externos interrumpen las estrategias de equilibrio", de: "Externe Schocks stören Gleichgewichtsstrategien", nl: "Externe schokken verstoren evenwichtstrategieën" },
          { en: "Political cycles misalign temporal preferences", es: "Los ciclos políticos desalinean las preferencias temporales", de: "Politische Zyklen stören zeitliche Präferenzen", nl: "Politieke cycli verstoren temporele voorkeuren" }
        ],
        correct: 0,
        explanation: {
          en: "The prisoner's dilemma emerges because both government and central bank would benefit from coordinated fiscal-monetary discipline, but each has individual incentives to defect: the government to finance deficits through seigniorage, the central bank to accommodate to avoid immediate recession, leading to suboptimal hyperinflationary outcomes.",
          es: "El dilema del prisionero surge porque tanto el gobierno como el banco central se beneficiarían de la disciplina fiscal-monetaria coordinada, pero cada uno tiene incentivos individuales para desertar: el gobierno para financiar déficits a través del señoreaje, el banco central para acomodar para evitar recesión inmediata, llevando a resultados hiperinflacionarios subóptimos.",
          de: "Das Gefangenendilemma entsteht, weil sowohl Regierung als auch Zentralbank von koordinierter fiskal-monetärer Disziplin profitieren würden, aber jeder hat individuelle Anreize zu defektieren: die Regierung zur Defizitfinanzierung durch Seigniorage, die Zentralbank zur Akkommodation um sofortige Rezession zu vermeiden, was zu suboptimalen hyperinflationären Ergebnissen führt.",
          nl: "Het gevangenendilemma ontstaat omdat zowel regering als centrale bank zouden profiteren van gecoördineerde fiscaal-monetaire discipline, maar elk heeft individuele prikkels om af te wijken: de regering om tekorten te financieren via seigniorage, de centrale bank om te accommoderen om onmiddellijke recessie te vermijden, leidend tot suboptimale hyperinflatie uitkomsten."
        }
      },
      {
        question: {
          en: "Which advanced econometric technique is specifically designed to handle regime changes during hyperinflation episodes?",
          es: "¿Qué técnica econométrica avanzada está específicamente diseñada para manejar cambios de régimen durante episodios de hiperinflación?",
          de: "Welche fortgeschrittene ökonometrische Technik ist speziell entwickelt, um Regimewechsel während Hyperinflationsepisoden zu handhaben?",
          nl: "Welke geavanceerde econometrische techniek is specifiek ontworpen om regimeveranderingen tijdens hyperinflatie episodes te hanteren?"
        },
        options: [
          { en: "Markov-switching models", es: "Modelos de cambio de Markov", de: "Markov-Switching-Modelle", nl: "Markov-switching modellen" },
          { en: "Kalman filtering", es: "Filtrado de Kalman", de: "Kalman-Filterung", nl: "Kalman filtering" },
          { en: "Threshold autoregression", es: "Autorregresión de umbral", de: "Schwellenwert-Autoregression", nl: "Drempel autoregression" },
          { en: "Smooth transition regression", es: "Regresión de transición suave", de: "Glatte Übergangsregression", nl: "Gladde overgang regressie" }
        ],
        correct: 0,
        explanation: {
          en: "Markov-switching models are specifically designed to capture discrete regime changes with different underlying parameters, allowing for probabilistic transitions between hyperinflation and normal inflation states based on unobservable state variables, making them ideal for analyzing hyperinflation episodes with clear structural breaks.",
          es: "Los modelos de cambio de Markov están específicamente diseñados para capturar cambios discretos de régimen con diferentes parámetros subyacentes, permitiendo transiciones probabilísticas entre estados de hiperinflación e inflación normal basados en variables de estado no observables, haciéndolos ideales para analizar episodios de hiperinflación con quiebres estructurales claros.",
          de: "Markov-Switching-Modelle sind speziell entwickelt, um diskrete Regimewechsel mit verschiedenen zugrundeliegenden Parametern zu erfassen, ermöglichen probabilistische Übergänge zwischen Hyperinflations- und normalen Inflationszuständen basierend auf nicht beobachtbaren Zustandsvariablen, was sie ideal für die Analyse von Hyperinflationsepisoden mit klaren strukturellen Brüchen macht.",
          nl: "Markov-switching modellen zijn specifiek ontworpen om discrete regimeveranderingen met verschillende onderliggende parameters vast te leggen, waardoor probabilistische overgangen tussen hyperinflatie en normale inflatie toestanden mogelijk zijn gebaseerd op niet-waarneembare toestandsvariabelen, waardoor ze ideaal zijn voor het analyseren van hyperinflatie episodes met duidelijke structurele breuken."
        }
      },
      {
        question: {
          en: "What is the 'hysteresis effect' in post-hyperinflation macroeconomic performance?",
          es: "¿Qué es el 'efecto de histéresis' en el rendimiento macroeconómico post-hiperinflación?",
          de: "Was ist der 'Hysterese-Effekt' in der makroökonomischen Leistung nach der Hyperinflation?",
          nl: "Wat is het 'hysterese effect' in post-hyperinflatie macro-economische prestatie?"
        },
        options: [
          { en: "Temporary output losses become permanent through skill depreciation", es: "Las pérdidas temporales de producción se vuelven permanentes a través de la depreciación de habilidades", de: "Temporäre Produktionsverluste werden durch Kompetenzentwertung dauerhaft", nl: "Tijdelijke productie verliezen worden permanent door vaardigheids depreciatie" },
          { en: "Inflation expectations remain elevated despite stabilization", es: "Las expectativas de inflación permanecen elevadas a pesar de la estabilización", de: "Inflationserwartungen bleiben trotz Stabilisierung erhöht", nl: "Inflatie verwachtingen blijven verhoogd ondanks stabilisatie" },
          { en: "Exchange rate volatility persists after crisis resolution", es: "La volatilidad del tipo de cambio persiste después de la resolución de la crisis", de: "Wechselkursvolatilität besteht nach Krisenlösung fort", nl: "Wisselkoers volatiliteit houdt aan na crisis oplossing" },
          { en: "Financial markets remain segmented long-term", es: "Los mercados financieros permanecen segmentados a largo plazo", de: "Finanzmärkte bleiben langfristig segmentiert", nl: "Financiële markten blijven lange termijn gesegmenteerd" }
        ],
        correct: 0,
        explanation: {
          en: "The hysteresis effect in post-hyperinflation recovery refers to how temporary economic disruptions become permanent through mechanisms like skill depreciation, capital obsolescence, and institutional breakdown, meaning the economy's potential output is permanently reduced even after stabilization, requiring structural reforms beyond monetary stabilization.",
          es: "El efecto de histéresis en la recuperación post-hiperinflación se refiere a cómo las disrupciones económicas temporales se vuelven permanentes a través de mecanismos como depreciación de habilidades, obsolescencia de capital y quiebre institucional, significando que la producción potencial de la economía se reduce permanentemente incluso después de la estabilización, requiriendo reformas estructurales más allá de la estabilización monetaria.",
          de: "Der Hysterese-Effekt in der post-hyperinflationären Erholung bezieht sich darauf, wie temporäre wirtschaftliche Störungen durch Mechanismen wie Kompetenzentwertung, Kapitalveralterung und institutionellem Zusammenbruch dauerhaft werden, was bedeutet, dass das Potentialoutput der Wirtschaft dauerhaft reduziert wird, selbst nach Stabilisierung, und strukturelle Reformen über monetäre Stabilisierung hinaus erfordert.",
          nl: "Het hysterese effect in post-hyperinflatie herstel verwijst naar hoe tijdelijke economische verstoringen permanent worden door mechanismen zoals vaardigheids depreciatie, kapitaal veroudering en institutionele ineenstorting, wat betekent dat de potentiële output van de economie permanent wordt verminderd zelfs na stabilisatie, wat structurele hervormingen vereist voorbij monetaire stabilisatie."
        }
      },
      {
        question: {
          en: "Which sophisticated policy instrument combines elements of both fiscal and monetary policy to combat hyperinflation?",
          es: "¿Qué instrumento de política sofisticado combina elementos tanto de política fiscal como monetaria para combatir la hiperinflación?",
          de: "Welches ausgeklügelte Politikinstrument kombiniert Elemente sowohl der Fiskal- als auch der Geldpolitik zur Bekämpfung der Hyperinflation?",
          nl: "Welk geavanceerd beleidsinstrument combineert elementen van zowel fiscaal als monetair beleid om hyperinflatie te bestrijden?"
        },
        options: [
          { en: "Helicopter money", es: "Dinero helicóptero", de: "Helikoptergeld", nl: "Helikoptergeld" },
          { en: "Contingent convertibility bonds", es: "Bonos de convertibilidad contingente", de: "Bedingte Konvertibilitätsanleihen", nl: "Voorwaardelijke convertibiliteit obligaties" },
          { en: "Index-linked fiscal targets", es: "Objetivos fiscales vinculados a índices", de: "Indexgebundene Fiskaliziele", nl: "Index-gebonden fiscale doelen" },
          { en: "Quasi-fiscal operations", es: "Operaciones cuasifiscales", de: "Quasi-fiskalische Operationen", nl: "Quasi-fiscale operaties" }
        ],
        correct: 1,
        explanation: {
          en: "Contingent convertibility bonds (CoCos) combine fiscal and monetary elements by allowing automatic conversion to equity when specified economic triggers are met (like hyperinflation thresholds), simultaneously reducing government debt burden and providing automatic stabilization without requiring discretionary policy responses, creating built-in fiscal-monetary coordination.",
          es: "Los bonos de convertibilidad contingente (CoCos) combinan elementos fiscales y monetarios permitiendo conversión automática a capital cuando se cumplen disparadores económicos específicos (como umbrales de hiperinflación), reduciendo simultáneamente la carga de deuda gubernamental y proporcionando estabilización automática sin requerir respuestas de política discrecional, creando coordinación fiscal-monetaria incorporada.",
          de: "Bedingte Konvertibilitätsanleihen (CoCos) kombinieren fiskalische und monetäre Elemente, indem sie automatische Umwandlung in Eigenkapital ermöglichen, wenn spezifizierte wirtschaftliche Auslöser erfüllt sind (wie Hyperinflationsschwellen), gleichzeitig die Regierungsschuldenlast reduzieren und automatische Stabilisierung ohne diskretionäre Politikantworten bieten, wodurch eingebaute fiskal-monetäre Koordination geschaffen wird.",
          nl: "Voorwaardelijke convertibiliteit obligaties (CoCos) combineren fiscale en monetaire elementen door automatische conversie naar eigen vermogen toe te staan wanneer gespecificeerde economische triggers worden bereikt (zoals hyperinflatie drempels), tegelijkertijd de overheidsschuldenlast verminderen en automatische stabilisatie bieden zonder discretionaire beleidsrespons te vereisen, waardoor ingebouwde fiscaal-monetaire coördinatie wordt gecreëerd."
        }
      },
      {
        question: {
          en: "What role does 'financial repression' play in hyperinflation dynamics according to modern research?",
          es: "¿Qué papel juega la 'represión financiera' en las dinámicas de hiperinflación según la investigación moderna?",
          de: "Welche Rolle spielt 'finanzielle Repression' in der Hyperinflationsdynamik laut moderner Forschung?",
          nl: "Welke rol speelt 'financiële repressie' in hyperinflatie dynamiek volgens modern onderzoek?"
        },
        options: [
          { en: "It prevents hyperinflation by controlling capital flows", es: "Previene la hiperinflación controlando los flujos de capital", de: "Sie verhindert Hyperinflation durch Kontrolle der Kapitalströme", nl: "Het voorkomt hyperinflatie door kapitaalstromen te controleren" },
          { en: "It amplifies hyperinflation by distorting savings allocation", es: "Amplifica la hiperinflación distorsionando la asignación de ahorros", de: "Sie verstärkt Hyperinflation durch Verzerrung der Sparallokation", nl: "Het versterkt hyperinflatie door spaar allocatie te vervormen" },
          { en: "It has no significant impact on inflation dynamics", es: "No tiene impacto significativo en las dinámicas de inflación", de: "Sie hat keinen signifikanten Einfluss auf Inflationsdynamiken", nl: "Het heeft geen significante impact op inflatie dynamiek" },
          { en: "It creates deflationary pressure through credit rationing", es: "Crea presión deflacionaria a través del racionamiento de crédito", de: "Sie schafft deflationären Druck durch Kreditrationierung", nl: "Het creëert deflatoire druk door krediet rantsoenering" }
        ],
        correct: 1,
        explanation: {
          en: "Financial repression amplifies hyperinflation by distorting savings allocation through controlled interest rates, directed lending, and capital controls, forcing savers into low-return domestic assets while reducing the financial system's efficiency in capital allocation, ultimately reducing the economy's capacity to generate real resources needed to service government debt without money creation.",
          es: "La represión financiera amplifica la hiperinflación distorsionando la asignación de ahorros a través de tasas de interés controladas, préstamos dirigidos y controles de capital, forzando a los ahorradores hacia activos domésticos de bajo rendimiento mientras reduce la eficiencia del sistema financiero en la asignación de capital, reduciendo finalmente la capacidad de la economía para generar recursos reales necesarios para servir la deuda gubernamental sin creación de dinero.",
          de: "Finanzielle Repression verstärkt Hyperinflation durch Verzerrung der Sparallokation mittels kontrollierter Zinssätze, gerichteter Kreditvergabe und Kapitalkontrollen, wodurch Sparer in niedrigverzinsliche inländische Vermögenswerte gedrängt werden, während die Effizienz des Finanzsystems bei der Kapitalallokation reduziert wird, was letztendlich die Fähigkeit der Wirtschaft reduziert, reale Ressourcen zu generieren, die zur Bedienung der Staatsschulden ohne Geldschöpfung benötigt werden.",
          nl: "Financiële repressie versterkt hyperinflatie door spaar allocatie te vervormen via gecontroleerde rentetarieven, gerichte kredietverlening en kapitaalcontroles, waardoor spaarders gedwongen worden in laag-rendement binnenlandse activa terwijl de efficiëntie van het financiële systeem in kapitaal allocatie wordt verminderd, uiteindelijk de economie's capaciteit verminderend om reële middelen te genereren die nodig zijn om overheidsschuld te bedienen zonder geldcreatie."
        }
      },
      {
        question: {
          en: "Which cutting-edge stabilization framework incorporates behavioral economics insights into hyperinflation policy design?",
          es: "¿Qué marco de estabilización de vanguardia incorpora conocimientos de economía conductual en el diseño de políticas de hiperinflación?",
          de: "Welcher hochmoderne Stabilisierungsrahmen integriert verhaltensökonomische Erkenntnisse in das Hyperinflationspolitikdesign?",
          nl: "Welk geavanceerd stabilisatie raamwerk incorporeert gedragseconomische inzichten in hyperinflatie beleid ontwerp?"
        },
        options: [
          { en: "Nudge-based inflation targeting", es: "Metas de inflación basadas en empujones", de: "Nudge-basierte Inflationsziele", nl: "Nudge-gebaseerde inflatietargeting" },
          { en: "Adaptive expectations anchoring", es: "Anclaje de expectativas adaptativas", de: "Adaptive Erwartungsverankerung", nl: "Adaptieve verwachtingen verankering" },
          { en: "Rational inattention frameworks", es: "Marcos de inatención racional", de: "Rationale Unaufmerksamkeitsrahmen", nl: "Rationele onoplettendheid raamwerken" },
          { en: "Psychological commitment devices", es: "Dispositivos de compromiso psicológico", de: "Psychologische Verpflichtungsgeräte", nl: "Psychologische toewijdingsapparaten" }
        ],
        correct: 2,
        explanation: {
          en: "Rational inattention frameworks incorporate behavioral insights by recognizing that economic agents have limited cognitive capacity to process information, leading to selective attention to different economic signals. In hyperinflation contexts, this explains why conventional policy announcements may fail while salient, simple signals succeed in coordinating expectations and behavior.",
          es: "Los marcos de inatención racional incorporan conocimientos conductuales reconociendo que los agentes económicos tienen capacidad cognitiva limitada para procesar información, llevando a atención selectiva a diferentes señales económicas. En contextos de hiperinflación, esto explica por qué los anuncios de política convencionales pueden fallar mientras que señales salientes y simples logran coordinar expectativas y comportamiento.",
          de: "Rationale Unaufmerksamkeitsrahmen integrieren verhaltensökonomische Erkenntnisse, indem sie anerkennen, dass Wirtschaftsakteure begrenzte kognitive Kapazität zur Informationsverarbeitung haben, was zu selektiver Aufmerksamkeit für verschiedene wirtschaftliche Signale führt. In Hyperinflationskontexten erklärt dies, warum konventionelle Politikankündigungen versagen können, während auffällige, einfache Signale erfolgreich Erwartungen und Verhalten koordinieren.",
          nl: "Rationele onoplettendheid raamwerken incorporeren gedragsinzichten door te erkennen dat economische agenten beperkte cognitieve capaciteit hebben om informatie te verwerken, leidend tot selectieve aandacht voor verschillende economische signalen. In hyperinflatie contexten verklaart dit waarom conventionele beleidsaankondigingen kunnen falen terwijl opvallende, eenvoudige signalen slagen in het coördineren van verwachtingen en gedrag."
        }
      },
      {
        question: {
          en: "What is the 'velocity trap' phenomenon in advanced hyperinflation theory?",
          es: "¿Qué es el fenómeno de 'trampa de velocidad' en la teoría avanzada de hiperinflación?",
          de: "Was ist das 'Geschwindigkeitsfallen'-Phänomen in der fortgeschrittenen Hyperinflationstheorie?",
          nl: "Wat is het 'snelheids val' fenomeen in geavanceerde hyperinflatie theorie?"
        },
        options: [
          { en: "Money velocity becomes so high that monetary policy loses effectiveness", es: "La velocidad del dinero se vuelve tan alta que la política monetaria pierde efectividad", de: "Geldumlaufgeschwindigkeit wird so hoch, dass Geldpolitik ihre Wirksamkeit verliert", nl: "Geldsnelheid wordt zo hoog dat monetair beleid effectiviteit verliest" },
          { en: "Velocity fluctuations become unpredictable and destabilizing", es: "Las fluctuaciones de velocidad se vuelven impredecibles y desestabilizadoras", de: "Geschwindigkeitsschwankungen werden unvorhersagbar und destabilisierend", nl: "Snelheid fluctuaties worden onvoorspelbaar en destabiliserend" },
          { en: "The central bank cannot control velocity through interest rates", es: "El banco central no puede controlar la velocidad a través de las tasas de interés", de: "Die Zentralbank kann Geschwindigkeit nicht durch Zinssätze kontrollieren", nl: "De centrale bank kan snelheid niet controleren door rentetarieven" },
          { en: "Economic agents get trapped in high-velocity expectations", es: "Los agentes económicos quedan atrapados en expectativas de alta velocidad", de: "Wirtschaftsakteure werden in hohen Geschwindigkeitserwartungen gefangen", nl: "Economische agenten raken gevangen in hoge snelheid verwachtingen" }
        ],
        correct: 0,
        explanation: {
          en: "The velocity trap occurs when money velocity becomes so extremely high during hyperinflation that traditional monetary policy instruments lose effectiveness. At very high velocities, small changes in money supply have enormous price effects, making fine-tuning impossible and requiring dramatic 'cold turkey' stabilization approaches rather than gradual policy adjustments.",
          es: "La trampa de velocidad ocurre cuando la velocidad del dinero se vuelve extremadamente alta durante la hiperinflación que los instrumentos tradicionales de política monetaria pierden efectividad. En velocidades muy altas, pequeños cambios en la oferta monetaria tienen efectos de precios enormes, haciendo imposible el ajuste fino y requiriendo enfoques dramáticos de estabilización 'de golpe' en lugar de ajustes graduales de política.",
          de: "Die Geschwindigkeitsfalle tritt auf, wenn die Geldumlaufgeschwindigkeit während der Hyperinflation so extrem hoch wird, dass traditionelle geldpolitische Instrumente ihre Wirksamkeit verlieren. Bei sehr hohen Geschwindigkeiten haben kleine Änderungen der Geldmenge enorme Preiseffekte, wodurch Feinabstimmung unmöglich wird und dramatische 'kalte Entzug'-Stabilisierungsansätze statt gradueller Politikanpassungen erforderlich werden.",
          nl: "De snelheids val treedt op wanneer geldsnelheid zo extreem hoog wordt tijdens hyperinflatie dat traditionele monetaire beleidsinstrumenten effectiviteit verliezen. Bij zeer hoge snelheden hebben kleine veranderingen in geldaanbod enorme prijseffecten, waardoor fijn afstellen onmogelijk wordt en dramatische 'koude kalkoen' stabilisatie benaderingen vereist zijn in plaats van geleidelijke beleidsaanpassingen."
        }
      },
      {
        question: {
          en: "Which mathematical concept from chaos theory applies to hyperinflation dynamics in complex systems?",
          es: "¿Qué concepto matemático de la teoría del caos se aplica a las dinámicas de hiperinflación en sistemas complejos?",
          de: "Welches mathematische Konzept aus der Chaostheorie gilt für Hyperinflationsdynamiken in komplexen Systemen?",
          nl: "Welk wiskundig concept uit chaos theorie past toe op hyperinflatie dynamiek in complexe systemen?"
        },
        options: [
          { en: "Strange attractors", es: "Atractores extraños", de: "Seltsame Attraktoren", nl: "Vreemde attractoren" },
          { en: "Bifurcation points", es: "Puntos de bifurcación", de: "Bifurkationspunkte", nl: "Bifurcatie punten" },
          { en: "Fractal dimensions", es: "Dimensiones fractales", de: "Fraktale Dimensionen", nl: "Fractale dimensies" },
          { en: "Lyapunov exponents", es: "Exponentes de Lyapunov", de: "Lyapunov-Exponenten", nl: "Lyapunov exponenten" }
        ],
        correct: 1,
        explanation: {
          en: "Bifurcation points from chaos theory apply to hyperinflation by identifying critical thresholds where small parameter changes (like seigniorage dependence or expectations) cause dramatic qualitative changes in system behavior, such as transition from stable low inflation to chaotic hyperinflation regimes, helping predict when economies cross the point of no return.",
          es: "Los puntos de bifurcación de la teoría del caos se aplican a la hiperinflación identificando umbrales críticos donde pequeños cambios de parámetros (como dependencia del señoreaje o expectativas) causan cambios cualitativos dramáticos en el comportamiento del sistema, como transición de inflación baja estable a regímenes caóticos de hiperinflación, ayudando a predecir cuándo las economías cruzan el punto de no retorno.",
          de: "Bifurkationspunkte aus der Chaostheorie gelten für Hyperinflation, indem sie kritische Schwellen identifizieren, wo kleine Parameteränderungen (wie Seigniorage-Abhängigkeit oder Erwartungen) dramatische qualitative Änderungen im Systemverhalten verursachen, wie Übergang von stabiler niedriger Inflation zu chaotischen Hyperinflationsregimen, wodurch vorhergesagt werden kann, wann Volkswirtschaften den Punkt ohne Wiederkehr überschreiten.",
          nl: "Bifurcatie punten uit chaos theorie passen toe op hyperinflatie door kritieke drempels te identificeren waar kleine parameter veranderingen (zoals seigniorage afhankelijkheid of verwachtingen) dramatische kwalitatieve veranderingen in systeemgedrag veroorzaken, zoals overgang van stabiele lage inflatie naar chaotische hyperinflatie regimes, helpend voorspellen wanneer economieën het punt van geen terugkeer overschrijden."
        }
      },
      {
        question: {
          en: "What is the 'network externality effect' in hyperinflation currency substitution?",
          es: "¿Qué es el 'efecto de externalidad de red' en la sustitución monetaria de hiperinflación?",
          de: "Was ist der 'Netzwerk-Externalitäts-Effekt' bei der Hyperinflations-Währungssubstitution?",
          nl: "Wat is het 'netwerk externaliteit effect' in hyperinflatie valuta substitutie?"
        },
        options: [
          { en: "Currency value increases with number of users accepting it", es: "El valor de la moneda aumenta con el número de usuarios que la aceptan", de: "Währungswert steigt mit der Anzahl der Nutzer, die sie akzeptieren", nl: "Valuta waarde stijgt met aantal gebruikers die het accepteren" },
          { en: "Foreign banks establish local networks during crisis", es: "Los bancos extranjeros establecen redes locales durante la crisis", de: "Ausländische Banken etablieren lokale Netzwerke während der Krise", nl: "Buitenlandse banken vestigen lokale netwerken tijdens crisis" },
          { en: "Digital payment systems expand during hyperinflation", es: "Los sistemas de pago digital se expanden durante la hiperinflación", de: "Digitale Zahlungssysteme expandieren während der Hyperinflation", nl: "Digitale betalingssystemen breiden uit tijdens hyperinflatie" },
          { en: "Black market networks become more efficient", es: "Las redes del mercado negro se vuelven más eficientes", de: "Schwarzmarktnetzwerke werden effizienter", nl: "Zwarte markt netwerken worden efficiënter" }
        ],
        correct: 0,
        explanation: {
          en: "The network externality effect in currency substitution means that the value and usefulness of a currency increases with the number of people who accept and use it. During hyperinflation, this creates tipping points where foreign currency adoption accelerates rapidly once a critical mass is reached, as each additional user makes the currency more valuable for everyone else, leading to complete dollarization.",
          es: "El efecto de externalidad de red en la sustitución monetaria significa que el valor y utilidad de una moneda aumenta con el número de personas que la aceptan y usan. Durante la hiperinflación, esto crea puntos de inflexión donde la adopción de moneda extranjera se acelera rápidamente una vez que se alcanza una masa crítica, ya que cada usuario adicional hace la moneda más valiosa para todos los demás, llevando a dolarización completa.",
          de: "Der Netzwerk-Externalitäts-Effekt bei Währungssubstitution bedeutet, dass Wert und Nützlichkeit einer Währung mit der Anzahl der Menschen steigt, die sie akzeptieren und verwenden. Während der Hyperinflation schafft dies Wendepunkte, wo Fremdwährungsadoption sich schnell beschleunigt, sobald eine kritische Masse erreicht ist, da jeder zusätzliche Nutzer die Währung für alle anderen wertvoller macht, was zu vollständiger Dollarisierung führt.",
          nl: "Het netwerk externaliteit effect in valuta substitutie betekent dat de waarde en bruikbaarheid van een valuta toeneemt met het aantal mensen dat het accepteert en gebruikt. Tijdens hyperinflatie creëert dit kantelpunten waar buitenlandse valuta adoptie snel versnelt zodra een kritieke massa wordt bereikt, omdat elke extra gebruiker de valuta waardevoller maakt voor iedereen anders, leidend tot volledige dollarisatie."
        }
      },
      {
        question: {
          en: "Which advanced risk management technique do multinational corporations employ during hyperinflation exposure?",
          es: "¿Qué técnica avanzada de gestión de riesgos emplean las corporaciones multinacionales durante la exposición a hiperinflación?",
          de: "Welche fortgeschrittene Risikomanagement-Technik verwenden multinationale Unternehmen bei Hyperinflationsexposition?",
          nl: "Welke geavanceerde risico management techniek gebruiken multinationale bedrijven tijdens hyperinflatie blootstelling?"
        },
        options: [
          { en: "Dynamic hedging with exotic derivatives", es: "Cobertura dinámica con derivados exóticos", de: "Dynamisches Hedging mit exotischen Derivaten", nl: "Dynamische hedging met exotische derivaten" },
          { en: "Real options valuation models", es: "Modelos de valoración de opciones reales", de: "Real-Options-Bewertungsmodelle", nl: "Reële opties waardering modellen" },
          { en: "Contingent claims analysis", es: "Análisis de reclamos contingentes", de: "Bedingte Anspruchsanalyse", nl: "Voorwaardelijke claims analyse" },
          { en: "Operational flexibility optimization", es: "Optimización de flexibilidad operacional", de: "Operative Flexibilitätsoptimierung", nl: "Operationele flexibiliteit optimalisatie" }
        ],
        correct: 1,
        explanation: {
          en: "Real options valuation models allow multinational corporations to value and manage the flexibility to adapt operations during hyperinflation by treating business decisions as options (to expand, contract, abandon, or switch). This framework helps quantify the value of maintaining operational flexibility when facing extreme uncertainty, enabling optimal timing of strategic responses to hyperinflationary shocks.",
          es: "Los modelos de valoración de opciones reales permiten a las corporaciones multinacionales valorar y gestionar la flexibilidad para adaptar operaciones durante la hiperinflación tratando las decisiones comerciales como opciones (expandir, contraer, abandonar o cambiar). Este marco ayuda a cuantificar el valor de mantener flexibilidad operacional al enfrentar incertidumbre extrema, habilitando tiempo óptimo de respuestas estratégicas a choques hiperinflacionarios.",
          de: "Real-Options-Bewertungsmodelle ermöglichen es multinationalen Unternehmen, die Flexibilität zur Anpassung von Operationen während der Hyperinflation zu bewerten und zu verwalten, indem Geschäftsentscheidungen als Optionen (erweitern, kontrahieren, aufgeben oder wechseln) behandelt werden. Dieser Rahmen hilft, den Wert der Aufrechterhaltung operativer Flexibilität bei extremer Unsicherheit zu quantifizieren und ermöglicht optimales Timing strategischer Antworten auf hyperinflationäre Schocks.",
          nl: "Reële opties waardering modellen stellen multinationale bedrijven in staat om de flexibiliteit om operaties aan te passen tijdens hyperinflatie te waarderen en beheren door zakelijke beslissingen als opties te behandelen (uitbreiden, inkrimpen, opgeven of wisselen). Dit raamwerk helpt de waarde van het behouden van operationele flexibiliteit bij extreme onzekerheid te kwantificeren, waardoor optimale timing van strategische reacties op hyperinflatie schokken mogelijk wordt."
        }
      },
      {
        question: {
          en: "What is the 'expectations trap' in hyperinflation stabilization attempts?",
          es: "¿Qué es la 'trampa de expectativas' en los intentos de estabilización de hiperinflación?",
          de: "Was ist die 'Erwartungsfalle' bei Hyperinflationsstabilisierungsversuchen?",
          nl: "Wat is de 'verwachtingen val' in hyperinflatie stabilisatie pogingen?"
        },
        options: [
          { en: "Failed stabilizations make future attempts less credible", es: "Las estabilizaciones fallidas hacen que los intentos futuros sean menos creíbles", de: "Gescheiterte Stabilisierungen machen zukünftige Versuche weniger glaubwürdig", nl: "Gefaalde stabilisaties maken toekomstige pogingen minder geloofwaardig" },
          { en: "Expectations adjust too slowly to policy changes", es: "Las expectativas se ajustan muy lentamente a los cambios de política", de: "Erwartungen passen sich zu langsam an Politikänderungen an", nl: "Verwachtingen passen te langzaam aan aan beleidsveranderingen" },
          { en: "Rational expectations prevent policy effectiveness", es: "Las expectativas racionales previenen la efectividad de la política", de: "Rationale Erwartungen verhindern Politikwirksamkeit", nl: "Rationele verwachtingen voorkomen beleidseffectiviteit" },
          { en: "Expectations become disconnected from fundamentals", es: "Las expectativas se desconectan de los fundamentos", de: "Erwartungen werden von Fundamentaldaten getrennt", nl: "Verwachtingen raken losgekoppeld van fundamenten" }
        ],
        correct: 0,
        explanation: {
          en: "The expectations trap occurs when repeated failed stabilization attempts progressively damage the government's credibility, making each subsequent attempt harder to succeed as economic agents become increasingly skeptical of policy announcements. This creates a vicious cycle where policy effectiveness diminishes over time, requiring increasingly dramatic measures to achieve the same credibility impact.",
          es: "La trampa de expectativas ocurre cuando repetidos intentos fallidos de estabilización dañan progresivamente la credibilidad del gobierno, haciendo que cada intento subsecuente sea más difícil de tener éxito ya que los agentes económicos se vuelven cada vez más escépticos de los anuncios de política. Esto crea un ciclo vicioso donde la efectividad de la política disminuye con el tiempo, requiriendo medidas cada vez más dramáticas para lograr el mismo impacto de credibilidad.",
          de: "Die Erwartungsfalle tritt auf, wenn wiederholte gescheiterte Stabilisierungsversuche progressiv die Glaubwürdigkeit der Regierung beschädigen, wodurch jeder nachfolgende Versuch schwerer erfolgreich wird, da Wirtschaftsakteure zunehmend skeptisch gegenüber Politikankündigungen werden. Dies schafft einen Teufelskreis, wo Politikwirksamkeit über Zeit abnimmt und zunehmend dramatische Maßnahmen erfordert, um dieselbe Glaubwürdigkeitswirkung zu erzielen.",
          nl: "De verwachtingen val treedt op wanneer herhaalde gefaalde stabilisatie pogingen progressief de geloofwaardigheid van de regering beschadigen, waardoor elke volgende poging moeilijker wordt om te slagen omdat economische agenten steeds sceptischer worden over beleidsaankondigingen. Dit creëert een vicieuze cirkel waar beleidseffectiviteit afneemt over tijd, wat steeds dramatischere maatregelen vereist om dezelfde geloofwaardigheidsimpact te bereiken."
        }
      },
      {
        question: {
          en: "Which sophisticated international coordination mechanism addresses cross-border hyperinflation spillovers?",
          es: "¿Qué mecanismo sofisticado de coordinación internacional aborda los derrames transfronterizos de hiperinflación?",
          de: "Welcher ausgeklügelte internationale Koordinationsmechanismus behandelt grenzüberschreitende Hyperinflations-Spillovers?",
          nl: "Welk geavanceerd internationaal coördinatie mechanisme pakt grensoverschrijdende hyperinflatie spillovers aan?"
        },
        options: [
          { en: "Multicurrency stabilization funds", es: "Fondos de estabilización multidivisa", de: "Multiwährungs-Stabilisierungsfonds", nl: "Multivaluta stabilisatie fondsen" },
          { en: "Synchronized intervention protocols", es: "Protocolos de intervención sincronizada", de: "Synchronisierte Interventionsprotokolle", nl: "Gesynchroniseerde interventie protocollen" },
          { en: "Contingent credit lines with automatic triggers", es: "Líneas de crédito contingentes con disparadores automáticos", de: "Bedingte Kreditlinien mit automatischen Auslösern", nl: "Voorwaardelijke kredietlijnen met automatische triggers" },
          { en: "Regional monetary integration frameworks", es: "Marcos de integración monetaria regional", de: "Regionale Währungsintegrations-Frameworks", nl: "Regionale monetaire integratie raamwerken" }
        ],
        correct: 2,
        explanation: {
          en: "Contingent credit lines with automatic triggers provide sophisticated international coordination by pre-committing multilateral support that activates automatically when specific hyperinflation indicators are met, removing political discretion and coordination delays. This mechanism provides immediate liquidity support while maintaining credibility through predetermined, transparent activation criteria, preventing contagion effects.",
          es: "Las líneas de crédito contingentes con disparadores automáticos proporcionan coordinación internacional sofisticada pre-comprometiendo apoyo multilateral que se activa automáticamente cuando se cumplen indicadores específicos de hiperinflación, removiendo discreción política y retrasos de coordinación. Este mecanismo proporciona apoyo de liquidez inmediato mientras mantiene credibilidad a través de criterios de activación predeterminados y transparentes, previniendo efectos de contagio.",
          de: "Bedingte Kreditlinien mit automatischen Auslösern bieten ausgeklügelte internationale Koordination durch Vorausverpflichtung multilateraler Unterstützung, die automatisch aktiviert wird, wenn spezifische Hyperinflationsindikatoren erfüllt sind, wodurch politische Ermessensspielräume und Koordinationsverzögerungen entfernt werden. Dieser Mechanismus bietet sofortige Liquiditätsunterstützung bei Aufrechterhaltung der Glaubwürdigkeit durch vorbestimmte, transparente Aktivierungskriterien und verhindert Ansteckungseffekte.",
          nl: "Voorwaardelijke kredietlijnen met automatische triggers bieden geavanceerde internationale coördinatie door multilaterale ondersteuning vooraf toe te wijzen die automatisch activeert wanneer specifieke hyperinflatie indicatoren worden bereikt, waardoor politieke discretie en coördinatie vertragingen worden weggenomen. Dit mechanisme biedt onmiddellijke liquiditeitsondersteuning terwijl geloofwaardigheid wordt behouden door vooraf bepaalde, transparante activatie criteria, waardoor besmettingseffecten worden voorkomen."
        }
      },
      {
        question: {
          en: "What is the 'institutional memory effect' in post-hyperinflation economic behavior?",
          es: "¿Qué es el 'efecto de memoria institucional' en el comportamiento económico post-hiperinflación?",
          de: "Was ist der 'institutionelle Gedächtniseffekt' im post-hyperinflationären Wirtschaftsverhalten?",
          nl: "Wat is het 'institutioneel geheugen effect' in post-hyperinflatie economisch gedrag?"
        },
        options: [
          { en: "Central banks maintain ultra-conservative policies decades after stabilization", es: "Los bancos centrales mantienen políticas ultraconservadoras décadas después de la estabilización", de: "Zentralbanken behalten ultra-konservative Politiken Jahrzehnte nach Stabilisierung bei", nl: "Centrale banken behouden ultra-conservatieve beleidslijnen decennia na stabilisatie" },
          { en: "Economic agents permanently alter risk preferences", es: "Los agentes económicos alteran permanentemente las preferencias de riesgo", de: "Wirtschaftsakteure ändern dauerhaft Risikopräferenzen", nl: "Economische agenten veranderen permanent risico voorkeuren" },
          { en: "Formal institutions embed anti-inflation mechanisms", es: "Las instituciones formales incorporan mecanismos anti-inflación", de: "Formale Institutionen betten Anti-Inflationsmechanismen ein", nl: "Formele instellingen inbedden anti-inflatie mechanismen" },
          { en: "Financial markets develop specialized instruments", es: "Los mercados financieros desarrollan instrumentos especializados", de: "Finanzmärkte entwickeln spezialisierte Instrumente", nl: "Financiële markten ontwikkelen gespecialiseerde instrumenten" }
        ],
        correct: 2,
        explanation: {
          en: "The institutional memory effect refers to how societies that experience hyperinflation embed permanent anti-inflation mechanisms into their formal institutions (constitutions, central bank mandates, fiscal rules) that persist long after the crisis, creating structural safeguards that reflect collective memory of hyperinflation's devastating effects and making future episodes less likely through institutional design.",
          es: "El efecto de memoria institucional se refiere a cómo las sociedades que experimentan hiperinflación incorporan mecanismos anti-inflación permanentes en sus instituciones formales (constituciones, mandatos de bancos centrales, reglas fiscales) que persisten mucho después de la crisis, creando salvaguardas estructurales que reflejan la memoria colectiva de los efectos devastadores de la hiperinflación y haciendo episodios futuros menos probables a través del diseño institucional.",
          de: "Der institutionelle Gedächtniseffekt bezieht sich darauf, wie Gesellschaften, die Hyperinflation erleben, permanente Anti-Inflationsmechanismen in ihre formalen Institutionen (Verfassungen, Zentralbankmandate, Fiskalregeln) einbetten, die lange nach der Krise bestehen bleiben, strukturelle Schutzmaßnahmen schaffen, die kollektive Erinnerung an die verheerenden Auswirkungen der Hyperinflation widerspiegeln und zukünftige Episoden durch institutionelles Design weniger wahrscheinlich machen.",
          nl: "Het institutioneel geheugen effect verwijst naar hoe samenlevingen die hyperinflatie ervaren permanente anti-inflatie mechanismen inbedden in hun formele instellingen (grondwetten, centrale bank mandaten, fiscale regels) die lang na de crisis blijven bestaan, structurele veiligheidsmaatregelen creërend die collectieve herinnering aan hyperinflatie's verwoestende effecten weerspiegelen en toekomstige episodes minder waarschijnlijk maken door institutioneel ontwerp."
        }
      },
      {
        question: {
          en: "Which frontier economic model incorporates artificial intelligence insights into hyperinflation prediction?",
          es: "¿Qué modelo económico de frontera incorpora conocimientos de inteligencia artificial en la predicción de hiperinflación?",
          de: "Welches grenzwissenschaftliche Wirtschaftsmodell integriert Erkenntnisse der künstlichen Intelligenz in die Hyperinflationsvorhersage?",
          nl: "Welk grens economisch model incorporeert kunstmatige intelligentie inzichten in hyperinflatie voorspelling?"
        },
        options: [
          { en: "Agent-based computational models", es: "Modelos computacionales basados en agentes", de: "Agentenbasierte Computermodelle", nl: "Agent-gebaseerde computermodellen" },
          { en: "Deep learning ensemble methods", es: "Métodos de conjunto de aprendizaje profundo", de: "Deep-Learning-Ensemble-Methoden", nl: "Deep learning ensemble methoden" },
          { en: "Quantum economic algorithms", es: "Algoritmos económicos cuánticos", de: "Quantenökonomische Algorithmen", nl: "Quantum economische algoritmen" },
          { en: "Neural network autoregression", es: "Autorregresión de redes neuronales", de: "Neuronale Netzwerk-Autoregression", nl: "Neurale netwerk autoregression" }
        ],
        correct: 0,
        explanation: {
          en: "Agent-based computational models incorporate AI insights by simulating millions of heterogeneous economic agents with adaptive learning algorithms, allowing researchers to study emergent hyperinflation patterns from micro-level interactions. These models can capture complex non-linear dynamics, behavioral heterogeneity, and network effects that traditional econometric models miss, providing superior early warning capabilities.",
          es: "Los modelos computacionales basados en agentes incorporan conocimientos de IA simulando millones de agentes económicos heterogéneos con algoritmos de aprendizaje adaptativo, permitiendo a los investigadores estudiar patrones emergentes de hiperinflación a partir de interacciones a nivel micro. Estos modelos pueden capturar dinámicas complejas no lineales, heterogeneidad conductual y efectos de red que los modelos econométricos tradicionales omiten, proporcionando capacidades superiores de alerta temprana.",
          de: "Agentenbasierte Computermodelle integrieren KI-Erkenntnisse durch Simulation von Millionen heterogener Wirtschaftsakteure mit adaptiven Lernalgorithmen, wodurch Forscher emergente Hyperinflationsmuster aus Mikro-Ebenen-Interaktionen studieren können. Diese Modelle können komplexe nichtlineare Dynamiken, verhaltensbedingte Heterogenität und Netzwerkeffekte erfassen, die traditionelle ökonometrische Modelle verpassen, und bieten überlegene Frühwarnfähigkeiten.",
          nl: "Agent-gebaseerde computermodellen incorporeren AI inzichten door miljoenen heterogene economische agenten te simuleren met adaptieve leeralgoritmen, waardoor onderzoekers emergente hyperinflatie patronen kunnen bestuderen vanuit micro-niveau interacties. Deze modellen kunnen complexe niet-lineaire dynamiek, gedragsheterogeniteit en netwerkeffecten vastleggen die traditionele econometrische modellen missen, wat superieure vroege waarschuwingsmogelijkheden biedt."
        }
      },
      {
        question: {
          en: "What role does 'algorithmic trading' play in modern hyperinflation dynamics?",
          es: "¿Qué papel juega el 'trading algorítmico' en las dinámicas modernas de hiperinflación?",
          de: "Welche Rolle spielt 'algorithmischer Handel' in modernen Hyperinflationsdynamiken?",
          nl: "Welke rol speelt 'algoritmische handel' in moderne hyperinflatie dynamiek?"
        },
        options: [
          { en: "It stabilizes exchange rates through arbitrage", es: "Estabiliza los tipos de cambio a través del arbitraje", de: "Es stabilisiert Wechselkurse durch Arbitrage", nl: "Het stabiliseert wisselkoersen door arbitrage" },
          { en: "It amplifies volatility through momentum trading", es: "Amplifica la volatilidad a través del trading de momentum", de: "Es verstärkt Volatilität durch Momentum-Trading", nl: "Het versterkt volatiliteit door momentum trading" },
          { en: "It provides early warning signals", es: "Proporciona señales de alerta temprana", de: "Es bietet Frühwarnsignale", nl: "Het biedt vroege waarschuwingssignalen" },
          { en: "It reduces transaction costs during crisis", es: "Reduce los costos de transacción durante la crisis", de: "Es reduziert Transaktionskosten während der Krise", nl: "Het vermindert transactiekosten tijdens crisis" }
        ],
        correct: 1,
        explanation: {
          en: "Algorithmic trading amplifies hyperinflation volatility through momentum trading strategies that automatically sell declining currencies and buy appreciating ones, creating positive feedback loops that accelerate currency collapse. High-frequency algorithms can trigger massive capital flight within minutes, making modern hyperinflations potentially more rapid and severe than historical episodes.",
          es: "El trading algorítmico amplifica la volatilidad de la hiperinflación a través de estrategias de trading de momentum que automáticamente venden monedas en declive y compran las que se aprecian, creando bucles de retroalimentación positiva que aceleran el colapso monetario. Los algoritmos de alta frecuencia pueden desencadenar fuga masiva de capitales en minutos, haciendo que las hiperinflaciones modernas sean potencialmente más rápidas y severas que los episodios históricos.",
          de: "Algorithmischer Handel verstärkt Hyperinflationsvolatilität durch Momentum-Trading-Strategien, die automatisch fallende Währungen verkaufen und steigende kaufen, wodurch positive Rückkopplungsschleifen entstehen, die Währungskollaps beschleunigen. Hochfrequenz-Algorithmen können massive Kapitalflucht innerhalb von Minuten auslösen, wodurch moderne Hyperinflationen potenziell schneller und schwerer werden als historische Episoden.",
          nl: "Algoritmische handel versterkt hyperinflatie volatiliteit door momentum trading strategieën die automatisch dalende valuta's verkopen en stijgende kopen, waardoor positieve feedback loops ontstaan die valuta instorting versnellen. Hoge frequentie algoritmen kunnen massale kapitaalvlucht binnen minuten triggeren, waardoor moderne hyperinflaties potentieel sneller en zwaarder worden dan historische episodes."
        }
      },
      {
        question: {
          en: "Which cutting-edge policy framework combines blockchain technology with hyperinflation prevention?",
          es: "¿Qué marco de política de vanguardia combina tecnología blockchain con prevención de hiperinflación?",
          de: "Welcher hochmoderne Politikrahmen kombiniert Blockchain-Technologie mit Hyperinflationsprävention?",
          nl: "Welk geavanceerd beleid raamwerk combineert blockchain technologie met hyperinflatie preventie?"
        },
        options: [
          { en: "Central Bank Digital Currencies (CBDCs) with programmable monetary policy", es: "Monedas Digitales de Banco Central (CBDCs) con política monetaria programable", de: "Digitale Zentralbankwährungen (CBDCs) mit programmierbarer Geldpolitik", nl: "Centrale Bank Digitale Valuta's (CBDCs) met programmeerbaar monetair beleid" },
          { en: "Decentralized autonomous stabilization protocols", es: "Protocolos de estabilización autónomos descentralizados", de: "Dezentralisierte autonome Stabilisierungsprotokolle", nl: "Gedecentraliseerde autonome stabilisatie protocollen" },
          { en: "Smart contract fiscal enforcement mechanisms", es: "Mecanismos de cumplimiento fiscal de contratos inteligentes", de: "Smart-Contract-Fiskalvollstreckungsmechanismen", nl: "Smart contract fiscale handhaving mechanismen" },
          { en: "Distributed ledger inflation targeting", es: "Metas de inflación de libro mayor distribuido", de: "Verteilte Ledger-Inflationsziele", nl: "Gedistribueerd grootboek inflatietargeting" }
        ],
        correct: 0,
        explanation: {
          en: "CBDCs with programmable monetary policy represent the cutting edge by enabling automatic, algorithmic execution of anti-hyperinflation rules directly in the currency's code. This technology can implement real-time money supply adjustments, automatic stabilization mechanisms, and transparency that removes human discretion, creating credible commitment to price stability through technological constraints rather than institutional promises.",
          es: "Las CBDCs con política monetaria programable representan la vanguardia permitiendo ejecución automática y algorítmica de reglas anti-hiperinflación directamente en el código de la moneda. Esta tecnología puede implementar ajustes de oferta monetaria en tiempo real, mecanismos de estabilización automática y transparencia que remueve discreción humana, creando compromiso creíble con estabilidad de precios a través de restricciones tecnológicas en lugar de promesas institucionales.",
          de: "CBDCs mit programmierbarer Geldpolitik repräsentieren die Spitze, indem sie automatische, algorithmische Ausführung von Anti-Hyperinflationsregeln direkt im Code der Währung ermöglichen. Diese Technologie kann Echtzeit-Geldmengenanpassungen, automatische Stabilisierungsmechanismen und Transparenz implementieren, die menschliche Ermessensspielräume entfernen und glaubwürdige Bindung an Preisstabilität durch technologische Beschränkungen statt institutionelle Versprechen schaffen.",
          nl: "CBDCs met programmeerbaar monetair beleid vertegenwoordigen de voorhoede door automatische, algoritmische uitvoering van anti-hyperinflatie regels direct in de valuta code mogelijk te maken. Deze technologie kan real-time geldaanbod aanpassingen, automatische stabilisatie mechanismen en transparantie implementeren die menselijke discretie wegneemt, waardoor geloofwaardige toewijding aan prijsstabiliteit wordt gecreëerd door technologische beperkingen in plaats van institutionele beloften."
        }
      },
      {
        question: {
          en: "What is the 'complexity cascade' phenomenon in multi-country hyperinflation contagion?",
          es: "¿Qué es el fenómeno de 'cascada de complejidad' en el contagio de hiperinflación multi-país?",
          de: "Was ist das 'Komplexitätskaskaden'-Phänomen bei länderübergreifender Hyperinflationsansteckung?",
          nl: "Wat is het 'complexiteit cascade' fenomeen in multi-land hyperinflatie besmetting?"
        },
        options: [
          { en: "Hyperinflation spreads through increasingly complex financial linkages", es: "La hiperinflación se propaga a través de vínculos financieros cada vez más complejos", de: "Hyperinflation breitet sich durch zunehmend komplexe finanzielle Verbindungen aus", nl: "Hyperinflatie verspreidt zich door steeds complexere financiële verbindingen" },
          { en: "Each successive country requires more complex stabilization measures", es: "Cada país sucesivo requiere medidas de estabilización más complejas", de: "Jedes nachfolgende Land erfordert komplexere Stabilisierungsmaßnahmen", nl: "Elk opeenvolgende land vereist complexere stabilisatie maatregelen" },
          { en: "Mathematical models become too complex to solve analytically", es: "Los modelos matemáticos se vuelven demasiado complejos para resolver analíticamente", de: "Mathematische Modelle werden zu komplex für analytische Lösungen", nl: "Wiskundige modellen worden te complex om analytisch op te lossen" },
          { en: "Policy coordination becomes exponentially more difficult", es: "La coordinación de políticas se vuelve exponencialmente más difícil", de: "Politikkoordination wird exponentiell schwieriger", nl: "Beleidscoördinatie wordt exponentieel moeilijker" }
        ],
        correct: 3,
        explanation: {
          en: "The complexity cascade describes how hyperinflation contagion makes international policy coordination exponentially more difficult as the number of affected countries increases. With n countries, there are n(n-1)/2 bilateral relationships to coordinate, creating computational and political complexity that can overwhelm existing international institutions, leading to coordination failures that accelerate the spread of hyperinflation.",
          es: "La cascada de complejidad describe cómo el contagio de hiperinflación hace que la coordinación de políticas internacionales sea exponencialmente más difícil cuando el número de países afectados aumenta. Con n países, hay n(n-1)/2 relaciones bilaterales que coordinar, creando complejidad computacional y política que puede abrumar las instituciones internacionales existentes, llevando a fallas de coordinación que aceleran la propagación de la hiperinflación.",
          de: "Die Komplexitätskaskade beschreibt, wie Hyperinflationsansteckung internationale Politikkoordination exponentiell schwieriger macht, wenn die Anzahl betroffener Länder steigt. Mit n Ländern gibt es n(n-1)/2 bilaterale Beziehungen zu koordinieren, wodurch rechnerische und politische Komplexität entsteht, die bestehende internationale Institutionen überlasten kann, was zu Koordinationsfehlern führt, die die Ausbreitung der Hyperinflation beschleunigen.",
          nl: "De complexiteit cascade beschrijft hoe hyperinflatie besmetting internationale beleidscoördinatie exponentieel moeilijker maakt naarmate het aantal getroffen landen toeneemt. Met n landen zijn er n(n-1)/2 bilaterale relaties te coördineren, waardoor computationele en politieke complexiteit ontstaat die bestaande internationale instellingen kan overbelasten, leidend tot coördinatie falen dat de verspreiding van hyperinflatie versnelt."
        }
      },
      {
        question: {
          en: "Which evolutionary game theory concept explains the persistence of suboptimal monetary institutions during hyperinflation?",
          es: "¿Qué concepto de teoría de juegos evolutiva explica la persistencia de instituciones monetarias subóptimas durante la hiperinflación?",
          de: "Welches evolutionäre Spieltheorie-Konzept erklärt die Persistenz suboptimaler monetärer Institutionen während der Hyperinflation?",
          nl: "Welk evolutionaire speltheorie concept verklaart de persistentie van suboptimale monetaire instellingen tijdens hyperinflatie?"
        },
        options: [
          { en: "Evolutionary stable strategies", es: "Estrategias evolutivamente estables", de: "Evolutionär stabile Strategien", nl: "Evolutionair stabiele strategieën" },
          { en: "Replicator dynamics", es: "Dinámicas de replicador", de: "Replikator-Dynamiken", nl: "Replicator dynamiek" },
          { en: "Path-dependent lock-in", es: "Bloqueo dependiente de la trayectoria", de: "Pfadabhängige Einschließung", nl: "Pad-afhankelijke lock-in" },
          { en: "Adaptive learning equilibria", es: "Equilibrios de aprendizaje adaptativo", de: "Adaptive Lerngleichgewichte", nl: "Adaptieve leer evenwichten" }
        ],
        correct: 2,
        explanation: {
          en: "Path-dependent lock-in from evolutionary game theory explains how suboptimal monetary institutions persist during hyperinflation because switching costs, coordination problems, and institutional inertia create 'lock-in' effects. Even when better institutions exist, the economy becomes trapped in inferior equilibria where no single actor has incentives to unilaterally deviate, requiring coordinated transitions that are difficult to achieve during crisis.",
          es: "El bloqueo dependiente de la trayectoria de la teoría de juegos evolutiva explica cómo las instituciones monetarias subóptimas persisten durante la hiperinflación porque los costos de cambio, problemas de coordinación e inercia institucional crean efectos de 'bloqueo'. Incluso cuando existen mejores instituciones, la economía queda atrapada en equilibrios inferiores donde ningún actor individual tiene incentivos para desviarse unilateralmente, requiriendo transiciones coordinadas que son difíciles de lograr durante la crisis.",
          de: "Pfadabhängige Einschließung aus der evolutionären Spieltheorie erklärt, wie suboptimale monetäre Institutionen während der Hyperinflation bestehen bleiben, weil Wechselkosten, Koordinationsprobleme und institutionelle Trägheit 'Lock-in'-Effekte schaffen. Selbst wenn bessere Institutionen existieren, wird die Wirtschaft in inferioren Gleichgewichten gefangen, wo kein einzelner Akteur Anreize hat, einseitig abzuweichen, was koordinierte Übergänge erfordert, die während einer Krise schwer zu erreichen sind.",
          nl: "Pad-afhankelijke lock-in uit evolutionaire speltheorie verklaart hoe suboptimale monetaire instellingen persisteren tijdens hyperinflatie omdat switching kosten, coördinatie problemen en institutionele inertie 'lock-in' effecten creëren. Zelfs wanneer betere instellingen bestaan, raakt de economie gevangen in inferieure evenwichten waar geen enkele actor prikkels heeft om unilateraal af te wijken, wat gecoördineerde overgangen vereist die moeilijk te bereiken zijn tijdens crisis."
        }
      },
      {
        question: {
          en: "What is the most advanced theoretical framework for modeling hyperinflation in open economies with multiple currencies?",
          es: "¿Cuál es el marco teórico más avanzado para modelar la hiperinflación en economías abiertas con múltiples monedas?",
          de: "Was ist der fortgeschrittenste theoretische Rahmen zur Modellierung von Hyperinflation in offenen Volkswirtschaften mit mehreren Währungen?",
          nl: "Wat is het meest geavanceerde theoretische raamwerk voor het modelleren van hyperinflatie in open economieën met meerdere valuta's?"
        },
        options: [
          { en: "Multi-agent search-theoretic models", es: "Modelos teóricos de búsqueda multi-agente", de: "Multi-Agenten-Suchtheoretische Modelle", nl: "Multi-agent zoek-theoretische modellen" },
          { en: "New Open Economy Macroeconomics (NOEM)", es: "Nueva Macroeconomía de Economía Abierta (NOEM)", de: "Neue Offene Makroökonomie (NOEM)", nl: "Nieuwe Open Economie Macro-economie (NOEM)" },
          { en: "Dynamic stochastic general equilibrium with financial frictions", es: "Equilibrio general dinámico estocástico con fricciones financieras", de: "Dynamisches stochastisches allgemeines Gleichgewicht mit finanziellen Friktionen", nl: "Dynamisch stochastisch algemeen evenwicht met financiële wrijvingen" },
          { en: "Network-based monetary models", es: "Modelos monetarios basados en redes", de: "Netzwerkbasierte monetäre Modelle", nl: "Netwerk-gebaseerde monetaire modellen" }
        ],
        correct: 0,
        explanation: {
          en: "Multi-agent search-theoretic models represent the most advanced framework for modeling hyperinflation in multi-currency open economies because they explicitly model the decentralized process of currency choice, search costs, and matching frictions that determine which currencies circulate. These models can endogenously generate currency substitution, network effects, and tipping points that drive complete dollarization during hyperinflation, capturing micro-foundations that other frameworks miss.",
          es: "Los modelos teóricos de búsqueda multi-agente representan el marco más avanzado para modelar la hiperinflación en economías abiertas multi-moneda porque modelan explícitamente el proceso descentralizado de elección de moneda, costos de búsqueda y fricciones de emparejamiento que determinan qué monedas circulan. Estos modelos pueden generar endógenamente sustitución monetaria, efectos de red y puntos de inflexión que impulsan la dolarización completa durante la hiperinflación, capturando micro-fundamentos que otros marcos omiten.",
          de: "Multi-Agenten-Suchtheoretische Modelle repräsentieren den fortgeschrittensten Rahmen zur Modellierung von Hyperinflation in Multi-Währungs-Offenen Volkswirtschaften, weil sie explizit den dezentralisierten Prozess der Währungswahl, Suchkosten und Matching-Friktionen modellieren, die bestimmen, welche Währungen zirkulieren. Diese Modelle können endogen Währungssubstitution, Netzwerkeffekte und Wendepunkte generieren, die komplette Dollarisierung während der Hyperinflation antreiben und Mikrofundamente erfassen, die andere Rahmen verfehlen.",
          nl: "Multi-agent zoek-theoretische modellen vertegenwoordigen het meest geavanceerde raamwerk voor het modelleren van hyperinflatie in multi-valuta open economieën omdat ze expliciet het gedecentraliseerde proces van valuta keuze, zoekkosten en matching wrijvingen modelleren die bepalen welke valuta's circuleren. Deze modellen kunnen endogeen valuta substitutie, netwerk effecten en kantelpunten genereren die volledige dollarisatie tijdens hyperinflatie aandrijven, micro-fundamenten vastleggend die andere raamwerken missen."
        }
      },
      {
        question: {
          en: "What role does 'fiscal dominance' play in the emergence of hyperinflation in modern macro models?",
          es: "¿Qué papel juega la 'dominancia fiscal' en la emergencia de hiperinflación en modelos macro modernos?",
          de: "Welche Rolle spielt 'fiskalische Dominanz' beim Entstehen von Hyperinflation in modernen Makromodellen?",
          nl: "Welke rol speelt 'fiscale dominantie' in het ontstaan van hyperinflatie in moderne macro-modellen?"
        },
        options: [
          { en: "Central bank unable to resist fiscal pressures for monetary financing", es: "Banco central incapaz de resistir presiones fiscales para financiamiento monetario", de: "Zentralbank kann fiskalischen Drücken auf monetäre Finanzierung nicht widerstehen", nl: "Centrale bank kan niet weerstaan aan fiscale druk voor monetaire financiering" },
          { en: "Government controls all aspects of monetary transmission", es: "Gobierno controla todos los aspectos de la transmisión monetaria", de: "Regierung kontrolliert alle Aspekte der monetären Transmission", nl: "Regering controleert alle aspecten van monetaire transmissie" },
          { en: "Fiscal multipliers exceed monetary policy effectiveness", es: "Multiplicadores fiscales exceden efectividad de política monetaria", de: "Fiskalmultiplikatoren übersteigen die Wirksamkeit der Geldpolitik", nl: "Fiscale multipliers overtreffen monetaire beleidseffectiviteit" },
          { en: "Tax revenues automatically finance all government spending", es: "Ingresos fiscales automáticamente financian todo el gasto gubernamental", de: "Steuereinnahmen finanzieren automatisch alle Staatsausgaben", nl: "Belastinginkomsten financieren automatisch alle overheidsuitgaven" }
        ],
        correct: 0,
        explanation: {
          en: "Fiscal dominance occurs when the central bank's monetary policy is subordinated to fiscal needs, forcing accommodation of government deficits through money creation. This undermines price stability objectives and creates conditions conducive to hyperinflation when deficits become unsustainable.",
          es: "La dominancia fiscal ocurre cuando la política monetaria del banco central está subordinada a las necesidades fiscales, forzando la acomodación de déficits gubernamentales a través de creación de dinero. Esto socava los objetivos de estabilidad de precios y crea condiciones propicias para la hiperinflación cuando los déficits se vuelven insostenibles.",
          de: "Fiskalische Dominanz tritt auf, wenn die Geldpolitik der Zentralbank den fiskalischen Bedürfnissen untergeordnet wird, was die Akkommodation von Staatsdefiziten durch Geldschöpfung erzwingt. Dies untergräbt Preisstabilitätsziele und schafft Bedingungen, die für Hyperinflation förderlich sind, wenn Defizite unhaltbar werden.",
          nl: "Fiscale dominantie treedt op wanneer het monetaire beleid van de centrale bank ondergeschikt wordt gemaakt aan fiscale behoeften, wat accommodatie van overheidstekorten door geldcreatie afdwingt. Dit ondermijnt prijsstabiliteitsdoelstellingen en creëert omstandigheden bevorderlijk voor hyperinflatie wanneer tekorten onhoudbaar worden."
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