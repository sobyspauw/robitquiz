// Animals - Level 4: Animal Babies & Families
(function() {
  const level4 = {
    name: {
      en: "Animal Babies & Families",
      es: "Bebés Animales y Familias",
      de: "Tierbabys und Familien",
      nl: "Dierbaby's en Families"
    },
    questions: [
      {
        question: {
          en: "What do we call baby dogs?",
          es: "¿Cómo llamamos a los bebés de perro?",
          de: "Wie nennen wir Hundebabys?",
          nl: "Hoe noemen we puppies?"
        },
        options: [
          { en: "Puppies", es: "Cachorros", de: "Welpen", nl: "Puppy's" },
          { en: "Kittens", es: "Gatitos", de: "Kätzchen", nl: "Kittens" },
          { en: "Cubs", es: "Cachorros", de: "Junge", nl: "Welpen" },
          { en: "Chicks", es: "Pollitos", de: "Küken", nl: "Kuikens" }
        ],
        correct: 0,
        explanation: {
          en: "Baby dogs are called puppies and they are born after about 9 weeks of pregnancy, usually in litters of 4-6.",
          es: "Los bebés de perro se llaman cachorros y nacen después de unas 9 semanas de embarazo, generalmente en camadas de 4-6.",
          de: "Hundebabys werden Welpen genannt und werden nach etwa 9 Wochen Schwangerschaft geboren, normalerweise in Würfen von 4-6.",
          nl: "Baby honden worden puppy's genoemd en worden geboren na ongeveer 9 weken zwangerschap, meestal in nesten van 4-6."
        }
      },
      {
        question: {
          en: "What do we call baby cows?",
          es: "¿Cómo llamamos a los bebés de vaca?",
          de: "Wie nennen wir Kälber?",
          nl: "Hoe noemen we baby koeien?"
        },
        options: [
          { en: "Calves", es: "Terneros", de: "Kälber", nl: "Kalveren" },
          { en: "Foals", es: "Potros", de: "Fohlen", nl: "Veulens" },
          { en: "Lambs", es: "Corderos", de: "Lämmer", nl: "Lammeren" },
          { en: "Piglets", es: "Lechones", de: "Ferkel", nl: "Biggetjes" }
        ],
        correct: 0,
        explanation: {
          en: "Baby cows are called calves and they can stand and walk within an hour of being born.",
          es: "Los bebés de vaca se llaman terneros y pueden ponerse de pie y caminar dentro de una hora de haber nacido.",
          de: "Kuhbabys werden Kälber genannt und können innerhalb einer Stunde nach der Geburt stehen und laufen.",
          nl: "Baby koeien worden kalveren genoemd en kunnen binnen een uur na de geboorte staan en lopen."
        }
      },
      {
        question: {
          en: "What do we call baby elephants?",
          es: "¿Cómo llamamos a los bebés de elefante?",
          de: "Wie nennen wir Elefantenbabys?",
          nl: "Hoe noemen we baby olifanten?"
        },
        options: [
          { en: "Calves", es: "Terneros", de: "Kälber", nl: "Kalveren" },
          { en: "Cubs", es: "Cachorros", de: "Junge", nl: "Welpen" },
          { en: "Foals", es: "Potros", de: "Fohlen", nl: "Veulens" },
          { en: "Chicks", es: "Pollitos", de: "Küken", nl: "Kuikens" }
        ],
        correct: 0,
        explanation: {
          en: "Baby elephants are called calves and they stay close to their mothers for up to 16 years learning survival skills.",
          es: "Los bebés de elefante se llaman terneros y se quedan cerca de sus madres hasta 16 años aprendiendo habilidades de supervivencia.",
          de: "Elefantenbabys werden Kälber genannt und bleiben bis zu 16 Jahre in der Nähe ihrer Mütter, um Überlebensfähigkeiten zu lernen.",
          nl: "Baby olifanten worden kalveren genoemd en blijven tot 16 jaar dicht bij hun moeders om overlevingsvaardigheden te leren."
        }
      },
      {
        question: {
          en: "What do we call baby kangaroos?",
          es: "¿Cómo llamamos a los bebés de canguro?",
          de: "Wie nennen wir Kängurubabys?",
          nl: "Hoe noemen we baby kangoeroes?"
        },
        options: [
          { en: "Joeys", es: "Joeys", de: "Joeys", nl: "Joey's" },
          { en: "Cubs", es: "Cachorros", de: "Junge", nl: "Welpen" },
          { en: "Kits", es: "Crías", de: "Welpen", nl: "Welpen" },
          { en: "Pups", es: "Cachorros", de: "Welpen", nl: "Welpen" }
        ],
        correct: 0,
        explanation: {
          en: "Baby kangaroos are called joeys and are only 2cm long when born, then crawl into their mother's pouch to grow.",
          es: "Los bebés de canguro se llaman joeys y miden solo 2 cm cuando nacen, luego se arrastran a la bolsa de su madre para crecer.",
          de: "Kängurubabys werden Joeys genannt und sind bei der Geburt nur 2 cm lang, dann kriechen sie in den Beutel ihrer Mutter, um zu wachsen.",
          nl: "Baby kangoeroes worden joey's genoemd en zijn slechts 2 cm lang bij de geboorte, dan kruipen ze in de buidel van hun moeder om te groeien."
        }
      },
      {
        question: {
          en: "What do we call baby sheep?",
          es: "¿Cómo llamamos a los bebés de oveja?",
          de: "Wie nennen wir Schafbabys?",
          nl: "Hoe noemen we baby schapen?"
        },
        options: [
          { en: "Lambs", es: "Corderos", de: "Lämmer", nl: "Lammeren" },
          { en: "Calves", es: "Terneros", de: "Kälber", nl: "Kalveren" },
          { en: "Kids", es: "Cabritos", de: "Kitze", nl: "Geitjes" },
          { en: "Foals", es: "Potros", de: "Fohlen", nl: "Veulens" }
        ],
        correct: 0,
        explanation: {
          en: "Baby sheep are called lambs and they follow their mothers closely, learning to graze and recognize the flock's calls.",
          es: "Los bebés de oveja se llaman corderos y siguen de cerca a sus madres, aprendiendo a pastar y reconocer las llamadas del rebaño.",
          de: "Schafbabys werden Lämmer genannt und folgen ihren Müttern eng, lernen zu grasen und die Rufe der Herde zu erkennen.",
          nl: "Baby schapen worden lammeren genoemd en volgen hun moeders op de voet, leren grazen en de roep van de kudde herkennen."
        }
      },
      {
        question: {
          en: "What do we call baby bears?",
          es: "¿Cómo llamamos a los bebés de oso?",
          de: "Wie nennen wir Bärenbabys?",
          nl: "Hoe noemen we baby beren?"
        },
        options: [
          { en: "Cubs", es: "Oseznos", de: "Junge", nl: "Welpen" },
          { en: "Calves", es: "Terneros", de: "Kälber", nl: "Kalveren" },
          { en: "Pups", es: "Cachorros", de: "Welpen", nl: "Welpen" },
          { en: "Kits", es: "Crías", de: "Welpen", nl: "Welpen" }
        ],
        correct: 0,
        explanation: {
          en: "Baby bears are called cubs and they stay with their mothers for 1-3 years learning essential survival skills like finding food and avoiding danger.",
          es: "Los bebés de oso se llaman oseznos y se quedan con sus madres de 1-3 años aprendiendo habilidades esenciales de supervivencia como encontrar comida y evitar el peligro.",
          de: "Bärenbabys werden Junge genannt und bleiben 1-3 Jahre bei ihren Müttern, um essentielle Überlebensfähigkeiten wie Nahrungssuche und Gefahrenvermeidung zu lernen.",
          nl: "Baby beren worden welpen genoemd en blijven 1-3 jaar bij hun moeders om essentiële overlevingsvaardigheden te leren zoals voedsel vinden en gevaar vermijden."
        }
      },
      {
        question: {
          en: "What do we call baby chickens?",
          es: "¿Cómo llamamos a los bebés de gallina?",
          de: "Wie nennen wir Hühnerbabys?",
          nl: "Hoe noemen we baby kippen?"
        },
        options: [
          { en: "Chicks", es: "Pollitos", de: "Küken", nl: "Kuikens" },
          { en: "Ducklings", es: "Patitos", de: "Entenküken", nl: "Eendjes" },
          { en: "Goslings", es: "Crías de ganso", de: "Gänschen", nl: "Gansjes" },
          { en: "Cygnets", es: "Crías de cisne", de: "Schwanenjunge", nl: "Zwanenkuikens" }
        ],
        correct: 0,
        explanation: {
          en: "Baby chickens are called chicks and they hatch from eggs after 21 days, immediately able to walk and peck for food.",
          es: "Los bebés de gallina se llaman pollitos y salen del cascarón después de 21 días, inmediatamente capaces de caminar y picotear por comida.",
          de: "Hühnerbabys werden Küken genannt und schlüpfen nach 21 Tagen aus Eiern, sofort fähig zu laufen und nach Futter zu picken.",
          nl: "Baby kippen worden kuikens genoemd en komen na 21 dagen uit eieren, meteen in staat om te lopen en naar voedsel te pikken."
        }
      },
      {
        question: {
          en: "What do we call baby ducks?",
          es: "¿Cómo llamamos a los bebés de pato?",
          de: "Wie nennen wir Entenbabys?",
          nl: "Hoe noemen we baby eenden?"
        },
        options: [
          { en: "Ducklings", es: "Patitos", de: "Entenküken", nl: "Eendjes" },
          { en: "Chicks", es: "Pollitos", de: "Küken", nl: "Kuikens" },
          { en: "Goslings", es: "Crías de ganso", de: "Gänschen", nl: "Gansjes" },
          { en: "Fledglings", es: "Polluelos", de: "Jungvögel", nl: "Jonge vogels" }
        ],
        correct: 0,
        explanation: {
          en: "Baby ducks are called ducklings and they can swim and dive within hours of hatching, following their mother in a line.",
          es: "Los bebés de pato se llaman patitos y pueden nadar y bucear horas después de salir del cascarón, siguiendo a su madre en línea.",
          de: "Entenbabys werden Entenküken genannt und können Stunden nach dem Schlüpfen schwimmen und tauchen, folgen ihrer Mutter in einer Linie.",
          nl: "Baby eenden worden eendjes genoemd en kunnen binnen uren na het uitkomen zwemmen en duiken, hun moeder in een lijn volgend."
        }
      },
      {
        question: {
          en: "Where do baby kangaroos grow up?",
          es: "¿Dónde crecen los bebés canguro?",
          de: "Wo wachsen Kängurubabys auf?",
          nl: "Waar groeien baby kangoeroes op?"
        },
        options: [
          { en: "In their mother's pouch", es: "En la bolsa de su madre", de: "Im Beutel der Mutter", nl: "In de buidel van hun moeder" },
          { en: "In nests", es: "En nidos", de: "In Nestern", nl: "In nesten" },
          { en: "Underground", es: "Bajo tierra", de: "Unterirdisch", nl: "Ondergronds" },
          { en: "In trees", es: "En árboles", de: "In Bäumen", nl: "In bomen" }
        ],
        correct: 0,
        explanation: {
          en: "Baby kangaroos (joeys) grow up in their mother's pouch, a warm, safe pocket where they drink milk and develop for several months.",
          es: "Los bebés canguro (joeys) crecen en la bolsa de su madre, un bolsillo cálido y seguro donde beben leche y se desarrollan durante varios meses.",
          de: "Kängurubabys (Joeys) wachsen im Beutel ihrer Mutter auf, einer warmen, sicheren Tasche, wo sie Milch trinken und sich mehrere Monate entwickeln.",
          nl: "Baby kangoeroes (joey's) groeien op in de buidel van hun moeder, een warme, veilige zak waar ze melk drinken en zich maandenlang ontwikkelen."
        }
      },
      {
        question: {
          en: "How do baby penguins stay warm?",
          es: "¿Cómo se mantienen calientes los bebés pingüino?",
          de: "Wie bleiben Pinguinbabys warm?",
          nl: "Hoe blijven baby pinguïns warm?"
        },
        options: [
          { en: "Parents keep them warm", es: "Los padres los mantienen calientes", de: "Eltern halten sie warm", nl: "Ouders houden ze warm" },
          { en: "They swim in warm water", es: "Nadan en agua tibia", de: "Sie schwimmen in warmem Wasser", nl: "Ze zwemmen in warm water" },
          { en: "They hide in caves", es: "Se esconden en cuevas", de: "Sie verstecken sich in Höhlen", nl: "Ze verstoppen zich in grotten" },
          { en: "They build fires", es: "Hacen fogatas", de: "Sie machen Feuer", nl: "Ze maken vuur" }
        ],
        correct: 0,
        explanation: {
          en: "Baby penguins stay warm by huddling close to their parents, who cover them with warm belly feathers and share body heat in harsh Antarctic conditions.",
          es: "Los bebés pingüino se mantienen calientes acurrucándose cerca de sus padres, quienes los cubren con plumas cálidas del vientre y comparten calor corporal en las duras condiciones antárticas.",
          de: "Pinguinbabys bleiben warm, indem sie sich eng an ihre Eltern kuscheln, die sie mit warmen Bauchfedern bedecken und Körperwärme unter harten antarktischen Bedingungen teilen.",
          nl: "Baby pinguïns blijven warm door dicht tegen hun ouders aan te kruipen, die hen bedekken met warme buikveren en lichaamswarmte delen in de zware Antarctische omstandigheden."
        }
      },
      {
        question: {
          en: "What do we call baby goats?",
          es: "¿Cómo llamamos a los bebés de cabra?",
          de: "Wie nennen wir Ziegenbabys?",
          nl: "Hoe noemen we baby geiten?"
        },
        options: [
          { en: "Kids", es: "Cabritos", de: "Kitze", nl: "Geitjes" },
          { en: "Lambs", es: "Corderos", de: "Lämmer", nl: "Lammeren" },
          { en: "Calves", es: "Terneros", de: "Kälber", nl: "Kalveren" },
          { en: "Colts", es: "Potros", de: "Fohlen", nl: "Veulens" }
        ],
        correct: 0,
        explanation: {
          en: "Baby goats are called kids and they are very playful, often jumping and climbing on rocks and playground equipment from a young age.",
          es: "Los bebés de cabra se llaman cabritos y son muy juguetones, a menudo saltando y trepando en rocas y equipos de juego desde una edad temprana.",
          de: "Ziegenbabys werden Kitze genannt und sind sehr verspielt, springen und klettern oft auf Felsen und Spielgeräten von klein auf.",
          nl: "Baby geiten worden geitjes genoemd en zijn erg speels, springen en klimmen vaak op rotsen en speeltoestellen vanaf jonge leeftijd."
        }
      },
      {
        question: {
          en: "What do we call baby pigs?",
          es: "¿Cómo llamamos a los bebés de cerdo?",
          de: "Wie nennen wir Schweinebabys?",
          nl: "Hoe noemen we baby varkens?"
        },
        options: [
          { en: "Piglets", es: "Lechones", de: "Ferkel", nl: "Biggetjes" },
          { en: "Calves", es: "Terneros", de: "Kälber", nl: "Kalveren" },
          { en: "Kids", es: "Cabritos", de: "Kitze", nl: "Geitjes" },
          { en: "Lambs", es: "Corderos", de: "Lämmer", nl: "Lammeren" }
        ],
        correct: 0,
        explanation: {
          en: "Baby pigs are called piglets and they are born in groups, staying close to their mother and siblings for warmth and protection.",
          es: "Los bebés de cerdo se llaman lechones y nacen en grupos, manteniéndose cerca de su madre y hermanos para calor y protección.",
          de: "Schweinebabys werden Ferkel genannt und werden in Gruppen geboren, bleiben in der Nähe ihrer Mutter und Geschwister für Wärme und Schutz.",
          nl: "Baby varkens worden biggetjes genoemd en worden in groepen geboren, blijven dicht bij hun moeder en broers en zussen voor warmte en bescherming."
        }
      },
      {
        question: {
          en: "How many babies do cats usually have at once?",
          es: "¿Cuántos bebés suelen tener los gatos a la vez?",
          de: "Wie viele Babys haben Katzen normalerweise auf einmal?",
          nl: "Hoeveel baby's krijgen katten gewoonlijk tegelijk?"
        },
        options: [
          { en: "2-6 kittens", es: "2-6 gatitos", de: "2-6 Kätzchen", nl: "2-6 kittens" },
          { en: "Just 1", es: "Solo 1", de: "Nur 1", nl: "Maar 1" },
          { en: "Always 10", es: "Siempre 10", de: "Immer 10", nl: "Altijd 10" },
          { en: "More than 20", es: "Más de 20", de: "Mehr als 20", nl: "Meer dan 20" }
        ],
        correct: 0,
        explanation: {
          en: "Mother cats typically have litters of 2-6 kittens at once, though the number can vary depending on the cat's age, health, and breed.",
          es: "Las gatas madres típicamente tienen camadas de 2-6 gatitos a la vez, aunque el número puede variar dependiendo de la edad, salud y raza del gato.",
          de: "Katzmütter haben typischerweise Würfe von 2-6 Kätzchen auf einmal, obwohl die Anzahl je nach Alter, Gesundheit und Rasse der Katze variieren kann.",
          nl: "Moederkatten hebben doorgaans nesten van 2-6 kittens tegelijk, hoewel het aantal kan variëren afhankelijk van de leeftijd, gezondheid en het ras van de kat."
        }
      },
      {
        question: {
          en: "What do baby birds do when they want food?",
          es: "¿Qué hacen los bebés pájaro cuando quieren comida?",
          de: "Was machen Vogelbabys, wenn sie Futter wollen?",
          nl: "Wat doen baby vogels als ze voedsel willen?"
        },
        options: [
          { en: "Open their beaks wide", es: "Abren sus picos ampliamente", de: "Öffnen ihre Schnäbel weit", nl: "Doen hun bekken wijd open" },
          { en: "Fly away", es: "Vuelan lejos", de: "Fliegen weg", nl: "Vliegen weg" },
          { en: "Hide under leaves", es: "Se esconden bajo las hojas", de: "Verstecken sich unter Blättern", nl: "Verstoppen zich onder bladeren" },
          { en: "Sleep more", es: "Duermen más", de: "Schlafen mehr", nl: "Slapen meer" }
        ],
        correct: 0,
        explanation: {
          en: "Baby birds open their beaks wide and chirp loudly to signal their parents that they're hungry and need to be fed.",
          es: "Los bebés pájaro abren sus picos ampliamente y pían fuerte para señalar a sus padres que tienen hambre y necesitan ser alimentados.",
          de: "Vogelbabys öffnen ihre Schnäbel weit und zwitschern laut, um ihren Eltern zu signalisieren, dass sie hungrig sind und gefüttert werden müssen.",
          nl: "Baby vogels doen hun bekken wijd open en tsjilpen luid om hun ouders te signaleren dat ze honger hebben en gevoerd moeten worden."
        }
      },
      {
        question: {
          en: "What do we call baby deer?",
          es: "¿Cómo llamamos a los bebés de ciervo?",
          de: "Wie nennen wir Hirschbabys?",
          nl: "Hoe noemen we baby herten?"
        },
        options: [
          { en: "Fawns", es: "Cervatos", de: "Kitze", nl: "Hertenkalf" },
          { en: "Calves", es: "Terneros", de: "Kälber", nl: "Kalveren" },
          { en: "Kids", es: "Cabritos", de: "Kitze", nl: "Geitjes" },
          { en: "Colts", es: "Potros", de: "Fohlen", nl: "Veulens" }
        ],
        correct: 0,
        explanation: {
          en: "Baby deer are called fawns and they have spotted coats that help camouflage them in the forest while their mothers search for food.",
          es: "Los bebés de ciervo se llaman cervatos y tienen pelajes manchados que los ayudan a camuflarse en el bosque mientras sus madres buscan comida.",
          de: "Hirschbabys werden Kitze genannt und haben gefleckte Mäntel, die ihnen helfen, sich im Wald zu tarnen, während ihre Mütter nach Nahrung suchen.",
          nl: "Baby herten worden hertenkalf genoemd en hebben gevlekte vachten die hen helpen camoufleren in het bos terwijl hun moeders naar voedsel zoeken."
        }
      },
      {
        question: {
          en: "What do mother lions do to move their babies?",
          es: "¿Qué hacen las leonas madres para mover a sus bebés?",
          de: "Was machen Löwenmütter, um ihre Babys zu bewegen?",
          nl: "Wat doen moeder leeuwinnen om hun baby's te verplaatsen?"
        },
        options: [
          { en: "Carry them in their mouth", es: "Los cargan en su boca", de: "Tragen sie in ihrem Maul", nl: "Dragen ze in hun bek" },
          { en: "Push them with their paws", es: "Los empujan con sus patas", de: "Schieben sie mit ihren Pfoten", nl: "Duwen ze met hun poten" },
          { en: "Make them walk alone", es: "Los hacen caminar solos", de: "Lassen sie allein laufen", nl: "Laten ze alleen lopen" },
          { en: "Carry them on their back", es: "Los cargan en su espalda", de: "Tragen sie auf ihrem Rücken", nl: "Dragen ze op hun rug" }
        ],
        correct: 0,
        explanation: {
          en: "Mother lions gently carry their cubs by the scruff of the neck in their mouths, moving them to safe locations when needed.",
          es: "Las leonas madres cargan suavemente a sus cachorros por la nuca en sus bocas, moviéndolos a lugares seguros cuando es necesario.",
          de: "Löwmütter tragen ihre Jungen sanft am Nacken in ihrem Maul und bewegen sie bei Bedarf an sichere Orte.",
          nl: "Moeder leeuwinnen dragen hun welpen voorzichtig bij de nekvel in hun bek, verplaatsen ze naar veilige locaties wanneer nodig."
        }
      },
      {
        question: {
          en: "What do we call baby rabbits?",
          es: "¿Cómo llamamos a los bebés de conejo?",
          de: "Wie nennen wir Kaninchenbabys?",
          nl: "Hoe noemen we baby konijnen?"
        },
        options: [
          { en: "Kits or bunnies", es: "Crías o conejitos", de: "Welpen oder Häschen", nl: "Welpen of konijntjes" },
          { en: "Pups", es: "Cachorros", de: "Welpen", nl: "Welpen" },
          { en: "Cubs", es: "Cachorros", de: "Junge", nl: "Welpen" },
          { en: "Chicks", es: "Pollitos", de: "Küken", nl: "Kuikens" }
        ],
        correct: 0,
        explanation: {
          en: "Baby rabbits are called kits or bunnies and they are born hairless and blind, staying in warm burrows until they develop.",
          es: "Los bebés de conejo se llaman crías o conejitos y nacen sin pelo y ciegos, permaneciendo en madrigueras cálidas hasta que se desarrollan.",
          de: "Kaninchenbabys werden Welpen oder Häschen genannt und werden haarlos und blind geboren, bleiben in warmen Bauten, bis sie sich entwickeln.",
          nl: "Baby konijnen worden welpen of konijntjes genoemd en worden haarloos en blind geboren, blijven in warme holen tot ze zich ontwikkelen."
        }
      },
      {
        question: {
          en: "How long do baby elephants stay with their mothers?",
          es: "¿Cuánto tiempo permanecen los bebés elefante con sus madres?",
          de: "Wie lange bleiben Elefantenbabys bei ihren Müttern?",
          nl: "Hoe lang blijven baby olifanten bij hun moeders?"
        },
        options: [
          { en: "Several years", es: "Varios años", de: "Mehrere Jahre", nl: "Enkele jaren" },
          { en: "Just a few days", es: "Solo unos días", de: "Nur ein paar Tage", nl: "Maar een paar dagen" },
          { en: "One week", es: "Una semana", de: "Eine Woche", nl: "Eén week" },
          { en: "One month", es: "Un mes", de: "Einen Monat", nl: "Eén maand" }
        ],
        correct: 0,
        explanation: {
          en: "Baby elephants stay with their mothers for several years (up to 16), learning complex social behaviors and survival skills in the herd.",
          es: "Los bebés elefante se quedan con sus madres durante varios años (hasta 16), aprendiendo comportamientos sociales complejos y habilidades de supervivencia en la manada.",
          de: "Elefantenbabys bleiben mehrere Jahre bei ihren Müttern (bis zu 16), lernen komplexe Sozialverhalten und Überlebensfähigkeiten in der Herde.",
          nl: "Baby olifanten blijven enkele jaren bij hun moeders (tot 16), leren complex sociaal gedrag en overlevingsvaardigheden in de kudde."
        }
      },
      {
        question: {
          en: "What do we call baby owls?",
          es: "¿Cómo llamamos a los bebés de búho?",
          de: "Wie nennen wir Eulenbabys?",
          nl: "Hoe noemen we baby uilen?"
        },
        options: [
          { en: "Owlets", es: "Búhos bebé", de: "Eulenküken", nl: "Uilenkuikens" },
          { en: "Chicks", es: "Pollitos", de: "Küken", nl: "Kuikens" },
          { en: "Nestlings", es: "Polluelos", de: "Nestlinge", nl: "Nestjongen" },
          { en: "Fledglings", es: "Volantones", de: "Jungvögel", nl: "Uitgevlogen jongen" }
        ],
        correct: 0,
        explanation: {
          en: "Baby owls are called owlets and they stay in the nest for several weeks, practicing their hunting skills before learning to fly.",
          es: "Los bebés de búho se llaman búhos bebé y se quedan en el nido durante varias semanas, practicando sus habilidades de caza antes de aprender a volar.",
          de: "Eulenbabys werden Eulenküken genannt und bleiben mehrere Wochen im Nest, üben ihre Jagdfähigkeiten, bevor sie fliegen lernen.",
          nl: "Baby uilen worden uilenkuikens genoemd en blijven enkele weken in het nest, oefenen hun jachtvaardigheden voordat ze leren vliegen."
        }
      },
      {
        question: {
          en: "How do baby turtles know where to go when they hatch?",
          es: "¿Cómo saben los bebés tortuga dónde ir cuando salen del cascarón?",
          de: "Woher wissen Schildkrötenbabys, wohin sie gehen sollen, wenn sie schlüpfen?",
          nl: "Hoe weten baby schildpadden waar ze heen moeten als ze uitkomen?"
        },
        options: [
          { en: "They follow the light to water", es: "Siguen la luz hacia el agua", de: "Sie folgen dem Licht zum Wasser", nl: "Ze volgen het licht naar het water" },
          { en: "Their parents show them", es: "Sus padres les muestran", de: "Ihre Eltern zeigen es ihnen", nl: "Hun ouders laten het zien" },
          { en: "They wait for help", es: "Esperan ayuda", de: "Sie warten auf Hilfe", nl: "Ze wachten op hulp" },
          { en: "They sleep first", es: "Duermen primero", de: "Sie schlafen zuerst", nl: "Ze slapen eerst" }
        ],
        correct: 0,
        explanation: {
          en: "Baby sea turtles instinctively follow the brightest light (usually moonlight reflecting off the ocean) to find their way to the water after hatching on the beach.",
          es: "Los bebés de tortuga marina instintivamente siguen la luz más brillante (usualmente la luz de la luna reflejada en el océano) para encontrar su camino al agua después de salir del cascarón en la playa.",
          de: "Meeresschildkrötenbabys folgen instinktiv dem hellsten Licht (normalerweise Mondlicht, das sich im Ozean spiegelt), um nach dem Schlüpfen am Strand ihren Weg zum Wasser zu finden.",
          nl: "Baby zeeschildpadden volgen instinctief het helderste licht (meestal maanlicht dat op de oceaan weerkaatst) om hun weg naar het water te vinden na het uitkomen op het strand."
        }
      },
      {
        question: {
          en: "What do we call baby seals?",
          es: "¿Cómo llamamos a los bebés de foca?",
          de: "Wie nennen wir Robbenbabys?",
          nl: "Hoe noemen we baby zeehonden?"
        },
        options: [
          { en: "Pups", es: "Cachorros", de: "Welpen", nl: "Welpen" },
          { en: "Calves", es: "Terneros", de: "Kälber", nl: "Kalveren" },
          { en: "Cubs", es: "Cachorros", de: "Junge", nl: "Welpen" },
          { en: "Kits", es: "Crías", de: "Welpen", nl: "Welpen" }
        ],
        correct: 0,
        explanation: {
          en: "Baby seals are called pups and they are born with thick fur to keep them warm on cold beaches and ice floes.",
          es: "Los bebés de foca se llaman cachorros y nacen con pelaje grueso para mantenerlos calientes en playas frías y témpanos de hielo.",
          de: "Robbenbabys werden Welpen genannt und werden mit dickem Fell geboren, um sie auf kalten Stränden und Eisschöllen warm zu halten.",
          nl: "Baby zeehonden worden welpen genoemd en worden geboren met dikke vacht om hen warm te houden op koude stranden en ijsschotsen."
        }
      },
      {
        question: {
          en: "How do baby dolphins learn to swim?",
          es: "¿Cómo aprenden a nadar los bebés delfín?",
          de: "Wie lernen Delfinbabys zu schwimmen?",
          nl: "Hoe leren baby dolfijnen zwemmen?"
        },
        options: [
          { en: "They swim with their mothers", es: "Nadan con sus madres", de: "Sie schwimmen mit ihren Müttern", nl: "Ze zwemmen met hun moeders" },
          { en: "They learn alone", es: "Aprenden solos", de: "Sie lernen allein", nl: "Ze leren alleen" },
          { en: "They take swimming lessons", es: "Toman clases de natación", de: "Sie nehmen Schwimmstunden", nl: "Ze nemen zwemlessen" },
          { en: "They don't need to learn", es: "No necesitan aprender", de: "Sie müssen nicht lernen", nl: "Ze hoeven niet te leren" }
        ],
        correct: 0,
        explanation: {
          en: "Baby dolphins learn to swim by staying close to their mothers, riding in their slipstream and gradually building strength and coordination.",
          es: "Los bebés delfín aprenden a nadar manteniéndose cerca de sus madres, cabalgando en su estela y gradualmente construyendo fuerza y coordinación.",
          de: "Delfinbabys lernen schwimmen, indem sie nah bei ihren Müttern bleiben, in ihrem Sog reiten und allmählich Stärke und Koordination aufbauen.",
          nl: "Baby dolfijnen leren zwemmen door dicht bij hun moeders te blijven, in hun kielzog te rijden en geleidelijk kracht en coördinatie op te bouwen."
        }
      },
      {
        question: {
          en: "What do we call baby foxes?",
          es: "¿Cómo llamamos a los bebés de zorro?",
          de: "Wie nennen wir Fuchsbabys?",
          nl: "Hoe noemen we baby vossen?"
        },
        options: [
          { en: "Kits", es: "Crías", de: "Welpen", nl: "Welpen" },
          { en: "Cubs", es: "Cachorros", de: "Junge", nl: "Welpen" },
          { en: "Pups", es: "Cachorros", de: "Welpen", nl: "Welpen" },
          { en: "Calves", es: "Terneros", de: "Kälber", nl: "Kalveren" }
        ],
        correct: 0,
        explanation: {
          en: "Baby foxes are called kits and they are born in underground dens where they stay safe while learning to hunt from their parents.",
          es: "Los bebés de zorro se llaman crías y nacen en madrigueras subterráneas donde se mantienen seguros mientras aprenden a cazar de sus padres.",
          de: "Fuchsbabys werden Welpen genannt und werden in unterirdischen Bauten geboren, wo sie sicher bleiben, während sie von ihren Eltern das Jagen lernen.",
          nl: "Baby vossen worden welpen genoemd en worden geboren in ondergrondse holen waar ze veilig blijven terwijl ze van hun ouders leren jagen."
        }
      },
      {
        question: {
          en: "Where do baby birds live before they can fly?",
          es: "¿Dónde viven los bebés pájaro antes de poder volar?",
          de: "Wo leben Vogelbabys, bevor sie fliegen können?",
          nl: "Waar leven baby vogels voordat ze kunnen vliegen?"
        },
        options: [
          { en: "In nests", es: "En nidos", de: "In Nestern", nl: "In nesten" },
          { en: "Underground", es: "Bajo tierra", de: "Unterirdisch", nl: "Ondergronds" },
          { en: "In water", es: "En el agua", de: "Im Wasser", nl: "In het water" },
          { en: "In caves only", es: "Solo en cuevas", de: "Nur in Höhlen", nl: "Alleen in grotten" }
        ],
        correct: 0,
        explanation: {
          en: "Baby birds live in nests built by their parents, which provide safety, warmth, and protection while they grow and develop their flying abilities.",
          es: "Los bebés pájaro viven en nidos construidos por sus padres, que proporcionan seguridad, calor y protección mientras crecen y desarrollan sus habilidades de vuelo.",
          de: "Vogelbabys leben in Nestern, die von ihren Eltern gebaut wurden und Sicherheit, Wärme und Schutz bieten, während sie wachsen und ihre Flugfähigkeiten entwickeln.",
          nl: "Baby vogels leven in nesten gebouwd door hun ouders, die veiligheid, warmte en bescherming bieden terwijl ze groeien en hun vliegvaardigheden ontwikkelen."
        }
      },
      {
        question: {
          en: "What do baby whales drink?",
          es: "¿Qué beben los bebés ballena?",
          de: "Was trinken Walbabys?",
          nl: "Wat drinken baby walvissen?"
        },
        options: [
          { en: "Their mother's milk", es: "La leche de su madre", de: "Die Milch ihrer Mutter", nl: "De melk van hun moeder" },
          { en: "Seawater", es: "Agua de mar", de: "Meerwasser", nl: "Zeewater" },
          { en: "Fresh water", es: "Agua dulce", de: "Süßwasser", nl: "Zoet water" },
          { en: "Nothing", es: "Nada", de: "Nichts", nl: "Niets" }
        ],
        correct: 0,
        explanation: {
          en: "Baby whales drink their mother's rich milk, which is very high in fat content to help them grow quickly and develop blubber for insulation.",
          es: "Los bebés ballena beben la leche rica de su madre, que es muy alta en contenido de grasa para ayudarlos a crecer rápidamente y desarrollar grasa para aislamiento.",
          de: "Walbabys trinken die fettreiche Milch ihrer Mutter, die sehr fetthaltig ist, um ihnen zu helfen, schnell zu wachsen und Speck zur Isolierung zu entwickeln.",
          nl: "Baby walvissen drinken de rijke melk van hun moeder, die zeer hoog is in vetgehalte om hen te helpen snel te groeien en spek te ontwikkelen voor isolatie."
        }
      },
      {
        question: {
          en: "How do mother cats teach their kittens to hunt?",
          es: "¿Cómo enseñan las gatas madres a sus gatitos a cazar?",
          de: "Wie bringen Katzenmütter ihren Kätzchen das Jagen bei?",
          nl: "Hoe leren moederkatten hun kittens jagen?"
        },
        options: [
          { en: "By showing them and playing", es: "Mostrándoles y jugando", de: "Indem sie es zeigen und spielen", nl: "Door het te laten zien en te spelen" },
          { en: "They don't teach them", es: "No les enseñan", de: "Sie bringen es ihnen nicht bei", nl: "Ze leren het niet" },
          { en: "By reading books", es: "Leyendo libros", de: "Durch Bücherlesen", nl: "Door boeken te lezen" },
          { en: "By watching TV", es: "Viendo televisión", de: "Durch Fernsehen", nl: "Door tv te kijken" }
        ],
        correct: 0,
        explanation: {
          en: "Mother cats teach their kittens to hunt by bringing them prey to practice with, demonstrating hunting techniques, and encouraging play that mimics hunting behavior.",
          es: "Las gatas madres enseñan a sus gatitos a cazar trayéndoles presas para practicar, demostrando técnicas de caza y alentando el juego que imita el comportamiento de caza.",
          de: "Katzmütter bringen ihren Kätzchen das Jagen bei, indem sie ihnen Beute zum Üben bringen, Jagdtechniken demonstrieren und Spiele fördern, die Jagdverhalten nachahmen.",
          nl: "Moederkatten leren hun kittens jagen door prooi voor hen te brengen om mee te oefenen, jachttechnieken te demonstreren en spel aan te moedigen dat jachtgedrag nabootst."
        }
      },
      {
        question: {
          en: "What do we call baby horses?",
          es: "¿Cómo llamamos a los bebés de caballo?",
          de: "Wie nennen wir Pferdebabys?",
          nl: "Hoe noemen we baby paarden?"
        },
        options: [
          { en: "Foals", es: "Potros", de: "Fohlen", nl: "Veulens" },
          { en: "Colts", es: "Potros", de: "Hengstfohlen", nl: "Hengstveulens" },
          { en: "Calves", es: "Terneros", de: "Kälber", nl: "Kalveren" },
          { en: "Kids", es: "Cabritos", de: "Kitze", nl: "Geitjes" }
        ],
        correct: 0,
        explanation: {
          en: "Baby horses are called foals and they can stand and walk within hours of being born, quickly learning to run with the herd.",
          es: "Los bebés de caballo se llaman potros y pueden ponerse de pie y caminar horas después de nacer, aprendiendo rápidamente a correr con la manada.",
          de: "Pferdebabys werden Fohlen genannt und können Stunden nach der Geburt stehen und laufen, lernen schnell mit der Herde zu laufen.",
          nl: "Baby paarden worden veulens genoemd en kunnen binnen uren na de geboorte staan en lopen, leren snel om met de kudde mee te rennen."
        }
      },
      {
        question: {
          en: "How do baby monkeys travel?",
          es: "¿Cómo viajan los bebés mono?",
          de: "Wie reisen Affenbabys?",
          nl: "Hoe reizen baby apen?"
        },
        options: [
          { en: "On their mother's back", es: "En la espalda de su madre", de: "Auf dem Rücken ihrer Mutter", nl: "Op de rug van hun moeder" },
          { en: "They walk alone", es: "Caminan solos", de: "Sie gehen allein", nl: "Ze lopen alleen" },
          { en: "In cars", es: "En autos", de: "In Autos", nl: "In auto's" },
          { en: "They fly", es: "Vuelan", de: "Sie fliegen", nl: "Ze vliegen" }
        ],
        correct: 0,
        explanation: {
          en: "Baby monkeys travel by clinging tightly to their mother's back or belly, holding on with strong grips as she swings through trees.",
          es: "Los bebés mono viajan aferrándose fuertemente a la espalda o vientre de su madre, sosteniendo con fuertes agarres mientras ella se balancea por los árboles.",
          de: "Affenbabys reisen, indem sie sich fest an den Rücken oder Bauch ihrer Mutter klammern und mit starkem Griff festhalten, während sie durch die Bäume schwingt.",
          nl: "Baby apen reizen door zich stevig vast te klampen aan de rug of buik van hun moeder, vasthoudend met sterke grepen terwijl zij door bomen zwaait."
        }
      },
      {
        question: {
          en: "What do we call baby swans?",
          es: "¿Cómo llamamos a los bebés de cisne?",
          de: "Wie nennen wir Schwanenbabys?",
          nl: "Hoe noemen we baby zwanen?"
        },
        options: [
          { en: "Cygnets", es: "Crías de cisne", de: "Schwanenjunge", nl: "Zwanenkuikens" },
          { en: "Ducklings", es: "Patitos", de: "Entenküken", nl: "Eendjes" },
          { en: "Chicks", es: "Pollitos", de: "Küken", nl: "Kuikens" },
          { en: "Goslings", es: "Crías de ganso", de: "Gänschen", nl: "Gansjes" }
        ],
        correct: 0,
        explanation: {
          en: "Baby swans are called cygnets and they have gray feathers when young, gradually developing the beautiful white plumage of adult swans.",
          es: "Los bebés de cisne se llaman crías de cisne y tienen plumas grises cuando son jóvenes, desarrollando gradualmente el hermoso plumaje blanco de los cisnes adultos.",
          de: "Schwanenbabys werden Schwanenjunge genannt und haben graue Federn, wenn sie jung sind, entwickeln allmählich das schöne weiße Gefieder erwachsener Schwäne.",
          nl: "Baby zwanen worden zwanenkuikens genoemd en hebben grijze veren als ze jong zijn, ontwikkelen geleidelijk de prachtige witte veren van volwassen zwanen."
        }
      },
      {
        question: {
          en: "How do baby spiders learn to make webs?",
          es: "¿Cómo aprenden los bebés araña a hacer telarañas?",
          de: "Wie lernen Spinnenbabys Netze zu machen?",
          nl: "Hoe leren baby spinnen webben maken?"
        },
        options: [
          { en: "They know how naturally", es: "Lo saben naturalmente", de: "Sie wissen es natürlich", nl: "Ze weten het van nature" },
          { en: "Their parents teach them", es: "Sus padres les enseñan", de: "Ihre Eltern bringen es ihnen bei", nl: "Hun ouders leren het hen" },
          { en: "They go to school", es: "Van a la escuela", de: "Sie gehen zur Schule", nl: "Ze gaan naar school" },
          { en: "They watch videos", es: "Ven videos", de: "Sie schauen Videos", nl: "Ze kijken video's" }
        ],
        correct: 0,
        explanation: {
          en: "Baby spiders learn to make webs through instinct - they are born knowing how to spin silk and create webs without any teaching from their parents.",
          es: "Los bebés araña aprenden a hacer telarañas por instinto - nacen sabiendo cómo hilar seda y crear telarañas sin ninguna enseñanza de sus padres.",
          de: "Spinnenbabys lernen durch Instinkt Netze zu machen - sie werden mit dem Wissen geboren, wie man Seide spinnt und Netze erstellt, ohne Unterricht von ihren Eltern.",
          nl: "Baby spinnen leren webben maken door instinct - ze worden geboren met de kennis hoe zijde te spinnen en webben te maken zonder enige instructie van hun ouders."
        }
      },
      {
        question: {
          en: "What do baby flamingos look like when they're born?",
          es: "¿Cómo se ven los bebés flamenco cuando nacen?",
          de: "Wie sehen Flamingobabys aus, wenn sie geboren werden?",
          nl: "Hoe zien baby flamingo's eruit als ze geboren worden?"
        },
        options: [
          { en: "Gray or white, not pink", es: "Gris o blanco, no rosado", de: "Grau oder weiß, nicht rosa", nl: "Grijs of wit, niet roze" },
          { en: "Bright pink", es: "Rosa brillante", de: "Leuchtend rosa", nl: "Helder roze" },
          { en: "Blue", es: "Azul", de: "Blau", nl: "Blauw" },
          { en: "Green", es: "Verde", de: "Grün", nl: "Groen" }
        ],
        correct: 0,
        explanation: {
          en: "Baby flamingos are born with gray or white fluffy feathers and only develop their characteristic pink color as they eat shrimp and algae.",
          es: "Los bebés flamenco nacen con plumas esponjosas grises o blancas y solo desarrollan su color rosado característico cuando comen camarones y algas.",
          de: "Flamingobabys werden mit grauen oder weißen flauschigen Federn geboren und entwickeln ihre charakteristische rosa Farbe erst, wenn sie Garnelen und Algen fressen.",
          nl: "Baby flamingo's worden geboren met grijze of witte donzige veren en ontwikkelen alleen hun karakteristieke roze kleur als ze garnalen en algen eten."
        }
      },
      {
        question: {
          en: "What do we call baby wolves?",
          es: "¿Cómo llamamos a los bebés de lobo?",
          de: "Wie nennen wir Wolfsbabys?",
          nl: "Hoe noemen we baby wolven?"
        },
        options: [
          { en: "Pups", es: "Cachorros", de: "Welpen", nl: "Welpen" },
          { en: "Cubs", es: "Cachorros", de: "Junge", nl: "Welpen" },
          { en: "Kits", es: "Crías", de: "Welpen", nl: "Welpen" },
          { en: "Calves", es: "Terneros", de: "Kälber", nl: "Kalveren" }
        ],
        correct: 0,
        explanation: {
          en: "Baby wolves are called pups and they are born in dens where the pack protects and cares for them until they're old enough to hunt.",
          es: "Los bebés lobo se llaman cachorros y nacen en madrigueras donde la manada los protege y cuida hasta que son lo suficientemente grandes para cazar.",
          de: "Wolfsbabys werden Welpen genannt und werden in Bauten geboren, wo das Rudel sie schützt und pflegt, bis sie alt genug zum Jagen sind.",
          nl: "Baby wolven worden welpen genoemd en worden geboren in holen waar het roedel hen beschermt en verzorgt tot ze oud genoeg zijn om te jagen."
        }
      },
      {
        question: {
          en: "How do penguin parents take care of their eggs?",
          es: "¿Cómo cuidan los padres pingüino sus huevos?",
          de: "Wie kümmern sich Pinguineltern um ihre Eier?",
          nl: "Hoe zorgen pinguïnouders voor hun eieren?"
        },
        options: [
          { en: "They keep them warm on their feet", es: "Los mantienen calientes en sus pies", de: "Sie halten sie auf ihren Füßen warm", nl: "Ze houden ze warm op hun voeten" },
          { en: "They bury them in sand", es: "Los entierran en arena", de: "Sie vergraben sie im Sand", nl: "Ze begraven ze in zand" },
          { en: "They leave them alone", es: "Los dejan solos", de: "Sie lassen sie allein", nl: "Ze laten ze alleen" },
          { en: "They put them in nests", es: "Los ponen en nidos", de: "Sie legen sie in Nester", nl: "Ze leggen ze in nesten" }
        ],
        correct: 0,
        explanation: {
          en: "Penguin parents take turns balancing their eggs on their feet and covering them with a warm brood pouch to keep them from freezing on the ice.",
          es: "Los padres pingüino se turnan balanceando sus huevos en sus pies y cubriéndolos con una bolsa de cría cálida para evitar que se congelen en el hielo.",
          de: "Pinguineltern wechseln sich ab, ihre Eier auf ihren Füßen zu balancieren und sie mit einer warmen Bruttasche zu bedecken, um zu verhindern, dass sie auf dem Eis einfrieren.",
          nl: "Pinguïnouders wisselen elkaar af bij het balanceren van hun eieren op hun voeten en bedekken ze met een warme broedzak om te voorkomen dat ze bevriezen op het ijs."
        }
      },
      {
        question: {
          en: "What do baby bees become when they grow up?",
          es: "¿En qué se convierten las abejas bebé cuando crecen?",
          de: "Was werden Bienenbabys, wenn sie erwachsen werden?",
          nl: "Wat worden baby bijen als ze opgroeien?"
        },
        options: [
          { en: "Worker bees, drones, or queens", es: "Abejas obreras, zánganos o reinas", de: "Arbeitsbienen, Drohnen oder Königinnen", nl: "Werkster bijen, darren of koninginnen" },
          { en: "Only worker bees", es: "Solo abejas obreras", de: "Nur Arbeitsbienen", nl: "Alleen werkster bijen" },
          { en: "Butterflies", es: "Mariposas", de: "Schmetterlinge", nl: "Vlinders" },
          { en: "Birds", es: "Pájaros", de: "Vögel", nl: "Vogels" }
        ],
        correct: 0,
        explanation: {
          en: "Baby bees develop into different roles based on their genetics and feeding: worker bees (females), drones (males), or a queen bee if fed royal jelly.",
          es: "Las abejas bebé se desarrollan en diferentes roles basados en su genética y alimentación: abejas obreras (hembras), zánganos (machos) o una abeja reina si se alimentan con jalea real.",
          de: "Bienenbabys entwickeln sich basierend auf ihrer Genetik und Fütterung zu verschiedenen Rollen: Arbeitsbienen (Weibchen), Drohnen (Männchen) oder eine Bienenkönigin, wenn sie mit Gelée royale gefüttert werden.",
          nl: "Baby bijen ontwikkelen zich tot verschillende rollen gebaseerd op hun genetica en voeding: werkster bijen (vrouwtjes), darren (mannetjes) of een bijenkoningin als ze gevoerd worden met koninginnengelei."
        }
      },
      {
        question: {
          en: "How do baby fish learn to swim?",
          es: "¿Cómo aprenden a nadar los peces bebé?",
          de: "Wie lernen Fischbabys zu schwimmen?",
          nl: "Hoe leren baby vissen zwemmen?"
        },
        options: [
          { en: "They can swim right away", es: "Pueden nadar inmediatamente", de: "Sie können sofort schwimmen", nl: "Ze kunnen meteen zwemmen" },
          { en: "They need swimming lessons", es: "Necesitan clases de natación", de: "Sie brauchen Schwimmstunden", nl: "Ze hebben zwemlessen nodig" },
          { en: "They learn after one year", es: "Aprenden después de un año", de: "Sie lernen nach einem Jahr", nl: "Ze leren na een jaar" },
          { en: "Their parents teach them", es: "Sus padres les enseñan", de: "Ihre Eltern bringen es ihnen bei", nl: "Hun ouders leren het hen" }
        ],
        correct: 0,
        explanation: {
          en: "Baby fish are born with the instinctive ability to swim immediately - they don't need to learn, their bodies are naturally designed for swimming.",
          es: "Los peces bebé nacen con la habilidad instintiva de nadar inmediatamente - no necesitan aprender, sus cuerpos están naturalmente diseñados para nadar.",
          de: "Fischbabys werden mit der instinktiven Fähigkeit geboren, sofort zu schwimmen - sie müssen nicht lernen, ihre Körper sind natürlich zum Schwimmen entwickelt.",
          nl: "Baby vissen worden geboren met het instinctieve vermogen om onmiddellijk te zwemmen - ze hoeven niet te leren, hun lichamen zijn van nature ontworpen om te zwemmen."
        }
      },
      {
        question: {
          en: "What do we call baby geese?",
          es: "¿Cómo llamamos a los bebés de ganso?",
          de: "Wie nennen wir Gänsebabys?",
          nl: "Hoe noemen we baby ganzen?"
        },
        options: [
          { en: "Goslings", es: "Crías de ganso", de: "Gänschen", nl: "Gansjes" },
          { en: "Ducklings", es: "Patitos", de: "Entenküken", nl: "Eendjes" },
          { en: "Chicks", es: "Pollitos", de: "Küken", nl: "Kuikens" },
          { en: "Cygnets", es: "Crías de cisne", de: "Schwanenjunge", nl: "Zwanenkuikens" }
        ],
        correct: 0,
        explanation: {
          en: "Baby geese are called goslings and they follow their parents everywhere, learning important life skills like finding food and recognizing danger.",
          es: "Los bebés de ganso se llaman crías de ganso y siguen a sus padres a todas partes, aprendiendo habilidades importantes de vida como encontrar comida y reconocer el peligro.",
          de: "Gänsebabys werden Gänschen genannt und folgen ihren Eltern überall hin, lernen wichtige Lebensfähigkeiten wie Nahrung finden und Gefahr erkennen.",
          nl: "Baby ganzen worden gansjes genoemd en volgen hun ouders overal, leren belangrijke levensvaardigheden zoals voedsel vinden en gevaar herkennen."
        }
      },
      {
        question: {
          en: "How do baby squirrels learn to jump between trees?",
          es: "¿Cómo aprenden los bebés ardilla a saltar entre árboles?",
          de: "Wie lernen Eichhörnchenbabys zwischen Bäumen zu springen?",
          nl: "Hoe leren baby eekhoorns springen tussen bomen?"
        },
        options: [
          { en: "They practice with their mothers", es: "Practican con sus madres", de: "Sie üben mit ihren Müttern", nl: "Ze oefenen met hun moeders" },
          { en: "They learn alone", es: "Aprenden solos", de: "Sie lernen allein", nl: "Ze leren alleen" },
          { en: "They don't need to learn", es: "No necesitan aprender", de: "Sie müssen nicht lernen", nl: "Ze hoeven niet te leren" },
          { en: "They go to school", es: "Van a la escuela", de: "Sie gehen zur Schule", nl: "Ze gaan naar school" }
        ],
        correct: 0,
        explanation: {
          en: "Baby squirrels learn to jump between trees by practicing with their mothers, starting with small jumps and gradually building confidence and skill.",
          es: "Los bebés ardilla aprenden a saltar entre árboles practicando con sus madres, comenzando con pequeños saltos y gradualmente construyendo confianza y habilidad.",
          de: "Eichhörnchenbabys lernen zwischen Bäumen zu springen, indem sie mit ihren Müttern üben, mit kleinen Sprüngen beginnen und allmählich Vertrauen und Geschicklichkeit aufbauen.",
          nl: "Baby eekhoorns leren springen tussen bomen door te oefenen met hun moeders, beginnend met kleine sprongen en geleidelijk vertrouwen en vaardigheid opbouwend."
        }
      },
      {
        question: {
          en: "What do baby crocodiles do when they hatch?",
          es: "¿Qué hacen los bebés cocodrilo cuando salen del cascarón?",
          de: "Was machen Krokodilbabys, wenn sie schlüpfen?",
          nl: "Wat doen baby krokodillen als ze uitkomen?"
        },
        options: [
          { en: "Call for their mother", es: "Llaman a su madre", de: "Rufen nach ihrer Mutter", nl: "Roepen hun moeder" },
          { en: "Start hunting immediately", es: "Empiezan a cazar inmediatamente", de: "Beginnen sofort zu jagen", nl: "Beginnen meteen te jagen" },
          { en: "Sleep for days", es: "Duermen por días", de: "Schlafen tagelang", nl: "Slapen dagenlang" },
          { en: "Build their own nest", es: "Construyen su propio nido", de: "Bauen ihr eigenes Nest", nl: "Bouwen hun eigen nest" }
        ],
        correct: 0,
        explanation: {
          en: "Baby crocodiles make chirping sounds to call their mother when they hatch, and she carefully carries them to water in her mouth for protection.",
          es: "Los bebés cocodrilo hacen sonidos de gorjeo para llamar a su madre cuando salen del cascarón, y ella los lleva cuidadosamente al agua en su boca para protección.",
          de: "Krokodilbabys machen zwitschernde Geräusche, um ihre Mutter zu rufen, wenn sie schlüpfen, und sie trägt sie vorsichtig in ihrem Maul zum Wasser zum Schutz.",
          nl: "Baby krokodillen maken tjilpende geluiden om hun moeder te roepen wanneer ze uitkomen, en zij draagt hen voorzichtig naar het water in haar bek voor bescherming."
        }
      },
      {
        question: {
          en: "How do mother birds feed their babies?",
          es: "¿Cómo alimentan las aves madres a sus bebés?",
          de: "Wie füttern Vogelmütter ihre Babys?",
          nl: "Hoe voeren moedervogels hun baby's?"
        },
        options: [
          { en: "They bring food to the nest", es: "Llevan comida al nido", de: "Sie bringen Futter zum Nest", nl: "Ze brengen voedsel naar het nest" },
          { en: "Babies find their own food", es: "Los bebés encuentran su propia comida", de: "Babys finden ihr eigenes Futter", nl: "Baby's vinden hun eigen voedsel" },
          { en: "They order food delivery", es: "Piden comida a domicilio", de: "Sie bestellen Essenslieferung", nl: "Ze bestellen eten bezorgd" },
          { en: "They don't feed them", es: "No los alimentan", de: "Sie füttern sie nicht", nl: "Ze voeren ze niet" }
        ],
        correct: 0,
        explanation: {
          en: "Mother birds feed their babies by bringing insects, worms, and other food back to the nest and placing it directly into their open beaks.",
          es: "Las aves madres alimentan a sus bebés trayendo insectos, gusanos y otra comida de vuelta al nido y colocándola directamente en sus picos abiertos.",
          de: "Vogmmütter füttern ihre Babys, indem sie Insekten, Würmer und andere Nahrung zum Nest zurückbringen und sie direkt in ihre offenen Schnäbel legen.",
          nl: "Moedervogels voeren hun baby's door insecten, wormen en ander voedsel terug naar het nest te brengen en het direct in hun open bekken te plaatsen."
        }
      },
      {
        question: {
          en: "What do we call a group of baby animals born together?",
          es: "¿Cómo llamamos a un grupo de animales bebé nacidos juntos?",
          de: "Wie nennen wir eine Gruppe von Tierbabys, die zusammen geboren werden?",
          nl: "Hoe noemen we een groep baby dieren die samen geboren worden?"
        },
        options: [
          { en: "A litter", es: "Una camada", de: "Ein Wurf", nl: "Een nest" },
          { en: "A flock", es: "Una bandada", de: "Eine Herde", nl: "Een kudde" },
          { en: "A pack", es: "Una manada", de: "Ein Rudel", nl: "Een roedel" },
          { en: "A school", es: "Un cardumen", de: "Ein Schwarm", nl: "Een school" }
        ],
        correct: 0,
        explanation: {
          en: "A group of baby animals born together to the same mother is called a litter, like a litter of puppies or kittens.",
          es: "Un grupo de animales bebé nacidos juntos de la misma madre se llama una camada, como una camada de cachorros o gatitos.",
          de: "Eine Gruppe von Tierbabys, die zusammen von derselben Mutter geboren werden, nennt man einen Wurf, wie einen Wurf von Welpen oder Kätzchen.",
          nl: "Een groep baby dieren die samen geboren worden van dezelfde moeder wordt een nest genoemd, zoals een nest puppy's of kittens."
        }
      },
      {
        question: {
          en: "How long do baby pandas stay with their mothers?",
          es: "¿Cuánto tiempo permanecen los bebés panda con sus madres?",
          de: "Wie lange bleiben Pandababys bei ihren Müttern?",
          nl: "Hoe lang blijven baby panda's bij hun moeders?"
        },
        options: [
          { en: "About 18 months", es: "Cerca de 18 meses", de: "Etwa 18 Monate", nl: "Ongeveer 18 maanden" },
          { en: "One week", es: "Una semana", de: "Eine Woche", nl: "Eén week" },
          { en: "One month", es: "Un mes", de: "Einen Monat", nl: "Eén maand" },
          { en: "10 years", es: "10 años", de: "10 Jahre", nl: "10 jaar" }
        ],
        correct: 0,
        explanation: {
          en: "Baby pandas stay with their mothers for about 18 months, learning essential skills like how to find and eat bamboo and climb trees.",
          es: "Los bebés panda se quedan con sus madres cerca de 18 meses, aprendiendo habilidades esenciales como cómo encontrar y comer bambú y trepar árboles.",
          de: "Pandababys bleiben etwa 18 Monate bei ihren Müttern und lernen wesentliche Fähigkeiten wie das Finden und Fressen von Bambus und das Klettern auf Bäume.",
          nl: "Baby panda's blijven ongeveer 18 maanden bij hun moeders, leren essentiële vaardigheden zoals hoe bamboe te vinden en eten en in bomen te klimmen."
        }
      },
      {
        question: {
          en: "What do baby koalas eat?",
          es: "¿Qué comen los bebés koala?",
          de: "Was fressen Koalababys?",
          nl: "Wat eten baby koala's?"
        },
        options: [
          { en: "Their mother's milk first, then eucalyptus", es: "Primero la leche de su madre, luego eucalipto", de: "Zuerst die Milch ihrer Mutter, dann Eukalyptus", nl: "Eerst de melk van hun moeder, dan eucalyptus" },
          { en: "Only eucalyptus leaves", es: "Solo hojas de eucalipto", de: "Nur Eukalyptusblätter", nl: "Alleen eucalyptusbladeren" },
          { en: "Fish", es: "Pescado", de: "Fisch", nl: "Vis" },
          { en: "Insects", es: "Insectos", de: "Insekten", nl: "Insecten" }
        ],
        correct: 0,
        explanation: {
          en: "Baby koalas first drink their mother's milk, then eat a special soft food called 'pap' before learning to digest eucalyptus leaves.",
          es: "Los bebés koala primero beben la leche de su madre, luego comen una comida especial suave llamada 'pap' antes de aprender a digerir hojas de eucalipto.",
          de: "Koalababys trinken zuerst die Milch ihrer Mutter, dann fressen sie eine spezielle weiche Nahrung namens 'Pap', bevor sie lernen, Eukalyptusblätter zu verdauen.",
          nl: "Baby koala's drinken eerst de melk van hun moeder, eten dan een speciaal zacht voedsel genaamd 'pap' voordat ze leren eucalyptusbladeren te verteren."
        }
      },
      {
        question: {
          en: "What do we call baby bats?",
          es: "¿Cómo llamamos a los bebés de murciélago?",
          de: "Wie nennen wir Fledermausbabys?",
          nl: "Hoe noemen we baby vleermuizen?"
        },
        options: [
          { en: "Pups", es: "Cachorros", de: "Welpen", nl: "Welpen" },
          { en: "Cubs", es: "Cachorros", de: "Junge", nl: "Welpen" },
          { en: "Kits", es: "Crías", de: "Welpen", nl: "Welpen" },
          { en: "Chicks", es: "Pollitos", de: "Küken", nl: "Kuikens" }
        ],
        correct: 0,
        explanation: {
          en: "Baby bats are called pups and they cling to their mothers while learning to fly, often staying close to the roost for protection.",
          es: "Los bebés murciélago se llaman cachorros y se aferran a sus madres mientras aprenden a volar, a menudo manteniéndose cerca del refugio para protección.",
          de: "Fledermausbabys werden Welpen genannt und klammern sich an ihre Mütter, während sie fliegen lernen, bleiben oft in der Nähe des Schlafplatzes zum Schutz.",
          nl: "Baby vleermuizen worden welpen genoemd en klampen zich vast aan hun moeders terwijl ze leren vliegen, blijven vaak dicht bij de slaapplaats voor bescherming."
        }
      },
      {
        question: {
          en: "How do baby giraffes learn to walk?",
          es: "¿Cómo aprenden a caminar los bebés jirafa?",
          de: "Wie lernen Giraffenbabys zu gehen?",
          nl: "Hoe leren baby giraffen lopen?"
        },
        options: [
          { en: "They can walk within hours of being born", es: "Pueden caminar horas después de nacer", de: "Sie können Stunden nach der Geburt laufen", nl: "Ze kunnen binnen uren na geboorte lopen" },
          { en: "They need months to learn", es: "Necesitan meses para aprender", de: "Sie brauchen Monate zum Lernen", nl: "Ze hebben maanden nodig om te leren" },
          { en: "They never learn to walk", es: "Nunca aprenden a caminar", de: "Sie lernen nie zu gehen", nl: "Ze leren nooit lopen" },
          { en: "They crawl their whole lives", es: "Se arrastran toda su vida", de: "Sie kriechen ihr ganzes Leben", nl: "Ze kruipen hun hele leven" }
        ],
        correct: 0,
        explanation: {
          en: "Baby giraffes can walk within hours of being born due to their natural instincts and strong legs - they must quickly keep up with the herd for safety.",
          es: "Los bebés jirafa pueden caminar horas después de nacer debido a sus instintos naturales y piernas fuertes - deben seguir rápidamente a la manada para seguridad.",
          de: "Giraffenbabys können Stunden nach der Geburt laufen aufgrund ihrer natürlichen Instinkte und starken Beine - sie müssen schnell mit der Herde mithalten für die Sicherheit.",
          nl: "Baby giraffen kunnen binnen uren na de geboorte lopen vanwege hun natuurlijke instincten en sterke benen - ze moeten snel bijblijven met de kudde voor veiligheid."
        }
      },
      {
        question: {
          en: "What helps keep baby birds warm in the nest?",
          es: "¿Qué ayuda a mantener calientes a los bebés pájaro en el nido?",
          de: "Was hält Vogelbabys im Nest warm?",
          nl: "Wat houdt baby vogels warm in het nest?"
        },
        options: [
          { en: "Their parents sit on them", es: "Sus padres se sientan sobre ellos", de: "Ihre Eltern sitzen auf ihnen", nl: "Hun ouders zitten op ze" },
          { en: "They wear tiny sweaters", es: "Usan pequeños suéteres", de: "Sie tragen winzige Pullover", nl: "Ze dragen kleine truien" },
          { en: "They have heaters", es: "Tienen calentadores", de: "Sie haben Heizungen", nl: "Ze hebben verwarmers" },
          { en: "They exercise a lot", es: "Hacen mucho ejercicio", de: "Sie trainieren viel", nl: "Ze doen veel oefeningen" }
        ],
        correct: 0,
        explanation: {
          en: "Parent birds sit on their babies (called brooding) to share their body heat and keep the chicks warm until they develop their own feathers.",
          es: "Los pájaros padres se sientan sobre sus bebés (llamado empollar) para compartir su calor corporal y mantener a los polluelos calientes hasta que desarrollen sus propias plumas.",
          de: "Vogeleltern sitzen auf ihren Babys (Brüten genannt), um ihre Körperwärme zu teilen und die Küken warm zu halten, bis sie ihre eigenen Federn entwickeln.",
          nl: "Vogel ouders zitten op hun baby's (broeden genoemd) om hun lichaamswarmte te delen en de kuikens warm te houden tot ze hun eigen veren ontwikkelen."
        }
      },
      {
        question: {
          en: "What do baby otters learn from their mothers?",
          es: "¿Qué aprenden los bebés nutria de sus madres?",
          de: "Was lernen Otterbabys von ihren Müttern?",
          nl: "Wat leren baby otters van hun moeders?"
        },
        options: [
          { en: "How to swim and hunt", es: "Cómo nadar y cazar", de: "Wie man schwimmt und jagt", nl: "Hoe ze moeten zwemmen en jagen" },
          { en: "How to fly", es: "Cómo volar", de: "Wie man fliegt", nl: "Hoe ze moeten vliegen" },
          { en: "How to climb trees", es: "Cómo trepar árboles", de: "Wie man auf Bäume klettert", nl: "Hoe ze in bomen moeten klimmen" },
          { en: "How to read", es: "Cómo leer", de: "Wie man liest", nl: "Hoe ze moeten lezen" }
        ],
        correct: 0,
        explanation: {
          en: "Baby otters learn essential survival skills from their mothers including how to swim, dive, hunt for food, and use tools to crack open shellfish.",
          es: "Los bebés nutria aprenden habilidades esenciales de supervivencia de sus madres incluyendo cómo nadar, bucear, cazar comida y usar herramientas para abrir mariscos.",
          de: "Otterbabys lernen wesentliche Überlebensfähigkeiten von ihren Müttern, einschließlich Schwimmen, Tauchen, Nahrungssuche und Werkzeuggebrauch zum Öffnen von Schalentieren.",
          nl: "Baby otters leren essentiële overlevingsvaardigheden van hun moeders inclusief hoe te zwemmen, duiken, jagen op voedsel en gereedschap gebruiken om schaaldieren open te breken."
        }
      },
      {
        question: {
          en: "How many babies do mother opossums usually carry?",
          es: "¿Cuántos bebés suelen cargar las madres oposums?",
          de: "Wie viele Babys tragen Opossummütter normalerweise?",
          nl: "Hoeveel baby's dragen moeder opossums gewoonlijk?"
        },
        options: [
          { en: "Many babies at once", es: "Muchos bebés a la vez", de: "Viele Babys auf einmal", nl: "Veel baby's tegelijk" },
          { en: "Just one", es: "Solo uno", de: "Nur eines", nl: "Maar één" },
          { en: "Always two", es: "Siempre dos", de: "Immer zwei", nl: "Altijd twee" },
          { en: "Never any", es: "Nunca ninguno", de: "Nie welche", nl: "Nooit een" }
        ],
        correct: 0,
        explanation: {
          en: "Mother opossums can carry many babies at once (up to 20) in their pouch, though not all survive to adulthood due to limited space and resources.",
          es: "Las madres oposums pueden cargar muchos bebés a la vez (hasta 20) en su bolsa, aunque no todos sobreviven hasta la edad adulta debido al espacio y recursos limitados.",
          de: "Opossummütter können viele Babys auf einmal (bis zu 20) in ihrem Beutel tragen, obwohl nicht alle bis zum Erwachsenenalter überleben aufgrund von begrenztem Platz und Ressourcen.",
          nl: "Moeder opossums kunnen veel baby's tegelijk dragen (tot 20) in hun buidel, hoewel niet allemaal overleven tot volwassenheid vanwege beperkte ruimte en middelen."
        }
      },
      {
        question: {
          en: "What do baby dolphins learn to do by copying their mothers?",
          es: "¿Qué aprenden a hacer los bebés delfín copiando a sus madres?",
          de: "Was lernen Delfinbabys, indem sie ihre Mütter nachahmen?",
          nl: "Wat leren baby dolfijnen door hun moeders na te doen?"
        },
        options: [
          { en: "Hunt for fish and play games", es: "Cazar peces y jugar juegos", de: "Fische jagen und Spiele spielen", nl: "Jagen op vis en spelletjes spelen" },
          { en: "Build houses", es: "Construir casas", de: "Häuser bauen", nl: "Huizen bouwen" },
          { en: "Plant seeds", es: "Plantar semillas", de: "Samen pflanzen", nl: "Zaden planten" },
          { en: "Drive cars", es: "Conducir autos", de: "Auto fahren", nl: "Auto's besturen" }
        ],
        correct: 0,
        explanation: {
          en: "Baby dolphins learn important life skills by watching and copying their mothers, including how to hunt fish, communicate with clicks and whistles, and play social games with other dolphins!",
          es: "¡Los bebés delfín aprenden habilidades importantes de la vida observando y copiando a sus madres, incluyendo cómo cazar peces, comunicarse con clics y silbidos, y jugar juegos sociales con otros delfines!",
          de: "Delfinbabys lernen wichtige Lebensfähigkeiten, indem sie ihre Mütter beobachten und nachahmen, einschließlich wie man Fische jagt, mit Klicks und Pfiffen kommuniziert und soziale Spiele mit anderen Delfinen spielt!",
          nl: "Baby dolfijnen leren belangrijke levensvaardigheden door hun moeders te observeren en na te doen, inclusief hoe ze vis moeten jagen, communiceren met klikken en fluiten, en sociale spelletjes spelen met andere dolfijnen!"
        }
      },
      {
        question: {
          en: "What do baby elephants use their trunks to learn?",
          es: "¿Qué usan los bebés elefante con sus trompas para aprender?",
          de: "Was benutzen Elefantenbabys mit ihren Rüsseln zum Lernen?",
          nl: "Wat gebruiken baby olifanten met hun slurven om te leren?"
        },
        options: [
          { en: "How to pick up food and water", es: "Cómo recoger comida y agua", de: "Wie man Nahrung und Wasser aufnimmt", nl: "Hoe ze voedsel en water moeten oppakken" },
          { en: "How to write letters", es: "Cómo escribir letras", de: "Wie man Briefe schreibt", nl: "Hoe ze letters moeten schrijven" },
          { en: "How to play music", es: "Cómo tocar música", de: "Wie man Musik spielt", nl: "Hoe ze muziek moeten spelen" },
          { en: "How to paint pictures", es: "Cómo pintar cuadros", de: "Wie man Bilder malt", nl: "Hoe ze plaatjes moeten schilderen" }
        ],
        correct: 0,
        explanation: {
          en: "Baby elephants spend lots of time practicing with their trunks to learn how to pick up food, suck up water to drink, and grab objects. Their trunk has over 40,000 muscles and is like a hand, nose, and straw all in one!",
          es: "¡Los bebés elefante pasan mucho tiempo practicando con sus trompas para aprender cómo recoger comida, succionar agua para beber, y agarrar objetos. Su trompa tiene más de 40,000 músculos y es como una mano, nariz y popote todo en uno!",
          de: "Elefantenbabys verbringen viel Zeit damit, mit ihren Rüsseln zu üben, um zu lernen, wie man Nahrung aufnimmt, Wasser zum Trinken aufsaugt und Gegenstände greift. Ihr Rüssel hat über 40.000 Muskeln und ist wie Hand, Nase und Strohhalm in einem!",
          nl: "Baby olifanten besteden veel tijd aan oefenen met hun slurven om te leren hoe ze voedsel moeten oppakken, water moeten opzuigen om te drinken, en objecten moeten grijpen. Hun slurf heeft meer dan 40.000 spieren en is als een hand, neus en rietje in één!"
        }
      },
      {
        question: {
          en: "How do baby owls stay safe in their nest?",
          es: "¿Cómo se mantienen seguros los búhos bebé en su nido?",
          de: "Wie bleiben Eulenbabys in ihrem Nest sicher?",
          nl: "Hoe blijven baby uilen veilig in hun nest?"
        },
        options: [
          { en: "Parents take turns watching for danger", es: "Los padres se turnan vigilando el peligro", de: "Eltern wechseln sich beim Wachen vor Gefahren ab", nl: "Ouders wisselen af met uitkijken naar gevaar" },
          { en: "They hide under rocks", es: "Se esconden bajo rocas", de: "Sie verstecken sich unter Felsen", nl: "Ze verstoppen zich onder rotsen" },
          { en: "They swim underwater", es: "Nadan bajo el agua", de: "Sie schwimmen unter Wasser", nl: "Ze zwemmen onder water" },
          { en: "They run very fast", es: "Corren muy rápido", de: "Sie rennen sehr schnell", nl: "Ze rennen heel snel" }
        ],
        correct: 0,
        explanation: {
          en: "Baby owls (called owlets) stay safe because their parents take turns protecting the nest. One parent hunts for food while the other stays to watch for predators. The babies also have fluffy feathers that help them blend in with the nest!",
          es: "Los búhos bebé (llamados polluelos de búho) se mantienen seguros porque sus padres se turnan protegiendo el nido. Un padre caza comida mientras el otro se queda para vigilar depredadores. ¡Los bebés también tienen plumas esponjosas que les ayudan a mezclarse con el nido!",
          de: "Eulenbabys (genannt Eulenküken) bleiben sicher, weil ihre Eltern sich beim Schutz des Nests abwechseln. Ein Elternteil jagt nach Nahrung, während der andere bleibt, um nach Raubtieren Ausschau zu halten. Die Babys haben auch flauschige Federn, die ihnen helfen, mit dem Nest zu verschmelzen!",
          nl: "Baby uilen (owlets genoemd) blijven veilig omdat hun ouders om beurten het nest beschermen. De ene ouder jaagt op voedsel terwijl de andere blijft om uit te kijken naar roofdieren. De baby's hebben ook pluizige veren die hen helpen opgaan in het nest!"
        }
      }
    ]
  };

  if (typeof window.addLevel === 'function') {
    window.addLevel('warm-up/animals', level4);
  }
})();