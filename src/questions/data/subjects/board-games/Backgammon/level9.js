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
