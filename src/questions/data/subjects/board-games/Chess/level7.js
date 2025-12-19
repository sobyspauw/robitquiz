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
      },
      {
        question: {
          en: "What is the 'King's Indian Defense'?",
          es: "¿Qué es la 'Defensa India de Rey'?",
          de: "Was ist die 'Königsindische Verteidigung'?",
          nl: "Wat is de 'Koningsindische Verdediging'?"
        },
        options: [
          { en: "Hypermodern defense with g6, Bg7, d6 setup", es: "Defensa hipermoderna con configuración g6, Ag7, d6", de: "Hypermoderne Verteidigung mit g6, Lg7, d6 Aufstellung", nl: "Hypermoderne verdediging met g6, Lg7, d6 opstelling" },
          { en: "Early queen development", es: "Desarrollo temprano de reina", de: "Frühe Damenentwicklung", nl: "Vroege dame-ontwikkeling" },
          { en: "Central pawn advance", es: "Avance de peones central", de: "Zentraler Bauernvorstoß", nl: "Centrale pionopmars" },
          { en: "Queenside attack system", es: "Sistema de ataque de dama", de: "Damenflügel-Angriffssystem", nl: "Damevleugel aanvalssysteem" }
        ],
        correct: 0,
        explanation: {
          en: "The King's Indian Defense (1.d4 Nf6 2.c4 g6) is a hypermodern opening where Black fianchettoes the kingside bishop and prepares counterplay in the center and kingside, often leading to sharp tactical battles.",
          es: "La Defensa India de Rey (1.d4 Cf6 2.c4 g6) es una apertura hipermoderna donde las negras desarrollan en fianchetto el alfil del flanco de rey y preparan contrajuego en el centro y flanco de rey, a menudo llevando a batallas tácticas agudas.",
          de: "Die Königsindische Verteidigung (1.d4 Sf6 2.c4 g6) ist eine hypermoderne Eröffnung, bei der Schwarz den Königsflügel-Läufer fianchettiert und Gegenspiel im Zentrum und Königsflügel vorbereitet, oft zu scharfen taktischen Kämpfen führend.",
          nl: "De Koningsindische Verdediging (1.d4 Pf6 2.c4 g6) is een hypermoderne opening waarbij zwart de koningsvleugelloper fianchetteert en tegenaanval in het centrum en op de koningsvleugel voorbereidt, vaak leidend tot scherpe tactische gevechten."
        }
      },
      {
        question: {
          en: "What is 'deflection' as a tactical motif?",
          es: "¿Qué es la 'desviación' como motivo táctico?",
          de: "Was ist 'Ablenkung' als taktisches Motiv?",
          nl: "Wat is 'afleiding' als tactisch motief?"
        },
        options: [
          { en: "Forcing piece away from defending important square", es: "Forzar pieza lejos de defender casilla importante", de: "Figur von Verteidigung wichtigen Feldes wegzwingen", nl: "Stuk wegdwingen van verdedigen belangrijk veld" },
          { en: "Moving pawns sideways", es: "Mover peones lateralmente", de: "Bauern seitwärts bewegen", nl: "Pionnen zijwaarts bewegen" },
          { en: "Changing opening plans", es: "Cambiar planes de apertura", de: "Eröffnungspläne ändern", nl: "Openingsplannen veranderen" },
          { en: "King retreat", es: "Retirada del rey", de: "Königsrückzug", nl: "Koningterugtrekking" }
        },
        correct: 0,
        explanation: {
          en: "Deflection is a tactical motif where you force an opponent's piece to leave a square it's defending, typically through a sacrifice or forcing move, allowing you to exploit the undefended target.",
          es: "La desviación es un motivo táctico donde fuerzas a una pieza del oponente a abandonar una casilla que está defendiendo, típicamente a través de un sacrificio o movimiento forzado, permitiéndote explotar el objetivo no defendido.",
          de: "Ablenkung ist ein taktisches Motiv, bei dem Sie eine gegnerische Figur zwingen, ein Feld zu verlassen, das sie verteidigt, typischerweise durch ein Opfer oder einen erzwingenden Zug, wodurch Sie das unverteidigte Ziel ausnutzen können.",
          nl: "Afleiding is een tactisch motief waarbij je een stuk van de tegenstander dwingt een veld te verlaten dat het verdedigt, meestal door een offer of forcerende zet, waardoor je het onverdedigde doelwit kunt uitbuiten."
        }
      },
      {
        question: {
          en: "What is the 'English Opening'?",
          es: "¿Qué es la 'Apertura Inglesa'?",
          de: "Was ist die 'Englische Eröffnung'?",
          nl: "Wat is de 'Engelse Opening'?"
        },
        options: [
          { en: "1.c4, flexible flank opening", es: "1.c4, apertura de flanco flexible", de: "1.c4, flexible Flanken-Eröffnung", nl: "1.c4, flexibele vleugel opening" },
          { en: "1.e4 e5 system", es: "Sistema 1.e4 e5", de: "1.e4 e5 System", nl: "1.e4 e5 systeem" },
          { en: "Early Nf3 development", es: "Desarrollo temprano de Cf3", de: "Frühe Sf3-Entwicklung", nl: "Vroege Pf3 ontwikkeling" },
          { en: "Queen's pawn opening", es: "Apertura de peón de dama", de: "Damenbauer-Eröffnung", nl: "Damepionopening" }
        ],
        correct: 0,
        explanation: {
          en: "The English Opening (1.c4) is a flexible flank opening that controls the center from the side rather than occupying it immediately. It can transpose into many different structures and was popularized by Howard Staunton.",
          es: "La Apertura Inglesa (1.c4) es una apertura de flanco flexible que controla el centro desde el lado en lugar de ocuparlo inmediatamente. Puede transponer a muchas estructuras diferentes y fue popularizada por Howard Staunton.",
          de: "Die Englische Eröffnung (1.c4) ist eine flexible Flanken-Eröffnung, die das Zentrum von der Seite kontrolliert, anstatt es sofort zu besetzen. Sie kann in viele verschiedene Strukturen transponieren und wurde von Howard Staunton popularisiert.",
          nl: "De Engelse Opening (1.c4) is een flexibele vleugelopening die het centrum van de zijkant controleert in plaats van het onmiddellijk te bezetten. Het kan transponeren naar veel verschillende structuren en werd gepopulariseerd door Howard Staunton."
        }
      },
      {
        question: {
          en: "What is 'retrograde analysis' in chess problems?",
          es: "¿Qué es el 'análisis retrógrado' en problemas de ajedrez?",
          de: "Was ist 'Retrograde-Analyse' in Schachproblemen?",
          nl: "Wat is 'retrograde analyse' in schaakproblemen?"
        },
        options: [
          { en: "Working backward from position to determine past moves", es: "Trabajar hacia atrás desde posición para determinar movimientos pasados", de: "Von Position rückwärts arbeiten um vergangene Züge zu bestimmen", nl: "Achterwaarts werken vanaf positie om eerdere zetten te bepalen" },
          { en: "Analyzing endgames only", es: "Analizar solo finales", de: "Nur Endspiele analysieren", nl: "Alleen eindspelen analyseren" },
          { en: "Computer evaluation", es: "Evaluación por computadora", de: "Computer-Bewertung", nl: "Computerevaluatie" },
          { en: "Opening preparation", es: "Preparación de apertura", de: "Eröffnungsvorbereitung", nl: "Openingsvoorbereiding" }
        ],
        correct: 0,
        explanation: {
          en: "Retrograde analysis is a method used in chess problems where you work backward from a given position to deduce what moves must have been played to reach it, often to determine castling rights or en passant possibilities.",
          es: "El análisis retrógrado es un método usado en problemas de ajedrez donde trabajas hacia atrás desde una posición dada para deducir qué movimientos deben haberse jugado para alcanzarla, a menudo para determinar derechos de enroque o posibilidades de captura al paso.",
          de: "Retrograde-Analyse ist eine Methode in Schachproblemen, bei der Sie von einer gegebenen Position rückwärts arbeiten, um zu deduzieren, welche Züge gespielt worden sein müssen, um sie zu erreichen, oft um Rochaderechte oder En-passant-Möglichkeiten zu bestimmen.",
          nl: "Retrograde analyse is een methode gebruikt in schaakproblemen waarbij je achterwaarts werkt vanaf een gegeven positie om te deduceren welke zetten gespeeld moeten zijn om het te bereiken, vaak om rokaderechten of en passant mogelijkheden te bepalen."
        }
      },
      {
        question: {
          en: "What is the 'Botvinnik System' in the English Opening?",
          es: "¿Qué es el 'Sistema Botvinnik' en la Apertura Inglesa?",
          de: "Was ist das 'Botvinnik-System' in der Englischen Eröffnung?",
          nl: "Wat is het 'Botvinnik Systeem' in de Engelse Opening?"
        },
        options: [
          { en: "Reversed Sicilian setup with e4, d3, Be2", es: "Configuración Siciliana invertida con e4, d3, Ae2", de: "Umgekehrte sizilianische Aufstellung mit e4, d3, Le2", nl: "Omgekeerde Siciliaanse opstelling met e4, d3, Le2" },
          { en: "Queen's Gambit variation", es: "Variación del Gambito de Dama", de: "Damengambit-Variante", nl: "Damegambiet variant" },
          { en: "King's Indian setup", es: "Configuración India de Rey", de: "Königsindische Aufstellung", nl: "Koningsindische opstelling" },
          { en: "Early queen trade", es: "Cambio temprano de reinas", de: "Früher Damentausch", nl: "Vroege dameruil" }
        ],
        correct: 0,
        explanation: {
          en: "The Botvinnik System in the English Opening features a reversed Sicilian structure with moves like e4, d3, Be2, and often f4, creating aggressive attacking chances. It's named after former World Champion Mikhail Botvinnik.",
          es: "El Sistema Botvinnik en la Apertura Inglesa presenta una estructura Siciliana invertida con movimientos como e4, d3, Ae2, y a menudo f4, creando posibilidades de ataque agresivas. Lleva el nombre del ex Campeón Mundial Mijaíl Botvínnik.",
          de: "Das Botvinnik-System in der Englischen Eröffnung zeigt eine umgekehrte sizilianische Struktur mit Zügen wie e4, d3, Le2 und oft f4, die aggressive Angriffschancen schafft. Es ist nach dem ehemaligen Weltmeister Michail Botwinnik benannt.",
          nl: "Het Botvinnik Systeem in de Engelse Opening toont een omgekeerde Siciliaanse structuur met zetten als e4, d3, Le2, en vaak f4, die agressieve aanvalskansen creëert. Het is vernoemd naar voormalig Wereldkampioen Michail Botvinnik."
        }
      },
      {
        question: {
          en: "What is 'smothered mate'?",
          es: "¿Qué es el 'mate ahogado'?",
          de: "Was ist 'ersticktes Matt'?",
          nl: "Wat is 'verstikkende mat'?"
        },
        options: [
          { en: "Checkmate by knight with king blocked by own pieces", es: "Jaque mate por caballo con rey bloqueado por propias piezas", de: "Matt durch Springer mit König blockiert von eigenen Figuren", nl: "Schaakmat door paard met koning geblokkeerd door eigen stukken" },
          { en: "Back rank mate", es: "Mate en la última fila", de: "Grundreihen-Matt", nl: "Achterlijn mat" },
          { en: "Queen and rook mate", es: "Mate de reina y torre", de: "Damen-Turm-Matt", nl: "Dame en toren mat" },
          { en: "Stalemate position", es: "Posición de ahogado", de: "Patt-Stellung", nl: "Patpositie" }
        ],
        correct: 0,
        explanation: {
          en: "Smothered mate is a checkmate pattern where a knight delivers mate to a king that is completely surrounded and blocked by its own pieces, preventing any escape squares. The most famous example is Philidor's Legacy.",
          es: "El mate ahogado es un patrón de jaque mate donde un caballo da mate a un rey que está completamente rodeado y bloqueado por sus propias piezas, impidiendo cualquier casilla de escape. El ejemplo más famoso es el Legado de Philidor.",
          de: "Ersticktes Matt ist ein Mattmuster, bei dem ein Springer einem König Matt gibt, der vollständig von seinen eigenen Figuren umgeben und blockiert ist, was jegliche Fluchtfelder verhindert. Das berühmteste Beispiel ist Philidors Vermächtnis.",
          nl: "Verstikkende mat is een schaakmatpatroon waarbij een paard mat geeft aan een koning die volledig omringd en geblokkeerd is door zijn eigen stukken, waardoor alle ontsnapvelden worden voorkomen. Het meest beroemde voorbeeld is Philidors Erfenis."
        }
      },
      {
        question: {
          en: "What is the 'Accelerated Dragon'?",
          es: "¿Qué es el 'Dragón Acelerado'?",
          de: "Was ist der 'Beschleunigte Drache'?",
          nl: "Wat is de 'Versnelde Draak'?"
        },
        options: [
          { en: "Sicilian variation with g6 before d6", es: "Variación Siciliana con g6 antes de d6", de: "Sizilianische Variante mit g6 vor d6", nl: "Siciliaanse variant met g6 voor d6" },
          { en: "Rapid kingside attack", es: "Ataque rápido en flanco de rey", de: "Schneller Königsflügelangriff", nl: "Snelle aanval op koningsvleugel" },
          { en: "Quick development opening", es: "Apertura de desarrollo rápido", de: "Schnellentwicklungs-Eröffnung", nl: "Snelle ontwikkeling opening" },
          { en: "Fast pawn advance", es: "Avance rápido de peones", de: "Schneller Bauernvorstoß", nl: "Snelle pionopmars" }
        ],
        correct: 0,
        explanation: {
          en: "The Accelerated Dragon (1.e4 c5 2.Nf3 Nc6 3.d4 cxd4 4.Nxd4 g6) is a Sicilian variation where Black plays g6 immediately without d6 first, aiming to avoid the Yugoslav Attack and maintain more flexible pawn structure.",
          es: "El Dragón Acelerado (1.e4 c5 2.Cf3 Cc6 3.d4 cxd4 4.Cxd4 g6) es una variación Siciliana donde las negras juegan g6 inmediatamente sin d6 primero, con el objetivo de evitar el Ataque Yugoslavo y mantener una estructura de peones más flexible.",
          de: "Der Beschleunigte Drache (1.e4 c5 2.Sf3 Sc6 3.d4 cxd4 4.Sxd4 g6) ist eine sizilianische Variante, bei der Schwarz g6 sofort ohne d6 zuerst spielt, um den jugoslawischen Angriff zu vermeiden und eine flexiblere Bauernstruktur beizubehalten.",
          nl: "De Versnelde Draak (1.e4 c5 2.Pf3 Pc6 3.d4 cxd4 4.Pxd4 g6) is een Siciliaanse variant waarbij zwart g6 onmiddellijk speelt zonder eerst d6, met als doel de Joegoslavische Aanval te vermijden en een flexibelere pionstructuur te behouden."
        }
      },
      {
        question: {
          en: "What is 'development' in the opening phase?",
          es: "¿Qué es el 'desarrollo' en la fase de apertura?",
          de: "Was ist 'Entwicklung' in der Eröffnungsphase?",
          nl: "Wat is 'ontwikkeling' in de openingsfase?"
        },
        options: [
          { en: "Moving pieces from starting squares to active positions", es: "Mover piezas de casillas iniciales a posiciones activas", de: "Figuren von Startfeldern auf aktive Positionen bewegen", nl: "Stukken van startvelden naar actieve posities verplaatsen" },
          { en: "Improving pawn structure", es: "Mejorar estructura de peones", de: "Bauernstruktur verbessern", nl: "Pionstructuur verbeteren" },
          { en: "Attacking opponent's king", es: "Atacar rey del oponente", de: "Gegnerischen König angreifen", nl: "Koning van tegenstander aanvallen" },
          { en: "Trading pieces", es: "Intercambiar piezas", de: "Figuren tauschen", nl: "Stukken ruilen" }
        ],
        correct: 0,
        explanation: {
          en: "Development refers to the process of moving your pieces from their starting positions to more active, useful squares in the opening. Good development principles include developing knights before bishops, castling early, and not moving the same piece twice unnecessarily.",
          es: "El desarrollo se refiere al proceso de mover tus piezas desde sus posiciones iniciales a casillas más activas y útiles en la apertura. Los buenos principios de desarrollo incluyen desarrollar caballos antes que alfiles, enrocar temprano y no mover la misma pieza dos veces innecesariamente.",
          de: "Entwicklung bezieht sich auf den Prozess, Ihre Figuren von ihren Startpositionen zu aktiveren, nützlicheren Feldern in der Eröffnung zu bewegen. Gute Entwicklungsprinzipien umfassen die Entwicklung von Springern vor Läufern, frühes Rochieren und nicht unnötig dieselbe Figur zweimal zu bewegen.",
          nl: "Ontwikkeling verwijst naar het proces van het verplaatsen van je stukken van hun startposities naar actiever, nuttiger velden in de opening. Goede ontwikkelingsprincipes omvatten paarden ontwikkelen voor lopers, vroeg rokeren en niet onnodig hetzelfde stuk twee keer bewegen."
        }
      },
      {
        question: {
          en: "What is the 'Marshall Attack' in the Ruy Lopez?",
          es: "¿Qué es el 'Ataque Marshall' en la Ruy Lopez?",
          de: "Was ist der 'Marshall-Angriff' in der Spanischen Partie?",
          nl: "Wat is de 'Marshall Aanval' in de Ruy Lopez?"
        },
        options: [
          { en: "Sharp gambit with 8...d5 sacrificing pawn for attack", es: "Gambito agudo con 8...d5 sacrificando peón para ataque", de: "Scharfes Gambit mit 8...d5 opfert Bauer für Angriff", nl: "Scherp gambiet met 8...d5 pianoffer voor aanval" },
          { en: "Quiet positional line", es: "Línea posicional tranquila", de: "Ruhige Positionslinie", nl: "Rustige positionele lijn" },
          { en: "Endgame strategy", es: "Estrategia de final", de: "Endspielstrategie", nl: "Eindspelstrategie" },
          { en: "Defensive setup", es: "Configuración defensiva", de: "Defensive Aufstellung", nl: "Defensieve opstelling" }
        ],
        correct: 0,
        explanation: {
          en: "The Marshall Attack (1.e4 e5 2.Nf3 Nc6 3.Bb5 a6 4.Ba4 Nf6 5.O-O Be7 6.Re1 b5 7.Bb3 O-O 8.c3 d5) is a sharp gambit where Black sacrifices a pawn for strong attacking chances against White's king, named after Frank Marshall.",
          es: "El Ataque Marshall (1.e4 e5 2.Cf3 Cc6 3.Ab5 a6 4.Aa4 Cf6 5.O-O Ae7 6.Te1 b5 7.Ab3 O-O 8.c3 d5) es un gambito agudo donde las negras sacrifican un peón por fuertes posibilidades de ataque contra el rey blanco, nombrado en honor a Frank Marshall.",
          de: "Der Marshall-Angriff (1.e4 e5 2.Sf3 Sc6 3.Lb5 a6 4.La4 Sf6 5.O-O Le7 6.Te1 b5 7.Lb3 O-O 8.c3 d5) ist ein scharfes Gambit, bei dem Schwarz einen Bauern für starke Angriffschancen gegen den weißen König opfert, benannt nach Frank Marshall.",
          nl: "De Marshall Aanval (1.e4 e5 2.Pf3 Pc6 3.Lb5 a6 4.La4 Pf6 5.O-O Le7 6.Te1 b5 7.Lb3 O-O 8.c3 d5) is een scherp gambiet waarbij zwart een pion offert voor sterke aanvalskansen tegen wits koning, vernoemd naar Frank Marshall."
        }
      },
      {
        question: {
          en: "What is 'dynamic play' in chess?",
          es: "¿Qué es el 'juego dinámico' en ajedrez?",
          de: "Was ist 'dynamisches Spiel' im Schach?",
          nl: "Wat is 'dynamisch spel' in schaak?"
        },
        options: [
          { en: "Active, tactical play emphasizing piece activity over material", es: "Juego activo y táctico enfatizando actividad de piezas sobre material", de: "Aktives, taktisches Spiel mit Betonung auf Figurenaktivität über Material", nl: "Actief, tactisch spel met nadruk op stukactiviteit boven materiaal" },
          { en: "Fast time control games", es: "Juegos de control de tiempo rápido", de: "Schnelle Zeitkontrollspiele", nl: "Snelle tijdcontrole spellen" },
          { en: "Pawn structure changes", es: "Cambios de estructura de peones", de: "Bauernstruktur-Änderungen", nl: "Pionstructuur veranderingen" },
          { en: "Endgame techniques", es: "Técnicas de final", de: "Endspiel-Techniken", nl: "Eindspeltechnieken" }
        ],
        correct: 0,
        explanation: {
          en: "Dynamic play emphasizes piece activity, initiative, and tactical possibilities over static factors like material count or pawn structure. It often involves sacrifices for attack and creating imbalances in the position.",
          es: "El juego dinámico enfatiza la actividad de piezas, iniciativa y posibilidades tácticas sobre factores estáticos como el recuento material o la estructura de peones. A menudo involucra sacrificios para ataque y crear desequilibrios en la posición.",
          de: "Dynamisches Spiel betont Figurenaktivität, Initiative und taktische Möglichkeiten über statische Faktoren wie Materialzählung oder Bauernstruktur. Es beinhaltet oft Opfer für Angriff und das Schaffen von Ungleichgewichten in der Stellung.",
          nl: "Dynamisch spel benadrukt stukactiviteit, initiatief en tactische mogelijkheden boven statische factoren zoals materiaalaantal of pionstructuur. Het omvat vaak offers voor aanval en het creëren van onevenwichtigheden in de positie."
        }
      },
      {
        question: {
          en: "What is the 'Alekhine's Defense'?",
          es: "¿Qué es la 'Defensa Alekhine'?",
          de: "Was ist die 'Aljechin-Verteidigung'?",
          nl: "Wat is de 'Aljechin Verdediging'?"
        },
        options: [
          { en: "1...Nf6 provoking e5, inviting White to overextend", es: "1...Cf6 provocando e5, invitando a blancas a sobreextenderse", de: "1...Sf6 provoziert e5, lädt Weiß zum Überdehnen ein", nl: "1...Pf6 provocerend e5, wit uitnodigend zich te overextenden" },
          { en: "Queen sacrifice opening", es: "Apertura con sacrificio de reina", de: "Damenopfer-Eröffnung", nl: "Dameoffer opening" },
          { en: "Solid e6 d5 setup", es: "Configuración sólida e6 d5", de: "Solide e6 d5 Aufstellung", nl: "Solide e6 d5 opstelling" },
          { en: "Early castling system", es: "Sistema de enroque temprano", de: "Frühes Rochade-System", nl: "Vroeg rokade systeem" }
        ],
        correct: 0,
        explanation: {
          en: "Alekhine's Defense (1.e4 Nf6) is a hypermodern opening where Black immediately attacks the e4 pawn with the knight, provoking White to chase it with pawns and potentially overextend. Named after World Champion Alexander Alekhine.",
          es: "La Defensa Alekhine (1.e4 Cf6) es una apertura hipermoderna donde las negras atacan inmediatamente el peón e4 con el caballo, provocando a las blancas a perseguirlo con peones y potencialmente sobreextenderse. Nombrada en honor al Campeón Mundial Alexander Alekhine.",
          de: "Die Aljechin-Verteidigung (1.e4 Sf6) ist eine hypermoderne Eröffnung, bei der Schwarz sofort den e4-Bauern mit dem Springer angreift, Weiß dazu provoziert, ihn mit Bauern zu jagen und sich möglicherweise zu überdehnen. Benannt nach Weltmeister Alexander Aljechin.",
          nl: "De Aljechin Verdediging (1.e4 Pf6) is een hypermoderne opening waarbij zwart onmiddellijk de e4 pion aanvalt met het paard, wit provocerend om het te achtervolgen met pionnen en zich mogelijk te overextenden. Vernoemd naar Wereldkampioen Alexander Aljechin."
        }
      },
      {
        question: {
          en: "What is 'weak color complex'?",
          es: "¿Qué es el 'complejo de color débil'?",
          de: "Was ist ein 'Farbkomplex-Schwäche'?",
          nl: "Wat is een 'zwak kleurcomplex'?"
        },
        options: [
          { en: "Multiple weak squares of same color near king", es: "Múltiples casillas débiles del mismo color cerca del rey", de: "Mehrere schwache Felder derselben Farbe in der Nähe des Königs", nl: "Meerdere zwakke velden van dezelfde kleur bij de koning" },
          { en: "Bishop pair advantage", es: "Ventaja de pareja de alfiles", de: "Läuferpaar-Vorteil", nl: "Loperpaar voordeel" },
          { en: "Pawn chain weakness", es: "Debilidad de cadena de peones", de: "Bauernketten-Schwäche", nl: "Pionketen zwakte" },
          { en: "Piece coordination issue", es: "Problema de coordinación de piezas", de: "Figurenkoordinations-Problem", nl: "Stukcoördinatie probleem" }
        },
        correct: 0,
        explanation: {
          en: "A weak color complex occurs when multiple squares of the same color (light or dark) around a king or in a position become weak and cannot be adequately defended, often due to missing or traded bishops of that color.",
          es: "Un complejo de color débil ocurre cuando múltiples casillas del mismo color (claras u oscuras) alrededor de un rey o en una posición se vuelven débiles y no pueden ser adecuadamente defendidas, a menudo debido a alfiles faltantes o intercambiados de ese color.",
          de: "Ein Farbkomplex-Schwäche tritt auf, wenn mehrere Felder derselben Farbe (hell oder dunkel) um einen König oder in einer Position schwach werden und nicht angemessen verteidigt werden können, oft aufgrund fehlender oder getauschter Läufer dieser Farbe.",
          nl: "Een zwak kleurcomplex treedt op wanneer meerdere velden van dezelfde kleur (licht of donker) rond een koning of in een positie zwak worden en niet adequaat verdedigd kunnen worden, vaak vanwege ontbrekende of geruild lopers van die kleur."
        }
      },
      {
        question: {
          en: "What is the 'Petroff Defense' or 'Russian Game'?",
          es: "¿Qué es la 'Defensa Petroff' o 'Juego Ruso'?",
          de: "Was ist die 'Petrow-Verteidigung' oder 'Russische Partie'?",
          nl: "Wat is de 'Petroff Verdediging' of 'Russische Partij'?"
        },
        options: [
          { en: "1.e4 e5 2.Nf3 Nf6, symmetrical solid defense", es: "1.e4 e5 2.Cf3 Cf6, defensa sólida simétrica", de: "1.e4 e5 2.Sf3 Sf6, symmetrische solide Verteidigung", nl: "1.e4 e5 2.Pf3 Pf6, symmetrische solide verdediging" },
          { en: "Queen's Gambit variation", es: "Variación del Gambito de Dama", de: "Damengambit-Variante", nl: "Damegambiet variant" },
          { en: "Kingside attack system", es: "Sistema de ataque de rey", de: "Königsflügel-Angriffssystem", nl: "Koningsvleugel aanvalssysteem" },
          { en: "Pawn sacrifice opening", es: "Apertura con sacrificio de peón", de: "Bauernopfer-Eröffnung", nl: "Pionoffer opening" }
        ],
        correct: 0,
        explanation: {
          en: "The Petroff Defense (1.e4 e5 2.Nf3 Nf6) is a solid, symmetrical opening where Black immediately challenges White's e4 pawn with the knight. It's known for leading to drawish positions and is popular at the highest levels.",
          es: "La Defensa Petroff (1.e4 e5 2.Cf3 Cf6) es una apertura sólida y simétrica donde las negras desafían inmediatamente el peón e4 de las blancas con el caballo. Es conocida por llevar a posiciones con tendencia a tablas y es popular en los niveles más altos.",
          de: "Die Petrow-Verteidigung (1.e4 e5 2.Sf3 Sf6) ist eine solide, symmetrische Eröffnung, bei der Schwarz sofort den e4-Bauern von Weiß mit dem Springer herausfordert. Sie ist bekannt dafür, zu remisträchtigen Stellungen zu führen und ist auf höchstem Niveau beliebt.",
          nl: "De Petroff Verdediging (1.e4 e5 2.Pf3 Pf6) is een solide, symmetrische opening waarbij zwart onmiddellijk wits e4 pion uitdaagt met het paard. Het staat bekend om het leiden naar remise-achtige posities en is populair op de hoogste niveaus."
        }
      },
      {
        question: {
          en: "What is 'piece coordination'?",
          es: "¿Qué es la 'coordinación de piezas'?",
          de: "Was ist 'Figurenkoordination'?",
          nl: "Wat is 'stukcoördinatie'?"
        },
        options: [
          { en: "Pieces working together harmoniously toward common goal", es: "Piezas trabajando juntas armoniosamente hacia objetivo común", de: "Figuren arbeiten harmonisch zusammen auf gemeinsames Ziel", nl: "Stukken werken harmonieus samen naar gemeenschappelijk doel" },
          { en: "Moving pieces simultaneously", es: "Mover piezas simultáneamente", de: "Figuren gleichzeitig bewegen", nl: "Stukken gelijktijdig bewegen" },
          { en: "Trading pieces equally", es: "Intercambiar piezas igualmente", de: "Figuren gleichmäßig tauschen", nl: "Stukken gelijk ruilen" },
          { en: "Developing all pieces", es: "Desarrollar todas las piezas", de: "Alle Figuren entwickeln", nl: "Alle stukken ontwikkelen" }
        ],
        correct: 0,
        explanation: {
          en: "Piece coordination refers to how well your pieces work together to control squares, support each other, and execute plans. Well-coordinated pieces multiply their effectiveness, while poorly coordinated pieces can be passive or even interfere with each other.",
          es: "La coordinación de piezas se refiere a qué tan bien tus piezas trabajan juntas para controlar casillas, apoyarse mutuamente y ejecutar planes. Las piezas bien coordinadas multiplican su efectividad, mientras que las piezas mal coordinadas pueden ser pasivas o incluso interferir entre sí.",
          de: "Figurenkoordination bezieht sich darauf, wie gut Ihre Figuren zusammenarbeiten, um Felder zu kontrollieren, sich gegenseitig zu unterstützen und Pläne auszuführen. Gut koordinierte Figuren vervielfachen ihre Wirksamkeit, während schlecht koordinierte Figuren passiv sein oder sich sogar gegenseitig behindern können.",
          nl: "Stukcoördinatie verwijst naar hoe goed je stukken samenwerken om velden te controleren, elkaar te ondersteunen en plannen uit te voeren. Goed gecoördineerde stukken vermenigvuldigen hun effectiviteit, terwijl slecht gecoördineerde stukken passief kunnen zijn of elkaar zelfs kunnen hinderen."
        }
      },
      {
        question: {
          en: "What is the 'Semi-Slav Defense'?",
          es: "¿Qué es la 'Defensa Semiesla va'?",
          de: "Was ist die 'Halbslawische Verteidigung'?",
          nl: "Wat is de 'Semi-Slavische Verdediging'?"
        },
        options: [
          { en: "1.d4 d5 2.c4 c6 3.Nf3 Nf6 4.Nc3 e6, flexible hybrid", es: "1.d4 d5 2.c4 c6 3.Cf3 Cf6 4.Cc3 e6, híbrido flexible", de: "1.d4 d5 2.c4 c6 3.Sf3 Sf6 4.Sc3 e6, flexibler Hybrid", nl: "1.d4 d5 2.c4 c6 3.Pf3 Pf6 4.Pc3 e6, flexibele hybride" },
          { en: "Sicilian variation", es: "Variación siciliana", de: "Sizilianische Variante", nl: "Siciliaanse variant" },
          { en: "French Defense line", es: "Línea de Defensa Francesa", de: "Französische Verteidigungs-Linie", nl: "Franse Verdediging lijn" },
          { en: "King's Indian setup", es: "Configuración India de Rey", de: "Königsindische Aufstellung", nl: "Koningsindische opstelling" }
        ],
        correct: 0,
        explanation: {
          en: "The Semi-Slav Defense combines elements of the Slav (c6) and Queen's Gambit Declined (e6), creating a solid but flexible system. The light-squared bishop is temporarily blocked but can be developed via b6 or by advancing in the center.",
          es: "La Defensa Semiesla va combina elementos de la Eslava (c6) y el Gambito de Dama Rehusado (e6), creando un sistema sólido pero flexible. El alfil de casillas claras está temporalmente bloqueado pero puede desarrollarse vía b6 o avanzando en el centro.",
          de: "Die Halbslawische Verteidigung kombiniert Elemente der Slawischen (c6) und des abgelehnten Damengambits (e6) und schafft ein solides, aber flexibles System. Der weißfeldrige Läufer ist vorübergehend blockiert, kann aber über b6 oder durch Vorstoß im Zentrum entwickelt werden.",
          nl: "De Semi-Slavische Verdediging combineert elementen van de Slavische (c6) en het Afgeslagen Damegambiet (e6), wat een solide maar flexibel systeem creëert. De lichtvellige loper is tijdelijk geblokkeerd maar kan worden ontwikkeld via b6 of door vooruit te gaan in het centrum."
        }
      },
      {
        question: {
          en: "What is 'space advantage' in chess?",
          es: "¿Qué es la 'ventaja de espacio' en ajedrez?",
          de: "Was ist 'Raumvorteil' im Schach?",
          nl: "Wat is 'ruimtevoordeel' in schaak?"
        },
        options: [
          { en: "Controlling more of the board, restricting opponent's pieces", es: "Controlar más del tablero, restringir piezas del oponente", de: "Mehr vom Brett kontrollieren, gegnerische Figuren einschränken", nl: "Meer van het bord controleren, stukken van tegenstander beperken" },
          { en: "Having more pieces", es: "Tener más piezas", de: "Mehr Figuren haben", nl: "Meer stukken hebben" },
          { en: "Better pawn structure", es: "Mejor estructura de peones", de: "Bessere Bauernstruktur", nl: "Betere pionstructuur" },
          { en: "King safety", es: "Seguridad del rey", de: "Königssicherheit", nl: "Koningveiligheid" }
        ],
        correct: 0,
        explanation: {
          en: "Space advantage means controlling more territory on the board, typically by advancing pawns beyond the center line. This restricts the opponent's piece mobility and provides more room for your own pieces to maneuver effectively.",
          es: "La ventaja de espacio significa controlar más territorio en el tablero, típicamente avanzando peones más allá de la línea central. Esto restringe la movilidad de las piezas del oponente y proporciona más espacio para que tus propias piezas maniobren eficazmente.",
          de: "Raumvorteil bedeutet, mehr Territorium auf dem Brett zu kontrollieren, typischerweise durch Vorstoßen von Bauern über die Mittellinie hinaus. Dies schränkt die Beweglichkeit der gegnerischen Figuren ein und bietet mehr Raum für Ihre eigenen Figuren, um effektiv zu manövrieren.",
          nl: "Ruimtevoordeel betekent meer territorium op het bord controleren, meestal door pionnen voorbij de middellijn te schuiven. Dit beperkt de mobiliteit van de stukken van de tegenstander en biedt meer ruimte voor je eigen stukken om effectief te manoeuvreren."
        }
      },
      {
        question: {
          en: "What is the 'Steinitz Defense' in the Ruy Lopez?",
          es: "¿Qué es la 'Defensa Steinitz' en la Ruy Lopez?",
          de: "Was ist die 'Steinitz-Verteidigung' in der Spanischen Partie?",
          nl: "Wat is de 'Steinitz Verdediging' in de Ruy Lopez?"
        },
        options: [
          { en: "3...d6, solid old-fashioned defense", es: "3...d6, defensa sólida anticuada", de: "3...d6, solide altmodische Verteidigung", nl: "3...d6, solide ouderwetse verdediging" },
          { en: "Aggressive counterattack", es: "Contraataque agresivo", de: "Aggressiver Gegenangriff", nl: "Agressieve tegenaanval" },
          { en: "Gambit with pawn sacrifice", es: "Gambito con sacrificio de peón", de: "Gambit mit Bauernopfer", nl: "Gambiet met pionoffer" },
          { en: "Early queen development", es: "Desarrollo temprano de reina", de: "Frühe Damenentwicklung", nl: "Vroege dame-ontwikkeling" }
        ],
        correct: 0,
        explanation: {
          en: "The Steinitz Defense (1.e4 e5 2.Nf3 Nc6 3.Bb5 d6) is a solid, classical approach named after first World Champion Wilhelm Steinitz. It leads to closed positions and was considered old-fashioned but has seen modern revival.",
          es: "La Defensa Steinitz (1.e4 e5 2.Cf3 Cc6 3.Ab5 d6) es un enfoque sólido y clásico nombrado en honor al primer Campeón Mundial Wilhelm Steinitz. Lleva a posiciones cerradas y se consideraba anticuada pero ha visto un resurgimiento moderno.",
          de: "Die Steinitz-Verteidigung (1.e4 e5 2.Sf3 Sc6 3.Lb5 d6) ist ein solider, klassischer Ansatz, benannt nach dem ersten Weltmeister Wilhelm Steinitz. Sie führt zu geschlossenen Stellungen und galt als altmodisch, hat aber eine moderne Wiederbelebung erlebt.",
          nl: "De Steinitz Verdediging (1.e4 e5 2.Pf3 Pc6 3.Lb5 d6) is een solide, klassieke benadering vernoemd naar eerste Wereldkampioen Wilhelm Steinitz. Het leidt tot gesloten posities en werd als ouderwets beschouwd maar heeft een moderne heropleving gezien."
        }
      },
      {
        question: {
          en: "What is 'correspondence chess'?",
          es: "¿Qué es el 'ajedrez por correspondencia'?",
          de: "Was ist 'Fernschach'?",
          nl: "Wat is 'correspondentieschaak'?"
        },
        options: [
          { en: "Chess played remotely with days per move", es: "Ajedrez jugado remotamente con días por movimiento", de: "Schach gespielt aus der Ferne mit Tagen pro Zug", nl: "Schaak gespeeld op afstand met dagen per zet" },
          { en: "Letter-writing chess notation", es: "Notación de ajedrez por cartas", de: "Briefschreib-Schachnotation", nl: "Brieven schrijven schaaknotatie" },
          { en: "Chess variants communication", es: "Comunicación de variantes de ajedrez", de: "Schachvarianten-Kommunikation", nl: "Schaakvariantencommunicatie" },
          { en: "Email chess only", es: "Solo ajedrez por correo electrónico", de: "Nur E-Mail-Schach", nl: "Alleen e-mailschaak" }
        ],
        correct: 0,
        explanation: {
          en: "Correspondence chess is played remotely with much longer time controls (days or weeks per move), traditionally by mail but now mostly online. Players can analyze deeply and use databases, leading to very high-quality games.",
          es: "El ajedrez por correspondencia se juega remotamente con controles de tiempo mucho más largos (días o semanas por movimiento), tradicionalmente por correo pero ahora principalmente en línea. Los jugadores pueden analizar profundamente y usar bases de datos, llevando a juegos de muy alta calidad.",
          de: "Fernschach wird aus der Ferne mit viel längeren Zeitkontrollen (Tage oder Wochen pro Zug) gespielt, traditionell per Post, aber jetzt meist online. Spieler können tief analysieren und Datenbanken verwenden, was zu sehr hochwertigen Partien führt.",
          nl: "Correspondentieschaak wordt op afstand gespeeld met veel langere tijdcontroles (dagen of weken per zet), traditioneel per post maar nu vooral online. Spelers kunnen diep analyseren en databases gebruiken, wat leidt tot zeer hoogwaardige partijen."
        }
      },
      {
        question: {
          en: "What is the 'Tarrasch Defense'?",
          es: "¿Qué es la 'Defensa Tarrasch'?",
          de: "Was ist die 'Tarrasch-Verteidigung'?",
          nl: "Wat is de 'Tarrasch Verdediging'?"
        },
        options: [
          { en: "1.d4 d5 2.c4 e6 3.Nc3 c5, active counterplay", es: "1.d4 d5 2.c4 e6 3.Cc3 c5, contrajuego activo", de: "1.d4 d5 2.c4 e6 3.Sc3 c5, aktives Gegenspiel", nl: "1.d4 d5 2.c4 e6 3.Pc3 c5, actieve tegenaanval" },
          { en: "Sicilian variation", es: "Variación siciliana", de: "Sizilianische Variante", nl: "Siciliaanse variant" },
          { en: "King's Indian setup", es: "Configuración India de Rey", de: "Königsindische Aufstellung", nl: "Koningsindische opstelling" },
          { en: "French Defense line", es: "Línea de Defensa Francesa", de: "Französische Verteidigungs-Linie", nl: "Franse Verdediging lijn" }
        },
        correct: 0,
        explanation: {
          en: "The Tarrasch Defense (1.d4 d5 2.c4 e6 3.Nc3 c5) is an active system in the Queen's Gambit Declined where Black challenges White's center immediately. Named after Siegbert Tarrasch, it often leads to an isolated queen's pawn but active piece play.",
          es: "La Defensa Tarrasch (1.d4 d5 2.c4 e6 3.Cc3 c5) es un sistema activo en el Gambito de Dama Rehusado donde las negras desafían el centro de las blancas inmediatamente. Nombrada en honor a Siegbert Tarrasch, a menudo lleva a un peón de dama aislado pero juego de piezas activo.",
          de: "Die Tarrasch-Verteidigung (1.d4 d5 2.c4 e6 3.Sc3 c5) ist ein aktives System im abgelehnten Damengambit, bei dem Schwarz Weiß' Zentrum sofort herausfordert. Benannt nach Siegbert Tarrasch, führt sie oft zu einem isolierten Damenbauern, aber aktivem Figurenspiel.",
          nl: "De Tarrasch Verdediging (1.d4 d5 2.c4 e6 3.Pc3 c5) is een actief systeem in het Afgeslagen Damegambiet waarbij zwart wits centrum onmiddellijk uitdaagt. Vernoemd naar Siegbert Tarrasch, leidt het vaak tot een geïsoleerde damepion maar actief stukkenspel."
        }
      },
      {
        question: {
          en: "What is a 'closed position'?",
          es: "¿Qué es una 'posición cerrada'?",
          de: "Was ist eine 'geschlossene Stellung'?",
          nl: "Wat is een 'gesloten positie'?"
        },
        options: [
          { en: "Position with locked pawn chains, limited piece mobility", es: "Posición con cadenas de peones bloqueadas, movilidad de piezas limitada", de: "Stellung mit gesperrten Bauernketten, eingeschränkter Figurenbeweglichkeit", nl: "Positie met geblokkeerde pionketens, beperkte stukmobiliteit" },
          { en: "Position after castling", es: "Posición después de enrocar", de: "Stellung nach Rochade", nl: "Positie na rokade" },
          { en: "Endgame position", es: "Posición de final", de: "Endspiel-Stellung", nl: "Eindspelpositie" },
          { en: "Position with no checks", es: "Posición sin jaques", de: "Stellung ohne Schachs", nl: "Positie zonder schaken" }
        ],
        correct: 0,
        explanation: {
          en: "A closed position features locked or blocked pawn chains that restrict piece mobility. In such positions, knights tend to be stronger than bishops, maneuvering is key, and breakthroughs require careful preparation.",
          es: "Una posición cerrada presenta cadenas de peones bloqueadas o trabadas que restringen la movilidad de las piezas. En tales posiciones, los caballos tienden a ser más fuertes que los alfiles, la maniobra es clave, y las rupturas requieren preparación cuidadosa.",
          de: "Eine geschlossene Stellung weist gesperrte oder blockierte Bauernketten auf, die die Figurenbeweglichkeit einschränken. In solchen Stellungen sind Springer tendenziell stärker als Läufer, Manövrieren ist der Schlüssel, und Durchbrüche erfordern sorgfältige Vorbereitung.",
          nl: "Een gesloten positie kenmerkt geblokkeerde of vastgezette pionketens die stukmobiliteit beperken. In dergelijke posities zijn paarden doorgaans sterker dan lopers, manoeuvreren is de sleutel, en doorbraken vereisen zorgvuldige voorbereiding."
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
