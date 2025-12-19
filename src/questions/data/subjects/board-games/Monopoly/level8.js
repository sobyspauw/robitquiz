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
    },
    {
      question: {
        en: "What is the 'mortgage cascade' strategy in bankruptcy situations?",
        es: "¿Qué es la estrategia de 'cascada de hipoteca' en situaciones de quiebra?",
        de: "Was ist die 'Hypotheken-Kaskaden'-Strategie in Bankrottsituationen?",
        nl: "Wat is de 'hypotheek cascade' strategie in faillissementssituaties?"
      },
      options: [
        { en: "Mortgaging all properties at once", es: "Hipotecar todas las propiedades a la vez", de: "Alle Grundstücke auf einmal beleihen", nl: "Alle eigendommen tegelijk hypothekeren" },
        { en: "Mortgaging strategically to pay debts while preserving monopolies", es: "Hipotecar estratégicamente para pagar deudas mientras se preservan monopolios", de: "Strategisch beleihen um Schulden zu zahlen während Monopole erhalten bleiben", nl: "Strategisch hypothekeren om schulden te betalen terwijl monopolies behouden blijven" },
        { en: "Trading mortgaged properties immediately", es: "Negociar propiedades hipotecadas inmediatamente", de: "Verpfändete Grundstücke sofort handeln", nl: "Gehypothekeerde eigendommen onmiddellijk ruilen" },
        { en: "Never mortgaging under any circumstances", es: "Nunca hipotecar bajo ninguna circunstancia", de: "Niemals unter irgendwelchen Umständen beleihen", nl: "Nooit hypothekeren onder welke omstandigheden dan ook" }
      ],
      correct: 1,
      explanation: {
        en: "Mortgage cascade involves mortgaging properties in optimal order: first railroads/utilities, then non-monopoly properties, then least valuable monopoly properties, preserving your strongest monopolies as long as possible.",
        es: "La cascada de hipoteca implica hipotecar propiedades en orden óptimo: primero ferrocarriles/servicios públicos, luego propiedades sin monopolio, luego propiedades de monopolio menos valiosas, preservando tus monopolios más fuertes el mayor tiempo posible.",
        de: "Hypotheken-Kaskade beinhaltet Grundstücke in optimaler Reihenfolge zu beleihen: zuerst Eisenbahnen/Versorgungsunternehmen, dann Nicht-Monopol-Grundstücke, dann am wenigsten wertvolle Monopol-Grundstücke, während stärkste Monopole so lange wie möglich erhalten bleiben.",
        nl: "Hypotheek cascade omvat eigendommen hypothekeren in optimale volgorde: eerst spoorwegen/nutsvoorzieningen, dan niet-monopolie eigendommen, dan minst waardevolle monopolie eigendommen, je sterkste monopolies zo lang mogelijk behoudend."
      }
    },
    {
      question: {
        en: "According to probability analysis, which jail strategy is mathematically optimal?",
        es: "Según el análisis de probabilidad, ¿qué estrategia de cárcel es matemáticamente óptima?",
        de: "Laut Wahrscheinlichkeitsanalyse, welche Gefängnisstrategie ist mathematisch optimal?",
        nl: "Volgens waarschijnlijkheidsanalyse, welke gevangensstrategie is wiskundig optimaal?"
      },
      options: [
        { en: "Pay $50 immediately (turn 1)", es: "Pagar $50 inmediatamente (turno 1)", de: "Sofort $50 zahlen (Runde 1)", nl: "Onmiddellijk $50 betalen (beurt 1)" },
        { en: "Roll for doubles all 3 turns, pay only if forced", es: "Tirar por dobles los 3 turnos, pagar solo si es forzado", de: "Alle 3 Runden auf Pasch würfeln, nur zahlen wenn gezwungen", nl: "Alle 3 beurten voor dubbel gooien, alleen betalen als gedwongen" },
        { en: "Early game: stay in jail. Late game: pay immediately", es: "Juego temprano: quedarse en la cárcel. Juego tardío: pagar inmediatamente", de: "Frühes Spiel: im Gefängnis bleiben. Spätes Spiel: sofort zahlen", nl: "Vroeg spel: in de gevangenis blijven. Laat spel: onmiddellijk betalen" },
        { en: "Always use Get Out of Jail Free card", es: "Usar siempre la carta de Salir de la Cárcel", de: "Immer Raus aus dem Gefängnis-Karte benutzen", nl: "Altijd Verlaat de Gevangenis kaart gebruiken" }
      ],
      correct: 2,
      explanation: {
        en: "Optimal strategy varies: early game stay in jail to avoid developed properties; late game when you have monopolies, pay immediately to collect rent. Statistical analysis shows this maximizes winning probability.",
        es: "La estrategia óptima varía: juego temprano quedarse en la cárcel para evitar propiedades desarrolladas; juego tardío cuando tienes monopolios, pagar inmediatamente para cobrar alquiler. El análisis estadístico muestra que esto maximiza la probabilidad de ganar.",
        de: "Optimale Strategie variiert: frühes Spiel im Gefängnis bleiben um entwickelte Grundstücke zu vermeiden; spätes Spiel wenn man Monopole hat, sofort zahlen um Miete zu kassieren. Statistische Analyse zeigt dies maximiert Gewinnwahrscheinlichkeit.",
        nl: "Optimale strategie varieert: vroeg spel in de gevangenis blijven om ontwikkelde eigendommen te vermijden; laat spel wanneer je monopolies hebt, onmiddellijk betalen om huur te innen. Statistische analyse toont dit maximaliseert winkans."
      }
    },
    {
      question: {
        en: "What is the 'auction denial' tactic and why was it modified in tournament rules?",
        es: "¿Qué es la táctica de 'negación de subasta' y por qué se modificó en las reglas de torneo?",
        de: "Was ist die 'Auktionsverweigerungs'-Taktik und warum wurde sie in Turnierregeln modifiziert?",
        nl: "Wat is de 'veiling ontkenning' tactiek en waarom werd het aangepast in toernooiregels?"
      },
      options: [
        { en: "Refusing to participate in auctions", es: "Negarse a participar en subastas", de: "Weigern an Auktionen teilzunehmen", nl: "Weigeren deel te nemen aan veilingen" },
        { en: "Players colluding to not bid in auctions to help specific player", es: "Jugadores en colusión para no ofertar en subastas para ayudar a jugador específico", de: "Spieler kolludieren um in Auktionen nicht zu bieten um bestimmtem Spieler zu helfen", nl: "Spelers samenspannen om niet te bieden in veilingen om specifieke speler te helpen" },
        { en: "Bidding $1 for every property", es: "Ofertar $1 por cada propiedad", de: "Für jedes Grundstück $1 bieten", nl: "Voor elk eigendom $1 bieden" },
        { en: "Delaying auctions intentionally", es: "Retrasar subastas intencionalmente", de: "Auktionen absichtlich verzögern", nl: "Veilingen opzettelijk vertragen" }
      ],
      correct: 1,
      explanation: {
        en: "Auction denial was when players would collude by not bidding in auctions, allowing one player to acquire properties for $1. Tournament rules now require minimum bid increases and anti-collusion monitoring.",
        es: "La negación de subasta era cuando los jugadores colucían al no ofertar en subastas, permitiendo que un jugador adquiriera propiedades por $1. Las reglas de torneo ahora requieren aumentos de oferta mínimos y monitoreo anti-colusión.",
        de: "Auktionsverweigerung war wenn Spieler kolludierten indem sie nicht in Auktionen boten, was einem Spieler ermöglichte Grundstücke für $1 zu erwerben. Turnierregeln erfordern jetzt Mindestgebotserhöhungen und Anti-Kollusions-Überwachung.",
        nl: "Veiling ontkenning was wanneer spelers samensponnen door niet te bieden in veilingen, waardoor één speler eigendommen kon verwerven voor $1. Toernooiregels vereisen nu minimale bod verhogingen en anti-samenzwering monitoring."
      }
    },
    {
      question: {
        en: "What is the mathematical expected value of a single railroad?",
        es: "¿Cuál es el valor esperado matemático de un solo ferrocarril?",
        de: "Was ist der mathematische Erwartungswert einer einzelnen Eisenbahn?",
        nl: "Wat is de wiskundige verwachte waarde van één spoorweg?"
      },
      options: [
        { en: "$25-$30 per circuit", es: "$25-$30 por circuito", de: "$25-$30 pro Umrundung", nl: "$25-$30 per ronde" },
        { en: "$40-$50 per circuit", es: "$40-$50 por circuito", de: "$40-$50 pro Umrundung", nl: "$40-$50 per ronde" },
        { en: "$70-$80 per circuit", es: "$70-$80 por circuito", de: "$70-$80 pro Umrundung", nl: "$70-$80 per ronde" },
        { en: "$100-$120 per circuit", es: "$100-$120 por circuito", de: "$100-$120 pro Umrundung", nl: "$100-$120 per ronde" }
      ],
      correct: 0,
      explanation: {
        en: "A single railroad generates $25-$30 expected value per board circuit based on 2.8% landing probability and $25 rent, making them poor individual investments but valuable in sets.",
        es: "Un solo ferrocarril genera $25-$30 de valor esperado por circuito del tablero basado en 2.8% de probabilidad de caída y $25 de alquiler, haciéndolos inversiones individuales pobres pero valiosos en conjuntos.",
        de: "Eine einzelne Eisenbahn generiert $25-$30 Erwartungswert pro Brettumrundung basierend auf 2,8% Landewahrscheinlichkeit und $25 Miete, was sie zu schlechten Einzelinvestitionen aber wertvoll in Sets macht.",
        nl: "Eén spoorweg genereert $25-$30 verwachte waarde per bord ronde gebaseerd op 2,8% landingswaarschijnlijkheid en $25 huur, waardoor ze slechte individuele investeringen zijn maar waardevol in sets."
      }
    },
    {
      question: {
        en: "What is the 'bankruptcy timing' advantage in 3+ player games?",
        es: "¿Qué es la ventaja de 'momento de quiebra' en juegos de 3+ jugadores?",
        de: "Was ist der 'Bankrott-Timing'-Vorteil in Spielen mit 3+ Spielern?",
        nl: "Wat is het 'faillissement timing' voordeel in 3+ speler spellen?"
      },
      options: [
        { en: "Always try to bankrupt players early", es: "Intentar siempre arruinar jugadores temprano", de: "Immer versuchen Spieler früh bankrott zu machen", nl: "Altijd proberen spelers vroeg failliet te laten gaan" },
        { en: "Let other players bankrupt each other while you build", es: "Dejar que otros jugadores se arruinen entre sí mientras construyes", de: "Andere Spieler sich gegenseitig bankrott machen lassen während man baut", nl: "Laat andere spelers elkaar failliet laten gaan terwijl jij bouwt" },
        { en: "Form alliances to bankrupt specific player", es: "Formar alianzas para arruinar jugador específico", de: "Allianzen bilden um bestimmten Spieler bankrott zu machen", nl: "Allianties vormen om specifieke speler failliet te laten gaan" },
        { en: "Bankrupting players has no timing advantage", es: "Arruinar jugadores no tiene ventaja de momento", de: "Spieler bankrott machen hat keinen Timing-Vorteil", nl: "Spelers failliet laten gaan heeft geen timing voordeel" }
      ],
      correct: 1,
      explanation: {
        en: "In multi-player games, letting opponents bankrupt each other while you develop properties and conserve cash provides strategic advantage, as fighting depletes both parties' resources.",
        es: "En juegos de múltiples jugadores, dejar que los oponentes se arruinen entre sí mientras desarrollas propiedades y conservas efectivo proporciona ventaja estratégica, ya que pelear agota los recursos de ambas partes.",
        de: "In Mehrspielerspielen bietet es strategischen Vorteil, Gegner sich gegenseitig bankrott machen zu lassen während man Grundstücke entwickelt und Bargeld spart, da Kämpfen die Ressourcen beider Parteien erschöpft.",
        nl: "In multi-speler spellen biedt het strategisch voordeel om tegenstanders elkaar failliet te laten gaan terwijl je eigendommen ontwikkelt en cash behoudt, omdat vechten de middelen van beide partijen uitput."
      }
    },
    {
      question: {
        en: "According to championship data, what is the average game length under official tournament rules?",
        es: "Según datos de campeonato, ¿cuál es la duración promedio del juego bajo reglas oficiales de torneo?",
        de: "Laut Meisterschaftsdaten, wie lang ist die durchschnittliche Spieldauer unter offiziellen Turnierregeln?",
        nl: "Volgens kampioenschapsgegevens, wat is de gemiddelde spelduur onder officiële toernooiregels?"
      },
      options: [
        { en: "15-20 minutes", es: "15-20 minutos", de: "15-20 Minuten", nl: "15-20 minuten" },
        { en: "30-45 minutes", es: "30-45 minutos", de: "30-45 Minuten", nl: "30-45 minuten" },
        { en: "60-90 minutes", es: "60-90 minutos", de: "60-90 Minuten", nl: "60-90 minuten" },
        { en: "2-3 hours", es: "2-3 horas", de: "2-3 Stunden", nl: "2-3 uur" }
      ],
      correct: 1,
      explanation: {
        en: "Official tournament games with strict auction rules, time limits, and no house rules average 30-45 minutes. Casual games with house rules often take 2-3+ hours.",
        es: "Los juegos de torneo oficiales con reglas de subasta estrictas, límites de tiempo y sin reglas caseras promedian 30-45 minutos. Los juegos casuales con reglas caseras a menudo toman 2-3+ horas.",
        de: "Offizielle Turnierspiele mit strengen Auktionsregeln, Zeitlimits und ohne Hausregeln dauern durchschnittlich 30-45 Minuten. Gelegenheitsspiele mit Hausregeln dauern oft 2-3+ Stunden.",
        nl: "Officiële toernooi spellen met strikte veiling regels, tijdslimieten en zonder huisregels gemiddeld 30-45 minuten. Casual spellen met huisregels duren vaak 2-3+ uur."
      }
    },
    {
      question: {
        en: "What is the 'development rush' meta-strategy in competitive play?",
        es: "¿Qué es la meta-estrategia de 'prisa de desarrollo' en juego competitivo?",
        de: "Was ist die 'Entwicklungs-Rush' Meta-Strategie im Wettbewerbsspiel?",
        nl: "Wat is de 'ontwikkeling rush' meta-strategie in competitief spel?"
      },
      options: [
        { en: "Building slowly and saving cash reserves", es: "Construir lentamente y ahorrar reservas de efectivo", de: "Langsam bauen und Bargeldreserven sparen", nl: "Langzaam bouwen en cash reserves sparen" },
        { en: "Immediately building 3 houses on each property of first monopoly", es: "Construir inmediatamente 3 casas en cada propiedad del primer monopolio", de: "Sofort 3 Häuser auf jedem Grundstück des ersten Monopols bauen", nl: "Onmiddellijk 3 huizen bouwen op elk eigendom van eerste monopolie" },
        { en: "Only building after all players have monopolies", es: "Solo construir después de que todos los jugadores tengan monopolios", de: "Nur bauen nachdem alle Spieler Monopole haben", nl: "Alleen bouwen nadat alle spelers monopolies hebben" },
        { en: "Focusing on railroads before monopolies", es: "Enfocarse en ferrocarriles antes que monopolios", de: "Sich auf Eisenbahnen vor Monopolen konzentrieren", nl: "Focussen op spoorwegen voor monopolies" }
      ],
      correct: 1,
      explanation: {
        en: "Development rush strategy: immediately build 3 houses on each property of your first monopoly to maximize rent income ASAP, creating economic pressure on opponents before they can develop.",
        es: "Estrategia de prisa de desarrollo: construir inmediatamente 3 casas en cada propiedad de tu primer monopolio para maximizar ingresos de alquiler lo antes posible, creando presión económica en oponentes antes de que puedan desarrollar.",
        de: "Entwicklungs-Rush-Strategie: sofort 3 Häuser auf jedem Grundstück des ersten Monopols bauen um Mieteinnahmen schnellstmöglich zu maximieren, wirtschaftlichen Druck auf Gegner aufbauend bevor sie entwickeln können.",
        nl: "Ontwikkeling rush strategie: onmiddellijk 3 huizen bouwen op elk eigendom van je eerste monopolie om huurinkomsten ASAP te maximaliseren, economische druk creërend op tegenstanders voordat ze kunnen ontwikkelen."
      }
    },
    {
      question: {
        en: "What is the 'property denial' value in advanced trading?",
        es: "¿Qué es el valor de 'negación de propiedad' en comercio avanzado?",
        de: "Was ist der 'Grundstücksverweigerungs'-Wert im fortgeschrittenen Handel?",
        nl: "Wat is de 'eigendom ontkenning' waarde in geavanceerd handelen?"
      },
      options: [
        { en: "Value of preventing opponent from getting monopoly", es: "Valor de evitar que oponente obtenga monopolio", de: "Wert zu verhindern dass Gegner Monopol bekommt", nl: "Waarde van voorkomen dat tegenstander monopolie krijgt" },
        { en: "Value of refusing to trade entirely", es: "Valor de negarse a negociar completamente", de: "Wert sich komplett zu weigern zu handeln", nl: "Waarde van volledig weigeren te handelen" },
        { en: "Value of mortgaged properties", es: "Valor de propiedades hipotecadas", de: "Wert verpfändeter Grundstücke", nl: "Waarde van gehypothekeerde eigendommen" },
        { en: "Value of unused development potential", es: "Valor del potencial de desarrollo no utilizado", de: "Wert ungenutzten Entwicklungspotenzials", nl: "Waarde van ongebruikt ontwikkelingspotentieel" }
      ],
      correct: 0,
      explanation: {
        en: "Property denial value is the strategic worth of holding a property specifically to prevent an opponent from completing a monopoly, often worth more than the property's face value in trades.",
        es: "El valor de negación de propiedad es el valor estratégico de mantener una propiedad específicamente para evitar que un oponente complete un monopolio, a menudo vale más que el valor nominal de la propiedad en negociaciones.",
        de: "Grundstücksverweigerungswert ist der strategische Wert ein Grundstück zu halten speziell um zu verhindern dass ein Gegner ein Monopol vervollständigt, oft mehr wert als der Nennwert des Grundstücks im Handel.",
        nl: "Eigendom ontkenning waarde is de strategische waarde van het behouden van een eigendom specifiek om te voorkomen dat een tegenstander een monopolie voltooit, vaak meer waard dan de nominale waarde van het eigendom in ruil."
      }
    },
    {
      question: {
        en: "What is the optimal number of complete monopolies to win in a 4-player game?",
        es: "¿Cuál es el número óptimo de monopolios completos para ganar en un juego de 4 jugadores?",
        de: "Was ist die optimale Anzahl vollständiger Monopole um in einem 4-Spieler-Spiel zu gewinnen?",
        nl: "Wat is het optimale aantal volledige monopolies om te winnen in een 4-speler spel?"
      },
      options: [
        { en: "1 monopoly is sufficient if developed", es: "1 monopolio es suficiente si está desarrollado", de: "1 Monopol ist ausreichend wenn entwickelt", nl: "1 monopolie is voldoende als ontwikkeld" },
        { en: "2 monopolies provide best winning odds", es: "2 monopolios proporcionan mejores probabilidades de ganar", de: "2 Monopole bieten beste Gewinnchancen", nl: "2 monopolies bieden beste winkansen" },
        { en: "3+ monopolies needed to guarantee win", es: "3+ monopolios necesarios para garantizar victoria", de: "3+ Monopole nötig um Sieg zu garantieren", nl: "3+ monopolies nodig om winst te garanderen" },
        { en: "Number of monopolies doesn't affect winning", es: "El número de monopolios no afecta la victoria", de: "Anzahl der Monopole beeinflusst Gewinn nicht", nl: "Aantal monopolies beïnvloedt winnen niet" }
      ],
      correct: 1,
      explanation: {
        en: "Statistical analysis shows 2 developed monopolies provide optimal winning probability in 4-player games: enough economic power to bankrupt opponents while not overextending resources.",
        es: "El análisis estadístico muestra que 2 monopolios desarrollados proporcionan probabilidad de victoria óptima en juegos de 4 jugadores: suficiente poder económico para arruinar oponentes sin sobreextender recursos.",
        de: "Statistische Analyse zeigt 2 entwickelte Monopole bieten optimale Gewinnwahrscheinlichkeit in 4-Spieler-Spielen: genug wirtschaftliche Macht um Gegner bankrott zu machen ohne Ressourcen zu überanstrengen.",
        nl: "Statistische analyse toont 2 ontwikkelde monopolies bieden optimale winkans in 4-speler spellen: genoeg economische macht om tegenstanders failliet te laten gaan zonder middelen te veel uit te breiden."
      }
    },
    {
      question: {
        en: "What is the 'liquidity crisis' point in expert Monopoly analysis?",
        es: "¿Qué es el punto de 'crisis de liquidez' en el análisis experto de Monopoly?",
        de: "Was ist der 'Liquiditätskrisen'-Punkt in der Experten-Monopoly-Analyse?",
        nl: "Wat is het 'liquiditeitscrisis' punt in expert Monopoly analyse?"
      },
      options: [
        { en: "When bank runs out of money", es: "Cuando el banco se queda sin dinero", de: "Wenn Bank kein Geld mehr hat", nl: "Wanneer bank geen geld meer heeft" },
        { en: "When player has <$200 cash with developed properties nearby", es: "Cuando jugador tiene <$200 efectivo con propiedades desarrolladas cerca", de: "Wenn Spieler <$200 Bargeld hat mit entwickelten Grundstücken in der Nähe", nl: "Wanneer speler <$200 cash heeft met ontwikkelde eigendommen nabij" },
        { en: "When all properties are owned", es: "Cuando todas las propiedades son poseídas", de: "Wenn alle Grundstücke besessen werden", nl: "Wanneer alle eigendommen bezeten zijn" },
        { en: "When houses are exhausted", es: "Cuando las casas se agotan", de: "Wenn Häuser erschöpft sind", nl: "Wanneer huizen uitgeput zijn" }
      ],
      correct: 1,
      explanation: {
        en: "Liquidity crisis occurs when you have <$200 cash with high-rent developed properties ahead, forcing mortgaging decisions. Expert play aims to keep opponents in this state while avoiding it yourself.",
        es: "La crisis de liquidez ocurre cuando tienes <$200 efectivo con propiedades desarrolladas de alto alquiler adelante, forzando decisiones de hipoteca. El juego experto busca mantener oponentes en este estado mientras lo evitas tú mismo.",
        de: "Liquiditätskrise tritt auf wenn man <$200 Bargeld hat mit hochpreisigen entwickelten Grundstücken voraus, was Beliehungsentscheidungen erzwingt. Expertenspiel zielt darauf Gegner in diesem Zustand zu halten während man es selbst vermeidet.",
        nl: "Liquiditeitscrisis treedt op wanneer je <$200 cash hebt met hoge-huur ontwikkelde eigendommen vooruit, wat hypotheek beslissingen afdwingt. Expert spel richt zich op tegenstanders in deze staat houden terwijl je het zelf vermijdt."
      }
    },
    {
      question: {
        en: "What percentage of tournament games are won by the player completing first monopoly?",
        es: "¿Qué porcentaje de juegos de torneo son ganados por el jugador que completa el primer monopolio?",
        de: "Welcher Prozentsatz der Turnierspiele wird vom Spieler gewonnen der das erste Monopol vervollständigt?",
        nl: "Welk percentage van toernooi spellen wordt gewonnen door de speler die het eerste monopolie voltooit?"
      },
      options: [
        { en: "~35% (minor advantage)", es: "~35% (ventaja menor)", de: "~35% (kleiner Vorteil)", nl: "~35% (klein voordeel)" },
        { en: "~50% (no advantage)", es: "~50% (sin ventaja)", de: "~50% (kein Vorteil)", nl: "~50% (geen voordeel)" },
        { en: "~65% (significant advantage)", es: "~65% (ventaja significativa)", de: "~65% (signifikanter Vorteil)", nl: "~65% (significant voordeel)" },
        { en: "~85% (overwhelming advantage)", es: "~85% (ventaja abrumadora)", de: "~85% (überwältigender Vorteil)", nl: "~85% (overweldigend voordeel)" }
      ],
      correct: 2,
      explanation: {
        en: "Tournament data shows ~65% of games are won by whoever completes the first monopoly and develops it to 3 houses, demonstrating the critical importance of early monopoly formation and rapid development.",
        es: "Los datos de torneo muestran que ~65% de los juegos son ganados por quien completa el primer monopolio y lo desarrolla a 3 casas, demostrando la importancia crítica de la formación temprana de monopolio y desarrollo rápido.",
        de: "Turnierdaten zeigen ~65% der Spiele werden von wem auch immer das erste Monopol vervollständigt und auf 3 Häuser entwickelt gewonnen, was die kritische Wichtigkeit früher Monopolbildung und schneller Entwicklung demonstriert.",
        nl: "Toernooi gegevens tonen ~65% van de spellen worden gewonnen door wie het eerste monopolie voltooit en ontwikkelt tot 3 huizen, wat het kritieke belang van vroege monopolie vorming en snelle ontwikkeling demonstreert."
      }
    },
    {
      question: {
        en: "What is the 'cash flow analysis' method used by championship players?",
        es: "¿Qué es el método de 'análisis de flujo de efectivo' usado por jugadores de campeonato?",
        de: "Was ist die 'Cashflow-Analyse'-Methode die von Meisterschaftsspielern verwendet wird?",
        nl: "Wat is de 'cashflow analyse' methode gebruikt door kampioenschapspelers?"
      },
      options: [
        { en: "Counting exact money in hand at all times", es: "Contar dinero exacto en mano en todo momento", de: "Genaues Bargeld in der Hand jederzeit zählen", nl: "Exact geld in handen tellen te allen tijde" },
        { en: "Tracking income vs expense per circuit to predict survival rounds", es: "Rastrear ingresos vs gastos por circuito para predecir rondas de supervivencia", de: "Einkommen vs Ausgaben pro Umrundung verfolgen um Überlebensrunden vorherzusagen", nl: "Inkomsten vs uitgaven per ronde volgen om overlevingsrondes te voorspellen" },
        { en: "Recording all transactions on paper", es: "Registrar todas las transacciones en papel", de: "Alle Transaktionen auf Papier aufzeichnen", nl: "Alle transacties op papier registreren" },
        { en: "Estimating property values only", es: "Estimar solo valores de propiedad", de: "Nur Grundstückswerte schätzen", nl: "Alleen eigendomswaarden schatten" }
      ],
      correct: 1,
      explanation: {
        en: "Championship players mentally track expected income (GO + owned property rents collected) vs expected expenses (opponent rents paid) per circuit to predict how many circuits they can survive, informing aggressive vs defensive strategy choices.",
        es: "Los jugadores de campeonato rastrean mentalmente ingresos esperados (SALIDA + alquileres de propiedades poseídas cobrados) vs gastos esperados (alquileres de oponentes pagados) por circuito para predecir cuántos circuitos pueden sobrevivir, informando elecciones de estrategia agresiva vs defensiva.",
        de: "Meisterschaftsspieler verfolgen mental erwartetes Einkommen (LOS + Mieten gesammelter Grundstücke) vs erwartete Ausgaben (Mieten an Gegner gezahlt) pro Umrundung um vorherzusagen wie viele Umrundungen sie überleben können, was aggressive vs defensive Strategiewahlen informiert.",
        nl: "Kampioenschapsspelers volgen mentaal verwachte inkomsten (START + verzamelde huren van bezeten eigendommen) vs verwachte uitgaven (huren aan tegenstanders betaald) per ronde om te voorspellen hoeveel rondes ze kunnen overleven, wat agressieve vs defensieve strategie keuzes informeert."
      }
    },
    {
      question: {
        en: "What is the 'building window' concept in competitive Monopoly?",
        es: "¿Qué es el concepto de 'ventana de construcción' en Monopoly competitivo?",
        de: "Was ist das 'Baufenster'-Konzept im Wettbewerbs-Monopoly?",
        nl: "Wat is het 'bouw venster' concept in competitief Monopoly?"
      },
      options: [
        { en: "Time limit for building between turns", es: "Límite de tiempo para construir entre turnos", de: "Zeitlimit für Bauen zwischen Runden", nl: "Tijdslimiet voor bouwen tussen beurten" },
        { en: "Optimal moment to develop before opponents land on your properties", es: "Momento óptimo para desarrollar antes de que oponentes caigan en tus propiedades", de: "Optimaler Moment zu entwickeln bevor Gegner auf Grundstücken landen", nl: "Optimaal moment om te ontwikkelen voordat tegenstanders op je eigendommen landen" },
        { en: "Physical space needed to place houses", es: "Espacio físico necesario para colocar casas", de: "Physischer Raum benötigt um Häuser zu platzieren", nl: "Fysieke ruimte nodig om huizen te plaatsen" },
        { en: "Number of turns allowed for construction", es: "Número de turnos permitidos para construcción", de: "Anzahl der Runden erlaubt für Bau", nl: "Aantal beurten toegestaan voor constructie" }
      ],
      correct: 1,
      explanation: {
        en: "Building window is the critical timing decision of when to develop properties: build too early and deplete cash reserves; too late and opponents bypass your undeveloped monopoly. Expert play identifies optimal building moments based on opponent positions and cash flow.",
        es: "La ventana de construcción es la decisión de momento crítico de cuándo desarrollar propiedades: construir demasiado temprano y agotar reservas de efectivo; demasiado tarde y oponentes evitan tu monopolio sin desarrollar. El juego experto identifica momentos óptimos de construcción basados en posiciones de oponentes y flujo de efectivo.",
        de: "Baufenster ist die kritische Timing-Entscheidung wann Grundstücke zu entwickeln: zu früh bauen erschöpft Bargeldreserven; zu spät und Gegner umgehen unentwickeltes Monopol. Expertenspiel identifiziert optimale Baumomente basierend auf Gegnerpositionen und Cashflow.",
        nl: "Bouw venster is de kritieke timing beslissing van wanneer eigendommen te ontwikkelen: te vroeg bouwen put cash reserves uit; te laat en tegenstanders omzeilen je onontwikkelde monopolie. Expert spel identificeert optimale bouw momenten gebaseerd op tegenstander posities en cashflow."
      }
    },
    {
      question: {
        en: "What does the 'monopoly paradox' refer to in game theory analysis?",
        es: "¿A qué se refiere la 'paradoja del monopolio' en el análisis de teoría de juegos?",
        de: "Worauf bezieht sich das 'Monopol-Paradoxon' in der Spieltheorie-Analyse?",
        nl: "Waar verwijst de 'monopolie paradox' naar in speltheorie analyse?"
      },
      options: [
        { en: "Having too many monopolies weakens position", es: "Tener demasiados monopolios debilita la posición", de: "Zu viele Monopole schwächen Position", nl: "Te veel monopolies verzwakt positie" },
        { en: "Completing monopoly makes you primary target for trade denial", es: "Completar monopolio te hace objetivo principal para negación de comercio", de: "Monopol vervollständigen macht zum Hauptziel für Handelsverweigerung", nl: "Monopolie voltooien maakt je primair doelwit voor handelsweigering" },
        { en: "Best strategy is to avoid monopolies entirely", es: "La mejor estrategia es evitar monopolios completamente", de: "Beste Strategie ist Monopole komplett zu vermeiden", nl: "Beste strategie is monopolies volledig vermijden" },
        { en: "Players with no monopolies win most often", es: "Jugadores sin monopolios ganan más a menudo", de: "Spieler ohne Monopole gewinnen am häufigsten", nl: "Spelers zonder monopolies winnen het vaakst" }
      ],
      correct: 1,
      explanation: {
        en: "Monopoly paradox: completing a monopoly makes you the primary threat, causing opponents to collude against you in trades and refuse deals that benefit you, requiring diplomatic skill to navigate.",
        es: "Paradoja del monopolio: completar un monopolio te hace la amenaza principal, causando que oponentes coludan contra ti en negociaciones y rechacen acuerdos que te beneficien, requiriendo habilidad diplomática para navegar.",
        de: "Monopol-Paradoxon: ein Monopol zu vervollständigen macht dich zur Hauptbedrohung, veranlasst Gegner gegen dich im Handel zu kolludieren und Deals abzulehnen die dir nutzen, erfordert diplomatisches Geschick zur Navigation.",
        nl: "Monopolie paradox: een monopolie voltooien maakt je de primaire bedreiging, waardoor tegenstanders samenzweren tegen je in handel en deals weigeren die jou bevoordelen, wat diplomatieke vaardigheid vereist om te navigeren."
      }
    },
    {
      question: {
        en: "What is the 'rent efficiency ratio' used by data-driven tournament players?",
        es: "¿Qué es la 'relación de eficiencia de alquiler' usada por jugadores de torneo basados en datos?",
        de: "Was ist das 'Mieteffizienz-Verhältnis' das von datengetriebenen Turnierspielern verwendet wird?",
        nl: "Wat is de 'huur efficiëntie ratio' gebruikt door data-gedreven toernooi spelers?"
      },
      options: [
        { en: "Rent collected divided by property purchase price", es: "Alquiler cobrado dividido por precio de compra de propiedad", de: "Miete gesammelt geteilt durch Grundstückskaufpreis", nl: "Huur verzameld gedeeld door eigendom aankoopprijs" },
        { en: "Total rent divided by development cost (property + buildings)", es: "Alquiler total dividido por costo de desarrollo (propiedad + edificios)", de: "Gesamtmiete geteilt durch Entwicklungskosten (Grundstück + Gebäude)", nl: "Totale huur gedeeld door ontwikkelingskosten (eigendom + gebouwen)" },
        { en: "Expected rent per circuit divided by total investment", es: "Alquiler esperado por circuito dividido por inversión total", de: "Erwartete Miete pro Umrundung geteilt durch Gesamtinvestition", nl: "Verwachte huur per ronde gedeeld door totale investering" },
        { en: "Average rent collected per turn", es: "Alquiler promedio cobrado por turno", de: "Durchschnittliche Miete pro Runde gesammelt", nl: "Gemiddelde huur verzameld per beurt" }
      ],
      correct: 2,
      explanation: {
        en: "Rent efficiency ratio = (expected rent per circuit × landing probability) ÷ total investment. Used to compare monopoly value: orange properties typically have highest ratio (12-15%), while dark blue lowest (4-6%).",
        es: "Relación de eficiencia de alquiler = (alquiler esperado por circuito × probabilidad de caída) ÷ inversión total. Usado para comparar valor de monopolio: propiedades naranjas típicamente tienen relación más alta (12-15%), mientras azul oscuro más baja (4-6%).",
        de: "Mieteffizienz-Verhältnis = (erwartete Miete pro Umrundung × Landewahrscheinlichkeit) ÷ Gesamtinvestition. Verwendet um Monopolwert zu vergleichen: orange Grundstücke haben typisch höchstes Verhältnis (12-15%), während dunkelblau niedrigstes (4-6%).",
        nl: "Huur efficiëntie ratio = (verwachte huur per ronde × landingswaarschijnlijkheid) ÷ totale investering. Gebruikt om monopolie waarde te vergelijken: oranje eigendommen hebben typisch hoogste ratio (12-15%), terwijl donkerblauw laagste (4-6%)."
      }
    },
    {
      question: {
        en: "What is the advanced concept of 'positional equity' in Monopoly?",
        es: "¿Qué es el concepto avanzado de 'equidad posicional' en Monopoly?",
        de: "Was ist das fortgeschrittene Konzept der 'Positions-Equity' in Monopoly?",
        nl: "Wat is het geavanceerde concept van 'positionele equity' in Monopoly?"
      },
      options: [
        { en: "Your current board position relative to developed properties", es: "Tu posición actual del tablero relativa a propiedades desarrolladas", de: "Ihre aktuelle Brettposition relativ zu entwickelten Grundstücken", nl: "Je huidige bordpositie relatief tot ontwikkelde eigendommen" },
        { en: "Total value of properties you own", es: "Valor total de propiedades que posees", de: "Gesamtwert der Grundstücke die Sie besitzen", nl: "Totale waarde van eigendommen die je bezit" },
        { en: "Probability of completing next monopoly", es: "Probabilidad de completar próximo monopolio", de: "Wahrscheinlichkeit nächstes Monopol zu vervollständigen", nl: "Waarschijnlijkheid van voltooien van volgende monopolie" },
        { en: "Number of properties held compared to opponents", es: "Número de propiedades poseídas comparado con oponentes", de: "Anzahl der Grundstücke verglichen mit Gegnern", nl: "Aantal eigendommen bezeten vergeleken met tegenstanders" }
      ],
      correct: 0,
      explanation: {
        en: "Positional equity quantifies your advantage/disadvantage based on current board position: being 2-6 spaces before opponents' developed properties increases equity, while being 2-6 behind decreases it. Used to value position-for-cash trades and jail decisions.",
        es: "La equidad posicional cuantifica tu ventaja/desventaja basada en posición actual del tablero: estar 2-6 espacios antes de propiedades desarrolladas de oponentes aumenta equidad, mientras estar 2-6 detrás la disminuye. Usado para valorar negociaciones de posición-por-efectivo y decisiones de cárcel.",
        de: "Positions-Equity quantifiziert Ihren Vorteil/Nachteil basierend auf aktueller Brettposition: 2-6 Felder vor entwickelten Grundstücken der Gegner erhöht Equity, während 2-6 dahinter sie verringert. Verwendet um Position-für-Bargeld-Handel und Gefängnisentscheidungen zu bewerten.",
        nl: "Positionele equity kwantificeert je voordeel/nadeel gebaseerd op huidige bordpositie: 2-6 vakken voor ontwikkelde eigendommen van tegenstanders verhoogt equity, terwijl 2-6 erachter het verlaagt. Gebruikt om positie-voor-cash ruilen en gevangenis beslissingen te waarderen."
      }
    },
    {
      question: {
        en: "What is the 'critical mass threshold' in Monopoly economics?",
        es: "¿Qué es el 'umbral de masa crítica' en la economía de Monopoly?",
        de: "Was ist die 'kritische Massenschwelle' in der Monopoly-Ökonomie?",
        nl: "Wat is de 'kritieke massa drempel' in Monopoly economie?"
      },
      options: [
        { en: "When bank runs out of bills", es: "Cuando el banco se queda sin billetes", de: "Wenn Bank keine Scheine mehr hat", nl: "Wanneer bank geen biljetten meer heeft" },
        { en: "When total development reaches ~$2000-2500 causing bankruptcies", es: "Cuando el desarrollo total alcanza ~$2000-2500 causando quiebras", de: "Wenn Gesamtentwicklung ~$2000-2500 erreicht was Bankrotte verursacht", nl: "Wanneer totale ontwikkeling ~$2000-2500 bereikt wat faillissementen veroorzaakt" },
        { en: "When all properties are owned", es: "Cuando todas las propiedades son poseídas", de: "Wenn alle Grundstücke besessen werden", nl: "Wanneer alle eigendommen bezeten zijn" },
        { en: "When 3+ players go bankrupt", es: "Cuando 3+ jugadores quiebran", de: "Wenn 3+ Spieler bankrott gehen", nl: "Wanneer 3+ spelers failliet gaan" }
      ],
      correct: 1,
      explanation: {
        en: "Critical mass occurs when total board development (all buildings) reaches $2000-2500, creating sufficient rent pressure to force bankruptcies. Games typically resolve within 2-3 circuits after reaching this threshold.",
        es: "La masa crítica ocurre cuando el desarrollo total del tablero (todos los edificios) alcanza $2000-2500, creando presión de alquiler suficiente para forzar quiebras. Los juegos típicamente se resuelven dentro de 2-3 circuitos después de alcanzar este umbral.",
        de: "Kritische Masse tritt auf wenn Gesamtbrettentwicklung (alle Gebäude) $2000-2500 erreicht, was ausreichenden Mietdruck schafft um Bankrotte zu erzwingen. Spiele lösen sich typisch innerhalb 2-3 Umrundungen nach Erreichen dieser Schwelle.",
        nl: "Kritieke massa treedt op wanneer totale bord ontwikkeling (alle gebouwen) $2000-2500 bereikt, voldoende huur druk creërend om faillissementen af te dwingen. Spellen lossen typisch op binnen 2-3 rondes na het bereiken van deze drempel."
      }
    },
    {
      question: {
        en: "What is the 'asymmetric trade value' principle in championship negotiations?",
        es: "¿Qué es el principio de 'valor de comercio asimétrico' en negociaciones de campeonato?",
        de: "Was ist das 'asymmetrische Handelswert'-Prinzip in Meisterschaftsverhandlungen?",
        nl: "Wat is het 'asymmetrische handelswaarde' principe in kampioenschaps onderhandelingen?"
      },
      options: [
        { en: "Trading properties of equal face value", es: "Negociar propiedades de igual valor nominal", de: "Grundstücke gleichen Nennwerts handeln", nl: "Eigendommen van gelijke nominale waarde ruilen" },
        { en: "Same property has different strategic value to different players", es: "La misma propiedad tiene diferente valor estratégico para diferentes jugadores", de: "Gleiches Grundstück hat unterschiedlichen strategischen Wert für verschiedene Spieler", nl: "Hetzelfde eigendom heeft verschillende strategische waarde voor verschillende spelers" },
        { en: "Always trading one-for-one", es: "Siempre negociar uno-por-uno", de: "Immer eins-zu-eins handeln", nl: "Altijd één-voor-één ruilen" },
        { en: "Never trading with same player twice", es: "Nunca negociar con el mismo jugador dos veces", de: "Nie zweimal mit gleichem Spieler handeln", nl: "Nooit twee keer met dezelfde speler ruilen" }
      ],
      correct: 1,
      explanation: {
        en: "Asymmetric value: a property completing your orange monopoly is worth $800+ to you but only face value ($180-200) to opponent. Expert negotiators exploit this value difference to create mutually beneficial but asymmetrically valuable trades.",
        es: "Valor asimétrico: una propiedad completando tu monopolio naranja vale $800+ para ti pero solo valor nominal ($180-200) para oponente. Negociadores expertos explotan esta diferencia de valor para crear negociaciones mutuamente beneficiosas pero asimétricamente valiosas.",
        de: "Asymmetrischer Wert: ein Grundstück das Ihr orangenes Monopol vervollständigt ist $800+ für Sie wert aber nur Nennwert ($180-200) für Gegner. Expertenverhandler nutzen diesen Wertunterschied um gegenseitig vorteilhafte aber asymmetrisch wertvolle Handel zu schaffen.",
        nl: "Asymmetrische waarde: een eigendom dat je oranje monopolie voltooit is $800+ waard voor jou maar slechts nominale waarde ($180-200) voor tegenstander. Expert onderhandelaars exploiteren dit waarde verschil om wederzijds voordelige maar asymmetrisch waardevolle ruilen te creëren."
      }
    },
    {
      question: {
        en: "What does 'tournament endgame theory' teach about final 1v1 situations?",
        es: "¿Qué enseña la 'teoría de final de torneo' sobre situaciones finales 1v1?",
        de: "Was lehrt die 'Turnier-Endspiel-Theorie' über finale 1v1-Situationen?",
        nl: "Wat leert 'toernooi eindspel theorie' over finale 1v1 situaties?"
      },
      options: [
        { en: "Player with most properties wins", es: "Jugador con más propiedades gana", de: "Spieler mit meisten Grundstücken gewinnt", nl: "Speler met meeste eigendommen wint" },
        { en: "Player with most cash wins", es: "Jugador con más efectivo gana", de: "Spieler mit meistem Bargeld gewinnt", nl: "Speler met meeste cash wint" },
        { en: "Player with superior development density wins in ~3-5 circuits", es: "Jugador con densidad de desarrollo superior gana en ~3-5 circuitos", de: "Spieler mit überlegener Entwicklungsdichte gewinnt in ~3-5 Umrundungen", nl: "Speler met superieure ontwikkelingsdichtheid wint in ~3-5 rondes" },
        { en: "1v1 games take 10+ circuits to resolve", es: "Juegos 1v1 toman 10+ circuitos para resolver", de: "1v1-Spiele brauchen 10+ Umrundungen zur Auflösung", nl: "1v1 spellen nemen 10+ rondes om op te lossen" }
      ],
      correct: 2,
      explanation: {
        en: "Tournament endgame analysis: in 1v1, player with higher 'development density' (total rent capacity per $100 invested) wins in 3-5 circuits through cumulative rent advantage, making late-game development efficiency critical.",
        es: "Análisis de final de torneo: en 1v1, jugador con mayor 'densidad de desarrollo' (capacidad de alquiler total por $100 invertido) gana en 3-5 circuitos a través de ventaja de alquiler acumulativa, haciendo la eficiencia de desarrollo de juego tardío crítica.",
        de: "Turnier-Endspiel-Analyse: in 1v1 gewinnt Spieler mit höherer 'Entwicklungsdichte' (gesamte Mietkapazität pro $100 investiert) in 3-5 Umrundungen durch kumulative Mietvorteil, was späte-Spiel-Entwicklungseffizienz kritisch macht.",
        nl: "Toernooi eindspel analyse: in 1v1 wint speler met hogere 'ontwikkelingsdichtheid' (totale huur capaciteit per $100 geïnvesteerd) in 3-5 rondes door cumulatief huur voordeel, wat laat-spel ontwikkelings efficiëntie kritiek maakt."
      }
    }
  ];

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = questions;
  } else {
    window.boardGamesMonopolyLevel8 = questions;
  }
})();
