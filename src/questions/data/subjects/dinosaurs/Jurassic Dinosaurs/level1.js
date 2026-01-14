// Jurassic Dinosaurs Quiz - Level 1: Very Basic Knowledge
(function() {
  const level1 = {
    name: {
      en: "Jurassic Dinosaurs Level 1",
      es: "Dinosaurios Jurásicos Nivel 1",
      de: "Jura Dinosaurier Stufe 1",
      nl: "Jura Dino's Level 1"
    },
    questions: [
      {
        question: {
          en: "What does 'Jurassic' mean?",
          es: "¿Qué significa 'Jurásico'?",
          de: "Was bedeutet 'Jura'?",
          nl: "Wat betekent 'Jura'?"
        },
        options: [
          { en: "Long ago", es: "Un tiempo muy lejano", de: "Eine Zeit vor langer Zeit", nl: "Een tijd lang geleden" },
          { en: "A type of food", es: "Un tipo de comida", de: "Eine Art von Essen", nl: "Een soort eten" },
          { en: "A color", es: "Un color", de: "Eine Farbe", nl: "Een kleur" },
          { en: "A place", es: "Un lugar", de: "Ein Ort", nl: "Een plaats" }
        ],
        correct: 0,
        explanation: {
          en: "The Jurassic was a time period about 200-145 million years ago when many famous dinosaurs lived.",
          es: "El Jurásico fue un período de tiempo hace unos 200-145 millones de años cuando vivieron muchos dinosaurios famosos.",
          de: "Der Jura war eine Zeitperiode vor etwa 200-145 Millionen Jahren, als viele berühmte Dinosaurier lebten.",
          nl: "Het Jura was een tijdperk ongeveer 200-145 miljoen jaar geleden toen veel beroemde dinosaurussen leefden."
        }
      },
      {
        question: {
          en: "Which dinosaur had very long neck?",
          es: "¿Qué dinosaurio tenía un cuello muy largo?",
          de: "Welcher Dinosaurier hatte einen sehr langen Hals?",
          nl: "Welke dinosaurus had een heel lange nek?"
        },
        options: [
          { en: "Diplodocus", es: "Diplodocus", de: "Diplodocus", nl: "Diplodocus" },
          { en: "T-Rex", es: "T-Rex", de: "T-Rex", nl: "T-Rex" },
          { en: "Triceratops", es: "Triceratops", de: "Triceratops", nl: "Triceratops" },
          { en: "Velociraptor", es: "Velociraptor", de: "Velociraptor", nl: "Velociraptor" }
        ],
        correct: 0,
        explanation: {
          en: "Diplodocus was a Jurassic dinosaur with a very long neck that helped it reach high leaves on trees.",
          es: "Diplodocus era un dinosaurio jurásico con un cuello muy largo que le ayudaba a alcanzar hojas altas en los árboles.",
          de: "Diplodocus war ein Jura-Dinosaurier mit einem sehr langen Hals, der ihm half, hohe Blätter an Bäumen zu erreichen.",
          nl: "Diplodocus was een Jura-dinosaurus met een heel lange nek die hem hielp hoge bladeren in bomen te bereiken."
        }
      },
      {
        question: {
          en: "What did plant-eating dinosaurs eat?",
          es: "¿Qué comían los dinosaurios comedores de plantas?",
          de: "Was fraßen pflanzenfressende Dinosaurier?",
          nl: "Wat aten plantetende dinosaurussen?"
        },
        options: [
          { en: "Leaves & plants", es: "Hojas y plantas", de: "Blätter und Pflanzen", nl: "Bladeren en planten" },
          { en: "Other dinos", es: "Otros dinosaurios", de: "Andere Dinosaurier", nl: "Andere dinosaurussen" },
          { en: "Fish", es: "Pescado", de: "Fisch", nl: "Vis" },
          { en: "Rocks", es: "Rocas", de: "Steine", nl: "Stenen" }
        ],
        correct: 0,
        explanation: {
          en: "Plant-eating dinosaurs, like many Jurassic dinosaurs, ate leaves, ferns, and other plants that grew during that time.",
          es: "Los dinosaurios comedores de plantas, como muchos dinosaurios jurásicos, comían hojas, helechos y otras plantas que crecían durante ese tiempo.",
          de: "Pflanzenfressende Dinosaurier, wie viele Jura-Dinosaurier, fraßen Blätter, Farne und andere Pflanzen, die zu dieser Zeit wuchsen.",
          nl: "Plantetende dinosaurussen, zoals veel Jura-dinosaurussen, aten bladeren, varens en andere planten die in die tijd groeiden."
        }
      },
      {
        question: {
          en: "Which dinosaur had spikes on its back?",
          es: "¿Qué dinosaurio tenía púas en su espalda?",
          de: "Welcher Dinosaurier hatte Stacheln auf seinem Rücken?",
          nl: "Welke dinosaurus had stekels op zijn rug?"
        },
        options: [
          { en: "Stegosaurus", es: "Stegosaurus", de: "Stegosaurus", nl: "Stegosaurus" },
          { en: "Diplodocus", es: "Diplodocus", de: "Diplodocus", nl: "Diplodocus" },
          { en: "Allosaurus", es: "Allosaurus", de: "Allosaurus", nl: "Allosaurus" },
          { en: "Compsognathus", es: "Compsognathus", de: "Compsognathus", nl: "Compsognathus" }
        ],
        correct: 0,
        explanation: {
          en: "Stegosaurus had big triangular plates and spikes on its back and tail to protect itself from predators.",
          es: "Stegosaurus tenía grandes placas triangulares y púas en su espalda y cola para protegerse de los depredadores.",
          de: "Stegosaurus hatte große dreieckige Platten und Stacheln auf seinem Rücken und Schwanz, um sich vor Raubtieren zu schützen.",
          nl: "Stegosaurus had grote driehoekige platen en stekels op zijn rug en staart om zichzelf te beschermen tegen roofdieren."
        }
      },
      {
        question: {
          en: "How big was Allosaurus?",
          es: "¿Qué tan grande era Allosaurus?",
          de: "Wie groß war Allosaurus?",
          nl: "Hoe groot was Allosaurus?"
        },
        options: [
          { en: "As big as a school bus", es: "Tan grande como un autobús escolar", de: "So groß wie ein Schulbus", nl: "Zo groot als een schoolbus" },
          { en: "As small as a cat", es: "Tan pequeño como un gato", de: "So klein wie eine Katze", nl: "Zo klein als een kat" },
          { en: "As big as a house", es: "Tan grande como una casa", de: "So groß wie ein Haus", nl: "Zo groot als een huis" },
          { en: "As small as a mouse", es: "Tan pequeño como un ratón", de: "So klein wie eine Maus", nl: "Zo klein als een muis" }
        ],
        correct: 0,
        explanation: {
          en: "Allosaurus was a big meat-eating dinosaur from the Jurassic period, about as long as a school bus!",
          es: "¡Allosaurus era un gran dinosaurio carnívoro del período Jurásico, aproximadamente tan largo como un autobús escolar!",
          de: "Allosaurus war ein großer fleischfressender Dinosaurier aus der Jurazeit, etwa so lang wie ein Schulbus!",
          nl: "Allosaurus was een grote vleesetende dinosaurus uit het Jura-tijdperk, ongeveer zo lang als een schoolbus!"
        }
      },
      {
        question: {
          en: "What did Allosaurus eat?",
          es: "¿Qué comía Allosaurus?",
          de: "Was fraß Allosaurus?",
          nl: "Wat at Allosaurus?"
        },
        options: [
          { en: "Other dinos", es: "Otros dinosaurios", de: "Andere Dinosaurier", nl: "Andere dinosaurussen" },
          { en: "Only plants", es: "Solo plantas", de: "Nur Pflanzen", nl: "Alleen planten" },
          { en: "Ice cream", es: "Helado", de: "Eis", nl: "IJs" },
          { en: "Candy", es: "Dulces", de: "Süßigkeiten", nl: "Snoep" }
        ],
        correct: 0,
        explanation: {
          en: "Allosaurus was a carnivore (meat-eater) that hunted and ate other dinosaurs during the Jurassic period.",
          es: "Allosaurus era un carnívoro (comedor de carne) que cazaba y comía otros dinosaurios durante el período Jurásico.",
          de: "Allosaurus war ein Fleischfresser, der andere Dinosaurier während der Jurazeit jagte und fraß.",
          nl: "Allosaurus was een carnivoor (vleeseeter) die andere dinosaurussen joeg en at tijdens het Jura-tijdperk."
        }
      },
      {
        question: {
          en: "Where did Jurassic dinosaurs live?",
          es: "¿Dónde vivían los dinosaurios jurásicos?",
          de: "Wo lebten die Jura-Dinosaurier?",
          nl: "Waar leefden Jura-dinosaurussen?"
        },
        options: [
          { en: "On Earth long ago", es: "En la Tierra hace mucho tiempo", de: "Auf der Erde vor langer Zeit", nl: "Op aarde lang geleden" },
          { en: "On the moon", es: "En la luna", de: "Auf dem Mond", nl: "Op de maan" },
          { en: "Under the ocean", es: "Bajo el océano", de: "Unter dem Ozean", nl: "Onder de oceaan" },
          { en: "In space", es: "En el espacio", de: "Im Weltraum", nl: "In de ruimte" }
        ],
        correct: 0,
        explanation: {
          en: "Jurassic dinosaurs lived on Earth about 200-145 million years ago when the world was much warmer.",
          es: "Los dinosaurios jurásicos vivieron en la Tierra hace unos 200-145 millones de años cuando el mundo era mucho más cálido.",
          de: "Jura-Dinosaurier lebten vor etwa 200-145 Millionen Jahren auf der Erde, als die Welt viel wärmer war.",
          nl: "Jura-dinosaurussen leefden op aarde ongeveer 200-145 miljoen jaar geleden toen de wereld veel warmer was."
        }
      },
      {
        question: {
          en: "What was special about Brachiosaurus?",
          es: "¿Qué tenía de especial Brachiosaurus?",
          de: "Was war besonders an Brachiosaurus?",
          nl: "Wat was bijzonder aan Brachiosaurus?"
        },
        options: [
          { en: "It was very tall", es: "Era muy alto", de: "Er war sehr groß", nl: "Hij was heel lang" },
          { en: "It could fly", es: "Podía volar", de: "Er konnte fliegen", nl: "Hij kon vliegen" },
          { en: "It was very small", es: "Era muy pequeño", de: "Er war sehr klein", nl: "Hij was heel klein" },
          { en: "It lived in water", es: "Vivía en el agua", de: "Er lebte im Wasser", nl: "Hij leefde in het water" }
        ],
        correct: 0,
        explanation: {
          en: "Brachiosaurus was one of the tallest dinosaurs, with very long front legs and neck that helped it eat from tall trees.",
          es: "Brachiosaurus era uno de los dinosaurios más altos, con patas delanteras y cuello muy largos que le ayudaban a comer de árboles altos.",
          de: "Brachiosaurus war einer der größten Dinosaurier, mit sehr langen Vorderbeinen und Hals, die ihm halfen, von hohen Bäumen zu fressen.",
          nl: "Brachiosaurus was een van de langste dinosaurussen, met heel lange voorpoten en nek die hem hielpen te eten van hoge bomen."
        }
      },
      {
        question: {
          en: "How many legs did most Jurassic dinosaurs have?",
          es: "¿Cuántas patas tenían la mayoría de los dinosaurios jurásicos?",
          de: "Wie viele Beine hatten die meisten Jura-Dinosaurier?",
          nl: "Hoeveel poten hadden de meeste Jura-dinosaurussen?"
        },
        options: [
          { en: "Four legs", es: "Cuatro patas", de: "Vier Beine", nl: "Vier poten" },
          { en: "Two legs", es: "Dos patas", de: "Zwei Beine", nl: "Twee poten" },
          { en: "Six legs", es: "Seis patas", de: "Sechs Beine", nl: "Zes poten" },
          { en: "Eight legs", es: "Ocho patas", de: "Acht Beine", nl: "Acht poten" }
        ],
        correct: 0,
        explanation: {
          en: "Most Jurassic dinosaurs walked on four legs, especially the big plant-eaters like Diplodocus and Stegosaurus.",
          es: "La mayoría de los dinosaurios jurásicos caminaban sobre cuatro patas, especialmente los grandes comedores de plantas como Diplodocus y Stegosaurus.",
          de: "Die meisten Jura-Dinosaurier liefen auf vier Beinen, besonders die großen Pflanzenfresser wie Diplodocus und Stegosaurus.",
          nl: "De meeste Jura-dinosaurussen liepen op vier poten, vooral de grote planteters zoals Diplodocus en Stegosaurus."
        }
      },
      {
        question: {
          en: "What did dinosaurs use their tails for?",
          es: "¿Para qué usaban los dinosaurios sus colas?",
          de: "Wofür benutzten Dinosaurier ihre Schwänze?",
          nl: "Waarvoor gebruikten dinosaurussen hun staarten?"
        },
        options: [
          { en: "To balance when walking", es: "Para equilibrarse al caminar", de: "Zum Balancieren beim Gehen", nl: "Om te balanceren tijdens het lopen" },
          { en: "To brush their teeth", es: "Para cepillarse los dientes", de: "Zum Zähneputzen", nl: "Om hun tanden te poetsen" },
          { en: "To write letters", es: "Para escribir cartas", de: "Zum Briefeschreiben", nl: "Om brieven te schrijven" },
          { en: "To play music", es: "Para tocar música", de: "Zum Musizieren", nl: "Om muziek te maken" }
        ],
        correct: 0,
        explanation: {
          en: "Dinosaurs used their long tails to help them balance when they walked, just like a tightrope walker uses a pole.",
          es: "Los dinosaurios usaban sus colas largas para ayudarles a equilibrarse cuando caminaban, igual que un equilibrista usa una vara.",
          de: "Dinosaurier benutzten ihre langen Schwänze, um sich beim Gehen zu balancieren, genau wie ein Seiltänzer eine Stange benutzt.",
          nl: "Dinosaurussen gebruikten hun lange staarten om te helpen balanceren tijdens het lopen, net zoals een koorddanser een stok gebruikt."
        }
      },
      {
        question: {
          en: "What is the smallest Jurassic dinosaur we know?",
          es: "¿Cuál es el dinosaurio jurásico más pequeño que conocemos?",
          de: "Was ist der kleinste Jura-Dinosaurier, den wir kennen?",
          nl: "Wat is de kleinste Jura-dinosaurus die we kennen?"
        },
        options: [
          { en: "Compsognathus", es: "Compsognathus", de: "Compsognathus", nl: "Compsognathus" },
          { en: "Diplodocus", es: "Diplodocus", de: "Diplodocus", nl: "Diplodocus" },
          { en: "Allosaurus", es: "Allosaurus", de: "Allosaurus", nl: "Allosaurus" },
          { en: "Brachiosaurus", es: "Brachiosaurus", de: "Brachiosaurus", nl: "Brachiosaurus" }
        ],
        correct: 0,
        explanation: {
          en: "Compsognathus was a tiny dinosaur about the size of a chicken that lived during the Jurassic period.",
          es: "Compsognathus era un dinosaurio pequeñito del tamaño de un pollo que vivió durante el período Jurásico.",
          de: "Compsognathus war ein winziger Dinosaurier etwa von der Größe eines Huhns, der während der Jurazeit lebte.",
          nl: "Compsognathus was een kleine dinosaurus ongeveer zo groot als een kip die tijdens het Jura-tijdperk leefde."
        }
      },
      {
        question: {
          en: "What color were Jurassic dinosaurs?",
          es: "¿De qué color eran los dinosaurios jurásicos?",
          de: "Welche Farbe hatten Jura-Dinosaurier?",
          nl: "Welke kleur hadden Jura-dinosaurussen?"
        },
        options: [
          { en: "We don't know for sure", es: "No lo sabemos con certeza", de: "Wir wissen es nicht genau", nl: "We weten het niet zeker" },
          { en: "All pink", es: "Todos rosados", de: "Alle rosa", nl: "Allemaal roze" },
          { en: "All blue", es: "Todos azules", de: "Alle blau", nl: "Allemaal blauw" },
          { en: "All yellow", es: "Todos amarillos", de: "Alle gelb", nl: "Allemaal geel" }
        ],
        correct: 0,
        explanation: {
          en: "Scientists are still learning about dinosaur colors. They think some were green, brown, or had patterns like modern animals.",
          es: "Los científicos aún están aprendiendo sobre los colores de los dinosaurios. Piensan que algunos eran verdes, marrones o tenían patrones como los animales modernos.",
          de: "Wissenschaftler lernen noch über Dinosaurier-Farben. Sie denken, einige waren grün, braun oder hatten Muster wie moderne Tiere.",
          nl: "Wetenschappers leren nog steeds over dinosauruskleuren. Ze denken dat sommige groen, bruin waren of patronen hadden zoals moderne dieren."
        }
      },
      {
        question: {
          en: "How do we know about Jurassic dinosaurs today?",
          es: "¿Cómo sabemos sobre los dinosaurios jurásicos hoy?",
          de: "Wie wissen wir heute über Jura-Dinosaurier?",
          nl: "Hoe weten we vandaag over Jura-dinosaurussen?"
        },
        options: [
          { en: "From their fossils", es: "Por sus fósiles", de: "Durch ihre Fossilien", nl: "Door hun fossielen" },
          { en: "They told us", es: "Nos lo dijeron", de: "Sie haben es uns gesagt", nl: "Ze hebben het ons verteld" },
          { en: "From photos", es: "Por fotos", de: "Durch Fotos", nl: "Door foto's" },
          { en: "From videos", es: "Por videos", de: "Durch Videos", nl: "Door video's" }
        ],
        correct: 0,
        explanation: {
          en: "We learn about dinosaurs by studying their fossils - old bones and teeth that turned into rock over millions of years.",
          es: "Aprendemos sobre los dinosaurios estudiando sus fósiles: huesos y dientes antiguos que se convirtieron en roca durante millones de años.",
          de: "Wir lernen über Dinosaurier durch das Studium ihrer Fossilien - alte Knochen und Zähne, die über Millionen von Jahren zu Stein wurden.",
          nl: "We leren over dinosaurussen door hun fossielen te bestuderen - oude botten en tanden die over miljoenen jaren tot steen werden."
        }
      },
      {
        question: {
          en: "Were there flowers during the Jurassic period?",
          es: "¿Había flores durante el período Jurásico?",
          de: "Gab es während der Jurazeit Blumen?",
          nl: "Waren er bloemen tijdens het Jura-tijdperk?"
        },
        options: [
          { en: "No, not yet", es: "No, todavía no", de: "Nein, noch nicht", nl: "Nee, nog niet" },
          { en: "Yes, lots of them", es: "Sí, muchas", de: "Ja, viele davon", nl: "Ja, heel veel" },
          { en: "Only red flowers", es: "Solo flores rojas", de: "Nur rote Blumen", nl: "Alleen rode bloemen" },
          { en: "Only blue flowers", es: "Solo flores azules", de: "Nur blaue Blumen", nl: "Alleen blauwe bloemen" }
        ],
        correct: 0,
        explanation: {
          en: "There were no flowers during the Jurassic period. The plants were mostly ferns, conifers (pine trees), and cycads.",
          es: "No había flores durante el período Jurásico. Las plantas eran principalmente helechos, coníferas (pinos) y cícadas.",
          de: "Es gab während der Jurazeit keine Blumen. Die Pflanzen waren hauptsächlich Farne, Nadelbäume (Kiefern) und Palmfarne.",
          nl: "Er waren geen bloemen tijdens het Jura-tijdperk. De planten waren vooral varens, naaldbomen (dennenbomen) en kogelpalmen."
        }
      },
      {
        question: {
          en: "What was the weather like in the Jurassic period?",
          es: "¿Cómo era el clima en el período Jurásico?",
          de: "Wie war das Wetter in der Jurazeit?",
          nl: "Hoe was het weer in het Jura-tijdperk?"
        },
        options: [
          { en: "Warm and humid", es: "Cálido y húmedo", de: "Warm und feucht", nl: "Warm en vochtig" },
          { en: "Very cold", es: "Muy frío", de: "Sehr kalt", nl: "Heel koud" },
          { en: "Always snowing", es: "Siempre nevando", de: "Immer schneefeucht", nl: "Altijd sneeuwend" },
          { en: "Always raining", es: "Siempre lloviendo", de: "Immer regnend", nl: "Altijd regenend" }
        ],
        correct: 0,
        explanation: {
          en: "The Jurassic period was warm and humid, like a big greenhouse, with no ice at the North or South poles.",
          es: "El período Jurásico era cálido y húmedo, como un gran invernadero, sin hielo en los polos norte o sur.",
          de: "Die Jurazeit war warm und feucht, wie ein großes Gewächshaus, ohne Eis an den Nord- oder Südpolen.",
          nl: "Het Jura-tijdperk was warm en vochtig, zoals een grote kas, zonder ijs op de noord- of zuidpool."
        }
      },
      {
        question: {
          en: "Which dinosaur name means 'different lizard'?",
          es: "¿Qué nombre de dinosaurio significa 'lagarto diferente'?",
          de: "Welcher Dinosaurier-Name bedeutet 'andere Echse'?",
          nl: "Welke dinosaurusnaam betekent 'verschillende hagedis'?"
        },
        options: [
          { en: "Allosaurus", es: "Allosaurus", de: "Allosaurus", nl: "Allosaurus" },
          { en: "Stegosaurus", es: "Stegosaurus", de: "Stegosaurus", nl: "Stegosaurus" },
          { en: "Diplodocus", es: "Diplodocus", de: "Diplodocus", nl: "Diplodocus" },
          { en: "Brachiosaurus", es: "Brachiosaurus", de: "Brachiosaurus", nl: "Brachiosaurus" }
        ],
        correct: 0,
        explanation: {
          en: "Allosaurus means 'different lizard' because it was different from other dinosaurs known when it was first discovered.",
          es: "Allosaurus significa 'lagarto diferente' porque era diferente de otros dinosaurios conocidos cuando fue descubierto por primera vez.",
          de: "Allosaurus bedeutet 'andere Echse', weil er sich von anderen Dinosauriern unterschied, die bekannt waren, als er zuerst entdeckt wurde.",
          nl: "Allosaurus betekent 'verschillende hagedis' omdat hij anders was dan andere dinosaurussen die bekend waren toen hij voor het eerst werd ontdekt."
        }
      },
      {
        question: {
          en: "Where can you see Jurassic dinosaur bones today?",
          es: "¿Dónde puedes ver huesos de dinosaurios jurásicos hoy?",
          de: "Wo kann man heute Jura-Dinosaurier-Knochen sehen?",
          nl: "Waar kun je vandaag Jura-dinosaurusbotten zien?"
        },
        options: [
          { en: "In museums", es: "En museos", de: "In Museen", nl: "In musea" },
          { en: "In the zoo", es: "En el zoológico", de: "Im Zoo", nl: "In de dierentuin" },
          { en: "In the park", es: "En el parque", de: "Im Park", nl: "In het park" },
          { en: "In the store", es: "En la tienda", de: "Im Laden", nl: "In de winkel" }
        ],
        correct: 0,
        explanation: {
          en: "You can see real Jurassic dinosaur fossils and skeletons in natural history museums around the world.",
          es: "Puedes ver fósiles y esqueletos reales de dinosaurios jurásicos en museos de historia natural de todo el mundo.",
          de: "Du kannst echte Jura-Dinosaurier-Fossilien und Skelette in Naturkundemuseen auf der ganzen Welt sehen.",
          nl: "Je kunt echte Jura-dinosaurusfossielen en skeletten zien in natuurhistorische musea over de hele wereld."
        }
      },
      {
        question: {
          en: "What is the biggest Jurassic dinosaur we know?",
          es: "¿Cuál es el dinosaurio jurásico más grande que conocemos?",
          de: "Was ist der größte Jura-Dinosaurier, den wir kennen?",
          nl: "Wat is de grootste Jura-dinosaurus die we kennen?"
        },
        options: [
          { en: "Diplodocus or Brachiosaurus", es: "Diplodocus o Brachiosaurus", de: "Diplodocus oder Brachiosaurus", nl: "Diplodocus of Brachiosaurus" },
          { en: "Compsognathus", es: "Compsognathus", de: "Compsognathus", nl: "Compsognathus" },
          { en: "Allosaurus", es: "Allosaurus", de: "Allosaurus", nl: "Allosaurus" },
          { en: "Stegosaurus", es: "Stegosaurus", de: "Stegosaurus", nl: "Stegosaurus" }
        ],
        correct: 0,
        explanation: {
          en: "Diplodocus and Brachiosaurus were among the biggest Jurassic dinosaurs, some as long as three school buses!",
          es: "¡Diplodocus y Brachiosaurus estaban entre los dinosaurios jurásicos más grandes, algunos tan largos como tres autobuses escolares!",
          de: "Diplodocus und Brachiosaurus waren unter den größten Jura-Dinosauriern, einige so lang wie drei Schulbusse!",
          nl: "Diplodocus en Brachiosaurus behoorden tot de grootste Jura-dinosaurussen, sommige zo lang als drie schoolbussen!"
        }
      },
      {
        question: {
          en: "Did all Jurassic dinosaurs live at the same time?",
          es: "¿Vivieron todos los dinosaurios jurásicos al mismo tiempo?",
          de: "Lebten alle Jura-Dinosaurier zur gleichen Zeit?",
          nl: "Leefden alle Jura-dinosaurussen op hetzelfde moment?"
        },
        options: [
          { en: "No, they lived at different times", es: "No, vivieron en diferentes momentos", de: "Nein, sie lebten zu verschiedenen Zeiten", nl: "Nee, ze leefden op verschillende tijden" },
          { en: "Yes, all together", es: "Sí, todos juntos", de: "Ja, alle zusammen", nl: "Ja, allemaal samen" },
          { en: "Only on weekends", es: "Solo los fines de semana", de: "Nur am Wochenende", nl: "Alleen in het weekend" },
          { en: "Only in summer", es: "Solo en verano", de: "Nur im Sommer", nl: "Alleen in de zomer" }
        ],
        correct: 0,
        explanation: {
          en: "The Jurassic period lasted for millions of years, so different dinosaurs lived at different times, not all together.",
          es: "El período Jurásico duró millones de años, así que diferentes dinosaurios vivieron en diferentes momentos, no todos juntos.",
          de: "Die Jurazeit dauerte Millionen von Jahren, also lebten verschiedene Dinosaurier zu verschiedenen Zeiten, nicht alle zusammen.",
          nl: "Het Jura-tijdperk duurde miljoenen jaren, dus verschillende dinosaurussen leefden op verschillende tijden, niet allemaal samen."
        }
      },
      {
        question: {
          en: "Which dinosaur had a very long whip-like tail?",
          es: "¿Qué dinosaurio tenía una cola muy larga como un látigo?",
          de: "Welcher Dinosaurier hatte einen sehr langen peitschenartigen Schwanz?",
          nl: "Welke dinosaurus had een heel lange zweepachtige staart?"
        },
        options: [
          { en: "Diplodocus", es: "Diplodocus", de: "Diplodocus", nl: "Diplodocus" },
          { en: "Stegosaurus", es: "Stegosaurus", de: "Stegosaurus", nl: "Stegosaurus" },
          { en: "Allosaurus", es: "Allosaurus", de: "Allosaurus", nl: "Allosaurus" },
          { en: "Compsognathus", es: "Compsognathus", de: "Compsognathus", nl: "Compsognathus" }
        ],
        correct: 0,
        explanation: {
          en: "Diplodocus had an extremely long, thin tail that could move like a whip. Scientists think it might have made a loud cracking sound!",
          es: "Diplodocus tenía una cola extremadamente larga y delgada que podía moverse como un látigo. ¡Los científicos piensan que podría haber hecho un sonido fuerte como un chasquido!",
          de: "Diplodocus hatte einen extrem langen, dünnen Schwanz, der sich wie eine Peitsche bewegen konnte. Wissenschaftler denken, er könnte ein lautes Knallgeräusch gemacht haben!",
          nl: "Diplodocus had een extreem lange, dunne staart die kon bewegen als een zweep. Wetenschappers denken dat het een hard knallend geluid kon maken!"
        }    },
    {
      question: {
        en: "What period did Jurassic dinosaurs live in?",
        es: "What period did Jurassic dinosaurs live in?",
        de: "What period did Jurassic dinosaurs live in?",
        nl: "What period did Jurassic dinosaurs live in?"
      },
      options: [
        { en: "Jurassic Period", es: "Jurassic Period", de: "Jurassic Period", nl: "Jurassic Period" },
        { en: "Cretaceous Period", es: "Cretaceous Period", de: "Cretaceous Period", nl: "Cretaceous Period" },
        { en: "Triassic Period", es: "Triassic Period", de: "Triassic Period", nl: "Triassic Period" },
        { en: "Permian Period", es: "Permian Period", de: "Permian Period", nl: "Permian Period" }
      ],
      correct: 0,
      explanation: {
        en: "Jurassic dinosaurs lived during the Jurassic Period, from about 201 to 145 million years ago.",
        es: "Jurassic dinosaurs lived during the Jurassic Period, from about 201 to 145 million years ago.",
        de: "Jurassic dinosaurs lived during the Jurassic Period, from about 201 to 145 million years ago.",
        nl: "Jurassic dinosaurs lived during the Jurassic Period, from about 201 to 145 million years ago."
      }
    },
    {
      question: {
        en: "What famous dinosaur is from the Jurassic?",
        es: "What famous dinosaur is from the Jurassic?",
        de: "What famous dinosaur is from the Jurassic?",
        nl: "What famous dinosaur is from the Jurassic?"
      },
      options: [
        { en: "Stegosaurus", es: "Stegosaurus", de: "Stegosaurus", nl: "Stegosaurus" },
        { en: "Tyrannosaurus Rex", es: "Tyrannosaurus Rex", de: "Tyrannosaurus Rex", nl: "Tyrannosaurus Rex" },
        { en: "Triceratops", es: "Triceratops", de: "Triceratops", nl: "Triceratops" },
        { en: "Velociraptor", es: "Velociraptor", de: "Velociraptor", nl: "Velociraptor" }
      ],
      correct: 0,
      explanation: {
        en: "Stegosaurus is one of the most iconic Jurassic dinosaurs, with distinctive plates on its back.",
        es: "Stegosaurus is one of the most iconic Jurassic dinosaurs, with distinctive plates on its back.",
        de: "Stegosaurus is one of the most iconic Jurassic dinosaurs, with distinctive plates on its back.",
        nl: "Stegosaurus is one of the most iconic Jurassic dinosaurs, with distinctive plates on its back."
      }
    },
    {
      question: {
        en: "What was the climate like in the Jurassic?",
        es: "What was the climate like in the Jurassic?",
        de: "What was the climate like in the Jurassic?",
        nl: "What was the climate like in the Jurassic?"
      },
      options: [
        { en: "Warm and humid", es: "Warm and humid", de: "Warm and humid", nl: "Warm and humid" },
        { en: "Cold and dry", es: "Cold and dry", de: "Cold and dry", nl: "Cold and dry" },
        { en: "Frozen", es: "Frozen", de: "Frozen", nl: "Frozen" },
        { en: "Desert-like", es: "Desert-like", de: "Desert-like", nl: "Desert-like" }
      ],
      correct: 0,
      explanation: {
        en: "The Jurassic Period had a warm, humid climate with lush vegetation.",
        es: "The Jurassic Period had a warm, humid climate with lush vegetation.",
        de: "The Jurassic Period had a warm, humid climate with lush vegetation.",
        nl: "The Jurassic Period had a warm, humid climate with lush vegetation."
      }
    },
    {
      question: {
        en: "Which giant sauropod lived in the Jurassic?",
        es: "Which giant sauropod lived in the Jurassic?",
        de: "Which giant sauropod lived in the Jurassic?",
        nl: "Which giant sauropod lived in the Jurassic?"
      },
      options: [
        { en: "Brachiosaurus", es: "Brachiosaurus", de: "Brachiosaurus", nl: "Brachiosaurus" },
        { en: "Tyrannosaurus", es: "Tyrannosaurus", de: "Tyrannosaurus", nl: "Tyrannosaurus" },
        { en: "Triceratops", es: "Triceratops", de: "Triceratops", nl: "Triceratops" },
        { en: "Velociraptor", es: "Velociraptor", de: "Velociraptor", nl: "Velociraptor" }
      ],
      correct: 0,
      explanation: {
        en: "Brachiosaurus was a massive Jurassic sauropod with a long neck and front legs longer than rear legs.",
        es: "Brachiosaurus was a massive Jurassic sauropod with a long neck and front legs longer than rear legs.",
        de: "Brachiosaurus was a massive Jurassic sauropod with a long neck and front legs longer than rear legs.",
        nl: "Brachiosaurus was a massive Jurassic sauropod with a long neck and front legs longer than rear legs."
      }
    },
    {
      question: {
        en: "What is Allosaurus?",
        es: "What is Allosaurus?",
        de: "What is Allosaurus?",
        nl: "What is Allosaurus?"
      },
      options: [
        { en: "Large Jurassic predator", es: "Large Jurassic predator", de: "Large Jurassic predator", nl: "Large Jurassic predator" },
        { en: "Herbivore", es: "Herbivore", de: "Herbivore", nl: "Herbivore" },
        { en: "Flying reptile", es: "Flying reptile", de: "Flying reptile", nl: "Flying reptile" },
        { en: "Marine reptile", es: "Marine reptile", de: "Marine reptile", nl: "Marine reptile" }
      ],
      correct: 0,
      explanation: {
        en: "Allosaurus was the apex predator of the Late Jurassic, up to 28 feet long.",
        es: "Allosaurus was the apex predator of the Late Jurassic, up to 28 feet long.",
        de: "Allosaurus was the apex predator of the Late Jurassic, up to 28 feet long.",
        nl: "Allosaurus was the apex predator of the Late Jurassic, up to 28 feet long."
      }
    },
    {
      question: {
        en: "What supercontinent was breaking apart in the Jurassic?",
        es: "What supercontinent was breaking apart in the Jurassic?",
        de: "What supercontinent was breaking apart in the Jurassic?",
        nl: "What supercontinent was breaking apart in the Jurassic?"
      },
      options: [
        { en: "Pangaea", es: "Pangaea", de: "Pangaea", nl: "Pangaea" },
        { en: "Rodinia", es: "Rodinia", de: "Rodinia", nl: "Rodinia" },
        { en: "Gondwana only", es: "Gondwana only", de: "Gondwana only", nl: "Gondwana only" },
        { en: "None", es: "None", de: "None", nl: "None" }
      ],
      correct: 0,
      explanation: {
        en: "The supercontinent Pangaea began breaking apart during the Jurassic Period.",
        es: "The supercontinent Pangaea began breaking apart during the Jurassic Period.",
        de: "The supercontinent Pangaea began breaking apart during the Jurassic Period.",
        nl: "The supercontinent Pangaea began breaking apart during the Jurassic Period."
      }
    },
    {
      question: {
        en: "What is the Morrison Formation?",
        es: "What is the Morrison Formation?",
        de: "What is the Morrison Formation?",
        nl: "What is the Morrison Formation?"
      },
      options: [
        { en: "Rock layer rich in Jurassic fossils", es: "Rock layer rich in Jurassic fossils", de: "Rock layer rich in Jurassic fossils", nl: "Rock layer rich in Jurassic fossils" },
        { en: "Mountain range", es: "Mountain range", de: "Mountain range", nl: "Mountain range" },
        { en: "Ocean", es: "Ocean", de: "Ocean", nl: "Ocean" },
        { en: "Desert", es: "Desert", de: "Desert", nl: "Desert" }
      ],
      correct: 0,
      explanation: {
        en: "The Morrison Formation is a Late Jurassic rock layer in western North America famous for abundant dinosaur fossils.",
        es: "The Morrison Formation is a Late Jurassic rock layer in western North America famous for abundant dinosaur fossils.",
        de: "The Morrison Formation is a Late Jurassic rock layer in western North America famous for abundant dinosaur fossils.",
        nl: "The Morrison Formation is a Late Jurassic rock layer in western North America famous for abundant dinosaur fossils."
      }
    },
    {
      question: {
        en: "What dinosaur had plates on its back?",
        es: "What dinosaur had plates on its back?",
        de: "What dinosaur had plates on its back?",
        nl: "What dinosaur had plates on its back?"
      },
      options: [
        { en: "Stegosaurus", es: "Stegosaurus", de: "Stegosaurus", nl: "Stegosaurus" },
        { en: "Allosaurus", es: "Allosaurus", de: "Allosaurus", nl: "Allosaurus" },
        { en: "Brachiosaurus", es: "Brachiosaurus", de: "Brachiosaurus", nl: "Brachiosaurus" },
        { en: "Diplodocus", es: "Diplodocus", de: "Diplodocus", nl: "Diplodocus" }
      ],
      correct: 0,
      explanation: {
        en: "Stegosaurus had two rows of large bony plates running down its back.",
        es: "Stegosaurus had two rows of large bony plates running down its back.",
        de: "Stegosaurus had two rows of large bony plates running down its back.",
        nl: "Stegosaurus had two rows of large bony plates running down its back."
      }
    },
    {
      question: {
        en: "What is Diplodocus known for?",
        es: "What is Diplodocus known for?",
        de: "What is Diplodocus known for?",
        nl: "What is Diplodocus known for?"
      },
      options: [
        { en: "Extremely long whip-like tail", es: "Extremely long whip-like tail", de: "Extremely long whip-like tail", nl: "Extremely long whip-like tail" },
        { en: "Large plates", es: "Large plates", de: "Large plates", nl: "Large plates" },
        { en: "Sharp teeth", es: "Sharp teeth", de: "Sharp teeth", nl: "Sharp teeth" },
        { en: "Flying ability", es: "Flying ability", de: "Flying ability", nl: "Flying ability" }
      ],
      correct: 0,
      explanation: {
        en: "Diplodocus had one of the longest tails of any dinosaur, used possibly as a whip for defense.",
        es: "Diplodocus had one of the longest tails of any dinosaur, used possibly as a whip for defense.",
        de: "Diplodocus had one of the longest tails of any dinosaur, used possibly as a whip for defense.",
        nl: "Diplodocus had one of the longest tails of any dinosaur, used possibly as a whip for defense."
      }
    },
    {
      question: {
        en: "What was the dominant predator of the Jurassic?",
        es: "What was the dominant predator of the Jurassic?",
        de: "What was the dominant predator of the Jurassic?",
        nl: "What was the dominant predator of the Jurassic?"
      },
      options: [
        { en: "Allosaurus", es: "Allosaurus", de: "Allosaurus", nl: "Allosaurus" },
        { en: "T-Rex", es: "T-Rex", de: "T-Rex", nl: "T-Rex" },
        { en: "Spinosaurus", es: "Spinosaurus", de: "Spinosaurus", nl: "Spinosaurus" },
        { en: "Velociraptor", es: "Velociraptor", de: "Velociraptor", nl: "Velociraptor" }
      ],
      correct: 0,
      explanation: {
        en: "Allosaurus was the dominant large predator during the Late Jurassic Period.",
        es: "Allosaurus was the dominant large predator during the Late Jurassic Period.",
        de: "Allosaurus was the dominant large predator during the Late Jurassic Period.",
        nl: "Allosaurus was the dominant large predator during the Late Jurassic Period."
      }
    },
    {
      question: {
        en: "What is Archaeopteryx?",
        es: "What is Archaeopteryx?",
        de: "What is Archaeopteryx?",
        nl: "What is Archaeopteryx?"
      },
      options: [
        { en: "Earliest known bird from Late Jurassic", es: "Earliest known bird from Late Jurassic", de: "Earliest known bird from Late Jurassic", nl: "Earliest known bird from Late Jurassic" },
        { en: "Flying dinosaur", es: "Flying dinosaur", de: "Flying dinosaur", nl: "Flying dinosaur" },
        { en: "Marine reptile", es: "Marine reptile", de: "Marine reptile", nl: "Marine reptile" },
        { en: "Mammal", es: "Mammal", de: "Mammal", nl: "Mammal" }
      ],
      correct: 0,
      explanation: {
        en: "Archaeopteryx is considered the earliest known bird, showing both bird and dinosaur features.",
        es: "Archaeopteryx is considered the earliest known bird, showing both bird and dinosaur features.",
        de: "Archaeopteryx is considered the earliest known bird, showing both bird and dinosaur features.",
        nl: "Archaeopteryx is considered the earliest known bird, showing both bird and dinosaur features."
      }
    },
    {
      question: {
        en: "How long was the Jurassic Period?",
        es: "How long was the Jurassic Period?",
        de: "How long was the Jurassic Period?",
        nl: "How long was the Jurassic Period?"
      },
      options: [
        { en: "About 56 million years", es: "About 56 million years", de: "About 56 million years", nl: "About 56 million years" },
        { en: "About 100 million years", es: "About 100 million years", de: "About 100 million years", nl: "About 100 million years" },
        { en: "About 30 million years", es: "About 30 million years", de: "About 30 million years", nl: "About 30 million years" },
        { en: "About 80 million years", es: "About 80 million years", de: "About 80 million years", nl: "About 80 million years" }
      ],
      correct: 0,
      explanation: {
        en: "The Jurassic Period lasted approximately 56 million years, from 201 to 145 million years ago.",
        es: "The Jurassic Period lasted approximately 56 million years, from 201 to 145 million years ago.",
        de: "The Jurassic Period lasted approximately 56 million years, from 201 to 145 million years ago.",
        nl: "The Jurassic Period lasted approximately 56 million years, from 201 to 145 million years ago."
      }
    },
    {
      question: {
        en: "What ocean was forming during the Jurassic?",
        es: "What ocean was forming during the Jurassic?",
        de: "What ocean was forming during the Jurassic?",
        nl: "What ocean was forming during the Jurassic?"
      },
      options: [
        { en: "Atlantic Ocean", es: "Atlantic Ocean", de: "Atlantic Ocean", nl: "Atlantic Ocean" },
        { en: "Pacific Ocean", es: "Pacific Ocean", de: "Pacific Ocean", nl: "Pacific Ocean" },
        { en: "Indian Ocean", es: "Indian Ocean", de: "Indian Ocean", nl: "Indian Ocean" },
        { en: "Arctic Ocean", es: "Arctic Ocean", de: "Arctic Ocean", nl: "Arctic Ocean" }
      ],
      correct: 0,
      explanation: {
        en: "The Atlantic Ocean began forming as Pangaea split apart during the Jurassic.",
        es: "The Atlantic Ocean began forming as Pangaea split apart during the Jurassic.",
        de: "The Atlantic Ocean began forming as Pangaea split apart during the Jurassic.",
        nl: "The Atlantic Ocean began forming as Pangaea split apart during the Jurassic."
      }
    },
    {
      question: {
        en: "What is Compsognathus?",
        es: "What is Compsognathus?",
        de: "What is Compsognathus?",
        nl: "What is Compsognathus?"
      },
      options: [
        { en: "Small chicken-sized carnivore", es: "Small chicken-sized carnivore", de: "Small chicken-sized carnivore", nl: "Small chicken-sized carnivore" },
        { en: "Large predator", es: "Large predator", de: "Large predator", nl: "Large predator" },
        { en: "Giant herbivore", es: "Giant herbivore", de: "Giant herbivore", nl: "Giant herbivore" },
        { en: "Flying dinosaur", es: "Flying dinosaur", de: "Flying dinosaur", nl: "Flying dinosaur" }
      ],
      correct: 0,
      explanation: {
        en: "Compsognathus was one of the smallest known dinosaurs, about the size of a chicken.",
        es: "Compsognathus was one of the smallest known dinosaurs, about the size of a chicken.",
        de: "Compsognathus was one of the smallest known dinosaurs, about the size of a chicken.",
        nl: "Compsognathus was one of the smallest known dinosaurs, about the size of a chicken."
      }
    },
    {
      question: {
        en: "What pterosaur lived in the Jurassic?",
        es: "What pterosaur lived in the Jurassic?",
        de: "What pterosaur lived in the Jurassic?",
        nl: "What pterosaur lived in the Jurassic?"
      },
      options: [
        { en: "Pterodactylus", es: "Pterodactylus", de: "Pterodactylus", nl: "Pterodactylus" },
        { en: "Pteranodon", es: "Pteranodon", de: "Pteranodon", nl: "Pteranodon" },
        { en: "Quetzalcoatlus", es: "Quetzalcoatlus", de: "Quetzalcoatlus", nl: "Quetzalcoatlus" },
        { en: "None", es: "None", de: "None", nl: "None" }
      ],
      correct: 0,
      explanation: {
        en: "Pterodactylus was a small pterosaur from the Late Jurassic.",
        es: "Pterodactylus was a small pterosaur from the Late Jurassic.",
        de: "Pterodactylus was a small pterosaur from the Late Jurassic.",
        nl: "Pterodactylus was a small pterosaur from the Late Jurassic."
      }
    },
    {
      question: {
        en: "What is the function of Stegosaurus plates?",
        es: "What is the function of Stegosaurus plates?",
        de: "What is the function of Stegosaurus plates?",
        nl: "What is the function of Stegosaurus plates?"
      },
      options: [
        { en: "Temperature regulation and display", es: "Temperature regulation and display", de: "Temperature regulation and display", nl: "Temperature regulation and display" },
        { en: "Flying", es: "Flying", de: "Flying", nl: "Flying" },
        { en: "Defense only", es: "Defense only", de: "Defense only", nl: "Defense only" },
        { en: "Swimming", es: "Swimming", de: "Swimming", nl: "Swimming" }
      ],
      correct: 0,
      explanation: {
        en: "Stegosaurus plates likely helped with temperature regulation and visual display.",
        es: "Stegosaurus plates likely helped with temperature regulation and visual display.",
        de: "Stegosaurus plates likely helped with temperature regulation and visual display.",
        nl: "Stegosaurus plates likely helped with temperature regulation and visual display."
      }
    },
    {
      question: {
        en: "What is Ceratosaurus?",
        es: "What is Ceratosaurus?",
        de: "What is Ceratosaurus?",
        nl: "What is Ceratosaurus?"
      },
      options: [
        { en: "Horned Jurassic predator", es: "Horned Jurassic predator", de: "Horned Jurassic predator", nl: "Horned Jurassic predator" },
        { en: "Horned herbivore", es: "Horned herbivore", de: "Horned herbivore", nl: "Horned herbivore" },
        { en: "Long-necked dinosaur", es: "Long-necked dinosaur", de: "Long-necked dinosaur", nl: "Long-necked dinosaur" },
        { en: "Flying reptile", es: "Flying reptile", de: "Flying reptile", nl: "Flying reptile" }
      ],
      correct: 0,
      explanation: {
        en: "Ceratosaurus was a Jurassic predator with a prominent horn on its nose.",
        es: "Ceratosaurus was a Jurassic predator with a prominent horn on its nose.",
        de: "Ceratosaurus was a Jurassic predator with a prominent horn on its nose.",
        nl: "Ceratosaurus was a Jurassic predator with a prominent horn on its nose."
      }
    },
    {
      question: {
        en: "What sea reptile dominated Jurassic oceans?",
        es: "What sea reptile dominated Jurassic oceans?",
        de: "What sea reptile dominated Jurassic oceans?",
        nl: "What sea reptile dominated Jurassic oceans?"
      },
      options: [
        { en: "Plesiosaurs and ichthyosaurs", es: "Plesiosaurs and ichthyosaurs", de: "Plesiosaurs and ichthyosaurs", nl: "Plesiosaurs and ichthyosaurs" },
        { en: "Mosasaurs", es: "Mosasaurs", de: "Mosasaurs", nl: "Mosasaurs" },
        { en: "Dinosaurs", es: "Dinosaurs", de: "Dinosaurs", nl: "Dinosaurs" },
        { en: "Sharks", es: "Sharks", de: "Sharks", nl: "Sharks" }
      ],
      correct: 0,
      explanation: {
        en: "Plesiosaurs and ichthyosaurs were the dominant marine reptiles in Jurassic seas.",
        es: "Plesiosaurs and ichthyosaurs were the dominant marine reptiles in Jurassic seas.",
        de: "Plesiosaurs and ichthyosaurs were the dominant marine reptiles in Jurassic seas.",
        nl: "Plesiosaurs and ichthyosaurs were the dominant marine reptiles in Jurassic seas."
      }
    },
    {
      question: {
        en: "What is Apatosaurus?",
        es: "What is Apatosaurus?",
        de: "What is Apatosaurus?",
        nl: "What is Apatosaurus?"
      },
      options: [
        { en: "Large Jurassic sauropod", es: "Large Jurassic sauropod", de: "Large Jurassic sauropod", nl: "Large Jurassic sauropod" },
        { en: "Small predator", es: "Small predator", de: "Small predator", nl: "Small predator" },
        { en: "Flying reptile", es: "Flying reptile", de: "Flying reptile", nl: "Flying reptile" },
        { en: "Horned dinosaur", es: "Horned dinosaur", de: "Horned dinosaur", nl: "Horned dinosaur" }
      ],
      correct: 0,
      explanation: {
        en: "Apatosaurus (formerly called Brontosaurus) was a large Jurassic sauropod up to 75 feet long.",
        es: "Apatosaurus (formerly called Brontosaurus) was a large Jurassic sauropod up to 75 feet long.",
        de: "Apatosaurus (formerly called Brontosaurus) was a large Jurassic sauropod up to 75 feet long.",
        nl: "Apatosaurus (formerly called Brontosaurus) was a large Jurassic sauropod up to 75 feet long."
      }
    },
    {
      question: {
        en: "What plants dominated the Jurassic?",
        es: "What plants dominated the Jurassic?",
        de: "What plants dominated the Jurassic?",
        nl: "What plants dominated the Jurassic?"
      },
      options: [
        { en: "Conifers and ferns", es: "Conifers and ferns", de: "Conifers and ferns", nl: "Conifers and ferns" },
        { en: "Flowering plants", es: "Flowering plants", de: "Flowering plants", nl: "Flowering plants" },
        { en: "Grasses", es: "Grasses", de: "Grasses", nl: "Grasses" },
        { en: "Mosses only", es: "Mosses only", de: "Mosses only", nl: "Mosses only" }
      ],
      correct: 0,
      explanation: {
        en: "Conifers, ferns, and cycads dominated Jurassic vegetation; flowering plants hadn't evolved yet.",
        es: "Conifers, ferns, and cycads dominated Jurassic vegetation; flowering plants hadn't evolved yet.",
        de: "Conifers, ferns, and cycads dominated Jurassic vegetation; flowering plants hadn't evolved yet.",
        nl: "Conifers, ferns, and cycads dominated Jurassic vegetation; flowering plants hadn't evolved yet."
      }

      }
    ]
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level1;
  } else if (typeof window !== 'undefined') {
    window.level1 = level1;
  }
})();