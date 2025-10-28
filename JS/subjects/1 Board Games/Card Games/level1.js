// Quiz Template - Level 1: Bord spelletjes - Kaartspellen
(function() {
  const level1 = {
    name: {
      en: "Card Games - Beginner",
      es: "Juegos de Cartas - Principiante",
      de: "Kartenspiele - Anfänger",
      nl: "Kaartspellen - Beginner"
    },
    questions: [
      {
        question: {
          en: "How many cards are in a standard deck of playing cards?",
          es: "¿Cuántas cartas hay en una baraja estándar de naipes?",
          de: "Wie viele Karten hat ein Standard-Kartendeck?",
          nl: "Hoeveel kaarten zitten er in een standaard speelkaartendek?"
        },
        options: [
          { en: "48", es: "48", de: "48", nl: "48" },
          { en: "50", es: "50", de: "50", nl: "50" },
          { en: "52", es: "52", de: "52", nl: "52" },
          { en: "54", es: "54", de: "54", nl: "54" }
        ],
        correct: 2,
        explanation: {
          en: "A standard deck has 52 cards: 13 ranks (A, 2-10, J, Q, K) in 4 suits (Hearts, Diamonds, Clubs, Spades), plus usually 2 jokers.",
          es: "Una baraja estándar tiene 52 cartas: 13 rangos (A, 2-10, J, Q, K) en 4 palos (Corazones, Diamantes, Tréboles, Picas), más usualmente 2 comodines.",
          de: "Ein Standard-Deck hat 52 Karten: 13 Ränge (A, 2-10, B, D, K) in 4 Farben (Herz, Karo, Kreuz, Pik), plus normalerweise 2 Joker.",
          nl: "Een standaard deck heeft 52 kaarten: 13 rangen (A, 2-10, B, V, K) in 4 kleuren (Harten, Ruiten, Klaveren, Schoppen), plus meestal 2 jokers."
        }
      },
      {
        question: {
          en: "What are the four suits in a standard deck of cards?",
          es: "¿Cuáles son los cuatro palos en una baraja estándar de cartas?",
          de: "Was sind die vier Farben in einem Standard-Kartendeck?",
          nl: "Wat zijn de vier kleuren in een standaard kaartendek?"
        },
        options: [
          { en: "Hearts, Diamonds, Clubs, Spades", es: "Corazones, Diamantes, Tréboles, Picas", de: "Herz, Karo, Kreuz, Pik", nl: "Harten, Ruiten, Klaveren, Schoppen" },
          { en: "Red, Black, Blue, Green", es: "Rojo, Negro, Azul, Verde", de: "Rot, Schwarz, Blau, Grün", nl: "Rood, Zwart, Blauw, Groen" },
          { en: "Aces, Kings, Queens, Jacks", es: "Ases, Reyes, Reinas, Jotas", de: "Asse, Könige, Damen, Buben", nl: "Azen, Koningen, Vrouwen, Boeren" },
          { en: "Numbers, Face cards, Aces, Jokers", es: "Números, Figuras, Ases, Comodines", de: "Zahlen, Bildkarten, Asse, Joker", nl: "Nummers, Plaatjeskaarten, Azen, Jokers" }
        ],
        correct: 0,
        explanation: {
          en: "The four suits are Hearts (red), Diamonds (red), Clubs (black), and Spades (black). Each suit contains 13 cards.",
          es: "Los cuatro palos son Corazones (rojo), Diamantes (rojo), Tréboles (negro) y Picas (negro). Cada palo contiene 13 cartas.",
          de: "Die vier Farben sind Herz (rot), Karo (rot), Kreuz (schwarz) und Pik (schwarz). Jede Farbe enthält 13 Karten.",
          nl: "De vier kleuren zijn Harten (rood), Ruiten (rood), Klaveren (zwart) en Schoppen (zwart). Elke kleur bevat 13 kaarten."
        }
      },
      {
        question: {
          en: "In poker, what is the highest-ranking hand?",
          es: "En el póker, ¿cuál es la mano de mayor rango?",
          de: "Was ist beim Poker das höchste Blatt?",
          nl: "Wat is bij poker de hoogst gerangschikte hand?"
        },
        options: [
          { en: "Four of a Kind", es: "Póker", de: "Vierling", nl: "Vier van een soort" },
          { en: "Full House", es: "Full House", de: "Full House", nl: "Full House" },
          { en: "Royal Flush", es: "Escalera Real", de: "Royal Flush", nl: "Royal Flush" },
          { en: "Straight Flush", es: "Escalera de Color", de: "Straight Flush", nl: "Straight Flush" }
        ],
        correct: 2,
        explanation: {
          en: "A Royal Flush (A, K, Q, J, 10 of the same suit) is the highest possible hand in poker, being an unbeatable combination.",
          es: "Una Escalera Real (A, K, Q, J, 10 del mismo palo) es la mano más alta posible en el póker, siendo una combinación imbatible.",
          de: "Ein Royal Flush (A, K, D, B, 10 der gleichen Farbe) ist das höchste mögliche Blatt beim Poker und eine unschlagbare Kombination.",
          nl: "Een Royal Flush (A, K, V, B, 10 van dezelfde kleur) is de hoogst mogelijke hand bij poker, een onverslaanbare combinatie."
        }
      },
      {
        question: {
          en: "In Blackjack, what is the goal of the game?",
          es: "En el Blackjack, ¿cuál es el objetivo del juego?",
          de: "Was ist das Ziel beim Blackjack?",
          nl: "Wat is het doel van Blackjack?"
        },
        options: [
          { en: "Get exactly 21 pts", es: "Obtener exactamente 21 puntos", de: "Genau 21 Punkte erreichen", nl: "Precies 21 punten krijgen" },
          { en: "Beat the dealer without going over 21", es: "Vencer al crupier sin pasarse de 21", de: "Den Dealer schlagen ohne über 21 zu gehen", nl: "De dealer verslaan zonder over 21 te gaan" },
          { en: "Get the lowest possible score", es: "Obtener la puntuación más baja posible", de: "Die niedrigste mögliche Punktzahl erreichen", nl: "De laagst mogelijke score krijgen" },
          { en: "Collect all four aces", es: "Recoger los cuatro ases", de: "Alle vier Asse sammeln", nl: "Alle vier azen verzamelen" }
        ],
        correct: 1,
        explanation: {
          en: "The goal in Blackjack is to beat the dealer by getting closer to 21 than the dealer without going over 21 (busting).",
          es: "El objetivo en Blackjack es vencer al crupier acercándose más a 21 que el crupier sin pasarse de 21 (quebrar).",
          de: "Das Ziel beim Blackjack ist es, den Dealer zu schlagen, indem man näher an 21 kommt als der Dealer, ohne über 21 zu gehen (sich zu überkaufen).",
          nl: "Het doel bij Blackjack is de dealer te verslaan door dichter bij 21 te komen dan de dealer zonder over 21 te gaan (dood gaan)."
        }
      },
      {
        question: {
          en: "What is the value of an Ace in Blackjack?",
          es: "¿Cuál es el valor de un As en Blackjack?",
          de: "Welchen Wert hat ein Ass beim Blackjack?",
          nl: "Wat is de waarde van een Aas bij Blackjack?"
        },
        options: [
          { en: "Always 1", es: "Siempre 1", de: "Immer 1", nl: "Altijd 1" },
          { en: "Always 11", es: "Siempre 11", de: "Immer 11", nl: "Altijd 11" },
          { en: "1 or 11", es: "1 u 11", de: "1 oder 11", nl: "1 of 11" },
          { en: "14", es: "14", de: "14", nl: "14" }
        ],
        correct: 2,
        explanation: {
          en: "An Ace can be worth either 1 or 11 in Blackjack, whichever value is most beneficial for the hand without busting.",
          es: "Un As puede valer 1 u 11 en Blackjack, cualquier valor que sea más beneficioso para la mano sin quebrar.",
          de: "Ein Ass kann beim Blackjack entweder 1 oder 11 wert sein, je nachdem welcher Wert für das Blatt vorteilhafter ist, ohne sich zu überkaufen.",
          nl: "Een Aas kan bij Blackjack 1 of 11 waard zijn, welke waarde ook het meest voordelig is voor de hand zonder dood te gaan."
        }
      },
      {
        question: {
          en: "In Bridge, how many players are required?",
          es: "En Bridge, ¿cuántos jugadores se requieren?",
          de: "Wie viele Spieler werden beim Bridge benötigt?",
          nl: "Hoeveel spelers zijn er nodig bij Bridge?"
        },
        options: [
          { en: "2", es: "2", de: "2", nl: "2" },
          { en: "3", es: "3", de: "3", nl: "3" },
          { en: "4", es: "4", de: "4", nl: "4" },
          { en: "6", es: "6", de: "6", nl: "6" }
        ],
        correct: 2,
        explanation: {
          en: "Bridge requires exactly 4 players, sitting in pairs opposite each other (North-South vs East-West partnerships).",
          es: "Bridge requiere exactamente 4 jugadores, sentados en parejas opuestos entre sí (asociaciones Norte-Sur vs Este-Oeste).",
          de: "Bridge benötigt genau 4 Spieler, die paarweise gegenüber sitzen (Nord-Süd vs Ost-West Partnerschaften).",
          nl: "Bridge vereist precies 4 spelers, die in paren tegenover elkaar zitten (Noord-Zuid vs Oost-West partnerschappen)."
        }
      },
      {
        question: {
          en: "What is 'Solitaire' also known as?",
          es: "¿Cómo se conoce también el 'Solitario'?",
          de: "Wie ist 'Solitaire' auch bekannt?",
          nl: "Hoe staat 'Patience' ook bekend?"
        },
        options: [
          { en: "Patience", es: "Paciencia", de: "Patience", nl: "Solitaire" },
          { en: "Single Player", es: "Un Jugador", de: "Einzelspieler", nl: "Eén Speler" },
          { en: "Solo Cards", es: "Cartas Solo", de: "Solo Karten", nl: "Solo Kaarten" },
          { en: "All of the above", es: "Todas las anteriores", de: "Alle oben genannten", nl: "Alle bovenstaande" }
        ],
        correct: 0,
        explanation: {
          en: "Solitaire is also known as Patience, especially in British English. It refers to card games played by one person.",
          es: "El Solitario también se conoce como Paciencia, especialmente en inglés británico. Se refiere a juegos de cartas jugados por una persona.",
          de: "Solitaire ist auch als Patience bekannt, besonders im britischen Englisch. Es bezieht sich auf Kartenspiele, die von einer Person gespielt werden.",
          nl: "Solitaire staat ook bekend als Patience, vooral in het Britse Engels. Het verwijst naar kaartspellen die door één persoon worden gespeeld."
        }
      },
      {
        question: {
          en: "In poker, what does 'bluffing' mean?",
          es: "En el póker, ¿qué significa 'farolear'?",
          de: "Was bedeutet 'bluffen' beim Poker?",
          nl: "Wat betekent 'bluffen' bij poker?"
        },
        options: [
          { en: "Showing your cards to other players", es: "Mostrar tus cartas a otros jugadores", de: "Deine Karten anderen Spielern zeigen", nl: "Je kaarten aan andere spelers tonen" },
          { en: "Betting with a weak hand to deceive opponents", es: "Apostar con una mano débil para engañar a los oponentes", de: "Mit einem schwachen Blatt setzen, um Gegner zu täuschen", nl: "Inzetten met een zwakke hand om tegenstanders te misleiden" },
          { en: "Folding immediately", es: "Retirarse inmediatamente", de: "Sofort aussteigen", nl: "Onmiddellijk passen" },
          { en: "Counting cards", es: "Contar cartas", de: "Karten zählen", nl: "Kaarten tellen" }
        ],
        correct: 1,
        explanation: {
          en: "Bluffing is betting or raising with a weak hand to make opponents think you have a strong hand, causing them to fold better hands.",
          es: "Farolear es apostar o subir con una mano débil para hacer que los oponentes piensen que tienes una mano fuerte, causando que se retiren con mejores manos.",
          de: "Bluffen bedeutet mit einem schwachen Blatt zu setzen oder zu erhöhen, um Gegner glauben zu lassen, dass man ein starkes Blatt hat, wodurch sie bessere Blätter folden.",
          nl: "Bluffen is inzetten of verhogen met een zwakke hand om tegenstanders te laten denken dat je een sterke hand hebt, waardoor ze betere handen laten vallen."
        }
      },
      {
        question: {
          en: "What is a 'trick' in card games like Bridge or Whist?",
          es: "¿Qué es una 'baza' en juegos de cartas como Bridge o Whist?",
          de: "Was ist ein 'Stich' in Kartenspielen wie Bridge oder Whist?",
          nl: "Wat is een 'slag' in kaartspellen zoals Bridge of Whist?"
        },
        options: [
          { en: "A special move to cheat", es: "Un movimiento especial para hacer trampa", de: "Ein spezieller Zug zum Betrügen", nl: "Een speciale zet om vals te spelen" },
          { en: "One round where each player plays one card", es: "Una ronda donde cada jugador juega una carta", de: "Eine Runde, in der jeder Spieler eine Karte spielt", nl: "Een ronde waarin elke speler één kaart speelt" },
          { en: "A winning hand combination", es: "Una combinación de mano ganadora", de: "Eine gewinnende Blattkombination", nl: "Een winnende handcombinatie" },
          { en: "The final round of the game", es: "La ronda final del juego", de: "Die letzte Runde des Spiels", nl: "De laatste ronde van het spel" }
        ],
        correct: 1,
        explanation: {
          en: "A trick is one round of play where each player contributes one card, and the highest card (according to the rules) wins the trick.",
          es: "Una baza es una ronda de juego donde cada jugador contribuye con una carta, y la carta más alta (según las reglas) gana la baza.",
          de: "Ein Stich ist eine Spielrunde, in der jeder Spieler eine Karte beiträgt, und die höchste Karte (nach den Regeln) gewinnt den Stich.",
          nl: "Een slag is één speelronde waarin elke speler één kaart bijdraagt, en de hoogste kaart (volgens de regels) wint de slag."
        }
      },
      {
        question: {
          en: "In many card games, what is the highest-ranking card?",
          es: "En muchos juegos de cartas, ¿cuál es la carta de mayor rango?",
          de: "Welche ist in vielen Kartenspielen die höchste Karte?",
          nl: "Wat is in veel kaartspellen de hoogst gerangschikte kaart?"
        },
        options: [
          { en: "King", es: "Rey", de: "König", nl: "Koning" },
          { en: "Queen", es: "Reina", de: "Dame", nl: "Vrouw" },
          { en: "Ace", es: "As", de: "Ass", nl: "Aas" },
          { en: "Jack", es: "Jota", de: "Bube", nl: "Boer" }
        ],
        correct: 2,
        explanation: {
          en: "In most modern card games, the Ace is the highest-ranking card, though in some games it can be low (worth 1).",
          es: "En la mayoría de juegos de cartas modernos, el As es la carta de mayor rango, aunque en algunos juegos puede ser baja (vale 1).",
          de: "In den meisten modernen Kartenspielen ist das Ass die höchste Karte, obwohl es in manchen Spielen niedrig sein kann (Wert 1).",
          nl: "In de meeste moderne kaartspellen is de Aas de hoogst gerangschikte kaart, hoewel hij in sommige spellen laag kan zijn (waarde 1)."
        }
      },
      {
        question: {
          en: "What is 'Hearts' in card games?",
          es: "¿Qué son los 'Corazones' en los juegos de cartas?",
          de: "Was ist 'Herz' in Kartenspielen?",
          nl: "Wat zijn 'Harten' in kaartspellen?"
        },
        options: [
          { en: "A trick-taking game where you avoid penalty pts", es: "Un juego de bazas donde evitas puntos de penalización", de: "Ein Stichspiel, bei dem man Strafpunkte vermeidet", nl: "Een slagenspel waarin je strafpunten vermijdt" },
          { en: "A poker variant", es: "Una variante del póker", de: "Eine Poker-Variante", nl: "Een pokervariant" },
          { en: "A solitaire game", es: "Un juego de solitario", de: "Ein Solitaire-Spiel", nl: "Een patiencespel" },
          { en: "A bidding game", es: "Un juego de pujas", de: "Ein Bietspiel", nl: "Een biedspel" }
        ],
        correct: 0,
        explanation: {
          en: "Hearts is a trick-taking game where players try to avoid taking hearts (penalty points) and the Queen of Spades (high penalty).",
          es: "Corazones es un juego de bazas donde los jugadores tratan de evitar tomar corazones (puntos de penalización) y la Reina de Picas (alta penalización).",
          de: "Herz ist ein Stichspiel, bei dem Spieler versuchen, Herz-Karten (Strafpunkte) und die Pik-Dame (hohe Strafe) zu vermeiden.",
          nl: "Harten is een slagenspel waarin spelers proberen te voorkomen dat ze harten (strafpunten) en de Schoppen Vrouw (hoge straf) nemen."
        }
      },
      {
        question: {
          en: "In Gin Rummy, what is a 'meld'?",
          es: "En Gin Rummy, ¿qué es una 'combinación'?",
          de: "Was ist eine 'Meldung' beim Gin Rummy?",
          nl: "Wat is een 'meld' bij Gin Rummy?"
        },
        options: [
          { en: "A penalty for going over", es: "Una penalización por pasarse", de: "Eine Strafe für Überziehen", nl: "Een straf voor overgaan" },
          { en: "A set of matching cards (3+ of same rank or consecutive sequence)", es: "Un conjunto de cartas coincidentes (3+ del mismo rango o secuencia consecutiva)", de: "Ein Satz passender Karten (3+ gleichen Ranges oder aufeinanderfolgende Sequenz)", nl: "Een set passende kaarten (3+ van dezelfde rang of opeenvolgende reeks)" },
          { en: "The final card played", es: "La carta final jugada", de: "Die letzte gespielte Karte", nl: "De laatste gespeelde kaart" },
          { en: "A special joker card", es: "Una carta comodín especial", de: "Eine spezielle Joker-Karte", nl: "Een speciale jokerkaart" }
        ],
        correct: 1,
        explanation: {
          en: "A meld in Gin Rummy is a combination of 3 or more cards that are either all the same rank or in consecutive sequence of the same suit.",
          es: "Una combinación en Gin Rummy es una combinación de 3 o más cartas que son todas del mismo rango o en secuencia consecutiva del mismo palo.",
          de: "Eine Meldung beim Gin Rummy ist eine Kombination von 3 oder mehr Karten, die entweder alle den gleichen Rang haben oder in aufeinanderfolgender Sequenz derselben Farbe sind.",
          nl: "Een meld bij Gin Rummy is een combinatie van 3 of meer kaarten die allemaal dezelfde rang hebben of in opeenvolgende volgorde van dezelfde kleur zijn."
        }
      },
      {
        question: {
          en: "What is the most popular variant of Solitaire?",
          es: "¿Cuál es la variante más popular del Solitario?",
          de: "Was ist die beliebteste Solitaire-Variante?",
          nl: "Wat is de populairste variant van Patience?"
        },
        options: [
          { en: "FreeCell", es: "FreeCell", de: "FreeCell", nl: "FreeCell" },
          { en: "Spider", es: "Araña", de: "Spider", nl: "Spider" },
          { en: "Klondike", es: "Klondike", de: "Klondike", nl: "Klondike" },
          { en: "Pyramid", es: "Pirámide", de: "Pyramide", nl: "Piramide" }
        ],
        correct: 2,
        explanation: {
          en: "Klondike is the most well-known solitaire variant, often simply called 'Solitaire'. It's the version included with Windows.",
          es: "Klondike es la variante de solitario más conocida, a menudo simplemente llamada 'Solitario'. Es la versión incluida con Windows.",
          de: "Klondike ist die bekannteste Solitaire-Variante, oft einfach 'Solitaire' genannt. Es ist die Version, die mit Windows mitgeliefert wird.",
          nl: "Klondike is de bekendste patience-variant, vaak gewoon 'Patience' genoemd. Het is de versie die bij Windows wordt geleverd."
        }
      },
      {
        question: {
          en: "In poker, what is a 'straight'?",
          es: "En el póker, ¿qué es una 'escalera'?",
          de: "Was ist eine 'Straße' beim Poker?",
          nl: "Wat is een 'straat' bij poker?"
        },
        options: [
          { en: "Five cards of the same suit", es: "Cinco cartas del mismo palo", de: "Fünf Karten derselben Farbe", nl: "Vijf kaarten van dezelfde kleur" },
          { en: "Five consecutive cards of any suit", es: "Cinco cartas consecutivas de cualquier palo", de: "Fünf aufeinanderfolgende Karten beliebiger Farbe", nl: "Vijf opeenvolgende kaarten van elke kleur" },
          { en: "Three cards of the same rank", es: "Tres cartas del mismo rango", de: "Drei Karten gleichen Ranges", nl: "Drie kaarten van dezelfde rang" },
          { en: "Two pairs of cards", es: "Dos pares de cartas", de: "Zwei Kartenpaare", nl: "Twee paren kaarten" }
        ],
        correct: 1,
        explanation: {
          en: "A straight is five consecutive cards of any suit, such as 5-6-7-8-9. The suits don't have to match.",
          es: "Una escalera son cinco cartas consecutivas de cualquier palo, como 5-6-7-8-9. Los palos no tienen que coincidir.",
          de: "Eine Straße sind fünf aufeinanderfolgende Karten beliebiger Farbe, wie 5-6-7-8-9. Die Farben müssen nicht übereinstimmen.",
          nl: "Een straat zijn vijf opeenvolgende kaarten van elke kleur, zoals 5-6-7-8-9. De kleuren hoeven niet overeen te komen."
        }
      },
      {
        question: {
          en: "What is 'going out' in Rummy games?",
          es: "¿Qué es 'salir' en los juegos de Rummy?",
          de: "Was ist 'ausgehen' bei Rummy-Spielen?",
          nl: "Wat is 'uitgaan' bij Rummy-spellen?"
        },
        options: [
          { en: "Leaving the game early", es: "Salir del juego temprano", de: "Das Spiel früh verlassen", nl: "Het spel vroeg verlaten" },
          { en: "Playing all your cards by forming melds", es: "Jugar todas tus cartas formando combinaciones", de: "Alle Karten durch Meldungen ausspielen", nl: "Al je kaarten spelen door melds te vormen" },
          { en: "Drawing extra cards", es: "Sacar cartas extra", de: "Zusätzliche Karten ziehen", nl: "Extra kaarten trekken" },
          { en: "Skipping your turn", es: "Saltar tu turno", de: "Deinen Zug überspringen", nl: "Je beurt overslaan" }
        ],
        correct: 1,
        explanation: {
          en: "Going out means playing all the cards in your hand by forming valid melds (sets and runs), which wins the round.",
          es: "Salir significa jugar todas las cartas en tu mano formando combinaciones válidas (conjuntos y escaleras), lo que gana la ronda.",
          de: "Ausgehen bedeutet, alle Karten in der Hand durch das Bilden gültiger Meldungen (Sätze und Läufe) zu spielen, was die Runde gewinnt.",
          nl: "Uitgaan betekent alle kaarten in je hand spelen door geldige melds (sets en reeksen) te vormen, wat de ronde wint."
        }
      },
      {
        question: {
          en: "In Whist, how many cards does each player receive?",
          es: "En Whist, ¿cuántas cartas recibe cada jugador?",
          de: "Beim Whist, wie viele Karten erhält jeder Spieler?",
          nl: "Bij Whist, hoeveel kaarten krijgt elke speler?"
        },
        options: [
          { en: "7", es: "7", de: "7", nl: "7" },
          { en: "10", es: "10", de: "10", nl: "10" },
          { en: "13", es: "13", de: "13", nl: "13" },
          { en: "16", es: "16", de: "16", nl: "16" }
        ],
        correct: 2,
        explanation: {
          en: "In Whist, each of the 4 players receives 13 cards, using the entire 52-card deck with no cards left over.",
          es: "En Whist, cada uno de los 4 jugadores recibe 13 cartas, usando toda la baraja de 52 cartas sin cartas sobrantes.",
          de: "Beim Whist erhält jeder der 4 Spieler 13 Karten, wobei das gesamte 52-Karten-Deck verwendet wird, ohne dass Karten übrig bleiben.",
          nl: "Bij Whist krijgt elk van de 4 spelers 13 kaarten, waarbij het hele 52-kaarten deck wordt gebruikt zonder overgebleven kaarten."
        }
      },
      {
        question: {
          en: "What is a 'flush' in poker?",
          es: "¿Qué es un 'color' en el póker?",
          de: "Was ist ein 'Flush' beim Poker?",
          nl: "Wat is een 'flush' bij poker?"
        },
        options: [
          { en: "Five cards in sequence", es: "Cinco cartas en secuencia", de: "Fünf Karten in Folge", nl: "Vijf kaarten op volgorde" },
          { en: "Five cards of the same suit", es: "Cinco cartas del mismo palo", de: "Fünf Karten derselben Farbe", nl: "Vijf kaarten van dezelfde kleur" },
          { en: "Four cards of the same rank", es: "Cuatro cartas del mismo rango", de: "Vier Karten gleichen Ranges", nl: "Vier kaarten van dezelfde rang" },
          { en: "Three pairs", es: "Tres pares", de: "Drei Paare", nl: "Drie paren" }
        ],
        correct: 1,
        explanation: {
          en: "A flush is five cards of the same suit, regardless of their rank or sequence. For example, five hearts of any values.",
          es: "Un color son cinco cartas del mismo palo, independientemente de su rango o secuencia. Por ejemplo, cinco corazones de cualquier valor.",
          de: "Ein Flush sind fünf Karten derselben Farbe, unabhängig von ihrem Rang oder ihrer Reihenfolge. Zum Beispiel fünf Herz beliebiger Werte.",
          nl: "Een flush zijn vijf kaarten van dezelfde kleur, ongeacht hun rang of volgorde. Bijvoorbeeld vijf harten van elke waarde."
        }
      },
      {
        question: {
          en: "What does 'trump' mean in card games?",
          es: "¿Qué significa 'triunfo' en los juegos de cartas?",
          de: "Was bedeutet 'Trumpf' in Kartenspielen?",
          nl: "Wat betekent 'troef' in kaartspellen?"
        },
        options: [
          { en: "The lowest ranking suit", es: "El palo de menor rango", de: "Die niedrigste Farbe", nl: "De laagst gerangschikte kleur" },
          { en: "A suit that beats all other suits", es: "Un palo que vence a todos los otros palos", de: "Eine Farbe, die alle anderen Farben schlägt", nl: "Een kleur die alle andere kleuren verslaat" },
          { en: "The last card played", es: "La última carta jugada", de: "Die zuletzt gespielte Karte", nl: "De laatst gespeelde kaart" },
          { en: "A penalty card", es: "Una carta de penalización", de: "Eine Strafkarte", nl: "Een strafkaart" }
        ],
        correct: 1,
        explanation: {
          en: "Trump is a designated suit that beats all other suits in trick-taking games, regardless of the card's rank.",
          es: "Triunfo es un palo designado que vence a todos los otros palos en juegos de bazas, independientemente del rango de la carta.",
          de: "Trumpf ist eine bestimmte Farbe, die alle anderen Farben in Stichspielen schlägt, unabhängig vom Rang der Karte.",
          nl: "Troef is een aangewezen kleur die alle andere kleuren verslaat in slagenspellen, ongeacht de rang van de kaart."
        }
      },
      {
        question: {
          en: "In Cribbage, what is the 'crib'?",
          es: "En Cribbage, ¿qué es la 'cuna'?",
          de: "Was ist die 'Krippe' beim Cribbage?",
          nl: "Wat is de 'crib' bij Cribbage?"
        },
        options: [
          { en: "The starting position", es: "La posición inicial", de: "Die Startposition", nl: "De startpositie" },
          { en: "An extra hand that belongs to the dealer", es: "Una mano extra que pertenece al repartidor", de: "Ein zusätzliches Blatt, das dem Geber gehört", nl: "Een extra hand die van de deler is" },
          { en: "The discard pile", es: "La pila de descarte", de: "Der Ablagestapel", nl: "De aflegstapel" },
          { en: "The scoring board", es: "El tablero de puntuación", de: "Das Wertungsbrett", nl: "Het scorebord" }
        ],
        correct: 1,
        explanation: {
          en: "The crib is an extra hand formed by discards from all players, which belongs to the dealer and is scored at the end of each round.",
          es: "La cuna es una mano extra formada por descartes de todos los jugadores, que pertenece al repartidor y se puntúa al final de cada ronda.",
          de: "Die Krippe ist ein zusätzliches Blatt, das aus Abwürfen aller Spieler gebildet wird und dem Geber gehört und am Ende jeder Runde gewertet wird.",
          nl: "De crib is een extra hand gevormd door afleggers van alle spelers, die van de deler is en aan het einde van elke ronde wordt gescoord."
        }
      },
      {
        question: {
          en: "What is the difference between 'hard' and 'soft' hands in Blackjack?",
          es: "¿Cuál es la diferencia entre manos 'duras' y 'blandas' en Blackjack?",
          de: "Was ist der Unterschied zwischen 'harten' und 'weichen' Blättern beim Blackjack?",
          nl: "Wat is het verschil tussen 'harde' en 'zachte' handen bij Blackjack?"
        },
        options: [
          { en: "Hard hands have face cards, soft hands don't", es: "Las manos duras tienen figuras, las blandas no", de: "Harte Blätter haben Bildkarten, weiche nicht", nl: "Harde handen hebben plaatjeskaarten, zachte niet" },
          { en: "Soft hands contain an Ace counted as 11", es: "Las manos blandas contienen un As contado como 11", de: "Weiche Blätter enthalten ein Ass, das als 11 gezählt wird", nl: "Zachte handen bevatten een Aas geteld als 11" },
          { en: "Hard hands are over 15, soft hands are under", es: "Las manos duras son más de 15, las blandas menos", de: "Harte Blätter sind über 15, weiche darunter", nl: "Harde handen zijn boven 15, zachte eronder" },
          { en: "There is no difference", es: "No hay diferencia", de: "Es gibt keinen Unterschied", nl: "Er is geen verschil" }
        ],
        correct: 1,
        explanation: {
          en: "A soft hand contains an Ace counted as 11, allowing flexibility. A hard hand either has no Ace or the Ace must be counted as 1.",
          es: "Una mano blanda contiene un As contado como 11, permitiendo flexibilidad. Una mano dura no tiene As o el As debe contarse como 1.",
          de: "Ein weiches Blatt enthält ein Ass, das als 11 gezählt wird, was Flexibilität ermöglicht. Ein hartes Blatt hat entweder kein Ass oder das Ass muss als 1 gezählt werden.",
          nl: "Een zachte hand bevat een Aas geteld als 11, wat flexibiliteit biedt. Een harde hand heeft geen Aas of de Aas moet als 1 worden geteld."
        }
      }
    ]
  };

  // Export for use in the quiz application
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level1;
  } else if (typeof window !== 'undefined') {
    window.level1 = level1;
  }
})();