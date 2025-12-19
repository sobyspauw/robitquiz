// Backgammon Quiz - Level 9: Elite Knowledge
(function() {
  const level9 = {
    name: {
      en: "Backgammon - Elite",
      es: "Backgammon - Élite",
      de: "Backgammon - Elite",
      nl: "Backgammon - Elite"
    },
    questions: [
      {
        question: {
          en: "What is a 'back game' strategy in backgammon?",
          es: "¿Qué es una estrategia de 'back game' en backgammon?",
          de: "Was ist eine 'Back Game'-Strategie im Backgammon?",
          nl: "Wat is een 'back game' strategie in backgammon?"
        },
        options: [
          { en: "Holding two or more anchor points in opponent's home board", es: "Mantener dos o más puntos de anclaje en el tablero de casa del oponente", de: "Zwei oder mehr Ankerpunkte im Home Board des Gegners halten", nl: "Twee of meer ankerpunten vasthouden in het thuisbord van de tegenstander" },
          { en: "Moving all checkers backwards", es: "Mover todas las fichas hacia atrás", de: "Alle Steine rückwärts bewegen", nl: "Alle stenen achteruit bewegen" },
          { en: "Blocking the opponent's back checkers", es: "Bloquear las fichas traseras del oponente", de: "Die hinteren Steine des Gegners blockieren", nl: "De achterste stenen van de tegenstander blokkeren" },
          { en: "Playing defensively from the start", es: "Jugar defensivamente desde el principio", de: "Von Anfang an defensiv spielen", nl: "Vanaf het begin defensief spelen" }
        ],
        correct: 0,
        explanation: {
          en: "A back game involves deliberately holding two or more anchor points deep in your opponent's home board, waiting for a shot to hit their checkers as they try to bear off.",
          es: "Un back game implica mantener deliberadamente dos o más puntos de anclaje profundos en el tablero de casa del oponente, esperando una oportunidad para golpear sus fichas cuando intenten sacarlas.",
          de: "Ein Back Game beinhaltet das absichtliche Halten von zwei oder mehr Ankerpunkten tief im Home Board des Gegners und wartet auf eine Gelegenheit, ihre Steine zu schlagen, während sie versuchen auszuwürfeln.",
          nl: "Een back game houdt in dat je opzettelijk twee of meer ankerpunten diep in het thuisbord van je tegenstander vasthoudt, wachtend op een kans om hun stenen te slaan terwijl ze proberen uit te gooien."
        }
      },
      {
        question: {
          en: "Which anchor combination is most effective for a back game?",
          es: "¿Qué combinación de anclas es más efectiva para un back game?",
          de: "Welche Ankerkombination ist am effektivsten für ein Back Game?",
          nl: "Welke ankercombinatie is het meest effectief voor een back game?"
        },
        options: [
          { en: "1-point and 2-point", es: "Punto 1 y punto 2", de: "1-Punkt und 2-Punkt", nl: "1-punt en 2-punt" },
          { en: "2-point and 3-point", es: "Punto 2 y punto 3", de: "2-Punkt und 3-Punkt", nl: "2-punt en 3-punt" },
          { en: "1-point and 3-point", es: "Punto 1 y punto 3", de: "1-Punkt und 3-Punkt", nl: "1-punt en 3-punt" },
          { en: "5-point and 4-point", es: "Punto 5 y punto 4", de: "5-Punkt und 4-Punkt", nl: "5-punt en 4-punt" }
        ],
        correct: 1,
        explanation: {
          en: "The 2-point and 3-point combination is generally considered the strongest back game anchor set. It provides excellent coverage of opponent's home board and good timing for hitting.",
          es: "La combinación de punto 2 y punto 3 generalmente se considera el conjunto de anclas de back game más fuerte. Proporciona una excelente cobertura del tablero interior del oponente y buen timing para golpear.",
          de: "Die Kombination aus 2-Punkt und 3-Punkt gilt allgemein als das stärkste Back Game Ankerset. Es bietet ausgezeichnete Abdeckung des Home Boards des Gegners und gutes Timing zum Schlagen.",
          nl: "De combinatie van 2-punt en 3-punt wordt over het algemeen beschouwd als de sterkste back game ankerset. Het biedt uitstekende dekking van het thuisbord van de tegenstander en goede timing om te slaan."
        }
      },
      {
        question: {
          en: "What is a 'backgammon' (also called triple game)?",
          es: "¿Qué es un 'backgammon' (también llamado juego triple)?",
          de: "Was ist ein 'Backgammon' (auch Dreifachspiel genannt)?",
          nl: "Wat is een 'backgammon' (ook wel drievoudig spel genoemd)?"
        },
        options: [
          { en: "Winning three games in a row", es: "Ganar tres juegos seguidos", de: "Drei Spiele hintereinander gewinnen", nl: "Drie spellen achter elkaar winnen" },
          { en: "Winning with all checkers borne off", es: "Ganar con todas las fichas retiradas", de: "Gewinnen mit allen ausgewürfelten Steinen", nl: "Winnen met alle stenen uitgegooid" },
          { en: "Winning when opponent has no checkers borne off", es: "Ganar cuando el oponente no tiene fichas retiradas", de: "Gewinnen wenn Gegner keine Steine ausgewürfelt hat", nl: "Winnen wanneer tegenstander geen stenen heeft uitgegooid" },
          { en: "Winning when opponent has checkers on the bar or in winner's home board", es: "Ganar cuando el oponente tiene fichas en la barra o en el tablero de casa del ganador", de: "Gewinnen wenn Gegner Steine auf der Bar oder im Home Board des Gewinners hat", nl: "Winnen wanneer tegenstander stenen op de bar of in het thuisbord van de winnaar heeft" }
        ],
        correct: 3,
        explanation: {
          en: "A backgammon (triple game) occurs when you bear off all your checkers while your opponent still has checkers on the bar or in your home board. It's worth three times the doubling cube value.",
          es: "Un backgammon (juego triple) ocurre cuando retiras todas tus fichas mientras tu oponente aún tiene fichas en la barra o en tu tablero de casa. Vale tres veces el valor del cubo de doblaje.",
          de: "Ein Backgammon (Dreifachspiel) tritt auf wenn Sie alle Ihre Steine auswürfeln während Ihr Gegner noch Steine auf der Bar oder in Ihrem Home Board hat. Es ist dreimal den Wert des Dopplungswürfels wert.",
          nl: "Een backgammon (drievoudig spel) vindt plaats wanneer je al je stenen uitgooit terwijl je tegenstander nog stenen op de bar of in jouw thuisbord heeft. Het is drie keer de waarde van de verdubbeldob waard."
        }
      },
      {
        question: {
          en: "In a back game, what is critical for success besides anchor placement?",
          es: "En un back game, ¿qué es crítico para el éxito además de la colocación de anclas?",
          de: "Was ist in einem Back Game neben der Ankerplatzierung entscheidend für den Erfolg?",
          nl: "Wat is in een back game cruciaal voor succes naast ankerplaatsing?"
        },
        options: [
          { en: "Having the doubling cube", es: "Tener el cubo de doblaje", de: "Den Dopplungswürfel besitzen", nl: "De verdubbeldob bezitten" },
          { en: "Proper timing - enough checkers left to build a board after hitting", es: "Timing apropiado - suficientes fichas restantes para construir un tablero después de golpear", de: "Richtiges Timing - genug verbleibende Steine um nach dem Schlagen ein Brett aufzubauen", nl: "Juiste timing - genoeg stenen over om na het slaan een bord op te bouwen" },
          { en: "Rolling more doubles", es: "Sacar más dobles", de: "Mehr Paschs würfeln", nl: "Meer dubbels gooien" },
          { en: "Higher pip count", es: "Mayor conteo de pips", de: "Höhere Pip-Zählung", nl: "Hogere pip count" }
        ],
        correct: 1,
        explanation: {
          en: "Timing is crucial in a back game. You need enough checkers (usually at least 10) outside your anchors so you can build blocking points after hitting your opponent. Too few checkers and you can't capitalize on hits.",
          es: "El timing es crucial en un back game. Necesitas suficientes fichas (usualmente al menos 10) fuera de tus anclas para poder construir puntos de bloqueo después de golpear a tu oponente. Muy pocas fichas y no puedes capitalizar los golpes.",
          de: "Timing ist entscheidend in einem Back Game. Sie brauchen genug Steine (normalerweise mindestens 10) außerhalb Ihrer Anker damit Sie nach dem Schlagen Ihres Gegners Blockierpunkte aufbauen können. Zu wenige Steine und Sie können Treffer nicht nutzen.",
          nl: "Timing is cruciaal in een back game. Je hebt genoeg stenen nodig (meestal minstens 10) buiten je ankers zodat je blokkerende punten kunt bouwen na het slaan van je tegenstander. Te weinig stenen en je kunt hits niet benutten."
        }
      },
      {
        question: {
          en: "What is the main risk of a back game strategy?",
          es: "¿Cuál es el riesgo principal de una estrategia de back game?",
          de: "Was ist das Hauptrisiko einer Back Game Strategie?",
          nl: "Wat is het belangrijkste risico van een back game strategie?"
        },
        options: [
          { en: "Being forced to break anchors too early due to lack of timing", es: "Verse forzado a romper anclas demasiado pronto debido a la falta de timing", de: "Gezwungen werden Anker zu früh zu brechen wegen mangelndem Timing", nl: "Gedwongen worden ankers te vroeg te breken door gebrek aan timing" },
          { en: "Running out of dice", es: "Quedarse sin dados", de: "Keine Würfel mehr haben", nl: "Door dobbelstenen heen raken" },
          { en: "Opponent doubling too early", es: "Oponente doblando demasiado pronto", de: "Gegner doppelt zu früh", nl: "Tegenstander verdubbelt te vroeg" },
          { en: "Not enough back checkers", es: "No tener suficientes fichas traseras", de: "Nicht genug hintere Steine", nl: "Niet genoeg achterste stenen" }
        ],
        correct: 0,
        explanation: {
          en: "The biggest risk in a back game is running out of timing - being forced to break your anchors before your opponent gives you a shot. This happens when you have too few checkers outside to maintain your position.",
          es: "El mayor riesgo en un back game es quedarse sin timing - verse forzado a romper tus anclas antes de que tu oponente te dé un tiro. Esto sucede cuando tienes muy pocas fichas afuera para mantener tu posición.",
          de: "Das größte Risiko in einem Back Game ist es das Timing zu verlieren - gezwungen zu werden Ihre Anker zu brechen bevor Ihr Gegner Ihnen einen Treffer gibt. Dies passiert wenn Sie zu wenige Steine außerhalb haben um Ihre Position zu halten.",
          nl: "Het grootste risico in een back game is het verliezen van timing - gedwongen worden je ankers te breken voordat je tegenstander je een kans geeft. Dit gebeurt wanneer je te weinig stenen buiten hebt om je positie te behouden."
        }
      },
      {
        question: {
          en: "What is 'blitzing' strategy in backgammon?",
          es: "¿Qué es la estrategia de 'blitzing' en backgammon?",
          de: "Was ist die 'Blitzing'-Strategie im Backgammon?",
          nl: "Wat is de 'blitzing' strategie in backgammon?"
        },
        options: [
          { en: "Using the doubling cube multiple times", es: "Usar el cubo de doblaje múltiples veces", de: "Den Dopplungswürfel mehrmals verwenden", nl: "De verdubbeldob meerdere keren gebruiken" },
          { en: "Quickly building a prime", es: "Construir rápidamente un prime", de: "Schnell ein Prime aufbauen", nl: "Snel een prime opbouwen" },
          { en: "Aggressively attacking opponent's checkers early in the game", es: "Atacar agresivamente las fichas del oponente al principio del juego", de: "Aggressive Angriffe auf gegnerische Steine früh im Spiel", nl: "Agressief de stenen van de tegenstander vroeg in het spel aanvallen" },
          { en: "Bearing off as quickly as possible", es: "Sacar fichas lo más rápido posible", de: "So schnell wie möglich auswürfeln", nl: "Zo snel mogelijk uitwerpen" }
        ],
        correct: 2,
        explanation: {
          en: "Blitzing is an aggressive opening strategy where you attack opponent's checkers early, trying to hit them and close points in your home board to trap them on the bar.",
          es: "Blitzing es una estrategia de apertura agresiva donde atacas las fichas del oponente temprano, intentando golpearlas y cerrar puntos en tu tablero de casa para atraparlas en la barra.",
          de: "Blitzing ist eine aggressive Eröffnungsstrategie bei der Sie früh gegnerische Steine angreifen, versuchen sie zu schlagen und Punkte in Ihrem Home Board zu schließen um sie auf der Bar zu fangen.",
          nl: "Blitzing is een agressieve openingsstrategie waarbij je vroeg de stenen van de tegenstander aanvalt, probeert ze te slaan en punten in je thuisbord sluit om ze op de bar vast te houden."
        }
      },
      {
        question: {
          en: "What is the 'golden point' in backgammon?",
          es: "¿Qué es el 'punto dorado' en backgammon?",
          de: "Was ist der 'Goldene Punkt' im Backgammon?",
          nl: "Wat is het 'gouden punt' in backgammon?"
        },
        options: [
          { en: "The 7-point (bar point)", es: "El punto 7 (punto de barra)", de: "Der 7-Punkt (Bar-Punkt)", nl: "Het 7-punt (bar punt)" },
          { en: "The 24-point", es: "El punto 24", de: "Der 24-Punkt", nl: "Het 24-punt" },
          { en: "The 13-point (midpoint)", es: "El punto 13 (punto medio)", de: "Der 13-Punkt (Mittelpunkt)", nl: "Het 13-punt (middenpunt)" },
          { en: "The 20-point (opponent's 5-point)", es: "El punto 20 (punto 5 del oponente)", de: "Der 20-Punkt (5-Punkt des Gegners)", nl: "Het 20-punt (5-punt van tegenstander)" }
        ],
        correct: 3,
        explanation: {
          en: "The golden point (also called the '20-point' or 'opponent's 5-point') is considered the most valuable anchor point in your opponent's home board because it's the hardest to escape from and offers the best defensive position.",
          es: "El punto dorado (también llamado 'punto 20' o 'punto 5 del oponente') se considera el punto de anclaje más valioso en el tablero de casa de tu oponente porque es el más difícil de escapar y ofrece la mejor posición defensiva.",
          de: "Der Goldene Punkt (auch '20-Punkt' oder '5-Punkt des Gegners' genannt) gilt als wertvollster Ankerpunkt im Home Board des Gegners weil er am schwersten zu entkommen ist und die beste Verteidigungsposition bietet.",
          nl: "Het gouden punt (ook wel het '20-punt' of '5-punt van de tegenstander' genoemd) wordt beschouwd als het meest waardevolle ankerpunt in het thuisbord van je tegenstander omdat het het moeilijkst is om van te ontsnappen en de beste verdedigingspositie biedt."
        }
      },
      {
        question: {
          en: "In match play, when should you generally NOT accept a double?",
          es: "En el juego de partidas, ¿cuándo generalmente NO deberías aceptar un doble?",
          de: "Im Match-Spiel, wann sollten Sie generell NICHT ein Doppeln akzeptieren?",
          nl: "In wedstrijdspel, wanneer zou je over het algemeen GEEN verdubbeling moeten accepteren?"
        },
        options: [
          { en: "When you have less than 50% winning chances", es: "Cuando tienes menos del 50% de posibilidades de ganar", de: "Wenn Sie weniger als 50% Gewinnchancen haben", nl: "Wanneer je minder dan 50% winkans hebt" },
          { en: "When you have less than 30% winning chances", es: "Cuando tienes menos del 30% de posibilidades de ganar", de: "Wenn Sie weniger als 30% Gewinnchancen haben", nl: "Wanneer je minder dan 30% winkans hebt" },
          { en: "When you have less than 20% winning chances", es: "Cuando tienes menos del 20% de posibilidades de ganar", de: "Wenn Sie weniger als 20% Gewinnchancen haben", nl: "Wanneer je minder dan 20% winkans hebt" },
          { en: "When you have less than 25% winning chances", es: "Cuando tienes menos del 25% de posibilidades de ganar", de: "Wenn Sie weniger als 25% Gewinnchancen haben", nl: "Wanneer je minder dan 25% winkans hebt" }
        ],
        correct: 3,
        explanation: {
          en: "The general rule for accepting a double is having at least 25% winning chances. Below this threshold, you'll lose more equity by accepting than by dropping the double.",
          es: "La regla general para aceptar un doble es tener al menos un 25% de posibilidades de ganar. Por debajo de este umbral, perderás más equidad aceptando que rechazando el doble.",
          de: "Die allgemeine Regel für das Akzeptieren eines Doppelns ist mindestens 25% Gewinnchancen zu haben. Unter dieser Schwelle verlieren Sie mehr Equity durch Akzeptieren als durch Ablehnen des Doppelns.",
          nl: "De algemene regel voor het accepteren van een verdubbeling is ten minste 25% winkans hebben. Onder deze drempel verlies je meer equity door te accepteren dan door de verdubbeling te laten vallen."
        }
      },
      {
        question: {
          en: "What is a 'Jacoby rule' in money games?",
          es: "¿Qué es una 'regla de Jacoby' en juegos de dinero?",
          de: "Was ist eine 'Jacoby-Regel' in Geldspielen?",
          nl: "Wat is een 'Jacoby-regel' in geldspellen?"
        },
        options: [
          { en: "Gammons and backgammons only count if the cube has been turned", es: "Los gammons y backgammons solo cuentan si el cubo ha sido girado", de: "Gammons und Backgammons zählen nur wenn der Würfel gedreht wurde", nl: "Gammons en backgammons tellen alleen als de dobbelsteen is gedraaid" },
          { en: "Automatic double on first roll", es: "Doble automático en el primer lanzamiento", de: "Automatisches Doppeln beim ersten Wurf", nl: "Automatische verdubbeling bij eerste worp" },
          { en: "No bearing off until all checkers are in home board", es: "No retirar fichas hasta que todas estén en el tablero de casa", de: "Kein Auswürfeln bis alle Steine im Home Board sind", nl: "Niet uitwerpen totdat alle stenen in thuisbord zijn" },
          { en: "Doubling cube can only be used once per game", es: "El cubo de doblaje solo se puede usar una vez por juego", de: "Dopplungswürfel kann nur einmal pro Spiel verwendet werden", nl: "Verdubbeldob kan slechts eenmaal per spel worden gebruikt" }
        ],
        correct: 0,
        explanation: {
          en: "The Jacoby rule, commonly used in money games, states that gammons and backgammons only count for their full value if the doubling cube has been turned during the game. This encourages more aggressive cube action.",
          es: "La regla de Jacoby, comúnmente usada en juegos de dinero, establece que los gammons y backgammons solo cuentan por su valor completo si el cubo de doblaje ha sido girado durante el juego. Esto fomenta una acción de cubo más agresiva.",
          de: "Die Jacoby-Regel, häufig in Geldspielen verwendet, besagt dass Gammons und Backgammons nur ihren vollen Wert zählen wenn der Dopplungswürfel während des Spiels gedreht wurde. Dies fördert aggressivere Würfelaktionen.",
          nl: "De Jacoby-regel, vaak gebruikt in geldspellen, stelt dat gammons en backgammons alleen tellen voor hun volledige waarde als de verdubbeldob tijdens het spel is gedraaid. Dit moedigt meer agressieve dobbelsteenactie aan."
        }
      },
      {
        question: {
          en: "When executing a successful back game, what should you do after hitting an opponent's checker?",
          es: "Al ejecutar un back game exitoso, ¿qué debes hacer después de golpear una ficha del oponente?",
          de: "Was sollten Sie nach dem Schlagen eines gegnerischen Steins bei einem erfolgreichen Back Game tun?",
          nl: "Wat moet je doen na het slaan van een steen van de tegenstander bij het uitvoeren van een succesvol back game?"
        },
        options: [
          { en: "Double immediately", es: "Doblar inmediatamente", de: "Sofort doppeln", nl: "Onmiddellijk verdubbelen" },
          { en: "Continue bearing off", es: "Continuar sacando fichas", de: "Weiter auswürfeln", nl: "Doorgaan met uitwerpen" },
          { en: "Quickly build a prime in your home board to contain the hit checker", es: "Construir rápidamente un prime en tu tablero interior para contener la ficha golpeada", de: "Schnell ein Prime in Ihrem Home Board aufbauen um den geschlagenen Stein einzusperren", nl: "Snel een prime bouwen in je thuisbord om de geslagen steen vast te houden" },
          { en: "Break your anchors", es: "Romper tus anclas", de: "Ihre Anker brechen", nl: "Je ankers breken" }
        ],
        correct: 2,
        explanation: {
          en: "After hitting in a back game, you must quickly build blocking points in your home board to contain your opponent's checker. This is why timing is so important - you need enough builders to make these points.",
          es: "Después de golpear en un back game, debes construir rápidamente puntos de bloqueo en tu tablero interior para contener la ficha de tu oponente. Por eso el timing es tan importante - necesitas suficientes constructores para hacer estos puntos.",
          de: "Nach dem Schlagen in einem Back Game müssen Sie schnell Blockierpunkte in Ihrem Home Board aufbauen um den Stein Ihres Gegners einzusperren. Deshalb ist Timing so wichtig - Sie brauchen genug Baumeister um diese Punkte zu machen.",
          nl: "Na het slaan in een back game moet je snel blokkerende punten bouwen in je thuisbord om de steen van je tegenstander vast te houden. Daarom is timing zo belangrijk - je hebt genoeg bouwers nodig om deze punten te maken."
        }
      },
      {
        question: {
          en: "What is a 'beaver' in backgammon?",
          es: "¿Qué es un 'beaver' en backgammon?",
          de: "Was ist ein 'Beaver' im Backgammon?",
          nl: "Wat is een 'beaver' in backgammon?"
        },
        options: [
          { en: "Blocking opponent's home board", es: "Bloquear el tablero de casa del oponente", de: "Das Home Board des Gegners blockieren", nl: "Het thuisbord van de tegenstander blokkeren" },
          { en: "Accepting a double and immediately redoubling while retaining cube ownership", es: "Aceptar un doble e inmediatamente redoblar mientras se retiene la propiedad del cubo", de: "Ein Doppeln akzeptieren und sofort erneut doppeln während man den Würfelbesitz behält", nl: "Een verdubbeling accepteren en onmiddellijk opnieuw verdubbelen terwijl je het dobbelsteenbezit behoudt" },
          { en: "A type of opening move", es: "Un tipo de movimiento de apertura", de: "Eine Art Eröffnungszug", nl: "Een type openingszet" },
          { en: "Rolling double fives", es: "Sacar doble cinco", de: "Pasch Fünf würfeln", nl: "Dubbel vijf gooien" }
        ],
        correct: 1,
        explanation: {
          en: "A beaver is when a player accepts a double and immediately redoubles, but retains ownership of the cube. This aggressive move is only allowed in money games, not match play, and only if both players agree beforehand.",
          es: "Un beaver es cuando un jugador acepta un doble e inmediatamente redobla, pero retiene la propiedad del cubo. Este movimiento agresivo solo se permite en juegos de dinero, no en partidas, y solo si ambos jugadores están de acuerdo de antemano.",
          de: "Ein Beaver ist wenn ein Spieler ein Doppeln akzeptiert und sofort erneut doppelt, aber den Besitz des Würfels behält. Dieser aggressive Zug ist nur in Geldspielen erlaubt, nicht im Match-Spiel, und nur wenn beide Spieler vorher zustimmen.",
          nl: "Een beaver is wanneer een speler een verdubbeling accepteert en onmiddellijk opnieuw verdubbelt, maar het bezit van de dobbelsteen behoudt. Deze agressieve zet is alleen toegestaan in geldspellen, niet in wedstrijdspel, en alleen als beide spelers vooraf akkoord gaan."
        }
      },
      {
        question: {
          en: "What is the 'match equity table' used for?",
          es: "¿Para qué se usa la 'tabla de equidad de partido'?",
          de: "Wofür wird die 'Match-Equity-Tabelle' verwendet?",
          nl: "Waarvoor wordt de 'wedstrijd equity tabel' gebruikt?"
        },
        options: [
          { en: "To calculate pip count", es: "Para calcular el conteo de pips", de: "Um die Pip-Zählung zu berechnen", nl: "Om pip count te berekenen" },
          { en: "To track player statistics", es: "Para rastrear estadísticas de jugadores", de: "Um Spielerstatistiken zu verfolgen", nl: "Om spelersstatistieken bij te houden" },
          { en: "To determine optimal cube decisions based on match score", es: "Para determinar decisiones óptimas de cubo basadas en el marcador del partido", de: "Um optimale Würfelentscheidungen basierend auf dem Spielstand zu bestimmen", nl: "Om optimale dobbelsteenbeslissingen te bepalen op basis van wedstrijdscore" },
          { en: "To determine board setup", es: "Para determinar la configuración del tablero", de: "Um das Brett-Setup zu bestimmen", nl: "Om bordsetting te bepalen" }
        ],
        correct: 2,
        explanation: {
          en: "The match equity table shows your winning chances at any score in a match. It's essential for making correct doubling and cube decisions in match play, as the score dramatically affects optimal cube strategy.",
          es: "La tabla de equidad de partido muestra tus posibilidades de ganar en cualquier marcador de un partido. Es esencial para tomar decisiones correctas de doblaje y cubo en el juego de partidas, ya que el marcador afecta dramáticamente la estrategia óptima de cubo.",
          de: "Die Match-Equity-Tabelle zeigt Ihre Gewinnchancen bei jedem Spielstand in einem Match. Sie ist wesentlich für korrekte Doppel- und Würfelentscheidungen im Match-Spiel, da der Spielstand die optimale Würfelstrategie dramatisch beeinflusst.",
          nl: "De wedstrijd equity tabel toont je winkansen bij elke score in een wedstrijd. Het is essentieel voor het nemen van correcte verdubbel- en dobbelsteenbeslissingen in wedstrijdspel, aangezien de score de optimale dobbelsteenstrategie dramatisch beïnvloedt."
        }
      },
      {
        question: {
          en: "What is a 'mutual holding game'?",
          es: "¿Qué es un 'juego de mantenimiento mutuo'?",
          de: "Was ist ein 'Gegenseitiges Haltespiel'?",
          nl: "Wat is een 'wederzijds vasthoudspel'?"
        },
        options: [
          { en: "When neither player has hit any checkers", es: "Cuando ningún jugador ha golpeado ninguna ficha", de: "Wenn kein Spieler Steine geschlagen hat", nl: "Wanneer geen enkele speler stenen heeft geslagen" },
          { en: "When both players hold anchor points in each other's home boards", es: "Cuando ambos jugadores mantienen puntos de anclaje en los tableros de casa del otro", de: "Wenn beide Spieler Ankerpunkte in den Home Boards des anderen halten", nl: "Wanneer beide spelers ankerpunten vasthouden in elkaars thuisborden" },
          { en: "When both players agree to split the stake", es: "Cuando ambos jugadores acuerdan dividir la apuesta", de: "Wenn beide Spieler zustimmen den Einsatz zu teilen", nl: "Wanneer beide spelers instemmen met het delen van de inzet" },
          { en: "When doubling cube ownership is shared", es: "Cuando la propiedad del cubo de doblaje es compartida", de: "Wenn der Dopplungswürfelbesitz geteilt wird", nl: "Wanneer dobbelsteenbezit gedeeld wordt" }
        ],
        correct: 1,
        explanation: {
          en: "A mutual holding game occurs when both players hold one or more anchor points in their opponent's home board. These games require careful timing and strategic decisions about when to break anchors and commit to racing.",
          es: "Un juego de mantenimiento mutuo ocurre cuando ambos jugadores mantienen uno o más puntos de anclaje en el tablero de casa de su oponente. Estos juegos requieren un timing cuidadoso y decisiones estratégicas sobre cuándo romper anclas y comprometerse a correr.",
          de: "Ein Gegenseitiges Haltespiel tritt auf wenn beide Spieler einen oder mehrere Ankerpunkte im Home Board ihres Gegners halten. Diese Spiele erfordern sorgfältiges Timing und strategische Entscheidungen darüber wann Anker gebrochen und zum Rennen übergegangen werden soll.",
          nl: "Een wederzijds vasthoudspel vindt plaats wanneer beide spelers een of meer ankerpunten vasthouden in het thuisbord van hun tegenstander. Deze spellen vereisen zorgvuldige timing en strategische beslissingen over wanneer ankers te breken en zich te committeren aan racen."
        }
      },
      {
        question: {
          en: "What does 'taking the market position' mean?",
          es: "¿Qué significa 'tomar la posición de mercado'?",
          de: "Was bedeutet 'die Marktposition einnehmen'?",
          nl: "Wat betekent 'de marktpositie innemen'?"
        },
        options: [
          { en: "Building a prime", es: "Construir un prime", de: "Ein Prime aufbauen", nl: "Een prime bouwen" },
          { en: "Accepting every double", es: "Aceptar cada doble", de: "Jedes Doppeln akzeptieren", nl: "Elke verdubbeling accepteren" },
          { en: "Doubling before position improves enough that opponent must pass", es: "Doblar antes de que la posición mejore lo suficiente como para que el oponente deba pasar", de: "Doppeln bevor sich die Position so sehr verbessert dass der Gegner passen muss", nl: "Verdubbelen voordat de positie voldoende verbetert zodat tegenstander moet passen" },
          { en: "Controlling the center points", es: "Controlar los puntos centrales", de: "Die mittleren Punkte kontrollieren", nl: "De middenpunten controleren" }
        ],
        correct: 2,
        explanation: {
          en: "Taking the market position means doubling now, even though you could wait, because your position might improve so much on the next roll that your opponent would have to pass. You double before you 'lose your market' (the opponent's willingness to take).",
          es: "Tomar la posición de mercado significa doblar ahora, aunque podrías esperar, porque tu posición podría mejorar tanto en el próximo lanzamiento que tu oponente tendría que pasar. Doblas antes de 'perder tu mercado' (la disposición del oponente a aceptar).",
          de: "Die Marktposition einnehmen bedeutet jetzt zu doppeln, obwohl Sie warten könnten, weil sich Ihre Position beim nächsten Wurf so sehr verbessern könnte dass Ihr Gegner passen müsste. Sie doppeln bevor Sie 'Ihren Markt verlieren' (die Bereitschaft des Gegners anzunehmen).",
          nl: "De marktpositie innemen betekent nu verdubbelen, hoewel je zou kunnen wachten, omdat je positie bij de volgende worp zo veel zou kunnen verbeteren dat je tegenstander zou moeten passen. Je verdubbelt voordat je 'je markt verliest' (de bereidheid van de tegenstander om te accepteren)."
        }
      },
      {
        question: {
          en: "What is the purpose of the 'anchor' in opponent's board?",
          es: "¿Cuál es el propósito del 'ancla' en el tablero del oponente?",
          de: "Was ist der Zweck des 'Ankers' im Brett des Gegners?",
          nl: "Wat is het doel van het 'anker' in het bord van de tegenstander?"
        },
        options: [
          { en: "To prevent opponent from doubling", es: "Para evitar que el oponente doble", de: "Um den Gegner am Doppeln zu hindern", nl: "Om tegenstander te verhinderen te verdubbelen" },
          { en: "To speed up bearing off", es: "Para acelerar la retirada de fichas", de: "Um das Auswürfeln zu beschleunigen", nl: "Om het uitgooien te versnellen" },
          { en: "To provide a safe landing point and potential to hit opponent's checkers", es: "Para proporcionar un punto de aterrizaje seguro y potencial para golpear fichas del oponente", de: "Um einen sicheren Landepunkt zu bieten und potenzial gegnerische Steine zu schlagen", nl: "Om een veilig landingspunt te bieden en potentieel om stenen van de tegenstander te slaan" },
          { en: "To block opponent from entering home board", es: "Para bloquear al oponente de entrar al tablero de casa", de: "Um den Gegner am Betreten des Home Boards zu hindern", nl: "Om tegenstander te blokkeren van het betreden van thuisbord" }
        ],
        correct: 2,
        explanation: {
          en: "An anchor in your opponent's board serves multiple purposes: it provides a safe landing spot for your checkers to land when escaping, gives you chances to hit opponent's checkers, and can slow down their game if positioned correctly.",
          es: "Un ancla en el tablero de tu oponente sirve para múltiples propósitos: proporciona un punto de aterrizaje seguro para que tus fichas aterricen al escapar, te da oportunidades de golpear las fichas del oponente, y puede ralentizar su juego si se posiciona correctamente.",
          de: "Ein Anker im Brett Ihres Gegners dient mehreren Zwecken: Er bietet einen sicheren Landeplatz für Ihre Steine beim Entkommen, gibt Ihnen Chancen gegnerische Steine zu schlagen, und kann ihr Spiel verlangsamen wenn richtig positioniert.",
          nl: "Een anker in het bord van je tegenstander heeft meerdere doelen: het biedt een veilige landingsplaats voor je stenen om te landen bij het ontsnappen, geeft je kansen om stenen van de tegenstander te slaan, en kan hun spel vertragen als het correct gepositioneerd is."
        }
      },
      {
        question: {
          en: "What is 'gammon value' and why is it important?",
          es: "¿Qué es el 'valor de gammon' y por qué es importante?",
          de: "Was ist 'Gammon-Wert' und warum ist er wichtig?",
          nl: "Wat is 'gammon waarde' en waarom is het belangrijk?"
        },
        options: [
          { en: "The time limit for each move", es: "El límite de tiempo para cada movimiento", de: "Das Zeitlimit für jeden Zug", nl: "De tijdslimiet voor elke zet" },
          { en: "The skill level required to play", es: "El nivel de habilidad requerido para jugar", de: "Das erforderliche Fähigkeitsniveau zum Spielen", nl: "Het vaardigheidsniveau vereist om te spelen" },
          { en: "The points earned from a gammon win", es: "Los puntos ganados de una victoria de gammon", de: "Die Punkte die aus einem Gammon-Gewinn verdient werden", nl: "De punten verdiend door een gammon overwinning" },
          { en: "The probability of winning a gammon, affecting cube decisions", es: "La probabilidad de ganar un gammon, afectando las decisiones de cubo", de: "Die Wahrscheinlichkeit ein Gammon zu gewinnen, die Würfelentscheidungen beeinflusst", nl: "De kans op het winnen van een gammon, die dobbelsteenbeslissingen beïnvloedt" }
        ],
        correct: 3,
        explanation: {
          en: "Gammon value refers to your chances of winning or losing a gammon (or backgammon). It's crucial for doubling decisions because gammons are worth double (or triple for backgammon), so higher gammon chances make doubling more attractive and taking more risky.",
          es: "El valor de gammon se refiere a tus posibilidades de ganar o perder un gammon (o backgammon). Es crucial para las decisiones de doblaje porque los gammons valen el doble (o triple para backgammon), por lo que mayores posibilidades de gammon hacen el doblaje más atractivo y aceptar más arriesgado.",
          de: "Gammon-Wert bezieht sich auf Ihre Chancen ein Gammon (oder Backgammon) zu gewinnen oder zu verlieren. Er ist entscheidend für Doppelentscheidungen weil Gammons doppelt (oder dreifach für Backgammon) wert sind, sodass höhere Gammon-Chancen das Doppeln attraktiver und das Annehmen riskanter machen.",
          nl: "Gammon waarde verwijst naar je kansen op het winnen of verliezen van een gammon (of backgammon). Het is cruciaal voor verdubbelbeslissingen omdat gammons dubbel (of driedubbel voor backgammon) waard zijn, dus hogere gammon kansen maken verdubbelen aantrekkelijker en accepteren riskanter."
        }
      },
      {
        question: {
          en: "In a pure race, what is the approximate pip count advantage needed to double efficiently?",
          es: "En una carrera pura, ¿cuál es la ventaja aproximada de conteo de pips necesaria para doblar eficientemente?",
          de: "In einem reinen Rennen, was ist der ungefähre Pip-Zählungsvorteil der zum effizienten Doppeln benötigt wird?",
          nl: "In een pure race, wat is het geschatte pip count voordeel dat nodig is om efficiënt te verdubbelen?"
        },
        options: [
          { en: "15-20 pips ahead", es: "15-20 pips adelante", de: "15-20 Pips voraus", nl: "15-20 pips voorsprong" },
          { en: "10-12 pips ahead", es: "10-12 pips adelante", de: "10-12 Pips voraus", nl: "10-12 pips voorsprong" },
          { en: "5-8 pips ahead", es: "5-8 pips adelante", de: "5-8 Pips voraus", nl: "5-8 pips voorsprong" },
          { en: "8-10 pips ahead", es: "8-10 pips adelante", de: "8-10 Pips voraus", nl: "8-10 pips voorsprong" }
        ],
        correct: 3,
        explanation: {
          en: "In a pure race with both players having borne off no checkers yet, you generally need to be about 8-10% ahead in pip count to have an efficient double. This translates to roughly 8-10 pips when both sides have around 100 pip counts remaining.",
          es: "En una carrera pura con ambos jugadores sin haber retirado ninguna ficha aún, generalmente necesitas estar aproximadamente 8-10% adelante en el conteo de pips para tener un doble eficiente. Esto se traduce en aproximadamente 8-10 pips cuando ambos lados tienen alrededor de 100 pips restantes.",
          de: "In einem reinen Rennen wenn beide Spieler noch keine Steine ausgewürfelt haben, müssen Sie in der Regel etwa 8-10% bei der Pip-Zählung voraus sein um ein effizientes Doppeln zu haben. Dies entspricht etwa 8-10 Pips wenn beide Seiten noch etwa 100 Pip-Zählungen übrig haben.",
          nl: "In een pure race waarbij beide spelers nog geen stenen hebben uitgegooid, moet je over het algemeen ongeveer 8-10% voorliggen in pip count om een efficiënte verdubbeling te hebben. Dit vertaalt zich naar ongeveer 8-10 pips wanneer beide kanten ongeveer 100 pip counts over hebben."
        }
      },
      {
        question: {
          en: "What is 'recube vigorish'?",
          es: "¿Qué es 'recube vigorish'?",
          de: "Was ist 'Recube-Vigorish'?",
          nl: "Wat is 'recube vigorish'?"
        },
        options: [
          { en: "The advantage of owning the doubling cube after taking a double", es: "La ventaja de poseer el cubo de doblaje después de aceptar un doble", de: "Der Vorteil den Dopplungswürfel zu besitzen nachdem man ein Doppeln angenommen hat", nl: "Het voordeel van het bezitten van de verdubbeldob na het accepteren van een verdubbeling" },
          { en: "The cost of redoubling too early", es: "El costo de redoblar demasiado pronto", de: "Die Kosten des zu frühen erneuten Doppelns", nl: "De kosten van te vroeg opnieuw verdubbelen" },
          { en: "The penalty for dropping a cube", es: "La penalización por rechazar un cubo", de: "Die Strafe für das Ablehnen eines Würfels", nl: "De straf voor het laten vallen van een dobbelsteen" },
          { en: "Extra points for gammons with the cube", es: "Puntos extra por gammons con el cubo", de: "Zusätzliche Punkte für Gammons mit dem Würfel", nl: "Extra punten voor gammons met de dobbelsteen" }
        ],
        correct: 0,
        explanation: {
          en: "Recube vigorish (or recube vig) is the extra equity you gain by owning the doubling cube after you take. This ownership allows you to recube if the position swings in your favor, giving you leverage. It makes marginally bad takes actually correct in some positions.",
          es: "Recube vigorish (o recube vig) es la equidad extra que ganas al poseer el cubo de doblaje después de aceptar. Esta propiedad te permite redoblar si la posición se vuelve a tu favor, dándote ventaja. Hace que aceptaciones marginalmente malas sean realmente correctas en algunas posiciones.",
          de: "Recube-Vigorish (oder Recube-Vig) ist das zusätzliche Equity das Sie gewinnen indem Sie den Dopplungswürfel besitzen nachdem Sie angenommen haben. Dieser Besitz erlaubt es Ihnen erneut zu doppeln wenn die Position sich zu Ihren Gunsten wendet, was Ihnen Hebelwirkung gibt. Es macht marginal schlechte Annahmen in manchen Positionen tatsächlich korrekt.",
          nl: "Recube vigorish (of recube vig) is de extra equity die je krijgt door de verdubbeldob te bezitten nadat je hebt geaccepteerd. Dit eigenaarschap stelt je in staat om opnieuw te verdubbelen als de positie in jouw voordeel draait, wat je invloed geeft. Het maakt marginaal slechte accepts eigenlijk correct in sommige posities."
        }
      },
      {
        question: {
          en: "What is the ideal timing distribution for a 2-3 back game?",
          es: "¿Cuál es la distribución de timing ideal para un back game 2-3?",
          de: "Was ist die ideale Timing-Verteilung für ein 2-3 Back Game?",
          nl: "Wat is de ideale timingverdeling voor een 2-3 back game?"
        },
        options: [
          { en: "4 checkers on anchors, 11 in outfield", es: "4 fichas en anclas, 11 en el campo exterior", de: "4 Steine auf Ankern, 11 im Außenfeld", nl: "4 stenen op ankers, 11 in buitenveld" },
          { en: "6 checkers on anchors, 9 in outfield", es: "6 fichas en anclas, 9 en el campo exterior", de: "6 Steine auf Ankern, 9 im Außenfeld", nl: "6 stenen op ankers, 9 in buitenveld" },
          { en: "8 checkers on anchors, 7 in outfield", es: "8 fichas en anclas, 7 en el campo exterior", de: "8 Steine auf Ankern, 7 im Außenfeld", nl: "8 stenen op ankers, 7 in buitenveld" },
          { en: "10 checkers on anchors, 5 in outfield", es: "10 fichas en anclas, 5 en el campo exterior", de: "10 Steine auf Ankern, 5 im Außenfeld", nl: "10 stenen op ankers, 5 in buitenveld" }
        ],
        correct: 0,
        explanation: {
          en: "For a successful 2-3 back game, you ideally want 4 checkers on your two anchors (2 on each) and approximately 10-11 checkers in the outfield. This gives you enough timing to wait for a shot while maintaining builders to make points after hitting.",
          es: "Para un back game 2-3 exitoso, idealmente quieres 4 fichas en tus dos anclas (2 en cada una) y aproximadamente 10-11 fichas en el campo exterior. Esto te da suficiente timing para esperar un tiro mientras mantienes constructores para hacer puntos después de golpear.",
          de: "Für ein erfolgreiches 2-3 Back Game wollen Sie idealerweise 4 Steine auf Ihren beiden Ankern (2 auf jedem) und ungefähr 10-11 Steine im Außenfeld. Dies gibt Ihnen genug Timing um auf einen Treffer zu warten während Sie Baumeister behalten um nach dem Schlagen Punkte zu machen.",
          nl: "Voor een succesvol 2-3 back game wil je idealiter 4 stenen op je twee ankers (2 op elk) en ongeveer 10-11 stenen in het buitenveld. Dit geeft je genoeg timing om te wachten op een kans terwijl je bouwers behoudt om punten te maken na het slaan."
        }
      },
      {
        question: {
          en: "What is 'duplication' strategy in backgammon?",
          es: "¿Qué es la estrategia de 'duplicación' en backgammon?",
          de: "Was ist die 'Duplikations'-Strategie im Backgammon?",
          nl: "Wat is de 'duplicatie' strategie in backgammon?"
        },
        options: [
          { en: "Positioning so opponent needs same dice numbers for multiple tasks", es: "Posicionar para que el oponente necesite los mismos números de dados para múltiples tareas", de: "So positionieren dass Gegner dieselben Würfelzahlen für mehrere Aufgaben benötigt", nl: "Zo positioneren dat tegenstander dezelfde dobbelsteennummers nodig heeft voor meerdere taken" },
          { en: "Making the same point twice", es: "Hacer el mismo punto dos veces", de: "Denselben Punkt zweimal machen", nl: "Hetzelfde punt twee keer maken" },
          { en: "Doubling the cube value twice", es: "Doblar el valor del cubo dos veces", de: "Den Würfelwert zweimal verdoppeln", nl: "De dobbelsteenwaarde twee keer verdubbelen" },
          { en: "Having two checkers on every point", es: "Tener dos fichas en cada punto", de: "Zwei Steine auf jedem Punkt haben", nl: "Twee stenen op elk punt hebben" }
        ],
        correct: 0,
        explanation: {
          en: "Duplication involves positioning your checkers so your opponent needs the same dice numbers to accomplish different goals. For example, if they need 6's both to escape AND to hit you, their effective rolls are reduced. This is a sophisticated defensive technique.",
          es: "La duplicación implica posicionar tus fichas para que tu oponente necesite los mismos números de dados para lograr diferentes objetivos. Por ejemplo, si necesitan 6's tanto para escapar COMO para golpearte, sus tiros efectivos se reducen. Esta es una técnica defensiva sofisticada.",
          de: "Duplikation beinhaltet das Positionieren Ihrer Steine sodass Ihr Gegner dieselben Würfelzahlen benötigt um verschiedene Ziele zu erreichen. Zum Beispiel wenn sie 6en sowohl zum Entkommen ALS AUCH zum Schlagen brauchen, werden ihre effektiven Würfe reduziert. Dies ist eine ausgefeilte Verteidigungstechnik.",
          nl: "Duplicatie houdt in dat je je stenen zo positioneert dat je tegenstander dezelfde dobbelsteennummers nodig heeft om verschillende doelen te bereiken. Bijvoorbeeld, als ze 6'en nodig hebben om zowel te ontsnappen ALS om jou te slaan, worden hun effectieve worpen verminderd. Dit is een geavanceerde verdedigingstechniek."
        }
      },
      {
        question: {
          en: "What is a 'slot' in backgammon opening play?",
          es: "¿Qué es un 'slot' en el juego de apertura de backgammon?",
          de: "Was ist ein 'Slot' im Backgammon-Eröffnungsspiel?",
          nl: "Wat is een 'slot' in backgammon openingsspel?"
        },
        options: [
          { en: "Leaving a single checker (blot) on a strategic point, hoping to cover it next roll", es: "Dejar una sola ficha (blot) en un punto estratégico, esperando cubrirla en el próximo tiro", de: "Einen einzelnen Stein (Blot) auf einem strategischen Punkt lassen in der Hoffnung ihn im nächsten Wurf zu decken", nl: "Een enkele steen (blot) achterlaten op een strategisch punt, hopend hem bij de volgende worp te dekken" },
          { en: "An empty point on the board", es: "Un punto vacío en el tablero", de: "Ein leerer Punkt auf dem Brett", nl: "Een leeg punt op het bord" },
          { en: "A gap in your prime", es: "Un hueco en tu prime", de: "Eine Lücke in Ihrem Prime", nl: "Een gat in je prime" },
          { en: "A position where you can't move", es: "Una posición donde no puedes moverte", de: "Eine Position wo Sie sich nicht bewegen können", nl: "Een positie waar je niet kunt bewegen" }
        ],
        correct: 0,
        explanation: {
          en: "Slotting means deliberately placing a single checker on a valuable point (like your 5-point or bar-point) to gain tempo in making that point. While risky if hit, successful slotting can give you a significant positional advantage early in the game.",
          es: "Hacer slot significa colocar deliberadamente una sola ficha en un punto valioso (como tu punto 5 o punto de barra) para ganar tempo en hacer ese punto. Aunque es arriesgado si te golpean, un slot exitoso puede darte una ventaja posicional significativa temprano en el juego.",
          de: "Slotten bedeutet absichtlich einen einzelnen Stein auf einen wertvollen Punkt zu platzieren (wie Ihren 5-Punkt oder Bar-Punkt) um Tempo beim Machen dieses Punktes zu gewinnen. Obwohl riskant wenn geschlagen, kann erfolgreiches Slotten Ihnen einen erheblichen Positionsvorteil früh im Spiel geben.",
          nl: "Slotten betekent opzettelijk een enkele steen plaatsen op een waardevol punt (zoals je 5-punt of bar-punt) om tempo te winnen bij het maken van dat punt. Hoewel riskant als je geslagen wordt, kan succesvol slotten je een aanzienlijk positioneel voordeel geven vroeg in het spel."
        }
      },
      {
        question: {
          en: "What is 'tempo' in backgammon?",
          es: "¿Qué es 'tempo' en backgammon?",
          de: "Was ist 'Tempo' im Backgammon?",
          nl: "Wat is 'tempo' in backgammon?"
        },
        options: [
          { en: "The speed of play or initiative - gaining ground/position faster than opponent", es: "La velocidad de juego o iniciativa - ganar terreno/posición más rápido que el oponente", de: "Die Spielgeschwindigkeit oder Initiative - schneller als der Gegner Boden/Position gewinnen", nl: "De speelsnelheid of initiatief - sneller terrein/positie winnen dan tegenstander" },
          { en: "Time limit for moves", es: "Límite de tiempo para movimientos", de: "Zeitlimit für Züge", nl: "Tijdslimiet voor zetten" },
          { en: "Match duration", es: "Duración del partido", de: "Match-Dauer", nl: "Wedstrijdduur" },
          { en: "Pip count difference", es: "Diferencia de conteo de pips", de: "Pip-Count-Unterschied", nl: "Pip count verschil" }
        ],
        correct: 0,
        explanation: {
          en: "Tempo refers to gaining initiative and developing your position efficiently. Playing with good tempo means accomplishing your goals (making points, escaping anchors, etc.) faster than your opponent. Losing tempo means falling behind in development.",
          es: "Tempo se refiere a ganar iniciativa y desarrollar tu posición eficientemente. Jugar con buen tempo significa lograr tus objetivos (hacer puntos, escapar de anclas, etc.) más rápido que tu oponente. Perder tempo significa quedarse atrás en desarrollo.",
          de: "Tempo bezieht sich darauf Initiative zu gewinnen und Ihre Position effizient zu entwickeln. Mit gutem Tempo spielen bedeutet Ihre Ziele (Punkte machen, Anker entkommen usw.) schneller als Ihr Gegner zu erreichen. Tempo zu verlieren bedeutet in der Entwicklung zurückzufallen.",
          nl: "Tempo verwijst naar het winnen van initiatief en het efficiënt ontwikkelen van je positie. Spelen met goed tempo betekent je doelen bereiken (punten maken, van ankers ontsnappen, enz.) sneller dan je tegenstander. Tempo verliezen betekent achterblijven in ontwikkeling."
        }
      },
      {
        question: {
          en: "What is a 'builder' in backgammon strategy?",
          es: "¿Qué es un 'constructor' en la estrategia de backgammon?",
          de: "Was ist ein 'Baumeister' in der Backgammon-Strategie?",
          nl: "Wat is een 'bouwer' in backgammon strategie?"
        },
        options: [
          { en: "A checker positioned to help make important points on future rolls", es: "Una ficha posicionada para ayudar a hacer puntos importantes en tiros futuros", de: "Ein Stein der positioniert ist um wichtige Punkte bei zukünftigen Würfen zu machen", nl: "Een steen gepositioneerd om belangrijke punten te maken bij toekomstige worpen" },
          { en: "The player who sets up the board", es: "El jugador que configura el tablero", de: "Der Spieler der das Brett aufbaut", nl: "De speler die het bord opzet" },
          { en: "A checker used to build a prime", es: "Una ficha utilizada para construir un prime", de: "Ein Stein der zum Aufbau eines Prime verwendet wird", nl: "Een steen gebruikt om een prime op te bouwen" },
          { en: "The strongest checker on the board", es: "La ficha más fuerte en el tablero", de: "Der stärkste Stein auf dem Brett", nl: "De sterkste steen op het bord" }
        ],
        correct: 0,
        explanation: {
          en: "A builder is a checker flexibly positioned (usually in your outer board or on your midpoint) to help make key points like your 5-point, bar-point, or 4-point. Good builders are 6 pips or less from your target points, giving you multiple combinations to make them.",
          es: "Un constructor es una ficha posicionada flexiblemente (usualmente en tu tablero exterior o en tu punto medio) para ayudar a hacer puntos clave como tu punto 5, punto de barra o punto 4. Buenos constructores están a 6 pips o menos de tus puntos objetivo, dándote múltiples combinaciones para hacerlos.",
          de: "Ein Baumeister ist ein flexibel positionierter Stein (normalerweise in Ihrem Außenbrett oder auf Ihrem Mittelpunkt) um wichtige Punkte wie Ihren 5-Punkt, Bar-Punkt oder 4-Punkt zu machen. Gute Baumeister sind 6 Pips oder weniger von Ihren Zielpunkten entfernt und geben Ihnen mehrere Kombinationen um sie zu machen.",
          nl: "Een bouwer is een flexibel gepositioneerde steen (meestal in je buitenbord of op je middenpunt) om belangrijke punten te maken zoals je 5-punt, bar-punt of 4-punt. Goede bouwers zijn 6 pips of minder van je doelpunten, wat je meerdere combinaties geeft om ze te maken."
        }
      },
      {
        question: {
          en: "What is 'DMP' (Double Match Point) and how does it affect strategy?",
          es: "¿Qué es 'DMP' (Double Match Point) y cómo afecta la estrategia?",
          de: "Was ist 'DMP' (Double Match Point) und wie beeinflusst es die Strategie?",
          nl: "Wat is 'DMP' (Double Match Point) en hoe beïnvloedt het de strategie?"
        },
        options: [
          { en: "When both players need 1 point to win - gammons don't count, no doubling", es: "Cuando ambos jugadores necesitan 1 punto para ganar - gammons no cuentan, no hay doblaje", de: "Wenn beide Spieler 1 Punkt zum Sieg brauchen - Gammons zählen nicht, kein Doppeln", nl: "Wanneer beide spelers 1 punt nodig hebben om te winnen - gammons tellen niet, geen verdubbeling" },
          { en: "Doubling twice in one game", es: "Doblar dos veces en un juego", de: "Zweimal in einem Spiel doppeln", nl: "Twee keer verdubbelen in één spel" },
          { en: "When doubling cube reaches maximum value", es: "Cuando el cubo de doblaje alcanza el valor máximo", de: "Wenn der Dopplungswürfel den Maximalwert erreicht", nl: "Wanneer de verdubbeldob de maximale waarde bereikt" },
          { en: "Double-sided match points", es: "Puntos de partido de doble cara", de: "Doppelseitige Match-Punkte", nl: "Dubbelzijdige wedstrijdpunten" }
        ],
        correct: 0,
        explanation: {
          en: "DMP (Double Match Point) occurs when both players are 1 point away from winning the match. At DMP, the doubling cube is useless (never double), and gammons/backgammons don't matter - only winning the single game counts. This dramatically changes optimal checker play strategy.",
          es: "DMP (Double Match Point) ocurre cuando ambos jugadores están a 1 punto de ganar el partido. En DMP, el cubo de doblaje es inútil (nunca doblar), y gammons/backgammons no importan - solo ganar el juego individual cuenta. Esto cambia dramáticamente la estrategia óptima de juego de fichas.",
          de: "DMP (Double Match Point) tritt auf wenn beide Spieler 1 Punkt vom Matchsieg entfernt sind. Bei DMP ist der Dopplungswürfel nutzlos (nie doppeln), und Gammons/Backgammons zählen nicht - nur das Gewinnen des einzelnen Spiels zählt. Dies ändert die optimale Steinzugstrategie dramatisch.",
          nl: "DMP (Double Match Point) vindt plaats wanneer beide spelers 1 punt verwijderd zijn van het winnen van de wedstrijd. Bij DMP is de verdubbeldob nutteloos (nooit verdubbelen), en gammons/backgammons maken niet uit - alleen het winnen van het enkele spel telt. Dit verandert de optimale schijfspel strategie dramatisch."
        }
      },
      {
        question: {
          en: "What is a 'stack' in backgammon positions?",
          es: "¿Qué es una 'pila' en posiciones de backgammon?",
          de: "Was ist ein 'Stack' in Backgammon-Positionen?",
          nl: "Wat is een 'stapel' in backgammon posities?"
        },
        options: [
          { en: "Multiple checkers (3+) piled on a single point - inefficient distribution", es: "Múltiples fichas (3+) apiladas en un solo punto - distribución ineficiente", de: "Mehrere Steine (3+) auf einem einzelnen Punkt gestapelt - ineffiziente Verteilung", nl: "Meerdere stenen (3+) opgestapeld op een enkel punt - inefficiënte verdeling" },
          { en: "Your pile of captured checkers", es: "Tu pila de fichas capturadas", de: "Ihr Stapel gefangener Steine", nl: "Je stapel gevangen stenen" },
          { en: "The doubling cube value stack", es: "La pila de valores del cubo de doblaje", de: "Der Dopplungswürfel-Wertestapel", nl: "De verdubbeldob waardestapel" },
          { en: "Points made consecutively", es: "Puntos hechos consecutivamente", de: "Punkte die aufeinanderfolgend gemacht wurden", nl: "Punten achtereenvolgens gemaakt" }
        ],
        correct: 0,
        explanation: {
          en: "A stack is when you have more than 2 checkers on a single point, particularly 4 or more. Stacks are generally inefficient because those extra checkers are 'wasted' - they're not contributing to building other points or racing. Breaking down stacks smoothly is important for efficient play.",
          es: "Una pila es cuando tienes más de 2 fichas en un solo punto, particularmente 4 o más. Las pilas son generalmente ineficientes porque esas fichas extra están 'desperdiciadas' - no están contribuyendo a construir otros puntos o correr. Descomponer pilas suavemente es importante para un juego eficiente.",
          de: "Ein Stack ist wenn Sie mehr als 2 Steine auf einem einzelnen Punkt haben, besonders 4 oder mehr. Stacks sind generell ineffizient weil diese zusätzlichen Steine 'verschwendet' sind - sie tragen nicht zum Aufbau anderer Punkte oder zum Rennen bei. Stacks reibungslos abzubauen ist wichtig für effizientes Spiel.",
          nl: "Een stapel is wanneer je meer dan 2 stenen op een enkel punt hebt, vooral 4 of meer. Stapels zijn over het algemeen inefficiënt omdat die extra stenen 'verspild' zijn - ze dragen niet bij aan het bouwen van andere punten of racen. Stapels soepel afbreken is belangrijk voor efficiënt spel."
        }
      },
      {
        question: {
          en: "What is the 'Crawford rule' in match play?",
          es: "¿Qué es la 'regla de Crawford' en el juego de partidas?",
          de: "Was ist die 'Crawford-Regel' im Match-Spiel?",
          nl: "Wat is de 'Crawford-regel' in wedstrijdspel?"
        },
        options: [
          { en: "When one player reaches 1-away, next game has no doubling cube", es: "Cuando un jugador llega a 1-away, el próximo juego no tiene cubo de doblaje", de: "Wenn ein Spieler 1-away erreicht, hat das nächste Spiel keinen Dopplungswürfel", nl: "Wanneer een speler 1-away bereikt, heeft het volgende spel geen verdubbeldob" },
          { en: "Automatic double when trailing", es: "Doble automático cuando vas detrás", de: "Automatisches Doppeln wenn man zurückliegt", nl: "Automatische verdubbeling bij achterstand" },
          { en: "Mandatory redouble at 2-2 score", es: "Redoblaje obligatorio en marcador 2-2", de: "Obligatorisches erneutes Doppeln bei 2-2 Punktestand", nl: "Verplichte herverdubbeling bij 2-2 score" },
          { en: "No gammons allowed in final game", es: "No se permiten gammons en el juego final", de: "Keine Gammons im Endspiel erlaubt", nl: "Geen gammons toegestaan in laatste spel" }
        ],
        correct: 0,
        explanation: {
          en: "The Crawford rule states that when one player reaches match point (1-away from victory), the very next game is played without the doubling cube. This prevents the leader from immediately doubling and potentially winning the match. After the Crawford game, the cube is back in play.",
          es: "La regla de Crawford establece que cuando un jugador alcanza el match point (1-away de la victoria), el siguiente juego se juega sin el cubo de doblaje. Esto evita que el líder doble inmediatamente y potencialmente gane el partido. Después del juego de Crawford, el cubo vuelve a estar en juego.",
          de: "Die Crawford-Regel besagt dass wenn ein Spieler den Match Point erreicht (1-away vom Sieg), das allernächste Spiel ohne den Dopplungswürfel gespielt wird. Dies verhindert dass der Führende sofort doppelt und möglicherweise das Match gewinnt. Nach dem Crawford-Spiel ist der Würfel wieder im Spiel.",
          nl: "De Crawford-regel stelt dat wanneer een speler match point bereikt (1-away van overwinning), het allervolgende spel wordt gespeeld zonder de verdubbeldob. Dit voorkomt dat de leider onmiddellijk verdubbelt en mogelijk de wedstrijd wint. Na het Crawford-spel is de dobbel weer in het spel."
        }
      },
      {
        question: {
          en: "What is 'equity' in backgammon analysis?",
          es: "¿Qué es 'equidad' en el análisis de backgammon?",
          de: "Was ist 'Equity' in der Backgammon-Analyse?",
          nl: "Wat is 'equity' in backgammon analyse?"
        },
        options: [
          { en: "Expected points you'll win/lose in a position on average", es: "Puntos esperados que ganarás/perderás en una posición en promedio", de: "Erwartete Punkte die Sie in einer Position im Durchschnitt gewinnen/verlieren werden", nl: "Verwachte punten die je in een positie gemiddeld wint/verliest" },
          { en: "Equal chance for both players", es: "Oportunidad igual para ambos jugadores", de: "Gleiche Chance für beide Spieler", nl: "Gelijke kans voor beide spelers" },
          { en: "Fair play in matches", es: "Juego limpio en partidas", de: "Faires Spiel in Matches", nl: "Eerlijk spel in wedstrijden" },
          { en: "The pip count difference", es: "La diferencia de conteo de pips", de: "Die Pip-Count-Differenz", nl: "Het pip count verschil" }
        ],
        correct: 0,
        explanation: {
          en: "Equity is your expected value in a position - how many points you expect to win (positive equity) or lose (negative equity) on average. For example, +0.65 equity means you expect to win 0.65 points on average from that position. Modern backgammon AI calculates precise equity for every position and move.",
          es: "Equidad es tu valor esperado en una posición - cuántos puntos esperas ganar (equidad positiva) o perder (equidad negativa) en promedio. Por ejemplo, +0.65 de equidad significa que esperas ganar 0.65 puntos en promedio desde esa posición. La IA moderna de backgammon calcula equidad precisa para cada posición y movimiento.",
          de: "Equity ist Ihr erwarteter Wert in einer Position - wie viele Punkte Sie erwarten zu gewinnen (positive Equity) oder zu verlieren (negative Equity) im Durchschnitt. Zum Beispiel bedeutet +0,65 Equity dass Sie erwarten 0,65 Punkte im Durchschnitt aus dieser Position zu gewinnen. Moderne Backgammon-KI berechnet präzise Equity für jede Position und jeden Zug.",
          nl: "Equity is je verwachte waarde in een positie - hoeveel punten je verwacht te winnen (positieve equity) of te verliezen (negatieve equity) gemiddeld. Bijvoorbeeld, +0.65 equity betekent dat je verwacht gemiddeld 0.65 punten te winnen vanuit die positie. Moderne backgammon AI berekent precieze equity voor elke positie en zet."
        }
      },
      {
        question: {
          en: "What is a 'closeout' in backgammon?",
          es: "¿Qué es un 'closeout' en backgammon?",
          de: "Was ist ein 'Closeout' im Backgammon?",
          nl: "Wat is een 'closeout' in backgammon?"
        },
        options: [
          { en: "Making all six points in your home board while opponent has checkers on the bar", es: "Hacer los seis puntos en tu tablero interior mientras el oponente tiene fichas en la barra", de: "Alle sechs Punkte in Ihrem Home Board machen während Gegner Steine auf der Bar hat", nl: "Alle zes punten maken in je thuisbord terwijl tegenstander stenen op de bar heeft" },
          { en: "Ending the game early", es: "Terminar el juego temprano", de: "Das Spiel früh beenden", nl: "Het spel vroeg beëindigen" },
          { en: "Bearing off all your checkers", es: "Sacar todas tus fichas", de: "Alle Ihre Steine auswürfeln", nl: "Al je stenen uitgooien" },
          { en: "Closing your board to prevent entry", es: "Cerrar tu tablero para prevenir entrada", de: "Ihr Brett schließen um Eintreten zu verhindern", nl: "Je bord sluiten om binnenkomst te voorkomen" }
        ],
        correct: 0,
        explanation: {
          en: "A closeout (also called a prime closeout or 6-prime) occurs when you've made all 6 points in your home board while your opponent has one or more checkers on the bar. This is devastating - they cannot enter until you open a point, and you're likely to win a gammon or backgammon.",
          es: "Un closeout (también llamado prime closeout o 6-prime) ocurre cuando has hecho los 6 puntos en tu tablero interior mientras tu oponente tiene una o más fichas en la barra. Esto es devastador - no pueden entrar hasta que abras un punto, y es probable que ganes un gammon o backgammon.",
          de: "Ein Closeout (auch Prime Closeout oder 6-Prime genannt) tritt auf wenn Sie alle 6 Punkte in Ihrem Home Board gemacht haben während Ihr Gegner einen oder mehrere Steine auf der Bar hat. Dies ist verheerend - sie können nicht eintreten bis Sie einen Punkt öffnen, und Sie werden wahrscheinlich ein Gammon oder Backgammon gewinnen.",
          nl: "Een closeout (ook wel prime closeout of 6-prime genoemd) vindt plaats wanneer je alle 6 punten in je thuisbord hebt gemaakt terwijl je tegenstander een of meer stenen op de bar heeft. Dit is verwoestend - ze kunnen niet binnenkomen totdat je een punt opent, en je zult waarschijnlijk een gammon of backgammon winnen."
        }
      },
      {
        question: {
          en: "What is 'cube action' in backgammon?",
          es: "¿Qué es 'acción de cubo' en backgammon?",
          de: "Was ist 'Würfelaktion' im Backgammon?",
          nl: "Wat is 'dobbelsteen actie' in backgammon?"
        },
        options: [
          { en: "Decisions about when to double, take, or pass the doubling cube", es: "Decisiones sobre cuándo doblar, aceptar o pasar el cubo de doblaje", de: "Entscheidungen darüber wann man den Dopplungswürfel doppelt, annimmt oder passt", nl: "Beslissingen over wanneer te verdubbelen, accepteren of passen van de verdubbeldob" },
          { en: "Rolling the dice", es: "Lanzar los dados", de: "Die Würfel werfen", nl: "De dobbelstenen gooien" },
          { en: "Moving checkers in a cube pattern", es: "Mover fichas en un patrón de cubo", de: "Steine in einem Würfelmuster bewegen", nl: "Stenen in een dobbelsteenpatroon bewegen" },
          { en: "Building a 6-point prime", es: "Construir un prime de 6 puntos", de: "Ein 6-Punkt-Prime aufbauen", nl: "Een 6-punts prime bouwen" }
        ],
        correct: 0,
        explanation: {
          en: "Cube action refers to all decisions involving the doubling cube: when to offer a double, when to accept (take) a double, and when to decline (pass/drop) a double. Proper cube action is critical in backgammon - errors here are often more costly than checker play errors.",
          es: "Acción de cubo se refiere a todas las decisiones que involucran el cubo de doblaje: cuándo ofrecer un doble, cuándo aceptar (tomar) un doble, y cuándo rechazar (pasar/abandonar) un doble. Una acción de cubo adecuada es crítica en backgammon - los errores aquí son a menudo más costosos que los errores de juego de fichas.",
          de: "Würfelaktion bezieht sich auf alle Entscheidungen die den Dopplungswürfel betreffen: wann man ein Doppeln anbietet, wann man ein Doppeln annimmt (nimmt), und wann man ein Doppeln ablehnt (passt/ablegt). Richtige Würfelaktion ist kritisch im Backgammon - Fehler hier sind oft kostspieliger als Steinzugfehler.",
          nl: "Dobbelsteen actie verwijst naar alle beslissingen die de verdubbeldob betreffen: wanneer een verdubbeling aanbieden, wanneer een verdubbeling accepteren (nemen), en wanneer een verdubbeling afwijzen (passen/laten vallen). Juiste dobbelsteen actie is cruciaal in backgammon - fouten hier zijn vaak kostbaarder dan schijfspelfouten."
        }
      },
      {
        question: {
          en: "What is a 'joker' in backgammon positions?",
          es: "¿Qué es un 'joker' en posiciones de backgammon?",
          de: "Was ist ein 'Joker' in Backgammon-Positionen?",
          nl: "Wat is een 'joker' in backgammon posities?"
        },
        options: [
          { en: "A lucky roll that dramatically improves a losing position", es: "Un tiro afortunado que mejora dramáticamente una posición perdedora", de: "Ein Glückswurf der eine verlierende Position dramatisch verbessert", nl: "Een geluksworp die een verliezende positie dramatisch verbetert" },
          { en: "A wild card checker", es: "Una ficha comodín", de: "Ein Joker-Stein", nl: "Een wildcard steen" },
          { en: "The doubling cube", es: "El cubo de doblaje", de: "Der Dopplungswürfel", nl: "De verdubbeldob" },
          { en: "A player making funny moves", es: "Un jugador haciendo movimientos graciosos", de: "Ein Spieler der lustige Züge macht", nl: "Een speler die grappige zetten doet" }
        ],
        correct: 0,
        explanation: {
          en: "A joker is a fortunate dice roll (often a double) that can turn around a clearly losing position. When evaluating cube decisions, you should consider if your opponent has jokers available. In volatile positions, wait until opponent has no jokers before doubling.",
          es: "Un joker es un tiro de dados afortunado (a menudo un doble) que puede revertir una posición claramente perdedora. Al evaluar decisiones de cubo, debes considerar si tu oponente tiene jokers disponibles. En posiciones volátiles, espera hasta que el oponente no tenga jokers antes de doblar.",
          de: "Ein Joker ist ein glücklicher Würfelwurf (oft ein Pasch) der eine eindeutig verlierende Position umdrehen kann. Bei der Bewertung von Würfelentscheidungen sollten Sie berücksichtigen ob Ihr Gegner Joker verfügbar hat. In volatilen Positionen warten Sie bis der Gegner keine Joker mehr hat bevor Sie doppeln.",
          nl: "Een joker is een gelukkige dobbelsteenworp (vaak een dubbel) die een duidelijk verliezende positie kan omkeren. Bij het evalueren van dobbelsteenbeslissingen moet je overwegen of je tegenstander jokers beschikbaar heeft. In volatiele posities, wacht tot tegenstander geen jokers meer heeft voordat je verdubbelt."
        }
      },
      {
        question: {
          en: "What is 'pip wastage' in bearing off?",
          es: "¿Qué es 'desperdicio de pips' al sacar fichas?",
          de: "Was ist 'Pip-Verschwendung' beim Auswürfeln?",
          nl: "Wat is 'pip verspilling' bij het uitgooien?"
        },
        options: [
          { en: "Rolling numbers higher than needed to remove checkers - inefficient use of dice", es: "Sacar números más altos de lo necesario para remover fichas - uso ineficiente de dados", de: "Zahlen würfeln die höher sind als zum Entfernen von Steinen nötig - ineffiziente Würfelnutzung", nl: "Nummers gooien hoger dan nodig om stenen te verwijderen - inefficiënt gebruik van dobbelstenen" },
          { en: "Leaving checkers on high points", es: "Dejar fichas en puntos altos", de: "Steine auf hohen Punkten lassen", nl: "Stenen op hoge punten laten" },
          { en: "Having gaps in your home board", es: "Tener huecos en tu tablero interior", de: "Lücken in Ihrem Home Board haben", nl: "Gaten hebben in je thuisbord" },
          { en: "Moving checkers backwards", es: "Mover fichas hacia atrás", de: "Steine rückwärts bewegen", nl: "Stenen achteruit bewegen" }
        ],
        correct: 0,
        explanation: {
          en: "Pip wastage occurs when you roll numbers larger than needed during bearoff. For example, if you only have checkers on the 1-point and roll a 6, you waste 5 pips. Minimizing wastage through smooth distribution (avoiding gaps and stacks) makes bearoff more efficient.",
          es: "El desperdicio de pips ocurre cuando sacas números más grandes de lo necesario durante el bearoff. Por ejemplo, si solo tienes fichas en el punto 1 y sacas un 6, desperdicias 5 pips. Minimizar el desperdicio a través de una distribución suave (evitando huecos y pilas) hace que el bearoff sea más eficiente.",
          de: "Pip-Verschwendung tritt auf wenn Sie beim Auswürfeln größere Zahlen würfeln als benötigt. Zum Beispiel wenn Sie nur Steine auf dem 1-Punkt haben und eine 6 würfeln, verschwenden Sie 5 Pips. Verschwendung durch glatte Verteilung (Vermeidung von Lücken und Stacks) zu minimieren macht das Auswürfeln effizienter.",
          nl: "Pip verspilling vindt plaats wanneer je tijdens het uitgooien nummers gooit die groter zijn dan nodig. Bijvoorbeeld, als je alleen stenen op het 1-punt hebt en een 6 gooit, verspil je 5 pips. Verspilling minimaliseren door soepele verdeling (gaten en stapels vermijden) maakt uitgooien efficiënter."
        }
      },
      {
        question: {
          en: "What is a 'holding game' strategy?",
          es: "¿Qué es una estrategia de 'holding game'?",
          de: "Was ist eine 'Holding Game'-Strategie?",
          nl: "Wat is een 'holding game' strategie?"
        },
        options: [
          { en: "Maintaining a single advanced anchor while opponent bears off, waiting for a shot", es: "Mantener un solo ancla avanzada mientras el oponente saca fichas, esperando un tiro", de: "Einen einzelnen fortgeschrittenen Anker halten während Gegner auswürfelt und auf einen Treffer warten", nl: "Een enkel gevorderd anker behouden terwijl tegenstander uitgooit, wachtend op een kans" },
          { en: "Holding all your checkers in place", es: "Mantener todas tus fichas en su lugar", de: "Alle Ihre Steine an Ort und Stelle halten", nl: "Al je stenen op hun plaats houden" },
          { en: "Maintaining cube ownership", es: "Mantener la propiedad del cubo", de: "Würfelbesitz behalten", nl: "Dobbelsteenbezit behouden" },
          { en: "Holding back from doubling", es: "Abstenerse de doblar", de: "Vom Doppeln zurückhalten", nl: "Terughouden van verdubbelen" }
        ],
        correct: 0,
        explanation: {
          en: "A holding game involves keeping a strong anchor (usually the 4-point, 5-point, or bar-point) in your opponent's board while they try to bear off. You wait for them to leave a shot, then hit and try to win. The key is timing - having enough checkers outside to maintain the anchor long enough.",
          es: "Un holding game implica mantener un ancla fuerte (usualmente el punto 4, punto 5 o punto de barra) en el tablero de tu oponente mientras intentan sacar fichas. Esperas a que dejen un tiro, luego golpeas e intentas ganar. La clave es el timing - tener suficientes fichas afuera para mantener el ancla el tiempo suficiente.",
          de: "Ein Holding Game beinhaltet einen starken Anker (normalerweise den 4-Punkt, 5-Punkt oder Bar-Punkt) im Brett Ihres Gegners zu halten während sie versuchen auszuwürfeln. Sie warten darauf dass sie einen Shot hinterlassen, dann schlagen und versuchen zu gewinnen. Der Schlüssel ist Timing - genug Steine außerhalb zu haben um den Anker lange genug zu halten.",
          nl: "Een holding game houdt in dat je een sterk anker (meestal het 4-punt, 5-punt of bar-punt) in het bord van je tegenstander behoudt terwijl ze proberen uit te gooien. Je wacht tot ze een kans achterlaten, dan sla je en probeer je te winnen. De sleutel is timing - genoeg stenen buiten hebben om het anker lang genoeg te behouden."
        }
      },
      {
        question: {
          en: "What is the '8-9-12' rule for bearing off against contact?",
          es: "¿Qué es la regla '8-9-12' para sacar fichas contra contacto?",
          de: "Was ist die '8-9-12'-Regel für das Auswürfeln gegen Kontakt?",
          nl: "Wat is de '8-9-12' regel voor uitgooien tegen contact?"
        },
        options: [
          { en: "Can take more risks leaving shots if opponent needs 8+ rolls to clear (9+ for blitz, 12+ for back game)", es: "Puedes tomar más riesgos dejando tiros si el oponente necesita 8+ tiros para despejar (9+ para blitz, 12+ para back game)", de: "Kann mehr Risiken eingehen Shots zu lassen wenn Gegner 8+ Würfe zum Räumen braucht (9+ für Blitz, 12+ für Back Game)", nl: "Kan meer risico's nemen door shots achter te laten als tegenstander 8+ worpen nodig heeft om te klaren (9+ voor blitz, 12+ voor back game)" },
          { en: "Optimal pip count for different points", es: "Conteo de pips óptimo para diferentes puntos", de: "Optimale Pip-Zählung für verschiedene Punkte", nl: "Optimale pip count voor verschillende punten" },
          { en: "Number of checkers needed on each point", es: "Número de fichas necesarias en cada punto", de: "Anzahl der benötigten Steine auf jedem Punkt", nl: "Aantal stenen nodig op elk punt" },
          { en: "Doubling thresholds at different scores", es: "Umbrales de doblaje en diferentes puntuaciones", de: "Dopplungs-Schwellen bei verschiedenen Punkteständen", nl: "Verdubbel drempels bij verschillende scores" }
        ],
        correct: 0,
        explanation: {
          en: "The 8-9-12 rule guides when you can safely leave shots during bearoff. If your opponent needs 8+ rolls to bear off all checkers, you can leave indirect shots. 9+ rolls allows leaving some direct shots. 12+ rolls (rare) means you can be quite loose. Even if hit, you'll likely have time to re-enter and win.",
          es: "La regla 8-9-12 guía cuándo puedes dejar tiros de forma segura durante el bearoff. Si tu oponente necesita 8+ tiros para sacar todas las fichas, puedes dejar tiros indirectos. 9+ tiros permite dejar algunos tiros directos. 12+ tiros (raro) significa que puedes ser bastante suelto. Incluso si te golpean, probablemente tendrás tiempo para reingresar y ganar.",
          de: "Die 8-9-12-Regel leitet an wann Sie während des Auswürfelns sicher Shots lassen können. Wenn Ihr Gegner 8+ Würfe braucht um alle Steine auszuwürfeln, können Sie indirekte Shots lassen. 9+ Würfe erlauben einige direkte Shots zu lassen. 12+ Würfe (selten) bedeutet Sie können ziemlich locker sein. Selbst wenn geschlagen, werden Sie wahrscheinlich Zeit haben wieder einzutreten und zu gewinnen.",
          nl: "De 8-9-12 regel geeft aan wanneer je veilig shots kunt achterlaten tijdens het uitgooien. Als je tegenstander 8+ worpen nodig heeft om alle stenen uit te gooien, kun je indirecte shots achterlaten. 9+ worpen staat enkele directe shots toe. 12+ worpen (zeldzaam) betekent dat je vrij los kunt zijn. Zelfs als je geslagen wordt, heb je waarschijnlijk tijd om weer binnen te komen en te winnen."
        }
      },
      {
        question: {
          en: "What is 'Neil's number' (or EMG - Effective Match Game) in tournament backgammon?",
          es: "¿Qué es el 'número de Neil' (o EMG - Effective Match Game) en backgammon de torneo?",
          de: "Was ist 'Neils Zahl' (oder EMG - Effective Match Game) im Turnier-Backgammon?",
          nl: "Wat is 'Neil's nummer' (of EMG - Effective Match Game) in toernooi backgammon?"
        },
        options: [
          { en: "Formula converting match score to equivalent money game equity for cube decisions", es: "Fórmula que convierte el marcador del partido a equidad equivalente de juego de dinero para decisiones de cubo", de: "Formel die Match-Punktestand in äquivalente Geldspiel-Equity für Würfelentscheidungen umwandelt", nl: "Formule die wedstrijdscore omzet naar equivalent geldspel equity voor dobbelsteenbeslissingen" },
          { en: "Player rating system", es: "Sistema de calificación de jugadores", de: "Spielerbewertungssystem", nl: "Speler ratingsysteem" },
          { en: "Pip count calculation method", es: "Método de cálculo de conteo de pips", de: "Pip-Count-Berechnungsmethode", nl: "Pip count berekeningsmethode" },
          { en: "Probability of winning formula", es: "Fórmula de probabilidad de ganar", de: "Gewinnwahrscheinlichkeitsformel", nl: "Kans op winnen formule" }
        ],
        correct: 0,
        explanation: {
          en: "Neil's number (EMG) is a formula that converts match scores into equivalent money game values. This helps approximate correct cube decisions at various match scores by treating them as money games with adjusted stakes. It's particularly useful for understanding how match score affects doubling thresholds.",
          es: "El número de Neil (EMG) es una fórmula que convierte marcadores de partido en valores equivalentes de juego de dinero. Esto ayuda a aproximar decisiones correctas de cubo en varios marcadores de partido tratándolos como juegos de dinero con apuestas ajustadas. Es particularmente útil para entender cómo el marcador del partido afecta los umbrales de doblaje.",
          de: "Neils Zahl (EMG) ist eine Formel die Match-Punktestände in äquivalente Geldspielwerte umwandelt. Dies hilft korrekte Würfelentscheidungen bei verschiedenen Match-Punkteständen zu approximieren indem sie als Geldspiele mit angepassten Einsätzen behandelt werden. Es ist besonders nützlich um zu verstehen wie Match-Punktestand Dopplungs-Schwellen beeinflusst.",
          nl: "Neil's nummer (EMG) is een formule die wedstrijdscores omzet in equivalente geldspelwaarden. Dit helpt correcte dobbelsteenbeslissingen bij verschillende wedstrijdscores te benaderen door ze te behandelen als geldspellen met aangepaste inzetten. Het is bijzonder nuttig voor het begrijpen hoe wedstrijdscore verdubbel drempels beïnvloedt."
        }
      },
      {
        question: {
          en: "What is 'cube ownership' and why is it valuable?",
          es: "¿Qué es la 'propiedad del cubo' y por qué es valiosa?",
          de: "Was ist 'Würfelbesitz' und warum ist er wertvoll?",
          nl: "Wat is 'dobbelsteenbezit' en waarom is het waardevol?"
        },
        options: [
          { en: "Having control of when to redouble - provides leverage and flexibility", es: "Tener control de cuándo redoblar - proporciona ventaja y flexibilidad", de: "Kontrolle darüber haben wann erneut gedoppelt wird - bietet Hebelwirkung und Flexibilität", nl: "Controle hebben over wanneer te herverdubbelen - biedt invloed en flexibiliteit" },
          { en: "Owning a physical doubling cube", es: "Poseer un cubo de doblaje físico", de: "Einen physischen Dopplungswürfel besitzen", nl: "Een fysieke verdubbeldob bezitten" },
          { en: "Being ahead in pip count", es: "Ir adelante en el conteo de pips", de: "Beim Pip-Count vorne liegen", nl: "Voor liggen in pip count" },
          { en: "Controlling the center points", es: "Controlar los puntos centrales", de: "Die mittleren Punkte kontrollieren", nl: "De middenpunten controleren" }
        ],
        correct: 0,
        explanation: {
          en: "Cube ownership means you control the doubling cube - only you can redouble. This is valuable because you can redouble when the position swings in your favor, while your opponent cannot cube you. This leverage makes some marginal takes correct, and affects when you should double or wait.",
          es: "Propiedad del cubo significa que controlas el cubo de doblaje - solo tú puedes redoblar. Esto es valioso porque puedes redoblar cuando la posición se vuelve a tu favor, mientras que tu oponente no puede doblarte. Esta ventaja hace que algunas aceptaciones marginales sean correctas, y afecta cuándo debes doblar o esperar.",
          de: "Würfelbesitz bedeutet Sie kontrollieren den Dopplungswürfel - nur Sie können erneut doppeln. Dies ist wertvoll weil Sie erneut doppeln können wenn die Position sich zu Ihren Gunsten wendet, während Ihr Gegner Sie nicht doppeln kann. Diese Hebelwirkung macht einige marginale Annahmen korrekt und beeinflusst wann Sie doppeln oder warten sollten.",
          nl: "Dobbelsteenbezit betekent dat je de verdubbeldob controleert - alleen jij kunt herverdubbelen. Dit is waardevol omdat je kunt herverdubbelen wanneer de positie in jouw voordeel draait, terwijl je tegenstander jou niet kan verdubbelen. Deze invloed maakt sommige marginale acceptaties correct, en beïnvloedt wanneer je moet verdubbelen of wachten."
        }
      },
      {
        question: {
          en: "What is a 'raccoon' in backgammon cube play?",
          es: "¿Qué es un 'raccoon' en el juego de cubo de backgammon?",
          de: "Was ist ein 'Raccoon' im Backgammon-Würfelspiel?",
          nl: "Wat is een 'raccoon' in backgammon dobbelsspel?"
        },
        options: [
          { en: "Accepting a beaver and immediately redoubling again while keeping cube", es: "Aceptar un beaver e inmediatamente redoblar de nuevo mientras se mantiene el cubo", de: "Einen Beaver annehmen und sofort erneut doppeln während man den Würfel behält", nl: "Een beaver accepteren en onmiddellijk opnieuw verdubbelen terwijl je de dobbel behoudt" },
          { en: "A trapping strategy", es: "Una estrategia de trampa", de: "Eine Fallenstrategie", nl: "Een valstrategie" },
          { en: "Refusing to accept a double", es: "Negarse a aceptar un doble", de: "Ein Doppeln abzulehnen", nl: "Weigeren een verdubbeling te accepteren" },
          { en: "A specific dice combination", es: "Una combinación específica de dados", de: "Eine spezifische Würfelkombination", nl: "Een specifieke dobbelsteencombinatie" }
        ],
        correct: 0,
        explanation: {
          en: "A raccoon is an extension of the beaver concept: when your opponent beavers (accepts your double and redoubles while keeping the cube), you can raccoon by accepting their beaver and immediately redoubling again while still retaining cube ownership. This is extremely rare and only allowed in some money games by mutual agreement.",
          es: "Un raccoon es una extensión del concepto de beaver: cuando tu oponente hace beaver (acepta tu doble y redobla mientras mantiene el cubo), puedes hacer raccoon aceptando su beaver e inmediatamente redoblando de nuevo mientras aún retienes la propiedad del cubo. Esto es extremadamente raro y solo se permite en algunos juegos de dinero por acuerdo mutuo.",
          de: "Ein Raccoon ist eine Erweiterung des Beaver-Konzepts: wenn Ihr Gegner beavert (Ihr Doppeln annimmt und erneut doppelt während er den Würfel behält), können Sie raccoonen indem Sie ihren Beaver annehmen und sofort erneut doppeln während Sie den Würfelbesitz behalten. Dies ist extrem selten und nur in einigen Geldspielen durch gegenseitige Vereinbarung erlaubt.",
          nl: "Een raccoon is een uitbreiding van het beaver concept: wanneer je tegenstander beavert (je verdubbeling accepteert en herverdubbelt terwijl hij de dobbel behoudt), kun je raccoonen door hun beaver te accepteren en onmiddellijk opnieuw te verdubbelen terwijl je nog steeds het dobbelsbezit behoudt. Dit is extreem zeldzaam en alleen toegestaan in sommige geldspellen bij wederzijdse overeenkomst."
        }
      },
      {
        question: {
          en: "What is a 'blot' in backgammon?",
          es: "¿Qué es un 'blot' en backgammon?",
          de: "Was ist ein 'Blot' im Backgammon?",
          nl: "Wat is een 'blot' in backgammon?"
        },
        options: [
          { en: "A single unprotected checker vulnerable to being hit", es: "Una sola ficha desprotegida vulnerable a ser golpeada", de: "Ein einzelner ungeschützter Stein der geschlagen werden kann", nl: "Een enkele onbeschermde steen die kwetsbaar is om geslagen te worden" },
          { en: "A mistake in play", es: "Un error en el juego", de: "Ein Fehler im Spiel", nl: "Een fout in het spel" },
          { en: "A blocked point", es: "Un punto bloqueado", de: "Ein blockierter Punkt", nl: "Een geblokkeerd punt" },
          { en: "An error mark on the score sheet", es: "Una marca de error en la hoja de puntuación", de: "Eine Fehlermarkierung auf dem Punkteblatt", nl: "Een foutmarkering op het scorebord" }
        ],
        correct: 0,
        explanation: {
          en: "A blot is a single checker sitting alone on a point, making it vulnerable to being hit by your opponent. While sometimes necessary or strategically desirable (like slotting), blots are generally a weakness that your opponent can exploit. Protecting blots by making points is a key strategic goal.",
          es: "Un blot es una sola ficha sentada sola en un punto, haciéndola vulnerable a ser golpeada por tu oponente. Aunque a veces es necesario o estratégicamente deseable (como hacer slot), los blots son generalmente una debilidad que tu oponente puede explotar. Proteger blots haciendo puntos es un objetivo estratégico clave.",
          de: "Ein Blot ist ein einzelner Stein der allein auf einem Punkt sitzt und ihn verwundbar macht von Ihrem Gegner geschlagen zu werden. Obwohl manchmal notwendig oder strategisch wünschenswert (wie Slotten), sind Blots generell eine Schwäche die Ihr Gegner ausnutzen kann. Blots zu schützen indem Punkte gemacht werden ist ein wichtiges strategisches Ziel.",
          nl: "Een blot is een enkele steen die alleen op een punt zit, waardoor hij kwetsbaar is om door je tegenstander geslagen te worden. Hoewel soms noodzakelijk of strategisch wenselijk (zoals slotten), zijn blots over het algemeen een zwakte die je tegenstander kan uitbuiten. Blots beschermen door punten te maken is een belangrijk strategisch doel."
        }
      },
      {
        question: {
          en: "What is 'slotting the 5-point' and when is it typically done?",
          es: "¿Qué es 'hacer slot en el punto 5' y cuándo se hace típicamente?",
          de: "Was ist 'den 5-Punkt slotten' und wann wird es typischerweise gemacht?",
          nl: "Wat is 'het 5-punt slotten' en wanneer wordt het typisch gedaan?"
        },
        options: [
          { en: "Placing a blot on your 5-point early in the game, hoping to make it next turn", es: "Colocar un blot en tu punto 5 temprano en el juego, esperando hacerlo en el próximo turno", de: "Einen Blot früh im Spiel auf Ihren 5-Punkt platzieren in der Hoffnung ihn im nächsten Zug zu machen", nl: "Een blot op je 5-punt plaatsen vroeg in het spel, hopend het te maken bij de volgende beurt" },
          { en: "Making your 5-point with two checkers", es: "Hacer tu punto 5 con dos fichas", de: "Ihren 5-Punkt mit zwei Steinen machen", nl: "Je 5-punt maken met twee stenen" },
          { en: "Blocking opponent's 5-point", es: "Bloquear el punto 5 del oponente", de: "Den 5-Punkt des Gegners blockieren", nl: "Het 5-punt van de tegenstander blokkeren" },
          { en: "Moving five checkers at once", es: "Mover cinco fichas a la vez", de: "Fünf Steine auf einmal bewegen", nl: "Vijf stenen tegelijk bewegen" }
        ],
        correct: 0,
        explanation: {
          en: "Slotting the 5-point means deliberately leaving a single checker (blot) on your 5-point, usually on your second or third turn. The 5-point is the most valuable point in your home board, so slotting it gains tempo if successful. Modern opening theory often favors slotting the 5-point over safer plays.",
          es: "Hacer slot en el punto 5 significa dejar deliberadamente una sola ficha (blot) en tu punto 5, usualmente en tu segundo o tercer turno. El punto 5 es el punto más valioso en tu tablero interior, por lo que hacer slot gana tempo si tiene éxito. La teoría moderna de apertura a menudo favorece hacer slot en el punto 5 sobre jugadas más seguras.",
          de: "Den 5-Punkt slotten bedeutet absichtlich einen einzelnen Stein (Blot) auf Ihrem 5-Punkt zu lassen, normalerweise bei Ihrem zweiten oder dritten Zug. Der 5-Punkt ist der wertvollste Punkt in Ihrem Home Board, daher gewinnt das Slotten Tempo wenn erfolgreich. Moderne Eröffnungstheorie bevorzugt oft das Slotten des 5-Punkts gegenüber sichereren Spielzügen.",
          nl: "Het 5-punt slotten betekent opzettelijk een enkele steen (blot) op je 5-punt achterlaten, meestal bij je tweede of derde beurt. Het 5-punt is het meest waardevolle punt in je thuisbord, dus slotten wint tempo als het lukt. Moderne openingstheorie geeft vaak de voorkeur aan het slotten van het 5-punt boven veiligere zetten."
        }
      },
      {
        question: {
          en: "What is the purpose of 'priming' in backgammon?",
          es: "¿Cuál es el propósito del 'priming' en backgammon?",
          de: "Was ist der Zweck des 'Priming' im Backgammon?",
          nl: "Wat is het doel van 'priming' in backgammon?"
        },
        options: [
          { en: "Making consecutive points to block opponent's back checkers from escaping", es: "Hacer puntos consecutivos para bloquear que las fichas traseras del oponente escapen", de: "Aufeinanderfolgende Punkte machen um gegnerische hintere Steine am Entkommen zu hindern", nl: "Opeenvolgende punten maken om achterste stenen van tegenstander te blokkeren van ontsnappen" },
          { en: "Preparing the board at game start", es: "Preparar el tablero al inicio del juego", de: "Das Brett beim Spielstart vorbereiten", nl: "Het bord voorbereiden bij spelstart" },
          { en: "Making your first point", es: "Hacer tu primer punto", de: "Ihren ersten Punkt machen", nl: "Je eerste punt maken" },
          { en: "Getting ready to double", es: "Prepararse para doblar", de: "Sich auf das Doppeln vorbereiten", nl: "Je voorbereiden om te verdubbelen" }
        ],
        correct: 0,
        explanation: {
          en: "Priming means building consecutive made points (usually 4, 5, or 6 in a row) to trap your opponent's back checkers. A 6-point prime is impenetrable - opponent cannot leap over it with any single roll. Primes are a powerful attacking strategy that can lead to gammons if successful.",
          es: "Priming significa construir puntos hechos consecutivos (usualmente 4, 5 o 6 seguidos) para atrapar las fichas traseras de tu oponente. Un prime de 6 puntos es impenetrable - el oponente no puede saltarlo con ningún tiro individual. Los primes son una estrategia de ataque poderosa que puede llevar a gammons si tiene éxito.",
          de: "Priming bedeutet aufeinanderfolgende gemachte Punkte zu bauen (normalerweise 4, 5 oder 6 in einer Reihe) um die hinteren Steine Ihres Gegners einzusperren. Ein 6-Punkt-Prime ist undurchdringlich - der Gegner kann ihn mit keinem einzelnen Wurf überspringen. Primes sind eine mächtige Angriffsstrategie die zu Gammons führen kann wenn erfolgreich.",
          nl: "Priming betekent opeenvolgende gemaakte punten bouwen (meestal 4, 5 of 6 op een rij) om de achterste stenen van je tegenstander vast te zetten. Een 6-punts prime is ondoordringbaar - tegenstander kan er niet overheen springen met een enkele worp. Primes zijn een krachtige aanvalsstrategie die kan leiden tot gammons als het lukt."
        }
      }
    ]
  };

  // Export for use in the quiz application
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level9;
  } else if (typeof window !== 'undefined') {
    window.level9 = level9;
  }
})();
    ]
  };

  // Export for use in the quiz application
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level9;
  } else if (typeof window !== 'undefined') {
    window.level9 = level9;
  }
})();
