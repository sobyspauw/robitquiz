// Quiz Template - Level 5: Bord spelletjes - Monopoly
(function() {
  const level5 = {
  name: {
    en: "Monopoly",
    es: "Monopoly",
    de: "Monopoly",
    nl: "Monopoly"
  },
  questions: [
    {
      question: {
        en: "Which property group statistically gets landed on most due to its position after Jail?",
        es: "¿Qué grupo de propiedades estadísticamente recibe más caídas debido a su posición después de la Cárcel?",
        de: "Welche Grundstücksgruppe wird statistisch am häufigsten besucht aufgrund ihrer Position nach dem Gefängnis?",
        nl: "Welke eigendomsgroep wordt statistisch het vaakst bezocht vanwege de positie na de Gevangenis?"
      },
      options: [
        {
          en: "Light Blue",
          es: "Azul Claro",
          de: "Hellblau",
          nl: "Lichtblauw"
        },
        {
          en: "Orange",
          es: "Naranja",
          de: "Orange",
          nl: "Oranje"
        },
        {
          en: "Red",
          es: "Rojo",
          de: "Rot",
          nl: "Rood"
        },
        {
          en: "Yellow",
          es: "Amarillo",
          de: "Gelb",
          nl: "Geel"
        }
      ],
      correct: 1,
      explanation: {
        en: "Orange properties are landed on most frequently because they're 6-9 spaces from Jail, matching common dice rolls.",
        es: "Las propiedades naranjas son las más visitadas porque están a 6-9 espacios de la Cárcel, coincidiendo con tiradas de dados comunes.",
        de: "Orange Grundstücke werden am häufigsten besucht, da sie 6-9 Felder vom Gefängnis entfernt sind, was häufigen Würfelwürfen entspricht.",
        nl: "Oranje eigendommen worden het vaakst bezocht omdat ze 6-9 vakken van de Gevangenis zijn, wat overeenkomt met veel voorkomende dobbelsteenworpen."
      }
    },
    {
      question: {
        en: "What's the optimal strategy when you own 2 out of 3 properties in a color group?",
        es: "¿Cuál es la estrategia óptima cuando posees 2 de 3 propiedades en un grupo de color?",
        de: "Was ist die optimale Strategie, wenn Sie 2 von 3 Grundstücken in einer Farbgruppe besitzen?",
        nl: "Wat is de optimale strategie wanneer je 2 van de 3 eigendommen in een kleurgroep bezit?"
      },
      options: [
        {
          en: "Always trade aggressively to complete it",
          es: "Siempre negocia agresivamente para completarlo",
          de: "Immer aggressiv handeln, um es zu vervollständigen",
          nl: "Altijd agressief ruilen om het te voltooien"
        },
        {
          en: "Block others from completing their sets first",
          es: "Impide que otros completen sus conjuntos primero",
          de: "Andere daran hindern, ihre Sets zuerst zu vervollständigen",
          nl: "Voorkom dat anderen eerst hun sets voltooien"
        },
        {
          en: "Wait for bankruptcy auctions",
          es: "Espera las subastas de bancarrota",
          de: "Auf Insolvenzauktionen warten",
          nl: "Wacht op faillissementsveilingen"
        },
        {
          en: "Depends on which group and game position",
          es: "Depende del grupo y la posición del juego",
          de: "Hängt von der Gruppe und Spielposition ab",
          nl: "Hangt af van welke groep en speelpositie"
        }
      ],
      correct: 3,
      explanation: {
        en: "Strategy depends on the property group's value, your cash position, and whether completing it gives opponents monopolies.",
        es: "La estrategia depende del valor del grupo de propiedades, tu posición de efectivo y si completarlo da monopolios a los oponentes.",
        de: "Die Strategie hängt vom Wert der Grundstücksgruppe, Ihrer Bargeldposition und davon ab, ob die Vervollständigung den Gegnern Monopole verschafft.",
        nl: "De strategie hangt af van de waarde van de eigendomsgroep, je cashpositie en of voltooien tegenstanders monopolies geeft."
      }
    },
    {
      question: {
        en: "In a trade, what should you value most?",
        es: "En un intercambio, ¿qué debes valorar más?",
        de: "Was sollten Sie bei einem Handel am meisten schätzen?",
        nl: "Wat moet je het meest waarderen bij een ruil?"
      },
      options: [
        {
          en: "Cash payment",
          es: "Pago en efectivo",
          de: "Barzahlung",
          nl: "Contante betaling"
        },
        {
          en: "Completing a monopoly",
          es: "Completar un monopolio",
          de: "Ein Monopol vervollständigen",
          nl: "Een monopolie voltooien"
        },
        {
          en: "Getting railroads",
          es: "Obtener ferrocarriles",
          de: "Eisenbahnen erhalten",
          nl: "Spoorwegen krijgen"
        },
        {
          en: "Getting utilities",
          es: "Obtener servicios públicos",
          de: "Versorgungsunternehmen erhalten",
          nl: "Nutsbedrijven krijgen"
        }
      ],
      correct: 1,
      explanation: {
        en: "Completing a monopoly is most valuable because only monopolies can have houses/hotels, which generate winning income.",
        es: "Completar un monopolio es lo más valioso porque solo los monopolios pueden tener casas/hoteles, que generan ingresos ganadores.",
        de: "Ein Monopol zu vervollständigen ist am wertvollsten, da nur Monopole Häuser/Hotels haben können, die gewinnbringende Einnahmen generieren.",
        nl: "Een monopolie voltooien is het meest waardevol omdat alleen monopolies huizen/hotels kunnen hebben, die winnende inkomsten genereren."
      }
    },
    {
      question: {
        en: "When should you mortgage properties?",
        es: "¿Cuándo debes hipotecar propiedades?",
        de: "Wann sollten Sie Grundstücke beleihen?",
        nl: "Wanneer moet je eigendommen hypothekeren?"
      },
      options: [
        {
          en: "Never mortgage - always keep properties active",
          es: "Nunca hipotecar - siempre mantener propiedades activas",
          de: "Niemals beleihen - Grundstücke immer aktiv halten",
          nl: "Nooit hypothekeren - houd eigendommen altijd actief"
        },
        {
          en: "Mortgage utilities and railroads first before colored properties",
          es: "Hipotecar servicios y ferrocarriles primero antes que propiedades de color",
          de: "Versorgungsunternehmen und Eisenbahnen zuerst beleihen vor farbigen Grundstücken",
          nl: "Hypothekeer eerst nutsbedrijven en spoorwegen voor gekleurde eigendommen"
        },
        {
          en: "Mortgage your most expensive properties first",
          es: "Hipotecar tus propiedades más caras primero",
          de: "Beleihen Sie zuerst Ihre teuersten Grundstücke",
          nl: "Hypothekeer eerst je duurste eigendommen"
        },
        {
          en: "Mortgage randomly to confuse opponents",
          es: "Hipotecar al azar para confundir a los oponentes",
          de: "Zufällig beleihen, um Gegner zu verwirren",
          nl: "Hypothekeer willekeurig om tegenstanders te verwarren"
        }
      ],
      correct: 1,
      explanation: {
        en: "Mortgage non-monopoly properties (utilities, railroads) first since they can't have houses. Keep monopolies unmortgaged.",
        es: "Hipoteca primero propiedades que no son monopolio (servicios, ferrocarriles) ya que no pueden tener casas. Mantén los monopolios sin hipotecar.",
        de: "Beleihen Sie zuerst Nicht-Monopol-Grundstücke (Versorgungsunternehmen, Eisenbahnen), da diese keine Häuser haben können. Halten Sie Monopole unbelastet.",
        nl: "Hypothekeer eerst niet-monopolie eigendommen (nutsbedrijven, spoorwegen) omdat ze geen huizen kunnen hebben. Houd monopolies onhypothekeerd."
      }
    },
    {
      question: {
        en: "What's the best cash reserve to maintain before building houses?",
        es: "¿Cuál es la mejor reserva de efectivo para mantener antes de construir casas?",
        de: "Was ist die beste Barreserve, die Sie vor dem Bau von Häusern aufrechterhalten sollten?",
        nl: "Wat is de beste kasreserve om aan te houden voordat je huizen bouwt?"
      },
      options: [
        {
          en: "$0 - invest everything in houses immediately",
          es: "$0 - invertir todo en casas inmediatamente",
          de: "$0 - sofort alles in Häuser investieren",
          nl: "$0 - investeer alles onmiddellijk in huizen"
        },
        {
          en: "$100-200 minimum",
          es: "$100-200 mínimo",
          de: "$100-200 Minimum",
          nl: "$100-200 minimum"
        },
        {
          en: "$300-500 buffer for rent and fees",
          es: "$300-500 de reserva para alquiler y tarifas",
          de: "$300-500 Puffer für Miete und Gebühren",
          nl: "$300-500 buffer voor huur en kosten"
        },
        {
          en: "$1000+ to be safe",
          es: "$1000+ para estar seguro",
          de: "$1000+ um sicher zu sein",
          nl: "$1000+ om veilig te zijn"
        }
      ],
      correct: 2,
      explanation: {
        en: "Keep $300-500 reserve to survive rent payments and tax spaces while you build up house income.",
        es: "Mantén una reserva de $300-500 para sobrevivir pagos de alquiler e impuestos mientras acumulas ingresos de casas.",
        de: "Behalten Sie eine Reserve von 300-500 $, um Miet- und Steuerzahlungen zu überleben, während Sie Hauseinnahmen aufbauen.",
        nl: "Houd $300-500 reserve om huurbetalingen en belastingvakken te overleven terwijl je huizeninkomsten opbouwt."
      }
    },
    {
      question: {
        en: "Which trading mistake do beginners make most often?",
        es: "¿Qué error de negociación cometen los principiantes más a menudo?",
        de: "Welchen Handelsfehler machen Anfänger am häufigsten?",
        nl: "Welke ruilfout maken beginners het vaakst?"
      },
      options: [
        {
          en: "Trading away the third property an opponent needs for a monopoly",
          es: "Intercambiar la tercera propiedad que un oponente necesita para un monopolio",
          de: "Die dritte Eigenschaft wegtauschen, die ein Gegner für ein Monopol benötigt",
          nl: "Het derde eigendom wegruilen dat een tegenstander nodig heeft voor een monopolie"
        },
        {
          en: "Not asking for enough cash",
          es: "No pedir suficiente efectivo",
          de: "Nicht genug Bargeld verlangen",
          nl: "Niet genoeg geld vragen"
        },
        {
          en: "Trading too early in the game",
          es: "Negociar demasiado temprano en el juego",
          de: "Zu früh im Spiel handeln",
          nl: "Te vroeg in het spel ruilen"
        },
        {
          en: "Refusing all trade offers",
          es: "Rechazar todas las ofertas de intercambio",
          de: "Alle Handelsangebote ablehnen",
          nl: "Alle ruilaanbiedingen weigeren"
        }
      ],
      correct: 0,
      explanation: {
        en: "The biggest mistake is giving opponents their third property for a monopoly without getting your own monopoly in return.",
        es: "El mayor error es dar a los oponentes su tercera propiedad para un monopolio sin obtener tu propio monopolio a cambio.",
        de: "Der größte Fehler ist, Gegnern ihre dritte Eigenschaft für ein Monopol zu geben, ohne im Gegenzug ein eigenes Monopol zu erhalten.",
        nl: "De grootste fout is tegenstanders hun derde eigendom voor een monopolie geven zonder zelf een monopolie terug te krijgen."
      }
    },
    {
      question: {
        en: "What's the typical ROI (turns to break even) on building 3 houses per property on orange?",
        es: "¿Cuál es el ROI típico (turnos para alcanzar el punto de equilibrio) al construir 3 casas por propiedad en naranja?",
        de: "Was ist der typische ROI (Runden bis Break-even) beim Bau von 3 Häusern pro Grundstück auf Orange?",
        nl: "Wat is de typische ROI (beurten om break-even te draaien) bij het bouwen van 3 huizen per eigendom op oranje?"
      },
      options: [
        {
          en: "1-2 opponent landings",
          es: "1-2 caídas de oponentes",
          de: "1-2 Gegner-Landungen",
          nl: "1-2 tegenstanderlandingen"
        },
        {
          en: "3-4 opponent landings",
          es: "3-4 caídas de oponentes",
          de: "3-4 Gegner-Landungen",
          nl: "3-4 tegenstanderlandingen"
        },
        {
          en: "5-6 opponent landings",
          es: "5-6 caídas de oponentes",
          de: "5-6 Gegner-Landungen",
          nl: "5-6 tegenstanderlandingen"
        },
        {
          en: "7-8 opponent landings",
          es: "7-8 caídas de oponentes",
          de: "7-8 Gegner-Landungen",
          nl: "7-8 tegenstanderlandingen"
        }
      ],
      correct: 0,
      explanation: {
        en: "Orange with 3 houses charges $450-550 rent, recovering the ~$500 build cost in just 1-2 landings - excellent ROI.",
        es: "Naranja con 3 casas cobra $450-550 de alquiler, recuperando el costo de construcción de ~$500 en solo 1-2 caídas - excelente ROI.",
        de: "Orange mit 3 Häusern verlangt 450-550 $ Miete und amortisiert die ~500 $ Baukosten in nur 1-2 Landungen - ausgezeichneter ROI.",
        nl: "Oranje met 3 huizen vraagt $450-550 huur, waarmee de ~$500 bouwkosten in slechts 1-2 landingen worden terugverdiend - uitstekende ROI."
      }
    },
    {
      question: {
        en: "In a 4-player game, what's the minimum number of monopolies needed to likely win?",
        es: "En un juego de 4 jugadores, ¿cuál es el número mínimo de monopolios necesarios para probablemente ganar?",
        de: "Was ist in einem 4-Spieler-Spiel die Mindestanzahl an Monopolen, um wahrscheinlich zu gewinnen?",
        nl: "Wat is het minimum aantal monopolies nodig om waarschijnlijk te winnen in een 4-spelersspel?"
      },
      options: [
        {
          en: "1 monopoly with hotels is usually enough",
          es: "1 monopolio con hoteles suele ser suficiente",
          de: "1 Monopol mit Hotels reicht normalerweise",
          nl: "1 monopolie met hotels is meestal genoeg"
        },
        {
          en: "2 monopolies minimum",
          es: "2 monopolios mínimo",
          de: "Mindestens 2 Monopole",
          nl: "Minimum 2 monopolies"
        },
        {
          en: "3 monopolies to dominate",
          es: "3 monopolios para dominar",
          de: "3 Monopole zum Dominieren",
          nl: "3 monopolies om te domineren"
        },
        {
          en: "You need all 8 monopolies",
          es: "Necesitas los 8 monopolios",
          de: "Sie brauchen alle 8 Monopole",
          nl: "Je hebt alle 8 monopolies nodig"
        }
      ],
      correct: 0,
      explanation: {
        en: "One well-developed monopoly (3-4 houses each) is usually sufficient to bankrupt opponents through high rent.",
        es: "Un monopolio bien desarrollado (3-4 casas cada uno) suele ser suficiente para arruinar a los oponentes con alquiler alto.",
        de: "Ein gut entwickeltes Monopol (jeweils 3-4 Häuser) reicht normalerweise aus, um Gegner durch hohe Miete in den Bankrott zu treiben.",
        nl: "Eén goed ontwikkeld monopolie (3-4 huizen elk) is meestal voldoende om tegenstanders failliet te laten gaan door hoge huur."
      }
    },
    {
      question: {
        en: "Which property group offers the best value for development cost vs. rent income?",
        es: "¿Qué grupo de propiedades ofrece el mejor valor por costo de desarrollo vs. ingreso por alquiler?",
        de: "Welche Grundstücksgruppe bietet das beste Preis-Leistungs-Verhältnis für Entwicklungskosten vs. Mieteinnahmen?",
        nl: "Welke eigendomsgroep biedt de beste waarde voor ontwikkelingskosten vs. huurinkomsten?"
      },
      options: [
        {
          en: "Light Blue (cheapest to develop)",
          es: "Azul Claro (más barato para desarrollar)",
          de: "Hellblau (am günstigsten zu entwickeln)",
          nl: "Lichtblauw (goedkoopst om te ontwikkelen)"
        },
        {
          en: "Orange (balance of cost and traffic)",
          es: "Naranja (equilibrio de costo y tráfico)",
          de: "Orange (Balance von Kosten und Verkehr)",
          nl: "Oranje (balans van kosten en verkeer)"
        },
        {
          en: "Red (high rent, moderate cost)",
          es: "Rojo (alquiler alto, costo moderado)",
          de: "Rot (hohe Miete, moderate Kosten)",
          nl: "Rood (hoge huur, gematigde kosten)"
        },
        {
          en: "Dark Blue (highest rent)",
          es: "Azul Oscuro (alquiler más alto)",
          de: "Dunkelblau (höchste Miete)",
          nl: "Donkerblauw (hoogste huur)"
        }
      ],
      correct: 1,
      explanation: {
        en: "Orange offers the best ROI: moderate house cost ($100), high landing frequency, and strong rent ($450-800 with houses).",
        es: "Naranja ofrece el mejor ROI: costo moderado de casa ($100), alta frecuencia de caídas y alquiler fuerte ($450-800 con casas).",
        de: "Orange bietet den besten ROI: moderate Hauskosten ($100), hohe Besuchsfrequenz und starke Miete ($450-800 mit Häusern).",
        nl: "Oranje biedt de beste ROI: gematigde huiskosten ($100), hoge landingsfrequentie en sterke huur ($450-800 met huizen)."
      }
    },
    {
      question: {
        en: "When is it strategic to stay in Jail rather than pay to get out?",
        es: "¿Cuándo es estratégico permanecer en la Cárcel en lugar de pagar para salir?",
        de: "Wann ist es strategisch, im Gefängnis zu bleiben, anstatt zu zahlen, um rauszukommen?",
        nl: "Wanneer is het strategisch om in de Gevangenis te blijven in plaats van te betalen om eruit te komen?"
      },
      options: [
        {
          en: "Never - always get out immediately",
          es: "Nunca - siempre sal inmediatamente",
          de: "Niemals - immer sofort rauskommen",
          nl: "Nooit - kom altijd meteen eruit"
        },
        {
          en: "Early game to save money",
          es: "Juego temprano para ahorrar dinero",
          de: "Frühes Spiel, um Geld zu sparen",
          nl: "Vroeg in het spel om geld te besparen"
        },
        {
          en: "Late game when opponents have many developed properties",
          es: "Juego tardío cuando los oponentes tienen muchas propiedades desarrolladas",
          de: "Spätes Spiel, wenn Gegner viele entwickelte Grundstücke haben",
          nl: "Laat in het spel wanneer tegenstanders veel ontwikkelde eigendommen hebben"
        },
        {
          en: "When you're winning by a lot",
          es: "Cuando estás ganando por mucho",
          de: "Wenn Sie mit großem Vorsprung gewinnen",
          nl: "Wanneer je met veel voorsprong wint"
        }
      ],
      correct: 2,
      explanation: {
        en: "Late game, staying in Jail avoids landing on opponents' hotels while you still collect rent on your properties.",
        es: "Tarde en el juego, permanecer en la Cárcel evita caer en hoteles de oponentes mientras sigues cobrando alquiler en tus propiedades.",
        de: "Im späten Spiel vermeidet es, im Gefängnis zu bleiben, auf Hotels der Gegner zu landen, während Sie weiterhin Miete für Ihre Grundstücke kassieren.",
        nl: "Laat in het spel vermijdt in de Gevangenis blijven landen op hotels van tegenstanders terwijl je nog steeds huur int op je eigendommen."
      }
    },
    {
      question: {
        en: "What's the mathematical probability of rolling a 7 with two dice?",
        es: "¿Cuál es la probabilidad matemática de sacar un 7 con dos dados?",
        de: "Was ist die mathematische Wahrscheinlichkeit, mit zwei Würfeln eine 7 zu würfeln?",
        nl: "Wat is de wiskundige kans om 7 te gooien met twee dobbelstenen?"
      },
      options: [
        {
          en: "1 in 6 (16.7%)",
          es: "1 de 6 (16.7%)",
          de: "1 zu 6 (16.7%)",
          nl: "1 op 6 (16.7%)"
        },
        {
          en: "1 in 5 (20%)",
          es: "1 de 5 (20%)",
          de: "1 zu 5 (20%)",
          nl: "1 op 5 (20%)"
        },
        {
          en: "1 in 8 (12.5%)",
          es: "1 de 8 (12.5%)",
          de: "1 zu 8 (12.5%)",
          nl: "1 op 8 (12.5%)"
        },
        {
          en: "1 in 12 (8.3%)",
          es: "1 de 12 (8.3%)",
          de: "1 zu 12 (8.3%)",
          nl: "1 op 12 (8.3%)"
        }
      ],
      correct: 0,
      explanation: {
        en: "7 is the most common dice roll (6 combinations out of 36), at 16.7% - important for predicting opponent movements.",
        es: "7 es la tirada de dados más común (6 combinaciones de 36), al 16.7% - importante para predecir movimientos de oponentes.",
        de: "7 ist der häufigste Würfelwurf (6 Kombinationen von 36), bei 16,7% - wichtig für die Vorhersage von Gegnerbewegungen.",
        nl: "7 is de meest voorkomende dobbelsteenworp (6 combinaties van 36), bij 16.7% - belangrijk voor het voorspellen van tegenstanders bewegingen."
      }
    },
    {
      question: {
        en: "In advanced play, which immunity deal is most valuable?",
        es: "En juego avanzado, ¿qué acuerdo de inmunidad es más valioso?",
        de: "Welches Immunitätsgeschäft ist im fortgeschrittenen Spiel am wertvollsten?",
        nl: "In geavanceerd spel, welke immuniteitsdeal is het meest waardevol?"
      },
      options: [
        {
          en: "Immunity from all rent payments",
          es: "Inmunidad de todos los pagos de alquiler",
          de: "Immunität vor allen Mietzahlungen",
          nl: "Immuniteit van alle huurbetalingen"
        },
        {
          en: "Rent-free landing on specific monopoly in exchange for same",
          es: "Caída sin alquiler en monopolio específico a cambio de lo mismo",
          de: "Mietfreie Landung auf bestimmtem Monopol im Austausch für dasselbe",
          nl: "Huurvrije landing op specifiek monopolie in ruil voor hetzelfde"
        },
        {
          en: "Free use of Get Out of Jail cards",
          es: "Uso gratuito de tarjetas de Salir de la Cárcel",
          de: "Kostenlose Nutzung von Gefängnis-frei-Karten",
          nl: "Gratis gebruik van Verlaat Gevangenis kaarten"
        },
        {
          en: "Immunity deals are banned in tournament rules",
          es: "Los acuerdos de inmunidad están prohibidos en reglas de torneo",
          de: "Immunitätsgeschäfte sind in Turnierregeln verboten",
          nl: "Immuniteitdeals zijn verboden in toernooiregels"
        }
      ],
      correct: 3,
      explanation: {
        en: "Official tournament rules prohibit immunity deals and rent exemptions - all players must follow standard rules.",
        es: "Las reglas oficiales de torneo prohíben acuerdos de inmunidad y exenciones de alquiler - todos los jugadores deben seguir las reglas estándar.",
        de: "Offizielle Turnierregeln verbieten Immunitätsgeschäfte und Mietbefreiungen - alle Spieler müssen die Standardregeln befolgen.",
        nl: "Officiële toernooiregels verbieden immuniteitdeals en huurvrijstellingen - alle spelers moeten de standaardregels volgen."
      }
    },
    {
      question: {
        en: "What's the optimal house distribution strategy when you have 2 monopolies?",
        es: "¿Cuál es la estrategia óptima de distribución de casas cuando tienes 2 monopolios?",
        de: "Was ist die optimale Hausverteilungsstrategie, wenn Sie 2 Monopole haben?",
        nl: "Wat is de optimale huisverdelingsstrategie wanneer je 2 monopolies hebt?"
      },
      options: [
        {
          en: "Build evenly on both monopolies",
          es: "Construir uniformemente en ambos monopolios",
          de: "Gleichmäßig auf beiden Monopolen bauen",
          nl: "Gelijkmatig bouwen op beide monopolies"
        },
        {
          en: "Max out one monopoly first (3-4 houses each)",
          es: "Maximizar primero un monopolio (3-4 casas cada uno)",
          de: "Zuerst ein Monopol maximieren (jeweils 3-4 Häuser)",
          nl: "Maximaliseer eerst één monopolie (3-4 huizen elk)"
        },
        {
          en: "Put all houses on whichever has higher landing probability",
          es: "Poner todas las casas en el que tiene mayor probabilidad de caída",
          de: "Alle Häuser auf dasjenige mit höherer Landungswahrscheinlichkeit setzen",
          nl: "Zet alle huizen op degene met hogere landingskans"
        },
        {
          en: "Build hotels on both immediately",
          es: "Construir hoteles en ambos inmediatamente",
          de: "Sofort Hotels auf beiden bauen",
          nl: "Bouw meteen hotels op beide"
        }
      ],
      correct: 1,
      explanation: {
        en: "Focus on maxing one monopoly to 3-4 houses first for strong rent, then develop the second - concentrates your threat.",
        es: "Concéntrate en maximizar primero un monopolio a 3-4 casas para alquiler fuerte, luego desarrolla el segundo - concentra tu amenaza.",
        de: "Konzentrieren Sie sich darauf, zuerst ein Monopol auf 3-4 Häuser zu maximieren für starke Miete, dann entwickeln Sie das zweite - konzentriert Ihre Bedrohung.",
        nl: "Focus op het maximaliseren van één monopolie eerst naar 3-4 huizen voor sterke huur, ontwikkel dan de tweede - concentreert je dreiging."
      }
    },
    {
      question: {
        en: "Which scenario justifies trading your monopoly-completing property to an opponent?",
        es: "¿Qué escenario justifica intercambiar tu propiedad de completar monopolio a un oponente?",
        de: "Welches Szenario rechtfertigt es, Ihre monopolvervollständigende Eigenschaft an einen Gegner zu tauschen?",
        nl: "Welk scenario rechtvaardigt het ruilen van je monopolie-voltooiende eigendom naar een tegenstander?"
      },
      options: [
        {
          en: "Never make this trade under any circumstances",
          es: "Nunca hagas este intercambio bajo ninguna circunstancia",
          de: "Machen Sie diesen Handel niemals unter keinen Umständen",
          nl: "Doe deze ruil nooit onder welke omstandigheden"
        },
        {
          en: "Only if you get your own monopoly + significant cash",
          es: "Solo si obtienes tu propio monopolio + efectivo significativo",
          de: "Nur wenn Sie Ihr eigenes Monopol + erhebliches Bargeld erhalten",
          nl: "Alleen als je je eigen monopolie + aanzienlijk geld krijgt"
        },
        {
          en: "If they pay double the property's printed value",
          es: "Si pagan el doble del valor impreso de la propiedad",
          de: "Wenn sie das Doppelte des gedruckten Wertes der Immobilie zahlen",
          nl: "Als ze het dubbele van de gedrukte waarde van het eigendom betalen"
        },
        {
          en: "When you're desperate for cash to avoid bankruptcy",
          es: "Cuando estás desesperado por efectivo para evitar la bancarrota",
          de: "Wenn Sie verzweifelt Bargeld brauchen, um Konkurs zu vermeiden",
          nl: "Wanneer je wanhopig geld nodig hebt om faillissement te vermijden"
        }
      ],
      correct: 1,
      explanation: {
        en: "Only trade a property that completes an opponent's monopoly if you also complete your own monopoly in the same deal.",
        es: "Solo intercambia una propiedad que completa el monopolio de un oponente si también completas tu propio monopolio en el mismo trato.",
        de: "Tauschen Sie nur eine Eigenschaft, die ein Monopol eines Gegners vervollständigt, wenn Sie auch Ihr eigenes Monopol im selben Geschäft vervollständigen.",
        nl: "Ruil alleen een eigendom dat het monopolie van een tegenstander voltooit als je ook je eigen monopolie in dezelfde deal voltooit."
      }
    },
    {
      question: {
        en: "What's the house-buying strategy when houses are scarce (few left in bank)?",
        es: "¿Cuál es la estrategia de compra de casas cuando las casas son escasas (pocas quedan en el banco)?",
        de: "Was ist die Hauskaufstrategie, wenn Häuser knapp sind (wenige in der Bank)?",
        nl: "Wat is de huiskoopstrategie wanneer huizen schaars zijn (weinig over in de bank)?"
      },
      options: [
        {
          en: "Build to 4 houses and don't upgrade to hotels (house monopoly)",
          es: "Construir hasta 4 casas y no mejorar a hoteles (monopolio de casas)",
          de: "Bis zu 4 Häuser bauen und nicht zu Hotels aufwerten (Hausmonopol)",
          nl: "Bouw tot 4 huizen en upgrade niet naar hotels (huizenmonopolie)"
        },
        {
          en: "Rush to build hotels to free up houses",
          es: "Apresurarse a construir hoteles para liberar casas",
          de: "Schnell Hotels bauen, um Häuser freizugeben",
          nl: "Haast je om hotels te bouwen om huizen vrij te maken"
        },
        {
          en: "Wait for others to build hotels first",
          es: "Esperar a que otros construyan hoteles primero",
          de: "Warten, bis andere zuerst Hotels bauen",
          nl: "Wacht tot anderen eerst hotels bouwen"
        },
        {
          en: "Buy houses evenly across all monopolies",
          es: "Comprar casas uniformemente en todos los monopolios",
          de: "Häuser gleichmäßig über alle Monopole kaufen",
          nl: "Koop huizen gelijkmatig over alle monopolies"
        }
      ],
      correct: 0,
      explanation: {
        en: "With a house shortage, keep 4 houses per property (don't upgrade to hotels) to prevent opponents from building.",
        es: "Con escasez de casas, mantén 4 casas por propiedad (no mejorar a hoteles) para evitar que los oponentes construyan.",
        de: "Bei Hausknappheit behalten Sie 4 Häuser pro Grundstück (nicht zu Hotels aufwerten), um Gegner am Bauen zu hindern.",
        nl: "Bij huizenschaarste houd 4 huizen per eigendom (niet upgraden naar hotels) om tegenstanders te beletten te bouwen."
      }
    },
    {
      question: {
        en: "In a balanced trade where both players complete monopolies, what extra factor matters most?",
        es: "En un intercambio equilibrado donde ambos jugadores completan monopolios, ¿qué factor adicional importa más?",
        de: "Bei einem ausgewogenen Handel, bei dem beide Spieler Monopole vervollständigen, welcher zusätzliche Faktor zählt am meisten?",
        nl: "In een gebalanceerde ruil waarbij beide spelers monopolies voltooien, welke extra factor is het belangrijkst?"
      },
      options: [
        {
          en: "Who has more cash to develop",
          es: "Quién tiene más efectivo para desarrollar",
          de: "Wer mehr Bargeld zur Entwicklung hat",
          nl: "Wie meer geld heeft om te ontwikkelen"
        },
        {
          en: "Which monopoly has cheaper development costs",
          es: "Qué monopolio tiene costos de desarrollo más baratos",
          de: "Welches Monopol günstigere Entwicklungskosten hat",
          nl: "Welk monopolie goedkopere ontwikkelingskosten heeft"
        },
        {
          en: "Which monopoly has better board position/traffic",
          es: "Qué monopolio tiene mejor posición/tráfico en el tablero",
          de: "Welches Monopol bessere Brettposition/Verkehr hat",
          nl: "Welk monopolie betere bordpositie/verkeer heeft"
        },
        {
          en: "All three factors must be weighed together",
          es: "Los tres factores deben ser sopesados juntos",
          de: "Alle drei Faktoren müssen zusammen abgewogen werden",
          nl: "Alle drie factoren moeten samen worden afgewogen"
        }
      ],
      correct: 3,
      explanation: {
        en: "Evaluate trades based on: current cash, development costs, and landing probability - all three factors determine who wins.",
        es: "Evalúa intercambios basándote en: efectivo actual, costos de desarrollo y probabilidad de caída - los tres factores determinan quién gana.",
        de: "Bewerten Sie Handel basierend auf: aktuellem Bargeld, Entwicklungskosten und Landungswahrscheinlichkeit - alle drei Faktoren bestimmen den Gewinner.",
        nl: "Evalueer ruilen op basis van: huidig geld, ontwikkelingskosten en landingskans - alle drie factoren bepalen wie wint."
      }
    },
    {
      question: {
        en: "When should you accept an unfavorable trade?",
        es: "¿Cuándo debes aceptar un intercambio desfavorable?",
        de: "Wann sollten Sie einen ungünstigen Handel akzeptieren?",
        nl: "Wanneer moet je een ongunstige ruil accepteren?"
      },
      options: [
        {
          en: "Never accept unfavorable trades",
          es: "Nunca aceptes intercambios desfavorables",
          de: "Niemals ungünstige Geschäfte akzeptieren",
          nl: "Accepteer nooit ongunstige ruilen"
        },
        {
          en: "When you're in last place and need to take risks",
          es: "Cuando estás en último lugar y necesitas tomar riesgos",
          de: "Wenn Sie auf dem letzten Platz sind und Risiken eingehen müssen",
          nl: "Wanneer je op de laatste plaats staat en risico's moet nemen"
        },
        {
          en: "To prevent a stronger player from winning",
          es: "Para evitar que un jugador más fuerte gane",
          de: "Um zu verhindern, dass ein stärkerer Spieler gewinnt",
          nl: "Om te voorkomen dat een sterkere speler wint"
        },
        {
          en: "When it breaks a stalemate and creates action",
          es: "Cuando rompe un estancamiento y crea acción",
          de: "Wenn es eine Pattsituation durchbricht und Aktion schafft",
          nl: "Wanneer het een patstelling doorbreekt en actie creëert"
        }
      ],
      correct: 1,
      explanation: {
        en: "Accept slightly unfavorable trades when losing badly - playing safe guarantees defeat, but risks create comeback chances.",
        es: "Acepta intercambios ligeramente desfavorables cuando estás perdiendo mucho - jugar seguro garantiza la derrota, pero los riesgos crean oportunidades de remontada.",
        de: "Akzeptieren Sie leicht ungünstige Geschäfte, wenn Sie schlecht verlieren - sicheres Spielen garantiert Niederlage, aber Risiken schaffen Comeback-Chancen.",
        nl: "Accepteer enigszins ongunstige ruilen wanneer je zwaar aan het verliezen bent - veilig spelen garandeert nederlaag, maar risico's creëren comeback kansen."
      }
    },
    {
      question: {
        en: "What's the strategic value of owning 3 railroads vs. a cheap monopoly?",
        es: "¿Cuál es el valor estratégico de poseer 3 ferrocarriles vs. un monopolio barato?",
        de: "Was ist der strategische Wert des Besitzes von 3 Eisenbahnen vs. eines billigen Monopols?",
        nl: "Wat is de strategische waarde van het bezitten van 3 spoorwegen vs. een goedkoop monopolie?"
      },
      options: [
        {
          en: "3 railroads ($300 total rent) are better than any monopoly",
          es: "3 ferrocarriles ($300 de alquiler total) son mejores que cualquier monopolio",
          de: "3 Eisenbahnen ($300 Gesamtmiete) sind besser als jedes Monopol",
          nl: "3 spoorwegen ($300 totale huur) zijn beter dan elk monopolie"
        },
        {
          en: "Cheap monopoly is always better - it can have houses",
          es: "Monopolio barato siempre es mejor - puede tener casas",
          de: "Billiges Monopol ist immer besser - es kann Häuser haben",
          nl: "Goedkoop monopolie is altijd beter - het kan huizen hebben"
        },
        {
          en: "3 railroads provide steady income; monopoly has higher ceiling",
          es: "3 ferrocarriles proporcionan ingresos estables; monopolio tiene techo más alto",
          de: "3 Eisenbahnen bieten stetige Einnahmen; Monopol hat höhere Obergrenze",
          nl: "3 spoorwegen bieden stabiel inkomen; monopolie heeft hoger plafond"
        },
        {
          en: "They're exactly equal in value",
          es: "Son exactamente iguales en valor",
          de: "Sie sind genau gleich im Wert",
          nl: "Ze zijn precies gelijk in waarde"
        }
      ],
      correct: 2,
      explanation: {
        en: "3 railroads provide consistent $100 rent, but a monopoly with houses can generate $200-1000+ - higher risk, higher reward.",
        es: "3 ferrocarriles proporcionan alquiler consistente de $100, pero un monopolio con casas puede generar $200-1000+ - mayor riesgo, mayor recompensa.",
        de: "3 Eisenbahnen bieten konstante 100 $ Miete, aber ein Monopol mit Häusern kann 200-1000+ $ generieren - höheres Risiko, höhere Belohnung.",
        nl: "3 spoorwegen bieden consistente $100 huur, maar een monopolie met huizen kan $200-1000+ genereren - hoger risico, hogere beloning."
      }
    },
    {
      question: {
        en: "What's the most common mistake when auctions occur?",
        es: "¿Cuál es el error más común cuando ocurren subastas?",
        de: "Was ist der häufigste Fehler bei Auktionen?",
        nl: "Wat is de meest voorkomende fout bij veilingen?"
      },
      options: [
        {
          en: "Bidding too aggressively on every property",
          es: "Pujar demasiado agresivamente en cada propiedad",
          de: "Zu aggressiv auf jede Immobilie bieten",
          nl: "Te agressief bieden op elk eigendom"
        },
        {
          en: "Never participating in auctions",
          es: "Nunca participar en subastas",
          de: "Niemals an Auktionen teilnehmen",
          nl: "Nooit deelnemen aan veilingen"
        },
        {
          en: "Not recognizing when a property blocks opponent monopolies",
          es: "No reconocer cuándo una propiedad bloquea monopolios de oponentes",
          de: "Nicht erkennen, wann eine Immobilie Gegner-Monopole blockiert",
          nl: "Niet herkennen wanneer een eigendom monopolies van tegenstanders blokkeert"
        },
        {
          en: "Bidding above printed price",
          es: "Pujar por encima del precio impreso",
          de: "Über dem gedruckten Preis bieten",
          nl: "Bieden boven de gedrukte prijs"
        }
      ],
      correct: 2,
      explanation: {
        en: "The key auction strategy is identifying blocking properties - bid aggressively on properties that prevent opponent monopolies.",
        es: "La clave de la estrategia de subasta es identificar propiedades de bloqueo - puja agresivamente en propiedades que previenen monopolios de oponentes.",
        de: "Die wichtigste Auktionsstrategie ist die Identifizierung blockierender Immobilien - bieten Sie aggressiv auf Immobilien, die Gegner-Monopole verhindern.",
        nl: "De belangrijkste veilingstrategie is het identificeren van blokkerende eigendommen - bied agressief op eigendommen die monopolies van tegenstanders voorkomen."
      }
    },
    {
      question: {
        en: "In tournament play, what's the typical time limit per game?",
        es: "En el juego de torneo, ¿cuál es el límite de tiempo típico por juego?",
        de: "Wie ist das typische Zeitlimit pro Spiel im Turniersspiel?",
        nl: "Wat is het typische tijdslimiet per spel in toernooispel?"
      },
      options: [
        {
          en: "30 minutes",
          es: "30 minutos",
          de: "30 Minuten",
          nl: "30 minuten"
        },
        {
          en: "60 minutes (1 hour)",
          es: "60 minutos (1 hora)",
          de: "60 Minuten (1 Stunde)",
          nl: "60 minuten (1 uur)"
        },
        {
          en: "90 minutes (1.5 hours)",
          es: "90 minutos (1.5 horas)",
          de: "90 Minuten (1,5 Stunden)",
          nl: "90 minuten (1,5 uur)"
        },
        {
          en: "No time limit - play until bankruptcy",
          es: "Sin límite de tiempo - jugar hasta la bancarrota",
          de: "Keine Zeitbegrenzung - spielen bis zum Bankrott",
          nl: "Geen tijdslimiet - speel tot faillissement"
        }
      ],
      correct: 1,
      explanation: {
        en: "Official tournament games use a 60-minute time limit, with the richest player winning if no one is bankrupted.",
        es: "Los juegos de torneo oficiales usan un límite de tiempo de 60 minutos, con el jugador más rico ganando si nadie queda en bancarrota.",
        de: "Offizielle Turnierspiele haben ein 60-Minuten-Zeitlimit, wobei der reichste Spieler gewinnt, wenn niemand bankrott geht.",
        nl: "Officiële toernooispelen gebruiken een 60-minuten tijdslimiet, waarbij de rijkste speler wint als niemand failliet gaat."
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
