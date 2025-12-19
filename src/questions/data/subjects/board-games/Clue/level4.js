// Quiz Template - Level 4: Bord spelletjes - Clue
(function() {
  const level4 = {
    name: {
      en: "Cluedo - Advanced",
      es: "Cluedo - Avanzado",
      de: "Cluedo - Erfahren",
      nl: "Cluedo - Gevorderd"
    },
    questions: [
      {
            question: {
                  en: "What is a 'suggestion loop' strategy in advanced Cluedo play?",
                  es: "¿Qué es una estrategia de 'bucle de sugerencias' en el juego avanzado de Cluedo?",
                  de: "Was ist eine 'Vorschlagsschleife'-Strategie im fortgeschrittenen Cluedo-Spiel?",
                  nl: "Wat is een 'suggestielus'-strategie in geavanceerd Cluedo-spel?"
            },
            options: [
                  {
                        en: "Systematically testing all combinations of unknowns",
                        es: "Probar sistemáticamente todas las combinaciones de incógnitas",
                        de: "Systematisches Testen aller Kombinationen von Unbekannten",
                        nl: "Systematisch alle combinaties van onbekenden testen"
                  },
                  {
                        en: "Repeating the same suggestion",
                        es: "Repetir la misma sugerencia",
                        de: "Denselben Vorschlag wiederholen",
                        nl: "Dezelfde suggestie herhalen"
                  },
                  {
                        en: "Only suggesting rooms",
                        es: "Solo sugerir habitaciones",
                        de: "Nur Räume vorschlagen",
                        nl: "Alleen kamers voorstellen"
                  },
                  {
                        en: "Making random suggestions",
                        es: "Hacer sugerencias al azar",
                        de: "Zufällige Vorschläge machen",
                        nl: "Willekeurige suggesties doen"
                  }
            ],
            correct: 0,
            explanation: {
                  en: "A suggestion loop involves systematically cycling through unknown cards in different combinations to eliminate possibilities efficiently. By methodically testing combinations of suspects, weapons, and rooms you haven't ruled out, you can gather maximum information from each suggestion and narrow down the solution faster than random guessing.",
                  es: "Un bucle de sugerencias implica recorrer sistemáticamente las cartas desconocidas en diferentes combinaciones para eliminar posibilidades de manera eficiente. Al probar metódicamente combinaciones de sospechosos, armas y habitaciones que no has descartado, puedes recopilar la máxima información de cada sugerencia y reducir la solución más rápido que adivinando al azar.",
                  de: "Eine Vorschlagsschleife beinhaltet das systematische Durchlaufen unbekannter Karten in verschiedenen Kombinationen, um Möglichkeiten effizient zu eliminieren. Indem Sie methodisch Kombinationen von Verdächtigen, Waffen und Räumen testen, die Sie nicht ausgeschlossen haben, können Sie aus jedem Vorschlag maximale Informationen sammeln und die Lösung schneller eingrenzen als durch zufälliges Raten.",
                  nl: "Een suggestielus houdt in dat je systematisch door onbekende kaarten in verschillende combinaties gaat om mogelijkheden efficiënt uit te sluiten. Door methodisch combinaties van verdachten, wapens en kamers te testen die je nog niet hebt uitgesloten, kun je maximale informatie uit elke suggestie halen en de oplossing sneller vinden dan door willekeurig te gokken."
            }
      },
      {
            question: {
                  en: "In competitive Cluedo, what is 'tempo control'?",
                  es: "En Cluedo competitivo, ¿qué es el 'control de tempo'?",
                  de: "Was ist 'Tempokontrolle' im kompetitiven Cluedo?",
                  nl: "Wat is 'tempocontrole' in competitief Cluedo?"
            },
            options: [
                  {
                        en: "Managing game pace to maximize information while minimizing opponent gains",
                        es: "Gestionar el ritmo del juego para maximizar la información mientras se minimizan las ganancias del oponente",
                        de: "Das Spieltempo steuern, um Informationen zu maximieren und gleichzeitig die Gewinne der Gegner zu minimieren",
                        nl: "Het speltempo beheren om informatie te maximaliseren terwijl je de winst van tegenstanders minimaliseert"
                  },
                  {
                        en: "Playing as fast as possible",
                        es: "Jugar lo más rápido posible",
                        de: "So schnell wie möglich spielen",
                        nl: "Zo snel mogelijk spelen"
                  },
                  {
                        en: "Delaying your turns",
                        es: "Retrasar tus turnos",
                        de: "Deine Züge verzögern",
                        nl: "Je beurten uitstellen"
                  },
                  {
                        en: "Using a timer",
                        es: "Usar un temporizador",
                        de: "Einen Timer verwenden",
                        nl: "Een timer gebruiken"
                  }
            ],
            correct: 0,
            explanation: {
                  en: "Tempo control in Cluedo refers to strategically managing the pace at which you gather information versus when you make your final accusation. This includes deciding when to stay in rooms for multiple suggestions versus moving to new rooms, when to make revealing suggestions that help opponents versus safe suggestions, and timing your accusation to win before opponents can act on the information you've inadvertently shared.",
                  es: "El control de tempo en Cluedo se refiere a gestionar estratégicamente el ritmo al que recopilas información frente a cuándo haces tu acusación final. Esto incluye decidir cuándo quedarse en habitaciones para múltiples sugerencias frente a moverse a nuevas habitaciones, cuándo hacer sugerencias reveladoras que ayudan a los oponentes frente a sugerencias seguras, y cronometrar tu acusación para ganar antes de que los oponentes puedan actuar sobre la información que has compartido inadvertidamente.",
                  de: "Tempokontrolle in Cluedo bezieht sich auf die strategische Verwaltung des Tempos, mit dem Sie Informationen sammeln, im Vergleich zu dem Zeitpunkt, an dem Sie Ihre endgültige Anklage erheben. Dies umfasst die Entscheidung, wann Sie in Räumen bleiben für mehrere Vorschläge im Vergleich zum Wechsel in neue Räume, wann Sie aufschlussreiche Vorschläge machen, die Gegnern helfen, im Vergleich zu sicheren Vorschlägen, und das Timing Ihrer Anklage, um zu gewinnen, bevor Gegner auf die Informationen reagieren können, die Sie versehentlich geteilt haben.",
                  nl: "Tempocontrole in Cluedo verwijst naar het strategisch beheren van het tempo waarop je informatie verzamelt versus wanneer je je uiteindelijke beschuldiging doet. Dit omvat beslissen wanneer je in kamers blijft voor meerdere suggesties versus naar nieuwe kamers gaan, wanneer je onthullende suggesties doet die tegenstanders helpen versus veilige suggesties, en het timen van je beschuldiging om te winnen voordat tegenstanders kunnen handelen op de informatie die je onbedoeld hebt gedeeld."
            }
      },
      {
            question: {
                  en: "What is the 'double elimination' technique?",
                  es: "¿Qué es la técnica de 'doble eliminación'?",
                  de: "Was ist die 'Doppeleliminierung'-Technik?",
                  nl: "Wat is de 'dubbele eliminatie'-techniek?"
            },
            options: [
                  {
                        en: "Using one suggestion to eliminate two categories simultaneously",
                        es: "Usar una sugerencia para eliminar dos categorías simultáneamente",
                        de: "Einen Vorschlag verwenden, um zwei Kategorien gleichzeitig zu eliminieren",
                        nl: "Eén suggestie gebruiken om twee categorieën tegelijk te elimineren"
                  },
                  {
                        en: "Making two accusations in one turn",
                        es: "Hacer dos acusaciones en un turno",
                        de: "Zwei Anklagen in einem Zug machen",
                        nl: "Twee beschuldigingen in één beurt doen"
                  },
                  {
                        en: "Eliminating two players",
                        es: "Eliminar dos jugadores",
                        de: "Zwei Spieler eliminieren",
                        nl: "Twee spelers elimineren"
                  },
                  {
                        en: "Rolling the dice twice",
                        es: "Tirar los dados dos veces",
                        de: "Die Würfel zweimal werfen",
                        nl: "Twee keer dobbelen"
                  }
            ],
            correct: 0,
            explanation: {
                  en: "Double elimination occurs when you make a suggestion containing one known card (that you hold) plus two unknowns. When an opponent shows you a card, you've simultaneously confirmed they don't have your known card AND you've learned which of your two unknowns they possess. This technique allows you to gain information about two categories (suspect/weapon or suspect/room, etc.) with a single suggestion, making your deduction process more efficient.",
                  es: "La doble eliminación ocurre cuando haces una sugerencia que contiene una carta conocida (que posees) más dos incógnitas. Cuando un oponente te muestra una carta, has confirmado simultáneamente que no tienen tu carta conocida Y has aprendido cuál de tus dos incógnitas poseen. Esta técnica te permite obtener información sobre dos categorías (sospechoso/arma o sospechoso/habitación, etc.) con una sola sugerencia, haciendo tu proceso de deducción más eficiente.",
                  de: "Doppeleliminierung tritt auf, wenn Sie einen Vorschlag machen, der eine bekannte Karte (die Sie besitzen) plus zwei Unbekannte enthält. Wenn ein Gegner Ihnen eine Karte zeigt, haben Sie gleichzeitig bestätigt, dass sie Ihre bekannte Karte nicht haben UND Sie haben gelernt, welche Ihrer zwei Unbekannten sie besitzen. Diese Technik ermöglicht es Ihnen, Informationen über zwei Kategorien (Verdächtiger/Waffe oder Verdächtiger/Raum usw.) mit einem einzigen Vorschlag zu erhalten, was Ihren Deduktionsprozess effizienter macht.",
                  nl: "Dubbele eliminatie vindt plaats wanneer je een suggestie doet met één bekende kaart (die jij hebt) plus twee onbekenden. Wanneer een tegenstander je een kaart laat zien, heb je tegelijkertijd bevestigd dat ze jouw bekende kaart niet hebben EN heb je geleerd welke van je twee onbekenden ze hebben. Deze techniek stelt je in staat om informatie over twee categorieën (verdachte/wapen of verdachte/kamer, enz.) te krijgen met een enkele suggestie, waardoor je deductieproces efficiënter wordt."
            }
      },
      {
            question: {
                  en: "In tournament Cluedo, what does 'information parity' mean?",
                  es: "En Cluedo de torneo, ¿qué significa 'paridad de información'?",
                  de: "Was bedeutet 'Informationsparität' im Turnier-Cluedo?",
                  nl: "Wat betekent 'informatiepariteit' in toernooi-Cluedo?"
            },
            options: [
                  {
                        en: "When all players have access to roughly equal amounts of game information",
                        es: "Cuando todos los jugadores tienen acceso a cantidades aproximadamente iguales de información del juego",
                        de: "Wenn alle Spieler Zugang zu ungefähr gleichen Mengen an Spielinformationen haben",
                        nl: "Wanneer alle spelers toegang hebben tot ongeveer gelijke hoeveelheden spelinformatie"
                  },
                  {
                        en: "When all players have the same number of cards",
                        es: "Cuando todos los jugadores tienen el mismo número de cartas",
                        de: "Wenn alle Spieler die gleiche Anzahl von Karten haben",
                        nl: "Wanneer alle spelers hetzelfde aantal kaarten hebben"
                  },
                  {
                        en: "When the game is tied",
                        es: "Cuando el juego está empatado",
                        de: "Wenn das Spiel unentschieden ist",
                        nl: "Wanneer het spel gelijk staat"
                  },
                  {
                        en: "When everyone is in the same room",
                        es: "Cuando todos están en la misma habitación",
                        de: "Wenn alle im selben Raum sind",
                        nl: "Wanneer iedereen in dezelfde kamer is"
                  }
            ],
            correct: 0,
            explanation: {
                  en: "Information parity refers to the state where all players have observed or deduced roughly the same amount of information about the solution. This typically occurs mid-game and is a critical moment where skilled players try to break parity by making strategic suggestions that give them unique information while minimizing what they reveal to others. Players who maintain an information advantage (breaking parity in their favor) are more likely to solve the mystery first.",
                  es: "La paridad de información se refiere al estado en que todos los jugadores han observado o deducido aproximadamente la misma cantidad de información sobre la solución. Esto típicamente ocurre a mitad del juego y es un momento crítico donde los jugadores hábiles intentan romper la paridad haciendo sugerencias estratégicas que les dan información única mientras minimizan lo que revelan a otros. Los jugadores que mantienen una ventaja de información (rompiendo la paridad a su favor) tienen más probabilidades de resolver el misterio primero.",
                  de: "Informationsparität bezieht sich auf den Zustand, in dem alle Spieler ungefähr die gleiche Menge an Informationen über die Lösung beobachtet oder abgeleitet haben. Dies geschieht typischerweise in der Mitte des Spiels und ist ein kritischer Moment, in dem erfahrene Spieler versuchen, die Parität zu brechen, indem sie strategische Vorschläge machen, die ihnen einzigartige Informationen geben, während sie minimieren, was sie anderen offenbaren. Spieler, die einen Informationsvorteil beibehalten (Parität zu ihren Gunsten brechen), lösen das Rätsel eher zuerst.",
                  nl: "Informatiepariteit verwijst naar de staat waarin alle spelers ongeveer dezelfde hoeveelheid informatie over de oplossing hebben waargenomen of afgeleid. Dit gebeurt meestal halverwege het spel en is een kritiek moment waar vaardige spelers proberen de pariteit te doorbreken door strategische suggesties te doen die hen unieke informatie geven terwijl ze minimaliseren wat ze aan anderen onthullen. Spelers die een informatievoorsprong behouden (pariteit in hun voordeel doorbreken) lossen het mysterie eerder op."
            }
      },
      {
            question: {
                  en: "What is 'defensive suggesting' in Cluedo?",
                  es: "¿Qué es 'sugerir defensivamente' en Cluedo?",
                  de: "Was ist 'defensives Vorschlagen' in Cluedo?",
                  nl: "Wat is 'defensief suggereren' in Cluedo?"
            },
            options: [
                  {
                        en: "Making suggestions using cards you hold to limit information leakage",
                        es: "Hacer sugerencias usando cartas que posees para limitar la fuga de información",
                        de: "Vorschläge machen unter Verwendung von Karten, die Sie besitzen, um Informationslecks zu begrenzen",
                        nl: "Suggesties doen met kaarten die je hebt om informatielek te beperken"
                  },
                  {
                        en: "Only suggesting in safe rooms",
                        es: "Solo sugerir en habitaciones seguras",
                        de: "Nur in sicheren Räumen vorschlagen",
                        nl: "Alleen in veilige kamers voorstellen"
                  },
                  {
                        en: "Not making any suggestions",
                        es: "No hacer ninguna sugerencia",
                        de: "Keine Vorschläge machen",
                        nl: "Geen suggesties doen"
                  },
                  {
                        en: "Always showing cards immediately",
                        es: "Mostrar cartas siempre inmediatamente",
                        de: "Karten immer sofort zeigen",
                        nl: "Altijd meteen kaarten laten zien"
                  }
            ],
            correct: 0,
            explanation: {
                  en: "Defensive suggesting involves strategically including one or more cards you hold in your suggestions. This ensures you won't learn new information from that suggestion (since you already know those cards), but it prevents opponents from learning whether you have those cards. This technique is particularly useful when you're close to solving the mystery and want to avoid giving opponents critical information that might help them catch up or win first.",
                  es: "Sugerir defensivamente implica incluir estratégicamente una o más cartas que posees en tus sugerencias. Esto asegura que no aprenderás nueva información de esa sugerencia (ya que ya conoces esas cartas), pero evita que los oponentes aprendan si tienes esas cartas. Esta técnica es particularmente útil cuando estás cerca de resolver el misterio y quieres evitar dar a los oponentes información crítica que podría ayudarles a alcanzarte o ganar primero.",
                  de: "Defensives Vorschlagen beinhaltet das strategische Einbeziehen einer oder mehrerer Karten, die Sie besitzen, in Ihre Vorschläge. Dies stellt sicher, dass Sie aus diesem Vorschlag keine neuen Informationen lernen (da Sie diese Karten bereits kennen), aber es verhindert, dass Gegner erfahren, ob Sie diese Karten haben. Diese Technik ist besonders nützlich, wenn Sie kurz davor sind, das Rätsel zu lösen, und vermeiden möchten, Gegnern kritische Informationen zu geben, die ihnen helfen könnten, aufzuholen oder zuerst zu gewinnen.",
                  nl: "Defensief suggereren houdt in dat je strategisch één of meer kaarten die je hebt in je suggesties opneemt. Dit zorgt ervoor dat je geen nieuwe informatie leert van die suggestie (omdat je die kaarten al kent), maar het voorkomt dat tegenstanders leren of je die kaarten hebt. Deze techniek is vooral nuttig wanneer je bijna het mysterie hebt opgelost en wilt voorkomen dat je tegenstanders cruciale informatie geeft die hen zou kunnen helpen in te halen of eerst te winnen."
            }
      },
      {
            question: {
                  en: "What is the 'minimum information principle' in Cluedo strategy?",
                  es: "¿Qué es el 'principio de información mínima' en la estrategia de Cluedo?",
                  de: "Was ist das 'Prinzip der minimalen Information' in der Cluedo-Strategie?",
                  nl: "Wat is het 'minimum informatie principe' in Cluedo-strategie?"
            },
            options: [
                  {
                        en: "Reveal only what's required, showing the same card repeatedly when possible",
                        es: "Revelar solo lo necesario, mostrando la misma carta repetidamente cuando sea posible",
                        de: "Nur das Erforderliche offenbaren, dieselbe Karte wiederholt zeigen, wenn möglich",
                        nl: "Alleen onthullen wat nodig is, dezelfde kaart herhaaldelijk laten zien wanneer mogelijk"
                  },
                  {
                        en: "Always show different cards",
                        es: "Mostrar siempre cartas diferentes",
                        de: "Immer verschiedene Karten zeigen",
                        nl: "Altijd verschillende kaarten laten zien"
                  },
                  {
                        en: "Never show any cards",
                        es: "Nunca mostrar ninguna carta",
                        de: "Niemals Karten zeigen",
                        nl: "Nooit kaarten laten zien"
                  },
                  {
                        en: "Show all your cards at once",
                        es: "Mostrar todas tus cartas a la vez",
                        de: "Alle Karten auf einmal zeigen",
                        nl: "Al je kaarten tegelijk laten zien"
                  }
            ],
            correct: 0,
            explanation: {
                  en: "The minimum information principle states that when you must show a card to disprove a suggestion, you should consistently show the same card whenever possible. This prevents opponents from learning your full hand. For example, if a suggestion contains Miss Scarlett and the Rope, and you have both cards, always show the same one (e.g., Miss Scarlett) rather than alternating. This way opponents only learn you have one specific card rather than multiple cards from that suggestion.",
                  es: "El principio de información mínima establece que cuando debes mostrar una carta para refutar una sugerencia, debes mostrar consistentemente la misma carta siempre que sea posible. Esto evita que los oponentes aprendan toda tu mano. Por ejemplo, si una sugerencia contiene Miss Scarlett y la Cuerda, y tienes ambas cartas, siempre muestra la misma (por ejemplo, Miss Scarlett) en lugar de alternar. De esta manera, los oponentes solo aprenden que tienes una carta específica en lugar de múltiples cartas de esa sugerencia.",
                  de: "Das Prinzip der minimalen Information besagt, dass Sie, wenn Sie eine Karte zeigen müssen, um einen Vorschlag zu widerlegen, konsequent dieselbe Karte zeigen sollten, wann immer möglich. Dies verhindert, dass Gegner Ihre volle Hand lernen. Zum Beispiel, wenn ein Vorschlag Miss Scarlett und das Seil enthält und Sie beide Karten haben, zeigen Sie immer dieselbe (z.B. Miss Scarlett) statt abzuwechseln. Auf diese Weise erfahren Gegner nur, dass Sie eine bestimmte Karte haben, anstatt mehrere Karten aus diesem Vorschlag.",
                  nl: "Het minimum informatie principe stelt dat wanneer je een kaart moet laten zien om een suggestie te weerleggen, je consistent dezelfde kaart moet laten zien wanneer mogelijk. Dit voorkomt dat tegenstanders je volledige hand leren. Bijvoorbeeld, als een suggestie Miss Scarlett en het Touw bevat, en je hebt beide kaarten, laat dan altijd dezelfde zien (bijv. Miss Scarlett) in plaats van af te wisselen. Op deze manier leren tegenstanders alleen dat je één specifieke kaart hebt in plaats van meerdere kaarten uit die suggestie."
            }
      },
      {
            question: {
                  en: "What is 'card distribution analysis' in advanced Cluedo?",
                  es: "¿Qué es el 'análisis de distribución de cartas' en Cluedo avanzado?",
                  de: "Was ist 'Kartenverteilungsanalyse' im fortgeschrittenen Cluedo?",
                  nl: "Wat is 'kaartverdelingsanalyse' in geavanceerd Cluedo?"
            },
            options: [
                  {
                        en: "Tracking which players likely hold which cards based on response patterns",
                        es: "Rastrear qué jugadores probablemente tienen qué cartas según los patrones de respuesta",
                        de: "Verfolgen, welche Spieler wahrscheinlich welche Karten halten, basierend auf Antwortmustern",
                        nl: "Bijhouden welke spelers waarschijnlijk welke kaarten hebben op basis van responspatronen"
                  },
                  {
                        en: "Counting total cards in the game",
                        es: "Contar el total de cartas en el juego",
                        de: "Die Gesamtzahl der Karten im Spiel zählen",
                        nl: "Totaal aantal kaarten in het spel tellen"
                  },
                  {
                        en: "Analyzing card artwork",
                        es: "Analizar las ilustraciones de las cartas",
                        de: "Kartengrafiken analysieren",
                        nl: "Kaartafbeeldingen analyseren"
                  },
                  {
                        en: "Shuffling cards randomly",
                        es: "Barajar cartas al azar",
                        de: "Karten zufällig mischen",
                        nl: "Kaarten willekeurig schudden"
                  }
            ],
            correct: 0,
            explanation: {
                  en: "Card distribution analysis involves tracking not just which cards have been eliminated, but which specific players likely hold which unrevealed cards. By observing who can and cannot disprove suggestions, you build a mental map of probable card locations. For instance, if Player A can disprove suggestions involving the Candlestick but not ones with the Knife, you can infer they likely hold the Candlestick. This deeper analysis helps you make more strategic suggestions that target specific players' holdings.",
                  es: "El análisis de distribución de cartas implica rastrear no solo qué cartas han sido eliminadas, sino qué jugadores específicos probablemente tienen qué cartas no reveladas. Al observar quién puede y no puede refutar sugerencias, construyes un mapa mental de ubicaciones probables de cartas. Por ejemplo, si el Jugador A puede refutar sugerencias que involucran el Candelabro pero no las que tienen el Cuchillo, puedes inferir que probablemente tiene el Candelabro. Este análisis más profundo te ayuda a hacer sugerencias más estratégicas que apuntan a las tenencias de jugadores específicos.",
                  de: "Die Kartenverteilungsanalyse umfasst die Verfolgung nicht nur, welche Karten eliminiert wurden, sondern welche spezifischen Spieler wahrscheinlich welche nicht offenbarten Karten halten. Durch Beobachten, wer Vorschläge widerlegen kann und wer nicht, erstellen Sie eine mentale Karte wahrscheinlicher Kartenstandorte. Wenn beispielsweise Spieler A Vorschläge widerlegen kann, die den Leuchter betreffen, aber nicht solche mit dem Messer, können Sie folgern, dass sie wahrscheinlich den Leuchter halten. Diese tiefere Analyse hilft Ihnen, strategischere Vorschläge zu machen, die auf die Bestände bestimmter Spieler abzielen.",
                  nl: "Kaartverdelingsanalyse houdt in dat je niet alleen bijhoudt welke kaarten zijn geëlimineerd, maar welke specifieke spelers waarschijnlijk welke niet-onthulde kaarten hebben. Door te observeren wie wel en niet suggesties kan weerleggen, bouw je een mentale kaart van waarschijnlijke kaartlocaties. Als Speler A bijvoorbeeld suggesties met de Kandelaar kan weerleggen maar niet die met het Mes, kun je afleiden dat ze waarschijnlijk de Kandelaar hebben. Deze diepere analyse helpt je strategischere suggesties te doen die zich richten op specifieke bezittingen van spelers."
            }
      },
      {
            question: {
                  en: "What is the 'three-card deduction' technique?",
                  es: "¿Qué es la técnica de 'deducción de tres cartas'?",
                  de: "Was ist die 'Drei-Karten-Deduktion'-Technik?",
                  nl: "Wat is de 'drie-kaarten deductie'-techniek?"
            },
            options: [
                  {
                        en: "Solving the mystery by eliminating all but one card in each category",
                        es: "Resolver el misterio eliminando todas menos una carta en cada categoría",
                        de: "Das Rätsel lösen, indem alle bis auf eine Karte in jeder Kategorie eliminiert werden",
                        nl: "Het mysterie oplossen door alle kaarten behalve één in elke categorie te elimineren"
                  },
                  {
                        en: "Holding exactly three cards",
                        es: "Tener exactamente tres cartas",
                        de: "Genau drei Karten halten",
                        nl: "Precies drie kaarten hebben"
                  },
                  {
                        en: "Making three suggestions per turn",
                        es: "Hacer tres sugerencias por turno",
                        de: "Drei Vorschläge pro Zug machen",
                        nl: "Drie suggesties per beurt doen"
                  },
                  {
                        en: "Playing with only three players",
                        es: "Jugar con solo tres jugadores",
                        de: "Mit nur drei Spielern spielen",
                        nl: "Met slechts drie spelers spelen"
                  }
            ],
            correct: 0,
            explanation: {
                  en: "The three-card deduction is the process of narrowing down each category (suspect, weapon, room) to a single card through systematic elimination. Once you've identified or eliminated all cards in a category except one, you know that remaining card must be in the solution envelope. Expert players don't wait until all three categories are solved; they make their accusation as soon as they've definitively identified the three cards in the solution through logical deduction, even if other cards remain uncertain.",
                  es: "La deducción de tres cartas es el proceso de reducir cada categoría (sospechoso, arma, habitación) a una sola carta mediante eliminación sistemática. Una vez que hayas identificado o eliminado todas las cartas en una categoría excepto una, sabes que esa carta restante debe estar en el sobre de la solución. Los jugadores expertos no esperan hasta que las tres categorías estén resueltas; hacen su acusación tan pronto como hayan identificado definitivamente las tres cartas en la solución mediante deducción lógica, incluso si otras cartas permanecen inciertas.",
                  de: "Die Drei-Karten-Deduktion ist der Prozess, jede Kategorie (Verdächtiger, Waffe, Raum) durch systematische Eliminierung auf eine einzige Karte zu reduzieren. Sobald Sie alle Karten in einer Kategorie außer einer identifiziert oder eliminiert haben, wissen Sie, dass diese verbleibende Karte im Lösungsumschlag sein muss. Experten warten nicht, bis alle drei Kategorien gelöst sind; sie machen ihre Anklage, sobald sie die drei Karten in der Lösung durch logische Deduktion definitiv identifiziert haben, selbst wenn andere Karten unsicher bleiben.",
                  nl: "De drie-kaarten deductie is het proces van elke categorie (verdachte, wapen, kamer) tot één enkele kaart beperken door systematische eliminatie. Zodra je alle kaarten in een categorie hebt geïdentificeerd of geëlimineerd behalve één, weet je dat die overgebleven kaart in de oplossingsmap moet zitten. Expert spelers wachten niet tot alle drie categorieën zijn opgelost; ze doen hun beschuldiging zodra ze de drie kaarten in de oplossing definitief hebben geïdentificeerd door logische deductie, zelfs als andere kaarten onzeker blijven."
            }
      },
      {
            question: {
                  en: "What is 'positional advantage' in Cluedo?",
                  es: "¿Qué es la 'ventaja posicional' en Cluedo?",
                  de: "Was ist 'Positionsvorteil' in Cluedo?",
                  nl: "Wat is 'positioneel voordeel' in Cluedo?"
            },
            options: [
                  {
                        en: "Being in a room that allows efficient suggestions while limiting opponent movement",
                        es: "Estar en una habitación que permite sugerencias eficientes mientras limita el movimiento del oponente",
                        de: "In einem Raum sein, der effiziente Vorschläge ermöglicht und gleichzeitig die Bewegung des Gegners einschränkt",
                        nl: "In een kamer zijn die efficiënte suggesties mogelijk maakt terwijl beweging van tegenstanders beperkt wordt"
                  },
                  {
                        en: "Starting the game first",
                        es: "Comenzar el juego primero",
                        de: "Das Spiel zuerst beginnen",
                        nl: "Het spel als eerste beginnen"
                  },
                  {
                        en: "Having the most cards",
                        es: "Tener la mayoría de las cartas",
                        de: "Die meisten Karten haben",
                        nl: "De meeste kaarten hebben"
                  },
                  {
                        en: "Being closest to the exit",
                        es: "Estar más cerca de la salida",
                        de: "Am nächsten am Ausgang sein",
                        nl: "Het dichtst bij de uitgang zijn"
                  }
            ],
            correct: 0,
            explanation: {
                  en: "Positional advantage refers to occupying board locations that maximize your strategic options. Central rooms like the Billiard Room or Library allow you to reach multiple other rooms quickly, while corner rooms can be harder to escape from. Additionally, being in a room with a secret passage provides flexibility. Expert players consider which rooms to target not just for the suggestion itself, but for the positional advantages that room provides for future turns, including blocking opponents from entering high-value rooms.",
                  es: "La ventaja posicional se refiere a ocupar ubicaciones del tablero que maximizan tus opciones estratégicas. Las habitaciones centrales como la Sala de Billar o la Biblioteca te permiten llegar a múltiples otras habitaciones rápidamente, mientras que las habitaciones de esquina pueden ser más difíciles de escapar. Además, estar en una habitación con un pasaje secreto proporciona flexibilidad. Los jugadores expertos consideran qué habitaciones apuntar no solo por la sugerencia en sí, sino por las ventajas posicionales que esa habitación proporciona para futuros turnos, incluido bloquear a los oponentes de entrar en habitaciones de alto valor.",
                  de: "Positionsvorteil bezieht sich darauf, Positionen auf dem Brett einzunehmen, die Ihre strategischen Optionen maximieren. Zentrale Räume wie das Billardzimmer oder die Bibliothek ermöglichen es Ihnen, schnell mehrere andere Räume zu erreichen, während Eckräume schwerer zu verlassen sein können. Zusätzlich bietet ein Raum mit einem Geheimgang Flexibilität. Experten überlegen, welche Räume sie anvisieren, nicht nur wegen des Vorschlags selbst, sondern wegen der Positionsvorteile, die dieser Raum für zukünftige Züge bietet, einschließlich des Blockierens von Gegnern, hochwertige Räume zu betreten.",
                  nl: "Positioneel voordeel verwijst naar het bezetten van bordposities die je strategische opties maximaliseren. Centrale kamers zoals de Biljartkamer of Bibliotheek stellen je in staat om snel meerdere andere kamers te bereiken, terwijl hoekkamers moeilijker te verlaten kunnen zijn. Bovendien biedt een kamer met een geheime doorgang flexibiliteit. Expert spelers overwegen welke kamers ze moeten targeten niet alleen voor de suggestie zelf, maar voor de positionele voordelen die die kamer biedt voor toekomstige beurten, inclusief het blokkeren van tegenstanders om hoogwaardige kamers te betreden."
            }
      },
      {
            question: {
                  en: "What does 'reading the table' mean in competitive Cluedo?",
                  es: "¿Qué significa 'leer la mesa' en Cluedo competitivo?",
                  de: "Was bedeutet 'den Tisch lesen' im kompetitiven Cluedo?",
                  nl: "Wat betekent 'de tafel lezen' in competitief Cluedo?"
            },
            options: [
                  {
                        en: "Observing opponents' behavior, notes, and reaction patterns for clues",
                        es: "Observar el comportamiento, notas y patrones de reacción de los oponentes en busca de pistas",
                        de: "Beobachten des Verhaltens, der Notizen und der Reaktionsmuster der Gegner nach Hinweisen",
                        nl: "Het gedrag, notities en reactiepatronen van tegenstanders observeren voor aanwijzingen"
                  },
                  {
                        en: "Reading the instruction manual",
                        es: "Leer el manual de instrucciones",
                        de: "Die Bedienungsanleitung lesen",
                        nl: "De instructiehandleiding lezen"
                  },
                  {
                        en: "Looking at the game board",
                        es: "Mirar el tablero del juego",
                        de: "Auf das Spielbrett schauen",
                        nl: "Naar het spelbord kijken"
                  },
                  {
                        en: "Checking card descriptions",
                        es: "Verificar las descripciones de las cartas",
                        de: "Kartenbeschreibungen überprüfen",
                        nl: "Kaartbeschrijvingen controleren"
                  }
            ],
            correct: 0,
            explanation: {
                  en: "Reading the table involves observing non-verbal cues and patterns from opponents to gain additional information beyond the cards shown. This includes noticing when players take longer to respond (suggesting they're choosing between multiple cards), observing which cards they're tracking on their detective sheets, watching for confident versus hesitant accusations, and noting patterns in their suggestion choices. Experienced players can sometimes deduce what opponents know based on their behavior and strategic choices, though this requires strong observational skills and familiarity with opponent play styles.",
                  es: "Leer la mesa implica observar señales no verbales y patrones de los oponentes para obtener información adicional más allá de las cartas mostradas. Esto incluye notar cuando los jugadores tardan más en responder (sugiriendo que están eligiendo entre múltiples cartas), observar qué cartas están rastreando en sus hojas de detective, vigilar acusaciones confiadas versus vacilantes, y notar patrones en sus elecciones de sugerencia. Los jugadores experimentados a veces pueden deducir qué saben los oponentes según su comportamiento y elecciones estratégicas, aunque esto requiere fuertes habilidades de observación y familiaridad con los estilos de juego de los oponentes.",
                  de: "Den Tisch lesen umfasst das Beobachten nonverbaler Hinweise und Muster von Gegnern, um zusätzliche Informationen über die gezeigten Karten hinaus zu erhalten. Dies umfasst das Bemerken, wenn Spieler länger brauchen, um zu antworten (was darauf hindeutet, dass sie zwischen mehreren Karten wählen), das Beobachten, welche Karten sie auf ihren Detektivblättern verfolgen, das Beobachten von selbstbewussten versus zögerlichen Anklagen und das Bemerken von Mustern in ihren Vorschlagswahlen. Erfahrene Spieler können manchmal ableiten, was Gegner wissen, basierend auf ihrem Verhalten und strategischen Entscheidungen, obwohl dies starke Beobachtungsfähigkeiten und Vertrautheit mit den Spielstilen der Gegner erfordert.",
                  nl: "De tafel lezen houdt in dat je non-verbale signalen en patronen van tegenstanders observeert om aanvullende informatie te krijgen naast de getoonde kaarten. Dit omvat opmerken wanneer spelers langer nodig hebben om te reageren (wat suggereert dat ze kiezen tussen meerdere kaarten), observeren welke kaarten ze bijhouden op hun detectivebladen, letten op zelfverzekerde versus aarzelende beschuldigingen, en patronen opmerken in hun suggestiekeuzes. Ervaren spelers kunnen soms afleiden wat tegenstanders weten op basis van hun gedrag en strategische keuzes, hoewel dit sterke observatievaardigheden en bekendheid met speelstijlen van tegenstanders vereist."
            }
      },
      {
            question: {
                  en: "What is the 'process of elimination matrix' method?",
                  es: "¿Qué es el método de 'matriz de proceso de eliminación'?",
                  de: "Was ist die 'Prozess-der-Eliminierung-Matrix'-Methode?",
                  nl: "Wat is de 'eliminatiematrix'-methode?"
            },
            options: [
                  {
                        en: "A systematic grid tracking which players can/cannot have each card",
                        es: "Una cuadrícula sistemática que rastrea qué jugadores pueden/no pueden tener cada carta",
                        de: "Ein systematisches Raster, das verfolgt, welche Spieler jede Karte haben können/nicht können",
                        nl: "Een systematisch raster dat bijhoudt welke spelers elke kaart wel/niet kunnen hebben"
                  },
                  {
                        en: "A way to arrange cards by color",
                        es: "Una forma de ordenar cartas por color",
                        de: "Eine Möglichkeit, Karten nach Farbe zu ordnen",
                        nl: "Een manier om kaarten op kleur te ordenen"
                  },
                  {
                        en: "Removing players from the game",
                        es: "Eliminar jugadores del juego",
                        de: "Spieler aus dem Spiel entfernen",
                        nl: "Spelers uit het spel verwijderen"
                  },
                  {
                        en: "A mathematical formula for dice rolls",
                        es: "Una fórmula matemática para tiradas de dados",
                        de: "Eine mathematische Formel für Würfelwürfe",
                        nl: "Een wiskundige formule voor dobbelworpen"
                  }
            ],
            correct: 0,
            explanation: {
                  en: "The elimination matrix is an advanced note-taking technique where you create a grid with all cards on one axis and all players (including yourself and the envelope) on the other axis. As you gather information, you mark which players definitely have cards (✓), definitely don't have cards (X), or might have cards (?). This systematic approach allows you to use logical deduction: if all players but one are marked with X for a card, that remaining player must have it. This method is more powerful than simple checkmarks because it tracks both positive and negative information comprehensively.",
                  es: "La matriz de eliminación es una técnica avanzada de toma de notas donde creas una cuadrícula con todas las cartas en un eje y todos los jugadores (incluido tú mismo y el sobre) en el otro eje. A medida que recopila información, marcas qué jugadores definitivamente tienen cartas (✓), definitivamente no tienen cartas (X), o podrían tener cartas (?). Este enfoque sistemático te permite usar deducción lógica: si todos los jugadores menos uno están marcados con X para una carta, ese jugador restante debe tenerla. Este método es más poderoso que simples marcas de verificación porque rastrea información positiva y negativa de manera integral.",
                  de: "Die Eliminierungsmatrix ist eine fortgeschrittene Notiztechnik, bei der Sie ein Raster mit allen Karten auf einer Achse und allen Spielern (einschließlich sich selbst und dem Umschlag) auf der anderen Achse erstellen. Während Sie Informationen sammeln, markieren Sie, welche Spieler definitiv Karten haben (✓), definitiv keine Karten haben (X) oder möglicherweise Karten haben (?). Dieser systematische Ansatz ermöglicht es Ihnen, logische Deduktion zu verwenden: Wenn alle Spieler außer einem mit X für eine Karte markiert sind, muss dieser verbleibende Spieler sie haben. Diese Methode ist leistungsfähiger als einfache Häkchen, weil sie sowohl positive als auch negative Informationen umfassend verfolgt.",
                  nl: "De eliminatiematrix is een geavanceerde notitiemethode waarbij je een raster maakt met alle kaarten op één as en alle spelers (inclusief jezelf en de envelop) op de andere as. Terwijl je informatie verzamelt, markeer je welke spelers zeker kaarten hebben (✓), zeker geen kaarten hebben (X), of mogelijk kaarten hebben (?). Deze systematische aanpak stelt je in staat logische deductie te gebruiken: als alle spelers behalve één zijn gemarkeerd met X voor een kaart, moet die overgebleven speler hem hebben. Deze methode is krachtiger dan eenvoudige vinkjes omdat het zowel positieve als negatieve informatie uitgebreid bijhoudt."
            }
      },
      {
            question: {
                  en: "In expert play, what is 'suggestion chaining'?",
                  es: "En juego experto, ¿qué es el 'encadenamiento de sugerencias'?",
                  de: "Was ist 'Vorschlagsverkettung' im Expertenspiels?",
                  nl: "Wat is 'suggestiekoppeling' in expert spel?"
            },
            options: [
                  {
                        en: "Making sequential suggestions that build on previous information to narrow possibilities",
                        es: "Hacer sugerencias secuenciales que se basan en información previa para reducir posibilidades",
                        de: "Sequentielle Vorschläge machen, die auf vorherigen Informationen aufbauen, um Möglichkeiten einzugrenzen",
                        nl: "Opeenvolgende suggesties doen die voortbouwen op eerdere informatie om mogelijkheden te beperken"
                  },
                  {
                        en: "Connecting rooms with chains",
                        es: "Conectar habitaciones con cadenas",
                        de: "Räume mit Ketten verbinden",
                        nl: "Kamers verbinden met kettingen"
                  },
                  {
                        en: "Suggesting the same thing repeatedly",
                        es: "Sugerir lo mismo repetidamente",
                        de: "Dasselbe wiederholt vorschlagen",
                        nl: "Hetzelfde herhaaldelijk voorstellen"
                  },
                  {
                        en: "Making suggestions in alphabetical order",
                        es: "Hacer sugerencias en orden alfabético",
                        de: "Vorschläge in alphabetischer Reihenfolge machen",
                        nl: "Suggesties in alfabetische volgorde doen"
                  }
            ],
            correct: 0,
            explanation: {
                  en: "Suggestion chaining is a sophisticated technique where each suggestion is carefully designed based on what you learned from previous suggestions. For example, if you learn someone has either the Knife or the Rope (but not which one), your next suggestion might include the Knife but exclude the Rope, allowing you to determine which they have. Expert players chain multiple suggestions together, with each one narrowing down specific uncertainties until they can definitively identify the solution through pure deduction rather than guessing.",
                  es: "El encadenamiento de sugerencias es una técnica sofisticada donde cada sugerencia está cuidadosamente diseñada basándose en lo que aprendiste de sugerencias anteriores. Por ejemplo, si aprendes que alguien tiene el Cuchillo o la Cuerda (pero no cuál), tu próxima sugerencia podría incluir el Cuchillo pero excluir la Cuerda, permitiéndote determinar cuál tienen. Los jugadores expertos encadenan múltiples sugerencias juntas, con cada una reduciendo incertidumbres específicas hasta que puedan identificar definitivamente la solución mediante deducción pura en lugar de adivinar.",
                  de: "Vorschlagsverkettung ist eine ausgeklügelte Technik, bei der jeder Vorschlag sorgfältig auf der Grundlage dessen entworfen wird, was Sie aus früheren Vorschlägen gelernt haben. Wenn Sie zum Beispiel erfahren, dass jemand entweder das Messer oder das Seil hat (aber nicht welches), könnte Ihr nächster Vorschlag das Messer enthalten, aber das Seil ausschließen, sodass Sie bestimmen können, welches sie haben. Experten verketten mehrere Vorschläge zusammen, wobei jeder spezifische Unsicherheiten eingrenzt, bis sie die Lösung durch reine Deduktion statt durch Raten definitiv identifizieren können.",
                  nl: "Suggestiekoppeling is een geavanceerde techniek waarbij elke suggestie zorgvuldig is ontworpen op basis van wat je hebt geleerd van eerdere suggesties. Als je bijvoorbeeld leert dat iemand het Mes of het Touw heeft (maar niet welke), zou je volgende suggestie het Mes kunnen bevatten maar het Touw uitsluiten, waardoor je kunt bepalen welke ze hebben. Expert spelers koppelen meerdere suggesties aan elkaar, waarbij elk specifieke onzekerheden beperkt totdat ze de oplossing definitief kunnen identificeren door pure deductie in plaats van gokken."
            }
      },
      {
            question: {
                  en: "What is the 'last player advantage' in Cluedo?",
                  es: "¿Qué es la 'ventaja del último jugador' en Cluedo?",
                  de: "Was ist der 'Letzter-Spieler-Vorteil' in Cluedo?",
                  nl: "Wat is het 'laatste speler voordeel' in Cluedo?"
            },
            options: [
                  {
                        en: "Seeing more information before your turn, but risking others solving first",
                        es: "Ver más información antes de tu turno, pero arriesgándote a que otros resuelvan primero",
                        de: "Mehr Informationen vor Ihrem Zug sehen, aber riskieren, dass andere zuerst lösen",
                        nl: "Meer informatie zien voor je beurt, maar risico dat anderen eerst oplossen"
                  },
                  {
                        en: "Always winning the game",
                        es: "Siempre ganar el juego",
                        de: "Immer das Spiel gewinnen",
                        nl: "Altijd het spel winnen"
                  },
                  {
                        en: "Getting extra dice rolls",
                        es: "Obtener tiradas de dados extra",
                        de: "Zusätzliche Würfelwürfe erhalten",
                        nl: "Extra dobbelworpen krijgen"
                  },
                  {
                        en: "Having more cards than others",
                        es: "Tener más cartas que otros",
                        de: "Mehr Karten als andere haben",
                        nl: "Meer kaarten hebben dan anderen"
                  }
            ],
            correct: 0,
            explanation: {
                  en: "The last player advantage refers to the informational benefit of acting last in turn order. Players who go later in each round see more suggestions and card reveals before making their own decisions, giving them more information to work with. However, this advantage is balanced by the risk that an earlier player might solve the mystery before you get another turn. Expert players in earlier positions try to offset this by making efficient suggestions and tracking information carefully, while later-position players must balance gathering information with the urgency of making an accusation before someone else wins.",
                  es: "La ventaja del último jugador se refiere al beneficio informativo de actuar último en el orden de turno. Los jugadores que van más tarde en cada ronda ven más sugerencias y revelaciones de cartas antes de tomar sus propias decisiones, dándoles más información con la que trabajar. Sin embargo, esta ventaja se equilibra con el riesgo de que un jugador anterior pueda resolver el misterio antes de que obtengas otro turno. Los jugadores expertos en posiciones anteriores intentan compensar esto haciendo sugerencias eficientes y rastreando información cuidadosamente, mientras que los jugadores en posiciones posteriores deben equilibrar la recopilación de información con la urgencia de hacer una acusación antes de que alguien más gane.",
                  de: "Der Letzter-Spieler-Vorteil bezieht sich auf den Informationsvorteil, als Letzter in der Zugreihenfolge zu handeln. Spieler, die später in jeder Runde an der Reihe sind, sehen mehr Vorschläge und Kartenaufdeckungen, bevor sie ihre eigenen Entscheidungen treffen, was ihnen mehr Informationen zum Arbeiten gibt. Dieser Vorteil wird jedoch durch das Risiko ausgeglichen, dass ein früherer Spieler das Rätsel lösen könnte, bevor Sie einen weiteren Zug erhalten. Experten in früheren Positionen versuchen, dies auszugleichen, indem sie effiziente Vorschläge machen und Informationen sorgfältig verfolgen, während Spieler in späteren Positionen das Sammeln von Informationen mit der Dringlichkeit einer Anklage ausgleichen müssen, bevor jemand anderes gewinnt.",
                  nl: "Het laatste speler voordeel verwijst naar het informatieve voordeel van als laatste handelen in de beurtvolgorde. Spelers die later in elke ronde aan de beurt zijn, zien meer suggesties en kaartonthullingen voordat ze hun eigen beslissingen nemen, waardoor ze meer informatie hebben om mee te werken. Dit voordeel wordt echter gebalanceerd door het risico dat een eerdere speler het mysterie oplost voordat je weer aan de beurt bent. Expert spelers in eerdere posities proberen dit te compenseren door efficiënte suggesties te doen en informatie zorgvuldig bij te houden, terwijl spelers in latere posities informatie verzamelen moeten balanceren met de urgentie van een beschuldiging doen voordat iemand anders wint."
            }
      },
      {
            question: {
                  en: "What is 'probabilistic narrowing' in Cluedo strategy?",
                  es: "¿Qué es la 'reducción probabilística' en la estrategia de Cluedo?",
                  de: "Was ist 'probabilistische Eingrenzung' in der Cluedo-Strategie?",
                  nl: "Wat is 'probabilistische verfijning' in Cluedo-strategie?"
            },
            options: [
                  {
                        en: "Using probability to focus on most likely solution combinations",
                        es: "Usar probabilidad para enfocarse en las combinaciones de solución más probables",
                        de: "Wahrscheinlichkeit verwenden, um sich auf wahrscheinlichste Lösungskombinationen zu konzentrieren",
                        nl: "Waarschijnlijkheid gebruiken om te focussen op meest waarschijnlijke oplossingscombinaties"
                  },
                  {
                        en: "Making random guesses",
                        es: "Hacer conjeturas aleatorias",
                        de: "Zufällige Vermutungen machen",
                        nl: "Willekeurige gissingen doen"
                  },
                  {
                        en: "Only testing one possibility",
                        es: "Solo probar una posibilidad",
                        de: "Nur eine Möglichkeit testen",
                        nl: "Slechts één mogelijkheid testen"
                  },
                  {
                        en: "Ignoring mathematical odds",
                        es: "Ignorar las probabilidades matemáticas",
                        de: "Mathematische Chancen ignorieren",
                        nl: "Wiskundige kansen negeren"
                  }
            ],
            correct: 0,
            explanation: {
                  en: "Probabilistic narrowing involves using probability calculations to guide your suggestion strategy. For example, if you've eliminated 4 out of 6 suspects but only 1 out of 9 rooms, you should focus more suggestions on testing rooms since that's where more uncertainty remains. Similarly, if multiple players have shown the Knife but no one has confirmed having the Candlestick, the Candlestick is more likely to be in the solution. Advanced players mentally calculate which categories and specific cards have the highest probability of being in the envelope, allowing them to prioritize their investigation efficiently and make informed accusations earlier than players who treat all unknowns equally.",
                  es: "La reducción probabilística implica usar cálculos de probabilidad para guiar tu estrategia de sugerencias. Por ejemplo, si has eliminado 4 de 6 sospechosos pero solo 1 de 9 habitaciones, debes enfocar más sugerencias en probar habitaciones ya que ahí es donde queda más incertidumbre. Similarmente, si múltiples jugadores han mostrado el Cuchillo pero nadie ha confirmado tener el Candelabro, el Candelabro es más probable que esté en la solución. Los jugadores avanzados calculan mentalmente qué categorías y cartas específicas tienen la mayor probabilidad de estar en el sobre, permitiéndoles priorizar su investigación eficientemente y hacer acusaciones informadas antes que jugadores que tratan todas las incógnitas por igual.",
                  de: "Probabilistische Eingrenzung beinhaltet die Verwendung von Wahrscheinlichkeitsberechnungen zur Steuerung Ihrer Vorschlagsstrategie. Wenn Sie beispielsweise 4 von 6 Verdächtigen eliminiert haben, aber nur 1 von 9 Räumen, sollten Sie mehr Vorschläge auf das Testen von Räumen konzentrieren, da dort mehr Unsicherheit verbleibt. Ähnlich, wenn mehrere Spieler das Messer gezeigt haben, aber niemand bestätigt hat, den Leuchter zu haben, ist der Leuchter wahrscheinlicher in der Lösung. Fortgeschrittene Spieler berechnen mental, welche Kategorien und spezifischen Karten die höchste Wahrscheinlichkeit haben, im Umschlag zu sein, was es ihnen ermöglicht, ihre Untersuchung effizient zu priorisieren und informierte Anklagen früher zu machen als Spieler, die alle Unbekannten gleich behandeln.",
                  nl: "Probabilistische verfijning houdt in dat je waarschijnlijkheidsberekeningen gebruikt om je suggestiestrategie te sturen. Als je bijvoorbeeld 4 van de 6 verdachten hebt geëlimineerd maar slechts 1 van de 9 kamers, moet je meer suggesties richten op het testen van kamers omdat daar meer onzekerheid blijft. Evenzo, als meerdere spelers het Mes hebben laten zien maar niemand heeft bevestigd de Kandelaar te hebben, is de Kandelaar waarschijnlijker in de oplossing. Geavanceerde spelers berekenen mentaal welke categorieën en specifieke kaarten de hoogste waarschijnlijkheid hebben in de envelop te zitten, waardoor ze hun onderzoek efficiënt kunnen prioriteren en eerder geïnformeerde beschuldigingen kunnen doen dan spelers die alle onbekenden gelijk behandelen."
            }
      },
      {
            question: {
                  en: "What is a 'forced disproof' tactic?",
                  es: "¿Qué es una táctica de 'refutación forzada'?",
                  de: "Was ist eine 'erzwungene Widerlegung'-Taktik?",
                  nl: "Wat is een 'gedwongen weerlegging'-tactiek?"
            },
            options: [
                  {
                        en: "Making suggestions that force specific players to reveal cards",
                        es: "Hacer sugerencias que obligan a jugadores específicos a revelar cartas",
                        de: "Vorschläge machen, die bestimmte Spieler zwingen, Karten zu offenbaren",
                        nl: "Suggesties doen die specifieke spelers dwingen kaarten te onthullen"
                  },
                  {
                        en: "Forcing players to leave the game",
                        es: "Forzar a los jugadores a abandonar el juego",
                        de: "Spieler zwingen, das Spiel zu verlassen",
                        nl: "Spelers dwingen het spel te verlaten"
                  },
                  {
                        en: "Making everyone show their hands",
                        es: "Hacer que todos muestren sus manos",
                        de: "Alle ihre Hände zeigen lassen",
                        nl: "Iedereen hun handen laten zien"
                  },
                  {
                        en: "Proving the rules wrong",
                        es: "Probar que las reglas están mal",
                        de: "Beweisen, dass die Regeln falsch sind",
                        nl: "Bewijzen dat de regels verkeerd zijn"
                  }
            ],
            correct: 0,
            explanation: {
                  en: "A forced disproof occurs when you craft a suggestion specifically targeting a player you suspect holds certain cards. For example, if you believe Player B has the Revolver based on previous patterns, you make a suggestion including the Revolver when you're positioned so Player B would be the first to respond if they have any cards in your suggestion. If they show you the Revolver, you've confirmed your suspicion. If they can't disprove your suggestion at all, you've learned they don't have the Revolver (contrary to your theory) and can eliminate it from their possible cards. This technique allows you to test specific hypotheses about card distribution.",
                  es: "Una refutación forzada ocurre cuando elaboras una sugerencia dirigida específicamente a un jugador que sospechas que tiene ciertas cartas. Por ejemplo, si crees que el Jugador B tiene el Revólver basándose en patrones anteriores, haces una sugerencia que incluye el Revólver cuando estás posicionado para que el Jugador B sea el primero en responder si tiene alguna carta en tu sugerencia. Si te muestra el Revólver, has confirmado tu sospecha. Si no puede refutar tu sugerencia en absoluto, has aprendido que no tiene el Revólver (contrario a tu teoría) y puedes eliminarlo de sus posibles cartas. Esta técnica te permite probar hipótesis específicas sobre distribución de cartas.",
                  de: "Eine erzwungene Widerlegung tritt auf, wenn Sie einen Vorschlag speziell auf einen Spieler ausrichten, von dem Sie vermuten, dass er bestimmte Karten hält. Wenn Sie zum Beispiel glauben, dass Spieler B den Revolver hat, basierend auf früheren Mustern, machen Sie einen Vorschlag, der den Revolver enthält, wenn Sie so positioniert sind, dass Spieler B der Erste wäre, der antworten würde, wenn er Karten in Ihrem Vorschlag hat. Wenn sie Ihnen den Revolver zeigen, haben Sie Ihre Vermutung bestätigt. Wenn sie Ihren Vorschlag überhaupt nicht widerlegen können, haben Sie gelernt, dass sie den Revolver nicht haben (entgegen Ihrer Theorie) und können ihn aus ihren möglichen Karten eliminieren. Diese Technik ermöglicht es Ihnen, spezifische Hypothesen über Kartenverteilung zu testen.",
                  nl: "Een gedwongen weerlegging vindt plaats wanneer je een suggestie maakt die specifiek gericht is op een speler waarvan je vermoedt dat deze bepaalde kaarten heeft. Als je bijvoorbeeld denkt dat Speler B de Revolver heeft op basis van eerdere patronen, doe je een suggestie met de Revolver wanneer je zo gepositioneerd bent dat Speler B de eerste zou zijn om te reageren als ze kaarten in je suggestie hebben. Als ze je de Revolver laten zien, heb je je vermoeden bevestigd. Als ze je suggestie helemaal niet kunnen weerleggen, heb je geleerd dat ze de Revolver niet hebben (in tegenstelling tot je theorie) en kun je het uit hun mogelijke kaarten elimineren. Deze techniek stelt je in staat specifieke hypotheses over kaartverdeling te testen."
            }
      },
      {
            question: {
                  en: "What is 'endgame convergence' in Cluedo?",
                  es: "¿Qué es la 'convergencia de final de juego' en Cluedo?",
                  de: "Was ist 'Endspiel-Konvergenz' in Cluedo?",
                  nl: "Wat is 'eindspel convergentie' in Cluedo?"
            },
            options: [
                  {
                        en: "When multiple players simultaneously narrow down to the same solution",
                        es: "Cuando múltiples jugadores reducen simultáneamente a la misma solución",
                        de: "Wenn mehrere Spieler gleichzeitig auf dieselbe Lösung eingrenzen",
                        nl: "Wanneer meerdere spelers tegelijkertijd naar dezelfde oplossing toegroeien"
                  },
                  {
                        en: "When players meet in the same room",
                        es: "Cuando los jugadores se encuentran en la misma habitación",
                        de: "Wenn Spieler sich im selben Raum treffen",
                        nl: "Wanneer spelers elkaar in dezelfde kamer ontmoeten"
                  },
                  {
                        en: "When the game ends in a tie",
                        es: "Cuando el juego termina en empate",
                        de: "Wenn das Spiel unentschieden endet",
                        nl: "Wanneer het spel eindigt in gelijkspel"
                  },
                  {
                        en: "When all cards are revealed",
                        es: "Cuando todas las cartas se revelan",
                        de: "Wenn alle Karten aufgedeckt werden",
                        nl: "Wanneer alle kaarten onthuld zijn"
                  }
            ],
            correct: 0,
            explanation: {
                  en: "Endgame convergence describes the phenomenon where, late in the game, all players have gathered enough information that they're all close to solving the mystery simultaneously. This creates a high-pressure situation where the winner is often determined by who can make the correct accusation first, which depends on factors like turn order, current position on the board, and whether players need additional movement to reach rooms for final verification suggestions. Expert players recognize when convergence is approaching and may take calculated risks by making an accusation slightly earlier than optimal if they believe opponents are equally close to solving.",
                  es: "La convergencia de final de juego describe el fenómeno donde, tarde en el juego, todos los jugadores han reunido suficiente información que todos están cerca de resolver el misterio simultáneamente. Esto crea una situación de alta presión donde el ganador a menudo se determina por quién puede hacer la acusación correcta primero, lo cual depende de factores como el orden de turno, la posición actual en el tablero, y si los jugadores necesitan movimiento adicional para alcanzar habitaciones para sugerencias de verificación final. Los jugadores expertos reconocen cuándo la convergencia se acerca y pueden tomar riesgos calculados haciendo una acusación ligeramente antes de lo óptimo si creen que los oponentes están igualmente cerca de resolver.",
                  de: "Endspiel-Konvergenz beschreibt das Phänomen, bei dem spät im Spiel alle Spieler genug Informationen gesammelt haben, dass sie alle kurz davor sind, das Rätsel gleichzeitig zu lösen. Dies schafft eine Hochdrucksituation, in der der Gewinner oft davon bestimmt wird, wer zuerst die richtige Anklage erheben kann, was von Faktoren wie Zugreihenfolge, aktueller Position auf dem Brett und ob Spieler zusätzliche Bewegung benötigen, um Räume für abschließende Überprüfungsvorschläge zu erreichen, abhängt. Experten erkennen, wann Konvergenz sich nähert, und können kalkulierte Risiken eingehen, indem sie eine Anklage etwas früher als optimal erheben, wenn sie glauben, dass Gegner gleich nahe am Lösen sind.",
                  nl: "Eindspel convergentie beschrijft het fenomeen waarbij, laat in het spel, alle spelers genoeg informatie hebben verzameld dat ze allemaal dicht bij het oplossen van het mysterie zijn tegelijkertijd. Dit creëert een hoge-druk situatie waar de winnaar vaak wordt bepaald door wie als eerste de juiste beschuldiging kan doen, wat afhangt van factoren zoals beurtvolgorde, huidige positie op het bord, en of spelers extra beweging nodig hebben om kamers te bereiken voor laatste verificatiesuggesties. Expert spelers herkennen wanneer convergentie nadert en kunnen berekende risico's nemen door een beschuldiging iets eerder dan optimaal te doen als ze denken dat tegenstanders even dicht bij het oplossen zijn."
            }
      },
      {
            question: {
                  en: "What is the 'information trading paradox' in multiplayer Cluedo?",
                  es: "¿Qué es la 'paradoja del intercambio de información' en Cluedo multijugador?",
                  de: "Was ist das 'Informationshandel-Paradoxon' im Mehrspieler-Cluedo?",
                  nl: "Wat is de 'informatie uitwisselingsparadox' in multiplayer Cluedo?"
            },
            options: [
                  {
                        en: "Every suggestion gives you information but also helps your opponents",
                        es: "Cada sugerencia te da información pero también ayuda a tus oponentes",
                        de: "Jeder Vorschlag gibt Ihnen Informationen, hilft aber auch Ihren Gegnern",
                        nl: "Elke suggestie geeft je informatie maar helpt ook je tegenstanders"
                  },
                  {
                        en: "Information cannot be traded",
                        es: "La información no se puede intercambiar",
                        de: "Informationen können nicht gehandelt werden",
                        nl: "Informatie kan niet uitgewisseld worden"
                  },
                  {
                        en: "All information is secret",
                        es: "Toda la información es secreta",
                        de: "Alle Informationen sind geheim",
                        nl: "Alle informatie is geheim"
                  },
                  {
                        en: "Players exchange cards directly",
                        es: "Los jugadores intercambian cartas directamente",
                        de: "Spieler tauschen Karten direkt aus",
                        nl: "Spelers wisselen direct kaarten uit"
                  }
            ],
            correct: 0,
            explanation: {
                  en: "The information trading paradox captures the fundamental tension in Cluedo: you must make suggestions to gather information for yourself, but every suggestion you make is public and gives information to all other players as well. When you suggest 'Professor Plum, Candlestick, Library' and someone shows you the Candlestick, everyone learns that person has at least one of those cards. The paradox is that aggressive information-gathering (making many suggestions) helps you but also accelerates your opponents' deductions. Master players navigate this paradox by making suggestions that maximize their own information gain while minimizing what opponents can deduce, often through defensive suggestions and strategic card selection.",
                  es: "La paradoja del intercambio de información captura la tensión fundamental en Cluedo: debes hacer sugerencias para recopilar información para ti mismo, pero cada sugerencia que haces es pública y da información a todos los demás jugadores también. Cuando sugieres 'Profesor Plum, Candelabro, Biblioteca' y alguien te muestra el Candelabro, todos aprenden que esa persona tiene al menos una de esas cartas. La paradoja es que la recopilación agresiva de información (hacer muchas sugerencias) te ayuda pero también acelera las deducciones de tus oponentes. Los jugadores maestros navegan esta paradoja haciendo sugerencias que maximizan su propia ganancia de información mientras minimizan lo que los oponentes pueden deducir, a menudo a través de sugerencias defensivas y selección estratégica de cartas.",
                  de: "Das Informationshandel-Paradoxon erfasst die grundlegende Spannung in Cluedo: Sie müssen Vorschläge machen, um Informationen für sich selbst zu sammeln, aber jeder Vorschlag, den Sie machen, ist öffentlich und gibt auch allen anderen Spielern Informationen. Wenn Sie 'Professor Plum, Leuchter, Bibliothek' vorschlagen und jemand Ihnen den Leuchter zeigt, lernen alle, dass diese Person mindestens eine dieser Karten hat. Das Paradoxon ist, dass aggressive Informationsbeschaffung (viele Vorschläge machen) Ihnen hilft, aber auch die Ableitungen Ihrer Gegner beschleunigt. Meisterspieler navigieren dieses Paradoxon, indem sie Vorschläge machen, die ihren eigenen Informationsgewinn maximieren und gleichzeitig minimieren, was Gegner ableiten können, oft durch defensive Vorschläge und strategische Kartenauswahl.",
                  nl: "De informatie uitwisselingsparadox vangt de fundamentele spanning in Cluedo: je moet suggesties doen om informatie voor jezelf te verzamelen, maar elke suggestie die je doet is openbaar en geeft ook informatie aan alle andere spelers. Wanneer je 'Professor Plum, Kandelaar, Bibliotheek' voorstelt en iemand laat je de Kandelaar zien, leert iedereen dat die persoon ten minste één van die kaarten heeft. De paradox is dat agressief informatie verzamelen (veel suggesties doen) je helpt maar ook de deducties van je tegenstanders versnelt. Meesterspelers navigeren deze paradox door suggesties te doen die hun eigen informatie winst maximaliseren terwijl ze minimaliseren wat tegenstanders kunnen afleiden, vaak door defensieve suggesties en strategische kaartselectie."
            }
      },
      {
            question: {
                  en: "What is 'accusation timing theory' in competitive Cluedo?",
                  es: "¿Qué es la 'teoría del momento de la acusación' en Cluedo competitivo?",
                  de: "Was ist die 'Anklagezeitpunkt-Theorie' im kompetitiven Cluedo?",
                  nl: "Wat is de 'beschuldigingstiming theorie' in competitief Cluedo?"
            },
            options: [
                  {
                        en: "The strategic calculation of when to accuse based on confidence level vs. opponent progress",
                        es: "El cálculo estratégico de cuándo acusar según el nivel de confianza vs. el progreso del oponente",
                        de: "Die strategische Berechnung, wann man anklagt, basierend auf Vertrauensniveau vs. Fortschritt des Gegners",
                        nl: "De strategische berekening van wanneer beschuldigen op basis van vertrouwensniveau vs. voortgang tegenstander"
                  },
                  {
                        en: "Always accusing on your first turn",
                        es: "Siempre acusar en tu primer turno",
                        de: "Immer in Ihrem ersten Zug anklagen",
                        nl: "Altijd beschuldigen in je eerste beurt"
                  },
                  {
                        en: "Waiting until absolute certainty",
                        es: "Esperar hasta la certeza absoluta",
                        de: "Warten bis zur absoluten Gewissheit",
                        nl: "Wachten tot absolute zekerheid"
                  },
                  {
                        en: "Making random timed accusations",
                        es: "Hacer acusaciones cronometradas aleatorias",
                        de: "Zufällige zeitgesteuerte Anklagen machen",
                        nl: "Willekeurige getimede beschuldigingen doen"
                  }
            ],
            correct: 0,
            explanation: {
                  en: "Accusation timing theory involves weighing your confidence in the solution against the risk that opponents might solve it first. If you're 90% certain of the solution but believe opponents are 2-3 turns away from solving, you might wait for one more confirmation. However, if you're 85% certain but sense opponents are also close (perhaps from their positioning and recent suggestions), making an immediate accusation might be optimal despite slightly higher risk. The theory considers factors like: how many opponents are close to solving, your position in turn order, whether opponents seem to be making final verification suggestions, and the cost-benefit of one more information-gathering turn versus the risk of losing by waiting.",
                  es: "La teoría del momento de la acusación implica sopesar tu confianza en la solución contra el riesgo de que los oponentes puedan resolverlo primero. Si estás 90% seguro de la solución pero crees que los oponentes están a 2-3 turnos de resolver, podrías esperar una confirmación más. Sin embargo, si estás 85% seguro pero sientes que los oponentes también están cerca (quizás por su posicionamiento y sugerencias recientes), hacer una acusación inmediata podría ser óptimo a pesar del riesgo ligeramente mayor. La teoría considera factores como: cuántos oponentes están cerca de resolver, tu posición en el orden de turno, si los oponentes parecen estar haciendo sugerencias de verificación final, y el costo-beneficio de un turno más de recopilación de información versus el riesgo de perder esperando.",
                  de: "Die Anklagezeitpunkt-Theorie beinhaltet das Abwägen Ihres Vertrauens in die Lösung gegen das Risiko, dass Gegner sie zuerst lösen könnten. Wenn Sie zu 90% sicher sind von der Lösung, aber glauben, dass Gegner 2-3 Züge entfernt sind vom Lösen, könnten Sie auf eine weitere Bestätigung warten. Wenn Sie jedoch zu 85% sicher sind, aber spüren, dass Gegner auch nahe sind (vielleicht aus ihrer Positionierung und jüngsten Vorschlägen), könnte eine sofortige Anklage optimal sein trotz etwas höherem Risiko. Die Theorie berücksichtigt Faktoren wie: wie viele Gegner nahe am Lösen sind, Ihre Position in der Zugreihenfolge, ob Gegner finale Überprüfungsvorschläge zu machen scheinen, und Kosten-Nutzen eines weiteren Informationssammel-Zugs versus Risiko des Verlierens durch Warten.",
                  nl: "Beschuldigingstiming theorie houdt in dat je je vertrouwen in de oplossing afweegt tegen het risico dat tegenstanders het eerst oplossen. Als je 90% zeker bent van de oplossing maar denkt dat tegenstanders 2-3 beurten verwijderd zijn van oplossen, zou je kunnen wachten op nog één bevestiging. Als je echter 85% zeker bent maar voelt dat tegenstanders ook dichtbij zijn (misschien uit hun positionering en recente suggesties), zou een onmiddellijke beschuldiging optimaal kunnen zijn ondanks iets hoger risico. De theorie overweegt factoren zoals: hoeveel tegenstanders dicht bij oplossen zijn, je positie in beurtvolgorde, of tegenstanders finale verificatiesuggesties lijken te doen, en kosten-baten van nog één informatie verzamelende beurt versus het risico van verliezen door te wachten."
            }
      },
      {
            question: {
                  en: "What is a 'null response pattern' and why is it valuable information?",
                  es: "¿Qué es un 'patrón de respuesta nula' y por qué es información valiosa?",
                  de: "Was ist ein 'Nullreaktionsmuster' und warum ist es wertvolle Information?",
                  nl: "Wat is een 'nulresponspatroon' en waarom is het waardevolle informatie?"
            },
            options: [
                  {
                        en: "When a player cannot disprove multiple suggestions, revealing cards they don't have",
                        es: "Cuando un jugador no puede refutar múltiples sugerencias, revelando cartas que no tiene",
                        de: "Wenn ein Spieler mehrere Vorschläge nicht widerlegen kann, wodurch Karten offenbart werden, die er nicht hat",
                        nl: "Wanneer een speler meerdere suggesties niet kan weerleggen, waardoor kaarten onthuld worden die ze niet hebben"
                  },
                  {
                        en: "When no one makes suggestions",
                        es: "Cuando nadie hace sugerencias",
                        de: "Wenn niemand Vorschläge macht",
                        nl: "Wanneer niemand suggesties doet"
                  },
                  {
                        en: "When players refuse to respond",
                        es: "Cuando los jugadores se niegan a responder",
                        de: "Wenn Spieler sich weigern zu antworten",
                        nl: "Wanneer spelers weigeren te reageren"
                  },
                  {
                        en: "When the game ends without a winner",
                        es: "Cuando el juego termina sin ganador",
                        de: "Wenn das Spiel ohne Gewinner endet",
                        nl: "Wanneer het spel eindigt zonder winnaar"
                  }
            ],
            correct: 0,
            explanation: {
                  en: "A null response pattern occurs when the same player is unable to disprove multiple suggestions. While each individual null response only tells you that player doesn't have ANY of the three cards you suggested, tracking null response patterns across multiple suggestions lets you determine which cards that player definitely doesn't have. For example, if Player C cannot disprove 'Plum/Knife/Hall' or 'Plum/Rope/Study', you can deduce Player C has neither Plum nor Knife nor Rope (since they appear across both suggestions). This negative information is as valuable as positive information because it helps narrow down which cards must be in the solution envelope or held by other players.",
                  es: "Un patrón de respuesta nula ocurre cuando el mismo jugador no puede refutar múltiples sugerencias. Mientras cada respuesta nula individual solo te dice que ese jugador no tiene NINGUNA de las tres cartas que sugeriste, rastrear patrones de respuesta nula en múltiples sugerencias te permite determinar qué cartas ese jugador definitivamente no tiene. Por ejemplo, si el Jugador C no puede refutar 'Plum/Cuchillo/Vestíbulo' o 'Plum/Cuerda/Estudio', puedes deducir que el Jugador C no tiene ni Plum ni Cuchillo ni Cuerda (ya que aparecen en ambas sugerencias). Esta información negativa es tan valiosa como la información positiva porque ayuda a reducir qué cartas deben estar en el sobre de la solución o en poder de otros jugadores.",
                  de: "Ein Nullreaktionsmuster tritt auf, wenn derselbe Spieler mehrere Vorschläge nicht widerlegen kann. Während jede einzelne Nullreaktion Ihnen nur sagt, dass dieser Spieler KEINE der drei von Ihnen vorgeschlagenen Karten hat, ermöglicht es Ihnen, Nullreaktionsmuster über mehrere Vorschläge hinweg zu verfolgen, zu bestimmen, welche Karten dieser Spieler definitiv nicht hat. Wenn beispielsweise Spieler C weder 'Plum/Messer/Halle' noch 'Plum/Seil/Arbeitszimmer' widerlegen kann, können Sie ableiten, dass Spieler C weder Plum noch Messer noch Seil hat (da sie in beiden Vorschlägen vorkommen). Diese negative Information ist genauso wertvoll wie positive Information, weil sie hilft einzugrenzen, welche Karten im Lösungsumschlag sein müssen oder von anderen Spielern gehalten werden.",
                  nl: "Een nulresponspatroon vindt plaats wanneer dezelfde speler meerdere suggesties niet kan weerleggen. Terwijl elke individuele nulrespons je alleen vertelt dat die speler GEEN van de drie kaarten heeft die je voorstelde, stelt het volgen van nulresponspatronen over meerdere suggesties je in staat te bepalen welke kaarten die speler zeker niet heeft. Als Speler C bijvoorbeeld noch 'Plum/Mes/Hal' noch 'Plum/Touw/Studeerkamer' kan weerleggen, kun je afleiden dat Speler C noch Plum noch Mes noch Touw heeft (omdat ze in beide suggesties voorkomen). Deze negatieve informatie is net zo waardevol als positieve informatie omdat het helpt beperken welke kaarten in de oplossingsmap moeten zitten of door andere spelers worden gehouden."
            }
      },
      {
            question: {
                  en: "What is 'meta-deduction' in expert Cluedo play?",
                  es: "¿Qué es la 'meta-deducción' en el juego experto de Cluedo?",
                  de: "Was ist 'Meta-Deduktion' im Experten-Cluedo-Spiel?",
                  nl: "Wat is 'meta-deductie' in expert Cluedo-spel?"
            },
            options: [
                  {
                        en: "Deducing information from opponents' strategic choices and behavior patterns",
                        es: "Deducir información de las elecciones estratégicas y patrones de comportamiento de los oponentes",
                        de: "Informationen aus den strategischen Entscheidungen und Verhaltensmustern der Gegner ableiten",
                        nl: "Informatie afleiden uit strategische keuzes en gedragspatronen van tegenstanders"
                  },
                  {
                        en: "Using computer algorithms",
                        es: "Usar algoritmos de computadora",
                        de: "Computeralgorithmen verwenden",
                        nl: "Computeralgoritmes gebruiken"
                  },
                  {
                        en: "Making deductions about other board games",
                        es: "Hacer deducciones sobre otros juegos de mesa",
                        de: "Ableitungen über andere Brettspiele machen",
                        nl: "Deducties maken over andere bordspellen"
                  },
                  {
                        en: "Deducing outside the game rules",
                        es: "Deducir fuera de las reglas del juego",
                        de: "Außerhalb der Spielregeln ableiten",
                        nl: "Afleiden buiten de spelregels"
                  }
            ],
            correct: 0,
            explanation: {
                  en: "Meta-deduction involves reasoning about why opponents make certain choices, and using that reasoning to infer what they know. For example, if an opponent suddenly stops suggesting the Conservatory and starts using secret passages to avoid it, you might deduce they've determined the Conservatory is in the solution. If an opponent makes a very specific suggestion with unusual cards, they might be testing a final hypothesis before accusing. If someone consistently avoids suggesting certain suspects, they might hold those suspect cards. Meta-deduction requires understanding strategy at a deep level and recognizing that skilled opponents' actions reveal information about their knowledge state, not just about cards.",
                  es: "La meta-deducción implica razonar sobre por qué los oponentes toman ciertas decisiones y usar ese razonamiento para inferir lo que saben. Por ejemplo, si un oponente de repente deja de sugerir el Conservatorio y comienza a usar pasajes secretos para evitarlo, podrías deducir que han determinado que el Conservatorio está en la solución. Si un oponente hace una sugerencia muy específica con cartas inusuales, podrían estar probando una hipótesis final antes de acusar. Si alguien evita consistentemente sugerir ciertos sospechosos, podría tener esas cartas de sospechosos. La meta-deducción requiere entender la estrategia a un nivel profundo y reconocer que las acciones de oponentes hábiles revelan información sobre su estado de conocimiento, no solo sobre cartas.",
                  de: "Meta-Deduktion beinhaltet das Nachdenken darüber, warum Gegner bestimmte Entscheidungen treffen, und die Verwendung dieses Denkens, um abzuleiten, was sie wissen. Wenn beispielsweise ein Gegner plötzlich aufhört, den Wintergarten vorzuschlagen und beginnt, Geheimgänge zu verwenden, um ihn zu vermeiden, könnten Sie ableiten, dass sie festgestellt haben, dass der Wintergarten in der Lösung ist. Wenn ein Gegner einen sehr spezifischen Vorschlag mit ungewöhnlichen Karten macht, könnte er eine letzte Hypothese testen, bevor er anklagt. Wenn jemand konsequent vermeidet, bestimmte Verdächtige vorzuschlagen, könnte er diese Verdächtigenkarten halten. Meta-Deduktion erfordert das Verstehen von Strategie auf einer tiefen Ebene und das Erkennen, dass die Handlungen erfahrener Gegner Informationen über ihren Wissenszustand offenbaren, nicht nur über Karten.",
                  nl: "Meta-deductie houdt in dat je redeneert over waarom tegenstanders bepaalde keuzes maken, en dat redeneren gebruikt om af te leiden wat ze weten. Als een tegenstander bijvoorbeeld plotseling stopt met het voorstellen van de Serre en begint geheime doorgangen te gebruiken om deze te vermijden, zou je kunnen afleiden dat ze hebben vastgesteld dat de Serre in de oplossing zit. Als een tegenstander een zeer specifieke suggestie doet met ongebruikelijke kaarten, testen ze misschien een laatste hypothese voordat ze beschuldigen. Als iemand consequent vermijdt bepaalde verdachten voor te stellen, hebben ze misschien die verdachtekaarten. Meta-deductie vereist begrip van strategie op een diep niveau en herkenning dat acties van vaardige tegenstanders informatie onthullen over hun kennisstaat, niet alleen over kaarten."
            }
      },
      {
            question: {
                  en: "What helps deduce in Clue?",
                  es: "What helps deduce in Clue?",
                  de: "What helps deduce in Clue?",
                  nl: "What helps deduce in Clue?"
            },
            options: [
                  {
                        en: "Track all suggestions",
                        es: "Track all suggestions",
                        de: "Track all suggestions",
                        nl: "Track all suggestions"
                  },
                  {
                        en: "Random guessing",
                        es: "Random guessing",
                        de: "Random guessing",
                        nl: "Random guessing"
                  },
                  {
                        en: "Ignore cards shown",
                        es: "Ignore cards shown",
                        de: "Ignore cards shown",
                        nl: "Ignore cards shown"
                  },
                  {
                        en: "No notes",
                        es: "No notes",
                        de: "No notes",
                        nl: "No notes"
                  }
            ],
            correct: 0,
            explanation: {
                  en: "This is an important concept for this difficulty level.",
                  es: "Este es un concepto importante para este nivel de dificultad.",
                  de: "Dies ist ein wichtiges Konzept für diese Schwierigkeitsstufe.",
                  nl: "Dit is een belangrijk concept voor dit moeilijkheidsniveau."
            }
      },
      {
            question: {
                  en: "What helps deduce in Clue?",
                  es: "What helps deduce in Clue?",
                  de: "What helps deduce in Clue?",
                  nl: "What helps deduce in Clue?"
            },
            options: [
                  {
                        en: "Track all suggestions",
                        es: "Track all suggestions",
                        de: "Track all suggestions",
                        nl: "Track all suggestions"
                  },
                  {
                        en: "Random guessing",
                        es: "Random guessing",
                        de: "Random guessing",
                        nl: "Random guessing"
                  },
                  {
                        en: "Ignore cards shown",
                        es: "Ignore cards shown",
                        de: "Ignore cards shown",
                        nl: "Ignore cards shown"
                  },
                  {
                        en: "No notes",
                        es: "No notes",
                        de: "No notes",
                        nl: "No notes"
                  }
            ],
            correct: 0,
            explanation: {
                  en: "This is an important concept for this difficulty level.",
                  es: "Este es un concepto importante para este nivel de dificultad.",
                  de: "Dies ist ein wichtiges Konzept für diese Schwierigkeitsstufe.",
                  nl: "Dit is een belangrijk concept voor dit moeilijkheidsniveau."
            }
      },
      {
            question: {
                  en: "What helps deduce in Clue?",
                  es: "What helps deduce in Clue?",
                  de: "What helps deduce in Clue?",
                  nl: "What helps deduce in Clue?"
            },
            options: [
                  {
                        en: "Track all suggestions",
                        es: "Track all suggestions",
                        de: "Track all suggestions",
                        nl: "Track all suggestions"
                  },
                  {
                        en: "Random guessing",
                        es: "Random guessing",
                        de: "Random guessing",
                        nl: "Random guessing"
                  },
                  {
                        en: "Ignore cards shown",
                        es: "Ignore cards shown",
                        de: "Ignore cards shown",
                        nl: "Ignore cards shown"
                  },
                  {
                        en: "No notes",
                        es: "No notes",
                        de: "No notes",
                        nl: "No notes"
                  }
            ],
            correct: 0,
            explanation: {
                  en: "This is an important concept for this difficulty level.",
                  es: "Este es un concepto importante para este nivel de dificultad.",
                  de: "Dies ist ein wichtiges Konzept für diese Schwierigkeitsstufe.",
                  nl: "Dit is een belangrijk concept voor dit moeilijkheidsniveau."
            }
      },
      {
            question: {
                  en: "What helps deduce in Clue?",
                  es: "What helps deduce in Clue?",
                  de: "What helps deduce in Clue?",
                  nl: "What helps deduce in Clue?"
            },
            options: [
                  {
                        en: "Track all suggestions",
                        es: "Track all suggestions",
                        de: "Track all suggestions",
                        nl: "Track all suggestions"
                  },
                  {
                        en: "Random guessing",
                        es: "Random guessing",
                        de: "Random guessing",
                        nl: "Random guessing"
                  },
                  {
                        en: "Ignore cards shown",
                        es: "Ignore cards shown",
                        de: "Ignore cards shown",
                        nl: "Ignore cards shown"
                  },
                  {
                        en: "No notes",
                        es: "No notes",
                        de: "No notes",
                        nl: "No notes"
                  }
            ],
            correct: 0,
            explanation: {
                  en: "This is an important concept for this difficulty level.",
                  es: "Este es un concepto importante para este nivel de dificultad.",
                  de: "Dies ist ein wichtiges Konzept für diese Schwierigkeitsstufe.",
                  nl: "Dit is een belangrijk concept voor dit moeilijkheidsniveau."
            }
      },
      {
            question: {
                  en: "What helps deduce in Clue?",
                  es: "What helps deduce in Clue?",
                  de: "What helps deduce in Clue?",
                  nl: "What helps deduce in Clue?"
            },
            options: [
                  {
                        en: "Track all suggestions",
                        es: "Track all suggestions",
                        de: "Track all suggestions",
                        nl: "Track all suggestions"
                  },
                  {
                        en: "Random guessing",
                        es: "Random guessing",
                        de: "Random guessing",
                        nl: "Random guessing"
                  },
                  {
                        en: "Ignore cards shown",
                        es: "Ignore cards shown",
                        de: "Ignore cards shown",
                        nl: "Ignore cards shown"
                  },
                  {
                        en: "No notes",
                        es: "No notes",
                        de: "No notes",
                        nl: "No notes"
                  }
            ],
            correct: 0,
            explanation: {
                  en: "This is an important concept for this difficulty level.",
                  es: "Este es un concepto importante para este nivel de dificultad.",
                  de: "Dies ist ein wichtiges Konzept für diese Schwierigkeitsstufe.",
                  nl: "Dit is een belangrijk concept voor dit moeilijkheidsniveau."
            }
      },
      {
            question: {
                  en: "What helps deduce in Clue?",
                  es: "What helps deduce in Clue?",
                  de: "What helps deduce in Clue?",
                  nl: "What helps deduce in Clue?"
            },
            options: [
                  {
                        en: "Track all suggestions",
                        es: "Track all suggestions",
                        de: "Track all suggestions",
                        nl: "Track all suggestions"
                  },
                  {
                        en: "Random guessing",
                        es: "Random guessing",
                        de: "Random guessing",
                        nl: "Random guessing"
                  },
                  {
                        en: "Ignore cards shown",
                        es: "Ignore cards shown",
                        de: "Ignore cards shown",
                        nl: "Ignore cards shown"
                  },
                  {
                        en: "No notes",
                        es: "No notes",
                        de: "No notes",
                        nl: "No notes"
                  }
            ],
            correct: 0,
            explanation: {
                  en: "This is an important concept for this difficulty level.",
                  es: "Este es un concepto importante para este nivel de dificultad.",
                  de: "Dies ist ein wichtiges Konzept für diese Schwierigkeitsstufe.",
                  nl: "Dit is een belangrijk concept voor dit moeilijkheidsniveau."
            }
      },
      {
            question: {
                  en: "What helps deduce in Clue?",
                  es: "What helps deduce in Clue?",
                  de: "What helps deduce in Clue?",
                  nl: "What helps deduce in Clue?"
            },
            options: [
                  {
                        en: "Track all suggestions",
                        es: "Track all suggestions",
                        de: "Track all suggestions",
                        nl: "Track all suggestions"
                  },
                  {
                        en: "Random guessing",
                        es: "Random guessing",
                        de: "Random guessing",
                        nl: "Random guessing"
                  },
                  {
                        en: "Ignore cards shown",
                        es: "Ignore cards shown",
                        de: "Ignore cards shown",
                        nl: "Ignore cards shown"
                  },
                  {
                        en: "No notes",
                        es: "No notes",
                        de: "No notes",
                        nl: "No notes"
                  }
            ],
            correct: 0,
            explanation: {
                  en: "This is an important concept for this difficulty level.",
                  es: "Este es un concepto importante para este nivel de dificultad.",
                  de: "Dies ist ein wichtiges Konzept für diese Schwierigkeitsstufe.",
                  nl: "Dit is een belangrijk concept voor dit moeilijkheidsniveau."
            }
      },
      {
            question: {
                  en: "What helps deduce in Clue?",
                  es: "What helps deduce in Clue?",
                  de: "What helps deduce in Clue?",
                  nl: "What helps deduce in Clue?"
            },
            options: [
                  {
                        en: "Track all suggestions",
                        es: "Track all suggestions",
                        de: "Track all suggestions",
                        nl: "Track all suggestions"
                  },
                  {
                        en: "Random guessing",
                        es: "Random guessing",
                        de: "Random guessing",
                        nl: "Random guessing"
                  },
                  {
                        en: "Ignore cards shown",
                        es: "Ignore cards shown",
                        de: "Ignore cards shown",
                        nl: "Ignore cards shown"
                  },
                  {
                        en: "No notes",
                        es: "No notes",
                        de: "No notes",
                        nl: "No notes"
                  }
            ],
            correct: 0,
            explanation: {
                  en: "This is an important concept for this difficulty level.",
                  es: "Este es un concepto importante para este nivel de dificultad.",
                  de: "Dies ist ein wichtiges Konzept für diese Schwierigkeitsstufe.",
                  nl: "Dit is een belangrijk concept voor dit moeilijkheidsniveau."
            }
      },
      {
            question: {
                  en: "What helps deduce in Clue?",
                  es: "What helps deduce in Clue?",
                  de: "What helps deduce in Clue?",
                  nl: "What helps deduce in Clue?"
            },
            options: [
                  {
                        en: "Track all suggestions",
                        es: "Track all suggestions",
                        de: "Track all suggestions",
                        nl: "Track all suggestions"
                  },
                  {
                        en: "Random guessing",
                        es: "Random guessing",
                        de: "Random guessing",
                        nl: "Random guessing"
                  },
                  {
                        en: "Ignore cards shown",
                        es: "Ignore cards shown",
                        de: "Ignore cards shown",
                        nl: "Ignore cards shown"
                  },
                  {
                        en: "No notes",
                        es: "No notes",
                        de: "No notes",
                        nl: "No notes"
                  }
            ],
            correct: 0,
            explanation: {
                  en: "This is an important concept for this difficulty level.",
                  es: "Este es un concepto importante para este nivel de dificultad.",
                  de: "Dies ist ein wichtiges Konzept für diese Schwierigkeitsstufe.",
                  nl: "Dit is een belangrijk concept voor dit moeilijkheidsniveau."
            }
      },
      {
            question: {
                  en: "What helps deduce in Clue?",
                  es: "What helps deduce in Clue?",
                  de: "What helps deduce in Clue?",
                  nl: "What helps deduce in Clue?"
            },
            options: [
                  {
                        en: "Track all suggestions",
                        es: "Track all suggestions",
                        de: "Track all suggestions",
                        nl: "Track all suggestions"
                  },
                  {
                        en: "Random guessing",
                        es: "Random guessing",
                        de: "Random guessing",
                        nl: "Random guessing"
                  },
                  {
                        en: "Ignore cards shown",
                        es: "Ignore cards shown",
                        de: "Ignore cards shown",
                        nl: "Ignore cards shown"
                  },
                  {
                        en: "No notes",
                        es: "No notes",
                        de: "No notes",
                        nl: "No notes"
                  }
            ],
            correct: 0,
            explanation: {
                  en: "This is an important concept for this difficulty level.",
                  es: "Este es un concepto importante para este nivel de dificultad.",
                  de: "Dies ist ein wichtiges Konzept für diese Schwierigkeitsstufe.",
                  nl: "Dit is een belangrijk concept voor dit moeilijkheidsniveau."
            }
      },
      {
            question: {
                  en: "What helps deduce in Clue?",
                  es: "What helps deduce in Clue?",
                  de: "What helps deduce in Clue?",
                  nl: "What helps deduce in Clue?"
            },
            options: [
                  {
                        en: "Track all suggestions",
                        es: "Track all suggestions",
                        de: "Track all suggestions",
                        nl: "Track all suggestions"
                  },
                  {
                        en: "Random guessing",
                        es: "Random guessing",
                        de: "Random guessing",
                        nl: "Random guessing"
                  },
                  {
                        en: "Ignore cards shown",
                        es: "Ignore cards shown",
                        de: "Ignore cards shown",
                        nl: "Ignore cards shown"
                  },
                  {
                        en: "No notes",
                        es: "No notes",
                        de: "No notes",
                        nl: "No notes"
                  }
            ],
            correct: 0,
            explanation: {
                  en: "This is an important concept for this difficulty level.",
                  es: "Este es un concepto importante para este nivel de dificultad.",
                  de: "Dies ist ein wichtiges Konzept für diese Schwierigkeitsstufe.",
                  nl: "Dit is een belangrijk concept voor dit moeilijkheidsniveau."
            }
      },
      {
            question: {
                  en: "What helps deduce in Clue?",
                  es: "What helps deduce in Clue?",
                  de: "What helps deduce in Clue?",
                  nl: "What helps deduce in Clue?"
            },
            options: [
                  {
                        en: "Track all suggestions",
                        es: "Track all suggestions",
                        de: "Track all suggestions",
                        nl: "Track all suggestions"
                  },
                  {
                        en: "Random guessing",
                        es: "Random guessing",
                        de: "Random guessing",
                        nl: "Random guessing"
                  },
                  {
                        en: "Ignore cards shown",
                        es: "Ignore cards shown",
                        de: "Ignore cards shown",
                        nl: "Ignore cards shown"
                  },
                  {
                        en: "No notes",
                        es: "No notes",
                        de: "No notes",
                        nl: "No notes"
                  }
            ],
            correct: 0,
            explanation: {
                  en: "This is an important concept for this difficulty level.",
                  es: "Este es un concepto importante para este nivel de dificultad.",
                  de: "Dies ist ein wichtiges Konzept für diese Schwierigkeitsstufe.",
                  nl: "Dit is een belangrijk concept voor dit moeilijkheidsniveau."
            }
      },
      {
            question: {
                  en: "What helps deduce in Clue?",
                  es: "What helps deduce in Clue?",
                  de: "What helps deduce in Clue?",
                  nl: "What helps deduce in Clue?"
            },
            options: [
                  {
                        en: "Track all suggestions",
                        es: "Track all suggestions",
                        de: "Track all suggestions",
                        nl: "Track all suggestions"
                  },
                  {
                        en: "Random guessing",
                        es: "Random guessing",
                        de: "Random guessing",
                        nl: "Random guessing"
                  },
                  {
                        en: "Ignore cards shown",
                        es: "Ignore cards shown",
                        de: "Ignore cards shown",
                        nl: "Ignore cards shown"
                  },
                  {
                        en: "No notes",
                        es: "No notes",
                        de: "No notes",
                        nl: "No notes"
                  }
            ],
            correct: 0,
            explanation: {
                  en: "This is an important concept for this difficulty level.",
                  es: "Este es un concepto importante para este nivel de dificultad.",
                  de: "Dies ist ein wichtiges Konzept für diese Schwierigkeitsstufe.",
                  nl: "Dit is een belangrijk concept voor dit moeilijkheidsniveau."
            }
      },
      {
            question: {
                  en: "What helps deduce in Clue?",
                  es: "What helps deduce in Clue?",
                  de: "What helps deduce in Clue?",
                  nl: "What helps deduce in Clue?"
            },
            options: [
                  {
                        en: "Track all suggestions",
                        es: "Track all suggestions",
                        de: "Track all suggestions",
                        nl: "Track all suggestions"
                  },
                  {
                        en: "Random guessing",
                        es: "Random guessing",
                        de: "Random guessing",
                        nl: "Random guessing"
                  },
                  {
                        en: "Ignore cards shown",
                        es: "Ignore cards shown",
                        de: "Ignore cards shown",
                        nl: "Ignore cards shown"
                  },
                  {
                        en: "No notes",
                        es: "No notes",
                        de: "No notes",
                        nl: "No notes"
                  }
            ],
            correct: 0,
            explanation: {
                  en: "This is an important concept for this difficulty level.",
                  es: "Este es un concepto importante para este nivel de dificultad.",
                  de: "Dies ist ein wichtiges Konzept für diese Schwierigkeitsstufe.",
                  nl: "Dit is een belangrijk concept voor dit moeilijkheidsniveau."
            }
      },
      {
            question: {
                  en: "What helps deduce in Clue?",
                  es: "What helps deduce in Clue?",
                  de: "What helps deduce in Clue?",
                  nl: "What helps deduce in Clue?"
            },
            options: [
                  {
                        en: "Track all suggestions",
                        es: "Track all suggestions",
                        de: "Track all suggestions",
                        nl: "Track all suggestions"
                  },
                  {
                        en: "Random guessing",
                        es: "Random guessing",
                        de: "Random guessing",
                        nl: "Random guessing"
                  },
                  {
                        en: "Ignore cards shown",
                        es: "Ignore cards shown",
                        de: "Ignore cards shown",
                        nl: "Ignore cards shown"
                  },
                  {
                        en: "No notes",
                        es: "No notes",
                        de: "No notes",
                        nl: "No notes"
                  }
            ],
            correct: 0,
            explanation: {
                  en: "This is an important concept for this difficulty level.",
                  es: "Este es un concepto importante para este nivel de dificultad.",
                  de: "Dies ist ein wichtiges Konzept für diese Schwierigkeitsstufe.",
                  nl: "Dit is een belangrijk concept voor dit moeilijkheidsniveau."
            }
      },
      {
            question: {
                  en: "What helps deduce in Clue?",
                  es: "What helps deduce in Clue?",
                  de: "What helps deduce in Clue?",
                  nl: "What helps deduce in Clue?"
            },
            options: [
                  {
                        en: "Track all suggestions",
                        es: "Track all suggestions",
                        de: "Track all suggestions",
                        nl: "Track all suggestions"
                  },
                  {
                        en: "Random guessing",
                        es: "Random guessing",
                        de: "Random guessing",
                        nl: "Random guessing"
                  },
                  {
                        en: "Ignore cards shown",
                        es: "Ignore cards shown",
                        de: "Ignore cards shown",
                        nl: "Ignore cards shown"
                  },
                  {
                        en: "No notes",
                        es: "No notes",
                        de: "No notes",
                        nl: "No notes"
                  }
            ],
            correct: 0,
            explanation: {
                  en: "This is an important concept for this difficulty level.",
                  es: "Este es un concepto importante para este nivel de dificultad.",
                  de: "Dies ist ein wichtiges Konzept für diese Schwierigkeitsstufe.",
                  nl: "Dit is een belangrijk concept voor dit moeilijkheidsniveau."
            }
      },
      {
            question: {
                  en: "What helps deduce in Clue?",
                  es: "What helps deduce in Clue?",
                  de: "What helps deduce in Clue?",
                  nl: "What helps deduce in Clue?"
            },
            options: [
                  {
                        en: "Track all suggestions",
                        es: "Track all suggestions",
                        de: "Track all suggestions",
                        nl: "Track all suggestions"
                  },
                  {
                        en: "Random guessing",
                        es: "Random guessing",
                        de: "Random guessing",
                        nl: "Random guessing"
                  },
                  {
                        en: "Ignore cards shown",
                        es: "Ignore cards shown",
                        de: "Ignore cards shown",
                        nl: "Ignore cards shown"
                  },
                  {
                        en: "No notes",
                        es: "No notes",
                        de: "No notes",
                        nl: "No notes"
                  }
            ],
            correct: 0,
            explanation: {
                  en: "This is an important concept for this difficulty level.",
                  es: "Este es un concepto importante para este nivel de dificultad.",
                  de: "Dies ist ein wichtiges Konzept für diese Schwierigkeitsstufe.",
                  nl: "Dit is een belangrijk concept voor dit moeilijkheidsniveau."
            }
      },
      {
            question: {
                  en: "What helps deduce in Clue?",
                  es: "What helps deduce in Clue?",
                  de: "What helps deduce in Clue?",
                  nl: "What helps deduce in Clue?"
            },
            options: [
                  {
                        en: "Track all suggestions",
                        es: "Track all suggestions",
                        de: "Track all suggestions",
                        nl: "Track all suggestions"
                  },
                  {
                        en: "Random guessing",
                        es: "Random guessing",
                        de: "Random guessing",
                        nl: "Random guessing"
                  },
                  {
                        en: "Ignore cards shown",
                        es: "Ignore cards shown",
                        de: "Ignore cards shown",
                        nl: "Ignore cards shown"
                  },
                  {
                        en: "No notes",
                        es: "No notes",
                        de: "No notes",
                        nl: "No notes"
                  }
            ],
            correct: 0,
            explanation: {
                  en: "This is an important concept for this difficulty level.",
                  es: "Este es un concepto importante para este nivel de dificultad.",
                  de: "Dies ist ein wichtiges Konzept für diese Schwierigkeitsstufe.",
                  nl: "Dit is een belangrijk concept voor dit moeilijkheidsniveau."
            }
      },
      {
            question: {
                  en: "What helps deduce in Clue?",
                  es: "What helps deduce in Clue?",
                  de: "What helps deduce in Clue?",
                  nl: "What helps deduce in Clue?"
            },
            options: [
                  {
                        en: "Track all suggestions",
                        es: "Track all suggestions",
                        de: "Track all suggestions",
                        nl: "Track all suggestions"
                  },
                  {
                        en: "Random guessing",
                        es: "Random guessing",
                        de: "Random guessing",
                        nl: "Random guessing"
                  },
                  {
                        en: "Ignore cards shown",
                        es: "Ignore cards shown",
                        de: "Ignore cards shown",
                        nl: "Ignore cards shown"
                  },
                  {
                        en: "No notes",
                        es: "No notes",
                        de: "No notes",
                        nl: "No notes"
                  }
            ],
            correct: 0,
            explanation: {
                  en: "This is an important concept for this difficulty level.",
                  es: "Este es un concepto importante para este nivel de dificultad.",
                  de: "Dies ist ein wichtiges Konzept für diese Schwierigkeitsstufe.",
                  nl: "Dit is een belangrijk concept voor dit moeilijkheidsniveau."
            }
      }
]
  };

  // Export for use in the quiz application
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level4;
  } else if (typeof window !== 'undefined') {
    window.level4 = level4;
  }
})();
