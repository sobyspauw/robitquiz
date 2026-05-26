// Stratego - Level 2
// Total questions: 100

module.exports = {
    questions: [
        {
            "question": {
                "en": "What should you place around your Flag for protection?",
                "es": "¿Qué deberías colocar alrededor de tu Bandera?",
                "de": "Was sollte man um die Flagge platzieren?",
                "nl": "Wat moet je rond je Vlag plaatsen?"
            },
            "options": [
                {"en": "Bombs", "es": "Bombas", "de": "Bomben", "nl": "Bommen"},
                {"en": "Scouts", "es": "Exploradores", "de": "Aufklärer", "nl": "Verkenners"},
                {"en": "Spies", "es": "Espías", "de": "Spione", "nl": "Spionnen"},
                {"en": "Sergeants", "es": "Sargentos", "de": "Feldwebel", "nl": "Sergeants"}
            ],
            "correct": 0,
            "explanation": {
                "en": "Bombs destroy any piece that attacks them except the Miner, making them ideal Flag protection.",
                "es": "Las Bombas destruyen cualquier pieza que las ataque excepto el Minero, siendo ideales para proteger la Bandera.",
                "de": "Bomben zerstören jede angreifende Figur außer dem Mineur und sind idealer Flaggenschutz.",
                "nl": "Bommen vernietigen elk aanvallend stuk behalve de Mineur, ideaal als Vlagbescherming."
            }
        },
        {
            "question": {
                "en": "Why is moving the Marshal early in the game risky?",
                "es": "¿Por qué es arriesgado mover el Mariscal temprano?",
                "de": "Warum ist es riskant den Marschall früh zu bewegen?",
                "nl": "Waarom is het riskant de Maarschalk vroeg te bewegen?"
            },
            "options": [
                {"en": "The opponent's Spy might defeat it", "es": "El Espía del oponente podría derrotarlo", "de": "Der gegnerische Spion könnte ihn besiegen", "nl": "De Spion van de tegenstander kan hem verslaan"},
                {"en": "It cannot move far enough", "es": "No puede moverse lejos", "de": "Er kann nicht weit ziehen", "nl": "Het kan niet ver bewegen"},
                {"en": "It always reveals your strategy", "es": "Siempre revela tu estrategia", "de": "Es verrät immer die Strategie", "nl": "Het onthult altijd je strategie"},
                {"en": "The Marshal moves too slowly", "es": "El Mariscal se mueve lento", "de": "Der Marschall bewegt sich langsam", "nl": "De Maarschalk beweegt langzaam"}
            ],
            "correct": 0,
            "explanation": {
                "en": "The Spy can defeat the Marshal when attacking it. Keep the Marshal safe until the enemy Spy is eliminated.",
                "es": "El Espía puede derrotar al Mariscal al atacarlo. Mantén el Mariscal seguro hasta que el Espía enemigo sea eliminado.",
                "de": "Der Spion kann den Marschall beim Angriff besiegen. Den Marschall sicher halten bis der feindliche Spion eliminiert ist.",
                "nl": "De Spion kan de Maarschalk verslaan bij een aanval. Houd de Maarschalk veilig tot de vijandelijke Spion is geëlimineerd."
            }
        },
        {
            "question": {
                "en": "What are Scouts best used for in the early game?",
                "es": "¿Para qué se usan mejor los Exploradores al inicio?",
                "de": "Wofür setzt man Aufklärer am Anfang am besten ein?",
                "nl": "Waarvoor zijn Verkenners het best te gebruiken aan het begin?"
            },
            "options": [
                {"en": "Discovering enemy positions", "es": "Descubrir posiciones enemigas", "de": "Feindliche Positionen entdecken", "nl": "Vijandelijke posities ontdekken"},
                {"en": "Capturing the enemy Flag", "es": "Capturar la Bandera enemiga", "de": "Die feindliche Flagge erobern", "nl": "De vijandelijke Vlag veroveren"},
                {"en": "Defending the Marshal", "es": "Defender al Mariscal", "de": "Den Marschall verteidigen", "nl": "De Maarschalk verdedigen"},
                {"en": "Blocking enemy movement", "es": "Bloquear movimiento enemigo", "de": "Feindliche Bewegung blockieren", "nl": "Vijandelijke beweging blokkeren"}
            ],
            "correct": 0,
            "explanation": {
                "en": "Scouts are great for reconnaissance. Their multi-square movement lets them probe enemy positions and reveal ranks through attacks.",
                "es": "Los Exploradores son excelentes para reconocimiento. Su movimiento de varias casillas permite explorar posiciones enemigas.",
                "de": "Aufklärer sind großartig für Erkundung. Ihr Mehrzug ermöglicht schnelles Erkunden feindlicher Positionen.",
                "nl": "Verkenners zijn uitstekend voor verkenning. Hun meerveldenbeweging laat ze vijandelijke posities verkennen."
            }
        },
        {
            "question": {
                "en": "Why must you keep at least one Miner alive?",
                "es": "¿Por qué debes mantener al menos un Minero vivo?",
                "de": "Warum muss man mindestens einen Mineur am Leben halten?",
                "nl": "Waarom moet je minstens één Mineur in leven houden?"
            },
            "options": [
                {"en": "Only Miners can defuse Bombs", "es": "Solo los Mineros desactivan Bombas", "de": "Nur Mineure können Bomben entschärfen", "nl": "Alleen Mineurs maken Bommen onschadelijk"},
                {"en": "Miners defeat the Marshal", "es": "Los Mineros derrotan al Mariscal", "de": "Mineure besiegen den Marschall", "nl": "Mineurs verslaan de Maarschalk"},
                {"en": "Miners move multiple squares", "es": "Los Mineros se mueven varias casillas", "de": "Mineure ziehen mehrere Felder", "nl": "Mineurs bewegen meerdere velden"},
                {"en": "Miners protect the Flag", "es": "Los Mineros protegen la Bandera", "de": "Mineure schützen die Flagge", "nl": "Mineurs beschermen de Vlag"}
            ],
            "correct": 0,
            "explanation": {
                "en": "Miners are essential because only they can defuse Bombs. Without Miners you cannot break through Bomb defenses around the Flag.",
                "es": "Los Mineros son esenciales porque solo ellos desactivan Bombas. Sin Mineros no puedes romper defensas de Bombas.",
                "de": "Mineure sind unverzichtbar da nur sie Bomben entschärfen. Ohne Mineure kann man Bombenverteidigungen nicht durchbrechen.",
                "nl": "Mineurs zijn essentieel omdat alleen zij Bommen onschadelijk maken. Zonder Mineurs kun je Bombenverdediging niet doorbreken."
            }
        },
        {
            "question": {
                "en": "What advantage do higher-ranked pieces have in battle?",
                "es": "¿Qué ventaja tienen las piezas de mayor rango en batalla?",
                "de": "Welchen Vorteil haben höherrangige Figuren im Kampf?",
                "nl": "Welk voordeel hebben hogere stukken in gevecht?"
            },
            "options": [
                {"en": "They defeat lower-ranked pieces", "es": "Derrotan a piezas de menor rango", "de": "Sie besiegen niedrigere Figuren", "nl": "Ze verslaan lagere stukken"},
                {"en": "They can move more squares", "es": "Pueden moverse más casillas", "de": "Sie ziehen mehr Felder", "nl": "Ze bewegen meer velden"},
                {"en": "They are immune to Bombs", "es": "Son inmunes a las Bombas", "de": "Sie sind immun gegen Bomben", "nl": "Ze zijn immuun voor Bommen"},
                {"en": "They can see enemy pieces", "es": "Pueden ver piezas enemigas", "de": "Sie sehen feindliche Figuren", "nl": "Ze zien vijandelijke stukken"}
            ],
            "correct": 0,
            "explanation": {
                "en": "Higher-ranked pieces beat lower-ranked ones. The higher rank survives and the lower one is removed from the board.",
                "es": "Las piezas de mayor rango vencen a las menores. La mayor sobrevive y la menor se retira del tablero.",
                "de": "Höherrangige Figuren besiegen niedrigere. Die höhere überlebt und die niedrigere wird vom Brett entfernt.",
                "nl": "Hogere stukken verslaan lagere in gevecht. Het hogere overleeft en het lagere wordt van het bord verwijderd."
            }
        },
        {
            "question": {
                "en": "Why is the Spy valuable despite its low rank?",
                "es": "¿Por qué el Espía es valioso a pesar de su bajo rango?",
                "de": "Warum ist der Spion trotz niedrigem Rang wertvoll?",
                "nl": "Waarom is de Spion waardevol ondanks zijn lage rang?"
            },
            "options": [
                {"en": "It can defeat the Marshal when attacking", "es": "Puede derrotar al Mariscal al atacar", "de": "Er kann den Marschall beim Angriff besiegen", "nl": "Hij kan de Maarschalk verslaan bij aanval"},
                {"en": "It moves like a Scout", "es": "Se mueve como un Explorador", "de": "Er bewegt sich wie ein Aufklärer", "nl": "Hij beweegt als een Verkenner"},
                {"en": "It is immune to Bombs", "es": "Es inmune a las Bombas", "de": "Er ist immun gegen Bomben", "nl": "Hij is immuun voor Bommen"},
                {"en": "It can see enemy ranks", "es": "Puede ver rangos enemigos", "de": "Er sieht feindliche Ränge", "nl": "Hij ziet vijandelijke rangen"}
            ],
            "correct": 0,
            "explanation": {
                "en": "The Spy is the only piece that can defeat the Marshal when it attacks first. Losing the Spy makes your opponent's Marshal much safer.",
                "es": "El Espía es la única pieza que puede derrotar al Mariscal cuando ataca primero. Perderlo hace al Mariscal del oponente más seguro.",
                "de": "Der Spion ist die einzige Figur die den Marschall beim Angriff besiegen kann. Ohne Spion ist der gegnerische Marschall sicherer.",
                "nl": "De Spion is het enige stuk dat de Maarschalk kan verslaan bij een aanval. Zonder Spion is de vijandelijke Maarschalk veiliger."
            }
        },
        {
            "question": {
                "en": "What is a common setup mistake in Stratego?",
                "es": "¿Cuál es un error común de preparación en Stratego?",
                "de": "Was ist ein häufiger Aufstellungsfehler bei Stratego?",
                "nl": "Wat is een veelgemaakte opstellingsfout in Stratego?"
            },
            "options": [
                {"en": "Leaving the Flag without Bomb protection", "es": "Dejar la Bandera sin protección de Bombas", "de": "Die Flagge ohne Bombenschutz lassen", "nl": "De Vlag zonder Bombescherming laten"},
                {"en": "Using too many Scouts", "es": "Usar demasiados Exploradores", "de": "Zu viele Aufklärer verwenden", "nl": "Te veel Verkenners gebruiken"},
                {"en": "Placing the Marshal in the back", "es": "Colocar el Mariscal atrás", "de": "Den Marschall hinten aufstellen", "nl": "De Maarschalk achteraan plaatsen"},
                {"en": "Spreading out Bombs", "es": "Dispersar las Bombas", "de": "Bomben verteilen", "nl": "Bommen verspreiden"}
            ],
            "correct": 0,
            "explanation": {
                "en": "Leaving the Flag without Bomb protection is a common mistake. An unprotected Flag can be captured quickly by any piece.",
                "es": "Dejar la Bandera sin protección de Bombas es un error común. Una Bandera desprotegida puede ser capturada rápidamente.",
                "de": "Die Flagge ohne Bombenschutz zu lassen ist ein häufiger Fehler. Eine ungeschützte Flagge kann schnell erobert werden.",
                "nl": "De Vlag zonder Bombescherming laten is een veelgemaakte fout. Een onbeschermde Vlag kan snel worden veroverd."
            }
        },
        {
            "question": {
                "en": "What does a piece moving multiple squares reveal?",
                "es": "¿Qué revela una pieza que se mueve varias casillas?",
                "de": "Was verrät eine Figur die mehrere Felder zieht?",
                "nl": "Wat onthult een stuk dat meerdere velden beweegt?"
            },
            "options": [
                {"en": "That it must be a Scout", "es": "Que debe ser un Explorador", "de": "Dass es ein Aufklärer sein muss", "nl": "Dat het een Verkenner moet zijn"},
                {"en": "That it is the Marshal", "es": "Que es el Mariscal", "de": "Dass es der Marschall ist", "nl": "Dat het de Maarschalk is"},
                {"en": "Nothing at all", "es": "Nada en absoluto", "de": "Gar nichts", "nl": "Helemaal niets"},
                {"en": "That it is a Bomb", "es": "Que es una Bomba", "de": "Dass es eine Bombe ist", "nl": "Dat het een Bom is"}
            ],
            "correct": 0,
            "explanation": {
                "en": "Only Scouts can move more than one square. A piece moving multiple squares reveals itself as a Scout (rank 2).",
                "es": "Solo los Exploradores pueden moverse más de una casilla. Una pieza que se mueve varias casillas se revela como Explorador.",
                "de": "Nur Aufklärer ziehen mehr als ein Feld. Eine Figur die mehrere Felder zieht verrät sich als Aufklärer.",
                "nl": "Alleen Verkenners bewegen meer dan één veld. Een stuk dat meerdere velden beweegt onthult zichzelf als Verkenner."
            }
        },
        {
            "question": {
                "en": "Why should you remember revealed enemy pieces?",
                "es": "¿Por qué deberías recordar piezas enemigas reveladas?",
                "de": "Warum sollte man aufgedeckte Figuren merken?",
                "nl": "Waarom moet je onthulde vijandelijke stukken onthouden?"
            },
            "options": [
                {"en": "To send the right piece to defeat them", "es": "Para enviar la pieza correcta a derrotarlas", "de": "Um die richtige Figur zum Angriff zu senden", "nl": "Om het juiste stuk te sturen om ze te verslaan"},
                {"en": "The rules require it", "es": "Las reglas lo requieren", "de": "Die Regeln verlangen es", "nl": "De regels vereisen het"},
                {"en": "To count your score", "es": "Para contar tu puntuación", "de": "Um den Punktestand zu zählen", "nl": "Om je score te tellen"},
                {"en": "There is no benefit", "es": "No hay beneficio", "de": "Es gibt keinen Nutzen", "nl": "Er is geen voordeel"}
            ],
            "correct": 0,
            "explanation": {
                "en": "Knowing enemy ranks helps you choose the right attacker. If you know a piece is a Captain, send a Major or higher to defeat it.",
                "es": "Conocer los rangos enemigos te ayuda a elegir el atacante correcto. Si sabes que es un Capitán, envía un Mayor o superior.",
                "de": "Gegnerische Ränge zu kennen hilft den richtigen Angreifer zu wählen. Ist es ein Hauptmann, sendet man einen Major oder höher.",
                "nl": "Vijandelijke rangen kennen helpt de juiste aanvaller te kiezen. Als het een Kapitein is, stuur je een Majoor of hoger."
            }
        },
        {
            "question": {
                "en": "What does a piece that never moves suggest?",
                "es": "¿Qué sugiere una pieza que nunca se mueve?",
                "de": "Was deutet eine unbewegliche Figur an?",
                "nl": "Wat suggereert een stuk dat nooit beweegt?"
            },
            "options": [
                {"en": "It is likely a Bomb or the Flag", "es": "Probablemente es una Bomba o la Bandera", "de": "Es ist wahrscheinlich eine Bombe oder Flagge", "nl": "Het is waarschijnlijk een Bom of de Vlag"},
                {"en": "It must be the Marshal", "es": "Debe ser el Mariscal", "de": "Es muss der Marschall sein", "nl": "Het moet de Maarschalk zijn"},
                {"en": "It is always a bluff", "es": "Siempre es un engaño", "de": "Es ist immer ein Bluff", "nl": "Het is altijd een bluf"},
                {"en": "The player forgot it", "es": "El jugador la olvidó", "de": "Der Spieler hat sie vergessen", "nl": "De speler is het vergeten"}
            ],
            "correct": 0,
            "explanation": {
                "en": "A piece that never moves is likely a Bomb or the Flag, since these are the only immovable pieces. This helps locate the Flag.",
                "es": "Una pieza que nunca se mueve probablemente es una Bomba o la Bandera, las únicas inmóviles. Esto ayuda a localizar la Bandera.",
                "de": "Eine Figur die sich nie bewegt ist wahrscheinlich eine Bombe oder Flagge, die einzigen unbeweglichen Figuren.",
                "nl": "Een stuk dat nooit beweegt is waarschijnlijk een Bom of de Vlag, de enige onbeweegbare stukken."
            }
        },
        {
            "question": {
                "en": "Where should you place strong pieces during setup?",
                "es": "¿Dónde colocar piezas fuertes en la preparación?",
                "de": "Wo stellt man starke Figuren beim Aufbau auf?",
                "nl": "Waar plaats je sterke stukken bij de opstelling?"
            },
            "options": [
                {"en": "In the second or third row", "es": "En la segunda o tercera fila", "de": "In der zweiten oder dritten Reihe", "nl": "In de tweede of derde rij"},
                {"en": "Always in the front row", "es": "Siempre en la primera fila", "de": "Immer in der vordersten Reihe", "nl": "Altijd in de voorste rij"},
                {"en": "Always in the back row", "es": "Siempre en la última fila", "de": "Immer in der hintersten Reihe", "nl": "Altijd in de achterste rij"},
                {"en": "It does not matter", "es": "No importa", "de": "Es spielt keine Rolle", "nl": "Het maakt niet uit"}
            ],
            "correct": 0,
            "explanation": {
                "en": "Strong pieces are best in the second or third row. This keeps them safe while allowing them to join battles when needed.",
                "es": "Las piezas fuertes están mejor en la segunda o tercera fila. Esto las mantiene seguras mientras pueden unirse a batallas.",
                "de": "Starke Figuren stehen am besten in der zweiten oder dritten Reihe, sicher aber einsatzbereit.",
                "nl": "Sterke stukken staan het best in de tweede of derde rij, veilig maar klaar voor gevecht."
            }
        },
        {
            "question": {
                "en": "What happens to a piece after it wins a battle?",
                "es": "¿Qué pasa con una pieza después de ganar una batalla?",
                "de": "Was passiert mit einer Figur nach einem gewonnenen Kampf?",
                "nl": "Wat gebeurt er met een stuk na het winnen van een gevecht?"
            },
            "options": [
                {"en": "It takes the defeated piece's square", "es": "Ocupa la casilla de la pieza derrotada", "de": "Es nimmt das Feld der besiegten Figur ein", "nl": "Het neemt het veld van het verslagen stuk in"},
                {"en": "It returns to its starting position", "es": "Regresa a su posición inicial", "de": "Es kehrt zur Startposition zurück", "nl": "Het keert terug naar zijn startpositie"},
                {"en": "It is also removed", "es": "También se retira", "de": "Es wird auch entfernt", "nl": "Het wordt ook verwijderd"},
                {"en": "It gets promoted", "es": "Se promueve", "de": "Es wird befördert", "nl": "Het wordt gepromoveerd"}
            ],
            "correct": 0,
            "explanation": {
                "en": "After winning a battle, the victorious piece moves to the square where the defeated piece was. The defeated piece is removed from the game.",
                "es": "Después de ganar una batalla, la pieza victoriosa se mueve a la casilla donde estaba la pieza derrotada.",
                "de": "Nach einem gewonnenen Kampf zieht die siegreiche Figur auf das Feld der besiegten Figur.",
                "nl": "Na het winnen van een gevecht verplaatst het winnende stuk zich naar het veld van het verslagen stuk."
            }
        },
        {
            "question": {
                "en": "Why spread your Miners across the board?",
                "es": "¿Por qué distribuir tus Mineros por el tablero?",
                "de": "Warum die Mineure über das Brett verteilen?",
                "nl": "Waarom je Mineurs over het bord verspreiden?"
            },
            "options": [
                {"en": "To always have one near enemy Bombs", "es": "Para siempre tener uno cerca de Bombas", "de": "Um immer einen nahe feindlicher Bomben zu haben", "nl": "Om altijd een bij vijandelijke Bommen te hebben"},
                {"en": "They fight better when spread out", "es": "Luchan mejor dispersos", "de": "Sie kämpfen besser wenn verteilt", "nl": "Ze vechten beter als ze verspreid zijn"},
                {"en": "It confuses the opponent", "es": "Confunde al oponente", "de": "Es verwirrt den Gegner", "nl": "Het verwart de tegenstander"},
                {"en": "The rules require it", "es": "Las reglas lo requieren", "de": "Die Regeln verlangen es", "nl": "De regels vereisen het"}
            ],
            "correct": 0,
            "explanation": {
                "en": "Spreading Miners ensures you have one available near wherever the opponent's Bombs are. If all Miners are on one side, the other flank is vulnerable.",
                "es": "Distribuir Mineros asegura tener uno cerca de donde estén las Bombas del oponente.",
                "de": "Verteilte Mineure stellen sicher dass immer einer nahe feindlicher Bomben ist.",
                "nl": "Verspreide Mineurs zorgen ervoor dat er altijd een bij vijandelijke Bommen is."
            }
        },
        {
            "question": {
                "en": "What should you do if you find the enemy Marshal?",
                "es": "¿Qué hacer si encuentras el Mariscal enemigo?",
                "de": "Was tun wenn man den gegnerischen Marschall findet?",
                "nl": "Wat doe je als je de vijandelijke Maarschalk vindt?"
            },
            "options": [
                {"en": "Try to attack it with your Spy", "es": "Intentar atacarlo con tu Espía", "de": "Versuchen ihn mit dem Spion anzugreifen", "nl": "Proberen hem aan te vallen met je Spion"},
                {"en": "Run away from it", "es": "Huir de él", "de": "Vor ihm weglaufen", "nl": "Ervoor wegvluchten"},
                {"en": "Ignore it completely", "es": "Ignorarlo completamente", "de": "Ihn komplett ignorieren", "nl": "Het volledig negeren"},
                {"en": "Surrender", "es": "Rendirse", "de": "Aufgeben", "nl": "Opgeven"}
            ],
            "correct": 0,
            "explanation": {
                "en": "If you discover the enemy Marshal, try to eliminate it with your Spy. The Spy is the only piece that can defeat the Marshal.",
                "es": "Si descubres el Mariscal enemigo, intenta eliminarlo con tu Espía. El Espía es la única pieza que puede vencer al Mariscal.",
                "de": "Entdeckt man den gegnerischen Marschall, sollte man ihn mit dem Spion angreifen. Der Spion ist die einzige Figur die ihn besiegen kann.",
                "nl": "Als je de vijandelijke Maarschalk ontdekt, probeer hem dan met je Spion aan te vallen. De Spion is het enige stuk dat hem kan verslaan."
            }
        },
        {
            "question": {
                "en": "Why is a corner Flag placement sometimes bad?",
                "es": "¿Por qué colocar la Bandera en una esquina a veces es malo?",
                "de": "Warum ist eine Eck-Flagge manchmal schlecht?",
                "nl": "Waarom is een hoek-Vlag soms slecht?"
            },
            "options": [
                {"en": "Experienced players check corners first", "es": "Jugadores experimentados revisan esquinas primero", "de": "Erfahrene Spieler prüfen zuerst Ecken", "nl": "Ervaren spelers controleren eerst hoeken"},
                {"en": "The Flag cannot fit in a corner", "es": "La Bandera no cabe en una esquina", "de": "Die Flagge passt nicht in eine Ecke", "nl": "De Vlag past niet in een hoek"},
                {"en": "Corners are not allowed", "es": "Las esquinas no están permitidas", "de": "Ecken sind nicht erlaubt", "nl": "Hoeken zijn niet toegestaan"},
                {"en": "Corners weaken Bombs", "es": "Las esquinas debilitan Bombas", "de": "Ecken schwächen Bomben", "nl": "Hoeken verzwakken Bommen"}
            ],
            "correct": 0,
            "explanation": {
                "en": "Many experienced players check corners first since it is a common Flag position. Varying placement makes you harder to predict.",
                "es": "Muchos jugadores experimentados revisan esquinas primero ya que es una posición común. Variar la posición te hace impredecible.",
                "de": "Erfahrene Spieler prüfen oft zuerst die Ecken da die Flagge dort häufig steht. Abwechslung macht einen schwerer vorhersagbar.",
                "nl": "Ervaren spelers controleren vaak eerst hoeken omdat het een veelgebruikte positie is. Variatie maakt je moeilijker te voorspellen."
            }
        },
        {
            "question": {
                "en": "How should you use low-ranked pieces early on?",
                "es": "¿Cómo usar piezas de bajo rango al inicio?",
                "de": "Wie setzt man niedrige Figuren am Anfang ein?",
                "nl": "Hoe gebruik je lage stukken aan het begin?"
            },
            "options": [
                {"en": "Send them forward to test enemies", "es": "Enviarlas adelante para probar enemigos", "de": "Sie vorschicken um Feinde zu testen", "nl": "Ze naar voren sturen om vijanden te testen"},
                {"en": "Keep them in the back row", "es": "Mantenerlas en la última fila", "de": "Sie in der letzten Reihe halten", "nl": "Ze in de achterste rij houden"},
                {"en": "Trade them for Bombs", "es": "Cambiarlas por Bombas", "de": "Sie gegen Bomben tauschen", "nl": "Ze ruilen voor Bommen"},
                {"en": "Remove them from the game", "es": "Retirarlas del juego", "de": "Sie aus dem Spiel nehmen", "nl": "Ze uit het spel halen"}
            ],
            "correct": 0,
            "explanation": {
                "en": "Low-ranked pieces are expendable and good for probing. Attacking enemy pieces with them reveals the opponent's ranks at low cost.",
                "es": "Las piezas de bajo rango son prescindibles y buenas para explorar. Atacar con ellas revela rangos enemigos a bajo costo.",
                "de": "Niedrigrangige Figuren sind entbehrlich und gut zum Erkunden. Angriffe mit ihnen decken gegnerische Ränge auf.",
                "nl": "Lage stukken zijn vervangbaar en goed voor verkenning. Ermee aanvallen onthult vijandelijke rangen tegen lage kosten."
            }
        },
        {
            "question": {
                "en": "What might an aggressively moved piece suggest?",
                "es": "¿Qué podría sugerir una pieza movida agresivamente?",
                "de": "Was könnte eine aggressiv bewegte Figur bedeuten?",
                "nl": "Wat kan een agressief bewogen stuk suggereren?"
            },
            "options": [
                {"en": "It might be a bluff with a weak piece", "es": "Podría ser un engaño con una pieza débil", "de": "Es könnte ein Bluff mit einer schwachen Figur sein", "nl": "Het kan een bluf zijn met een zwak stuk"},
                {"en": "It is always the Marshal", "es": "Siempre es el Mariscal", "de": "Es ist immer der Marschall", "nl": "Het is altijd de Maarschalk"},
                {"en": "Always retreat from it", "es": "Siempre retirarse", "de": "Immer zurückweichen", "nl": "Altijd terugtrekken"},
                {"en": "Ignore it", "es": "Ignorarlo", "de": "Ignorieren", "nl": "Negeren"}
            ],
            "correct": 0,
            "explanation": {
                "en": "Aggressive moves can be a bluff. Opponents often move low-ranked pieces boldly to make them appear strong.",
                "es": "Los movimientos agresivos pueden ser un engaño. Los oponentes mueven piezas bajas audazmente para parecer fuertes.",
                "de": "Aggressive Züge können ein Bluff sein. Gegner bewegen niedrige Figuren oft mutig um sie stark erscheinen zu lassen.",
                "nl": "Agressieve zetten kunnen een bluf zijn. Tegenstanders bewegen lage stukken vaak moedig om ze sterk te laten lijken."
            }
        },
        {
            "question": {
                "en": "How can you locate the opponent's Flag?",
                "es": "¿Cómo puedes localizar la Bandera del oponente?",
                "de": "Wie findet man die gegnerische Flagge?",
                "nl": "Hoe kun je de Vlag van de tegenstander vinden?"
            },
            "options": [
                {"en": "Look for clusters of pieces that never move", "es": "Buscar grupos de piezas que no se mueven", "de": "Nach unbeweglichen Figurengruppen suchen", "nl": "Zoeken naar groepen stukken die nooit bewegen"},
                {"en": "The Flag is always in the center", "es": "La Bandera siempre está en el centro", "de": "Die Flagge steht immer in der Mitte", "nl": "De Vlag staat altijd in het midden"},
                {"en": "Ask your opponent", "es": "Preguntar al oponente", "de": "Den Gegner fragen", "nl": "Het aan de tegenstander vragen"},
                {"en": "It is impossible to know", "es": "Es imposible saberlo", "de": "Es ist unmöglich", "nl": "Het is onmogelijk"}
            ],
            "correct": 0,
            "explanation": {
                "en": "Clusters of immovable pieces often indicate the Flag location, since it is usually surrounded by Bombs for protection.",
                "es": "Grupos de piezas inmóviles suelen indicar la ubicación de la Bandera, ya que generalmente está rodeada de Bombas.",
                "de": "Gruppen unbeweglicher Figuren deuten oft auf die Flaggenposition hin, da sie meist von Bomben umgeben ist.",
                "nl": "Groepen onbeweegbare stukken duiden vaak op de locatie van de Vlag, omdat deze meestal omringd is door Bommen."
            }
        },
        {
            "question": {
                "en": "What is the General's advantage over the Marshal?",
                "es": "¿Cuál es la ventaja del General sobre el Mariscal?",
                "de": "Welchen Vorteil hat der General gegenüber dem Marschall?",
                "nl": "Wat is het voordeel van de Generaal over de Maarschalk?"
            },
            "options": [
                {"en": "The General cannot be defeated by the Spy", "es": "El General no puede ser derrotado por el Espía", "de": "Der General kann nicht vom Spion besiegt werden", "nl": "De Generaal kan niet worden verslagen door de Spion"},
                {"en": "The General is stronger", "es": "El General es más fuerte", "de": "Der General ist stärker", "nl": "De Generaal is sterker"},
                {"en": "The General moves farther", "es": "El General se mueve más lejos", "de": "Der General zieht weiter", "nl": "De Generaal beweegt verder"},
                {"en": "The General is immune to Bombs", "es": "El General es inmune a Bombas", "de": "Der General ist immun gegen Bomben", "nl": "De Generaal is immuun voor Bommen"}
            ],
            "correct": 0,
            "explanation": {
                "en": "The General (rank 9) cannot be defeated by the Spy, unlike the Marshal. This makes it safer to use aggressively.",
                "es": "El General (rango 9) no puede ser derrotado por el Espía, a diferencia del Mariscal. Esto lo hace más seguro.",
                "de": "Der General (Rang 9) kann nicht vom Spion besiegt werden, anders als der Marschall. Das macht ihn sicherer im Einsatz.",
                "nl": "De Generaal (rang 9) kan niet worden verslagen door de Spion, in tegenstelling tot de Maarschalk. Dit maakt hem veiliger."
            }
        },
        {
            "question": {
                "en": "Which pieces should you protect most when attacking?",
                "es": "¿Qué piezas debes proteger más al atacar?",
                "de": "Welche Figuren schützt man beim Angriff am meisten?",
                "nl": "Welke stukken bescherm je het meest bij een aanval?"
            },
            "options": [
                {"en": "Your Miners", "es": "Tus Mineros", "de": "Die eigenen Mineure", "nl": "Je Mineurs"},
                {"en": "Your Scouts", "es": "Tus Exploradores", "de": "Die eigenen Aufklärer", "nl": "Je Verkenners"},
                {"en": "Your Marshal", "es": "Tu Mariscal", "de": "Den Marschall", "nl": "Je Maarschalk"},
                {"en": "Your Sergeants", "es": "Tus Sargentos", "de": "Die Feldwebel", "nl": "Je Sergeants"}
            ],
            "correct": 0,
            "explanation": {
                "en": "Protect Miners because they are the only pieces that can defuse Bombs. Without them you cannot break through Bomb defenses.",
                "es": "Protege los Mineros porque son los únicos que desactivan Bombas. Sin ellos no puedes romper defensas de Bombas.",
                "de": "Mineure schützen da nur sie Bomben entschärfen. Ohne Mineure kann man Bombenverteidigungen nicht durchbrechen.",
                "nl": "Bescherm Mineurs omdat alleen zij Bommen onschadelijk maken. Zonder hen kun je Bombenverdediging niet doorbreken."
            }
        },
        {
            "question": {
                "en": "What does it suggest when an enemy piece retreats?",
                "es": "¿Qué sugiere cuando una pieza enemiga retrocede?",
                "de": "Was deutet es an wenn eine feindliche Figur zurückweicht?",
                "nl": "Wat suggereert het als een vijandelijk stuk terugwijkt?"
            },
            "options": [
                {"en": "It is probably weaker than your piece", "es": "Probablemente es más débil que tu pieza", "de": "Sie ist wahrscheinlich schwächer als die eigene", "nl": "Het is waarschijnlijk zwakker dan jouw stuk"},
                {"en": "They are setting a trap", "es": "Están tendiendo una trampa", "de": "Sie stellen eine Falle", "nl": "Ze zetten een val"},
                {"en": "It means nothing", "es": "No significa nada", "de": "Es bedeutet nichts", "nl": "Het betekent niets"},
                {"en": "The piece cannot move", "es": "La pieza no puede moverse", "de": "Die Figur kann nicht ziehen", "nl": "Het stuk kan niet bewegen"}
            ],
            "correct": 0,
            "explanation": {
                "en": "When a piece retreats, it often means it has a lower rank than the approaching piece. Use this clue to plan attacks.",
                "es": "Cuando una pieza retrocede, a menudo significa que tiene un rango menor que la pieza que se acerca.",
                "de": "Wenn eine Figur zurückweicht, bedeutet es oft dass sie einen niedrigeren Rang hat als die herannahende Figur.",
                "nl": "Als een stuk terugwijkt, betekent het vaak dat het een lagere rang heeft dan het naderende stuk."
            }
        },
        {
            "question": {
                "en": "Which pieces work well in the front row?",
                "es": "¿Qué piezas funcionan bien en la primera fila?",
                "de": "Welche Figuren eignen sich für die vorderste Reihe?",
                "nl": "Welke stukken werken goed in de voorste rij?"
            },
            "options": [
                {"en": "Scouts and low-ranked pieces", "es": "Exploradores y piezas de bajo rango", "de": "Aufklärer und niedrigrangige Figuren", "nl": "Verkenners en lage stukken"},
                {"en": "The Marshal and General", "es": "El Mariscal y el General", "de": "Marschall und General", "nl": "De Maarschalk en Generaal"},
                {"en": "Bombs and the Flag", "es": "Bombas y la Bandera", "de": "Bomben und Flagge", "nl": "Bommen en de Vlag"},
                {"en": "Only the Spy", "es": "Solo el Espía", "de": "Nur den Spion", "nl": "Alleen de Spion"}
            ],
            "correct": 0,
            "explanation": {
                "en": "Scouts and low-ranked pieces are good for the front row. They make first contact and reveal enemy pieces without losing valuable units.",
                "es": "Exploradores y piezas de bajo rango son buenos para la primera fila. Hacen el primer contacto sin perder unidades valiosas.",
                "de": "Aufklärer und niedrigrangige Figuren eignen sich für die vorderste Reihe. Sie machen ersten Kontakt ohne wertvolle Einheiten zu verlieren.",
                "nl": "Verkenners en lage stukken zijn goed voor de voorste rij. Ze maken eerste contact zonder waardevolle eenheden te verliezen."
            }
        },
        {
            "question": {
                "en": "What is a fork in Stratego strategy?",
                "es": "¿Qué es una horquilla en la estrategia de Stratego?",
                "de": "Was ist eine Gabel in der Stratego-Strategie?",
                "nl": "Wat is een vork in Stratego-strategie?"
            },
            "options": [
                {"en": "Threatening two enemy pieces at once", "es": "Amenazar dos piezas enemigas a la vez", "de": "Zwei feindliche Figuren gleichzeitig bedrohen", "nl": "Twee vijandelijke stukken tegelijk bedreigen"},
                {"en": "A special type of battle", "es": "Un tipo especial de batalla", "de": "Eine besondere Art von Kampf", "nl": "Een speciaal type gevecht"},
                {"en": "A defensive formation", "es": "Una formación defensiva", "de": "Eine defensive Formation", "nl": "Een verdedigende formatie"},
                {"en": "Attacking with two pieces", "es": "Atacar con dos piezas", "de": "Mit zwei Figuren angreifen", "nl": "Met twee stukken aanvallen"}
            ],
            "correct": 0,
            "explanation": {
                "en": "A fork threatens two enemy pieces at once. The opponent can only save one, giving you an advantage.",
                "es": "Una horquilla amenaza dos piezas enemigas a la vez. El oponente solo puede salvar una, dándote ventaja.",
                "de": "Eine Gabel bedroht zwei feindliche Figuren gleichzeitig. Der Gegner kann nur eine retten.",
                "nl": "Een vork bedreigt twee vijandelijke stukken tegelijk. De tegenstander kan er maar één redden."
            }
        },
        {
            "question": {
                "en": "Why track defeated pieces during the game?",
                "es": "¿Por qué rastrear piezas derrotadas durante el juego?",
                "de": "Warum besiegte Figuren verfolgen?",
                "nl": "Waarom verslagen stukken bijhouden?"
            },
            "options": [
                {"en": "To know what the opponent still has", "es": "Para saber qué tiene aún el oponente", "de": "Um zu wissen was der Gegner noch hat", "nl": "Om te weten wat de tegenstander nog heeft"},
                {"en": "The rules require keeping score", "es": "Las reglas requieren puntuación", "de": "Die Regeln erfordern Punktezählen", "nl": "De regels vereisen score bijhouden"},
                {"en": "Defeated pieces come back", "es": "Las piezas derrotadas regresan", "de": "Besiegte Figuren kommen zurück", "nl": "Verslagen stukken komen terug"},
                {"en": "It is not important", "es": "No es importante", "de": "Es ist nicht wichtig", "nl": "Het is niet belangrijk"}
            ],
            "correct": 0,
            "explanation": {
                "en": "Tracking defeated pieces tells you what the opponent still has. If the Marshal is gone, your pieces are safer; if Miners are gone, your Bombs are secure.",
                "es": "Rastrear piezas derrotadas te dice qué tiene aún el oponente. Si el Mariscal se fue, tus piezas están más seguras.",
                "de": "Besiegte Figuren zu verfolgen zeigt was der Gegner noch hat. Ist der Marschall weg, sind die eigenen Figuren sicherer.",
                "nl": "Verslagen stukken bijhouden vertelt je wat de tegenstander nog heeft. Als de Maarschalk weg is, zijn je stukken veiliger."
            }
        },
        {
            "question": {
                "en": "What is a trap in Stratego?",
                "es": "¿Qué es una trampa en Stratego?",
                "de": "Was ist eine Falle bei Stratego?",
                "nl": "Wat is een val in Stratego?"
            },
            "options": [
                {"en": "Luring an enemy into a losing battle", "es": "Atraer un enemigo a una batalla perdida", "de": "Einen Feind in einen verlorenen Kampf locken", "nl": "Een vijand lokken naar een verloren gevecht"},
                {"en": "Placing all Bombs in a row", "es": "Colocar todas las Bombas en fila", "de": "Alle Bomben in einer Reihe aufstellen", "nl": "Alle Bommen op een rij plaatsen"},
                {"en": "Moving pieces in circles", "es": "Mover piezas en círculos", "de": "Figuren im Kreis bewegen", "nl": "Stukken in cirkels bewegen"},
                {"en": "Surrendering a piece", "es": "Rendir una pieza", "de": "Eine Figur aufgeben", "nl": "Een stuk opgeven"}
            ],
            "correct": 0,
            "explanation": {
                "en": "A trap means luring an enemy piece into an unfavorable battle by making them believe they face a weaker piece.",
                "es": "Una trampa significa atraer una pieza enemiga a una batalla desfavorable haciéndole creer que enfrenta una pieza más débil.",
                "de": "Eine Falle bedeutet einen Feind in einen ungünstigen Kampf zu locken indem man ihn glauben lässt er trifft auf eine schwächere Figur.",
                "nl": "Een val betekent een vijand lokken naar een ongunstig gevecht door hem te laten geloven dat hij een zwakker stuk treft."
            }
        },
        {
            "question": {
                "en": "What is the purpose of the two lakes on the board?",
                "es": "¿Cuál es el propósito de los dos lagos en el tablero?",
                "de": "Was ist der Zweck der zwei Seen auf dem Brett?",
                "nl": "Wat is het doel van de twee meren op het bord?"
            },
            "options": [
                {"en": "They create chokepoints for movement", "es": "Crean puntos de estrangulamiento", "de": "Sie schaffen Engpässe für Bewegung", "nl": "Ze creëren knelpunten voor beweging"},
                {"en": "They give bonus points", "es": "Dan puntos de bonificación", "de": "Sie geben Bonuspunkte", "nl": "Ze geven bonuspunten"},
                {"en": "Pieces can hide in the lakes", "es": "Las piezas se esconden en lagos", "de": "Figuren verstecken sich in Seen", "nl": "Stukken verbergen zich in meren"},
                {"en": "They have no purpose", "es": "No tienen propósito", "de": "Sie haben keinen Zweck", "nl": "Ze hebben geen doel"}
            ],
            "correct": 0,
            "explanation": {
                "en": "The two lakes create chokepoints that force pieces through narrow passages, making the game more strategic and interesting.",
                "es": "Los dos lagos crean puntos de estrangulamiento que fuerzan a las piezas a pasar por pasajes estrechos.",
                "de": "Die zwei Seen schaffen Engpässe die Figuren durch schmale Durchgänge zwingen und das Spiel strategischer machen.",
                "nl": "De twee meren creëren knelpunten die stukken door smalle doorgangen dwingen en het spel strategischer maken."
            }
        },
        {
            "question": {
                "en": "How many Bombs does each player have?",
                "es": "¿Cuántas Bombas tiene cada jugador?",
                "de": "Wie viele Bomben hat jeder Spieler?",
                "nl": "Hoeveel Bommen heeft elke speler?"
            },
            "options": [
                {"en": "6 Bombs", "es": "6 Bombas", "de": "6 Bomben", "nl": "6 Bommen"},
                {"en": "4 Bombs", "es": "4 Bombas", "de": "4 Bomben", "nl": "4 Bommen"},
                {"en": "8 Bombs", "es": "8 Bombas", "de": "8 Bomben", "nl": "8 Bommen"},
                {"en": "5 Bombs", "es": "5 Bombas", "de": "5 Bomben", "nl": "5 Bommen"}
            ],
            "correct": 0,
            "explanation": {
                "en": "Each player has 6 Bombs. They are immovable pieces that destroy any attacker except the Miner.",
                "es": "Cada jugador tiene 6 Bombas. Son piezas inmóviles que destruyen cualquier atacante excepto el Minero.",
                "de": "Jeder Spieler hat 6 Bomben. Sie sind unbeweglich und zerstören jeden Angreifer außer dem Mineur.",
                "nl": "Elke speler heeft 6 Bommen. Ze zijn onbeweegbaar en vernietigen elke aanvaller behalve de Mineur."
            }
        },
        {
            "question": {
                "en": "How many Scouts does each player start with?",
                "es": "¿Cuántos Exploradores tiene cada jugador al inicio?",
                "de": "Wie viele Aufklärer hat jeder Spieler zu Beginn?",
                "nl": "Hoeveel Verkenners heeft elke speler aan het begin?"
            },
            "options": [
                {"en": "8 Scouts", "es": "8 Exploradores", "de": "8 Aufklärer", "nl": "8 Verkenners"},
                {"en": "6 Scouts", "es": "6 Exploradores", "de": "6 Aufklärer", "nl": "6 Verkenners"},
                {"en": "4 Scouts", "es": "4 Exploradores", "de": "4 Aufklärer", "nl": "4 Verkenners"},
                {"en": "10 Scouts", "es": "10 Exploradores", "de": "10 Aufklärer", "nl": "10 Verkenners"}
            ],
            "correct": 0,
            "explanation": {
                "en": "Each player starts with 8 Scouts, the most of any piece. They are expendable and great for reconnaissance.",
                "es": "Cada jugador comienza con 8 Exploradores, el mayor número de cualquier pieza. Son prescindibles y excelentes para reconocimiento.",
                "de": "Jeder Spieler beginnt mit 8 Aufklärern, die größte Anzahl aller Figuren. Sie sind entbehrlich und ideal zur Erkundung.",
                "nl": "Elke speler begint met 8 Verkenners, het meeste van alle stukken. Ze zijn vervangbaar en ideaal voor verkenning."
            }
        },
        {
            "question": {
                "en": "What happens when two pieces of equal rank battle?",
                "es": "¿Qué pasa cuando luchan dos piezas del mismo rango?",
                "de": "Was passiert wenn zwei gleichrangige Figuren kämpfen?",
                "nl": "Wat gebeurt er als twee stukken van gelijke rang vechten?"
            },
            "options": [
                {"en": "Both pieces are removed from the game", "es": "Ambas piezas se retiran del juego", "de": "Beide Figuren werden entfernt", "nl": "Beide stukken worden uit het spel verwijderd"},
                {"en": "The attacker wins", "es": "El atacante gana", "de": "Der Angreifer gewinnt", "nl": "De aanvaller wint"},
                {"en": "The defender wins", "es": "El defensor gana", "de": "Der Verteidiger gewinnt", "nl": "De verdediger wint"},
                {"en": "They switch positions", "es": "Intercambian posiciones", "de": "Sie tauschen die Positionen", "nl": "Ze wisselen van positie"}
            ],
            "correct": 0,
            "explanation": {
                "en": "When two pieces of equal rank battle, both are removed from the board. Neither side wins the fight.",
                "es": "Cuando dos piezas del mismo rango luchan, ambas se retiran del tablero. Ningún lado gana la pelea.",
                "de": "Wenn zwei gleichrangige Figuren kämpfen, werden beide vom Brett entfernt. Keine Seite gewinnt.",
                "nl": "Als twee stukken van gelijke rang vechten, worden beide van het bord verwijderd. Geen van beide wint."
            }
        },
        {
            "question": {
                "en": "How many squares can most pieces move per turn?",
                "es": "¿Cuántas casillas pueden moverse la mayoría de piezas?",
                "de": "Wie viele Felder können die meisten Figuren pro Zug ziehen?",
                "nl": "Hoeveel velden kunnen de meeste stukken per beurt bewegen?"
            },
            "options": [
                {"en": "One square", "es": "Una casilla", "de": "Ein Feld", "nl": "Eén veld"},
                {"en": "Two squares", "es": "Dos casillas", "de": "Zwei Felder", "nl": "Twee velden"},
                {"en": "Three squares", "es": "Tres casillas", "de": "Drei Felder", "nl": "Drie velden"},
                {"en": "As many as they want", "es": "Todas las que quieran", "de": "So viele wie sie wollen", "nl": "Zoveel als ze willen"}
            ],
            "correct": 0,
            "explanation": {
                "en": "Most pieces can only move one square per turn in any direction (forward, backward, left, or right). Only the Scout can move farther.",
                "es": "La mayoría de piezas solo pueden moverse una casilla por turno. Solo el Explorador puede moverse más lejos.",
                "de": "Die meisten Figuren ziehen nur ein Feld pro Zug. Nur der Aufklärer kann weiter ziehen.",
                "nl": "De meeste stukken bewegen maar één veld per beurt. Alleen de Verkenner kan verder bewegen."
            }
        },
        {
            "question": {
                "en": "Can pieces move diagonally in Stratego?",
                "es": "¿Pueden las piezas moverse en diagonal en Stratego?",
                "de": "Können Figuren bei Stratego diagonal ziehen?",
                "nl": "Kunnen stukken diagonaal bewegen in Stratego?"
            },
            "options": [
                {"en": "No, only forward, backward, left, or right", "es": "No, solo adelante, atrás, izquierda o derecha", "de": "Nein, nur vorwärts, rückwärts, links oder rechts", "nl": "Nee, alleen vooruit, achteruit, links of rechts"},
                {"en": "Yes, all pieces can", "es": "Sí, todas las piezas pueden", "de": "Ja, alle Figuren können das", "nl": "Ja, alle stukken kunnen dat"},
                {"en": "Only the Scout can", "es": "Solo el Explorador puede", "de": "Nur der Aufklärer kann das", "nl": "Alleen de Verkenner kan dat"},
                {"en": "Only the Marshal can", "es": "Solo el Mariscal puede", "de": "Nur der Marschall kann das", "nl": "Alleen de Maarschalk kan dat"}
            ],
            "correct": 0,
            "explanation": {
                "en": "No piece in Stratego can move diagonally. All movement is orthogonal: forward, backward, left, or right.",
                "es": "Ninguna pieza en Stratego puede moverse en diagonal. Todo movimiento es ortogonal: adelante, atrás, izquierda o derecha.",
                "de": "Keine Figur bei Stratego kann diagonal ziehen. Alle Bewegung ist orthogonal: vor, zurück, links oder rechts.",
                "nl": "Geen stuk in Stratego kan diagonaal bewegen. Alle beweging is orthogonaal: voor, achter, links of rechts."
            }
        },
        {
            "question": {
                "en": "How many total pieces does each player have?",
                "es": "¿Cuántas piezas tiene cada jugador en total?",
                "de": "Wie viele Figuren hat jeder Spieler insgesamt?",
                "nl": "Hoeveel stukken heeft elke speler in totaal?"
            },
            "options": [
                {"en": "40 pieces", "es": "40 piezas", "de": "40 Figuren", "nl": "40 stukken"},
                {"en": "30 pieces", "es": "30 piezas", "de": "30 Figuren", "nl": "30 stukken"},
                {"en": "36 pieces", "es": "36 piezas", "de": "36 Figuren", "nl": "36 stukken"},
                {"en": "50 pieces", "es": "50 piezas", "de": "50 Figuren", "nl": "50 stukken"}
            ],
            "correct": 0,
            "explanation": {
                "en": "Each player starts with 40 pieces placed on their four rows of the 10x10 board.",
                "es": "Cada jugador comienza con 40 piezas colocadas en sus cuatro filas del tablero de 10x10.",
                "de": "Jeder Spieler beginnt mit 40 Figuren auf seinen vier Reihen des 10x10-Bretts.",
                "nl": "Elke speler begint met 40 stukken geplaatst op hun vier rijen van het 10x10-bord."
            }
        },
        {
            "question": {
                "en": "What is the size of a Stratego board?",
                "es": "¿Cuál es el tamaño de un tablero de Stratego?",
                "de": "Wie groß ist das Stratego-Brett?",
                "nl": "Hoe groot is een Stratego-bord?"
            },
            "options": [
                {"en": "10 by 10 squares", "es": "10 por 10 casillas", "de": "10 mal 10 Felder", "nl": "10 bij 10 velden"},
                {"en": "8 by 8 squares", "es": "8 por 8 casillas", "de": "8 mal 8 Felder", "nl": "8 bij 8 velden"},
                {"en": "12 by 12 squares", "es": "12 por 12 casillas", "de": "12 mal 12 Felder", "nl": "12 bij 12 velden"},
                {"en": "9 by 9 squares", "es": "9 por 9 casillas", "de": "9 mal 9 Felder", "nl": "9 bij 9 velden"}
            ],
            "correct": 0,
            "explanation": {
                "en": "The Stratego board is 10 by 10 squares, giving 100 total squares. Two 2x2 lakes in the center cannot be crossed.",
                "es": "El tablero de Stratego es de 10 por 10 casillas, con 100 casillas en total. Dos lagos 2x2 en el centro no se pueden cruzar.",
                "de": "Das Stratego-Brett hat 10 mal 10 Felder, also 100 Felder insgesamt. Zwei 2x2-Seen in der Mitte sind nicht passierbar.",
                "nl": "Het Stratego-bord is 10 bij 10 velden, met 100 velden totaal. Twee 2x2-meren in het midden zijn niet te passeren."
            }
        },
        {
            "question": {
                "en": "How do you win a game of Stratego?",
                "es": "¿Cómo se gana una partida de Stratego?",
                "de": "Wie gewinnt man eine Partie Stratego?",
                "nl": "Hoe win je een spel Stratego?"
            },
            "options": [
                {"en": "By capturing the opponent's Flag", "es": "Capturando la Bandera del oponente", "de": "Durch Eroberung der gegnerischen Flagge", "nl": "Door de Vlag van de tegenstander te veroveren"},
                {"en": "By capturing all enemy pieces", "es": "Capturando todas las piezas enemigas", "de": "Durch Eroberung aller feindlichen Figuren", "nl": "Door alle vijandelijke stukken te veroveren"},
                {"en": "By reaching the back row", "es": "Llegando a la última fila", "de": "Durch Erreichen der letzten Reihe", "nl": "Door de achterste rij te bereiken"},
                {"en": "By having more points", "es": "Teniendo más puntos", "de": "Durch mehr Punkte", "nl": "Door meer punten te hebben"}
            ],
            "correct": 0,
            "explanation": {
                "en": "You win by capturing the opponent's Flag. This is the only way to win, so finding and reaching the Flag is the main goal.",
                "es": "Ganas capturando la Bandera del oponente. Esta es la única forma de ganar, así que encontrar la Bandera es el objetivo principal.",
                "de": "Man gewinnt durch Eroberung der gegnerischen Flagge. Das ist der einzige Weg zu gewinnen.",
                "nl": "Je wint door de Vlag van de tegenstander te veroveren. Dit is de enige manier om te winnen."
            }
        },
        {
            "question": {
                "en": "What is the rank of the Marshal in Stratego?",
                "es": "¿Cuál es el rango del Mariscal en Stratego?",
                "de": "Was ist der Rang des Marschalls bei Stratego?",
                "nl": "Wat is de rang van de Maarschalk in Stratego?"
            },
            "options": [
                {"en": "The highest rank (10)", "es": "El rango más alto (10)", "de": "Der höchste Rang (10)", "nl": "De hoogste rang (10)"},
                {"en": "The second highest rank", "es": "El segundo rango más alto", "de": "Der zweithöchste Rang", "nl": "De op een na hoogste rang"},
                {"en": "The lowest rank", "es": "El rango más bajo", "de": "Der niedrigste Rang", "nl": "De laagste rang"},
                {"en": "A mid-level rank", "es": "Un rango intermedio", "de": "Ein mittlerer Rang", "nl": "Een middelmatige rang"}
            ],
            "correct": 0,
            "explanation": {
                "en": "The Marshal has the highest rank (10) and defeats all other pieces in battle, except when attacked by the Spy.",
                "es": "El Mariscal tiene el rango más alto (10) y derrota a todas las demás piezas, excepto cuando es atacado por el Espía.",
                "de": "Der Marschall hat den höchsten Rang (10) und besiegt alle anderen Figuren, außer wenn der Spion ihn angreift.",
                "nl": "De Maarschalk heeft de hoogste rang (10) en verslaat alle andere stukken, behalve wanneer de Spion hem aanvalt."
            }
        },
        {
            "question": {
                "en": "How many Miners does each player have?",
                "es": "¿Cuántos Mineros tiene cada jugador?",
                "de": "Wie viele Mineure hat jeder Spieler?",
                "nl": "Hoeveel Mineurs heeft elke speler?"
            },
            "options": [
                {"en": "5 Miners", "es": "5 Mineros", "de": "5 Mineure", "nl": "5 Mineurs"},
                {"en": "3 Miners", "es": "3 Mineros", "de": "3 Mineure", "nl": "3 Mineurs"},
                {"en": "4 Miners", "es": "4 Mineros", "de": "4 Mineure", "nl": "4 Mineurs"},
                {"en": "6 Miners", "es": "6 Mineros", "de": "6 Mineure", "nl": "6 Mineurs"}
            ],
            "correct": 0,
            "explanation": {
                "en": "Each player has 5 Miners. They are the only pieces that can defuse Bombs, so losing them all is very dangerous.",
                "es": "Cada jugador tiene 5 Mineros. Son las únicas piezas que desactivan Bombas, así que perderlos todos es muy peligroso.",
                "de": "Jeder Spieler hat 5 Mineure. Sie sind die einzigen Figuren die Bomben entschärfen können.",
                "nl": "Elke speler heeft 5 Mineurs. Ze zijn de enige stukken die Bommen onschadelijk kunnen maken."
            }
        },
        {
            "question": {
                "en": "Which piece can move any number of open squares?",
                "es": "¿Qué pieza puede moverse cualquier número de casillas?",
                "de": "Welche Figur kann beliebig viele freie Felder ziehen?",
                "nl": "Welk stuk kan een onbeperkt aantal open velden bewegen?"
            },
            "options": [
                {"en": "The Scout", "es": "El Explorador", "de": "Der Aufklärer", "nl": "De Verkenner"},
                {"en": "The Marshal", "es": "El Mariscal", "de": "Der Marschall", "nl": "De Maarschalk"},
                {"en": "The General", "es": "El General", "de": "Der General", "nl": "De Generaal"},
                {"en": "The Captain", "es": "El Capitán", "de": "Der Hauptmann", "nl": "De Kapitein"}
            ],
            "correct": 0,
            "explanation": {
                "en": "The Scout is the only piece that can move any number of open squares in a straight line, like a rook in chess.",
                "es": "El Explorador es la única pieza que puede moverse cualquier número de casillas abiertas en línea recta.",
                "de": "Der Aufklärer ist die einzige Figur die beliebig viele freie Felder in einer geraden Linie ziehen kann.",
                "nl": "De Verkenner is het enige stuk dat een onbeperkt aantal open velden in een rechte lijn kan bewegen."
            }
        },
        {
            "question": {
                "en": "Can the Flag move in Stratego?",
                "es": "¿Puede moverse la Bandera en Stratego?",
                "de": "Kann die Flagge bei Stratego bewegt werden?",
                "nl": "Kan de Vlag bewegen in Stratego?"
            },
            "options": [
                {"en": "No, the Flag cannot move", "es": "No, la Bandera no puede moverse", "de": "Nein, die Flagge kann nicht bewegt werden", "nl": "Nee, de Vlag kan niet bewegen"},
                {"en": "Yes, one square per turn", "es": "Sí, una casilla por turno", "de": "Ja, ein Feld pro Zug", "nl": "Ja, één veld per beurt"},
                {"en": "Only when threatened", "es": "Solo cuando está amenazada", "de": "Nur wenn sie bedroht wird", "nl": "Alleen als het bedreigd wordt"},
                {"en": "Yes, but only backward", "es": "Sí, pero solo hacia atrás", "de": "Ja, aber nur rückwärts", "nl": "Ja, maar alleen achteruit"}
            ],
            "correct": 0,
            "explanation": {
                "en": "The Flag cannot move. It stays where you place it during setup, so you must protect it with other pieces and Bombs.",
                "es": "La Bandera no puede moverse. Se queda donde la colocas durante la preparación, así que debes protegerla.",
                "de": "Die Flagge kann nicht bewegt werden. Sie bleibt wo man sie aufstellt, daher muss man sie mit anderen Figuren schützen.",
                "nl": "De Vlag kan niet bewegen. Het blijft waar je het plaatst, dus je moet het beschermen met andere stukken en Bommen."
            }
        },
        {
            "question": {
                "en": "Can Bombs move in Stratego?",
                "es": "¿Pueden moverse las Bombas en Stratego?",
                "de": "Können Bomben bei Stratego bewegt werden?",
                "nl": "Kunnen Bommen bewegen in Stratego?"
            },
            "options": [
                {"en": "No, Bombs are immovable", "es": "No, las Bombas son inmóviles", "de": "Nein, Bomben sind unbeweglich", "nl": "Nee, Bommen zijn onbeweegbaar"},
                {"en": "Yes, one square per turn", "es": "Sí, una casilla por turno", "de": "Ja, ein Feld pro Zug", "nl": "Ja, één veld per beurt"},
                {"en": "Only if pushed by another piece", "es": "Solo si las empuja otra pieza", "de": "Nur wenn von einer anderen Figur geschoben", "nl": "Alleen als een ander stuk ze duwt"},
                {"en": "They can explode and move", "es": "Pueden explotar y moverse", "de": "Sie können explodieren und sich bewegen", "nl": "Ze kunnen exploderen en bewegen"}
            ],
            "correct": 0,
            "explanation": {
                "en": "Bombs cannot move. They stay in their setup position for the entire game. Only the Flag and Bombs are immovable.",
                "es": "Las Bombas no pueden moverse. Se quedan en su posición durante todo el juego. Solo la Bandera y las Bombas son inmóviles.",
                "de": "Bomben können nicht bewegt werden. Sie bleiben das ganze Spiel über an ihrer Aufstellposition.",
                "nl": "Bommen kunnen niet bewegen. Ze blijven het hele spel op hun opstellingspositie."
            }
        },
        {
            "question": {
                "en": "What rank is the Colonel in Stratego?",
                "es": "¿Qué rango tiene el Coronel en Stratego?",
                "de": "Welchen Rang hat der Oberst bei Stratego?",
                "nl": "Welke rang heeft de Kolonel in Stratego?"
            },
            "options": [
                {"en": "Rank 8", "es": "Rango 8", "de": "Rang 8", "nl": "Rang 8"},
                {"en": "Rank 7", "es": "Rango 7", "de": "Rang 7", "nl": "Rang 7"},
                {"en": "Rank 9", "es": "Rango 9", "de": "Rang 9", "nl": "Rang 9"},
                {"en": "Rank 6", "es": "Rango 6", "de": "Rang 6", "nl": "Rang 6"}
            ],
            "correct": 0,
            "explanation": {
                "en": "The Colonel is rank 8, the third strongest piece after the Marshal (10) and General (9). Each player has 2 Colonels.",
                "es": "El Coronel es rango 8, la tercera pieza más fuerte después del Mariscal (10) y el General (9). Cada jugador tiene 2.",
                "de": "Der Oberst ist Rang 8, die drittstärkste Figur nach Marschall (10) und General (9). Jeder Spieler hat 2.",
                "nl": "De Kolonel is rang 8, het derde sterkste stuk na de Maarschalk (10) en Generaal (9). Elke speler heeft er 2."
            }
        },
        {
            "question": {
                "en": "How many rows does each player use for setup?",
                "es": "¿Cuántas filas usa cada jugador para la preparación?",
                "de": "Wie viele Reihen nutzt jeder Spieler zum Aufstellen?",
                "nl": "Hoeveel rijen gebruikt elke speler voor de opstelling?"
            },
            "options": [
                {"en": "4 rows", "es": "4 filas", "de": "4 Reihen", "nl": "4 rijen"},
                {"en": "3 rows", "es": "3 filas", "de": "3 Reihen", "nl": "3 rijen"},
                {"en": "5 rows", "es": "5 filas", "de": "5 Reihen", "nl": "5 rijen"},
                {"en": "2 rows", "es": "2 filas", "de": "2 Reihen", "nl": "2 rijen"}
            ],
            "correct": 0,
            "explanation": {
                "en": "Each player places their 40 pieces on 4 rows (10 squares each). The remaining 2 rows in the center contain the lakes.",
                "es": "Cada jugador coloca sus 40 piezas en 4 filas (10 casillas cada una). Las 2 filas restantes contienen los lagos.",
                "de": "Jeder Spieler stellt seine 40 Figuren auf 4 Reihen (je 10 Felder). Die 2 mittleren Reihen enthalten die Seen.",
                "nl": "Elke speler plaatst zijn 40 stukken op 4 rijen (10 velden elk). De 2 middelste rijen bevatten de meren."
            }
        },
        {
            "question": {
                "en": "What rank is the Captain in Stratego?",
                "es": "¿Qué rango tiene el Capitán en Stratego?",
                "de": "Welchen Rang hat der Hauptmann bei Stratego?",
                "nl": "Welke rang heeft de Kapitein in Stratego?"
            },
            "options": [
                {"en": "Rank 6", "es": "Rango 6", "de": "Rang 6", "nl": "Rang 6"},
                {"en": "Rank 5", "es": "Rango 5", "de": "Rang 5", "nl": "Rang 5"},
                {"en": "Rank 7", "es": "Rango 7", "de": "Rang 7", "nl": "Rang 7"},
                {"en": "Rank 8", "es": "Rango 8", "de": "Rang 8", "nl": "Rang 8"}
            ],
            "correct": 0,
            "explanation": {
                "en": "The Captain is rank 6, a strong mid-level piece. Each player has 4 Captains, making them useful for controlling the board.",
                "es": "El Capitán es rango 6, una pieza media fuerte. Cada jugador tiene 4 Capitanes, útiles para controlar el tablero.",
                "de": "Der Hauptmann ist Rang 6, eine starke mittlere Figur. Jeder Spieler hat 4 Hauptmänner zur Brettkontrolle.",
                "nl": "De Kapitein is rang 6, een sterk middenstuk. Elke speler heeft 4 Kapiteins om het bord te controleren."
            }
        },
        {
            "question": {
                "en": "How many Sergeants does each player have?",
                "es": "¿Cuántos Sargentos tiene cada jugador?",
                "de": "Wie viele Feldwebel hat jeder Spieler?",
                "nl": "Hoeveel Sergeants heeft elke speler?"
            },
            "options": [
                {"en": "4 Sergeants", "es": "4 Sargentos", "de": "4 Feldwebel", "nl": "4 Sergeants"},
                {"en": "3 Sergeants", "es": "3 Sargentos", "de": "3 Feldwebel", "nl": "3 Sergeants"},
                {"en": "5 Sergeants", "es": "5 Sargentos", "de": "5 Feldwebel", "nl": "5 Sergeants"},
                {"en": "2 Sergeants", "es": "2 Sargentos", "de": "2 Feldwebel", "nl": "2 Sergeants"}
            ],
            "correct": 0,
            "explanation": {
                "en": "Each player has 4 Sergeants at rank 4. They are useful as medium-low pieces for probing and controlling key positions.",
                "es": "Cada jugador tiene 4 Sargentos de rango 4. Son útiles como piezas medias-bajas para explorar y controlar posiciones.",
                "de": "Jeder Spieler hat 4 Feldwebel mit Rang 4. Sie sind nützliche mittlere Figuren zum Erkunden und Kontrolle.",
                "nl": "Elke speler heeft 4 Sergeants met rang 4. Ze zijn nuttig als middenstukken voor verkenning en controle."
            }
        },
        {
            "question": {
                "en": "What rank is the Lieutenant in Stratego?",
                "es": "¿Qué rango tiene el Teniente en Stratego?",
                "de": "Welchen Rang hat der Leutnant bei Stratego?",
                "nl": "Welke rang heeft de Luitenant in Stratego?"
            },
            "options": [
                {"en": "Rank 5", "es": "Rango 5", "de": "Rang 5", "nl": "Rang 5"},
                {"en": "Rank 4", "es": "Rango 4", "de": "Rang 4", "nl": "Rang 4"},
                {"en": "Rank 6", "es": "Rango 6", "de": "Rang 6", "nl": "Rang 6"},
                {"en": "Rank 3", "es": "Rango 3", "de": "Rang 3", "nl": "Rang 3"}
            ],
            "correct": 0,
            "explanation": {
                "en": "The Lieutenant is rank 5. Each player has 4 Lieutenants. They serve as versatile mid-level pieces for attack and defense.",
                "es": "El Teniente es rango 5. Cada jugador tiene 4 Tenientes. Son piezas versátiles de nivel medio para ataque y defensa.",
                "de": "Der Leutnant ist Rang 5. Jeder Spieler hat 4 Leutnante. Sie sind vielseitige mittlere Figuren.",
                "nl": "De Luitenant is rang 5. Elke speler heeft 4 Luitenants. Ze zijn veelzijdige middenstukken voor aanval en verdediging."
            }
        },
        {
            "question": {
                "en": "How many Colonels does each player start with?",
                "es": "¿Cuántos Coroneles tiene cada jugador al inicio?",
                "de": "Wie viele Oberste hat jeder Spieler zu Beginn?",
                "nl": "Hoeveel Kolonels heeft elke speler aan het begin?"
            },
            "options": [
                {"en": "2 Colonels", "es": "2 Coroneles", "de": "2 Oberste", "nl": "2 Kolonels"},
                {"en": "3 Colonels", "es": "3 Coroneles", "de": "3 Oberste", "nl": "3 Kolonels"},
                {"en": "1 Colonel", "es": "1 Coronel", "de": "1 Oberst", "nl": "1 Kolonel"},
                {"en": "4 Colonels", "es": "4 Coroneles", "de": "4 Oberste", "nl": "4 Kolonels"}
            ],
            "correct": 0,
            "explanation": {
                "en": "Each player starts with 2 Colonels at rank 8. They are powerful pieces useful for clearing paths and defeating mid-level enemies.",
                "es": "Cada jugador comienza con 2 Coroneles de rango 8. Son piezas poderosas para abrir caminos y derrotar enemigos medios.",
                "de": "Jeder Spieler beginnt mit 2 Obersten mit Rang 8. Sie sind starke Figuren zum Räumen von Wegen.",
                "nl": "Elke speler begint met 2 Kolonels met rang 8. Ze zijn krachtige stukken om paden vrij te maken."
            }
        },
        {
            "question": {
                "en": "How many Majors does each player have?",
                "es": "¿Cuántos Mayores tiene cada jugador?",
                "de": "Wie viele Majore hat jeder Spieler?",
                "nl": "Hoeveel Majoors heeft elke speler?"
            },
            "options": [
                {"en": "3 Majors", "es": "3 Mayores", "de": "3 Majore", "nl": "3 Majoors"},
                {"en": "2 Majors", "es": "2 Mayores", "de": "2 Majore", "nl": "2 Majoors"},
                {"en": "4 Majors", "es": "4 Mayores", "de": "4 Majore", "nl": "4 Majoors"},
                {"en": "1 Major", "es": "1 Mayor", "de": "1 Major", "nl": "1 Majoor"}
            ],
            "correct": 0,
            "explanation": {
                "en": "Each player has 3 Majors at rank 7. They are strong upper-mid pieces that defeat Captains and below.",
                "es": "Cada jugador tiene 3 Mayores de rango 7. Son piezas fuertes que derrotan a Capitanes e inferiores.",
                "de": "Jeder Spieler hat 3 Majore mit Rang 7. Sie sind starke obere Figuren die Hauptmänner und niedrigere besiegen.",
                "nl": "Elke speler heeft 3 Majoors met rang 7. Het zijn sterke stukken die Kapiteins en lager verslaan."
            }
        },
        {
            "question": {
                "en": "How many Spies does each player have?",
                "es": "¿Cuántos Espías tiene cada jugador?",
                "de": "Wie viele Spione hat jeder Spieler?",
                "nl": "Hoeveel Spionnen heeft elke speler?"
            },
            "options": [
                {"en": "1 Spy", "es": "1 Espía", "de": "1 Spion", "nl": "1 Spion"},
                {"en": "2 Spies", "es": "2 Espías", "de": "2 Spione", "nl": "2 Spionnen"},
                {"en": "3 Spies", "es": "3 Espías", "de": "3 Spione", "nl": "3 Spionnen"},
                {"en": "4 Spies", "es": "4 Espías", "de": "4 Spione", "nl": "4 Spionnen"}
            ],
            "correct": 0,
            "explanation": {
                "en": "Each player has only 1 Spy. It is the weakest piece but can defeat the Marshal when it attacks, making it very valuable.",
                "es": "Cada jugador tiene solo 1 Espía. Es la pieza más débil pero puede derrotar al Mariscal al atacar, siendo muy valiosa.",
                "de": "Jeder Spieler hat nur 1 Spion. Er ist die schwächste Figur, kann aber den Marschall beim Angriff besiegen.",
                "nl": "Elke speler heeft slechts 1 Spion. Het is het zwakste stuk maar kan de Maarschalk verslaan bij een aanval."
            }
        },
        {
            "question": {
                "en": "What rank is the Major in Stratego?",
                "es": "¿Qué rango tiene el Mayor en Stratego?",
                "de": "Welchen Rang hat der Major bei Stratego?",
                "nl": "Welke rang heeft de Majoor in Stratego?"
            },
            "options": [
                {"en": "Rank 7", "es": "Rango 7", "de": "Rang 7", "nl": "Rang 7"},
                {"en": "Rank 6", "es": "Rango 6", "de": "Rang 6", "nl": "Rang 6"},
                {"en": "Rank 8", "es": "Rango 8", "de": "Rang 8", "nl": "Rang 8"},
                {"en": "Rank 5", "es": "Rango 5", "de": "Rang 5", "nl": "Rang 5"}
            ],
            "correct": 0,
            "explanation": {
                "en": "The Major is rank 7. Each player has 3 Majors. They beat Captains, Lieutenants, Sergeants, Miners, Scouts, and the Spy.",
                "es": "El Mayor es rango 7. Cada jugador tiene 3. Derrotan a Capitanes, Tenientes, Sargentos, Mineros, Exploradores y al Espía.",
                "de": "Der Major ist Rang 7. Jeder Spieler hat 3. Sie besiegen Hauptmänner, Leutnante, Feldwebel, Mineure und Aufklärer.",
                "nl": "De Majoor is rang 7. Elke speler heeft er 3. Ze verslaan Kapiteins, Luitenants, Sergeants, Mineurs en Verkenners."
            }
        },
        {
            "question": {
                "en": "What rank is the Miner in Stratego?",
                "es": "¿Qué rango tiene el Minero en Stratego?",
                "de": "Welchen Rang hat der Mineur bei Stratego?",
                "nl": "Welke rang heeft de Mineur in Stratego?"
            },
            "options": [
                {"en": "Rank 3", "es": "Rango 3", "de": "Rang 3", "nl": "Rang 3"},
                {"en": "Rank 4", "es": "Rango 4", "de": "Rang 4", "nl": "Rang 4"},
                {"en": "Rank 2", "es": "Rango 2", "de": "Rang 2", "nl": "Rang 2"},
                {"en": "Rank 5", "es": "Rango 5", "de": "Rang 5", "nl": "Rang 5"}
            ],
            "correct": 0,
            "explanation": {
                "en": "The Miner is rank 3. Despite being low-ranked, Miners have the special ability to defuse Bombs, making them essential.",
                "es": "El Minero es rango 3. A pesar de su bajo rango, los Mineros pueden desactivar Bombas, haciéndolos esenciales.",
                "de": "Der Mineur ist Rang 3. Trotz niedrigem Rang können Mineure Bomben entschärfen, was sie unverzichtbar macht.",
                "nl": "De Mineur is rang 3. Ondanks de lage rang kunnen Mineurs Bommen onschadelijk maken, wat ze essentieel maakt."
            }
        },
        {
            "question": {
                "en": "What rank is the Scout in Stratego?",
                "es": "¿Qué rango tiene el Explorador en Stratego?",
                "de": "Welchen Rang hat der Aufklärer bei Stratego?",
                "nl": "Welke rang heeft de Verkenner in Stratego?"
            },
            "options": [
                {"en": "Rank 2", "es": "Rango 2", "de": "Rang 2", "nl": "Rang 2"},
                {"en": "Rank 3", "es": "Rango 3", "de": "Rang 3", "nl": "Rang 3"},
                {"en": "Rank 1", "es": "Rango 1", "de": "Rang 1", "nl": "Rang 1"},
                {"en": "Rank 4", "es": "Rango 4", "de": "Rang 4", "nl": "Rang 4"}
            ],
            "correct": 0,
            "explanation": {
                "en": "The Scout is rank 2, one of the weakest pieces. However, its ability to move multiple squares makes it very useful for reconnaissance.",
                "es": "El Explorador es rango 2, una de las piezas más débiles. Sin embargo, su capacidad de moverse varias casillas lo hace muy útil.",
                "de": "Der Aufklärer ist Rang 2, eine der schwächsten Figuren. Seine Fähigkeit mehrere Felder zu ziehen macht ihn aber sehr nützlich.",
                "nl": "De Verkenner is rang 2, een van de zwakste stukken. Maar het vermogen om meerdere velden te bewegen maakt hem heel nuttig."
            }
        },
        {
            "question": {
                "en": "How many Generals does each player have?",
                "es": "¿Cuántos Generales tiene cada jugador?",
                "de": "Wie viele Generäle hat jeder Spieler?",
                "nl": "Hoeveel Generaals heeft elke speler?"
            },
            "options": [
                {"en": "1 General", "es": "1 General", "de": "1 General", "nl": "1 Generaal"},
                {"en": "2 Generals", "es": "2 Generales", "de": "2 Generäle", "nl": "2 Generaals"},
                {"en": "3 Generals", "es": "3 Generales", "de": "3 Generäle", "nl": "3 Generaals"},
                {"en": "4 Generals", "es": "4 Generales", "de": "4 Generäle", "nl": "4 Generaals"}
            ],
            "correct": 0,
            "explanation": {
                "en": "Each player has 1 General at rank 9. It is the second strongest piece, only beaten by the Marshal.",
                "es": "Cada jugador tiene 1 General de rango 9. Es la segunda pieza más fuerte, solo superada por el Mariscal.",
                "de": "Jeder Spieler hat 1 General mit Rang 9. Er ist die zweitstärkste Figur, nur vom Marschall geschlagen.",
                "nl": "Elke speler heeft 1 Generaal met rang 9. Het is het op een na sterkste stuk, alleen verslagen door de Maarschalk."
            }
        },
        {
            "question": {
                "en": "What happens when a piece attacks a Bomb?",
                "es": "¿Qué pasa cuando una pieza ataca una Bomba?",
                "de": "Was passiert wenn eine Figur eine Bombe angreift?",
                "nl": "Wat gebeurt er als een stuk een Bom aanvalt?"
            },
            "options": [
                {"en": "The attacking piece is destroyed", "es": "La pieza atacante es destruida", "de": "Die angreifende Figur wird zerstört", "nl": "Het aanvallende stuk wordt vernietigd"},
                {"en": "The Bomb is removed", "es": "La Bomba se retira", "de": "Die Bombe wird entfernt", "nl": "De Bom wordt verwijderd"},
                {"en": "Both are removed", "es": "Ambas se retiran", "de": "Beide werden entfernt", "nl": "Beide worden verwijderd"},
                {"en": "Nothing happens", "es": "No pasa nada", "de": "Nichts passiert", "nl": "Er gebeurt niets"}
            ],
            "correct": 0,
            "explanation": {
                "en": "When a piece attacks a Bomb, the attacking piece is destroyed. The Bomb stays in place. Only a Miner survives and removes the Bomb.",
                "es": "Cuando una pieza ataca una Bomba, la pieza es destruida. La Bomba permanece. Solo un Minero sobrevive y retira la Bomba.",
                "de": "Wenn eine Figur eine Bombe angreift, wird die angreifende Figur zerstört. Die Bombe bleibt. Nur ein Mineur überlebt.",
                "nl": "Als een stuk een Bom aanvalt, wordt het aanvallende stuk vernietigd. De Bom blijft. Alleen een Mineur overleeft."
            }
        },
        {
            "question": {
                "en": "What happens when a Miner attacks a Bomb?",
                "es": "¿Qué pasa cuando un Minero ataca una Bomba?",
                "de": "Was passiert wenn ein Mineur eine Bombe angreift?",
                "nl": "Wat gebeurt er als een Mineur een Bom aanvalt?"
            },
            "options": [
                {"en": "The Miner defuses the Bomb and survives", "es": "El Minero desactiva la Bomba y sobrevive", "de": "Der Mineur entschärft die Bombe und überlebt", "nl": "De Mineur maakt de Bom onschadelijk en overleeft"},
                {"en": "Both are removed", "es": "Ambos se retiran", "de": "Beide werden entfernt", "nl": "Beide worden verwijderd"},
                {"en": "The Miner is destroyed", "es": "El Minero es destruido", "de": "Der Mineur wird zerstört", "nl": "De Mineur wordt vernietigd"},
                {"en": "The Bomb explodes both", "es": "La Bomba los destruye a ambos", "de": "Die Bombe zerstört beide", "nl": "De Bom vernietigt beiden"}
            ],
            "correct": 0,
            "explanation": {
                "en": "The Miner is the only piece that can defuse a Bomb. It removes the Bomb and takes its position on the board.",
                "es": "El Minero es la única pieza que puede desactivar una Bomba. La retira y ocupa su posición en el tablero.",
                "de": "Der Mineur ist die einzige Figur die eine Bombe entschärfen kann. Er entfernt sie und nimmt ihre Position ein.",
                "nl": "De Mineur is het enige stuk dat een Bom onschadelijk kan maken. Het verwijdert de Bom en neemt de positie in."
            }
        },
        {
            "question": {
                "en": "When does the Spy defeat the Marshal?",
                "es": "¿Cuándo el Espía derrota al Mariscal?",
                "de": "Wann besiegt der Spion den Marschall?",
                "nl": "Wanneer verslaat de Spion de Maarschalk?"
            },
            "options": [
                {"en": "Only when the Spy attacks first", "es": "Solo cuando el Espía ataca primero", "de": "Nur wenn der Spion zuerst angreift", "nl": "Alleen als de Spion eerst aanvalt"},
                {"en": "Whenever they meet", "es": "Siempre que se encuentran", "de": "Wann immer sie sich treffen", "nl": "Wanneer ze elkaar ontmoeten"},
                {"en": "Only when the Marshal attacks", "es": "Solo cuando el Mariscal ataca", "de": "Nur wenn der Marschall angreift", "nl": "Alleen als de Maarschalk aanvalt"},
                {"en": "The Spy can never defeat the Marshal", "es": "El Espía nunca puede derrotar al Mariscal", "de": "Der Spion kann den Marschall nie besiegen", "nl": "De Spion kan de Maarschalk nooit verslaan"}
            ],
            "correct": 0,
            "explanation": {
                "en": "The Spy only defeats the Marshal when the Spy initiates the attack. If the Marshal attacks the Spy, the Marshal wins.",
                "es": "El Espía solo derrota al Mariscal cuando el Espía inicia el ataque. Si el Mariscal ataca al Espía, el Mariscal gana.",
                "de": "Der Spion besiegt den Marschall nur wenn der Spion den Angriff startet. Greift der Marschall an, gewinnt der Marschall.",
                "nl": "De Spion verslaat de Maarschalk alleen als de Spion de aanval start. Als de Maarschalk aanvalt, wint de Maarschalk."
            }
        },
        {
            "question": {
                "en": "What happens if a player cannot make any move?",
                "es": "¿Qué pasa si un jugador no puede hacer ningún movimiento?",
                "de": "Was passiert wenn ein Spieler keinen Zug machen kann?",
                "nl": "Wat gebeurt er als een speler geen zet kan doen?"
            },
            "options": [
                {"en": "That player loses the game", "es": "Ese jugador pierde el juego", "de": "Dieser Spieler verliert das Spiel", "nl": "Die speler verliest het spel"},
                {"en": "The turn is skipped", "es": "Se salta el turno", "de": "Der Zug wird übersprungen", "nl": "De beurt wordt overgeslagen"},
                {"en": "The game is a draw", "es": "El juego es un empate", "de": "Das Spiel ist unentschieden", "nl": "Het spel is gelijk"},
                {"en": "They must surrender a piece", "es": "Deben rendir una pieza", "de": "Sie müssen eine Figur aufgeben", "nl": "Ze moeten een stuk opgeven"}
            ],
            "correct": 0,
            "explanation": {
                "en": "If a player has no movable pieces left, they lose the game. This can happen when all remaining pieces are Bombs and the Flag.",
                "es": "Si un jugador no tiene piezas que mover, pierde. Esto puede pasar cuando solo quedan Bombas y la Bandera.",
                "de": "Wenn ein Spieler keine beweglichen Figuren mehr hat, verliert er. Das kann passieren wenn nur Bomben und Flagge übrig sind.",
                "nl": "Als een speler geen beweegbare stukken meer heeft, verliest hij. Dit kan als alleen Bommen en de Vlag over zijn."
            }
        },
        {
            "question": {
                "en": "Which piece has the most copies per player?",
                "es": "¿Qué pieza tiene más copias por jugador?",
                "de": "Welche Figur hat die meisten Exemplare pro Spieler?",
                "nl": "Welk stuk heeft de meeste exemplaren per speler?"
            },
            "options": [
                {"en": "The Scout with 8 copies", "es": "El Explorador con 8 copias", "de": "Der Aufklärer mit 8 Stück", "nl": "De Verkenner met 8 stuks"},
                {"en": "The Bomb with 6 copies", "es": "La Bomba con 6 copias", "de": "Die Bombe mit 6 Stück", "nl": "De Bom met 6 stuks"},
                {"en": "The Miner with 5 copies", "es": "El Minero con 5 copias", "de": "Der Mineur mit 5 Stück", "nl": "De Mineur met 5 stuks"},
                {"en": "The Sergeant with 4 copies", "es": "El Sargento con 4 copias", "de": "Der Feldwebel mit 4 Stück", "nl": "De Sergeant met 4 stuks"}
            ],
            "correct": 0,
            "explanation": {
                "en": "The Scout has the most copies with 8 per player. This makes sense since they are expendable reconnaissance pieces.",
                "es": "El Explorador tiene más copias con 8 por jugador. Esto tiene sentido ya que son piezas de reconocimiento prescindibles.",
                "de": "Der Aufklärer hat mit 8 pro Spieler die meisten Exemplare. Das passt da sie entbehrliche Erkundungsfiguren sind.",
                "nl": "De Verkenner heeft met 8 per speler de meeste exemplaren. Dit past omdat ze vervangbare verkenningsstukken zijn."
            }
        },
        {
            "question": {
                "en": "What rank is the Sergeant in Stratego?",
                "es": "¿Qué rango tiene el Sargento en Stratego?",
                "de": "Welchen Rang hat der Feldwebel bei Stratego?",
                "nl": "Welke rang heeft de Sergeant in Stratego?"
            },
            "options": [
                {"en": "Rank 4", "es": "Rango 4", "de": "Rang 4", "nl": "Rang 4"},
                {"en": "Rank 3", "es": "Rango 3", "de": "Rang 3", "nl": "Rang 3"},
                {"en": "Rank 5", "es": "Rango 5", "de": "Rang 5", "nl": "Rang 5"},
                {"en": "Rank 2", "es": "Rango 2", "de": "Rang 2", "nl": "Rang 2"}
            ],
            "correct": 0,
            "explanation": {
                "en": "The Sergeant is rank 4. Each player has 4 Sergeants. They beat Miners, Scouts, and the Spy in combat.",
                "es": "El Sargento es rango 4. Cada jugador tiene 4. Derrotan a Mineros, Exploradores y al Espía en combate.",
                "de": "Der Feldwebel ist Rang 4. Jeder Spieler hat 4. Sie besiegen Mineure, Aufklärer und den Spion im Kampf.",
                "nl": "De Sergeant is rang 4. Elke speler heeft er 4. Ze verslaan Mineurs, Verkenners en de Spion in gevecht."
            }
        },
        {
            "question": {
                "en": "Can a Scout attack after moving multiple squares?",
                "es": "¿Puede un Explorador atacar tras moverse varias casillas?",
                "de": "Kann ein Aufklärer nach Mehrzug angreifen?",
                "nl": "Kan een Verkenner aanvallen na meerdere velden bewegen?"
            },
            "options": [
                {"en": "Yes, it can move and attack in one turn", "es": "Sí, puede moverse y atacar en un turno", "de": "Ja, er kann in einem Zug ziehen und angreifen", "nl": "Ja, het kan bewegen en aanvallen in één beurt"},
                {"en": "No, it must wait one turn", "es": "No, debe esperar un turno", "de": "Nein, er muss einen Zug warten", "nl": "Nee, het moet één beurt wachten"},
                {"en": "Only if moving fewer than 3 squares", "es": "Solo si se mueve menos de 3 casillas", "de": "Nur bei weniger als 3 Feldern", "nl": "Alleen bij minder dan 3 velden"},
                {"en": "Only the Marshal can do this", "es": "Solo el Mariscal puede hacer esto", "de": "Nur der Marschall kann das", "nl": "Alleen de Maarschalk kan dit"}
            ],
            "correct": 0,
            "explanation": {
                "en": "A Scout can move multiple squares and attack an enemy piece at the end of its move, all in one turn.",
                "es": "Un Explorador puede moverse varias casillas y atacar una pieza enemiga al final de su movimiento, todo en un turno.",
                "de": "Ein Aufklärer kann mehrere Felder ziehen und am Ende seines Zuges eine feindliche Figur angreifen.",
                "nl": "Een Verkenner kan meerdere velden bewegen en aan het einde van zijn zet een vijandelijk stuk aanvallen."
            }
        },
        {
            "question": {
                "en": "Can a piece move through another piece?",
                "es": "¿Puede una pieza pasar a través de otra pieza?",
                "de": "Kann eine Figur durch eine andere hindurchziehen?",
                "nl": "Kan een stuk door een ander stuk heen bewegen?"
            },
            "options": [
                {"en": "No, pieces block each other's path", "es": "No, las piezas bloquean el camino", "de": "Nein, Figuren blockieren den Weg", "nl": "Nee, stukken blokkeren elkaars pad"},
                {"en": "Yes, any piece can", "es": "Sí, cualquier pieza puede", "de": "Ja, jede Figur kann das", "nl": "Ja, elk stuk kan dat"},
                {"en": "Only the Scout can", "es": "Solo el Explorador puede", "de": "Nur der Aufklärer kann das", "nl": "Alleen de Verkenner kan dat"},
                {"en": "Only the Spy can", "es": "Solo el Espía puede", "de": "Nur der Spion kann das", "nl": "Alleen de Spion kan dat"}
            ],
            "correct": 0,
            "explanation": {
                "en": "No piece can move through another piece, even Scouts. Pieces block movement and must be attacked or avoided.",
                "es": "Ninguna pieza puede pasar a través de otra, ni siquiera los Exploradores. Las piezas bloquean y deben ser atacadas o evitadas.",
                "de": "Keine Figur kann durch eine andere hindurchziehen, auch keine Aufklärer. Figuren blockieren und müssen angegriffen oder umgangen werden.",
                "nl": "Geen stuk kan door een ander stuk bewegen, zelfs Verkenners niet. Stukken blokkeren en moeten worden aangevallen of vermeden."
            }
        },
        {
            "question": {
                "en": "Where are the lakes located on the Stratego board?",
                "es": "¿Dónde están los lagos en el tablero de Stratego?",
                "de": "Wo befinden sich die Seen auf dem Stratego-Brett?",
                "nl": "Waar bevinden de meren zich op het Stratego-bord?"
            },
            "options": [
                {"en": "In the center of the board", "es": "En el centro del tablero", "de": "In der Mitte des Bretts", "nl": "In het midden van het bord"},
                {"en": "In the corners", "es": "En las esquinas", "de": "In den Ecken", "nl": "In de hoeken"},
                {"en": "Along the edges", "es": "A lo largo de los bordes", "de": "An den Rändern", "nl": "Langs de randen"},
                {"en": "There are no lakes", "es": "No hay lagos", "de": "Es gibt keine Seen", "nl": "Er zijn geen meren"}
            ],
            "correct": 0,
            "explanation": {
                "en": "Two 2x2 lakes are located in the center of the board, creating narrow passages that all pieces must move through.",
                "es": "Dos lagos de 2x2 están en el centro del tablero, creando pasajes estrechos por los que deben pasar las piezas.",
                "de": "Zwei 2x2-Seen befinden sich in der Mitte des Bretts und schaffen enge Durchgänge.",
                "nl": "Twee 2x2-meren bevinden zich in het midden van het bord en creëren smalle doorgangen."
            }
        },
        {
            "question": {
                "en": "How many Marshals does each player have?",
                "es": "¿Cuántos Mariscales tiene cada jugador?",
                "de": "Wie viele Marschälle hat jeder Spieler?",
                "nl": "Hoeveel Maarschalken heeft elke speler?"
            },
            "options": [
                {"en": "1 Marshal", "es": "1 Mariscal", "de": "1 Marschall", "nl": "1 Maarschalk"},
                {"en": "2 Marshals", "es": "2 Mariscales", "de": "2 Marschälle", "nl": "2 Maarschalken"},
                {"en": "3 Marshals", "es": "3 Mariscales", "de": "3 Marschälle", "nl": "3 Maarschalken"},
                {"en": "4 Marshals", "es": "4 Mariscales", "de": "4 Marschälle", "nl": "4 Maarschalken"}
            ],
            "correct": 0,
            "explanation": {
                "en": "Each player has only 1 Marshal, the strongest piece at rank 10. Losing it means your opponent has no equal threat to fear.",
                "es": "Cada jugador tiene solo 1 Mariscal, la pieza más fuerte de rango 10. Perderlo elimina tu mayor amenaza.",
                "de": "Jeder Spieler hat nur 1 Marschall, die stärkste Figur mit Rang 10. Ihn zu verlieren ist ein großer Nachteil.",
                "nl": "Elke speler heeft slechts 1 Maarschalk, het sterkste stuk met rang 10. Het verliezen ervan is een groot nadeel."
            }
        },
        {
            "question": {
                "en": "How many Captains does each player start with?",
                "es": "¿Cuántos Capitanes tiene cada jugador al inicio?",
                "de": "Wie viele Hauptmänner hat jeder Spieler zu Beginn?",
                "nl": "Hoeveel Kapiteins heeft elke speler aan het begin?"
            },
            "options": [
                {"en": "4 Captains", "es": "4 Capitanes", "de": "4 Hauptmänner", "nl": "4 Kapiteins"},
                {"en": "3 Captains", "es": "3 Capitanes", "de": "3 Hauptmänner", "nl": "3 Kapiteins"},
                {"en": "5 Captains", "es": "5 Capitanes", "de": "5 Hauptmänner", "nl": "5 Kapiteins"},
                {"en": "2 Captains", "es": "2 Capitanes", "de": "2 Hauptmänner", "nl": "2 Kapiteins"}
            ],
            "correct": 0,
            "explanation": {
                "en": "Each player starts with 4 Captains at rank 6. They are strong mid-level pieces good for controlling the middle of the board.",
                "es": "Cada jugador comienza con 4 Capitanes de rango 6. Son piezas medias fuertes para controlar el centro del tablero.",
                "de": "Jeder Spieler beginnt mit 4 Hauptmännern mit Rang 6. Sie sind starke Figuren zur Kontrolle der Brettmitte.",
                "nl": "Elke speler begint met 4 Kapiteins met rang 6. Ze zijn sterke middenstukken om het midden van het bord te controleren."
            }
        },
        {
            "question": {
                "en": "How many Lieutenants does each player start with?",
                "es": "¿Cuántos Tenientes tiene cada jugador al inicio?",
                "de": "Wie viele Leutnante hat jeder Spieler zu Beginn?",
                "nl": "Hoeveel Luitenants heeft elke speler aan het begin?"
            },
            "options": [
                {"en": "4 Lieutenants", "es": "4 Tenientes", "de": "4 Leutnante", "nl": "4 Luitenants"},
                {"en": "3 Lieutenants", "es": "3 Tenientes", "de": "3 Leutnante", "nl": "3 Luitenants"},
                {"en": "5 Lieutenants", "es": "5 Tenientes", "de": "5 Leutnante", "nl": "5 Luitenants"},
                {"en": "2 Lieutenants", "es": "2 Tenientes", "de": "2 Leutnante", "nl": "2 Luitenants"}
            ],
            "correct": 0,
            "explanation": {
                "en": "Each player starts with 4 Lieutenants at rank 5. They are versatile mid-level pieces for both attack and defense.",
                "es": "Cada jugador comienza con 4 Tenientes de rango 5. Son piezas versátiles de nivel medio para ataque y defensa.",
                "de": "Jeder Spieler beginnt mit 4 Leutnanten mit Rang 5. Sie sind vielseitige Figuren für Angriff und Verteidigung.",
                "nl": "Elke speler begint met 4 Luitenants met rang 5. Ze zijn veelzijdige stukken voor aanval en verdediging."
            }
        },
        {
            "question": {
                "en": "What information is hidden from your opponent?",
                "es": "¿Qué información se oculta a tu oponente?",
                "de": "Welche Information ist vor dem Gegner verborgen?",
                "nl": "Welke informatie is verborgen voor je tegenstander?"
            },
            "options": [
                {"en": "The rank of each piece", "es": "El rango de cada pieza", "de": "Der Rang jeder Figur", "nl": "De rang van elk stuk"},
                {"en": "The number of pieces", "es": "El número de piezas", "de": "Die Anzahl der Figuren", "nl": "Het aantal stukken"},
                {"en": "The color of pieces", "es": "El color de las piezas", "de": "Die Farbe der Figuren", "nl": "De kleur van de stukken"},
                {"en": "Nothing is hidden", "es": "Nada está oculto", "de": "Nichts ist verborgen", "nl": "Niets is verborgen"}
            ],
            "correct": 0,
            "explanation": {
                "en": "The rank of each piece is hidden from the opponent. Pieces face the player so only they can see their own ranks.",
                "es": "El rango de cada pieza está oculto al oponente. Las piezas miran al jugador para que solo él vea sus rangos.",
                "de": "Der Rang jeder Figur ist vor dem Gegner verborgen. Figuren zeigen zum Spieler sodass nur er die Ränge sieht.",
                "nl": "De rang van elk stuk is verborgen voor de tegenstander. Stukken staan richting de speler zodat alleen hij de rangen ziet."
            }
        },
        {
            "question": {
                "en": "When is a piece's rank revealed to the opponent?",
                "es": "¿Cuándo se revela el rango de una pieza al oponente?",
                "de": "Wann wird der Rang einer Figur dem Gegner offenbart?",
                "nl": "Wanneer wordt de rang van een stuk onthuld aan de tegenstander?"
            },
            "options": [
                {"en": "When it attacks or is attacked", "es": "Cuando ataca o es atacada", "de": "Wenn sie angreift oder angegriffen wird", "nl": "Als het aanvalt of aangevallen wordt"},
                {"en": "At the start of the game", "es": "Al inicio del juego", "de": "Am Anfang des Spiels", "nl": "Aan het begin van het spel"},
                {"en": "When it crosses the center", "es": "Cuando cruza el centro", "de": "Wenn sie die Mitte überquert", "nl": "Als het het midden oversteekt"},
                {"en": "Ranks are always visible", "es": "Los rangos siempre son visibles", "de": "Ränge sind immer sichtbar", "nl": "Rangen zijn altijd zichtbaar"}
            ],
            "correct": 0,
            "explanation": {
                "en": "A piece's rank is revealed when it battles another piece. Both players show their ranks to determine the winner.",
                "es": "El rango de una pieza se revela cuando lucha contra otra pieza. Ambos jugadores muestran sus rangos para determinar al ganador.",
                "de": "Der Rang einer Figur wird bei einem Kampf offenbart. Beide Spieler zeigen ihre Ränge um den Gewinner zu bestimmen.",
                "nl": "De rang van een stuk wordt onthuld bij een gevecht. Beide spelers tonen hun rangen om de winnaar te bepalen."
            }
        },
        {
            "question": {
                "en": "Who sets up their pieces first in Stratego?",
                "es": "¿Quién coloca sus piezas primero en Stratego?",
                "de": "Wer stellt seine Figuren bei Stratego zuerst auf?",
                "nl": "Wie plaatst zijn stukken het eerst in Stratego?"
            },
            "options": [
                {"en": "Both players set up at the same time", "es": "Ambos jugadores colocan al mismo tiempo", "de": "Beide Spieler stellen gleichzeitig auf", "nl": "Beide spelers plaatsen tegelijkertijd"},
                {"en": "The younger player", "es": "El jugador más joven", "de": "Der jüngere Spieler", "nl": "De jongste speler"},
                {"en": "The red player first", "es": "El jugador rojo primero", "de": "Der rote Spieler zuerst", "nl": "De rode speler eerst"},
                {"en": "The winner of a coin toss", "es": "El ganador del lanzamiento de moneda", "de": "Der Gewinner des Münzwurfs", "nl": "De winnaar van de muntopgooi"}
            ],
            "correct": 0,
            "explanation": {
                "en": "Both players set up their pieces at the same time behind a divider. Neither player sees the other's setup.",
                "es": "Ambos jugadores colocan sus piezas al mismo tiempo detrás de un divisor. Ninguno ve la preparación del otro.",
                "de": "Beide Spieler stellen gleichzeitig hinter einer Trennwand auf. Keiner sieht die Aufstellung des anderen.",
                "nl": "Beide spelers plaatsen hun stukken tegelijkertijd achter een scherm. Geen van beide ziet de opstelling van de ander."
            }
        },
        {
            "question": {
                "en": "What happens when the Spy attacks any piece other than the Marshal?",
                "es": "¿Qué pasa cuando el Espía ataca otra pieza que no sea el Mariscal?",
                "de": "Was passiert wenn der Spion eine andere Figur als den Marschall angreift?",
                "nl": "Wat gebeurt er als de Spion een ander stuk dan de Maarschalk aanvalt?"
            },
            "options": [
                {"en": "The Spy is defeated", "es": "El Espía es derrotado", "de": "Der Spion wird besiegt", "nl": "De Spion wordt verslagen"},
                {"en": "The Spy always wins", "es": "El Espía siempre gana", "de": "Der Spion gewinnt immer", "nl": "De Spion wint altijd"},
                {"en": "Both are removed", "es": "Ambos se retiran", "de": "Beide werden entfernt", "nl": "Beide worden verwijderd"},
                {"en": "Nothing happens", "es": "No pasa nada", "de": "Nichts passiert", "nl": "Er gebeurt niets"}
            ],
            "correct": 0,
            "explanation": {
                "en": "The Spy is the weakest piece (rank 1). It loses to every other piece except when it attacks the Marshal. Keep it protected.",
                "es": "El Espía es la pieza más débil (rango 1). Pierde contra todas excepto cuando ataca al Mariscal. Mantenlo protegido.",
                "de": "Der Spion ist die schwächste Figur (Rang 1). Er verliert gegen alle außer beim Angriff auf den Marschall.",
                "nl": "De Spion is het zwakste stuk (rang 1). Het verliest van alle anderen, behalve bij een aanval op de Maarschalk."
            }
        },
        {
            "question": {
                "en": "Can pieces move backward in Stratego?",
                "es": "¿Pueden las piezas moverse hacia atrás en Stratego?",
                "de": "Können Figuren bei Stratego rückwärts ziehen?",
                "nl": "Kunnen stukken achteruit bewegen in Stratego?"
            },
            "options": [
                {"en": "Yes, all movable pieces can move backward", "es": "Sí, todas las piezas móviles pueden ir hacia atrás", "de": "Ja, alle beweglichen Figuren können rückwärts ziehen", "nl": "Ja, alle beweegbare stukken kunnen achteruit bewegen"},
                {"en": "No, pieces can only move forward", "es": "No, solo pueden moverse hacia adelante", "de": "Nein, nur vorwärts", "nl": "Nee, stukken kunnen alleen vooruit"},
                {"en": "Only the Marshal can", "es": "Solo el Mariscal puede", "de": "Nur der Marschall kann das", "nl": "Alleen de Maarschalk kan dat"},
                {"en": "Only the Scout can", "es": "Solo el Explorador puede", "de": "Nur der Aufklärer kann das", "nl": "Alleen de Verkenner kan dat"}
            ],
            "correct": 0,
            "explanation": {
                "en": "All movable pieces can move in any direction: forward, backward, left, or right. Only diagonal movement is not allowed.",
                "es": "Todas las piezas móviles pueden moverse en cualquier dirección: adelante, atrás, izquierda o derecha. Solo el movimiento diagonal no está permitido.",
                "de": "Alle beweglichen Figuren können in jede Richtung ziehen: vor, zurück, links oder rechts. Nur diagonal ist nicht erlaubt.",
                "nl": "Alle beweegbare stukken kunnen in elke richting bewegen: voor, achter, links of rechts. Alleen diagonaal mag niet."
            }
        },
        {
            "question": {
                "en": "What is the two-square rule in Stratego?",
                "es": "¿Qué es la regla de dos casillas en Stratego?",
                "de": "Was ist die Zwei-Felder-Regel bei Stratego?",
                "nl": "Wat is de twee-velden-regel in Stratego?"
            },
            "options": [
                {"en": "You cannot move a piece back and forth endlessly", "es": "No puedes mover una pieza de ida y vuelta sin fin", "de": "Man darf eine Figur nicht endlos hin und her bewegen", "nl": "Je mag een stuk niet eindeloos heen en weer bewegen"},
                {"en": "All pieces move two squares", "es": "Todas las piezas mueven dos casillas", "de": "Alle Figuren ziehen zwei Felder", "nl": "Alle stukken bewegen twee velden"},
                {"en": "Lakes are two squares wide", "es": "Los lagos miden dos casillas de ancho", "de": "Seen sind zwei Felder breit", "nl": "Meren zijn twee velden breed"},
                {"en": "You must move two pieces per turn", "es": "Debes mover dos piezas por turno", "de": "Man muss zwei Figuren pro Zug bewegen", "nl": "Je moet twee stukken per beurt bewegen"}
            ],
            "correct": 0,
            "explanation": {
                "en": "The two-square rule prevents endless back-and-forth moves. A piece cannot return to the same two squares more than a set number of times.",
                "es": "La regla de dos casillas previene movimientos infinitos. Una pieza no puede volver a las mismas dos casillas repetidamente.",
                "de": "Die Zwei-Felder-Regel verhindert endloses Hin-und-Her. Eine Figur darf nicht unbegrenzt zwischen zwei Feldern wechseln.",
                "nl": "De twee-velden-regel voorkomt eindeloos heen en weer bewegen. Een stuk mag niet onbeperkt tussen twee velden wisselen."
            }
        },
        {
            "question": {
                "en": "Can you move through the lakes on the board?",
                "es": "¿Puedes moverte a través de los lagos del tablero?",
                "de": "Kann man durch die Seen auf dem Brett ziehen?",
                "nl": "Kun je door de meren op het bord bewegen?"
            },
            "options": [
                {"en": "No, lakes block all movement", "es": "No, los lagos bloquean todo movimiento", "de": "Nein, Seen blockieren alle Bewegung", "nl": "Nee, meren blokkeren alle beweging"},
                {"en": "Yes, any piece can cross", "es": "Sí, cualquier pieza puede cruzar", "de": "Ja, jede Figur kann durchziehen", "nl": "Ja, elk stuk kan oversteken"},
                {"en": "Only the Scout can", "es": "Solo el Explorador puede", "de": "Nur der Aufklärer kann", "nl": "Alleen de Verkenner kan"},
                {"en": "Only the Marshal can", "es": "Solo el Mariscal puede", "de": "Nur der Marschall kann", "nl": "Alleen de Maarschalk kan"}
            ],
            "correct": 0,
            "explanation": {
                "en": "No piece can enter or cross a lake. Lakes are impassable obstacles that create strategic chokepoints in the center of the board.",
                "es": "Ninguna pieza puede entrar o cruzar un lago. Los lagos son obstáculos que crean puntos estratégicos en el centro.",
                "de": "Keine Figur kann einen See betreten oder durchqueren. Seen sind unpassierbare Hindernisse die strategische Engpässe schaffen.",
                "nl": "Geen stuk kan een meer betreden of oversteken. Meren zijn onpasseerbare obstakels die strategische knelpunten creëren."
            }
        },
        {
            "question": {
                "en": "Who moves first in a game of Stratego?",
                "es": "¿Quién mueve primero en una partida de Stratego?",
                "de": "Wer zieht bei Stratego zuerst?",
                "nl": "Wie zet als eerste in een spel Stratego?"
            },
            "options": [
                {"en": "The red player", "es": "El jugador rojo", "de": "Der rote Spieler", "nl": "De rode speler"},
                {"en": "The blue player", "es": "El jugador azul", "de": "Der blaue Spieler", "nl": "De blauwe speler"},
                {"en": "The oldest player", "es": "El jugador mayor", "de": "Der ältere Spieler", "nl": "De oudste speler"},
                {"en": "Determined by dice roll", "es": "Determinado por dados", "de": "Durch Würfelwurf bestimmt", "nl": "Bepaald door dobbelsteenworp"}
            ],
            "correct": 0,
            "explanation": {
                "en": "In the classic Stratego rules, the red player always moves first. This is a slight advantage similar to white in chess.",
                "es": "En las reglas clásicas de Stratego, el jugador rojo siempre mueve primero. Es una ligera ventaja similar al blanco en ajedrez.",
                "de": "In den klassischen Stratego-Regeln zieht der rote Spieler immer zuerst. Das ist ein leichter Vorteil ähnlich wie Weiß im Schach.",
                "nl": "In de klassieke Stratego-regels zet de rode speler altijd als eerste. Dit is een licht voordeel vergelijkbaar met wit bij schaken."
            }
        },
        {
            "question": {
                "en": "How many pieces per turn can a player move?",
                "es": "¿Cuántas piezas por turno puede mover un jugador?",
                "de": "Wie viele Figuren pro Zug darf ein Spieler bewegen?",
                "nl": "Hoeveel stukken per beurt mag een speler bewegen?"
            },
            "options": [
                {"en": "Only one piece", "es": "Solo una pieza", "de": "Nur eine Figur", "nl": "Slechts één stuk"},
                {"en": "Two pieces", "es": "Dos piezas", "de": "Zwei Figuren", "nl": "Twee stukken"},
                {"en": "As many as they want", "es": "Todas las que quieran", "de": "So viele wie gewünscht", "nl": "Zoveel als gewenst"},
                {"en": "Three pieces", "es": "Tres piezas", "de": "Drei Figuren", "nl": "Drie stukken"}
            ],
            "correct": 0,
            "explanation": {
                "en": "Each player can only move one piece per turn. Choosing which piece to move is an important part of Stratego strategy.",
                "es": "Cada jugador solo puede mover una pieza por turno. Elegir qué pieza mover es una parte importante de la estrategia.",
                "de": "Jeder Spieler darf nur eine Figur pro Zug bewegen. Die Wahl der richtigen Figur ist ein wichtiger Teil der Strategie.",
                "nl": "Elke speler mag slechts één stuk per beurt bewegen. Kiezen welk stuk je beweegt is een belangrijk deel van de strategie."
            }
        },
        {
            "question": {
                "en": "What is the rank of the General in Stratego?",
                "es": "¿Cuál es el rango del General en Stratego?",
                "de": "Welchen Rang hat der General bei Stratego?",
                "nl": "Welke rang heeft de Generaal in Stratego?"
            },
            "options": [
                {"en": "Rank 9", "es": "Rango 9", "de": "Rang 9", "nl": "Rang 9"},
                {"en": "Rank 10", "es": "Rango 10", "de": "Rang 10", "nl": "Rang 10"},
                {"en": "Rank 8", "es": "Rango 8", "de": "Rang 8", "nl": "Rang 8"},
                {"en": "Rank 7", "es": "Rango 7", "de": "Rang 7", "nl": "Rang 7"}
            ],
            "correct": 0,
            "explanation": {
                "en": "The General is rank 9, the second highest rank. It is beaten only by the Marshal. Each player has 1 General.",
                "es": "El General es rango 9, el segundo más alto. Solo lo supera el Mariscal. Cada jugador tiene 1 General.",
                "de": "Der General ist Rang 9, der zweithöchste Rang. Er wird nur vom Marschall geschlagen. Jeder Spieler hat 1 General.",
                "nl": "De Generaal is rang 9, de op een na hoogste rang. Alleen de Maarschalk verslaat hem. Elke speler heeft 1 Generaal."
            }
        },
        {
            "question": {
                "en": "When many pieces are revealed, what should you do?",
                "es": "Cuando muchas piezas están reveladas, ¿qué hacer?",
                "de": "Wenn viele Figuren aufgedeckt sind, was tun?",
                "nl": "Als veel stukken onthuld zijn, wat doe je dan?"
            },
            "options": [
                {"en": "Launch targeted attacks on known weak pieces", "es": "Lanzar ataques dirigidos a piezas débiles conocidas", "de": "Gezielte Angriffe auf bekannte schwache Figuren", "nl": "Gerichte aanvallen op bekende zwakke stukken"},
                {"en": "Move your pieces randomly", "es": "Mover tus piezas al azar", "de": "Figuren zufällig bewegen", "nl": "Je stukken willekeurig bewegen"},
                {"en": "Stop attacking", "es": "Dejar de atacar", "de": "Aufhören anzugreifen", "nl": "Stoppen met aanvallen"},
                {"en": "Surrender the game", "es": "Rendirse", "de": "Aufgeben", "nl": "Het spel opgeven"}
            ],
            "correct": 0,
            "explanation": {
                "en": "When many pieces are revealed, use your knowledge of enemy pieces to launch targeted attacks against known weaker opponents.",
                "es": "Cuando muchas piezas están reveladas, usa tu conocimiento para lanzar ataques dirigidos contra oponentes más débiles conocidos.",
                "de": "Wenn viele Figuren aufgedeckt sind, nutze das Wissen über feindliche Figuren für gezielte Angriffe auf bekannte schwächere Gegner.",
                "nl": "Als veel stukken onthuld zijn, gebruik je kennis van vijandelijke stukken voor gerichte aanvallen op bekende zwakkere tegenstanders."
            }
        },
        {
            "question": {
                "en": "What is a sacrifice in Stratego?",
                "es": "¿Qué es un sacrificio en Stratego?",
                "de": "Was ist ein Opfer bei Stratego?",
                "nl": "Wat is een offer in Stratego?"
            },
            "options": [
                {"en": "Losing a piece to gain strategic advantage", "es": "Perder una pieza para ganar ventaja estratégica", "de": "Eine Figur verlieren um strategischen Vorteil zu gewinnen", "nl": "Een stuk verliezen om strategisch voordeel te behalen"},
                {"en": "Removing a piece from the game voluntarily", "es": "Retirar una pieza del juego voluntariamente", "de": "Eine Figur freiwillig entfernen", "nl": "Een stuk vrijwillig uit het spel halen"},
                {"en": "Trading pieces with the opponent", "es": "Intercambiar piezas con el oponente", "de": "Figuren mit dem Gegner tauschen", "nl": "Stukken ruilen met de tegenstander"},
                {"en": "Giving up the game early", "es": "Rendirse temprano", "de": "Früh aufgeben", "nl": "Vroeg opgeven"}
            ],
            "correct": 0,
            "explanation": {
                "en": "A sacrifice means intentionally losing a piece to gain information or a better position. For example, losing a Scout to reveal a strong enemy piece.",
                "es": "Un sacrificio significa perder intencionalmente una pieza para ganar información o una mejor posición.",
                "de": "Ein Opfer bedeutet absichtlich eine Figur zu verlieren um Information oder eine bessere Position zu gewinnen.",
                "nl": "Een offer betekent opzettelijk een stuk verliezen om informatie of een betere positie te verkrijgen."
            }
        },
        {
            "question": {
                "en": "How does bluffing work in Stratego?",
                "es": "¿Cómo funciona el engaño en Stratego?",
                "de": "Wie funktioniert Bluffen bei Stratego?",
                "nl": "Hoe werkt bluffen in Stratego?"
            },
            "options": [
                {"en": "Moving weak pieces aggressively to seem strong", "es": "Mover piezas débiles agresivamente para parecer fuertes", "de": "Schwache Figuren aggressiv bewegen um stark zu wirken", "nl": "Zwakke stukken agressief bewegen om sterk te lijken"},
                {"en": "Hiding pieces under the board", "es": "Esconder piezas bajo el tablero", "de": "Figuren unter dem Brett verstecken", "nl": "Stukken onder het bord verstoppen"},
                {"en": "Changing ranks during the game", "es": "Cambiar rangos durante el juego", "de": "Ränge während des Spiels ändern", "nl": "Rangen veranderen tijdens het spel"},
                {"en": "Bluffing is not allowed", "es": "El engaño no está permitido", "de": "Bluffen ist nicht erlaubt", "nl": "Bluffen is niet toegestaan"}
            ],
            "correct": 0,
            "explanation": {
                "en": "Bluffing means moving pieces in ways that make the opponent misjudge their rank. A weak piece moved boldly may seem like a strong one.",
                "es": "Engañar significa mover piezas de forma que el oponente juzgue mal su rango. Una pieza débil movida audazmente puede parecer fuerte.",
                "de": "Bluffen bedeutet Figuren so zu bewegen dass der Gegner ihren Rang falsch einschätzt.",
                "nl": "Bluffen betekent stukken zo bewegen dat de tegenstander hun rang verkeerd inschat."
            }
        },
        {
            "question": {
                "en": "Why should you avoid grouping all strong pieces together?",
                "es": "¿Por qué evitar agrupar todas las piezas fuertes?",
                "de": "Warum sollte man starke Figuren nicht zusammen gruppieren?",
                "nl": "Waarom moet je sterke stukken niet bij elkaar groeperen?"
            },
            "options": [
                {"en": "One side of the board becomes undefended", "es": "Un lado del tablero queda indefenso", "de": "Eine Seite des Bretts wird unverteidigt", "nl": "Eén kant van het bord wordt onverdedigd"},
                {"en": "Strong pieces fight each other", "es": "Las piezas fuertes luchan entre sí", "de": "Starke Figuren bekämpfen sich gegenseitig", "nl": "Sterke stukken vechten tegen elkaar"},
                {"en": "The rules forbid it", "es": "Las reglas lo prohíben", "de": "Die Regeln verbieten es", "nl": "De regels verbieden het"},
                {"en": "It makes no difference", "es": "No hay diferencia", "de": "Es macht keinen Unterschied", "nl": "Het maakt geen verschil"}
            ],
            "correct": 0,
            "explanation": {
                "en": "Grouping strong pieces leaves other areas weak. Spread them out so you can respond to threats on any part of the board.",
                "es": "Agrupar piezas fuertes deja otras áreas débiles. Distribúyelas para responder a amenazas en cualquier parte.",
                "de": "Gruppierte starke Figuren lassen andere Bereiche schwach. Verteile sie um überall reagieren zu können.",
                "nl": "Sterke stukken bij elkaar laat andere gebieden zwak. Verspreid ze om overal op dreigingen te reageren."
            }
        },
        {
            "question": {
                "en": "Why is the Scout useful for finding Bombs?",
                "es": "¿Por qué el Explorador es útil para encontrar Bombas?",
                "de": "Warum ist der Aufklärer nützlich zum Finden von Bomben?",
                "nl": "Waarom is de Verkenner nuttig om Bommen te vinden?"
            },
            "options": [
                {"en": "It can quickly reach distant pieces", "es": "Puede llegar rápidamente a piezas lejanas", "de": "Er kann schnell entfernte Figuren erreichen", "nl": "Het kan snel verre stukken bereiken"},
                {"en": "It defuses Bombs", "es": "Desactiva Bombas", "de": "Er entschärft Bomben", "nl": "Het maakt Bommen onschadelijk"},
                {"en": "It is immune to Bombs", "es": "Es inmune a Bombas", "de": "Er ist immun gegen Bomben", "nl": "Het is immuun voor Bommen"},
                {"en": "It can see Bombs from far away", "es": "Puede ver Bombas desde lejos", "de": "Er sieht Bomben von weit weg", "nl": "Het kan Bommen van ver zien"}
            ],
            "correct": 0,
            "explanation": {
                "en": "Scouts move multiple squares, so they can quickly test suspicious immovable pieces. If it is a Bomb, you only lose a low-ranked Scout.",
                "es": "Los Exploradores se mueven varias casillas y pueden probar piezas sospechosas rápidamente. Si es una Bomba, solo pierdes un Explorador.",
                "de": "Aufklärer ziehen mehrere Felder und können verdächtige Figuren schnell testen. Bei einer Bombe verliert man nur einen Aufklärer.",
                "nl": "Verkenners bewegen meerdere velden en kunnen verdachte stukken snel testen. Bij een Bom verlies je slechts een Verkenner."
            }
        },
        {
            "question": {
                "en": "What should you do with your Spy early in the game?",
                "es": "¿Qué hacer con tu Espía al inicio del juego?",
                "de": "Was tun mit dem Spion am Anfang des Spiels?",
                "nl": "Wat doe je met je Spion aan het begin van het spel?"
            },
            "options": [
                {"en": "Keep it safe and protected", "es": "Mantenerlo seguro y protegido", "de": "Ihn sicher und geschützt halten", "nl": "Het veilig en beschermd houden"},
                {"en": "Send it to the front line", "es": "Enviarlo al frente", "de": "Ihn an die Front schicken", "nl": "Het naar de frontlinie sturen"},
                {"en": "Place it next to the Flag", "es": "Colocarlo junto a la Bandera", "de": "Ihn neben die Flagge stellen", "nl": "Het naast de Vlag plaatsen"},
                {"en": "Use it to attack Scouts", "es": "Usarlo para atacar Exploradores", "de": "Ihn zum Angriff auf Aufklärer nutzen", "nl": "Het gebruiken om Verkenners aan te vallen"}
            ],
            "correct": 0,
            "explanation": {
                "en": "Keep the Spy safe early on. It is your only counter to the Marshal, so losing it too soon gives the opponent a major advantage.",
                "es": "Mantén el Espía seguro al inicio. Es tu único contra al Mariscal, así que perderlo pronto da ventaja al oponente.",
                "de": "Den Spion früh sicher halten. Er ist die einzige Waffe gegen den Marschall, ihn zu verlieren gibt dem Gegner einen großen Vorteil.",
                "nl": "Houd de Spion vroeg veilig. Het is je enige tegenmiddel tegen de Maarschalk, dus het te vroeg verliezen geeft de tegenstander voordeel."
            }
        },
        {
            "question": {
                "en": "What is the best use of the General?",
                "es": "¿Cuál es el mejor uso del General?",
                "de": "Was ist die beste Verwendung des Generals?",
                "nl": "Wat is het beste gebruik van de Generaal?"
            },
            "options": [
                {"en": "As a strong attacker that is safe from the Spy", "es": "Como atacante fuerte seguro del Espía", "de": "Als starker Angreifer der vor dem Spion sicher ist", "nl": "Als sterke aanvaller die veilig is voor de Spion"},
                {"en": "To guard the Flag", "es": "Para proteger la Bandera", "de": "Um die Flagge zu bewachen", "nl": "Om de Vlag te bewaken"},
                {"en": "To block enemy Scouts", "es": "Para bloquear Exploradores enemigos", "de": "Um feindliche Aufklärer zu blockieren", "nl": "Om vijandelijke Verkenners te blokkeren"},
                {"en": "As a decoy", "es": "Como señuelo", "de": "Als Köder", "nl": "Als lokaas"}
            ],
            "correct": 0,
            "explanation": {
                "en": "The General (rank 9) is the strongest piece that cannot be killed by the Spy, making it a safer aggressive attacker than the Marshal.",
                "es": "El General (rango 9) es la pieza más fuerte que no puede ser matada por el Espía, haciéndolo un atacante más seguro que el Mariscal.",
                "de": "Der General (Rang 9) ist die stärkste Figur die nicht vom Spion besiegt werden kann, sicherer als der Marschall.",
                "nl": "De Generaal (rang 9) is het sterkste stuk dat niet door de Spion kan worden verslagen, veiliger dan de Maarschalk."
            }
        },
        {
            "question": {
                "en": "What is a good way to protect your Spy?",
                "es": "¿Cuál es una buena manera de proteger tu Espía?",
                "de": "Wie schützt man den Spion am besten?",
                "nl": "Hoe bescherm je je Spion het beste?"
            },
            "options": [
                {"en": "Keep it behind stronger pieces", "es": "Mantenerlo detrás de piezas fuertes", "de": "Ihn hinter stärkeren Figuren halten", "nl": "Het achter sterkere stukken houden"},
                {"en": "Place it in the front row", "es": "Colocarlo en la primera fila", "de": "Ihn in die vorderste Reihe stellen", "nl": "Het in de voorste rij plaatsen"},
                {"en": "Move it every turn", "es": "Moverlo cada turno", "de": "Ihn jeden Zug bewegen", "nl": "Het elke beurt bewegen"},
                {"en": "Place it next to Bombs", "es": "Colocarlo junto a Bombas", "de": "Ihn neben Bomben stellen", "nl": "Het naast Bommen plaatsen"}
            ],
            "correct": 0,
            "explanation": {
                "en": "Keep the Spy behind stronger pieces so it is not exposed to random attacks. It only needs to come out when the Marshal is found.",
                "es": "Mantén el Espía detrás de piezas fuertes para que no esté expuesto. Solo necesita salir cuando se encuentra el Mariscal.",
                "de": "Den Spion hinter stärkeren Figuren halten damit er nicht zufällig angegriffen wird. Er muss erst raus wenn der Marschall gefunden ist.",
                "nl": "Houd de Spion achter sterkere stukken zodat het niet blootgesteld wordt. Het hoeft pas tevoorschijn te komen als de Maarschalk gevonden is."
            }
        },
        {
            "question": {
                "en": "Why is it risky to place the Flag in the center?",
                "es": "¿Por qué es arriesgado colocar la Bandera en el centro?",
                "de": "Warum ist es riskant die Flagge in die Mitte zu stellen?",
                "nl": "Waarom is het riskant de Vlag in het midden te plaatsen?"
            },
            "options": [
                {"en": "More directions to defend from", "es": "Más direcciones desde donde defender", "de": "Mehr Richtungen zu verteidigen", "nl": "Meer richtingen om te verdedigen"},
                {"en": "The center is forbidden for Flags", "es": "El centro está prohibido para Banderas", "de": "Die Mitte ist für Flaggen verboten", "nl": "Het midden is verboden voor Vlaggen"},
                {"en": "Bombs cannot be placed in the center", "es": "Las Bombas no se pueden colocar en el centro", "de": "Bomben können nicht in die Mitte gestellt werden", "nl": "Bommen kunnen niet in het midden geplaatst worden"},
                {"en": "The center is always attacked first", "es": "El centro siempre se ataca primero", "de": "Die Mitte wird immer zuerst angegriffen", "nl": "Het midden wordt altijd eerst aangevallen"}
            ],
            "correct": 0,
            "explanation": {
                "en": "A center Flag must be defended from more directions than a corner or edge Flag, requiring more Bombs and guards.",
                "es": "Una Bandera central debe defenderse desde más direcciones que una en esquina o borde, requiriendo más Bombas.",
                "de": "Eine Flagge in der Mitte muss aus mehr Richtungen verteidigt werden als eine in der Ecke oder am Rand.",
                "nl": "Een Vlag in het midden moet vanuit meer richtingen verdedigd worden dan een in de hoek of aan de rand."
            }
        },
        {
            "question": {
                "en": "What are the chokepoints near the lakes used for?",
                "es": "¿Para qué sirven los puntos estrechos cerca de los lagos?",
                "de": "Wofür nutzt man die Engpässe bei den Seen?",
                "nl": "Waarvoor worden de knelpunten bij de meren gebruikt?"
            },
            "options": [
                {"en": "Controlling access to the other side", "es": "Controlar el acceso al otro lado", "de": "Zugang zur anderen Seite kontrollieren", "nl": "Toegang tot de andere kant controleren"},
                {"en": "Hiding pieces from view", "es": "Esconder piezas de la vista", "de": "Figuren verstecken", "nl": "Stukken verbergen voor het zicht"},
                {"en": "Extra movement speed", "es": "Velocidad de movimiento extra", "de": "Extra Bewegungsgeschwindigkeit", "nl": "Extra bewegingssnelheid"},
                {"en": "Chokepoints have no use", "es": "Los puntos estrechos no tienen uso", "de": "Engpässe haben keinen Nutzen", "nl": "Knelpunten hebben geen nut"}
            ],
            "correct": 0,
            "explanation": {
                "en": "Chokepoints near the lakes are narrow passages. Placing strong pieces there lets you control who can cross to your side.",
                "es": "Los puntos estrechos cerca de los lagos son pasajes angostos. Colocar piezas fuertes allí controla quién puede cruzar.",
                "de": "Engpässe bei den Seen sind schmale Durchgänge. Starke Figuren dort platziert kontrollieren wer durchkommt.",
                "nl": "Knelpunten bij de meren zijn smalle doorgangen. Sterke stukken daar plaatsen controleert wie er doorkomt."
            }
        },
        {
            "question": {
                "en": "What is the advantage of attacking with Scouts first?",
                "es": "¿Cuál es la ventaja de atacar primero con Exploradores?",
                "de": "Was ist der Vorteil zuerst mit Aufklärern anzugreifen?",
                "nl": "Wat is het voordeel van eerst aanvallen met Verkenners?"
            },
            "options": [
                {"en": "You learn enemy ranks at low cost", "es": "Aprendes rangos enemigos a bajo costo", "de": "Man erfährt gegnerische Ränge zu geringen Kosten", "nl": "Je leert vijandelijke rangen tegen lage kosten"},
                {"en": "Scouts always win battles", "es": "Los Exploradores siempre ganan batallas", "de": "Aufklärer gewinnen immer Kämpfe", "nl": "Verkenners winnen altijd gevechten"},
                {"en": "Scouts cannot be defeated", "es": "Los Exploradores no pueden ser derrotados", "de": "Aufklärer können nicht besiegt werden", "nl": "Verkenners kunnen niet verslagen worden"},
                {"en": "There is no advantage", "es": "No hay ventaja", "de": "Es gibt keinen Vorteil", "nl": "Er is geen voordeel"}
            ],
            "correct": 0,
            "explanation": {
                "en": "Scouts are low-ranked and expendable. When they attack and lose, you learn the enemy piece's rank without losing a valuable piece.",
                "es": "Los Exploradores son de bajo rango y prescindibles. Al atacar y perder, aprendes el rango enemigo sin perder una pieza valiosa.",
                "de": "Aufklärer sind niedrig und entbehrlich. Beim Angriff erfährt man den gegnerischen Rang ohne eine wertvolle Figur zu verlieren.",
                "nl": "Verkenners zijn laag in rang en vervangbaar. Bij een aanval leer je de vijandelijke rang zonder een waardevol stuk te verliezen."
            }
        },
        {
            "question": {
                "en": "What should you do if you lose your Spy?",
                "es": "¿Qué hacer si pierdes tu Espía?",
                "de": "Was tun wenn man den Spion verliert?",
                "nl": "Wat doe je als je je Spion verliest?"
            },
            "options": [
                {"en": "Avoid the opponent's Marshal", "es": "Evitar el Mariscal del oponente", "de": "Den gegnerischen Marschall meiden", "nl": "De Maarschalk van de tegenstander vermijden"},
                {"en": "Give up immediately", "es": "Rendirse inmediatamente", "de": "Sofort aufgeben", "nl": "Onmiddellijk opgeven"},
                {"en": "Attack the Marshal with Bombs", "es": "Atacar al Mariscal con Bombas", "de": "Den Marschall mit Bomben angreifen", "nl": "De Maarschalk aanvallen met Bommen"},
                {"en": "It makes no difference", "es": "No hay diferencia", "de": "Es macht keinen Unterschied", "nl": "Het maakt geen verschil"}
            ],
            "correct": 0,
            "explanation": {
                "en": "Without your Spy, the opponent's Marshal is unstoppable. Avoid it and focus on finding the Flag through other tactics.",
                "es": "Sin tu Espía, el Mariscal del oponente es imparable. Evítalo y enfócate en encontrar la Bandera con otras tácticas.",
                "de": "Ohne Spion ist der gegnerische Marschall unaufhaltbar. Meidet ihn und konzentriert euch auf die Flaggensuche.",
                "nl": "Zonder je Spion is de vijandelijke Maarschalk onstopbaar. Vermijd hem en concentreer je op het vinden van de Vlag."
            }
        },
        {
            "question": {
                "en": "What is the benefit of a balanced setup?",
                "es": "¿Cuál es el beneficio de una preparación equilibrada?",
                "de": "Was ist der Vorteil einer ausgewogenen Aufstellung?",
                "nl": "Wat is het voordeel van een evenwichtige opstelling?"
            },
            "options": [
                {"en": "You can respond to threats on either side", "es": "Puedes responder a amenazas en cualquier lado", "de": "Man kann auf Bedrohungen beiderseits reagieren", "nl": "Je kunt op dreigingen aan beide kanten reageren"},
                {"en": "It looks better", "es": "Se ve mejor", "de": "Es sieht besser aus", "nl": "Het ziet er beter uit"},
                {"en": "The rules require balance", "es": "Las reglas requieren equilibrio", "de": "Die Regeln erfordern Gleichgewicht", "nl": "De regels vereisen balans"},
                {"en": "It confuses the opponent", "es": "Confunde al oponente", "de": "Es verwirrt den Gegner", "nl": "Het verwart de tegenstander"}
            ],
            "correct": 0,
            "explanation": {
                "en": "A balanced setup means having strong pieces on both sides of the board so you are not weak on one flank.",
                "es": "Una preparación equilibrada significa tener piezas fuertes en ambos lados del tablero para no ser débil en un flanco.",
                "de": "Eine ausgewogene Aufstellung bedeutet starke Figuren auf beiden Seiten zu haben um nirgends schwach zu sein.",
                "nl": "Een evenwichtige opstelling betekent sterke stukken aan beide kanten zodat je nergens zwak bent."
            }
        },
        {
            "question": {
                "en": "Why is the endgame different from the opening?",
                "es": "¿Por qué el final es diferente de la apertura?",
                "de": "Warum unterscheidet sich das Endspiel von der Eröffnung?",
                "nl": "Waarom is het eindspel anders dan de opening?"
            },
            "options": [
                {"en": "Most ranks are known and fewer pieces remain", "es": "La mayoría de rangos son conocidos y quedan menos piezas", "de": "Die meisten Ränge sind bekannt und weniger Figuren übrig", "nl": "De meeste rangen zijn bekend en er zijn minder stukken over"},
                {"en": "The rules change in the endgame", "es": "Las reglas cambian en el final", "de": "Die Regeln ändern sich im Endspiel", "nl": "De regels veranderen in het eindspel"},
                {"en": "Bombs are removed in the endgame", "es": "Las Bombas se retiran en el final", "de": "Bomben werden im Endspiel entfernt", "nl": "Bommen worden verwijderd in het eindspel"},
                {"en": "There is no difference", "es": "No hay diferencia", "de": "Es gibt keinen Unterschied", "nl": "Er is geen verschil"}
            ],
            "correct": 0,
            "explanation": {
                "en": "In the endgame, most ranks have been revealed through battles. With fewer pieces, each move becomes more critical.",
                "es": "En el final, la mayoría de rangos se han revelado en batallas. Con menos piezas, cada movimiento es más crítico.",
                "de": "Im Endspiel sind die meisten Ränge durch Kämpfe bekannt. Mit weniger Figuren wird jeder Zug wichtiger.",
                "nl": "In het eindspel zijn de meeste rangen onthuld door gevechten. Met minder stukken wordt elke zet belangrijker."
            }
        },
        {
            "question": {
                "en": "How can you tell if a piece might be the Flag?",
                "es": "¿Cómo saber si una pieza podría ser la Bandera?",
                "de": "Wie erkennt man ob eine Figur die Flagge sein könnte?",
                "nl": "Hoe kun je zien of een stuk de Vlag zou kunnen zijn?"
            },
            "options": [
                {"en": "It never moves and is surrounded by Bombs", "es": "Nunca se mueve y está rodeada de Bombas", "de": "Sie bewegt sich nie und ist von Bomben umgeben", "nl": "Het beweegt nooit en is omringd door Bommen"},
                {"en": "It glows a special color", "es": "Brilla de un color especial", "de": "Sie leuchtet in einer besonderen Farbe", "nl": "Het gloeit in een speciale kleur"},
                {"en": "It is always in the back corner", "es": "Siempre está en la esquina trasera", "de": "Sie steht immer in der hinteren Ecke", "nl": "Het staat altijd in de achterhoek"},
                {"en": "You cannot tell at all", "es": "No se puede saber", "de": "Man kann es nicht erkennen", "nl": "Je kunt het niet zien"}
            ],
            "correct": 0,
            "explanation": {
                "en": "The Flag never moves and is usually surrounded by Bombs. Look for a cluster of immovable pieces to find the likely Flag position.",
                "es": "La Bandera nunca se mueve y suele estar rodeada de Bombas. Busca un grupo de piezas inmóviles para encontrarla.",
                "de": "Die Flagge bewegt sich nie und ist meist von Bomben umgeben. Suche nach einer Gruppe unbeweglicher Figuren.",
                "nl": "De Vlag beweegt nooit en is meestal omringd door Bommen. Zoek naar een groep onbeweegbare stukken."
            }
        },
        {
            "question": {
                "en": "Can you place pieces on the lakes during setup?",
                "es": "¿Puedes colocar piezas en los lagos durante la preparación?",
                "de": "Kann man Figuren auf den Seen aufstellen?",
                "nl": "Kun je stukken op de meren plaatsen bij de opstelling?"
            },
            "options": [
                {"en": "No, lakes are always blocked", "es": "No, los lagos siempre están bloqueados", "de": "Nein, Seen sind immer blockiert", "nl": "Nee, meren zijn altijd geblokkeerd"},
                {"en": "Yes, any piece can be placed there", "es": "Sí, cualquier pieza puede colocarse ahí", "de": "Ja, jede Figur kann dort aufgestellt werden", "nl": "Ja, elk stuk kan daar geplaatst worden"},
                {"en": "Only Bombs can be placed there", "es": "Solo Bombas pueden colocarse ahí", "de": "Nur Bomben können dort platziert werden", "nl": "Alleen Bommen kunnen daar geplaatst worden"},
                {"en": "Only the Flag can be placed there", "es": "Solo la Bandera puede colocarse ahí", "de": "Nur die Flagge kann dort platziert werden", "nl": "Alleen de Vlag kan daar geplaatst worden"}
            ],
            "correct": 0,
            "explanation": {
                "en": "Lakes are impassable areas in the center of the board. No pieces can be placed on them or moved through them.",
                "es": "Los lagos son áreas infranqueables en el centro del tablero. No se pueden colocar ni mover piezas a través de ellos.",
                "de": "Seen sind unpassierbare Bereiche in der Brettmitte. Keine Figuren können dort platziert oder durchbewegt werden.",
                "nl": "Meren zijn onpasseerbare gebieden in het midden van het bord. Geen stukken kunnen daar geplaatst of doorheen bewogen worden."
            }
        },
        {
            "question": {
                "en": "Which piece should you use to test a suspected Bomb?",
                "es": "¿Qué pieza usar para probar una sospecha de Bomba?",
                "de": "Welche Figur zum Testen einer vermuteten Bombe nutzen?",
                "nl": "Welk stuk gebruik je om een vermoedelijke Bom te testen?"
            },
            "options": [
                {"en": "A Miner", "es": "Un Minero", "de": "Einen Mineur", "nl": "Een Mineur"},
                {"en": "The Marshal", "es": "El Mariscal", "de": "Den Marschall", "nl": "De Maarschalk"},
                {"en": "The Spy", "es": "El Espía", "de": "Den Spion", "nl": "De Spion"},
                {"en": "The General", "es": "El General", "de": "Den General", "nl": "De Generaal"}
            ],
            "correct": 0,
            "explanation": {
                "en": "Use a Miner to test suspected Bombs. If it is a Bomb, the Miner defuses it. If it is a piece, you only risk a rank 3 piece.",
                "es": "Usa un Minero para probar Bombas sospechosas. Si es una Bomba, el Minero la desactiva. Si es una pieza, solo arriesgas un rango 3.",
                "de": "Einen Mineur zum Testen verdächtiger Bomben nutzen. Ist es eine Bombe, wird sie entschärft. Ist es eine Figur, riskiert man nur Rang 3.",
                "nl": "Gebruik een Mineur om vermoedelijke Bommen te testen. Als het een Bom is, wordt het onschadelijk. Als het een stuk is, riskeer je slechts rang 3."
            }
        },
        {
            "question": {
                "en": "What is a good front row formation?",
                "es": "¿Qué es una buena formación de primera fila?",
                "de": "Was ist eine gute Formation für die vorderste Reihe?",
                "nl": "Wat is een goede formatie voor de voorste rij?"
            },
            "options": [
                {"en": "Mix of Scouts, Sergeants, and Miners", "es": "Mezcla de Exploradores, Sargentos y Mineros", "de": "Mischung aus Aufklärern, Feldwebeln und Mineuren", "nl": "Mix van Verkenners, Sergeants en Mineurs"},
                {"en": "All Bombs in the front", "es": "Todas las Bombas al frente", "de": "Alle Bomben vorne", "nl": "Alle Bommen vooraan"},
                {"en": "The Marshal and General", "es": "El Mariscal y el General", "de": "Marschall und General", "nl": "De Maarschalk en Generaal"},
                {"en": "All Scouts in a line", "es": "Todos los Exploradores en línea", "de": "Alle Aufklärer in einer Linie", "nl": "Alle Verkenners op een rij"}
            ],
            "correct": 0,
            "explanation": {
                "en": "A mix of expendable pieces in the front row gives you options. Scouts probe, Sergeants fight, and Miners handle any Bombs nearby.",
                "es": "Una mezcla de piezas prescindibles en la primera fila da opciones. Exploradores sondean, Sargentos luchan, Mineros manejan Bombas.",
                "de": "Eine Mischung entbehrlicher Figuren in der vorderen Reihe gibt Optionen. Aufklärer erkunden, Feldwebel kämpfen, Mineure entschärfen.",
                "nl": "Een mix van vervangbare stukken in de voorste rij geeft opties. Verkenners verkennen, Sergeants vechten, Mineurs ontmijnen."
            }
        },
        {
            "question": {
                "en": "What is a common sign that a piece is the Marshal?",
                "es": "¿Cuál es una señal común de que una pieza es el Mariscal?",
                "de": "Was ist ein typisches Zeichen für den Marschall?",
                "nl": "Wat is een veelvoorkomend teken dat een stuk de Maarschalk is?"
            },
            "options": [
                {"en": "It defeats every piece it attacks", "es": "Derrota a cada pieza que ataca", "de": "Sie besiegt jede angegriffene Figur", "nl": "Het verslaat elk stuk dat het aanvalt"},
                {"en": "It moves multiple squares", "es": "Se mueve varias casillas", "de": "Sie zieht mehrere Felder", "nl": "Het beweegt meerdere velden"},
                {"en": "It never attacks", "es": "Nunca ataca", "de": "Sie greift nie an", "nl": "Het valt nooit aan"},
                {"en": "It stays near the Flag", "es": "Se queda cerca de la Bandera", "de": "Sie bleibt nahe der Flagge", "nl": "Het blijft bij de Vlag"}
            ],
            "correct": 0,
            "explanation": {
                "en": "If a piece wins every battle it enters, it is likely the Marshal or General. Track wins to identify high-ranked enemy pieces.",
                "es": "Si una pieza gana cada batalla, probablemente es el Mariscal o General. Rastrear victorias identifica piezas de alto rango.",
                "de": "Wenn eine Figur jeden Kampf gewinnt, ist sie wahrscheinlich der Marschall oder General. Siege verfolgen hilft bei der Identifikation.",
                "nl": "Als een stuk elk gevecht wint, is het waarschijnlijk de Maarschalk of Generaal. Overwinningen bijhouden helpt bij identificatie."
            }
        },
        {
            "question": {
                "en": "What should you do when you find enemy Bombs?",
                "es": "¿Qué hacer cuando encuentras Bombas enemigas?",
                "de": "Was tun wenn man feindliche Bomben findet?",
                "nl": "Wat doe je als je vijandelijke Bommen vindt?"
            },
            "options": [
                {"en": "Send a Miner to defuse them", "es": "Enviar un Minero para desactivarlas", "de": "Einen Mineur zum Entschärfen schicken", "nl": "Een Mineur sturen om ze onschadelijk te maken"},
                {"en": "Attack them with the Marshal", "es": "Atacarlas con el Mariscal", "de": "Sie mit dem Marschall angreifen", "nl": "Ze aanvallen met de Maarschalk"},
                {"en": "Ignore them completely", "es": "Ignorarlas completamente", "de": "Sie komplett ignorieren", "nl": "Ze volledig negeren"},
                {"en": "Move your Flag away", "es": "Mover tu Bandera lejos", "de": "Die eigene Flagge wegbewegen", "nl": "Je Vlag verplaatsen"}
            ],
            "correct": 0,
            "explanation": {
                "en": "Only Miners can defuse Bombs. When you locate enemy Bombs, send a Miner to clear the path, especially if the Flag is likely behind them.",
                "es": "Solo los Mineros desactivan Bombas. Cuando localices Bombas, envía un Minero, especialmente si la Bandera está probablemente detrás.",
                "de": "Nur Mineure entschärfen Bomben. Wenn man feindliche Bomben findet, einen Mineur schicken, besonders wenn die Flagge dahinter sein könnte.",
                "nl": "Alleen Mineurs maken Bommen onschadelijk. Stuur een Mineur als je Bommen vindt, vooral als de Vlag er waarschijnlijk achter zit."
            }
        },
        {
            "question": {
                "en": "What is one way to confuse your opponent?",
                "es": "¿Cuál es una forma de confundir a tu oponente?",
                "de": "Wie kann man den Gegner verwirren?",
                "nl": "Hoe kun je je tegenstander in de war brengen?"
            },
            "options": [
                {"en": "Move weak pieces as if they are strong", "es": "Mover piezas débiles como si fueran fuertes", "de": "Schwache Figuren bewegen als wären sie stark", "nl": "Zwakke stukken bewegen alsof ze sterk zijn"},
                {"en": "Never move any pieces", "es": "Nunca mover ninguna pieza", "de": "Nie eine Figur bewegen", "nl": "Nooit stukken bewegen"},
                {"en": "Always attack with the Marshal", "es": "Siempre atacar con el Mariscal", "de": "Immer mit dem Marschall angreifen", "nl": "Altijd aanvallen met de Maarschalk"},
                {"en": "Place all Bombs in the front", "es": "Colocar todas las Bombas al frente", "de": "Alle Bomben vorne aufstellen", "nl": "Alle Bommen vooraan plaatsen"}
            ],
            "correct": 0,
            "explanation": {
                "en": "Moving weak pieces confidently makes the opponent think they are strong. This bluffing technique can cause them to waste strong pieces retreating.",
                "es": "Mover piezas débiles con confianza hace que el oponente piense que son fuertes, causando que desperdicie piezas al retirarse.",
                "de": "Schwache Figuren selbstbewusst bewegen lässt den Gegner glauben sie seien stark. So verschwendet er starke Figuren beim Rückzug.",
                "nl": "Zwakke stukken zelfverzekerd bewegen laat de tegenstander denken dat ze sterk zijn. Zo verspilt hij sterke stukken bij terugtrekking."
            }
        },
        {
            "question": {
                "en": "Why should you not waste your Marshal on low-ranked pieces?",
                "es": "¿Por qué no desperdiciar tu Mariscal en piezas de bajo rango?",
                "de": "Warum den Marschall nicht an niedrigrangige Figuren verschwenden?",
                "nl": "Waarom je Maarschalk niet verspillen aan lage stukken?"
            },
            "options": [
                {"en": "It reveals the Marshal's position to the Spy", "es": "Revela la posición del Mariscal al Espía", "de": "Es verrät die Position des Marschalls dem Spion", "nl": "Het onthult de positie van de Maarschalk aan de Spion"},
                {"en": "The Marshal cannot defeat low-ranked pieces", "es": "El Mariscal no puede derrotar piezas de bajo rango", "de": "Der Marschall kann niedrige Figuren nicht besiegen", "nl": "De Maarschalk kan lage stukken niet verslaan"},
                {"en": "Low-ranked pieces are immune to the Marshal", "es": "Las piezas de bajo rango son inmunes al Mariscal", "de": "Niedrige Figuren sind immun gegen den Marschall", "nl": "Lage stukken zijn immuun voor de Maarschalk"},
                {"en": "It makes no difference", "es": "No hay diferencia", "de": "Es macht keinen Unterschied", "nl": "Het maakt geen verschil"}
            ],
            "correct": 0,
            "explanation": {
                "en": "Using the Marshal against weak pieces reveals its position. The opponent can then target it with their Spy.",
                "es": "Usar el Mariscal contra piezas débiles revela su posición. El oponente puede entonces atacarlo con su Espía.",
                "de": "Den Marschall gegen schwache Figuren einzusetzen verrät seine Position. Der Gegner kann ihn dann mit dem Spion angreifen.",
                "nl": "De Maarschalk gebruiken tegen zwakke stukken onthult zijn positie. De tegenstander kan hem dan aanvallen met de Spion."
            }
        },
        {
            "question": {
                "en": "How many Flags does each player have?",
                "es": "¿Cuántas Banderas tiene cada jugador?",
                "de": "Wie viele Flaggen hat jeder Spieler?",
                "nl": "Hoeveel Vlaggen heeft elke speler?"
            },
            "options": [
                {"en": "1 Flag", "es": "1 Bandera", "de": "1 Flagge", "nl": "1 Vlag"},
                {"en": "2 Flags", "es": "2 Banderas", "de": "2 Flaggen", "nl": "2 Vlaggen"},
                {"en": "3 Flags", "es": "3 Banderas", "de": "3 Flaggen", "nl": "3 Vlaggen"},
                {"en": "No Flags", "es": "Sin Banderas", "de": "Keine Flaggen", "nl": "Geen Vlaggen"}
            ],
            "correct": 0,
            "explanation": {
                "en": "Each player has exactly 1 Flag. Capturing the opponent's Flag is the only way to win the game.",
                "es": "Cada jugador tiene exactamente 1 Bandera. Capturar la Bandera del oponente es la única forma de ganar.",
                "de": "Jeder Spieler hat genau 1 Flagge. Die gegnerische Flagge zu erobern ist der einzige Weg zu gewinnen.",
                "nl": "Elke speler heeft precies 1 Vlag. De Vlag van de tegenstander veroveren is de enige manier om te winnen."
            }
        },
        {
            "question": {
                "en": "What is the weakest movable piece in Stratego?",
                "es": "¿Cuál es la pieza móvil más débil en Stratego?",
                "de": "Was ist die schwächste bewegliche Figur bei Stratego?",
                "nl": "Wat is het zwakste beweegbare stuk in Stratego?"
            },
            "options": [
                {"en": "The Spy (rank 1)", "es": "El Espía (rango 1)", "de": "Der Spion (Rang 1)", "nl": "De Spion (rang 1)"},
                {"en": "The Scout (rank 2)", "es": "El Explorador (rango 2)", "de": "Der Aufklärer (Rang 2)", "nl": "De Verkenner (rang 2)"},
                {"en": "The Miner (rank 3)", "es": "El Minero (rango 3)", "de": "Der Mineur (Rang 3)", "nl": "De Mineur (rang 3)"},
                {"en": "The Sergeant (rank 4)", "es": "El Sargento (rango 4)", "de": "Der Feldwebel (Rang 4)", "nl": "De Sergeant (rang 4)"}
            ],
            "correct": 0,
            "explanation": {
                "en": "The Spy is the weakest movable piece at rank 1. It loses to every piece except when attacking the Marshal.",
                "es": "El Espía es la pieza móvil más débil con rango 1. Pierde contra todas excepto al atacar al Mariscal.",
                "de": "Der Spion ist mit Rang 1 die schwächste bewegliche Figur. Er verliert gegen alle außer beim Angriff auf den Marschall.",
                "nl": "De Spion is met rang 1 het zwakste beweegbare stuk. Het verliest van alle anderen behalve bij een aanval op de Maarschalk."
            }
        },
        {
            "question": {
                "en": "What is the strongest piece in Stratego?",
                "es": "¿Cuál es la pieza más fuerte en Stratego?",
                "de": "Was ist die stärkste Figur bei Stratego?",
                "nl": "Wat is het sterkste stuk in Stratego?"
            },
            "options": [
                {"en": "The Marshal (rank 10)", "es": "El Mariscal (rango 10)", "de": "Der Marschall (Rang 10)", "nl": "De Maarschalk (rang 10)"},
                {"en": "The General (rank 9)", "es": "El General (rango 9)", "de": "Der General (Rang 9)", "nl": "De Generaal (rang 9)"},
                {"en": "The Colonel (rank 8)", "es": "El Coronel (rango 8)", "de": "Der Oberst (Rang 8)", "nl": "De Kolonel (rang 8)"},
                {"en": "The Bomb", "es": "La Bomba", "de": "Die Bombe", "nl": "De Bom"}
            ],
            "correct": 0,
            "explanation": {
                "en": "The Marshal at rank 10 is the strongest piece. It defeats all other pieces in battle, but can be defeated by the Spy when the Spy attacks.",
                "es": "El Mariscal con rango 10 es la pieza más fuerte. Derrota a todas las demás, pero puede ser derrotado por el Espía al atacar.",
                "de": "Der Marschall mit Rang 10 ist die stärkste Figur. Er besiegt alle anderen, kann aber vom Spion beim Angriff besiegt werden.",
                "nl": "De Maarschalk met rang 10 is het sterkste stuk. Het verslaat alle anderen, maar kan verslagen worden door de Spion bij een aanval."
            }
        },
        {
            "question": {
                "en": "Why should you vary your Flag placement between games?",
                "es": "¿Por qué variar la posición de la Bandera entre juegos?",
                "de": "Warum die Flaggenposition zwischen Spielen variieren?",
                "nl": "Waarom de Vlagpositie variëren tussen spellen?"
            },
            "options": [
                {"en": "So your opponent cannot predict your setup", "es": "Para que tu oponente no prediga tu preparación", "de": "Damit der Gegner die Aufstellung nicht vorhersagen kann", "nl": "Zodat je tegenstander je opstelling niet kan voorspellen"},
                {"en": "The rules require it", "es": "Las reglas lo requieren", "de": "Die Regeln erfordern es", "nl": "De regels vereisen het"},
                {"en": "Some positions are forbidden", "es": "Algunas posiciones están prohibidas", "de": "Manche Positionen sind verboten", "nl": "Sommige posities zijn verboden"},
                {"en": "It does not matter", "es": "No importa", "de": "Es spielt keine Rolle", "nl": "Het maakt niet uit"}
            ],
            "correct": 0,
            "explanation": {
                "en": "If you always place the Flag in the same spot, repeat opponents will search there first. Varying placement keeps you unpredictable.",
                "es": "Si siempre colocas la Bandera en el mismo lugar, oponentes repetidos buscarán ahí primero. Variar te hace impredecible.",
                "de": "Stellt man die Flagge immer an denselben Ort, suchen wiederkehrende Gegner dort zuerst. Variation macht unberechenbar.",
                "nl": "Als je de Vlag altijd op dezelfde plek zet, zoeken terugkerende tegenstanders daar eerst. Variatie maakt je onvoorspelbaar."
            }
        },
        {
            "question": {
                "en": "What is a draw in Stratego?",
                "es": "¿Qué es un empate en Stratego?",
                "de": "Was ist ein Unentschieden bei Stratego?",
                "nl": "Wat is een gelijkspel in Stratego?"
            },
            "options": [
                {"en": "When neither player can capture the other's Flag", "es": "Cuando ningún jugador puede capturar la Bandera del otro", "de": "Wenn kein Spieler die Flagge des anderen erobern kann", "nl": "Als geen speler de Vlag van de ander kan veroveren"},
                {"en": "When both Flags are captured", "es": "Cuando ambas Banderas son capturadas", "de": "Wenn beide Flaggen erobert werden", "nl": "Als beide Vlaggen veroverd worden"},
                {"en": "Draws are not possible", "es": "Los empates no son posibles", "de": "Unentschieden sind nicht möglich", "nl": "Gelijkspel is niet mogelijk"},
                {"en": "After 50 moves", "es": "Después de 50 movimientos", "de": "Nach 50 Zügen", "nl": "Na 50 zetten"}
            ],
            "correct": 0,
            "explanation": {
                "en": "A draw occurs when neither player can reach the opponent's Flag, for example if both lost all Miners and the Flags are behind Bombs.",
                "es": "Un empate ocurre cuando ningún jugador puede llegar a la Bandera, por ejemplo si ambos perdieron todos los Mineros.",
                "de": "Ein Unentschieden tritt ein wenn kein Spieler die gegnerische Flagge erreichen kann, z.B. wenn beide alle Mineure verloren haben.",
                "nl": "Een gelijkspel treedt op als geen speler de Vlag kan bereiken, bijvoorbeeld als beide alle Mineurs verloren hebben."
            }
        }
    ]
};

