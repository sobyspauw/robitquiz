// Quiz Template - Level 1: Bord spelletjes - Risk
(function() {
  const level1 = {
    name: {
      en: "Risk - Beginner",
      es: "Risk - Principiante",
      de: "Risk - Anfänger",
      nl: "Risk - Beginner"
    },
    questions: [
      {
        question: {
          en: "What is the main objective in Risk?",
          es: "¿Cuál es el objetivo principal en Risk?",
          de: "Was ist das Hauptziel bei Risk?",
          nl: "Wat is het hoofddoel bij Risk?"
        },
        options: [
          { en: "Control the most armies", es: "Controlar la mayoría de ejércitos", de: "Die meisten Armeen kontrollieren", nl: "De meeste legers controleren" },
          { en: "Conquer the entire world", es: "Conquistar el mundo entero", de: "Die ganze Welt erobern", nl: "De hele wereld veroveren" },
          { en: "Collect the most cards", es: "Recoger la mayoría de cartas", de: "Die meisten Karten sammeln", nl: "De meeste kaarten verzamelen" },
          { en: "Survive the longest", es: "Sobrevivir más tiempo", de: "Am längsten überleben", nl: "Het langst overleven" }
        ],
        correct: 1,
        explanation: {
          en: "The main objective in Risk is to conquer the entire world by eliminating all other players and controlling all territories on the board.",
          es: "El objetivo principal en Risk es conquistar el mundo entero eliminando a todos los otros jugadores y controlando todos los territorios en el tablero.",
          de: "Das Hauptziel bei Risk ist es, die ganze Welt zu erobern, indem man alle anderen Spieler eliminiert und alle Gebiete auf dem Brett kontrolliert.",
          nl: "Het hoofddoel bij Risk is de hele wereld te veroveren door alle andere spelers te elimineren en alle gebieden op het bord te controleren."
        }
      },
      {
        question: {
          en: "How many continents are there in classic Risk?",
          es: "¿Cuántos continentes hay en el Risk clásico?",
          de: "Wie viele Kontinente gibt es beim klassischen Risk?",
          nl: "Hoeveel continenten zijn er bij klassiek Risk?"
        },
        options: [
          { en: "5", es: "5", de: "5", nl: "5" },
          { en: "6", es: "6", de: "6", nl: "6" },
          { en: "7", es: "7", de: "7", nl: "7" },
          { en: "8", es: "8", de: "8", nl: "8" }
        ],
        correct: 1,
        explanation: {
          en: "Classic Risk has 6 continents: North America, South America, Europe, Asia, Africa, and Australia.",
          es: "El Risk clásico tiene 6 continentes: América del Norte, América del Sur, Europa, Asia, África y Australia.",
          de: "Das klassische Risk hat 6 Kontinente: Nordamerika, Südamerika, Europa, Asien, Afrika und Australien.",
          nl: "Klassiek Risk heeft 6 continenten: Noord-Amerika, Zuid-Amerika, Europa, Azië, Afrika en Australië."
        }
      },
      {
        question: {
          en: "Which continent gives the highest bonus armies in classic Risk?",
          es: "¿Qué continente da la mayor bonificación de ejércitos en el Risk clásico?",
          de: "Welcher Kontinent gibt die höchste Armee-Belohnung beim klassischen Risk?",
          nl: "Welk continent geeft de hoogste bonus legers bij klassiek Risk?"
        },
        options: [
          { en: "Asia (+7)", es: "Asia (+7)", de: "Asien (+7)", nl: "Azië (+7)" },
          { en: "North America (+5)", es: "América del Norte (+5)", de: "Nordamerika (+5)", nl: "Noord-Amerika (+5)" },
          { en: "Europe (+5)", es: "Europa (+5)", de: "Europa (+5)", nl: "Europa (+5)" },
          { en: "Africa (+3)", es: "África (+3)", de: "Afrika (+3)", nl: "Afrika (+3)" }
        ],
        correct: 0,
        explanation: {
          en: "Asia gives the highest bonus of +7 armies per turn when completely controlled, but it's also the largest and hardest to defend.",
          es: "Asia da la mayor bonificación de +7 ejércitos por turno cuando se controla completamente, pero también es el más grande y difícil de defender.",
          de: "Asien gibt die höchste Belohnung von +7 Armeen pro Runde, wenn es vollständig kontrolliert wird, aber es ist auch das größte und am schwersten zu verteidigende.",
          nl: "Azië geeft de hoogste bonus van +7 legers per beurt wanneer volledig gecontroleerd, maar het is ook het grootste en moeilijkst te verdedigen."
        }
      },
      {
        question: {
          en: "How many dice does the attacker roll in combat?",
          es: "¿Cuántos dados tira el atacante en combate?",
          de: "Wie viele Würfel würfelt der Angreifer im Kampf?",
          nl: "Hoeveel dobbelstenen gooit de aanvaller in gevecht?"
        },
        options: [
          { en: "Always 3", es: "Siempre 3", de: "Immer 3", nl: "Altijd 3" },
          { en: "1-3 dice per armies", es: "1, 2 o 3 dependiendo de los ejércitos", de: "1, 2 oder 3 je nach Armeen", nl: "1, 2 of 3 afhankelijk van legers" },
          { en: "Always 2", es: "Siempre 2", de: "Immer 2", nl: "Altijd 2" },
          { en: "1 or 2 depending on armies", es: "1 o 2 dependiendo de los ejércitos", de: "1 oder 2 je nach Armeen", nl: "1 of 2 afhankelijk van legers" }
        ],
        correct: 1,
        explanation: {
          en: "The attacker can roll 1, 2, or 3 dice depending on how many armies are in the attacking territory (must leave at least 1 army behind).",
          es: "El atacante puede tirar 1, 2 o 3 dados dependiendo de cuántos ejércitos están en el territorio atacante (debe dejar al menos 1 ejército atrás).",
          de: "Der Angreifer kann 1, 2 oder 3 Würfel würfeln, je nachdem wie viele Armeen im angreifenden Gebiet sind (muss mindestens 1 Armee zurücklassen).",
          nl: "De aanvaller kan 1, 2 of 3 dobbelstenen gooien afhankelijk van hoeveel legers er in het aanvallende gebied zijn (moet minstens 1 leger achterlaten)."
        }
      },
      {
        question: {
          en: "How many dice can the defender roll?",
          es: "¿Cuántos dados puede tirar el defensor?",
          de: "Wie viele Würfel kann der Verteidiger würfeln?",
          nl: "Hoeveel dobbelstenen kan de verdediger gooien?"
        },
        options: [
          { en: "1 or 2", es: "1 o 2", de: "1 oder 2", nl: "1 of 2" },
          { en: "1, 2, or 3", es: "1, 2 o 3", de: "1, 2 oder 3", nl: "1, 2 of 3" },
          { en: "Always 2", es: "Siempre 2", de: "Immer 2", nl: "Altijd 2" },
          { en: "Always 1", es: "Siempre 1", de: "Immer 1", nl: "Altijd 1" }
        ],
        correct: 0,
        explanation: {
          en: "The defender can roll 1 or 2 dice: 2 dice if they have 2 or more armies in the territory, or 1 die if they have only 1 army.",
          es: "El defensor puede tirar 1 o 2 dados: 2 dados si tienen 2 o más ejércitos en el territorio, o 1 dado si tienen solo 1 ejército.",
          de: "Der Verteidiger kann 1 oder 2 Würfel würfeln: 2 Würfel wenn er 2 oder mehr Armeen im Gebiet hat, oder 1 Würfel wenn er nur 1 Armee hat.",
          nl: "De verdediger kan 1 of 2 dobbelstenen gooien: 2 dobbelstenen als ze 2 of meer legers in het gebied hebben, of 1 dobbelsteen als ze slechts 1 leger hebben."
        }
      },
      {
        question: {
          en: "What happens in combat when dice results are tied?",
          es: "¿Qué pasa en combate cuando los resultados de los dados están empatados?",
          de: "Was passiert im Kampf, wenn die Würfelergebnisse unentschieden sind?",
          nl: "Wat gebeurt er in gevecht wanneer dobbelsteenresultaten gelijk zijn?"
        },
        options: [
          { en: "Roll again", es: "Tirar de nuevo", de: "Nochmal würfeln", nl: "Opnieuw gooien" },
          { en: "Defender wins", es: "El defensor gana", de: "Verteidiger gewinnt", nl: "Verdediger wint" },
          { en: "Attacker wins", es: "El atacante gana", de: "Angreifer gewinnt", nl: "Aanvaller wint" },
          { en: "Both lose an army", es: "Ambos pierden un ejército", de: "Beide verlieren eine Armee", nl: "Beiden verliezen een leger" }
        ],
        correct: 1,
        explanation: {
          en: "In Risk, ties always go to the defender. This gives the defender a slight advantage in combat.",
          es: "En Risk, los empates siempre van al defensor. Esto le da al defensor una ligera ventaja en combate.",
          de: "Bei Risk gehen Unentschieden immer an den Verteidiger. Das gibt dem Verteidiger einen leichten Vorteil im Kampf.",
          nl: "Bij Risk gaan gelijke standen altijd naar de verdediger. Dit geeft de verdediger een klein voordeel in gevecht."
        }
      },
      {
        question: {
          en: "How do you get reinforcement armies at the start of your turn?",
          es: "¿Cómo obtienes ejércitos de refuerzo al inicio de tu turno?",
          de: "Wie bekommst du Verstärkungsarmeen zu Beginn deines Zuges?",
          nl: "Hoe krijg je versterkingslegers aan het begin van je beurt?"
        },
        options: [
          { en: "Roll dice", es: "Tirar dados", de: "Würfeln", nl: "Dobbelstenen gooien" },
          { en: "Territories/3 + continent bonus", es: "Territorios divididos por 3, más bonificaciones de continente", de: "Gebiete geteilt durch 3, plus Kontinentboni", nl: "Gebieden gedeeld door 3, plus continentbonussen" },
          { en: "Fixed 5 armies per turn", es: "5 ejércitos fijos por turno", de: "Feste 5 Armeen pro Runde", nl: "Vaste 5 legers per beurt" },
          { en: "One army per territory", es: "Un ejército por territorio", de: "Eine Armee pro Gebiet", nl: "Een leger per gebied" }
        ],
        correct: 1,
        explanation: {
          en: "You get reinforcements equal to your territories divided by 3 (minimum 3), plus any continent bonuses, plus any card bonuses.",
          es: "Obtienes refuerzos iguales a tus territorios divididos por 3 (mínimo 3), más cualquier bonificación de continente, más cualquier bonificación de cartas.",
          de: "Du bekommst Verstärkungen gleich deinen Gebieten geteilt durch 3 (mindestens 3), plus alle Kontinentboni, plus alle Kartenboni.",
          nl: "Je krijgt versterkingen gelijk aan je gebieden gedeeld door 3 (minimum 3), plus eventuele continentbonussen, plus eventuele kaartbonussen."
        }
      },
      {
        question: {
          en: "What are Risk cards used for?",
          es: "¿Para qué se usan las cartas de Risk?",
          de: "Wofür werden Risk-Karten verwendet?",
          nl: "Waarvoor worden Risk-kaarten gebruikt?"
        },
        options: [
          { en: "To move armies faster", es: "Para mover ejércitos más rápido", de: "Um Armeen schneller zu bewegen", nl: "Om legers sneller te verplaatsen" },
          { en: "Get extra armies", es: "Para obtener ejércitos de refuerzo extra", de: "Um zusätzliche Verstärkungsarmeen zu bekommen", nl: "Om extra versterkingslegers te krijgen" },
          { en: "To attack with more dice", es: "Para atacar con más dados", de: "Um mit mehr Würfeln anzugreifen", nl: "Om met meer dobbelstenen aan te vallen" },
          { en: "To defend better", es: "Para defender mejor", de: "Um besser zu verteidigen", nl: "Om beter te verdedigen" }
        ],
        correct: 1,
        explanation: {
          en: "Risk cards can be traded in for extra reinforcement armies. You get a card when you conquer at least one territory in a turn.",
          es: "Las cartas de Risk pueden intercambiarse por ejércitos de refuerzo extra. Obtienes una carta cuando conquistas al menos un territorio en un turno.",
          de: "Risk-Karten können für zusätzliche Verstärkungsarmeen eingetauscht werden. Du bekommst eine Karte, wenn du mindestens ein Gebiet in einer Runde eroberst.",
          nl: "Risk-kaarten kunnen worden ingeruild voor extra versterkingslegers. Je krijgt een kaart wanneer je minstens één gebied verovert in een beurt."
        }
      },
      {
        question: {
          en: "Which continent is easiest to defend in classic Risk?",
          es: "¿Qué continente es más fácil de defender en el Risk clásico?",
          de: "Welcher Kontinent ist beim klassischen Risk am einfachsten zu verteidigen?",
          nl: "Welk continent is het gemakkelijkst te verdedigen bij klassiek Risk?"
        },
        options: [
          { en: "Asia", es: "Asia", de: "Asien", nl: "Azië" },
          { en: "Europe", es: "Europa", de: "Europa", nl: "Europa" },
          { en: "Australia", es: "Australia", de: "Australien", nl: "Australië" },
          { en: "Africa", es: "África", de: "Afrika", nl: "Afrika" }
        ],
        correct: 2,
        explanation: {
          en: "Australia is easiest to defend because it only has one entry point (from Asia) and gives +2 armies per turn when controlled.",
          es: "Australia es más fácil de defender porque solo tiene un punto de entrada (desde Asia) y da +2 ejércitos por turno cuando se controla.",
          de: "Australien ist am einfachsten zu verteidigen, weil es nur einen Eingangspunkt (von Asien) hat und +2 Armeen pro Runde gibt, wenn es kontrolliert wird.",
          nl: "Australië is het gemakkelijkst te verdedigen omdat het slechts één ingang heeft (vanuit Azië) en +2 legers per beurt geeft wanneer gecontroleerd."
        }
      },
      {
        question: {
          en: "How many armies can you move in the fortification phase?",
          es: "¿Cuántos ejércitos puedes mover en la fase de fortificación?",
          de: "Wie viele Armeen kannst du in der Befestigungsphase bewegen?",
          nl: "Hoeveel legers kun je verplaatsen in de versterkingsfase?"
        },
        options: [
          { en: "All armies from one territory", es: "Todos los ejércitos de un territorio", de: "Alle Armeen von einem Gebiet", nl: "Alle legers van één gebied" },
          { en: "Any number between territories", es: "Cualquier número de un territorio a otro", de: "Beliebige Anzahl von einem Gebiet zu einem anderen", nl: "Elk aantal van één gebied naar een ander" },
          { en: "One army only", es: "Solo un ejército", de: "Nur eine Armee", nl: "Slechts één leger" },
          { en: "Up to 3 armies", es: "Hasta 3 ejércitos", de: "Bis zu 3 Armeen", nl: "Tot 3 legers" }
        ],
        correct: 1,
        explanation: {
          en: "In fortification, you can move any number of armies from one territory to an adjacent connected territory (must leave at least 1 behind).",
          es: "En fortificación, puedes mover cualquier número de ejércitos de un territorio a un territorio adyacente conectado (debes dejar al menos 1 atrás).",
          de: "Bei der Befestigung kannst du beliebig viele Armeen von einem Gebiet zu einem angrenzenden verbundenen Gebiet bewegen (musst mindestens 1 zurücklassen).",
          nl: "Bij versterking kun je elk aantal legers verplaatsen van één gebied naar een aangrenzend verbonden gebied (moet minstens 1 achterlaten)."
        }
      },
      {
        question: {
          en: "What is the minimum number of armies you must always leave in a territory?",
          es: "¿Cuál es el número mínimo de ejércitos que siempre debes dejar en un territorio?",
          de: "Wie viele Armeen musst du mindestens immer in einem Gebiet lassen?",
          nl: "Wat is het minimum aantal legers dat je altijd in een gebied moet achterlaten?"
        },
        options: [
          { en: "0", es: "0", de: "0", nl: "0" },
          { en: "1", es: "1", de: "1", nl: "1" },
          { en: "2", es: "2", de: "2", nl: "2" },
          { en: "3", es: "3", de: "3", nl: "3" }
        ],
        correct: 1,
        explanation: {
          en: "You must always leave at least 1 army in every territory you control to maintain ownership of that territory.",
          es: "Siempre debes dejar al menos 1 ejército en cada territorio que controlas para mantener la propiedad de ese territorio.",
          de: "Du musst immer mindestens 1 Armee in jedem Gebiet lassen, das du kontrollierst, um den Besitz dieses Gebiets zu behalten.",
          nl: "Je moet altijd minstens 1 leger in elk gebied dat je controleert achterlaten om het eigendom van dat gebied te behouden."
        }
      },
      {
        question: {
          en: "In what order do the phases of a turn occur in Risk?",
          es: "¿En qué orden ocurren las fases de un turno en Risk?",
          de: "In welcher Reihenfolge erfolgen die Phasen eines Zuges bei Risk?",
          nl: "In welke volgorde vinden de fasen van een beurt plaats bij Risk?"
        },
        options: [
          { en: "Attack, Reinforce, Fortify", es: "Atacar, Reforzar, Fortificar", de: "Angreifen, Verstärken, Befestigen", nl: "Aanvallen, Versterken, Vestigen" },
          { en: "Reinforce, Attack, Fortify", es: "Reforzar, Atacar, Fortificar", de: "Verstärken, Angreifen, Befestigen", nl: "Versterken, Aanvallen, Vestigen" },
          { en: "Fortify, Reinforce, Attack", es: "Fortificar, Reforzar, Atacar", de: "Befestigen, Verstärken, Angreifen", nl: "Vestigen, Versterken, Aanvallen" },
          { en: "Attack, Fortify, Reinforce", es: "Atacar, Fortificar, Reforzar", de: "Angreifen, Befestigen, Verstärken", nl: "Aanvallen, Vestigen, Versterken" }
        ],
        correct: 1,
        explanation: {
          en: "The turn order is: 1) Reinforce (place new armies), 2) Attack (optional), 3) Fortify (move armies between territories).",
          es: "El orden del turno es: 1) Reforzar (colocar nuevos ejércitos), 2) Atacar (opcional), 3) Fortificar (mover ejércitos entre territorios).",
          de: "Die Zugreihenfolge ist: 1) Verstärken (neue Armeen platzieren), 2) Angreifen (optional), 3) Befestigen (Armeen zwischen Gebieten bewegen).",
          nl: "De beurtvolgorde is: 1) Versterken (nieuwe legers plaatsen), 2) Aanvallen (optioneel), 3) Vestigen (legers tussen gebieden verplaatsen)."
        }
      },
      {
        question: {
          en: "How many territories are there in total on the classic Risk board?",
          es: "¿Cuántos territorios hay en total en el tablero clásico de Risk?",
          de: "Wie viele Gebiete gibt es insgesamt auf dem klassischen Risk-Brett?",
          nl: "Hoeveel gebieden zijn er in totaal op het klassieke Risk-bord?"
        },
        options: [
          { en: "40", es: "40", de: "40", nl: "40" },
          { en: "42", es: "42", de: "42", nl: "42" },
          { en: "44", es: "44", de: "44", nl: "44" },
          { en: "46", es: "46", de: "46", nl: "46" }
        ],
        correct: 1,
        explanation: {
          en: "The classic Risk board has 42 territories spread across the 6 continents, with varying numbers of territories per continent.",
          es: "El tablero clásico de Risk tiene 42 territorios distribuidos en los 6 continentes, con números variables de territorios por continente.",
          de: "Das klassische Risk-Brett hat 42 Gebiete, die über die 6 Kontinente verteilt sind, mit unterschiedlichen Anzahlen von Gebieten pro Kontinent.",
          nl: "Het klassieke Risk-bord heeft 42 gebieden verspreid over de 6 continenten, met wisselende aantallen gebieden per continent."
        }
      },
      {
        question: {
          en: "What happens when you eliminate a player?",
          es: "¿Qué pasa cuando eliminas a un jugador?",
          de: "Was passiert, wenn du einen Spieler eliminierst?",
          nl: "Wat gebeurt er als je een speler elimineert?"
        },
        options: [
          { en: "You get extra dice", es: "Obtienes dados extra", de: "Du bekommst zusätzliche Würfel", nl: "Je krijgt extra dobbelstenen" },
          { en: "You get all their Risk cards", es: "Obtienes todas sus cartas de Risk", de: "Du bekommst alle ihre Risk-Karten", nl: "Je krijgt al hun Risk-kaarten" },
          { en: "You get bonus armies", es: "Obtienes ejércitos bonus", de: "Du bekommst Bonusarmeen", nl: "Je krijgt bonuslegers" },
          { en: "Nothing special happens", es: "No pasa nada especial", de: "Nichts Besonderes passiert", nl: "Er gebeurt niets speciaals" }
        ],
        correct: 1,
        explanation: {
          en: "When you eliminate a player, you get all of their Risk cards, which can provide significant reinforcements when traded in.",
          es: "Cuando eliminas a un jugador, obtienes todas sus cartas de Risk, que pueden proporcionar refuerzos significativos cuando se intercambian.",
          de: "Wenn du einen Spieler eliminierst, bekommst du alle ihre Risk-Karten, die beim Eintauschen erhebliche Verstärkungen bieten können.",
          nl: "Wanneer je een speler elimineert, krijg je al hun Risk-kaarten, die aanzienlijke versterkingen kunnen bieden wanneer ingeruild."
        }
      },
      {
        question: {
          en: "Which continent has the most territories?",
          es: "¿Qué continente tiene más territorios?",
          de: "Welcher Kontinent hat die meisten Gebiete?",
          nl: "Welk continent heeft de meeste gebieden?"
        },
        options: [
          { en: "Asia (12)", es: "Asia (12)", de: "Asien (12)", nl: "Azië (12)" },
          { en: "North America (9)", es: "América del Norte (9)", de: "Nordamerika (9)", nl: "Noord-Amerika (9)" },
          { en: "Europe (7)", es: "Europa (7)", de: "Europa (7)", nl: "Europa (7)" },
          { en: "Africa (6)", es: "África (6)", de: "Afrika (6)", nl: "Afrika (6)" }
        ],
        correct: 0,
        explanation: {
          en: "Asia has the most territories with 12, which is why it gives the highest continent bonus but is also the hardest to control.",
          es: "Asia tiene la mayoría de territorios con 12, por eso da la mayor bonificación de continente pero también es el más difícil de controlar.",
          de: "Asien hat die meisten Gebiete mit 12, weshalb es den höchsten Kontinentbonus gibt, aber auch am schwersten zu kontrollieren ist.",
          nl: "Azië heeft de meeste gebieden met 12, daarom geeft het de hoogste continentbonus maar is ook het moeilijkst te controleren."
        }
      },
      {
        question: {
          en: "What is a 'blitz' attack in Risk?",
          es: "¿Qué es un ataque 'blitz' en Risk?",
          de: "Was ist ein 'Blitz'-Angriff bei Risk?",
          nl: "Wat is een 'blitz'-aanval bij Risk?"
        },
        options: [
          { en: "Using 3 dice every time", es: "Usar 3 dados cada vez", de: "Jedes Mal 3 Würfel verwenden", nl: "Elke keer 3 dobbelstenen gebruiken" },
          { en: "Attacking multiple territories at once", es: "Atacar múltiples territorios a la vez", de: "Mehrere Gebiete gleichzeitig angreifen", nl: "Meerdere gebieden tegelijk aanvallen" },
          { en: "Roll until conquest/retreat", es: "Tirar continuamente hasta conquista o retirada", de: "Kontinuierliches Würfeln bis Eroberung oder Rückzug", nl: "Continu gooien tot verovering of terugtrekking" },
          { en: "Attacking without dice", es: "Atacar sin dados", de: "Angreifen ohne Würfel", nl: "Aanvallen zonder dobbelstenen" }
        ],
        correct: 2,
        explanation: {
          en: "A blitz attack means continuous rolling of dice until either the territory is conquered or the attacker chooses to stop/retreat.",
          es: "Un ataque blitz significa tirar dados continuamente hasta que el territorio sea conquistado o el atacante elija parar/retirarse.",
          de: "Ein Blitz-Angriff bedeutet kontinuierliches Würfeln bis entweder das Gebiet erobert wird oder der Angreifer sich entscheidet zu stoppen/sich zurückzuziehen.",
          nl: "Een blitz-aanval betekent continu dobbelstenen gooien totdat het gebied is veroverd of de aanvaller ervoor kiest te stoppen/terug te trekken."
        }
      },
      {
        question: {
          en: "How many different types of Risk cards are there?",
          es: "¿Cuántos tipos diferentes de cartas de Risk hay?",
          de: "Wie viele verschiedene Arten von Risk-Karten gibt es?",
          nl: "Hoeveel verschillende soorten Risk-kaarten zijn er?"
        },
        options: [
          { en: "2 (Infantry, Cavalry)", es: "2 (Infantería, Caballería)", de: "2 (Infanterie, Kavallerie)", nl: "2 (Infanterie, Cavalerie)" },
          { en: "3 (Infantry, Cavalry, Artillery)", es: "3 (Infantería, Caballería, Artillería)", de: "3 (Infanterie, Kavallerie, Artillerie)", nl: "3 (Infanterie, Cavalerie, Artillerie)" },
          { en: "4 (Infantry, Cavalry, Artillery, Wild)", es: "4 (Infantería, Caballería, Artillería, Comodín)", de: "4 (Infanterie, Kavallerie, Artillerie, Joker)", nl: "4 (Infanterie, Cavalerie, Artillerie, Wild)" },
          { en: "6 (one for each continent)", es: "6 (uno por cada continente)", de: "6 (einer für jeden Kontinent)", nl: "6 (één voor elk continent)" }
        ],
        correct: 2,
        explanation: {
          en: "There are 4 types: Infantry, Cavalry, Artillery, and Wild cards. You need 3 matching cards or one of each type to trade for armies.",
          es: "Hay 4 tipos: Infantería, Caballería, Artillería y cartas Comodín. Necesitas 3 cartas iguales o una de cada tipo para intercambiar por ejércitos.",
          de: "Es gibt 4 Arten: Infanterie, Kavallerie, Artillerie und Joker-Karten. Du brauchst 3 passende Karten oder eine von jedem Typ, um sie für Armeen einzutauschen.",
          nl: "Er zijn 4 soorten: Infanterie, Cavalerie, Artillerie en Wild kaarten. Je hebt 3 gelijke kaarten nodig of één van elk type om in te ruilen voor legers."
        }
      },
      {
        question: {
          en: "What is the 'kamikaze' strategy in Risk?",
          es: "¿Qué es la estrategia 'kamikaze' en Risk?",
          de: "Was ist die 'Kamikaze'-Strategie bei Risk?",
          nl: "Wat is de 'kamikaze'-strategie bij Risk?"
        },
        options: [
          { en: "Defending with maximum dice", es: "Defender con máximos dados", de: "Mit maximalen Würfeln verteidigen", nl: "Verdedigen met maximum dobbelstenen" },
          { en: "Attacking a stronger player when losing", es: "Atacar a un jugador más fuerte cuando se está perdiendo", de: "Einen stärkeren Spieler angreifen wenn man verliert", nl: "Een sterkere speler aanvallen wanneer je verliest" },
          { en: "Sacrificing armies for continent bonus", es: "Sacrificar ejércitos por bonificación de continente", de: "Armeen für Kontinentbonus opfern", nl: "Legers opofferen voor continentbonus" },
          { en: "Using all armies in one attack", es: "Usar todos los ejércitos en un ataque", de: "Alle Armeen in einem Angriff verwenden", nl: "Alle legers in één aanval gebruiken" }
        ],
        correct: 1,
        explanation: {
          en: "Kamikaze strategy involves a losing player attacking the leading player to prevent them from winning, even if it means certain defeat.",
          es: "La estrategia kamikaze involucra que un jugador perdedor ataque al jugador líder para evitar que gane, incluso si significa derrota segura.",
          de: "Die Kamikaze-Strategie beinhaltet, dass ein verlierender Spieler den führenden Spieler angreift, um ihn am Gewinnen zu hindern, auch wenn es sichere Niederlage bedeutet.",
          nl: "Kamikaze-strategie houdt in dat een verliezende speler de leidende speler aanvalt om te voorkomen dat hij wint, zelfs als het zekere nederlaag betekent."
        }
      },
      {
        question: {
          en: "Who invented the game Risk?",
          es: "¿Quién inventó el juego Risk?",
          de: "Wer hat das Spiel Risk erfunden?",
          nl: "Wie heeft het spel Risk uitgevonden?"
        },
        options: [
          { en: "Albert Lamorisse", es: "Albert Lamorisse", de: "Albert Lamorisse", nl: "Albert Lamorisse" },
          { en: "Charles Darrow", es: "Charles Darrow", de: "Charles Darrow", nl: "Charles Darrow" },
          { en: "Parker Brothers", es: "Parker Brothers", de: "Parker Brothers", nl: "Parker Brothers" },
          { en: "Milton Bradley", es: "Milton Bradley", de: "Milton Bradley", nl: "Milton Bradley" }
        ],
        correct: 0,
        explanation: {
          en: "Risk was invented by French filmmaker Albert Lamorisse in 1957, originally called 'La Conquête du Monde' (The Conquest of the World).",
          es: "Risk fue inventado por el cineasta francés Albert Lamorisse en 1957, originalmente llamado 'La Conquête du Monde' (La Conquista del Mundo).",
          de: "Risk wurde 1957 vom französischen Filmemacher Albert Lamorisse erfunden, ursprünglich 'La Conquête du Monde' (Die Eroberung der Welt) genannt.",
          nl: "Risk werd uitgevonden door Franse filmmaker Albert Lamorisse in 1957, oorspronkelijk genoemd 'La Conquête du Monde' (De Verovering van de Wereld)."
        }
      },
      {
        question: {
          en: "What is the maximum number of dice an attacker can roll in Risk?",
          es: "¿Cuál es el número máximo de dados que puede lanzar un atacante en Risk?",
          de: "Was ist die maximale Anzahl von Würfeln, die ein Angreifer bei Risk würfeln kann?",
          nl: "Wat is het maximale aantal dobbelstenen dat een aanvaller kan gooien bij Risk?"
        },
        options: [
          { en: "2 dice", es: "2 dados", de: "2 Würfel", nl: "2 dobbelstenen" },
          { en: "3 dice", es: "3 dados", de: "3 Würfel", nl: "3 dobbelstenen" },
          { en: "4 dice", es: "4 dados", de: "4 Würfel", nl: "4 dobbelstenen" },
          { en: "5 dice", es: "5 dados", de: "5 Würfel", nl: "5 dobbelstenen" }
        ],
        correct: 1,
        explanation: {
          en: "An attacker can roll a maximum of 3 dice when attacking, but must have at least 4 armies in the attacking territory (3 to attack + 1 that must remain).",
          es: "Un atacante puede lanzar un máximo de 3 dados al atacar, pero debe tener al menos 4 ejércitos en el territorio atacante (3 para atacar + 1 que debe permanecer).",
          de: "Ein Angreifer kann maximal 3 Würfel beim Angriff würfeln, muss aber mindestens 4 Armeen im angreifenden Gebiet haben (3 zum Angriff + 1 die bleiben muss).",
          nl: "Een aanvaller kan maximaal 3 dobbelstenen gooien bij een aanval, maar moet ten minste 4 legers hebben in het aanvallende gebied (3 om aan te vallen + 1 die moet blijven)."
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