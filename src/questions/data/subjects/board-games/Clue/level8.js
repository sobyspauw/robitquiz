// Quiz Template - Level 8: Bord spelletjes - Clue
(function() {
  const level8 = {
    name: {
      en: "Cluedo - Champion",
      es: "Cluedo - Campeón",
      de: "Cluedo - Champion",
      nl: "Cluedo - Kampioen"
    },
    questions: [
      {
        question: {
          en: "At championship level, what is deduction path dependency analysis?",
          es: "A nivel de campeonato, ¿qué es el análisis de dependencia de trayectoria de deducción?",
          de: "Was ist auf Meisterschaftsniveau die Deduktionspfadabhängigkeitsanalyse?",
          nl: "Wat is op kampioenschapsniveau deductiepadafhankelijkheidsanalyse?"
        },
        options: [
          {
            en: "Recognizing that order of information acquisition affects final solution probability distributions",
            es: "Reconocer que el orden de adquisición de información afecta las distribuciones de probabilidad de solución final",
            de: "Erkennen, dass die Reihenfolge des Informationserwerbs die endgültigen Lösungswahrscheinlichkeitsverteilungen beeinflusst",
            nl: "Erkennen dat volgorde van informatieverwerving de uiteindelijke oplossingswaarschijnlijkheidsverdelingen beïnvloedt"
          },
          {
            en: "Following a fixed deduction sequence",
            es: "Seguir una secuencia de deducción fija",
            de: "Einer festen Deduktionssequenz folgen",
            nl: "Een vaste deductiesequentie volgen"
          },
          {
            en: "Analyzing past game paths",
            es: "Analizar trayectorias de juegos pasados",
            de: "Vergangene Spielpfade analysieren",
            nl: "Eerdere spelpaden analyseren"
          },
          {
            en: "Tracking dependency relationships",
            es: "Rastrear relaciones de dependencia",
            de: "Abhängigkeitsbeziehungen verfolgen",
            nl: "Afhankelijkheidsrelaties bijhouden"
          }
        ],
        correct: 0,
        explanation: {
          en: "Deduction path dependency acknowledges that Cluedo information isn't path-independent. Learning card A before B may yield different probability distributions than learning B before A, due to conditional dependencies. Championship players actively manage information acquisition ordering to optimize their probability models.",
          es: "La dependencia de trayectoria de deducción reconoce que la información de Cluedo no es independiente de la trayectoria. Aprender carta A antes de B puede generar distribuciones de probabilidad diferentes a aprender B antes de A, debido a dependencias condicionales.",
          de: "Deduktionspfadabhängigkeit erkennt an, dass Cluedo-Informationen nicht pfadunabhängig sind. Das Lernen von Karte A vor B kann andere Wahrscheinlichkeitsverteilungen ergeben als das Lernen von B vor A, aufgrund bedingter Abhängigkeiten.",
          nl: "Deductiepadafhankelijkheid erkent dat Cluedo-informatie niet padonafhankelijk is. Kaart A leren voor B kan verschillende waarschijnlijkheidsverdelingen opleveren dan B leren voor A, vanwege voorwaardelijke afhankelijkheden."
        }
      },
      {
        question: {
          en: "What advanced Cluedo concept helps at this level?",
          es: "¿Qué concepto avanzado de Cluedo ayuda en este nivel?",
          de: "Welches fortgeschrittene Cluedo-Konzept hilft auf dieser Ebene?",
          nl: "Welk geavanceerd Cluedo-concept helpt op dit niveau?"
        },
        options: [
          {
            en: "Advanced probability tracking",
            es: "Seguimiento de probabilidad avanzado",
            de: "Fortgeschrittenes Wahrscheinlichkeitstracking",
            nl: "Geavanceerde waarschijnlijkheidstracking"
          },
          {
            en: "Basic note-taking",
            es: "Toma de notas básica",
            de: "Grundlegende Notizen",
            nl: "Basale notities"
          },
          {
            en: "Random guessing",
            es: "Adivinación aleatoria",
            de: "Zufälliges Raten",
            nl: "Willekeurig raden"
          },
          {
            en: "Ignoring other players",
            es: "Ignorar otros jugadores",
            de: "Andere Spieler ignorieren",
            nl: "Andere spelers negeren"
          }
        ],
        correct: 0,
        explanation: {
          en: "Championship players use advanced probability models to track all possible card distributions and update them continuously based on new information.",
          es: "Los jugadores de campeonato usan modelos de probabilidad avanzados para rastrear todas las distribuciones de cartas posibles y actualizarlas continuamente.",
          de: "Meisterschaftsspieler verwenden fortgeschrittene Wahrscheinlichkeitsmodelle, um alle möglichen Kartenverteilungen zu verfolgen.",
          nl: "Kampioenschapsspelers gebruiken geavanceerde waarschijnlijkheidsmodellen om alle mogelijke kaartverdelingen bij te houden."
        }
      },
      {
        question: {
          en: "What is information-theoretic card showing in championship Cluedo?",
          es: "¿Qué es la muestra de cartas de teoría de la información en Cluedo de campeonato?",
          de: "Was ist informationstheoretisches Kartenzeigen im Meisterschafts-Cluedo?",
          nl: "Wat is informatietheoretisch kaarten tonen in kampioenschap Cluedo?"
        },
        options: [
          {
            en: "Choosing which card to show based on minimizing information leaked to opponents",
            es: "Elegir qué carta mostrar basándose en minimizar la información filtrada a los oponentes",
            de: "Wählen, welche Karte gezeigt wird, basierend auf der Minimierung der an Gegner durchgesickerten Informationen",
            nl: "Kiezen welke kaart te tonen gebaseerd op het minimaliseren van uitgelekte informatie naar tegenstanders"
          },
          {
            en: "Always showing the same card",
            es: "Mostrar siempre la misma carta",
            de: "Immer die gleiche Karte zeigen",
            nl: "Altijd dezelfde kaart tonen"
          },
          {
            en: "Showing cards randomly",
            es: "Mostrar cartas aleatoriamente",
            de: "Karten zufällig zeigen",
            nl: "Kaarten willekeurig tonen"
          },
          {
            en: "Showing the rarest card",
            es: "Mostrar la carta más rara",
            de: "Die seltenste Karte zeigen",
            nl: "De zeldzaamste kaart tonen"
          }
        ],
        correct: 0,
        explanation: {
          en: "Expert players apply information theory when choosing which card to reveal. They calculate which card disclosure minimizes the bits of information gained by opponents while maximizing their own strategic position.",
          es: "Los jugadores expertos aplican la teoría de la información al elegir qué carta revelar. Calculan qué divulgación de carta minimiza los bits de información ganados por los oponentes mientras maximizan su propia posición estratégica.",
          de: "Expertspieler wenden Informationstheorie an, wenn sie wählen, welche Karte sie aufdecken. Sie berechnen, welche Kartenoffenlegung die von Gegnern gewonnenen Informationsbits minimiert und gleichzeitig ihre eigene strategische Position maximiert.",
          nl: "Ervaren spelers passen informatietheorie toe bij het kiezen welke kaart te onthullen. Ze berekenen welke kaartopenbaring de bits aan informatie voor tegenstanders minimaliseert terwijl ze hun eigen strategische positie maximaliseren."
        }
      },
      {
        question: {
          en: "What is the multi-agent reasoning problem in Cluedo at expert level?",
          es: "¿Cuál es el problema de razonamiento multi-agente en Cluedo a nivel experto?",
          de: "Was ist das Multi-Agenten-Reasoning-Problem in Cluedo auf Expertenniveau?",
          nl: "Wat is het multi-agent redeneerprobleem in Cluedo op expertniveau?"
        },
        options: [
          {
            en: "Modeling what each opponent knows and what they think you know",
            es: "Modelar lo que cada oponente sabe y lo que piensan que tú sabes",
            de: "Modellieren, was jeder Gegner weiß und was er denkt, dass Sie wissen",
            nl: "Modelleren wat elke tegenstander weet en wat zij denken dat jij weet"
          },
          {
            en: "Playing multiple games simultaneously",
            es: "Jugar múltiples juegos simultáneamente",
            de: "Mehrere Spiele gleichzeitig spielen",
            nl: "Meerdere spellen tegelijk spelen"
          },
          {
            en: "Controlling multiple player tokens",
            es: "Controlar múltiples fichas de jugadores",
            de: "Mehrere Spielerfiguren kontrollieren",
            nl: "Meerdere speelstukken besturen"
          },
          {
            en: "Reasoning about computer AI opponents",
            es: "Razonar sobre oponentes de IA de computadora",
            de: "Über Computer-KI-Gegner nachdenken",
            nl: "Redeneren over computer AI-tegenstanders"
          }
        ],
        correct: 0,
        explanation: {
          en: "Championship-level play requires recursive reasoning: knowing what cards you've shown, what opponents have revealed, and critically, what each opponent believes about other players' knowledge states.",
          es: "El juego a nivel de campeonato requiere razonamiento recursivo: saber qué cartas has mostrado, qué han revelado los oponentes y, críticamente, qué cree cada oponente sobre los estados de conocimiento de otros jugadores.",
          de: "Meisterschaftsniveau-Spiel erfordert rekursives Denken: wissen, welche Karten Sie gezeigt haben, was Gegner offenbart haben und kritisch, was jeder Gegner über die Wissenszustände anderer Spieler glaubt.",
          nl: "Spel op kampioenschapsniveau vereist recursief redeneren: weten welke kaarten je hebt getoond, wat tegenstanders hebben onthuld en cruciaal, wat elke tegenstander gelooft over de kennistoestanden van andere spelers."
        }
      },
      {
        question: {
          en: "What is strategic suggestion optimization in championship Cluedo?",
          es: "¿Qué es la optimización de sugerencias estratégicas en Cluedo de campeonato?",
          de: "Was ist strategische Vorschlagsoptimierung im Meisterschafts-Cluedo?",
          nl: "Wat is strategische suggestieoptimalisatie in kampioenschap Cluedo?"
        },
        options: [
          {
            en: "Crafting suggestions that maximize information gain while minimizing information revealed",
            es: "Elaborar sugerencias que maximicen la ganancia de información mientras minimizan la información revelada",
            de: "Vorschläge erstellen, die Informationsgewinn maximieren und gleichzeitig offenbarte Informationen minimieren",
            nl: "Suggesties maken die informatieverwerving maximaliseren terwijl ze onthulde informatie minimaliseren"
          },
          {
            en: "Making random suggestions",
            es: "Hacer sugerencias aleatorias",
            de: "Zufällige Vorschläge machen",
            nl: "Willekeurige suggesties doen"
          },
          {
            en: "Always suggesting your own cards",
            es: "Siempre sugerir tus propias cartas",
            de: "Immer die eigenen Karten vorschlagen",
            nl: "Altijd je eigen kaarten suggereren"
          },
          {
            en: "Suggesting the same combination repeatedly",
            es: "Sugerir la misma combinación repetidamente",
            de: "Die gleiche Kombination wiederholt vorschlagen",
            nl: "Dezelfde combinatie herhaaldelijk suggereren"
          }
        ],
        correct: 0,
        explanation: {
          en: "Expert players carefully construct each suggestion as a probabilistic experiment, balancing the information they gain from who shows cards against the information opponents deduce about their hand.",
          es: "Los jugadores expertos construyen cuidadosamente cada sugerencia como un experimento probabilístico, equilibrando la información que obtienen de quién muestra cartas contra la información que los oponentes deducen sobre su mano.",
          de: "Expertspieler konstruieren sorgfältig jeden Vorschlag als probabilistisches Experiment und balancieren die Informationen, die sie daraus gewinnen, wer Karten zeigt, gegen die Informationen, die Gegner über ihr Blatt ableiten.",
          nl: "Ervaren spelers construeren zorgvuldig elke suggestie als een probabilistisch experiment, waarbij ze de informatie die ze krijgen van wie kaarten toont afwegen tegen de informatie die tegenstanders afleiden over hun hand."
        }
      },
      {
        question: {
          en: "What is the Bayesian update principle in championship Cluedo?",
          es: "¿Cuál es el principio de actualización bayesiana en Cluedo de campeonato?",
          de: "Was ist das Bayesianische Update-Prinzip im Meisterschafts-Cluedo?",
          nl: "Wat is het Bayesiaanse update-principe in kampioenschap Cluedo?"
        },
        options: [
          {
            en: "Continuously updating probability distributions for all cards based on each new piece of evidence",
            es: "Actualizar continuamente las distribuciones de probabilidad para todas las cartas basándose en cada nueva evidencia",
            de: "Kontinuierliches Aktualisieren der Wahrscheinlichkeitsverteilungen für alle Karten basierend auf jedem neuen Beweisstück",
            nl: "Continu bijwerken van waarschijnlijkheidsverdelingen voor alle kaarten gebaseerd op elk nieuw bewijs"
          },
          {
            en: "Making a single guess at the end",
            es: "Hacer una sola suposición al final",
            de: "Am Ende eine einzelne Vermutung machen",
            nl: "Eén enkele gok maken aan het einde"
          },
          {
            en: "Ignoring early game information",
            es: "Ignorar información del juego temprano",
            de: "Frühe Spielinformationen ignorieren",
            nl: "Vroege spelinformatie negeren"
          },
          {
            en: "Using only direct observations",
            es: "Usar solo observaciones directas",
            de: "Nur direkte Beobachtungen verwenden",
            nl: "Alleen directe waarnemingen gebruiken"
          }
        ],
        correct: 0,
        explanation: {
          en: "Expert players maintain dynamic probability matrices that are updated with Bayesian inference after every suggestion and card showing, incorporating both direct and indirect evidence.",
          es: "Los jugadores expertos mantienen matrices de probabilidad dinámicas que se actualizan con inferencia bayesiana después de cada sugerencia y muestra de carta, incorporando evidencia directa e indirecta.",
          de: "Expertspieler pflegen dynamische Wahrscheinlichkeitsmatrizen, die nach jedem Vorschlag und Kartenzeigen mit Bayesianischer Inferenz aktualisiert werden und sowohl direkte als auch indirekte Beweise einbeziehen.",
          nl: "Ervaren spelers onderhouden dynamische waarschijnlijkheidsmatrices die worden bijgewerkt met Bayesiaanse inferentie na elke suggestie en kaart tonen, waarbij zowel direct als indirect bewijs wordt verwerkt."
        }
      },
      {
        question: {
          en: "What is card distribution entropy in Cluedo theory?",
          es: "¿Qué es la entropía de distribución de cartas en la teoría de Cluedo?",
          de: "Was ist Kartenverteilungsentropie in der Cluedo-Theorie?",
          nl: "Wat is kaartverdelingsentropie in Cluedo-theorie?"
        },
        options: [
          {
            en: "A measure of uncertainty about where each card is located",
            es: "Una medida de incertidumbre sobre dónde se encuentra cada carta",
            de: "Ein Maß für Unsicherheit darüber, wo sich jede Karte befindet",
            nl: "Een maat voor onzekerheid over waar elke kaart zich bevindt"
          },
          {
            en: "The random shuffling of cards",
            es: "El barajado aleatorio de cartas",
            de: "Das zufällige Mischen von Karten",
            nl: "Het willekeurig schudden van kaarten"
          },
          {
            en: "The order cards are dealt",
            es: "El orden en que se reparten las cartas",
            de: "Die Reihenfolge, in der Karten ausgeteilt werden",
            nl: "De volgorde waarin kaarten worden gedeeld"
          },
          {
            en: "Card quality ratings",
            es: "Calificaciones de calidad de cartas",
            de: "Kartenqualitätsbewertungen",
            nl: "Kaartkwaliteitsbeoordelingen"
          }
        ],
        correct: 0,
        explanation: {
          en: "Entropy measures the uncertainty in card locations. Expert players aim to reduce entropy for solution cards while maintaining high entropy about their own hand to opponents.",
          es: "La entropía mide la incertidumbre en las ubicaciones de las cartas. Los jugadores expertos buscan reducir la entropía para las cartas de solución mientras mantienen alta entropía sobre su propia mano para los oponentes.",
          de: "Entropie misst die Unsicherheit in Kartenpositionen. Expertspieler zielen darauf ab, Entropie für Lösungskarten zu reduzieren, während sie hohe Entropie über ihr eigenes Blatt gegenüber Gegnern aufrechterhalten.",
          nl: "Entropie meet de onzekerheid in kaartlocaties. Ervaren spelers streven ernaar entropie voor oplossingskaarten te verminderen terwijl ze hoge entropie over hun eigen hand naar tegenstanders behouden."
        }
      },
      {
        question: {
          en: "What is the optimal accusation threshold strategy?",
          es: "¿Cuál es la estrategia óptima de umbral de acusación?",
          de: "Was ist die optimale Anschuldigungsschwellenstrategie?",
          nl: "Wat is de optimale beschuldigingsdrempelstrategie?"
        },
        options: [
          {
            en: "Calculating the probability threshold at which expected value of accusing exceeds waiting",
            es: "Calcular el umbral de probabilidad en el cual el valor esperado de acusar excede esperar",
            de: "Berechnen der Wahrscheinlichkeitsschwelle, bei der der Erwartungswert des Anschuldigens das Warten übersteigt",
            nl: "Berekenen van de waarschijnlijkheidsdrempel waarbij de verwachte waarde van beschuldigen het wachten overtreft"
          },
          {
            en: "Accusing as soon as possible",
            es: "Acusar tan pronto como sea posible",
            de: "So schnell wie möglich anklagen",
            nl: "Zo snel mogelijk beschuldigen"
          },
          {
            en: "Waiting until absolutely certain",
            es: "Esperar hasta estar absolutamente seguro",
            de: "Warten bis absolut sicher",
            nl: "Wachten tot absoluut zeker"
          },
          {
            en: "Accusing when opponents are close",
            es: "Acusar cuando los oponentes están cerca",
            de: "Anklagen wenn Gegner nahe sind",
            nl: "Beschuldigen wanneer tegenstanders dichtbij zijn"
          }
        ],
        correct: 0,
        explanation: {
          en: "Championship players use game theory to determine when probability of being correct times win value exceeds expected value of additional information gathering, accounting for opponent progress.",
          es: "Los jugadores de campeonato usan teoría de juegos para determinar cuándo la probabilidad de estar correcto multiplicada por el valor de ganar excede el valor esperado de recopilar información adicional, contabilizando el progreso del oponente.",
          de: "Meisterschaftsspieler verwenden Spieltheorie, um zu bestimmen, wann die Wahrscheinlichkeit, richtig zu liegen, mal Gewinnwert den Erwartungswert zusätzlicher Informationsbeschaffung übersteigt, unter Berücksichtigung des Gegnerprogresses.",
          nl: "Kampioenschapsspelers gebruiken speltheorie om te bepalen wanneer de kans op gelijk hebben maal winwaarde de verwachte waarde van aanvullende informatieverzameling overtreft, rekening houdend met de voortgang van tegenstanders."
        }
      },
      {
        question: {
          en: "What is suggestion sequence game theory in Cluedo?",
          es: "¿Qué es la teoría de juegos de secuencia de sugerencias en Cluedo?",
          de: "Was ist Vorschlagssequenz-Spieltheorie in Cluedo?",
          nl: "Wat is suggestiesequentie speltheorie in Cluedo?"
        },
        options: [
          {
            en: "Planning multiple suggestions ahead to create optimal information extraction sequences",
            es: "Planificar múltiples sugerencias por adelantado para crear secuencias óptimas de extracción de información",
            de: "Mehrere Vorschläge im Voraus planen, um optimale Informationsextraktionssequenzen zu erstellen",
            nl: "Meerdere suggesties vooruit plannen om optimale informatie-extractiesequenties te creëren"
          },
          {
            en: "Making suggestions in alphabetical order",
            es: "Hacer sugerencias en orden alfabético",
            de: "Vorschläge in alphabetischer Reihenfolge machen",
            nl: "Suggesties in alfabetische volgorde doen"
          },
          {
            en: "Repeating successful suggestions",
            es: "Repetir sugerencias exitosas",
            de: "Erfolgreiche Vorschläge wiederholen",
            nl: "Succesvolle suggesties herhalen"
          },
          {
            en: "Following opponent suggestion patterns",
            es: "Seguir patrones de sugerencias de oponentes",
            de: "Gegnerischen Vorschlagsmustern folgen",
            nl: "Suggestiepatronen van tegenstanders volgen"
          }
        ],
        correct: 0,
        explanation: {
          en: "Expert players don't optimize individual suggestions in isolation but plan sequences that build upon each other, with each suggestion designed to disambiguate results from previous ones.",
          es: "Los jugadores expertos no optimizan sugerencias individuales aisladamente sino que planifican secuencias que se construyen entre sí, con cada sugerencia diseñada para desambiguar resultados de las anteriores.",
          de: "Expertspieler optimieren einzelne Vorschläge nicht isoliert, sondern planen Sequenzen, die aufeinander aufbauen, wobei jeder Vorschlag darauf ausgelegt ist, Ergebnisse früherer zu disambiguieren.",
          nl: "Ervaren spelers optimaliseren individuele suggesties niet geïsoleerd maar plannen sequenties die op elkaar voortbouwen, waarbij elke suggestie is ontworpen om resultaten van vorige te verduidelijken."
        }
      },
      {
        question: {
          en: "What is passive information extraction in championship play?",
          es: "¿Qué es la extracción de información pasiva en el juego de campeonato?",
          de: "Was ist passive Informationsextraktion im Meisterschaftsspiel?",
          nl: "Wat is passieve informatie-extractie in kampioenschapsspel?"
        },
        options: [
          {
            en: "Deducing card locations from patterns in other players' suggestions and responses",
            es: "Deducir ubicaciones de cartas de patrones en sugerencias y respuestas de otros jugadores",
            de: "Kartenpositionen aus Mustern in Vorschlägen und Antworten anderer Spieler ableiten",
            nl: "Kaartlocaties afleiden uit patronen in suggesties en reacties van andere spelers"
          },
          {
            en: "Waiting for opponents to make mistakes",
            es: "Esperar a que los oponentes cometan errores",
            de: "Warten bis Gegner Fehler machen",
            nl: "Wachten tot tegenstanders fouten maken"
          },
          {
            en: "Not making suggestions",
            es: "No hacer sugerencias",
            de: "Keine Vorschläge machen",
            nl: "Geen suggesties doen"
          },
          {
            en: "Only observing without deducing",
            es: "Solo observar sin deducir",
            de: "Nur beobachten ohne zu folgern",
            nl: "Alleen observeren zonder af te leiden"
          }
        ],
        correct: 0,
        explanation: {
          en: "Expert players extract massive amounts of information from observing other players' interactions, deducing card holdings from who shows what to whom, room movement patterns, and suggestion choices.",
          es: "Los jugadores expertos extraen cantidades masivas de información de observar interacciones de otros jugadores, deduciendo posesiones de cartas de quién muestra qué a quién, patrones de movimiento de habitaciones y opciones de sugerencias.",
          de: "Expertspieler extrahieren massive Mengen an Informationen aus der Beobachtung der Interaktionen anderer Spieler, leiten Kartenbestände daraus ab, wer was wem zeigt, Raumbewegungsmuster und Vorschlagswahlmöglichkeiten.",
          nl: "Ervaren spelers halen enorme hoeveelheden informatie uit het observeren van interacties tussen andere spelers, waarbij ze kaartbezit afleiden uit wie wat aan wie toont, kamerbewegingspatronen en suggestiekeuzes."
        }
      },
      {
        question: {
          en: "What is the contradiction detection principle in Cluedo?",
          es: "¿Cuál es el principio de detección de contradicciones en Cluedo?",
          de: "Was ist das Widerspruchserkennungsprinzip in Cluedo?",
          nl: "Wat is het contradictiedetectieprincipe in Cluedo?"
        },
        options: [
          {
            en: "Identifying logical impossibilities in your current belief state to correct errors",
            es: "Identificar imposibilidades lógicas en tu estado de creencia actual para corregir errores",
            de: "Logische Unmöglichkeiten im aktuellen Glaubenszustand identifizieren, um Fehler zu korrigieren",
            nl: "Logische onmogelijkheden in je huidige geloofstoestand identificeren om fouten te corrigeren"
          },
          {
            en: "Looking for opponent mistakes",
            es: "Buscar errores de oponentes",
            de: "Nach Gegnerfehlern suchen",
            nl: "Zoeken naar fouten van tegenstanders"
          },
          {
            en: "Finding game rule violations",
            es: "Encontrar violaciones de reglas del juego",
            de: "Spielregelverstöße finden",
            nl: "Spelregelverstoten vinden"
          },
          {
            en: "Detecting card counting errors",
            es: "Detectar errores de conteo de cartas",
            de: "Kartenzählfehler erkennen",
            nl: "Kaarttelfouten detecteren"
          }
        ],
        correct: 0,
        explanation: {
          en: "Championship players continuously validate their deduction matrices for logical consistency. When contradictions arise, they systematically backtrack to find and correct faulty assumptions.",
          es: "Los jugadores de campeonato validan continuamente sus matrices de deducción para consistencia lógica. Cuando surgen contradicciones, retroceden sistemáticamente para encontrar y corregir suposiciones erróneas.",
          de: "Meisterschaftsspieler validieren kontinuierlich ihre Deduktionsmatrizen auf logische Konsistenz. Wenn Widersprüche auftreten, gehen sie systematisch zurück, um fehlerhafte Annahmen zu finden und zu korrigieren.",
          nl: "Kampioenschapsspelers valideren voortdurend hun deductiematrices op logische consistentie. Wanneer contradicties ontstaan, gaan ze systematisch terug om foutieve aannames te vinden en te corrigeren."
        }
      },
      {
        question: {
          en: "What is strategic room positioning in championship Cluedo?",
          es: "¿Qué es el posicionamiento estratégico de habitaciones en Cluedo de campeonato?",
          de: "Was ist strategische Raumpositionierung im Meisterschafts-Cluedo?",
          nl: "Wat is strategische kamerpositionering in kampioenschap Cluedo?"
        },
        options: [
          {
            en: "Positioning to maximize high-value suggestions while minimizing opponent information gain",
            es: "Posicionarse para maximizar sugerencias de alto valor mientras se minimiza la ganancia de información del oponente",
            de: "Positionierung zur Maximierung hochwertiger Vorschläge bei gleichzeitiger Minimierung des Informationsgewinns der Gegner",
            nl: "Positioneren om hoogwaardige suggesties te maximaliseren terwijl informatieverwerving van tegenstanders wordt geminimaliseerd"
          },
          {
            en: "Always staying in the center room",
            es: "Permanecer siempre en la habitación central",
            de: "Immer im zentralen Raum bleiben",
            nl: "Altijd in de centrale kamer blijven"
          },
          {
            en: "Moving randomly between rooms",
            es: "Moverse aleatoriamente entre habitaciones",
            de: "Zufällig zwischen Räumen bewegen",
            nl: "Willekeurig tussen kamers bewegen"
          },
          {
            en: "Visiting each room exactly once",
            es: "Visitar cada habitación exactamente una vez",
            de: "Jeden Raum genau einmal besuchen",
            nl: "Elke kamer precies één keer bezoeken"
          }
        ],
        correct: 0,
        explanation: {
          en: "Expert players choose rooms not just to test hypotheses but to control the information flow, positioning themselves where they can make informative suggestions while limiting what opponents learn from their movement.",
          es: "Los jugadores expertos eligen habitaciones no solo para probar hipótesis sino para controlar el flujo de información, posicionándose donde pueden hacer sugerencias informativas mientras limitan lo que los oponentes aprenden de su movimiento.",
          de: "Expertspieler wählen Räume nicht nur zum Testen von Hypothesen, sondern zur Kontrolle des Informationsflusses und positionieren sich dort, wo sie informative Vorschläge machen können, während sie begrenzen, was Gegner aus ihrer Bewegung lernen.",
          nl: "Ervaren spelers kiezen kamers niet alleen om hypotheses te testen maar om de informatiestroom te controleren, waarbij ze zich positioneren waar ze informatieve suggesties kunnen doen terwijl ze beperken wat tegenstanders leren van hun beweging."
        }
      },
      {
        question: {
          en: "What is the principle of maximum entropy deception?",
          es: "¿Cuál es el principio de decepción de máxima entropía?",
          de: "Was ist das Prinzip der maximalen Entropie-Täuschung?",
          nl: "Wat is het principe van maximale entropie-misleiding?"
        },
        options: [
          {
            en: "Playing to keep opponents' uncertainty about your hand as high as possible",
            es: "Jugar para mantener la incertidumbre de los oponentes sobre tu mano lo más alta posible",
            de: "Spielen, um die Unsicherheit der Gegner über Ihr Blatt so hoch wie möglich zu halten",
            nl: "Spelen om de onzekerheid van tegenstanders over je hand zo hoog mogelijk te houden"
          },
          {
            en: "Creating confusion about game rules",
            es: "Crear confusión sobre las reglas del juego",
            de: "Verwirrung über Spielregeln schaffen",
            nl: "Verwarring creëren over spelregels"
          },
          {
            en: "Showing cards unpredictably",
            es: "Mostrar cartas de manera impredecible",
            de: "Karten unvorhersehbar zeigen",
            nl: "Kaarten onvoorspelbaar tonen"
          },
          {
            en: "Making random accusations",
            es: "Hacer acusaciones aleatorias",
            de: "Zufällige Anschuldigungen machen",
            nl: "Willekeurige beschuldigingen doen"
          }
        ],
        correct: 0,
        explanation: {
          en: "Expert players actively work to maximize uncertainty about their hand through careful card showing choices and suggestion patterns that reveal minimal information while extracting maximum intelligence.",
          es: "Los jugadores expertos trabajan activamente para maximizar la incertidumbre sobre su mano a través de elecciones cuidadosas de mostrar cartas y patrones de sugerencias que revelan información mínima mientras extraen inteligencia máxima.",
          de: "Expertspieler arbeiten aktiv daran, die Unsicherheit über ihr Blatt durch sorgfältige Kartenzeige-Entscheidungen und Vorschlagsmuster zu maximieren, die minimale Informationen offenbaren, während sie maximale Intelligenz extrahieren.",
          nl: "Ervaren spelers werken actief om onzekerheid over hun hand te maximaliseren door zorgvuldige kaarttoonkeuzes en suggestiepatronen die minimale informatie onthullen terwijl ze maximale intelligentie verzamelen."
        }
      },
      {
        question: {
          en: "What is combinatorial card elimination in Cluedo?",
          es: "¿Qué es la eliminación combinatoria de cartas en Cluedo?",
          de: "Was ist kombinatorische Kartenelimination in Cluedo?",
          nl: "Wat is combinatorische kaarteliminatie in Cluedo?"
        },
        options: [
          {
            en: "Using set theory to eliminate impossible card combinations based on indirect evidence",
            es: "Usar teoría de conjuntos para eliminar combinaciones de cartas imposibles basadas en evidencia indirecta",
            de: "Verwendung der Mengenlehre zur Eliminierung unmöglicher Kartenkombinationen basierend auf indirekten Beweisen",
            nl: "Gebruik van verzamelingenleer om onmogelijke kaartcombinaties te elimineren gebaseerd op indirect bewijs"
          },
          {
            en: "Removing cards from the deck",
            es: "Eliminar cartas del mazo",
            de: "Karten aus dem Deck entfernen",
            nl: "Kaarten uit het deck verwijderen"
          },
          {
            en: "Counting eliminated suspects",
            es: "Contar sospechosos eliminados",
            de: "Eliminierte Verdächtige zählen",
            nl: "Geëlimineerde verdachten tellen"
          },
          {
            en: "Marking off shown cards",
            es: "Marcar cartas mostradas",
            de: "Gezeigte Karten abhaken",
            nl: "Getoonde kaarten afvinken"
          }
        ],
        correct: 0,
        explanation: {
          en: "Championship players use advanced set operations to deduce card locations. If player A shows a card from set {X,Y,Z} and later can't show from {X,Y}, you know A holds Z, even without seeing it directly.",
          es: "Los jugadores de campeonato usan operaciones de conjuntos avanzadas para deducir ubicaciones de cartas. Si el jugador A muestra una carta del conjunto {X,Y,Z} y luego no puede mostrar del {X,Y}, sabes que A tiene Z, incluso sin verlo directamente.",
          de: "Meisterschaftsspieler verwenden fortgeschrittene Mengenoperationen, um Kartenpositionen abzuleiten. Wenn Spieler A eine Karte aus der Menge {X,Y,Z} zeigt und später keine aus {X,Y} zeigen kann, wissen Sie, dass A Z hält, auch ohne es direkt zu sehen.",
          nl: "Kampioenschapsspelers gebruiken geavanceerde verzamelingsbewerkingen om kaartlocaties af te leiden. Als speler A een kaart toont uit verzameling {X,Y,Z} en later niet kan tonen uit {X,Y}, weet je dat A Z heeft, zelfs zonder het direct te zien."
        }
      },
      {
        question: {
          en: "What is the information asymmetry exploitation principle?",
          es: "¿Cuál es el principio de explotación de asimetría de información?",
          de: "Was ist das Prinzip der Informationsasymmetrie-Ausbeutung?",
          nl: "Wat is het principe van informatie-asymmetrie-exploitatie?"
        },
        options: [
          {
            en: "Leveraging situations where you know more about others' knowledge states than they know about yours",
            es: "Aprovechar situaciones donde sabes más sobre los estados de conocimiento de otros que lo que ellos saben sobre el tuyo",
            de: "Situationen nutzen, in denen Sie mehr über die Wissenszustände anderer wissen als diese über Ihre",
            nl: "Gebruik maken van situaties waarin je meer weet over de kennistoestanden van anderen dan zij over die van jou"
          },
          {
            en: "Having more cards than opponents",
            es: "Tener más cartas que los oponentes",
            de: "Mehr Karten als Gegner haben",
            nl: "Meer kaarten hebben dan tegenstanders"
          },
          {
            en: "Knowing secret rules",
            es: "Conocer reglas secretas",
            de: "Geheime Regeln kennen",
            nl: "Geheime regels kennen"
          },
          {
            en: "Playing with inexperienced players",
            es: "Jugar con jugadores inexpertos",
            de: "Mit unerfahrenen Spielern spielen",
            nl: "Spelen met onervaren spelers"
          }
        ],
        correct: 0,
        explanation: {
          en: "Expert players create and exploit information imbalances. They track not just what cards exist where, but what each opponent knows about card distributions, using this meta-knowledge strategically.",
          es: "Los jugadores expertos crean y explotan desequilibrios de información. No solo rastrean qué cartas existen dónde, sino qué sabe cada oponente sobre las distribuciones de cartas, usando este meta-conocimiento estratégicamente.",
          de: "Expertspieler schaffen und nutzen Informationsungleichgewichte. Sie verfolgen nicht nur, welche Karten wo existieren, sondern was jeder Gegner über Kartenverteilungen weiß, und nutzen dieses Meta-Wissen strategisch.",
          nl: "Ervaren spelers creëren en exploiteren informatie-onevenwichtigheden. Ze volgen niet alleen welke kaarten waar bestaan, maar wat elke tegenstander weet over kaartverdelingen, waarbij ze deze meta-kennis strategisch gebruiken."
        }
      },
      {
        question: {
          en: "What is probabilistic accusation timing in championship play?",
          es: "¿Qué es el tiempo de acusación probabilística en el juego de campeonato?",
          de: "Was ist probabilistisches Anschuldigungs-Timing im Meisterschaftsspiel?",
          nl: "Wat is probabilistische beschuldigingstiming in kampioenschapsspel?"
        },
        options: [
          {
            en: "Using opponent behavior analysis to predict when they'll accuse and preempting them",
            es: "Usar análisis de comportamiento del oponente para predecir cuándo acusarán y anticiparse a ellos",
            de: "Verwendung von Gegnerverhaltensanalyse zur Vorhersage, wann sie anklagen werden, und ihnen zuvorkommen",
            nl: "Gebruik van gedragsanalyse van tegenstanders om te voorspellen wanneer ze zullen beschuldigen en hen voor te zijn"
          },
          {
            en: "Accusing at random times",
            es: "Acusar en momentos aleatorios",
            de: "Zu zufälligen Zeiten anklagen",
            nl: "Op willekeurige momenten beschuldigen"
          },
          {
            en: "Waiting for perfect certainty",
            es: "Esperar certeza perfecta",
            de: "Auf perfekte Gewissheit warten",
            nl: "Wachten op perfecte zekerheid"
          },
          {
            en: "Following a fixed turn schedule",
            es: "Seguir un horario de turnos fijo",
            de: "Einem festen Zugplan folgen",
            nl: "Een vast beurtenrooster volgen"
          }
        ],
        correct: 0,
        explanation: {
          en: "Championship players monitor opponents' behavior patterns, room movements, and suggestion changes to estimate their confidence levels and make accusations just before opponents who are also close to solving.",
          es: "Los jugadores de campeonato monitorean patrones de comportamiento de oponentes, movimientos de habitaciones y cambios de sugerencias para estimar sus niveles de confianza y hacer acusaciones justo antes que los oponentes que también están cerca de resolver.",
          de: "Meisterschaftsspieler überwachen Verhaltensmuster der Gegner, Raumbewegungen und Vorschlagsänderungen, um deren Vertrauensniveaus zu schätzen und Anschuldigungen kurz vor Gegnern zu machen, die ebenfalls kurz vor der Lösung stehen.",
          nl: "Kampioenschapsspelers monitoren gedragspatronen van tegenstanders, kamerbewegingen en suggestiewijzigingen om hun vertrouwensniveaus in te schatten en beschuldigingen te doen net voordat tegenstanders die ook dicht bij de oplossing zijn."
        }
      },
      {
        question: {
          en: "What is the concept of information half-life in Cluedo?",
          es: "¿Cuál es el concepto de vida media de información en Cluedo?",
          de: "Was ist das Konzept der Informationshalbwertszeit in Cluedo?",
          nl: "Wat is het concept van informatie-halfwaardetijd in Cluedo?"
        },
        options: [
          {
            en: "How quickly information becomes less valuable as opponents also acquire it",
            es: "Qué tan rápido la información se vuelve menos valiosa a medida que los oponentes también la adquieren",
            de: "Wie schnell Informationen weniger wertvoll werden, wenn Gegner sie ebenfalls erwerben",
            nl: "Hoe snel informatie minder waardevol wordt naarmate tegenstanders deze ook verkrijgen"
          },
          {
            en: "The time it takes to forget information",
            es: "El tiempo que tarda en olvidar información",
            de: "Die Zeit, die zum Vergessen von Informationen benötigt wird",
            nl: "De tijd die nodig is om informatie te vergeten"
          },
          {
            en: "How long cards stay in the envelope",
            es: "Cuánto tiempo permanecen las cartas en el sobre",
            de: "Wie lange Karten im Umschlag bleiben",
            nl: "Hoe lang kaarten in de envelop blijven"
          },
          {
            en: "The duration of each game turn",
            es: "La duración de cada turno del juego",
            de: "Die Dauer jeder Spielrunde",
            nl: "De duur van elke spelbeurt"
          }
        ],
        correct: 0,
        explanation: {
          en: "Expert players understand that information has diminishing returns. A deduction you make is most valuable when you alone possess it, losing value as others make the same deduction through passive observation.",
          es: "Los jugadores expertos entienden que la información tiene rendimientos decrecientes. Una deducción que haces es más valiosa cuando solo tú la posees, perdiendo valor a medida que otros hacen la misma deducción a través de observación pasiva.",
          de: "Expertspieler verstehen, dass Informationen abnehmende Erträge haben. Eine Schlussfolgerung, die Sie ziehen, ist am wertvollsten, wenn Sie sie allein besitzen, und verliert an Wert, wenn andere durch passive Beobachtung dieselbe Schlussfolgerung ziehen.",
          nl: "Ervaren spelers begrijpen dat informatie afnemende opbrengsten heeft. Een deductie die je maakt is het meest waardevol wanneer jij deze alleen bezit, en verliest waarde naarmate anderen dezelfde deductie maken door passieve observatie."
        }
      },
      {
        question: {
          en: "What is constraint propagation in Cluedo deduction?",
          es: "¿Qué es la propagación de restricciones en la deducción de Cluedo?",
          de: "Was ist Constraint-Propagation in Cluedo-Deduktion?",
          nl: "Wat is constraint-propagatie in Cluedo-deductie?"
        },
        options: [
          {
            en: "Automatically inferring additional facts when one card location is determined",
            es: "Inferir automáticamente hechos adicionales cuando se determina la ubicación de una carta",
            de: "Automatisches Ableiten zusätzlicher Fakten, wenn eine Kartenposition bestimmt wird",
            nl: "Automatisch afleiden van aanvullende feiten wanneer één kaartlocatie wordt bepaald"
          },
          {
            en: "Spreading cards across the board",
            es: "Distribuir cartas por el tablero",
            de: "Karten über das Brett verteilen",
            nl: "Kaarten over het bord verspreiden"
          },
          {
            en: "Teaching strategies to other players",
            es: "Enseñar estrategias a otros jugadores",
            de: "Strategien an andere Spieler lehren",
            nl: "Strategieën aan andere spelers leren"
          },
          {
            en: "Limiting suggestion options",
            es: "Limitar opciones de sugerencias",
            de: "Vorschlagsoptionen begrenzen",
            nl: "Suggestieopties beperken"
          }
        ],
        correct: 0,
        explanation: {
          en: "When you determine one card's location, expert players immediately propagate this through their entire knowledge system, triggering cascading deductions about other cards based on hand size constraints and previous observations.",
          es: "Cuando determinas la ubicación de una carta, los jugadores expertos inmediatamente propagan esto a través de todo su sistema de conocimiento, desencadenando deducciones en cascada sobre otras cartas basadas en restricciones de tamaño de mano y observaciones previas.",
          de: "Wenn Sie die Position einer Karte bestimmen, propagieren Expertspieler dies sofort durch ihr gesamtes Wissenssystem und lösen kaskadierende Schlussfolgerungen über andere Karten basierend auf Handgrößenbeschränkungen und früheren Beobachtungen aus.",
          nl: "Wanneer je de locatie van één kaart bepaalt, propageren ervaren spelers dit onmiddellijk door hun hele kennissysteem, wat cascaderende deducties over andere kaarten triggert gebaseerd op handsgroottebeperkingen en eerdere observaties."
        }
      },
      {
        question: {
          en: "What is the meta-game psychological dimension in championship Cluedo?",
          es: "¿Cuál es la dimensión psicológica del meta-juego en Cluedo de campeonato?",
          de: "Was ist die meta-spielerische psychologische Dimension im Meisterschafts-Cluedo?",
          nl: "Wat is de meta-spel psychologische dimensie in kampioenschap Cluedo?"
        },
        options: [
          {
            en: "Reading opponents' confidence levels and behavioral tells to estimate their deduction progress",
            es: "Leer los niveles de confianza y señales de comportamiento de los oponentes para estimar su progreso de deducción",
            de: "Vertrauensniveaus der Gegner und Verhaltenshinweise lesen, um ihren Deduktionsfortschritt zu schätzen",
            nl: "Vertrouwensniveaus en gedragssignalen van tegenstanders lezen om hun deductieprogressie in te schatten"
          },
          {
            en: "Intimidating opponents verbally",
            es: "Intimidar a oponentes verbalmente",
            de: "Gegner verbal einschüchtern",
            nl: "Tegenstanders verbaal intimideren"
          },
          {
            en: "Playing mind games",
            es: "Jugar juegos mentales",
            de: "Psychospielchen spielen",
            nl: "Psychologische spelletjes spelen"
          },
          {
            en: "Bluffing about card holdings",
            es: "Blufar sobre posesiones de cartas",
            de: "Über Kartenbestände bluffen",
            nl: "Bluffen over kaartbezit"
          }
        ],
        correct: 0,
        explanation: {
          en: "Championship players observe subtle behavioral cues like hesitation before suggestions, changes in room choice patterns, and suggestion timing to gauge how close opponents are to solving the mystery.",
          es: "Los jugadores de campeonato observan señales de comportamiento sutiles como vacilación antes de sugerencias, cambios en patrones de elección de habitaciones y tiempo de sugerencias para medir qué tan cerca están los oponentes de resolver el misterio.",
          de: "Meisterschaftsspieler beobachten subtile Verhaltenshinweise wie Zögern vor Vorschlägen, Änderungen in Raumauswahlmustern und Vorschlagszeiten, um einzuschätzen, wie nahe Gegner der Lösung des Rätsels sind.",
          nl: "Kampioenschapsspelers observeren subtiele gedragssignalen zoals aarzeling voor suggesties, veranderingen in kamerkeuzepatronen en suggestietiming om in te schatten hoe dicht tegenstanders bij het oplossen van het mysterie zijn."
        }
      },
      {
        question: {
          en: "What is optimal card showing diversity strategy?",
          es: "¿Cuál es la estrategia óptima de diversidad de muestra de cartas?",
          de: "Was ist die optimale Strategie für Kartenzeige-Diversität?",
          nl: "Wat is de optimale kaarttoondiversiteitsstrategie?"
        },
        options: [
          {
            en: "Varying which cards you show to prevent opponents from deducing your full hand",
            es: "Variar qué cartas muestras para evitar que los oponentes deduzcan tu mano completa",
            de: "Variieren, welche Karten Sie zeigen, um zu verhindern, dass Gegner Ihr gesamtes Blatt ableiten",
            nl: "Variëren welke kaarten je toont om te voorkomen dat tegenstanders je volledige hand afleiden"
          },
          {
            en: "Always showing the same card type",
            es: "Mostrar siempre el mismo tipo de carta",
            de: "Immer den gleichen Kartentyp zeigen",
            nl: "Altijd hetzelfde kaarttype tonen"
          },
          {
            en: "Showing cards in alphabetical order",
            es: "Mostrar cartas en orden alfabético",
            de: "Karten in alphabetischer Reihenfolge zeigen",
            nl: "Kaarten in alfabetische volgorde tonen"
          },
          {
            en: "Showing high-value cards first",
            es: "Mostrar cartas de alto valor primero",
            de: "Hochwertige Karten zuerst zeigen",
            nl: "Hoogwaardige kaarten eerst tonen"
          }
        ],
        correct: 0,
        explanation: {
          en: "Expert players strategically rotate through different cards when showing, balancing the need to minimize information leakage with the constraint of showing legally. Showing the same card repeatedly quickly reveals hand composition.",
          es: "Los jugadores expertos rotan estratégicamente a través de diferentes cartas al mostrar, equilibrando la necesidad de minimizar la fuga de información con la restricción de mostrar legalmente. Mostrar la misma carta repetidamente revela rápidamente la composición de la mano.",
          de: "Expertspieler rotieren strategisch durch verschiedene Karten beim Zeigen und balancieren das Bedürfnis, Informationslecks zu minimieren, mit der Einschränkung, legal zu zeigen. Das wiederholte Zeigen derselben Karte offenbart schnell die Handzusammensetzung.",
          nl: "Ervaren spelers roteren strategisch door verschillende kaarten bij het tonen, waarbij ze de noodzaak om informatielek te minimaliseren in evenwicht brengen met de beperking om legaal te tonen. Herhaaldelijk dezelfde kaart tonen onthult snel de handsamenstelling."
        }
      },
      {
        question: {
          en: "What is the endgame acceleration principle?",
          es: "¿Cuál es el principio de aceleración del final del juego?",
          de: "Was ist das Endspiel-Beschleunigungsprinzip?",
          nl: "Wat is het eindspelversnellingsprincipe?"
        },
        options: [
          {
            en: "Increasing suggestion frequency and risk tolerance when trailing opponents in deduction progress",
            es: "Aumentar la frecuencia de sugerencias y la tolerancia al riesgo cuando se está detrás de los oponentes en el progreso de deducción",
            de: "Erhöhung der Vorschlagshäufigkeit und Risikotoleranz beim Zurückliegen hinter Gegnern im Deduktionsfortschritt",
            nl: "Verhogen van suggestiefrequentie en risicotolerantie bij achterlopen op tegenstanders in deductieprogressie"
          },
          {
            en: "Making accusations faster",
            es: "Hacer acusaciones más rápido",
            de: "Schneller Anschuldigungen machen",
            nl: "Sneller beschuldigingen doen"
          },
          {
            en: "Moving more spaces per turn",
            es: "Mover más espacios por turno",
            de: "Mehr Felder pro Zug bewegen",
            nl: "Meer vakjes per beurt bewegen"
          },
          {
            en: "Skipping turns to save time",
            es: "Saltar turnos para ahorrar tiempo",
            de: "Züge überspringen um Zeit zu sparen",
            nl: "Beurten overslaan om tijd te besparen"
          }
        ],
        correct: 0,
        explanation: {
          en: "When expert players detect they're behind, they shift from conservative information gathering to aggressive hypothesis testing, accepting higher risk of revealing their deductions in exchange for faster solution convergence.",
          es: "Cuando los jugadores expertos detectan que están detrás, cambian de recopilación conservadora de información a prueba agresiva de hipótesis, aceptando mayor riesgo de revelar sus deducciones a cambio de convergencia de solución más rápida.",
          de: "Wenn Expertspieler erkennen, dass sie zurückliegen, wechseln sie von konservativer Informationsbeschaffung zu aggressivem Hypothesentest und akzeptieren ein höheres Risiko, ihre Schlussfolgerungen zu offenbaren, im Austausch für schnellere Lösungskonvergenz.",
          nl: "Wanneer ervaren spelers detecteren dat ze achterlopen, schakelen ze over van conservatieve informatieverzameling naar agressief hypothesetesten, waarbij ze hoger risico accepteren van het onthullen van hun deducties in ruil voor snellere oplossingsconvergentie."
        }
      },
      {
        question: {
          en: "What is suggestion orthogonality in Cluedo theory?",
          es: "¿Qué es la ortogonalidad de sugerencias en la teoría de Cluedo?",
          de: "Was ist Vorschlags-Orthogonalität in der Cluedo-Theorie?",
          nl: "Wat is suggestieorthogonaliteit in Cluedo-theorie?"
        },
        options: [
          {
            en: "Making suggestions that test independent hypotheses to maximize information per turn",
            es: "Hacer sugerencias que prueban hipótesis independientes para maximizar la información por turno",
            de: "Vorschläge machen, die unabhängige Hypothesen testen, um Informationen pro Zug zu maximieren",
            nl: "Suggesties doen die onafhankelijke hypotheses testen om informatie per beurt te maximaliseren"
          },
          {
            en: "Making perpendicular room movements",
            es: "Hacer movimientos de habitación perpendiculares",
            de: "Senkrechte Raumbewegungen machen",
            nl: "Loodrechte kamerbewegingen maken"
          },
          {
            en: "Suggesting opposite card types",
            es: "Sugerir tipos de cartas opuestas",
            de: "Entgegengesetzte Kartentypen vorschlagen",
            nl: "Tegengestelde kaarttypen suggereren"
          },
          {
            en: "Using geometric board patterns",
            es: "Usar patrones geométricos del tablero",
            de: "Geometrische Brettmuster verwenden",
            nl: "Geometrische bordpatronen gebruiken"
          }
        ],
        correct: 0,
        explanation: {
          en: "Expert players design suggestions to test statistically independent hypotheses. Rather than suggesting {Scarlet, Rope, Library} then {Scarlet, Pipe, Library}, they vary all elements to gain uncorrelated information.",
          es: "Los jugadores expertos diseñan sugerencias para probar hipótesis estadísticamente independientes. En lugar de sugerir {Scarlet, Cuerda, Biblioteca} luego {Scarlet, Pipa, Biblioteca}, varían todos los elementos para obtener información no correlacionada.",
          de: "Expertspieler entwerfen Vorschläge zum Testen statistisch unabhängiger Hypothesen. Statt {Scarlet, Seil, Bibliothek} dann {Scarlet, Pfeife, Bibliothek} vorzuschlagen, variieren sie alle Elemente, um unkorrelierte Informationen zu gewinnen.",
          nl: "Ervaren spelers ontwerpen suggesties om statistisch onafhankelijke hypotheses te testen. In plaats van {Scarlet, Touw, Bibliotheek} en dan {Scarlet, Pijp, Bibliotheek} voor te stellen, variëren ze alle elementen om ongecorreleerde informatie te verkrijgen."
        }
      },
      {
        question: {
          en: "What is the card distribution partition refinement technique?",
          es: "¿Qué es la técnica de refinamiento de partición de distribución de cartas?",
          de: "Was ist die Kartenverteilungs-Partitionsverfeinerungstechnik?",
          nl: "Wat is de kaartverdelingspartitieverfijningstechniek?"
        },
        options: [
          {
            en: "Progressively narrowing the set of possible card distributions through successive observations",
            es: "Estrechar progresivamente el conjunto de distribuciones de cartas posibles a través de observaciones sucesivas",
            de: "Progressives Eingrenzen der Menge möglicher Kartenverteilungen durch aufeinanderfolgende Beobachtungen",
            nl: "Progressief versmallen van de verzameling mogelijke kaartverdelingen door opeenvolgende observaties"
          },
          {
            en: "Dividing cards into equal groups",
            es: "Dividir cartas en grupos iguales",
            de: "Karten in gleiche Gruppen aufteilen",
            nl: "Kaarten in gelijke groepen verdelen"
          },
          {
            en: "Separating cards by type",
            es: "Separar cartas por tipo",
            de: "Karten nach Typ trennen",
            nl: "Kaarten scheiden op type"
          },
          {
            en: "Organizing cards by probability",
            es: "Organizar cartas por probabilidad",
            de: "Karten nach Wahrscheinlichkeit organisieren",
            nl: "Kaarten organiseren op waarschijnlijkheid"
          }
        ],
        correct: 0,
        explanation: {
          en: "Championship players maintain a partition of all possible card distributions consistent with observations. Each new piece of evidence refines this partition, eliminating impossible distributions until only one remains.",
          es: "Los jugadores de campeonato mantienen una partición de todas las distribuciones de cartas posibles consistentes con las observaciones. Cada nueva evidencia refina esta partición, eliminando distribuciones imposibles hasta que solo queda una.",
          de: "Meisterschaftsspieler pflegen eine Partition aller möglichen Kartenverteilungen, die mit Beobachtungen konsistent sind. Jedes neue Beweisstück verfeinert diese Partition und eliminiert unmögliche Verteilungen, bis nur eine übrig bleibt.",
          nl: "Kampioenschapsspelers onderhouden een partitie van alle mogelijke kaartverdelingen die consistent zijn met observaties. Elk nieuw bewijs verfijnt deze partitie, waarbij onmogelijke verdelingen worden geëlimineerd totdat er slechts één overblijft."
        }
      },
      {
        question: {
          en: "What is defensive suggestion making in championship play?",
          es: "¿Qué es hacer sugerencias defensivas en el juego de campeonato?",
          de: "Was ist defensives Vorschlagmachen im Meisterschaftsspiel?",
          nl: "Wat is defensief suggesties doen in kampioenschapsspel?"
        },
        options: [
          {
            en: "Including your own cards in suggestions to hide hand composition while still gaining information",
            es: "Incluir tus propias cartas en sugerencias para ocultar la composición de la mano mientras aún se obtiene información",
            de: "Eigene Karten in Vorschläge einbeziehen, um die Handzusammensetzung zu verbergen, während man trotzdem Informationen gewinnt",
            nl: "Je eigen kaarten opnemen in suggesties om handsamenstelling te verbergen terwijl je nog steeds informatie verkrijgt"
          },
          {
            en: "Making only safe suggestions",
            es: "Hacer solo sugerencias seguras",
            de: "Nur sichere Vorschläge machen",
            nl: "Alleen veilige suggesties doen"
          },
          {
            en: "Avoiding risky accusations",
            es: "Evitar acusaciones arriesgadas",
            de: "Riskante Anschuldigungen vermeiden",
            nl: "Riskante beschuldigingen vermijden"
          },
          {
            en: "Protecting against opponent suggestions",
            es: "Proteger contra sugerencias de oponentes",
            de: "Gegen Gegnervorschläge schützen",
            nl: "Beschermen tegen suggesties van tegenstanders"
          }
        ],
        correct: 0,
        explanation: {
          en: "Expert players sometimes include cards from their own hand in suggestions. This prevents opponents from definitively eliminating those cards while still learning from which other cards get shown.",
          es: "Los jugadores expertos a veces incluyen cartas de su propia mano en sugerencias. Esto evita que los oponentes eliminen definitivamente esas cartas mientras aún aprenden de qué otras cartas se muestran.",
          de: "Expertspieler beziehen manchmal Karten aus ihrem eigenen Blatt in Vorschläge ein. Dies verhindert, dass Gegner diese Karten definitiv eliminieren, während sie trotzdem lernen, welche anderen Karten gezeigt werden.",
          nl: "Ervaren spelers nemen soms kaarten uit hun eigen hand op in suggesties. Dit voorkomt dat tegenstanders die kaarten definitief elimineren terwijl ze nog steeds leren van welke andere kaarten worden getoond."
        }
      },
      {
        question: {
          en: "What is the time-optimal solution path problem in Cluedo?",
          es: "¿Cuál es el problema de ruta de solución de tiempo óptimo en Cluedo?",
          de: "Was ist das zeitoptimale Lösungspfadproblem in Cluedo?",
          nl: "Wat is het tijd-optimale oplossingspadprobleem in Cluedo?"
        },
        options: [
          {
            en: "Finding the minimum number of suggestions needed to guarantee solution identification",
            es: "Encontrar el número mínimo de sugerencias necesarias para garantizar la identificación de la solución",
            de: "Finden der Mindestanzahl von Vorschlägen, die zur Garantie der Lösungsidentifikation erforderlich sind",
            nl: "Vinden van het minimum aantal suggesties dat nodig is om oplossingsidentificatie te garanderen"
          },
          {
            en: "Reaching rooms in minimum moves",
            es: "Llegar a habitaciones en movimientos mínimos",
            de: "Räume in minimalen Zügen erreichen",
            nl: "Kamers bereiken in minimale zetten"
          },
          {
            en: "Finishing the game quickly",
            es: "Terminar el juego rápidamente",
            de: "Das Spiel schnell beenden",
            nl: "Het spel snel afmaken"
          },
          {
            en: "Making accusations in minimum time",
            es: "Hacer acusaciones en tiempo mínimo",
            de: "Anschuldigungen in minimaler Zeit machen",
            nl: "Beschuldigingen in minimale tijd doen"
          }
        ],
        correct: 0,
        explanation: {
          en: "Championship players work backward from complete information to determine the theoretically minimum suggestion sequence that would guarantee solution identification, then execute strategies approaching this optimum.",
          es: "Los jugadores de campeonato trabajan hacia atrás desde información completa para determinar la secuencia de sugerencias teóricamente mínima que garantizaría la identificación de la solución, luego ejecutan estrategias que se acercan a este óptimo.",
          de: "Meisterschaftsspieler arbeiten rückwärts von vollständiger Information, um die theoretisch minimale Vorschlagssequenz zu bestimmen, die Lösungsidentifikation garantieren würde, und führen dann Strategien aus, die sich diesem Optimum nähern.",
          nl: "Kampioenschapsspelers werken achterwaarts vanuit volledige informatie om de theoretisch minimale suggestiesequentie te bepalen die oplossingsidentificatie zou garanderen, en voeren vervolgens strategieën uit die dit optimum benaderen."
        }
      },
      {
        question: {
          en: "What is stochastic opponent modeling in Cluedo?",
          es: "¿Qué es el modelado estocástico de oponentes en Cluedo?",
          de: "Was ist stochastische Gegnermodellierung in Cluedo?",
          nl: "Wat is stochastische tegenstander-modellering in Cluedo?"
        },
        options: [
          {
            en: "Building probability distributions over opponents' card holdings and knowledge states",
            es: "Construir distribuciones de probabilidad sobre las tenencias de cartas y estados de conocimiento de los oponentes",
            de: "Aufbau von Wahrscheinlichkeitsverteilungen über Kartenbestände und Wissenszustände der Gegner",
            nl: "Bouwen van waarschijnlijkheidsverdelingen over kaartbezit en kennistoestanden van tegenstanders"
          },
          {
            en: "Randomly guessing opponent strategies",
            es: "Adivinar aleatoriamente estrategias de oponentes",
            de: "Zufälliges Erraten von Gegnerstrategien",
            nl: "Willekeurig gokken van strategieën van tegenstanders"
          },
          {
            en: "Modeling opponent personalities",
            es: "Modelar personalidades de oponentes",
            de: "Gegnerpersönlichkeiten modellieren",
            nl: "Persoonlijkheden van tegenstanders modelleren"
          },
          {
            en: "Creating opponent behavior profiles",
            es: "Crear perfiles de comportamiento de oponentes",
            de: "Gegnerverhaltsprofile erstellen",
            nl: "Gedragsprofielen van tegenstanders creëren"
          }
        ],
        correct: 0,
        explanation: {
          en: "Expert players maintain probabilistic models of each opponent's hand and knowledge. These models are updated continuously using Bayesian methods based on all available evidence from suggestions and responses.",
          es: "Los jugadores expertos mantienen modelos probabilísticos de la mano y conocimiento de cada oponente. Estos modelos se actualizan continuamente usando métodos bayesianos basados en toda la evidencia disponible de sugerencias y respuestas.",
          de: "Expertspieler pflegen probabilistische Modelle des Blatts und Wissens jedes Gegners. Diese Modelle werden kontinuierlich mit Bayesianischen Methoden basierend auf allen verfügbaren Beweisen aus Vorschlägen und Antworten aktualisiert.",
          nl: "Ervaren spelers onderhouden probabilistische modellen van de hand en kennis van elke tegenstander. Deze modellen worden continu bijgewerkt met Bayesiaanse methoden gebaseerd op al het beschikbare bewijs uit suggesties en reacties."
        }
      },
      {
        question: {
          en: "What is the information bottleneck principle in Cluedo?",
          es: "¿Cuál es el principio de cuello de botella de información en Cluedo?",
          de: "Was ist das Informationsengpass-Prinzip in Cluedo?",
          nl: "Wat is het informatieknelpuntprincipe in Cluedo?"
        },
        options: [
          {
            en: "Identifying which unknown cards provide maximum discrimination between possible solutions",
            es: "Identificar qué cartas desconocidas proporcionan máxima discriminación entre soluciones posibles",
            de: "Identifizieren, welche unbekannten Karten maximale Unterscheidung zwischen möglichen Lösungen bieten",
            nl: "Identificeren welke onbekende kaarten maximale onderscheiding tussen mogelijke oplossingen bieden"
          },
          {
            en: "Finding slow points in information flow",
            es: "Encontrar puntos lentos en el flujo de información",
            de: "Langsame Punkte im Informationsfluss finden",
            nl: "Trage punten in informatiestroom vinden"
          },
          {
            en: "Limiting information to opponents",
            es: "Limitar información a oponentes",
            de: "Information an Gegner begrenzen",
            nl: "Informatie naar tegenstanders beperken"
          },
          {
            en: "Managing too much information",
            es: "Gestionar demasiada información",
            de: "Zu viele Informationen verwalten",
            nl: "Te veel informatie beheren"
          }
        ],
        correct: 0,
        explanation: {
          en: "Championship players focus suggestions on cards that maximally partition the solution space. Learning about a card that appears in many possible solutions provides more discrimination than one appearing in few.",
          es: "Los jugadores de campeonato enfocan sugerencias en cartas que maximalmente particionan el espacio de solución. Aprender sobre una carta que aparece en muchas soluciones posibles proporciona más discriminación que una que aparece en pocas.",
          de: "Meisterschaftsspieler fokussieren Vorschläge auf Karten, die den Lösungsraum maximal partitionieren. Das Lernen über eine Karte, die in vielen möglichen Lösungen erscheint, bietet mehr Unterscheidung als eine, die in wenigen erscheint.",
          nl: "Kampioenschapsspelers focussen suggesties op kaarten die de oplossingsruimte maximaal partitioneren. Leren over een kaart die in veel mogelijke oplossingen voorkomt biedt meer onderscheiding dan één die in weinig voorkomt."
        }
      },
      {
        question: {
          en: "What is cross-validation of deductions in championship Cluedo?",
          es: "¿Qué es la validación cruzada de deducciones en Cluedo de campeonato?",
          de: "Was ist Kreuzvalidierung von Deduktionen im Meisterschafts-Cluedo?",
          nl: "Wat is kruisvalidatie van deducties in kampioenschap Cluedo?"
        },
        options: [
          {
            en: "Verifying deductions through multiple independent reasoning paths to ensure correctness",
            es: "Verificar deducciones a través de múltiples rutas de razonamiento independientes para asegurar corrección",
            de: "Überprüfung von Deduktionen durch mehrere unabhängige Argumentationspfade zur Sicherstellung der Korrektheit",
            nl: "Verifiëren van deducties via meerdere onafhankelijke redeneerpaden om correctheid te garanderen"
          },
          {
            en: "Checking deductions with other players",
            es: "Verificar deducciones con otros jugadores",
            de: "Deduktionen mit anderen Spielern überprüfen",
            nl: "Deducties controleren met andere spelers"
          },
          {
            en: "Comparing current and past games",
            es: "Comparar juegos actuales y pasados",
            de: "Aktuelle und vergangene Spiele vergleichen",
            nl: "Huidige en eerdere spellen vergelijken"
          },
          {
            en: "Double-checking all notes",
            es: "Verificar dos veces todas las notas",
            de: "Alle Notizen doppelt überprüfen",
            nl: "Alle notities dubbelchecken"
          }
        ],
        correct: 0,
        explanation: {
          en: "Expert players derive conclusions through multiple reasoning methods. A deduction from set theory should align with probabilistic inference and constraint propagation, providing mutual validation and catching errors.",
          es: "Los jugadores expertos derivan conclusiones a través de múltiples métodos de razonamiento. Una deducción de la teoría de conjuntos debe alinearse con la inferencia probabilística y la propagación de restricciones, proporcionando validación mutua y capturando errores.",
          de: "Expertspieler leiten Schlussfolgerungen durch mehrere Argumentationsmethoden ab. Eine Deduktion aus der Mengenlehre sollte mit probabilistischer Inferenz und Constraint-Propagation übereinstimmen und bietet gegenseitige Validierung und Fehleraufdeckung.",
          nl: "Ervaren spelers leiden conclusies af via meerdere redeneermethoden. Een deductie uit verzamelingenleer moet aansluiten bij probabilistische inferentie en constraint-propagatie, wat wederzijdse validatie biedt en fouten vangt."
        }
      },
      {
        question: {
          en: "What is the Nash equilibrium concept applied to Cluedo?",
          es: "¿Cuál es el concepto de equilibrio de Nash aplicado a Cluedo?",
          de: "Was ist das Nash-Gleichgewichtskonzept angewendet auf Cluedo?",
          nl: "Wat is het Nash-evenwichtsconcept toegepast op Cluedo?"
        },
        options: [
          {
            en: "Finding strategy profiles where no player can improve by unilaterally changing their approach",
            es: "Encontrar perfiles de estrategia donde ningún jugador puede mejorar cambiando unilateralmente su enfoque",
            de: "Finden von Strategieprofilen, bei denen kein Spieler durch einseitige Änderung seines Ansatzes verbessern kann",
            nl: "Vinden van strategieprofielen waarbij geen speler kan verbeteren door eenzijdig hun aanpak te veranderen"
          },
          {
            en: "Balancing suspect, weapon, and room suggestions",
            es: "Equilibrar sugerencias de sospechoso, arma y habitación",
            de: "Verdächtigen-, Waffen- und Raumvorschläge ausbalancieren",
            nl: "Verdachte, wapen en kamersuggesties balanceren"
          },
          {
            en: "Finding perfect game play",
            es: "Encontrar juego perfecto",
            de: "Perfektes Spiel finden",
            nl: "Perfect spel vinden"
          },
          {
            en: "Achieving equal win rates",
            es: "Lograr tasas de victoria iguales",
            de: "Gleiche Gewinnraten erreichen",
            nl: "Gelijke winpercentages bereiken"
          }
        ],
        correct: 0,
        explanation: {
          en: "In championship play, optimal strategies form Nash equilibria where deception level, suggestion informativeness, and card showing choices are balanced such that deviating from the strategy would be disadvantageous.",
          es: "En el juego de campeonato, las estrategias óptimas forman equilibrios de Nash donde el nivel de engaño, la informatividad de las sugerencias y las opciones de mostrar cartas están equilibradas de tal manera que desviarse de la estrategia sería desventajoso.",
          de: "Im Meisterschaftsspiel bilden optimale Strategien Nash-Gleichgewichte, bei denen Täuschungslevel, Vorschlagsinformativität und Kartenzeige-Entscheidungen so ausbalanciert sind, dass eine Abweichung von der Strategie nachteilig wäre.",
          nl: "In kampioenschapsspel vormen optimale strategieën Nash-evenwichten waarbij misleidingsniveau, suggestie-informativiteit en kaarttoonkeuzes zo zijn gebalanceerd dat afwijken van de strategie nadelig zou zijn."
        }
      },
      {
        question: {
          en: "What is dynamic programming in Cluedo solution optimization?",
          es: "¿Qué es la programación dinámica en la optimización de soluciones de Cluedo?",
          de: "Was ist dynamische Programmierung in der Cluedo-Lösungsoptimierung?",
          nl: "Wat is dynamische programmering in Cluedo-oplossingsoptimalisatie?"
        },
        options: [
          {
            en: "Breaking the deduction problem into subproblems and building optimal solution from optimal subproblem solutions",
            es: "Dividir el problema de deducción en subproblemas y construir la solución óptima a partir de soluciones de subproblemas óptimas",
            de: "Zerlegung des Deduktionsproblems in Teilprobleme und Aufbau der optimalen Lösung aus optimalen Teilproblem-Lösungen",
            nl: "Het deductieprobleem opdelen in subproblemen en optimale oplossing bouwen uit optimale subprobleemoplossingen"
          },
          {
            en: "Changing strategies during the game",
            es: "Cambiar estrategias durante el juego",
            de: "Strategien während des Spiels ändern",
            nl: "Strategieën veranderen tijdens het spel"
          },
          {
            en: "Programming moves in advance",
            es: "Programar movimientos por adelantado",
            de: "Züge im Voraus programmieren",
            nl: "Zetten vooruit programmeren"
          },
          {
            en: "Using computer assistance",
            es: "Usar asistencia informática",
            de: "Computerunterstützung verwenden",
            nl: "Computerondersteuning gebruiken"
          }
        ],
        correct: 0,
        explanation: {
          en: "Expert players decompose the card location problem into finding optimal solutions for each card category (suspects, weapons, rooms) separately, then combine these solutions, exploiting the problem's optimal substructure.",
          es: "Los jugadores expertos descomponen el problema de ubicación de cartas en encontrar soluciones óptimas para cada categoría de cartas (sospechosos, armas, habitaciones) por separado, luego combinan estas soluciones, explotando la subestructura óptima del problema.",
          de: "Expertspieler zerlegen das Kartenlokationsproblem in das Finden optimaler Lösungen für jede Kartenkategorie (Verdächtige, Waffen, Räume) separat und kombinieren dann diese Lösungen, wobei sie die optimale Teilstruktur des Problems ausnutzen.",
          nl: "Ervaren spelers ontleden het kaartlocatieprobleem in het vinden van optimale oplossingen voor elke kaartcategorie (verdachten, wapens, kamers) afzonderlijk, en combineren vervolgens deze oplossingen, waarbij ze de optimale substructuur van het probleem benutten."
        }
      },
      {
        question: {
          en: "What is the minimax regret principle in Cluedo accusations?",
          es: "¿Cuál es el principio de arrepentimiento minimax en acusaciones de Cluedo?",
          de: "Was ist das Minimax-Bedauern-Prinzip in Cluedo-Anschuldigungen?",
          nl: "Wat is het minimax-spijt principe in Cluedo-beschuldigingen?"
        },
        options: [
          {
            en: "Choosing the accusation that minimizes maximum regret across all possible true solutions",
            es: "Elegir la acusación que minimiza el arrepentimiento máximo en todas las soluciones verdaderas posibles",
            de: "Wählen der Anschuldigung, die maximales Bedauern über alle möglichen wahren Lösungen minimiert",
            nl: "Kiezen van de beschuldiging die maximale spijt over alle mogelijke ware oplossingen minimaliseert"
          },
          {
            en: "Avoiding accusations to prevent regret",
            es: "Evitar acusaciones para prevenir arrepentimiento",
            de: "Anschuldigungen vermeiden, um Bedauern zu verhindern",
            nl: "Beschuldigingen vermijden om spijt te voorkomen"
          },
          {
            en: "Making the safest possible guess",
            es: "Hacer la suposición más segura posible",
            de: "Die sicherste mögliche Vermutung machen",
            nl: "De veiligste mogelijke gok doen"
          },
          {
            en: "Minimizing emotional impact of wrong accusations",
            es: "Minimizar el impacto emocional de acusaciones incorrectas",
            de: "Emotionale Auswirkung falscher Anschuldigungen minimieren",
            nl: "Emotionele impact van verkeerde beschuldigingen minimaliseren"
          }
        ],
        correct: 0,
        explanation: {
          en: "When forced to accuse without complete certainty, championship players choose the solution that, if wrong, would have been hardest to distinguish from the true solution given the available evidence.",
          es: "Cuando se ven obligados a acusar sin certeza completa, los jugadores de campeonato eligen la solución que, si es incorrecta, habría sido más difícil de distinguir de la solución verdadera dada la evidencia disponible.",
          de: "Wenn sie gezwungen sind anzuklagen ohne vollständige Gewissheit, wählen Meisterschaftsspieler die Lösung, die, wenn falsch, am schwersten von der wahren Lösung zu unterscheiden gewesen wäre, gegeben die verfügbaren Beweise.",
          nl: "Wanneer gedwongen te beschuldigen zonder volledige zekerheid, kiezen kampioenschapsspelers de oplossing die, indien verkeerd, het moeilijkst te onderscheiden zou zijn geweest van de ware oplossing gegeven het beschikbare bewijs."
        }
      },
      {
        question: {
          en: "What is recursive opponent reasoning in championship Cluedo?",
          es: "¿Qué es el razonamiento recursivo del oponente en Cluedo de campeonato?",
          de: "Was ist rekursives Gegner-Reasoning im Meisterschafts-Cluedo?",
          nl: "Wat is recursief tegenstanderredeneren in kampioenschap Cluedo?"
        },
        options: [
          {
            en: "Reasoning about what opponents think you think they think, creating nested belief models",
            es: "Razonar sobre lo que los oponentes piensan que tú piensas que ellos piensan, creando modelos de creencias anidados",
            de: "Nachdenken darüber, was Gegner denken, dass Sie denken, dass sie denken, und verschachtelte Glaubensmodelle erstellen",
            nl: "Redeneren over wat tegenstanders denken dat jij denkt dat zij denken, waarbij geneste geloofmodellen worden gecreëerd"
          },
          {
            en: "Repeatedly analyzing opponent moves",
            es: "Analizar repetidamente movimientos de oponentes",
            de: "Gegnerzüge wiederholt analysieren",
            nl: "Herhaaldelijk zetten van tegenstanders analyseren"
          },
          {
            en: "Using opponent strategies recursively",
            es: "Usar estrategias de oponentes recursivamente",
            de: "Gegnerstrategien rekursiv verwenden",
            nl: "Strategieën van tegenstanders recursief gebruiken"
          },
          {
            en: "Building self-referential game models",
            es: "Construir modelos de juego autorreferenciales",
            de: "Selbstreferenzielle Spielmodelle erstellen",
            nl: "Zelfreferentiële spelmodellen bouwen"
          }
        ],
        correct: 0,
        explanation: {
          en: "At the highest level, players model not just what opponents know, but what opponents believe about your knowledge, and what they think you believe about their knowledge, creating multiple levels of strategic reasoning.",
          es: "En el nivel más alto, los jugadores modelan no solo lo que saben los oponentes, sino lo que los oponentes creen sobre tu conocimiento, y lo que piensan que tú crees sobre su conocimiento, creando múltiples niveles de razonamiento estratégico.",
          de: "Auf höchstem Niveau modellieren Spieler nicht nur, was Gegner wissen, sondern was Gegner über Ihr Wissen glauben und was sie denken, dass Sie über ihr Wissen glauben, wodurch mehrere Ebenen strategischen Denkens entstehen.",
          nl: "Op het hoogste niveau modelleren spelers niet alleen wat tegenstanders weten, maar wat tegenstanders geloven over jouw kennis, en wat ze denken dat jij gelooft over hun kennis, waarbij meerdere niveaus van strategisch redeneren ontstaan."
        }
      },
      {
        question: {
          en: "What is information-theoretic suggestion value in Cluedo?",
          es: "¿Cuál es el valor de sugerencia de teoría de la información en Cluedo?",
          de: "Was ist der informationstheoretische Vorschlagswert in Cluedo?",
          nl: "Wat is informatietheoretische suggestiewaarde in Cluedo?"
        },
        options: [
          {
            en: "Measuring suggestion quality by expected information gain in bits of entropy reduction",
            es: "Medir la calidad de la sugerencia por la ganancia de información esperada en bits de reducción de entropía",
            de: "Messung der Vorschlagsqualität durch erwarteten Informationsgewinn in Bits Entropiereduktion",
            nl: "Meten van suggestiekwaliteit door verwachte informatieverwerving in bits entropievermindering"
          },
          {
            en: "Rating suggestions by popularity",
            es: "Calificar sugerencias por popularidad",
            de: "Vorschläge nach Beliebtheit bewerten",
            nl: "Suggesties beoordelen op populariteit"
          },
          {
            en: "Valuing suggestions by room importance",
            es: "Valorar sugerencias por importancia de la habitación",
            de: "Vorschläge nach Raumwichtigkeit bewerten",
            nl: "Suggesties waarderen op kamerbelang"
          },
          {
            en: "Scoring suggestions numerically",
            es: "Puntuar sugerencias numéricamente",
            de: "Vorschläge numerisch bewerten",
            nl: "Suggesties numeriek scoren"
          }
        ],
        correct: 0,
        explanation: {
          en: "Expert players quantify each potential suggestion's value using Shannon entropy, calculating expected bits of uncertainty reduction across all possible outcomes of who shows which cards.",
          es: "Los jugadores expertos cuantifican el valor de cada sugerencia potencial usando la entropía de Shannon, calculando los bits esperados de reducción de incertidumbre en todos los resultados posibles de quién muestra qué cartas.",
          de: "Expertspieler quantifizieren den Wert jedes potenziellen Vorschlags mit Shannon-Entropie und berechnen erwartete Bits der Unsicherheitsreduktion über alle möglichen Ergebnisse, wer welche Karten zeigt.",
          nl: "Ervaren spelers kwantificeren de waarde van elke potentiële suggestie met Shannon-entropie, waarbij ze verwachte bits van onzekerheidvermindering berekenen over alle mogelijke uitkomsten van wie welke kaarten toont."
        }
      },
      {
        question: {
          en: "What is the exploration-exploitation tradeoff in Cluedo?",
          es: "¿Cuál es el equilibrio entre exploración y explotación en Cluedo?",
          de: "Was ist der Exploration-Exploitation-Tradeoff in Cluedo?",
          nl: "Wat is de exploratie-exploitatie-afweging in Cluedo?"
        },
        options: [
          {
            en: "Balancing between gathering new information and using known information to accuse",
            es: "Equilibrar entre recopilar nueva información y usar información conocida para acusar",
            de: "Ausbalancieren zwischen dem Sammeln neuer Informationen und der Nutzung bekannter Informationen zum Anklagen",
            nl: "Balanceren tussen het verzamelen van nieuwe informatie en het gebruiken van bekende informatie om te beschuldigen"
          },
          {
            en: "Exploring different rooms versus staying in one room",
            es: "Explorar diferentes habitaciones versus permanecer en una habitación",
            de: "Verschiedene Räume erkunden versus in einem Raum bleiben",
            nl: "Verschillende kamers verkennen versus in één kamer blijven"
          },
          {
            en: "Trying new strategies versus using proven ones",
            es: "Probar nuevas estrategias versus usar las probadas",
            de: "Neue Strategien ausprobieren versus bewährte verwenden",
            nl: "Nieuwe strategieën proberen versus bewezen strategieën gebruiken"
          },
          {
            en: "Taking advantage of opponent mistakes",
            es: "Aprovechar errores de oponentes",
            de: "Gegnerfehler ausnutzen",
            nl: "Profiteren van fouten van tegenstanders"
          }
        ],
        correct: 0,
        explanation: {
          en: "Championship players continuously solve the multi-armed bandit problem of when to stop gathering information and make an accusation, weighing the value of additional knowledge against the risk of opponents solving first.",
          es: "Los jugadores de campeonato resuelven continuamente el problema del bandido multi-armado de cuándo dejar de recopilar información y hacer una acusación, sopesando el valor del conocimiento adicional contra el riesgo de que los oponentes resuelvan primero.",
          de: "Meisterschaftsspieler lösen kontinuierlich das Multi-Armed-Bandit-Problem, wann sie aufhören sollen, Informationen zu sammeln und eine Anschuldigung zu machen, wobei sie den Wert zusätzlichen Wissens gegen das Risiko abwägen, dass Gegner zuerst lösen.",
          nl: "Kampioenschapsspelers lossen continu het multi-armed bandit-probleem op van wanneer te stoppen met het verzamelen van informatie en een beschuldiging te doen, waarbij ze de waarde van aanvullende kennis afwegen tegen het risico dat tegenstanders eerst oplossen."
        }
      },
      {
        question: {
          en: "What is card showing pattern analysis in championship play?",
          es: "¿Qué es el análisis de patrones de muestra de cartas en el juego de campeonato?",
          de: "Was ist Kartenzeige-Musteranalyse im Meisterschaftsspiel?",
          nl: "Wat is kaarttoonpatroonanalyse in kampioenschapsspel?"
        },
        options: [
          {
            en: "Detecting statistical patterns in which cards opponents show to deduce their full hands",
            es: "Detectar patrones estadísticos en qué cartas muestran los oponentes para deducir sus manos completas",
            de: "Erkennen statistischer Muster, welche Karten Gegner zeigen, um ihre vollständigen Blätter abzuleiten",
            nl: "Detecteren van statistische patronen in welke kaarten tegenstanders tonen om hun volledige handen af te leiden"
          },
          {
            en: "Memorizing all shown cards",
            es: "Memorizar todas las cartas mostradas",
            de: "Alle gezeigten Karten auswendig lernen",
            nl: "Alle getoonde kaarten onthouden"
          },
          {
            en: "Looking for visual patterns on cards",
            es: "Buscar patrones visuales en las cartas",
            de: "Nach visuellen Mustern auf Karten suchen",
            nl: "Zoeken naar visuele patronen op kaarten"
          },
          {
            en: "Tracking card showing frequency",
            es: "Rastrear frecuencia de muestra de cartas",
            de: "Kartenzeige-Häufigkeit verfolgen",
            nl: "Kaarttoonfrequentie bijhouden"
          }
        ],
        correct: 0,
        explanation: {
          en: "Expert players analyze the temporal and contextual patterns of card showing. If a player consistently shows weapons over suspects when both are available, this reveals hand composition information beyond the specific cards shown.",
          es: "Los jugadores expertos analizan los patrones temporales y contextuales de mostrar cartas. Si un jugador muestra consistentemente armas sobre sospechosos cuando ambos están disponibles, esto revela información de composición de mano más allá de las cartas específicas mostradas.",
          de: "Expertspieler analysieren die zeitlichen und kontextuellen Muster des Kartenzeigens. Wenn ein Spieler konsistent Waffen über Verdächtige zeigt, wenn beide verfügbar sind, offenbart dies Handzusammensetzungsinformationen über die spezifisch gezeigten Karten hinaus.",
          nl: "Ervaren spelers analyseren de temporele en contextuele patronen van kaarten tonen. Als een speler consistent wapens boven verdachten toont wanneer beide beschikbaar zijn, onthult dit handsamenstelling-informatie buiten de specifiek getoonde kaarten."
        }
      },
      {
        question: {
          en: "What is the optimal stopping problem in Cluedo deduction?",
          es: "¿Cuál es el problema de parada óptima en la deducción de Cluedo?",
          de: "Was ist das optimale Stopproblem in der Cluedo-Deduktion?",
          nl: "Wat is het optimale stopprobleem in Cluedo-deductie?"
        },
        options: [
          {
            en: "Determining mathematically when to stop investigating and make accusation based on probability thresholds",
            es: "Determinar matemáticamente cuándo dejar de investigar y hacer acusación basándose en umbrales de probabilidad",
            de: "Mathematisch bestimmen, wann die Untersuchung gestoppt und eine Anschuldigung basierend auf Wahrscheinlichkeitsschwellen gemacht werden soll",
            nl: "Wiskundig bepalen wanneer te stoppen met onderzoeken en beschuldiging te doen gebaseerd op waarschijnlijkheidsdrempels"
          },
          {
            en: "Knowing when to quit playing",
            es: "Saber cuándo dejar de jugar",
            de: "Wissen, wann man aufhören soll zu spielen",
            nl: "Weten wanneer te stoppen met spelen"
          },
          {
            en: "Deciding when to stop taking notes",
            es: "Decidir cuándo dejar de tomar notas",
            de: "Entscheiden, wann man aufhören soll Notizen zu machen",
            nl: "Beslissen wanneer te stoppen met notities maken"
          },
          {
            en: "Ending suggestion sequences",
            es: "Terminar secuencias de sugerencias",
            de: "Vorschlagssequenzen beenden",
            nl: "Suggestiesequenties beëindigen"
          }
        ],
        correct: 0,
        explanation: {
          en: "This classic decision theory problem appears in Cluedo: when does the expected value of accusing now exceed the expected value of gathering more information? Expert players solve this using dynamic programming and game-theoretic opponent modeling.",
          es: "Este problema clásico de teoría de decisiones aparece en Cluedo: ¿cuándo el valor esperado de acusar ahora excede el valor esperado de recopilar más información? Los jugadores expertos resuelven esto usando programación dinámica y modelado de oponentes de teoría de juegos.",
          de: "Dieses klassische Entscheidungstheorieproblem erscheint in Cluedo: Wann übersteigt der Erwartungswert des sofortigen Anklagens den Erwartungswert des Sammelns weiterer Informationen? Expertspieler lösen dies mit dynamischer Programmierung und spieltheoretischer Gegnermodellierung.",
          nl: "Dit klassieke beslissingstheorieprobleem verschijnt in Cluedo: wanneer overschrijdt de verwachte waarde van nu beschuldigen de verwachte waarde van meer informatie verzamelen? Ervaren spelers lossen dit op met dynamische programmering en speltheoretische tegenstandermodellering."
        }
      }
,
        {
          question: {
            en: "What is card count asymmetry exploitation?",
            es: "What is card count asymmetry exploitation?",
            de: "What is card count asymmetry exploitation?",
            nl: "What is card count asymmetry exploitation?"
          },
          options: [
            {
              en: "Leveraging knowledge of exactly how many cards each player holds",
              es: "Leveraging knowledge of exactly how many cards each player holds",
              de: "Leveraging knowledge of exactly how many cards each player holds",
              nl: "Leveraging knowledge of exactly how many cards each player holds"
            },
            {
              en: "Exploiting unequal hands",
              es: "Exploiting unequal hands",
              de: "Exploiting unequal hands",
              nl: "Exploiting unequal hands"
            },
            {
              en: "Counting unfairly",
              es: "Counting unfairly",
              de: "Counting unfairly",
              nl: "Counting unfairly"
            },
            {
              en: "Having more cards",
              es: "Having more cards",
              de: "Having more cards",
              nl: "Having more cards"
            }
          ],
          correct: 0,
          explanation: {
            en: "Knowing player seating and card distribution allows calculating exactly which players can hold which cards.",
            es: "Knowing player seating and card distribution allows calculating exactly which players can hold which cards.",
            de: "Knowing player seating and card distribution allows calculating exactly which players can hold which cards.",
            nl: "Knowing player seating and card distribution allows calculating exactly which players can hold which cards."
          }
        },
        {
          question: {
            en: "What is suggestion sequencing theory?",
            es: "What is suggestion sequencing theory?",
            de: "What is suggestion sequencing theory?",
            nl: "What is suggestion sequencing theory?"
          },
          options: [
            {
              en: "Optimal ordering of suggestions to minimize total moves to solution",
              es: "Optimal ordering of suggestions to minimize total moves to solution",
              de: "Optimal ordering of suggestions to minimize total moves to solution",
              nl: "Optimal ordering of suggestions to minimize total moves to solution"
            },
            {
              en: "Suggesting alphabetically",
              es: "Suggesting alphabetically",
              de: "Suggesting alphabetically",
              nl: "Suggesting alphabetically"
            },
            {
              en: "Random order",
              es: "Random order",
              de: "Random order",
              nl: "Random order"
            },
            {
              en: "Following a pattern",
              es: "Following a pattern",
              de: "Following a pattern",
              nl: "Following a pattern"
            }
          ],
          correct: 0,
          explanation: {
            en: "Mathematical optimization of suggestion order can reduce expected moves to solve by minimizing redundant information.",
            es: "Mathematical optimization of suggestion order can reduce expected moves to solve by minimizing redundant information.",
            de: "Mathematical optimization of suggestion order can reduce expected moves to solve by minimizing redundant information.",
            nl: "Mathematical optimization of suggestion order can reduce expected moves to solve by minimizing redundant information."
          }
        },
        {
          question: {
            en: "What is psychological pressure in Clue?",
            es: "What is psychological pressure in Clue?",
            de: "What is psychological pressure in Clue?",
            nl: "What is psychological pressure in Clue?"
          },
          options: [
            {
              en: "Using suggestion patterns to make opponents doubt their deductions",
              es: "Using suggestion patterns to make opponents doubt their deductions",
              de: "Using suggestion patterns to make opponents doubt their deductions",
              nl: "Using suggestion patterns to make opponents doubt their deductions"
            },
            {
              en: "Yelling at players",
              es: "Yelling at players",
              de: "Yelling at players",
              nl: "Yelling at players"
            },
            {
              en: "Stressing others",
              es: "Stressing others",
              de: "Stressing others",
              nl: "Stressing others"
            },
            {
              en: "Being mean",
              es: "Being mean",
              de: "Being mean",
              nl: "Being mean"
            }
          ],
          correct: 0,
          explanation: {
            en: "Confident repeated suggestions can make opponents question their own conclusions, especially if they have limited information.",
            es: "Confident repeated suggestions can make opponents question their own conclusions, especially if they have limited information.",
            de: "Confident repeated suggestions can make opponents question their own conclusions, especially if they have limited information.",
            nl: "Confident repeated suggestions can make opponents question their own conclusions, especially if they have limited information."
          }
        },
        {
          question: {
            en: "What is the forced accusation scenario?",
            es: "What is the forced accusation scenario?",
            de: "What is the forced accusation scenario?",
            nl: "What is the forced accusation scenario?"
          },
          options: [
            {
              en: "Creating situations where opponents must accuse before having full information",
              es: "Creating situations where opponents must accuse before having full information",
              de: "Creating situations where opponents must accuse before having full information",
              nl: "Creating situations where opponents must accuse before having full information"
            },
            {
              en: "Making others guess",
              es: "Making others guess",
              de: "Making others guess",
              nl: "Making others guess"
            },
            {
              en: "Demanding accusations",
              es: "Demanding accusations",
              de: "Demanding accusations",
              nl: "Demanding accusations"
            },
            {
              en: "Forcing conclusions",
              es: "Forcing conclusions",
              de: "Forcing conclusions",
              nl: "Forcing conclusions"
            }
          ],
          correct: 0,
          explanation: {
            en: "By rapidly closing in on solution, you can pressure opponents to make premature accusations, eliminating competition.",
            es: "By rapidly closing in on solution, you can pressure opponents to make premature accusations, eliminating competition.",
            de: "By rapidly closing in on solution, you can pressure opponents to make premature accusations, eliminating competition.",
            nl: "By rapidly closing in on solution, you can pressure opponents to make premature accusations, eliminating competition."
          }
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
