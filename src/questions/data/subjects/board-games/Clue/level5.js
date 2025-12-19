// Quiz Template - Level 5: Bord spelletjes - Clue
(function() {
  const level5 = {
    name: {
      en: "Cluedo - Expert",
      es: "Cluedo - Experto",
      de: "Cluedo - Experte",
      nl: "Cluedo - Expert"
    },
    questions: [
      {
            question: {
                  en: "In competitive Cluedo theory, what is 'Shannon entropy' applied to card knowledge?",
                  es: "En la teoría competitiva de Cluedo, ¿qué es la 'entropía de Shannon' aplicada al conocimiento de cartas?",
                  de: "Was ist 'Shannon-Entropie' in der kompetitiven Cluedo-Theorie, angewendet auf Kartenwissen?",
                  nl: "Wat is 'Shannon-entropie' in competitieve Cluedo-theorie, toegepast op kaartenkennis?"
            },
            options: [
                  {
                        en: "Measuring uncertainty remaining about card locations",
                        es: "Medir la incertidumbre restante sobre las ubicaciones de las cartas",
                        de: "Messung der verbleibenden Unsicherheit über Kartenstandorte",
                        nl: "Meten van resterende onzekerheid over kaartlocaties"
                  },
                  {
                        en: "A scoring system for players",
                        es: "Un sistema de puntuación para jugadores",
                        de: "Ein Punktesystem für Spieler",
                        nl: "Een puntensysteem voor spelers"
                  },
                  {
                        en: "The total number of cards",
                        es: "El número total de cartas",
                        de: "Die Gesamtzahl der Karten",
                        nl: "Het totale aantal kaarten"
                  },
                  {
                        en: "A dice probability formula",
                        es: "Una fórmula de probabilidad de dados",
                        de: "Eine Würfel-Wahrscheinlichkeitsformel",
                        nl: "Een dobbelsteenwaarschijnlijkheidsformule"
                  }
            ],
            correct: 0,
            explanation: {
                  en: "Shannon entropy in Cluedo quantifies the remaining uncertainty about which cards are where. High entropy means many possible card distributions remain consistent with known information, while low entropy means you've narrowed down possibilities significantly. Advanced players mentally estimate entropy to decide whether to make another suggestion or accusation - when entropy is very low across all three categories, you have sufficient information to accuse confidently.",
                  es: "La entropía de Shannon en Cluedo cuantifica la incertidumbre restante sobre qué cartas están dónde. Alta entropía significa que muchas distribuciones posibles de cartas siguen siendo consistentes con la información conocida, mientras que baja entropía significa que has reducido las posibilidades significativamente. Los jugadores avanzados estiman mentalmente la entropía para decidir si hacer otra sugerencia o acusación - cuando la entropía es muy baja en las tres categorías, tienes suficiente información para acusar con confianza.",
                  de: "Shannon-Entropie in Cluedo quantifiziert die verbleibende Unsicherheit darüber, welche Karten wo sind. Hohe Entropie bedeutet, dass viele mögliche Kartenverteilungen mit den bekannten Informationen übereinstimmen, während niedrige Entropie bedeutet, dass Sie die Möglichkeiten erheblich eingegrenzt haben. Fortgeschrittene Spieler schätzen die Entropie mental, um zu entscheiden, ob sie einen weiteren Vorschlag oder eine Anklage machen - wenn die Entropie in allen drei Kategorien sehr niedrig ist, haben Sie genügend Informationen, um sicher anzuklagen.",
                  nl: "Shannon-entropie in Cluedo kwantificeert de resterende onzekerheid over welke kaarten waar zijn. Hoge entropie betekent dat veel mogelijke kaartverdelingen consistent blijven met bekende informatie, terwijl lage entropie betekent dat je de mogelijkheden aanzienlijk hebt beperkt. Geavanceerde spelers schatten entropie mentaal in om te beslissen of ze nog een suggestie of beschuldiging doen - wanneer entropie zeer laag is in alle drie categorieën, heb je voldoende informatie om zelfverzekerd te beschuldigen."
            }
      },
      {
            question: {
                  en: "What is 'transitive card elimination' in expert play?",
                  es: "¿Qué es la 'eliminación transitiva de cartas' en juego experto?",
                  de: "Was ist 'transitive Karteneliminierung' im Expertenspiel?",
                  nl: "Wat is 'transitieve kaarteliminatie' in expert spel?"
            },
            options: [
                  {
                        en: "Using logical chains to deduce card locations from indirect evidence",
                        es: "Usar cadenas lógicas para deducir ubicaciones de cartas a partir de evidencia indirecta",
                        de: "Logische Ketten verwenden, um Kartenstandorte aus indirekten Beweisen abzuleiten",
                        nl: "Logische ketens gebruiken om kaartlocaties af te leiden uit indirect bewijs"
                  },
                  {
                        en: "Trading cards between players",
                        es: "Intercambiar cartas entre jugadores",
                        de: "Karten zwischen Spielern tauschen",
                        nl: "Kaarten uitwisselen tussen spelers"
                  },
                  {
                        en: "Moving cards to different rooms",
                        es: "Mover cartas a diferentes habitaciones",
                        de: "Karten in verschiedene Räume verschieben",
                        nl: "Kaarten naar verschillende kamers verplaatsen"
                  },
                  {
                        en: "Eliminating the weakest player first",
                        es: "Eliminar primero al jugador más débil",
                        de: "Den schwächsten Spieler zuerst eliminieren",
                        nl: "De zwakste speler eerst elimineren"
                  }
            ],
            correct: 0,
            explanation: {
                  en: "Transitive elimination uses logical chains: If Player A showed a card when B suggested X/Y/Z, and you know A doesn't have X or Y, then A must have Z. This extends further: if you then see Player C cannot disprove a suggestion containing Z, you know C doesn't have Z, helping narrow other possibilities. Expert players maintain complex mental networks of these transitive relationships to deduce card locations they've never directly observed.",
                  es: "La eliminación transitiva usa cadenas lógicas: Si el Jugador A mostró una carta cuando B sugirió X/Y/Z, y sabes que A no tiene X o Y, entonces A debe tener Z. Esto se extiende más: si luego ves que el Jugador C no puede refutar una sugerencia que contiene Z, sabes que C no tiene Z, ayudando a reducir otras posibilidades. Los jugadores expertos mantienen redes mentales complejas de estas relaciones transitivas para deducir ubicaciones de cartas que nunca han observado directamente.",
                  de: "Transitive Eliminierung verwendet logische Ketten: Wenn Spieler A eine Karte zeigte, als B X/Y/Z vorschlug, und Sie wissen, dass A weder X noch Y hat, dann muss A Z haben. Dies geht weiter: Wenn Sie dann sehen, dass Spieler C einen Vorschlag mit Z nicht widerlegen kann, wissen Sie, dass C Z nicht hat, was hilft, andere Möglichkeiten einzugrenzen. Experten pflegen komplexe mentale Netzwerke dieser transitiven Beziehungen, um Kartenstandorte abzuleiten, die sie nie direkt beobachtet haben.",
                  nl: "Transitieve eliminatie gebruikt logische ketens: Als Speler A een kaart liet zien toen B X/Y/Z voorstelde, en je weet dat A geen X of Y heeft, dan moet A Z hebben. Dit gaat verder: als je dan ziet dat Speler C een suggestie met Z niet kan weerleggen, weet je dat C geen Z heeft, wat helpt andere mogelijkheden te beperken. Expert spelers onderhouden complexe mentale netwerken van deze transitieve relaties om kaartlocaties af te leiden die ze nooit direct hebben waargenomen."
            }
      },
      {
            question: {
                  en: "What is 'optimal information extraction' per suggestion?",
                  es: "¿Qué es la 'extracción óptima de información' por sugerencia?",
                  de: "Was ist 'optimale Informationsgewinnung' pro Vorschlag?",
                  nl: "Wat is 'optimale informatie-extractie' per suggestie?"
            },
            options: [
                  {
                        en: "Crafting suggestions to maximize expected information gain",
                        es: "Elaborar sugerencias para maximizar la ganancia de información esperada",
                        de: "Vorschläge so gestalten, dass der erwartete Informationsgewinn maximiert wird",
                        nl: "Suggesties maken om verwachte informatiewinst te maximaliseren"
                  },
                  {
                        en: "Making the longest suggestion possible",
                        es: "Hacer la sugerencia más larga posible",
                        de: "Den längsten möglichen Vorschlag machen",
                        nl: "De langst mogelijke suggestie doen"
                  },
                  {
                        en: "Asking other players directly",
                        es: "Preguntar directamente a otros jugadores",
                        de: "Andere Spieler direkt fragen",
                        nl: "Andere spelers direct vragen"
                  },
                  {
                        en: "Using only high-value cards",
                        es: "Usar solo cartas de alto valor",
                        de: "Nur hochwertige Karten verwenden",
                        nl: "Alleen hoogwaardige kaarten gebruiken"
                  }
            ],
            correct: 0,
            explanation: {
                  en: "Optimal information extraction means choosing the three cards for your suggestion that, statistically, will give you the most useful information regardless of outcome. This involves considering: which cards have the highest uncertainty, which players are most likely to respond, whether you want broad information (testing many unknowns) or specific confirmation (testing a hypothesis). Expert players calculate expected information value before each suggestion, much like chess players evaluate positions.",
                  es: "La extracción óptima de información significa elegir las tres cartas para tu sugerencia que, estadísticamente, te darán la información más útil independientemente del resultado. Esto implica considerar: qué cartas tienen la mayor incertidumbre, qué jugadores tienen más probabilidades de responder, si quieres información amplia (probar muchas incógnitas) o confirmación específica (probar una hipótesis). Los jugadores expertos calculan el valor de información esperado antes de cada sugerencia, similar a cómo los jugadores de ajedrez evalúan posiciones.",
                  de: "Optimale Informationsgewinnung bedeutet, die drei Karten für Ihren Vorschlag so zu wählen, dass sie statistisch die nützlichsten Informationen liefern, unabhängig vom Ergebnis. Dies beinhaltet die Berücksichtigung: welche Karten die höchste Unsicherheit haben, welche Spieler am wahrscheinlichsten antworten, ob Sie breite Informationen (viele Unbekannte testen) oder spezifische Bestätigung (eine Hypothese testen) wollen. Experten berechnen den erwarteten Informationswert vor jedem Vorschlag, ähnlich wie Schachspieler Positionen bewerten.",
                  nl: "Optimale informatie-extractie betekent de drie kaarten voor je suggestie kiezen die, statistisch gezien, de meest nuttige informatie geven ongeacht de uitkomst. Dit houdt in overwegen: welke kaarten de hoogste onzekerheid hebben, welke spelers het meest waarschijnlijk reageren, of je brede informatie wilt (veel onbekenden testen) of specifieke bevestiging (een hypothese testen). Expert spelers berekenen verwachte informatiewaarde voor elke suggestie, net zoals schakers posities evalueren."
            }
      },
      {
            question: {
                  en: "What is the 'card counting asymmetry' principle?",
                  es: "¿Qué es el principio de 'asimetría de conteo de cartas'?",
                  de: "Was ist das Prinzip der 'Kartenzähl-Asymmetrie'?",
                  nl: "Wat is het 'kaarttelling asymmetrie' principe?"
            },
            options: [
                  {
                        en: "Players with fewer cards have less information to reveal but easier deduction",
                        es: "Los jugadores con menos cartas tienen menos información para revelar pero deducción más fácil",
                        de: "Spieler mit weniger Karten haben weniger Informationen preiszugeben, aber einfachere Deduktion",
                        nl: "Spelers met minder kaarten hebben minder informatie te onthullen maar gemakkelijkere deductie"
                  },
                  {
                        en: "All players must have equal cards",
                        es: "Todos los jugadores deben tener cartas iguales",
                        de: "Alle Spieler müssen gleiche Karten haben",
                        nl: "Alle spelers moeten gelijke kaarten hebben"
                  },
                  {
                        en: "Cards have different point values",
                        es: "Las cartas tienen diferentes valores de puntos",
                        de: "Karten haben unterschiedliche Punktwerte",
                        nl: "Kaarten hebben verschillende puntwaarden"
                  },
                  {
                        en: "Only one player counts cards",
                        es: "Solo un jugador cuenta cartas",
                        de: "Nur ein Spieler zählt Karten",
                        nl: "Slechts één speler telt kaarten"
                  }
            ],
            correct: 0,
            explanation: {
                  en: "Card counting asymmetry recognizes that in games with unequal card distribution, players with fewer cards (in 3-player games, for example) can disprove fewer suggestions, revealing less information. However, they also need to eliminate fewer card-to-player assignments to solve the mystery. Conversely, players with more cards know more from their hand but must track more complex possibilities. Expert players adjust strategy based on their card count relative to opponents.",
                  es: "La asimetría de conteo de cartas reconoce que en juegos con distribución desigual de cartas, los jugadores con menos cartas (en juegos de 3 jugadores, por ejemplo) pueden refutar menos sugerencias, revelando menos información. Sin embargo, también necesitan eliminar menos asignaciones de carta a jugador para resolver el misterio. Por el contrario, los jugadores con más cartas saben más de su mano pero deben rastrear posibilidades más complejas. Los jugadores expertos ajustan la estrategia según su conteo de cartas relativo a los oponentes.",
                  de: "Kartenzähl-Asymmetrie erkennt, dass in Spielen mit ungleicher Kartenverteilung Spieler mit weniger Karten (z.B. in 3-Spieler-Spielen) weniger Vorschläge widerlegen können und so weniger Informationen preisgeben. Sie müssen jedoch auch weniger Karten-zu-Spieler-Zuordnungen eliminieren, um das Rätsel zu lösen. Umgekehrt wissen Spieler mit mehr Karten mehr aus ihrer Hand, müssen aber komplexere Möglichkeiten verfolgen. Experten passen die Strategie basierend auf ihrer Kartenzahl im Verhältnis zu Gegnern an.",
                  nl: "Kaarttelling asymmetrie erkent dat in spellen met ongelijke kaartverdeling, spelers met minder kaarten (in 3-speler spellen bijvoorbeeld) minder suggesties kunnen weerleggen, waardoor minder informatie wordt onthuld. Ze moeten echter ook minder kaart-naar-speler toewijzingen elimineren om het mysterie op te lossen. Omgekeerd weten spelers met meer kaarten meer van hun hand maar moeten complexere mogelijkheden volgen. Expert spelers passen strategie aan op basis van hun aantal kaarten relatief aan tegenstanders."
            }
      },
      {
            question: {
                  en: "What is 'suggestion sequence optimization'?",
                  es: "¿Qué es la 'optimización de secuencia de sugerencias'?",
                  de: "Was ist 'Vorschlagssequenz-Optimierung'?",
                  nl: "Wat is 'suggestiesequentie-optimalisatie'?"
            },
            options: [
                  {
                        en: "Ordering suggestions to build knowledge progressively and efficiently",
                        es: "Ordenar sugerencias para construir conocimiento progresiva y eficientemente",
                        de: "Vorschläge ordnen, um Wissen progressiv und effizient aufzubauen",
                        nl: "Suggesties ordenen om kennis progressief en efficiënt op te bouwen"
                  },
                  {
                        en: "Making suggestions in alphabetical order",
                        es: "Hacer sugerencias en orden alfabético",
                        de: "Vorschläge in alphabetischer Reihenfolge machen",
                        nl: "Suggesties in alfabetische volgorde doen"
                  },
                  {
                        en: "Suggesting the same cards repeatedly",
                        es: "Sugerir las mismas cartas repetidamente",
                        de: "Dieselben Karten wiederholt vorschlagen",
                        nl: "Dezelfde kaarten herhaaldelijk voorstellen"
                  },
                  {
                        en: "Only making one suggestion per game",
                        es: "Solo hacer una sugerencia por juego",
                        de: "Nur einen Vorschlag pro Spiel machen",
                        nl: "Slechts één suggestie per spel doen"
                  }
            ],
            correct: 0,
            explanation: {
                  en: "Suggestion sequence optimization is planning multiple suggestions ahead, where each builds on information from previous ones. For example: First suggestion eliminates broad possibilities across all categories. Second suggestion focuses on the category with highest remaining uncertainty. Third suggestion tests a specific hypothesis formed from previous data. This is superior to making isolated suggestions, as it creates a coherent information-gathering strategy that accelerates solution discovery.",
                  es: "La optimización de secuencia de sugerencias es planificar múltiples sugerencias por adelantado, donde cada una se basa en información de las anteriores. Por ejemplo: Primera sugerencia elimina posibilidades amplias en todas las categorías. Segunda sugerencia se centra en la categoría con mayor incertidumbre restante. Tercera sugerencia prueba una hipótesis específica formada a partir de datos anteriores. Esto es superior a hacer sugerencias aisladas, ya que crea una estrategia coherente de recopilación de información que acelera el descubrimiento de la solución.",
                  de: "Vorschlagssequenz-Optimierung plant mehrere Vorschläge im Voraus, wobei jeder auf Informationen aus vorherigen aufbaut. Zum Beispiel: Erster Vorschlag eliminiert breite Möglichkeiten über alle Kategorien. Zweiter Vorschlag konzentriert sich auf die Kategorie mit höchster verbleibender Unsicherheit. Dritter Vorschlag testet eine spezifische Hypothese aus vorherigen Daten. Dies ist besser als isolierte Vorschläge, da es eine kohärente Informationssammlungsstrategie schafft, die die Lösungsfindung beschleunigt.",
                  nl: "Suggestiesequentie-optimalisatie is het vooruit plannen van meerdere suggesties, waarbij elke voortbouwt op informatie van vorige. Bijvoorbeeld: Eerste suggestie elimineert brede mogelijkheden in alle categorieën. Tweede suggestie richt zich op de categorie met hoogste resterende onzekerheid. Derde suggestie test een specifieke hypothese gevormd uit eerdere data. Dit is superieur aan geïsoleerde suggesties maken, omdat het een coherente informatie-verzamelstrategie creëert die oplossingsontdekking versnelt."
            }
      },
      {
            question: {
                  en: "What is 'late-game information denial' strategy?",
                  es: "¿Qué es la estrategia de 'negación de información de final de juego'?",
                  de: "Was ist die 'Spätspiel-Informationsverweigerung'-Strategie?",
                  nl: "Wat is de 'late-game informatie-weigering' strategie?"
            },
            options: [
                  {
                        en: "Making defensive suggestions with your own cards to prevent opponent breakthroughs",
                        es: "Hacer sugerencias defensivas con tus propias cartas para evitar avances del oponente",
                        de: "Defensive Vorschläge mit eigenen Karten machen, um Durchbrüche der Gegner zu verhindern",
                        nl: "Defensieve suggesties doen met je eigen kaarten om doorbraken van tegenstanders te voorkomen"
                  },
                  {
                        en: "Refusing to make any suggestions",
                        es: "Negarse a hacer cualquier sugerencia",
                        de: "Sich weigern, Vorschläge zu machen",
                        nl: "Weigeren om suggesties te doen"
                  },
                  {
                        en: "Telling opponents wrong information",
                        es: "Decir información incorrecta a los oponentes",
                        de: "Gegnern falsche Informationen geben",
                        nl: "Tegenstanders verkeerde informatie vertellen"
                  },
                  {
                        en: "Leaving the game early",
                        es: "Salir del juego temprano",
                        de: "Das Spiel früh verlassen",
                        nl: "Het spel vroeg verlaten"
                  }
            ],
            correct: 0,
            explanation: {
                  en: "In late-game situations where you're close to solving but opponents are catching up, information denial becomes critical. Instead of making suggestions that reveal new information to everyone, you deliberately include cards you hold in your suggestions. This wastes your turn for gathering new data, but crucially prevents opponents from learning anything useful. This sacrifice is strategic when: (1) you need just one or two more confirmations, (2) opponents are equally close to solving, and (3) slowing everyone's progress benefits you due to turn order or position.",
                  es: "En situaciones de final de juego donde estás cerca de resolver pero los oponentes te están alcanzando, la negación de información se vuelve crítica. En lugar de hacer sugerencias que revelan nueva información a todos, incluyes deliberadamente cartas que posees en tus sugerencias. Esto desperdicia tu turno para recopilar nuevos datos, pero crucialmente evita que los oponentes aprendan algo útil. Este sacrificio es estratégico cuando: (1) necesitas solo una o dos confirmaciones más, (2) los oponentes están igualmente cerca de resolver, y (3) ralentizar el progreso de todos te beneficia debido al orden de turno o posición.",
                  de: "In Spätspielsituationen, wo Sie kurz vor der Lösung sind, aber Gegner aufholen, wird Informationsverweigerung kritisch. Anstatt Vorschläge zu machen, die allen neue Informationen offenbaren, schließen Sie absichtlich Karten ein, die Sie halten. Dies verschwendet Ihren Zug für neue Daten, verhindert aber entscheidend, dass Gegner etwas Nützliches lernen. Dieses Opfer ist strategisch, wenn: (1) Sie nur noch ein oder zwei Bestätigungen brauchen, (2) Gegner gleich nahe am Lösen sind, und (3) den Fortschritt aller zu verlangsamen Ihnen aufgrund von Zugreihenfolge oder Position nützt.",
                  nl: "In late-game situaties waar je bijna de oplossing hebt maar tegenstanders inhalen, wordt informatie-weigering kritiek. In plaats van suggesties doen die nieuwe informatie aan iedereen onthullen, neem je opzettelijk kaarten op die je hebt in je suggesties. Dit verspilt je beurt voor het verzamelen van nieuwe data, maar voorkomt cruciaal dat tegenstanders iets nuttigs leren. Dit offer is strategisch wanneer: (1) je slechts één of twee bevestigingen meer nodig hebt, (2) tegenstanders even dicht bij oplossen zijn, en (3) ieders voortgang vertragen je voordeel oplevert door beurtvolgorde of positie."
            }
      },
      {
            question: {
                  en: "What is 'multi-path deduction'?",
                  es: "¿Qué es la 'deducción de múltiples caminos'?",
                  de: "Was ist 'Mehrwege-Deduktion'?",
                  nl: "Wat is 'meerpad-deductie'?"
            },
            options: [
                  {
                        en: "Maintaining multiple solution hypotheses until evidence definitively eliminates all but one",
                        es: "Mantener múltiples hipótesis de solución hasta que la evidencia elimine definitivamente todas menos una",
                        de: "Mehrere Lösungshypothesen beibehalten, bis Beweise alle bis auf eine definitiv eliminieren",
                        nl: "Meerdere oplossingshypothesen behouden totdat bewijs definitief alle behalve één elimineert"
                  },
                  {
                        en: "Using multiple secret passages",
                        es: "Usar múltiples pasajes secretos",
                        de: "Mehrere Geheimgänge verwenden",
                        nl: "Meerdere geheime doorgangen gebruiken"
                  },
                  {
                        en: "Playing multiple games simultaneously",
                        es: "Jugar múltiples juegos simultáneamente",
                        de: "Mehrere Spiele gleichzeitig spielen",
                        nl: "Meerdere spellen tegelijkertijd spelen"
                  },
                  {
                        en: "Making multiple accusations per turn",
                        es: "Hacer múltiples acusaciones por turno",
                        de: "Mehrere Anklagen pro Zug machen",
                        nl: "Meerdere beschuldigingen per beurt doen"
                  }
            ],
            correct: 0,
            explanation: {
                  en: "Multi-path deduction involves tracking multiple possible solutions simultaneously rather than committing to a single hypothesis early. For example, if evidence narrows the murder weapon to either Candlestick or Revolver, expert players maintain both scenarios in parallel, tracking implications for each. This prevents premature commitment to wrong conclusions and allows you to pivot instantly when new evidence emerges. The technique is computationally demanding but prevents costly false accusations and missed opportunities.",
                  es: "La deducción de múltiples caminos implica rastrear múltiples soluciones posibles simultáneamente en lugar de comprometerse con una sola hipótesis temprano. Por ejemplo, si la evidencia reduce el arma del asesinato a Candelabro o Revólver, los jugadores expertos mantienen ambos escenarios en paralelo, rastreando implicaciones para cada uno. Esto previene el compromiso prematuro con conclusiones incorrectas y te permite pivotar instantáneamente cuando surge nueva evidencia. La técnica es computacionalmente exigente pero previene acusaciones falsas costosas y oportunidades perdidas.",
                  de: "Mehrwege-Deduktion beinhaltet das gleichzeitige Verfolgen mehrerer möglicher Lösungen, anstatt sich früh auf eine einzige Hypothese festzulegen. Wenn beispielsweise Beweise die Mordwaffe auf Leuchter oder Revolver eingrenzen, pflegen Experten beide Szenarien parallel und verfolgen Implikationen für jedes. Dies verhindert vorzeitiges Festlegen auf falsche Schlussfolgerungen und ermöglicht sofortiges Umschwenken, wenn neue Beweise auftauchen. Die Technik ist rechenintensiv, verhindert aber kostspielige Fehlanklagen und verpasste Gelegenheiten.",
                  nl: "Meerpad-deductie houdt in dat je meerdere mogelijke oplossingen tegelijkertijd volgt in plaats van je vroeg vast te leggen op één hypothese. Als bewijs bijvoorbeeld het moordwapen beperkt tot Kandelaar of Revolver, houden expert spelers beide scenario's parallel bij en volgen implicaties voor elk. Dit voorkomt voortijdige toewijding aan verkeerde conclusies en stelt je in staat instant te draaien wanneer nieuw bewijs opduikt. De techniek is computationeel veeleisend maar voorkomt dure valse beschuldigingen en gemiste kansen."
            }
      },
      {
            question: {
                  en: "What is 'card reveal pattern analysis'?",
                  es: "¿Qué es el 'análisis de patrón de revelación de cartas'?",
                  de: "Was ist 'Kartenaufdeckungsmuster-Analyse'?",
                  nl: "Wat is 'kaart onthullingspatroon analyse'?"
            },
            options: [
                  {
                        en: "Studying which cards players show in what situations to infer holdings",
                        es: "Estudiar qué cartas muestran los jugadores en qué situaciones para inferir sus tenencias",
                        de: "Studieren, welche Karten Spieler in welchen Situationen zeigen, um Bestände abzuleiten",
                        nl: "Bestuderen welke kaarten spelers in welke situaties laten zien om bezittingen af te leiden"
                  },
                  {
                        en: "Memorizing the card artwork",
                        es: "Memorizar las ilustraciones de las cartas",
                        de: "Die Kartengrafiken auswendig lernen",
                        nl: "De kaartafbeeldingen memoriseren"
                  },
                  {
                        en: "Analyzing dice roll patterns",
                        es: "Analizar patrones de tiradas de dados",
                        de: "Würfelmuster analysieren",
                        nl: "Dobbelsteenworp patronen analyseren"
                  },
                  {
                        en: "Counting how fast players reveal",
                        es: "Contar qué tan rápido revelan los jugadores",
                        de: "Zählen, wie schnell Spieler aufdecken",
                        nl: "Tellen hoe snel spelers onthullen"
                  }
            ],
            correct: 0,
            explanation: {
                  en: "Card reveal pattern analysis tracks not just WHICH cards are shown, but the patterns of when players show them. If Player A always quickly shows the same card (e.g., Library) when suggested, but hesitates when other rooms are suggested before showing a different card, you can infer A has multiple room cards. If A never hesitates, they likely have only Library. Similarly, if A shows different cards from the same suggestion type repeatedly, they hold multiple cards from that suggestion. This meta-analysis provides information beyond the cards themselves.",
                  es: "El análisis de patrón de revelación de cartas rastrea no solo QUÉ cartas se muestran, sino los patrones de cuándo los jugadores las muestran. Si el Jugador A siempre muestra rápidamente la misma carta (por ejemplo, Biblioteca) cuando se sugiere, pero vacila cuando se sugieren otras habitaciones antes de mostrar una carta diferente, puedes inferir que A tiene múltiples cartas de habitación. Si A nunca vacila, probablemente solo tiene Biblioteca. Similarmente, si A muestra diferentes cartas del mismo tipo de sugerencia repetidamente, tiene múltiples cartas de esa sugerencia. Este meta-análisis proporciona información más allá de las cartas mismas.",
                  de: "Kartenaufdeckungsmuster-Analyse verfolgt nicht nur WELCHE Karten gezeigt werden, sondern die Muster, wann Spieler sie zeigen. Wenn Spieler A immer schnell dieselbe Karte zeigt (z.B. Bibliothek), wenn vorgeschlagen, aber zögert, wenn andere Räume vorgeschlagen werden, bevor er eine andere Karte zeigt, können Sie ableiten, dass A mehrere Raumkarten hat. Wenn A nie zögert, hat er wahrscheinlich nur Bibliothek. Ähnlich, wenn A wiederholt verschiedene Karten vom selben Vorschlagstyp zeigt, hält er mehrere Karten von diesem Vorschlag. Diese Meta-Analyse liefert Informationen jenseits der Karten selbst.",
                  nl: "Kaart onthullingspatroon analyse volgt niet alleen WELKE kaarten worden getoond, maar de patronen van wanneer spelers ze tonen. Als Speler A altijd snel dezelfde kaart toont (bijv. Bibliotheek) wanneer voorgesteld, maar aarzelt wanneer andere kamers worden voorgesteld voordat een andere kaart wordt getoond, kun je afleiden dat A meerdere kamerkaarten heeft. Als A nooit aarzelt, heeft hij waarschijnlijk alleen Bibliotheek. Evenzo, als A herhaaldelijk verschillende kaarten van hetzelfde suggestietype toont, heeft hij meerdere kaarten van die suggestie. Deze meta-analyse biedt informatie buiten de kaarten zelf."
            }
      },
      {
            question: {
                  en: "What is 'categorical uncertainty balancing'?",
                  es: "¿Qué es el 'equilibrio de incertidumbre categórica'?",
                  de: "Was ist 'kategorisches Unsicherheitsausgleichen'?",
                  nl: "Wat is 'categorische onzekerheidsbalancering'?"
            },
            options: [
                  {
                        en: "Reducing uncertainty evenly across all three categories rather than solving one completely",
                        es: "Reducir la incertidumbre de manera uniforme en las tres categorías en lugar de resolver una completamente",
                        de: "Unsicherheit gleichmäßig über alle drei Kategorien reduzieren, anstatt eine vollständig zu lösen",
                        nl: "Onzekerheid gelijkmatig verminderen over alle drie categorieën in plaats van er één volledig op te lossen"
                  },
                  {
                        en: "Only focusing on suspect cards",
                        es: "Enfocarse solo en cartas de sospechosos",
                        de: "Nur auf Verdächtigenkarten konzentrieren",
                        nl: "Alleen focussen op verdachtekaarten"
                  },
                  {
                        en: "Balancing the game board",
                        es: "Equilibrar el tablero del juego",
                        de: "Das Spielbrett ausbalancieren",
                        nl: "Het spelbord balanceren"
                  },
                  {
                        en: "Making sure all cards are used equally",
                        es: "Asegurarse de que todas las cartas se usen por igual",
                        de: "Sicherstellen, dass alle Karten gleich verwendet werden",
                        nl: "Ervoor zorgen dat alle kaarten gelijk worden gebruikt"
                  }
            ],
            correct: 0,
            explanation: {
                  en: "Categorical uncertainty balancing is a sophisticated strategy where you avoid completely solving one category before addressing others. While it seems efficient to eliminate all suspects first, this can be suboptimal because: (1) remaining suggestions become less informative, (2) opponents benefit equally from your progress, and (3) you might commit to a wrong solution in other categories. Instead, experts reduce uncertainty across all three categories in parallel, maintaining flexibility and maximizing information from each suggestion until very late in the game.",
                  es: "El equilibrio de incertidumbre categórica es una estrategia sofisticada donde evitas resolver completamente una categoría antes de abordar otras. Aunque parece eficiente eliminar todos los sospechosos primero, esto puede ser subóptimo porque: (1) las sugerencias restantes se vuelven menos informativas, (2) los oponentes se benefician igualmente de tu progreso, y (3) podrías comprometerte con una solución incorrecta en otras categorías. En cambio, los expertos reducen la incertidumbre en las tres categorías en paralelo, manteniendo flexibilidad y maximizando información de cada sugerencia hasta muy tarde en el juego.",
                  de: "Kategorisches Unsicherheitsausgleichen ist eine ausgeklügelte Strategie, bei der Sie vermeiden, eine Kategorie vollständig zu lösen, bevor Sie andere angehen. Obwohl es effizient erscheint, zuerst alle Verdächtigen zu eliminieren, kann dies suboptimal sein, weil: (1) verbleibende Vorschläge weniger informativ werden, (2) Gegner gleichermaßen von Ihrem Fortschritt profitieren, und (3) Sie sich auf eine falsche Lösung in anderen Kategorien festlegen könnten. Stattdessen reduzieren Experten Unsicherheit über alle drei Kategorien parallel, behalten Flexibilität bei und maximieren Informationen aus jedem Vorschlag bis sehr spät im Spiel.",
                  nl: "Categorische onzekerheidsbalancering is een geavanceerde strategie waarbij je vermijdt één categorie volledig op te lossen voordat je andere aanpakt. Hoewel het efficiënt lijkt om eerst alle verdachten te elimineren, kan dit suboptimaal zijn omdat: (1) resterende suggesties minder informatief worden, (2) tegenstanders evenveel profiteren van je voortgang, en (3) je je zou kunnen vastleggen op een verkeerde oplossing in andere categorieën. In plaats daarvan verminderen experts onzekerheid over alle drie categorieën parallel, behouden flexibiliteit en maximaliseren informatie uit elke suggestie tot zeer laat in het spel."
            }
      },
      {
            question: {
                  en: "What is 'temporal suggestion spacing'?",
                  es: "¿Qué es el 'espaciado temporal de sugerencias'?",
                  de: "Was ist 'zeitliches Vorschlagsabstand'?",
                  nl: "Wat is 'temporele suggestie-afstand'?"
            },
            options: [
                  {
                        en: "Timing suggestions to observe maximum opponent responses between your turns",
                        es: "Cronometrar sugerencias para observar las máximas respuestas del oponente entre tus turnos",
                        de: "Vorschläge zeitlich so planen, dass maximale Gegnerreaktionen zwischen Ihren Zügen beobachtet werden",
                        nl: "Suggesties timen om maximale tegenstander reacties tussen je beurten te observeren"
                  },
                  {
                        en: "Making suggestions at exactly 1-minute intervals",
                        es: "Hacer sugerencias exactamente a intervalos de 1 minuto",
                        de: "Vorschläge genau im 1-Minuten-Intervall machen",
                        nl: "Suggesties doen op exact 1-minuut intervallen"
                  },
                  {
                        en: "Spacing out rooms evenly on the board",
                        es: "Espaciar las habitaciones uniformemente en el tablero",
                        de: "Räume gleichmäßig auf dem Brett verteilen",
                        nl: "Kamers gelijkmatig over het bord verdelen"
                  },
                  {
                        en: "Waiting random amounts of time",
                        es: "Esperar cantidades aleatorias de tiempo",
                        de: "Zufällige Zeitmengen warten",
                        nl: "Willekeurige hoeveelheden tijd wachten"
                  }
            ],
            correct: 0,
            explanation: {
                  en: "Temporal suggestion spacing recognizes that in turn-based games, you gather as much information from OBSERVING other players' suggestions as from making your own. Strategic players sometimes deliberately slow their own suggestion rate to observe more opponent interactions. If you're in late turn order, making fewer but more targeted suggestions while watching opponents' patterns can be superior to aggressive suggesting. This is especially valuable when opponents are revealing information to each other that helps you deduce the solution without exposing your own knowledge state.",
                  es: "El espaciado temporal de sugerencias reconoce que en juegos por turnos, recopilas tanta información OBSERVANDO las sugerencias de otros jugadores como haciendo las tuyas propias. Los jugadores estratégicos a veces ralentizan deliberadamente su propia tasa de sugerencias para observar más interacciones del oponente. Si estás en orden de turno tardío, hacer menos pero más sugerencias dirigidas mientras observas los patrones de los oponentes puede ser superior a sugerir agresivamente. Esto es especialmente valioso cuando los oponentes están revelando información entre ellos que te ayuda a deducir la solución sin exponer tu propio estado de conocimiento.",
                  de: "Zeitliches Vorschlagsabstand erkennt, dass Sie in rundenbasierten Spielen genauso viel Information aus der BEOBACHTUNG anderer Spielervorschläge sammeln wie aus eigenen. Strategische Spieler verlangsamen manchmal absichtlich ihre eigene Vorschlagsrate, um mehr Gegnerinteraktionen zu beobachten. Wenn Sie spät in der Zugreihenfolge sind, können weniger aber gezieltere Vorschläge beim Beobachten von Gegnermustern besser sein als aggressives Vorschlagen. Dies ist besonders wertvoll, wenn Gegner einander Informationen offenbaren, die Ihnen helfen, die Lösung abzuleiten, ohne Ihren eigenen Wissenszustand preiszugeben.",
                  nl: "Temporele suggestie-afstand erkent dat je in beurtengebaseerde spellen evenveel informatie verzamelt uit OBSERVEREN van andere spelers' suggesties als uit je eigen. Strategische spelers vertragen soms opzettelijk hun eigen suggestiefrequentie om meer tegenstander interacties te observeren. Als je laat in beurtvolgorde bent, kunnen minder maar meer gerichte suggesties terwijl je tegenstander patronen observeert superieur zijn aan agressief suggereren. Dit is vooral waardevol wanneer tegenstanders informatie aan elkaar onthullen die je helpt de oplossing af te leiden zonder je eigen kennisstaat bloot te geven."
            }
      },
      {
            question: {
                  en: "What is 'probabilistic card location mapping'?",
                  es: "¿Qué es el 'mapeo probabilístico de ubicación de cartas'?",
                  de: "Was ist 'probabilistische Kartenstandort-Kartierung'?",
                  nl: "Wat is 'probabilistische kaartlocatie mapping'?"
            },
            options: [
                  {
                        en: "Assigning probability percentages to each card-player-envelope combination",
                        es: "Asignar porcentajes de probabilidad a cada combinación de carta-jugador-sobre",
                        de: "Wahrscheinlichkeitsprozentsätze jeder Karte-Spieler-Umschlag-Kombination zuweisen",
                        nl: "Waarschijnlijkheidspercentages toewijzen aan elke kaart-speler-envelop combinatie"
                  },
                  {
                        en: "Drawing a map of the game board",
                        es: "Dibujar un mapa del tablero del juego",
                        de: "Eine Karte des Spielbretts zeichnen",
                        nl: "Een kaart van het spelbord tekenen"
                  },
                  {
                        en: "Placing cards in specific rooms",
                        es: "Colocar cartas en habitaciones específicas",
                        de: "Karten in bestimmten Räumen platzieren",
                        nl: "Kaarten in specifieke kamers plaatsen"
                  },
                  {
                        en: "Memorizing card positions",
                        es: "Memorizar posiciones de cartas",
                        de: "Kartenpositionen auswendig lernen",
                        nl: "Kaartposities memoriseren"
                  }
            ],
            correct: 0,
            explanation: {
                  en: "Probabilistic card location mapping goes beyond binary elimination (card is/isn't with player X) to maintain probability distributions. For example: 'Library has 60% chance envelope, 30% Player A, 10% Player B' based on accumulated evidence. This nuanced approach allows better decision-making when forced to accuse with incomplete information. Expert players update these probabilities after each suggestion using Bayesian reasoning, allowing them to make the statistically optimal accusation even when perfect deduction isn't possible, which happens in some player count configurations.",
                  es: "El mapeo probabilístico de ubicación de cartas va más allá de la eliminación binaria (la carta está/no está con el jugador X) para mantener distribuciones de probabilidad. Por ejemplo: 'Biblioteca tiene 60% de probabilidad sobre, 30% Jugador A, 10% Jugador B' basado en evidencia acumulada. Este enfoque matizado permite mejor toma de decisiones cuando se ve forzado a acusar con información incompleta. Los jugadores expertos actualizan estas probabilidades después de cada sugerencia usando razonamiento bayesiano, permitiéndoles hacer la acusación estadísticamente óptima incluso cuando la deducción perfecta no es posible, lo que sucede en algunas configuraciones de conteo de jugadores.",
                  de: "Probabilistische Kartenstandort-Kartierung geht über binäre Eliminierung (Karte ist/ist nicht bei Spieler X) hinaus, um Wahrscheinlichkeitsverteilungen zu pflegen. Zum Beispiel: 'Bibliothek hat 60% Chance Umschlag, 30% Spieler A, 10% Spieler B' basierend auf gesammelten Beweisen. Dieser nuancierte Ansatz ermöglicht bessere Entscheidungsfindung, wenn man mit unvollständigen Informationen anklagen muss. Experten aktualisieren diese Wahrscheinlichkeiten nach jedem Vorschlag mit Bayes'scher Argumentation, was ihnen erlaubt, die statistisch optimale Anklage zu machen, selbst wenn perfekte Deduktion nicht möglich ist, was bei manchen Spielerzählkonfigurationen vorkommt.",
                  nl: "Probabilistische kaartlocatie mapping gaat verder dan binaire eliminatie (kaart is/is niet bij speler X) om waarschijnlijkheidsverdelingen te behouden. Bijvoorbeeld: 'Bibliotheek heeft 60% kans envelop, 30% Speler A, 10% Speler B' gebaseerd op verzameld bewijs. Deze genuanceerde aanpak maakt betere besluitvorming mogelijk wanneer gedwongen te beschuldigen met onvolledige informatie. Expert spelers updaten deze waarschijnlijkheden na elke suggestie met Bayesiaans redeneren, waardoor ze de statistisch optimale beschuldiging kunnen doen zelfs wanneer perfecte deductie niet mogelijk is, wat voorkomt in sommige speleraantal configuraties."
            }
      },
      {
            question: {
                  en: "What is the 'information cascade' phenomenon in multiplayer Cluedo?",
                  es: "¿Qué es el fenómeno de 'cascada de información' en Cluedo multijugador?",
                  de: "Was ist das 'Informationskaskaden'-Phänomen im Mehrspieler-Cluedo?",
                  nl: "Wat is het 'informatie cascade' fenomeen in multiplayer Cluedo?"
            },
            options: [
                  {
                        en: "When one player's suggestion triggers chain deductions for all observant players",
                        es: "Cuando la sugerencia de un jugador desencadena deducciones en cadena para todos los jugadores observadores",
                        de: "Wenn der Vorschlag eines Spielers Kettenableitungen für alle aufmerksamen Spieler auslöst",
                        nl: "Wanneer de suggestie van één speler ketens van deducties voor alle oplettende spelers triggert"
                  },
                  {
                        en: "Cards falling off the table",
                        es: "Cartas cayendo de la mesa",
                        de: "Karten fallen vom Tisch",
                        nl: "Kaarten die van de tafel vallen"
                  },
                  {
                        en: "Players suggesting in sequence",
                        es: "Jugadores sugiriendo en secuencia",
                        de: "Spieler schlagen in Reihenfolge vor",
                        nl: "Spelers die in volgorde voorstellen"
                  },
                  {
                        en: "Information being deleted from notes",
                        es: "Información siendo eliminada de las notas",
                        de: "Informationen werden aus Notizen gelöscht",
                        nl: "Informatie wordt verwijderd uit notities"
                  }
            ],
            correct: 0,
            explanation: {
                  en: "An information cascade occurs when a suggestion creates a chain reaction of deductions. For example: Player A suggests Plum/Knife/Hall. Player B shows a card. Expert Player C, knowing B doesn't have Plum or Knife (from previous observations), instantly deduces B showed Hall. Player C then realizes the Library (not Hall) must be in the solution, which means their earlier hypothesis about Conservatory was wrong, cascading to multiple revised conclusions. These cascades can suddenly shift the entire game state for attentive players, often creating decisive advantages.",
                  es: "Una cascada de información ocurre cuando una sugerencia crea una reacción en cadena de deducciones. Por ejemplo: El Jugador A sugiere Plum/Cuchillo/Vestíbulo. El Jugador B muestra una carta. El Jugador Experto C, sabiendo que B no tiene Plum ni Cuchillo (de observaciones previas), deduce instantáneamente que B mostró Vestíbulo. El Jugador C luego se da cuenta de que la Biblioteca (no Vestíbulo) debe estar en la solución, lo que significa que su hipótesis anterior sobre el Conservatorio era incorrecta, en cascada hacia múltiples conclusiones revisadas. Estas cascadas pueden cambiar repentinamente todo el estado del juego para jugadores atentos, a menudo creando ventajas decisivas.",
                  de: "Eine Informationskaskade tritt auf, wenn ein Vorschlag eine Kettenreaktion von Ableitungen erzeugt. Zum Beispiel: Spieler A schlägt Plum/Messer/Halle vor. Spieler B zeigt eine Karte. Experte Spieler C, der weiß, dass B weder Plum noch Messer hat (aus früheren Beobachtungen), leitet sofort ab, dass B Halle zeigte. Spieler C erkennt dann, dass die Bibliothek (nicht Halle) in der Lösung sein muss, was bedeutet, dass seine frühere Hypothese über den Wintergarten falsch war, kaskadierend zu mehreren überarbeiteten Schlussfolgerungen. Diese Kaskaden können plötzlich den gesamten Spielzustand für aufmerksame Spieler verschieben und oft entscheidende Vorteile schaffen.",
                  nl: "Een informatie cascade vindt plaats wanneer een suggestie een kettingreactie van deducties creëert. Bijvoorbeeld: Speler A stelt Plum/Mes/Hal voor. Speler B toont een kaart. Expert Speler C, wetende dat B geen Plum of Mes heeft (uit eerdere observaties), leidt onmiddellijk af dat B Hal toonde. Speler C realiseert zich dan dat de Bibliotheek (niet Hal) in de oplossing moet zitten, wat betekent dat hun eerdere hypothese over de Serre verkeerd was, cascaderend naar meerdere herziene conclusies. Deze cascades kunnen plotseling de hele spelstaat voor oplettende spelers verschuiven, vaak beslissende voordelen creërend."
            }
      },
      {
            question: {
                  en: "What is 'solution space pruning'?",
                  es: "¿Qué es la 'poda del espacio de soluciones'?",
                  de: "Was ist 'Lösungsraum-Beschneidung'?",
                  nl: "Wat is 'oplossingsruimte snoeien'?"
            },
            options: [
                  {
                        en: "Systematically eliminating impossible solution combinations to narrow possibilities",
                        es: "Eliminar sistemáticamente combinaciones de solución imposibles para reducir posibilidades",
                        de: "Systematisches Eliminieren unmöglicher Lösungskombinationen zur Eingrenzung von Möglichkeiten",
                        nl: "Systematisch onmogelijke oplossingscombinaties elimineren om mogelijkheden te beperken"
                  },
                  {
                        en: "Cutting branches from trees on the board",
                        es: "Cortar ramas de árboles en el tablero",
                        de: "Äste von Bäumen auf dem Brett schneiden",
                        nl: "Takken van bomen op het bord snoeien"
                  },
                  {
                        en: "Removing players from the game",
                        es: "Eliminar jugadores del juego",
                        de: "Spieler aus dem Spiel entfernen",
                        nl: "Spelers uit het spel verwijderen"
                  },
                  {
                        en: "Organizing cards by size",
                        es: "Organizar cartas por tamaño",
                        de: "Karten nach Größe ordnen",
                        nl: "Kaarten ordenen op grootte"
                  }
            ],
            correct: 0,
            explanation: {
                  en: "Solution space pruning treats deduction as eliminating branches from a decision tree of all possible solutions. Initially there are 6×6×9 = 324 possible solutions in standard Cluedo. Each piece of evidence eliminates entire branches: learning Scarlett is with Player A eliminates all 54 solutions containing Scarlett. Advanced players track approximately how many solutions remain viable and use this to estimate how close they are to solving. When solution space is reduced to 1 possibility, you have certainty. When reduced to 2-3 possibilities, probabilistic accusation may be justified depending on game context.",
                  es: "La poda del espacio de soluciones trata la deducción como la eliminación de ramas de un árbol de decisión de todas las soluciones posibles. Inicialmente hay 6×6×9 = 324 soluciones posibles en Cluedo estándar. Cada pieza de evidencia elimina ramas enteras: aprender que Scarlett está con el Jugador A elimina todas las 54 soluciones que contienen Scarlett. Los jugadores avanzados rastrean aproximadamente cuántas soluciones quedan viables y usan esto para estimar qué tan cerca están de resolver. Cuando el espacio de solución se reduce a 1 posibilidad, tienes certeza. Cuando se reduce a 2-3 posibilidades, la acusación probabilística puede estar justificada dependiendo del contexto del juego.",
                  de: "Lösungsraum-Beschneidung behandelt Deduktion als Eliminierung von Zweigen aus einem Entscheidungsbaum aller möglichen Lösungen. Anfangs gibt es 6×6×9 = 324 mögliche Lösungen im Standard-Cluedo. Jedes Beweisstück eliminiert ganze Zweige: zu lernen, dass Scarlett bei Spieler A ist, eliminiert alle 54 Lösungen mit Scarlett. Fortgeschrittene Spieler verfolgen ungefähr, wie viele Lösungen noch tragfähig bleiben, und nutzen dies, um zu schätzen, wie nah sie am Lösen sind. Wenn der Lösungsraum auf 1 Möglichkeit reduziert ist, haben Sie Gewissheit. Wenn auf 2-3 Möglichkeiten reduziert, kann probabilistische Anklage je nach Spielkontext gerechtfertigt sein.",
                  nl: "Oplossingsruimte snoeien behandelt deductie als het elimineren van takken uit een beslissingsboom van alle mogelijke oplossingen. Aanvankelijk zijn er 6×6×9 = 324 mogelijke oplossingen in standaard Cluedo. Elk bewijs elimineert hele takken: leren dat Scarlett bij Speler A is elimineert alle 54 oplossingen met Scarlett. Geavanceerde spelers volgen ongeveer hoeveel oplossingen levensvatbaar blijven en gebruiken dit om te schatten hoe dicht ze bij oplossen zijn. Wanneer oplossingsruimte is gereduceerd tot 1 mogelijkheid, heb je zekerheid. Wanneer gereduceerd tot 2-3 mogelijkheden, kan probabilistische beschuldiging gerechtvaardigd zijn afhankelijk van spelcontext."
            }
      },
      {
            question: {
                  en: "What is 'deductive velocity' in Cluedo?",
                  es: "¿Qué es la 'velocidad deductiva' en Cluedo?",
                  de: "Was ist 'Deduktionsgeschwindigkeit' in Cluedo?",
                  nl: "Wat is 'deductieve snelheid' in Cluedo?"
            },
            options: [
                  {
                        en: "The rate at which a player eliminates possible solutions per turn",
                        es: "La tasa a la que un jugador elimina soluciones posibles por turno",
                        de: "Die Rate, mit der ein Spieler mögliche Lösungen pro Zug eliminiert",
                        nl: "De snelheid waarmee een speler mogelijke oplossingen per beurt elimineert"
                  },
                  {
                        en: "How fast players move on the board",
                        es: "Qué tan rápido se mueven los jugadores en el tablero",
                        de: "Wie schnell Spieler sich auf dem Brett bewegen",
                        nl: "Hoe snel spelers over het bord bewegen"
                  },
                  {
                        en: "The speed of making accusations",
                        es: "La velocidad de hacer acusaciones",
                        de: "Die Geschwindigkeit der Anklageerhebung",
                        nl: "De snelheid van beschuldigingen doen"
                  },
                  {
                        en: "How quickly cards are dealt",
                        es: "Qué tan rápido se reparten las cartas",
                        de: "Wie schnell Karten ausgeteilt werden",
                        nl: "Hoe snel kaarten worden gedeeld"
                  }
            ],
            correct: 0,
            explanation: {
                  en: "Deductive velocity measures your efficiency at narrowing the solution space. A player with high deductive velocity extracts maximum information from each suggestion and observation, rapidly reducing remaining possibilities. Factors affecting velocity include: suggestion quality (targeting high-uncertainty cards), observational skills (learning from others' suggestions), deductive reasoning ability (making transitive eliminations), and note-taking efficiency. Expert players are conscious of their own and opponents' deductive velocity and adjust strategy accordingly - if an opponent has higher velocity, you may need to take calculated risks earlier.",
                  es: "La velocidad deductiva mide tu eficiencia para reducir el espacio de solución. Un jugador con alta velocidad deductiva extrae la máxima información de cada sugerencia y observación, reduciendo rápidamente las posibilidades restantes. Los factores que afectan la velocidad incluyen: calidad de sugerencia (apuntar a cartas de alta incertidumbre), habilidades de observación (aprender de las sugerencias de otros), capacidad de razonamiento deductivo (hacer eliminaciones transitivas) y eficiencia de toma de notas. Los jugadores expertos son conscientes de su propia velocidad deductiva y la de los oponentes y ajustan la estrategia en consecuencia - si un oponente tiene mayor velocidad, es posible que necesites tomar riesgos calculados antes.",
                  de: "Deduktionsgeschwindigkeit misst Ihre Effizienz beim Eingrenzen des Lösungsraums. Ein Spieler mit hoher Deduktionsgeschwindigkeit extrahiert maximale Informationen aus jedem Vorschlag und jeder Beobachtung und reduziert schnell verbleibende Möglichkeiten. Faktoren, die die Geschwindigkeit beeinflussen, umfassen: Vorschlagsqualität (Zielen auf Karten mit hoher Unsicherheit), Beobachtungsfähigkeiten (Lernen aus Vorschlägen anderer), deduktive Denkfähigkeit (transitive Eliminierungen machen) und Notiznahme-Effizienz. Experten sind sich ihrer eigenen und der Deduktionsgeschwindigkeit der Gegner bewusst und passen die Strategie entsprechend an - wenn ein Gegner höhere Geschwindigkeit hat, müssen Sie möglicherweise früher kalkulierte Risiken eingehen.",
                  nl: "Deductieve snelheid meet je efficiëntie bij het beperken van de oplossingsruimte. Een speler met hoge deductieve snelheid haalt maximale informatie uit elke suggestie en observatie, en vermindert snel resterende mogelijkheden. Factoren die snelheid beïnvloeden omvatten: suggestiekwaliteit (targeten van hoge-onzekerheid kaarten), observatievaardigheden (leren van anderen' suggesties), deductief redeneervermogen (transitieve eliminaties maken), en notitie-efficiëntie. Expert spelers zijn zich bewust van hun eigen en tegenstanders' deductieve snelheid en passen strategie dienovereenkomstig aan - als een tegenstander hogere snelheid heeft, moet je misschien eerder berekende risico's nemen."
            }
      },
      {
            question: {
                  en: "What is 'strategic card obscurity' in showing cards?",
                  es: "¿Qué es la 'oscuridad estratégica de cartas' al mostrar cartas?",
                  de: "Was ist 'strategische Kartenverdeckung' beim Zeigen von Karten?",
                  nl: "Wat is 'strategische kaart onduidelijkheid' bij het tonen van kaarten?"
            },
            options: [
                  {
                        en: "When having choice, show cards that provide minimal strategic information to opponents",
                        es: "Cuando tienes opción, mostrar cartas que proporcionen información estratégica mínima a los oponentes",
                        de: "Bei Wahlmöglichkeit Karten zeigen, die minimale strategische Informationen an Gegner liefern",
                        nl: "Wanneer je keuze hebt, kaarten tonen die minimale strategische informatie aan tegenstanders geven"
                  },
                  {
                        en: "Showing cards in dim lighting",
                        es: "Mostrar cartas con poca luz",
                        de: "Karten bei schwachem Licht zeigen",
                        nl: "Kaarten in zwak licht tonen"
                  },
                  {
                        en: "Hiding cards under the table",
                        es: "Esconder cartas debajo de la mesa",
                        de: "Karten unter dem Tisch verstecken",
                        nl: "Kaarten onder de tafel verbergen"
                  },
                  {
                        en: "Using cards with unclear images",
                        es: "Usar cartas con imágenes poco claras",
                        de: "Karten mit unklaren Bildern verwenden",
                        nl: "Kaarten met onduidelijke afbeeldingen gebruiken"
                  }
            ],
            correct: 0,
            explanation: {
                  en: "Strategic card obscurity applies when you must disprove a suggestion but have multiple cards that could do so. Beyond the minimum information principle (showing the same card repeatedly), you should choose WHICH card to consistently show based on strategic value. Show cards from categories where you hold multiple cards (reducing what opponents learn about your full holdings). Show cards that many players might have (higher uncertainty). Avoid showing rare cards or cards that strongly indicate your other holdings. This subtle optimization compounds over many turns.",
                  es: "La oscuridad estratégica de cartas se aplica cuando debes refutar una sugerencia pero tienes múltiples cartas que podrían hacerlo. Más allá del principio de información mínima (mostrar la misma carta repetidamente), debes elegir QUÉ carta mostrar consistentemente basándote en el valor estratégico. Muestra cartas de categorías donde tienes múltiples cartas (reduciendo lo que los oponentes aprenden sobre tus tenencias completas). Muestra cartas que muchos jugadores podrían tener (mayor incertidumbre). Evita mostrar cartas raras o cartas que indiquen fuertemente tus otras tenencias. Esta optimización sutil se acumula a lo largo de muchos turnos.",
                  de: "Strategische Kartenverdeckung gilt, wenn Sie einen Vorschlag widerlegen müssen, aber mehrere Karten haben, die dies könnten. Über das Prinzip der minimalen Information hinaus (dieselbe Karte wiederholt zeigen) sollten Sie WELCHE Karte Sie konsequent zeigen, basierend auf strategischem Wert wählen. Zeigen Sie Karten aus Kategorien, in denen Sie mehrere Karten halten (reduziert, was Gegner über Ihre vollen Bestände lernen). Zeigen Sie Karten, die viele Spieler haben könnten (höhere Unsicherheit). Vermeiden Sie seltene Karten oder Karten, die stark Ihre anderen Bestände anzeigen. Diese subtile Optimierung summiert sich über viele Züge.",
                  nl: "Strategische kaart onduidelijkheid geldt wanneer je een suggestie moet weerleggen maar meerdere kaarten hebt die dat kunnen doen. Naast het minimum informatie principe (dezelfde kaart herhaaldelijk tonen), moet je WELKE kaart je consistent toont kiezen op basis van strategische waarde. Toon kaarten uit categorieën waar je meerdere kaarten hebt (vermindert wat tegenstanders leren over je volledige bezittingen). Toon kaarten die veel spelers zouden kunnen hebben (hogere onzekerheid). Vermijd zeldzame kaarten of kaarten die sterk je andere bezittingen aangeven. Deze subtiele optimalisatie stapelt op over veel beurten."
            }
      },
      {
            question: {
                  en: "What is 'game-theoretic accusation timing'?",
                  es: "¿Qué es el 'momento de acusación de teoría de juegos'?",
                  de: "Was ist 'spieltheoretisches Anklagezeitpunkt'?",
                  nl: "Wat is 'speltheoretische beschuldigingstiming'?"
            },
            options: [
                  {
                        en: "Modeling opponents' knowledge to predict when they'll accuse and timing yours optimally",
                        es: "Modelar el conocimiento de los oponentes para predecir cuándo acusarán y cronometrar el tuyo óptimamente",
                        de: "Gegnerwissen modellieren, um vorherzusagen, wann sie anklagen werden, und Ihre optimal zu timen",
                        nl: "Kennis van tegenstanders modelleren om te voorspellen wanneer ze zullen beschuldigen en jouwe optimaal timen"
                  },
                  {
                        en: "Following a pre-set timer",
                        es: "Seguir un temporizador preestablecido",
                        de: "Einem voreingestellten Timer folgen",
                        nl: "Een vooraf ingestelde timer volgen"
                  },
                  {
                        en: "Always accusing on turn 10",
                        es: "Siempre acusar en el turno 10",
                        de: "Immer in Zug 10 anklagen",
                        nl: "Altijd beschuldigen bij beurt 10"
                  },
                  {
                        en: "Making accusations randomly",
                        es: "Hacer acusaciones al azar",
                        de: "Zufällige Anklagen machen",
                        nl: "Willekeurige beschuldigingen doen"
                  }
            ],
            correct: 0,
            explanation: {
                  en: "Game-theoretic accusation timing involves not just evaluating your own certainty, but modeling what your opponents likely know and when they might accuse. If you're 85% certain but estimate Opponent A is 90% certain and will accuse next turn, you should accuse now despite lower confidence. Conversely, if opponents seem far from solving, you can wait for higher certainty. This requires tracking: which cards opponents have seen, their suggestion patterns (indicating what they're still uncertain about), their playing skill level, and their positional advantages. Master players essentially play against opponents' knowledge states, not just against the cards.",
                  es: "El momento de acusación de teoría de juegos implica no solo evaluar tu propia certeza, sino modelar lo que tus oponentes probablemente saben y cuándo podrían acusar. Si tienes un 85% de certeza pero estimas que el Oponente A tiene un 90% de certeza y acusará en el próximo turno, debes acusar ahora a pesar de menor confianza. Por el contrario, si los oponentes parecen lejos de resolver, puedes esperar mayor certeza. Esto requiere rastrear: qué cartas han visto los oponentes, sus patrones de sugerencia (indicando sobre qué aún son inciertos), su nivel de habilidad de juego y sus ventajas posicionales. Los jugadores maestros esencialmente juegan contra los estados de conocimiento de los oponentes, no solo contra las cartas.",
                  de: "Spieltheoretisches Anklagezeitpunkt beinhaltet nicht nur die Bewertung Ihrer eigenen Gewissheit, sondern die Modellierung dessen, was Ihre Gegner wahrscheinlich wissen und wann sie anklagen könnten. Wenn Sie zu 85% sicher sind, aber schätzen, dass Gegner A zu 90% sicher ist und nächsten Zug anklagen wird, sollten Sie jetzt anklagen trotz geringerer Zuversicht. Umgekehrt, wenn Gegner weit vom Lösen entfernt scheinen, können Sie auf höhere Gewissheit warten. Dies erfordert Verfolgung: welche Karten Gegner gesehen haben, ihre Vorschlagsmuster (zeigt, worüber sie noch unsicher sind), ihr Spielfähigkeitsniveau und ihre Positionsvorteile. Meister spielen im Wesentlichen gegen Gegnerwissenszustände, nicht nur gegen die Karten.",
                  nl: "Speltheoretische beschuldigingstiming houdt in dat je niet alleen je eigen zekerheid evalueert, maar modelleert wat je tegenstanders waarschijnlijk weten en wanneer ze zouden kunnen beschuldigen. Als je 85% zeker bent maar schat dat Tegenstander A 90% zeker is en volgende beurt zal beschuldigen, moet je nu beschuldigen ondanks lagere vertrouwen. Omgekeerd, als tegenstanders ver van oplossen lijken, kun je wachten op hogere zekerheid. Dit vereist volgen: welke kaarten tegenstanders hebben gezien, hun suggestiepatronen (wat aangeeft waarover ze nog onzeker zijn), hun spelniveauniveau, en hun positionele voordelen. Meesterspelers spelen in essentie tegen tegenstanders' kennistoestanden, niet alleen tegen de kaarten."
            }
      },
      {
            question: {
                  en: "What is 'negation inference' in advanced Cluedo?",
                  es: "¿Qué es la 'inferencia de negación' en Cluedo avanzado?",
                  de: "Was ist 'Negationsinferenz' im fortgeschrittenen Cluedo?",
                  nl: "Wat is 'negatie-inferentie' in geavanceerd Cluedo?"
            },
            options: [
                  {
                        en: "Deducing what cards players DON'T have is as valuable as knowing what they DO have",
                        es: "Deducir qué cartas los jugadores NO tienen es tan valioso como saber qué SÍ tienen",
                        de: "Ableiten, welche Karten Spieler NICHT haben, ist so wertvoll wie zu wissen, was sie HABEN",
                        nl: "Afleiden welke kaarten spelers NIET hebben is even waardevol als weten wat ze WEL hebben"
                  },
                  {
                        en: "Always disagreeing with opponents",
                        es: "Siempre estar en desacuerdo con los oponentes",
                        de: "Immer mit Gegnern nicht übereinstimmen",
                        nl: "Altijd het oneens zijn met tegenstanders"
                  },
                  {
                        en: "Negating all suggestions",
                        es: "Negar todas las sugerencias",
                        de: "Alle Vorschläge negieren",
                        nl: "Alle suggesties negeren"
                  },
                  {
                        en: "Refusing to make inferences",
                        es: "Negarse a hacer inferencias",
                        de: "Sich weigern, Schlussfolgerungen zu ziehen",
                        nl: "Weigeren inferenties te maken"
                  }
            ],
            correct: 0,
            explanation: {
                  en: "Negation inference recognizes that negative information (cards players cannot have) is equally powerful as positive information (cards they definitely have). When Player A can't disprove a suggestion, you learn they don't have ANY of those three cards - powerful negative information. Tracking negative information allows you to solve through elimination: if you know Player B doesn't have cards X, Y, Z, A, B, C, then they must have one of the remaining few cards in that category. Expert players maintain both positive and negative information matrices, often solving cases through negative inference when positive evidence is sparse.",
                  es: "La inferencia de negación reconoce que la información negativa (cartas que los jugadores no pueden tener) es igualmente poderosa que la información positiva (cartas que definitivamente tienen). Cuando el Jugador A no puede refutar una sugerencia, aprendes que no tiene NINGUNA de esas tres cartas - información negativa poderosa. Rastrear información negativa te permite resolver mediante eliminación: si sabes que el Jugador B no tiene las cartas X, Y, Z, A, B, C, entonces debe tener una de las pocas cartas restantes en esa categoría. Los jugadores expertos mantienen matrices de información tanto positiva como negativa, a menudo resolviendo casos mediante inferencia negativa cuando la evidencia positiva es escasa.",
                  de: "Negationsinferenz erkennt, dass negative Informationen (Karten, die Spieler nicht haben können) genauso mächtig sind wie positive Informationen (Karten, die sie definitiv haben). Wenn Spieler A einen Vorschlag nicht widerlegen kann, lernen Sie, dass er KEINE dieser drei Karten hat - mächtige negative Information. Das Verfolgen negativer Informationen ermöglicht es Ihnen, durch Eliminierung zu lösen: Wenn Sie wissen, dass Spieler B die Karten X, Y, Z, A, B, C nicht hat, muss er eine der verbleibenden wenigen Karten in dieser Kategorie haben. Experten pflegen sowohl positive als auch negative Informationsmatrizen und lösen Fälle oft durch negative Inferenz, wenn positive Beweise spärlich sind.",
                  nl: "Negatie-inferentie erkent dat negatieve informatie (kaarten die spelers niet kunnen hebben) even krachtig is als positieve informatie (kaarten die ze zeker hebben). Wanneer Speler A een suggestie niet kan weerleggen, leer je dat ze GEEN van die drie kaarten hebben - krachtige negatieve informatie. Negatieve informatie volgen stelt je in staat om door eliminatie op te lossen: als je weet dat Speler B kaarten X, Y, Z, A, B, C niet heeft, dan moeten ze een van de resterende weinige kaarten in die categorie hebben. Expert spelers onderhouden zowel positieve als negatieve informatiematrices, vaak gevallen oplossend door negatieve inferentie wanneer positief bewijs schaars is."
            }
      },
      {
            question: {
                  en: "What is 'constraint satisfaction solving' in Cluedo context?",
                  es: "¿Qué es la 'resolución de satisfacción de restricciones' en el contexto de Cluedo?",
                  de: "Was ist 'Constraint-Satisfaction-Lösung' im Cluedo-Kontext?",
                  nl: "Wat is 'beperking tevredenheid oplossen' in Cluedo context?"
            },
            options: [
                  {
                        en: "Finding card distributions that satisfy all observed constraints simultaneously",
                        es: "Encontrar distribuciones de cartas que satisfagan todas las restricciones observadas simultáneamente",
                        de: "Kartenverteilungen finden, die alle beobachteten Einschränkungen gleichzeitig erfüllen",
                        nl: "Kaartverdelingen vinden die alle waargenomen beperkingen tegelijkertijd voldoen"
                  },
                  {
                        en: "Making everyone happy",
                        es: "Hacer felices a todos",
                        de: "Alle glücklich machen",
                        nl: "Iedereen tevreden maken"
                  },
                  {
                        en: "Meeting time constraints",
                        es: "Cumplir con restricciones de tiempo",
                        de: "Zeitbeschränkungen einhalten",
                        nl: "Tijdsbeperkingen naleven"
                  },
                  {
                        en: "Following all game rules perfectly",
                        es: "Seguir todas las reglas del juego perfectamente",
                        de: "Alle Spielregeln perfekt befolgen",
                        nl: "Alle spelregels perfect volgen"
                  }
            ],
            correct: 0,
            explanation: {
                  en: "Constraint satisfaction solving treats Cluedo as a constraint satisfaction problem where each observation creates a constraint. For example: 'Player A showed a card for suggestion Plum/Knife/Hall' creates constraint 'A has (Plum OR Knife OR Hall)'. Expert players maintain sets of constraints and look for combinations that satisfy all simultaneously. When only one card distribution satisfies all constraints, you've solved the puzzle definitively. This formal approach is more rigorous than intuitive deduction and can reveal solutions that aren't obvious, especially in complex multi-player games with many interacting constraints.",
                  es: "La resolución de satisfacción de restricciones trata a Cluedo como un problema de satisfacción de restricciones donde cada observación crea una restricción. Por ejemplo: 'El Jugador A mostró una carta para la sugerencia Plum/Cuchillo/Vestíbulo' crea la restricción 'A tiene (Plum O Cuchillo O Vestíbulo)'. Los jugadores expertos mantienen conjuntos de restricciones y buscan combinaciones que satisfagan todas simultáneamente. Cuando solo una distribución de cartas satisface todas las restricciones, has resuelto el rompecabezas definitivamente. Este enfoque formal es más riguroso que la deducción intuitiva y puede revelar soluciones que no son obvias, especialmente en juegos multi-jugador complejos con muchas restricciones que interactúan.",
                  de: "Constraint-Satisfaction-Lösung behandelt Cluedo als Constraint-Satisfaction-Problem, bei dem jede Beobachtung eine Einschränkung erzeugt. Zum Beispiel: 'Spieler A zeigte eine Karte für Vorschlag Plum/Messer/Halle' erzeugt Einschränkung 'A hat (Plum ODER Messer ODER Halle)'. Experten pflegen Sätze von Einschränkungen und suchen nach Kombinationen, die alle gleichzeitig erfüllen. Wenn nur eine Kartenverteilung alle Einschränkungen erfüllt, haben Sie das Puzzle definitiv gelöst. Dieser formale Ansatz ist rigoroser als intuitive Deduktion und kann Lösungen offenbaren, die nicht offensichtlich sind, besonders in komplexen Mehrspieler-Spielen mit vielen interagierenden Einschränkungen.",
                  nl: "Beperking tevredenheid oplossen behandelt Cluedo als een beperking tevredenheid probleem waar elke observatie een beperking creëert. Bijvoorbeeld: 'Speler A toonde een kaart voor suggestie Plum/Mes/Hal' creëert beperking 'A heeft (Plum OF Mes OF Hal)'. Expert spelers onderhouden sets van beperkingen en zoeken naar combinaties die alle tegelijkertijd voldoen. Wanneer slechts één kaartverdeling alle beperkingen voldoet, heb je de puzzel definitief opgelost. Deze formele aanpak is rigoreuzer dan intuïtieve deductie en kan oplossingen onthullen die niet voor de hand liggend zijn, vooral in complexe multi-speler spellen met veel interagerende beperkingen."
            }
      },
      {
            question: {
                  en: "What is the 'perfect information asymmetry' in Cluedo?",
                  es: "¿Qué es la 'asimetría de información perfecta' en Cluedo?",
                  de: "Was ist die 'perfekte Informationsasymmetrie' in Cluedo?",
                  nl: "Wat is de 'perfecte informatie asymmetrie' in Cluedo?"
            },
            options: [
                  {
                        en: "You know your cards perfectly but must deduce opponents' cards from imperfect information",
                        es: "Conoces tus cartas perfectamente pero debes deducir las cartas de los oponentes de información imperfecta",
                        de: "Sie kennen Ihre Karten perfekt, müssen aber Gegnerkarten aus unvollständigen Informationen ableiten",
                        nl: "Je kent je kaarten perfect maar moet kaarten van tegenstanders afleiden uit imperfecte informatie"
                  },
                  {
                        en: "Some players get more cards than others",
                        es: "Algunos jugadores obtienen más cartas que otros",
                        de: "Manche Spieler bekommen mehr Karten als andere",
                        nl: "Sommige spelers krijgen meer kaarten dan anderen"
                  },
                  {
                        en: "Information is distributed randomly",
                        es: "La información se distribuye al azar",
                        de: "Information wird zufällig verteilt",
                        nl: "Informatie wordt willekeurig verdeeld"
                  },
                  {
                        en: "Everyone has perfect information",
                        es: "Todos tienen información perfecta",
                        de: "Jeder hat perfekte Information",
                        nl: "Iedereen heeft perfecte informatie"
                  }
            ],
            correct: 0,
            explanation: {
                  en: "Perfect information asymmetry describes the fundamental structure of Cluedo: you have complete, certain knowledge of your own cards (perfect information about part of the game state), but must infer opponents' cards and the solution through probabilistic reasoning and deduction (imperfect information). This asymmetry creates the game's strategic depth. Expert players leverage their perfect knowledge by using it to interpret imperfect information efficiently - for example, when someone shows a card from a suggestion you made, your perfect knowledge of your own cards immediately narrows which card they showed.",
                  es: "La asimetría de información perfecta describe la estructura fundamental de Cluedo: tienes conocimiento completo y seguro de tus propias cartas (información perfecta sobre parte del estado del juego), pero debes inferir las cartas de los oponentes y la solución mediante razonamiento probabilístico y deducción (información imperfecta). Esta asimetría crea la profundidad estratégica del juego. Los jugadores expertos aprovechan su conocimiento perfecto usándolo para interpretar información imperfecta eficientemente - por ejemplo, cuando alguien muestra una carta de una sugerencia que hiciste, tu conocimiento perfecto de tus propias cartas inmediatamente reduce qué carta mostraron.",
                  de: "Perfekte Informationsasymmetrie beschreibt die grundlegende Struktur von Cluedo: Sie haben vollständiges, sicheres Wissen über Ihre eigenen Karten (perfekte Information über einen Teil des Spielzustands), müssen aber Gegnerkarten und die Lösung durch probabilistisches Denken und Deduktion ableiten (unvollständige Information). Diese Asymmetrie schafft die strategische Tiefe des Spiels. Experten nutzen ihr perfektes Wissen, indem sie es verwenden, um unvollständige Informationen effizient zu interpretieren - zum Beispiel, wenn jemand eine Karte aus einem Vorschlag zeigt, den Sie gemacht haben, grenzt Ihr perfektes Wissen über Ihre eigenen Karten sofort ein, welche Karte sie zeigten.",
                  nl: "Perfecte informatie asymmetrie beschrijft de fundamentele structuur van Cluedo: je hebt complete, zekere kennis van je eigen kaarten (perfecte informatie over deel van de spelstaat), maar moet kaarten van tegenstanders en de oplossing afleiden door probabilistisch redeneren en deductie (imperfecte informatie). Deze asymmetrie creëert de strategische diepte van het spel. Expert spelers benutten hun perfecte kennis door het te gebruiken om imperfecte informatie efficiënt te interpreteren - bijvoorbeeld, wanneer iemand een kaart toont van een suggestie die je deed, beperkt je perfecte kennis van je eigen kaarten onmiddellijk welke kaart ze toonden."
            }
      },
      {
            question: {
                  en: "What is 'endgame precision maximization'?",
                  es: "¿Qué es la 'maximización de precisión de final de juego'?",
                  de: "Was ist 'Endspiel-Präzisionsmaximierung'?",
                  nl: "Wat is 'eindspel precisie maximalisatie'?"
            },
            options: [
                  {
                        en: "Making final suggestions to confirm last uncertainties before accusing",
                        es: "Hacer sugerencias finales para confirmar las últimas incertidumbres antes de acusar",
                        de: "Abschließende Vorschläge machen, um letzte Unsicherheiten vor der Anklage zu bestätigen",
                        nl: "Laatste suggesties doen om laatste onzekerheden te bevestigen voor beschuldigen"
                  },
                  {
                        en: "Playing perfectly from the start",
                        es: "Jugar perfectamente desde el principio",
                        de: "Von Anfang an perfekt spielen",
                        nl: "Perfect spelen vanaf het begin"
                  },
                  {
                        en: "Measuring the game board accurately",
                        es: "Medir el tablero del juego con precisión",
                        de: "Das Spielbrett genau vermessen",
                        nl: "Het spelbord nauwkeurig meten"
                  },
                  {
                        en: "Ending the game as quickly as possible",
                        es: "Terminar el juego lo más rápido posible",
                        de: "Das Spiel so schnell wie möglich beenden",
                        nl: "Het spel zo snel mogelijk beëindigen"
                  }
            ],
            correct: 0,
            explanation: {
                  en: "Endgame precision maximization is the practice of using your final suggestion(s) before accusing to eliminate remaining doubt. When you're down to 2-3 possible solutions, rather than guessing, you make a carefully crafted suggestion that will distinguish between the possibilities. For example, if unsure whether the solution is (Plum/Knife/Hall) or (Plum/Rope/Hall), suggest 'Plum/Knife/Study'. If no one can disprove it, Knife is likely in solution. If someone shows Knife, Rope is in solution. This final verification step separates expert players from good players - experts rarely guess.",
                  es: "La maximización de precisión de final de juego es la práctica de usar tu(s) sugerencia(s) final(es) antes de acusar para eliminar la duda restante. Cuando te quedan 2-3 soluciones posibles, en lugar de adivinar, haces una sugerencia cuidadosamente elaborada que distinguirá entre las posibilidades. Por ejemplo, si no estás seguro de si la solución es (Plum/Cuchillo/Vestíbulo) o (Plum/Cuerda/Vestíbulo), sugiere 'Plum/Cuchillo/Estudio'. Si nadie puede refutarlo, el Cuchillo probablemente esté en la solución. Si alguien muestra el Cuchillo, la Cuerda está en la solución. Este paso de verificación final separa a los jugadores expertos de los buenos jugadores - los expertos rara vez adivinan.",
                  de: "Endspiel-Präzisionsmaximierung ist die Praxis, Ihre letzte(n) Vorschlag/Vorschläge vor der Anklage zu verwenden, um verbleibende Zweifel zu eliminieren. Wenn Sie auf 2-3 mögliche Lösungen reduziert sind, raten Sie nicht, sondern machen einen sorgfältig gestalteten Vorschlag, der zwischen den Möglichkeiten unterscheiden wird. Zum Beispiel, wenn unsicher, ob die Lösung (Plum/Messer/Halle) oder (Plum/Seil/Halle) ist, schlagen Sie 'Plum/Messer/Arbeitszimmer' vor. Wenn niemand es widerlegen kann, ist Messer wahrscheinlich in der Lösung. Wenn jemand Messer zeigt, ist Seil in der Lösung. Dieser finale Verifikationsschritt trennt Experten von guten Spielern - Experten raten selten.",
                  nl: "Eindspel precisie maximalisatie is de praktijk van je laatste suggestie(s) voor beschuldigen gebruiken om resterende twijfel te elimineren. Wanneer je bent teruggebracht tot 2-3 mogelijke oplossingen, in plaats van gokken, doe je een zorgvuldig vervaardigde suggestie die zal onderscheiden tussen de mogelijkheden. Bijvoorbeeld, als onzeker of de oplossing (Plum/Mes/Hal) of (Plum/Touw/Hal) is, stel 'Plum/Mes/Studeerkamer' voor. Als niemand het kan weerleggen, is Mes waarschijnlijk in oplossing. Als iemand Mes toont, is Touw in oplossing. Deze finale verificatiestap scheidt expert spelers van goede spelers - experts gokken zelden."
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
    module.exports = level5;
  } else if (typeof window !== 'undefined') {
    window.level5 = level5;
  }
})();
