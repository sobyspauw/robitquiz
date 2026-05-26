// Trivial Pursuit - level2
// Total questions: 100

module.exports = {
    questions: [
        {
            "question": {
                "en": "Where do all players start the game?",
                "es": "¿Dónde empiezan todos los jugadores?",
                "de": "Wo beginnen alle Spieler?",
                "nl": "Waar beginnen alle spelers?"
            },
            "options": [
                {
                    "en": "In the central hub",
                    "es": "En el centro",
                    "de": "Im zentralen Feld",
                    "nl": "In het middelpunt"
                },
                {
                    "en": "On the outer ring",
                    "es": "En el anillo exterior",
                    "de": "Am äußeren Ring",
                    "nl": "Op de buitenring"
                },
                {
                    "en": "At a category HQ",
                    "es": "En una sede",
                    "de": "An einem Kategorie-HQ",
                    "nl": "Op een HQ"
                },
                {
                    "en": "Any space",
                    "es": "Cualquier casilla",
                    "de": "Einem beliebigen Feld",
                    "nl": "Elk vakje"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "All players start from the central hub in the middle of the board.",
                "es": "Todos los jugadores comienzan en el centro del tablero.",
                "de": "Alle Spieler starten im Zentrum des Bretts.",
                "nl": "Alle spelers beginnen in het midden van het bord."
            }
        },
        {
            "question": {
                "en": "Who rolls the die first?",
                "es": "¿Quién tira el dado primero?",
                "de": "Wer würfelt als Erster?",
                "nl": "Wie gooit als eerste?"
            },
            "options": [
                {
                    "en": "Usually the youngest",
                    "es": "Normalmente el más joven",
                    "de": "Meist der Jüngste",
                    "nl": "Meestal de jongste"
                },
                {
                    "en": "Always the oldest",
                    "es": "Siempre el mayor",
                    "de": "Immer der Älteste",
                    "nl": "Altijd de oudste"
                },
                {
                    "en": "A coin flip",
                    "es": "Con moneda",
                    "de": "Mit einer Münze",
                    "nl": "Met een munt"
                },
                {
                    "en": "The tallest",
                    "es": "El más alto",
                    "de": "Der Größte",
                    "nl": "De langste"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "House rules vary, but tradition is the youngest player rolls first.",
                "es": "Las reglas varían, pero la tradición es el más joven primero.",
                "de": "Hausregeln variieren, aber meist beginnt der Jüngste.",
                "nl": "Regels variëren, maar traditioneel gooit de jongste eerst."
            }
        },
        {
            "question": {
                "en": "What must you do after rolling the die?",
                "es": "¿Qué debes hacer tras tirar el dado?",
                "de": "Was muss man nach dem Würfeln tun?",
                "nl": "Wat moet je doen na het gooien?"
            },
            "options": [
                {
                    "en": "Move that many spaces",
                    "es": "Mover ese número de casillas",
                    "de": "Entsprechende Felder bewegen",
                    "nl": "Dat aantal vakken verplaatsen"
                },
                {
                    "en": "Skip",
                    "es": "Saltar",
                    "de": "Aussetzen",
                    "nl": "Slaan over"
                },
                {
                    "en": "Draw a card",
                    "es": "Robar una carta",
                    "de": "Karte ziehen",
                    "nl": "Kaart trekken"
                },
                {
                    "en": "Answer immediately",
                    "es": "Responder",
                    "de": "Sofort antworten",
                    "nl": "Meteen antwoorden"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "You must move exactly the number rolled along any allowed direction.",
                "es": "Debes moverte exactamente el número que saques.",
                "de": "Man muss genau die gewürfelte Zahl ziehen.",
                "nl": "Je verplaatst je precies het gegooide aantal vakken."
            }
        },
        {
            "question": {
                "en": "Can you move in different directions on a single roll?",
                "es": "¿Puedes cambiar de dirección en una tirada?",
                "de": "Darf man die Richtung während eines Zuges ändern?",
                "nl": "Mag je tijdens één beurt van richting veranderen?"
            },
            "options": [
                {
                    "en": "You can turn but not reverse",
                    "es": "Puedes girar pero no retroceder",
                    "de": "Ja, aber nicht zurück",
                    "nl": "Draaien mag, terug niet"
                },
                {
                    "en": "Never",
                    "es": "Nunca",
                    "de": "Nie",
                    "nl": "Nooit"
                },
                {
                    "en": "Always",
                    "es": "Siempre",
                    "de": "Immer",
                    "nl": "Altijd"
                },
                {
                    "en": "Only on 6",
                    "es": "Solo con 6",
                    "de": "Nur bei einer 6",
                    "nl": "Alleen bij 6"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "You may turn at intersections but not reverse during the same move.",
                "es": "Puedes girar en cruces pero no retroceder en el mismo movimiento.",
                "de": "Man darf an Kreuzungen abbiegen, aber nicht umkehren.",
                "nl": "Je mag bij kruisingen afslaan maar niet terug tijdens dezelfde beurt."
            }
        },
        {
            "question": {
                "en": "Who reads the question on the card?",
                "es": "¿Quién lee la pregunta?",
                "de": "Wer liest die Frage vor?",
                "nl": "Wie leest de vraag voor?"
            },
            "options": [
                {
                    "en": "Opponent on the left",
                    "es": "El oponente a la izquierda",
                    "de": "Der linke Gegner",
                    "nl": "De tegenstander links"
                },
                {
                    "en": "You yourself",
                    "es": "Tú mismo",
                    "de": "Du selbst",
                    "nl": "Jij zelf"
                },
                {
                    "en": "A judge",
                    "es": "Un juez",
                    "de": "Ein Richter",
                    "nl": "Een rechter"
                },
                {
                    "en": "Reader picks",
                    "es": "El lector elige",
                    "de": "Der Leser wählt",
                    "nl": "De lezer kiest"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "The player to your left typically draws and reads the card.",
                "es": "El jugador de tu izquierda lee la carta.",
                "de": "Der linke Spieler liest die Karte.",
                "nl": "De speler links leest de kaart voor."
            }
        },
        {
            "question": {
                "en": "Which category question do you answer?",
                "es": "¿Qué categoría respondes?",
                "de": "Welche Kategoriefrage beantwortet man?",
                "nl": "Welke categorievraag beantwoord je?"
            },
            "options": [
                {
                    "en": "Matches color of space",
                    "es": "Del color de la casilla",
                    "de": "Passend zur Feldfarbe",
                    "nl": "Die kleur van het vak"
                },
                {
                    "en": "Any you choose",
                    "es": "La que elijas",
                    "de": "Eine beliebige",
                    "nl": "Naar keuze"
                },
                {
                    "en": "Always History",
                    "es": "Siempre Historia",
                    "de": "Immer Geschichte",
                    "nl": "Altijd geschiedenis"
                },
                {
                    "en": "Random",
                    "es": "Aleatoria",
                    "de": "Zufällig",
                    "nl": "Willekeurig"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "The color of the space you land on dictates which category you answer.",
                "es": "El color de la casilla indica la categoría a responder.",
                "de": "Die Feldfarbe bestimmt die Kategorie.",
                "nl": "De kleur van het vak bepaalt de categorie."
            }
        },
        {
            "question": {
                "en": "What happens if you answer correctly on a normal space?",
                "es": "¿Qué pasa si aciertas en casilla normal?",
                "de": "Was passiert auf Normalfeld bei richtiger Antwort?",
                "nl": "Wat gebeurt er bij een juist antwoord op een normaal vak?"
            },
            "options": [
                {
                    "en": "You roll and go again",
                    "es": "Tiras y vuelves a mover",
                    "de": "Du würfelst und ziehst erneut",
                    "nl": "Je gooit en verplaatst opnieuw"
                },
                {
                    "en": "Nothing happens",
                    "es": "Nada",
                    "de": "Nichts",
                    "nl": "Niets"
                },
                {
                    "en": "You earn a wedge",
                    "es": "Ganas una cuña",
                    "de": "Du bekommst einen Keil",
                    "nl": "Je krijgt een taartpunt"
                },
                {
                    "en": "You move back",
                    "es": "Retrocedes",
                    "de": "Du gehst zurück",
                    "nl": "Je gaat terug"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "A correct answer lets you roll again and continue your turn.",
                "es": "Una respuesta correcta te permite tirar de nuevo.",
                "de": "Eine richtige Antwort erlaubt einen weiteren Wurf.",
                "nl": "Een juist antwoord geeft een nieuwe worp."
            }
        },
        {
            "question": {
                "en": "What happens after an incorrect answer?",
                "es": "¿Qué pasa tras una respuesta incorrecta?",
                "de": "Was passiert nach einer falschen Antwort?",
                "nl": "Wat gebeurt er na een fout antwoord?"
            },
            "options": [
                {
                    "en": "Your turn ends",
                    "es": "Termina tu turno",
                    "de": "Dein Zug endet",
                    "nl": "Je beurt eindigt"
                },
                {
                    "en": "You move back",
                    "es": "Retrocedes",
                    "de": "Du gehst zurück",
                    "nl": "Je gaat terug"
                },
                {
                    "en": "You pay a wedge",
                    "es": "Pierdes una cuña",
                    "de": "Du verlierst einen Keil",
                    "nl": "Je verliest een taartpunt"
                },
                {
                    "en": "Nothing",
                    "es": "Nada",
                    "de": "Nichts",
                    "nl": "Niets"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "An incorrect answer immediately ends your turn.",
                "es": "Una respuesta incorrecta termina tu turno.",
                "de": "Eine falsche Antwort beendet deinen Zug sofort.",
                "nl": "Een fout antwoord beëindigt meteen je beurt."
            }
        },
        {
            "question": {
                "en": "What do you earn at a category HQ?",
                "es": "¿Qué ganas en una sede?",
                "de": "Was bekommt man an einem Kategorie-HQ?",
                "nl": "Wat krijg je op een categorie-HQ?"
            },
            "options": [
                {
                    "en": "A colored wedge",
                    "es": "Una cuña de color",
                    "de": "Einen farbigen Keil",
                    "nl": "Een gekleurde taartpunt"
                },
                {
                    "en": "A card",
                    "es": "Una carta",
                    "de": "Eine Karte",
                    "nl": "Een kaart"
                },
                {
                    "en": "A bonus roll",
                    "es": "Una tirada extra",
                    "de": "Einen Bonuswurf",
                    "nl": "Een extra worp"
                },
                {
                    "en": "Nothing",
                    "es": "Nada",
                    "de": "Nichts",
                    "nl": "Niets"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Stopping at an HQ and answering correctly earns that category's wedge.",
                "es": "Parar en una sede y acertar da una cuña de esa categoría.",
                "de": "Auf einem HQ bei richtiger Antwort bekommt man einen Keil.",
                "nl": "Stoppen op een HQ met juist antwoord geeft een taartpunt."
            }
        },
        {
            "question": {
                "en": "Must you stop at an HQ?",
                "es": "¿Debes parar en una sede?",
                "de": "Muss man auf einem HQ anhalten?",
                "nl": "Moet je stoppen op een HQ?"
            },
            "options": [
                {
                    "en": "No, only if you want the wedge",
                    "es": "No, solo si quieres la cuña",
                    "de": "Nein, nur für den Keil",
                    "nl": "Nee, alleen voor de taartpunt"
                },
                {
                    "en": "Always",
                    "es": "Siempre",
                    "de": "Immer",
                    "nl": "Altijd"
                },
                {
                    "en": "Only with 6",
                    "es": "Solo con 6",
                    "de": "Nur mit 6",
                    "nl": "Alleen met 6"
                },
                {
                    "en": "Only once",
                    "es": "Solo una vez",
                    "de": "Nur einmal",
                    "nl": "Maar één keer"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "You only stop at an HQ if you want to try for that wedge.",
                "es": "Solo paras en una sede si quieres esa cuña.",
                "de": "Man hält nur an, wenn man den Keil will.",
                "nl": "Je stopt alleen als je de taartpunt wilt."
            }
        },
        {
            "question": {
                "en": "Can you revisit an HQ after earning its wedge?",
                "es": "¿Puedes volver a una sede tras ganar su cuña?",
                "de": "Darf man HQs nach dem Keilgewinn wiederbesuchen?",
                "nl": "Mag je terugkomen na het winnen van een taartpunt?"
            },
            "options": [
                {
                    "en": "Yes, but it does nothing",
                    "es": "Sí, pero no sirve",
                    "de": "Ja, aber ohne Effekt",
                    "nl": "Ja, maar zonder effect"
                },
                {
                    "en": "No, never",
                    "es": "No, nunca",
                    "de": "Nein, nie",
                    "nl": "Nee, nooit"
                },
                {
                    "en": "You lose it",
                    "es": "Pierdes la cuña",
                    "de": "Du verlierst ihn",
                    "nl": "Je verliest hem"
                },
                {
                    "en": "You get two",
                    "es": "Obtienes dos",
                    "de": "Du bekommst zwei",
                    "nl": "Je krijgt er twee"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Visiting an HQ twice does nothing since you already have that wedge.",
                "es": "Visitar dos veces una sede no sirve.",
                "de": "Ein zweiter Besuch ändert nichts.",
                "nl": "Een tweede bezoek doet niets."
            }
        },
        {
            "question": {
                "en": "How do you win Trivial Pursuit?",
                "es": "¿Cómo ganas Trivial Pursuit?",
                "de": "Wie gewinnt man Trivial Pursuit?",
                "nl": "Hoe win je Trivial Pursuit?"
            },
            "options": [
                {
                    "en": "Collect all wedges, return to hub, answer right",
                    "es": "Todas las cuñas, volver al centro, acertar",
                    "de": "Alle Keile sammeln und im Zentrum richtig antworten",
                    "nl": "Alle taartpunten, terug naar midden, juist antwoorden"
                },
                {
                    "en": "Collect five wedges",
                    "es": "Cinco cuñas",
                    "de": "Fünf Keile",
                    "nl": "Vijf taartpunten"
                },
                {
                    "en": "Just reach the hub",
                    "es": "Solo llegar al centro",
                    "de": "Nur ins Zentrum",
                    "nl": "Alleen het midden bereiken"
                },
                {
                    "en": "Roll all sixes",
                    "es": "Sacar todos 6",
                    "de": "Alle 6er würfeln",
                    "nl": "Allemaal 6'en"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Win by collecting all six wedges, reaching the hub, and answering correctly.",
                "es": "Gana reuniendo las seis cuñas, volviendo al centro y acertando.",
                "de": "Gewinne durch alle Keile, Rückkehr ins Zentrum und richtige Antwort.",
                "nl": "Win met alle zes taartpunten en juiste eindvraag in het midden."
            }
        },
        {
            "question": {
                "en": "Who chooses your final hub question category?",
                "es": "¿Quién elige la categoría final del centro?",
                "de": "Wer wählt die Endkategorie im Zentrum?",
                "nl": "Wie kiest de eindcategorie in het midden?"
            },
            "options": [
                {
                    "en": "The other players",
                    "es": "Los demás jugadores",
                    "de": "Die anderen Spieler",
                    "nl": "De andere spelers"
                },
                {
                    "en": "You",
                    "es": "Tú",
                    "de": "Du selbst",
                    "nl": "Jij"
                },
                {
                    "en": "Die roll",
                    "es": "Tirada de dado",
                    "de": "Würfelwurf",
                    "nl": "Dobbelworp"
                },
                {
                    "en": "The reader",
                    "es": "El lector",
                    "de": "Der Leser",
                    "nl": "De lezer"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Your opponents jointly pick which category you must answer to win.",
                "es": "Los oponentes eligen la categoría final.",
                "de": "Gegner wählen die Endkategorie gemeinsam.",
                "nl": "Tegenstanders kiezen samen de eindcategorie."
            }
        },
        {
            "question": {
                "en": "What if you get the final hub question wrong?",
                "es": "¿Qué pasa si fallas la pregunta final?",
                "de": "Was passiert bei falscher Endfrage?",
                "nl": "Wat als je de eindvraag mist?"
            },
            "options": [
                {
                    "en": "Leave hub and try again next turn",
                    "es": "Sales del centro y vuelves a intentar",
                    "de": "Verlasse Zentrum und versuch es erneut",
                    "nl": "Verlaat midden en probeer opnieuw"
                },
                {
                    "en": "You lose",
                    "es": "Pierdes",
                    "de": "Du verlierst",
                    "nl": "Je verliest"
                },
                {
                    "en": "Game ends",
                    "es": "La partida termina",
                    "de": "Spiel endet",
                    "nl": "Spel eindigt"
                },
                {
                    "en": "You restart",
                    "es": "Reinicias",
                    "de": "Neustart",
                    "nl": "Opnieuw beginnen"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "You must leave the hub and return to try again next turn.",
                "es": "Debes salir del centro e intentar de nuevo el próximo turno.",
                "de": "Man verlässt das Zentrum und versucht es im nächsten Zug.",
                "nl": "Verlaat het midden en probeer volgende beurt opnieuw."
            }
        },
        {
            "question": {
                "en": "How many wedges of the same color can you have?",
                "es": "¿Cuántas cuñas del mismo color puedes tener?",
                "de": "Wie viele Keile derselben Farbe darf man haben?",
                "nl": "Hoeveel taartpunten van dezelfde kleur mag je hebben?"
            },
            "options": [
                {
                    "en": "Only one",
                    "es": "Solo una",
                    "de": "Nur einen",
                    "nl": "Slechts één"
                },
                {
                    "en": "Two",
                    "es": "Dos",
                    "de": "Zwei",
                    "nl": "Twee"
                },
                {
                    "en": "Six",
                    "es": "Seis",
                    "de": "Sechs",
                    "nl": "Zes"
                },
                {
                    "en": "Unlimited",
                    "es": "Ilimitado",
                    "de": "Unbegrenzt",
                    "nl": "Onbeperkt"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "You can only hold one wedge of each color, six total.",
                "es": "Solo una cuña por color, seis en total.",
                "de": "Pro Farbe nur einen Keil, insgesamt sechs.",
                "nl": "Slechts één taartpunt per kleur, zes in totaal."
            }
        },
        {
            "question": {
                "en": "Do you have to roll the exact number to stop at HQ?",
                "es": "¿Debes sacar el número exacto para parar en la sede?",
                "de": "Muss man die genaue Zahl würfeln, um am HQ zu halten?",
                "nl": "Moet je het precieze aantal gooien om te stoppen op HQ?"
            },
            "options": [
                {
                    "en": "You stop wherever your roll lands",
                    "es": "Paras donde caiga tu tirada",
                    "de": "Du hältst dort, wo du landest",
                    "nl": "Je stopt waar de worp je brengt"
                },
                {
                    "en": "Yes, exact number",
                    "es": "Sí, número exacto",
                    "de": "Ja, exakte Zahl",
                    "nl": "Ja, exact aantal"
                },
                {
                    "en": "Yes, equal or greater",
                    "es": "Igual o mayor",
                    "de": "Gleich oder höher",
                    "nl": "Gelijk of hoger"
                },
                {
                    "en": "Only ones",
                    "es": "Solo unos",
                    "de": "Nur 1er",
                    "nl": "Alleen enen"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "You can only stop at the square your die roll lands you on exactly.",
                "es": "Paras en la casilla exacta donde cae el dado.",
                "de": "Man hält genau dort, wo der Wurf endet.",
                "nl": "Je stopt op het vak waar je worp eindigt."
            }
        },
        {
            "question": {
                "en": "What happens if you land on the hub during normal play?",
                "es": "¿Qué pasa si caes en el centro durante el juego normal?",
                "de": "Was passiert im Zentrum im normalen Spiel?",
                "nl": "Wat gebeurt er als je in het midden komt tijdens normaal spel?"
            },
            "options": [
                {
                    "en": "You roll again (free turn)",
                    "es": "Tiras de nuevo",
                    "de": "Du würfelst nochmal",
                    "nl": "Je gooit opnieuw"
                },
                {
                    "en": "You win",
                    "es": "Ganas",
                    "de": "Du gewinnst",
                    "nl": "Je wint"
                },
                {
                    "en": "You lose",
                    "es": "Pierdes",
                    "de": "Du verlierst",
                    "nl": "Je verliest"
                },
                {
                    "en": "Nothing",
                    "es": "Nada",
                    "de": "Nichts",
                    "nl": "Niets"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "The hub acts as a 'roll again' space outside of final-answer attempts.",
                "es": "El centro permite tirar de nuevo fuera del intento final.",
                "de": "Das Zentrum erlaubt einen erneuten Wurf.",
                "nl": "Het midden geeft een extra worp buiten de eindvraag."
            }
        },
        {
            "question": {
                "en": "How many questions does each card have?",
                "es": "¿Cuántas preguntas hay en cada carta?",
                "de": "Wie viele Fragen hat jede Karte?",
                "nl": "Hoeveel vragen staan op elke kaart?"
            },
            "options": [
                {
                    "en": "Six",
                    "es": "Seis",
                    "de": "Sechs",
                    "nl": "Zes"
                },
                {
                    "en": "Four",
                    "es": "Cuatro",
                    "de": "Vier",
                    "nl": "Vier"
                },
                {
                    "en": "Twelve",
                    "es": "Doce",
                    "de": "Zwölf",
                    "nl": "Twaalf"
                },
                {
                    "en": "Three",
                    "es": "Tres",
                    "de": "Drei",
                    "nl": "Drie"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Each card has one question per category, totaling six.",
                "es": "Cada carta tiene seis preguntas, una por categoría.",
                "de": "Jede Karte hat sechs Fragen.",
                "nl": "Elke kaart heeft zes vragen."
            }
        },
        {
            "question": {
                "en": "Does the reader see the answer before reading the question?",
                "es": "¿El lector ve la respuesta antes?",
                "de": "Sieht der Leser die Antwort vorher?",
                "nl": "Ziet de lezer het antwoord eerst?"
            },
            "options": [
                {
                    "en": "Yes, to verify",
                    "es": "Sí, para verificar",
                    "de": "Ja, zur Prüfung",
                    "nl": "Ja, ter controle"
                },
                {
                    "en": "No, never",
                    "es": "No",
                    "de": "Nein",
                    "nl": "Nee"
                },
                {
                    "en": "Only if asked",
                    "es": "Solo si se pregunta",
                    "de": "Nur auf Wunsch",
                    "nl": "Alleen indien gevraagd"
                },
                {
                    "en": "Depends",
                    "es": "Depende",
                    "de": "Kommt darauf an",
                    "nl": "Hangt ervan af"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "The reader sees the correct answer on the card to verify responses.",
                "es": "El lector ve la respuesta para verificar.",
                "de": "Der Leser sieht die Antwort zur Prüfung.",
                "nl": "De lezer ziet het antwoord om te controleren."
            }
        },
        {
            "question": {
                "en": "Can the reader give hints?",
                "es": "¿Puede el lector dar pistas?",
                "de": "Darf der Leser Hinweise geben?",
                "nl": "Mag de lezer hints geven?"
            },
            "options": [
                {
                    "en": "No, hints are not allowed",
                    "es": "No, no se permiten",
                    "de": "Nein, keine Hinweise",
                    "nl": "Nee, geen hints"
                },
                {
                    "en": "Yes, always",
                    "es": "Sí",
                    "de": "Ja",
                    "nl": "Ja"
                },
                {
                    "en": "Yes, for points",
                    "es": "Por puntos",
                    "de": "Gegen Punkte",
                    "nl": "Voor punten"
                },
                {
                    "en": "Only once",
                    "es": "Solo una vez",
                    "de": "Nur einmal",
                    "nl": "Eén keer"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Hints are typically not allowed to keep the game fair.",
                "es": "Normalmente no se dan pistas.",
                "de": "Hinweise sind in der Regel nicht erlaubt.",
                "nl": "Hints zijn meestal niet toegestaan."
            }
        },
        {
            "question": {
                "en": "How do team play work in Trivial Pursuit?",
                "es": "¿Cómo funciona el juego en equipos?",
                "de": "Wie funktioniert Teamspiel?",
                "nl": "Hoe werkt teamspel?"
            },
            "options": [
                {
                    "en": "Teams share a token and discuss",
                    "es": "Equipos comparten ficha y discuten",
                    "de": "Teams teilen einen Stein und beraten",
                    "nl": "Teams delen pion en overleggen"
                },
                {
                    "en": "Each player has their own",
                    "es": "Cada uno propia",
                    "de": "Jeder eigen",
                    "nl": "Ieder eigen"
                },
                {
                    "en": "No teams allowed",
                    "es": "No se permiten",
                    "de": "Keine Teams",
                    "nl": "Geen teams"
                },
                {
                    "en": "Rotating",
                    "es": "Rotativos",
                    "de": "Wechselnd",
                    "nl": "Roterend"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Team members share one piece and discuss answers together.",
                "es": "Los miembros comparten una ficha y discuten las respuestas.",
                "de": "Teammitglieder teilen einen Stein und beraten.",
                "nl": "Teamleden delen één pion en overleggen."
            }
        },
        {
            "question": {
                "en": "Can you change your answer after giving it?",
                "es": "¿Puedes cambiar tu respuesta?",
                "de": "Darf man seine Antwort ändern?",
                "nl": "Mag je je antwoord wijzigen?"
            },
            "options": [
                {
                    "en": "No, first answer counts",
                    "es": "No, cuenta la primera",
                    "de": "Nein, die erste zählt",
                    "nl": "Nee, eerste telt"
                },
                {
                    "en": "Yes always",
                    "es": "Sí siempre",
                    "de": "Ja immer",
                    "nl": "Ja altijd"
                },
                {
                    "en": "Only within 5s",
                    "es": "Dentro de 5s",
                    "de": "Innerhalb 5s",
                    "nl": "Binnen 5s"
                },
                {
                    "en": "Only once",
                    "es": "Solo una vez",
                    "de": "Nur einmal",
                    "nl": "Eén keer"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Once you commit to an answer, you cannot change it.",
                "es": "Una vez dada, no puedes cambiarla.",
                "de": "Einmal gegeben, kann man die Antwort nicht ändern.",
                "nl": "Eenmaal gegeven, mag je niet wijzigen."
            }
        },
        {
            "question": {
                "en": "How many dice are rolled at a time?",
                "es": "¿Cuántos dados se tiran a la vez?",
                "de": "Wie viele Würfel wirft man?",
                "nl": "Hoeveel dobbelstenen worden gegooid?"
            },
            "options": [
                {
                    "en": "One",
                    "es": "Uno",
                    "de": "Einen",
                    "nl": "Eén"
                },
                {
                    "en": "Two",
                    "es": "Dos",
                    "de": "Zwei",
                    "nl": "Twee"
                },
                {
                    "en": "Three",
                    "es": "Tres",
                    "de": "Drei",
                    "nl": "Drie"
                },
                {
                    "en": "Six",
                    "es": "Seis",
                    "de": "Sechs",
                    "nl": "Zes"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Only one die is rolled per turn in Trivial Pursuit.",
                "es": "Solo se tira un dado por turno.",
                "de": "Pro Zug wird nur ein Würfel geworfen.",
                "nl": "Slechts één dobbelsteen per beurt."
            }
        },
        {
            "question": {
                "en": "Where are wedges stored on your token?",
                "es": "¿Dónde se guardan las cuñas en la ficha?",
                "de": "Wo werden Keile im Spielstein gelagert?",
                "nl": "Waar komen taartpunten op je pion?"
            },
            "options": [
                {
                    "en": "They slot into the round piece",
                    "es": "Encajan en la ficha redonda",
                    "de": "Sie werden in den runden Stein gesteckt",
                    "nl": "Ze passen in de ronde pion"
                },
                {
                    "en": "In a bag",
                    "es": "En bolsa",
                    "de": "In einer Tasche",
                    "nl": "In een zakje"
                },
                {
                    "en": "On the board",
                    "es": "En el tablero",
                    "de": "Auf dem Brett",
                    "nl": "Op het bord"
                },
                {
                    "en": "On cards",
                    "es": "En cartas",
                    "de": "Auf Karten",
                    "nl": "Op kaarten"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Wedges slot into slots on your circular token.",
                "es": "Las cuñas encajan en tu ficha circular.",
                "de": "Keile werden in Ihren runden Stein eingesetzt.",
                "nl": "Taartpunten passen in je ronde pion."
            }
        },
        {
            "question": {
                "en": "What does landing on a 'Roll Again' space do?",
                "es": "¿Qué hace una casilla 'Tira de Nuevo'?",
                "de": "Was macht ein 'Nochmal Würfeln'-Feld?",
                "nl": "Wat doet een 'opnieuw gooien' vak?"
            },
            "options": [
                {
                    "en": "Grants another die roll",
                    "es": "Otro tiro de dado",
                    "de": "Einen weiteren Wurf",
                    "nl": "Een extra worp"
                },
                {
                    "en": "Ends turn",
                    "es": "Termina turno",
                    "de": "Beendet Zug",
                    "nl": "Beëindigt beurt"
                },
                {
                    "en": "Wins wedge",
                    "es": "Gana cuña",
                    "de": "Gibt Keil",
                    "nl": "Geeft taartpunt"
                },
                {
                    "en": "Nothing",
                    "es": "Nada",
                    "de": "Nichts",
                    "nl": "Niets"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "The hub acts as a 'roll again' space, granting an extra roll without a question.",
                "es": "El centro es una casilla de 'tira de nuevo' sin pregunta.",
                "de": "Das Zentrum erlaubt einen weiteren Wurf ohne Frage.",
                "nl": "Het midden werkt als 'opnieuw gooien' zonder vraag."
            }
        },
        {
            "question": {
                "en": "If two players are in the same space, what happens?",
                "es": "¿Qué pasa si dos jugadores están en la misma casilla?",
                "de": "Was passiert, wenn zwei Spieler auf einem Feld sind?",
                "nl": "Wat gebeurt er als twee spelers op één vak staan?"
            },
            "options": [
                {
                    "en": "Both coexist fine",
                    "es": "Ambos conviven",
                    "de": "Beide stehen gemeinsam",
                    "nl": "Beide blijven"
                },
                {
                    "en": "One must move",
                    "es": "Uno se mueve",
                    "de": "Einer muss weichen",
                    "nl": "Een moet weg"
                },
                {
                    "en": "Battle",
                    "es": "Lucha",
                    "de": "Kampf",
                    "nl": "Gevecht"
                },
                {
                    "en": "Skipping",
                    "es": "Saltar",
                    "de": "Aussetzen",
                    "nl": "Overslaan"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Multiple tokens can share a space without affecting each other.",
                "es": "Las fichas pueden compartir casilla sin problema.",
                "de": "Mehrere Steine können ein Feld teilen.",
                "nl": "Meerdere pionnen kunnen een vak delen."
            }
        },
        {
            "question": {
                "en": "Do rolls carry over unused spaces?",
                "es": "¿Se conservan casillas no usadas?",
                "de": "Werden ungenutzte Felder übertragen?",
                "nl": "Blijven ongebruikte vakken over?"
            },
            "options": [
                {
                    "en": "No, use all spaces now",
                    "es": "No, se usan todas",
                    "de": "Nein, alle Felder sofort",
                    "nl": "Nee, alles nu gebruiken"
                },
                {
                    "en": "Yes",
                    "es": "Sí",
                    "de": "Ja",
                    "nl": "Ja"
                },
                {
                    "en": "Half",
                    "es": "La mitad",
                    "de": "Die Hälfte",
                    "nl": "De helft"
                },
                {
                    "en": "Only 1",
                    "es": "Solo 1",
                    "de": "Nur 1",
                    "nl": "Alleen 1"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "You must move exactly the number rolled, no carryover.",
                "es": "Debes moverte exactamente lo que saques, sin sobras.",
                "de": "Man muss die gewürfelte Zahl komplett nutzen.",
                "nl": "Je moet het exacte aantal gooien gebruiken."
            }
        },
        {
            "question": {
                "en": "What if the card pile runs out?",
                "es": "¿Qué pasa si se acaba el mazo?",
                "de": "Was, wenn der Kartenstapel leer ist?",
                "nl": "Wat als de kaartenstapel op is?"
            },
            "options": [
                {
                    "en": "Reshuffle used cards",
                    "es": "Barajar las usadas",
                    "de": "Benutzte Karten mischen",
                    "nl": "Gebruikte kaarten schudden"
                },
                {
                    "en": "Game ends",
                    "es": "Partida termina",
                    "de": "Spiel endet",
                    "nl": "Spel eindigt"
                },
                {
                    "en": "Skip turns",
                    "es": "Saltar turnos",
                    "de": "Züge überspringen",
                    "nl": "Beurten overslaan"
                },
                {
                    "en": "Use another set",
                    "es": "Usar otro set",
                    "de": "Anderes Set nutzen",
                    "nl": "Ander set"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Used cards are reshuffled and placed back to form a new pile.",
                "es": "Las cartas usadas se barajan y se vuelven a usar.",
                "de": "Benutzte Karten werden gemischt und neu verwendet.",
                "nl": "Gebruikte kaarten worden geschud en opnieuw gebruikt."
            }
        },
        {
            "question": {
                "en": "Are category questions fixed in order?",
                "es": "¿El orden de categorías es fijo?",
                "de": "Ist die Kategoriereihenfolge fest?",
                "nl": "Is de volgorde van categorieën vast?"
            },
            "options": [
                {
                    "en": "Yes, each card has same layout",
                    "es": "Sí, misma disposición",
                    "de": "Ja, gleiche Reihenfolge",
                    "nl": "Ja, zelfde volgorde"
                },
                {
                    "en": "No, randomized",
                    "es": "No, aleatoria",
                    "de": "Nein, zufällig",
                    "nl": "Nee, willekeurig"
                },
                {
                    "en": "Only L1",
                    "es": "Solo L1",
                    "de": "Nur L1",
                    "nl": "Alleen L1"
                },
                {
                    "en": "Depends on edition",
                    "es": "Depende",
                    "de": "Je nach Ausgabe",
                    "nl": "Afhankelijk van editie"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Each card has the same fixed category order printed on it.",
                "es": "Cada carta tiene el mismo orden de categorías.",
                "de": "Jede Karte hat die gleiche Kategoriereihenfolge.",
                "nl": "Elke kaart heeft dezelfde categorievolgorde."
            }
        },
        {
            "question": {
                "en": "What if an answer on the card is wrong or outdated?",
                "es": "¿Y si la respuesta está mal u obsoleta?",
                "de": "Was, wenn die Antwort falsch/veraltet ist?",
                "nl": "Wat als een antwoord fout of verouderd is?"
            },
            "options": [
                {
                    "en": "Players discuss and agree",
                    "es": "Los jugadores discuten",
                    "de": "Spieler einigen sich",
                    "nl": "Spelers overleggen"
                },
                {
                    "en": "Card is always right",
                    "es": "La carta siempre tiene razón",
                    "de": "Karte ist immer richtig",
                    "nl": "Kaart altijd goed"
                },
                {
                    "en": "Skip question",
                    "es": "Saltar pregunta",
                    "de": "Frage überspringen",
                    "nl": "Vraag overslaan"
                },
                {
                    "en": "Lose turn",
                    "es": "Pierdes turno",
                    "de": "Verlieren",
                    "nl": "Beurt verliezen"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "House rules allow players to discuss and rule on disputed answers.",
                "es": "Las reglas caseras permiten discutir respuestas disputadas.",
                "de": "Hausregeln erlauben Diskussionen bei Streit.",
                "nl": "Huisregels staan discussie bij geschillen toe."
            }
        },
        {
            "question": {
                "en": "What is a typical house rule?",
                "es": "¿Cuál es una regla casera típica?",
                "de": "Was ist eine typische Hausregel?",
                "nl": "Wat is een typische huisregel?"
            },
            "options": [
                {
                    "en": "Time limits per question",
                    "es": "Límite de tiempo por pregunta",
                    "de": "Zeitlimit pro Frage",
                    "nl": "Tijdslimiet per vraag"
                },
                {
                    "en": "Two boards",
                    "es": "Dos tableros",
                    "de": "Zwei Bretter",
                    "nl": "Twee borden"
                },
                {
                    "en": "No dice",
                    "es": "Sin dados",
                    "de": "Keine Würfel",
                    "nl": "Geen dobbelsteen"
                },
                {
                    "en": "Draw twice",
                    "es": "Tomar dos cartas",
                    "de": "Zweimal ziehen",
                    "nl": "Twee kaarten trekken"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "A common house rule is imposing a time limit to answer.",
                "es": "Una regla común es poner tiempo por pregunta.",
                "de": "Eine beliebte Hausregel ist ein Zeitlimit.",
                "nl": "Een veelgebruikte huisregel is tijdslimiet."
            }
        },
        {
            "question": {
                "en": "Does Trivial Pursuit have a tie-breaker rule?",
                "es": "¿Hay regla de desempate?",
                "de": "Gibt es eine Entscheidungsregel?",
                "nl": "Is er een beslissingsregel?"
            },
            "options": [
                {
                    "en": "Not officially",
                    "es": "No oficialmente",
                    "de": "Nicht offiziell",
                    "nl": "Niet officieel"
                },
                {
                    "en": "Yes, a bonus round",
                    "es": "Sí, ronda extra",
                    "de": "Ja, Bonusrunde",
                    "nl": "Ja, bonusronde"
                },
                {
                    "en": "Coin flip",
                    "es": "Moneda",
                    "de": "Münzwurf",
                    "nl": "Munt"
                },
                {
                    "en": "Die roll",
                    "es": "Tirada",
                    "de": "Würfelwurf",
                    "nl": "Dobbelworp"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "No official tie-breaker; first player to win at the hub wins outright.",
                "es": "No hay oficial; gana el primero en acertar en el centro.",
                "de": "Kein offizieller; der erste im Zentrum gewinnt.",
                "nl": "Geen officiële; eerste juiste antwoord in midden wint."
            }
        },
        {
            "question": {
                "en": "What is the typical turn order?",
                "es": "¿Cuál es el orden de turnos típico?",
                "de": "Wie ist die Zugreihenfolge?",
                "nl": "Wat is de beurtvolgorde?"
            },
            "options": [
                {
                    "en": "Clockwise",
                    "es": "En sentido horario",
                    "de": "Im Uhrzeigersinn",
                    "nl": "Met de klok mee"
                },
                {
                    "en": "Counterclockwise",
                    "es": "Antihorario",
                    "de": "Gegen den Uhrzeigersinn",
                    "nl": "Tegen de klok in"
                },
                {
                    "en": "Random",
                    "es": "Aleatorio",
                    "de": "Zufällig",
                    "nl": "Willekeurig"
                },
                {
                    "en": "By age",
                    "es": "Por edad",
                    "de": "Nach Alter",
                    "nl": "Op leeftijd"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Turn order proceeds clockwise around the table.",
                "es": "El turno avanza en sentido horario.",
                "de": "Die Zugfolge verläuft im Uhrzeigersinn.",
                "nl": "De beurt gaat met de klok mee."
            }
        },
        {
            "question": {
                "en": "Is it allowed to discuss answers in teams?",
                "es": "¿Se permite discutir en equipos?",
                "de": "Darf man im Team diskutieren?",
                "nl": "Mag je in teams overleggen?"
            },
            "options": [
                {
                    "en": "Yes, teams discuss",
                    "es": "Sí",
                    "de": "Ja",
                    "nl": "Ja"
                },
                {
                    "en": "No, silence",
                    "es": "No, silencio",
                    "de": "Nein",
                    "nl": "Nee"
                },
                {
                    "en": "Only briefly",
                    "es": "Solo brevemente",
                    "de": "Nur kurz",
                    "nl": "Kort"
                },
                {
                    "en": "Whispers only",
                    "es": "Solo susurros",
                    "de": "Nur flüstern",
                    "nl": "Fluisteren"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Team members can freely discuss before giving a final answer.",
                "es": "Los equipos pueden discutir antes de responder.",
                "de": "Teammitglieder dürfen diskutieren.",
                "nl": "Teamleden mogen overleggen."
            }
        },
        {
            "question": {
                "en": "What if opponents disagree on correctness?",
                "es": "¿Y si los oponentes discrepan?",
                "de": "Wenn Gegner uneinig sind?",
                "nl": "Wat als tegenstanders het oneens zijn?"
            },
            "options": [
                {
                    "en": "Majority rules or use card",
                    "es": "Mayoría o carta",
                    "de": "Mehrheit oder Karte",
                    "nl": "Meerderheid of kaart"
                },
                {
                    "en": "Game stops",
                    "es": "Se detiene",
                    "de": "Spiel stoppt",
                    "nl": "Spel stopt"
                },
                {
                    "en": "Reader decides alone",
                    "es": "Lector decide",
                    "de": "Leser entscheidet",
                    "nl": "Lezer beslist"
                },
                {
                    "en": "Skip",
                    "es": "Saltar",
                    "de": "Überspringen",
                    "nl": "Overslaan"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Typically the card's printed answer decides, or a majority vote.",
                "es": "Normalmente decide la carta o la mayoría.",
                "de": "Meist entscheidet die Karte oder die Mehrheit.",
                "nl": "Meestal beslist de kaart of meerderheid."
            }
        },
        {
            "question": {
                "en": "Must you always answer from memory?",
                "es": "¿Debes responder siempre de memoria?",
                "de": "Muss man aus dem Gedächtnis antworten?",
                "nl": "Moet je altijd uit je hoofd antwoorden?"
            },
            "options": [
                {
                    "en": "Yes, no lookups",
                    "es": "Sí, sin buscar",
                    "de": "Ja, keine Recherche",
                    "nl": "Ja, geen opzoeken"
                },
                {
                    "en": "You can search",
                    "es": "Se puede buscar",
                    "de": "Suchen erlaubt",
                    "nl": "Zoeken mag"
                },
                {
                    "en": "Teamwork only",
                    "es": "Solo en equipo",
                    "de": "Nur im Team",
                    "nl": "Alleen in team"
                },
                {
                    "en": "Optional",
                    "es": "Opcional",
                    "de": "Optional",
                    "nl": "Optioneel"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Players must answer from memory; looking up is forbidden.",
                "es": "Los jugadores deben responder de memoria.",
                "de": "Spieler müssen aus dem Gedächtnis antworten.",
                "nl": "Spelers moeten uit het hoofd antwoorden."
            }
        },
        {
            "question": {
                "en": "Can you skip a question you don't know?",
                "es": "¿Puedes saltar una pregunta?",
                "de": "Darf man Fragen überspringen?",
                "nl": "Mag je vragen overslaan?"
            },
            "options": [
                {
                    "en": "No, you must attempt",
                    "es": "No, debes intentar",
                    "de": "Nein, man muss versuchen",
                    "nl": "Nee, je moet proberen"
                },
                {
                    "en": "Yes always",
                    "es": "Sí",
                    "de": "Ja",
                    "nl": "Ja"
                },
                {
                    "en": "Only once per game",
                    "es": "Solo una vez",
                    "de": "Nur einmal",
                    "nl": "Eén keer per spel"
                },
                {
                    "en": "Only at HQ",
                    "es": "Solo en HQ",
                    "de": "Nur am HQ",
                    "nl": "Alleen op HQ"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "You must attempt every question you are asked; skipping counts as wrong.",
                "es": "Debes intentar cada pregunta; saltarla cuenta como fallo.",
                "de": "Man muss antworten; Überspringen zählt als falsch.",
                "nl": "Je moet elke vraag beantwoorden; overslaan telt als fout."
            }
        },
        {
            "question": {
                "en": "What if you run out of time answering?",
                "es": "¿Y si te quedas sin tiempo?",
                "de": "Was bei Zeitüberschreitung?",
                "nl": "Wat als je geen tijd meer hebt?"
            },
            "options": [
                {
                    "en": "With no rule, no effect",
                    "es": "Sin regla, no afecta",
                    "de": "Ohne Regel: kein Effekt",
                    "nl": "Zonder regel: geen effect"
                },
                {
                    "en": "Auto-lose",
                    "es": "Pierdes",
                    "de": "Verloren",
                    "nl": "Verloren"
                },
                {
                    "en": "Auto-win",
                    "es": "Ganas",
                    "de": "Gewonnen",
                    "nl": "Gewonnen"
                },
                {
                    "en": "Re-roll",
                    "es": "Tira de nuevo",
                    "de": "Neu würfeln",
                    "nl": "Opnieuw gooien"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Base rules don't enforce a time limit; no penalty applies.",
                "es": "Las reglas base no tienen límite.",
                "de": "Grundregeln haben kein Zeitlimit.",
                "nl": "Basisregels kennen geen limiet."
            }
        },
        {
            "question": {
                "en": "What if you land exactly on the hub with all 6 wedges?",
                "es": "¿Y si caes exacto en el centro con las 6 cuñas?",
                "de": "Was, wenn man mit 6 Keilen genau ins Zentrum kommt?",
                "nl": "Wat als je met 6 taartpunten precies in het midden komt?"
            },
            "options": [
                {
                    "en": "You attempt the final question",
                    "es": "Intentas la pregunta final",
                    "de": "Man versucht die Endfrage",
                    "nl": "Je probeert de eindvraag"
                },
                {
                    "en": "You win automatically",
                    "es": "Ganas automáticamente",
                    "de": "Automatischer Sieg",
                    "nl": "Automatisch winnen"
                },
                {
                    "en": "You lose",
                    "es": "Pierdes",
                    "de": "Du verlierst",
                    "nl": "Je verliest"
                },
                {
                    "en": "You roll again",
                    "es": "Tiras de nuevo",
                    "de": "Erneut würfeln",
                    "nl": "Opnieuw gooien"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Opponents pick a final category and you must answer correctly to win.",
                "es": "Los oponentes eligen categoría y debes acertar.",
                "de": "Die Gegner wählen eine finale Kategorie.",
                "nl": "Tegenstanders kiezen een categorie en je moet juist antwoorden."
            }
        },
        {
            "question": {
                "en": "Who picks up the die to roll?",
                "es": "¿Quién toma el dado para tirar?",
                "de": "Wer nimmt den Würfel?",
                "nl": "Wie pakt de dobbelsteen?"
            },
            "options": [
                {
                    "en": "The active player",
                    "es": "El jugador activo",
                    "de": "Der aktive Spieler",
                    "nl": "De actieve speler"
                },
                {
                    "en": "Reader",
                    "es": "Lector",
                    "de": "Leser",
                    "nl": "Lezer"
                },
                {
                    "en": "Any player",
                    "es": "Cualquiera",
                    "de": "Beliebig",
                    "nl": "Iemand"
                },
                {
                    "en": "Team leader",
                    "es": "Líder de equipo",
                    "de": "Teamleiter",
                    "nl": "Teamleider"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "The player whose turn it is rolls the die.",
                "es": "El jugador en turno tira el dado.",
                "de": "Der Spieler am Zug würfelt.",
                "nl": "De speler aan de beurt gooit."
            }
        },
        {
            "question": {
                "en": "Do you have to move every roll?",
                "es": "¿Debes moverte cada tirada?",
                "de": "Muss man bei jedem Wurf ziehen?",
                "nl": "Moet je bij elke worp bewegen?"
            },
            "options": [
                {
                    "en": "Yes, you must move",
                    "es": "Sí, debes moverte",
                    "de": "Ja, man muss ziehen",
                    "nl": "Ja, je moet bewegen"
                },
                {
                    "en": "No, optional",
                    "es": "No, opcional",
                    "de": "Nein, optional",
                    "nl": "Nee, optioneel"
                },
                {
                    "en": "Only on 6",
                    "es": "Solo con 6",
                    "de": "Nur bei 6",
                    "nl": "Alleen bij 6"
                },
                {
                    "en": "Only when near HQ",
                    "es": "Solo cerca HQ",
                    "de": "Nur nahe HQ",
                    "nl": "Alleen bij HQ"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "You must move the rolled number every turn, no passing.",
                "es": "Debes moverte el número sacado, sin pasar.",
                "de": "Man muss die gewürfelte Zahl ziehen.",
                "nl": "Je moet het gegooide aantal verplaatsen."
            }
        },
        {
            "question": {
                "en": "Can you pass through a hub?",
                "es": "¿Puedes cruzar el centro?",
                "de": "Darf man durchs Zentrum?",
                "nl": "Mag je door het midden gaan?"
            },
            "options": [
                {
                    "en": "Yes, but only stop there to win",
                    "es": "Sí, pero solo parar ahí para ganar",
                    "de": "Ja, nur anhalten zum Gewinnen",
                    "nl": "Ja, alleen stoppen om te winnen"
                },
                {
                    "en": "No",
                    "es": "No",
                    "de": "Nein",
                    "nl": "Nee"
                },
                {
                    "en": "Only on 6",
                    "es": "Solo con 6",
                    "de": "Nur mit 6",
                    "nl": "Alleen met 6"
                },
                {
                    "en": "Always must stop",
                    "es": "Siempre para",
                    "de": "Muss anhalten",
                    "nl": "Moet altijd stoppen"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "You can pass through the hub; only stop there to attempt winning.",
                "es": "Puedes cruzar el centro; solo parar para ganar.",
                "de": "Man darf durchs Zentrum, hält nur zum Sieg.",
                "nl": "Je mag door het midden; alleen stoppen om te winnen."
            }
        },
        {
            "question": {
                "en": "How do you decide which spoke to take?",
                "es": "¿Cómo eliges el radio a tomar?",
                "de": "Wie wählt man die Speiche?",
                "nl": "Hoe kies je welke spaak?"
            },
            "options": [
                {
                    "en": "Player's choice",
                    "es": "El jugador elige",
                    "de": "Spieler wählt",
                    "nl": "Speler kiest"
                },
                {
                    "en": "Random",
                    "es": "Aleatorio",
                    "de": "Zufällig",
                    "nl": "Willekeurig"
                },
                {
                    "en": "Dictated by die",
                    "es": "Por el dado",
                    "de": "Durch Würfel",
                    "nl": "Door dobbelsteen"
                },
                {
                    "en": "Always first",
                    "es": "Siempre el primero",
                    "de": "Immer der erste",
                    "nl": "Altijd de eerste"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "The active player chooses which spoke to head down strategically.",
                "es": "El jugador elige el radio estratégicamente.",
                "de": "Der aktive Spieler wählt die Speiche.",
                "nl": "De actieve speler kiest de spaak."
            }
        },
        {
            "question": {
                "en": "Are the category HQ spaces usually six squares apart?",
                "es": "¿Las sedes suelen estar a seis casillas?",
                "de": "Sind HQs meist sechs Felder entfernt?",
                "nl": "Liggen HQ's meestal zes vakken uit elkaar?"
            },
            "options": [
                {
                    "en": "Yes, spacing favors die rolls",
                    "es": "Sí, favorece al dado",
                    "de": "Ja, passt zum Würfelwert",
                    "nl": "Ja, past bij worp"
                },
                {
                    "en": "No",
                    "es": "No",
                    "de": "Nein",
                    "nl": "Nee"
                },
                {
                    "en": "Ten apart",
                    "es": "Diez",
                    "de": "Zehn",
                    "nl": "Tien"
                },
                {
                    "en": "One apart",
                    "es": "Una",
                    "de": "Eins",
                    "nl": "Eén"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "HQ spaces are spaced so that die rolls commonly land on them.",
                "es": "Las sedes están separadas para caer con tiradas comunes.",
                "de": "HQs sind so platziert, dass Würfe oft dort landen.",
                "nl": "HQ's liggen zo dat worpen er vaak op uitkomen."
            }
        },
        {
            "question": {
                "en": "What's a common strategy when choosing direction?",
                "es": "¿Estrategia común al elegir dirección?",
                "de": "Welche Strategie bei der Richtungswahl?",
                "nl": "Een veelgebruikte strategie bij richting?"
            },
            "options": [
                {
                    "en": "Aim for missing wedge color",
                    "es": "Ir a cuñas faltantes",
                    "de": "Fehlende Keilfarben anpeilen",
                    "nl": "Richting ontbrekende taartpunten"
                },
                {
                    "en": "Avoid HQs",
                    "es": "Evitar sedes",
                    "de": "HQs meiden",
                    "nl": "HQ's vermijden"
                },
                {
                    "en": "Stay in hub",
                    "es": "Quedarse en centro",
                    "de": "Im Zentrum bleiben",
                    "nl": "In midden blijven"
                },
                {
                    "en": "Random",
                    "es": "Aleatorio",
                    "de": "Zufällig",
                    "nl": "Willekeurig"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Players typically head toward HQ spaces for wedges they still need.",
                "es": "Los jugadores apuntan a las cuñas que les faltan.",
                "de": "Spieler zielen auf fehlende Keilfarben.",
                "nl": "Spelers gaan op ontbrekende kleuren af."
            }
        },
        {
            "question": {
                "en": "Does a correct answer always mean you roll again?",
                "es": "¿Una respuesta correcta siempre da otra tirada?",
                "de": "Gibt eine richtige Antwort immer einen neuen Wurf?",
                "nl": "Geeft een juist antwoord altijd een extra worp?"
            },
            "options": [
                {
                    "en": "Yes, continue your turn",
                    "es": "Sí, continúas turno",
                    "de": "Ja, Zug geht weiter",
                    "nl": "Ja, je gaat door"
                },
                {
                    "en": "No",
                    "es": "No",
                    "de": "Nein",
                    "nl": "Nee"
                },
                {
                    "en": "Only odd rolls",
                    "es": "Solo impares",
                    "de": "Nur ungerade",
                    "nl": "Alleen oneven"
                },
                {
                    "en": "Only in teams",
                    "es": "Solo equipos",
                    "de": "Nur im Team",
                    "nl": "Alleen in teams"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Every correct answer earns another roll, continuing your turn.",
                "es": "Cada acierto da otra tirada.",
                "de": "Jede richtige Antwort gibt einen neuen Wurf.",
                "nl": "Elk juist antwoord geeft een nieuwe worp."
            }
        },
        {
            "question": {
                "en": "How do rolls work for team turns?",
                "es": "¿Cómo funcionan las tiradas en equipos?",
                "de": "Wie funktionieren Würfe in Teams?",
                "nl": "Hoe werken worpen in teams?"
            },
            "options": [
                {
                    "en": "Team shares one roll",
                    "es": "El equipo comparte una tirada",
                    "de": "Team teilt einen Wurf",
                    "nl": "Team deelt één worp"
                },
                {
                    "en": "Everyone rolls",
                    "es": "Todos tiran",
                    "de": "Jeder würfelt",
                    "nl": "Iedereen gooit"
                },
                {
                    "en": "Sum rolls",
                    "es": "Suma de tiradas",
                    "de": "Summe der Würfe",
                    "nl": "Som van worpen"
                },
                {
                    "en": "No rolls",
                    "es": "Sin tiradas",
                    "de": "Keine Würfe",
                    "nl": "Geen worpen"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "A team rolls once and moves together as a unit.",
                "es": "El equipo tira una vez y se mueve como unidad.",
                "de": "Ein Team würfelt einmal und zieht gemeinsam.",
                "nl": "Een team gooit één keer en beweegt samen."
            }
        },
        {
            "question": {
                "en": "Do you keep wedges if you quit mid-game?",
                "es": "¿Guardas las cuñas si abandonas?",
                "de": "Behält man Keile beim Aufgeben?",
                "nl": "Behoud je taartpunten bij het stoppen?"
            },
            "options": [
                {
                    "en": "No, you lose all on quitting",
                    "es": "No, pierdes todo al abandonar",
                    "de": "Nein, alles verloren",
                    "nl": "Nee, alles kwijt"
                },
                {
                    "en": "Yes",
                    "es": "Sí",
                    "de": "Ja",
                    "nl": "Ja"
                },
                {
                    "en": "Half",
                    "es": "La mitad",
                    "de": "Die Hälfte",
                    "nl": "De helft"
                },
                {
                    "en": "Just one",
                    "es": "Solo una",
                    "de": "Nur einen",
                    "nl": "Eén"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Quitting ends that player's participation; wedges are forfeited.",
                "es": "Abandonar termina tu participación; pierdes cuñas.",
                "de": "Aufgeben beendet die Teilnahme, Keile sind verloren.",
                "nl": "Stoppen betekent het einde voor die speler."
            }
        },
        {
            "question": {
                "en": "What is the standard number of wedges in a set?",
                "es": "¿Cuántas cuñas por set?",
                "de": "Wie viele Keile sind in einem Set?",
                "nl": "Hoeveel taartpunten per set?"
            },
            "options": [
                {
                    "en": "36 (6 per player x 6)",
                    "es": "36 (6 por jugador x 6)",
                    "de": "36 (6 je Spieler x 6)",
                    "nl": "36 (6 per speler x 6)"
                },
                {
                    "en": "Six",
                    "es": "Seis",
                    "de": "Sechs",
                    "nl": "Zes"
                },
                {
                    "en": "Twelve",
                    "es": "Doce",
                    "de": "Zwölf",
                    "nl": "Twaalf"
                },
                {
                    "en": "Twenty-four",
                    "es": "Veinticuatro",
                    "de": "Vierundzwanzig",
                    "nl": "Vierentwintig"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Sets include 36 wedges: six per player for up to six players.",
                "es": "Los sets incluyen 36 cuñas: seis por jugador.",
                "de": "Sets enthalten 36 Keile: sechs pro Spieler.",
                "nl": "Sets hebben 36 taartpunten: zes per speler."
            }
        },
        {
            "question": {
                "en": "How many tokens come in the box?",
                "es": "¿Cuántas fichas trae la caja?",
                "de": "Wie viele Spielsteine sind in der Box?",
                "nl": "Hoeveel pionnen zitten in de doos?"
            },
            "options": [
                {
                    "en": "Six",
                    "es": "Seis",
                    "de": "Sechs",
                    "nl": "Zes"
                },
                {
                    "en": "Four",
                    "es": "Cuatro",
                    "de": "Vier",
                    "nl": "Vier"
                },
                {
                    "en": "Eight",
                    "es": "Ocho",
                    "de": "Acht",
                    "nl": "Acht"
                },
                {
                    "en": "Ten",
                    "es": "Diez",
                    "de": "Zehn",
                    "nl": "Tien"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Six round tokens are included, one per possible player.",
                "es": "Seis fichas redondas, una por jugador posible.",
                "de": "Sechs runde Steine sind enthalten.",
                "nl": "Zes ronde pionnen, één per speler."
            }
        },
        {
            "question": {
                "en": "How is the turn passed?",
                "es": "¿Cómo se pasa el turno?",
                "de": "Wie wechselt der Zug?",
                "nl": "Hoe wordt de beurt doorgegeven?"
            },
            "options": [
                {
                    "en": "On wrong answer",
                    "es": "Respuesta incorrecta",
                    "de": "Bei falscher Antwort",
                    "nl": "Bij fout antwoord"
                },
                {
                    "en": "Every roll",
                    "es": "Cada tirada",
                    "de": "Jeder Wurf",
                    "nl": "Elke worp"
                },
                {
                    "en": "Every 3 minutes",
                    "es": "Cada 3 minutos",
                    "de": "Alle 3 Minuten",
                    "nl": "Elke 3 minuten"
                },
                {
                    "en": "Never",
                    "es": "Nunca",
                    "de": "Nie",
                    "nl": "Nooit"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Turn ends only after an incorrect answer.",
                "es": "El turno solo termina tras fallar.",
                "de": "Der Zug endet nur bei falscher Antwort.",
                "nl": "Beurt eindigt pas bij fout antwoord."
            }
        },
        {
            "question": {
                "en": "What's a quick way to end a long game?",
                "es": "¿Cómo acelerar una partida larga?",
                "de": "Wie beendet man ein langes Spiel schneller?",
                "nl": "Hoe maak je een lang spel sneller?"
            },
            "options": [
                {
                    "en": "Impose time limits",
                    "es": "Imponer tiempo",
                    "de": "Zeitlimit einführen",
                    "nl": "Tijdslimiet invoeren"
                },
                {
                    "en": "Skip categories",
                    "es": "Saltar categorías",
                    "de": "Kategorien auslassen",
                    "nl": "Categorieën overslaan"
                },
                {
                    "en": "Hide cards",
                    "es": "Ocultar cartas",
                    "de": "Karten verstecken",
                    "nl": "Kaarten verbergen"
                },
                {
                    "en": "Remove dice",
                    "es": "Quitar dado",
                    "de": "Würfel entfernen",
                    "nl": "Dobbelsteen weghalen"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Adding time limits or fewer wedges speeds up the game.",
                "es": "Imponer tiempo acelera el juego.",
                "de": "Zeitlimits beschleunigen das Spiel.",
                "nl": "Tijdslimieten versnellen het spel."
            }
        },
        {
            "question": {
                "en": "Do all editions use the same rules?",
                "es": "¿Todas las ediciones tienen mismas reglas?",
                "de": "Nutzen alle Ausgaben die gleichen Regeln?",
                "nl": "Gebruiken alle edities dezelfde regels?"
            },
            "options": [
                {
                    "en": "Mostly, with small tweaks",
                    "es": "Casi, con ajustes",
                    "de": "Meist mit kleinen Änderungen",
                    "nl": "Meestal, met kleine aanpassingen"
                },
                {
                    "en": "Each totally different",
                    "es": "Cada una diferente",
                    "de": "Alle völlig anders",
                    "nl": "Helemaal anders"
                },
                {
                    "en": "Identical",
                    "es": "Idénticas",
                    "de": "Identisch",
                    "nl": "Identiek"
                },
                {
                    "en": "Depends on player",
                    "es": "Depende del jugador",
                    "de": "Vom Spieler abhängig",
                    "nl": "Afhankelijk van speler"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Most editions share core rules with minor twists.",
                "es": "La mayoría comparte reglas base con pequeños cambios.",
                "de": "Die meisten Ausgaben teilen Grundregeln.",
                "nl": "De meeste edities delen de basisregels."
            }
        },
        {
            "question": {
                "en": "Is there a penalty for too many wrong answers?",
                "es": "¿Hay penalización por muchas respuestas incorrectas?",
                "de": "Gibt es Strafen für viele Fehler?",
                "nl": "Is er straf voor veel fout antwoord?"
            },
            "options": [
                {
                    "en": "No, just lost turns",
                    "es": "No, solo turnos",
                    "de": "Nein, nur Züge",
                    "nl": "Nee, alleen beurten"
                },
                {
                    "en": "Yes, lose wedges",
                    "es": "Sí, pierdes cuñas",
                    "de": "Ja, Keile verlieren",
                    "nl": "Ja, taartpunten verliezen"
                },
                {
                    "en": "Skip turns",
                    "es": "Saltar turnos",
                    "de": "Züge überspringen",
                    "nl": "Beurten overslaan"
                },
                {
                    "en": "Lose game",
                    "es": "Pierdes",
                    "de": "Verloren",
                    "nl": "Verloren"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "No direct penalty — wrong answers just end your turn.",
                "es": "No hay castigo directo, solo fin de turno.",
                "de": "Keine direkte Strafe, nur Zugende.",
                "nl": "Geen directe straf, alleen beurt eindigen."
            }
        },
        {
            "question": {
                "en": "Can you decline to stop at an HQ even if you can?",
                "es": "¿Puedes no parar en una sede?",
                "de": "Darf man HQs bewusst überlaufen?",
                "nl": "Mag je een HQ overslaan?"
            },
            "options": [
                {
                    "en": "Yes, movement is flexible",
                    "es": "Sí, el movimiento es flexible",
                    "de": "Ja, flexibel",
                    "nl": "Ja, flexibel"
                },
                {
                    "en": "No",
                    "es": "No",
                    "de": "Nein",
                    "nl": "Nee"
                },
                {
                    "en": "Only if wedge owned",
                    "es": "Solo con cuña",
                    "de": "Nur wenn Keil vorhanden",
                    "nl": "Alleen bij bezit"
                },
                {
                    "en": "Only on 6",
                    "es": "Solo con 6",
                    "de": "Nur bei 6",
                    "nl": "Alleen bij 6"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "You can keep moving past an HQ if your roll allows.",
                "es": "Puedes seguir si tu tirada lo permite.",
                "de": "Man kann am HQ vorbeiziehen, wenn der Wurf passt.",
                "nl": "Je mag doorgaan als de worp het toelaat."
            }
        },
        {
            "question": {
                "en": "Do you have to use all dice movement?",
                "es": "¿Debes usar todo el movimiento del dado?",
                "de": "Muss man alle Würfelpunkte nutzen?",
                "nl": "Moet je alle worp-punten gebruiken?"
            },
            "options": [
                {
                    "en": "Yes, move full amount",
                    "es": "Sí, todo",
                    "de": "Ja, alles",
                    "nl": "Ja, alles"
                },
                {
                    "en": "No",
                    "es": "No",
                    "de": "Nein",
                    "nl": "Nee"
                },
                {
                    "en": "Half",
                    "es": "La mitad",
                    "de": "Die Hälfte",
                    "nl": "De helft"
                },
                {
                    "en": "Just 1",
                    "es": "Solo 1",
                    "de": "Nur 1",
                    "nl": "Maar 1"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "You must move exactly the total rolled.",
                "es": "Debes usar todo el total del dado.",
                "de": "Man muss genau die gewürfelte Zahl nutzen.",
                "nl": "Je moet precies het gegooide aantal gebruiken."
            }
        },
        {
            "question": {
                "en": "What defines the end of game?",
                "es": "¿Qué define el fin de la partida?",
                "de": "Was beendet das Spiel?",
                "nl": "Wat bepaalt het einde van het spel?"
            },
            "options": [
                {
                    "en": "A player wins final hub question",
                    "es": "Alguien acierta la final",
                    "de": "Ein Spieler gewinnt im Zentrum",
                    "nl": "Een speler wint de eindvraag"
                },
                {
                    "en": "A card runs out",
                    "es": "Se acaba el mazo",
                    "de": "Kartenstapel leer",
                    "nl": "Kaarten op"
                },
                {
                    "en": "All wedges drawn",
                    "es": "Todas las cuñas",
                    "de": "Alle Keile",
                    "nl": "Alle taartpunten"
                },
                {
                    "en": "Player count",
                    "es": "Conteo",
                    "de": "Spielerzahl",
                    "nl": "Spelersaantal"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "The game ends when one player wins the final hub challenge.",
                "es": "El juego termina cuando uno gana el centro.",
                "de": "Das Spiel endet, wenn jemand im Zentrum gewinnt.",
                "nl": "Het spel eindigt als iemand in het midden wint."
            }
        },
        {
            "question": {
                "en": "Who wins if multiple players have all 6 wedges?",
                "es": "¿Quién gana si varios tienen 6 cuñas?",
                "de": "Wer gewinnt bei mehreren mit 6 Keilen?",
                "nl": "Wie wint als meerdere 6 taartpunten hebben?"
            },
            "options": [
                {
                    "en": "First to win at hub",
                    "es": "El primero en ganar en centro",
                    "de": "Der erste im Zentrum",
                    "nl": "Eerste in het midden"
                },
                {
                    "en": "Most rolls",
                    "es": "Más tiradas",
                    "de": "Meiste Würfe",
                    "nl": "Meeste worpen"
                },
                {
                    "en": "Oldest player",
                    "es": "El mayor",
                    "de": "Der Älteste",
                    "nl": "Oudste speler"
                },
                {
                    "en": "Youngest",
                    "es": "El menor",
                    "de": "Der Jüngste",
                    "nl": "Jongste"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Being first to correctly answer the final hub question wins.",
                "es": "Gana el primero que acierte en el centro.",
                "de": "Wer zuerst im Zentrum richtig antwortet, gewinnt.",
                "nl": "Wie eerst goed antwoordt in het midden wint."
            }
        },
        {
            "question": {
                "en": "Can you move onto the hub without 6 wedges?",
                "es": "¿Puedes ir al centro sin las 6 cuñas?",
                "de": "Darf man ins Zentrum ohne alle Keile?",
                "nl": "Mag je het midden in zonder 6 taartpunten?"
            },
            "options": [
                {
                    "en": "Yes, it just acts as roll-again",
                    "es": "Sí, funciona como tira de nuevo",
                    "de": "Ja, als erneuter Wurf",
                    "nl": "Ja, werkt als extra worp"
                },
                {
                    "en": "No",
                    "es": "No",
                    "de": "Nein",
                    "nl": "Nee"
                },
                {
                    "en": "Only early",
                    "es": "Solo al inicio",
                    "de": "Nur früh",
                    "nl": "Alleen vroeg"
                },
                {
                    "en": "Only late",
                    "es": "Solo al final",
                    "de": "Nur spät",
                    "nl": "Alleen laat"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Landing on the hub without all wedges just gives a free roll.",
                "es": "Caer en el centro sin cuñas solo da una tirada extra.",
                "de": "Ins Zentrum ohne alle Keile gibt nur einen Wurf.",
                "nl": "Op het midden zonder alle taartpunten geeft alleen een worp."
            }
        },
        {
            "question": {
                "en": "How do category HQ spaces differ from normal spaces?",
                "es": "¿Cómo se diferencian las sedes de las casillas normales?",
                "de": "Wie unterscheiden sich HQs von normalen Feldern?",
                "nl": "Hoe verschillen HQ's van gewone vakken?"
            },
            "options": [
                {
                    "en": "HQs can award wedges",
                    "es": "Dan cuñas",
                    "de": "HQs geben Keile",
                    "nl": "HQ's geven taartpunten"
                },
                {
                    "en": "They are bigger only",
                    "es": "Solo son grandes",
                    "de": "Nur größer",
                    "nl": "Alleen groter"
                },
                {
                    "en": "They are empty",
                    "es": "Están vacías",
                    "de": "Sie sind leer",
                    "nl": "Ze zijn leeg"
                },
                {
                    "en": "They move pieces",
                    "es": "Mueven fichas",
                    "de": "Sie bewegen Steine",
                    "nl": "Ze verplaatsen pionnen"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Only category HQ spaces can award a wedge for a correct answer.",
                "es": "Solo las sedes dan cuñas al acertar.",
                "de": "Nur HQs geben Keile bei richtiger Antwort.",
                "nl": "Alleen HQ's geven taartpunten bij juist antwoord."
            }
        },
        {
            "question": {
                "en": "Are questions reused in a single game?",
                "es": "¿Se reutilizan preguntas en una partida?",
                "de": "Werden Fragen wiederverwendet?",
                "nl": "Worden vragen hergebruikt in een spel?"
            },
            "options": [
                {
                    "en": "Possible if cards recycle",
                    "es": "Posible si se reciclan",
                    "de": "Möglich beim Recyceln",
                    "nl": "Mogelijk bij hergebruik"
                },
                {
                    "en": "Never",
                    "es": "Nunca",
                    "de": "Nie",
                    "nl": "Nooit"
                },
                {
                    "en": "Always",
                    "es": "Siempre",
                    "de": "Immer",
                    "nl": "Altijd"
                },
                {
                    "en": "Only L1",
                    "es": "Solo L1",
                    "de": "Nur L1",
                    "nl": "Alleen L1"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Cards may be reshuffled, so questions can repeat in long games.",
                "es": "Las cartas se pueden rebarajar, así se repiten.",
                "de": "Karten werden gemischt, Fragen können wiederkehren.",
                "nl": "Kaarten kunnen hergebruikt worden, dus vragen herhalen."
            }
        },
        {
            "question": {
                "en": "How do you handle an indecipherable answer?",
                "es": "¿Cómo tratar una respuesta poco clara?",
                "de": "Wie mit unklaren Antworten umgehen?",
                "nl": "Hoe omgaan met onduidelijk antwoord?"
            },
            "options": [
                {
                    "en": "Group decides fairness",
                    "es": "El grupo decide",
                    "de": "Die Gruppe entscheidet",
                    "nl": "Groep beslist"
                },
                {
                    "en": "Always wrong",
                    "es": "Siempre mal",
                    "de": "Immer falsch",
                    "nl": "Altijd fout"
                },
                {
                    "en": "Always right",
                    "es": "Siempre bien",
                    "de": "Immer richtig",
                    "nl": "Altijd goed"
                },
                {
                    "en": "Coin flip",
                    "es": "Moneda",
                    "de": "Münze",
                    "nl": "Munt"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Ambiguous answers are decided by the group for fairness.",
                "es": "Las respuestas ambiguas las decide el grupo.",
                "de": "Unklare Antworten entscheidet die Gruppe.",
                "nl": "Onduidelijke antwoorden beslist de groep."
            }
        },
        {
            "question": {
                "en": "What is the role of the die in category choice?",
                "es": "¿El dado afecta la categoría?",
                "de": "Beeinflusst der Würfel die Kategorie?",
                "nl": "Beïnvloedt de dobbelsteen de categorie?"
            },
            "options": [
                {
                    "en": "No, only movement",
                    "es": "No, solo mueve",
                    "de": "Nein, nur Bewegung",
                    "nl": "Nee, alleen beweging"
                },
                {
                    "en": "Yes",
                    "es": "Sí",
                    "de": "Ja",
                    "nl": "Ja"
                },
                {
                    "en": "Only on 6",
                    "es": "Solo con 6",
                    "de": "Nur bei 6",
                    "nl": "Alleen bij 6"
                },
                {
                    "en": "Only on 1",
                    "es": "Solo con 1",
                    "de": "Nur bei 1",
                    "nl": "Alleen bij 1"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "The die only controls movement; category comes from the space color.",
                "es": "El dado solo determina movimiento.",
                "de": "Der Würfel steuert nur die Bewegung.",
                "nl": "De dobbelsteen regelt alleen beweging."
            }
        },
        {
            "question": {
                "en": "Do you need to say answers aloud?",
                "es": "¿Debes decir respuestas en voz alta?",
                "de": "Muss man Antworten laut sagen?",
                "nl": "Moet je hardop antwoorden?"
            },
            "options": [
                {
                    "en": "Yes, vocal answers",
                    "es": "Sí, en voz alta",
                    "de": "Ja, laut",
                    "nl": "Ja, hardop"
                },
                {
                    "en": "Writing",
                    "es": "Escribir",
                    "de": "Schreiben",
                    "nl": "Schrijven"
                },
                {
                    "en": "Gestures",
                    "es": "Gestos",
                    "de": "Gesten",
                    "nl": "Gebaren"
                },
                {
                    "en": "Telepathy",
                    "es": "Telepatía",
                    "de": "Telepathie",
                    "nl": "Telepathie"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Answers must be spoken aloud so all players can hear.",
                "es": "Las respuestas deben ser en voz alta.",
                "de": "Antworten müssen laut ausgesprochen werden.",
                "nl": "Antwoorden moeten hardop."
            }
        },
        {
            "question": {
                "en": "Are partial answers accepted?",
                "es": "¿Se aceptan respuestas parciales?",
                "de": "Werden Teilantworten akzeptiert?",
                "nl": "Worden gedeeltelijke antwoorden geaccepteerd?"
            },
            "options": [
                {
                    "en": "Usually only full answer",
                    "es": "Normalmente solo respuesta completa",
                    "de": "Meist nur vollständige",
                    "nl": "Meestal alleen volledig"
                },
                {
                    "en": "Always",
                    "es": "Siempre",
                    "de": "Immer",
                    "nl": "Altijd"
                },
                {
                    "en": "Never",
                    "es": "Nunca",
                    "de": "Nie",
                    "nl": "Nooit"
                },
                {
                    "en": "Depends on mood",
                    "es": "Según humor",
                    "de": "Je nach Stimmung",
                    "nl": "Afhankelijk van humeur"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Partial answers usually don't count unless the group agrees.",
                "es": "Las respuestas parciales no cuentan normalmente.",
                "de": "Teilantworten zählen normalerweise nicht.",
                "nl": "Gedeeltelijke antwoorden tellen meestal niet."
            }
        },
        {
            "question": {
                "en": "Can you ask the reader to repeat the question?",
                "es": "¿Puedes pedir repetir la pregunta?",
                "de": "Darf man die Frage wiederholen lassen?",
                "nl": "Mag je de vraag laten herhalen?"
            },
            "options": [
                {
                    "en": "Yes, typically allowed",
                    "es": "Sí, normalmente",
                    "de": "Ja, meist erlaubt",
                    "nl": "Ja, meestal toegestaan"
                },
                {
                    "en": "No, once only",
                    "es": "No, solo una vez",
                    "de": "Nein",
                    "nl": "Nee"
                },
                {
                    "en": "Only in teams",
                    "es": "Solo en equipos",
                    "de": "Nur im Team",
                    "nl": "Alleen in team"
                },
                {
                    "en": "Only L1",
                    "es": "Solo L1",
                    "de": "Nur L1",
                    "nl": "Alleen L1"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Players can typically ask the reader to repeat the question.",
                "es": "Se puede pedir repetir la pregunta.",
                "de": "Man darf die Frage wiederholen lassen.",
                "nl": "Je mag de vraag laten herhalen."
            }
        },
        {
            "question": {
                "en": "Can the reader play on their own turn?",
                "es": "¿El lector juega en su propio turno?",
                "de": "Liest sich der Leser selbst vor?",
                "nl": "Leest de lezer op zijn eigen beurt?"
            },
            "options": [
                {
                    "en": "No, someone else reads",
                    "es": "No, otro lee",
                    "de": "Nein, ein anderer",
                    "nl": "Nee, iemand anders"
                },
                {
                    "en": "Yes",
                    "es": "Sí",
                    "de": "Ja",
                    "nl": "Ja"
                },
                {
                    "en": "Team reads",
                    "es": "El equipo",
                    "de": "Das Team",
                    "nl": "Team doet"
                },
                {
                    "en": "Silent turn",
                    "es": "Turno en silencio",
                    "de": "Stummer Zug",
                    "nl": "Stille beurt"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "A different player reads for you on your own turn.",
                "es": "Otro jugador lee en tu turno.",
                "de": "Ein anderer Spieler liest bei deinem Zug.",
                "nl": "Een ander leest op jouw beurt."
            }
        },
        {
            "question": {
                "en": "What should you do before starting a game?",
                "es": "¿Qué hacer antes de empezar?",
                "de": "Was macht man vor Spielbeginn?",
                "nl": "Wat doe je voor aanvang?"
            },
            "options": [
                {
                    "en": "Shuffle cards, place pieces",
                    "es": "Barajar cartas, colocar fichas",
                    "de": "Karten mischen, Steine platzieren",
                    "nl": "Kaarten schudden, pionnen plaatsen"
                },
                {
                    "en": "Skip rules",
                    "es": "Saltar reglas",
                    "de": "Regeln überspringen",
                    "nl": "Regels overslaan"
                },
                {
                    "en": "Open cards",
                    "es": "Abrir cartas",
                    "de": "Karten öffnen",
                    "nl": "Kaarten openen"
                },
                {
                    "en": "Nothing",
                    "es": "Nada",
                    "de": "Nichts",
                    "nl": "Niets"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Setup includes shuffling card boxes and placing tokens in the hub.",
                "es": "Preparar incluye barajar y colocar fichas.",
                "de": "Vorbereitung: Karten mischen, Steine aufstellen.",
                "nl": "Voorbereiding: kaarten schudden, pionnen plaatsen."
            }
        },
        {
            "question": {
                "en": "What happens if you give the exact answer on the card?",
                "es": "¿Y si das la respuesta exacta de la carta?",
                "de": "Was bei genauer Antwort?",
                "nl": "Wat bij het exacte antwoord op de kaart?"
            },
            "options": [
                {
                    "en": "It counts correct",
                    "es": "Cuenta como correcta",
                    "de": "Zählt als richtig",
                    "nl": "Telt als juist"
                },
                {
                    "en": "Counts wrong",
                    "es": "Cuenta mal",
                    "de": "Falsch",
                    "nl": "Fout"
                },
                {
                    "en": "Doesn't count",
                    "es": "No cuenta",
                    "de": "Zählt nicht",
                    "nl": "Telt niet"
                },
                {
                    "en": "Half credit",
                    "es": "Medio",
                    "de": "Halber Punkt",
                    "nl": "Half"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Saying the exact answer printed on the card counts as correct.",
                "es": "Dar la respuesta exacta cuenta como correcta.",
                "de": "Die genaue Antwort zählt als richtig.",
                "nl": "Het exacte antwoord telt als juist."
            }
        },
        {
            "question": {
                "en": "What is a 'free turn' space?",
                "es": "¿Qué es una casilla de turno libre?",
                "de": "Was ist ein 'freies Feld'?",
                "nl": "Wat is een 'vrije beurt' vak?"
            },
            "options": [
                {
                    "en": "The hub allows a free roll",
                    "es": "El centro da un tiro libre",
                    "de": "Zentrum erlaubt freien Wurf",
                    "nl": "Midden geeft extra worp"
                },
                {
                    "en": "An empty card",
                    "es": "Carta vacía",
                    "de": "Leere Karte",
                    "nl": "Lege kaart"
                },
                {
                    "en": "A wedge",
                    "es": "Una cuña",
                    "de": "Ein Keil",
                    "nl": "Een taartpunt"
                },
                {
                    "en": "Bonus card",
                    "es": "Carta extra",
                    "de": "Extra-Karte",
                    "nl": "Bonuskaart"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "The hub space grants a free roll (no question) in regular play.",
                "es": "El centro da una tirada libre en juego normal.",
                "de": "Das Zentrum gibt einen freien Wurf.",
                "nl": "Het midden geeft een extra worp."
            }
        },
        {
            "question": {
                "en": "What defines which spoke you enter from hub?",
                "es": "¿Qué define el radio por el que sales?",
                "de": "Was bestimmt die Speiche, die man verlässt?",
                "nl": "Wat bepaalt welke spaak je uitkomt?"
            },
            "options": [
                {
                    "en": "Your choice",
                    "es": "Tu elección",
                    "de": "Deine Wahl",
                    "nl": "Jouw keuze"
                },
                {
                    "en": "Die",
                    "es": "El dado",
                    "de": "Der Würfel",
                    "nl": "Dobbelsteen"
                },
                {
                    "en": "Card",
                    "es": "Carta",
                    "de": "Karte",
                    "nl": "Kaart"
                },
                {
                    "en": "Random",
                    "es": "Aleatorio",
                    "de": "Zufällig",
                    "nl": "Willekeurig"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "You choose which of the six spokes to travel down.",
                "es": "Eliges el radio por el que salir.",
                "de": "Du wählst die Speiche.",
                "nl": "Je kiest zelf welke spaak je neemt."
            }
        },
        {
            "question": {
                "en": "Are there dice duels in Trivial Pursuit?",
                "es": "¿Hay duelos de dados?",
                "de": "Gibt es Würfelduelle?",
                "nl": "Zijn er dobbelduels?"
            },
            "options": [
                {
                    "en": "No, no PvP combat",
                    "es": "No, sin combate",
                    "de": "Nein, kein PvP",
                    "nl": "Nee, geen PvP"
                },
                {
                    "en": "Yes",
                    "es": "Sí",
                    "de": "Ja",
                    "nl": "Ja"
                },
                {
                    "en": "Only in tournaments",
                    "es": "Solo en torneos",
                    "de": "Nur in Turnieren",
                    "nl": "Alleen in toernooien"
                },
                {
                    "en": "Only Genus",
                    "es": "Solo Genus",
                    "de": "Nur Genus",
                    "nl": "Alleen Genus"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Trivial Pursuit has no direct player-vs-player combat.",
                "es": "No hay combate directo entre jugadores.",
                "de": "Trivial Pursuit kennt kein PvP.",
                "nl": "Trivial Pursuit kent geen PvP."
            }
        },
        {
            "question": {
                "en": "Are wedges traded between players?",
                "es": "¿Se intercambian cuñas?",
                "de": "Werden Keile getauscht?",
                "nl": "Worden taartpunten geruild?"
            },
            "options": [
                {
                    "en": "No",
                    "es": "No",
                    "de": "Nein",
                    "nl": "Nee"
                },
                {
                    "en": "Yes",
                    "es": "Sí",
                    "de": "Ja",
                    "nl": "Ja"
                },
                {
                    "en": "Only with agreement",
                    "es": "Solo con acuerdo",
                    "de": "Nur bei Einigung",
                    "nl": "Alleen met akkoord"
                },
                {
                    "en": "Only on 6",
                    "es": "Solo con 6",
                    "de": "Nur bei 6",
                    "nl": "Alleen bij 6"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Wedges cannot be traded or stolen — they are only earned.",
                "es": "Las cuñas no se intercambian ni roban.",
                "de": "Keile werden weder getauscht noch gestohlen.",
                "nl": "Taartpunten worden niet geruild of gestolen."
            }
        },
        {
            "question": {
                "en": "Can you share dice rolls with a partner?",
                "es": "¿Puedes compartir tiradas con compañero?",
                "de": "Darf man Würfe mit Partner teilen?",
                "nl": "Mag je worpen delen met partner?"
            },
            "options": [
                {
                    "en": "Only as a team",
                    "es": "Solo como equipo",
                    "de": "Nur als Team",
                    "nl": "Alleen in team"
                },
                {
                    "en": "Always",
                    "es": "Siempre",
                    "de": "Immer",
                    "nl": "Altijd"
                },
                {
                    "en": "Never",
                    "es": "Nunca",
                    "de": "Nie",
                    "nl": "Nooit"
                },
                {
                    "en": "In L1",
                    "es": "En L1",
                    "de": "In L1",
                    "nl": "In L1"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Teams share rolls; individuals do not.",
                "es": "Los equipos comparten tiradas.",
                "de": "Teams teilen Würfe.",
                "nl": "Teams delen worpen."
            }
        },
        {
            "question": {
                "en": "What's the simplest win condition?",
                "es": "¿Cuál es la condición de victoria más simple?",
                "de": "Was ist die einfachste Siegbedingung?",
                "nl": "Wat is de simpelste winvoorwaarde?"
            },
            "options": [
                {
                    "en": "All wedges + hub answer",
                    "es": "Todas las cuñas + acierto en centro",
                    "de": "Alle Keile + Zentrumsantwort",
                    "nl": "Alle taartpunten + eindantwoord"
                },
                {
                    "en": "Most wedges",
                    "es": "Más cuñas",
                    "de": "Meiste Keile",
                    "nl": "Meeste taartpunten"
                },
                {
                    "en": "First to roll 6",
                    "es": "Primero en sacar 6",
                    "de": "Erster 6er",
                    "nl": "Eerste 6"
                },
                {
                    "en": "Longest game",
                    "es": "Partida más larga",
                    "de": "Längstes Spiel",
                    "nl": "Langste spel"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "You need all six wedges and a correct final answer to win.",
                "es": "Necesitas todas las cuñas y la final para ganar.",
                "de": "Alle Keile und die finale Antwort sind nötig.",
                "nl": "Alle taartpunten en eindantwoord nodig."
            }
        },
        {
            "question": {
                "en": "How many unique categories are answered per win?",
                "es": "¿Cuántas categorías únicas por victoria?",
                "de": "Wie viele eindeutige Kategorien je Sieg?",
                "nl": "Hoeveel unieke categorieën per winst?"
            },
            "options": [
                {
                    "en": "Six",
                    "es": "Seis",
                    "de": "Sechs",
                    "nl": "Zes"
                },
                {
                    "en": "Four",
                    "es": "Cuatro",
                    "de": "Vier",
                    "nl": "Vier"
                },
                {
                    "en": "Twelve",
                    "es": "Doce",
                    "de": "Zwölf",
                    "nl": "Twaalf"
                },
                {
                    "en": "Two",
                    "es": "Dos",
                    "de": "Zwei",
                    "nl": "Twee"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "You must correctly answer at least six different category questions.",
                "es": "Debes acertar seis categorías distintas.",
                "de": "Man muss mindestens sechs Kategorien richtig beantworten.",
                "nl": "Je moet zes verschillende categorieën goed hebben."
            }
        },
        {
            "question": {
                "en": "Does winning a wedge end your turn?",
                "es": "¿Ganar una cuña termina el turno?",
                "de": "Beendet ein Keil-Gewinn den Zug?",
                "nl": "Beëindigt winnen van taartpunt je beurt?"
            },
            "options": [
                {
                    "en": "No, you roll again",
                    "es": "No, tiras de nuevo",
                    "de": "Nein, weiter würfeln",
                    "nl": "Nee, opnieuw gooien"
                },
                {
                    "en": "Yes",
                    "es": "Sí",
                    "de": "Ja",
                    "nl": "Ja"
                },
                {
                    "en": "Only first wedge",
                    "es": "Solo la primera",
                    "de": "Nur der erste",
                    "nl": "Alleen de eerste"
                },
                {
                    "en": "Never",
                    "es": "Nunca",
                    "de": "Nie",
                    "nl": "Nooit"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Earning a wedge counts as a correct answer, so you roll again.",
                "es": "Ganar cuña cuenta como acierto, tiras de nuevo.",
                "de": "Ein Keil-Gewinn erlaubt erneutes Würfeln.",
                "nl": "Een taartpunt winnen geeft een extra worp."
            }
        },
        {
            "question": {
                "en": "Who should shuffle the cards?",
                "es": "¿Quién debe barajar las cartas?",
                "de": "Wer sollte die Karten mischen?",
                "nl": "Wie moet de kaarten schudden?"
            },
            "options": [
                {
                    "en": "Any player, before start",
                    "es": "Cualquiera, antes",
                    "de": "Ein beliebiger Spieler",
                    "nl": "Iemand, vóór start"
                },
                {
                    "en": "The youngest",
                    "es": "El más joven",
                    "de": "Der Jüngste",
                    "nl": "De jongste"
                },
                {
                    "en": "The reader",
                    "es": "El lector",
                    "de": "Der Leser",
                    "nl": "De lezer"
                },
                {
                    "en": "Nobody",
                    "es": "Nadie",
                    "de": "Niemand",
                    "nl": "Niemand"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Any player can shuffle the card boxes before the game begins.",
                "es": "Cualquiera puede barajar antes de empezar.",
                "de": "Jeder darf die Karten vor Spielbeginn mischen.",
                "nl": "Iedereen mag voor het begin schudden."
            }
        },
        {
            "question": {
                "en": "What if you break a tie in a final question?",
                "es": "¿Cómo romper empate en la final?",
                "de": "Wie Entscheidung bei Endfrage?",
                "nl": "Hoe de eindvraag bij gelijkspel beslissen?"
            },
            "options": [
                {
                    "en": "Play continues normally",
                    "es": "La partida sigue",
                    "de": "Normaler Spielverlauf",
                    "nl": "Normaal verder"
                },
                {
                    "en": "Coin flip",
                    "es": "Moneda",
                    "de": "Münze",
                    "nl": "Munt"
                },
                {
                    "en": "Split win",
                    "es": "Empate",
                    "de": "Geteilter Sieg",
                    "nl": "Gedeelde winst"
                },
                {
                    "en": "Sudden death",
                    "es": "Muerte súbita",
                    "de": "Sudden Death",
                    "nl": "Plotselinge dood"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "There's no tie — you simply keep playing after failing the final.",
                "es": "No hay empate, sigues jugando.",
                "de": "Es gibt kein Unentschieden, man spielt weiter.",
                "nl": "Er is geen gelijkspel, je speelt door."
            }
        },
        {
            "question": {
                "en": "How should categories be announced on HQ?",
                "es": "¿Cómo se indica la categoría en sede?",
                "de": "Wie wird die Kategorie auf HQ angesagt?",
                "nl": "Hoe wordt de categorie op HQ aangekondigd?"
            },
            "options": [
                {
                    "en": "HQ color indicates category",
                    "es": "Color de sede indica",
                    "de": "HQ-Farbe zeigt Kategorie",
                    "nl": "HQ-kleur geeft categorie"
                },
                {
                    "en": "Card picks",
                    "es": "La carta",
                    "de": "Karte wählt",
                    "nl": "Kaart kiest"
                },
                {
                    "en": "Random",
                    "es": "Aleatorio",
                    "de": "Zufällig",
                    "nl": "Willekeurig"
                },
                {
                    "en": "Player picks",
                    "es": "Jugador elige",
                    "de": "Spieler wählt",
                    "nl": "Speler kiest"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "The HQ's color tells you which category question to draw.",
                "es": "El color de la sede indica la categoría.",
                "de": "Die HQ-Farbe bestimmt die Kategorie.",
                "nl": "De HQ-kleur bepaalt de categorie."
            }
        },
        {
            "question": {
                "en": "What if you need one final wedge only?",
                "es": "¿Y si solo te falta una cuña?",
                "de": "Was, wenn nur ein Keil fehlt?",
                "nl": "Wat als er nog één taartpunt ontbreekt?"
            },
            "options": [
                {
                    "en": "Head to that category HQ",
                    "es": "Ve a esa sede",
                    "de": "Zu diesem HQ gehen",
                    "nl": "Ga naar dat HQ"
                },
                {
                    "en": "Any HQ",
                    "es": "Cualquier sede",
                    "de": "Beliebiges HQ",
                    "nl": "Elk HQ"
                },
                {
                    "en": "Hub",
                    "es": "Al centro",
                    "de": "Zentrum",
                    "nl": "Midden"
                },
                {
                    "en": "Roll",
                    "es": "Tira",
                    "de": "Würfeln",
                    "nl": "Gooien"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Aim for the headquarters of the category matching the missing color.",
                "es": "Dirígete a la sede del color que falta.",
                "de": "Zum HQ der fehlenden Farbe gehen.",
                "nl": "Ga naar het HQ van de ontbrekende kleur."
            }
        },
        {
            "question": {
                "en": "Can you wait and skip HQ intentionally to pick another?",
                "es": "¿Puedes ignorar una sede a propósito?",
                "de": "Darf man HQs bewusst überspringen?",
                "nl": "Mag je HQ opzettelijk overslaan?"
            },
            "options": [
                {
                    "en": "Yes, strategic choice",
                    "es": "Sí, estrategia",
                    "de": "Ja, strategisch",
                    "nl": "Ja, strategisch"
                },
                {
                    "en": "No",
                    "es": "No",
                    "de": "Nein",
                    "nl": "Nee"
                },
                {
                    "en": "Only once",
                    "es": "Solo una vez",
                    "de": "Einmal",
                    "nl": "Eén keer"
                },
                {
                    "en": "Only early",
                    "es": "Solo al inicio",
                    "de": "Nur früh",
                    "nl": "Alleen vroeg"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Skipping an HQ space is a valid strategic choice.",
                "es": "Saltar una sede es una opción estratégica.",
                "de": "HQs zu überspringen ist strategisch.",
                "nl": "HQ overslaan is strategisch."
            }
        },
        {
            "question": {
                "en": "How is game length controlled?",
                "es": "¿Cómo se controla la duración?",
                "de": "Wie wird die Spieldauer gesteuert?",
                "nl": "Hoe wordt de speelduur bepaald?"
            },
            "options": [
                {
                    "en": "By number of players/wedges",
                    "es": "Por jugadores/cuñas",
                    "de": "Durch Spieler/Keile",
                    "nl": "Door spelers/taartpunten"
                },
                {
                    "en": "A timer",
                    "es": "Un reloj",
                    "de": "Eine Uhr",
                    "nl": "Een klok"
                },
                {
                    "en": "Dice",
                    "es": "El dado",
                    "de": "Würfel",
                    "nl": "Dobbelsteen"
                },
                {
                    "en": "Music",
                    "es": "Música",
                    "de": "Musik",
                    "nl": "Muziek"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Length depends mostly on player count and pacing.",
                "es": "Duración depende de jugadores y ritmo.",
                "de": "Die Dauer hängt von Spieleranzahl ab.",
                "nl": "De duur hangt af van spelers en tempo."
            }
        },
        {
            "question": {
                "en": "Is Trivial Pursuit turn-based or real-time?",
                "es": "¿Es por turnos o tiempo real?",
                "de": "Rundenbasiert oder in Echtzeit?",
                "nl": "Beurten of realtime?"
            },
            "options": [
                {
                    "en": "Turn-based",
                    "es": "Por turnos",
                    "de": "Rundenbasiert",
                    "nl": "Beurten"
                },
                {
                    "en": "Real-time",
                    "es": "Tiempo real",
                    "de": "Echtzeit",
                    "nl": "Realtime"
                },
                {
                    "en": "Both",
                    "es": "Ambos",
                    "de": "Beides",
                    "nl": "Beide"
                },
                {
                    "en": "Neither",
                    "es": "Ninguno",
                    "de": "Keines",
                    "nl": "Geen"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Trivial Pursuit is a turn-based board game.",
                "es": "Es un juego por turnos.",
                "de": "Es ist rundenbasiert.",
                "nl": "Het is een beurtenspel."
            }
        },
        {
            "question": {
                "en": "Does Trivial Pursuit have luck elements?",
                "es": "¿Hay elementos de azar?",
                "de": "Gibt es Glückselemente?",
                "nl": "Zit er geluk in het spel?"
            },
            "options": [
                {
                    "en": "Yes, dice rolls",
                    "es": "Sí, dados",
                    "de": "Ja, Würfel",
                    "nl": "Ja, dobbelstenen"
                },
                {
                    "en": "None",
                    "es": "Nada",
                    "de": "Keine",
                    "nl": "Geen"
                },
                {
                    "en": "Only knowledge",
                    "es": "Solo saber",
                    "de": "Nur Wissen",
                    "nl": "Alleen kennis"
                },
                {
                    "en": "Only cards",
                    "es": "Solo cartas",
                    "de": "Nur Karten",
                    "nl": "Alleen kaarten"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Dice rolls and card order introduce some luck.",
                "es": "Dados y orden de cartas dan algo de azar.",
                "de": "Würfel und Kartenreihenfolge sind Glück.",
                "nl": "Dobbelstenen en kaartvolgorde zorgen voor geluk."
            }
        },
        {
            "question": {
                "en": "What is the most important skill?",
                "es": "¿Cuál es la habilidad más importante?",
                "de": "Was ist die wichtigste Fähigkeit?",
                "nl": "Wat is de belangrijkste vaardigheid?"
            },
            "options": [
                {
                    "en": "Broad knowledge",
                    "es": "Conocimiento amplio",
                    "de": "Breites Wissen",
                    "nl": "Brede kennis"
                },
                {
                    "en": "Dexterity",
                    "es": "Destreza",
                    "de": "Geschicklichkeit",
                    "nl": "Behendigheid"
                },
                {
                    "en": "Memory of rules",
                    "es": "Memoria de reglas",
                    "de": "Regel-Gedächtnis",
                    "nl": "Regelgeheugen"
                },
                {
                    "en": "Speed",
                    "es": "Velocidad",
                    "de": "Geschwindigkeit",
                    "nl": "Snelheid"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Broad general knowledge matters most in Trivial Pursuit.",
                "es": "El conocimiento general amplio es clave.",
                "de": "Breites Allgemeinwissen ist am wichtigsten.",
                "nl": "Brede algemene kennis is belangrijkst."
            }
        },
        {
            "question": {
                "en": "What should a reader not do?",
                "es": "¿Qué no debe hacer un lector?",
                "de": "Was darf der Leser nicht tun?",
                "nl": "Wat mag de lezer niet doen?"
            },
            "options": [
                {
                    "en": "Give away the answer",
                    "es": "Dar la respuesta",
                    "de": "Antwort verraten",
                    "nl": "Antwoord verraden"
                },
                {
                    "en": "Read question",
                    "es": "Leer pregunta",
                    "de": "Frage lesen",
                    "nl": "Vraag lezen"
                },
                {
                    "en": "Verify",
                    "es": "Verificar",
                    "de": "Prüfen",
                    "nl": "Controleren"
                },
                {
                    "en": "Move die",
                    "es": "Mover dado",
                    "de": "Würfel holen",
                    "nl": "Dobbelsteen halen"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Readers must not hint or reveal the answer.",
                "es": "El lector no debe revelar la respuesta.",
                "de": "Der Leser darf die Antwort nicht verraten.",
                "nl": "De lezer mag het antwoord niet verklappen."
            }
        },
        {
            "question": {
                "en": "Can you consult a phone for answers?",
                "es": "¿Puedes usar el teléfono?",
                "de": "Darf man das Handy nutzen?",
                "nl": "Mag je je telefoon gebruiken?"
            },
            "options": [
                {
                    "en": "No, it's cheating",
                    "es": "No, es trampa",
                    "de": "Nein, Betrug",
                    "nl": "Nee, valsspelen"
                },
                {
                    "en": "Yes",
                    "es": "Sí",
                    "de": "Ja",
                    "nl": "Ja"
                },
                {
                    "en": "Only in endgame",
                    "es": "Solo al final",
                    "de": "Nur am Ende",
                    "nl": "Alleen laat"
                },
                {
                    "en": "Only L5",
                    "es": "Solo L5",
                    "de": "Nur L5",
                    "nl": "Alleen L5"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Using outside resources like phones counts as cheating.",
                "es": "Usar teléfonos se considera trampa.",
                "de": "Handys zu benutzen gilt als Betrug.",
                "nl": "Telefoons gebruiken is valsspelen."
            }
        },
        {
            "question": {
                "en": "What's the purpose of the card box design?",
                "es": "¿Propósito del diseño de la caja de cartas?",
                "de": "Wozu ist die Kartenbox gedacht?",
                "nl": "Waarom zit er een kaartdoos in?"
            },
            "options": [
                {
                    "en": "Storage and ease of drawing",
                    "es": "Para guardar y robar fácilmente",
                    "de": "Aufbewahrung und Ziehen",
                    "nl": "Opslag en trekken"
                },
                {
                    "en": "For decoration",
                    "es": "Decoración",
                    "de": "Dekoration",
                    "nl": "Decoratie"
                },
                {
                    "en": "For tokens",
                    "es": "Fichas",
                    "de": "Steine",
                    "nl": "Pionnen"
                },
                {
                    "en": "For dice",
                    "es": "Dados",
                    "de": "Würfel",
                    "nl": "Dobbelsteen"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Card boxes organize cards and make drawing easy during play.",
                "es": "La caja organiza las cartas para robar.",
                "de": "Kartenboxen erleichtern das Ziehen.",
                "nl": "Kaartdoos vergemakkelijkt het trekken."
            }
        },
        {
            "question": {
                "en": "What if cards are placed in wrong box?",
                "es": "¿Y si las cartas van en caja errónea?",
                "de": "Was, wenn Karten falsch sortiert sind?",
                "nl": "Wat als kaarten in de verkeerde doos zitten?"
            },
            "options": [
                {
                    "en": "It doesn't affect play",
                    "es": "No afecta",
                    "de": "Kein Einfluss",
                    "nl": "Geen invloed"
                },
                {
                    "en": "Game breaks",
                    "es": "Juego se rompe",
                    "de": "Spiel kaputt",
                    "nl": "Spel kapot"
                },
                {
                    "en": "Lose turn",
                    "es": "Pierdes turno",
                    "de": "Zug verlieren",
                    "nl": "Beurt verliezen"
                },
                {
                    "en": "Penalty",
                    "es": "Castigo",
                    "de": "Strafe",
                    "nl": "Straf"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Boxes just organize cards; mixing them doesn't affect rules.",
                "es": "Las cajas solo organizan; mezclar no afecta.",
                "de": "Boxen dienen nur der Ordnung.",
                "nl": "Dozen zijn alleen voor ordening."
            }
        },
        {
            "question": {
                "en": "What is the simplest move you can make?",
                "es": "¿Cuál es el movimiento más simple?",
                "de": "Was ist der einfachste Zug?",
                "nl": "Wat is de simpelste zet?"
            },
            "options": [
                {
                    "en": "Move rolled number on board",
                    "es": "Moverte lo que saque el dado",
                    "de": "Die gewürfelte Zahl ziehen",
                    "nl": "Gegooide aantal verzetten"
                },
                {
                    "en": "Eat a wedge",
                    "es": "Comer cuña",
                    "de": "Keil essen",
                    "nl": "Taartpunt eten"
                },
                {
                    "en": "Flip board",
                    "es": "Voltear tablero",
                    "de": "Brett drehen",
                    "nl": "Bord omdraaien"
                },
                {
                    "en": "Roll three dice",
                    "es": "Tirar 3 dados",
                    "de": "Drei Würfel",
                    "nl": "Drie dobbelen"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "The simplest move is rolling one die and advancing that many spaces.",
                "es": "Lo más simple: tira un dado y avanza.",
                "de": "Am einfachsten: würfeln und ziehen.",
                "nl": "Simpelst: gooien en bewegen."
            }
        },
        {
            "question": {
                "en": "What is a roll-again bonus?",
                "es": "¿Qué es un bono de tirada extra?",
                "de": "Was ist ein Bonuswurf?",
                "nl": "Wat is een extra-worp bonus?"
            },
            "options": [
                {
                    "en": "Extra roll from correct answer",
                    "es": "Tirada extra por acierto",
                    "de": "Extra Wurf bei richtiger Antwort",
                    "nl": "Extra worp bij juist antwoord"
                },
                {
                    "en": "Tax",
                    "es": "Impuesto",
                    "de": "Steuer",
                    "nl": "Belasting"
                },
                {
                    "en": "Wedge",
                    "es": "Cuña",
                    "de": "Keil",
                    "nl": "Taartpunt"
                },
                {
                    "en": "Card",
                    "es": "Carta",
                    "de": "Karte",
                    "nl": "Kaart"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Correct answers grant another die roll as a bonus.",
                "es": "Respuestas correctas dan una tirada extra.",
                "de": "Richtige Antworten geben einen Bonuswurf.",
                "nl": "Juiste antwoorden geven een extra worp."
            }
        },
        {
            "question": {
                "en": "Can two players reach the hub at the same time?",
                "es": "¿Pueden dos llegar al centro a la vez?",
                "de": "Können zwei zugleich ins Zentrum?",
                "nl": "Kunnen twee tegelijk in het midden?"
            },
            "options": [
                {
                    "en": "Yes, they share space",
                    "es": "Sí, comparten casilla",
                    "de": "Ja, sie teilen das Feld",
                    "nl": "Ja, ze delen het vak"
                },
                {
                    "en": "No",
                    "es": "No",
                    "de": "Nein",
                    "nl": "Nee"
                },
                {
                    "en": "One wins automatically",
                    "es": "Uno gana automáticamente",
                    "de": "Einer gewinnt sofort",
                    "nl": "Een wint meteen"
                },
                {
                    "en": "Fight",
                    "es": "Luchan",
                    "de": "Kämpfen",
                    "nl": "Vechten"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Multiple tokens can share the hub simultaneously.",
                "es": "Varias fichas pueden compartir el centro.",
                "de": "Mehrere Steine teilen das Zentrum.",
                "nl": "Meerdere pionnen kunnen het midden delen."
            }
        },
        {
            "question": {
                "en": "What if a card is damaged?",
                "es": "¿Y si una carta está dañada?",
                "de": "Was bei beschädigter Karte?",
                "nl": "Wat bij beschadigde kaart?"
            },
            "options": [
                {
                    "en": "Replace or skip it",
                    "es": "Reemplazar o saltar",
                    "de": "Ersetzen oder überspringen",
                    "nl": "Vervangen of overslaan"
                },
                {
                    "en": "Lose turn",
                    "es": "Pierdes turno",
                    "de": "Zug verlieren",
                    "nl": "Beurt verliezen"
                },
                {
                    "en": "End game",
                    "es": "Fin de juego",
                    "de": "Spielende",
                    "nl": "Spel eindigen"
                },
                {
                    "en": "Penalty",
                    "es": "Castigo",
                    "de": "Strafe",
                    "nl": "Straf"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Players can skip a damaged card and draw the next one.",
                "es": "Se puede saltar una carta dañada.",
                "de": "Beschädigte Karten werden übersprungen.",
                "nl": "Beschadigde kaarten worden overgeslagen."
            }
        },
        {
            "question": {
                "en": "What's the common strategy after earning a wedge?",
                "es": "¿Estrategia tras ganar una cuña?",
                "de": "Strategie nach Keilgewinn?",
                "nl": "Strategie na taartpunt winnen?"
            },
            "options": [
                {
                    "en": "Go toward next missing color",
                    "es": "Ir al siguiente color faltante",
                    "de": "Zur nächsten Farbe",
                    "nl": "Naar volgende ontbrekende kleur"
                },
                {
                    "en": "Stop moving",
                    "es": "Parar",
                    "de": "Stehen bleiben",
                    "nl": "Stoppen"
                },
                {
                    "en": "Attack others",
                    "es": "Atacar",
                    "de": "Angreifen",
                    "nl": "Aanvallen"
                },
                {
                    "en": "Spin",
                    "es": "Girar",
                    "de": "Drehen",
                    "nl": "Draaien"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Head next for the HQ of a color you still need.",
                "es": "Ve por la siguiente cuña que falte.",
                "de": "Gehe zur nächsten fehlenden Farbe.",
                "nl": "Ga naar volgende ontbrekende kleur."
            }
        },
        {
            "question": {
                "en": "Can you win on your first turn?",
                "es": "¿Puedes ganar en el primer turno?",
                "de": "Kann man in der ersten Runde gewinnen?",
                "nl": "Kan je in de eerste beurt winnen?"
            },
            "options": [
                {
                    "en": "No, impossible",
                    "es": "No, imposible",
                    "de": "Nein, unmöglich",
                    "nl": "Nee, onmogelijk"
                },
                {
                    "en": "Yes",
                    "es": "Sí",
                    "de": "Ja",
                    "nl": "Ja"
                },
                {
                    "en": "Only with luck",
                    "es": "Con suerte",
                    "de": "Mit Glück",
                    "nl": "Met geluk"
                },
                {
                    "en": "Only L1",
                    "es": "Solo L1",
                    "de": "Nur L1",
                    "nl": "Alleen L1"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "You cannot collect all six wedges in a single turn.",
                "es": "No puedes reunir seis cuñas en un turno.",
                "de": "Man kann nicht alle Keile in einem Zug sammeln.",
                "nl": "Zes taartpunten in één beurt is onmogelijk."
            }
        },
        {
            "question": {
                "en": "Is Trivial Pursuit cooperative?",
                "es": "¿Trivial Pursuit es cooperativo?",
                "de": "Ist Trivial Pursuit kooperativ?",
                "nl": "Is Trivial Pursuit coöperatief?"
            },
            "options": [
                {
                    "en": "No, competitive",
                    "es": "No, competitivo",
                    "de": "Nein, kompetitiv",
                    "nl": "Nee, competitief"
                },
                {
                    "en": "Yes",
                    "es": "Sí",
                    "de": "Ja",
                    "nl": "Ja"
                },
                {
                    "en": "In teams only",
                    "es": "Solo equipos",
                    "de": "Nur im Team",
                    "nl": "Alleen in teams"
                },
                {
                    "en": "Both",
                    "es": "Ambos",
                    "de": "Beides",
                    "nl": "Beide"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Trivial Pursuit is a competitive game — each player tries to win.",
                "es": "Es competitivo, cada uno juega para ganar.",
                "de": "Es ist ein kompetitives Spiel.",
                "nl": "Het is een competitief spel."
            }
        },
        {
            "question": {
                "en": "Can you help a teammate answer?",
                "es": "¿Puedes ayudar a tu compañero?",
                "de": "Darf man dem Teampartner helfen?",
                "nl": "Mag je teamgenoot helpen?"
            },
            "options": [
                {
                    "en": "Yes, team members help each other",
                    "es": "Sí, se ayudan",
                    "de": "Ja, Teamhilfe",
                    "nl": "Ja, teamhulp"
                },
                {
                    "en": "No",
                    "es": "No",
                    "de": "Nein",
                    "nl": "Nee"
                },
                {
                    "en": "Only in L3",
                    "es": "Solo L3",
                    "de": "Nur L3",
                    "nl": "Alleen L3"
                },
                {
                    "en": "Only L5",
                    "es": "Solo L5",
                    "de": "Nur L5",
                    "nl": "Alleen L5"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Teammates can collaborate on answers.",
                "es": "Compañeros pueden ayudarse.",
                "de": "Teammitglieder dürfen helfen.",
                "nl": "Teamgenoten mogen helpen."
            }
        },
        {
            "question": {
                "en": "How is scoring tracked in Trivial Pursuit?",
                "es": "¿Cómo se lleva el marcador?",
                "de": "Wie wird die Punktzahl geführt?",
                "nl": "Hoe wordt de score bijgehouden?"
            },
            "options": [
                {
                    "en": "By wedges in the token",
                    "es": "Por cuñas en la ficha",
                    "de": "Durch Keile im Stein",
                    "nl": "Met taartpunten in pion"
                },
                {
                    "en": "Paper",
                    "es": "Papel",
                    "de": "Papier",
                    "nl": "Papier"
                },
                {
                    "en": "Die",
                    "es": "Con dado",
                    "de": "Würfel",
                    "nl": "Dobbelsteen"
                },
                {
                    "en": "App",
                    "es": "Aplicación",
                    "de": "App",
                    "nl": "App"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Scoring is tracked visually via wedges placed into the player piece.",
                "es": "El marcador se ve por las cuñas en la ficha.",
                "de": "Punkte werden durch Keile im Stein sichtbar.",
                "nl": "Score is te zien aan taartpunten in de pion."
            }
        },
        {
            "question": {
                "en": "Is setup simple or complex?",
                "es": "¿Es fácil o difícil la preparación?",
                "de": "Ist der Aufbau einfach oder komplex?",
                "nl": "Is opzet simpel of moeilijk?"
            },
            "options": [
                {
                    "en": "Simple: board, cards, tokens",
                    "es": "Simple: tablero, cartas, fichas",
                    "de": "Einfach",
                    "nl": "Simpel"
                },
                {
                    "en": "Very complex",
                    "es": "Muy compleja",
                    "de": "Sehr komplex",
                    "nl": "Erg moeilijk"
                },
                {
                    "en": "Needs hours",
                    "es": "Horas",
                    "de": "Stunden",
                    "nl": "Uren"
                },
                {
                    "en": "Needs tools",
                    "es": "Herramientas",
                    "de": "Werkzeuge",
                    "nl": "Gereedschap"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Setup is simple — unfold the board, shuffle cards, place tokens.",
                "es": "La preparación es simple.",
                "de": "Der Aufbau ist einfach.",
                "nl": "De opzet is simpel."
            }
        }
    ]
};
