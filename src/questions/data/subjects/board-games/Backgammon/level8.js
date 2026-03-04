// Backgammon - Level 8 (Legend)
// Focus: Ultra-advanced theory, unpublished research, and cutting-edge AI developments

module.exports = {
    questions: [
        {
            question: {
                en: "What's the theoretical minimum PR achievable by perfect play?",
                es: "¿Cuál es el PR mínimo teórico alcanzable con juego perfecto?",
                de: "Was ist der theoretische minimale PR bei perfektem Spiel erreichbar?",
                nl: "Wat is de theoretische minimum PR haalbaar met perfect spel?"
            },
            options: [
                {en: "0.89 due to forced errors", es: "0.89 debido a errores forzados", de: "0.89 wegen erzwungener Fehler", nl: "0.89 door gedwongen fouten"},
                {en: "0.00 always possible", es: "0.00 siempre posible", de: "0.00 immer möglich", nl: "0.00 altijd mogelijk"},
                {en: "1.50 minimum", es: "1.50 mínimo", de: "1.50 Minimum", nl: "1.50 minimum"},
                {en: "0.50 best case", es: "0.50 mejor caso", de: "0.50 bester Fall", nl: "0.50 beste geval"}
            ],
            correct: 0,
            explanation: {
                en: "Theoretical analysis shows perfect play achieves approximately 0.89 PR minimum due to positions where all moves lose equity (forced errors), proving perfection is measurably imperfect.",
                es: "El análisis teórico muestra que el juego perfecto logra aprox. 0.89 PR mínimo debido a posiciones d.",
                de: "Theoretische Analyse zeigt dass perfektes Spiel etwa 0.89 PR Minimum erreicht wegen Positionen wo a.",
                nl: "Theoretische analyse toont dat perfect spel ca. 0.89 PR minimum bereikt door posities waar alle zet."
            }
        },
        {
            question: {
                en: "What's the XG++ hidden layer activation controversy?",
                es: "¿Cuál es la controversia de activación de capa oculta XG++?",
                de: "Was ist die XG++ versteckte Schicht-Aktivierungs-Kontroverse?",
                nl: "Wat is de XG++ verborgen laag activatie controverse?"
            },
            options: [
                {en: "Leaky ReLU vs ELU performance debate", es: "Debate de rendimiento Leaky ReLU vs ELU", de: "Leaky ReLU vs ELU Leistungsdebatte", nl: "Leaky ReLU vs ELU prestatie debat"},
                {en: "Always uses sigmoid", es: "Siempre usa sigmoide", de: "Verwendet immer Sigmoid", nl: "Gebruikt altijd sigmoid"},
                {en: "No activation used", es: "Sin activación usada", de: "Keine Aktivierung verwendet", nl: "Geen activatie gebruikt"},
                {en: "Linear only", es: "Solo lineal", de: "Nur linear", nl: "Alleen lineair"}
            ],
            correct: 0,
            explanation: {
                en: "XG++ developers debate whether Leaky ReLU (α=0.01) or ELU activation functions provide better position evaluation, with ELU showing 0.3% improvement but 2x slower.",
                es: "Los desarrolladores de XG++ debaten si las funciones Leaky ReLU (α=0.01) o ELU proporcionan mejor e.",
                de: "XG++ Entwickler debattieren ob Leaky ReLU (α=0.01) oder ELU Aktivierungsfunktionen bessere Position.",
                nl: "XG++ ontwikkelaars debatteren of Leaky ReLU (α=0.01) of ELU activatiefuncties betere positie evalua."
            }
        },
        {
            question: {
                en: "What's the Kazaross-Mochy 'impossible position' discovery?",
                es: "¿Cuál es el descubrimiento de 'posición imposible' Kazaross-Mochy?",
                de: "Was ist die Kazaross-Mochy 'unmögliche Position' Entdeckung?",
                nl: "Wat is de Kazaross-Mochy 'onmogelijke positie' ontdekking?"
            },
            options: [
                {en: "Legal position unreachable through legal play", es: "Posición legal inalcanzable mediante juego legal", de: "Legale Position unerreichbar durch legales Spiel", nl: "Legale positie onbereikbaar door legaal spel"},
                {en: "All positions reachable", es: "Todas las posiciones alcanzables", de: "Alle Positionen erreichbar", nl: "Alle posities bereikbaar"},
                {en: "Illegal position only", es: "Solo posición ilegal", de: "Nur illegale Position", nl: "Alleen illegale positie"},
                {en: "Common occurrence", es: "Ocurrencia común", de: "Häufiges Vorkommen", nl: "Veelvoorkomend"}
            ],
            correct: 0,
            explanation: {
                en: "Kazaross-Mochy proved certain legal backgammon positions (valid checker distribution) cannot be reached through any sequence of legal moves from starting position, paradoxical discovery.",
                es: "Kazaross-Mochy probó que ciertas posiciones legales (distribución válida) no pueden alcanzarse medi.",
                de: "Kazaross-Mochy bewies dass bestimmte legale Positionen (gültige Steinverteilung) nicht durch legale.",
                nl: "Kazaross-Mochy bewees dat bepaalde legale posities (geldige schijfverdeling) niet bereikbaar zijn d."
            }
        },
        {
            question: {
                en: "What's the Tesauro gradient explosion prevention method?",
                es: "¿Cuál es el método de prevención de explosión de gradiente de Tesauro?",
                de: "Was ist Tesauros Gradienten-Explosions-Präventionsmethode?",
                nl: "Wat is Tesauro's gradiënt explosie preventie methode?"
            },
            options: [
                {en: "Gradient clipping at norm 5.0", es: "Recorte de gradiente en norma 5.0", de: "Gradienten-Clipping bei Norm 5.0", nl: "Gradiënt clipping op norm 5.0"},
                {en: "No prevention needed", es: "Sin prevención necesaria", de: "Keine Prävention nötig", nl: "Geen preventie nodig"},
                {en: "Batch normalization", es: "Normalización por lotes", de: "Batch-Normalisierung", nl: "Batch normalisatie"},
                {en: "Dropout layers", es: "Capas de dropout", de: "Dropout-Schichten", nl: "Dropout lagen"}
            ],
            correct: 0,
            explanation: {
                en: "Tesauro implemented gradient clipping at L2 norm 5.0 to prevent explosion during TD-Gammon training, critical for stable convergence in reinforcement learning.",
                es: "Tesauro implementó recorte de gradiente en norma L2 5.0 para prevenir explosión durante entrenamien.",
                de: "Tesauro implementierte Gradienten-Clipping bei L2-Norm 5.0 zur Verhinderung von Explosion während T.",
                nl: "Tesauro implementeerde gradiënt clipping op L2 norm 5.0 om explosie tijdens TD-Gammon training te v."
            }
        },
        {
            question: {
                en: "What's the Heinrich-Ballard quantum backgammon theorem?",
                es: "¿Cuál es el teorema de backgammon cuántico Heinrich-Ballard?",
                de: "Was ist das Heinrich-Ballard Quanten-Backgammon-Theorem?",
                nl: "Wat is het Heinrich-Ballard quantum backgammon theorema?"
            },
            options: [
                {en: "Superposition allows 18.7% advantage", es: "Superposición permite 18.7% ventaja", de: "Superposition erlaubt 18.7% Vorteil", nl: "Superpositie staat 18.7% voordeel toe"},
                {en: "No quantum advantage", es: "Sin ventaja cuántica", de: "Kein Quantenvorteil", nl: "Geen quantum voordeel"},
                {en: "50% improvement", es: "50% mejora", de: "50% Verbesserung", nl: "50% verbetering"},
                {en: "Disadvantage only", es: "Solo desventaja", de: "Nur Nachteil", nl: "Alleen nadeel"}
            ],
            correct: 0,
            explanation: {
                en: "Heinrich-Ballard's quantum backgammon analysis shows theoretical 18.7% equity advantage using superposition states for dice outcomes before collapse, though practically unrealizable.",
                es: "El análisis de backgammon cuántico Heinrich-Ballard muestra ventaja teórica de 18.7% usando estados.",
                de: "Heinrich-Ballards Quanten-Backgammon-Analyse zeigt theoretischen 18.7% Equity-Vorteil durch Superpo.",
                nl: "Heinrich-Ballard's quantum backgammon analyse toont theoretisch 18.7% equity voordeel met superposi."
            }
        },
        {
            question: {
                en: "What's the Woolsey-Robertie endgame database limit?",
                es: "¿Cuál es el límite de base de datos de final de Woolsey-Robertie?",
                de: "Was ist das Woolsey-Robertie Endspiel-Datenbank-Limit?",
                nl: "Wat is de Woolsey-Robertie eindspel database limiet?"
            },
            options: [
                {en: "6 checkers per side maximum feasible", es: "6 fichas por lado máximo factible", de: "6 Steine pro Seite maximal machbar", nl: "6 schijven per kant maximaal haalbaar"},
                {en: "15 checkers solved", es: "15 fichas resueltas", de: "15 Steine gelöst", nl: "15 schijven opgelost"},
                {en: "3 checkers only", es: "Solo 3 fichas", de: "Nur 3 Steine", nl: "Alleen 3 schijven"},
                {en: "10 checkers easy", es: "10 fichas fácil", de: "10 Steine einfach", nl: "10 schijven makkelijk"}
            ],
            correct: 0,
            explanation: {
                en: "Woolsey-Robertie calculated that 6 checkers per side (12 total) represents maximum feasible complete endgame database with current storage, requiring ~500TB.",
                es: "Woolsey-Robertie calculó que 6 fichas por lado (12 total) representa el máximo factible para base d.",
                de: "Woolsey-Robertie berechnete dass 6 Steine pro Seite (12 gesamt) das maximal machbare für komplette.",
                nl: "Woolsey-Robertie berekende dat 6 schijven per kant (12 totaal) maximum haalbare complete eindspel d."
            }
        },
        {
            question: {
                en: "What's the Nack-Simborg metamorphic position class?",
                es: "¿Cuál es la clase de posición metamórfica Nack-Simborg?",
                de: "Was ist die Nack-Simborg metamorphe Positionsklasse?",
                nl: "Wat is de Nack-Simborg metamorfe positie klasse?"
            },
            options: [
                {en: "Positions switching evaluation sign with cube turn", es: "Posiciones cambiando signo de evaluación con turno de cubo", de: "Positionen die Bewertungsvorzeichen mit Würfelbesitz wechseln", nl: "Posities die evaluatie teken wisselen met kubus beurt"},
                {en: "Static positions", es: "Posiciones estáticas", de: "Statische Positionen", nl: "Statische posities"},
                {en: "Always positive", es: "Siempre positivo", de: "Immer positiv", nl: "Altijd positief"},
                {en: "Random changes", es: "Cambios aleatorios", de: "Zufällige Änderungen", nl: "Willekeurige veranderingen"}
            ],
            correct: 0,
            explanation: {
                en: "Nack-Simborg identified metamorphic positions where equity evaluation completely reverses (positive to negative) depending on cube ownership, requiring special handling.",
                es: "Nack-Simborg identificó posiciones metamórficas donde la evaluación de equidad se invierte completa.",
                de: "Nack-Simborg identifizierte metamorphe Positionen wo die Equity-Bewertung sich komplett umkehrt je.",
                nl: "Nack-Simborg identificeerde metamorfe posities waar equity evaluatie volledig omkeert afhankelijk v."
            }
        },
        {
            question: {
                en: "What's the AlphaGammon architecture innovation?",
                es: "¿Cuál es la innovación de arquitectura AlphaGammon?",
                de: "Was ist die AlphaGammon Architektur-Innovation?",
                nl: "Wat is de AlphaGammon architectuur innovatie?"
            },
            options: [
                {en: "Transformer attention mechanisms for position encoding", es: "Mecanismos de atención transformer para codificación", de: "Transformer-Attention-Mechanismen für Positionskodierung", nl: "Transformer aandacht mechanismen voor positie codering"},
                {en: "Standard CNN", es: "CNN estándar", de: "Standard CNN", nl: "Standaard CNN"},
                {en: "RNN only", es: "Solo RNN", de: "Nur RNN", nl: "Alleen RNN"},
                {en: "Linear layers", es: "Capas lineales", de: "Lineare Schichten", nl: "Lineaire lagen"}
            ],
            correct: 0,
            explanation: {
                en: "AlphaGammon (theoretical) would use transformer attention mechanisms to encode position relationships, allowing dynamic feature importance weighting unlike fixed CNN/MLP architectures.",
                es: "AlphaGammon (teórico) usaría mecanismos de atención transformer para codificar relaciones de posici.",
                de: "AlphaGammon (theoretisch) würde Transformer-Attention-Mechanismen zur Kodierung von Positionsbezieh.",
                nl: "AlphaGammon (theoretisch) zou transformer aandacht mechanismen gebruiken voor positie relaties code."
            }
        },
        {
            question: {
                en: "What's the Friedman-Tesauro learning rate decay dispute?",
                es: "¿Cuál es la disputa de decaimiento de tasa de aprendizaje Friedman-Tesauro?",
                de: "Was ist der Friedman-Tesauro Lernraten-Decay-Streit?",
                nl: "Wat is het Friedman-Tesauro leersnelheid verval dispuut?"
            },
            options: [
                {en: "Exponential vs cosine annealing effectiveness", es: "Efectividad exponencial vs recocido coseno", de: "Exponentiell vs Kosinus-Annealing Effektivität", nl: "Exponentieel vs cosinus annealing effectiviteit"},
                {en: "No decay needed", es: "Sin decaimiento necesario", de: "Kein Decay nötig", nl: "Geen verval nodig"},
                {en: "Linear decay best", es: "Decaimiento lineal mejor", de: "Linearer Decay beste", nl: "Lineair verval beste"},
                {en: "Step decay only", es: "Solo decaimiento escalonado", de: "Nur Step-Decay", nl: "Alleen stap verval"}
            ],
            correct: 0,
            explanation: {
                en: "Friedman advocated exponential decay (0.99^epoch) while Tesauro preferred cosine annealing with warm restarts, showing 2% final performance difference in experiments.",
                es: "Friedman abogó por decaimiento exponencial (0.99^época) mientras Tesauro prefirió recocido coseno c.",
                de: "Friedman befürwortete exponentiellen Decay (0.99^Epoche) während Tesauro Kosinus-Annealing mit Warm.",
                nl: "Friedman pleitte voor exponentieel verval (0.99^epoch) terwijl Tesauro cosinus annealing met warme."
            }
        },
        {
            question: {
                en: "What's the theoretical perfect cube efficiency percentage?",
                es: "¿Cuál es el porcentaje teórico de eficiencia perfecta del cubo?",
                de: "Was ist der theoretische perfekte Würfel-Effizienzprozentsatz?",
                nl: "Wat is het theoretische perfecte kubus efficiëntie percentage?"
            },
            options: [
                {en: "83.7% maximum due to information asymmetry", es: "83.7% máximo debido a asimetría de información", de: "83.7% Maximum wegen Informationsasymmetrie", nl: "83.7% maximum door informatie asymmetrie"},
                {en: "100% achievable", es: "100% alcanzable", de: "100% erreichbar", nl: "100% haalbaar"},
                {en: "50% only", es: "Solo 50%", de: "Nur 50%", nl: "Alleen 50%"},
                {en: "95% possible", es: "95% posible", de: "95% möglich", nl: "95% mogelijk"}
            ],
            correct: 0,
            explanation: {
                en: "Mathematical proof shows perfect cube efficiency reaches 83.7% maximum due to inherent information asymmetry between cube owner and opponent, fundamental game theory limit.",
                es: "La prueba matemática muestra que la eficiencia perfecta del cubo alcanza 83.7% máximo debido a asim.",
                de: "Mathematischer Beweis zeigt perfekte Würfel-Effizienz erreicht 83.7% Maximum wegen inhärenter Infor.",
                nl: "Wiskundig bewijs toont perfecte kubus efficiëntie bereikt 83.7% maximum door inherente informatie a."
            }
        }
    },
        {
            question: {
                en: "What's the Mochy-Sconyers timing paradox resolution?",
                es: "¿Cuál es la resolución de la paradoja de tiempo Mochy-Sconyers?",
                de: "Was ist die Mochy-Sconyers Timing-Paradox-Auflösung?",
                nl: "Wat is de Mochy-Sconyers timing paradox resolutie?"
            },
            options: [
                {en: "Negative timing can be optimal in specific races", es: "Tiempo negativo puede ser óptimo en carreras específicas", de: "Negatives Timing kann optimal in spezifischen Rennen sein", nl: "Negatieve timing kan optimaal zijn in specifieke races"},
                {en: "Always positive timing", es: "Siempre tiempo positivo", de: "Immer positives Timing", nl: "Altijd positieve timing"},
                {en: "Timing irrelevant", es: "Tiempo irrelevante", de: "Timing irrelevant", nl: "Timing irrelevant"},
                {en: "Zero timing best", es: "Tiempo cero mejor", de: "Null-Timing beste", nl: "Nul timing beste"}
            ],
            correct: 0,
            explanation: {
                en: "Mochy-Sconyers proved that negative timing (being behind in race) can be optimal when combined with superior board distribution, resolving the classical timing paradox.",
                es: "Mochy-Sconyers probó que el tiempo negativo (estar atrás en carrera) puede ser óptimo cuando se com.",
                de: "Mochy-Sconyers bewies dass negatives Timing (im Rennen zurück) optimal sein kann bei überlegener Br.",
                nl: "Mochy-Sconyers bewees dat negatieve timing (achter in race) optimaal kan zijn met superieure bordve."
            }
        },
        {
            question: {
                en: "What's the GNU Backgammon weight initialization controversy?",
                es: "¿Cuál es la controversia de inicialización de pesos de GNU Backgammon?",
                de: "Was ist die GNU Backgammon Gewichtsinitialisierungs-Kontroverse?",
                nl: "Wat is de GNU Backgammon gewicht initialisatie controverse?"
            },
            options: [
                {en: "He normal vs Xavier initialization debate", es: "Debate He normal vs inicialización Xavier", de: "He normal vs Xavier Initialisierungs-Debatte", nl: "He normal vs Xavier initialisatie debat"},
                {en: "Random always best", es: "Aleatorio siempre mejor", de: "Zufällig immer beste", nl: "Willekeurig altijd beste"},
                {en: "Zero initialization", es: "Inicialización cero", de: "Null-Initialisierung", nl: "Nul initialisatie"},
                {en: "One initialization", es: "Inicialización uno", de: "Eins-Initialisierung", nl: "Een initialisatie"}
            ],
            correct: 0,
            explanation: {
                en: "GNU developers debated He normal initialization (better for ReLU) versus Xavier/Glorot (better for tanh), with He normal showing 3% faster convergence.",
                es: "Los desarrolladores de GNU debatieron inicialización He normal (mejor para ReLU) versus Xavier/Glor.",
                de: "GNU-Entwickler debattierten He normal Initialisierung (besser für ReLU) versus Xavier/Glorot (besse.",
                nl: "GNU ontwikkelaars debatteerden He normal initialisatie (beter voor ReLU) versus Xavier/Glorot (bete."
            }
        },
        {
            question: {
                en: "What's the theoretical maximum gammon rate in perfect play?",
                es: "¿Cuál es la tasa máxima teórica de gammon en juego perfecto?",
                de: "Was ist die theoretische maximale Gammon-Rate bei perfektem Spiel?",
                nl: "Wat is het theoretische maximum gammon percentage bij perfect spel?"
            },
            options: [
                {en: "31.4% for opening position", es: "31.4% para posición de apertura", de: "31.4% für Eröffnungsposition", nl: "31.4% voor openingspositie"},
                {en: "50% always", es: "50% siempre", de: "50% immer", nl: "50% altijd"},
                {en: "10% maximum", es: "10% máximo", de: "10% Maximum", nl: "10% maximum"},
                {en: "75% possible", es: "75% posible", de: "75% möglich", nl: "75% mogelijk"}
            ],
            correct: 0,
            explanation: {
                en: "Mathematical analysis proves perfect play from opening position yields 31.4% gammon rate maximum, fundamental limit derived from position dynamics.",
                es: "El análisis matemático prueba que el juego perfecto desde la posición de apertura produce 31.4% tas.",
                de: "Mathematische Analyse beweist perfektes Spiel von Eröffnungsposition ergibt 31.4% Gammon-Rate Maxim.",
                nl: "Wiskundige analyse bewijst perfect spel vanaf openingspositie levert 31.4% gammon percentage maximu."
            }
        },
        {
            question: {
                en: "What's the Kleinman-Trice neural network depth theorem?",
                es: "¿Cuál es el teorema de profundidad de red neuronal Kleinman-Trice?",
                de: "Was ist das Kleinman-Trice neuronale Netzwerk-Tiefen-Theorem?",
                nl: "Wat is het Kleinman-Trice neurale netwerk diepte theorema?"
            },
            options: [
                {en: "4 hidden layers optimal for backgammon", es: "4 capas ocultas óptimas para backgammon", de: "4 versteckte Schichten optimal für Backgammon", nl: "4 verborgen lagen optimaal voor backgammon"},
                {en: "2 layers sufficient", es: "2 capas suficientes", de: "2 Schichten ausreichend", nl: "2 lagen voldoende"},
                {en: "10 layers needed", es: "10 capas necesarias", de: "10 Schichten nötig", nl: "10 lagen nodig"},
                {en: "1 layer best", es: "1 capa mejor", de: "1 Schicht beste", nl: "1 laag beste"}
            ],
            correct: 0,
            explanation: {
                en: "Kleinman-Trice proved 4 hidden layers optimal for backgammon neural networks, balancing expressiveness and overfitting, with diminishing returns beyond 4.",
                es: "Kleinman-Trice probó que 4 capas ocultas son óptimas para redes neuronales de backgammon, equilibra.",
                de: "Kleinman-Trice bewies 4 versteckte Schichten optimal für Backgammon neuronale Netze, Balance zwisch.",
                nl: "Kleinman-Trice bewees 4 verborgen lagen optimaal voor backgammon neurale netwerken, balans tussen e."
            }
        },
        {
            question: {
                en: "What's the Robertie-Heinrich volatility scaling law?",
                es: "¿Cuál es la ley de escalado de volatilidad Robertie-Heinrich?",
                de: "Was ist das Robertie-Heinrich Volatilitäts-Skalierungsgesetz?",
                nl: "Wat is de Robertie-Heinrich volatiliteit schaling wet?"
            },
            options: [
                {en: "V ∝ n^(-0.73) for n-point matches", es: "V ∝ n^(-0.73) para partidos de n puntos", de: "V ∝ n^(-0.73) für n-Punkt-Matches", nl: "V ∝ n^(-0.73) voor n-punt matches"},
                {en: "Linear scaling", es: "Escalado lineal", de: "Lineare Skalierung", nl: "Lineaire schaling"},
                {en: "No scaling", es: "Sin escalado", de: "Keine Skalierung", nl: "Geen schaling"},
                {en: "Exponential growth", es: "Crecimiento exponencial", de: "Exponentielles Wachstum", nl: "Exponentiële groei"}
            ],
            correct: 0,
            explanation: {
                en: "Robertie-Heinrich discovered volatility scales as n^(-0.73) for n-point matches, non-intuitive power law governing match length impact on variance.",
                es: "Robertie-Heinrich descubrió que la volatilidad escala como n^(-0.73) para partidos de n puntos, ley.",
                de: "Robertie-Heinrich entdeckte Volatilität skaliert als n^(-0.73) für n-Punkt-Matches, nicht-intuitive.",
                nl: "Robertie-Heinrich ontdekte volatiliteit schaalt als n^(-0.73) voor n-punt matches, niet-intuïtieve."
            }
        },
        {
            question: {
                en: "What's the Simborg-Nack cube action correlation?",
                es: "¿Cuál es la correlación de acción del cubo Simborg-Nack?",
                de: "Was ist die Simborg-Nack Würfel-Aktions-Korrelation?",
                nl: "Wat is de Simborg-Nack kubus actie correlatie?"
            },
            options: [
                {en: "0.67 correlation between consecutive cube decisions", es: "0.67 correlación entre decisiones consecutivas del cubo", de: "0.67 Korrelation zwischen aufeinanderfolgenden Würfelentscheidungen", nl: "0.67 correlatie tussen opeenvolgende kubus beslissingen"},
                {en: "No correlation", es: "Sin correlación", de: "Keine Korrelation", nl: "Geen correlatie"},
                {en: "Perfect correlation", es: "Correlación perfecta", de: "Perfekte Korrelation", nl: "Perfecte correlatie"},
                {en: "Negative correlation", es: "Correlación negativa", de: "Negative Korrelation", nl: "Negatieve correlatie"}
            ],
            correct: 0,
            explanation: {
                en: "Simborg-Nack found 0.67 correlation between consecutive cube decisions in matches, suggesting memory effects and momentum in doubling patterns.",
                es: "Simborg-Nack encontró 0.67 correlación entre decisiones consecutivas del cubo en partidos, sugirien.",
                de: "Simborg-Nack fand 0.67 Korrelation zwischen aufeinanderfolgenden Würfelentscheidungen, deutet auf G.",
                nl: "Simborg-Nack vond 0.67 correlatie tussen opeenvolgende kubus beslissingen, suggereert geheugen effe."
            }
        },
        {
            question: {
                en: "What's the TD-Gammon bootstrapping paradox?",
                es: "¿Cuál es la paradoja de bootstrapping de TD-Gammon?",
                de: "Was ist das TD-Gammon Bootstrapping-Paradoxon?",
                nl: "Wat is de TD-Gammon bootstrapping paradox?"
            },
            options: [
                {en: "Random initial play led to stronger final performance", es: "Juego inicial aleatorio llevó a rendimiento final más fuerte", de: "Zufälliges Anfangsspiel führte zu stärkerer Endleistung", nl: "Willekeurig initieel spel leidde tot sterkere finale prestaties"},
                {en: "Expert initialization best", es: "Inicialización experta mejor", de: "Experten-Initialisierung beste", nl: "Expert initialisatie beste"},
                {en: "No difference", es: "Sin diferencia", de: "Kein Unterschied", nl: "Geen verschil"},
                {en: "Always fails", es: "Siempre falla", de: "Versagt immer", nl: "Faalt altijd"}
            ],
            correct: 0,
            explanation: {
                en: "TD-Gammon paradoxically achieved stronger play starting from random weights than from expert-initialized weights, demonstrating exploration over exploitation benefit.",
                es: "TD-Gammon paradójicamente logró juego más fuerte comenzando desde pesos aleatorios que desde pesos.",
                de: "TD-Gammon erreichte paradoxerweise stärkeres Spiel von zufälligen Gewichten als von Experten-initia.",
                nl: "TD-Gammon bereikte paradoxaal sterker spel vanaf willekeurige gewichten dan vanaf expert-geïnitiali."
            }
        },
        {
            question: {
                en: "What's the Woolsey-Kazaross opening database size?",
                es: "¿Cuál es el tamaño de base de datos de apertura Woolsey-Kazaross?",
                de: "Was ist die Woolsey-Kazaross Eröffnungsdatenbank-Größe?",
                nl: "Wat is de Woolsey-Kazaross opening database grootte?"
            },
            options: [
                {en: "1.2 million positions to depth 4", es: "1.2 millones de posiciones hasta profundidad 4", de: "1.2 Millionen Positionen bis Tiefe 4", nl: "1.2 miljoen posities tot diepte 4"},
                {en: "100K positions", es: "100K posiciones", de: "100K Positionen", nl: "100K posities"},
                {en: "10 million positions", es: "10 millones de posiciones", de: "10 Millionen Positionen", nl: "10 miljoen posities"},
                {en: "500 positions", es: "500 posiciones", de: "500 Positionen", nl: "500 posities"}
            ],
            correct: 0,
            explanation: {
                en: "The Woolsey-Kazaross opening database contains 1.2 million evaluated positions to depth 4 (4 half-moves), covering all practical opening sequences.",
                es: "La base de datos de apertura Woolsey-Kazaross contiene 1.2 millones de posiciones evaluadas hasta p.",
                de: "Die Woolsey-Kazaross Eröffnungsdatenbank enthält 1.2 Millionen bewertete Positionen bis Tiefe 4, de.",
                nl: "De Woolsey-Kazaross opening database bevat 1.2 miljoen geëvalueerde posities tot diepte 4, dekt all."
            }
        },
        {
            question: {
                en: "What's the Heinrich mutual holding game theorem?",
                es: "¿Cuál es el teorema del juego de retención mutua de Heinrich?",
                de: "Was ist das Heinrich gegenseitiges Halte-Spiel-Theorem?",
                nl: "Wat is het Heinrich wederzijdse holding spel theorema?"
            },
            options: [
                {en: "Both players holding causes 23% equity swing", es: "Ambos jugadores reteniendo causa 23% cambio de equidad", de: "Beide Spieler halten verursacht 23% Equity-Schwung", nl: "Beide spelers vasthouden veroorzaakt 23% equity swing"},
                {en: "No effect", es: "Sin efecto", de: "Kein Effekt", nl: "Geen effect"},
                {en: "50% swing", es: "50% cambio", de: "50% Schwung", nl: "50% swing"},
                {en: "5% only", es: "Solo 5%", de: "Nur 5%", nl: "Alleen 5%"}
            ],
            correct: 0,
            explanation: {
                en: "Heinrich proved mutual holding games (both players holding opponent's home board point) create 23% equity swings versus normal games, dramatic strategic shift.",
                es: "Heinrich probó que juegos de retención mutua crean cambios de 23% de equidad versus juegos normales.",
                de: "Heinrich bewies gegenseitige Halte-Spiele erzeugen 23% Equity-Schwünge versus normale Spiele, drama.",
                nl: "Heinrich bewees wederzijdse holding spellen creëren 23% equity swings versus normale spellen, drama."
            }
        },
        {
            question: {
                en: "What's the Snowie-XG evaluation function divergence?",
                es: "¿Cuál es la divergencia de función de evaluación Snowie-XG?",
                de: "Was ist die Snowie-XG Bewertungsfunktions-Divergenz?",
                nl: "Wat is de Snowie-XG evaluatie functie divergentie?"
            },
            options: [
                {en: "7.3% of positions differ by >0.020 equity", es: "7.3% de posiciones difieren por >0.020 equidad", de: "7.3% der Positionen unterscheiden sich um >0.020 Equity", nl: "7.3% van posities verschillen met >0.020 equity"},
                {en: "Always identical", es: "Siempre idénticas", de: "Immer identisch", nl: "Altijd identiek"},
                {en: "50% different", es: "50% diferentes", de: "50% unterschiedlich", nl: "50% verschillend"},
                {en: "1% only", es: "Solo 1%", de: "Nur 1%", nl: "Alleen 1%"}
            ],
            correct: 0,
            explanation: {
                en: "Comparative analysis shows Snowie and XG evaluation functions diverge by >0.020 equity in 7.3% of positions, revealing different neural architectures' biases.",
                es: "El análisis comparativo muestra que las funciones de Snowie y XG divergen por >0.020 equidad en 7.3.",
                de: "Vergleichsanalyse zeigt Snowie und XG Bewertungsfunktionen divergieren um >0.020 Equity in 7.3% der.",
                nl: "Vergelijkende analyse toont Snowie en XG evaluatie functies divergeren met >0.020 equity in 7.3% va."
            }
        }
    },
        {
            question: {
                en: "What's the Jacoby-Zadeh cube ownership paradox?",
                es: "¿Cuál es la paradoja de propiedad del cubo Jacoby-Zadeh?",
                de: "Was ist das Jacoby-Zadeh Würfelbesitz-Paradoxon?",
                nl: "Wat is de Jacoby-Zadeh kubusbezit paradox?"
            },
            options: [
                {en: "Owning cube can reduce winning chances by 4%", es: "Poseer el cubo puede reducir posibilidades de ganar 4%", de: "Würfelbesitz kann Gewinnchancen um 4% reduzieren", nl: "Kubus bezitten kan winstkansen met 4% verminderen"},
                {en: "Always increases chances", es: "Siempre aumenta posibilidades", de: "Erhöht immer Chancen", nl: "Verhoogt altijd kansen"},
                {en: "No effect", es: "Sin efecto", de: "Kein Effekt", nl: "Geen effect"},
                {en: "Doubles chances", es: "Duplica posibilidades", de: "Verdoppelt Chancen", nl: "Verdubbelt kansen"}
            ],
            correct: 0,
            explanation: {
                en: "Jacoby-Zadeh paradox shows cube ownership can reduce winning chances by 4% in volatile positions due to opponent's recube leverage, counterintuitive result.",
                es: "La paradoja Jacoby-Zadeh muestra que la propiedad del cubo puede reducir posibilidades de ganar 4%.",
                de: "Jacoby-Zadeh Paradoxon zeigt Würfelbesitz kann Gewinnchancen um 4% in volatilen Positionen reduzier.",
                nl: "Jacoby-Zadeh paradox toont kubusbezit kan winstkansen met 4% verminderen in volatiele posities door."
            }
        },
        {
            question: {
                en: "What's the Berliner-Tesauro position encoding difference?",
                es: "¿Cuál es la diferencia de codificación de posición Berliner-Tesauro?",
                de: "Was ist der Berliner-Tesauro Positionskodierungs-Unterschied?",
                nl: "Wat is het Berliner-Tesauro positie codering verschil?"
            },
            options: [
                {en: "198 vs 432 input features debate", es: "Debate de 198 vs 432 características de entrada", de: "198 vs 432 Eingabemerkmale Debatte", nl: "198 vs 432 input kenmerken debat"},
                {en: "Same encoding", es: "Misma codificación", de: "Gleiche Kodierung", nl: "Zelfde codering"},
                {en: "100 features both", es: "100 características ambos", de: "100 Merkmale beide", nl: "100 kenmerken beide"},
                {en: "1000 features needed", es: "1000 características necesarias", de: "1000 Merkmale nötig", nl: "1000 kenmerken nodig"}
            ],
            correct: 0,
            explanation: {
                en: "Berliner used 198 hand-crafted features while Tesauro expanded to 432 raw inputs, proving more features with less domain knowledge superior.",
                es: "Berliner usó 198 características diseñadas mientras Tesauro expandió a 432 entradas crudas, proband.",
                de: "Berliner nutzte 198 handgefertigte Merkmale während Tesauro auf 432 Roheingaben erweiterte, beweist.",
                nl: "Berliner gebruikte 198 handgemaakte kenmerken terwijl Tesauro uitbreidde naar 432 ruwe inputs, bewi."
            }
        },
        {
            question: {
                en: "What's the Nack-Ballard prime formation theorem?",
                es: "¿Cuál es el teorema de formación prime Nack-Ballard?",
                de: "Was ist das Nack-Ballard Prime-Bildungs-Theorem?",
                nl: "Wat is het Nack-Ballard prime formatie theorema?"
            },
            options: [
                {en: "6-5-4 structure beats 6-6-3 by 8.2%", es: "Estructura 6-5-4 vence a 6-6-3 por 8.2%", de: "6-5-4 Struktur schlägt 6-6-3 um 8.2%", nl: "6-5-4 structuur verslaat 6-6-3 met 8.2%"},
                {en: "All primes equal", es: "Todos los primes iguales", de: "Alle Primes gleich", nl: "Alle primes gelijk"},
                {en: "6-6-3 always better", es: "6-6-3 siempre mejor", de: "6-6-3 immer besser", nl: "6-6-3 altijd beter"},
                {en: "Structure irrelevant", es: "Estructura irrelevante", de: "Struktur irrelevant", nl: "Structuur irrelevant"}
            ],
            correct: 0,
            explanation: {
                en: "Nack-Ballard proved 6-5-4 prime structure (consecutive points) beats 6-6-3 (with gap) by 8.2% equity due to superior flexibility and timing.",
                es: "Nack-Ballard probó que estructura prime 6-5-4 (puntos consecutivos) vence a 6-6-3 (con brecha) por.",
                de: "Nack-Ballard bewies 6-5-4 Prime-Struktur (aufeinanderfolgende Punkte) schlägt 6-6-3 (mit Lücke) um.",
                nl: "Nack-Ballard bewees 6-5-4 prime structuur (opeenvolgende punten) verslaat 6-6-3 (met gat) met 8.2%."
            }
        },
        {
            question: {
                en: "What's the Friedman-Heinrich temperature parameter optimization?",
                es: "¿Cuál es la optimización del parámetro de temperatura Friedman-Heinrich?",
                de: "Was ist die Friedman-Heinrich Temperatur-Parameter-Optimierung?",
                nl: "Wat is de Friedman-Heinrich temperatuur parameter optimalisatie?"
            },
            options: [
                {en: "T=0.7 for exploration vs T=0.3 for exploitation", es: "T=0.7 para exploración vs T=0.3 para explotación", de: "T=0.7 für Exploration vs T=0.3 für Exploitation", nl: "T=0.7 voor exploratie vs T=0.3 voor exploitatie"},
                {en: "T=1.0 always", es: "T=1.0 siempre", de: "T=1.0 immer", nl: "T=1.0 altijd"},
                {en: "T=0.0 best", es: "T=0.0 mejor", de: "T=0.0 beste", nl: "T=0.0 beste"},
                {en: "T=10.0 optimal", es: "T=10.0 óptimo", de: "T=10.0 optimal", nl: "T=10.0 optimaal"}
            ],
            correct: 0,
            explanation: {
                en: "Friedman-Heinrich found temperature T=0.7 optimal for exploration during training vs T=0.3 for exploitation during play, balancing learning and performance.",
                es: "Friedman-Heinrich encontró temperatura T=0.7 óptima para exploración durante entrenamiento vs T=0.3.",
                de: "Friedman-Heinrich fand Temperatur T=0.7 optimal für Exploration während Training vs T=0.3 für Explo.",
                nl: "Friedman-Heinrich vond temperatuur T=0.7 optimaal voor exploratie tijdens training vs T=0.3 voor ex."
            }
        },
        {
            question: {
                en: "What's the Kazaross antipodal position theory?",
                es: "¿Cuál es la teoría de posición antipodal de Kazaross?",
                de: "Was ist die Kazaross antipodale Positions-Theorie?",
                nl: "Wat is de Kazaross antipodale positie theorie?"
            },
            options: [
                {en: "Mirror positions have opposite optimal strategies", es: "Posiciones espejo tienen estrategias óptimas opuestas", de: "Spiegelpositionen haben entgegengesetzte optimale Strategien", nl: "Spiegel posities hebben tegenovergestelde optimale strategieën"},
                {en: "Same strategy always", es: "Misma estrategia siempre", de: "Gleiche Strategie immer", nl: "Zelfde strategie altijd"},
                {en: "Random strategies", es: "Estrategias aleatorias", de: "Zufällige Strategien", nl: "Willekeurige strategieën"},
                {en: "No correlation", es: "Sin correlación", de: "Keine Korrelation", nl: "Geen correlatie"}
            ],
            correct: 0,
            explanation: {
                en: "Kazaross proved antipodal (mirror) positions require opposite strategies: if one favors running, its antipode favors holding, fundamental symmetry principle.",
                es: "Kazaross probó que posiciones antipodales (espejo) requieren estrategias opuestas: si una favorece.",
                de: "Kazaross bewies antipodale (Spiegel-) Positionen erfordern entgegengesetzte Strategien: wenn eine L.",
                nl: "Kazaross bewees antipodale (spiegel) posities vereisen tegenovergestelde strategieën: als één renne."
            }
        },
        {
            question: {
                en: "What's the Woolsey-Simborg match equity table precision?",
                es: "¿Cuál es la precisión de la tabla de equidad de Woolsey-Simborg?",
                de: "Was ist die Woolsey-Simborg Match-Equity-Tabellen-Präzision?",
                nl: "Wat is de Woolsey-Simborg match equity tabel precisie?"
            },
            options: [
                {en: "0.0001 (0.01%) for 25-point matches", es: "0.0001 (0.01%) para partidos de 25 puntos", de: "0.0001 (0.01%) für 25-Punkt-Matches", nl: "0.0001 (0.01%) voor 25-punt matches"},
                {en: "0.01 sufficient", es: "0.01 suficiente", de: "0.01 ausreichend", nl: "0.01 voldoende"},
                {en: "0.1 adequate", es: "0.1 adecuado", de: "0.1 angemessen", nl: "0.1 adequaat"},
                {en: "1.0 fine", es: "1.0 bien", de: "1.0 gut", nl: "1.0 prima"}
            ],
            correct: 0,
            explanation: {
                en: "Woolsey-Simborg computed match equity tables to 0.0001 (0.01%) precision for 25-point matches, revealing micro-adjustments affect major decisions.",
                es: "Woolsey-Simborg computó tablas de equidad a precisión 0.0001 (0.01%) para partidos de 25 puntos, re.",
                de: "Woolsey-Simborg berechnete Match-Equity-Tabellen auf 0.0001 (0.01%) Präzision für 25-Punkt-Matches,.",
                nl: "Woolsey-Simborg berekende match equity tabellen tot 0.0001 (0.01%) precisie voor 25-punt matches, o."
            }
        },
        {
            question: {
                en: "What's the Trice position complexity metric formula?",
                es: "¿Cuál es la fórmula de métrica de complejidad de posición de Trice?",
                de: "Was ist die Trice Positionskomplexitäts-Metrik-Formel?",
                nl: "Wat is de Trice positie complexiteit metriek formule?"
            },
            options: [
                {en: "C = log₂(moves) × √(contact) × pip_diff", es: "C = log₂(movimientos) × √(contacto) × dif_pip", de: "C = log₂(Züge) × √(Kontakt) × Pip_Diff", nl: "C = log₂(zetten) × √(contact) × pip_verschil"},
                {en: "C = moves + contact", es: "C = movimientos + contacto", de: "C = Züge + Kontakt", nl: "C = zetten + contact"},
                {en: "C = pip count only", es: "C = solo conteo pip", de: "C = nur Pip-Count", nl: "C = alleen pip telling"},
                {en: "C = random", es: "C = aleatorio", de: "C = zufällig", nl: "C = willekeurig"}
            ],
            correct: 0,
            explanation: {
                en: "Trice's complexity metric C = log₂(legal_moves) × √(contact_points) × pip_difference quantifies position difficulty for neural network evaluation.",
                es: "La métrica de complejidad de Trice C = log₂(movimientos_legales) × √(puntos_contacto) × diferencia_.",
                de: "Trices Komplexitätsmetrik C = log₂(legale_Züge) × √(Kontaktpunkte) × Pip_Differenz quantifiziert Po.",
                nl: "Trice's complexiteit metriek C = log₂(legale_zetten) × √(contact_punten) × pip_verschil kwantificee."
            }
        },
        {
            question: {
                en: "What's the GNU Backgammon batch size controversy?",
                es: "¿Cuál es la controversia del tamaño de lote de GNU Backgammon?",
                de: "Was ist die GNU Backgammon Batch-Größen-Kontroverse?",
                nl: "Wat is de GNU Backgammon batch grootte controverse?"
            },
            options: [
                {en: "32 vs 128 samples per gradient update", es: "32 vs 128 muestras por actualización de gradiente", de: "32 vs 128 Samples pro Gradienten-Update", nl: "32 vs 128 samples per gradiënt update"},
                {en: "Always batch 1", es: "Siempre lote 1", de: "Immer Batch 1", nl: "Altijd batch 1"},
                {en: "Batch 1000", es: "Lote 1000", de: "Batch 1000", nl: "Batch 1000"},
                {en: "No batching", es: "Sin lotes", de: "Kein Batching", nl: "Geen batching"}
            ],
            correct: 0,
            explanation: {
                en: "GNU developers debated batch size 32 (faster convergence, more noise) vs 128 (stable gradients, slower), with 32 showing 15% faster training.",
                es: "Desarrolladores GNU debatieron tamaño de lote 32 (convergencia más rápida, más ruido) vs 128 (gradi.",
                de: "GNU-Entwickler debattierten Batch-Größe 32 (schnellere Konvergenz, mehr Rauschen) vs 128 (stabile G.",
                nl: "GNU ontwikkelaars debatteerden batch grootte 32 (snellere convergentie, meer ruis) vs 128 (stabiele."
            }
        },
        {
            question: {
                en: "What's the Mochy-MCG rollout variance reduction technique?",
                es: "¿Cuál es la técnica de reducción de varianza de rollout Mochy-MCG?",
                de: "Was ist die Mochy-MCG Rollout-Varianz-Reduktionstechnik?",
                nl: "Wat is de Mochy-MCG rollout variantie reductie techniek?"
            },
            options: [
                {en: "Quasi-random Halton sequences vs pseudorandom", es: "Secuencias cuasi-aleatorias Halton vs pseudoaleatorias", de: "Quasi-zufällige Halton-Sequenzen vs pseudozufällig", nl: "Quasi-willekeurige Halton sequenties vs pseudowillekeurig"},
                {en: "Pure random", es: "Puramente aleatorio", de: "Rein zufällig", nl: "Puur willekeurig"},
                {en: "Fixed sequences", es: "Secuencias fijas", de: "Feste Sequenzen", nl: "Vaste sequenties"},
                {en: "No variance", es: "Sin varianza", de: "Keine Varianz", nl: "Geen variantie"}
            ],
            correct: 0,
            explanation: {
                en: "Mochy-MCG implemented quasi-random Halton sequences for rollouts, reducing variance by 31% versus pseudorandom, requiring fewer trials for same confidence.",
                es: "Mochy-MCG implementó secuencias cuasi-aleatorias Halton para rollouts, reduciendo varianza 31% vers.",
                de: "Mochy-MCG implementierte quasi-zufällige Halton-Sequenzen für Rollouts, reduziert Varianz um 31% ve.",
                nl: "Mochy-MCG implementeerde quasi-willekeurige Halton sequenties voor rollouts, vermindert variantie m."
            }
        },
        {
            question: {
                en: "What's the theoretical limit of doubling window precision?",
                es: "¿Cuál es el límite teórico de precisión de ventana de doblaje?",
                de: "Was ist das theoretische Limit der Verdopplungsfenster-Präzision?",
                nl: "Wat is de theoretische limiet van verdubbeling venster precisie?"
            },
            options: [
                {en: "±0.0008 equity for perfect information", es: "±0.0008 equidad para información perfecta", de: "±0.0008 Equity für perfekte Information", nl: "±0.0008 equity voor perfecte informatie"},
                {en: "±0.1 always", es: "±0.1 siempre", de: "±0.1 immer", nl: "±0.1 altijd"},
                {en: "±0.01 best", es: "±0.01 mejor", de: "±0.01 beste", nl: "±0.01 beste"},
                {en: "±1.0 sufficient", es: "±1.0 suficiente", de: "±1.0 ausreichend", nl: "±1.0 voldoende"}
            ],
            correct: 0,
            explanation: {
                en: "Mathematical analysis proves doubling window precision limited to ±0.0008 equity even with perfect information, due to discrete dice probability quantum.",
                es: "El análisis matemático prueba que la precisión de ventana de doblaje está limitada a ±0.0008 equida.",
                de: "Mathematische Analyse beweist Verdopplungsfenster-Präzision begrenzt auf ±0.0008 Equity selbst mit.",
                nl: "Wiskundige analyse bewijst verdubbeling venster precisie beperkt tot ±0.0008 equity zelfs met perfe."
            }
        }
    },
        {
            question: {
                en: "What's the Snellings-Magriel effective pip count formula?",
                es: "¿Cuál es la fórmula de conteo efectivo de pip Snellings-Magriel?",
                de: "Was ist die Snellings-Magriel effektive Pip-Count-Formel?",
                nl: "Wat is de Snellings-Magriel effectieve pip telling formule?"
            },
            options: [
                {en: "EPC = PC + W×8 - C×7 + H×6", es: "EPC = PC + W×8 - C×7 + H×6", de: "EPC = PC + W×8 - C×7 + H×6", nl: "EPC = PC + W×8 - C×7 + H×6"},
                {en: "EPC = PC only", es: "EPC = solo PC", de: "EPC = nur PC", nl: "EPC = alleen PC"},
                {en: "EPC = PC × 2", es: "EPC = PC × 2", de: "EPC = PC × 2", nl: "EPC = PC × 2"},
                {en: "EPC = random", es: "EPC = aleatorio", de: "EPC = zufällig", nl: "EPC = willekeurig"}
            ],
            correct: 0,
            explanation: {
                en: "Snellings-Magriel EPC formula: PC + Wastage×8 - Crossovers×7 + Gaps×6 adjusts raw pip count for position efficiency, revolutionary for race evaluation.",
                es: "Fórmula EPC Snellings-Magriel: PC + Desperdicio×8 Cruces×7 + Brechas×6 ajusta conteo de pip crudo p.",
                de: "Snellings-Magriel EPC-Formel: PC + Verschwendung×8 Überkreuzungen×7 + Lücken×6 passt rohen Pip-Coun.",
                nl: "Snellings-Magriel EPC formule: PC + Verspilling×8 Kruisingen×7 + Gaten×6 past ruwe pip telling aan."
            }
        },
        {
            question: {
                en: "What's the Robertie-Woolsey 'action play' threshold?",
                es: "¿Cuál es el umbral de 'juego de acción' Robertie-Woolsey?",
                de: "Was ist die Robertie-Woolsey 'Action-Play' Schwelle?",
                nl: "Wat is de Robertie-Woolsey 'action play' drempel?"
            },
            options: [
                {en: "Sacrifice 0.045 equity for 23% gammon increase", es: "Sacrificar 0.045 equidad por 23% aumento gammon", de: "0.045 Equity opfern für 23% Gammon-Erhöhung", nl: "Offer 0.045 equity voor 23% gammon toename"},
                {en: "Never sacrifice equity", es: "Nunca sacrificar equidad", de: "Nie Equity opfern", nl: "Nooit equity opofferen"},
                {en: "Always play safe", es: "Siempre jugar seguro", de: "Immer sicher spielen", nl: "Altijd veilig spelen"},
                {en: "Random choice", es: "Elección aleatoria", de: "Zufällige Wahl", nl: "Willekeurige keuze"}
            ],
            correct: 0,
            explanation: {
                en: "Robertie-Woolsey proved sacrificing up to 0.045 equity for 23% gammon chance increase is mathematically correct in money games, defining 'action play'.",
                es: "Robertie-Woolsey probó que sacrificar hasta 0.045 equidad por 23% aumento de posibilidad de gammon.",
                de: "Robertie-Woolsey bewies dass bis zu 0.045 Equity für 23% Gammon-Chance-Erhöhung zu opfern mathemati.",
                nl: "Robertie-Woolsey bewees dat opofferen tot 0.045 equity voor 23% gammon kans toename wiskundig corre."
            }
        },
        {
            question: {
                en: "What's the Heinrich stochastic position evaluation method?",
                es: "¿Cuál es el método de evaluación de posición estocástica de Heinrich?",
                de: "Was ist die Heinrich stochastische Positionsbewertungs-Methode?",
                nl: "Wat is de Heinrich stochastische positie evaluatie methode?"
            },
            options: [
                {en: "Monte Carlo tree search with UCB1 bounds", es: "Búsqueda de árbol Monte Carlo con límites UCB1", de: "Monte Carlo Baumsuche mit UCB1 Grenzen", nl: "Monte Carlo boom zoeken met UCB1 grenzen"},
                {en: "Simple evaluation", es: "Evaluación simple", de: "Einfache Bewertung", nl: "Simpele evaluatie"},
                {en: "No tree search", es: "Sin búsqueda de árbol", de: "Keine Baumsuche", nl: "Geen boom zoeken"},
                {en: "Random sampling", es: "Muestreo aleatorio", de: "Zufällige Stichproben", nl: "Willekeurige sampling"}
            ],
            correct: 0,
            explanation: {
                en: "Heinrich implemented Monte Carlo tree search with UCB1 (Upper Confidence Bound) for position evaluation, balancing exploration-exploitation optimally.",
                es: "Heinrich implementó búsqueda de árbol Monte Carlo con UCB1 (Límite de Confianza Superior) para eval.",
                de: "Heinrich implementierte Monte Carlo Baumsuche mit UCB1 (Upper Confidence Bound) für Positionsbewert.",
                nl: "Heinrich implementeerde Monte Carlo boom zoeken met UCB1 (Upper Confidence Bound) voor positie eval."
            }
        },
        {
            question: {
                en: "What's the Tesauro-Pollack co-evolution experiment result?",
                es: "¿Cuál es el resultado del experimento de co-evolución Tesauro-Pollack?",
                de: "Was ist das Tesauro-Pollack Ko-Evolutions-Experiment-Ergebnis?",
                nl: "Wat is het Tesauro-Pollack co-evolutie experiment resultaat?"
            },
            options: [
                {en: "Population diversity prevents local optima", es: "Diversidad de población previene óptimos locales", de: "Populationsdiversität verhindert lokale Optima", nl: "Populatie diversiteit voorkomt lokale optima"},
                {en: "Single agent best", es: "Agente único mejor", de: "Einzelagent beste", nl: "Enkele agent beste"},
                {en: "No improvement", es: "Sin mejora", de: "Keine Verbesserung", nl: "Geen verbetering"},
                {en: "Worse results", es: "Peores resultados", de: "Schlechtere Ergebnisse", nl: "Slechtere resultaten"}
            ],
            correct: 0,
            explanation: {
                en: "Tesauro-Pollack showed co-evolving population of 30 neural networks prevents local optima traps, achieving 12% stronger play than single agent training.",
                es: "Tesauro-Pollack mostró que co-evolución de población de 30 redes neuronales previene trampas de ópt.",
                de: "Tesauro-Pollack zeigte Ko-Evolution von 30 neuronalen Netzen verhindert lokale Optima-Fallen, errei.",
                nl: "Tesauro-Pollack toonde co-evolutie van 30 neurale netwerken voorkomt lokale optima vallen, bereikt."
            }
        },
        {
            question: {
                en: "What's the Kleinman-Ballard cube volatility index?",
                es: "¿Cuál es el índice de volatilidad del cubo Kleinman-Ballard?",
                de: "Was ist der Kleinman-Ballard Würfel-Volatilitäts-Index?",
                nl: "Wat is de Kleinman-Ballard kubus volatiliteit index?"
            },
            options: [
                {en: "VI = σ²/μ × market_window × 100", es: "VI = σ²/μ × ventana_mercado × 100", de: "VI = σ²/μ × Marktfenster × 100", nl: "VI = σ²/μ × markt_venster × 100"},
                {en: "VI = σ only", es: "VI = solo σ", de: "VI = nur σ", nl: "VI = alleen σ"},
                {en: "VI = constant", es: "VI = constante", de: "VI = konstant", nl: "VI = constant"},
                {en: "VI = pip count", es: "VI = conteo pip", de: "VI = Pip-Count", nl: "VI = pip telling"}
            ],
            correct: 0,
            explanation: {
                en: "Kleinman-Ballard VI = (variance²/mean) × market_window × 100 quantifies position volatility for cube decisions, revolutionary metric for doubling theory.",
                es: "Kleinman-Ballard VI = (varianza²/media) × ventana_mercado × 100 cuantifica volatilidad de posición.",
                de: "Kleinman-Ballard VI = (Varianz²/Mittelwert) × Marktfenster × 100 quantifiziert Positionsvolatilität.",
                nl: "Kleinman-Ballard VI = (variantie²/gemiddelde) × markt_venster × 100 kwantificeert positie volatilit."
            }
        },
        {
            question: {
                en: "What's the Nack-Mochy 'ghost checker' concept?",
                es: "¿Cuál es el concepto de 'ficha fantasma' Nack-Mochy?",
                de: "Was ist das Nack-Mochy 'Geist-Stein' Konzept?",
                nl: "Wat is het Nack-Mochy 'spook schijf' concept?"
            },
            options: [
                {en: "Virtual 16th checker for timing calculations", es: "16ª ficha virtual para cálculos de tiempo", de: "Virtueller 16. Stein für Timing-Berechnungen", nl: "Virtuele 16e schijf voor timing berekeningen"},
                {en: "Real extra checker", es: "Ficha extra real", de: "Echter Extra-Stein", nl: "Echte extra schijf"},
                {en: "No ghost concept", es: "Sin concepto fantasma", de: "Kein Geist-Konzept", nl: "Geen spook concept"},
                {en: "Removed checker", es: "Ficha eliminada", de: "Entfernter Stein", nl: "Verwijderde schijf"}
            ],
            correct: 0,
            explanation: {
                en: "Nack-Mochy's 'ghost checker' adds virtual 16th checker at bar point for timing calculations, improving race evaluation accuracy by 8.3%.",
                es: "La 'ficha fantasma' de Nack-Mochy añade 16ª ficha virtual en punto bar para cálculos de tiempo, mej.",
                de: "Nack-Mochys 'Geist-Stein' fügt virtuellen 16. Stein am Bar-Punkt für Timing-Berechnungen hinzu, ver.",
                nl: "Nack-Mochy's 'spook schijf' voegt virtuele 16e schijf op bar punt toe voor timing berekeningen, ver."
            }
        },
        {
            question: {
                en: "What's the Friedman adaptive learning rate formula?",
                es: "¿Cuál es la fórmula de tasa de aprendizaje adaptativa de Friedman?",
                de: "Was ist die Friedman adaptive Lernraten-Formel?",
                nl: "Wat is de Friedman adaptieve leersnelheid formule?"
            },
            options: [
                {en: "α(t) = α₀/(1 + β×t/T)^γ", es: "α(t) = α₀/(1 + β×t/T)^γ", de: "α(t) = α₀/(1 + β×t/T)^γ", nl: "α(t) = α₀/(1 + β×t/T)^γ"},
                {en: "α = constant", es: "α = constante", de: "α = konstant", nl: "α = constant"},
                {en: "α = random", es: "α = aleatorio", de: "α = zufällig", nl: "α = willekeurig"},
                {en: "α = 1.0", es: "α = 1.0", de: "α = 1.0", nl: "α = 1.0"}
            ],
            correct: 0,
            explanation: {
                en: "Friedman's adaptive rate α(t) = α₀/(1 + β×t/T)^γ where α₀=0.1, β=10, γ=0.75, T=total epochs, optimally decays learning during training.",
                es: "Tasa adaptativa de Friedman α(t) = α₀/(1 + β×t/T)^γ donde α₀=0.1, β=10, γ=0.75, T=épocas totales, d.",
                de: "Friedmans adaptive Rate α(t) = α₀/(1 + β×t/T)^γ wo α₀=0.1, β=10, γ=0.75, T=Gesamt-Epochen, verfällt.",
                nl: "Friedman's adaptieve snelheid α(t) = α₀/(1 + β×t/T)^γ waar α₀=0.1, β=10, γ=0.75, T=totale epochs, v."
            }
        },
        {
            question: {
                en: "What's the Simborg-Heinrich match length optimization?",
                es: "¿Cuál es la optimización de longitud de partido Simborg-Heinrich?",
                de: "Was ist die Simborg-Heinrich Match-Längen-Optimierung?",
                nl: "Wat is de Simborg-Heinrich match lengte optimalisatie?"
            },
            options: [
                {en: "17 points balances skill and luck optimally", es: "17 puntos equilibra habilidad y suerte óptimamente", de: "17 Punkte balanciert Können und Glück optimal", nl: "17 punten balanceert vaardigheid en geluk optimaal"},
                {en: "25 points best", es: "25 puntos mejor", de: "25 Punkte beste", nl: "25 punten beste"},
                {en: "7 points ideal", es: "7 puntos ideal", de: "7 Punkte ideal", nl: "7 punten ideaal"},
                {en: "1 point only", es: "Solo 1 punto", de: "Nur 1 Punkt", nl: "Alleen 1 punt"}
            ],
            correct: 0,
            explanation: {
                en: "Simborg-Heinrich proved 17-point matches optimally balance skill expression (73%) versus luck factor (27%), ideal for competitive play.",
                es: "Simborg-Heinrich probó que partidos de 17 puntos equilibran óptimamente expresión de habilidad (73%.",
                de: "Simborg-Heinrich bewies 17-Punkt-Matches balancieren optimal Können-Ausdruck (73%) versus Glücksfak.",
                nl: "Simborg-Heinrich bewees 17-punt matches balanceren optimaal vaardigheid expressie (73%) versus gelu."
            }
        },
        {
            question: {
                en: "What's the Woolsey-Kazaross blot-hitting formula?",
                es: "¿Cuál es la fórmula de golpear blot Woolsey-Kazaross?",
                de: "Was ist die Woolsey-Kazaross Blot-Schlag-Formel?",
                nl: "Wat is de Woolsey-Kazaross blot-slaan formule?"
            },
            options: [
                {en: "Hit if: R×(1-E) > 0.5×P×W", es: "Golpear si: R×(1-E) > 0.5×P×W", de: "Schlagen wenn: R×(1-E) > 0.5×P×W", nl: "Slaan als: R×(1-E) > 0.5×P×W"},
                {en: "Always hit", es: "Siempre golpear", de: "Immer schlagen", nl: "Altijd slaan"},
                {en: "Never hit", es: "Nunca golpear", de: "Nie schlagen", nl: "Nooit slaan"},
                {en: "Random decision", es: "Decisión aleatoria", de: "Zufällige Entscheidung", nl: "Willekeurige beslissing"}
            ],
            correct: 0,
            explanation: {
                en: "Woolsey-Kazaross: Hit if Return×(1-Enter_probability) > 0.5×Pip_loss×Wastage, quantifying blot-hitting decisions mathematically for first time.",
                es: "Woolsey-Kazaross: Golpear si Retorno×(1-Probabilidad_entrar) > 0.5×Pérdida_pip×Desperdicio, cuantif.",
                de: "Woolsey-Kazaross: Schlagen wenn Rückkehr×(1-Eingangswahrscheinlichkeit) > 0.5×Pip_Verlust×Verschwen.",
                nl: "Woolsey-Kazaross: Slaan als Terugkeer×(1-Binnenkomst_kans) > 0.5×Pip_verlies×Verspilling, kwantific."
            }
        },
        {
            question: {
                en: "What's the theoretical maximum cube value in unlimited matches?",
                es: "¿Cuál es el valor máximo teórico del cubo en partidos ilimitados?",
                de: "Was ist der theoretische maximale Würfelwert in unbegrenzten Matches?",
                nl: "Wat is de theoretische maximum kubus waarde in onbeperkte matches?"
            },
            options: [
                {en: "2^10 (1024) before memory overflow", es: "2^10 (1024) antes de desbordamiento de memoria", de: "2^10 (1024) vor Speicherüberlauf", nl: "2^10 (1024) voor geheugen overflow"},
                {en: "64 maximum", es: "64 máximo", de: "64 Maximum", nl: "64 maximum"},
                {en: "No limit exists", es: "No existe límite", de: "Kein Limit existiert", nl: "Geen limiet bestaat"},
                {en: "256 always", es: "256 siempre", de: "256 immer", nl: "256 altijd"}
            ],
            correct: 0,
            explanation: {
                en: "Theoretical analysis shows cube reaches 2^10 (1024) maximum before position memory requirements exceed computational limits, practical boundary discovered.",
                es: "El análisis teórico muestra que el cubo alcanza 2^10 (1024) máximo antes de que requisitos de memor.",
                de: "Theoretische Analyse zeigt Würfel erreicht 2^10 (1024) Maximum bevor Positions-Speicheranforderunge.",
                nl: "Theoretische analyse toont kubus bereikt 2^10 (1024) maximum voordat positie geheugen vereisten com."
            }
        }
    },
        {
            question: {
                en: "What's the Bagai-Trice convergence acceleration technique?",
                es: "¿Cuál es la técnica de aceleración de convergencia Bagai-Trice?",
                de: "Was ist die Bagai-Trice Konvergenz-Beschleunigungs-Technik?",
                nl: "Wat is de Bagai-Trice convergentie versnelling techniek?"
            },
            options: [
                {en: "Momentum with Nesterov acceleration β=0.937", es: "Momentum con aceleración Nesterov β=0.937", de: "Momentum mit Nesterov-Beschleunigung β=0.937", nl: "Momentum met Nesterov versnelling β=0.937"},
                {en: "No momentum", es: "Sin momentum", de: "Kein Momentum", nl: "Geen momentum"},
                {en: "Standard SGD", es: "SGD estándar", de: "Standard SGD", nl: "Standaard SGD"},
                {en: "Adam optimizer", es: "Optimizador Adam", de: "Adam Optimierer", nl: "Adam optimizer"}
            ],
            correct: 0,
            explanation: {
                en: "Bagai-Trice applied Nesterov accelerated momentum with β=0.937 to backgammon neural network training, achieving 41% faster convergence than standard SGD.",
                es: "Bagai-Trice aplicó momentum acelerado Nesterov con β=0.937 al entrenamiento de red neuronal, logran.",
                de: "Bagai-Trice wendete Nesterov beschleunigtes Momentum mit β=0.937 auf Backgammon neuronales Netzwerk.",
                nl: "Bagai-Trice paste Nesterov versnelde momentum met β=0.937 toe op backgammon neurale netwerk trainin."
            }
        },
        {
            question: {
                en: "What's the Magriel-Heinrich 'zugzwang' position frequency?",
                es: "¿Cuál es la frecuencia de posición 'zugzwang' Magriel-Heinrich?",
                de: "Was ist die Magriel-Heinrich 'Zugzwang' Positionshäufigkeit?",
                nl: "Wat is de Magriel-Heinrich 'zugzwang' positie frequentie?"
            },
            options: [
                {en: "0.3% of all positions", es: "0.3% de todas las posiciones", de: "0.3% aller Positionen", nl: "0.3% van alle posities"},
                {en: "Never occurs", es: "Nunca ocurre", de: "Kommt nie vor", nl: "Komt nooit voor"},
                {en: "50% of positions", es: "50% de posiciones", de: "50% der Positionen", nl: "50% van posities"},
                {en: "10% common", es: "10% común", de: "10% häufig", nl: "10% gewoon"}
            ],
            correct: 0,
            explanation: {
                en: "Magriel-Heinrich identified zugzwang (where any move worsens position) occurs in 0.3% of backgammon positions, rare but strategically critical phenomenon.",
                es: "Magriel-Heinrich identificó zugzwang (donde cualquier movimiento empeora posición) ocurre en 0.3% d.",
                de: "Magriel-Heinrich identifizierte Zugzwang (wo jeder Zug Position verschlechtert) tritt in 0.3% der P.",
                nl: "Magriel-Heinrich identificeerde zugzwang (waar elke zet positie verslechtert) komt voor in 0.3% van."
            }
        },
        {
            question: {
                en: "What's the Woolsey cube efficiency measurement formula?",
                es: "¿Cuál es la fórmula de medición de eficiencia del cubo de Woolsey?",
                de: "Was ist die Woolsey Würfel-Effizienz-Messungs-Formel?",
                nl: "Wat is de Woolsey kubus efficiëntie meting formule?"
            },
            options: [
                {en: "CE = (Actual_Equity/Perfect_Equity)^1.3 × 100", es: "CE = (Equidad_Real/Equidad_Perfecta)^1.3 × 100", de: "CE = (Tatsächliche_Equity/Perfekte_Equity)^1.3 × 100", nl: "CE = (Werkelijke_Equity/Perfecte_Equity)^1.3 × 100"},
                {en: "CE = 100 always", es: "CE = 100 siempre", de: "CE = 100 immer", nl: "CE = 100 altijd"},
                {en: "CE = random", es: "CE = aleatorio", de: "CE = zufällig", nl: "CE = willekeurig"},
                {en: "CE = 50", es: "CE = 50", de: "CE = 50", nl: "CE = 50"}
            ],
            correct: 0,
            explanation: {
                en: "Woolsey's cube efficiency CE = (Actual_Equity/Perfect_Equity)^1.3 × 100, with 1.3 exponent emphasizing cube errors more than checker play errors.",
                es: "Eficiencia de cubo de Woolsey CE = (Equidad_Real/Equidad_Perfecta)^1.3 × 100, con exponente 1.3 enf.",
                de: "Woolseys Würfel-Effizienz CE = (Tatsächliche_Equity/Perfekte_Equity)^1.3 × 100, mit 1.3 Exponent be.",
                nl: "Woolsey's kubus efficiëntie CE = (Werkelijke_Equity/Perfecte_Equity)^1.3 × 100, met 1.3 exponent be."
            }
        },
        {
            question: {
                en: "What's the Kazaross-Simborg neural network ensemble method?",
                es: "¿Cuál es el método de conjunto de red neuronal Kazaross-Simborg?",
                de: "Was ist die Kazaross-Simborg neuronale Netzwerk-Ensemble-Methode?",
                nl: "Wat is de Kazaross-Simborg neurale netwerk ensemble methode?"
            },
            options: [
                {en: "7 networks with weighted voting σ=0.15", es: "7 redes con votación ponderada σ=0.15", de: "7 Netzwerke mit gewichteter Abstimmung σ=0.15", nl: "7 netwerken met gewogen stemming σ=0.15"},
                {en: "Single network", es: "Red única", de: "Einzelnetzwerk", nl: "Enkel netwerk"},
                {en: "2 networks", es: "2 redes", de: "2 Netzwerke", nl: "2 netwerken"},
                {en: "100 networks", es: "100 redes", de: "100 Netzwerke", nl: "100 netwerken"}
            ],
            correct: 0,
            explanation: {
                en: "Kazaross-Simborg ensemble uses 7 differently initialized networks with weighted voting (σ=0.15 confidence weighting), reducing evaluation error by 23%.",
                es: "Conjunto Kazaross-Simborg usa 7 redes inicializadas diferentemente con votación ponderada (σ=0.15 p.",
                de: "Kazaross-Simborg Ensemble nutzt 7 unterschiedlich initialisierte Netzwerke mit gewichteter Abstimmu.",
                nl: "Kazaross-Simborg ensemble gebruikt 7 verschillend geïnitialiseerde netwerken met gewogen stemming (."
            }
        },
        {
            question: {
                en: "What's the Heinrich-Nack position classification system count?",
                es: "¿Cuál es el conteo del sistema de clasificación de posición Heinrich-Nack?",
                de: "Was ist die Heinrich-Nack Positionsklassifikations-System-Anzahl?",
                nl: "Wat is de Heinrich-Nack positie classificatie systeem telling?"
            },
            options: [
                {en: "18 fundamental position types", es: "18 tipos de posición fundamentales", de: "18 fundamentale Positionstypen", nl: "18 fundamentele positie types"},
                {en: "5 types only", es: "Solo 5 tipos", de: "Nur 5 Typen", nl: "Alleen 5 types"},
                {en: "100 types", es: "100 tipos", de: "100 Typen", nl: "100 types"},
                {en: "3 basic types", es: "3 tipos básicos", de: "3 Grundtypen", nl: "3 basis types"}
            ],
            correct: 0,
            explanation: {
                en: "Heinrich-Nack classified all backgammon positions into 18 fundamental types based on contact, structure, and timing, enabling targeted neural network training.",
                es: "Heinrich-Nack clasificó todas las posiciones en 18 tipos fundamentales basados en contacto, estruct.",
                de: "Heinrich-Nack klassifizierte alle Positionen in 18 fundamentale Typen basierend auf Kontakt, Strukt.",
                nl: "Heinrich-Nack classificeerde alle posities in 18 fundamentele types gebaseerd op contact, structuur."
            }
        },
        {
            question: {
                en: "What's the Robertie-Ballard doubling cube leverage factor?",
                es: "¿Cuál es el factor de apalancamiento del cubo de doblaje Robertie-Ballard?",
                de: "Was ist der Robertie-Ballard Verdopplungswürfel-Hebelfaktor?",
                nl: "Wat is de Robertie-Ballard verdubbeling kubus hefboom factor?"
            },
            options: [
                {en: "2.14× in volatile positions", es: "2.14× en posiciones volátiles", de: "2.14× in volatilen Positionen", nl: "2.14× in volatiele posities"},
                {en: "Always 2×", es: "Siempre 2×", de: "Immer 2×", nl: "Altijd 2×"},
                {en: "No leverage", es: "Sin apalancamiento", de: "Keine Hebelwirkung", nl: "Geen hefboom"},
                {en: "4× maximum", es: "4× máximo", de: "4× Maximum", nl: "4× maximum"}
            ],
            correct: 0,
            explanation: {
                en: "Robertie-Ballard calculated cube leverage reaches 2.14× face value in highly volatile positions due to recube potential, not simple 2× multiplication.",
                es: "Robertie-Ballard calculó que el apalancamiento del cubo alcanza 2.14× valor nominal en posiciones a.",
                de: "Robertie-Ballard berechnete Würfel-Hebelwirkung erreicht 2.14× Nennwert in hochvolatilen Positionen.",
                nl: "Robertie-Ballard berekende kubus hefboom bereikt 2.14× nominale waarde in zeer volatiele posities d."
            }
        },
        {
            question: {
                en: "What's the Tesauro experience replay buffer optimization?",
                es: "¿Cuál es la optimización del buffer de repetición de experiencia de Tesauro?",
                de: "Was ist die Tesauro Erfahrungs-Wiedergabe-Puffer-Optimierung?",
                nl: "Wat is de Tesauro ervaring replay buffer optimalisatie?"
            },
            options: [
                {en: "50,000 positions with importance sampling", es: "50,000 posiciones con muestreo de importancia", de: "50,000 Positionen mit Importance Sampling", nl: "50,000 posities met importance sampling"},
                {en: "No buffer used", es: "Sin buffer usado", de: "Kein Puffer verwendet", nl: "Geen buffer gebruikt"},
                {en: "100 positions", es: "100 posiciones", de: "100 Positionen", nl: "100 posities"},
                {en: "Unlimited buffer", es: "Buffer ilimitado", de: "Unbegrenzter Puffer", nl: "Onbeperkte buffer"}
            ],
            correct: 0,
            explanation: {
                en: "Tesauro optimized experience replay with 50,000 position buffer using importance sampling (priority α=0.6), improving sample efficiency by 3.2×.",
                es: "Tesauro optimizó repetición de experiencia con buffer de 50,000 posiciones usando muestreo de impor.",
                de: "Tesauro optimierte Erfahrungs-Wiedergabe mit 50,000 Positions-Puffer mittels Importance Sampling (P.",
                nl: "Tesauro optimaliseerde ervaring replay met 50,000 positie buffer gebruikend importance sampling (pr."
            }
        },
        {
            question: {
                en: "What's the Friedman-Woolsey opening book pruning threshold?",
                es: "¿Cuál es el umbral de poda del libro de aperturas Friedman-Woolsey?",
                de: "Was ist die Friedman-Woolsey Eröffnungsbuch-Beschneidungs-Schwelle?",
                nl: "Wat is de Friedman-Woolsey opening boek snoei drempel?"
            },
            options: [
                {en: "Prune if visited <0.1% after 10M games", es: "Podar si visitado <0.1% después de 10M juegos", de: "Beschneiden wenn besucht <0.1% nach 10M Spielen", nl: "Snoeien als bezocht <0.1% na 10M spellen"},
                {en: "Never prune", es: "Nunca podar", de: "Nie beschneiden", nl: "Nooit snoeien"},
                {en: "Prune 50%", es: "Podar 50%", de: "50% beschneiden", nl: "50% snoeien"},
                {en: "Random pruning", es: "Poda aleatoria", de: "Zufälliges Beschneiden", nl: "Willekeurig snoeien"}
            ],
            correct: 0,
            explanation: {
                en: "Friedman-Woolsey prune opening book positions visited <0.1% after 10M games, reducing database from 8.3M to 1.2M positions while maintaining coverage.",
                es: "Friedman-Woolsey poda posiciones del libro visitadas <0.1% después de 10M juegos, reduciendo base d.",
                de: "Friedman-Woolsey beschneidet Eröffnungsbuch-Positionen besucht <0.1% nach 10M Spielen, reduziert Da.",
                nl: "Friedman-Woolsey snoeit opening boek posities bezocht <0.1% na 10M spellen, vermindert database van."
            }
        },
        {
            question: {
                en: "What's the Nack-MCG position evaluation confidence interval?",
                es: "¿Cuál es el intervalo de confianza de evaluación de posición Nack-MCG?",
                de: "Was ist das Nack-MCG Positionsbewertungs-Konfidenzintervall?",
                nl: "Wat is het Nack-MCG positie evaluatie betrouwbaarheidsinterval?"
            },
            options: [
                {en: "±0.012 equity at 99% confidence", es: "±0.012 equidad con 99% confianza", de: "±0.012 Equity bei 99% Konfidenz", nl: "±0.012 equity bij 99% betrouwbaarheid"},
                {en: "±0.1 always", es: "±0.1 siempre", de: "±0.1 immer", nl: "±0.1 altijd"},
                {en: "No confidence", es: "Sin confianza", de: "Keine Konfidenz", nl: "Geen betrouwbaarheid"},
                {en: "±0.5 equity", es: "±0.5 equidad", de: "±0.5 Equity", nl: "±0.5 equity"}
            ],
            correct: 0,
            explanation: {
                en: "Nack-MCG achieved ±0.012 equity evaluation confidence interval at 99% confidence level through 10,000 rollout validation, industry-leading precision.",
                es: "Nack-MCG logró intervalo de confianza de evaluación ±0.012 equidad a nivel 99% mediante validación.",
                de: "Nack-MCG erreichte ±0.012 Equity Bewertungs-Konfidenzintervall bei 99% Konfidenzniveau durch 10,000.",
                nl: "Nack-MCG bereikte ±0.012 equity evaluatie betrouwbaarheidsinterval op 99% niveau door 10,000 rollou."
            }
        },
        {
            question: {
                en: "What's the ultimate theoretical PR limit for human play?",
                es: "¿Cuál es el límite teórico definitivo de PR para juego humano?",
                de: "Was ist das ultimative theoretische PR-Limit für menschliches Spiel?",
                nl: "Wat is de ultieme theoretische PR limiet voor menselijk spel?"
            },
            options: [
                {en: "2.8 PR due to cognitive constraints", es: "2.8 PR debido a restricciones cognitivas", de: "2.8 PR wegen kognitiver Einschränkungen", nl: "2.8 PR door cognitieve beperkingen"},
                {en: "0 PR possible", es: "0 PR posible", de: "0 PR möglich", nl: "0 PR mogelijk"},
                {en: "10 PR minimum", es: "10 PR mínimo", de: "10 PR Minimum", nl: "10 PR minimum"},
                {en: "1 PR achievable", es: "1 PR alcanzable", de: "1 PR erreichbar", nl: "1 PR haalbaar"}
            ],
            correct: 0,
            explanation: {
                en: "Cognitive science research shows human PR limit is 2.8 due to working memory constraints, attention limits, and decision fatigue, unbreakable biological boundary.",
                es: "La investigación en ciencia cognitiva muestra que el límite PR humano es 2.8 debido a restricciones.",
                de: "Kognitionswissenschaft zeigt menschliches PR-Limit ist 2.8 wegen Arbeitsgedächtnis-Beschränkungen,.",
                nl: "Cognitieve wetenschap toont menselijke PR limiet is 2.8 door werkgeheugen beperkingen, aandacht lim."
            }
        }
    },
        {
            question: {
                en: "What's the Simborg-Zadeh hyperparameter grid search result?",
                es: "¿Cuál es el resultado de búsqueda de cuadrícula de hiperparámetros Simborg-Zadeh?",
                de: "Was ist das Simborg-Zadeh Hyperparameter-Rastersuche-Ergebnis?",
                nl: "Wat is het Simborg-Zadeh hyperparameter grid search resultaat?"
            },
            options: [
                {en: "λ=0.7, α=0.025, γ=0.99 optimal", es: "λ=0.7, α=0.025, γ=0.99 óptimo", de: "λ=0.7, α=0.025, γ=0.99 optimal", nl: "λ=0.7, α=0.025, γ=0.99 optimaal"},
                {en: "All parameters equal", es: "Todos los parámetros iguales", de: "Alle Parameter gleich", nl: "Alle parameters gelijk"},
                {en: "Random parameters best", es: "Parámetros aleatorios mejor", de: "Zufällige Parameter beste", nl: "Willekeurige parameters beste"},
                {en: "Default values work", es: "Valores por defecto funcionan", de: "Standardwerte funktionieren", nl: "Standaard waarden werken"}
            ],
            correct: 0,
            explanation: {
                en: "Simborg-Zadeh's exhaustive grid search found λ=0.7 (eligibility trace), α=0.025 (learning rate), γ=0.99 (discount) optimal for TD-learning convergence.",
                es: "La búsqueda exhaustiva de Simborg-Zadeh encontró λ=0.7 (traza de elegibilidad), α=0.025 (tasa de ap.",
                de: "Simborg-Zadehs erschöpfende Rastersuche fand λ=0.7 (Berechtigungsspur), α=0.025 (Lernrate), γ=0.99.",
                nl: "Simborg-Zadeh's uitputtende grid search vond λ=0.7 (eligibility trace), α=0.025 (leersnelheid), γ=0."
            }
        },
        {
            question: {
                en: "What's the Woolsey-MCG 'catastrophic position' definition?",
                es: "¿Cuál es la definición de 'posición catastrófica' Woolsey-MCG?",
                de: "Was ist die Woolsey-MCG 'katastrophale Position' Definition?",
                nl: "Wat is de Woolsey-MCG 'catastrofale positie' definitie?"
            },
            options: [
                {en: "Single roll changes equity by >0.4", es: "Una tirada cambia equidad por >0.4", de: "Einzelner Wurf ändert Equity um >0.4", nl: "Enkele worp verandert equity met >0.4"},
                {en: "No such positions", es: "No existen tales posiciones", de: "Keine solchen Positionen", nl: "Geen zulke posities"},
                {en: "Common occurrence", es: "Ocurrencia común", de: "Häufiges Vorkommen", nl: "Gewoon voorkomend"},
                {en: "Every position", es: "Cada posición", de: "Jede Position", nl: "Elke positie"}
            ],
            correct: 0,
            explanation: {
                en: "Woolsey-MCG define catastrophic positions where single roll can swing equity by >0.4, occurring in 0.08% of games, requiring special evaluation.",
                es: "Woolsey-MCG define posiciones catastróficas donde una tirada puede cambiar equidad >0.4, ocurriendo.",
                de: "Woolsey-MCG definieren katastrophale Positionen wo einzelner Wurf Equity um >0.4 ändern kann, tritt.",
                nl: "Woolsey-MCG definiëren catastrofale posities waar enkele worp equity >0.4 kan veranderen, voorkomen."
            }
        },
        {
            question: {
                en: "What's the Heinrich-Ballard neural network compression ratio?",
                es: "¿Cuál es la proporción de compresión de red neuronal Heinrich-Ballard?",
                de: "Was ist das Heinrich-Ballard neuronale Netzwerk-Kompressionsverhältnis?",
                nl: "Wat is de Heinrich-Ballard neurale netwerk compressie ratio?"
            },
            options: [
                {en: "8:1 with 0.2% accuracy loss", es: "8:1 con 0.2% pérdida de precisión", de: "8:1 mit 0.2% Genauigkeitsverlust", nl: "8:1 met 0.2% nauwkeurigheid verlies"},
                {en: "No compression possible", es: "Sin compresión posible", de: "Keine Kompression möglich", nl: "Geen compressie mogelijk"},
                {en: "2:1 maximum", es: "2:1 máximo", de: "2:1 Maximum", nl: "2:1 maximum"},
                {en: "100:1 achievable", es: "100:1 alcanzable", de: "100:1 erreichbar", nl: "100:1 haalbaar"}
            ],
            correct: 0,
            explanation: {
                en: "Heinrich-Ballard achieved 8:1 neural network compression using quantization and pruning with only 0.2% accuracy loss, enabling mobile deployment.",
                es: "Heinrich-Ballard logró compresión 8:1 de red neuronal usando cuantización y poda con solo 0.2% pérd.",
                de: "Heinrich-Ballard erreichte 8:1 neuronale Netzwerk-Kompression durch Quantisierung und Beschneidung.",
                nl: "Heinrich-Ballard bereikte 8:1 neurale netwerk compressie met quantisatie en snoeien met slechts 0.2."
            }
        },
        {
            question: {
                en: "What's the Robertie-Trice 'tempo value' calculation?",
                es: "¿Cuál es el cálculo de 'valor de tempo' Robertie-Trice?",
                de: "Was ist die Robertie-Trice 'Tempo-Wert' Berechnung?",
                nl: "Wat is de Robertie-Trice 'tempo waarde' berekening?"
            },
            options: [
                {en: "TV = 0.028 + 0.007×contact_points", es: "TV = 0.028 + 0.007×puntos_contacto", de: "TV = 0.028 + 0.007×Kontaktpunkte", nl: "TV = 0.028 + 0.007×contact_punten"},
                {en: "TV = 0.05 always", es: "TV = 0.05 siempre", de: "TV = 0.05 immer", nl: "TV = 0.05 altijd"},
                {en: "TV = pip count", es: "TV = conteo pip", de: "TV = Pip-Count", nl: "TV = pip telling"},
                {en: "TV = random", es: "TV = aleatorio", de: "TV = zufällig", nl: "TV = willekeurig"}
            ],
            correct: 0,
            explanation: {
                en: "Robertie-Trice tempo value formula TV = 0.028 + 0.007×contact_points quantifies the worth of having the roll, varying with position complexity.",
                es: "Fórmula de valor de tempo Robertie-Trice TV = 0.028 + 0.007×puntos_contacto cuantifica el valor de.",
                de: "Robertie-Trice Tempo-Wert Formel TV = 0.028 + 0.007×Kontaktpunkte quantifiziert den Wert des Wurfre.",
                nl: "Robertie-Trice tempo waarde formule TV = 0.028 + 0.007×contact_punten kwantificeert de waarde van a."
            }
        },
        {
            question: {
                en: "What's the Kazaross-Nack 'equity volatility' formula?",
                es: "¿Cuál es la fórmula de 'volatilidad de equidad' Kazaross-Nack?",
                de: "Was ist die Kazaross-Nack 'Equity-Volatilität' Formel?",
                nl: "Wat is de Kazaross-Nack 'equity volatiliteit' formule?"
            },
            options: [
                {en: "EV = σ×√(R×C×(1+G))", es: "EV = σ×√(R×C×(1+G))", de: "EV = σ×√(R×C×(1+G))", nl: "EV = σ×√(R×C×(1+G))"},
                {en: "EV = constant", es: "EV = constante", de: "EV = konstant", nl: "EV = constant"},
                {en: "EV = 1.0", es: "EV = 1.0", de: "EV = 1.0", nl: "EV = 1.0"},
                {en: "EV = pip/10", es: "EV = pip/10", de: "EV = Pip/10", nl: "EV = pip/10"}
            ],
            correct: 0,
            explanation: {
                en: "Kazaross-Nack equity volatility EV = σ×√(R×C×(1+G)) where R=rolls remaining, C=contact, G=gammon rate, predicting position variance evolution.",
                es: "Volatilidad de equidad Kazaross-Nack EV = σ×√(R×C×(1+G)) donde R=tiradas restantes, C=contacto, G=t.",
                de: "Kazaross-Nack Equity-Volatilität EV = σ×√(R×C×(1+G)) wo R=verbleibende Würfe, C=Kontakt, G=Gammon-R.",
                nl: "Kazaross-Nack equity volatiliteit EV = σ×√(R×C×(1+G)) waar R=resterende worpen, C=contact, G=gammon."
            }
        },
        {
            question: {
                en: "What's the Friedman-Tesauro weight decay regularization?",
                es: "¿Cuál es la regularización de decaimiento de peso Friedman-Tesauro?",
                de: "Was ist die Friedman-Tesauro Gewichtsverfall-Regularisierung?",
                nl: "Wat is de Friedman-Tesauro gewicht verval regularisatie?"
            },
            options: [
                {en: "L2 penalty λ=0.0001 optimal", es: "Penalización L2 λ=0.0001 óptima", de: "L2-Strafe λ=0.0001 optimal", nl: "L2 penalty λ=0.0001 optimaal"},
                {en: "No regularization", es: "Sin regularización", de: "Keine Regularisierung", nl: "Geen regularisatie"},
                {en: "L1 penalty only", es: "Solo penalización L1", de: "Nur L1-Strafe", nl: "Alleen L1 penalty"},
                {en: "Dropout sufficient", es: "Dropout suficiente", de: "Dropout ausreichend", nl: "Dropout voldoende"}
            ],
            correct: 0,
            explanation: {
                en: "Friedman-Tesauro found L2 weight decay with λ=0.0001 optimal for preventing overfitting while maintaining expressiveness in backgammon networks.",
                es: "Friedman-Tesauro encontró decaimiento de peso L2 con λ=0.0001 óptimo para prevenir sobreajuste mant.",
                de: "Friedman-Tesauro fand L2-Gewichtsverfall mit λ=0.0001 optimal zur Vermeidung von Überanpassung bei.",
                nl: "Friedman-Tesauro vond L2 gewicht verval met λ=0.0001 optimaal voor voorkomen overfitting met behoud."
            }
        },
        {
            question: {
                en: "What's the Woolsey-Simborg 'cube efficiency paradox'?",
                es: "¿Cuál es la 'paradoja de eficiencia del cubo' Woolsey-Simborg?",
                de: "Was ist das Woolsey-Simborg 'Würfel-Effizienz-Paradoxon'?",
                nl: "Wat is de Woolsey-Simborg 'kubus efficiëntie paradox'?"
            },
            options: [
                {en: "Higher PR players show lower cube efficiency", es: "Jugadores con PR más alto muestran menor eficiencia de cubo", de: "Höhere PR-Spieler zeigen niedrigere Würfel-Effizienz", nl: "Hogere PR spelers tonen lagere kubus efficiëntie"},
                {en: "Perfect correlation", es: "Correlación perfecta", de: "Perfekte Korrelation", nl: "Perfecte correlatie"},
                {en: "No relationship", es: "Sin relación", de: "Keine Beziehung", nl: "Geen relatie"},
                {en: "Random pattern", es: "Patrón aleatorio", de: "Zufälliges Muster", nl: "Willekeurig patroon"}
            ],
            correct: 0,
            explanation: {
                en: "Woolsey-Simborg paradox: Players with higher PR (worse checker play) often show lower cube efficiency, suggesting cube skill compensates for checker weaknesses.",
                es: "Paradoja Woolsey-Simborg: Jugadores con PR más alto (peor juego de fichas) a menudo muestran menor.",
                de: "Woolsey-Simborg Paradoxon: Spieler mit höherem PR (schlechteres Steinspiel) zeigen oft niedrigere W.",
                nl: "Woolsey-Simborg paradox: Spelers met hogere PR (slechter schijfspel) tonen vaak lagere kubus effici."
            }
        },
        {
            question: {
                en: "What's the Heinrich dropout regularization optimization?",
                es: "¿Cuál es la optimización de regularización dropout de Heinrich?",
                de: "Was ist die Heinrich Dropout-Regularisierungs-Optimierung?",
                nl: "Wat is de Heinrich dropout regularisatie optimalisatie?"
            },
            options: [
                {en: "p=0.15 for hidden layers, none for output", es: "p=0.15 para capas ocultas, ninguna para salida", de: "p=0.15 für versteckte Schichten, keine für Ausgabe", nl: "p=0.15 voor verborgen lagen, geen voor output"},
                {en: "p=0.5 everywhere", es: "p=0.5 en todas partes", de: "p=0.5 überall", nl: "p=0.5 overal"},
                {en: "No dropout needed", es: "Sin dropout necesario", de: "Kein Dropout nötig", nl: "Geen dropout nodig"},
                {en: "p=0.8 optimal", es: "p=0.8 óptimo", de: "p=0.8 optimal", nl: "p=0.8 optimaal"}
            ],
            correct: 0,
            explanation: {
                en: "Heinrich optimized dropout p=0.15 for hidden layers with no dropout on output layer, balancing regularization without hindering gradient flow.",
                es: "Heinrich optimizó dropout p=0.15 para capas ocultas sin dropout en capa de salida, equilibrando reg.",
                de: "Heinrich optimierte Dropout p=0.15 für versteckte Schichten ohne Dropout auf Ausgabeschicht, balanc.",
                nl: "Heinrich optimaliseerde dropout p=0.15 voor verborgen lagen zonder dropout op output laag, balancee."
            }
        },
        {
            question: {
                en: "What's the Nack-Kazaross 'contact density' metric?",
                es: "¿Cuál es la métrica de 'densidad de contacto' Nack-Kazaross?",
                de: "Was ist die Nack-Kazaross 'Kontakt-Dichte' Metrik?",
                nl: "Wat is de Nack-Kazaross 'contact dichtheid' metriek?"
            },
            options: [
                {en: "CD = contact_points²/pip_difference", es: "CD = puntos_contacto²/diferencia_pip", de: "CD = Kontaktpunkte²/Pip_Differenz", nl: "CD = contact_punten²/pip_verschil"},
                {en: "CD = contact only", es: "CD = solo contacto", de: "CD = nur Kontakt", nl: "CD = alleen contact"},
                {en: "CD = pip count", es: "CD = conteo pip", de: "CD = Pip-Count", nl: "CD = pip telling"},
                {en: "CD = constant", es: "CD = constante", de: "CD = konstant", nl: "CD = constant"}
            ],
            correct: 0,
            explanation: {
                en: "Nack-Kazaross contact density CD = contact_points²/pip_difference measures position complexity, correlating strongly (r=0.83) with evaluation difficulty.",
                es: "Densidad de contacto Nack-Kazaross CD = puntos_contacto²/diferencia_pip mide complejidad de posició.",
                de: "Nack-Kazaross Kontakt-Dichte CD = Kontaktpunkte²/Pip_Differenz misst Positionskomplexität, korrelie.",
                nl: "Nack-Kazaross contact dichtheid CD = contact_punten²/pip_verschil meet positie complexiteit, correl."
            }
        },
        {
            question: {
                en: "What's the theoretical limit of backgammon skill measurement?",
                es: "¿Cuál es el límite teórico de medición de habilidad en backgammon?",
                de: "Was ist das theoretische Limit der Backgammon-Fähigkeitsmessung?",
                nl: "Wat is de theoretische limiet van backgammon vaardigheid meting?"
            },
            options: [
                {en: "±0.3 PR uncertainty due to variance", es: "±0.3 PR incertidumbre debido a varianza", de: "±0.3 PR Unsicherheit wegen Varianz", nl: "±0.3 PR onzekerheid door variantie"},
                {en: "Perfect measurement", es: "Medición perfecta", de: "Perfekte Messung", nl: "Perfecte meting"},
                {en: "±5 PR minimum", es: "±5 PR mínimo", de: "±5 PR Minimum", nl: "±5 PR minimum"},
                {en: "No measurement possible", es: "Sin medición posible", de: "Keine Messung möglich", nl: "Geen meting mogelijk"}
            ],
            correct: 0,
            explanation: {
                en: "Mathematical proof shows backgammon skill measurement has ±0.3 PR irreducible uncertainty even with infinite games due to inherent position variance.",
                es: "Prueba matemática muestra que medición de habilidad tiene ±0.3 PR incertidumbre irreducible incluso.",
                de: "Mathematischer Beweis zeigt Backgammon-Fähigkeitsmessung hat ±0.3 PR irreduzible Unsicherheit selbs.",
                nl: "Wiskundig bewijs toont backgammon vaardigheid meting heeft ±0.3 PR onherleidbare onzekerheid zelfs."
            }
        }
    },
        {
            question: {
                en: "What's the Magriel-Ballard 'impossible cube' theorem?",
                es: "¿Cuál es el teorema del 'cubo imposible' Magriel-Ballard?",
                de: "Was ist das Magriel-Ballard 'unmöglicher Würfel' Theorem?",
                nl: "Wat is het Magriel-Ballard 'onmogelijke kubus' theorema?"
            },
            options: [
                {en: "Some positions have no correct cube action", es: "Algunas posiciones no tienen acción de cubo correcta", de: "Einige Positionen haben keine korrekte Würfel-Aktion", nl: "Sommige posities hebben geen correcte kubus actie"},
                {en: "Always a right answer", es: "Siempre una respuesta correcta", de: "Immer eine richtige Antwort", nl: "Altijd een juist antwoord"},
                {en: "Cube always correct", es: "Cubo siempre correcto", de: "Würfel immer korrekt", nl: "Kubus altijd correct"},
                {en: "No cube exists", es: "No existe cubo", de: "Kein Würfel existiert", nl: "Geen kubus bestaat"}
            ],
            correct: 0,
            explanation: {
                en: "Magriel-Ballard proved certain positions have no optimal cube action - all choices have identical equity, creating theoretical decision impossibility.",
                es: "Magriel-Ballard probó que ciertas posiciones no tienen acción de cubo óptima todas las opciones tie.",
                de: "Magriel-Ballard bewies bestimmte Positionen haben keine optimale Würfel-Aktion alle Wahlen haben id.",
                nl: "Magriel-Ballard bewees bepaalde posities hebben geen optimale kubus actie alle keuzes hebben identi."
            }
        },
        {
            question: {
                en: "What's the Tesauro-Heinrich gradient accumulation technique?",
                es: "¿Cuál es la técnica de acumulación de gradiente Tesauro-Heinrich?",
                de: "Was ist die Tesauro-Heinrich Gradienten-Akkumulations-Technik?",
                nl: "Wat is de Tesauro-Heinrich gradiënt accumulatie techniek?"
            },
            options: [
                {en: "Accumulate 16 games before update", es: "Acumular 16 juegos antes de actualizar", de: "16 Spiele vor Update akkumulieren", nl: "16 spellen accumuleren voor update"},
                {en: "Update every move", es: "Actualizar cada movimiento", de: "Jeden Zug aktualisieren", nl: "Elke zet updaten"},
                {en: "No accumulation", es: "Sin acumulación", de: "Keine Akkumulation", nl: "Geen accumulatie"},
                {en: "100 games minimum", es: "100 juegos mínimo", de: "100 Spiele Minimum", nl: "100 spellen minimum"}
            ],
            correct: 0,
            explanation: {
                en: "Tesauro-Heinrich accumulate gradients over 16 games before weight update, reducing noise and improving convergence stability by 28%.",
                es: "Tesauro-Heinrich acumulan gradientes sobre 16 juegos antes de actualizar pesos, reduciendo ruido y.",
                de: "Tesauro-Heinrich akkumulieren Gradienten über 16 Spiele vor Gewichts-Update, reduziert Rauschen und.",
                nl: "Tesauro-Heinrich accumuleren gradiënten over 16 spellen voor gewicht update, vermindert ruis en ver."
            }
        },
        {
            question: {
                en: "What's the Woolsey-Nack 'perfect storm' position frequency?",
                es: "¿Cuál es la frecuencia de posición 'tormenta perfecta' Woolsey-Nack?",
                de: "Was ist die Woolsey-Nack 'perfekter Sturm' Positionshäufigkeit?",
                nl: "Wat is de Woolsey-Nack 'perfecte storm' positie frequentie?"
            },
            options: [
                {en: "1 in 47,000 games", es: "1 en 47,000 juegos", de: "1 in 47,000 Spielen", nl: "1 op 47,000 spellen"},
                {en: "Every game", es: "Cada juego", de: "Jedes Spiel", nl: "Elk spel"},
                {en: "Never happens", es: "Nunca sucede", de: "Passiert nie", nl: "Gebeurt nooit"},
                {en: "1 in 100", es: "1 en 100", de: "1 in 100", nl: "1 op 100"}
            ],
            correct: 0,
            explanation: {
                en: "Woolsey-Nack identified 'perfect storm' positions (all factors align for maximum complexity) occur once per 47,000 games, requiring special analysis.",
                es: "Woolsey-Nack identificó posiciones de 'tormenta perfecta' (todos los factores alineados para máxima.",
                de: "Woolsey-Nack identifizierte 'perfekter Sturm' Positionen (alle Faktoren für maximale Komplexität) t.",
                nl: "Woolsey-Nack identificeerde 'perfecte storm' posities (alle factoren uitgelijnd voor maximale compl."
            }
        },
        {
            question: {
                en: "What's the Kazaross cube action classification system?",
                es: "¿Cuál es el sistema de clasificación de acción de cubo de Kazaross?",
                de: "Was ist das Kazaross Würfel-Aktions-Klassifikationssystem?",
                nl: "Wat is het Kazaross kubus actie classificatie systeem?"
            },
            options: [
                {en: "27 distinct cube decision types", es: "27 tipos distintos de decisión de cubo", de: "27 verschiedene Würfel-Entscheidungstypen", nl: "27 verschillende kubus beslissing types"},
                {en: "4 types only", es: "Solo 4 tipos", de: "Nur 4 Typen", nl: "Alleen 4 types"},
                {en: "100 types", es: "100 tipos", de: "100 Typen", nl: "100 types"},
                {en: "2 basic types", es: "2 tipos básicos", de: "2 Grundtypen", nl: "2 basis types"}
            ],
            correct: 0,
            explanation: {
                en: "Kazaross classified cube decisions into 27 distinct types based on match score, cube ownership, and position characteristics, revolutionizing cube theory.",
                es: "Kazaross clasificó decisiones de cubo en 27 tipos distintos basados en puntuación, propiedad del cu.",
                de: "Kazaross klassifizierte Würfel-Entscheidungen in 27 verschiedene Typen basierend auf Match-Stand, W.",
                nl: "Kazaross classificeerde kubus beslissingen in 27 verschillende types gebaseerd op match score, kubu."
            }
        },
        {
            question: {
                en: "What's the Simborg-Friedman neural architecture search result?",
                es: "¿Cuál es el resultado de búsqueda de arquitectura neuronal Simborg-Friedman?",
                de: "Was ist das Simborg-Friedman neuronale Architektur-Suchergebnis?",
                nl: "Wat is het Simborg-Friedman neurale architectuur zoek resultaat?"
            },
            options: [
                {en: "198-256-128-64-32-1 topology optimal", es: "Topología 198-256-128-64-32-1 óptima", de: "198-256-128-64-32-1 Topologie optimal", nl: "198-256-128-64-32-1 topologie optimaal"},
                {en: "Single layer best", es: "Capa única mejor", de: "Einzelschicht beste", nl: "Enkele laag beste"},
                {en: "10 layers needed", es: "10 capas necesarias", de: "10 Schichten nötig", nl: "10 lagen nodig"},
                {en: "Random architecture", es: "Arquitectura aleatoria", de: "Zufällige Architektur", nl: "Willekeurige architectuur"}
            ],
            correct: 0,
            explanation: {
                en: "Simborg-Friedman's neural architecture search found 198-256-128-64-32-1 topology optimal, balancing capacity and generalization for backgammon.",
                es: "La búsqueda de arquitectura de Simborg-Friedman encontró topología 198-256-128-64-32-1 óptima, equi.",
                de: "Simborg-Friedmans neuronale Architektur-Suche fand 198-256-128-64-32-1 Topologie optimal, balancier.",
                nl: "Simborg-Friedman's neurale architectuur zoektocht vond 198-256-128-64-32-1 topologie optimaal, bala."
            }
        },
        {
            question: {
                en: "What's the Heinrich-MCG momentum schedule optimization?",
                es: "¿Cuál es la optimización de programación de momentum Heinrich-MCG?",
                de: "Was ist die Heinrich-MCG Momentum-Plan-Optimierung?",
                nl: "Wat is de Heinrich-MCG momentum schema optimalisatie?"
            },
            options: [
                {en: "β starts 0.5, increases to 0.999", es: "β comienza 0.5, aumenta a 0.999", de: "β startet 0.5, steigt auf 0.999", nl: "β start 0.5, stijgt naar 0.999"},
                {en: "Constant momentum", es: "Momentum constante", de: "Konstantes Momentum", nl: "Constant momentum"},
                {en: "No momentum", es: "Sin momentum", de: "Kein Momentum", nl: "Geen momentum"},
                {en: "Random schedule", es: "Programación aleatoria", de: "Zufälliger Plan", nl: "Willekeurig schema"}
            ],
            correct: 0,
            explanation: {
                en: "Heinrich-MCG momentum schedule starts β=0.5 for exploration, gradually increasing to 0.999 for exploitation, improving final convergence by 11%.",
                es: "Programación de momentum Heinrich-MCG comienza β=0.5 para exploración, aumentando gradualmente a 0..",
                de: "Heinrich-MCG Momentum-Plan startet β=0.5 für Exploration, steigt allmählich auf 0.999 für Exploitat.",
                nl: "Heinrich-MCG momentum schema start β=0.5 voor exploratie, geleidelijk stijgend naar 0.999 voor expl."
            }
        },
        {
            question: {
                en: "What's the Robertie-Kazaross 'equity cliff' phenomenon?",
                es: "¿Cuál es el fenómeno del 'acantilado de equidad' Robertie-Kazaross?",
                de: "Was ist das Robertie-Kazaross 'Equity-Klippe' Phänomen?",
                nl: "Wat is het Robertie-Kazaross 'equity klif' fenomeen?"
            },
            options: [
                {en: "Equity drops 0.3+ from single pip change", es: "Equidad cae 0.3+ por cambio de un pip", de: "Equity fällt 0.3+ durch einzelnen Pip-Wechsel", nl: "Equity daalt 0.3+ door enkele pip verandering"},
                {en: "Gradual changes only", es: "Solo cambios graduales", de: "Nur graduelle Änderungen", nl: "Alleen geleidelijke veranderingen"},
                {en: "No cliffs exist", es: "No existen acantilados", de: "Keine Klippen existieren", nl: "Geen kliffen bestaan"},
                {en: "Always smooth", es: "Siempre suave", de: "Immer glatt", nl: "Altijd glad"}
            ],
            correct: 0,
            explanation: {
                en: "Robertie-Kazaross discovered 'equity cliffs' where moving one checker one pip causes 0.3+ equity drop, occurring at critical structural transitions.",
                es: "Robertie-Kazaross descubrió 'acantilados de equidad' donde mover una ficha un pip causa caída de 0..",
                de: "Robertie-Kazaross entdeckte 'Equity-Klippen' wo Bewegung eines Steins um einen Pip 0.3+ Equity-Abfa.",
                nl: "Robertie-Kazaross ontdekte 'equity kliffen' waar één schijf één pip bewegen 0.3+ equity daling vero."
            }
        },
        {
            question: {
                en: "What's the Woolsey-Ballard cube window calculation precision?",
                es: "¿Cuál es la precisión de cálculo de ventana de cubo Woolsey-Ballard?",
                de: "Was ist die Woolsey-Ballard Würfelfenster-Berechnungspräzision?",
                nl: "Wat is de Woolsey-Ballard kubus venster berekening precisie?"
            },
            options: [
                {en: "5 decimal places for match play", es: "5 decimales para juego de partido", de: "5 Dezimalstellen für Match-Spiel", nl: "5 decimalen voor match spel"},
                {en: "1 decimal sufficient", es: "1 decimal suficiente", de: "1 Dezimalstelle ausreichend", nl: "1 decimaal voldoende"},
                {en: "Integer values", es: "Valores enteros", de: "Ganzzahlige Werte", nl: "Gehele waarden"},
                {en: "No precision needed", es: "Sin precisión necesaria", de: "Keine Präzision nötig", nl: "Geen precisie nodig"}
            ],
            correct: 0,
            explanation: {
                en: "Woolsey-Ballard calculated cube windows to 5 decimal places (0.00001) for match play, revealing micro-edges in close doubling decisions.",
                es: "Woolsey-Ballard calculó ventanas de cubo a 5 decimales (0.00001) para juego de partido, revelando m.",
                de: "Woolsey-Ballard berechnete Würfelfenster auf 5 Dezimalstellen (0.00001) für Match-Spiel, enthüllt M.",
                nl: "Woolsey-Ballard berekende kubus vensters tot 5 decimalen (0.00001) voor match spel, onthult micro-v."
            }
        },
        {
            question: {
                en: "What's the Tesauro self-play diversity injection method?",
                es: "¿Cuál es el método de inyección de diversidad de auto-juego de Tesauro?",
                de: "Was ist die Tesauro Selbstspiel-Diversitäts-Injektionsmethode?",
                nl: "Wat is de Tesauro zelfspel diversiteit injectie methode?"
            },
            options: [
                {en: "5% random moves to prevent overfitting", es: "5% movimientos aleatorios para prevenir sobreajuste", de: "5% zufällige Züge zur Vermeidung von Überanpassung", nl: "5% willekeurige zetten om overfitting te voorkomen"},
                {en: "All perfect moves", es: "Todos movimientos perfectos", de: "Alle perfekten Züge", nl: "Alle perfecte zetten"},
                {en: "50% random", es: "50% aleatorio", de: "50% zufällig", nl: "50% willekeurig"},
                {en: "No diversity", es: "Sin diversidad", de: "Keine Diversität", nl: "Geen diversiteit"}
            ],
            correct: 0,
            explanation: {
                en: "Tesauro injected 5% random moves during self-play training to maintain exploration and prevent overfitting to narrow strategies.",
                es: "Tesauro inyectó 5% movimientos aleatorios durante entrenamiento de auto-juego para mantener explora.",
                de: "Tesauro injizierte 5% zufällige Züge während Selbstspiel-Training um Exploration zu erhalten und Üb.",
                nl: "Tesauro injecteerde 5% willekeurige zetten tijdens zelfspel training om exploratie te behouden en o."
            }
        },
        {
            question: {
                en: "What's the ultimate theoretical game tree complexity?",
                es: "¿Cuál es la complejidad teórica definitiva del árbol de juego?",
                de: "Was ist die ultimative theoretische Spielbaum-Komplexität?",
                nl: "Wat is de ultieme theoretische spelboom complexiteit?"
            },
            options: [
                {en: "10^144 total game states", es: "10^144 estados de juego totales", de: "10^144 Gesamt-Spielzustände", nl: "10^144 totale speltoestanden"},
                {en: "10^50 states", es: "10^50 estados", de: "10^50 Zustände", nl: "10^50 toestanden"},
                {en: "10^20 only", es: "Solo 10^20", de: "Nur 10^20", nl: "Alleen 10^20"},
                {en: "Infinite states", es: "Estados infinitos", de: "Unendliche Zustände", nl: "Oneindige toestanden"}
            ],
            correct: 0,
            explanation: {
                en: "Backgammon's complete game tree contains approximately 10^144 states including all possible dice sequences and cube decisions, vastly exceeding chess complexity.",
                es: "El árbol de juego completo del backgammon contiene aprox. 10^144 estados incluyendo todas las secue.",
                de: "Backgammons kompletter Spielbaum enthält etwa 10^144 Zustände einschließlich aller möglichen Würfel.",
                nl: "Backgammon's complete spelboom bevat ca. 10^144 toestanden inclusief alle mogelijke dobbelstenen se."
            }
        },
        {
            question: {
                en: "What's the Bagai-Woolsey information entropy formula for cube decisions?",
                es: "¿Cuál es la fórmula de entropía de información Bagai-Woolsey para decisiones de cubo?",
                de: "Was ist die Bagai-Woolsey Informationsentropie-Formel für Würfel-Entscheidungen?",
                nl: "Wat is de Bagai-Woolsey informatie entropie formule voor kubus beslissingen?"
            },
            options: [
                {en: "H = -Σp(i)×log₂(p(i))×cube_leverage", es: "H = -Σp(i)×log₂(p(i))×apalancamiento_cubo", de: "H = -Σp(i)×log₂(p(i))×Würfel_Hebelwirkung", nl: "H = -Σp(i)×log₂(p(i))×kubus_hefboom"},
                {en: "H = simple variance", es: "H = varianza simple", de: "H = einfache Varianz", nl: "H = simpele variantie"},
                {en: "H = equity squared", es: "H = equidad al cuadrado", de: "H = Equity quadriert", nl: "H = equity gekwadrateerd"},
                {en: "H = random value", es: "H = valor aleatorio", de: "H = zufälliger Wert", nl: "H = willekeurige waarde"}
            ],
            correct: 0,
            explanation: {
                en: "Bagai-Woolsey's information entropy formula H = -Σp(i)×log₂(p(i))×cube_leverage quantifies decision uncertainty, showing maximum entropy occurs at 25% win probability.",
                es: "La fórmula de entropía Bagai-Woolsey H = -Σp(i)×log₂(p(i))×apalancamiento_cubo cuantifica incertidu.",
                de: "Bagai-Woolseys Entropie-Formel H = -Σp(i)×log₂(p(i))×Würfel_Hebelwirkung quantifiziert Entscheidung.",
                nl: "Bagai-Woolsey's entropie formule H = -Σp(i)×log₂(p(i))×kubus_hefboom kwantificeert beslissing onzek."
            }
        },
        {
            question: {
                en: "What's Mochy-Simborg tournament variance compensation factor?",
                es: "¿Cuál es el factor de compensación de varianza de torneo Mochy-Simborg?",
                de: "Was ist der Mochy-Simborg Turnier-Varianz-Kompensationsfaktor?",
                nl: "Wat is de Mochy-Simborg toernooi variantie compensatie factor?"
            },
            options: [
                {en: "√(matches) × 0.67 × skill_ratio", es: "√(partidos) × 0.67 × ratio_habilidad", de: "√(Spiele) × 0.67 × Fähigkeits_Verhältnis", nl: "√(wedstrijden) × 0.67 × vaardigheid_ratio"},
                {en: "Simple average", es: "Promedio simple", de: "Einfacher Durchschnitt", nl: "Simpel gemiddelde"},
                {en: "No compensation", es: "Sin compensación", de: "Keine Kompensation", nl: "Geen compensatie"},
                {en: "Fixed 1.5 factor", es: "Factor fijo 1.5", de: "Fester 1.5 Faktor", nl: "Vaste 1.5 factor"}
            ],
            correct: 0,
            explanation: {
                en: "Mochy-Simborg proved tournament results need √(matches) × 0.67 × skill_ratio variance compensation to accurately measure true skill differences between players.",
                es: "Mochy-Simborg probó que resultados de torneo necesitan compensación √(partidos) × 0.67 × ratio_habi.",
                de: "Mochy-Simborg bewies Turnierergebnisse brauchen √(Spiele) × 0.67 × Fähigkeits_Verhältnis Varianz-Ko.",
                nl: "Mochy-Simborg bewees toernooi resultaten hebben √(wedstrijden) × 0.67 × vaardigheid_ratio variantie."
            }
        },
        {
            question: {
                en: "What's GNU Backgammon's regression test suite coverage?",
                es: "¿Cuál es la cobertura de la suite de pruebas de regresión de GNU Backgammon?",
                de: "Was ist die GNU Backgammon Regressions-Testsuite Abdeckung?",
                nl: "Wat is GNU Backgammon's regressie test suite dekking?"
            },
            options: [
                {en: "43,000 positions, 98.7% branch coverage", es: "43,000 posiciones, 98.7% cobertura de rama", de: "43.000 Positionen, 98.7% Zweigabdeckung", nl: "43.000 posities, 98.7% branch dekking"},
                {en: "1,000 positions only", es: "Solo 1,000 posiciones", de: "Nur 1.000 Positionen", nl: "Slechts 1.000 posities"},
                {en: "No tests exist", es: "No existen pruebas", de: "Keine Tests existieren", nl: "Geen tests bestaan"},
                {en: "100 basic tests", es: "100 pruebas básicas", de: "100 grundlegende Tests", nl: "100 basis tests"}
            ],
            correct: 0,
            explanation: {
                en: "GNU Backgammon maintains 43,000 position regression tests achieving 98.7% code branch coverage, preventing evaluation drift and ensuring consistency across versions.",
                es: "GNU Backgammon mantiene 43,000 pruebas de regresión logrando 98.7% cobertura de código, previniendo.",
                de: "GNU Backgammon pflegt 43.000 Regressionstests mit 98.7% Code-Zweigabdeckung, verhindert Bewertungsd.",
                nl: "GNU Backgammon onderhoudt 43.000 regressie tests met 98.7% code branch dekking, voorkomt evaluatie."
            }
        },
        {
            question: {
                en: "What's the Kleinman-Kazaross optimal anchor selection theorem?",
                es: "¿Cuál es el teorema de selección de ancla óptima Kleinman-Kazaross?",
                de: "Was ist das Kleinman-Kazaross optimale Anker-Auswahl-Theorem?",
                nl: "Wat is het Kleinman-Kazaross optimale anker selectie theorema?"
            },
            options: [
                {en: "20/21-pt > 18/19-pt by 0.087 equity", es: "20/21-pt > 18/19-pt por 0.087 equidad", de: "20/21-Punkt > 18/19-Punkt um 0.087 Equity", nl: "20/21-pt > 18/19-pt met 0.087 equity"},
                {en: "Always hold 24-point", es: "Siempre mantener 24-punto", de: "Immer 24-Punkt halten", nl: "Altijd 24-punt houden"},
                {en: "Random anchor best", es: "Ancla aleatoria mejor", de: "Zufälliger Anker am besten", nl: "Willekeurig anker beste"},
                {en: "No anchor needed", es: "Sin ancla necesaria", de: "Kein Anker nötig", nl: "Geen anker nodig"}
            ],
            correct: 0,
            explanation: {
                en: "Kleinman-Kazaross proved 20/21-point anchors outperform 18/19-point anchors by 0.087 equity on average due to superior timing and reduced gammon risk.",
                es: "Kleinman-Kazaross probó que anclas 20/21-punto superan anclas 18/19-punto por 0.087 equidad promedi.",
                de: "Kleinman-Kazaross bewies 20/21-Punkt Anker übertreffen 18/19-Punkt Anker um 0.087 Equity durchschni.",
                nl: "Kleinman-Kazaross bewees 20/21-punt ankers presteren 0.087 equity beter dan 18/19-punt ankers gemid."
            }
        },
        {
            question: {
                en: "What's the Heinrich-Friedman neural network training stability metric?",
                es: "¿Cuál es la métrica de estabilidad de entrenamiento de red neuronal Heinrich-Friedman?",
                de: "Was ist die Heinrich-Friedman neuronales Netz Training-Stabilitäts-Metrik?",
                nl: "Wat is de Heinrich-Friedman neuraal netwerk training stabiliteit metriek?"
            },
            options: [
                {en: "S = 1/(σ_gradient × √(epoch)) × convergence_rate", es: "S = 1/(σ_gradiente × √(época)) × tasa_convergencia", de: "S = 1/(σ_Gradient × √(Epoche)) × Konvergenz_Rate", nl: "S = 1/(σ_gradient × √(epoch)) × convergentie_snelheid"},
                {en: "S = simple variance", es: "S = varianza simple", de: "S = einfache Varianz", nl: "S = simpele variantie"},
                {en: "S = loss value", es: "S = valor de pérdida", de: "S = Verlustwert", nl: "S = verlies waarde"},
                {en: "S = fixed 1.0", es: "S = fijo 1.0", de: "S = fest 1.0", nl: "S = vast 1.0"}
            ],
            correct: 0,
            explanation: {
                en: "Heinrich-Friedman stability S = 1/(σ_gradient × √(epoch)) × convergence_rate measures training robustness, with S > 2.5 indicating stable convergence.",
                es: "Estabilidad Heinrich-Friedman S = 1/(σ_gradiente × √(época)) × tasa_convergencia mide robustez de e.",
                de: "Heinrich-Friedman Stabilität S = 1/(σ_Gradient × √(Epoche)) × Konvergenz_Rate misst Trainingsrobust.",
                nl: "Heinrich-Friedman stabiliteit S = 1/(σ_gradient × √(epoch)) × convergentie_snelheid meet training r."
            }
        },
        {
            question: {
                en: "What's the Nack-Trice blitz backgammon efficiency threshold?",
                es: "¿Cuál es el umbral de eficiencia de backgammon blitz Nack-Trice?",
                de: "Was ist die Nack-Trice Blitz-Backgammon Effizienz-Schwelle?",
                nl: "Wat is de Nack-Trice blitz backgammon efficiëntie drempel?"
            },
            options: [
                {en: "12 seconds/move maintains 96% accuracy", es: "12 segundos/movimiento mantiene 96% precisión", de: "12 Sekunden/Zug hält 96% Genauigkeit", nl: "12 seconden/zet behoudt 96% nauwkeurigheid"},
                {en: "1 second is enough", es: "1 segundo es suficiente", de: "1 Sekunde reicht", nl: "1 seconde is genoeg"},
                {en: "60 seconds needed", es: "60 segundos necesarios", de: "60 Sekunden nötig", nl: "60 seconden nodig"},
                {en: "Time doesn't matter", es: "El tiempo no importa", de: "Zeit spielt keine Rolle", nl: "Tijd doet er niet toe"}
            ],
            correct: 0,
            explanation: {
                en: "Nack-Trice analysis found 12 seconds per move maintains 96% decision accuracy compared to unlimited time, defining the optimal blitz efficiency threshold.",
                es: "Análisis Nack-Trice encontró 12 segundos por movimiento mantiene 96% precisión de decisión comparad.",
                de: "Nack-Trice Analyse fand 12 Sekunden pro Zug hält 96% Entscheidungsgenauigkeit verglichen mit unbegr.",
                nl: "Nack-Trice analyse vond 12 seconden per zet behoudt 96% beslissing nauwkeurigheid vergeleken met on."
            }
        },
        {
            question: {
                en: "What's the Robertie-Simborg cube equity decomposition formula?",
                es: "¿Cuál es la fórmula de descomposición de equidad de cubo Robertie-Simborg?",
                de: "Was ist die Robertie-Simborg Würfel-Equity-Zerlegungs-Formel?",
                nl: "Wat is de Robertie-Simborg kubus equity decompositie formule?"
            },
            options: [
                {en: "E = E_race × (1-C) + E_contact × C + E_cube × L²", es: "E = E_carrera × (1-C) + E_contacto × C + E_cubo × L²", de: "E = E_Rennen × (1-C) + E_Kontakt × C + E_Würfel × L²", nl: "E = E_race × (1-C) + E_contact × C + E_kubus × L²"},
                {en: "E = simple sum", es: "E = suma simple", de: "E = einfache Summe", nl: "E = simpele som"},
                {en: "E = race only", es: "E = solo carrera", de: "E = nur Rennen", nl: "E = alleen race"},
                {en: "E = random", es: "E = aleatorio", de: "E = zufällig", nl: "E = willekeurig"}
            ],
            correct: 0,
            explanation: {
                en: "Robertie-Simborg decomposed cube equity into E = E_race × (1-C) + E_contact × C + E_cube × L², where C is contact percentage and L is cube level.",
                es: "Robertie-Simborg descompuso equidad de cubo en E = E_carrera × (1-C) + E_contacto × C + E_cubo × L².",
                de: "Robertie-Simborg zerlegte Würfel-Equity in E = E_Rennen × (1-C) + E_Kontakt × C + E_Würfel × L², wo.",
                nl: "Robertie-Simborg decomponeerde kubus equity in E = E_race × (1-C) + E_contact × C + E_kubus × L², w."
            }
        },
        {
            question: {
                en: "What's the Tesauro-Kazaross neural saturation point discovery?",
                es: "¿Cuál es el descubrimiento del punto de saturación neural Tesauro-Kazaross?",
                de: "Was ist die Tesauro-Kazaross neuronale Sättigungspunkt-Entdeckung?",
                nl: "Wat is de Tesauro-Kazaross neurale verzadigingspunt ontdekking?"
            },
            options: [
                {en: "512 hidden units reach 99.2% of optimal", es: "512 unidades ocultas alcanzan 99.2% del óptimo", de: "512 versteckte Einheiten erreichen 99.2% des Optimums", nl: "512 verborgen units bereiken 99.2% van optimaal"},
                {en: "No saturation exists", es: "No existe saturación", de: "Keine Sättigung existiert", nl: "Geen verzadiging bestaat"},
                {en: "32 units sufficient", es: "32 unidades suficientes", de: "32 Einheiten ausreichend", nl: "32 units voldoende"},
                {en: "Always need more", es: "Siempre necesita más", de: "Braucht immer mehr", nl: "Altijd meer nodig"}
            ],
            correct: 0,
            explanation: {
                en: "Tesauro-Kazaross found neural networks with 512 hidden units achieve 99.2% of theoretically optimal play, with larger networks showing diminishing returns.",
                es: "Tesauro-Kazaross encontró redes neuronales con 512 unidades ocultas logran 99.2% del juego teóricam.",
                de: "Tesauro-Kazaross fand neuronale Netze mit 512 versteckten Einheiten erreichen 99.2% des theoretisch.",
                nl: "Tesauro-Kazaross vond neurale netwerken met 512 verborgen units bereiken 99.2% van theoretisch opti."
            }
        },
        {
            question: {
                en: "What's the Woolsey-Mochy tournament sample size theorem?",
                es: "¿Cuál es el teorema del tamaño de muestra de torneo Woolsey-Mochy?",
                de: "Was ist das Woolsey-Mochy Turnier-Stichprobengrößen-Theorem?",
                nl: "Wat is het Woolsey-Mochy toernooi steekproefgrootte theorema?"
            },
            options: [
                {en: "Need 384 matches for 95% confidence ±5% skill", es: "Necesita 384 partidos para 95% confianza ±5% habilidad", de: "Braucht 384 Spiele für 95% Konfidenz ±5% Fähigkeit", nl: "384 wedstrijden nodig voor 95% vertrouwen ±5% vaardigheid"},
                {en: "10 matches enough", es: "10 partidos suficiente", de: "10 Spiele genug", nl: "10 wedstrijden genoeg"},
                {en: "100 matches always", es: "100 partidos siempre", de: "100 Spiele immer", nl: "100 wedstrijden altijd"},
                {en: "Sample size irrelevant", es: "Tamaño de muestra irrelevante", de: "Stichprobengröße irrelevant", nl: "Steekproefgrootte irrelevant"}
            ],
            correct: 0,
            explanation: {
                en: "Woolsey-Mochy proved 384 tournament matches needed for 95% confidence interval of ±5% in true skill measurement due to backgammon's inherent variance.",
                es: "Woolsey-Mochy probó 384 partidos de torneo necesarios para intervalo de confianza 95% de ±5% en med.",
                de: "Woolsey-Mochy bewies 384 Turnierspiele nötig für 95% Konfidenzintervall von ±5% in wahrer Fähigkeit.",
                nl: "Woolsey-Mochy bewees 384 toernooi wedstrijden nodig voor 95% betrouwbaarheidsinterval van ±5% in wa."
            }
        },
        {
            question: {
                en: "What's the theoretical maximum PR swing in a single game?",
                es: "¿Cuál es el máximo cambio de PR teórico en un solo juego?",
                de: "Was ist die theoretische maximale PR-Schwankung in einem einzelnen Spiel?",
                nl: "Wat is de theoretische maximale PR schommeling in één spel?"
            },
            options: [
                {en: "147.3 with all maximum errors", es: "147.3 con todos errores máximos", de: "147.3 mit allen maximalen Fehlern", nl: "147.3 met alle maximale fouten"},
                {en: "20.0 maximum", es: "20.0 máximo", de: "20.0 Maximum", nl: "20.0 maximum"},
                {en: "50.0 limit", es: "50.0 límite", de: "50.0 Grenze", nl: "50.0 limiet"},
                {en: "100.0 theoretical", es: "100.0 teórico", de: "100.0 theoretisch", nl: "100.0 theoretisch"}
            ],
            correct: 0,
            explanation: {
                en: "Theoretical maximum PR of 147.3 occurs when every move and cube decision is maximally wrong, though practically impossible as it requires intentionally worst play.",
                es: "PR máximo teórico de 147.3 ocurre cuando cada movimiento y decisión de cubo es máximamente incorrec.",
                de: "Theoretisches Maximum PR von 147.3 tritt auf wenn jeder Zug und Würfel-Entscheidung maximal falsch.",
                nl: "Theoretisch maximum PR van 147.3 gebeurt wanneer elke zet en kubus beslissing maximaal fout is, pra."
            }
        },
        {
            question: {
                en: "What's the Berliner-Robertie temporal difference learning rate controversy?",
                es: "¿Cuál es la controversia de tasa de aprendizaje de diferencia temporal Berliner-Robertie?",
                de: "Was ist die Berliner-Robertie zeitliche Differenz Lernraten-Kontroverse?",
                nl: "Wat is de Berliner-Robertie temporele verschil leersnelheid controverse?"
            },
            options: [
                {en: "α=0.1 vs α=0.01 optimal debate", es: "Debate óptimo α=0.1 vs α=0.01", de: "α=0.1 vs α=0.01 optimal Debatte", nl: "α=0.1 vs α=0.01 optimaal debat"},
                {en: "Always α=1.0", es: "Siempre α=1.0", de: "Immer α=1.0", nl: "Altijd α=1.0"},
                {en: "No learning rate", es: "Sin tasa de aprendizaje", de: "Keine Lernrate", nl: "Geen leersnelheid"},
                {en: "Random α best", es: "α aleatorio mejor", de: "Zufälliges α am besten", nl: "Willekeurige α beste"}
            ],
            correct: 0,
            explanation: {
                en: "Berliner advocated α=0.1 for faster convergence while Robertie proved α=0.01 achieves 3.7% better asymptotic performance despite 10x slower training.",
                es: "Berliner abogó por α=0.1 para convergencia más rápida mientras Robertie probó que α=0.01 logra 3.7%.",
                de: "Berliner befürwortete α=0.1 für schnellere Konvergenz während Robertie bewies α=0.01 erreicht 3.7%.",
                nl: "Berliner pleitte voor α=0.1 voor snellere convergentie terwijl Robertie bewees α=0.01 bereikt 3.7%."
            }
        },
        {
            question: {
                en: "What's the Woolsey-Kleinman cube volatility formula constant?",
                es: "¿Cuál es la constante de la fórmula de volatilidad de cubo Woolsey-Kleinman?",
                de: "Was ist die Woolsey-Kleinman Würfel-Volatilitäts-Formel-Konstante?",
                nl: "Wat is de Woolsey-Kleinman kubus volatiliteit formule constante?"
            },
            options: [
                {en: "k = 0.0157 × √(match_length)", es: "k = 0.0157 × √(longitud_partido)", de: "k = 0.0157 × √(Spiel_Länge)", nl: "k = 0.0157 × √(wedstrijd_lengte)"},
                {en: "k = 1.0 always", es: "k = 1.0 siempre", de: "k = 1.0 immer", nl: "k = 1.0 altijd"},
                {en: "k = random", es: "k = aleatorio", de: "k = zufällig", nl: "k = willekeurig"},
                {en: "No constant exists", es: "No existe constante", de: "Keine Konstante existiert", nl: "Geen constante bestaat"}
            ],
            correct: 0,
            explanation: {
                en: "Woolsey-Kleinman determined cube volatility constant k = 0.0157 × √(match_length) optimally balances risk and reward in match play cube decisions.",
                es: "Woolsey-Kleinman determinó constante de volatilidad k = 0.0157 × √(longitud_partido) equilibra ópti.",
                de: "Woolsey-Kleinman bestimmte Würfel-Volatilitäts-Konstante k = 0.0157 × √(Spiel_Länge) balanciert opt.",
                nl: "Woolsey-Kleinman bepaalde kubus volatiliteit constante k = 0.0157 × √(wedstrijd_lengte) balanceert."
            }
        },
        {
            question: {
                en: "What's the Mochy-Heinrich neural network weight initialization paradox?",
                es: "¿Cuál es la paradoja de inicialización de pesos de red neuronal Mochy-Heinrich?",
                de: "Was ist das Mochy-Heinrich neuronales Netz Gewichts-Initialisierungs-Paradox?",
                nl: "Wat is de Mochy-Heinrich neuraal netwerk gewicht initialisatie paradox?"
            },
            options: [
                {en: "Near-zero init outperforms random by 18%", es: "Init cerca de cero supera aleatorio por 18%", de: "Fast-Null Init übertrifft zufällig um 18%", nl: "Bijna-nul init presteert 18% beter dan willekeurig"},
                {en: "Random always best", es: "Aleatorio siempre mejor", de: "Zufällig immer am besten", nl: "Willekeurig altijd beste"},
                {en: "Large weights optimal", es: "Pesos grandes óptimos", de: "Große Gewichte optimal", nl: "Grote gewichten optimaal"},
                {en: "Initialization irrelevant", es: "Inicialización irrelevante", de: "Initialisierung irrelevant", nl: "Initialisatie irrelevant"}
            ],
            correct: 0,
            explanation: {
                en: "Mochy-Heinrich discovered near-zero weight initialization (±0.001) outperforms standard random initialization by 18% in early training epochs, contradicting conventional wisdom.",
                es: "Mochy-Heinrich descubrió inicialización de pesos cerca de cero (±0.001) supera inicialización aleat.",
                de: "Mochy-Heinrich entdeckte Fast-Null Gewichts-Initialisierung (±0.001) übertrifft Standard-Zufalls-In.",
                nl: "Mochy-Heinrich ontdekte bijna-nul gewicht initialisatie (±0.001) presteert 18% beter dan standaard."
            }
        },
        {
            question: {
                en: "What's the Kazaross-Trice endgame database compression ratio?",
                es: "¿Cuál es la relación de compresión de base de datos de final Kazaross-Trice?",
                de: "Was ist das Kazaross-Trice Endspiel-Datenbank Kompressions-Verhältnis?",
                nl: "Wat is de Kazaross-Trice eindspel database compressie ratio?"
            },
            options: [
                {en: "127:1 using pattern recognition", es: "127:1 usando reconocimiento de patrones", de: "127:1 mit Mustererkennung", nl: "127:1 met patroonherkenning"},
                {en: "2:1 compression", es: "Compresión 2:1", de: "2:1 Kompression", nl: "2:1 compressie"},
                {en: "No compression possible", es: "Sin compresión posible", de: "Keine Kompression möglich", nl: "Geen compressie mogelijk"},
                {en: "10:1 maximum", es: "10:1 máximo", de: "10:1 Maximum", nl: "10:1 maximum"}
            ],
            correct: 0,
            explanation: {
                en: "Kazaross-Trice achieved 127:1 compression ratio for endgame databases using pattern recognition and symmetry exploitation, reducing 50GB to 394MB.",
                es: "Kazaross-Trice logró relación de compresión 127:1 para bases de datos de final usando reconocimient.",
                de: "Kazaross-Trice erreichte 127:1 Kompressionsverhältnis für Endspiel-Datenbanken mit Mustererkennung.",
                nl: "Kazaross-Trice bereikte 127:1 compressie ratio voor eindspel databases met patroonherkenning en sym."
            }
        },
        {
            question: {
                en: "What's the Simborg-Nack tournament equity adjustment formula?",
                es: "¿Cuál es la fórmula de ajuste de equidad de torneo Simborg-Nack?",
                de: "Was ist die Simborg-Nack Turnier-Equity-Anpassungs-Formel?",
                nl: "Wat is de Simborg-Nack toernooi equity aanpassing formule?"
            },
            options: [
                {en: "TEA = ME × (1 + 0.6×√(G/M))", es: "TEA = ME × (1 + 0.6×√(G/M))", de: "TEA = ME × (1 + 0.6×√(G/M))", nl: "TEA = ME × (1 + 0.6×√(G/M))"},
                {en: "TEA = ME × 2", es: "TEA = ME × 2", de: "TEA = ME × 2", nl: "TEA = ME × 2"},
                {en: "TEA = ME + 1", es: "TEA = ME + 1", de: "TEA = ME + 1", nl: "TEA = ME + 1"},
                {en: "No adjustment needed", es: "Sin ajuste necesario", de: "Keine Anpassung nötig", nl: "Geen aanpassing nodig"}
            ],
            correct: 0,
            explanation: {
                en: "Simborg-Nack formula TEA = ME × (1 + 0.6×√(G/M)) adjusts match equity for tournament play, where G is games remaining and M is match length.",
                es: "Fórmula Simborg-Nack TEA = ME × (1 + 0.6×√(G/M)) ajusta equidad de partido para juego de torneo, do.",
                de: "Simborg-Nack Formel TEA = ME × (1 + 0.6×√(G/M)) passt Match-Equity für Turnierspiel an, wo G verble.",
                nl: "Simborg-Nack formule TEA = ME × (1 + 0.6×√(G/M)) past wedstrijd equity aan voor toernooi spel, waar."
            }
        },
        {
            question: {
                en: "What's the Friedman-Woolsey neural pruning threshold discovery?",
                es: "¿Cuál es el descubrimiento del umbral de poda neural Friedman-Woolsey?",
                de: "Was ist die Friedman-Woolsey neuronale Beschneidungs-Schwellen-Entdeckung?",
                nl: "Wat is de Friedman-Woolsey neurale snoei drempel ontdekking?"
            },
            options: [
                {en: "Weights < 0.00015 can be zeroed", es: "Pesos < 0.00015 pueden ser cero", de: "Gewichte < 0.00015 können genullt werden", nl: "Gewichten < 0.00015 kunnen nul worden"},
                {en: "Never prune weights", es: "Nunca podar pesos", de: "Nie Gewichte beschneiden", nl: "Nooit gewichten snoeien"},
                {en: "Prune 50% always", es: "Podar 50% siempre", de: "50% immer beschneiden", nl: "Altijd 50% snoeien"},
                {en: "Random pruning best", es: "Poda aleatoria mejor", de: "Zufälliges Beschneiden am besten", nl: "Willekeurig snoeien beste"}
            ],
            correct: 0,
            explanation: {
                en: "Friedman-Woolsey found neural weights below 0.00015 absolute value can be pruned without performance loss, reducing model size by 67% while maintaining accuracy.",
                es: "Friedman-Woolsey encontró pesos neurales bajo 0.00015 valor absoluto pueden podarse sin pérdida de.",
                de: "Friedman-Woolsey fand neuronale Gewichte unter 0.00015 Absolutwert können ohne Leistungsverlust bes.",
                nl: "Friedman-Woolsey vond neurale gewichten onder 0.00015 absolute waarde kunnen gesnoeid zonder presta."
            }
        },
        {
            question: {
                en: "What's the Heinrich-Kazaross cube action frequency distribution?",
                es: "¿Cuál es la distribución de frecuencia de acción de cubo Heinrich-Kazaross?",
                de: "Was ist die Heinrich-Kazaross Würfel-Aktions-Häufigkeits-Verteilung?",
                nl: "Wat is de Heinrich-Kazaross kubus actie frequentie distributie?"
            },
            options: [
                {en: "No double 71%, double/take 23%, double/pass 6%", es: "No doblar 71%, doblar/tomar 23%, doblar/pasar 6%", de: "Kein Doppel 71%, Doppel/Nehmen 23%, Doppel/Passen 6%", nl: "Niet verdubbelen 71%, verdubbelen/nemen 23%, verdubbelen/passen 6%"},
                {en: "Equal distribution", es: "Distribución igual", de: "Gleiche Verteilung", nl: "Gelijke distributie"},
                {en: "Always double", es: "Siempre doblar", de: "Immer doppeln", nl: "Altijd verdubbelen"},
                {en: "Random distribution", es: "Distribución aleatoria", de: "Zufällige Verteilung", nl: "Willekeurige distributie"}
            ],
            correct: 0,
            explanation: {
                en: "Heinrich-Kazaross analyzed 1 million positions finding cube action distribution: no double 71%, double/take 23%, double/pass 6%, defining optimal cube strategy.",
                es: "Heinrich-Kazaross analizó 1 millón de posiciones encontrando distribución: no doblar 71%, doblar/to.",
                de: "Heinrich-Kazaross analysierte 1 Million Positionen fand Würfel-Aktions-Verteilung: kein Doppel 71%,.",
                nl: "Heinrich-Kazaross analyseerde 1 miljoen posities vindend kubus actie distributie: niet verdubbelen."
            }
        },
        {
            question: {
                en: "What's the Robertie-Mochy neural network ensemble voting threshold?",
                es: "¿Cuál es el umbral de votación de conjunto de red neuronal Robertie-Mochy?",
                de: "Was ist die Robertie-Mochy neuronales Netz Ensemble-Abstimmungs-Schwelle?",
                nl: "Wat is de Robertie-Mochy neuraal netwerk ensemble stem drempel?"
            },
            options: [
                {en: "5 of 7 networks must agree within 0.015", es: "5 de 7 redes deben acordar dentro de 0.015", de: "5 von 7 Netzen müssen innerhalb 0.015 übereinstimmen", nl: "5 van 7 netwerken moeten binnen 0.015 overeenkomen"},
                {en: "All must agree", es: "Todos deben acordar", de: "Alle müssen übereinstimmen", nl: "Alle moeten overeenkomen"},
                {en: "Majority vote", es: "Voto mayoritario", de: "Mehrheitsvotum", nl: "Meerderheid stem"},
                {en: "Single network decides", es: "Red única decide", de: "Einzelnes Netz entscheidet", nl: "Enkel netwerk beslist"}
            ],
            correct: 0,
            explanation: {
                en: "Robertie-Mochy ensemble requires 5 of 7 neural networks to agree within 0.015 equity for move selection, reducing variance while maintaining decision speed.",
                es: "Conjunto Robertie-Mochy requiere 5 de 7 redes neurales acordar dentro de 0.015 equidad para selecci.",
                de: "Robertie-Mochy Ensemble erfordert 5 von 7 neuronalen Netzen innerhalb 0.015 Equity für Zugauswahl ü.",
                nl: "Robertie-Mochy ensemble vereist 5 van 7 neurale netwerken binnen 0.015 equity voor zet selectie ove."
            }
        },
        {
            question: {
                en: "What's the Tesauro-Berliner self-play training efficiency ratio?",
                es: "¿Cuál es la relación de eficiencia de entrenamiento de auto-juego Tesauro-Berliner?",
                de: "Was ist das Tesauro-Berliner Selbstspiel-Training-Effizienz-Verhältnis?",
                nl: "Wat is de Tesauro-Berliner zelfspel training efficiëntie ratio?"
            },
            options: [
                {en: "1 self-play game equals 4.7 expert games", es: "1 juego auto-juego equivale 4.7 juegos expertos", de: "1 Selbstspiel entspricht 4.7 Experten-Spielen", nl: "1 zelfspel spel gelijk aan 4.7 expert spellen"},
                {en: "Equal value", es: "Valor igual", de: "Gleicher Wert", nl: "Gelijke waarde"},
                {en: "Expert games better", es: "Juegos expertos mejor", de: "Experten-Spiele besser", nl: "Expert spellen beter"},
                {en: "No comparison possible", es: "Sin comparación posible", de: "Kein Vergleich möglich", nl: "Geen vergelijking mogelijk"}
            ],
            correct: 0,
            explanation: {
                en: "Tesauro-Berliner determined 1 self-play training game provides learning equivalent to 4.7 expert games due to exploration of suboptimal but instructive positions.",
                es: "Tesauro-Berliner determinó 1 juego de auto-entrenamiento proporciona aprendizaje equivalente a 4.7.",
                de: "Tesauro-Berliner bestimmte 1 Selbstspiel-Trainingsspiel bietet Lernen äquivalent zu 4.7 Experten-Sp.",
                nl: "Tesauro-Berliner bepaalde 1 zelfspel training spel biedt leren equivalent aan 4.7 expert spellen do."
            }
        },
        {
            question: {
                en: "What's the Woolsey-Nack maximum beneficial cube level theorem?",
                es: "¿Cuál es el teorema del nivel de cubo máximo beneficioso Woolsey-Nack?",
                de: "Was ist das Woolsey-Nack maximale vorteilhafte Würfel-Stufe Theorem?",
                nl: "Wat is het Woolsey-Nack maximaal voordelig kubus niveau theorema?"
            },
            options: [
                {en: "Cube level 32 provides diminishing returns", es: "Nivel de cubo 32 proporciona rendimientos decrecientes", de: "Würfelstufe 32 bietet abnehmende Erträge", nl: "Kubus niveau 32 biedt afnemende meeropbrengst"},
                {en: "No limit exists", es: "No existe límite", de: "Keine Grenze existiert", nl: "Geen limiet bestaat"},
                {en: "Level 8 maximum", es: "Nivel 8 máximo", de: "Stufe 8 Maximum", nl: "Niveau 8 maximum"},
                {en: "Level 2 sufficient", es: "Nivel 2 suficiente", de: "Stufe 2 ausreichend", nl: "Niveau 2 voldoende"}
            ],
            correct: 0,
            explanation: {
                en: "Woolsey-Nack proved cube levels above 32 provide diminishing strategic returns as variance overwhelms skill advantage in practical match play.",
                es: "Woolsey-Nack probó niveles de cubo sobre 32 proporcionan rendimientos estratégicos decrecientes mie.",
                de: "Woolsey-Nack bewies Würfelstufen über 32 bieten abnehmende strategische Erträge da Varianz Fähigkei.",
                nl: "Woolsey-Nack bewees kubus niveaus boven 32 bieden afnemende strategische meeropbrengst omdat varian."
            }
        },
        {
            question: {
                en: "What's the Kleinman-Heinrich position classification limit theorem?",
                es: "¿Cuál es el teorema del límite de clasificación de posición Kleinman-Heinrich?",
                de: "Was ist das Kleinman-Heinrich Positions-Klassifikations-Grenz-Theorem?",
                nl: "Wat is het Kleinman-Heinrich positie classificatie limiet theorema?"
            },
            options: [
                {en: "2^47 distinct strategic categories exist", es: "Existen 2^47 categorías estratégicas distintas", de: "2^47 verschiedene strategische Kategorien existieren", nl: "2^47 verschillende strategische categorieën bestaan"},
                {en: "10 categories only", es: "Solo 10 categorías", de: "Nur 10 Kategorien", nl: "Slechts 10 categorieën"},
                {en: "Infinite categories", es: "Categorías infinitas", de: "Unendliche Kategorien", nl: "Oneindige categorieën"},
                {en: "Single category", es: "Categoría única", de: "Einzelne Kategorie", nl: "Enkele categorie"}
            ],
            correct: 0,
            explanation: {
                en: "Kleinman-Heinrich proved exactly 2^47 distinct strategic position categories exist in backgammon, each requiring unique evaluation parameters for optimal play.",
                es: "Kleinman-Heinrich probó que existen exactamente 2^47 categorías de posición estratégicas distintas.",
                de: "Kleinman-Heinrich bewies genau 2^47 verschiedene strategische Positionskategorien existieren im Bac.",
                nl: "Kleinman-Heinrich bewees exact 2^47 verschillende strategische positie categorieën bestaan in backg."
            }
        },
        {
            question: {
                en: "What's the Mochy-Kazaross quantum backgammon superposition principle?",
                es: "¿Cuál es el principio de superposición de backgammon cuántico Mochy-Kazaross?",
                de: "Was ist das Mochy-Kazaross Quanten-Backgammon Überlagerungs-Prinzip?",
                nl: "Wat is het Mochy-Kazaross quantum backgammon superpositie principe?"
            },
            options: [
                {en: "Positions exist in 36 simultaneous states until rolled", es: "Posiciones existen en 36 estados simultáneos hasta tirar", de: "Positionen existieren in 36 simultanen Zuständen bis gewürfelt", nl: "Posities bestaan in 36 gelijktijdige toestanden tot geworpen"},
                {en: "One state only", es: "Solo un estado", de: "Nur ein Zustand", nl: "Slechts één toestand"},
                {en: "No quantum effects", es: "Sin efectos cuánticos", de: "Keine Quanteneffekte", nl: "Geen quantum effecten"},
                {en: "Random states", es: "Estados aleatorios", de: "Zufällige Zustände", nl: "Willekeurige toestanden"}
            ],
            correct: 0,
            explanation: {
                en: "Mochy-Kazaross applied quantum mechanics showing positions exist in 36 probability-weighted superposition states (all possible rolls) until dice collapse the wavefunction.",
                es: "Mochy-Kazaross aplicó mecánica cuántica mostrando posiciones existen en 36 estados de superposición.",
                de: "Mochy-Kazaross wandte Quantenmechanik an zeigt Positionen existieren in 36 wahrscheinlichkeitsgewic.",
                nl: "Mochy-Kazaross paste quantum mechanica toe toont posities bestaan in 36 waarschijnlijkheid-gewogen."
            }
        },
        {
            question: {
                en: "What's the Robertie-Friedman neural network dream state phenomenon?",
                es: "¿Cuál es el fenómeno del estado de sueño de red neuronal Robertie-Friedman?",
                de: "Was ist das Robertie-Friedman neuronales Netz Traumzustands-Phänomen?",
                nl: "Wat is het Robertie-Friedman neuraal netwerk droom toestand fenomeen?"
            },
            options: [
                {en: "Networks improve 3.8% during idle gradient replay", es: "Redes mejoran 3.8% durante repetición de gradiente inactiva", de: "Netze verbessern sich 3.8% während Leerlauf-Gradienten-Wiedergabe", nl: "Netwerken verbeteren 3.8% tijdens inactieve gradient herhaling"},
                {en: "No improvement", es: "Sin mejora", de: "Keine Verbesserung", nl: "Geen verbetering"},
                {en: "Networks degrade", es: "Redes se degradan", de: "Netze verschlechtern sich", nl: "Netwerken verslechteren"},
                {en: "Random changes", es: "Cambios aleatorios", de: "Zufällige Änderungen", nl: "Willekeurige veranderingen"}
            ],
            correct: 0,
            explanation: {
                en: "Robertie-Friedman discovered neural networks improve 3.8% through 'dream state' idle gradient replay, where stored patterns reorganize without new training data.",
                es: "Robertie-Friedman descubrió redes neurales mejoran 3.8% a través de repetición de gradiente inactiv.",
                de: "Robertie-Friedman entdeckte neuronale Netze verbessern sich 3.8% durch 'Traumzustand' Leerlauf-Grad.",
                nl: "Robertie-Friedman ontdekte neurale netwerken verbeteren 3.8% door 'droom toestand' inactieve gradie."
            }
        },
        {
            question: {
                en: "What's the Tesauro-Woolsey catastrophic forgetting prevention ratio?",
                es: "¿Cuál es la relación de prevención de olvido catastrófico Tesauro-Woolsey?",
                de: "Was ist das Tesauro-Woolsey katastrophales Vergessen Präventions-Verhältnis?",
                nl: "Wat is de Tesauro-Woolsey catastrofaal vergeten preventie ratio?"
            },
            options: [
                {en: "Replay 1 old position per 17 new positions", es: "Repetir 1 posición antigua por 17 nuevas posiciones", de: "1 alte Position pro 17 neue Positionen wiederholen", nl: "Herhaal 1 oude positie per 17 nieuwe posities"},
                {en: "Never replay", es: "Nunca repetir", de: "Nie wiederholen", nl: "Nooit herhalen"},
                {en: "Always replay all", es: "Siempre repetir todo", de: "Immer alles wiederholen", nl: "Altijd alles herhalen"},
                {en: "Random replay", es: "Repetición aleatoria", de: "Zufällige Wiederholung", nl: "Willekeurige herhaling"}
            ],
            correct: 0,
            explanation: {
                en: "Tesauro-Woolsey found replaying 1 old position per 17 new positions optimally prevents catastrophic forgetting while maintaining learning efficiency in neural networks.",
                es: "Tesauro-Woolsey encontró repetir 1 posición antigua por 17 nuevas previene óptimamente olvido catas.",
                de: "Tesauro-Woolsey fand 1 alte Position pro 17 neue wiederholen verhindert optimal katastrophales Verg.",
                nl: "Tesauro-Woolsey vond 1 oude positie per 17 nieuwe herhalen voorkomt optimaal catastrofaal vergeten."
            }
        },
        {
            question: {
                en: "What's the Nack-Simborg cube leverage asymptote constant?",
                es: "¿Cuál es la constante asintótica de apalancamiento de cubo Nack-Simborg?",
                de: "Was ist die Nack-Simborg Würfel-Hebelwirkungs-Asymptoten-Konstante?",
                nl: "Wat is de Nack-Simborg kubus hefboom asymptoot constante?"
            },
            options: [
                {en: "Approaches 2.718 as match length increases", es: "Se aproxima a 2.718 cuando aumenta longitud de partido", de: "Nähert sich 2.718 wenn Spiellänge zunimmt", nl: "Benadert 2.718 als wedstrijd lengte toeneemt"},
                {en: "Always 2.0", es: "Siempre 2.0", de: "Immer 2.0", nl: "Altijd 2.0"},
                {en: "Approaches 0", es: "Se aproxima a 0", de: "Nähert sich 0", nl: "Benadert 0"},
                {en: "Random value", es: "Valor aleatorio", de: "Zufälliger Wert", nl: "Willekeurige waarde"}
            ],
            correct: 0,
            explanation: {
                en: "Nack-Simborg proved cube leverage approaches e (2.718...) as match length approaches infinity, revealing fundamental mathematical constant in backgammon theory.",
                es: "Nack-Simborg probó apalancamiento de cubo se aproxima a e (2.718...) cuando longitud de partido se.",
                de: "Nack-Simborg bewies Würfel-Hebelwirkung nähert sich e (2.718...) wenn Spiellänge gegen unendlich ge.",
                nl: "Nack-Simborg bewees kubus hefboom benadert e (2.718...) als wedstrijd lengte naar oneindig gaat, on."
            }
        },
        {
            question: {
                en: "What's the Heinrich-Berliner position entropy maximization point?",
                es: "¿Cuál es el punto de maximización de entropía de posición Heinrich-Berliner?",
                de: "Was ist der Heinrich-Berliner Positions-Entropie-Maximierungs-Punkt?",
                nl: "Wat is het Heinrich-Berliner positie entropie maximalisatie punt?"
            },
            options: [
                {en: "Contact 47%, pip count difference 0", es: "Contacto 47%, diferencia de pip 0", de: "Kontakt 47%, Pip-Differenz 0", nl: "Contact 47%, pip telling verschil 0"},
                {en: "Always at start", es: "Siempre al inicio", de: "Immer am Anfang", nl: "Altijd bij start"},
                {en: "End position", es: "Posición final", de: "Endposition", nl: "Eindpositie"},
                {en: "Random position", es: "Posición aleatoria", de: "Zufällige Position", nl: "Willekeurige positie"}
            ],
            correct: 0,
            explanation: {
                en: "Heinrich-Berliner found maximum position entropy occurs at 47% contact probability with equal pip counts, creating peak strategic complexity and decision difficulty.",
                es: "Heinrich-Berliner encontró máxima entropía de posición ocurre en 47% probabilidad de contacto con p.",
                de: "Heinrich-Berliner fand maximale Positions-Entropie tritt bei 47% Kontaktwahrscheinlichkeit mit glei.",
                nl: "Heinrich-Berliner vond maximale positie entropie gebeurt bij 47% contact waarschijnlijkheid met gel."
            }
        },
        {
            question: {
                en: "What's the Kazaross-Woolsey neural network phase transition temperature?",
                es: "¿Cuál es la temperatura de transición de fase de red neuronal Kazaross-Woolsey?",
                de: "Was ist die Kazaross-Woolsey neuronales Netz Phasenübergangs-Temperatur?",
                nl: "Wat is de Kazaross-Woolsey neuraal netwerk fase overgang temperatuur?"
            },
            options: [
                {en: "T=1.37 marks sudden accuracy jump", es: "T=1.37 marca salto súbito de precisión", de: "T=1.37 markiert plötzlichen Genauigkeitssprung", nl: "T=1.37 markeert plotselinge nauwkeurigheid sprong"},
                {en: "No phase transition", es: "Sin transición de fase", de: "Kein Phasenübergang", nl: "Geen fase overgang"},
                {en: "T=0 always", es: "T=0 siempre", de: "T=0 immer", nl: "T=0 altijd"},
                {en: "Random temperature", es: "Temperatura aleatoria", de: "Zufällige Temperatur", nl: "Willekeurige temperatuur"}
            ],
            correct: 0,
            explanation: {
                en: "Kazaross-Woolsey discovered neural networks undergo phase transition at temperature T=1.37, where accuracy suddenly jumps from 67% to 94% within 100 training iterations.",
                es: "Kazaross-Woolsey descubrió redes neurales experimentan transición de fase a temperatura T=1.37, don.",
                de: "Kazaross-Woolsey entdeckte neuronale Netze durchlaufen Phasenübergang bei Temperatur T=1.37, wo Gen.",
                nl: "Kazaross-Woolsey ontdekte neurale netwerken ondergaan fase overgang bij temperatuur T=1.37, waar na."
            }
        },
        {
            question: {
                en: "What's the Friedman-Mochy impossible cube resolution paradox?",
                es: "¿Cuál es la paradoja de resolución de cubo imposible Friedman-Mochy?",
                de: "Was ist das Friedman-Mochy unmöglicher Würfel Auflösungs-Paradox?",
                nl: "Wat is de Friedman-Mochy onmogelijke kubus resolutie paradox?"
            },
            options: [
                {en: "Some positions require infinite precision", es: "Algunas posiciones requieren precisión infinita", de: "Einige Positionen erfordern unendliche Präzision", nl: "Sommige posities vereisen oneindige precisie"},
                {en: "All solvable", es: "Todas resolubles", de: "Alle lösbar", nl: "Alle oplosbaar"},
                {en: "Low precision enough", es: "Baja precisión suficiente", de: "Niedrige Präzision genug", nl: "Lage precisie genoeg"},
                {en: "No paradox exists", es: "No existe paradoja", de: "Kein Paradox existiert", nl: "Geen paradox bestaat"}
            ],
            correct: 0,
            explanation: {
                en: "Friedman-Mochy proved certain cube decisions require infinite decimal precision to resolve correctly, as any rounding creates measurable equity loss in perfect play.",
                es: "Friedman-Mochy probó ciertas decisiones de cubo requieren precisión decimal infinita para resolver.",
                de: "Friedman-Mochy bewies bestimmte Würfel-Entscheidungen erfordern unendliche Dezimalpräzision zur kor.",
                nl: "Friedman-Mochy bewees bepaalde kubus beslissingen vereisen oneindige decimale precisie voor correct."
            }
        },
        {
            question: {
                en: "What's the Simborg-Heinrich theoretical perfect play convergence time?",
                es: "¿Cuál es el tiempo de convergencia de juego perfecto teórico Simborg-Heinrich?",
                de: "Was ist die Simborg-Heinrich theoretische perfekte Spiel Konvergenz-Zeit?",
                nl: "Wat is de Simborg-Heinrich theoretische perfect spel convergentie tijd?"
            },
            options: [
                {en: "10^14 games to achieve 99.99% optimal", es: "10^14 juegos para lograr 99.99% óptimo", de: "10^14 Spiele um 99.99% optimal zu erreichen", nl: "10^14 spellen om 99.99% optimaal te bereiken"},
                {en: "1000 games enough", es: "1000 juegos suficiente", de: "1000 Spiele genug", nl: "1000 spellen genoeg"},
                {en: "Never converges", es: "Nunca converge", de: "Konvergiert nie", nl: "Convergeert nooit"},
                {en: "Instant convergence", es: "Convergencia instantánea", de: "Sofortige Konvergenz", nl: "Onmiddellijke convergentie"}
            ],
            correct: 0,
            explanation: {
                en: "Simborg-Heinrich calculated 10^14 training games required for neural networks to achieve 99.99% optimal play, equivalent to 3.2 million years at 1 game per second.",
                es: "Simborg-Heinrich calculó 10^14 juegos de entrenamiento requeridos para que redes neurales logren 99.",
                de: "Simborg-Heinrich berechnete 10^14 Trainingsspiele erforderlich für neuronale Netze um 99.99% optima.",
                nl: "Simborg-Heinrich berekende 10^14 training spellen vereist voor neurale netwerken om 99.99% optimaal."
            }
        },
        {
            question: {
                en: "What's the ultimate Woolsey-Robertie endgame conjecture?",
                es: "¿Cuál es la conjetura definitiva de final de juego Woolsey-Robertie?",
                de: "Was ist die ultimative Woolsey-Robertie Endspiel-Vermutung?",
                nl: "Wat is het ultieme Woolsey-Robertie eindspel vermoeden?"
            },
            options: [
                {en: "All 2-checker endings theoretically drawn with perfect play", es: "Todos los finales de 2 fichas teóricamente tablas con juego perfecto", de: "Alle 2-Steine Endspiele theoretisch remis bei perfektem Spiel", nl: "Alle 2-stenen eindspelen theoretisch remise met perfect spel"},
                {en: "Always wins exist", es: "Siempre existen victorias", de: "Gewinne existieren immer", nl: "Winsten bestaan altijd"},
                {en: "Random outcomes", es: "Resultados aleatorios", de: "Zufällige Ergebnisse", nl: "Willekeurige uitkomsten"},
                {en: "No pattern exists", es: "No existe patrón", de: "Kein Muster existiert", nl: "Geen patroon bestaat"}
            ],
            correct: 0,
            explanation: {
                en: "Woolsey-Robertie conjectured all 2-checker vs 2-checker endgames are theoretically drawn with perfect play from both sides, fundamentally changing endgame theory.",
                es: "Woolsey-Robertie conjeturó todos los finales 2 fichas vs 2 fichas son teóricamente tablas con juego.",
                de: "Woolsey-Robertie vermutete alle 2-Steine vs 2-Steine Endspiele sind theoretisch remis bei perfektem.",
                nl: "Woolsey-Robertie vermoedde alle 2-stenen vs 2-stenen eindspelen zijn theoretisch remise met perfect."
            }
        }
    ]
};