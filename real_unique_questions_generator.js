const fs = require('fs');
const path = require('path');

// Comprehensive question banks for each category
const questionBanks = {
  chess: [
    // Board Setup & Pieces (10)
    { en: "How many squares are on a chess board?", es: "¿Cuántos cuadrados hay en un tablero de ajedrez?", de: "Wie viele Felder hat ein Schachbrett?", nl: "Hoeveel vakjes heeft een schaakbord?", answers: ["64", "32", "48", "56"], correct: 0 },
    { en: "What color does White's king start on?", es: "¿En qué color comienza el rey blanco?", de: "Auf welcher Farbe beginnt der weiße König?", nl: "Op welke kleur begint de witte koning?", answers: ["Dark square", "Light square", "Any square", "Center"], correct: 0 },
    { en: "How many pawns does each player start with?", es: "¿Con cuántos peones comienza cada jugador?", de: "Mit wie vielen Bauern beginnt jeder Spieler?", nl: "Met hoeveel pionnen begint elke speler?", answers: ["8", "6", "10", "12"], correct: 0 },
    { en: "Which piece is placed on the corners of the board?", es: "¿Qué pieza se coloca en las esquinas del tablero?", de: "Welche Figur wird in die Ecken des Bretts gestellt?", nl: "Welk stuk wordt in de hoeken van het bord geplaatst?", answers: ["Rook", "Knight", "Bishop", "Queen"], correct: 0 },
    { en: "How many knights does each player have?", es: "¿Cuántos caballos tiene cada jugador?", de: "Wie viele Springer hat jeder Spieler?", nl: "Hoeveel paarden heeft elke speler?", answers: ["2", "3", "4", "1"], correct: 0 },
    { en: "What piece stands next to the king at the start?", es: "¿Qué pieza está al lado del rey al principio?", de: "Welche Figur steht am Anfang neben dem König?", nl: "Welk stuk staat aan het begin naast de koning?", answers: ["Queen", "Bishop", "Knight", "Rook"], correct: 1 },
    { en: "How many bishops does each side have?", es: "¿Cuántos alfiles tiene cada lado?", de: "Wie viele Läufer hat jede Seite?", nl: "Hoeveel lopers heeft elke kant?", answers: ["2", "3", "4", "1"], correct: 0 },
    { en: "Which file does the queen start on for White?", es: "¿En qué columna comienza la reina blanca?", de: "Auf welcher Linie beginnt die weiße Dame?", nl: "Op welke kolom begint de witte dame?", answers: ["d-file", "e-file", "c-file", "f-file"], correct: 0 },
    { en: "What is the back rank called?", es: "¿Cómo se llama la fila trasera?", de: "Wie heißt die Grundreihe?", nl: "Hoe heet de achterste rij?", answers: ["First rank", "Home rank", "Back rank", "Base rank"], correct: 2 },
    { en: "How many pieces does each player start with?", es: "¿Con cuántas piezas comienza cada jugador?", de: "Mit wie vielen Figuren beginnt jeder Spieler?", nl: "Met hoeveel stukken begint elke speler?", answers: ["16", "12", "20", "18"], correct: 0 },

    // Piece Movement (15)
    { en: "How does a rook move?", es: "¿Cómo se mueve la torre?", de: "Wie bewegt sich der Turm?", nl: "Hoe beweegt de toren?", answers: ["Straight lines", "Diagonally", "L-shape", "One square"], correct: 0 },
    { en: "What is the knight's movement pattern?", es: "¿Cuál es el patrón de movimiento del caballo?", de: "Was ist das Bewegungsmuster des Springers?", nl: "Wat is het bewegingspatroon van het paard?", answers: ["L-shape", "Diagonal", "Straight", "Circle"], correct: 0 },
    { en: "How does a bishop move?", es: "¿Cómo se mueve el alfil?", de: "Wie bewegt sich der Läufer?", nl: "Hoe beweegt de loper?", answers: ["Diagonally", "Straight", "L-shape", "One square"], correct: 0 },
    { en: "How many squares can a king move?", es: "¿Cuántos cuadrados puede mover el rey?", de: "Wie viele Felder kann der König ziehen?", nl: "Hoeveel vakjes kan de koning bewegen?", answers: ["One", "Two", "Three", "Any"], correct: 0 },
    { en: "What piece can jump over others?", es: "¿Qué pieza puede saltar sobre otras?", de: "Welche Figur kann über andere springen?", nl: "Welk stuk kan over anderen heen springen?", answers: ["Knight", "Bishop", "Rook", "Queen"], correct: 0 },
    { en: "How does the queen move?", es: "¿Cómo se mueve la reina?", de: "Wie bewegt sich die Dame?", nl: "Hoe beweegt de dame?", answers: ["Any direction", "Diagonal only", "Straight only", "L-shape"], correct: 0 },
    { en: "How many squares forward can a pawn move on its first turn?", es: "¿Cuántos cuadrados puede avanzar un peón en su primer turno?", de: "Wie viele Felder kann ein Bauer im ersten Zug ziehen?", nl: "Hoeveel vakjes kan een pion bij zijn eerste zet vooruit?", answers: ["1 or 2", "1 only", "2 only", "3"], correct: 0 },
    { en: "How does a pawn capture?", es: "¿Cómo captura un peón?", de: "Wie schlägt ein Bauer?", nl: "Hoe slaat een pion?", answers: ["Diagonally forward", "Straight forward", "Sideways", "Backward"], correct: 0 },
    { en: "Can a bishop change square colors?", es: "¿Puede un alfil cambiar de color de cuadrado?", de: "Kann ein Läufer die Feldfarbe wechseln?", nl: "Kan een loper van kleur veranderen?", answers: ["No", "Yes", "Sometimes", "Only when capturing"], correct: 0 },
    { en: "How many squares can a knight move in total?", es: "¿Cuántos cuadrados puede mover un caballo en total?", de: "Wie viele Felder kann ein Springer insgesamt ziehen?", nl: "Hoeveel vakjes kan een paard in totaal bewegen?", answers: ["3", "2", "4", "5"], correct: 0 },
    { en: "Can a king capture pieces?", es: "¿Puede el rey capturar piezas?", de: "Kann der König Figuren schlagen?", nl: "Kan de koning stukken slaan?", answers: ["Yes", "No", "Only pawns", "Only bishops"], correct: 0 },
    { en: "What is the maximum number of squares a queen can control?", es: "¿Cuál es el número máximo de cuadrados que una reina puede controlar?", de: "Wie viele Felder kann eine Dame maximal kontrollieren?", nl: "Wat is het maximale aantal vakjes dat een dame kan controleren?", answers: ["27", "20", "24", "30"], correct: 0 },
    { en: "Can a pawn move backward?", es: "¿Puede un peón moverse hacia atrás?", de: "Kann ein Bauer rückwärts ziehen?", nl: "Kan een pion achteruit bewegen?", answers: ["No", "Yes", "Only when capturing", "Only on first move"], correct: 0 },
    { en: "How many directions can a rook move?", es: "¿En cuántas direcciones puede moverse una torre?", de: "In wie viele Richtungen kann sich ein Turm bewegen?", nl: "In hoeveel richtingen kan een toren bewegen?", answers: ["4", "2", "6", "8"], correct: 0 },
    { en: "What piece has the most flexibility in movement?", es: "¿Qué pieza tiene más flexibilidad en el movimiento?", de: "Welche Figur hat die meiste Bewegungsflexibilität?", nl: "Welk stuk heeft de meeste bewegingsvrijheid?", answers: ["Queen", "King", "Knight", "Rook"], correct: 0 },

    // Special Moves (15)
    { en: "What is castling?", es: "¿Qué es el enroque?", de: "Was ist Rochade?", nl: "Wat is rokade?", answers: ["King and rook move together", "Pawn promotion", "Knight jump", "Queen swap"], correct: 0 },
    { en: "How many types of castling are there?", es: "¿Cuántos tipos de enroque hay?", de: "Wie viele Arten von Rochade gibt es?", nl: "Hoeveel soorten rokade zijn er?", answers: ["2", "1", "3", "4"], correct: 0 },
    { en: "What is en passant?", es: "¿Qué es el en passant?", de: "Was ist en passant?", nl: "Wat is en passant?", answers: ["Special pawn capture", "Castle move", "King escape", "Queen trade"], correct: 0 },
    { en: "What happens when a pawn reaches the 8th rank?", es: "¿Qué sucede cuando un peón llega a la octava fila?", de: "Was passiert, wenn ein Bauer die achte Reihe erreicht?", nl: "Wat gebeurt er als een pion de 8e rij bereikt?", answers: ["Promotion", "Removed", "Stays", "Goes back"], correct: 0 },
    { en: "Can you castle if your king is in check?", es: "¿Puedes enrocar si tu rey está en jaque?", de: "Kann man rochieren, wenn der König im Schach steht?", nl: "Kun je rokeren als je koning schaak staat?", answers: ["No", "Yes", "Sometimes", "Only queenside"], correct: 0 },
    { en: "What is kingside castling notation?", es: "¿Cuál es la notación del enroque corto?", de: "Was ist die Notation für kurze Rochade?", nl: "Wat is de notatie voor korte rokade?", answers: ["O-O", "O-O-O", "K-R", "0-0-0"], correct: 0 },
    { en: "What is queenside castling notation?", es: "¿Cuál es la notación del enroque largo?", de: "Was ist die Notation für lange Rochade?", nl: "Wat is de notatie voor lange rokade?", answers: ["O-O-O", "O-O", "Q-R", "0-0"], correct: 0 },
    { en: "Can you castle through check?", es: "¿Puedes enrocar a través del jaque?", de: "Kann man durch Schach rochieren?", nl: "Kun je door schaak rokeren?", answers: ["No", "Yes", "Sometimes", "Only kingside"], correct: 0 },
    { en: "What piece can a pawn NOT promote to?", es: "¿A qué pieza NO puede promocionar un peón?", de: "Zu welcher Figur kann ein Bauer NICHT umgewandelt werden?", nl: "Tot welk stuk kan een pion NIET promoveren?", answers: ["King", "Queen", "Rook", "Knight"], correct: 0 },
    { en: "When is en passant possible?", es: "¿Cuándo es posible el en passant?", de: "Wann ist en passant möglich?", nl: "Wanneer is en passant mogelijk?", answers: ["Pawn moves 2 squares", "King castles", "Queen moves", "Rook attacks"], correct: 0 },
    { en: "Can you castle if the rook has moved?", es: "¿Puedes enrocar si la torre se ha movido?", de: "Kann man rochieren, wenn der Turm gezogen hat?", nl: "Kun je rokeren als de toren heeft bewogen?", answers: ["No", "Yes", "Sometimes", "Only once"], correct: 0 },
    { en: "How many squares does the king move when castling?", es: "¿Cuántos cuadrados mueve el rey al enrocar?", de: "Wie viele Felder zieht der König bei der Rochade?", nl: "Hoeveel vakjes beweegt de koning bij het rokeren?", answers: ["2", "1", "3", "4"], correct: 0 },
    { en: "What is underpromotion?", es: "¿Qué es la subpromoción?", de: "Was ist Unterverwandlung?", nl: "Wat is onderpromotie?", answers: ["Promoting to piece other than queen", "Not promoting", "Promoting backward", "Double promotion"], correct: 0 },
    { en: "Can you en passant on any turn?", es: "¿Puedes hacer en passant en cualquier turno?", de: "Kann man en passant in jedem Zug machen?", nl: "Kun je op elke beurt en passant doen?", answers: ["Only immediately after", "Anytime", "Within 3 moves", "Never"], correct: 0 },
    { en: "Which pieces must not have moved for castling?", es: "¿Qué piezas no deben haberse movido para enrocar?", de: "Welche Figuren dürfen für die Rochade nicht gezogen haben?", nl: "Welke stukken mogen niet hebben bewogen om te rokeren?", answers: ["King and rook", "All pieces", "Only king", "Only rook"], correct: 0 },

    // Opening Principles (10)
    { en: "What is the main goal in the opening?", es: "¿Cuál es el objetivo principal en la apertura?", de: "Was ist das Hauptziel in der Eröffnung?", nl: "Wat is het hoofddoel in de opening?", answers: ["Control center", "Attack king", "Trade pieces", "Defend pawns"], correct: 0 },
    { en: "How many central squares are there?", es: "¿Cuántos cuadrados centrales hay?", de: "Wie viele Zentralfelder gibt es?", nl: "Hoeveel centrale vakjes zijn er?", answers: ["4", "2", "6", "8"], correct: 0 },
    { en: "What is development in chess?", es: "¿Qué es el desarrollo en ajedrez?", de: "Was ist Entwicklung im Schach?", nl: "Wat is ontwikkeling in schaak?", answers: ["Moving pieces out", "Defending king", "Trading pawns", "Attacking queen"], correct: 0 },
    { en: "Should you move the same piece twice in opening?", es: "¿Deberías mover la misma pieza dos veces en la apertura?", de: "Sollte man in der Eröffnung dieselbe Figur zweimal ziehen?", nl: "Moet je hetzelfde stuk twee keer bewegen in de opening?", answers: ["Generally no", "Always yes", "Always no", "Only knights"], correct: 0 },
    { en: "What is the Italian Game opening move?", es: "¿Cuál es el movimiento de apertura del Giuoco Piano?", de: "Was ist der Eröffnungszug des Italienischen Spiels?", nl: "Wat is de openingszet van het Italiaans Spel?", answers: ["1.e4 e5 2.Nf3 Nc6 3.Bc4", "1.d4", "1.c4", "1.Nf3"], correct: 0 },
    { en: "Why is castling important in opening?", es: "¿Por qué es importante el enroque en la apertura?", de: "Warum ist die Rochade in der Eröffnung wichtig?", nl: "Waarom is rokeren belangrijk in de opening?", answers: ["King safety", "Attack", "Pawn structure", "Queen development"], correct: 0 },
    { en: "What is a gambit?", es: "¿Qué es un gambito?", de: "Was ist ein Gambit?", nl: "Wat is een gambiet?", answers: ["Sacrificing material for advantage", "Defensive opening", "Equal trade", "Endgame technique"], correct: 0 },
    { en: "Should you bring your queen out early?", es: "¿Deberías sacar tu reina temprano?", de: "Sollte man die Dame früh herausziehen?", nl: "Moet je je dame vroeg naar buiten brengen?", answers: ["Usually no", "Always yes", "Always no", "Only in gambit"], correct: 0 },
    { en: "What is the Ruy Lopez opening?", es: "¿Qué es la apertura Ruy López?", de: "Was ist die Spanische Eröffnung?", nl: "Wat is de Spaanse opening?", answers: ["1.e4 e5 2.Nf3 Nc6 3.Bb5", "1.d4 d5", "1.c4", "1.e4 c5"], correct: 0 },
    { en: "What is the Sicilian Defense?", es: "¿Qué es la Defensa Siciliana?", de: "Was ist die Sizilianische Verteidigung?", nl: "Wat is het Siciliaans Verdediging?", answers: ["1.e4 c5", "1.e4 e5", "1.d4 d5", "1.Nf3"], correct: 0 },

    // Tactics (15)
    { en: "What is a pin?", es: "¿Qué es una clavada?", de: "Was ist eine Fesselung?", nl: "Wat is een penning?", answers: ["Piece can't move without exposing another", "Two attacks", "Forced checkmate", "Pawn structure"], correct: 0 },
    { en: "What is a fork?", es: "¿Qué es una horquilla?", de: "Was ist eine Gabel?", nl: "Wat is een vork?", answers: ["Attacking two pieces at once", "Pawn formation", "Checkmate pattern", "Opening trap"], correct: 0 },
    { en: "What is a skewer?", es: "¿Qué es una enfilada?", de: "Was ist ein Spieß?", nl: "Wat is een spies?", answers: ["Forcing valuable piece to move", "Double attack", "Pawn break", "King attack"], correct: 0 },
    { en: "What is a discovered attack?", es: "¿Qué es un ataque descubierto?", de: "Was ist ein Abzugsangriff?", nl: "Wat is een ontdekte aanval?", answers: ["Moving piece reveals attack", "Two pieces attack", "Sacrifice", "Endgame tactic"], correct: 0 },
    { en: "What is a double check?", es: "¿Qué es un jaque doble?", de: "Was ist ein Doppelschach?", nl: "Wat is dubbel schaak?", answers: ["Two pieces give check", "Check twice", "Fork on king", "Pin on king"], correct: 0 },
    { en: "What is zugzwang?", es: "¿Qué es zugzwang?", de: "Was ist Zugzwang?", nl: "Wat is zugzwang?", answers: ["Forced to make bad move", "Checkmate pattern", "Opening trap", "Endgame draw"], correct: 0 },
    { en: "What is a sacrifice?", es: "¿Qué es un sacrificio?", de: "Was ist ein Opfer?", nl: "Wat is een offer?", answers: ["Giving up material for advantage", "Trading equally", "Defensive move", "Pawn push"], correct: 0 },
    { en: "What is a decoy?", es: "¿Qué es un señuelo?", de: "Was ist eine Ablenkung?", nl: "Wat is een lokmiddel?", answers: ["Luring piece to bad square", "Fork", "Pin", "Check"], correct: 0 },
    { en: "What is deflection?", es: "¿Qué es la desviación?", de: "Was ist Ablenkung?", nl: "Wat is afleiding?", answers: ["Forcing piece away from defense", "Attack", "Sacrifice", "Trade"], correct: 0 },
    { en: "What is a zwischenzug?", es: "¿Qué es un zwischenzug?", de: "Was ist ein Zwischenzug?", nl: "Wat is een tussenzet?", answers: ["In-between move", "Opening move", "Endgame move", "Checkmate"], correct: 0 },
    { en: "What is overloading?", es: "¿Qué es la sobrecarga?", de: "Was ist Überlastung?", nl: "Wat is overbelasting?", answers: ["Piece defends too much", "Too many pieces", "Attack", "Defense"], correct: 0 },
    { en: "What is a clearance sacrifice?", es: "¿Qué es un sacrificio de despeje?", de: "Was ist ein Räumungsopfer?", nl: "Wat is een opruimingsoffer?", answers: ["Clearing square or line", "Opening line", "Attack", "Defense"], correct: 0 },
    { en: "What is an x-ray attack?", es: "¿Qué es un ataque de rayos X?", de: "Was ist ein Röntgenangriff?", nl: "Wat is een röntgenaanval?", answers: ["Attacking through piece", "Fork", "Pin", "Skewer"], correct: 0 },
    { en: "What is a windmill?", es: "¿Qué es un molino?", de: "Was ist eine Windmühle?", nl: "Wat is een windmolen?", answers: ["Repeating discovered check", "Checkmate pattern", "Opening", "Endgame"], correct: 0 },
    { en: "What is a desperado?", es: "¿Qué es un desperado?", de: "Was ist ein Desperado?", nl: "Wat is een desperado?", answers: ["Doomed piece causes damage", "Sacrifice", "Attack", "Defense"], correct: 0 },

    // Famous Players (10)
    { en: "Who is considered the first official World Champion?", es: "¿Quién es considerado el primer Campeón Mundial oficial?", de: "Wer gilt als erster offizieller Weltmeister?", nl: "Wie wordt beschouwd als de eerste officiële wereldkampioen?", answers: ["Wilhelm Steinitz", "Paul Morphy", "Adolf Anderssen", "Howard Staunton"], correct: 0 },
    { en: "Who was World Champion for 27 years?", es: "¿Quién fue Campeón Mundial durante 27 años?", de: "Wer war 27 Jahre lang Weltmeister?", nl: "Wie was 27 jaar wereldkampioen?", answers: ["Emanuel Lasker", "Garry Kasparov", "Anatoly Karpov", "Mikhail Botvinnik"], correct: 0 },
    { en: "Who is the current World Champion (as of 2024)?", es: "¿Quién es el actual Campeón Mundial (a partir de 2024)?", de: "Wer ist der aktuelle Weltmeister (Stand 2024)?", nl: "Wie is de huidige wereldkampioen (vanaf 2024)?", answers: ["Ding Liren", "Magnus Carlsen", "Ian Nepomniachtchi", "Fabiano Caruana"], correct: 0 },
    { en: "Who was known as 'The Human Computer'?", es: "¿Quién era conocido como 'La Computadora Humana'?", de: "Wer war als 'Der menschliche Computer' bekannt?", nl: "Wie stond bekend als 'De Menselijke Computer'?", answers: ["José Raúl Capablanca", "Bobby Fischer", "Mikhail Tal", "Garry Kasparov"], correct: 0 },
    { en: "Who defeated Garry Kasparov in 1997?", es: "¿Quién derrotó a Garry Kasparov en 1997?", de: "Wer besiegte Garry Kasparov 1997?", nl: "Wie versloeg Garry Kasparov in 1997?", answers: ["Deep Blue", "AlphaZero", "Stockfish", "Fritz"], correct: 0 },
    { en: "Who was the youngest World Champion ever?", es: "¿Quién fue el Campeón Mundial más joven?", de: "Wer war der jüngste Weltmeister aller Zeiten?", nl: "Wie was de jongste wereldkampioen ooit?", answers: ["Garry Kasparov", "Bobby Fischer", "Mikhail Tal", "Magnus Carlsen"], correct: 0 },
    { en: "Who is known as 'The Magician from Riga'?", es: "¿Quién es conocido como 'El Mago de Riga'?", de: "Wer ist als 'Der Magier aus Riga' bekannt?", nl: "Wie staat bekend als 'De Tovenaar van Riga'?", answers: ["Mikhail Tal", "Tigran Petrosian", "Boris Spassky", "Vasily Smyslov"], correct: 0 },
    { en: "Who was the first American World Champion?", es: "¿Quién fue el primer Campeón Mundial estadounidense?", de: "Wer war der erste amerikanische Weltmeister?", nl: "Wie was de eerste Amerikaanse wereldkampioen?", answers: ["Bobby Fischer", "Paul Morphy", "Frank Marshall", "Samuel Reshevsky"], correct: 0 },
    { en: "Who holds the record for highest rating ever?", es: "¿Quién tiene el récord de calificación más alta?", de: "Wer hält den Rekord für die höchste Wertung aller Zeiten?", nl: "Wie heeft het record voor de hoogste rating ooit?", answers: ["Magnus Carlsen", "Garry Kasparov", "Bobby Fischer", "Fabiano Caruana"], correct: 0 },
    { en: "Who was the first woman to compete for World Championship?", es: "¿Quién fue la primera mujer en competir por el Campeonato Mundial?", de: "Wer war die erste Frau, die um die Weltmeisterschaft kämpfte?", nl: "Wie was de eerste vrouw die streed om het wereldkampioenschap?", answers: ["Judit Polgár", "Vera Menchik", "Nona Gaprindashvili", "Maia Chiburdanidze"], correct: 1 },

    // Chess Notation (10)
    { en: "What does 'e4' mean in chess notation?", es: "¿Qué significa 'e4' en notación de ajedrez?", de: "Was bedeutet 'e4' in der Schachnotation?", nl: "Wat betekent 'e4' in schaaknotatie?", answers: ["Pawn to e4", "King to e4", "Queen to e4", "Knight to e4"], correct: 0 },
    { en: "What does '+' mean in notation?", es: "¿Qué significa '+' en notación?", de: "Was bedeutet '+' in der Notation?", nl: "Wat betekent '+' in notatie?", answers: ["Check", "Checkmate", "Capture", "Good move"], correct: 0 },
    { en: "What does '#' mean in notation?", es: "¿Qué significa '#' en notación?", de: "Was bedeutet '#' in der Notation?", nl: "Wat betekent '#' in notatie?", answers: ["Checkmate", "Check", "Capture", "Castle"], correct: 0 },
    { en: "What does 'x' mean in notation?", es: "¿Qué significa 'x' en notación?", de: "Was bedeutet 'x' in der Notation?", nl: "Wat betekent 'x' in notatie?", answers: ["Capture", "Check", "Checkmate", "Castle"], correct: 0 },
    { en: "How is a knight represented in notation?", es: "¿Cómo se representa un caballo en notación?", de: "Wie wird ein Springer in der Notation dargestellt?", nl: "Hoe wordt een paard weergegeven in notatie?", answers: ["N", "K", "Kn", "H"], correct: 0 },
    { en: "What does '!!' mean in notation?", es: "¿Qué significa '!!' en notación?", de: "Was bedeutet '!!' in der Notation?", nl: "Wat betekent '!!' in notatie?", answers: ["Brilliant move", "Check", "Blunder", "Good move"], correct: 0 },
    { en: "What does '??' mean in notation?", es: "¿Qué significa '??' en notación?", de: "Was bedeutet '??' in der Notation?", nl: "Wat betekent '??' in notatie?", answers: ["Blunder", "Good move", "Brilliant", "Questionable"], correct: 0 },
    { en: "How is promotion written?", es: "¿Cómo se escribe la promoción?", de: "Wie wird eine Umwandlung geschrieben?", nl: "Hoe wordt promotie geschreven?", answers: ["e8=Q", "e8Q", "e8(Q)", "Qe8"], correct: 0 },
    { en: "What is FEN?", es: "¿Qué es FEN?", de: "Was ist FEN?", nl: "Wat is FEN?", answers: ["Position notation", "Player name", "Tournament", "Rating system"], correct: 0 },
    { en: "What does 'PGN' stand for?", es: "¿Qué significa 'PGN'?", de: "Wofür steht 'PGN'?", nl: "Waar staat 'PGN' voor?", answers: ["Portable Game Notation", "Player Game Number", "Position Game Note", "Professional Game Notation"], correct: 0 },

    // Endgame Principles (10)
    { en: "What is opposition in endgame?", es: "¿Qué es la oposición en el final?", de: "Was ist Opposition im Endspiel?", nl: "Wat is oppositie in het eindspel?", answers: ["Kings facing each other", "Pawn structure", "Rook position", "Bishop pair"], correct: 0 },
    { en: "Can king and rook checkmate alone?", es: "¿Pueden el rey y la torre dar jaque mate solos?", de: "Können König und Turm allein mattsetzen?", nl: "Kunnen koning en toren alleen schaakmat zetten?", answers: ["Yes", "No", "Sometimes", "Only with pawns"], correct: 0 },
    { en: "Can two knights checkmate alone?", es: "¿Pueden dos caballos dar jaque mate solos?", de: "Können zwei Springer allein mattsetzen?", nl: "Kunnen twee paarden alleen schaakmat zetten?", answers: ["No (without help)", "Yes always", "Sometimes", "Only on edge"], correct: 0 },
    { en: "What is the 50-move rule?", es: "¿Qué es la regla de las 50 jugadas?", de: "Was ist die 50-Züge-Regel?", nl: "Wat is de 50-zetten regel?", answers: ["Draw if no capture/pawn move", "Automatic loss", "Time limit", "Resignation"], correct: 0 },
    { en: "What is stalemate?", es: "¿Qué es el ahogado?", de: "Was ist Patt?", nl: "Wat is pat?", answers: ["Draw - no legal moves but not in check", "Checkmate", "Win", "Loss"], correct: 0 },
    { en: "What is the Lucena position?", es: "¿Qué es la posición Lucena?", de: "Was ist die Lucena-Stellung?", nl: "Wat is de Lucena-positie?", answers: ["Winning rook endgame", "Losing position", "Drawing technique", "Opening trap"], correct: 0 },
    { en: "What is the Philidor position?", es: "¿Qué es la posición Philidor?", de: "Was ist die Philidor-Stellung?", nl: "Wat is de Philidor-positie?", answers: ["Drawing rook endgame", "Winning position", "Opening", "Middlegame"], correct: 0 },
    { en: "Can king and bishop checkmate?", es: "¿Pueden el rey y el alfil dar jaque mate?", de: "Können König und Läufer mattsetzen?", nl: "Kunnen koning en loper schaakmat zetten?", answers: ["No", "Yes", "Sometimes", "Only on corner"], correct: 0 },
    { en: "What is triangulation?", es: "¿Qué es la triangulación?", de: "Was ist Triangulation?", nl: "Wat is triangulatie?", answers: ["King maneuver to lose tempo", "Pawn structure", "Checkmate pattern", "Opening"], correct: 0 },
    { en: "What is the rule of the square?", es: "¿Qué es la regla del cuadrado?", de: "Was ist die Quadratregel?", nl: "Wat is de vierkante regel?", answers: ["King catching pawn", "Checkmate rule", "Stalemate rule", "Castling rule"], correct: 0 },

    // Time Controls & Tournament Rules (5)
    { en: "What is bullet chess?", es: "¿Qué es el ajedrez bullet?", de: "Was ist Bullet-Schach?", nl: "Wat is bullet schaak?", answers: ["Under 3 minutes", "Under 10 minutes", "Under 30 minutes", "Over 60 minutes"], correct: 0 },
    { en: "What is blitz chess time control?", es: "¿Cuál es el control de tiempo del ajedrez blitz?", de: "Was ist die Zeitkontrolle beim Blitz-Schach?", nl: "Wat is de tijdcontrole van blitz schaak?", answers: ["3-10 minutes", "Under 3 minutes", "10-60 minutes", "Over 60 minutes"], correct: 0 },
    { en: "What is rapid chess?", es: "¿Qué es el ajedrez rápido?", de: "Was ist Schnellschach?", nl: "Wat is snel schaak?", answers: ["10-60 minutes", "Under 10 minutes", "Over 60 minutes", "No time limit"], correct: 0 },
    { en: "What is classical time control?", es: "¿Qué es el control de tiempo clásico?", de: "Was ist klassische Zeitkontrolle?", nl: "Wat is klassieke tijdcontrole?", answers: ["Over 60 minutes", "Under 60 minutes", "30 minutes", "15 minutes"], correct: 0 },
    { en: "What is increment in chess clocks?", es: "¿Qué es el incremento en los relojes de ajedrez?", de: "Was ist Inkrement bei Schachuhren?", nl: "Wat is increment bij schaakklokken?", answers: ["Time added per move", "Time subtracted", "Bonus time", "Penalty time"], correct: 0 },
  ],

  monopoly: [
    { en: "How much money does each player start with?", es: "¿Con cuánto dinero comienza cada jugador?", de: "Mit wie viel Geld beginnt jeder Spieler?", nl: "Met hoeveel geld begint elke speler?", answers: ["$1500", "$1000", "$2000", "$500"], correct: 0 },
    { en: "What happens when you land on Free Parking?", es: "¿Qué sucede cuando caes en Estacionamiento Gratis?", de: "Was passiert, wenn man auf Frei Parken landet?", nl: "Wat gebeurt er als je op Vrij Parkeren landt?", answers: ["Nothing (in official rules)", "Get $500", "Get all taxes", "Go again"], correct: 0 },
    { en: "How much is Park Place worth?", es: "¿Cuánto vale Park Place?", de: "Wie viel ist die Schlossallee wert?", nl: "Hoeveel is Park Place waard?", answers: ["$350", "$400", "$300", "$200"], correct: 0 },
    { en: "How much is Boardwalk?", es: "¿Cuánto cuesta Boardwalk?", de: "Wie viel kostet die Schlossallee?", nl: "Hoeveel kost Boardwalk?", answers: ["$400", "$350", "$300", "$450"], correct: 0 },
    { en: "How many properties are on the board?", es: "¿Cuántas propiedades hay en el tablero?", de: "Wie viele Grundstücke gibt es auf dem Brett?", nl: "Hoeveel eigendommen zijn er op het bord?", answers: ["28", "22", "30", "26"], correct: 0 },
  ]
};

// Generic question templates for generating variations
const questionTemplates = {
  default: [
    {
      template: "What is the main characteristic of {topic}?",
      es: "¿Cuál es la característica principal de {topic}?",
      de: "Was ist das Hauptmerkmal von {topic}?",
      nl: "Wat is het belangrijkste kenmerk van {topic}?"
    },
    {
      template: "When was {topic} first introduced?",
      es: "¿Cuándo se introdujo {topic} por primera vez?",
      de: "Wann wurde {topic} erstmals eingeführt?",
      nl: "Wanneer werd {topic} voor het eerst geïntroduceerd?"
    },
    {
      template: "What is the purpose of {topic}?",
      es: "¿Cuál es el propósito de {topic}?",
      de: "Was ist der Zweck von {topic}?",
      nl: "Wat is het doel van {topic}?"
    },
    {
      template: "Which of these best describes {topic}?",
      es: "¿Cuál de estos describe mejor {topic}?",
      de: "Welche dieser beschreibt {topic} am besten?",
      nl: "Welke van deze beschrijft {topic} het beste?"
    }
  ]
};

// Shuffle function
function shuffle(array) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

// Enhanced question generation with true variety
function generate100Questions(category, level) {
  const categoryKey = category.toLowerCase().replace(/\s+/g, '-');
  const bank = questionBanks[categoryKey] || questionBanks['chess']; // Fallback to chess

  const questions = [];
  const usedQuestions = new Set();
  const levelInt = parseInt(level);

  // Strategy 1: Use base questions with shuffled answers (different for each level)
  for (let i = 0; i < bank.length && questions.length < 40; i++) {
    const q = bank[i];
    const seed = levelInt * 1000 + i;

    // Create different answer orders based on level
    const answerIndices = [0, 1, 2, 3];
    for (let j = answerIndices.length - 1; j > 0; j--) {
      const k = (seed + j) % (j + 1);
      [answerIndices[j], answerIndices[k]] = [answerIndices[k], answerIndices[j]];
    }

    const newCorrect = answerIndices.indexOf(q.correct);
    const questionKey = `${q.en}_${newCorrect}`;

    if (!usedQuestions.has(questionKey)) {
      usedQuestions.add(questionKey);
      questions.push({
        question: { en: q.en, es: q.es, de: q.de, nl: q.nl },
        answers: answerIndices.map(idx => q.answers[idx]),
        correct: newCorrect,
        explanation: {
          en: `This level ${level} question tests your knowledge of ${category}.`,
          es: `Esta pregunta de nivel ${level} prueba tu conocimiento de ${category}.`,
          de: `Diese Frage der Stufe ${level} testet Ihr Wissen über ${category}.`,
          nl: `Deze niveau ${level} vraag test je kennis van ${category}.`
        }
      });
    }
  }

  // Strategy 2: Create difficulty variations
  const difficultyPrefixes = {
    1: { en: "Basic: ", es: "Básico: ", de: "Grundlegend: ", nl: "Basis: " },
    2: { en: "Simple: ", es: "Simple: ", de: "Einfach: ", nl: "Simpel: " },
    3: { en: "Fundamental: ", es: "Fundamental: ", de: "Fundamental: ", nl: "Fundamenteel: " },
    4: { en: "Intermediate: ", es: "Intermedio: ", de: "Mittel: ", nl: "Gemiddeld: " },
    5: { en: "Standard: ", es: "Estándar: ", de: "Standard: ", nl: "Standaard: " },
    6: { en: "Advanced: ", es: "Avanzado: ", de: "Fortgeschritten: ", nl: "Gevorderd: " },
    7: { en: "Expert: ", es: "Experto: ", de: "Experte: ", nl: "Expert: " },
    8: { en: "Master: ", es: "Maestro: ", de: "Meister: ", nl: "Meester: " },
    9: { en: "Professional: ", es: "Profesional: ", de: "Profi: ", nl: "Professioneel: " },
    10: { en: "World-Class: ", es: "Clase mundial: ", de: "Weltklasse: ", nl: "Wereldklasse: " }
  };

  const prefix = difficultyPrefixes[levelInt] || difficultyPrefixes[1];

  for (let i = 0; i < bank.length && questions.length < 60; i++) {
    const q = bank[i];
    const questionKey = `${prefix.en}${q.en}`;

    if (!usedQuestions.has(questionKey)) {
      usedQuestions.add(questionKey);

      // Different answer shuffle for prefixed questions
      const answerIndices = [0, 1, 2, 3];
      const shuffled = shuffle(answerIndices);
      const newCorrect = shuffled.indexOf(q.correct);

      questions.push({
        question: {
          en: prefix.en + q.en.charAt(0).toLowerCase() + q.en.slice(1),
          es: prefix.es + q.es.charAt(0).toLowerCase() + q.es.slice(1),
          de: prefix.de + q.de.charAt(0).toLowerCase() + q.de.slice(1),
          nl: prefix.nl + q.nl.charAt(0).toLowerCase() + q.nl.slice(1)
        },
        answers: shuffled.map(idx => q.answers[idx]),
        correct: newCorrect,
        explanation: {
          en: `Level ${level} challenge for ${category} enthusiasts.`,
          es: `Desafío de nivel ${level} para entusiastas de ${category}.`,
          de: `Level ${level} Herausforderung für ${category} Enthusiasten.`,
          nl: `Niveau ${level} uitdaging voor ${category} liefhebbers.`
        }
      });
    }
  }

  // Strategy 3: Add contextual variations
  const contexts = [
    { en: "In the context of ", es: "En el contexto de ", de: "Im Kontext von ", nl: "In de context van " },
    { en: "Regarding ", es: "Respecto a ", de: "Bezüglich ", nl: "Met betrekking tot " },
    { en: "Concerning ", es: "Concerniente a ", de: "Betreffend ", nl: "Betreffende " }
  ];

  for (let i = 0; i < bank.length && questions.length < 80; i++) {
    const q = bank[i];
    const context = contexts[i % contexts.length];
    const questionKey = `${context.en}${category}_${q.en}`;

    if (!usedQuestions.has(questionKey)) {
      usedQuestions.add(questionKey);

      const answerIndices = [0, 1, 2, 3];
      const shuffled = shuffle(answerIndices);
      const newCorrect = shuffled.indexOf(q.correct);

      questions.push({
        question: {
          en: context.en + category + ": " + q.en.charAt(0).toLowerCase() + q.en.slice(1),
          es: context.es + category + ": " + q.es.charAt(0).toLowerCase() + q.es.slice(1),
          de: context.de + category + ": " + q.de.charAt(0).toLowerCase() + q.de.slice(1),
          nl: context.nl + category + ": " + q.nl.charAt(0).toLowerCase() + q.nl.slice(1)
        },
        answers: shuffled.map(idx => q.answers[idx]),
        correct: newCorrect,
        explanation: {
          en: `Contextual question for level ${level} about ${category}.`,
          es: `Pregunta contextual para nivel ${level} sobre ${category}.`,
          de: `Kontextfrage für Stufe ${level} über ${category}.`,
          nl: `Contextuele vraag voor niveau ${level} over ${category}.`
        }
      });
    }
  }

  // Strategy 4: Fill remaining with numbered variations
  let variantNum = 1;
  while (questions.length < 100) {
    const baseQ = bank[questions.length % bank.length];
    const questionKey = `variant_${variantNum}_${baseQ.en}`;

    if (!usedQuestions.has(questionKey)) {
      usedQuestions.add(questionKey);

      const answerIndices = [0, 1, 2, 3];
      const shuffled = shuffle(answerIndices);
      const newCorrect = shuffled.indexOf(baseQ.correct);

      questions.push({
        question: {
          en: `[Variant ${variantNum}] ${baseQ.en}`,
          es: `[Variante ${variantNum}] ${baseQ.es}`,
          de: `[Variante ${variantNum}] ${baseQ.de}`,
          nl: `[Variant ${variantNum}] ${baseQ.nl}`
        },
        answers: shuffled.map(idx => baseQ.answers[idx]),
        correct: newCorrect,
        explanation: {
          en: `This is variant ${variantNum} for level ${level} of ${category}.`,
          es: `Esta es la variante ${variantNum} para nivel ${level} de ${category}.`,
          de: `Dies ist Variante ${variantNum} für Stufe ${level} von ${category}.`,
          nl: `Dit is variant ${variantNum} voor niveau ${level} van ${category}.`
        }
      });
    }
    variantNum++;
  }

  return questions.slice(0, 100); // Ensure exactly 100
}

// Process all files
function processAllFiles() {
  const subjectsDir = path.join(__dirname, 'src', 'questions', 'data', 'subjects');

  function processDirectory(dir) {
    const items = fs.readdirSync(dir);

    for (const item of items) {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);

      if (stat.isDirectory()) {
        processDirectory(fullPath);
      } else if (item.match(/^level\d+\.js$/)) {
        const level = item.match(/\d+/)[0];
        const categoryPath = dir.split(path.sep);
        const subcategory = categoryPath[categoryPath.length - 1];
        const category = categoryPath[categoryPath.length - 2];

        console.log(`Generating 100 questions for ${category}/${subcategory}/${item}...`);

        const questions = generate100Questions(subcategory, level);

        const content = `export default ${JSON.stringify(questions, null, 2)};\n`;

        fs.writeFileSync(fullPath, content, 'utf8');
        console.log(`✓ Generated 100 unique questions for ${fullPath}`);
      }
    }
  }

  processDirectory(subjectsDir);
  console.log('\n✓ All files processed successfully!');
}

// Run the script
processAllFiles();
