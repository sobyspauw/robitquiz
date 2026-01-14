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
      },
      {
        question: {
          en: "Who played Jason Bourne in the Bourne film series?",
          es: "¿Quién interpretó a Jason Bourne en la serie de películas Bourne?",
          de: "Wer spielte Jason Bourne in der Bourne-Filmreihe?",
          nl: "Wie speelde Jason Bourne in de Bourne filmreeks?"
        },
        options: [
          { en: "Matt Damon", es: "Matt Damon", de: "Matt Damon", nl: "Matt Damon" },
          { en: "Brad Pitt", es: "Brad Pitt", de: "Brad Pitt", nl: "Brad Pitt" },
          { en: "Tom Cruise", es: "Tom Cruise", de: "Tom Cruise", nl: "Tom Cruise" },
          { en: "Jeremy Renner", es: "Jeremy Renner", de: "Jeremy Renner", nl: "Jeremy Renner" }
        ],
        correct: 0,
        explanation: {
          en: "Matt Damon starred as amnesiac CIA assassin Jason Bourne in five films, revolutionizing action cinema with realistic fight choreography and handheld camerawork.",
          es: "Matt Damon protagonizó como el asesino amnésico de la CIA Jason Bourne en cinco películas, revolucionando el cine de acción con coreografía de lucha realista y cámara en mano.",
          de: "Matt Damon spielte den amnestischen CIA-Attentäter Jason Bourne in fünf Filmen und revolutionierte das Action-Kino mit realistischer Kampfchoreografie und Handkamera-Arbeit.",
          nl: "Matt Damon speelde de amnestische CIA-moordenaar Jason Bourne in vijf films, en revolutioneerde actie-cinema met realistische vechtchoreografie en handheld camerawerk."
        }
      },
      {
        question: {
          en: "Which actor played Wolverine in the X-Men films?",
          es: "¿Qué actor interpretó a Wolverine en las películas de X-Men?",
          de: "Welcher Schauspieler spielte Wolverine in den X-Men-Filmen?",
          nl: "Welke acteur speelde Wolverine in de X-Men films?"
        },
        options: [
          { en: "Hugh Jackman", es: "Hugh Jackman", de: "Hugh Jackman", nl: "Hugh Jackman" },
          { en: "Patrick Stewart", es: "Patrick Stewart", de: "Patrick Stewart", nl: "Patrick Stewart" },
          { en: "Ian McKellen", es: "Ian McKellen", de: "Ian McKellen", nl: "Ian McKellen" },
          { en: "James Marsden", es: "James Marsden", de: "James Marsden", nl: "James Marsden" }
        ],
        correct: 0,
        explanation: {
          en: "Hugh Jackman portrayed the clawed mutant Wolverine across nine films from 2000 to 2017, making the role iconic and earning his final portrayal critical acclaim in Logan.",
          es: "Hugh Jackman interpretó al mutante con garras Wolverine en nueve películas de 2000 a 2017, haciendo el papel icónico y obteniendo aclamación crítica por su interpretación final en Logan.",
          de: "Hugh Jackman verkörperte den klauentragenden Mutanten Wolverine in neun Filmen von 2000 bis 2017 und machte die Rolle ikonisch, wobei seine letzte Darstellung in Logan kritische Anerkennung erhielt.",
          nl: "Hugh Jackman speelde de geklauwde mutant Wolverine in negen films van 2000 tot 2017, maakte de rol iconisch en kreeg kritische bijval voor zijn laatste vertolking in Logan."
        }
      },
      {
        question: {
          en: "Who played Aragorn in The Lord of the Rings trilogy?",
          es: "¿Quién interpretó a Aragorn en la trilogía El Señor de los Anillos?",
          de: "Wer spielte Aragorn in der Herr der Ringe-Trilogie?",
          nl: "Wie speelde Aragorn in The Lord of the Rings trilogie?"
        },
        options: [
          { en: "Viggo Mortensen", es: "Viggo Mortensen", de: "Viggo Mortensen", nl: "Viggo Mortensen" },
          { en: "Orlando Bloom", es: "Orlando Bloom", de: "Orlando Bloom", nl: "Orlando Bloom" },
          { en: "Sean Bean", es: "Sean Bean", de: "Sean Bean", nl: "Sean Bean" },
          { en: "Elijah Wood", es: "Elijah Wood", de: "Elijah Wood", nl: "Elijah Wood" }
        ],
        correct: 0,
        explanation: {
          en: "Viggo Mortensen portrayed the ranger who becomes king in Peter Jackson's Lord of the Rings trilogy, bringing depth and nobility to Aragorn.",
          es: "Viggo Mortensen interpretó al guardabosques que se convierte en rey en la trilogía El Señor de los Anillos de Peter Jackson, aportando profundidad y nobleza a Aragorn.",
          de: "Viggo Mortensen verkörperte den Waldläufer, der König wird, in Peter Jacksons Herr der Ringe-Trilogie und brachte Tiefe und Adel in Aragorn.",
          nl: "Viggo Mortensen speelde de zwerver die koning wordt in Peter Jackson's Lord of the Rings trilogie, en bracht diepte en adeldom naar Aragorn."
        }
      },
      {
        question: {
          en: "Which actress played Katniss Everdeen in The Hunger Games?",
          es: "¿Qué actriz interpretó a Katniss Everdeen en Los Juegos del Hambre?",
          de: "Welche Schauspielerin spielte Katniss Everdeen in Die Tribute von Panem?",
          nl: "Welke actrice speelde Katniss Everdeen in The Hunger Games?"
        },
        options: [
          { en: "Jennifer Lawrence", es: "Jennifer Lawrence", de: "Jennifer Lawrence", nl: "Jennifer Lawrence" },
          { en: "Emma Stone", es: "Emma Stone", de: "Emma Stone", nl: "Emma Stone" },
          { en: "Shailene Woodley", es: "Shailene Woodley", de: "Shailene Woodley", nl: "Shailene Woodley" },
          { en: "Kristen Stewart", es: "Kristen Stewart", de: "Kristen Stewart", nl: "Kristen Stewart" }
        ],
        correct: 0,
        explanation: {
          en: "Jennifer Lawrence brought the fierce archer and rebel leader Katniss Everdeen to life, becoming a global star and winning an Oscar during the franchise.",
          es: "Jennifer Lawrence dio vida a la feroz arquera y líder rebelde Katniss Everdeen, convirtiéndose en una estrella global y ganando un Oscar durante la franquicia.",
          de: "Jennifer Lawrence erweckte die wilde Bogenschützin und Rebellenführerin Katniss Everdeen zum Leben, wurde zum globalen Star und gewann während der Franchise einen Oscar.",
          nl: "Jennifer Lawrence bracht de felle boogschutter en rebellenleider Katniss Everdeen tot leven, werd een mondiale ster en won een Oscar tijdens de franchise."
        }
      },
      {
        question: {
          en: "Who played Frodo Baggins in The Lord of the Rings?",
          es: "¿Quién interpretó a Frodo Baggins en El Señor de los Anillos?",
          de: "Wer spielte Frodo Baggins in Der Herr der Ringe?",
          nl: "Wie speelde Frodo Baggins in The Lord of the Rings?"
        },
        options: [
          { en: "Elijah Wood", es: "Elijah Wood", de: "Elijah Wood", nl: "Elijah Wood" },
          { en: "Sean Astin", es: "Sean Astin", de: "Sean Astin", nl: "Sean Astin" },
          { en: "Dominic Monaghan", es: "Dominic Monaghan", de: "Dominic Monaghan", nl: "Dominic Monaghan" },
          { en: "Billy Boyd", es: "Billy Boyd", de: "Billy Boyd", nl: "Billy Boyd" }
        ],
        correct: 0,
        explanation: {
          en: "Elijah Wood portrayed the ring-bearer Frodo Baggins in all three Lord of the Rings films, carrying the emotional weight of the epic trilogy.",
          es: "Elijah Wood interpretó al portador del anillo Frodo Baggins en las tres películas de El Señor de los Anillos, llevando el peso emocional de la épica trilogía.",
          de: "Elijah Wood verkörperte den Ringträger Frodo Baggins in allen drei Herr der Ringe-Filmen und trug das emotionale Gewicht der epischen Trilogie.",
          nl: "Elijah Wood speelde de ringdrager Frodo Baggins in alle drie Lord of the Rings films, en droeg het emotionele gewicht van de epische trilogie."
        }
      },
      {
        question: {
          en: "Which actor played Legolas in The Lord of the Rings?",
          es: "¿Qué actor interpretó a Legolas en El Señor de los Anillos?",
          de: "Welcher Schauspieler spielte Legolas in Der Herr der Ringe?",
          nl: "Welke acteur speelde Legolas in The Lord of the Rings?"
        },
        options: [
          { en: "Orlando Bloom", es: "Orlando Bloom", de: "Orlando Bloom", nl: "Orlando Bloom" },
          { en: "Viggo Mortensen", es: "Viggo Mortensen", de: "Viggo Mortensen", nl: "Viggo Mortensen" },
          { en: "Karl Urban", es: "Karl Urban", de: "Karl Urban", nl: "Karl Urban" },
          { en: "John Rhys-Davies", es: "John Rhys-Davies", de: "John Rhys-Davies", nl: "John Rhys-Davies" }
        ],
        correct: 0,
        explanation: {
          en: "Orlando Bloom played the elf archer Legolas in The Lord of the Rings trilogy and reprised the role in The Hobbit films, showcasing incredible archery and fighting skills.",
          es: "Orlando Bloom interpretó al arquero elfo Legolas en la trilogía El Señor de los Anillos y repitió el papel en las películas de El Hobbit, mostrando increíbles habilidades de arquería y lucha.",
          de: "Orlando Bloom spielte den Elfenbogenschützen Legolas in der Herr der Ringe-Trilogie und wiederholte die Rolle in den Hobbit-Filmen, wobei er unglaubliche Bogen- und Kampffähigkeiten zeigte.",
          nl: "Orlando Bloom speelde de elfen boogschutter Legolas in The Lord of the Rings trilogie en herhaalde de rol in The Hobbit films, waarbij hij ongelooflijke boog- en vechtvaardigheden toonde."
        }
      },
      {
        question: {
          en: "Who played Trinity in The Matrix trilogy?",
          es: "¿Quién interpretó a Trinity en la trilogía Matrix?",
          de: "Wer spielte Trinity in der Matrix-Trilogie?",
          nl: "Wie speelde Trinity in de Matrix trilogie?"
        },
        options: [
          { en: "Carrie-Anne Moss", es: "Carrie-Anne Moss", de: "Carrie-Anne Moss", nl: "Carrie-Anne Moss" },
          { en: "Monica Bellucci", es: "Monica Bellucci", de: "Monica Bellucci", nl: "Monica Bellucci" },
          { en: "Jada Pinkett Smith", es: "Jada Pinkett Smith", de: "Jada Pinkett Smith", nl: "Jada Pinkett Smith" },
          { en: "Gloria Foster", es: "Gloria Foster", de: "Gloria Foster", nl: "Gloria Foster" }
        ],
        correct: 0,
        explanation: {
          en: "Carrie-Anne Moss portrayed the skilled hacker and Neo's love interest Trinity, performing impressive martial arts and stunts throughout the trilogy.",
          es: "Carrie-Anne Moss interpretó a la hacker hábil y el interés amoroso de Neo, Trinity, realizando artes marciales impresionantes y acrobacias durante toda la trilogía.",
          de: "Carrie-Anne Moss verkörperte die versierte Hackerin und Neos Liebe Trinity und führte während der gesamten Trilogie beeindruckende Kampfkunst und Stunts aus.",
          nl: "Carrie-Anne Moss speelde de bekwame hacker en Neo's liefdesinteresse Trinity, en voerde indrukwekkende martial arts en stunts uit tijdens de hele trilogie."
        }
      },
      {
        question: {
          en: "Which actor played Will Turner in Pirates of the Caribbean?",
          es: "¿Qué actor interpretó a Will Turner en Piratas del Caribe?",
          de: "Welcher Schauspieler spielte Will Turner in Fluch der Karibik?",
          nl: "Welke acteur speelde Will Turner in Pirates of the Caribbean?"
        },
        options: [
          { en: "Orlando Bloom", es: "Orlando Bloom", de: "Orlando Bloom", nl: "Orlando Bloom" },
          { en: "Johnny Depp", es: "Johnny Depp", de: "Johnny Depp", nl: "Johnny Depp" },
          { en: "Geoffrey Rush", es: "Geoffrey Rush", de: "Geoffrey Rush", nl: "Geoffrey Rush" },
          { en: "Bill Nighy", es: "Bill Nighy", de: "Bill Nighy", nl: "Bill Nighy" }
        ],
        correct: 0,
        explanation: {
          en: "Orlando Bloom played the blacksmith-turned-pirate Will Turner in the first three Pirates of the Caribbean films, returning briefly in the fifth installment.",
          es: "Orlando Bloom interpretó al herrero convertido en pirata Will Turner en las primeras tres películas de Piratas del Caribe, regresando brevemente en la quinta entrega.",
          de: "Orlando Bloom spielte den Schmied-zum-Piraten Will Turner in den ersten drei Fluch der Karibik-Filmen und kehrte kurz im fünften Teil zurück.",
          nl: "Orlando Bloom speelde de smid-tot-piraat Will Turner in de eerste drie Pirates of the Caribbean films, en keerde kort terug in het vijfde deel."
        }
      },
      {
        question: {
          en: "Who played Morpheus in The Matrix trilogy?",
          es: "¿Quién interpretó a Morpheus en la trilogía Matrix?",
          de: "Wer spielte Morpheus in der Matrix-Trilogie?",
          nl: "Wie speelde Morpheus in de Matrix trilogie?"
        },
        options: [
          { en: "Laurence Fishburne", es: "Laurence Fishburne", de: "Laurence Fishburne", nl: "Laurence Fishburne" },
          { en: "Samuel L. Jackson", es: "Samuel L. Jackson", de: "Samuel L. Jackson", nl: "Samuel L. Jackson" },
          { en: "Wesley Snipes", es: "Wesley Snipes", de: "Wesley Snipes", nl: "Wesley Snipes" },
          { en: "Denzel Washington", es: "Denzel Washington", de: "Denzel Washington", nl: "Denzel Washington" }
        ],
        correct: 0,
        explanation: {
          en: "Laurence Fishburne played the wise mentor Morpheus who awakens Neo to the truth about the Matrix, delivering the iconic red pill/blue pill choice.",
          es: "Laurence Fishburne interpretó al sabio mentor Morpheus que despierta a Neo a la verdad sobre Matrix, entregando la icónica elección de la píldora roja/azul.",
          de: "Laurence Fishburne spielte den weisen Mentor Morpheus, der Neo die Wahrheit über die Matrix offenbart und die ikonische Wahl der roten/blauen Pille anbietet.",
          nl: "Laurence Fishburne speelde de wijze mentor Morpheus die Neo wakker maakt voor de waarheid over de Matrix, en leverde de iconische rode pil/blauwe pil keuze."
        }
      },
      {
        question: {
          en: "Which actress played Elizabeth Swann in Pirates of the Caribbean?",
          es: "¿Qué actriz interpretó a Elizabeth Swann en Piratas del Caribe?",
          de: "Welche Schauspielerin spielte Elizabeth Swann in Fluch der Karibik?",
          nl: "Welke actrice speelde Elizabeth Swann in Pirates of the Caribbean?"
        },
        options: [
          { en: "Keira Knightley", es: "Keira Knightley", de: "Keira Knightley", nl: "Keira Knightley" },
          { en: "Natalie Portman", es: "Natalie Portman", de: "Natalie Portman", nl: "Natalie Portman" },
          { en: "Anne Hathaway", es: "Anne Hathaway", de: "Anne Hathaway", nl: "Anne Hathaway" },
          { en: "Emma Watson", es: "Emma Watson", de: "Emma Watson", nl: "Emma Watson" }
        ],
        correct: 0,
        explanation: {
          en: "Keira Knightley played the governor's daughter who becomes a pirate king in the Pirates of the Caribbean trilogy, earning an Oscar nomination during the franchise.",
          es: "Keira Knightley interpretó a la hija del gobernador que se convierte en rey pirata en la trilogía Piratas del Caribe, obteniendo una nominación al Oscar durante la franquicia.",
          de: "Keira Knightley spielte die Tochter des Gouverneurs, die in der Fluch der Karibik-Trilogie zum Piratenkönig wird, und erhielt während der Franchise eine Oscar-Nominierung.",
          nl: "Keira Knightley speelde de dochter van de gouverneur die een piratenkoning wordt in de Pirates of the Caribbean trilogie, en kreeg een Oscar nominatie tijdens de franchise."
        }
      },
      {
        question: {
          en: "Who played Gandalf in The Lord of the Rings and The Hobbit?",
          es: "¿Quién interpretó a Gandalf en El Señor de los Anillos y El Hobbit?",
          de: "Wer spielte Gandalf in Der Herr der Ringe und Der Hobbit?",
          nl: "Wie speelde Gandalf in The Lord of the Rings en The Hobbit?"
        },
        options: [
          { en: "Ian McKellen", es: "Ian McKellen", de: "Ian McKellen", nl: "Ian McKellen" },
          { en: "Christopher Lee", es: "Christopher Lee", de: "Christopher Lee", nl: "Christopher Lee" },
          { en: "Patrick Stewart", es: "Patrick Stewart", de: "Patrick Stewart", nl: "Patrick Stewart" },
          { en: "Michael Gambon", es: "Michael Gambon", de: "Michael Gambon", nl: "Michael Gambon" }
        ],
        correct: 0,
        explanation: {
          en: "Ian McKellen portrayed the wise wizard Gandalf the Grey and later Gandalf the White in all six Middle-earth films, delivering one of fantasy cinema's most iconic performances.",
          es: "Ian McKellen interpretó al sabio mago Gandalf el Gris y luego Gandalf el Blanco en las seis películas de la Tierra Media, entregando una de las actuaciones más icónicas del cine de fantasía.",
          de: "Ian McKellen verkörperte den weisen Zauberer Gandalf der Graue und später Gandalf der Weiße in allen sechs Mittelerde-Filmen und lieferte eine der ikonischsten Darstellungen des Fantasy-Kinos.",
          nl: "Ian McKellen speelde de wijze tovenaar Gandalf de Grijze en later Gandalf de Witte in alle zes Middle-earth films, en leverde een van de meest iconische optredens van de fantasy cinema."
        }
      },
      {
        question: {
          en: "Which actor played Gimli in The Lord of the Rings?",
          es: "¿Qué actor interpretó a Gimli en El Señor de los Anillos?",
          de: "Welcher Schauspieler spielte Gimli in Der Herr der Ringe?",
          nl: "Welke acteur speelde Gimli in The Lord of the Rings?"
        },
        options: [
          { en: "John Rhys-Davies", es: "John Rhys-Davies", de: "John Rhys-Davies", nl: "John Rhys-Davies" },
          { en: "Andy Serkis", es: "Andy Serkis", de: "Andy Serkis", nl: "Andy Serkis" },
          { en: "Bernard Hill", es: "Bernard Hill", de: "Bernard Hill", nl: "Bernard Hill" },
          { en: "Sean Bean", es: "Sean Bean", de: "Sean Bean", nl: "Sean Bean" }
        ],
        correct: 0,
        explanation: {
          en: "John Rhys-Davies brought humor and heart to the dwarf warrior Gimli, forming a memorable friendship with Legolas throughout the trilogy.",
          es: "John Rhys-Davies aportó humor y corazón al guerrero enano Gimli, formando una amistad memorable con Legolas durante toda la trilogía.",
          de: "John Rhys-Davies brachte Humor und Herz in den Zwergenkrieger Gimli und bildete während der gesamten Trilogie eine unvergessliche Freundschaft mit Legolas.",
          nl: "John Rhys-Davies bracht humor en hart naar de dwerg krijger Gimli, en vormde een memorabele vriendschap met Legolas tijdens de hele trilogie."
        }
      },
      {
        question: {
          en: "Who played Padmé Amidala in the Star Wars prequels?",
          es: "¿Quién interpretó a Padmé Amidala en las precuelas de Star Wars?",
          de: "Wer spielte Padmé Amidala in den Star Wars-Prequels?",
          nl: "Wie speelde Padmé Amidala in de Star Wars prequels?"
        },
        options: [
          { en: "Natalie Portman", es: "Natalie Portman", de: "Natalie Portman", nl: "Natalie Portman" },
          { en: "Keira Knightley", es: "Keira Knightley", de: "Keira Knightley", nl: "Keira Knightley" },
          { en: "Daisy Ridley", es: "Daisy Ridley", de: "Daisy Ridley", nl: "Daisy Ridley" },
          { en: "Carrie Fisher", es: "Carrie Fisher", de: "Carrie Fisher", nl: "Carrie Fisher" }
        ],
        correct: 0,
        explanation: {
          en: "Natalie Portman played Queen and Senator Padmé Amidala, Anakin Skywalker's love interest and mother of Luke and Leia, in the Star Wars prequel trilogy.",
          es: "Natalie Portman interpretó a la Reina y Senadora Padmé Amidala, el interés amoroso de Anakin Skywalker y madre de Luke y Leia, en la trilogía de precuelas de Star Wars.",
          de: "Natalie Portman spielte Königin und Senatorin Padmé Amidala, Anakin Skywalkers Liebe und Mutter von Luke und Leia, in der Star Wars-Prequel-Trilogie.",
          nl: "Natalie Portman speelde Koningin en Senator Padmé Amidala, Anakin Skywalker's liefdesinteresse en moeder van Luke en Leia, in de Star Wars prequel trilogie."
        }
      },
      {
        question: {
          en: "Which actor played Obi-Wan Kenobi in the Star Wars prequels?",
          es: "¿Qué actor interpretó a Obi-Wan Kenobi en las precuelas de Star Wars?",
          de: "Welcher Schauspieler spielte Obi-Wan Kenobi in den Star Wars-Prequels?",
          nl: "Welke acteur speelde Obi-Wan Kenobi in de Star Wars prequels?"
        },
        options: [
          { en: "Ewan McGregor", es: "Ewan McGregor", de: "Ewan McGregor", nl: "Ewan McGregor" },
          { en: "Hayden Christensen", es: "Hayden Christensen", de: "Hayden Christensen", nl: "Hayden Christensen" },
          { en: "Liam Neeson", es: "Liam Neeson", de: "Liam Neeson", nl: "Liam Neeson" },
          { en: "Samuel L. Jackson", es: "Samuel L. Jackson", de: "Samuel L. Jackson", nl: "Samuel L. Jackson" }
        ],
        correct: 0,
        explanation: {
          en: "Ewan McGregor portrayed the young Jedi Master Obi-Wan Kenobi in all three Star Wars prequel films and returned for the Disney+ series Obi-Wan Kenobi.",
          es: "Ewan McGregor interpretó al joven Maestro Jedi Obi-Wan Kenobi en las tres películas de precuelas de Star Wars y regresó para la serie de Disney+ Obi-Wan Kenobi.",
          de: "Ewan McGregor verkörperte den jungen Jedi-Meister Obi-Wan Kenobi in allen drei Star Wars-Prequel-Filmen und kehrte für die Disney+-Serie Obi-Wan Kenobi zurück.",
          nl: "Ewan McGregor speelde de jonge Jedi Master Obi-Wan Kenobi in alle drie Star Wars prequel films en keerde terug voor de Disney+ serie Obi-Wan Kenobi."
        }
      },
      {
        question: {
          en: "Who played Anakin Skywalker in the Star Wars prequel trilogy?",
          es: "¿Quién interpretó a Anakin Skywalker en la trilogía de precuelas de Star Wars?",
          de: "Wer spielte Anakin Skywalker in der Star Wars-Prequel-Trilogie?",
          nl: "Wie speelde Anakin Skywalker in de Star Wars prequel trilogie?"
        },
        options: [
          { en: "Hayden Christensen", es: "Hayden Christensen", de: "Hayden Christensen", nl: "Hayden Christensen" },
          { en: "Ewan McGregor", es: "Ewan McGregor", de: "Ewan McGregor", nl: "Ewan McGregor" },
          { en: "Jake Lloyd", es: "Jake Lloyd", de: "Jake Lloyd", nl: "Jake Lloyd" },
          { en: "Sebastian Shaw", es: "Sebastian Shaw", de: "Sebastian Shaw", nl: "Sebastian Shaw" }
        ],
        correct: 0,
        explanation: {
          en: "Hayden Christensen played teenage and adult Anakin Skywalker in Episodes II and III, portraying the Jedi's tragic fall to become Darth Vader.",
          es: "Hayden Christensen interpretó a Anakin Skywalker adolescente y adulto en los Episodios II y III, retratando la caída trágica del Jedi para convertirse en Darth Vader.",
          de: "Hayden Christensen spielte den jugendlichen und erwachsenen Anakin Skywalker in den Episoden II und III und stellte den tragischen Fall des Jedi dar, der zu Darth Vader wurde.",
          nl: "Hayden Christensen speelde de tiener en volwassen Anakin Skywalker in Episodes II en III, en portretteerde de tragische val van de Jedi om Darth Vader te worden."
        }
      },
      {
        question: {
          en: "Which actor played Qui-Gon Jinn in Star Wars Episode I?",
          es: "¿Qué actor interpretó a Qui-Gon Jinn en Star Wars Episodio I?",
          de: "Welcher Schauspieler spielte Qui-Gon Jinn in Star Wars Episode I?",
          nl: "Welke acteur speelde Qui-Gon Jinn in Star Wars Episode I?"
        },
        options: [
          { en: "Liam Neeson", es: "Liam Neeson", de: "Liam Neeson", nl: "Liam Neeson" },
          { en: "Ewan McGregor", es: "Ewan McGregor", de: "Ewan McGregor", nl: "Ewan McGregor" },
          { en: "Samuel L. Jackson", es: "Samuel L. Jackson", de: "Samuel L. Jackson", nl: "Samuel L. Jackson" },
          { en: "Christopher Lee", es: "Christopher Lee", de: "Christopher Lee", nl: "Christopher Lee" }
        ],
        correct: 0,
        explanation: {
          en: "Liam Neeson played the wise Jedi Master Qui-Gon Jinn who discovered young Anakin Skywalker on Tatooine in The Phantom Menace.",
          es: "Liam Neeson interpretó al sabio Maestro Jedi Qui-Gon Jinn que descubrió al joven Anakin Skywalker en Tatooine en La Amenaza Fantasma.",
          de: "Liam Neeson spielte den weisen Jedi-Meister Qui-Gon Jinn, der den jungen Anakin Skywalker auf Tatooine in Die dunkle Bedrohung entdeckte.",
          nl: "Liam Neeson speelde de wijze Jedi Master Qui-Gon Jinn die de jonge Anakin Skywalker ontdekte op Tatooine in The Phantom Menace."
        }
      },
      {
        question: {
          en: "Who played Professor X in the X-Men films?",
          es: "¿Quién interpretó al Profesor X en las películas de X-Men?",
          de: "Wer spielte Professor X in den X-Men-Filmen?",
          nl: "Wie speelde Professor X in de X-Men films?"
        },
        options: [
          { en: "Patrick Stewart", es: "Patrick Stewart", de: "Patrick Stewart", nl: "Patrick Stewart" },
          { en: "Ian McKellen", es: "Ian McKellen", de: "Ian McKellen", nl: "Ian McKellen" },
          { en: "James McAvoy", es: "James McAvoy", de: "James McAvoy", nl: "James McAvoy" },
          { en: "Michael Fassbender", es: "Michael Fassbender", de: "Michael Fassbender", nl: "Michael Fassbender" }
        ],
        correct: 0,
        explanation: {
          en: "Patrick Stewart portrayed the older Charles Xavier/Professor X in the original X-Men trilogy and later films, while James McAvoy played the younger version.",
          es: "Patrick Stewart interpretó al mayor Charles Xavier/Profesor X en la trilogía original de X-Men y películas posteriores, mientras que James McAvoy interpretó la versión más joven.",
          de: "Patrick Stewart verkörperte den älteren Charles Xavier/Professor X in der ursprünglichen X-Men-Trilogie und späteren Filmen, während James McAvoy die jüngere Version spielte.",
          nl: "Patrick Stewart speelde de oudere Charles Xavier/Professor X in de originele X-Men trilogie en latere films, terwijl James McAvoy de jongere versie speelde."
        }
      },
      {
        question: {
          en: "Which actor played Magneto in the original X-Men trilogy?",
          es: "¿Qué actor interpretó a Magneto en la trilogía original de X-Men?",
          de: "Welcher Schauspieler spielte Magneto in der ursprünglichen X-Men-Trilogie?",
          nl: "Welke acteur speelde Magneto in de originele X-Men trilogie?"
        },
        options: [
          { en: "Ian McKellen", es: "Ian McKellen", de: "Ian McKellen", nl: "Ian McKellen" },
          { en: "Patrick Stewart", es: "Patrick Stewart", de: "Patrick Stewart", nl: "Patrick Stewart" },
          { en: "Michael Fassbender", es: "Michael Fassbender", de: "Michael Fassbender", nl: "Michael Fassbender" },
          { en: "Brian Cox", es: "Brian Cox", de: "Brian Cox", nl: "Brian Cox" }
        ],
        correct: 0,
        explanation: {
          en: "Ian McKellen brought gravitas and complexity to the master of magnetism Magneto, Professor X's former friend turned adversary in the X-Men films.",
          es: "Ian McKellen aportó gravedad y complejidad al maestro del magnetismo Magneto, el ex amigo del Profesor X convertido en adversario en las películas de X-Men.",
          de: "Ian McKellen brachte Würde und Komplexität in den Meister des Magnetismus Magneto, Professor Xs ehemaligen Freund, der zum Gegner wurde, in den X-Men-Filmen.",
          nl: "Ian McKellen bracht ernst en complexiteit naar de meester van het magnetisme Magneto, Professor X's voormalige vriend die tegenstander werd in de X-Men films."
        }
      },
      {
        question: {
          en: "Who played the young Hannibal Lecter in Hannibal Rising?",
          es: "¿Quién interpretó al joven Hannibal Lecter en Hannibal Rising?",
          de: "Wer spielte den jungen Hannibal Lecter in Hannibal Rising?",
          nl: "Wie speelde de jonge Hannibal Lecter in Hannibal Rising?"
        },
        options: [
          { en: "Gaspard Ulliel", es: "Gaspard Ulliel", de: "Gaspard Ulliel", nl: "Gaspard Ulliel" },
          { en: "Anthony Hopkins", es: "Anthony Hopkins", de: "Anthony Hopkins", nl: "Anthony Hopkins" },
          { en: "Mads Mikkelsen", es: "Mads Mikkelsen", de: "Mads Mikkelsen", nl: "Mads Mikkelsen" },
          { en: "Ralph Fiennes", es: "Ralph Fiennes", de: "Ralph Fiennes", nl: "Ralph Fiennes" }
        ],
        correct: 0,
        explanation: {
          en: "French actor Gaspard Ulliel portrayed the young Hannibal Lecter in Hannibal Rising (2007), exploring the character's origins before Anthony Hopkins' iconic portrayal.",
          es: "El actor francés Gaspard Ulliel interpretó al joven Hannibal Lecter en Hannibal Rising (2007), explorando los orígenes del personaje antes de la icónica interpretación de Anthony Hopkins.",
          de: "Der französische Schauspieler Gaspard Ulliel verkörperte den jungen Hannibal Lecter in Hannibal Rising (2007) und erkundete die Ursprünge der Figur vor Anthony Hopkins' ikonischer Darstellung.",
          nl: "Franse acteur Gaspard Ulliel speelde de jonge Hannibal Lecter in Hannibal Rising (2007), en verkende de oorsprong van het personage voor Anthony Hopkins' iconische vertolking."
        }
      },
      {
        question: {
          en: "Which actor played Jack Dawson in Titanic (1997)?",
          es: "¿Qué actor interpretó a Jack Dawson en Titanic (1997)?",
          de: "Welcher Schauspieler spielte Jack Dawson in Titanic (1997)?",
          nl: "Welke acteur speelde Jack Dawson in Titanic (1997)?"
        },
        options: [
          { en: "Leonardo DiCaprio", es: "Leonardo DiCaprio", de: "Leonardo DiCaprio", nl: "Leonardo DiCaprio" },
          { en: "Billy Zane", es: "Billy Zane", de: "Billy Zane", nl: "Billy Zane" },
          { en: "Kathy Bates", es: "Kathy Bates", de: "Kathy Bates", nl: "Kathy Bates" },
          { en: "Bill Paxton", es: "Bill Paxton", de: "Bill Paxton", nl: "Bill Paxton" }
        ],
        correct: 0,
        explanation: {
          en: "Leonardo DiCaprio played the charming artist Jack Dawson who falls in love with Rose aboard the doomed ship, launching him to global superstardom in James Cameron's Titanic.",
          es: "Leonardo DiCaprio interpretó al encantador artista Jack Dawson que se enamora de Rose a bordo del barco condenado, lanzándolo al estrellato global en Titanic de James Cameron.",
          de: "Leonardo DiCaprio spielte den charmanten Künstler Jack Dawson, der sich an Bord des zum Untergang verurteilten Schiffes in Rose verliebt, was ihn in James Camerons Titanic zum globalen Superstar machte.",
          nl: "Leonardo DiCaprio speelde de charmante kunstenaar Jack Dawson die verliefd wordt op Rose aan boord van het gedoemde schip, wat hem lanceerde naar wereldwijde supersterrendom in James Cameron's Titanic."
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