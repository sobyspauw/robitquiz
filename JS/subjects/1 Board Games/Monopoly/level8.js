(function() {
  const questions = [
    {
      question: {
        en: "In tournament play, what is the official rule for mortgage interest when unmortgaging properties?",
        es: "En juego de torneo, ¿cuál es la regla oficial para el interés hipotecario al desembargar propiedades?",
        de: "Was ist im Turnierspiel die offizielle Regel für Hypothekenzinsen beim Aufheben von Hypotheken?",
        nl: "Wat is in toernooispel de officiële regel voor hypotheekrente bij het aflossen van hypotheken?"
      },
      options: [
        { en: "Exactly 10% of mortgage value", es: "Exactamente 10% del valor hipotecario", de: "Genau 10% des Hypothekenwerts", nl: "Precies 10% van de hypotheekwaarde" },
        { en: "10% rounded up to nearest $10", es: "10% redondeado al $10 más cercano", de: "10% aufgerundet auf nächste $10", nl: "10% afgerond naar dichtstbijzijnde $10" },
        { en: "10% rounded down", es: "10% redondeado hacia abajo", de: "10% abgerundet", nl: "10% naar beneden afgerond" },
        { en: "Flat $5 fee", es: "Tarifa fija de $5", de: "Pauschale $5 Gebühr", nl: "Vast tarief van $5" }
      ],
      correct: 1,
      explanation: {
        en: "The official rule states 10% interest rounded UP to the nearest $10. For example, mortgage interest on a $100 property is $10, on a $150 property is $20.",
        es: "La regla oficial establece un interés del 10% redondeado HACIA ARRIBA al $10 más cercano. Por ejemplo, el interés hipotecario de una propiedad de $100 es $10, de una propiedad de $150 es $20.",
        de: "Die offizielle Regel besagt 10% Zinsen AUFGERUNDET auf die nächsten $10. Zum Beispiel sind die Hypothekenzinsen für eine $100-Immobilie $10, für eine $150-Immobilie $20.",
        nl: "De officiële regel stelt 10% rente NAAR BOVEN afgerond op de dichtstbijzijnde $10. Bijvoorbeeld, hypotheekrente op een $100 eigendom is $10, op een $150 eigendom is $20."
      }
    },
    {
      question: {
        en: "What is the 'three house rule' strategy in competitive Monopoly?",
        es: "¿Cuál es la estrategia de 'regla de tres casas' en Monopoly competitivo?",
        de: "Was ist die 'Drei-Häuser-Regel'-Strategie im kompetitiven Monopoly?",
        nl: "Wat is de 'drie huizen regel' strategie in competitief Monopoly?"
      },
      options: [
        { en: "Building exactly 3 houses per property to maximize efficiency", es: "Construir exactamente 3 casas por propiedad para maximizar eficiencia", de: "Genau 3 Häuser pro Grundstück bauen für maximale Effizienz", nl: "Precies 3 huizen per eigendom bouwen voor maximale efficiëntie" },
        { en: "Never building more than 3 houses", es: "Nunca construir más de 3 casas", de: "Niemals mehr als 3 Häuser bauen", nl: "Nooit meer dan 3 huizen bouwen" },
        { en: "Owning at least 3 monopolies", es: "Poseer al menos 3 monopolios", de: "Mindestens 3 Monopole besitzen", nl: "Minstens 3 monopolies bezitten" },
        { en: "Trading only when you get 3 properties", es: "Negociar solo cuando tienes 3 propiedades", de: "Nur handeln wenn man 3 Grundstücke hat", nl: "Alleen handelen als je 3 eigendommen hebt" }
      ],
      correct: 0,
      explanation: {
        en: "The three house rule means building exactly 3 houses on each property (not upgrading to hotels) to maximize ROI and create a house shortage for opponents.",
        es: "La regla de tres casas significa construir exactamente 3 casas en cada propiedad (sin mejorar a hoteles) para maximizar el ROI y crear escasez de casas para los oponentes.",
        de: "Die Drei-Häuser-Regel bedeutet, genau 3 Häuser auf jedem Grundstück zu bauen (nicht auf Hotels aufrüsten), um den ROI zu maximieren und einen Häusermangel für Gegner zu schaffen.",
        nl: "De drie huizen regel betekent precies 3 huizen bouwen op elk eigendom (niet upgraden naar hotels) om ROI te maximaliseren en een huizenschaarste voor tegenstanders te creëren."
      }
    },
    {
      question: {
        en: "According to probability analysis, how many times does the average player pass GO in a standard game?",
        es: "Según el análisis de probabilidad, ¿cuántas veces pasa el jugador promedio por SALIDA en un juego estándar?",
        de: "Laut Wahrscheinlichkeitsanalyse, wie oft passiert der durchschnittliche Spieler LOS in einem Standardspiel?",
        nl: "Volgens waarschijnlijkheidsanalyse, hoe vaak passeert de gemiddelde speler START in een standaard spel?"
      },
      options: [
        { en: "5-8 times", es: "5-8 veces", de: "5-8 Mal", nl: "5-8 keer" },
        { en: "10-15 times", es: "10-15 veces", de: "10-15 Mal", nl: "10-15 keer" },
        { en: "20-25 times", es: "20-25 veces", de: "20-25 Mal", nl: "20-25 keer" },
        { en: "30-40 times", es: "30-40 veces", de: "30-40 Mal", nl: "30-40 keer" }
      ],
      correct: 2,
      explanation: {
        en: "Studies show players pass GO approximately 20-25 times in a typical game lasting 60-90 minutes, averaging about 7 spaces per turn.",
        es: "Los estudios muestran que los jugadores pasan por SALIDA aproximadamente 20-25 veces en un juego típico de 60-90 minutos, promediando unos 7 espacios por turno.",
        de: "Studien zeigen, dass Spieler in einem typischen 60-90-minütigen Spiel etwa 20-25 Mal LOS passieren, durchschnittlich etwa 7 Felder pro Zug.",
        nl: "Studies tonen aan dat spelers ongeveer 20-25 keer START passeren in een typisch spel van 60-90 minuten, gemiddeld ongeveer 7 vakken per beurt."
      }
    },
    {
      question: {
        en: "What is the 'Monopoly Jail Strategy' used by advanced players in late game?",
        es: "¿Cuál es la 'Estrategia de Cárcel de Monopoly' utilizada por jugadores avanzados en el juego tardío?",
        de: "Was ist die 'Monopoly-Gefängnis-Strategie' von fortgeschrittenen Spielern im späten Spiel?",
        nl: "Wat is de 'Monopoly Gevangenis Strategie' gebruikt door gevorderde spelers in het late spel?"
      },
      options: [
        { en: "Avoiding Jail at all costs", es: "Evitar la Cárcel a toda costa", de: "Gefängnis um jeden Preis vermeiden", nl: "Gevangenis ten koste van alles vermijden" },
        { en: "Staying in Jail as long as possible to avoid rent", es: "Permanecer en la Cárcel el mayor tiempo posible para evitar el alquiler", de: "So lange wie möglich im Gefängnis bleiben, um Miete zu vermeiden", nl: "Zo lang mogelijk in de Gevangenis blijven om huur te vermijden" },
        { en: "Getting out immediately to collect rent", es: "Salir inmediatamente para cobrar alquiler", de: "Sofort rauskommen, um Miete zu kassieren", nl: "Onmiddellijk eruit om huur te innen" },
        { en: "Trading to avoid Jail", es: "Negociar para evitar la Cárcel", de: "Handeln, um Gefängnis zu vermeiden", nl: "Handelen om Gevangenis te vermijden" }
      ],
      correct: 1,
      explanation: {
        en: "In late game when opponents have developed properties, staying in Jail is advantageous - you still collect rent but avoid paying it yourself. Maximum 3 turns is optimal.",
        es: "En el juego tardío cuando los oponentes tienen propiedades desarrolladas, permanecer en la Cárcel es ventajoso: aún cobras alquiler pero evitas pagarlo tú. Un máximo de 3 turnos es óptimo.",
        de: "Im späten Spiel, wenn Gegner entwickelte Grundstücke haben, ist es vorteilhaft im Gefängnis zu bleiben - man kassiert noch Miete, zahlt aber selbst keine. Maximal 3 Runden ist optimal.",
        nl: "In het late spel wanneer tegenstanders ontwikkelde eigendommen hebben, is het voordelig in de Gevangenis te blijven - je int nog steeds huur maar betaalt zelf niet. Maximaal 3 beurten is optimaal."
      }
    },
    {
      question: {
        en: "What is the official rule for building houses unevenly across properties in a monopoly?",
        es: "¿Cuál es la regla oficial para construir casas de manera desigual en las propiedades de un monopolio?",
        de: "Was ist die offizielle Regel für den ungleichmäßigen Bau von Häusern auf Grundstücken in einem Monopol?",
        nl: "Wat is de officiële regel voor het ongelijk bouwen van huizen op eigendommen in een monopolie?"
      },
      options: [
        { en: "Allowed - build anywhere", es: "Permitido - construir en cualquier lugar", de: "Erlaubt - überall bauen", nl: "Toegestaan - overal bouwen" },
        { en: "Not allowed - must build evenly", es: "No permitido - debe construir uniformemente", de: "Nicht erlaubt - muss gleichmäßig bauen", nl: "Niet toegestaan - moet gelijkmatig bouwen" },
        { en: "Allowed only on most expensive property", es: "Permitido solo en la propiedad más cara", de: "Nur auf teuerstem Grundstück erlaubt", nl: "Alleen toegestaan op duurste eigendom" },
        { en: "Allowed with bank's permission", es: "Permitido con permiso del banco", de: "Mit Erlaubnis der Bank erlaubt", nl: "Toegestaan met toestemming van de bank" }
      ],
      correct: 1,
      explanation: {
        en: "Official rules require even building: you cannot build a second house on any property until all properties in the monopoly have one house. This applies to all levels.",
        es: "Las reglas oficiales requieren construcción uniforme: no puedes construir una segunda casa en ninguna propiedad hasta que todas las propiedades del monopolio tengan una casa. Esto aplica a todos los niveles.",
        de: "Offizielle Regeln erfordern gleichmäßiges Bauen: Man kann kein zweites Haus auf einem Grundstück bauen, bis alle Grundstücke im Monopol ein Haus haben. Dies gilt für alle Ebenen.",
        nl: "Officiële regels vereisen gelijkmatig bouwen: je kunt geen tweede huis op een eigendom bouwen totdat alle eigendommen in het monopolie één huis hebben. Dit geldt voor alle niveaus."
      }
    },
    {
      question: {
        en: "In the 2009 Monopoly World Championships, what was the winning strategy employed by champion Bjørn Halvard Knappskog?",
        es: "En el Campeonato Mundial de Monopoly 2009, ¿cuál fue la estrategia ganadora empleada por el campeón Bjørn Halvard Knappskog?",
        de: "Bei der Monopoly-Weltmeisterschaft 2009, welche Siegstrategie nutzte Champion Bjørn Halvard Knappskog?",
        nl: "Bij de Monopoly Wereldkampioenschappen 2009, wat was de winnende strategie gebruikt door kampioen Bjørn Halvard Knappskog?"
      },
      options: [
        { en: "Aggressive trading for orange properties", es: "Negociación agresiva por propiedades naranjas", de: "Aggressiver Handel für orange Grundstücke", nl: "Agressief handelen voor oranje eigendommen" },
        { en: "Hoarding railroads and utilities", es: "Acumulación de ferrocarriles y servicios públicos", de: "Horten von Bahnhöfen und Versorgern", nl: "Hamsterren van spoorwegen en nutsbedrijven" },
        { en: "Conservative property acquisition", es: "Adquisición conservadora de propiedades", de: "Konservative Grundstücksaneignung", nl: "Conservatieve eigendomsverwerving" },
        { en: "Early hotel development on dark blues", es: "Desarrollo temprano de hoteles en azul oscuro", de: "Frühe Hotelentwicklung auf dunkelblauen", nl: "Vroege hotelontwikkeling op donkerblauw" }
      ],
      correct: 0,
      explanation: {
        en: "Knappskog from Norway won by aggressively trading to secure the orange monopoly early, then developing it quickly to generate maximum cash flow.",
        es: "Knappskog de Noruega ganó negociando agresivamente para asegurar el monopolio naranja temprano, luego desarrollándolo rápidamente para generar flujo de efectivo máximo.",
        de: "Knappskog aus Norwegen gewann durch aggressiven Handel, um das orange Monopol früh zu sichern, dann schnelle Entwicklung für maximalen Cashflow.",
        nl: "Knappskog uit Noorwegen won door agressief te handelen om het oranje monopolie vroeg te bemachtigen, en het vervolgens snel te ontwikkelen voor maximale cashflow."
      }
    },
    {
      question: {
        en: "What is the mathematical expected value of owning all four railroads?",
        es: "¿Cuál es el valor esperado matemático de poseer los cuatro ferrocarriles?",
        de: "Was ist der mathematische Erwartungswert des Besitzes aller vier Bahnhöfe?",
        nl: "Wat is de mathematische verwachte waarde van het bezit van alle vier spoorwegen?"
      },
      options: [
        { en: "About $150 per opponent circuit", es: "Alrededor de $150 por circuito de oponente", de: "Etwa $150 pro Gegnerdurchlauf", nl: "Ongeveer $150 per tegenstanderronde" },
        { en: "About $300 per opponent circuit", es: "Alrededor de $300 por circuito de oponente", de: "Etwa $300 pro Gegnerdurchlauf", nl: "Ongeveer $300 per tegenstanderronde" },
        { en: "About $450 per opponent circuit", es: "Alrededor de $450 por circuito de oponente", de: "Etwa $450 pro Gegnerdurchlauf", nl: "Ongeveer $450 per tegenstanderronde" },
        { en: "About $600 per opponent circuit", es: "Alrededor de $600 por circuito de oponente", de: "Etwa $600 pro Gegnerdurchlauf", nl: "Ongeveer $600 per tegenstanderronde" }
      ],
      correct: 0,
      explanation: {
        en: "With four railroads paying $200 each and approximately 28% chance of landing on at least one per circuit, the expected value is roughly $150 per opponent's trip around the board.",
        es: "Con cuatro ferrocarriles pagando $200 cada uno y aproximadamente 28% de probabilidad de caer en al menos uno por circuito, el valor esperado es aproximadamente $150 por viaje del oponente alrededor del tablero.",
        de: "Mit vier Bahnhöfen à $200 und etwa 28% Wahrscheinlichkeit, auf mindestens einem pro Runde zu landen, beträgt der Erwartungswert etwa $150 pro Gegnerdurchlauf.",
        nl: "Met vier spoorwegen die elk $200 betalen en ongeveer 28% kans om op minstens één per ronde te landen, is de verwachte waarde ongeveer $150 per rondje van de tegenstander."
      }
    },
    {
      question: {
        en: "What is the 'endgame cash preservation' strategy in tournament Monopoly?",
        es: "¿Cuál es la estrategia de 'preservación de efectivo en el final del juego' en Monopoly de torneo?",
        de: "Was ist die 'Endspiel-Bargelderhaltungs'-Strategie im Turnier-Monopoly?",
        nl: "Wat is de 'eindspel cash behoud' strategie in toernooi Monopoly?"
      },
      options: [
        { en: "Selling all properties for cash", es: "Vender todas las propiedades por efectivo", de: "Alle Grundstücke für Bargeld verkaufen", nl: "Alle eigendommen verkopen voor cash" },
        { en: "Mortgaging non-monopoly properties to maintain liquid cash", es: "Hipotecar propiedades que no son monopolios para mantener efectivo líquido", de: "Hypothek auf Nicht-Monopol-Grundstücke für flüssiges Bargeld", nl: "Hypotheek op niet-monopolie eigendommen voor liquide middelen" },
        { en: "Never mortgaging anything", es: "Nunca hipotecar nada", de: "Niemals etwas verpfänden", nl: "Nooit iets hypothekeren" },
        { en: "Trading everything for one monopoly", es: "Negociar todo por un monopolio", de: "Alles für ein Monopol handeln", nl: "Alles ruilen voor één monopolie" }
      ],
      correct: 1,
      explanation: {
        en: "Advanced players mortgage single properties and undeveloped monopolies to keep cash reserves for landing on opponents' properties, avoiding bankruptcy while maintaining developed monopolies.",
        es: "Los jugadores avanzados hipotecan propiedades individuales y monopolios no desarrollados para mantener reservas de efectivo para caer en propiedades de oponentes, evitando la bancarrota mientras mantienen monopolios desarrollados.",
        de: "Fortgeschrittene Spieler verpfänden einzelne Grundstücke und unentwickelte Monopole, um Bargeldreserven zu behalten für das Landen auf Gegnergründstücken, Bankrott vermeidend während entwickelte Monopole beibehalten werden.",
        nl: "Gevorderde spelers hypothekeren losse eigendommen en onontwikkelde monopolies om cashreserves te behouden voor het landen op eigendommen van tegenstanders, faillissement vermijdend terwijl ontwikkelde monopolies behouden blijven."
      }
    },
    {
      question: {
        en: "According to game theory analysis, what is the optimal number of properties to own before starting any trades?",
        es: "Según el análisis de teoría de juegos, ¿cuál es el número óptimo de propiedades a poseer antes de comenzar cualquier negociación?",
        de: "Laut Spieltheorie-Analyse, wie viele Grundstücke sollte man besitzen, bevor man mit Handeln beginnt?",
        nl: "Volgens speltheorie analyse, wat is het optimale aantal eigendommen om te bezitten voordat je begint met handelen?"
      },
      options: [
        { en: "At least 3 properties", es: "Al menos 3 propiedades", de: "Mindestens 3 Grundstücke", nl: "Minstens 3 eigendommen" },
        { en: "At least 5-6 properties", es: "Al menos 5-6 propiedades", de: "Mindestens 5-6 Grundstücke", nl: "Minstens 5-6 eigendommen" },
        { en: "At least 8-10 properties", es: "Al menos 8-10 propiedades", de: "Mindestens 8-10 Grundstücke", nl: "Minstens 8-10 eigendommen" },
        { en: "Trade immediately with 1-2 properties", es: "Negociar inmediatamente con 1-2 propiedades", de: "Sofort mit 1-2 Grundstücken handeln", nl: "Direct handelen met 1-2 eigendommen" }
      ],
      correct: 1,
      explanation: {
        en: "Optimal strategy suggests acquiring 5-6 properties before trading, giving you leverage and multiple potential monopoly paths while not appearing desperate to opponents.",
        es: "La estrategia óptima sugiere adquirir 5-6 propiedades antes de negociar, dándote influencia y múltiples caminos potenciales de monopolio sin parecer desesperado ante los oponentes.",
        de: "Optimale Strategie schlägt vor, 5-6 Grundstücke vor dem Handeln zu erwerben, was Einfluss gibt und mehrere potenzielle Monopolwege ohne verzweifelt zu wirken.",
        nl: "Optimale strategie suggereert 5-6 eigendommen te verwerven voor het handelen, wat je invloed geeft en meerdere potentiële monopolie paden zonder wanhopig over te komen op tegenstanders."
      }
    },
    {
      question: {
        en: "What is the 'property denial' strategy in competitive play?",
        es: "¿Cuál es la estrategia de 'negación de propiedad' en juego competitivo?",
        de: "Was ist die 'Grundstücksverweigerungs'-Strategie im kompetitiven Spiel?",
        nl: "Wat is de 'eigendom weigering' strategie in competitief spel?"
      },
      options: [
        { en: "Refusing to trade any properties", es: "Rechazar negociar cualquier propiedad", de: "Ablehnen, Grundstücke zu handeln", nl: "Weigeren om eigendommen te ruilen" },
        { en: "Buying properties you don't need to prevent opponent monopolies", es: "Comprar propiedades que no necesitas para evitar monopolios de oponentes", de: "Grundstücke kaufen, die man nicht braucht, um Gegner-Monopole zu verhindern", nl: "Eigendommen kopen die je niet nodig hebt om monopolies van tegenstanders te voorkomen" },
        { en: "Mortgaging all properties", es: "Hipotecar todas las propiedades", de: "Alle Grundstücke verpfänden", nl: "Alle eigendommen hypothekeren" },
        { en: "Only buying railroads", es: "Solo comprar ferrocarriles", de: "Nur Bahnhöfe kaufen", nl: "Alleen spoorwegen kopen" }
      ],
      correct: 1,
      explanation: {
        en: "Property denial means strategically purchasing properties you don't need for your own monopolies, specifically to block opponents from completing theirs, giving you trading leverage.",
        es: "La negación de propiedad significa comprar estratégicamente propiedades que no necesitas para tus propios monopolios, específicamente para bloquear a los oponentes de completar los suyos, dándote influencia en negociaciones.",
        de: "Grundstücksverweigerung bedeutet strategisches Kaufen von Grundstücken, die man nicht für eigene Monopole braucht, speziell um Gegner am Vervollständigen zu hindern, was Handelseinfluss gibt.",
        nl: "Eigendom weigering betekent strategisch eigendommen kopen die je niet nodig hebt voor je eigen monopolies, specifiek om tegenstanders te blokkeren bij het voltooien van hun monopolies, wat je onderhandelingsinvloed geeft."
      }
    },
    {
      question: {
        en: "What percentage of Monopoly games end in rage-quits or unfinished games according to Hasbro surveys?",
        es: "¿Qué porcentaje de juegos de Monopoly terminan en abandonos por ira o juegos sin terminar según encuestas de Hasbro?",
        de: "Welcher Prozentsatz der Monopoly-Spiele endet laut Hasbro-Umfragen in Rage-Quits oder unbeendeten Spielen?",
        nl: "Welk percentage van Monopoly spellen eindigt in rage-quits of onafgemaakte spellen volgens Hasbro enquêtes?"
      },
      options: [
        { en: "About 20%", es: "Alrededor del 20%", de: "Etwa 20%", nl: "Ongeveer 20%" },
        { en: "About 40%", es: "Alrededor del 40%", de: "Etwa 40%", nl: "Ongeveer 40%" },
        { en: "About 68%", es: "Alrededor del 68%", de: "Etwa 68%", nl: "Ongeveer 68%" },
        { en: "About 85%", es: "Alrededor del 85%", de: "Etwa 85%", nl: "Ongeveer 85%" }
      ],
      correct: 2,
      explanation: {
        en: "Hasbro estimates that approximately 68% of Monopoly games are never finished to completion, often due to length, frustration, or house rules that extend gameplay indefinitely.",
        es: "Hasbro estima que aproximadamente el 68% de los juegos de Monopoly nunca se terminan por completo, a menudo debido a la duración, frustración o reglas caseras que extienden el juego indefinidamente.",
        de: "Hasbro schätzt, dass etwa 68% der Monopoly-Spiele nie zu Ende gespielt werden, oft wegen Länge, Frustration oder Hausregeln, die das Spiel unendlich verlängern.",
        nl: "Hasbro schat dat ongeveer 68% van de Monopoly spellen nooit volledig worden afgemaakt, vaak door lengte, frustratie of huisregels die het spel oneindig verlengen."
      }
    },
    {
      question: {
        en: "In expert-level play, what is the recommended cash reserve to maintain while developing properties?",
        es: "En juego de nivel experto, ¿cuál es la reserva de efectivo recomendada para mantener mientras se desarrollan propiedades?",
        de: "Im Expertenspiel, welche Bargeldreserve wird empfohlen, während Grundstücke entwickelt werden?",
        nl: "In expert-level spel, wat is de aanbevolen cash reserve om aan te houden tijdens het ontwikkelen van eigendommen?"
      },
      options: [
        { en: "$100-200", es: "$100-200", de: "$100-200", nl: "$100-200" },
        { en: "$300-500", es: "$300-500", de: "$300-500", nl: "$300-500" },
        { en: "$500-800", es: "$500-800", de: "$500-800", nl: "$500-800" },
        { en: "$1000+", es: "$1000+", de: "$1000+", nl: "$1000+" }
      ],
      correct: 1,
      explanation: {
        en: "Expert players recommend maintaining $300-500 cash reserve to survive landing on developed opponent properties while still investing aggressively in your own development.",
        es: "Los jugadores expertos recomiendan mantener una reserva de $300-500 en efectivo para sobrevivir al caer en propiedades desarrolladas de oponentes mientras aún inviertes agresivamente en tu propio desarrollo.",
        de: "Experten empfehlen eine Bargeldreserve von $300-500 zu halten, um das Landen auf entwickelten Gegnergründstücken zu überleben, während man aggressiv in eigene Entwicklung investiert.",
        nl: "Expert spelers bevelen aan om $300-500 cash reserve aan te houden om het landen op ontwikkelde eigendommen van tegenstanders te overleven terwijl je nog steeds aggressief in je eigen ontwikkeling investeert."
      }
    },
    {
      question: {
        en: "What is the official tournament rule regarding time limits for making trade decisions?",
        es: "¿Cuál es la regla oficial de torneo sobre límites de tiempo para tomar decisiones comerciales?",
        de: "Was ist die offizielle Turnierregel bezüglich Zeitlimits für Handelsentscheidungen?",
        nl: "Wat is de officiële toernooiregel met betrekking tot tijdslimieten voor handelsbeslissingen?"
      },
      options: [
        { en: "No time limit - unlimited negotiation", es: "Sin límite de tiempo - negociación ilimitada", de: "Keine Zeitbegrenzung - unbegrenzte Verhandlung", nl: "Geen tijdslimiet - onbeperkte onderhandeling" },
        { en: "30 seconds maximum", es: "30 segundos máximo", de: "30 Sekunden Maximum", nl: "30 seconden maximum" },
        { en: "Players have 1 minute to accept or reject", es: "Los jugadores tienen 1 minuto para aceptar o rechazar", de: "Spieler haben 1 Minute zum Annehmen oder Ablehnen", nl: "Spelers hebben 1 minuut om te accepteren of afwijzen" },
        { en: "Trades can only happen on your turn", es: "Las negociaciones solo pueden ocurrir en tu turno", de: "Handel nur im eigenen Zug", nl: "Ruilen kan alleen tijdens je beurt" }
      ],
      correct: 2,
      explanation: {
        en: "In tournament play, when a trade offer is made, the other player has exactly 1 minute to accept or reject. This prevents stalling tactics and keeps games moving.",
        es: "En juego de torneo, cuando se hace una oferta de intercambio, el otro jugador tiene exactamente 1 minuto para aceptar o rechazar. Esto evita tácticas dilatorias y mantiene los juegos en movimiento.",
        de: "Im Turnierspiel hat der andere Spieler genau 1 Minute zum Annehmen oder Ablehnen eines Handelsangebots. Dies verhindert Verzögerungstaktiken und hält Spiele in Bewegung.",
        nl: "In toernooispel heeft de andere speler precies 1 minuut om een ruilaanbod te accepteren of af te wijzen. Dit voorkomt vertragingstactieken en houdt spellen in beweging."
      }
    },
    {
      question: {
        en: "What is the mathematical probability of landing on Boardwalk/Park Place at least once in a complete circuit of the board?",
        es: "¿Cuál es la probabilidad matemática de caer en Boardwalk/Park Place al menos una vez en un circuito completo del tablero?",
        de: "Wie hoch ist die mathematische Wahrscheinlichkeit, mindestens einmal auf Boardwalk/Park Place in einer kompletten Brettumrundung zu landen?",
        nl: "Wat is de mathematische waarschijnlijkheid om minstens één keer op Boardwalk/Park Place te landen in een complete rondje van het bord?"
      },
      options: [
        { en: "About 3%", es: "Alrededor del 3%", de: "Etwa 3%", nl: "Ongeveer 3%" },
        { en: "About 8%", es: "Alrededor del 8%", de: "Etwa 8%", nl: "Ongeveer 8%" },
        { en: "About 15%", es: "Alrededor del 15%", de: "Etwa 15%", nl: "Ongeveer 15%" },
        { en: "About 25%", es: "Alrededor del 25%", de: "Etwa 25%", nl: "Ongeveer 25%" }
      ],
      correct: 1,
      explanation: {
        en: "The dark blue properties have approximately 8% combined probability of being landed on per circuit, making them the least-visited color group despite their high rent.",
        es: "Las propiedades azul oscuro tienen aproximadamente 8% de probabilidad combinada de ser visitadas por circuito, convirtiéndolas en el grupo de color menos visitado a pesar de su alto alquiler.",
        de: "Die dunkelblauen Grundstücke haben etwa 8% kombinierte Wahrscheinlichkeit pro Runde besucht zu werden, was sie zur am wenigsten besuchten Farbgruppe trotz hoher Miete macht.",
        nl: "De donkerblauwe eigendommen hebben ongeveer 8% gecombineerde waarschijnlijkheid om bezocht te worden per rondje, waardoor ze de minst bezochte kleurgroep zijn ondanks hun hoge huur."
      }
    },
    {
      question: {
        en: "What is the 'color blocking' strategy in advanced Monopoly play?",
        es: "¿Cuál es la estrategia de 'bloqueo de color' en el juego avanzado de Monopoly?",
        de: "Was ist die 'Farbblockungs'-Strategie im fortgeschrittenen Monopoly-Spiel?",
        nl: "Wat is de 'kleur blokkering' strategie in gevorderd Monopoly spel?"
      },
      options: [
        { en: "Owning at least one property from every color group", es: "Poseer al menos una propiedad de cada grupo de color", de: "Mindestens ein Grundstück aus jeder Farbgruppe besitzen", nl: "Minstens één eigendom van elke kleurgroep bezitten" },
        { en: "Only buying one color group", es: "Solo comprar un grupo de color", de: "Nur eine Farbgruppe kaufen", nl: "Alleen één kleurgroep kopen" },
        { en: "Trading for specific colors only", es: "Negociar solo por colores específicos", de: "Nur für bestimmte Farben handeln", nl: "Alleen handelen voor specifieke kleuren" },
        { en: "Avoiding certain color groups", es: "Evitar ciertos grupos de colores", de: "Bestimmte Farbgruppen vermeiden", nl: "Bepaalde kleurgroepen vermijden" }
      ],
      correct: 0,
      explanation: {
        en: "Color blocking means owning at least one property from each color group to prevent opponents from completing any monopoly without trading with you, maximizing your negotiation power.",
        es: "El bloqueo de color significa poseer al menos una propiedad de cada grupo de color para evitar que los oponentes completen cualquier monopolio sin negociar contigo, maximizando tu poder de negociación.",
        de: "Farbblockung bedeutet, mindestens ein Grundstück aus jeder Farbgruppe zu besitzen, um zu verhindern, dass Gegner ohne mit dir zu handeln ein Monopol vervollständigen, was Verhandlungsmacht maximiert.",
        nl: "Kleur blokkering betekent minstens één eigendom van elke kleurgroep bezitten om te voorkomen dat tegenstanders een monopolie voltooien zonder met jou te handelen, wat je onderhandelingsmacht maximaliseert."
      }
    },
    {
      question: {
        en: "According to tournament statistics, what property has the highest return on investment (ROI) when fully developed?",
        es: "Según las estadísticas de torneos, ¿qué propiedad tiene el mayor retorno de inversión (ROI) cuando está completamente desarrollada?",
        de: "Laut Turnierstatistiken, welches Grundstück hat den höchsten Return on Investment (ROI) wenn voll entwickelt?",
        nl: "Volgens toernooistatistieken, welk eigendom heeft het hoogste rendement op investering (ROI) wanneer volledig ontwikkeld?"
      },
      options: [
        { en: "Boardwalk with hotel", es: "Boardwalk con hotel", de: "Boardwalk mit Hotel", nl: "Boardwalk met hotel" },
        { en: "Illinois Avenue with hotel", es: "Illinois Avenue con hotel", de: "Illinois Avenue mit Hotel", nl: "Illinois Avenue met hotel" },
        { en: "New York Avenue with 3 houses", es: "New York Avenue con 3 casas", de: "New York Avenue mit 3 Häusern", nl: "New York Avenue met 3 huizen" },
        { en: "Baltic Avenue with hotel", es: "Baltic Avenue con hotel", de: "Baltic Avenue mit Hotel", nl: "Baltic Avenue met hotel" }
      ],
      correct: 2,
      explanation: {
        en: "New York Avenue (orange) with 3 houses offers the highest ROI: relatively low development cost combined with high landing probability and $800 rent provides optimal return.",
        es: "New York Avenue (naranja) con 3 casas ofrece el mayor ROI: costo de desarrollo relativamente bajo combinado con alta probabilidad de caída y $800 de alquiler proporciona retorno óptimo.",
        de: "New York Avenue (orange) mit 3 Häusern bietet den höchsten ROI: relativ niedrige Entwicklungskosten kombiniert mit hoher Landewahrscheinlichkeit und $800 Miete bietet optimale Rendite.",
        nl: "New York Avenue (oranje) met 3 huizen biedt de hoogste ROI: relatief lage ontwikkelingskosten gecombineerd met hoge landingswaarschijnlijkheid en $800 huur geeft optimaal rendement."
      }
    },
    {
      question: {
        en: "What is the 'hotel conversion' loophole that was banned in tournament play?",
        es: "¿Cuál es la laguna de 'conversión de hotel' que fue prohibida en el juego de torneo?",
        de: "Was ist die 'Hotelumwandlungs'-Lücke, die im Turnierspiel verboten wurde?",
        nl: "Wat is de 'hotel conversie' maas in de wet die verboden werd in toernooispel?"
      },
      options: [
        { en: "Trading hotels between players", es: "Negociar hoteles entre jugadores", de: "Hotels zwischen Spielern handeln", nl: "Hotels tussen spelers ruilen" },
        { en: "Downgrading hotels to houses when bank runs out", es: "Bajar hoteles a casas cuando se acaba el banco", de: "Hotels zu Häusern herabstufen wenn Bank leer", nl: "Hotels downgraden naar huizen wanneer bank leeg is" },
        { en: "Upgrading houses to hotels without paying", es: "Mejorar casas a hoteles sin pagar", de: "Häuser zu Hotels upgraden ohne Bezahlung", nl: "Huizen upgraden naar hotels zonder te betalen" },
        { en: "Building hotels without owning monopoly", es: "Construir hoteles sin poseer monopolio", de: "Hotels bauen ohne Monopol", nl: "Hotels bouwen zonder monopolie" }
      ],
      correct: 1,
      explanation: {
        en: "Players would downgrade hotels to 4 houses when houses ran out, preventing opponents from building. Tournament rules now require sufficient houses available or the conversion cannot occur.",
        es: "Los jugadores bajaban hoteles a 4 casas cuando se acababan las casas, evitando que los oponentes construyeran. Las reglas de torneo ahora requieren suficientes casas disponibles o la conversión no puede ocurrir.",
        de: "Spieler stuften Hotels auf 4 Häuser herunter, wenn Häuser ausgingen, was Gegner am Bauen hinderte. Turnierregeln erfordern jetzt genügend verfügbare Häuser oder die Umwandlung kann nicht stattfinden.",
        nl: "Spelers downgraden hotels naar 4 huizen wanneer huizen op waren, wat tegenstanders verhinderde te bouwen. Toernooiregels vereisen nu voldoende beschikbare huizen of de conversie kan niet plaatsvinden."
      }
    },
    {
      question: {
        en: "In the longest recorded Monopoly game (70 days), what rule was being followed that extended gameplay?",
        es: "En el juego de Monopoly más largo registrado (70 días), ¿qué regla se estaba siguiendo que extendió el juego?",
        de: "Im längsten aufgezeichneten Monopoly-Spiel (70 Tage), welche Regel wurde befolgt, die das Spiel verlängerte?",
        nl: "In het langst geregistreerde Monopoly spel (70 dagen), welke regel werd gevolgd die het spel verlengde?"
      },
      options: [
        { en: "Official tournament rules only", es: "Solo reglas oficiales de torneo", de: "Nur offizielle Turnierregeln", nl: "Alleen officiële toernooiregels" },
        { en: "Free Parking money accumulation house rule", es: "Regla casera de acumulación de dinero en Estacionamiento Gratuito", de: "Hausregel der Geldansammlung bei Freies Parken", nl: "Huisregel van geld ophoping bij Gratis Parkeren" },
        { en: "No auctions allowed", es: "Sin subastas permitidas", de: "Keine Auktionen erlaubt", nl: "Geen veilingen toegestaan" },
        { en: "Double money on GO", es: "Doble dinero en SALIDA", de: "Doppeltes Geld bei LOS", nl: "Dubbel geld op START" }
      ],
      correct: 1,
      explanation: {
        en: "The Free Parking money accumulation house rule constantly re-injects money into the game, preventing the natural economic depletion that causes players to go bankrupt and end the game.",
        es: "La regla casera de acumulación de dinero en Estacionamiento Gratuito reinyecta constantemente dinero en el juego, evitando el agotamiento económico natural que causa que los jugadores quiebren y termine el juego.",
        de: "Die Hausregel der Geldansammlung bei Freies Parken führt ständig Geld ins Spiel zurück, verhindert die natürliche wirtschaftliche Erschöpfung, die Spieler in den Bankrott treibt und das Spiel beendet.",
        nl: "De huisregel van geld ophoping bij Gratis Parkeren injecteert constant geld terug in het spel, wat de natuurlijke economische uitputting voorkomt die spelers failliet laat gaan en het spel beëindigt."
      }
    },
    {
      question: {
        en: "What is the official rule for trades involving future considerations or promises?",
        es: "¿Cuál es la regla oficial para negociaciones que involucran consideraciones o promesas futuras?",
        de: "Was ist die offizielle Regel für Handelsgeschäfte mit zukünftigen Überlegungen oder Versprechen?",
        nl: "Wat is de officiële regel voor ruilen waarbij toekomstige overwegingen of beloftes betrokken zijn?"
      },
      options: [
        { en: "Fully allowed and enforceable", es: "Completamente permitido y ejecutable", de: "Vollständig erlaubt und durchsetzbar", nl: "Volledig toegestaan en afdwingbaar" },
        { en: "Not allowed - trades must be immediate and complete", es: "No permitido - las negociaciones deben ser inmediatas y completas", de: "Nicht erlaubt - Handel muss sofort und vollständig sein", nl: "Niet toegestaan - ruilen moet onmiddellijk en volledig zijn" },
        { en: "Allowed with banker approval", es: "Permitido con aprobación del banquero", de: "Mit Bankiers Genehmigung erlaubt", nl: "Toegestaan met goedkeuring van de bankier" },
        { en: "Allowed only for properties", es: "Permitido solo para propiedades", de: "Nur für Grundstücke erlaubt", nl: "Alleen toegestaan voor eigendommen" }
      ],
      correct: 1,
      explanation: {
        en: "Official Monopoly rules state that trades must be immediate and complete - no future promises like 'immunity from rent' or 'I'll give you money later' are allowed or enforceable.",
        es: "Las reglas oficiales de Monopoly establecen que las negociaciones deben ser inmediatas y completas - no se permiten ni son ejecutables promesas futuras como 'inmunidad del alquiler' o 'te daré dinero después'.",
        de: "Offizielle Monopoly-Regeln besagen, dass Handel sofort und vollständig sein muss - keine zukünftigen Versprechen wie 'Immunität vor Miete' oder 'Ich gebe dir später Geld' sind erlaubt oder durchsetzbar.",
        nl: "Officiële Monopoly regels stellen dat ruilen onmiddellijk en volledig moet zijn - geen toekomstige beloftes zoals 'immuniteit van huur' of 'Ik geef je later geld' zijn toegestaan of afdwingbaar."
      }
    },
    {
      question: {
        en: "What percentage of starting cash should you ideally spend on properties in the first circuit of the board?",
        es: "¿Qué porcentaje del efectivo inicial debes gastar idealmente en propiedades en el primer circuito del tablero?",
        de: "Welchen Prozentsatz des Startkapitals sollte man idealerweise für Grundstücke in der ersten Brettumrundung ausgeben?",
        nl: "Welk percentage van het startgeld moet je idealiter uitgeven aan eigendommen in de eerste ronde van het bord?"
      },
      options: [
        { en: "Keep most cash (spend only 20-30%)", es: "Mantener la mayor parte del efectivo (gastar solo 20-30%)", de: "Meistes Bargeld behalten (nur 20-30% ausgeben)", nl: "Meeste cash behouden (slechts 20-30% uitgeven)" },
        { en: "Balanced approach (spend 50-60%)", es: "Enfoque equilibrado (gastar 50-60%)", de: "Ausgewogener Ansatz (50-60% ausgeben)", nl: "Gebalanceerde aanpak (50-60% uitgeven)" },
        { en: "Aggressive buying (spend 70-80%)", es: "Compra agresiva (gastar 70-80%)", de: "Aggressives Kaufen (70-80% ausgeben)", nl: "Agressief kopen (70-80% uitgeven)" },
        { en: "All-in strategy (spend 90-100%)", es: "Estrategia todo dentro (gastar 90-100%)", de: "All-in Strategie (90-100% ausgeben)", nl: "All-in strategie (90-100% uitgeven)" }
      ],
      correct: 2,
      explanation: {
        en: "Expert strategy recommends spending 70-80% of starting cash on properties in the first circuit, acquiring as many as possible for trading leverage while keeping minimal emergency cash.",
        es: "La estrategia experta recomienda gastar 70-80% del efectivo inicial en propiedades en el primer circuito, adquiriendo tantas como sea posible para influencia en negociaciones mientras se mantiene efectivo mínimo de emergencia.",
        de: "Expertenstrategie empfiehlt 70-80% des Startkapitals in der ersten Runde für Grundstücke auszugeben, so viele wie möglich für Handelseinfluss zu erwerben während minimales Notfallgeld behalten wird.",
        nl: "Expert strategie beveelt aan 70-80% van het startgeld uit te geven aan eigendommen in de eerste ronde, zoveel mogelijk te verwerven voor handelsinvloed terwijl minimaal noodgeld behouden blijft."
      }
    }
  ];

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = questions;
  } else {
    window.boardGamesMonopolyLevel8 = questions;
  }
})();
