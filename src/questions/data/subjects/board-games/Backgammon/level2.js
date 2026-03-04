// Backgammon - Level 2 (Elementary)
// Total: 100 questions
// Focus: Basic strategy, common positions, and essential tactics

module.exports = {
    questions: [
        // Questions 1-10: Opening theory and replies
        {
            question: {
                en: "What's the best reply to opponent's opening 3-1 (making their 5-point)?",
                es: "¿Cuál es la mejor respuesta al 3-1 de apertura del oponente (haciendo su punto 5)?",
                de: "Was ist die beste Antwort auf die 3-1 Eröffnung des Gegners (5-Punkt machen)?",
                nl: "Wat is het beste antwoord op tegenstanders opening 3-1 (hun 5-punt maken)?"
            },
            options: [
                {en: "Hit if possible", es: "Golpear si es posible", de: "Schlagen wenn möglich", nl: "Slaan indien mogelijk"},
                {en: "Always make your 5-point", es: "Siempre hacer tu punto 5", de: "Immer den eigenen 5-Punkt machen", nl: "Altijd je eigen 5-punt maken"},
                {en: "Run your back checkers", es: "Correr tus fichas traseras", de: "Hintere Steine laufen lassen", nl: "Je achterste stenen laten rennen"},
                {en: "Double immediately", es: "Doblar inmediatamente", de: "Sofort verdoppeln", nl: "Direct verdubbelen"}
            ],
            correct: 0,
            explanation: {
                en: "When opponent makes their 5-point early, hitting loose blots becomes more valuable as it prevents them from building on their advantage. The 5-point is strong but leaving blots against it is dangerous.",
                es: "Cuando el oponente hace su punto 5 temprano, golpear fichas sueltas se vuelve más valioso ya que evita que construyan sobre su ventaja.",
                de: "Wenn der Gegner früh seinen 5-Punkt macht, wird das Schlagen loser Blots wertvoller, da es verhindert, dass er seinen Vorteil ausbaut.",
                nl: "Wanneer de tegenstander vroeg hun 5-punt maakt, wordt het slaan van losse blots waardevoller omdat het voorkomt dat ze hun voordeel uitbouwen."
            }
        },
        {
            question: {
                en: "With an opening 6-4, what's considered the modern standard play?",
                es: "Con un 6-4 de apertura, ¿cuál es la jugada estándar moderna?",
                de: "Was ist mit einem 6-4 Eröffnungswurf der moderne Standardzug?",
                nl: "Met een opening 6-4, wat wordt beschouwd als de moderne standaard zet?"
            },
            options: [
                {en: "24/14 or 24/18 13/9", es: "24/14 o 24/18 13/9", de: "24/14 oder 24/18 13/9", nl: "24/14 of 24/18 13/9"},
                {en: "8/2 6/2", es: "8/2 6/2", de: "8/2 6/2", nl: "8/2 6/2"},
                {en: "13/7 13/9", es: "13/7 13/9", de: "13/7 13/9", nl: "13/7 13/9"},
                {en: "24/20 24/18", es: "24/20 24/18", de: "24/20 24/18", nl: "24/20 24/18"}
            ],
            correct: 0,
            explanation: {
                en: "Modern play favors 24/14 (running all the way) or 24/18 13/9 (splitting and bringing down a builder). Both moves aim to escape the back checkers while maintaining flexibility.",
                es: "El juego moderno favorece 24/14 (correr completamente) o 24/18 13/9 (dividir y bajar un constructor). Ambos movimientos buscan escapar las fichas traseras.",
                de: "Modernes Spiel bevorzugt 24/14 (komplett laufen) oder 24/18 13/9 (teilen und Builder bringen). Beide Züge zielen darauf ab, die hinteren Steine zu befreien.",
                nl: "Modern spel geeft voorkeur aan 24/14 (helemaal rennen) of 24/18 13/9 (splitsen en een bouwer naar beneden brengen)."
            }
        },
        {
            question: {
                en: "What's the key principle when opponent has a strong home board?",
                es: "¿Cuál es el principio clave cuando el oponente tiene un tablero fuerte?",
                de: "Was ist das Schlüsselprinzip, wenn der Gegner ein starkes Heimfeld hat?",
                nl: "Wat is het belangrijkste principe wanneer de tegenstander een sterk thuisveld heeft?"
            },
            options: [
                {en: "Avoid leaving shots", es: "Evitar dejar tiros", de: "Schüsse vermeiden", nl: "Vermijd het achterlaten van schoten"},
                {en: "Attack aggressively", es: "Atacar agresivamente", de: "Aggressiv angreifen", nl: "Agressief aanvallen"},
                {en: "Double early", es: "Doblar temprano", de: "Früh verdoppeln", nl: "Vroeg verdubbelen"},
                {en: "Make your 1-point", es: "Hacer tu punto 1", de: "Den 1-Punkt machen", nl: "Je 1-punt maken"}
            ],
            correct: 0,
            explanation: {
                en: "When opponent has a strong home board (4-5 points made), being hit is extremely dangerous. Play safe, avoid leaving shots, and wait for the opponent to break their board.",
                es: "Cuando el oponente tiene un tablero fuerte (4-5 puntos hechos), ser golpeado es extremadamente peligroso. Juega seguro y espera a que rompan su tablero.",
                de: "Wenn der Gegner ein starkes Heimfeld hat (4-5 Punkte), ist es extrem gefährlich, geschlagen zu werden. Sicher spielen und warten, bis er sein Brett aufbricht.",
                nl: "Wanneer de tegenstander een sterk thuisveld heeft (4-5 punten gemaakt), is geslagen worden extreem gevaarlijk. Speel veilig en wacht tot ze hun bord breken."
            }
        },
        {
            question: {
                en: "When should you usually refuse a double?",
                es: "¿Cuándo deberías normalmente rechazar un doble?",
                de: "Wann sollte man normalerweise eine Verdopplung ablehnen?",
                nl: "Wanneer moet je meestal een verdubbeling weigeren?"
            },
            options: [
                {en: "Below 25% winning chances", es: "Menos de 25% de ganar", de: "Unter 25% Gewinnchancen", nl: "Onder 25% winstkans"},
                {en: "Below 50% winning chances", es: "Menos de 50% de ganar", de: "Unter 50% Gewinnchancen", nl: "Onder 50% winstkans"},
                {en: "When behind in pip count", es: "Cuando estás atrás en pips", de: "Bei Pip-Count Rückstand", nl: "Wanneer achter in pip-telling"},
                {en: "Always take doubles", es: "Siempre tomar dobles", de: "Immer annehmen", nl: "Altijd verdubbeling accepteren"}
            ],
            correct: 0,
            explanation: {
                en: "The basic take point is 25% - if you have at least a 25% chance to win, you should take. This is because you risk 1 point by dropping but 2 by taking and losing (2:1 odds).",
                es: "El punto básico de toma es 25% - si tienes al menos 25% de ganar, debes tomar. Esto es porque arriesgas 1 punto al rechazar pero 2 al tomar y perder.",
                de: "Der Basis-Annahmepunkt ist 25% - bei mindestens 25% Gewinnchance sollte man annehmen. Man riskiert 1 Punkt beim Aufgeben aber 2 beim Annehmen und Verlieren.",
                nl: "Het basis aannamepunt is 25% - als je minstens 25% kans hebt om te winnen, moet je aannemen. Je riskeert 1 punt door op te geven maar 2 door te accepteren en verliezen."
            }
        },
        {
            question: {
                en: "What's the '5-point anchor' strategy good for?",
                es: "¿Para qué es buena la estrategia del 'ancla en punto 5'?",
                de: "Wofür ist die '5-Punkt-Anker' Strategie gut?",
                nl: "Waar is de '5-punt anker' strategie goed voor?"
            },
            options: [
                {en: "Holding games and back games", es: "Juegos de retención y traseros", de: "Haltespiele und Backgames", nl: "Holding games en back games"},
                {en: "Racing positions", es: "Posiciones de carrera", de: "Rennpositionen", nl: "Race posities"},
                {en: "Blitz attacks", es: "Ataques blitz", de: "Blitz-Angriffe", nl: "Blitz aanvallen"},
                {en: "Bearing off", es: "Sacar fichas", de: "Auswürfeln", nl: "Afspelen"}
            ],
            correct: 0,
            explanation: {
                en: "The opponent's 5-point (your 20-point) is an excellent anchor for holding games. It prevents opponent from making a prime, provides a landing spot when hit, and offers good winning chances even when behind.",
                es: "El punto 5 del oponente (tu punto 20) es un excelente ancla para juegos de retención. Previene que el oponente haga un prime y ofrece buenas chances de ganar.",
                de: "Der 5-Punkt des Gegners (eigener 20-Punkt) ist ein exzellenter Anker für Haltespiele. Er verhindert eine Prime und bietet gute Gewinnchancen.",
                nl: "Het 5-punt van de tegenstander (jouw 20-punt) is een uitstekend anker voor holding games. Het voorkomt een prime en biedt goede winstkansen."
            }
        },
        {
            question: {
                en: "What's a 'split and slot' opening strategy?",
                es: "¿Qué es la estrategia de apertura 'dividir y colocar'?",
                de: "Was ist die 'Split und Slot' Eröffnungsstrategie?",
                nl: "Wat is een 'split en slot' opening strategie?"
            },
            options: [
                {en: "Split back men, slot the 5-point", es: "Dividir traseras, colocar en punto 5", de: "Hintere teilen, 5-Punkt slotten", nl: "Achterste splitsen, 5-punt slotten"},
                {en: "Make two points", es: "Hacer dos puntos", de: "Zwei Punkte machen", nl: "Twee punten maken"},
                {en: "Run with both checkers", es: "Correr con ambas fichas", de: "Mit beiden Steinen laufen", nl: "Met beide stenen rennen"},
                {en: "Build a prime", es: "Construir un prime", de: "Eine Prime bauen", nl: "Een prime bouwen"}
            ],
            correct: 0,
            explanation: {
                en: "Split and slot means splitting your back checkers (usually 24/23) and slotting your 5-point (13/5 or 6/5). It's aggressive but aims to make key points quickly if not hit.",
                es: "Dividir y colocar significa dividir tus fichas traseras (usualmente 24/23) y colocar en tu punto 5 (13/5 o 6/5). Es agresivo pero busca hacer puntos clave rápido.",
                de: "Split und Slot bedeutet die hinteren Steine teilen (meist 24/23) und den 5-Punkt slotten (13/5 oder 6/5). Aggressiv aber zielt auf schnelle Schlüsselpunkte.",
                nl: "Split en slot betekent je achterste stenen splitsen (meestal 24/23) en je 5-punt slotten (13/5 of 6/5). Het is agressief maar probeert snel sleutelpunten te maken."
            }
        },
        {
            question: {
                en: "In a race, when should you generally double?",
                es: "En una carrera, ¿cuándo deberías generalmente doblar?",
                de: "In einem Rennen, wann sollte man generell verdoppeln?",
                nl: "In een race, wanneer moet je over het algemeen verdubbelen?"
            },
            options: [
                {en: "When ahead by 10% in pip count", es: "Cuando adelante por 10% en pips", de: "Bei 10% Vorsprung im Pip-Count", nl: "Bij 10% voorsprong in pip-telling"},
                {en: "When ahead by 50%", es: "Cuando adelante por 50%", de: "Bei 50% Vorsprung", nl: "Bij 50% voorsprong"},
                {en: "Never in races", es: "Nunca en carreras", de: "Nie in Rennen", nl: "Nooit in races"},
                {en: "Only when bearing off", es: "Solo cuando sacando", de: "Nur beim Auswürfeln", nl: "Alleen bij afspelen"}
            ],
            correct: 0,
            explanation: {
                en: "In a pure race, being ahead by about 10% in the pip count (adjusted for position) typically gives you a good double. The opponent usually has enough chances to take with less than 12% deficit.",
                es: "En una carrera pura, estar adelante por cerca del 10% en el conteo de pips típicamente da un buen doble. El oponente usualmente tiene suficientes chances para tomar.",
                de: "In einem reinen Rennen gibt ein Vorsprung von etwa 10% im Pip-Count typischerweise eine gute Verdopplung. Der Gegner hat meist genug Chancen zum Annehmen.",
                nl: "In een pure race, ongeveer 10% voorsprong in de pip-telling geeft typisch een goede verdubbeling. De tegenstander heeft meestal genoeg kansen om aan te nemen."
            }
        },
        {
            question: {
                en: "What's the 'golden point' and why is it important?",
                es: "¿Cuál es el 'punto dorado' y por qué es importante?",
                de: "Was ist der 'goldene Punkt' und warum ist er wichtig?",
                nl: "Wat is het 'gouden punt' en waarom is het belangrijk?"
            },
            options: [
                {en: "Your 5-point - blocks and builds", es: "Tu punto 5 - bloquea y construye", de: "Dein 5-Punkt - blockiert und baut", nl: "Je 5-punt - blokkeert en bouwt"},
                {en: "Your 1-point - safety", es: "Tu punto 1 - seguridad", de: "Dein 1-Punkt - Sicherheit", nl: "Je 1-punt - veiligheid"},
                {en: "The bar point", es: "El punto barra", de: "Der Bar-Punkt", nl: "Het bar-punt"},
                {en: "The 24-point", es: "El punto 24", de: "Der 24-Punkt", nl: "Het 24-punt"}
            ],
            correct: 0,
            explanation: {
                en: "Your 5-point is the 'golden point' because it blocks opponent's back checkers, works well with the 6-point to start a prime, and is a key point for both offense and defense.",
                es: "Tu punto 5 es el 'punto dorado' porque bloquea las fichas traseras del oponente, funciona bien con el punto 6 para empezar un prime, y es clave para ataque y defensa.",
                de: "Der eigene 5-Punkt ist der 'goldene Punkt', weil er die hinteren Steine des Gegners blockiert und gut mit dem 6-Punkt für eine Prime funktioniert.",
                nl: "Je 5-punt is het 'gouden punt' omdat het de achterste stenen van de tegenstander blokkeert en goed werkt met het 6-punt voor een prime."
            }
        },
        {
            question: {
                en: "When trailing in a race, what's often your best hope?",
                es: "Cuando vas perdiendo en una carrera, ¿cuál es tu mejor esperanza?",
                de: "Wenn man im Rennen zurückliegt, was ist oft die beste Hoffnung?",
                nl: "Wanneer je achterloopt in een race, wat is vaak je beste hoop?"
            },
            options: [
                {en: "Rolling doubles", es: "Sacar dobles", de: "Pasch würfeln", nl: "Dubbelen gooien"},
                {en: "Opponent rolling badly", es: "Que oponente saque mal", de: "Gegner würfelt schlecht", nl: "Tegenstander gooit slecht"},
                {en: "Getting a shot", es: "Conseguir un tiro", de: "Einen Schuss bekommen", nl: "Een schot krijgen"},
                {en: "Doubling immediately", es: "Doblar inmediatamente", de: "Sofort verdoppeln", nl: "Direct verdubbelen"}
            ],
            correct: 0,
            explanation: {
                en: "When behind in a race, rolling doubles is your best chance to catch up since doubles give you four moves instead of two. Multiple doubles can completely reverse a race.",
                es: "Cuando estás atrás en una carrera, sacar dobles es tu mejor chance de alcanzar ya que los dobles dan cuatro movimientos en lugar de dos.",
                de: "Wenn man im Rennen zurückliegt, ist Pasch würfeln die beste Chance aufzuholen, da Pasch vier Züge statt zwei gibt.",
                nl: "Wanneer je achterloopt in een race, is dubbelen gooien je beste kans om in te halen omdat dubbelen vier zetten geven in plaats van twee."
            }
        },
        {
            question: {
                en: "What's a 'mandatory double' in match play?",
                es: "¿Qué es un 'doble obligatorio' en juego de torneo?",
                de: "Was ist eine 'Pflicht-Verdopplung' im Match-Spiel?",
                nl: "Wat is een 'verplichte verdubbeling' in match play?"
            },
            options: [
                {en: "When trailing and need gammon", es: "Cuando atrás y necesitas gammon", de: "Zurückliegend und Gammon nötig", nl: "Achter en gammon nodig"},
                {en: "Opening double", es: "Doble de apertura", de: "Eröffnungs-Verdopplung", nl: "Opening verdubbeling"},
                {en: "At DMP", es: "En DMP", de: "Bei DMP", nl: "Bij DMP"},
                {en: "First game only", es: "Solo primer juego", de: "Nur erstes Spiel", nl: "Alleen eerste spel"}
            ],
            correct: 0,
            explanation: {
                en: "A mandatory double occurs when you're trailing and need a gammon to win the match (like trailing 1-3 in a 4-point match). You must double to activate gammons, even with small advantage.",
                es: "Un doble obligatorio ocurre cuando estás atrás y necesitas un gammon para ganar el partido. Debes doblar para activar gammons, incluso con pequeña ventaja.",
                de: "Eine Pflicht-Verdopplung tritt auf, wenn man zurückliegt und einen Gammon zum Sieg braucht. Man muss verdoppeln um Gammons zu aktivieren.",
                nl: "Een verplichte verdubbeling gebeurt wanneer je achterligt en een gammon nodig hebt om te winnen. Je moet verdubbelen om gammons te activeren."
            }
        },
        // Questions 11-20: Prime and blocking concepts
        {
            question: {
                en: "How many consecutive points make a 'prime'?",
                es: "¿Cuántos puntos consecutivos hacen un 'prime'?",
                de: "Wie viele aufeinanderfolgende Punkte bilden eine 'Prime'?",
                nl: "Hoeveel opeenvolgende punten maken een 'prime'?"
            },
            options: [
                {en: "6 points", es: "6 puntos", de: "6 Punkte", nl: "6 punten"},
                {en: "5 points", es: "5 puntos", de: "5 Punkte", nl: "5 punten"},
                {en: "4 points", es: "4 puntos", de: "4 Punkte", nl: "4 punten"},
                {en: "7 points", es: "7 puntos", de: "7 Punkte", nl: "7 punten"}
            ],
            correct: 0,
            explanation: {
                en: "A prime is exactly 6 consecutive occupied points. Since the maximum dice roll is 6, an opponent's checker trapped behind a prime cannot escape until the prime is broken.",
                es: "Un prime son exactamente 6 puntos consecutivos ocupados. Como la tirada máxima es 6, una ficha del oponente atrapada detrás no puede escapar hasta que se rompa.",
                de: "Eine Prime besteht aus genau 6 aufeinanderfolgenden besetzten Punkten. Da der maximale Wurf 6 ist, kann ein gegnerischer Stein dahinter nicht entkommen.",
                nl: "Een prime is precies 6 opeenvolgende bezette punten. Omdat de maximale worp 6 is, kan een steen van de tegenstander erachter niet ontsnappen."
            }
        },
        {
            question: {
                en: "What's the 'bar point' and its strategic value?",
                es: "¿Qué es el 'punto barra' y su valor estratégico?",
                de: "Was ist der 'Bar-Punkt' und sein strategischer Wert?",
                nl: "Wat is het 'bar-punt' en zijn strategische waarde?"
            },
            options: [
                {en: "Your 7-point, key for primes", es: "Tu punto 7, clave para primes", de: "Dein 7-Punkt, Schlüssel für Primes", nl: "Je 7-punt, sleutel voor primes"},
                {en: "The actual bar", es: "La barra real", de: "Die tatsächliche Bar", nl: "De werkelijke bar"},
                {en: "Your 1-point", es: "Tu punto 1", de: "Dein 1-Punkt", nl: "Je 1-punt"},
                {en: "Opponent's 7-point", es: "Punto 7 del oponente", de: "7-Punkt des Gegners", nl: "7-punt van tegenstander"}
            ],
            correct: 0,
            explanation: {
                en: "The bar point is your 7-point. It's strategically important because it works with the 6-point and 5-point to form primes, and blocks opponent's checkers from escaping via 6-1 or double 3s.",
                es: "El punto barra es tu punto 7. Es estratégicamente importante porque funciona con los puntos 6 y 5 para formar primes, y bloquea escape con 6-1 o doble 3.",
                de: "Der Bar-Punkt ist der eigene 7-Punkt. Er ist strategisch wichtig, weil er mit 6- und 5-Punkt Primes bildet und Flucht mit 6-1 oder Doppel-3 blockiert.",
                nl: "Het bar-punt is je 7-punt. Het is strategisch belangrijk omdat het met 6- en 5-punt primes vormt en ontsnapping met 6-1 of dubbel 3 blokkeert."
            }
        },
        {
            question: {
                en: "What is 'duplication' in backgammon strategy?",
                es: "¿Qué es 'duplicación' en estrategia de backgammon?",
                de: "Was ist 'Duplikation' in der Backgammon-Strategie?",
                nl: "Wat is 'duplicatie' in backgammon strategie?"
            },
            options: [
                {en: "Making opponent need same numbers", es: "Hacer que oponente necesite mismos números", de: "Gegner braucht gleiche Zahlen", nl: "Tegenstander zelfde getallen laten nodig hebben"},
                {en: "Rolling doubles", es: "Sacar dobles", de: "Pasch würfeln", nl: "Dubbelen gooien"},
                {en: "Doubling the cube", es: "Doblar el cubo", de: "Würfel verdoppeln", nl: "Kubus verdubbelen"},
                {en: "Making two points", es: "Hacer dos puntos", de: "Zwei Punkte machen", nl: "Twee punten maken"}
            ],
            correct: 0,
            explanation: {
                en: "Duplication means arranging your checkers so opponent needs the same dice numbers for different purposes (like needing 4 to hit AND 4 to cover). This reduces their effective rolls from 11 to about 6.",
                es: "Duplicación significa arreglar tus fichas para que el oponente necesite los mismos números para diferentes propósitos. Esto reduce sus tiradas efectivas de 11 a cerca de 6.",
                de: "Duplikation bedeutet, Steine so zu arrangieren, dass der Gegner gleiche Zahlen für verschiedene Zwecke braucht. Dies reduziert effektive Würfe von 11 auf etwa 6.",
                nl: "Duplicatie betekent je stenen zo arrangeren dat tegenstander dezelfde getallen voor verschillende doelen nodig heeft. Dit vermindert effectieve worpen van 11 naar ongeveer 6."
            }
        },
        {
            question: {
                en: "What's a 'blot-hitting contest' and when does it occur?",
                es: "¿Qué es un 'concurso de golpear blots' y cuándo ocurre?",
                de: "Was ist ein 'Blot-Schlag-Wettbewerb' und wann tritt er auf?",
                nl: "Wat is een 'blot-sla wedstrijd' en wanneer gebeurt het?"
            },
            options: [
                {en: "Early game mutual hitting", es: "Golpes mutuos temprano", de: "Frühes gegenseitiges Schlagen", nl: "Vroeg wederzijds slaan"},
                {en: "End game racing", es: "Carrera final", de: "Endspiel-Rennen", nl: "Eindspel race"},
                {en: "Bearing off phase", es: "Fase de sacar", de: "Auswürfelphase", nl: "Afspeelfase"},
                {en: "Opening moves", es: "Movimientos de apertura", de: "Eröffnungszüge", nl: "Openingszetten"}
            ],
            correct: 0,
            explanation: {
                en: "A blot-hitting contest occurs in early game when both players leave blots trying to make key points. Both sides hit each other repeatedly. Success depends on entering quickly and establishing board control.",
                es: "Un concurso de golpear ocurre temprano cuando ambos dejan blots tratando de hacer puntos clave. Ambos se golpean repetidamente. El éxito depende de entrar rápido y control del tablero.",
                de: "Ein Blot-Schlag-Wettbewerb tritt früh auf, wenn beide Blots lassen um Schlüsselpunkte zu machen. Erfolg hängt von schnellem Einsetzen und Brettkontrolle ab.",
                nl: "Een blot-sla wedstrijd gebeurt vroeg wanneer beiden blots laten om sleutelpunten te maken. Succes hangt af van snel binnenkomen en bordcontrole."
            }
        },
        {
            question: {
                en: "When is making your 1-point (ace-point) actually good?",
                es: "¿Cuándo es realmente bueno hacer tu punto 1?",
                de: "Wann ist es tatsächlich gut, den 1-Punkt zu machen?",
                nl: "Wanneer is je 1-punt maken eigenlijk goed?"
            },
            options: [
                {en: "When ahead and closing out opponent", es: "Cuando adelante y cerrando al oponente", de: "Wenn vorne und Gegner einschließend", nl: "Wanneer voor en tegenstander opsluitend"},
                {en: "Always in opening", es: "Siempre en apertura", de: "Immer in der Eröffnung", nl: "Altijd in opening"},
                {en: "Never good to make", es: "Nunca bueno hacerlo", de: "Nie gut zu machen", nl: "Nooit goed om te maken"},
                {en: "Only with 6-4 opening", es: "Solo con apertura 6-4", de: "Nur mit 6-4 Eröffnung", nl: "Alleen met 6-4 opening"}
            ],
            correct: 0,
            explanation: {
                en: "Making your 1-point is good when you're ahead and trying to close out opponent's checkers on the bar. Early in the game, it's too deep and doesn't help development, but late game it completes a prime.",
                es: "Hacer tu punto 1 es bueno cuando estás adelante y tratando de cerrar fichas del oponente en la barra. Temprano es muy profundo, pero tarde completa un prime.",
                de: "Den 1-Punkt zu machen ist gut, wenn man vorne liegt und Gegner-Steine auf der Bar einschließen will. Früh ist er zu tief, spät vervollständigt er eine Prime.",
                nl: "Je 1-punt maken is goed wanneer je voor ligt en tegenstander stenen op de bar probeert op te sluiten. Vroeg is het te diep, laat vervolledigt het een prime."
            }
        },
        {
            question: {
                en: "What's 'diversification' in backgammon?",
                es: "¿Qué es 'diversificación' en backgammon?",
                de: "Was ist 'Diversifikation' im Backgammon?",
                nl: "Wat is 'diversificatie' in backgammon?"
            },
            options: [
                {en: "Spreading checkers for flexibility", es: "Esparcir fichas para flexibilidad", de: "Steine für Flexibilität verteilen", nl: "Stenen verspreiden voor flexibiliteit"},
                {en: "Making many points", es: "Hacer muchos puntos", de: "Viele Punkte machen", nl: "Veel punten maken"},
                {en: "Running checkers", es: "Correr fichas", de: "Steine laufen lassen", nl: "Stenen laten rennen"},
                {en: "Doubling strategy", es: "Estrategia de doblar", de: "Verdopplungsstrategie", nl: "Verdubbeling strategie"}
            ],
            correct: 0,
            explanation: {
                en: "Diversification means spreading your checkers to maximize the number of good rolls next turn. Having builders on different points gives you more ways to make key points or hit blots.",
                es: "Diversificación significa esparcir tus fichas para maximizar buenos números el próximo turno. Tener constructores en diferentes puntos da más formas de hacer puntos clave.",
                de: "Diversifikation bedeutet, Steine zu verteilen um gute Würfe zu maximieren. Builder auf verschiedenen Punkten geben mehr Möglichkeiten für Schlüsselpunkte.",
                nl: "Diversificatie betekent je stenen verspreiden om goede worpen te maximaliseren. Bouwers op verschillende punten geven meer manieren om sleutelpunten te maken."
            }
        },
        {
            question: {
                en: "What's the 'back game' strategy?",
                es: "¿Qué es la estrategia de 'juego trasero'?",
                de: "Was ist die 'Backgame' Strategie?",
                nl: "Wat is de 'back game' strategie?"
            },
            options: [
                {en: "Hold 2+ anchors in opponent's home", es: "Mantener 2+ anclas en casa del oponente", de: "2+ Anker im gegnerischen Heimfeld", nl: "2+ ankers in tegenstanders thuis"},
                {en: "Run all checkers quickly", es: "Correr todas las fichas rápido", de: "Alle Steine schnell laufen", nl: "Alle stenen snel rennen"},
                {en: "Make your home board", es: "Hacer tu tablero", de: "Heimfeld machen", nl: "Je thuisveld maken"},
                {en: "Never leave shots", es: "Nunca dejar tiros", de: "Nie Schüsse lassen", nl: "Nooit schoten achterlaten"}
            ],
            correct: 0,
            explanation: {
                en: "A back game involves holding two or more anchors in opponent's home board while building your own board. You hope to hit a shot late when opponent bears off. It's a last-resort strategy when far behind.",
                es: "Un juego trasero involucra mantener dos o más anclas en el tablero del oponente mientras construyes el tuyo. Esperas golpear tarde cuando saca fichas.",
                de: "Ein Backgame bedeutet, zwei oder mehr Anker im gegnerischen Heimfeld zu halten während man das eigene baut. Man hofft auf einen späten Treffer.",
                nl: "Een back game houdt twee of meer ankers in tegenstanders thuisveld terwijl je je eigen bouwt. Je hoopt laat te slaan wanneer ze afspelen."
            }
        },
        {
            question: {
                en: "What is 'tempo loss' in backgammon?",
                es: "¿Qué es 'pérdida de tempo' en backgammon?",
                de: "Was ist 'Tempoverlust' im Backgammon?",
                nl: "Wat is 'tempo verlies' in backgammon?"
            },
            options: [
                {en: "Wasting a turn with inefficient move", es: "Desperdiciar turno con movimiento ineficiente", de: "Zug mit ineffizientem Zug verschwenden", nl: "Beurt verspillen met inefficiënte zet"},
                {en: "Playing too slowly", es: "Jugar muy lento", de: "Zu langsam spielen", nl: "Te langzaam spelen"},
                {en: "Losing the match", es: "Perder el partido", de: "Das Match verlieren", nl: "De wedstrijd verliezen"},
                {en: "Clock running out", es: "Reloj agotándose", de: "Zeit läuft ab", nl: "Klok loopt af"}
            ],
            correct: 0,
            explanation: {
                en: "Tempo loss occurs when you make a move that doesn't improve your position, essentially wasting half a roll. Common examples include unnecessary ace-point making or forced play with no constructive options.",
                es: "Pérdida de tempo ocurre cuando haces un movimiento que no mejora tu posición, esencialmente desperdiciando media tirada. Ejemplos incluyen hacer punto 1 innecesariamente.",
                de: "Tempoverlust tritt auf, wenn man einen Zug macht, der die Position nicht verbessert, im Grunde einen halben Wurf verschwendet.",
                nl: "Tempo verlies gebeurt wanneer je een zet maakt die je positie niet verbetert, in feite een halve worp verspilt."
            }
        },
        {
            question: {
                en: "When should you 'break your midpoint' (13-point)?",
                es: "¿Cuándo deberías 'romper tu punto medio' (punto 13)?",
                de: "Wann sollte man den 'Mittelpunkt brechen' (13-Punkt)?",
                nl: "Wanneer moet je je 'middelpunt breken' (13-punt)?"
            },
            options: [
                {en: "When opponent has strong home board", es: "Cuando oponente tiene tablero fuerte", de: "Wenn Gegner starkes Heimfeld hat", nl: "Wanneer tegenstander sterk thuisveld heeft"},
                {en: "Always keep it", es: "Siempre mantenerlo", de: "Immer behalten", nl: "Altijd behouden"},
                {en: "First move always", es: "Primer movimiento siempre", de: "Erster Zug immer", nl: "Eerste zet altijd"},
                {en: "Never break it", es: "Nunca romperlo", de: "Nie brechen", nl: "Nooit breken"}
            ],
            correct: 0,
            explanation: {
                en: "Break your midpoint when opponent has built a strong home board (4+ points). Keeping checkers there becomes dangerous as they can get trapped. Better to run them to safety or use them as builders.",
                es: "Rompe tu punto medio cuando el oponente tiene un tablero fuerte (4+ puntos). Mantener fichas ahí se vuelve peligroso. Mejor correrlas a seguridad o usarlas como constructores.",
                de: "Den Mittelpunkt brechen wenn der Gegner ein starkes Heimfeld hat (4+ Punkte). Steine dort zu halten wird gefährlich. Besser in Sicherheit laufen oder als Builder nutzen.",
                nl: "Breek je middelpunt wanneer tegenstander een sterk thuisveld heeft (4+ punten). Stenen daar houden wordt gevaarlijk. Beter naar veiligheid rennen of als bouwers gebruiken."
            }
        },
        {
            question: {
                en: "What's the 'containment game' strategy?",
                es: "¿Qué es la estrategia de 'juego de contención'?",
                de: "Was ist die 'Eindämmungsspiel' Strategie?",
                nl: "Wat is de 'insluitingsspel' strategie?"
            },
            options: [
                {en: "Trap checkers behind prime", es: "Atrapar fichas detrás de prime", de: "Steine hinter Prime fangen", nl: "Stenen achter prime vangen"},
                {en: "Keep cube centered", es: "Mantener cubo centrado", de: "Würfel zentriert halten", nl: "Kubus gecentreerd houden"},
                {en: "Never hit opponent", es: "Nunca golpear oponente", de: "Gegner nie schlagen", nl: "Tegenstander nooit slaan"},
                {en: "Always run forward", es: "Siempre correr adelante", de: "Immer vorwärts laufen", nl: "Altijd vooruit rennen"}
            ],
            correct: 0,
            explanation: {
                en: "Containment game involves building a prime to trap opponent's checkers, then rolling it forward while maintaining the blockade. The trapped checkers become huge liabilities as you improve your position.",
                es: "Juego de contención involucra construir un prime para atrapar fichas del oponente, luego rodarlo adelante manteniendo el bloqueo. Las fichas atrapadas se vuelven grandes problemas.",
                de: "Eindämmungsspiel bedeutet eine Prime zu bauen um gegnerische Steine zu fangen, dann vorwärts rollen während man die Blockade hält.",
                nl: "Insluitingsspel houdt in een prime bouwen om tegenstander stenen te vangen, dan vooruit rollen terwijl je de blokkade behoudt."
            }
        },
        // Questions 21-30: Doubling cube strategy
        {
            question: {
                en: "What's 'market losing sequence' in cube action?",
                es: "¿Qué es 'secuencia de pérdida de mercado' en acción del cubo?",
                de: "Was ist 'Marktverlust-Sequenz' bei Würfelaktionen?",
                nl: "Wat is 'markt verlies sequentie' bij kubus actie?"
            },
            options: [
                {en: "Good roll makes position too good", es: "Buen número hace posición muy buena", de: "Guter Wurf macht Position zu gut", nl: "Goede worp maakt positie te goed"},
                {en: "Losing the match", es: "Perder el partido", de: "Das Match verlieren", nl: "De wedstrijd verliezen"},
                {en: "Bad dice streak", es: "Mala racha de dados", de: "Schlechte Würfelserie", nl: "Slechte dobbelsteenreeks"},
                {en: "Cube at maximum", es: "Cubo al máximo", de: "Würfel am Maximum", nl: "Kubus op maximum"}
            ],
            correct: 0,
            explanation: {
                en: "Market losing sequence refers to rolls that would make your position too good to double (losing your market). If many rolls give you a powerful double next turn where opponent must pass, double now.",
                es: "Secuencia de pérdida de mercado se refiere a tiradas que harían tu posición muy buena para doblar. Si muchas tiradas dan un doble poderoso el próximo turno, dobla ahora.",
                de: "Marktverlust-Sequenz bezieht sich auf Würfe, die die Position zu gut zum Verdoppeln machen würden. Wenn viele Würfe eine zu starke Verdopplung ergeben, jetzt verdoppeln.",
                nl: "Markt verlies sequentie verwijst naar worpen die je positie te goed maken om te verdubbelen. Als veel worpen een te sterke verdubbeling geven, verdubbel nu."
            }
        },
        {
            question: {
                en: "What's 'volatility' in backgammon positions?",
                es: "¿Qué es 'volatilidad' en posiciones de backgammon?",
                de: "Was ist 'Volatilität' in Backgammon-Positionen?",
                nl: "Wat is 'volatiliteit' in backgammon posities?"
            },
            options: [
                {en: "How quickly position can change", es: "Qué rápido puede cambiar la posición", de: "Wie schnell sich Position ändern kann", nl: "Hoe snel positie kan veranderen"},
                {en: "Cube value", es: "Valor del cubo", de: "Würfelwert", nl: "Kubus waarde"},
                {en: "Number of blots", es: "Número de blots", de: "Anzahl der Blots", nl: "Aantal blots"},
                {en: "Match score", es: "Puntuación del partido", de: "Match-Stand", nl: "Wedstrijd score"}
            ],
            correct: 0,
            explanation: {
                en: "Volatility measures how dramatically a position can change with different rolls. High volatility (blots, contact) means double earlier; low volatility (race, no contact) allows waiting.",
                es: "Volatilidad mide cuán dramáticamente puede cambiar una posición con diferentes tiradas. Alta volatilidad significa doblar antes; baja volatilidad permite esperar.",
                de: "Volatilität misst, wie dramatisch sich eine Position mit verschiedenen Würfen ändern kann. Hohe Volatilität bedeutet früher verdoppeln; niedrige erlaubt warten.",
                nl: "Volatiliteit meet hoe dramatisch een positie kan veranderen met verschillende worpen. Hoge volatiliteit betekent eerder verdubbelen; lage staat wachten toe."
            }
        },
        {
            question: {
                en: "When should you redouble to 4?",
                es: "¿Cuándo deberías redoblar a 4?",
                de: "Wann sollte man auf 4 wiederverdoppeln?",
                nl: "Wanneer moet je herverdubbelen naar 4?"
            },
            options: [
                {en: "Around 70% winning chances", es: "Alrededor de 70% de ganar", de: "Etwa 70% Gewinnchancen", nl: "Ongeveer 70% winstkans"},
                {en: "Always at 50%", es: "Siempre al 50%", de: "Immer bei 50%", nl: "Altijd bij 50%"},
                {en: "Never redouble", es: "Nunca redoblar", de: "Nie wiederverdoppeln", nl: "Nooit herverdubbelen"},
                {en: "Only when bearing off", es: "Solo cuando sacando", de: "Nur beim Auswürfeln", nl: "Alleen bij afspelen"}
            ],
            correct: 0,
            explanation: {
                en: "Redoubling to 4 typically requires about 70% winning chances because you give opponent a powerful 8-cube. The higher the cube, the more conservative your doubling should be.",
                es: "Redoblar a 4 típicamente requiere cerca de 70% de ganar porque das al oponente un poderoso cubo de 8. Mientras más alto el cubo, más conservador debes ser.",
                de: "Auf 4 wiederverdoppeln erfordert typischerweise etwa 70% Gewinnchancen, da man dem Gegner einen mächtigen 8-Würfel gibt.",
                nl: "Herverdubbelen naar 4 vereist typisch ongeveer 70% winstkans omdat je tegenstander een krachtige 8-kubus geeft."
            }
        },
        {
            question: {
                en: "What's 'recube vig' (vigorish)?",
                es: "¿Qué es 'recube vig' (vigorish)?",
                de: "Was ist 'Recube Vig' (Vigorish)?",
                nl: "Wat is 'recube vig' (vigorish)?"
            },
            options: [
                {en: "Value of owning the cube", es: "Valor de poseer el cubo", de: "Wert des Würfelbesitzes", nl: "Waarde van kubus bezit"},
                {en: "Cube at center", es: "Cubo en el centro", de: "Würfel in der Mitte", nl: "Kubus in het midden"},
                {en: "Maximum cube value", es: "Valor máximo del cubo", de: "Maximaler Würfelwert", nl: "Maximum kubus waarde"},
                {en: "Doubling too early", es: "Doblar muy temprano", de: "Zu früh verdoppeln", nl: "Te vroeg verdubbelen"}
            ],
            correct: 0,
            explanation: {
                en: "Recube vig is the extra value from owning the cube - the exclusive right to redouble. This ownership is worth about 10-15% extra equity, which is why you can take with only 25% chances.",
                es: "Recube vig es el valor extra de poseer el cubo - el derecho exclusivo de redoblar. Esta propiedad vale cerca de 10-15% de equidad extra.",
                de: "Recube Vig ist der Zusatzwert des Würfelbesitzes - das exklusive Recht wiederzuverdoppeln. Dieser Besitz ist etwa 10-15% zusätzliche Equity wert.",
                nl: "Recube vig is de extra waarde van kubus eigendom - het exclusieve recht om te herverdubbelen. Dit bezit is ongeveer 10-15% extra equity waard."
            }
        },
        {
            question: {
                en: "What's 'Woolsey's rule' for doubling?",
                es: "¿Qué es la 'regla de Woolsey' para doblar?",
                de: "Was ist 'Woolseys Regel' fürs Verdoppeln?",
                nl: "Wat is 'Woolsey's regel' voor verdubbelen?"
            },
            options: [
                {en: "Double if opponent should drop", es: "Dobla si oponente debería rechazar", de: "Verdoppeln wenn Gegner aufgeben sollte", nl: "Verdubbel als tegenstander moet opgeven"},
                {en: "Never double early", es: "Nunca doblar temprano", de: "Nie früh verdoppeln", nl: "Nooit vroeg verdubbelen"},
                {en: "Always double at 60%", es: "Siempre doblar al 60%", de: "Immer bei 60% verdoppeln", nl: "Altijd verdubbelen bij 60%"},
                {en: "Double on every turn", es: "Doblar cada turno", de: "Jeden Zug verdoppeln", nl: "Elke beurt verdubbelen"}
            ],
            correct: 0,
            explanation: {
                en: "Woolsey's rule states: if you're not sure whether to double, ask if you're confident opponent should pass. If yes, you must be too good to double. If no, then it's probably a double.",
                es: "La regla de Woolsey dice: si no estás seguro de doblar, pregunta si confías que el oponente debería rechazar. Si sí, estás muy bien. Si no, probablemente es doble.",
                de: "Woolseys Regel besagt: Wenn unsicher ob verdoppeln, frage ob Gegner aufgeben sollte. Wenn ja, zu gut zum Verdoppeln. Wenn nein, dann wahrscheinlich verdoppeln.",
                nl: "Woolsey's regel stelt: als je niet zeker bent of je moet verdubbelen, vraag of tegenstander moet opgeven. Zo ja, te goed. Zo nee, waarschijnlijk verdubbelen."
            }
        },
        {
            question: {
                en: "What's 'too good to double' position?",
                es: "¿Qué es posición 'muy buena para doblar'?",
                de: "Was ist eine 'zu gut zum Verdoppeln' Position?",
                nl: "Wat is een 'te goed om te verdubbelen' positie?"
            },
            options: [
                {en: "Better to play on for gammon", es: "Mejor jugar por gammon", de: "Besser auf Gammon spielen", nl: "Beter spelen voor gammon"},
                {en: "50% winning chances", es: "50% de ganar", de: "50% Gewinnchancen", nl: "50% winstkans"},
                {en: "Behind in race", es: "Atrás en carrera", de: "Im Rennen zurück", nl: "Achter in race"},
                {en: "Early game position", es: "Posición temprana", de: "Frühe Spielposition", nl: "Vroege spel positie"}
            ],
            correct: 0,
            explanation: {
                en: "Too good to double means your position is so strong that opponent would correctly pass, but you have good gammon chances. Better to play on for the gammon than cash a single point.",
                es: "Muy bueno para doblar significa que tu posición es tan fuerte que el oponente correctamente rechazaría, pero tienes buenas chances de gammon. Mejor jugar por el gammon.",
                de: "Zu gut zum Verdoppeln bedeutet, die Position ist so stark dass der Gegner korrekt aufgibt, aber man hat gute Gammon-Chancen. Besser auf Gammon spielen.",
                nl: "Te goed om te verdubbelen betekent dat je positie zo sterk is dat tegenstander correct opgeeft, maar je hebt goede gammon kansen. Beter spelen voor gammon."
            }
        },
        {
            question: {
                en: "What's 'cube leverage' in match play?",
                es: "¿Qué es 'apalancamiento del cubo' en torneos?",
                de: "Was ist 'Würfel-Hebelwirkung' im Match?",
                nl: "Wat is 'kubus hefboomwerking' in match play?"
            },
            options: [
                {en: "How cube affects match equity", es: "Cómo el cubo afecta equidad", de: "Wie Würfel Match-Equity beeinflusst", nl: "Hoe kubus match equity beïnvloedt"},
                {en: "Physical cube position", es: "Posición física del cubo", de: "Physische Würfelposition", nl: "Fysieke kubus positie"},
                {en: "Cube at 64", es: "Cubo en 64", de: "Würfel auf 64", nl: "Kubus op 64"},
                {en: "Never using cube", es: "Nunca usar cubo", de: "Würfel nie nutzen", nl: "Kubus nooit gebruiken"}
            ],
            correct: 0,
            explanation: {
                en: "Cube leverage measures how much the cube affects match winning chances at different scores. High leverage (like 2-away/4-away) means cube decisions are critical; low leverage means less impact.",
                es: "Apalancamiento del cubo mide cuánto el cubo afecta las chances de ganar el partido en diferentes puntuaciones. Alto apalancamiento significa decisiones críticas.",
                de: "Würfel-Hebelwirkung misst, wie sehr der Würfel die Match-Gewinnchancen bei verschiedenen Ständen beeinflusst. Hohe Hebelwirkung bedeutet kritische Entscheidungen.",
                nl: "Kubus hefboomwerking meet hoeveel de kubus wedstrijd winstkansen beïnvloedt bij verschillende scores. Hoge hefboomwerking betekent kritische beslissingen."
            }
        },
        {
            question: {
                en: "What's 'dead cube' in match play?",
                es: "¿Qué es 'cubo muerto' en torneos?",
                de: "Was ist ein 'toter Würfel' im Match?",
                nl: "Wat is 'dode kubus' in match play?"
            },
            options: [
                {en: "Cube can't affect match outcome", es: "Cubo no puede afectar resultado", de: "Würfel kann Ausgang nicht beeinflussen", nl: "Kubus kan uitkomst niet beïnvloeden"},
                {en: "Cube at 1", es: "Cubo en 1", de: "Würfel auf 1", nl: "Kubus op 1"},
                {en: "Broken cube", es: "Cubo roto", de: "Kaputter Würfel", nl: "Kapotte kubus"},
                {en: "Cube in center", es: "Cubo en centro", de: "Würfel in Mitte", nl: "Kubus in midden"}
            ],
            correct: 0,
            explanation: {
                en: "Dead cube occurs when further doubling can't affect the match outcome (like leading 4-1 in 5-point match with 2-cube). The leader plays differently knowing opponent can't use cube effectively.",
                es: "Cubo muerto ocurre cuando doblar más no puede afectar el resultado del partido. El líder juega diferente sabiendo que el oponente no puede usar el cubo efectivamente.",
                de: "Toter Würfel tritt auf, wenn weitere Verdopplung das Match-Ergebnis nicht beeinflussen kann. Der Führende spielt anders, wissend dass der Gegner den Würfel nicht effektiv nutzen kann.",
                nl: "Dode kubus gebeurt wanneer verder verdubbelen de wedstrijd uitkomst niet kan beïnvloeden. De leider speelt anders wetend dat tegenstander kubus niet effectief kan gebruiken."
            }
        },
        {
            question: {
                en: "What's 'free drop' in match play?",
                es: "¿Qué es 'rechazo gratis' en torneos?",
                de: "Was ist ein 'kostenloser Drop' im Match?",
                nl: "Wat is 'gratis drop' in match play?"
            },
            options: [
                {en: "Drop costs same as taking and losing", es: "Rechazar cuesta igual que tomar y perder", de: "Aufgeben kostet gleich wie Annehmen und Verlieren", nl: "Opgeven kost zelfde als aannemen en verliezen"},
                {en: "Never drop", es: "Nunca rechazar", de: "Nie aufgeben", nl: "Nooit opgeven"},
                {en: "Always drop", es: "Siempre rechazar", de: "Immer aufgeben", nl: "Altijd opgeven"},
                {en: "First game only", es: "Solo primer juego", de: "Nur erstes Spiel", nl: "Alleen eerste spel"}
            ],
            correct: 0,
            explanation: {
                en: "Free drop occurs at certain match scores where dropping costs the same as taking and losing (like trailing 1-2 in 5-point match). You can drop more aggressively since there's no extra penalty.",
                es: "Rechazo gratis ocurre en ciertas puntuaciones donde rechazar cuesta igual que tomar y perder. Puedes rechazar más agresivamente sin penalidad extra.",
                de: "Kostenloser Drop tritt bei bestimmten Ständen auf, wo Aufgeben gleich viel kostet wie Annehmen und Verlieren. Man kann aggressiver aufgeben ohne Zusatzstrafe.",
                nl: "Gratis drop gebeurt bij bepaalde scores waar opgeven evenveel kost als aannemen en verliezen. Je kunt agressiever opgeven zonder extra straf."
            }
        },
        {
            question: {
                en: "What's 'automatic redouble' in match play?",
                es: "¿Qué es 'redoble automático' en torneos?",
                de: "Was ist 'automatische Wiederverdopplung' im Match?",
                nl: "Wat is 'automatische herverdubbeling' in match play?"
            },
            options: [
                {en: "Must redouble with any advantage", es: "Debe redoblar con cualquier ventaja", de: "Muss mit jedem Vorteil wiederverdoppeln", nl: "Moet herverdubbelen met elk voordeel"},
                {en: "Never redouble", es: "Nunca redoblar", de: "Nie wiederverdoppeln", nl: "Nooit herverdubbelen"},
                {en: "Computer decides", es: "Computadora decide", de: "Computer entscheidet", nl: "Computer beslist"},
                {en: "Opening double", es: "Doble de apertura", de: "Eröffnungsverdopplung", nl: "Opening verdubbeling"}
            ],
            correct: 0,
            explanation: {
                en: "Automatic redouble happens when trailing player owns a dead cube (like trailing 1-3 in 4-point match with 2-cube). Any advantage warrants redoubling since you need 2 points to win anyway.",
                es: "Redoble automático ocurre cuando el jugador que va perdiendo posee un cubo muerto. Cualquier ventaja justifica redoblar ya que necesitas 2 puntos para ganar de todos modos.",
                de: "Automatische Wiederverdopplung passiert wenn der Zurückliegende einen toten Würfel besitzt. Jeder Vorteil rechtfertigt Wiederverdopplung da man sowieso 2 Punkte braucht.",
                nl: "Automatische herverdubbeling gebeurt wanneer achterblijvende speler een dode kubus bezit. Elk voordeel rechtvaardigt herverdubbeling omdat je toch 2 punten nodig hebt."
            }
        },
        // Questions 31-40: Bearing off and endgame
        {
            question: {
                en: "What's the 'bear off with contact' principle?",
                es: "¿Cuál es el principio de 'sacar con contacto'?",
                de: "Was ist das Prinzip 'Auswürfeln mit Kontakt'?",
                nl: "Wat is het 'afspelen met contact' principe?"
            },
            options: [
                {en: "Safety first, then speed", es: "Seguridad primero, luego velocidad", de: "Sicherheit zuerst, dann Geschwindigkeit", nl: "Veiligheid eerst, dan snelheid"},
                {en: "Speed is everything", es: "Velocidad es todo", de: "Geschwindigkeit ist alles", nl: "Snelheid is alles"},
                {en: "Never bear off", es: "Nunca sacar", de: "Nie auswürfeln", nl: "Nooit afspelen"},
                {en: "Hit whenever possible", es: "Golpear cuando sea posible", de: "Schlagen wann immer möglich", nl: "Slaan wanneer mogelijk"}
            ],
            correct: 0,
            explanation: {
                en: "When bearing off with contact (opponent has anchor in your home), prioritize safety over speed. Leave fewer shots even if it means bearing off fewer checkers. One hit can lose the game.",
                es: "Cuando sacas con contacto (oponente tiene ancla en tu tablero), prioriza seguridad sobre velocidad. Deja menos tiros aunque signifique sacar menos fichas.",
                de: "Beim Auswürfeln mit Kontakt (Gegner hat Anker im Heimfeld), Sicherheit vor Geschwindigkeit. Weniger Schüsse lassen auch wenn man weniger Steine auswürfelt.",
                nl: "Bij afspelen met contact (tegenstander heeft anker in jouw thuis), prioriteer veiligheid boven snelheid. Laat minder schoten ook als het betekent minder stenen afspelen."
            }
        },
        {
            question: {
                en: "When bearing off, what's the 'gap principle'?",
                es: "Al sacar fichas, ¿qué es el 'principio del hueco'?",
                de: "Was ist das 'Lücken-Prinzip' beim Auswürfeln?",
                nl: "Wat is het 'gat principe' bij afspelen?"
            },
            options: [
                {en: "Avoid gaps on high points", es: "Evitar huecos en puntos altos", de: "Lücken auf hohen Punkten vermeiden", nl: "Vermijd gaten op hoge punten"},
                {en: "Create many gaps", es: "Crear muchos huecos", de: "Viele Lücken schaffen", nl: "Veel gaten maken"},
                {en: "Gaps don't matter", es: "Huecos no importan", de: "Lücken sind egal", nl: "Gaten doen er niet toe"},
                {en: "Only gap on 1-point", es: "Solo hueco en punto 1", de: "Nur Lücke auf 1-Punkt", nl: "Alleen gat op 1-punt"}
            ],
            correct: 0,
            explanation: {
                en: "Avoid gaps (empty points) on high points (4, 5, 6) when bearing off. Gaps force you to waste pips with large rolls. Keep checkers distributed smoothly for efficient bearing off.",
                es: "Evita huecos (puntos vacíos) en puntos altos (4, 5, 6) al sacar. Los huecos te fuerzan a desperdiciar pips con tiradas grandes. Mantén fichas distribuidas suavemente.",
                de: "Lücken (leere Punkte) auf hohen Punkten (4, 5, 6) beim Auswürfeln vermeiden. Lücken zwingen Pips mit großen Würfen zu verschwenden.",
                nl: "Vermijd gaten (lege punten) op hoge punten (4, 5, 6) bij afspelen. Gaten dwingen je pips te verspillen met grote worpen."
            }
        },
        {
            question: {
                en: "What's 'crossover' in bearing off?",
                es: "¿Qué es 'cruce' al sacar fichas?",
                de: "Was ist 'Übergang' beim Auswürfeln?",
                nl: "Wat is 'crossover' bij afspelen?"
            },
            options: [
                {en: "Moving checkers into home board", es: "Mover fichas al tablero propio", de: "Steine ins Heimfeld bewegen", nl: "Stenen naar thuisveld bewegen"},
                {en: "Bearing off checkers", es: "Sacar fichas", de: "Steine auswürfeln", nl: "Stenen afspelen"},
                {en: "Hitting opponent", es: "Golpear oponente", de: "Gegner schlagen", nl: "Tegenstander slaan"},
                {en: "Making prime", es: "Hacer prime", de: "Prime machen", nl: "Prime maken"}
            ],
            correct: 0,
            explanation: {
                en: "Crossover refers to moving checkers from outer board into home board before bearing off. Minimizing crossovers (having fewer checkers outside) speeds up bearing off significantly.",
                es: "Cruce se refiere a mover fichas del tablero exterior al tablero propio antes de sacar. Minimizar cruces (tener menos fichas afuera) acelera sacar significativamente.",
                de: "Übergang bezieht sich auf Steine vom äußeren ins Heimfeld bewegen vor dem Auswürfeln. Übergänge minimieren beschleunigt das Auswürfeln erheblich.",
                nl: "Crossover verwijst naar stenen van buiten naar thuisveld bewegen voor afspelen. Crossovers minimaliseren versnelt afspelen aanzienlijk."
            }
        },
        {
            question: {
                en: "In bear off races, when should you usually redouble?",
                es: "En carreras de sacar, ¿cuándo deberías redoblar?",
                de: "In Auswürfel-Rennen, wann sollte man wiederverdoppeln?",
                nl: "In afspeel races, wanneer moet je herverdubbelen?"
            },
            options: [
                {en: "When ahead by 10-15%", es: "Cuando adelante por 10-15%", de: "Bei 10-15% Vorsprung", nl: "Bij 10-15% voorsprong"},
                {en: "Never in races", es: "Nunca en carreras", de: "Nie in Rennen", nl: "Nooit in races"},
                {en: "Always immediately", es: "Siempre inmediatamente", de: "Immer sofort", nl: "Altijd direct"},
                {en: "Only with 90% chances", es: "Solo con 90% chances", de: "Nur mit 90% Chancen", nl: "Alleen met 90% kansen"}
            ],
            correct: 0,
            explanation: {
                en: "In bear off races, redouble when ahead by about 10-15% (adjusted for position). The position is less volatile than earlier phases, allowing more precise cube decisions based on pip count.",
                es: "En carreras de sacar, redobla cuando adelante por 10-15%. La posición es menos volátil que fases anteriores, permitiendo decisiones de cubo más precisas.",
                de: "In Auswürfel-Rennen bei etwa 10-15% Vorsprung wiederverdoppeln. Die Position ist weniger volatil als frühere Phasen, was präzisere Würfelentscheidungen erlaubt.",
                nl: "In afspeel races, herverdubbel bij ongeveer 10-15% voorsprong. De positie is minder volatiel dan eerdere fases, wat preciezere kubus beslissingen toestaat."
            }
        },
        {
            question: {
                en: "What's the 'wastage' concept in bearing off?",
                es: "¿Qué es el concepto de 'desperdicio' al sacar?",
                de: "Was ist das 'Verschwendungs'-Konzept beim Auswürfeln?",
                nl: "Wat is het 'verspilling' concept bij afspelen?"
            },
            options: [
                {en: "Pips lost to inefficient rolls", es: "Pips perdidos por tiradas ineficientes", de: "Durch ineffiziente Würfe verlorene Pips", nl: "Pips verloren door inefficiënte worpen"},
                {en: "Leaving blots", es: "Dejar blots", de: "Blots lassen", nl: "Blots achterlaten"},
                {en: "Using cube", es: "Usar cubo", de: "Würfel nutzen", nl: "Kubus gebruiken"},
                {en: "Time management", es: "Gestión de tiempo", de: "Zeitmanagement", nl: "Tijd management"}
            ],
            correct: 0,
            explanation: {
                en: "Wastage is pips lost when rolls are larger than needed (rolling 6-6 with checkers only on 2-point wastes 20 pips). Minimize wastage by keeping checkers on higher points during bear off.",
                es: "Desperdicio son pips perdidos cuando las tiradas son mayores que lo necesario. Minimiza desperdicio manteniendo fichas en puntos altos durante el sacar.",
                de: "Verschwendung sind verlorene Pips wenn Würfe größer als nötig sind. Verschwendung minimieren durch Steine auf höheren Punkten beim Auswürfeln.",
                nl: "Verspilling zijn verloren pips wanneer worpen groter zijn dan nodig. Minimaliseer verspilling door stenen op hogere punten te houden tijdens afspelen."
            }
        },
        {
            question: {
                en: "What's 'killing numbers' in backgammon?",
                es: "¿Qué es 'matar números' en backgammon?",
                de: "Was ist 'Zahlen töten' im Backgammon?",
                nl: "Wat is 'getallen doden' in backgammon?"
            },
            options: [
                {en: "Making rolls play badly for opponent", es: "Hacer que tiradas jueguen mal para oponente", de: "Würfe für Gegner schlecht spielen lassen", nl: "Worpen slecht laten spelen voor tegenstander"},
                {en: "Rolling doubles", es: "Sacar dobles", de: "Pasch würfeln", nl: "Dubbelen gooien"},
                {en: "Blocking dice", es: "Bloquear dados", de: "Würfel blockieren", nl: "Dobbelstenen blokkeren"},
                {en: "Counting pips", es: "Contar pips", de: "Pips zählen", nl: "Pips tellen"}
            ],
            correct: 0,
            explanation: {
                en: "Killing numbers means arranging your checkers so specific rolls play awkwardly for opponent. For example, making their 6s play badly by occupying points 6 pips from their checkers.",
                es: "Matar números significa arreglar tus fichas para que tiradas específicas jueguen mal para el oponente. Por ejemplo, hacer que sus 6s jueguen mal ocupando puntos a 6 pips.",
                de: "Zahlen töten bedeutet, Steine so zu arrangieren dass spezifische Würfe für den Gegner schlecht spielen. Zum Beispiel 6er schlecht spielen lassen.",
                nl: "Getallen doden betekent je stenen zo arrangeren dat specifieke worpen slecht spelen voor tegenstander. Bijvoorbeeld hun 6en slecht laten spelen."
            }
        },
        {
            question: {
                en: "What's 'clearing from the rear' principle?",
                es: "¿Qué es el principio de 'limpiar desde atrás'?",
                de: "Was ist das 'Von hinten räumen' Prinzip?",
                nl: "Wat is het 'van achteren opruimen' principe?"
            },
            options: [
                {en: "Bear off from lowest points first", es: "Sacar de puntos más bajos primero", de: "Von niedrigsten Punkten zuerst auswürfeln", nl: "Eerst van laagste punten afspelen"},
                {en: "Bear off from 6-point first", es: "Sacar del punto 6 primero", de: "Vom 6-Punkt zuerst auswürfeln", nl: "Eerst van 6-punt afspelen"},
                {en: "Random bearing off", es: "Sacar aleatoriamente", de: "Zufälliges Auswürfeln", nl: "Willekeurig afspelen"},
                {en: "Never clear rear", es: "Nunca limpiar atrás", de: "Nie hinten räumen", nl: "Nooit achter opruimen"}
            ],
            correct: 0,
            explanation: {
                en: "Clear from the rear means bear off checkers from lower points (1, 2, 3) before higher ones when possible. This reduces wastage and maintains flexibility for different roll combinations.",
                es: "Limpiar desde atrás significa sacar fichas de puntos bajos (1, 2, 3) antes que los altos cuando sea posible. Esto reduce desperdicio y mantiene flexibilidad.",
                de: "Von hinten räumen bedeutet, Steine von niedrigen Punkten (1, 2, 3) vor höheren auswürfeln wenn möglich. Dies reduziert Verschwendung.",
                nl: "Van achteren opruimen betekent stenen van lage punten (1, 2, 3) voor hogere afspelen indien mogelijk. Dit vermindert verspilling."
            }
        },
        {
            question: {
                en: "What's 'checker play vs cube play' dilemma?",
                es: "¿Qué es el dilema 'juego de fichas vs juego de cubo'?",
                de: "Was ist das 'Steinspiel vs Würfelspiel' Dilemma?",
                nl: "Wat is het 'stenen spel vs kubus spel' dilemma?"
            },
            options: [
                {en: "Different best moves for each", es: "Diferentes mejores jugadas para cada uno", de: "Unterschiedliche beste Züge für beide", nl: "Verschillende beste zetten voor elk"},
                {en: "Always same move", es: "Siempre misma jugada", de: "Immer gleicher Zug", nl: "Altijd zelfde zet"},
                {en: "Ignore the cube", es: "Ignorar el cubo", de: "Würfel ignorieren", nl: "Kubus negeren"},
                {en: "Cube doesn't matter", es: "Cubo no importa", de: "Würfel ist egal", nl: "Kubus doet er niet toe"}
            ],
            correct: 0,
            explanation: {
                en: "Sometimes the best checker play (for winning) differs from best cube play (for cube action). In money games, prioritize cube play; in match play at certain scores, checker play may dominate.",
                es: "A veces el mejor juego de fichas (para ganar) difiere del mejor juego de cubo (para acción del cubo). En juegos por dinero, prioriza juego de cubo.",
                de: "Manchmal unterscheidet sich das beste Steinspiel (zum Gewinnen) vom besten Würfelspiel (für Würfelaktion). In Geldspielen Würfelspiel priorisieren.",
                nl: "Soms verschilt het beste stenen spel (voor winnen) van beste kubus spel (voor kubus actie). In geldspellen, prioriteer kubus spel."
            }
        },
        {
            question: {
                en: "What's 'opposition' in endgame races?",
                es: "¿Qué es 'oposición' en carreras finales?",
                de: "Was ist 'Opposition' in Endspiel-Rennen?",
                nl: "Wat is 'oppositie' in eindspel races?"
            },
            options: [
                {en: "Whose turn affects winning chances", es: "De quién es el turno afecta chances", de: "Wessen Zug beeinflusst Gewinnchancen", nl: "Wiens beurt beïnvloedt winstkansen"},
                {en: "Being behind", es: "Estar atrás", de: "Zurückliegen", nl: "Achterliggen"},
                {en: "Opponent's position", es: "Posición del oponente", de: "Gegnerposition", nl: "Tegenstander positie"},
                {en: "Cube ownership", es: "Propiedad del cubo", de: "Würfelbesitz", nl: "Kubus eigendom"}
            ],
            correct: 0,
            explanation: {
                en: "Opposition refers to whose turn it is in close races. Having the roll (opposition) is worth about 3 pips in a race. In very close endings, opposition often determines the winner.",
                es: "Oposición se refiere a de quién es el turno en carreras cerradas. Tener el turno vale cerca de 3 pips en una carrera. En finales muy cerrados, determina el ganador.",
                de: "Opposition bezieht sich darauf, wer in engen Rennen am Zug ist. Den Zug haben ist etwa 3 Pips wert. In sehr engen Endspielen bestimmt Opposition oft den Sieger.",
                nl: "Oppositie verwijst naar wiens beurt het is in krappe races. De beurt hebben is ongeveer 3 pips waard. In zeer krappe eindes bepaalt oppositie vaak de winnaar."
            }
        },
        {
            question: {
                en: "What's 'Trice's effective pip count'?",
                es: "¿Qué es el 'conteo efectivo de pips de Trice'?",
                de: "Was ist 'Trices effektiver Pip-Count'?",
                nl: "Wat is 'Trice's effectieve pip-telling'?"
            },
            options: [
                {en: "Adjusted count for wastage", es: "Conteo ajustado por desperdicio", de: "Angepasste Zählung für Verschwendung", nl: "Aangepaste telling voor verspilling"},
                {en: "Simple pip count", es: "Conteo simple de pips", de: "Einfacher Pip-Count", nl: "Simpele pip-telling"},
                {en: "Doubling point", es: "Punto de doblar", de: "Verdopplungspunkt", nl: "Verdubbeling punt"},
                {en: "Number of checkers", es: "Número de fichas", de: "Anzahl Steine", nl: "Aantal stenen"}
            ],
            correct: 0,
            explanation: {
                en: "Trice's effective pip count (EPC) adjusts raw pip count for wastage and position quality. It adds penalties for checkers on low points and gaps, giving more accurate race assessment than simple pip count.",
                es: "El conteo efectivo de Trice ajusta el conteo crudo por desperdicio y calidad de posición. Añade penalizaciones por fichas en puntos bajos y huecos.",
                de: "Trices effektiver Pip-Count passt den rohen Count für Verschwendung und Positionsqualität an. Er fügt Strafen für Steine auf niedrigen Punkten hinzu.",
                nl: "Trice's effectieve pip-telling past ruwe telling aan voor verspilling en positie kwaliteit. Het voegt straffen toe voor stenen op lage punten."
            }
        }
        // Questions 41-50: Reference positions and pip counting
        {
            question: {
                en: "What's the pip count for the starting position?",
                es: "¿Cuál es el conteo de pips para la posición inicial?",
                de: "Was ist die Pip-Zählung für die Startposition?",
                nl: "Wat is de pip-telling voor de startpositie?"
            },
            options: [
                {en: "167 per player", es: "167 por jugador", de: "167 pro Spieler", nl: "167 per speler"},
                {en: "165 per player", es: "165 por jugador", de: "165 pro Spieler", nl: "165 per speler"},
                {en: "170 per player", es: "170 por jugador", de: "170 pro Spieler", nl: "170 per speler"},
                {en: "160 per player", es: "160 por jugador", de: "160 pro Spieler", nl: "160 per speler"}
            ],
            correct: 0,
            explanation: {
                en: "Each player starts with 167 pips: 2×24 + 5×13 + 3×8 + 5×6 = 48 + 65 + 24 + 30 = 167. This is the baseline for pip counting in races.",
                es: "Cada jugador comienza con 167 pips: 2×24 + 5×13 + 3×8 + 5×6 = 167. Esta es la base para el conteo de pips en carreras.",
                de: "Jeder Spieler beginnt mit 167 Pips: 2×24 + 5×13 + 3×8 + 5×6 = 167. Dies ist die Basis für das Pip-Zählen in Rennen.",
                nl: "Elke speler begint met 167 pips: 2×24 + 5×13 + 3×8 + 5×6 = 167. Dit is de basis voor het pip-tellen in races."
            }
        },
        {
            question: {
                en: "In Magriel's Safe vs Bold concept, when should you play safe?",
                es: "En el concepto de Seguro vs Audaz de Magriel, ¿cuándo deberías jugar seguro?",
                de: "In Magriels Safe vs Bold Konzept, wann sollte man sicher spielen?",
                nl: "In Magriel's Safe vs Bold concept, wanneer moet je veilig spelen?"
            },
            options: [
                {en: "When ahead in the race", es: "Cuando estás adelante en la carrera", de: "Wenn man im Rennen führt", nl: "Als je voorstaat in de race"},
                {en: "When behind in the race", es: "Cuando estás atrás en la carrera", de: "Wenn man im Rennen hinten liegt", nl: "Als je achterloopt in de race"},
                {en: "Always in money games", es: "Siempre en juegos por dinero", de: "Immer in Geldpartien", nl: "Altijd in money games"},
                {en: "Only at DMP", es: "Solo en DMP", de: "Nur bei DMP", nl: "Alleen bij DMP"}
            ],
            correct: 0,
            explanation: {
                en: "When ahead in the race, play safe to maintain your advantage. When behind, play bold and take risks to create winning chances. This fundamental principle guides many tactical decisions.",
                es: "Cuando estás adelante en la carrera, juega seguro para mantener tu ventaja. Cuando estás atrás, juega audaz y toma riesgos.",
                de: "Wenn man im Rennen führt, spielt man sicher um den Vorsprung zu halten. Wenn man hinten liegt, spielt man mutig.",
                nl: "Als je voorstaat in de race, speel je veilig om je voorsprong te behouden. Als je achterloopt, speel je gewaagd."
            }
        },
        {
            question: {
                en: "What is Robertie's addition method for pip counting?",
                es: "¿Cuál es el método de adición de Robertie para contar pips?",
                de: "Was ist Roberties Additionsmethode für das Pip-Zählen?",
                nl: "Wat is Robertie's additiemethode voor pip-telling?"
            },
            options: [
                {en: "Count adjustments from reference position", es: "Contar ajustes desde posición de referencia", de: "Anpassungen von Referenzposition zählen", nl: "Aanpassingen tellen vanaf referentiepositie"},
                {en: "Add all pips directly", es: "Sumar todos los pips directamente", de: "Alle Pips direkt addieren", nl: "Alle pips direct optellen"},
                {en: "Use multiplication shortcuts", es: "Usar atajos de multiplicación", de: "Multiplikationsabkürzungen verwenden", nl: "Vermenigvuldigingstrucs gebruiken"},
                {en: "Count by groups of five", es: "Contar por grupos de cinco", de: "In Fünfergruppen zählen", nl: "Tellen in groepen van vijf"}
            ],
            correct: 0,
            explanation: {
                en: "Robertie's method uses reference positions and counts adjustments. For example, if you know a position is 90 pips, you only count the changes from that known position.",
                es: "El método de Robertie usa posiciones de referencia y cuenta ajustes desde posiciones conocidas.",
                de: "Roberties Methode verwendet Referenzpositionen und zählt Anpassungen von bekannten Positionen.",
                nl: "Robertie's methode gebruikt referentieposities en telt aanpassingen vanaf bekende posities."
            }
        },
        {
            question: {
                en: "What is the 8-9-12 reference position?",
                es: "¿Qué es la posición de referencia 8-9-12?",
                de: "Was ist die 8-9-12 Referenzposition?",
                nl: "Wat is de 8-9-12 referentiepositie?"
            },
            options: [
                {en: "Common bearoff position worth 90 pips", es: "Posición común de salida que vale 90 pips", de: "Häufige Bearoff-Position mit 90 Pips", nl: "Veelvoorkomende bearoff positie van 90 pips"},
                {en: "Opening position variant", es: "Variante de posición de apertura", de: "Eröffnungspositions-Variante", nl: "Openingsposietie variant"},
                {en: "Endgame technique", es: "Técnica de final", de: "Endspiel-Technik", nl: "Eindspel techniek"},
                {en: "Doubling reference", es: "Referencia para doblar", de: "Verdopplungs-Referenz", nl: "Verdubbeling referentie"}
            ],
            correct: 0,
            explanation: {
                en: "The 8-9-12 position (all checkers in home board) equals exactly 90 pips. It's a key reference for quick pip counting. You can adjust from this known total.",
                es: "La posición 8-9-12 (todas las fichas en el tablero interior) equivale exactamente a 90 pips. Es una referencia clave.",
                de: "Die 8-9-12 Position (alle Steine im Heimfeld) entspricht genau 90 Pips. Eine Schlüsselreferenz für schnelles Zählen.",
                nl: "De 8-9-12 positie (alle stenen in thuisveld) is exact 90 pips. Het is een belangrijke referentie voor snel tellen."
            }
        },
        {
            question: {
                en: "What was Snowie, in backgammon history?",
                es: "¿Qué fue Snowie, en la historia del backgammon?",
                de: "Was war Snowie in der Backgammon-Geschichte?",
                nl: "Wat was Snowie in de backgammon geschiedenis?"
            },
            options: [
                {en: "Revolutionary neural network program", es: "Programa revolucionario de red neuronal", de: "Revolutionäres neuronales Netzwerk-Programm", nl: "Revolutionair neuraal netwerk programma"},
                {en: "Famous tournament", es: "Torneo famoso", de: "Berühmtes Turnier", nl: "Beroemd toernooi"},
                {en: "Playing style", es: "Estilo de juego", de: "Spielstil", nl: "Speelstijl"},
                {en: "Type of dice", es: "Tipo de dados", de: "Art von Würfeln", nl: "Type dobbelstenen"}
            ],
            correct: 0,
            explanation: {
                en: "Snowie was a groundbreaking neural network backgammon program from the late 1990s. It revolutionized understanding of the game and introduced many modern concepts.",
                es: "Snowie fue un programa innovador de red neuronal de finales de los 90. Revolucionó la comprensión del juego.",
                de: "Snowie war ein bahnbrechendes neuronales Netzwerk-Programm aus den späten 90ern. Es revolutionierte das Spielverständnis.",
                nl: "Snowie was een baanbrekend neuraal netwerk programma uit de late jaren 90. Het revolutioneerde het begrip van het spel."
            }
        },
        {
            question: {
                en: "What is the Kleinman count in pip counting?",
                es: "¿Qué es el conteo Kleinman en el conteo de pips?",
                de: "Was ist die Kleinman-Zählung beim Pip-Zählen?",
                nl: "Wat is de Kleinman telling bij pip-telling?"
            },
            options: [
                {en: "Counts differences, not absolute pips", es: "Cuenta diferencias, no pips absolutos", de: "Zählt Differenzen, nicht absolute Pips", nl: "Telt verschillen, niet absolute pips"},
                {en: "Counts only home board", es: "Cuenta solo tablero interior", de: "Zählt nur Heimfeld", nl: "Telt alleen thuisveld"},
                {en: "Counts by quadrants", es: "Cuenta por cuadrantes", de: "Zählt nach Quadranten", nl: "Telt per kwadrant"},
                {en: "Counts contact positions", es: "Cuenta posiciones de contacto", de: "Zählt Kontaktpositionen", nl: "Telt contactposities"}
            ],
            correct: 0,
            explanation: {
                en: "The Kleinman count focuses on pip differences rather than absolute counts. It's faster in practice as you only track the lead, not both totals.",
                es: "El conteo Kleinman se centra en las diferencias de pips en lugar de conteos absolutos. Es más rápido en la práctica.",
                de: "Die Kleinman-Zählung konzentriert sich auf Pip-Differenzen statt absoluter Zahlen. In der Praxis schneller.",
                nl: "De Kleinman telling richt zich op pip-verschillen in plaats van absolute tellingen. Sneller in de praktijk."
            }
        },
        {
            question: {
                en: "What is Nactation in backgammon?",
                es: "¿Qué es Nactation en backgammon?",
                de: "Was ist Nactation im Backgammon?",
                nl: "Wat is Nactation in backgammon?"
            },
            options: [
                {en: "Nacbrosh's counting system", es: "Sistema de conteo de Nacbrosh", de: "Nacbroshs Zählsystem", nl: "Nacbrosh's telsysteem"},
                {en: "Tournament format", es: "Formato de torneo", de: "Turnierformat", nl: "Toernooi formaat"},
                {en: "Opening theory", es: "Teoría de apertura", de: "Eröffnungstheorie", nl: "Openingstheorie"},
                {en: "Cube handling method", es: "Método de manejo del cubo", de: "Würfel-Handhabungsmethode", nl: "Kubus behandelingsmethode"}
            ],
            correct: 0,
            explanation: {
                en: "Nactation is Nacbrosh's pip counting system that groups checkers for faster mental calculation. It uses patterns and shortcuts for rapid pip counting.",
                es: "Nactation es el sistema de conteo de pips de Nacbrosh que agrupa fichas para cálculo mental más rápido.",
                de: "Nactation ist Nacbroshs Pip-Zählsystem, das Steine für schnellere mentale Berechnung gruppiert.",
                nl: "Nactation is Nacbrosh's pip-telsysteem dat stenen groepeert voor snellere mentale berekening."
            }
        },
        {
            question: {
                en: "What is the Keith count?",
                es: "¿Qué es el conteo Keith?",
                de: "Was ist die Keith-Zählung?",
                nl: "Wat is de Keith telling?"
            },
            options: [
                {en: "Comparison method starting from 0", es: "Método de comparación empezando desde 0", de: "Vergleichsmethode ab 0", nl: "Vergelijkingsmethode vanaf 0"},
                {en: "Board position value", es: "Valor de posición del tablero", de: "Brett-Positionswert", nl: "Bordpositie waarde"},
                {en: "Match equity system", es: "Sistema de equidad de partida", de: "Match-Equity-System", nl: "Match equity systeem"},
                {en: "Bearoff database", es: "Base de datos de salida", de: "Bearoff-Datenbank", nl: "Bearoff database"}
            ],
            correct: 0,
            explanation: {
                en: "The Keith count is a comparison pip counting method that starts both players at 0 and tracks movement forward, making the arithmetic simpler.",
                es: "El conteo Keith es un método de comparación que comienza ambos jugadores en 0 y rastrea el movimiento hacia adelante.",
                de: "Die Keith-Zählung ist eine Vergleichsmethode, die beide Spieler bei 0 startet und Bewegung vorwärts verfolgt.",
                nl: "De Keith telling is een vergelijkingsmethode die beide spelers op 0 start en beweging vooruit volgt."
            }
        },
        {
            question: {
                en: "What is the Thorp count?",
                es: "¿Qué es el conteo Thorp?",
                de: "Was ist die Thorp-Zählung?",
                nl: "Wat is de Thorp telling?"
            },
            options: [
                {en: "Uses point numbers and mental math", es: "Usa números de puntos y matemática mental", de: "Nutzt Punktzahlen und Kopfrechnen", nl: "Gebruikt puntnummers en hoofdrekenen"},
                {en: "Only for endgame", es: "Solo para final", de: "Nur für Endspiel", nl: "Alleen voor eindspel"},
                {en: "Cube decision tool", es: "Herramienta de decisión del cubo", de: "Würfel-Entscheidungstool", nl: "Kubus beslissingstool"},
                {en: "Opening analysis", es: "Análisis de apertura", de: "Eröffnungsanalyse", nl: "Openingsanalyse"}
            ],
            correct: 0,
            explanation: {
                en: "The Thorp count multiplies checkers by point numbers for quick mental pip counting. It's one of the most practical methods for over-the-board play.",
                es: "El conteo Thorp multiplica fichas por números de puntos para conteo mental rápido de pips.",
                de: "Die Thorp-Zählung multipliziert Steine mit Punktzahlen für schnelles mentales Pip-Zählen.",
                nl: "De Thorp telling vermenigvuldigt stenen met puntnummers voor snelle mentale pip-telling."
            }
        },
        {
            question: {
                en: "What is a 'minus position' in backgammon?",
                es: "¿Qué es una 'posición negativa' en backgammon?",
                de: "Was ist eine 'Minus-Position' im Backgammon?",
                nl: "Wat is een 'minus positie' in backgammon?"
            },
            options: [
                {en: "Behind in race but holding opponent", es: "Atrás en carrera pero reteniendo oponente", de: "Im Rennen hinten aber Gegner haltend", nl: "Achter in race maar tegenstander vasthoudend"},
                {en: "Negative equity", es: "Equidad negativa", de: "Negative Equity", nl: "Negatieve equity"},
                {en: "Lost position", es: "Posición perdida", de: "Verlorene Position", nl: "Verloren positie"},
                {en: "Blunder move", es: "Movimiento erróneo", de: "Fehlzug", nl: "Blunder zet"}
            ],
            correct: 0,
            explanation: {
                en: "A minus position is when you're behind in the race but have holding/contact that gives winning chances. The pip deficit is offset by positional advantages.",
                es: "Una posición negativa es cuando estás atrás en la carrera pero tienes retención/contacto que da oportunidades de ganar.",
                de: "Eine Minus-Position ist wenn man im Rennen hinten liegt aber Halte-/Kontaktpunkte hat die Gewinnchancen geben.",
                nl: "Een minus positie is wanneer je achterloopt in de race maar holding/contact hebt dat winstkansen geeft."
            }
        },
        // Questions 51-60: Advanced tactical concepts
        {
            question: {
                en: "What is 'switching points' in backgammon?",
                es: "¿Qué es 'cambiar puntos' en backgammon?",
                de: "Was ist 'Punkte wechseln' im Backgammon?",
                nl: "Wat is 'punten wisselen' in backgammon?"
            },
            options: [
                {en: "Moving from one point to adjacent", es: "Moverse de un punto al adyacente", de: "Von einem Punkt zum benachbarten ziehen", nl: "Van een punt naar aangrenzend bewegen"},
                {en: "Exchanging prime points", es: "Intercambiar puntos prime", de: "Prime-Punkte austauschen", nl: "Prime punten uitwisselen"},
                {en: "Cube ownership change", es: "Cambio de propiedad del cubo", de: "Würfelbesitz-Wechsel", nl: "Kubus eigendom wisseling"},
                {en: "Score adjustment", es: "Ajuste de puntuación", de: "Punkteanpassung", nl: "Score aanpassing"}
            ],
            correct: 0,
            explanation: {
                en: "Switching points means moving checkers from one point to an adjacent point, often to maintain a prime while adjusting to opponent's rolls.",
                es: "Cambiar puntos significa mover fichas de un punto a uno adyacente, a menudo para mantener un prime mientras te ajustas.",
                de: "Punkte wechseln bedeutet Steine von einem Punkt zum benachbarten zu ziehen, oft um eine Prime zu halten.",
                nl: "Punten wisselen betekent stenen van een punt naar een aangrenzend punt verplaatsen om een prime te behouden."
            }
        },
        {
            question: {
                en: "What is the 'pay now or pay later' principle?",
                es: "¿Qué es el principio 'pagar ahora o pagar después'?",
                de: "Was ist das 'jetzt oder später zahlen' Prinzip?",
                nl: "Wat is het 'nu betalen of later betalen' principe?"
            },
            options: [
                {en: "Take risks early vs late", es: "Tomar riesgos temprano vs tarde", de: "Früh vs spät Risiken eingehen", nl: "Vroeg vs laat risico's nemen"},
                {en: "Doubling decision", es: "Decisión de doblar", de: "Verdopplungsentscheidung", nl: "Verdubbeling beslissing"},
                {en: "Settlement timing", es: "Momento de liquidación", de: "Abrechnungszeitpunkt", nl: "Afrekening timing"},
                {en: "Clock management", es: "Gestión del reloj", de: "Zeitmanagement", nl: "Klok management"}
            ],
            correct: 0,
            explanation: {
                en: "This principle states that if you must leave shots, it's often better to leave them early when consequences are less severe than later when they're more costly.",
                es: "Este principio dice que si debes dejar tiros, a menudo es mejor dejarlos temprano cuando las consecuencias son menos severas.",
                de: "Dieses Prinzip besagt dass wenn man Blots lassen muss, es oft besser ist sie früh zu lassen wenn Konsequenzen weniger schwer sind.",
                nl: "Dit principe stelt dat als je schoten moet laten, het vaak beter is ze vroeg te laten wanneer gevolgen minder ernstig zijn."
            }
        },
        {
            question: {
                en: "What is 'connectivity' in backgammon position?",
                es: "¿Qué es la 'conectividad' en la posición de backgammon?",
                de: "Was ist 'Konnektivität' in der Backgammon-Position?",
                nl: "Wat is 'connectiviteit' in backgammon positie?"
            },
            options: [
                {en: "Checkers within 6 pips of each other", es: "Fichas a 6 pips entre sí", de: "Steine innerhalb von 6 Pips voneinander", nl: "Stenen binnen 6 pips van elkaar"},
                {en: "Board coverage", es: "Cobertura del tablero", de: "Brettabdeckung", nl: "Bord dekking"},
                {en: "Dice combinations", es: "Combinaciones de dados", de: "Würfelkombinationen", nl: "Dobbelsteen combinaties"},
                {en: "Communication play", es: "Juego de comunicación", de: "Kommunikationsspiel", nl: "Communicatie spel"}
            ],
            correct: 0,
            explanation: {
                en: "Connectivity refers to having checkers within 6 pips of each other so they can support and protect each other. Good connectivity provides flexibility.",
                es: "La conectividad se refiere a tener fichas a 6 pips entre sí para que puedan apoyarse y protegerse. Proporciona flexibilidad.",
                de: "Konnektivität bedeutet Steine innerhalb von 6 Pips voneinander zu haben damit sie sich unterstützen können.",
                nl: "Connectiviteit verwijst naar stenen binnen 6 pips van elkaar hebben zodat ze elkaar kunnen ondersteunen."
            }
        },
        {
            question: {
                en: "What is 'outfield control'?",
                es: "¿Qué es el 'control del campo exterior'?",
                de: "Was ist 'Außenfeld-Kontrolle'?",
                nl: "Wat is 'buitenveld controle'?"
            },
            options: [
                {en: "Controlling points 7-12", es: "Controlar puntos 7-12", de: "Punkte 7-12 kontrollieren", nl: "Punten 7-12 controleren"},
                {en: "Bear off strategy", es: "Estrategia de salida", de: "Bearoff-Strategie", nl: "Bearoff strategie"},
                {en: "Home board priming", es: "Prime en tablero interior", de: "Heimfeld-Prime", nl: "Thuisveld prime"},
                {en: "Anchor play", es: "Juego de ancla", de: "Ankerspiel", nl: "Anker spel"}
            ],
            correct: 0,
            explanation: {
                en: "Outfield control means dominating points 7-12, which restricts opponent's movement and provides landing spots for your entering checkers.",
                es: "Control del campo exterior significa dominar puntos 7-12, lo que restringe el movimiento del oponente.",
                de: "Außenfeld-Kontrolle bedeutet Punkte 7-12 zu dominieren, was die Bewegung des Gegners einschränkt.",
                nl: "Buitenveld controle betekent punten 7-12 domineren, wat tegenstanders beweging beperkt."
            }
        },
        {
            question: {
                en: "What is timing in backgammon?",
                es: "¿Qué es el timing en backgammon?",
                de: "Was ist Timing im Backgammon?",
                nl: "Wat is timing in backgammon?"
            },
            options: [
                {en: "Ability to maintain position", es: "Habilidad para mantener posición", de: "Fähigkeit Position zu halten", nl: "Vermogen om positie te behouden"},
                {en: "Clock time", es: "Tiempo del reloj", de: "Uhrzeit", nl: "Klok tijd"},
                {en: "Move speed", es: "Velocidad de movimiento", de: "Zuggeschwindigkeit", nl: "Zet snelheid"},
                {en: "Opening sequence", es: "Secuencia de apertura", de: "Eröffnungssequenz", nl: "Openingsvolgorde"}
            ],
            correct: 0,
            explanation: {
                en: "Timing refers to your ability to maintain a strong position while waiting for opportunity. Good timing means you can hold your position without cracking.",
                es: "El timing se refiere a tu capacidad para mantener una posición fuerte mientras esperas una oportunidad.",
                de: "Timing bezieht sich auf die Fähigkeit eine starke Position zu halten während man auf Gelegenheit wartet.",
                nl: "Timing verwijst naar je vermogen om een sterke positie te behouden terwijl je wacht op een kans."
            }
        },
        {
            question: {
                en: "What are 'stripped points'?",
                es: "¿Qué son los 'puntos desnudos'?",
                de: "Was sind 'entblößte Punkte'?",
                nl: "Wat zijn 'gestripte punten'?"
            },
            options: [
                {en: "Points with exactly 2 checkers", es: "Puntos con exactamente 2 fichas", de: "Punkte mit genau 2 Steinen", nl: "Punten met exact 2 stenen"},
                {en: "Empty points", es: "Puntos vacíos", de: "Leere Punkte", nl: "Lege punten"},
                {en: "Points with 1 checker", es: "Puntos con 1 ficha", de: "Punkte mit 1 Stein", nl: "Punten met 1 steen"},
                {en: "Blocked points", es: "Puntos bloqueados", de: "Blockierte Punkte", nl: "Geblokkeerde punten"}
            ],
            correct: 0,
            explanation: {
                en: "Stripped points have exactly 2 checkers and are vulnerable because moving one creates a blot. They limit flexibility and are weak in holding positions.",
                es: "Los puntos desnudos tienen exactamente 2 fichas y son vulnerables porque mover una crea una blot.",
                de: "Entblößte Punkte haben genau 2 Steine und sind verwundbar weil das Bewegen eines Steins einen Blot erzeugt.",
                nl: "Gestripte punten hebben exact 2 stenen en zijn kwetsbaar omdat het bewegen van één een blot creëert."
            }
        },
        {
            question: {
                en: "What is mirror symmetry in bearoff?",
                es: "¿Qué es la simetría espejo en la salida?",
                de: "Was ist Spiegelsymmetrie beim Bearoff?",
                nl: "Wat is spiegel symmetrie in bearoff?"
            },
            options: [
                {en: "Positions that look identical", es: "Posiciones que parecen idénticas", de: "Positionen die identisch aussehen", nl: "Posities die identiek lijken"},
                {en: "Same pip count", es: "Mismo conteo de pips", de: "Gleiche Pip-Zählung", nl: "Zelfde pip telling"},
                {en: "Equal winning chances", es: "Iguales probabilidades de ganar", de: "Gleiche Gewinnchancen", nl: "Gelijke winkansen"},
                {en: "Reflected board position", es: "Posición reflejada del tablero", de: "Gespiegelte Brettposition", nl: "Gespiegelde bordpositie"}
            ],
            correct: 0,
            explanation: {
                en: "Mirror symmetry occurs when both players have identical checker distributions in their home boards. These positions have equal winning chances.",
                es: "La simetría espejo ocurre cuando ambos jugadores tienen distribuciones idénticas de fichas en sus tableros interiores.",
                de: "Spiegelsymmetrie tritt auf wenn beide Spieler identische Steinverteilungen in ihren Heimfeldern haben.",
                nl: "Spiegel symmetrie treedt op wanneer beide spelers identieke steen verdelingen in hun thuisvelden hebben."
            }
        },
        {
            question: {
                en: "What is the 'anti-joker' roll?",
                es: "¿Cuál es el tiro 'anti-joker'?",
                de: "Was ist der 'Anti-Joker' Wurf?",
                nl: "Wat is de 'anti-joker' worp?"
            },
            options: [
                {en: "The worst possible roll", es: "El peor tiro posible", de: "Der schlechteste mögliche Wurf", nl: "De slechtst mogelijke worp"},
                {en: "Double ones", es: "Dobles unos", de: "Doppel-Einsen", nl: "Dubbel enen"},
                {en: "Any non-double", es: "Cualquier no-doble", de: "Jeder Nicht-Pasch", nl: "Elke niet-dubbel"},
                {en: "Rolling 2-1", es: "Sacar 2-1", de: "2-1 würfeln", nl: "2-1 gooien"}
            ],
            correct: 0,
            explanation: {
                en: "The anti-joker is the worst possible roll in a given position, opposite to the joker (best roll). It's position-specific and changes with the situation.",
                es: "El anti-joker es el peor tiro posible en una posición dada, opuesto al joker (mejor tiro).",
                de: "Der Anti-Joker ist der schlechteste mögliche Wurf in einer gegebenen Position, das Gegenteil vom Joker.",
                nl: "De anti-joker is de slechtst mogelijke worp in een gegeven positie, tegengesteld aan de joker."
            }
        },
        {
            question: {
                en: "What does 'flexible vs committed' mean?",
                es: "¿Qué significa 'flexible vs comprometido'?",
                de: "Was bedeutet 'flexibel vs festgelegt'?",
                nl: "Wat betekent 'flexibel vs gecommitteerd'?"
            },
            options: [
                {en: "Keep options vs lock structure", es: "Mantener opciones vs bloquear estructura", de: "Optionen behalten vs Struktur festlegen", nl: "Opties behouden vs structuur vastzetten"},
                {en: "Cube decisions", es: "Decisiones del cubo", de: "Würfelentscheidungen", nl: "Kubus beslissingen"},
                {en: "Tournament vs money", es: "Torneo vs dinero", de: "Turnier vs Geld", nl: "Toernooi vs geld"},
                {en: "Safe vs bold", es: "Seguro vs audaz", de: "Sicher vs mutig", nl: "Veilig vs gewaagd"}
            ],
            correct: 0,
            explanation: {
                en: "Flexible positions maintain multiple strategic options while committed positions lock into a specific game plan. Flexibility is usually preferred early in the game.",
                es: "Las posiciones flexibles mantienen múltiples opciones estratégicas mientras que las comprometidas se bloquean en un plan específico.",
                de: "Flexible Positionen behalten mehrere strategische Optionen während festgelegte Positionen sich auf einen Plan festlegen.",
                nl: "Flexibele posities behouden meerdere strategische opties terwijl gecommitteerde posities vastzitten aan een specifiek plan."
            }
        },
        {
            question: {
                en: "What is zone theory in backgammon?",
                es: "¿Qué es la teoría de zonas en backgammon?",
                de: "Was ist die Zonentheorie im Backgammon?",
                nl: "Wat is zone theorie in backgammon?"
            },
            options: [
                {en: "Dividing board into strategic areas", es: "Dividir tablero en áreas estratégicas", de: "Brett in strategische Bereiche teilen", nl: "Bord verdelen in strategische gebieden"},
                {en: "Time zones for play", es: "Zonas horarias para jugar", de: "Zeitzonen zum Spielen", nl: "Tijdzones voor spel"},
                {en: "Doubling windows", es: "Ventanas de doblaje", de: "Verdopplungsfenster", nl: "Verdubbeling vensters"},
                {en: "Tournament divisions", es: "Divisiones de torneo", de: "Turnier-Divisionen", nl: "Toernooi divisies"}
            ],
            correct: 0,
            explanation: {
                en: "Zone theory divides the board into strategic areas (opponent's home, outer boards, your home) to evaluate position strength and plan moves.",
                es: "La teoría de zonas divide el tablero en áreas estratégicas para evaluar la fuerza de la posición y planear movimientos.",
                de: "Die Zonentheorie teilt das Brett in strategische Bereiche um Positionsstärke zu bewerten und Züge zu planen.",
                nl: "Zone theorie verdeelt het bord in strategische gebieden om positie sterkte te evalueren en zetten te plannen."
            }
        }
        // Questions 61-70: Common positions and patterns
        {
            question: {
                en: "What is the 'golden anchor' in backgammon?",
                es: "¿Qué es el 'ancla dorada' en backgammon?",
                de: "Was ist der 'goldene Anker' im Backgammon?",
                nl: "Wat is het 'gouden anker' in backgammon?"
            },
            options: [
                {en: "Opponent's 20-point (your 5-point)", es: "Punto 20 del oponente (tu punto 5)", de: "Gegners 20-Punkt (eigener 5-Punkt)", nl: "Tegenstanders 20-punt (jouw 5-punt)"},
                {en: "Your own bar point", es: "Tu propio punto barra", de: "Eigener Bar-Punkt", nl: "Je eigen bar punt"},
                {en: "The 24-point", es: "El punto 24", de: "Der 24-Punkt", nl: "Het 24-punt"},
                {en: "The midpoint", es: "El punto medio", de: "Der Mittelpunkt", nl: "Het middelpunt"}
            ],
            correct: 0,
            explanation: {
                en: "The golden anchor is your opponent's 20-point. It provides excellent coverage, limits opponent's home board development, and offers good escape chances.",
                es: "El ancla dorada es el punto 20 del oponente. Proporciona excelente cobertura y limita el desarrollo del tablero interior del oponente.",
                de: "Der goldene Anker ist der 20-Punkt des Gegners. Er bietet exzellente Abdeckung und begrenzt die Heimfeld-Entwicklung.",
                nl: "Het gouden anker is tegenstanders 20-punt. Het biedt uitstekende dekking en beperkt tegenstanders thuisveld ontwikkeling."
            }
        },
        {
            question: {
                en: "What is the 'lover's leap' play?",
                es: "¿Qué es la jugada 'salto del amante'?",
                de: "Was ist der 'Liebessprung' Zug?",
                nl: "Wat is de 'lover's leap' zet?"
            },
            options: [
                {en: "24/13 with 6-5", es: "24/13 con 6-5", de: "24/13 mit 6-5", nl: "24/13 met 6-5"},
                {en: "13/7 6/1 with 6-5", es: "13/7 6/1 con 6-5", de: "13/7 6/1 mit 6-5", nl: "13/7 6/1 met 6-5"},
                {en: "8/2 6/1 with 6-5", es: "8/2 6/1 con 6-5", de: "8/2 6/1 mit 6-5", nl: "8/2 6/1 met 6-5"},
                {en: "24/18 13/8 with 6-5", es: "24/18 13/8 con 6-5", de: "24/18 13/8 mit 6-5", nl: "24/18 13/8 met 6-5"}
            ],
            correct: 0,
            explanation: {
                en: "The lover's leap is running 24/13 with an opening 6-5, escaping one back checker all the way to the midpoint. It's an aggressive opening play.",
                es: "El salto del amante es correr 24/13 con un 6-5 de apertura, escapando una ficha trasera hasta el punto medio.",
                de: "Der Liebessprung ist 24/13 mit einer 6-5 Eröffnung zu laufen, ein hinterer Stein entkommt bis zum Mittelpunkt.",
                nl: "De lover's leap is 24/13 rennen met een opening 6-5, waarbij één achterste steen helemaal naar het middelpunt ontsnapt."
            }
        },
        {
            question: {
                en: "What is 'crashing' in backgammon?",
                es: "¿Qué es 'estrellarse' en backgammon?",
                de: "Was ist 'Crashen' im Backgammon?",
                nl: "Wat is 'crashing' in backgammon?"
            },
            options: [
                {en: "Breaking your home board to hit", es: "Romper tu tablero interior para golpear", de: "Heimfeld aufbrechen zum Schlagen", nl: "Je thuisveld breken om te slaan"},
                {en: "Clock expiring", es: "Reloj expirando", de: "Zeit läuft ab", nl: "Klok loopt af"},
                {en: "Losing badly", es: "Perder mal", de: "Schwer verlieren", nl: "Zwaar verliezen"},
                {en: "Dice falling off", es: "Dados cayendo", de: "Würfel fallen runter", nl: "Dobbelstenen vallen af"}
            ],
            correct: 0,
            explanation: {
                en: "Crashing means breaking points in your home board to attack opponent's checkers. It's risky but sometimes necessary when behind in the race.",
                es: "Estrellarse significa romper puntos en tu tablero interior para atacar las fichas del oponente. Es arriesgado pero a veces necesario.",
                de: "Crashen bedeutet Punkte im Heimfeld aufzubrechen um gegnerische Steine anzugreifen. Riskant aber manchmal notwendig.",
                nl: "Crashing betekent punten in je thuisveld breken om tegenstanders stenen aan te vallen. Riskant maar soms noodzakelijk."
            }
        },
        {
            question: {
                en: "What is the '3-point game' structure?",
                es: "¿Qué es la estructura del 'juego de 3 puntos'?",
                de: "Was ist die '3-Punkt-Spiel' Struktur?",
                nl: "Wat is de '3-punt spel' structuur?"
            },
            options: [
                {en: "Holding opponent's 3-point as anchor", es: "Mantener el punto 3 del oponente como ancla", de: "Gegners 3-Punkt als Anker halten", nl: "Tegenstanders 3-punt als anker vasthouden"},
                {en: "Having 3 home points", es: "Tener 3 puntos interiores", de: "3 Heimfeld-Punkte haben", nl: "3 thuisveld punten hebben"},
                {en: "3 checkers back", es: "3 fichas atrás", de: "3 Steine hinten", nl: "3 stenen achter"},
                {en: "Match to 3 points", es: "Partida a 3 puntos", de: "Match auf 3 Punkte", nl: "Match tot 3 punten"}
            ],
            correct: 0,
            explanation: {
                en: "A 3-point game involves holding your opponent's 3-point as an anchor. It's defensive but offers good hitting chances on opponent's bearoff.",
                es: "Un juego de 3 puntos implica mantener el punto 3 del oponente como ancla. Es defensivo pero ofrece buenas oportunidades de golpear.",
                de: "Ein 3-Punkt-Spiel bedeutet den 3-Punkt des Gegners als Anker zu halten. Defensiv aber gute Schlagchancen.",
                nl: "Een 3-punt spel houdt in dat je tegenstanders 3-punt als anker vasthoudt. Defensief maar goede slagkansen."
            }
        },
        {
            question: {
                en: "When should you 'volunteer a shot'?",
                es: "¿Cuándo deberías 'ofrecer un tiro voluntario'?",
                de: "Wann sollte man 'freiwillig einen Schuss anbieten'?",
                nl: "Wanneer moet je 'vrijwillig een schot aanbieden'?"
            },
            options: [
                {en: "When position requires urgency", es: "Cuando la posición requiere urgencia", de: "Wenn die Position Dringlichkeit erfordert", nl: "Als positie urgentie vereist"},
                {en: "Always in money games", es: "Siempre en juegos por dinero", de: "Immer in Geldpartien", nl: "Altijd in money games"},
                {en: "Never volunteer shots", es: "Nunca ofrecer tiros", de: "Nie freiwillig Schüsse anbieten", nl: "Nooit vrijwillig schoten aanbieden"},
                {en: "Only when ahead", es: "Solo cuando estás adelante", de: "Nur wenn vorne", nl: "Alleen als je voorstaat"}
            ],
            correct: 0,
            explanation: {
                en: "Volunteer a shot when your position is deteriorating and you need to create winning chances. Better to take risks while you still have timing.",
                es: "Ofrece un tiro cuando tu posición se está deteriorando y necesitas crear oportunidades de ganar.",
                de: "Einen Schuss freiwillig anbieten wenn die Position sich verschlechtert und man Gewinnchancen braucht.",
                nl: "Bied vrijwillig een schot aan als je positie verslechtert en je winstkansen moet creëren."
            }
        },
        {
            question: {
                en: "What is 'clearing from the rear'?",
                es: "¿Qué es 'limpiar desde atrás'?",
                de: "Was ist 'von hinten räumen'?",
                nl: "Wat is 'van achteren opruimen'?"
            },
            options: [
                {en: "Bearoff from higher points first", es: "Salida desde puntos más altos primero", de: "Bearoff von höheren Punkten zuerst", nl: "Bearoff vanaf hogere punten eerst"},
                {en: "Moving back checkers", es: "Mover fichas traseras", de: "Hintere Steine bewegen", nl: "Achterste stenen bewegen"},
                {en: "Clearing the bar", es: "Limpiar la barra", de: "Die Bar räumen", nl: "De bar opruimen"},
                {en: "Backgame strategy", es: "Estrategia de backgame", de: "Backgame-Strategie", nl: "Backgame strategie"}
            ],
            correct: 0,
            explanation: {
                en: "Clearing from the rear means bearing off checkers from your higher points first to avoid gaps and maintain smooth distribution.",
                es: "Limpiar desde atrás significa sacar fichas desde tus puntos más altos primero para evitar huecos.",
                de: "Von hinten räumen bedeutet Steine von höheren Punkten zuerst abzutragen um Lücken zu vermeiden.",
                nl: "Van achteren opruimen betekent stenen vanaf je hogere punten eerst af te dragen om gaten te vermijden."
            }
        },
        {
            question: {
                en: "What is the 'ace-point game'?",
                es: "¿Qué es el 'juego del punto as'?",
                de: "Was ist das 'Ass-Punkt-Spiel'?",
                nl: "Wat is het 'aas-punt spel'?"
            },
            options: [
                {en: "Holding opponent's 1-point", es: "Mantener el punto 1 del oponente", de: "Gegners 1-Punkt halten", nl: "Tegenstanders 1-punt vasthouden"},
                {en: "Making your own 1-point", es: "Hacer tu propio punto 1", de: "Eigenen 1-Punkt machen", nl: "Je eigen 1-punt maken"},
                {en: "Rolling double aces", es: "Sacar dobles ases", de: "Doppel-Asse würfeln", nl: "Dubbel azen gooien"},
                {en: "Expert level play", es: "Juego nivel experto", de: "Experten-Niveau Spiel", nl: "Expert niveau spel"}
            ],
            correct: 0,
            explanation: {
                en: "An ace-point game means holding your opponent's 1-point. It's the deepest anchor, usually weak but can work if opponent leaves shots.",
                es: "Un juego del punto as significa mantener el punto 1 del oponente. Es el ancla más profunda, generalmente débil.",
                de: "Ein Ass-Punkt-Spiel bedeutet den 1-Punkt des Gegners zu halten. Der tiefste Anker, meist schwach.",
                nl: "Een aas-punt spel betekent tegenstanders 1-punt vasthouden. Het diepste anker, meestal zwak."
            }
        },
        {
            question: {
                en: "What is 'duplication' strategy?",
                es: "¿Qué es la estrategia de 'duplicación'?",
                de: "Was ist die 'Duplikations' Strategie?",
                nl: "Wat is 'duplicatie' strategie?"
            },
            options: [
                {en: "Making opponent need same numbers", es: "Hacer que el oponente necesite los mismos números", de: "Gegner dieselben Zahlen brauchen lassen", nl: "Tegenstander dezelfde getallen laten nodig hebben"},
                {en: "Doubling the cube", es: "Doblar el cubo", de: "Den Würfel verdoppeln", nl: "De kubus verdubbelen"},
                {en: "Making pairs of points", es: "Hacer pares de puntos", de: "Punktpaare machen", nl: "Paren van punten maken"},
                {en: "Rolling doubles", es: "Sacar dobles", de: "Pasch würfeln", nl: "Dubbels gooien"}
            ],
            correct: 0,
            explanation: {
                en: "Duplication means arranging your checkers so opponent needs the same dice numbers for different purposes, reducing their effective rolls.",
                es: "La duplicación significa organizar tus fichas para que el oponente necesite los mismos números de dados para diferentes propósitos.",
                de: "Duplikation bedeutet die Steine so anzuordnen dass der Gegner dieselben Würfelzahlen für verschiedene Zwecke braucht.",
                nl: "Duplicatie betekent je stenen zo arrangeren dat tegenstander dezelfde dobbelgetallen voor verschillende doelen nodig heeft."
            }
        },
        {
            question: {
                en: "What is a 'tempo hit'?",
                es: "¿Qué es un 'golpe de tempo'?",
                de: "Was ist ein 'Tempo-Schlag'?",
                nl: "Wat is een 'tempo slag'?"
            },
            options: [
                {en: "Hit that gains time advantage", es: "Golpe que gana ventaja de tiempo", de: "Schlag der Zeitvorteil gewinnt", nl: "Slag die tijdvoordeel oplevert"},
                {en: "Fast move", es: "Movimiento rápido", de: "Schneller Zug", nl: "Snelle zet"},
                {en: "Clock move", es: "Movimiento de reloj", de: "Uhrzug", nl: "Klok zet"},
                {en: "Musical backgammon", es: "Backgammon musical", de: "Musikalisches Backgammon", nl: "Muzikaal backgammon"}
            ],
            correct: 0,
            explanation: {
                en: "A tempo hit is hitting an opponent's checker to gain time, forcing them to enter and giving you an extra move to improve position.",
                es: "Un golpe de tempo es golpear una ficha del oponente para ganar tiempo, forzándoles a entrar y dándote un movimiento extra.",
                de: "Ein Tempo-Schlag ist das Schlagen eines gegnerischen Steins um Zeit zu gewinnen und die Position zu verbessern.",
                nl: "Een tempo slag is het slaan van tegenstanders steen om tijd te winnen en je positie te verbeteren."
            }
        },
        {
            question: {
                en: "What is 'playing for the gammon'?",
                es: "¿Qué es 'jugar por el gammon'?",
                de: "Was ist 'auf Gammon spielen'?",
                nl: "Wat is 'spelen voor de gammon'?"
            },
            options: [
                {en: "Trying to win double points", es: "Intentar ganar puntos dobles", de: "Versuchen doppelte Punkte zu gewinnen", nl: "Proberen dubbele punten te winnen"},
                {en: "Playing it safe", es: "Jugar seguro", de: "Sicher spielen", nl: "Veilig spelen"},
                {en: "Avoiding losses", es: "Evitar pérdidas", de: "Verluste vermeiden", nl: "Verliezen vermijden"},
                {en: "Time management", es: "Gestión del tiempo", de: "Zeitmanagement", nl: "Tijd management"}
            ],
            correct: 0,
            explanation: {
                en: "Playing for the gammon means taking risks to win a double game (gammon) rather than playing safe for a single win.",
                es: "Jugar por el gammon significa tomar riesgos para ganar un juego doble en lugar de jugar seguro por una victoria simple.",
                de: "Auf Gammon spielen bedeutet Risiken einzugehen um ein Doppelspiel zu gewinnen statt sicher auf Einzelsieg zu spielen.",
                nl: "Spelen voor de gammon betekent risico's nemen om een dubbel spel te winnen in plaats van veilig voor enkele winst."
            }
        },
        // Questions 71-80: Match play concepts
        {
            question: {
                en: "What is Crawford rule in match play?",
                es: "¿Qué es la regla Crawford en el juego de partida?",
                de: "Was ist die Crawford-Regel im Match-Spiel?",
                nl: "Wat is de Crawford regel in match play?"
            },
            options: [
                {en: "No doubling when one player is 1-away", es: "No doblar cuando un jugador está a 1 punto", de: "Kein Verdoppeln wenn ein Spieler 1-weg ist", nl: "Geen verdubbeling als één speler 1-weg is"},
                {en: "Must double at start", es: "Debe doblar al inicio", de: "Muss am Anfang verdoppeln", nl: "Moet verdubbelen bij start"},
                {en: "No gammons count", es: "Los gammons no cuentan", de: "Gammons zählen nicht", nl: "Gammons tellen niet"},
                {en: "Time limit rule", es: "Regla de límite de tiempo", de: "Zeitlimit-Regel", nl: "Tijdslimiet regel"}
            ],
            correct: 0,
            explanation: {
                en: "The Crawford rule states that when one player is 1 point from winning the match, the doubling cube cannot be used in the next game only.",
                es: "La regla Crawford establece que cuando un jugador está a 1 punto de ganar la partida, el cubo no puede usarse solo en el siguiente juego.",
                de: "Die Crawford-Regel besagt dass wenn ein Spieler 1 Punkt vom Matchgewinn entfernt ist, der Würfel im nächsten Spiel nicht benutzt werden kann.",
                nl: "De Crawford regel stelt dat wanneer één speler 1 punt van match winst is, de kubus niet gebruikt kan worden in alleen het volgende spel."
            }
        },
        {
            question: {
                en: "What is 'DMP' in backgammon?",
                es: "¿Qué es 'DMP' en backgammon?",
                de: "Was ist 'DMP' im Backgammon?",
                nl: "Wat is 'DMP' in backgammon?"
            },
            options: [
                {en: "Double Match Point", es: "Punto de Partida Doble", de: "Doppelter Match-Punkt", nl: "Dubbel Match Punt"},
                {en: "Don't Make Points", es: "No Hacer Puntos", de: "Keine Punkte Machen", nl: "Geen Punten Maken"},
                {en: "Doubling Maximum Position", es: "Posición Máxima de Doblaje", de: "Maximale Verdopplungsposition", nl: "Maximale Verdubbeling Positie"},
                {en: "Direct Money Play", es: "Juego Directo por Dinero", de: "Direktes Geldspiel", nl: "Direct Geld Spel"}
            ],
            correct: 0,
            explanation: {
                en: "DMP (Double Match Point) is when both players need exactly 1 point to win the match. Strategy differs as gammons don't matter.",
                es: "DMP (Punto de Partida Doble) es cuando ambos jugadores necesitan exactamente 1 punto para ganar. Los gammons no importan.",
                de: "DMP (Doppelter Match-Punkt) ist wenn beide Spieler genau 1 Punkt zum Matchgewinn brauchen. Gammons sind unwichtig.",
                nl: "DMP (Dubbel Match Punt) is wanneer beide spelers exact 1 punt nodig hebben om te winnen. Gammons doen er niet toe."
            }
        },
        {
            question: {
                en: "What is 'match equity' in backgammon?",
                es: "¿Qué es la 'equidad de partida' en backgammon?",
                de: "Was ist 'Match-Equity' im Backgammon?",
                nl: "Wat is 'match equity' in backgammon?"
            },
            options: [
                {en: "Winning chances from current score", es: "Probabilidades de ganar desde puntuación actual", de: "Gewinnchancen vom aktuellen Spielstand", nl: "Winkansen vanaf huidige score"},
                {en: "Fair settlement value", es: "Valor justo de liquidación", de: "Fairer Abrechnungswert", nl: "Eerlijke afrekening waarde"},
                {en: "Tournament prize pool", es: "Bolsa de premios del torneo", de: "Turnier-Preispool", nl: "Toernooi prijzenpot"},
                {en: "Entry fee return", es: "Retorno de cuota de entrada", de: "Startgeld-Rückgabe", nl: "Inschrijfgeld teruggave"}
            ],
            correct: 0,
            explanation: {
                en: "Match equity is your percentage chance of winning the match from the current score. It guides doubling decisions in match play.",
                es: "La equidad de partida es tu porcentaje de probabilidad de ganar la partida desde la puntuación actual.",
                de: "Match-Equity ist die prozentuale Gewinnchance des Matches vom aktuellen Spielstand. Sie leitet Verdopplungsentscheidungen.",
                nl: "Match equity is je percentage kans om de match te winnen vanaf de huidige score. Het stuurt verdubbeling beslissingen."
            }
        },
        {
            question: {
                en: "What is 'recube vigorish' (recube vig)?",
                es: "¿Qué es el 'vigorish de recubo'?",
                de: "Was ist 'Recube Vigorish'?",
                nl: "Wat is 'recube vigorish' (recube vig)?"
            },
            options: [
                {en: "Advantage of cube ownership", es: "Ventaja de propiedad del cubo", de: "Vorteil des Würfelbesitzes", nl: "Voordeel van kubus eigendom"},
                {en: "Penalty for dropping", es: "Penalización por abandonar", de: "Strafe fürs Aufgeben", nl: "Straf voor opgeven"},
                {en: "Tournament fee", es: "Cuota de torneo", de: "Turniergebühr", nl: "Toernooi vergoeding"},
                {en: "Time penalty", es: "Penalización de tiempo", de: "Zeitstrafe", nl: "Tijdstraf"}
            ],
            correct: 0,
            explanation: {
                en: "Recube vig is the advantage of owning the cube - the exclusive right to redouble. It's worth about 10-15% in equity.",
                es: "El vigorish de recubo es la ventaja de poseer el cubo - el derecho exclusivo de redoblar. Vale aproximadamente 10-15% en equidad.",
                de: "Recube Vig ist der Vorteil des Würfelbesitzes - das exklusive Recht zu reverdoppeln. Wert etwa 10-15% Equity.",
                nl: "Recube vig is het voordeel van kubus eigendom - het exclusieve recht om te herverdubbelen. Waarde ongeveer 10-15% equity."
            }
        },
        {
            question: {
                en: "What is 'post-Crawford' strategy?",
                es: "¿Qué es la estrategia 'post-Crawford'?",
                de: "Was ist die 'Post-Crawford' Strategie?",
                nl: "Wat is 'post-Crawford' strategie?"
            },
            options: [
                {en: "Trailer always doubles immediately", es: "El perdedor siempre dobla inmediatamente", de: "Zurückliegender verdoppelt immer sofort", nl: "Achterloper verdubbelt altijd direct"},
                {en: "No cube allowed", es: "Cubo no permitido", de: "Würfel nicht erlaubt", nl: "Kubus niet toegestaan"},
                {en: "Conservative play", es: "Juego conservador", de: "Konservatives Spiel", nl: "Conservatief spel"},
                {en: "Gammons doubled", es: "Gammons doblados", de: "Gammons verdoppelt", nl: "Gammons verdubbeld"}
            ],
            correct: 0,
            explanation: {
                en: "Post-Crawford, the trailing player should double immediately as they have nothing to lose. The leader plays on for the gammon.",
                es: "Post-Crawford, el jugador que va perdiendo debe doblar inmediatamente ya que no tiene nada que perder.",
                de: "Post-Crawford sollte der Zurückliegende sofort verdoppeln da er nichts zu verlieren hat.",
                nl: "Post-Crawford moet de achterloper direct verdubbelen omdat hij niets te verliezen heeft."
            }
        },
        {
            question: {
                en: "What is a 'free drop' in match play?",
                es: "¿Qué es un 'abandono gratis' en juego de partida?",
                de: "Was ist ein 'Free Drop' im Match-Spiel?",
                nl: "Wat is een 'free drop' in match play?"
            },
            options: [
                {en: "Drop that doesn't hurt match equity", es: "Abandono que no daña equidad de partida", de: "Aufgabe die Match-Equity nicht schadet", nl: "Drop die match equity niet schaadt"},
                {en: "Automatic take", es: "Toma automática", de: "Automatische Annahme", nl: "Automatische take"},
                {en: "No cost double", es: "Doble sin costo", de: "Kostenlose Verdopplung", nl: "Gratis verdubbeling"},
                {en: "Time out", es: "Tiempo fuera", de: "Auszeit", nl: "Time out"}
            ],
            correct: 0,
            explanation: {
                en: "A free drop occurs when dropping a double doesn't significantly change your match winning chances due to the score situation.",
                es: "Un abandono gratis ocurre cuando abandonar un doble no cambia significativamente tus probabilidades de ganar la partida.",
                de: "Ein Free Drop tritt auf wenn das Aufgeben einer Verdopplung die Match-Gewinnchancen nicht signifikant ändert.",
                nl: "Een free drop gebeurt wanneer het droppen van een verdubbeling je match winkansen niet significant verandert."
            }
        },
        {
            question: {
                en: "What is 'gammon go' vs 'gammon save'?",
                es: "¿Qué es 'gammon go' vs 'gammon save'?",
                de: "Was ist 'Gammon Go' vs 'Gammon Save'?",
                nl: "Wat is 'gammon go' vs 'gammon save'?"
            },
            options: [
                {en: "Score situations affecting gammon value", es: "Situaciones de puntuación afectando valor del gammon", de: "Spielstände die Gammon-Wert beeinflussen", nl: "Score situaties die gammon waarde beïnvloeden"},
                {en: "Types of victories", es: "Tipos de victorias", de: "Arten von Siegen", nl: "Soorten overwinningen"},
                {en: "Tournament formats", es: "Formatos de torneo", de: "Turnierformate", nl: "Toernooi formaten"},
                {en: "Clock settings", es: "Configuraciones de reloj", de: "Uhreinstellungen", nl: "Klok instellingen"}
            ],
            correct: 0,
            explanation: {
                en: "Gammon go: scores where winning gammons is very valuable. Gammon save: scores where avoiding being gammoned is crucial.",
                es: "Gammon go: puntuaciones donde ganar gammons es muy valioso. Gammon save: donde evitar ser gammoneado es crucial.",
                de: "Gammon go: Spielstände wo Gammon-Gewinne sehr wertvoll sind. Gammon save: wo Gammon-Vermeidung entscheidend ist.",
                nl: "Gammon go: scores waar gammons winnen zeer waardevol is. Gammon save: waar gammon vermijden cruciaal is."
            }
        },
        {
            question: {
                en: "What is the '2-away, 2-away' cube strategy?",
                es: "¿Cuál es la estrategia del cubo '2-lejos, 2-lejos'?",
                de: "Was ist die '2-weg, 2-weg' Würfel-Strategie?",
                nl: "Wat is de '2-weg, 2-weg' kubus strategie?"
            },
            options: [
                {en: "Leader should be conservative with cube", es: "El líder debe ser conservador con el cubo", de: "Führender sollte konservativ mit Würfel sein", nl: "Leider moet conservatief zijn met kubus"},
                {en: "Always double immediately", es: "Siempre doblar inmediatamente", de: "Immer sofort verdoppeln", nl: "Altijd direct verdubbelen"},
                {en: "Never use cube", es: "Nunca usar el cubo", de: "Nie Würfel benutzen", nl: "Nooit kubus gebruiken"},
                {en: "Gammons don't count", es: "Los gammons no cuentan", de: "Gammons zählen nicht", nl: "Gammons tellen niet"}
            ],
            correct: 0,
            explanation: {
                en: "At 2-away, 2-away, the leader should be conservative with the cube as doubling activates gammons which only help the trailer.",
                es: "En 2-lejos, 2-lejos, el líder debe ser conservador con el cubo ya que doblar activa gammons que solo ayudan al que va perdiendo.",
                de: "Bei 2-weg, 2-weg sollte der Führende konservativ mit dem Würfel sein da Verdopplung Gammons aktiviert.",
                nl: "Bij 2-weg, 2-weg moet de leider conservatief zijn met de kubus omdat verdubbeling gammons activeert."
            }
        },
        {
            question: {
                en: "What does 'activate gammons' mean?",
                es: "¿Qué significa 'activar gammons'?",
                de: "Was bedeutet 'Gammons aktivieren'?",
                nl: "Wat betekent 'gammons activeren'?"
            },
            options: [
                {en: "Make gammons matter for score", es: "Hacer que los gammons importen para puntuación", de: "Gammons für Spielstand relevant machen", nl: "Gammons laten meetellen voor score"},
                {en: "Win by gammon", es: "Ganar por gammon", de: "Durch Gammon gewinnen", nl: "Winnen door gammon"},
                {en: "Avoid gammons", es: "Evitar gammons", de: "Gammons vermeiden", nl: "Gammons vermijden"},
                {en: "Double gammon value", es: "Doble valor de gammon", de: "Doppelter Gammon-Wert", nl: "Dubbele gammon waarde"}
            ],
            correct: 0,
            explanation: {
                en: "Activating gammons means turning the cube so that gammon wins will get the winner to exactly their target score or beyond.",
                es: "Activar gammons significa girar el cubo para que las victorias por gammon lleven al ganador exactamente a su puntuación objetivo.",
                de: "Gammons aktivieren bedeutet den Würfel so zu drehen dass Gammon-Gewinne genau zum Zielpunktestand führen.",
                nl: "Gammons activeren betekent de kubus zo draaien dat gammon winsten de winnaar exact naar hun doelscore brengen."
            }
        },
        {
            question: {
                en: "What is 'settlement' in backgammon?",
                es: "¿Qué es 'liquidación' en backgammon?",
                de: "Was ist 'Settlement' im Backgammon?",
                nl: "Wat is 'settlement' in backgammon?"
            },
            options: [
                {en: "Agreeing to end game at equity", es: "Acordar terminar juego en equidad", de: "Spiel bei Equity beenden", nl: "Instemmen spel te beëindigen bij equity"},
                {en: "Match conclusion", es: "Conclusión de partida", de: "Match-Abschluss", nl: "Match conclusie"},
                {en: "Draw offer", es: "Oferta de empate", de: "Remis-Angebot", nl: "Remise aanbod"},
                {en: "Cube maximum", es: "Máximo del cubo", de: "Würfel-Maximum", nl: "Kubus maximum"}
            ],
            correct: 0,
            explanation: {
                en: "Settlement is agreeing to end a game by paying/receiving the current equity value rather than playing it out. Common in money games.",
                es: "La liquidación es acordar terminar un juego pagando/recibiendo el valor de equidad actual en lugar de jugarlo.",
                de: "Settlement ist die Einigung ein Spiel durch Zahlung des aktuellen Equity-Wertes zu beenden statt es auszuspielen.",
                nl: "Settlement is instemmen een spel te beëindigen door de huidige equity waarde te betalen/ontvangen in plaats van uitspelen."
            }
        }
        // Questions 81-90: Computer programs and analysis
        {
            question: {
                en: "What is 'equity' in backgammon analysis?",
                es: "¿Qué es 'equidad' en el análisis de backgammon?",
                de: "Was ist 'Equity' in der Backgammon-Analyse?",
                nl: "Wat is 'equity' in backgammon analyse?"
            },
            options: [
                {en: "Expected value of position", es: "Valor esperado de la posición", de: "Erwartungswert der Position", nl: "Verwachte waarde van positie"},
                {en: "Fair market price", es: "Precio justo de mercado", de: "Fairer Marktpreis", nl: "Eerlijke marktprijs"},
                {en: "Score difference", es: "Diferencia de puntuación", de: "Punktedifferenz", nl: "Score verschil"},
                {en: "Time value", es: "Valor del tiempo", de: "Zeitwert", nl: "Tijdswaarde"}
            ],
            correct: 0,
            explanation: {
                en: "Equity is the expected value of a position, typically measured from -1 to +1 in money game, representing average winning expectation.",
                es: "La equidad es el valor esperado de una posición, típicamente medido de -1 a +1 en juego por dinero.",
                de: "Equity ist der Erwartungswert einer Position, typisch von -1 bis +1 im Geldspiel gemessen.",
                nl: "Equity is de verwachte waarde van een positie, typisch gemeten van -1 tot +1 in money game."
            }
        },
        {
            question: {
                en: "What does PR (Performance Rating) measure?",
                es: "¿Qué mide el PR (Calificación de Rendimiento)?",
                de: "Was misst PR (Performance Rating)?",
                nl: "Wat meet PR (Performance Rating)?"
            },
            options: [
                {en: "Average error rate per move", es: "Tasa de error promedio por movimiento", de: "Durchschnittliche Fehlerrate pro Zug", nl: "Gemiddelde foutmarge per zet"},
                {en: "Tournament ranking", es: "Clasificación del torneo", de: "Turnierrangliste", nl: "Toernooi ranking"},
                {en: "Win percentage", es: "Porcentaje de victorias", de: "Gewinnprozentsatz", nl: "Win percentage"},
                {en: "Playing speed", es: "Velocidad de juego", de: "Spielgeschwindigkeit", nl: "Speelsnelheid"}
            ],
            correct: 0,
            explanation: {
                en: "PR measures average error rate in equity per move. World-class players have PR under 5, club players often 10-15.",
                es: "PR mide la tasa de error promedio en equidad por movimiento. Jugadores de clase mundial tienen PR bajo 5.",
                de: "PR misst die durchschnittliche Fehlerrate in Equity pro Zug. Weltklasse-Spieler haben PR unter 5.",
                nl: "PR meet gemiddelde foutmarge in equity per zet. Wereldklasse spelers hebben PR onder 5."
            }
        },
        {
            question: {
                en: "What is a 'rollout' in backgammon analysis?",
                es: "¿Qué es un 'rollout' en el análisis de backgammon?",
                de: "Was ist ein 'Rollout' in der Backgammon-Analyse?",
                nl: "Wat is een 'rollout' in backgammon analyse?"
            },
            options: [
                {en: "Playing position many times to conclusion", es: "Jugar posición muchas veces hasta conclusión", de: "Position viele Male bis zum Ende spielen", nl: "Positie vele malen uitspelen tot conclusie"},
                {en: "Rolling the dice", es: "Lanzar los dados", de: "Würfeln", nl: "Dobbelstenen gooien"},
                {en: "Tournament format", es: "Formato de torneo", de: "Turnierformat", nl: "Toernooi formaat"},
                {en: "Opening sequence", es: "Secuencia de apertura", de: "Eröffnungssequenz", nl: "Openingsvolgorde"}
            ],
            correct: 0,
            explanation: {
                en: "A rollout is playing a position thousands of times to conclusion with computer analysis to determine the best play and exact equity.",
                es: "Un rollout es jugar una posición miles de veces hasta la conclusión con análisis computacional para determinar la mejor jugada.",
                de: "Ein Rollout ist eine Position tausende Male bis zum Ende zu spielen mit Computeranalyse für beste Züge.",
                nl: "Een rollout is een positie duizenden keren uitspelen tot conclusie met computer analyse voor beste zet."
            }
        },
        {
            question: {
                en: "What is 'neural network' evaluation in backgammon?",
                es: "¿Qué es la evaluación de 'red neuronal' en backgammon?",
                de: "Was ist 'neuronales Netzwerk' Bewertung im Backgammon?",
                nl: "Wat is 'neuraal netwerk' evaluatie in backgammon?"
            },
            options: [
                {en: "AI pattern recognition for positions", es: "Reconocimiento de patrones IA para posiciones", de: "KI-Mustererkennung für Positionen", nl: "AI patroonherkenning voor posities"},
                {en: "Internet play", es: "Juego por internet", de: "Internet-Spiel", nl: "Internet spel"},
                {en: "Tournament network", es: "Red de torneos", de: "Turniernetzwerk", nl: "Toernooi netwerk"},
                {en: "Social connections", es: "Conexiones sociales", de: "Soziale Verbindungen", nl: "Sociale connecties"}
            ],
            correct: 0,
            explanation: {
                en: "Neural networks use AI pattern recognition trained on millions of positions to evaluate positions and suggest best moves.",
                es: "Las redes neuronales usan reconocimiento de patrones IA entrenado en millones de posiciones para evaluar y sugerir mejores jugadas.",
                de: "Neuronale Netzwerke nutzen KI-Mustererkennung trainiert auf Millionen Positionen zur Bewertung.",
                nl: "Neurale netwerken gebruiken AI patroonherkenning getraind op miljoenen posities voor evaluatie."
            }
        },
        {
            question: {
                en: "What is 'MWC' in backgammon?",
                es: "¿Qué es 'MWC' en backgammon?",
                de: "Was ist 'MWC' im Backgammon?",
                nl: "Wat is 'MWC' in backgammon?"
            },
            options: [
                {en: "Match Winning Chances", es: "Probabilidades de Ganar la Partida", de: "Match-Gewinn-Chancen", nl: "Match Win Kansen"},
                {en: "Money Won or Cost", es: "Dinero Ganado o Costo", de: "Geld Gewonnen oder Kosten", nl: "Geld Gewonnen of Kosten"},
                {en: "Maximum Winning Cube", es: "Cubo Máximo de Ganancia", de: "Maximaler Gewinn-Würfel", nl: "Maximale Win Kubus"},
                {en: "Move Without Counting", es: "Mover Sin Contar", de: "Zug Ohne Zählen", nl: "Zet Zonder Tellen"}
            ],
            correct: 0,
            explanation: {
                en: "MWC (Match Winning Chances) is your probability of winning the entire match from the current position and score.",
                es: "MWC (Probabilidades de Ganar la Partida) es tu probabilidad de ganar toda la partida desde la posición y puntuación actual.",
                de: "MWC (Match-Gewinn-Chancen) ist die Wahrscheinlichkeit das gesamte Match von der aktuellen Position zu gewinnen.",
                nl: "MWC (Match Win Kansen) is je waarschijnlijkheid om de hele match te winnen vanaf huidige positie en score."
            }
        },
        {
            question: {
                en: "What is 'GWC' in backgammon?",
                es: "¿Qué es 'GWC' en backgammon?",
                de: "Was ist 'GWC' im Backgammon?",
                nl: "Wat is 'GWC' in backgammon?"
            },
            options: [
                {en: "Game Winning Chances", es: "Probabilidades de Ganar el Juego", de: "Spiel-Gewinn-Chancen", nl: "Spel Win Kansen"},
                {en: "Global World Championship", es: "Campeonato Mundial Global", de: "Globale Weltmeisterschaft", nl: "Globaal Wereldkampioenschap"},
                {en: "Great Wall Coverage", es: "Gran Cobertura de Muro", de: "Große Wand-Abdeckung", nl: "Grote Muur Dekking"},
                {en: "Gammon Win Count", es: "Conteo de Victorias Gammon", de: "Gammon-Gewinn-Zählung", nl: "Gammon Win Telling"}
            ],
            correct: 0,
            explanation: {
                en: "GWC (Game Winning Chances) is your probability of winning the current game, not considering match score implications.",
                es: "GWC (Probabilidades de Ganar el Juego) es tu probabilidad de ganar el juego actual, sin considerar implicaciones de puntuación.",
                de: "GWC (Spiel-Gewinn-Chancen) ist die Wahrscheinlichkeit das aktuelle Spiel zu gewinnen ohne Match-Implikationen.",
                nl: "GWC (Spel Win Kansen) is je waarschijnlijkheid om het huidige spel te winnen zonder match score implicaties."
            }
        },
        {
            question: {
                en: "What is 'variance reduction' in rollouts?",
                es: "¿Qué es 'reducción de varianza' en rollouts?",
                de: "Was ist 'Varianzreduktion' in Rollouts?",
                nl: "Wat is 'variantie reductie' in rollouts?"
            },
            options: [
                {en: "Using same dice for different plays", es: "Usar mismos dados para diferentes jugadas", de: "Gleiche Würfel für verschiedene Züge", nl: "Zelfde dobbelstenen voor verschillende zetten"},
                {en: "Reducing luck factor", es: "Reducir factor suerte", de: "Glücksfaktor reduzieren", nl: "Geluksfactor verminderen"},
                {en: "Limiting cube use", es: "Limitar uso del cubo", de: "Würfelnutzung begrenzen", nl: "Kubus gebruik beperken"},
                {en: "Playing faster", es: "Jugar más rápido", de: "Schneller spielen", nl: "Sneller spelen"}
            ],
            correct: 0,
            explanation: {
                en: "Variance reduction uses the same dice sequences for comparing different plays in rollouts, making comparisons more accurate.",
                es: "La reducción de varianza usa las mismas secuencias de dados para comparar diferentes jugadas en rollouts.",
                de: "Varianzreduktion nutzt gleiche Würfelsequenzen für verschiedene Züge in Rollouts für genauere Vergleiche.",
                nl: "Variantie reductie gebruikt dezelfde dobbelsteen sequenties voor verschillende zetten in rollouts."
            }
        },
        {
            question: {
                en: "What is 'luck factor' in backgammon analysis?",
                es: "¿Qué es el 'factor suerte' en el análisis de backgammon?",
                de: "Was ist der 'Glücksfaktor' in der Backgammon-Analyse?",
                nl: "Wat is 'geluksfactor' in backgammon analyse?"
            },
            options: [
                {en: "How much dice affected outcome", es: "Cuánto los dados afectaron el resultado", de: "Wie sehr Würfel das Ergebnis beeinflussten", nl: "Hoeveel dobbelstenen uitkomst beïnvloedden"},
                {en: "Player superstition", es: "Superstición del jugador", de: "Spieler-Aberglaube", nl: "Speler bijgeloof"},
                {en: "Random factor", es: "Factor aleatorio", de: "Zufallsfaktor", nl: "Willekeurige factor"},
                {en: "Skill rating", es: "Calificación de habilidad", de: "Fähigkeitsbewertung", nl: "Vaardigheid beoordeling"}
            ],
            correct: 0,
            explanation: {
                en: "Luck factor measures how much better or worse your dice rolls were compared to average expectation, usually shown as percentage.",
                es: "El factor suerte mide cuánto mejores o peores fueron tus tiradas de dados comparadas con la expectativa promedio.",
                de: "Glücksfaktor misst wie viel besser oder schlechter die Würfel waren verglichen mit durchschnittlicher Erwartung.",
                nl: "Geluksfactor meet hoeveel beter of slechter je dobbelworpen waren vergeleken met gemiddelde verwachting."
            }
        },
        {
            question: {
                en: "What is 'PRAT' in backgammon tournaments?",
                es: "¿Qué es 'PRAT' en torneos de backgammon?",
                de: "Was ist 'PRAT' in Backgammon-Turnieren?",
                nl: "Wat is 'PRAT' in backgammon toernooien?"
            },
            options: [
                {en: "Position, Race, And Threat", es: "Posición, Carrera, Y Amenaza", de: "Position, Rennen, Und Bedrohung", nl: "Positie, Race, En Dreiging"},
                {en: "Player Rating Average Total", es: "Total Promedio de Calificación del Jugador", de: "Spieler-Bewertung Durchschnitt Gesamt", nl: "Speler Rating Gemiddelde Totaal"},
                {en: "Prize Allocation Table", es: "Tabla de Asignación de Premios", de: "Preiszuteilungstabelle", nl: "Prijs Toewijzing Tabel"},
                {en: "Professional Rating", es: "Calificación Profesional", de: "Professionelle Bewertung", nl: "Professionele Beoordeling"}
            ],
            correct: 0,
            explanation: {
                en: "PRAT (Position, Race, And Threat) is a framework for evaluating positions considering structure, pip count, and hitting chances.",
                es: "PRAT (Posición, Carrera, Y Amenaza) es un marco para evaluar posiciones considerando estructura, conteo de pips, y oportunidades.",
                de: "PRAT (Position, Rennen, Und Bedrohung) ist ein Framework zur Positionsbewertung mit Struktur, Pip-Count und Schlagchancen.",
                nl: "PRAT (Positie, Race, En Dreiging) is een framework voor positie evaluatie met structuur, pip telling, en slagkansen."
            }
        },
        {
            question: {
                en: "What is 'XG' in modern backgammon?",
                es: "¿Qué es 'XG' en el backgammon moderno?",
                de: "Was ist 'XG' im modernen Backgammon?",
                nl: "Wat is 'XG' in modern backgammon?"
            },
            options: [
                {en: "eXtreme Gammon analysis program", es: "Programa de análisis eXtreme Gammon", de: "eXtreme Gammon Analyseprogramm", nl: "eXtreme Gammon analyse programma"},
                {en: "Extra Games", es: "Juegos Extra", de: "Extra Spiele", nl: "Extra Spellen"},
                {en: "Expert Grade", es: "Grado Experto", de: "Experten-Grad", nl: "Expert Niveau"},
                {en: "Exchange Gaming", es: "Intercambio de Juegos", de: "Austausch-Gaming", nl: "Uitwisseling Gaming"}
            ],
            correct: 0,
            explanation: {
                en: "XG (eXtreme Gammon) is one of the strongest backgammon analysis programs, widely used for game analysis and improvement.",
                es: "XG (eXtreme Gammon) es uno de los programas de análisis más fuertes, ampliamente usado para análisis y mejora.",
                de: "XG (eXtreme Gammon) ist eines der stärksten Backgammon-Analyseprogramme für Spielanalyse und Verbesserung.",
                nl: "XG (eXtreme Gammon) is een van de sterkste backgammon analyse programma's voor spel analyse en verbetering."
            }
        },
        // Questions 91-100: Advanced concepts and modern theory
        {
            question: {
                en: "What is 'checker play vs cube play' distinction?",
                es: "¿Cuál es la distinción entre 'juego de fichas vs juego del cubo'?",
                de: "Was ist der Unterschied zwischen 'Steinspiel vs Würfelspiel'?",
                nl: "Wat is het verschil tussen 'stenen spel vs kubus spel'?"
            },
            options: [
                {en: "Moving pieces vs doubling decisions", es: "Mover piezas vs decisiones de doblar", de: "Steine bewegen vs Verdopplungsentscheidungen", nl: "Stukken bewegen vs verdubbeling beslissingen"},
                {en: "Fast vs slow play", es: "Juego rápido vs lento", de: "Schnelles vs langsames Spiel", nl: "Snel vs langzaam spel"},
                {en: "Money vs match", es: "Dinero vs partida", de: "Geld vs Match", nl: "Geld vs match"},
                {en: "Online vs live", es: "En línea vs en vivo", de: "Online vs Live", nl: "Online vs live"}
            ],
            correct: 0,
            explanation: {
                en: "Checker play involves moving pieces optimally, while cube play involves doubling decisions. Both require different skills and can be measured separately.",
                es: "El juego de fichas implica mover piezas óptimamente, mientras el juego del cubo implica decisiones de doblar.",
                de: "Steinspiel bedeutet Steine optimal zu bewegen, während Würfelspiel Verdopplungsentscheidungen betrifft.",
                nl: "Stenen spel betreft stukken optimaal bewegen, terwijl kubus spel verdubbeling beslissingen betreft."
            }
        },
        {
            question: {
                en: "What is 'cube efficiency'?",
                es: "¿Qué es la 'eficiencia del cubo'?",
                de: "Was ist 'Würfel-Effizienz'?",
                nl: "Wat is 'kubus efficiëntie'?"
            },
            options: [
                {en: "Using cube to maximize equity", es: "Usar cubo para maximizar equidad", de: "Würfel nutzen um Equity zu maximieren", nl: "Kubus gebruiken om equity te maximaliseren"},
                {en: "Speed of doubling", es: "Velocidad de doblar", de: "Geschwindigkeit des Verdoppelns", nl: "Snelheid van verdubbelen"},
                {en: "Cube handling technique", es: "Técnica de manejo del cubo", de: "Würfel-Handhabungstechnik", nl: "Kubus behandelingstechniek"},
                {en: "Physical cube quality", es: "Calidad física del cubo", de: "Physische Würfelqualität", nl: "Fysieke kubus kwaliteit"}
            ],
            correct: 0,
            explanation: {
                en: "Cube efficiency is how well you use the doubling cube to maximize your equity through proper timing of doubles and takes.",
                es: "La eficiencia del cubo es qué tan bien usas el cubo de doblar para maximizar tu equidad con timing adecuado.",
                de: "Würfel-Effizienz ist wie gut man den Verdopplungswürfel nutzt um Equity durch richtiges Timing zu maximieren.",
                nl: "Kubus efficiëntie is hoe goed je de verdubbeling kubus gebruikt om equity te maximaliseren door juiste timing."
            }
        },
        {
            question: {
                en: "What is 'volatility' in backgammon positions?",
                es: "¿Qué es la 'volatilidad' en posiciones de backgammon?",
                de: "Was ist 'Volatilität' in Backgammon-Positionen?",
                nl: "Wat is 'volatiliteit' in backgammon posities?"
            },
            options: [
                {en: "How much position can change quickly", es: "Cuánto puede cambiar rápidamente la posición", de: "Wie schnell sich Position ändern kann", nl: "Hoeveel positie snel kan veranderen"},
                {en: "Emotional state", es: "Estado emocional", de: "Emotionaler Zustand", nl: "Emotionele staat"},
                {en: "Dice randomness", es: "Aleatoriedad de dados", de: "Würfel-Zufälligkeit", nl: "Dobbelsteen willekeur"},
                {en: "Market value", es: "Valor de mercado", de: "Marktwert", nl: "Marktwaarde"}
            ],
            correct: 0,
            explanation: {
                en: "Volatility measures how dramatically a position can change with the next few rolls. High volatility favors the trailer in match play.",
                es: "La volatilidad mide cuán dramáticamente puede cambiar una posición con los próximos tiros. Alta volatilidad favorece al que va perdiendo.",
                de: "Volatilität misst wie dramatisch sich eine Position mit den nächsten Würfen ändern kann.",
                nl: "Volatiliteit meet hoe dramatisch een positie kan veranderen met de volgende worpen."
            }
        },
        {
            question: {
                en: "What is 'cube leverage' in match play?",
                es: "¿Qué es el 'apalancamiento del cubo' en juego de partida?",
                de: "Was ist 'Würfel-Hebelwirkung' im Match-Spiel?",
                nl: "Wat is 'kubus hefboomwerking' in match play?"
            },
            options: [
                {en: "Cube value relative to match score", es: "Valor del cubo relativo a puntuación de partida", de: "Würfelwert relativ zum Spielstand", nl: "Kubus waarde relatief tot match score"},
                {en: "Physical cube size", es: "Tamaño físico del cubo", de: "Physische Würfelgröße", nl: "Fysieke kubus grootte"},
                {en: "Doubling frequency", es: "Frecuencia de doblar", de: "Verdopplungsfrequenz", nl: "Verdubbeling frequentie"},
                {en: "Cube ownership", es: "Propiedad del cubo", de: "Würfelbesitz", nl: "Kubus eigendom"}
            ],
            correct: 0,
            explanation: {
                en: "Cube leverage is how valuable the cube is at specific match scores. Higher leverage means doubling/redoubling decisions are more critical.",
                es: "El apalancamiento del cubo es cuán valioso es el cubo en puntuaciones específicas de partida.",
                de: "Würfel-Hebelwirkung ist wie wertvoll der Würfel bei bestimmten Spielständen ist.",
                nl: "Kubus hefboomwerking is hoe waardevol de kubus is bij specifieke match scores."
            }
        },
        {
            question: {
                en: "What is 'Janowski's formula'?",
                es: "¿Qué es la 'fórmula de Janowski'?",
                de: "Was ist 'Janowskis Formel'?",
                nl: "Wat is 'Janowski's formule'?"
            },
            options: [
                {en: "Formula for take points in match play", es: "Fórmula para puntos de toma en juego de partida", de: "Formel für Annahmepunkte im Match", nl: "Formule voor take punten in match play"},
                {en: "Pip counting method", es: "Método de conteo de pips", de: "Pip-Zählmethode", nl: "Pip telmethode"},
                {en: "Opening theory", es: "Teoría de apertura", de: "Eröffnungstheorie", nl: "Openingstheorie"},
                {en: "Tournament format", es: "Formato de torneo", de: "Turnierformat", nl: "Toernooi formaat"}
            ],
            correct: 0,
            explanation: {
                en: "Janowski's formula calculates match take points based on score, considering gammon rates and match equities for doubling decisions.",
                es: "La fórmula de Janowski calcula puntos de toma en partidas basándose en puntuación, considerando tasas de gammon.",
                de: "Janowskis Formel berechnet Match-Annahmepunkte basierend auf Spielstand und Gammon-Raten.",
                nl: "Janowski's formule berekent match take punten gebaseerd op score, met gammon percentages."
            }
        },
        {
            question: {
                en: "What is 'Woolsey's rule' for doubling?",
                es: "¿Qué es la 'regla de Woolsey' para doblar?",
                de: "Was ist 'Woolseys Regel' für Verdopplung?",
                nl: "Wat is 'Woolsey's regel' voor verdubbelen?"
            },
            options: [
                {en: "Double if 10% chance opponent drops", es: "Doblar si 10% de probabilidad que oponente abandone", de: "Verdoppeln wenn 10% Chance auf Aufgabe", nl: "Verdubbel als 10% kans tegenstander dropt"},
                {en: "Always double early", es: "Siempre doblar temprano", de: "Immer früh verdoppeln", nl: "Altijd vroeg verdubbelen"},
                {en: "Never double from bar", es: "Nunca doblar desde la barra", de: "Nie von der Bar verdoppeln", nl: "Nooit vanaf bar verdubbelen"},
                {en: "Double at 25%", es: "Doblar al 25%", de: "Bei 25% verdoppeln", nl: "Verdubbel bij 25%"}
            ],
            correct: 0,
            explanation: {
                en: "Woolsey's rule: if you're not sure whether to double, and you think there's at least 10% chance opponent will drop, then double.",
                es: "Regla de Woolsey: si no estás seguro si doblar, y piensas que hay al menos 10% de probabilidad que el oponente abandone, dobla.",
                de: "Woolseys Regel: Bei Unsicherheit über Verdopplung, wenn mindestens 10% Chance auf Aufgabe besteht, verdoppeln.",
                nl: "Woolsey's regel: bij twijfel over verdubbelen, als er minstens 10% kans is dat tegenstander dropt, verdubbel dan."
            }
        },
        {
            question: {
                en: "What is 'Neil's numbers' in match play?",
                es: "¿Qué son los 'números de Neil' en juego de partida?",
                de: "Was sind 'Neils Zahlen' im Match-Spiel?",
                nl: "Wat zijn 'Neil's getallen' in match play?"
            },
            options: [
                {en: "Key match score reference points", es: "Puntos de referencia clave de puntuación", de: "Wichtige Match-Spielstand Referenzpunkte", nl: "Belangrijke match score referentiepunten"},
                {en: "Dice combinations", es: "Combinaciones de dados", de: "Würfelkombinationen", nl: "Dobbelsteen combinaties"},
                {en: "Pip count shortcuts", es: "Atajos de conteo de pips", de: "Pip-Zähl Abkürzungen", nl: "Pip tel snelkoppelingen"},
                {en: "Opening moves", es: "Movimientos de apertura", de: "Eröffnungszüge", nl: "Openingszetten"}
            ],
            correct: 0,
            explanation: {
                en: "Neil's numbers (Kazaross) are match equity reference points showing key score differences, like -2,-4 has 30% equity for trailer.",
                es: "Los números de Neil (Kazaross) son puntos de referencia de equidad mostrando diferencias clave de puntuación.",
                de: "Neils Zahlen (Kazaross) sind Match-Equity Referenzpunkte die wichtige Spielstandsdifferenzen zeigen.",
                nl: "Neil's getallen (Kazaross) zijn match equity referentiepunten die belangrijke score verschillen tonen."
            }
        },
        {
            question: {
                en: "What is 'Kit Woolsey's doubling window'?",
                es: "¿Qué es la 'ventana de doblaje de Kit Woolsey'?",
                de: "Was ist 'Kit Woolseys Verdopplungsfenster'?",
                nl: "Wat is 'Kit Woolsey's verdubbeling venster'?"
            },
            options: [
                {en: "Range between double and redouble points", es: "Rango entre puntos de doble y redoble", de: "Bereich zwischen Verdopplungs- und Reverdopplungspunkten", nl: "Bereik tussen verdubbel en herverdubbel punten"},
                {en: "Time to make decision", es: "Tiempo para tomar decisión", de: "Zeit für Entscheidung", nl: "Tijd om beslissing te nemen"},
                {en: "Tournament schedule", es: "Horario del torneo", de: "Turnierplan", nl: "Toernooi schema"},
                {en: "Computer interface", es: "Interfaz de computadora", de: "Computer-Interface", nl: "Computer interface"}
            ],
            correct: 0,
            explanation: {
                en: "The doubling window is the equity range where it's correct to double but opponent should still take. Typically between about 50-66% GWC.",
                es: "La ventana de doblaje es el rango de equidad donde es correcto doblar pero el oponente aún debe tomar.",
                de: "Das Verdopplungsfenster ist der Equity-Bereich wo Verdopplung korrekt ist aber der Gegner noch annehmen sollte.",
                nl: "Het verdubbeling venster is het equity bereik waar verdubbelen correct is maar tegenstander nog moet taken."
            }
        },
        {
            question: {
                en: "What is 'Robertie's 57 rule'?",
                es: "¿Qué es la 'regla 57 de Robertie'?",
                de: "Was ist 'Roberties 57-Regel'?",
                nl: "Wat is 'Robertie's 57 regel'?"
            },
            options: [
                {en: "Race doubling at 10% lead", es: "Doblar en carrera con 10% de ventaja", de: "Rennen-Verdopplung bei 10% Führung", nl: "Race verdubbelen bij 10% voorsprong"},
                {en: "Opening move choice", es: "Elección de movimiento de apertura", de: "Eröffnungszug-Wahl", nl: "Openingszet keuze"},
                {en: "Match equity table", es: "Tabla de equidad de partida", de: "Match-Equity-Tabelle", nl: "Match equity tabel"},
                {en: "Bearoff technique", es: "Técnica de salida", de: "Bearoff-Technik", nl: "Bearoff techniek"}
            ],
            correct: 0,
            explanation: {
                en: "Robertie's 57 rule: in a race, double when ahead by 10% of the leader's pip count (roughly 8-10% actual advantage).",
                es: "Regla 57 de Robertie: en una carrera, dobla cuando estés adelante por 10% del conteo de pips del líder.",
                de: "Roberties 57-Regel: Im Rennen verdoppeln wenn man 10% des Pip-Counts des Führenden voraus ist.",
                nl: "Robertie's 57 regel: in een race, verdubbel als je 10% van leidende pip telling voor staat."
            }
        },
        {
            question: {
                en: "What is 'Nactation' pip counting system based on?",
                es: "¿En qué se basa el sistema de conteo 'Nactation'?",
                de: "Worauf basiert das 'Nactation' Pip-Zählsystem?",
                nl: "Waarop is het 'Nactation' pip telsysteem gebaseerd?"
            },
            options: [
                {en: "Grouping checkers in sets of 5", es: "Agrupar fichas en conjuntos de 5", de: "Steine in 5er-Gruppen gruppieren", nl: "Stenen groeperen in sets van 5"},
                {en: "Binary counting", es: "Conteo binario", de: "Binäres Zählen", nl: "Binair tellen"},
                {en: "Mental arithmetic", es: "Aritmética mental", de: "Kopfrechnen", nl: "Hoofdrekenen"},
                {en: "Computer calculation", es: "Cálculo computacional", de: "Computer-Berechnung", nl: "Computer berekening"}
            ],
            correct: 0,
            explanation: {
                en: "Nactation groups checkers in sets of 5 (called 'nacks') for easier mental calculation, with each nack worth specific pip values by location.",
                es: "Nactation agrupa fichas en conjuntos de 5 (llamados 'nacks') para cálculo mental más fácil.",
                de: "Nactation gruppiert Steine in 5er-Sets (genannt 'Nacks') für einfachere mentale Berechnung.",
                nl: "Nactation groepeert stenen in sets van 5 (genaamd 'nacks') voor makkelijkere mentale berekening."
            }
        }
    ]
};