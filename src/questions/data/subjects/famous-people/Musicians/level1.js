// Musicians Quiz - Level 1: Easy - Popular Contemporary Musicians
(function() {
  const level1 = {
    name: {
      en: "Famous Musicians - Easy",
      es: "Músicos Famosos - Fácil",
      de: "Berühmte Musiker - Einfach",
      nl: "Beroemde Muzikanten - Gemakkelijk"
    },
    questions: [
      {
        question: {
          en: "Which British band is known for hits like 'Hey Jude' and 'Let It Be'?",
          es: "¿Qué banda británica es conocida por éxitos como 'Hey Jude' y 'Let It Be'?",
          de: "Welche britische Band ist bekannt für Hits wie 'Hey Jude' und 'Let It Be'?",
          nl: "Welke Britse band staat bekend om hits als 'Hey Jude' en 'Let It Be'?"
        },
        options: [
          { en: "The Beatles", es: "The Beatles", de: "The Beatles", nl: "The Beatles" },
          { en: "The Rolling Stones", es: "The Rolling Stones", de: "The Rolling Stones", nl: "The Rolling Stones" },
          { en: "Queen", es: "Queen", de: "Queen", nl: "Queen" },
          { en: "The Who", es: "The Who", de: "The Who", nl: "The Who" }
        ],
        correct: 0,
        explanation: {
          en: "The Beatles were one of the most influential bands in music history, with countless hits including 'Hey Jude' and 'Let It Be'. They revolutionized popular music in the 1960s.",
          es: "The Beatles fue una de las bandas más influyentes en la historia de la música, con innumerables éxitos incluyendo 'Hey Jude' y 'Let It Be'. Revolucionaron la música popular en los años 60.",
          de: "The Beatles waren eine der einflussreichsten Bands der Musikgeschichte, mit zahllosen Hits wie 'Hey Jude' und 'Let It Be'. Sie revolutionierten die Popmusik in den 1960er Jahren.",
          nl: "The Beatles was een van de meest invloedrijke bands in de muziekgeschiedenis, met talloze hits waaronder 'Hey Jude' en 'Let It Be'. Ze revolutioneerden de populaire muziek in de jaren 60."
        }
      },
      {
        question: {
          en: "Which pop star is known as the 'King of Pop'?",
          es: "¿Qué estrella del pop es conocida como el 'Rey del Pop'?",
          de: "Welcher Pop-Star ist als 'King of Pop' bekannt?",
          nl: "Welke popster staat bekend als de 'King of Pop'?"
        },
        options: [
          { en: "Michael Jackson", es: "Michael Jackson", de: "Michael Jackson", nl: "Michael Jackson" },
          { en: "Prince", es: "Prince", de: "Prince", nl: "Prince" },
          { en: "Elvis Presley", es: "Elvis Presley", de: "Elvis Presley", nl: "Elvis Presley" },
          { en: "Elton John", es: "Elton John", de: "Elton John", nl: "Elton John" }
        ],
        correct: 0,
        explanation: {
          en: "Michael Jackson earned the title 'King of Pop' through his groundbreaking music, dance moves, and music videos. His album 'Thriller' remains the best-selling album of all time.",
          es: "Michael Jackson ganó el título de 'Rey del Pop' a través de su música revolucionaria, movimientos de baile y videos musicales. Su álbum 'Thriller' sigue siendo el álbum más vendido de todos los tiempos.",
          de: "Michael Jackson erhielt den Titel 'King of Pop' durch seine bahnbrechende Musik, Tanzbewegungen und Musikvideos. Sein Album 'Thriller' ist nach wie vor das meistverkaufte Album aller Zeiten.",
          nl: "Michael Jackson verdiende de titel 'King of Pop' door zijn baanbrekende muziek, dansmoves en muziekvideo's. Zijn album 'Thriller' blijft het bestverkochte album aller tijden."
        }
      },
      {
        question: {
          en: "Which female singer is famous for songs like 'Hello' and 'Rolling in the Deep'?",
          es: "¿Qué cantante femenina es famosa por canciones como 'Hello' y 'Rolling in the Deep'?",
          de: "Welche Sängerin ist berühmt für Lieder wie 'Hello' und 'Rolling in the Deep'?",
          nl: "Welke zangeres is beroemd om nummers als 'Hello' en 'Rolling in the Deep'?"
        },
        options: [
          { en: "Adele", es: "Adele", de: "Adele", nl: "Adele" },
          { en: "Taylor Swift", es: "Taylor Swift", de: "Taylor Swift", nl: "Taylor Swift" },
          { en: "Beyoncé", es: "Beyoncé", de: "Beyoncé", nl: "Beyoncé" },
          { en: "Rihanna", es: "Rihanna", de: "Rihanna", nl: "Rihanna" }
        ],
        correct: 0,
        explanation: {
          en: "Adele is known for her powerful voice and emotional ballads. Her albums '21' and '25' have won numerous Grammy Awards and broken sales records worldwide.",
          es: "Adele es conocida por su voz poderosa y baladas emocionales. Sus álbumes '21' y '25' han ganado numerosos Premios Grammy y roto récords de ventas mundialmente.",
          de: "Adele ist bekannt für ihre kraftvolle Stimme und emotionale Balladen. Ihre Alben '21' und '25' haben zahlreiche Grammy Awards gewonnen und weltweit Verkaufsrekorde gebrochen.",
          nl: "Adele staat bekend om haar krachtige stem en emotionele ballads. Haar albums '21' en '25' hebben talloze Grammy Awards gewonnen en wereldwijd verkooprecords gebroken."
        }
      },
      {
        question: {
          en: "Which Canadian rapper is known for hits like 'Hotline Bling' and 'God's Plan'?",
          es: "¿Qué rapero canadiense es conocido por éxitos como 'Hotline Bling' y 'God's Plan'?",
          de: "Welcher kanadische Rapper ist bekannt für Hits wie 'Hotline Bling' und 'God's Plan'?",
          nl: "Welke Canadese rapper staat bekend om hits als 'Hotline Bling' en 'God's Plan'?"
        },
        options: [
          { en: "Drake", es: "Drake", de: "Drake", nl: "Drake" },
          { en: "The Weeknd", es: "The Weeknd", de: "The Weeknd", nl: "The Weeknd" },
          { en: "Justin Bieber", es: "Justin Bieber", de: "Justin Bieber", nl: "Justin Bieber" },
          { en: "Shawn Mendes", es: "Shawn Mendes", de: "Shawn Mendes", nl: "Shawn Mendes" }
        ],
        correct: 0,
        explanation: {
          en: "Drake is one of the most successful hip-hop artists of the 21st century, known for blending rap and R&B. He has topped charts worldwide with numerous hit singles.",
          es: "Drake es uno de los artistas de hip-hop más exitosos del siglo XXI, conocido por mezclar rap y R&B. Ha encabezado listas mundialmente con numerosos sencillos exitosos.",
          de: "Drake ist einer der erfolgreichsten Hip-Hop-Künstler des 21. Jahrhunderts, bekannt für die Mischung von Rap und R&B. Er hat weltweit Charts mit zahlreichen Hit-Singles angeführt.",
          nl: "Drake is een van de meest succesvolle hiphop-artiesten van de 21e eeuw, bekend om het mixen van rap en R&B. Hij heeft wereldwijd hitlijsten aangevoerd met talloze hit singles."
        }
      },
      {
        question: {
          en: "Which British band performed 'Bohemian Rhapsody'?",
          es: "¿Qué banda británica interpretó 'Bohemian Rhapsody'?",
          de: "Welche britische Band spielte 'Bohemian Rhapsody'?",
          nl: "Welke Britse band voerde 'Bohemian Rhapsody' uit?"
        },
        options: [
          { en: "Queen", es: "Queen", de: "Queen", nl: "Queen" },
          { en: "Led Zeppelin", es: "Led Zeppelin", de: "Led Zeppelin", nl: "Led Zeppelin" },
          { en: "Pink Floyd", es: "Pink Floyd", de: "Pink Floyd", nl: "Pink Floyd" },
          { en: "The Beatles", es: "The Beatles", de: "The Beatles", nl: "The Beatles" }
        ],
        correct: 0,
        explanation: {
          en: "Queen, led by Freddie Mercury, created 'Bohemian Rhapsody' in 1975. This iconic rock opera has become one of the most beloved and innovative songs in music history.",
          es: "Queen, liderada por Freddie Mercury, creó 'Bohemian Rhapsody' en 1975. Esta ópera rock icónica se ha convertido en una de las canciones más queridas e innovadoras de la historia musical.",
          de: "Queen, angeführt von Freddie Mercury, schuf 1975 'Bohemian Rhapsody'. Diese ikonische Rockoper ist zu einem der beliebtesten und innovativsten Songs der Musikgeschichte geworden.",
          nl: "Queen, geleid door Freddie Mercury, creëerde 'Bohemian Rhapsody' in 1975. Deze iconische rockopera is een van de meest geliefde en innovatieve nummers in de muziekgeschiedenis geworden."
        }
      },
      {
        question: {
          en: "Which pop star sang 'Shake It Off' and 'Blank Space'?",
          es: "¿Qué estrella del pop cantó 'Shake It Off' y 'Blank Space'?",
          de: "Welcher Pop-Star sang 'Shake It Off' und 'Blank Space'?",
          nl: "Welke popster zong 'Shake It Off' en 'Blank Space'?"
        },
        options: [
          { en: "Taylor Swift", es: "Taylor Swift", de: "Taylor Swift", nl: "Taylor Swift" },
          { en: "Katy Perry", es: "Katy Perry", de: "Katy Perry", nl: "Katy Perry" },
          { en: "Ariana Grande", es: "Ariana Grande", de: "Ariana Grande", nl: "Ariana Grande" },
          { en: "Lady Gaga", es: "Lady Gaga", de: "Lady Gaga", nl: "Lady Gaga" }
        ],
        correct: 0,
        explanation: {
          en: "Taylor Swift is one of the best-selling music artists of all time. She started as a country artist and successfully transitioned to pop music with albums like '1989'.",
          es: "Taylor Swift es una de las artistas musicales más vendidas de todos los tiempos. Comenzó como artista country y transicionó exitosamente a la música pop con álbumes como '1989'.",
          de: "Taylor Swift ist eine der meistverkauften Musikkünstlerinnen aller Zeiten. Sie begann als Country-Künstlerin und wechselte erfolgreich zur Popmusik mit Alben wie '1989'.",
          nl: "Taylor Swift is een van de bestverkopende muziekartiesten aller tijden. Ze begon als country-artieste en maakte succesvol de overstap naar popmuziek met albums als '1989'."
        }
      },
      {
        question: {
          en: "Which rapper is known for the song 'Lose Yourself'?",
          es: "¿Qué rapero es conocido por la canción 'Lose Yourself'?",
          de: "Welcher Rapper ist bekannt für den Song 'Lose Yourself'?",
          nl: "Welke rapper staat bekend om het nummer 'Lose Yourself'?"
        },
        options: [
          { en: "Eminem", es: "Eminem", de: "Eminem", nl: "Eminem" },
          { en: "Jay-Z", es: "Jay-Z", de: "Jay-Z", nl: "Jay-Z" },
          { en: "Snoop Dogg", es: "Snoop Dogg", de: "Snoop Dogg", nl: "Snoop Dogg" },
          { en: "Dr. Dre", es: "Dr. Dre", de: "Dr. Dre", nl: "Dr. Dre" }
        ],
        correct: 0,
        explanation: {
          en: "Eminem won an Academy Award for 'Lose Yourself' from the movie '8 Mile'. He is widely regarded as one of the greatest rappers of all time.",
          es: "Eminem ganó un Premio de la Academia por 'Lose Yourself' de la película '8 Mile'. Es ampliamente considerado como uno de los mejores raperos de todos los tiempos.",
          de: "Eminem gewann einen Academy Award für 'Lose Yourself' aus dem Film '8 Mile'. Er gilt weithin als einer der größten Rapper aller Zeiten.",
          nl: "Eminem won een Academy Award voor 'Lose Yourself' uit de film '8 Mile'. Hij wordt algemeen beschouwd als een van de grootste rappers aller tijden."
        }
      },
      {
        question: {
          en: "Which singer is known as 'The Material Girl'?",
          es: "¿Qué cantante es conocida como 'The Material Girl'?",
          de: "Welche Sängerin ist als 'The Material Girl' bekannt?",
          nl: "Welke zangeres staat bekend als 'The Material Girl'?"
        },
        options: [
          { en: "Madonna", es: "Madonna", de: "Madonna", nl: "Madonna" },
          { en: "Cyndi Lauper", es: "Cyndi Lauper", de: "Cyndi Lauper", nl: "Cyndi Lauper" },
          { en: "Whitney Houston", es: "Whitney Houston", de: "Whitney Houston", nl: "Whitney Houston" },
          { en: "Cher", es: "Cher", de: "Cher", nl: "Cher" }
        ],
        correct: 0,
        explanation: {
          en: "Madonna earned the nickname 'Material Girl' from her 1984 hit song. She is one of the best-selling female artists in music history and a pop culture icon.",
          es: "Madonna ganó el apodo 'Material Girl' de su canción exitosa de 1984. Es una de las artistas femeninas más vendidas en la historia musical y un ícono de cultura pop.",
          de: "Madonna erhielt den Spitznamen 'Material Girl' von ihrem Hit-Song aus dem Jahr 1984. Sie ist eine der meistverkauften Künstlerinnen der Musikgeschichte und eine Popkultur-Ikone.",
          nl: "Madonna kreeg de bijnaam 'Material Girl' van haar hit uit 1984. Ze is een van de bestverkopende vrouwelijke artiesten in de muziekgeschiedenis en een popculturale icoon."
        }
      },
      {
        question: {
          en: "Which boy band sang 'I Want It That Way'?",
          es: "¿Qué boy band cantó 'I Want It That Way'?",
          de: "Welche Boyband sang 'I Want It That Way'?",
          nl: "Welke boyband zong 'I Want It That Way'?"
        },
        options: [
          { en: "Backstreet Boys", es: "Backstreet Boys", de: "Backstreet Boys", nl: "Backstreet Boys" },
          { en: "*NSYNC", es: "*NSYNC", de: "*NSYNC", nl: "*NSYNC" },
          { en: "Westlife", es: "Westlife", de: "Westlife", nl: "Westlife" },
          { en: "One Direction", es: "One Direction", de: "One Direction", nl: "One Direction" }
        ],
        correct: 0,
        explanation: {
          en: "The Backstreet Boys released 'I Want It That Way' in 1999, which became one of the best-selling singles of all time and a defining song of the late 1990s.",
          es: "Backstreet Boys lanzó 'I Want It That Way' en 1999, que se convirtió en uno de los sencillos más vendidos de todos los tiempos y una canción definitoria de finales de los 90.",
          de: "Die Backstreet Boys veröffentlichten 1999 'I Want It That Way', das zu einer der meistverkauften Singles aller Zeiten und einem prägenden Song der späten 1990er Jahre wurde.",
          nl: "De Backstreet Boys brachten 'I Want It That Way' uit in 1999, dat een van de bestverkochte singles aller tijden werd en een bepalend nummer van de late jaren negentig."
        }
      },
      {
        question: {
          en: "Which British singer-songwriter is known for hits like 'Shape of You' and 'Thinking Out Loud'?",
          es: "¿Qué cantautor británico es conocido por éxitos como 'Shape of You' y 'Thinking Out Loud'?",
          de: "Welcher britische Singer-Songwriter ist bekannt für Hits wie 'Shape of You' und 'Thinking Out Loud'?",
          nl: "Welke Britse singer-songwriter staat bekend om hits als 'Shape of You' en 'Thinking Out Loud'?"
        },
        options: [
          { en: "Ed Sheeran", es: "Ed Sheeran", de: "Ed Sheeran", nl: "Ed Sheeran" },
          { en: "Sam Smith", es: "Sam Smith", de: "Sam Smith", nl: "Sam Smith" },
          { en: "Harry Styles", es: "Harry Styles", de: "Harry Styles", nl: "Harry Styles" },
          { en: "James Blunt", es: "James Blunt", de: "James Blunt", nl: "James Blunt" }
        ],
        correct: 0,
        explanation: {
          en: "Ed Sheeran has become one of the world's best-selling music artists. His album '÷' (Divide) featuring 'Shape of You' became one of the best-selling albums of the 2010s.",
          es: "Ed Sheeran se ha convertido en uno de los artistas musicales más vendidos del mundo. Su álbum '÷' (Divide) con 'Shape of You' se convirtió en uno de los álbumes más vendidos de los 2010s.",
          de: "Ed Sheeran ist einer der weltweit meistverkauften Musikkünstler geworden. Sein Album '÷' (Divide) mit 'Shape of You' wurde zu einem der meistverkauften Alben der 2010er Jahre.",
          nl: "Ed Sheeran is een van 's werelds bestverkopende muziekartiesten geworden. Zijn album '÷' (Divide) met 'Shape of You' werd een van de bestverkochte albums van de jaren 2010."
        }
      },
      {
        question: {
          en: "Which Colombian singer is famous for 'Hips Don't Lie' and 'Waka Waka'?",
          es: "¿Qué cantante colombiana es famosa por 'Hips Don't Lie' y 'Waka Waka'?",
          de: "Welche kolumbianische Sängerin ist berühmt für 'Hips Don't Lie' und 'Waka Waka'?",
          nl: "Welke Colombiaanse zangeres is beroemd om 'Hips Don't Lie' en 'Waka Waka'?"
        },
        options: [
          { en: "Shakira", es: "Shakira", de: "Shakira", nl: "Shakira" },
          { en: "Jennifer Lopez", es: "Jennifer Lopez", de: "Jennifer Lopez", nl: "Jennifer Lopez" },
          { en: "Gloria Estefan", es: "Gloria Estefan", de: "Gloria Estefan", nl: "Gloria Estefan" },
          { en: "Selena", es: "Selena", de: "Selena", nl: "Selena" }
        ],
        correct: 0,
        explanation: {
          en: "Shakira is one of the best-selling Latin artists of all time. Her song 'Waka Waka' was the official song of the 2010 FIFA World Cup.",
          es: "Shakira es una de las artistas latinas más vendidas de todos los tiempos. Su canción 'Waka Waka' fue la canción oficial de la Copa Mundial de la FIFA 2010.",
          de: "Shakira ist eine der meistverkauften lateinamerikanischen Künstlerinnen aller Zeiten. Ihr Song 'Waka Waka' war das offizielle Lied der FIFA-Weltmeisterschaft 2010.",
          nl: "Shakira is een van de bestverkopende Latijnse artiesten aller tijden. Haar nummer 'Waka Waka' was het officiële lied van het FIFA Wereldkampioenschap 2010."
        }
      },
      {
        question: {
          en: "Which electronic music duo is known for 'Get Lucky' and wearing robot helmets?",
          es: "¿Qué dúo de música electrónica es conocido por 'Get Lucky' y usar cascos de robot?",
          de: "Welches elektronische Musik-Duo ist bekannt für 'Get Lucky' und das Tragen von Roboterhelmen?",
          nl: "Welk elektronisch muziekduo staat bekend om 'Get Lucky' en het dragen van robothelmen?"
        },
        options: [
          { en: "Daft Punk", es: "Daft Punk", de: "Daft Punk", nl: "Daft Punk" },
          { en: "The Chainsmokers", es: "The Chainsmokers", de: "The Chainsmokers", nl: "The Chainsmokers" },
          { en: "Disclosure", es: "Disclosure", de: "Disclosure", nl: "Disclosure" },
          { en: "Justice", es: "Justice", de: "Justice", nl: "Justice" }
        ],
        correct: 0,
        explanation: {
          en: "Daft Punk revolutionized electronic music and were known for their robotic personas. They announced their split in 2021 after nearly 30 years together.",
          es: "Daft Punk revolucionó la música electrónica y eran conocidos por sus personajes robóticos. Anunciaron su separación en 2021 después de casi 30 años juntos.",
          de: "Daft Punk revolutionierte elektronische Musik und waren für ihre Roboter-Personas bekannt. Sie kündigten 2021 nach fast 30 Jahren ihre Trennung an.",
          nl: "Daft Punk revolutioneerde elektronische muziek en stond bekend om hun robotpersona's. Ze kondigden hun scheiding aan in 2021 na bijna 30 jaar samen."
        }
      },
      {
        question: {
          en: "Which Puerto Rican rapper is known for 'Gasolina' and helped popularize reggaeton?",
          es: "¿Qué rapero puertorriqueño es conocido por 'Gasolina' y ayudó a popularizar el reggaetón?",
          de: "Welcher puerto-ricanische Rapper ist bekannt für 'Gasolina' und half, Reggaeton zu popularisieren?",
          nl: "Welke Puerto Ricaanse rapper staat bekend om 'Gasolina' en hielp reggaeton te populariseren?"
        },
        options: [
          { en: "Daddy Yankee", es: "Daddy Yankee", de: "Daddy Yankee", nl: "Daddy Yankee" },
          { en: "Bad Bunny", es: "Bad Bunny", de: "Bad Bunny", nl: "Bad Bunny" },
          { en: "J Balvin", es: "J Balvin", de: "J Balvin", nl: "J Balvin" },
          { en: "Maluma", es: "Maluma", de: "Maluma", nl: "Maluma" }
        ],
        correct: 0,
        explanation: {
          en: "Daddy Yankee's 'Gasolina' (2004) was a breakthrough hit that brought reggaeton to mainstream audiences worldwide. He is known as the 'King of Reggaeton'.",
          es: "La 'Gasolina' (2004) de Daddy Yankee fue un éxito revolucionario que llevó el reggaetón a audiencias mainstream mundialmente. Es conocido como el 'Rey del Reggaetón'.",
          de: "Daddy Yankees 'Gasolina' (2004) war ein bahnbrechender Hit, der Reggaeton einem weltweiten Mainstream-Publikum näherbrachte. Er ist als 'König des Reggaeton' bekannt.",
          nl: "Daddy Yankee's 'Gasolina' (2004) was een baanbrekende hit die reggaeton naar het mainstream publiek wereldwijd bracht. Hij staat bekend als de 'Koning van Reggaeton'."
        }
      },
      {
        question: {
          en: "Which Irish rock band performed 'With or Without You' and 'One'?",
          es: "¿Qué banda de rock irlandesa interpretó 'With or Without You' y 'One'?",
          de: "Welche irische Rockband spielte 'With or Without You' und 'One'?",
          nl: "Welke Ierse rockband voerde 'With or Without You' en 'One' uit?"
        },
        options: [
          { en: "U2", es: "U2", de: "U2", nl: "U2" },
          { en: "The Cranberries", es: "The Cranberries", de: "The Cranberries", nl: "The Cranberries" },
          { en: "Snow Patrol", es: "Snow Patrol", de: "Snow Patrol", nl: "Snow Patrol" },
          { en: "The Script", es: "The Script", de: "The Script", nl: "The Script" }
        ],
        correct: 0,
        explanation: {
          en: "U2, led by Bono, is one of the best-selling bands of all time. Their album 'The Joshua Tree' featuring 'With or Without You' became a landmark of 1980s rock music.",
          es: "U2, liderado por Bono, es una de las bandas más vendidas de todos los tiempos. Su álbum 'The Joshua Tree' con 'With or Without You' se convirtió en un hito de la música rock de los 80.",
          de: "U2, angeführt von Bono, ist eine der meistverkauften Bands aller Zeiten. Ihr Album 'The Joshua Tree' mit 'With or Without You' wurde zu einem Meilenstein der Rockmusik der 1980er Jahre.",
          nl: "U2, geleid door Bono, is een van de bestverkopende bands aller tijden. Hun album 'The Joshua Tree' met 'With or Without You' werd een mijlpaal van de rockmuziek uit de jaren 80."
        }
      },
      {
        question: {
          en: "Which R&B singer is known as 'Queen Bey'?",
          es: "¿Qué cantante de R&B es conocida como 'Queen Bey'?",
          de: "Welche R&B-Sängerin ist als 'Queen Bey' bekannt?",
          nl: "Welke R&B-zangeres staat bekend als 'Queen Bey'?"
        },
        options: [
          { en: "Beyoncé", es: "Beyoncé", de: "Beyoncé", nl: "Beyoncé" },
          { en: "Alicia Keys", es: "Alicia Keys", de: "Alicia Keys", nl: "Alicia Keys" },
          { en: "Mary J. Blige", es: "Mary J. Blige", de: "Mary J. Blige", nl: "Mary J. Blige" },
          { en: "Mariah Carey", es: "Mariah Carey", de: "Mariah Carey", nl: "Mariah Carey" }
        ],
        correct: 0,
        explanation: {
          en: "Beyoncé, formerly of Destiny's Child, has become one of the most influential artists in contemporary music. She is known for powerful vocals and groundbreaking performances.",
          es: "Beyoncé, anteriormente de Destiny's Child, se ha convertido en una de las artistas más influyentes en la música contemporánea. Es conocida por su voz poderosa y actuaciones revolucionarias.",
          de: "Beyoncé, ehemals von Destiny's Child, ist zu einer der einflussreichsten Künstlerinnen der zeitgenössischen Musik geworden. Sie ist bekannt für kraftvolle Stimme und bahnbrechende Auftritte.",
          nl: "Beyoncé, voorheen van Destiny's Child, is een van de meest invloedrijke artiesten in hedendaagse muziek geworden. Ze staat bekend om krachtige zang en baanbrekende optredens."
        }
      },
      {
        question: {
          en: "Which rapper released the album 'Good Kid, M.A.A.D City'?",
          es: "¿Qué rapero lanzó el álbum 'Good Kid, M.A.A.D City'?",
          de: "Welcher Rapper veröffentlichte das Album 'Good Kid, M.A.A.D City'?",
          nl: "Welke rapper bracht het album 'Good Kid, M.A.A.D City' uit?"
        },
        options: [
          { en: "Kendrick Lamar", es: "Kendrick Lamar", de: "Kendrick Lamar", nl: "Kendrick Lamar" },
          { en: "J. Cole", es: "J. Cole", de: "J. Cole", nl: "J. Cole" },
          { en: "Kanye West", es: "Kanye West", de: "Kanye West", nl: "Kanye West" },
          { en: "Travis Scott", es: "Travis Scott", de: "Travis Scott", nl: "Travis Scott" }
        ],
        correct: 0,
        explanation: {
          en: "Kendrick Lamar's 'Good Kid, M.A.A.D City' (2012) is considered a modern hip-hop classic. He later became the first rapper to win a Pulitzer Prize for his album 'DAMN.'",
          es: "El 'Good Kid, M.A.A.D City' (2012) de Kendrick Lamar es considerado un clásico moderno del hip-hop. Más tarde se convirtió en el primer rapero en ganar un Premio Pulitzer por su álbum 'DAMN.'",
          de: "Kendrick Lamars 'Good Kid, M.A.A.D City' (2012) gilt als moderner Hip-Hop-Klassiker. Er wurde später der erste Rapper, der für sein Album 'DAMN.' einen Pulitzer-Preis gewann.",
          nl: "Kendrick Lamar's 'Good Kid, M.A.A.D City' (2012) wordt beschouwd als een moderne hiphop-klassieker. Hij werd later de eerste rapper die een Pulitzer Prize won voor zijn album 'DAMN.'"
        }
      },
      {
        question: {
          en: "Which pop singer is known for her elaborate stage costumes and hits like 'Bad Romance'?",
          es: "¿Qué cantante pop es conocida por sus elaborados trajes de escenario y éxitos como 'Bad Romance'?",
          de: "Welche Pop-Sängerin ist bekannt für ihre aufwendigen Bühnenkostüme und Hits wie 'Bad Romance'?",
          nl: "Welke popzangeres staat bekend om haar uitgebreide podiumkostuums en hits als 'Bad Romance'?"
        },
        options: [
          { en: "Lady Gaga", es: "Lady Gaga", de: "Lady Gaga", nl: "Lady Gaga" },
          { en: "Katy Perry", es: "Katy Perry", de: "Katy Perry", nl: "Katy Perry" },
          { en: "Miley Cyrus", es: "Miley Cyrus", de: "Miley Cyrus", nl: "Miley Cyrus" },
          { en: "Kesha", es: "Kesha", de: "Kesha", nl: "Kesha" }
        ],
        correct: 0,
        explanation: {
          en: "Lady Gaga is known for her avant-garde fashion and theatrical performances. Her debut album 'The Fame' and subsequent releases have made her one of the best-selling music artists.",
          es: "Lady Gaga es conocida por su moda vanguardista y actuaciones teatrales. Su álbum debut 'The Fame' y lanzamientos subsecuentes la han convertido en una de las artistas musicales más vendidas.",
          de: "Lady Gaga ist bekannt für ihre avantgardistische Mode und theatralische Auftritte. Ihr Debütalbum 'The Fame' und nachfolgende Veröffentlichungen haben sie zu einer der meistverkauften Musikkünstlerinnen gemacht.",
          nl: "Lady Gaga staat bekend om haar avant-garde mode en theatrale optredens. Haar debuutalbum 'The Fame' en daaropvolgende releases hebben haar tot een van de bestverkopende muziekartiesten gemaakt."
        }
      },
      {
        question: {
          en: "Which country music star is known for 'Before He Cheats' and 'Jesus, Take the Wheel'?",
          es: "¿Qué estrella de música country es conocida por 'Before He Cheats' y 'Jesus, Take the Wheel'?",
          de: "Welcher Country-Musik-Star ist bekannt für 'Before He Cheats' und 'Jesus, Take the Wheel'?",
          nl: "Welke countrymuziekster staat bekend om 'Before He Cheats' en 'Jesus, Take the Wheel'?"
        },
        options: [
          { en: "Carrie Underwood", es: "Carrie Underwood", de: "Carrie Underwood", nl: "Carrie Underwood" },
          { en: "Miranda Lambert", es: "Miranda Lambert", de: "Miranda Lambert", nl: "Miranda Lambert" },
          { en: "Shania Twain", es: "Shania Twain", de: "Shania Twain", nl: "Shania Twain" },
          { en: "Faith Hill", es: "Faith Hill", de: "Faith Hill", nl: "Faith Hill" }
        ],
        correct: 0,
        explanation: {
          en: "Carrie Underwood rose to fame after winning American Idol in 2005. She has become one of the most successful country music artists with numerous awards and hit songs.",
          es: "Carrie Underwood alcanzó la fama después de ganar American Idol en 2005. Se ha convertido en una de las artistas de música country más exitosas con numerosos premios y canciones exitosas.",
          de: "Carrie Underwood wurde nach dem Gewinn von American Idol 2005 berühmt. Sie ist zu einer der erfolgreichsten Country-Musik-Künstlerinnen mit zahlreichen Auszeichnungen und Hit-Songs geworden.",
          nl: "Carrie Underwood werd beroemd na het winnen van American Idol in 2005. Ze is een van de meest succesvolle countrymuziekartiesten geworden met talloze awards en hitnummers."
        }
      },
      {
        question: {
          en: "Which rock band is fronted by Chris Martin and known for 'Yellow' and 'Viva la Vida'?",
          es: "¿Qué banda de rock es liderada por Chris Martin y conocida por 'Yellow' y 'Viva la Vida'?",
          de: "Welche Rockband wird von Chris Martin angeführt und ist bekannt für 'Yellow' und 'Viva la Vida'?",
          nl: "Welke rockband wordt geleid door Chris Martin en staat bekend om 'Yellow' en 'Viva la Vida'?"
        },
        options: [
          { en: "Coldplay", es: "Coldplay", de: "Coldplay", nl: "Coldplay" },
          { en: "Radiohead", es: "Radiohead", de: "Radiohead", nl: "Radiohead" },
          { en: "Travis", es: "Travis", de: "Travis", nl: "Travis" },
          { en: "Keane", es: "Keane", de: "Keane", nl: "Keane" }
        ],
        correct: 0,
        explanation: {
          en: "Coldplay has become one of the world's best-selling music acts since forming in 1996. Their emotionally-driven alternative rock has earned them worldwide acclaim.",
          es: "Coldplay se ha convertido en uno de los actos musicales más vendidos del mundo desde su formación en 1996. Su rock alternativo emocionalmente impulsado les ha ganado aclamación mundial.",
          de: "Coldplay ist seit ihrer Gründung 1996 zu einem der weltweit meistverkauften Musikacts geworden. Ihr emotional getriebener Alternative Rock hat ihnen weltweite Anerkennung eingebracht.",
          nl: "Coldplay is een van 's werelds bestverkopende muziekacts geworden sinds de oprichting in 1996. Hun emotioneel gedreven alternatieve rock heeft hen wereldwijde erkenning opgeleverd."
        }
      },
      {
        question: {
          en: "Which female rapper is known for 'Super Bass' and 'Anaconda'?",
          es: "¿Qué rapera es conocida por 'Super Bass' y 'Anaconda'?",
          de: "Welche weibliche Rapperin ist bekannt für 'Super Bass' und 'Anaconda'?",
          nl: "Welke vrouwelijke rapper staat bekend om 'Super Bass' en 'Anaconda'?"
        },
        options: [
          { en: "Nicki Minaj", es: "Nicki Minaj", de: "Nicki Minaj", nl: "Nicki Minaj" },
          { en: "Cardi B", es: "Cardi B", de: "Cardi B", nl: "Cardi B" },
          { en: "Megan Thee Stallion", es: "Megan Thee Stallion", de: "Megan Thee Stallion", nl: "Megan Thee Stallion" },
          { en: "Iggy Azalea", es: "Iggy Azalea", de: "Iggy Azalea", nl: "Iggy Azalea" }
        ],
        correct: 0,
        explanation: {
          en: "Nicki Minaj is one of the best-selling female rappers of all time. Her colorful persona and rapid-fire flow have made her a dominant force in hip-hop since 2010.",
          es: "Nicki Minaj es una de las raperas más vendidas de todos los tiempos. Su persona colorida y flow rápido la han convertido en una fuerza dominante en el hip-hop desde 2010.",
          de: "Nicki Minaj ist eine der meistverkauften weiblichen Rapperinnen aller Zeiten. Ihre farbenfrohe Persona und ihr schneller Flow haben sie seit 2010 zu einer dominanten Kraft im Hip-Hop gemacht.",
          nl: "Nicki Minaj is een van de bestverkopende vrouwelijke rappers aller tijden. Haar kleurrijke persona en snelle flow hebben haar sinds 2010 tot een dominante kracht in hiphop gemaakt."
        }
      },
      {
        question: {
          en: "Which Swedish DJ is known for 'Wake Me Up' and 'Levels'?",
          es: "¿Qué DJ sueco es conocido por 'Wake Me Up' y 'Levels'?",
          de: "Welcher schwedische DJ ist bekannt für 'Wake Me Up' und 'Levels'?",
          nl: "Welke Zweedse DJ staat bekend om 'Wake Me Up' en 'Levels'?"
        },
        options: [
          { en: "Avicii", es: "Avicii", de: "Avicii", nl: "Avicii" },
          { en: "Swedish House Mafia", es: "Swedish House Mafia", de: "Swedish House Mafia", nl: "Swedish House Mafia" },
          { en: "Alesso", es: "Alesso", de: "Alesso", nl: "Alesso" },
          { en: "Axwell", es: "Axwell", de: "Axwell", nl: "Axwell" }
        ],
        correct: 0,
        explanation: {
          en: "Avicii (Tim Bergling) was a pioneering electronic music producer who helped bring EDM to mainstream audiences. His tragic death in 2018 shocked the music world.",
          es: "Avicii (Tim Bergling) fue un productor pionero de música electrónica que ayudó a llevar el EDM a audiencias mainstream. Su trágica muerte en 2018 conmocionó al mundo musical.",
          de: "Avicii (Tim Bergling) war ein wegweisender elektronischer Musikproduzent, der half, EDM einem Mainstream-Publikum näherzubringen. Sein tragischer Tod 2018 schockierte die Musikwelt.",
          nl: "Avicii (Tim Bergling) was een baanbrekende elektronische muziekproducent die hielp EDM naar het mainstream publiek te brengen. Zijn tragische dood in 2018 schokte de muziekwereld."
        }
      },
      {
        question: {
          en: "Which hip-hop group is known for 'Fight the Power' and 'Don't Believe the Hype'?",
          es: "¿Qué grupo de hip-hop es conocido por 'Fight the Power' y 'Don't Believe the Hype'?",
          de: "Welche Hip-Hop-Gruppe ist bekannt für 'Fight the Power' und 'Don't Believe the Hype'?",
          nl: "Welke hiphopgroep staat bekend om 'Fight the Power' en 'Don't Believe the Hype'?"
        },
        options: [
          { en: "Public Enemy", es: "Public Enemy", de: "Public Enemy", nl: "Public Enemy" },
          { en: "N.W.A", es: "N.W.A", de: "N.W.A", nl: "N.W.A" },
          { en: "Run-D.M.C.", es: "Run-D.M.C.", de: "Run-D.M.C.", nl: "Run-D.M.C." },
          { en: "Wu-Tang Clan", es: "Wu-Tang Clan", de: "Wu-Tang Clan", nl: "Wu-Tang Clan" }
        ],
        correct: 0,
        explanation: {
          en: "Public Enemy revolutionized hip-hop in the late 1980s with politically charged lyrics and innovative production. They are considered one of the most influential hip-hop groups of all time.",
          es: "Public Enemy revolucionó el hip-hop a finales de los 80 con letras políticamente cargadas y producción innovadora. Son considerados uno de los grupos de hip-hop más influyentes de todos los tiempos.",
          de: "Public Enemy revolutionierte Ende der 1980er Jahre Hip-Hop mit politisch aufgeladenen Texten und innovativer Produktion. Sie gelten als eine der einflussreichsten Hip-Hop-Gruppen aller Zeiten.",
          nl: "Public Enemy revolutioneerde hiphop in de late jaren 1980 met politiek geladen teksten en innovatieve productie. Ze worden beschouwd als een van de meest invloedrijke hiphopgroepen aller tijden."
        }
      },
      {
        question: {
          en: "Which singer is known as 'The Voice' and had hits like 'I Will Always Love You'?",
          es: "¿Qué cantante es conocida como 'The Voice' y tuvo éxitos como 'I Will Always Love You'?",
          de: "Welche Sängerin ist als 'The Voice' bekannt und hatte Hits wie 'I Will Always Love You'?",
          nl: "Welke zangeres staat bekend als 'The Voice' en had hits als 'I Will Always Love You'?"
        },
        options: [
          { en: "Whitney Houston", es: "Whitney Houston", de: "Whitney Houston", nl: "Whitney Houston" },
          { en: "Mariah Carey", es: "Mariah Carey", de: "Mariah Carey", nl: "Mariah Carey" },
          { en: "Celine Dion", es: "Celine Dion", de: "Celine Dion", nl: "Celine Dion" },
          { en: "Diana Ross", es: "Diana Ross", de: "Diana Ross", nl: "Diana Ross" }
        ],
        correct: 0,
        explanation: {
          en: "Whitney Houston was one of the best-selling music artists of all time, known for her powerful voice. Her cover of 'I Will Always Love You' became one of the best-selling singles ever.",
          es: "Whitney Houston fue una de las artistas musicales más vendidas de todos los tiempos, conocida por su voz poderosa. Su versión de 'I Will Always Love You' se convirtió en uno de los sencillos más vendidos jamás.",
          de: "Whitney Houston war eine der meistverkauften Musikkünstlerinnen aller Zeiten, bekannt für ihre kraftvolle Stimme. Ihre Version von 'I Will Always Love You' wurde zu einer der meistverkauften Singles überhaupt.",
          nl: "Whitney Houston was een van de bestverkopende muziekartiesten aller tijden, bekend om haar krachtige stem. Haar cover van 'I Will Always Love You' werd een van de bestverkochte singles ooit."
        }
      },
      {
        question: {
          en: "Which rock band is known for 'Smells Like Teen Spirit' and fronted by Kurt Cobain?",
          es: "¿Qué banda de rock es conocida por 'Smells Like Teen Spirit' y liderada por Kurt Cobain?",
          de: "Welche Rockband ist bekannt für 'Smells Like Teen Spirit' und wurde von Kurt Cobain angeführt?",
          nl: "Welke rockband staat bekend om 'Smells Like Teen Spirit' en werd geleid door Kurt Cobain?"
        },
        options: [
          { en: "Nirvana", es: "Nirvana", de: "Nirvana", nl: "Nirvana" },
          { en: "Pearl Jam", es: "Pearl Jam", de: "Pearl Jam", nl: "Pearl Jam" },
          { en: "Soundgarden", es: "Soundgarden", de: "Soundgarden", nl: "Soundgarden" },
          { en: "Alice in Chains", es: "Alice in Chains", de: "Alice in Chains", nl: "Alice in Chains" }
        ],
        correct: 0,
        explanation: {
          en: "Nirvana's 'Smells Like Teen Spirit' (1991) became an anthem for Generation X and helped bring grunge and alternative rock into the mainstream. The band's influence on modern rock is immeasurable.",
          es: "El 'Smells Like Teen Spirit' (1991) de Nirvana se convirtió en un himno para la Generación X y ayudó a llevar el grunge y rock alternativo al mainstream. La influencia de la banda en el rock moderno es inconmensurable.",
          de: "Nirvanas 'Smells Like Teen Spirit' (1991) wurde zu einer Hymne für die Generation X und half, Grunge und Alternative Rock in den Mainstream zu bringen. Der Einfluss der Band auf modernen Rock ist unermesslich.",
          nl: "Nirvana's 'Smells Like Teen Spirit' (1991) werd een hymne voor Generatie X en hielp grunge en alternatieve rock naar de mainstream te brengen. De invloed van de band op moderne rock is onmeetbaar."
        }
      },
      {
        question: {
          en: "Which British singer is known for 'Someone Like You' and 'Set Fire to the Rain'?",
          es: "¿Qué cantante británica es conocida por 'Someone Like You' y 'Set Fire to the Rain'?",
          de: "Welche britische Sängerin ist bekannt für 'Someone Like You' und 'Set Fire to the Rain'?",
          nl: "Welke Britse zangeres staat bekend om 'Someone Like You' en 'Set Fire to the Rain'?"
        },
        options: [
          { en: "Adele", es: "Adele", de: "Adele", nl: "Adele" },
          { en: "Amy Winehouse", es: "Amy Winehouse", de: "Amy Winehouse", nl: "Amy Winehouse" },
          { en: "Florence Welch", es: "Florence Welch", de: "Florence Welch", nl: "Florence Welch" },
          { en: "Jessie J", es: "Jessie J", de: "Jessie J", nl: "Jessie J" }
        ],
        correct: 0,
        explanation: {
          en: "Adele's album '21' became one of the best-selling albums of the 21st century. Her soulful voice and heartfelt lyrics have earned her 15 Grammy Awards.",
          es: "El álbum '21' de Adele se convirtió en uno de los álbumes más vendidos del siglo XXI. Su voz conmovedora y letras sinceras le han ganado 15 Premios Grammy.",
          de: "Adeles Album '21' wurde zu einem der meistverkauften Alben des 21. Jahrhunderts. Ihre gefühlvolle Stimme und herzlichen Texte haben ihr 15 Grammy Awards eingebracht.",
          nl: "Adele's album '21' werd een van de bestverkochte albums van de 21e eeuw. Haar soulvolle stem en oprechte teksten hebben haar 15 Grammy Awards opgeleverd."
        }
      },
      {
        question: {
          en: "Which rapper is known for 'In Da Club' and 'Candy Shop'?",
          es: "¿Qué rapero es conocido por 'In Da Club' y 'Candy Shop'?",
          de: "Welcher Rapper ist bekannt für 'In Da Club' und 'Candy Shop'?",
          nl: "Welke rapper staat bekend om 'In Da Club' en 'Candy Shop'?"
        },
        options: [
          { en: "50 Cent", es: "50 Cent", de: "50 Cent", nl: "50 Cent" },
          { en: "Ludacris", es: "Ludacris", de: "Ludacris", nl: "Ludacris" },
          { en: "Nelly", es: "Nelly", de: "Nelly", nl: "Nelly" },
          { en: "Ja Rule", es: "Ja Rule", de: "Ja Rule", nl: "Ja Rule" }
        ],
        correct: 0,
        explanation: {
          en: "50 Cent's debut album 'Get Rich or Die Tryin'' (2003) was a massive commercial success. His hit 'In Da Club' became an anthem of the early 2000s hip-hop scene.",
          es: "El álbum debut de 50 Cent 'Get Rich or Die Tryin'' (2003) fue un éxito comercial masivo. Su éxito 'In Da Club' se convirtió en un himno de la escena hip-hop de principios de los 2000.",
          de: "50 Cents Debütalbum 'Get Rich or Die Tryin'' (2003) war ein massiver kommerzieller Erfolg. Sein Hit 'In Da Club' wurde zu einer Hymne der frühen 2000er Hip-Hop-Szene.",
          nl: "50 Cent's debuutalbum 'Get Rich or Die Tryin'' (2003) was een enorm commercieel succes. Zijn hit 'In Da Club' werd een hymne van de vroege jaren 2000 hiphopscene."
        }
      },
      {
        question: {
          en: "Which pop star had a residency in Las Vegas and is known for 'Toxic' and 'Baby One More Time'?",
          es: "¿Qué estrella del pop tuvo una residencia en Las Vegas y es conocida por 'Toxic' y 'Baby One More Time'?",
          de: "Welcher Pop-Star hatte eine Residenz in Las Vegas und ist bekannt für 'Toxic' und 'Baby One More Time'?",
          nl: "Welke popster had een residentie in Las Vegas en staat bekend om 'Toxic' en 'Baby One More Time'?"
        },
        options: [
          { en: "Britney Spears", es: "Britney Spears", de: "Britney Spears", nl: "Britney Spears" },
          { en: "Christina Aguilera", es: "Christina Aguilera", de: "Christina Aguilera", nl: "Christina Aguilera" },
          { en: "Jessica Simpson", es: "Jessica Simpson", de: "Jessica Simpson", nl: "Jessica Simpson" },
          { en: "Mandy Moore", es: "Mandy Moore", de: "Mandy Moore", nl: "Mandy Moore" }
        ],
        correct: 0,
        explanation: {
          en: "Britney Spears was one of the defining pop stars of the late 1990s and early 2000s. Her 'Piece of Me' Las Vegas residency ran from 2013 to 2017.",
          es: "Britney Spears fue una de las estrellas del pop definitorias de finales de los 90 y principios de los 2000. Su residencia en Las Vegas 'Piece of Me' se llevó a cabo de 2013 a 2017.",
          de: "Britney Spears war einer der prägenden Pop-Stars der späten 1990er und frühen 2000er Jahre. Ihre Las Vegas-Residenz 'Piece of Me' lief von 2013 bis 2017.",
          nl: "Britney Spears was een van de bepalende popsterren van de late jaren 1990 en vroege jaren 2000. Haar 'Piece of Me' Las Vegas-residentie liep van 2013 tot 2017."
        }
      },
      {
        question: {
          en: "Which Puerto Rican singer is known for 'Livin' la Vida Loca'?",
          es: "¿Qué cantante puertorriqueño es conocido por 'Livin' la Vida Loca'?",
          de: "Welcher puerto-ricanische Sänger ist bekannt für 'Livin' la Vida Loca'?",
          nl: "Welke Puerto Ricaanse zanger staat bekend om 'Livin' la Vida Loca'?"
        },
        options: [
          { en: "Ricky Martin", es: "Ricky Martin", de: "Ricky Martin", nl: "Ricky Martin" },
          { en: "Enrique Iglesias", es: "Enrique Iglesias", de: "Enrique Iglesias", nl: "Enrique Iglesias" },
          { en: "Marc Anthony", es: "Marc Anthony", de: "Marc Anthony", nl: "Marc Anthony" },
          { en: "Luis Fonsi", es: "Luis Fonsi", de: "Luis Fonsi", nl: "Luis Fonsi" }
        ],
        correct: 0,
        explanation: {
          en: "Ricky Martin's 'Livin' la Vida Loca' (1999) became a global phenomenon and helped launch the 'Latin Pop Explosion' of the late 1990s.",
          es: "La 'Livin' la Vida Loca' (1999) de Ricky Martin se convirtió en un fenómeno global y ayudó a lanzar la 'Explosión del Pop Latino' de finales de los 90.",
          de: "Ricky Martins 'Livin' la Vida Loca' (1999) wurde zu einem globalen Phänomen und half, die 'Latin Pop Explosion' der späten 1990er Jahre zu starten.",
          nl: "Ricky Martin's 'Livin' la Vida Loca' (1999) werd een wereldwijd fenomeen en hielp de 'Latin Pop Explosie' van de late jaren 1990 te lanceren."
        }
      },
      {
        question: {
          en: "Which Canadian singer is known for 'My Heart Will Go On' from Titanic?",
          es: "¿Qué cantante canadiense es conocida por 'My Heart Will Go On' de Titanic?",
          de: "Welche kanadische Sängerin ist bekannt für 'My Heart Will Go On' aus Titanic?",
          nl: "Welke Canadese zangeres staat bekend om 'My Heart Will Go On' uit Titanic?"
        },
        options: [
          { en: "Celine Dion", es: "Celine Dion", de: "Celine Dion", nl: "Celine Dion" },
          { en: "Shania Twain", es: "Shania Twain", de: "Shania Twain", nl: "Shania Twain" },
          { en: "Alanis Morissette", es: "Alanis Morissette", de: "Alanis Morissette", nl: "Alanis Morissette" },
          { en: "Sarah McLachlan", es: "Sarah McLachlan", de: "Sarah McLachlan", nl: "Sarah McLachlan" }
        ],
        correct: 0,
        explanation: {
          en: "Celine Dion's 'My Heart Will Go On' (1997) became one of the best-selling singles of all time. She is one of the best-selling artists in music history with over 200 million records sold.",
          es: "El 'My Heart Will Go On' (1997) de Celine Dion se convirtió en uno de los sencillos más vendidos de todos los tiempos. Es una de las artistas más vendidas en la historia musical con más de 200 millones de discos vendidos.",
          de: "Celine Dions 'My Heart Will Go On' (1997) wurde zu einer der meistverkauften Singles aller Zeiten. Sie ist eine der meistverkauften Künstlerinnen der Musikgeschichte mit über 200 Millionen verkauften Platten.",
          nl: "Celine Dion's 'My Heart Will Go On' (1997) werd een van de bestverkochte singles aller tijden. Ze is een van de bestverkopende artiesten in de muziekgeschiedenis met meer dan 200 miljoen verkochte platen."
        }
      },
      {
        question: {
          en: "Which rap group is known for 'Walk This Way' collaboration with Aerosmith?",
          es: "¿Qué grupo de rap es conocido por la colaboración 'Walk This Way' con Aerosmith?",
          de: "Welche Rap-Gruppe ist bekannt für die 'Walk This Way' Zusammenarbeit mit Aerosmith?",
          nl: "Welke rapgroep staat bekend om de 'Walk This Way' samenwerking met Aerosmith?"
        },
        options: [
          { en: "Run-D.M.C.", es: "Run-D.M.C.", de: "Run-D.M.C.", nl: "Run-D.M.C." },
          { en: "Beastie Boys", es: "Beastie Boys", de: "Beastie Boys", nl: "Beastie Boys" },
          { en: "Salt-N-Pepa", es: "Salt-N-Pepa", de: "Salt-N-Pepa", nl: "Salt-N-Pepa" },
          { en: "Public Enemy", es: "Public Enemy", de: "Public Enemy", nl: "Public Enemy" }
        ],
        correct: 0,
        explanation: {
          en: "Run-D.M.C.'s collaboration with Aerosmith on 'Walk This Way' (1986) was groundbreaking, helping to bring hip-hop to mainstream audiences and bridge the gap between rock and rap.",
          es: "La colaboración de Run-D.M.C. con Aerosmith en 'Walk This Way' (1986) fue revolucionaria, ayudando a llevar el hip-hop a audiencias mainstream y cerrar la brecha entre rock y rap.",
          de: "Run-D.M.C.s Zusammenarbeit mit Aerosmith bei 'Walk This Way' (1986) war bahnbrechend und half, Hip-Hop einem Mainstream-Publikum näherzubringen und die Kluft zwischen Rock und Rap zu überbrücken.",
          nl: "Run-D.M.C.'s samenwerking met Aerosmith op 'Walk This Way' (1986) was baanbrekend en hielp hiphop naar het mainstream publiek te brengen en de kloof tussen rock en rap te overbruggen."
        }
      },
      {
        question: {
          en: "Which singer had a 2018 hit with 'Shallow' from A Star Is Born?",
          es: "¿Qué cantante tuvo un éxito en 2018 con 'Shallow' de A Star Is Born?",
          de: "Welche Sängerin hatte 2018 einen Hit mit 'Shallow' aus A Star Is Born?",
          nl: "Welke zangeres had een hit in 2018 met 'Shallow' uit A Star Is Born?"
        },
        options: [
          { en: "Lady Gaga", es: "Lady Gaga", de: "Lady Gaga", nl: "Lady Gaga" },
          { en: "Ariana Grande", es: "Ariana Grande", de: "Ariana Grande", nl: "Ariana Grande" },
          { en: "Halsey", es: "Halsey", de: "Halsey", nl: "Halsey" },
          { en: "Dua Lipa", es: "Dua Lipa", de: "Dua Lipa", nl: "Dua Lipa" }
        ],
        correct: 0,
        explanation: {
          en: "Lady Gaga and Bradley Cooper's duet 'Shallow' won the Academy Award for Best Original Song. The song topped charts worldwide and showcased Gaga's vocal range.",
          es: "El dueto de Lady Gaga y Bradley Cooper 'Shallow' ganó el Premio de la Academia a Mejor Canción Original. La canción encabezó listas mundialmente y mostró el rango vocal de Gaga.",
          de: "Lady Gagas und Bradley Coopers Duett 'Shallow' gewann den Academy Award für den besten Originalsong. Das Lied führte weltweit Charts an und zeigte Gagas Stimmumfang.",
          nl: "Lady Gaga en Bradley Cooper's duet 'Shallow' won de Academy Award voor Beste Originele Nummer. Het nummer stond wereldwijd bovenaan de hitlijsten en toonde Gaga's vocaal bereik."
        }
      },
      {
        question: {
          en: "Which rapper is married to Beyoncé and founded Roc Nation?",
          es: "¿Qué rapero está casado con Beyoncé y fundó Roc Nation?",
          de: "Welcher Rapper ist mit Beyoncé verheiratet und gründete Roc Nation?",
          nl: "Welke rapper is getrouwd met Beyoncé en richtte Roc Nation op?"
        },
        options: [
          { en: "Jay-Z", es: "Jay-Z", de: "Jay-Z", nl: "Jay-Z" },
          { en: "Kanye West", es: "Kanye West", de: "Kanye West", nl: "Kanye West" },
          { en: "Nas", es: "Nas", de: "Nas", nl: "Nas" },
          { en: "P. Diddy", es: "P. Diddy", de: "P. Diddy", nl: "P. Diddy" }
        ],
        correct: 0,
        explanation: {
          en: "Jay-Z is one of the best-selling music artists and one of the world's best-selling music artists of all time. He founded Roc Nation entertainment company in 2008.",
          es: "Jay-Z es uno de los artistas musicales más vendidos y uno de los artistas musicales más vendidos del mundo de todos los tiempos. Fundó la compañía de entretenimiento Roc Nation en 2008.",
          de: "Jay-Z ist einer der meistverkauften Musikkünstler und einer der weltweit meistverkauften Musikkünstler aller Zeiten. Er gründete 2008 das Unterhaltungsunternehmen Roc Nation.",
          nl: "Jay-Z is een van de bestverkopende muziekartiesten en een van 's werelds bestverkopende muziekartiesten aller tijden. Hij richtte in 2008 het entertainmentbedrijf Roc Nation op."
        }
      },
      {
        question: {
          en: "Which K-pop group became the first to perform at the Grammy Awards?",
          es: "¿Qué grupo de K-pop fue el primero en actuar en los Premios Grammy?",
          de: "Welche K-Pop-Gruppe war die erste, die bei den Grammy Awards auftrat?",
          nl: "Welke K-popgroep was de eerste die optrad bij de Grammy Awards?"
        },
        options: [
          { en: "BTS", es: "BTS", de: "BTS", nl: "BTS" },
          { en: "BLACKPINK", es: "BLACKPINK", de: "BLACKPINK", nl: "BLACKPINK" },
          { en: "EXO", es: "EXO", de: "EXO", nl: "EXO" },
          { en: "TWICE", es: "TWICE", de: "TWICE", nl: "TWICE" }
        ],
        correct: 0,
        explanation: {
          en: "BTS became the first K-pop group to perform at the Grammy Awards in 2020. They have broken numerous records and helped bring K-pop to global mainstream audiences.",
          es: "BTS se convirtió en el primer grupo de K-pop en actuar en los Premios Grammy en 2020. Han roto numerosos récords y ayudado a llevar el K-pop a audiencias mainstream globales.",
          de: "BTS wurde 2020 die erste K-Pop-Gruppe, die bei den Grammy Awards auftrat. Sie haben zahlreiche Rekorde gebrochen und geholfen, K-Pop zu einem globalen Mainstream-Publikum zu bringen.",
          nl: "BTS werd in 2020 de eerste K-popgroep die optrad bij de Grammy Awards. Ze hebben talloze records gebroken en geholpen K-pop naar het wereldwijde mainstream publiek te brengen."
        }
      },
      {
        question: {
          en: "Which reggae artist is known for 'No Woman, No Cry' and 'One Love'?",
          es: "¿Qué artista de reggae es conocido por 'No Woman, No Cry' y 'One Love'?",
          de: "Welcher Reggae-Künstler ist bekannt für 'No Woman, No Cry' und 'One Love'?",
          nl: "Welke reggae-artiest staat bekend om 'No Woman, No Cry' en 'One Love'?"
        },
        options: [
          { en: "Bob Marley", es: "Bob Marley", de: "Bob Marley", nl: "Bob Marley" },
          { en: "Peter Tosh", es: "Peter Tosh", de: "Peter Tosh", nl: "Peter Tosh" },
          { en: "Jimmy Cliff", es: "Jimmy Cliff", de: "Jimmy Cliff", nl: "Jimmy Cliff" },
          { en: "Burning Spear", es: "Burning Spear", de: "Burning Spear", nl: "Burning Spear" }
        ],
        correct: 0,
        explanation: {
          en: "Bob Marley is the most famous reggae artist of all time, bringing the genre to international audiences. His music and message of peace and unity continue to inspire millions worldwide.",
          es: "Bob Marley es el artista de reggae más famoso de todos los tiempos, llevando el género a audiencias internacionales. Su música y mensaje de paz y unidad continúan inspirando millones mundialmente.",
          de: "Bob Marley ist der berühmteste Reggae-Künstler aller Zeiten und brachte das Genre zu internationalem Publikum. Seine Musik und Botschaft von Frieden und Einheit inspirieren weiterhin Millionen weltweit.",
          nl: "Bob Marley is de beroemdste reggae-artiest aller tijden, die het genre naar internationale doelgroepen bracht. Zijn muziek en boodschap van vrede en eenheid blijven miljoenen wereldwijd inspireren."
        }
      },
      {
        question: {
          en: "Which rapper is known for the album 'The Marshall Mathers LP'?",
          es: "¿Qué rapero es conocido por el álbum 'The Marshall Mathers LP'?",
          de: "Welcher Rapper ist bekannt für das Album 'The Marshall Mathers LP'?",
          nl: "Welke rapper staat bekend om het album 'The Marshall Mathers LP'?"
        },
        options: [
          { en: "Eminem", es: "Eminem", de: "Eminem", nl: "Eminem" },
          { en: "50 Cent", es: "50 Cent", de: "50 Cent", nl: "50 Cent" },
          { en: "Dr. Dre", es: "Dr. Dre", de: "Dr. Dre", nl: "Dr. Dre" },
          { en: "Ice Cube", es: "Ice Cube", de: "Ice Cube", nl: "Ice Cube" }
        ],
        correct: 0,
        explanation: {
          en: "'The Marshall Mathers LP' (2000) is one of the fastest-selling albums in hip-hop history. Eminem's technical skill and controversial lyrics made him one of the most influential rappers.",
          es: "'The Marshall Mathers LP' (2000) es uno de los álbumes más vendidos rápidamente en la historia del hip-hop. La habilidad técnica y letras controversiales de Eminem lo convirtieron en uno de los raperos más influyentes.",
          de: "'The Marshall Mathers LP' (2000) ist eines der am schnellsten verkauften Alben der Hip-Hop-Geschichte. Eminems technisches Können und kontroverse Texte machten ihn zu einem der einflussreichsten Rapper.",
          nl: "'The Marshall Mathers LP' (2000) is een van de snelst verkopende albums in de hiphopgeschiedenis. Eminem's technische vaardigheid en controversiële teksten maakten hem tot een van de meest invloedrijke rappers."
        }
      },
      {
        question: {
          en: "Which pop singer is known for 'Umbrella' and 'Diamonds'?",
          es: "¿Qué cantante pop es conocida por 'Umbrella' y 'Diamonds'?",
          de: "Welche Pop-Sängerin ist bekannt für 'Umbrella' und 'Diamonds'?",
          nl: "Welke popzangeres staat bekend om 'Umbrella' en 'Diamonds'?"
        },
        options: [
          { en: "Rihanna", es: "Rihanna", de: "Rihanna", nl: "Rihanna" },
          { en: "Katy Perry", es: "Katy Perry", de: "Katy Perry", nl: "Katy Perry" },
          { en: "Jennifer Lopez", es: "Jennifer Lopez", de: "Jennifer Lopez", nl: "Jennifer Lopez" },
          { en: "Pink", es: "Pink", de: "Pink", nl: "Pink" }
        ],
        correct: 0,
        explanation: {
          en: "Rihanna is one of the best-selling music artists with over 250 million records sold worldwide. She has also built a successful business empire including Fenty Beauty.",
          es: "Rihanna es una de las artistas musicales más vendidas con más de 250 millones de discos vendidos mundialmente. También ha construido un imperio empresarial exitoso incluyendo Fenty Beauty.",
          de: "Rihanna ist eine der meistverkauften Musikkünstlerinnen mit über 250 Millionen weltweit verkauften Platten. Sie hat auch ein erfolgreiches Geschäftsimperium aufgebaut, darunter Fenty Beauty.",
          nl: "Rihanna is een van de bestverkopende muziekartiesten met meer dan 250 miljoen wereldwijd verkochte platen. Ze heeft ook een succesvol zakenimperium opgebouwd, waaronder Fenty Beauty."
        }
      },
      {
        question: {
          en: "Which rock band is known for 'Stairway to Heaven' and 'Whole Lotta Love'?",
          es: "¿Qué banda de rock es conocida por 'Stairway to Heaven' y 'Whole Lotta Love'?",
          de: "Welche Rockband ist bekannt für 'Stairway to Heaven' und 'Whole Lotta Love'?",
          nl: "Welke rockband staat bekend om 'Stairway to Heaven' en 'Whole Lotta Love'?"
        },
        options: [
          { en: "Led Zeppelin", es: "Led Zeppelin", de: "Led Zeppelin", nl: "Led Zeppelin" },
          { en: "Deep Purple", es: "Deep Purple", de: "Deep Purple", nl: "Deep Purple" },
          { en: "Black Sabbath", es: "Black Sabbath", de: "Black Sabbath", nl: "Black Sabbath" },
          { en: "The Who", es: "The Who", de: "The Who", nl: "The Who" }
        ],
        correct: 0,
        explanation: {
          en: "Led Zeppelin is one of the most influential rock bands of all time. 'Stairway to Heaven' is often cited as one of the greatest rock songs ever recorded.",
          es: "Led Zeppelin es una de las bandas de rock más influyentes de todos los tiempos. 'Stairway to Heaven' es a menudo citada como una de las mejores canciones de rock jamás grabadas.",
          de: "Led Zeppelin ist eine der einflussreichsten Rockbands aller Zeiten. 'Stairway to Heaven' wird oft als einer der größten Rocksongs aller Zeiten bezeichnet.",
          nl: "Led Zeppelin is een van de meest invloedrijke rockbands aller tijden. 'Stairway to Heaven' wordt vaak genoemd als een van de grootste rocknummers ooit opgenomen."
        }
      },
      {
        question: {
          en: "Which singer-songwriter is known for 'Wonderwall' and 'Don't Look Back in Anger'?",
          es: "¿Qué cantautor es conocido por 'Wonderwall' y 'Don't Look Back in Anger'?",
          de: "Welcher Singer-Songwriter ist bekannt für 'Wonderwall' und 'Don't Look Back in Anger'?",
          nl: "Welke singer-songwriter staat bekend om 'Wonderwall' en 'Don't Look Back in Anger'?"
        },
        options: [
          { en: "Oasis (Noel Gallagher)", es: "Oasis (Noel Gallagher)", de: "Oasis (Noel Gallagher)", nl: "Oasis (Noel Gallagher)" },
          { en: "Blur", es: "Blur", de: "Blur", nl: "Blur" },
          { en: "Pulp", es: "Pulp", de: "Pulp", nl: "Pulp" },
          { en: "Suede", es: "Suede", de: "Suede", nl: "Suede" }
        ],
        correct: 0,
        explanation: {
          en: "Oasis, with Noel Gallagher as primary songwriter, defined the Britpop movement of the 1990s. 'Wonderwall' became one of the decade's most iconic songs.",
          es: "Oasis, con Noel Gallagher como compositor principal, definió el movimiento Britpop de los años 90. 'Wonderwall' se convirtió en una de las canciones más icónicas de la década.",
          de: "Oasis, mit Noel Gallagher als Hauptsongwriter, definierte die Britpop-Bewegung der 1990er Jahre. 'Wonderwall' wurde zu einem der ikonischsten Songs des Jahrzehnts.",
          nl: "Oasis, met Noel Gallagher als hoofdsongwriter, definieerde de Britpop-beweging van de jaren 1990. 'Wonderwall' werd een van de meest iconische nummers van het decennium."
        }
      ,
      {
        question: {
                  "en": "When was this musician born?",
                  "es": "When was este/a musician born?",
                  "de": "When was diese(r) musician born?",
                  "nl": "When was deze musician born?"
        },
        options: [
          {
                    "en": "Correct year",
                    "es": "Correct year",
                    "de": "Correct year",
                    "nl": "Correct year"
          },
          {
                    "en": "5 years earlier",
                    "es": "5 years earlier",
                    "de": "5 years earlier",
                    "nl": "5 years earlier"
          },
          {
                    "en": "5 years later",
                    "es": "5 years later",
                    "de": "5 years later",
                    "nl": "5 years later"
          },
          {
                    "en": "10 years later",
                    "es": "10 years later",
                    "de": "10 years later",
                    "nl": "10 years later"
          }
        ],
        correct: 0,
        explanation: {
                  "en": "This fact about this musician is historically accurate and well-documented.",
                  "es": "Este hecho sobre this musician es históricamente preciso y bien documentado.",
                  "de": "Diese Tatsache über this musician ist historisch korrekt und gut dokumentiert.",
                  "nl": "Dit feit over this musician is historisch accuraat en goed gedocumenteerd."
        }
      },
      {
        question: {
                  "en": "Where was this musician born?",
                  "es": "Where was este/a musician born?",
                  "de": "Where was diese(r) musician born?",
                  "nl": "Where was deze musician born?"
        },
        options: [
          {
                    "en": "Correct location",
                    "es": "Correct location",
                    "de": "Correct location",
                    "nl": "Correct location"
          },
          {
                    "en": "Neighboring country",
                    "es": "Neighboring country",
                    "de": "Neighboring country",
                    "nl": "Neighboring country"
          },
          {
                    "en": "Different continent",
                    "es": "Different continent",
                    "de": "Different continent",
                    "nl": "Different continent"
          },
          {
                    "en": "Capital city",
                    "es": "Capital city",
                    "de": "Capital city",
                    "nl": "Capital city"
          }
        ],
        correct: 0,
        explanation: {
                  "en": "This fact about this musician is historically accurate and well-documented.",
                  "es": "Este hecho sobre this musician es históricamente preciso y bien documentado.",
                  "de": "Diese Tatsache über this musician ist historisch korrekt und gut dokumentiert.",
                  "nl": "Dit feit over this musician is historisch accuraat en goed gedocumenteerd."
        }
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
