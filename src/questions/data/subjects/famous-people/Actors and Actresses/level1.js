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
      },
      {
        question: {
          en: "Who played Iron Man in the Marvel movies?",
          es: "¿Quién interpretó a Iron Man en las películas de Marvel?",
          de: "Wer spielte Iron Man in den Marvel-Filmen?",
          nl: "Wie speelde Iron Man in de Marvel films?"
        },
        options: [
          { en: "Robert Downey Jr.", es: "Robert Downey Jr.", de: "Robert Downey Jr.", nl: "Robert Downey Jr." },
          { en: "Chris Evans", es: "Chris Evans", de: "Chris Evans", nl: "Chris Evans" },
          { en: "Mark Ruffalo", es: "Mark Ruffalo", de: "Mark Ruffalo", nl: "Mark Ruffalo" },
          { en: "Chris Hemsworth", es: "Chris Hemsworth", de: "Chris Hemsworth", nl: "Chris Hemsworth" }
        ],
        correct: 0,
        explanation: {
          en: "Robert Downey Jr. played Tony Stark/Iron Man from 2008 to 2019, launching the Marvel Cinematic Universe and becoming one of cinema's most iconic superheroes.",
          es: "Robert Downey Jr. interpretó a Tony Stark/Iron Man de 2008 a 2019, lanzando el Universo Cinematográfico de Marvel y convirtiéndose en uno de los superhéroes más icónicos del cine.",
          de: "Robert Downey Jr. spielte Tony Stark/Iron Man von 2008 bis 2019, startete das Marvel Cinematic Universe und wurde zu einem der ikonischsten Superhelden des Kinos.",
          nl: "Robert Downey Jr. speelde Tony Stark/Iron Man van 2008 tot 2019, lanceerde het Marvel Cinematic Universe en werd een van de meest iconische superhelden van de cinema."
        }
      },
      {
        question: {
          en: "Which actor voices Buzz Lightyear in Toy Story?",
          es: "¿Qué actor da voz a Buzz Lightyear en Toy Story?",
          de: "Welcher Schauspieler spricht Buzz Lightyear in Toy Story?",
          nl: "Welke acteur spreekt Buzz Lightyear in Toy Story?"
        },
        options: [
          { en: "Tim Allen", es: "Tim Allen", de: "Tim Allen", nl: "Tim Allen" },
          { en: "Tom Hanks", es: "Tom Hanks", de: "Tom Hanks", nl: "Tom Hanks" },
          { en: "John Goodman", es: "John Goodman", de: "John Goodman", nl: "John Goodman" },
          { en: "Billy Crystal", es: "Billy Crystal", de: "Billy Crystal", nl: "Billy Crystal" }
        ],
        correct: 0,
        explanation: {
          en: "Tim Allen voices the space ranger Buzz Lightyear in all Toy Story films, bringing enthusiasm and humor to the character's catchphrase 'To infinity and beyond!'",
          es: "Tim Allen da voz al guardián espacial Buzz Lightyear en todas las películas de Toy Story, aportando entusiasmo y humor a la frase característica del personaje '¡Hasta el infinito y más allá!'",
          de: "Tim Allen spricht den Space Ranger Buzz Lightyear in allen Toy Story-Filmen und bringt Enthusiasmus und Humor in die charakteristische Phrase 'Bis zur Unendlichkeit und noch viel weiter!'",
          nl: "Tim Allen spreekt de ruimte ranger Buzz Lightyear in alle Toy Story films, en brengt enthousiasme en humor naar de catchphrase van het personage 'To infinity and beyond!'"
        }
      },
      {
        question: {
          en: "Who played Harry Potter in all the Harry Potter films?",
          es: "¿Quién interpretó a Harry Potter en todas las películas de Harry Potter?",
          de: "Wer spielte Harry Potter in allen Harry Potter Filmen?",
          nl: "Wie speelde Harry Potter in alle Harry Potter films?"
        },
        options: [
          { en: "Daniel Radcliffe", es: "Daniel Radcliffe", de: "Daniel Radcliffe", nl: "Daniel Radcliffe" },
          { en: "Rupert Grint", es: "Rupert Grint", de: "Rupert Grint", nl: "Rupert Grint" },
          { en: "Tom Felton", es: "Tom Felton", de: "Tom Felton", nl: "Tom Felton" },
          { en: "Matthew Lewis", es: "Matthew Lewis", de: "Matthew Lewis", nl: "Matthew Lewis" }
        ],
        correct: 0,
        explanation: {
          en: "Daniel Radcliffe played the title character Harry Potter in all eight films, growing up on screen as the young wizard from age 11 to 21.",
          es: "Daniel Radcliffe interpretó al personaje titular Harry Potter en las ocho películas, creciendo en pantalla como el joven mago desde los 11 hasta los 21 años.",
          de: "Daniel Radcliffe spielte die Titelfigur Harry Potter in allen acht Filmen und wuchs vor der Kamera als junger Zauberer von 11 bis 21 Jahren auf.",
          nl: "Daniel Radcliffe speelde het titelpersonage Harry Potter in alle acht films, opgroeiend op het scherm als de jonge tovenaar van 11 tot 21 jaar."
        }
      },
      {
        question: {
          en: "Which actress played Princess Leia in the original Star Wars trilogy?",
          es: "¿Qué actriz interpretó a la Princesa Leia en la trilogía original de Star Wars?",
          de: "Welche Schauspielerin spielte Prinzessin Leia in der ursprünglichen Star Wars-Trilogie?",
          nl: "Welke actrice speelde Prinses Leia in de originele Star Wars trilogie?"
        },
        options: [
          { en: "Carrie Fisher", es: "Carrie Fisher", de: "Carrie Fisher", nl: "Carrie Fisher" },
          { en: "Natalie Portman", es: "Natalie Portman", de: "Natalie Portman", nl: "Natalie Portman" },
          { en: "Daisy Ridley", es: "Daisy Ridley", de: "Daisy Ridley", nl: "Daisy Ridley" },
          { en: "Felicity Jones", es: "Felicity Jones", de: "Felicity Jones", nl: "Felicity Jones" }
        ],
        correct: 0,
        explanation: {
          en: "Carrie Fisher portrayed Princess Leia Organa in the original Star Wars trilogy and returned for the sequel trilogy, becoming an iconic figure in science fiction cinema.",
          es: "Carrie Fisher interpretó a la Princesa Leia Organa en la trilogía original de Star Wars y regresó para la trilogía secuela, convirtiéndose en una figura icónica del cine de ciencia ficción.",
          de: "Carrie Fisher verkörperte Prinzessin Leia Organa in der ursprünglichen Star Wars-Trilogie und kehrte für die Sequel-Trilogie zurück, wodurch sie zu einer ikonischen Figur des Science-Fiction-Kinos wurde.",
          nl: "Carrie Fisher speelde Prinses Leia Organa in de originele Star Wars trilogie en keerde terug voor de sequel trilogie, en werd een iconisch figuur in de science fiction cinema."
        }
      },
      {
        question: {
          en: "Who played Superman in the recent DC movies?",
          es: "¿Quién interpretó a Superman en las recientes películas de DC?",
          de: "Wer spielte Superman in den neueren DC-Filmen?",
          nl: "Wie speelde Superman in de recente DC films?"
        },
        options: [
          { en: "Henry Cavill", es: "Henry Cavill", de: "Henry Cavill", nl: "Henry Cavill" },
          { en: "Brandon Routh", es: "Brandon Routh", de: "Brandon Routh", nl: "Brandon Routh" },
          { en: "Christopher Reeve", es: "Christopher Reeve", de: "Christopher Reeve", nl: "Christopher Reeve" },
          { en: "Tom Welling", es: "Tom Welling", de: "Tom Welling", nl: "Tom Welling" }
        ],
        correct: 0,
        explanation: {
          en: "Henry Cavill portrayed Superman/Clark Kent in the DC Extended Universe films starting with Man of Steel (2013), bringing a modern take to the iconic hero.",
          es: "Henry Cavill interpretó a Superman/Clark Kent en las películas del Universo Extendido de DC comenzando con El Hombre de Acero (2013), aportando una versión moderna al héroe icónico.",
          de: "Henry Cavill verkörperte Superman/Clark Kent in den DC Extended Universe-Filmen, beginnend mit Man of Steel (2013), und brachte eine moderne Interpretation des ikonischen Helden.",
          nl: "Henry Cavill speelde Superman/Clark Kent in de DC Extended Universe films beginnend met Man of Steel (2013), en bracht een moderne kijk op de iconische held."
        }
      },
      {
        question: {
          en: "Which actor played Batman in The Dark Knight trilogy?",
          es: "¿Qué actor interpretó a Batman en la trilogía The Dark Knight?",
          de: "Welcher Schauspieler spielte Batman in der Dark Knight-Trilogie?",
          nl: "Welke acteur speelde Batman in The Dark Knight trilogie?"
        },
        options: [
          { en: "Christian Bale", es: "Christian Bale", de: "Christian Bale", nl: "Christian Bale" },
          { en: "Ben Affleck", es: "Ben Affleck", de: "Ben Affleck", nl: "Ben Affleck" },
          { en: "Robert Pattinson", es: "Robert Pattinson", de: "Robert Pattinson", nl: "Robert Pattinson" },
          { en: "Michael Keaton", es: "Michael Keaton", de: "Michael Keaton", nl: "Michael Keaton" }
        ],
        correct: 0,
        explanation: {
          en: "Christian Bale played Batman/Bruce Wayne in Christopher Nolan's Dark Knight trilogy from 2005 to 2012, earning critical acclaim for his intense portrayal.",
          es: "Christian Bale interpretó a Batman/Bruce Wayne en la trilogía Dark Knight de Christopher Nolan de 2005 a 2012, obteniendo aclamación crítica por su intensa interpretación.",
          de: "Christian Bale spielte Batman/Bruce Wayne in Christopher Nolans Dark Knight-Trilogie von 2005 bis 2012 und erhielt kritisches Lob für seine intensive Darstellung.",
          nl: "Christian Bale speelde Batman/Bruce Wayne in Christopher Nolan's Dark Knight trilogie van 2005 tot 2012, en kreeg kritische bijval voor zijn intense vertolking."
        }
      },
      {
        question: {
          en: "Who voices Anna in the Disney movie Frozen?",
          es: "¿Quién da voz a Anna en la película de Disney Frozen?",
          de: "Wer spricht Anna in Disneys Die Eiskönigin?",
          nl: "Wie spreekt Anna in de Disney film Frozen?"
        },
        options: [
          { en: "Kristen Bell", es: "Kristen Bell", de: "Kristen Bell", nl: "Kristen Bell" },
          { en: "Idina Menzel", es: "Idina Menzel", de: "Idina Menzel", nl: "Idina Menzel" },
          { en: "Mandy Moore", es: "Mandy Moore", de: "Mandy Moore", nl: "Mandy Moore" },
          { en: "Emma Watson", es: "Emma Watson", de: "Emma Watson", nl: "Emma Watson" }
        ],
        correct: 0,
        explanation: {
          en: "Kristen Bell voices Princess Anna, Elsa's optimistic and adventurous sister, in both Frozen movies, bringing warmth and humor to the character.",
          es: "Kristen Bell da voz a la Princesa Anna, la hermana optimista y aventurera de Elsa, en ambas películas de Frozen, aportando calidez y humor al personaje.",
          de: "Kristen Bell spricht Prinzessin Anna, Elsas optimistische und abenteuerlustige Schwester, in beiden Frozen-Filmen und bringt Wärme und Humor in die Figur.",
          nl: "Kristen Bell spreekt Prinses Anna, Elsa's optimistische en avontuurlijke zus, in beide Frozen films, en brengt warmte en humor naar het personage."
        }
      },
      {
        question: {
          en: "Which actor played Aquaman in the DC movies?",
          es: "¿Qué actor interpretó a Aquaman en las películas de DC?",
          de: "Welcher Schauspieler spielte Aquaman in den DC-Filmen?",
          nl: "Welke acteur speelde Aquaman in de DC films?"
        },
        options: [
          { en: "Jason Momoa", es: "Jason Momoa", de: "Jason Momoa", nl: "Jason Momoa" },
          { en: "Chris Pratt", es: "Chris Pratt", de: "Chris Pratt", nl: "Chris Pratt" },
          { en: "Dwayne Johnson", es: "Dwayne Johnson", de: "Dwayne Johnson", nl: "Dwayne Johnson" },
          { en: "Vin Diesel", es: "Vin Diesel", de: "Vin Diesel", nl: "Vin Diesel" }
        ],
        correct: 0,
        explanation: {
          en: "Jason Momoa portrayed Arthur Curry/Aquaman in the DC Extended Universe, bringing a powerful and charismatic take to the underwater superhero.",
          es: "Jason Momoa interpretó a Arthur Curry/Aquaman en el Universo Extendido de DC, aportando una versión poderosa y carismática al superhéroe submarino.",
          de: "Jason Momoa verkörperte Arthur Curry/Aquaman im DC Extended Universe und brachte eine kraftvolle und charismatische Interpretation des Unterwasser-Superhelden.",
          nl: "Jason Momoa speelde Arthur Curry/Aquaman in het DC Extended Universe, en bracht een krachtige en charismatische kijk op de onderwaterheld."
        }
      },
      {
        question: {
          en: "Who played Shuri in Black Panther?",
          es: "¿Quién interpretó a Shuri en Black Panther?",
          de: "Wer spielte Shuri in Black Panther?",
          nl: "Wie speelde Shuri in Black Panther?"
        },
        options: [
          { en: "Letitia Wright", es: "Letitia Wright", de: "Letitia Wright", nl: "Letitia Wright" },
          { en: "Lupita Nyong'o", es: "Lupita Nyong'o", de: "Lupita Nyong'o", nl: "Lupita Nyong'o" },
          { en: "Danai Gurira", es: "Danai Gurira", de: "Danai Gurira", nl: "Danai Gurira" },
          { en: "Angela Bassett", es: "Angela Bassett", de: "Angela Bassett", nl: "Angela Bassett" }
        ],
        correct: 0,
        explanation: {
          en: "Letitia Wright played Shuri, T'Challa's brilliant tech-genius sister, in the Black Panther films, bringing intelligence and humor to the Wakandan princess.",
          es: "Letitia Wright interpretó a Shuri, la brillante hermana genio tecnológico de T'Challa, en las películas de Black Panther, aportando inteligencia y humor a la princesa de Wakanda.",
          de: "Letitia Wright spielte Shuri, T'Challas brillante Tech-Genie-Schwester, in den Black Panther-Filmen und brachte Intelligenz und Humor in die wakandische Prinzessin.",
          nl: "Letitia Wright speelde Shuri, T'Challa's briljante tech-genie zus, in de Black Panther films, en bracht intelligentie en humor naar de Wakandaanse prinses."
        }
      },
      {
        question: {
          en: "Which actor played Star-Lord in Guardians of the Galaxy?",
          es: "¿Qué actor interpretó a Star-Lord en Guardianes de la Galaxia?",
          de: "Welcher Schauspieler spielte Star-Lord in Guardians of the Galaxy?",
          nl: "Welke acteur speelde Star-Lord in Guardians of the Galaxy?"
        },
        options: [
          { en: "Chris Pratt", es: "Chris Pratt", de: "Chris Pratt", nl: "Chris Pratt" },
          { en: "Chris Evans", es: "Chris Evans", de: "Chris Evans", nl: "Chris Evans" },
          { en: "Chris Pine", es: "Chris Pine", de: "Chris Pine", nl: "Chris Pine" },
          { en: "Ryan Reynolds", es: "Ryan Reynolds", de: "Ryan Reynolds", nl: "Ryan Reynolds" }
        ],
        correct: 0,
        explanation: {
          en: "Chris Pratt plays Peter Quill/Star-Lord, the witty and music-loving leader of the Guardians of the Galaxy in the Marvel Cinematic Universe.",
          es: "Chris Pratt interpreta a Peter Quill/Star-Lord, el ingenioso líder amante de la música de los Guardianes de la Galaxia en el Universo Cinematográfico de Marvel.",
          de: "Chris Pratt spielt Peter Quill/Star-Lord, den witzigen und musikliebenden Anführer der Guardians of the Galaxy im Marvel Cinematic Universe.",
          nl: "Chris Pratt speelt Peter Quill/Star-Lord, de geestige en muziekliefhebbende leider van de Guardians of the Galaxy in het Marvel Cinematic Universe."
        }
      },
      {
        question: {
          en: "Who played Ron Weasley in the Harry Potter films?",
          es: "¿Quién interpretó a Ron Weasley en las películas de Harry Potter?",
          de: "Wer spielte Ron Weasley in den Harry Potter Filmen?",
          nl: "Wie speelde Ron Weasley in de Harry Potter films?"
        },
        options: [
          { en: "Rupert Grint", es: "Rupert Grint", de: "Rupert Grint", nl: "Rupert Grint" },
          { en: "Daniel Radcliffe", es: "Daniel Radcliffe", de: "Daniel Radcliffe", nl: "Daniel Radcliffe" },
          { en: "Tom Felton", es: "Tom Felton", de: "Tom Felton", nl: "Tom Felton" },
          { en: "James Phelps", es: "James Phelps", de: "James Phelps", nl: "James Phelps" }
        ],
        correct: 0,
        explanation: {
          en: "Rupert Grint played Ron Weasley, Harry's loyal best friend, throughout all eight Harry Potter films, bringing humor and heart to the character.",
          es: "Rupert Grint interpretó a Ron Weasley, el leal mejor amigo de Harry, en las ocho películas de Harry Potter, aportando humor y corazón al personaje.",
          de: "Rupert Grint spielte Ron Weasley, Harrys treuen besten Freund, in allen acht Harry Potter-Filmen und brachte Humor und Herz in die Figur.",
          nl: "Rupert Grint speelde Ron Weasley, Harry's trouwe beste vriend, in alle acht Harry Potter films, en bracht humor en hart naar het personage."
        }
      },
      {
        question: {
          en: "Which actress played Harley Quinn in Suicide Squad?",
          es: "¿Qué actriz interpretó a Harley Quinn en Suicide Squad?",
          de: "Welche Schauspielerin spielte Harley Quinn in Suicide Squad?",
          nl: "Welke actrice speelde Harley Quinn in Suicide Squad?"
        },
        options: [
          { en: "Margot Robbie", es: "Margot Robbie", de: "Margot Robbie", nl: "Margot Robbie" },
          { en: "Cara Delevingne", es: "Cara Delevingne", de: "Cara Delevingne", nl: "Cara Delevingne" },
          { en: "Emma Stone", es: "Emma Stone", de: "Emma Stone", nl: "Emma Stone" },
          { en: "Scarlett Johansson", es: "Scarlett Johansson", de: "Scarlett Johansson", nl: "Scarlett Johansson" }
        ],
        correct: 0,
        explanation: {
          en: "Margot Robbie brought the quirky and unpredictable Harley Quinn to life in Suicide Squad and subsequent DC films, making the character a fan favorite.",
          es: "Margot Robbie dio vida a la peculiar e impredecible Harley Quinn en Suicide Squad y películas posteriores de DC, convirtiendo al personaje en favorito de los fans.",
          de: "Margot Robbie erweckte die schrullige und unberechenbare Harley Quinn in Suicide Squad und nachfolgenden DC-Filmen zum Leben und machte die Figur zu einem Fan-Favoriten.",
          nl: "Margot Robbie bracht de eigenwijze en onvoorspelbare Harley Quinn tot leven in Suicide Squad en daaropvolgende DC films, waardoor het personage een fan favoriet werd."
        }
      },
      {
        question: {
          en: "Who played the Joker in The Dark Knight?",
          es: "¿Quién interpretó al Joker en The Dark Knight?",
          de: "Wer spielte den Joker in The Dark Knight?",
          nl: "Wie speelde de Joker in The Dark Knight?"
        },
        options: [
          { en: "Heath Ledger", es: "Heath Ledger", de: "Heath Ledger", nl: "Heath Ledger" },
          { en: "Jared Leto", es: "Jared Leto", de: "Jared Leto", nl: "Jared Leto" },
          { en: "Joaquin Phoenix", es: "Joaquin Phoenix", de: "Joaquin Phoenix", nl: "Joaquin Phoenix" },
          { en: "Jack Nicholson", es: "Jack Nicholson", de: "Jack Nicholson", nl: "Jack Nicholson" }
        ],
        correct: 0,
        explanation: {
          en: "Heath Ledger delivered an iconic performance as the Joker in The Dark Knight (2008), earning a posthumous Academy Award for Best Supporting Actor.",
          es: "Heath Ledger entregó una actuación icónica como el Joker en The Dark Knight (2008), obteniendo un Premio de la Academia póstumo al Mejor Actor de Reparto.",
          de: "Heath Ledger lieferte eine ikonische Leistung als Joker in The Dark Knight (2008) und erhielt posthum einen Academy Award für den besten Nebendarsteller.",
          nl: "Heath Ledger leverde een iconische prestatie als de Joker in The Dark Knight (2008), en kreeg postuum een Academy Award voor Beste Bijrolacteur."
        }
      },
      {
        question: {
          en: "Which actress played Moana in the Disney movie?",
          es: "¿Qué actriz dio voz a Moana en la película de Disney?",
          de: "Welche Schauspielerin sprach Moana im Disney-Film?",
          nl: "Welke actrice sprak Moana in de Disney film?"
        },
        options: [
          { en: "Auli'i Cravalho", es: "Auli'i Cravalho", de: "Auli'i Cravalho", nl: "Auli'i Cravalho" },
          { en: "Zendaya", es: "Zendaya", de: "Zendaya", nl: "Zendaya" },
          { en: "Halle Bailey", es: "Halle Bailey", de: "Halle Bailey", nl: "Halle Bailey" },
          { en: "Naomi Scott", es: "Naomi Scott", de: "Naomi Scott", nl: "Naomi Scott" }
        ],
        correct: 0,
        explanation: {
          en: "Auli'i Cravalho voiced the brave Polynesian princess Moana in the 2016 Disney film, making her film debut at just 16 years old.",
          es: "Auli'i Cravalho dio voz a la valiente princesa polinesia Moana en la película de Disney de 2016, haciendo su debut cinematográfico con solo 16 años.",
          de: "Auli'i Cravalho sprach die mutige polynesische Prinzessin Moana im Disney-Film von 2016 und gab ihr Filmdebüt im Alter von nur 16 Jahren.",
          nl: "Auli'i Cravalho sprak de moedige Polynesische prinses Moana in de 2016 Disney film, en maakte haar filmdebuut op slechts 16-jarige leeftijd."
        }
      },
      {
        question: {
          en: "Who played Hawkeye in the Marvel movies?",
          es: "¿Quién interpretó a Hawkeye en las películas de Marvel?",
          de: "Wer spielte Hawkeye in den Marvel-Filmen?",
          nl: "Wie speelde Hawkeye in de Marvel films?"
        },
        options: [
          { en: "Jeremy Renner", es: "Jeremy Renner", de: "Jeremy Renner", nl: "Jeremy Renner" },
          { en: "Paul Rudd", es: "Paul Rudd", de: "Paul Rudd", nl: "Paul Rudd" },
          { en: "Sebastian Stan", es: "Sebastian Stan", de: "Sebastian Stan", nl: "Sebastian Stan" },
          { en: "Anthony Mackie", es: "Anthony Mackie", de: "Anthony Mackie", nl: "Anthony Mackie" }
        ],
        correct: 0,
        explanation: {
          en: "Jeremy Renner plays Clint Barton/Hawkeye, the master archer and original Avenger who fights alongside Earth's mightiest heroes.",
          es: "Jeremy Renner interpreta a Clint Barton/Hawkeye, el maestro arquero y Vengador original que lucha junto a los héroes más poderosos de la Tierra.",
          de: "Jeremy Renner spielt Clint Barton/Hawkeye, den Meisterbogenschützen und ursprünglichen Avenger, der an der Seite der mächtigsten Helden der Erde kämpft.",
          nl: "Jeremy Renner speelt Clint Barton/Hawkeye, de meester boogschutter en originele Avenger die vecht naast de machtigste helden van de Aarde."
        }
      },
      {
        question: {
          en: "Which actor played the Flash in the DC movies?",
          es: "¿Qué actor interpretó a Flash en las películas de DC?",
          de: "Welcher Schauspieler spielte Flash in den DC-Filmen?",
          nl: "Welke acteur speelde Flash in de DC films?"
        },
        options: [
          { en: "Ezra Miller", es: "Ezra Miller", de: "Ezra Miller", nl: "Ezra Miller" },
          { en: "Grant Gustin", es: "Grant Gustin", de: "Grant Gustin", nl: "Grant Gustin" },
          { en: "Tom Holland", es: "Tom Holland", de: "Tom Holland", nl: "Tom Holland" },
          { en: "Timothée Chalamet", es: "Timothée Chalamet", de: "Timothée Chalamet", nl: "Timothée Chalamet" }
        ],
        correct: 0,
        explanation: {
          en: "Ezra Miller portrayed Barry Allen/The Flash in the DC Extended Universe films, bringing speed and humor to the fastest man alive.",
          es: "Ezra Miller interpretó a Barry Allen/The Flash en las películas del Universo Extendido de DC, aportando velocidad y humor al hombre más rápido del mundo.",
          de: "Ezra Miller verkörperte Barry Allen/The Flash in den DC Extended Universe-Filmen und brachte Geschwindigkeit und Humor zum schnellsten Mann der Welt.",
          nl: "Ezra Miller speelde Barry Allen/The Flash in de DC Extended Universe films, en bracht snelheid en humor naar de snelste man ter wereld."
        }
      },
      {
        question: {
          en: "Who voiced Simba in the 2019 Lion King remake?",
          es: "¿Quién dio voz a Simba en el remake de El Rey León de 2019?",
          de: "Wer sprach Simba im 2019 König der Löwen Remake?",
          nl: "Wie sprak Simba in de 2019 Lion King remake?"
        },
        options: [
          { en: "Donald Glover", es: "Donald Glover", de: "Donald Glover", nl: "Donald Glover" },
          { en: "Chiwetel Ejiofor", es: "Chiwetel Ejiofor", de: "Chiwetel Ejiofor", nl: "Chiwetel Ejiofor" },
          { en: "Seth Rogen", es: "Seth Rogen", de: "Seth Rogen", nl: "Seth Rogen" },
          { en: "Billy Eichner", es: "Billy Eichner", de: "Billy Eichner", nl: "Billy Eichner" }
        ],
        correct: 0,
        explanation: {
          en: "Donald Glover voiced adult Simba in Disney's 2019 photorealistic remake of The Lion King, bringing depth and emotion to the iconic character.",
          es: "Donald Glover dio voz al Simba adulto en el remake fotorrealista de Disney de El Rey León de 2019, aportando profundidad y emoción al personaje icónico.",
          de: "Donald Glover sprach den erwachsenen Simba in Disneys photorealistischem Remake von Der König der Löwen 2019 und brachte Tiefe und Emotion in die ikonische Figur.",
          nl: "Donald Glover sprak de volwassen Simba in Disney's 2019 fotorealistische remake van The Lion King, en bracht diepte en emotie naar het iconische personage."
        }
      },
      {
        question: {
          en: "Which actress played Gamora in Guardians of the Galaxy?",
          es: "¿Qué actriz interpretó a Gamora en Guardianes de la Galaxia?",
          de: "Welche Schauspielerin spielte Gamora in Guardians of the Galaxy?",
          nl: "Welke actrice speelde Gamora in Guardians of the Galaxy?"
        },
        options: [
          { en: "Zoe Saldana", es: "Zoe Saldana", de: "Zoe Saldana", nl: "Zoe Saldana" },
          { en: "Karen Gillan", es: "Karen Gillan", de: "Karen Gillan", nl: "Karen Gillan" },
          { en: "Pom Klementieff", es: "Pom Klementieff", de: "Pom Klementieff", nl: "Pom Klementieff" },
          { en: "Brie Larson", es: "Brie Larson", de: "Brie Larson", nl: "Brie Larson" }
        ],
        correct: 0,
        explanation: {
          en: "Zoe Saldana plays Gamora, the deadly warrior and member of the Guardians of the Galaxy, bringing strength and complexity to the green-skinned assassin.",
          es: "Zoe Saldana interpreta a Gamora, la guerrera mortal y miembro de los Guardianes de la Galaxia, aportando fuerza y complejidad a la asesina de piel verde.",
          de: "Zoe Saldana spielt Gamora, die tödliche Kriegerin und Mitglied der Guardians of the Galaxy, und bringt Stärke und Komplexität in die grünhäutige Assassinin.",
          nl: "Zoe Saldana speelt Gamora, de dodelijke krijger en lid van de Guardians of the Galaxy, en brengt kracht en complexiteit naar de groenhuidige moordenares."
        }
      },
      {
        question: {
          en: "Who played Loki in the Marvel movies?",
          es: "¿Quién interpretó a Loki en las películas de Marvel?",
          de: "Wer spielte Loki in den Marvel-Filmen?",
          nl: "Wie speelde Loki in de Marvel films?"
        },
        options: [
          { en: "Tom Hiddleston", es: "Tom Hiddleston", de: "Tom Hiddleston", nl: "Tom Hiddleston" },
          { en: "Chris Hemsworth", es: "Chris Hemsworth", de: "Chris Hemsworth", nl: "Chris Hemsworth" },
          { en: "Benedict Cumberbatch", es: "Benedict Cumberbatch", de: "Benedict Cumberbatch", nl: "Benedict Cumberbatch" },
          { en: "Tom Hardy", es: "Tom Hardy", de: "Tom Hardy", nl: "Tom Hardy" }
        ],
        correct: 0,
        explanation: {
          en: "Tom Hiddleston plays Loki, Thor's mischievous adopted brother and one of the Marvel Cinematic Universe's most beloved villains turned anti-hero.",
          es: "Tom Hiddleston interpreta a Loki, el hermano adoptivo travieso de Thor y uno de los villanos más queridos del Universo Cinematográfico de Marvel convertido en anti-héroe.",
          de: "Tom Hiddleston spielt Loki, Thors schelmischen Adoptivbruder und einen der beliebtesten Bösewichte des Marvel Cinematic Universe, der zum Anti-Helden wurde.",
          nl: "Tom Hiddleston speelt Loki, Thor's ondeugende geadopteerde broer en een van de meest geliefde slechteriken van het Marvel Cinematic Universe die een anti-held werd."
        }
      },
      {
        question: {
          en: "Which actor plays Ant-Man in the Marvel Cinematic Universe?",
          es: "¿Qué actor interpreta a Ant-Man en el Universo Cinematográfico de Marvel?",
          de: "Welcher Schauspieler spielt Ant-Man im Marvel Cinematic Universe?",
          nl: "Welke acteur speelt Ant-Man in het Marvel Cinematic Universe?"
        },
        options: [
          { en: "Paul Rudd", es: "Paul Rudd", de: "Paul Rudd", nl: "Paul Rudd" },
          { en: "Michael Douglas", es: "Michael Douglas", de: "Michael Douglas", nl: "Michael Douglas" },
          { en: "Evangeline Lilly", es: "Evangeline Lilly", de: "Evangeline Lilly", nl: "Evangeline Lilly" },
          { en: "Michael Peña", es: "Michael Peña", de: "Michael Peña", nl: "Michael Peña" }
        ],
        correct: 0,
        explanation: {
          en: "Paul Rudd plays Scott Lang, the modern-day Ant-Man who can shrink to microscopic size and communicate with ants, bringing humor and heart to the role.",
          es: "Paul Rudd interpreta a Scott Lang, el Ant-Man moderno que puede encogerse a tamaño microscópico y comunicarse con hormigas, aportando humor y corazón al papel.",
          de: "Paul Rudd spielt Scott Lang, den modernen Ant-Man, der auf mikroskopische Größe schrumpfen und mit Ameisen kommunizieren kann, und bringt Humor und Herz in die Rolle.",
          nl: "Paul Rudd speelt Scott Lang, de moderne Ant-Man die kan krimpen tot microscopische grootte en kan communiceren met mieren, en brengt humor en hart naar de rol."
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
