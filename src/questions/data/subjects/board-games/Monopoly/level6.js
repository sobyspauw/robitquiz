// Quiz Template - Level 6: Bord spelletjes - Monopoly
(function() {
  const level6 = {
  name: {
    en: "Monopoly",
    es: "Monopoly",
    de: "Monopoly",
    nl: "Monopoly"
  },
  questions: [
    {
      question: {
        en: "What's the most-landed-on space in Monopoly according to probability studies?",
        es: "¿Cuál es el espacio en el que se cae con más frecuencia en Monopoly según estudios de probabilidad?",
        de: "Auf welches Feld landet man laut Wahrscheinlichkeitsstudien in Monopoly am häufigsten?",
        nl: "Op welk vak wordt het vaakst geland in Monopoly volgens waarschijnlijkheidsstudies?"
      },
      options: [
        {
          en: "GO",
          es: "SALIDA",
          de: "LOS",
          nl: "START"
        },
        {
          en: "Illinois Avenue (Red)",
          es: "Illinois Avenue (Rojo)",
          de: "Illinois Avenue (Rot)",
          nl: "Illinois Avenue (Rood)"
        },
        {
          en: "Boardwalk",
          es: "Boardwalk",
          de: "Boardwalk",
          nl: "Boardwalk"
        },
        {
          en: "Free Parking",
          es: "Estacionamiento Gratuito",
          de: "Freies Parken",
          nl: "Gratis Parkeren"
        }
      ],
      correct: 1,
      explanation: {
        en: "Illinois Avenue is the most-landed-on property due to its position relative to Jail and Chance card movements.",
        es: "Illinois Avenue es la propiedad en la que más se cae debido a su posición relativa a la Cárcel y los movimientos de las cartas de Suerte.",
        de: "Illinois Avenue ist das am häufigsten besuchte Grundstück aufgrund seiner Position relativ zum Gefängnis und Ereigniskartenbewegungen.",
        nl: "Illinois Avenue is het vaakst bezochte eigendom vanwege de positie ten opzichte van de Gevangenis en Kanskaartbewegingen."
      }
    },
    {
      question: {
        en: "What percentage of dice rolls result in doubles?",
        es: "¿Qué porcentaje de tiradas de dados resultan en dobles?",
        de: "Welcher Prozentsatz der Würfelwürfe ergibt einen Pasch?",
        nl: "Welk percentage dobbelsteenworpen resulteert in dubbel?"
      },
      options: [
        {
          en: "12.5%",
          es: "12.5%",
          de: "12.5%",
          nl: "12.5%"
        },
        {
          en: "16.7%",
          es: "16.7%",
          de: "16.7%",
          nl: "16.7%"
        },
        {
          en: "20%",
          es: "20%",
          de: "20%",
          nl: "20%"
        },
        {
          en: "25%",
          es: "25%",
          de: "25%",
          nl: "25%"
        }
      ],
      correct: 1,
      explanation: {
        en: "6 out of 36 possible dice combinations are doubles (1-1, 2-2, 3-3, 4-4, 5-5, 6-6), which equals 16.7%.",
        es: "6 de 36 combinaciones posibles de dados son dobles (1-1, 2-2, 3-3, 4-4, 5-5, 6-6), lo que equivale al 16.7%.",
        de: "6 von 36 möglichen Würfelkombinationen sind Paschs (1-1, 2-2, 3-3, 4-4, 5-5, 6-6), was 16,7% entspricht.",
        nl: "6 van de 36 mogelijke dobbelsteencombinaties zijn dubbel (1-1, 2-2, 3-3, 4-4, 5-5, 6-6), wat gelijk is aan 16.7%."
      }
    },
    {
      question: {
        en: "Why is the orange property group considered optimal by mathematicians?",
        es: "¿Por qué los matemáticos consideran óptimo el grupo de propiedades naranja?",
        de: "Warum wird die orange Grundstücksgruppe von Mathematikern als optimal angesehen?",
        nl: "Waarom wordt de oranje eigendomsgroep door wiskundigen als optimaal beschouwd?"
      },
      options: [
        {
          en: "It's the cheapest to develop",
          es: "Es el más barato para desarrollar",
          de: "Es ist am günstigsten zu entwickeln",
          nl: "Het is het goedkoopst om te ontwikkelen"
        },
        {
          en: "High landing frequency + affordable development + strong ROI",
          es: "Alta frecuencia de caída + desarrollo asequible + fuerte ROI",
          de: "Hohe Besuchsfrequenz + bezahlbare Entwicklung + starker ROI",
          nl: "Hoge landingsfrequentie + betaalbare ontwikkeling + sterke ROI"
        },
        {
          en: "It has the highest rent values",
          es: "Tiene los valores de alquiler más altos",
          de: "Es hat die höchsten Mietwerte",
          nl: "Het heeft de hoogste huurwaarden"
        },
        {
          en: "It's positioned perfectly for Chance cards",
          es: "Está posicionado perfectamente para las cartas de Suerte",
          de: "Es ist perfekt für Ereigniskarten positioniert",
          nl: "Het is perfect gepositioneerd voor Kanskaarten"
        }
      ],
      correct: 1,
      explanation: {
        en: "Orange combines high traffic (6-9 spaces from Jail), moderate house cost ($100), and excellent rent ($450-800), making it mathematically optimal.",
        es: "Naranja combina alto tráfico (6-9 espacios de la Cárcel), costo moderado de casa ($100) y excelente alquiler ($450-800), haciéndolo matemáticamente óptimo.",
        de: "Orange kombiniert hohen Verkehr (6-9 Felder vom Gefängnis), moderate Hauskosten ($100) und ausgezeichnete Miete ($450-800), was es mathematisch optimal macht.",
        nl: "Oranje combineert hoog verkeer (6-9 vakken van Gevangenis), gematigde huiskosten ($100) en uitstekende huur ($450-800), wat het wiskundig optimaal maakt."
      }
    },
    {
      question: {
        en: "What's the expected ROI timeline for owning all 4 railroads?",
        es: "¿Cuál es la línea de tiempo de ROI esperada para poseer los 4 ferrocarriles?",
        de: "Wie ist die erwartete ROI-Zeitlinie für den Besitz aller 4 Eisenbahnen?",
        nl: "Wat is de verwachte ROI-tijdlijn voor het bezitten van alle 4 spoorwegen?"
      },
      options: [
        {
          en: "3-5 rounds to break even on $800 investment",
          es: "3-5 rondas para alcanzar el punto de equilibrio en inversión de $800",
          de: "3-5 Runden bis Break-even bei 800 $ Investition",
          nl: "3-5 rondes om break-even te draaien op $800 investering"
        },
        {
          en: "7-9 rounds to break even",
          es: "7-9 rondas para alcanzar el punto de equilibrio",
          de: "7-9 Runden bis Break-even",
          nl: "7-9 rondes om break-even te draaien"
        },
        {
          en: "10-12 rounds to break even",
          es: "10-12 rondas para alcanzar el punto de equilibrio",
          de: "10-12 Runden bis Break-even",
          nl: "10-12 rondes om break-even te draaien"
        },
        {
          en: "Railroads never provide positive ROI",
          es: "Los ferrocarriles nunca proporcionan ROI positivo",
          de: "Eisenbahnen bieten nie einen positiven ROI",
          nl: "Spoorwegen bieden nooit positieve ROI"
        }
      ],
      correct: 1,
      explanation: {
        en: "With 4 railroads collecting $200/landing and ~2-3 landings per round across all players, it takes 7-9 rounds to recover the $800 cost.",
        es: "Con 4 ferrocarriles cobrando $200/caída y ~2-3 caídas por ronda en todos los jugadores, toma 7-9 rondas recuperar el costo de $800.",
        de: "Mit 4 Eisenbahnen, die 200 $/Landung einnehmen und ~2-3 Landungen pro Runde über alle Spieler, dauert es 7-9 Runden, um die 800 $ Kosten zu amortisieren.",
        nl: "Met 4 spoorwegen die $200/landing innen en ~2-3 landingen per ronde over alle spelers, duurt het 7-9 rondes om de $800 kosten terug te verdienen."
      }
    },
    {
      question: {
        en: "In expert play, when is the 'nuclear option' (trading to create multiple monopolies) justified?",
        es: "En juego experto, ¿cuándo se justifica la 'opción nuclear' (negociar para crear múltiples monopolios)?",
        de: "Wann ist im Expertenspiel die 'nukleare Option' (Handel zur Schaffung mehrerer Monopole) gerechtfertigt?",
        nl: "Wanneer is in expertspel de 'nucleaire optie' (ruilen om meerdere monopolies te creëren) gerechtvaardigd?"
      },
      options: [
        {
          en: "Never - always avoid giving opponents monopolies",
          es: "Nunca - siempre evita dar monopolios a los oponentes",
          de: "Niemals - vermeiden Sie immer, Gegnern Monopole zu geben",
          nl: "Nooit - vermijd altijd tegenstanders monopolies te geven"
        },
        {
          en: "When you get the better monopoly and more cash",
          es: "Cuando obtienes el mejor monopolio y más efectivo",
          de: "Wenn Sie das bessere Monopol und mehr Bargeld bekommen",
          nl: "Wanneer je het betere monopolie en meer geld krijgt"
        },
        {
          en: "When game is stalled with no monopolies after 30+ minutes",
          es: "Cuando el juego está estancado sin monopolios después de 30+ minutos",
          de: "Wenn das Spiel nach 30+ Minuten ohne Monopole festgefahren ist",
          nl: "Wanneer het spel vastloopt zonder monopolies na 30+ minuten"
        },
        {
          en: "Both B and C can justify it",
          es: "Tanto B como C pueden justificarlo",
          de: "Sowohl B als auch C können es rechtfertigen",
          nl: "Zowel B als C kunnen het rechtvaardigen"
        }
      ],
      correct: 3,
      explanation: {
        en: "The nuclear option is justified when you gain advantage (better monopoly+cash) OR to break a deadlock in timed/tournament games.",
        es: "La opción nuclear se justifica cuando ganas ventaja (mejor monopolio+efectivo) O para romper un estancamiento en juegos cronometrados/torneo.",
        de: "Die nukleare Option ist gerechtfertigt, wenn Sie Vorteile erlangen (besseres Monopol+Bargeld) ODER um eine Pattsituation in zeitlich begrenzten/Turnierspielen zu durchbrechen.",
        nl: "De nucleaire optie is gerechtvaardigd wanneer je voordeel behaalt (beter monopolie+geld) OF om een patstelling te doorbreken in getimede/toernooispelen."
      }
    },
    {
      question: {
        en: "What's the probability of landing in Jail (by any means) in a given turn?",
        es: "¿Cuál es la probabilidad de caer en la Cárcel (por cualquier medio) en un turno dado?",
        de: "Wie hoch ist die Wahrscheinlichkeit, in einer bestimmten Runde ins Gefängnis zu kommen (auf jede Art)?",
        nl: "Wat is de kans om in de Gevangenis te belanden (op welke manier dan ook) in een bepaalde beurt?"
      },
      options: [
        {
          en: "~5-7%",
          es: "~5-7%",
          de: "~5-7%",
          nl: "~5-7%"
        },
        {
          en: "~10-12%",
          es: "~10-12%",
          de: "~10-12%",
          nl: "~10-12%"
        },
        {
          en: "~15-17%",
          es: "~15-17%",
          de: "~15-17%",
          nl: "~15-17%"
        },
        {
          en: "~20-22%",
          es: "~20-22%",
          de: "~20-22%",
          nl: "~20-22%"
        }
      ],
      correct: 0,
      explanation: {
        en: "About 5-7% chance per turn: landing on 'Go to Jail' space, 3rd doubles, or 'Go to Jail' Chance/Community Chest cards.",
        es: "Alrededor de 5-7% de probabilidad por turno: caer en el espacio 'Ir a la Cárcel', 3er doble, o cartas de 'Ir a la Cárcel' de Suerte/Caja de Comunidad.",
        de: "Etwa 5-7% Chance pro Runde: auf 'Gehe ins Gefängnis'-Feld landen, 3. Pasch oder 'Gehe ins Gefängnis' Ereignis-/Gemeinschaftskarten.",
        nl: "Ongeveer 5-7% kans per beurt: landen op 'Ga naar de Gevangenis'-vak, 3e dubbel, of 'Ga naar de Gevangenis' Kans-/Algemeen Fonds-kaarten."
      }
    },
    {
      question: {
        en: "Why do expert players sometimes intentionally create a 'house shortage'?",
        es: "¿Por qué los jugadores expertos a veces crean intencionalmente una 'escasez de casas'?",
        de: "Warum schaffen erfahrene Spieler manchmal absichtlich eine 'Hausknappheit'?",
        nl: "Waarom creëren ervaren spelers soms opzettelijk een 'huizenschaarste'?"
      },
      options: [
        {
          en: "To drive up house prices",
          es: "Para aumentar los precios de las casas",
          de: "Um die Hauspreise zu erhöhen",
          nl: "Om huizenprijzen op te drijven"
        },
        {
          en: "To block opponents from building by buying all 32 houses",
          es: "Para bloquear a los oponentes de construir comprando las 32 casas",
          de: "Um Gegner am Bauen zu hindern, indem man alle 32 Häuser kauft",
          nl: "Om tegenstanders te blokkeren van bouwen door alle 32 huizen te kopen"
        },
        {
          en: "To force the bank to make more houses",
          es: "Para forzar al banco a hacer más casas",
          de: "Um die Bank zu zwingen, mehr Häuser zu bauen",
          nl: "Om de bank te dwingen meer huizen te maken"
        },
        {
          en: "It's a house rule variant, not official strategy",
          es: "Es una variante de regla de casa, no estrategia oficial",
          de: "Es ist eine Hausregelvariante, keine offizielle Strategie",
          nl: "Het is een huisregelvariatie, geen officiële strategie"
        }
      ],
      correct: 1,
      explanation: {
        en: "Keeping 4 houses per property (not upgrading to hotels) monopolizes all 32 houses, preventing opponents from building anything.",
        es: "Mantener 4 casas por propiedad (sin mejorar a hoteles) monopoliza las 32 casas, impidiendo que los oponentes construyan nada.",
        de: "4 Häuser pro Grundstück zu behalten (nicht zu Hotels aufzuwerten) monopolisiert alle 32 Häuser und verhindert, dass Gegner etwas bauen.",
        nl: "4 huizen per eigendom houden (niet upgraden naar hotels) monopoliseert alle 32 huizen, waardoor tegenstanders niets kunnen bouwen."
      }
    },
    {
      question: {
        en: "What's the expected value (EV) of owning both utilities in a 4-player game?",
        es: "¿Cuál es el valor esperado (EV) de poseer ambos servicios públicos en un juego de 4 jugadores?",
        de: "Was ist der Erwartungswert (EV) des Besitzes beider Versorgungsunternehmen in einem 4-Spieler-Spiel?",
        nl: "Wat is de verwachte waarde (EV) van het bezitten van beide nutsbedrijven in een 4-spelersspel?"
      },
      options: [
        {
          en: "~$15-20 per round from all opponents",
          es: "~$15-20 por ronda de todos los oponentes",
          de: "~15-20 $ pro Runde von allen Gegnern",
          nl: "~$15-20 per ronde van alle tegenstanders"
        },
        {
          en: "~$30-40 per round from all opponents",
          es: "~$30-40 por ronda de todos los oponentes",
          de: "~30-40 $ pro Runde von allen Gegnern",
          nl: "~$30-40 per ronde van alle tegenstanders"
        },
        {
          en: "~$50-60 per round from all opponents",
          es: "~$50-60 por ronda de todos los oponentes",
          de: "~50-60 $ pro Runde von allen Gegnern",
          nl: "~$50-60 per ronde van alle tegenstanders"
        },
        {
          en: "~$70-80 per round from all opponents",
          es: "~$70-80 por ronda de todos los oponentes",
          de: "~70-80 $ pro Runde von allen Gegnern",
          nl: "~$70-80 per ronde van alle tegenstanders"
        }
      ],
      correct: 0,
      explanation: {
        en: "With both utilities (10× dice), averaging 7 per roll, and low landing frequency, expect ~$15-20/round - poor value for $300 investment.",
        es: "Con ambos servicios (10× dados), promediando 7 por tirada, y baja frecuencia de caída, espera ~$15-20/ronda - mal valor para inversión de $300.",
        de: "Mit beiden Versorgungsunternehmen (10× Würfel), durchschnittlich 7 pro Wurf, und geringer Besuchsfrequenz, erwarten Sie ~15-20 $/Runde - schlechter Wert für 300 $ Investition.",
        nl: "Met beide nutsbedrijven (10× dobbelstenen), gemiddeld 7 per worp, en lage landingsfrequentie, verwacht ~$15-20/ronde - slechte waarde voor $300 investering."
      }
    },
    {
      question: {
        en: "In competitive play, what's the optimal number of houses to build before considering hotels?",
        es: "En juego competitivo, ¿cuál es el número óptimo de casas para construir antes de considerar hoteles?",
        de: "Wie viele Häuser sollte man im Wettkampfspiel bauen, bevor man Hotels in Betracht zieht?",
        nl: "Wat is in competitief spel het optimale aantal huizen om te bouwen voordat je hotels overweegt?"
      },
      options: [
        {
          en: "Build hotels ASAP for maximum rent",
          es: "Construir hoteles lo antes posible para alquiler máximo",
          de: "Hotels so schnell wie möglich für maximale Miete bauen",
          nl: "Bouw hotels zo snel mogelijk voor maximale huur"
        },
        {
          en: "3 houses per property is the sweet spot",
          es: "3 casas por propiedad es el punto óptimo",
          de: "3 Häuser pro Grundstück ist der ideale Punkt",
          nl: "3 huizen per eigendom is het optimale punt"
        },
        {
          en: "4 houses per property maximizes rent/cost ratio",
          es: "4 casas por propiedad maximiza la relación alquiler/costo",
          de: "4 Häuser pro Grundstück maximiert das Miete/Kosten-Verhältnis",
          nl: "4 huizen per eigendom maximaliseert huur/kostenverhouding"
        },
        {
          en: "It varies by property group color",
          es: "Varía según el color del grupo de propiedades",
          de: "Es variiert je nach Farbgruppe",
          nl: "Het varieert per eigendomsgroepkleur"
        }
      ],
      correct: 1,
      explanation: {
        en: "3 houses offers the best rent increase per dollar spent - the jump to 4 houses and hotels costs more but adds less relative value.",
        es: "3 casas ofrece el mejor aumento de alquiler por dólar gastado - el salto a 4 casas y hoteles cuesta más pero agrega menos valor relativo.",
        de: "3 Häuser bieten die beste Mieterhöhung pro ausgegebenem Dollar - der Sprung zu 4 Häusern und Hotels kostet mehr, fügt aber weniger relativen Wert hinzu.",
        nl: "3 huizen biedt de beste huurverhoging per uitgegeven dollar - de sprong naar 4 huizen en hotels kost meer maar voegt minder relatieve waarde toe."
      }
    },
    {
      question: {
        en: "What's the statistical advantage of owning a 'blocking property' in trades?",
        es: "¿Cuál es la ventaja estadística de poseer una 'propiedad de bloqueo' en intercambios?",
        de: "Was ist der statistische Vorteil des Besitzes einer 'Blockierungseigenschaft' in Geschäften?",
        nl: "Wat is het statistische voordeel van het bezitten van een 'blokkerend eigendom' in ruilen?"
      },
      options: [
        {
          en: "It doubles your negotiating power",
          es: "Duplica tu poder de negociación",
          de: "Es verdoppelt Ihre Verhandlungsmacht",
          nl: "Het verdubbelt je onderhandelingsmacht"
        },
        {
          en: "Blocking property value = monopoly potential × opponent cash",
          es: "Valor de propiedad de bloqueo = potencial de monopolio × efectivo del oponente",
          de: "Blockierungseigenschaftswert = Monopolpotenzial × Gegner-Bargeld",
          nl: "Blokkerend eigendomwaarde = monopoliepotentieel × tegenstander geld"
        },
        {
          en: "Worth 2-3× printed value in trades",
          es: "Vale 2-3× el valor impreso en intercambios",
          de: "Wert 2-3× gedruckter Wert in Geschäften",
          nl: "Waard 2-3× gedrukte waarde in ruilen"
        },
        {
          en: "No statistical advantage, only psychological",
          es: "Sin ventaja estadística, solo psicológica",
          de: "Kein statistischer Vorteil, nur psychologischer",
          nl: "Geen statistisch voordeel, alleen psychologisch"
        }
      ],
      correct: 2,
      explanation: {
        en: "Properties that block opponent monopolies command 2-3× face value in trades because they prevent opponents from developing.",
        es: "Las propiedades que bloquean monopolios de oponentes valen 2-3× el valor nominal en intercambios porque impiden que los oponentes se desarrollen.",
        de: "Eigenschaften, die Gegner-Monopole blockieren, sind 2-3× Nennwert in Geschäften wert, weil sie Gegner an der Entwicklung hindern.",
        nl: "Eigendommen die monopolies van tegenstanders blokkeren zijn 2-3× nominale waarde waard in ruilen omdat ze tegenstanders beletten te ontwikkelen."
      }
    },
    {
      question: {
        en: "What's the 'Speed Die' variant's impact on average game length?",
        es: "¿Cuál es el impacto de la variante 'Dado de Velocidad' en la duración promedio del juego?",
        de: "Welchen Einfluss hat die 'Tempo-Würfel'-Variante auf die durchschnittliche Spieldauer?",
        nl: "Wat is de impact van de 'Snelheidsdobbelsteen'-variant op de gemiddelde speelduur?"
      },
      options: [
        {
          en: "Reduces game time by ~15-20%",
          es: "Reduce el tiempo de juego en ~15-20%",
          de: "Reduziert die Spielzeit um ~15-20%",
          nl: "Vermindert speeltijd met ~15-20%"
        },
        {
          en: "Reduces game time by ~25-30%",
          es: "Reduce el tiempo de juego en ~25-30%",
          de: "Reduziert die Spielzeit um ~25-30%",
          nl: "Vermindert speeltijd met ~25-30%"
        },
        {
          en: "Reduces game time by ~40-50%",
          es: "Reduce el tiempo de juego en ~40-50%",
          de: "Reduziert die Spielzeit um ~40-50%",
          nl: "Vermindert speeltijd met ~40-50%"
        },
        {
          en: "Actually increases game time due to complexity",
          es: "En realidad aumenta el tiempo de juego debido a la complejidad",
          de: "Erhöht tatsächlich die Spielzeit aufgrund der Komplexität",
          nl: "Verhoogt eigenlijk de speeltijd vanwege complexiteit"
        }
      ],
      correct: 1,
      explanation: {
        en: "The Speed Die reduces average game time by 25-30% through faster board movement and special actions.",
        es: "El Dado de Velocidad reduce el tiempo promedio de juego en un 25-30% mediante un movimiento más rápido del tablero y acciones especiales.",
        de: "Der Tempo-Würfel reduziert die durchschnittliche Spielzeit um 25-30% durch schnellere Brettbewegung und Sonderaktionen.",
        nl: "De Snelheidsdobbelsteen vermindert de gemiddelde speeltijd met 25-30% door snellere bordbeweging en speciale acties."
      }
    },
    {
      question: {
        en: "In auction situations, what's the mathematical 'ceiling' for bidding on a property?",
        es: "En situaciones de subasta, ¿cuál es el 'techo' matemático para pujar por una propiedad?",
        de: "Was ist in Auktionssituationen die mathematische 'Obergrenze' für Gebote auf eine Immobilie?",
        nl: "Wat is in veilingsituaties het wiskundige 'plafond' voor bieden op een eigendom?"
      },
      options: [
        {
          en: "Never bid above printed price",
          es: "Nunca pujar por encima del precio impreso",
          de: "Niemals über dem gedruckten Preis bieten",
          nl: "Nooit bieden boven de gedrukte prijs"
        },
        {
          en: "Bid up to 1.5× printed price for completing monopoly",
          es: "Pujar hasta 1.5× el precio impreso para completar monopolio",
          de: "Bis zu 1,5× gedrucktem Preis für Monopolvervollständigung bieten",
          nl: "Bied tot 1.5× gedrukte prijs voor voltooien monopolie"
        },
        {
          en: "Bid up to 2-3× for blocking/completing monopolies",
          es: "Pujar hasta 2-3× para bloquear/completar monopolios",
          de: "Bis zu 2-3× für Blockieren/Vervollständigen von Monopolen bieten",
          nl: "Bied tot 2-3× voor blokkeren/voltooien monopolies"
        },
        {
          en: "No ceiling - pay whatever it takes",
          es: "Sin techo - paga lo que sea necesario",
          de: "Keine Obergrenze - zahlen Sie, was nötig ist",
          nl: "Geen plafond - betaal wat nodig is"
        }
      ],
      correct: 2,
      explanation: {
        en: "Expert players bid up to 2-3× face value for properties that complete their monopoly or block opponents' monopolies.",
        es: "Los jugadores expertos pujan hasta 2-3× el valor nominal por propiedades que completan su monopolio o bloquean monopolios de oponentes.",
        de: "Expertenspieler bieten bis zu 2-3× Nennwert für Eigenschaften, die ihr Monopol vervollständigen oder Gegner-Monopole blockieren.",
        nl: "Ervaren spelers bieden tot 2-3× nominale waarde voor eigendommen die hun monopolie voltooien of monopolies van tegenstanders blokkeren."
      }
    },
    {
      question: {
        en: "What's the probability of rolling exactly a 6 with two dice?",
        es: "¿Cuál es la probabilidad de sacar exactamente un 6 con dos dados?",
        de: "Wie hoch ist die Wahrscheinlichkeit, mit zwei Würfeln genau eine 6 zu würfeln?",
        nl: "Wat is de kans om precies een 6 te gooien met twee dobbelstenen?"
      },
      options: [
        {
          en: "~11.1%",
          es: "~11.1%",
          de: "~11.1%",
          nl: "~11.1%"
        },
        {
          en: "~13.9%",
          es: "~13.9%",
          de: "~13.9%",
          nl: "~13.9%"
        },
        {
          en: "~16.7%",
          es: "~16.7%",
          de: "~16.7%",
          nl: "~16.7%"
        },
        {
          en: "~19.4%",
          es: "~19.4%",
          de: "~19.4%",
          nl: "~19.4%"
        }
      ],
      correct: 1,
      explanation: {
        en: "5 combinations make 6 (1+5, 2+4, 3+3, 4+2, 5+1) out of 36 total = 13.9% probability.",
        es: "5 combinaciones hacen 6 (1+5, 2+4, 3+3, 4+2, 5+1) de 36 totales = 13.9% de probabilidad.",
        de: "5 Kombinationen ergeben 6 (1+5, 2+4, 3+3, 4+2, 5+1) von 36 gesamt = 13,9% Wahrscheinlichkeit.",
        nl: "5 combinaties maken 6 (1+5, 2+4, 3+3, 4+2, 5+1) van 36 totaal = 13.9% kans."
      }
    },
    {
      question: {
        en: "Why do mathematicians recommend building on Light Blue less than other monopolies?",
        es: "¿Por qué los matemáticos recomiendan construir en Azul Claro menos que en otros monopolios?",
        de: "Warum empfehlen Mathematiker, auf Hellblau weniger zu bauen als auf anderen Monopolen?",
        nl: "Waarom bevelen wiskundigen aan om op Lichtblauw minder te bouwen dan op andere monopolies?"
      },
      options: [
        {
          en: "Low landing frequency due to board position",
          es: "Baja frecuencia de caída debido a la posición del tablero",
          de: "Geringe Besuchsfrequenz aufgrund der Brettposition",
          nl: "Lage landingsfrequentie vanwege bordpositie"
        },
        {
          en: "Rent values don't justify the position",
          es: "Los valores de alquiler no justifican la posición",
          de: "Mietwerte rechtfertigen die Position nicht",
          nl: "Huurwaarden rechtvaardigen de positie niet"
        },
        {
          en: "Low rent compared to development cost makes ROI poor",
          es: "Bajo alquiler comparado con el costo de desarrollo hace que el ROI sea pobre",
          de: "Niedrige Miete im Vergleich zu Entwicklungskosten macht ROI schlecht",
          nl: "Lage huur vergeleken met ontwikkelingskosten maakt ROI slecht"
        },
        {
          en: "It's too early in the board for effective income",
          es: "Es demasiado temprano en el tablero para ingresos efectivos",
          de: "Es ist zu früh im Brett für effektive Einnahmen",
          nl: "Het is te vroeg op het bord voor effectief inkomen"
        }
      ],
      correct: 2,
      explanation: {
        en: "Light Blue has low rent ($200-350 with 3 houses) relative to the $150+ development cost - poor ROI compared to orange/red.",
        es: "Azul Claro tiene alquiler bajo ($200-350 con 3 casas) en relación con el costo de desarrollo de $150+ - ROI pobre comparado con naranja/rojo.",
        de: "Hellblau hat niedrige Miete ($200-350 mit 3 Häusern) im Verhältnis zu den Entwicklungskosten von 150+ $ - schlechter ROI im Vergleich zu Orange/Rot.",
        nl: "Lichtblauw heeft lage huur ($200-350 met 3 huizen) ten opzichte van de $150+ ontwikkelingskosten - slechte ROI vergeleken met oranje/rood."
      }
    },
    {
      question: {
        en: "What's the 'get out of jail' card worth in strategic value?",
        es: "¿Cuánto vale la carta de 'salir de la cárcel' en valor estratégico?",
        de: "Was ist die 'Komm aus dem Gefängnis frei'-Karte an strategischem Wert wert?",
        nl: "Wat is de 'kom uit de gevangenis vrij'-kaart waard in strategische waarde?"
      },
      options: [
        {
          en: "$50 (the jail exit fee)",
          es: "$50 (la tarifa de salida de la cárcel)",
          de: "$50 (die Gefängnisausgangsgebühr)",
          nl: "$50 (de gevangenisuitgangstarief)"
        },
        {
          en: "$50-100 depending on game stage",
          es: "$50-100 dependiendo de la etapa del juego",
          de: "$50-100 je nach Spielphase",
          nl: "$50-100 afhankelijk van spelstadium"
        },
        {
          en: "$100+ in late game with many hotels",
          es: "$100+ en juego tardío con muchos hoteles",
          de: "$100+ im späten Spiel mit vielen Hotels",
          nl: "$100+ in laat spel met veel hotels"
        },
        {
          en: "Worthless - staying in jail is often strategic",
          es: "Sin valor - permanecer en la cárcel es a menudo estratégico",
          de: "Wertlos - im Gefängnis zu bleiben ist oft strategisch",
          nl: "Waardeloos - in de gevangenis blijven is vaak strategisch"
        }
      ],
      correct: 1,
      explanation: {
        en: "Worth $50 early (free exit value) but increases to $100+ mid-late game when exiting quickly to land on properties matters.",
        es: "Vale $50 temprano (valor de salida gratis) pero aumenta a $100+ a mitad-tarde del juego cuando salir rápidamente para caer en propiedades importa.",
        de: "Wert 50 $ früh (kostenloser Ausstiegswert), steigt aber auf 100+ $ im mittleren bis späten Spiel, wenn schnelles Verlassen wichtig ist, um auf Grundstücke zu landen.",
        nl: "Waard $50 vroeg (gratis uitgangwaarde) maar stijgt naar $100+ midden-laat spel wanneer snel uitstappen om op eigendommen te landen belangrijk is."
      }
    },
    {
      question: {
        en: "In a 4-player game, what's the average number of turns before someone completes a monopoly?",
        es: "En un juego de 4 jugadores, ¿cuál es el número promedio de turnos antes de que alguien complete un monopolio?",
        de: "Wie viele Runden dauert es in einem 4-Spieler-Spiel durchschnittlich, bis jemand ein Monopol vervollständigt?",
        nl: "Wat is in een 4-spelersspel het gemiddelde aantal beurten voordat iemand een monopolie voltooit?"
      },
      options: [
        {
          en: "5-8 rounds",
          es: "5-8 rondas",
          de: "5-8 Runden",
          nl: "5-8 rondes"
        },
        {
          en: "10-15 rounds",
          es: "10-15 rondas",
          de: "10-15 Runden",
          nl: "10-15 rondes"
        },
        {
          en: "18-25 rounds",
          es: "18-25 rondas",
          de: "18-25 Runden",
          nl: "18-25 rondes"
        },
        {
          en: "30+ rounds",
          es: "30+ rondas",
          de: "30+ Runden",
          nl: "30+ rondes"
        }
      ],
      correct: 2,
      explanation: {
        en: "Statistical analysis shows first monopoly typically forms around rounds 18-25, usually through trading rather than purchasing.",
        es: "El análisis estadístico muestra que el primer monopolio se forma típicamente alrededor de las rondas 18-25, generalmente a través de intercambios en lugar de compras.",
        de: "Statistische Analysen zeigen, dass sich das erste Monopol typischerweise um Runden 18-25 bildet, normalerweise durch Handel statt Kauf.",
        nl: "Statistische analyse toont dat het eerste monopolie zich meestal vormt rond rondes 18-25, meestal door ruilen in plaats van kopen."
      }
    },
    {
      question: {
        en: "What's the expected value difference between Pennsylvania Ave (Green) with hotel vs. Boardwalk with hotel?",
        es: "¿Cuál es la diferencia de valor esperado entre Pennsylvania Ave (Verde) con hotel vs. Boardwalk con hotel?",
        de: "Was ist der Erwartungswertunterschied zwischen Pennsylvania Ave (Grün) mit Hotel vs. Boardwalk mit Hotel?",
        nl: "Wat is het verschil in verwachte waarde tussen Pennsylvania Ave (Groen) met hotel vs. Boardwalk met hotel?"
      },
      options: [
        {
          en: "Boardwalk is 2× more valuable",
          es: "Boardwalk es 2× más valioso",
          de: "Boardwalk ist 2× wertvoller",
          nl: "Boardwalk is 2× waardevoller"
        },
        {
          en: "They're roughly equal in expected value",
          es: "Son aproximadamente iguales en valor esperado",
          de: "Sie sind ungefähr gleich im Erwartungswert",
          nl: "Ze zijn ongeveer gelijk in verwachte waarde"
        },
        {
          en: "Pennsylvania Ave is actually slightly better due to traffic",
          es: "Pennsylvania Ave es en realidad ligeramente mejor debido al tráfico",
          de: "Pennsylvania Ave ist tatsächlich etwas besser aufgrund des Verkehrs",
          nl: "Pennsylvania Ave is eigenlijk iets beter vanwege verkeer"
        },
        {
          en: "Boardwalk is 3× more valuable",
          es: "Boardwalk es 3× más valioso",
          de: "Boardwalk ist 3× wertvoller",
          nl: "Boardwalk is 3× waardevoller"
        }
      ],
      correct: 2,
      explanation: {
        en: "Despite Boardwalk's $2000 rent vs. Pennsylvania's $1400, Pennsylvania gets landed on ~30% more often, making their EV similar.",
        es: "A pesar del alquiler de $2000 de Boardwalk vs. $1400 de Pennsylvania, Pennsylvania recibe ~30% más caídas, haciendo su EV similar.",
        de: "Trotz Boardwalks 2000 $ Miete vs. Pennsylvanias 1400 $ wird Pennsylvania ~30% häufiger besucht, wodurch ihr EV ähnlich ist.",
        nl: "Ondanks Boardwalk's $2000 huur vs. Pennsylvania's $1400, wordt Pennsylvania ~30% vaker bezocht, waardoor hun EV vergelijkbaar is."
      }
    },
    {
      question: {
        en: "What trading principle do expert players follow for 'incomplete set' properties?",
        es: "¿Qué principio de negociación siguen los jugadores expertos para propiedades de 'conjunto incompleto'?",
        de: "Welchem Handelsprinzip folgen Expertenspieler für 'unvollständige Set'-Eigenschaften?",
        nl: "Welk ruilprincipe volgen ervaren spelers voor 'onvolledige set'-eigendommen?"
      },
      options: [
        {
          en: "Trade them away quickly for cash",
          es: "Intercambiarlas rápidamente por efectivo",
          de: "Sie schnell gegen Bargeld tauschen",
          nl: "Ruil ze snel voor geld"
        },
        {
          en: "Hold until opponent is desperate",
          es: "Mantener hasta que el oponente esté desesperado",
          de: "Halten, bis der Gegner verzweifelt ist",
          nl: "Houd vast tot tegenstander wanhopig is"
        },
        {
          en: "Never trade the third property unless getting monopoly back",
          es: "Nunca intercambiar la tercera propiedad a menos que obtengas monopolio a cambio",
          de: "Niemals die dritte Eigenschaft tauschen, es sei denn, man bekommt ein Monopol zurück",
          nl: "Ruil nooit het derde eigendom tenzij je monopolie terugkrijgt"
        },
        {
          en: "Trade value = cash offer + blocking value",
          es: "Valor de intercambio = oferta en efectivo + valor de bloqueo",
          de: "Handelswert = Bargeldangebot + Blockierungswert",
          nl: "Ruilwaarde = geldaanbod + blokkeerwaarde"
        }
      ],
      correct: 2,
      explanation: {
        en: "Expert rule: Never give opponents their monopoly-completing property unless you simultaneously complete your own monopoly.",
        es: "Regla experta: Nunca des a los oponentes su propiedad de completar monopolio a menos que simultáneamente completes tu propio monopolio.",
        de: "Expertenregel: Geben Sie Gegnern niemals ihre monopolvervollständigende Eigenschaft, es sei denn, Sie vervollständigen gleichzeitig Ihr eigenes Monopol.",
        nl: "Expertregel: Geef tegenstanders nooit hun monopolie-voltooiend eigendom tenzij je tegelijkertijd je eigen monopolie voltooit."
      }
    },
    {
      question: {
        en: "How does mortgage interest (10% unmortgage fee) impact long-term strategy?",
        es: "¿Cómo impacta el interés hipotecario (tarifa de deshipotecar del 10%) en la estrategia a largo plazo?",
        de: "Wie wirkt sich der Hypothekenzins (10% Entschuldungsgebühr) auf die langfristige Strategie aus?",
        nl: "Hoe beïnvloedt hypotheekrente (10% onthypothekeren kosten) de langetermijnstrategie?"
      },
      options: [
        {
          en: "Avoid mortgaging - 10% loss is too high",
          es: "Evitar hipotecar - 10% de pérdida es demasiado alto",
          de: "Vermeiden Sie Verpfändung - 10% Verlust ist zu hoch",
          nl: "Vermijd hypothekeren - 10% verlies is te hoog"
        },
        {
          en: "Mortgage freely - liquidity is worth the cost",
          es: "Hipotecar libremente - la liquidez vale el costo",
          de: "Frei verpfänden - Liquidität ist den Preis wert",
          nl: "Hypothekeer vrijuit - liquiditeit is de kosten waard"
        },
        {
          en: "Mortgage non-monopolies first, avoid mortgaging monopolies",
          es: "Hipotecar primero no-monopolios, evitar hipotecar monopolios",
          de: "Nicht-Monopole zuerst verpfänden, Verpfändung von Monopolen vermeiden",
          nl: "Hypothekeer eerst niet-monopolies, vermijd hypothekeren van monopolies"
        },
        {
          en: "Only mortgage when facing immediate bankruptcy",
          es: "Solo hipotecar cuando se enfrenta bancarrota inmediata",
          de: "Nur verpfänden, wenn man unmittelbarem Bankrott gegenübersteht",
          nl: "Alleen hypothekeren bij direct faillissement"
        }
      ],
      correct: 2,
      explanation: {
        en: "Mortgage railroads/utilities first (can't develop anyway) and keep monopolies active. The 10% fee is acceptable for liquidity.",
        es: "Hipoteca primero ferrocarriles/servicios (no se pueden desarrollar de todos modos) y mantén monopolios activos. La tarifa del 10% es aceptable por liquidez.",
        de: "Verpfänden Sie zuerst Eisenbahnen/Versorgungsunternehmen (können ohnehin nicht entwickelt werden) und halten Sie Monopole aktiv. Die 10% Gebühr ist für Liquidität akzeptabel.",
        nl: "Hypothekeer eerst spoorwegen/nutsbedrijven (kunnen toch niet ontwikkelen) en houd monopolies actief. De 10% kosten zijn acceptabel voor liquiditeit."
      }
    },
    {
      question: {
        en: "What's the mathematically proven 'worst' monopoly to own in standard play?",
        es: "¿Cuál es el monopolio matemáticamente probado 'peor' para poseer en juego estándar?",
        de: "Was ist das mathematisch nachgewiesene 'schlechteste' Monopol im Standardspiel?",
        nl: "Wat is het wiskundig bewezen 'slechtste' monopolie om te bezitten in standaardspel?"
      },
      options: [
        {
          en: "Brown (lowest rent values)",
          es: "Marrón (valores de alquiler más bajos)",
          de: "Braun (niedrigste Mietwerte)",
          nl: "Bruin (laagste huurwaarden)"
        },
        {
          en: "Dark Blue (highest cost, low traffic)",
          es: "Azul Oscuro (costo más alto, bajo tráfico)",
          de: "Dunkelblau (höchste Kosten, geringer Verkehr)",
          nl: "Donkerblauw (hoogste kosten, laag verkeer)"
        },
        {
          en: "Light Blue (poor ROI)",
          es: "Azul Claro (ROI pobre)",
          de: "Hellblau (schlechter ROI)",
          nl: "Lichtblauw (slechte ROI)"
        },
        {
          en: "Purple/Brown (Mediterranean/Baltic)",
          es: "Morado/Marrón (Mediterranean/Baltic)",
          de: "Lila/Braun (Mediterranean/Baltic)",
          nl: "Paars/Bruin (Mediterranean/Baltic)"
        }
      ],
      correct: 1,
      explanation: {
        en: "Dark Blue requires $1400+ investment (properties+hotels) with lowest landing frequency, making it the worst ROI monopoly statistically.",
        es: "Azul Oscuro requiere inversión de $1400+ (propiedades+hoteles) con la frecuencia de caída más baja, haciéndolo el monopolio de peor ROI estadísticamente.",
        de: "Dunkelblau erfordert eine Investition von 1400+ $ (Grundstücke+Hotels) bei niedrigster Besuchsfrequenz, was es statistisch zum Monopol mit dem schlechtesten ROI macht.",
        nl: "Donkerblauw vereist $1400+ investering (eigendommen+hotels) met laagste landingsfrequentie, wat het statistisch het slechtste ROI-monopolie maakt."
      }
    },
    {
      question: {
        en: "How does the 'three doubles' rule affect jail strategy?",
        es: "¿Cómo afecta la regla de 'tres dobles' a la estrategia de la cárcel?",
        de: "Wie beeinflusst die 'Drei-Pasch'-Regel die Gefängnisstrategie?",
        nl: "Hoe beïnvloedt de 'drie dubbelen'-regel de gevangenisstrategie?"
      },
      options: [
        {
          en: "Rolling three consecutive doubles sends you to Jail",
          es: "Sacar tres dobles consecutivos te envía a la Cárcel",
          de: "Drei aufeinanderfolgende Pasche schicken Sie ins Gefängnis",
          nl: "Drie opeenvolgende dubbelen stuurt je naar de Gevangenis"
        },
        {
          en: "Three doubles gives bonus move",
          es: "Tres dobles dan movimiento bonus",
          de: "Drei Pasche geben Bonusbewegung",
          nl: "Drie dubbelen geeft bonusbeweging"
        },
        {
          en: "You get $200 for three doubles",
          es: "Recibes $200 por tres dobles",
          de: "Sie erhalten $200 für drei Pasche",
          nl: "Je krijgt $200 voor drie dubbelen"
        },
        {
          en: "No special rule for three doubles",
          es: "No hay regla especial para tres dobles",
          de: "Keine Sonderregel für drei Pasche",
          nl: "Geen speciale regel voor drie dubbelen"
        }
      ],
      correct: 0,
      explanation: {
        en: "Rolling three consecutive doubles (same turn) sends you directly to Jail, ending your turn immediately.",
        es: "Sacar tres dobles consecutivos (mismo turno) te envía directamente a la Cárcel, terminando tu turno inmediatamente.",
        de: "Drei aufeinanderfolgende Pasche (gleicher Zug) schicken Sie direkt ins Gefängnis und beenden Ihren Zug sofort.",
        nl: "Drie opeenvolgende dubbelen gooien (zelfde beurt) stuurt je direct naar de Gevangenis, je beurt eindigt onmiddellijk."
      }
    },
    {
      question: {
        en: "What's the optimal cash reserve to maintain before building houses?",
        es: "¿Cuál es la reserva de efectivo óptima para mantener antes de construir casas?",
        de: "Was ist die optimale Barreserve, die man vor dem Bau von Häusern halten sollte?",
        nl: "Wat is de optimale geldreserve om aan te houden voordat je huizen bouwt?"
      },
      options: [
        {
          en: "$0 - invest everything immediately",
          es: "$0 - invertir todo inmediatamente",
          de: "$0 - sofort alles investieren",
          nl: "$0 - investeer alles meteen"
        },
        {
          en: "$200-300 emergency fund",
          es: "$200-300 fondo de emergencia",
          de: "$200-300 Notfallfonds",
          nl: "$200-300 noodfonds"
        },
        {
          en: "$500-700 for safety",
          es: "$500-700 por seguridad",
          de: "$500-700 zur Sicherheit",
          nl: "$500-700 voor veiligheid"
        },
        {
          en: "$1000+ to stay liquid",
          es: "$1000+ para mantener liquidez",
          de: "$1000+ um liquide zu bleiben",
          nl: "$1000+ om liquide te blijven"
        }
      ],
      correct: 1,
      explanation: {
        en: "Keep $200-300 reserve for rent/taxes while maximizing house investment - enough to survive 1-2 opponent landings.",
        es: "Mantén reserva de $200-300 para alquiler/impuestos mientras maximizas inversión en casas - suficiente para sobrevivir 1-2 caídas de oponentes.",
        de: "Halten Sie 200-300 $ Reserve für Miete/Steuern, während Sie Hausinvestitionen maximieren - genug, um 1-2 Gegnerlandungen zu überleben.",
        nl: "Houd $200-300 reserve voor huur/belasting terwijl je huizeninvestering maximaliseert - genoeg om 1-2 tegenstanders landingen te overleven."
      }
    },
    {
      question: {
        en: "How many total spaces are on a standard Monopoly board?",
        es: "¿Cuántos espacios totales hay en un tablero de Monopoly estándar?",
        de: "Wie viele Felder gibt es insgesamt auf einem Standard-Monopoly-Brett?",
        nl: "Hoeveel vakken zijn er in totaal op een standaard Monopoly-bord?"
      },
      options: [
        {
          en: "36 spaces",
          es: "36 espacios",
          de: "36 Felder",
          nl: "36 vakken"
        },
        {
          en: "40 spaces",
          es: "40 espacios",
          de: "40 Felder",
          nl: "40 vakken"
        },
        {
          en: "44 spaces",
          es: "44 espacios",
          de: "44 Felder",
          nl: "44 vakken"
        },
        {
          en: "48 spaces",
          es: "48 espacios",
          de: "48 Felder",
          nl: "48 vakken"
        }
      ],
      correct: 1,
      explanation: {
        en: "The standard Monopoly board has exactly 40 spaces arranged in a square (10 spaces per side).",
        es: "El tablero estándar de Monopoly tiene exactamente 40 espacios dispuestos en un cuadrado (10 espacios por lado).",
        de: "Das Standard-Monopoly-Brett hat genau 40 Felder, die in einem Quadrat angeordnet sind (10 Felder pro Seite).",
        nl: "Het standaard Monopoly-bord heeft precies 40 vakken gerangschikt in een vierkant (10 vakken per zijde)."
      }
    },
    {
      question: {
        en: "What's the rent progression formula for railroads?",
        es: "¿Cuál es la fórmula de progresión de alquiler para ferrocarriles?",
        de: "Was ist die Mietsteigerungsformel für Eisenbahnen?",
        nl: "Wat is de huurprogressieformule voor spoorwegen?"
      },
      options: [
        {
          en: "$25 × number owned",
          es: "$25 × número poseído",
          de: "$25 × Anzahl im Besitz",
          nl: "$25 × aantal bezeten"
        },
        {
          en: "$25 × 2^(number owned - 1)",
          es: "$25 × 2^(número poseído - 1)",
          de: "$25 × 2^(Anzahl im Besitz - 1)",
          nl: "$25 × 2^(aantal bezeten - 1)"
        },
        {
          en: "$50 × number owned",
          es: "$50 × número poseído",
          de: "$50 × Anzahl im Besitz",
          nl: "$50 × aantal bezeten"
        },
        {
          en: "$100 flat rate per railroad",
          es: "$100 tarifa fija por ferrocarril",
          de: "$100 Pauschalpreis pro Eisenbahn",
          nl: "$100 vast tarief per spoorweg"
        }
      ],
      correct: 1,
      explanation: {
        en: "Railroad rent doubles with each owned: $25, $50, $100, $200 (formula: $25 × 2^(n-1) where n = railroads owned).",
        es: "El alquiler del ferrocarril se duplica con cada uno poseído: $25, $50, $100, $200 (fórmula: $25 × 2^(n-1) donde n = ferrocarriles poseídos).",
        de: "Eisenbahnmiete verdoppelt sich mit jedem Besitz: $25, $50, $100, $200 (Formel: $25 × 2^(n-1) wobei n = besessene Eisenbahnen).",
        nl: "Spoorweghuur verdubbelt met elke bezeten: $25, $50, $100, $200 (formule: $25 × 2^(n-1) waarbij n = spoorwegen bezeten)."
      }
    },
    {
      question: {
        en: "In tournament play, how is tiebreaker determined if time runs out?",
        es: "En juego de torneo, ¿cómo se determina el desempate si se acaba el tiempo?",
        de: "Wie wird im Turnierspiel der Tie breaker bestimmt, wenn die Zeit abläuft?",
        nl: "Hoe wordt in toernooispel de tiebreaker bepaald als de tijd opraakt?"
      },
      options: [
        {
          en: "Highest cash wins",
          es: "El efectivo más alto gana",
          de: "Höchstes Bargeld gewinnt",
          nl: "Hoogste geld wint"
        },
        {
          en: "Most properties owned",
          es: "Más propiedades poseídas",
          de: "Die meisten besessenen Grundstücke",
          nl: "Meeste eigendommen bezeten"
        },
        {
          en: "Total net worth (assets + cash)",
          es: "Patrimonio neto total (activos + efectivo)",
          de: "Gesamtnettovermögen (Vermögen + Bargeld)",
          nl: "Totale nettowaarde (activa + geld)"
        },
        {
          en: "Sudden death round",
          es: "Ronda de muerte súbita",
          de: "Sudden-Death-Runde",
          nl: "Sudden death ronde"
        }
      ],
      correct: 2,
      explanation: {
        en: "Official tournament rules: winner = highest total net worth (cash + property values at purchase price + building costs).",
        es: "Reglas oficiales de torneo: ganador = mayor patrimonio neto total (efectivo + valores de propiedades al precio de compra + costos de construcción).",
        de: "Offizielle Turnierregeln: Gewinner = höchstes Gesamtnettovermögen (Bargeld + Immobilienwerte zum Kaufpreis + Baukosten).",
        nl: "Officiële toernooiregels: winnaar = hoogste totale nettowaarde (geld + eigendomswaarden tegen aankoopprijs + bouwkosten)."
      }
    },
    {
      question: {
        en: "What's the probability of landing on Illinois Avenue within 3 turns from Jail?",
        es: "¿Cuál es la probabilidad de caer en Illinois Avenue en 3 turnos desde la Cárcel?",
        de: "Was ist die Wahrscheinlichkeit, innerhalb von 3 Zügen vom Gefängnis auf Illinois Avenue zu landen?",
        nl: "Wat is de kans om binnen 3 beurten vanaf de Gevangenis op Illinois Avenue te landen?"
      },
      options: [
        {
          en: "~12%",
          es: "~12%",
          de: "~12%",
          nl: "~12%"
        },
        {
          en: "~18%",
          es: "~18%",
          de: "~18%",
          nl: "~18%"
        },
        {
          en: "~24%",
          es: "~24%",
          de: "~24%",
          nl: "~24%"
        },
        {
          en: "~30%",
          es: "~30%",
          de: "~30%",
          nl: "~30%"
        }
      ],
      correct: 1,
      explanation: {
        en: "Illinois Avenue is 9 spaces from Jail - highest probability square. ~18% chance of landing there within 3 turns.",
        es: "Illinois Avenue está a 9 espacios de la Cárcel - el cuadrado de mayor probabilidad. ~18% de probabilidad de caer allí en 3 turnos.",
        de: "Illinois Avenue ist 9 Felder vom Gefängnis entfernt - das Feld mit der höchsten Wahrscheinlichkeit. ~18% Chance, dort innerhalb von 3 Zügen zu landen.",
        nl: "Illinois Avenue is 9 vakken van de Gevangenis - hoogste kans vak. ~18% kans om daar binnen 3 beurten te landen."
      }
    },
    {
      question: {
        en: "Why are red properties considered the 'goldilocks zone' of Monopoly?",
        es: "¿Por qué se consideran las propiedades rojas la 'zona goldilocks' de Monopoly?",
        de: "Warum gelten rote Eigenschaften als die 'Goldlöckchen-Zone' von Monopoly?",
        nl: "Waarom worden rode eigendommen beschouwd als de 'goldilocks zone' van Monopoly?"
      },
      options: [
        {
          en: "Highest rent in the game",
          es: "Alquiler más alto del juego",
          de: "Höchste Miete im Spiel",
          nl: "Hoogste huur in het spel"
        },
        {
          en: "Perfect balance of cost, traffic, and rent",
          es: "Equilibrio perfecto de costo, tráfico y alquiler",
          de: "Perfekte Balance von Kosten, Verkehr und Miete",
          nl: "Perfecte balans van kosten, verkeer en huur"
        },
        {
          en: "Cheapest to develop fully",
          es: "Más baratas para desarrollar completamente",
          de: "Am günstigsten vollständig zu entwickeln",
          nl: "Goedkoopst om volledig te ontwikkelen"
        },
        {
          en: "Most frequently landed on",
          es: "Más frecuentemente visitadas",
          de: "Am häufigsten besucht",
          nl: "Meest frequent bezocht"
        }
      ],
      correct: 1,
      explanation: {
        en: "Red properties balance moderate development costs ($150/house), good landing frequency, and strong rent ($750-950 with 3-4 houses).",
        es: "Las propiedades rojas equilibran costos moderados de desarrollo ($150/casa), buena frecuencia de caída y alquiler fuerte ($750-950 con 3-4 casas).",
        de: "Rote Eigenschaften balancieren moderate Entwicklungskosten ($150/Haus), gute Besuchsfrequenz und starke Miete ($750-950 mit 3-4 Häusern).",
        nl: "Rode eigendommen balanceren gematigde ontwikkelingskosten ($150/huis), goede landingsfrequentie en sterke huur ($750-950 met 3-4 huizen)."
      }
    },
    {
      question: {
        en: "How does the 'Free Parking' house rule affect game balance?",
        es: "¿Cómo afecta la regla casera de 'Free Parking' al equilibrio del juego?",
        de: "Wie beeinflusst die 'Frei Parken'-Hausregel das Spielgleichgewicht?",
        nl: "Hoe beïnvloedt de 'Vrij Parkeren' huisregel het spelevenwicht?"
      },
      options: [
        {
          en: "Makes game faster and more strategic",
          es: "Hace el juego más rápido y estratégico",
          de: "Macht das Spiel schneller und strategischer",
          nl: "Maakt spel sneller en strategischer"
        },
        {
          en: "Extends game length significantly by adding money",
          es: "Extiende la duración del juego significativamente añadiendo dinero",
          de: "Verlängert die Spieldauer erheblich durch Geld hinzufügen",
          nl: "Verlengt speelduur aanzienlijk door geld toe te voegen"
        },
        {
          en: "Has no measurable impact",
          es: "No tiene impacto medible",
          de: "Hat keine messbare Auswirkung",
          nl: "Heeft geen meetbare impact"
        },
        {
          en: "Required in official rules",
          es: "Requerido en reglas oficiales",
          de: "In offiziellen Regeln erforderlich",
          nl: "Vereist in officiële regels"
        }
      ],
      correct: 1,
      explanation: {
        en: "Free Parking jackpot (house rule, not official) adds money to circulation, extending games by 30-50% and reducing bankruptcies.",
        es: "El premio de Free Parking (regla casera, no oficial) añade dinero a la circulación, extendiendo juegos en 30-50% y reduciendo bancarrotas.",
        de: "Free Parking Jackpot (Hausregel, nicht offiziell) fügt Geld in Umlauf hinzu, verlängert Spiele um 30-50% und reduziert Bankrotte.",
        nl: "Free Parking jackpot (huisregel, niet officieel) voegt geld toe aan circulatie, verlengt spellen met 30-50% en vermindert faillissementen."
      }
    },
    {
      question: {
        en: "What's the expected ROI timeframe for a fully developed orange monopoly?",
        es: "¿Cuál es el marco de tiempo de ROI esperado para un monopolio naranja completamente desarrollado?",
        de: "Was ist der erwartete ROI-Zeitrahmen für ein voll entwickeltes orangefarbenes Monopol?",
        nl: "Wat is het verwachte ROI-tijdskader voor een volledig ontwikkeld oranje monopolie?"
      },
      options: [
        {
          en: "2-3 opponent landings recover investment",
          es: "2-3 caídas de oponentes recuperan la inversión",
          de: "2-3 Gegnerlandungen erholen die Investition",
          nl: "2-3 tegenstanders landingen halen investering terug"
        },
        {
          en: "5-6 opponent landings needed",
          es: "5-6 caídas de oponentes necesarias",
          de: "5-6 Gegnerlandungen erforderlich",
          nl: "5-6 tegenstanders landingen nodig"
        },
        {
          en: "8-10 opponent landings required",
          es: "8-10 caídas de oponentes requeridas",
          de: "8-10 Gegnerlandungen erforderlich",
          nl: "8-10 tegenstanders landingen vereist"
        },
        {
          en: "12+ landings to break even",
          es: "12+ caídas para alcanzar el equilibrio",
          de: "12+ Landungen um break-even zu erreichen",
          nl: "12+ landingen om break-even te bereiken"
        }
      ],
      correct: 0,
      explanation: {
        en: "Orange monopoly with 3 houses ($1200 investment) generates $700-800 rent - recovers cost in just 2-3 landings.",
        es: "Monopolio naranja con 3 casas (inversión de $1200) genera alquiler de $700-800 - recupera costo en solo 2-3 caídas.",
        de: "Orangefarbenes Monopol mit 3 Häusern ($1200 Investition) generiert $700-800 Miete - erholt Kosten in nur 2-3 Landungen.",
        nl: "Oranje monopolie met 3 huizen ($1200 investering) genereert $700-800 huur - haalt kosten terug in slechts 2-3 landingen."
      }
    },
    {
      question: {
        en: "What advantage does going second vs. first provide in competitive play?",
        es: "¿Qué ventaja proporciona ir segundo vs. primero en juego competitivo?",
        de: "Welchen Vorteil bietet es, im Wettkampfspiel zweiter vs. erster zu sein?",
        nl: "Welk voordeel biedt tweede vs. eerste gaan in competitief spel?"
      },
      options: [
        {
          en: "First player has significant advantage",
          es: "El primer jugador tiene ventaja significativa",
          de: "Erster Spieler hat erheblichen Vorteil",
          nl: "Eerste speler heeft aanzienlijk voordeel"
        },
        {
          en: "Going second sees more auction opportunities",
          es: "Ir segundo ve más oportunidades de subasta",
          de: "Als Zweiter sieht man mehr Auktionsmöglichkeiten",
          nl: "Tweede gaan ziet meer veilingmogelijkheden"
        },
        {
          en: "Position has no statistical advantage",
          es: "La posición no tiene ventaja estadística",
          de: "Position hat keinen statistischen Vorteil",
          nl: "Positie heeft geen statistisch voordeel"
        },
        {
          en: "Last player position is best",
          es: "La posición del último jugador es la mejor",
          de: "Letzte Spielerposition ist am besten",
          nl: "Laatste speler positie is best"
        }
      ],
      correct: 2,
      explanation: {
        en: "Statistical analysis shows no meaningful advantage to turn order - player skill dominates over position effects.",
        es: "El análisis estadístico muestra que no hay ventaja significativa en el orden de turno - la habilidad del jugador domina sobre los efectos de posición.",
        de: "Statistische Analysen zeigen keinen bedeutenden Vorteil der Zugreihenfolge - Spielerfähigkeit dominiert über Positionseffekte.",
        nl: "Statistische analyse toont geen betekenisvol voordeel van beurtvolgorde - spelersvaardigheden domineren over positie-effecten."
      }
    },
    {
      question: {
        en: "What's the strategic value of owning just ONE railroad?",
        es: "¿Cuál es el valor estratégico de poseer solo UN ferrocarril?",
        de: "Was ist der strategische Wert, nur EINE Eisenbahn zu besitzen?",
        nl: "Wat is de strategische waarde van het bezitten van slechts ÉÉN spoorweg?"
      },
      options: [
        {
          en: "Minimal - $25 rent isn't worth the $200 investment",
          es: "Mínimo - alquiler de $25 no vale la inversión de $200",
          de: "Minimal - $25 Miete ist die $200 Investition nicht wert",
          nl: "Minimaal - $25 huur is de $200 investering niet waard"
        },
        {
          en: "Good foundation - easy to complete set",
          es: "Buena base - fácil de completar conjunto",
          de: "Gute Grundlage - einfach Set zu vervollständigen",
          nl: "Goede basis - makkelijk set te voltooien"
        },
        {
          en: "Trading leverage - blocks opponents' railroad sets",
          es: "Palanca de negociación - bloquea conjuntos de ferrocarriles de oponentes",
          de: "Handelshe bel - blockiert Gegner-Eisenbahnsets",
          nl: "Ruilhefboom - blokkeert spoorwegsets van tegenstanders"
        },
        {
          en: "Waste of capital - avoid single railroads",
          es: "Desperdicio de capital - evitar ferrocarriles individuales",
          de: "Kapitalverschwendung - einzelne Eisenbahnen vermeiden",
          nl: "Verspilling van kapitaal - vermijd enkele spoorwegen"
        }
      ],
      correct: 2,
      explanation: {
        en: "Single railroads have high trading value - they block opponents from completing their 4-railroad set ($200 rent).",
        es: "Los ferrocarriles individuales tienen alto valor de intercambio - bloquean a los oponentes de completar su conjunto de 4 ferrocarriles (alquiler de $200).",
        de: "Einzelne Eisenbahnen haben hohen Handelswert - sie blockieren Gegner daran, ihr 4-Eisenbahn-Set ($200 Miete) zu vervollständigen.",
        nl: "Enkele spoorwegen hebben hoge ruilwaarde - ze blokkeren tegenstanders van het voltooien van hun 4-spoorwegset ($200 huur)."
      }
    },
    {
      question: {
        en: "How many total dice rolls occur in an average 4-player game?",
        es: "¿Cuántas tiradas de dados totales ocurren en un juego promedio de 4 jugadores?",
        de: "Wie viele Würfelwürfe insgesamt gibt es in einem durchschnittlichen 4-Spieler-Spiel?",
        nl: "Hoeveel totale dobbelsteenworpen vinden plaats in een gemiddeld 4-spelersspel?"
      },
      options: [
        {
          en: "~150-200 rolls",
          es: "~150-200 tiradas",
          de: "~150-200 Würfe",
          nl: "~150-200 worpen"
        },
        {
          en: "~250-350 rolls",
          es: "~250-350 tiradas",
          de: "~250-350 Würfe",
          nl: "~250-350 worpen"
        },
        {
          en: "~400-500 rolls",
          es: "~400-500 tiradas",
          de: "~400-500 Würfe",
          nl: "~400-500 worpen"
        },
        {
          en: "~600-800 rolls",
          es: "~600-800 tiradas",
          de: "~600-800 Würfe",
          nl: "~600-800 worpen"
        }
      },
      correct: 2,
      explanation: {
        en: "Average 4-player game: ~90 minutes, ~25 rolls/player = ~400-500 total rolls including doubles.",
        es: "Juego promedio de 4 jugadores: ~90 minutos, ~25 tiradas/jugador = ~400-500 tiradas totales incluyendo dobles.",
        de: "Durchschnittliches 4-Spieler-Spiel: ~90 Minuten, ~25 Würfe/Spieler = ~400-500 Gesamtwürfe einschließlich Pasche.",
        nl: "Gemiddeld 4-spelersspel: ~90 minuten, ~25 worpen/speler = ~400-500 totale worpen inclusief dubbelen."
      }
    },
    {
      question: {
        en: "What's the 'rent gap' strategy with incomplete monopolies?",
        es: "¿Cuál es la estrategia de 'brecha de alquiler' con monopolios incompletos?",
        de: "Was ist die 'Mietlücken'-Strategie mit unvollständigen Monopolen?",
        nl: "Wat is de 'huurkloof'-strategie met onvolledige monopolies?"
      },
      options: [
        {
          en: "Trade away incomplete sets immediately",
          es: "Intercambiar conjuntos incompletos inmediatamente",
          de: "Unvollständige Sets sofort tauschen",
          nl: "Ruil onvolledige sets onmiddellijk"
        },
        {
          en: "Hold all properties to block everyone",
          es: "Mantener todas las propiedades para bloquear a todos",
          de: "Alle Eigenschaften halten, um alle zu blockieren",
          nl: "Houd alle eigendommen om iedereen te blokkeren"
        },
        {
          en: "Trade incomplete for incomplete, complete monopolies simultaneously",
          es: "Intercambiar incompleto por incompleto, completar monopolios simultáneamente",
          de: "Unvollständig gegen unvollständig tauschen, Monopole gleichzeitig vervollständigen",
          nl: "Ruil onvolledig voor onvolledig, voltooi monopolies tegelijkertijd"
        },
        {
          en: "Never trade with anyone who has more cash",
          es: "Nunca negociar con nadie que tenga más efectivo",
          de: "Niemals mit jemandem handeln, der mehr Bargeld hat",
          nl: "Nooit ruilen met iemand die meer geld heeft"
        }
      ],
      correct: 2,
      explanation: {
        en: "Optimal strategy: trade incomplete sets to complete monopolies simultaneously, ensuring development race balance.",
        es: "Estrategia óptima: intercambiar conjuntos incompletos para completar monopolios simultáneamente, asegurando el equilibrio de la carrera de desarrollo.",
        de: "Optimale Strategie: Unvollständige Sets tauschen, um Monopole gleichzeitig zu vervollständigen und das Entwicklungsrennen im Gleichgewicht zu halten.",
        nl: "Optimale strategie: ruil onvolledige sets om monopolies tegelijkertijd te voltooien, zorg voor ontwikkelingsrace balans."
      }
    },
    {
      question: {
        en: "Why is the B&O Railroad considered strategically weaker than others?",
        es: "¿Por qué se considera el B&O Railroad estratégicamente más débil que otros?",
        de: "Warum wird die B&O Railroad als strategisch schwächer als andere angesehen?",
        nl: "Waarom wordt de B&O Railroad als strategisch zwakker beschouwd dan anderen?"
      },
      options: [
        {
          en: "It has lower rent than other railroads",
          es: "Tiene alquiler más bajo que otros ferrocarriles",
          de: "Es hat niedrigere Miete als andere Eisenbahnen",
          nl: "Het heeft lagere huur dan andere spoorwegen"
        },
        {
          en: "Lower landing frequency due to board position",
          es: "Menor frecuencia de caída debido a la posición del tablero",
          de: "Geringere Besuchsfrequenz aufgrund der Brettposition",
          nl: "Lagere landingsfrequentie vanwege bordpositie"
        },
        {
          en: "All railroads are statistically equal",
          es: "Todos los ferrocarriles son estadísticamente iguales",
          de: "Alle Eisenbahnen sind statistisch gleich",
          nl: "Alle spoorwegen zijn statistisch gelijk"
        },
        {
          en: "It's closest to Free Parking (dead zone)",
          es: "Está más cerca de Free Parking (zona muerta)",
          de: "Es ist am nächsten zu Frei Parken (Todeszone)",
          nl: "Het is het dichtst bij Vrij Parkeren (dode zone)"
        }
      ],
      correct: 2,
      explanation: {
        en: "All four railroads have identical rent and similar landing frequency - no railroad is strategically weaker.",
        es: "Los cuatro ferrocarriles tienen alquiler idéntico y frecuencia de caída similar - ningún ferrocarril es estratégicamente más débil.",
        de: "Alle vier Eisenbahnen haben identische Miete und ähnliche Besuchsfrequenz - keine Eisenbahn ist strategisch schwächer.",
        nl: "Alle vier spoorwegen hebben identieke huur en vergelijkbare landingsfrequentie - geen spoorweg is strategisch zwakker."
      }
    },
    {
      question: {
        en: "What determines the optimal timing to upgrade from 3 to 4 houses?",
        es: "¿Qué determina el momento óptimo para mejorar de 3 a 4 casas?",
        de: "Was bestimmt den optimalen Zeitpunkt für das Upgrade von 3 auf 4 Häuser?",
        nl: "Wat bepaalt het optimale moment om te upgraden van 3 naar 4 huizen?"
      },
      options: [
        {
          en: "Always upgrade immediately to maximize rent",
          es: "Siempre mejorar inmediatamente para maximizar el alquiler",
          de: "Immer sofort upgraden, um Miete zu maximieren",
          nl: "Altijd onmiddellijk upgraden om huur te maximaliseren"
        },
        {
          en: "When house bank is full - create shortage",
          es: "Cuando el banco de casas está lleno - crear escasez",
          de: "Wenn Hausbank voll ist - Knappheit schaffen",
          nl: "Wanneer huizenbank vol is - creëer schaarste"
        },
        {
          en: "Based on cash reserves and opponent threats",
          es: "Basado en reservas de efectivo y amenazas de oponentes",
          de: "Basierend auf Barreserven und Gegnerbedrohungen",
          nl: "Gebaseerd op geldreserves en tegenstander dreigingen"
        },
        {
          en: "Never upgrade - 3 houses is optimal",
          es: "Nunca mejorar - 3 casas es óptimo",
          de: "Niemals upgraden - 3 Häuser ist optimal",
          nl: "Nooit upgraden - 3 huizen is optimaal"
        }
      ],
      correct: 2,
      explanation: {
        en: "Upgrade 3→4 houses when: (1) you have $300+ cash buffer, (2) opponents are building (don't leave houses available), (3) rent jump justifies cost.",
        es: "Mejorar 3→4 casas cuando: (1) tienes colchón de efectivo de $300+, (2) oponentes están construyendo (no dejar casas disponibles), (3) salto de alquiler justifica el costo.",
        de: "Upgrade 3→4 Häuser wenn: (1) Sie $300+ Bargeldpuffer haben, (2) Gegner bauen (keine Häuser verfügbar lassen), (3) Mietsprung Kosten rechtfertigt.",
        nl: "Upgrade 3→4 huizen wanneer: (1) je $300+ geldbuffer hebt, (2) tegenstanders bouwen (laat geen huizen beschikbaar), (3) huursprong kosten rechtvaardigt."
      }
    },
    {
      question: {
        en: "What's the mathematical probability of rolling doubles?",
        es: "¿Cuál es la probabilidad matemática de sacar dobles?",
        de: "Was ist die mathematische Wahrscheinlichkeit, einen Pasch zu würfeln?",
        nl: "Wat is de wiskundige kans om dubbel te gooien?"
      },
      options: [
        {
          en: "1 in 6 (16.7%)",
          es: "1 de 6 (16.7%)",
          de: "1 zu 6 (16.7%)",
          nl: "1 op 6 (16.7%)"
        },
        {
          en: "1 in 12 (8.3%)",
          es: "1 de 12 (8.3%)",
          de: "1 zu 12 (8.3%)",
          nl: "1 op 12 (8.3%)"
        },
        {
          en: "1 in 9 (11.1%)",
          es: "1 de 9 (11.1%)",
          de: "1 zu 9 (11.1%)",
          nl: "1 op 9 (11.1%)"
        },
        {
          en: "1 in 18 (5.6%)",
          es: "1 de 18 (5.6%)",
          de: "1 zu 18 (5.6%)",
          nl: "1 op 18 (5.6%)"
        }
      ],
      correct: 0,
      explanation: {
        en: "6 doubles combinations (1-1, 2-2, 3-3, 4-4, 5-5, 6-6) out of 36 total = 6/36 = 1/6 = 16.7%.",
        es: "6 combinaciones de dobles (1-1, 2-2, 3-3, 4-4, 5-5, 6-6) de 36 totales = 6/36 = 1/6 = 16.7%.",
        de: "6 Pasch-Kombinationen (1-1, 2-2, 3-3, 4-4, 5-5, 6-6) von 36 gesamt = 6/36 = 1/6 = 16,7%.",
        nl: "6 dubbele combinaties (1-1, 2-2, 3-3, 4-4, 5-5, 6-6) van 36 totaal = 6/36 = 1/6 = 16.7%."
      }
    },
    {
      question: {
        en: "What's the theoretical maximum rent in one turn?",
        es: "¿Cuál es el alquiler máximo teórico en un turno?",
        de: "Was ist die theoretische maximale Miete in einem Zug?",
        nl: "Wat is de theoretische maximale huur in één beurt?"
      },
      options: [
        {
          en: "$2,000 (Boardwalk hotel)",
          es: "$2,000 (hotel Boardwalk)",
          de: "$2,000 (Boardwalk Hotel)",
          nl: "$2,000 (Boardwalk hotel)"
        },
        {
          en: "$4,000 (two Boardwalk landings with doubles)",
          es: "$4,000 (dos caídas en Boardwalk con dobles)",
          de: "$4,000 (zweimal Boardwalk mit Pasch)",
          nl: "$4,000 (twee Boardwalk landingen met dubbelen)"
        },
        {
          en: "$6,000 (three landings before jail)",
          es: "$6,000 (tres caídas antes de la cárcel)",
          de: "$6,000 (drei Landungen vor Gefängnis)",
          nl: "$6,000 (drie landingen voor gevangenis)"
        },
        {
          en: "Unlimited with multiple hotels",
          es: "Ilimitado con múltiples hoteles",
          de: "Unbegrenzt mit mehreren Hotels",
          nl: "Onbeperkt met meerdere hotels"
        }
      ],
      correct: 2,
      explanation: {
        en: "With two doubles, you could land on 3 properties with hotels ($2000 each) = $6000 max before 3rd double sends you to Jail.",
        es: "Con dos dobles, podrías caer en 3 propiedades con hoteles ($2000 cada una) = $6000 máximo antes de que el 3er doble te envíe a la Cárcel.",
        de: "Mit zwei Paschen könnten Sie auf 3 Grundstücken mit Hotels landen ($2000 je) = $6000 max, bevor 3. Pasch Sie ins Gefängnis schickt.",
        nl: "Met twee dubbelen kun je landen op 3 eigendommen met hotels ($2000 elk) = $6000 max voordat 3e dubbel je naar Gevangenis stuurt."
      }
    },
    {
      question: {
        en: "Why is New York Avenue considered the 'sweet spot' of orange properties?",
        es: "¿Por qué se considera New York Avenue el 'punto dulce' de las propiedades naranjas?",
        de: "Warum gilt New York Avenue als der 'Sweet Spot' der orangefarbenen Eigenschaften?",
        nl: "Waarom wordt New York Avenue beschouwd als het 'sweet spot' van oranje eigendommen?"
      },
      options: [
        {
          en: "It has higher rent than St. James",
          es: "Tiene alquiler más alto que St. James",
          de: "Es hat höhere Miete als St. James",
          nl: "Het heeft hogere huur dan St. James"
        },
        {
          en: "8 spaces from Jail - prime rolling distance",
          es: "8 espacios desde la Cárcel - distancia de tirada prima",
          de: "8 Felder vom Gefängnis - optimale Würfelentfernung",
          nl: "8 vakken van Gevangenis - prime werpafstand"
        },
        {
          en: "All orange properties are identical",
          es: "Todas las propiedades naranjas son idénticas",
          de: "Alle orangefarbenen Eigenschaften sind identisch",
          nl: "Alle oranje eigendommen zijn identiek"
        },
        {
          en: "It's next to Free Parking",
          es: "Está al lado de Free Parking",
          de: "Es ist neben Frei Parken",
          nl: "Het is naast Vrij Parkeren"
        }
      ],
      correct: 1,
      explanation: {
        en: "New York Avenue is 8 spaces from Jail (common roll: 8 or doubles 4+4), making it statistically most-landed orange property.",
        es: "New York Avenue está a 8 espacios de la Cárcel (tirada común: 8 o dobles 4+4), convirtiéndola en la propiedad naranja más visitada estadísticamente.",
        de: "New York Avenue ist 8 Felder vom Gefängnis entfernt (häufiger Wurf: 8 oder Pasch 4+4), was es zur statistisch meist besuchten orangefarbenen Eigenschaft macht.",
        nl: "New York Avenue is 8 vakken van Gevangenis (veel voorkomende worp: 8 of dubbel 4+4), waardoor het statistisch meest bezochte oranje eigendom is."
      }
    },
    {
      question: {
        en: "What's the 'cash flow death spiral' in Monopoly?",
        es: "¿Qué es la 'espiral de muerte de flujo de efectivo' en Monopoly?",
        de: "Was ist die 'Cashflow-Todesspirale' in Monopoly?",
        nl: "Wat is de 'cashflow doodsspiraal' in Monopoly?"
      },
      options: [
        {
          en: "When you can't afford rent payments",
          es: "Cuando no puedes pagar alquileres",
          de: "Wenn Sie Mietzahlungen nicht leisten können",
          nl: "Wanneer je huurbetalingen niet kunt betalen"
        },
        {
          en: "Mortgaging properties → less income → more mortgages → bankruptcy",
          es: "Hipotecar propiedades → menos ingresos → más hipotecas → bancarrota",
          de: "Grundstücke verpfänden → weniger Einkommen → mehr Verpfändungen → Bankrott",
          nl: "Eigendommen hypothekeren → minder inkomen → meer hypotheken → faillissement"
        },
        {
          en: "Rolling too many doubles sends you to Jail",
          es: "Sacar demasiados dobles te envía a la Cárcel",
          de: "Zu viele Pasche würfeln schickt Sie ins Gefängnis",
          nl: "Te veel dubbelen gooien stuurt je naar Gevangenis"
        },
        {
          en: "Building too many houses causes shortage",
          es: "Construir demasiadas casas causa escasez",
          de: "Zu viele Häuser bauen verursacht Knappheit",
          nl: "Te veel huizen bouwen veroorzaakt schaarste"
        }
      ],
      correct: 1,
      explanation: {
        en: "Death spiral: mortgage properties for cash → lose rent income → need more mortgages → eventual bankruptcy. Avoid at all costs.",
        es: "Espiral de muerte: hipotecar propiedades por efectivo → perder ingresos por alquiler → necesitar más hipotecas → bancarrota eventual. Evitar a toda costa.",
        de: "Todesspirale: Grundstücke für Bargeld verpfänden → Mieteinnahmen verlieren → mehr Verpfändungen benötigen → eventueller Bankrott. Um jeden Preis vermeiden.",
        nl: "Doodsspiraal: eigendommen hypothekeren voor geld → huurinkomsten verliezen → meer hypotheken nodig → uiteindelijk faillissement. Vermijd koste wat kost."
      }
    },
    {
      question: {
        en: "How many cards are in each Chance and Community Chest deck?",
        es: "¿Cuántas cartas hay en cada mazo de Chance y Community Chest?",
        de: "Wie viele Karten gibt es in jedem Ereignis- und Gemeinschaftsfeld-Stapel?",
        nl: "Hoeveel kaarten zitten er in elk Kans en Community Chest deck?"
      },
      options: [
        {
          en: "12 cards each",
          es: "12 cartas cada uno",
          de: "Jeweils 12 Karten",
          nl: "12 kaarten elk"
        },
        {
          en: "16 cards each",
          es: "16 cartas cada uno",
          de: "Jeweils 16 Karten",
          nl: "16 kaarten elk"
        },
        {
          en: "20 cards each",
          es: "20 cartas cada uno",
          de: "Jeweils 20 Karten",
          nl: "20 kaarten elk"
        },
        {
          en: "Different amounts - 16 Chance, 17 Community Chest",
          es: "Cantidades diferentes - 16 Chance, 17 Community Chest",
          de: "Unterschiedliche Mengen - 16 Ereignis, 17 Gemeinschaftsfeld",
          nl: "Verschillende aantallen - 16 Kans, 17 Community Chest"
        }
      ],
      correct: 1,
      explanation: {
        en: "Standard Monopoly has 16 Chance cards and 16 Community Chest cards - both decks have identical card counts.",
        es: "Monopoly estándar tiene 16 cartas de Chance y 16 cartas de Community Chest - ambos mazos tienen recuentos de cartas idénticos.",
        de: "Standard-Monopoly hat 16 Ereigniskarten und 16 Gemeinschaftsfeldkarten - beide Stapel haben identische Kartenzahlen.",
        nl: "Standaard Monopoly heeft 16 Kanskaarten en 16 Community Chest kaarten - beide decks hebben identieke kaartellingen."
      }
    }
  ]
};

  // Export for use in the quiz application
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level6;
  } else if (typeof window !== 'undefined') {
    window.level6 = level6;
  }
})();
