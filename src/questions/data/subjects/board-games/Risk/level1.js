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
      },
      {
        question: {
          en: "What is the minimum number of reinforcement armies you receive per turn?",
          es: "¿Cuál es el número mínimo de ejércitos de refuerzo que recibes por turno?",
          de: "Wie viele Verstärkungsarmeen bekommst du mindestens pro Runde?",
          nl: "Wat is het minimum aantal versterkingslegers dat je per beurt ontvangt?"
        },
        options: [
          { en: "1", es: "1", de: "1", nl: "1" },
          { en: "2", es: "2", de: "2", nl: "2" },
          { en: "3", es: "3", de: "3", nl: "3" },
          { en: "5", es: "5", de: "5", nl: "5" }
        ],
        correct: 2,
        explanation: {
          en: "You always receive a minimum of 3 reinforcement armies per turn, even if you control fewer than 9 territories.",
          es: "Siempre recibes un mínimo de 3 ejércitos de refuerzo por turno, incluso si controlas menos de 9 territorios.",
          de: "Du bekommst immer mindestens 3 Verstärkungsarmeen pro Runde, auch wenn du weniger als 9 Gebiete kontrollierst.",
          nl: "Je ontvangt altijd minimaal 3 versterkingslegers per beurt, zelfs als je minder dan 9 gebieden controleert."
        }
      },
      {
        question: {
          en: "How many bonus armies does South America give when fully controlled?",
          es: "¿Cuántos ejércitos de bonificación da América del Sur cuando está completamente controlada?",
          de: "Wie viele Bonusarmeen gibt Südamerika, wenn es vollständig kontrolliert wird?",
          nl: "Hoeveel bonuslegers geeft Zuid-Amerika wanneer volledig gecontroleerd?"
        },
        options: [
          { en: "+2 armies", es: "+2 ejércitos", de: "+2 Armeen", nl: "+2 legers" },
          { en: "+3 armies", es: "+3 ejércitos", de: "+3 Armeen", nl: "+3 legers" },
          { en: "+4 armies", es: "+4 ejércitos", de: "+4 Armeen", nl: "+4 legers" },
          { en: "+5 armies", es: "+5 ejércitos", de: "+5 Armeen", nl: "+5 legers" }
        ],
        correct: 0,
        explanation: {
          en: "South America gives +2 bonus armies per turn when fully controlled. It has 4 territories and 2 entry points.",
          es: "América del Sur da +2 ejércitos de bonificación por turno cuando está completamente controlada. Tiene 4 territorios y 2 puntos de entrada.",
          de: "Südamerika gibt +2 Bonusarmeen pro Runde, wenn es vollständig kontrolliert wird. Es hat 4 Gebiete und 2 Eingangspunkte.",
          nl: "Zuid-Amerika geeft +2 bonuslegers per beurt wanneer volledig gecontroleerd. Het heeft 4 gebieden en 2 ingangen."
        }
      },
      {
        question: {
          en: "How many bonus armies does Europe give when fully controlled?",
          es: "¿Cuántos ejércitos de bonificación da Europa cuando está completamente controlada?",
          de: "Wie viele Bonusarmeen gibt Europa, wenn es vollständig kontrolliert wird?",
          nl: "Hoeveel bonuslegers geeft Europa wanneer volledig gecontroleerd?"
        },
        options: [
          { en: "+3 armies", es: "+3 ejércitos", de: "+3 Armeen", nl: "+3 legers" },
          { en: "+4 armies", es: "+4 ejércitos", de: "+4 Armeen", nl: "+4 legers" },
          { en: "+5 armies", es: "+5 ejércitos", de: "+5 Armeen", nl: "+5 legers" },
          { en: "+6 armies", es: "+6 ejércitos", de: "+6 Armeen", nl: "+6 legers" }
        ],
        correct: 2,
        explanation: {
          en: "Europe gives +5 bonus armies per turn when fully controlled. It has 7 territories and 4 entry points, making it moderately difficult to defend.",
          es: "Europa da +5 ejércitos de bonificación por turno cuando está completamente controlada. Tiene 7 territorios y 4 puntos de entrada, lo que la hace moderadamente difícil de defender.",
          de: "Europa gibt +5 Bonusarmeen pro Runde, wenn es vollständig kontrolliert wird. Es hat 7 Gebiete und 4 Eingangspunkte, was es mäßig schwer zu verteidigen macht.",
          nl: "Europa geeft +5 bonuslegers per beurt wanneer volledig gecontroleerd. Het heeft 7 gebieden en 4 ingangen, waardoor het matig moeilijk te verdedigen is."
        }
      },
      {
        question: {
          en: "How many bonus armies does Africa give when fully controlled?",
          es: "¿Cuántos ejércitos de bonificación da África cuando está completamente controlada?",
          de: "Wie viele Bonusarmeen gibt Afrika, wenn es vollständig kontrolliert wird?",
          nl: "Hoeveel bonuslegers geeft Afrika wanneer volledig gecontroleerd?"
        },
        options: [
          { en: "+2 armies", es: "+2 ejércitos", de: "+2 Armeen", nl: "+2 legers" },
          { en: "+3 armies", es: "+3 ejércitos", de: "+3 Armeen", nl: "+3 legers" },
          { en: "+4 armies", es: "+4 ejércitos", de: "+4 Armeen", nl: "+4 legers" },
          { en: "+5 armies", es: "+5 ejércitos", de: "+5 Armeen", nl: "+5 legers" }
        ],
        correct: 1,
        explanation: {
          en: "Africa gives +3 bonus armies per turn when fully controlled. It has 6 territories and 3 entry points, making it relatively easy to defend.",
          es: "África da +3 ejércitos de bonificación por turno cuando está completamente controlada. Tiene 6 territorios y 3 puntos de entrada, lo que la hace relativamente fácil de defender.",
          de: "Afrika gibt +3 Bonusarmeen pro Runde, wenn es vollständig kontrolliert wird. Es hat 6 Gebiete und 3 Eingangspunkte, was es relativ leicht zu verteidigen macht.",
          nl: "Afrika geeft +3 bonuslegers per beurt wanneer volledig gecontroleerd. Het heeft 6 gebieden en 3 ingangen, waardoor het relatief gemakkelijk te verdedigen is."
        }
      },
      {
        question: {
          en: "How many bonus armies does Australia give when fully controlled?",
          es: "¿Cuántos ejércitos de bonificación da Australia cuando está completamente controlada?",
          de: "Wie viele Bonusarmeen gibt Australien, wenn es vollständig kontrolliert wird?",
          nl: "Hoeveel bonuslegers geeft Australië wanneer volledig gecontroleerd?"
        },
        options: [
          { en: "+1 army", es: "+1 ejército", de: "+1 Armee", nl: "+1 leger" },
          { en: "+2 armies", es: "+2 ejércitos", de: "+2 Armeen", nl: "+2 legers" },
          { en: "+3 armies", es: "+3 ejércitos", de: "+3 Armeen", nl: "+3 legers" },
          { en: "+4 armies", es: "+4 ejércitos", de: "+4 Armeen", nl: "+4 legers" }
        ],
        correct: 1,
        explanation: {
          en: "Australia gives +2 bonus armies per turn when fully controlled. It has only 4 territories and 1 entry point, making it the easiest continent to defend.",
          es: "Australia da +2 ejércitos de bonificación por turno cuando está completamente controlada. Tiene solo 4 territorios y 1 punto de entrada, lo que la hace el continente más fácil de defender.",
          de: "Australien gibt +2 Bonusarmeen pro Runde, wenn es vollständig kontrolliert wird. Es hat nur 4 Gebiete und 1 Eingangspunkt, was es zum am einfachsten zu verteidigenden Kontinent macht.",
          nl: "Australië geeft +2 bonuslegers per beurt wanneer volledig gecontroleerd. Het heeft slechts 4 gebieden en 1 ingang, waardoor het het gemakkelijkst te verdedigen continent is."
        }
      },
      {
        question: {
          en: "How many armies do you get for trading in your first set of Risk cards?",
          es: "¿Cuántos ejércitos obtienes por intercambiar tu primer conjunto de cartas de Risk?",
          de: "Wie viele Armeen bekommst du für das Eintauschen deines ersten Satzes Risk-Karten?",
          nl: "Hoeveel legers krijg je voor het inruilen van je eerste set Risk-kaarten?"
        },
        options: [
          { en: "4 armies", es: "4 ejércitos", de: "4 Armeen", nl: "4 legers" },
          { en: "6 armies", es: "6 ejércitos", de: "6 Armeen", nl: "6 legers" },
          { en: "8 armies", es: "8 ejércitos", de: "8 Armeen", nl: "8 legers" },
          { en: "10 armies", es: "10 ejércitos", de: "10 Armeen", nl: "10 legers" }
        ],
        correct: 0,
        explanation: {
          en: "The first set of cards traded in gives 4 armies. Each subsequent trade-in increases: 6, 8, 10, 12, 15, and so on.",
          es: "El primer conjunto de cartas intercambiadas da 4 ejércitos. Cada intercambio subsiguiente aumenta: 6, 8, 10, 12, 15, y así sucesivamente.",
          de: "Der erste eingetauschte Kartensatz gibt 4 Armeen. Jeder folgende Tausch erhöht sich: 6, 8, 10, 12, 15, und so weiter.",
          nl: "De eerste set ingeruilde kaarten geeft 4 legers. Elke volgende inruil neemt toe: 6, 8, 10, 12, 15, enzovoort."
        }
      },
      {
        question: {
          en: "When do you receive a Risk card?",
          es: "¿Cuándo recibes una carta de Risk?",
          de: "Wann bekommst du eine Risk-Karte?",
          nl: "Wanneer ontvang je een Risk-kaart?"
        },
        options: [
          { en: "At the start of every turn", es: "Al inicio de cada turno", de: "Zu Beginn jedes Zuges", nl: "Aan het begin van elke beurt" },
          { en: "After conquering at least 1 territory", es: "Después de conquistar al menos 1 territorio", de: "Nach Eroberung von mindestens 1 Gebiet", nl: "Na het veroveren van minstens 1 gebied" },
          { en: "After eliminating a player", es: "Después de eliminar a un jugador", de: "Nach Eliminierung eines Spielers", nl: "Na het elimineren van een speler" },
          { en: "For controlling a continent", es: "Por controlar un continente", de: "Für die Kontrolle eines Kontinents", nl: "Voor het controleren van een continent" }
        ],
        correct: 1,
        explanation: {
          en: "You receive one Risk card at the end of your turn if you conquered at least one territory during that turn.",
          es: "Recibes una carta de Risk al final de tu turno si conquistaste al menos un territorio durante ese turno.",
          de: "Du bekommst eine Risk-Karte am Ende deines Zuges, wenn du mindestens ein Gebiet während dieses Zuges erobert hast.",
          nl: "Je ontvangt één Risk-kaart aan het einde van je beurt als je ten minste één gebied hebt veroverd tijdens die beurt."
        }
      },
      {
        question: {
          en: "What happens if you have 5 or more Risk cards at the start of your turn?",
          es: "¿Qué pasa si tienes 5 o más cartas de Risk al inicio de tu turno?",
          de: "Was passiert, wenn du 5 oder mehr Risk-Karten zu Beginn deines Zuges hast?",
          nl: "Wat gebeurt er als je 5 of meer Risk-kaarten hebt aan het begin van je beurt?"
        },
        options: [
          { en: "You can choose to trade or keep them", es: "Puedes elegir intercambiarlas o mantenerlas", de: "Du kannst wählen, ob du sie tauschst oder behältst", nl: "Je kunt kiezen om ze in te ruilen of te houden" },
          { en: "You must trade in at least one set", es: "Debes intercambiar al menos un conjunto", de: "Du musst mindestens einen Satz eintauschen", nl: "Je moet ten minste één set inruilen" },
          { en: "You lose the extra cards", es: "Pierdes las cartas extra", de: "Du verlierst die zusätzlichen Karten", nl: "Je verliest de extra kaarten" },
          { en: "Nothing, no limit on cards", es: "Nada, no hay límite de cartas", de: "Nichts, keine Grenze für Karten", nl: "Niets, geen limiet op kaarten" }
        ],
        correct: 1,
        explanation: {
          en: "If you have 5 or more cards at the start of your turn, you must trade in at least one set for reinforcement armies.",
          es: "Si tienes 5 o más cartas al inicio de tu turno, debes intercambiar al menos un conjunto por ejércitos de refuerzo.",
          de: "Wenn du 5 oder mehr Karten zu Beginn deines Zuges hast, musst du mindestens einen Satz für Verstärkungsarmeen eintauschen.",
          nl: "Als je 5 of meer kaarten hebt aan het begin van je beurt, moet je ten minste één set inruilen voor versterkingslegers."
        }
      },
      {
        question: {
          en: "Can you attack a territory that is not adjacent to your attacking territory?",
          es: "¿Puedes atacar un territorio que no es adyacente a tu territorio atacante?",
          de: "Kannst du ein Gebiet angreifen, das nicht an dein angreifendes Gebiet angrenzt?",
          nl: "Kun je een gebied aanvallen dat niet grenst aan je aanvallende gebied?"
        },
        options: [
          { en: "Yes, if you have enough armies", es: "Sí, si tienes suficientes ejércitos", de: "Ja, wenn du genug Armeen hast", nl: "Ja, als je genoeg legers hebt" },
          { en: "No, only adjacent territories", es: "No, solo territorios adyacentes", de: "Nein, nur angrenzende Gebiete", nl: "Nee, alleen aangrenzende gebieden" },
          { en: "Yes, but costs extra armies", es: "Sí, pero cuesta ejércitos extra", de: "Ja, aber es kostet zusätzliche Armeen", nl: "Ja, maar kost extra legers" },
          { en: "Yes, with a card bonus", es: "Sí, con una bonificación de carta", de: "Ja, mit einem Kartenbonus", nl: "Ja, met een kaartbonus" }
        ],
        correct: 1,
        explanation: {
          en: "You can only attack territories that are adjacent (connected by a line or sea route) to the territory you are attacking from.",
          es: "Solo puedes atacar territorios que sean adyacentes (conectados por una línea o ruta marítima) al territorio desde el que atacas.",
          de: "Du kannst nur Gebiete angreifen, die an das Gebiet angrenzen (durch eine Linie oder Seeroute verbunden), von dem du aus angreifst.",
          nl: "Je kunt alleen gebieden aanvallen die grenzen (verbonden door een lijn of zeeroute) aan het gebied van waaruit je aanvalt."
        }
      },
      {
        question: {
          en: "After conquering a territory, how many armies must you move into it?",
          es: "Después de conquistar un territorio, ¿cuántos ejércitos debes mover a él?",
          de: "Nach der Eroberung eines Gebiets, wie viele Armeen musst du hineinbewegen?",
          nl: "Na het veroveren van een gebied, hoeveel legers moet je erheen verplaatsen?"
        },
        options: [
          { en: "At least 1 army", es: "Al menos 1 ejército", de: "Mindestens 1 Armee", nl: "Minstens 1 leger" },
          { en: "At least the number of dice used", es: "Al menos el número de dados usados", de: "Mindestens die Anzahl der verwendeten Würfel", nl: "Minstens het aantal gebruikte dobbelstenen" },
          { en: "All attacking armies", es: "Todos los ejércitos atacantes", de: "Alle angreifenden Armeen", nl: "Alle aanvallende legers" },
          { en: "Exactly 3 armies", es: "Exactamente 3 ejércitos", de: "Genau 3 Armeen", nl: "Precies 3 legers" }
        ],
        correct: 1,
        explanation: {
          en: "After conquering a territory, you must move at least as many armies as the number of dice you used in the final attack into the newly conquered territory.",
          es: "Después de conquistar un territorio, debes mover al menos tantos ejércitos como el número de dados que usaste en el ataque final al territorio recién conquistado.",
          de: "Nach der Eroberung eines Gebiets musst du mindestens so viele Armeen wie die Anzahl der Würfel, die du im letzten Angriff verwendet hast, in das neu eroberte Gebiet bewegen.",
          nl: "Na het veroveren van een gebied moet je ten minste evenveel legers verplaatsen als het aantal dobbelstenen dat je gebruikte in de laatste aanval naar het nieuw veroverde gebied."
        }
      },
      {
        question: {
          en: "How many entry points does North America have?",
          es: "¿Cuántos puntos de entrada tiene América del Norte?",
          de: "Wie viele Eingangspunkte hat Nordamerika?",
          nl: "Hoeveel ingangen heeft Noord-Amerika?"
        },
        options: [
          { en: "1 entry point", es: "1 punto de entrada", de: "1 Eingangspunkt", nl: "1 ingang" },
          { en: "2 entry points", es: "2 puntos de entrada", de: "2 Eingangspunkte", nl: "2 ingangen" },
          { en: "3 entry points", es: "3 puntos de entrada", de: "3 Eingangspunkte", nl: "3 ingangen" },
          { en: "4 entry points", es: "4 puntos de entrada", de: "4 Eingangspunkte", nl: "4 ingangen" }
        ],
        correct: 2,
        explanation: {
          en: "North America has 3 entry points: from Asia (through Alaska), from Europe (through Greenland), and from South America (through Central America).",
          es: "América del Norte tiene 3 puntos de entrada: desde Asia (a través de Alaska), desde Europa (a través de Groenlandia) y desde América del Sur (a través de Centroamérica).",
          de: "Nordamerika hat 3 Eingangspunkte: von Asien (über Alaska), von Europa (über Grönland) und von Südamerika (über Zentralamerika).",
          nl: "Noord-Amerika heeft 3 ingangen: vanuit Azië (via Alaska), vanuit Europa (via Groenland) en vanuit Zuid-Amerika (via Centraal-Amerika)."
        }
      },
      {
        question: {
          en: "What can a Wild card be used as when trading in cards?",
          es: "¿Como qué se puede usar una carta Comodín al intercambiar cartas?",
          de: "Als was kann eine Joker-Karte beim Kartentausch verwendet werden?",
          nl: "Waarvoor kan een Wild kaart worden gebruikt bij het inruilen van kaarten?"
        },
        options: [
          { en: "Only as Infantry", es: "Solo como Infantería", de: "Nur als Infanterie", nl: "Alleen als Infanterie" },
          { en: "As any card type needed", es: "Como cualquier tipo de carta necesaria", de: "Als jeden benötigten Kartentyp", nl: "Als elk benodigde kaarttype" },
          { en: "To double the armies received", es: "Para duplicar los ejércitos recibidos", de: "Um die erhaltenen Armeen zu verdoppeln", nl: "Om de ontvangen legers te verdubbelen" },
          { en: "As two cards at once", es: "Como dos cartas a la vez", de: "Als zwei Karten gleichzeitig", nl: "Als twee kaarten tegelijk" }
        ],
        correct: 1,
        explanation: {
          en: "A Wild card can substitute for any card type (Infantry, Cavalry, or Artillery) when trading in a set of cards for armies.",
          es: "Una carta Comodín puede sustituir cualquier tipo de carta (Infantería, Caballería o Artillería) al intercambiar un conjunto de cartas por ejércitos.",
          de: "Eine Joker-Karte kann jeden Kartentyp (Infanterie, Kavallerie oder Artillerie) ersetzen, wenn man einen Kartensatz für Armeen eintauscht.",
          nl: "Een Wild kaart kan elk kaarttype (Infanterie, Cavalerie of Artillerie) vervangen bij het inruilen van een set kaarten voor legers."
        }
      },
      {
        question: {
          en: "What bonus do you get if you trade in a card showing a territory you occupy?",
          es: "¿Qué bonificación obtienes si intercambias una carta que muestra un territorio que ocupas?",
          de: "Welchen Bonus bekommst du, wenn du eine Karte eintauschst, die ein von dir besetztes Gebiet zeigt?",
          nl: "Welke bonus krijg je als je een kaart inruilt die een gebied toont dat je bezet?"
        },
        options: [
          { en: "No bonus", es: "Sin bonificación", de: "Kein Bonus", nl: "Geen bonus" },
          { en: "+1 extra army", es: "+1 ejército extra", de: "+1 zusätzliche Armee", nl: "+1 extra leger" },
          { en: "+2 extra armies", es: "+2 ejércitos extra", de: "+2 zusätzliche Armeen", nl: "+2 extra legers" },
          { en: "+3 extra armies", es: "+3 ejércitos extra", de: "+3 zusätzliche Armeen", nl: "+3 extra legers" }
        ],
        correct: 2,
        explanation: {
          en: "If you trade in a card showing a territory you currently occupy, you get +2 extra armies placed immediately on that territory.",
          es: "Si intercambias una carta que muestra un territorio que actualmente ocupas, obtienes +2 ejércitos extra colocados inmediatamente en ese territorio.",
          de: "Wenn du eine Karte eintauschst, die ein Gebiet zeigt, das du derzeit besetzt, bekommst du +2 zusätzliche Armeen, die sofort auf diesem Gebiet platziert werden.",
          nl: "Als je een kaart inruilt die een gebied toont dat je momenteel bezet, krijg je +2 extra legers die onmiddellijk op dat gebied worden geplaatst."
        }
      },
      {
        question: {
          en: "What is the maximum number of dice a defender can roll?",
          es: "¿Cuál es el número máximo de dados que puede tirar un defensor?",
          de: "Was ist die maximale Anzahl von Würfeln, die ein Verteidiger würfeln kann?",
          nl: "Wat is het maximale aantal dobbelstenen dat een verdediger kan gooien?"
        },
        options: [
          { en: "1 die", es: "1 dado", de: "1 Würfel", nl: "1 dobbelsteen" },
          { en: "2 dice", es: "2 dados", de: "2 Würfel", nl: "2 dobbelstenen" },
          { en: "3 dice", es: "3 dados", de: "3 Würfel", nl: "3 dobbelstenen" },
          { en: "4 dice", es: "4 dados", de: "4 Würfel", nl: "4 dobbelstenen" }
        ],
        correct: 1,
        explanation: {
          en: "A defender can roll a maximum of 2 dice when defending, provided they have at least 2 armies in the defending territory.",
          es: "Un defensor puede tirar un máximo de 2 dados al defender, siempre que tenga al menos 2 ejércitos en el territorio que defiende.",
          de: "Ein Verteidiger kann maximal 2 Würfel beim Verteidigen würfeln, vorausgesetzt er hat mindestens 2 Armeen im verteidigenden Gebiet.",
          nl: "Een verdediger kan maximaal 2 dobbelstenen gooien bij verdediging, mits ze ten minste 2 legers hebben in het verdedigende gebied."
        }
      },
      {
        question: {
          en: "During fortification, what path must exist between territories?",
          es: "Durante la fortificación, ¿qué camino debe existir entre territorios?",
          de: "Während der Befestigung, welcher Pfad muss zwischen Gebieten existieren?",
          nl: "Tijdens versterking, welk pad moet er bestaan tussen gebieden?"
        },
        options: [
          { en: "Any path through any territories", es: "Cualquier camino a través de cualquier territorio", de: "Jeder Pfad durch beliebige Gebiete", nl: "Elk pad door willekeurige gebieden" },
          { en: "A path through your own territories", es: "Un camino a través de tus propios territorios", de: "Ein Pfad durch deine eigenen Gebiete", nl: "Een pad door je eigen gebieden" },
          { en: "Must be on same continent", es: "Deben estar en el mismo continente", de: "Müssen auf demselben Kontinent sein", nl: "Moeten op hetzelfde continent zijn" },
          { en: "Direct adjacency only", es: "Solo adyacencia directa", de: "Nur direkte Nachbarschaft", nl: "Alleen directe aangrenzendheid" }
        ],
        correct: 1,
        explanation: {
          en: "During fortification, you can move armies from one territory to another only if there is a continuous path through territories you control.",
          es: "Durante la fortificación, puedes mover ejércitos de un territorio a otro solo si hay un camino continuo a través de territorios que controlas.",
          de: "Während der Befestigung kannst du Armeen von einem Gebiet zu einem anderen nur bewegen, wenn es einen durchgehenden Pfad durch Gebiete gibt, die du kontrollierst.",
          nl: "Tijdens versterking kun je legers alleen van het ene gebied naar het andere verplaatsen als er een doorlopend pad is door gebieden die je controleert."
        }
      },
      {
        question: {
          en: "Can you attack from multiple territories in the same turn?",
          es: "¿Puedes atacar desde múltiples territorios en el mismo turno?",
          de: "Kannst du von mehreren Gebieten im selben Zug angreifen?",
          nl: "Kun je vanuit meerdere gebieden aanvallen in dezelfde beurt?"
        },
        options: [
          { en: "No, only one territory per turn", es: "No, solo un territorio por turno", de: "Nein, nur ein Gebiet pro Zug", nl: "Nee, slechts één gebied per beurt" },
          { en: "Yes, as many as you want", es: "Sí, tantos como quieras", de: "Ja, so viele du willst", nl: "Ja, zoveel als je wilt" },
          { en: "Yes, but only 3 maximum", es: "Sí, pero solo 3 máximo", de: "Ja, aber nur maximal 3", nl: "Ja, maar slechts 3 maximum" },
          { en: "Yes, with a card bonus", es: "Sí, con una bonificación de carta", de: "Ja, mit einem Kartenbonus", nl: "Ja, met een kaartbonus" }
        ],
        correct: 1,
        explanation: {
          en: "During your attack phase, you can attack from as many different territories as you want, as long as each has enough armies.",
          es: "Durante tu fase de ataque, puedes atacar desde tantos territorios diferentes como quieras, siempre que cada uno tenga suficientes ejércitos.",
          de: "Während deiner Angriffsphase kannst du von so vielen verschiedenen Gebieten angreifen wie du willst, solange jedes genug Armeen hat.",
          nl: "Tijdens je aanvalsfase kun je vanuit zoveel verschillende gebieden aanvallen als je wilt, zolang elk genoeg legers heeft."
        }
      },
      {
        question: {
          en: "Is the attack phase mandatory during your turn?",
          es: "¿Es obligatoria la fase de ataque durante tu turno?",
          de: "Ist die Angriffsphase während deines Zuges verpflichtend?",
          nl: "Is de aanvalsfase verplicht tijdens je beurt?"
        },
        options: [
          { en: "Yes, you must attack once", es: "Sí, debes atacar una vez", de: "Ja, du musst einmal angreifen", nl: "Ja, je moet één keer aanvallen" },
          { en: "No, it's optional", es: "No, es opcional", de: "Nein, es ist optional", nl: "Nee, het is optioneel" },
          { en: "Yes, you must attack twice", es: "Sí, debes atacar dos veces", de: "Ja, du musst zweimal angreifen", nl: "Ja, je moet twee keer aanvallen" },
          { en: "Only if you have cards", es: "Solo si tienes cartas", de: "Nur wenn du Karten hast", nl: "Alleen als je kaarten hebt" }
        ],
        correct: 1,
        explanation: {
          en: "The attack phase is optional. You can choose not to attack at all during your turn and skip directly to the fortification phase.",
          es: "La fase de ataque es opcional. Puedes elegir no atacar en absoluto durante tu turno y saltar directamente a la fase de fortificación.",
          de: "Die Angriffsphase ist optional. Du kannst wählen, während deines Zuges überhaupt nicht anzugreifen und direkt zur Befestigungsphase zu gehen.",
          nl: "De aanvalsfase is optioneel. Je kunt ervoor kiezen helemaal niet aan te vallen tijdens je beurt en direct naar de versterkingsfase te gaan."
        }
      },
      {
        question: {
          en: "In what year was Risk first published?",
          es: "¿En qué año se publicó Risk por primera vez?",
          de: "In welchem Jahr wurde Risk erstmals veröffentlicht?",
          nl: "In welk jaar werd Risk voor het eerst uitgegeven?"
        },
        options: [
          { en: "1955", es: "1955", de: "1955", nl: "1955" },
          { en: "1957", es: "1957", de: "1957", nl: "1957" },
          { en: "1959", es: "1959", de: "1959", nl: "1959" },
          { en: "1961", es: "1961", de: "1961", nl: "1961" }
        ],
        correct: 1,
        explanation: {
          en: "Risk was first published in 1957 in France as 'La Conquête du Monde' before being released internationally as Risk in 1959.",
          es: "Risk se publicó por primera vez en 1957 en Francia como 'La Conquête du Monde' antes de ser lanzado internacionalmente como Risk en 1959.",
          de: "Risk wurde erstmals 1957 in Frankreich als 'La Conquête du Monde' veröffentlicht, bevor es 1959 international als Risk herausgebracht wurde.",
          nl: "Risk werd voor het eerst uitgegeven in 1957 in Frankrijk als 'La Conquête du Monde' voordat het in 1959 internationaal werd uitgebracht als Risk."
        }
      },
      {
        question: {
          en: "What is the minimum number of players needed to play Risk?",
          es: "¿Cuál es el número mínimo de jugadores necesarios para jugar Risk?",
          de: "Wie viele Spieler werden mindestens benötigt, um Risk zu spielen?",
          nl: "Wat is het minimum aantal spelers dat nodig is om Risk te spelen?"
        },
        options: [
          { en: "2 players", es: "2 jugadores", de: "2 Spieler", nl: "2 spelers" },
          { en: "3 players", es: "3 jugadores", de: "3 Spieler", nl: "3 spelers" },
          { en: "4 players", es: "4 jugadores", de: "4 Spieler", nl: "4 spelers" },
          { en: "5 players", es: "5 jugadores", de: "5 Spieler", nl: "5 spelers" }
        ],
        correct: 0,
        explanation: {
          en: "Risk can be played with a minimum of 2 players, although the game is more strategic and engaging with 3 or more players.",
          es: "Risk se puede jugar con un mínimo de 2 jugadores, aunque el juego es más estratégico y atractivo con 3 o más jugadores.",
          de: "Risk kann mit mindestens 2 Spielern gespielt werden, obwohl das Spiel mit 3 oder mehr Spielern strategischer und spannender ist.",
          nl: "Risk kan worden gespeeld met minimaal 2 spelers, hoewel het spel strategischer en boeiender is met 3 of meer spelers."
        }
      },
      {
        question: {
          en: "What is the maximum number of players in classic Risk?",
          es: "¿Cuál es el número máximo de jugadores en el Risk clásico?",
          de: "Wie viele Spieler können maximal beim klassischen Risk spielen?",
          nl: "Wat is het maximale aantal spelers bij klassiek Risk?"
        },
        options: [
          { en: "4 players", es: "4 jugadores", de: "4 Spieler", nl: "4 spelers" },
          { en: "5 players", es: "5 jugadores", de: "5 Spieler", nl: "5 spelers" },
          { en: "6 players", es: "6 jugadores", de: "6 Spieler", nl: "6 spelers" },
          { en: "8 players", es: "8 jugadores", de: "8 Spieler", nl: "8 spelers" }
        ],
        correct: 2,
        explanation: {
          en: "Classic Risk supports a maximum of 6 players, with each player receiving a different colored army and competing for world domination.",
          es: "El Risk clásico admite un máximo de 6 jugadores, cada jugador recibe un ejército de diferente color y compite por la dominación mundial.",
          de: "Das klassische Risk unterstützt maximal 6 Spieler, wobei jeder Spieler eine andersfarbige Armee erhält und um die Weltherrschaft kämpft.",
          nl: "Klassiek Risk ondersteunt maximaal 6 spelers, waarbij elke speler een anders gekleurd leger ontvangt en strijdt om wereldheerschappij."
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
