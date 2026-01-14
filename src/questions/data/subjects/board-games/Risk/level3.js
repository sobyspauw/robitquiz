// Quiz Template - Level 3: Board Games - Risk
(function() {
  const level3 = {
    name: {
      en: "Risk - Intermediate",
      es: "Risk - Intermedio",
      de: "Risk - Mittelstufe",
      nl: "Risk - Gevorderd"
    },
    questions: [
      {
        question: {
          en: "What is the probability of winning when attacking with 3 dice against 2 defending dice?",
          es: "¿Cuál es la probabilidad de ganar al atacar con 3 dados contra 2 dados defensores?",
          de: "Wie hoch ist die Wahrscheinlichkeit zu gewinnen, wenn man mit 3 Würfeln gegen 2 verteidigende Würfel angreift?",
          nl: "Wat is de kans op winnen bij aanvallen met 3 dobbelstenen tegen 2 verdedigende dobbelstenen?"
        },
        options: [
          { en: "Attacker favored (~37%)", es: "Favorece al atacante (~37%)", de: "Angreifer begünstigt (~37%)", nl: "Aanvaller bevoordeeld (~37%)" },
          { en: "Defender favored (~63%)", es: "Favorece al defensor (~63%)", de: "Verteidiger begünstigt (~63%)", nl: "Verdediger bevoordeeld (~63%)" },
          { en: "Equal odds (50%)", es: "Probabilidad igual (50%)", de: "Gleiche Chancen (50%)", nl: "Gelijke kansen (50%)" },
          { en: "Highly favors attacker (~75%)", es: "Favorece mucho al atacante (~75%)", de: "Stark Angreifer begünstigt (~75%)", nl: "Sterk aanvaller bevoordeeld (~75%)" }
        ],
        correct: 0,
        explanation: {
          en: "When attacking with 3 dice vs 2 defending dice, the attacker has approximately 37% chance of eliminating 2 armies, 29% chance of trading 1-for-1, and 34% chance of losing 2 armies.",
          es: "Al atacar con 3 dados vs 2 dados defensores, el atacante tiene aproximadamente 37% de probabilidad de eliminar 2 ejércitos, 29% de probabilidad de intercambiar 1 por 1, y 34% de probabilidad de perder 2 ejércitos.",
          de: "Beim Angriff mit 3 Würfeln gegen 2 verteidigende Würfel hat der Angreifer etwa 37% Chance, 2 Armeen zu eliminieren, 29% Chance auf 1-zu-1-Tausch und 34% Chance, 2 Armeen zu verlieren.",
          nl: "Bij aanvallen met 3 dobbelstenen tegen 2 verdedigende dobbelstenen heeft de aanvaller ongeveer 37% kans om 2 legers te elimineren, 29% kans op 1-voor-1 ruil, en 34% kans om 2 legers te verliezen."
        }
      },
      {
        question: {
          en: "What is the 'island hopping' strategy?",
          es: "¿Qué es la estrategia de 'salto de islas'?",
          de: "Was ist die 'Inselspringen'-Strategie?",
          nl: "Wat is de 'eilandhoppen'-strategie?"
        },
        options: [
          { en: "Conquering continents one at a time", es: "Conquistar continentes uno a la vez", de: "Kontinente einzeln erobern", nl: "Continenten één voor één veroveren" },
          { en: "Avoiding Australia", es: "Evitar Australia", de: "Australien vermeiden", nl: "Australië vermijden" },
          { en: "Controlling disconnected territories", es: "Controlar territorios desconectados", de: "Nicht verbundene Gebiete kontrollieren", nl: "Niet-verbonden gebieden controleren" },
          { en: "Moving between Australia and Asia", es: "Moverse entre Australia y Asia", de: "Zwischen Australien und Asien bewegen", nl: "Bewegen tussen Australië en Azië" }
        ],
        correct: 0,
        explanation: {
          en: "Island hopping refers to the strategy of securing one continent completely before attempting to take another, building up strength incrementally rather than spreading forces thin.",
          es: "El salto de islas se refiere a la estrategia de asegurar un continente completamente antes de intentar tomar otro, acumulando fuerza incremental en lugar de dispersar fuerzas.",
          de: "Inselspringen bezieht sich auf die Strategie, einen Kontinent vollständig zu sichern, bevor man versucht, einen anderen zu nehmen, und schrittweise Stärke aufzubauen, anstatt Kräfte zu verteilen.",
          nl: "Eilandhoppen verwijst naar de strategie om één continent volledig veilig te stellen voordat je een ander probeert te nemen, geleidelijk kracht opbouwen in plaats van krachten dun te spreiden."
        }
      },
      {
        question: {
          en: "Which two territories form the key to controlling both Europe and Asia?",
          es: "¿Qué dos territorios forman la clave para controlar tanto Europa como Asia?",
          de: "Welche zwei Gebiete sind der Schlüssel zur Kontrolle von Europa und Asien?",
          nl: "Welke twee gebieden vormen de sleutel tot het controleren van zowel Europa als Azië?"
        },
        options: [
          { en: "Ukraine and Middle East", es: "Ucrania y Medio Oriente", de: "Ukraine und Naher Osten", nl: "Oekraïne en Midden-Oosten" },
          { en: "Iceland and Scandinavia", es: "Islandia y Escandinavia", de: "Island und Skandinavien", nl: "IJsland en Scandinavië" },
          { en: "Egypt and India", es: "Egipto e India", de: "Ägypten und Indien", nl: "Egypte en India" },
          { en: "Alaska and Kamchatka", es: "Alaska y Kamchatka", de: "Alaska und Kamtschatka", nl: "Alaska en Kamtsjatka" }
        ],
        correct: 0,
        explanation: {
          en: "Ukraine and Middle East are the critical connection points between Europe and Asia. Controlling both allows you to consolidate a massive empire with +12 armies per turn.",
          es: "Ucrania y Medio Oriente son los puntos de conexión críticos entre Europa y Asia. Controlar ambos te permite consolidar un imperio masivo con +12 ejércitos por turno.",
          de: "Ukraine und Naher Osten sind die kritischen Verbindungspunkte zwischen Europa und Asien. Die Kontrolle beider ermöglicht es dir, ein massives Imperium mit +12 Armeen pro Runde zu konsolidieren.",
          nl: "Oekraïne en Midden-Oosten zijn de kritieke verbindingspunten tussen Europa en Azië. Het controleren van beide stelt je in staat een enorm rijk te consolideren met +12 legers per beurt."
        }
      },
      {
        question: {
          en: "What is the optimal time to trade in your first set of cards?",
          es: "¿Cuál es el momento óptimo para canjear tu primer conjunto de cartas?",
          de: "Wann ist der optimale Zeitpunkt, deinen ersten Kartensatz einzutauschen?",
          nl: "Wat is het optimale moment om je eerste set kaarten in te ruilen?"
        },
        options: [
          { en: "As soon as possible", es: "Lo antes posible", de: "So schnell wie möglich", nl: "Zo snel mogelijk" },
          { en: "When you need armies urgently", es: "Cuando necesites ejércitos urgentemente", de: "Wenn du dringend Armeen brauchst", nl: "Wanneer je dringend legers nodig hebt" },
          { en: "Never, save them", es: "Nunca, guárdalas", de: "Niemals, behalte sie", nl: "Nooit, bewaar ze" },
          { en: "Only at 5+ cards", es: "Solo con 5+ cartas", de: "Nur bei 5+ Karten", nl: "Alleen bij 5+ kaarten" }
        ],
        correct: 1,
        explanation: {
          en: "The optimal strategy is to hold cards until you need them for a critical attack or defense, as card values increase with each trade globally. However, don't wait if you're in danger.",
          es: "La estrategia óptima es mantener las cartas hasta que las necesites para un ataque o defensa crítica, ya que los valores de las cartas aumentan con cada canje globalmente. Sin embargo, no esperes si estás en peligro.",
          de: "Die optimale Strategie ist, Karten zu behalten, bis du sie für einen kritischen Angriff oder eine Verteidigung brauchst, da Kartenwerte mit jedem globalen Tausch steigen. Warte jedoch nicht, wenn du in Gefahr bist.",
          nl: "De optimale strategie is om kaarten vast te houden totdat je ze nodig hebt voor een kritieke aanval of verdediging, aangezien kaartwaarden toenemen met elke wereldwijde ruil. Wacht echter niet als je in gevaar bent."
        }
      },
      {
        question: {
          en: "How many armies do you typically need to successfully conquer a continent?",
          es: "¿Cuántos ejércitos sueles necesitar para conquistar con éxito un continente?",
          de: "Wie viele Armeen brauchst du normalerweise, um einen Kontinent erfolgreich zu erobern?",
          nl: "Hoeveel legers heb je doorgaans nodig om een continent succesvol te veroveren?"
        },
        options: [
          { en: "Twice the defending armies", es: "El doble de los ejércitos defensores", de: "Doppelt so viele wie die verteidigenden Armeen", nl: "Twee keer de verdedigende legers" },
          { en: "Three times the defending armies", es: "El triple de los ejércitos defensores", de: "Dreimal so viele wie die verteidigenden Armeen", nl: "Drie keer de verdedigende legers" },
          { en: "Equal to defending armies", es: "Igual a los ejércitos defensores", de: "Gleich viele wie die verteidigenden Armeen", nl: "Gelijk aan verdedigende legers" },
          { en: "Half the defending armies", es: "La mitad de los ejércitos defensores", de: "Halb so viele wie die verteidigenden Armeen", nl: "De helft van de verdedigende legers" }
        ],
        correct: 1,
        explanation: {
          en: "Due to the defender's advantage in Risk, you typically need about 3 times as many armies as the defender to ensure a successful conquest with minimal losses.",
          es: "Debido a la ventaja del defensor en Risk, típicamente necesitas aproximadamente 3 veces tantos ejércitos como el defensor para asegurar una conquista exitosa con pérdidas mínimas.",
          de: "Aufgrund des Verteidigervorteils bei Risk benötigst du normalerweise etwa 3-mal so viele Armeen wie der Verteidiger, um eine erfolgreiche Eroberung mit minimalen Verlusten sicherzustellen.",
          nl: "Vanwege het verdedigersvoordeel bij Risk heb je doorgaans ongeveer 3 keer zoveel legers nodig als de verdediger om een succesvolle verovering met minimale verliezen te garanderen."
        }
      },
      {
        question: {
          en: "What is the 'continent denial' strategy?",
          es: "¿Qué es la estrategia de 'negación de continente'?",
          de: "Was ist die 'Kontinentverweigerungs'-Strategie?",
          nl: "Wat is de 'continentontzegging'-strategie?"
        },
        options: [
          { en: "Preventing opponents from getting continent bonuses", es: "Prevenir que los oponentes obtengan bonus de continente", de: "Verhindern, dass Gegner Kontinentboni erhalten", nl: "Voorkomen dat tegenstanders continentbonussen krijgen" },
          { en: "Avoiding all continents", es: "Evitar todos los continentes", de: "Alle Kontinente vermeiden", nl: "Alle continenten vermijden" },
          { en: "Only taking one continent", es: "Solo tomar un continente", de: "Nur einen Kontinent nehmen", nl: "Slechts één continent nemen" },
          { en: "Trading territories equally", es: "Intercambiar territorios equitativamente", de: "Gebiete gleichmäßig tauschen", nl: "Gebieden gelijk ruilen" }
        ],
        correct: 0,
        explanation: {
          en: "Continent denial involves holding just one territory in an opponent's continent to prevent them from getting the bonus, weakening them strategically without major resource commitment.",
          es: "La negación de continente implica mantener solo un territorio en el continente de un oponente para evitar que obtenga el bonus, debilitándolos estratégicamente sin un compromiso mayor de recursos.",
          de: "Kontinentverweigerung beinhaltet, nur ein Gebiet in einem gegnerischen Kontinent zu halten, um zu verhindern, dass sie den Bonus erhalten, und sie strategisch zu schwächen ohne große Ressourcenbindung.",
          nl: "Continentontzegging houdt in dat je slechts één gebied in het continent van een tegenstander houdt om te voorkomen dat ze de bonus krijgen, ze strategisch verzwakken zonder grote middeleninzet."
        }
      },
      {
        question: {
          en: "Which combination of continents is considered the strongest to hold simultaneously?",
          es: "¿Qué combinación de continentes se considera la más fuerte para mantener simultáneamente?",
          de: "Welche Kombination von Kontinenten gilt als die stärkste, um sie gleichzeitig zu halten?",
          nl: "Welke combinatie van continenten wordt beschouwd als de sterkste om gelijktijdig vast te houden?"
        },
        options: [
          { en: "Australia and South America", es: "Australia y América del Sur", de: "Australien und Südamerika", nl: "Australië en Zuid-Amerika" },
          { en: "Europe and Asia", es: "Europa y Asia", de: "Europa und Asien", nl: "Europa en Azië" },
          { en: "North America and Africa", es: "América del Norte y África", de: "Nordamerika und Afrika", nl: "Noord-Amerika en Afrika" },
          { en: "All small continents", es: "Todos los continentes pequeños", de: "Alle kleinen Kontinente", nl: "Alle kleine continenten" }
        ],
        correct: 1,
        explanation: {
          en: "Europe and Asia combined give +12 armies per turn, the highest two-continent bonus. Though difficult to hold, it provides massive reinforcement advantage if maintained.",
          es: "Europa y Asia combinados dan +12 ejércitos por turno, el bonus de dos continentes más alto. Aunque difícil de mantener, proporciona una ventaja masiva de refuerzo si se mantiene.",
          de: "Europa und Asien zusammen geben +12 Armeen pro Runde, den höchsten Zwei-Kontinente-Bonus. Obwohl schwer zu halten, bietet es massiven Verstärkungsvorteil, wenn aufrechterhalten.",
          nl: "Europa en Azië samen geven +12 legers per beurt, de hoogste twee-continenten bonus. Hoewel moeilijk vast te houden, biedt het massaal versterkingsvoordeel indien behouden."
        }
      },
      {
        question: {
          en: "What is the 'bleeding' tactic in Risk?",
          es: "¿Qué es la táctica de 'sangrado' en Risk?",
          de: "Was ist die 'Ausblutungs'-Taktik bei Risk?",
          nl: "Wat is de 'bloedings'-tactiek bij Risk?"
        },
        options: [
          { en: "Attacking weak players only", es: "Atacar solo a jugadores débiles", de: "Nur schwache Spieler angreifen", nl: "Alleen zwakke spelers aanvallen" },
          { en: "Gradually weakening a strong player's borders", es: "Debilitar gradualmente las fronteras de un jugador fuerte", de: "Grenzen eines starken Spielers allmählich schwächen", nl: "Geleidelijk verzwakken van de grenzen van een sterke speler" },
          { en: "Losing armies intentionally", es: "Perder ejércitos intencionalmente", de: "Armeen absichtlich verlieren", nl: "Opzettelijk legers verliezen" },
          { en: "Trading territories", es: "Intercambiar territorios", de: "Gebiete tauschen", nl: "Gebieden ruilen" }
        ],
        correct: 1,
        explanation: {
          en: "Bleeding involves making small attacks to wear down a leading player's defenses over multiple turns, forcing them to spread armies thin and preventing them from building overwhelming strength.",
          es: "El sangrado implica hacer pequeños ataques para desgastar las defensas de un jugador líder durante varios turnos, obligándolos a dispersar ejércitos y evitando que construyan fuerza abrumadora.",
          de: "Ausblutung beinhaltet kleine Angriffe, um die Verteidigung eines führenden Spielers über mehrere Runden zu schwächen, sie zu zwingen, Armeen dünn zu verteilen und zu verhindern, dass sie überwältigende Stärke aufbauen.",
          nl: "Bloeding houdt in dat je kleine aanvallen doet om de verdediging van een leidende speler over meerdere beurten te verzwakken, ze dwingen legers dun te verspreiden en voorkomen dat ze overweldigende kracht opbouwen."
        }
      },
      {
        question: {
          en: "How many borders does Asia have with other continents?",
          es: "¿Cuántas fronteras tiene Asia con otros continentes?",
          de: "Wie viele Grenzen hat Asien zu anderen Kontinenten?",
          nl: "Hoeveel grenzen heeft Azië met andere continenten?"
        },
        options: [
          { en: "5 borders", es: "5 fronteras", de: "5 Grenzen", nl: "5 grenzen" },
          { en: "6 borders", es: "6 fronteras", de: "6 Grenzen", nl: "6 grenzen" },
          { en: "7 borders", es: "7 fronteras", de: "7 Grenzen", nl: "7 grenzen" },
          { en: "8 borders", es: "8 fronteras", de: "8 Grenzen", nl: "8 grenzen" }
        ],
        correct: 2,
        explanation: {
          en: "Asia has 7 external borders: Kamchatka (to Alaska), Siam (to Indonesia), Middle East (to Ukraine, Southern Europe, Egypt, East Africa), and Ural (to Ukraine), making it very challenging to defend.",
          es: "Asia tiene 7 fronteras externas: Kamchatka (a Alaska), Siam (a Indonesia), Medio Oriente (a Ucrania, Europa del Sur, Egipto, África Oriental), y Ural (a Ucrania), lo que la hace muy desafiante de defender.",
          de: "Asien hat 7 externe Grenzen: Kamtschatka (zu Alaska), Siam (zu Indonesien), Naher Osten (zu Ukraine, Südeuropa, Ägypten, Ostafrika) und Ural (zu Ukraine), was es sehr schwierig macht zu verteidigen.",
          nl: "Azië heeft 7 externe grenzen: Kamtsjatka (naar Alaska), Siam (naar Indonesië), Midden-Oosten (naar Oekraïne, Zuid-Europa, Egypte, Oost-Afrika) en Oeral (naar Oekraïne), waardoor het zeer uitdagend is om te verdedigen."
        }
      },
      {
        question: {
          en: "What is the recommended army allocation for defending Australia?",
          es: "¿Cuál es la asignación de ejércitos recomendada para defender Australia?",
          de: "Was ist die empfohlene Armeeallokation zur Verteidigung Australiens?",
          nl: "Wat is de aanbevolen legertoewijzing voor het verdedigen van Australië?"
        },
        options: [
          { en: "All armies on Indonesia", es: "Todos los ejércitos en Indonesia", de: "Alle Armeen in Indonesien", nl: "Alle legers in Indonesië" },
          { en: "Evenly distributed", es: "Distribuidos uniformemente", de: "Gleichmäßig verteilt", nl: "Gelijk verdeeld" },
          { en: "Most on Indonesia, 1 each elsewhere", es: "La mayoría en Indonesia, 1 en cada otro lugar", de: "Die meisten in Indonesien, 1 überall sonst", nl: "Meeste in Indonesië, 1 in elk ander gebied" },
          { en: "Random distribution", es: "Distribución aleatoria", de: "Zufällige Verteilung", nl: "Willekeurige verdeling" }
        ],
        correct: 2,
        explanation: {
          en: "The optimal defense for Australia is to stack most armies in Indonesia (the only entry point) while keeping 1 army in each other territory to maintain ownership and flexibility.",
          es: "La defensa óptima para Australia es apilar la mayoría de ejércitos en Indonesia (el único punto de entrada) mientras se mantiene 1 ejército en cada otro territorio para mantener propiedad y flexibilidad.",
          de: "Die optimale Verteidigung für Australien besteht darin, die meisten Armeen in Indonesien (dem einzigen Eingangspunkt) zu stapeln, während man 1 Armee in jedem anderen Gebiet behält, um Besitz und Flexibilität zu wahren.",
          nl: "De optimale verdediging voor Australië is om de meeste legers in Indonesië (het enige toegangspunt) te stapelen terwijl je 1 leger in elk ander gebied houdt om eigendom en flexibiliteit te behouden."
        }
      },
      {
        question: {
          en: "When is it strategically wise to break an alliance?",
          es: "¿Cuándo es estratégicamente sabio romper una alianza?",
          de: "Wann ist es strategisch klug, ein Bündnis zu brechen?",
          nl: "Wanneer is het strategisch verstandig om een alliantie te verbreken?"
        },
        options: [
          { en: "Immediately", es: "Inmediatamente", de: "Sofort", nl: "Onmiddellijk" },
          { en: "When you control 2+ continents", es: "Cuando controlas 2+ continentes", de: "Wenn du 2+ Kontinente kontrollierst", nl: "Wanneer je 2+ continenten controleert" },
          { en: "Never", es: "Nunca", de: "Niemals", nl: "Nooit" },
          { en: "In the final stages when only you and ally remain strong", es: "En las etapas finales cuando solo tú y el aliado permanecen fuertes", de: "In den Endphasen, wenn nur du und Verbündeter stark bleiben", nl: "In de laatste fasen wanneer alleen jij en bondgenoot sterk blijven" }
        ],
        correct: 3,
        explanation: {
          en: "The optimal time to break an alliance is when you and your ally have eliminated other threats and are the dominant powers. Breaking too early weakens both players against common enemies.",
          es: "El momento óptimo para romper una alianza es cuando tú y tu aliado han eliminado otras amenazas y son las potencias dominantes. Romper demasiado pronto debilita a ambos jugadores contra enemigos comunes.",
          de: "Der optimale Zeitpunkt, ein Bündnis zu brechen, ist, wenn du und dein Verbündeter andere Bedrohungen eliminiert haben und die dominierenden Mächte sind. Zu frühes Brechen schwächt beide Spieler gegen gemeinsame Feinde.",
          nl: "Het optimale moment om een alliantie te verbreken is wanneer jij en je bondgenoot andere bedreigingen hebben geëlimineerd en de dominante machten zijn. Te vroeg verbreken verzwakt beide spelers tegen gemeenschappelijke vijanden."
        }
      },
      {
        question: {
          en: "What is the 'border fortress' strategy?",
          es: "¿Qué es la estrategia de 'fortaleza fronteriza'?",
          de: "Was ist die 'Grenzfestungs'-Strategie?",
          nl: "Wat is de 'grensfort'-strategie?"
        },
        options: [
          { en: "Building walls", es: "Construir muros", de: "Mauern bauen", nl: "Muren bouwen" },
          { en: "Concentrating armies at key entry points", es: "Concentrar ejércitos en puntos de entrada clave", de: "Armeen an wichtigen Eingangspunkten konzentrieren", nl: "Legers concentreren op belangrijke toegangspunten" },
          { en: "Never defending borders", es: "Nunca defender fronteras", de: "Niemals Grenzen verteidigen", nl: "Nooit grenzen verdedigen" },
          { en: "Only attacking from borders", es: "Solo atacar desde fronteras", de: "Nur von Grenzen angreifen", nl: "Alleen aanvallen vanaf grenzen" }
        ],
        correct: 1,
        explanation: {
          en: "The border fortress strategy involves placing large armies at the entry points of your continent while keeping minimal forces in interior territories, maximizing defensive efficiency.",
          es: "La estrategia de fortaleza fronteriza implica colocar grandes ejércitos en los puntos de entrada de tu continente mientras mantienes fuerzas mínimas en territorios interiores, maximizando la eficiencia defensiva.",
          de: "Die Grenzfestungsstrategie beinhaltet, große Armeen an den Eingangspunkten deines Kontinents zu platzieren, während minimale Kräfte in inneren Gebieten gehalten werden, um die Verteidigungseffizienz zu maximieren.",
          nl: "De grensfortstrategie houdt in dat je grote legers plaatst op de toegangspunten van je continent terwijl je minimale troepen in binnenlandse gebieden houdt, defensieve efficiëntie maximaliseren."
        }
      },
      {
        question: {
          en: "How many times does the card trade-in value increase?",
          es: "¿Cuántas veces aumenta el valor de canje de cartas?",
          de: "Wie oft erhöht sich der Kartentauschwert?",
          nl: "Hoe vaak neemt de kaartenruilwaarde toe?"
        },
        options: [
          { en: "Stays at 4 always", es: "Se mantiene en 4 siempre", de: "Bleibt immer bei 4", nl: "Blijft altijd op 4" },
          { en: "Increases every trade: 4, 6, 8, 10, 12, 15...", es: "Aumenta cada canje: 4, 6, 8, 10, 12, 15...", de: "Erhöht sich bei jedem Tausch: 4, 6, 8, 10, 12, 15...", nl: "Neemt toe bij elke ruil: 4, 6, 8, 10, 12, 15..." },
          { en: "Doubles each time", es: "Se duplica cada vez", de: "Verdoppelt sich jedes Mal", nl: "Verdubbelt elke keer" },
          { en: "Increases by 10 each time", es: "Aumenta en 10 cada vez", de: "Erhöht sich um 10 jedes Mal", nl: "Neemt toe met 10 elke keer" }
        ],
        correct: 1,
        explanation: {
          en: "Card values increase globally with each trade: 1st=4, 2nd=6, 3rd=8, 4th=10, 5th=12, 6th=15, then increases by 5 each time (20, 25, 30...). This makes late-game cards extremely valuable.",
          es: "Los valores de las cartas aumentan globalmente con cada canje: 1º=4, 2º=6, 3º=8, 4º=10, 5º=12, 6º=15, luego aumenta en 5 cada vez (20, 25, 30...). Esto hace que las cartas de juego tardío sean extremadamente valiosas.",
          de: "Kartenwerte steigen global mit jedem Tausch: 1.=4, 2.=6, 3.=8, 4.=10, 5.=12, 6.=15, dann um 5 jedes Mal (20, 25, 30...). Dies macht Spätspiels-Karten extrem wertvoll.",
          nl: "Kaartwaarden nemen wereldwijd toe met elke ruil: 1e=4, 2e=6, 3e=8, 4e=10, 5e=12, 6e=15, dan met 5 elke keer (20, 25, 30...). Dit maakt laat-spel kaarten extreem waardevol."
        }
      },
      {
        question: {
          en: "What is the best defensive position when you're losing?",
          es: "¿Cuál es la mejor posición defensiva cuando estás perdiendo?",
          de: "Was ist die beste Verteidigungsposition, wenn du verlierst?",
          nl: "Wat is de beste verdedigende positie wanneer je verliest?"
        },
        options: [
          { en: "Spread out evenly", es: "Distribuirse uniformemente", de: "Gleichmäßig verteilen", nl: "Gelijkmatig verspreiden" },
          { en: "Consolidate in one defensible region", es: "Consolidar en una región defendible", de: "In einer verteidigungsfähigen Region konsolidieren", nl: "Consolideren in één verdedigbare regio" },
          { en: "Attack aggressively", es: "Atacar agresivamente", de: "Aggressiv angreifen", nl: "Agressief aanvallen" },
          { en: "Abandon all territories", es: "Abandonar todos los territorios", de: "Alle Gebiete aufgeben", nl: "Alle gebieden verlaten" }
        ],
        correct: 1,
        explanation: {
          en: "When losing, consolidate your armies in one easily defensible region (like Australia or South America) to maximize survival time and potentially rebuild through card bonuses.",
          es: "Cuando pierdes, consolida tus ejércitos en una región fácilmente defendible (como Australia o América del Sur) para maximizar el tiempo de supervivencia y potencialmente reconstruir a través de bonos de cartas.",
          de: "Beim Verlieren konsolidiere deine Armeen in einer leicht zu verteidigenden Region (wie Australien oder Südamerika), um die Überlebenszeit zu maximieren und möglicherweise durch Kartenboni wieder aufzubauen.",
          nl: "Bij verliezen, consolideer je legers in één gemakkelijk verdedigbare regio (zoals Australië of Zuid-Amerika) om overlevingstijd te maximaliseren en mogelijk te herbouwen via kaartbonussen."
        }
      },
      {
        question: {
          en: "Which territory has the most connections to other territories?",
          es: "¿Qué territorio tiene más conexiones con otros territorios?",
          de: "Welches Gebiet hat die meisten Verbindungen zu anderen Gebieten?",
          nl: "Welk gebied heeft de meeste verbindingen met andere gebieden?"
        },
        options: [
          { en: "Middle East (6 connections)", es: "Medio Oriente (6 conexiones)", de: "Naher Osten (6 Verbindungen)", nl: "Midden-Oosten (6 verbindingen)" },
          { en: "Ukraine (5 connections)", es: "Ucrania (5 conexiones)", de: "Ukraine (5 Verbindungen)", nl: "Oekraïne (5 verbindingen)" },
          { en: "Egypt (5 connections)", es: "Egipto (5 conexiones)", de: "Ägypten (5 Verbindungen)", nl: "Egypte (5 verbindingen)" },
          { en: "Brazil (4 connections)", es: "Brasil (4 conexiones)", de: "Brasilien (4 Verbindungen)", nl: "Brazilië (4 verbindingen)" }
        ],
        correct: 0,
        explanation: {
          en: "The Middle East has 6 connections: Ukraine, Southern Europe, Egypt, East Africa, Afghanistan, and India, making it the most connected and strategic territory on the board.",
          es: "El Medio Oriente tiene 6 conexiones: Ucrania, Europa del Sur, Egipto, África Oriental, Afganistán e India, lo que lo convierte en el territorio más conectado y estratégico del tablero.",
          de: "Der Nahe Osten hat 6 Verbindungen: Ukraine, Südeuropa, Ägypten, Ostafrika, Afghanistan und Indien, was ihn zum meist verbundenen und strategischen Gebiet auf dem Brett macht.",
          nl: "Het Midden-Oosten heeft 6 verbindingen: Oekraïne, Zuid-Europa, Egypte, Oost-Afrika, Afghanistan en India, waardoor het het meest verbonden en strategische gebied op het bord is."
        }
      },
      {
        question: {
          en: "What percentage of territories do you need to control for world domination?",
          es: "¿Qué porcentaje de territorios necesitas controlar para dominación mundial?",
          de: "Welchen Prozentsatz an Gebieten musst du für die Weltherrschaft kontrollieren?",
          nl: "Welk percentage gebieden moet je controleren voor wereldheerschappij?"
        },
        options: [
          { en: "50% of territories", es: "50% de los territorios", de: "50% der Gebiete", nl: "50% van de gebieden" },
          { en: "75% of territories", es: "75% de los territorios", de: "75% der Gebiete", nl: "75% van de gebieden" },
          { en: "100% of territories", es: "100% de los territorios", de: "100% der Gebiete", nl: "100% van de gebieden" },
          { en: "90% of territories", es: "90% de los territorios", de: "90% der Gebiete", nl: "90% van de gebieden" }
        ],
        correct: 2,
        explanation: {
          en: "To win at Risk, you must achieve 100% world domination by conquering all 42 territories and eliminating all other players from the game.",
          es: "Para ganar en Risk, debes lograr 100% de dominación mundial conquistando los 42 territorios y eliminando a todos los otros jugadores del juego.",
          de: "Um bei Risk zu gewinnen, musst du 100% Weltherrschaft erreichen, indem du alle 42 Gebiete eroberst und alle anderen Spieler aus dem Spiel eliminierst.",
          nl: "Om te winnen bij Risk moet je 100% wereldheerschappij bereiken door alle 42 gebieden te veroveren en alle andere spelers uit het spel te elimineren."
        }
      },
      {
        question: {
          en: "What is the 'sweep' attack pattern?",
          es: "¿Qué es el patrón de ataque de 'barrido'?",
          de: "Was ist das 'Feg'-Angriffsmuster?",
          nl: "Wat is het 'veeg'-aanvalspatroon?"
        },
        options: [
          { en: "Attacking one territory repeatedly", es: "Atacar un territorio repetidamente", de: "Ein Gebiet wiederholt angreifen", nl: "Één gebied herhaaldelijk aanvallen" },
          { en: "Conquering territories in a connected line", es: "Conquistar territorios en una línea conectada", de: "Gebiete in einer verbundenen Linie erobern", nl: "Gebieden veroveren in een verbonden lijn" },
          { en: "Random attacks", es: "Ataques aleatorios", de: "Zufällige Angriffe", nl: "Willekeurige aanvallen" },
          { en: "Defensive only", es: "Solo defensiva", de: "Nur defensiv", nl: "Alleen verdedigend" }
        },
        correct: 1,
        explanation: {
          en: "The sweep pattern involves conquering territories in a connected sequence, allowing you to move your armies forward continuously and maintain offensive momentum without breaking fortification chains.",
          es: "El patrón de barrido implica conquistar territorios en una secuencia conectada, permitiéndote mover tus ejércitos hacia adelante continuamente y mantener impulso ofensivo sin romper cadenas de fortificación.",
          de: "Das Fegmuster beinhaltet, Gebiete in einer verbundenen Sequenz zu erobern, sodass du deine Armeen kontinuierlich vorwärts bewegen und offensive Dynamik aufrechterhalten kannst, ohne Befestigungsketten zu brechen.",
          nl: "Het veegpatroon houdt in dat je gebieden in een verbonden volgorde verovert, waardoor je je legers continu vooruit kunt bewegen en offensief momentum kunt behouden zonder fortificatieketens te breken."
        }
      },
      {
        question: {
          en: "How many entry points does Australia have?",
          es: "¿Cuántos puntos de entrada tiene Australia?",
          de: "Wie viele Eingangspunkte hat Australien?",
          nl: "Hoeveel toegangspunten heeft Australië?"
        },
        options: [
          { en: "1 (only Siam-Indonesia)", es: "1 (solo Siam-Indonesia)", de: "1 (nur Siam-Indonesien)", nl: "1 (alleen Siam-Indonesië)" },
          { en: "2", es: "2", de: "2", nl: "2" },
          { en: "3", es: "3", de: "3", nl: "3" },
          { en: "4", es: "4", de: "4", nl: "4" }
        ],
        correct: 0,
        explanation: {
          en: "Australia has only 1 entry point: from Siam (Asia) to Indonesia. This single chokepoint makes Australia the easiest continent to defend in the game.",
          es: "Australia tiene solo 1 punto de entrada: desde Siam (Asia) a Indonesia. Este único punto de estrangulamiento hace de Australia el continente más fácil de defender en el juego.",
          de: "Australien hat nur 1 Eingangspunkt: von Siam (Asien) nach Indonesien. Dieser einzelne Engpass macht Australien zum am einfachsten zu verteidigenden Kontinent im Spiel.",
          nl: "Australië heeft slechts 1 toegangspunt: van Siam (Azië) naar Indonesië. Dit enkele knelpunt maakt Australië het gemakkelijkst te verdedigen continent in het spel."
        }
      },
      {
        question: {
          en: "What is the risk-reward ratio of controlling Asia?",
          es: "¿Cuál es la relación riesgo-recompensa de controlar Asia?",
          de: "Wie ist das Risiko-Ertrags-Verhältnis bei der Kontrolle Asiens?",
          nl: "Wat is de risico-beloning verhouding van het controleren van Azië?"
        },
        options: [
          { en: "High risk, high reward (+7 armies, 7+ borders)", es: "Alto riesgo, alta recompensa (+7 ejércitos, 7+ fronteras)", de: "Hohes Risiko, hohe Belohnung (+7 Armeen, 7+ Grenzen)", nl: "Hoog risico, hoge beloning (+7 legers, 7+ grenzen)" },
          { en: "Low risk, low reward", es: "Bajo riesgo, baja recompensa", de: "Niedriges Risiko, niedrige Belohnung", nl: "Laag risico, lage beloning" },
          { en: "Medium risk, low reward", es: "Riesgo medio, baja recompensa", de: "Mittleres Risiko, niedrige Belohnung", nl: "Gemiddeld risico, lage beloning" },
          { en: "No risk, high reward", es: "Sin riesgo, alta recompensa", de: "Kein Risiko, hohe Belohnung", nl: "Geen risico, hoge beloning" }
        ],
        correct: 0,
        explanation: {
          en: "Asia is high risk, high reward: it gives the highest continent bonus (+7 armies) but has the most borders to defend (7+), requiring significant military commitment to hold successfully.",
          es: "Asia es de alto riesgo, alta recompensa: da el bonus de continente más alto (+7 ejércitos) pero tiene la mayoría de fronteras que defender (7+), requiriendo compromiso militar significativo para mantener con éxito.",
          de: "Asien ist hohes Risiko, hohe Belohnung: Es gibt den höchsten Kontinentbonus (+7 Armeen), hat aber die meisten zu verteidigenden Grenzen (7+), was erhebliches militärisches Engagement erfordert, um es erfolgreich zu halten.",
          nl: "Azië is hoog risico, hoge beloning: het geeft de hoogste continentbonus (+7 legers) maar heeft de meeste te verdedigen grenzen (7+), waarvoor aanzienlijke militaire inzet nodig is om succesvol vast te houden."
        }
      },
      {
        question: {
          en: "When should you prioritize getting cards over conquering continents?",
          es: "¿Cuándo debes priorizar obtener cartas sobre conquistar continentes?",
          de: "Wann solltest du Karten holen über Kontinente zu erobern priorisieren?",
          nl: "Wanneer moet je prioriteit geven aan het krijgen van kaarten boven het veroveren van continenten?"
        },
        options: [
          { en: "Never", es: "Nunca", de: "Niemals", nl: "Nooit" },
          { en: "Late game when card values are high", es: "Juego tardío cuando los valores de cartas son altos", de: "Spätes Spiel, wenn Kartenwerte hoch sind", nl: "Laat spel wanneer kaartwaarden hoog zijn" },
          { en: "Always", es: "Siempre", de: "Immer", nl: "Altijd" },
          { en: "Only at game start", es: "Solo al inicio del juego", de: "Nur zu Spielbeginn", nl: "Alleen aan het begin van het spel" }
        },
        correct: 1,
        explanation: {
          en: "In late game, card values (15+ armies) can exceed continent bonuses, making it more valuable to conquer at least one territory per turn to get cards than to hold continents.",
          es: "En juego tardío, los valores de cartas (15+ ejércitos) pueden exceder los bonos de continente, haciendo más valioso conquistar al menos un territorio por turno para obtener cartas que mantener continentes.",
          de: "Im späten Spiel können Kartenwerte (15+ Armeen) Kontinentboni überschreiten, sodass es wertvoller ist, mindestens ein Gebiet pro Runde zu erobern, um Karten zu erhalten, als Kontinente zu halten.",
          nl: "In laat spel kunnen kaartwaarden (15+ legers) continentbonussen overtreffen, waardoor het waardevoller is om ten minste één gebied per beurt te veroveren om kaarten te krijgen dan continenten vast te houden."
        }
      },
      {
        question: {
          en: "What is the primary weakness of holding South America?",
          es: "¿Cuál es la debilidad principal de mantener América del Sur?",
          de: "Was ist die Hauptschwäche beim Halten Südamerikas?",
          nl: "Wat is de belangrijkste zwakte van het vasthouden van Zuid-Amerika?"
        },
        options: [
          { en: "Too many borders", es: "Demasiadas fronteras", de: "Zu viele Grenzen", nl: "Te veel grenzen" },
          { en: "Low army bonus (+2)", es: "Bajo bonus de ejércitos (+2)", de: "Niedriger Armeenonus (+2)", nl: "Lage legerbonus (+2)" },
          { en: "Hard to defend", es: "Difícil de defender", de: "Schwer zu verteidigen", nl: "Moeilijk te verdedigen" },
          { en: "No strategic value", es: "Sin valor estratégico", de: "Kein strategischer Wert", nl: "Geen strategische waarde" }
        ],
        correct: 1,
        explanation: {
          en: "South America's main weakness is its low bonus of only +2 armies per turn. While relatively easy to defend with 2 borders, the modest reinforcement doesn't support major expansion.",
          es: "La principal debilidad de América del Sur es su bajo bonus de solo +2 ejércitos por turno. Aunque relativamente fácil de defender con 2 fronteras, el refuerzo modesto no apoya expansión mayor.",
          de: "Südamerikas Hauptschwäche ist sein niedriger Bonus von nur +2 Armeen pro Runde. Obwohl relativ einfach zu verteidigen mit 2 Grenzen, unterstützt die bescheidene Verstärkung keine große Expansion.",
          nl: "De belangrijkste zwakte van Zuid-Amerika is de lage bonus van slechts +2 legers per beurt. Hoewel relatief gemakkelijk te verdedigen met 2 grenzen, ondersteunt de bescheiden versterking geen grote expansie."
        }
      },
      {
        question: {
          en: "Which strategy is most effective for a 6-player game?",
          es: "¿Qué estrategia es más efectiva para un juego de 6 jugadores?",
          de: "Welche Strategie ist am effektivsten für ein 6-Spieler-Spiel?",
          nl: "Welke strategie is het meest effectief voor een 6-spelersspel?"
        },
        options: [
          { en: "Aggressive early expansion", es: "Expansión temprana agresiva", de: "Aggressive frühe Expansion", nl: "Agressieve vroege expansie" },
          { en: "Defensive turtle in small continent", es: "Tortuga defensiva en continente pequeño", de: "Defensive Schildkröte in kleinem Kontinent", nl: "Defensieve schildpad in klein continent" },
          { en: "Random attacks", es: "Ataques aleatorios", de: "Zufällige Angriffe", nl: "Willekeurige aanvallen" },
          { en: "Never attacking", es: "Nunca atacar", de: "Niemals angreifen", nl: "Nooit aanvallen" }
        ],
        correct: 1,
        explanation: {
          en: "In 6-player games, the defensive turtle strategy (securing Australia or South America early) is most effective, as aggressive players weaken each other while you build strength safely.",
          es: "En juegos de 6 jugadores, la estrategia de tortuga defensiva (asegurar Australia o América del Sur temprano) es más efectiva, ya que los jugadores agresivos se debilitan entre sí mientras tú construyes fuerza de forma segura.",
          de: "In 6-Spieler-Spielen ist die defensive Schildkrötenstrategie (Australien oder Südamerika früh sichern) am effektivsten, da aggressive Spieler sich gegenseitig schwächen, während du sicher Stärke aufbaust.",
          nl: "In 6-spelersspellen is de defensieve schildpadstrategie (Australië of Zuid-Amerika vroeg veiligstellen) het meest effectief, aangezien agressieve spelers elkaar verzwakken terwijl jij veilig kracht opbouwt."
        }
      },
      {
        question: {
          en: "What is the average number of armies lost when attacking with 3 dice vs 2 dice?",
          es: "¿Cuál es el número promedio de ejércitos perdidos al atacar con 3 dados vs 2 dados?",
          de: "Was ist die durchschnittliche Anzahl verlorener Armeen beim Angriff mit 3 Würfeln gegen 2 Würfel?",
          nl: "Wat is het gemiddelde aantal verloren legers bij aanvallen met 3 dobbelstenen tegen 2 dobbelstenen?"
        },
        options: [
          { en: "Attacker loses ~0.9 per round", es: "Atacante pierde ~0,9 por ronda", de: "Angreifer verliert ~0,9 pro Runde", nl: "Aanvaller verliest ~0,9 per ronde" },
          { en: "Attacker loses ~1.5 per round", es: "Atacante pierde ~1,5 por ronda", de: "Angreifer verliert ~1,5 pro Runde", nl: "Aanvaller verliest ~1,5 per ronde" },
          { en: "Attacker loses ~2 per round", es: "Atacante pierde ~2 por ronda", de: "Angreifer verliert ~2 pro Runde", nl: "Aanvaller verliest ~2 per ronde" },
          { en: "Defender always wins", es: "Defensor siempre gana", de: "Verteidiger gewinnt immer", nl: "Verdediger wint altijd" }
        ],
        correct: 0,
        explanation: {
          en: "When attacking with 3 dice against 2 defending dice, the attacker loses an average of ~0.9 armies per round while the defender loses ~1.1, giving the attacker a slight statistical advantage.",
          es: "Al atacar con 3 dados contra 2 dados defensores, el atacante pierde un promedio de ~0,9 ejércitos por ronda mientras que el defensor pierde ~1,1, dando al atacante una ligera ventaja estadística.",
          de: "Beim Angriff mit 3 Würfeln gegen 2 verteidigende Würfel verliert der Angreifer durchschnittlich ~0,9 Armeen pro Runde, während der Verteidiger ~1,1 verliert, was dem Angreifer einen leichten statistischen Vorteil gibt.",
          nl: "Bij aanvallen met 3 dobbelstenen tegen 2 verdedigende dobbelstenen verliest de aanvaller gemiddeld ~0,9 legers per ronde terwijl de verdediger ~1,1 verliest, wat de aanvaller een licht statistisch voordeel geeft."
        }
      },
      {
        question: {
          en: "What is the 'continent sandwich' strategy?",
          es: "¿Qué es la estrategia de 'sándwich de continentes'?",
          de: "Was ist die 'Kontinent-Sandwich'-Strategie?",
          nl: "Wat is de 'continent sandwich'-strategie?"
        },
        options: [
          { en: "Controlling three continents", es: "Controlar tres continentes", de: "Drei Kontinente kontrollieren", nl: "Drie continenten controleren" },
          { en: "Holding territories between two enemy continents", es: "Mantener territorios entre dos continentes enemigos", de: "Gebiete zwischen zwei feindlichen Kontinenten halten", nl: "Gebieden tussen twee vijandelijke continenten houden" },
          { en: "Never taking continents", es: "Nunca tomar continentes", de: "Niemals Kontinente nehmen", nl: "Nooit continenten nemen" },
          { en: "Eating while playing", es: "Comer mientras juegas", de: "Essen beim Spielen", nl: "Eten tijdens het spelen" }
        ],
        correct: 1,
        explanation: {
          en: "The continent sandwich involves holding strategic territories between two opponent-controlled continents, allowing you to threaten both and prevent either player from consolidating power.",
          es: "El sándwich de continentes implica mantener territorios estratégicos entre dos continentes controlados por oponentes, permitiéndote amenazar a ambos y evitar que cualquier jugador consolide poder.",
          de: "Das Kontinent-Sandwich beinhaltet, strategische Gebiete zwischen zwei von Gegnern kontrollierten Kontinenten zu halten, sodass du beide bedrohen und verhindern kannst, dass ein Spieler Macht konsolidiert.",
          nl: "De continent sandwich houdt in dat je strategische gebieden tussen twee door tegenstanders gecontroleerde continenten houdt, waardoor je beide kunt bedreigen en voorkomen dat een speler macht consolideert."
        }
      },
      {
        question: {
          en: "How should you respond to a player who controls Australia?",
          es: "¿Cómo debes responder a un jugador que controla Australia?",
          de: "Wie solltest du auf einen Spieler reagieren, der Australien kontrolliert?",
          nl: "Hoe moet je reageren op een speler die Australië controleert?"
        },
        options: [
          { en: "Ignore them completely", es: "Ignorarlos completamente", de: "Sie komplett ignorieren", nl: "Ze volledig negeren" },
          { en: "Attack through Siam before they build up", es: "Atacar a través de Siam antes de que se fortalezcan", de: "Über Siam angreifen, bevor sie sich aufbauen", nl: "Aanvallen via Siam voordat ze zich opbouwen" },
          { en: "Let them grow strong", es: "Dejarlos crecer fuertes", de: "Sie stark werden lassen", nl: "Ze sterk laten worden" },
          { en: "Form alliance with them", es: "Formar alianza con ellos", de: "Bündnis mit ihnen bilden", nl: "Alliantie met ze vormen" }
        ],
        correct: 1,
        explanation: {
          en: "Australia is a powerful launching platform. If a player secures it, you should attack through Siam early before they accumulate enough armies to expand aggressively into Asia.",
          es: "Australia es una plataforma de lanzamiento poderosa. Si un jugador la asegura, debes atacar a través de Siam temprano antes de que acumulen suficientes ejércitos para expandirse agresivamente a Asia.",
          de: "Australien ist eine mächtige Startplattform. Wenn ein Spieler es sichert, solltest du früh über Siam angreifen, bevor sie genug Armeen ansammeln, um aggressiv nach Asien zu expandieren.",
          nl: "Australië is een krachtig lanceerplatform. Als een speler het veiligstelt, moet je vroeg aanvallen via Siam voordat ze genoeg legers verzamelen om agressief naar Azië uit te breiden."
        }
      },
      {
        question: {
          en: "What is the mathematical advantage of attacking with maximum dice?",
          es: "¿Cuál es la ventaja matemática de atacar con dados máximos?",
          de: "Was ist der mathematische Vorteil beim Angriff mit maximalen Würfeln?",
          nl: "Wat is het mathematische voordeel van aanvallen met maximum dobbelstenen?"
        },
        options: [
          { en: "No difference", es: "Sin diferencia", de: "Kein Unterschied", nl: "Geen verschil" },
          { en: "~10% better odds", es: "~10% mejores probabilidades", de: "~10% bessere Chancen", nl: "~10% betere kansen" },
          { en: "~20-30% better odds", es: "~20-30% mejores probabilidades", de: "~20-30% bessere Chancen", nl: "~20-30% betere kansen" },
          { en: "Guaranteed victory", es: "Victoria garantizada", de: "Garantierter Sieg", nl: "Gegarandeerde overwinning" }
        },
        correct: 2,
        explanation: {
          en: "Attacking with 3 dice vs 2 gives you approximately 20-30% better odds than attacking with fewer dice, as you're comparing more high rolls and can win both armies in one round.",
          es: "Atacar con 3 dados vs 2 te da aproximadamente 20-30% mejores probabilidades que atacar con menos dados, ya que estás comparando más tiradas altas y puedes ganar ambos ejércitos en una ronda.",
          de: "Der Angriff mit 3 Würfeln gegen 2 gibt dir etwa 20-30% bessere Chancen als mit weniger Würfeln anzugreifen, da du mehr hohe Würfe vergleichst und beide Armeen in einer Runde gewinnen kannst.",
          nl: "Aanvallen met 3 dobbelstenen tegen 2 geeft je ongeveer 20-30% betere kansen dan aanvallen met minder dobbelstenen, aangezien je meer hoge worpen vergelijkt en beide legers in één ronde kunt winnen."
        }
      },
      {
        question: {
          en: "When is fortification most strategically valuable?",
          es: "¿Cuándo es la fortificación más valiosa estratégicamente?",
          de: "Wann ist die Befestigung strategisch am wertvollsten?",
          nl: "Wanneer is versterking strategisch het meest waardevol?"
        },
        options: [
          { en: "Never use it", es: "Nunca usarla", de: "Niemals verwenden", nl: "Nooit gebruiken" },
          { en: "Only at game end", es: "Solo al final del juego", de: "Nur am Spielende", nl: "Alleen aan het einde van het spel" },
          { en: "To prepare for next turn's attack or defend vulnerable borders", es: "Para preparar el ataque del próximo turno o defender fronteras vulnerables", de: "Um den Angriff der nächsten Runde vorzubereiten oder verletzliche Grenzen zu verteidigen", nl: "Om de aanval van de volgende beurt voor te bereiden of kwetsbare grenzen te verdedigen" },
          { en: "Every turn randomly", es: "Cada turno al azar", de: "Jede Runde zufällig", nl: "Elke beurt willekeurig" }
        ],
        correct: 2,
        explanation: {
          en: "Fortification is most valuable when used to either consolidate armies for a major attack next turn or to reinforce a vulnerable border that might be attacked before your next turn.",
          es: "La fortificación es más valiosa cuando se usa para consolidar ejércitos para un ataque mayor en el próximo turno o para reforzar una frontera vulnerable que podría ser atacada antes de tu próximo turno.",
          de: "Die Befestigung ist am wertvollsten, wenn sie verwendet wird, um entweder Armeen für einen großen Angriff in der nächsten Runde zu konsolidieren oder um eine verletzliche Grenze zu verstärken, die vor deiner nächsten Runde angegriffen werden könnte.",
          nl: "Versterking is het meest waardevol wanneer gebruikt om ofwel legers te consolideren voor een grote aanval volgende beurt of om een kwetsbare grens te versterken die mogelijk wordt aangevallen voor je volgende beurt."
        }
      },
      {
        question: {
          en: "What is the expected number of turns to conquer the world from a strong position?",
          es: "¿Cuál es el número esperado de turnos para conquistar el mundo desde una posición fuerte?",
          de: "Wie viele Runden werden erwartet, um die Welt von einer starken Position aus zu erobern?",
          nl: "Wat is het verwachte aantal beurten om de wereld te veroveren vanuit een sterke positie?"
        },
        options: [
          { en: "1-3 turns", es: "1-3 turnos", de: "1-3 Runden", nl: "1-3 beurten" },
          { en: "5-10 turns", es: "5-10 turnos", de: "5-10 Runden", nl: "5-10 beurten" },
          { en: "15-25 turns", es: "15-25 turnos", de: "15-25 Runden", nl: "15-25 beurten" },
          { en: "50+ turns", es: "50+ turnos", de: "50+ Runden", nl: "50+ beurten" }
        },
        correct: 1,
        explanation: {
          en: "From a strong position (controlling 2-3 continents), a skilled player typically needs 5-10 turns to complete world domination, assuming optimal play and some luck.",
          es: "Desde una posición fuerte (controlando 2-3 continentes), un jugador habilidoso típicamente necesita 5-10 turnos para completar la dominación mundial, asumiendo juego óptimo y algo de suerte.",
          de: "Von einer starken Position (2-3 Kontinente kontrollierend) benötigt ein geschickter Spieler normalerweise 5-10 Runden, um die Weltherrschaft zu vollenden, vorausgesetzt optimales Spiel und etwas Glück.",
          nl: "Vanuit een sterke positie (2-3 continenten controlerend) heeft een vaardige speler doorgaans 5-10 beurten nodig om wereldheerschappij te voltooien, uitgaande van optimaal spel en enig geluk."
        }
      },
      {
        question: {
          en: "What is the key to successful negotiation in Risk?",
          es: "¿Cuál es la clave para negociación exitosa en Risk?",
          de: "Was ist der Schlüssel zu erfolgreicher Verhandlung bei Risk?",
          nl: "Wat is de sleutel tot succesvolle onderhandeling bij Risk?"
        },
        options: [
          { en: "Never make deals", es: "Nunca hacer tratos", de: "Niemals Deals machen", nl: "Nooit deals maken" },
          { en: "Always break promises", es: "Siempre romper promesas", de: "Immer Versprechen brechen", nl: "Altijd beloften breken" },
          { en: "Create mutually beneficial temporary alliances against strong players", es: "Crear alianzas temporales mutuamente beneficiosas contra jugadores fuertes", de: "Gegenseitig vorteilhafte temporäre Bündnisse gegen starke Spieler schaffen", nl: "Wederzijds voordelige tijdelijke allianties creëren tegen sterke spelers" },
          { en: "Help the strongest player", es: "Ayudar al jugador más fuerte", de: "Dem stärksten Spieler helfen", nl: "De sterkste speler helpen" }
        ],
        correct: 2,
        explanation: {
          en: "Successful negotiation involves creating temporary alliances with other players to contain the strongest opponent, with the understanding that these alliances will dissolve later in the game.",
          es: "La negociación exitosa implica crear alianzas temporales con otros jugadores para contener al oponente más fuerte, con el entendimiento de que estas alianzas se disolverán más tarde en el juego.",
          de: "Erfolgreiche Verhandlung beinhaltet, temporäre Bündnisse mit anderen Spielern zu schaffen, um den stärksten Gegner einzudämmen, mit dem Verständnis, dass diese Bündnisse sich später im Spiel auflösen werden.",
          nl: "Succesvolle onderhandeling houdt in dat je tijdelijke allianties creëert met andere spelers om de sterkste tegenstander in te dammen, met het begrip dat deze allianties later in het spel zullen oplossen."
        }
      },
      {
        question: {
          en: "Which continent combination provides the best defensive position?",
          es: "¿Qué combinación de continentes proporciona la mejor posición defensiva?",
          de: "Welche Kontinentkombination bietet die beste Verteidigungsposition?",
          nl: "Welke continentcombinatie biedt de beste verdedigende positie?"
        },
        options: [
          { en: "Australia and South America", es: "Australia y América del Sur", de: "Australien und Südamerika", nl: "Australië en Zuid-Amerika" },
          { en: "Europe and North America", es: "Europa y América del Norte", de: "Europa und Nordamerika", nl: "Europa en Noord-Amerika" },
          { en: "Africa and Asia", es: "África y Asia", de: "Afrika und Asien", nl: "Afrika en Azië" },
          { en: "All six continents", es: "Los seis continentes", de: "Alle sechs Kontinente", nl: "Alle zes continenten" }
        ],
        correct: 0,
        explanation: {
          en: "Australia and South America together provide the most defensible position with only 3 total entry points (1 for Australia, 2 for South America) while giving +4 armies per turn combined.",
          es: "Australia y América del Sur juntos proporcionan la posición más defendible con solo 3 puntos de entrada totales (1 para Australia, 2 para América del Sur) mientras dan +4 ejércitos por turno combinados.",
          de: "Australien und Südamerika bieten zusammen die verteidigungsfähigste Position mit nur 3 Gesamteingangspunkten (1 für Australien, 2 für Südamerika), während sie zusammen +4 Armeen pro Runde geben.",
          nl: "Australië en Zuid-Amerika samen bieden de meest verdedigbare positie met slechts 3 totale toegangspunten (1 voor Australië, 2 voor Zuid-Amerika) terwijl ze gecombineerd +4 legers per beurt geven."
        }
      },
      {
        question: {
          en: "What percentage advantage does the defender have in tied dice rolls?",
          es: "¿Qué porcentaje de ventaja tiene el defensor en tiradas de dados empatadas?",
          de: "Welchen Prozentsatz Vorteil hat der Verteidiger bei unentschiedenen Würfelwürfen?",
          nl: "Welk percentage voordeel heeft de verdediger bij gelijke dobbelsteenworpen?"
        },
        options: [
          { en: "0% - ties are rerolled", es: "0% - los empates se vuelven a tirar", de: "0% - Unentschieden werden neu gewürfelt", nl: "0% - gelijke standen worden opnieuw gegooid" },
          { en: "50% - split equally", es: "50% - dividido igualmente", de: "50% - gleichmäßig aufgeteilt", nl: "50% - gelijk verdeeld" },
          { en: "100% - defender always wins ties", es: "100% - defensor siempre gana empates", de: "100% - Verteidiger gewinnt immer Unentschieden", nl: "100% - verdediger wint altijd gelijke standen" },
          { en: "Variable", es: "Variable", de: "Variabel", nl: "Variabel" }
        ],
        correct: 2,
        explanation: {
          en: "The defender has a 100% advantage in tied dice - they win all ties. This rule gives the defender a significant statistical advantage, requiring attackers to have superior numbers.",
          es: "El defensor tiene una ventaja del 100% en dados empatados - ganan todos los empates. Esta regla le da al defensor una ventaja estadística significativa, requiriendo que los atacantes tengan números superiores.",
          de: "Der Verteidiger hat einen 100%-Vorteil bei unentschiedenen Würfeln - er gewinnt alle Unentschieden. Diese Regel gibt dem Verteidiger einen bedeutenden statistischen Vorteil und erfordert, dass Angreifer überlegene Zahlen haben.",
          nl: "De verdediger heeft een 100% voordeel bij gelijke dobbelstenen - ze winnen alle gelijke standen. Deze regel geeft de verdediger een aanzienlijk statistisch voordeel, wat vereist dat aanvallers superieure aantallen hebben."
        }
      },
      {
        question: {
          en: "What is the 'rolling wave' attack strategy?",
          es: "¿Qué es la estrategia de ataque de 'ola rodante'?",
          de: "Was ist die 'Rollende Welle'-Angriffsstrategie?",
          nl: "Wat is de 'rollende golf'-aanvalsstrategie?"
        },
        options: [
          { en: "Attacking randomly", es: "Atacar aleatoriamente", de: "Zufällig angreifen", nl: "Willekeurig aanvallen" },
          { en: "Using all armies in one massive attack", es: "Usar todos los ejércitos en un ataque masivo", de: "Alle Armeen in einem massiven Angriff verwenden", nl: "Alle legers in één massale aanval gebruiken" },
          { en: "Conquering territories in sequence while moving armies forward continuously", es: "Conquistar territorios en secuencia mientras se mueven ejércitos hacia adelante continuamente", de: "Gebiete sequenziell erobern während Armeen kontinuierlich vorwärts bewegt werden", nl: "Gebieden in volgorde veroveren terwijl legers continu vooruit worden verplaatst" },
          { en: "Never moving armies", es: "Nunca mover ejércitos", de: "Armeen niemals bewegen", nl: "Nooit legers verplaatsen" }
        ],
        correct: 2,
        explanation: {
          en: "The rolling wave strategy involves conquering adjacent territories in sequence, moving your main army forward after each conquest to maintain offensive momentum without spreading forces thin.",
          es: "La estrategia de ola rodante implica conquistar territorios adyacentes en secuencia, moviendo tu ejército principal hacia adelante después de cada conquista para mantener impulso ofensivo sin dispersar fuerzas.",
          de: "Die Rollende-Welle-Strategie beinhaltet, angrenzende Gebiete sequenziell zu erobern und deine Hauptarmee nach jeder Eroberung vorwärts zu bewegen, um offensive Dynamik aufrechtzuerhalten ohne Kräfte dünn zu verteilen.",
          nl: "De rollende golfstrategie houdt in dat je aangrenzende gebieden in volgorde verovert, je hoofdleger vooruit verplaatst na elke verovering om offensief momentum te behouden zonder krachten dun te spreiden."
        }
      },
      {
        question: {
          en: "How many territories does Asia contain?",
          es: "¿Cuántos territorios contiene Asia?",
          de: "Wie viele Gebiete enthält Asien?",
          nl: "Hoeveel gebieden bevat Azië?"
        },
        options: [
          { en: "10", es: "10", de: "10", nl: "10" },
          { en: "11", es: "11", de: "11", nl: "11" },
          { en: "12", es: "12", de: "12", nl: "12" },
          { en: "13", es: "13", de: "13", nl: "13" }
        ],
        correct: 2,
        explanation: {
          en: "Asia contains 12 territories: Ural, Siberia, Yakutsk, Kamchatka, Irkutsk, Mongolia, Japan, Afghanistan, China, Middle East, India, and Siam. This makes it the largest continent.",
          es: "Asia contiene 12 territorios: Ural, Siberia, Yakutsk, Kamchatka, Irkutsk, Mongolia, Japón, Afganistán, China, Medio Oriente, India y Siam. Esto la convierte en el continente más grande.",
          de: "Asien enthält 12 Gebiete: Ural, Sibirien, Jakutsk, Kamtschatka, Irkutsk, Mongolei, Japan, Afghanistan, China, Naher Osten, Indien und Siam. Dies macht es zum größten Kontinent.",
          nl: "Azië bevat 12 gebieden: Oeral, Siberië, Jakoetsk, Kamtsjatka, Irkoetsk, Mongolië, Japan, Afghanistan, China, Midden-Oosten, India en Siam. Dit maakt het het grootste continent."
        }
      },
      {
        question: {
          en: "What is the optimal number of armies to leave in conquered interior territories?",
          es: "¿Cuál es el número óptimo de ejércitos a dejar en territorios interiores conquistados?",
          de: "Was ist die optimale Anzahl an Armeen, die in eroberten inneren Gebieten zu belassen ist?",
          nl: "Wat is het optimale aantal legers om achter te laten in veroverde binnenlandse gebieden?"
        },
        options: [
          { en: "1 army (minimum)", es: "1 ejército (mínimo)", de: "1 Armee (Minimum)", nl: "1 leger (minimum)" },
          { en: "3 armies", es: "3 ejércitos", de: "3 Armeen", nl: "3 legers" },
          { en: "5 armies", es: "5 ejércitos", de: "5 Armeen", nl: "5 legers" },
          { en: "10 armies", es: "10 ejércitos", de: "10 Armeen", nl: "10 legers" }
        ],
        correct: 0,
        explanation: {
          en: "The optimal strategy is to leave only 1 army in interior territories that don't border enemies, maximizing armies available for borders and attacks. Only fortify borders heavily.",
          es: "La estrategia óptima es dejar solo 1 ejército en territorios interiores que no limitan con enemigos, maximizando ejércitos disponibles para fronteras y ataques. Solo fortificar fronteras fuertemente.",
          de: "Die optimale Strategie ist, nur 1 Armee in inneren Gebieten zu belassen, die nicht an Feinde grenzen, um verfügbare Armeen für Grenzen und Angriffe zu maximieren. Nur Grenzen stark befestigen.",
          nl: "De optimale strategie is om slechts 1 leger achter te laten in binnenlandse gebieden die niet grenzen aan vijanden, legers beschikbaar voor grenzen en aanvallen maximaliseren. Alleen grenzen zwaar versterken."
        }
      },
      {
        question: {
          en: "Which territory connects North America to Asia?",
          es: "¿Qué territorio conecta América del Norte con Asia?",
          de: "Welches Gebiet verbindet Nordamerika mit Asien?",
          nl: "Welk gebied verbindt Noord-Amerika met Azië?"
        },
        options: [
          { en: "Alaska to Kamchatka", es: "Alaska a Kamchatka", de: "Alaska nach Kamtschatka", nl: "Alaska naar Kamtsjatka" },
          { en: "Greenland to Iceland", es: "Groenlandia a Islandia", de: "Grönland nach Island", nl: "Groenland naar IJsland" },
          { en: "Central America to Venezuela", es: "América Central a Venezuela", de: "Mittelamerika nach Venezuela", nl: "Midden-Amerika naar Venezuela" },
          { en: "No direct connection", es: "Sin conexión directa", de: "Keine direkte Verbindung", nl: "Geen directe verbinding" }
        ],
        correct: 0,
        explanation: {
          en: "Alaska (North America) connects directly to Kamchatka (Asia) across the Bering Strait, making this the only direct connection between these two continents.",
          es: "Alaska (América del Norte) se conecta directamente con Kamchatka (Asia) a través del Estrecho de Bering, haciendo de esta la única conexión directa entre estos dos continentes.",
          de: "Alaska (Nordamerika) verbindet sich direkt mit Kamtschatka (Asien) über die Beringstraße, was dies zur einzigen direkten Verbindung zwischen diesen beiden Kontinenten macht.",
          nl: "Alaska (Noord-Amerika) verbindt direct met Kamtsjatka (Azië) over de Beringstraat, waardoor dit de enige directe verbinding tussen deze twee continenten is."
        }
      },
      {
        question: {
          en: "What is the primary indicator that you're in a winning position?",
          es: "¿Cuál es el indicador principal de que estás en una posición ganadora?",
          de: "Was ist der primäre Indikator dafür, dass du in einer Gewinnposition bist?",
          nl: "Wat is de primaire indicator dat je in een winnende positie bent?"
        },
        options: [
          { en: "Having the most cards", es: "Tener la mayoría de cartas", de: "Die meisten Karten zu haben", nl: "De meeste kaarten hebben" },
          { en: "Controlling 2+ continents with strong borders", es: "Controlar 2+ continentes con fronteras fuertes", de: "2+ Kontinente mit starken Grenzen kontrollieren", nl: "2+ continenten met sterke grenzen controleren" },
          { en: "Having the most territories", es: "Tener la mayoría de territorios", de: "Die meisten Gebiete zu haben", nl: "De meeste gebieden hebben" },
          { en: "Attacking the most", es: "Atacar más", de: "Am meisten angreifen", nl: "Het meest aanvallen" }
        ],
        correct: 1,
        explanation: {
          en: "The primary indicator of a winning position is controlling 2 or more continents with defensible borders, as this provides massive reinforcement advantage (+10+ armies/turn) that compounds over time.",
          es: "El indicador principal de una posición ganadora es controlar 2 o más continentes con fronteras defendibles, ya que esto proporciona una ventaja masiva de refuerzo (+10+ ejércitos/turno) que se acumula con el tiempo.",
          de: "Der primäre Indikator für eine Gewinnposition ist die Kontrolle von 2 oder mehr Kontinenten mit verteidigungsfähigen Grenzen, da dies massiven Verstärkungsvorteil (+10+ Armeen/Runde) bietet, der sich im Laufe der Zeit verstärkt.",
          nl: "De primaire indicator van een winnende positie is het controleren van 2 of meer continenten met verdedigbare grenzen, aangezien dit massaal versterkingsvoordeel (+10+ legers/beurt) biedt dat in de loop van de tijd aangroeit."
        }
      },
      {
        question: {
          en: "What determines the winner when both attacker and defender roll the same highest number?",
          es: "¿Qué determina el ganador cuando tanto atacante como defensor lanzan el mismo número más alto?",
          de: "Was bestimmt den Gewinner, wenn sowohl Angreifer als auch Verteidiger die gleiche höchste Zahl würfeln?",
          nl: "Wat bepaalt de winnaar wanneer zowel aanvaller als verdediger hetzelfde hoogste getal gooien?"
        },
        options: [
          { en: "Reroll the dice", es: "Volver a tirar los dados", de: "Würfel neu werfen", nl: "Dobbelstenen opnieuw gooien" },
          { en: "Attacker wins", es: "Atacante gana", de: "Angreifer gewinnt", nl: "Aanvaller wint" },
          { en: "Defender wins", es: "Defensor gana", de: "Verteidiger gewinnt", nl: "Verdediger wint" },
          { en: "Both lose an army", es: "Ambos pierden un ejército", de: "Beide verlieren eine Armee", nl: "Beiden verliezen een leger" }
        ],
        correct: 2,
        explanation: {
          en: "When the highest dice are tied, the defender always wins. This 'ties go to the defender' rule provides a significant defensive advantage and is a core mechanic of Risk.",
          es: "Cuando los dados más altos están empatados, el defensor siempre gana. Esta regla de 'los empates van al defensor' proporciona una ventaja defensiva significativa y es una mecánica central de Risk.",
          de: "Wenn die höchsten Würfel unentschieden sind, gewinnt immer der Verteidiger. Diese 'Unentschieden gehen an den Verteidiger'-Regel bietet einen erheblichen Verteidigungsvorteil und ist eine Kernmechanik von Risk.",
          nl: "Wanneer de hoogste dobbelstenen gelijk zijn, wint de verdediger altijd. Deze 'gelijke standen gaan naar de verdediger'-regel biedt een aanzienlijk verdedigingsvoordeel en is een kernmechanisme van Risk."
        }
      },
      {
        question: {
          en: "What is the average game length of Risk with experienced players?",
          es: "¿Cuál es la duración promedio del juego de Risk con jugadores experimentados?",
          de: "Was ist die durchschnittliche Spieldauer von Risk mit erfahrenen Spielern?",
          nl: "Wat is de gemiddelde spelduur van Risk met ervaren spelers?"
        },
        options: [
          { en: "30-60 minutes", es: "30-60 minutos", de: "30-60 Minuten", nl: "30-60 minuten" },
          { en: "1-2 hours", es: "1-2 horas", de: "1-2 Stunden", nl: "1-2 uur" },
          { en: "2-4 hours", es: "2-4 horas", de: "2-4 Stunden", nl: "2-4 uur" },
          { en: "5+ hours", es: "5+ horas", de: "5+ Stunden", nl: "5+ uur" }
        ],
        correct: 2,
        explanation: {
          en: "With experienced players, Risk typically takes 2-4 hours to complete. The game length varies based on number of players, strategies used, and whether mission cards or world domination is the goal.",
          es: "Con jugadores experimentados, Risk típicamente toma 2-4 horas para completarse. La duración del juego varía según el número de jugadores, estrategias usadas y si las cartas de misión o dominación mundial es el objetivo.",
          de: "Mit erfahrenen Spielern dauert Risk normalerweise 2-4 Stunden. Die Spieldauer variiert je nach Anzahl der Spieler, verwendeten Strategien und ob Missionskarten oder Weltherrschaft das Ziel ist.",
          nl: "Met ervaren spelers duurt Risk doorgaans 2-4 uur om te voltooien. De spelduur varieert afhankelijk van aantal spelers, gebruikte strategieën en of missiekaarten of wereldheerschappij het doel is."
        }    },
    {
      question: {en: "What is strategy in games?", es: "What is strategy in games?", de: "What is strategy in games?", nl: "What is strategy in games?"},
      options: [
        {en: "Planning to achieve objectives", es: "Planning to achieve objectives", de: "Planning to achieve objectives", nl: "Planning to achieve objectives"},
        {en: "Random moves", es: "Random moves", de: "Random moves", nl: "Random moves"},
        {en: "Luck only", es: "Luck only", de: "Luck only", nl: "Luck only"},
        {en: "No planning", es: "No planning", de: "No planning", nl: "No planning"}
      ],
      correct: 0,
      explanation: {en: "Strategy involves planning and decision-making to achieve game objectives.", es: "Strategy involves planning and decision-making to achieve game objectives.", de: "Strategy involves planning and decision-making to achieve game objectives.", nl: "Strategy involves planning and decision-making to achieve game objectives."}
    },
    {
      question: {en: "What is strategy in games?", es: "What is strategy in games?", de: "What is strategy in games?", nl: "What is strategy in games?"},
      options: [
        {en: "Planning to achieve objectives", es: "Planning to achieve objectives", de: "Planning to achieve objectives", nl: "Planning to achieve objectives"},
        {en: "Random moves", es: "Random moves", de: "Random moves", nl: "Random moves"},
        {en: "Luck only", es: "Luck only", de: "Luck only", nl: "Luck only"},
        {en: "No planning", es: "No planning", de: "No planning", nl: "No planning"}
      ],
      correct: 0,
      explanation: {en: "Strategy involves planning and decision-making to achieve game objectives.", es: "Strategy involves planning and decision-making to achieve game objectives.", de: "Strategy involves planning and decision-making to achieve game objectives.", nl: "Strategy involves planning and decision-making to achieve game objectives."}

      }
    ]
  };

  // Export for use in the quiz application
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level3;
  } else if (typeof window !== 'undefined') {
    window.level3 = level3;
  }
})();
