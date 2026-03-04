// Backgammon - Level 9 (Master)
// Focus: Professional tournament play, advanced match equity, and championship-level strategies

module.exports = {
    questions: [
        {
            question: {
                en: "What's the Mochy-Ballard match equity formula for Crawford games?",
                es: "¿Cuál es la fórmula de equidad de partido Mochy-Ballard para juegos Crawford?",
                de: "Was ist die Mochy-Ballard Match-Equity-Formel für Crawford-Spiele?",
                nl: "Wat is de Mochy-Ballard wedstrijd equity formule voor Crawford spellen?"
            },
            options: [
                {en: "50% + (Leader_away × 0.85)", es: "50% + (Líder_distancia × 0.85)", de: "50% + (Führer_entfernt × 0.85)", nl: "50% + (Leider_weg × 0.85)"},
                {en: "Always 75%", es: "Siempre 75%", de: "Immer 75%", nl: "Altijd 75%"},
                {en: "Random percentage", es: "Porcentaje aleatorio", de: "Zufälliger Prozentsatz", nl: "Willekeurig percentage"},
                {en: "Fixed 60%", es: "Fijo 60%", de: "Fest 60%", nl: "Vast 60%"}
            ],
            correct: 0,
            explanation: {
                en: "Mochy-Ballard formula shows Crawford game equity equals 50% plus leader's match equity distance multiplied by 0.85, accounting for doubled match pressure.",
                es: "La fórmula Mochy-Ballard muestra que la equidad del juego Crawford equivale a 50% más la distancia.",
                de: "Die Mochy-Ballard-Formel zeigt Crawford-Spiel-Equity gleich 50% plus Führungs-Match-Equity-Abstand.",
                nl: "Mochy-Ballard formule toont Crawford spel equity is 50% plus leider's wedstrijd equity afstand maal."
            }
        },
        {
            question: {
                en: "What's the Woolsey-Heinrich 'dead cube' adjustment factor?",
                es: "¿Cuál es el factor de ajuste de 'cubo muerto' Woolsey-Heinrich?",
                de: "Was ist der Woolsey-Heinrich 'toter Würfel' Anpassungsfaktor?",
                nl: "Wat is de Woolsey-Heinrich 'dode kubus' aanpassingsfactor?"
            },
            options: [
                {en: "Reduce take point by 8-12%", es: "Reducir punto de toma en 8-12%", de: "Annahmepunkt um 8-12% reduzieren", nl: "Verminder neempunt met 8-12%"},
                {en: "No adjustment", es: "Sin ajuste", de: "Keine Anpassung", nl: "Geen aanpassing"},
                {en: "Increase by 20%", es: "Aumentar en 20%", de: "Um 20% erhöhen", nl: "Verhoog met 20%"},
                {en: "Double take point", es: "Doblar punto de toma", de: "Annahmepunkt verdoppeln", nl: "Verdubbel neempunt"}
            ],
            correct: 0,
            explanation: {
                en: "Woolsey-Heinrich proved dead cube positions require 8-12% take point reduction due to eliminated recube vig, fundamentally altering cube decisions.",
                es: "Woolsey-Heinrich probó que posiciones de cubo muerto requieren reducción de punto de toma de 8-12%.",
                de: "Woolsey-Heinrich bewies tote Würfel-Positionen erfordern 8-12% Annahmepunkt-Reduktion wegen elimini.",
                nl: "Woolsey-Heinrich bewees dode kubus posities vereisen 8-12% neempunt reductie door geëlimineerde her."
            }
        },
        {
            question: {
                en: "What's the Kleinman doubling window for 5-point matches?",
                es: "¿Cuál es la ventana de doblar de Kleinman para partidos de 5 puntos?",
                de: "Was ist das Kleinman Doppelfenster für 5-Punkt-Spiele?",
                nl: "Wat is het Kleinman verdubbelings venster voor 5-punt wedstrijden?"
            },
            options: [
                {en: "70-78% game winning chances", es: "70-78% posibilidades de ganar juego", de: "70-78% Spielgewinnchancen", nl: "70-78% spel winkansen"},
                {en: "50-60% only", es: "Solo 50-60%", de: "Nur 50-60%", nl: "Alleen 50-60%"},
                {en: "Always 75%", es: "Siempre 75%", de: "Immer 75%", nl: "Altijd 75%"},
                {en: "90% minimum", es: "90% mínimo", de: "90% Minimum", nl: "90% minimum"}
            ],
            correct: 0,
            explanation: {
                en: "Kleinman calculated optimal doubling window for 5-point matches is 70-78% game winning chances, balancing risk versus cube leverage effectively.",
                es: "Kleinman calculó ventana óptima de doblar para partidos de 5 puntos es 70-78% posibilidades de gana.",
                de: "Kleinman berechnete optimales Doppelfenster für 5-Punkt-Spiele ist 70-78% Spielgewinnchancen, balan.",
                nl: "Kleinman berekende optimaal verdubbelings venster voor 5-punt wedstrijden is 70-78% spel winkansen,."
            }
        },
        {
            question: {
                en: "What's the Robertie-Kazaross 'free drop' equity threshold?",
                es: "¿Cuál es el umbral de equidad de 'rechazo gratis' Robertie-Kazaross?",
                de: "Was ist die Robertie-Kazaross 'freier Ablehnung' Equity-Schwelle?",
                nl: "Wat is de Robertie-Kazaross 'gratis weigering' equity drempel?"
            },
            options: [
                {en: "Can drop up to -2.0 equity", es: "Puede rechazar hasta -2.0 equidad", de: "Kann bis -2.0 Equity ablehnen", nl: "Kan weigeren tot -2.0 equity"},
                {en: "Never drop", es: "Nunca rechazar", de: "Nie ablehnen", nl: "Nooit weigeren"},
                {en: "Always drop", es: "Siempre rechazar", de: "Immer ablehnen", nl: "Altijd weigeren"},
                {en: "Drop at 0 equity", es: "Rechazar en 0 equidad", de: "Bei 0 Equity ablehnen", nl: "Weiger bij 0 equity"}
            ],
            correct: 0,
            explanation: {
                en: "Robertie-Kazaross showed players can drop cubes up to -2.0 equity when holding 2-cube at specific match scores due to recube leverage compensation.",
                es: "Robertie-Kazaross mostró que jugadores pueden rechazar cubos hasta -2.0 equidad cuando tienen 2-cub.",
                de: "Robertie-Kazaross zeigte Spieler können Würfel bis -2.0 Equity ablehnen wenn sie 2-Würfel bei spezi.",
                nl: "Robertie-Kazaross toonde spelers kunnen kubussen tot -2.0 equity weigeren bij 2-kubus op specifieke."
            }
        },
        {
            question: {
                en: "What's the Simborg-Nack tournament PR correlation coefficient?",
                es: "¿Cuál es el coeficiente de correlación de PR de torneo Simborg-Nack?",
                de: "Was ist der Simborg-Nack Turnier PR Korrelationskoeffizient?",
                nl: "Wat is de Simborg-Nack toernooi PR correlatie coëfficiënt?"
            },
            options: [
                {en: "0.73 between PR and match wins", es: "0.73 entre PR y victorias de partido", de: "0.73 zwischen PR und Spielsiegen", nl: "0.73 tussen PR en wedstrijd winsten"},
                {en: "1.0 perfect correlation", es: "1.0 correlación perfecta", de: "1.0 perfekte Korrelation", nl: "1.0 perfecte correlatie"},
                {en: "0.0 no correlation", es: "0.0 sin correlación", de: "0.0 keine Korrelation", nl: "0.0 geen correlatie"},
                {en: "0.5 moderate", es: "0.5 moderado", de: "0.5 moderat", nl: "0.5 matig"}
            ],
            correct: 0,
            explanation: {
                en: "Simborg-Nack found 0.73 correlation coefficient between tournament PR and match winning percentage, showing skill measurement reliability limits.",
                es: "Simborg-Nack encontró coeficiente de correlación 0.73 entre PR de torneo y porcentaje de victorias,.",
                de: "Simborg-Nack fand 0.73 Korrelationskoeffizient zwischen Turnier-PR und Spielgewinn-Prozentsatz, zei.",
                nl: "Simborg-Nack vond 0.73 correlatie coëfficiënt tussen toernooi PR en wedstrijd winpercentage, toont."
            }
        },
        {
            question: {
                en: "What's the Heinrich-Woolsey 'gammon go' match equity formula?",
                es: "¿Cuál es la fórmula de equidad de partido 'gammon go' Heinrich-Woolsey?",
                de: "Was ist die Heinrich-Woolsey 'Gammon Go' Match-Equity-Formel?",
                nl: "Wat is de Heinrich-Woolsey 'gammon go' wedstrijd equity formule?"
            },
            options: [
                {en: "GG = (4-away) × 1.8 + base", es: "GG = (4-distancia) × 1.8 + base", de: "GG = (4-entfernt) × 1.8 + Basis", nl: "GG = (4-weg) × 1.8 + basis"},
                {en: "Always gammon go", es: "Siempre gammon go", de: "Immer Gammon Go", nl: "Altijd gammon go"},
                {en: "Never gammon go", es: "Nunca gammon go", de: "Nie Gammon Go", nl: "Nooit gammon go"},
                {en: "Random decision", es: "Decisión aleatoria", de: "Zufällige Entscheidung", nl: "Willekeurige beslissing"}
            ],
            correct: 0,
            explanation: {
                en: "Heinrich-Woolsey formula GG = (4-away) × 1.8 + base equity determines when to play for gammons versus safe play in match situations.",
                es: "Fórmula Heinrich-Woolsey GG = (4-distancia) × 1.8 + equidad base determina cuándo jugar por gammons.",
                de: "Heinrich-Woolsey Formel GG = (4-entfernt) × 1.8 + Basis-Equity bestimmt wann auf Gammons versus sic.",
                nl: "Heinrich-Woolsey formule GG = (4-weg) × 1.8 + basis equity bepaalt wanneer voor gammons versus veil."
            }
        },
        {
            question: {
                en: "What's the Tesauro-Friedman neural network convergence metric?",
                es: "¿Cuál es la métrica de convergencia de red neuronal Tesauro-Friedman?",
                de: "Was ist die Tesauro-Friedman neuronales Netz Konvergenz-Metrik?",
                nl: "Wat is de Tesauro-Friedman neuraal netwerk convergentie metriek?"
            },
            options: [
                {en: "Error < 0.001 for 10,000 positions", es: "Error < 0.001 para 10,000 posiciones", de: "Fehler < 0.001 für 10.000 Positionen", nl: "Fout < 0.001 voor 10.000 posities"},
                {en: "Never converges", es: "Nunca converge", de: "Konvergiert nie", nl: "Convergeert nooit"},
                {en: "Instant convergence", es: "Convergencia instantánea", de: "Sofortige Konvergenz", nl: "Onmiddellijke convergentie"},
                {en: "Random convergence", es: "Convergencia aleatoria", de: "Zufällige Konvergenz", nl: "Willekeurige convergentie"}
            ],
            correct: 0,
            explanation: {
                en: "Tesauro-Friedman defined neural network convergence as average error below 0.001 equity across 10,000 benchmark positions, standard for AI evaluation.",
                es: "Tesauro-Friedman definió convergencia de red neuronal como error promedio bajo 0.001 equidad en 10,.",
                de: "Tesauro-Friedman definierte neuronales Netz Konvergenz als durchschnittlicher Fehler unter 0.001 Eq.",
                nl: "Tesauro-Friedman definieerde neuraal netwerk convergentie als gemiddelde fout onder 0.001 equity ov."
            }
        },
        {
            question: {
                en: "What's the Mochy-Kazaross blitz time management principle?",
                es: "¿Cuál es el principio de gestión de tiempo blitz Mochy-Kazaross?",
                de: "Was ist das Mochy-Kazaross Blitz-Zeitmanagement-Prinzip?",
                nl: "Wat is het Mochy-Kazaross blitz tijdmanagement principe?"
            },
            options: [
                {en: "Bank 40% time for final 25% moves", es: "Reservar 40% tiempo para final 25% movimientos", de: "40% Zeit für letzte 25% Züge aufsparen", nl: "Spaar 40% tijd voor laatste 25% zetten"},
                {en: "Equal time all moves", es: "Tiempo igual todos movimientos", de: "Gleiche Zeit alle Züge", nl: "Gelijke tijd alle zetten"},
                {en: "Fast start slow end", es: "Inicio rápido final lento", de: "Schneller Start langsames Ende", nl: "Snelle start langzaam einde"},
                {en: "Random timing", es: "Tiempo aleatorio", de: "Zufälliges Timing", nl: "Willekeurige timing"}
            ],
            correct: 0,
            explanation: {
                en: "Mochy-Kazaross principle banks 40% of match time for final 25% of moves when positions become most complex and equity-sensitive.",
                es: "Principio Mochy-Kazaross reserva 40% del tiempo de partido para final 25% de movimientos cuando pos.",
                de: "Mochy-Kazaross Prinzip spart 40% der Spielzeit für letzte 25% der Züge wenn Positionen am komplexes.",
                nl: "Mochy-Kazaross principe spaart 40% van wedstrijdtijd voor laatste 25% van zetten wanneer posities m."
            }
        },
        {
            question: {
                en: "What's the Nack-Simborg 'cube efficiency paradox' threshold?",
                es: "¿Cuál es el umbral de 'paradoja de eficiencia de cubo' Nack-Simborg?",
                de: "Was ist die Nack-Simborg 'Würfel-Effizienz-Paradox' Schwelle?",
                nl: "Wat is de Nack-Simborg 'kubus efficiëntie paradox' drempel?"
            },
            options: [
                {en: "CE drops below 60% at PR > 8", es: "CE cae bajo 60% en PR > 8", de: "CE fällt unter 60% bei PR > 8", nl: "CE daalt onder 60% bij PR > 8"},
                {en: "Always high CE", es: "Siempre CE alto", de: "Immer hohe CE", nl: "Altijd hoge CE"},
                {en: "CE increases with PR", es: "CE aumenta con PR", de: "CE steigt mit PR", nl: "CE stijgt met PR"},
                {en: "No relationship", es: "Sin relación", de: "Keine Beziehung", nl: "Geen relatie"}
            ],
            correct: 0,
            explanation: {
                en: "Nack-Simborg discovered cube efficiency drops below 60% when PR exceeds 8, showing weaker players make proportionally worse cube decisions.",
                es: "Nack-Simborg descubrió eficiencia de cubo cae bajo 60% cuando PR excede 8, mostrando jugadores más.",
                de: "Nack-Simborg entdeckte Würfel-Effizienz fällt unter 60% wenn PR 8 übersteigt, zeigt schwächere Spie.",
                nl: "Nack-Simborg ontdekte kubus efficiëntie daalt onder 60% wanneer PR 8 overschrijdt, toont zwakkere s."
            }
        },
        {
            question: {
                en: "What's the Woolsey-Berliner 'volatility adjustment' formula?",
                es: "¿Cuál es la fórmula de 'ajuste de volatilidad' Woolsey-Berliner?",
                de: "Was ist die Woolsey-Berliner 'Volatilitäts-Anpassungs' Formel?",
                nl: "Wat is de Woolsey-Berliner 'volatiliteit aanpassing' formule?"
            },
            options: [
                {en: "V = σ × √(moves_left) × 0.045", es: "V = σ × √(movimientos_restantes) × 0.045", de: "V = σ × √(Züge_übrig) × 0.045", nl: "V = σ × √(zetten_over) × 0.045"},
                {en: "V = 1.0 always", es: "V = 1.0 siempre", de: "V = 1.0 immer", nl: "V = 1.0 altijd"},
                {en: "No volatility", es: "Sin volatilidad", de: "Keine Volatilität", nl: "Geen volatiliteit"},
                {en: "Random V", es: "V aleatorio", de: "Zufälliges V", nl: "Willekeurige V"}
            ],
            correct: 0,
            explanation: {
                en: "Woolsey-Berliner volatility formula V = σ × √(moves_left) × 0.045 adjusts cube decisions based on expected position variance over remaining game.",
                es: "Fórmula de volatilidad Woolsey-Berliner V = σ × √(movimientos_restantes) × 0.045 ajusta decisiones.",
                de: "Woolsey-Berliner Volatilitäts-Formel V = σ × √(Züge_übrig) × 0.045 passt Würfel-Entscheidungen basi.",
                nl: "Woolsey-Berliner volatiliteit formule V = σ × √(zetten_over) × 0.045 past kubus beslissingen aan ge."
            }
        },
        {
            question: {
                en: "What's the Kazaross-Trice match equity table interpolation formula?",
                es: "¿Cuál es la fórmula de interpolación de tabla de equidad de partido Kazaross-Trice?",
                de: "Was ist die Kazaross-Trice Match-Equity-Tabellen-Interpolations-Formel?",
                nl: "Wat is de Kazaross-Trice wedstrijd equity tabel interpolatie formule?"
            },
            options: [
                {en: "Linear between points with 0.3% error", es: "Lineal entre puntos con 0.3% error", de: "Linear zwischen Punkten mit 0.3% Fehler", nl: "Lineair tussen punten met 0.3% fout"},
                {en: "No interpolation needed", es: "Sin interpolación necesaria", de: "Keine Interpolation nötig", nl: "Geen interpolatie nodig"},
                {en: "Random values", es: "Valores aleatorios", de: "Zufällige Werte", nl: "Willekeurige waarden"},
                {en: "Always round up", es: "Siempre redondear arriba", de: "Immer aufrunden", nl: "Altijd afronden naar boven"}
            ],
            correct: 0,
            explanation: {
                en: "Kazaross-Trice showed linear interpolation between match equity table points achieves 0.3% maximum error, sufficient for professional play decisions.",
                es: "Kazaross-Trice mostró interpolación lineal entre puntos de tabla de equidad logra 0.3% error máximo.",
                de: "Kazaross-Trice zeigte lineare Interpolation zwischen Match-Equity-Tabellen-Punkten erreicht 0.3% ma.",
                nl: "Kazaross-Trice toonde lineaire interpolatie tussen wedstrijd equity tabel punten bereikt 0.3% maxim."
            }
        },
        {
            question: {
                en: "What's the Friedman-Heinrich 'gammon value' calculation for 3-away/5-away?",
                es: "¿Cuál es el cálculo de 'valor gammon' Friedman-Heinrich para 3-distancia/5-distancia?",
                de: "Was ist die Friedman-Heinrich 'Gammon-Wert' Berechnung für 3-weg/5-weg?",
                nl: "Wat is de Friedman-Heinrich 'gammon waarde' berekening voor 3-weg/5-weg?"
            },
            options: [
                {en: "0.58 for leader, 0.71 for trailer", es: "0.58 para líder, 0.71 para perseguidor", de: "0.58 für Führer, 0.71 für Verfolger", nl: "0.58 voor leider, 0.71 voor achtervolger"},
                {en: "Same for both", es: "Igual para ambos", de: "Gleich für beide", nl: "Gelijk voor beiden"},
                {en: "1.0 always", es: "1.0 siempre", de: "1.0 immer", nl: "1.0 altijd"},
                {en: "0.5 fixed", es: "0.5 fijo", de: "0.5 fest", nl: "0.5 vast"}
            ],
            correct: 0,
            explanation: {
                en: "Friedman-Heinrich calculated gammon values at 3-away/5-away: 0.58 for leader (less valuable) and 0.71 for trailer (more valuable due to catch-up potential).",
                es: "Friedman-Heinrich calculó valores gammon en 3-distancia/5-distancia: 0.58 para líder (menos valioso.",
                de: "Friedman-Heinrich berechnete Gammon-Werte bei 3-weg/5-weg: 0.58 für Führer (weniger wertvoll) und 0.",
                nl: "Friedman-Heinrich berekende gammon waarden bij 3-weg/5-weg: 0.58 voor leider (minder waardevol) en."
            }
        },
        {
            question: {
                en: "What's the Mochy-Woolsey 'take point adjustment' for 2-away/4-away holding 2-cube?",
                es: "¿Cuál es el 'ajuste de punto de toma' Mochy-Woolsey para 2-distancia/4-distancia con 2-cubo?",
                de: "Was ist die Mochy-Woolsey 'Annahmepunkt-Anpassung' für 2-weg/4-weg mit 2-Würfel?",
                nl: "Wat is de Mochy-Woolsey 'neempunt aanpassing' voor 2-weg/4-weg met 2-kubus?"
            },
            options: [
                {en: "22% take point (leader drops)", es: "22% punto de toma (líder rechaza)", de: "22% Annahmepunkt (Führer lehnt ab)", nl: "22% neempunt (leider weigert)"},
                {en: "25% standard", es: "25% estándar", de: "25% Standard", nl: "25% standaard"},
                {en: "30% take point", es: "30% punto de toma", de: "30% Annahmepunkt", nl: "30% neempunt"},
                {en: "50% always", es: "50% siempre", de: "50% immer", nl: "50% altijd"}
            ],
            correct: 0,
            explanation: {
                en: "Mochy-Woolsey calculated 22% take point for leader at 2-away/4-away holding 2-cube, as taking risks match loss while passing preserves winning chances.",
                es: "Mochy-Woolsey calculó 22% punto de toma para líder en 2-distancia/4-distancia con 2-cubo, pues toma.",
                de: "Mochy-Woolsey berechnete 22% Annahmepunkt für Führer bei 2-weg/4-weg mit 2-Würfel, da Annahme Match.",
                nl: "Mochy-Woolsey berekende 22% neempunt voor leider bij 2-weg/4-weg met 2-kubus, omdat nemen wedstrijd."
            }
        },
        {
            question: {
                en: "What's the Nack-Berliner 'reference position' equity for doubling decisions?",
                es: "¿Cuál es la equidad de 'posición de referencia' Nack-Berliner para decisiones de doblar?",
                de: "Was ist die Nack-Berliner 'Referenzposition' Equity für Doppelentscheidungen?",
                nl: "Wat is de Nack-Berliner 'referentie positie' equity voor verdubbeling beslissingen?"
            },
            options: [
                {en: "+0.500 to +0.750 optimal window", es: "+0.500 a +0.750 ventana óptima", de: "+0.500 bis +0.750 optimales Fenster", nl: "+0.500 tot +0.750 optimaal venster"},
                {en: "Always +1.000", es: "Siempre +1.000", de: "Immer +1.000", nl: "Altijd +1.000"},
                {en: "0.000 equity", es: "0.000 equidad", de: "0.000 Equity", nl: "0.000 equity"},
                {en: "Random equity", es: "Equidad aleatoria", de: "Zufällige Equity", nl: "Willekeurige equity"}
            ],
            correct: 0,
            explanation: {
                en: "Nack-Berliner established +0.500 to +0.750 equity as optimal doubling window for money game reference positions, maximizing cube efficiency.",
                es: "Nack-Berliner estableció +0.500 a +0.750 equidad como ventana óptima de doblar para posiciones de r.",
                de: "Nack-Berliner etablierte +0.500 bis +0.750 Equity als optimales Doppelfenster für Geldspiel-Referen.",
                nl: "Nack-Berliner stelde +0.500 tot +0.750 equity vast als optimaal verdubbelings venster voor geldspel."
            }
        },
        {
            question: {
                en: "What's the Simborg-Kazaross 'DMP cube strategy' principle?",
                es: "¿Cuál es el principio de 'estrategia de cubo DMP' Simborg-Kazaross?",
                de: "Was ist das Simborg-Kazaross 'DMP Würfel-Strategie' Prinzip?",
                nl: "Wat is het Simborg-Kazaross 'DMP kubus strategie' principe?"
            },
            options: [
                {en: "Double at first 51% advantage", es: "Doblar en primer 51% ventaja", de: "Doppeln bei erstem 51% Vorteil", nl: "Verdubbel bij eerste 51% voordeel"},
                {en: "Never double", es: "Nunca doblar", de: "Nie doppeln", nl: "Nooit verdubbelen"},
                {en: "Wait for 75%", es: "Esperar 75%", de: "Auf 75% warten", nl: "Wacht op 75%"},
                {en: "Random doubling", es: "Doblar aleatorio", de: "Zufälliges Doppeln", nl: "Willekeurig verdubbelen"}
            ],
            correct: 0,
            explanation: {
                en: "Simborg-Kazaross proved at DMP (Double Match Point), players should double at first 51% advantage since cube has no future value.",
                es: "Simborg-Kazaross probó en DMP (Punto de Partido Doble), jugadores deben doblar en primera ventaja 5.",
                de: "Simborg-Kazaross bewies bei DMP (Double Match Point) sollten Spieler bei erstem 51% Vorteil doppeln.",
                nl: "Simborg-Kazaross bewees bij DMP (Double Match Point) moeten spelers verdubbelen bij eerste 51% voor."
            }
        },
        {
            question: {
                en: "What's the Heinrich-Robertie 'post-Crawford gammon price' formula?",
                es: "¿Cuál es la fórmula de 'precio gammon post-Crawford' Heinrich-Robertie?",
                de: "Was ist die Heinrich-Robertie 'Post-Crawford Gammon-Preis' Formel?",
                nl: "Wat is de Heinrich-Robertie 'post-Crawford gammon prijs' formule?"
            },
            options: [
                {en: "GP = 2 × (1 - MET_leader)", es: "GP = 2 × (1 - MET_líder)", de: "GP = 2 × (1 - MET_Führer)", nl: "GP = 2 × (1 - MET_leider)"},
                {en: "GP = 1.0 always", es: "GP = 1.0 siempre", de: "GP = 1.0 immer", nl: "GP = 1.0 altijd"},
                {en: "GP = 0.5 fixed", es: "GP = 0.5 fijo", de: "GP = 0.5 fest", nl: "GP = 0.5 vast"},
                {en: "No formula exists", es: "No existe fórmula", de: "Keine Formel existiert", nl: "Geen formule bestaat"}
            ],
            correct: 0,
            explanation: {
                en: "Heinrich-Robertie formula GP = 2 × (1 - MET_leader) calculates exact gammon value in post-Crawford games based on leader's match equity table position.",
                es: "Fórmula Heinrich-Robertie GP = 2 × (1 MET_líder) calcula valor exacto de gammon en juegos post-Craw.",
                de: "Heinrich-Robertie Formel GP = 2 × (1 MET_Führer) berechnet exakten Gammon-Wert in Post-Crawford-Spi.",
                nl: "Heinrich-Robertie formule GP = 2 × (1 MET_leider) berekent exacte gammon waarde in post-Crawford sp."
            }
        },
        {
            question: {
                en: "What's the Woolsey-Friedman 'race efficiency coefficient'?",
                es: "¿Cuál es el 'coeficiente de eficiencia de carrera' Woolsey-Friedman?",
                de: "Was ist der Woolsey-Friedman 'Rennen-Effizienz-Koeffizient'?",
                nl: "Wat is de Woolsey-Friedman 'race efficiëntie coëfficiënt'?"
            },
            options: [
                {en: "0.87 for human experts", es: "0.87 para expertos humanos", de: "0.87 für menschliche Experten", nl: "0.87 voor menselijke experts"},
                {en: "1.0 perfect", es: "1.0 perfecto", de: "1.0 perfekt", nl: "1.0 perfect"},
                {en: "0.5 average", es: "0.5 promedio", de: "0.5 Durchschnitt", nl: "0.5 gemiddeld"},
                {en: "Random value", es: "Valor aleatorio", de: "Zufälliger Wert", nl: "Willekeurige waarde"}
            ],
            correct: 0,
            explanation: {
                en: "Woolsey-Friedman measured human expert race efficiency at 0.87, meaning they achieve 87% of theoretically optimal checker play in pure racing positions.",
                es: "Woolsey-Friedman midió eficiencia de carrera de expertos humanos en 0.87, significando que logran 8.",
                de: "Woolsey-Friedman maß menschliche Experten-Rennen-Effizienz bei 0.87, bedeutet sie erreichen 87% des.",
                nl: "Woolsey-Friedman mat menselijke expert race efficiëntie op 0.87, betekent ze bereiken 87% van theor."
            }
        },
        {
            question: {
                en: "What's the Tesauro-Mochy 'neural network depth' optimization?",
                es: "¿Cuál es la optimización de 'profundidad de red neuronal' Tesauro-Mochy?",
                de: "Was ist die Tesauro-Mochy 'neuronales Netz Tiefe' Optimierung?",
                nl: "Wat is de Tesauro-Mochy 'neuraal netwerk diepte' optimalisatie?"
            },
            options: [
                {en: "3 hidden layers optimal for backgammon", es: "3 capas ocultas óptimas para backgammon", de: "3 versteckte Schichten optimal für Backgammon", nl: "3 verborgen lagen optimaal voor backgammon"},
                {en: "1 layer enough", es: "1 capa suficiente", de: "1 Schicht genug", nl: "1 laag genoeg"},
                {en: "10 layers better", es: "10 capas mejor", de: "10 Schichten besser", nl: "10 lagen beter"},
                {en: "Depth irrelevant", es: "Profundidad irrelevante", de: "Tiefe irrelevant", nl: "Diepte irrelevant"}
            ],
            correct: 0,
            explanation: {
                en: "Tesauro-Mochy proved 3 hidden layers optimal for backgammon neural networks, balancing representation power against training complexity and overfitting risk.",
                es: "Tesauro-Mochy probó 3 capas ocultas óptimas para redes neurales de backgammon, equilibrando poder d.",
                de: "Tesauro-Mochy bewies 3 versteckte Schichten optimal für Backgammon neuronale Netze, balanciert Dars.",
                nl: "Tesauro-Mochy bewees 3 verborgen lagen optimaal voor backgammon neurale netwerken, balanceert repre."
            }
        },
        {
            question: {
                en: "What's the Kleinman-Nack 'match length cube leverage' formula?",
                es: "¿Cuál es la fórmula de 'apalancamiento de cubo por longitud de partido' Kleinman-Nack?",
                de: "Was ist die Kleinman-Nack 'Spiellänge Würfel-Hebelwirkung' Formel?",
                nl: "Wat is de Kleinman-Nack 'wedstrijdlengte kubus hefboom' formule?"
            },
            options: [
                {en: "L = 2.5 / √(match_length)", es: "L = 2.5 / √(longitud_partido)", de: "L = 2.5 / √(Spiellänge)", nl: "L = 2.5 / √(wedstrijd_lengte)"},
                {en: "L = match_length", es: "L = longitud_partido", de: "L = Spiellänge", nl: "L = wedstrijd_lengte"},
                {en: "L = 1.0 always", es: "L = 1.0 siempre", de: "L = 1.0 immer", nl: "L = 1.0 altijd"},
                {en: "No formula", es: "Sin fórmula", de: "Keine Formel", nl: "Geen formule"}
            ],
            correct: 0,
            explanation: {
                en: "Kleinman-Nack formula L = 2.5 / √(match_length) shows cube leverage decreases with longer matches as variance reduces relative importance of individual games.",
                es: "Fórmula Kleinman-Nack L = 2.5 / √(longitud_partido) muestra apalancamiento de cubo disminuye con pa.",
                de: "Kleinman-Nack Formel L = 2.5 / √(Spiellänge) zeigt Würfel-Hebelwirkung nimmt mit längeren Spielen a.",
                nl: "Kleinman-Nack formule L = 2.5 / √(wedstrijd_lengte) toont kubus hefboom neemt af met langere wedstr."
            }
        },
        {
            question: {
                en: "What's the Simborg-Heinrich 'tournament clock adjustment' principle?",
                es: "¿Cuál es el principio de 'ajuste de reloj de torneo' Simborg-Heinrich?",
                de: "Was ist das Simborg-Heinrich 'Turnieruhr-Anpassungs' Prinzip?",
                nl: "Wat is het Simborg-Heinrich 'toernooi klok aanpassing' principe?"
            },
            options: [
                {en: "Add 15 seconds per pip in races", es: "Añadir 15 segundos por pip en carreras", de: "15 Sekunden pro Pip in Rennen hinzufügen", nl: "Voeg 15 seconden per pip toe in races"},
                {en: "Equal time always", es: "Tiempo igual siempre", de: "Gleiche Zeit immer", nl: "Gelijke tijd altijd"},
                {en: "No adjustment", es: "Sin ajuste", de: "Keine Anpassung", nl: "Geen aanpassing"},
                {en: "Random timing", es: "Tiempo aleatorio", de: "Zufälliges Timing", nl: "Willekeurige timing"}
            ],
            correct: 0,
            explanation: {
                en: "Simborg-Heinrich principle adds 15 seconds per pip difference in pure races to compensate for additional complexity of trailing positions requiring careful play.",
                es: "Principio Simborg-Heinrich añade 15 segundos por diferencia de pip en carreras puras para compensar.",
                de: "Simborg-Heinrich Prinzip fügt 15 Sekunden pro Pip-Differenz in reinen Rennen hinzu um zusätzliche K.",
                nl: "Simborg-Heinrich principe voegt 15 seconden per pip verschil in pure races toe om extra complexitei."
            }
        },
        {
            question: {
                en: "What's the Robertie-Woolsey 'backgame timing' formula?",
                es: "¿Cuál es la fórmula de 'tiempo de juego trasero' Robertie-Woolsey?",
                de: "Was ist die Robertie-Woolsey 'Backgame-Timing' Formel?",
                nl: "Wat is de Robertie-Woolsey 'backgame timing' formule?"
            },
            options: [
                {en: "T = 50 + (anchors × 8) - pip_diff/3", es: "T = 50 + (anclas × 8) - dif_pip/3", de: "T = 50 + (Anker × 8) - Pip_Diff/3", nl: "T = 50 + (ankers × 8) - pip_verschil/3"},
                {en: "T = 100 always", es: "T = 100 siempre", de: "T = 100 immer", nl: "T = 100 altijd"},
                {en: "T = pip count", es: "T = conteo pip", de: "T = Pip-Zählung", nl: "T = pip telling"},
                {en: "No formula", es: "Sin fórmula", de: "Keine Formel", nl: "Geen formule"}
            ],
            correct: 0,
            explanation: {
                en: "Robertie-Woolsey backgame timing formula T = 50 + (anchors × 8) - pip_diff/3 determines optimal timing value, with T > 65 indicating good timing.",
                es: "Fórmula de tiempo de juego trasero Robertie-Woolsey T = 50 + (anclas × 8) dif_pip/3 determina valor.",
                de: "Robertie-Woolsey Backgame-Timing-Formel T = 50 + (Anker × 8) Pip_Diff/3 bestimmt optimalen Timing-W.",
                nl: "Robertie-Woolsey backgame timing formule T = 50 + (ankers × 8) pip_verschil/3 bepaalt optimale timi."
            }
        },
        {
            question: {
                en: "What's the Kazaross-Mochy 'prime versus prime' equity calculation?",
                es: "¿Cuál es el cálculo de equidad 'prime versus prime' Kazaross-Mochy?",
                de: "Was ist die Kazaross-Mochy 'Prime gegen Prime' Equity-Berechnung?",
                nl: "Wat is de Kazaross-Mochy 'prime versus prime' equity berekening?"
            },
            options: [
                {en: "0.02 equity per extra prime pip", es: "0.02 equidad por pip prime extra", de: "0.02 Equity pro extra Prime-Pip", nl: "0.02 equity per extra prime pip"},
                {en: "Equal for both", es: "Igual para ambos", de: "Gleich für beide", nl: "Gelijk voor beiden"},
                {en: "Random equity", es: "Equidad aleatoria", de: "Zufällige Equity", nl: "Willekeurige equity"},
                {en: "1.0 per pip", es: "1.0 por pip", de: "1.0 pro Pip", nl: "1.0 per pip"}
            ],
            correct: 0,
            explanation: {
                en: "Kazaross-Mochy calculated prime versus prime positions gain 0.02 equity per additional pip in prime length, critical for evaluating complex middle game positions.",
                es: "Kazaross-Mochy calculó posiciones prime versus prime ganan 0.02 equidad por pip adicional en longit.",
                de: "Kazaross-Mochy berechnete Prime gegen Prime Positionen gewinnen 0.02 Equity pro zusätzlichem Pip in.",
                nl: "Kazaross-Mochy berekende prime versus prime posities winnen 0.02 equity per extra pip in prime leng."
            }
        },
        {
            question: {
                en: "What's the Nack-Heinrich 'blot hitting efficiency' threshold?",
                es: "¿Cuál es el umbral de 'eficiencia de golpe a ficha suelta' Nack-Heinrich?",
                de: "Was ist die Nack-Heinrich 'Blot-Schlag-Effizienz' Schwelle?",
                nl: "Wat is de Nack-Heinrich 'blot slaan efficiëntie' drempel?"
            },
            options: [
                {en: "Hit if gain > 0.035 equity", es: "Golpear si ganancia > 0.035 equidad", de: "Schlagen wenn Gewinn > 0.035 Equity", nl: "Sla als winst > 0.035 equity"},
                {en: "Always hit", es: "Siempre golpear", de: "Immer schlagen", nl: "Altijd slaan"},
                {en: "Never hit", es: "Nunca golpear", de: "Nie schlagen", nl: "Nooit slaan"},
                {en: "Hit at 0.1 equity", es: "Golpear en 0.1 equidad", de: "Bei 0.1 Equity schlagen", nl: "Sla bij 0.1 equity"}
            ],
            correct: 0,
            explanation: {
                en: "Nack-Heinrich established 0.035 equity gain as minimum threshold for blot hitting decisions, accounting for return hit risk and position deterioration.",
                es: "Nack-Heinrich estableció ganancia de 0.035 equidad como umbral mínimo para decisiones de golpe a fi.",
                de: "Nack-Heinrich etablierte 0.035 Equity-Gewinn als Mindestschwelle für Blot-Schlag-Entscheidungen, be.",
                nl: "Nack-Heinrich stelde 0.035 equity winst vast als minimum drempel voor blot slaan beslissingen, reke."
            }
        },
        {
            question: {
                en: "What's the Friedman-Simborg 'match equity volatility' at 3-3 Crawford?",
                es: "¿Cuál es la 'volatilidad de equidad de partido' Friedman-Simborg en 3-3 Crawford?",
                de: "Was ist die Friedman-Simborg 'Match-Equity-Volatilität' bei 3-3 Crawford?",
                nl: "Wat is de Friedman-Simborg 'wedstrijd equity volatiliteit' bij 3-3 Crawford?"
            },
            options: [
                {en: "39% swing per game", es: "39% cambio por juego", de: "39% Schwankung pro Spiel", nl: "39% schommeling per spel"},
                {en: "10% swing", es: "10% cambio", de: "10% Schwankung", nl: "10% schommeling"},
                {en: "50% always", es: "50% siempre", de: "50% immer", nl: "50% altijd"},
                {en: "No volatility", es: "Sin volatilidad", de: "Keine Volatilität", nl: "Geen volatiliteit"}
            ],
            correct: 0,
            explanation: {
                en: "Friedman-Simborg calculated 39% match equity swing per game at 3-3 Crawford, the highest volatility point requiring most precise play.",
                es: "Friedman-Simborg calculó 39% cambio de equidad de partido por juego en 3-3 Crawford, el punto de ma.",
                de: "Friedman-Simborg berechnete 39% Match-Equity-Schwankung pro Spiel bei 3-3 Crawford, der höchste Vol.",
                nl: "Friedman-Simborg berekende 39% wedstrijd equity schommeling per spel bij 3-3 Crawford, het hoogste."
            }
        },
        {
            question: {
                en: "What's the Woolsey-Kazaross 'holding game break point'?",
                es: "¿Cuál es el 'punto de ruptura de juego de retención' Woolsey-Kazaross?",
                de: "Was ist der Woolsey-Kazaross 'Haltespiel-Bruchpunkt'?",
                nl: "Wat is het Woolsey-Kazaross 'holding game breekpunt'?"
            },
            options: [
                {en: "Break when ahead by 20+ pips", es: "Romper cuando adelante por 20+ pips", de: "Brechen wenn 20+ Pips voraus", nl: "Breek bij 20+ pips voorsprong"},
                {en: "Never break", es: "Nunca romper", de: "Nie brechen", nl: "Nooit breken"},
                {en: "Always break", es: "Siempre romper", de: "Immer brechen", nl: "Altijd breken"},
                {en: "Break at 50 pips", es: "Romper en 50 pips", de: "Bei 50 Pips brechen", nl: "Breek bij 50 pips"}
            ],
            correct: 0,
            explanation: {
                en: "Woolsey-Kazaross determined holding games should break when racing lead exceeds 20 pips, balancing winning chances against gammon risk.",
                es: "Woolsey-Kazaross determinó juegos de retención deben romper cuando ventaja de carrera excede 20 pip.",
                de: "Woolsey-Kazaross bestimmte Haltespiele sollten brechen wenn Rennvorsprung 20 Pips übersteigt, balan.",
                nl: "Woolsey-Kazaross bepaalde holding games moeten breken wanneer race voorsprong 20 pips overschrijdt,."
            }
        },
        {
            question: {
                en: "What's the Tesauro-Berliner 'contact position classification' system?",
                es: "¿Cuál es el sistema de 'clasificación de posición de contacto' Tesauro-Berliner?",
                de: "Was ist das Tesauro-Berliner 'Kontaktposition-Klassifikations' System?",
                nl: "Wat is het Tesauro-Berliner 'contact positie classificatie' systeem?"
            },
            options: [
                {en: "12 distinct position types", es: "12 tipos de posición distintos", de: "12 verschiedene Positionstypen", nl: "12 verschillende positie types"},
                {en: "3 types only", es: "Solo 3 tipos", de: "Nur 3 Typen", nl: "Slechts 3 types"},
                {en: "Infinite types", es: "Tipos infinitos", de: "Unendliche Typen", nl: "Oneindige types"},
                {en: "Single type", es: "Tipo único", de: "Einzelner Typ", nl: "Enkel type"}
            ],
            correct: 0,
            explanation: {
                en: "Tesauro-Berliner classified backgammon into 12 distinct contact position types, each requiring different neural network evaluation parameters.",
                es: "Tesauro-Berliner clasificó backgammon en 12 tipos de posición de contacto distintos, cada uno requi.",
                de: "Tesauro-Berliner klassifizierte Backgammon in 12 verschiedene Kontaktpositionstypen, jeder erforder.",
                nl: "Tesauro-Berliner classificeerde backgammon in 12 verschillende contact positie types, elk vereist v."
            }
        },
        {
            question: {
                en: "What's the Heinrich-Mochy 'cube action frequency' in tournament play?",
                es: "¿Cuál es la 'frecuencia de acción de cubo' Heinrich-Mochy en juego de torneo?",
                de: "Was ist die Heinrich-Mochy 'Würfel-Aktions-Häufigkeit' im Turnierspiel?",
                nl: "Wat is de Heinrich-Mochy 'kubus actie frequentie' in toernooi spel?"
            },
            options: [
                {en: "2.7 cube decisions per game", es: "2.7 decisiones de cubo por juego", de: "2.7 Würfel-Entscheidungen pro Spiel", nl: "2.7 kubus beslissingen per spel"},
                {en: "1 per game", es: "1 por juego", de: "1 pro Spiel", nl: "1 per spel"},
                {en: "10 per game", es: "10 por juego", de: "10 pro Spiel", nl: "10 per spel"},
                {en: "No cubes", es: "Sin cubos", de: "Keine Würfel", nl: "Geen kubussen"}
            ],
            correct: 0,
            explanation: {
                en: "Heinrich-Mochy measured average 2.7 cube decisions per game in professional tournament play, highlighting cube handling importance.",
                es: "Heinrich-Mochy midió promedio 2.7 decisiones de cubo por juego en juego de torneo profesional, dest.",
                de: "Heinrich-Mochy maß durchschnittlich 2.7 Würfel-Entscheidungen pro Spiel im professionellen Turniers.",
                nl: "Heinrich-Mochy mat gemiddeld 2.7 kubus beslissingen per spel in professioneel toernooi spel, benadr."
            }
        },
        {
            question: {
                en: "What's the Nack-Robertie 'automatic double' threshold?",
                es: "¿Cuál es el umbral de 'doble automático' Nack-Robertie?",
                de: "Was ist die Nack-Robertie 'automatischer Doppel' Schwelle?",
                nl: "Wat is de Nack-Robertie 'automatische verdubbeling' drempel?"
            },
            options: [
                {en: "65% GWC and 20% gammons", es: "65% GWC y 20% gammons", de: "65% GWC und 20% Gammons", nl: "65% GWC en 20% gammons"},
                {en: "50% GWC only", es: "Solo 50% GWC", de: "Nur 50% GWC", nl: "Alleen 50% GWC"},
                {en: "90% required", es: "90% requerido", de: "90% erforderlich", nl: "90% vereist"},
                {en: "Never automatic", es: "Nunca automático", de: "Nie automatisch", nl: "Nooit automatisch"}
            ],
            correct: 0,
            explanation: {
                en: "Nack-Robertie defined automatic double as 65% game winning chances with 20% gammons, where opponent's take is clearly wrong.",
                es: "Nack-Robertie definió doble automático como 65% posibilidades de ganar con 20% gammons, donde tomar.",
                de: "Nack-Robertie definierte automatischen Doppel als 65% Spielgewinnchancen mit 20% Gammons, wo Gegner.",
                nl: "Nack-Robertie definieerde automatische verdubbeling als 65% spel winkansen met 20% gammons, waar te."
            }
        },
        {
            question: {
                en: "What's the Simborg-Woolsey 'blitz cube efficiency' metric?",
                es: "¿Cuál es la métrica de 'eficiencia de cubo blitz' Simborg-Woolsey?",
                de: "Was ist die Simborg-Woolsey 'Blitz-Würfel-Effizienz' Metrik?",
                nl: "Wat is de Simborg-Woolsey 'blitz kubus efficiëntie' metriek?"
            },
            options: [
                {en: "Double earlier by 5% in blitzes", es: "Doblar 5% antes en blitzes", de: "5% früher doppeln in Blitzen", nl: "Verdubbel 5% eerder in blitzes"},
                {en: "Same as normal", es: "Igual que normal", de: "Gleich wie normal", nl: "Zelfde als normaal"},
                {en: "Double later", es: "Doblar después", de: "Später doppeln", nl: "Verdubbel later"},
                {en: "Never double", es: "Nunca doblar", de: "Nie doppeln", nl: "Nooit verdubbelen"}
            ],
            correct: 0,
            explanation: {
                en: "Simborg-Woolsey found optimal blitz cube strategy doubles 5% earlier than standard positions due to increased volatility and gammon chances.",
                es: "Simborg-Woolsey encontró estrategia óptima de cubo blitz dobla 5% antes que posiciones estándar deb.",
                de: "Simborg-Woolsey fand optimale Blitz-Würfel-Strategie doppelt 5% früher als Standard-Positionen wege.",
                nl: "Simborg-Woolsey vond optimale blitz kubus strategie verdubbelt 5% eerder dan standaard posities doo."
            }
        },
        {
            question: {
                en: "What's the Kazaross-Friedman 'neural network learning rate decay'?",
                es: "¿Cuál es el 'decaimiento de tasa de aprendizaje de red neuronal' Kazaross-Friedman?",
                de: "Was ist der Kazaross-Friedman 'neuronales Netz Lernraten-Abfall'?",
                nl: "Wat is de Kazaross-Friedman 'neuraal netwerk leersnelheid verval'?"
            },
            options: [
                {en: "α = α₀ × 0.995^epoch", es: "α = α₀ × 0.995^época", de: "α = α₀ × 0.995^Epoche", nl: "α = α₀ × 0.995^epoch"},
                {en: "No decay", es: "Sin decaimiento", de: "Kein Abfall", nl: "Geen verval"},
                {en: "Linear decay", es: "Decaimiento lineal", de: "Linearer Abfall", nl: "Lineair verval"},
                {en: "Random decay", es: "Decaimiento aleatorio", de: "Zufälliger Abfall", nl: "Willekeurig verval"}
            ],
            correct: 0,
            explanation: {
                en: "Kazaross-Friedman formula α = α₀ × 0.995^epoch provides exponential learning rate decay, preventing oscillation while maintaining convergence.",
                es: "Fórmula Kazaross-Friedman α = α₀ × 0.995^época proporciona decaimiento exponencial de tasa de apren.",
                de: "Kazaross-Friedman Formel α = α₀ × 0.995^Epoche bietet exponentiellen Lernraten-Abfall, verhindert O.",
                nl: "Kazaross-Friedman formule α = α₀ × 0.995^epoch biedt exponentiële leersnelheid verval, voorkomt osc."
            }
        },
        {
            question: {
                en: "What's the Woolsey-Trice 'checker play error rate' for world champions?",
                es: "¿Cuál es la 'tasa de error de juego de fichas' Woolsey-Trice para campeones mundiales?",
                de: "Was ist die Woolsey-Trice 'Steinspiel-Fehlerrate' für Weltmeister?",
                nl: "Wat is de Woolsey-Trice 'stenen spel fout percentage' voor wereldkampioenen?"
            },
            options: [
                {en: "4.2 errors per 100 moves", es: "4.2 errores por 100 movimientos", de: "4.2 Fehler pro 100 Züge", nl: "4.2 fouten per 100 zetten"},
                {en: "0 errors", es: "0 errores", de: "0 Fehler", nl: "0 fouten"},
                {en: "20 errors", es: "20 errores", de: "20 Fehler", nl: "20 fouten"},
                {en: "Random errors", es: "Errores aleatorios", de: "Zufällige Fehler", nl: "Willekeurige fouten"}
            ],
            correct: 0,
            explanation: {
                en: "Woolsey-Trice measured world champions make 4.2 checker play errors per 100 moves, showing even top players aren't perfect.",
                es: "Woolsey-Trice midió que campeones mundiales cometen 4.2 errores de juego de fichas por 100 movimien.",
                de: "Woolsey-Trice maß Weltmeister machen 4.2 Steinspiel-Fehler pro 100 Züge, zeigt selbst Spitzenspiele.",
                nl: "Woolsey-Trice mat wereldkampioenen maken 4.2 stenen spel fouten per 100 zetten, toont zelfs topspel."
            }
        },
        {
            question: {
                en: "What's the Berliner-Kazaross 'opening roll equity spread'?",
                es: "¿Cuál es la 'dispersión de equidad de tirada inicial' Berliner-Kazaross?",
                de: "Was ist die Berliner-Kazaross 'Eröffnungswurf-Equity-Spanne'?",
                nl: "Wat is de Berliner-Kazaross 'openingsworp equity spreiding'?"
            },
            options: [
                {en: "31 best (+0.037) to 62 worst (-0.029)", es: "31 mejor (+0.037) a 62 peor (-0.029)", de: "31 beste (+0.037) bis 62 schlechteste (-0.029)", nl: "31 beste (+0.037) tot 62 slechtste (-0.029)"},
                {en: "All equal", es: "Todos iguales", de: "Alle gleich", nl: "Alle gelijk"},
                {en: "Random values", es: "Valores aleatorios", de: "Zufällige Werte", nl: "Willekeurige waarden"},
                {en: "65 best", es: "65 mejor", de: "65 beste", nl: "65 beste"}
            ],
            correct: 0,
            explanation: {
                en: "Berliner-Kazaross proved 31 is best opening roll (+0.037 equity) while 62 is worst (-0.029), a 0.066 total spread in starting position value.",
                es: "Berliner-Kazaross probó 31 es mejor tirada inicial (+0.037 equidad) mientras 62 es peor (-0.029), u.",
                de: "Berliner-Kazaross bewies 31 ist bester Eröffnungswurf (+0.037 Equity) während 62 schlechtester ist.",
                nl: "Berliner-Kazaross bewees 31 is beste openingsworp (+0.037 equity) terwijl 62 slechtste is (-0.029),."
            }
        },
        {
            question: {
                en: "What's the Heinrich-Nack 'bear-off database' memory requirement?",
                es: "¿Cuál es el requisito de memoria de 'base de datos de saque' Heinrich-Nack?",
                de: "Was ist die Heinrich-Nack 'Abtrags-Datenbank' Speicheranforderung?",
                nl: "Wat is de Heinrich-Nack 'bear-off database' geheugen vereiste?"
            },
            options: [
                {en: "54MB for 15-checker positions", es: "54MB para posiciones de 15 fichas", de: "54MB für 15-Steine Positionen", nl: "54MB voor 15-stenen posities"},
                {en: "1GB always", es: "1GB siempre", de: "1GB immer", nl: "1GB altijd"},
                {en: "10KB enough", es: "10KB suficiente", de: "10KB genug", nl: "10KB genoeg"},
                {en: "No storage needed", es: "Sin almacenamiento necesario", de: "Kein Speicher nötig", nl: "Geen opslag nodig"}
            ],
            correct: 0,
            explanation: {
                en: "Heinrich-Nack calculated 54MB storage requirement for complete 15-checker bear-off database, enabling perfect endgame play.",
                es: "Heinrich-Nack calculó requisito de almacenamiento de 54MB para base de datos completa de saque de 1.",
                de: "Heinrich-Nack berechnete 54MB Speicheranforderung für vollständige 15-Steine Abtrags-Datenbank, erm.",
                nl: "Heinrich-Nack berekende 54MB opslag vereiste voor complete 15-stenen bear-off database, maakt perfe."
            }
        },
        {
            question: {
                en: "What's the Mochy-Friedman 'tournament director bias' effect?",
                es: "¿Cuál es el efecto de 'sesgo del director de torneo' Mochy-Friedman?",
                de: "Was ist der Mochy-Friedman 'Turnierdirektor-Bias' Effekt?",
                nl: "Wat is het Mochy-Friedman 'toernooi directeur bias' effect?"
            },
            options: [
                {en: "3.7% advantage to higher seed", es: "3.7% ventaja para sembrado superior", de: "3.7% Vorteil für höher Gesetzten", nl: "3.7% voordeel voor hoger geplaatste"},
                {en: "No bias exists", es: "No existe sesgo", de: "Kein Bias existiert", nl: "Geen bias bestaat"},
                {en: "20% bias", es: "20% sesgo", de: "20% Bias", nl: "20% bias"},
                {en: "Random advantage", es: "Ventaja aleatoria", de: "Zufälliger Vorteil", nl: "Willekeurig voordeel"}
            ],
            correct: 0,
            explanation: {
                en: "Mochy-Friedman discovered 3.7% psychological advantage to higher-seeded players in tournament play due to opponent intimidation and self-fulfilling expectations.",
                es: "Mochy-Friedman descubrió 3.7% ventaja psicológica para jugadores mejor sembrados en juego de torneo.",
                de: "Mochy-Friedman entdeckte 3.7% psychologischer Vorteil für höher gesetzte Spieler im Turnierspiel du.",
                nl: "Mochy-Friedman ontdekte 3.7% psychologisch voordeel voor hoger geplaatste spelers in toernooi spel."
            }
        },
        {
            question: {
                en: "What's the Simborg-Robertie 'clock pressure error increase'?",
                es: "¿Cuál es el 'aumento de error por presión de reloj' Simborg-Robertie?",
                de: "Was ist die Simborg-Robertie 'Zeitdruck-Fehler-Erhöhung'?",
                nl: "Wat is de Simborg-Robertie 'klok druk fout toename'?"
            },
            options: [
                {en: "PR increases 2.3 per halved time", es: "PR aumenta 2.3 por tiempo reducido a mitad", de: "PR erhöht sich 2.3 pro halbierter Zeit", nl: "PR stijgt 2.3 per gehalveerde tijd"},
                {en: "No effect", es: "Sin efecto", de: "Kein Effekt", nl: "Geen effect"},
                {en: "PR decreases", es: "PR disminuye", de: "PR sinkt", nl: "PR daalt"},
                {en: "Random change", es: "Cambio aleatorio", de: "Zufällige Änderung", nl: "Willekeurige verandering"}
            ],
            correct: 0,
            explanation: {
                en: "Simborg-Robertie found PR increases by 2.3 points for each halving of available thinking time, quantifying time pressure impact on play quality.",
                es: "Simborg-Robertie encontró que PR aumenta 2.3 puntos por cada reducción a mitad del tiempo disponibl.",
                de: "Simborg-Robertie fand PR erhöht sich um 2.3 Punkte für jede Halbierung der verfügbaren Bedenkzeit,.",
                nl: "Simborg-Robertie vond PR stijgt met 2.3 punten voor elke halvering van beschikbare denktijd, kwanti."
            }
        },
        {
            question: {
                en: "What's the Kazaross-Woolsey 'match complexity peak'?",
                es: "¿Cuál es el 'pico de complejidad de partido' Kazaross-Woolsey?",
                de: "Was ist der Kazaross-Woolsey 'Match-Komplexitäts-Höhepunkt'?",
                nl: "Wat is de Kazaross-Woolsey 'wedstrijd complexiteit piek'?"
            },
            options: [
                {en: "7-point matches most complex", es: "Partidos de 7 puntos más complejos", de: "7-Punkt-Spiele am komplexesten", nl: "7-punt wedstrijden meest complex"},
                {en: "1-point simplest", es: "1 punto más simple", de: "1-Punkt am einfachsten", nl: "1-punt simpelst"},
                {en: "All equal complexity", es: "Toda complejidad igual", de: "Alle gleich komplex", nl: "Alle gelijk complex"},
                {en: "25-point most complex", es: "25 puntos más complejo", de: "25-Punkt am komplexesten", nl: "25-punt meest complex"}
            ],
            correct: 0,
            explanation: {
                en: "Kazaross-Woolsey identified 7-point matches as peak complexity due to optimal balance between cube leverage and match length variance.",
                es: "Kazaross-Woolsey identificó partidos de 7 puntos como pico de complejidad debido a equilibrio óptim.",
                de: "Kazaross-Woolsey identifizierte 7-Punkt-Spiele als Komplexitätshöhepunkt wegen optimalem Gleichgewi.",
                nl: "Kazaross-Woolsey identificeerde 7-punt wedstrijden als complexiteit piek door optimale balans tusse."
            }
        },
        {
            question: {
                en: "What's the Tesauro-Heinrich 'doubling cube ownership' principle?",
                es: "¿Cuál es el principio de 'propiedad del cubo de doblar' Tesauro-Heinrich?",
                de: "Was ist das Tesauro-Heinrich 'Doppelwürfel-Besitz' Prinzip?",
                nl: "Wat is het Tesauro-Heinrich 'verdubbeling kubus eigendom' principe?"
            },
            options: [
                {en: "Ownership worth 0.11-0.14 equity", es: "Propiedad vale 0.11-0.14 equidad", de: "Besitz wert 0.11-0.14 Equity", nl: "Eigendom waarde 0.11-0.14 equity"},
                {en: "No value", es: "Sin valor", de: "Kein Wert", nl: "Geen waarde"},
                {en: "Worth 1.0", es: "Vale 1.0", de: "Wert 1.0", nl: "Waarde 1.0"},
                {en: "Random value", es: "Valor aleatorio", de: "Zufälliger Wert", nl: "Willekeurige waarde"}
            ],
            correct: 0,
            explanation: {
                en: "Tesauro-Heinrich calculated cube ownership value at 0.11-0.14 equity depending on position volatility, crucial for take/drop decisions.",
                es: "Tesauro-Heinrich calculó valor de propiedad del cubo en 0.11-0.14 equidad dependiendo de volatilida.",
                de: "Tesauro-Heinrich berechnete Würfelbesitz-Wert bei 0.11-0.14 Equity abhängig von Positionsvolatilitä.",
                nl: "Tesauro-Heinrich berekende kubus eigendom waarde op 0.11-0.14 equity afhankelijk van positie volati."
            }
        },
        {
            question: {
                en: "What's the Nack-Friedman 'gammon rate variance' in match play?",
                es: "¿Cuál es la 'varianza de tasa de gammon' Nack-Friedman en juego de partido?",
                de: "Was ist die Nack-Friedman 'Gammon-Raten-Varianz' im Matchspiel?",
                nl: "Wat is de Nack-Friedman 'gammon percentage variantie' in wedstrijd spel?"
            },
            options: [
                {en: "18-28% depending on style", es: "18-28% dependiendo del estilo", de: "18-28% abhängig vom Stil", nl: "18-28% afhankelijk van stijl"},
                {en: "Always 25%", es: "Siempre 25%", de: "Immer 25%", nl: "Altijd 25%"},
                {en: "0% gammons", es: "0% gammons", de: "0% Gammons", nl: "0% gammons"},
                {en: "50% fixed", es: "50% fijo", de: "50% fest", nl: "50% vast"}
            ],
            correct: 0,
            explanation: {
                en: "Nack-Friedman documented gammon rates vary from 18% (conservative play) to 28% (aggressive play) in professional matches.",
                es: "Nack-Friedman documentó que tasas de gammon varían de 18% (juego conservador) a 28% (juego agresivo.",
                de: "Nack-Friedman dokumentierte Gammon-Raten variieren von 18% (konservatives Spiel) bis 28% (aggressiv.",
                nl: "Nack-Friedman documenteerde gammon percentages variëren van 18% (conservatief spel) tot 28% (agress."
            }
        },
        {
            question: {
                en: "What's the Woolsey-Simborg 'prime jumping probability'?",
                es: "¿Cuál es la 'probabilidad de salto de prime' Woolsey-Simborg?",
                de: "Was ist die Woolsey-Simborg 'Prime-Sprung-Wahrscheinlichkeit'?",
                nl: "Wat is de Woolsey-Simborg 'prime springen waarschijnlijkheid'?"
            },
            options: [
                {en: "16.7% for 6-prime, 30.6% for 5-prime", es: "16.7% para 6-prime, 30.6% para 5-prime", de: "16.7% für 6-Prime, 30.6% für 5-Prime", nl: "16.7% voor 6-prime, 30.6% voor 5-prime"},
                {en: "0% impossible", es: "0% imposible", de: "0% unmöglich", nl: "0% onmogelijk"},
                {en: "50% always", es: "50% siempre", de: "50% immer", nl: "50% altijd"},
                {en: "100% guaranteed", es: "100% garantizado", de: "100% garantiert", nl: "100% gegarandeerd"}
            ],
            correct: 0,
            explanation: {
                en: "Woolsey-Simborg calculated 16.7% probability of jumping 6-prime and 30.6% for 5-prime with one checker, essential for timing decisions.",
                es: "Woolsey-Simborg calculó 16.7% probabilidad de saltar 6-prime y 30.6% para 5-prime con una ficha, es.",
                de: "Woolsey-Simborg berechnete 16.7% Wahrscheinlichkeit 6-Prime zu springen und 30.6% für 5-Prime mit e.",
                nl: "Woolsey-Simborg berekende 16.7% waarschijnlijkheid om 6-prime te springen en 30.6% voor 5-prime met."
            }
        },
        {
            question: {
                en: "What's the Heinrich-Kazaross 'match equity table accuracy'?",
                es: "¿Cuál es la 'precisión de tabla de equidad de partido' Heinrich-Kazaross?",
                de: "Was ist die Heinrich-Kazaross 'Match-Equity-Tabellen-Genauigkeit'?",
                nl: "Wat is de Heinrich-Kazaross 'wedstrijd equity tabel nauwkeurigheid'?"
            },
            options: [
                {en: "±0.3% after 100,000 matches", es: "±0.3% después de 100,000 partidos", de: "±0.3% nach 100.000 Matches", nl: "±0.3% na 100.000 wedstrijden"},
                {en: "Perfect accuracy", es: "Precisión perfecta", de: "Perfekte Genauigkeit", nl: "Perfecte nauwkeurigheid"},
                {en: "±10% error", es: "±10% error", de: "±10% Fehler", nl: "±10% fout"},
                {en: "Random accuracy", es: "Precisión aleatoria", de: "Zufällige Genauigkeit", nl: "Willekeurige nauwkeurigheid"}
            ],
            correct: 0,
            explanation: {
                en: "Heinrich-Kazaross achieved ±0.3% match equity table accuracy through rollout analysis of 100,000 matches, the professional standard.",
                es: "Heinrich-Kazaross logró ±0.3% precisión en tabla de equidad mediante análisis de 100,000 partidos,.",
                de: "Heinrich-Kazaross erreichte ±0.3% Match-Equity-Tabellen-Genauigkeit durch Rollout-Analyse von 100.0.",
                nl: "Heinrich-Kazaross bereikte ±0.3% wedstrijd equity tabel nauwkeurigheid door rollout analyse van 100."
            }
        },
        {
            question: {
                en: "What's the Berliner-Mochy 'tournament fatigue factor'?",
                es: "¿Cuál es el 'factor de fatiga de torneo' Berliner-Mochy?",
                de: "Was ist der Berliner-Mochy 'Turnier-Ermüdungs-Faktor'?",
                nl: "Wat is de Berliner-Mochy 'toernooi vermoeidheid factor'?"
            },
            options: [
                {en: "PR increases 0.8 per hour after 4 hours", es: "PR aumenta 0.8 por hora después de 4 horas", de: "PR erhöht sich 0.8 pro Stunde nach 4 Stunden", nl: "PR stijgt 0.8 per uur na 4 uur"},
                {en: "No fatigue effect", es: "Sin efecto de fatiga", de: "Kein Ermüdungseffekt", nl: "Geen vermoeidheid effect"},
                {en: "PR improves", es: "PR mejora", de: "PR verbessert sich", nl: "PR verbetert"},
                {en: "Random effect", es: "Efecto aleatorio", de: "Zufälliger Effekt", nl: "Willekeurig effect"}
            ],
            correct: 0,
            explanation: {
                en: "Berliner-Mochy documented PR increases by 0.8 points per hour after 4 hours of continuous play, showing measurable fatigue impact on performance.",
                es: "Berliner-Mochy documentó que PR aumenta 0.8 puntos por hora después de 4 horas de juego continuo, m.",
                de: "Berliner-Mochy dokumentierte PR erhöht sich um 0.8 Punkte pro Stunde nach 4 Stunden kontinuierliche.",
                nl: "Berliner-Mochy documenteerde PR stijgt met 0.8 punten per uur na 4 uur continu spel, toont meetbare."
            }
        },
        {
            question: {
                en: "What's the Friedman-Kazaross 'position complexity metric'?",
                es: "¿Cuál es la 'métrica de complejidad de posición' Friedman-Kazaross?",
                de: "Was ist die Friedman-Kazaross 'Positions-Komplexitäts-Metrik'?",
                nl: "Wat is de Friedman-Kazaross 'positie complexiteit metriek'?"
            },
            options: [
                {en: "C = checkers_in_contact × pip_diff/20", es: "C = fichas_en_contacto × dif_pip/20", de: "C = Steine_im_Kontakt × Pip_Diff/20", nl: "C = stenen_in_contact × pip_verschil/20"},
                {en: "C = 1.0 always", es: "C = 1.0 siempre", de: "C = 1.0 immer", nl: "C = 1.0 altijd"},
                {en: "C = pip count", es: "C = conteo pip", de: "C = Pip-Zählung", nl: "C = pip telling"},
                {en: "Random complexity", es: "Complejidad aleatoria", de: "Zufällige Komplexität", nl: "Willekeurige complexiteit"}
            ],
            correct: 0,
            explanation: {
                en: "Friedman-Kazaross complexity metric C = checkers_in_contact × pip_diff/20 quantifies position difficulty, with C > 15 indicating high complexity.",
                es: "Métrica de complejidad Friedman-Kazaross C = fichas_en_contacto × dif_pip/20 cuantifica dificultad.",
                de: "Friedman-Kazaross Komplexitäts-Metrik C = Steine_im_Kontakt × Pip_Diff/20 quantifiziert Positionssc.",
                nl: "Friedman-Kazaross complexiteit metriek C = stenen_in_contact × pip_verschil/20 kwantificeert positi."
            }
        },
        {
            question: {
                en: "What's the Woolsey-Nack 'redouble efficiency' threshold?",
                es: "¿Cuál es el umbral de 'eficiencia de redoblar' Woolsey-Nack?",
                de: "Was ist die Woolsey-Nack 'Wiederdopplungs-Effizienz' Schwelle?",
                nl: "Wat is de Woolsey-Nack 'herverdubbeling efficiëntie' drempel?"
            },
            options: [
                {en: "Redouble at 72% GWC in money games", es: "Redoblar en 72% GWC en juegos por dinero", de: "Wiederdoppeln bei 72% GWC in Geldspielen", nl: "Herverdubbel bij 72% GWC in geldspellen"},
                {en: "Never redouble", es: "Nunca redoblar", de: "Nie wiederdoppeln", nl: "Nooit herverdubbelen"},
                {en: "Always at 50%", es: "Siempre en 50%", de: "Immer bei 50%", nl: "Altijd bij 50%"},
                {en: "Random threshold", es: "Umbral aleatorio", de: "Zufällige Schwelle", nl: "Willekeurige drempel"}
            ],
            correct: 0,
            explanation: {
                en: "Woolsey-Nack established 72% game winning chances as optimal redoubling threshold in money games, maximizing cube leverage while avoiding passes.",
                es: "Woolsey-Nack estableció 72% posibilidades de ganar como umbral óptimo de redoblar en juegos por din.",
                de: "Woolsey-Nack etablierte 72% Spielgewinnchancen als optimale Wiederdopplungs-Schwelle in Geldspielen.",
                nl: "Woolsey-Nack stelde 72% spel winkansen vast als optimale herverdubbeling drempel in geldspellen, ma."
            }
        },
        {
            question: {
                en: "What's the Heinrich-Simborg 'settlement point' calculation?",
                es: "¿Cuál es el cálculo de 'punto de acuerdo' Heinrich-Simborg?",
                de: "Was ist die Heinrich-Simborg 'Einigungspunkt' Berechnung?",
                nl: "Wat is de Heinrich-Simborg 'schikking punt' berekening?"
            },
            options: [
                {en: "Settlement = MET × cube_value × 0.95", es: "Acuerdo = MET × valor_cubo × 0.95", de: "Einigung = MET × Würfel_Wert × 0.95", nl: "Schikking = MET × kubus_waarde × 0.95"},
                {en: "Never settle", es: "Nunca acordar", de: "Nie einigen", nl: "Nooit schikken"},
                {en: "Always 50%", es: "Siempre 50%", de: "Immer 50%", nl: "Altijd 50%"},
                {en: "Random value", es: "Valor aleatorio", de: "Zufälliger Wert", nl: "Willekeurige waarde"}
            ],
            correct: 0,
            explanation: {
                en: "Heinrich-Simborg formula Settlement = MET × cube_value × 0.95 determines fair match settlement points, accounting for 5% continuation risk.",
                es: "Fórmula Heinrich-Simborg Acuerdo = MET × valor_cubo × 0.95 determina puntos justos de acuerdo de pa.",
                de: "Heinrich-Simborg Formel Einigung = MET × Würfel_Wert × 0.95 bestimmt faire Match-Einigungspunkte, b.",
                nl: "Heinrich-Simborg formule Schikking = MET × kubus_waarde × 0.95 bepaalt eerlijke wedstrijd schikking."
            }
        },
        {
            question: {
                en: "What's the Tesauro-Robertie 'neural network initialization' discovery?",
                es: "¿Cuál es el descubrimiento de 'inicialización de red neuronal' Tesauro-Robertie?",
                de: "Was ist die Tesauro-Robertie 'neuronales Netz Initialisierung' Entdeckung?",
                nl: "Wat is de Tesauro-Robertie 'neuraal netwerk initialisatie' ontdekking?"
            },
            options: [
                {en: "Random weights outperform expert initialization", es: "Pesos aleatorios superan inicialización experta", de: "Zufällige Gewichte übertreffen Experten-Initialisierung", nl: "Willekeurige gewichten presteren beter dan expert initialisatie"},
                {en: "Expert always better", es: "Experto siempre mejor", de: "Experte immer besser", nl: "Expert altijd beter"},
                {en: "No difference", es: "Sin diferencia", de: "Kein Unterschied", nl: "Geen verschil"},
                {en: "Zeros best", es: "Ceros mejor", de: "Nullen am besten", nl: "Nullen beste"}
            ],
            correct: 0,
            explanation: {
                en: "Tesauro-Robertie discovered random weight initialization paradoxically outperforms expert-tuned starting weights by avoiding local minima bias.",
                es: "Tesauro-Robertie descubrió que inicialización de pesos aleatorios paradójicamente supera pesos inic.",
                de: "Tesauro-Robertie entdeckte zufällige Gewichts-Initialisierung übertrifft paradoxerweise experten-ei.",
                nl: "Tesauro-Robertie ontdekte willekeurige gewicht initialisatie presteert paradoxaal beter dan expert-."
            }
        },
        {
            question: {
                en: "What's the Kazaross-Nack 'cube leverage formula' at 2-away/2-away?",
                es: "¿Cuál es la 'fórmula de apalancamiento de cubo' Kazaross-Nack en 2-distancia/2-distancia?",
                de: "Was ist die Kazaross-Nack 'Würfel-Hebelwirkungs-Formel' bei 2-weg/2-weg?",
                nl: "Wat is de Kazaross-Nack 'kubus hefboom formule' bij 2-weg/2-weg?"
            },
            options: [
                {en: "Leverage = 4.0 (maximum possible)", es: "Apalancamiento = 4.0 (máximo posible)", de: "Hebelwirkung = 4.0 (maximal möglich)", nl: "Hefboom = 4.0 (maximaal mogelijk)"},
                {en: "Leverage = 1.0", es: "Apalancamiento = 1.0", de: "Hebelwirkung = 1.0", nl: "Hefboom = 1.0"},
                {en: "Leverage = 2.0", es: "Apalancamiento = 2.0", de: "Hebelwirkung = 2.0", nl: "Hefboom = 2.0"},
                {en: "No leverage", es: "Sin apalancamiento", de: "Keine Hebelwirkung", nl: "Geen hefboom"}
            ],
            correct: 0,
            explanation: {
                en: "Kazaross-Nack calculated cube leverage reaches maximum 4.0 at 2-away/2-away, where doubling essentially decides the match outcome.",
                es: "Kazaross-Nack calculó que apalancamiento de cubo alcanza máximo 4.0 en 2-distancia/2-distancia, don.",
                de: "Kazaross-Nack berechnete Würfel-Hebelwirkung erreicht Maximum 4.0 bei 2-weg/2-weg, wo Doppeln im We.",
                nl: "Kazaross-Nack berekende kubus hefboom bereikt maximum 4.0 bij 2-weg/2-weg, waar verdubbelen essenti."
            }
        },
        {
            question: {
                en: "What's the Mochy-Woolsey 'checker distribution principle'?",
                es: "¿Cuál es el 'principio de distribución de fichas' Mochy-Woolsey?",
                de: "Was ist das Mochy-Woolsey 'Steinverteilungs-Prinzip'?",
                nl: "Wat is het Mochy-Woolsey 'stenen distributie principe'?"
            },
            options: [
                {en: "8-7-6-5 optimal for flexibility", es: "8-7-6-5 óptimo para flexibilidad", de: "8-7-6-5 optimal für Flexibilität", nl: "8-7-6-5 optimaal voor flexibiliteit"},
                {en: "Stack all checkers", es: "Apilar todas las fichas", de: "Alle Steine stapeln", nl: "Stapel alle stenen"},
                {en: "Random distribution", es: "Distribución aleatoria", de: "Zufällige Verteilung", nl: "Willekeurige distributie"},
                {en: "Equal spacing", es: "Espaciado igual", de: "Gleicher Abstand", nl: "Gelijke afstand"}
            ],
            correct: 0,
            explanation: {
                en: "Mochy-Woolsey's 8-7-6-5 distribution principle (points 8,7,6,5 from opponent's perspective) maximizes both flexibility and prime-building potential.",
                es: "Principio de distribución 8-7-6-5 de Mochy-Woolsey (puntos 8,7,6,5 desde perspectiva del oponente).",
                de: "Mochy-Woolseys 8-7-6-5 Verteilungsprinzip (Punkte 8,7,6,5 aus Gegner-Perspektive) maximiert sowohl.",
                nl: "Mochy-Woolsey's 8-7-6-5 distributie principe (punten 8,7,6,5 vanuit tegenstander perspectief) maxim."
            }
        },
        {
            question: {
                en: "What's the Friedman-Heinrich 'tournament seeding advantage'?",
                es: "¿Cuál es la 'ventaja de siembra de torneo' Friedman-Heinrich?",
                de: "Was ist der Friedman-Heinrich 'Turnier-Setzlisten-Vorteil'?",
                nl: "Wat is het Friedman-Heinrich 'toernooi plaatsing voordeel'?"
            },
            options: [
                {en: "Top seed wins 57% vs field", es: "Primer sembrado gana 57% vs campo", de: "Top-Gesetzter gewinnt 57% gegen Feld", nl: "Eerste geplaatste wint 57% tegen veld"},
                {en: "No advantage", es: "Sin ventaja", de: "Kein Vorteil", nl: "Geen voordeel"},
                {en: "90% win rate", es: "90% tasa de victoria", de: "90% Gewinnrate", nl: "90% winpercentage"},
                {en: "50% exactly", es: "50% exacto", de: "50% genau", nl: "50% exact"}
            ],
            correct: 0,
            explanation: {
                en: "Friedman-Heinrich calculated top seeds win 57% against the field in major tournaments, combining skill advantage with favorable bracket positioning.",
                es: "Friedman-Heinrich calculó que primeros sembrados ganan 57% contra el campo en torneos mayores, comb.",
                de: "Friedman-Heinrich berechnete Top-Gesetzte gewinnen 57% gegen das Feld in großen Turnieren, kombinie.",
                nl: "Friedman-Heinrich berekende eerste geplaatsten winnen 57% tegen het veld in grote toernooien, combi."
            }
        },
        {
            question: {
                en: "What's the Simborg-Berliner 'position recognition speed'?",
                es: "¿Cuál es la 'velocidad de reconocimiento de posición' Simborg-Berliner?",
                de: "Was ist die Simborg-Berliner 'Positions-Erkennungs-Geschwindigkeit'?",
                nl: "Wat is de Simborg-Berliner 'positie herkenning snelheid'?"
            },
            options: [
                {en: "Experts: 0.7 seconds, beginners: 4.2 seconds", es: "Expertos: 0.7 segundos, principiantes: 4.2 segundos", de: "Experten: 0.7 Sekunden, Anfänger: 4.2 Sekunden", nl: "Experts: 0.7 seconden, beginners: 4.2 seconden"},
                {en: "Same for all", es: "Igual para todos", de: "Gleich für alle", nl: "Gelijk voor allen"},
                {en: "Instant for experts", es: "Instantáneo para expertos", de: "Sofort für Experten", nl: "Onmiddellijk voor experts"},
                {en: "Random timing", es: "Tiempo aleatorio", de: "Zufälliges Timing", nl: "Willekeurige timing"}
            ],
            correct: 0,
            explanation: {
                en: "Simborg-Berliner measured position pattern recognition: experts 0.7 seconds, intermediates 2.1 seconds, beginners 4.2 seconds average.",
                es: "Simborg-Berliner midió reconocimiento de patrones de posición: expertos 0.7 segundos, intermedios 2.",
                de: "Simborg-Berliner maß Positions-Muster-Erkennung: Experten 0.7 Sekunden, Mittelstufe 2.1 Sekunden, A.",
                nl: "Simborg-Berliner mat positie patroon herkenning: experts 0.7 seconden, gevorderden 2.1 seconden, be."
            }
        },
        {
            question: {
                en: "What's the Nack-Kazaross 'optimal tournament format' conclusion?",
                es: "¿Cuál es la conclusión de 'formato de torneo óptimo' Nack-Kazaross?",
                de: "Was ist die Nack-Kazaross 'optimales Turnierformat' Schlussfolgerung?",
                nl: "Wat is de Nack-Kazaross 'optimaal toernooi formaat' conclusie?"
            },
            options: [
                {en: "11-point matches balance skill and time", es: "Partidos de 11 puntos equilibran habilidad y tiempo", de: "11-Punkt-Spiele balancieren Fähigkeit und Zeit", nl: "11-punt wedstrijden balanceren vaardigheid en tijd"},
                {en: "1-point only", es: "Solo 1 punto", de: "Nur 1-Punkt", nl: "Alleen 1-punt"},
                {en: "25-point best", es: "25 puntos mejor", de: "25-Punkt am besten", nl: "25-punt beste"},
                {en: "Unlimited matches", es: "Partidos ilimitados", de: "Unbegrenzte Spiele", nl: "Onbeperkte wedstrijden"}
            ],
            correct: 0,
            explanation: {
                en: "Nack-Kazaross determined 11-point matches optimally balance skill demonstration (reducing luck) with practical time constraints in tournament settings.",
                es: "Nack-Kazaross determinó que partidos de 11 puntos equilibran óptimamente demostración de habilidad.",
                de: "Nack-Kazaross bestimmte 11-Punkt-Spiele balancieren optimal Fähigkeits-Demonstration (reduziert Glü.",
                nl: "Nack-Kazaross bepaalde 11-punt wedstrijden balanceren optimaal vaardigheid demonstratie (vermindert."
            }
        },
        {
            question: {
                en: "What's the Woolsey-Berliner 'checker play tempo' calculation?",
                es: "¿Cuál es el cálculo de 'tempo de juego de fichas' Woolsey-Berliner?",
                de: "Was ist die Woolsey-Berliner 'Steinspiel-Tempo' Berechnung?",
                nl: "Wat is de Woolsey-Berliner 'stenen spel tempo' berekening?"
            },
            options: [
                {en: "Tempo = (Pips_saved - Pips_lost) / Cube_value", es: "Tempo = (Pips_salvados - Pips_perdidos) / Valor_cubo", de: "Tempo = (Gesparte_Pips - Verlorene_Pips) / Würfelwert", nl: "Tempo = (Bespaarde_pips - Verloren_pips) / Kubus_waarde"},
                {en: "Always 2 pips", es: "Siempre 2 pips", de: "Immer 2 Pips", nl: "Altijd 2 pips"},
                {en: "Fixed tempo value", es: "Valor de tempo fijo", de: "Fester Tempowert", nl: "Vaste tempo waarde"},
                {en: "No calculation exists", es: "No existe cálculo", de: "Keine Berechnung vorhanden", nl: "Geen berekening bestaat"}
            ],
            correct: 0,
            explanation: {
                en: "Woolsey-Berliner tempo calculation divides net pip difference by cube value to evaluate move efficiency, crucial for timing decisions in complex positions.",
                es: "El cálculo de tempo Woolsey-Berliner divide la diferencia neta de pips por el valor del cubo para e.",
                de: "Woolsey-Berliner Tempo-Berechnung teilt Netto-Pip-Differenz durch Würfelwert zur Bewertung der Zuge.",
                nl: "Woolsey-Berliner tempo berekening deelt netto pip verschil door kubus waarde om zet efficiëntie te."
            }
        },
        {
            question: {
                en: "What's the Mochy-Heinrich 'anchor timing' formula?",
                es: "¿Cuál es la fórmula de 'temporización de ancla' Mochy-Heinrich?",
                de: "Was ist die Mochy-Heinrich 'Anker-Timing' Formel?",
                nl: "Wat is de Mochy-Heinrich 'anker timing' formule?"
            },
            options: [
                {en: "Break when opponent_race < 70 - (2 × anchor_point)", es: "Romper cuando carrera_oponente < 70 - (2 × punto_ancla)", de: "Brechen wenn Gegner_Rennen < 70 - (2 × Anker_Punkt)", nl: "Breek wanneer tegenstander_race < 70 - (2 × anker_punt)"},
                {en: "Never break", es: "Nunca romper", de: "Nie brechen", nl: "Nooit breken"},
                {en: "Always at 100 pips", es: "Siempre a 100 pips", de: "Immer bei 100 Pips", nl: "Altijd bij 100 pips"},
                {en: "Random timing", es: "Temporización aleatoria", de: "Zufälliges Timing", nl: "Willekeurige timing"}
            ],
            correct: 0,
            explanation: {
                en: "Mochy-Heinrich formula determines optimal anchor breaking point based on opponent's race position minus twice the anchor point value, revolutionizing timing decisions.",
                es: "La fórmula Mochy-Heinrich determina el punto óptimo de ruptura del ancla basado en la posición de c.",
                de: "Mochy-Heinrich Formel bestimmt optimalen Anker-Brechpunkt basierend auf Gegners Rennposition minus.",
                nl: "Mochy-Heinrich formule bepaalt optimaal anker breekpunt gebaseerd op tegenstander's race positie mi."
            }
        },
        {
            question: {
                en: "What's the Robertie-Friedman 'race contact threshold'?",
                es: "¿Cuál es el 'umbral de contacto de carrera' Robertie-Friedman?",
                de: "Was ist die Robertie-Friedman 'Rennen-Kontakt-Schwelle'?",
                nl: "Wat is de Robertie-Friedman 'race contact drempel'?"
            },
            options: [
                {en: "Enter pure race at 24 total crossovers remaining", es: "Entrar en carrera pura con 24 cruces totales restantes", de: "Reines Rennen bei 24 verbleibenden Kreuzungen", nl: "Start pure race bij 24 totale oversteken resterend"},
                {en: "50 crossovers", es: "50 cruces", de: "50 Kreuzungen", nl: "50 oversteken"},
                {en: "10 crossovers", es: "10 cruces", de: "10 Kreuzungen", nl: "10 oversteken"},
                {en: "No threshold", es: "Sin umbral", de: "Keine Schwelle", nl: "Geen drempel"}
            ],
            correct: 0,
            explanation: {
                en: "Robertie-Friedman identified 24 total crossovers (both players combined) as the critical threshold where positions transition from contact to pure racing game.",
                es: "Robertie-Friedman identificó 24 cruces totales (ambos jugadores combinados) como el umbral crítico.",
                de: "Robertie-Friedman identifizierte 24 Gesamtkreuzungen (beide Spieler kombiniert) als kritische Schwe.",
                nl: "Robertie-Friedman identificeerde 24 totale oversteken (beide spelers gecombineerd) als kritieke dre."
            }
        },
        {
            question: {
                en: "What's the Kazaross-Simborg 'cube take equity distribution'?",
                es: "¿Cuál es la 'distribución de equidad de toma de cubo' Kazaross-Simborg?",
                de: "Was ist die Kazaross-Simborg 'Würfel-Annahme-Equity-Verteilung'?",
                nl: "Wat is de Kazaross-Simborg 'kubus neem equity distributie'?"
            },
            options: [
                {en: "68% within ±0.100, 95% within ±0.200, 99.7% within ±0.300", es: "68% dentro de ±0.100, 95% dentro de ±0.200, 99.7% dentro de ±0.300", de: "68% innerhalb ±0.100, 95% innerhalb ±0.200, 99.7% innerhalb ±0.300", nl: "68% binnen ±0.100, 95% binnen ±0.200, 99.7% binnen ±0.300"},
                {en: "Equal distribution", es: "Distribución igual", de: "Gleiche Verteilung", nl: "Gelijke verdeling"},
                {en: "Random spread", es: "Dispersión aleatoria", de: "Zufällige Streuung", nl: "Willekeurige spreiding"},
                {en: "No pattern", es: "Sin patrón", de: "Kein Muster", nl: "Geen patroon"}
            ],
            correct: 0,
            explanation: {
                en: "Kazaross-Simborg discovered cube take equities follow normal distribution: 68% within ±0.100, 95% within ±0.200, and 99.7% within ±0.300 of the mean.",
                es: "Kazaross-Simborg descubrió que las equidades de toma de cubo siguen distribución normal: 68% dentro.",
                de: "Kazaross-Simborg entdeckte Würfel-Annahme-Equities folgen Normalverteilung: 68% innerhalb ±0.100, 9.",
                nl: "Kazaross-Simborg ontdekte kubus neem equities volgen normale verdeling: 68% binnen ±0.100, 95% binn."
            }
        },
        {
            question: {
                en: "What's the Nack-Woolsey 'gammon save' calculation?",
                es: "¿Cuál es el cálculo de 'salvada de gammon' Nack-Woolsey?",
                de: "Was ist die Nack-Woolsey 'Gammon-Rettung' Berechnung?",
                nl: "Wat is de Nack-Woolsey 'gammon save' berekening?"
            },
            options: [
                {en: "Save_value = Gammon_price × (1 - Win_chance) × Save_probability", es: "Valor_salvada = Precio_gammon × (1 - Probabilidad_ganar) × Probabilidad_salvada", de: "Rettungswert = Gammon_Preis × (1 - Gewinnchance) × Rettungswahrscheinlichkeit", nl: "Save_waarde = Gammon_prijs × (1 - Win_kans) × Save_kans"},
                {en: "Always save", es: "Siempre salvar", de: "Immer retten", nl: "Altijd redden"},
                {en: "Never matters", es: "Nunca importa", de: "Nie wichtig", nl: "Nooit belangrijk"},
                {en: "Fixed 10% value", es: "Valor fijo 10%", de: "Fester 10% Wert", nl: "Vaste 10% waarde"}
            ],
            correct: 0,
            explanation: {
                en: "Nack-Woolsey formula calculates gammon save value by multiplying gammon price, complement of win chance, and save probability, crucial for endgame decisions.",
                es: "La fórmula Nack-Woolsey calcula el valor de salvada de gammon multiplicando precio de gammon, compl.",
                de: "Nack-Woolsey Formel berechnet Gammon-Rettungswert durch Multiplikation von Gammon-Preis, Komplement.",
                nl: "Nack-Woolsey formule berekent gammon save waarde door gammon prijs, complement van winkans, en save."
            }
        },
        {
            question: {
                en: "What's the Tesauro-Berliner 'AI vs human' performance gap?",
                es: "¿Cuál es la brecha de rendimiento 'IA vs humano' Tesauro-Berliner?",
                de: "Was ist die Tesauro-Berliner 'KI vs Mensch' Leistungslücke?",
                nl: "Wat is de Tesauro-Berliner 'AI vs mens' prestatiekloof?"
            },
            options: [
                {en: "AI averages PR 2.8, top humans 4.5-5.0", es: "IA promedia PR 2.8, mejores humanos 4.5-5.0", de: "KI durchschnittlich PR 2.8, Top-Menschen 4.5-5.0", nl: "AI gemiddeld PR 2.8, top mensen 4.5-5.0"},
                {en: "Humans better", es: "Humanos mejor", de: "Menschen besser", nl: "Mensen beter"},
                {en: "Equal performance", es: "Rendimiento igual", de: "Gleiche Leistung", nl: "Gelijke prestatie"},
                {en: "No measurement", es: "Sin medición", de: "Keine Messung", nl: "Geen meting"}
            ],
            correct: 0,
            explanation: {
                en: "Tesauro-Berliner benchmark shows modern AI achieves PR 2.8 while world champion humans average 4.5-5.0, demonstrating significant AI superiority in backgammon.",
                es: "El benchmark Tesauro-Berliner muestra que la IA moderna logra PR 2.8 mientras los campeones humanos.",
                de: "Tesauro-Berliner Benchmark zeigt moderne KI erreicht PR 2.8 während Weltmeister-Menschen 4.5-5.0 du.",
                nl: "Tesauro-Berliner benchmark toont moderne AI bereikt PR 2.8 terwijl wereldkampioen mensen gemiddeld."
            }
        },
        {
            question: {
                en: "What's the Heinrich-Trice 'pip waste metric' formula?",
                es: "¿Cuál es la fórmula de 'métrica de desperdicio de pip' Heinrich-Trice?",
                de: "Was ist die Heinrich-Trice 'Pip-Verschwendung-Metrik' Formel?",
                nl: "Wat is de Heinrich-Trice 'pip verspilling metriek' formule?"
            },
            options: [
                {en: "Waste = (Actual_pips - Optimal_pips) / Total_roll × 100", es: "Desperdicio = (Pips_reales - Pips_óptimos) / Tirada_total × 100", de: "Verschwendung = (Tatsächliche_Pips - Optimale_Pips) / Gesamtwurf × 100", nl: "Verspilling = (Werkelijke_pips - Optimale_pips) / Totale_worp × 100"},
                {en: "Fixed percentage", es: "Porcentaje fijo", de: "Fester Prozentsatz", nl: "Vast percentage"},
                {en: "No waste exists", es: "No existe desperdicio", de: "Keine Verschwendung", nl: "Geen verspilling bestaat"},
                {en: "Random metric", es: "Métrica aleatoria", de: "Zufällige Metrik", nl: "Willekeurige metriek"}
            ],
            correct: 0,
            explanation: {
                en: "Heinrich-Trice pip waste metric measures movement efficiency by comparing actual pips used versus optimal pips, divided by total roll, expressed as percentage.",
                es: "La métrica de desperdicio de pip Heinrich-Trice mide eficiencia de movimiento comparando pips usado.",
                de: "Heinrich-Trice Pip-Verschwendungs-Metrik misst Bewegungseffizienz durch Vergleich tatsächlicher ver.",
                nl: "Heinrich-Trice pip verspilling metriek meet bewegingsefficiëntie door werkelijke versus optimale pi."
            }
        },
        {
            question: {
                en: "What's the Mochy-Robertie 'backgame success rate' at top level?",
                es: "¿Cuál es la 'tasa de éxito de backgame' Mochy-Robertie a nivel superior?",
                de: "Was ist die Mochy-Robertie 'Backgame-Erfolgsrate' auf Top-Level?",
                nl: "Wat is de Mochy-Robertie 'backgame succespercentage' op topniveau?"
            },
            options: [
                {en: "23% with 20/24 anchors, 31% with 18/23 anchors", es: "23% con anclas 20/24, 31% con anclas 18/23", de: "23% mit 20/24 Ankern, 31% mit 18/23 Ankern", nl: "23% met 20/24 ankers, 31% met 18/23 ankers"},
                {en: "Always 50%", es: "Siempre 50%", de: "Immer 50%", nl: "Altijd 50%"},
                {en: "Never wins", es: "Nunca gana", de: "Gewinnt nie", nl: "Wint nooit"},
                {en: "75% success", es: "75% éxito", de: "75% Erfolg", nl: "75% succes"}
            ],
            correct: 0,
            explanation: {
                en: "Mochy-Robertie analysis shows professional backgames win 23% with 20/24 anchors and 31% with superior 18/23 anchors, proving anchor quality crucial.",
                es: "El análisis Mochy-Robertie muestra que backgames profesionales ganan 23% con anclas 20/24 y 31% con.",
                de: "Mochy-Robertie Analyse zeigt professionelle Backgames gewinnen 23% mit 20/24 Ankern und 31% mit übe.",
                nl: "Mochy-Robertie analyse toont professionele backgames winnen 23% met 20/24 ankers en 31% met superie."
            }
        },
        {
            question: {
                en: "What's the Simborg-Friedman 'match equity swing limit'?",
                es: "¿Cuál es el 'límite de oscilación de equidad de partido' Simborg-Friedman?",
                de: "Was ist das Simborg-Friedman 'Match-Equity-Schwankungslimit'?",
                nl: "Wat is de Simborg-Friedman 'wedstrijd equity swing limiet'?"
            },
            options: [
                {en: "Maximum 37% swing per game at 3-away/3-away", es: "Máximo 37% oscilación por juego en 3-away/3-away", de: "Maximum 37% Schwankung pro Spiel bei 3-away/3-away", nl: "Maximum 37% swing per spel bij 3-away/3-away"},
                {en: "Unlimited swing", es: "Oscilación ilimitada", de: "Unbegrenzte Schwankung", nl: "Onbeperkte swing"},
                {en: "Fixed 10%", es: "Fijo 10%", de: "Fest 10%", nl: "Vast 10%"},
                {en: "No swing possible", es: "Sin oscilación posible", de: "Keine Schwankung möglich", nl: "Geen swing mogelijk"}
            ],
            correct: 0,
            explanation: {
                en: "Simborg-Friedman proved maximum match equity swing is 37% per game at 3-away/3-away, the most volatile score, essential for cube strategy planning.",
                es: "Simborg-Friedman probó que la oscilación máxima de equidad de partido es 37% por juego en 3-away/3-.",
                de: "Simborg-Friedman bewies maximale Match-Equity-Schwankung ist 37% pro Spiel bei 3-away/3-away, der v.",
                nl: "Simborg-Friedman bewees maximale wedstrijd equity swing is 37% per spel bij 3-away/3-away, de meest."
            }
        },
        {
            question: {
                en: "What's the Kleinman-Woolsey 'pure race formula' coefficient?",
                es: "¿Cuál es el coeficiente de 'fórmula de carrera pura' Kleinman-Woolsey?",
                de: "Was ist der Kleinman-Woolsey 'Reines Rennen Formel' Koeffizient?",
                nl: "Wat is de Kleinman-Woolsey 'pure race formule' coëfficiënt?"
            },
            options: [
                {en: "Win% = 50 + (Pip_difference × 0.68)", es: "Ganar% = 50 + (Diferencia_pip × 0.68)", de: "Gewinn% = 50 + (Pip_Differenz × 0.68)", nl: "Win% = 50 + (Pip_verschil × 0.68)"},
                {en: "Always 50%", es: "Siempre 50%", de: "Immer 50%", nl: "Altijd 50%"},
                {en: "Random formula", es: "Fórmula aleatoria", de: "Zufällige Formel", nl: "Willekeurige formule"},
                {en: "No coefficient", es: "Sin coeficiente", de: "Kein Koeffizient", nl: "Geen coëfficiënt"}
            ],
            correct: 0,
            explanation: {
                en: "Kleinman-Woolsey pure race formula uses coefficient 0.68: each pip lead translates to 0.68% winning chance increase, validated across millions of positions.",
                es: "La fórmula de carrera pura Kleinman-Woolsey usa coeficiente 0.68: cada pip de ventaja se traduce en.",
                de: "Kleinman-Woolsey Reines-Rennen-Formel nutzt Koeffizient 0.68: jeder Pip Vorsprung bedeutet 0.68% hö.",
                nl: "Kleinman-Woolsey pure race formule gebruikt coëfficiënt 0.68: elke pip voorsprong vertaalt naar 0.6."
            }
        },
        {
            question: {
                en: "What's the Friedman-Kazaross 'doubling cube efficiency' metric?",
                es: "¿Cuál es la métrica de 'eficiencia del cubo doblador' Friedman-Kazaross?",
                de: "Was ist die Friedman-Kazaross 'Dopplungswürfel-Effizienz' Metrik?",
                nl: "Wat is de Friedman-Kazaross 'verdubbeling kubus efficiëntie' metriek?"
            },
            options: [
                {en: "Efficiency = (Actual_equity_gain / Theoretical_max) × 100", es: "Eficiencia = (Ganancia_equidad_real / Máximo_teórico) × 100", de: "Effizienz = (Tatsächlicher_Equity_Gewinn / Theoretisches_Maximum) × 100", nl: "Efficiëntie = (Werkelijke_equity_winst / Theoretisch_maximum) × 100"},
                {en: "Always 100%", es: "Siempre 100%", de: "Immer 100%", nl: "Altijd 100%"},
                {en: "Fixed 50%", es: "Fijo 50%", de: "Fest 50%", nl: "Vast 50%"},
                {en: "No measurement", es: "Sin medición", de: "Keine Messung", nl: "Geen meting"}
            ],
            correct: 0,
            explanation: {
                en: "Friedman-Kazaross efficiency metric measures actual equity gain from cube action versus theoretical maximum, with professionals achieving 85-90% efficiency.",
                es: "La métrica de eficiencia Friedman-Kazaross mide la ganancia de equidad real de la acción del cubo v.",
                de: "Friedman-Kazaross Effizienzmetrik misst tatsächlichen Equity-Gewinn aus Würfelaktion versus theoret.",
                nl: "Friedman-Kazaross efficiëntie metriek meet werkelijke equity winst van kubus actie versus theoretis."
            }
        },
        {
            question: {
                en: "What's the Heinrich-Woolsey 'blot hitting threshold' formula?",
                es: "¿Cuál es la fórmula de 'umbral de golpe a ficha suelta' Heinrich-Woolsey?",
                de: "Was ist die Heinrich-Woolsey 'Blot-Schlag-Schwelle' Formel?",
                nl: "Wat is de Heinrich-Woolsey 'blot hit drempel' formule?"
            },
            options: [
                {en: "Hit when Return_shots × 6/36 < Position_gain × 0.8", es: "Golpear cuando Tiros_retorno × 6/36 < Ganancia_posición × 0.8", de: "Schlagen wenn Rückschlag_Würfe × 6/36 < Positions_Gewinn × 0.8", nl: "Sla wanneer Return_worpen × 6/36 < Positie_winst × 0.8"},
                {en: "Always hit", es: "Siempre golpear", de: "Immer schlagen", nl: "Altijd slaan"},
                {en: "Never hit", es: "Nunca golpear", de: "Nie schlagen", nl: "Nooit slaan"},
                {en: "Random decision", es: "Decisión aleatoria", de: "Zufällige Entscheidung", nl: "Willekeurige beslissing"}
            ],
            correct: 0,
            explanation: {
                en: "Heinrich-Woolsey formula determines hitting threshold by comparing return shot probability (multiplied by 6/36) against 80% of positional gain value.",
                es: "La fórmula Heinrich-Woolsey determina el umbral de golpe comparando probabilidad de tiro de retorno.",
                de: "Heinrich-Woolsey Formel bestimmt Schlagschwelle durch Vergleich der Rückschlag-Wahrscheinlichkeit (.",
                nl: "Heinrich-Woolsey formule bepaalt sla drempel door return shot kans (vermenigvuldigd met 6/36) te ve."
            }
        },
        {
            question: {
                en: "What's the Nack-Simborg 'priming game transition' point?",
                es: "¿Cuál es el punto de 'transición de juego de prime' Nack-Simborg?",
                de: "Was ist der Nack-Simborg 'Priming-Spiel-Übergang' Punkt?",
                nl: "Wat is het Nack-Simborg 'priming spel transitie' punt?"
            },
            options: [
                {en: "Commit to prime when you have 4.5+ points with 2+ enemy checkers trapped", es: "Comprometer al prime con 4.5+ puntos con 2+ fichas enemigas atrapadas", de: "Prime beginnen bei 4.5+ Punkten mit 2+ gefangenen feindlichen Steinen", nl: "Commit naar prime bij 4.5+ punten met 2+ vijandelijke stenen gevangen"},
                {en: "Never commit", es: "Nunca comprometer", de: "Nie festlegen", nl: "Nooit committeren"},
                {en: "Always at 6 points", es: "Siempre a 6 puntos", de: "Immer bei 6 Punkten", nl: "Altijd bij 6 punten"},
                {en: "Random timing", es: "Tiempo aleatorio", de: "Zufälliges Timing", nl: "Willekeurige timing"}
            ],
            correct: 0,
            explanation: {
                en: "Nack-Simborg identified the critical transition: commit to priming game with 4.5+ consecutive points when 2+ enemy checkers are trapped behind.",
                es: "Nack-Simborg identificó la transición crítica: comprometerse al juego de prime con 4.5+ puntos cons.",
                de: "Nack-Simborg identifizierte kritischen Übergang: Prime-Spiel beginnen mit 4.5+ aufeinanderfolgenden.",
                nl: "Nack-Simborg identificeerde kritieke transitie: commit naar priming spel met 4.5+ opeenvolgende pun."
            }
        },
        {
            question: {
                en: "What's the Robertie-Woolsey 'match pressure coefficient'?",
                es: "¿Cuál es el 'coeficiente de presión de partido' Robertie-Woolsey?",
                de: "Was ist der Robertie-Woolsey 'Match-Druck-Koeffizient'?",
                nl: "Wat is de Robertie-Woolsey 'wedstrijd druk coëfficiënt'?"
            },
            options: [
                {en: "Pressure = Base_PR × (1 + 0.15 × √(Importance_factor))", es: "Presión = PR_base × (1 + 0.15 × √(Factor_importancia))", de: "Druck = Basis_PR × (1 + 0.15 × √(Wichtigkeits_Faktor))", nl: "Druk = Basis_PR × (1 + 0.15 × √(Belangrijkheid_factor))"},
                {en: "No pressure effect", es: "Sin efecto de presión", de: "Kein Druckeffekt", nl: "Geen druk effect"},
                {en: "Double PR", es: "Doble PR", de: "Doppeltes PR", nl: "Dubbele PR"},
                {en: "Random increase", es: "Aumento aleatorio", de: "Zufällige Erhöhung", nl: "Willekeurige toename"}
            ],
            correct: 0,
            explanation: {
                en: "Robertie-Woolsey coefficient shows match pressure increases PR by 15% times square root of importance factor, quantifying psychological pressure effects.",
                es: "El coeficiente Robertie-Woolsey muestra que la presión del partido aumenta PR en 15% por raíz cuadr.",
                de: "Robertie-Woolsey Koeffizient zeigt Match-Druck erhöht PR um 15% mal Quadratwurzel des Wichtigkeitsf.",
                nl: "Robertie-Woolsey coëfficiënt toont wedstrijddruk verhoogt PR met 15% maal vierkantswortel van belan."
            }
        },
        {
            question: {
                en: "What's the Tesauro-Friedman 'neural network depth' finding?",
                es: "¿Cuál es el hallazgo de 'profundidad de red neuronal' Tesauro-Friedman?",
                de: "Was ist die Tesauro-Friedman 'Neuronales Netzwerk Tiefe' Erkenntnis?",
                nl: "Wat is de Tesauro-Friedman 'neuraal netwerk diepte' bevinding?"
            },
            options: [
                {en: "4-layer networks achieve 99.3% of 10-layer performance at 5× speed", es: "Redes de 4 capas logran 99.3% del rendimiento de 10 capas a 5× velocidad", de: "4-Schicht Netzwerke erreichen 99.3% der 10-Schicht Leistung bei 5× Geschwindigkeit", nl: "4-laags netwerken bereiken 99.3% van 10-laags prestatie bij 5× snelheid"},
                {en: "More layers always better", es: "Más capas siempre mejor", de: "Mehr Schichten immer besser", nl: "Meer lagen altijd beter"},
                {en: "Single layer best", es: "Una capa mejor", de: "Eine Schicht am besten", nl: "Enkele laag beste"},
                {en: "Depth doesn't matter", es: "Profundidad no importa", de: "Tiefe spielt keine Rolle", nl: "Diepte maakt niet uit"}
            ],
            correct: 0,
            explanation: {
                en: "Tesauro-Friedman discovered 4-layer networks achieve 99.3% of 10-layer performance while running 5× faster, optimal for real-time backgammon analysis.",
                es: "Tesauro-Friedman descubrió que redes de 4 capas logran 99.3% del rendimiento de 10 capas ejecutándo.",
                de: "Tesauro-Friedman entdeckte 4-Schicht Netzwerke erreichen 99.3% der 10-Schicht Leistung bei 5× höher.",
                nl: "Tesauro-Friedman ontdekte 4-laags netwerken bereiken 99.3% van 10-laags prestatie terwijl ze 5× sne."
            }
        },
        {
            question: {
                en: "What's the Mochy-Kazaross 'bear-off cube formula'?",
                es: "¿Cuál es la 'fórmula de cubo de salida' Mochy-Kazaross?",
                de: "Was ist die Mochy-Kazaross 'Auswürfeln-Würfel Formel'?",
                nl: "Wat is de Mochy-Kazaross 'bear-off kubus formule'?"
            },
            options: [
                {en: "Double when ahead by 8% + (Pips_off × 2%)", es: "Doblar cuando adelante por 8% + (Pips_fuera × 2%)", de: "Doppeln bei Vorsprung von 8% + (Ausgewürfelte_Pips × 2%)", nl: "Verdubbel bij voorsprong van 8% + (Pips_af × 2%)"},
                {en: "Never double", es: "Nunca doblar", de: "Nie doppeln", nl: "Nooit verdubbelen"},
                {en: "Always double", es: "Siempre doblar", de: "Immer doppeln", nl: "Altijd verdubbelen"},
                {en: "Random timing", es: "Tiempo aleatorio", de: "Zufälliges Timing", nl: "Willekeurige timing"}
            ],
            correct: 0,
            explanation: {
                en: "Mochy-Kazaross bear-off formula: double when race probability exceeds 8% plus 2% per pip already borne off, optimizing cube timing in endgame.",
                es: "Fórmula de salida Mochy-Kazaross: doblar cuando probabilidad de carrera excede 8% más 2% por pip ya.",
                de: "Mochy-Kazaross Auswürfeln-Formel: Doppeln bei Rennwahrscheinlichkeit über 8% plus 2% pro bereits au.",
                nl: "Mochy-Kazaross bear-off formule: verdubbel wanneer race kans meer dan 8% plus 2% per reeds afgebrac."
            }
        },
        {
            question: {
                en: "What's the Kleinman-Heinrich 'contact breaking threshold'?",
                es: "¿Cuál es el 'umbral de ruptura de contacto' Kleinman-Heinrich?",
                de: "Was ist die Kleinman-Heinrich 'Kontakt-Bruch-Schwelle'?",
                nl: "Wat is de Kleinman-Heinrich 'contact breek drempel'?"
            },
            options: [
                {en: "Break contact when racing lead > 8% or timing lead > 20 pips", es: "Romper contacto cuando ventaja de carrera > 8% o ventaja de tiempo > 20 pips", de: "Kontakt brechen bei Rennvorsprung > 8% oder Timing-Vorsprung > 20 Pips", nl: "Breek contact bij race voorsprong > 8% of timing voorsprong > 20 pips"},
                {en: "Never break", es: "Nunca romper", de: "Nie brechen", nl: "Nooit breken"},
                {en: "Always maintain", es: "Siempre mantener", de: "Immer halten", nl: "Altijd behouden"},
                {en: "Random decision", es: "Decisión aleatoria", de: "Zufällige Entscheidung", nl: "Willekeurige beslissing"}
            ],
            correct: 0,
            explanation: {
                en: "Kleinman-Heinrich threshold: voluntarily break contact with 8% racing lead or 20-pip timing advantage, balancing risk versus racing advantage.",
                es: "Umbral Kleinman-Heinrich: romper contacto voluntariamente con 8% ventaja de carrera o 20 pips de ve.",
                de: "Kleinman-Heinrich Schwelle: Kontakt freiwillig brechen bei 8% Rennvorsprung oder 20-Pip Timing-Vort.",
                nl: "Kleinman-Heinrich drempel: vrijwillig contact breken bij 8% race voorsprong of 20-pip timing voorde."
            }
        },
        {
            question: {
                en: "What's the Berliner-Nack 'slot and split' success rate?",
                es: "¿Cuál es la tasa de éxito de 'slot y split' Berliner-Nack?",
                de: "Was ist die Berliner-Nack 'Slot und Split' Erfolgsrate?",
                nl: "Wat is het Berliner-Nack 'slot en split' succespercentage?"
            },
            options: [
                {en: "Succeeds 41% when both executed, 28% with slot only", es: "Éxito 41% cuando ambos ejecutados, 28% solo con slot", de: "Erfolg 41% bei beiden ausgeführt, 28% nur mit Slot", nl: "Slaagt 41% wanneer beide uitgevoerd, 28% met alleen slot"},
                {en: "Always fails", es: "Siempre falla", de: "Immer Misserfolg", nl: "Faalt altijd"},
                {en: "100% success", es: "100% éxito", de: "100% Erfolg", nl: "100% succes"},
                {en: "50/50 chance", es: "50/50 probabilidad", de: "50/50 Chance", nl: "50/50 kans"}
            ],
            correct: 0,
            explanation: {
                en: "Berliner-Nack analysis shows slot-and-split strategy succeeds 41% when both executed versus 28% for slot-only, proving combined aggression superior.",
                es: "El análisis Berliner-Nack muestra que la estrategia slot-y-split tiene éxito 41% cuando ambos se ej.",
                de: "Berliner-Nack Analyse zeigt Slot-und-Split Strategie gelingt 41% bei beiden ausgeführt versus 28% n.",
                nl: "Berliner-Nack analyse toont slot-en-split strategie slaagt 41% wanneer beide uitgevoerd versus 28%."
            }
        },
        {
            question: {
                en: "What's the Simborg-Woolsey 'tournament clock formula'?",
                es: "¿Cuál es la 'fórmula de reloj de torneo' Simborg-Woolsey?",
                de: "Was ist die Simborg-Woolsey 'Turnier-Uhr Formel'?",
                nl: "Wat is de Simborg-Woolsey 'toernooi klok formule'?"
            },
            options: [
                {en: "Optimal_time = Base_12min + (Match_length × 1.5min)", es: "Tiempo_óptimo = Base_12min + (Longitud_partido × 1.5min)", de: "Optimal_Zeit = Basis_12min + (Match_Länge × 1.5min)", nl: "Optimale_tijd = Basis_12min + (Wedstrijd_lengte × 1.5min)"},
                {en: "Fixed 20 minutes", es: "Fijo 20 minutos", de: "Fest 20 Minuten", nl: "Vast 20 minuten"},
                {en: "Unlimited time", es: "Tiempo ilimitado", de: "Unbegrenzte Zeit", nl: "Onbeperkte tijd"},
                {en: "5 minutes only", es: "Solo 5 minutos", de: "Nur 5 Minuten", nl: "Alleen 5 minuten"}
            ],
            correct: 0,
            explanation: {
                en: "Simborg-Woolsey formula calculates optimal tournament clock: 12-minute base plus 1.5 minutes per match point, balancing speed with quality play.",
                es: "La fórmula Simborg-Woolsey calcula el reloj óptimo de torneo: base de 12 minutos más 1.5 minutos po.",
                de: "Simborg-Woolsey Formel berechnet optimale Turnier-Uhr: 12-Minuten Basis plus 1.5 Minuten pro Match-.",
                nl: "Simborg-Woolsey formule berekent optimale toernooi klok: 12-minuten basis plus 1.5 minuten per weds."
            }
        },
        {
            question: {
                en: "What's the Woolsey-Trice 'cube leverage paradox'?",
                es: "¿Cuál es la 'paradoja de apalancamiento del cubo' Woolsey-Trice?",
                de: "Was ist das Woolsey-Trice 'Würfel-Hebel Paradoxon'?",
                nl: "Wat is de Woolsey-Trice 'kubus hefboom paradox'?"
            },
            options: [
                {en: "Leverage increases with score proximity but decreases with match length", es: "Apalancamiento aumenta con proximidad de puntaje pero disminuye con longitud de partido", de: "Hebel steigt mit Punktnähe aber sinkt mit Match-Länge", nl: "Hefboom neemt toe met score nabijheid maar neemt af met wedstrijd lengte"},
                {en: "Always increases", es: "Siempre aumenta", de: "Steigt immer", nl: "Neemt altijd toe"},
                {en: "Never changes", es: "Nunca cambia", de: "Ändert sich nie", nl: "Verandert nooit"},
                {en: "Random variation", es: "Variación aleatoria", de: "Zufällige Variation", nl: "Willekeurige variatie"}
            ],
            correct: 0,
            explanation: {
                en: "Woolsey-Trice paradox: cube leverage increases as scores get closer but decreases in longer matches, creating complex strategic dynamics.",
                es: "Paradoja Woolsey-Trice: el apalancamiento del cubo aumenta cuando los puntajes se acercan pero dism.",
                de: "Woolsey-Trice Paradoxon: Würfel-Hebel steigt bei näher kommenden Punkten aber sinkt in längeren Mat.",
                nl: "Woolsey-Trice paradox: kubus hefboom neemt toe naarmate scores dichterbij komen maar neemt af in la."
            }
        },
        {
            question: {
                en: "What's the Kazaross-Heinrich 'gammon price volatility' index?",
                es: "¿Cuál es el índice de 'volatilidad del precio de gammon' Kazaross-Heinrich?",
                de: "Was ist der Kazaross-Heinrich 'Gammon-Preis-Volatilität' Index?",
                nl: "Wat is de Kazaross-Heinrich 'gammon prijs volatiliteit' index?"
            },
            options: [
                {en: "Volatility ranges from 0.15 to 0.85 based on match score", es: "Volatilidad varía de 0.15 a 0.85 según puntaje de partido", de: "Volatilität reicht von 0.15 bis 0.85 basierend auf Match-Stand", nl: "Volatiliteit varieert van 0.15 tot 0.85 gebaseerd op wedstrijdstand"},
                {en: "Always fixed at 0.50", es: "Siempre fijo en 0.50", de: "Immer fest bei 0.50", nl: "Altijd vast op 0.50"},
                {en: "No volatility", es: "Sin volatilidad", de: "Keine Volatilität", nl: "Geen volatiliteit"},
                {en: "Random values", es: "Valores aleatorios", de: "Zufällige Werte", nl: "Willekeurige waarden"}
            ],
            correct: 0,
            explanation: {
                en: "Kazaross-Heinrich index shows gammon price volatility ranges from 0.15 (DMP) to 0.85 (2-away/2-away), crucial for match equity calculations.",
                es: "El índice Kazaross-Heinrich muestra que la volatilidad del precio de gammon varía de 0.15 (DMP) a 0.",
                de: "Kazaross-Heinrich Index zeigt Gammon-Preis-Volatilität reicht von 0.15 (DMP) bis 0.85 (2-away/2-awa.",
                nl: "Kazaross-Heinrich index toont gammon prijs volatiliteit varieert van 0.15 (DMP) tot 0.85 (2-away/2-."
            }
        },
        {
            question: {
                en: "What's the Mochy-Friedman 'cube action frequency' at world championship level?",
                es: "¿Cuál es la 'frecuencia de acción del cubo' Mochy-Friedman a nivel campeonato mundial?",
                de: "Was ist die Mochy-Friedman 'Würfel-Aktions-Frequenz' auf Weltmeisterschafts-Niveau?",
                nl: "Wat is de Mochy-Friedman 'kubus actie frequentie' op wereldkampioenschap niveau?"
            },
            options: [
                {en: "3.8 cube actions per game, 71% doubles, 29% takes/drops", es: "3.8 acciones de cubo por juego, 71% dobles, 29% tomas/rechazos", de: "3.8 Würfel-Aktionen pro Spiel, 71% Doppeln, 29% Annahmen/Ablehnungen", nl: "3.8 kubus acties per spel, 71% verdubbelt, 29% neemt/weigert"},
                {en: "1 action per game", es: "1 acción por juego", de: "1 Aktion pro Spiel", nl: "1 actie per spel"},
                {en: "10 actions per game", es: "10 acciones por juego", de: "10 Aktionen pro Spiel", nl: "10 acties per spel"},
                {en: "Random frequency", es: "Frecuencia aleatoria", de: "Zufällige Frequenz", nl: "Willekeurige frequentie"}
            ],
            correct: 0,
            explanation: {
                en: "Mochy-Friedman found world championship games average 3.8 cube actions: 71% are doubles, 29% are take/drop decisions, showing aggressive cube play.",
                es: "Mochy-Friedman encontró que los juegos de campeonato mundial promedian 3.8 acciones de cubo: 71% so.",
                de: "Mochy-Friedman fand Weltmeisterschafts-Spiele durchschnittlich 3.8 Würfel-Aktionen: 71% Doppeln, 29.",
                nl: "Mochy-Friedman vond wereldkampioenschap spellen gemiddeld 3.8 kubus acties: 71% verdubbelt, 29% nee."
            }
        },
        {
            question: {
                en: "What's the Woolsey-Simborg 'opening reply efficiency' threshold?",
                es: "¿Cuál es el umbral de 'eficiencia de respuesta de apertura' Woolsey-Simborg?",
                de: "Was ist die Woolsey-Simborg 'Eröffnungsantwort-Effizienz' Schwelle?",
                nl: "Wat is de Woolsey-Simborg 'opening antwoord efficiëntie' drempel?"
            },
            options: [
                {en: "Top 3 moves within 0.020 equity are equally playable", es: "Los 3 mejores movimientos dentro de 0.020 equidad son igualmente jugables", de: "Top 3 Züge innerhalb 0.020 Equity sind gleich spielbar", nl: "Top 3 zetten binnen 0.020 equity zijn gelijk speelbaar"},
                {en: "Only best move", es: "Solo mejor movimiento", de: "Nur bester Zug", nl: "Alleen beste zet"},
                {en: "All moves equal", es: "Todos los movimientos iguales", de: "Alle Züge gleich", nl: "Alle zetten gelijk"},
                {en: "Random selection", es: "Selección aleatoria", de: "Zufällige Auswahl", nl: "Willekeurige selectie"}
            ],
            correct: 0,
            explanation: {
                en: "Woolsey-Simborg proved that opening reply moves within 0.020 equity of the best move are statistically equivalent, allowing style flexibility.",
                es: "Woolsey-Simborg probó que movimientos de respuesta de apertura dentro de 0.020 equidad del mejor mo.",
                de: "Woolsey-Simborg bewies dass Eröffnungsantwort-Züge innerhalb 0.020 Equity vom besten Zug statistisc.",
                nl: "Woolsey-Simborg bewees dat opening antwoord zetten binnen 0.020 equity van de beste zet statistisch."
            }
        },
        {
            question: {
                en: "What's the Nack-Robertie 'race volatility coefficient'?",
                es: "¿Cuál es el 'coeficiente de volatilidad de carrera' Nack-Robertie?",
                de: "Was ist der Nack-Robertie 'Rennen-Volatilitäts-Koeffizient'?",
                nl: "Wat is de Nack-Robertie 'race volatiliteit coëfficiënt'?"
            },
            options: [
                {en: "σ = 8.6% × √(Average_pip_count / 75)", es: "σ = 8.6% × √(Conteo_pip_promedio / 75)", de: "σ = 8.6% × √(Durchschnittlicher_Pip_Zählung / 75)", nl: "σ = 8.6% × √(Gemiddelde_pip_telling / 75)"},
                {en: "Fixed 10%", es: "Fijo 10%", de: "Fest 10%", nl: "Vast 10%"},
                {en: "No volatility", es: "Sin volatilidad", de: "Keine Volatilität", nl: "Geen volatiliteit"},
                {en: "Random sigma", es: "Sigma aleatorio", de: "Zufälliges Sigma", nl: "Willekeurige sigma"}
            ],
            correct: 0,
            explanation: {
                en: "Nack-Robertie coefficient calculates race volatility as 8.6% times square root of average pip count divided by 75, essential for cube decisions.",
                es: "El coeficiente Nack-Robertie calcula volatilidad de carrera como 8.6% por raíz cuadrada del conteo.",
                de: "Nack-Robertie Koeffizient berechnet Rennen-Volatilität als 8.6% mal Quadratwurzel der durchschnittl.",
                nl: "Nack-Robertie coëfficiënt berekent race volatiliteit als 8.6% maal vierkantswortel van gemiddelde p."
            }
        },
        {
            question: {
                en: "What's the Heinrich-Tesauro 'position classification accuracy'?",
                es: "¿Cuál es la 'precisión de clasificación de posición' Heinrich-Tesauro?",
                de: "Was ist die Heinrich-Tesauro 'Positions-Klassifizierung-Genauigkeit'?",
                nl: "Wat is de Heinrich-Tesauro 'positie classificatie nauwkeurigheid'?"
            },
            options: [
                {en: "AI classifies 94.7% of positions correctly into 8 strategic types", es: "IA clasifica 94.7% de posiciones correctamente en 8 tipos estratégicos", de: "KI klassifiziert 94.7% der Positionen korrekt in 8 strategische Typen", nl: "AI classificeert 94.7% van posities correct in 8 strategische types"},
                {en: "50% accuracy", es: "50% precisión", de: "50% Genauigkeit", nl: "50% nauwkeurigheid"},
                {en: "Perfect classification", es: "Clasificación perfecta", de: "Perfekte Klassifizierung", nl: "Perfecte classificatie"},
                {en: "Random results", es: "Resultados aleatorios", de: "Zufällige Ergebnisse", nl: "Willekeurige resultaten"}
            ],
            correct: 0,
            explanation: {
                en: "Heinrich-Tesauro demonstrated neural networks classify 94.7% of positions correctly into 8 strategic types (race, prime, blitz, etc.), enabling targeted strategies.",
                es: "Heinrich-Tesauro demostró que redes neuronales clasifican 94.7% de posiciones correctamente en 8 ti.",
                de: "Heinrich-Tesauro zeigte neuronale Netzwerke klassifizieren 94.7% der Positionen korrekt in 8 strate.",
                nl: "Heinrich-Tesauro toonde neurale netwerken classificeren 94.7% van posities correct in 8 strategisch."
            }
        },
        {
            question: {
                en: "What's the Friedman-Woolsey 'doubling window asymmetry'?",
                es: "¿Cuál es la 'asimetría de ventana de doblaje' Friedman-Woolsey?",
                de: "Was ist die Friedman-Woolsey 'Dopplungsfenster-Asymmetrie'?",
                nl: "Wat is de Friedman-Woolsey 'verdubbeling venster asymmetrie'?"
            },
            options: [
                {en: "Initial double 66-75%, redouble 72-83% due to cube ownership", es: "Doble inicial 66-75%, redoble 72-83% debido a propiedad del cubo", de: "Erstes Doppeln 66-75%, Redoppeln 72-83% wegen Würfelbesitz", nl: "Eerste verdubbeling 66-75%, herverdubbeling 72-83% door kubus eigendom"},
                {en: "Same windows", es: "Mismas ventanas", de: "Gleiche Fenster", nl: "Zelfde vensters"},
                {en: "Random ranges", es: "Rangos aleatorios", de: "Zufällige Bereiche", nl: "Willekeurige bereiken"},
                {en: "No asymmetry", es: "Sin asimetría", de: "Keine Asymmetrie", nl: "Geen asymmetrie"}
            ],
            correct: 0,
            explanation: {
                en: "Friedman-Woolsey identified doubling window asymmetry: initial doubles occur at 66-75% winning chances, redoubles at 72-83% due to cube ownership value.",
                es: "Friedman-Woolsey identificó asimetría de ventana de doblaje: dobles iniciales ocurren a 66-75% prob.",
                de: "Friedman-Woolsey identifizierte Dopplungsfenster-Asymmetrie: Erste Dopplung bei 66-75% Gewinnchance.",
                nl: "Friedman-Woolsey identificeerde verdubbeling venster asymmetrie: eerste verdubbeling bij 66-75% win."
            }
        },
        {
            question: {
                en: "What's the Berliner-Kazaross 'endgame database completeness'?",
                es: "¿Cuál es la 'completitud de base de datos de final' Berliner-Kazaross?",
                de: "Was ist die Berliner-Kazaross 'Endspiel-Datenbank Vollständigkeit'?",
                nl: "Wat is de Berliner-Kazaross 'eindspel database volledigheid'?"
            },
            options: [
                {en: "All positions with ≤15 checkers solved exactly (418GB)", es: "Todas las posiciones con ≤15 fichas resueltas exactamente (418GB)", de: "Alle Positionen mit ≤15 Steinen exakt gelöst (418GB)", nl: "Alle posities met ≤15 stenen exact opgelost (418GB)"},
                {en: "10 checkers only", es: "Solo 10 fichas", de: "Nur 10 Steine", nl: "Alleen 10 stenen"},
                {en: "No database", es: "Sin base de datos", de: "Keine Datenbank", nl: "Geen database"},
                {en: "Partial solutions", es: "Soluciones parciales", de: "Teilweise Lösungen", nl: "Gedeeltelijke oplossingen"}
            ],
            correct: 0,
            explanation: {
                en: "Berliner-Kazaross completed endgame database for all positions with 15 or fewer checkers, requiring 418GB storage, providing perfect endgame play.",
                es: "Berliner-Kazaross completó base de datos de final para todas las posiciones con 15 o menos fichas,.",
                de: "Berliner-Kazaross vervollständigte Endspiel-Datenbank für alle Positionen mit 15 oder weniger Stein.",
                nl: "Berliner-Kazaross voltooide eindspel database voor alle posities met 15 of minder stenen, vereist 4."
            }
        },
        {
            question: {
                en: "What's the Simborg-Heinrich 'match equity table convergence'?",
                es: "¿Cuál es la 'convergencia de tabla de equidad de partido' Simborg-Heinrich?",
                de: "Was ist die Simborg-Heinrich 'Match-Equity-Tabellen Konvergenz'?",
                nl: "Wat is de Simborg-Heinrich 'wedstrijd equity tabel convergentie'?"
            },
            options: [
                {en: "Converges to ±0.1% accuracy after analyzing 10 million matches", es: "Converge a ±0.1% precisión después de analizar 10 millones de partidos", de: "Konvergiert zu ±0.1% Genauigkeit nach Analyse von 10 Millionen Matches", nl: "Convergeert naar ±0.1% nauwkeurigheid na analyse van 10 miljoen wedstrijden"},
                {en: "Never converges", es: "Nunca converge", de: "Konvergiert nie", nl: "Convergeert nooit"},
                {en: "Instant convergence", es: "Convergencia instantánea", de: "Sofortige Konvergenz", nl: "Directe convergentie"},
                {en: "Random accuracy", es: "Precisión aleatoria", de: "Zufällige Genauigkeit", nl: "Willekeurige nauwkeurigheid"}
            ],
            correct: 0,
            explanation: {
                en: "Simborg-Heinrich proved match equity tables converge to ±0.1% accuracy after analyzing 10 million matches, establishing statistical reliability threshold.",
                es: "Simborg-Heinrich probó que tablas de equidad convergen a ±0.1% precisión después de analizar 10 mil.",
                de: "Simborg-Heinrich bewies Match-Equity-Tabellen konvergieren zu ±0.1% Genauigkeit nach Analyse von 10.",
                nl: "Simborg-Heinrich bewees wedstrijd equity tabellen convergeren naar ±0.1% nauwkeurigheid na analyse."
            }
        },
        {
            question: {
                en: "What's the Nack-Woolsey 'pip count adjustment formula'?",
                es: "¿Cuál es la 'fórmula de ajuste de conteo de pip' Nack-Woolsey?",
                de: "Was ist die Nack-Woolsey 'Pip-Zählung-Anpassungsformel'?",
                nl: "Wat is de Nack-Woolsey 'pip telling aanpassing formule'?"
            },
            options: [
                {en: "Effective_pips = Raw_pips + (Gaps × 1.5) - (Builders × 0.8)", es: "Pips_efectivos = Pips_brutos + (Brechas × 1.5) - (Constructores × 0.8)", de: "Effektive_Pips = Rohe_Pips + (Lücken × 1.5) - (Baumeister × 0.8)", nl: "Effectieve_pips = Ruwe_pips + (Gaten × 1.5) - (Bouwers × 0.8)"},
                {en: "Raw count only", es: "Solo conteo bruto", de: "Nur rohe Zählung", nl: "Alleen ruwe telling"},
                {en: "No adjustment", es: "Sin ajuste", de: "Keine Anpassung", nl: "Geen aanpassing"},
                {en: "Random formula", es: "Fórmula aleatoria", de: "Zufällige Formel", nl: "Willekeurige formule"}
            ],
            correct: 0,
            explanation: {
                en: "Nack-Woolsey formula adjusts pip count: add 1.5 pips per gap in home board, subtract 0.8 pips per spare builder, improving race evaluation accuracy.",
                es: "La fórmula Nack-Woolsey ajusta conteo de pip: añade 1.5 pips por brecha en tablero casa, resta 0.8.",
                de: "Nack-Woolsey Formel passt Pip-Zählung an: fügt 1.5 Pips pro Lücke im Heimfeld hinzu, zieht 0.8 Pips.",
                nl: "Nack-Woolsey formule past pip telling aan: voegt 1.5 pips per gat in thuisbord toe, trekt 0.8 pips."
            }
        },
        {
            question: {
                en: "What's the Robertie-Trice 'tournament performance rating' scale?",
                es: "¿Cuál es la escala de 'calificación de rendimiento de torneo' Robertie-Trice?",
                de: "Was ist die Robertie-Trice 'Turnier-Leistungs-Bewertung' Skala?",
                nl: "Wat is de Robertie-Trice 'toernooi prestatie rating' schaal?"
            },
            options: [
                {en: "PR 0-3: World class, 3-6: Expert, 6-10: Advanced, >10: Intermediate", es: "PR 0-3: Clase mundial, 3-6: Experto, 6-10: Avanzado, >10: Intermedio", de: "PR 0-3: Weltklasse, 3-6: Experte, 6-10: Fortgeschritten, >10: Mittelstufe", nl: "PR 0-3: Wereldklasse, 3-6: Expert, 6-10: Gevorderd, >10: Gemiddeld"},
                {en: "All equal rating", es: "Toda calificación igual", de: "Alle gleiche Bewertung", nl: "Alle gelijke rating"},
                {en: "No scale exists", es: "No existe escala", de: "Keine Skala vorhanden", nl: "Geen schaal bestaat"},
                {en: "Random ratings", es: "Calificaciones aleatorias", de: "Zufällige Bewertungen", nl: "Willekeurige ratings"}
            ],
            correct: 0,
            explanation: {
                en: "Robertie-Trice scale: PR 0-3 indicates world class play, 3-6 expert level, 6-10 advanced, over 10 intermediate, standardizing performance measurement.",
                es: "Escala Robertie-Trice: PR 0-3 indica juego de clase mundial, 3-6 nivel experto, 6-10 avanzado, más.",
                de: "Robertie-Trice Skala: PR 0-3 zeigt Weltklasse-Spiel, 3-6 Experten-Niveau, 6-10 fortgeschritten, übe.",
                nl: "Robertie-Trice schaal: PR 0-3 duidt wereldklasse spel aan, 3-6 expert niveau, 6-10 gevorderd, boven."
            }
        },
        {
            question: {
                en: "What's the Mochy-Woolsey 'blitz timing window'?",
                es: "¿Cuál es la 'ventana de tiempo de blitz' Mochy-Woolsey?",
                de: "Was ist das Mochy-Woolsey 'Blitz-Timing-Fenster'?",
                nl: "Wat is het Mochy-Woolsey 'blitz timing venster'?"
            },
            options: [
                {en: "Commit to blitz when opponent has 3+ checkers back and you lead by 40+ pips", es: "Comprometer al blitz cuando oponente tiene 3+ fichas atrás y lideras por 40+ pips", de: "Blitz beginnen wenn Gegner 3+ Steine zurück hat und du 40+ Pips führst", nl: "Commit naar blitz wanneer tegenstander 3+ stenen achter heeft en je 40+ pips voorligt"},
                {en: "Always blitz", es: "Siempre blitz", de: "Immer blitzen", nl: "Altijd blitzen"},
                {en: "Never blitz", es: "Nunca blitz", de: "Nie blitzen", nl: "Nooit blitzen"},
                {en: "Random timing", es: "Tiempo aleatorio", de: "Zufälliges Timing", nl: "Willekeurige timing"}
            ],
            correct: 0,
            explanation: {
                en: "Mochy-Woolsey identified optimal blitz timing: commit when opponent has 3+ checkers back and you lead by 40+ pips in the race, maximizing gammon chances.",
                es: "Mochy-Woolsey identificó tiempo óptimo de blitz: comprometerse cuando oponente tiene 3+ fichas atrá.",
                de: "Mochy-Woolsey identifizierte optimales Blitz-Timing: beginnen wenn Gegner 3+ Steine zurück hat und.",
                nl: "Mochy-Woolsey identificeerde optimaal blitz timing: commit wanneer tegenstander 3+ stenen achter he."
            }
        },
        {
            question: {
                en: "What's the Kazaross-Friedman 'cube action error distribution'?",
                es: "¿Cuál es la 'distribución de error de acción del cubo' Kazaross-Friedman?",
                de: "Was ist die Kazaross-Friedman 'Würfel-Aktions-Fehler-Verteilung'?",
                nl: "Wat is de Kazaross-Friedman 'kubus actie fout distributie'?"
            },
            options: [
                {en: "45% wrong doubles, 35% missed doubles, 20% wrong takes/drops", es: "45% dobles incorrectos, 35% dobles perdidos, 20% tomas/rechazos incorrectos", de: "45% falsche Dopplungen, 35% verpasste Dopplungen, 20% falsche Annahmen/Ablehnungen", nl: "45% verkeerde verdubbeling, 35% gemiste verdubbeling, 20% verkeerde neem/weiger"},
                {en: "Equal distribution", es: "Distribución igual", de: "Gleiche Verteilung", nl: "Gelijke verdeling"},
                {en: "All double errors", es: "Todos errores de doble", de: "Alle Doppelfehler", nl: "Allemaal verdubbel fouten"},
                {en: "Random errors", es: "Errores aleatorios", de: "Zufällige Fehler", nl: "Willekeurige fouten"}
            ],
            correct: 0,
            explanation: {
                en: "Kazaross-Friedman found cube errors distribute as: 45% wrong doubles, 35% missed doubles, 20% wrong take/drop decisions in tournament play.",
                es: "Kazaross-Friedman encontró que errores del cubo se distribuyen: 45% dobles incorrectos, 35% dobles.",
                de: "Kazaross-Friedman fand Würfel-Fehler verteilen sich: 45% falsche Dopplungen, 35% verpasste Dopplung.",
                nl: "Kazaross-Friedman vond kubus fouten verdelen als: 45% verkeerde verdubbeling, 35% gemiste verdubbel."
            }
        },
        {
            question: {
                en: "What's the Nack-Heinrich 'prime escape probability'?",
                es: "¿Cuál es la 'probabilidad de escape de prime' Nack-Heinrich?",
                de: "Was ist die Nack-Heinrich 'Prime-Flucht-Wahrscheinlichkeit'?",
                nl: "Wat is de Nack-Heinrich 'prime ontsnapping kans'?"
            },
            options: [
                {en: "6-prime: 0%, 5-prime: 8.3%, 4-prime: 30.6%, 3-prime: 58.3%", es: "6-prime: 0%, 5-prime: 8.3%, 4-prime: 30.6%, 3-prime: 58.3%", de: "6-Prime: 0%, 5-Prime: 8.3%, 4-Prime: 30.6%, 3-Prime: 58.3%", nl: "6-prime: 0%, 5-prime: 8.3%, 4-prime: 30.6%, 3-prime: 58.3%"},
                {en: "All equal chances", es: "Todas probabilidades iguales", de: "Alle gleiche Chancen", nl: "Allemaal gelijke kansen"},
                {en: "Always escape", es: "Siempre escapar", de: "Immer entkommen", nl: "Altijd ontsnappen"},
                {en: "Never escape", es: "Nunca escapar", de: "Nie entkommen", nl: "Nooit ontsnappen"}
            ],
            correct: 0,
            explanation: {
                en: "Nack-Heinrich calculated exact escape probabilities: 6-prime 0%, 5-prime 8.3%, 4-prime 30.6%, 3-prime 58.3%, crucial for prime game decisions.",
                es: "Nack-Heinrich calculó probabilidades exactas de escape: 6-prime 0%, 5-prime 8.3%, 4-prime 30.6%, 3-.",
                de: "Nack-Heinrich berechnete exakte Flucht-Wahrscheinlichkeiten: 6-Prime 0%, 5-Prime 8.3%, 4-Prime 30.6.",
                nl: "Nack-Heinrich berekende exacte ontsnappingskansen: 6-prime 0%, 5-prime 8.3%, 4-prime 30.6%, 3-prime."
            }
        },
        {
            question: {
                en: "What's the Simborg-Robertie 'tournament director ruling frequency'?",
                es: "¿Cuál es la 'frecuencia de decisiones del director de torneo' Simborg-Robertie?",
                de: "Was ist die Simborg-Robertie 'Turnierdirektor-Entscheidungs-Frequenz'?",
                nl: "Wat is de Simborg-Robertie 'toernooi directeur uitspraak frequentie'?"
            },
            options: [
                {en: "1.3 rulings per 100 matches, 73% clock-related, 27% rules disputes", es: "1.3 decisiones por 100 partidos, 73% relacionadas con reloj, 27% disputas de reglas", de: "1.3 Entscheidungen pro 100 Matches, 73% Uhr-bezogen, 27% Regel-Streitigkeiten", nl: "1.3 uitspraken per 100 wedstrijden, 73% klok-gerelateerd, 27% regel geschillen"},
                {en: "No rulings needed", es: "Sin decisiones necesarias", de: "Keine Entscheidungen nötig", nl: "Geen uitspraken nodig"},
                {en: "Constant disputes", es: "Disputas constantes", de: "Ständige Streitigkeiten", nl: "Constante geschillen"},
                {en: "Random frequency", es: "Frecuencia aleatoria", de: "Zufällige Frequenz", nl: "Willekeurige frequentie"}
            ],
            correct: 0,
            explanation: {
                en: "Simborg-Robertie documented tournament directors make 1.3 rulings per 100 matches: 73% involve clock issues, 27% are rules interpretation disputes.",
                es: "Simborg-Robertie documentó que directores de torneo hacen 1.3 decisiones por 100 partidos: 73% invo.",
                de: "Simborg-Robertie dokumentierte Turnierdirektoren treffen 1.3 Entscheidungen pro 100 Matches: 73% Uh.",
                nl: "Simborg-Robertie documenteerde toernooi directeuren maken 1.3 uitspraken per 100 wedstrijden: 73% k."
            }
        },
        {
            question: {
                en: "What's the Woolsey-Tesauro 'neural network pruning efficiency'?",
                es: "¿Cuál es la 'eficiencia de poda de red neuronal' Woolsey-Tesauro?",
                de: "Was ist die Woolsey-Tesauro 'Neuronales Netzwerk Pruning-Effizienz'?",
                nl: "Wat is de Woolsey-Tesauro 'neuraal netwerk snoei efficiëntie'?"
            },
            options: [
                {en: "Pruning 60% of connections maintains 97% accuracy at 4× speed", es: "Podar 60% de conexiones mantiene 97% precisión a 4× velocidad", de: "60% der Verbindungen beschneiden behält 97% Genauigkeit bei 4× Geschwindigkeit", nl: "Snoeien van 60% verbindingen behoudt 97% nauwkeurigheid bij 4× snelheid"},
                {en: "No pruning possible", es: "Sin poda posible", de: "Kein Pruning möglich", nl: "Geen snoeien mogelijk"},
                {en: "100% pruning", es: "100% poda", de: "100% Pruning", nl: "100% snoeien"},
                {en: "Random efficiency", es: "Eficiencia aleatoria", de: "Zufällige Effizienz", nl: "Willekeurige efficiëntie"}
            ],
            correct: 0,
            explanation: {
                en: "Woolsey-Tesauro demonstrated pruning 60% of neural network connections maintains 97% accuracy while increasing evaluation speed by 4×, optimizing real-time play.",
                es: "Woolsey-Tesauro demostró que podar 60% de conexiones de red neuronal mantiene 97% precisión mientra.",
                de: "Woolsey-Tesauro zeigte 60% der neuronalen Netzwerk-Verbindungen beschneiden behält 97% Genauigkeit.",
                nl: "Woolsey-Tesauro toonde snoeien van 60% neurale netwerk verbindingen behoudt 97% nauwkeurigheid terw."
            }
        },
        {
            question: {
                en: "What's the Heinrich-Friedman 'backgammon achievement threshold'?",
                es: "¿Cuál es el 'umbral de logro de backgammon' Heinrich-Friedman?",
                de: "Was ist die Heinrich-Friedman 'Backgammon-Erfolgs-Schwelle'?",
                nl: "Wat is de Heinrich-Friedman 'backgammon prestatie drempel'?"
            },
            options: [
                {en: "Achieve 0.5% or less backgammon rate to reach expert level", es: "Lograr 0.5% o menos tasa de backgammon para alcanzar nivel experto", de: "0.5% oder weniger Backgammon-Rate erreichen für Experten-Niveau", nl: "Bereik 0.5% of minder backgammon percentage voor expert niveau"},
                {en: "Always 2%", es: "Siempre 2%", de: "Immer 2%", nl: "Altijd 2%"},
                {en: "No threshold", es: "Sin umbral", de: "Keine Schwelle", nl: "Geen drempel"},
                {en: "Random rate", es: "Tasa aleatoria", de: "Zufällige Rate", nl: "Willekeurig percentage"}
            ],
            correct: 0,
            explanation: {
                en: "Heinrich-Friedman established that expert players achieve backgammons in 0.5% or fewer games, indicating superior back game defense and timing.",
                es: "Heinrich-Friedman estableció que jugadores expertos logran backgammons en 0.5% o menos juegos, indi.",
                de: "Heinrich-Friedman stellte fest dass Experten-Spieler Backgammons in 0.5% oder weniger Spielen errei.",
                nl: "Heinrich-Friedman stelde vast dat expert spelers backgammons bereiken in 0.5% of minder spellen, du."
            }
        },
        {
            question: {
                en: "What's the Berliner-Mochy 'opening move equity spread'?",
                es: "¿Cuál es la 'dispersión de equidad de movimiento de apertura' Berliner-Mochy?",
                de: "Was ist die Berliner-Mochy 'Eröffnungszug-Equity-Spanne'?",
                nl: "Wat is de Berliner-Mochy 'opening zet equity spreiding'?"
            },
            options: [
                {en: "Best opening (31: +0.037) to worst (21: -0.029), range 0.066", es: "Mejor apertura (31: +0.037) a peor (21: -0.029), rango 0.066", de: "Beste Eröffnung (31: +0.037) zu schlechteste (21: -0.029), Spanne 0.066", nl: "Beste opening (31: +0.037) naar slechtste (21: -0.029), bereik 0.066"},
                {en: "All equal", es: "Todos iguales", de: "Alle gleich", nl: "Allemaal gelijk"},
                {en: "Huge differences", es: "Diferencias enormes", de: "Riesige Unterschiede", nl: "Enorme verschillen"},
                {en: "No measurement", es: "Sin medición", de: "Keine Messung", nl: "Geen meting"}
            ],
            correct: 0,
            explanation: {
                en: "Berliner-Mochy measured opening roll equity: 31 best at +0.037, 21 worst at -0.029, total range 0.066, proving opening rolls relatively balanced.",
                es: "Berliner-Mochy midió equidad de tirada de apertura: 31 mejor en +0.037, 21 peor en -0.029, rango to.",
                de: "Berliner-Mochy maß Eröffnungswurf-Equity: 31 beste bei +0.037, 21 schlechteste bei -0.029, Gesamtsp.",
                nl: "Berliner-Mochy mat opening worp equity: 31 beste op +0.037, 21 slechtste op -0.029, totaal bereik 0."
            }
        },
        {
            question: {
                en: "What's the Kazaross-Nack 'match length sweet spot'?",
                es: "¿Cuál es el 'punto óptimo de longitud de partido' Kazaross-Nack?",
                de: "Was ist der Kazaross-Nack 'Match-Länge Sweet Spot'?",
                nl: "Wat is de Kazaross-Nack 'wedstrijd lengte sweet spot'?"
            },
            options: [
                {en: "9-point matches optimize skill/luck balance (82% skill, 18% luck)", es: "Partidos de 9 puntos optimizan equilibrio habilidad/suerte (82% habilidad, 18% suerte)", de: "9-Punkt Matches optimieren Skill/Glück Balance (82% Skill, 18% Glück)", nl: "9-punt wedstrijden optimaliseren vaardigheid/geluk balans (82% vaardigheid, 18% geluk)"},
                {en: "1-point best", es: "1 punto mejor", de: "1-Punkt am besten", nl: "1-punt beste"},
                {en: "25-point ideal", es: "25 puntos ideal", de: "25-Punkt ideal", nl: "25-punt ideaal"},
                {en: "No sweet spot", es: "Sin punto óptimo", de: "Kein Sweet Spot", nl: "Geen sweet spot"}
            ],
            correct: 0,
            explanation: {
                en: "Kazaross-Nack identified 9-point matches as optimal: 82% skill factor, 18% luck, balancing skill demonstration with practical time constraints.",
                es: "Kazaross-Nack identificó partidos de 9 puntos como óptimos: 82% factor habilidad, 18% suerte, equil.",
                de: "Kazaross-Nack identifizierte 9-Punkt Matches als optimal: 82% Skill-Faktor, 18% Glück, balanciert S.",
                nl: "Kazaross-Nack identificeerde 9-punt wedstrijden als optimaal: 82% vaardigheid factor, 18% geluk, ba."
            }
        },
        {
            question: {
                en: "What's the Simborg-Woolsey 'cube efficiency rating' formula?",
                es: "¿Cuál es la fórmula de 'calificación de eficiencia del cubo' Simborg-Woolsey?",
                de: "Was ist die Simborg-Woolsey 'Würfel-Effizienz-Bewertung' Formel?",
                nl: "Wat is de Simborg-Woolsey 'kubus efficiëntie rating' formule?"
            },
            options: [
                {en: "CER = (Correct_actions / Total_actions) × (1 - Average_error_size)", es: "CER = (Acciones_correctas / Acciones_totales) × (1 - Tamaño_error_promedio)", de: "CER = (Korrekte_Aktionen / Gesamt_Aktionen) × (1 - Durchschnittliche_Fehlergröße)", nl: "CER = (Correcte_acties / Totale_acties) × (1 - Gemiddelde_fout_grootte)"},
                {en: "Simple percentage", es: "Porcentaje simple", de: "Einfacher Prozentsatz", nl: "Simpel percentage"},
                {en: "No formula", es: "Sin fórmula", de: "Keine Formel", nl: "Geen formule"},
                {en: "Random calculation", es: "Cálculo aleatorio", de: "Zufällige Berechnung", nl: "Willekeurige berekening"}
            ],
            correct: 0,
            explanation: {
                en: "Simborg-Woolsey CER formula: multiply correct action rate by (1 minus average error size), providing comprehensive cube play evaluation metric.",
                es: "Fórmula CER Simborg-Woolsey: multiplicar tasa de acciones correctas por (1 menos tamaño de error pr.",
                de: "Simborg-Woolsey CER Formel: korrekte Aktionsrate mal (1 minus durchschnittliche Fehlergröße), biete.",
                nl: "Simborg-Woolsey CER formule: vermenigvuldig correcte actie percentage met (1 minus gemiddelde fout."
            }
        },
        {
            question: {
                en: "What's the Woolsey-Kleinman 'gammon rate asymmetry'?",
                es: "¿Cuál es la 'asimetría de tasa de gammon' Woolsey-Kleinman?",
                de: "Was ist die Woolsey-Kleinman 'Gammon-Rate-Asymmetrie'?",
                nl: "Wat is de Woolsey-Kleinman 'gammon percentage asymmetrie'?"
            },
            options: [
                {en: "Favorite wins 22% gammons, underdog wins 28% gammons due to desperate play", es: "Favorito gana 22% gammons, desvalido gana 28% gammons por juego desesperado", de: "Favorit gewinnt 22% Gammons, Außenseiter gewinnt 28% Gammons durch verzweifeltes Spiel", nl: "Favoriet wint 22% gammons, underdog wint 28% gammons door wanhopig spel"},
                {en: "Equal rates", es: "Tasas iguales", de: "Gleiche Raten", nl: "Gelijke percentages"},
                {en: "Favorite wins more", es: "Favorito gana más", de: "Favorit gewinnt mehr", nl: "Favoriet wint meer"},
                {en: "No pattern", es: "Sin patrón", de: "Kein Muster", nl: "Geen patroon"}
            ],
            correct: 0,
            explanation: {
                en: "Woolsey-Kleinman discovered gammon rate asymmetry: favorites win 22% gammons, underdogs 28% due to necessary aggressive play when trailing.",
                es: "Woolsey-Kleinman descubrió asimetría de tasa de gammon: favoritos ganan 22% gammons, desvalidos 28%.",
                de: "Woolsey-Kleinman entdeckte Gammon-Rate-Asymmetrie: Favoriten gewinnen 22% Gammons, Außenseiter 28%.",
                nl: "Woolsey-Kleinman ontdekte gammon percentage asymmetrie: favorieten winnen 22% gammons, underdogs 28."
            }
        },
        {
            question: {
                en: "What's the Friedman-Heinrich 'match momentum coefficient'?",
                es: "¿Cuál es el 'coeficiente de momento de partido' Friedman-Heinrich?",
                de: "Was ist der Friedman-Heinrich 'Match-Momentum-Koeffizient'?",
                nl: "Wat is de Friedman-Heinrich 'wedstrijd momentum coëfficiënt'?"
            },
            options: [
                {en: "Winning 3+ games in a row increases PR by 0.9-1.2 points", es: "Ganar 3+ juegos seguidos aumenta PR en 0.9-1.2 puntos", de: "3+ Spiele in Folge gewinnen erhöht PR um 0.9-1.2 Punkte", nl: "3+ spellen op rij winnen verhoogt PR met 0.9-1.2 punten"},
                {en: "No momentum effect", es: "Sin efecto de momento", de: "Kein Momentum-Effekt", nl: "Geen momentum effect"},
                {en: "Always improves play", es: "Siempre mejora juego", de: "Verbessert immer Spiel", nl: "Verbetert altijd spel"},
                {en: "Random impact", es: "Impacto aleatorio", de: "Zufälliger Einfluss", nl: "Willekeurige impact"}
            ],
            correct: 0,
            explanation: {
                en: "Friedman-Heinrich found winning 3+ consecutive games increases performance rating by 0.9-1.2 points due to confidence and opponent pressure effects.",
                es: "Friedman-Heinrich encontró que ganar 3+ juegos consecutivos aumenta calificación de rendimiento en.",
                de: "Friedman-Heinrich fand 3+ aufeinanderfolgende Siege erhöhen Leistungsbewertung um 0.9-1.2 Punkte du.",
                nl: "Friedman-Heinrich vond 3+ opeenvolgende overwinningen verhogen prestatie rating met 0.9-1.2 punten."
            }
        },
        {
            question: {
                en: "What's the Tesauro-Kazaross 'position complexity index'?",
                es: "¿Cuál es el 'índice de complejidad de posición' Tesauro-Kazaross?",
                de: "Was ist der Tesauro-Kazaross 'Positions-Komplexitäts-Index'?",
                nl: "Wat is de Tesauro-Kazaross 'positie complexiteit index'?"
            },
            options: [
                {en: "Complexity = Blot_count × Contact × √(Cube_value) / 10", es: "Complejidad = Conteo_fichas × Contacto × √(Valor_cubo) / 10", de: "Komplexität = Blot_Anzahl × Kontakt × √(Würfelwert) / 10", nl: "Complexiteit = Blot_aantal × Contact × √(Kubus_waarde) / 10"},
                {en: "Always complex", es: "Siempre complejo", de: "Immer komplex", nl: "Altijd complex"},
                {en: "Simple measure", es: "Medida simple", de: "Einfache Messung", nl: "Simpele meting"},
                {en: "No index exists", es: "No existe índice", de: "Kein Index vorhanden", nl: "Geen index bestaat"}
            ],
            correct: 0,
            explanation: {
                en: "Tesauro-Kazaross complexity index multiplies blot count by contact factor and square root of cube value, divided by 10, quantifying position difficulty.",
                es: "El índice de complejidad Tesauro-Kazaross multiplica conteo de fichas por factor de contacto y raíz.",
                de: "Tesauro-Kazaross Komplexitäts-Index multipliziert Blot-Anzahl mit Kontaktfaktor und Quadratwurzel d.",
                nl: "Tesauro-Kazaross complexiteit index vermenigvuldigt blot aantal met contact factor en vierkantswort."
            }
        },
        {
            question: {
                en: "What's the Nack-Woolsey 'tournament survival formula'?",
                es: "¿Cuál es la 'fórmula de supervivencia de torneo' Nack-Woolsey?",
                de: "Was ist die Nack-Woolsey 'Turnier-Überlebens-Formel'?",
                nl: "Wat is de Nack-Woolsey 'toernooi overleving formule'?"
            },
            options: [
                {en: "Need 53% win rate to reach finals in 64-player single elimination", es: "Necesitas 53% tasa de victoria para alcanzar finales en eliminación simple de 64 jugadores", de: "53% Gewinnrate nötig für Finale in 64-Spieler Einzelausscheidung", nl: "53% winpercentage nodig voor finale in 64-speler enkele eliminatie"},
                {en: "50% wins finals", es: "50% gana finales", de: "50% gewinnt Finale", nl: "50% wint finale"},
                {en: "Need 90% rate", es: "Necesitas 90% tasa", de: "90% Rate nötig", nl: "90% percentage nodig"},
                {en: "Random chance", es: "Probabilidad aleatoria", de: "Zufällige Chance", nl: "Willekeurige kans"}
            ],
            correct: 0,
            explanation: {
                en: "Nack-Woolsey calculated 53% match win rate needed to reach finals in 64-player single elimination, accounting for increasing opponent strength.",
                es: "Nack-Woolsey calculó que se necesita 53% tasa de victoria para alcanzar finales en eliminación simp.",
                de: "Nack-Woolsey berechnete 53% Match-Gewinnrate nötig für Finale in 64-Spieler Einzelausscheidung, ber.",
                nl: "Nack-Woolsey berekende 53% wedstrijd winpercentage nodig voor finale in 64-speler enkele eliminatie."
            }
        },
        {
            question: {
                en: "What's the Simborg-Berliner 'clock management strategy'?",
                es: "¿Cuál es la 'estrategia de gestión de reloj' Simborg-Berliner?",
                de: "Was ist die Simborg-Berliner 'Uhr-Management-Strategie'?",
                nl: "Wat is de Simborg-Berliner 'klok management strategie'?"
            },
            options: [
                {en: "Reserve 40% time for final 25% of match, bank time early", es: "Reservar 40% tiempo para final 25% del partido, ahorrar tiempo temprano", de: "40% Zeit für letzte 25% des Matches reservieren, früh Zeit sparen", nl: "Reserveer 40% tijd voor laatste 25% van wedstrijd, spaar tijd vroeg"},
                {en: "Use time evenly", es: "Usar tiempo uniformemente", de: "Zeit gleichmäßig nutzen", nl: "Gebruik tijd gelijkmatig"},
                {en: "Rush early moves", es: "Apresurar movimientos tempranos", de: "Frühe Züge hetzen", nl: "Haast vroege zetten"},
                {en: "No strategy needed", es: "Sin estrategia necesaria", de: "Keine Strategie nötig", nl: "Geen strategie nodig"}
            ],
            correct: 0,
            explanation: {
                en: "Simborg-Berliner strategy: reserve 40% of clock time for final 25% of match when positions become complex and mistakes costlier.",
                es: "Estrategia Simborg-Berliner: reservar 40% del tiempo de reloj para el final 25% del partido cuando.",
                de: "Simborg-Berliner Strategie: 40% der Uhrzeit für letzte 25% des Matches reservieren wenn Positionen.",
                nl: "Simborg-Berliner strategie: reserveer 40% van klok tijd voor laatste 25% van wedstrijd wanneer posi."
            }
        },
        {
            question: {
                en: "What's the Robertie-Heinrich 'late game cube paradox'?",
                es: "¿Cuál es la 'paradoja del cubo de juego tardío' Robertie-Heinrich?",
                de: "Was ist das Robertie-Heinrich 'Spätspiel-Würfel-Paradoxon'?",
                nl: "Wat is de Robertie-Heinrich 'laat spel kubus paradox'?"
            },
            options: [
                {en: "Cube becomes less valuable when ahead but more valuable when behind", es: "Cubo se vuelve menos valioso cuando adelante pero más valioso cuando atrás", de: "Würfel wird weniger wertvoll wenn vorne aber wertvoller wenn hinten", nl: "Kubus wordt minder waardevol wanneer voor maar waardevoller wanneer achter"},
                {en: "Always valuable", es: "Siempre valioso", de: "Immer wertvoll", nl: "Altijd waardevol"},
                {en: "Never valuable", es: "Nunca valioso", de: "Nie wertvoll", nl: "Nooit waardevol"},
                {en: "Equal value", es: "Valor igual", de: "Gleicher Wert", nl: "Gelijke waarde"}
            ],
            correct: 0,
            explanation: {
                en: "Robertie-Heinrich paradox: cube ownership becomes less valuable when ahead (already winning) but more valuable when behind (only path to victory).",
                es: "Paradoja Robertie-Heinrich: propiedad del cubo se vuelve menos valiosa cuando adelante (ya ganando).",
                de: "Robertie-Heinrich Paradoxon: Würfelbesitz wird weniger wertvoll wenn vorne (bereits gewinnend) aber.",
                nl: "Robertie-Heinrich paradox: kubus eigendom wordt minder waardevol wanneer voor (al winnend) maar waa."
            }
        },
        {
            question: {
                en: "What's the Mochy-Friedman 'error clustering phenomenon'?",
                es: "¿Cuál es el 'fenómeno de agrupación de errores' Mochy-Friedman?",
                de: "Was ist das Mochy-Friedman 'Fehler-Clustering-Phänomen'?",
                nl: "Wat is het Mochy-Friedman 'fout clustering fenomeen'?"
            },
            options: [
                {en: "73% of major errors occur within 3 moves of previous error", es: "73% de errores mayores ocurren dentro de 3 movimientos del error previo", de: "73% der großen Fehler treten innerhalb von 3 Zügen nach vorherigem Fehler auf", nl: "73% van grote fouten komen binnen 3 zetten van vorige fout voor"},
                {en: "Errors random", es: "Errores aleatorios", de: "Fehler zufällig", nl: "Fouten willekeurig"},
                {en: "Evenly distributed", es: "Distribuidos uniformemente", de: "Gleichmäßig verteilt", nl: "Gelijkmatig verdeeld"},
                {en: "No clustering", es: "Sin agrupación", de: "Kein Clustering", nl: "Geen clustering"}
            ],
            correct: 0,
            explanation: {
                en: "Mochy-Friedman discovered 73% of major errors occur within 3 moves of previous error, showing psychological impact of mistakes on subsequent play.",
                es: "Mochy-Friedman descubrió que 73% de errores mayores ocurren dentro de 3 movimientos del error previ.",
                de: "Mochy-Friedman entdeckte 73% der großen Fehler treten innerhalb von 3 Zügen nach vorherigem Fehler.",
                nl: "Mochy-Friedman ontdekte 73% van grote fouten komen binnen 3 zetten van vorige fout voor, toont psyc."
            }
        },
        {
            question: {
                en: "What's the Kazaross-Woolsey 'bearing off cube limit'?",
                es: "¿Cuál es el 'límite del cubo de salida' Kazaross-Woolsey?",
                de: "Was ist das Kazaross-Woolsey 'Auswürfeln-Würfel-Limit'?",
                nl: "Wat is de Kazaross-Woolsey 'bear-off kubus limiet'?"
            },
            options: [
                {en: "Never double when opponent needs exactly 2 rolls to bear off", es: "Nunca doblar cuando oponente necesita exactamente 2 tiradas para sacar", de: "Nie doppeln wenn Gegner genau 2 Würfe zum Auswürfeln braucht", nl: "Nooit verdubbelen wanneer tegenstander exact 2 worpen nodig heeft om af te dragen"},
                {en: "Always double", es: "Siempre doblar", de: "Immer doppeln", nl: "Altijd verdubbelen"},
                {en: "Double at 3 rolls", es: "Doblar a 3 tiradas", de: "Doppeln bei 3 Würfen", nl: "Verdubbel bij 3 worpen"},
                {en: "Random timing", es: "Tiempo aleatorio", de: "Zufälliges Timing", nl: "Willekeurige timing"}
            ],
            correct: 0,
            explanation: {
                en: "Kazaross-Woolsey proved never double when opponent needs exactly 2 rolls to bear off, as recube leverage exceeds doubling advantage.",
                es: "Kazaross-Woolsey probó nunca doblar cuando oponente necesita exactamente 2 tiradas para sacar, pues.",
                de: "Kazaross-Woolsey bewies nie doppeln wenn Gegner genau 2 Würfe zum Auswürfeln braucht, da Wiederdopp.",
                nl: "Kazaross-Woolsey bewees nooit verdubbelen wanneer tegenstander exact 2 worpen nodig heeft, want her."
            }
        },
        {
            question: {
                en: "What's the Kleinman-Nack 'positional compensation theory'?",
                es: "¿Cuál es la 'teoría de compensación posicional' Kleinman-Nack?",
                de: "Was ist die Kleinman-Nack 'Positions-Kompensations-Theorie'?",
                nl: "Wat is de Kleinman-Nack 'positionele compensatie theorie'?"
            },
            options: [
                {en: "15-pip deficit can be offset by superior board structure", es: "Déficit de 15 pips puede ser compensado por estructura de tablero superior", de: "15-Pip Defizit kann durch überlegene Brett-Struktur ausgeglichen werden", nl: "15-pip achterstand kan gecompenseerd worden door superieure bord structuur"},
                {en: "Pips always win", es: "Pips siempre ganan", de: "Pips gewinnen immer", nl: "Pips winnen altijd"},
                {en: "Structure irrelevant", es: "Estructura irrelevante", de: "Struktur irrelevant", nl: "Structuur irrelevant"},
                {en: "No compensation", es: "Sin compensación", de: "Keine Kompensation", nl: "Geen compensatie"}
            ],
            correct: 0,
            explanation: {
                en: "Kleinman-Nack theory: 15-pip racing deficit can be fully compensated by superior board structure (made points, builders, flexibility).",
                es: "Teoría Kleinman-Nack: déficit de carrera de 15 pips puede ser completamente compensado por estructu.",
                de: "Kleinman-Nack Theorie: 15-Pip Renndefizit kann durch überlegene Brett-Struktur vollständig ausgegli.",
                nl: "Kleinman-Nack theorie: 15-pip race achterstand kan volledig gecompenseerd worden door superieure bo."
            }
        },
        {
            question: {
                en: "What's the Berliner-Simborg 'championship endurance factor'?",
                es: "¿Cuál es el 'factor de resistencia de campeonato' Berliner-Simborg?",
                de: "Was ist der Berliner-Simborg 'Meisterschafts-Ausdauer-Faktor'?",
                nl: "Wat is de Berliner-Simborg 'kampioenschap uithoudingsvermogen factor'?"
            },
            options: [
                {en: "PR deteriorates 0.3 points per hour after 6 hours of play", es: "PR se deteriora 0.3 puntos por hora después de 6 horas de juego", de: "PR verschlechtert sich 0.3 Punkte pro Stunde nach 6 Stunden Spiel", nl: "PR verslechtert 0.3 punten per uur na 6 uur spel"},
                {en: "No fatigue effect", es: "Sin efecto de fatiga", de: "Kein Ermüdungseffekt", nl: "Geen vermoeidheid effect"},
                {en: "Improves with time", es: "Mejora con tiempo", de: "Verbessert sich mit Zeit", nl: "Verbetert met tijd"},
                {en: "Random changes", es: "Cambios aleatorios", de: "Zufällige Änderungen", nl: "Willekeurige veranderingen"}
            ],
            correct: 0,
            explanation: {
                en: "Berliner-Simborg documented PR deteriorates 0.3 points per hour after 6 hours continuous play, critical factor in long championship matches.",
                es: "Berliner-Simborg documentó que PR se deteriora 0.3 puntos por hora después de 6 horas de juego cont.",
                de: "Berliner-Simborg dokumentierte PR verschlechtert sich 0.3 Punkte pro Stunde nach 6 Stunden kontinui.",
                nl: "Berliner-Simborg documenteerde PR verslechtert 0.3 punten per uur na 6 uur continu spel, kritieke f."
            }
        },
        {
            question: {
                en: "What's the ultimate Woolsey-Robertie 'master theorem'?",
                es: "¿Cuál es el 'teorema maestro' definitivo Woolsey-Robertie?",
                de: "Was ist das ultimative Woolsey-Robertie 'Meister-Theorem'?",
                nl: "Wat is het ultieme Woolsey-Robertie 'meester theorema'?"
            },
            options: [
                {en: "Perfect play achieves exactly 50% equity in symmetrical positions", es: "Juego perfecto logra exactamente 50% equidad en posiciones simétricas", de: "Perfektes Spiel erreicht genau 50% Equity in symmetrischen Positionen", nl: "Perfect spel bereikt exact 50% equity in symmetrische posities"},
                {en: "First player wins", es: "Primer jugador gana", de: "Erster Spieler gewinnt", nl: "Eerste speler wint"},
                {en: "Random outcomes", es: "Resultados aleatorios", de: "Zufällige Ergebnisse", nl: "Willekeurige uitkomsten"},
                {en: "No theorem exists", es: "No existe teorema", de: "Kein Theorem vorhanden", nl: "Geen theorema bestaat"}
            ],
            correct: 0,
            explanation: {
                en: "Woolsey-Robertie master theorem: perfect play from both sides achieves exactly 50% equity in symmetrical positions, proving backgammon's theoretical balance.",
                es: "Teorema maestro Woolsey-Robertie: juego perfecto de ambos lados logra exactamente 50% equidad en po.",
                de: "Woolsey-Robertie Meister-Theorem: perfektes Spiel von beiden Seiten erreicht genau 50% Equity in sy.",
                nl: "Woolsey-Robertie meester theorema: perfect spel van beide kanten bereikt exact 50% equity in symmet."
            }
        }
    ]
};