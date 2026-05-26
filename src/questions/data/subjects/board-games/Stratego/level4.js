// Stratego - Level 4
// Total questions: 100

module.exports = {
    questions: [
        {
            "question": {
                "en": "What is the highest-ranked piece in Stratego?",
                "es": "¿Cuál es la pieza de mayor rango en Stratego?",
                "de": "Welche ist die höchstrangige Figur in Stratego?",
                "nl": "Wat is het hoogst gerangschikte stuk in Stratego?"
            },
            "options": [
                {
                    "en": "The General",
                    "es": "El General",
                    "de": "Der General",
                    "nl": "De Generaal"
                },
                {
                    "en": "The Marshal",
                    "es": "El Mariscal",
                    "de": "Der Marschall",
                    "nl": "De Maarschalk"
                },
                {
                    "en": "The Colonel",
                    "es": "El Coronel",
                    "de": "Der Oberst",
                    "nl": "De Kolonel"
                },
                {
                    "en": "The Spy",
                    "es": "El Espía",
                    "de": "Der Spion",
                    "nl": "De Spion"
                }
            ],
            "correct": 1,
            "explanation": {
                "en": "The Marshal (rank 10) is the highest-ranked piece. It defeats all other pieces in direct combat, but is vulnerable to the Spy's attack.",
                "es": "El Mariscal (rango 10) es la pieza de mayor rango. Derrota a todas las demás en combate directo, pero es vulnerable al ataque del Espía.",
                "de": "Der Marschall (Rang 10) ist die höchstrangige Figur. Er besiegt alle anderen, ist aber verwundbar gegen den Spion-Angriff.",
                "nl": "De Maarschalk (rang 10) is het hoogste stuk. Hij verslaat alle anderen in direct gevecht, maar is kwetsbaar voor de Spion-aanval."
            }
        },
        {
            "question": {
                "en": "Why is protecting the Miner important in Stratego?",
                "es": "¿Por qué es importante proteger al Minero en Stratego?",
                "de": "Warum ist es wichtig, den Mineur in Stratego zu schützen?",
                "nl": "Waarom is het belangrijk de Mineur te beschermen in Stratego?"
            },
            "options": [
                {
                    "en": "Miners have the highest rank",
                    "es": "Los Mineros tienen el rango más alto",
                    "de": "Mineure haben den höchsten Rang",
                    "nl": "Mineurs hebben de hoogste rang"
                },
                {
                    "en": "Miners can move like Scouts",
                    "es": "Los Mineros se mueven como Exploradores",
                    "de": "Mineure bewegen sich wie Aufklärer",
                    "nl": "Mineurs bewegen als Verkenners"
                },
                {
                    "en": "Miners are needed to defuse Bombs",
                    "es": "Los Mineros desactivan Bombas",
                    "de": "Mineure werden zum Entschärfen von Bomben gebraucht",
                    "nl": "Mineurs zijn nodig om Bommen te ontmantelen"
                },
                {
                    "en": "Miners can capture the Flag directly",
                    "es": "Los Mineros capturan la Bandera directamente",
                    "de": "Mineure können die Flagge direkt erobern",
                    "nl": "Mineurs kunnen de Vlag direct veroveren"
                }
            ],
            "correct": 2,
            "explanation": {
                "en": "Miners are the only pieces that can defuse Bombs. Since Flags are usually protected by Bombs, losing all Miners can make winning impossible.",
                "es": "Los Mineros son las únicas piezas que desactivan Bombas. Como las Banderas suelen estar protegidas por Bombas, perderlos puede hacer imposible ganar.",
                "de": "Mineure sind die einzigen Figuren, die Bomben entschärfen können. Da Flaggen meist durch Bomben geschützt sind, kann deren Verlust den Sieg unmöglich machen.",
                "nl": "Mineurs zijn de enige stukken die Bommen ontmantelen. Omdat Vlaggen meestal door Bommen beschermd worden, kan het verliezen ervan winnen onmogelijk maken."
            }
        },
        {
            "question": {
                "en": "What happens when the Spy attacks the Marshal?",
                "es": "¿Qué pasa cuando el Espía ataca al Mariscal?",
                "de": "Was passiert, wenn der Spion den Marschall angreift?",
                "nl": "Wat gebeurt er als de Spion de Maarschalk aanvalt?"
            },
            "options": [
                {
                    "en": "The Spy wins and the Marshal is removed",
                    "es": "El Espía gana y el Mariscal se retira",
                    "de": "Der Spion gewinnt und der Marschall wird entfernt",
                    "nl": "De Spion wint en de Maarschalk wordt verwijderd"
                },
                {
                    "en": "Both pieces are removed",
                    "es": "Ambas piezas se retiran",
                    "de": "Beide Figuren werden entfernt",
                    "nl": "Beide stukken worden verwijderd"
                },
                {
                    "en": "The Marshal always wins",
                    "es": "El Mariscal siempre gana",
                    "de": "Der Marschall gewinnt immer",
                    "nl": "De Maarschalk wint altijd"
                },
                {
                    "en": "Nothing happens",
                    "es": "No pasa nada",
                    "de": "Nichts passiert",
                    "nl": "Er gebeurt niets"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "When the Spy initiates an attack on the Marshal, the Spy wins and the Marshal is removed. This is the Spy's unique ability in Stratego.",
                "es": "Cuando el Espía inicia un ataque al Mariscal, el Espía gana y el Mariscal se retira. Esta es la habilidad única del Espía.",
                "de": "Wenn der Spion den Marschall angreift, gewinnt der Spion und der Marschall wird entfernt. Das ist die einzigartige Fähigkeit des Spions.",
                "nl": "Wanneer de Spion de Maarschalk aanvalt, wint de Spion en wordt de Maarschalk verwijderd. Dit is de unieke vaardigheid van de Spion."
            }
        },
        {
            "question": {
                "en": "What is a 'Bomb corridor' in Stratego setup?",
                "es": "¿Qué es un 'corredor de Bombas' en la colocación de Stratego?",
                "de": "Was ist ein 'Bomben-Korridor' beim Stratego-Aufbau?",
                "nl": "Wat is een 'Bommencorridor' bij de Stratego-opstelling?"
            },
            "options": [
                {
                    "en": "A row of Bombs blocking a lane",
                    "es": "Una fila de Bombas bloqueando un pasillo",
                    "de": "Eine Reihe Bomben, die eine Bahn blockiert",
                    "nl": "Een rij Bommen die een baan blokkeert"
                },
                {
                    "en": "A path with no Bombs",
                    "es": "Un camino sin Bombas",
                    "de": "Ein Weg ohne Bomben",
                    "nl": "Een pad zonder Bommen"
                },
                {
                    "en": "A safe zone between lakes",
                    "es": "Una zona segura entre lagos",
                    "de": "Eine sichere Zone zwischen Seen",
                    "nl": "Een veilige zone tussen meren"
                },
                {
                    "en": "A trap for Scouts",
                    "es": "Una trampa para Exploradores",
                    "de": "Eine Falle für Aufklärer",
                    "nl": "Een val voor Verkenners"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "A Bomb corridor is a defensive setup where Bombs are placed in a line to block enemy approach. It forces opponents to use Miners to break through.",
                "es": "Un corredor de Bombas es una configuración defensiva con Bombas en línea para bloquear el avance enemigo. Obliga a usar Mineros.",
                "de": "Ein Bomben-Korridor ist ein Verteidigungsaufbau mit Bomben in einer Linie, die den Feind blockieren. Gegner müssen Mineure einsetzen.",
                "nl": "Een Bommencorridor is een verdedigingsopstelling met Bommen in een lijn om de vijand te blokkeren. Tegenstanders moeten Mineurs gebruiken."
            }
        },
        {
            "question": {
                "en": "How many Captains does each player have in Stratego?",
                "es": "¿Cuántos Capitanes tiene cada jugador en Stratego?",
                "de": "Wie viele Hauptleute hat jeder Spieler in Stratego?",
                "nl": "Hoeveel Kapiteins heeft elke speler in Stratego?"
            },
            "options": [
                {
                    "en": "3 Captains",
                    "es": "3 Capitanes",
                    "de": "3 Hauptleute",
                    "nl": "3 Kapiteins"
                },
                {
                    "en": "2 Captains",
                    "es": "2 Capitanes",
                    "de": "2 Hauptleute",
                    "nl": "2 Kapiteins"
                },
                {
                    "en": "5 Captains",
                    "es": "5 Capitanes",
                    "de": "5 Hauptleute",
                    "nl": "5 Kapiteins"
                },
                {
                    "en": "4 Captains",
                    "es": "4 Capitanes",
                    "de": "4 Hauptleute",
                    "nl": "4 Kapiteins"
                }
            ],
            "correct": 3,
            "explanation": {
                "en": "Each player has 4 Captains (rank 6). They are versatile mid-range pieces useful for attacking weaker pieces and probing enemy defenses.",
                "es": "Cada jugador tiene 4 Capitanes (rango 6). Son piezas versátiles de rango medio útiles para atacar piezas más débiles.",
                "de": "Jeder Spieler hat 4 Hauptleute (Rang 6). Sie sind vielseitige Figuren mittlerer Stärke für Angriffe auf schwächere Figuren.",
                "nl": "Elke speler heeft 4 Kapiteins (rang 6). Het zijn veelzijdige stukken van middelbare sterkte voor aanvallen op zwakkere stukken."
            }
        },
        {
            "question": {
                "en": "What is the 'two-square rule' in tournament Stratego?",
                "es": "¿Qué es la 'regla de dos casillas' en Stratego de torneo?",
                "de": "Was ist die 'Zwei-Felder-Regel' im Turnier-Stratego?",
                "nl": "Wat is de 'twee-vakjes-regel' bij toernooi-Stratego?"
            },
            "options": [
                {
                    "en": "You must move at least two squares",
                    "es": "Debes moverte al menos dos casillas",
                    "de": "Man muss mindestens zwei Felder ziehen",
                    "nl": "Je moet minstens twee vakjes bewegen"
                },
                {
                    "en": "A piece cannot move back and forth repeatedly",
                    "es": "Una pieza no puede ir y volver repetidamente",
                    "de": "Eine Figur darf nicht wiederholt hin und her ziehen",
                    "nl": "Een stuk mag niet herhaaldelijk heen en weer bewegen"
                },
                {
                    "en": "Two pieces must move per turn",
                    "es": "Dos piezas deben moverse por turno",
                    "de": "Zwei Figuren müssen pro Zug bewegen",
                    "nl": "Twee stukken moeten per beurt bewegen"
                },
                {
                    "en": "Pieces must stay two squares apart",
                    "es": "Las piezas deben estar a dos casillas",
                    "de": "Figuren müssen zwei Felder Abstand halten",
                    "nl": "Stukken moeten twee vakjes afstand houden"
                }
            ],
            "correct": 1,
            "explanation": {
                "en": "The two-square rule prevents a piece from moving back and forth between the same two squares more than a set number of times, preventing stalling.",
                "es": "La regla de dos casillas impide que una pieza se mueva entre las mismas dos casillas repetidamente, evitando el estancamiento.",
                "de": "Die Zwei-Felder-Regel verhindert, dass eine Figur wiederholt zwischen denselben zwei Feldern hin und her zieht.",
                "nl": "De twee-vakjes-regel voorkomt dat een stuk herhaaldelijk tussen dezelfde twee vakjes heen en weer beweegt."
            }
        },
        {
            "question": {
                "en": "Which piece is best for scouting enemy positions?",
                "es": "¿Qué pieza es mejor para explorar posiciones enemigas?",
                "de": "Welche Figur eignet sich am besten zum Erkunden?",
                "nl": "Welk stuk is het beste voor het verkennen van vijandelijke posities?"
            },
            "options": [
                {
                    "en": "The Marshal",
                    "es": "El Mariscal",
                    "de": "Der Marschall",
                    "nl": "De Maarschalk"
                },
                {
                    "en": "The General",
                    "es": "El General",
                    "de": "Der General",
                    "nl": "De Generaal"
                },
                {
                    "en": "The Miner",
                    "es": "El Minero",
                    "de": "Der Mineur",
                    "nl": "De Mineur"
                },
                {
                    "en": "The Scout",
                    "es": "El Explorador",
                    "de": "Der Aufklärer",
                    "nl": "De Verkenner"
                }
            ],
            "correct": 3,
            "explanation": {
                "en": "Scouts can move multiple squares in a straight line, making them perfect for probing enemy formations and revealing piece identities.",
                "es": "Los Exploradores pueden moverse varias casillas en línea recta, ideales para sondear formaciones enemigas y revelar identidades.",
                "de": "Aufklärer können mehrere Felder in gerader Linie ziehen, perfekt zum Erkunden feindlicher Formationen.",
                "nl": "Verkenners kunnen meerdere vakjes in een rechte lijn bewegen, perfect om vijandelijke formaties te verkennen."
            }
        },
        {
            "question": {
                "en": "What is the advantage of an aggressive opening in Stratego?",
                "es": "¿Cuál es la ventaja de una apertura agresiva en Stratego?",
                "de": "Was ist der Vorteil einer aggressiven Eröffnung in Stratego?",
                "nl": "Wat is het voordeel van een agressieve opening in Stratego?"
            },
            "options": [
                {
                    "en": "You gather information about enemy pieces",
                    "es": "Recopilas información sobre piezas enemigas",
                    "de": "Man sammelt Informationen über feindliche Figuren",
                    "nl": "Je verzamelt informatie over vijandelijke stukken"
                },
                {
                    "en": "You automatically win the game",
                    "es": "Ganas automáticamente la partida",
                    "de": "Man gewinnt automatisch das Spiel",
                    "nl": "Je wint automatisch het spel"
                },
                {
                    "en": "Your Bombs become stronger",
                    "es": "Tus Bombas se vuelven más fuertes",
                    "de": "Die Bomben werden stärker",
                    "nl": "Je Bommen worden sterker"
                },
                {
                    "en": "The opponent must surrender",
                    "es": "El oponente debe rendirse",
                    "de": "Der Gegner muss aufgeben",
                    "nl": "De tegenstander moet opgeven"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "An aggressive opening helps you identify enemy piece positions and ranks early. This information is valuable for planning later attacks.",
                "es": "Una apertura agresiva te ayuda a identificar posiciones y rangos enemigos temprano. Esta información es valiosa para planificar ataques.",
                "de": "Eine aggressive Eröffnung hilft, feindliche Positionen und Ränge früh zu erkennen. Diese Information ist wertvoll für spätere Angriffe.",
                "nl": "Een agressieve opening helpt vijandelijke posities en rangen vroeg te identificeren. Deze informatie is waardevol voor latere aanvallen."
            }
        },
        {
            "question": {
                "en": "What is a 'sacrificial probe' in Stratego?",
                "es": "¿Qué es una 'sonda de sacrificio' en Stratego?",
                "de": "Was ist eine 'Opfer-Sondierung' in Stratego?",
                "nl": "Wat is een 'opofferingsverkenning' in Stratego?"
            },
            "options": [
                {
                    "en": "Moving your Flag forward",
                    "es": "Mover tu Bandera adelante",
                    "de": "Die Flagge nach vorne bewegen",
                    "nl": "Je Vlag naar voren bewegen"
                },
                {
                    "en": "Sending a weak piece to reveal an enemy's rank",
                    "es": "Enviar una pieza débil para revelar el rango enemigo",
                    "de": "Eine schwache Figur senden, um den feindlichen Rang zu enthüllen",
                    "nl": "Een zwak stuk sturen om de vijandelijke rang te onthullen"
                },
                {
                    "en": "Removing your own Bombs",
                    "es": "Retirar tus propias Bombas",
                    "de": "Die eigenen Bomben entfernen",
                    "nl": "Je eigen Bommen verwijderen"
                },
                {
                    "en": "Hiding your Marshal behind a Bomb",
                    "es": "Esconder tu Mariscal detrás de una Bomba",
                    "de": "Den Marschall hinter einer Bombe verstecken",
                    "nl": "Je Maarschalk achter een Bom verbergen"
                }
            ],
            "correct": 1,
            "explanation": {
                "en": "A sacrificial probe involves attacking with a low-value piece like a Scout to discover an opponent's piece rank, gaining crucial information.",
                "es": "Una sonda de sacrificio implica atacar con una pieza de bajo valor como un Explorador para descubrir el rango de una pieza enemiga.",
                "de": "Eine Opfer-Sondierung bedeutet, mit einer niedrigwertigen Figur wie einem Aufklärer anzugreifen, um den feindlichen Rang zu enthüllen.",
                "nl": "Een opofferingsverkenning is aanvallen met een laagwaardig stuk zoals een Verkenner om de rang van een vijandelijk stuk te ontdekken."
            }
        },
        {
            "question": {
                "en": "Why should you avoid grouping all strong pieces together?",
                "es": "¿Por qué debes evitar agrupar todas las piezas fuertes?",
                "de": "Warum sollte man nicht alle starken Figuren zusammenstellen?",
                "nl": "Waarom moet je voorkomen dat alle sterke stukken samen staan?"
            },
            "options": [
                {
                    "en": "They block each other's movement",
                    "es": "Se bloquean el movimiento entre sí",
                    "de": "Sie blockieren sich gegenseitig",
                    "nl": "Ze blokkeren elkaars beweging"
                },
                {
                    "en": "It leaves other areas undefended",
                    "es": "Deja otras áreas sin defensa",
                    "de": "Es lässt andere Bereiche ungeschützt",
                    "nl": "Het laat andere gebieden onverdedigd"
                },
                {
                    "en": "Strong pieces lose power in groups",
                    "es": "Las piezas fuertes pierden poder en grupo",
                    "de": "Starke Figuren verlieren Kraft in Gruppen",
                    "nl": "Sterke stukken verliezen kracht in groepen"
                },
                {
                    "en": "It violates the rules",
                    "es": "Viola las reglas",
                    "de": "Es verstößt gegen die Regeln",
                    "nl": "Het is tegen de regels"
                }
            ],
            "correct": 1,
            "explanation": {
                "en": "Grouping strong pieces in one area leaves the rest of your setup vulnerable. Spreading them provides balanced defense across the board.",
                "es": "Agrupar piezas fuertes en un área deja el resto de tu configuración vulnerable. Distribuirlas proporciona defensa equilibrada.",
                "de": "Starke Figuren in einem Bereich zu gruppieren lässt den Rest des Aufbaus verwundbar. Verteilen bietet ausgewogene Verteidigung.",
                "nl": "Sterke stukken in één gebied groeperen maakt de rest van je opstelling kwetsbaar. Verspreiden biedt evenwichtige verdediging."
            }
        },
        {
            "question": {
                "en": "What is the best way to protect the Spy in Stratego?",
                "es": "¿Cuál es la mejor forma de proteger al Espía en Stratego?",
                "de": "Wie schützt man den Spion in Stratego am besten?",
                "nl": "Wat is de beste manier om de Spion te beschermen in Stratego?"
            },
            "options": [
                {
                    "en": "Place it next to the Flag",
                    "es": "Colocarlo junto a la Bandera",
                    "de": "Ihn neben die Flagge stellen",
                    "nl": "Het naast de Vlag plaatsen"
                },
                {
                    "en": "Keep it in the back row permanently",
                    "es": "Mantenerlo en la última fila siempre",
                    "de": "Ihn permanent in der hinteren Reihe lassen",
                    "nl": "Het permanent in de achterste rij houden"
                },
                {
                    "en": "Place it behind stronger pieces",
                    "es": "Colocarlo detrás de piezas más fuertes",
                    "de": "Ihn hinter stärkere Figuren stellen",
                    "nl": "Het achter sterkere stukken plaatsen"
                },
                {
                    "en": "Move it to the front line immediately",
                    "es": "Moverlo a la primera línea de inmediato",
                    "de": "Ihn sofort an die Frontlinie bewegen",
                    "nl": "Het meteen naar de frontlinie verplaatsen"
                }
            ],
            "correct": 2,
            "explanation": {
                "en": "Placing the Spy behind stronger pieces keeps it hidden and protected until the right moment to attack the Marshal.",
                "es": "Colocar al Espía detrás de piezas más fuertes lo mantiene oculto y protegido hasta el momento adecuado para atacar al Mariscal.",
                "de": "Den Spion hinter stärkeren Figuren zu platzieren hält ihn verborgen und geschützt bis zum richtigen Moment.",
                "nl": "De Spion achter sterkere stukken plaatsen houdt het verborgen en beschermd tot het juiste moment om de Maarschalk aan te vallen."
            }
        },
        {
            "question": {
                "en": "What is the main weakness of Bombs in Stratego?",
                "es": "¿Cuál es la principal debilidad de las Bombas en Stratego?",
                "de": "Was ist die Hauptschwäche der Bomben in Stratego?",
                "nl": "Wat is de belangrijkste zwakte van Bommen in Stratego?"
            },
            "options": [
                {
                    "en": "They can be moved by the opponent",
                    "es": "El oponente puede moverlas",
                    "de": "Der Gegner kann sie bewegen",
                    "nl": "De tegenstander kan ze verplaatsen"
                },
                {
                    "en": "They expire after five turns",
                    "es": "Caducan después de cinco turnos",
                    "de": "Sie verfallen nach fünf Zügen",
                    "nl": "Ze vervallen na vijf beurten"
                },
                {
                    "en": "Miners can defuse them",
                    "es": "Los Mineros pueden desactivarlas",
                    "de": "Mineure können sie entschärfen",
                    "nl": "Mineurs kunnen ze ontmantelen"
                },
                {
                    "en": "They damage nearby friendly pieces",
                    "es": "Dañan piezas aliadas cercanas",
                    "de": "Sie beschädigen nahe eigene Figuren",
                    "nl": "Ze beschadigen nabije eigen stukken"
                }
            ],
            "correct": 2,
            "explanation": {
                "en": "Miners are the only pieces that can defuse Bombs. If the opponent identifies where your Bombs are, they can send Miners to neutralize them.",
                "es": "Los Mineros son las únicas piezas que desactivan Bombas. Si el oponente identifica tus Bombas, puede enviar Mineros.",
                "de": "Mineure sind die einzigen Figuren, die Bomben entschärfen können. Wenn der Gegner die Bomben findet, kann er Mineure schicken.",
                "nl": "Mineurs zijn de enige stukken die Bommen ontmantelen. Als de tegenstander je Bommen vindt, kan hij Mineurs sturen."
            }
        },
        {
            "question": {
                "en": "Why is the center of the Stratego board strategically important?",
                "es": "¿Por qué es estratégicamente importante el centro del tablero?",
                "de": "Warum ist die Brettmitte in Stratego strategisch wichtig?",
                "nl": "Waarom is het midden van het Stratego-bord strategisch belangrijk?"
            },
            "options": [
                {
                    "en": "Pieces gain extra power in the center",
                    "es": "Las piezas ganan poder extra en el centro",
                    "de": "Figuren gewinnen extra Kraft in der Mitte",
                    "nl": "Stukken krijgen extra kracht in het midden"
                },
                {
                    "en": "It provides access to both flanks",
                    "es": "Da acceso a ambos flancos",
                    "de": "Es bietet Zugang zu beiden Flanken",
                    "nl": "Het biedt toegang tot beide flanken"
                },
                {
                    "en": "The Flag must be placed in the center",
                    "es": "La Bandera debe colocarse en el centro",
                    "de": "Die Flagge muss in der Mitte stehen",
                    "nl": "De Vlag moet in het midden geplaatst worden"
                },
                {
                    "en": "Bombs are more effective in the center",
                    "es": "Las Bombas son más efectivas en el centro",
                    "de": "Bomben sind in der Mitte effektiver",
                    "nl": "Bommen zijn effectiever in het midden"
                }
            ],
            "correct": 1,
            "explanation": {
                "en": "Controlling the center gives your pieces access to both sides of the board, allowing flexible responses to threats from either flank.",
                "es": "Controlar el centro da a tus piezas acceso a ambos lados del tablero, permitiendo respuestas flexibles a amenazas de cualquier flanco.",
                "de": "Die Kontrolle der Mitte gibt Zugang zu beiden Seiten des Bretts und ermöglicht flexible Reaktionen auf Bedrohungen.",
                "nl": "Het centrum controleren geeft je stukken toegang tot beide kanten van het bord voor flexibele reacties op bedreigingen."
            }
        },
        {
            "question": {
                "en": "What is a 'bait and switch' tactic in Stratego?",
                "es": "¿Qué es una táctica de 'cebo y cambio' en Stratego?",
                "de": "Was ist eine 'Köder-und-Wechsel'-Taktik in Stratego?",
                "nl": "Wat is een 'lokken en wisselen' tactiek in Stratego?"
            },
            "options": [
                {
                    "en": "Swapping two pieces during setup",
                    "es": "Intercambiar dos piezas durante la colocación",
                    "de": "Zwei Figuren beim Aufbau tauschen",
                    "nl": "Twee stukken wisselen tijdens de opstelling"
                },
                {
                    "en": "Luring an enemy piece into a stronger one",
                    "es": "Atraer una pieza enemiga hacia una más fuerte",
                    "de": "Eine feindliche Figur zu einer stärkeren locken",
                    "nl": "Een vijandelijk stuk naar een sterker stuk lokken"
                },
                {
                    "en": "Moving the Flag to a new position",
                    "es": "Mover la Bandera a una nueva posición",
                    "de": "Die Flagge an eine neue Position bewegen",
                    "nl": "De Vlag naar een nieuwe positie verplaatsen"
                },
                {
                    "en": "Replacing a captured piece",
                    "es": "Reemplazar una pieza capturada",
                    "de": "Eine gefangene Figur ersetzen",
                    "nl": "Een gevangen stuk vervangen"
                }
            ],
            "correct": 1,
            "explanation": {
                "en": "Bait and switch means using a weaker piece as bait to lure an enemy piece into attacking, then counter-attacking with a stronger piece nearby.",
                "es": "Cebo y cambio significa usar una pieza débil como señuelo para atraer al enemigo y luego contraatacar con una pieza más fuerte.",
                "de": "Köder und Wechsel bedeutet, eine schwache Figur als Köder zu nutzen, um den Feind anzulocken, und dann mit einer stärkeren Figur zu kontern.",
                "nl": "Lokken en wisselen betekent een zwak stuk als lokaas gebruiken om de vijand te lokken en dan met een sterker stuk te counteren."
            }
        },
        {
            "question": {
                "en": "How many Lieutenants does each player start with?",
                "es": "¿Con cuántos Tenientes empieza cada jugador?",
                "de": "Mit wie vielen Leutnanten beginnt jeder Spieler?",
                "nl": "Met hoeveel Luitenanten begint elke speler?"
            },
            "options": [
                {
                    "en": "4 Lieutenants",
                    "es": "4 Tenientes",
                    "de": "4 Leutnante",
                    "nl": "4 Luitenanten"
                },
                {
                    "en": "3 Lieutenants",
                    "es": "3 Tenientes",
                    "de": "3 Leutnante",
                    "nl": "3 Luitenanten"
                },
                {
                    "en": "5 Lieutenants",
                    "es": "5 Tenientes",
                    "de": "5 Leutnante",
                    "nl": "5 Luitenanten"
                },
                {
                    "en": "2 Lieutenants",
                    "es": "2 Tenientes",
                    "de": "2 Leutnante",
                    "nl": "2 Luitenanten"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Each player has 4 Lieutenants (rank 5). They serve as reliable mid-range fighters that can defeat Sergeants, Miners, and Scouts.",
                "es": "Cada jugador tiene 4 Tenientes (rango 5). Son luchadores fiables de rango medio que derrotan a Sargentos, Mineros y Exploradores.",
                "de": "Jeder Spieler hat 4 Leutnante (Rang 5). Sie sind zuverlässige Kämpfer mittlerer Stärke gegen Feldwebel, Mineure und Aufklärer.",
                "nl": "Elke speler heeft 4 Luitenanten (rang 5). Ze zijn betrouwbare middenstukken die Sergeanten, Mineurs en Verkenners verslaan."
            }
        },
        {
            "question": {
                "en": "What happens if you cannot make a legal move in Stratego?",
                "es": "¿Qué pasa si no puedes hacer un movimiento legal en Stratego?",
                "de": "Was passiert, wenn man keinen legalen Zug machen kann?",
                "nl": "Wat gebeurt er als je geen legale zet kunt doen in Stratego?"
            },
            "options": [
                {
                    "en": "You skip your turn",
                    "es": "Saltas tu turno",
                    "de": "Man überspringt den Zug",
                    "nl": "Je slaat je beurt over"
                },
                {
                    "en": "You move a Bomb instead",
                    "es": "Mueves una Bomba en su lugar",
                    "de": "Man bewegt stattdessen eine Bombe",
                    "nl": "Je verplaatst een Bom"
                },
                {
                    "en": "The game is a draw",
                    "es": "El juego es empate",
                    "de": "Das Spiel endet unentschieden",
                    "nl": "Het spel eindigt onbeslist"
                },
                {
                    "en": "You lose the game",
                    "es": "Pierdes la partida",
                    "de": "Man verliert das Spiel",
                    "nl": "Je verliest het spel"
                }
            ],
            "correct": 3,
            "explanation": {
                "en": "If you cannot make any legal move on your turn, you lose the game. This can happen when all your movable pieces have been captured.",
                "es": "Si no puedes hacer ningún movimiento legal en tu turno, pierdes la partida. Esto puede pasar cuando todas tus piezas móviles han sido capturadas.",
                "de": "Wenn man keinen legalen Zug machen kann, verliert man das Spiel. Das passiert, wenn alle beweglichen Figuren geschlagen wurden.",
                "nl": "Als je geen legale zet kunt doen, verlies je het spel. Dit kan gebeuren als al je beweegbare stukken geslagen zijn."
            }
        },
        {
            "question": {
                "en": "What is the purpose of placing a Bomb in the front row?",
                "es": "¿Cuál es el propósito de una Bomba en la primera fila?",
                "de": "Wozu stellt man eine Bombe in die vordere Reihe?",
                "nl": "Wat is het doel van een Bom in de voorste rij?"
            },
            "options": [
                {
                    "en": "To surprise aggressive attackers early on",
                    "es": "Para sorprender a atacantes agresivos",
                    "de": "Um aggressive Angreifer früh zu überraschen",
                    "nl": "Om agressieve aanvallers vroeg te verrassen"
                },
                {
                    "en": "Bombs must be in the front row",
                    "es": "Las Bombas deben estar en la primera fila",
                    "de": "Bomben müssen in der vorderen Reihe stehen",
                    "nl": "Bommen moeten in de voorste rij staan"
                },
                {
                    "en": "Front row Bombs explode stronger",
                    "es": "Las Bombas de primera fila explotan más fuerte",
                    "de": "Bomben der vorderen Reihe explodieren stärker",
                    "nl": "Bommen in de voorste rij ontploffen sterker"
                },
                {
                    "en": "To protect the Marshal",
                    "es": "Para proteger al Mariscal",
                    "de": "Um den Marschall zu schützen",
                    "nl": "Om de Maarschalk te beschermen"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "A front-row Bomb can surprise opponents who attack aggressively, destroying their pieces and slowing their advance unexpectedly.",
                "es": "Una Bomba en la primera fila puede sorprender a oponentes que atacan agresivamente, destruyendo sus piezas e frenando su avance.",
                "de": "Eine Bombe in der vorderen Reihe kann Gegner überraschen, die aggressiv angreifen, und ihren Vormarsch unerwartet stoppen.",
                "nl": "Een Bom in de voorste rij kan tegenstanders verrassen die agressief aanvallen en hun opmars onverwacht stoppen."
            }
        },
        {
            "question": {
                "en": "What is the strategic value of the Sergeant in Stratego?",
                "es": "¿Cuál es el valor estratégico del Sargento en Stratego?",
                "de": "Was ist der strategische Wert des Feldwebels in Stratego?",
                "nl": "Wat is de strategische waarde van de Sergeant in Stratego?"
            },
            "options": [
                {
                    "en": "It can defuse Bombs",
                    "es": "Puede desactivar Bombas",
                    "de": "Er kann Bomben entschärfen",
                    "nl": "Het kan Bommen ontmantelen"
                },
                {
                    "en": "It defeats the Marshal",
                    "es": "Derrota al Mariscal",
                    "de": "Er besiegt den Marschall",
                    "nl": "Het verslaat de Maarschalk"
                },
                {
                    "en": "It is expendable for probing enemy positions",
                    "es": "Es prescindible para sondear posiciones enemigas",
                    "de": "Er ist entbehrlich zum Erkunden feindlicher Positionen",
                    "nl": "Het is vervangbaar voor het verkennen van vijandelijke posities"
                },
                {
                    "en": "It can move multiple squares",
                    "es": "Puede moverse varias casillas",
                    "de": "Er kann mehrere Felder ziehen",
                    "nl": "Het kan meerdere vakjes bewegen"
                }
            ],
            "correct": 2,
            "explanation": {
                "en": "Sergeants (rank 4) are low enough in value to be sacrificed for information but strong enough to defeat Miners and Scouts.",
                "es": "Los Sargentos (rango 4) son lo bastante prescindibles para sacrificar por información pero lo bastante fuertes para derrotar Mineros y Exploradores.",
                "de": "Feldwebel (Rang 4) sind niedrig genug zum Opfern für Information, aber stark genug gegen Mineure und Aufklärer.",
                "nl": "Sergeanten (rang 4) zijn laag genoeg om op te offeren voor informatie maar sterk genoeg om Mineurs en Verkenners te verslaan."
            }
        },
        {
            "question": {
                "en": "What is a 'decoy Flag' setup in Stratego?",
                "es": "¿Qué es una colocación de 'Bandera señuelo' en Stratego?",
                "de": "Was ist ein 'Flaggen-Köder'-Aufbau in Stratego?",
                "nl": "Wat is een 'lok-Vlag' opstelling in Stratego?"
            },
            "options": [
                {
                    "en": "Placing a second Flag on the board",
                    "es": "Colocar una segunda Bandera en el tablero",
                    "de": "Eine zweite Flagge aufstellen",
                    "nl": "Een tweede Vlag op het bord plaatsen"
                },
                {
                    "en": "Making one area look like the Flag position",
                    "es": "Hacer que un área parezca la posición de la Bandera",
                    "de": "Einen Bereich wie die Flaggenposition aussehen lassen",
                    "nl": "Een gebied laten lijken op de Vlagpositie"
                },
                {
                    "en": "Hiding the Flag in plain sight",
                    "es": "Esconder la Bandera a plena vista",
                    "de": "Die Flagge offen verstecken",
                    "nl": "De Vlag voor het oog verbergen"
                },
                {
                    "en": "Moving the Flag during the game",
                    "es": "Mover la Bandera durante la partida",
                    "de": "Die Flagge während des Spiels bewegen",
                    "nl": "De Vlag tijdens het spel verplaatsen"
                }
            ],
            "correct": 1,
            "explanation": {
                "en": "A decoy Flag setup involves placing Bombs around an empty area to make the opponent think the Flag is there, while hiding it elsewhere.",
                "es": "Una Bandera señuelo implica colocar Bombas alrededor de un área vacía para que el oponente piense que la Bandera está allí.",
                "de": "Ein Flaggen-Köder bedeutet, Bomben um einen leeren Bereich zu platzieren, damit der Gegner dort die Flagge vermutet.",
                "nl": "Een lok-Vlag houdt in dat je Bommen rond een leeg gebied plaatst zodat de tegenstander denkt dat de Vlag daar staat."
            }
        },
        {
            "question": {
                "en": "What is the risk of using the General too aggressively?",
                "es": "¿Cuál es el riesgo de usar el General demasiado agresivamente?",
                "de": "Was ist das Risiko, den General zu aggressiv einzusetzen?",
                "nl": "Wat is het risico van de Generaal te agressief gebruiken?"
            },
            "options": [
                {
                    "en": "It might encounter the Marshal or a Bomb",
                    "es": "Podría encontrar al Mariscal o una Bomba",
                    "de": "Er könnte auf den Marschall oder eine Bombe treffen",
                    "nl": "Het kan de Maarschalk of een Bom tegenkomen"
                },
                {
                    "en": "It loses rank when attacking",
                    "es": "Pierde rango al atacar",
                    "de": "Er verliert Rang beim Angreifen",
                    "nl": "Het verliest rang bij aanvallen"
                },
                {
                    "en": "The General cannot attack forward",
                    "es": "El General no puede atacar hacia adelante",
                    "de": "Der General kann nicht vorwärts angreifen",
                    "nl": "De Generaal kan niet voorwaarts aanvallen"
                },
                {
                    "en": "It must return to the back row",
                    "es": "Debe regresar a la última fila",
                    "de": "Er muss in die hintere Reihe zurück",
                    "nl": "Het moet terug naar de achterste rij"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Using the General (rank 9) aggressively risks losing it to the Marshal (rank 10) or a Bomb. Since you only have one General, this loss is significant.",
                "es": "Usar el General (rango 9) agresivamente arriesga perderlo contra el Mariscal (rango 10) o una Bomba. Como solo hay uno, la pérdida es significativa.",
                "de": "Den General (Rang 9) aggressiv einzusetzen riskiert den Verlust gegen den Marschall (Rang 10) oder eine Bombe. Da man nur einen hat, ist der Verlust erheblich.",
                "nl": "De Generaal (rang 9) agressief gebruiken riskeert het verlies tegen de Maarschalk (rang 10) of een Bom. Omdat je er maar één hebt, is dit een groot verlies."
            }
        },
        {
            "question": {
                "en": "What is the advantage of placing strong pieces on the flanks?",
                "es": "¿Cuál es la ventaja de colocar piezas fuertes en los flancos?",
                "de": "Was ist der Vorteil, starke Figuren an die Flanken zu stellen?",
                "nl": "Wat is het voordeel van sterke stukken op de flanken plaatsen?"
            },
            "options": [
                {
                    "en": "They gain bonus movement range",
                    "es": "Ganan alcance de movimiento extra",
                    "de": "Sie gewinnen zusätzliche Bewegungsreichweite",
                    "nl": "Ze krijgen extra bewegingsbereik"
                },
                {
                    "en": "The opponent focuses attacks on the center",
                    "es": "El oponente concentra ataques en el centro",
                    "de": "Der Gegner konzentriert Angriffe auf die Mitte",
                    "nl": "De tegenstander richt aanvallen op het midden"
                },
                {
                    "en": "Flanks have fewer squares to defend",
                    "es": "Los flancos tienen menos casillas que defender",
                    "de": "Flanken haben weniger Felder zu verteidigen",
                    "nl": "Flanken hebben minder vakjes om te verdedigen"
                },
                {
                    "en": "Flank pieces cannot be attacked",
                    "es": "Las piezas de flanco no pueden ser atacadas",
                    "de": "Flanken-Figuren können nicht angegriffen werden",
                    "nl": "Flankstukken kunnen niet aangevallen worden"
                }
            ],
            "correct": 2,
            "explanation": {
                "en": "Pieces on the flanks have the board edge protecting one side, meaning they only need to defend fewer directions. This is similar to corner defense.",
                "es": "Las piezas en los flancos tienen el borde del tablero protegiendo un lado, lo que significa que defienden menos direcciones.",
                "de": "Figuren an den Flanken haben den Brettrand als Schutz auf einer Seite und müssen weniger Richtungen verteidigen.",
                "nl": "Stukken op de flanken hebben de bordrand als bescherming aan één kant en hoeven minder richtingen te verdedigen."
            }
        },
        {
            "question": {
                "en": "What is a 'ladder attack' in Stratego?",
                "es": "¿Qué es un 'ataque en escalera' en Stratego?",
                "de": "Was ist ein 'Leiterangriff' in Stratego?",
                "nl": "Wat is een 'ladderaanval' in Stratego?"
            },
            "options": [
                {
                    "en": "Attacking pieces in ascending rank order",
                    "es": "Atacar piezas en orden de rango ascendente",
                    "de": "Figuren in aufsteigender Rangfolge angreifen",
                    "nl": "Stukken aanvallen in oplopende rangvolgorde"
                },
                {
                    "en": "Climbing over the lakes",
                    "es": "Trepar sobre los lagos",
                    "de": "Über die Seen klettern",
                    "nl": "Over de meren klimmen"
                },
                {
                    "en": "Moving pieces backward one at a time",
                    "es": "Mover piezas hacia atrás una a una",
                    "de": "Figuren einzeln rückwärts bewegen",
                    "nl": "Stukken één voor één achteruit bewegen"
                },
                {
                    "en": "Stacking pieces on top of each other",
                    "es": "Apilar piezas unas sobre otras",
                    "de": "Figuren übereinanderstapeln",
                    "nl": "Stukken op elkaar stapelen"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "A ladder attack involves using progressively stronger pieces to defeat enemy pieces, working up from low to high rank to minimize losses.",
                "es": "Un ataque en escalera implica usar piezas progresivamente más fuertes para derrotar piezas enemigas, de rango bajo a alto.",
                "de": "Ein Leiterangriff nutzt progressiv stärkere Figuren gegen feindliche Figuren, von niedrigem zu hohem Rang, um Verluste zu minimieren.",
                "nl": "Een ladderaanval gebruikt steeds sterkere stukken om vijandelijke stukken te verslaan, van laag naar hoog rang, om verliezen te minimaliseren."
            }
        },
        {
            "question": {
                "en": "How many Colonels does each player start with?",
                "es": "¿Con cuántos Coroneles empieza cada jugador?",
                "de": "Mit wie vielen Obersten beginnt jeder Spieler?",
                "nl": "Met hoeveel Kolonels begint elke speler?"
            },
            "options": [
                {
                    "en": "3 Colonels",
                    "es": "3 Coroneles",
                    "de": "3 Oberste",
                    "nl": "3 Kolonels"
                },
                {
                    "en": "1 Colonel",
                    "es": "1 Coronel",
                    "de": "1 Oberst",
                    "nl": "1 Kolonel"
                },
                {
                    "en": "2 Colonels",
                    "es": "2 Coroneles",
                    "de": "2 Oberste",
                    "nl": "2 Kolonels"
                },
                {
                    "en": "4 Colonels",
                    "es": "4 Coroneles",
                    "de": "4 Oberste",
                    "nl": "4 Kolonels"
                }
            ],
            "correct": 2,
            "explanation": {
                "en": "Each player starts with 2 Colonels (rank 8). They are powerful pieces that can defeat most opponents except the General and Marshal.",
                "es": "Cada jugador comienza con 2 Coroneles (rango 8). Son piezas poderosas que derrotan a la mayoría excepto al General y Mariscal.",
                "de": "Jeder Spieler beginnt mit 2 Obersten (Rang 8). Sie sind mächtige Figuren, die die meisten Gegner besiegen außer General und Marschall.",
                "nl": "Elke speler begint met 2 Kolonels (rang 8). Het zijn krachtige stukken die de meeste tegenstanders verslaan behalve Generaal en Maarschalk."
            }
        },
        {
            "question": {
                "en": "What information do you gain when a Scout attacks a piece?",
                "es": "¿Qué información obtienes cuando un Explorador ataca una pieza?",
                "de": "Welche Information erhält man, wenn ein Aufklärer angreift?",
                "nl": "Welke informatie krijg je als een Verkenner een stuk aanvalt?"
            },
            "options": [
                {
                    "en": "The opponent's entire setup",
                    "es": "Toda la configuración del oponente",
                    "de": "Den gesamten Aufbau des Gegners",
                    "nl": "De hele opstelling van de tegenstander"
                },
                {
                    "en": "The rank of the attacked piece",
                    "es": "El rango de la pieza atacada",
                    "de": "Den Rang der angegriffenen Figur",
                    "nl": "De rang van het aangevallen stuk"
                },
                {
                    "en": "The location of the Flag",
                    "es": "La ubicación de la Bandera",
                    "de": "Den Ort der Flagge",
                    "nl": "De locatie van de Vlag"
                },
                {
                    "en": "How many pieces the opponent has left",
                    "es": "Cuántas piezas le quedan al oponente",
                    "de": "Wie viele Figuren der Gegner noch hat",
                    "nl": "Hoeveel stukken de tegenstander nog heeft"
                }
            ],
            "correct": 1,
            "explanation": {
                "en": "When a Scout attacks an enemy piece, the battle reveals the defender's rank. Even if the Scout loses, this information can be very valuable.",
                "es": "Cuando un Explorador ataca una pieza enemiga, la batalla revela el rango del defensor. Aunque el Explorador pierda, la información es valiosa.",
                "de": "Wenn ein Aufklärer eine feindliche Figur angreift, wird der Rang des Verteidigers enthüllt. Auch wenn der Aufklärer verliert, ist die Information wertvoll.",
                "nl": "Als een Verkenner een vijandelijk stuk aanvalt, wordt de rang van de verdediger onthuld. Zelfs als de Verkenner verliest, is de informatie waardevol."
            }
        },
        {
            "question": {
                "en": "Why is it useful to remember which enemy pieces have moved?",
                "es": "¿Por qué es útil recordar qué piezas enemigas se han movido?",
                "de": "Warum ist es nützlich, sich zu merken, welche Figuren sich bewegt haben?",
                "nl": "Waarom is het nuttig te onthouden welke vijandelijke stukken bewogen hebben?"
            },
            "options": [
                {
                    "en": "Moved pieces gain extra power",
                    "es": "Las piezas movidas ganan poder extra",
                    "de": "Bewegte Figuren gewinnen extra Kraft",
                    "nl": "Bewogen stukken krijgen extra kracht"
                },
                {
                    "en": "Unmoved pieces might be Bombs or the Flag",
                    "es": "Piezas sin mover podrían ser Bombas o la Bandera",
                    "de": "Unbewegliche Figuren könnten Bomben oder die Flagge sein",
                    "nl": "Onbewogen stukken kunnen Bommen of de Vlag zijn"
                },
                {
                    "en": "It helps you skip your turn",
                    "es": "Te ayuda a saltar tu turno",
                    "de": "Es hilft, den Zug zu überspringen",
                    "nl": "Het helpt je beurt over te slaan"
                },
                {
                    "en": "Moved pieces cannot attack again",
                    "es": "Las piezas movidas no pueden volver a atacar",
                    "de": "Bewegte Figuren können nicht mehr angreifen",
                    "nl": "Bewogen stukken kunnen niet meer aanvallen"
                }
            ],
            "correct": 1,
            "explanation": {
                "en": "Pieces that have never moved are likely Bombs or the Flag, since these cannot move. Tracking movement helps identify immovable pieces.",
                "es": "Las piezas que nunca se han movido probablemente son Bombas o la Bandera, ya que no pueden moverse. Rastrear el movimiento ayuda a identificarlas.",
                "de": "Figuren, die sich nie bewegt haben, sind wahrscheinlich Bomben oder die Flagge. Das Verfolgen der Bewegung hilft, unbewegliche Figuren zu erkennen.",
                "nl": "Stukken die nooit bewogen hebben zijn waarschijnlijk Bommen of de Vlag. Het bijhouden van beweging helpt onbeweeglijke stukken te identificeren."
            }
        },
        {
            "question": {
                "en": "What is the role of the Colonel in Stratego strategy?",
                "es": "¿Cuál es el papel del Coronel en la estrategia de Stratego?",
                "de": "Welche Rolle spielt der Oberst in der Stratego-Strategie?",
                "nl": "Wat is de rol van de Kolonel in Stratego-strategie?"
            },
            "options": [
                {
                    "en": "Defusing enemy Bombs",
                    "es": "Desactivar Bombas enemigas",
                    "de": "Feindliche Bomben entschärfen",
                    "nl": "Vijandelijke Bommen ontmantelen"
                },
                {
                    "en": "Protecting the Flag directly",
                    "es": "Proteger la Bandera directamente",
                    "de": "Die Flagge direkt schützen",
                    "nl": "De Vlag direct beschermen"
                },
                {
                    "en": "Scouting enemy positions",
                    "es": "Explorar posiciones enemigas",
                    "de": "Feindliche Positionen erkunden",
                    "nl": "Vijandelijke posities verkennen"
                },
                {
                    "en": "Eliminating mid-range enemy pieces",
                    "es": "Eliminar piezas enemigas de rango medio",
                    "de": "Feindliche Figuren mittlerer Stärke ausschalten",
                    "nl": "Vijandelijke stukken van middelbare rang uitschakelen"
                }
            ],
            "correct": 3,
            "explanation": {
                "en": "Colonels (rank 8) are powerful enough to defeat most enemy pieces. They excel at eliminating mid-range threats like Majors and Captains.",
                "es": "Los Coroneles (rango 8) son lo bastante poderosos para derrotar a la mayoría. Destacan eliminando amenazas como Comandantes y Capitanes.",
                "de": "Oberste (Rang 8) sind stark genug, um die meisten Figuren zu besiegen. Sie eignen sich besonders gegen Majore und Hauptleute.",
                "nl": "Kolonels (rang 8) zijn sterk genoeg om de meeste stukken te verslaan. Ze blinken uit in het uitschakelen van Majoors en Kapiteins."
            }
        },
        {
            "question": {
                "en": "What is a common setup mistake for beginners in Stratego?",
                "es": "¿Cuál es un error de colocación común para principiantes?",
                "de": "Was ist ein häufiger Aufstellungsfehler von Anfängern?",
                "nl": "Wat is een veelgemaakte opstellingsfout voor beginners?"
            },
            "options": [
                {
                    "en": "Using too many Bombs around the Flag",
                    "es": "Usar demasiadas Bombas alrededor de la Bandera",
                    "de": "Zu viele Bomben um die Flagge",
                    "nl": "Te veel Bommen rond de Vlag"
                },
                {
                    "en": "Placing all strong pieces in the back row",
                    "es": "Colocar todas las piezas fuertes en la última fila",
                    "de": "Alle starken Figuren in die hintere Reihe stellen",
                    "nl": "Alle sterke stukken in de achterste rij plaatsen"
                },
                {
                    "en": "Having too many Scouts",
                    "es": "Tener demasiados Exploradores",
                    "de": "Zu viele Aufklärer haben",
                    "nl": "Te veel Verkenners hebben"
                },
                {
                    "en": "Placing the Flag in the center",
                    "es": "Colocar la Bandera en el centro",
                    "de": "Die Flagge in die Mitte stellen",
                    "nl": "De Vlag in het midden plaatsen"
                }
            ],
            "correct": 1,
            "explanation": {
                "en": "Placing all strong pieces in the back row delays their use. Some strong pieces should be placed forward to engage the opponent early.",
                "es": "Colocar todas las piezas fuertes en la última fila retrasa su uso. Algunas deben estar adelante para enfrentar al oponente temprano.",
                "de": "Alle starken Figuren in die hintere Reihe zu stellen verzögert ihren Einsatz. Einige sollten vorne stehen, um den Gegner früh zu bekämpfen.",
                "nl": "Alle sterke stukken in de achterste rij plaatsen vertraagt hun gebruik. Sommige moeten vooraan staan om de tegenstander vroeg te bevechten."
            }
        },
        {
            "question": {
                "en": "What is the purpose of a 'screen' formation in Stratego?",
                "es": "¿Cuál es el propósito de una formación 'pantalla' en Stratego?",
                "de": "Was ist der Zweck einer 'Schirm'-Formation in Stratego?",
                "nl": "Wat is het doel van een 'scherm' formatie in Stratego?"
            },
            "options": [
                {
                    "en": "To hide high-value pieces behind lower-value ones",
                    "es": "Esconder piezas valiosas detrás de las de menor valor",
                    "de": "Wertvolle Figuren hinter weniger wertvollen verstecken",
                    "nl": "Waardevolle stukken achter minder waardevolle verbergen"
                },
                {
                    "en": "To block the opponent from seeing the board",
                    "es": "Bloquear la vista del tablero al oponente",
                    "de": "Dem Gegner die Sicht aufs Brett versperren",
                    "nl": "Het zicht van de tegenstander op het bord blokkeren"
                },
                {
                    "en": "To create an impenetrable wall",
                    "es": "Crear un muro impenetrable",
                    "de": "Eine undurchdringliche Mauer schaffen",
                    "nl": "Een ondoordringbare muur creëren"
                },
                {
                    "en": "To move multiple pieces at once",
                    "es": "Mover varias piezas a la vez",
                    "de": "Mehrere Figuren gleichzeitig bewegen",
                    "nl": "Meerdere stukken tegelijk bewegen"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "A screen formation uses expendable low-rank pieces as a front line to hide and protect higher-value pieces positioned behind them.",
                "es": "Una formación pantalla usa piezas prescindibles de bajo rango como primera línea para esconder y proteger piezas más valiosas detrás.",
                "de": "Eine Schirm-Formation nutzt entbehrliche niedrigrangige Figuren als Frontlinie zum Schutz der wertvolleren Figuren dahinter.",
                "nl": "Een schermformatie gebruikt opofferbare stukken van lage rang als frontlinie om waardevollere stukken erachter te verbergen."
            }
        },
        {
            "question": {
                "en": "What is an 'island defense' in Stratego?",
                "es": "¿Qué es una 'defensa isla' en Stratego?",
                "de": "Was ist eine 'Inselverteidigung' in Stratego?",
                "nl": "Wat is een 'eilandverdediging' in Stratego?"
            },
            "options": [
                {
                    "en": "Placing pieces only near the lakes",
                    "es": "Colocar piezas solo cerca de los lagos",
                    "de": "Figuren nur nahe den Seen aufstellen",
                    "nl": "Stukken alleen bij de meren plaatsen"
                },
                {
                    "en": "Surrounding the Flag with immovable pieces",
                    "es": "Rodear la Bandera con piezas inmóviles",
                    "de": "Die Flagge mit unbeweglichen Figuren umgeben",
                    "nl": "De Vlag omringen met onbeweeglijke stukken"
                },
                {
                    "en": "Moving all pieces to one side",
                    "es": "Mover todas las piezas a un lado",
                    "de": "Alle Figuren auf eine Seite bewegen",
                    "nl": "Alle stukken naar één kant bewegen"
                },
                {
                    "en": "Keeping all pieces isolated",
                    "es": "Mantener todas las piezas aisladas",
                    "de": "Alle Figuren isoliert halten",
                    "nl": "Alle stukken geïsoleerd houden"
                }
            ],
            "correct": 1,
            "explanation": {
                "en": "An island defense creates a fortress around the Flag using Bombs and strong pieces, making it very difficult for the opponent to reach the Flag.",
                "es": "Una defensa isla crea una fortaleza alrededor de la Bandera usando Bombas y piezas fuertes, dificultando que el oponente la alcance.",
                "de": "Eine Inselverteidigung schafft eine Festung um die Flagge mit Bomben und starken Figuren, die es dem Gegner erschwert, die Flagge zu erreichen.",
                "nl": "Een eilandverdediging creëert een fort rond de Vlag met Bommen en sterke stukken, waardoor het moeilijk is voor de tegenstander."
            }
        },
        {
            "question": {
                "en": "Why should you vary your Stratego setup between games?",
                "es": "¿Por qué debes variar tu configuración entre partidas?",
                "de": "Warum sollte man den Aufbau zwischen Spielen variieren?",
                "nl": "Waarom moet je je opstelling variëren tussen spellen?"
            },
            "options": [
                {
                    "en": "The rules require a new setup each game",
                    "es": "Las reglas exigen una nueva configuración",
                    "de": "Die Regeln verlangen einen neuen Aufbau",
                    "nl": "De regels eisen een nieuwe opstelling"
                },
                {
                    "en": "Pieces wear out in the same position",
                    "es": "Las piezas se desgastan en la misma posición",
                    "de": "Figuren nutzen sich ab in derselben Position",
                    "nl": "Stukken slijten in dezelfde positie"
                },
                {
                    "en": "Your opponent can predict your Flag location",
                    "es": "Tu oponente puede predecir la ubicación de tu Bandera",
                    "de": "Der Gegner kann die Flaggenposition vorhersagen",
                    "nl": "Je tegenstander kan de Vlaglocatie voorspellen"
                },
                {
                    "en": "It makes the game faster",
                    "es": "Hace la partida más rápida",
                    "de": "Es macht das Spiel schneller",
                    "nl": "Het maakt het spel sneller"
                }
            ],
            "correct": 2,
            "explanation": {
                "en": "If you always use the same setup, regular opponents will learn your Flag position and strategy. Varying your setup keeps them guessing.",
                "es": "Si siempre usas la misma configuración, los oponentes habituales aprenderán tu posición de Bandera. Variar mantiene la incertidumbre.",
                "de": "Bei gleichem Aufbau lernen regelmäßige Gegner die Flaggenposition. Abwechslung hält sie im Ungewissen.",
                "nl": "Als je altijd dezelfde opstelling gebruikt, leren vaste tegenstanders je Vlagpositie. Variëren houdt ze in het ongewisse."
            }
        },
        {
            "question": {
                "en": "What is the importance of controlling chokepoints in Stratego?",
                "es": "¿Cuál es la importancia de controlar puntos de estrangulamiento?",
                "de": "Warum ist die Kontrolle von Engpässen in Stratego wichtig?",
                "nl": "Wat is het belang van het controleren van knelpunten in Stratego?"
            },
            "options": [
                {
                    "en": "They limit enemy movement options",
                    "es": "Limitan las opciones de movimiento enemigas",
                    "de": "Sie begrenzen die Bewegungsmöglichkeiten des Feindes",
                    "nl": "Ze beperken de bewegingsmogelijkheden van de vijand"
                },
                {
                    "en": "They give your pieces extra power",
                    "es": "Dan poder extra a tus piezas",
                    "de": "Sie geben den eigenen Figuren extra Kraft",
                    "nl": "Ze geven je stukken extra kracht"
                },
                {
                    "en": "They allow diagonal movement",
                    "es": "Permiten movimiento diagonal",
                    "de": "Sie erlauben diagonale Bewegung",
                    "nl": "Ze staan diagonale beweging toe"
                },
                {
                    "en": "They reveal enemy piece ranks",
                    "es": "Revelan los rangos de las piezas enemigas",
                    "de": "Sie enthüllen feindliche Ränge",
                    "nl": "Ze onthullen vijandelijke rangen"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Chokepoints are narrow passages between the lakes. Controlling them limits enemy movement and forces opponents through defended areas.",
                "es": "Los puntos de estrangulamiento son pasos estrechos entre lagos. Controlarlos limita el movimiento enemigo y fuerza el paso por áreas defendidas.",
                "de": "Engpässe sind schmale Durchgänge zwischen den Seen. Sie zu kontrollieren begrenzt feindliche Bewegung und zwingt durch verteidigte Bereiche.",
                "nl": "Knelpunten zijn smalle doorgangen tussen de meren. Ze controleren beperkt vijandelijke beweging en dwingt door verdedigde gebieden."
            }
        },
        {
            "question": {
                "en": "What happens when a Miner attacks a Bomb in Stratego?",
                "es": "¿Qué pasa cuando un Minero ataca una Bomba en Stratego?",
                "de": "Was passiert, wenn ein Mineur eine Bombe in Stratego angreift?",
                "nl": "Wat gebeurt er als een Mineur een Bom aanvalt in Stratego?"
            },
            "options": [
                {
                    "en": "Both pieces are removed",
                    "es": "Ambas piezas se retiran",
                    "de": "Beide Figuren werden entfernt",
                    "nl": "Beide stukken worden verwijderd"
                },
                {
                    "en": "The Miner is destroyed",
                    "es": "El Minero es destruido",
                    "de": "Der Mineur wird zerstört",
                    "nl": "De Mineur wordt vernietigd"
                },
                {
                    "en": "The Miner defuses the Bomb and survives",
                    "es": "El Minero desactiva la Bomba y sobrevive",
                    "de": "Der Mineur entschärft die Bombe und überlebt",
                    "nl": "De Mineur ontmantelt de Bom en overleeft"
                },
                {
                    "en": "Nothing happens",
                    "es": "No pasa nada",
                    "de": "Nichts passiert",
                    "nl": "Er gebeurt niets"
                }
            ],
            "correct": 2,
            "explanation": {
                "en": "The Miner is the only piece that can defuse a Bomb. When a Miner attacks a Bomb, the Bomb is removed and the Miner remains on the board.",
                "es": "El Minero es la única pieza que desactiva Bombas. Cuando un Minero ataca una Bomba, la Bomba se retira y el Minero permanece.",
                "de": "Der Mineur ist die einzige Figur, die Bomben entschärft. Die Bombe wird entfernt und der Mineur bleibt auf dem Brett.",
                "nl": "De Mineur is het enige stuk dat Bommen ontmantelt. De Bom wordt verwijderd en de Mineur blijft op het bord."
            }
        },
        {
            "question": {
                "en": "What is the advantage of hiding your Marshal in the back?",
                "es": "¿Cuál es la ventaja de esconder tu Mariscal atrás?",
                "de": "Was ist der Vorteil, den Marschall hinten zu verstecken?",
                "nl": "Wat is het voordeel van je Maarschalk achterin verbergen?"
            },
            "options": [
                {
                    "en": "It keeps the Spy guessing about its location",
                    "es": "Mantiene al Espía adivinando su ubicación",
                    "de": "Es hält den Spion über seinen Standort im Unklaren",
                    "nl": "Het houdt de Spion in het ongewisse over de locatie"
                },
                {
                    "en": "The Marshal gains power when hidden",
                    "es": "El Mariscal gana poder cuando está oculto",
                    "de": "Der Marschall gewinnt Kraft, wenn versteckt",
                    "nl": "De Maarschalk krijgt kracht als hij verborgen is"
                },
                {
                    "en": "It allows the Marshal to skip turns",
                    "es": "Permite al Mariscal saltar turnos",
                    "de": "Es erlaubt dem Marschall, Züge zu überspringen",
                    "nl": "Het laat de Maarschalk beurten overslaan"
                },
                {
                    "en": "Back row pieces cannot be captured",
                    "es": "Las piezas de la última fila no pueden ser capturadas",
                    "de": "Figuren der hinteren Reihe können nicht gefangen werden",
                    "nl": "Stukken in de achterste rij kunnen niet geslagen worden"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Keeping the Marshal hidden prevents the Spy from targeting it. If the opponent does not know where the Marshal is, the Spy cannot safely attack.",
                "es": "Mantener oculto al Mariscal evita que el Espía lo ataque. Si el oponente no sabe dónde está, el Espía no puede atacar con seguridad.",
                "de": "Den Marschall versteckt zu halten hindert den Spion am gezielten Angriff. Wenn der Gegner nicht weiß, wo er ist, kann der Spion nicht sicher angreifen.",
                "nl": "De Maarschalk verborgen houden voorkomt dat de Spion hem kan aanvallen. Als de tegenstander niet weet waar hij is, kan de Spion niet veilig aanvallen."
            }
        },
        {
            "question": {
                "en": "What are the two lakes on the Stratego board used for?",
                "es": "¿Para qué sirven los dos lagos del tablero de Stratego?",
                "de": "Wozu dienen die zwei Seen auf dem Stratego-Brett?",
                "nl": "Waar dienen de twee meren op het Stratego-bord voor?"
            },
            "options": [
                {
                    "en": "They provide healing zones for pieces",
                    "es": "Proporcionan zonas de curación para piezas",
                    "de": "Sie bieten Heilzonen für Figuren",
                    "nl": "Ze bieden genezingszones voor stukken"
                },
                {
                    "en": "They act as obstacles that create chokepoints",
                    "es": "Actúan como obstáculos que crean cuellos de botella",
                    "de": "Sie dienen als Hindernisse und schaffen Engpässe",
                    "nl": "Ze fungeren als obstakels die knelpunten creëren"
                },
                {
                    "en": "They allow Scouts to teleport",
                    "es": "Permiten a los Exploradores teletransportarse",
                    "de": "Sie erlauben Aufklärern, sich zu teleportieren",
                    "nl": "Ze laten Verkenners teleporteren"
                },
                {
                    "en": "They store captured pieces",
                    "es": "Almacenan piezas capturadas",
                    "de": "Sie speichern gefangene Figuren",
                    "nl": "Ze bewaren gevangen stukken"
                }
            ],
            "correct": 1,
            "explanation": {
                "en": "The two 2x2 lakes in the center act as impassable obstacles, dividing the board and creating three narrow corridors that influence strategy.",
                "es": "Los dos lagos de 2x2 en el centro son obstáculos infranqueables que dividen el tablero y crean tres corredores estrechos.",
                "de": "Die zwei 2x2-Seen in der Mitte sind unpassierbare Hindernisse, die das Brett teilen und drei enge Korridore schaffen.",
                "nl": "De twee 2x2-meren in het midden zijn onbegaanbare obstakels die het bord verdelen en drie smalle corridors creëren."
            }
        },
        {
            "question": {
                "en": "When is the best time to use the Spy in Stratego?",
                "es": "¿Cuándo es el mejor momento para usar el Espía en Stratego?",
                "de": "Wann ist der beste Zeitpunkt, den Spion in Stratego einzusetzen?",
                "nl": "Wanneer is het beste moment om de Spion te gebruiken in Stratego?"
            },
            "options": [
                {
                    "en": "At the start of the game",
                    "es": "Al inicio de la partida",
                    "de": "Am Anfang des Spiels",
                    "nl": "Aan het begin van het spel"
                },
                {
                    "en": "When you have identified the Marshal's position",
                    "es": "Cuando hayas identificado la posición del Mariscal",
                    "de": "Wenn man die Position des Marschalls kennt",
                    "nl": "Als je de positie van de Maarschalk hebt geïdentificeerd"
                },
                {
                    "en": "Only in the last turn",
                    "es": "Solo en el último turno",
                    "de": "Nur im letzten Zug",
                    "nl": "Alleen in de laatste beurt"
                },
                {
                    "en": "When all other pieces are captured",
                    "es": "Cuando todas las demás piezas están capturadas",
                    "de": "Wenn alle anderen Figuren gefangen sind",
                    "nl": "Als alle andere stukken gevangen zijn"
                }
            ],
            "correct": 1,
            "explanation": {
                "en": "The Spy should be used when you have identified the Marshal's position. Using it too early risks losing it before it can fulfill its role.",
                "es": "El Espía debe usarse cuando hayas identificado la posición del Mariscal. Usarlo demasiado pronto arriesga perderlo antes de cumplir su función.",
                "de": "Der Spion sollte eingesetzt werden, wenn die Position des Marschalls bekannt ist. Zu frühes Einsetzen riskiert den Verlust.",
                "nl": "De Spion moet gebruikt worden als de positie van de Maarschalk bekend is. Te vroeg gebruiken riskeert het verlies ervan."
            }
        },
        {
            "question": {
                "en": "How many Majors does each player start with in Stratego?",
                "es": "¿Con cuántos Comandantes empieza cada jugador en Stratego?",
                "de": "Mit wie vielen Majoren beginnt jeder Spieler in Stratego?",
                "nl": "Met hoeveel Majoors begint elke speler in Stratego?"
            },
            "options": [
                {
                    "en": "2 Majors",
                    "es": "2 Comandantes",
                    "de": "2 Majore",
                    "nl": "2 Majoors"
                },
                {
                    "en": "4 Majors",
                    "es": "4 Comandantes",
                    "de": "4 Majore",
                    "nl": "4 Majoors"
                },
                {
                    "en": "3 Majors",
                    "es": "3 Comandantes",
                    "de": "3 Majore",
                    "nl": "3 Majoors"
                },
                {
                    "en": "1 Major",
                    "es": "1 Comandante",
                    "de": "1 Major",
                    "nl": "1 Majoor"
                }
            ],
            "correct": 2,
            "explanation": {
                "en": "Each player starts with 3 Majors (rank 7). They are strong mid-range pieces useful for taking on Captains and lower-ranked enemies.",
                "es": "Cada jugador comienza con 3 Comandantes (rango 7). Son piezas fuertes de rango medio útiles contra Capitanes y rangos inferiores.",
                "de": "Jeder Spieler beginnt mit 3 Majoren (Rang 7). Sie sind starke Figuren mittlerer Stärke gegen Hauptleute und niedrigere Ränge.",
                "nl": "Elke speler begint met 3 Majoors (rang 7). Het zijn sterke middenrangstukken tegen Kapiteins en lagere rangen."
            }
        },
        {
            "question": {
                "en": "What is the disadvantage of placing the Flag in the center?",
                "es": "¿Cuál es la desventaja de colocar la Bandera en el centro?",
                "de": "Was ist der Nachteil, die Flagge in die Mitte zu stellen?",
                "nl": "Wat is het nadeel van de Vlag in het midden plaatsen?"
            },
            "options": [
                {
                    "en": "It is illegal to place the Flag there",
                    "es": "Es ilegal colocar la Bandera allí",
                    "de": "Es ist verboten, die Flagge dort zu platzieren",
                    "nl": "Het is verboden de Vlag daar te plaatsen"
                },
                {
                    "en": "Center placement is always best",
                    "es": "La colocación central siempre es la mejor",
                    "de": "Die Mitte ist immer der beste Platz",
                    "nl": "Plaatsing in het midden is altijd het beste"
                },
                {
                    "en": "It must be defended from more directions",
                    "es": "Debe defenderse desde más direcciones",
                    "de": "Sie muss aus mehr Richtungen verteidigt werden",
                    "nl": "Het moet vanuit meer richtingen verdedigd worden"
                },
                {
                    "en": "The Flag becomes visible to the opponent",
                    "es": "La Bandera se vuelve visible para el oponente",
                    "de": "Die Flagge wird für den Gegner sichtbar",
                    "nl": "De Vlag wordt zichtbaar voor de tegenstander"
                }
            ],
            "correct": 2,
            "explanation": {
                "en": "A center-placed Flag can be approached from all directions, requiring more pieces to defend it compared to a corner or edge placement.",
                "es": "Una Bandera en el centro puede ser alcanzada desde todas las direcciones, requiriendo más piezas para defenderla que en esquina o borde.",
                "de": "Eine Flagge in der Mitte kann aus allen Richtungen erreicht werden und benötigt mehr Figuren zur Verteidigung als an Ecke oder Rand.",
                "nl": "Een Vlag in het midden kan vanuit alle richtingen benaderd worden en vereist meer stukken ter verdediging dan in een hoek of aan de rand."
            }
        },
        {
            "question": {
                "en": "What is the 'endgame' phase in Stratego?",
                "es": "¿Qué es la fase de 'final' en Stratego?",
                "de": "Was ist die 'Endspiel'-Phase in Stratego?",
                "nl": "Wat is de 'eindfase' in Stratego?"
            },
            "options": [
                {
                    "en": "The first three moves",
                    "es": "Los tres primeros movimientos",
                    "de": "Die ersten drei Züge",
                    "nl": "De eerste drie zetten"
                },
                {
                    "en": "When both players agree to stop",
                    "es": "Cuando ambos jugadores acuerdan parar",
                    "de": "Wenn beide Spieler aufhören wollen",
                    "nl": "Wanneer beide spelers afspreken te stoppen"
                },
                {
                    "en": "The setup phase before the game starts",
                    "es": "La fase de configuración antes del juego",
                    "de": "Die Aufstellungsphase vor dem Spiel",
                    "nl": "De opstellingsfase voor het spel"
                },
                {
                    "en": "When few pieces remain and the Flag hunt begins",
                    "es": "Cuando quedan pocas piezas y comienza la caza de Bandera",
                    "de": "Wenn wenige Figuren übrig sind und die Flaggenjagd beginnt",
                    "nl": "Wanneer weinig stukken over zijn en de Vlagjacht begint"
                }
            ],
            "correct": 3,
            "explanation": {
                "en": "The endgame is when many pieces have been captured and players focus on finding the Flag. Miners become crucial for breaking through Bomb defenses.",
                "es": "El final es cuando muchas piezas han sido capturadas y los jugadores se centran en encontrar la Bandera. Los Mineros son cruciales.",
                "de": "Das Endspiel ist, wenn viele Figuren geschlagen wurden und die Spieler sich auf die Flaggensuche konzentrieren. Mineure werden entscheidend.",
                "nl": "De eindfase is wanneer veel stukken geslagen zijn en spelers zich richten op het vinden van de Vlag. Mineurs worden cruciaal."
            }
        },
        {
            "question": {
                "en": "Why is the Spy considered a high-risk piece?",
                "es": "¿Por qué se considera al Espía una pieza de alto riesgo?",
                "de": "Warum gilt der Spion als Hochrisiko-Figur?",
                "nl": "Waarom wordt de Spion als een hoog risico stuk beschouwd?"
            },
            "options": [
                {
                    "en": "It is the most expensive piece",
                    "es": "Es la pieza más cara",
                    "de": "Es ist die teuerste Figur",
                    "nl": "Het is het duurste stuk"
                },
                {
                    "en": "It explodes when captured",
                    "es": "Explota cuando es capturado",
                    "de": "Er explodiert beim Fangen",
                    "nl": "Het explodeert bij vangst"
                },
                {
                    "en": "It can defeat the Marshal but loses to everything else",
                    "es": "Puede derrotar al Mariscal pero pierde contra todo lo demás",
                    "de": "Er kann den Marschall besiegen, verliert aber gegen alles andere",
                    "nl": "Het kan de Maarschalk verslaan maar verliest van al het andere"
                },
                {
                    "en": "It cannot move after the first turn",
                    "es": "No puede moverse después del primer turno",
                    "de": "Er kann sich nach dem ersten Zug nicht mehr bewegen",
                    "nl": "Het kan na de eerste beurt niet meer bewegen"
                }
            ],
            "correct": 2,
            "explanation": {
                "en": "The Spy can defeat the Marshal when attacking, but it loses to every other piece. This makes it very valuable yet extremely fragile.",
                "es": "El Espía puede derrotar al Mariscal al atacar, pero pierde contra todas las demás piezas. Esto lo hace valioso pero extremadamente frágil.",
                "de": "Der Spion kann den Marschall im Angriff besiegen, verliert aber gegen alle anderen Figuren. Das macht ihn wertvoll aber sehr zerbrechlich.",
                "nl": "De Spion kan de Maarschalk verslaan bij aanval, maar verliest van alle andere stukken. Dit maakt hem waardevol maar uiterst kwetsbaar."
            }
        },
        {
            "question": {
                "en": "How many Miners does each player have in Stratego?",
                "es": "¿Cuántos Mineros tiene cada jugador en Stratego?",
                "de": "Wie viele Mineure hat jeder Spieler in Stratego?",
                "nl": "Hoeveel Mineurs heeft elke speler in Stratego?"
            },
            "options": [
                {
                    "en": "3 Miners",
                    "es": "3 Mineros",
                    "de": "3 Mineure",
                    "nl": "3 Mineurs"
                },
                {
                    "en": "4 Miners",
                    "es": "4 Mineros",
                    "de": "4 Mineure",
                    "nl": "4 Mineurs"
                },
                {
                    "en": "5 Miners",
                    "es": "5 Mineros",
                    "de": "5 Mineure",
                    "nl": "5 Mineurs"
                },
                {
                    "en": "6 Miners",
                    "es": "6 Mineros",
                    "de": "6 Mineure",
                    "nl": "6 Mineurs"
                }
            ],
            "correct": 2,
            "explanation": {
                "en": "Each player has 5 Miners (rank 3). Their ability to defuse Bombs makes them essential, so having several increases your chances of breaking through.",
                "es": "Cada jugador tiene 5 Mineros (rango 3). Su capacidad de desactivar Bombas los hace esenciales, y tener varios aumenta las posibilidades.",
                "de": "Jeder Spieler hat 5 Mineure (Rang 3). Ihre Fähigkeit, Bomben zu entschärfen, macht sie essenziell; mehrere erhöhen die Chancen.",
                "nl": "Elke speler heeft 5 Mineurs (rang 3). Hun vermogen om Bommen te ontmantelen maakt ze essentieel; meerdere verhogen de kansen."
            }
        },
        {
            "question": {
                "en": "What is a 'flanking maneuver' in Stratego?",
                "es": "¿Qué es una 'maniobra de flanqueo' en Stratego?",
                "de": "Was ist ein 'Flankenmanöver' in Stratego?",
                "nl": "Wat is een 'flankeerbeweging' in Stratego?"
            },
            "options": [
                {
                    "en": "Attacking the opponent's side instead of the center",
                    "es": "Atacar el costado del oponente en vez del centro",
                    "de": "Die Seite des Gegners angreifen statt die Mitte",
                    "nl": "De zijkant van de tegenstander aanvallen in plaats van het midden"
                },
                {
                    "en": "Moving all pieces backward",
                    "es": "Mover todas las piezas hacia atrás",
                    "de": "Alle Figuren rückwärts bewegen",
                    "nl": "Alle stukken achteruit bewegen"
                },
                {
                    "en": "Surrounding a piece on all sides",
                    "es": "Rodear una pieza por todos lados",
                    "de": "Eine Figur von allen Seiten umzingeln",
                    "nl": "Een stuk aan alle kanten omsingelen"
                },
                {
                    "en": "Placing Bombs on the flanks",
                    "es": "Colocar Bombas en los flancos",
                    "de": "Bomben an die Flanken stellen",
                    "nl": "Bommen op de flanken plaatsen"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "A flanking maneuver involves attacking the opponent from the side rather than head-on through the center, potentially bypassing strong defenses.",
                "es": "Una maniobra de flanqueo implica atacar al oponente desde el costado en vez de frontalmente por el centro, evitando defensas fuertes.",
                "de": "Ein Flankenmanöver greift den Gegner seitlich an statt frontal durch die Mitte, um starke Verteidigungen zu umgehen.",
                "nl": "Een flankeerbeweging valt de tegenstander van de zijkant aan in plaats van frontaal door het midden, om sterke verdedigingen te omzeilen."
            }
        },
        {
            "question": {
                "en": "What is a good rule for deciding when to attack in Stratego?",
                "es": "¿Cuál es una buena regla para decidir cuándo atacar?",
                "de": "Was ist eine gute Regel für den Angriffszeitpunkt in Stratego?",
                "nl": "Wat is een goede regel om te beslissen wanneer aan te vallen?"
            },
            "options": [
                {
                    "en": "Always attack every piece you meet",
                    "es": "Siempre atacar cada pieza que encuentres",
                    "de": "Immer jede Figur angreifen",
                    "nl": "Altijd elk stuk dat je tegenkomt aanvallen"
                },
                {
                    "en": "Never attack unless you are certain to win",
                    "es": "Nunca atacar a menos que estés seguro de ganar",
                    "de": "Nie angreifen, es sei denn, man ist sicher zu gewinnen",
                    "nl": "Nooit aanvallen tenzij je zeker bent te winnen"
                },
                {
                    "en": "Attack when the likely gain outweighs the risk",
                    "es": "Atacar cuando la ganancia probable supera el riesgo",
                    "de": "Angreifen, wenn der wahrscheinliche Gewinn das Risiko überwiegt",
                    "nl": "Aanvallen als de waarschijnlijke winst het risico overtreft"
                },
                {
                    "en": "Only attack with the Marshal",
                    "es": "Solo atacar con el Mariscal",
                    "de": "Nur mit dem Marschall angreifen",
                    "nl": "Alleen aanvallen met de Maarschalk"
                }
            ],
            "correct": 2,
            "explanation": {
                "en": "Good Stratego play involves risk assessment. Attack when the potential benefit, such as gaining information or eliminating a threat, outweighs the risk of losing a piece.",
                "es": "Buen juego de Stratego implica evaluación de riesgos. Atacar cuando el beneficio potencial supera el riesgo de perder una pieza.",
                "de": "Gutes Stratego-Spiel beinhaltet Risikobewertung. Angreifen, wenn der potenzielle Nutzen das Risiko des Figurenverlusts überwiegt.",
                "nl": "Goed Stratego spelen houdt risicobeoordeling in. Aanvallen als het potentiële voordeel het risico van stukken verliezen overtreft."
            }
        },
        {
            "question": {
                "en": "What is the strategic role of the Captain in Stratego?",
                "es": "¿Cuál es el papel estratégico del Capitán en Stratego?",
                "de": "Welche strategische Rolle hat der Hauptmann in Stratego?",
                "nl": "Wat is de strategische rol van de Kapitein in Stratego?"
            },
            "options": [
                {
                    "en": "Only used for Flag defense",
                    "es": "Solo usado para defensa de Bandera",
                    "de": "Nur zur Flaggenverteidigung",
                    "nl": "Alleen voor Vlagverdediging"
                },
                {
                    "en": "A versatile fighter for mid-game battles",
                    "es": "Un luchador versátil para batallas a mitad de partida",
                    "de": "Ein vielseitiger Kämpfer für Spielmitte-Kämpfe",
                    "nl": "Een veelzijdige vechter voor gevechten in het midden van het spel"
                },
                {
                    "en": "Used to defuse Bombs",
                    "es": "Usado para desactivar Bombas",
                    "de": "Zum Entschärfen von Bomben",
                    "nl": "Gebruikt om Bommen te ontmantelen"
                },
                {
                    "en": "Can only move on the first turn",
                    "es": "Solo puede moverse en el primer turno",
                    "de": "Kann sich nur im ersten Zug bewegen",
                    "nl": "Kan alleen in de eerste beurt bewegen"
                }
            ],
            "correct": 1,
            "explanation": {
                "en": "Captains (rank 6) are versatile mid-range fighters. With 4 per player, they handle many engagements and can defeat Lieutenants and below.",
                "es": "Los Capitanes (rango 6) son luchadores versátiles de rango medio. Con 4 por jugador, manejan muchos enfrentamientos contra Tenientes y menores.",
                "de": "Hauptleute (Rang 6) sind vielseitige Kämpfer mittlerer Stärke. Mit 4 pro Spieler bewältigen sie viele Kämpfe gegen Leutnante und darunter.",
                "nl": "Kapiteins (rang 6) zijn veelzijdige middenstukken. Met 4 per speler kunnen ze veel gevechten aangaan tegen Luitenanten en lager."
            }
        },
        {
            "question": {
                "en": "How does piece trading work in Stratego?",
                "es": "¿Cómo funciona el intercambio de piezas en Stratego?",
                "de": "Wie funktioniert der Figurentausch in Stratego?",
                "nl": "Hoe werkt het ruilen van stukken in Stratego?"
            },
            "options": [
                {
                    "en": "Players can swap pieces during setup",
                    "es": "Los jugadores pueden intercambiar piezas",
                    "de": "Spieler können Figuren tauschen",
                    "nl": "Spelers kunnen stukken ruilen"
                },
                {
                    "en": "Equal-rank battles remove both pieces",
                    "es": "Batallas de igual rango eliminan ambas piezas",
                    "de": "Gleichrangige Kämpfe entfernen beide Figuren",
                    "nl": "Gevechten van gelijke rang verwijderen beide stukken"
                },
                {
                    "en": "Captured pieces return to the board",
                    "es": "Las piezas capturadas vuelven al tablero",
                    "de": "Gefangene Figuren kehren aufs Brett zurück",
                    "nl": "Gevangen stukken keren terug op het bord"
                },
                {
                    "en": "You can trade pieces with the opponent",
                    "es": "Puedes intercambiar piezas con el oponente",
                    "de": "Man kann Figuren mit dem Gegner tauschen",
                    "nl": "Je kunt stukken ruilen met de tegenstander"
                }
            ],
            "correct": 1,
            "explanation": {
                "en": "When two pieces of equal rank battle, both are removed from the board. This 'trading' is an important strategic consideration.",
                "es": "Cuando dos piezas del mismo rango luchan, ambas se retiran del tablero. Este 'intercambio' es una consideración estratégica importante.",
                "de": "Wenn zwei gleichrangige Figuren kämpfen, werden beide entfernt. Dieser 'Tausch' ist eine wichtige strategische Überlegung.",
                "nl": "Wanneer twee stukken van gelijke rang vechten, worden beide verwijderd. Dit 'ruilen' is een belangrijke strategische overweging."
            }
        },
        {
            "question": {
                "en": "What is a good placement for Miners in Stratego setup?",
                "es": "¿Cuál es una buena colocación para Mineros en Stratego?",
                "de": "Wo platziert man Mineure gut beim Stratego-Aufbau?",
                "nl": "Wat is een goede plaatsing voor Mineurs in Stratego?"
            },
            "options": [
                {
                    "en": "All in the front row",
                    "es": "Todos en la primera fila",
                    "de": "Alle in der vorderen Reihe",
                    "nl": "Allemaal in de voorste rij"
                },
                {
                    "en": "Spread across multiple rows and columns",
                    "es": "Distribuidos en varias filas y columnas",
                    "de": "Über mehrere Reihen und Spalten verteilt",
                    "nl": "Verspreid over meerdere rijen en kolommen"
                },
                {
                    "en": "Grouped together in one corner",
                    "es": "Agrupados juntos en una esquina",
                    "de": "Zusammen in einer Ecke gruppiert",
                    "nl": "Samen gegroepeerd in één hoek"
                },
                {
                    "en": "Behind the Flag only",
                    "es": "Solo detrás de la Bandera",
                    "de": "Nur hinter der Flagge",
                    "nl": "Alleen achter de Vlag"
                }
            ],
            "correct": 1,
            "explanation": {
                "en": "Spreading Miners across the setup ensures you always have one available to defuse Bombs. Grouping them risks losing them all at once.",
                "es": "Distribuir Mineros asegura que siempre tengas uno disponible para desactivar Bombas. Agruparlos arriesga perderlos todos a la vez.",
                "de": "Mineure zu verteilen stellt sicher, dass immer einer zum Entschärfen von Bomben verfügbar ist. Gruppieren riskiert den Verlust aller.",
                "nl": "Mineurs verspreiden zorgt ervoor dat je altijd eentje beschikbaar hebt om Bommen te ontmantelen. Groeperen riskeert ze allemaal te verliezen."
            }
        },
        {
            "question": {
                "en": "Why is it important to protect at least one Miner late in the game?",
                "es": "¿Por qué es importante proteger al menos un Minero al final?",
                "de": "Warum sollte man spät im Spiel mindestens einen Mineur schützen?",
                "nl": "Waarom is het belangrijk minstens één Mineur te beschermen laat in het spel?"
            },
            "options": [
                {
                    "en": "Miners become the strongest piece later",
                    "es": "Los Mineros se vuelven la pieza más fuerte",
                    "de": "Mineure werden zur stärksten Figur",
                    "nl": "Mineurs worden het sterkste stuk"
                },
                {
                    "en": "Without Miners you cannot defuse Bombs to reach the Flag",
                    "es": "Sin Mineros no puedes desactivar Bombas para la Bandera",
                    "de": "Ohne Mineure kann man Bomben nicht entschärfen",
                    "nl": "Zonder Mineurs kun je geen Bommen ontmantelen voor de Vlag"
                },
                {
                    "en": "Miners gain extra movement in the endgame",
                    "es": "Los Mineros ganan movimiento extra en el final",
                    "de": "Mineure gewinnen extra Bewegung im Endspiel",
                    "nl": "Mineurs krijgen extra beweging in de eindfase"
                },
                {
                    "en": "The rules require at least one Miner alive",
                    "es": "Las reglas exigen al menos un Minero vivo",
                    "de": "Die Regeln verlangen mindestens einen lebenden Mineur",
                    "nl": "De regels vereisen minstens één levende Mineur"
                }
            ],
            "correct": 1,
            "explanation": {
                "en": "If all your Miners are captured, you cannot defuse any Bombs. If the Flag is protected by Bombs, you will be unable to capture it and win.",
                "es": "Si todos tus Mineros son capturados, no puedes desactivar Bombas. Si la Bandera está protegida por Bombas, no podrás capturarla.",
                "de": "Werden alle Mineure geschlagen, kann man keine Bomben mehr entschärfen. Ist die Flagge durch Bomben geschützt, kann man sie nicht erobern.",
                "nl": "Als al je Mineurs geslagen zijn, kun je geen Bommen meer ontmantelen. Als de Vlag door Bommen beschermd wordt, kun je niet winnen."
            }
        },
        {
            "question": {
                "en": "What is the benefit of moving a piece only one square at a time?",
                "es": "¿Cuál es el beneficio de mover una pieza solo una casilla a la vez?",
                "de": "Was ist der Vorteil, eine Figur nur ein Feld pro Zug zu bewegen?",
                "nl": "Wat is het voordeel van een stuk slechts één vakje per keer bewegen?"
            },
            "options": [
                {
                    "en": "It does not reveal the piece as a Scout",
                    "es": "No revela la pieza como Explorador",
                    "de": "Es verrät die Figur nicht als Aufklärer",
                    "nl": "Het onthult het stuk niet als Verkenner"
                },
                {
                    "en": "Single-square moves deal more damage",
                    "es": "Movimientos de una casilla causan más daño",
                    "de": "Ein-Feld-Züge verursachen mehr Schaden",
                    "nl": "Bewegingen van één vakje doen meer schade"
                },
                {
                    "en": "Only strong pieces can move one square",
                    "es": "Solo piezas fuertes se mueven una casilla",
                    "de": "Nur starke Figuren ziehen ein Feld",
                    "nl": "Alleen sterke stukken bewegen één vakje"
                },
                {
                    "en": "It prevents the opponent from attacking",
                    "es": "Impide que el oponente ataque",
                    "de": "Es verhindert den Angriff des Gegners",
                    "nl": "Het voorkomt dat de tegenstander aanvalt"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Moving only one square keeps your piece's identity hidden. If a Scout moves multiple squares, the opponent immediately knows it is a Scout.",
                "es": "Moverse solo una casilla mantiene la identidad oculta. Si un Explorador se mueve varias casillas, el oponente sabe que es un Explorador.",
                "de": "Nur ein Feld zu ziehen hält die Identität verborgen. Zieht ein Aufklärer mehrere Felder, weiß der Gegner, dass es ein Aufklärer ist.",
                "nl": "Slechts één vakje bewegen houdt de identiteit verborgen. Als een Verkenner meerdere vakjes beweegt, weet de tegenstander dat het een Verkenner is."
            }
        },
        {
            "question": {
                "en": "What is the typical number of Bombs around a well-defended Flag?",
                "es": "¿Cuántas Bombas suelen rodear una Bandera bien defendida?",
                "de": "Wie viele Bomben umgeben typischerweise eine gut verteidigte Flagge?",
                "nl": "Hoeveel Bommen omringen doorgaans een goed verdedigde Vlag?"
            },
            "options": [
                {
                    "en": "All 6 Bombs",
                    "es": "Las 6 Bombas",
                    "de": "Alle 6 Bomben",
                    "nl": "Alle 6 Bommen"
                },
                {
                    "en": "1 Bomb",
                    "es": "1 Bomba",
                    "de": "1 Bombe",
                    "nl": "1 Bom"
                },
                {
                    "en": "2 to 4 Bombs",
                    "es": "2 a 4 Bombas",
                    "de": "2 bis 4 Bomben",
                    "nl": "2 tot 4 Bommen"
                },
                {
                    "en": "No Bombs",
                    "es": "Ninguna Bomba",
                    "de": "Keine Bomben",
                    "nl": "Geen Bommen"
                }
            ],
            "correct": 2,
            "explanation": {
                "en": "Typically 2 to 4 Bombs are placed around the Flag. Using all 6 leaves no Bombs for other defensive positions and creates an obvious pattern.",
                "es": "Típicamente 2 a 4 Bombas se colocan alrededor de la Bandera. Usar las 6 no deja Bombas para otras posiciones y crea un patrón obvio.",
                "de": "Typischerweise werden 2 bis 4 Bomben um die Flagge platziert. Alle 6 zu verwenden lässt keine Bomben für andere Positionen.",
                "nl": "Doorgaans worden 2 tot 4 Bommen rond de Vlag geplaatst. Alle 6 gebruiken laat geen Bommen over voor andere posities."
            }
        },
        {
            "question": {
                "en": "What is the best way to use Scouts in the early game?",
                "es": "¿Cuál es la mejor forma de usar Exploradores al inicio?",
                "de": "Wie setzt man Aufklärer früh im Spiel am besten ein?",
                "nl": "Wat is de beste manier om Verkenners vroeg in het spel te gebruiken?"
            },
            "options": [
                {
                    "en": "Keep them all in the back row",
                    "es": "Mantenerlos todos en la última fila",
                    "de": "Alle in der hinteren Reihe lassen",
                    "nl": "Ze allemaal in de achterste rij houden"
                },
                {
                    "en": "Use them to probe and reveal enemy pieces",
                    "es": "Usarlos para sondear y revelar piezas enemigas",
                    "de": "Sie zum Erkunden und Enthüllen feindlicher Figuren nutzen",
                    "nl": "Ze gebruiken om vijandelijke stukken te verkennen en te onthullen"
                },
                {
                    "en": "Trade them for the opponent's Marshal",
                    "es": "Intercambiarlos por el Mariscal del oponente",
                    "de": "Sie gegen den gegnerischen Marschall tauschen",
                    "nl": "Ze ruilen voor de Maarschalk van de tegenstander"
                },
                {
                    "en": "Place them next to Bombs",
                    "es": "Colocarlos junto a Bombas",
                    "de": "Sie neben Bomben stellen",
                    "nl": "Ze naast Bommen plaatsen"
                }
            ],
            "correct": 1,
            "explanation": {
                "en": "Scouts are ideal for early probing because they can move multiple squares quickly. Sacrificing Scouts to learn enemy piece ranks is a common tactic.",
                "es": "Los Exploradores son ideales para sondear temprano porque se mueven varias casillas rápidamente. Sacrificarlos para conocer rangos enemigos es táctica común.",
                "de": "Aufklärer sind ideal zum frühen Erkunden, da sie mehrere Felder schnell ziehen können. Sie zu opfern, um feindliche Ränge zu erfahren, ist üblich.",
                "nl": "Verkenners zijn ideaal voor vroege verkenning omdat ze snel meerdere vakjes bewegen. Ze opofferen om vijandelijke rangen te leren is een veelgebruikte tactiek."
            }
        },
        {
            "question": {
                "en": "What is the correct piece count for each player in Stratego?",
                "es": "¿Cuántas piezas tiene cada jugador en Stratego?",
                "de": "Wie viele Figuren hat jeder Spieler in Stratego?",
                "nl": "Hoeveel stukken heeft elke speler in Stratego?"
            },
            "options": [
                {
                    "en": "30 pieces",
                    "es": "30 piezas",
                    "de": "30 Figuren",
                    "nl": "30 stukken"
                },
                {
                    "en": "40 pieces",
                    "es": "40 piezas",
                    "de": "40 Figuren",
                    "nl": "40 stukken"
                },
                {
                    "en": "50 pieces",
                    "es": "50 piezas",
                    "de": "50 Figuren",
                    "nl": "50 stukken"
                },
                {
                    "en": "35 pieces",
                    "es": "35 piezas",
                    "de": "35 Figuren",
                    "nl": "35 stukken"
                }
            ],
            "correct": 1,
            "explanation": {
                "en": "Each player starts with exactly 40 pieces, which fill the 4 rows on their side of the 10x10 board during setup.",
                "es": "Cada jugador empieza con exactamente 40 piezas, que llenan las 4 filas de su lado del tablero 10x10.",
                "de": "Jeder Spieler beginnt mit genau 40 Figuren, die die 4 Reihen auf seiner Seite des 10x10-Bretts füllen.",
                "nl": "Elke speler begint met precies 40 stukken, die de 4 rijen aan hun kant van het 10x10-bord vullen."
            }
        },
        {
            "question": {
                "en": "What should you do when an enemy piece retreats after seeing yours?",
                "es": "¿Qué debes hacer cuando una pieza enemiga retrocede al ver la tuya?",
                "de": "Was sollte man tun, wenn eine feindliche Figur sich zurückzieht?",
                "nl": "Wat moet je doen als een vijandelijk stuk terugtrekt na het zien van het jouwe?"
            },
            "options": [
                {
                    "en": "It likely has a lower rank than your piece",
                    "es": "Probablemente tiene un rango menor que tu pieza",
                    "de": "Es hat wahrscheinlich einen niedrigeren Rang",
                    "nl": "Het heeft waarschijnlijk een lagere rang dan jouw stuk"
                },
                {
                    "en": "It is always the Flag retreating",
                    "es": "Siempre es la Bandera retirándose",
                    "de": "Es ist immer die Flagge, die sich zurückzieht",
                    "nl": "Het is altijd de Vlag die terugtrekt"
                },
                {
                    "en": "Retreating pieces become Bombs",
                    "es": "Las piezas que retroceden se vuelven Bombas",
                    "de": "Zurückweichende Figuren werden zu Bomben",
                    "nl": "Terugtrekkende stukken worden Bommen"
                },
                {
                    "en": "It is a guaranteed trap",
                    "es": "Es una trampa garantizada",
                    "de": "Es ist garantiert eine Falle",
                    "nl": "Het is gegarandeerd een val"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "When an enemy piece retreats after encountering yours, it likely has a lower rank and is trying to survive. This gives you useful ranking information.",
                "es": "Cuando una pieza enemiga retrocede al encontrar la tuya, probablemente tiene menor rango e intenta sobrevivir. Esto da información útil.",
                "de": "Wenn eine feindliche Figur sich nach einem Zusammentreffen zurückzieht, hat sie wahrscheinlich einen niedrigeren Rang. Das gibt nützliche Information.",
                "nl": "Als een vijandelijk stuk terugtrekt na een ontmoeting, heeft het waarschijnlijk een lagere rang. Dit geeft nuttige informatie."
            }
        },
        {
            "question": {
                "en": "What is the strategic purpose of placing a Bomb next to a lake?",
                "es": "¿Cuál es el propósito estratégico de una Bomba junto a un lago?",
                "de": "Was ist der strategische Zweck einer Bombe neben einem See?",
                "nl": "Wat is het strategische doel van een Bom naast een meer?"
            },
            "options": [
                {
                    "en": "Bombs explode bigger near water",
                    "es": "Las Bombas explotan más grande cerca del agua",
                    "de": "Bomben explodieren größer nahe Wasser",
                    "nl": "Bommen ontploffen groter nabij water"
                },
                {
                    "en": "To block a narrow chokepoint passage",
                    "es": "Para bloquear un pasaje estrecho",
                    "de": "Um einen engen Durchgang zu blockieren",
                    "nl": "Om een smalle doorgang te blokkeren"
                },
                {
                    "en": "To protect the lake",
                    "es": "Para proteger el lago",
                    "de": "Um den See zu schützen",
                    "nl": "Om het meer te beschermen"
                },
                {
                    "en": "It creates a chain reaction",
                    "es": "Crea una reacción en cadena",
                    "de": "Es löst eine Kettenreaktion aus",
                    "nl": "Het creëert een kettingreactie"
                }
            ],
            "correct": 1,
            "explanation": {
                "en": "Placing a Bomb next to a lake blocks a narrow chokepoint, forcing enemies to either defuse it with a Miner or find an alternate route.",
                "es": "Colocar una Bomba junto a un lago bloquea un pasaje estrecho, obligando al enemigo a desactivarla con un Minero o buscar otra ruta.",
                "de": "Eine Bombe neben einem See blockiert einen Engpass und zwingt den Feind, sie mit einem Mineur zu entschärfen oder einen anderen Weg zu finden.",
                "nl": "Een Bom naast een meer blokkeert een smal knelpunt en dwingt de vijand om het te ontmantelen met een Mineur of een andere route te zoeken."
            }
        },
        {
            "question": {
                "en": "Which piece should ideally defeat the Spy in Stratego?",
                "es": "¿Qué pieza debería idealmente derrotar al Espía en Stratego?",
                "de": "Welche Figur sollte idealerweise den Spion in Stratego besiegen?",
                "nl": "Welk stuk zou idealiter de Spion moeten verslaan in Stratego?"
            },
            "options": [
                {
                    "en": "Any piece can, since the Spy loses to all but the Marshal",
                    "es": "Cualquier pieza puede, ya que el Espía pierde contra todos salvo el Mariscal",
                    "de": "Jede Figur, da der Spion gegen alle verliert außer den Marschall",
                    "nl": "Elk stuk kan, want de Spion verliest van alles behalve de Maarschalk"
                },
                {
                    "en": "Only the Marshal can defeat the Spy",
                    "es": "Solo el Mariscal puede derrotar al Espía",
                    "de": "Nur der Marschall kann den Spion besiegen",
                    "nl": "Alleen de Maarschalk kan de Spion verslaan"
                },
                {
                    "en": "Only Bombs can stop the Spy",
                    "es": "Solo las Bombas pueden detener al Espía",
                    "de": "Nur Bomben können den Spion stoppen",
                    "nl": "Alleen Bommen kunnen de Spion stoppen"
                },
                {
                    "en": "The Spy is invincible",
                    "es": "El Espía es invencible",
                    "de": "Der Spion ist unbesiegbar",
                    "nl": "De Spion is onoverwinnelijk"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "The Spy loses to every piece except when it attacks the Marshal. Even a Scout (rank 2) can defeat the Spy in combat.",
                "es": "El Espía pierde contra todas las piezas excepto cuando ataca al Mariscal. Incluso un Explorador (rango 2) puede derrotar al Espía.",
                "de": "Der Spion verliert gegen jede Figur, außer wenn er den Marschall angreift. Selbst ein Aufklärer (Rang 2) besiegt den Spion.",
                "nl": "De Spion verliest van elk stuk behalve bij aanval op de Maarschalk. Zelfs een Verkenner (rang 2) verslaat de Spion."
            }
        },
        {
            "question": {
                "en": "What is the effect of revealing your strong pieces too early?",
                "es": "¿Cuál es el efecto de revelar tus piezas fuertes demasiado pronto?",
                "de": "Was ist die Wirkung, starke Figuren zu früh zu enthüllen?",
                "nl": "Wat is het effect van je sterke stukken te vroeg onthullen?"
            },
            "options": [
                {
                    "en": "They become more powerful",
                    "es": "Se vuelven más poderosas",
                    "de": "Sie werden mächtiger",
                    "nl": "Ze worden krachtiger"
                },
                {
                    "en": "The opponent can plan to avoid or trap them",
                    "es": "El oponente puede planear evitarlas o atraparlas",
                    "de": "Der Gegner kann planen, ihnen auszuweichen oder sie zu fangen",
                    "nl": "De tegenstander kan plannen om ze te vermijden of te vangen"
                },
                {
                    "en": "They gain an extra turn",
                    "es": "Ganan un turno extra",
                    "de": "Sie erhalten einen extra Zug",
                    "nl": "Ze krijgen een extra beurt"
                },
                {
                    "en": "Nothing changes",
                    "es": "Nada cambia",
                    "de": "Nichts ändert sich",
                    "nl": "Er verandert niets"
                }
            ],
            "correct": 1,
            "explanation": {
                "en": "When strong pieces are revealed, opponents know to avoid them or set traps. The element of surprise is a key advantage in Stratego.",
                "es": "Cuando se revelan piezas fuertes, los oponentes saben evitarlas o poner trampas. La sorpresa es una ventaja clave en Stratego.",
                "de": "Werden starke Figuren enthüllt, weiß der Gegner, sie zu meiden oder Fallen zu stellen. Überraschung ist ein Schlüsselvorteil in Stratego.",
                "nl": "Als sterke stukken onthuld worden, weet de tegenstander ze te vermijden of vallen te zetten. Verrassing is een sleutelvoordeel in Stratego."
            }
        },
        {
            "question": {
                "en": "How does losing the Marshal affect your game?",
                "es": "¿Cómo afecta perder el Mariscal a tu partida?",
                "de": "Wie beeinflusst der Verlust des Marschalls das Spiel?",
                "nl": "Hoe beïnvloedt het verlies van de Maarschalk je spel?"
            },
            "options": [
                {
                    "en": "You immediately lose the game",
                    "es": "Pierdes la partida inmediatamente",
                    "de": "Man verliert sofort das Spiel",
                    "nl": "Je verliest het spel meteen"
                },
                {
                    "en": "Nothing changes",
                    "es": "Nada cambia",
                    "de": "Nichts ändert sich",
                    "nl": "Er verandert niets"
                },
                {
                    "en": "The opponent's General becomes unstoppable",
                    "es": "El General del oponente se vuelve imparable",
                    "de": "Der gegnerische General wird unaufhaltbar",
                    "nl": "De Generaal van de tegenstander wordt onstopbaar"
                },
                {
                    "en": "The opponent gains an extra piece",
                    "es": "El oponente gana una pieza extra",
                    "de": "Der Gegner erhält eine extra Figur",
                    "nl": "De tegenstander krijgt een extra stuk"
                }
            ],
            "correct": 2,
            "explanation": {
                "en": "Without the Marshal, you have no piece that can defeat the opponent's General (rank 9). The General becomes effectively unstoppable on the board.",
                "es": "Sin el Mariscal, no tienes pieza que derrote al General enemigo (rango 9). El General se vuelve efectivamente imparable.",
                "de": "Ohne den Marschall hat man keine Figur, die den gegnerischen General (Rang 9) besiegen kann. Der General wird praktisch unaufhaltbar.",
                "nl": "Zonder de Maarschalk heb je geen stuk dat de Generaal van de tegenstander (rang 9) kan verslaan. De Generaal wordt praktisch onstopbaar."
            }
        },
        {
            "question": {
                "en": "What defines a strong opening strategy in Stratego?",
                "es": "¿Qué define una buena estrategia de apertura en Stratego?",
                "de": "Was macht eine starke Eröffnungsstrategie in Stratego aus?",
                "nl": "Wat kenmerkt een sterke openingsstrategie in Stratego?"
            },
            "options": [
                {
                    "en": "Attacking with the Marshal immediately",
                    "es": "Atacar con el Mariscal inmediatamente",
                    "de": "Sofort mit dem Marschall angreifen",
                    "nl": "Meteen aanvallen met de Maarschalk"
                },
                {
                    "en": "Moving only Bombs in the first turn",
                    "es": "Mover solo Bombas en el primer turno",
                    "de": "Nur Bomben im ersten Zug bewegen",
                    "nl": "Alleen Bommen bewegen in de eerste beurt"
                },
                {
                    "en": "Gathering information while protecting key pieces",
                    "es": "Recopilar información mientras proteges piezas clave",
                    "de": "Information sammeln und gleichzeitig Schlüsselfiguren schützen",
                    "nl": "Informatie verzamelen terwijl je belangrijke stukken beschermt"
                },
                {
                    "en": "Not moving any pieces for five turns",
                    "es": "No mover piezas durante cinco turnos",
                    "de": "Fünf Züge lang keine Figur bewegen",
                    "nl": "Vijf beurten lang geen stukken bewegen"
                }
            ],
            "correct": 2,
            "explanation": {
                "en": "A good opening balances information gathering through probing with protection of your valuable pieces like the Marshal, General, and Miners.",
                "es": "Una buena apertura equilibra la recopilación de información mediante sondeos con la protección de piezas valiosas como Mariscal, General y Mineros.",
                "de": "Eine gute Eröffnung balanciert Informationsgewinnung durch Sondierung mit dem Schutz wertvoller Figuren wie Marschall, General und Mineure.",
                "nl": "Een goede opening balanceert informatie verzamelen door verkenning met bescherming van waardevolle stukken zoals Maarschalk, Generaal en Mineurs."
            }
        },
        {
            "question": {
                "en": "What is the risk of placing all Bombs in one area?",
                "es": "¿Cuál es el riesgo de colocar todas las Bombas en una zona?",
                "de": "Was ist das Risiko, alle Bomben in einem Bereich zu platzieren?",
                "nl": "Wat is het risico van alle Bommen in één gebied plaatsen?"
            },
            "options": [
                {
                    "en": "The opponent can bypass them entirely",
                    "es": "El oponente puede evitarlas por completo",
                    "de": "Der Gegner kann sie komplett umgehen",
                    "nl": "De tegenstander kan ze volledig omzeilen"
                },
                {
                    "en": "Grouped Bombs explode each other",
                    "es": "Las Bombas agrupadas se explotan entre sí",
                    "de": "Gruppierte Bomben explodieren gegenseitig",
                    "nl": "Gegroepeerde Bommen ontploffen elkaar"
                },
                {
                    "en": "It is not allowed by the rules",
                    "es": "No está permitido por las reglas",
                    "de": "Es ist nicht erlaubt",
                    "nl": "Het is niet toegestaan"
                },
                {
                    "en": "Bombs in groups lose power",
                    "es": "Las Bombas en grupos pierden poder",
                    "de": "Bomben in Gruppen verlieren Kraft",
                    "nl": "Bommen in groepen verliezen kracht"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "If all Bombs are in one area, the opponent can simply attack from a different direction where there are no Bombs, leaving your Flag unprotected.",
                "es": "Si todas las Bombas están en una zona, el oponente puede atacar desde otra dirección sin Bombas, dejando tu Bandera desprotegida.",
                "de": "Sind alle Bomben in einem Bereich, kann der Gegner einfach aus einer anderen Richtung angreifen, wo keine Bomben sind.",
                "nl": "Als alle Bommen in één gebied staan, kan de tegenstander vanuit een andere richting aanvallen waar geen Bommen zijn."
            }
        },
        {
            "question": {
                "en": "What is the benefit of a mixed defense in Stratego?",
                "es": "¿Cuál es el beneficio de una defensa mixta en Stratego?",
                "de": "Was ist der Vorteil einer gemischten Verteidigung in Stratego?",
                "nl": "Wat is het voordeel van een gemengde verdediging in Stratego?"
            },
            "options": [
                {
                    "en": "Using both Bombs and strong pieces for Flag protection",
                    "es": "Usar Bombas y piezas fuertes para proteger la Bandera",
                    "de": "Bomben und starke Figuren zum Flaggenschutz nutzen",
                    "nl": "Bommen en sterke stukken gebruiken voor Vlagbescherming"
                },
                {
                    "en": "Playing with two different strategies at once",
                    "es": "Jugar con dos estrategias diferentes a la vez",
                    "de": "Mit zwei verschiedenen Strategien gleichzeitig spielen",
                    "nl": "Met twee verschillende strategieën tegelijk spelen"
                },
                {
                    "en": "Mixing up the piece colors",
                    "es": "Mezclar los colores de las piezas",
                    "de": "Die Figurenfarben mischen",
                    "nl": "De stukkleuren mixen"
                },
                {
                    "en": "Moving defense pieces every turn",
                    "es": "Mover piezas defensivas cada turno",
                    "de": "Verteidigungsfiguren jeden Zug bewegen",
                    "nl": "Verdedigingsstukken elke beurt bewegen"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "A mixed defense uses both Bombs and mobile strong pieces. Bombs block Miners while strong pieces handle other attackers, creating layered protection.",
                "es": "Una defensa mixta usa Bombas y piezas fuertes móviles. Las Bombas bloquean Mineros y las piezas fuertes manejan otros atacantes.",
                "de": "Eine gemischte Verteidigung nutzt Bomben und mobile starke Figuren. Bomben blockieren Mineure, starke Figuren andere Angreifer.",
                "nl": "Een gemengde verdediging gebruikt Bommen en mobiele sterke stukken. Bommen blokkeren Mineurs terwijl sterke stukken andere aanvallers afhandelen."
            }
        },
        {
            "question": {
                "en": "Why should you keep track of captured pieces in Stratego?",
                "es": "¿Por qué debes llevar cuenta de las piezas capturadas?",
                "de": "Warum sollte man geschlagene Figuren im Blick behalten?",
                "nl": "Waarom moet je bijhouden welke stukken geslagen zijn?"
            },
            "options": [
                {
                    "en": "To know which enemy pieces remain on the board",
                    "es": "Para saber qué piezas enemigas quedan en el tablero",
                    "de": "Um zu wissen, welche feindlichen Figuren noch auf dem Brett sind",
                    "nl": "Om te weten welke vijandelijke stukken nog op het bord staan"
                },
                {
                    "en": "The rules require counting captures",
                    "es": "Las reglas exigen contar capturas",
                    "de": "Die Regeln verlangen Zählung der Fänge",
                    "nl": "De regels vereisen het tellen van vangsten"
                },
                {
                    "en": "Captured pieces can return to the board",
                    "es": "Las piezas capturadas pueden volver al tablero",
                    "de": "Geschlagene Figuren können zurückkehren",
                    "nl": "Geslagen stukken kunnen terugkeren"
                },
                {
                    "en": "It speeds up the game",
                    "es": "Acelera el juego",
                    "de": "Es beschleunigt das Spiel",
                    "nl": "Het versnelt het spel"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Tracking captures helps you deduce which pieces the opponent still has. For example, if all Miners are captured, their Bombs become impenetrable.",
                "es": "Rastrear capturas te ayuda a deducir qué piezas tiene aún el oponente. Si todos los Mineros fueron capturados, las Bombas son impenetrables.",
                "de": "Fänge zu verfolgen hilft zu erkennen, welche Figuren der Gegner noch hat. Sind alle Mineure gefangen, sind Bomben undurchdringlich.",
                "nl": "Het bijhouden van vangsten helpt te bepalen welke stukken de tegenstander nog heeft. Als alle Mineurs geslagen zijn, zijn Bommen ondoordringbaar."
            }
        },
        {
            "question": {
                "en": "What makes the General a strong defensive piece?",
                "es": "¿Qué hace del General una pieza defensiva fuerte?",
                "de": "Was macht den General zu einer starken Verteidigungsfigur?",
                "nl": "Wat maakt de Generaal een sterk verdedigingsstuk?"
            },
            "options": [
                {
                    "en": "It can move multiple squares",
                    "es": "Puede moverse varias casillas",
                    "de": "Er kann mehrere Felder ziehen",
                    "nl": "Het kan meerdere vakjes bewegen"
                },
                {
                    "en": "It defeats all pieces except the Marshal",
                    "es": "Derrota todas las piezas excepto al Mariscal",
                    "de": "Er besiegt alle Figuren außer den Marschall",
                    "nl": "Het verslaat alle stukken behalve de Maarschalk"
                },
                {
                    "en": "It can defuse Bombs",
                    "es": "Puede desactivar Bombas",
                    "de": "Er kann Bomben entschärfen",
                    "nl": "Het kan Bommen ontmantelen"
                },
                {
                    "en": "It cannot be attacked",
                    "es": "No puede ser atacado",
                    "de": "Er kann nicht angegriffen werden",
                    "nl": "Het kan niet worden aangevallen"
                }
            ],
            "correct": 1,
            "explanation": {
                "en": "The General (rank 9) defeats every piece except the Marshal (rank 10). This makes it excellent for defending important areas near the Flag.",
                "es": "El General (rango 9) derrota a todas las piezas excepto al Mariscal (rango 10). Excelente para defender zonas importantes cerca de la Bandera.",
                "de": "Der General (Rang 9) besiegt jede Figur außer dem Marschall (Rang 10). Er eignet sich hervorragend zur Verteidigung wichtiger Bereiche.",
                "nl": "De Generaal (rang 9) verslaat elk stuk behalve de Maarschalk (rang 10). Uitstekend voor het verdedigen van belangrijke gebieden bij de Vlag."
            }
        },
        {
            "question": {
                "en": "What is a 'pincer attack' in Stratego?",
                "es": "¿Qué es un 'ataque de pinzas' en Stratego?",
                "de": "Was ist ein 'Zangenangriff' in Stratego?",
                "nl": "Wat is een 'tangaanval' in Stratego?"
            },
            "options": [
                {
                    "en": "Using two pieces to trap an enemy between them",
                    "es": "Usar dos piezas para atrapar un enemigo entre ellas",
                    "de": "Zwei Figuren nutzen, um einen Feind einzuklemmen",
                    "nl": "Twee stukken gebruiken om een vijand ertussen te vangen"
                },
                {
                    "en": "Attacking with the Spy and Marshal together",
                    "es": "Atacar con el Espía y Mariscal juntos",
                    "de": "Mit Spion und Marschall zusammen angreifen",
                    "nl": "Aanvallen met Spion en Maarschalk samen"
                },
                {
                    "en": "Moving a piece backward and forward",
                    "es": "Mover una pieza adelante y atrás",
                    "de": "Eine Figur vor und zurück bewegen",
                    "nl": "Een stuk voor- en achteruit bewegen"
                },
                {
                    "en": "Capturing two pieces in one turn",
                    "es": "Capturar dos piezas en un turno",
                    "de": "Zwei Figuren in einem Zug fangen",
                    "nl": "Twee stukken in één beurt vangen"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "A pincer attack positions two of your pieces on opposite sides of an enemy piece, limiting its escape routes and forcing a favorable battle.",
                "es": "Un ataque de pinzas posiciona dos piezas en lados opuestos de una pieza enemiga, limitando sus rutas de escape.",
                "de": "Ein Zangenangriff positioniert zwei eigene Figuren auf gegenüberliegenden Seiten einer feindlichen Figur.",
                "nl": "Een tangaanval plaatst twee stukken aan weerszijden van een vijandelijk stuk, wat de ontsnappingsroutes beperkt."
            }
        },
        {
            "question": {
                "en": "What is the weakest combat rank in Stratego?",
                "es": "¿Cuál es el rango de combate más débil en Stratego?",
                "de": "Was ist der schwächste Kampfrang in Stratego?",
                "nl": "Wat is de zwakste gevechtsrang in Stratego?"
            },
            "options": [
                {
                    "en": "Rank 3 (Miner)",
                    "es": "Rango 3 (Minero)",
                    "de": "Rang 3 (Mineur)",
                    "nl": "Rang 3 (Mineur)"
                },
                {
                    "en": "Rank 4 (Sergeant)",
                    "es": "Rango 4 (Sargento)",
                    "de": "Rang 4 (Feldwebel)",
                    "nl": "Rang 4 (Sergeant)"
                },
                {
                    "en": "The Spy",
                    "es": "El Espía",
                    "de": "Der Spion",
                    "nl": "De Spion"
                },
                {
                    "en": "Rank 2 (Scout)",
                    "es": "Rango 2 (Explorador)",
                    "de": "Rang 2 (Aufklärer)",
                    "nl": "Rang 2 (Verkenner)"
                }
            ],
            "correct": 3,
            "explanation": {
                "en": "The Scout at rank 2 is the weakest piece in standard combat. It loses to every other movable piece except the Spy.",
                "es": "El Explorador en rango 2 es la pieza más débil en combate estándar. Pierde contra todas las demás piezas móviles excepto el Espía.",
                "de": "Der Aufklärer mit Rang 2 ist die schwächste Figur im Standardkampf. Er verliert gegen alle anderen beweglichen Figuren außer den Spion.",
                "nl": "De Verkenner met rang 2 is het zwakste stuk in standaard gevecht. Het verliest van alle andere beweegbare stukken behalve de Spion."
            }
        },
        {
            "question": {
                "en": "What is the purpose of a 'rear guard' in Stratego?",
                "es": "¿Cuál es el propósito de una 'retaguardia' en Stratego?",
                "de": "Was ist der Zweck einer 'Nachhut' in Stratego?",
                "nl": "Wat is het doel van een 'achterhoede' in Stratego?"
            },
            "options": [
                {
                    "en": "Pieces that protect the Flag and back rows",
                    "es": "Piezas que protegen la Bandera y filas traseras",
                    "de": "Figuren, die die Flagge und hinteren Reihen schützen",
                    "nl": "Stukken die de Vlag en achterste rijen beschermen"
                },
                {
                    "en": "A piece that moves last each turn",
                    "es": "Una pieza que se mueve al final cada turno",
                    "de": "Eine Figur, die sich als Letzte bewegt",
                    "nl": "Een stuk dat als laatste beweegt elke beurt"
                },
                {
                    "en": "The strongest piece on the board",
                    "es": "La pieza más fuerte del tablero",
                    "de": "Die stärkste Figur auf dem Brett",
                    "nl": "Het sterkste stuk op het bord"
                },
                {
                    "en": "A piece placed behind a lake",
                    "es": "Una pieza colocada detrás de un lago",
                    "de": "Eine Figur hinter einem See",
                    "nl": "Een stuk achter een meer geplaatst"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "A rear guard consists of pieces positioned near the Flag to serve as a last line of defense against enemies who break through the front lines.",
                "es": "Una retaguardia consiste en piezas posicionadas cerca de la Bandera como última línea de defensa contra enemigos que rompan las líneas.",
                "de": "Eine Nachhut besteht aus Figuren nahe der Flagge als letzte Verteidigungslinie gegen durchbrechende Feinde.",
                "nl": "Een achterhoede bestaat uit stukken bij de Vlag als laatste verdedigingslinie tegen vijanden die door de frontlinies breken."
            }
        },
        {
            "question": {
                "en": "Why is it bad to chase an unknown piece aggressively?",
                "es": "¿Por qué es malo perseguir una pieza desconocida agresivamente?",
                "de": "Warum ist es schlecht, eine unbekannte Figur aggressiv zu verfolgen?",
                "nl": "Waarom is het slecht om een onbekend stuk agressief te achtervolgen?"
            },
            "options": [
                {
                    "en": "You waste turns without gaining territory",
                    "es": "Desperdicias turnos sin ganar territorio",
                    "de": "Man verschwendet Züge ohne Gebiet zu gewinnen",
                    "nl": "Je verspilt beurten zonder gebied te winnen"
                },
                {
                    "en": "It might be a trap leading to a Bomb",
                    "es": "Podría ser una trampa que lleve a una Bomba",
                    "de": "Es könnte eine Falle sein, die zu einer Bombe führt",
                    "nl": "Het kan een val zijn die naar een Bom leidt"
                },
                {
                    "en": "Chasing is against the rules",
                    "es": "Perseguir está contra las reglas",
                    "de": "Verfolgen ist gegen die Regeln",
                    "nl": "Achtervolgen is tegen de regels"
                },
                {
                    "en": "Your piece loses rank while chasing",
                    "es": "Tu pieza pierde rango al perseguir",
                    "de": "Die Figur verliert Rang beim Verfolgen",
                    "nl": "Je stuk verliest rang bij achtervolging"
                }
            ],
            "correct": 1,
            "explanation": {
                "en": "Chasing an unknown piece can lead into a trap. The opponent may lure you toward Bombs or stronger pieces waiting to ambush.",
                "es": "Perseguir una pieza desconocida puede llevar a una trampa. El oponente puede atraerte hacia Bombas o piezas más fuertes.",
                "de": "Eine unbekannte Figur zu verfolgen kann in eine Falle führen. Der Gegner lockt möglicherweise zu Bomben oder stärkeren Figuren.",
                "nl": "Een onbekend stuk achtervolgen kan in een val leiden. De tegenstander lokt je mogelijk naar Bommen of sterkere stukken."
            }
        },
        {
            "question": {
                "en": "How many Sergeants does each player have in Stratego?",
                "es": "¿Cuántos Sargentos tiene cada jugador en Stratego?",
                "de": "Wie viele Feldwebel hat jeder Spieler in Stratego?",
                "nl": "Hoeveel Sergeanten heeft elke speler in Stratego?"
            },
            "options": [
                {
                    "en": "3 Sergeants",
                    "es": "3 Sargentos",
                    "de": "3 Feldwebel",
                    "nl": "3 Sergeanten"
                },
                {
                    "en": "5 Sergeants",
                    "es": "5 Sargentos",
                    "de": "5 Feldwebel",
                    "nl": "5 Sergeanten"
                },
                {
                    "en": "4 Sergeants",
                    "es": "4 Sargentos",
                    "de": "4 Feldwebel",
                    "nl": "4 Sergeanten"
                },
                {
                    "en": "6 Sergeants",
                    "es": "6 Sargentos",
                    "de": "6 Feldwebel",
                    "nl": "6 Sergeanten"
                }
            ],
            "correct": 2,
            "explanation": {
                "en": "Each player has 4 Sergeants (rank 4). They are useful as frontline probing pieces that can defeat Miners and Scouts.",
                "es": "Cada jugador tiene 4 Sargentos (rango 4). Son útiles como piezas de primera línea que derrotan a Mineros y Exploradores.",
                "de": "Jeder Spieler hat 4 Feldwebel (Rang 4). Sie sind nützlich als Frontfiguren, die Mineure und Aufklärer besiegen können.",
                "nl": "Elke speler heeft 4 Sergeanten (rang 4). Ze zijn nuttig als frontstukken die Mineurs en Verkenners kunnen verslaan."
            }
        },
        {
            "question": {
                "en": "What is a 'double bluff' in Stratego?",
                "es": "¿Qué es un 'doble farol' en Stratego?",
                "de": "Was ist ein 'Doppelbluff' in Stratego?",
                "nl": "Wat is een 'dubbele bluf' in Stratego?"
            },
            "options": [
                {
                    "en": "Moving two pieces at the same time",
                    "es": "Mover dos piezas al mismo tiempo",
                    "de": "Zwei Figuren gleichzeitig bewegen",
                    "nl": "Twee stukken tegelijk bewegen"
                },
                {
                    "en": "Placing the Flag where the opponent expects a trap",
                    "es": "Colocar la Bandera donde el oponente espera una trampa",
                    "de": "Die Flagge dort platzieren, wo der Gegner eine Falle erwartet",
                    "nl": "De Vlag plaatsen waar de tegenstander een val verwacht"
                },
                {
                    "en": "Using two Spies in one game",
                    "es": "Usar dos Espías en una partida",
                    "de": "Zwei Spione in einem Spiel nutzen",
                    "nl": "Twee Spionnen in één spel gebruiken"
                },
                {
                    "en": "Bluffing twice in a row",
                    "es": "Hacer dos faroles seguidos",
                    "de": "Zweimal hintereinander bluffen",
                    "nl": "Twee keer achter elkaar bluffen"
                }
            ],
            "correct": 1,
            "explanation": {
                "en": "A double bluff puts the Flag where the opponent thinks it would be too obvious. Since they expect a trick, they may ignore the actual Flag location.",
                "es": "Un doble farol coloca la Bandera donde el oponente cree que sería demasiado obvio. Al esperar un truco, puede ignorar la ubicación real.",
                "de": "Ein Doppelbluff platziert die Flagge dort, wo der Gegner es für zu offensichtlich hält. Da er einen Trick erwartet, übersieht er den tatsächlichen Ort.",
                "nl": "Een dubbele bluf plaatst de Vlag waar de tegenstander het te voor de hand liggend vindt. Omdat ze een truc verwachten, negeren ze de werkelijke locatie."
            }
        },
        {
            "question": {
                "en": "What advantage do Scouts have over other low-rank pieces?",
                "es": "¿Qué ventaja tienen los Exploradores sobre otras piezas de bajo rango?",
                "de": "Welchen Vorteil haben Aufklärer gegenüber anderen niedrigrangigen Figuren?",
                "nl": "Welk voordeel hebben Verkenners boven andere stukken van lage rang?"
            },
            "options": [
                {
                    "en": "They are stronger in combat",
                    "es": "Son más fuertes en combate",
                    "de": "Sie sind stärker im Kampf",
                    "nl": "Ze zijn sterker in gevecht"
                },
                {
                    "en": "They can defuse Bombs",
                    "es": "Pueden desactivar Bombas",
                    "de": "Sie können Bomben entschärfen",
                    "nl": "Ze kunnen Bommen ontmantelen"
                },
                {
                    "en": "They can move multiple squares in a straight line",
                    "es": "Pueden moverse varias casillas en línea recta",
                    "de": "Sie können mehrere Felder in gerader Linie ziehen",
                    "nl": "Ze kunnen meerdere vakjes in een rechte lijn bewegen"
                },
                {
                    "en": "They cannot be captured",
                    "es": "No pueden ser capturados",
                    "de": "Sie können nicht gefangen werden",
                    "nl": "Ze kunnen niet gevangen worden"
                }
            ],
            "correct": 2,
            "explanation": {
                "en": "Scouts can move any number of empty squares in a straight line, unlike all other pieces which move only one square. This makes them fast and versatile.",
                "es": "Los Exploradores pueden moverse cualquier número de casillas vacías en línea recta, a diferencia de las demás piezas que se mueven una sola.",
                "de": "Aufklärer können beliebig viele leere Felder in gerader Linie ziehen, im Gegensatz zu allen anderen Figuren, die nur ein Feld ziehen.",
                "nl": "Verkenners kunnen elk aantal lege vakjes in een rechte lijn bewegen, in tegenstelling tot alle andere stukken die maar één vakje bewegen."
            }
        },
        {
            "question": {
                "en": "What is a common mistake when using the Spy?",
                "es": "¿Cuál es un error común al usar el Espía?",
                "de": "Was ist ein häufiger Fehler beim Einsatz des Spions?",
                "nl": "Wat is een veelgemaakte fout bij het gebruik van de Spion?"
            },
            "options": [
                {
                    "en": "Keeping it too well protected",
                    "es": "Mantenerlo demasiado bien protegido",
                    "de": "Ihn zu gut zu schützen",
                    "nl": "Het te goed beschermd houden"
                },
                {
                    "en": "Placing it in the front row where it is easily lost",
                    "es": "Colocarlo en la primera fila donde se pierde fácilmente",
                    "de": "Ihn in die vordere Reihe stellen, wo er leicht verloren geht",
                    "nl": "Het in de voorste rij plaatsen waar het makkelijk verloren gaat"
                },
                {
                    "en": "Using it to attack Bombs",
                    "es": "Usarlo para atacar Bombas",
                    "de": "Ihn zum Angriff auf Bomben nutzen",
                    "nl": "Het gebruiken om Bommen aan te vallen"
                },
                {
                    "en": "Never moving it at all",
                    "es": "No moverlo nunca",
                    "de": "Ihn nie zu bewegen",
                    "nl": "Het nooit bewegen"
                }
            ],
            "correct": 1,
            "explanation": {
                "en": "Placing the Spy in the front row exposes it to early attacks. Since the Spy loses to everything except the Marshal, it is easily captured.",
                "es": "Colocar al Espía en la primera fila lo expone a ataques tempranos. Como pierde contra todo excepto el Mariscal, es fácilmente capturado.",
                "de": "Den Spion in die vordere Reihe zu stellen setzt ihn frühen Angriffen aus. Da er gegen alles außer dem Marschall verliert, wird er leicht gefangen.",
                "nl": "De Spion in de voorste rij plaatsen stelt het bloot aan vroege aanvallen. Omdat het van alles verliest behalve de Maarschalk, wordt het makkelijk gevangen."
            }
        },
        {
            "question": {
                "en": "How does the board layout affect Scout movement?",
                "es": "¿Cómo afecta la disposición del tablero al movimiento del Explorador?",
                "de": "Wie beeinflusst das Brettlayout die Aufklärer-Bewegung?",
                "nl": "Hoe beïnvloedt de bordindeling de beweging van de Verkenner?"
            },
            "options": [
                {
                    "en": "Scouts fly over lakes",
                    "es": "Los Exploradores vuelan sobre lagos",
                    "de": "Aufklärer fliegen über Seen",
                    "nl": "Verkenners vliegen over meren"
                },
                {
                    "en": "Lakes block Scout paths just like all other pieces",
                    "es": "Los lagos bloquean al Explorador como a las demás piezas",
                    "de": "Seen blockieren Aufklärer wie alle anderen Figuren",
                    "nl": "Meren blokkeren Verkenners net als alle andere stukken"
                },
                {
                    "en": "Scouts can only move along the edges",
                    "es": "Los Exploradores solo se mueven por los bordes",
                    "de": "Aufklärer bewegen sich nur am Rand",
                    "nl": "Verkenners bewegen alleen langs de randen"
                },
                {
                    "en": "Scouts move diagonally around lakes",
                    "es": "Los Exploradores se mueven diagonalmente alrededor de lagos",
                    "de": "Aufklärer bewegen sich diagonal um Seen",
                    "nl": "Verkenners bewegen diagonaal rond meren"
                }
            ],
            "correct": 1,
            "explanation": {
                "en": "Lakes block Scout movement just as they block all other pieces. Scouts cannot pass through or over lake squares in their multi-square moves.",
                "es": "Los lagos bloquean al Explorador igual que a todas las piezas. No pueden pasar por casillas de lago en sus movimientos de varias casillas.",
                "de": "Seen blockieren Aufklärer wie alle anderen Figuren. Sie können in ihren Mehrzügen nicht durch Seefelder ziehen.",
                "nl": "Meren blokkeren Verkenners net als alle andere stukken. Ze kunnen niet door meervakjes bewegen bij hun bewegingen over meerdere vakjes."
            }
        },
        {
            "question": {
                "en": "What is a good way to identify an opponent's Bomb?",
                "es": "¿Cuál es una buena forma de identificar una Bomba enemiga?",
                "de": "Wie identifiziert man eine Bombe des Gegners?",
                "nl": "Wat is een goede manier om een vijandelijke Bom te identificeren?"
            },
            "options": [
                {
                    "en": "Bombs are visible to both players",
                    "es": "Las Bombas son visibles para ambos jugadores",
                    "de": "Bomben sind für beide Spieler sichtbar",
                    "nl": "Bommen zijn zichtbaar voor beide spelers"
                },
                {
                    "en": "It has never moved during the game",
                    "es": "Nunca se ha movido durante la partida",
                    "de": "Sie hat sich während des Spiels nie bewegt",
                    "nl": "Het is nooit bewogen tijdens het spel"
                },
                {
                    "en": "Bombs glow red on the board",
                    "es": "Las Bombas brillan rojo en el tablero",
                    "de": "Bomben leuchten rot auf dem Brett",
                    "nl": "Bommen gloeien rood op het bord"
                },
                {
                    "en": "The opponent must announce Bomb positions",
                    "es": "El oponente debe anunciar posiciones de Bombas",
                    "de": "Der Gegner muss Bombenpositionen ansagen",
                    "nl": "De tegenstander moet Bomposities aankondigen"
                }
            ],
            "correct": 1,
            "explanation": {
                "en": "Since Bombs cannot move, a piece that has never moved throughout the game is likely a Bomb or the Flag. This is key information for your attacks.",
                "es": "Como las Bombas no se mueven, una pieza que nunca se ha movido probablemente es una Bomba o la Bandera. Información clave para tus ataques.",
                "de": "Da Bomben sich nicht bewegen können, ist eine nie bewegte Figur wahrscheinlich eine Bombe oder die Flagge. Das ist eine wichtige Information.",
                "nl": "Omdat Bommen niet kunnen bewegen, is een stuk dat nooit bewogen heeft waarschijnlijk een Bom of de Vlag. Dit is belangrijke informatie."
            }
        },
        {
            "question": {
                "en": "What should you do after losing your Marshal?",
                "es": "¿Qué debes hacer después de perder tu Mariscal?",
                "de": "Was sollte man nach dem Verlust des Marschalls tun?",
                "nl": "Wat moet je doen na het verliezen van je Maarschalk?"
            },
            "options": [
                {
                    "en": "Surrender immediately",
                    "es": "Rendirte inmediatamente",
                    "de": "Sofort aufgeben",
                    "nl": "Meteen opgeven"
                },
                {
                    "en": "Focus on finding the Flag before the General attacks",
                    "es": "Centrarse en encontrar la Bandera antes de que el General ataque",
                    "de": "Sich auf die Flaggensuche konzentrieren bevor der General angreift",
                    "nl": "Focussen op het vinden van de Vlag voordat de Generaal aanvalt"
                },
                {
                    "en": "Move all pieces to the back row",
                    "es": "Mover todas las piezas a la última fila",
                    "de": "Alle Figuren in die hintere Reihe bewegen",
                    "nl": "Alle stukken naar de achterste rij bewegen"
                },
                {
                    "en": "Wait for the Marshal to respawn",
                    "es": "Esperar a que el Mariscal reaparezca",
                    "de": "Warten, bis der Marschall wiederkommt",
                    "nl": "Wachten tot de Maarschalk respawnt"
                }
            ],
            "correct": 1,
            "explanation": {
                "en": "After losing the Marshal, you should race to find the Flag. The opponent's General becomes unstoppable, so winning quickly is essential.",
                "es": "Tras perder al Mariscal, debes correr a encontrar la Bandera. El General del oponente se vuelve imparable, así que ganar rápido es esencial.",
                "de": "Nach dem Verlust des Marschalls sollte man schnell die Flagge suchen. Der gegnerische General wird unaufhaltbar.",
                "nl": "Na het verlies van de Maarschalk moet je snel de Vlag vinden. De Generaal van de tegenstander wordt onstopbaar."
            }
        },
        {
            "question": {
                "en": "Why should you avoid moving Bombs during setup explanation?",
                "es": "¿Por qué no se pueden mover Bombas después de la colocación?",
                "de": "Warum können Bomben nach dem Aufbau nicht bewegt werden?",
                "nl": "Waarom kunnen Bommen niet bewogen worden na de opstelling?"
            },
            "options": [
                {
                    "en": "Bombs are immovable pieces by rule",
                    "es": "Las Bombas son piezas inmóviles por regla",
                    "de": "Bomben sind laut Regeln unbewegliche Figuren",
                    "nl": "Bommen zijn volgens de regels onbeweeglijke stukken"
                },
                {
                    "en": "Bombs explode when moved",
                    "es": "Las Bombas explotan al moverse",
                    "de": "Bomben explodieren beim Bewegen",
                    "nl": "Bommen ontploffen bij het bewegen"
                },
                {
                    "en": "Only the Miner can move Bombs",
                    "es": "Solo el Minero puede mover Bombas",
                    "de": "Nur der Mineur kann Bomben bewegen",
                    "nl": "Alleen de Mineur kan Bommen bewegen"
                },
                {
                    "en": "Bombs can only move backward",
                    "es": "Las Bombas solo pueden moverse hacia atrás",
                    "de": "Bomben können nur rückwärts bewegen",
                    "nl": "Bommen kunnen alleen achteruit bewegen"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Bombs are immovable pieces in Stratego. Once placed during setup, they cannot move for the rest of the game, making placement crucial.",
                "es": "Las Bombas son piezas inmóviles en Stratego. Una vez colocadas, no pueden moverse el resto de la partida, haciendo crucial su colocación.",
                "de": "Bomben sind in Stratego unbewegliche Figuren. Einmal aufgestellt, können sie sich das ganze Spiel nicht mehr bewegen.",
                "nl": "Bommen zijn onbeweeglijke stukken in Stratego. Eenmaal geplaatst kunnen ze de rest van het spel niet meer bewegen."
            }
        },
        {
            "question": {
                "en": "How many rows does each player use for setup in Stratego?",
                "es": "¿Cuántas filas usa cada jugador para la colocación en Stratego?",
                "de": "Wie viele Reihen nutzt jeder Spieler beim Aufbau in Stratego?",
                "nl": "Hoeveel rijen gebruikt elke speler voor de opstelling in Stratego?"
            },
            "options": [
                {
                    "en": "3 rows",
                    "es": "3 filas",
                    "de": "3 Reihen",
                    "nl": "3 rijen"
                },
                {
                    "en": "5 rows",
                    "es": "5 filas",
                    "de": "5 Reihen",
                    "nl": "5 rijen"
                },
                {
                    "en": "2 rows",
                    "es": "2 filas",
                    "de": "2 Reihen",
                    "nl": "2 rijen"
                },
                {
                    "en": "4 rows",
                    "es": "4 filas",
                    "de": "4 Reihen",
                    "nl": "4 rijen"
                }
            ],
            "correct": 3,
            "explanation": {
                "en": "Each player places 40 pieces across 4 rows (10 pieces per row) on their side of the board during setup.",
                "es": "Cada jugador coloca 40 piezas en 4 filas (10 piezas por fila) en su lado del tablero durante la colocación.",
                "de": "Jeder Spieler stellt 40 Figuren in 4 Reihen (10 pro Reihe) auf seiner Brettseite auf.",
                "nl": "Elke speler plaatst 40 stukken in 4 rijen (10 per rij) aan hun kant van het bord."
            }
        },
        {
            "question": {
                "en": "What is a common trick with the Spy in Stratego?",
                "es": "¿Cuál es un truco común con el Espía en Stratego?",
                "de": "Was ist ein häufiger Trick mit dem Spion in Stratego?",
                "nl": "Wat is een veelgebruikte truc met de Spion in Stratego?"
            },
            "options": [
                {
                    "en": "Making the opponent think a strong piece is the Spy",
                    "es": "Hacer creer al oponente que una pieza fuerte es el Espía",
                    "de": "Den Gegner glauben lassen, eine starke Figur sei der Spion",
                    "nl": "De tegenstander laten denken dat een sterk stuk de Spion is"
                },
                {
                    "en": "Moving the Spy like a Scout to confuse",
                    "es": "Mover al Espía como un Explorador para confundir",
                    "de": "Den Spion wie einen Aufklärer bewegen",
                    "nl": "De Spion als een Verkenner bewegen"
                },
                {
                    "en": "Trading the Spy for a Bomb",
                    "es": "Intercambiar el Espía por una Bomba",
                    "de": "Den Spion gegen eine Bombe tauschen",
                    "nl": "De Spion ruilen voor een Bom"
                },
                {
                    "en": "Placing two Spies on the board",
                    "es": "Colocar dos Espías en el tablero",
                    "de": "Zwei Spione aufstellen",
                    "nl": "Twee Spionnen op het bord plaatsen"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Making your opponent think one of your strong pieces is the Spy can cause them to attack it recklessly, only to lose their piece to a higher rank.",
                "es": "Hacer creer al oponente que una pieza fuerte es el Espía puede hacer que ataque imprudentemente y pierda su pieza.",
                "de": "Den Gegner glauben zu lassen, eine starke Figur sei der Spion, kann ihn zu einem leichtsinnigen Angriff verleiten.",
                "nl": "De tegenstander laten denken dat een sterk stuk de Spion is kan ertoe leiden dat ze roekeloos aanvallen en hun stuk verliezen."
            }
        },
        {
            "question": {
                "en": "How does terrain shape strategy in Stratego?",
                "es": "¿Cómo influye el terreno en la estrategia de Stratego?",
                "de": "Wie beeinflusst das Gelände die Strategie in Stratego?",
                "nl": "Hoe beïnvloedt het terrein de strategie in Stratego?"
            },
            "options": [
                {
                    "en": "Different terrain types give power bonuses",
                    "es": "Diferentes terrenos dan bonificaciones de poder",
                    "de": "Verschiedene Geländetypen geben Kraftboni",
                    "nl": "Verschillende terreintypen geven krachtbonussen"
                },
                {
                    "en": "Lakes create corridors that channel movement",
                    "es": "Los lagos crean corredores que canalizan el movimiento",
                    "de": "Seen schaffen Korridore, die die Bewegung lenken",
                    "nl": "Meren creëren corridors die beweging kanaliseren"
                },
                {
                    "en": "Hills block movement on the board",
                    "es": "Las colinas bloquean el movimiento",
                    "de": "Hügel blockieren die Bewegung",
                    "nl": "Heuvels blokkeren beweging"
                },
                {
                    "en": "Terrain changes every turn",
                    "es": "El terreno cambia cada turno",
                    "de": "Das Gelände ändert sich jeden Zug",
                    "nl": "Het terrein verandert elke beurt"
                }
            ],
            "correct": 1,
            "explanation": {
                "en": "The two central lakes create three corridors between the player sides. These corridors become key strategic points for both attack and defense.",
                "es": "Los dos lagos centrales crean tres corredores entre los lados de los jugadores. Estos corredores son puntos estratégicos clave.",
                "de": "Die zwei zentralen Seen schaffen drei Korridore zwischen den Spielerseiten. Diese Korridore werden strategisch wichtige Punkte.",
                "nl": "De twee centrale meren creëren drie corridors tussen de spelerskanten. Deze corridors worden strategisch belangrijke punten."
            }
        },
        {
            "question": {
                "en": "What is the benefit of an unexpected Flag placement?",
                "es": "¿Cuál es el beneficio de una colocación de Bandera inesperada?",
                "de": "Was ist der Vorteil einer unerwarteten Flaggenplatzierung?",
                "nl": "Wat is het voordeel van een onverwachte Vlagplaatsing?"
            },
            "options": [
                {
                    "en": "The Flag becomes invisible",
                    "es": "La Bandera se vuelve invisible",
                    "de": "Die Flagge wird unsichtbar",
                    "nl": "De Vlag wordt onzichtbaar"
                },
                {
                    "en": "It gains a protection bonus",
                    "es": "Obtiene un bono de protección",
                    "de": "Sie erhält einen Schutzbonus",
                    "nl": "Het krijgt een beschermingsbonus"
                },
                {
                    "en": "It forces extra turns",
                    "es": "Fuerza turnos extra",
                    "de": "Es erzwingt extra Züge",
                    "nl": "Het dwingt extra beurten af"
                },
                {
                    "en": "The opponent wastes time searching the wrong area",
                    "es": "El oponente pierde tiempo buscando en el área incorrecta",
                    "de": "Der Gegner verschwendet Zeit bei der Suche am falschen Ort",
                    "nl": "De tegenstander verspilt tijd met zoeken in het verkeerde gebied"
                }
            ],
            "correct": 3,
            "explanation": {
                "en": "An unexpected Flag placement means the opponent searches common locations first. By the time they find the real location, you may have already won.",
                "es": "Una colocación inesperada hace que el oponente busque primero en ubicaciones comunes. Cuando encuentre la real, podrías haber ganado.",
                "de": "Eine unerwartete Flaggenplatzierung lässt den Gegner zuerst übliche Orte absuchen. Bis er den richtigen Ort findet, hat man vielleicht schon gewonnen.",
                "nl": "Een onverwachte Vlagplaatsing laat de tegenstander eerst op gebruikelijke locaties zoeken. Tegen de tijd dat ze de echte vinden, heb je misschien al gewonnen."
            }
        },
        {
            "question": {
                "en": "What is the 'information advantage' in Stratego?",
                "es": "¿Qué es la 'ventaja de información' en Stratego?",
                "de": "Was ist der 'Informationsvorteil' in Stratego?",
                "nl": "Wat is het 'informatievoordeel' in Stratego?"
            },
            "options": [
                {
                    "en": "Having more pieces than the opponent",
                    "es": "Tener más piezas que el oponente",
                    "de": "Mehr Figuren als der Gegner haben",
                    "nl": "Meer stukken hebben dan de tegenstander"
                },
                {
                    "en": "Knowing more about enemy pieces than they know about yours",
                    "es": "Saber más sobre piezas enemigas que ellos de las tuyas",
                    "de": "Mehr über feindliche Figuren wissen als der Gegner über die eigenen",
                    "nl": "Meer weten over vijandelijke stukken dan zij over de jouwe"
                },
                {
                    "en": "Reading the rulebook during the game",
                    "es": "Leer el libro de reglas durante la partida",
                    "de": "Das Regelbuch während des Spiels lesen",
                    "nl": "Het regelboek lezen tijdens het spel"
                },
                {
                    "en": "Playing more games than the opponent",
                    "es": "Jugar más partidas que el oponente",
                    "de": "Mehr Spiele als der Gegner spielen",
                    "nl": "Meer spellen spelen dan de tegenstander"
                }
            ],
            "correct": 1,
            "explanation": {
                "en": "The information advantage means knowing more about your opponent's pieces while keeping yours hidden. This lets you make better tactical decisions.",
                "es": "La ventaja de información significa saber más sobre las piezas del oponente mientras ocultas las tuyas. Permite mejores decisiones tácticas.",
                "de": "Der Informationsvorteil bedeutet, mehr über die feindlichen Figuren zu wissen als der Gegner über die eigenen. Das ermöglicht bessere Entscheidungen.",
                "nl": "Het informatievoordeel betekent meer weten over vijandelijke stukken terwijl je de jouwe verborgen houdt. Dit maakt betere tactische beslissingen mogelijk."
            }
        },
        {
            "question": {
                "en": "What is the rank of the Captain in Stratego?",
                "es": "¿Cuál es el rango del Capitán en Stratego?",
                "de": "Welchen Rang hat der Hauptmann in Stratego?",
                "nl": "Welke rang heeft de Kapitein in Stratego?"
            },
            "options": [
                {
                    "en": "Rank 5",
                    "es": "Rango 5",
                    "de": "Rang 5",
                    "nl": "Rang 5"
                },
                {
                    "en": "Rank 7",
                    "es": "Rango 7",
                    "de": "Rang 7",
                    "nl": "Rang 7"
                },
                {
                    "en": "Rank 4",
                    "es": "Rango 4",
                    "de": "Rang 4",
                    "nl": "Rang 4"
                },
                {
                    "en": "Rank 6",
                    "es": "Rango 6",
                    "de": "Rang 6",
                    "nl": "Rang 6"
                }
            ],
            "correct": 3,
            "explanation": {
                "en": "The Captain holds rank 6 in Stratego. It is a solid mid-range piece that defeats Lieutenants, Sergeants, Miners, and Scouts.",
                "es": "El Capitán tiene rango 6 en Stratego. Es una pieza sólida de rango medio que derrota a Tenientes, Sargentos, Mineros y Exploradores.",
                "de": "Der Hauptmann hat Rang 6 in Stratego. Eine solide Figur mittlerer Stärke gegen Leutnante, Feldwebel, Mineure und Aufklärer.",
                "nl": "De Kapitein heeft rang 6 in Stratego. Een solide middenstuk dat Luitenanten, Sergeanten, Mineurs en Verkenners verslaat."
            }
        },
        {
            "question": {
                "en": "Why is an asymmetric setup often stronger than a symmetric one?",
                "es": "¿Por qué una configuración asimétrica suele ser más fuerte?",
                "de": "Warum ist ein asymmetrischer Aufbau oft stärker als ein symmetrischer?",
                "nl": "Waarom is een asymmetrische opstelling vaak sterker dan een symmetrische?"
            },
            "options": [
                {
                    "en": "It is harder for the opponent to read your strategy",
                    "es": "Es más difícil para el oponente leer tu estrategia",
                    "de": "Es ist für den Gegner schwerer, die Strategie zu lesen",
                    "nl": "Het is moeilijker voor de tegenstander om je strategie te lezen"
                },
                {
                    "en": "Symmetric setups are against the rules",
                    "es": "Las configuraciones simétricas están contra las reglas",
                    "de": "Symmetrische Aufbauten sind gegen die Regeln",
                    "nl": "Symmetrische opstellingen zijn tegen de regels"
                },
                {
                    "en": "It gives bonus movement to all pieces",
                    "es": "Da movimiento extra a todas las piezas",
                    "de": "Es gibt allen Figuren extra Bewegung",
                    "nl": "Het geeft extra beweging aan alle stukken"
                },
                {
                    "en": "The board is asymmetric",
                    "es": "El tablero es asimétrico",
                    "de": "Das Brett ist asymmetrisch",
                    "nl": "Het bord is asymmetrisch"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "An asymmetric setup is unpredictable. If your opponent expects a mirror-image formation, an asymmetric layout can confuse their approach.",
                "es": "Una configuración asimétrica es impredecible. Si el oponente espera una formación espejo, un diseño asimétrico confunde su enfoque.",
                "de": "Ein asymmetrischer Aufbau ist unberechenbar. Erwartet der Gegner eine Spiegelformation, verwirrt ein asymmetrisches Layout seinen Ansatz.",
                "nl": "Een asymmetrische opstelling is onvoorspelbaar. Als de tegenstander een spiegelformatie verwacht, kan een asymmetrisch ontwerp hun aanpak verwarren."
            }
        },
        {
            "question": {
                "en": "What is the ideal balance of attack and defense in Stratego?",
                "es": "¿Cuál es el equilibrio ideal de ataque y defensa en Stratego?",
                "de": "Was ist die ideale Balance zwischen Angriff und Verteidigung?",
                "nl": "Wat is de ideale balans tussen aanval en verdediging in Stratego?"
            },
            "options": [
                {
                    "en": "Only attack, never defend",
                    "es": "Solo atacar, nunca defender",
                    "de": "Nur angreifen, nie verteidigen",
                    "nl": "Alleen aanvallen, nooit verdedigen"
                },
                {
                    "en": "Only defend, never attack",
                    "es": "Solo defender, nunca atacar",
                    "de": "Nur verteidigen, nie angreifen",
                    "nl": "Alleen verdedigen, nooit aanvallen"
                },
                {
                    "en": "Maintain both offensive pressure and Flag protection",
                    "es": "Mantener presión ofensiva y protección de Bandera",
                    "de": "Offensiven Druck und Flaggenschutz aufrechterhalten",
                    "nl": "Zowel offensieve druk als Vlagbescherming behouden"
                },
                {
                    "en": "Switch completely between attack and defense each turn",
                    "es": "Alternar completamente entre ataque y defensa cada turno",
                    "de": "Jeden Zug komplett zwischen Angriff und Verteidigung wechseln",
                    "nl": "Elke beurt volledig wisselen tussen aanval en verdediging"
                }
            ],
            "correct": 2,
            "explanation": {
                "en": "Good Stratego play requires balancing offense and defense. Push forward to find the Flag while ensuring your own Flag remains well-protected.",
                "es": "Buen juego de Stratego requiere equilibrar ataque y defensa. Avanzar para encontrar la Bandera mientras la tuya permanece protegida.",
                "de": "Gutes Stratego erfordert eine Balance zwischen Angriff und Verteidigung. Vorwärts drängen und gleichzeitig die eigene Flagge schützen.",
                "nl": "Goed Stratego spelen vereist een balans tussen aanval en verdediging. Vooruit duwen om de Vlag te vinden terwijl je eigen Vlag beschermd blijft."
            }
        },
        {
            "question": {
                "en": "What is the key to winning the endgame in Stratego?",
                "es": "¿Cuál es la clave para ganar el final en Stratego?",
                "de": "Was ist der Schlüssel zum Gewinn des Endspiels in Stratego?",
                "nl": "Wat is de sleutel tot het winnen van de eindfase in Stratego?"
            },
            "options": [
                {
                    "en": "Having more pieces than the opponent",
                    "es": "Tener más piezas que el oponente",
                    "de": "Mehr Figuren als der Gegner haben",
                    "nl": "Meer stukken hebben dan de tegenstander"
                },
                {
                    "en": "Knowing where the opponent's Flag is and having a Miner",
                    "es": "Saber dónde está la Bandera enemiga y tener un Minero",
                    "de": "Wissen, wo die gegnerische Flagge ist und einen Mineur haben",
                    "nl": "Weten waar de vijandelijke Vlag is en een Mineur hebben"
                },
                {
                    "en": "Controlling the center of the board",
                    "es": "Controlar el centro del tablero",
                    "de": "Die Brettmitte kontrollieren",
                    "nl": "Het midden van het bord controleren"
                },
                {
                    "en": "Capturing all enemy Scouts first",
                    "es": "Capturar primero todos los Exploradores enemigos",
                    "de": "Zuerst alle feindlichen Aufklärer fangen",
                    "nl": "Eerst alle vijandelijke Verkenners vangen"
                }
            ],
            "correct": 1,
            "explanation": {
                "en": "The endgame is won by locating the Flag and having a Miner to defuse surrounding Bombs. Without this combination, capturing the Flag is very difficult.",
                "es": "El final se gana localizando la Bandera y teniendo un Minero para desactivar Bombas. Sin esta combinación, capturar la Bandera es muy difícil.",
                "de": "Das Endspiel gewinnt man, indem man die Flagge findet und einen Mineur hat, um Bomben zu entschärfen. Ohne diese Kombination ist es sehr schwierig.",
                "nl": "De eindfase win je door de Vlag te lokaliseren en een Mineur te hebben om Bommen te ontmantelen. Zonder deze combinatie is het zeer moeilijk."
            }
        },
        {
            "question": {
                "en": "What piece should you send to test if a stationary piece is a Bomb?",
                "es": "¿Qué pieza debes enviar para probar si una pieza estática es una Bomba?",
                "de": "Welche Figur schickt man, um zu testen, ob eine stehende Figur eine Bombe ist?",
                "nl": "Welk stuk moet je sturen om te testen of een stilstaand stuk een Bom is?"
            },
            "options": [
                {
                    "en": "The Marshal",
                    "es": "El Mariscal",
                    "de": "Den Marschall",
                    "nl": "De Maarschalk"
                },
                {
                    "en": "The General",
                    "es": "El General",
                    "de": "Den General",
                    "nl": "De Generaal"
                },
                {
                    "en": "A Miner",
                    "es": "Un Minero",
                    "de": "Einen Mineur",
                    "nl": "Een Mineur"
                },
                {
                    "en": "A Scout or expendable piece",
                    "es": "Un Explorador o pieza prescindible",
                    "de": "Einen Aufklärer oder entbehrliche Figur",
                    "nl": "Een Verkenner of opofferbaar stuk"
                }
            ],
            "correct": 2,
            "explanation": {
                "en": "A Miner is the best choice because if the piece is a Bomb, the Miner defuses it and survives. If it is not a Bomb, the Miner was a low-cost test.",
                "es": "Un Minero es la mejor opción porque si es una Bomba, la desactiva y sobrevive. Si no es Bomba, el Minero fue una prueba de bajo costo.",
                "de": "Ein Mineur ist die beste Wahl, denn ist es eine Bombe, entschärft er sie. Ist es keine Bombe, war der Mineur ein günstiger Test.",
                "nl": "Een Mineur is de beste keuze, want als het een Bom is, ontmantelt hij die en overleeft. Als het geen Bom is, was het een goedkope test."
            }
        },
        {
            "question": {
                "en": "What is the maximum number of pieces that can occupy one square?",
                "es": "¿Cuántas piezas pueden ocupar una casilla a la vez?",
                "de": "Wie viele Figuren können ein Feld gleichzeitig besetzen?",
                "nl": "Hoeveel stukken kunnen één vakje bezetten?"
            },
            "options": [
                {
                    "en": "2 pieces",
                    "es": "2 piezas",
                    "de": "2 Figuren",
                    "nl": "2 stukken"
                },
                {
                    "en": "3 pieces",
                    "es": "3 piezas",
                    "de": "3 Figuren",
                    "nl": "3 stukken"
                },
                {
                    "en": "1 piece",
                    "es": "1 pieza",
                    "de": "1 Figur",
                    "nl": "1 stuk"
                },
                {
                    "en": "Unlimited",
                    "es": "Ilimitado",
                    "de": "Unbegrenzt",
                    "nl": "Onbeperkt"
                }
            ],
            "correct": 2,
            "explanation": {
                "en": "Only one piece can occupy a square at any time. To move to an occupied square, you must attack the piece already there.",
                "es": "Solo una pieza puede ocupar una casilla a la vez. Para moverse a una casilla ocupada, debes atacar la pieza que está allí.",
                "de": "Nur eine Figur kann ein Feld gleichzeitig besetzen. Um auf ein besetztes Feld zu ziehen, muss man die Figur dort angreifen.",
                "nl": "Slechts één stuk kan een vakje tegelijk bezetten. Om naar een bezet vakje te bewegen, moet je het stuk daar aanvallen."
            }
        },
        {
            "question": {
                "en": "What is the importance of the three corridors in Stratego?",
                "es": "¿Cuál es la importancia de los tres corredores en Stratego?",
                "de": "Was ist die Bedeutung der drei Korridore in Stratego?",
                "nl": "Wat is het belang van de drie corridors in Stratego?"
            },
            "options": [
                {
                    "en": "They provide bonus movement",
                    "es": "Proporcionan movimiento extra",
                    "de": "Sie bieten extra Bewegung",
                    "nl": "Ze bieden extra beweging"
                },
                {
                    "en": "They are the only paths between the two sides",
                    "es": "Son los únicos caminos entre los dos lados",
                    "de": "Sie sind die einzigen Wege zwischen beiden Seiten",
                    "nl": "Ze zijn de enige paden tussen de twee kanten"
                },
                {
                    "en": "Pieces in corridors are immune to attack",
                    "es": "Las piezas en corredores son inmunes al ataque",
                    "de": "Figuren in Korridoren sind immun gegen Angriffe",
                    "nl": "Stukken in corridors zijn immuun voor aanvallen"
                },
                {
                    "en": "Only Scouts can use the corridors",
                    "es": "Solo los Exploradores pueden usar los corredores",
                    "de": "Nur Aufklärer können die Korridore nutzen",
                    "nl": "Alleen Verkenners kunnen de corridors gebruiken"
                }
            ],
            "correct": 1,
            "explanation": {
                "en": "The two lakes divide the board, creating three corridors as the only paths between player territories. Controlling these is vital for strategy.",
                "es": "Los dos lagos dividen el tablero creando tres corredores como únicos caminos entre territorios. Controlarlos es vital para la estrategia.",
                "de": "Die zwei Seen teilen das Brett und schaffen drei Korridore als einzige Wege zwischen den Gebieten. Ihre Kontrolle ist strategisch entscheidend.",
                "nl": "De twee meren verdelen het bord en creëren drie corridors als enige paden tussen de gebieden. Het controleren ervan is strategisch cruciaal."
            }
        },
        {
            "question": {
                "en": "What is a 'kamikaze attack' in Stratego?",
                "es": "¿Qué es un 'ataque kamikaze' en Stratego?",
                "de": "Was ist ein 'Kamikaze-Angriff' in Stratego?",
                "nl": "Wat is een 'kamikaze-aanval' in Stratego?"
            },
            "options": [
                {
                    "en": "Using a special card to destroy all pieces",
                    "es": "Usar una carta especial para destruir todas las piezas",
                    "de": "Eine Spezialkarte nutzen, um alle Figuren zu zerstören",
                    "nl": "Een speciale kaart gebruiken om alle stukken te vernietigen"
                },
                {
                    "en": "Deliberately attacking with a weaker piece to learn a rank",
                    "es": "Deliberadamente atacar con una pieza más débil para conocer un rango",
                    "de": "Absichtlich mit einer schwächeren Figur angreifen, um einen Rang zu erfahren",
                    "nl": "Opzettelijk aanvallen met een zwakker stuk om een rang te leren kennen"
                },
                {
                    "en": "Moving all pieces forward at once",
                    "es": "Mover todas las piezas hacia adelante a la vez",
                    "de": "Alle Figuren gleichzeitig vorwärts bewegen",
                    "nl": "Alle stukken tegelijk naar voren bewegen"
                },
                {
                    "en": "Removing your own pieces from the board",
                    "es": "Retirar tus propias piezas del tablero",
                    "de": "Die eigenen Figuren vom Brett nehmen",
                    "nl": "Je eigen stukken van het bord halen"
                }
            ],
            "correct": 1,
            "explanation": {
                "en": "A kamikaze attack sacrifices a piece intentionally against a stronger enemy to reveal its rank. The information gained often outweighs the piece lost.",
                "es": "Un ataque kamikaze sacrifica una pieza intencionalmente contra un enemigo más fuerte para revelar su rango. La información obtenida suele compensar.",
                "de": "Ein Kamikaze-Angriff opfert eine Figur absichtlich gegen einen stärkeren Feind, um dessen Rang zu erfahren. Die Information überwiegt oft den Verlust.",
                "nl": "Een kamikaze-aanval offert opzettelijk een stuk op tegen een sterkere vijand om de rang te onthullen. De informatie weegt vaak op tegen het verlies."
            }
        },
        {
            "question": {
                "en": "Why is patience important in Stratego?",
                "es": "¿Por qué es importante la paciencia en Stratego?",
                "de": "Warum ist Geduld in Stratego wichtig?",
                "nl": "Waarom is geduld belangrijk in Stratego?"
            },
            "options": [
                {
                    "en": "Rushing attacks reveals your pieces and wastes resources",
                    "es": "Los ataques apresurados revelan piezas y malgastan recursos",
                    "de": "Überstürzte Angriffe enthüllen Figuren und verschwenden Ressourcen",
                    "nl": "Overhaaste aanvallen onthullen stukken en verspillen middelen"
                },
                {
                    "en": "The game has a time limit",
                    "es": "El juego tiene un límite de tiempo",
                    "de": "Das Spiel hat ein Zeitlimit",
                    "nl": "Het spel heeft een tijdslimiet"
                },
                {
                    "en": "Patient players get bonus turns",
                    "es": "Los jugadores pacientes obtienen turnos extra",
                    "de": "Geduldige Spieler bekommen extra Züge",
                    "nl": "Geduldige spelers krijgen extra beurten"
                },
                {
                    "en": "Patience is not important in Stratego",
                    "es": "La paciencia no es importante en Stratego",
                    "de": "Geduld ist nicht wichtig in Stratego",
                    "nl": "Geduld is niet belangrijk in Stratego"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Rushing in Stratego often reveals your strong pieces prematurely and can lead to avoidable losses. Patience allows better information gathering.",
                "es": "Apresurarse en Stratego revela prematuramente piezas fuertes y puede causar pérdidas evitables. La paciencia permite mejor recopilación de información.",
                "de": "Überstürzung in Stratego enthüllt starke Figuren vorzeitig und kann zu vermeidbaren Verlusten führen. Geduld ermöglicht bessere Informationsgewinnung.",
                "nl": "Haast in Stratego onthult sterke stukken voortijdig en kan vermijdbare verliezen veroorzaken. Geduld maakt betere informatieverzameling mogelijk."
            }
        },
        {
            "question": {
                "en": "How many total Bombs and Flags does each player have?",
                "es": "¿Cuántas Bombas y Banderas tiene cada jugador en total?",
                "de": "Wie viele Bomben und Flaggen hat jeder Spieler insgesamt?",
                "nl": "Hoeveel Bommen en Vlaggen heeft elke speler in totaal?"
            },
            "options": [
                {
                    "en": "6 Bombs and 1 Flag",
                    "es": "6 Bombas y 1 Bandera",
                    "de": "6 Bomben und 1 Flagge",
                    "nl": "6 Bommen en 1 Vlag"
                },
                {
                    "en": "5 Bombs and 2 Flags",
                    "es": "5 Bombas y 2 Banderas",
                    "de": "5 Bomben und 2 Flaggen",
                    "nl": "5 Bommen en 2 Vlaggen"
                },
                {
                    "en": "4 Bombs and 1 Flag",
                    "es": "4 Bombas y 1 Bandera",
                    "de": "4 Bomben und 1 Flagge",
                    "nl": "4 Bommen en 1 Vlag"
                },
                {
                    "en": "8 Bombs and 1 Flag",
                    "es": "8 Bombas y 1 Bandera",
                    "de": "8 Bomben und 1 Flagge",
                    "nl": "8 Bommen en 1 Vlag"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Each player has 6 Bombs and 1 Flag. These 7 immovable pieces account for a significant portion of the 40-piece army.",
                "es": "Cada jugador tiene 6 Bombas y 1 Bandera. Estas 7 piezas inmóviles representan una parte significativa del ejército de 40 piezas.",
                "de": "Jeder Spieler hat 6 Bomben und 1 Flagge. Diese 7 unbeweglichen Figuren sind ein erheblicher Teil der 40-Figuren-Armee.",
                "nl": "Elke speler heeft 6 Bommen en 1 Vlag. Deze 7 onbeweeglijke stukken vormen een aanzienlijk deel van het 40-stukken leger."
            }
        },
        {
            "question": {
                "en": "What is the rank of the Major in Stratego?",
                "es": "¿Cuál es el rango del Comandante en Stratego?",
                "de": "Welchen Rang hat der Major in Stratego?",
                "nl": "Welke rang heeft de Majoor in Stratego?"
            },
            "options": [
                {
                    "en": "Rank 8",
                    "es": "Rango 8",
                    "de": "Rang 8",
                    "nl": "Rang 8"
                },
                {
                    "en": "Rank 6",
                    "es": "Rango 6",
                    "de": "Rang 6",
                    "nl": "Rang 6"
                },
                {
                    "en": "Rank 7",
                    "es": "Rango 7",
                    "de": "Rang 7",
                    "nl": "Rang 7"
                },
                {
                    "en": "Rank 5",
                    "es": "Rango 5",
                    "de": "Rang 5",
                    "nl": "Rang 5"
                }
            ],
            "correct": 2,
            "explanation": {
                "en": "The Major holds rank 7 in Stratego. It is a strong piece that defeats Captains and all lower ranks, making it useful in mid-game battles.",
                "es": "El Comandante tiene rango 7 en Stratego. Es una pieza fuerte que derrota a Capitanes y todos los rangos inferiores.",
                "de": "Der Major hat Rang 7 in Stratego. Er besiegt Hauptleute und alle niedrigeren Ränge und ist nützlich in Kämpfen der Spielmitte.",
                "nl": "De Majoor heeft rang 7 in Stratego. Het verslaat Kapiteins en alle lagere rangen en is nuttig in gevechten in het midden van het spel."
            }
        },
        {
            "question": {
                "en": "What is an effective way to protect your Miners?",
                "es": "¿Cuál es una forma efectiva de proteger tus Mineros?",
                "de": "Wie schützt man Mineure effektiv?",
                "nl": "Wat is een effectieve manier om je Mineurs te beschermen?"
            },
            "options": [
                {
                    "en": "Keep them in the front row at all times",
                    "es": "Mantenerlos en la primera fila siempre",
                    "de": "Sie immer in der vorderen Reihe lassen",
                    "nl": "Ze altijd in de voorste rij houden"
                },
                {
                    "en": "Place them behind stronger pieces until needed",
                    "es": "Colocarlos detrás de piezas más fuertes hasta que se necesiten",
                    "de": "Sie hinter stärkeren Figuren platzieren bis sie gebraucht werden",
                    "nl": "Ze achter sterkere stukken plaatsen tot ze nodig zijn"
                },
                {
                    "en": "Group all Miners together",
                    "es": "Agrupar todos los Mineros juntos",
                    "de": "Alle Mineure zusammen gruppieren",
                    "nl": "Alle Mineurs samen groeperen"
                },
                {
                    "en": "Place them next to the lakes",
                    "es": "Colocarlos junto a los lagos",
                    "de": "Sie neben die Seen stellen",
                    "nl": "Ze naast de meren plaatsen"
                }
            ],
            "correct": 1,
            "explanation": {
                "en": "Keeping Miners behind stronger pieces protects them from early attacks while keeping them available for Bomb defusal when the time comes.",
                "es": "Mantener Mineros detrás de piezas más fuertes los protege de ataques tempranos y los mantiene disponibles para desactivar Bombas.",
                "de": "Mineure hinter stärkeren Figuren zu halten schützt sie vor frühen Angriffen und hält sie für Bombenentschärfung bereit.",
                "nl": "Mineurs achter sterkere stukken houden beschermt ze tegen vroege aanvallen en houdt ze beschikbaar voor Bomontmanteling."
            }
        },
        {
            "question": {
                "en": "How does the Spy move in Stratego?",
                "es": "¿Cómo se mueve el Espía en Stratego?",
                "de": "Wie bewegt sich der Spion in Stratego?",
                "nl": "Hoe beweegt de Spion in Stratego?"
            },
            "options": [
                {
                    "en": "Multiple squares like a Scout",
                    "es": "Varias casillas como un Explorador",
                    "de": "Mehrere Felder wie ein Aufklärer",
                    "nl": "Meerdere vakjes zoals een Verkenner"
                },
                {
                    "en": "One square in any direction including diagonal",
                    "es": "Una casilla en cualquier dirección incluyendo diagonal",
                    "de": "Ein Feld in jede Richtung einschließlich diagonal",
                    "nl": "Eén vakje in elke richting inclusief diagonaal"
                },
                {
                    "en": "One square horizontally or vertically",
                    "es": "Una casilla horizontal o verticalmente",
                    "de": "Ein Feld horizontal oder vertikal",
                    "nl": "Eén vakje horizontaal of verticaal"
                },
                {
                    "en": "It cannot move at all",
                    "es": "No puede moverse en absoluto",
                    "de": "Er kann sich überhaupt nicht bewegen",
                    "nl": "Het kan helemaal niet bewegen"
                }
            ],
            "correct": 2,
            "explanation": {
                "en": "The Spy moves like most other pieces: one square horizontally or vertically per turn. Only Scouts can move multiple squares.",
                "es": "El Espía se mueve como la mayoría de piezas: una casilla horizontal o verticalmente por turno. Solo los Exploradores se mueven varias casillas.",
                "de": "Der Spion bewegt sich wie die meisten Figuren: ein Feld horizontal oder vertikal pro Zug. Nur Aufklärer ziehen mehrere Felder.",
                "nl": "De Spion beweegt zoals de meeste stukken: één vakje horizontaal of verticaal per beurt. Alleen Verkenners bewegen meerdere vakjes."
            }
        },
        {
            "question": {
                "en": "What happens when you attack the opponent's Flag?",
                "es": "¿Qué pasa cuando atacas la Bandera del oponente?",
                "de": "Was passiert, wenn man die gegnerische Flagge angreift?",
                "nl": "Wat gebeurt er als je de Vlag van de tegenstander aanvalt?"
            },
            "options": [
                {
                    "en": "The Flag fights back with rank 1",
                    "es": "La Bandera lucha con rango 1",
                    "de": "Die Flagge kämpft mit Rang 1 zurück",
                    "nl": "De Vlag vecht terug met rang 1"
                },
                {
                    "en": "You win the game",
                    "es": "Ganas la partida",
                    "de": "Man gewinnt das Spiel",
                    "nl": "Je wint het spel"
                },
                {
                    "en": "The Flag moves to a new location",
                    "es": "La Bandera se mueve a una nueva ubicación",
                    "de": "Die Flagge bewegt sich an einen neuen Ort",
                    "nl": "De Vlag verplaatst zich naar een nieuwe locatie"
                },
                {
                    "en": "Both pieces are removed",
                    "es": "Ambas piezas se retiran",
                    "de": "Beide Figuren werden entfernt",
                    "nl": "Beide stukken worden verwijderd"
                }
            ],
            "correct": 1,
            "explanation": {
                "en": "Capturing the opponent's Flag wins the game immediately. Any piece can capture the Flag since it has no combat ability.",
                "es": "Capturar la Bandera del oponente gana la partida inmediatamente. Cualquier pieza puede capturarla ya que no tiene capacidad de combate.",
                "de": "Die gegnerische Flagge zu erobern gewinnt das Spiel sofort. Jede Figur kann sie erobern, da sie keine Kampffähigkeit hat.",
                "nl": "De Vlag van de tegenstander veroveren wint het spel meteen. Elk stuk kan de Vlag veroveren omdat die geen gevechtsvermogen heeft."
            }
        },
        {
            "question": {
                "en": "What is the best position for the General in setup?",
                "es": "¿Cuál es la mejor posición para el General en la colocación?",
                "de": "Wo stellt man den General am besten auf?",
                "nl": "Wat is de beste positie voor de Generaal bij de opstelling?"
            },
            "options": [
                {
                    "en": "In the front row for immediate attacks",
                    "es": "En la primera fila para ataques inmediatos",
                    "de": "In der vorderen Reihe für sofortige Angriffe",
                    "nl": "In de voorste rij voor directe aanvallen"
                },
                {
                    "en": "Defending an important area near the Flag",
                    "es": "Defendiendo un área importante cerca de la Bandera",
                    "de": "Einen wichtigen Bereich nahe der Flagge verteidigen",
                    "nl": "Een belangrijk gebied bij de Vlag verdedigen"
                },
                {
                    "en": "Next to the opponent's side of the board",
                    "es": "Junto al lado del tablero del oponente",
                    "de": "Neben der Seite des Gegners",
                    "nl": "Naast de kant van de tegenstander"
                },
                {
                    "en": "Always in the exact center",
                    "es": "Siempre en el centro exacto",
                    "de": "Immer in der genauen Mitte",
                    "nl": "Altijd precies in het midden"
                }
            ],
            "correct": 1,
            "explanation": {
                "en": "The General is best placed to defend a key area near the Flag. Its high rank deters most attackers while keeping it safe from the opposing Marshal.",
                "es": "El General es mejor colocarlo para defender un área clave cerca de la Bandera. Su alto rango disuade a la mayoría de atacantes.",
                "de": "Der General wird am besten zur Verteidigung eines Schlüsselbereichs nahe der Flagge aufgestellt. Sein hoher Rang schreckt die meisten Angreifer ab.",
                "nl": "De Generaal wordt het best geplaatst om een belangrijk gebied bij de Vlag te verdedigen. De hoge rang schrikt de meeste aanvallers af."
            }
        },
        {
            "question": {
                "en": "What is the danger of attacking an unknown stationary piece?",
                "es": "¿Cuál es el peligro de atacar una pieza estática desconocida?",
                "de": "Was ist die Gefahr, eine unbekannte stehende Figur anzugreifen?",
                "nl": "Wat is het gevaar van een onbekend stilstaand stuk aanvallen?"
            },
            "options": [
                {
                    "en": "It could be a Bomb that destroys your piece",
                    "es": "Podría ser una Bomba que destruya tu pieza",
                    "de": "Es könnte eine Bombe sein, die die eigene Figur zerstört",
                    "nl": "Het kan een Bom zijn die je stuk vernietigt"
                },
                {
                    "en": "Stationary pieces have doubled combat power",
                    "es": "Las piezas estáticas tienen doble poder de combate",
                    "de": "Stehende Figuren haben doppelte Kampfkraft",
                    "nl": "Stilstaande stukken hebben dubbele gevechtskracht"
                },
                {
                    "en": "You lose a turn if you attack a stationary piece",
                    "es": "Pierdes un turno si atacas una pieza estática",
                    "de": "Man verliert einen Zug beim Angriff auf eine stehende Figur",
                    "nl": "Je verliest een beurt als je een stilstaand stuk aanvalt"
                },
                {
                    "en": "There is no danger",
                    "es": "No hay peligro",
                    "de": "Es gibt keine Gefahr",
                    "nl": "Er is geen gevaar"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "An unknown stationary piece is often a Bomb. If you attack with a non-Miner, your piece is destroyed while the Bomb remains.",
                "es": "Una pieza estática desconocida suele ser una Bomba. Si atacas con un no-Minero, tu pieza se destruye y la Bomba permanece.",
                "de": "Eine unbekannte stehende Figur ist oft eine Bombe. Greift man mit einem Nicht-Mineur an, wird die eigene Figur zerstört.",
                "nl": "Een onbekend stilstaand stuk is vaak een Bom. Als je met een niet-Mineur aanvalt, wordt je stuk vernietigd terwijl de Bom blijft."
            }
        },
        {
            "question": {
                "en": "What is a 'retreat trap' in Stratego?",
                "es": "¿Qué es una 'trampa de retirada' en Stratego?",
                "de": "Was ist eine 'Rückzugsfalle' in Stratego?",
                "nl": "Wat is een 'terugtrekval' in Stratego?"
            },
            "options": [
                {
                    "en": "A rule preventing retreating",
                    "es": "Una regla que impide retirarse",
                    "de": "Eine Regel, die Rückzug verhindert",
                    "nl": "Een regel die terugtrekken verhindert"
                },
                {
                    "en": "Forcing an enemy into a weaker position by retreating",
                    "es": "Forzar al enemigo a una posición débil retrocediendo",
                    "de": "Den Feind durch Rückzug in eine schwache Position zwingen",
                    "nl": "De vijand in een zwakkere positie dwingen door terug te trekken"
                },
                {
                    "en": "Losing the game by retreating too much",
                    "es": "Perder el juego por retroceder demasiado",
                    "de": "Das Spiel verlieren durch zu viel Rückzug",
                    "nl": "Het spel verliezen door te veel terugtrekken"
                },
                {
                    "en": "A special retreat rule for Scouts",
                    "es": "Una regla especial de retirada para Exploradores",
                    "de": "Eine spezielle Rückzugsregel für Aufklärer",
                    "nl": "Een speciale terugtrekregel voor Verkenners"
                }
            ],
            "correct": 1,
            "explanation": {
                "en": "A retreat trap lures an enemy into chasing your piece, leading them into a Bomb or a stronger piece waiting in ambush.",
                "es": "Una trampa de retirada atrae al enemigo a perseguir tu pieza, llevándolo hacia una Bomba o pieza más fuerte en emboscada.",
                "de": "Eine Rückzugsfalle lockt den Feind dazu, die eigene Figur zu verfolgen, und führt ihn in eine Bombe oder stärkere Figur.",
                "nl": "Een terugtrekval lokt de vijand om je stuk te achtervolgen, en leidt ze naar een Bom of sterker stuk in hinderlaag."
            }
        },
        {
            "question": {
                "en": "How many movable pieces does each player have in Stratego?",
                "es": "¿Cuántas piezas móviles tiene cada jugador en Stratego?",
                "de": "Wie viele bewegliche Figuren hat jeder Spieler in Stratego?",
                "nl": "Hoeveel beweegbare stukken heeft elke speler in Stratego?"
            },
            "options": [
                {
                    "en": "40 pieces",
                    "es": "40 piezas",
                    "de": "40 Figuren",
                    "nl": "40 stukken"
                },
                {
                    "en": "33 pieces",
                    "es": "33 piezas",
                    "de": "33 Figuren",
                    "nl": "33 stukken"
                },
                {
                    "en": "34 pieces",
                    "es": "34 piezas",
                    "de": "34 Figuren",
                    "nl": "34 stukken"
                },
                {
                    "en": "30 pieces",
                    "es": "30 piezas",
                    "de": "30 Figuren",
                    "nl": "30 stukken"
                }
            ],
            "correct": 1,
            "explanation": {
                "en": "Of the 40 total pieces, 6 Bombs and 1 Flag are immovable. That leaves 33 movable pieces for each player to maneuver during the game.",
                "es": "De las 40 piezas totales, 6 Bombas y 1 Bandera son inmóviles. Quedan 33 piezas móviles para maniobrar durante la partida.",
                "de": "Von den 40 Figuren sind 6 Bomben und 1 Flagge unbeweglich. Das ergibt 33 bewegliche Figuren pro Spieler.",
                "nl": "Van de 40 stukken zijn 6 Bommen en 1 Vlag onbeweeglijk. Dat laat 33 beweegbare stukken over per speler."
            }
        },
        {
            "question": {
                "en": "What is the primary function of Bombs in Stratego?",
                "es": "¿Cuál es la función principal de las Bombas en Stratego?",
                "de": "Was ist die Hauptfunktion der Bomben in Stratego?",
                "nl": "Wat is de primaire functie van Bommen in Stratego?"
            },
            "options": [
                {
                    "en": "To attack enemy pieces from a distance",
                    "es": "Atacar piezas enemigas a distancia",
                    "de": "Feindliche Figuren aus der Ferne angreifen",
                    "nl": "Vijandelijke stukken van afstand aanvallen"
                },
                {
                    "en": "To defend the Flag and block key areas",
                    "es": "Defender la Bandera y bloquear áreas clave",
                    "de": "Die Flagge verteidigen und Schlüsselbereiche blockieren",
                    "nl": "De Vlag verdedigen en belangrijke gebieden blokkeren"
                },
                {
                    "en": "To move across the entire board",
                    "es": "Moverse por todo el tablero",
                    "de": "Sich über das gesamte Brett bewegen",
                    "nl": "Over het hele bord bewegen"
                },
                {
                    "en": "To capture the enemy Flag",
                    "es": "Capturar la Bandera enemiga",
                    "de": "Die gegnerische Flagge erobern",
                    "nl": "De vijandelijke Vlag veroveren"
                }
            ],
            "correct": 1,
            "explanation": {
                "en": "Bombs serve as immovable defensive pieces that destroy any non-Miner that attacks them. They are primarily used to protect the Flag.",
                "es": "Las Bombas son piezas defensivas inmóviles que destruyen cualquier no-Minero que las ataque. Se usan principalmente para proteger la Bandera.",
                "de": "Bomben sind unbewegliche Verteidigungsfiguren, die jeden Nicht-Mineur zerstören. Sie werden hauptsächlich zum Flaggenschutz eingesetzt.",
                "nl": "Bommen zijn onbeweeglijke verdedigingsstukken die elke niet-Mineur vernietigen. Ze worden voornamelijk gebruikt om de Vlag te beschermen."
            }
        },
        {
            "question": {
                "en": "What is a 'guard' piece in Stratego defense?",
                "es": "¿Qué es una pieza 'guardia' en la defensa de Stratego?",
                "de": "Was ist eine 'Wach'-Figur in der Stratego-Verteidigung?",
                "nl": "Wat is een 'bewaker' stuk in de Stratego-verdediging?"
            },
            "options": [
                {
                    "en": "A piece that never moves from its setup position",
                    "es": "Una pieza que nunca se mueve de su posición inicial",
                    "de": "Eine Figur, die ihre Aufstellungsposition nie verlässt",
                    "nl": "Een stuk dat nooit van zijn opstelpositie beweegt"
                },
                {
                    "en": "A piece that teleports to the Flag",
                    "es": "Una pieza que se teletransporta a la Bandera",
                    "de": "Eine Figur, die sich zur Flagge teleportiert",
                    "nl": "Een stuk dat naar de Vlag teleporteert"
                },
                {
                    "en": "A strong piece stationed near the Flag for defense",
                    "es": "Una pieza fuerte estacionada cerca de la Bandera",
                    "de": "Eine starke Figur nahe der Flagge zur Verteidigung",
                    "nl": "Een sterk stuk gestationeerd bij de Vlag ter verdediging"
                },
                {
                    "en": "A special piece only in tournament rules",
                    "es": "Una pieza especial solo en reglas de torneo",
                    "de": "Eine Spezialfigur nur in Turnierregeln",
                    "nl": "Een speciaal stuk alleen in toernooiregels"
                }
            ],
            "correct": 2,
            "explanation": {
                "en": "A guard piece is a strong piece like a Colonel or Major placed near the Flag as the last line of mobile defense behind the Bombs.",
                "es": "Una pieza guardia es una pieza fuerte como un Coronel o Comandante colocada cerca de la Bandera como última línea de defensa móvil.",
                "de": "Eine Wach-Figur ist eine starke Figur wie ein Oberst oder Major nahe der Flagge als letzte mobile Verteidigungslinie.",
                "nl": "Een bewakerstuk is een sterk stuk zoals een Kolonel of Majoor bij de Vlag als laatste linie van mobiele verdediging."
            }
        },
        {
            "question": {
                "en": "Why should you spread your attacks across multiple corridors?",
                "es": "¿Por qué debes distribuir tus ataques por varios corredores?",
                "de": "Warum sollte man Angriffe über mehrere Korridore verteilen?",
                "nl": "Waarom moet je je aanvallen over meerdere corridors spreiden?"
            },
            "options": [
                {
                    "en": "It confuses the opponent about your main target",
                    "es": "Confunde al oponente sobre tu objetivo principal",
                    "de": "Es verwirrt den Gegner über das Hauptziel",
                    "nl": "Het verwart de tegenstander over je hoofddoel"
                },
                {
                    "en": "The rules require attacks on all three corridors",
                    "es": "Las reglas exigen ataques en los tres corredores",
                    "de": "Die Regeln verlangen Angriffe auf alle drei Korridore",
                    "nl": "De regels vereisen aanvallen op alle drie corridors"
                },
                {
                    "en": "Only the center corridor allows attacks",
                    "es": "Solo el corredor central permite ataques",
                    "de": "Nur der mittlere Korridor erlaubt Angriffe",
                    "nl": "Alleen de middelste corridor staat aanvallen toe"
                },
                {
                    "en": "Multi-corridor attacks deal double damage",
                    "es": "Ataques por varios corredores causan doble daño",
                    "de": "Mehr-Korridor-Angriffe verursachen doppelten Schaden",
                    "nl": "Meerdere-corridor-aanvallen doen dubbele schade"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Attacking across multiple corridors keeps the opponent guessing and spreads their defenses thin. They cannot focus all strong pieces in one area.",
                "es": "Atacar por múltiples corredores mantiene al oponente adivinando y dispersa sus defensas. No puede concentrar piezas fuertes en una zona.",
                "de": "Über mehrere Korridore anzugreifen hält den Gegner im Unklaren und verteilt seine Verteidigung. Er kann nicht alle starken Figuren konzentrieren.",
                "nl": "Aanvallen over meerdere corridors houdt de tegenstander in het ongewisse en verspreidt hun verdediging. Ze kunnen niet alle sterke stukken concentreren."
            }
        },
        {
            "question": {
                "en": "What is the weakest point of a Bomb defense?",
                "es": "¿Cuál es el punto más débil de una defensa de Bombas?",
                "de": "Was ist der schwächste Punkt einer Bombenverteidigung?",
                "nl": "Wat is het zwakste punt van een Bommenverdediging?"
            },
            "options": [
                {
                    "en": "Bombs lose power over time",
                    "es": "Las Bombas pierden poder con el tiempo",
                    "de": "Bomben verlieren Kraft im Laufe der Zeit",
                    "nl": "Bommen verliezen kracht na verloop van tijd"
                },
                {
                    "en": "Miners can defuse Bombs safely",
                    "es": "Los Mineros pueden desactivar Bombas de forma segura",
                    "de": "Mineure können Bomben sicher entschärfen",
                    "nl": "Mineurs kunnen Bommen veilig ontmantelen"
                },
                {
                    "en": "Bombs can be moved by the opponent",
                    "es": "Las Bombas pueden ser movidas por el oponente",
                    "de": "Bomben können vom Gegner bewegt werden",
                    "nl": "Bommen kunnen door de tegenstander verplaatst worden"
                },
                {
                    "en": "All pieces can defeat Bombs",
                    "es": "Todas las piezas pueden derrotar Bombas",
                    "de": "Alle Figuren können Bomben besiegen",
                    "nl": "Alle stukken kunnen Bommen verslaan"
                }
            ],
            "correct": 1,
            "explanation": {
                "en": "The biggest weakness of Bombs is that Miners defuse them safely. If the opponent preserves their Miners, they can break through any Bomb defense.",
                "es": "La mayor debilidad de las Bombas es que los Mineros las desactivan de forma segura. Si el oponente conserva Mineros, puede romper cualquier defensa.",
                "de": "Die größte Schwäche der Bomben ist, dass Mineure sie sicher entschärfen. Bewahrt der Gegner seine Mineure, kann er jede Bombenverteidigung durchbrechen.",
                "nl": "De grootste zwakte van Bommen is dat Mineurs ze veilig ontmantelen. Als de tegenstander Mineurs bewaart, kan elke Bommenverdediging doorbroken worden."
            }
        },
        {
            "question": {
                "en": "What is the total number of different piece types in Stratego?",
                "es": "¿Cuántos tipos diferentes de piezas hay en Stratego?",
                "de": "Wie viele verschiedene Figurentypen gibt es in Stratego?",
                "nl": "Hoeveel verschillende soorten stukken zijn er in Stratego?"
            },
            "options": [
                {
                    "en": "10 types",
                    "es": "10 tipos",
                    "de": "10 Typen",
                    "nl": "10 soorten"
                },
                {
                    "en": "8 types",
                    "es": "8 tipos",
                    "de": "8 Typen",
                    "nl": "8 soorten"
                },
                {
                    "en": "12 types",
                    "es": "12 tipos",
                    "de": "12 Typen",
                    "nl": "12 soorten"
                },
                {
                    "en": "15 types",
                    "es": "15 tipos",
                    "de": "15 Typen",
                    "nl": "15 soorten"
                }
            ],
            "correct": 2,
            "explanation": {
                "en": "Stratego has 12 piece types: Marshal, General, Colonel, Major, Captain, Lieutenant, Sergeant, Miner, Scout, Spy, Bomb, and Flag.",
                "es": "Stratego tiene 12 tipos de piezas: Mariscal, General, Coronel, Comandante, Capitán, Teniente, Sargento, Minero, Explorador, Espía, Bomba y Bandera.",
                "de": "Stratego hat 12 Figurentypen: Marschall, General, Oberst, Major, Hauptmann, Leutnant, Feldwebel, Mineur, Aufklärer, Spion, Bombe und Flagge.",
                "nl": "Stratego heeft 12 stuktypen: Maarschalk, Generaal, Kolonel, Majoor, Kapitein, Luitenant, Sergeant, Mineur, Verkenner, Spion, Bom en Vlag."
            }
        }
    ]
};
