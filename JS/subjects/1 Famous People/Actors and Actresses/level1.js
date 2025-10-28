// Actors and Actresses Quiz - Level 1: Famous Movie Stars
(function() {
  const level1 = {
    name: {
      en: "Famous Actors and Actresses - Beginner",
      es: "Actores y Actrices Famosos - Principiante",
      de: "Berühmte Schauspieler und Schauspielerinnen - Anfänger",
      nl: "Beroemde Acteurs en Actrices - Beginner"
    },
    questions: [
      {
        question: {
          en: "Who played Spider-Man in the most recent Marvel movies?",
          es: "¿Quién interpretó a Spider-Man en las películas más recientes de Marvel?",
          de: "Wer spielte Spider-Man in den neuesten Marvel-Filmen?",
          nl: "Wie speelde Spider-Man in de meest recente Marvel films?"
        },
        options: [
          { en: "Tom Holland", es: "Tom Holland", de: "Tom Holland", nl: "Tom Holland" },
          { en: "Tobey Maguire", es: "Tobey Maguire", de: "Tobey Maguire", nl: "Tobey Maguire" },
          { en: "Andrew Garfield", es: "Andrew Garfield", de: "Andrew Garfield", nl: "Andrew Garfield" },
          { en: "Chris Evans", es: "Chris Evans", de: "Chris Evans", nl: "Chris Evans" }
        ],
        correct: 0,
        explanation: {
          en: "Tom Holland has been playing Spider-Man in the Marvel Cinematic Universe since 2016, appearing in multiple Avengers and solo Spider-Man films.",
          es: "Tom Holland ha interpretado a Spider-Man en el Universo Cinematográfico de Marvel desde 2016, apareciendo en múltiples películas de Avengers y Spider-Man en solitario.",
          de: "Tom Holland spielt seit 2016 Spider-Man im Marvel Cinematic Universe und ist in mehreren Avengers- und Solo-Spider-Man-Filmen aufgetreten.",
          nl: "Tom Holland speelt sinds 2016 Spider-Man in het Marvel Cinematic Universe en verscheen in meerdere Avengers en solo Spider-Man films."
        }
      },
      {
        question: {
          en: "Which actress stars as Black Widow in the Marvel movies?",
          es: "¿Qué actriz protagoniza como Viuda Negra en las películas de Marvel?",
          de: "Welche Schauspielerin spielt Black Widow in den Marvel-Filmen?",
          nl: "Welke actrice speelt Black Widow in de Marvel films?"
        },
        options: [
          { en: "Scarlett Johansson", es: "Scarlett Johansson", de: "Scarlett Johansson", nl: "Scarlett Johansson" },
          { en: "Jennifer Lawrence", es: "Jennifer Lawrence", de: "Jennifer Lawrence", nl: "Jennifer Lawrence" },
          { en: "Emma Stone", es: "Emma Stone", de: "Emma Stone", nl: "Emma Stone" },
          { en: "Margot Robbie", es: "Margot Robbie", de: "Margot Robbie", nl: "Margot Robbie" }
        ],
        correct: 0,
        explanation: {
          en: "Scarlett Johansson portrayed Natasha Romanoff/Black Widow across multiple Marvel films from 2010 to 2021, including her own solo movie.",
          es: "Scarlett Johansson interpretó a Natasha Romanoff/Viuda Negra en múltiples películas de Marvel de 2010 a 2021, incluyendo su propia película en solitario.",
          de: "Scarlett Johansson verkörperte Natasha Romanoff/Black Widow in mehreren Marvel-Filmen von 2010 bis 2021, einschließlich ihres eigenen Solo-Films.",
          nl: "Scarlett Johansson speelde Natasha Romanoff/Black Widow in meerdere Marvel films van 2010 tot 2021, inclusief haar eigen solo film."
        }
      },
      {
        question: {
          en: "Who played Thor in the Marvel Cinematic Universe?",
          es: "¿Quién interpretó a Thor en el Universo Cinematográfico de Marvel?",
          de: "Wer spielte Thor im Marvel Cinematic Universe?",
          nl: "Wie speelde Thor in het Marvel Cinematic Universe?"
        },
        options: [
          { en: "Chris Hemsworth", es: "Chris Hemsworth", de: "Chris Hemsworth", nl: "Chris Hemsworth" },
          { en: "Chris Evans", es: "Chris Evans", de: "Chris Evans", nl: "Chris Evans" },
          { en: "Chris Pratt", es: "Chris Pratt", de: "Chris Pratt", nl: "Chris Pratt" },
          { en: "Chris Pine", es: "Chris Pine", de: "Chris Pine", nl: "Chris Pine" }
        ],
        correct: 0,
        explanation: {
          en: "Chris Hemsworth has played the Norse god Thor since the first Thor movie in 2011, becoming one of the most recognizable Marvel heroes.",
          es: "Chris Hemsworth ha interpretado al dios nórdico Thor desde la primera película de Thor en 2011, convirtiéndose en uno de los héroes de Marvel más reconocibles.",
          de: "Chris Hemsworth spielt seit dem ersten Thor-Film 2011 den nordischen Gott Thor und ist zu einem der bekanntesten Marvel-Helden geworden.",
          nl: "Chris Hemsworth speelt de Noorse god Thor sinds de eerste Thor film in 2011, en werd een van de meest herkenbare Marvel helden."
        }
      },
      {
        question: {
          en: "Which actor played Captain America in the Marvel movies?",
          es: "¿Qué actor interpretó al Capitán América en las películas de Marvel?",
          de: "Welcher Schauspieler spielte Captain America in den Marvel-Filmen?",
          nl: "Welke acteur speelde Captain America in de Marvel films?"
        },
        options: [
          { en: "Chris Evans", es: "Chris Evans", de: "Chris Evans", nl: "Chris Evans" },
          { en: "Chris Hemsworth", es: "Chris Hemsworth", de: "Chris Hemsworth", nl: "Chris Hemsworth" },
          { en: "Robert Downey Jr.", es: "Robert Downey Jr.", de: "Robert Downey Jr.", nl: "Robert Downey Jr." },
          { en: "Mark Ruffalo", es: "Mark Ruffalo", de: "Mark Ruffalo", nl: "Mark Ruffalo" }
        ],
        correct: 0,
        explanation: {
          en: "Chris Evans portrayed Steve Rogers/Captain America from 2011 to 2019, wielding the iconic shield in multiple Marvel films.",
          es: "Chris Evans interpretó a Steve Rogers/Capitán América de 2011 a 2019, empuñando el icónico escudo en múltiples películas de Marvel.",
          de: "Chris Evans verkörperte Steve Rogers/Captain America von 2011 bis 2019 und führte den ikonischen Schild in mehreren Marvel-Filmen.",
          nl: "Chris Evans speelde Steve Rogers/Captain America van 2011 tot 2019, en hanteerde het iconische schild in meerdere Marvel films."
        }
      },
      {
        question: {
          en: "Who stars as Elsa in the Disney movie 'Frozen'?",
          es: "¿Quién da voz a Elsa en la película de Disney 'Frozen'?",
          de: "Wer spricht Elsa in Disneys 'Die Eiskönigin'?",
          nl: "Wie spreekt Elsa in de Disney film 'Frozen'?"
        },
        options: [
          { en: "Idina Menzel", es: "Idina Menzel", de: "Idina Menzel", nl: "Idina Menzel" },
          { en: "Kristen Bell", es: "Kristen Bell", de: "Kristen Bell", nl: "Kristen Bell" },
          { en: "Emma Watson", es: "Emma Watson", de: "Emma Watson", nl: "Emma Watson" },
          { en: "Anna Kendrick", es: "Anna Kendrick", de: "Anna Kendrick", nl: "Anna Kendrick" }
        ],
        correct: 0,
        explanation: {
          en: "Idina Menzel voices Queen Elsa in both Frozen movies and sings the famous song 'Let It Go', which became a global phenomenon.",
          es: "Idina Menzel da voz a la Reina Elsa en ambas películas de Frozen y canta la famosa canción 'Let It Go', que se convirtió en un fenómeno global.",
          de: "Idina Menzel spricht Königin Elsa in beiden Frozen-Filmen und singt das berühmte Lied 'Let It Go', das zu einem globalen Phänomen wurde.",
          nl: "Idina Menzel spreekt Koningin Elsa in beide Frozen films en zingt het beroemde lied 'Let It Go', dat een wereldwijd fenomeen werd."
        }
      },
      {
        question: {
          en: "Who played Hermione Granger in the Harry Potter films?",
          es: "¿Quién interpretó a Hermione Granger en las películas de Harry Potter?",
          de: "Wer spielte Hermione Granger in den Harry Potter Filmen?",
          nl: "Wie speelde Hermione Granger in de Harry Potter films?"
        },
        options: [
          { en: "Emma Watson", es: "Emma Watson", de: "Emma Watson", nl: "Emma Watson" },
          { en: "Emma Stone", es: "Emma Stone", de: "Emma Stone", nl: "Emma Stone" },
          { en: "Emma Roberts", es: "Emma Roberts", de: "Emma Roberts", nl: "Emma Roberts" },
          { en: "Emily Blunt", es: "Emily Blunt", de: "Emily Blunt", nl: "Emily Blunt" }
        ],
        correct: 0,
        explanation: {
          en: "Emma Watson played the brilliant witch Hermione Granger throughout all eight Harry Potter films, growing up on screen from age 11 to 21.",
          es: "Emma Watson interpretó a la brillante bruja Hermione Granger en las ocho películas de Harry Potter, creciendo en pantalla desde los 11 hasta los 21 años.",
          de: "Emma Watson spielte die brillante Hexe Hermione Granger in allen acht Harry Potter Filmen und wuchs vor der Kamera von 11 bis 21 Jahren auf.",
          nl: "Emma Watson speelde de briljante heks Hermione Granger in alle acht Harry Potter films, opgroeiend op het scherm van 11 tot 21 jaar."
        }
      },
      {
        question: {
          en: "Which actor is famous for playing Jack Sparrow?",
          es: "¿Qué actor es famoso por interpretar a Jack Sparrow?",
          de: "Welcher Schauspieler ist berühmt für die Rolle des Jack Sparrow?",
          nl: "Welke acteur is beroemd voor het spelen van Jack Sparrow?"
        },
        options: [
          { en: "Johnny Depp", es: "Johnny Depp", de: "Johnny Depp", nl: "Johnny Depp" },
          { en: "Orlando Bloom", es: "Orlando Bloom", de: "Orlando Bloom", nl: "Orlando Bloom" },
          { en: "Russell Crowe", es: "Russell Crowe", de: "Russell Crowe", nl: "Russell Crowe" },
          { en: "Kevin Costner", es: "Kevin Costner", de: "Kevin Costner", nl: "Kevin Costner" }
        ],
        correct: 0,
        explanation: {
          en: "Johnny Depp created the iconic swashbuckling character Captain Jack Sparrow in the Pirates of the Caribbean franchise, earning an Oscar nomination.",
          es: "Johnny Depp creó el icónico personaje aventurero Capitán Jack Sparrow en la franquicia Piratas del Caribe, obteniendo una nominación al Oscar.",
          de: "Johnny Depp erschuf die ikonische Abenteurer-Figur Captain Jack Sparrow in der Fluch der Karibik-Franchise und erhielt eine Oscar-Nominierung.",
          nl: "Johnny Depp creëerde het iconische avonturier personage Captain Jack Sparrow in de Pirates of the Caribbean franchise, en kreeg een Oscar nominatie."
        }
      },
      {
        question: {
          en: "Who played the main character in 'The Hunger Games' movies?",
          es: "¿Quién interpretó al personaje principal en las películas de 'Los Juegos del Hambre'?",
          de: "Wer spielte die Hauptfigur in den 'Die Tribute von Panem' Filmen?",
          nl: "Wie speelde het hoofdpersonage in 'The Hunger Games' films?"
        },
        options: [
          { en: "Jennifer Lawrence", es: "Jennifer Lawrence", de: "Jennifer Lawrence", nl: "Jennifer Lawrence" },
          { en: "Emma Stone", es: "Emma Stone", de: "Emma Stone", nl: "Emma Stone" },
          { en: "Kristen Stewart", es: "Kristen Stewart", de: "Kristen Stewart", nl: "Kristen Stewart" },
          { en: "Shailene Woodley", es: "Shailene Woodley", de: "Shailene Woodley", nl: "Shailene Woodley" }
        ],
        correct: 0,
        explanation: {
          en: "Jennifer Lawrence starred as Katniss Everdeen, the brave archer and symbol of rebellion in all four Hunger Games films from 2012 to 2015.",
          es: "Jennifer Lawrence protagonizó como Katniss Everdeen, la valiente arquera y símbolo de rebelión en las cuatro películas de Los Juegos del Hambre de 2012 a 2015.",
          de: "Jennifer Lawrence spielte Katniss Everdeen, die mutige Bogenschützin und Symbol des Widerstands in allen vier Tribute von Panem-Filmen von 2012 bis 2015.",
          nl: "Jennifer Lawrence speelde Katniss Everdeen, de moedige boogschutter en symbool van rebellie in alle vier Hunger Games films van 2012 tot 2015."
        }
      },
      {
        question: {
          en: "Which actress played Wonder Woman in recent DC movies?",
          es: "¿Qué actriz interpretó a Wonder Woman en las recientes películas de DC?",
          de: "Welche Schauspielerin spielte Wonder Woman in den neueren DC-Filmen?",
          nl: "Welke actrice speelde Wonder Woman in recente DC films?"
        },
        options: [
          { en: "Gal Gadot", es: "Gal Gadot", de: "Gal Gadot", nl: "Gal Gadot" },
          { en: "Margot Robbie", es: "Margot Robbie", de: "Margot Robbie", nl: "Margot Robbie" },
          { en: "Amy Adams", es: "Amy Adams", de: "Amy Adams", nl: "Amy Adams" },
          { en: "Brie Larson", es: "Brie Larson", de: "Brie Larson", nl: "Brie Larson" }
        ],
        correct: 0,
        explanation: {
          en: "Gal Gadot has portrayed Diana Prince/Wonder Woman since 2016, bringing the Amazonian princess to life in multiple DC Extended Universe films.",
          es: "Gal Gadot ha interpretado a Diana Prince/Wonder Woman desde 2016, dando vida a la princesa amazónica en múltiples películas del Universo Extendido de DC.",
          de: "Gal Gadot verkörpert seit 2016 Diana Prince/Wonder Woman und erweckt die amazonische Prinzessin in mehreren DC Extended Universe-Filmen zum Leben.",
          nl: "Gal Gadot speelt sinds 2016 Diana Prince/Wonder Woman, en brengt de Amazone prinses tot leven in meerdere DC Extended Universe films."
        }
      },
      {
        question: {
          en: "Who played Deadpool in the Marvel movies?",
          es: "¿Quién interpretó a Deadpool en las películas de Marvel?",
          de: "Wer spielte Deadpool in den Marvel-Filmen?",
          nl: "Wie speelde Deadpool in de Marvel films?"
        },
        options: [
          { en: "Ryan Reynolds", es: "Ryan Reynolds", de: "Ryan Reynolds", nl: "Ryan Reynolds" },
          { en: "Ryan Gosling", es: "Ryan Gosling", de: "Ryan Gosling", nl: "Ryan Gosling" },
          { en: "Jake Gyllenhaal", es: "Jake Gyllenhaal", de: "Jake Gyllenhaal", nl: "Jake Gyllenhaal" },
          { en: "Chris Pratt", es: "Chris Pratt", de: "Chris Pratt", nl: "Chris Pratt" }
        ],
        correct: 0,
        explanation: {
          en: "Ryan Reynolds brings the irreverent, fourth-wall-breaking mercenary Deadpool to life with his signature wit and humor in the popular R-rated films.",
          es: "Ryan Reynolds da vida al mercenario irreverente Deadpool que rompe la cuarta pared con su ingenio y humor característicos en las populares películas clasificación R.",
          de: "Ryan Reynolds erweckt den respektlosen, die vierte Wand durchbrechenden Söldner Deadpool mit seinem charakteristischen Witz und Humor in den beliebten R-bewerteten Filmen zum Leben.",
          nl: "Ryan Reynolds brengt de respectloze, vierde muur doorbrekkende huurling Deadpool tot leven met zijn kenmerkende humor in de populaire R-rated films."
        }
      },
      {
        question: {
          en: "Which actor plays the Hulk in the Marvel movies?",
          es: "¿Qué actor interpreta a Hulk en las películas de Marvel?",
          de: "Welcher Schauspieler spielt Hulk in den Marvel-Filmen?",
          nl: "Welke acteur speelt Hulk in de Marvel films?"
        },
        options: [
          { en: "Mark Ruffalo", es: "Mark Ruffalo", de: "Mark Ruffalo", nl: "Mark Ruffalo" },
          { en: "Edward Norton", es: "Edward Norton", de: "Edward Norton", nl: "Edward Norton" },
          { en: "Eric Bana", es: "Eric Bana", de: "Eric Bana", nl: "Eric Bana" },
          { en: "Josh Brolin", es: "Josh Brolin", de: "Josh Brolin", nl: "Josh Brolin" }
        ],
        correct: 0,
        explanation: {
          en: "Mark Ruffalo has portrayed Bruce Banner/Hulk in the Marvel Cinematic Universe since 2012, bringing both the scientist and the green giant to life.",
          es: "Mark Ruffalo ha interpretado a Bruce Banner/Hulk en el Universo Cinematográfico de Marvel desde 2012, dando vida tanto al científico como al gigante verde.",
          de: "Mark Ruffalo verkörpert seit 2012 Bruce Banner/Hulk im Marvel Cinematic Universe und erweckt sowohl den Wissenschaftler als auch den grünen Riesen zum Leben.",
          nl: "Mark Ruffalo speelt sinds 2012 Bruce Banner/Hulk in het Marvel Cinematic Universe, en brengt zowel de wetenschapper als de groene reus tot leven."
        }
      },
      {
        question: {
          en: "Who starred as Bella Swan in the Twilight movies?",
          es: "¿Quién protagonizó como Bella Swan en las películas de Twilight?",
          de: "Wer spielte Bella Swan in den Twilight-Filmen?",
          nl: "Wie speelde Bella Swan in de Twilight films?"
        },
        options: [
          { en: "Kristen Stewart", es: "Kristen Stewart", de: "Kristen Stewart", nl: "Kristen Stewart" },
          { en: "Anna Kendrick", es: "Anna Kendrick", de: "Anna Kendrick", nl: "Anna Kendrick" },
          { en: "Emma Stone", es: "Emma Stone", de: "Emma Stone", nl: "Emma Stone" },
          { en: "Dakota Fanning", es: "Dakota Fanning", de: "Dakota Fanning", nl: "Dakota Fanning" }
        ],
        correct: 0,
        explanation: {
          en: "Kristen Stewart played Bella Swan, the human girl caught between vampires and werewolves, throughout all five Twilight saga films from 2008 to 2012.",
          es: "Kristen Stewart interpretó a Bella Swan, la chica humana atrapada entre vampiros y hombres lobo, en las cinco películas de la saga Twilight de 2008 a 2012.",
          de: "Kristen Stewart spielte Bella Swan, das menschliche Mädchen zwischen Vampiren und Werwölfen gefangen, in allen fünf Twilight-Saga-Filmen von 2008 bis 2012.",
          nl: "Kristen Stewart speelde Bella Swan, het menselijke meisje gevangen tussen vampiers en weerwolven, in alle vijf Twilight saga films van 2008 tot 2012."
        }
      },
      {
        question: {
          en: "Which actor played Edward Cullen in Twilight?",
          es: "¿Qué actor interpretó a Edward Cullen en Twilight?",
          de: "Welcher Schauspieler spielte Edward Cullen in Twilight?",
          nl: "Welke acteur speelde Edward Cullen in Twilight?"
        },
        options: [
          { en: "Robert Pattinson", es: "Robert Pattinson", de: "Robert Pattinson", nl: "Robert Pattinson" },
          { en: "Taylor Lautner", es: "Taylor Lautner", de: "Taylor Lautner", nl: "Taylor Lautner" },
          { en: "Zac Efron", es: "Zac Efron", de: "Zac Efron", nl: "Zac Efron" },
          { en: "Channing Tatum", es: "Channing Tatum", de: "Channing Tatum", nl: "Channing Tatum" }
        ],
        correct: 0,
        explanation: {
          en: "Robert Pattinson portrayed the vampire Edward Cullen in all Twilight films, launching him to international fame and later starring as Batman.",
          es: "Robert Pattinson interpretó al vampiro Edward Cullen en todas las películas de Twilight, lanzándolo a la fama internacional y luego protagonizando como Batman.",
          de: "Robert Pattinson verkörperte den Vampir Edward Cullen in allen Twilight-Filmen, was ihn zu internationalem Ruhm verhalf und später als Batman auftrat.",
          nl: "Robert Pattinson speelde de vampier Edward Cullen in alle Twilight films, wat hem internationale roem bezorgde en later als Batman speelde."
        }
      },
      {
        question: {
          en: "Who plays Woody in the Toy Story movies?",
          es: "¿Quién da voz a Woody en las películas de Toy Story?",
          de: "Wer spricht Woody in den Toy Story-Filmen?",
          nl: "Wie spreekt Woody in de Toy Story films?"
        },
        options: [
          { en: "Tom Hanks", es: "Tom Hanks", de: "Tom Hanks", nl: "Tom Hanks" },
          { en: "Tim Allen", es: "Tim Allen", de: "Tim Allen", nl: "Tim Allen" },
          { en: "Robin Williams", es: "Robin Williams", de: "Robin Williams", nl: "Robin Williams" },
          { en: "John Goodman", es: "John Goodman", de: "John Goodman", nl: "John Goodman" }
        ],
        correct: 0,
        explanation: {
          en: "Tom Hanks has voiced the cowboy toy Woody in all four Toy Story movies since 1995, bringing warmth and leadership to the beloved character.",
          es: "Tom Hanks ha dado voz al juguete vaquero Woody en las cuatro películas de Toy Story desde 1995, aportando calidez y liderazgo al querido personaje.",
          de: "Tom Hanks spricht seit 1995 das Cowboy-Spielzeug Woody in allen vier Toy Story-Filmen und verleiht der beliebten Figur Wärme und Führung.",
          nl: "Tom Hanks spreekt sinds 1995 het cowboy speelgoed Woody in alle vier Toy Story films, en brengt warmte en leiderschap naar het geliefde personage."
        }
      },
      {
        question: {
          en: "Which actress stars as Mia in 'La La Land'?",
          es: "¿Qué actriz protagoniza como Mia en 'La La Land'?",
          de: "Welche Schauspielerin spielt Mia in 'La La Land'?",
          nl: "Welke actrice speelt Mia in 'La La Land'?"
        },
        options: [
          { en: "Emma Stone", es: "Emma Stone", de: "Emma Stone", nl: "Emma Stone" },
          { en: "Emma Watson", es: "Emma Watson", de: "Emma Watson", nl: "Emma Watson" },
          { en: "Anne Hathaway", es: "Anne Hathaway", de: "Anne Hathaway", nl: "Anne Hathaway" },
          { en: "Jennifer Lawrence", es: "Jennifer Lawrence", de: "Jennifer Lawrence", nl: "Jennifer Lawrence" }
        ],
        correct: 0,
        explanation: {
          en: "Emma Stone won the Academy Award for Best Actress for her role as aspiring actress Mia in the musical romantic drama La La Land (2016).",
          es: "Emma Stone ganó el Premio de la Academia a la Mejor Actriz por su papel como la aspirante a actriz Mia en el drama romántico musical La La Land (2016).",
          de: "Emma Stone gewann den Academy Award für die beste Schauspielerin für ihre Rolle als angehende Schauspielerin Mia in dem romantischen Musical-Drama La La Land (2016).",
          nl: "Emma Stone won de Academy Award voor Beste Actrice voor haar rol als aspirant-actrice Mia in het romantische musical drama La La Land (2016)."
        }
      },
      {
        question: {
          en: "Who played the character of Ant-Man in Marvel movies?",
          es: "¿Quién interpretó al personaje de Ant-Man en las películas de Marvel?",
          de: "Wer spielte die Figur Ant-Man in den Marvel-Filmen?",
          nl: "Wie speelde het personage Ant-Man in Marvel films?"
        },
        options: [
          { en: "Paul Rudd", es: "Paul Rudd", de: "Paul Rudd", nl: "Paul Rudd" },
          { en: "Michael Douglas", es: "Michael Douglas", de: "Michael Douglas", nl: "Michael Douglas" },
          { en: "Jeremy Renner", es: "Jeremy Renner", de: "Jeremy Renner", nl: "Jeremy Renner" },
          { en: "Anthony Mackie", es: "Anthony Mackie", de: "Anthony Mackie", nl: "Anthony Mackie" }
        ],
        correct: 0,
        explanation: {
          en: "Paul Rudd plays Scott Lang/Ant-Man, the size-changing superhero who can shrink down to ant size while retaining his strength.",
          es: "Paul Rudd interpreta a Scott Lang/Ant-Man, el superhéroe que puede cambiar de tamaño y reducirse al tamaño de una hormiga mientras mantiene su fuerza.",
          de: "Paul Rudd spielt Scott Lang/Ant-Man, den größenverändernden Superhelden, der auf Ameisengröße schrumpfen kann, während er seine Stärke behält.",
          nl: "Paul Rudd speelt Scott Lang/Ant-Man, de grootte-veranderende superheld die kan krimpen tot mierengrootte terwijl hij zijn kracht behoudt."
        }
      },
      {
        question: {
          en: "Which actor plays Doctor Strange in Marvel movies?",
          es: "¿Qué actor interpreta al Doctor Strange en las películas de Marvel?",
          de: "Welcher Schauspieler spielt Doctor Strange in den Marvel-Filmen?",
          nl: "Welke acteur speelt Doctor Strange in Marvel films?"
        },
        options: [
          { en: "Benedict Cumberbatch", es: "Benedict Cumberbatch", de: "Benedict Cumberbatch", nl: "Benedict Cumberbatch" },
          { en: "Tom Hiddleston", es: "Tom Hiddleston", de: "Tom Hiddleston", nl: "Tom Hiddleston" },
          { en: "Benedict Wong", es: "Benedict Wong", de: "Benedict Wong", nl: "Benedict Wong" },
          { en: "Tilda Swinton", es: "Tilda Swinton", de: "Tilda Swinton", nl: "Tilda Swinton" }
        ],
        correct: 0,
        explanation: {
          en: "Benedict Cumberbatch portrays the mystical surgeon-turned-sorcerer Stephen Strange, Master of the Mystic Arts in the Marvel Cinematic Universe.",
          es: "Benedict Cumberbatch interpreta al místico cirujano convertido en hechicero Stephen Strange, Maestro de las Artes Místicas en el Universo Cinematográfico de Marvel.",
          de: "Benedict Cumberbatch verkörpert den mystischen Chirurgen-zum-Zauberer Stephen Strange, Meister der mystischen Künste im Marvel Cinematic Universe.",
          nl: "Benedict Cumberbatch speelt de mystieke chirurg-tovenaar Stephen Strange, Meester van de Mystieke Kunsten in het Marvel Cinematic Universe."
        }
      },
      {
        question: {
          en: "Who played the character of Black Panther?",
          es: "¿Quién interpretó al personaje de Black Panther?",
          de: "Wer spielte die Figur des Black Panther?",
          nl: "Wie speelde het personage Black Panther?"
        },
        options: [
          { en: "Chadwick Boseman", es: "Chadwick Boseman", de: "Chadwick Boseman", nl: "Chadwick Boseman" },
          { en: "Michael B. Jordan", es: "Michael B. Jordan", de: "Michael B. Jordan", nl: "Michael B. Jordan" },
          { en: "Winston Duke", es: "Winston Duke", de: "Winston Duke", nl: "Winston Duke" },
          { en: "Daniel Kaluuya", es: "Daniel Kaluuya", de: "Daniel Kaluuya", nl: "Daniel Kaluuya" }
        ],
        correct: 0,
        explanation: {
          en: "Chadwick Boseman portrayed T'Challa/Black Panther with dignity and strength until his passing in 2020, making the character a cultural icon.",
          es: "Chadwick Boseman interpretó a T'Challa/Black Panther con dignidad y fuerza hasta su fallecimiento en 2020, convirtiendo al personaje en un ícono cultural.",
          de: "Chadwick Boseman verkörperte T'Challa/Black Panther mit Würde und Stärke bis zu seinem Tod 2020 und machte die Figur zu einer kulturellen Ikone.",
          nl: "Chadwick Boseman speelde T'Challa/Black Panther met waardigheid en kracht tot zijn overlijden in 2020, waarmee hij het personage tot een cultureel icoon maakte."
        }
      },
      {
        question: {
          en: "Which actress played Rey in the recent Star Wars movies?",
          es: "¿Qué actriz interpretó a Rey en las recientes películas de Star Wars?",
          de: "Welche Schauspielerin spielte Rey in den neueren Star Wars-Filmen?",
          nl: "Welke actrice speelde Rey in de recente Star Wars films?"
        },
        options: [
          { en: "Daisy Ridley", es: "Daisy Ridley", de: "Daisy Ridley", nl: "Daisy Ridley" },
          { en: "Felicity Jones", es: "Felicity Jones", de: "Felicity Jones", nl: "Felicity Jones" },
          { en: "Emilia Clarke", es: "Emilia Clarke", de: "Emilia Clarke", nl: "Emilia Clarke" },
          { en: "Keira Knightley", es: "Keira Knightley", de: "Keira Knightley", nl: "Keira Knightley" }
        ],
        correct: 0,
        explanation: {
          en: "Daisy Ridley played Rey, the desert scavenger who becomes a powerful Jedi, in the Star Wars sequel trilogy from 2015 to 2019.",
          es: "Daisy Ridley interpretó a Rey, la carroñera del desierto que se convierte en una poderosa Jedi, en la trilogía secuela de Star Wars de 2015 a 2019.",
          de: "Daisy Ridley spielte Rey, die Wüsten-Schrottsammlerin, die zu einer mächtigen Jedi wird, in der Star Wars-Sequel-Trilogie von 2015 bis 2019.",
          nl: "Daisy Ridley speelde Rey, de woestijn-schavenger die een machtige Jedi wordt, in de Star Wars sequel trilogie van 2015 tot 2019."
        }
      },
      {
        question: {
          en: "Who plays Captain Marvel in the Marvel movies?",
          es: "¿Quién interpreta a Captain Marvel en las películas de Marvel?",
          de: "Wer spielt Captain Marvel in den Marvel-Filmen?",
          nl: "Wie speelt Captain Marvel in de Marvel films?"
        },
        options: [
          { en: "Brie Larson", es: "Brie Larson", de: "Brie Larson", nl: "Brie Larson" },
          { en: "Gal Gadot", es: "Gal Gadot", de: "Gal Gadot", nl: "Gal Gadot" },
          { en: "Margot Robbie", es: "Margot Robbie", de: "Margot Robbie", nl: "Margot Robbie" },
          { en: "Scarlett Johansson", es: "Scarlett Johansson", de: "Scarlett Johansson", nl: "Scarlett Johansson" }
        ],
        correct: 0,
        explanation: {
          en: "Brie Larson plays Carol Danvers/Captain Marvel, one of the most powerful heroes in the Marvel Cinematic Universe with cosmic-level abilities.",
          es: "Brie Larson interpreta a Carol Danvers/Captain Marvel, una de las heroínas más poderosas del Universo Cinematográfico de Marvel con habilidades de nivel cósmico.",
          de: "Brie Larson spielt Carol Danvers/Captain Marvel, eine der mächtigsten Heldinnen im Marvel Cinematic Universe mit kosmischen Fähigkeiten.",
          nl: "Brie Larson speelt Carol Danvers/Captain Marvel, een van de krachtigste helden in het Marvel Cinematic Universe met kosmische krachten."
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