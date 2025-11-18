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