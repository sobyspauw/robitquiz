// Quiz Template - Level 7: Bord spelletjes - Schaken
(function() {
  const level7 = {
    name: {
      en: "Chess",
      es: "Ajedrez",
      de: "Schach",
      nl: "Schaken"
    },
    questions: [
      {
        question: {
          en: "What is the Nimzo-Indian Defense main idea?",
          es: "¿Cuál es la idea principal de la Defensa Nimzo-India?",
          de: "Was ist die Hauptidee der Nimzo-Indischen Verteidigung?",
          nl: "Wat is het hoofdidee van de Nimzo-Indische Verdediging?"
        },
        options: [
          { en: "Pin White's knight with Bb4, controlling the center with pieces", es: "Clavar el caballo blanco con Ab4, controlando el centro con piezas", de: "Weiß' Springer mit Lb4 fesseln, Zentrum mit Figuren kontrollieren", nl: "Wit's paard spijkeren met Lb4, centrum met stukken controleren" },
          { en: "Immediate pawn storm", es: "Tormenta de peones inmediata", de: "Sofortiger Bauernsturm", nl: "Onmiddellijke pionstorm" },
          { en: "Queenside castling", es: "Enroque largo", de: "Lange Rochade", nl: "Lang rokeren" },
          { en: "Central pawn majority", es: "Mayoría de peones centrales", de: "Zentrale Bauernmehrheit", nl: "Centrale pionmeerderheid" }
        ],
        correct: 0,
        explanation: {
          en: "The Nimzo-Indian Defense uses 3...Bb4 to pin White's knight, following hypermodern principles by controlling the center with pieces rather than pawns. It's one of the most solid and popular defenses to 1.d4.",
          es: "La Defensa Nimzo-India usa 3...Ab4 para clavar el caballo de las blancas, siguiendo principios hipermodernos al controlar el centro con piezas en lugar de peones. Es una de las defensas más sólidas y populares contra 1.d4.",
          de: "Die Nimzo-Indische Verteidigung nutzt 3...Lb4, um Weiß' Springer zu fesseln, und folgt hypermodernen Prinzipien, indem sie das Zentrum mit Figuren statt Bauern kontrolliert. Es ist eine der solidesten und beliebtesten Verteidigungen gegen 1.d4.",
          nl: "De Nimzo-Indische Verdediging gebruikt 3...Lb4 om wit's paard te spijkeren, waarbij hypermoderne principes worden gevolgd door het centrum met stukken te controleren in plaats van pionnen. Het is een van de meest solide en populaire verdedigingen tegen 1.d4."
        }
      },
      {
        question: {
          en: "What is the 'Sicilian Dragon' pawn structure resembling?",
          es: "¿A qué se parece la estructura de peones del 'Dragón Siciliano'?",
          de: "Woran erinnert die Bauernstruktur des 'Sizilianischen Drachen'?",
          nl: "Waar lijkt de 'Siciliaanse Draak' pionstructuur op?"
        },
        options: [
          { en: "A dragon shape when Black's pawns and bishop are visualized", es: "Una forma de dragón cuando se visualizan los peones y alfil de las negras", de: "Eine Drachenform wenn Schwarz' Bauern und Läufer visualisiert werden", nl: "Een drakvorm wanneer zwart's pionnen en loper worden gevisualiseerd" },
          { en: "A defensive wall", es: "Un muro defensivo", de: "Eine Verteidigungsmauer", nl: "Een verdedigingsmuur" },
          { en: "A castle structure", es: "Una estructura de castillo", de: "Eine Burgstruktur", nl: "Een kasteelstructuur" },
          { en: "An attacking formation", es: "Una formación de ataque", de: "Eine Angriffsformation", nl: "Een aanvalsformatie" }
        ],
        correct: 0,
        explanation: {
          en: "The Dragon Variation of the Sicilian gets its name because Black's pawn chain (a6, b7, c6, d6, e7, f7, g6, h7) combined with the fianchettoed bishop on g7 resembles the shape of a dragon, with the bishop representing the dragon's eye watching the long diagonal.",
          es: "La Variante del Dragón de la Siciliana obtiene su nombre porque la cadena de peones de las negras (a6, b7, c6, d6, e7, f7, g6, h7) combinada con el alfil en fianchetto en g7 se asemeja a la forma de un dragón, con el alfil representando el ojo del dragón vigilando la diagonal larga.",
          de: "Die Drachen-Variante der Sizilianischen erhält ihren Namen, weil Schwarz' Bauernkette (a6, b7, c6, d6, e7, f7, g6, h7) kombiniert mit dem fianschettierten Läufer auf g7 die Form eines Drachen ähnelt, wobei der Läufer das Auge des Drachen darstellt, das die lange Diagonale bewacht.",
          nl: "De Draak Variant van de Siciliaanse krijgt zijn naam omdat zwart's pionketen (a6, b7, c6, d6, e7, f7, g6, h7) gecombineerd met de gefianchetteerde loper op g7 lijkt op de vorm van een draak, waarbij de loper het oog van de draak voorstelt dat de lange diagonaal bewaakt."
        }
      },
      {
        question: {
          en: "What is a 'positional sacrifice' in advanced chess?",
          es: "¿Qué es un 'sacrificio posicional' en ajedrez avanzado?",
          de: "Was ist ein 'positionelles Opfer' im fortgeschrittenen Schach?",
          nl: "Wat is een 'positioneel offer' in gevorderd schaken?"
        },
        options: [
          { en: "Giving up material for long-term positional compensation", es: "Entregar material por compensación posicional a largo plazo", de: "Material für langfristige positionelle Kompensation opfern", nl: "Materiaal opgeven voor langdurige positionele compensatie" },
          { en: "Sacrificing the queen", es: "Sacrificar la dama", de: "Die Dame opfern", nl: "De dame offeren" },
          { en: "Trading pieces equally", es: "Intercambiar piezas por igual", de: "Figuren gleichwertig tauschen", nl: "Stukken gelijkwaardig ruilen" },
          { en: "Giving up position for material", es: "Renunciar a la posición por material", de: "Position für Material aufgeben", nl: "Positie opgeven voor materiaal" }
        ],
        correct: 0,
        explanation: {
          en: "A positional sacrifice involves giving up material not for immediate tactical gain, but for lasting positional factors like control of key squares, better piece coordination, or structural superiority. Masters like Petrosian and Karpov excelled at this concept.",
          es: "Un sacrificio posicional implica entregar material no para ganancia táctica inmediata, sino para factores posicionales duraderos como control de casillas clave, mejor coordinación de piezas o superioridad estructural. Maestros como Petrosian y Karpov sobresalieron en este concepto.",
          de: "Ein positionelles Opfer beinhaltet das Opfern von Material nicht für sofortigen taktischen Gewinn, sondern für dauerhafte positionelle Faktoren wie Kontrolle von Schlüsselfeldern, bessere Figurenkoordination oder strukturelle Überlegenheit. Meister wie Petrosjan und Karpow waren hervorragend in diesem Konzept.",
          nl: "Een positioneel offer houdt in dat materiaal wordt opgegeven niet voor onmiddellijke tactische winst, maar voor blijvende positionele factoren zoals controle van sleutelvelden, betere stukcoördinatie of structureel overwicht. Meesters zoals Petrosian en Karpov blonken uit in dit concept."
        }
      },
      {
        question: {
          en: "What is the 'English Opening' characterized by?",
          es: "¿Por qué se caracteriza la 'Apertura Inglesa'?",
          de: "Was kennzeichnet die 'Englische Eröffnung'?",
          nl: "Waar wordt de 'Engelse Opening' door gekenmerkt?"
        },
        options: [
          { en: "Starting with 1.c4, controlling center from the flank", es: "Comenzar con 1.c4, controlando el centro desde el flanco", de: "Beginnend mit 1.c4, Zentrum vom Flügel kontrollieren", nl: "Beginnend met 1.c4, centrum van de vleugel controleren" },
          { en: "Immediate 1.e4", es: "Inmediato 1.e4", de: "Sofortiges 1.e4", nl: "Onmiddellijk 1.e4" },
          { en: "Queen's gambit positions", es: "Posiciones de gambito de dama", de: "Damengambit-Stellungen", nl: "Damegambiet posities" },
          { en: "Kingside fianchetto only", es: "Solo fianchetto de rey", de: "Nur Königsseiten-Fianchetto", nl: "Alleen koningszijde fianchetto" }
        ],
        correct: 0,
        explanation: {
          en: "The English Opening (1.c4) is a flexible, hypermodern opening that controls the center from the side. It can transpose into various structures and was popularized by English player Howard Staunton and later by world champions like Botvinnik and Kasparov.",
          es: "La Apertura Inglesa (1.c4) es una apertura flexible e hipermoderna que controla el centro desde el lado. Puede transponer a varias estructuras y fue popularizada por el jugador inglés Howard Staunton y más tarde por campeones mundiales como Botvinnik y Kasparov.",
          de: "Die Englische Eröffnung (1.c4) ist eine flexible, hypermoderne Eröffnung, die das Zentrum von der Seite kontrolliert. Sie kann in verschiedene Strukturen übergehen und wurde vom englischen Spieler Howard Staunton und später von Weltmeistern wie Botwinnik und Kasparow populär gemacht.",
          nl: "De Engelse Opening (1.c4) is een flexibele, hypermoderne opening die het centrum van de zijkant controleert. Het kan overgaan in verschillende structuren en werd gepopulariseerd door de Engelse speler Howard Staunton en later door wereldkampioenen zoals Botvinnik en Kasparov."
        }
      },
      {
        question: {
          en: "What is 'piece coordination' in strategic chess?",
          es: "¿Qué es la 'coordinación de piezas' en ajedrez estratégico?",
          de: "Was ist 'Figurenkoordination' im strategischen Schach?",
          nl: "Wat is 'stukcoördinatie' in strategisch schaken?"
        },
        options: [
          { en: "Pieces working together harmoniously to achieve goals", es: "Piezas trabajando juntas armoniosamente para lograr objetivos", de: "Figuren arbeiten harmonisch zusammen um Ziele zu erreichen", nl: "Stukken werken harmonieus samen om doelen te bereiken" },
          { en: "Moving all pieces to the same area", es: "Mover todas las piezas a la misma área", de: "Alle Figuren in denselben Bereich bewegen", nl: "Alle stukken naar hetzelfde gebied verplaatsen" },
          { en: "Developing pieces quickly", es: "Desarrollar piezas rápidamente", de: "Figuren schnell entwickeln", nl: "Stukken snel ontwikkelen" },
          { en: "Trading pieces efficiently", es: "Intercambiar piezas eficientemente", de: "Figuren effizient tauschen", nl: "Stukken efficiënt ruilen" }
        ],
        correct: 0,
        explanation: {
          en: "Piece coordination means your pieces work together effectively, supporting each other's functions and creating synergies. Well-coordinated pieces can control key squares, execute attacks, and defend more efficiently than poorly coordinated ones, even with the same material.",
          es: "La coordinación de piezas significa que tus piezas trabajan juntas efectivamente, apoyando las funciones de cada una y creando sinergias. Las piezas bien coordinadas pueden controlar casillas clave, ejecutar ataques y defender más eficientemente que las mal coordinadas, incluso con el mismo material.",
          de: "Figurenkoordination bedeutet, dass Ihre Figuren effektiv zusammenarbeiten, sich gegenseitig in ihren Funktionen unterstützen und Synergien schaffen. Gut koordinierte Figuren können Schlüsselfelder kontrollieren, Angriffe ausführen und effizienter verteidigen als schlecht koordinierte, selbst bei gleichem Material.",
          nl: "Stukcoördinatie betekent dat je stukken effectief samenwerken, elkaars functies ondersteunen en synergieën creëren. Goed gecoördineerde stukken kunnen sleutelvelden controleren, aanvallen uitvoeren en efficiënter verdedigen dan slecht gecoördineerde, zelfs met hetzelfde materiaal."
        }
      },
      {
        question: {
          en: "What is the Nimzo-Indian Defense characterized by?",
          es: "¿Por qué se caracteriza la Defensa Nimzo-India?",
          de: "Was kennzeichnet die Nimzo-Indische Verteidigung?",
          nl: "Waar wordt de Nimzo-Indische Verdediging door gekenmerkt?"
        },
        options: [
          { en: "Bb4 pinning the knight to the king after 1.d4 Nf6 2.c4 e6 3.Nc3", es: "Ab4 clavando el caballo al rey después de 1.d4 Cf6 2.c4 e6 3.Cc3", de: "Lb4 fesselt den Springer an den König nach 1.d4 Sf6 2.c4 e6 3.Sc3", nl: "Lb4 dat het paard aan de koning spijkert na 1.d4 Pf6 2.c4 e6 3.Pc3" },
          { en: "Early d5 pawn break", es: "Ruptura temprana de peón d5", de: "Früher d5-Bauerndurchbruch", nl: "Vroege d5-piondoorbraak" },
          { en: "Kingside fianchetto", es: "Fianchetto de rey", de: "Königsseiten-Fianchetto", nl: "Koningszijde fianchetto" },
          { en: "Queen's gambit acceptance", es: "Aceptación del gambito de dama", de: "Annahme des Damengambits", nl: "Acceptatie van het damegambiet" }
        ],
        correct: 0,
        explanation: {
          en: "The Nimzo-Indian Defense is characterized by 3...Bb4, pinning White's knight to the king. It's one of the most respected defenses to 1.d4, aiming to control the center with pieces rather than pawns.",
          es: "La Defensa Nimzo-India se caracteriza por 3...Ab4, clavando el caballo de las blancas al rey. Es una de las defensas más respetadas contra 1.d4, con el objetivo de controlar el centro con piezas en lugar de peones.",
          de: "Die Nimzo-Indische Verteidigung ist gekennzeichnet durch 3...Lb4, was den weißen Springer an den König fesselt. Es ist eine der angesehensten Verteidigungen gegen 1.d4 und zielt darauf ab, das Zentrum mit Figuren statt mit Bauern zu kontrollieren.",
          nl: "De Nimzo-Indische Verdediging wordt gekenmerkt door 3...Lb4, dat het witte paard aan de koning spijkert. Het is een van de meest gerespecteerde verdedigingen tegen 1.d4, gericht op controle van het centrum met stukken in plaats van pionnen."
        }
      },
      {
        question: {
          en: "What is a 'windmill' tactic in chess?",
          es: "¿Qué es una táctica de 'molino de viento' en ajedrez?",
          de: "Was ist eine 'Windmühle'-Taktik im Schach?",
          nl: "Wat is een 'windmolen' tactiek in schaken?"
        },
        options: [
          { en: "A series of discovered checks winning material", es: "Una serie de jaques al descubierto ganando material", de: "Eine Serie von Abzugsschachs, die Material gewinnt", nl: "Een reeks schaakstukken door ontdekking die materiaal wint" },
          { en: "A pawn storm on the kingside", es: "Una avalancha de peones en el flanco de rey", de: "Ein Bauernsturm auf dem Königsflügel", nl: "Een pionstorm op de koningsvleugel" },
          { en: "Rotating pieces around the board", es: "Rotar piezas alrededor del tablero", de: "Figuren über das Brett rotieren", nl: "Stukken rond het bord roteren" },
          { en: "A defensive formation", es: "Una formación defensiva", de: "Eine defensive Formation", nl: "Een defensieve formatie" }
        ],
        correct: 0,
        explanation: {
          en: "A windmill is a powerful tactic involving repeated discovered checks. The checking piece moves away with check, then returns to repeat the process, often winning multiple pieces.",
          es: "Un molino de viento es una táctica poderosa que involucra jaques al descubierto repetidos. La pieza que da jaque se mueve con jaque, luego regresa para repetir el proceso, a menudo ganando múltiples piezas.",
          de: "Eine Windmühle ist eine mächtige Taktik mit wiederholten Abzugsschachs. Die schachbietende Figur bewegt sich mit Schach weg, kehrt dann zurück, um den Prozess zu wiederholen und gewinnt oft mehrere Figuren.",
          nl: "Een windmolen is een krachtige tactiek met herhaalde schaakstukken door ontdekking. Het schaakgevende stuk beweegt weg met schaak en keert dan terug om het proces te herhalen, vaak meerdere stukken winnend."
        }
      },
      {
        question: {
          en: "What is the 'Immortal Game'?",
          es: "¿Qué es el 'Juego Inmortal'?",
          de: "Was ist die 'Unsterbliche Partie'?",
          nl: "Wat is de 'Onsterfelijke Partij'?"
        },
        options: [
          { en: "A famous 1851 game by Adolf Anderssen featuring brilliant sacrifices", es: "Un famoso juego de 1851 de Adolf Anderssen con sacrificios brillantes", de: "Eine berühmte Partie von 1851 von Adolf Anderssen mit brillanten Opfern", nl: "Een beroemde partij uit 1851 van Adolf Anderssen met briljante offers" },
          { en: "A theoretical perfect game", es: "Un juego teóricamente perfecto", de: "Eine theoretisch perfekte Partie", nl: "Een theoretisch perfecte partij" },
          { en: "A game that never ends", es: "Un juego que nunca termina", de: "Eine Partie, die nie endet", nl: "Een partij die nooit eindigt" },
          { en: "A computer vs human match", es: "Una partida computadora vs humano", de: "Ein Computer-gegen-Mensch-Match", nl: "Een computer-tegen-mens wedstrijd" }
        ],
        correct: 0,
        explanation: {
          en: "The Immortal Game was played in 1851 between Adolf Anderssen and Lionel Kieseritzky. Anderssen sacrificed a bishop, both rooks, and his queen to deliver checkmate with his three remaining minor pieces.",
          es: "El Juego Inmortal se jugó en 1851 entre Adolf Anderssen y Lionel Kieseritzky. Anderssen sacrificó un alfil, ambas torres y su dama para dar jaque mate con sus tres piezas menores restantes.",
          de: "Die Unsterbliche Partie wurde 1851 zwischen Adolf Anderssen und Lionel Kieseritzky gespielt. Anderssen opferte einen Läufer, beide Türme und seine Dame, um mit seinen drei verbleibenden Leichtfiguren matt zu setzen.",
          nl: "De Onsterfelijke Partij werd in 1851 gespeeld tussen Adolf Anderssen en Lionel Kieseritzky. Anderssen offerde een loper, beide torens en zijn dame om schaakmat te geven met zijn drie resterende lichte stukken."
        }
      },
      {
        question: {
          en: "What is an 'X-ray attack' in chess?",
          es: "¿Qué es un 'ataque de rayos X' en ajedrez?",
          de: "Was ist ein 'Röntgenangriff' im Schach?",
          nl: "Wat is een 'röntgenaanval' in schaken?"
        },
        options: [
          { en: "Attacking through an enemy piece to a target behind it", es: "Atacar a través de una pieza enemiga a un objetivo detrás de ella", de: "Durch eine gegnerische Figur auf ein dahinter liegendes Ziel angreifen", nl: "Aanvallen door een vijandelijk stuk naar een doel erachter" },
          { en: "A diagonal attack pattern", es: "Un patrón de ataque diagonal", de: "Ein diagonales Angriffsmuster", nl: "Een diagonaal aanvalspatroon" },
          { en: "Using the queen and rook together", es: "Usar la dama y torre juntas", de: "Dame und Turm zusammen verwenden", nl: "De dame en toren samen gebruiken" },
          { en: "A direct attack on the king", es: "Un ataque directo al rey", de: "Ein direkter Angriff auf den König", nl: "Een directe aanval op de koning" }
        ],
        correct: 0,
        explanation: {
          en: "An X-ray attack occurs when a piece attacks through an enemy piece, controlling or attacking a square or piece behind it. Common with bishops, rooks, and queens on long diagonals or files.",
          es: "Un ataque de rayos X ocurre cuando una pieza ataca a través de una pieza enemiga, controlando o atacando una casilla o pieza detrás de ella. Común con alfiles, torres y damas en diagonales o columnas largas.",
          de: "Ein Röntgenangriff tritt auf, wenn eine Figur durch eine gegnerische Figur hindurch angreift und ein Feld oder eine Figur dahinter kontrolliert oder angreift. Häufig mit Läufern, Türmen und Damen auf langen Diagonalen oder Linien.",
          nl: "Een röntgenaanval vindt plaats wanneer een stuk door een vijandelijk stuk heen aanvalt, waarbij het een veld of stuk erachter controleert of aanvalt. Gebruikelijk met lopers, torens en dames op lange diagonalen of rijen."
        }
      },
      {
        question: {
          en: "What is 'prophylaxis' in chess strategy?",
          es: "¿Qué es la 'profilaxis' en la estrategia del ajedrez?",
          de: "Was ist 'Prophylaxe' in der Schachstrategie?",
          nl: "Wat is 'profylaxe' in de schaakstrategie?"
        },
        options: [
          { en: "Preventing opponent's threats before they occur", es: "Prevenir las amenazas del oponente antes de que ocurran", de: "Verhindern von gegnerischen Drohungen bevor sie auftreten", nl: "Bedreigingen van de tegenstander voorkomen voordat ze optreden" },
          { en: "Developing pieces quickly", es: "Desarrollar piezas rápidamente", de: "Figuren schnell entwickeln", nl: "Stukken snel ontwikkelen" },
          { en: "Trading pieces when behind in material", es: "Intercambiar piezas cuando estás en desventaja material", de: "Figuren tauschen wenn materiell im Rückstand", nl: "Stukken ruilen bij materieel nadeel" },
          { en: "Protecting the king with pawns", es: "Proteger al rey con peones", de: "Den König mit Bauern schützen", nl: "De koning beschermen met pionnen" }
        ],
        correct: 0,
        explanation: {
          en: "Prophylaxis is a strategic concept introduced by Aron Nimzowitsch involving moves that prevent or restrict the opponent's plans before they can be executed. It's about thinking ahead to stop threats.",
          es: "La profilaxis es un concepto estratégico introducido por Aron Nimzowitsch que involucra movimientos que previenen o restringen los planes del oponente antes de que puedan ejecutarse. Se trata de pensar con anticipación para detener amenazas.",
          de: "Prophylaxe ist ein strategisches Konzept, das von Aron Nimzowitsch eingeführt wurde und Züge beinhaltet, die die Pläne des Gegners verhindern oder einschränken, bevor sie ausgeführt werden können. Es geht darum, vorauszudenken, um Drohungen zu stoppen.",
          nl: "Profylaxe is een strategisch concept geïntroduceerd door Aron Nimzowitsch waarbij zetten worden gedaan die de plannen van de tegenstander voorkomen of beperken voordat ze kunnen worden uitgevoerd. Het gaat over vooruitdenken om bedreigingen te stoppen."
        }
      },
      {
        question: {
          en: "What is the 'Evergreen Game'?",
          es: "¿Qué es el 'Juego Perenne'?",
          de: "Was ist die 'Immergrüne Partie'?",
          nl: "Wat is de 'Altijdgroene Partij'?"
        },
        options: [
          { en: "An 1852 game by Anderssen with a spectacular queen sacrifice", es: "Un juego de 1852 de Anderssen con un espectacular sacrificio de dama", de: "Eine Partie von 1852 von Anderssen mit einem spektakulären Damenopfer", nl: "Een partij uit 1852 van Anderssen met een spectaculair dame-offer" },
          { en: "A game played in a forest", es: "Un juego jugado en un bosque", de: "Eine im Wald gespielte Partie", nl: "Een partij gespeeld in een bos" },
          { en: "A timeless opening strategy", es: "Una estrategia de apertura atemporal", de: "Eine zeitlose Eröffnungsstrategie", nl: "Een tijdloze openingsstrategie" },
          { en: "A draw by repetition", es: "Un empate por repetición", de: "Ein Remis durch Stellungswiederholung", nl: "Een remise door herhaling" }
        ],
        correct: 0,
        explanation: {
          en: "The Evergreen Game was played in 1852 between Adolf Anderssen and Jean Dufresne. It features a brilliant queen sacrifice on move 21 (Qxd7+) leading to a forced checkmate.",
          es: "El Juego Perenne se jugó en 1852 entre Adolf Anderssen y Jean Dufresne. Presenta un brillante sacrificio de dama en el movimiento 21 (Dxd7+) que conduce a un jaque mate forzado.",
          de: "Die Immergrüne Partie wurde 1852 zwischen Adolf Anderssen und Jean Dufresne gespielt. Sie zeigt ein brillantes Damenopfer im 21. Zug (Dxd7+), das zu einem erzwungenen Matt führt.",
          nl: "De Altijdgroene Partij werd in 1852 gespeeld tussen Adolf Anderssen en Jean Dufresne. Het bevat een briljant dame-offer op zet 21 (Dxd7+) dat leidt tot een geforceerd schaakmat."
        }
      },
      {
        question: {
          en: "What is a 'smothered mate'?",
          es: "¿Qué es un 'mate ahogado'?",
          de: "Was ist ein 'ersticktes Matt'?",
          nl: "Wat is een 'verstikt mat'?"
        },
        options: [
          { en: "Checkmate by a knight where the king is blocked by its own pieces", es: "Jaque mate por un caballo donde el rey está bloqueado por sus propias piezas", de: "Matt durch einen Springer, wobei der König durch eigene Figuren blockiert ist", nl: "Schaakmat door een paard waarbij de koning wordt geblokkeerd door zijn eigen stukken" },
          { en: "Checkmate with pawns only", es: "Jaque mate solo con peones", de: "Matt nur mit Bauern", nl: "Schaakmat met alleen pionnen" },
          { en: "Checkmate on a closed board", es: "Jaque mate en un tablero cerrado", de: "Matt auf einem geschlossenen Brett", nl: "Schaakmat op een gesloten bord" },
          { en: "Checkmate in the opening", es: "Jaque mate en la apertura", de: "Matt in der Eröffnung", nl: "Schaakmat in de opening" }
        ],
        correct: 0,
        explanation: {
          en: "A smothered mate occurs when a knight delivers checkmate to a king that is completely surrounded and blocked by its own pieces, unable to escape. It's one of the most distinctive checkmate patterns.",
          es: "Un mate ahogado ocurre cuando un caballo da jaque mate a un rey que está completamente rodeado y bloqueado por sus propias piezas, incapaz de escapar. Es uno de los patrones de jaque mate más distintivos.",
          de: "Ein ersticktes Matt tritt auf, wenn ein Springer einem König Matt setzt, der vollständig von seinen eigenen Figuren umgeben und blockiert ist und nicht entkommen kann. Es ist eines der charakteristischsten Mattmuster.",
          nl: "Een verstikt mat vindt plaats wanneer een paard schaakmat geeft aan een koning die volledig omringd en geblokkeerd wordt door zijn eigen stukken en niet kan ontsnappen. Het is een van de meest kenmerkende schaakmatpatronen."
        }
      },
      {
        question: {
          en: "What is the 'Stonewall' formation?",
          es: "¿Qué es la formación 'Muro de Piedra'?",
          de: "Was ist die 'Stonewall'-Formation?",
          nl: "Wat is de 'Stonewall' formatie?"
        },
        options: [
          { en: "A pawn structure with pawns on c3, d4, e3, and f4", es: "Una estructura de peones con peones en c3, d4, e3 y f4", de: "Eine Bauernstruktur mit Bauern auf c3, d4, e3 und f4", nl: "Een pionstructuur met pionnen op c3, d4, e3 en f4" },
          { en: "A defensive king position", es: "Una posición defensiva del rey", de: "Eine defensive Königsstellung", nl: "Een defensieve koningspositie" },
          { en: "A rook endgame technique", es: "Una técnica de final de torres", de: "Eine Turmendspiel-Technik", nl: "Een toreneindspeltechniek" },
          { en: "A tactical maneuver", es: "Una maniobra táctica", de: "Ein taktisches Manöver", nl: "Een tactische manoeuvre" }
        ],
        correct: 0,
        explanation: {
          en: "The Stonewall formation features pawns on c3 (or c6), d4 (or d5), e3 (or e6), and f4 (or f5), creating a solid but somewhat rigid structure. It can be played by both White and Black.",
          es: "La formación Muro de Piedra presenta peones en c3 (o c6), d4 (o d5), e3 (o e6) y f4 (o f5), creando una estructura sólida pero algo rígida. Puede ser jugada tanto por blancas como por negras.",
          de: "Die Stonewall-Formation zeigt Bauern auf c3 (oder c6), d4 (oder d5), e3 (oder e6) und f4 (oder f5), was eine solide, aber etwas starre Struktur schafft. Sie kann sowohl von Weiß als auch von Schwarz gespielt werden.",
          nl: "De Stonewall-formatie heeft pionnen op c3 (of c6), d4 (of d5), e3 (of e6) en f4 (of f5), wat een solide maar enigszins rigide structuur creëert. Het kan zowel door wit als zwart worden gespeeld."
        }
      },
      {
        question: {
          en: "What is an 'outpost' in chess?",
          es: "¿Qué es un 'puesto avanzado' en ajedrez?",
          de: "Was ist ein 'Außenposten' im Schach?",
          nl: "Wat is een 'buitenpost' in schaken?"
        },
        options: [
          { en: "A square protected by a pawn where a piece cannot be attacked by enemy pawns", es: "Una casilla protegida por un peón donde una pieza no puede ser atacada por peones enemigos", de: "Ein Feld, das durch einen Bauern geschützt ist, wo eine Figur nicht von gegnerischen Bauern angegriffen werden kann", nl: "Een veld beschermd door een pion waar een stuk niet kan worden aangevallen door vijandelijke pionnen" },
          { en: "A piece positioned on the edge of the board", es: "Una pieza posicionada en el borde del tablero", de: "Eine am Brettrand positionierte Figur", nl: "Een stuk gepositioneerd aan de rand van het bord" },
          { en: "A forward pawn", es: "Un peón avanzado", de: "Ein vorgerückter Bauer", nl: "Een vooruitgeschoven pion" },
          { en: "The king's safe position", es: "La posición segura del rey", de: "Die sichere Position des Königs", nl: "De veilige positie van de koning" }
        ],
        correct: 0,
        explanation: {
          en: "An outpost is a square in the enemy's half of the board, protected by one's own pawn, where a piece (especially a knight) can be securely placed without being attacked by enemy pawns.",
          es: "Un puesto avanzado es una casilla en la mitad del tablero del enemigo, protegida por el propio peón, donde una pieza (especialmente un caballo) puede colocarse de forma segura sin ser atacada por peones enemigos.",
          de: "Ein Außenposten ist ein Feld in der gegnerischen Bretthälfte, das durch einen eigenen Bauern geschützt ist, wo eine Figur (besonders ein Springer) sicher platziert werden kann, ohne von gegnerischen Bauern angegriffen zu werden.",
          nl: "Een buitenpost is een veld in de vijandelijke helft van het bord, beschermd door je eigen pion, waar een stuk (vooral een paard) veilig kan worden geplaatst zonder te worden aangevallen door vijandelijke pionnen."
        }
      },
      {
        question: {
          en: "What is the 'Benko Gambit'?",
          es: "¿Qué es el 'Gambito Benko'?",
          de: "Was ist das 'Benko-Gambit'?",
          nl: "Wat is het 'Benko Gambiet'?"
        },
        options: [
          { en: "A queenside pawn sacrifice for long-term positional compensation", es: "Un sacrificio de peón en el flanco de dama para compensación posicional a largo plazo", de: "Ein Bauernopfer am Damenflügel für langfristige positionelle Kompensation", nl: "Een damezijde pionoffer voor langdurige positionele compensatie" },
          { en: "A central pawn advance", es: "Un avance de peón central", de: "Ein zentraler Bauernstoß", nl: "Een centrale pionopstoot" },
          { en: "A king's gambit variation", es: "Una variación del gambito de rey", de: "Eine Königsgambit-Variante", nl: "Een variatie op het koningsgambiet" },
          { en: "A defensive pawn structure", es: "Una estructura de peones defensiva", de: "Eine defensive Bauernstruktur", nl: "Een defensieve pionstructuur" }
        ],
        correct: 0,
        explanation: {
          en: "The Benko Gambit (1.d4 Nf6 2.c4 c5 3.d5 b5) involves Black sacrificing a pawn on the queenside to gain lasting pressure on White's queenside with open files and active piece play.",
          es: "El Gambito Benko (1.d4 Cf6 2.c4 c5 3.d5 b5) implica que las negras sacrifiquen un peón en el flanco de dama para ganar presión duradera sobre el flanco de dama de las blancas con columnas abiertas y juego de piezas activo.",
          de: "Das Benko-Gambit (1.d4 Sf6 2.c4 c5 3.d5 b5) beinhaltet, dass Schwarz einen Bauern am Damenflügel opfert, um dauerhaften Druck auf Weiß' Damenflügel mit offenen Linien und aktivem Figurenspiel zu gewinnen.",
          nl: "Het Benko Gambiet (1.d4 Pf6 2.c4 c5 3.d5 b5) houdt in dat zwart een pion aan de damezijde offert om blijvende druk op de damezijde van wit te krijgen met open rijen en actief stukspel."
        }
      },
      {
        question: {
          en: "What is 'triangulation' in chess endgames?",
          es: "¿Qué es la 'triangulación' en los finales de ajedrez?",
          de: "Was ist 'Triangulation' in Schachendspielen?",
          nl: "Wat is 'triangulatie' in schaakeindspelen?"
        },
        options: [
          { en: "A king maneuver to lose a tempo while maintaining position", es: "Una maniobra del rey para perder un tiempo mientras mantiene la posición", de: "Ein Königsmanöver, um ein Tempo zu verlieren und dabei die Stellung zu halten", nl: "Een koningsmanoeuvre om een tempo te verliezen terwijl de positie behouden blijft" },
          { en: "Moving three pieces to form a triangle", es: "Mover tres piezas para formar un triángulo", de: "Drei Figuren bewegen, um ein Dreieck zu bilden", nl: "Drie stukken bewegen om een driehoek te vormen" },
          { en: "A tactical pattern", es: "Un patrón táctico", de: "Ein taktisches Muster", nl: "Een tactisch patroon" },
          { en: "Controlling three key squares", es: "Controlar tres casillas clave", de: "Drei Schlüsselfelder kontrollieren", nl: "Drie sleutelvelden controleren" }
        ],
        correct: 0,
        explanation: {
          en: "Triangulation is an endgame technique where a king moves in a triangular path to lose a tempo, effectively passing the move to the opponent and gaining a favorable position, often achieving zugzwang.",
          es: "La triangulación es una técnica de final donde un rey se mueve en un camino triangular para perder un tiempo, efectivamente pasando el movimiento al oponente y ganando una posición favorable, a menudo logrando zugzwang.",
          de: "Triangulation ist eine Endspiel-Technik, bei der ein König in einem dreieckigen Pfad zieht, um ein Tempo zu verlieren, effektiv den Zug an den Gegner weiterzugeben und eine günstige Stellung zu erreichen, oft durch Erreichen von Zugzwang.",
          nl: "Triangulatie is een eindspeltechniek waarbij een koning in een driehoekig pad beweegt om een tempo te verliezen, effectief de zet aan de tegenstander doorgevend en een gunstige positie krijgend, vaak door zugzwang te bereiken."
        }
      },
      {
        question: {
          en: "What is a 'hanging pawns' structure?",
          es: "¿Qué es una estructura de 'peones colgantes'?",
          de: "Was ist eine 'hängende Bauern'-Struktur?",
          nl: "Wat is een 'hangende pionnen' structuur?"
        },
        options: [
          { en: "Two adjacent center pawns with no pawn support", es: "Dos peones centrales adyacentes sin apoyo de peones", de: "Zwei benachbarte zentrale Bauern ohne Bauernunterstützung", nl: "Twee aangrenzende centrale pionnen zonder pionondersteuning" },
          { en: "Isolated pawns on both wings", es: "Peones aislados en ambos flancos", de: "Isolierte Bauern auf beiden Flügeln", nl: "Geïsoleerde pionnen op beide vleugels" },
          { en: "Pawns about to be captured", es: "Peones a punto de ser capturados", de: "Bauern, die geschlagen werden", nl: "Pionnen die op het punt staan geslagen te worden" },
          { en: "Backward pawns", es: "Peones retrasados", de: "Zurückgebliebene Bauern", nl: "Achtergebleven pionnen" }
        ],
        correct: 0,
        explanation: {
          en: "Hanging pawns are two adjacent pawns (typically on c4 and d4 or c5 and d5) on half-open files with no pawn support from adjacent files. They're both a strength (control space) and a weakness (vulnerable to attack).",
          es: "Los peones colgantes son dos peones adyacentes (típicamente en c4 y d4 o c5 y d5) en columnas semiabiertas sin apoyo de peones de columnas adyacentes. Son tanto una fortaleza (controlan espacio) como una debilidad (vulnerables al ataque).",
          de: "Hängende Bauern sind zwei benachbarte Bauern (typischerweise auf c4 und d4 oder c5 und d5) auf halboffenen Linien ohne Bauernunterstützung von benachbarten Linien. Sie sind sowohl eine Stärke (kontrollieren Raum) als auch eine Schwäche (anfällig für Angriffe).",
          nl: "Hangende pionnen zijn twee aangrenzende pionnen (meestal op c4 en d4 of c5 en d5) op halfopen rijen zonder pionondersteuning van aangrenzende rijen. Ze zijn zowel een sterkte (controleren ruimte) als een zwakte (kwetsbaar voor aanvallen)."
        }
      },
      {
        question: {
          en: "What is the 'Opera Game'?",
          es: "¿Qué es el 'Juego de la Ópera'?",
          de: "Was ist die 'Opern-Partie'?",
          nl: "Wat is de 'Opera Partij'?"
        },
        options: [
          { en: "A brilliant 1858 game by Paul Morphy played at the opera", es: "Un brillante juego de 1858 de Paul Morphy jugado en la ópera", de: "Eine brillante Partie von 1858 von Paul Morphy in der Oper gespielt", nl: "Een briljante partij uit 1858 van Paul Morphy gespeeld in de opera" },
          { en: "A game with musical moves", es: "Un juego con movimientos musicales", de: "Eine Partie mit musikalischen Zügen", nl: "Een partij met muzikale zetten" },
          { en: "A dramatic comeback victory", es: "Una victoria de regreso dramática", de: "Ein dramatischer Comeback-Sieg", nl: "Een dramatische comeback overwinning" },
          { en: "A famous draw", es: "Un famoso empate", de: "Ein berühmtes Remis", nl: "Een beroemde remise" }
        ],
        correct: 0,
        explanation: {
          en: "The Opera Game was played by Paul Morphy in 1858 against the Duke of Brunswick and Count Isouard at the Paris Opera. It's famous for Morphy's brilliant sacrificial attack leading to checkmate in just 17 moves.",
          es: "El Juego de la Ópera fue jugado por Paul Morphy en 1858 contra el Duque de Brunswick y el Conde Isouard en la Ópera de París. Es famoso por el brillante ataque con sacrificios de Morphy que conduce al jaque mate en solo 17 movimientos.",
          de: "Die Opern-Partie wurde von Paul Morphy 1858 gegen den Herzog von Braunschweig und Graf Isouard in der Pariser Oper gespielt. Sie ist berühmt für Morphys brillanten Opferangriff, der in nur 17 Zügen zum Matt führt.",
          nl: "De Opera Partij werd in 1858 gespeeld door Paul Morphy tegen de Hertog van Brunswick en Graaf Isouard in de Parijse Opera. Het is beroemd om Morphy's briljante offeraanval die leidde tot schaakmat in slechts 17 zetten."
        }
      },
      {
        question: {
          en: "What is the 'Najdorf Variation'?",
          es: "¿Qué es la 'Variación Najdorf'?",
          de: "Was ist die 'Najdorf-Variante'?",
          nl: "Wat is de 'Najdorf Variant'?"
        },
        options: [
          { en: "A sharp Sicilian Defense variation with 5...a6", es: "Una variación aguda de la Defensa Siciliana con 5...a6", de: "Eine scharfe Sizilianische-Verteidigungs-Variante mit 5...a6", nl: "Een scherpe Siciliaanse Verdediging variant met 5...a6" },
          { en: "A Queen's Gambit line", es: "Una línea del Gambito de Dama", de: "Eine Damengambit-Linie", nl: "Een Damegambiet lijn" },
          { en: "A king's pawn opening", es: "Una apertura de peón de rey", de: "Eine Königsbauer-Eröffnung", nl: "Een koningspionopening" },
          { en: "An endgame technique", es: "Una técnica de final", de: "Eine Endspiel-Technik", nl: "Een eindspeltechniek" }
        ],
        correct: 0,
        explanation: {
          en: "The Najdorf Variation (1.e4 c5 2.Nf3 d6 3.d4 cxd4 4.Nxd4 Nf6 5.Nc3 a6) is one of the sharpest and most popular lines in the Sicilian Defense, named after Miguel Najdorf. It's been played by many world champions.",
          es: "La Variación Najdorf (1.e4 c5 2.Cf3 d6 3.d4 cxd4 4.Cxd4 Cf6 5.Cc3 a6) es una de las líneas más agudas y populares de la Defensa Siciliana, nombrada en honor a Miguel Najdorf. Ha sido jugada por muchos campeones mundiales.",
          de: "Die Najdorf-Variante (1.e4 c5 2.Sf3 d6 3.d4 cxd4 4.Sxd4 Sf6 5.Sc3 a6) ist eine der schärfsten und beliebtesten Linien in der Sizilianischen Verteidigung, benannt nach Miguel Najdorf. Sie wurde von vielen Weltmeistern gespielt.",
          nl: "De Najdorf Variant (1.e4 c5 2.Pf3 d6 3.d4 cxd4 4.Pxd4 Pf6 5.Pc3 a6) is een van de scherpste en meest populaire lijnen in de Siciliaanse Verdediging, vernoemd naar Miguel Najdorf. Het is gespeeld door veel wereldkampioenen."
        }
      },
      {
        question: {
          en: "What is a 'zwischenzug'?",
          es: "¿Qué es un 'zwischenzug'?",
          de: "Was ist ein 'Zwischenzug'?",
          nl: "Wat is een 'zwischenzug'?"
        },
        options: [
          { en: "An in-between move that changes the expected sequence", es: "Un movimiento intermedio que cambia la secuencia esperada", de: "Ein Zwischenzug, der die erwartete Abfolge ändert", nl: "Een tussenliggende zet die de verwachte volgorde verandert" },
          { en: "A German opening", es: "Una apertura alemana", de: "Eine deutsche Eröffnung", nl: "Een Duitse opening" },
          { en: "A type of endgame", es: "Un tipo de final", de: "Eine Art Endspiel", nl: "Een soort eindspel" },
          { en: "A defensive maneuver", es: "Una maniobra defensiva", de: "Ein defensives Manöver", nl: "Een defensieve manoeuvre" }
        ],
        correct: 0,
        explanation: {
          en: "A zwischenzug (German for 'in-between move') is an unexpected intermediate move inserted into an apparently forced sequence. It often involves a check or capture that changes the evaluation of the position.",
          es: "Un zwischenzug (alemán para 'movimiento intermedio') es un movimiento intermedio inesperado insertado en una secuencia aparentemente forzada. A menudo involucra un jaque o captura que cambia la evaluación de la posición.",
          de: "Ein Zwischenzug ist ein unerwarteter Zwischenzug, der in eine scheinbar erzwungene Zugfolge eingefügt wird. Er beinhaltet oft ein Schach oder einen Schlagzug, der die Bewertung der Stellung ändert.",
          nl: "Een zwischenzug (Duits voor 'tussenzet') is een onverwachte tussenliggende zet die wordt ingevoegd in een ogenschijnlijk geforceerde reeks. Het omvat vaak een schaak of slag die de evaluatie van de positie verandert."
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
