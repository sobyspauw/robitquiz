// Arts & Culture - Level 5: Theater & Acting
(function() {
  const level5 = {
    name: {
      en: "Theater & Acting",
      es: "Teatro y Actuación",
      de: "Theater & Schauspiel",
      nl: "Theater & Acteren"
    },
    questions: [
      {
        question: {
          en: "What do actors perform on?",
          es: "¿En qué actúan los actores?",
          de: "Worauf treten Schauspieler auf?",
          nl: "Waarop treden acteurs op?"
        },
        options: [
          { en: "Stage", es: "Escenario", de: "Bühne", nl: "Podium" },
          { en: "Roof", es: "Techo", de: "Dach", nl: "Dak" },
          { en: "Floor", es: "Suelo", de: "Boden", nl: "Vloer" },
          { en: "Chair", es: "Silla", de: "Stuhl", nl: "Stoel" }
        ],
        correct: 0,
        explanation: {
          en: "A stage is a raised platform where actors perform plays. It's the special area in a theater where all the action happens, and it's designed so the audience can see everything clearly from their seats.",
          es: "Un escenario es una plataforma elevada donde los actores interpretan obras. Es el área especial en un teatro donde ocurre toda la acción, y está diseñado para que la audiencia pueda ver todo claramente desde sus asientos.",
          de: "Eine Bühne ist eine erhöhte Plattform, auf der Schauspieler Theaterstücke aufführen. Es ist der besondere Bereich in einem Theater, wo die ganze Handlung stattfindet, und sie ist so gestaltet, dass das Publikum alles klar von ihren Plätzen aus sehen kann.",
          nl: "Een podium is een verhoogd platform waar acteurs toneelstukken opvoeren. Het is het speciale gebied in een theater waar alle actie plaatsvindt, en het is zo ontworpen dat het publiek alles duidelijk kan zien vanaf hun stoelen."
        }
      },
      {
        question: {
          en: "What do actors wear to become different characters?",
          es: "¿Qué llevan los actores para convertirse en diferentes personajes?",
          de: "Was tragen Schauspieler um verschiedene Charaktere zu werden?",
          nl: "Wat dragen acteurs om verschillende personages te worden?"
        },
        options: [
          { en: "Costumes", es: "Disfraces", de: "Kostüme", nl: "Kostuums" },
          { en: "Uniforms", es: "Uniformes", de: "Uniformen", nl: "Uniformen" },
          { en: "Pajamas", es: "Pijamas", de: "Pyjamas", nl: "Pyjama's" },
          { en: "Swimsuits", es: "Trajes de baño", de: "Badeanzüge", nl: "Zwempakken" }
        ],
        correct: 0,
        explanation: {
          en: "Costumes are special clothes that actors wear to transform into their characters. They help tell the story by showing what time period the play is set in and what kind of person each character is.",
          es: "Los disfraces son ropa especial que usan los actores para transformarse en sus personajes. Ayudan a contar la historia mostrando en qué período de tiempo está ambientada la obra y qué tipo de persona es cada personaje.",
          de: "Kostüme sind besondere Kleidung, die Schauspieler tragen, um sich in ihre Charaktere zu verwandeln. Sie helfen dabei, die Geschichte zu erzählen, indem sie zeigen, in welcher Zeitperiode das Stück spielt und was für eine Person jeder Charakter ist.",
          nl: "Kostuums zijn speciale kleding die acteurs dragen om in hun personages te veranderen. Ze helpen het verhaal te vertellen door te laten zien in welke tijdsperiode het stuk zich afspeelt en wat voor persoon elk personage is."
        }
      },
      {
        question: {
          en: "What do you call the people who watch a play?",
          es: "¿Cómo se llama a la gente que ve una obra?",
          de: "Wie nennt man die Leute, die ein Theaterstück ansehen?",
          nl: "Hoe noem je mensen die naar een toneelstuk kijken?"
        },
        options: [
          { en: "Audience", es: "Audiencia", de: "Publikum", nl: "Publiek" },
          { en: "Actors", es: "Actores", de: "Schauspieler", nl: "Acteurs" },
          { en: "Directors", es: "Directores", de: "Regisseure", nl: "Regisseurs" },
          { en: "Dancers", es: "Bailarines", de: "Tänzer", nl: "Dansers" }
        ],
        correct: 0,
        explanation: {
          en: "The audience is all the people who come to watch a play. They sit in the theater seats and watch the actors perform on stage. The audience is very important because they give actors energy through their reactions like clapping and laughing.",
          es: "La audiencia son todas las personas que vienen a ver una obra. Se sientan en los asientos del teatro y ven a los actores actuar en el escenario. La audiencia es muy importante porque le da energía a los actores a través de sus reacciones como aplaudir y reír.",
          de: "Das Publikum sind alle Menschen, die kommen, um ein Theaterstück anzusehen. Sie sitzen auf den Theatersitzen und schauen den Schauspielern auf der Bühne zu. Das Publikum ist sehr wichtig, weil es den Schauspielern durch ihre Reaktionen wie Klatschen und Lachen Energie gibt.",
          nl: "Het publiek zijn alle mensen die komen om naar een toneelstuk te kijken. Ze zitten op de theaterstoelen en kijken naar de acteurs die optreden op het podium. Het publiek is heel belangrijk omdat ze acteurs energie geven door hun reacties zoals klappen en lachen."
        }
      },
      {
        question: {
          en: "What do actors use to change their appearance?",
          es: "¿Qué usan los actores para cambiar su apariencia?",
          de: "Was benutzen Schauspieler um ihr Aussehen zu verändern?",
          nl: "Wat gebruiken acteurs om hun uiterlijk te veranderen?"
        },
        options: [
          { en: "Makeup", es: "Maquillaje", de: "Make-up", nl: "Make-up" },
          { en: "Food", es: "Comida", de: "Essen", nl: "Eten" },
          { en: "Books", es: "Libros", de: "Bücher", nl: "Boeken" },
          { en: "Toys", es: "Juguetes", de: "Spielzeug", nl: "Speelgoed" }
        ],
        correct: 0,
        explanation: {
          en: "Makeup is special paint that actors put on their faces to look like different characters. It can make them look older, younger, or even like animals or fantasy creatures. Theater makeup is usually brighter than regular makeup so the audience can see it from far away.",
          es: "El maquillaje es pintura especial que los actores se ponen en la cara para parecerse a diferentes personajes. Puede hacerlos ver mayores, más jóvenes, o incluso como animales o criaturas fantásticas. El maquillaje teatral generalmente es más brillante que el maquillaje regular para que la audiencia pueda verlo desde lejos.",
          de: "Make-up ist spezielle Farbe, die Schauspieler auf ihre Gesichter auftragen, um wie verschiedene Charaktere auszusehen. Es kann sie älter, jünger oder sogar wie Tiere oder Fantasiewesen aussehen lassen. Theater-Make-up ist normalerweise heller als normales Make-up, damit das Publikum es aus der Ferne sehen kann.",
          nl: "Make-up is speciale verf die acteurs op hun gezichten doen om op verschillende personages te lijken. Het kan hen ouder, jonger laten lijken, of zelfs als dieren of fantasiewezens. Theatermake-up is meestal helderder dan gewone make-up zodat het publiek het van ver weg kan zien."
        }
      },
      {
        question: {
          en: "What covers the stage when a play isn't happening?",
          es: "¿Qué cubre el escenario cuando no hay obra?",
          de: "Was bedeckt die Bühne, wenn kein Stück aufgeführt wird?",
          nl: "Wat bedekt het podium als er geen voorstelling is?"
        },
        options: [
          { en: "Curtain", es: "Telón", de: "Vorhang", nl: "Gordijn" },
          { en: "Blanket", es: "Manta", de: "Decke", nl: "Deken" },
          { en: "Sheet", es: "Sábana", de: "Laken", nl: "Laken" },
          { en: "Towel", es: "Toalla", de: "Handtuch", nl: "Handdoek" }
        ],
        correct: 0,
        explanation: {
          en: "A curtain is a large piece of fabric that hangs in front of the stage. It hides the stage before the play starts and between scenes. When the curtain opens, it reveals the stage and the play begins!",
          es: "Un telón es un gran pedazo de tela que cuelga frente al escenario. Oculta el escenario antes de que comience la obra y entre escenas. ¡Cuando el telón se abre, revela el escenario y la obra comienza!",
          de: "Ein Vorhang ist ein großes Stück Stoff, das vor der Bühne hängt. Er verbirgt die Bühne bevor das Stück beginnt und zwischen den Szenen. Wenn sich der Vorhang öffnet, enthüllt er die Bühne und das Stück beginnt!",
          nl: "Een gordijn is een groot stuk stof dat voor het podium hangt. Het verbergt het podium voordat het stuk begint en tussen scènes. Wanneer het gordijn opengaat, onthult het het podium en begint het stuk!"
        }
      },
      {
        question: {
          en: "What do actors memorize to know what to say?",
          es: "¿Qué memorizan los actores para saber qué decir?",
          de: "Was lernen Schauspieler auswendig um zu wissen was sie sagen sollen?",
          nl: "Wat leren acteurs uit het hoofd om te weten wat ze moeten zeggen?"
        },
        options: [
          { en: "Script", es: "Guion", de: "Drehbuch", nl: "Script" },
          { en: "Menu", es: "Menú", de: "Menü", nl: "Menu" },
          { en: "Recipe", es: "Receta", de: "Rezept", nl: "Recept" },
          { en: "List", es: "Lista", de: "Liste", nl: "Lijst" }
        ],
        correct: 0,
        explanation: {
          en: "A script is like a book that contains all the words actors need to say in a play. It also tells them when to move and what actions to do. Actors study their scripts carefully to memorize their lines and understand their character.",
          es: "Un guion es como un libro que contiene todas las palabras que los actores necesitan decir en una obra. También les dice cuándo moverse y qué acciones hacer. Los actores estudian sus guiones cuidadosamente para memorizar sus diálogos y entender su personaje.",
          de: "Ein Drehbuch ist wie ein Buch, das alle Worte enthält, die Schauspieler in einem Stück sagen müssen. Es sagt ihnen auch, wann sie sich bewegen sollen und welche Handlungen sie ausführen sollen. Schauspieler studieren ihre Drehbücher sorgfältig, um ihren Text auswendig zu lernen und ihren Charakter zu verstehen.",
          nl: "Een script is als een boek dat alle woorden bevat die acteurs moeten zeggen in een toneelstuk. Het vertelt hen ook wanneer ze moeten bewegen en welke acties ze moeten doen. Acteurs bestuderen hun scripts zorgvuldig om hun tekst uit het hoofd te leren en hun personage te begrijpen."
        }
      },
      {
        question: {
          en: "What do you call a play that makes you laugh?",
          es: "¿Cómo se llama una obra que te hace reír?",
          de: "Wie nennt man ein Stück, das einen zum Lachen bringt?",
          nl: "Hoe noem je een toneelstuk dat je aan het lachen maakt?"
        },
        options: [
          { en: "Comedy", es: "Comedia", de: "Komödie", nl: "Komedie" },
          { en: "Tragedy", es: "Tragedia", de: "Tragödie", nl: "Tragedie" },
          { en: "Mystery", es: "Misterio", de: "Mystery", nl: "Mysterie" },
          { en: "Horror", es: "Terror", de: "Horror", nl: "Horror" }
        ],
        correct: 0,
        explanation: {
          en: "A comedy is a type of play that's meant to make people laugh and feel happy. It usually has funny characters, silly situations, and a happy ending. Comedies help people forget their worries and have a good time.",
          es: "Una comedia es un tipo de obra que está destinada a hacer reír a la gente y sentirse feliz. Generalmente tiene personajes divertidos, situaciones tontas y un final feliz. Las comedias ayudan a la gente a olvidar sus preocupaciones y pasar un buen rato.",
          de: "Eine Komödie ist eine Art von Theaterstück, das Menschen zum Lachen bringen und glücklich machen soll. Sie hat normalerweise lustige Charaktere, alberne Situationen und ein glückliches Ende. Komödien helfen Menschen, ihre Sorgen zu vergessen und eine gute Zeit zu haben.",
          nl: "Een komedie is een soort toneelstuk dat bedoeld is om mensen te laten lachen en zich gelukkig te laten voelen. Het heeft meestal grappige personages, gekke situaties en een gelukkig einde. Komedies helpen mensen hun zorgen te vergeten en een leuke tijd te hebben."
        }
      },
      {
        question: {
          en: "Who tells actors what to do in a play?",
          es: "¿Quién les dice a los actores qué hacer en una obra?",
          de: "Wer sagt den Schauspielern was sie in einem Stück tun sollen?",
          nl: "Wie vertelt acteurs wat ze moeten doen in een toneelstuk?"
        },
        options: [
          { en: "Director", es: "Director", de: "Regisseur", nl: "Regisseur" },
          { en: "Audience", es: "Audiencia", de: "Publikum", nl: "Publiek" },
          { en: "Cook", es: "Cocinero", de: "Koch", nl: "Kok" },
          { en: "Doctor", es: "Doctor", de: "Arzt", nl: "Dokter" }
        ],
        correct: 0,
        explanation: {
          en: "A director is like the boss of a play. They help actors understand their characters, decide how the story should be told, and make sure everything looks and sounds perfect. The director has a vision for how the play should look and guides everyone to make it happen.",
          es: "Un director es como el jefe de una obra. Ayuda a los actores a entender sus personajes, decide cómo debe contarse la historia y se asegura de que todo se vea y suene perfecto. El director tiene una visión de cómo debe verse la obra y guía a todos para que suceda.",
          de: "Ein Regisseur ist wie der Chef eines Theaterstücks. Er hilft Schauspielern, ihre Charaktere zu verstehen, entscheidet, wie die Geschichte erzählt werden soll, und sorgt dafür, dass alles perfekt aussieht und klingt. Der Regisseur hat eine Vision davon, wie das Stück aussehen soll und führt alle an, um es zu verwirklichen.",
          nl: "Een regisseur is als de baas van een toneelstuk. Ze helpen acteurs hun personages te begrijpen, beslissen hoe het verhaal verteld moet worden, en zorgen ervoor dat alles er perfect uitziet en klinkt. De regisseur heeft een visie van hoe het stuk eruit moet zien en begeleidt iedereen om het te laten gebeuren."
        }
      },
      {
        question: {
          en: "What makes the stage look like different places?",
          es: "¿Qué hace que el escenario parezca lugares diferentes?",
          de: "Was lässt die Bühne wie verschiedene Orte aussehen?",
          nl: "Wat laat het podium eruitzien als verschillende plaatsen?"
        },
        options: [
          { en: "Scenery", es: "Escenografía", de: "Bühnenbild", nl: "Decor" },
          { en: "Food", es: "Comida", de: "Essen", nl: "Eten" },
          { en: "Animals", es: "Animales", de: "Tiere", nl: "Dieren" },
          { en: "Cars", es: "Coches", de: "Autos", nl: "Auto's" }
        ],
        correct: 0,
        explanation: {
          en: "Scenery (also called sets) includes all the painted backdrops, furniture, and decorations that make the stage look like a real place. It can transform the stage into a forest, a castle, a house, or anywhere the story takes place.",
          es: "La escenografía (también llamada decorados) incluye todos los fondos pintados, muebles y decoraciones que hacen que el escenario parezca un lugar real. Puede transformar el escenario en un bosque, un castillo, una casa o cualquier lugar donde ocurra la historia.",
          de: "Das Bühnenbild umfasst alle gemalten Hintergründe, Möbel und Dekorationen, die die Bühne wie einen echten Ort aussehen lassen. Es kann die Bühne in einen Wald, ein Schloss, ein Haus oder jeden Ort verwandeln, wo die Geschichte stattfindet.",
          nl: "Decor omvat alle geschilderde achtergronden, meubels en decoraties die het podium eruit laten zien als een echte plaats. Het kan het podium veranderen in een bos, een kasteel, een huis, of overal waar het verhaal plaatsvindt."
        }
      },
      {
        question: {
          en: "What do you call a play that makes you sad?",
          es: "¿Cómo se llama una obra que te pone triste?",
          de: "Wie nennt man ein Stück, das einen traurig macht?",
          nl: "Hoe noem je een toneelstuk dat je verdrietig maakt?"
        },
        options: [
          { en: "Tragedy", es: "Tragedia", de: "Tragödie", nl: "Tragedie" },
          { en: "Comedy", es: "Comedia", de: "Komödie", nl: "Komedie" },
          { en: "Musical", es: "Musical", de: "Musical", nl: "Musical" },
          { en: "Adventure", es: "Aventura", de: "Abenteuer", nl: "Avontuur" }
        ],
        correct: 0,
        explanation: {
          en: "A tragedy is a serious type of play that often has a sad ending. These plays explore deep emotions and important themes about life. Even though they're sad, tragedies help us understand feelings and learn important lessons about being human.",
          es: "Una tragedia es un tipo serio de obra que a menudo tiene un final triste. Estas obras exploran emociones profundas y temas importantes sobre la vida. Aunque son tristes, las tragedias nos ayudan a entender sentimientos y aprender lecciones importantes sobre ser humano.",
          de: "Eine Tragödie ist eine ernste Art von Theaterstück, das oft ein trauriges Ende hat. Diese Stücke erkunden tiefe Emotionen und wichtige Themen über das Leben. Obwohl sie traurig sind, helfen uns Tragödien, Gefühle zu verstehen und wichtige Lektionen über das Menschsein zu lernen.",
          nl: "Een tragedie is een serieus soort toneelstuk dat vaak een verdrietig einde heeft. Deze stukken verkennen diepe emoties en belangrijke thema's over het leven. Ook al zijn ze verdrietig, tragedies helpen ons gevoelens te begrijpen en belangrijke lessen te leren over mens zijn."
        }
      },
      {
        question: {
          en: "What lights up the stage so people can see?",
          es: "¿Qué ilumina el escenario para que la gente pueda ver?",
          de: "Was beleuchtet die Bühne damit die Leute sehen können?",
          nl: "Wat verlicht het podium zodat mensen kunnen zien?"
        },
        options: [
          { en: "Stage lights", es: "Luces del escenario", de: "Bühnenlichter", nl: "Podiumlichten" },
          { en: "Candles", es: "Velas", de: "Kerzen", nl: "Kaarsen" },
          { en: "Flashlights", es: "Linternas", de: "Taschenlampen", nl: "Zaklampen" },
          { en: "Matches", es: "Fósforos", de: "Streichhölzer", nl: "Lucifers" }
        ],
        correct: 0,
        explanation: {
          en: "Stage lights are special bright lights that shine on the stage so the audience can see the actors clearly. Different colored lights can create different moods - blue lights might make a scene feel cold or sad, while warm yellow lights can make it feel cozy and happy.",
          es: "Las luces del escenario son luces especiales brillantes que iluminan el escenario para que la audiencia pueda ver a los actores claramente. Diferentes luces de colores pueden crear diferentes ambientes - las luces azules pueden hacer que una escena se sienta fría o triste, mientras que las luces amarillas cálidas pueden hacerla sentir acogedora y feliz.",
          de: "Bühnenlichter sind spezielle helle Lichter, die auf die Bühne scheinen, damit das Publikum die Schauspieler klar sehen kann. Verschiedene farbige Lichter können verschiedene Stimmungen erzeugen - blaue Lichter können eine Szene kalt oder traurig wirken lassen, während warme gelbe Lichter sie gemütlich und fröhlich wirken lassen können.",
          nl: "Podiumlichten zijn speciale felle lichten die op het podium schijnen zodat het publiek de acteurs duidelijk kan zien. Verschillende gekleurde lichten kunnen verschillende stemmingen creëren - blauwe lichten kunnen een scène koud of verdrietig laten voelen, terwijl warme gele lichten het gezellig en gelukkig kunnen laten voelen."
        }
      },
      {
        question: {
          en: "What do you call pretending to be someone else?",
          es: "¿Cómo se llama fingir ser otra persona?",
          de: "Wie nennt man es, so zu tun als wäre man jemand anderes?",
          nl: "Hoe noem je doen alsof je iemand anders bent?"
        },
        options: [
          { en: "Acting", es: "Actuar", de: "Schauspielern", nl: "Acteren" },
          { en: "Singing", es: "Cantar", de: "Singen", nl: "Zingen" },
          { en: "Dancing", es: "Bailar", de: "Tanzen", nl: "Dansen" },
          { en: "Painting", es: "Pintar", de: "Malen", nl: "Schilderen" }
        ],
        correct: 0,
        explanation: {
          en: "Acting is the art of pretending to be a different character. Actors use their voice, body, and emotions to bring characters to life on stage. Good actors make us believe they really are the character they're playing, even though we know it's just pretend.",
          es: "Actuar es el arte de fingir ser un personaje diferente. Los actores usan su voz, cuerpo y emociones para dar vida a los personajes en el escenario. Los buenos actores nos hacen creer que realmente son el personaje que están interpretando, aunque sabemos que es solo fingir.",
          de: "Schauspielern ist die Kunst, so zu tun, als wäre man ein anderer Charakter. Schauspieler verwenden ihre Stimme, ihren Körper und ihre Emotionen, um Charaktere auf der Bühne zum Leben zu erwecken. Gute Schauspieler lassen uns glauben, dass sie wirklich der Charakter sind, den sie spielen, obwohl wir wissen, dass es nur Schauspiel ist.",
          nl: "Acteren is de kunst van doen alsof je een ander personage bent. Acteurs gebruiken hun stem, lichaam en emoties om personages tot leven te brengen op het podium. Goede acteurs laten ons geloven dat ze echt het personage zijn dat ze spelen, ook al weten we dat het maar alsof is."
        }
      },
      {
        question: {
          en: "What do you call the words actors say in a play?",
          es: "¿Cómo se llaman las palabras que dicen los actores en una obra?",
          de: "Wie nennt man die Worte, die Schauspieler in einem Stück sagen?",
          nl: "Hoe noem je de woorden die acteurs in een toneelstuk zeggen?"
        },
        options: [
          { en: "Lines", es: "Diálogos", de: "Text", nl: "Tekst" },
          { en: "Songs", es: "Canciones", de: "Lieder", nl: "Liedjes" },
          { en: "Poems", es: "Poemas", de: "Gedichte", nl: "Gedichten" },
          { en: "Stories", es: "Historias", de: "Geschichten", nl: "Verhalen" }
        ],
        correct: 0,
        explanation: {
          en: "Lines are the specific words that each actor needs to say in a play. Every character has different lines that help tell the story. Actors spend lots of time memorizing their lines so they can say them perfectly during the performance.",
          es: "Los diálogos son las palabras específicas que cada actor necesita decir en una obra. Cada personaje tiene diferentes diálogos que ayudan a contar la historia. Los actores pasan mucho tiempo memorizando sus diálogos para poder decirlos perfectamente durante la actuación.",
          de: "Text sind die spezifischen Worte, die jeder Schauspieler in einem Stück sagen muss. Jeder Charakter hat verschiedene Texte, die helfen, die Geschichte zu erzählen. Schauspieler verbringen viel Zeit damit, ihren Text auswendig zu lernen, damit sie ihn während der Aufführung perfekt sagen können.",
          nl: "Tekst zijn de specifieke woorden die elke acteur moet zeggen in een toneelstuk. Elk personage heeft verschillende tekst die helpt het verhaal te vertellen. Acteurs besteden veel tijd aan het uit het hoofd leren van hun tekst zodat ze het perfect kunnen zeggen tijdens de voorstelling."
        }
      },
      {
        question: {
          en: "Where do actors get ready before a show?",
          es: "¿Dónde se preparan los actores antes de un espectáculo?",
          de: "Wo machen sich Schauspieler vor einer Show bereit?",
          nl: "Waar maken acteurs zich klaar voor een voorstelling?"
        },
        options: [
          { en: "Dressing room", es: "Camerino", de: "Umkleidezimmer", nl: "Kleedkamer" },
          { en: "Kitchen", es: "Cocina", de: "Küche", nl: "Keuken" },
          { en: "Garden", es: "Jardín", de: "Garten", nl: "Tuin" },
          { en: "Bathroom", es: "Baño", de: "Badezimmer", nl: "Badkamer" }
        ],
        correct: 0,
        explanation: {
          en: "A dressing room is a private space where actors change into their costumes and put on their makeup. It's like their personal room backstage where they can prepare for their performance and relax between scenes.",
          es: "Un camerino es un espacio privado donde los actores se cambian a sus disfraces y se ponen maquillaje. Es como su cuarto personal tras bambalinas donde pueden prepararse para su actuación y relajarse entre escenas.",
          de: "Ein Umkleidezimmer ist ein privater Raum, wo Schauspieler sich in ihre Kostüme umziehen und ihr Make-up auftragen. Es ist wie ihr persönlicher Raum hinter der Bühne, wo sie sich auf ihre Aufführung vorbereiten und sich zwischen den Szenen entspannen können.",
          nl: "Een kleedkamer is een privéruimte waar acteurs in hun kostuums veranderen en hun make-up opdoen. Het is als hun persoonlijke kamer backstage waar ze zich kunnen voorbereiden op hun voorstelling en ontspannen tussen scènes."
        }
      },
      {
        question: {
          en: "What do you call the main character in a play?",
          es: "¿Cómo se llama al personaje principal de una obra?",
          de: "Wie nennt man die Hauptfigur in einem Stück?",
          nl: "Hoe noem je het hoofdpersonage in een toneelstuk?"
        },
        options: [
          { en: "Protagonist", es: "Protagonista", de: "Protagonist", nl: "Protagonist" },
          { en: "Audience", es: "Audiencia", de: "Publikum", nl: "Publiek" },
          { en: "Director", es: "Director", de: "Regisseur", nl: "Regisseur" },
          { en: "Writer", es: "Escritor", de: "Schriftsteller", nl: "Schrijver" }
        ],
        correct: 0,
        explanation: {
          en: "A protagonist is the main character in a story - the person the play is mostly about. The audience usually follows the protagonist's journey throughout the play and cares about what happens to them. They're often the hero of the story.",
          es: "Un protagonista es el personaje principal en una historia - la persona de quien se trata principalmente la obra. La audiencia generalmente sigue el viaje del protagonista a lo largo de la obra y se preocupa por lo que le sucede. A menudo son el héroe de la historia.",
          de: "Ein Protagonist ist die Hauptfigur in einer Geschichte - die Person, um die es in dem Stück hauptsächlich geht. Das Publikum folgt normalerweise der Reise des Protagonisten durch das Stück und kümmert sich darum, was mit ihm passiert. Sie sind oft der Held der Geschichte.",
          nl: "Een protagonist is het hoofdpersonage in een verhaal - de persoon waar het toneelstuk voornamelijk over gaat. Het publiek volgt meestal de reis van de protagonist door het stuk en geeft om wat er met hen gebeurt. Ze zijn vaak de held van het verhaal."
        }
      },
      {
        question: {
          en: "What do actors do when they practice a play?",
          es: "¿Qué hacen los actores cuando practican una obra?",
          de: "Was machen Schauspieler wenn sie ein Stück üben?",
          nl: "Wat doen acteurs als ze een toneelstuk oefenen?"
        },
        options: [
          { en: "Rehearse", es: "Ensayar", de: "Proben", nl: "Repeteren" },
          { en: "Sleep", es: "Dormir", de: "Schlafen", nl: "Slapen" },
          { en: "Eat", es: "Comer", de: "Essen", nl: "Eten" },
          { en: "Run", es: "Correr", de: "Laufen", nl: "Rennen" }
        ],
        correct: 0,
        explanation: {
          en: "Rehearsing is when actors practice the play over and over before performing it for an audience. During rehearsals, they learn their lines, practice their movements, and work with the director to make the play as good as possible.",
          es: "Ensayar es cuando los actores practican la obra una y otra vez antes de presentarla para una audiencia. Durante los ensayos, aprenden sus diálogos, practican sus movimientos y trabajan con el director para hacer la obra lo mejor posible.",
          de: "Proben ist, wenn Schauspieler das Stück immer wieder üben, bevor sie es für ein Publikum aufführen. Während der Proben lernen sie ihren Text, üben ihre Bewegungen und arbeiten mit dem Regisseur, um das Stück so gut wie möglich zu machen.",
          nl: "Repeteren is wanneer acteurs het toneelstuk keer op keer oefenen voordat ze het voor een publiek opvoeren. Tijdens repetities leren ze hun tekst, oefenen ze hun bewegingen en werken ze met de regisseur om het stuk zo goed mogelijk te maken."
        }
      },
      {
        question: {
          en: "What do you call a play with singing and dancing?",
          es: "¿Cómo se llama una obra con canto y baile?",
          de: "Wie nennt man ein Stück mit Gesang und Tanz?",
          nl: "Hoe noem je een toneelstuk met zingen en dansen?"
        },
        options: [
          { en: "Musical", es: "Musical", de: "Musical", nl: "Musical" },
          { en: "Drama", es: "Drama", de: "Drama", nl: "Drama" },
          { en: "Mystery", es: "Misterio", de: "Mystery", nl: "Mysterie" },
          { en: "Comedy", es: "Comedia", de: "Komödie", nl: "Komedie" }
        ],
        correct: 0,
        explanation: {
          en: "A musical is a special type of play that combines acting, singing, and dancing to tell a story. The songs and dances help express the characters' feelings and move the story forward. Famous musicals include 'The Lion King' and 'Frozen'.",
          es: "Un musical es un tipo especial de obra que combina actuación, canto y baile para contar una historia. Las canciones y bailes ayudan a expresar los sentimientos de los personajes y hacer avanzar la historia. Los musicales famosos incluyen 'El Rey León' y 'Frozen'.",
          de: "Ein Musical ist eine besondere Art von Theaterstück, das Schauspiel, Gesang und Tanz kombiniert, um eine Geschichte zu erzählen. Die Lieder und Tänze helfen dabei, die Gefühle der Charaktere auszudrücken und die Geschichte voranzutreiben. Berühmte Musicals sind 'Der König der Löwen' und 'Frozen'.",
          nl: "Een musical is een speciaal soort toneelstuk dat acteren, zingen en dansen combineert om een verhaal te vertellen. De liedjes en dansen helpen de gevoelens van de personages uit te drukken en het verhaal vooruit te brengen. Beroemde musicals zijn 'De Leeuwenkoning' en 'Frozen'."
        }
      },
      {
        question: {
          en: "What do you call the story of a play?",
          es: "¿Cómo se llama la historia de una obra?",
          de: "Wie nennt man die Geschichte eines Stücks?",
          nl: "Hoe noem je het verhaal van een toneelstuk?"
        },
        options: [
          { en: "Plot", es: "Trama", de: "Handlung", nl: "Plot" },
          { en: "Recipe", es: "Receta", de: "Rezept", nl: "Recept" },
          { en: "Menu", es: "Menú", de: "Menü", nl: "Menu" },
          { en: "List", es: "Lista", de: "Liste", nl: "Lijst" }
        ],
        correct: 0,
        explanation: {
          en: "The plot is the main story of a play - what happens from beginning to end. It includes all the events, problems the characters face, and how everything gets resolved. A good plot keeps the audience interested and wondering what will happen next.",
          es: "La trama es la historia principal de una obra - lo que pasa desde el principio hasta el final. Incluye todos los eventos, problemas que enfrentan los personajes y cómo se resuelve todo. Una buena trama mantiene a la audiencia interesada y preguntándose qué pasará después.",
          de: "Die Handlung ist die Hauptgeschichte eines Theaterstücks - was von Anfang bis Ende passiert. Sie umfasst alle Ereignisse, Probleme, denen die Charaktere gegenüberstehen, und wie alles gelöst wird. Eine gute Handlung hält das Publikum interessiert und lässt es sich fragen, was als nächstes passieren wird.",
          nl: "De plot is het hoofdverhaal van een toneelstuk - wat er gebeurt van begin tot eind. Het omvat alle gebeurtenissen, problemen die de personages tegenkomen, en hoe alles wordt opgelost. Een goede plot houdt het publiek geïnteresseerd en laat hen zich afvragen wat er hierna zal gebeuren."
        }
      },
      {
        question: {
          en: "What helps actors speak loudly enough for everyone to hear?",
          es: "¿Qué ayuda a los actores a hablar lo suficientemente fuerte para que todos escuchen?",
          de: "Was hilft Schauspielern laut genug zu sprechen damit alle hören können?",
          nl: "Wat helpt acteurs hard genoeg te spreken zodat iedereen kan horen?"
        },
        options: [
          { en: "Microphone", es: "Micrófono", de: "Mikrofon", nl: "Microfoon" },
          { en: "Telescope", es: "Telescopio", de: "Teleskop", nl: "Telescoop" },
          { en: "Camera", es: "Cámara", de: "Kamera", nl: "Camera" },
          { en: "Phone", es: "Teléfono", de: "Telefon", nl: "Telefoon" }
        ],
        correct: 0,
        explanation: {
          en: "A microphone is a device that makes voices louder so everyone in the audience can hear the actors clearly. In big theaters, actors often wear tiny microphones on their costumes or use hand-held microphones to project their voices to the back rows.",
          es: "Un micrófono es un dispositivo que hace las voces más fuertes para que todos en la audiencia puedan escuchar a los actores claramente. En teatros grandes, los actores a menudo usan micrófonos pequeños en sus disfraces o usan micrófonos de mano para proyectar sus voces hasta las filas de atrás.",
          de: "Ein Mikrofon ist ein Gerät, das Stimmen lauter macht, damit alle im Publikum die Schauspieler klar hören können. In großen Theatern tragen Schauspieler oft winzige Mikrofone an ihren Kostümen oder verwenden Handmikrofone, um ihre Stimmen bis zu den hinteren Reihen zu projizieren.",
          nl: "Een microfoon is een apparaat dat stemmen harder maakt zodat iedereen in het publiek de acteurs duidelijk kan horen. In grote theaters dragen acteurs vaak kleine microfoons op hun kostuums of gebruiken handmicrofoons om hun stemmen naar de achterste rijen te projecteren."
        }
      },
      {
        question: {
          en: "What do you call acting without speaking?",
          es: "¿Cómo se llama actuar sin hablar?",
          de: "Wie nennt man Schauspiel ohne Sprechen?",
          nl: "Hoe noem je acteren zonder te spreken?"
        },
        options: [
          { en: "Mime", es: "Mímica", de: "Pantomime", nl: "Mime" },
          { en: "Singing", es: "Cantar", de: "Singen", nl: "Zingen" },
          { en: "Dancing", es: "Bailar", de: "Tanzen", nl: "Dansen" },
          { en: "Reading", es: "Leer", de: "Lesen", nl: "Lezen" }
        ],
        correct: 0,
        explanation: {
          en: "Mime is a type of acting where performers tell stories using only their body movements and facial expressions, without speaking any words. Mime artists often wear white face paint and pretend to be trapped in invisible boxes or walking against strong wind.",
          es: "La mímica es un tipo de actuación donde los intérpretes cuentan historias usando solo sus movimientos corporales y expresiones faciales, sin decir ninguna palabra. Los artistas de mímica a menudo usan pintura facial blanca y fingen estar atrapados en cajas invisibles o caminando contra viento fuerte.",
          de: "Pantomime ist eine Art von Schauspiel, bei der Darsteller Geschichten nur mit ihren Körperbewegungen und Gesichtsausdrücken erzählen, ohne Worte zu sprechen. Pantomimekünstler tragen oft weiße Gesichtsfarbe und tun so, als wären sie in unsichtbaren Kästen gefangen oder liefen gegen starken Wind.",
          nl: "Mime is een soort acteren waarbij performers verhalen vertellen met alleen hun lichaamsbewegingen en gezichtsuitdrukkingen, zonder woorden te spreken. Mime-artiesten dragen vaak witte gezichtsverf en doen alsof ze gevangen zitten in onzichtbare dozen of lopen tegen sterke wind."
        }
      },
      {
        question: {
          en: "What covers actors' faces in some plays?",
          es: "¿Qué cubre las caras de los actores en algunas obras?",
          de: "Was bedeckt die Gesichter der Schauspieler in manchen Stücken?",
          nl: "Wat bedekt de gezichten van acteurs in sommige toneelstukken?"
        },
        options: [
          { en: "Masks", es: "Máscaras", de: "Masken", nl: "Maskers" },
          { en: "Hats", es: "Sombreros", de: "Hüte", nl: "Hoeden" },
          { en: "Sunglasses", es: "Gafas de sol", de: "Sonnenbrillen", nl: "Zonnebrillen" },
          { en: "Scarves", es: "Bufandas", de: "Schals", nl: "Sjaals" }
        ],
        correct: 0,
        explanation: {
          en: "Masks are special face coverings that actors wear to transform into different characters. They can make actors look like animals, monsters, or people from long ago. In ancient Greek theater, masks helped actors play multiple characters and showed emotions clearly to audiences sitting far away.",
          es: "Las máscaras son cubiertas faciales especiales que usan los actores para transformarse en diferentes personajes. Pueden hacer que los actores parezcan animales, monstruos o personas de hace mucho tiempo. En el teatro griego antiguo, las máscaras ayudaban a los actores a interpretar múltiples personajes y mostraban emociones claramente a las audiencias sentadas lejos.",
          de: "Masken sind spezielle Gesichtsbedeckungen, die Schauspieler tragen, um sich in verschiedene Charaktere zu verwandeln. Sie können Schauspieler wie Tiere, Monster oder Menschen aus längst vergangenen Zeiten aussehen lassen. Im antiken griechischen Theater halfen Masken Schauspielern, mehrere Charaktere zu spielen und Emotionen für weit entfernte Zuschauer klar zu zeigen.",
          nl: "Maskers zijn speciale gezichtsbedekkingen die acteurs dragen om in verschillende personages te veranderen. Ze kunnen acteurs eruit laten zien als dieren, monsters, of mensen van lang geleden. In het oude Griekse theater hielpen maskers acteurs meerdere personages te spelen en emoties duidelijk te tonen aan publiek dat ver weg zat."
        }
      },
      {
        question: {
          en: "What do you call the area behind the stage?",
          es: "¿Cómo se llama el área detrás del escenario?",
          de: "Wie nennt man den Bereich hinter der Bühne?",
          nl: "Hoe noem je het gebied achter het podium?"
        },
        options: [
          { en: "Backstage", es: "Tras bambalinas", de: "Hinter der Bühne", nl: "Backstage" },
          { en: "Front yard", es: "Patio delantero", de: "Vorgarten", nl: "Voortuin" },
          { en: "Kitchen", es: "Cocina", de: "Küche", nl: "Keuken" },
          { en: "Basement", es: "Sótano", de: "Keller", nl: "Kelder" }
        ],
        correct: 0,
        explanation: {
          en: "Backstage is the area behind the stage where actors wait before going on stage, change costumes, and prepare for their scenes. It's like the 'behind-the-scenes' area where all the magic happens before the audience sees it. Only theater staff and actors are usually allowed backstage.",
          es: "Tras bambalinas es el área detrás del escenario donde los actores esperan antes de salir al escenario, se cambian de disfraces y se preparan para sus escenas. Es como el área 'detrás de escena' donde toda la magia sucede antes de que la audiencia la vea. Solo el personal del teatro y los actores generalmente tienen permitido estar tras bambalinas.",
          de: "Hinter der Bühne ist der Bereich hinter der Bühne, wo Schauspieler warten, bevor sie auf die Bühne gehen, Kostüme wechseln und sich auf ihre Szenen vorbereiten. Es ist wie der 'Hinter-den-Kulissen'-Bereich, wo die ganze Magie passiert, bevor das Publikum sie sieht. Nur Theaterpersonal und Schauspieler dürfen normalerweise hinter die Bühne.",
          nl: "Backstage is het gebied achter het podium waar acteurs wachten voordat ze het podium opgaan, van kostuum wisselen, en zich voorbereiden op hun scènes. Het is als het 'achter-de-schermen' gebied waar alle magie gebeurt voordat het publiek het ziet. Alleen theaterpersoneel en acteurs mogen meestal backstage komen."
        }
      },
      {
        question: {
          en: "What do you call the person who writes plays?",
          es: "¿Cómo se llama la persona que escribe obras?",
          de: "Wie nennt man die Person, die Theaterstücke schreibt?",
          nl: "Hoe noem je de persoon die toneelstukken schrijft?"
        },
        options: [
          { en: "Playwright", es: "Dramaturgo", de: "Dramatiker", nl: "Toneelschrijver" },
          { en: "Actor", es: "Actor", de: "Schauspieler", nl: "Acteur" },
          { en: "Director", es: "Director", de: "Regisseur", nl: "Regisseur" },
          { en: "Audience", es: "Audiencia", de: "Publikum", nl: "Publiek" }
        ],
        correct: 0,
        explanation: {
          en: "A playwright is a person who writes plays for theaters. They create the story, characters, and all the words that actors say. Famous playwrights like William Shakespeare wrote plays that are still performed today, hundreds of years later!",
          es: "Un dramaturgo es una persona que escribe obras para teatros. Crean la historia, personajes y todas las palabras que dicen los actores. ¡Dramaturgos famosos como William Shakespeare escribieron obras que aún se representan hoy, cientos de años después!",
          de: "Ein Dramatiker ist eine Person, die Theaterstücke für Theater schreibt. Sie erschaffen die Geschichte, Charaktere und alle Worte, die Schauspieler sagen. Berühmte Dramatiker wie William Shakespeare schrieben Stücke, die heute noch aufgeführt werden, Hunderte von Jahren später!",
          nl: "Een toneelschrijver is een persoon die toneelstukken schrijft voor theaters. Ze creëren het verhaal, personages en alle woorden die acteurs zeggen. Beroemde toneelschrijvers zoals William Shakespeare schreven stukken die vandaag de dag nog steeds worden opgevoerd, honderden jaren later!"
        }
      },
      {
        question: {
          en: "What sound do people make when they like a play?",
          es: "¿Qué sonido hace la gente cuando le gusta una obra?",
          de: "Welchen Laut machen Leute wenn ihnen ein Stück gefällt?",
          nl: "Welk geluid maken mensen als ze een toneelstuk mooi vinden?"
        },
        options: [
          { en: "Applause", es: "Aplausos", de: "Applaus", nl: "Applaus" },
          { en: "Snoring", es: "Ronquidos", de: "Schnarchen", nl: "Snurken" },
          { en: "Coughing", es: "Tos", de: "Husten", nl: "Hoesten" },
          { en: "Crying", es: "Llorar", de: "Weinen", nl: "Huilen" }
        ],
        correct: 0,
        explanation: {
          en: "Applause is the sound of people clapping their hands together to show they enjoyed the play. It's the audience's way of saying 'thank you' and 'well done' to the actors. Loud applause means the audience really loved the performance!",
          es: "Los aplausos son el sonido de la gente aplaudiendo con sus manos para mostrar que disfrutaron la obra. Es la forma de la audiencia de decir 'gracias' y 'bien hecho' a los actores. ¡Los aplausos fuertes significan que la audiencia realmente amó la actuación!",
          de: "Applaus ist das Geräusch von Menschen, die ihre Hände zusammenklatschen, um zu zeigen, dass ihnen das Stück gefallen hat. Es ist die Art des Publikums zu sagen 'Danke' und 'gut gemacht' zu den Schauspielern. Lauter Applaus bedeutet, dass das Publikum die Aufführung wirklich geliebt hat!",
          nl: "Applaus is het geluid van mensen die hun handen tegen elkaar klappen om te laten zien dat ze van het toneelstuk genoten hebben. Het is de manier van het publiek om 'dank je wel' en 'goed gedaan' tegen de acteurs te zeggen. Luid applaus betekent dat het publiek de voorstelling echt geweldig vond!"
        }
      },
      {
        question: {
          en: "What do actors use to pretend to fight safely?",
          es: "¿Qué usan los actores para fingir luchar de manera segura?",
          de: "Was benutzen Schauspieler um sicher zu kämpfen?",
          nl: "Wat gebruiken acteurs om veilig te doen alsof ze vechten?"
        },
        options: [
          { en: "Stage combat", es: "Combate escénico", de: "Bühnenkampf", nl: "Podiumgevecht" },
          { en: "Real weapons", es: "Armas reales", de: "Echte Waffen", nl: "Echte wapens" },
          { en: "Magic spells", es: "Hechizos mágicos", de: "Zaubersprüche", nl: "Toverspreuken" },
          { en: "Invisible shields", es: "Escudos invisibles", de: "Unsichtbare Schilde", nl: "Onzichtbare schilden" }
        ],
        correct: 0,
        explanation: {
          en: "Stage combat is special fighting that looks real but is completely safe. Actors learn specific movements and use fake weapons made of soft materials. They practice these fight scenes many times so it looks dangerous but no one gets hurt. It's like a carefully planned dance!",
          es: "El combate escénico es pelea especial que se ve real pero es completamente segura. Los actores aprenden movimientos específicos y usan armas falsas hechas de materiales suaves. Practican estas escenas de pelea muchas veces para que se vea peligroso pero nadie se lastime. ¡Es como un baile cuidadosamente planeado!",
          de: "Bühnenkampf ist spezielles Kämpfen, das echt aussieht, aber völlig sicher ist. Schauspieler lernen spezifische Bewegungen und verwenden gefälschte Waffen aus weichen Materialien. Sie üben diese Kampfszenen viele Male, damit es gefährlich aussieht, aber niemand verletzt wird. Es ist wie ein sorgfältig geplanter Tanz!",
          nl: "Podiumgevecht is speciaal vechten dat echt lijkt maar volledig veilig is. Acteurs leren specifieke bewegingen en gebruiken neppe wapens gemaakt van zachte materialen. Ze oefenen deze vechtscènes vele keren zodat het gevaarlijk lijkt maar niemand gewond raakt. Het is als een zorgvuldig geplande dans!"
        }
      },
      {
        question: {
          en: "What tells actors when to come on stage?",
          es: "¿Qué les dice a los actores cuándo salir al escenario?",
          de: "Was sagt Schauspielern wann sie auf die Bühne kommen sollen?",
          nl: "Wat vertelt acteurs wanneer ze het podium op moeten?"
        },
        options: [
          { en: "Cue", es: "Señal", de: "Stichwort", nl: "Teken" },
          { en: "Bell", es: "Campana", de: "Glocke", nl: "Bel" },
          { en: "Whistle", es: "Silbato", de: "Pfeife", nl: "Fluitje" },
          { en: "Horn", es: "Bocina", de: "Horn", nl: "Hoorn" }
        ],
        correct: 0,
        explanation: {
          en: "A cue is a signal that tells actors when it's their turn to enter the stage, speak their lines, or do an action. Cues can be words from other actors, lighting changes, or sounds. Actors must pay careful attention to their cues so they know exactly when to do their part.",
          es: "Una señal es una indicación que les dice a los actores cuándo es su turno de entrar al escenario, decir sus diálogos o hacer una acción. Las señales pueden ser palabras de otros actores, cambios de iluminación o sonidos. Los actores deben prestar mucha atención a sus señales para saber exactamente cuándo hacer su parte.",
          de: "Ein Stichwort ist ein Signal, das Schauspielern sagt, wann sie an der Reihe sind, die Bühne zu betreten, ihren Text zu sprechen oder eine Handlung auszuführen. Stichworte können Worte von anderen Schauspielern, Lichtänderungen oder Geräusche sein. Schauspieler müssen sorgfältig auf ihre Stichworte achten, damit sie genau wissen, wann sie ihren Teil machen sollen.",
          nl: "Een teken is een signaal dat acteurs vertelt wanneer het hun beurt is om het podium op te gaan, hun tekst te zeggen, of een actie uit te voeren. Tekens kunnen woorden van andere acteurs zijn, lichtveranderingen, of geluiden. Acteurs moeten goed opletten op hun tekens zodat ze precies weten wanneer ze hun deel moeten doen."
        }
      },
      {
        question: {
          en: "What do you call the first performance of a new play?",
          es: "¿Cómo se llama la primera actuación de una obra nueva?",
          de: "Wie nennt man die erste Aufführung eines neuen Stücks?",
          nl: "Hoe noem je de eerste voorstelling van een nieuw toneelstuk?"
        },
        options: [
          { en: "Opening night", es: "Noche de estreno", de: "Premiere", nl: "Première" },
          { en: "Closing night", es: "Noche de cierre", de: "Letzte Vorstellung", nl: "Slotvoorstelling" },
          { en: "Practice night", es: "Noche de práctica", de: "Übungsnacht", nl: "Oefenvoorstelling" },
          { en: "Quiet night", es: "Noche tranquila", de: "Stille Nacht", nl: "Stille nacht" }
        ],
        correct: 0,
        explanation: {
          en: "Opening night is the very first time a new play is performed for a real audience. It's a special and exciting night because everyone wants to see if the play will be successful. Actors often get flowers and celebrate after opening night performances.",
          es: "La noche de estreno es la primera vez que una nueva obra se presenta para una audiencia real. Es una noche especial y emocionante porque todos quieren ver si la obra será exitosa. Los actores a menudo reciben flores y celebran después de las actuaciones de noche de estreno.",
          de: "Die Premiere ist das allererste Mal, dass ein neues Stück für ein echtes Publikum aufgeführt wird. Es ist eine besondere und aufregende Nacht, weil alle sehen wollen, ob das Stück erfolgreich sein wird. Schauspieler bekommen oft Blumen und feiern nach Premierenaufführungen.",
          nl: "De première is de allereerste keer dat een nieuw toneelstuk wordt opgevoerd voor een echt publiek. Het is een speciale en spannende avond omdat iedereen wil zien of het stuk succesvol zal zijn. Acteurs krijgen vaak bloemen en vieren na premièrevoorstellingen."
        }
      },
      {
        question: {
          en: "What do you call objects actors use in a play?",
          es: "¿Cómo se llaman los objetos que usan los actores en una obra?",
          de: "Wie nennt man Gegenstände, die Schauspieler in einem Stück benutzen?",
          nl: "Hoe noem je voorwerpen die acteurs in een toneelstuk gebruiken?"
        },
        options: [
          { en: "Props", es: "Utilería", de: "Requisiten", nl: "Rekwisieten" },
          { en: "Toys", es: "Juguetes", de: "Spielzeug", nl: "Speelgoed" },
          { en: "Tools", es: "Herramientas", de: "Werkzeuge", nl: "Gereedschap" },
          { en: "Clothes", es: "Ropa", de: "Kleidung", nl: "Kleren" }
        ],
        correct: 0,
        explanation: {
          en: "Props are objects that actors use during a play to help tell the story. They can be anything from swords and crowns to books and food. Props make the play feel more real and help the audience understand what's happening in the story.",
          es: "La utilería son objetos que los actores usan durante una obra para ayudar a contar la historia. Pueden ser cualquier cosa desde espadas y coronas hasta libros y comida. La utilería hace que la obra se sienta más real y ayuda a la audiencia a entender lo que está pasando en la historia.",
          de: "Requisiten sind Gegenstände, die Schauspieler während eines Stücks verwenden, um bei der Erzählung der Geschichte zu helfen. Sie können alles sein, von Schwertern und Kronen bis zu Büchern und Essen. Requisiten lassen das Stück echter wirken und helfen dem Publikum zu verstehen, was in der Geschichte passiert.",
          nl: "Rekwisieten zijn voorwerpen die acteurs gebruiken tijdens een toneelstuk om het verhaal te helpen vertellen. Ze kunnen van alles zijn, van zwaarden en kronen tot boeken en eten. Rekwisieten maken het stuk echter en helpen het publiek begrijpen wat er in het verhaal gebeurt."
        }
      },
      {
        question: {
          en: "What do you call a short play?",
          es: "¿Cómo se llama una obra corta?",
          de: "Wie nennt man ein kurzes Theaterstück?",
          nl: "Hoe noem je een kort toneelstuk?"
        },
        options: [
          { en: "One-act play", es: "Obra de un acto", de: "Einakter", nl: "Eenakter" },
          { en: "Long play", es: "Obra larga", de: "Langes Stück", nl: "Lang stuk" },
          { en: "Big play", es: "Obra grande", de: "Großes Stück", nl: "Groot stuk" },
          { en: "Tiny play", es: "Obra diminuta", de: "Winziges Stück", nl: "Klein stukje" }
        ],
        correct: 0,
        explanation: {
          en: "A one-act play is a short play that has only one act (section) and usually lasts about 30 minutes or less. Unlike longer plays that have multiple acts with breaks, a one-act play tells its complete story without any intermissions.",
          es: "Una obra de un acto es una obra corta que tiene solo un acto (sección) y generalmente dura unos 30 minutos o menos. A diferencia de las obras más largas que tienen múltiples actos con descansos, una obra de un acto cuenta su historia completa sin intermedios.",
          de: "Ein Einakter ist ein kurzes Theaterstück, das nur einen Akt (Abschnitt) hat und normalerweise etwa 30 Minuten oder weniger dauert. Im Gegensatz zu längeren Stücken mit mehreren Akten und Pausen erzählt ein Einakter seine vollständige Geschichte ohne Unterbrechungen.",
          nl: "Een eenakter is een kort toneelstuk dat slechts één bedrijf (sectie) heeft en meestal ongeveer 30 minuten of minder duurt. In tegenstelling tot langere stukken die meerdere bedrijven hebben met pauzes, vertelt een eenakter zijn complete verhaal zonder onderbrekingen."
        }
      },
      {
        question: {
          en: "What do you call the bad character in a play?",
          es: "¿Cómo se llama al personaje malo de una obra?",
          de: "Wie nennt man den bösen Charakter in einem Stück?",
          nl: "Hoe noem je het slechte personage in een toneelstuk?"
        },
        options: [
          { en: "Villain", es: "Villano", de: "Bösewicht", nl: "Schurk" },
          { en: "Hero", es: "Héroe", de: "Held", nl: "Held" },
          { en: "Friend", es: "Amigo", de: "Freund", nl: "Vriend" },
          { en: "Helper", es: "Ayudante", de: "Helfer", nl: "Helper" }
        ],
        correct: 0,
        explanation: {
          en: "A villain is the bad character in a play who causes problems for the main character. Villains make stories exciting because they create conflict and challenges that the hero must overcome. Even though they're mean, villains are important for making interesting stories!",
          es: "Un villano es el personaje malo en una obra que causa problemas al personaje principal. Los villanos hacen las historias emocionantes porque crean conflicto y desafíos que el héroe debe superar. ¡Aunque sean malvados, los villanos son importantes para hacer historias interesantes!",
          de: "Ein Bösewicht ist der böse Charakter in einem Stück, der dem Hauptcharakter Probleme bereitet. Bösewichte machen Geschichten spannend, weil sie Konflikte und Herausforderungen schaffen, die der Held überwinden muss. Obwohl sie gemein sind, sind Bösewichte wichtig für interessante Geschichten!",
          nl: "Een schurk is het slechte personage in een toneelstuk dat problemen veroorzaakt voor het hoofdpersonage. Schurken maken verhalen spannend omdat ze conflict en uitdagingen creëren die de held moet overwinnen. Ook al zijn ze gemeen, schurken zijn belangrijk voor interessante verhalen!"
        }
      },
      {
        question: {
          en: "What do actors do to show strong emotions?",
          es: "¿Qué hacen los actores para mostrar emociones fuertes?",
          de: "Was machen Schauspieler um starke Emotionen zu zeigen?",
          nl: "Wat doen acteurs om sterke emoties te tonen?"
        },
        options: [
          { en: "Dramatic acting", es: "Actuación dramática", de: "Dramatisches Schauspiel", nl: "Dramatisch acteren" },
          { en: "Quiet acting", es: "Actuación silenciosa", de: "Leises Schauspiel", nl: "Stil acteren" },
          { en: "Fast acting", es: "Actuación rápida", de: "Schnelles Schauspiel", nl: "Snel acteren" },
          { en: "Slow acting", es: "Actuación lenta", de: "Langsames Schauspiel", nl: "Langzaam acteren" }
        ],
        correct: 0,
        explanation: {
          en: "Dramatic acting is when actors use big emotions and powerful expressions to show strong feelings like anger, sadness, or joy. They might cry real tears, shout loudly, or use big gestures to make the audience feel the same emotions as their character.",
          es: "La actuación dramática es cuando los actores usan grandes emociones y expresiones poderosas para mostrar sentimientos fuertes como ira, tristeza o alegría. Pueden llorar lágrimas reales, gritar fuerte o usar grandes gestos para hacer que la audiencia sienta las mismas emociones que su personaje.",
          de: "Dramatisches Schauspiel ist, wenn Schauspieler große Emotionen und kraftvolle Ausdrücke verwenden, um starke Gefühle wie Wut, Trauer oder Freude zu zeigen. Sie können echte Tränen weinen, laut schreien oder große Gesten verwenden, damit das Publikum dieselben Emotionen wie ihr Charakter fühlt.",
          nl: "Dramatisch acteren is wanneer acteurs grote emoties en krachtige uitdrukkingen gebruiken om sterke gevoelens zoals woede, verdriet of vreugde te tonen. Ze kunnen echte tranen huilen, hard schreeuwen of grote gebaren maken om het publiek dezelfde emoties te laten voelen als hun personage."
        }
      },
      {
        question: {
          en: "What helps actors remember where to move on stage?",
          es: "¿Qué ayuda a los actores a recordar dónde moverse en el escenario?",
          de: "Was hilft Schauspielern sich zu merken wo sie sich auf der Bühne bewegen sollen?",
          nl: "Wat helpt acteurs onthouden waar ze zich moeten bewegen op het podium?"
        },
        options: [
          { en: "Blocking", es: "Marcación", de: "Choreografie", nl: "Blokkering" },
          { en: "Dancing", es: "Bailar", de: "Tanzen", nl: "Dansen" },
          { en: "Singing", es: "Cantar", de: "Singen", nl: "Zingen" },
          { en: "Jumping", es: "Saltar", de: "Springen", nl: "Springen" }
        ],
        correct: 0,
        explanation: {
          en: "Blocking is the planned movements and positions of actors on stage. The director decides where each actor should stand, when they should move, and where they should go. It's like a choreographed dance that helps tell the story clearly and makes sure actors don't bump into each other!",
          es: "La marcación son los movimientos y posiciones planificadas de los actores en el escenario. El director decide dónde debe pararse cada actor, cuándo deben moverse y adónde deben ir. ¡Es como una danza coreografiada que ayuda a contar la historia claramente y asegura que los actores no choquen entre sí!",
          de: "Choreografie sind die geplanten Bewegungen und Positionen der Schauspieler auf der Bühne. Der Regisseur entscheidet, wo jeder Schauspieler stehen soll, wann er sich bewegen soll und wohin er gehen soll. Es ist wie ein choreografierter Tanz, der hilft, die Geschichte klar zu erzählen und sicherstellt, dass Schauspieler nicht zusammenstoßen!",
          nl: "Blokkering zijn de geplande bewegingen en posities van acteurs op het podium. De regisseur beslist waar elke acteur moet staan, wanneer ze moeten bewegen, en waar ze naartoe moeten gaan. Het is als een gechoreografeerde dans die helpt het verhaal duidelijk te vertellen en ervoor zorgt dat acteurs niet tegen elkaar botsen!"
        }
      },
      {
        question: {
          en: "What do you call a performance just for practice?",
          es: "¿Cómo se llama una actuación solo para práctica?",
          de: "Wie nennt man eine Aufführung nur zum Üben?",
          nl: "Hoe noem je een voorstelling alleen voor de oefening?"
        },
        options: [
          { en: "Dress rehearsal", es: "Ensayo general", de: "Generalprobe", nl: "Generale repetitie" },
          { en: "Real show", es: "Espectáculo real", de: "Echte Show", nl: "Echte voorstelling" },
          { en: "Final performance", es: "Actuación final", de: "Finale Aufführung", nl: "Eindvoorstelling" },
          { en: "Opening show", es: "Espectáculo de apertura", de: "Eröffnungsshow", nl: "Openingsvoorstelling" }
        ],
        correct: 0,
        explanation: {
          en: "A dress rehearsal is the final practice before opening night where actors wear their real costumes and use all the props, lights, and scenery. It's called a 'dress' rehearsal because everyone gets dressed up in their performance clothes to practice one last time.",
          es: "Un ensayo general es la práctica final antes de la noche de estreno donde los actores usan sus disfraces reales y usan toda la utilería, luces y escenografía. Se llama ensayo 'general' porque todos se visten con su ropa de actuación para practicar una última vez.",
          de: "Eine Generalprobe ist die finale Übung vor der Premiere, wo Schauspieler ihre echten Kostüme tragen und alle Requisiten, Lichter und das Bühnenbild verwenden. Es heißt 'General'probe, weil sich alle in ihre Aufführungskleidung anziehen, um ein letztes Mal zu üben.",
          nl: "Een generale repetitie is de laatste oefening voor de première waarbij acteurs hun echte kostuums dragen en alle rekwisieten, lichten en decor gebruiken. Het heet een 'generale' repetitie omdat iedereen zich aankleedt in hun voorstellingskleding om een laatste keer te oefenen."
        }
      },
      {
        question: {
          en: "What do you call the space between acts in a play?",
          es: "¿Cómo se llama el espacio entre actos en una obra?",
          de: "Wie nennt man die Pause zwischen den Akten eines Stücks?",
          nl: "Hoe noem je de ruimte tussen bedrijven in een toneelstuk?"
        },
        options: [
          { en: "Intermission", es: "Intermedio", de: "Pause", nl: "Pauze" },
          { en: "Beginning", es: "Comienzo", de: "Anfang", nl: "Begin" },
          { en: "Ending", es: "Final", de: "Ende", nl: "Einde" },
          { en: "Middle", es: "Medio", de: "Mitte", nl: "Midden" }
        ],
        correct: 0,
        explanation: {
          en: "An intermission is a break between acts of a play where the audience can stretch, use the bathroom, or get snacks. The lights come on and people can talk and move around before the next part of the play begins. It's like halftime in a sports game!",
          es: "Un intermedio es un descanso entre actos de una obra donde la audiencia puede estirarse, usar el baño o conseguir refrigerios. Las luces se encienden y la gente puede hablar y moverse antes de que comience la siguiente parte de la obra. ¡Es como el medio tiempo en un juego de deportes!",
          de: "Eine Pause ist eine Unterbrechung zwischen den Akten eines Stücks, wo das Publikum sich strecken, die Toilette benutzen oder Snacks holen kann. Die Lichter gehen an und die Leute können sprechen und sich bewegen, bevor der nächste Teil des Stücks beginnt. Es ist wie die Halbzeit in einem Sportspiel!",
          nl: "Een pauze is een onderbreking tussen bedrijven van een toneelstuk waarbij het publiek kan strekken, naar het toilet kan gaan, of snacks kan halen. De lichten gaan aan en mensen kunnen praten en bewegen voordat het volgende deel van het stuk begint. Het is als rust in een sportwedstrijd!"
        }
      },
      {
        question: {
          en: "What do you call plays that are very old and famous?",
          es: "¿Cómo se llaman las obras muy antiguas y famosas?",
          de: "Wie nennt man sehr alte und berühmte Theaterstücke?",
          nl: "Hoe noem je toneelstukken die heel oud en beroemd zijn?"
        },
        options: [
          { en: "Classics", es: "Clásicos", de: "Klassiker", nl: "Klassieken" },
          { en: "New plays", es: "Obras nuevas", de: "Neue Stücke", nl: "Nieuwe stukken" },
          { en: "Modern plays", es: "Obras modernas", de: "Moderne Stücke", nl: "Moderne stukken" },
          { en: "Future plays", es: "Obras futuristas", de: "Zukunftsstücke", nl: "Toekomstige stukken" }
        ],
        correct: 0,
        explanation: {
          en: "Classics are plays that were written long ago but are still performed today because they tell timeless stories that people of all ages can enjoy. Famous classics include plays by Shakespeare like 'Romeo and Juliet' and 'Hamlet' that have been entertaining audiences for hundreds of years.",
          es: "Los clásicos son obras que fueron escritas hace mucho tiempo pero aún se representan hoy porque cuentan historias atemporales que personas de todas las edades pueden disfrutar. Los clásicos famosos incluyen obras de Shakespeare como 'Romeo y Julieta' y 'Hamlet' que han estado entreteniendo audiencias por cientos de años.",
          de: "Klassiker sind Stücke, die vor langer Zeit geschrieben wurden, aber heute noch aufgeführt werden, weil sie zeitlose Geschichten erzählen, die Menschen jeden Alters genießen können. Berühmte Klassiker sind Stücke von Shakespeare wie 'Romeo und Julia' und 'Hamlet', die seit Hunderten von Jahren das Publikum unterhalten.",
          nl: "Klassieken zijn toneelstukken die lang geleden werden geschreven maar vandaag nog steeds worden opgevoerd omdat ze tijdloze verhalen vertellen die mensen van alle leeftijden kunnen genieten. Beroemde klassieken zijn stukken van Shakespeare zoals 'Romeo en Julia' en 'Hamlet' die al honderden jaren het publiek vermaken."
        }
      },
      {
        question: {
          en: "What do you call a play performed by puppets?",
          es: "¿Cómo se llama una obra interpretada por títeres?",
          de: "Wie nennt man ein Stück, das von Puppen aufgeführt wird?",
          nl: "Hoe noem je een toneelstuk uitgevoerd door poppen?"
        },
        options: [
          { en: "Puppet show", es: "Espectáculo de títeres", de: "Puppentheater", nl: "Poppenspel" },
          { en: "Dance show", es: "Espectáculo de baile", de: "Tanzshow", nl: "Dansvoorstelling" },
          { en: "Magic show", es: "Espectáculo de magia", de: "Zaubershow", nl: "Goochelshow" },
          { en: "Music show", es: "Espectáculo musical", de: "Musikshow", nl: "Muziekshow" }
        ],
        correct: 0,
        explanation: {
          en: "A puppet show is a type of theater where puppets (not real actors) perform the story. Puppeteers hide behind or under the stage and move the puppets with strings, rods, or their hands. Puppet shows can tell any kind of story and are especially popular with children.",
          es: "Un espectáculo de títeres es un tipo de teatro donde los títeres (no actores reales) interpretan la historia. Los titiriteros se esconden detrás o debajo del escenario y mueven los títeres con cuerdas, varillas o sus manos. Los espectáculos de títeres pueden contar cualquier tipo de historia y son especialmente populares con los niños.",
          de: "Ein Puppentheater ist eine Art von Theater, wo Puppen (nicht echte Schauspieler) die Geschichte aufführen. Puppenspieler verstecken sich hinter oder unter der Bühne und bewegen die Puppen mit Schnur, Stäben oder ihren Händen. Puppentheater können jede Art von Geschichte erzählen und sind besonders bei Kindern beliebt.",
          nl: "Een poppenspel is een soort theater waarbij poppen (geen echte acteurs) het verhaal opvoeren. Poppenspelers verstoppen zich achter of onder het podium en bewegen de poppen met touwtjes, stokken of hun handen. Poppenspelen kunnen elk soort verhaal vertellen en zijn vooral populair bij kinderen."
        }
      },
      {
        question: {
          en: "What helps actors project their voice to the audience?",
          es: "¿Qué ayuda a los actores a proyectar su voz hacia la audiencia?",
          de: "Was hilft Schauspielern ihre Stimme zum Publikum zu projizieren?",
          nl: "Wat helpt acteurs hun stem naar het publiek te projecteren?"
        },
        options: [
          { en: "Good breathing", es: "Buena respiración", de: "Gute Atmung", nl: "Goede ademhaling" },
          { en: "Loud music", es: "Música fuerte", de: "Laute Musik", nl: "Luide muziek" },
          { en: "Big costumes", es: "Disfraces grandes", de: "Große Kostüme", nl: "Grote kostuums" },
          { en: "Bright lights", es: "Luces brillantes", de: "Helle Lichter", nl: "Felle lichten" }
        ],
        correct: 0,
        explanation: {
          en: "Good breathing is essential for actors to project their voice clearly to the audience. Actors learn to breathe deeply from their diaphragm (belly) rather than their chest, which gives them more power and control over their voice. This helps them speak loudly and clearly without straining their throat.",
          es: "La buena respiración es esencial para que los actores proyecten su voz claramente a la audiencia. Los actores aprenden a respirar profundamente desde su diafragma (barriga) en lugar de su pecho, lo que les da más poder y control sobre su voz. Esto les ayuda a hablar fuerte y claramente sin forzar su garganta.",
          de: "Gute Atmung ist wesentlich für Schauspieler, um ihre Stimme klar zum Publikum zu projizieren. Schauspieler lernen, tief aus ihrem Zwerchfell (Bauch) zu atmen anstatt aus ihrer Brust, was ihnen mehr Kraft und Kontrolle über ihre Stimme gibt. Das hilft ihnen, laut und klar zu sprechen, ohne ihre Kehle zu belasten.",
          nl: "Goede ademhaling is essentieel voor acteurs om hun stem duidelijk naar het publiek te projecteren. Acteurs leren diep te ademen vanuit hun middenrif (buik) in plaats van hun borst, wat hen meer kracht en controle over hun stem geeft. Dit helpt hen luid en duidelijk te spreken zonder hun keel te belasten."
        }
      },
      {
        question: {
          en: "What do you call a play that teaches a lesson?",
          es: "¿Cómo se llama una obra que enseña una lección?",
          de: "Wie nennt man ein Stück, das eine Lektion lehrt?",
          nl: "Hoe noem je een toneelstuk dat een les leert?"
        },
        options: [
          { en: "Morality play", es: "Obra moralista", de: "Moralisches Stück", nl: "Zedenspel" },
          { en: "Action play", es: "Obra de acción", de: "Actionstück", nl: "Actiestuk" },
          { en: "Adventure play", es: "Obra de aventura", de: "Abenteuerstück", nl: "Avonturenstuk" },
          { en: "Romance play", es: "Obra romántica", de: "Romantisches Stück", nl: "Romantisch stuk" }
        ],
        correct: 0,
        explanation: {
          en: "A morality play is a special type of play that teaches important life lessons about right and wrong, good and bad behavior. These plays help audiences learn about values like honesty, kindness, and courage by showing characters who make good or bad choices and what happens as a result.",
          es: "Una obra moralista es un tipo especial de obra que enseña lecciones importantes de vida sobre lo correcto e incorrecto, el buen y mal comportamiento. Estas obras ayudan a las audiencias a aprender sobre valores como honestidad, bondad y coraje mostrando personajes que toman buenas o malas decisiones y lo que pasa como resultado.",
          de: "Ein moralisches Stück ist eine besondere Art von Theaterstück, das wichtige Lebenslektionen über richtig und falsch, gutes und schlechtes Verhalten lehrt. Diese Stücke helfen dem Publikum, Werte wie Ehrlichkeit, Freundlichkeit und Mut zu lernen, indem sie Charaktere zeigen, die gute oder schlechte Entscheidungen treffen und was als Folge passiert.",
          nl: "Een zedenspel is een speciaal soort toneelstuk dat belangrijke levenslessen leert over goed en fout, goed en slecht gedrag. Deze stukken helpen het publiek waarden zoals eerlijkheid, vriendelijkheid en moed te leren door personages te tonen die goede of slechte keuzes maken en wat er als gevolg gebeurt."
        }
      },
      {
        question: {
          en: "What do actors do when they forget their lines?",
          es: "¿Qué hacen los actores cuando olvidan sus diálogos?",
          de: "Was machen Schauspieler wenn sie ihren Text vergessen?",
          nl: "Wat doen acteurs als ze hun tekst vergeten?"
        },
        options: [
          { en: "Improvise", es: "Improvisar", de: "Improvisieren", nl: "Improviseren" },
          { en: "Leave the stage", es: "Salir del escenario", de: "Die Bühne verlassen", nl: "Het podium verlaten" },
          { en: "Start crying", es: "Empezar a llorar", de: "Anfangen zu weinen", nl: "Beginnen te huilen" },
          { en: "Call their mom", es: "Llamar a su mamá", de: "Ihre Mutter anrufen", nl: "Hun moeder bellen" }
        ],
        correct: 0,
        explanation: {
          en: "When actors forget their lines, they improvise by making up words that fit the character and situation. Good actors can think quickly and create dialogue that sounds natural and keeps the story moving forward. The audience usually doesn't even notice when this happens!",
          es: "Cuando los actores olvidan sus diálogos, improvisan inventando palabras que encajen con el personaje y la situación. Los buenos actores pueden pensar rápidamente y crear diálogo que suene natural y mantenga la historia avanzando. ¡La audiencia generalmente ni siquiera se da cuenta cuando esto pasa!",
          de: "Wenn Schauspieler ihren Text vergessen, improvisieren sie, indem sie Worte erfinden, die zum Charakter und zur Situation passen. Gute Schauspieler können schnell denken und Dialog schaffen, der natürlich klingt und die Geschichte vorantreibt. Das Publikum bemerkt normalerweise nicht einmal, wenn das passiert!",
          nl: "Wanneer acteurs hun tekst vergeten, improviseren ze door woorden te verzinnen die passen bij het personage en de situatie. Goede acteurs kunnen snel denken en dialoog creëren die natuurlijk klinkt en het verhaal vooruit laat gaan. Het publiek merkt meestal niet eens dat dit gebeurt!"
        }
      },
      {
        question: {
          en: "What do you call theater performed outside?",
          es: "¿Cómo se llama el teatro representado al aire libre?",
          de: "Wie nennt man Theater, das draußen aufgeführt wird?",
          nl: "Hoe noem je theater dat buiten wordt opgevoerd?"
        },
        options: [
          { en: "Outdoor theater", es: "Teatro al aire libre", de: "Freiluftheater", nl: "Openluchttheater" },
          { en: "Indoor theater", es: "Teatro interior", de: "Innentheater", nl: "Binnentheater" },
          { en: "Kitchen theater", es: "Teatro de cocina", de: "Küchentheater", nl: "Keukentheater" },
          { en: "Bathroom theater", es: "Teatro de baño", de: "Badtheater", nl: "Badkamertheater" }
        ],
        correct: 0,
        explanation: {
          en: "Outdoor theater is performed outside in parks, gardens, or amphitheaters under the open sky. Actors must project their voices more loudly since there are no walls to help with acoustics. Shakespeare's plays are often performed outdoors, just like they were 400 years ago!",
          es: "El teatro al aire libre se representa afuera en parques, jardines o anfiteatros bajo el cielo abierto. Los actores deben proyectar sus voces más fuerte ya que no hay paredes que ayuden con la acústica. ¡Las obras de Shakespeare a menudo se representan al aire libre, tal como lo fueron hace 400 años!",
          de: "Freiluftheater wird draußen in Parks, Gärten oder Amphitheatern unter freiem Himmel aufgeführt. Schauspieler müssen ihre Stimmen lauter projizieren, da es keine Wände gibt, die bei der Akustik helfen. Shakespeares Stücke werden oft im Freien aufgeführt, genau wie vor 400 Jahren!",
          nl: "Openluchttheater wordt buiten opgevoerd in parken, tuinen of amfitheaters onder de open hemel. Acteurs moeten hun stemmen harder projecteren omdat er geen muren zijn die helpen met de akoestiek. Shakespeare's stukken worden vaak buiten opgevoerd, net zoals 400 jaar geleden!"
        }
      },
      {
        question: {
          en: "What makes different sounds during a play?",
          es: "¿Qué hace diferentes sonidos durante una obra?",
          de: "Was macht verschiedene Geräusche während eines Stücks?",
          nl: "Wat maakt verschillende geluiden tijdens een toneelstuk?"
        },
        options: [
          { en: "Sound effects", es: "Efectos de sonido", de: "Soundeffekte", nl: "Geluidseffecten" },
          { en: "Loud voices", es: "Voces fuertes", de: "Laute Stimmen", nl: "Luide stemmen" },
          { en: "Bright lights", es: "Luces brillantes", de: "Helle Lichter", nl: "Felle lichten" },
          { en: "Colorful costumes", es: "Disfraces coloridos", de: "Bunte Kostüme", nl: "Kleurrijke kostuums" }
        ],
        correct: 0,
        explanation: {
          en: "Sound effects are special sounds created during a play to make it more realistic and exciting. They can include sounds like thunder, doorbell rings, animal noises, or footsteps. Sound technicians use various tools and equipment to create these sounds at exactly the right moment in the story.",
          es: "Los efectos de sonido son sonidos especiales creados durante una obra para hacerla más realista y emocionante. Pueden incluir sonidos como truenos, timbres de puerta, ruidos de animales o pasos. Los técnicos de sonido usan varias herramientas y equipo para crear estos sonidos en el momento exacto de la historia.",
          de: "Soundeffekte sind spezielle Geräusche, die während eines Stücks erzeugt werden, um es realistischer und spannender zu machen. Sie können Geräusche wie Donner, Türklingeln, Tierlaut oder Fußtritte einschließen. Tontechniker verwenden verschiedene Werkzeuge und Ausrüstung, um diese Geräusche genau zum richtigen Moment in der Geschichte zu erzeugen.",
          nl: "Geluidseffecten zijn speciale geluiden die tijdens een toneelstuk worden gemaakt om het realistischer en spannender te maken. Ze kunnen geluiden bevatten zoals donder, deurbellen, dierengeluiden of voetstappen. Geluidstechnici gebruiken verschillende gereedschappen en apparatuur om deze geluiden op precies het juiste moment in het verhaal te maken."
        }
      },
      {
        question: {
          en: "What do you call someone who loves to watch plays?",
          es: "¿Cómo se llama a alguien que ama ver obras?",
          de: "Wie nennt man jemanden, der gerne Theaterstücke anschaut?",
          nl: "Hoe noem je iemand die graag naar toneelstukken kijkt?"
        },
        options: [
          { en: "Theater fan", es: "Fanático del teatro", de: "Theaterfan", nl: "Theaterfan" },
          { en: "Actor", es: "Actor", de: "Schauspieler", nl: "Acteur" },
          { en: "Director", es: "Director", de: "Regisseur", nl: "Regisseur" },
          { en: "Writer", es: "Escritor", de: "Schriftsteller", nl: "Schrijver" }
        ],
        correct: 0,
        explanation: {
          en: "A theater fan is someone who loves watching plays and attending theater performances. They might see many different shows, read about theater, and support their local theater companies. Theater fans appreciate the art of live performance and enjoy the magic that happens when actors and audience come together.",
          es: "Un fanático del teatro es alguien que ama ver obras y asistir a actuaciones teatrales. Pueden ver muchos espectáculos diferentes, leer sobre teatro y apoyar a sus compañías teatrales locales. Los fanáticos del teatro aprecian el arte de la actuación en vivo y disfrutan la magia que sucede cuando actores y audiencia se reúnen.",
          de: "Ein Theaterfan ist jemand, der es liebt, Theaterstücke anzusehen und Theateraufführungen zu besuchen. Sie können viele verschiedene Shows sehen, über Theater lesen und ihre lokalen Theatergruppen unterstützen. Theaterfans schätzen die Kunst der Live-Performance und genießen die Magie, die entsteht, wenn Schauspieler und Publikum zusammenkommen.",
          nl: "Een theaterfan is iemand die ervan houdt om naar toneelstukken te kijken en theatervoorstellingen bij te wonen. Ze kunnen veel verschillende shows zien, over theater lezen en hun lokale theatergezelschappen steunen. Theaterfans waarderen de kunst van live-optreden en genieten van de magie die gebeurt wanneer acteurs en publiek samenkomen."
        }
      },
      {
        question: {
          en: "What do you call very exaggerated acting?",
          es: "¿Cómo se llama la actuación muy exagerada?",
          de: "Wie nennt man sehr übertriebenes Schauspiel?",
          nl: "Hoe noem je erg overdreven acteren?"
        },
        options: [
          { en: "Over-acting", es: "Sobreactuación", de: "Übertreibung", nl: "Overacteren" },
          { en: "Under-acting", es: "Subactuación", de: "Untertreibung", nl: "Onderacteren" },
          { en: "Normal acting", es: "Actuación normal", de: "Normales Schauspiel", nl: "Normaal acteren" },
          { en: "Perfect acting", es: "Actuación perfecta", de: "Perfektes Schauspiel", nl: "Perfect acteren" }
        ],
        correct: 0,
        explanation: {
          en: "Over-acting is when actors perform with too much emotion or make their movements and expressions bigger than they need to be. While some exaggeration can be good in theater, over-acting can make the performance seem unrealistic or silly instead of believable.",
          es: "La sobreactuación es cuando los actores actúan con demasiada emoción o hacen sus movimientos y expresiones más grandes de lo que necesitan ser. Aunque algo de exageración puede ser buena en el teatro, la sobreactuación puede hacer que la actuación parezca irreal o tonta en lugar de creíble.",
          de: "Übertreibung ist, wenn Schauspieler mit zu viel Emotion auftreten oder ihre Bewegungen und Ausdrücke größer machen, als sie sein müssen. Während etwas Übertreibung im Theater gut sein kann, kann Übertreibung die Aufführung unrealistisch oder albern statt glaubwürdig erscheinen lassen.",
          nl: "Overacteren is wanneer acteurs optreden met te veel emotie of hun bewegingen en uitdrukkingen groter maken dan nodig is. Hoewel wat overdrijving goed kan zijn in theater, kan overacteren de voorstelling onrealistisch of gek laten lijken in plaats van geloofwaardig."
        }
      },
      {
        question: {
          en: "What do you call the final bow actors take?",
          es: "¿Cómo se llama la reverencia final que hacen los actores?",
          de: "Wie nennt man die finale Verbeugung der Schauspieler?",
          nl: "Hoe noem je de laatste buiging die acteurs maken?"
        },
        options: [
          { en: "Curtain call", es: "Llamada a escena", de: "Vorhang", nl: "Slotapplaus" },
          { en: "Wave goodbye", es: "Despedida", de: "Auf Wiedersehen winken", nl: "Afscheidszwaaien" },
          { en: "Dance party", es: "Fiesta de baile", de: "Tanzparty", nl: "Dansfeest" },
          { en: "Snack time", es: "Hora del refrigerio", de: "Snackzeit", nl: "Snacktijd" }
        ],
        correct: 0,
        explanation: {
          en: "A curtain call is when all the actors come back on stage at the end of the play to bow and receive applause from the audience. It's a special moment where the actors can thank the audience for watching, and the audience can show their appreciation for the performance.",
          es: "Una llamada a escena es cuando todos los actores regresan al escenario al final de la obra para hacer reverencia y recibir aplausos de la audiencia. Es un momento especial donde los actores pueden agradecer a la audiencia por ver, y la audiencia puede mostrar su apreciación por la actuación.",
          de: "Ein Vorhang ist, wenn alle Schauspieler am Ende des Stücks zurück auf die Bühne kommen, um sich zu verbeugen und Applaus vom Publikum zu erhalten. Es ist ein besonderer Moment, wo die Schauspieler dem Publikum für das Zusehen danken können, und das Publikum seine Wertschätzung für die Aufführung zeigen kann.",
          nl: "Een slotapplaus is wanneer alle acteurs aan het einde van het toneelstuk terugkomen op het podium om te buigen en applaus van het publiek te ontvangen. Het is een speciaal moment waarbij de acteurs het publiek kunnen bedanken voor het kijken, en het publiek hun waardering voor de voorstelling kan tonen."
        }
      },
      {
        question: {
          en: "What kind of theater uses only black clothing and objects?",
          es: "¿Qué tipo de teatro usa solo ropa y objetos negros?",
          de: "Welche Art von Theater benutzt nur schwarze Kleidung und Gegenstände?",
          nl: "Wat voor theater gebruikt alleen zwarte kleding en voorwerpen?"
        },
        options: [
          { en: "Black box theater", es: "Teatro de caja negra", de: "Black Box Theater", nl: "Black box theater" },
          { en: "White theater", es: "Teatro blanco", de: "Weißes Theater", nl: "Wit theater" },
          { en: "Rainbow theater", es: "Teatro arcoíris", de: "Regenbogentheater", nl: "Regenboogtheater" },
          { en: "Silver theater", es: "Teatro plateado", de: "Silbertheater", nl: "Zilver theater" }
        ],
        correct: 0,
        explanation: {
          en: "Black box theater is a simple, flexible theater space with black walls, ceiling, and floor. The audience and stage can be arranged in different ways for each show. This type of theater focuses attention on the actors and story rather than fancy scenery, making it perfect for intimate, experimental performances.",
          es: "El teatro de caja negra es un espacio teatral simple y flexible con paredes, techo y piso negros. La audiencia y el escenario pueden organizarse de diferentes maneras para cada espectáculo. Este tipo de teatro enfoca la atención en los actores y la historia en lugar de escenografía elegante, haciéndolo perfecto para actuaciones íntimas y experimentales.",
          de: "Black Box Theater ist ein einfacher, flexibler Theaterraum mit schwarzen Wänden, Decke und Boden. Das Publikum und die Bühne können für jede Show unterschiedlich angeordnet werden. Diese Art von Theater lenkt die Aufmerksamkeit auf die Schauspieler und die Geschichte anstatt auf ausgefallenes Bühnenbild und ist perfekt für intime, experimentelle Aufführungen.",
          nl: "Black box theater is een eenvoudige, flexibele theaterruimte met zwarte muren, plafond en vloer. Het publiek en podium kunnen voor elke voorstelling op verschillende manieren worden ingedeeld. Dit soort theater richt de aandacht op de acteurs en het verhaal in plaats van fancy decor, waardoor het perfect is voor intieme, experimentele voorstellingen."
        }
      },
      {
        question: {
          en: "What do we call a story told through pictures and words in books?",
          es: "¿Cómo llamamos a una historia contada a través de imágenes y palabras en los libros?",
          de: "Wie nennen wir eine Geschichte, die durch Bilder und Wörter in Büchern erzählt wird?",
          nl: "Hoe noemen we een verhaal dat verteld wordt door plaatjes en woorden in boeken?"
        },
        options: [
          { en: "Comic book", es: "Cómic", de: "Comic", nl: "Stripboek" },
          { en: "Dictionary", es: "Diccionario", de: "Wörterbuch", nl: "Woordenboek" },
          { en: "Phone book", es: "Guía telefónica", de: "Telefonbuch", nl: "Telefoonboek" },
          { en: "Recipe book", es: "Libro de recetas", de: "Kochbuch", nl: "Receptenboek" }
        ],
        correct: 0,
        explanation: {
          en: "A comic book tells stories using both pictures and words! The pictures show what's happening, and speech bubbles contain what the characters are saying. Comic books are fun to read because you can see the action and follow along with the story visually!",
          es: "Un cómic cuenta historias usando tanto imágenes como palabras. Las imágenes muestran lo que está pasando, y las burbujas de diálogo contienen lo que dicen los personajes. ¡Los cómics son divertidos de leer porque puedes ver la acción y seguir la historia visualmente!",
          de: "Ein Comic erzählt Geschichten mit Bildern und Wörtern! Die Bilder zeigen, was passiert, und Sprechblasen enthalten, was die Charaktere sagen. Comics sind lustig zu lesen, weil man die Handlung sehen und der Geschichte visuell folgen kann!",
          nl: "Een stripboek vertelt verhalen met zowel plaatjes als woorden! De plaatjes laten zien wat er gebeurt, en spraakballonnen bevatten wat de personages zeggen. Stripboeken zijn leuk om te lezen omdat je de actie kunt zien en het verhaal visueel kunt volgen!"
        }
      },
      {
        question: {
          en: "What colorful art do people create on sidewalks with chalk?",
          es: "¿Qué arte colorido crean las personas en las aceras con tiza?",
          de: "Welche bunte Kunst erstellen Menschen auf Gehwegen mit Kreide?",
          nl: "Welke kleurrijke kunst maken mensen op stoepen met krijt?"
        },
        options: [
          { en: "Sidewalk art", es: "Arte de acera", de: "Gehwegkunst", nl: "Stoepkunst" },
          { en: "Cooking", es: "Cocinar", de: "Kochen", nl: "Koken" },
          { en: "Gardening", es: "Jardinería", de: "Gärtnern", nl: "Tuinieren" },
          { en: "Shopping", es: "Comprar", de: "Einkaufen", nl: "Winkelen" }
        ],
        correct: 0,
        explanation: {
          en: "Sidewalk art is beautiful, colorful drawings and designs that people create on sidewalks using chalk! Artists draw pictures, write messages, or make patterns that brighten up the neighborhood. Sidewalk chalk art is temporary and washes away with rain, but it brings joy to everyone who sees it!",
          es: "El arte de acera son dibujos y diseños hermosos y coloridos que las personas crean en las aceras usando tiza. Los artistas dibujan imágenes, escriben mensajes o hacen patrones que alegran el vecindario. ¡El arte de tiza en la acera es temporal y se borra con la lluvia, pero trae alegría a todos los que lo ven!",
          de: "Gehwegkunst sind schöne, bunte Zeichnungen und Designs, die Menschen auf Gehwegen mit Kreide erstellen! Künstler zeichnen Bilder, schreiben Nachrichten oder machen Muster, die die Nachbarschaft aufhellen. Gehweg-Kreidekunst ist temporär und wäscht sich mit Regen weg, aber sie bringt Freude zu jedem, der sie sieht!",
          nl: "Stoepkunst zijn prachtige, kleurrijke tekeningen en ontwerpen die mensen op stoepen maken met krijt! Kunstenaars tekenen plaatjes, schrijven berichten of maken patronen die de buurt opvrolijken. Stoep-krijtkunst is tijdelijk en spoelt weg met regen, maar het brengt vreugde aan iedereen die het ziet!"
        }
      },
      {
        question: {
          en: "What do we call the person who leads an orchestra?",
          es: "¿Cómo llamamos a la persona que dirige una orquesta?",
          de: "Wie nennen wir die Person, die ein Orchester leitet?",
          nl: "Hoe noemen we de persoon die een orkest leidt?"
        },
        options: [
          { en: "Conductor", es: "Director", de: "Dirigent", nl: "Dirigent" },
          { en: "Teacher", es: "Maestro", de: "Lehrer", nl: "Leraar" },
          { en: "Doctor", es: "Doctor", de: "Arzt", nl: "Dokter" },
          { en: "Baker", es: "Panadero", de: "Bäcker", nl: "Bakker" }
        ],
        correct: 0,
        explanation: {
          en: "A conductor is the person who stands in front of an orchestra and leads all the musicians! They use a special stick called a baton to keep time and guide the music. The conductor helps all the different instruments play together beautifully to create wonderful music!",
          es: "Un director es la persona que se para frente a una orquesta y guía a todos los músicos. Usan un palo especial llamado batuta para mantener el tiempo y guiar la música. ¡El director ayuda a todos los diferentes instrumentos a tocar juntos hermosamente para crear música maravillosa!",
          de: "Ein Dirigent ist die Person, die vor einem Orchester steht und alle Musiker leitet! Sie verwenden einen speziellen Stock namens Taktstock, um das Tempo zu halten und die Musik zu führen. Der Dirigent hilft allen verschiedenen Instrumenten, wunderschön zusammen zu spielen, um wunderbare Musik zu schaffen!",
          nl: "Een dirigent is de persoon die voor een orkest staat en alle muzikanten leidt! Ze gebruiken een speciale stok die een dirigeerstok wordt genoemd om de maat te houden en de muziek te leiden. De dirigent helpt alle verschillende instrumenten prachtig samen te spelen om wonderlijke muziek te creëren!"
        }
      },
      {
        question: {
          en: "What type of art uses small pieces of colored glass or stone?",
          es: "¿Qué tipo de arte usa pequeños pedazos de vidrio o piedra de colores?",
          de: "Welche Art von Kunst verwendet kleine Stücke von farbigem Glas oder Stein?",
          nl: "Welk soort kunst gebruikt kleine stukjes gekleurd glas of steen?"
        },
        options: [
          { en: "Mosaic", es: "Mosaico", de: "Mosaik", nl: "Mozaïek" },
          { en: "Painting", es: "Pintura", de: "Malerei", nl: "Schilderij" },
          { en: "Singing", es: "Cantar", de: "Singen", nl: "Zingen" },
          { en: "Dancing", es: "Bailar", de: "Tanzen", nl: "Dansen" }
        ],
        correct: 0,
        explanation: {
          en: "A mosaic is beautiful art made by arranging small pieces of colored glass, stone, or tiles to create pictures and patterns! Artists carefully place each tiny piece next to others to form amazing designs. Mosaics can be found on walls, floors, and buildings all around the world!",
          es: "Un mosaico es arte hermoso hecho al organizar pequeños pedazos de vidrio coloreado, piedra o azulejos para crear imágenes y patrones. Los artistas colocan cuidadosamente cada pequeño pedazo junto a otros para formar diseños increíbles. ¡Los mosaicos se pueden encontrar en paredes, pisos y edificios de todo el mundo!",
          de: "Ein Mosaik ist schöne Kunst, die durch das Anordnen kleiner Stücke von farbigem Glas, Stein oder Fliesen gemacht wird, um Bilder und Muster zu erstellen! Künstler platzieren sorgfältig jedes winzige Stück neben anderen, um erstaunliche Designs zu formen. Mosaike können an Wänden, Böden und Gebäuden auf der ganzen Welt gefunden werden!",
          nl: "Een mozaïek is prachtige kunst gemaakt door kleine stukjes gekleurd glas, steen of tegels te arrangeren om plaatjes en patronen te maken! Kunstenaars plaatsen zorgvuldig elk klein stukje naast anderen om geweldige ontwerpen te vormen. Mozaïeken kunnen gevonden worden op muren, vloeren en gebouwen over de hele wereld!"
        }
      },
      {
        question: {
          en: "What do we call a play performed without speaking, using only body movements?",
          es: "¿Cómo llamamos a una obra realizada sin hablar, usando solo movimientos corporales?",
          de: "Wie nennen wir ein Stück, das ohne Sprechen aufgeführt wird und nur Körperbewegungen verwendet?",
          nl: "Hoe noemen we een toneelstuk dat wordt opgevoerd zonder te spreken, alleen met lichaamsbewegingen?"
        },
        options: [
          { en: "Mime", es: "Mímica", de: "Pantomime", nl: "Mime" },
          { en: "Concert", es: "Concierto", de: "Konzert", nl: "Concert" },
          { en: "Movie", es: "Película", de: "Film", nl: "Film" },
          { en: "Book reading", es: "Lectura de libro", de: "Buchlesung", nl: "Boeklezing" }
        ],
        correct: 0,
        explanation: {
          en: "Mime is a special type of performance where actors tell stories and express emotions using only their body movements, facial expressions, and gestures - no words at all! Mime artists often pretend to touch invisible walls, climb invisible ropes, or be trapped in invisible boxes. It's amazing how much they can communicate without speaking!",
          es: "La mímica es un tipo especial de actuación donde los actores cuentan historias y expresan emociones usando solo sus movimientos corporales, expresiones faciales y gestos, ¡sin palabras en absoluto! Los artistas de mímica a menudo pretenden tocar paredes invisibles, trepar cuerdas invisibles o estar atrapados en cajas invisibles. ¡Es increíble cuánto pueden comunicar sin hablar!",
          de: "Pantomime ist eine besondere Art der Aufführung, bei der Schauspieler Geschichten erzählen und Emotionen nur durch ihre Körperbewegungen, Gesichtsausdrücke und Gesten ausdrücken - ganz ohne Worte! Pantomimenkünstler tun oft so, als würden sie unsichtbare Wände berühren, unsichtbare Seile klettern oder in unsichtbaren Kisten gefangen sein. Es ist erstaunlich, wie viel sie ohne Sprechen kommunizieren können!",
          nl: "Mime is een speciaal soort voorstelling waarbij acteurs verhalen vertellen en emoties uitdrukken met alleen hun lichaamsbewegingen, gezichtsuitdrukkingen en gebaren - helemaal geen woorden! Mime-artiesten doen vaak alsof ze onzichtbare muren aanraken, onzichtbare touwen beklimmen of gevangen zitten in onzichtbare dozen. Het is geweldig hoeveel ze kunnen communiceren zonder te spreken!"
        }
      }
    ]
  };

  if (typeof window.addLevel === 'function') {
    window.addLevel('warm-up/arts-culture', level5);
  }
})();