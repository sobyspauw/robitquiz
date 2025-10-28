// Musicians Quiz - Level 2: Easy - Famous Bands and Classic Rock
(function() {
  const level2 = {
    name: {
      en: "Famous Musicians - Easy",
      es: "Músicos Famosos - Fácil",
      de: "Berühmte Musiker - Einfach",
      nl: "Beroemde Muzikanten - Makkelijk"
    },
    questions: [
      {
        question: {
          en: "Which band sang the famous song 'Bohemian Rhapsody'?",
          es: "¿Qué banda cantó la famosa canción 'Bohemian Rhapsody'?",
          de: "Welche Band sang das berühmte Lied 'Bohemian Rhapsody'?",
          nl: "Welke band zong het beroemde lied 'Bohemian Rhapsody'?"
        },
        options: [
          { en: "Queen", es: "Queen", de: "Queen", nl: "Queen" },
          { en: "The Beatles", es: "The Beatles", de: "The Beatles", nl: "The Beatles" },
          { en: "Led Zeppelin", es: "Led Zeppelin", de: "Led Zeppelin", nl: "Led Zeppelin" },
          { en: "The Rolling Stones", es: "The Rolling Stones", de: "The Rolling Stones", nl: "The Rolling Stones" }
        ],
        correct: 0,
        explanation: {
          en: "Queen, fronted by Freddie Mercury, released 'Bohemian Rhapsody' in 1975. The 6-minute operatic rock epic became one of the most iconic songs in rock history.",
          es: "Queen, liderada por Freddie Mercury, lanzó 'Bohemian Rhapsody' en 1975. La épica operística de rock de 6 minutos se convirtió en una de las canciones más icónicas de la historia del rock.",
          de: "Queen, angeführt von Freddie Mercury, veröffentlichte 'Bohemian Rhapsody' 1975. Das 6-minütige Opern-Rock-Epos wurde zu einem der ikonischsten Songs der Rockgeschichte.",
          nl: "Queen, onder leiding van Freddie Mercury, bracht 'Bohemian Rhapsody' uit in 1975. Het 6 minuten durende opera-rock epos werd een van de meest iconische liedjes in de rockgeschiedenis."
        }
      },
      {
        question: {
          en: "Which Beatles album features the song 'Come Together'?",
          es: "¿Qué álbum de The Beatles incluye la canción 'Come Together'?",
          de: "Welches Beatles-Album enthält das Lied 'Come Together'?",
          nl: "Welk Beatles-album bevat het lied 'Come Together'?"
        },
        options: [
          { en: "Abbey Road", es: "Abbey Road", de: "Abbey Road", nl: "Abbey Road" },
          { en: "Sgt. Pepper's", es: "Sgt. Pepper's", de: "Sgt. Pepper's", nl: "Sgt. Pepper's" },
          { en: "The White Album", es: "The White Album", de: "The White Album", nl: "The White Album" },
          { en: "Revolver", es: "Revolver", de: "Revolver", nl: "Revolver" }
        ],
        correct: 0,
        explanation: {
          en: "'Come Together' opens The Beatles' 1969 album 'Abbey Road', their final recorded album together. The song was written by John Lennon.",
          es: "'Come Together' abre el álbum 'Abbey Road' de The Beatles de 1969, su último álbum grabado juntos. La canción fue escrita por John Lennon.",
          de: "'Come Together' eröffnet das 1969er Album 'Abbey Road' von The Beatles, ihr letztes gemeinsam aufgenommenes Album. Das Lied wurde von John Lennon geschrieben.",
          nl: "'Come Together' opent The Beatles' album 'Abbey Road' uit 1969, hun laatste samen opgenomen album. Het lied werd geschreven door John Lennon."
        }
      },
      {
        question: {
          en: "Which band is known for 'Stairway to Heaven'?",
          es: "¿Qué banda es conocida por 'Stairway to Heaven'?",
          de: "Welche Band ist für 'Stairway to Heaven' bekannt?",
          nl: "Welke band staat bekend om 'Stairway to Heaven'?"
        },
        options: [
          { en: "Led Zeppelin", es: "Led Zeppelin", de: "Led Zeppelin", nl: "Led Zeppelin" },
          { en: "Deep Purple", es: "Deep Purple", de: "Deep Purple", nl: "Deep Purple" },
          { en: "Black Sabbath", es: "Black Sabbath", de: "Black Sabbath", nl: "Black Sabbath" },
          { en: "Pink Floyd", es: "Pink Floyd", de: "Pink Floyd", nl: "Pink Floyd" }
        ],
        correct: 0,
        explanation: {
          en: "Led Zeppelin recorded 'Stairway to Heaven' in 1971 for their fourth album. It's often cited as one of the greatest rock songs of all time, featuring Robert Plant's vocals and Jimmy Page's guitar work.",
          es: "Led Zeppelin grabó 'Stairway to Heaven' en 1971 para su cuarto álbum. A menudo se cita como una de las mejores canciones de rock de todos los tiempos, con las voces de Robert Plant y el trabajo de guitarra de Jimmy Page.",
          de: "Led Zeppelin nahm 'Stairway to Heaven' 1971 für ihr viertes Album auf. Es wird oft als einer der besten Rocksongs aller Zeiten bezeichnet, mit Robert Plants Gesang und Jimmy Pages Gitarrenarbeit.",
          nl: "Led Zeppelin nam 'Stairway to Heaven' op in 1971 voor hun vierde album. Het wordt vaak genoemd als een van de beste rockliedjes aller tijden, met Robert Plant's zang en Jimmy Page's gitaarwerk."
        }
      },
      {
        question: {
          en: "Which Australian band recorded 'Highway to Hell'?",
          es: "¿Qué banda australiana grabó 'Highway to Hell'?",
          de: "Welche australische Band nahm 'Highway to Hell' auf?",
          nl: "Welke Australische band nam 'Highway to Hell' op?"
        },
        options: [
          { en: "AC/DC", es: "AC/DC", de: "AC/DC", nl: "AC/DC" },
          { en: "INXS", es: "INXS", de: "INXS", nl: "INXS" },
          { en: "Midnight Oil", es: "Midnight Oil", de: "Midnight Oil", nl: "Midnight Oil" },
          { en: "Men at Work", es: "Men at Work", de: "Men at Work", nl: "Men at Work" }
        ],
        correct: 0,
        explanation: {
          en: "AC/DC released 'Highway to Hell' in 1979 as the title track of their album. It was one of the last songs recorded with original lead singer Bon Scott before his death in 1980.",
          es: "AC/DC lanzó 'Highway to Hell' en 1979 como la canción principal de su álbum. Fue una de las últimas canciones grabadas con el cantante principal original Bon Scott antes de su muerte en 1980.",
          de: "AC/DC veröffentlichte 'Highway to Hell' 1979 als Titeltrack ihres Albums. Es war eines der letzten Lieder, die mit dem ursprünglichen Leadsänger Bon Scott vor seinem Tod 1980 aufgenommen wurden.",
          nl: "AC/DC bracht 'Highway to Hell' uit in 1979 als titelsong van hun album. Het was een van de laatste liedjes opgenomen met originele leadzanger Bon Scott voor zijn dood in 1980."
        }
      },
      {
        question: {
          en: "Who was the lead singer of the band Queen?",
          es: "¿Quién fue el cantante principal de la banda Queen?",
          de: "Wer war der Leadsänger der Band Queen?",
          nl: "Wie was de zanger van de band Queen?"
        },
        options: [
          { en: "Freddie Mercury", es: "Freddie Mercury", de: "Freddie Mercury", nl: "Freddie Mercury" },
          { en: "David Bowie", es: "David Bowie", de: "David Bowie", nl: "David Bowie" },
          { en: "Elton John", es: "Elton John", de: "Elton John", nl: "Elton John" },
          { en: "Rod Stewart", es: "Rod Stewart", de: "Rod Stewart", nl: "Rod Stewart" }
        ],
        correct: 0,
        explanation: {
          en: "Freddie Mercury was Queen's charismatic lead vocalist from 1970 until his death in 1991. Born Farrokh Bulsara, he's considered one of the greatest performers in rock history.",
          es: "Freddie Mercury fue el carismático vocalista principal de Queen desde 1970 hasta su muerte en 1991. Nacido Farrokh Bulsara, es considerado uno de los mejores intérpretes en la historia del rock.",
          de: "Freddie Mercury war Queens charismatischer Leadsänger von 1970 bis zu seinem Tod 1991. Geboren als Farrokh Bulsara, gilt er als einer der größten Performer der Rockgeschichte.",
          nl: "Freddie Mercury was Queen's charismatische leadzanger van 1970 tot zijn dood in 1991. Geboren als Farrokh Bulsara, wordt hij beschouwd als een van de beste performers in de rockgeschiedenis."
        }
      },
      {
        question: {
          en: "Which band recorded the album 'Dark Side of the Moon'?",
          es: "¿Qué banda grabó el álbum 'Dark Side of the Moon'?",
          de: "Welche Band nahm das Album 'Dark Side of the Moon' auf?",
          nl: "Welke band nam het album 'Dark Side of the Moon' op?"
        },
        options: [
          { en: "Pink Floyd", es: "Pink Floyd", de: "Pink Floyd", nl: "Pink Floyd" },
          { en: "The Who", es: "The Who", de: "The Who", nl: "The Who" },
          { en: "Genesis", es: "Genesis", de: "Genesis", nl: "Genesis" },
          { en: "Yes", es: "Yes", de: "Yes", nl: "Yes" }
        ],
        correct: 0,
        explanation: {
          en: "Pink Floyd released 'Dark Side of the Moon' in 1973. It became one of the best-selling albums of all time and spent 14 years on the Billboard charts, exploring themes of mental illness and human experience.",
          es: "Pink Floyd lanzó 'Dark Side of the Moon' en 1973. Se convirtió en uno de los álbumes más vendidos de todos los tiempos y pasó 14 años en las listas de Billboard, explorando temas de enfermedad mental y experiencia humana.",
          de: "Pink Floyd veröffentlichte 'Dark Side of the Moon' 1973. Es wurde eines der meistverkauften Alben aller Zeiten und stand 14 Jahre in den Billboard-Charts, dabei Themen wie Geisteskrankheit und menschliche Erfahrung erforschend.",
          nl: "Pink Floyd bracht 'Dark Side of the Moon' uit in 1973. Het werd een van de bestverkopende albums aller tijden en stond 14 jaar in de Billboard-hitlijsten, waarbij thema's als geestesziekte en menselijke ervaring werden verkend."
        }
      },
      {
        question: {
          en: "Which British band sang '(I Can't Get No) Satisfaction'?",
          es: "¿Qué banda británica cantó '(I Can't Get No) Satisfaction'?",
          de: "Welche britische Band sang '(I Can't Get No) Satisfaction'?",
          nl: "Welke Britse band zong '(I Can't Get No) Satisfaction'?"
        },
        options: [
          { en: "The Rolling Stones", es: "The Rolling Stones", de: "The Rolling Stones", nl: "The Rolling Stones" },
          { en: "The Kinks", es: "The Kinks", de: "The Kinks", nl: "The Kinks" },
          { en: "The Animals", es: "The Animals", de: "The Animals", nl: "The Animals" },
          { en: "The Yardbirds", es: "The Yardbirds", de: "The Yardbirds", nl: "The Yardbirds" }
        ],
        correct: 0,
        explanation: {
          en: "The Rolling Stones released '(I Can't Get No) Satisfaction' in 1965. Written by Mick Jagger and Keith Richards, it became their first number-one hit in the United States.",
          es: "The Rolling Stones lanzó '(I Can't Get No) Satisfaction' en 1965. Escrita por Mick Jagger y Keith Richards, se convirtió en su primer éxito número uno en Estados Unidos.",
          de: "The Rolling Stones veröffentlichten '(I Can't Get No) Satisfaction' 1965. Geschrieben von Mick Jagger und Keith Richards, wurde es ihr erster Nummer-eins-Hit in den Vereinigten Staaten.",
          nl: "The Rolling Stones bracht '(I Can't Get No) Satisfaction' uit in 1965. Geschreven door Mick Jagger en Keith Richards, werd het hun eerste nummer-één hit in de Verenigde Staten."
        }
      },
      {
        question: {
          en: "Which band recorded 'Hotel California'?",
          es: "¿Qué banda grabó 'Hotel California'?",
          de: "Welche Band nahm 'Hotel California' auf?",
          nl: "Welke band nam 'Hotel California' op?"
        },
        options: [
          { en: "Eagles", es: "Eagles", de: "Eagles", nl: "Eagles" },
          { en: "Fleetwood Mac", es: "Fleetwood Mac", de: "Fleetwood Mac", nl: "Fleetwood Mac" },
          { en: "America", es: "America", de: "America", nl: "America" },
          { en: "Crosby, Stills & Nash", es: "Crosby, Stills & Nash", de: "Crosby, Stills & Nash", nl: "Crosby, Stills & Nash" }
        ],
        correct: 0,
        explanation: {
          en: "Eagles recorded 'Hotel California' in 1976. The song became their signature hit and won a Grammy Award for Record of the Year, featuring iconic guitar solos by Don Felder and Joe Walsh.",
          es: "Eagles grabó 'Hotel California' en 1976. La canción se convirtió en su éxito distintivo y ganó un premio Grammy al Disco del Año, con solos de guitarra icónicos de Don Felder y Joe Walsh.",
          de: "Eagles nahmen 'Hotel California' 1976 auf. Das Lied wurde ihr charakteristischer Hit und gewann einen Grammy Award für Record of the Year, mit ikonischen Gitarrensoli von Don Felder und Joe Walsh.",
          nl: "Eagles nam 'Hotel California' op in 1976. Het lied werd hun kenmerkende hit en won een Grammy Award voor Record of the Year, met iconische gitaarsolo's van Don Felder en Joe Walsh."
        }
      },
      {
        question: {
          en: "Who was the drummer for The Beatles?",
          es: "¿Quién fue el baterista de The Beatles?",
          de: "Wer war der Schlagzeuger von The Beatles?",
          nl: "Wie was de drummer van The Beatles?"
        },
        options: [
          { en: "Ringo Starr", es: "Ringo Starr", de: "Ringo Starr", nl: "Ringo Starr" },
          { en: "Pete Best", es: "Pete Best", de: "Pete Best", nl: "Pete Best" },
          { en: "Stuart Sutcliffe", es: "Stuart Sutcliffe", de: "Stuart Sutcliffe", nl: "Stuart Sutcliffe" },
          { en: "George Martin", es: "George Martin", de: "George Martin", nl: "George Martin" }
        ],
        correct: 0,
        explanation: {
          en: "Ringo Starr (born Richard Starkey) joined The Beatles in 1962, replacing Pete Best. He remained the band's drummer until they disbanded in 1970, contributing his distinctive style to their sound.",
          es: "Ringo Starr (nacido Richard Starkey) se unió a The Beatles en 1962, reemplazando a Pete Best. Siguió siendo el baterista de la banda hasta que se disolvieron en 1970, contribuyendo con su estilo distintivo a su sonido.",
          de: "Ringo Starr (geboren als Richard Starkey) trat 1962 den Beatles bei und ersetzte Pete Best. Er blieb der Schlagzeuger der Band, bis sie sich 1970 auflösten, und trug seinen charakteristischen Stil zu ihrem Sound bei.",
          nl: "Ringo Starr (geboren als Richard Starkey) sloot zich aan bij The Beatles in 1962, ter vervanging van Pete Best. Hij bleef de drummer van de band tot ze uiteengingen in 1970, waarbij hij zijn onderscheidende stijl aan hun geluid bijdroeg."
        }
      },
      {
        question: {
          en: "Which band sang 'Sweet Child O' Mine'?",
          es: "¿Qué banda cantó 'Sweet Child O' Mine'?",
          de: "Welche Band sang 'Sweet Child O' Mine'?",
          nl: "Welke band zong 'Sweet Child O' Mine'?"
        },
        options: [
          { en: "Guns N' Roses", es: "Guns N' Roses", de: "Guns N' Roses", nl: "Guns N' Roses" },
          { en: "Bon Jovi", es: "Bon Jovi", de: "Bon Jovi", nl: "Bon Jovi" },
          { en: "Def Leppard", es: "Def Leppard", de: "Def Leppard", nl: "Def Leppard" },
          { en: "Mötley Crüe", es: "Mötley Crüe", de: "Mötley Crüe", nl: "Mötley Crüe" }
        ],
        correct: 0,
        explanation: {
          en: "Guns N' Roses released 'Sweet Child O' Mine' in 1987 from their debut album 'Appetite for Destruction'. It became their first and only number-one hit, featuring Slash's iconic guitar riff.",
          es: "Guns N' Roses lanzó 'Sweet Child O' Mine' en 1987 de su álbum debut 'Appetite for Destruction'. Se convirtió en su primer y único éxito número uno, con el riff de guitarra icónico de Slash.",
          de: "Guns N' Roses veröffentlichten 'Sweet Child O' Mine' 1987 von ihrem Debütalbum 'Appetite for Destruction'. Es wurde ihr erster und einziger Nummer-eins-Hit, mit Slashs ikonischem Gitarrenriff.",
          nl: "Guns N' Roses bracht 'Sweet Child O' Mine' uit in 1987 van hun debuutalbum 'Appetite for Destruction'. Het werd hun eerste en enige nummer-één hit, met Slash's iconische gitaarriff."
        }
      },
      {
        question: {
          en: "Which band is known for 'We Will Rock You' and 'We Are the Champions'?",
          es: "¿Qué banda es conocida por 'We Will Rock You' y 'We Are the Champions'?",
          de: "Welche Band ist für 'We Will Rock You' und 'We Are the Champions' bekannt?",
          nl: "Welke band staat bekend om 'We Will Rock You' en 'We Are the Champions'?"
        },
        options: [
          { en: "Queen", es: "Queen", de: "Queen", nl: "Queen" },
          { en: "Kiss", es: "Kiss", de: "Kiss", nl: "Kiss" },
          { en: "Journey", es: "Journey", de: "Journey", nl: "Journey" },
          { en: "Foreigner", es: "Foreigner", de: "Foreigner", nl: "Foreigner" }
        ],
        correct: 0,
        explanation: {
          en: "Queen recorded both 'We Will Rock You' and 'We Are the Champions' in 1977 for their album 'News of the World'. The songs are often played together and have become sports anthems worldwide.",
          es: "Queen grabó tanto 'We Will Rock You' como 'We Are the Champions' en 1977 para su álbum 'News of the World'. Las canciones a menudo se tocan juntas y se han convertido en himnos deportivos en todo el mundo.",
          de: "Queen nahm sowohl 'We Will Rock You' als auch 'We Are the Champions' 1977 für ihr Album 'News of the World' auf. Die Songs werden oft zusammen gespielt und sind zu Sport-Hymnen weltweit geworden.",
          nl: "Queen nam zowel 'We Will Rock You' als 'We Are the Champions' op in 1977 voor hun album 'News of the World'. De liedjes worden vaak samen gespeeld en zijn wereldwijd sporthymnes geworden."
        }
      },
      {
        question: {
          en: "Which band recorded 'Smoke on the Water'?",
          es: "¿Qué banda grabó 'Smoke on the Water'?",
          de: "Welche Band nahm 'Smoke on the Water' auf?",
          nl: "Welke band nam 'Smoke on the Water' op?"
        },
        options: [
          { en: "Deep Purple", es: "Deep Purple", de: "Deep Purple", nl: "Deep Purple" },
          { en: "Black Sabbath", es: "Black Sabbath", de: "Black Sabbath", nl: "Black Sabbath" },
          { en: "Rainbow", es: "Rainbow", de: "Rainbow", nl: "Rainbow" },
          { en: "Whitesnake", es: "Whitesnake", de: "Whitesnake", nl: "Whitesnake" }
        ],
        correct: 0,
        explanation: {
          en: "Deep Purple recorded 'Smoke on the Water' in 1972 for their album 'Machine Head'. The song's famous riff is based on a true story about a fire at a Frank Zappa concert in Switzerland.",
          es: "Deep Purple grabó 'Smoke on the Water' en 1972 para su álbum 'Machine Head'. El famoso riff de la canción se basa en una historia real sobre un incendio en un concierto de Frank Zappa en Suiza.",
          de: "Deep Purple nahm 'Smoke on the Water' 1972 für ihr Album 'Machine Head' auf. Das berühmte Riff des Songs basiert auf einer wahren Geschichte über ein Feuer bei einem Frank Zappa-Konzert in der Schweiz.",
          nl: "Deep Purple nam 'Smoke on the Water' op in 1972 voor hun album 'Machine Head'. De beroemde riff van het lied is gebaseerd op een waargebeurd verhaal over een brand bij een Frank Zappa-concert in Zwitserland."
        }
      },
      {
        question: {
          en: "Which American band sang 'Don't Stop Believin''?",
          es: "¿Qué banda estadounidense cantó 'Don't Stop Believin''?",
          de: "Welche amerikanische Band sang 'Don't Stop Believin''?",
          nl: "Welke Amerikaanse band zong 'Don't Stop Believin''?"
        },
        options: [
          { en: "Journey", es: "Journey", de: "Journey", nl: "Journey" },
          { en: "Boston", es: "Boston", de: "Boston", nl: "Boston" },
          { en: "Toto", es: "Toto", de: "Toto", nl: "Toto" },
          { en: "REO Speedwagon", es: "REO Speedwagon", de: "REO Speedwagon", nl: "REO Speedwagon" }
        ],
        correct: 0,
        explanation: {
          en: "Journey released 'Don't Stop Believin'' in 1981 from their album 'Escape'. Featuring Steve Perry's powerful vocals, it became one of the most popular rock anthems and was featured prominently in 'The Sopranos' finale.",
          es: "Journey lanzó 'Don't Stop Believin'' en 1981 de su álbum 'Escape'. Con las poderosas voces de Steve Perry, se convirtió en uno de los himnos de rock más populares y apareció prominentemente en el final de 'The Sopranos'.",
          de: "Journey veröffentlichte 'Don't Stop Believin'' 1981 von ihrem Album 'Escape'. Mit Steve Perrys kraftvollem Gesang wurde es zu einer der beliebtesten Rock-Hymnen und war prominent im 'The Sopranos'-Finale zu hören.",
          nl: "Journey bracht 'Don't Stop Believin'' uit in 1981 van hun album 'Escape'. Met Steve Perry's krachtige zang werd het een van de populairste rockhymnes en werd prominent gebruikt in de finale van 'The Sopranos'."
        }
      },
      {
        question: {
          en: "Which band recorded 'Paranoid' and is considered pioneers of heavy metal?",
          es: "¿Qué banda grabó 'Paranoid' y es considerada pionera del heavy metal?",
          de: "Welche Band nahm 'Paranoid' auf und gilt als Pionier des Heavy Metal?",
          nl: "Welke band nam 'Paranoid' op en wordt beschouwd als pionier van heavy metal?"
        },
        options: [
          { en: "Black Sabbath", es: "Black Sabbath", de: "Black Sabbath", nl: "Black Sabbath" },
          { en: "Iron Maiden", es: "Iron Maiden", de: "Iron Maiden", nl: "Iron Maiden" },
          { en: "Judas Priest", es: "Judas Priest", de: "Judas Priest", nl: "Judas Priest" },
          { en: "Motörhead", es: "Motörhead", de: "Motörhead", nl: "Motörhead" }
        ],
        correct: 0,
        explanation: {
          en: "Black Sabbath released 'Paranoid' in 1970, the title track of their second album. Led by Ozzy Osbourne's vocals and Tony Iommi's heavy guitar riffs, they essentially created the heavy metal genre.",
          es: "Black Sabbath lanzó 'Paranoid' en 1970, la canción principal de su segundo álbum. Liderados por las voces de Ozzy Osbourne y los riffs pesados de guitarra de Tony Iommi, esencialmente crearon el género del heavy metal.",
          de: "Black Sabbath veröffentlichte 'Paranoid' 1970, den Titeltrack ihres zweiten Albums. Angeführt von Ozzy Osbournes Gesang und Tony Iommis schweren Gitarrenriffs, schufen sie im Wesentlichen das Heavy Metal-Genre.",
          nl: "Black Sabbath bracht 'Paranoid' uit in 1970, de titelsong van hun tweede album. Geleid door Ozzy Osbourne's zang en Tony Iommi's zware gitaarriffs, creëerden ze in wezen het heavy metal genre."
        }
      },
      {
        question: {
          en: "Which Irish band recorded 'Sunday Bloody Sunday' and 'With or Without You'?",
          es: "¿Qué banda irlandesa grabó 'Sunday Bloody Sunday' y 'With or Without You'?",
          de: "Welche irische Band nahm 'Sunday Bloody Sunday' und 'With or Without You' auf?",
          nl: "Welke Ierse band nam 'Sunday Bloody Sunday' en 'With or Without You' op?"
        },
        options: [
          { en: "U2", es: "U2", de: "U2", nl: "U2" },
          { en: "The Cranberries", es: "The Cranberries", de: "The Cranberries", nl: "The Cranberries" },
          { en: "Thin Lizzy", es: "Thin Lizzy", de: "Thin Lizzy", nl: "Thin Lizzy" },
          { en: "Sinéad O'Connor", es: "Sinéad O'Connor", de: "Sinéad O'Connor", nl: "Sinéad O'Connor" }
        ],
        correct: 0,
        explanation: {
          en: "U2, led by Bono's distinctive vocals and The Edge's atmospheric guitar, recorded both songs. 'Sunday Bloody Sunday' (1983) addresses political conflict, while 'With or Without You' (1987) became their first US #1 hit.",
          es: "U2, liderada por las voces distintivas de Bono y la guitarra atmosférica de The Edge, grabó ambas canciones. 'Sunday Bloody Sunday' (1983) aborda el conflicto político, mientras que 'With or Without You' (1987) se convirtió en su primer éxito #1 en EE.UU.",
          de: "U2, angeführt von Bonos charakteristischem Gesang und The Edges atmosphärischer Gitarre, nahm beide Songs auf. 'Sunday Bloody Sunday' (1983) behandelt politische Konflikte, während 'With or Without You' (1987) ihr erster US-#1-Hit wurde.",
          nl: "U2, geleid door Bono's onderscheidende zang en The Edge's atmosferische gitaar, nam beide liedjes op. 'Sunday Bloody Sunday' (1983) behandelt politiek conflict, terwijl 'With or Without You' (1987) hun eerste US #1 hit werd."
        }
      },
      {
        question: {
          en: "Which band sang 'More Than a Feeling' and is from Boston?",
          es: "¿Qué banda cantó 'More Than a Feeling' y es de Boston?",
          de: "Welche Band sang 'More Than a Feeling' und kommt aus Boston?",
          nl: "Welke band zong 'More Than a Feeling' en komt uit Boston?"
        },
        options: [
          { en: "Boston", es: "Boston", de: "Boston", nl: "Boston" },
          { en: "Aerosmith", es: "Aerosmith", de: "Aerosmith", nl: "Aerosmith" },
          { en: "The Cars", es: "The Cars", de: "The Cars", nl: "The Cars" },
          { en: "J. Geils Band", es: "J. Geils Band", de: "J. Geils Band", nl: "J. Geils Band" }
        ],
        correct: 0,
        explanation: {
          en: "Boston released 'More Than a Feeling' in 1976 from their self-titled debut album. The band, led by Tom Scholz's innovative guitar sound and production, helped define the arena rock sound of the 1970s.",
          es: "Boston lanzó 'More Than a Feeling' en 1976 de su álbum debut homónimo. La banda, liderada por el sonido innovador de guitarra y producción de Tom Scholz, ayudó a definir el sonido del rock de estadio de los años 70.",
          de: "Boston veröffentlichte 'More Than a Feeling' 1976 von ihrem selbstbetitelten Debütalbum. Die Band, angeführt von Tom Scholz' innovativem Gitarrensound und Produktion, half dabei, den Arena-Rock-Sound der 1970er Jahre zu definieren.",
          nl: "Boston bracht 'More Than a Feeling' uit in 1976 van hun gelijknamige debuutalbum. De band, geleid door Tom Scholz's innovatieve gitaargeluid en productie, hielp het arena rock geluid van de jaren '70 definiëren."
        }
      },
      {
        question: {
          en: "Which band recorded 'Livin' on a Prayer' and 'You Give Love a Bad Name'?",
          es: "¿Qué banda grabó 'Livin' on a Prayer' y 'You Give Love a Bad Name'?",
          de: "Welche Band nahm 'Livin' on a Prayer' und 'You Give Love a Bad Name' auf?",
          nl: "Welke band nam 'Livin' on a Prayer' en 'You Give Love a Bad Name' op?"
        },
        options: [
          { en: "Bon Jovi", es: "Bon Jovi", de: "Bon Jovi", nl: "Bon Jovi" },
          { en: "Def Leppard", es: "Def Leppard", de: "Def Leppard", nl: "Def Leppard" },
          { en: "Whitesnake", es: "Whitesnake", de: "Whitesnake", nl: "Whitesnake" },
          { en: "Europe", es: "Europe", de: "Europe", nl: "Europe" }
        ],
        correct: 0,
        explanation: {
          en: "Bon Jovi recorded both hits in 1986 for their album 'Slippery When Wet'. Led by Jon Bon Jovi's vocals and Richie Sambora's guitar, they became one of the biggest rock bands of the 1980s.",
          es: "Bon Jovi grabó ambos éxitos en 1986 para su álbum 'Slippery When Wet'. Liderados por las voces de Jon Bon Jovi y la guitarra de Richie Sambora, se convirtieron en una de las bandas de rock más grandes de los años 80.",
          de: "Bon Jovi nahm beide Hits 1986 für ihr Album 'Slippery When Wet' auf. Angeführt von Jon Bon Jovis Gesang und Richie Samboras Gitarre, wurden sie zu einer der größten Rockbands der 1980er Jahre.",
          nl: "Bon Jovi nam beide hits op in 1986 voor hun album 'Slippery When Wet'. Geleid door Jon Bon Jovi's zang en Richie Sambora's gitaar, werden ze een van de grootste rockbands van de jaren '80."
        }
      },
      {
        question: {
          en: "Which British band sang 'Another Brick in the Wall'?",
          es: "¿Qué banda británica cantó 'Another Brick in the Wall'?",
          de: "Welche britische Band sang 'Another Brick in the Wall'?",
          nl: "Welke Britse band zong 'Another Brick in the Wall'?"
        },
        options: [
          { en: "Pink Floyd", es: "Pink Floyd", de: "Pink Floyd", nl: "Pink Floyd" },
          { en: "The Wall", es: "The Wall", de: "The Wall", nl: "The Wall" },
          { en: "King Crimson", es: "King Crimson", de: "King Crimson", nl: "King Crimson" },
          { en: "Jethro Tull", es: "Jethro Tull", de: "Jethro Tull", nl: "Jethro Tull" }
        ],
        correct: 0,
        explanation: {
          en: "Pink Floyd recorded 'Another Brick in the Wall (Part II)' in 1979 for their rock opera album 'The Wall'. The song, featuring children singing the chorus, became their only number-one hit in the US and UK.",
          es: "Pink Floyd grabó 'Another Brick in the Wall (Part II)' en 1979 para su álbum de ópera rock 'The Wall'. La canción, con niños cantando el coro, se convirtió en su único éxito número uno en EE.UU. y Reino Unido.",
          de: "Pink Floyd nahm 'Another Brick in the Wall (Part II)' 1979 für ihr Rockoper-Album 'The Wall' auf. Das Lied, das Kinder beim Singen des Chors zeigt, wurde ihr einziger Nummer-eins-Hit in den USA und Großbritannien.",
          nl: "Pink Floyd nam 'Another Brick in the Wall (Part II)' op in 1979 voor hun rockopera-album 'The Wall'. Het lied, met kinderen die het refrein zingen, werd hun enige nummer-één hit in de VS en het VK."
        }
      },
      {
        question: {
          en: "Which band recorded 'Free Bird' and 'Sweet Home Alabama'?",
          es: "¿Qué banda grabó 'Free Bird' y 'Sweet Home Alabama'?",
          de: "Welche Band nahm 'Free Bird' und 'Sweet Home Alabama' auf?",
          nl: "Welke band nam 'Free Bird' en 'Sweet Home Alabama' op?"
        },
        options: [
          { en: "Lynyrd Skynyrd", es: "Lynyrd Skynyrd", de: "Lynyrd Skynyrd", nl: "Lynyrd Skynyrd" },
          { en: "The Allman Brothers Band", es: "The Allman Brothers Band", de: "The Allman Brothers Band", nl: "The Allman Brothers Band" },
          { en: "ZZ Top", es: "ZZ Top", de: "ZZ Top", nl: "ZZ Top" },
          { en: "Molly Hatchet", es: "Molly Hatchet", de: "Molly Hatchet", nl: "Molly Hatchet" }
        ],
        correct: 0,
        explanation: {
          en: "Lynyrd Skynyrd recorded both Southern rock classics. 'Free Bird' (1973) features an iconic 9-minute guitar solo, while 'Sweet Home Alabama' (1974) became their signature song, famously responding to Neil Young's 'Southern Man'.",
          es: "Lynyrd Skynyrd grabó ambos clásicos del rock sureño. 'Free Bird' (1973) presenta un solo de guitarra icónico de 9 minutos, mientras que 'Sweet Home Alabama' (1974) se convirtió en su canción distintiva, respondiendo famosamente a 'Southern Man' de Neil Young.",
          de: "Lynyrd Skynyrd nahm beide Southern-Rock-Klassiker auf. 'Free Bird' (1973) zeigt ein ikonisches 9-minütiges Gitarrensolo, während 'Sweet Home Alabama' (1974) ihr charakteristischer Song wurde, als berühmte Antwort auf Neil Youngs 'Southern Man'.",
          nl: "Lynyrd Skynyrd nam beide Southern rock klassiekers op. 'Free Bird' (1973) bevat een iconische 9-minuten gitaarsolo, terwijl 'Sweet Home Alabama' (1974) hun kenmerkende lied werd, als beroemde reactie op Neil Young's 'Southern Man'."
        }
      },
      {
        question: {
          en: "Which Canadian trio recorded 'Tom Sawyer' and 'Limelight'?",
          es: "¿Qué trío canadiense grabó 'Tom Sawyer' y 'Limelight'?",
          de: "Welches kanadische Trio nahm 'Tom Sawyer' und 'Limelight' auf?",
          nl: "Welk Canadees trio nam 'Tom Sawyer' en 'Limelight' op?"
        },
        options: [
          { en: "Rush", es: "Rush", de: "Rush", nl: "Rush" },
          { en: "Triumph", es: "Triumph", de: "Triumph", nl: "Triumph" },
          { en: "Bachman-Turner Overdrive", es: "Bachman-Turner Overdrive", de: "Bachman-Turner Overdrive", nl: "Bachman-Turner Overdrive" },
          { en: "The Guess Who", es: "The Guess Who", de: "The Guess Who", nl: "The Guess Who" }
        ],
        correct: 0,
        explanation: {
          en: "Rush recorded both songs for their 1981 album 'Moving Pictures'. The progressive rock trio, featuring Geddy Lee's distinctive vocals, Alex Lifeson's guitar, and Neil Peart's virtuosic drumming, became one of Canada's most successful rock bands.",
          es: "Rush grabó ambas canciones para su álbum de 1981 'Moving Pictures'. El trío de rock progresivo, con las voces distintivas de Geddy Lee, la guitarra de Alex Lifeson y la batería virtuosa de Neil Peart, se convirtió en una de las bandas de rock más exitosas de Canadá.",
          de: "Rush nahm beide Songs für ihr 1981er Album 'Moving Pictures' auf. Das Progressive-Rock-Trio, mit Geddy Lees charakteristischem Gesang, Alex Lifesons Gitarre und Neil Pearts virtuosem Schlagzeugspiel, wurde zu einer der erfolgreichsten Rockbands Kanadas.",
          nl: "Rush nam beide liedjes op voor hun 1981 album 'Moving Pictures'. Het progressieve rock trio, met Geddy Lee's onderscheidende zang, Alex Lifeson's gitaar en Neil Peart's virtuoze drumspel, werd een van Canada's meest succesvolle rockbands."
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