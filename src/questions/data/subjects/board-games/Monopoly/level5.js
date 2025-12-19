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
    },
    {
      question: {
        en: "What's the optimal strategy for the first few rounds of the game?",
        es: "¿Cuál es la estrategia óptima para las primeras rondas del juego?",
        de: "Was ist die optimale Strategie für die ersten Runden des Spiels?",
        nl: "Wat is de optimale strategie voor de eerste ronden van het spel?"
      },
      options: [
        {
          en: "Buy every property you land on",
          es: "Comprar cada propiedad en la que caigas",
          de: "Jede Immobilie kaufen, auf der Sie landen",
          nl: "Koop elk eigendom waarop je landt"
        },
        {
          en: "Save money and only buy strategic properties",
          es: "Ahorrar dinero y solo comprar propiedades estratégicas",
          de: "Geld sparen und nur strategische Immobilien kaufen",
          nl: "Spaar geld en koop alleen strategische eigendommen"
        },
        {
          en: "Focus on railroads first",
          es: "Enfocarse primero en ferrocarriles",
          de: "Zuerst auf Eisenbahnen konzentrieren",
          nl: "Focus eerst op spoorwegen"
        },
        {
          en: "Wait to see what others buy before deciding",
          es: "Esperar a ver qué compran otros antes de decidir",
          de: "Warten, um zu sehen, was andere kaufen, bevor Sie entscheiden",
          nl: "Wacht om te zien wat anderen kopen voordat je beslist"
        }
      ],
      correct: 0,
      explanation: {
        en: "Early game: buy every property you can afford - ownership creates trading opportunities and blocks opponents.",
        es: "Juego temprano: compra cada propiedad que puedas pagar - la propiedad crea oportunidades de intercambio y bloquea a oponentes.",
        de: "Frühes Spiel: Kaufen Sie jede Immobilie, die Sie sich leisten können - Besitz schafft Handelsmöglichkeiten und blockiert Gegner.",
        nl: "Vroeg spel: koop elk eigendom dat je je kunt veroorloven - eigendom creëert ruilmogelijkheden en blokkeert tegenstanders."
      }
    },
    {
      question: {
        en: "What's the expected value of landing on an opponent's orange monopoly with 3 houses?",
        es: "¿Cuál es el valor esperado de caer en un monopolio naranja de un oponente con 3 casas?",
        de: "Was ist der Erwartungswert einer Landung auf einem orangefarbenen Monopol eines Gegners mit 3 Häusern?",
        nl: "Wat is de verwachte waarde van landen op een oranje monopolie van een tegenstander met 3 huizen?"
      },
      options: [
        {
          en: "$450-500 average rent",
          es: "Alquiler promedio de $450-500",
          de: "Durchschnittliche Miete $450-500",
          nl: "Gemiddelde huur $450-500"
        },
        {
          en: "$700-800 average rent",
          es: "Alquiler promedio de $700-800",
          de: "Durchschnittliche Miete $700-800",
          nl: "Gemiddelde huur $700-800"
        },
        {
          en: "$1000+ average rent",
          es: "Alquiler promedio de $1000+",
          de: "Durchschnittliche Miete $1000+",
          nl: "Gemiddelde huur $1000+"
        },
        {
          en: "Depends on which orange property",
          es: "Depende de qué propiedad naranja",
          de: "Hängt davon ab, welche orangefarbene Immobilie",
          nl: "Hangt af van welk oranje eigendom"
        }
      },
      correct: 1,
      explanation: {
        en: "Orange properties with 3 houses charge $700-800 rent, making them extremely dangerous landing zones.",
        es: "Las propiedades naranjas con 3 casas cobran $700-800 de alquiler, convirtiéndolas en zonas de aterrizaje extremadamente peligrosas.",
        de: "Orangefarbene Immobilien mit 3 Häusern verlangen $700-800 Miete, was sie zu extrem gefährlichen Landezonen macht.",
        nl: "Oranje eigendommen met 3 huizen vragen $700-800 huur, waardoor ze extreem gevaarlijke landingszones zijn."
      }
    },
    {
      question: {
        en: "When trading, what's the value of a 'Get Out of Jail Free' card?",
        es: "Al negociar, ¿cuál es el valor de una carta 'Salir de la Cárcel Gratis'?",
        de: "Beim Handel, was ist der Wert einer 'Gefängnis Frei'-Karte?",
        nl: "Bij ruilen, wat is de waarde van een 'Verlaat de Gevangenis Gratis' kaart?"
      },
      options: [
        {
          en: "$50 (the cost to get out of Jail)",
          es: "$50 (el costo de salir de la Cárcel)",
          de: "$50 (die Kosten, um aus dem Gefängnis zu kommen)",
          nl: "$50 (de kosten om uit de Gevangenis te komen)"
        },
        {
          en: "$50-200 depending on game situation",
          es: "$50-200 dependiendo de la situación del juego",
          de: "$50-200 je nach Spielsituation",
          nl: "$50-200 afhankelijk van de spelsituatie"
        },
        {
          en: "Cannot be traded in official rules",
          es: "No se puede negociar en reglas oficiales",
          de: "Kann in offiziellen Regeln nicht gehandelt werden",
          nl: "Kan niet worden geruild in officiële regels"
        },
        {
          en: "Worth one property trade",
          es: "Vale un intercambio de propiedad",
          de: "Wert eines Immobilientauschs",
          nl: "Waard één eigendomsruil"
        }
      ],
      correct: 1,
      explanation: {
        en: "Get Out of Jail Free cards can be traded for $50-200 - more valuable late game when avoiding hotels is critical.",
        es: "Las cartas Salir de la Cárcel Gratis pueden negociarse por $50-200 - más valiosas en juego tardío cuando evitar hoteles es crítico.",
        de: "Gefängnis-Frei-Karten können für $50-200 gehandelt werden - wertvoller im späten Spiel, wenn Hotelvermeidung kritisch ist.",
        nl: "Verlaat de Gevangenis Gratis kaarten kunnen worden geruild voor $50-200 - waardevoller laat in het spel wanneer hotels vermijden kritisch is."
      }
    },
    {
      question: {
        en: "What determines who wins when time expires in tournament play?",
        es: "¿Qué determina quién gana cuando expira el tiempo en el juego de torneo?",
        de: "Was bestimmt, wer gewinnt, wenn die Zeit im Turnierspiel abläuft?",
        nl: "Wat bepaalt wie wint wanneer de tijd afloopt in toernooispel?"
      },
      options: [
        {
          en: "Most properties owned",
          es: "Más propiedades poseídas",
          de: "Die meisten besessenen Immobilien",
          nl: "Meeste eigendommen bezeten"
        },
        {
          en: "Most cash on hand",
          es: "Más efectivo en mano",
          de: "Das meiste Bargeld",
          nl: "Meeste geld in handen"
        },
        {
          en: "Highest total net worth",
          es: "Mayor patrimonio neto total",
          de: "Höchstes Gesamtnettovermögen",
          nl: "Hoogste totale nettowaarde"
        },
        {
          en: "Player with most monopolies",
          es: "Jugador con más monopolios",
          de: "Spieler mit den meisten Monopolen",
          nl: "Speler met meeste monopolies"
        }
      ],
      correct: 2,
      explanation: {
        en: "Winner is determined by total net worth: cash + property values + buildings at cost.",
        es: "El ganador se determina por patrimonio neto total: efectivo + valores de propiedades + edificios al costo.",
        de: "Gewinner wird durch Gesamtnettovermögen bestimmt: Bargeld + Immobilienwerte + Gebäude zu Kosten.",
        nl: "Winnaar wordt bepaald door totale nettowaarde: geld + eigendomswaarden + gebouwen tegen kostprijs."
      }
    },
    {
      question: {
        en: "What's the danger of having too much cash late in the game?",
        es: "¿Cuál es el peligro de tener demasiado efectivo tarde en el juego?",
        de: "Was ist die Gefahr, zu viel Bargeld spät im Spiel zu haben?",
        nl: "Wat is het gevaar van te veel geld laat in het spel?"
      },
      options: [
        {
          en: "No danger - cash is always good",
          es: "No hay peligro - el efectivo siempre es bueno",
          de: "Keine Gefahr - Bargeld ist immer gut",
          nl: "Geen gevaar - geld is altijd goed"
        },
        {
          en: "Unused cash isn't generating rent income",
          es: "Efectivo sin usar no genera ingresos por alquiler",
          de: "Ungenutztes Bargeld generiert keine Mieteinnahmen",
          nl: "Ongebruikt geld genereert geen huurinkomsten"
        },
        {
          en: "Other players will target you",
          es: "Otros jugadores te atacarán",
          de: "Andere Spieler werden Sie angreifen",
          nl: "Andere spelers zullen je targeten"
        },
        {
          en: "Bank takes 10% tax on excess cash",
          es: "El banco toma 10% de impuesto sobre efectivo excedente",
          de: "Bank nimmt 10% Steuer auf überschüssiges Bargeld",
          nl: "Bank neemt 10% belasting op overtollig geld"
        }
      ],
      correct: 1,
      explanation: {
        en: "Late game, excess cash not invested in houses/hotels is wasted opportunity - you should maximize development.",
        es: "Tarde en el juego, el efectivo excedente no invertido en casas/hoteles es oportunidad desperdiciada - debes maximizar el desarrollo.",
        de: "Im späten Spiel ist überschüssiges Bargeld, das nicht in Häuser/Hotels investiert wird, verschwendete Gelegenheit - Sie sollten die Entwicklung maximieren.",
        nl: "Laat in het spel is overtollig geld dat niet is geïnvesteerd in huizen/hotels verspilde kans - je moet ontwikkeling maximaliseren."
      }
    },
    {
      question: {
        en: "Why is Illinois Avenue considered one of the best properties statistically?",
        es: "¿Por qué se considera Illinois Avenue una de las mejores propiedades estadísticamente?",
        de: "Warum gilt Illinois Avenue statistisch als eine der besten Immobilien?",
        nl: "Waarom wordt Illinois Avenue beschouwd als een van de beste eigendommen statistisch?"
      },
      options: [
        {
          en: "It has the highest rent",
          es: "Tiene el alquiler más alto",
          de: "Es hat die höchste Miete",
          nl: "Het heeft de hoogste huur"
        },
        {
          en: "Most landed-on property in the game",
          es: "Propiedad más visitada del juego",
          de: "Am meisten besuchte Immobilie im Spiel",
          nl: "Meest bezochte eigendom in het spel"
        },
        {
          en: "Cheapest to develop",
          es: "Más barata para desarrollar",
          de: "Am günstigsten zu entwickeln",
          nl: "Goedkoopst om te ontwikkelen"
        },
        {
          en: "Multiple Chance cards lead to it",
          es: "Múltiples cartas de Chance llevan a ella",
          de: "Mehrere Ereigniskarten führen dorthin",
          nl: "Meerdere kanskaarten leiden ernaar toe"
        }
      },
      correct: 1,
      explanation: {
        en: "Illinois Avenue is the most landed-on property due to Jail positioning and Chance card effects.",
        es: "Illinois Avenue es la propiedad más visitada debido a la posición de la Cárcel y efectos de cartas de Chance.",
        de: "Illinois Avenue ist die am häufigsten besuchte Immobilie aufgrund der Gefängnisposition und Ereigniskarteneffekte.",
        nl: "Illinois Avenue is het meest bezochte eigendom vanwege Gevangenispositie en effecten van kanskaarten."
      }
    },
    {
      question: {
        en: "What's the 'nuclear option' in desperate late-game situations?",
        es: "¿Cuál es la 'opción nuclear' en situaciones desesperadas de juego tardío?",
        de: "Was ist die 'nukleare Option' in verzweifelten Spätspiel-Situationen?",
        nl: "Wat is de 'nucleaire optie' in wanhopige late-game situaties?"
      },
      options: [
        {
          en: "Mortgaging everything to buy one hotel",
          es: "Hipotecar todo para comprar un hotel",
          de: "Alles beleihen, um ein Hotel zu kaufen",
          nl: "Alles hypothekeren om één hotel te kopen"
        },
        {
          en: "Trading your monopoly to the weakest player",
          es: "Intercambiar tu monopolio al jugador más débil",
          de: "Ihr Monopol dem schwächsten Spieler tauschen",
          nl: "Je monopolie ruilen naar de zwakste speler"
        },
        {
          en: "Declaring bankruptcy to deny assets to leader",
          es: "Declarar bancarrota para negar activos al líder",
          de: "Bankrott erklären, um dem Anführer Vermögenswerte zu verweigern",
          nl: "Faillissement aanvragen om activa aan leider te ontzeggen"
        },
        {
          en: "Selling houses below market value to allies",
          es: "Vender casas por debajo del valor de mercado a aliados",
          de: "Häuser unter Marktwert an Verbündete verkaufen",
          nl: "Huizen onder marktwaarde verkopen aan bondgenoten"
        }
      ],
      correct: 0,
      explanation: {
        en: "When desperate, mortgage everything and focus all resources on maxing out one deadly monopoly with hotels.",
        es: "Cuando estés desesperado, hipoteca todo y enfoca todos los recursos en maximizar un monopolio mortal con hoteles.",
        de: "Wenn verzweifelt, beleihen Sie alles und konzentrieren Sie alle Ressourcen auf die Maximierung eines tödlichen Monopols mit Hotels.",
        nl: "Wanneer wanhopig, hypothekeer alles en focus alle middelen op het maximaliseren van één dodelijk monopolie met hotels."
      }
    },
    {
      question: {
        en: "In multi-player games, what's the kingmaker problem?",
        es: "En juegos multijugador, ¿cuál es el problema del hacedor de reyes?",
        de: "Was ist das Königsmacher-Problem in Mehrspieler-Spielen?",
        nl: "Wat is het kingmaker probleem in meerspelersspellen?"
      },
      options: [
        {
          en: "The richest player always wins",
          es: "El jugador más rico siempre gana",
          de: "Der reichste Spieler gewinnt immer",
          nl: "De rijkste speler wint altijd"
        },
        {
          en: "Eliminated players determine who wins through trades",
          es: "Jugadores eliminados determinan quién gana mediante intercambios",
          de: "Eliminierte Spieler bestimmen durch Handel, wer gewinnt",
          nl: "Geëlimineerde spelers bepalen wie wint door ruilen"
        },
        {
          en: "Losing players' final trades can decide the winner",
          es: "Intercambios finales de jugadores perdedores pueden decidir el ganador",
          de: "Letzte Geschäfte verlierender Spieler können den Gewinner entscheiden",
          nl: "Laatste ruilen van verliezende spelers kunnen de winnaar bepalen"
        },
        {
          en: "Only the banker can win",
          es: "Solo el banquero puede ganar",
          de: "Nur der Banker kann gewinnen",
          nl: "Alleen de bankier kan winnen"
        }
      ],
      correct: 2,
      explanation: {
        en: "Kingmaker problem: when losing, your final trades can determine which remaining player wins - controversial but strategic.",
        es: "Problema del hacedor de reyes: al perder, tus intercambios finales pueden determinar qué jugador restante gana - controvertido pero estratégico.",
        de: "Königsmacher-Problem: Beim Verlieren können Ihre letzten Geschäfte bestimmen, welcher verbleibende Spieler gewinnt - kontrovers, aber strategisch.",
        nl: "Kingmaker probleem: bij verliezen kunnen je laatste ruilen bepalen welke overgebleven speler wint - controversieel maar strategisch."
      }
    },
    {
      question: {
        en: "What's the mathematical breakeven point for buying houses on red properties?",
        es: "¿Cuál es el punto de equilibrio matemático para comprar casas en propiedades rojas?",
        de: "Was ist der mathematische Break-Even-Punkt für den Kauf von Häusern auf roten Immobilien?",
        nl: "Wat is het wiskundige break-even punt voor het kopen van huizen op rode eigendommen?"
      },
      options: [
        {
          en: "1-2 rent collections per property",
          es: "1-2 cobros de alquiler por propiedad",
          de: "1-2 Mieteinnahmen pro Immobilie",
          nl: "1-2 huurinningen per eigendom"
        },
        {
          en: "3-4 rent collections per property",
          es: "3-4 cobros de alquiler por propiedad",
          de: "3-4 Mieteinnahmen pro Immobilie",
          nl: "3-4 huurinningen per eigendom"
        },
        {
          en: "5-6 rent collections per property",
          es: "5-6 cobros de alquiler por propiedad",
          de: "5-6 Mieteinnahmen pro Immobilie",
          nl: "5-6 huurinningen per eigendom"
        },
        {
          en: "10+ rent collections needed",
          es: "10+ cobros de alquiler necesarios",
          de: "10+ Mieteinnahmen erforderlich",
          nl: "10+ huurinningen nodig"
        }
      ],
      correct: 0,
      explanation: {
        en: "With $150 houses and rent jumping from $90 to $450+, you break even after just 1-2 opponent landings.",
        es: "Con casas de $150 y alquiler saltando de $90 a $450+, alcanzas el equilibrio después de solo 1-2 caídas de oponentes.",
        de: "Mit $150 Häusern und Miete, die von $90 auf $450+ springt, erreichen Sie den Break-Even nach nur 1-2 Gegnerlandungen.",
        nl: "Met $150 huizen en huur die springt van $90 naar $450+, bereik je break-even na slechts 1-2 tegenstanders landingen."
      }
    },
    {
      question: {
        en: "What advantage do brown and light blue monopolies have over expensive ones?",
        es: "¿Qué ventaja tienen los monopolios marrón y azul claro sobre los caros?",
        de: "Welchen Vorteil haben braune und hellblaue Monopole gegenüber teuren?",
        nl: "Welk voordeel hebben bruine en lichtblauwe monopolies ten opzichte van dure?"
      },
      options: [
        {
          en: "Higher rent per investment dollar",
          es: "Mayor alquiler por dólar de inversión",
          de: "Höhere Miete pro Investitionsdollar",
          nl: "Hogere huur per investeringsdollar"
        },
        {
          en: "Can be developed much earlier",
          es: "Pueden desarrollarse mucho antes",
          de: "Können viel früher entwickelt werden",
          nl: "Kunnen veel eerder ontwikkeld worden"
        },
        {
          en: "More frequently landed on",
          es: "Más frecuentemente visitados",
          de: "Häufiger besucht",
          nl: "Vaker bezocht"
        },
        {
          en: "Can build hotels immediately",
          es: "Pueden construir hoteles inmediatamente",
          de: "Können sofort Hotels bauen",
          nl: "Kunnen meteen hotels bouwen"
        }
      ],
      correct: 1,
      explanation: {
        en: "Cheap monopolies can be developed quickly early-game, generating cash flow before opponents can afford development.",
        es: "Los monopolios baratos pueden desarrollarse rápidamente al principio del juego, generando flujo de efectivo antes de que los oponentes puedan permitirse el desarrollo.",
        de: "Billige Monopole können früh im Spiel schnell entwickelt werden und generieren Cashflow, bevor Gegner sich Entwicklung leisten können.",
        nl: "Goedkope monopolies kunnen snel vroeg in het spel worden ontwikkeld, wat cashflow genereert voordat tegenstanders ontwikkeling kunnen betalen."
      }
    },
    {
      question: {
        en: "Which Chance card is statistically most valuable to receive?",
        es: "¿Qué carta de Chance es estadísticamente más valiosa para recibir?",
        de: "Welche Ereigniskarte ist statistisch am wertvollsten zu erhalten?",
        nl: "Welke kanskaart is statistisch het meest waardevol om te ontvangen?"
      },
      options: [
        {
          en: "Advance to Go (collect $200)",
          es: "Avanza a Go (cobra $200)",
          de: "Gehe zu Los (kassiere $200)",
          nl: "Ga naar Start (ontvang $200)"
        },
        {
          en: "Bank pays dividend of $50",
          es: "Banco paga dividendo de $50",
          de: "Bank zahlt Dividende von $50",
          nl: "Bank betaalt dividend van $50"
        },
        {
          en: "Get Out of Jail Free",
          es: "Salir de la Cárcel Gratis",
          de: "Gefängnis Frei",
          nl: "Verlaat de Gevangenis Gratis"
        },
        {
          en: "Advance to Illinois Avenue",
          es: "Avanza a Illinois Avenue",
          de: "Gehe zu Illinois Avenue",
          nl: "Ga naar Illinois Avenue"
        }
      },
      correct: 0,
      explanation: {
        en: "Advance to Go gives $200 immediately with no risk, making it the most consistently valuable Chance card.",
        es: "Avanza a Go da $200 inmediatamente sin riesgo, convirtiéndola en la carta de Chance más consistentemente valiosa.",
        de: "Gehe zu Los gibt sofort $200 ohne Risiko, was es zur konsistent wertvollsten Ereigniskarte macht.",
        nl: "Ga naar Start geeft $200 onmiddellijk zonder risico, waardoor het de meest consistent waardevolle kanskaart is."
      }
    },
    {
      question: {
        en: "Why do experienced players prefer 3-4 houses over hotels?",
        es: "¿Por qué los jugadores experimentados prefieren 3-4 casas sobre hoteles?",
        de: "Warum bevorzugen erfahrene Spieler 3-4 Häuser gegenüber Hotels?",
        de: "Waarom geven ervaren spelers de voorkeur aan 3-4 huizen boven hotels?"
      },
      options: [
        {
          en: "Hotels are too expensive",
          es: "Los hoteles son demasiado caros",
          de: "Hotels sind zu teuer",
          nl: "Hotels zijn te duur"
        },
        {
          en: "House shortage denies opponents development",
          es: "Escasez de casas niega desarrollo a oponentes",
          de: "Hausknappheit verweigert Gegnern Entwicklung",
          nl: "Huizenschaarste ontzegt tegenstanders ontwikkeling"
        },
        {
          en: "3-4 houses have better rent",
          es: "3-4 casas tienen mejor alquiler",
          de: "3-4 Häuser haben bessere Miete",
          nl: "3-4 huizen hebben betere huur"
        },
        {
          en: "Hotels can be stolen by opponents",
          es: "Los hoteles pueden ser robados por oponentes",
          de: "Hotels können von Gegnern gestohlen werden",
          nl: "Hotels kunnen door tegenstanders worden gestolen"
        }
      ],
      correct: 1,
      explanation: {
        en: "Keeping 3-4 houses (not hotels) maximizes house usage, preventing opponents from building on their monopolies.",
        es: "Mantener 3-4 casas (no hoteles) maximiza el uso de casas, evitando que los oponentes construyan en sus monopolios.",
        de: "3-4 Häuser behalten (keine Hotels) maximiert die Hausnutzung und verhindert, dass Gegner auf ihren Monopolen bauen.",
        nl: "3-4 huizen houden (geen hotels) maximaliseert huisgebruik, voorkomt dat tegenstanders bouwen op hun monopolies."
      }
    },
    {
      question: {
        en: "What's the optimal bid in auctions for blocking properties?",
        es: "¿Cuál es la oferta óptima en subastas para propiedades de bloqueo?",
        de: "Was ist das optimale Gebot in Auktionen für blockierende Immobilien?",
        nl: "Wat is het optimale bod in veilingen voor blokkerende eigendommen?"
      },
      options: [
        {
          en: "Never pay above 50% of printed price",
          es: "Nunca pagar más del 50% del precio impreso",
          de: "Niemals über 50% des gedruckten Preises zahlen",
          nl: "Betaal nooit meer dan 50% van de gedrukte prijs"
        },
        {
          en: "Bid up to 100% of printed price",
          es: "Pujar hasta 100% del precio impreso",
          de: "Bis zu 100% des gedruckten Preises bieten",
          nl: "Bied tot 100% van de gedrukte prijs"
        },
        {
          en: "Bid above printed price if it blocks strong opponent",
          es: "Pujar por encima del precio impreso si bloquea a oponente fuerte",
          de: "Über dem gedruckten Preis bieten, wenn es starken Gegner blockiert",
          nl: "Bied boven gedrukte prijs als het sterke tegenstander blokkeert"
        },
        {
          en: "Always let opponents buy in auctions",
          es: "Siempre dejar que oponentes compren en subastas",
          de: "Immer Gegner in Auktionen kaufen lassen",
          nl: "Laat tegenstanders altijd kopen in veilingen"
        }
      ],
      correct: 2,
      explanation: {
        en: "Blocking a strong opponent's monopoly is often worth paying above printed price in auctions.",
        es: "Bloquear el monopolio de un oponente fuerte a menudo vale pagar por encima del precio impreso en subastas.",
        de: "Das Blockieren eines Monopols eines starken Gegners ist oft den Preis über dem gedruckten Preis in Auktionen wert.",
        nl: "Het blokkeren van een monopolie van een sterke tegenstander is vaak waard om boven de gedrukte prijs in veilingen te betalen."
      }
    },
    {
      question: {
        en: "What's the strategic value of Mediterranean and Baltic Avenue?",
        es: "¿Cuál es el valor estratégico de Mediterranean y Baltic Avenue?",
        de: "Was ist der strategische Wert von Mediterranean und Baltic Avenue?",
        nl: "Wat is de strategische waarde van Mediterranean en Baltic Avenue?"
      },
      options: [
        {
          en: "Nearly worthless - lowest rent in game",
          es: "Casi sin valor - alquiler más bajo del juego",
          de: "Fast wertlos - niedrigste Miete im Spiel",
          nl: "Bijna waardeloos - laagste huur in het spel"
        },
        {
          en: "Cheapest monopoly to develop early",
          es: "Monopolio más barato para desarrollar temprano",
          de: "Billigstes Monopol für frühe Entwicklung",
          nl: "Goedkoopste monopolie om vroeg te ontwikkelen"
        },
        {
          en: "High landing frequency",
          es: "Alta frecuencia de caída",
          de: "Hohe Besuchsfrequenz",
          nl: "Hoge landingsfrequentie"
        },
        {
          en: "Good for blocking opponents",
          es: "Bueno para bloquear oponentes",
          de: "Gut zum Blockieren von Gegnern",
          nl: "Goed voor het blokkeren van tegenstanders"
        }
      ],
      correct: 1,
      explanation: {
        en: "Brown monopoly costs only $560 total for 2 hotels - can generate early cash before opponents develop.",
        es: "El monopolio marrón cuesta solo $560 en total por 2 hoteles - puede generar efectivo temprano antes de que los oponentes desarrollen.",
        de: "Braunes Monopol kostet nur $560 gesamt für 2 Hotels - kann frühes Geld generieren, bevor Gegner entwickeln.",
        nl: "Bruin monopolie kost slechts $560 totaal voor 2 hotels - kan vroeg geld genereren voordat tegenstanders ontwikkelen."
      }
    },
    {
      question: {
        en: "When should you mortgage properties instead of selling houses?",
        es: "¿Cuándo debes hipotecar propiedades en lugar de vender casas?",
        de: "Wann sollten Sie Immobilien beleihen statt Häuser zu verkaufen?",
        nl: "Wanneer moet je eigendommen hypothekeren in plaats van huizen verkopen?"
      },
      options: [
        {
          en: "Always mortgage first - keep the houses",
          es: "Siempre hipotecar primero - mantener las casas",
          de: "Immer zuerst beleihen - Häuser behalten",
          nl: "Altijd eerst hypothekeren - houd de huizen"
        },
        {
          en: "Always sell houses first - more cash",
          es: "Siempre vender casas primero - más efectivo",
          de: "Immer zuerst Häuser verkaufen - mehr Geld",
          nl: "Altijd eerst huizen verkopen - meer geld"
        },
        {
          en: "Mortgage undeveloped properties, keep houses",
          es: "Hipotecar propiedades no desarrolladas, mantener casas",
          de: "Unbebaute Immobilien beleihen, Häuser behalten",
          nl: "Hypothekeer onontwikkelde eigendommen, houd huizen"
        },
        {
          en: "Never mortgage - always sell houses",
          es: "Nunca hipotecar - siempre vender casas",
          de: "Niemals beleihen - immer Häuser verkaufen",
          nl: "Nooit hypothekeren - altijd huizen verkopen"
        }
      },
      correct: 2,
      explanation: {
        en: "Mortgage single properties and undeveloped monopolies first - keep houses on developed monopolies as long as possible.",
        es: "Hipoteca primero propiedades individuales y monopolios no desarrollados - mantén casas en monopolios desarrollados tanto como sea posible.",
        de: "Beleihen Sie zuerst einzelne Immobilien und unbebaute Monopole - behalten Sie Häuser auf entwickelten Monopolen so lange wie möglich.",
        nl: "Hypothekeer eerst enkele eigendommen en onontwikkelde monopolies - houd huizen op ontwikkelde monopolies zo lang mogelijk."
      }
    },
    {
      question: {
        en: "What's the probability of landing on any orange property from Jail?",
        es: "¿Cuál es la probabilidad de caer en cualquier propiedad naranja desde la Cárcel?",
        de: "Was ist die Wahrscheinlichkeit, auf einer orangefarbenen Immobilie vom Gefängnis aus zu landen?",
        nl: "Wat is de kans om op enig oranje eigendom te landen vanuit de Gevangenis?"
      },
      options: [
        {
          en: "About 10%",
          es: "Alrededor del 10%",
          de: "Etwa 10%",
          nl: "Ongeveer 10%"
        },
        {
          en: "About 20%",
          es: "Alrededor del 20%",
          de: "Etwa 20%",
          nl: "Ongeveer 20%"
        },
        {
          en: "About 30%",
          es: "Alrededor del 30%",
          de: "Etwa 30%",
          nl: "Ongeveer 30%"
        },
        {
          en: "About 40%",
          es: "Alrededor del 40%",
          de: "Etwa 40%",
          nl: "Ongeveer 40%"
        }
      ],
      correct: 1,
      explanation: {
        en: "Orange properties are 6-9 spaces from Jail, making them ~20% landing probability - highest in the game.",
        es: "Las propiedades naranjas están a 6-9 espacios de la Cárcel, dándoles ~20% de probabilidad de caída - la más alta del juego.",
        de: "Orangefarbene Immobilien sind 6-9 Felder vom Gefängnis entfernt, was ~20% Landungswahrscheinlichkeit ergibt - die höchste im Spiel.",
        nl: "Oranje eigendommen zijn 6-9 vakken van de Gevangenis, wat ~20% landingskans geeft - hoogste in het spel."
      }
    },
    {
      question: {
        en: "Which trading strategy is most effective in 4-player games?",
        es: "¿Qué estrategia de negociación es más efectiva en juegos de 4 jugadores?",
        de: "Welche Handelsstrategie ist in 4-Spieler-Spielen am effektivsten?",
        nl: "Welke ruilstrategie is het meest effectief in 4-spelersspellen?"
      },
      options: [
        {
          en: "Never trade - wait for bankruptcies",
          es: "Nunca negociar - esperar bancarrotas",
          de: "Niemals handeln - auf Bankrotte warten",
          nl: "Nooit ruilen - wacht op faillissementen"
        },
        {
          en: "Trade with everyone equally",
          es: "Negociar con todos por igual",
          de: "Mit allen gleich handeln",
          nl: "Ruil met iedereen gelijkelijk"
        },
        {
          en: "Form alliances to isolate the leader",
          es: "Formar alianzas para aislar al líder",
          de: "Allianzen bilden, um den Anführer zu isolieren",
          nl: "Vorm allianties om de leider te isoleren"
        },
        {
          en: "Only trade when you get clear advantage",
          es: "Solo negociar cuando obtienes ventaja clara",
          de: "Nur handeln, wenn Sie klaren Vorteil haben",
          nl: "Ruil alleen wanneer je duidelijk voordeel krijgt"
        }
      },
      correct: 3,
      explanation: {
        en: "In competitive play, only make trades where you gain more value than your opponent - avoid 'fair' deals.",
        es: "En juego competitivo, solo haz intercambios donde ganes más valor que tu oponente - evita tratos 'justos'.",
        de: "Im Wettkampfspiel machen Sie nur Geschäfte, bei denen Sie mehr Wert als Ihr Gegner gewinnen - vermeiden Sie 'faire' Geschäfte.",
        nl: "In competitief spel maak alleen ruilen waarbij je meer waarde krijgt dan je tegenstander - vermijd 'eerlijke' deals."
      }
    },
    {
      question: {
        en: "What determines optimal house placement on 3-property monopolies?",
        es: "¿Qué determina la colocación óptima de casas en monopolios de 3 propiedades?",
        de: "Was bestimmt die optimale Hausplatzierung auf 3-Immobilien-Monopolen?",
        nl: "Wat bepaalt optimale huisplaatsing op 3-eigendom monopolies?"
      },
      options: [
        {
          en: "Put all houses on most expensive property",
          es: "Poner todas las casas en la propiedad más cara",
          de: "Alle Häuser auf teuerste Immobilie setzen",
          nl: "Zet alle huizen op duurste eigendom"
        },
        {
          en: "Must build evenly due to rules",
          es: "Debe construir uniformemente debido a reglas",
          de: "Muss aufgrund von Regeln gleichmäßig bauen",
          nl: "Moet gelijkmatig bouwen volgens regels"
        },
        {
          en: "Focus on middle property for position",
          es: "Enfocarse en propiedad del medio por posición",
          de: "Auf mittlere Immobilie für Position konzentrieren",
          nl: "Focus op middelste eigendom voor positie"
        },
        {
          en: "Build on cheapest property first",
          es: "Construir primero en propiedad más barata",
          de: "Zuerst auf billigster Immobilie bauen",
          nl: "Bouw eerst op goedkoopste eigendom"
        }
      },
      correct: 1,
      explanation: {
        en: "Rules require even building - you cannot put 2 houses on one property until all properties have 1 house.",
        es: "Las reglas requieren construcción uniforme - no puedes poner 2 casas en una propiedad hasta que todas tengan 1 casa.",
        de: "Regeln erfordern gleichmäßiges Bauen - Sie können nicht 2 Häuser auf eine Immobilie setzen, bis alle 1 Haus haben.",
        nl: "Regels vereisen gelijkmatig bouwen - je kunt geen 2 huizen op één eigendom zetten totdat alle eigendommen 1 huis hebben."
      }
    },
    {
      question: {
        en: "Why is St. James Place particularly valuable in the orange monopoly?",
        es: "¿Por qué St. James Place es particularmente valioso en el monopolio naranja?",
        de: "Warum ist St. James Place im orangefarbenen Monopol besonders wertvoll?",
        nl: "Waarom is St. James Place bijzonder waardevol in het oranje monopolie?"
      },
      options: [
        {
          en: "It has the highest rent",
          es: "Tiene el alquiler más alto",
          de: "Es hat die höchste Miete",
          nl: "Het heeft de hoogste huur"
        },
        {
          en: "First orange property from Jail (6 spaces)",
          es: "Primera propiedad naranja desde la Cárcel (6 espacios)",
          de: "Erste orangefarbene Immobilie vom Gefängnis (6 Felder)",
          nl: "Eerste oranje eigendom vanaf Gevangenis (6 vakken)"
        },
        {
          en: "Cheapest orange property",
          es: "Propiedad naranja más barata",
          de: "Billigste orangefarbene Immobilie",
          nl: "Goedkoopste oranje eigendom"
        },
        {
          en: "All orange properties are equal",
          es: "Todas las propiedades naranjas son iguales",
          de: "Alle orangefarbenen Immobilien sind gleich",
          nl: "Alle oranje eigendommen zijn gelijk"
        }
      ],
      correct: 1,
      explanation: {
        en: "St. James Place is exactly 6 spaces from Jail - most common roll (6 or doubles 3+3) lands here.",
        es: "St. James Place está exactamente a 6 espacios de la Cárcel - la tirada más común (6 o dobles 3+3) cae aquí.",
        de: "St. James Place ist genau 6 Felder vom Gefängnis entfernt - häufigster Wurf (6 oder Pasch 3+3) landet hier.",
        nl: "St. James Place is precies 6 vakken van de Gevangenis - meest voorkomende worp (6 of dubbel 3+3) landt hier."
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
