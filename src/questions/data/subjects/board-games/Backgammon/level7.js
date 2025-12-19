// Backgammon Quiz - Level 7: Legend
(function() {
  const level7 = {
    name: {
      en: "Backgammon - Legend",
      es: "Backgammon - Leyenda",
      de: "Backgammon - Legende",
      nl: "Backgammon - Legende"
    },
    questions: [
      {
        question: {
          en: "In match play at DMP (Double Match Point), how does cube strategy change?",
          es: "En juego de match en DMP (Punto de Doble Match), ¿cómo cambia la estrategia del cubo?",
          de: "Im Match-Spiel bei DMP (Double Match Point), wie ändert sich die Würfel-Strategie?",
          nl: "In wedstrijdspel bij DMP (Double Match Point), hoe verandert de dobbelstrategie?"
        },
        options: [
          { en: "The cube is dead - you should play for maximum winning chances only", es: "El cubo está muerto - debes jugar solo por máximas posibilidades de ganar", de: "Der Würfel ist tot - du solltest nur auf maximale Gewinnchancen spielen", nl: "De dobbel is dood - je moet alleen voor maximale winkansen spelen" },
          { en: "You should double more aggressively", es: "Debes doblar más agresivamente", de: "Du solltest aggressiver verdoppeln", nl: "Je moet agressiever verdubbelen" },
          { en: "Gammon value increases", es: "El valor del gammon aumenta", de: "Der Gammon-Wert steigt", nl: "De gammon-waarde neemt toe" },
          { en: "Doubling becomes more conservative", es: "Doblar se vuelve más conservador", de: "Verdoppeln wird konservativer", nl: "Verdubbelen wordt conservatiever" }
        ],
        correct: 0,
        explanation: {
          en: "At DMP, the cube is 'dead' because both players need exactly 1 point to win. Gammons don't matter, and doubling would just allow the opponent to win immediately by accepting. You should make plays that maximize winning chances, even if they risk gammons.",
          es: "En DMP, el cubo está 'muerto' porque ambos jugadores necesitan exactamente 1 punto para ganar. Los gammons no importan, y doblar solo permitiría al oponente ganar inmediatamente al aceptar. Debes hacer jugadas que maximicen las posibilidades de ganar, incluso si arriesgan gammons.",
          de: "Bei DMP ist der Würfel 'tot', weil beide Spieler genau 1 Punkt zum Gewinnen brauchen. Gammons spielen keine Rolle, und Verdoppeln würde dem Gegner nur ermöglichen, sofort durch Annahme zu gewinnen. Du solltest Züge machen, die die Gewinnchancen maximieren, selbst wenn sie Gammons riskieren.",
          nl: "Bij DMP is de dobbel 'dood' omdat beide spelers precies 1 punt nodig hebben om te winnen. Gammons maken niet uit, en verdubbelen zou de tegenstander alleen maar in staat stellen om meteen te winnen door te accepteren. Je moet zetten doen die de winkansen maximaliseren, zelfs als ze gammons riskeren."
        }
      },
      {
        question: {
          en: "What is 'Kleinman count' used for in backgammon?",
          es: "¿Para qué se utiliza el 'recuento de Kleinman' en backgammon?",
          de: "Wofür wird der 'Kleinman-Count' im Backgammon verwendet?",
          nl: "Waarvoor wordt de 'Kleinman count' gebruikt in backgammon?"
        },
        options: [
          { en: "Evaluating cube decisions in races", es: "Evaluar decisiones de cubo en carreras", de: "Bewertung von Würfelentscheidungen in Rennen", nl: "Evalueren van dobbelsbeslissingen in races" },
          { en: "Determining if you should play a back game", es: "Determinar si debes jugar un back game", de: "Bestimmen, ob man ein Back Game spielen sollte", nl: "Bepalen of je een back game moet spelen" },
          { en: "Calculating when to break anchor points", es: "Calcular cuándo romper puntos de anclaje", de: "Berechnen, wann Ankerpunkte aufgegeben werden sollten", nl: "Berekenen wanneer ankerpunten te breken" },
          { en: "Measuring blitz attack strength", es: "Medir la fuerza del ataque blitz", de: "Messen der Blitz-Angriffsstärke", nl: "Meten van blitz-aanvalskracht" }
        ],
        correct: 1,
        explanation: {
          en: "The Kleinman count helps determine if a back game is viable. Count your checkers: (2x checkers on opponent's 1-pt) + (checkers on opponent's 2-pt) + (checkers on opponent's 3-pt). If the count is 8 or less, the back game is likely unplayable.",
          es: "El recuento de Kleinman ayuda a determinar si un back game es viable. Cuenta tus fichas: (2x fichas en el punto 1 del oponente) + (fichas en el punto 2 del oponente) + (fichas en el punto 3 del oponente). Si el recuento es 8 o menos, el back game probablemente no es jugable.",
          de: "Der Kleinman-Count hilft zu bestimmen, ob ein Back Game spielbar ist. Zähle deine Steine: (2x Steine auf Gegner-1-Punkt) + (Steine auf Gegner-2-Punkt) + (Steine auf Gegner-3-Punkt). Wenn die Zählung 8 oder weniger ist, ist das Back Game wahrscheinlich nicht spielbar.",
          nl: "De Kleinman count helpt bepalen of een back game levensvatbaar is. Tel je schijven: (2x schijven op tegenstander 1-punt) + (schijven op tegenstander 2-punt) + (schijven op tegenstander 3-punt). Als de telling 8 of minder is, is het back game waarschijnlijk niet speelbaar."
        }
      },
      {
        question: {
          en: "At 2-away 3-away score, what is the optimal cube strategy for the trailer?",
          es: "En una puntuación de 2-away 3-away, ¿cuál es la estrategia óptima del cubo para el que va detrás?",
          de: "Bei einem 2-away 3-away Punktestand, was ist die optimale Würfelstrategie für den Nachzügler?",
          nl: "Bij een 2-away 3-away score, wat is de optimale dobbelstrategie voor de achterligger?"
        },
        options: [
          { en: "Double very aggressively (around 55% winning chances)", es: "Doblar muy agresivamente (alrededor del 55% de posibilidades de ganar)", de: "Sehr aggressiv verdoppeln (etwa 55% Gewinnchancen)", nl: "Zeer aggressief verdubbelen (ongeveer 55% winkansen)" },
          { en: "Never double - wait for Crawford game", es: "Nunca doblar - esperar al juego Crawford", de: "Niemals verdoppeln - auf Crawford-Spiel warten", nl: "Nooit verdubbelen - wachten op Crawford game" },
          { en: "Only double with gammon threats", es: "Solo doblar con amenazas de gammon", de: "Nur mit Gammon-Drohungen verdoppeln", nl: "Alleen verdubbelen met gammon-dreigingen" },
          { en: "Use standard money game cube strategy", es: "Usar estrategia de cubo estándar de juego de dinero", de: "Standard-Geldspiel-Würfelstrategie verwenden", nl: "Standaard geldspel dobbelstrategie gebruiken" }
        ],
        correct: 0,
        explanation: {
          en: "At 2-away 3-away, the trailer (player at 3-away) should double very aggressively, around 55% winning chances. This is because losing drops them to 2-away 2-away (Crawford), while winning ties the match. The leader should take quite liberally since being doubled to 4 isn't that much worse than being at 2.",
          es: "En 2-away 3-away, el que va detrás (jugador en 3-away) debe doblar muy agresivamente, alrededor del 55% de posibilidades de ganar. Esto es porque perder los deja en 2-away 2-away (Crawford), mientras que ganar empata el match. El líder debe aceptar bastante liberalmente ya que ser doblado a 4 no es mucho peor que estar en 2.",
          de: "Bei 2-away 3-away sollte der Nachzügler (Spieler bei 3-away) sehr aggressiv verdoppeln, bei etwa 55% Gewinnchancen. Dies liegt daran, dass ein Verlust auf 2-away 2-away (Crawford) führt, während ein Gewinn das Match ausgleicht. Der Führende sollte recht großzügig annehmen, da eine Verdopplung auf 4 nicht viel schlechter ist als bei 2 zu stehen.",
          nl: "Bij 2-away 3-away moet de achterligger (speler op 3-away) zeer aggressief verdubbelen, bij ongeveer 55% winkansen. Dit komt omdat verliezen hen naar 2-away 2-away (Crawford) brengt, terwijl winnen de wedstrijd gelijk trekt. De leider moet vrij vrijgevig accepteren omdat verdubbeld worden naar 4 niet veel slechter is dan op 2 staan."
        }
      },
      {
        question: {
          en: "What is a 'Mexican standoff' position in backgammon?",
          es: "¿Qué es una posición de 'punto muerto mexicano' en backgammon?",
          de: "Was ist eine 'Mexican Standoff'-Position im Backgammon?",
          nl: "Wat is een 'Mexican standoff' positie in backgammon?"
        },
        options: [
          { en: "Both players have symmetric positions and neither wants to move first", es: "Ambos jugadores tienen posiciones simétricas y ninguno quiere moverse primero", de: "Beide Spieler haben symmetrische Positionen und keiner will zuerst ziehen", nl: "Beide spelers hebben symmetrische posities en geen van beiden wil als eerste bewegen" },
          { en: "A position where both players are stuck on the bar", es: "Una posición donde ambos jugadores están atrapados en la barra", de: "Eine Position, bei der beide Spieler auf der Bar feststecken", nl: "Een positie waar beide spelers op de bar zitten" },
          { en: "A race where both players have identical pip counts", es: "Una carrera donde ambos jugadores tienen recuentos de pip idénticos", de: "Ein Rennen, bei dem beide Spieler identische Pip-Counts haben", nl: "Een race waar beide spelers identieke pip counts hebben" },
          { en: "When both players refuse to double", es: "Cuando ambos jugadores se niegan a doblar", de: "Wenn beide Spieler sich weigern zu verdoppeln", nl: "Wanneer beide spelers weigeren te verdubbelen" }
        ],
        correct: 0,
        explanation: {
          en: "A Mexican standoff occurs when both players have mirror-image positions, and whoever moves first will be at a disadvantage. This creates a zugzwang-like situation where neither player wants to act first. Often seen in symmetrical holding games.",
          es: "Un punto muerto mexicano ocurre cuando ambos jugadores tienen posiciones en espejo, y quien se mueva primero estará en desventaja. Esto crea una situación similar al zugzwang donde ningún jugador quiere actuar primero. A menudo se ve en juegos de retención simétricos.",
          de: "Ein Mexican Standoff tritt auf, wenn beide Spieler spiegelbildliche Positionen haben und wer zuerst zieht, im Nachteil sein wird. Dies schafft eine Zugzwang-ähnliche Situation, in der keiner zuerst handeln möchte. Oft in symmetrischen Haltespielen zu sehen.",
          nl: "Een Mexican standoff vindt plaats wanneer beide spelers spiegelbeeldposities hebben, en wie als eerste beweegt in het nadeel zal zijn. Dit creëert een Zugzwang-achtige situatie waarbij geen van beide spelers als eerste wil handelen. Vaak gezien in symmetrische houdspellen."
        }
      },
      {
        question: {
          en: "What is 'reference position' theory in cube decisions?",
          es: "¿Qué es la teoría de 'posición de referencia' en decisiones de cubo?",
          de: "Was ist die 'Referenzpositions'-Theorie bei Würfelentscheidungen?",
          nl: "Wat is de 'referentiepositie' theorie in dobbelsbeslissingen?"
        },
        options: [
          { en: "Compare uncertain positions to known benchmark positions with similar equity", es: "Comparar posiciones inciertas con posiciones de referencia conocidas con equidad similar", de: "Vergleiche unsichere Positionen mit bekannten Benchmark-Positionen mit ähnlichem Equity", nl: "Vergelijk onzekere posities met bekende benchmark posities met vergelijkbare equity" },
          { en: "Always refer to the opening position before doubling", es: "Siempre referirse a la posición de apertura antes de doblar", de: "Immer auf die Eröffnungsposition verweisen, bevor verdoppelt wird", nl: "Altijd verwijzen naar de openingspositie voordat je verdubbelt" },
          { en: "Use GNUbg database positions as guidelines", es: "Usar posiciones de base de datos de GNUbg como guías", de: "GNUbg-Datenbankpositionen als Richtlinien verwenden", nl: "GNUbg database posities als richtlijnen gebruiken" },
          { en: "Compare current position to previous games", es: "Comparar la posición actual con juegos anteriores", de: "Aktuelle Position mit früheren Spielen vergleichen", nl: "Huidige positie vergelijken met eerdere spellen" }
        ],
        correct: 0,
        explanation: {
          en: "Reference position theory involves comparing complex positions to simpler, well-studied benchmark positions with known cube actions. For example, knowing the doubling point in a pure race helps evaluate mixed positions with race-like characteristics.",
          es: "La teoría de posición de referencia implica comparar posiciones complejas con posiciones de referencia más simples y bien estudiadas con acciones de cubo conocidas. Por ejemplo, conocer el punto de doblaje en una carrera pura ayuda a evaluar posiciones mixtas con características similares a carreras.",
          de: "Die Referenzpositionstheorie beinhaltet den Vergleich komplexer Positionen mit einfacheren, gut untersuchten Benchmark-Positionen mit bekannten Würfelaktionen. Zum Beispiel hilft das Wissen um den Verdopplungspunkt in einem reinen Rennen, gemischte Positionen mit rennähnlichen Eigenschaften zu bewerten.",
          nl: "Referentiepositie theorie houdt in dat complexe posities worden vergeleken met eenvoudigere, goed bestudeerde benchmark posities met bekende dobbelsacties. Bijvoorbeeld, het kennen van het verdubbelpunt in een zuivere race helpt bij het evalueren van gemengde posities met race-achtige kenmerken."
        }
      },
      {
        question: {
          en: "In a blitz attack, what is the 'critical moment' for cube decisions?",
          es: "En un ataque blitz, ¿cuál es el 'momento crítico' para las decisiones de cubo?",
          de: "Bei einem Blitz-Angriff, was ist der 'kritische Moment' für Würfelentscheidungen?",
          nl: "Bij een blitz-aanval, wat is het 'kritieke moment' voor dobbelsbeslissingen?"
        },
        options: [
          { en: "When you have closed 4 points in your home board", es: "Cuando has cerrado 4 puntos en tu tablero interior", de: "Wenn du 4 Punkte in deinem Heimfeld geschlossen hast", nl: "Wanneer je 4 punten in je thuisbord hebt gesloten" },
          { en: "Just before you close the 5th point - often a powerful double", es: "Justo antes de cerrar el 5º punto - a menudo un doble poderoso", de: "Kurz bevor du den 5. Punkt schließt - oft eine starke Verdopplung", nl: "Net voordat je het 5e punt sluit - vaak een krachtige verdubbeling" },
          { en: "After closing a full prime", es: "Después de cerrar un prime completo", de: "Nach dem Schließen eines vollen Primes", nl: "Na het sluiten van een volledige prime" },
          { en: "When opponent has 2 checkers on the bar", es: "Cuando el oponente tiene 2 fichas en la barra", de: "Wenn der Gegner 2 Steine auf der Bar hat", nl: "Wanneer tegenstander 2 schijven op de bar heeft" }
        ],
        correct: 1,
        explanation: {
          en: "The critical cube moment in a blitz is often just BEFORE you close your 5th home board point. Once you have 4 points made and are threatening the 5th, this is frequently a powerful double/pass. If you wait until after making the 5th point, you've often lost your market.",
          es: "El momento crítico del cubo en un blitz es a menudo justo ANTES de cerrar tu 5º punto del tablero interior. Una vez que tienes 4 puntos hechos y estás amenazando el 5º, esto es frecuentemente un doble/pase poderoso. Si esperas hasta después de hacer el 5º punto, a menudo has perdido tu mercado.",
          de: "Der kritische Würfelmoment in einem Blitz ist oft kurz BEVOR du deinen 5. Heimfeld-Punkt schließt. Sobald du 4 Punkte gemacht hast und den 5. androhst, ist dies häufig eine starke Verdopplung/Pass. Wenn du wartest, bis du den 5. Punkt gemacht hast, hast du oft deinen Markt verloren.",
          nl: "Het kritieke dobbelsmoment in een blitz is vaak net VOORDAT je je 5e thuisbordpunt sluit. Zodra je 4 punten hebt gemaakt en het 5e bedreigt, is dit vaak een krachtige verdubbeling/pas. Als je wacht tot na het maken van het 5e punt, heb je vaak je markt verloren."
        }
      },
      {
        question: {
          en: "What is 'Neil's number' (or 'Zadeh's number') in bearing off races?",
          es: "¿Qué es el 'número de Neil' (o 'número de Zadeh') en carreras de sacar fichas?",
          de: "Was ist 'Neils Zahl' (oder 'Zadehs Zahl') in Auswürfelrennen?",
          nl: "Wat is 'Neil's nummer' (of 'Zadeh's nummer') in uitneemraces?"
        },
        options: [
          { en: "A formula to calculate exact winning chances in bearoff positions", es: "Una fórmula para calcular las posibilidades exactas de ganar en posiciones de bearoff", de: "Eine Formel zur Berechnung exakter Gewinnchancen in Auswürfelpositionen", nl: "Een formule om exacte winkansen in bearoff-posities te berekenen" },
          { en: "The number 8 - used to adjust pip counts when on roll", es: "El número 8 - usado para ajustar recuentos de pip cuando es tu turno", de: "Die Zahl 8 - wird verwendet, um Pip-Counts anzupassen, wenn man am Zug ist", nl: "Het getal 8 - gebruikt om pip counts aan te passen wanneer je aan de beurt bent" },
          { en: "A cube decision formula for contact positions", es: "Una fórmula de decisión de cubo para posiciones de contacto", de: "Eine Würfelentscheidungsformel für Kontaktpositionen", nl: "Een dobbelsbeslissingsformule voor contactposities" },
          { en: "The minimum pip lead needed to double in a race", es: "La ventaja mínima de pip necesaria para doblar en una carrera", de: "Der minimale Pip-Vorsprung, der zum Verdoppeln in einem Rennen benötigt wird", nl: "Het minimale pip-voorsprong nodig om te verdubbelen in een race" }
        ],
        correct: 1,
        explanation: {
          en: "Neil's number is 8. When comparing bearoff races, if you're on roll (about to roll), subtract 8 from your pip count for comparison purposes. This adjusts for the advantage of having the next roll. Also useful in racing positions.",
          es: "El número de Neil es 8. Al comparar carreras de bearoff, si estás en turno (a punto de tirar), resta 8 de tu recuento de pip para fines de comparación. Esto ajusta la ventaja de tener el siguiente tiro. También útil en posiciones de carrera.",
          de: "Neils Zahl ist 8. Beim Vergleich von Auswürfelrennen ziehe 8 von deinem Pip-Count ab, wenn du am Zug bist (kurz vor dem Würfeln). Dies passt den Vorteil des nächsten Wurfs an. Auch nützlich in Rennpositionen.",
          nl: "Neil's nummer is 8. Bij het vergelijken van bearoff-races, als je aan de beurt bent (op het punt staat te gooien), trek dan 8 af van je pip count voor vergelijkingsdoeleinden. Dit past aan voor het voordeel van de volgende worp. Ook nuttig in racingposities."
        }
      },
      {
        question: {
          en: "What is a 'kauder paradox' in backgammon?",
          es: "¿Qué es una 'paradoja de kauder' en backgammon?",
          de: "Was ist ein 'Kauder-Paradoxon' im Backgammon?",
          nl: "Wat is een 'kauder paradox' in backgammon?"
        },
        options: [
          { en: "A position where proper checker play is worse than an error at certain match scores", es: "Una posición donde el juego correcto de fichas es peor que un error en ciertas puntuaciones de match", de: "Eine Position, bei der richtiges Spielen schlechter ist als ein Fehler bei bestimmten Match-Punkteständen", nl: "Een positie waar correct spel slechter is dan een fout bij bepaalde wedstrijdscores" },
          { en: "When doubling is correct but accepting loses more", es: "Cuando doblar es correcto pero aceptar pierde más", de: "Wenn Verdoppeln korrekt ist, aber Annahme mehr verliert", nl: "Wanneer verdubbelen correct is maar accepteren meer verliest" },
          { en: "A race position that seems like a pass but is actually a take", es: "Una posición de carrera que parece un pase pero es en realidad una aceptación", de: "Eine Rennposition, die wie ein Pass aussieht, aber tatsächlich eine Annahme ist", nl: "Een racepositie die lijkt op een pas maar eigenlijk een acceptatie is" },
          { en: "When cube ownership changes optimal strategy", es: "Cuando la propiedad del cubo cambia la estrategia óptima", de: "Wenn Würfelbesitz die optimale Strategie ändert", nl: "Wanneer dobbelsbezit de optimale strategie verandert" }
        ],
        correct: 0,
        explanation: {
          en: "The Kauder Paradox occurs at certain match scores where the theoretically correct checker play is actually WORSE for match equity than making an 'error'. This happens because the match score creates unusual incentives that override normal equity considerations.",
          es: "La Paradoja de Kauder ocurre en ciertas puntuaciones de match donde el juego teóricamente correcto de fichas es en realidad PEOR para la equidad del match que cometer un 'error'. Esto sucede porque la puntuación del match crea incentivos inusuales que anulan las consideraciones normales de equidad.",
          de: "Das Kauder-Paradoxon tritt bei bestimmten Match-Punkteständen auf, wo das theoretisch korrekte Spielen tatsächlich SCHLECHTER für die Match-Equity ist als einen 'Fehler' zu machen. Dies geschieht, weil der Match-Punktestand ungewöhnliche Anreize schafft, die normale Equity-Überlegungen außer Kraft setzen.",
          nl: "De Kauder Paradox vindt plaats bij bepaalde wedstrijdscores waarbij het theoretisch correcte spel eigenlijk SLECHTER is voor wedstrijd-equity dan het maken van een 'fout'. Dit gebeurt omdat de wedstrijdscore ongebruikelijke prikkels creëert die normale equity-overwegingen overschrijven."
        }
      },
      {
        question: {
          en: "At 4-away 4-away Crawford (post-Crawford for both), what is the cube strategy?",
          es: "En 4-away 4-away Crawford (post-Crawford para ambos), ¿cuál es la estrategia del cubo?",
          de: "Bei 4-away 4-away Crawford (post-Crawford für beide), was ist die Würfelstrategie?",
          nl: "Bij 4-away 4-away Crawford (post-Crawford voor beide), wat is de dobbelstrategie?"
        },
        options: [
          { en: "Very aggressive doubling and liberal takes - similar to DMP", es: "Doblaje muy agresivo y aceptaciones liberales - similar a DMP", de: "Sehr aggressives Verdoppeln und liberale Annahmen - ähnlich wie DMP", nl: "Zeer aggressief verdubbelen en liberale acceptaties - vergelijkbaar met DMP" },
          { en: "Standard money game cube strategy", es: "Estrategia de cubo estándar de juego de dinero", de: "Standard-Geldspiel-Würfelstrategie", nl: "Standaard geldspel dobbelstrategie" },
          { en: "Never double - gammons are critical", es: "Nunca doblar - los gammons son críticos", de: "Niemals verdoppeln - Gammons sind kritisch", nl: "Nooit verdubbelen - gammons zijn cruciaal" },
          { en: "Wait for clear double/pass positions", es: "Esperar posiciones claras de doble/pase", de: "Auf klare Verdoppeln/Pass-Positionen warten", nl: "Wachten op duidelijke verdubbel/pas posities" }
        ],
        correct: 0,
        explanation: {
          en: "At 4-away 4-away post-Crawford, both players must win 2 games (can't use Crawford anymore). This creates very aggressive cube action - double around 55-60% and take quite liberally. It's similar to DMP psychology but you can still use the cube effectively.",
          es: "En 4-away 4-away post-Crawford, ambos jugadores deben ganar 2 juegos (ya no pueden usar Crawford). Esto crea una acción de cubo muy agresiva - doblar alrededor del 55-60% y aceptar bastante liberalmente. Es similar a la psicología de DMP pero aún puedes usar el cubo efectivamente.",
          de: "Bei 4-away 4-away post-Crawford müssen beide Spieler 2 Spiele gewinnen (können Crawford nicht mehr nutzen). Dies schafft sehr aggressive Würfelaktionen - verdoppeln bei etwa 55-60% und recht liberal annehmen. Es ist ähnlich wie DMP-Psychologie, aber du kannst den Würfel noch effektiv nutzen.",
          nl: "Bij 4-away 4-away post-Crawford moeten beide spelers 2 spellen winnen (kunnen Crawford niet meer gebruiken). Dit creëert zeer aggressieve dobbelsactie - verdubbel rond 55-60% en accepteer vrij liberaal. Het is vergelijkbaar met DMP-psychologie maar je kunt de dobbel nog steeds effectief gebruiken."
        }
      },
      {
        question: {
          en: "What is 'Robertie's rule' for hitting loose in blitz positions?",
          es: "¿Qué es la 'regla de Robertie' para golpear suelto en posiciones de blitz?",
          de: "Was ist 'Roberties Regel' für loses Schlagen in Blitz-Positionen?",
          nl: "Wat is 'Robertie's regel' voor los slaan in blitz-posities?"
        },
        options: [
          { en: "Hit if you can make 4+ points next turn, otherwise don't", es: "Golpea si puedes hacer 4+ puntos en el siguiente turno, de lo contrario no", de: "Schlage, wenn du im nächsten Zug 4+ Punkte machen kannst, sonst nicht", nl: "Sla als je 4+ punten kunt maken volgende beurt, anders niet" },
          { en: "Always hit in your home board during a blitz", es: "Siempre golpea en tu tablero interior durante un blitz", de: "Schlage immer in deinem Heimfeld während eines Blitzes", nl: "Sla altijd in je thuisbord tijdens een blitz" },
          { en: "Hit if you have at least 3 home board points made", es: "Golpea si tienes al menos 3 puntos del tablero interior hechos", de: "Schlage, wenn du mindestens 3 Heimfeld-Punkte gemacht hast", nl: "Sla als je minstens 3 thuisbordpunten hebt gemaakt" },
          { en: "Hit only if opponent has another checker back", es: "Golpea solo si el oponente tiene otra ficha atrás", de: "Schlage nur, wenn der Gegner einen weiteren Stein zurück hat", nl: "Sla alleen als tegenstander nog een andere schijf achter heeft" }
        ],
        correct: 0,
        explanation: {
          en: "Robertie's rule states that when attacking (blitzing), you should hit a checker loose (leaving a blot) if you can make 4 or more home board points on your next turn. This aggressive hitting accelerates the blitz and increases the opponent's difficulty re-entering.",
          es: "La regla de Robertie establece que al atacar (blitz), debes golpear una ficha suelta (dejando un blot) si puedes hacer 4 o más puntos del tablero interior en tu siguiente turno. Este golpeo agresivo acelera el blitz y aumenta la dificultad del oponente para reingresar.",
          de: "Roberties Regel besagt, dass du beim Angreifen (Blitzen) einen Stein lose schlagen solltest (einen Blot hinterlassend), wenn du im nächsten Zug 4 oder mehr Heimfeld-Punkte machen kannst. Dieses aggressive Schlagen beschleunigt den Blitz und erhöht die Schwierigkeit des Gegners beim Wiedereintritt.",
          nl: "Robertie's regel stelt dat je bij het aanvallen (blitzen) een schijf los moet slaan (een blot achterlaten) als je 4 of meer thuisbordpunten kunt maken in je volgende beurt. Dit aggressieve slaan versnelt de blitz en verhoogt de moeilijkheid voor de tegenstander om weer binnen te komen."
        }
      },
      {
        question: {
          en: "What is 'Woolsey's law' regarding cube ownership?",
          es: "¿Qué es la 'ley de Woolsey' con respecto a la propiedad del cubo?",
          de: "Was ist 'Woolseys Gesetz' bezüglich Würfelbesitz?",
          nl: "Wat is 'Woolsey's wet' met betrekking tot dobbelsbezit?"
        },
        options: [
          { en: "Take if you're not absolutely sure it's a pass; cube ownership is very valuable", es: "Acepta si no estás absolutamente seguro de que es un pase; la propiedad del cubo es muy valiosa", de: "Nimm an, wenn du nicht absolut sicher bist, dass es ein Pass ist; Würfelbesitz ist sehr wertvoll", nl: "Accepteer als je niet absoluut zeker bent dat het een pas is; dobbelsbezit is zeer waardevol" },
          { en: "Always double when you have 60% winning chances", es: "Siempre dobla cuando tienes 60% de posibilidades de ganar", de: "Verdopple immer bei 60% Gewinnchancen", nl: "Verdubbel altijd wanneer je 60% winkansen hebt" },
          { en: "Never give up cube ownership in volatile positions", es: "Nunca renuncies a la propiedad del cubo en posiciones volátiles", de: "Gib niemals Würfelbesitz in volatilen Positionen auf", nl: "Geef nooit dobbelsbezit op in volatiele posities" },
          { en: "Redouble immediately after taking", es: "Redobla inmediatamente después de aceptar", de: "Verdopple sofort nach Annahme", nl: "Verdubbel onmiddellijk na acceptatie" }
        ],
        correct: 0,
        explanation: {
          en: "Woolsey's law: When in doubt, take. Cube ownership (having control of when to redouble) is so valuable that borderline positions should usually be accepted rather than passed. It's often better to take a slightly bad cube than to pass a close one.",
          es: "Ley de Woolsey: En caso de duda, acepta. La propiedad del cubo (tener control de cuándo redoblar) es tan valiosa que las posiciones límite generalmente deben aceptarse en lugar de pasarse. A menudo es mejor aceptar un cubo ligeramente malo que pasar uno cercano.",
          de: "Woolseys Gesetz: Im Zweifel annehmen. Würfelbesitz (Kontrolle darüber, wann verdoppelt wird) ist so wertvoll, dass Grenzpositionen normalerweise angenommen statt gepasst werden sollten. Es ist oft besser, einen leicht schlechten Würfel anzunehmen als einen knappen zu passen.",
          nl: "Woolsey's wet: Bij twijfel, accepteren. Dobbelsbezit (controle over wanneer te verdubbelen) is zo waardevol dat grensposities meestal geaccepteerd moeten worden in plaats van gepasseerd. Het is vaak beter om een licht slechte dobbel te accepteren dan een krappe te passen."
        }
      },
      {
        question: {
          en: "In match play, what is 'gammon value' (GV) and when is it most important?",
          es: "En juego de match, ¿qué es el 'valor de gammon' (GV) y cuándo es más importante?",
          de: "Im Match-Spiel, was ist 'Gammon-Wert' (GV) und wann ist er am wichtigsten?",
          nl: "In wedstrijdspel, wat is 'gammon waarde' (GV) en wanneer is het het belangrijkst?"
        },
        options: [
          { en: "GV measures how much winning a gammon matters; highest near match end (2-away 4-away, etc.)", es: "GV mide cuánto importa ganar un gammon; más alto cerca del final del match (2-away 4-away, etc.)", de: "GV misst, wie viel ein Gammon-Gewinn zählt; am höchsten gegen Match-Ende (2-away 4-away usw.)", nl: "GV meet hoeveel het winnen van een gammon uitmaakt; hoogst aan het einde van de wedstrijd (2-away 4-away, enz.)" },
          { en: "GV is always 100% in match play", es: "GV es siempre 100% en juego de match", de: "GV ist immer 100% im Match-Spiel", nl: "GV is altijd 100% in wedstrijdspel" },
          { en: "GV represents the probability of winning a gammon", es: "GV representa la probabilidad de ganar un gammon", de: "GV stellt die Wahrscheinlichkeit dar, ein Gammon zu gewinnen", nl: "GV vertegenwoordigt de waarschijnlijkheid om een gammon te winnen" },
          { en: "GV only matters in money games, not matches", es: "GV solo importa en juegos de dinero, no en matches", de: "GV zählt nur in Geldspielen, nicht in Matches", nl: "GV is alleen van belang in geldspellen, niet in wedstrijden" }
        ],
        correct: 0,
        explanation: {
          en: "Gammon Value (GV) measures how much winning a gammon instead of a single game improves your match equity. It varies by score - at DMP it's 0% (gammons don't help), while at scores like 2-away 4-away it can be very high because a gammon wins the match.",
          es: "El Valor de Gammon (GV) mide cuánto mejora ganar un gammon en lugar de un juego simple tu equidad de match. Varía según la puntuación - en DMP es 0% (los gammons no ayudan), mientras que en puntuaciones como 2-away 4-away puede ser muy alto porque un gammon gana el match.",
          de: "Der Gammon-Wert (GV) misst, wie sehr ein Gammon-Gewinn statt eines einfachen Sieges deine Match-Equity verbessert. Er variiert je nach Punktestand - bei DMP ist er 0% (Gammons helfen nicht), während er bei Punkteständen wie 2-away 4-away sehr hoch sein kann, weil ein Gammon das Match gewinnt.",
          nl: "Gammon Waarde (GV) meet hoeveel het winnen van een gammon in plaats van een enkel spel je wedstrijd-equity verbetert. Het varieert per score - bij DMP is het 0% (gammons helpen niet), terwijl bij scores zoals 2-away 4-away het zeer hoog kan zijn omdat een gammon de wedstrijd wint."
        }
      },
      {
        question: {
          en: "What is a 'free drop' and when does it occur in match play?",
          es: "¿Qué es un 'free drop' y cuándo ocurre en juego de match?",
          de: "Was ist ein 'Free Drop' und wann tritt er im Match-Spiel auf?",
          nl: "Wat is een 'free drop' en wanneer vindt het plaats in wedstrijdspel?"
        },
        options: [
          { en: "When you can pass a double without losing match equity (e.g., 2-away 2-away)", es: "Cuando puedes pasar un doble sin perder equidad de match (ej., 2-away 2-away)", de: "Wenn du einen Doppel passen kannst, ohne Match-Equity zu verlieren (z.B. 2-away 2-away)", nl: "Wanneer je een verdubbeling kunt passen zonder wedstrijd-equity te verliezen (bijv. 2-away 2-away)" },
          { en: "When opponent drops your initial double", es: "Cuando el oponente pasa tu doble inicial", de: "Wenn der Gegner deine erste Verdopplung passt", nl: "Wanneer tegenstander je eerste verdubbeling past" },
          { en: "A position where you should pass without thinking", es: "Una posición donde debes pasar sin pensar", de: "Eine Position, bei der du ohne Nachdenken passen solltest", nl: "Een positie waar je moet passen zonder na te denken" },
          { en: "When you can resign without penalty", es: "Cuando puedes renunciar sin penalización", de: "Wenn du ohne Strafe aufgeben kannst", nl: "Wanneer je kunt opgeven zonder boete" }
        ],
        correct: 0,
        explanation: {
          en: "A free drop occurs when passing a cube costs you the same match equity as taking and losing. Most common at 2-away 2-away (Crawford): passing loses the match, and taking then losing also loses the match, so they're equivalent. You should pass quite liberally here.",
          es: "Un free drop ocurre cuando pasar un cubo te cuesta la misma equidad de match que aceptar y perder. Más común en 2-away 2-away (Crawford): pasar pierde el match, y aceptar y luego perder también pierde el match, por lo que son equivalentes. Debes pasar bastante liberalmente aquí.",
          de: "Ein Free Drop tritt auf, wenn das Passen eines Würfels die gleiche Match-Equity kostet wie Annehmen und Verlieren. Am häufigsten bei 2-away 2-away (Crawford): Passen verliert das Match, und Annehmen dann Verlieren verliert auch das Match, also sind sie gleichwertig. Du solltest hier recht großzügig passen.",
          nl: "Een free drop vindt plaats wanneer het passen van een dobbel je dezelfde wedstrijd-equity kost als accepteren en verliezen. Meest voorkomend bij 2-away 2-away (Crawford): passen verliest de wedstrijd, en accepteren dan verliezen verliest ook de wedstrijd, dus ze zijn equivalent. Je moet hier vrij liberaal passen."
        }
      },
      {
        question: {
          en: "What does 'EMG' stand for and what does it measure?",
          es: "¿Qué significa 'EMG' y qué mide?",
          de: "Was bedeutet 'EMG' und was misst es?",
          nl: "Wat betekent 'EMG' en wat meet het?"
        },
        options: [
          { en: "Effective Match-winning chance Given (the cube decision) - measures cube efficiency", es: "Posibilidad efectiva de ganar el Match dada (la decisión del cubo) - mide la eficiencia del cubo", de: "Effektive Match-Gewinnchance Gegeben (die Würfelentscheidung) - misst Würfeleffizienz", nl: "Effectieve Match-winkans Gegeven (de dobbelsbeslissing) - meet dobbelsefficiëntie" },
          { en: "Expected Match Gammon percentage", es: "Porcentaje esperado de Gammon del Match", de: "Erwarteter Match-Gammon-Prozentsatz", nl: "Verwacht Match Gammon percentage" },
          { en: "Error Margin in Gammons", es: "Margen de Error en Gammons", de: "Fehlermarge bei Gammons", nl: "Foutmarge in Gammons" },
          { en: "Equity Measurement Guide for cube decisions", es: "Guía de Medición de Equidad para decisiones de cubo", de: "Equity-Messungsanleitung für Würfelentscheidungen", nl: "Equity Meetgids voor dobbelsbeslissingen" }
        ],
        correct: 0,
        explanation: {
          en: "EMG (Effective Match-winning chance Given) measures cube efficiency at a specific match score. It compares actual match equity to what it would be in a pure race. EMG < 1.0 means the cube is less efficient than normal; EMG > 1.0 means more efficient.",
          es: "EMG (Posibilidad efectiva de ganar el Match dada) mide la eficiencia del cubo en una puntuación específica del match. Compara la equidad real del match con lo que sería en una carrera pura. EMG < 1.0 significa que el cubo es menos eficiente de lo normal; EMG > 1.0 significa más eficiente.",
          de: "EMG (Effektive Match-Gewinnchance Gegeben) misst die Würfeleffizienz bei einem bestimmten Match-Punktestand. Es vergleicht die tatsächliche Match-Equity mit dem, was es in einem reinen Rennen wäre. EMG < 1.0 bedeutet, dass der Würfel weniger effizient ist als normal; EMG > 1.0 bedeutet effizienter.",
          nl: "EMG (Effectieve Match-winkans Gegeven) meet dobbelsefficiëntie bij een specifieke wedstrijdscore. Het vergelijkt werkelijke wedstrijd-equity met wat het zou zijn in een zuivere race. EMG < 1.0 betekent dat de dobbel minder efficiënt is dan normaal; EMG > 1.0 betekent efficiënter."
        }
      },
      {
        question: {
          en: "What is 'Snowie error rate' and how is it measured?",
          es: "¿Qué es la 'tasa de error de Snowie' y cómo se mide?",
          de: "Was ist die 'Snowie-Fehlerrate' und wie wird sie gemessen?",
          nl: "Wat is het 'Snowie foutpercentage' en hoe wordt het gemeten?"
        },
        options: [
          { en: "Average equity loss per move in millipoints (thousandths of a point)", es: "Pérdida promedio de equidad por movimiento en milipuntos (milésimas de punto)", de: "Durchschnittlicher Equity-Verlust pro Zug in Millipunkten (Tausendsteln eines Punktes)", nl: "Gemiddeld equity-verlies per zet in millipunten (duizendsten van een punt)" },
          { en: "Percentage of moves that are blunders", es: "Porcentaje de movimientos que son errores graves", de: "Prozentsatz der Züge, die grobe Fehler sind", nl: "Percentage van zetten dat blunders zijn" },
          { en: "Number of errors per 100 rolls", es: "Número de errores por 100 tiradas", de: "Anzahl der Fehler pro 100 Würfe", nl: "Aantal fouten per 100 worpen" },
          { en: "Time taken to analyze each position", es: "Tiempo necesario para analizar cada posición", de: "Zeit zur Analyse jeder Position", nl: "Tijd nodig om elke positie te analyseren" }
        ],
        correct: 0,
        explanation: {
          en: "Snowie error rate measures play quality as the average equity loss per move, typically in millipoints (0.001 points). A world-class player might have a 3-4 mpt error rate, intermediate players 6-8 mpt, beginners 15+ mpt. Lower is better.",
          es: "La tasa de error de Snowie mide la calidad del juego como la pérdida promedio de equidad por movimiento, típicamente en milipuntos (0.001 puntos). Un jugador de clase mundial podría tener una tasa de error de 3-4 mpt, jugadores intermedios 6-8 mpt, principiantes 15+ mpt. Más bajo es mejor.",
          de: "Die Snowie-Fehlerrate misst die Spielqualität als durchschnittlichen Equity-Verlust pro Zug, typischerweise in Millipunkten (0,001 Punkte). Ein Weltklasse-Spieler könnte eine Fehlerrate von 3-4 mpt haben, Fortgeschrittene 6-8 mpt, Anfänger 15+ mpt. Niedriger ist besser.",
          nl: "Het Snowie foutpercentage meet de speelkwaliteit als het gemiddelde equity-verlies per zet, meestal in millipunten (0,001 punten). Een wereldklasse speler kan een foutpercentage van 3-4 mpt hebben, gevorderde spelers 6-8 mpt, beginners 15+ mpt. Lager is beter."
        }
      },
      {
        question: {
          en: "What is the 'Stick-Rice doubling window' concept?",
          es: "¿Qué es el concepto de 'ventana de doblaje de Stick-Rice'?",
          de: "Was ist das 'Stick-Rice Verdopplungsfenster'-Konzept?",
          nl: "Wat is het 'Stick-Rice verdubbel-venster' concept?"
        },
        options: [
          { en: "The range between minimal doubling point and last take point - your doubling window", es: "El rango entre el punto mínimo de doblaje y el último punto de aceptación - tu ventana de doblaje", de: "Der Bereich zwischen minimalem Verdopplungspunkt und letztem Annahmepunkt - dein Verdopplungsfenster", nl: "Het bereik tussen minimaal verdubbelpunt en laatste acceptatiepunt - jouw verdubbel-venster" },
          { en: "A specific opening strategy developed by Stick and Rice", es: "Una estrategia de apertura específica desarrollada por Stick y Rice", de: "Eine spezifische Eröffnungsstrategie von Stick und Rice", nl: "Een specifieke openingsstrategie ontwikkeld door Stick en Rice" },
          { en: "The time window for making cube decisions at match score 2-2", es: "La ventana de tiempo para tomar decisiones de cubo en puntuación de match 2-2", de: "Das Zeitfenster für Würfelentscheidungen bei Match-Punktestand 2-2", nl: "Het tijdvenster voor dobbelsbeslissingen bij wedstrijdscore 2-2" },
          { en: "A formula for calculating gammon chances", es: "Una fórmula para calcular posibilidades de gammon", de: "Eine Formel zur Berechnung von Gammon-Chancen", nl: "Een formule voor het berekenen van gammon-kansen" }
        ],
        correct: 0,
        explanation: {
          en: "The doubling window is the equity range where you have a correct double but your opponent has a correct take. It exists between your minimal doubling point (below which you shouldn't double) and your opponent's last take point (above which they should pass).",
          es: "La ventana de doblaje es el rango de equidad donde tienes un doble correcto pero tu oponente tiene una aceptación correcta. Existe entre tu punto mínimo de doblaje (por debajo del cual no debes doblar) y el último punto de aceptación de tu oponente (por encima del cual debe pasar).",
          de: "Das Verdopplungsfenster ist der Equity-Bereich, in dem du eine korrekte Verdopplung hast, aber dein Gegner eine korrekte Annahme hat. Es existiert zwischen deinem minimalen Verdopplungspunkt (darunter solltest du nicht verdoppeln) und dem letzten Annahmepunkt deines Gegners (darüber sollte er passen).",
          nl: "Het verdubbel-venster is het equity-bereik waarin je een correcte verdubbeling hebt maar je tegenstander een correcte acceptatie heeft. Het bestaat tussen jouw minimale verdubbelpunt (daaronder moet je niet verdubbelen) en het laatste acceptatiepunt van je tegenstander (daarboven moet hij passen)."
        }
      },
      {
        question: {
          en: "What is a 'thematic error' in backgammon analysis?",
          es: "¿Qué es un 'error temático' en el análisis de backgammon?",
          de: "Was ist ein 'thematischer Fehler' in der Backgammon-Analyse?",
          nl: "Wat is een 'thematische fout' in backgammon-analyse?"
        },
        options: [
          { en: "A recurring mistake pattern showing misunderstanding of a specific concept", es: "Un patrón de error recurrente que muestra falta de comprensión de un concepto específico", de: "Ein wiederkehrendes Fehlermuster, das Missverständnis eines bestimmten Konzepts zeigt", nl: "Een terugkerend foutpatroon dat een begripsgebrek van een specifiek concept toont" },
          { en: "An error in the opening theme", es: "Un error en el tema de apertura", de: "Ein Fehler im Eröffnungsthema", nl: "Een fout in het openingsthema" },
          { en: "A mistake in match score calculations", es: "Un error en los cálculos de puntuación de match", de: "Ein Fehler bei Match-Punktestandsberechnungen", nl: "Een fout in wedstrijdscore berekeningen" },
          { en: "An error caused by time pressure", es: "Un error causado por presión de tiempo", de: "Ein Fehler durch Zeitdruck verursacht", nl: "Een fout veroorzaakt door tijdsdruk" }
        ],
        correct: 0,
        explanation: {
          en: "A thematic error is a systematic mistake that reveals misunderstanding of a particular backgammon concept. For example, consistently hitting too much in holding games, or regularly doubling too late in blitzes. These patterns indicate areas needing study rather than random errors.",
          es: "Un error temático es un error sistemático que revela falta de comprensión de un concepto particular de backgammon. Por ejemplo, golpear consistentemente demasiado en juegos de retención, o regularmente doblar demasiado tarde en blitzes. Estos patrones indican áreas que necesitan estudio en lugar de errores aleatorios.",
          de: "Ein thematischer Fehler ist ein systematischer Fehler, der Missverständnis eines bestimmten Backgammon-Konzepts offenbart. Zum Beispiel konstant zu viel in Haltespielen zu schlagen oder regelmäßig zu spät in Blitzen zu verdoppeln. Diese Muster zeigen Bereiche, die Studium benötigen, statt zufälliger Fehler.",
          nl: "Een thematische fout is een systematische fout die een begripsgebrek van een bepaald backgammon-concept onthult. Bijvoorbeeld, consequent te veel slaan in houdspellen, of regelmatig te laat verdubbelen in blitzes. Deze patronen wijzen op gebieden die studie nodig hebben in plaats van willekeurige fouten."
        }
      },
      {
        question: {
          en: "What is 'cube equity' vs 'nominal equity' in backgammon?",
          es: "¿Qué es 'equidad de cubo' vs 'equidad nominal' en backgammon?",
          de: "Was ist 'Würfel-Equity' vs 'Nominal-Equity' im Backgammon?",
          nl: "Wat is 'dobbels equity' vs 'nominale equity' in backgammon?"
        },
        options: [
          { en: "Cube equity considers optimal cube actions; nominal equity assumes no further doubling", es: "La equidad de cubo considera acciones óptimas del cubo; la equidad nominal asume que no hay más doblajes", de: "Würfel-Equity berücksichtigt optimale Würfelaktionen; Nominal-Equity nimmt keine weiteren Verdopplungen an", nl: "Dobbels equity houdt rekening met optimale dobbelsacties; nominale equity veronderstelt geen verdere verdubbeling" },
          { en: "Cube equity is higher than nominal equity", es: "La equidad de cubo es mayor que la equidad nominal", de: "Würfel-Equity ist höher als Nominal-Equity", nl: "Dobbels equity is hoger dan nominale equity" },
          { en: "Nominal equity includes gammon values; cube equity doesn't", es: "La equidad nominal incluye valores de gammon; la equidad de cubo no", de: "Nominal-Equity enthält Gammon-Werte; Würfel-Equity nicht", nl: "Nominale equity omvat gammon waarden; dobbels equity niet" },
          { en: "They are the same in money games", es: "Son lo mismo en juegos de dinero", de: "Sie sind in Geldspielen identisch", nl: "Ze zijn hetzelfde in geldspellen" }
        ],
        correct: 0,
        explanation: {
          en: "Nominal equity (or 'dead cube equity') is your expected value if no one can double anymore. Cube equity (or 'live cube equity') assumes both players will make optimal cube decisions going forward. The difference shows the value of cube access and ownership.",
          es: "La equidad nominal (o 'equidad de cubo muerto') es tu valor esperado si nadie puede doblar más. La equidad de cubo (o 'equidad de cubo vivo') asume que ambos jugadores tomarán decisiones óptimas del cubo en adelante. La diferencia muestra el valor del acceso y propiedad del cubo.",
          de: "Nominal-Equity (oder 'Toter-Würfel-Equity') ist dein erwarteter Wert, wenn niemand mehr verdoppeln kann. Würfel-Equity (oder 'Lebender-Würfel-Equity') nimmt an, dass beide Spieler optimale Würfelentscheidungen treffen werden. Der Unterschied zeigt den Wert von Würfelzugang und -besitz.",
          nl: "Nominale equity (of 'dode dobbel equity') is je verwachte waarde als niemand meer kan verdubbelen. Dobbels equity (of 'levende dobbel equity') veronderstelt dat beide spelers optimale dobbelsbeslissingen zullen maken. Het verschil toont de waarde van dobbelstoegang en -bezit."
        }
      },
      {
        question: {
          en: "What is the 'European rule' in backgammon and how does it affect play?",
          es: "¿Qué es la 'regla europea' en backgammon y cómo afecta al juego?",
          de: "Was ist die 'Europäische Regel' im Backgammon und wie beeinflusst sie das Spiel?",
          nl: "Wat is de 'Europese regel' in backgammon en hoe beïnvloedt het het spel?"
        },
        options: [
          { en: "Both players roll simultaneously; if doubles, the higher roll moves first", es: "Ambos jugadores tiran simultáneamente; si dobles, el tiro más alto mueve primero", de: "Beide Spieler würfeln gleichzeitig; bei Pasch bewegt der höhere Wurf zuerst", nl: "Beide spelers gooien tegelijkertijd; bij dobbelstenen, de hogere worp beweegt eerst" },
          { en: "Gammons count as double even without the cube", es: "Los gammons cuentan como doble incluso sin el cubo", de: "Gammons zählen als doppelt auch ohne Würfel", nl: "Gammons tellen als dubbel zelfs zonder de dobbel" },
          { en: "Must accept all doubles until cube reaches 8", es: "Debe aceptar todos los dobles hasta que el cubo alcance 8", de: "Muss alle Verdopplungen annehmen, bis der Würfel 8 erreicht", nl: "Moet alle verdubbeling accepteren tot dobbel 8 bereikt" },
          { en: "Backgammons are not allowed", es: "Los backgammons no están permitidos", de: "Backgammons sind nicht erlaubt", nl: "Backgammons zijn niet toegestaan" }
        ],
        correct: 0,
        explanation: {
          en: "Under the European rule (less common now), both players roll simultaneously at the start. If both roll the same number (doubles), the higher double gets to move first using that roll. This eliminates the separate 'opening roll' phase. Rare in modern play.",
          es: "Bajo la regla europea (menos común ahora), ambos jugadores tiran simultáneamente al inicio. Si ambos tiran el mismo número (dobles), el doble más alto se mueve primero usando ese tiro. Esto elimina la fase separada de 'tiro de apertura'. Raro en el juego moderno.",
          de: "Nach der europäischen Regel (heute weniger üblich) würfeln beide Spieler zu Beginn gleichzeitig. Wenn beide die gleiche Zahl würfeln (Pasch), darf der höhere Pasch zuerst mit diesem Wurf ziehen. Dies eliminiert die separate 'Eröffnungswurf'-Phase. Selten im modernen Spiel.",
          nl: "Onder de Europese regel (nu minder gebruikelijk), gooien beide spelers tegelijkertijd aan het begin. Als beiden hetzelfde nummer gooien (dobbelstenen), mag de hogere dubbel als eerste bewegen met die worp. Dit elimineert de aparte 'openingsworp' fase. Zeldzaam in modern spel."
        }
      },
      {
        question: {
          en: "What is 'temperature' in backgammon positions?",
          es: "¿Qué es la 'temperatura' en las posiciones de backgammon?",
          de: "Was ist 'Temperatur' in Backgammon-Positionen?",
          nl: "Wat is 'temperatuur' in backgammon-posities?"
        },
        options: [
          { en: "How much equity can swing based on the next roll - high temperature means volatile", es: "Cuánto puede cambiar la equidad según el siguiente tiro - alta temperatura significa volátil", de: "Wie stark sich Equity basierend auf dem nächsten Wurf ändern kann - hohe Temperatur bedeutet volatil", nl: "Hoeveel equity kan schommelen op basis van de volgende worp - hoge temperatuur betekent volatiel" },
          { en: "The difficulty level of analyzing the position", es: "El nivel de dificultad de analizar la posición", de: "Der Schwierigkeitsgrad der Positionsanalyse", nl: "Het moeilijkheidsniveau van het analyseren van de positie" },
          { en: "How many checker hits are likely", es: "Cuántos golpes de fichas son probables", de: "Wie viele Steinschläge wahrscheinlich sind", nl: "Hoeveel schijfslagen waarschijnlijk zijn" },
          { en: "The time pressure in tournament play", es: "La presión de tiempo en el juego de torneo", de: "Der Zeitdruck im Turnierplay", nl: "De tijdsdruk in toernooispel" }
        ],
        correct: 0,
        explanation: {
          en: "Temperature (or volatility) measures how much a position's equity can change on the next exchange. High-temperature positions (blitzes, contact positions) have big equity swings; low-temperature positions (races, bearoffs) are more stable. Temperature affects cube decisions significantly.",
          es: "La temperatura (o volatilidad) mide cuánto puede cambiar la equidad de una posición en el siguiente intercambio. Las posiciones de alta temperatura (blitzes, posiciones de contacto) tienen grandes cambios de equidad; las posiciones de baja temperatura (carreras, bearoffs) son más estables. La temperatura afecta significativamente las decisiones del cubo.",
          de: "Temperatur (oder Volatilität) misst, wie stark sich die Equity einer Position beim nächsten Austausch ändern kann. Hochtemperatur-Positionen (Blitze, Kontaktpositionen) haben große Equity-Schwankungen; Niedrigtemperatur-Positionen (Rennen, Auswürfel) sind stabiler. Temperatur beeinflusst Würfelentscheidungen erheblich.",
          nl: "Temperatuur (of volatiliteit) meet hoeveel de equity van een positie kan veranderen bij de volgende uitwisseling. Hoge-temperatuur posities (blitzes, contactposities) hebben grote equity-schommelingen; lage-temperatuur posities (races, bearoffs) zijn stabieler. Temperatuur beïnvloedt dobbelsbeslissings aanzienlijk."
        }
      },
      {
        question: {
          en: "What is 'rollout variance' and why does it matter?",
          es: "¿Qué es la 'varianza de rollout' y por qué importa?",
          de: "Was ist 'Rollout-Varianz' und warum ist sie wichtig?",
          nl: "Wat is 'rollout-variantie' en waarom is het belangrijk?"
        },
        options: [
          { en: "Statistical uncertainty in rollout results - more trials reduce variance", es: "Incertidumbre estadística en resultados de rollout - más pruebas reducen la varianza", de: "Statistische Unsicherheit in Rollout-Ergebnissen - mehr Versuche reduzieren Varianz", nl: "Statistische onzekerheid in rollout-resultaten - meer proeven verminderen variantie" },
          { en: "The difference between best and worst moves", es: "La diferencia entre las mejores y peores jugadas", de: "Der Unterschied zwischen besten und schlechtesten Zügen", nl: "Het verschil tussen beste en slechtste zetten" },
          { en: "How much positions differ from each other", es: "Cuánto difieren las posiciones entre sí", de: "Wie stark sich Positionen voneinander unterscheiden", nl: "Hoeveel posities van elkaar verschillen" },
          { en: "The speed variation in analysis time", es: "La variación de velocidad en tiempo de análisis", de: "Die Geschwindigkeitsvariation in der Analysezeit", nl: "De snelheidsvariantie in analysetijd" }
        ],
        correct: 0,
        explanation: {
          en: "Rollout variance measures the statistical uncertainty in rollout results. Higher variance means less confidence in the exact equity values. Running more trials (longer rollouts) reduces variance and provides more reliable results, especially important for close decisions.",
          es: "La varianza de rollout mide la incertidumbre estadística en los resultados de rollout. Mayor varianza significa menos confianza en los valores exactos de equidad. Ejecutar más pruebas (rollouts más largos) reduce la varianza y proporciona resultados más confiables, especialmente importante para decisiones cercanas.",
          de: "Rollout-Varianz misst die statistische Unsicherheit in Rollout-Ergebnissen. Höhere Varianz bedeutet weniger Vertrauen in die genauen Equity-Werte. Mehr Versuche durchführen (längere Rollouts) reduziert Varianz und liefert zuverlässigere Ergebnisse, besonders wichtig für knappe Entscheidungen.",
          nl: "Rollout-variantie meet de statistische onzekerheid in rollout-resultaten. Hogere variantie betekent minder vertrouwen in de exacte equity-waarden. Meer proeven uitvoeren (langere rollouts) vermindert variantie en levert betrouwbaardere resultaten, vooral belangrijk voor krappe beslissingen."
        }
      },
      {
        question: {
          en: "What is the 'isight' formula in backgammon racing decisions?",
          es: "¿Qué es la fórmula 'isight' en decisiones de carreras de backgammon?",
          de: "Was ist die 'isight'-Formel bei Backgammon-Rennentscheidungen?",
          nl: "Wat is de 'isight' formule in backgammon racing beslissingen?"
        },
        options: [
          { en: "Advanced racing formula: (pip count + 3 x wastage) - adjusts for distribution", es: "Fórmula avanzada de carreras: (pip count + 3 x desperdicio) - ajusta por distribución", de: "Fortgeschrittene Rennformel: (Pip-Count + 3 x Verschwendung) - passt für Verteilung an", nl: "Geavanceerde race formule: (pip count + 3 x verspilling) - past aan voor verdeling" },
          { en: "A cube decision calculator for match play", es: "Una calculadora de decisión de cubo para juego de match", de: "Ein Würfelentscheidungsrechner für Match-Spiel", nl: "Een dobbelsbeslissingscalculator voor wedstrijdspel" },
          { en: "Formula for calculating gammon chances", es: "Fórmula para calcular posibilidades de gammon", de: "Formel zur Berechnung von Gammon-Chancen", nl: "Formule voor het berekenen van gammon-kansen" },
          { en: "Opening move database lookup system", es: "Sistema de búsqueda de base de datos de movimiento de apertura", de: "Eröffnungszug-Datenbank-Suchsystem", nl: "Openingszet database opzoeksysteem" }
        ],
        correct: 0,
        explanation: {
          en: "The isight formula adjusts pip count for distribution inefficiency: Adjusted pip count = raw pip count + (3 × wastage). Wastage counts checkers on higher points when lower points are empty. This gives more accurate racing equity than simple pip count.",
          es: "La fórmula isight ajusta el pip count por ineficiencia de distribución: Pip count ajustado = pip count bruto + (3 × desperdicio). El desperdicio cuenta fichas en puntos más altos cuando los puntos más bajos están vacíos. Esto da una equidad de carrera más precisa que el simple pip count.",
          de: "Die isight-Formel passt Pip-Count für Verteilungsineffizienz an: Angepasster Pip-Count = roher Pip-Count + (3 × Verschwendung). Verschwendung zählt Steine auf höheren Punkten, wenn niedrigere Punkte leer sind. Dies gibt genauere Renn-Equity als einfacher Pip-Count.",
          nl: "De isight formule past pip count aan voor verdelingsinefficiëntie: Aangepaste pip count = ruwe pip count + (3 × verspilling). Verspilling telt schijven op hogere punten wanneer lagere punten leeg zijn. Dit geeft nauwkeurigere race equity dan simpele pip count."
        }
      },
      {
        question: {
          en: "What is a 'joker' sequence and how does it affect cube decisions?",
          es: "¿Qué es una secuencia 'joker' y cómo afecta las decisiones del cubo?",
          de: "Was ist eine 'Joker'-Sequenz und wie beeinflusst sie Würfelentscheidungen?",
          nl: "Wat is een 'joker' reeks en hoe beïnvloedt het dobbelsbeslissingen?"
        },
        options: [
          { en: "Lucky sequence allowing opponent to turn the game - wait for joker-less position before doubling", es: "Secuencia afortunada que permite al oponente cambiar el juego - esperar posición sin joker antes de doblar", de: "Glückssequenz die Gegner erlaubt Spiel zu drehen - auf Joker-lose Position warten vor Verdoppeln", nl: "Geluksreeks die tegenstander toestaat spel te draaien - wachten op joker-loze positie voor verdubbelen" },
          { en: "A specific dice combination (double-6, double-5, etc.)", es: "Una combinación específica de dados (doble-6, doble-5, etc.)", de: "Eine spezifische Würfelkombination (Pasch-6, Pasch-5 usw.)", nl: "Een specifieke dobbelsteencombinatie (dubbel-6, dubbel-5, enz.)" },
          { en: "An opening roll wildcard strategy", es: "Una estrategia de comodín de tiro de apertura", de: "Eine Eröffnungswurf-Joker-Strategie", nl: "Een openingsworp wildcard strategie" },
          { en: "Any roll that hits multiple checkers", es: "Cualquier tiro que golpea múltiples fichas", de: "Jeder Wurf der mehrere Steine schlägt", nl: "Elke worp die meerdere schijven slaat" }
        ],
        correct: 0,
        explanation: {
          en: "A joker is a lucky roll sequence (often specific doubles) that would allow the trailing player to turn the position around dramatically. Before doubling in volatile positions, wait until the opponent has no joker sequences left that could swing the game. Once joker-less, it's often a powerful double.",
          es: "Un joker es una secuencia de tiradas afortunadas (a menudo dobles específicos) que permitiría al jugador que va perdiendo cambiar dramáticamente la posición. Antes de doblar en posiciones volátiles, espera hasta que el oponente no tenga secuencias joker que puedan cambiar el juego. Una vez sin joker, es a menudo un doble poderoso.",
          de: "Ein Joker ist eine Glückswurfsequenz (oft spezifische Paschs), die dem zurückliegenden Spieler ermöglichen würde, die Position dramatisch zu drehen. Vor dem Verdoppeln in volatilen Positionen warte, bis der Gegner keine Joker-Sequenzen mehr hat, die das Spiel drehen könnten. Sobald Joker-los, ist es oft eine starke Verdopplung.",
          nl: "Een joker is een geluksworpreeks (vaak specifieke dubbels) die de achterliggende speler zou toestaan de positie dramatisch om te draaien. Voor het verdubbelen in volatiele posities, wacht tot de tegenstander geen joker-reeksen meer heeft die het spel kunnen draaien. Eenmaal joker-loos, is het vaak een krachtige verdubbeling."
        }
      },
      {
        question: {
          en: "What is 'checker distribution duplication' in advanced play?",
          es: "¿Qué es la 'duplicación de distribución de fichas' en juego avanzado?",
          de: "Was ist 'Steinverteilungs-Duplikation' im fortgeschrittenen Spiel?",
          nl: "Wat is 'schijfverdeling duplicatie' in gevorderd spel?"
        },
        options: [
          { en: "Arranging checkers so opponent needs same numbers for different tasks", es: "Organizar fichas para que el oponente necesite los mismos números para diferentes tareas", de: "Steine so anordnen dass Gegner dieselben Zahlen für verschiedene Aufgaben braucht", nl: "Schijven zo rangschikken dat tegenstander dezelfde nummers nodig heeft voor verschillende taken" },
          { en: "Having two checkers on the same point", es: "Tener dos fichas en el mismo punto", de: "Zwei Steine auf demselben Punkt haben", nl: "Twee schijven op hetzelfde punt hebben" },
          { en: "Copying opponent's board structure", es: "Copiar la estructura del tablero del oponente", de: "Gegners Brettstruktur kopieren", nl: "Bordstructuur van tegenstander kopiëren" },
          { en: "Making identical points on both sides", es: "Hacer puntos idénticos en ambos lados", de: "Identische Punkte auf beiden Seiten machen", nl: "Identieke punten aan beide kanten maken" }
        ],
        correct: 0,
        explanation: {
          en: "Distribution duplication (or number duplication) is positioning your checkers so that your opponent needs the same roll numbers to accomplish different objectives - for example, needing 6's both to escape AND to enter from the bar. This reduces their effective rolls.",
          es: "La duplicación de distribución (o duplicación de números) es posicionar tus fichas para que tu oponente necesite los mismos números de tirada para lograr diferentes objetivos - por ejemplo, necesitar 6's tanto para escapar COMO para entrar desde la barra. Esto reduce sus tiradas efectivas.",
          de: "Verteilungs-Duplikation (oder Zahlen-Duplikation) ist das Positionieren deiner Steine, sodass dein Gegner dieselben Wurfzahlen für verschiedene Ziele braucht - zum Beispiel 6en sowohl zum Entkommen ALS AUCH zum Eintreten von der Bar. Dies reduziert ihre effektiven Würfe.",
          nl: "Verdeling duplicatie (of nummer duplicatie) is je schijven zo positioneren dat je tegenstander dezelfde worpnummers nodig heeft om verschillende doelstellingen te bereiken - bijvoorbeeld, 6en nodig hebben om zowel te ontsnappen ALS om binnen te komen vanaf de bar. Dit vermindert hun effectieve worpen."
        }
      },
      {
        question: {
          en: "What is the 'Trice count' method for bearing off?",
          es: "¿Qué es el método 'Trice count' para sacar fichas?",
          de: "Was ist die 'Trice-Count'-Methode zum Auswürfeln?",
          nl: "Wat is de 'Trice count' methode voor uitnemen?"
        },
        options: [
          { en: "Count checkers on each point: 1-pt gets 1, 2-pt gets 2, etc. - estimates rolls needed", es: "Contar fichas en cada punto: 1-pt obtiene 1, 2-pt obtiene 2, etc. - estima tiradas necesarias", de: "Steine auf jedem Punkt zählen: 1-Punkt bekommt 1, 2-Punkt bekommt 2 usw. - schätzt benötigte Würfe", nl: "Schijven tellen op elk punt: 1-pt krijgt 1, 2-pt krijgt 2, enz. - schat benodigde worpen" },
          { en: "Three-roll lookahead calculation", es: "Cálculo de anticipación de tres tiradas", de: "Drei-Wurf-Vorausberechnung", nl: "Drie-worpen vooruitkijkberekening" },
          { en: "Triple the pip count for accuracy", es: "Triplicar el pip count para mayor precisión", de: "Pip-Count verdreifachen für Genauigkeit", nl: "Pip count verdrievoudigen voor nauwkeurigheid" },
          { en: "Count only top three points", es: "Contar solo los tres puntos superiores", de: "Nur die oberen drei Punkte zählen", nl: "Tel alleen de bovenste drie punten" }
        ],
        correct: 0,
        explanation: {
          en: "The Trice count estimates rolls needed to bear off by assigning each point its number value (1-point=1, 2-point=2, etc.), then counting checkers × point value. Divide total by 8 to get approximate rolls needed. More accurate than simple pip count for bearoff races.",
          es: "El Trice count estima las tiradas necesarias para sacar fichas asignando a cada punto su valor numérico (1-punto=1, 2-punto=2, etc.), luego contando fichas × valor de punto. Dividir total por 8 para obtener tiradas aproximadas necesarias. Más preciso que el simple pip count para carreras de bearoff.",
          de: "Der Trice-Count schätzt benötigte Würfe zum Auswürfeln durch Zuweisen jedes Punktes seines Zahlenwerts (1-Punkt=1, 2-Punkt=2 usw.), dann Zählen von Steinen × Punktwert. Teile Gesamt durch 8 um ungefähre benötigte Würfe zu erhalten. Genauer als einfacher Pip-Count für Auswürfelrennen.",
          nl: "De Trice count schat worpen nodig om uit te nemen door elk punt zijn nummerwaarde toe te kennen (1-punt=1, 2-punt=2, enz.), dan schijven × puntwaarde tellen. Deel totaal door 8 om geschatte benodigde worpen te krijgen. Nauwkeuriger dan simpele pip count voor bearoff-races."
        }
      },
      {
        question: {
          en: "What is the 'Naccel' rating system in backgammon?",
          es: "¿Qué es el sistema de calificación 'Naccel' en backgammon?",
          de: "Was ist das 'Naccel'-Bewertungssystem im Backgammon?",
          nl: "Wat is het 'Naccel' ratingsysteem in backgammon?"
        },
        options: [
          { en: "Network for Accumulating Competitive Chess ELO-like ratings for backgammon players", es: "Red para Acumular calificaciones tipo ELO de Ajedrez Competitivo para jugadores de backgammon", de: "Netzwerk zur Akkumulierung von Schach-ELO-ähnlichen Bewertungen für Backgammon-Spieler", nl: "Netwerk voor het Accumuleren van Competitieve schaak-ELO-achtige ratings voor backgammon spelers" },
          { en: "National acceleration tournament format", es: "Formato de torneo de aceleración nacional", de: "Nationales Beschleunigungsturnier-Format", nl: "Nationaal versnelling toernooi formaat" },
          { en: "Neural network AI training system", es: "Sistema de entrenamiento de IA de red neuronal", de: "Neuronales Netzwerk KI-Trainingssystem", nl: "Neuraal netwerk AI trainingssysteem" },
          { en: "New acceptance criteria calculation", es: "Nuevo cálculo de criterios de aceptación", de: "Neue Annahmekriterien-Berechnung", nl: "Nieuwe acceptatiecriteria berekening" }
        ],
        correct: 0,
        explanation: {
          en: "Naccel (and similar systems like FIBS rating) provides ELO-style ratings for backgammon players based on match results. Higher ratings indicate stronger players. Unlike chess, backgammon ratings account for match length and luck factors in the calculations.",
          es: "Naccel (y sistemas similares como la calificación FIBS) proporciona calificaciones estilo ELO para jugadores de backgammon basadas en resultados de matches. Calificaciones más altas indican jugadores más fuertes. A diferencia del ajedrez, las calificaciones de backgammon tienen en cuenta la longitud del match y factores de suerte en los cálculos.",
          de: "Naccel (und ähnliche Systeme wie FIBS-Bewertung) bietet ELO-ähnliche Bewertungen für Backgammon-Spieler basierend auf Match-Ergebnissen. Höhere Bewertungen zeigen stärkere Spieler an. Anders als Schach berücksichtigen Backgammon-Bewertungen Match-Länge und Glücksfaktoren in den Berechnungen.",
          nl: "Naccel (en vergelijkbare systemen zoals FIBS rating) biedt ELO-stijl ratings voor backgammon spelers gebaseerd op wedstrijdresultaten. Hogere ratings duiden op sterkere spelers. In tegenstelling tot schaken, houden backgammon ratings rekening met wedstrijdlengte en geluksfactoren in de berekeningen."
        }
      },
      {
        question: {
          en: "What is 'cube provocation' in advanced strategy?",
          es: "¿Qué es la 'provocación de cubo' en estrategia avanzada?",
          de: "Was ist 'Würfel-Provokation' in fortgeschrittener Strategie?",
          nl: "Wat is 'dobbels provocatie' in geavanceerde strategie?"
        },
        options: [
          { en: "Making aggressive plays to induce opponent to double prematurely", es: "Hacer jugadas agresivas para inducir al oponente a doblar prematuramente", de: "Aggressive Züge machen um Gegner zu vorzeitiger Verdopplung zu verleiten", nl: "Aggressieve zetten doen om tegenstander te verleiden voortijdig te verdubbelen" },
          { en: "Threatening to double to force errors", es: "Amenazar con doblar para forzar errores", de: "Mit Verdoppeln drohen um Fehler zu erzwingen", nl: "Dreigen te verdubbelen om fouten af te dwingen" },
          { en: "Taunting opponent during cube decisions", es: "Provocar al oponente durante decisiones de cubo", de: "Gegner während Würfelentscheidungen reizen", nl: "Tegenstander uitdagen tijdens dobbelsbeslissingen" },
          { en: "Deliberately showing weak position", es: "Mostrar deliberadamente posición débil", de: "Absichtlich schwache Position zeigen", nl: "Opzettelijk zwakke positie tonen" }
        ],
        correct: 0,
        explanation: {
          en: "Cube provocation involves making aggressive checker plays (like hitting loose or slotting) specifically to induce your opponent to double before they should. If they double too early and you take, you gain valuable cube ownership in a playable position.",
          es: "La provocación de cubo implica hacer jugadas agresivas de fichas (como golpear suelto o hacer slots) específicamente para inducir a tu oponente a doblar antes de que deba. Si doblan demasiado pronto y aceptas, ganas valiosa propiedad del cubo en una posición jugable.",
          de: "Würfel-Provokation beinhaltet aggressive Steinzüge (wie loses Schlagen oder Slotten) speziell um deinen Gegner zu verleiten, zu früh zu verdoppeln. Wenn sie zu früh verdoppeln und du annimmst, gewinnst du wertvollen Würfelbesitz in einer spielbaren Position.",
          nl: "Dobbels provocatie houdt in het maken van aggressieve schijfzetten (zoals los slaan of slotten) specifiek om je tegenstander te verleiden te verdubbelen voordat ze zouden moeten. Als ze te vroeg verdubbelen en je accepteert, krijg je waardevol dobbelsbezit in een speelbare positie."
        }
      },
      {
        question: {
          en: "What is 'market losing' vs 'market gaining' in cube theory?",
          es: "¿Qué es 'perder mercado' vs 'ganar mercado' en la teoría del cubo?",
          de: "Was ist 'Markt verlieren' vs 'Markt gewinnen' in der Würfeltheorie?",
          nl: "Wat is 'markt verliezen' vs 'markt winnen' in dobbelstheorie?"
        },
        options: [
          { en: "Market losing: position improves so much opponent passes; Market gaining: stays in take range", es: "Perder mercado: posición mejora tanto que oponente pasa; Ganar mercado: permanece en rango de aceptación", de: "Markt verlieren: Position verbessert sich so sehr dass Gegner passt; Markt gewinnen: bleibt im Annahmebereich", nl: "Markt verliezen: positie verbetert zo veel dat tegenstander past; Markt winnen: blijft in acceptatiebereik" },
          { en: "Gaining equity vs losing equity on next roll", es: "Ganar equidad vs perder equidad en el siguiente tiro", de: "Equity gewinnen vs Equity verlieren beim nächsten Wurf", nl: "Equity winnen vs equity verliezen bij volgende worp" },
          { en: "Increasing vs decreasing match equity", es: "Aumentar vs disminuir equidad de match", de: "Match-Equity erhöhen vs verringern", nl: "Wedstrijd-equity verhogen vs verlagen" },
          { en: "Going up vs down in tournament standings", es: "Subir vs bajar en clasificación del torneo", de: "Aufsteigen vs Absteigen in Turnierwertung", nl: "Omhoog vs omlaag gaan in toernooi-ranglijst" }
        ],
        correct: 0,
        explanation: {
          en: "Market losing positions improve so rapidly that if you wait, opponent will pass your double (losing 'market'). Double now. Market gaining positions stay in opponent's take range - you can wait for a better doubling point. Understanding this helps optimize cube timing.",
          es: "Las posiciones que pierden mercado mejoran tan rápidamente que si esperas, el oponente pasará tu doble (perdiendo 'mercado'). Dobla ahora. Las posiciones que ganan mercado permanecen en el rango de aceptación del oponente - puedes esperar un mejor punto de doblaje. Entender esto ayuda a optimizar el timing del cubo.",
          de: "Markt verlierende Positionen verbessern sich so schnell dass wenn du wartest, Gegner deine Verdopplung passt ('Markt' verlieren). Verdopple jetzt. Markt gewinnende Positionen bleiben im Annahmebereich des Gegners - du kannst auf besseren Verdopplungspunkt warten. Dies verstehen hilft Würfel-Timing zu optimieren.",
          nl: "Markt verliezende posities verbeteren zo snel dat als je wacht, tegenstander je verdubbeling past ('markt' verliezen). Verdubbel nu. Markt winnende posities blijven in het acceptatiebereik van tegenstander - je kunt wachten op een beter verdubbelpunt. Dit begrijpen helpt dobbels-timing optimaliseren."
        }
      },
      {
        question: {
          en: "What is a 'thorp count' in backgammon?",
          es: "¿Qué es un 'thorp count' en backgammon?",
          de: "Was ist ein 'Thorp-Count' im Backgammon?",
          nl: "Wat is een 'thorp count' in backgammon?"
        },
        options: [
          { en: "Advanced racing count that weights checkers differently based on position", es: "Conteo avanzado de carreras que pondera fichas de manera diferente según posición", de: "Fortgeschrittener Renn-Count der Steine unterschiedlich nach Position gewichtet", nl: "Geavanceerde race telling die schijven verschillend weegt op basis van positie" },
          { en: "Count of opponent's home board points made", es: "Conteo de puntos del tablero interior del oponente hechos", de: "Zählung der gemachten Heimfeld-Punkte des Gegners", nl: "Telling van gemaakte thuisbordpunten van tegenstander" },
          { en: "Number of crossovers in bearoff", es: "Número de cruces en bearoff", de: "Anzahl der Überquerungen beim Auswürfeln", nl: "Aantal kruisingen bij bearoff" },
          { en: "Total blots exposed during game", es: "Total de blots expuestos durante el juego", de: "Gesamte Blots während des Spiels exponiert", nl: "Totaal blots blootgesteld tijdens spel" }
        ],
        correct: 0,
        explanation: {
          en: "The Thorp count is an advanced racing formula that assigns different weights to checkers based on their position and distribution. It's more sophisticated than simple pip counting and accounts for wastage, gaps, and crossovers to give better racing equity estimates.",
          es: "El Thorp count es una fórmula avanzada de carreras que asigna diferentes pesos a las fichas según su posición y distribución. Es más sofisticado que el simple conteo de pips y tiene en cuenta el desperdicio, huecos y cruces para dar mejores estimaciones de equidad de carrera.",
          de: "Der Thorp-Count ist eine fortgeschrittene Rennformel, die Steinen unterschiedliche Gewichte basierend auf ihrer Position und Verteilung zuweist. Er ist ausgefeilter als einfaches Pip-Zählen und berücksichtigt Verschwendung, Lücken und Überquerungen für bessere Renn-Equity-Schätzungen.",
          nl: "De Thorp count is een geavanceerde race formule die verschillende gewichten toekent aan schijven op basis van hun positie en verdeling. Het is geavanceerder dan simpel pip tellen en houdt rekening met verspilling, gaten en kruisingen om betere race equity schattingen te geven."
        }
      },
      {
        question: {
          en: "What is 'position class' analysis in modern backgammon?",
          es: "¿Qué es el análisis de 'clase de posición' en backgammon moderno?",
          de: "Was ist 'Positions-Klassen'-Analyse im modernen Backgammon?",
          nl: "Wat is 'positieklasse' analyse in modern backgammon?"
        },
        options: [
          { en: "Categorizing positions by type (race, blitz, prime, etc.) for pattern recognition", es: "Categorizar posiciones por tipo (carrera, blitz, prime, etc.) para reconocimiento de patrones", de: "Positionen nach Typ kategorisieren (Rennen, Blitz, Prime usw.) für Mustererkennung", nl: "Posities categoriseren op type (race, blitz, prime, enz.) voor patroonherkenning" },
          { en: "Rating the quality of a position from A to F", es: "Calificar la calidad de una posición de A a F", de: "Qualität einer Position von A bis F bewerten", nl: "Kwaliteit van een positie beoordelen van A tot F" },
          { en: "Determining skill level needed for position", es: "Determinar nivel de habilidad necesario para posición", de: "Bestimmen des für Position benötigten Skill-Levels", nl: "Bepalen van vaardigheidsniveau nodig voor positie" },
          { en: "Social class analogy for checker placement", es: "Analogía de clase social para colocación de fichas", de: "Soziale Klassen-Analogie für Steinplatzierung", nl: "Sociale klasse analogie voor schijfplaatsing" }
        ],
        correct: 0,
        explanation: {
          en: "Position class analysis categorizes positions into types (racing, blitz, prime vs prime, holding game, back game, etc.). Recognizing the position class helps apply appropriate strategies and principles. Neural nets and AI also classify positions this way for training.",
          es: "El análisis de clase de posición categoriza posiciones en tipos (carrera, blitz, prime vs prime, juego de retención, back game, etc.). Reconocer la clase de posición ayuda a aplicar estrategias y principios apropiados. Las redes neuronales e IA también clasifican posiciones de esta manera para entrenamiento.",
          de: "Positions-Klassen-Analyse kategorisiert Positionen in Typen (Rennen, Blitz, Prime vs Prime, Haltespiel, Back Game usw.). Das Erkennen der Positionsklasse hilft, geeignete Strategien und Prinzipien anzuwenden. Neuronale Netze und KI klassifizieren Positionen auch so für Training.",
          nl: "Positieklasse analyse categoriseert posities in types (racing, blitz, prime vs prime, houdspel, back game, enz.). Het herkennen van de positieklasse helpt bij het toepassen van geschikte strategieën en principes. Neurale netwerken en AI classificeren posities ook zo voor training."
        }
      },
      {
        question: {
          en: "What is 'Kazaross XG2' adjustment in match play analysis?",
          es: "¿Qué es el ajuste 'Kazaross XG2' en análisis de juego de match?",
          de: "Was ist die 'Kazaross XG2'-Anpassung in der Match-Spiel-Analyse?",
          nl: "Wat is 'Kazaross XG2' aanpassing in wedstrijdspel analyse?"
        },
        options: [
          { en: "Formula adjusting XG rollout results for match equity table accuracy", es: "Fórmula que ajusta resultados de rollout de XG para precisión de tabla de equidad de match", de: "Formel die XG-Rollout-Ergebnisse für Match-Equity-Tabellen-Genauigkeit anpasst", nl: "Formule die XG rollout resultaten aanpast voor match equity tabel nauwkeurigheid" },
          { en: "Double analysis speed-up technique", es: "Técnica de aceleración de análisis doble", de: "Doppel-Analyse-Beschleunigungstechnik", nl: "Dubbele analyse versnellingstechniek" },
          { en: "Checker play correction for opening moves", es: "Corrección de juego de fichas para movimientos de apertura", de: "Steinzug-Korrektur für Eröffnungszüge", nl: "Schijfspel correctie voor openingszetten" },
          { en: "Gammon percentage calculator", es: "Calculadora de porcentaje de gammon", de: "Gammon-Prozentsatz-Rechner", nl: "Gammon percentage calculator" }
        ],
        correct: 0,
        explanation: {
          en: "Kazaross discovered that XG's match equity table (MET) had slight inaccuracies. His XG2 formula adjusts rollout results to compensate for these MET errors, providing more accurate match play analysis. This is particularly important for checker play decisions at certain match scores.",
          es: "Kazaross descubrió que la tabla de equidad de match (MET) de XG tenía ligeras inexactitudes. Su fórmula XG2 ajusta los resultados de rollout para compensar estos errores de MET, proporcionando análisis de juego de match más preciso. Esto es particularmente importante para decisiones de juego de fichas en ciertas puntuaciones de match.",
          de: "Kazaross entdeckte dass XGs Match-Equity-Tabelle (MET) leichte Ungenauigkeiten hatte. Seine XG2-Formel passt Rollout-Ergebnisse an um diese MET-Fehler zu kompensieren und genauere Match-Spiel-Analyse zu liefern. Dies ist besonders wichtig für Steinzug-Entscheidungen bei bestimmten Match-Punkteständen.",
          nl: "Kazaross ontdekte dat XG's match equity tabel (MET) lichte onnauwkeurigheden had. Zijn XG2 formule past rollout resultaten aan om deze MET fouten te compenseren, wat nauwkeurigere wedstrijdspel analyse biedt. Dit is bijzonder belangrijk voor schijfspel beslissingen bij bepaalde wedstrijdscores."
        }
      },
      {
        question: {
          en: "What is a 'double/take, double/pass' position paradox?",
          es: "¿Qué es una paradoja de posición 'doble/acepta, doble/pasa'?",
          de: "Was ist ein 'Verdoppeln/Annehmen, Verdoppeln/Passen'-Positions-Paradoxon?",
          nl: "Wat is een 'verdubbel/accepteer, verdubbel/pas' positie paradox?"
        },
        options: [
          { en: "Position correct to double for both players - whoever doubles first gets advantage", es: "Posición correcta para doblar para ambos jugadores - quien dobla primero obtiene ventaja", de: "Position korrekt zu verdoppeln für beide Spieler - wer zuerst verdoppelt bekommt Vorteil", nl: "Positie correct om te verdubbelen voor beide spelers - wie eerst verdubbelt krijgt voordeel" },
          { en: "Opponent makes wrong decision regardless of choice", es: "Oponente toma decisión incorrecta independientemente de la elección", de: "Gegner trifft falsche Entscheidung unabhängig von Wahl", nl: "Tegenstander maakt verkeerde beslissing ongeacht keuze" },
          { en: "Double is correct but take is also correct", es: "Doble es correcto pero aceptar también es correcto", de: "Verdoppeln ist korrekt aber Annahme ist auch korrekt", nl: "Verdubbelen is correct maar accepteren is ook correct" },
          { en: "Both players should pass the cube", es: "Ambos jugadores deben pasar el cubo", de: "Beide Spieler sollten den Würfel passen", nl: "Beide spelers moeten de dobbel passen" }
        ],
        correct: 0,
        explanation: {
          en: "In certain positions, it's correct for BOTH players to double (if they own the cube). This creates a 'race to double' where whoever doubles first gains advantage. The opponent should take, but once taken, they would also want to immediately redouble if they could.",
          es: "En ciertas posiciones, es correcto para AMBOS jugadores doblar (si poseen el cubo). Esto crea una 'carrera para doblar' donde quien dobla primero gana ventaja. El oponente debe aceptar, pero una vez aceptado, también querrían redoblar inmediatamente si pudieran.",
          de: "In bestimmten Positionen ist es für BEIDE Spieler korrekt zu verdoppeln (wenn sie den Würfel besitzen). Dies schafft ein 'Wettrennen zum Verdoppeln' wo wer zuerst verdoppelt Vorteil erhält. Der Gegner sollte annehmen, aber sobald angenommen, würden sie auch sofort rückverdoppeln wollen wenn sie könnten.",
          nl: "In bepaalde posities is het correct voor BEIDE spelers om te verdubbelen (als ze de dobbel bezitten). Dit creëert een 'race om te verdubbelen' waarbij wie eerst verdubbelt voordeel krijgt. De tegenstander moet accepteren, maar eenmaal geaccepteerd, zouden ze ook onmiddellijk willen herverdubbelen als ze konden."
        }
      },
      {
        question: {
          en: "What is 'luck normalization' in backgammon performance analysis?",
          es: "¿Qué es la 'normalización de suerte' en análisis de rendimiento de backgammon?",
          de: "Was ist 'Glücks-Normalisierung' in der Backgammon-Leistungsanalyse?",
          nl: "Wat is 'geluk normalisatie' in backgammon prestatie-analyse?"
        },
        options: [
          { en: "Adjusting results to show performance independent of dice luck", es: "Ajustar resultados para mostrar rendimiento independiente de la suerte de dados", de: "Ergebnisse anpassen um Leistung unabhängig von Würfelglück zu zeigen", nl: "Resultaten aanpassen om prestaties onafhankelijk van dobbelsteen-geluk te tonen" },
          { en: "Making all dice rolls perfectly average", es: "Hacer que todas las tiradas de dados sean perfectamente promedio", de: "Alle Würfelwürfe perfekt durchschnittlich machen", nl: "Alle dobbelworpen perfect gemiddeld maken" },
          { en: "Removing outlier games from statistics", es: "Eliminar juegos atípicos de las estadísticas", de: "Ausreißer-Spiele aus Statistiken entfernen", nl: "Uitschieters verwijderen uit statistieken" },
          { en: "Setting equal win chances for both players", es: "Establecer probabilidades de ganar iguales para ambos jugadores", de: "Gleiche Gewinnchancen für beide Spieler setzen", nl: "Gelijke winkansen voor beide spelers instellen" }
        ],
        correct: 0,
        explanation: {
          en: "Luck normalization (or 'luck-adjusted' results) calculates what the match result would have been if both players had received average dice luck. This separates skill from luck, showing true playing strength. Software like XG can show both actual and luck-adjusted ratings.",
          es: "La normalización de suerte (o resultados 'ajustados por suerte') calcula cuál habría sido el resultado del match si ambos jugadores hubieran recibido suerte de dados promedio. Esto separa la habilidad de la suerte, mostrando la verdadera fuerza de juego. Software como XG puede mostrar calificaciones tanto reales como ajustadas por suerte.",
          de: "Glücks-Normalisierung (oder 'glücks-angepasste' Ergebnisse) berechnet was das Match-Ergebnis gewesen wäre wenn beide Spieler durchschnittliches Würfelglück erhalten hätten. Dies trennt Können von Glück und zeigt wahre Spielstärke. Software wie XG kann sowohl tatsächliche als auch glücks-angepasste Bewertungen zeigen.",
          nl: "Geluk normalisatie (of 'geluk-aangepaste' resultaten) berekent wat het wedstrijdresultaat zou zijn geweest als beide spelers gemiddeld dobbelsteen-geluk hadden ontvangen. Dit scheidt vaardigheid van geluk, en toont ware speelsterkte. Software zoals XG kan zowel werkelijke als geluk-aangepaste ratings tonen."
        }
      },
      {
        question: {
          en: "What is 'pruning' in backgammon neural network rollouts?",
          es: "¿Qué es la 'poda' en rollouts de red neuronal de backgammon?",
          de: "Was ist 'Pruning' in Backgammon-Neuronales-Netzwerk-Rollouts?",
          nl: "Wat is 'pruning' in backgammon neuraal netwerk rollouts?"
        },
        options: [
          { en: "Stopping rollout of clearly inferior moves early to save computation time", es: "Detener rollout de movimientos claramente inferiores temprano para ahorrar tiempo de cómputo", de: "Rollout eindeutig unterlegener Züge früh stoppen um Rechenzeit zu sparen", nl: "Rollout van duidelijk inferieure zetten vroeg stoppen om rekentijd te besparen" },
          { en: "Removing bad positions from training data", es: "Eliminar posiciones malas de datos de entrenamiento", de: "Schlechte Positionen aus Trainingsdaten entfernen", nl: "Slechte posities verwijderen uit trainingsgegevens" },
          { en: "Trimming neural network layers for speed", es: "Recortar capas de red neuronal para velocidad", de: "Neuronale Netzwerk-Schichten für Geschwindigkeit trimmen", nl: "Neurale netwerk lagen bijsnijden voor snelheid" },
          { en: "Limiting analysis depth on each ply", es: "Limitar profundidad de análisis en cada capa", de: "Analysetiefe auf jeder Ebene begrenzen", nl: "Analysediepte op elke ply beperken" }
        ],
        correct: 0,
        explanation: {
          en: "Pruning in rollouts means stopping the evaluation of clearly inferior moves before completing full trials. If a move is statistically proven worse, the bot stops rolling it out and allocates those trials to closer alternatives. This dramatically speeds up analysis without sacrificing accuracy.",
          es: "La poda en rollouts significa detener la evaluación de movimientos claramente inferiores antes de completar pruebas completas. Si un movimiento es estadísticamente probado peor, el bot deja de hacer rollout y asigna esas pruebas a alternativas más cercanas. Esto acelera dramáticamente el análisis sin sacrificar precisión.",
          de: "Pruning in Rollouts bedeutet die Bewertung eindeutig unterlegener Züge zu stoppen bevor vollständige Versuche abgeschlossen sind. Wenn ein Zug statistisch nachweislich schlechter ist, stoppt der Bot dessen Rollout und weist diese Versuche näheren Alternativen zu. Dies beschleunigt Analyse dramatisch ohne Genauigkeit zu opfern.",
          nl: "Pruning in rollouts betekent het stoppen van de evaluatie van duidelijk inferieure zetten voordat volledige proeven zijn voltooid. Als een zet statistisch bewezen slechter is, stopt de bot met het uitrollen ervan en wijst die proeven toe aan dichterbij liggende alternatieven. Dit versnelt de analyse dramatisch zonder nauwkeurigheid op te offeren."
        }
      },
      {
        question: {
          en: "What is the 'trailer's cube advantage' in match play?",
          es: "¿Qué es la 'ventaja del cubo del que va detrás' en juego de match?",
          de: "Was ist der 'Würfel-Vorteil des Nachzüglers' im Match-Spiel?",
          nl: "Wat is het 'dobbelvoordeel van de achterligger' in wedstrijdspel?"
        },
        options: [
          { en: "Player behind in score can double more aggressively at certain match scores", es: "El jugador que va detrás en puntuación puede doblar más agresivamente en ciertas puntuaciones de match", de: "Spieler der im Punktestand zurückliegt kann bei bestimmten Match-Punkteständen aggressiver verdoppeln", nl: "Speler achter in score kan agressiever verdubbelen bij bepaalde wedstrijdscores" },
          { en: "Trailing player always gets the cube first", es: "El jugador que va detrás siempre obtiene el cubo primero", de: "Nachzügler bekommt immer zuerst den Würfel", nl: "Achterligger krijgt altijd eerst de dobbel" },
          { en: "Opponent must accept all doubles from trailer", es: "Oponente debe aceptar todos los dobles del que va detrás", de: "Gegner muss alle Verdopplungen vom Nachzügler annehmen", nl: "Tegenstander moet alle verdubbeling van achterligger accepteren" },
          { en: "Behind player can beaver more often", es: "El jugador que va detrás puede hacer beaver más a menudo", de: "Zurückliegender Spieler kann öfter beavern", nl: "Achterliggende speler kan vaker beaveren" }
        ],
        correct: 0,
        explanation: {
          en: "At certain match scores, the trailer (player behind) gains cube efficiency advantages. For example, at 2-away 3-away, the trailer should double very aggressively (~55% wins) because losing brings Crawford, while winning ties the match. This asymmetry creates trailer's cube advantage.",
          es: "En ciertas puntuaciones de match, el que va detrás obtiene ventajas de eficiencia del cubo. Por ejemplo, en 2-away 3-away, el que va detrás debe doblar muy agresivamente (~55% victorias) porque perder trae Crawford, mientras que ganar empata el match. Esta asimetría crea la ventaja del cubo del que va detrás.",
          de: "Bei bestimmten Match-Punkteständen erhält der Nachzügler Würfel-Effizienz-Vorteile. Zum Beispiel bei 2-away 3-away sollte der Nachzügler sehr aggressiv verdoppeln (~55% Siege) weil Verlieren Crawford bringt, während Gewinnen das Match ausgleicht. Diese Asymmetrie schafft Nachzüglers Würfel-Vorteil.",
          nl: "Bij bepaalde wedstrijdscores krijgt de achterligger dobbelefficiëntie voordelen. Bijvoorbeeld bij 2-away 3-away moet de achterligger zeer aggressief verdubbelen (~55% overwinningen) omdat verliezen Crawford brengt, terwijl winnen de wedstrijd gelijk trekt. Deze asymmetrie creëert achterliggers dobbelvoordeel."
        }
      },
      {
        question: {
          en: "What is 'TD-Gammon' and its historical significance?",
          es: "¿Qué es 'TD-Gammon' y su significado histórico?",
          de: "Was ist 'TD-Gammon' und seine historische Bedeutung?",
          nl: "Wat is 'TD-Gammon' en zijn historische betekenis?"
        },
        options: [
          { en: "First neural network to reach world-class backgammon by self-play (1992, Tesauro)", es: "Primera red neuronal en alcanzar backgammon de clase mundial por auto-juego (1992, Tesauro)", de: "Erstes neuronales Netzwerk das Weltklasse-Backgammon durch Selbstspiel erreichte (1992, Tesauro)", nl: "Eerste neuraal netwerk dat wereldklasse backgammon bereikte door zelfspel (1992, Tesauro)" },
          { en: "Tournament director software for organizing matches", es: "Software de director de torneo para organizar matches", de: "Turnierdirektor-Software zur Organisation von Matches", nl: "Toernooidirecteur software voor het organiseren van wedstrijden" },
          { en: "Temporal difference algorithm for cube decisions", es: "Algoritmo de diferencia temporal para decisiones de cubo", de: "Zeitdifferenz-Algorithmus für Würfelentscheidungen", nl: "Temporeel verschil algoritme voor dobbelsbeslissingen" },
          { en: "Database of grandmaster games", es: "Base de datos de juegos de gran maestro", de: "Datenbank von Großmeister-Spielen", nl: "Database van grootmeester spellen" }
        ],
        correct: 0,
        explanation: {
          en: "TD-Gammon (1992, by Gerald Tesauro) was revolutionary - the first neural network to achieve world-class play through self-play reinforcement learning, without human game databases. It used temporal difference learning and influenced modern AI development, including AlphaGo.",
          es: "TD-Gammon (1992, por Gerald Tesauro) fue revolucionario - la primera red neuronal en lograr juego de clase mundial a través de aprendizaje por refuerzo de auto-juego, sin bases de datos de juegos humanos. Usó aprendizaje de diferencia temporal e influyó en el desarrollo de IA moderna, incluyendo AlphaGo.",
          de: "TD-Gammon (1992, von Gerald Tesauro) war revolutionär - das erste neuronale Netzwerk das Weltklasse-Spiel durch Selbstspiel-Verstärkungslernen erreichte, ohne menschliche Spieldatenbanken. Es nutzte temporales Differenz-Lernen und beeinflusste moderne KI-Entwicklung einschließlich AlphaGo.",
          nl: "TD-Gammon (1992, door Gerald Tesauro) was revolutionair - het eerste neurale netwerk dat wereldklasse spel bereikte door zelfspel versterkend leren, zonder menselijke speldatabases. Het gebruikte temporeel verschil leren en beïnvloedde moderne AI ontwikkeling, inclusief AlphaGo."
        }
      },
      {
        question: {
          en: "What is 'match variance' and why do players care?",
          es: "¿Qué es la 'varianza de match' y por qué les importa a los jugadores?",
          de: "Was ist 'Match-Varianz' und warum kümmert es Spieler?",
          nl: "Wat is 'wedstrijd-variantie' en waarom geeft het spelers iets om?"
        },
        options: [
          { en: "Statistical fluctuation in results - longer matches reduce luck factor", es: "Fluctuación estadística en resultados - matches más largos reducen factor suerte", de: "Statistische Schwankung in Ergebnissen - längere Matches reduzieren Glücksfaktor", nl: "Statistische fluctuatie in resultaten - langere wedstrijden verminderen geluksfactor" },
          { en: "Difference between player skill levels", es: "Diferencia entre niveles de habilidad de jugadores", de: "Unterschied zwischen Spieler-Skill-Levels", nl: "Verschil tussen speler vaardigheidsniveaus" },
          { en: "Score volatility during single match", es: "Volatilidad de puntuación durante un solo match", de: "Punktestand-Volatilität während eines einzelnen Matches", nl: "Score volatiliteit tijdens enkele wedstrijd" },
          { en: "Variety of positions encountered", es: "Variedad de posiciones encontradas", de: "Vielfalt der begegneten Positionen", nl: "Variëteit van aangetroffen posities" }
        ],
        correct: 0,
        explanation: {
          en: "Match variance measures how much luck affects outcomes. In backgammon, even weaker players can win short matches due to lucky dice. Longer matches (11, 15, 21 points) reduce variance, allowing skill to dominate. Top players prefer longer matches to minimize luck's impact.",
          es: "La varianza de match mide cuánto afecta la suerte a los resultados. En backgammon, incluso jugadores más débiles pueden ganar matches cortos debido a dados afortunados. Matches más largos (11, 15, 21 puntos) reducen la varianza, permitiendo que la habilidad domine. Los mejores jugadores prefieren matches más largos para minimizar el impacto de la suerte.",
          de: "Match-Varianz misst wie viel Glück Ergebnisse beeinflusst. Im Backgammon können selbst schwächere Spieler kurze Matches durch glückliche Würfel gewinnen. Längere Matches (11, 15, 21 Punkte) reduzieren Varianz und ermöglichen Können zu dominieren. Top-Spieler bevorzugen längere Matches um Glückseinfluss zu minimieren.",
          nl: "Wedstrijd-variantie meet hoeveel geluk de uitkomsten beïnvloedt. In backgammon kunnen zelfs zwakkere spelers korte wedstrijden winnen door gelukskige dobbelstenen. Langere wedstrijden (11, 15, 21 punten) verminderen variantie, waardoor vaardigheid kan domineren. Top spelers geven de voorkeur aan langere wedstrijden om geluksimpact te minimaliseren."
        }
      },
      {
        question: {
          en: "What is the 'Turner take point' adjustment?",
          es: "¿Qué es el ajuste del 'punto de aceptación de Turner'?",
          de: "Was ist die 'Turner-Annahmepunkt'-Anpassung?",
          nl: "Wat is de 'Turner acceptatiepunt' aanpassing?"
        },
        options: [
          { en: "Adjusting take/pass threshold based on gammon percentages in position", es: "Ajustar umbral de aceptar/pasar basado en porcentajes de gammon en posición", de: "Annahme/Pass-Schwelle basierend auf Gammon-Prozentsätzen in Position anpassen", nl: "Accepteer/pas drempel aanpassen op basis van gammon percentages in positie" },
          { en: "Speed adjustment for online time controls", es: "Ajuste de velocidad para controles de tiempo en línea", de: "Geschwindigkeitsanpassung für Online-Zeitkontrollen", nl: "Snelheidsaanpassing voor online tijdscontroles" },
          { en: "Cube decision formula for match play only", es: "Fórmula de decisión de cubo solo para juego de match", de: "Würfelentscheidungsformel nur für Match-Spiel", nl: "Dobbelsbeslissingsformule alleen voor wedstrijdspel" },
          { en: "Opening move probability table", es: "Tabla de probabilidad de movimiento de apertura", de: "Eröffnungszug-Wahrscheinlichkeitstabelle", nl: "Openingszet waarschijnlijkheidstabel" }
        ],
        correct: 0,
        explanation: {
          en: "The Turner take point adjusts the basic 25% take threshold based on gammon percentages. When gammons are likely, you need better winning chances to take. Formula: Take point = (G+0.5)/(G+1) where G = opponent's gammon percentage. Higher gammon threat = higher take point needed.",
          es: "El punto de aceptación de Turner ajusta el umbral básico de aceptación del 25% basado en porcentajes de gammon. Cuando los gammons son probables, necesitas mejores posibilidades de ganar para aceptar. Fórmula: Punto de aceptación = (G+0.5)/(G+1) donde G = porcentaje de gammon del oponente. Mayor amenaza de gammon = mayor punto de aceptación necesario.",
          de: "Der Turner-Annahmepunkt passt die grundlegende 25%-Annahmeschwelle basierend auf Gammon-Prozentsätzen an. Wenn Gammons wahrscheinlich sind, brauchst du bessere Gewinnchancen zum Annehmen. Formel: Annahmepunkt = (G+0.5)/(G+1) wobei G = Gammon-Prozentsatz des Gegners. Höhere Gammon-Bedrohung = höherer Annahmepunkt benötigt.",
          nl: "Het Turner acceptatiepunt past de basis 25% acceptatiedrempel aan op basis van gammon percentages. Wanneer gammons waarschijnlijk zijn, heb je betere winkansen nodig om te accepteren. Formule: Acceptatiepunt = (G+0.5)/(G+1) waarbij G = gammon percentage van tegenstander. Hogere gammon dreiging = hoger acceptatiepunt nodig."
        }
      },
      {
        question: {
          en: "What is a 'redouble window' in backgammon strategy?",
          es: "¿Qué es una 'ventana de redoblaje' en estrategia de backgammon?",
          de: "Was ist ein 'Rückverdopplungsfenster' in der Backgammon-Strategie?",
          nl: "Wat is een 'herverdubbel-venster' in backgammon strategie?"
        },
        options: [
          { en: "The equity range where holding cube ownership is more valuable than redoubling immediately", es: "El rango de equidad donde mantener propiedad del cubo es más valioso que redoblar inmediatamente", de: "Der Equity-Bereich wo Würfelbesitz behalten wertvoller ist als sofort rückzuverdoppeln", nl: "Het equity-bereik waarin dobbelsbezit behouden waardevoller is dan onmiddellijk herverdubbelen" },
          { en: "Time period allowed for redouble decisions", es: "Período de tiempo permitido para decisiones de redoblaje", de: "Zeitraum für Rückverdopplungsentscheidungen erlaubt", nl: "Tijdsperiode toegestaan voor herverdubbel beslissingen" },
          { en: "Screen display for showing cube position", es: "Pantalla para mostrar posición del cubo", de: "Bildschirmanzeige für Würfelposition", nl: "Schermweergave voor het tonen van dobbelspositie" },
          { en: "Opportunity to redouble after opponent's error", es: "Oportunidad de redoblar después del error del oponente", de: "Gelegenheit rückzuverdoppeln nach Gegnerfehler", nl: "Kans om te herverdubbelen na fout van tegenstander" }
        ],
        correct: 0,
        explanation: {
          en: "The redouble window is when you own the cube but shouldn't redouble yet because cube ownership is more valuable than cashing immediately. Wait until your position improves enough that redoubling becomes optimal. This is related to cube leverage and recube vig concepts.",
          es: "La ventana de redoblaje es cuando posees el cubo pero no debes redoblar aún porque la propiedad del cubo es más valiosa que cobrar inmediatamente. Espera hasta que tu posición mejore lo suficiente como para que redoblar se vuelva óptimo. Esto está relacionado con conceptos de apalancamiento del cubo y recube vig.",
          de: "Das Rückverdopplungsfenster ist wenn du den Würfel besitzt aber noch nicht rückverdoppeln solltest weil Würfelbesitz wertvoller ist als sofort einzulösen. Warte bis deine Position sich genug verbessert dass Rückverdoppeln optimal wird. Dies hängt mit Würfel-Leverage und Recube-Vig-Konzepten zusammen.",
          nl: "Het herverdubbel-venster is wanneer je de dobbel bezit maar nog niet moet herverdubbelen omdat dobbelsbezit waardevoller is dan onmiddellijk verzilveren. Wacht tot je positie genoeg verbetert dat herverdubbelen optimaal wordt. Dit is gerelateerd aan dobbels leverage en recube vig concepten."
        }
      },
      {
        question: {
          en: "What is 'recube vig' (recube vigorish)?",
          es: "¿Qué es 'recube vig' (vigorish de recube)?",
          de: "Was ist 'Recube-Vig' (Recube-Vigorish)?",
          nl: "Wat is 'recube vig' (recube vigorish)?"
        },
        options: [
          { en: "The equity value of owning the cube - ability to redouble when position improves", es: "El valor de equidad de poseer el cubo - capacidad de redoblar cuando la posición mejora", de: "Der Equity-Wert des Würfelbesitzes - Fähigkeit rückzuverdoppeln wenn Position sich verbessert", nl: "De equity-waarde van het bezitten van de dobbel - vermogen om te herverdubbelen wanneer positie verbetert" },
          { en: "Commission charged in online backgammon for money", es: "Comisión cobrada en backgammon en línea por dinero", de: "Provision für Online-Backgammon um Geld", nl: "Commissie in rekening gebracht bij online backgammon voor geld" },
          { en: "Vigorous redoubling strategy", es: "Estrategia vigorosa de redoblaje", de: "Kräftige Rückverdopplungsstrategie", nl: "Krachtige herverdubbel strategie" },
          { en: "Energy spent on cube decisions", es: "Energía gastada en decisiones de cubo", de: "Energie für Würfelentscheidungen aufgewendet", nl: "Energie besteed aan dobbelsbeslissingen" }
        ],
        correct: 0,
        explanation: {
          en: "Recube vig (vigorish) is the equity advantage from owning the doubling cube. When you own the cube, you can redouble when your position improves, but your opponent cannot. This ownership has real value, often worth 0.05-0.15 points of equity depending on position volatility.",
          es: "Recube vig (vigorish) es la ventaja de equidad de poseer el cubo de doblaje. Cuando posees el cubo, puedes redoblar cuando tu posición mejora, pero tu oponente no puede. Esta propiedad tiene valor real, a menudo vale 0.05-0.15 puntos de equidad dependiendo de la volatilidad de la posición.",
          de: "Recube-Vig (Vigorish) ist der Equity-Vorteil aus dem Besitz des Verdopplungswürfels. Wenn du den Würfel besitzt, kannst du rückverdoppeln wenn deine Position sich verbessert, aber dein Gegner nicht. Dieser Besitz hat echten Wert, oft 0.05-0.15 Equity-Punkte wert je nach Positions-Volatilität.",
          nl: "Recube vig (vigorish) is het equity-voordeel van het bezitten van de verdubbeldobbel. Wanneer je de dobbel bezit, kun je herverdubbelen wanneer je positie verbetert, maar je tegenstander niet. Dit bezit heeft echte waarde, vaak 0.05-0.15 equity-punten waard afhankelijk van positie-volatiliteit."
        }
      }
    ]
  };

  // Export for use in the quiz application
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level7;
  } else if (typeof window !== 'undefined') {
    window.level7 = level7;
  }
})();
    ]
  };

  // Export for use in the quiz application
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level7;
  } else if (typeof window !== 'undefined') {
    window.level7 = level7;
  }
})();
