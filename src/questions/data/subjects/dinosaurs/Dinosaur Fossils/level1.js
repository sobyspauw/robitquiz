// Dinosaur Fossils Quiz - Level 1
(function() {
  const level1 = {
    name: {
          "en": "Dinosaur Fossils Level 1",
          "es": "Fosiles de Dinosaurios Nivel 1",
          "de": "Dinosaurier Fossilien Stufe 1",
          "nl": "Dino Fossielen Level 1"
    },
    questions: [
      {
        question: {
                  "en": "What are fossils?",
                  "es": "¿Qué son los fósiles?",
                  "de": "Was sind Fossilien?",
                  "nl": "Wat zijn fossielen?"
        },
        options: [
        {
                  "en": "Remains of ancient living things",
                  "es": "Restos de seres vivos antiguos",
                  "de": "Überreste alter Lebewesen",
                  "nl": "Overblijfselen van oude levende wezens"
        },
        {
                  "en": "Shiny rocks",
                  "es": "Rocas brillantes",
                  "de": "Glänzende Steine",
                  "nl": "Glimmende stenen"
        },
        {
                  "en": "Plastic toys",
                  "es": "Juguetes de plástico",
                  "de": "Plastikspielzeug",
                  "nl": "Plastic speelgoed"
        },
        {
                  "en": "Metal objects",
                  "es": "Objetos de metal",
                  "de": "Metallobjekte",
                  "nl": "Metalen voorwerpen"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Fossils are the preserved remains or traces of ancient living things that lived millions of years ago.",
                  "es": "Los fósiles son los restos preservados o trazas de seres vivos antiguos que vivieron hace millones de años.",
                  "de": "Fossilien sind die erhaltenen Überreste oder Spuren alter Lebewesen, die vor Millionen von Jahren lebten.",
                  "nl": "Fossielen zijn de bewaarde overblijfselen of sporen van oude levende wezens die miljoenen jaren geleden leefden."
        }
      },
      {
        question: {
                  "en": "How long ago did dinosaurs live?",
                  "es": "¿Hace cuánto tiempo vivieron los dinosaurios?",
                  "de": "Wie lange ist es her, dass Dinosaurier lebten?",
                  "nl": "Hoelang geleden leefden dinosaurussen?"
        },
        options: [
        {
                  "en": "Millions yrs ago",
                  "es": "Hace millones de años",
                  "de": "Vor Millionen von Jahren",
                  "nl": "Miljoenen jaren geleden"
        },
        {
                  "en": "Last year",
                  "es": "El año pasado",
                  "de": "Letztes Jahr",
                  "nl": "Vorig jaar"
        },
        {
                  "en": "They still live today",
                  "es": "Todavía viven hoy",
                  "de": "Sie leben heute noch",
                  "nl": "Ze leven nog steeds vandaag"
        },
        {
                  "en": "Hundreds of years ago",
                  "es": "Hace cientos de años",
                  "de": "Vor Hunderten von Jahren",
                  "nl": "Honderden jaren geleden"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Dinosaurs lived millions of years ago, during a time called the Mesozoic Era.",
                  "es": "Los dinosaurios vivieron hace millones de años, durante una época llamada Era Mesozoica.",
                  "de": "Dinosaurier lebten vor Millionen von Jahren, während einer Zeit namens Mesozoikum.",
                  "nl": "Dinosaurussen leefden miljoenen jaren geleden, tijdens een tijdperk genaamd het Mesozoïcum."
        }
      },
      {
        question: {
                  "en": "What type of rock are dinosaur fossils usually found in?",
                  "es": "¿En qué tipo de roca se encuentran normalmente los fósiles de dinosaurios?",
                  "de": "In welcher Art von Gestein werden Dinosaurier-Fossilien normalerweise gefunden?",
                  "nl": "In welk type gesteente worden dinosaurusfossielen meestal gevonden?"
        },
        options: [
        {
                  "en": "Wood",
                  "es": "Madera",
                  "de": "Holz",
                  "nl": "Hout"
        },
        {
                  "en": "Plastic",
                  "es": "Plástico",
                  "de": "Plastik",
                  "nl": "Plastic"
        },
        {
                  "en": "Ice",
                  "es": "Hielo",
                  "de": "Eis",
                  "nl": "IJs"
        },
        {
                  "en": "Sedimentary rock",
                  "es": "Roca sedimentaria",
                  "de": "Sedimentgestein",
                  "nl": "Sedimentair gesteente"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Dinosaur fossils are usually found in sedimentary rocks, which form when layers of sand and mud are pressed together over time.",
                  "es": "Los fósiles de dinosaurios se encuentran normalmente en rocas sedimentarias, que se forman cuando las capas de arena y barro se comprimen juntas con el tiempo.",
                  "de": "Dinosaurier-Fossilien werden normalerweise in Sedimentgesteinen gefunden, die entstehen, wenn Schichten aus Sand und Schlamm über die Zeit zusammengepresst werden.",
                  "nl": "Dinosaurusfossielen worden meestal gevonden in sedimentair gesteente, dat ontstaat wanneer lagen zand en modder in de loop der tijd samengeperst worden."
        }
      },
      {
        question: {
                  "en": "Which part of a dinosaur is most likely to become a fossil?",
                  "es": "¿Qué parte de un dinosaurio tiene más probabilidades de convertirse en fósil?",
                  "de": "Welcher Teil eines Dinosauriers wird am ehesten zu einem Fossil?",
                  "nl": "Welk deel van een dinosaurus wordt het meest waarschijnlijk een fossiel?"
        },
        options: [
        {
                  "en": "Eyes",
                  "es": "Ojos",
                  "de": "Augen",
                  "nl": "Ogen"
        },
        {
                  "en": "Hair",
                  "es": "Pelo",
                  "de": "Haare",
                  "nl": "Haar"
        },
        {
                  "en": "Bones and teeth",
                  "es": "Huesos y dientes",
                  "de": "Knochen und Zähne",
                  "nl": "Botten en tanden"
        },
        {
                  "en": "Skin",
                  "es": "Piel",
                  "de": "Haut",
                  "nl": "Huid"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Bones and teeth are hard parts that fossilize most easily because they don't decay as quickly as soft parts like skin or muscles.",
                  "es": "Los huesos y dientes son partes duras que se fosilizan más fácilmente porque no se descomponen tan rápido como las partes blandas como la piel o los músculos.",
                  "de": "Knochen und Zähne sind harte Teile, die am leichtesten versteinern, weil sie nicht so schnell verfallen wie weiche Teile wie Haut oder Muskeln.",
                  "nl": "Botten en tanden zijn harde delen die het gemakkelijkst fossiliseren omdat ze niet zo snel vergaan als zachte delen zoals huid of spieren."
        }
      },
      {
        question: {
                  "en": "What do scientists who study dinosaur fossils call themselves?",
                  "es": "¿Cómo se llaman los científicos que estudian los fósiles de dinosaurios?",
                  "de": "Wie nennen sich Wissenschaftler, die Dinosaurier-Fossilien studieren?",
                  "nl": "Hoe noemen wetenschappers die dinosaurusfossielen bestuderen zichzelf?"
        },
        options: [
        {
                  "en": "Chefs",
                  "es": "Chefs",
                  "de": "Köche",
                  "nl": "Koks"
        },
        {
                  "en": "Dentists",
                  "es": "Dentistas",
                  "de": "Zahnärzte",
                  "nl": "Tandartsen"
        },
        {
                  "en": "Paleontologists",
                  "es": "Paleontólogos",
                  "de": "Paläontologen",
                  "nl": "Paleontologen"
        },
        {
                  "en": "Teachers",
                  "es": "Profesores",
                  "de": "Lehrer",
                  "nl": "Leraren"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Paleontologists are scientists who study fossils to learn about ancient life on Earth.",
                  "es": "Los paleontólogos son científicos que estudian fósiles para aprender sobre la vida antigua en la Tierra.",
                  "de": "Paläontologen sind Wissenschaftler, die Fossilien studieren, um etwas über das alte Leben auf der Erde zu lernen.",
                  "nl": "Paleontologen zijn wetenschappers die fossielen bestuderen om te leren over het oude leven op aarde."
        }
      },
      {
        question: {
                  "en": "How do fossils form?",
                  "es": "¿Cómo se forman los fósiles?",
                  "de": "Wie entstehen Fossilien?",
                  "nl": "Hoe ontstaan fossielen?"
        },
        options: [
        {
                  "en": "Animals fly into space",
                  "es": "Los animales vuelan al espacio",
                  "de": "Tiere fliegen ins All",
                  "nl": "Dieren vliegen de ruimte in"
        },
        {
                  "en": "Animals eat rocks",
                  "es": "Los animales comen rocas",
                  "de": "Tiere fressen Steine",
                  "nl": "Dieren eten stenen"
        },
        {
                  "en": "Animals turn into ice",
                  "es": "Los animales se convierten en hielo",
                  "de": "Tiere verwandeln sich in Eis",
                  "nl": "Dieren veranderen in ijs"
        },
        {
                  "en": "Animals get buried in mud and sand",
                  "es": "Los animales quedan enterrados en barro y arena",
                  "de": "Tiere werden in Schlamm und Sand begraben",
                  "nl": "Dieren worden begraven in modder en zand"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Fossils form when dead animals are quickly buried in mud, sand, or other sediments before they can fully decay.",
                  "es": "Los fósiles se forman cuando los animales muertos son rápidamente enterrados en barro, arena u otros sedimentos antes de que puedan descomponerse completamente.",
                  "de": "Fossilien entstehen, wenn tote Tiere schnell in Schlamm, Sand oder anderen Sedimenten begraben werden, bevor sie vollständig verfallen können.",
                  "nl": "Fossielen ontstaan wanneer dode dieren snel worden begraven in modder, zand of andere sedimenten voordat ze volledig kunnen vergaan."
        }
      },
      {
        question: {
                  "en": "What is the most famous dinosaur fossil?",
                  "es": "¿Cuál es el fósil de dinosaurio más famoso?",
                  "de": "Was ist das berühmteste Dinosaurier-Fossil?",
                  "nl": "Wat is het beroemdste dinosaurusfossiel?"
        },
        options: [
        {
                  "en": "T. rex",
                  "es": "T. rex",
                  "de": "T. rex",
                  "nl": "T. rex"
        },
        {
                  "en": "A tree",
                  "es": "Un árbol",
                  "de": "Ein Baum",
                  "nl": "Een boom"
        },
        {
                  "en": "A cat",
                  "es": "Un gato",
                  "de": "Eine Katze",
                  "nl": "Een kat"
        },
        {
                  "en": "A fish",
                  "es": "Un pez",
                  "de": "Ein Fisch",
                  "nl": "Een vis"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Tyrannosaurus rex (T. rex) is probably the most famous dinosaur fossil that many people know about.",
                  "es": "Tyrannosaurus rex (T. rex) es probablemente el fósil de dinosaurio más famoso que muchas personas conocen.",
                  "de": "Tyrannosaurus rex (T. rex) ist wahrscheinlich das berühmteste Dinosaurier-Fossil, das viele Menschen kennen.",
                  "nl": "Tyrannosaurus rex (T. rex) is waarschijnlijk het beroemdste dinosaurusfossiel dat veel mensen kennen."
        }
      },
      {
        question: {
                  "en": "Where can you see dinosaur fossils?",
                  "es": "¿Dónde puedes ver fósiles de dinosaurios?",
                  "de": "Wo kann man Dinosaurier-Fossilien sehen?",
                  "nl": "Waar kun je dinosaurusfossielen zien?"
        },
        options: [
        {
                  "en": "Playgrounds",
                  "es": "Parques infantiles",
                  "de": "Spielplätze",
                  "nl": "Speeltuinen"
        },
        {
                  "en": "Museums",
                  "es": "Museos",
                  "de": "Museen",
                  "nl": "Musea"
        },
        {
                  "en": "Grocery stores",
                  "es": "Tiendas de comestibles",
                  "de": "Lebensmittelgeschäfte",
                  "nl": "Supermarkten"
        },
        {
                  "en": "Swimming pools",
                  "es": "Piscinas",
                  "de": "Schwimmbäder",
                  "nl": "Zwembaden"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Museums often have dinosaur fossil displays where you can see real bones and learn about prehistoric life.",
                  "es": "Los museos a menudo tienen exhibiciones de fósiles de dinosaurios donde puedes ver huesos reales y aprender sobre la vida prehistórica.",
                  "de": "Museen haben oft Dinosaurier-Fossil-Ausstellungen, wo man echte Knochen sehen und über das prähistorische Leben lernen kann.",
                  "nl": "Musea hebben vaak tentoonstellingen met dinosaurusfossielen waar je echte botten kunt zien en kunt leren over het prehistorische leven."
        }
      },
      {
        question: {
                  "en": "What color are most dinosaur fossils?",
                  "es": "¿De qué color son la mayoría de los fósiles de dinosaurios?",
                  "de": "Welche Farbe haben die meisten Dinosaurier-Fossilien?",
                  "nl": "Welke kleur hebben de meeste dinosaurusfossielen?"
        },
        options: [
        {
                  "en": "Purple",
                  "es": "Morado",
                  "de": "Lila",
                  "nl": "Paars"
        },
        {
                  "en": "Pink",
                  "es": "Rosa",
                  "de": "Rosa",
                  "nl": "Roze"
        },
        {
                  "en": "Bright green",
                  "es": "Verde brillante",
                  "de": "Hellgrün",
                  "nl": "Felgroen"
        },
        {
                  "en": "Brown or gray",
                  "es": "Marrón o gris",
                  "de": "Braun oder grau",
                  "nl": "Bruin of grijs"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Most dinosaur fossils are brown or gray because they take on the color of the rock they're found in.",
                  "es": "La mayoría de los fósiles de dinosaurios son marrones o grises porque toman el color de la roca en la que se encuentran.",
                  "de": "Die meisten Dinosaurier-Fossilien sind braun oder grau, weil sie die Farbe des Gesteins annehmen, in dem sie gefunden werden.",
                  "nl": "De meeste dinosaurusfossielen zijn bruin of grijs omdat ze de kleur aannemen van het gesteente waarin ze worden gevonden."
        }
      },
      {
        question: {
                  "en": "Are dinosaur fossils heavy?",
                  "es": "¿Son pesados los fósiles de dinosaurios?",
                  "de": "Sind Dinosaurier-Fossilien schwer?",
                  "nl": "Zijn dinosaurusfossielen zwaar?"
        },
        options: [
        {
                  "en": "They have no weight",
                  "es": "No tienen peso",
                  "de": "Sie haben kein Gewicht",
                  "nl": "Ze hebben geen gewicht"
        },
        {
                  "en": "Yes, they are very heavy",
                  "es": "Sí, son muy pesados",
                  "de": "Ja, sie sind sehr schwer",
                  "nl": "Ja, ze zijn erg zwaar"
        },
        {
                  "en": "No, they float",
                  "es": "No, flotan",
                  "de": "Nein, sie schwimmen",
                  "nl": "Nee, ze drijven"
        },
        {
                  "en": "They are as light as feathers",
                  "es": "Son tan ligeros como plumas",
                  "de": "Sie sind so leicht wie Federn",
                  "nl": "Ze zijn zo licht als veren"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Dinosaur fossils are very heavy because the original bone has been replaced by rock minerals over millions of years.",
                  "es": "Los fósiles de dinosaurios son muy pesados porque el hueso original ha sido reemplazado por minerales de roca durante millones de años.",
                  "de": "Dinosaurier-Fossilien sind sehr schwer, weil der ursprüngliche Knochen über Millionen von Jahren durch Gesteinsminerale ersetzt wurde.",
                  "nl": "Dinosaurusfossielen zijn erg zwaar omdat het oorspronkelijke bot over miljoenen jaren is vervangen door gesteentemineralen."
        }
      },
      {
        question: {
                  "en": "Can you find dinosaur fossils in your backyard?",
                  "es": "¿Puedes encontrar fósiles de dinosaurios en tu patio trasero?",
                  "de": "Kann man Dinosaurier-Fossilien in seinem Hinterhof finden?",
                  "nl": "Kun je dinosaurusfossielen in je achtertuin vinden?"
        },
        options: [
        {
                  "en": "Yes, they are everywhere",
                  "es": "Sí, están en todas partes",
                  "de": "Ja, sie sind überall",
                  "nl": "Ja, ze zijn overal"
        },
        {
                  "en": "Only if you dig at night",
                  "es": "Solo si excavas de noche",
                  "de": "Nur wenn man nachts gräbt",
                  "nl": "Alleen als je 's nachts graaft"
        },
        {
                  "en": "Only on Sundays",
                  "es": "Solo los domingos",
                  "de": "Nur sonntags",
                  "nl": "Alleen op zondag"
        },
        {
                  "en": "Maybe, but it's very unlikely",
                  "es": "Tal vez, pero es muy improbable",
                  "de": "Vielleicht, aber es ist sehr unwahrscheinlich",
                  "nl": "Misschien, maar het is erg onwaarschijnlijk"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "While it's possible to find fossils in some areas, dinosaur fossils are quite rare and usually found in specific types of rock formations.",
                  "es": "Aunque es posible encontrar fósiles en algunas áreas, los fósiles de dinosaurios son bastante raros y generalmente se encuentran en tipos específicos de formaciones rocosas.",
                  "de": "Obwohl es möglich ist, in manchen Gebieten Fossilien zu finden, sind Dinosaurier-Fossilien ziemlich selten und werden normalerweise in bestimmten Arten von Gesteinsformationen gefunden.",
                  "nl": "Hoewel het mogelijk is om fossielen te vinden in sommige gebieden, zijn dinosaurusfossielen vrij zeldzaam en worden ze meestal gevonden in specifieke soorten gesteenteformaties."
        }
      },
      {
        question: {
                  "en": "What should you do if you think you found a dinosaur fossil?",
                  "es": "¿Qué deberías hacer si crees que encontraste un fósil de dinosaurio?",
                  "de": "Was sollte man tun, wenn man glaubt, ein Dinosaurier-Fossil gefunden zu haben?",
                  "nl": "Wat moet je doen als je denkt dat je een dinosaurusfossiel hebt gevonden?"
        },
        options: [
        {
                  "en": "Sell it immediately",
                  "es": "Venderlo inmediatamente",
                  "de": "Es sofort verkaufen",
                  "nl": "Het meteen verkopen"
        },
        {
                  "en": "Paint it bright colors",
                  "es": "Pintarlo de colores brillantes",
                  "de": "Es in hellen Farben anmalen",
                  "nl": "Het in felle kleuren schilderen"
        },
        {
                  "en": "Keep it secret",
                  "es": "Mantenerlo en secreto",
                  "de": "Es geheim halten",
                  "nl": "Het geheim houden"
        },
        {
                  "en": "Tell a scientist or museum",
                  "es": "Decirle a un científico o museo",
                  "de": "Einem Wissenschaftler oder Museum Bescheid geben",
                  "nl": "Het vertellen aan een wetenschapper of museum"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "If you think you found a fossil, you should contact a scientist or museum so they can properly study and preserve it.",
                  "es": "Si crees que encontraste un fósil, deberías contactar a un científico o museo para que puedan estudiarlo y preservarlo adecuadamente.",
                  "de": "Wenn man glaubt, ein Fossil gefunden zu haben, sollte man einen Wissenschaftler oder ein Museum kontaktieren, damit sie es richtig studieren und bewahren können.",
                  "nl": "Als je denkt dat je een fossiel hebt gevonden, moet je contact opnemen met een wetenschapper of museum zodat ze het goed kunnen bestuderen en bewaren."
        }
      },
      {
        question: {
                  "en": "How long does it take for something to become a fossil?",
                  "es": "¿Cuánto tiempo tarda algo en convertirse en fósil?",
                  "de": "Wie lange dauert es, bis etwas zu einem Fossil wird?",
                  "nl": "Hoe lang duurt het voordat iets een fossiel wordt?"
        },
        options: [
        {
                  "en": "One day",
                  "es": "Un día",
                  "de": "Einen Tag",
                  "nl": "Eén dag"
        },
        {
                  "en": "One week",
                  "es": "Una semana",
                  "de": "Eine Woche",
                  "nl": "Eén week"
        },
        {
                  "en": "Millions of yrs",
                  "es": "Millones de años",
                  "de": "Millionen von Jahren",
                  "nl": "Miljoenen jaren"
        },
        {
                  "en": "One hour",
                  "es": "Una hora",
                  "de": "Eine Stunde",
                  "nl": "Eén uur"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "It takes millions of years for something to become a fossil because the process happens very, very slowly.",
                  "es": "Toma millones de años para que algo se convierta en fósil porque el proceso ocurre muy, muy lentamente.",
                  "de": "Es dauert Millionen von Jahren, bis etwas zu einem Fossil wird, weil der Prozess sehr, sehr langsam abläuft.",
                  "nl": "Het duurt miljoenen jaren voordat iets een fossiel wordt omdat het proces heel, heel langzaam verloopt."
        }
      },
      {
        question: {
                  "en": "What do dinosaur footprints tell us?",
                  "es": "¿Qué nos dicen las huellas de dinosaurios?",
                  "de": "Was verraten uns Dinosaurier-Fußabdrücke?",
                  "nl": "Wat vertellen dinosaurusvoetstappen ons?"
        },
        options: [
        {
                  "en": "What they ate for lunch",
                  "es": "Qué comieron en el almuerzo",
                  "de": "Was sie zum Mittagessen aßen",
                  "nl": "Wat ze voor lunch aten"
        },
        {
                  "en": "How dinosaurs walked",
                  "es": "Cómo caminaban los dinosaurios",
                  "de": "Wie Dinosaurier liefen",
                  "nl": "Hoe dinosaurussen liepen"
        },
        {
                  "en": "Their phone number",
                  "es": "Su número de teléfono",
                  "de": "Ihre Telefonnummer",
                  "nl": "Hun telefoonnummer"
        },
        {
                  "en": "Their favorite color",
                  "es": "Su color favorito",
                  "de": "Ihre Lieblingsfarbe",
                  "nl": "Hun favoriete kleur"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Dinosaur footprints are fossils that show us how dinosaurs moved, how fast they walked, and how they lived together.",
                  "es": "Las huellas de dinosaurios son fósiles que nos muestran cómo se movían los dinosaurios, qué tan rápido caminaban y cómo vivían juntos.",
                  "de": "Dinosaurier-Fußabdrücke sind Fossilien, die uns zeigen, wie sich Dinosaurier bewegten, wie schnell sie liefen und wie sie zusammenlebten.",
                  "nl": "Dinosaurusvoetstappen zijn fossielen die ons laten zien hoe dinosaurussen bewogen, hoe snel ze liepen en hoe ze samenwondden."
        }
      },
      {
        question: {
                  "en": "What is amber?",
                  "es": "¿Qué es el ámbar?",
                  "de": "Was ist Bernstein?",
                  "nl": "Wat is barnsteen?"
        },
        options: [
        {
                  "en": "Hardened tree sap",
                  "es": "Savia de árbol endurecida",
                  "de": "Gehärteter Baumharz",
                  "nl": "Verharde boomsap"
        },
        {
                  "en": "Yellow paint",
                  "es": "Pintura amarilla",
                  "de": "Gelbe Farbe",
                  "nl": "Gele verf"
        },
        {
                  "en": "Melted cheese",
                  "es": "Queso derretido",
                  "de": "Geschmolzener Käse",
                  "nl": "Gesmolten kaas"
        },
        {
                  "en": "Lemon juice",
                  "es": "Jugo de limón",
                  "de": "Zitronensaft",
                  "nl": "Citroensap"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Amber is hardened tree sap that can sometimes preserve small insects and plants from millions of years ago.",
                  "es": "El ámbar es savia de árbol endurecida que a veces puede preservar pequeños insectos y plantas de hace millones de años.",
                  "de": "Bernstein ist gehärteter Baumharz, der manchmal kleine Insekten und Pflanzen von vor Millionen von Jahren bewahren kann.",
                  "nl": "Barnsteen is verharde boomsap die soms kleine insecten en planten van miljoenen jaren geleden kan bewaren."
        }
      },
      {
        question: {
                  "en": "Can dinosaur fossils tell us what color dinosaurs were?",
                  "es": "¿Pueden los fósiles de dinosaurios decirnos de qué color eran los dinosaurios?",
                  "de": "Können Dinosaurier-Fossilien uns sagen, welche Farbe Dinosaurier hatten?",
                  "nl": "Kunnen dinosaurusfossielen ons vertellen welke kleur dinosaurussen hadden?"
        },
        options: [
        {
                  "en": "Sometimes yes",
                  "es": "A veces sí",
                  "de": "Manchmal ja",
                  "nl": "Soms wel"
        },
        {
                  "en": "Never",
                  "es": "Nunca",
                  "de": "Niemals",
                  "nl": "Nooit"
        },
        {
                  "en": "Only if you ask nicely",
                  "es": "Solo si preguntas amablemente",
                  "de": "Nur wenn man höflich fragt",
                  "nl": "Alleen als je het netjes vraagt"
        },
        {
                  "en": "Only on weekends",
                  "es": "Solo los fines de semana",
                  "de": "Nur am Wochenende",
                  "nl": "Alleen in het weekend"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Scientists have found special fossils that preserve tiny structures that can tell us about dinosaur colors, but this is quite rare.",
                  "es": "Los científicos han encontrado fósiles especiales que preservan estructuras diminutas que pueden decirnos sobre los colores de los dinosaurios, pero esto es bastante raro.",
                  "de": "Wissenschaftler haben besondere Fossilien gefunden, die winzige Strukturen bewahren, die uns etwas über Dinosaurier-Farben verraten können, aber das ist ziemlich selten.",
                  "nl": "Wetenschappers hebben speciale fossielen gevonden die kleine structuren bewaren die ons kunnen vertellen over dinosauruskleuren, maar dit is vrij zeldzaam."
        }
      },
      {
        question: {
                  "en": "What is the smallest dinosaur fossil ever found?",
                  "es": "¿Cuál es el fósil de dinosaurio más pequeño jamás encontrado?",
                  "de": "Was ist das kleinste jemals gefundene Dinosaurier-Fossil?",
                  "nl": "Wat is het kleinste dinosaurusfossiel dat ooit is gevonden?"
        },
        options: [
        {
                  "en": "As big as an elephant",
                  "es": "Tan grande como un elefante",
                  "de": "So groß wie ein Elefant",
                  "nl": "Zo groot als een olifant"
        },
        {
                  "en": "As big as a house",
                  "es": "Tan grande como una casa",
                  "de": "So groß wie ein Haus",
                  "nl": "Zo groot als een huis"
        },
        {
                  "en": "As tiny as an ant",
                  "es": "Tan pequeño como una hormiga",
                  "de": "So winzig wie eine Ameise",
                  "nl": "Zo klein als een mier"
        },
        {
                  "en": "About the size of a bird",
                  "es": "Aproximadamente del tamaño de un pájaro",
                  "de": "Etwa so groß wie ein Vogel",
                  "nl": "Ongeveer zo groot als een vogel"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "The smallest dinosaur fossils are about the size of birds, which makes sense because birds are actually dinosaurs!",
                  "es": "Los fósiles de dinosaurios más pequeños son aproximadamente del tamaño de los pájaros, lo que tiene sentido porque los pájaros son en realidad dinosaurios.",
                  "de": "Die kleinsten Dinosaurier-Fossilien sind etwa so groß wie Vögel, was Sinn macht, weil Vögel tatsächlich Dinosaurier sind!",
                  "nl": "De kleinste dinosaurusfossielen zijn ongeveer zo groot als vogels, wat logisch is omdat vogels eigenlijk dinosaurussen zijn!"
        }
      },
      {
        question: {
                  "en": "What happens to dinosaur bones in the ground?",
                  "es": "¿Qué pasa con los huesos de dinosaurios en el suelo?",
                  "de": "Was passiert mit Dinosaurier-Knochen im Boden?",
                  "nl": "Wat gebeurt er met dinosaurusbotten in de grond?"
        },
        options: [
        {
                  "en": "They slowly turn into rock",
                  "es": "Se convierten lentamente en roca",
                  "de": "Sie verwandeln sich langsam in Gestein",
                  "nl": "Ze veranderen langzaam in steen"
        },
        {
                  "en": "They grow bigger",
                  "es": "Se vuelven más grandes",
                  "de": "Sie werden größer",
                  "nl": "Ze worden groter"
        },
        {
                  "en": "They learn to talk",
                  "es": "Aprenden a hablar",
                  "de": "Sie lernen zu sprechen",
                  "nl": "Ze leren praten"
        },
        {
                  "en": "They become invisible",
                  "es": "Se vuelven invisibles",
                  "de": "Sie werden unsichtbar",
                  "nl": "Ze worden onzichtbaar"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Over millions of years, dinosaur bones in the ground slowly get replaced by minerals, turning them into rock-like fossils.",
                  "es": "Durante millones de años, los huesos de dinosaurios en el suelo lentamente son reemplazados por minerales, convirtiéndolos en fósiles similares a rocas.",
                  "de": "Über Millionen von Jahren werden Dinosaurier-Knochen im Boden langsam durch Mineralien ersetzt und verwandeln sich in steinähnliche Fossilien.",
                  "nl": "Gedurende miljoenen jaren worden dinosaurusbotten in de grond langzaam vervangen door mineralen, waardoor ze in steenachtige fossielen veranderen."
        }
      },
      {
        question: {
                  "en": "Why are dinosaur fossils important?",
                  "es": "¿Por qué son importantes los fósiles de dinosaurios?",
                  "de": "Warum sind Dinosaurier-Fossilien wichtig?",
                  "nl": "Waarom zijn dinosaurusfossielen belangrijk?"
        },
        options: [
        {
                  "en": "They make good pets",
                  "es": "Son buenas mascotas",
                  "de": "Sie sind gute Haustiere",
                  "nl": "Ze zijn goede huisdieren"
        },
        {
                  "en": "They can fly",
                  "es": "Pueden volar",
                  "de": "Sie können fliegen",
                  "nl": "Ze kunnen vliegen"
        },
        {
                  "en": "They taste good",
                  "es": "Saben bien",
                  "de": "Sie schmecken gut",
                  "nl": "Ze smaken lekker"
        },
        {
                  "en": "They help us learn about the past",
                  "es": "Nos ayudan a aprender sobre el pasado",
                  "de": "Sie helfen uns, etwas über die Vergangenheit zu lernen",
                  "nl": "Ze helpen ons leren over het verleden"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Dinosaur fossils are important because they teach us about life on Earth millions of years ago and how animals have changed over time.",
                  "es": "Los fósiles de dinosaurios son importantes porque nos enseñan sobre la vida en la Tierra hace millones de años y cómo los animales han cambiado con el tiempo.",
                  "de": "Dinosaurier-Fossilien sind wichtig, weil sie uns über das Leben auf der Erde vor Millionen von Jahren lehren und wie sich Tiere über die Zeit verändert haben.",
                  "nl": "Dinosaurusfossielen zijn belangrijk omdat ze ons leren over het leven op aarde miljoenen jaren geleden en hoe dieren in de loop der tijd zijn veranderd."
        }
      },
      {
        question: {
                  "en": "What do we call the study of fossils?",
                  "es": "¿Cómo llamamos al estudio de los fósiles?",
                  "de": "Wie nennen wir die Wissenschaft der Fossilien?",
                  "nl": "Hoe noemen we de studie van fossielen?"
        },
        options: [
        {
                  "en": "Gardening",
                  "es": "Jardinería",
                  "de": "Gärtnerei",
                  "nl": "Tuinieren"
        },
        {
                  "en": "Cooking",
                  "es": "Cocina",
                  "de": "Kochen",
                  "nl": "Koken"
        },
        {
                  "en": "Paleontology",
                  "es": "Paleontología",
                  "de": "Paläontologie",
                  "nl": "Paleontologie"
        },
        {
                  "en": "Biology",
                  "es": "Biología",
                  "de": "Biologie",
                  "nl": "Biologie"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Paleontology is the science that studies fossils and ancient life forms to understand the history of life on Earth.",
                  "es": "La paleontología es la ciencia que estudia fósiles y formas de vida antiguas para entender la historia de la vida en la Tierra.",
                  "de": "Die Paläontologie ist die Wissenschaft, die Fossilien und alte Lebensformen studiert, um die Geschichte des Lebens auf der Erde zu verstehen.",
                  "nl": "Paleontologie is de wetenschap die fossielen en oude levensvormen bestudeert om de geschiedenis van het leven op aarde te begrijpen."
        }
      },
      {
        question: {
                  "en": "What is a fossil?",
                  "es": "What is a fossil?",
                  "de": "What is a fossil?",
                  "nl": "What is a fossil?"
        },
        options: [
        {
                  "en": "Preserved remains of ancient life",
                  "es": "Preserved remains of ancient life",
                  "de": "Preserved remains of ancient life",
                  "nl": "Preserved remains of ancient life"
        },
        {
                  "en": "Dinosaur bone",
                  "es": "Dinosaur bone",
                  "de": "Dinosaur bone",
                  "nl": "Dinosaur bone"
        },
        {
                  "en": "Ancient tool",
                  "es": "Ancient tool",
                  "de": "Ancient tool",
                  "nl": "Ancient tool"
        },
        {
                  "en": "Type of rock",
                  "es": "Type of rock",
                  "de": "Type of rock",
                  "nl": "Type of rock"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "A fossil is any preserved remains, impression, or trace of once-living organisms from a past geological age.",
                  "es": "A fossil is any preserved remains, impression, or trace of once-living organisms from a past geological age.",
                  "de": "A fossil is any preserved remains, impression, or trace of once-living organisms from a past geological age.",
                  "nl": "A fossil is any preserved remains, impression, or trace of once-living organisms from a past geological age."
        }
      },
      {
        question: {
                  "en": "What is fossilization?",
                  "es": "What is fossilization?",
                  "de": "What is fossilization?",
                  "nl": "What is fossilization?"
        },
        options: [
        {
                  "en": "Studying fossils",
                  "es": "Studying fossils",
                  "de": "Studying fossils",
                  "nl": "Studying fossils"
        },
        {
                  "en": "Finding fossils",
                  "es": "Finding fossils",
                  "de": "Finding fossils",
                  "nl": "Finding fossils"
        },
        {
                  "en": "Breaking fossils",
                  "es": "Breaking fossils",
                  "de": "Breaking fossils",
                  "nl": "Breaking fossils"
        },
        {
                  "en": "Process of remains becoming fossils",
                  "es": "Process of remains becoming fossils",
                  "de": "Process of remains becoming fossils",
                  "nl": "Process of remains becoming fossils"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Fossilization is the process by which organic remains are preserved in rock over millions of years.",
                  "es": "Fossilization is the process by which organic remains are preserved in rock over millions of years.",
                  "de": "Fossilization is the process by which organic remains are preserved in rock over millions of years.",
                  "nl": "Fossilization is the process by which organic remains are preserved in rock over millions of years."
        }
      },
      {
        question: {
                  "en": "What is the most common way dinosaur fossils form?",
                  "es": "What is the most common way dinosaur fossils form?",
                  "de": "What is the most common way dinosaur fossils form?",
                  "nl": "What is the most common way dinosaur fossils form?"
        },
        options: [
        {
                  "en": "Permineralization",
                  "es": "Permineralization",
                  "de": "Permineralization",
                  "nl": "Permineralization"
        },
        {
                  "en": "Freezing",
                  "es": "Freezing",
                  "de": "Freezing",
                  "nl": "Freezing"
        },
        {
                  "en": "Mummification",
                  "es": "Mummification",
                  "de": "Mummification",
                  "nl": "Mummification"
        },
        {
                  "en": "Amber preservation",
                  "es": "Amber preservation",
                  "de": "Amber preservation",
                  "nl": "Amber preservation"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Permineralization occurs when minerals fill spaces in bones and tissues, turning them to stone over time.",
                  "es": "Permineralization occurs when minerals fill spaces in bones and tissues, turning them to stone over time.",
                  "de": "Permineralization occurs when minerals fill spaces in bones and tissues, turning them to stone over time.",
                  "nl": "Permineralization occurs when minerals fill spaces in bones and tissues, turning them to stone over time."
        }
      },
      {
        question: {
                  "en": "What is a trace fossil?",
                  "es": "What is a trace fossil?",
                  "de": "What is a trace fossil?",
                  "nl": "What is a trace fossil?"
        },
        options: [
        {
                  "en": "Footprint only",
                  "es": "Footprint only",
                  "de": "Footprint only",
                  "nl": "Footprint only"
        },
        {
                  "en": "Evidence of activity, not body parts",
                  "es": "Evidence of activity, not body parts",
                  "de": "Evidence of activity, not body parts",
                  "nl": "Evidence of activity, not body parts"
        },
        {
                  "en": "Bone fragment",
                  "es": "Bone fragment",
                  "de": "Bone fragment",
                  "nl": "Bone fragment"
        },
        {
                  "en": "Complete skeleton",
                  "es": "Complete skeleton",
                  "de": "Complete skeleton",
                  "nl": "Complete skeleton"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Trace fossils preserve evidence of activity like footprints, nests, or burrows rather than body parts.",
                  "es": "Trace fossils preserve evidence of activity like footprints, nests, or burrows rather than body parts.",
                  "de": "Trace fossils preserve evidence of activity like footprints, nests, or burrows rather than body parts.",
                  "nl": "Trace fossils preserve evidence of activity like footprints, nests, or burrows rather than body parts."
        }
      },
      {
        question: {
                  "en": "What are coprolites?",
                  "es": "What are coprolites?",
                  "de": "What are coprolites?",
                  "nl": "What are coprolites?"
        },
        options: [
        {
                  "en": "Fossilized feces",
                  "es": "Fossilized feces",
                  "de": "Fossilized feces",
                  "nl": "Fossilized feces"
        },
        {
                  "en": "Fossilized eggs",
                  "es": "Fossilized eggs",
                  "de": "Fossilized eggs",
                  "nl": "Fossilized eggs"
        },
        {
                  "en": "Fossilized teeth",
                  "es": "Fossilized teeth",
                  "de": "Fossilized teeth",
                  "nl": "Fossilized teeth"
        },
        {
                  "en": "Fossilized skin",
                  "es": "Fossilized skin",
                  "de": "Fossilized skin",
                  "nl": "Fossilized skin"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Coprolites are fossilized feces that provide information about dinosaur diets and digestive systems.",
                  "es": "Coprolites are fossilized feces that provide information about dinosaur diets and digestive systems.",
                  "de": "Coprolites are fossilized feces that provide information about dinosaur diets and digestive systems.",
                  "nl": "Coprolites are fossilized feces that provide information about dinosaur diets and digestive systems."
        }
      },
      {
        question: {
                  "en": "What is the best environment for fossilization?",
                  "es": "What is the best environment for fossilization?",
                  "de": "What is the best environment for fossilization?",
                  "nl": "What is the best environment for fossilization?"
        },
        options: [
        {
                  "en": "Mountain peaks",
                  "es": "Mountain peaks",
                  "de": "Mountain peaks",
                  "nl": "Mountain peaks"
        },
        {
                  "en": "Rapid burial in sediment",
                  "es": "Rapid burial in sediment",
                  "de": "Rapid burial in sediment",
                  "nl": "Rapid burial in sediment"
        },
        {
                  "en": "Open plains",
                  "es": "Open plains",
                  "de": "Open plains",
                  "nl": "Open plains"
        },
        {
                  "en": "Dry desert",
                  "es": "Dry desert",
                  "de": "Dry desert",
                  "nl": "Dry desert"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Rapid burial in sediment (like mud or sand) protects remains from scavengers and decay, ideal for fossilization.",
                  "es": "Rapid burial in sediment (like mud or sand) protects remains from scavengers and decay, ideal for fossilization.",
                  "de": "Rapid burial in sediment (like mud or sand) protects remains from scavengers and decay, ideal for fossilization.",
                  "nl": "Rapid burial in sediment (like mud or sand) protects remains from scavengers and decay, ideal for fossilization."
        }
      },
      {
        question: {
                  "en": "What is a cast fossil?",
                  "es": "What is a cast fossil?",
                  "de": "What is a cast fossil?",
                  "nl": "What is a cast fossil?"
        },
        options: [
        {
                  "en": "Bone turned to stone",
                  "es": "Bone turned to stone",
                  "de": "Bone turned to stone",
                  "nl": "Bone turned to stone"
        },
        {
                  "en": "Mineral filling of a mold",
                  "es": "Mineral filling of a mold",
                  "de": "Mineral filling of a mold",
                  "nl": "Mineral filling of a mold"
        },
        {
                  "en": "Fossilized impression",
                  "es": "Fossilized impression",
                  "de": "Fossilized impression",
                  "nl": "Fossilized impression"
        },
        {
                  "en": "Amber-preserved organism",
                  "es": "Amber-preserved organism",
                  "de": "Amber-preserved organism",
                  "nl": "Amber-preserved organism"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "A cast fossil forms when minerals fill a mold (hollow space) left by dissolved organic material.",
                  "es": "A cast fossil forms when minerals fill a mold (hollow space) left by dissolved organic material.",
                  "de": "A cast fossil forms when minerals fill a mold (hollow space) left by dissolved organic material.",
                  "nl": "A cast fossil forms when minerals fill a mold (hollow space) left by dissolved organic material."
        }
      },
      {
        question: {
                  "en": "Who was Mary Anning?",
                  "es": "Who was Mary Anning?",
                  "de": "Who was Mary Anning?",
                  "nl": "Who was Mary Anning?"
        },
        options: [
        {
                  "en": "Museum curator",
                  "es": "Museum curator",
                  "de": "Museum curator",
                  "nl": "Museum curator"
        },
        {
                  "en": "Famous fossil collector from the 1800s",
                  "es": "Famous fossil collector from the 1800s",
                  "de": "Famous fossil collector from the 1800s",
                  "nl": "Famous fossil collector from the 1800s"
        },
        {
                  "en": "Dinosaur namer",
                  "es": "Dinosaur namer",
                  "de": "Dinosaur namer",
                  "nl": "Dinosaur namer"
        },
        {
                  "en": "First paleontologist",
                  "es": "First paleontologist",
                  "de": "First paleontologist",
                  "nl": "First paleontologist"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Mary Anning was a pioneering fossil collector and paleontologist who made significant discoveries in the early 1800s.",
                  "es": "Mary Anning was a pioneering fossil collector and paleontologist who made significant discoveries in the early 1800s.",
                  "de": "Mary Anning was a pioneering fossil collector and paleontologist who made significant discoveries in the early 1800s.",
                  "nl": "Mary Anning was a pioneering fossil collector and paleontologist who made significant discoveries in the early 1800s."
        }
      },
      {
        question: {
                  "en": "What does 'petrified' mean?",
                  "es": "What does 'petrified' mean?",
                  "de": "What does 'petrified' mean?",
                  "nl": "What does 'petrified' mean?"
        },
        options: [
        {
                  "en": "Turned to stone",
                  "es": "Turned to stone",
                  "de": "Turned to stone",
                  "nl": "Turned to stone"
        },
        {
                  "en": "Very scared",
                  "es": "Very scared",
                  "de": "Very scared",
                  "nl": "Very scared"
        },
        {
                  "en": "Well preserved",
                  "es": "Well preserved",
                  "de": "Well preserved",
                  "nl": "Well preserved"
        },
        {
                  "en": "Very old",
                  "es": "Very old",
                  "de": "Very old",
                  "nl": "Very old"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Petrified literally means 'turned to stone' through the fossilization process.",
                  "es": "Petrified literally means 'turned to stone' through the fossilization process.",
                  "de": "Petrified literally means 'turned to stone' through the fossilization process.",
                  "nl": "Petrified literally means 'turned to stone' through the fossilization process."
        }
      },
      {
        question: {
                  "en": "What is taphonomy?",
                  "es": "What is taphonomy?",
                  "de": "What is taphonomy?",
                  "nl": "What is taphonomy?"
        },
        options: [
        {
                  "en": "Study of fossilization process",
                  "es": "Study of fossilization process",
                  "de": "Study of fossilization process",
                  "nl": "Study of fossilization process"
        },
        {
                  "en": "Study of rocks",
                  "es": "Study of rocks",
                  "de": "Study of rocks",
                  "nl": "Study of rocks"
        },
        {
                  "en": "Study of extinction",
                  "es": "Study of extinction",
                  "de": "Study of extinction",
                  "nl": "Study of extinction"
        },
        {
                  "en": "Study of dinosaurs",
                  "es": "Study of dinosaurs",
                  "de": "Study of dinosaurs",
                  "nl": "Study of dinosaurs"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Taphonomy studies the processes that affect organisms from death to discovery as fossils.",
                  "es": "Taphonomy studies the processes that affect organisms from death to discovery as fossils.",
                  "de": "Taphonomy studies the processes that affect organisms from death to discovery as fossils.",
                  "nl": "Taphonomy studies the processes that affect organisms from death to discovery as fossils."
        }
      },
      {
        question: {
                  "en": "What percentage of organisms become fossils?",
                  "es": "What percentage of organisms become fossils?",
                  "de": "What percentage of organisms become fossils?",
                  "nl": "What percentage of organisms become fossils?"
        },
        options: [
        {
                  "en": "Less than 1%",
                  "es": "Less than 1%",
                  "de": "Less than 1%",
                  "nl": "Less than 1%"
        },
        {
                  "en": "Most organisms",
                  "es": "Most organisms",
                  "de": "Most organisms",
                  "nl": "Most organisms"
        },
        {
                  "en": "About 10%",
                  "es": "About 10%",
                  "de": "About 10%",
                  "nl": "About 10%"
        },
        {
                  "en": "About 50%",
                  "es": "About 50%",
                  "de": "About 50%",
                  "nl": "About 50%"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Less than 1% of all organisms that ever lived become fossils - fossilization is extremely rare.",
                  "es": "Less than 1% of all organisms that ever lived become fossils - fossilization is extremely rare.",
                  "de": "Less than 1% of all organisms that ever lived become fossils - fossilization is extremely rare.",
                  "nl": "Less than 1% of all organisms that ever lived become fossils - fossilization is extremely rare."
        }
      },
      {
        question: {
                  "en": "What tool do paleontologists use most in the field?",
                  "es": "What tool do paleontologists use most in the field?",
                  "de": "What tool do paleontologists use most in the field?",
                  "nl": "What tool do paleontologists use most in the field?"
        },
        options: [
        {
                  "en": "Hammers",
                  "es": "Hammers",
                  "de": "Hammers",
                  "nl": "Hammers"
        },
        {
                  "en": "Small picks and brushes",
                  "es": "Small picks and brushes",
                  "de": "Small picks and brushes",
                  "nl": "Small picks and brushes"
        },
        {
                  "en": "Shovels",
                  "es": "Shovels",
                  "de": "Shovels",
                  "nl": "Shovels"
        },
        {
                  "en": "Jackhammers",
                  "es": "Jackhammers",
                  "de": "Jackhammers",
                  "nl": "Jackhammers"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Paleontologists carefully use small picks, brushes, and dental tools to avoid damaging delicate fossils.",
                  "es": "Paleontologists carefully use small picks, brushes, and dental tools to avoid damaging delicate fossils.",
                  "de": "Paleontologists carefully use small picks, brushes, and dental tools to avoid damaging delicate fossils.",
                  "nl": "Paleontologists carefully use small picks, brushes, and dental tools to avoid damaging delicate fossils."
        }
      },
      {
        question: {
                  "en": "What is the oldest dinosaur fossil ever found?",
                  "es": "What is the oldest dinosaur fossil ever found?",
                  "de": "What is the oldest dinosaur fossil ever found?",
                  "nl": "What is the oldest dinosaur fossil ever found?"
        },
        options: [
        {
                  "en": "Approximately 230 million years old",
                  "es": "Approximately 230 million years old",
                  "de": "Approximately 230 million years old",
                  "nl": "Approximately 230 million years old"
        },
        {
                  "en": "300 million years old",
                  "es": "300 million years old",
                  "de": "300 million years old",
                  "nl": "300 million years old"
        },
        {
                  "en": "100 million years old",
                  "es": "100 million years old",
                  "de": "100 million years old",
                  "nl": "100 million years old"
        },
        {
                  "en": "500 million years old",
                  "es": "500 million years old",
                  "de": "500 million years old",
                  "nl": "500 million years old"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "The oldest known dinosaur fossils date to approximately 230 million years ago, from the Late Triassic.",
                  "es": "The oldest known dinosaur fossils date to approximately 230 million years ago, from the Late Triassic.",
                  "de": "The oldest known dinosaur fossils date to approximately 230 million years ago, from the Late Triassic.",
                  "nl": "The oldest known dinosaur fossils date to approximately 230 million years ago, from the Late Triassic."
        }
      },
      {
        question: {
                  "en": "What is a fossil matrix?",
                  "es": "What is a fossil matrix?",
                  "de": "What is a fossil matrix?",
                  "nl": "What is a fossil matrix?"
        },
        options: [
        {
                  "en": "Fossil museum display",
                  "es": "Fossil museum display",
                  "de": "Fossil museum display",
                  "nl": "Fossil museum display"
        },
        {
                  "en": "Fossil classification system",
                  "es": "Fossil classification system",
                  "de": "Fossil classification system",
                  "nl": "Fossil classification system"
        },
        {
                  "en": "Fossil database",
                  "es": "Fossil database",
                  "de": "Fossil database",
                  "nl": "Fossil database"
        },
        {
                  "en": "Rock surrounding a fossil",
                  "es": "Rock surrounding a fossil",
                  "de": "Rock surrounding a fossil",
                  "nl": "Rock surrounding a fossil"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "The matrix is the rock or sediment surrounding and encasing a fossil.",
                  "es": "The matrix is the rock or sediment surrounding and encasing a fossil.",
                  "de": "The matrix is the rock or sediment surrounding and encasing a fossil.",
                  "nl": "The matrix is the rock or sediment surrounding and encasing a fossil."
        }
      },
      {
        question: {
                  "en": "What is exceptional preservation?",
                  "es": "What is exceptional preservation?",
                  "de": "What is exceptional preservation?",
                  "nl": "What is exceptional preservation?"
        },
        options: [
        {
                  "en": "Large fossil size",
                  "es": "Large fossil size",
                  "de": "Large fossil size",
                  "nl": "Large fossil size"
        },
        {
                  "en": "Perfect bone preservation",
                  "es": "Perfect bone preservation",
                  "de": "Perfect bone preservation",
                  "nl": "Perfect bone preservation"
        },
        {
                  "en": "Preservation of soft tissues",
                  "es": "Preservation of soft tissues",
                  "de": "Preservation of soft tissues",
                  "nl": "Preservation of soft tissues"
        },
        {
                  "en": "Complete skeletons",
                  "es": "Complete skeletons",
                  "de": "Complete skeletons",
                  "nl": "Complete skeletons"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Exceptional preservation occurs when rare conditions allow soft tissues, skin, or feathers to fossilize.",
                  "es": "Exceptional preservation occurs when rare conditions allow soft tissues, skin, or feathers to fossilize.",
                  "de": "Exceptional preservation occurs when rare conditions allow soft tissues, skin, or feathers to fossilize.",
                  "nl": "Exceptional preservation occurs when rare conditions allow soft tissues, skin, or feathers to fossilize."
        }
      },
      {
        question: {
                  "en": "What is the La Brea Tar Pits famous for?",
                  "es": "What is the La Brea Tar Pits famous for?",
                  "de": "What is the La Brea Tar Pits famous for?",
                  "nl": "What is the La Brea Tar Pits famous for?"
        },
        options: [
        {
                  "en": "Dinosaur fossils",
                  "es": "Dinosaur fossils",
                  "de": "Dinosaur fossils",
                  "nl": "Dinosaur fossils"
        },
        {
                  "en": "Marine fossils",
                  "es": "Marine fossils",
                  "de": "Marine fossils",
                  "nl": "Marine fossils"
        },
        {
                  "en": "Preserving Ice Age animals in asphalt",
                  "es": "Preserving Ice Age animals in asphalt",
                  "de": "Preserving Ice Age animals in asphalt",
                  "nl": "Preserving Ice Age animals in asphalt"
        },
        {
                  "en": "Oldest fossils",
                  "es": "Oldest fossils",
                  "de": "Oldest fossils",
                  "nl": "Oldest fossils"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "The La Brea Tar Pits in Los Angeles preserved numerous Ice Age animals in natural asphalt seeps.",
                  "es": "The La Brea Tar Pits in Los Angeles preserved numerous Ice Age animals in natural asphalt seeps.",
                  "de": "The La Brea Tar Pits in Los Angeles preserved numerous Ice Age animals in natural asphalt seeps.",
                  "nl": "The La Brea Tar Pits in Los Angeles preserved numerous Ice Age animals in natural asphalt seeps."
        }
      },
      {
        question: {
                  "en": "What is a type specimen?",
                  "es": "What is a type specimen?",
                  "de": "What is a type specimen?",
                  "nl": "What is a type specimen?"
        },
        options: [
        {
                  "en": "Typical fossil example",
                  "es": "Typical fossil example",
                  "de": "Typical fossil example",
                  "nl": "Typical fossil example"
        },
        {
                  "en": "Individual fossil defining a species",
                  "es": "Individual fossil defining a species",
                  "de": "Individual fossil defining a species",
                  "nl": "Individual fossil defining a species"
        },
        {
                  "en": "First fossil found",
                  "es": "First fossil found",
                  "de": "First fossil found",
                  "nl": "First fossil found"
        },
        {
                  "en": "Largest fossil",
                  "es": "Largest fossil",
                  "de": "Largest fossil",
                  "nl": "Largest fossil"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "A type specimen is the individual fossil on which the description and name of a new species is based.",
                  "es": "A type specimen is the individual fossil on which the description and name of a new species is based.",
                  "de": "A type specimen is the individual fossil on which the description and name of a new species is based.",
                  "nl": "A type specimen is the individual fossil on which the description and name of a new species is based."
        }
      },
      {
        question: {
                  "en": "What technology helps find fossils without digging?",
                  "es": "What technology helps find fossils without digging?",
                  "de": "What technology helps find fossils without digging?",
                  "nl": "What technology helps find fossils without digging?"
        },
        options: [
        {
                  "en": "Ground-penetrating radar",
                  "es": "Ground-penetrating radar",
                  "de": "Ground-penetrating radar",
                  "nl": "Ground-penetrating radar"
        },
        {
                  "en": "Metal detectors",
                  "es": "Metal detectors",
                  "de": "Metal detectors",
                  "nl": "Metal detectors"
        },
        {
                  "en": "X-rays",
                  "es": "X-rays",
                  "de": "X-rays",
                  "nl": "X-rays"
        },
        {
                  "en": "Magnets",
                  "es": "Magnets",
                  "de": "Magnets",
                  "nl": "Magnets"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Ground-penetrating radar and other remote sensing technologies can detect fossil-bearing layers without excavation.",
                  "es": "Ground-penetrating radar and other remote sensing technologies can detect fossil-bearing layers without excavation.",
                  "de": "Ground-penetrating radar and other remote sensing technologies can detect fossil-bearing layers without excavation.",
                  "nl": "Ground-penetrating radar and other remote sensing technologies can detect fossil-bearing layers without excavation."
        }
      },
      {
        question: {
                  "en": "What is a fossil bed?",
                  "es": "What is a fossil bed?",
                  "de": "What is a fossil bed?",
                  "nl": "What is a fossil bed?"
        },
        options: [
        {
                  "en": "Excavation site",
                  "es": "Excavation site",
                  "de": "Excavation site",
                  "nl": "Excavation site"
        },
        {
                  "en": "Layer of rock rich in fossils",
                  "es": "Layer of rock rich in fossils",
                  "de": "Layer of rock rich in fossils",
                  "nl": "Layer of rock rich in fossils"
        },
        {
                  "en": "Fossil storage",
                  "es": "Fossil storage",
                  "de": "Fossil storage",
                  "nl": "Fossil storage"
        },
        {
                  "en": "Museum display area",
                  "es": "Museum display area",
                  "de": "Museum display area",
                  "nl": "Museum display area"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "A fossil bed is a layer or stratum of sedimentary rock especially rich in fossils.",
                  "es": "A fossil bed is a layer or stratum of sedimentary rock especially rich in fossils.",
                  "de": "A fossil bed is a layer or stratum of sedimentary rock especially rich in fossils.",
                  "nl": "A fossil bed is a layer or stratum of sedimentary rock especially rich in fossils."
        }
      },
      {
        question: {
                  "en": "What famous fossil hunter found the first Iguanodon teeth?",
                  "es": "What famous fossil hunter found the first Iguanodon teeth?",
                  "de": "What famous fossil hunter found the first Iguanodon teeth?",
                  "nl": "What famous fossil hunter found the first Iguanodon teeth?"
        },
        options: [
        {
                  "en": "Charles Darwin",
                  "es": "Charles Darwin",
                  "de": "Charles Darwin",
                  "nl": "Charles Darwin"
        },
        {
                  "en": "Gideon Mantell (or his wife Mary Ann)",
                  "es": "Gideon Mantell (or his wife Mary Ann)",
                  "de": "Gideon Mantell (or his wife Mary Ann)",
                  "nl": "Gideon Mantell (or his wife Mary Ann)"
        },
        {
                  "en": "Richard Owen",
                  "es": "Richard Owen",
                  "de": "Richard Owen",
                  "nl": "Richard Owen"
        },
        {
                  "en": "William Buckland",
                  "es": "William Buckland",
                  "de": "William Buckland",
                  "nl": "William Buckland"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Gideon Mantell and possibly his wife Mary Ann discovered Iguanodon teeth in 1822, among the first dinosaur fossils recognized.",
                  "es": "Gideon Mantell and possibly his wife Mary Ann discovered Iguanodon teeth in 1822, among the first dinosaur fossils recognized.",
                  "de": "Gideon Mantell and possibly his wife Mary Ann discovered Iguanodon teeth in 1822, among the first dinosaur fossils recognized.",
                  "nl": "Gideon Mantell and possibly his wife Mary Ann discovered Iguanodon teeth in 1822, among the first dinosaur fossils recognized."
        }
      }
    ]
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level1;
  }
})();