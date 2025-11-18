// Quiz Template - Level 2: Board Games - Risk
(function() {
  const level2 = {
    name: {
      en: "Risk - Basic Strategy",
      es: "Risk - Estrategia Básica",
      de: "Risk - Grundstrategie",
      nl: "Risk - Basisstrategie"
    },
    questions: [
      {
        question: {
          en: "How many armies do you get for trading in 3 matching cards the first time?",
          es: "¿Cuántos ejércitos obtienes por canjear 3 cartas iguales la primera vez?",
          de: "Wie viele Armeen bekommst du beim ersten Eintauschen von 3 passenden Karten?",
          nl: "Hoeveel legers krijg je voor het inruilen van 3 gelijke kaarten de eerste keer?"
        },
        options: [
          { en: "4 armies", es: "4 ejércitos", de: "4 Armeen", nl: "4 legers" },
          { en: "6 armies", es: "6 ejércitos", de: "6 Armeen", nl: "6 legers" },
          { en: "8 armies", es: "8 ejércitos", de: "8 Armeen", nl: "8 legers" },
          { en: "10 armies", es: "10 ejércitos", de: "10 Armeen", nl: "10 legers" }
        ],
        correct: 0,
        explanation: {
          en: "The first card trade gives 4 armies, the second gives 6, the third gives 8, and it continues increasing by 2 or following game variant rules.",
          es: "El primer canje de cartas da 4 ejércitos, el segundo da 6, el tercero da 8, y continúa aumentando en 2 o siguiendo las reglas variantes del juego.",
          de: "Der erste Kartentausch gibt 4 Armeen, der zweite gibt 6, der dritte gibt 8, und es steigt weiter um 2 oder folgt den Spielvarianten-Regeln.",
          nl: "De eerste kaartenruil geeft 4 legers, de tweede geeft 6, de derde geeft 8, en het blijft toenemen met 2 of volgens spelvariantregels."
        }
      },
      {
        question: {
          en: "What is South America's continent bonus?",
          es: "¿Cuál es el bonus de continente de América del Sur?",
          de: "Was ist der Kontinentbonus von Südamerika?",
          nl: "Wat is de continentbonus van Zuid-Amerika?"
        },
        options: [
          { en: "+2 armies", es: "+2 ejércitos", de: "+2 Armeen", nl: "+2 legers" },
          { en: "+3 armies", es: "+3 ejércitos", de: "+3 Armeen", nl: "+3 legers" },
          { en: "+4 armies", es: "+4 ejércitos", de: "+4 Armeen", nl: "+4 legers" },
          { en: "+5 armies", es: "+5 ejércitos", de: "+5 Armeen", nl: "+5 legers" }
        ],
        correct: 0,
        explanation: {
          en: "South America gives +2 armies per turn. It has 4 territories and only 2 entry points (from North America and Africa), making it relatively easy to defend.",
          es: "América del Sur da +2 ejércitos por turno. Tiene 4 territorios y solo 2 puntos de entrada (desde América del Norte y África), lo que la hace relativamente fácil de defender.",
          de: "Südamerika gibt +2 Armeen pro Runde. Es hat 4 Gebiete und nur 2 Eingangspunkte (von Nordamerika und Afrika), was es relativ einfach zu verteidigen macht.",
          nl: "Zuid-Amerika geeft +2 legers per beurt. Het heeft 4 gebieden en slechts 2 toegangspunten (vanuit Noord-Amerika en Afrika), waardoor het relatief gemakkelijk te verdedigen is."
        }
      },
      {
        question: {
          en: "How many territories does Australia have?",
          es: "¿Cuántos territorios tiene Australia?",
          de: "Wie viele Gebiete hat Australien?",
          nl: "Hoeveel gebieden heeft Australië?"
        },
        options: [
          { en: "2", es: "2", de: "2", nl: "2" },
          { en: "3", es: "3", de: "3", nl: "3" },
          { en: "4", es: "4", de: "4", nl: "4" },
          { en: "5", es: "5", de: "5", nl: "5" }
        ],
        correct: 2,
        explanation: {
          en: "Australia has 4 territories: Eastern Australia, Western Australia, Indonesia, and New Guinea. It's the smallest continent with only one border.",
          es: "Australia tiene 4 territorios: Australia Oriental, Australia Occidental, Indonesia y Nueva Guinea. Es el continente más pequeño con solo una frontera.",
          de: "Australien hat 4 Gebiete: Ostaustralien, Westaustralien, Indonesien und Neuguinea. Es ist der kleinste Kontinent mit nur einer Grenze.",
          nl: "Australië heeft 4 gebieden: Oost-Australië, West-Australië, Indonesië en Nieuw-Guinea. Het is het kleinste continent met slechts één grens."
        }
      },
      {
        question: {
          en: "What happens if you have 5 or more cards at the end of your turn?",
          es: "¿Qué pasa si tienes 5 o más cartas al final de tu turno?",
          de: "Was passiert, wenn du am Ende deines Zuges 5 oder mehr Karten hast?",
          nl: "Wat gebeurt er als je 5 of meer kaarten hebt aan het einde van je beurt?"
        },
        options: [
          { en: "Nothing special", es: "Nada especial", de: "Nichts Besonderes", nl: "Niets speciaals" },
          { en: "You must trade in a set", es: "Debes canjear un set", de: "Du musst einen Satz eintauschen", nl: "Je moet een set inruilen" },
          { en: "You lose all cards", es: "Pierdes todas las cartas", de: "Du verlierst alle Karten", nl: "Je verliest alle kaarten" },
          { en: "You get bonus armies", es: "Obtienes ejércitos bonus", de: "Du bekommst Bonusarmeen", nl: "Je krijgt bonuslegers" }
        ],
        correct: 1,
        explanation: {
          en: "If you have 5 or more cards at the end of your turn, you must trade in a set at the start of your next turn. This prevents hoarding cards.",
          es: "Si tienes 5 o más cartas al final de tu turno, debes canjear un set al inicio de tu próximo turno. Esto previene acumular cartas.",
          de: "Wenn du am Ende deines Zuges 5 oder mehr Karten hast, musst du zu Beginn deines nächsten Zuges einen Satz eintauschen. Dies verhindert das Horten von Karten.",
          nl: "Als je 5 of meer kaarten hebt aan het einde van je beurt, moet je een set inruilen aan het begin van je volgende beurt. Dit voorkomt het hamsteren van kaarten."
        }
      },
      {
        question: {
          en: "How many entry points (borders) does Africa have?",
          es: "¿Cuántos puntos de entrada (fronteras) tiene África?",
          de: "Wie viele Eingangspunkte (Grenzen) hat Afrika?",
          nl: "Hoeveel toegangspunten (grenzen) heeft Afrika?"
        },
        options: [
          { en: "2", es: "2", de: "2", nl: "2" },
          { en: "3", es: "3", de: "3", nl: "3" },
          { en: "4", es: "4", de: "4", nl: "4" },
          { en: "5", es: "5", de: "5", nl: "5" }
        ],
        correct: 1,
        explanation: {
          en: "Africa has 3 entry points: Egypt (from Southern Europe and Middle East), North Africa (from Southern Europe and Brazil), making it moderately defensible.",
          es: "África tiene 3 puntos de entrada: Egipto (desde Europa del Sur y Medio Oriente), África del Norte (desde Europa del Sur y Brasil), lo que la hace moderadamente defendible.",
          de: "Afrika hat 3 Eingangspunkte: Ägypten (von Südeuropa und Nahem Osten), Nordafrika (von Südeuropa und Brasilien), was es mäßig verteidigbar macht.",
          nl: "Afrika heeft 3 toegangspunten: Egypte (vanuit Zuid-Europa en Midden-Oosten), Noord-Afrika (vanuit Zuid-Europa en Brazilië), waardoor het matig verdedigbaar is."
        }
      },
      {
        question: {
          en: "What is the minimum number of reinforcements you can receive per turn?",
          es: "¿Cuál es el número mínimo de refuerzos que puedes recibir por turno?",
          de: "Was ist die Mindestanzahl an Verstärkungen, die du pro Runde erhalten kannst?",
          nl: "Wat is het minimum aantal versterkingen dat je per beurt kunt ontvangen?"
        },
        options: [
          { en: "1", es: "1", de: "1", nl: "1" },
          { en: "2", es: "2", de: "2", nl: "2" },
          { en: "3", es: "3", de: "3", nl: "3" },
          { en: "5", es: "5", de: "5", nl: "5" }
        ],
        correct: 2,
        explanation: {
          en: "The minimum reinforcement is 3 armies per turn, even if you control fewer than 9 territories. This ensures even weak players can continue playing.",
          es: "El refuerzo mínimo es de 3 ejércitos por turno, incluso si controlas menos de 9 territorios. Esto asegura que incluso los jugadores débiles puedan seguir jugando.",
          de: "Die Mindestverstärkung beträgt 3 Armeen pro Runde, auch wenn du weniger als 9 Gebiete kontrollierst. Dies stellt sicher, dass auch schwache Spieler weiterspielen können.",
          nl: "De minimale versterking is 3 legers per beurt, zelfs als je minder dan 9 gebieden controleert. Dit zorgt ervoor dat zelfs zwakke spelers kunnen blijven spelen."
        }
      },
      {
        question: {
          en: "Which territory connects Asia to Australia?",
          es: "¿Qué territorio conecta Asia con Australia?",
          de: "Welches Gebiet verbindet Asien mit Australien?",
          nl: "Welk gebied verbindt Azië met Australië?"
        },
        options: [
          { en: "Indonesia", es: "Indonesia", de: "Indonesien", nl: "Indonesië" },
          { en: "Siam", es: "Siam", de: "Siam", nl: "Siam" },
          { en: "China", es: "China", de: "China", nl: "China" },
          { en: "Japan", es: "Japón", de: "Japan", nl: "Japan" }
        ],
        correct: 1,
        explanation: {
          en: "Siam is the only territory that connects Asia to Australia through Indonesia. This makes it a critical strategic bottleneck.",
          es: "Siam es el único territorio que conecta Asia con Australia a través de Indonesia. Esto lo convierte en un cuello de botella estratégico crítico.",
          de: "Siam ist das einzige Gebiet, das Asien durch Indonesien mit Australien verbindet. Dies macht es zu einem kritischen strategischen Engpass.",
          nl: "Siam is het enige gebied dat Azië met Australië verbindt via Indonesië. Dit maakt het een kritisch strategisch knelpunt."
        }
      },
      {
        question: {
          en: "What card combination gives you armies?",
          es: "¿Qué combinación de cartas te da ejércitos?",
          de: "Welche Kartenkombination gibt dir Armeen?",
          nl: "Welke kaartcombinatie geeft je legers?"
        },
        options: [
          { en: "Any 3 cards", es: "Cualquier 3 cartas", de: "Beliebige 3 Karten", nl: "Willekeurige 3 kaarten" },
          { en: "3 of same type or 1 of each", es: "3 del mismo tipo o 1 de cada uno", de: "3 vom selben Typ oder 1 von jedem", nl: "3 van hetzelfde type of 1 van elk" },
          { en: "2 matching cards", es: "2 cartas iguales", de: "2 passende Karten", nl: "2 gelijke kaarten" },
          { en: "4 cards total", es: "4 cartas en total", de: "4 Karten insgesamt", nl: "4 kaarten totaal" }
        ],
        correct: 1,
        explanation: {
          en: "You can trade 3 cards of the same type (3 Infantry, 3 Cavalry, or 3 Artillery) OR one of each type. Wild cards can substitute for any type.",
          es: "Puedes canjear 3 cartas del mismo tipo (3 Infantería, 3 Caballería o 3 Artillería) O una de cada tipo. Las cartas comodín pueden sustituir cualquier tipo.",
          de: "Du kannst 3 Karten desselben Typs eintauschen (3 Infanterie, 3 Kavallerie oder 3 Artillerie) ODER eine von jedem Typ. Joker können jeden Typ ersetzen.",
          nl: "Je kunt 3 kaarten van hetzelfde type inruilen (3 Infanterie, 3 Cavalerie of 3 Artillerie) OF één van elk type. Wild kaarten kunnen elk type vervangen."
        }
      },
      {
        question: {
          en: "How many territories does Europe have?",
          es: "¿Cuántos territorios tiene Europa?",
          de: "Wie viele Gebiete hat Europa?",
          nl: "Hoeveel gebieden heeft Europa?"
        },
        options: [
          { en: "5", es: "5", de: "5", nl: "5" },
          { en: "6", es: "6", de: "6", nl: "6" },
          { en: "7", es: "7", de: "7", nl: "7" },
          { en: "8", es: "8", de: "8", nl: "8" }
        ],
        correct: 2,
        explanation: {
          en: "Europe has 7 territories: Iceland, Great Britain, Scandinavia, Northern Europe, Western Europe, Southern Europe, and Ukraine.",
          es: "Europa tiene 7 territorios: Islandia, Gran Bretaña, Escandinavia, Europa del Norte, Europa Occidental, Europa del Sur y Ucrania.",
          de: "Europa hat 7 Gebiete: Island, Großbritannien, Skandinavien, Nordeuropa, Westeuropa, Südeuropa und Ukraine.",
          nl: "Europa heeft 7 gebieden: IJsland, Groot-Brittannië, Scandinavië, Noord-Europa, West-Europa, Zuid-Europa en Oekraïne."
        }
      },
      {
        question: {
          en: "What is Europe's continent bonus?",
          es: "¿Cuál es el bonus de continente de Europa?",
          de: "Was ist der Kontinentbonus von Europa?",
          nl: "Wat is de continentbonus van Europa?"
        },
        options: [
          { en: "+3 armies", es: "+3 ejércitos", de: "+3 Armeen", nl: "+3 legers" },
          { en: "+4 armies", es: "+4 ejércitos", de: "+4 Armeen", nl: "+4 legers" },
          { en: "+5 armies", es: "+5 ejércitos", de: "+5 Armeen", nl: "+5 legers" },
          { en: "+6 armies", es: "+6 ejércitos", de: "+6 Armeen", nl: "+6 legers" }
        ],
        correct: 2,
        explanation: {
          en: "Europe gives +5 armies per turn. It has many borders with other continents, making it challenging to hold but valuable when controlled.",
          es: "Europa da +5 ejércitos por turno. Tiene muchas fronteras con otros continentes, lo que hace que sea desafiante mantener pero valioso cuando se controla.",
          de: "Europa gibt +5 Armeen pro Runde. Es hat viele Grenzen zu anderen Kontinenten, was es schwierig zu halten macht, aber wertvoll, wenn kontrolliert.",
          nl: "Europa geeft +5 legers per beurt. Het heeft veel grenzen met andere continenten, waardoor het uitdagend is om vast te houden maar waardevol wanneer gecontroleerd."
        }
      },
      {
        question: {
          en: "When do you receive a Risk card?",
          es: "¿Cuándo recibes una carta de Risk?",
          de: "Wann erhältst du eine Risk-Karte?",
          nl: "Wanneer ontvang je een Risk-kaart?"
        },
        options: [
          { en: "Every turn", es: "Cada turno", de: "Jeden Zug", nl: "Elke beurt" },
          { en: "When you conquer a territory", es: "Cuando conquistas un territorio", de: "Wenn du ein Gebiet eroberst", nl: "Wanneer je een gebied verovert" },
          { en: "When you eliminate a player", es: "Cuando eliminas a un jugador", de: "Wenn du einen Spieler eliminierst", nl: "Wanneer je een speler elimineert" },
          { en: "At the start of the game only", es: "Solo al inicio del juego", de: "Nur zu Beginn des Spiels", nl: "Alleen aan het begin van het spel" }
        ],
        correct: 1,
        explanation: {
          en: "You receive one Risk card at the end of your turn if you conquered at least one territory during that turn. You get only one card per turn, regardless of how many territories you conquered.",
          es: "Recibes una carta de Risk al final de tu turno si conquistaste al menos un territorio durante ese turno. Solo obtienes una carta por turno, sin importar cuántos territorios conquistaste.",
          de: "Du erhältst eine Risk-Karte am Ende deines Zuges, wenn du mindestens ein Gebiet während dieses Zuges erobert hast. Du bekommst nur eine Karte pro Zug, unabhängig davon, wie viele Gebiete du erobert hast.",
          nl: "Je ontvangt één Risk-kaart aan het einde van je beurt als je ten minste één gebied hebt veroverd tijdens die beurt. Je krijgt slechts één kaart per beurt, ongeacht hoeveel gebieden je hebt veroverd."
        }
      },
      {
        question: {
          en: "How many territories does North America have?",
          es: "¿Cuántos territorios tiene América del Norte?",
          de: "Wie viele Gebiete hat Nordamerika?",
          nl: "Hoeveel gebieden heeft Noord-Amerika?"
        },
        options: [
          { en: "7", es: "7", de: "7", nl: "7" },
          { en: "8", es: "8", de: "8", nl: "8" },
          { en: "9", es: "9", de: "9", nl: "9" },
          { en: "10", es: "10", de: "10", nl: "10" }
        ],
        correct: 2,
        explanation: {
          en: "North America has 9 territories: Alaska, Northwest Territory, Greenland, Alberta, Ontario, Quebec, Western United States, Eastern United States, and Central America.",
          es: "América del Norte tiene 9 territorios: Alaska, Territorio del Noroeste, Groenlandia, Alberta, Ontario, Quebec, Estados Unidos Occidentales, Estados Unidos Orientales y América Central.",
          de: "Nordamerika hat 9 Gebiete: Alaska, Nordwest-Territorium, Grönland, Alberta, Ontario, Quebec, Westliche USA, Östliche USA und Mittelamerika.",
          nl: "Noord-Amerika heeft 9 gebieden: Alaska, Northwest Territory, Groenland, Alberta, Ontario, Quebec, West-Verenigde Staten, Oost-Verenigde Staten en Midden-Amerika."
        }
      },
      {
        question: {
          en: "What is the purpose of fortification?",
          es: "¿Cuál es el propósito de la fortificación?",
          de: "Was ist der Zweck der Befestigung?",
          nl: "Wat is het doel van versterking?"
        },
        options: [
          { en: "To get more cards", es: "Para obtener más cartas", de: "Um mehr Karten zu bekommen", nl: "Om meer kaarten te krijgen" },
          { en: "To attack better", es: "Para atacar mejor", de: "Um besser anzugreifen", nl: "Om beter aan te vallen" },
          { en: "To reposition armies strategically", es: "Para reposicionar ejércitos estratégicamente", de: "Um Armeen strategisch neu zu positionieren", nl: "Om legers strategisch te herpositioneren" },
          { en: "To defend automatically", es: "Para defender automáticamente", de: "Um automatisch zu verteidigen", nl: "Om automatisch te verdedigen" }
        ],
        correct: 2,
        explanation: {
          en: "Fortification allows you to move armies from one territory to another connected territory, enabling you to strengthen borders, prepare for attacks, or consolidate forces.",
          es: "La fortificación te permite mover ejércitos de un territorio a otro territorio conectado, permitiéndote fortalecer fronteras, prepararte para ataques o consolidar fuerzas.",
          de: "Die Befestigung ermöglicht es dir, Armeen von einem Gebiet zu einem anderen verbundenen Gebiet zu bewegen, um Grenzen zu stärken, Angriffe vorzubereiten oder Kräfte zu konsolidieren.",
          nl: "Versterking stelt je in staat om legers te verplaatsen van één gebied naar een ander verbonden gebied, waardoor je grenzen kunt versterken, aanvallen kunt voorbereiden of krachten kunt consolideren."
        }
      },
      {
        question: {
          en: "What bonus do you get if you trade in cards with a territory you control?",
          es: "¿Qué bonus obtienes si canjeas cartas con un territorio que controlas?",
          de: "Welchen Bonus bekommst du, wenn du Karten mit einem Gebiet eintauschst, das du kontrollierst?",
          nl: "Welke bonus krijg je als je kaarten inruilt met een gebied dat je controleert?"
        },
        options: [
          { en: "No bonus", es: "Sin bonus", de: "Kein Bonus", nl: "Geen bonus" },
          { en: "+1 army on that territory", es: "+1 ejército en ese territorio", de: "+1 Armee auf diesem Gebiet", nl: "+1 leger op dat gebied" },
          { en: "+2 armies on that territory", es: "+2 ejércitos en ese territorio", de: "+2 Armeen auf diesem Gebiet", nl: "+2 legers op dat gebied" },
          { en: "Double armies", es: "Ejércitos dobles", de: "Doppelte Armeen", nl: "Dubbele legers" }
        ],
        correct: 2,
        explanation: {
          en: "If you trade in cards and one of them shows a territory you control, you get to place 2 extra armies on that specific territory in addition to the regular card bonus.",
          es: "Si canjeas cartas y una de ellas muestra un territorio que controlas, puedes colocar 2 ejércitos extra en ese territorio específico además del bonus regular de cartas.",
          de: "Wenn du Karten eintauschst und eine davon ein Gebiet zeigt, das du kontrollierst, darfst du 2 zusätzliche Armeen auf diesem bestimmten Gebiet zusätzlich zum regulären Kartenbonus platzieren.",
          nl: "Als je kaarten inruilt en één ervan toont een gebied dat je controleert, mag je 2 extra legers op dat specifieke gebied plaatsen naast de reguliere kaartbonus."
        }
      },
      {
        question: {
          en: "How many entry points does North America have?",
          es: "¿Cuántos puntos de entrada tiene América del Norte?",
          de: "Wie viele Eingangspunkte hat Nordamerika?",
          nl: "Hoeveel toegangspunten heeft Noord-Amerika?"
        },
        options: [
          { en: "2", es: "2", de: "2", nl: "2" },
          { en: "3", es: "3", de: "3", nl: "3" },
          { en: "4", es: "4", de: "4", nl: "4" },
          { en: "5", es: "5", de: "5", nl: "5" }
        ],
        correct: 1,
        explanation: {
          en: "North America has 3 entry points: Alaska (from Kamchatka), Greenland (from Iceland), and Central America (from Venezuela), making it moderately defensible.",
          es: "América del Norte tiene 3 puntos de entrada: Alaska (desde Kamchatka), Groenlandia (desde Islandia) y América Central (desde Venezuela), lo que la hace moderadamente defendible.",
          de: "Nordamerika hat 3 Eingangspunkte: Alaska (von Kamtschatka), Grönland (von Island) und Mittelamerika (von Venezuela), was es mäßig verteidigbar macht.",
          nl: "Noord-Amerika heeft 3 toegangspunten: Alaska (vanuit Kamtsjatka), Groenland (vanuit IJsland) en Midden-Amerika (vanuit Venezuela), waardoor het matig verdedigbaar is."
        }
      },
      {
        question: {
          en: "What happens when both attacker and defender roll 2 dice?",
          es: "¿Qué pasa cuando tanto el atacante como el defensor lanzan 2 dados?",
          de: "Was passiert, wenn sowohl Angreifer als auch Verteidiger 2 Würfel würfeln?",
          nl: "Wat gebeurt er wanneer zowel aanvaller als verdediger 2 dobbelstenen gooien?"
        },
        options: [
          { en: "Compare all 4 dice", es: "Compara los 4 dados", de: "Vergleiche alle 4 Würfel", nl: "Vergelijk alle 4 dobbelstenen" },
          { en: "Compare highest dice only", es: "Compara solo los dados más altos", de: "Vergleiche nur die höchsten Würfel", nl: "Vergelijk alleen hoogste dobbelstenen" },
          { en: "Compare 2 highest pairs", es: "Compara los 2 pares más altos", de: "Vergleiche die 2 höchsten Paare", nl: "Vergelijk 2 hoogste paren" },
          { en: "Reroll all dice", es: "Vuelve a lanzar todos los dados", de: "Würfle alle Würfel neu", nl: "Gooi alle dobbelstenen opnieuw" }
        ],
        correct: 2,
        explanation: {
          en: "When both roll 2 dice, you compare the highest die from each side, then the second highest. Each comparison can result in one army loss for attacker or defender.",
          es: "Cuando ambos lanzan 2 dados, comparas el dado más alto de cada lado, luego el segundo más alto. Cada comparación puede resultar en la pérdida de un ejército para el atacante o defensor.",
          de: "Wenn beide 2 Würfel würfeln, vergleichst du den höchsten Würfel jeder Seite, dann den zweithöchsten. Jeder Vergleich kann zu einem Armeeverlust für Angreifer oder Verteidiger führen.",
          nl: "Wanneer beide 2 dobbelstenen gooien, vergelijk je de hoogste dobbelsteen van elke kant, dan de tweede hoogste. Elke vergelijking kan resulteren in één legerverlies voor aanvaller of verdediger."
        }
      },
      {
        question: {
          en: "How many territories does Africa have?",
          es: "¿Cuántos territorios tiene África?",
          de: "Wie viele Gebiete hat Afrika?",
          nl: "Hoeveel gebieden heeft Afrika?"
        },
        options: [
          { en: "4", es: "4", de: "4", nl: "4" },
          { en: "5", es: "5", de: "5", nl: "5" },
          { en: "6", es: "6", de: "6", nl: "6" },
          { en: "7", es: "7", de: "7", nl: "7" }
        ],
        correct: 2,
        explanation: {
          en: "Africa has 6 territories: North Africa, Egypt, East Africa, Central Africa, South Africa, and Madagascar. It gives +3 armies per turn when controlled.",
          es: "África tiene 6 territorios: África del Norte, Egipto, África Oriental, África Central, Sudáfrica y Madagascar. Da +3 ejércitos por turno cuando se controla.",
          de: "Afrika hat 6 Gebiete: Nordafrika, Ägypten, Ostafrika, Zentralafrika, Südafrika und Madagaskar. Es gibt +3 Armeen pro Runde wenn kontrolliert.",
          nl: "Afrika heeft 6 gebieden: Noord-Afrika, Egypte, Oost-Afrika, Centraal-Afrika, Zuid-Afrika en Madagaskar. Het geeft +3 legers per beurt wanneer gecontroleerd."
        }
      },
      {
        question: {
          en: "What is the 'turtle' strategy in Risk?",
          es: "¿Qué es la estrategia de 'tortuga' en Risk?",
          de: "Was ist die 'Schildkröten'-Strategie bei Risk?",
          nl: "Wat is de 'schildpad'-strategie bij Risk?"
        },
        options: [
          { en: "Attacking aggressively", es: "Atacar agresivamente", de: "Aggressiv angreifen", nl: "Agressief aanvallen" },
          { en: "Defending a small continent", es: "Defender un continente pequeño", de: "Einen kleinen Kontinent verteidigen", nl: "Een klein continent verdedigen" },
          { en: "Moving armies constantly", es: "Mover ejércitos constantemente", de: "Armeen ständig bewegen", nl: "Legers constant verplaatsen" },
          { en: "Trading cards immediately", es: "Canjear cartas inmediatamente", de: "Karten sofort eintauschen", nl: "Kaarten onmiddellijk inruilen" }
        ],
        correct: 1,
        explanation: {
          en: "The turtle strategy involves securing and defending a small, easily defensible continent (like Australia or South America) early, building up forces while others weaken each other.",
          es: "La estrategia de tortuga implica asegurar y defender un continente pequeño y fácilmente defendible (como Australia o América del Sur) temprano, acumulando fuerzas mientras otros se debilitan entre sí.",
          de: "Die Schildkrötenstrategie beinhaltet die frühe Sicherung und Verteidigung eines kleinen, leicht zu verteidigenden Kontinents (wie Australien oder Südamerika), während Kräfte aufgebaut werden und andere sich gegenseitig schwächen.",
          nl: "De schildpadstrategie houdt in dat je vroeg een klein, gemakkelijk verdedigbaar continent (zoals Australië of Zuid-Amerika) veiligstelt en verdedigt, krachten opbouwt terwijl anderen elkaar verzwakken."
        }
      },
      {
        question: {
          en: "When can you fortify your territories?",
          es: "¿Cuándo puedes fortificar tus territorios?",
          de: "Wann kannst du deine Gebiete befestigen?",
          nl: "Wanneer kun je je gebieden versterken?"
        },
        options: [
          { en: "Anytime during your turn", es: "En cualquier momento durante tu turno", de: "Jederzeit während deines Zuges", nl: "Op elk moment tijdens je beurt" },
          { en: "Only before attacking", es: "Solo antes de atacar", de: "Nur vor dem Angriff", nl: "Alleen voor het aanvallen" },
          { en: "Only after attacking phase", es: "Solo después de la fase de ataque", de: "Nur nach der Angriffsphase", nl: "Alleen na de aanvalsfase" },
          { en: "Only at game start", es: "Solo al inicio del juego", de: "Nur zu Spielbeginn", nl: "Alleen aan het begin van het spel" }
        ],
        correct: 2,
        explanation: {
          en: "Fortification occurs at the end of your turn, after the attack phase is complete. You can move armies once from one territory to a connected territory.",
          es: "La fortificación ocurre al final de tu turno, después de que se complete la fase de ataque. Puedes mover ejércitos una vez de un territorio a un territorio conectado.",
          de: "Die Befestigung erfolgt am Ende deines Zuges, nachdem die Angriffsphase abgeschlossen ist. Du kannst Armeen einmal von einem Gebiet zu einem verbundenen Gebiet bewegen.",
          nl: "Versterking vindt plaats aan het einde van je beurt, nadat de aanvalsfase is voltooid. Je kunt één keer legers verplaatsen van één gebied naar een verbonden gebied."
        }
      },
      {
        question: {
          en: "How many armies must you move into a conquered territory?",
          es: "¿Cuántos ejércitos debes mover a un territorio conquistado?",
          de: "Wie viele Armeen musst du in ein erobertes Gebiet bewegen?",
          nl: "Hoeveel legers moet je verplaatsen naar een veroverd gebied?"
        },
        options: [
          { en: "Exactly 1", es: "Exactamente 1", de: "Genau 1", nl: "Precies 1" },
          { en: "At least the number of dice you rolled", es: "Al menos el número de dados que lanzaste", de: "Mindestens die Anzahl der Würfel, die du geworfen hast", nl: "Minstens het aantal dobbelstenen dat je gooide" },
          { en: "Any number you choose", es: "Cualquier número que elijas", de: "Beliebige Anzahl nach Wahl", nl: "Elk aantal dat je kiest" },
          { en: "All armies from attacking territory", es: "Todos los ejércitos del territorio atacante", de: "Alle Armeen vom angreifenden Gebiet", nl: "Alle legers van aanvallend gebied" }
        ],
        correct: 1,
        explanation: {
          en: "After conquering a territory, you must move at least as many armies as the number of dice you used in the final attack. You may move more if desired.",
          es: "Después de conquistar un territorio, debes mover al menos tantos ejércitos como el número de dados que usaste en el ataque final. Puedes mover más si lo deseas.",
          de: "Nach der Eroberung eines Gebiets musst du mindestens so viele Armeen bewegen wie die Anzahl der Würfel, die du im letzten Angriff verwendet hast. Du kannst mehr bewegen, wenn gewünscht.",
          nl: "Na het veroveren van een gebied moet je ten minste zoveel legers verplaatsen als het aantal dobbelstenen dat je gebruikte in de laatste aanval. Je mag meer verplaatsen indien gewenst."
        }
      }
    ]
  };

  // Export for use in the quiz application
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level2;
  } else if (typeof window !== 'undefined') {
    window.level2 = level2;
  }
})();
