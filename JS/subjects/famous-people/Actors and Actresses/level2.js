// Actors and Actresses Quiz - Level 2: Recent Blockbuster Stars
(function() {
  const level2 = {
    name: {
      en: "Actors and Actresses Level 2",
      es: "Actores y Actrices Nivel 2",
      de: "Schauspieler und Schauspielerinnen Stufe 2",
      nl: "Acteurs en Actrices Level 2"
    },
    questions: [
      {
        question: {
          en: "Who played Luke Skywalker in the original Star Wars trilogy?",
          es: "¿Quién interpretó a Luke Skywalker en la trilogía original de Star Wars?",
          de: "Wer spielte Luke Skywalker in der ursprünglichen Star Wars-Trilogie?",
          nl: "Wie speelde Luke Skywalker in de originele Star Wars trilogie?"
        },
        options: [
          { en: "Mark Hamill", es: "Mark Hamill", de: "Mark Hamill", nl: "Mark Hamill" },
          { en: "Harrison Ford", es: "Harrison Ford", de: "Harrison Ford", nl: "Harrison Ford" },
          { en: "Alec Guinness", es: "Alec Guinness", de: "Alec Guinness", nl: "Alec Guinness" },
          { en: "Billy Dee Williams", es: "Billy Dee Williams", de: "Billy Dee Williams", nl: "Billy Dee Williams" }
        ],
        correct: 0,
        explanation: {
          en: "Mark Hamill played Luke Skywalker in the original Star Wars trilogy (1977-1983) and returned for the sequel trilogy decades later.",
          es: "Mark Hamill interpretó a Luke Skywalker en la trilogía original de Star Wars (1977-1983) y regresó para la trilogía secuela décadas después.",
          de: "Mark Hamill spielte Luke Skywalker in der ursprünglichen Star Wars-Trilogie (1977-1983) und kehrte Jahrzehnte später für die Sequel-Trilogie zurück.",
          nl: "Mark Hamill speelde Luke Skywalker in de originele Star Wars trilogie (1977-1983) en keerde decennia later terug voor de sequel trilogie."
        }
      },
      {
        question: {
          en: "Which actor played Han Solo in the Star Wars films?",
          es: "¿Qué actor interpretó a Han Solo en las películas de Star Wars?",
          de: "Welcher Schauspieler spielte Han Solo in den Star Wars-Filmen?",
          nl: "Welke acteur speelde Han Solo in de Star Wars films?"
        },
        options: [
          { en: "Harrison Ford", es: "Harrison Ford", de: "Harrison Ford", nl: "Harrison Ford" },
          { en: "Mark Hamill", es: "Mark Hamill", de: "Mark Hamill", nl: "Mark Hamill" },
          { en: "Alden Ehrenreich", es: "Alden Ehrenreich", de: "Alden Ehrenreich", nl: "Alden Ehrenreich" },
          { en: "Oscar Isaac", es: "Oscar Isaac", de: "Oscar Isaac", nl: "Oscar Isaac" }
        ],
        correct: 0,
        explanation: {
          en: "Harrison Ford portrayed the smuggler Han Solo in the original trilogy and returned for The Force Awakens, creating one of cinema's most beloved characters.",
          es: "Harrison Ford interpretó al contrabandista Han Solo en la trilogía original y regresó para El Despertar de la Fuerza, creando uno de los personajes más queridos del cine.",
          de: "Harrison Ford verkörperte den Schmuggler Han Solo in der ursprünglichen Trilogie und kehrte für Das Erwachen der Macht zurück, wodurch er eine der beliebtesten Figuren des Kinos schuf.",
          nl: "Harrison Ford speelde de smokkelaar Han Solo in de originele trilogie en keerde terug voor The Force Awakens, waarmee hij een van de meest geliefde personages van de cinema creëerde."
        }
      },
      {
        question: {
          en: "Who played Indiana Jones in the adventure film series?",
          es: "¿Quién interpretó a Indiana Jones en la serie de películas de aventuras?",
          de: "Wer spielte Indiana Jones in der Abenteuer-Filmreihe?",
          nl: "Wie speelde Indiana Jones in de avontuur filmreeks?"
        },
        options: [
          { en: "Harrison Ford", es: "Harrison Ford", de: "Harrison Ford", nl: "Harrison Ford" },
          { en: "Sean Connery", es: "Sean Connery", de: "Sean Connery", nl: "Sean Connery" },
          { en: "River Phoenix", es: "River Phoenix", de: "River Phoenix", nl: "River Phoenix" },
          { en: "Shia LaBeouf", es: "Shia LaBeouf", de: "Shia LaBeouf", nl: "Shia LaBeouf" }
        ],
        correct: 0,
        explanation: {
          en: "Harrison Ford brought the archaeologist-adventurer Indiana Jones to life in four films, starting with Raiders of the Lost Ark (1981).",
          es: "Harrison Ford dio vida al arqueólogo-aventurero Indiana Jones en cuatro películas, comenzando con En busca del arca perdida (1981).",
          de: "Harrison Ford erweckte den Archäologen-Abenteurer Indiana Jones in vier Filmen zum Leben, beginnend mit Jäger des verlorenen Schatzes (1981).",
          nl: "Harrison Ford bracht de archeoloog-avonturier Indiana Jones tot leven in vier films, te beginnen met Raiders of the Lost Ark (1981)."
        }
      },
      {
        question: {
          en: "Which actress played Lara Croft in the Tomb Raider movies?",
          es: "¿Qué actriz interpretó a Lara Croft en las películas de Tomb Raider?",
          de: "Welche Schauspielerin spielte Lara Croft in den Tomb Raider-Filmen?",
          nl: "Welke actrice speelde Lara Croft in de Tomb Raider films?"
        },
        options: [
          { en: "Angelina Jolie", es: "Angelina Jolie", de: "Angelina Jolie", nl: "Angelina Jolie" },
          { en: "Alicia Vikander", es: "Alicia Vikander", de: "Alicia Vikander", nl: "Alicia Vikander" },
          { en: "Milla Jovovich", es: "Milla Jovovich", de: "Milla Jovovich", nl: "Milla Jovovich" },
          { en: "Kate Beckinsale", es: "Kate Beckinsale", de: "Kate Beckinsale", nl: "Kate Beckinsale" }
        ],
        correct: 0,
        explanation: {
          en: "Angelina Jolie played Lara Croft in the first two Tomb Raider films (2001, 2003), establishing herself as an action star before Alicia Vikander took over the role.",
          es: "Angelina Jolie interpretó a Lara Croft en las dos primeras películas de Tomb Raider (2001, 2003), estableciéndose como una estrella de acción antes de que Alicia Vikander tomara el papel.",
          de: "Angelina Jolie spielte Lara Croft in den ersten beiden Tomb Raider-Filmen (2001, 2003) und etablierte sich als Action-Star, bevor Alicia Vikander die Rolle übernahm.",
          nl: "Angelina Jolie speelde Lara Croft in de eerste twee Tomb Raider films (2001, 2003), en vestigde zichzelf als actie-ster voordat Alicia Vikander de rol overnam."
        }
      },
      {
        question: {
          en: "Who played Forrest Gump in the 1994 film?",
          es: "¿Quién interpretó a Forrest Gump en la película de 1994?",
          de: "Wer spielte Forrest Gump im Film von 1994?",
          nl: "Wie speelde Forrest Gump in de film van 1994?"
        },
        options: [
          { en: "Tom Hanks", es: "Tom Hanks", de: "Tom Hanks", nl: "Tom Hanks" },
          { en: "Kevin Costner", es: "Kevin Costner", de: "Kevin Costner", nl: "Kevin Costner" },
          { en: "Russell Crowe", es: "Russell Crowe", de: "Russell Crowe", nl: "Russell Crowe" },
          { en: "Mel Gibson", es: "Mel Gibson", de: "Mel Gibson", nl: "Mel Gibson" }
        ],
        correct: 0,
        explanation: {
          en: "Tom Hanks won the Academy Award for Best Actor for his heartwarming portrayal of the simple-minded but kind Forrest Gump.",
          es: "Tom Hanks ganó el Premio de la Academia al Mejor Actor por su conmovedora interpretación del simple pero bondadoso Forrest Gump.",
          de: "Tom Hanks gewann den Academy Award für den besten Hauptdarsteller für seine herzerwärmende Darstellung des einfältigen aber gutherzigen Forrest Gump.",
          nl: "Tom Hanks won de Academy Award voor Beste Acteur voor zijn hartverwarmende vertolking van de eenvoudige maar vriendelijke Forrest Gump."
        }
      },
      {
        question: {
          en: "Which actor starred as Neo in The Matrix trilogy?",
          es: "¿Qué actor protagonizó como Neo en la trilogía Matrix?",
          de: "Welcher Schauspieler spielte Neo in der Matrix-Trilogie?",
          nl: "Welke acteur speelde Neo in de Matrix trilogie?"
        },
        options: [
          { en: "Keanu Reeves", es: "Keanu Reeves", de: "Keanu Reeves", nl: "Keanu Reeves" },
          { en: "Will Smith", es: "Will Smith", de: "Will Smith", nl: "Will Smith" },
          { en: "Brad Pitt", es: "Brad Pitt", de: "Brad Pitt", nl: "Brad Pitt" },
          { en: "Tom Cruise", es: "Tom Cruise", de: "Tom Cruise", nl: "Tom Cruise" }
        ],
        correct: 0,
        explanation: {
          en: "Keanu Reeves played the chosen one Neo in The Matrix trilogy, delivering iconic action sequences and philosophical depth to the role.",
          es: "Keanu Reeves interpretó al elegido Neo en la trilogía Matrix, aportando secuencias de acción icónicas y profundidad filosófica al papel.",
          de: "Keanu Reeves spielte den Auserwählten Neo in der Matrix-Trilogie und brachte ikonische Action-Sequenzen und philosophische Tiefe in die Rolle.",
          nl: "Keanu Reeves speelde de uitverkorene Neo in de Matrix trilogie, en leverde iconische actie sequenties en filosofische diepte aan de rol."
        }
      },
      {
        question: {
          en: "Who played Maximus in Gladiator (2000)?",
          es: "¿Quién interpretó a Maximus en Gladiador (2000)?",
          de: "Wer spielte Maximus in Gladiator (2000)?",
          nl: "Wie speelde Maximus in Gladiator (2000)?"
        },
        options: [
          { en: "Russell Crowe", es: "Russell Crowe", de: "Russell Crowe", nl: "Russell Crowe" },
          { en: "Joaquin Phoenix", es: "Joaquin Phoenix", de: "Joaquin Phoenix", nl: "Joaquin Phoenix" },
          { en: "Gerard Butler", es: "Gerard Butler", de: "Gerard Butler", nl: "Gerard Butler" },
          { en: "Eric Bana", es: "Eric Bana", de: "Eric Bana", nl: "Eric Bana" }
        ],
        correct: 0,
        explanation: {
          en: "Russell Crowe won the Academy Award for Best Actor for his powerful performance as the Roman general turned gladiator Maximus Decimus Meridius.",
          es: "Russell Crowe ganó el Premio de la Academia al Mejor Actor por su poderosa actuación como el general romano convertido en gladiador Maximus Decimus Meridius.",
          de: "Russell Crowe gewann den Academy Award für den besten Hauptdarsteller für seine kraftvolle Darstellung des römischen Generals, der zum Gladiator wurde, Maximus Decimus Meridius.",
          nl: "Russell Crowe won de Academy Award voor Beste Acteur voor zijn krachtige optreden als de Romeinse generaal die gladiator werd, Maximus Decimus Meridius."
        }
      },
      {
        question: {
          en: "Which actress played Hermione in the Harry Potter films?",
          es: "¿Qué actriz interpretó a Hermione en las películas de Harry Potter?",
          de: "Welche Schauspielerin spielte Hermione in den Harry Potter-Filmen?",
          nl: "Welke actrice speelde Hermione in de Harry Potter films?"
        },
        options: [
          { en: "Emma Watson", es: "Emma Watson", de: "Emma Watson", nl: "Emma Watson" },
          { en: "Bonnie Wright", es: "Bonnie Wright", de: "Bonnie Wright", nl: "Bonnie Wright" },
          { en: "Evanna Lynch", es: "Evanna Lynch", de: "Evanna Lynch", nl: "Evanna Lynch" },
          { en: "Katie Leung", es: "Katie Leung", de: "Katie Leung", nl: "Katie Leung" }
        ],
        correct: 0,
        explanation: {
          en: "Emma Watson portrayed the intelligent witch Hermione Granger throughout all eight Harry Potter films, becoming a role model for young audiences worldwide.",
          es: "Emma Watson interpretó a la inteligente bruja Hermione Granger en las ocho películas de Harry Potter, convirtiéndose en un modelo a seguir para jóvenes audiencias mundial.",
          de: "Emma Watson verkörperte die intelligente Hexe Hermione Granger in allen acht Harry Potter-Filmen und wurde zu einem Vorbild für junge Zuschauer weltweit.",
          nl: "Emma Watson speelde de intelligente heks Hermione Granger in alle acht Harry Potter films, en werd een rolmodel voor jonge kijkers wereldwijd."
        }
      },
      {
        question: {
          en: "Who played Ethan Hunt in the Mission: Impossible films?",
          es: "¿Quién interpretó a Ethan Hunt en las películas de Misión Imposible?",
          de: "Wer spielte Ethan Hunt in den Mission: Impossible-Filmen?",
          nl: "Wie speelde Ethan Hunt in de Mission: Impossible films?"
        },
        options: [
          { en: "Tom Cruise", es: "Tom Cruise", de: "Tom Cruise", nl: "Tom Cruise" },
          { en: "Brad Pitt", es: "Brad Pitt", de: "Brad Pitt", nl: "Brad Pitt" },
          { en: "Matt Damon", es: "Matt Damon", de: "Matt Damon", nl: "Matt Damon" },
          { en: "Will Smith", es: "Will Smith", de: "Will Smith", nl: "Will Smith" }
        ],
        correct: 0,
        explanation: {
          en: "Tom Cruise has played IMF agent Ethan Hunt since the first Mission: Impossible film in 1996, performing many of his own dangerous stunts.",
          es: "Tom Cruise ha interpretado al agente del IMF Ethan Hunt desde la primera película de Misión Imposible en 1996, realizando muchas de sus propias acrobacias peligrosas.",
          de: "Tom Cruise spielt seit dem ersten Mission: Impossible-Film 1996 den IMF-Agenten Ethan Hunt und führt viele seiner eigenen gefährlichen Stunts aus.",
          nl: "Tom Cruise speelt sinds de eerste Mission: Impossible film in 1996 IMF-agent Ethan Hunt, en voert veel van zijn eigen gevaarlijke stunts uit."
        }
      },
      {
        question: {
          en: "Which actor played the lead role in Braveheart (1995)?",
          es: "¿Qué actor interpretó el papel principal en Corazón Valiente (1995)?",
          de: "Welcher Schauspieler spielte die Hauptrolle in Braveheart (1995)?",
          nl: "Welke acteur speelde de hoofdrol in Braveheart (1995)?"
        },
        options: [
          { en: "Mel Gibson", es: "Mel Gibson", de: "Mel Gibson", nl: "Mel Gibson" },
          { en: "Russell Crowe", es: "Russell Crowe", de: "Russell Crowe", nl: "Russell Crowe" },
          { en: "Kevin Costner", es: "Kevin Costner", de: "Kevin Costner", nl: "Kevin Costner" },
          { en: "Patrick Swayze", es: "Patrick Swayze", de: "Patrick Swayze", nl: "Patrick Swayze" }
        ],
        correct: 0,
        explanation: {
          en: "Mel Gibson directed and starred as William Wallace in Braveheart, winning Academy Awards for Best Picture and Best Director.",
          es: "Mel Gibson dirigió y protagonizó como William Wallace en Corazón Valiente, ganando Premios de la Academia a la Mejor Película y Mejor Director.",
          de: "Mel Gibson führte Regie und spielte William Wallace in Braveheart, wobei er Academy Awards für den besten Film und die beste Regie gewann.",
          nl: "Mel Gibson regisseerde en speelde William Wallace in Braveheart, en won Academy Awards voor Beste Film en Beste Regisseur."
        }
      },
      {
        question: {
          en: "Who played the title character in Speed (1994)?",
          es: "¿Quién interpretó el personaje principal en Máxima Velocidad (1994)?",
          de: "Wer spielte die Titelrolle in Speed (1994)?",
          nl: "Wie speelde het hoofdpersonage in Speed (1994)?"
        },
        options: [
          { en: "Keanu Reeves", es: "Keanu Reeves", de: "Keanu Reeves", nl: "Keanu Reeves" },
          { en: "Sandra Bullock", es: "Sandra Bullock", de: "Sandra Bullock", nl: "Sandra Bullock" },
          { en: "Dennis Hopper", es: "Dennis Hopper", de: "Dennis Hopper", nl: "Dennis Hopper" },
          { en: "Jeff Daniels", es: "Jeff Daniels", de: "Jeff Daniels", nl: "Jeff Daniels" }
        ],
        correct: 0,
        explanation: {
          en: "Keanu Reeves played LAPD officer Jack Traven who must keep a bus above 50 mph to prevent a bomb from exploding in this action thriller.",
          es: "Keanu Reeves interpretó al oficial de LAPD Jack Traven que debe mantener un autobús por encima de 50 mph para evitar que explote una bomba en este thriller de acción.",
          de: "Keanu Reeves spielte LAPD-Polizist Jack Traven, der einen Bus über 50 mph halten muss, um zu verhindern, dass eine Bombe in diesem Action-Thriller explodiert.",
          nl: "Keanu Reeves speelde LAPD-agent Jack Traven die een bus boven de 50 mph moet houden om te voorkomen dat een bom explodeert in deze actie-thriller."
        }
      },
      {
        question: {
          en: "Which actress played Sarah Connor in Terminator 2: Judgment Day?",
          es: "¿Qué actriz interpretó a Sarah Connor en Terminator 2: El Juicio Final?",
          de: "Welche Schauspielerin spielte Sarah Connor in Terminator 2: Tag der Abrechnung?",
          nl: "Welke actrice speelde Sarah Connor in Terminator 2: Judgment Day?"
        },
        options: [
          { en: "Linda Hamilton", es: "Linda Hamilton", de: "Linda Hamilton", nl: "Linda Hamilton" },
          { en: "Sigourney Weaver", es: "Sigourney Weaver", de: "Sigourney Weaver", nl: "Sigourney Weaver" },
          { en: "Michelle Pfeiffer", es: "Michelle Pfeiffer", de: "Michelle Pfeiffer", nl: "Michelle Pfeiffer" },
          { en: "Sharon Stone", es: "Sharon Stone", de: "Sharon Stone", nl: "Sharon Stone" }
        ],
        correct: 0,
        explanation: {
          en: "Linda Hamilton transformed into a muscular action hero as Sarah Connor in T2, creating one of cinema's most iconic female action characters.",
          es: "Linda Hamilton se transformó en una heroína de acción musculosa como Sarah Connor en T2, creando uno de los personajes femeninos de acción más icónicos del cine.",
          de: "Linda Hamilton verwandelte sich in T2 als Sarah Connor in eine muskulöse Action-Heldin und schuf eine der ikonischsten weiblichen Action-Figuren des Kinos.",
          nl: "Linda Hamilton transformeerde in een gespierde actie-heldin als Sarah Connor in T2, en creëerde een van de meest iconische vrouwelijke actie personages van de cinema."
        }
      },
      {
        question: {
          en: "Who played the Terminator in the original 1984 film?",
          es: "¿Quién interpretó al Terminator en la película original de 1984?",
          de: "Wer spielte den Terminator im ursprünglichen Film von 1984?",
          nl: "Wie speelde de Terminator in de originele 1984 film?"
        },
        options: [
          { en: "Arnold Schwarzenegger", es: "Arnold Schwarzenegger", de: "Arnold Schwarzenegger", nl: "Arnold Schwarzenegger" },
          { en: "Sylvester Stallone", es: "Sylvester Stallone", de: "Sylvester Stallone", nl: "Sylvester Stallone" },
          { en: "Jean-Claude Van Damme", es: "Jean-Claude Van Damme", de: "Jean-Claude Van Damme", nl: "Jean-Claude Van Damme" },
          { en: "Dolph Lundgren", es: "Dolph Lundgren", de: "Dolph Lundgren", nl: "Dolph Lundgren" }
        ],
        correct: 0,
        explanation: {
          en: "Arnold Schwarzenegger's portrayal of the cyborg assassin launched him to superstardom and gave us the iconic line 'I'll be back.'",
          es: "La interpretación de Arnold Schwarzenegger del asesino cyborg lo lanzó al estrellato y nos dio la línea icónica 'Volveré'.",
          de: "Arnold Schwarzeneggers Darstellung des Cyborg-Attentäters machte ihn zum Superstar und gab uns die ikonische Zeile 'I'll be back'.",
          nl: "Arnold Schwarzenegger's vertolking van de cyborg moordenaar lanceerde hem naar supersterrendom en gaf ons de iconische regel 'I'll be back'."
        }
      },
      {
        question: {
          en: "Which actor played Rocky Balboa in the Rocky film series?",
          es: "¿Qué actor interpretó a Rocky Balboa en la serie de películas de Rocky?",
          de: "Welcher Schauspieler spielte Rocky Balboa in der Rocky-Filmreihe?",
          nl: "Welke acteur speelde Rocky Balboa in de Rocky filmreeks?"
        },
        options: [
          { en: "Sylvester Stallone", es: "Sylvester Stallone", de: "Sylvester Stallone", nl: "Sylvester Stallone" },
          { en: "Robert De Niro", es: "Robert De Niro", de: "Robert De Niro", nl: "Robert De Niro" },
          { en: "Al Pacino", es: "Al Pacino", de: "Al Pacino", nl: "Al Pacino" },
          { en: "Arnold Schwarzenegger", es: "Arnold Schwarzenegger", de: "Arnold Schwarzenegger", nl: "Arnold Schwarzenegger" }
        ],
        correct: 0,
        explanation: {
          en: "Sylvester Stallone not only starred as Rocky but also wrote the screenplay, creating one of cinema's most beloved underdog stories.",
          es: "Sylvester Stallone no solo protagonizó como Rocky sino que también escribió el guión, creando una de las historias de underdog más queridas del cine.",
          de: "Sylvester Stallone spielte nicht nur Rocky, sondern schrieb auch das Drehbuch und schuf eine der beliebtesten Underdog-Geschichten des Kinos.",
          nl: "Sylvester Stallone speelde niet alleen Rocky maar schreef ook het scenario, en creëerde een van de meest geliefde underdog verhalen van de cinema."
        }
      },
      {
        question: {
          en: "Who played Ellen Ripley in the Alien film series?",
          es: "¿Quién interpretó a Ellen Ripley en la serie de películas Alien?",
          de: "Wer spielte Ellen Ripley in der Alien-Filmreihe?",
          nl: "Wie speelde Ellen Ripley in de Alien filmreeks?"
        },
        options: [
          { en: "Sigourney Weaver", es: "Sigourney Weaver", de: "Sigourney Weaver", nl: "Sigourney Weaver" },
          { en: "Linda Hamilton", es: "Linda Hamilton", de: "Linda Hamilton", nl: "Linda Hamilton" },
          { en: "Jamie Lee Curtis", es: "Jamie Lee Curtis", de: "Jamie Lee Curtis", nl: "Jamie Lee Curtis" },
          { en: "Kathleen Turner", es: "Kathleen Turner", de: "Kathleen Turner", nl: "Kathleen Turner" }
        ],
        correct: 0,
        explanation: {
          en: "Sigourney Weaver created one of cinema's greatest female action heroes as Ripley, fighting aliens across four films in the franchise.",
          es: "Sigourney Weaver creó una de las heroínas de acción femeninas más grandes del cine como Ripley, luchando contra aliens en cuatro películas de la franquicia.",
          de: "Sigourney Weaver schuf als Ripley eine der größten weiblichen Action-Heldinnen des Kinos und kämpfte in vier Filmen der Franchise gegen Aliens.",
          nl: "Sigourney Weaver creëerde een van de grootste vrouwelijke actie-helden van de cinema als Ripley, vechtend tegen aliens in vier films van de franchise."
        }
      },
      {
        question: {
          en: "Which actor played John McClane in the Die Hard series?",
          es: "¿Qué actor interpretó a John McClane en la serie Die Hard?",
          de: "Welcher Schauspieler spielte John McClane in der Die Hard-Serie?",
          nl: "Welke acteur speelde John McClane in de Die Hard serie?"
        },
        options: [
          { en: "Bruce Willis", es: "Bruce Willis", de: "Bruce Willis", nl: "Bruce Willis" },
          { en: "Mel Gibson", es: "Mel Gibson", de: "Mel Gibson", nl: "Mel Gibson" },
          { en: "Harrison Ford", es: "Harrison Ford", de: "Harrison Ford", nl: "Harrison Ford" },
          { en: "Kevin Costner", es: "Kevin Costner", de: "Kevin Costner", nl: "Kevin Costner" }
        ],
        correct: 0,
        explanation: {
          en: "Bruce Willis became an action star playing NYPD officer John McClane, starting with the original Die Hard (1988) and its memorable 'Yippee-ki-yay' catchphrase.",
          es: "Bruce Willis se convirtió en una estrella de acción interpretando al oficial de NYPD John McClane, comenzando con el Die Hard original (1988) y su memorable frase 'Yippee-ki-yay'.",
          de: "Bruce Willis wurde zum Action-Star als NYPD-Polizist John McClane, beginnend mit dem ursprünglichen Die Hard (1988) und seinem unvergesslichen 'Yippee-ki-yay'-Slogan.",
          nl: "Bruce Willis werd een actie-ster door NYPD-agent John McClane te spelen, te beginnen met de originele Die Hard (1988) en zijn memorabele 'Yippee-ki-yay' catchphrase."
        }
      },
      {
        question: {
          en: "Who played Sarah in The Abyss (1989)?",
          es: "¿Quién interpretó a Sarah en El Abismo (1989)?",
          de: "Wer spielte Sarah in Abyss - Abgrund des Todes (1989)?",
          nl: "Wie speelde Sarah in The Abyss (1989)?"
        },
        options: [
          { en: "Mary Elizabeth Mastrantonio", es: "Mary Elizabeth Mastrantonio", de: "Mary Elizabeth Mastrantonio", nl: "Mary Elizabeth Mastrantonio" },
          { en: "Sigourney Weaver", es: "Sigourney Weaver", de: "Sigourney Weaver", nl: "Sigourney Weaver" },
          { en: "Linda Hamilton", es: "Linda Hamilton", de: "Linda Hamilton", nl: "Linda Hamilton" },
          { en: "Glenn Close", es: "Glenn Close", de: "Glenn Close", nl: "Glenn Close" }
        ],
        correct: 0,
        explanation: {
          en: "Mary Elizabeth Mastrantonio played Dr. Lindsey Brigman in James Cameron's underwater thriller The Abyss, opposite Ed Harris.",
          es: "Mary Elizabeth Mastrantonio interpretó a la Dra. Lindsey Brigman en el thriller submarino de James Cameron El Abismo, junto a Ed Harris.",
          de: "Mary Elizabeth Mastrantonio spielte Dr. Lindsey Brigman in James Camerons Unterwasser-Thriller Abyss - Abgrund des Todes, an der Seite von Ed Harris.",
          nl: "Mary Elizabeth Mastrantonio speelde Dr. Lindsey Brigman in James Cameron's onderwater thriller The Abyss, tegenover Ed Harris."
        }
      },
      {
        question: {
          en: "Which actor played Maverick in Top Gun (1986)?",
          es: "¿Qué actor interpretó a Maverick en Top Gun (1986)?",
          de: "Welcher Schauspieler spielte Maverick in Top Gun (1986)?",
          nl: "Welke acteur speelde Maverick in Top Gun (1986)?"
        },
        options: [
          { en: "Tom Cruise", es: "Tom Cruise", de: "Tom Cruise", nl: "Tom Cruise" },
          { en: "Val Kilmer", es: "Val Kilmer", de: "Val Kilmer", nl: "Val Kilmer" },
          { en: "Anthony Edwards", es: "Anthony Edwards", de: "Anthony Edwards", nl: "Anthony Edwards" },
          { en: "Tom Skerritt", es: "Tom Skerritt", de: "Tom Skerritt", nl: "Tom Skerritt" }
        ],
        correct: 0,
        explanation: {
          en: "Tom Cruise played Pete 'Maverick' Mitchell, the cocky fighter pilot, launching his career as a major action star and returning decades later in Top Gun: Maverick.",
          es: "Tom Cruise interpretó a Pete 'Maverick' Mitchell, el piloto de caza arrogante, lanzando su carrera como una gran estrella de acción y regresando décadas después en Top Gun: Maverick.",
          de: "Tom Cruise spielte Pete 'Maverick' Mitchell, den selbstbewussten Kampfpiloten, was seine Karriere als großer Action-Star startete und Jahrzehnte später in Top Gun: Maverick zurückkehrte.",
          nl: "Tom Cruise speelde Pete 'Maverick' Mitchell, de arrogante gevechtspiloot, wat zijn carrière als grote actie-ster lanceerde en decennia later terugkeerde in Top Gun: Maverick."
        }
      },
      {
        question: {
          en: "Who played Martin Riggs in the Lethal Weapon series?",
          es: "¿Quién interpretó a Martin Riggs en la serie Arma Letal?",
          de: "Wer spielte Martin Riggs in der Lethal Weapon-Serie?",
          nl: "Wie speelde Martin Riggs in de Lethal Weapon serie?"
        },
        options: [
          { en: "Mel Gibson", es: "Mel Gibson", de: "Mel Gibson", nl: "Mel Gibson" },
          { en: "Danny Glover", es: "Danny Glover", de: "Danny Glover", nl: "Danny Glover" },
          { en: "Gary Busey", es: "Gary Busey", de: "Gary Busey", nl: "Gary Busey" },
          { en: "Joe Pesci", es: "Joe Pesci", de: "Joe Pesci", nl: "Joe Pesci" }
        ],
        correct: 0,
        explanation: {
          en: "Mel Gibson played the unhinged cop Martin Riggs alongside Danny Glover's Roger Murtaugh in four Lethal Weapon films, creating a classic buddy cop franchise.",
          es: "Mel Gibson interpretó al policía desequilibrado Martin Riggs junto a Roger Murtaugh de Danny Glover en cuatro películas de Arma Letal, creando una franquicia clásica de policías compañeros.",
          de: "Mel Gibson spielte den labilen Polizisten Martin Riggs neben Danny Glovers Roger Murtaugh in vier Lethal Weapon-Filmen und schuf eine klassische Buddy-Cop-Franchise.",
          nl: "Mel Gibson speelde de ontspoorde politieagent Martin Riggs naast Danny Glover's Roger Murtaugh in vier Lethal Weapon films, en creëerde een klassieke buddy cop franchise."
        }
      },
      {
        question: {
          en: "Which actress played Clarice Starling in The Silence of the Lambs?",
          es: "¿Qué actriz interpretó a Clarice Starling en El Silencio de los Corderos?",
          de: "Welche Schauspielerin spielte Clarice Starling in Das Schweigen der Lämmer?",
          nl: "Welke actrice speelde Clarice Starling in The Silence of the Lambs?"
        },
        options: [
          { en: "Jodie Foster", es: "Jodie Foster", de: "Jodie Foster", nl: "Jodie Foster" },
          { en: "Glenn Close", es: "Glenn Close", de: "Glenn Close", nl: "Glenn Close" },
          { en: "Michelle Pfeiffer", es: "Michelle Pfeiffer", de: "Michelle Pfeiffer", nl: "Michelle Pfeiffer" },
          { en: "Sharon Stone", es: "Sharon Stone", de: "Sharon Stone", nl: "Sharon Stone" }
        ],
        correct: 0,
        explanation: {
          en: "Jodie Foster won the Academy Award for Best Actress for her brave portrayal of FBI trainee Clarice Starling opposite Anthony Hopkins' Hannibal Lecter.",
          es: "Jodie Foster ganó el Premio de la Academia a la Mejor Actriz por su valiente interpretación de la trainee del FBI Clarice Starling frente al Hannibal Lecter de Anthony Hopkins.",
          de: "Jodie Foster gewann den Academy Award für die beste Hauptdarstellerin für ihre mutige Darstellung der FBI-Anwärterin Clarice Starling gegenüber Anthony Hopkins' Hannibal Lecter.",
          nl: "Jodie Foster won de Academy Award voor Beste Actrice voor haar moedige vertolking van FBI-trainee Clarice Starling tegenover Anthony Hopkins' Hannibal Lecter."
        }
      }
    ]
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level2;
  } else if (typeof window !== 'undefined') {
    window.level2 = level2;
  }
})();