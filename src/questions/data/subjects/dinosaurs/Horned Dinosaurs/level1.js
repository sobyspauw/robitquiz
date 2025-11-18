// Horned Dinosaurs Quiz - Level 1: Basic Knowledge about Horned Dinosaurs
(function() {
  const level1 = {
    name: {
      en: "Horned Dinosaurs Level 1",
      es: "Dinosaurios con Cuernos Nivel 1",
      de: "Gehörnte Dinosaurier Stufe 1",
      nl: "Gehoornde Dino's Level 1"
    },
    questions: [
      {
        question: {
          en: "What is the most famous horned dinosaur?",
          es: "¿Cuál es el dinosaurio con cuernos más famoso?",
          de: "Was ist der berühmteste gehörnte Dinosaurier?",
          nl: "Wat is de beroemdste gehoornde dinosaurus?"
        },
        options: [
          { en: "Triceratops", es: "Triceratops", de: "Triceratops", nl: "Triceratops" },
          { en: "T-Rex", es: "T-Rex", de: "T-Rex", nl: "T-Rex" },
          { en: "Velociraptor", es: "Velociraptor", de: "Velociraptor", nl: "Velociraptor" },
          { en: "Brachiosaurus", es: "Brachiosaurus", de: "Brachiosaurus", nl: "Brachiosaurus" }
        ],
        correct: 0,
        explanation: {
          en: "Triceratops is the most famous horned dinosaur with its three distinctive facial horns and large bony frill.",
          es: "Triceratops es el dinosaurio con cuernos más famoso con sus tres cuernos faciales distintivos y gran volante óseo.",
          de: "Triceratops ist der berühmteste gehörnte Dinosaurier mit seinen drei markanten Gesichtshörnern und großem Knochenkragen.",
          nl: "Triceratops is de beroemdste gehoornde dinosaurus met zijn drie kenmerkende gezichtshoorns en grote benige kraag."
        }
      },
      {
        question: {
          en: "How many horns did Triceratops have on its face?",
          es: "¿Cuántos cuernos tenía Triceratops en su cara?",
          de: "Wie viele Hörner hatte Triceratops im Gesicht?",
          nl: "Hoeveel hoorns had Triceratops op zijn gezicht?"
        },
        options: [
          { en: "Three", es: "Tres", de: "Drei", nl: "Drie" },
          { en: "One", es: "Uno", de: "Eins", nl: "Een" },
          { en: "Five", es: "Cinco", de: "Fünf", nl: "Vijf" },
          { en: "None", es: "Ninguno", de: "Keine", nl: "Geen" }
        ],
        correct: 0,
        explanation: {
          en: "Triceratops had three horns - one on its nose and two above its eyes, which is why its name means 'three-horned face'.",
          es: "Triceratops tenía tres cuernos - uno en su nariz y dos sobre sus ojos, por eso su nombre significa 'cara de tres cuernos'.",
          de: "Triceratops hatte drei Hörner - eines auf der Nase und zwei über den Augen, daher bedeutet sein Name 'dreigehörntes Gesicht'.",
          nl: "Triceratops had drie hoorns - één op zijn neus en twee boven zijn ogen, daarom betekent zijn naam 'driehoornig gezicht'."
        }
      },
      {
        question: {
          en: "What did horned dinosaurs eat?",
          es: "¿Qué comían los dinosaurios con cuernos?",
          de: "Was fraßen gehörnte Dinosaurier?",
          nl: "Wat aten gehoornde dinosaurussen?"
        },
        options: [
          { en: "Plants", es: "Plantas", de: "Pflanzen", nl: "Planten" },
          { en: "Meat", es: "Carne", de: "Fleisch", nl: "Vlees" },
          { en: "Fish", es: "Pescado", de: "Fisch", nl: "Vis" },
          { en: "Rocks", es: "Rocas", de: "Steine", nl: "Stenen" }
        ],
        correct: 0,
        explanation: {
          en: "All horned dinosaurs were herbivores, meaning they only ate plants like ferns, cycads, and conifers.",
          es: "Todos los dinosaurios con cuernos eran herbívoros, lo que significa que solo comían plantas como helechos, cícadas y coníferas.",
          de: "Alle gehörnten Dinosaurier waren Pflanzenfresser, das heißt sie fraßen nur Pflanzen wie Farne, Palmfarne und Nadelbäume.",
          nl: "Alle gehoornde dinosaurussen waren planteneters, wat betekent dat ze alleen planten aten zoals varens, cycaden en coniferen."
        }
      },
      {
        question: {
          en: "What was the large bony plate on the back of a horned dinosaur's head called?",
          es: "¿Cómo se llamaba la gran placa ósea en la parte posterior de la cabeza de un dinosaurio con cuernos?",
          de: "Wie nannte man die große Knochenplatte am Hinterkopf eines gehörnten Dinosauriers?",
          nl: "Hoe heette de grote benige plaat aan de achterkant van het hoofd van een gehoornde dinosaurus?"
        },
        options: [
          { en: "A frill", es: "Un volante", de: "Ein Kragen", nl: "Een kraag" },
          { en: "A hat", es: "Un sombrero", de: "Ein Hut", nl: "Een hoed" },
          { en: "A crown", es: "Una corona", de: "Eine Krone", nl: "Een kroon" },
          { en: "A shell", es: "Un caparazón", de: "Eine Schale", nl: "Een schaal" }
        ],
        correct: 0,
        explanation: {
          en: "The large bony plate was called a frill, which protected the dinosaur's neck and may have been used for display.",
          es: "La gran placa ósea se llamaba volante, que protegía el cuello del dinosaurio y podría haberse usado para exhibición.",
          de: "Die große Knochenplatte wurde Kragen genannt, der den Hals des Dinosauriers schützte und möglicherweise zur Schau verwendet wurde.",
          nl: "De grote benige plaat werd een kraag genoemd, die de nek van de dinosaurus beschermde en mogelijk voor vertoon werd gebruikt."
        }
      },
      {
        question: {
          en: "Were horned dinosaurs big or small?",
          es: "¿Los dinosaurios con cuernos eran grandes o pequeños?",
          de: "Waren gehörnte Dinosaurier groß oder klein?",
          nl: "Waren gehoornde dinosaurussen groot of klein?"
        },
        options: [
          { en: "Most were very large", es: "La mayoría eran muy grandes", de: "Die meisten waren sehr groß", nl: "De meeste waren erg groot" },
          { en: "All were tiny", es: "Todos eran diminutos", de: "Alle waren winzig", nl: "Allemaal waren piepklein" },
          { en: "They were invisible", es: "Eran invisibles", de: "Sie waren unsichtbar", nl: "Ze waren onzichtbaar" },
          { en: "They could change size", es: "Podían cambiar de tamaño", de: "Sie konnten ihre Größe ändern", nl: "Ze konden van grootte veranderen" }
        ],
        correct: 0,
        explanation: {
          en: "Most horned dinosaurs were large animals, with some like Triceratops growing up to 9 meters (30 feet) long.",
          es: "La mayoría de los dinosaurios con cuernos eran animales grandes, algunos como Triceratops crecían hasta 9 metros de largo.",
          de: "Die meisten gehörnten Dinosaurier waren große Tiere, einige wie Triceratops wurden bis zu 9 Meter lang.",
          nl: "De meeste gehoornde dinosaurussen waren grote dieren, sommige zoals Triceratops groeiden tot 9 meter lang."
        }
      },
      {
        question: {
          en: "What group of dinosaurs do horned dinosaurs belong to?",
          es: "¿A qué grupo de dinosaurios pertenecen los dinosaurios con cuernos?",
          de: "Zu welcher Dinosauriergruppe gehören gehörnte Dinosaurier?",
          nl: "Tot welke groep dinosaurussen behoren gehoornde dinosaurussen?"
        },
        options: [
          { en: "Ceratopsians", es: "Ceratopsianos", de: "Ceratopsier", nl: "Ceratopsiërs" },
          { en: "Theropods", es: "Terópodos", de: "Theropoden", nl: "Theropoden" },
          { en: "Sauropods", es: "Saurópodos", de: "Sauropoden", nl: "Sauropoden" },
          { en: "Flying dinosaurs", es: "Dinosaurios voladores", de: "Fliegende Dinosaurier", nl: "Vliegende dinosaurussen" }
        ],
        correct: 0,
        explanation: {
          en: "Horned dinosaurs belong to a group called Ceratopsians, which means 'horned faces' in Greek.",
          es: "Los dinosaurios con cuernos pertenecen a un grupo llamado Ceratopsianos, que significa 'caras con cuernos' en griego.",
          de: "Gehörnte Dinosaurier gehören zu einer Gruppe namens Ceratopsier, was auf Griechisch 'gehörnte Gesichter' bedeutet.",
          nl: "Gehoornde dinosaurussen behoren tot een groep genaamd Ceratopsiërs, wat 'gehoornde gezichten' betekent in het Grieks."
        }
      },
      {
        question: {
          en: "Did baby horned dinosaurs have big horns?",
          es: "¿Los bebés dinosaurios con cuernos tenían cuernos grandes?",
          de: "Hatten Baby-Dinosaurier mit Hörnern große Hörner?",
          nl: "Hadden baby gehoornde dinosaurussen grote hoorns?"
        },
        options: [
          { en: "No, horns grew as they got older", es: "No, los cuernos crecían cuando envejecían", de: "Nein, Hörner wuchsen wenn sie älter wurden", nl: "Nee, hoorns groeiden naarmate ze ouder werden" },
          { en: "Yes, they were born with full horns", es: "Sí, nacían con cuernos completos", de: "Ja, sie wurden mit vollen Hörnern geboren", nl: "Ja, ze werden geboren met volle hoorns" },
          { en: "They had wings instead", es: "Tenían alas en su lugar", de: "Sie hatten stattdessen Flügel", nl: "Ze hadden vleugels in plaats daarvan" },
          { en: "They had tentacles", es: "Tenían tentáculos", de: "Sie hatten Tentakel", nl: "Ze hadden tentakels" }
        ],
        correct: 0,
        explanation: {
          en: "Baby horned dinosaurs had small bumps that grew into horns as they matured, just like how deer antlers grow.",
          es: "Los bebés dinosaurios con cuernos tenían pequeños bultos que crecían en cuernos cuando maduraban, como crecen las astas de los ciervos.",
          de: "Baby-Dinosaurier mit Hörnern hatten kleine Beulen, die zu Hörnern heranwuchsen, genau wie Hirschgeweihe wachsen.",
          nl: "Baby gehoornde dinosaurussen hadden kleine bultjes die uitgroeiden tot hoorns naarmate ze volwassen werden, net zoals hertengeweien groeien."
        }
      },
      {
        question: {
          en: "How did horned dinosaurs protect themselves?",
          es: "¿Cómo se protegían los dinosaurios con cuernos?",
          de: "Wie schützten sich gehörnte Dinosaurier?",
          nl: "Hoe beschermden gehoornde dinosaurussen zichzelf?"
        },
        options: [
          { en: "Horns and frills", es: "Usando sus cuernos y volantes", de: "Mit ihren Hörnern und Kragen", nl: "Met hun hoorns en kragen" },
          { en: "By flying away", es: "Volando", de: "Durch Wegfliegen", nl: "Door weg te vliegen" },
          { en: "By becoming invisible", es: "Volviéndose invisibles", de: "Durch Unsichtbarwerden", nl: "Door onzichtbaar te worden" },
          { en: "By swimming deep", es: "Nadando profundo", de: "Durch tiefes Tauchen", nl: "Door diep te zwemmen" }
        ],
        correct: 0,
        explanation: {
          en: "Horned dinosaurs used their sharp horns and protective frills to defend against predators like T-Rex.",
          es: "Los dinosaurios con cuernos usaban sus cuernos afilados y volantes protectores para defenderse de depredadores como T-Rex.",
          de: "Gehörnte Dinosaurier nutzten ihre scharfen Hörner und schützenden Kragen zur Verteidigung gegen Raubtiere wie T-Rex.",
          nl: "Gehoornde dinosaurussen gebruikten hun scherpe hoorns en beschermende kragen om zich te verdedigen tegen roofdieren zoals T-Rex."
        }
      },
      {
        question: {
          en: "When did horned dinosaurs live?",
          es: "¿Cuándo vivieron los dinosaurios con cuernos?",
          de: "Wann lebten gehörnte Dinosaurier?",
          nl: "Wanneer leefden gehoornde dinosaurussen?"
        },
        options: [
          { en: "Late Cretaceous", es: "Durante el período Cretácico tardío", de: "Während der späten Kreidezeit", nl: "Tijdens het late Krijt tijdperk" },
          { en: "Yesterday", es: "Ayer", de: "Gestern", nl: "Gisteren" },
          { en: "In the future", es: "En el futuro", de: "In der Zukunft", nl: "In de toekomst" },
          { en: "They still live today", es: "Todavía viven hoy", de: "Sie leben heute noch", nl: "Ze leven nog steeds" }
        ],
        correct: 0,
        explanation: {
          en: "Most horned dinosaurs lived during the late Cretaceous period, about 90 to 66 million years ago.",
          es: "La mayoría de los dinosaurios con cuernos vivieron durante el período Cretácico tardío, hace unos 90 a 66 millones de años.",
          de: "Die meisten gehörnten Dinosaurier lebten während der späten Kreidezeit, vor etwa 90 bis 66 Millionen Jahren.",
          nl: "De meeste gehoornde dinosaurussen leefden tijdens het late Krijt tijdperk, ongeveer 90 tot 66 miljoen jaar geleden."
        }
      },
      {
        question: {
          en: "What does the name 'Triceratops' mean?",
          es: "¿Qué significa el nombre 'Triceratops'?",
          de: "Was bedeutet der Name 'Triceratops'?",
          nl: "Wat betekent de naam 'Triceratops'?"
        },
        options: [
          { en: "3-horned face", es: "Cara de tres cuernos", de: "Dreigehörntes Gesicht", nl: "Driehoornig gezicht" },
          { en: "Big lizard", es: "Lagarto grande", de: "Große Echse", nl: "Grote hagedis" },
          { en: "Fast runner", es: "Corredor rápido", de: "Schneller Läufer", nl: "Snelle renner" },
          { en: "Sharp teeth", es: "Dientes afilados", de: "Scharfe Zähne", nl: "Scherpe tanden" }
        ],
        correct: 0,
        explanation: {
          en: "Triceratops means 'three-horned face' in Greek - 'tri' means three, 'ceras' means horn, and 'ops' means face.",
          es: "Triceratops significa 'cara de tres cuernos' en griego - 'tri' significa tres, 'ceras' significa cuerno y 'ops' significa cara.",
          de: "Triceratops bedeutet auf Griechisch 'dreigehörntes Gesicht' - 'tri' bedeutet drei, 'ceras' bedeutet Horn und 'ops' bedeutet Gesicht.",
          nl: "Triceratops betekent 'driehoornig gezicht' in het Grieks - 'tri' betekent drie, 'ceras' betekent hoorn en 'ops' betekent gezicht."
        }
      },
      {
        question: {
          en: "Did horned dinosaurs live alone or in groups?",
          es: "¿Los dinosaurios con cuernos vivían solos o en grupos?",
          de: "Lebten gehörnte Dinosaurier allein oder in Gruppen?",
          nl: "Leefden gehoornde dinosaurussen alleen of in groepen?"
        },
        options: [
          { en: "Many lived in herds", es: "Muchos vivían en manadas", de: "Viele lebten in Herden", nl: "Velen leefden in kuddes" },
          { en: "Always alone", es: "Siempre solos", de: "Immer allein", nl: "Altijd alleen" },
          { en: "In pairs only", es: "Solo en parejas", de: "Nur in Paaren", nl: "Alleen in paren" },
          { en: "Underground", es: "Bajo tierra", de: "Unterirdisch", nl: "Ondergronds" }
        ],
        correct: 0,
        explanation: {
          en: "Many horned dinosaurs lived in herds for protection, similar to how buffalo and cattle live in groups today.",
          es: "Muchos dinosaurios con cuernos vivían en manadas para protección, similar a como los búfalos y el ganado viven en grupos hoy.",
          de: "Viele gehörnte Dinosaurier lebten in Herden zum Schutz, ähnlich wie Büffel und Rinder heute in Gruppen leben.",
          nl: "Veel gehoornde dinosaurussen leefden in kuddes voor bescherming, vergelijkbaar met hoe buffels en vee vandaag in groepen leven."
        }
      },
      {
        question: {
          en: "What is another famous horned dinosaur besides Triceratops?",
          es: "¿Cuál es otro dinosaurio con cuernos famoso además de Triceratops?",
          de: "Was ist ein anderer berühmter gehörnter Dinosaurier außer Triceratops?",
          nl: "Wat is een andere beroemde gehoornde dinosaurus naast Triceratops?"
        },
        options: [
          { en: "Styracosaurus", es: "Styracosaurus", de: "Styracosaurus", nl: "Styracosaurus" },
          { en: "Stegosaurus", es: "Stegosaurus", de: "Stegosaurus", nl: "Stegosaurus" },
          { en: "Pteranodon", es: "Pteranodon", de: "Pteranodon", nl: "Pteranodon" },
          { en: "Spinosaurus", es: "Spinosaurus", de: "Spinosaurus", nl: "Spinosaurus" }
        ],
        correct: 0,
        explanation: {
          en: "Styracosaurus was another horned dinosaur with a spectacular frill decorated with long spikes.",
          es: "Styracosaurus era otro dinosaurio con cuernos con un volante espectacular decorado con púas largas.",
          de: "Styracosaurus war ein anderer gehörnter Dinosaurier mit einem spektakulären Kragen, der mit langen Stacheln verziert war.",
          nl: "Styracosaurus was een andere gehoornde dinosaurus met een spectaculaire kraag versierd met lange stekels."
        }
      },
      {
        question: {
          en: "How heavy was a Triceratops?",
          es: "¿Cuánto pesaba un Triceratops?",
          de: "Wie schwer war ein Triceratops?",
          nl: "Hoe zwaar was een Triceratops?"
        },
        options: [
          { en: "As heavy as several elephants", es: "Tan pesado como varios elefantes", de: "So schwer wie mehrere Elefanten", nl: "Zo zwaar als meerdere olifanten" },
          { en: "As light as a feather", es: "Tan ligero como una pluma", de: "So leicht wie eine Feder", nl: "Zo licht als een veer" },
          { en: "As heavy as a mouse", es: "Tan pesado como un ratón", de: "So schwer wie eine Maus", nl: "Zo zwaar als een muis" },
          { en: "They had no weight", es: "No tenían peso", de: "Sie hatten kein Gewicht", nl: "Ze hadden geen gewicht" }
        ],
        correct: 0,
        explanation: {
          en: "A Triceratops could weigh up to 12,000 kg (26,000 pounds), which is about as heavy as two or three elephants!",
          es: "Un Triceratops podía pesar hasta 12,000 kg, ¡que es tan pesado como dos o tres elefantes!",
          de: "Ein Triceratops konnte bis zu 12.000 kg wiegen, was etwa so schwer ist wie zwei oder drei Elefanten!",
          nl: "Een Triceratops kon tot 12.000 kg wegen, wat ongeveer zo zwaar is als twee of drie olifanten!"
        }
      },
      {
        question: {
          en: "What kind of teeth did horned dinosaurs have?",
          es: "¿Qué tipo de dientes tenían los dinosaurios con cuernos?",
          de: "Welche Art von Zähnen hatten gehörnte Dinosaurier?",
          nl: "Wat voor tanden hadden gehoornde dinosaurussen?"
        },
        options: [
          { en: "Teeth for grinding plants", es: "Dientes para moler plantas", de: "Zähne zum Mahlen von Pflanzen", nl: "Tanden voor het malen van planten" },
          { en: "Sharp teeth for meat", es: "Dientes afilados para carne", de: "Scharfe Zähne für Fleisch", nl: "Scherpe tanden voor vlees" },
          { en: "No teeth at all", es: "Sin dientes", de: "Gar keine Zähne", nl: "Helemaal geen tanden" },
          { en: "Metal teeth", es: "Dientes de metal", de: "Metallzähne", nl: "Metalen tanden" }
        ],
        correct: 0,
        explanation: {
          en: "Horned dinosaurs had rows of teeth designed for cutting and grinding tough plants, arranged in groups called dental batteries.",
          es: "Los dinosaurios con cuernos tenían filas de dientes diseñados para cortar y moler plantas duras, organizados en grupos llamados baterías dentales.",
          de: "Gehörnte Dinosaurier hatten Zahnreihen zum Schneiden und Mahlen harter Pflanzen, die in Gruppen namens Zahnbatterien angeordnet waren.",
          nl: "Gehoornde dinosaurussen hadden rijen tanden ontworpen voor het snijden en malen van taaie planten, gerangschikt in groepen genaamd tandbatterijen."
        }
      },
      {
        question: {
          en: "Where have horned dinosaur fossils been found?",
          es: "¿Dónde se han encontrado fósiles de dinosaurios con cuernos?",
          de: "Wo wurden Fossilien von gehörnten Dinosauriern gefunden?",
          nl: "Waar zijn fossielen van gehoornde dinosaurussen gevonden?"
        },
        options: [
          { en: "North America and Asia", es: "América del Norte y Asia", de: "Nordamerika und Asien", nl: "Noord-Amerika en Azië" },
          { en: "Only on the moon", es: "Solo en la luna", de: "Nur auf dem Mond", nl: "Alleen op de maan" },
          { en: "Under the ocean", es: "Bajo el océano", de: "Unter dem Ozean", nl: "Onder de oceaan" },
          { en: "In Antarctica only", es: "Solo en la Antártida", de: "Nur in der Antarktis", nl: "Alleen in Antarctica" }
        ],
        correct: 0,
        explanation: {
          en: "Most horned dinosaur fossils have been found in North America and Asia, especially in areas like Montana, Alberta, and Mongolia.",
          es: "La mayoría de los fósiles de dinosaurios con cuernos se han encontrado en América del Norte y Asia, especialmente en áreas como Montana, Alberta y Mongolia.",
          de: "Die meisten Fossilien von gehörnten Dinosauriern wurden in Nordamerika und Asien gefunden, besonders in Gebieten wie Montana, Alberta und der Mongolei.",
          nl: "De meeste fossielen van gehoornde dinosaurussen zijn gevonden in Noord-Amerika en Azië, vooral in gebieden zoals Montana, Alberta en Mongolië."
        }
      },
      {
        question: {
          en: "What color were horned dinosaurs?",
          es: "¿De qué color eran los dinosaurios con cuernos?",
          de: "Welche Farbe hatten gehörnte Dinosaurier?",
          nl: "Welke kleur hadden gehoornde dinosaurussen?"
        },
        options: [
          { en: "We don't know for sure", es: "No sabemos con certeza", de: "Wir wissen es nicht sicher", nl: "We weten het niet zeker" },
          { en: "Always bright pink", es: "Siempre rosa brillante", de: "Immer hellrosa", nl: "Altijd felroze" },
          { en: "Transparent", es: "Transparentes", de: "Transparent", nl: "Doorzichtig" },
          { en: "Rainbow colored", es: "Color arcoíris", de: "Regenbogenfarben", nl: "Regenboogkleurig" }
        ],
        correct: 0,
        explanation: {
          en: "Scientists don't know the exact colors, but they think horned dinosaurs might have been brown, green, or gray to blend in with their environment.",
          es: "Los científicos no saben los colores exactos, pero piensan que los dinosaurios con cuernos podrían haber sido marrones, verdes o grises para mezclarse con su entorno.",
          de: "Wissenschaftler kennen die genauen Farben nicht, aber sie denken, dass gehörnte Dinosaurier braun, grün oder grau gewesen sein könnten, um sich ihrer Umgebung anzupassen.",
          nl: "Wetenschappers weten de exacte kleuren niet, maar ze denken dat gehoornde dinosaurussen bruin, groen of grijs kunnen zijn geweest om op te gaan in hun omgeving."
        }
      },
      {
        question: {
          en: "Did horned dinosaurs have beaks?",
          es: "¿Los dinosaurios con cuernos tenían picos?",
          de: "Hatten gehörnte Dinosaurier Schnäbel?",
          nl: "Hadden gehoornde dinosaurussen snavels?"
        },
        options: [
          { en: "Yes, like a parrot", es: "Sí, como un loro", de: "Ja, wie ein Papagei", nl: "Ja, zoals een papegaai" },
          { en: "No, they had trunks", es: "No, tenían trompas", de: "Nein, sie hatten Rüssel", nl: "Nee, ze hadden slurven" },
          { en: "They had tentacles", es: "Tenían tentáculos", de: "Sie hatten Tentakel", nl: "Ze hadden tentakels" },
          { en: "They had human mouths", es: "Tenían bocas humanas", de: "Sie hatten menschliche Münder", nl: "Ze hadden menselijke monden" }
        ],
        correct: 0,
        explanation: {
          en: "Horned dinosaurs had sharp, parrot-like beaks at the front of their mouths that helped them bite off tough plants.",
          es: "Los dinosaurios con cuernos tenían picos afilados como loros en la parte frontal de sus bocas que les ayudaban a morder plantas duras.",
          de: "Gehörnte Dinosaurier hatten scharfe, papageienartige Schnäbel vorne am Maul, die ihnen halfen, harte Pflanzen abzubeißen.",
          nl: "Gehoornde dinosaurussen hadden scherpe, papegaai-achtige snavels aan de voorkant van hun mond die hen hielpen taaie planten af te bijten."
        }
      },
      {
        question: {
          en: "How fast could horned dinosaurs run?",
          es: "¿Qué tan rápido podían correr los dinosaurios con cuernos?",
          de: "Wie schnell konnten gehörnte Dinosaurier laufen?",
          nl: "Hoe snel konden gehoornde dinosaurussen rennen?"
        },
        options: [
          { en: "Not very fast, about 25 km/h", es: "No muy rápido, unos 25 km/h", de: "Nicht sehr schnell, etwa 25 km/h", nl: "Niet erg snel, ongeveer 25 km/u" },
          { en: "As fast as a jet plane", es: "Tan rápido como un avión jet", de: "So schnell wie ein Düsenflugzeug", nl: "Zo snel als een straalvliegtuig" },
          { en: "They couldn't move", es: "No podían moverse", de: "Sie konnten sich nicht bewegen", nl: "Ze konden niet bewegen" },
          { en: "Speed of light", es: "Velocidad de la luz", de: "Lichtgeschwindigkeit", nl: "Snelheid van het licht" }
        ],
        correct: 0,
        explanation: {
          en: "Horned dinosaurs were heavy and not built for speed, probably running about 25 km/h (15 mph) at most.",
          es: "Los dinosaurios con cuernos eran pesados y no estaban hechos para la velocidad, probablemente corrían unos 25 km/h como máximo.",
          de: "Gehörnte Dinosaurier waren schwer und nicht für Geschwindigkeit gebaut, sie liefen wahrscheinlich höchstens etwa 25 km/h.",
          nl: "Gehoornde dinosaurussen waren zwaar en niet gebouwd voor snelheid, ze renden waarschijnlijk maximaal ongeveer 25 km/u."
        }
      },
      {
        question: {
          en: "What modern animals are most similar to how horned dinosaurs lived?",
          es: "¿Qué animales modernos son más similares a cómo vivían los dinosaurios con cuernos?",
          de: "Welche modernen Tiere ähneln am meisten der Lebensweise gehörnter Dinosaurier?",
          nl: "Welke moderne dieren lijken het meest op hoe gehoornde dinosaurussen leefden?"
        },
        options: [
          { en: "Rhinoceros and buffalo", es: "Rinocerontes y búfalos", de: "Nashörner und Büffel", nl: "Neushoorns en buffels" },
          { en: "Eagles and hawks", es: "Águilas y halcones", de: "Adler und Falken", nl: "Arenden en haviken" },
          { en: "Sharks and dolphins", es: "Tiburones y delfines", de: "Haie und Delfine", nl: "Haaien en dolfijnen" },
          { en: "Spiders and ants", es: "Arañas y hormigas", de: "Spinnen und Ameisen", nl: "Spinnen en mieren" }
        ],
        correct: 0,
        explanation: {
          en: "Rhinoceros and buffalo are similar to horned dinosaurs - they're large herbivores with horns that live in herds and defend themselves with their horns.",
          es: "Los rinocerontes y búfalos son similares a los dinosaurios con cuernos - son grandes herbívoros con cuernos que viven en manadas y se defienden con sus cuernos.",
          de: "Nashörner und Büffel ähneln gehörnten Dinosauriern - sie sind große Pflanzenfresser mit Hörnern, die in Herden leben und sich mit ihren Hörnern verteidigen.",
          nl: "Neushoorns en buffels lijken op gehoornde dinosaurussen - het zijn grote planteneters met hoorns die in kuddes leven en zich verdedigen met hun hoorns."
        }
      },
      {
        question: {
          en: "What color were horned dinosaurs?",
          es: "¿De qué color eran los dinosaurios con cuernos?",
          de: "Welche Farbe hatten gehörnte Dinosaurier?",
          nl: "Welke kleur hadden gehoornde dinosaurussen?"
        },
        options: [
          { en: "We don't know for sure, but probably brown, green, or gray", es: "No sabemos con seguridad, pero probablemente marrón, verde o gris", de: "Wir wissen es nicht sicher, aber wahrscheinlich braun, grün oder grau", nl: "We weten het niet zeker, maar waarschijnlijk bruin, groen of grijs" },
          { en: "Always bright pink", es: "Siempre rosa brillante", de: "Immer hellrosa", nl: "Altijd felroze" },
          { en: "All rainbow colored", es: "Todos de colores del arcoíris", de: "Alle regenbogenfarben", nl: "Allemaal regenboogkleuren" },
          { en: "Completely transparent", es: "Completamente transparentes", de: "Völlig durchsichtig", nl: "Volledig doorzichtig" }
        ],
        correct: 0,
        explanation: {
          en: "We can't know the exact colors from fossils, but scientists think horned dinosaurs were probably earth colors like brown, green, or gray to help them blend in with plants.",
          es: "No podemos conocer los colores exactos de los fósiles, pero los científicos piensan que los dinosaurios con cuernos probablemente eran colores tierra como marrón, verde o gris para ayudarles a mezclarse con las plantas.",
          de: "Wir können die genauen Farben nicht aus Fossilien erkennen, aber Wissenschaftler denken, dass gehörnte Dinosaurier wahrscheinlich Erdfarben wie braun, grün oder grau hatten, um sich zwischen Pflanzen zu tarnen.",
          nl: "We kunnen de exacte kleuren niet weten uit fossielen, maar wetenschappers denken dat gehoornde dinosaurussen waarschijnlijk aardkleuren hadden zoals bruin, groen of grijs om te kunnen versmelten met planten."
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