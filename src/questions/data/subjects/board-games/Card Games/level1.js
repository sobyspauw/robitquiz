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
      },
      {
        question: {
          en: "What are 'face cards' in a deck?",
          es: "¿Qué son las 'figuras' en una baraja?",
          de: "Was sind 'Bildkarten' in einem Deck?",
          nl: "Wat zijn 'plaatjeskaarten' in een deck?"
        },
        options: [
          { en: "Aces only", es: "Solo ases", de: "Nur Asse", nl: "Alleen azen" },
          { en: "Jack, Queen, King", es: "Jota, Reina, Rey", de: "Bube, Dame, König", nl: "Boer, Vrouw, Koning" },
          { en: "All numbered cards", es: "Todas las cartas numeradas", de: "Alle nummerierten Karten", nl: "Alle genummerde kaarten" },
          { en: "Jokers", es: "Comodines", de: "Joker", nl: "Jokers" }
        ],
        correct: 1,
        explanation: {
          en: "Face cards are the Jack, Queen, and King - the three cards in each suit that display human faces. Each is typically worth 10 points in games like Blackjack.",
          es: "Las figuras son la Jota, Reina y Rey - las tres cartas en cada palo que muestran caras humanas. Cada una vale típicamente 10 puntos en juegos como Blackjack.",
          de: "Bildkarten sind Bube, Dame und König - die drei Karten in jeder Farbe, die menschliche Gesichter zeigen. Jede ist typischerweise 10 Punkte wert in Spielen wie Blackjack.",
          nl: "Plaatjeskaarten zijn de Boer, Vrouw en Koning - de drie kaarten in elke kleur die menselijke gezichten tonen. Elk is meestal 10 punten waard in spellen zoals Blackjack."
        }
      },
      {
        question: {
          en: "In Crazy Eights, what happens when you play an 8?",
          es: "En Crazy Eights, ¿qué pasa cuando juegas un 8?",
          de: "Was passiert beim Crazy Eights, wenn man eine 8 spielt?",
          nl: "Wat gebeurt er bij Crazy Eights als je een 8 speelt?"
        },
        options: [
          { en: "You skip the next player", es: "Saltas al siguiente jugador", de: "Du überspringst den nächsten Spieler", nl: "Je slaat de volgende speler over" },
          { en: "You can change the suit", es: "Puedes cambiar el palo", de: "Du kannst die Farbe ändern", nl: "Je kunt de kleur veranderen" },
          { en: "You draw 8 cards", es: "Robas 8 cartas", de: "Du ziehst 8 Karten", nl: "Je trekt 8 kaarten" },
          { en: "You win immediately", es: "Ganas inmediatamente", de: "Du gewinnst sofort", nl: "Je wint onmiddellijk" }
        ],
        correct: 1,
        explanation: {
          en: "In Crazy Eights, playing an 8 allows you to change the suit to any suit you want, giving you strategic control of the game.",
          es: "En Crazy Eights, jugar un 8 te permite cambiar el palo a cualquier palo que quieras, dándote control estratégico del juego.",
          de: "Beim Crazy Eights ermöglicht das Spielen einer 8, die Farbe zu jeder gewünschten Farbe zu ändern, was strategische Kontrolle über das Spiel gibt.",
          nl: "Bij Crazy Eights kun je door een 8 te spelen de kleur veranderen naar elke kleur die je wilt, wat je strategische controle over het spel geeft."
        }
      },
      {
        question: {
          en: "How many red cards are in a standard deck?",
          es: "¿Cuántas cartas rojas hay en una baraja estándar?",
          de: "Wie viele rote Karten hat ein Standard-Deck?",
          nl: "Hoeveel rode kaarten zitten er in een standaard deck?"
        },
        options: [
          { en: "13", es: "13", de: "13", nl: "13" },
          { en: "26", es: "26", de: "26", nl: "26" },
          { en: "39", es: "39", de: "39", nl: "39" },
          { en: "52", es: "52", de: "52", nl: "52" }
        ],
        correct: 1,
        explanation: {
          en: "There are 26 red cards in a standard deck: 13 Hearts and 13 Diamonds. The other 26 cards are black (Clubs and Spades).",
          es: "Hay 26 cartas rojas en una baraja estándar: 13 Corazones y 13 Diamantes. Las otras 26 cartas son negras (Tréboles y Picas).",
          de: "Es gibt 26 rote Karten in einem Standard-Deck: 13 Herz und 13 Karo. Die anderen 26 Karten sind schwarz (Kreuz und Pik).",
          nl: "Er zijn 26 rode kaarten in een standaard deck: 13 Harten en 13 Ruiten. De andere 26 kaarten zijn zwart (Klaveren en Schoppen)."
        }
      },
      {
        question: {
          en: "What is 'doubling down' in Blackjack?",
          es: "¿Qué es 'doblar' en Blackjack?",
          de: "Was ist 'Verdoppeln' beim Blackjack?",
          nl: "Wat is 'verdubbelen' bij Blackjack?"
        },
        options: [
          { en: "Playing two hands at once", es: "Jugar dos manos a la vez", de: "Zwei Hände gleichzeitig spielen", nl: "Twee handen tegelijk spelen" },
          { en: "Doubling your bet and taking one more card", es: "Doblar tu apuesta y tomar una carta más", de: "Deinen Einsatz verdoppeln und eine weitere Karte nehmen", nl: "Je inzet verdubbelen en één kaart meer nemen" },
          { en: "Betting twice as much on the next hand", es: "Apostar el doble en la siguiente mano", de: "Das Doppelte in der nächsten Hand setzen", nl: "Twee keer zoveel inzetten op de volgende hand" },
          { en: "Splitting a pair of cards", es: "Dividir un par de cartas", de: "Ein Paar Karten teilen", nl: "Een paar kaarten splitsen" }
        ],
        correct: 1,
        explanation: {
          en: "Doubling down means doubling your original bet in exchange for receiving exactly one more card and then standing. It's typically done with strong starting hands.",
          es: "Doblar significa doblar tu apuesta original a cambio de recibir exactamente una carta más y luego plantarse. Típicamente se hace con manos iniciales fuertes.",
          de: "Verdoppeln bedeutet, deinen ursprünglichen Einsatz zu verdoppeln, im Austausch dafür genau eine weitere Karte zu erhalten und dann stehen zu bleiben. Es wird typischerweise mit starken Starthänden gemacht.",
          nl: "Verdubbelen betekent je oorspronkelijke inzet verdubbelen in ruil voor het ontvangen van precies één kaart meer en dan passen. Het wordt meestal gedaan met sterke beginhanden."
        }
      },
      {
        question: {
          en: "In Go Fish, what do you ask other players?",
          es: "En Go Fish, ¿qué preguntas a otros jugadores?",
          de: "Was fragt man beim Go Fish andere Spieler?",
          nl: "Wat vraag je bij Go Fish aan andere spelers?"
        },
        options: [
          { en: "If they have a specific rank you're looking for", es: "Si tienen un rango específico que buscas", de: "Ob sie einen bestimmten Rang haben, den du suchst", nl: "Of ze een specifieke rang hebben die je zoekt" },
          { en: "Their total number of cards", es: "Su número total de cartas", de: "Ihre Gesamtzahl an Karten", nl: "Hun totaal aantal kaarten" },
          { en: "What suit they prefer", es: "Qué palo prefieren", de: "Welche Farbe sie bevorzugen", nl: "Welke kleur ze prefereren" },
          { en: "If they want to trade cards", es: "Si quieren intercambiar cartas", de: "Ob sie Karten tauschen möchten", nl: "Of ze kaarten willen ruilen" }
        ],
        correct: 0,
        explanation: {
          en: "In Go Fish, you ask other players if they have cards of a specific rank (like 'Do you have any 7s?'). If they do, they must give them to you.",
          es: "En Go Fish, preguntas a otros jugadores si tienen cartas de un rango específico (como '¿Tienes algún 7?'). Si lo tienen, deben dártelas.",
          de: "Beim Go Fish fragt man andere Spieler, ob sie Karten eines bestimmten Ranges haben (wie 'Hast du irgendwelche 7en?'). Wenn ja, müssen sie diese abgeben.",
          nl: "Bij Go Fish vraag je andere spelers of ze kaarten van een specifieke rang hebben (zoals 'Heb je zevens?'). Als ze die hebben, moeten ze ze aan jou geven."
        }
      },
      {
        question: {
          en: "What is a 'full house' in poker?",
          es: "¿Qué es un 'full house' en el póker?",
          de: "Was ist ein 'Full House' beim Poker?",
          nl: "Wat is een 'full house' bij poker?"
        },
        options: [
          { en: "Five cards of same suit", es: "Cinco cartas del mismo palo", de: "Fünf Karten derselben Farbe", nl: "Vijf kaarten van dezelfde kleur" },
          { en: "Three of a kind plus a pair", es: "Trío más un par", de: "Drilling plus ein Paar", nl: "Drie van een soort plus een paar" },
          { en: "Four of a kind", es: "Póker", de: "Vierling", nl: "Vier van een soort" },
          { en: "All face cards", es: "Todas figuras", de: "Alle Bildkarten", nl: "Alle plaatjeskaarten" }
        ],
        correct: 1,
        explanation: {
          en: "A full house consists of three cards of one rank and two cards of another rank, such as three 8s and two Kings.",
          es: "Un full house consiste en tres cartas de un rango y dos cartas de otro rango, como tres 8 y dos Reyes.",
          de: "Ein Full House besteht aus drei Karten eines Ranges und zwei Karten eines anderen Ranges, wie drei 8en und zwei Könige.",
          nl: "Een full house bestaat uit drie kaarten van één rang en twee kaarten van een andere rang, zoals drie 8'en en twee Koningen."
        }
      },
      {
        question: {
          en: "In War, what happens when both players play the same rank card?",
          es: "En War, ¿qué pasa cuando ambos jugadores juegan la misma carta de rango?",
          de: "Was passiert beim War, wenn beide Spieler dieselbe Rangkarte spielen?",
          de: "Wat gebeurt er bij War als beide spelers dezelfde rangkaart spelen?"
        },
        options: [
          { en: "The game ends", es: "El juego termina", de: "Das Spiel endet", nl: "Het spel eindigt" },
          { en: "Both players draw a new card", es: "Ambos jugadores roban una nueva carta", de: "Beide Spieler ziehen eine neue Karte", nl: "Beide spelers trekken een nieuwe kaart" },
          { en: "A 'war' happens with face-down and face-up cards", es: "Ocurre una 'guerra' con cartas boca abajo y boca arriba", de: "Es gibt einen 'Krieg' mit verdeckten und offenen Karten", nl: "Er gebeurt een 'oorlog' met gedekte en open kaarten" },
          { en: "The suit determines the winner", es: "El palo determina el ganador", de: "Die Farbe bestimmt den Gewinner", nl: "De kleur bepaalt de winnaar" }
        ],
        correct: 2,
        explanation: {
          en: "When both players play cards of equal rank, a 'war' occurs: each player places cards face-down, then face-up, and the higher face-up card wins all the cards.",
          es: "Cuando ambos jugadores juegan cartas del mismo rango, ocurre una 'guerra': cada jugador coloca cartas boca abajo, luego boca arriba, y la carta boca arriba más alta gana todas las cartas.",
          de: "Wenn beide Spieler Karten gleichen Ranges spielen, gibt es einen 'Krieg': Jeder Spieler legt Karten verdeckt, dann offen, und die höhere offene Karte gewinnt alle Karten.",
          nl: "Als beide spelers kaarten van gelijke rang spelen, gebeurt er een 'oorlog': elke speler legt kaarten gedekt neer, dan open, en de hogere open kaart wint alle kaarten."
        }
      },
      {
        question: {
          en: "What does 'following suit' mean in card games?",
          es: "¿Qué significa 'seguir el palo' en juegos de cartas?",
          de: "Was bedeutet 'Farbe bedienen' in Kartenspielen?",
          nl: "Wat betekent 'kleur volgen' in kaartspellen?"
        },
        options: [
          { en: "Playing a card of the same suit as led", es: "Jugar una carta del mismo palo que la jugada", de: "Eine Karte derselben Farbe wie ausgespielt spielen", nl: "Een kaart van dezelfde kleur spelen als uitgespeeld" },
          { en: "Copying the previous player's action", es: "Copiar la acción del jugador anterior", de: "Die Aktion des vorherigen Spielers kopieren", nl: "De actie van de vorige speler kopiëren" },
          { en: "Playing face cards only", es: "Jugar solo figuras", de: "Nur Bildkarten spielen", nl: "Alleen plaatjeskaarten spelen" },
          { en: "Matching the card rank", es: "Coincidir con el rango de la carta", de: "Den Kartenrang angleichen", nl: "De kaartrang matchen" }
        ],
        correct: 0,
        explanation: {
          en: "Following suit means playing a card of the same suit that was led (first played in the trick). Most trick-taking games require you to follow suit if possible.",
          es: "Seguir el palo significa jugar una carta del mismo palo que se jugó primero (en la baza). La mayoría de juegos de bazas requieren seguir el palo si es posible.",
          de: "Farbe bedienen bedeutet, eine Karte derselben Farbe zu spielen, die ausgespielt wurde (zuerst im Stich gespielt). Die meisten Stichspiele erfordern dies, wenn möglich.",
          nl: "Kleur volgen betekent een kaart van dezelfde kleur spelen die is uitgespeeld (eerst gespeeld in de slag). De meeste slagenspellen vereisen dat je kleur volgt als het kan."
        }
      },
      {
        question: {
          en: "In Old Maid, what is the goal of the game?",
          es: "En Old Maid, ¿cuál es el objetivo del juego?",
          de: "Was ist das Ziel beim Old Maid?",
          nl: "Wat is het doel van Old Maid?"
        },
        options: [
          { en: "Collect all the Queens", es: "Recoger todas las Reinas", de: "Alle Damen sammeln", nl: "Alle Vrouwen verzamelen" },
          { en: "Avoid being left with the unmatchable card", es: "Evitar quedarte con la carta sin pareja", de: "Vermeiden, mit der unpassenden Karte übrig zu bleiben", nl: "Voorkomen dat je met de niet-matchbare kaart overblijft" },
          { en: "Make as many pairs as possible", es: "Hacer tantos pares como sea posible", de: "So viele Paare wie möglich bilden", nl: "Zoveel mogelijk paren maken" },
          { en: "Get rid of all red cards first", es: "Deshacerse primero de todas las cartas rojas", de: "Alle roten Karten zuerst loswerden", nl: "Eerst alle rode kaarten kwijtraken" }
        ],
        correct: 1,
        explanation: {
          en: "In Old Maid, players match pairs and discard them. The goal is to avoid being the player left holding the unmatchable 'Old Maid' card at the end.",
          es: "En Old Maid, los jugadores emparejan pares y los descartan. El objetivo es evitar ser el jugador que se queda con la carta 'Old Maid' sin pareja al final.",
          de: "Beim Old Maid bilden Spieler Paare und legen sie ab. Das Ziel ist es, nicht der Spieler zu sein, der am Ende die unpassende 'Old Maid'-Karte hält.",
          nl: "Bij Old Maid matchen spelers paren en leggen ze af. Het doel is te voorkomen dat je de speler bent die aan het einde met de niet-matchbare 'Old Maid'-kaart overblijft."
        }
      },
      {
        question: {
          en: "What is 'splitting' in Blackjack?",
          es: "¿Qué es 'dividir' en Blackjack?",
          de: "Was ist 'Teilen' beim Blackjack?",
          nl: "Wat is 'splitsen' bij Blackjack?"
        },
        options: [
          { en: "Dividing your bet between two dealers", es: "Dividir tu apuesta entre dos crupieres", de: "Deinen Einsatz auf zwei Dealer aufteilen", nl: "Je inzet verdelen over twee dealers" },
          { en: "Separating a pair into two hands", es: "Separar un par en dos manos", de: "Ein Paar in zwei Hände teilen", nl: "Een paar in twee handen splitsen" },
          { en: "Taking half your bet back", es: "Recuperar la mitad de tu apuesta", de: "Die Hälfte deines Einsatzes zurücknehmen", nl: "De helft van je inzet terugnemen" },
          { en: "Sharing cards with another player", es: "Compartir cartas con otro jugador", de: "Karten mit einem anderen Spieler teilen", nl: "Kaarten delen met een andere speler" }
        ],
        correct: 1,
        explanation: {
          en: "Splitting allows you to separate a pair of cards with the same rank into two separate hands, each with its own bet, giving you two chances to beat the dealer.",
          es: "Dividir te permite separar un par de cartas del mismo rango en dos manos separadas, cada una con su propia apuesta, dándote dos oportunidades de vencer al crupier.",
          de: "Teilen ermöglicht es dir, ein Paar Karten gleichen Ranges in zwei separate Hände zu teilen, jede mit ihrem eigenen Einsatz, was dir zwei Chancen gibt, den Dealer zu schlagen.",
          nl: "Splitsen stelt je in staat een paar kaarten van dezelfde rang te scheiden in twee aparte handen, elk met hun eigen inzet, wat je twee kansen geeft om de dealer te verslaan."
        }
      },
      {
        question: {
          en: "In Spades, what is the trump suit?",
          es: "En Spades, ¿cuál es el palo de triunfo?",
          de: "Was ist die Trumpffarbe beim Spades?",
          nl: "Wat is de troefkleur bij Spades?"
        },
        options: [
          { en: "Hearts", es: "Corazones", de: "Herz", nl: "Harten" },
          { en: "Diamonds", es: "Diamantes", de: "Karo", nl: "Ruiten" },
          { en: "Spades", es: "Picas", de: "Pik", nl: "Schoppen" },
          { en: "It varies each round", es: "Varía cada ronda", de: "Es variiert jede Runde", nl: "Het varieert elke ronde" }
        ],
        correct: 2,
        explanation: {
          en: "In Spades, the Spades suit is always trump, meaning any Spade card beats any card of another suit regardless of rank.",
          es: "En Spades, el palo de Picas es siempre triunfo, lo que significa que cualquier carta de Picas vence cualquier carta de otro palo independientemente del rango.",
          de: "Beim Spades ist Pik immer Trumpf, was bedeutet, dass jede Pik-Karte jede Karte einer anderen Farbe schlägt, unabhängig vom Rang.",
          nl: "Bij Spades is Schoppen altijd troef, wat betekent dat elke Schoppen kaart elke kaart van een andere kleur verslaat, ongeacht de rang."
        }
      },
      {
        question: {
          en: "What is a 'pair' in poker?",
          es: "¿Qué es un 'par' en el póker?",
          de: "Was ist ein 'Paar' beim Poker?",
          nl: "Wat is een 'paar' bij poker?"
        },
        options: [
          { en: "Two cards of the same suit", es: "Dos cartas del mismo palo", de: "Zwei Karten derselben Farbe", nl: "Twee kaarten van dezelfde kleur" },
          { en: "Two cards of the same rank", es: "Dos cartas del mismo rango", de: "Zwei Karten gleichen Ranges", nl: "Twee kaarten van dezelfde rang" },
          { en: "Two consecutive cards", es: "Dos cartas consecutivas", de: "Zwei aufeinanderfolgende Karten", nl: "Twee opeenvolgende kaarten" },
          { en: "Two face cards", es: "Dos figuras", de: "Zwei Bildkarten", nl: "Twee plaatjeskaarten" }
        ],
        correct: 1,
        explanation: {
          en: "A pair consists of two cards of the same rank, such as two 7s or two Queens. It's the lowest-ranking hand that contains matching cards.",
          es: "Un par consiste en dos cartas del mismo rango, como dos 7 o dos Reinas. Es la mano de menor rango que contiene cartas coincidentes.",
          de: "Ein Paar besteht aus zwei Karten gleichen Ranges, wie zwei 7en oder zwei Damen. Es ist das niedrigste Blatt, das passende Karten enthält.",
          nl: "Een paar bestaat uit twee kaarten van dezelfde rang, zoals twee 7'en of twee Vrouwen. Het is de laagst gerangschikte hand die matchende kaarten bevat."
        }
      },
      {
        question: {
          en: "In Uno, what type of deck is used?",
          es: "En Uno, ¿qué tipo de baraja se usa?",
          de: "Welche Art von Deck wird beim Uno verwendet?",
          nl: "Welk type deck wordt gebruikt bij Uno?"
        },
        options: [
          { en: "Standard 52-card deck", es: "Baraja estándar de 52 cartas", de: "Standard 52-Karten-Deck", nl: "Standaard 52-kaarten deck" },
          { en: "Special Uno deck with colored number/action cards", es: "Baraja especial de Uno con cartas de número/acción de colores", de: "Spezielles Uno-Deck mit farbigen Zahlen-/Aktionskarten", nl: "Speciaal Uno deck met gekleurde nummer/actie kaarten" },
          { en: "Tarot cards", es: "Cartas de tarot", de: "Tarot-Karten", nl: "Tarotkaarten" },
          { en: "Playing cards without face cards", es: "Naipes sin figuras", de: "Spielkarten ohne Bildkarten", nl: "Speelkaarten zonder plaatjeskaarten" }
        ],
        correct: 1,
        explanation: {
          en: "Uno uses a special deck with 108 cards featuring four colors (red, blue, green, yellow), numbers 0-9, and special action cards like Skip, Reverse, and Draw Two.",
          es: "Uno usa una baraja especial con 108 cartas con cuatro colores (rojo, azul, verde, amarillo), números 0-9 y cartas de acción especiales como Saltar, Reversa y Robar Dos.",
          de: "Uno verwendet ein spezielles Deck mit 108 Karten in vier Farben (rot, blau, grün, gelb), Zahlen 0-9 und speziellen Aktionskarten wie Aussetzen, Richtungswechsel und Zwei ziehen.",
          nl: "Uno gebruikt een speciaal deck met 108 kaarten met vier kleuren (rood, blauw, groen, geel), nummers 0-9 en speciale actiekaarten zoals Sla Over, Omdraaien en Trek Twee."
        }
      },
      {
        question: {
          en: "What is 'insurance' in Blackjack?",
          es: "¿Qué es el 'seguro' en Blackjack?",
          de: "Was ist 'Versicherung' beim Blackjack?",
          nl: "Wat is 'verzekering' bij Blackjack?"
        },
        options: [
          { en: "A side bet when dealer shows an Ace", es: "Una apuesta lateral cuando el crupier muestra un As", de: "Eine Nebenwette, wenn der Dealer ein Ass zeigt", nl: "Een zijweddenschap wanneer de dealer een Aas toont" },
          { en: "Protection against losing your cards", es: "Protección contra perder tus cartas", de: "Schutz gegen den Verlust deiner Karten", nl: "Bescherming tegen het verliezen van je kaarten" },
          { en: "Guarantee you won't bust", es: "Garantía de que no te pasarás", de: "Garantie, dass du nicht überkaufst", nl: "Garantie dat je niet dood gaat" },
          { en: "A refund of your original bet", es: "Un reembolso de tu apuesta original", de: "Eine Rückerstattung deines ursprünglichen Einsatzes", nl: "Een terugbetaling van je oorspronkelijke inzet" }
        ],
        correct: 0,
        explanation: {
          en: "Insurance is a side bet offered when the dealer's face-up card is an Ace. You bet that the dealer has Blackjack, and if correct, you win 2:1 on the insurance bet.",
          es: "El seguro es una apuesta lateral ofrecida cuando la carta boca arriba del crupier es un As. Apuestas que el crupier tiene Blackjack, y si es correcto, ganas 2:1 en la apuesta de seguro.",
          de: "Versicherung ist eine Nebenwette, die angeboten wird, wenn die offene Karte des Dealers ein Ass ist. Du wettest, dass der Dealer Blackjack hat, und wenn richtig, gewinnst du 2:1 auf die Versicherungswette.",
          nl: "Verzekering is een zijweddenschap aangeboden wanneer de open kaart van de dealer een Aas is. Je wedt dat de dealer Blackjack heeft, en als dit klopt, win je 2:1 op de verzekeringsweddenschap."
        }
      },
      {
        question: {
          en: "In Rummy, what is a 'run'?",
          es: "En Rummy, ¿qué es una 'escalera'?",
          de: "Was ist ein 'Lauf' beim Rummy?",
          nl: "Wat is een 'run' bij Rummy?"
        },
        options: [
          { en: "Three or more cards of same rank", es: "Tres o más cartas del mismo rango", de: "Drei oder mehr Karten gleichen Ranges", nl: "Drie of meer kaarten van dezelfde rang" },
          { en: "Three or more consecutive cards of same suit", es: "Tres o más cartas consecutivas del mismo palo", de: "Drei oder mehr aufeinanderfolgende Karten derselben Farbe", nl: "Drie of meer opeenvolgende kaarten van dezelfde kleur" },
          { en: "All face cards", es: "Todas las figuras", de: "Alle Bildkarten", nl: "Alle plaatjeskaarten" },
          { en: "Any five cards", es: "Cualquier cinco cartas", de: "Beliebige fünf Karten", nl: "Elke vijf kaarten" }
        ],
        correct: 1,
        explanation: {
          en: "A run (also called a sequence) in Rummy is three or more consecutive cards of the same suit, such as 4-5-6 of Hearts.",
          es: "Una escalera (también llamada secuencia) en Rummy son tres o más cartas consecutivas del mismo palo, como 4-5-6 de Corazones.",
          de: "Ein Lauf (auch Sequenz genannt) beim Rummy sind drei oder mehr aufeinanderfolgende Karten derselben Farbe, wie 4-5-6 Herz.",
          nl: "Een run (ook wel reeks genoemd) bij Rummy zijn drie of meer opeenvolgende kaarten van dezelfde kleur, zoals 4-5-6 van Harten."
        }
      },
      {
        question: {
          en: "What does 'busting' mean in Blackjack?",
          es: "¿Qué significa 'quebrar' en Blackjack?",
          de: "Was bedeutet 'sich überkaufen' beim Blackjack?",
          nl: "Wat betekent 'dood gaan' bij Blackjack?"
        },
        options: [
          { en: "Getting exactly 21", es: "Obtener exactamente 21", de: "Genau 21 erreichen", nl: "Precies 21 krijgen" },
          { en: "Going over 21", es: "Pasarse de 21", de: "Über 21 gehen", nl: "Over 21 gaan" },
          { en: "Tying with the dealer", es: "Empatar con el crupier", de: "Mit dem Dealer gleichstehen", nl: "Gelijkspelen met de dealer" },
          { en: "Running out of cards", es: "Quedarse sin cartas", de: "Keine Karten mehr haben", nl: "Zonder kaarten komen te zitten" }
        ],
        correct: 1,
        explanation: {
          en: "Busting occurs when your hand total exceeds 21, which means you automatically lose the round, regardless of what the dealer has.",
          es: "Quebrar ocurre cuando el total de tu mano excede 21, lo que significa que pierdes automáticamente la ronda, independientemente de lo que tenga el crupier.",
          de: "Sich überkaufen tritt auf, wenn die Gesamtsumme deiner Hand 21 übersteigt, was bedeutet, dass du die Runde automatisch verlierst, unabhängig davon, was der Dealer hat.",
          nl: "Dood gaan treedt op wanneer je handtotaal 21 overschrijdt, wat betekent dat je automatisch de ronde verliest, ongeacht wat de dealer heeft."
        }
      },
      {
        question: {
          en: "In Bridge, what are the two phases of play?",
          es: "En Bridge, ¿cuáles son las dos fases de juego?",
          de: "Was sind die zwei Spielphasen beim Bridge?",
          nl: "Wat zijn de twee speelfasen bij Bridge?"
        },
        options: [
          { en: "Dealing and discarding", es: "Repartir y descartar", de: "Geben und Ablegen", nl: "Delen en afleggen" },
          { en: "Bidding and playing", es: "Pujar y jugar", de: "Bieten und Spielen", nl: "Bieden en spelen" },
          { en: "Shuffling and sorting", es: "Barajar y ordenar", de: "Mischen und Sortieren", nl: "Schudden en sorteren" },
          { en: "Drawing and melding", es: "Robar y combinar", de: "Ziehen und Melden", nl: "Trekken en melden" }
        ],
        correct: 1,
        explanation: {
          en: "Bridge has two main phases: bidding (where partnerships bid to determine the contract) and playing (where cards are played in tricks to fulfill or defeat the contract).",
          es: "Bridge tiene dos fases principales: pujar (donde las parejas pujan para determinar el contrato) y jugar (donde se juegan cartas en bazas para cumplir o derrotar el contrato).",
          de: "Bridge hat zwei Hauptphasen: Bieten (wo Partnerschaften bieten, um den Kontrakt zu bestimmen) und Spielen (wo Karten in Stichen gespielt werden, um den Kontrakt zu erfüllen oder zu besiegen).",
          nl: "Bridge heeft twee hoofdfasen: bieden (waarbij partnerschappen bieden om het contract te bepalen) en spelen (waarbij kaarten in slagen worden gespeeld om het contract te vervullen of te verslaan)."
        }
      },
      {
        question: {
          en: "What is the traditional name for the Jack of Spades and Jack of Hearts?",
          es: "¿Cuál es el nombre tradicional para la Jota de Picas y la Jota de Corazones?",
          de: "Wie ist der traditionelle Name für Pik-Bube und Herz-Bube?",
          nl: "Wat is de traditionele naam voor de Schoppen Boer en Harten Boer?"
        },
        options: [
          { en: "The Royal Jacks", es: "Los Jotas Reales", de: "Die Königlichen Buben", nl: "De Koninklijke Boeren" },
          { en: "The One-Eyed Jacks", es: "Las Jotas de Un Ojo", de: "Die Einäugigen Buben", nl: "De Eenogige Boeren" },
          { en: "The Twin Jacks", es: "Los Jotas Gemelos", de: "Die Zwillingsbuben", nl: "De Tweeling Boeren" },
          { en: "The Noble Jacks", es: "Los Jotas Nobles", de: "Die Edlen Buben", nl: "De Nobele Boeren" }
        ],
        correct: 1,
        explanation: {
          en: "The Jack of Spades and Jack of Hearts are called 'One-Eyed Jacks' because in traditional card designs, they are shown in profile with only one eye visible.",
          es: "La Jota de Picas y la Jota de Corazones se llaman 'Jotas de Un Ojo' porque en los diseños tradicionales de cartas, se muestran de perfil con solo un ojo visible.",
          de: "Pik-Bube und Herz-Bube werden 'Einäugige Buben' genannt, weil sie in traditionellen Kartendesigns im Profil gezeigt werden mit nur einem sichtbaren Auge.",
          nl: "De Schoppen Boer en Harten Boer worden 'Eenogige Boeren' genoemd omdat ze in traditionele kaartontwerpen in profiel worden getoond met slechts één zichtbaar oog."
        }
      },
      {
        question: {
          en: "In Texas Hold'em poker, how many community cards are dealt?",
          es: "En el póker Texas Hold'em, ¿cuántas cartas comunitarias se reparten?",
          de: "Wie viele Gemeinschaftskarten werden beim Texas Hold'em Poker ausgeteilt?",
          nl: "Hoeveel gemeenschapskaarten worden er gedeeld bij Texas Hold'em poker?"
        },
        options: [
          { en: "3", es: "3", de: "3", nl: "3" },
          { en: "4", es: "4", de: "4", nl: "4" },
          { en: "5", es: "5", de: "5", nl: "5" },
          { en: "7", es: "7", de: "7", nl: "7" }
        ],
        correct: 2,
        explanation: {
          en: "In Texas Hold'em, five community cards are dealt face-up: three on the 'flop', one on the 'turn', and one on the 'river'. Players use these with their two hole cards.",
          es: "En Texas Hold'em, se reparten cinco cartas comunitarias boca arriba: tres en el 'flop', una en el 'turn' y una en el 'river'. Los jugadores las usan con sus dos cartas de mano.",
          de: "Beim Texas Hold'em werden fünf Gemeinschaftskarten offen ausgeteilt: drei beim 'Flop', eine beim 'Turn' und eine beim 'River'. Spieler verwenden diese mit ihren zwei verdeckten Karten.",
          nl: "Bij Texas Hold'em worden vijf gemeenschapskaarten open gedeeld: drie bij de 'flop', één bij de 'turn' en één bij de 'river'. Spelers gebruiken deze met hun twee hole kaarten."
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