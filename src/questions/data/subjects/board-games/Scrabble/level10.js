(function() {
  const level10 = [
    {
      question: {
        en: "In computational Scrabble analysis, what is the 'branching factor' problem?",
        es: "En análisis computacional de Scrabble, ¿cuál es el problema del 'factor de ramificación'?",
        de: "Was ist im rechnergestützten Scrabble-Analyse das 'Verzweigungsfaktor'-Problem?",
        nl: "Wat is het 'vertakkingsfactor' probleem in computationele Scrabble analyse?"
      },
      options: [
        {
          en: "Exponential growth of possible moves makes complete analysis impossible",
          es: "El crecimiento exponencial de movimientos posibles hace imposible el análisis completo",
          de: "Exponentielles Wachstum möglicher Züge macht vollständige Analyse unmöglich",
          nl: "Exponentiële groei van mogelijke zetten maakt volledige analyse onmogelijk"
        },
        {
          en: "Trees branch too much during tournaments",
          es: "Los árboles se ramifican demasiado durante torneos",
          de: "Bäume verzweigen sich zu stark während Turnieren",
          nl: "Bomen vertakken te veel tijdens toernooien"
        },
        {
          en: "Board splits into multiple sections",
          es: "El tablero se divide en múltiples secciones",
          de: "Brett teilt sich in mehrere Abschnitte",
          nl: "Bord splitst in meerdere secties"
        },
        {
          en: "Players branch out to different strategies",
          es: "Los jugadores se ramifican a diferentes estrategias",
          de: "Spieler verzweigen sich zu verschiedenen Strategien",
          nl: "Spelers vertakken naar verschillende strategieën"
        }
      ],
      correct: 0,
      explanation: {
        en: "The branching factor in Scrabble averages 1000+ legal moves per turn, making complete game-tree search computationally intractable even for supercomputers.",
        es: "El factor de ramificación en Scrabble promedia 1000+ movimientos legales por turno, haciendo la búsqueda completa del árbol de juego computacionalmente intratable incluso para supercomputadoras.",
        de: "Der Verzweigungsfaktor in Scrabble beträgt durchschnittlich 1000+ legale Züge pro Runde, was die vollständige Spielbaum-Suche selbst für Supercomputer rechnerisch unlösbar macht.",
        nl: "De vertakkingsfactor in Scrabble bedraagt gemiddeld 1000+ legale zetten per beurt, waardoor complete spelboombeoordeling computationeel onbereikbaar is zelfs voor supercomputers."
      }
    },
    {
      question: {
        en: "What is the 'unseen tile distribution' uncertainty principle in endgame theory?",
        es: "¿Cuál es el principio de incertidumbre de 'distribución de fichas no vistas' en teoría de final de juego?",
        de: "Was ist das 'ungesehene Stein-Verteilungs'-Unsicherheitsprinzip in der Endspiel-Theorie?",
        nl: "Wat is het 'ongeziene steen verdeling' onzekerheidsprincipe in eindspel theorie?"
      },
      options: [
        {
          en: "Perfect play requires probabilistic analysis across all tile distributions",
          es: "El juego perfecto requiere análisis probabilístico a través de todas las distribuciones de fichas",
          de: "Perfektes Spiel erfordert probabilistische Analyse über alle Stein-Verteilungen",
          nl: "Perfect spel vereist probabilistische analyse over alle steen verdelingen"
        },
        {
          en: "Tiles are uncertain about their position",
          es: "Las fichas son inciertas sobre su posición",
          de: "Steine sind unsicher über ihre Position",
          nl: "Stenen zijn onzeker over hun positie"
        },
        {
          en: "Distribution of tiles is random",
          es: "La distribución de fichas es aleatoria",
          de: "Verteilung der Steine ist zufällig",
          nl: "Verdeling van stenen is willekeurig"
        },
        {
          en: "Players can't see all tiles clearly",
          es: "Los jugadores no pueden ver todas las fichas claramente",
          de: "Spieler können nicht alle Steine klar sehen",
          nl: "Spelers kunnen niet alle stenen duidelijk zien"
        }
      ],
      correct: 0,
      explanation: {
        en: "Since you don't know exact opponent rack or bag order, optimal play requires computing expected value across all possible tile distributions weighted by probability.",
        es: "Dado que no conoces el rack exacto del oponente o el orden de la bolsa, el juego óptimo requiere calcular el valor esperado a través de todas las distribuciones de fichas posibles ponderadas por probabilidad.",
        de: "Da Sie das genaue Gegner-Rack oder die Beutelreihenfolge nicht kennen, erfordert optimales Spiel die Berechnung des Erwartungswerts über alle möglichen Stein-Verteilungen gewichtet nach Wahrscheinlichkeit.",
        nl: "Aangezien je de exacte rek van tegenstander of zakorde niet kent, vereist optimaal spel het berekenen van verwachte waarde over alle mogelijke steen verdelingen gewogen naar waarschijnlijkheid."
      }
    },
    {
      question: {
        en: "What is 'quackle simulation depth' and why does it matter?",
        es: "¿Qué es la 'profundidad de simulación quackle' y por qué importa?",
        de: "Was ist 'Quackle-Simulationstiefe' und warum ist sie wichtig?",
        nl: "Wat is 'quackle simulatie diepte' en waarom is het belangrijk?"
      },
      options: [
        {
          en: "Number of plies ahead simulated affects move evaluation accuracy",
          es: "El número de jugadas por delante simuladas afecta la precisión de evaluación de movimiento",
          de: "Anzahl der voraus simulierten Züge beeinflusst Genauigkeit der Zug-Bewertung",
          nl: "Aantal lagen vooruit gesimuleerd beïnvloedt nauwkeurigheid van zet evaluatie"
        },
        {
          en: "How deep the duck sounds in Quackle software",
          es: "Qué tan profundo suena el pato en el software Quackle",
          de: "Wie tief die Ente in der Quackle-Software klingt",
          nl: "Hoe diep de eend klinkt in Quackle software"
        },
        {
          en: "Depth of game analysis history stored",
          es: "Profundidad del historial de análisis de juego almacenado",
          de: "Tiefe der gespeicherten Spielanalyse-Historie",
          nl: "Diepte van opgeslagen spel analyse geschiedenis"
        },
        {
          en: "Level of dictionary search depth",
          es: "Nivel de profundidad de búsqueda de diccionario",
          de: "Ebene der Wörterbuch-Suchtiefe",
          nl: "Niveau van woordenboek zoek diepte"
        }
      ],
      correct: 0,
      explanation: {
        en: "Simulation depth (plies ahead) critically affects accuracy: shallow simulations miss long-term equity, deep simulations are computationally expensive. 2-4 ply typical.",
        es: "La profundidad de simulación (jugadas por delante) afecta críticamente la precisión: simulaciones superficiales pierden equidad a largo plazo, simulaciones profundas son computacionalmente costosas. 2-4 ply típico.",
        de: "Simulationstiefe (Züge voraus) beeinflusst die Genauigkeit kritisch: flache Simulationen verpassen langfristige Equity, tiefe Simulationen sind rechnerisch teuer. 2-4 Züge typisch.",
        nl: "Simulatie diepte (lagen vooruit) beïnvloedt nauwkeurigheid kritisch: ondiepe simulaties missen langetermijn equity, diepe simulaties zijn computationeel duur. 2-4 lagen typisch."
      }
    },
    {
      question: {
        en: "What is the theoretical maximum number of 7-letter bingos in a single game?",
        es: "¿Cuál es el número máximo teórico de bingos de 7 letras en un solo juego?",
        de: "Was ist die theoretische Maximumanzahl von 7-Buchstaben-Bingos in einem einzelnen Spiel?",
        nl: "Wat is het theoretische maximum aantal 7-letter bingo's in een enkel spel?"
      },
      options: [
        {
          en: "18 bingos (both players alternating with perfect draws)",
          es: "18 bingos (ambos jugadores alternando con sacadas perfectas)",
          de: "18 Bingos (beide Spieler abwechselnd mit perfekten Ziehungen)",
          nl: "18 bingo's (beide spelers afwisselend met perfecte trekkingen)"
        },
        {
          en: "14 bingos (100 tiles ÷ 7 letters)",
          es: "14 bingos (100 fichas ÷ 7 letras)",
          de: "14 Bingos (100 Steine ÷ 7 Buchstaben)",
          nl: "14 bingo's (100 stenen ÷ 7 letters)"
        },
        {
          en: "28 bingos (entire tile set used twice)",
          es: "28 bingos (conjunto completo de fichas usado dos veces)",
          de: "28 Bingos (gesamtes Steinsatz zweimal verwendet)",
          nl: "28 bingo's (hele steen set tweemaal gebruikt)"
        },
        {
          en: "10 bingos (5 per player maximum)",
          es: "10 bingos (5 por jugador máximo)",
          de: "10 Bingos (5 pro Spieler Maximum)",
          nl: "10 bingo's (5 per speler maximum)"
        }
      ],
      correct: 0,
      explanation: {
        en: "With perfect tile draws and board positioning, 18 seven-letter bingos is theoretically possible (9 per player), though never achieved in actual play.",
        es: "Con sacadas perfectas de fichas y posicionamiento del tablero, 18 bingos de siete letras es teóricamente posible (9 por jugador), aunque nunca logrado en juego real.",
        de: "Mit perfekten Stein-Ziehungen und Brett-Positionierung sind 18 Sieben-Buchstaben-Bingos theoretisch möglich (9 pro Spieler), obwohl nie im tatsächlichen Spiel erreicht.",
        nl: "Met perfecte steen trekkingen en bord positionering zijn 18 zeven-letter bingo's theoretisch mogelijk (9 per speler), hoewel nooit bereikt in werkelijk spel."
      }
    },
    {
      question: {
        en: "In expert play, what is 'move valuation variance' and why minimize it?",
        es: "En juego experto, ¿qué es la 'varianza de valoración de movimiento' y por qué minimizarla?",
        de: "Was ist im Expertenspiel 'Zug-Bewertungs-Varianz' und warum sie minimieren?",
        nl: "Wat is 'zet waardering variantie' in expert spel en waarom minimaliseren?"
      },
      options: [
        {
          en: "High-variance moves risk large equity swings; consistent equity preferred",
          es: "Movimientos de alta varianza arriesgan grandes oscilaciones de equidad; equidad consistente preferida",
          de: "Hochvarianz-Züge riskieren große Equity-Schwankungen; konsistente Equity bevorzugt",
          nl: "Hoge-variantie zetten riskeren grote equity schommelingen; consistente equity geprefereerd"
        },
        {
          en: "Moves should vary to confuse opponent",
          es: "Los movimientos deben variar para confundir al oponente",
          de: "Züge sollten variieren um Gegner zu verwirren",
          nl: "Zetten moeten variëren om tegenstander te verwarren"
        },
        {
          en: "Point values fluctuate too much",
          es: "Los valores de puntos fluctúan demasiado",
          de: "Punktwerte schwanken zu stark",
          nl: "Puntwaarden fluctueren te veel"
        },
        {
          en: "Different players value moves differently",
          es: "Diferentes jugadores valoran movimientos de manera diferente",
          de: "Verschiedene Spieler bewerten Züge unterschiedlich",
          nl: "Verschillende spelers waarderen zetten verschillend"
        }
      ],
      correct: 0,
      explanation: {
        en: "High-variance moves (like fishing) may have same expected value but risk large equity loss. Top players prefer consistent equity maximization over risky variance.",
        es: "Movimientos de alta varianza (como pescar) pueden tener el mismo valor esperado pero arriesgan gran pérdida de equidad. Los mejores jugadores prefieren maximización de equidad consistente sobre varianza arriesgada.",
        de: "Hochvarianz-Züge (wie Fishing) können denselben Erwartungswert haben aber riskieren großen Equity-Verlust. Top-Spieler bevorzugen konsistente Equity-Maximierung über riskante Varianz.",
        nl: "Hoge-variantie zetten (zoals vissen) kunnen dezelfde verwachte waarde hebben maar riskeren groot equity verlies. Top spelers prefereren consistente equity maximalisatie over riskante variantie."
      }
    },
    {
      question: {
        en: "What is 'rack synergy analysis' in computational play?",
        es: "¿Qué es el 'análisis de sinergia de rack' en juego computacional?",
        de: "Was ist 'Rack-Synergie-Analyse' im rechnergestützten Spiel?",
        nl: "Wat is 'rek synergie analyse' in computationeel spel?"
      },
      options: [
        {
          en: "Evaluating how remaining tiles work together for future plays",
          es: "Evaluar cómo las fichas restantes funcionan juntas para jugadas futuras",
          de: "Bewertung wie verbleibende Steine für zukünftige Züge zusammenarbeiten",
          nl: "Evalueren hoe resterende stenen samenwerken voor toekomstige zetten"
        },
        {
          en: "Physical arrangement of tiles on rack",
          es: "Disposición física de fichas en el rack",
          de: "Physische Anordnung der Steine auf dem Rack",
          nl: "Fysieke rangschikking van stenen op rek"
        },
        {
          en: "Cooperation between two players",
          es: "Cooperación entre dos jugadores",
          de: "Zusammenarbeit zwischen zwei Spielern",
          nl: "Samenwerking tussen twee spelers"
        },
        {
          en: "Combining multiple racks together",
          es: "Combinar múltiples racks juntos",
          de: "Mehrere Racks zusammenfügen",
          nl: "Meerdere rekken combineren"
        }
      ],
      correct: 0,
      explanation: {
        en: "Rack synergy measures how well tiles complement each other (e.g., AEINRT has high synergy). Leave analysis considers synergy, not just individual tile values.",
        es: "La sinergia de rack mide qué tan bien las fichas se complementan entre sí (ej., AEINRT tiene alta sinergia). El análisis de dejar considera sinergia, no solo valores de fichas individuales.",
        de: "Rack-Synergie misst wie gut Steine sich ergänzen (z.B. AEINRT hat hohe Synergie). Leave-Analyse berücksichtigt Synergie, nicht nur einzelne Steinwerte.",
        nl: "Rek synergie meet hoe goed stenen elkaar aanvullen (bijv. AEINRT heeft hoge synergie). Leave analyse beschouwt synergie, niet alleen individuele steen waarden."
      }
    },
    {
      question: {
        en: "What is the 'pre-endgame transition point' in tournament strategy?",
        es: "¿Cuál es el 'punto de transición pre-final de juego' en estrategia de torneo?",
        de: "Was ist der 'Vor-Endspiel-Übergangspunkt' in der Turnierstrategie?",
        nl: "Wat is het 'voor-eindspel transitiepunt' in toernooi strategie?"
      },
      options: [
        {
          en: "When bag has ~7 tiles left and strategy shifts to endgame calculation",
          es: "Cuando la bolsa tiene ~7 fichas restantes y la estrategia cambia a cálculo de final de juego",
          de: "Wenn Beutel ~7 Steine übrig hat und Strategie zu Endspiel-Berechnung wechselt",
          nl: "Wanneer zak ~7 stenen over heeft en strategie verschuift naar eindspel berekening"
        },
        {
          en: "Halfway point in tournament schedule",
          es: "Punto medio en el calendario del torneo",
          de: "Halbzeitpunkt im Turnierplan",
          nl: "Halverwege punt in toernooi schema"
        },
        {
          en: "When first player reaches 300 points",
          es: "Cuando el primer jugador alcanza 300 puntos",
          de: "Wenn erster Spieler 300 Punkte erreicht",
          nl: "Wanneer eerste speler 300 punten bereikt"
        },
        {
          en: "Before tournament finals begin",
          es: "Antes de que comiencen las finales del torneo",
          de: "Bevor Turnierfinale beginnen",
          nl: "Voordat toernooi finales beginnen"
        }
      ],
      correct: 0,
      explanation: {
        en: "Pre-endgame begins when bag has ~7 tiles left. Strategy shifts from probabilistic simulation to deterministic calculation as tile uncertainty reduces.",
        es: "El pre-final de juego comienza cuando la bolsa tiene ~7 fichas restantes. La estrategia cambia de simulación probabilística a cálculo determinístico a medida que se reduce la incertidumbre de fichas.",
        de: "Vor-Endspiel beginnt wenn Beutel ~7 Steine übrig hat. Strategie wechselt von probabilistischer Simulation zu deterministischer Berechnung wenn Stein-Unsicherheit abnimmt.",
        nl: "Voor-eindspel begint wanneer zak ~7 stenen over heeft. Strategie verschuift van probabilistische simulatie naar deterministische berekening naarmate steen onzekerheid afneemt."
      }
    },
    {
      question: {
        en: "What is 'challenge-and-play' game theory optimal strategy?",
        es: "¿Cuál es la estrategia óptima de teoría de juegos 'desafiar-y-jugar'?",
        de: "Was ist die spieltheoretisch optimale 'Herausfordern-und-Spielen'-Strategie?",
        nl: "Wat is 'uitdagen-en-spelen' speltheorie optimale strategie?"
      },
      options: [
        {
          en: "Challenge when phoniness probability exceeds equity loss divided by challenge penalty",
          es: "Desafiar cuando la probabilidad de falsedad excede la pérdida de equidad dividida por penalización de desafío",
          de: "Herausfordern wenn Falschheits-Wahrscheinlichkeit Equity-Verlust geteilt durch Herausforderungs-Strafe übersteigt",
          nl: "Uitdagen wanneer vals-waarschijnlijkheid equity verlies gedeeld door uitdaag straf overschrijdt"
        },
        {
          en: "Always challenge suspicious words",
          es: "Siempre desafiar palabras sospechosas",
          de: "Immer verdächtige Wörter herausfordern",
          nl: "Altijd verdachte woorden uitdagen"
        },
        {
          en: "Never challenge to avoid penalties",
          es: "Nunca desafiar para evitar penalizaciones",
          de: "Nie herausfordern um Strafen zu vermeiden",
          nl: "Nooit uitdagen om straffen te vermijden"
        },
        {
          en: "Challenge based on opponent's skill level",
          es: "Desafiar basado en el nivel de habilidad del oponente",
          de: "Herausfordern basierend auf Gegner-Fähigkeitsniveau",
          nl: "Uitdagen gebaseerd op vaardigheids niveau van tegenstander"
        }
      ],
      correct: 0,
      explanation: {
        en: "Optimal challenge threshold = P(phoney) > (equity_loss / challenge_penalty). If word costs you 30 equity and wrong challenge costs 5, challenge if >16.7% phoney probability.",
        es: "Umbral de desafío óptimo = P(falso) > (pérdida_equidad / penalización_desafío). Si la palabra te cuesta 30 de equidad y el desafío equivocado cuesta 5, desafía si >16.7% de probabilidad falsa.",
        de: "Optimale Herausforderungs-Schwelle = P(falsch) > (Equity_Verlust / Herausforderungs_Strafe). Wenn Wort 30 Equity kostet und falsche Herausforderung 5 kostet, herausfordern wenn >16,7% Falschheits-Wahrscheinlichkeit.",
        nl: "Optimale uitdaag drempel = P(vals) > (equity_verlies / uitdaag_straf). Als woord je 30 equity kost en verkeerde uitdaging kost 5, uitdagen als >16.7% vals waarschijnlijkheid."
      }
    },
    {
      question: {
        en: "What is 'Monte Carlo rollout depth' in Scrabble engines?",
        es: "¿Qué es la 'profundidad de despliegue de Monte Carlo' en motores de Scrabble?",
        de: "Was ist 'Monte-Carlo-Rollout-Tiefe' in Scrabble-Engines?",
        nl: "Wat is 'Monte Carlo rollout diepte' in Scrabble engines?"
      },
      options: [
        {
          en: "Number of random simulations run to evaluate move expected value",
          es: "Número de simulaciones aleatorias ejecutadas para evaluar el valor esperado del movimiento",
          de: "Anzahl zufälliger Simulationen zur Bewertung des Erwartungswerts des Zugs",
          nl: "Aantal willekeurige simulaties uitgevoerd om verwachte waarde van zet te evalueren"
        },
        {
          en: "Geographic depth of Monte Carlo tournament",
          es: "Profundidad geográfica del torneo de Monte Carlo",
          de: "Geografische Tiefe des Monte-Carlo-Turniers",
          nl: "Geografische diepte van Monte Carlo toernooi"
        },
        {
          en: "Depth of analysis history stored",
          es: "Profundidad del historial de análisis almacenado",
          de: "Tiefe der gespeicherten Analyse-Historie",
          nl: "Diepte van opgeslagen analyse geschiedenis"
        },
        {
          en: "Number of players in simulation",
          es: "Número de jugadores en simulación",
          de: "Anzahl der Spieler in Simulation",
          nl: "Aantal spelers in simulatie"
        }
      ],
      correct: 0,
      explanation: {
        en: "Monte Carlo rollout runs thousands of random game simulations from current position to estimate each move's expected value. More simulations = better accuracy but slower.",
        es: "El despliegue de Monte Carlo ejecuta miles de simulaciones de juego aleatorias desde la posición actual para estimar el valor esperado de cada movimiento. Más simulaciones = mejor precisión pero más lento.",
        de: "Monte-Carlo-Rollout führt Tausende zufälliger Spiel-Simulationen von der aktuellen Position aus durch um den Erwartungswert jedes Zugs zu schätzen. Mehr Simulationen = bessere Genauigkeit aber langsamer.",
        nl: "Monte Carlo rollout voert duizenden willekeurige spel simulaties uit vanaf huidige positie om verwachte waarde van elke zet te schatten. Meer simulaties = betere nauwkeurigheid maar langzamer."
      }
    },
    {
      question: {
        en: "What is the 'opening exchange paradox' in competitive theory?",
        es: "¿Cuál es la 'paradoja de intercambio de apertura' en teoría competitiva?",
        de: "Was ist das 'Eröffnungs-Austausch-Paradox' in der Wettbewerbstheorie?",
        nl: "Wat is de 'opening uitwisseling paradox' in competitieve theorie?"
      },
      options: [
        {
          en: "Exchanging tiles on first turn can be optimal despite giving opponent advantage",
          es: "Intercambiar fichas en el primer turno puede ser óptimo a pesar de dar ventaja al oponente",
          de: "Steine im ersten Zug austauschen kann optimal sein trotz Gegner-Vorteil",
          nl: "Stenen uitwisselen bij eerste zet kan optimaal zijn ondanks tegenstander voordeel geven"
        },
        {
          en: "Opening moves are always exchanges",
          es: "Los movimientos de apertura siempre son intercambios",
          de: "Eröffnungszüge sind immer Austausche",
          nl: "Openings zetten zijn altijd uitwisselingen"
        },
        {
          en: "Players paradoxically want same opening",
          es: "Los jugadores paradójicamente quieren la misma apertura",
          de: "Spieler wollen paradoxerweise dieselbe Eröffnung",
          nl: "Spelers willen paradoxaal genoeg dezelfde opening"
        },
        {
          en: "Exchange rules are contradictory",
          es: "Las reglas de intercambio son contradictorias",
          de: "Austausch-Regeln sind widersprüchlich",
          nl: "Uitwisseling regels zijn tegenstrijdig"
        }
      ],
      correct: 0,
      explanation: {
        en: "With terrible opening rack (like UUUIOOV), exchanging all tiles can be best play despite conceding first-move advantage, because improved rack equity exceeds position disadvantage.",
        es: "Con rack de apertura terrible (como UUUIOOV), intercambiar todas las fichas puede ser la mejor jugada a pesar de ceder la ventaja del primer movimiento, porque la equidad del rack mejorado excede la desventaja de posición.",
        de: "Mit schrecklichem Eröffnungs-Rack (wie UUUIOOV) kann Austausch aller Steine der beste Zug sein trotz Abgabe des Ersteröffnungs-Vorteils, weil verbesserte Rack-Equity Positions-Nachteil übersteigt.",
        nl: "Met verschrikkelijk opening rek (zoals UUUIOOV) kan uitwisselen van alle stenen beste zet zijn ondanks afstand doen van eerste-zet voordeel, omdat verbeterde rek equity positie nadeel overschrijdt."
      }
    },
    {
      question: {
        en: "What is 'positional equity sacrifice' in advanced endgame play?",
        es: "¿Qué es el 'sacrificio de equidad posicional' en juego avanzado de final de juego?",
        de: "Was ist 'Positions-Equity-Opfer' im fortgeschrittenen Endspiel?",
        nl: "Wat is 'positioneel equity offer' in geavanceerd eindspel?"
      },
      options: [
        {
          en: "Accepting fewer points now to control board and guarantee winning endgame",
          es: "Aceptar menos puntos ahora para controlar el tablero y garantizar final de juego ganador",
          de: "Weniger Punkte jetzt akzeptieren um Brett zu kontrollieren und Gewinn-Endspiel zu garantieren",
          nl: "Minder punten nu accepteren om bord te controleren en winnend eindspel te garanderen"
        },
        {
          en: "Sacrificing pieces like chess",
          es: "Sacrificar piezas como en ajedrez",
          de: "Figuren opfern wie im Schach",
          nl: "Stukken offeren zoals schaken"
        },
        {
          en: "Giving up board position completely",
          es: "Renunciar completamente a la posición del tablero",
          de: "Brett-Position vollständig aufgeben",
          nl: "Bord positie volledig opgeven"
        },
        {
          en: "Trading points for time",
          es: "Intercambiar puntos por tiempo",
          de: "Punkte gegen Zeit tauschen",
          nl: "Punten ruilen voor tijd"
        }
      ],
      correct: 0,
      explanation: {
        en: "In close endgames, scoring fewer points but maintaining board control (e.g., blocking bingo lines) can be optimal to ensure you get last play or force opponent to draw bad tiles.",
        es: "En finales de juego ajustados, anotar menos puntos pero mantener el control del tablero (ej., bloqueando líneas de bingo) puede ser óptimo para asegurar que obtienes la última jugada o forzar al oponente a sacar fichas malas.",
        de: "In knappen Endspielen kann weniger Punkte erzielen aber Brett-Kontrolle behalten (z.B. Bingo-Linien blockieren) optimal sein um letzten Zug zu sichern oder Gegner zu zwingen schlechte Steine zu ziehen.",
        nl: "In krappe eindspelen kan minder punten scoren maar bord controle behouden (bijv. bingo lijnen blokkeren) optimaal zijn om laatste zet te verzekeren of tegenstander te dwingen slechte stenen te trekken."
      }
    },
    {
      question: {
        en: "What is the 'static evaluation function' problem in Scrabble AI?",
        es: "¿Cuál es el problema de la 'función de evaluación estática' en IA de Scrabble?",
        de: "Was ist das 'statische Bewertungsfunktion'-Problem in Scrabble-KI?",
        nl: "Wat is het 'statische evaluatie functie' probleem in Scrabble AI?"
      },
      options: [
        {
          en: "No single formula captures all position complexity; requires simulation",
          es: "Ninguna fórmula única captura toda la complejidad de posición; requiere simulación",
          de: "Keine einzelne Formel erfasst alle Positions-Komplexität; erfordert Simulation",
          nl: "Geen enkele formule vangt alle positie complexiteit; vereist simulatie"
        },
        {
          en: "Evaluation functions never change",
          es: "Las funciones de evaluación nunca cambian",
          de: "Bewertungsfunktionen ändern sich nie",
          nl: "Evaluatie functies veranderen nooit"
        },
        {
          en: "Static electricity affects computers",
          es: "La electricidad estática afecta a las computadoras",
          de: "Statische Elektrizität beeinflusst Computer",
          nl: "Statische elektriciteit beïnvloedt computers"
        },
        {
          en: "Functions are too simple to understand",
          es: "Las funciones son demasiado simples para entender",
          de: "Funktionen sind zu einfach um zu verstehen",
          nl: "Functies zijn te simpel om te begrijpen"
        }
      ],
      correct: 0,
      explanation: {
        en: "Unlike chess where material+position formulas work well, Scrabble's tile uncertainty and combinatorial complexity mean static evaluation fails—requires probabilistic simulation instead.",
        es: "A diferencia del ajedrez donde las fórmulas de material+posición funcionan bien, la incertidumbre de fichas y complejidad combinatoria de Scrabble significan que la evaluación estática falla—requiere simulación probabilística en su lugar.",
        de: "Im Gegensatz zu Schach wo Material+Position-Formeln gut funktionieren, bedeuten Scrabbles Stein-Unsicherheit und kombinatorische Komplexität dass statische Bewertung versagt—erfordert stattdessen probabilistische Simulation.",
        nl: "In tegenstelling tot schaken waar materiaal+positie formules goed werken, betekenen Scrabble's steen onzekerheid en combinatorische complexiteit dat statische evaluatie faalt—vereist in plaats daarvan probabilistische simulatie."
      }
    },
    {
      question: {
        en: "What is 'tempo control' in expert tournament play?",
        es: "¿Qué es el 'control de tempo' en juego experto de torneo?",
        de: "Was ist 'Tempo-Kontrolle' im Experten-Turnierspiel?",
        nl: "Wat is 'tempo controle' in expert toernooi spel?"
      },
      options: [
        {
          en: "Managing game speed to control who plays last or to induce errors",
          es: "Gestionar la velocidad del juego para controlar quién juega último o inducir errores",
          de: "Spielgeschwindigkeit verwalten um zu kontrollieren wer zuletzt spielt oder Fehler zu induzieren",
          nl: "Spel snelheid beheren om te controleren wie laatst speelt of fouten te induceren"
        },
        {
          en: "Playing to background music tempo",
          es: "Jugar al tempo de la música de fondo",
          de: "Zum Tempo der Hintergrundmusik spielen",
          nl: "Spelen naar tempo van achtergrond muziek"
        },
        {
          en: "Controlling tournament timing schedule",
          es: "Controlar el horario del torneo",
          de: "Turnierzeitplan kontrollieren",
          nl: "Toernooi tijdschema controleren"
        },
        {
          en: "Speed of tile placement on board",
          es: "Velocidad de colocación de fichas en el tablero",
          de: "Geschwindigkeit der Stein-Platzierung auf Brett",
          nl: "Snelheid van steen plaatsing op bord"
        }
      ],
      correct: 0,
      explanation: {
        en: "Tempo control means managing game pace: playing quickly when ahead to reduce opponent thinking time, or slowing down when behind to induce time pressure errors.",
        es: "El control de tempo significa gestionar el ritmo del juego: jugar rápidamente cuando se está adelante para reducir el tiempo de pensamiento del oponente, o ralentizar cuando se está atrás para inducir errores de presión de tiempo.",
        de: "Tempo-Kontrolle bedeutet Spielgeschwindigkeit verwalten: schnell spielen wenn vorn um Gegner-Denkzeit zu reduzieren, oder verlangsamen wenn hinten um Zeitdruck-Fehler zu induzieren.",
        nl: "Tempo controle betekent spel tempo beheren: snel spelen wanneer voor om denktijd van tegenstander te verminderen, of vertragen wanneer achter om tijdsdruk fouten te induceren."
      }
    },
    {
      question: {
        en: "What is 'parallel bag sampling' in advanced simulation?",
        es: "¿Qué es el 'muestreo paralelo de bolsa' en simulación avanzada?",
        de: "Was ist 'paralleles Beutel-Sampling' in fortgeschrittener Simulation?",
        nl: "Wat is 'parallelle zak bemonstering' in geavanceerde simulatie?"
      },
      options: [
        {
          en: "Simulating multiple bag sequences simultaneously for faster analysis",
          es: "Simular múltiples secuencias de bolsa simultáneamente para análisis más rápido",
          de: "Mehrere Beutel-Sequenzen gleichzeitig simulieren für schnellere Analyse",
          nl: "Meerdere zak sequenties simultaan simuleren voor snellere analyse"
        },
        {
          en: "Using two bags at same time",
          es: "Usar dos bolsas al mismo tiempo",
          de: "Zwei Beutel gleichzeitig verwenden",
          nl: "Twee zakken tegelijk gebruiken"
        },
        {
          en: "Parallel parking with tile bags",
          es: "Estacionamiento paralelo con bolsas de fichas",
          de: "Parallelparken mit Steinbeuteln",
          nl: "Parallel parkeren met steen zakken"
        },
        {
          en: "Testing multiple dictionaries together",
          es: "Probar múltiples diccionarios juntos",
          de: "Mehrere Wörterbücher zusammen testen",
          nl: "Meerdere woordenboeken samen testen"
        }
      ],
      correct: 0,
      explanation: {
        en: "Parallel bag sampling uses multi-threading to simulate thousands of different tile draw sequences simultaneously, dramatically speeding up Monte Carlo evaluation of moves.",
        es: "El muestreo paralelo de bolsa usa multi-threading para simular miles de secuencias de sorteo de fichas diferentes simultáneamente, acelerando dramáticamente la evaluación Monte Carlo de movimientos.",
        de: "Paralleles Beutel-Sampling nutzt Multi-Threading um Tausende verschiedene Stein-Ziehungs-Sequenzen gleichzeitig zu simulieren, was Monte-Carlo-Bewertung von Zügen dramatisch beschleunigt.",
        nl: "Parallelle zak bemonstering gebruikt multi-threading om duizenden verschillende steen trek sequenties simultaan te simuleren, wat Monte Carlo evaluatie van zetten dramatisch versnelt."
      }
    },
    {
      question: {
        en: "What is the 'out-in-two' endgame calculation method?",
        es: "¿Cuál es el método de cálculo de final de juego 'salir-en-dos'?",
        de: "Was ist die 'Raus-in-Zwei'-Endspiel-Berechnungsmethode?",
        nl: "Wat is de 'eruit-in-twee' eindspel berekeningsmethode?"
      },
      options: [
        {
          en: "Determining if you can empty rack in exactly two moves to win",
          es: "Determinar si puedes vaciar el rack en exactamente dos movimientos para ganar",
          de: "Bestimmen ob Sie Rack in genau zwei Zügen leeren können um zu gewinnen",
          nl: "Bepalen of je rek in precies twee zetten kunt legen om te winnen"
        },
        {
          en: "Getting out of tournament in two rounds",
          es: "Salir del torneo en dos rondas",
          de: "Aus Turnier in zwei Runden raus",
          nl: "Uit toernooi in twee rondes"
        },
        {
          en: "Two players going out simultaneously",
          es: "Dos jugadores saliendo simultáneamente",
          de: "Zwei Spieler gehen gleichzeitig raus",
          nl: "Twee spelers gaan simultaan eruit"
        },
        {
          en: "Playing two tiles to end game",
          es: "Jugar dos fichas para terminar el juego",
          de: "Zwei Steine spielen um Spiel zu beenden",
          nl: "Twee stenen spelen om spel te beëindigen"
        }
      ],
      correct: 0,
      explanation: {
        en: "Out-in-two analysis calculates whether you can play all remaining tiles in exactly two turns, crucial for winning close endgames by playing out first.",
        es: "El análisis de salir-en-dos calcula si puedes jugar todas las fichas restantes en exactamente dos turnos, crucial para ganar finales de juego ajustados jugando primero.",
        de: "Raus-in-Zwei-Analyse berechnet ob Sie alle verbleibenden Steine in genau zwei Zügen spielen können, entscheidend um knappe Endspiele durch Rausspielen zuerst zu gewinnen.",
        nl: "Eruit-in-twee analyse berekent of je alle resterende stenen in precies twee beurten kunt spelen, cruciaal voor winnen van krappe eindspelen door eerst eruit te spelen."
      }
    },
    {
      question: {
        en: "What is 'inferential rack tracking' at master level?",
        es: "¿Qué es el 'rastreo inferencial de rack' a nivel maestro?",
        de: "Was ist 'inferentielles Rack-Tracking' auf Meister-Niveau?",
        nl: "Wat is 'inferentieel rek volgen' op meester niveau?"
      },
      options: [
        {
          en: "Deducing opponent rack from plays, exchanges, and board situation",
          es: "Deducir rack del oponente de jugadas, intercambios y situación del tablero",
          de: "Gegner-Rack aus Zügen, Austauschen und Brett-Situation folgern",
          nl: "Rek van tegenstander afleiden uit zetten, uitwisselingen en bord situatie"
        },
        {
          en: "Tracking rack with inference engine software",
          es: "Rastrear rack con software de motor de inferencia",
          de: "Rack mit Inferenz-Engine-Software verfolgen",
          nl: "Rek volgen met inference engine software"
        },
        {
          en: "Making inferences about rack quality",
          es: "Hacer inferencias sobre la calidad del rack",
          de: "Schlussfolgerungen über Rack-Qualität ziehen",
          nl: "Gevolgtrekkingen maken over rek kwaliteit"
        },
        {
          en: "Statistical rack analysis method",
          es: "Método de análisis estadístico de rack",
          de: "Statistische Rack-Analyse-Methode",
          nl: "Statistische rek analyse methode"
        }
      ],
      correct: 0,
      explanation: {
        en: "Masters deduce opponent's likely rack by noting which plays they avoided, what they kept, exchange patterns, and board control choices—narrowing possible holdings significantly.",
        es: "Los maestros deducen el rack probable del oponente notando qué jugadas evitaron, qué guardaron, patrones de intercambio y opciones de control del tablero—reduciendo significativamente las tenencias posibles.",
        de: "Meister folgern wahrscheinliches Gegner-Rack durch Notieren welche Züge sie vermieden, was sie behielten, Austausch-Muster und Brett-Kontroll-Entscheidungen—was mögliche Bestände erheblich eingrenzt.",
        nl: "Meesters leiden waarschijnlijk rek van tegenstander af door te noteren welke zetten ze vermeden, wat ze behielden, uitwisseling patronen en bord controle keuzes—wat mogelijke holdings significant verkleint."
      }
    },
    {
      question: {
        en: "What is 'equity volatility minimization' in critical game states?",
        es: "¿Qué es la 'minimización de volatilidad de equidad' en estados críticos de juego?",
        de: "Was ist 'Equity-Volatilitäts-Minimierung' in kritischen Spielzuständen?",
        nl: "Wat is 'equity volatiliteit minimalisatie' in kritieke spel toestanden?"
      },
      options: [
        {
          en: "Choosing safe plays that reduce variance when protecting a lead",
          es: "Elegir jugadas seguras que reducen la varianza al proteger una ventaja",
          de: "Sichere Züge wählen die Varianz reduzieren beim Schützen eines Vorsprungs",
          nl: "Veilige zetten kiezen die variantie verminderen bij beschermen van voorsprong"
        },
        {
          en: "Making equity less volatile through trading",
          es: "Hacer que la equidad sea menos volátil mediante el comercio",
          de: "Equity weniger volatil machen durch Handel",
          nl: "Equity minder volatiel maken door handelen"
        },
        {
          en: "Avoiding emotional plays",
          es: "Evitar jugadas emocionales",
          de: "Emotionale Züge vermeiden",
          nl: "Emotionele zetten vermijden"
        },
        {
          en: "Minimizing point swings in general",
          es: "Minimizar oscilaciones de puntos en general",
          de: "Punkt-Schwankungen im Allgemeinen minimieren",
          nl: "Punt schommelingen in het algemeen minimaliseren"
        }
      ],
      correct: 0,
      explanation: {
        en: "When ahead, minimize equity volatility by choosing consistent plays over high-variance gambles. When behind, accept higher variance to create winning chances.",
        es: "Cuando se está adelante, minimizar la volatilidad de equidad eligiendo jugadas consistentes sobre apuestas de alta varianza. Cuando se está atrás, aceptar mayor varianza para crear oportunidades de ganar.",
        de: "Wenn vorn, Equity-Volatilität minimieren durch Wahl konsistenter Züge über Hochvarianz-Glücksspiele. Wenn hinten, höhere Varianz akzeptieren um Gewinnchancen zu schaffen.",
        nl: "Wanneer voor, minimaliseer equity volatiliteit door consistente zetten te kiezen boven hoge-variantie gokken. Wanneer achter, accepteer hogere variantie om win kansen te creëren."
      }
    },
    {
      question: {
        en: "What is the 'challenge-bluff equilibrium' in game theory?",
        es: "¿Cuál es el 'equilibrio de farol de desafío' en teoría de juegos?",
        de: "Was ist das 'Herausforderungs-Bluff-Gleichgewicht' in der Spieltheorie?",
        nl: "Wat is het 'uitdaag-bluf evenwicht' in speltheorie?"
      },
      options: [
        {
          en: "Optimal frequency to bluff phoneys so opponent's challenge rate is balanced",
          es: "Frecuencia óptima para farolear con falsas para que la tasa de desafío del oponente esté equilibrada",
          de: "Optimale Häufigkeit um Falsche zu bluffen damit Gegner-Herausforderungsrate ausgeglichen ist",
          nl: "Optimale frequentie om valse woorden te bluffen zodat uitdaag percentage van tegenstander gebalanceerd is"
        },
        {
          en: "Never bluff and never challenge",
          es: "Nunca farolear y nunca desafiar",
          de: "Nie bluffen und nie herausfordern",
          nl: "Nooit bluffen en nooit uitdagen"
        },
        {
          en: "Always bluff to confuse opponent",
          es: "Siempre farolear para confundir al oponente",
          de: "Immer bluffen um Gegner zu verwirren",
          nl: "Altijd bluffen om tegenstander te verwarren"
        },
        {
          en: "Challenge everything suspicious",
          es: "Desafiar todo lo sospechoso",
          de: "Alles Verdächtige herausfordern",
          nl: "Alles verdachte uitdagen"
        }
      ],
      correct: 0,
      explanation: {
        en: "Nash equilibrium requires bluffing phoneys at specific frequency to make opponent indifferent between challenging and accepting—preventing exploitation of predictable patterns.",
        es: "El equilibrio de Nash requiere farolear con falsas a frecuencia específica para hacer al oponente indiferente entre desafiar y aceptar—previniendo explotación de patrones predecibles.",
        de: "Nash-Gleichgewicht erfordert Bluffen von Falschen mit spezifischer Häufigkeit um Gegner indifferent zwischen Herausfordern und Akzeptieren zu machen—verhindert Ausnutzung vorhersagbarer Muster.",
        nl: "Nash evenwicht vereist bluffen van valse woorden op specifieke frequentie om tegenstander onverschillig te maken tussen uitdagen en accepteren—voorkomt uitbuiting van voorspelbare patronen."
      }
    },
    {
      question: {
        en: "What is 'leave variance analysis' in computer evaluation?",
        es: "¿Qué es el 'análisis de varianza de dejar' en evaluación informática?",
        de: "Was ist 'Leave-Varianz-Analyse' in Computer-Bewertung?",
        nl: "Wat is 'leave variantie analyse' in computer evaluatie?"
      },
      options: [
        {
          en: "Measuring uncertainty in leave value across different tile draws",
          es: "Medir incertidumbre en valor de dejar a través de diferentes sorteos de fichas",
          de: "Unsicherheit im Leave-Wert über verschiedene Stein-Ziehungen messen",
          nl: "Onzekerheid in leave waarde meten over verschillende steen trekkingen"
        },
        {
          en: "Variance in when players leave tournaments",
          es: "Varianza en cuándo los jugadores abandonan torneos",
          de: "Varianz wann Spieler Turniere verlassen",
          nl: "Variantie in wanneer spelers toernooien verlaten"
        },
        {
          en: "Analysis of tiles left on rack",
          es: "Análisis de fichas dejadas en el rack",
          de: "Analyse der auf dem Rack gelassenen Steine",
          nl: "Analyse van stenen achtergelaten op rek"
        },
        {
          en: "Statistical variation in tile leaves",
          es: "Variación estadística en dejar fichas",
          de: "Statistische Variation bei Stein-Leaves",
          nl: "Statistische variatie in steen leaves"
        }
      ],
      correct: 0,
      explanation: {
        en: "Leave variance measures how sensitive a leave's value is to the next tile drawn. High-variance leaves (like keeping X) are riskier than stable leaves (like AEINRT).",
        es: "La varianza de dejar mide qué tan sensible es el valor de dejar a la siguiente ficha sacada. Dejar de alta varianza (como mantener X) son más arriesgadas que dejar estables (como AEINRT).",
        de: "Leave-Varianz misst wie empfindlich ein Leave-Wert auf den nächsten gezogenen Stein reagiert. Hochvarianz-Leaves (wie X behalten) sind riskanter als stabile Leaves (wie AEINRT).",
        nl: "Leave variantie meet hoe gevoelig een leave waarde is voor de volgende getrokken steen. Hoge-variantie leaves (zoals X houden) zijn riskanter dan stabiele leaves (zoals AEINRT)."
      }
    },
    {
      question: {
        en: "What is the ultimate goal of computational Scrabble research?",
        es: "¿Cuál es el objetivo final de la investigación computacional de Scrabble?",
        de: "Was ist das ultimative Ziel der rechnergestützten Scrabble-Forschung?",
        nl: "Wat is het ultieme doel van computationeel Scrabble onderzoek?"
      },
      options: [
        {
          en: "Solving perfect play strategy through complete game-tree analysis",
          es: "Resolver estrategia de juego perfecto a través de análisis completo del árbol de juego",
          de: "Perfekte Spiel-Strategie durch vollständige Spielbaum-Analyse lösen",
          nl: "Perfect spel strategie oplossen door complete spelboombeoordeling"
        },
        {
          en: "Making Scrabble easier for beginners",
          es: "Hacer Scrabble más fácil para principiantes",
          de: "Scrabble für Anfänger einfacher machen",
          nl: "Scrabble makkelijker maken voor beginners"
        },
        {
          en: "Creating fastest word-finding algorithms",
          es: "Crear algoritmos de búsqueda de palabras más rápidos",
          de: "Schnellste Wortfindungs-Algorithmen erstellen",
          nl: "Snelste woord-vindende algoritmes creëren"
        },
        {
          en: "Building dictionary databases",
          es: "Construir bases de datos de diccionarios",
          de: "Wörterbuch-Datenbanken aufbauen",
          nl: "Woordenboek databases bouwen"
        }
      ],
      correct: 0,
      explanation: {
        en: "The holy grail is solving Scrabble completely—finding mathematically optimal strategy for all positions. Currently impossible due to computational complexity, but research continues.",
        es: "El santo grial es resolver Scrabble completamente—encontrar estrategia matemáticamente óptima para todas las posiciones. Actualmente imposible debido a la complejidad computacional, pero la investigación continúa.",
        de: "Der heilige Gral ist Scrabble vollständig zu lösen—mathematisch optimale Strategie für alle Positionen zu finden. Derzeit unmöglich aufgrund rechnerischer Komplexität, aber Forschung geht weiter.",
        nl: "De heilige graal is Scrabble volledig oplossen—wiskundig optimale strategie vinden voor alle posities. Momenteel onmogelijk door computationele complexiteit, maar onderzoek gaat door."
      }
    },
    {
      question: {
        en: "What is 'alpha-beta pruning' in Scrabble AI and why is it less effective than in chess?",
        es: "¿Qué es la 'poda alfa-beta' en IA de Scrabble y por qué es menos efectiva que en ajedrez?",
        de: "Was ist 'Alpha-Beta-Pruning' in Scrabble-KI und warum ist es weniger effektiv als im Schach?",
        nl: "Wat is 'alpha-beta pruning' in Scrabble AI en waarom is het minder effectief dan in schaken?"
      },
      options: [
        {
          en: "Tree-pruning technique that's ineffective due to hidden information about opponent's rack",
          es: "Técnica de poda de árbol que es inefectiva debido a información oculta sobre el rack del oponente",
          de: "Baum-Pruning-Technik die ineffektiv ist wegen versteckter Information über Gegner-Rack",
          nl: "Boom-pruning techniek die ineffectief is door verborgen informatie over rek van tegenstander"
        },
        {
          en: "Removing alpha and beta tiles from consideration",
          es: "Eliminar fichas alfa y beta de consideración",
          de: "Alpha- und Beta-Steine von Betrachtung entfernen",
          nl: "Alpha en beta stenen van overweging verwijderen"
        },
        {
          en: "Pruning two branches simultaneously",
          es: "Podar dos ramas simultáneamente",
          de: "Zwei Zweige gleichzeitig beschneiden",
          nl: "Twee takken simultaan snoeien"
        },
        {
          en: "Testing alphabetical ordering strategies",
          es: "Probar estrategias de ordenamiento alfabético",
          de: "Alphabetische Sortierungsstrategien testen",
          nl: "Alfabetische volgorde strategieën testen"
        }
      ],
      correct: 0,
      explanation: {
        en: "Alpha-beta pruning eliminates provably inferior branches in perfect-information games. In Scrabble, hidden tile information prevents definitive pruning—you can't prove a move is worse without knowing opponent's rack.",
        es: "La poda alfa-beta elimina ramas demostrablemente inferiores en juegos de información perfecta. En Scrabble, la información oculta de fichas impide poda definitiva—no puedes probar que un movimiento es peor sin conocer el rack del oponente.",
        de: "Alpha-Beta-Pruning eliminiert nachweislich unterlegene Zweige in Spielen mit perfekter Information. In Scrabble verhindert versteckte Stein-Information definitive Pruning—man kann nicht beweisen dass ein Zug schlechter ist ohne Gegner-Rack zu kennen.",
        nl: "Alpha-beta pruning elimineert aantoonbaar inferieure takken in perfect-informatie spellen. In Scrabble voorkomt verborgen steen informatie definitieve pruning—je kunt niet bewijzen dat een zet slechter is zonder rek van tegenstander te kennen."
      }
    },
    {
      question: {
        en: "What is 'rack construction balancing' in championship-level play?",
        es: "¿Qué es el 'balanceo de construcción de rack' en juego de nivel campeonato?",
        de: "Was ist 'Rack-Konstruktions-Ausbalancierung' im Meisterschafts-Niveau-Spiel?",
        nl: "Wat is 'rek constructie balancering' in kampioenschap-niveau spel?"
      },
      options: [
        {
          en: "Optimizing vowel-consonant ratio and tile synergy in your leave",
          es: "Optimizar relación vocal-consonante y sinergia de fichas en tu dejar",
          de: "Vokal-Konsonanten-Verhältnis und Stein-Synergie in Ihrem Leave optimieren",
          nl: "Klinker-medeklinker verhouding en steen synergie in je leave optimaliseren"
        },
        {
          en: "Physically balancing the tile rack",
          es: "Balancear físicamente el atril de fichas",
          de: "Stein-Rack physisch ausbalancieren",
          nl: "Steen rek fysiek balanceren"
        },
        {
          en: "Building equal scores for both players",
          es: "Construir puntajes iguales para ambos jugadores",
          de: "Gleiche Punktzahlen für beide Spieler aufbauen",
          nl: "Gelijke scores bouwen voor beide spelers"
        },
        {
          en: "Balancing offensive and defensive plays",
          es: "Balancear jugadas ofensivas y defensivas",
          de: "Offensive und defensive Züge ausbalancieren",
          nl: "Offensieve en defensieve zetten balanceren"
        }
      ],
      correct: 0,
      explanation: {
        en: "Expert rack construction balances vowels/consonants (ideal ~40/60), keeps high-synergy combinations, avoids duplicate letters, and maintains flexible tiles that work together for future plays.",
        es: "La construcción experta de rack equilibra vocales/consonantes (ideal ~40/60), mantiene combinaciones de alta sinergia, evita letras duplicadas, y mantiene fichas flexibles que funcionan juntas para jugadas futuras.",
        de: "Experten-Rack-Konstruktion balanciert Vokale/Konsonanten (ideal ~40/60), behält Hochsynergie-Kombinationen, vermeidet doppelte Buchstaben, und erhält flexible Steine die für zukünftige Züge zusammenarbeiten.",
        nl: "Expert rek constructie balanceert klinkers/medeklinkers (ideaal ~40/60), houdt hoge-synergie combinaties, vermijdt dubbele letters, en houdt flexibele stenen die samenwerken voor toekomstige zetten."
      }
    },
    {
      question: {
        en: "What is the 'hook maximization principle' in positional play?",
        es: "¿Cuál es el 'principio de maximización de gancho' en juego posicional?",
        de: "Was ist das 'Hook-Maximierungs-Prinzip' im Positionsspiel?",
        nl: "Wat is het 'haak maximalisatie principe' in positioneel spel?"
      },
      options: [
        {
          en: "Placing words to create maximum future hook possibilities for yourself",
          es: "Colocar palabras para crear máximas posibilidades de gancho futuro para ti",
          de: "Wörter platzieren um maximale zukünftige Hook-Möglichkeiten für sich selbst zu schaffen",
          nl: "Woorden plaatsen om maximale toekomstige haak mogelijkheden voor jezelf te creëren"
        },
        {
          en: "Always playing words with hooks available",
          es: "Siempre jugar palabras con ganchos disponibles",
          de: "Immer Wörter mit verfügbaren Hooks spielen",
          nl: "Altijd woorden spelen met beschikbare haken"
        },
        {
          en: "Maximizing use of fishing hooks",
          es: "Maximizar el uso de anzuelos de pesca",
          de: "Maximierung der Verwendung von Angel-Hooks",
          nl: "Maximaliseren van gebruik van vis haken"
        },
        {
          en: "Creating J-shaped word patterns",
          es: "Crear patrones de palabras en forma de J",
          de: "J-förmige Wortmuster erstellen",
          nl: "J-vormige woord patronen creëren"
        }
      ],
      correct: 0,
      explanation: {
        en: "Strategic placement considers not just immediate scoring but future hook opportunities. Playing words with common hooks (S, ED, ER) you can exploit later provides long-term positional advantage.",
        es: "La colocación estratégica considera no solo puntuación inmediata sino oportunidades de gancho futuras. Jugar palabras con ganchos comunes (S, ED, ER) que puedes explotar más tarde proporciona ventaja posicional a largo plazo.",
        de: "Strategische Platzierung berücksichtigt nicht nur sofortige Punktzahl sondern zukünftige Hook-Möglichkeiten. Wörter mit häufigen Hooks (S, ED, ER) spielen die man später ausnutzen kann bietet langfristigen Positions-Vorteil.",
        nl: "Strategische plaatsing beschouwt niet alleen directe score maar toekomstige haak mogelijkheden. Woorden spelen met veel voorkomende haken (S, ED, ER) die je later kunt uitbuiten biedt langetermijn positioneel voordeel."
      }
    },
    {
      question: {
        en: "What is 'defensive Q-stick management' in expert endgame strategy?",
        es: "¿Qué es la 'gestión defensiva de Q-stick' en estrategia experta de final de juego?",
        de: "Was ist 'defensives Q-Stick-Management' in Experten-Endspiel-Strategie?",
        nl: "Wat is 'defensief Q-stick management' in expert eindspel strategie?"
      },
      options: [
        {
          en: "Tracking Q location to avoid being stuck with it at game end",
          es: "Rastrear ubicación de Q para evitar quedarse con ella al final del juego",
          de: "Q-Position verfolgen um nicht am Spielende damit steckenzubleiben",
          nl: "Q locatie volgen om niet ermee te blijven zitten aan einde van spel"
        },
        {
          en: "Using Q as defensive blocking tile",
          es: "Usar Q como ficha de bloqueo defensivo",
          de: "Q als defensive Blockierungs-Stein verwenden",
          nl: "Q gebruiken als defensieve blokkerings steen"
        },
        {
          en: "Managing the Q with a stick-shaped play",
          es: "Gestionar la Q con una jugada en forma de palo",
          de: "Q mit einem Stock-förmigen Zug verwalten",
          nl: "Q beheren met een stok-vormige zet"
        },
        {
          en: "Defending against opponent's Q plays",
          es: "Defender contra jugadas Q del oponente",
          de: "Gegen Gegner-Q-Züge verteidigen",
          nl: "Verdedigen tegen Q zetten van tegenstander"
        }
      ],
      correct: 0,
      explanation: {
        en: "Being stuck with Q at game end loses 10 points. Experts track Q position, know U locations, force opponent to draw Q late, or ensure playing Q before opponent goes out.",
        es: "Quedarse con Q al final del juego pierde 10 puntos. Los expertos rastrean posición de Q, conocen ubicaciones de U, fuerzan al oponente a sacar Q tarde, o aseguran jugar Q antes de que el oponente salga.",
        de: "Mit Q am Spielende steckenzubleiben verliert 10 Punkte. Experten verfolgen Q-Position, kennen U-Positionen, zwingen Gegner Q spät zu ziehen, oder stellen sicher Q zu spielen bevor Gegner rausgeht.",
        nl: "Vastzitten met Q aan einde van spel verliest 10 punten. Experts volgen Q positie, kennen U locaties, dwingen tegenstander Q laat te trekken, of zorgen ervoor Q te spelen voordat tegenstander eruit gaat."
      }
    },
    {
      question: {
        en: "What is 'tile-tracking probability updating' in advanced play?",
        es: "¿Qué es la 'actualización de probabilidad de rastreo de fichas' en juego avanzado?",
        de: "Was ist 'Stein-Tracking-Wahrscheinlichkeits-Aktualisierung' im fortgeschrittenen Spiel?",
        nl: "Wat is 'steen-volgen waarschijnlijkheid updaten' in geavanceerd spel?"
      },
      options: [
        {
          en: "Continuously revising unseen tile probabilities based on opponent's plays and passes",
          es: "Revisar continuamente probabilidades de fichas no vistas basado en jugadas y pases del oponente",
          de: "Kontinuierlich ungesehene Stein-Wahrscheinlichkeiten überarbeiten basierend auf Gegner-Zügen und Pässen",
          nl: "Continu ongeziene steen waarschijnlijkheden herzien gebaseerd op zetten en passen van tegenstander"
        },
        {
          en: "Updating tile values during game",
          es: "Actualizar valores de fichas durante el juego",
          de: "Steinwerte während des Spiels aktualisieren",
          nl: "Steen waarden tijdens spel updaten"
        },
        {
          en: "Tracking probability of winning",
          es: "Rastrear probabilidad de ganar",
          de: "Wahrscheinlichkeit des Gewinnens verfolgen",
          nl: "Waarschijnlijkheid van winnen volgen"
        },
        {
          en: "Software updates for tile tracking",
          es: "Actualizaciones de software para rastreo de fichas",
          de: "Software-Updates für Stein-Tracking",
          nl: "Software updates voor steen volgen"
        }
      ],
      correct: 0,
      explanation: {
        en: "As game progresses, expert players use Bayesian updating: opponent not playing bingo increases probability they lack good tiles; exchange suggests vowel/consonant imbalance; each play reveals information.",
        es: "A medida que avanza el juego, los jugadores expertos usan actualización bayesiana: oponente no jugando bingo aumenta probabilidad de que carezcan de buenas fichas; intercambio sugiere desequilibrio vocal/consonante; cada jugada revela información.",
        de: "Während das Spiel fortschreitet nutzen Experten-Spieler Bayessche Aktualisierung: Gegner spielt kein Bingo erhöht Wahrscheinlichkeit dass ihm gute Steine fehlen; Austausch deutet auf Vokal/Konsonant-Ungleichgewicht; jeder Zug offenbart Information.",
        nl: "Naarmate spel vordert gebruiken expert spelers Bayesiaanse updating: tegenstander speelt geen bingo verhoogt waarschijnlijkheid dat ze goede stenen missen; uitwisseling suggereert klinker/medeklinker onbalans; elke zet onthult informatie."
      }
    },
    {
      question: {
        en: "What is 'equity-adjusted spread optimization' in tournament play?",
        es: "¿Qué es la 'optimización de diferencial ajustado por equidad' en juego de torneo?",
        de: "Was ist 'Equity-angepasste Spread-Optimierung' im Turnierspiel?",
        nl: "Wat is 'equity-aangepaste spread optimalisatie' in toernooi spel?"
      },
      options: [
        {
          en: "Balancing win probability with point spread for tournament standings",
          es: "Equilibrar probabilidad de ganar con diferencial de puntos para clasificaciones de torneo",
          de: "Gewinn-Wahrscheinlichkeit mit Punkt-Spread für Turnier-Ranglisten ausbalancieren",
          nl: "Win waarschijnlijkheid balanceren met punten spread voor toernooi klassementen"
        },
        {
          en: "Spreading tiles evenly across board",
          es: "Distribuir fichas uniformemente por el tablero",
          de: "Steine gleichmäßig über Brett verteilen",
          nl: "Stenen gelijkmatig over bord verspreiden"
        },
        {
          en: "Optimizing equity through spreadsheets",
          es: "Optimizar equidad a través de hojas de cálculo",
          de: "Equity durch Tabellenkalkulation optimieren",
          nl: "Equity optimaliseren via spreadsheets"
        },
        {
          en: "Adjusting point spreads for fairness",
          es: "Ajustar diferenciales de puntos para equidad",
          de: "Punkt-Spreads für Fairness anpassen",
          nl: "Punten spreads aanpassen voor eerlijkheid"
        }
      ],
      correct: 0,
      explanation: {
        en: "In tournaments, cumulative spread matters. Sometimes risk higher variance to maximize point margin; other times play conservatively to secure win. Optimal strategy depends on tournament position.",
        es: "En torneos, el diferencial acumulativo importa. A veces arriesgar mayor varianza para maximizar margen de puntos; otras veces jugar conservadoramente para asegurar victoria. Estrategia óptima depende de posición en torneo.",
        de: "In Turnieren zählt kumulativer Spread. Manchmal höhere Varianz riskieren um Punkt-Marge zu maximieren; andere Male konservativ spielen um Sieg zu sichern. Optimale Strategie hängt von Turnier-Position ab.",
        nl: "In toernooien telt cumulatieve spread. Soms hogere variantie riskeren om punten marge te maximaliseren; andere keren conservatief spelen om win te verzekeren. Optimale strategie hangt af van toernooi positie."
      }
    },
    {
      question: {
        en: "What is 'power tile concentration theory' in midgame strategy?",
        es: "¿Cuál es la 'teoría de concentración de fichas de poder' en estrategia de medio juego?",
        de: "Was ist 'Power-Tile-Konzentrations-Theorie' in Mittelspiel-Strategie?",
        nl: "Wat is 'power steen concentratie theorie' in middenspel strategie?"
      },
      options: [
        {
          en: "Managing distribution of high-value tiles between players for maximum advantage",
          es: "Gestionar distribución de fichas de alto valor entre jugadores para máxima ventaja",
          de: "Verteilung von hochwertige Steinen zwischen Spielern für maximalen Vorteil verwalten",
          nl: "Verdeling van hoge-waarde stenen tussen spelers beheren voor maximaal voordeel"
        },
        {
          en: "Concentrating only on power tiles",
          es: "Concentrarse solo en fichas de poder",
          de: "Sich nur auf Power-Tiles konzentrieren",
          nl: "Alleen concentreren op power stenen"
        },
        {
          en: "Grouping high-point tiles together",
          es: "Agrupar fichas de alto puntaje juntas",
          de: "Hochpunkt-Steine zusammengruppieren",
          nl: "Hoge-punten stenen samen groeperen"
        },
        {
          en: "Playing all blanks and S tiles quickly",
          es: "Jugar todos los blancos y fichas S rápidamente",
          de: "Alle Blanks und S-Steine schnell spielen",
          nl: "Alle blanks en S stenen snel spelen"
        }
      ],
      correct: 0,
      explanation: {
        en: "Power tiles (blanks, S, high-value tiles) drive game outcomes. If you've drawn most power tiles, play conservatively; if opponent has them, create volatility and fishing opportunities.",
        es: "Las fichas de poder (blancos, S, fichas de alto valor) impulsan resultados del juego. Si has sacado la mayoría de fichas de poder, juega conservadoramente; si el oponente las tiene, crea volatilidad y oportunidades de pesca.",
        de: "Power-Tiles (Blanks, S, hochwertige Steine) treiben Spiel-Ergebnisse an. Wenn Sie die meisten Power-Tiles gezogen haben konservativ spielen; wenn Gegner sie hat Volatilität und Fishing-Möglichkeiten schaffen.",
        nl: "Power stenen (blanks, S, hoge-waarde stenen) sturen spel uitkomsten aan. Als je meeste power stenen hebt getrokken, speel conservatief; als tegenstander ze heeft, creëer volatiliteit en vis mogelijkheden."
      }
    },
    {
      question: {
        en: "What is 'board texture reading' at grandmaster level?",
        es: "¿Qué es la 'lectura de textura del tablero' a nivel gran maestro?",
        de: "Was ist 'Brett-Textur-Lesen' auf Großmeister-Niveau?",
        nl: "Wat is 'bord textuur lezen' op grootmeester niveau?"
      },
      options: [
        {
          en: "Analyzing board openness, premium square access, and bingo probability from position",
          es: "Analizar apertura del tablero, acceso a casillas premium, y probabilidad de bingo desde posición",
          de: "Brett-Offenheit, Premium-Quadrat-Zugang und Bingo-Wahrscheinlichkeit von Position analysieren",
          nl: "Bord openheid, premium vak toegang, en bingo waarschijnlijkheid vanuit positie analyseren"
        },
        {
          en: "Reading the physical texture of board material",
          es: "Leer la textura física del material del tablero",
          de: "Physische Textur des Brett-Materials lesen",
          nl: "Fysieke textuur van bord materiaal lezen"
        },
        {
          en: "Understanding word patterns visually",
          es: "Comprender patrones de palabras visualmente",
          de: "Wortmuster visuell verstehen",
          nl: "Woord patronen visueel begrijpen"
        },
        {
          en: "Memorizing board layouts",
          es: "Memorizar disposiciones del tablero",
          de: "Brett-Layouts auswendig lernen",
          nl: "Bord indelingen memoriseren"
        }
      ],
      correct: 0,
      explanation: {
        en: "Board texture determines strategy: open boards favor bingos and blanks; closed boards favor tactical point-scoring. Experts evaluate texture to decide between opening up or closing down positions.",
        es: "La textura del tablero determina estrategia: tableros abiertos favorecen bingos y blancos; tableros cerrados favorecen puntuación táctica. Los expertos evalúan textura para decidir entre abrir o cerrar posiciones.",
        de: "Brett-Textur bestimmt Strategie: offene Bretter begünstigen Bingos und Blanks; geschlossene Bretter begünstigen taktische Punkt-Erzielung. Experten bewerten Textur um zwischen Öffnen oder Schließen von Positionen zu entscheiden.",
        nl: "Bord textuur bepaalt strategie: open borden bevoordelen bingo's en blanks; gesloten borden bevoordelen tactische punten scoren. Experts evalueren textuur om te beslissen tussen openen of sluiten van posities."
      }
    },
    {
      question: {
        en: "What is 'binomial leave distribution modeling' in computational analysis?",
        es: "¿Qué es el 'modelado de distribución binomial de dejar' en análisis computacional?",
        de: "Was ist 'Binomial-Leave-Verteilungs-Modellierung' in rechnergestützter Analyse?",
        nl: "Wat is 'binomiale leave verdeling modellering' in computationele analyse?"
      },
      options: [
        {
          en: "Statistical modeling of rack quality distribution after each tile draw",
          es: "Modelado estadístico de distribución de calidad de rack después de cada sorteo de ficha",
          de: "Statistische Modellierung der Rack-Qualitäts-Verteilung nach jeder Stein-Ziehung",
          nl: "Statistische modellering van rek kwaliteit verdeling na elke steen trek"
        },
        {
          en: "Using two-outcome probability models",
          es: "Usar modelos de probabilidad de dos resultados",
          de: "Zwei-Ergebnis-Wahrscheinlichkeitsmodelle verwenden",
          nl: "Twee-uitkomst waarschijnlijkheid modellen gebruiken"
        },
        {
          en: "Modeling binary decision trees",
          es: "Modelar árboles de decisión binaria",
          de: "Binäre Entscheidungsbäume modellieren",
          nl: "Binaire beslissingsbomen modelleren"
        },
        {
          en: "Distributing leaves into two categories",
          es: "Distribuir dejares en dos categorías",
          de: "Leaves in zwei Kategorien verteilen",
          nl: "Leaves verdelen in twee categorieën"
        }
      ],
      correct: 0,
      explanation: {
        en: "Each tile drawn follows probability distribution. Advanced engines model how leave quality varies across all possible draws, computing expected value weighted by draw probability—more accurate than simple averages.",
        es: "Cada ficha sacada sigue distribución de probabilidad. Motores avanzados modelan cómo varía la calidad de dejar a través de todos los sorteos posibles, calculando valor esperado ponderado por probabilidad de sorteo—más preciso que promedios simples.",
        de: "Jeder gezogene Stein folgt Wahrscheinlichkeitsverteilung. Fortgeschrittene Engines modellieren wie Leave-Qualität über alle möglichen Ziehungen variiert, berechnen Erwartungswert gewichtet nach Ziehungs-Wahrscheinlichkeit—genauer als einfache Durchschnitte.",
        nl: "Elke getrokken steen volgt waarschijnlijkheidsverdeling. Geavanceerde engines modelleren hoe leave kwaliteit varieert over alle mogelijke trekkingen, berekenen verwachte waarde gewogen naar trek waarschijnlijkheid—nauwkeuriger dan simpele gemiddelden."
      }
    },
    {
      question: {
        en: "What is 'multi-ply defensive forecasting' in championship endgames?",
        es: "¿Qué es el 'pronóstico defensivo multi-ply' en finales de juego de campeonato?",
        de: "Was ist 'Multi-Ply defensive Vorhersage' in Meisterschafts-Endspielen?",
        nl: "Wat is 'multi-ply defensieve voorspelling' in kampioenschap eindspelen?"
      },
      options: [
        {
          en: "Calculating opponent's best responses several moves ahead to defend optimally",
          es: "Calcular mejores respuestas del oponente varios movimientos por delante para defender óptimamente",
          de: "Beste Gegner-Antworten mehrere Züge voraus berechnen um optimal zu verteidigen",
          nl: "Beste reacties van tegenstander meerdere zetten vooruit berekenen om optimaal te verdedigen"
        },
        {
          en: "Using multiple layers of defense",
          es: "Usar múltiples capas de defensa",
          de: "Mehrere Verteidigungs-Schichten verwenden",
          nl: "Meerdere lagen van verdediging gebruiken"
        },
        {
          en: "Forecasting weather for multi-day tournaments",
          es: "Pronosticar el clima para torneos de varios días",
          de: "Wetter für mehrtägige Turniere vorhersagen",
          nl: "Weer voorspellen voor meerdaagse toernooien"
        },
        {
          en: "Defensive strategy across multiple games",
          es: "Estrategia defensiva a través de múltiples juegos",
          de: "Defensive Strategie über mehrere Spiele",
          nl: "Defensieve strategie over meerdere spellen"
        }
      ],
      correct: 0,
      explanation: {
        en: "In critical endgames, champions calculate 3-4 moves deep: 'If I play A, opponent plays B, I respond C, opponent plays D.' This multi-ply analysis reveals optimal defensive sequences.",
        es: "En finales de juego críticos, los campeones calculan 3-4 movimientos de profundidad: 'Si juego A, oponente juega B, respondo C, oponente juega D.' Este análisis multi-ply revela secuencias defensivas óptimas.",
        de: "In kritischen Endspielen berechnen Champions 3-4 Züge tief: 'Wenn ich A spiele, spielt Gegner B, ich antworte C, Gegner spielt D.' Diese Multi-Ply-Analyse offenbart optimale defensive Sequenzen.",
        nl: "In kritieke eindspelen berekenen kampioenen 3-4 zetten diep: 'Als ik A speel, speelt tegenstander B, ik reageer C, tegenstander speelt D.' Deze multi-ply analyse onthult optimale defensieve sequenties."
      }
    },
    {
      question: {
        en: "What is the 'Z-distribution paradox' in tile value theory?",
        es: "¿Cuál es la 'paradoja de distribución Z' en teoría de valor de fichas?",
        de: "Was ist das 'Z-Verteilungs-Paradox' in der Stein-Wert-Theorie?",
        nl: "Wat is de 'Z-verdeling paradox' in steen waarde theorie?"
      },
      options: [
        {
          en: "Z has high point value but low equity value due to limited playability",
          es: "Z tiene alto valor de puntos pero bajo valor de equidad debido a jugabilidad limitada",
          de: "Z hat hohen Punktwert aber niedrigen Equity-Wert wegen begrenzter Spielbarkeit",
          nl: "Z heeft hoge punt waarde maar lage equity waarde door beperkte speelbaarheid"
        },
        {
          en: "Z appears in random Z-shaped distribution",
          es: "Z aparece en distribución aleatoria en forma de Z",
          de: "Z erscheint in zufälliger Z-förmiger Verteilung",
          nl: "Z verschijnt in willekeurige Z-vormige verdeling"
        },
        {
          en: "Z values are distributed paradoxically",
          es: "Los valores Z se distribuyen paradójicamente",
          de: "Z-Werte sind paradox verteilt",
          nl: "Z waarden zijn paradoxaal verdeeld"
        },
        {
          en: "Z has equal value to blank tiles",
          es: "Z tiene igual valor a fichas blancas",
          de: "Z hat gleichen Wert wie Blank-Steine",
          nl: "Z heeft gelijke waarde als blank stenen"
        }
      ],
      correct: 0,
      explanation: {
        en: "Despite being worth 10 points, Z often has negative leave value: few playable words, poor synergy, difficult to use. Keeping Z is often worse than keeping 1-point tiles with better flexibility.",
        es: "A pesar de valer 10 puntos, Z a menudo tiene valor de dejar negativo: pocas palabras jugables, pobre sinergia, difícil de usar. Mantener Z es a menudo peor que mantener fichas de 1 punto con mejor flexibilidad.",
        de: "Trotz 10 Punkten Wert hat Z oft negativen Leave-Wert: wenige spielbare Wörter, schlechte Synergie, schwer zu verwenden. Z behalten ist oft schlechter als 1-Punkt-Steine mit besserer Flexibilität zu behalten.",
        nl: "Ondanks 10 punten waarde heeft Z vaak negatieve leave waarde: weinig speelbare woorden, slechte synergie, moeilijk te gebruiken. Z houden is vaak slechter dan 1-punt stenen met betere flexibiliteit houden."
      }
    },
    {
      question: {
        en: "What is 'stochastic opponent modeling' in AI championship programs?",
        es: "¿Qué es el 'modelado estocástico de oponente' en programas de IA de campeonato?",
        de: "Was ist 'stochastische Gegner-Modellierung' in KI-Meisterschafts-Programmen?",
        nl: "Wat is 'stochastische tegenstander modellering' in AI kampioenschap programma's?"
      },
      options: [
        {
          en: "Modeling opponent skill level and adapting strategy based on their error patterns",
          es: "Modelar nivel de habilidad del oponente y adaptar estrategia basado en sus patrones de error",
          de: "Gegner-Fähigkeitsniveau modellieren und Strategie basierend auf ihren Fehler-Mustern anpassen",
          nl: "Vaardigheids niveau van tegenstander modelleren en strategie aanpassen gebaseerd op hun fout patronen"
        },
        {
          en: "Using random opponent simulation methods",
          es: "Usar métodos de simulación aleatoria de oponente",
          de: "Zufällige Gegner-Simulations-Methoden verwenden",
          nl: "Willekeurige tegenstander simulatie methoden gebruiken"
        },
        {
          en: "Modeling opponent behavior stochastically",
          es: "Modelar comportamiento del oponente estocásticamente",
          de: "Gegner-Verhalten stochastisch modellieren",
          nl: "Gedrag van tegenstander stochastisch modelleren"
        },
        {
          en: "Creating probabilistic opponent profiles",
          es: "Crear perfiles probabilísticos de oponente",
          de: "Probabilistische Gegner-Profile erstellen",
          nl: "Probabilistische tegenstander profielen creëren"
        }
      ],
      correct: 0,
      explanation: {
        en: "Advanced AI adapts to opponent strength: against weaker players, increase variance to exploit errors; against stronger players, play more conservatively. Programs learn opponent patterns during game.",
        es: "IA avanzada se adapta a la fuerza del oponente: contra jugadores más débiles, aumentar varianza para explotar errores; contra jugadores más fuertes, jugar más conservadoramente. Los programas aprenden patrones del oponente durante el juego.",
        de: "Fortgeschrittene KI passt sich an Gegner-Stärke an: gegen schwächere Spieler Varianz erhöhen um Fehler auszunutzen; gegen stärkere Spieler konservativer spielen. Programme lernen Gegner-Muster während des Spiels.",
        nl: "Geavanceerde AI past zich aan aan sterkte van tegenstander: tegen zwakkere spelers, verhoog variantie om fouten uit te buiten; tegen sterkere spelers, speel conservatiever. Programma's leren patronen van tegenstander tijdens spel."
      }
    },
    {
      question: {
        en: "What is simulation depth in computer analysis?",
        es: "What is simulation depth in computer analysis?",
        de: "What is simulation depth in computer analysis?",
        nl: "What is simulation depth in computer analysis?"
      },
      options: [
        {
          en: "Number of future moves computer simulates to evaluate current play",
          es: "Number of future moves computer simulates to evaluate current play",
          de: "Number of future moves computer simulates to evaluate current play",
          nl: "Number of future moves computer simulates to evaluate current play"
        },
        {
          en: "Board analysis complexity",
          es: "Board analysis complexity",
          de: "Board analysis complexity",
          nl: "Board analysis complexity"
        },
        {
          en: "Dictionary search depth",
          es: "Dictionary search depth",
          de: "Dictionary search depth",
          nl: "Dictionary search depth"
        },
        {
          en: "Tile counting accuracy",
          es: "Tile counting accuracy",
          de: "Tile counting accuracy",
          nl: "Tile counting accuracy"
        }
      ],
      correct: 0,
      explanation: {
        en: "Simulation depth typically 2-4 plies measures how many turns ahead engine calculates, balancing accuracy with computation time.",
        es: "Simulation depth typically 2-4 plies measures how many turns ahead engine calculates, balancing accuracy with computation time.",
        de: "Simulation depth typically 2-4 plies measures how many turns ahead engine calculates, balancing accuracy with computation time.",
        nl: "Simulation depth typically 2-4 plies measures how many turns ahead engine calculates, balancing accuracy with computation time."
      }
    },
    {
      question: {
        en: "What is pre-endgame phase?",
        es: "What is pre-endgame phase?",
        de: "What is pre-endgame phase?",
        nl: "What is pre-endgame phase?"
      },
      options: [
        {
          en: "When ~7 tiles remain in bag and strategy shifts to endgame calculation",
          es: "When ~7 tiles remain in bag and strategy shifts to endgame calculation",
          de: "When ~7 tiles remain in bag and strategy shifts to endgame calculation",
          nl: "When ~7 tiles remain in bag and strategy shifts to endgame calculation"
        },
        {
          en: "Before game starts",
          es: "Before game starts",
          de: "Before game starts",
          nl: "Before game starts"
        },
        {
          en: "First half of game",
          es: "First half of game",
          de: "First half of game",
          nl: "First half of game"
        },
        {
          en: "Setup phase",
          es: "Setup phase",
          de: "Setup phase",
          nl: "Setup phase"
        }
      ],
      correct: 0,
      explanation: {
        en: "Pre-endgame begins with ~7 tiles left. Strategy transitions from probabilistic to deterministic as tile uncertainty reduces.",
        es: "Pre-endgame begins with ~7 tiles left. Strategy transitions from probabilistic to deterministic as tile uncertainty reduces.",
        de: "Pre-endgame begins with ~7 tiles left. Strategy transitions from probabilistic to deterministic as tile uncertainty reduces.",
        nl: "Pre-endgame begins with ~7 tiles left. Strategy transitions from probabilistic to deterministic as tile uncertainty reduces."
      }
    },
    {
      question: {
        en: "What is advanced tile tracking?",
        es: "What is advanced tile tracking?",
        de: "What is advanced tile tracking?",
        nl: "What is advanced tile tracking?"
      },
      options: [
        {
          en: "Mentally tracking played tiles to deduce bag and opponent rack contents",
          es: "Mentally tracking played tiles to deduce bag and opponent rack contents",
          de: "Mentally tracking played tiles to deduce bag and opponent rack contents",
          nl: "Mentally tracking played tiles to deduce bag and opponent rack contents"
        },
        {
          en: "Counting your own tiles",
          es: "Counting your own tiles",
          de: "Counting your own tiles",
          nl: "Counting your own tiles"
        },
        {
          en: "Organizing tile rack",
          es: "Organizing tile rack",
          de: "Organizing tile rack",
          nl: "Organizing tile rack"
        },
        {
          en: "Recording scores",
          es: "Recording scores",
          de: "Recording scores",
          nl: "Recording scores"
        }
      ],
      correct: 0,
      explanation: {
        en: "Expert tile tracking monitors all 100 tiles, calculating probabilities of drawing specific tiles and inferring opponent holdings.",
        es: "Expert tile tracking monitors all 100 tiles, calculating probabilities of drawing specific tiles and inferring opponent holdings.",
        de: "Expert tile tracking monitors all 100 tiles, calculating probabilities of drawing specific tiles and inferring opponent holdings.",
        nl: "Expert tile tracking monitors all 100 tiles, calculating probabilities of drawing specific tiles and inferring opponent holdings."
      }
    },
    {
      question: {
        en: "What is challenge equity?",
        es: "What is challenge equity?",
        de: "What is challenge equity?",
        nl: "What is challenge equity?"
      },
      options: [
        {
          en: "Expected value calculation of challenging vs accepting suspicious word",
          es: "Expected value calculation of challenging vs accepting suspicious word",
          de: "Expected value calculation of challenging vs accepting suspicious word",
          nl: "Expected value calculation of challenging vs accepting suspicious word"
        },
        {
          en: "Challenge rules",
          es: "Challenge rules",
          de: "Challenge rules",
          nl: "Challenge rules"
        },
        {
          en: "Word validity",
          es: "Word validity",
          de: "Word validity",
          nl: "Word validity"
        },
        {
          en: "Fair play standards",
          es: "Fair play standards",
          de: "Fair play standards",
          nl: "Fair play standards"
        }
      ],
      correct: 0,
      explanation: {
        en: "Challenge when probability_phoney times word_cost exceeds one minus probability times challenge_penalty. Math determines optimal challenge threshold.",
        es: "Challenge when probability_phoney times word_cost exceeds one minus probability times challenge_penalty. Math determines optimal challenge threshold.",
        de: "Challenge when probability_phoney times word_cost exceeds one minus probability times challenge_penalty. Math determines optimal challenge threshold.",
        nl: "Challenge when probability_phoney times word_cost exceeds one minus probability times challenge_penalty. Math determines optimal challenge threshold."
      }
    },
    {
      question: {
        en: "What is positional sacrifice?",
        es: "What is positional sacrifice?",
        de: "What is positional sacrifice?",
        nl: "What is positional sacrifice?"
      },
      options: [
        {
          en: "Accepting fewer points to control board and guarantee winning position",
          es: "Accepting fewer points to control board and guarantee winning position",
          de: "Accepting fewer points to control board and guarantee winning position",
          nl: "Accepting fewer points to control board and guarantee winning position"
        },
        {
          en: "Giving up tiles",
          es: "Giving up tiles",
          de: "Giving up tiles",
          nl: "Giving up tiles"
        },
        {
          en: "Trading points for time",
          es: "Trading points for time",
          de: "Trading points for time",
          nl: "Trading points for time"
        },
        {
          en: "Losing intentionally",
          es: "Losing intentionally",
          de: "Losing intentionally",
          nl: "Losing intentionally"
        }
      ],
      correct: 0,
      explanation: {
        en: "Taking 25 points while blocking opponent 40-point setup can be optimal if it secures endgame control or last play.",
        es: "Taking 25 points while blocking opponent 40-point setup can be optimal if it secures endgame control or last play.",
        de: "Taking 25 points while blocking opponent 40-point setup can be optimal if it secures endgame control or last play.",
        nl: "Taking 25 points while blocking opponent 40-point setup can be optimal if it secures endgame control or last play."
      }
    },
    {
      question: {
        en: "What is volatility management?",
        es: "What is volatility management?",
        de: "What is volatility management?",
        nl: "What is volatility management?"
      },
      options: [
        {
          en: "Adjusting risk based on score: minimize variance when ahead, increase when behind",
          es: "Adjusting risk based on score: minimize variance when ahead, increase when behind",
          de: "Adjusting risk based on score: minimize variance when ahead, increase when behind",
          nl: "Adjusting risk based on score: minimize variance when ahead, increase when behind"
        },
        {
          en: "Controlling emotions",
          es: "Controlling emotions",
          de: "Controlling emotions",
          nl: "Controlling emotions"
        },
        {
          en: "Managing tile changes",
          es: "Managing tile changes",
          de: "Managing tile changes",
          nl: "Managing tile changes"
        },
        {
          en: "Score fluctuations",
          es: "Score fluctuations",
          de: "Score fluctuations",
          nl: "Score fluctuations"
        }
      ],
      correct: 0,
      explanation: {
        en: "When ahead, choose safe high-equity plays. When behind, increase variance through risky plays to create comeback opportunities.",
        es: "When ahead, choose safe high-equity plays. When behind, increase variance through risky plays to create comeback opportunities.",
        de: "When ahead, choose safe high-equity plays. When behind, increase variance through risky plays to create comeback opportunities.",
        nl: "When ahead, choose safe high-equity plays. When behind, increase variance through risky plays to create comeback opportunities."
      }
    },
    {
      question: {
        en: "What is the unseens calculation?",
        es: "What is the unseens calculation?",
        de: "What is the unseens calculation?",
        nl: "What is the unseens calculation?"
      },
      options: [
        {
          en: "Tracking unseen tiles to compute draw probabilities and rack inference",
          es: "Tracking unseen tiles to compute draw probabilities and rack inference",
          de: "Tracking unseen tiles to compute draw probabilities and rack inference",
          nl: "Tracking unseen tiles to compute draw probabilities and rack inference"
        },
        {
          en: "Hidden tiles count",
          es: "Hidden tiles count",
          de: "Hidden tiles count",
          nl: "Hidden tiles count"
        },
        {
          en: "Bag randomness",
          es: "Bag randomness",
          de: "Bag randomness",
          nl: "Bag randomness"
        },
        {
          en: "Unknown words",
          es: "Unknown words",
          de: "Unknown words",
          nl: "Unknown words"
        }
      ],
      correct: 0,
      explanation: {
        en: "Unseens equals 100 tiles minus played minus your rack. Experts use this to calculate exact probabilities for decision-making.",
        es: "Unseens equals 100 tiles minus played minus your rack. Experts use this to calculate exact probabilities for decision-making.",
        de: "Unseens equals 100 tiles minus played minus your rack. Experts use this to calculate exact probabilities for decision-making.",
        nl: "Unseens equals 100 tiles minus played minus your rack. Experts use this to calculate exact probabilities for decision-making."
      }
    },
    {
      question: {
        en: "What is perfect endgame play?",
        es: "What is perfect endgame play?",
        de: "What is perfect endgame play?",
        nl: "What is perfect endgame play?"
      },
      options: [
        {
          en: "Calculating exact optimal sequence when all tiles are known",
          es: "Calculating exact optimal sequence when all tiles are known",
          de: "Calculating exact optimal sequence when all tiles are known",
          nl: "Calculating exact optimal sequence when all tiles are known"
        },
        {
          en: "Finishing the game",
          es: "Finishing the game",
          de: "Finishing the game",
          nl: "Finishing the game"
        },
        {
          en: "Final turn strategy",
          es: "Final turn strategy",
          de: "Final turn strategy",
          nl: "Final turn strategy"
        },
        {
          en: "Game conclusion",
          es: "Game conclusion",
          de: "Game conclusion",
          nl: "Game conclusion"
        }
      ],
      correct: 0,
      explanation: {
        en: "With known tiles typically last 10-15, perfect play solves exact move sequences through exhaustive calculation, guaranteeing optimal result.",
        es: "With known tiles typically last 10-15, perfect play solves exact move sequences through exhaustive calculation, guaranteeing optimal result.",
        de: "With known tiles typically last 10-15, perfect play solves exact move sequences through exhaustive calculation, guaranteeing optimal result.",
        nl: "With known tiles typically last 10-15, perfect play solves exact move sequences through exhaustive calculation, guaranteeing optimal result."
      }
    }
  ];

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level10;
  }

  if (typeof window !== 'undefined') {
    window.level10 = level10;
  }
})();
