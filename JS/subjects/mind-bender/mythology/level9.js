// Mythology - Level 9: Roman Mythology
(function() {
  const level9 = {
    name: {
      en: "Roman Mythology",
      es: "Mitología Romana",
      de: "Römische Mythologie",
      nl: "Romeinse Mythologie"
    },
    questions: [
      {
        question: {
          en: "Who is the king of the Roman gods?",
          es: "¿Quién es el rey de los dioses romanos?",
          de: "Wer ist der König der römischen Götter?",
          nl: "Wie is de koning van de Romeinse goden?"
        },
        options: [
          { en: "Jupiter", es: "Júpiter", de: "Jupiter", nl: "Jupiter" },
          { en: "Mars", es: "Marte", de: "Mars", nl: "Mars" },
          { en: "Neptune", es: "Neptuno", de: "Neptun", nl: "Neptunus" },
          { en: "Apollo", es: "Apolo", de: "Apollo", nl: "Apollo" }
        ],
        correct: 0,
        explanation: {
          en: "Jupiter is the king of the Roman gods, equivalent to the Greek Zeus. He rules from the heavens and controls lightning and thunder. He was the patron deity of the Roman state.",
          es: "Júpiter es el rey de los dioses romanos, equivalente al Zeus griego. Gobierna desde los cielos y controla el rayo y el trueno. Era la deidad patrona del estado romano.",
          de: "Jupiter ist der König der römischen Götter, entspricht dem griechischen Zeus. Er herrscht vom Himmel und kontrolliert Blitz und Donner. Er war die Schutzgottheit des römischen Staates.",
          nl: "Jupiter is de koning van de Romeinse goden, gelijkwaardig aan de Griekse Zeus. Hij heerst vanuit de hemel en beheerst bliksem en donder. Hij was de beschermgod van de Romeinse staat."
        }
      },
      {
        question: {
          en: "What is the Roman name for the goddess of wisdom?",
          es: "¿Cuál es el nombre romano de la diosa de la sabiduría?",
          de: "Wie lautet der römische Name für die Göttin der Weisheit?",
          nl: "Wat is de Romeinse naam voor de godin van wijsheid?"
        },
        options: [
          { en: "Diana", es: "Diana", de: "Diana", nl: "Diana" },
          { en: "Venus", es: "Venus", de: "Venus", nl: "Venus" },
          { en: "Minerva", es: "Minerva", de: "Minerva", nl: "Minerva" },
          { en: "Juno", es: "Juno", de: "Juno", nl: "Juno" }
        ],
        correct: 2,
        explanation: {
          en: "Minerva is the Roman goddess of wisdom, equivalent to the Greek Athena. She was one of the Capitoline Triad (Jupiter, Juno, Minerva) and patroness of arts, crafts, and strategic warfare.",
          es: "Minerva es la diosa romana de la sabiduría, equivalente a la Atenea griega. Era una de la Tríada Capitolina (Júpiter, Juno, Minerva) y patrona de las artes, oficios y guerra estratégica.",
          de: "Minerva ist die römische Göttin der Weisheit, entspricht der griechischen Athena. Sie war Teil der Kapitolinischen Trias (Jupiter, Juno, Minerva) und Schutzherrin der Künste, Handwerke und strategischen Kriegsführung.",
          nl: "Minerva is de Romeinse godin van wijsheid, gelijkwaardig aan de Griekse Athena. Zij was een van de Capitolijnse Triade (Jupiter, Juno, Minerva) en beschermvrouwe van kunsten, ambachten en strategische oorlogvoering."
        }
      },
      {
        question: {
          en: "Who is the Roman god of war?",
          es: "¿Quién es el dios romano de la guerra?",
          de: "Wer ist der römische Kriegsgott?",
          nl: "Wie is de Romeinse god van de oorlog?"
        },
        options: [
          { en: "Mars", es: "Marte", de: "Mars", nl: "Mars" },
          { en: "Mercury", es: "Mercurio", de: "Merkur", nl: "Mercurius" },
          { en: "Vulcan", es: "Vulcano", de: "Vulkan", nl: "Vulcanus" },
          { en: "Bacchus", es: "Baco", de: "Bacchus", nl: "Bacchus" }
        ],
        correct: 0,
        explanation: {
          en: "Mars is the Roman god of war, equivalent to the Greek Ares. However, unlike Ares who represented brutal warfare, Mars was more honored as the father of Romulus and protector of Rome, embodying disciplined military might.",
          es: "Marte es el dios romano de la guerra, equivalente al Ares griego. Sin embargo, a diferencia de Ares que representaba la guerra brutal, Marte era más honrado como el padre de Rómulo y protector de Roma, encarnando el poder militar disciplinado.",
          de: "Mars ist der römische Kriegsgott, entspricht dem griechischen Ares. Im Gegensatz zu Ares, der brutale Kriegsführung repräsentierte, wurde Mars mehr als Vater des Romulus und Beschützer Roms verehrt und verkörperte disziplinierte militärische Macht.",
          nl: "Mars is de Romeinse god van de oorlog, gelijkwaardig aan de Griekse Ares. In tegenstelling tot Ares die brutale oorlogvoering vertegenwoordigde, werd Mars meer geëerd als vader van Romulus en beschermer van Rome, belichamend gedisciplineerde militaire macht."
        }
      },
      {
        question: {
          en: "What is the Roman name for the god of the sea?",
          es: "¿Cuál es el nombre romano del dios del mar?",
          de: "Wie lautet der römische Name für den Meeresgott?",
          nl: "Wat is de Romeinse naam voor de god van de zee?"
        },
        options: [
          { en: "Neptune", es: "Neptuno", de: "Neptun", nl: "Neptunus" },
          { en: "Pluto", es: "Plutón", de: "Pluto", nl: "Pluto" },
          { en: "Saturn", es: "Saturno", de: "Saturn", nl: "Saturnus" },
          { en: "Janus", es: "Jano", de: "Janus", nl: "Janus" }
        ],
        correct: 0,
        explanation: {
          en: "Neptune is the Roman god of the sea, equivalent to the Greek Poseidon. He was also associated with horses and earthquakes. The planet Neptune and the month of July were named after him in some traditions.",
          es: "Neptuno es el dios romano del mar, equivalente al Poseidón griego. También estaba asociado con los caballos y los terremotos. El planeta Neptuno y el mes de julio fueron nombrados en su honor en algunas tradiciones.",
          de: "Neptun ist der römische Meeresgott, entspricht dem griechischen Poseidon. Er wurde auch mit Pferden und Erdbeben assoziiert. Der Planet Neptun und in einigen Traditionen der Monat Juli wurden nach ihm benannt.",
          nl: "Neptunus is de Romeinse god van de zee, gelijkwaardig aan de Griekse Poseidon. Hij werd ook geassocieerd met paarden en aardbevingen. De planeet Neptunus en in sommige tradities de maand juli werden naar hem genoemd."
        }
      },
      {
        question: {
          en: "Who is the Roman goddess of love and beauty?",
          es: "¿Quién es la diosa romana del amor y la belleza?",
          de: "Wer ist die römische Göttin der Liebe und Schönheit?",
          nl: "Wie is de Romeinse godin van liefde en schoonheid?"
        },
        options: [
          { en: "Venus", es: "Venus", de: "Venus", nl: "Venus" },
          { en: "Diana", es: "Diana", de: "Diana", nl: "Diana" },
          { en: "Ceres", es: "Ceres", de: "Ceres", nl: "Ceres" },
          { en: "Vesta", es: "Vesta", de: "Vesta", nl: "Vesta" }
        ],
        correct: 0,
        explanation: {
          en: "Venus is the Roman goddess of love and beauty, equivalent to the Greek Aphrodite. She was considered the mother of the Roman people through her son Aeneas and was particularly revered by Julius Caesar's family.",
          es: "Venus es la diosa romana del amor y la belleza, equivalente a la Afrodita griega. Era considerada la madre del pueblo romano a través de su hijo Eneas y era particularmente venerada por la familia de Julio César.",
          de: "Venus ist die römische Göttin der Liebe und Schönheit, entspricht der griechischen Aphrodite. Sie wurde als Mutter des römischen Volkes durch ihren Sohn Aeneas betrachtet und war besonders von Julius Caesars Familie verehrt.",
          nl: "Venus is de Romeinse godin van liefde en schoonheid, gelijkwaardig aan de Griekse Aphrodite. Zij werd beschouwd als de moeder van het Romeinse volk door haar zoon Aeneas en werd vooral vereerd door de familie van Julius Caesar."
        }
      },
      {
        question: {
          en: "What is the Roman name for the messenger god?",
          es: "¿Cuál es el nombre romano del dios mensajero?",
          de: "Wie lautet der römische Name für den Götterboten?",
          nl: "Wat is de Romeinse naam voor de boodschappergod?"
        },
        options: [
          { en: "Mercury", es: "Mercurio", de: "Merkur", nl: "Mercurius" },
          { en: "Apollo", es: "Apolo", de: "Apollo", nl: "Apollo" },
          { en: "Mars", es: "Marte", de: "Mars", nl: "Mars" },
          { en: "Vulcan", es: "Vulcano", de: "Vulkan", nl: "Vulcanus" }
        ],
        correct: 0,
        explanation: {
          en: "Mercury is the Roman messenger god, equivalent to the Greek Hermes. He was also the god of commerce, trade, and thieves. The planet Mercury and the element mercury (quicksilver) are named after him.",
          es: "Mercurio es el dios mensajero romano, equivalente al Hermes griego. También era el dios del comercio, el intercambio y los ladrones. El planeta Mercurio y el elemento mercurio (azogue) llevan su nombre.",
          de: "Merkur ist der römische Götterbote, entspricht dem griechischen Hermes. Er war auch der Gott des Handels, des Geschäfts und der Diebe. Der Planet Merkur und das Element Quecksilber sind nach ihm benannt.",
          nl: "Mercurius is de Romeinse boodschappergod, gelijkwaardig aan de Griekse Hermes. Hij was ook de god van handel, commercie en dieven. De planeet Mercurius en het element kwik zijn naar hem genoemd."
        }
      },
      {
        question: {
          en: "Who founded Rome according to Roman mythology?",
          es: "¿Quién fundó Roma según la mitología romana?",
          de: "Wer gründete Rom laut römischer Mythologie?",
          nl: "Wie stichtte Rome volgens de Romeinse mythologie?"
        },
        options: [
          { en: "Romulus", es: "Rómulo", de: "Romulus", nl: "Romulus" },
          { en: "Remus", es: "Remo", de: "Remus", nl: "Remus" },
          { en: "Aeneas", es: "Eneas", de: "Aeneas", nl: "Aeneas" },
          { en: "Numa Pompilius", es: "Numa Pompilio", de: "Numa Pompilius", nl: "Numa Pompilius" }
        ],
        correct: 0,
        explanation: {
          en: "Romulus founded Rome according to Roman mythology. He and his twin brother Remus were raised by a she-wolf, but Romulus killed Remus in a dispute over the city's location and became Rome's first king.",
          es: "Rómulo fundó Roma según la mitología romana. Él y su hermano gemelo Remo fueron criados por una loba, pero Rómulo mató a Remo en una disputa sobre la ubicación de la ciudad y se convirtió en el primer rey de Roma.",
          de: "Romulus gründete Rom laut römischer Mythologie. Er und sein Zwillingsbruder Remus wurden von einer Wölfin aufgezogen, aber Romulus tötete Remus in einem Streit über den Standort der Stadt und wurde Roms erster König.",
          nl: "Romulus stichtte Rome volgens de Romeinse mythologie. Hij en zijn tweelingbroer Remus werden opgevoed door een wolvin, maar Romulus doodde Remus in een ruzie over de locatie van de stad en werd Rome's eerste koning."
        }
      },
      {
        question: {
          en: "What animal nursed Romulus and Remus?",
          es: "¿Qué animal amamantó a Rómulo y Remo?",
          de: "Welches Tier säugte Romulus und Remus?",
          nl: "Welk dier zoogde Romulus en Remus?"
        },
        options: [
          { en: "A she-wolf", es: "Una loba", de: "Eine Wölfin", nl: "Een wolvin" },
          { en: "A bear", es: "Una osa", de: "Eine Bärin", nl: "Een berin" },
          { en: "A lioness", es: "Una leona", de: "Eine Löwin", nl: "Een leeuwin" },
          { en: "A deer", es: "Una cierva", de: "Eine Hirschkuh", nl: "Een hinde" }
        ],
        correct: 0,
        explanation: {
          en: "A she-wolf (lupa) nursed Romulus and Remus after they were abandoned as infants. This is one of the most famous stories in Roman mythology, and the wolf became a symbol of Rome.",
          es: "Una loba (lupa) amamantó a Rómulo y Remo después de que fueron abandonados siendo bebés. Esta es una de las historias más famosas de la mitología romana, y el lobo se convirtió en símbolo de Roma.",
          de: "Eine Wölfin (lupa) säugte Romulus und Remus, nachdem sie als Säuglinge ausgesetzt wurden. Dies ist eine der berühmtesten Geschichten der römischen Mythologie, und der Wolf wurde zu einem Symbol Roms.",
          nl: "Een wolvin (lupa) zoogde Romulus en Remus nadat zij als zuigelingen waren achtergelaten. Dit is een van de beroemdste verhalen in de Romeinse mythologie, en de wolf werd een symbool van Rome."
        }
      },
      {
        question: {
          en: "Who is the Roman god of the underworld?",
          es: "¿Quién es el dios romano del inframundo?",
          de: "Wer ist der römische Gott der Unterwelt?",
          nl: "Wie is de Romeinse god van de onderwereld?"
        },
        options: [
          { en: "Pluto", es: "Plutón", de: "Pluto", nl: "Pluto" },
          { en: "Saturn", es: "Saturno", de: "Saturn", nl: "Saturnus" },
          { en: "Janus", es: "Jano", de: "Janus", nl: "Janus" },
          { en: "Terminus", es: "Término", de: "Terminus", nl: "Terminus" }
        ],
        correct: 0,
        explanation: {
          en: "Pluto is the Roman god of the underworld, equivalent to the Greek Hades. He was also associated with wealth because precious metals and gems come from underground. The dwarf planet Pluto was named after him.",
          es: "Plutón es el dios romano del inframundo, equivalente al Hades griego. También estaba asociado con la riqueza porque los metales preciosos y las gemas vienen del subsuelo. El planeta enano Plutón fue nombrado en su honor.",
          de: "Pluto ist der römische Gott der Unterwelt, entspricht dem griechischen Hades. Er wurde auch mit Reichtum assoziiert, weil Edelmetalle und Edelsteine aus dem Untergrund kommen. Der Zwergplanet Pluto wurde nach ihm benannt.",
          nl: "Pluto is de Romeinse god van de onderwereld, gelijkwaardig aan de Griekse Hades. Hij werd ook geassocieerd met rijkdom omdat edelmetalen en edelstenen van ondergronds komen. De dwergplaneet Pluto werd naar hem genoemd."
        }
      },
      {
        question: {
          en: "What is the Roman name for the goddess of the hunt?",
          es: "¿Cuál es el nombre romano de la diosa de la caza?",
          de: "Wie lautet der römische Name für die Jagdgöttin?",
          nl: "Wat is de Romeinse naam voor de godin van de jacht?"
        },
        options: [
          { en: "Diana", es: "Diana", de: "Diana", nl: "Diana" },
          { en: "Luna", es: "Luna", de: "Luna", nl: "Luna" },
          { en: "Flora", es: "Flora", de: "Flora", nl: "Flora" },
          { en: "Pomona", es: "Pomona", de: "Pomona", nl: "Pomona" }
        ],
        correct: 0,
        explanation: {
          en: "Diana is the Roman goddess of the hunt and the moon, equivalent to the Greek Artemis. She was also protector of women and children, and was associated with wild animals and the wilderness.",
          es: "Diana es la diosa romana de la caza y la luna, equivalente a la Artemisa griega. También era protectora de mujeres y niños, y estaba asociada con los animales salvajes y la naturaleza.",
          de: "Diana ist die römische Göttin der Jagd und des Mondes, entspricht der griechischen Artemis. Sie war auch Beschützerin von Frauen und Kindern und wurde mit wilden Tieren und der Wildnis assoziiert.",
          nl: "Diana is de Romeinse godin van de jacht en de maan, gelijkwaardig aan de Griekse Artemis. Zij was ook beschermvrouwe van vrouwen en kinderen, en werd geassocieerd met wilde dieren en de wildernis."
        }
      },
      {
        question: {
          en: "Who is the two-faced Roman god of beginnings and transitions?",
          es: "¿Quién es el dios romano de dos caras de los comienzos y transiciones?",
          de: "Wer ist der zweigesichtige römische Gott der Anfänge und Übergänge?",
          nl: "Wie is de tweegezichte Romeinse god van begin en overgangen?"
        },
        options: [
          { en: "Janus", es: "Jano", de: "Janus", nl: "Janus" },
          { en: "Terminus", es: "Término", de: "Terminus", nl: "Terminus" },
          { en: "Vertumnus", es: "Vertumno", de: "Vertumnus", nl: "Vertumnus" },
          { en: "Faunus", es: "Fauno", de: "Faunus", nl: "Faunus" }
        ],
        correct: 0,
        explanation: {
          en: "Janus is the uniquely Roman two-faced god of beginnings, transitions, gates, and time. He can look both to the past and future. The month January is named after him, and he had no Greek equivalent.",
          es: "Jano es el dios romano únicamente de dos caras de los comienzos, transiciones, puertas y tiempo. Puede mirar tanto al pasado como al futuro. El mes de enero lleva su nombre, y no tenía equivalente griego.",
          de: "Janus ist der einzigartig römische zweigesichtige Gott der Anfänge, Übergänge, Tore und Zeit. Er kann sowohl in die Vergangenheit als auch in die Zukunft blicken. Der Monat Januar ist nach ihm benannt, und er hatte kein griechisches Äquivalent.",
          nl: "Janus is de uniek Romeinse tweegezichte god van begin, overgangen, poorten en tijd. Hij kan zowel naar het verleden als de toekomst kijken. De maand januari is naar hem genoemd, en hij had geen Griekse equivalent."
        }
      },
      {
        question: {
          en: "What is the Roman name for the goddess of agriculture?",
          es: "¿Cuál es el nombre romano de la diosa de la agricultura?",
          de: "Wie lautet der römische Name für die Ackerbaugöttin?",
          nl: "Wat is de Romeinse naam voor de godin van landbouw?"
        },
        options: [
          { en: "Ceres", es: "Ceres", de: "Ceres", nl: "Ceres" },
          { en: "Flora", es: "Flora", de: "Flora", nl: "Flora" },
          { en: "Pomona", es: "Pomona", de: "Pomona", nl: "Pomona" },
          { en: "Ops", es: "Ops", de: "Ops", nl: "Ops" }
        ],
        correct: 0,
        explanation: {
          en: "Ceres is the Roman goddess of agriculture and harvest, equivalent to the Greek Demeter. The word 'cereal' comes from her name. She was particularly important to Roman farmers and the common people.",
          es: "Ceres es la diosa romana de la agricultura y la cosecha, equivalente a la Deméter griega. La palabra 'cereal' viene de su nombre. Era particularmente importante para los agricultores romanos y la gente común.",
          de: "Ceres ist die römische Göttin des Ackerbaus und der Ernte, entspricht der griechischen Demeter. Das Wort 'Getreide' (cereal) stammt von ihrem Namen. Sie war besonders wichtig für römische Bauern und das gemeine Volk.",
          nl: "Ceres is de Romeinse godin van landbouw en oogst, gelijkwaardig aan de Griekse Demeter. Het woord 'cereal' komt van haar naam. Zij was bijzonder belangrijk voor Romeinse boeren en het gewone volk."
        }
      },
      {
        question: {
          en: "Who is the Roman god of fire and the forge?",
          es: "¿Quién es el dios romano del fuego y la forja?",
          de: "Wer ist der römische Gott des Feuers und der Schmiede?",
          nl: "Wie is de Romeinse god van vuur en smeedwerk?"
        },
        options: [
          { en: "Vulcan", es: "Vulcano", de: "Vulkan", nl: "Vulcanus" },
          { en: "Mars", es: "Marte", de: "Mars", nl: "Mars" },
          { en: "Saturn", es: "Saturno", de: "Saturn", nl: "Saturnus" },
          { en: "Bacchus", es: "Baco", de: "Bacchus", nl: "Bacchus" }
        ],
        correct: 0,
        explanation: {
          en: "Vulcan is the Roman god of fire and the forge, equivalent to the Greek Hephaestus. He was the blacksmith of the gods and associated with volcanoes. The word 'volcano' comes from his name.",
          es: "Vulcano es el dios romano del fuego y la forja, equivalente al Hefesto griego. Era el herrero de los dioses y asociado con los volcanes. La palabra 'volcán' viene de su nombre.",
          de: "Vulkan ist der römische Gott des Feuers und der Schmiede, entspricht dem griechischen Hephaistos. Er war der Schmied der Götter und wurde mit Vulkanen assoziiert. Das Wort 'Vulkan' stammt von seinem Namen.",
          nl: "Vulcanus is de Romeinse god van vuur en smeedwerk, gelijkwaardig aan de Griekse Hephaestus. Hij was de smid van de goden en geassocieerd met vulkanen. Het woord 'vulkaan' komt van zijn naam."
        }
      },
      {
        question: {
          en: "What is the Roman name for the goddess of the hearth?",
          es: "¿Cuál es el nombre romano de la diosa del hogar?",
          de: "Wie lautet der römische Name für die Herdgöttin?",
          nl: "Wat is de Romeinse naam voor de godin van de haard?"
        },
        options: [
          { en: "Vesta", es: "Vesta", de: "Vesta", nl: "Vesta" },
          { en: "Juno", es: "Juno", de: "Juno", nl: "Juno" },
          { en: "Ceres", es: "Ceres", de: "Ceres", nl: "Ceres" },
          { en: "Minerva", es: "Minerva", de: "Minerva", nl: "Minerva" }
        ],
        correct: 0,
        explanation: {
          en: "Vesta is the Roman goddess of the hearth, equivalent to the Greek Hestia. The Vestal Virgins were priestesses who tended her sacred flame in Rome. Her temple housed the eternal flame of Rome.",
          es: "Vesta es la diosa romana del hogar, equivalente a la Hestia griega. Las Vírgenes Vestales eran sacerdotisas que cuidaban su llama sagrada en Roma. Su templo albergaba la llama eterna de Roma.",
          de: "Vesta ist die römische Göttin des Herdes, entspricht der griechischen Hestia. Die Vestalinnen waren Priesterinnen, die ihre heilige Flamme in Rom hüteten. Ihr Tempel beherbergte die ewige Flamme Roms.",
          nl: "Vesta is de Romeinse godin van de haard, gelijkwaardig aan de Griekse Hestia. De Vestaalse Maagden waren priesteressen die haar heilige vlam in Rome onderhielden. Haar tempel huisvestte de eeuwige vlam van Rome."
        }
      },
      {
        question: {
          en: "Who is the Roman hero who fled Troy and founded the Roman lineage?",
          es: "¿Quién es el héroe romano que huyó de Troya y fundó el linaje romano?",
          de: "Wer ist der römische Held, der aus Troja floh und die römische Abstammung begründete?",
          nl: "Wie is de Romeinse held die uit Troje vluchtte en de Romeinse afstamming stichtte?"
        },
        options: [
          { en: "Aeneas", es: "Eneas", de: "Aeneas", nl: "Aeneas" },
          { en: "Romulus", es: "Rómulo", de: "Romulus", nl: "Romulus" },
          { en: "Numa Pompilius", es: "Numa Pompilio", de: "Numa Pompilius", nl: "Numa Pompilius" },
          { en: "Tarquinius", es: "Tarquinio", de: "Tarquinius", nl: "Tarquinius" }
        ],
        correct: 0,
        explanation: {
          en: "Aeneas is the Trojan hero who fled Troy and, according to Virgil's Aeneid, founded the Roman lineage in Italy. He was considered the ancestor of Romulus and Remus and thus all Romans.",
          es: "Eneas es el héroe troyano que huyó de Troya y, según la Eneida de Virgilio, fundó el linaje romano en Italia. Era considerado el ancestro de Rómulo y Remo y por tanto de todos los romanos.",
          de: "Aeneas ist der trojanische Held, der aus Troja floh und laut Vergils Aeneis die römische Abstammung in Italien begründete. Er wurde als Vorfahre von Romulus und Remus und damit aller Römer betrachtet.",
          nl: "Aeneas is de Trojaanse held die uit Troje vluchtte en, volgens Vergilius' Aeneis, de Romeinse afstamming in Italië stichtte. Hij werd beschouwd als de voorvader van Romulus en Remus en dus alle Romeinen."
        }
      },
      {
        question: {
          en: "What is the Capitoline Triad?",
          es: "¿Qué es la Tríada Capitolina?",
          de: "Was ist die Kapitolinische Trias?",
          nl: "Wat is de Capitolijnse Triade?"
        },
        options: [
          { en: "Jupiter, Juno, and Minerva", es: "Júpiter, Juno y Minerva", de: "Jupiter, Juno und Minerva", nl: "Jupiter, Juno en Minerva" },
          { en: "Mars, Venus, and Apollo", es: "Marte, Venus y Apolo", de: "Mars, Venus und Apollo", nl: "Mars, Venus en Apollo" },
          { en: "Neptune, Vulcan, and Ceres", es: "Neptuno, Vulcano y Ceres", de: "Neptun, Vulkan und Ceres", nl: "Neptunus, Vulcanus en Ceres" },
          { en: "Diana, Mercury, and Vesta", es: "Diana, Mercurio y Vesta", de: "Diana, Merkur und Vesta", nl: "Diana, Mercurius en Vesta" }
        ],
        correct: 0,
        explanation: {
          en: "The Capitoline Triad consists of Jupiter, Juno, and Minerva, the three most important gods of the Roman state religion. They were worshipped together in the Temple of Jupiter Optimus Maximus on the Capitoline Hill.",
          es: "La Tríada Capitolina consiste en Júpiter, Juno y Minerva, los tres dioses más importantes de la religión estatal romana. Eran adorados juntos en el Templo de Júpiter Óptimo Máximo en el Monte Capitolino.",
          de: "Die Kapitolinische Trias besteht aus Jupiter, Juno und Minerva, den drei wichtigsten Göttern der römischen Staatsreligion. Sie wurden gemeinsam im Tempel des Jupiter Optimus Maximus auf dem Kapitolshügel verehrt.",
          nl: "De Capitolijnse Triade bestaat uit Jupiter, Juno en Minerva, de drie belangrijkste goden van de Romeinse staatsreligie. Zij werden samen aanbeden in de Tempel van Jupiter Optimus Maximus op de Capitolijnse Heuvel."
        }
      },
      {
        question: {
          en: "Who is the Roman goddess of the moon?",
          es: "¿Quién es la diosa romana de la luna?",
          de: "Wer ist die römische Mondgöttin?",
          nl: "Wie is de Romeinse godin van de maan?"
        },
        options: [
          { en: "Luna", es: "Luna", de: "Luna", nl: "Luna" },
          { en: "Diana", es: "Diana", de: "Diana", nl: "Diana" },
          { en: "Both A and B", es: "Tanto A como B", de: "Sowohl A als auch B", nl: "Zowel A als B" },
          { en: "Aurora", es: "Aurora", de: "Aurora", nl: "Aurora" }
        ],
        correct: 2,
        explanation: {
          en: "Both Luna and Diana were Roman goddesses associated with the moon. Luna was the personification of the moon itself, while Diana was also goddess of the hunt who had lunar associations.",
          es: "Tanto Luna como Diana eran diosas romanas asociadas con la luna. Luna era la personificación de la luna misma, mientras que Diana también era diosa de la caza que tenía asociaciones lunares.",
          de: "Sowohl Luna als auch Diana waren römische Göttinnen, die mit dem Mond assoziiert wurden. Luna war die Personifikation des Mondes selbst, während Diana auch Jagdgöttin war, die lunare Verbindungen hatte.",
          nl: "Zowel Luna als Diana waren Romeinse godinnen geassocieerd met de maan. Luna was de personificatie van de maan zelf, terwijl Diana ook godin van de jacht was die maanassociaties had."
        }
      },
      {
        question: {
          en: "What Roman festival honored the god Saturn?",
          es: "¿Qué festival romano honraba al dios Saturno?",
          de: "Welches römische Fest ehrte den Gott Saturn?",
          nl: "Welk Romeins festival eerde de god Saturnus?"
        },
        options: [
          { en: "Saturnalia", es: "Saturnalia", de: "Saturnalia", nl: "Saturnalia" },
          { en: "Lupercalia", es: "Lupercalia", de: "Lupercalia", nl: "Lupercalia" },
          { en: "Floralia", es: "Floralia", de: "Floralia", nl: "Floralia" },
          { en: "Vestalia", es: "Vestalia", de: "Vestalia", nl: "Vestalia" }
        ],
        correct: 0,
        explanation: {
          en: "Saturnalia was the Roman festival honoring Saturn, held in December. During this time, social norms were inverted, masters served slaves, and it was a time of feasting and gift-giving, influencing modern Christmas traditions.",
          es: "Saturnalia era el festival romano que honraba a Saturno, celebrado en diciembre. Durante este tiempo, las normas sociales se invertían, los amos servían a los esclavos, y era época de banquetes e intercambio de regalos, influyendo en las tradiciones navideñas modernas.",
          de: "Saturnalia war das römische Fest zu Ehren Saturns, das im Dezember gefeiert wurde. Während dieser Zeit wurden soziale Normen umgekehrt, Herren dienten Sklaven, und es war eine Zeit des Feierns und Schenkens, was moderne Weihnachtstraditionen beeinflusste.",
          nl: "Saturnalia was het Romeinse festival ter ere van Saturnus, gehouden in december. Tijdens deze tijd werden sociale normen omgekeerd, meesters dienden slaven, en het was een tijd van feesten en geschenken geven, wat moderne kersttradities beïnvloedde."
        }
      },
      {
        question: {
          en: "Who are the Lares in Roman religion?",
          es: "¿Quiénes son los Lares en la religión romana?",
          de: "Wer sind die Laren in der römischen Religion?",
          nl: "Wie zijn de Lares in de Romeinse religie?"
        },
        options: [
          { en: "Household guardian spirits", es: "Espíritus guardianes del hogar", de: "Hausschutzgeister", nl: "Huishoudelijke beschermgeesten" },
          { en: "River gods", es: "Dioses del río", de: "Flussgötter", nl: "Riviergoden" },
          { en: "War deities", es: "Deidades de guerra", de: "Kriegsgötter", nl: "Oorlogsgoden" },
          { en: "Underworld judges", es: "Jueces del inframundo", de: "Unterweltrichter", nl: "Onderwereldrechters" }
        ],
        correct: 0,
        explanation: {
          en: "The Lares were household guardian spirits in Roman religion. They protected the home and family, and had shrines (lararium) in Roman houses where daily offerings were made to ensure their favor.",
          es: "Los Lares eran espíritus guardianes del hogar en la religión romana. Protegían el hogar y la familia, y tenían santuarios (lararium) en las casas romanas donde se hacían ofrendas diarias para asegurar su favor.",
          de: "Die Laren waren Hausschutzgeister in der römischen Religion. Sie beschützten Haus und Familie und hatten Schreine (Lararium) in römischen Häusern, wo täglich Opfer dargebracht wurden, um ihre Gunst zu sichern.",
          nl: "De Lares waren huishoudelijke beschermgeesten in de Romeinse religie. Zij beschermden huis en familie, en hadden heiligdommen (lararium) in Romeinse huizen waar dagelijks offers werden gebracht om hun gunst te verzekeren."
        }
      },
      {
        question: {
          en: "What is the Roman name for Fate or Destiny?",
          es: "¿Cuál es el nombre romano para el Destino?",
          de: "Wie lautet der römische Name für das Schicksal?",
          nl: "Wat is de Romeinse naam voor Noodlot of Lot?"
        },
        options: [
          { en: "Fatum", es: "Fatum", de: "Fatum", nl: "Fatum" },
          { en: "Fortuna", es: "Fortuna", de: "Fortuna", nl: "Fortuna" },
          { en: "Both A and B", es: "Tanto A como B", de: "Sowohl A als auch B", nl: "Zowel A als B" },
          { en: "Providentia", es: "Providencia", de: "Providentia", nl: "Providentia" }
        ],
        correct: 2,
        explanation: {
          en: "Both Fatum (fate/destiny) and Fortuna (fortune/luck) were important Roman concepts. Fatum represented unavoidable destiny, while Fortuna represented changeable luck and chance, often depicted with a wheel.",
          es: "Tanto Fatum (destino) como Fortuna (suerte) eran conceptos romanos importantes. Fatum representaba el destino inevitable, mientras que Fortuna representaba la suerte y casualidad cambiable, a menudo representada con una rueda.",
          de: "Sowohl Fatum (Schicksal) als auch Fortuna (Glück) waren wichtige römische Konzepte. Fatum repräsentierte unvermeidliches Schicksal, während Fortuna veränderliches Glück und Zufall repräsentierte, oft mit einem Rad dargestellt.",
          nl: "Zowel Fatum (noodlot) als Fortuna (geluk/fortuin) waren belangrijke Romeinse concepten. Fatum vertegenwoordigde onvermijdelijk lot, terwijl Fortuna veranderlijk geluk en toeval vertegenwoordigde, vaak afgebeeld met een wiel."
        }
      },
      {
        question: {
          en: "Who wrote the Aeneid, the great Roman epic?",
          es: "¿Quién escribió la Eneida, la gran épica romana?",
          de: "Wer schrieb die Aeneis, das große römische Epos?",
          nl: "Wie schreef de Aeneis, het grote Romeinse epos?"
        },
        options: [
          { en: "Virgil", es: "Virgilio", de: "Vergil", nl: "Vergilius" },
          { en: "Ovid", es: "Ovidio", de: "Ovid", nl: "Ovidius" },
          { en: "Horace", es: "Horacio", de: "Horaz", nl: "Horatius" },
          { en: "Cicero", es: "Cicerón", de: "Cicero", nl: "Cicero" }
        ],
        correct: 0,
        explanation: {
          en: "Virgil (Publius Vergilius Maro) wrote the Aeneid, the great Roman epic poem that tells the story of Aeneas and the founding of Roman civilization. It was commissioned by Emperor Augustus to glorify Rome.",
          es: "Virgilio (Publio Virgilio Marón) escribió la Eneida, el gran poema épico romano que cuenta la historia de Eneas y la fundación de la civilización romana. Fue comisionada por el Emperador Augusto para glorificar Roma.",
          de: "Vergil (Publius Vergilius Maro) schrieb die Aeneis, das große römische Epos, das die Geschichte von Aeneas und die Gründung der römischen Zivilisation erzählt. Es wurde von Kaiser Augustus in Auftrag gegeben, um Rom zu verherrlichen.",
          nl: "Vergilius (Publius Vergilius Maro) schreef de Aeneis, het grote Romeinse epos dat het verhaal vertelt van Aeneas en de stichting van de Romeinse beschaving. Het werd in opdracht van Keizer Augustus geschreven om Rome te verheerlijken."
        }
      },
      {
        question: {
          en: "What is the Roman concept of 'pietas'?",
          es: "¿Qué es el concepto romano de 'pietas'?",
          de: "Was ist das römische Konzept der 'pietas'?",
          nl: "Wat is het Romeinse concept van 'pietas'?"
        },
        options: [
          { en: "Duty to gods, country, and family", es: "Deber hacia los dioses, país y familia", de: "Pflicht gegenüber Göttern, Vaterland und Familie", nl: "Plicht jegens goden, land en familie" },
          { en: "Military courage", es: "Valor militar", de: "Militärischer Mut", nl: "Militaire moed" },
          { en: "Personal wealth", es: "Riqueza personal", de: "Persönlicher Reichtum", nl: "Persoonlijke rijkdom" },
          { en: "Political power", es: "Poder político", de: "Politische Macht", nl: "Politieke macht" }
        ],
        correct: 0,
        explanation: {
          en: "Pietas was a fundamental Roman virtue meaning duty and devotion to the gods, one's country, and family. Aeneas was called 'pius Aeneas' (pious Aeneas) because he exemplified this virtue.",
          es: "Pietas era una virtud romana fundamental que significaba deber y devoción a los dioses, el país y la familia. Eneas era llamado 'pius Aeneas' (pío Eneas) porque ejemplificaba esta virtud.",
          de: "Pietas war eine grundlegende römische Tugend, die Pflicht und Hingabe gegenüber den Göttern, dem Vaterland und der Familie bedeutete. Aeneas wurde 'pius Aeneas' (frommer Aeneas) genannt, weil er diese Tugend verkörperte.",
          nl: "Pietas was een fundamentele Romeinse deugd die plicht en toewijding aan de goden, het vaderland en familie betekende. Aeneas werd 'pius Aeneas' (vrome Aeneas) genoemd omdat hij deze deugd belichaamde."
        }
      },
      {
        question: {
          en: "Who were the Penates in Roman religion?",
          es: "¿Quiénes eran los Penates en la religión romana?",
          de: "Wer waren die Penaten in der römischen Religion?",
          nl: "Wie waren de Penaten in de Romeinse religie?"
        },
        options: [
          { en: "Gods of the household pantry and stores", es: "Dioses de la despensa y almacenes del hogar", de: "Götter der Haushaltskammer und Vorräte", nl: "Goden van de huishoudelijke voorraadkast en voorraden" },
          { en: "Gods of war", es: "Dioses de la guerra", de: "Kriegsgötter", nl: "Oorlogsgoden" },
          { en: "River spirits", es: "Espíritus del río", de: "Flussgeister", nl: "Riviergeesten" },
          { en: "Mountain deities", es: "Deidades de montaña", de: "Berggötter", nl: "Berggoden" }
        ],
        correct: 0,
        explanation: {
          en: "The Penates were Roman household gods who protected the family's food stores and pantry. Along with the Lares, they were essential to Roman domestic religion and were worshipped daily in the home.",
          es: "Los Penates eran dioses domésticos romanos que protegían las despensas y almacenes de comida de la familia. Junto con los Lares, eran esenciales para la religión doméstica romana y eran adorados diariamente en el hogar.",
          de: "Die Penaten waren römische Hausgötter, die die Nahrungsvorräte und Kammer der Familie schützten. Zusammen mit den Laren waren sie wesentlich für die römische Hausreligion und wurden täglich im Haus verehrt.",
          nl: "De Penaten waren Romeinse huisgoden die de voedselvoorraden en voorraadkast van de familie beschermden. Samen met de Lares waren zij essentieel voor de Romeinse huisreligie en werden dagelijks in huis aanbeden."
        }
      },
      {
        question: {
          en: "What was the Sibylline Books?",
          es: "¿Qué eran los Libros Sibilinos?",
          de: "Was waren die Sibyllinischen Bücher?",
          nl: "Wat waren de Sibyllijnse Boeken?"
        },
        options: [
          { en: "Prophetic books consulted in times of crisis", es: "Libros proféticos consultados en tiempos de crisis", de: "Prophetische Bücher, die in Krisenzeiten konsultiert wurden", nl: "Profetische boeken geraadpleegd in tijden van crisis" },
          { en: "Military strategy manuals", es: "Manuales de estrategia militar", de: "Militärstrategiehandbücher", nl: "Militaire strategiehandboeken" },
          { en: "Legal codes", es: "Códigos legales", de: "Rechtsgesetze", nl: "Wettelijke codes" },
          { en: "Historical chronicles", es: "Crónicas históricas", de: "Historische Chroniken", nl: "Historische kronieken" }
        ],
        correct: 0,
        explanation: {
          en: "The Sibylline Books were a collection of prophetic utterances purchased from the Cumaean Sibyl. They were kept in the Temple of Jupiter and consulted by special priests during times of crisis to guide Roman policy.",
          es: "Los Libros Sibilinos eran una colección de declaraciones proféticas compradas a la Sibila de Cumas. Se guardaban en el Templo de Júpiter y eran consultados por sacerdotes especiales durante crisis para guiar la política romana.",
          de: "Die Sibyllinischen Bücher waren eine Sammlung prophetischer Äußerungen, die von der Sibylle von Cumae erworben wurden. Sie wurden im Jupitertempel aufbewahrt und von speziellen Priestern in Krisenzeiten konsultiert, um die römische Politik zu leiten.",
          nl: "De Sibyllijnse Boeken waren een verzameling profetische uitspraken gekocht van de Cumaean Sibylle. Zij werden bewaard in de Tempel van Jupiter en geraadpleegd door speciale priesters tijdens crises om het Romeinse beleid te leiden."
        }
      },
      {
        question: {
          en: "Who was the Roman god of boundaries and landmarks?",
          es: "¿Quién era el dios romano de los límites y mojones?",
          de: "Wer war der römische Gott der Grenzen und Grenzsteine?",
          nl: "Wie was de Romeinse god van grenzen en oriëntatiepunten?"
        },
        options: [
          { en: "Terminus", es: "Término", de: "Terminus", nl: "Terminus" },
          { en: "Janus", es: "Jano", de: "Janus", nl: "Janus" },
          { en: "Faunus", es: "Fauno", de: "Faunus", nl: "Faunus" },
          { en: "Silvanus", es: "Silvano", de: "Silvanus", nl: "Silvanus" }
        ],
        correct: 0,
        explanation: {
          en: "Terminus was the Roman god of boundaries and landmarks. He protected property boundaries and border stones. His statue in the Temple of Jupiter could not be moved, symbolizing the permanence of boundaries.",
          es: "Término era el dios romano de los límites y mojones. Protegía las fronteras de propiedad y piedras fronterizas. Su estatua en el Templo de Júpiter no podía moverse, simbolizando la permanencia de los límites.",
          de: "Terminus war der römische Gott der Grenzen und Grenzsteine. Er schützte Eigentumsgrenzen und Grenzsteine. Seine Statue im Jupitertempel konnte nicht bewegt werden, was die Permanenz der Grenzen symbolisierte.",
          nl: "Terminus was de Romeinse god van grenzen en oriëntatiepunten. Hij beschermde eigendomsgrenzen en grensstenen. Zijn standbeeld in de Tempel van Jupiter kon niet verplaatst worden, wat de permanentie van grenzen symboliseerde."
        }
      },
      {
        question: {
          en: "What Roman festival involved men running through the streets with goatskin whips?",
          es: "¿Qué festival romano implicaba hombres corriendo por las calles con látigos de piel de cabra?",
          de: "Bei welchem römischen Fest liefen Männer mit Ziegenfellpeitschen durch die Straßen?",
          nl: "Welk Romeins festival betrof mannen die door de straten renden met geitenhuid zwepen?"
        },
        options: [
          { en: "Lupercalia", es: "Lupercalia", de: "Lupercalia", nl: "Lupercalia" },
          { en: "Saturnalia", es: "Saturnalia", de: "Saturnalia", nl: "Saturnalia" },
          { en: "Floralia", es: "Floralia", de: "Floralia", nl: "Floralia" },
          { en: "Robigalia", es: "Robigalia", de: "Robigalia", nl: "Robigalia" }
        ],
        correct: 0,
        explanation: {
          en: "Lupercalia was a fertility festival where young men called Luperci ran through Rome striking people with goatskin whips (februa) to promote fertility. It was held in February and is connected to Valentine's Day traditions.",
          es: "Lupercalia era un festival de fertilidad donde jóvenes llamados Luperci corrían por Roma golpeando a la gente con látigos de piel de cabra (februa) para promover la fertilidad. Se celebraba en febrero y está conectado con las tradiciones del Día de San Valentín.",
          de: "Lupercalia war ein Fruchtbarkeitsfest, bei dem junge Männer namens Luperci durch Rom liefen und Menschen mit Ziegenfellpeitschen (februa) schlugen, um die Fruchtbarkeit zu fördern. Es wurde im Februar gefeiert und steht in Verbindung mit Valentinstraditionen.",
          nl: "Lupercalia was een vruchtbaarheidsfestival waarbij jonge mannen genaamd Luperci door Rome renden en mensen sloegen met geitenhuid zwepen (februa) om vruchtbaarheid te bevorderen. Het werd gehouden in februari en is verbonden met Valentijnsdag tradities."
        }
      },
      {
        question: {
          en: "Who was the Roman goddess of flowers and spring?",
          es: "¿Quién era la diosa romana de las flores y la primavera?",
          de: "Wer war die römische Göttin der Blumen und des Frühlings?",
          nl: "Wie was de Romeinse godin van bloemen en lente?"
        },
        options: [
          { en: "Flora", es: "Flora", de: "Flora", nl: "Flora" },
          { en: "Pomona", es: "Pomona", de: "Pomona", nl: "Pomona" },
          { en: "Ceres", es: "Ceres", de: "Ceres", nl: "Ceres" },
          { en: "Aurora", es: "Aurora", de: "Aurora", nl: "Aurora" }
        ],
        correct: 0,
        explanation: {
          en: "Flora was the Roman goddess of flowers, spring, and renewal. Her festival, the Floralia, was celebrated in late April and early May with games, theatrical performances, and floral decorations.",
          es: "Flora era la diosa romana de las flores, la primavera y la renovación. Su festival, las Floralia, se celebraba a finales de abril y principios de mayo con juegos, representaciones teatrales y decoraciones florales.",
          de: "Flora war die römische Göttin der Blumen, des Frühlings und der Erneuerung. Ihr Fest, die Floralia, wurde Ende April und Anfang Mai mit Spielen, Theateraufführungen und Blumenschmuck gefeiert.",
          nl: "Flora was de Romeinse godin van bloemen, lente en vernieuwing. Haar festival, de Floralia, werd gevierd eind april en begin mei met spelen, theatervoorstellingen en bloemendecoraties."
        }
      },
      {
        question: {
          en: "What was the Roman concept of 'numen'?",
          es: "¿Qué era el concepto romano de 'numen'?",
          de: "Was war das römische Konzept des 'numen'?",
          nl: "Wat was het Romeinse concept van 'numen'?"
        },
        options: [
          { en: "Divine power present in objects and places", es: "Poder divino presente en objetos y lugares", de: "Göttliche Macht in Objekten und Orten", nl: "Goddelijke kracht aanwezig in objecten en plaatsen" },
          { en: "Roman citizenship", es: "Ciudadanía romana", de: "Römische Bürgerschaft", nl: "Romeins burgerschap" },
          { en: "Military rank", es: "Rango militar", de: "Militärischer Rang", nl: "Militaire rang" },
          { en: "Legal authority", es: "Autoridad legal", de: "Rechtliche Autorität", nl: "Juridische autoriteit" }
        ],
        correct: 0,
        explanation: {
          en: "Numen referred to the divine power or spirit that Romans believed was present in natural objects, places, and phenomena. This concept emphasized the sacred presence in everyday life and nature.",
          es: "Numen se refería al poder divino o espíritu que los romanos creían estaba presente en objetos naturales, lugares y fenómenos. Este concepto enfatizaba la presencia sagrada en la vida cotidiana y la naturaleza.",
          de: "Numen bezog sich auf die göttliche Macht oder den Geist, von dem die Römer glaubten, dass er in natürlichen Objekten, Orten und Phänomenen anwesend war. Dieses Konzept betonte die heilige Präsenz im täglichen Leben und in der Natur.",
          nl: "Numen verwees naar de goddelijke kracht of geest waarvan de Romeinen geloofden dat deze aanwezig was in natuurlijke objecten, plaatsen en verschijnselen. Dit concept benadrukte de heilige aanwezigheid in het dagelijks leven en de natuur."
        }
      },
      {
        question: {
          en: "Who were the Vestals?",
          es: "¿Quiénes eran las Vestales?",
          de: "Wer waren die Vestalinnen?",
          nl: "Wie waren de Vestalen?"
        },
        options: [
          { en: "Virgin priestesses of Vesta", es: "Sacerdotisas vírgenes de Vesta", de: "Jungfräuliche Priesterinnen der Vesta", nl: "Maagdelijke priesteressen van Vesta" },
          { en: "Female gladiators", es: "Gladiadoras femeninas", de: "Weibliche Gladiatorinnen", nl: "Vrouwelijke gladiatoren" },
          { en: "Noble Roman women", es: "Mujeres nobles romanas", de: "Adelige römische Frauen", nl: "Nobele Romeinse vrouwen" },
          { en: "Temple dancers", es: "Bailarinas del templo", de: "Tempeltänzerinnen", nl: "Tempeldanseressen" }
        ],
        correct: 0,
        explanation: {
          en: "The Vestals were virgin priestesses who served Vesta for 30 years, tending the sacred eternal flame of Rome. They had great privileges but breaking their vow of chastity was punished by being buried alive.",
          es: "Las Vestales eran sacerdotisas vírgenes que servían a Vesta durante 30 años, cuidando la llama sagrada eterna de Roma. Tenían grandes privilegios pero romper su voto de castidad era castigado siendo enterradas vivas.",
          de: "Die Vestalinnen waren jungfräuliche Priesterinnen, die Vesta 30 Jahre lang dienten und die heilige ewige Flamme Roms hüteten. Sie hatten große Privilegien, aber das Brechen ihres Keuschheitsgelübdes wurde mit lebendigem Begraben bestraft.",
          nl: "De Vestalen waren maagdelijke priesteressen die Vesta 30 jaar dienden, de heilige eeuwige vlam van Rome onderhoudend. Zij hadden grote privileges maar het breken van hun kuisheidgelofte werd bestraft door levend begraven te worden."
        }
      },
      {
        question: {
          en: "What was the Campus Martius?",
          es: "¿Qué era el Campus Martius?",
          de: "Was war der Campus Martius?",
          nl: "Wat was de Campus Martius?"
        },
        options: [
          { en: "A field dedicated to Mars for military training", es: "Un campo dedicado a Marte para entrenamiento militar", de: "Ein Mars geweihtes Feld für militärisches Training", nl: "Een veld gewijd aan Mars voor militaire training" },
          { en: "A temple complex", es: "Un complejo de templos", de: "Ein Tempelkomplex", nl: "Een tempelcomplex" },
          { en: "A market area", es: "Una zona de mercado", de: "Ein Marktgebiet", nl: "Een marktgebied" },
          { en: "A residential district", es: "Un distrito residencial", de: "Ein Wohnbezirk", nl: "Een woonwijk" }
        ],
        correct: 0,
        explanation: {
          en: "The Campus Martius (Field of Mars) was a large area in Rome dedicated to the god Mars, used for military training, elections, and public gatherings. It later became a major urban development area.",
          es: "El Campus Martius (Campo de Marte) era una gran área en Roma dedicada al dios Marte, usada para entrenamiento militar, elecciones y reuniones públicas. Más tarde se convirtió en una importante área de desarrollo urbano.",
          de: "Der Campus Martius (Marsfeld) war ein großes Gebiet in Rom, das dem Gott Mars geweiht war und für militärisches Training, Wahlen und öffentliche Versammlungen genutzt wurde. Später wurde es zu einem wichtigen städtischen Entwicklungsgebiet.",
          nl: "De Campus Martius (Marsveld) was een groot gebied in Rome gewijd aan de god Mars, gebruikt voor militaire training, verkiezingen en publieke bijeenkomsten. Het werd later een belangrijk stedelijk ontwikkelingsgebied."
        }
      },
      {
        question: {
          en: "Who was the Roman god of wine?",
          es: "¿Quién era el dios romano del vino?",
          de: "Wer war der römische Weingott?",
          nl: "Wie was de Romeinse god van wijn?"
        },
        options: [
          { en: "Bacchus", es: "Baco", de: "Bacchus", nl: "Bacchus" },
          { en: "Liber", es: "Liber", de: "Liber", nl: "Liber" },
          { en: "Both A and B", es: "Tanto A como B", de: "Sowohl A als auch B", nl: "Zowel A als B" },
          { en: "Saturn", es: "Saturno", de: "Saturn", nl: "Saturnus" }
        ],
        correct: 2,
        explanation: {
          en: "Both Bacchus and Liber were Roman gods of wine. Liber was the older Roman deity, while Bacchus was the Romanized version of the Greek Dionysus. They were sometimes merged in worship.",
          es: "Tanto Baco como Liber eran dioses romanos del vino. Liber era la deidad romana más antigua, mientras que Baco era la versión romanizada del Dionisio griego. A veces se fusionaban en el culto.",
          de: "Sowohl Bacchus als auch Liber waren römische Weingötter. Liber war die ältere römische Gottheit, während Bacchus die romanisierte Version des griechischen Dionysos war. Sie wurden manchmal in der Verehrung verschmolzen.",
          nl: "Zowel Bacchus als Liber waren Romeinse wijngoden. Liber was de oudere Romeinse godheid, terwijl Bacchus de geromaniseerde versie van de Griekse Dionysus was. Zij werden soms samengevoegd in aanbidding."
        }
      },
      {
        question: {
          en: "What does 'SPQR' stand for?",
          es: "¿Qué significa 'SPQR'?",
          de: "Wofür steht 'SPQR'?",
          nl: "Wat betekent 'SPQR'?"
        },
        options: [
          { en: "Senatus Populusque Romanus", es: "Senatus Populusque Romanus", de: "Senatus Populusque Romanus", nl: "Senatus Populusque Romanus" },
          { en: "Sacerdos Pontifex Quirinus Rex", es: "Sacerdos Pontifex Quirinus Rex", de: "Sacerdos Pontifex Quirinus Rex", nl: "Sacerdos Pontifex Quirinus Rex" },
          { en: "Salus Populi Quiritium Romana", es: "Salus Populi Quiritium Romana", de: "Salus Populi Quiritium Romana", nl: "Salus Populi Quiritium Romana" },
          { en: "Suprema Potestas Quiritium Romae", es: "Suprema Potestas Quiritium Romae", de: "Suprema Potestas Quiritium Romae", nl: "Suprema Potestas Quiritium Romae" }
        ],
        correct: 0,
        explanation: {
          en: "SPQR stands for 'Senatus Populusque Romanus' (The Senate and People of Rome). This phrase represented the government and citizens of Rome and appeared on standards, buildings, and official documents throughout Roman history.",
          es: "SPQR significa 'Senatus Populusque Romanus' (El Senado y Pueblo de Roma). Esta frase representaba el gobierno y ciudadanos de Roma y aparecía en estandartes, edificios y documentos oficiales a lo largo de la historia romana.",
          de: "SPQR steht für 'Senatus Populusque Romanus' (Senat und Volk von Rom). Dieser Ausdruck repräsentierte die Regierung und Bürger Roms und erschien auf Standarten, Gebäuden und offiziellen Dokumenten in der gesamten römischen Geschichte.",
          nl: "SPQR staat voor 'Senatus Populusque Romanus' (De Senaat en het Volk van Rome). Deze uitdrukking vertegenwoordigde de regering en burgers van Rome en verscheen op standaarden, gebouwen en officiële documenten door de Romeinse geschiedenis heen."
        }
      },
      {
        question: {
          en: "Who were the Dioscuri in Roman mythology?",
          es: "¿Quiénes eran los Dioscuros en la mitología romana?",
          de: "Wer waren die Dioskuren in der römischen Mythologie?",
          nl: "Wie waren de Dioscuri in de Romeinse mythologie?"
        },
        options: [
          { en: "Castor and Pollux", es: "Cástor y Pólux", de: "Castor und Pollux", nl: "Castor en Pollux" },
          { en: "Romulus and Remus", es: "Rómulo y Remo", de: "Romulus und Remus", nl: "Romulus en Remus" },
          { en: "Jupiter and Juno", es: "Júpiter y Juno", de: "Jupiter und Juno", nl: "Jupiter en Juno" },
          { en: "Mars and Venus", es: "Marte y Venus", de: "Mars und Venus", nl: "Mars en Venus" }
        ],
        correct: 0,
        explanation: {
          en: "The Dioscuri were Castor and Pollux, twin brothers who were sons of Jupiter and Leda. They were patron gods of sailors and were believed to appear as St. Elmo's fire during storms at sea.",
          es: "Los Dioscuros eran Cástor y Pólux, hermanos gemelos que eran hijos de Júpiter y Leda. Eran dioses patronos de los marineros y se creía que aparecían como el fuego de San Telmo durante las tormentas en el mar.",
          de: "Die Dioskuren waren Castor und Pollux, Zwillingsbrüder, die Söhne von Jupiter und Leda waren. Sie waren Schutzgötter der Seeleute und man glaubte, dass sie während Stürmen auf See als Elmsfeuer erschienen.",
          nl: "De Dioscuri waren Castor en Pollux, tweelingbroers die zonen waren van Jupiter en Leda. Zij waren beschermgoden van zeelieden en men geloofde dat zij verschenen als Sint-Elmusvuur tijdens stormen op zee."
        }
      },
      {
        question: {
          en: "What was the Roman name for the Greek goddess Athena?",
          es: "¿Cuál era el nombre romano de la diosa griega Atenea?",
          de: "Wie war der römische Name für die griechische Göttin Athena?",
          nl: "Wat was de Romeinse naam voor de Griekse godin Athena?"
        },
        options: [
          { en: "Minerva", es: "Minerva", de: "Minerva", nl: "Minerva" },
          { en: "Diana", es: "Diana", de: "Diana", nl: "Diana" },
          { en: "Juno", es: "Juno", de: "Juno", nl: "Juno" },
          { en: "Vesta", es: "Vesta", de: "Vesta", nl: "Vesta" }
        ],
        correct: 0,
        explanation: {
          en: "Minerva was the Roman goddess of wisdom, strategic warfare, and crafts, equivalent to the Greek Athena. She was part of the Capitoline Triad with Jupiter and Juno and was particularly revered by artisans and scholars.",
          es: "Minerva era la diosa romana de la sabiduría, la guerra estratégica y las artes, equivalente a la griega Atenea. Era parte de la Tríada Capitolina con Júpiter y Juno y era especialmente venerada por artesanos y eruditos.",
          de: "Minerva war die römische Göttin der Weisheit, strategischen Kriegsführung und Handwerke, entspricht der griechischen Athena. Sie war Teil der Kapitolinischen Triade mit Jupiter und Juno und wurde besonders von Handwerkern und Gelehrten verehrt.",
          nl: "Minerva was de Romeinse godin van wijsheid, strategische oorlogvoering en ambachten, gelijkwaardig aan de Griekse Athena. Zij was onderdeel van de Capitolijnse Drieëenheid met Jupiter en Juno en werd vooral vereerd door ambachtslieden en geleerden."
        }
      },
      {
        question: {
          en: "What was the Circus Maximus used for?",
          es: "¿Para qué se usaba el Circo Máximo?",
          de: "Wofür wurde der Circus Maximus verwendet?",
          nl: "Waarvoor werd het Circus Maximus gebruikt?"
        },
        options: [
          { en: "Chariot racing", es: "Carreras de carros", de: "Wagenrennen", nl: "Wagenrennen" },
          { en: "Gladiator fights", es: "Combates de gladiadores", de: "Gladiatorenkämpfe", nl: "Gladiatorengevechten" },
          { en: "Religious ceremonies", es: "Ceremonias religiosas", de: "Religiöse Zeremonien", nl: "Religieuze ceremonies" },
          { en: "Political meetings", es: "Reuniones políticas", de: "Politische Versammlungen", nl: "Politieke bijeenkomsten" }
        ],
        correct: 0,
        explanation: {
          en: "The Circus Maximus was primarily used for chariot racing, though it also hosted other spectacles. It could hold up to 250,000 spectators and was the largest entertainment venue in the Roman world.",
          es: "El Circo Máximo se usaba principalmente para carreras de carros, aunque también albergaba otros espectáculos. Podía albergar hasta 250,000 espectadores y era el lugar de entretenimiento más grande del mundo romano.",
          de: "Der Circus Maximus wurde hauptsächlich für Wagenrennen verwendet, beherbergte aber auch andere Spektakel. Er konnte bis zu 250.000 Zuschauer fassen und war die größte Unterhaltungsstätte der römischen Welt.",
          nl: "Het Circus Maximus werd voornamelijk gebruikt voor wagenrennen, hoewel het ook andere spektakels herbergde. Het kon tot 250.000 toeschouwers herbergen en was de grootste entertainmentlocatie in de Romeinse wereld."
        }
      },
      {
        question: {
          en: "Who was Terminus in Roman mythology?",
          es: "¿Quién era Terminus en la mitología romana?",
          de: "Wer war Terminus in der römischen Mythologie?",
          nl: "Wie was Terminus in de Romeinse mythologie?"
        },
        options: [
          { en: "God of boundaries", es: "Dios de los límites", de: "Gott der Grenzen", nl: "God van grenzen" },
          { en: "God of endings", es: "Dios de los finales", de: "Gott der Enden", nl: "God van eindigen" },
          { en: "God of time", es: "Dios del tiempo", de: "Gott der Zeit", nl: "God van tijd" },
          { en: "God of death", es: "Dios de la muerte", de: "Gott des Todes", nl: "God van dood" }
        ],
        correct: 0,
        explanation: {
          en: "Terminus was the Roman god of boundaries and landmarks. Stone markers called termini were placed to mark property boundaries, and Terminus was invoked to protect these sacred boundaries from being moved or violated.",
          es: "Terminus era el dios romano de los límites y puntos de referencia. Marcadores de piedra llamados termini se colocaban para marcar los límites de propiedad, y se invocaba a Terminus para proteger estos límites sagrados de ser movidos o violados.",
          de: "Terminus war der römische Gott der Grenzen und Grenzsteine. Steinmarkierungen namens Termini wurden gesetzt, um Eigentumsgrenzent zu markieren, und Terminus wurde angerufen, um diese heiligen Grenzen vor Verschiebung oder Verletzung zu schützen.",
          nl: "Terminus was de Romeinse god van grenzen en landmerken. Stenen markeringen genaamd termini werden geplaatst om eigendomsgrenzen te markeren, en Terminus werd aangeroepen om deze heilige grenzen te beschermen tegen verplaatsing of schending."
        }
      },
      {
        question: {
          en: "What was the sacred college of priests called that maintained Rome's eternal flame?",
          es: "¿Cómo se llamaba el colegio sagrado de sacerdotes que mantenía la llama eterna de Roma?",
          de: "Wie hieß das heilige Priesterkolleg, das Roms ewige Flamme aufrechterhielt?",
          nl: "Hoe heette het heilige college van priesters dat Rome's eeuwige vlam onderhield?"
        },
        options: [
          { en: "Vestal Virgins", es: "Vírgenes Vestales", de: "Vestalische Jungfrauen", nl: "Vestaalse Maagden" },
          { en: "Pontiffs", es: "Pontífices", de: "Pontifices", nl: "Pontifex" },
          { en: "Augurs", es: "Augures", de: "Auguren", nl: "Auguren" },
          { en: "Flamines", es: "Flámenes", de: "Flamines", nl: "Flamines" }
        ],
        correct: 0,
        explanation: {
          en: "The Vestal Virgins were priestesses who maintained the sacred flame of Vesta in her temple. They served for 30 years and were required to remain chaste. If the flame went out, it was considered a bad omen for Rome.",
          es: "Las Vírgenes Vestales eran sacerdotisas que mantenían la llama sagrada de Vesta en su templo. Servían durante 30 años y debían permanecer castas. Si la llama se apagaba, se consideraba un mal presagio para Roma.",
          de: "Die Vestalischen Jungfrauen waren Priesterinnen, die die heilige Flamme der Vesta in ihrem Tempel aufrechterhielten. Sie dienten 30 Jahre lang und mussten keusch bleiben. Wenn die Flamme erlosch, galt dies als schlechtes Omen für Rom.",
          nl: "De Vestaalse Maagden waren priesteressen die de heilige vlam van Vesta in haar tempel onderhielden. Zij dienden 30 jaar en moesten kuis blijven. Als de vlam uitging, werd dit beschouwd als een slecht voorteken voor Rome."
        }
      },
      {
        question: {
          en: "What was the Roman festival of the dead called?",
          es: "¿Cómo se llamaba el festival romano de los muertos?",
          de: "Wie hieß das römische Fest der Toten?",
          nl: "Hoe heette het Romeinse feest van de doden?"
        },
        options: [
          { en: "Lemuria", es: "Lemuria", de: "Lemuria", nl: "Lemuria" },
          { en: "Parentalia", es: "Parentalia", de: "Parentalia", nl: "Parentalia" },
          { en: "Both A and B", es: "Tanto A como B", de: "Sowohl A als auch B", nl: "Zowel A als B" },
          { en: "Feralia", es: "Feralia", de: "Feralia", nl: "Feralia" }
        ],
        correct: 2,
        explanation: {
          en: "Both Lemuria and Parentalia were Roman festivals honoring the dead. Lemuria in May focused on appeasing restless spirits (lemures), while Parentalia in February honored deceased family members. Feralia was the final day of Parentalia.",
          es: "Tanto Lemuria como Parentalia eran festivales romanos que honraban a los muertos. Lemuria en mayo se centraba en apaciguar a los espíritus inquietos (lemures), mientras que Parentalia en febrero honraba a los miembros fallecidos de la familia. Feralia era el último día de Parentalia.",
          de: "Sowohl Lemuria als auch Parentalia waren römische Feste zu Ehren der Toten. Lemuria im Mai konzentrierte sich darauf, unruhige Geister (Lemures) zu besänftigen, während Parentalia im Februar verstorbene Familienmitglieder ehrte. Feralia war der letzte Tag von Parentalia.",
          nl: "Zowel Lemuria als Parentalia waren Romeinse festivals ter ere van de doden. Lemuria in mei richtte zich op het sussen van rusteloze geesten (lemures), terwijl Parentalia in februari overleden familieleden eerde. Feralia was de laatste dag van Parentalia."
        }
      },
      {
        question: {
          en: "Who was Fortuna in Roman mythology?",
          es: "¿Quién era Fortuna en la mitología romana?",
          de: "Wer war Fortuna in der römischen Mythologie?",
          nl: "Wie was Fortuna in de Romeinse mythologie?"
        },
        options: [
          { en: "Goddess of luck and fortune", es: "Diosa de la suerte y la fortuna", de: "Göttin des Glücks und Schicksals", nl: "Godin van geluk en fortuin" },
          { en: "Goddess of victory", es: "Diosa de la victoria", de: "Göttin des Sieges", nl: "Godin van overwinning" },
          { en: "Goddess of justice", es: "Diosa de la justicia", de: "Göttin der Gerechtigkeit", nl: "Godin van gerechtigheid" },
          { en: "Goddess of wisdom", es: "Diosa de la sabiduría", de: "Göttin der Weisheit", nl: "Godin van wijsheid" }
        ],
        correct: 0,
        explanation: {
          en: "Fortuna was the Roman goddess of luck, fortune, and chance. She was often depicted with a wheel (Wheel of Fortune) symbolizing the changeable nature of luck, and she could bring both good and bad fortune.",
          es: "Fortuna era la diosa romana de la suerte, la fortuna y el azar. A menudo se la representaba con una rueda (Rueda de la Fortuna) simbolizando la naturaleza cambiante de la suerte, y podía traer tanto buena como mala fortuna.",
          de: "Fortuna war die römische Göttin des Glücks, Schicksals und Zufalls. Sie wurde oft mit einem Rad (Glücksrad) dargestellt, das die wechselhafte Natur des Glücks symbolisierte, und sie konnte sowohl gutes als auch schlechtes Glück bringen.",
          nl: "Fortuna was de Romeinse godin van geluk, fortuin en toeval. Zij werd vaak afgebeeld met een rad (Rad van Fortuin) dat de veranderlijke aard van geluk symboliseerde, en zij kon zowel goed als slecht geluk brengen."
        }
      },
      {
        question: {
          en: "What were the Roman household gods called?",
          es: "¿Cómo se llamaban los dioses del hogar romanos?",
          de: "Wie hießen die römischen Hausgötter?",
          nl: "Hoe heetten de Romeinse huisgoden?"
        },
        options: [
          { en: "Lares and Penates", es: "Lares y Penates", de: "Laren und Penaten", nl: "Lares en Penates" },
          { en: "Manes and Lemures", es: "Manes y Lemures", de: "Manen und Lemuren", nl: "Manes en Lemures" },
          { en: "Genii and Numina", es: "Genios y Núminas", de: "Genien und Numina", nl: "Genii en Numina" },
          { en: "Larvae and Larvae", es: "Larvae y Larvae", de: "Larven und Larven", nl: "Larvae en Larvae" }
        ],
        correct: 0,
        explanation: {
          en: "Lares and Penates were Roman household gods. Lares protected the home and family, while Penates guarded the pantry and food stores. Every Roman home had shrines (lararia) where these gods were honored daily.",
          es: "Los Lares y Penates eran dioses del hogar romanos. Los Lares protegían el hogar y la familia, mientras que los Penates guardaban la despensa y las reservas de comida. Cada hogar romano tenía santuarios (lararia) donde estos dioses eran honrados diariamente.",
          de: "Laren und Penaten waren römische Hausgötter. Laren schützten Heim und Familie, während Penaten die Speisekammer und Nahrungsvorräte hüteten. Jedes römische Haus hatte Schreine (Lararia), wo diese Götter täglich verehrt wurden.",
          nl: "Lares en Penates waren Romeinse huisgoden. Lares beschermden huis en familie, terwijl Penates de voorraadkamer en voedselvoorraden bewaakten. Elk Romeins huis had heiligdommen (lararia) waar deze goden dagelijks werden geëerd."
        }
      },
      {
        question: {
          en: "Who was the Roman god of the underworld?",
          es: "¿Quién era el dios romano del inframundo?",
          de: "Wer war der römische Gott der Unterwelt?",
          nl: "Wie was de Romeinse god van de onderwereld?"
        },
        options: [
          { en: "Pluto", es: "Plutón", de: "Pluto", nl: "Pluto" },
          { en: "Dis Pater", es: "Dis Pater", de: "Dis Pater", nl: "Dis Pater" },
          { en: "Orcus", es: "Orco", de: "Orcus", nl: "Orcus" },
          { en: "All of the above", es: "Todas las anteriores", de: "Alle oben genannten", nl: "Alle bovenstaande" }
        ],
        correct: 3,
        explanation: {
          en: "All three names referred to aspects of the Roman underworld god. Pluto (from Greek Hades) was the most common name, Dis Pater was the older Roman name meaning 'Rich Father,' and Orcus was associated with death and punishment.",
          es: "Los tres nombres se referían a aspectos del dios romano del inframundo. Plutón (del griego Hades) era el nombre más común, Dis Pater era el nombre romano más antiguo que significa 'Padre Rico,' y Orco estaba asociado con la muerte y el castigo.",
          de: "Alle drei Namen bezogen sich auf Aspekte des römischen Unterweltgottes. Pluto (vom griechischen Hades) war der häufigste Name, Dis Pater war der ältere römische Name, der 'Reicher Vater' bedeutete, und Orcus war mit Tod und Bestrafung verbunden.",
          nl: "Alle drie namen verwezen naar aspecten van de Romeinse onderwereldgod. Pluto (van de Griekse Hades) was de meest gebruikelijke naam, Dis Pater was de oudere Romeinse naam die 'Rijke Vader' betekende, en Orcus was geassocieerd met dood en straf."
        }
      },
      {
        question: {
          en: "What was the Roman festival celebrating the return of spring called?",
          es: "¿Cómo se llamaba el festival romano que celebraba el regreso de la primavera?",
          de: "Wie hieß das römische Fest zur Feier der Rückkehr des Frühlings?",
          nl: "Hoe heette het Romeinse feest dat de terugkeer van de lente vierde?"
        },
        options: [
          { en: "Floralia", es: "Floralia", de: "Floralia", nl: "Floralia" },
          { en: "Cerealia", es: "Cerealia", de: "Cerealia", nl: "Cerealia" },
          { en: "Robigalia", es: "Robigalia", de: "Robigalia", nl: "Robigalia" },
          { en: "Vinalia", es: "Vinalia", de: "Vinalia", nl: "Vinalia" }
        ],
        correct: 0,
        explanation: {
          en: "Floralia was the Roman festival dedicated to Flora, goddess of flowers and spring. Held from April 28 to May 3, it celebrated the blooming of flowers and the renewal of life with colorful decorations and festivities.",
          es: "Floralia era el festival romano dedicado a Flora, diosa de las flores y la primavera. Celebrado del 28 de abril al 3 de mayo, celebraba la floración de las flores y la renovación de la vida con decoraciones coloridas y festividades.",
          de: "Floralia war das römische Fest zu Ehren von Flora, der Göttin der Blumen und des Frühlings. Vom 28. April bis 3. Mai gefeiert, zelebrierte es das Blühen der Blumen und die Erneuerung des Lebens mit bunten Dekorationen und Festivitäten.",
          nl: "Floralia was het Romeinse feest gewijd aan Flora, godin van bloemen en lente. Gehouden van 28 april tot 3 mei, vierde het de bloei van bloemen en de vernieuwing van het leven met kleurrijke decoraties en festiviteiten."
        }
      },
      {
        question: {
          en: "Who was Janus in Roman mythology?",
          es: "¿Quién era Jano en la mitología romana?",
          de: "Wer war Janus in der römischen Mythologie?",
          nl: "Wie was Janus in de Romeinse mythologie?"
        },
        options: [
          { en: "Two-faced god of beginnings and transitions", es: "Dios de dos caras de los comienzos y transiciones", de: "Zweisichtiger Gott der Anfänge und Übergänge", nl: "Tweegezichtige god van begin en overgangen" },
          { en: "God of doors and gateways", es: "Dios de las puertas y portales", de: "Gott der Türen und Tore", nl: "God van deuren en poorten" },
          { en: "God of past and future", es: "Dios del pasado y futuro", de: "Gott der Vergangenheit und Zukunft", nl: "God van verleden en toekomst" },
          { en: "All of the above", es: "Todas las anteriores", de: "Alle oben genannten", nl: "Alle bovenstaande" }
        ],
        correct: 3,
        explanation: {
          en: "Janus was the uniquely Roman god with two faces looking in opposite directions, representing his dominion over beginnings, transitions, doorways, and the ability to see both past and future. January is named after him.",
          es: "Jano era el dios únicamente romano con dos caras mirando en direcciones opuestas, representando su dominio sobre los comienzos, transiciones, puertas y la habilidad de ver tanto el pasado como el futuro. Enero lleva su nombre.",
          de: "Janus war der einzigartig römische Gott mit zwei Gesichtern, die in entgegengesetzte Richtungen blickten, was seine Herrschaft über Anfänge, Übergänge, Türen und die Fähigkeit, sowohl Vergangenheit als auch Zukunft zu sehen, repräsentierte. Januar ist nach ihm benannt.",
          nl: "Janus was de uniek Romeinse god met twee gezichten die in tegenovergestelde richtingen keken, wat zijn heerschappij over begin, overgangen, deuren en het vermogen om zowel verleden als toekomst te zien vertegenwoordigde. Januari is naar hem vernoemd."
        }
      },
      {
        question: {
          en: "What was the Roman practice of examining animal entrails for omens called?",
          es: "¿Cómo se llamaba la práctica romana de examinar las entrañas de animales para presagios?",
          de: "Wie hieß die römische Praxis, Tiereingeweide auf Vorzeichen zu untersuchen?",
          nl: "Hoe heette de Romeinse praktijk van het onderzoeken van dierengewanden voor voortekens?"
        },
        options: [
          { en: "Haruspicy", es: "Haruspicia", de: "Haruspizin", nl: "Haruspicie" },
          { en: "Augury", es: "Augurio", de: "Augurium", nl: "Augurium" },
          { en: "Auspicy", es: "Auspicio", de: "Auspizium", nl: "Auspicium" },
          { en: "Extispicy", es: "Extispicia", de: "Extispizin", nl: "Extispicie" }
        ],
        correct: 0,
        explanation: {
          en: "Haruspicy was the Roman practice of divination by examining the entrails, especially the liver, of sacrificed animals. Haruspices (priests) would interpret the size, color, and markings to predict the future or divine the gods' will.",
          es: "La haruspicia era la práctica romana de adivinación examinando las entrañas, especialmente el hígado, de animales sacrificados. Los harúspices (sacerdotes) interpretaban el tamaño, color y marcas para predecir el futuro o adivinar la voluntad de los dioses.",
          de: "Haruspizin war die römische Praxis der Wahrsagung durch Untersuchung der Eingeweide, besonders der Leber, geopferter Tiere. Haruspices (Priester) interpretierten Größe, Farbe und Markierungen, um die Zukunft vorherzusagen oder den Willen der Götter zu ergründen.",
          nl: "Haruspicie was de Romeinse praktijk van waarzeggerij door het onderzoeken van de ingewanden, vooral de lever, van geofferde dieren. Haruspices (priesters) interpreteerden de grootte, kleur en markeringen om de toekomst te voorspellen of de wil van de goden te achterhalen."
        }
      },
      {
        question: {
          en: "Who was Pomona in Roman mythology?",
          es: "¿Quién era Pomona en la mitología romana?",
          de: "Wer war Pomona in der römischen Mythologie?",
          nl: "Wie was Pomona in de Romeinse mythologie?"
        },
        options: [
          { en: "Goddess of fruit trees and gardens", es: "Diosa de los árboles frutales y jardines", de: "Göttin der Obstbäume und Gärten", nl: "Godin van fruitbomen en tuinen" },
          { en: "Goddess of flowers", es: "Diosa de las flores", de: "Göttin der Blumen", nl: "Godin van bloemen" },
          { en: "Goddess of grain", es: "Diosa del grano", de: "Göttin des Getreides", nl: "Godin van graan" },
          { en: "Goddess of vineyards", es: "Diosa de los viñedos", de: "Göttin der Weinberge", nl: "Godin van wijngaarden" }
        ],
        correct: 0,
        explanation: {
          en: "Pomona was the uniquely Roman goddess of fruit trees, gardens, and orchards. She had no Greek equivalent and represented the Roman appreciation for cultivated fruit. Her festival, Pomonal, celebrated the harvest of apples and other fruits.",
          es: "Pomona era la diosa únicamente romana de los árboles frutales, jardines y huertos. No tenía equivalente griego y representaba la apreciación romana por la fruta cultivada. Su festival, Pomonal, celebraba la cosecha de manzanas y otras frutas.",
          de: "Pomona war die einzigartig römische Göttin der Obstbäume, Gärten und Obstplantagen. Sie hatte keine griechische Entsprechung und repräsentierte die römische Wertschätzung für kultivierte Früchte. Ihr Fest, Pomonal, feierte die Ernte von Äpfeln und anderen Früchten.",
          nl: "Pomona was de uniek Romeinse godin van fruitbomen, tuinen en boomgaarden. Zij had geen Griekse equivalent en vertegenwoordigde de Romeinse waardering voor gekweekt fruit. Haar festival, Pomonal, vierde de oogst van appels en andere vruchten."
        }
      },
      {
        question: {
          en: "What was the Roman concept of divine will or divine presence in all things called?",
          es: "¿Cómo se llamaba el concepto romano de voluntad divina o presencia divina en todas las cosas?",
          de: "Wie hieß das römische Konzept des göttlichen Willens oder der göttlichen Gegenwart in allen Dingen?",
          nl: "Hoe heette het Romeinse concept van goddelijke wil of goddelijke aanwezigheid in alle dingen?"
        },
        options: [
          { en: "Numen", es: "Numen", de: "Numen", nl: "Numen" },
          { en: "Mana", es: "Mana", de: "Mana", nl: "Mana" },
          { en: "Genius", es: "Genio", de: "Genius", nl: "Genius" },
          { en: "Virtus", es: "Virtus", de: "Virtus", nl: "Virtus" }
        ],
        correct: 0,
        explanation: {
          en: "Numen was the Roman concept of divine power or presence that could inhabit places, objects, or people. It represented the spiritual force that made something sacred or powerful, and Romans believed numen could be found in natural features like groves, springs, and mountains.",
          es: "Numen era el concepto romano de poder divino o presencia que podía habitar lugares, objetos o personas. Representaba la fuerza espiritual que hacía algo sagrado o poderoso, y los romanos creían que el numen se podía encontrar en características naturales como bosques, manantiales y montañas.",
          de: "Numen war das römische Konzept göttlicher Macht oder Gegenwart, die Orte, Gegenstände oder Menschen bewohnen konnte. Es repräsentierte die spirituelle Kraft, die etwas heilig oder mächtig machte, und die Römer glaubten, dass Numen in natürlichen Eigenschaften wie Hainen, Quellen und Bergen zu finden war.",
          nl: "Numen was het Romeinse concept van goddelijke macht of aanwezigheid die plaatsen, objecten of mensen kon bewonen. Het vertegenwoordigde de spirituele kracht die iets heilig of krachtig maakte, en Romeinen geloofden dat numen te vinden was in natuurlijke kenmerken zoals bossen, bronnen en bergen."
        }
      },
      {
        question: {
          en: "Who was the Roman goddess of the hunt?",
          es: "¿Quién era la diosa romana de la caza?",
          de: "Wer war die römische Göttin der Jagd?",
          nl: "Wie was de Romeinse godin van de jacht?"
        },
        options: [
          { en: "Diana", es: "Diana", de: "Diana", nl: "Diana" },
          { en: "Minerva", es: "Minerva", de: "Minerva", nl: "Minerva" },
          { en: "Venus", es: "Venus", de: "Venus", nl: "Venus" },
          { en: "Juno", es: "Juno", de: "Juno", nl: "Juno" }
        ],
        correct: 0,
        explanation: {
          en: "Diana was the Roman goddess of the hunt, wilderness, wild animals, and childbirth, equivalent to the Greek Artemis. She was often depicted with a bow and accompanied by hunting dogs, and was protector of virginity and women.",
          es: "Diana era la diosa romana de la caza, la naturaleza salvaje, los animales salvajes y el parto, equivalente a la griega Artemisa. A menudo se la representaba con un arco y acompañada por perros de caza, y era protectora de la virginidad y las mujeres.",
          de: "Diana war die römische Göttin der Jagd, Wildnis, wilden Tiere und Geburt, entspricht der griechischen Artemis. Sie wurde oft mit einem Bogen dargestellt und von Jagdhunden begleitet, und war Beschützerin der Jungfräulichkeit und Frauen.",
          nl: "Diana was de Romeinse godin van de jacht, wildernis, wilde dieren en bevalling, gelijkwaardig aan de Griekse Artemis. Zij werd vaak afgebeeld met een boog en vergezeld door jachthonden, en was beschermster van maagdelijkheid en vrouwen."
        }
      },
      {
        question: {
          en: "What was the Roman name for the Greek god Hermes?",
          es: "¿Cuál era el nombre romano del dios griego Hermes?",
          de: "Wie war der römische Name für den griechischen Gott Hermes?",
          nl: "Wat was de Romeinse naam voor de Griekse god Hermes?"
        },
        options: [
          { en: "Mercury", es: "Mercurio", de: "Mercurius", nl: "Mercurius" },
          { en: "Apollo", es: "Apolo", de: "Apollo", nl: "Apollo" },
          { en: "Mars", es: "Marte", de: "Mars", nl: "Mars" },
          { en: "Vulcan", es: "Vulcano", de: "Vulcanus", nl: "Vulcanus" }
        ],
        correct: 0,
        explanation: {
          en: "Mercury was the Roman equivalent of the Greek god Hermes. He was the messenger of the gods, god of trade, commerce, communication, and travelers. He was typically depicted with winged sandals and a caduceus (winged staff).",
          es: "Mercurio era el equivalente romano del dios griego Hermes. Era el mensajero de los dioses, dios del comercio, la comunicación y los viajeros. Típicamente se le representaba con sandalias aladas y un caduceo (bastón alado).",
          de: "Mercurius war das römische Äquivalent des griechischen Gottes Hermes. Er war der Bote der Götter, Gott des Handels, Geschäfts, der Kommunikation und Reisenden. Er wurde typischerweise mit geflügelten Sandalen und einem Caduceus (geflügelter Stab) dargestellt.",
          nl: "Mercurius was het Romeinse equivalent van de Griekse god Hermes. Hij was de boodschapper van de goden, god van handel, commercie, communicatie en reizigers. Hij werd typisch afgebeeld met gevleugelde sandalen en een caduceus (gevleugelde staf)."
        }
      },
      {
        question: {
          en: "What was the Roman ceremony of making someone a god called?",
          es: "¿Cómo se llamaba la ceremonia romana de hacer a alguien un dios?",
          de: "Wie hieß die römische Zeremonie, jemanden zu einem Gott zu machen?",
          nl: "Hoe heette de Romeinse ceremonie van iemand tot god maken?"
        },
        options: [
          { en: "Apotheosis", es: "Apoteosis", de: "Apotheose", nl: "Apotheose" },
          { en: "Consecratio", es: "Consecratio", de: "Consecratio", nl: "Consecratio" },
          { en: "Both A and B", es: "Tanto A como B", de: "Sowohl A als auch B", nl: "Zowel A als B" },
          { en: "Divinization", es: "Divinización", de: "Divinisierung", nl: "Divinisatie" }
        ],
        correct: 2,
        explanation: {
          en: "Both Apotheosis and Consecratio referred to the process of deification in Rome. Apotheosis was the Greek term adopted by Romans, while Consecratio was the specifically Roman term for the official ceremony making a deceased emperor into a god.",
          es: "Tanto Apoteosis como Consecratio se referían al proceso de deificación en Roma. Apoteosis era el término griego adoptado por los romanos, mientras que Consecratio era el término específicamente romano para la ceremonia oficial que convertía a un emperador fallecido en un dios.",
          de: "Sowohl Apotheose als auch Consecratio bezogen sich auf den Vergöttlichungsprozess in Rom. Apotheose war der von den Römern übernommene griechische Begriff, während Consecratio der spezifisch römische Begriff für die offizielle Zeremonie war, die einen verstorbenen Kaiser zu einem Gott machte.",
          nl: "Zowel Apotheose als Consecratio verwezen naar het proces van vergoding in Rome. Apotheose was de Griekse term die door Romeinen werd overgenomen, terwijl Consecratio de specifiek Romeinse term was voor de officiële ceremonie die een overleden keizer tot god maakte."
        }
      },
      {
        question: {
          en: "Who was the Roman god of fire and the forge?",
          es: "¿Quién era el dios romano del fuego y la fragua?",
          de: "Wer war der römische Gott des Feuers und der Schmiede?",
          nl: "Wie was de Romeinse god van vuur en de smederij?"
        },
        options: [
          { en: "Vulcan", es: "Vulcano", de: "Vulcanus", nl: "Vulcanus" },
          { en: "Mars", es: "Marte", de: "Mars", nl: "Mars" },
          { en: "Mercury", es: "Mercurio", de: "Mercurius", nl: "Mercurius" },
          { en: "Apollo", es: "Apolo", de: "Apollo", nl: "Apollo" }
        ],
        correct: 0,
        explanation: {
          en: "Vulcan was the Roman god of fire, metalworking, and the forge, equivalent to the Greek Hephaestus. He was the divine blacksmith who crafted weapons and tools for gods and heroes. Volcanoes were believed to be his workshops.",
          es: "Vulcano era el dios romano del fuego, la metalurgia y la fragua, equivalente al griego Hefesto. Era el herrero divino que forjaba armas y herramientas para dioses y héroes. Se creía que los volcanes eran sus talleres.",
          de: "Vulcanus war der römische Gott des Feuers, der Metallbearbeitung und der Schmiede, entspricht dem griechischen Hephaistos. Er war der göttliche Schmied, der Waffen und Werkzeuge für Götter und Helden schmiedete. Vulkane galten als seine Werkstätten.",
          nl: "Vulcanus was de Romeinse god van vuur, metaalbewerking en de smederij, gelijkwaardig aan de Griekse Hephaistos. Hij was de goddelijke smid die wapens en gereedschappen smeedde voor goden en helden. Vulkanen werden beschouwd als zijn werkplaatsen."
        }
      }
    ]
  };

  if (typeof window.addLevel === 'function') {
    window.addLevel('mind-bender/mythology', level9);
  }
})();
