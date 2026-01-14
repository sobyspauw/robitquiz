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
      },
      {
        question: {
          en: "Which British singer is known as 'The Rocket Man'?",
          es: "¿Qué cantante británico es conocido como 'The Rocket Man'?",
          de: "Welcher britische Sänger ist als 'The Rocket Man' bekannt?",
          nl: "Welke Britse zanger staat bekend als 'The Rocket Man'?"
        },
        options: [
          { en: "Elton John", es: "Elton John", de: "Elton John", nl: "Elton John" },
          { en: "David Bowie", es: "David Bowie", de: "David Bowie", nl: "David Bowie" },
          { en: "Rod Stewart", es: "Rod Stewart", de: "Rod Stewart", nl: "Rod Stewart" },
          { en: "George Michael", es: "George Michael", de: "George Michael", nl: "George Michael" }
        ],
        correct: 0,
        explanation: {
          en: "Elton John is nicknamed 'The Rocket Man' after his 1972 hit single 'Rocket Man'. With flamboyant stage presence and Bernie Taupin's lyrics, he's sold over 300 million records worldwide.",
          es: "Elton John es apodado 'The Rocket Man' por su sencillo exitoso de 1972 'Rocket Man'. Con su presencia escénica extravagante y las letras de Bernie Taupin, ha vendido más de 300 millones de discos en todo el mundo.",
          de: "Elton John wird 'The Rocket Man' genannt, nach seiner Hit-Single 'Rocket Man' von 1972. Mit extravaganter Bühnenpräsenz und Bernie Taupins Texten hat er weltweit über 300 Millionen Platten verkauft.",
          nl: "Elton John wordt 'The Rocket Man' genoemd naar zijn hit single 'Rocket Man' uit 1972. Met flamboyante podiumpresen­tatie en Bernie Taupin's teksten heeft hij wereldwijd meer dan 300 miljoen platen verkocht."
        }
      },
      {
        question: {
          en: "Which band sang 'Africa' and 'Rosanna'?",
          es: "¿Qué banda cantó 'Africa' y 'Rosanna'?",
          de: "Welche Band sang 'Africa' und 'Rosanna'?",
          nl: "Welke band zong 'Africa' en 'Rosanna'?"
        },
        options: [
          { en: "Toto", es: "Toto", de: "Toto", nl: "Toto" },
          { en: "Journey", es: "Journey", de: "Journey", nl: "Journey" },
          { en: "Foreigner", es: "Foreigner", de: "Foreigner", nl: "Foreigner" },
          { en: "Kansas", es: "Kansas", de: "Kansas", nl: "Kansas" }
        ],
        correct: 0,
        explanation: {
          en: "Toto recorded both hits for their 1982 album 'Toto IV'. The band, composed of highly skilled session musicians, won six Grammy Awards that year including Album of the Year and Record of the Year for 'Rosanna'.",
          es: "Toto grabó ambos éxitos para su álbum de 1982 'Toto IV'. La banda, compuesta por músicos de sesión altamente capacitados, ganó seis premios Grammy ese año, incluido Álbum del Año y Disco del Año por 'Rosanna'.",
          de: "Toto nahm beide Hits für ihr 1982er Album 'Toto IV' auf. Die Band, bestehend aus hochqualifizierten Sessionmusikern, gewann in diesem Jahr sechs Grammy Awards, darunter Album und Record of the Year für 'Rosanna'.",
          nl: "Toto nam beide hits op voor hun 1982 album 'Toto IV'. De band, bestaande uit zeer bekwame sessiemuzikanten, won dat jaar zes Grammy Awards waaronder Album of the Year en Record of the Year voor 'Rosanna'."
        }
      },
      {
        question: {
          en: "Which singer is known for 'Purple Rain' and 'When Doves Cry'?",
          es: "¿Qué cantante es conocido por 'Purple Rain' y 'When Doves Cry'?",
          de: "Welcher Sänger ist für 'Purple Rain' und 'When Doves Cry' bekannt?",
          nl: "Welke zanger staat bekend om 'Purple Rain' en 'When Doves Cry'?"
        },
        options: [
          { en: "Prince", es: "Prince", de: "Prince", nl: "Prince" },
          { en: "Michael Jackson", es: "Michael Jackson", de: "Michael Jackson", nl: "Michael Jackson" },
          { en: "Stevie Wonder", es: "Stevie Wonder", de: "Stevie Wonder", nl: "Stevie Wonder" },
          { en: "Rick James", es: "Rick James", de: "Rick James", nl: "Rick James" }
        ],
        correct: 0,
        explanation: {
          en: "Prince released both songs in 1984 for his 'Purple Rain' album and film. A multi-instrumentalist and virtuoso performer, Prince wrote, produced, and played most instruments on his recordings throughout his career.",
          es: "Prince lanzó ambas canciones en 1984 para su álbum y película 'Purple Rain'. Un multiinstrumentista y intérprete virtuoso, Prince escribió, produjo y tocó la mayoría de los instrumentos en sus grabaciones a lo largo de su carrera.",
          de: "Prince veröffentlichte beide Songs 1984 für sein 'Purple Rain'-Album und Film. Ein Multi-Instrumentalist und virtuoser Performer, Prince schrieb, produzierte und spielte die meisten Instrumente auf seinen Aufnahmen während seiner gesamten Karriere.",
          nl: "Prince bracht beide liedjes uit in 1984 voor zijn 'Purple Rain' album en film. Een multi-instrumentalist en virtuoze performer, Prince schreef, produceerde en bespeelde de meeste instrumenten op zijn opnames gedurende zijn hele carrière."
        }
      },
      {
        question: {
          en: "Which band recorded 'Dream On' and 'Walk This Way'?",
          es: "¿Qué banda grabó 'Dream On' y 'Walk This Way'?",
          de: "Welche Band nahm 'Dream On' und 'Walk This Way' auf?",
          nl: "Welke band nam 'Dream On' en 'Walk This Way' op?"
        },
        options: [
          { en: "Aerosmith", es: "Aerosmith", de: "Aerosmith", nl: "Aerosmith" },
          { en: "Van Halen", es: "Van Halen", de: "Van Halen", nl: "Van Halen" },
          { en: "Heart", es: "Heart", de: "Heart", nl: "Heart" },
          { en: "Styx", es: "Styx", de: "Styx", nl: "Styx" }
        ],
        correct: 0,
        explanation: {
          en: "Aerosmith, known as 'America's Greatest Rock and Roll Band', recorded 'Dream On' in 1973 and 'Walk This Way' in 1975. Led by Steven Tyler's vocals and Joe Perry's guitar, they've sold over 150 million albums worldwide.",
          es: "Aerosmith, conocida como 'La mejor banda de rock and roll de América', grabó 'Dream On' en 1973 y 'Walk This Way' en 1975. Liderados por las voces de Steven Tyler y la guitarra de Joe Perry, han vendido más de 150 millones de álbumes en todo el mundo.",
          de: "Aerosmith, bekannt als 'Americas Greatest Rock and Roll Band', nahm 'Dream On' 1973 und 'Walk This Way' 1975 auf. Angeführt von Steven Tylers Gesang und Joe Perrys Gitarre, haben sie weltweit über 150 Millionen Alben verkauft.",
          nl: "Aerosmith, bekend als 'America's Greatest Rock and Roll Band', nam 'Dream On' op in 1973 en 'Walk This Way' in 1975. Geleid door Steven Tyler's zang en Joe Perry's gitaar, hebben ze wereldwijd meer dan 150 miljoen albums verkocht."
        }
      },
      {
        question: {
          en: "Which band is known for 'Eye of the Tiger' from the Rocky III soundtrack?",
          es: "¿Qué banda es conocida por 'Eye of the Tiger' de la banda sonora de Rocky III?",
          de: "Welche Band ist für 'Eye of the Tiger' aus dem Rocky III Soundtrack bekannt?",
          nl: "Welke band staat bekend om 'Eye of the Tiger' uit de Rocky III soundtrack?"
        },
        options: [
          { en: "Survivor", es: "Survivor", de: "Survivor", nl: "Survivor" },
          { en: "Asia", es: "Asia", de: "Asia", nl: "Asia" },
          { en: "Toto", es: "Toto", de: "Toto", nl: "Toto" },
          { en: "REO Speedwagon", es: "REO Speedwagon", de: "REO Speedwagon", nl: "REO Speedwagon" }
        ],
        correct: 0,
        explanation: {
          en: "Survivor released 'Eye of the Tiger' in 1982 after being specifically asked by Sylvester Stallone to write a song for Rocky III. It reached number one on the Billboard Hot 100 and won a Grammy nomination.",
          es: "Survivor lanzó 'Eye of the Tiger' en 1982 después de que Sylvester Stallone les pidiera específicamente que escribieran una canción para Rocky III. Alcanzó el número uno en el Billboard Hot 100 y ganó una nominación al Grammy.",
          de: "Survivor veröffentlichte 'Eye of the Tiger' 1982, nachdem Sylvester Stallone sie speziell gebeten hatte, ein Lied für Rocky III zu schreiben. Es erreichte Nummer eins der Billboard Hot 100 und erhielt eine Grammy-Nominierung.",
          nl: "Survivor bracht 'Eye of the Tiger' uit in 1982 nadat Sylvester Stallone hen specifiek had gevraagd een lied te schrijven voor Rocky III. Het bereikte nummer één op de Billboard Hot 100 en kreeg een Grammy nominatie."
        }
      },
      {
        question: {
          en: "Which British band recorded 'Every Breath You Take'?",
          es: "¿Qué banda británica grabó 'Every Breath You Take'?",
          de: "Welche britische Band nahm 'Every Breath You Take' auf?",
          nl: "Welke Britse band nam 'Every Breath You Take' op?"
        },
        options: [
          { en: "The Police", es: "The Police", de: "The Police", nl: "The Police" },
          { en: "Duran Duran", es: "Duran Duran", de: "Duran Duran", nl: "Duran Duran" },
          { en: "The Cure", es: "The Cure", de: "The Cure", nl: "The Cure" },
          { en: "Depeche Mode", es: "Depeche Mode", de: "Depeche Mode", nl: "Depeche Mode" }
        ],
        correct: 0,
        explanation: {
          en: "The Police released 'Every Breath You Take' in 1983 from their album 'Synchronicity'. Written by Sting, it won Grammy Awards for Song of the Year and Best Pop Performance by a Duo or Group with Vocals.",
          es: "The Police lanzó 'Every Breath You Take' en 1983 de su álbum 'Synchronicity'. Escrita por Sting, ganó premios Grammy a la Canción del Año y Mejor Interpretación Pop de un Dúo o Grupo con Voces.",
          de: "The Police veröffentlichten 'Every Breath You Take' 1983 von ihrem Album 'Synchronicity'. Geschrieben von Sting, gewann es Grammy Awards für Song of the Year und Best Pop Performance by a Duo or Group with Vocals.",
          nl: "The Police bracht 'Every Breath You Take' uit in 1983 van hun album 'Synchronicity'. Geschreven door Sting, won het Grammy Awards voor Song of the Year en Best Pop Performance by a Duo or Group with Vocals."
        }
      },
      {
        question: {
          en: "Which singer is known as 'The Boss'?",
          es: "¿Qué cantante es conocido como 'The Boss'?",
          de: "Welcher Sänger ist als 'The Boss' bekannt?",
          nl: "Welke zanger staat bekend als 'The Boss'?"
        },
        options: [
          { en: "Bruce Springsteen", es: "Bruce Springsteen", de: "Bruce Springsteen", nl: "Bruce Springsteen" },
          { en: "Bob Dylan", es: "Bob Dylan", de: "Bob Dylan", nl: "Bob Dylan" },
          { en: "Tom Petty", es: "Tom Petty", de: "Tom Petty", nl: "Tom Petty" },
          { en: "John Mellencamp", es: "John Mellencamp", de: "John Mellencamp", nl: "John Mellencamp" }
        ],
        correct: 0,
        explanation: {
          en: "Bruce Springsteen earned the nickname 'The Boss' from his bandmates in the early 1970s. Known for marathon concerts and working-class anthems like 'Born to Run' and 'Born in the U.S.A.', he's sold over 140 million albums worldwide.",
          es: "Bruce Springsteen ganó el apodo de 'The Boss' de sus compañeros de banda a principios de los años 70. Conocido por conciertos maratonianos y himnos de la clase trabajadora como 'Born to Run' y 'Born in the U.S.A.', ha vendido más de 140 millones de álbumes en todo el mundo.",
          de: "Bruce Springsteen erhielt den Spitznamen 'The Boss' von seinen Bandkollegen Anfang der 1970er Jahre. Bekannt für Marathon-Konzerte und Arbeiterhymnen wie 'Born to Run' und 'Born in the U.S.A.', hat er weltweit über 140 Millionen Alben verkauft.",
          nl: "Bruce Springsteen kreeg de bijnaam 'The Boss' van zijn bandleden begin jaren '70. Bekend om marathonconcerten en arbeidersklasse hymnes zoals 'Born to Run' en 'Born in the U.S.A.', heeft hij wereldwijd meer dan 140 miljoen albums verkocht."
        }
      },
      {
        question: {
          en: "Which British band recorded 'Don't You (Forget About Me)' for The Breakfast Club?",
          es: "¿Qué banda británica grabó 'Don't You (Forget About Me)' para The Breakfast Club?",
          de: "Welche britische Band nahm 'Don't You (Forget About Me)' für The Breakfast Club auf?",
          nl: "Welke Britse band nam 'Don't You (Forget About Me)' op voor The Breakfast Club?"
        },
        options: [
          { en: "Simple Minds", es: "Simple Minds", de: "Simple Minds", nl: "Simple Minds" },
          { en: "Tears for Fears", es: "Tears for Fears", de: "Tears for Fears", nl: "Tears for Fears" },
          { en: "A-ha", es: "A-ha", de: "A-ha", nl: "A-ha" },
          { en: "Spandau Ballet", es: "Spandau Ballet", de: "Spandau Ballet", nl: "Spandau Ballet" }
        ],
        correct: 0,
        explanation: {
          en: "Simple Minds recorded 'Don't You (Forget About Me)' in 1985 for the John Hughes film 'The Breakfast Club'. Despite initially being reluctant to record the song, it became their only US number-one hit.",
          es: "Simple Minds grabó 'Don't You (Forget About Me)' en 1985 para la película de John Hughes 'The Breakfast Club'. A pesar de ser inicialmente reacios a grabar la canción, se convirtió en su único éxito número uno en EE.UU.",
          de: "Simple Minds nahm 'Don't You (Forget About Me)' 1985 für den John Hughes-Film 'The Breakfast Club' auf. Obwohl sie zunächst zögerten, das Lied aufzunehmen, wurde es ihr einziger US-Nummer-eins-Hit.",
          nl: "Simple Minds nam 'Don't You (Forget About Me)' op in 1985 voor de John Hughes film 'The Breakfast Club'. Ondanks aanvankelijke terughoudendheid om het lied op te nemen, werd het hun enige US nummer-één hit."
        }
      },
      {
        question: {
          en: "Which band sang 'Take On Me' with its iconic animated music video?",
          es: "¿Qué banda cantó 'Take On Me' con su icónico video musical animado?",
          de: "Welche Band sang 'Take On Me' mit seinem ikonischen animierten Musikvideo?",
          nl: "Welke band zong 'Take On Me' met zijn iconische geanimeerde muziekvideo?"
        },
        options: [
          { en: "A-ha", es: "A-ha", de: "A-ha", nl: "A-ha" },
          { en: "Duran Duran", es: "Duran Duran", de: "Duran Duran", nl: "Duran Duran" },
          { en: "The Human League", es: "The Human League", de: "The Human League", nl: "The Human League" },
          { en: "Kajagoogoo", es: "Kajagoogoo", de: "Kajagoogoo", nl: "Kajagoogoo" }
        ],
        correct: 0,
        explanation: {
          en: "Norwegian band A-ha released 'Take On Me' in 1985. The innovative rotoscoped animation music video won six MTV Video Music Awards and helped the song reach number one in the US and multiple other countries.",
          es: "La banda noruega A-ha lanzó 'Take On Me' en 1985. El innovador video musical con animación rotoscópica ganó seis premios MTV Video Music Awards y ayudó a que la canción alcanzara el número uno en EE.UU. y múltiples otros países.",
          de: "Die norwegische Band A-ha veröffentlichte 'Take On Me' 1985. Das innovative Rotoskopie-Animations-Musikvideo gewann sechs MTV Video Music Awards und half dem Song, Nummer eins in den USA und vielen anderen Ländern zu erreichen.",
          nl: "De Noorse band A-ha bracht 'Take On Me' uit in 1985. De innovatieve gerotoscopieerde animatie muziekvideo won zes MTV Video Music Awards en help het lied nummer één te bereiken in de VS en meerdere andere landen."
        }
      },
      {
        question: {
          en: "Which singer recorded 'What's Love Got to Do with It' in the 1980s?",
          es: "¿Qué cantante grabó 'What's Love Got to Do with It' en los años 80?",
          de: "Welche Sängerin nahm 'What's Love Got to Do with It' in den 1980er Jahren auf?",
          nl: "Welke zangeres nam 'What's Love Got to Do with It' op in de jaren '80?"
        },
        options: [
          { en: "Tina Turner", es: "Tina Turner", de: "Tina Turner", nl: "Tina Turner" },
          { en: "Whitney Houston", es: "Whitney Houston", de: "Whitney Houston", nl: "Whitney Houston" },
          { en: "Bonnie Tyler", es: "Bonnie Tyler", de: "Bonnie Tyler", nl: "Bonnie Tyler" },
          { en: "Pat Benatar", es: "Pat Benatar", de: "Pat Benatar", nl: "Pat Benatar" }
        ],
        correct: 0,
        explanation: {
          en: "Tina Turner released 'What's Love Got to Do with It' in 1984, marking her solo career comeback at age 44. The song won three Grammy Awards and became her biggest solo hit, selling over 20 million copies worldwide.",
          es: "Tina Turner lanzó 'What's Love Got to Do with It' en 1984, marcando su regreso en carrera solista a los 44 años. La canción ganó tres premios Grammy y se convirtió en su mayor éxito en solitario, vendiendo más de 20 millones de copias en todo el mundo.",
          de: "Tina Turner veröffentlichte 'What's Love Got to Do with It' 1984, was ihr Solo-Karriere-Comeback im Alter von 44 Jahren markierte. Das Lied gewann drei Grammy Awards und wurde ihr größter Solo-Hit, mit über 20 Millionen verkauften Kopien weltweit.",
          nl: "Tina Turner bracht 'What's Love Got to Do with It' uit in 1984, wat haar comeback als soloartiest markeerde op 44-jarige leeftijd. Het lied won drie Grammy Awards en werd haar grootste solohit, met wereldwijd meer dan 20 miljoen verkochte exemplaren."
        }
      },
      {
        question: {
          en: "Which British band sang 'Hungry Like the Wolf'?",
          es: "¿Qué banda británica cantó 'Hungry Like the Wolf'?",
          de: "Welche britische Band sang 'Hungry Like the Wolf'?",
          nl: "Welke Britse band zong 'Hungry Like the Wolf'?"
        },
        options: [
          { en: "Duran Duran", es: "Duran Duran", de: "Duran Duran", nl: "Duran Duran" },
          { en: "Culture Club", es: "Culture Club", de: "Culture Club", nl: "Culture Club" },
          { en: "Wham!", es: "Wham!", de: "Wham!", nl: "Wham!" },
          { en: "ABC", es: "ABC", de: "ABC", nl: "ABC" }
        ],
        correct: 0,
        explanation: {
          en: "Duran Duran released 'Hungry Like the Wolf' in 1982 from their album 'Rio'. Part of the New Romantic movement, the band became MTV favorites with their stylish videos and became one of the biggest groups of the 1980s.",
          es: "Duran Duran lanzó 'Hungry Like the Wolf' en 1982 de su álbum 'Rio'. Parte del movimiento New Romantic, la banda se convirtió en favorita de MTV con sus videos elegantes y se convirtió en uno de los grupos más grandes de los años 80.",
          de: "Duran Duran veröffentlichte 'Hungry Like the Wolf' 1982 von ihrem Album 'Rio'. Als Teil der New-Romantic-Bewegung wurden sie mit ihren stilvollen Videos zu MTV-Favoriten und einer der größten Gruppen der 1980er Jahre.",
          nl: "Duran Duran bracht 'Hungry Like the Wolf' uit in 1982 van hun album 'Rio'. Als onderdeel van de New Romantic beweging, werd de band een MTV-favoriet met hun stijlvolle video's en een van de grootste groepen van de jaren '80."
        }
      },
      {
        question: {
          en: "Which band recorded 'November Rain' and 'Paradise City'?",
          es: "¿Qué banda grabó 'November Rain' y 'Paradise City'?",
          de: "Welche Band nahm 'November Rain' und 'Paradise City' auf?",
          nl: "Welke band nam 'November Rain' en 'Paradise City' op?"
        },
        options: [
          { en: "Guns N' Roses", es: "Guns N' Roses", de: "Guns N' Roses", nl: "Guns N' Roses" },
          { en: "Skid Row", es: "Skid Row", de: "Skid Row", nl: "Skid Row" },
          { en: "Poison", es: "Poison", de: "Poison", nl: "Poison" },
          { en: "Cinderella", es: "Cinderella", de: "Cinderella", nl: "Cinderella" }
        ],
        correct: 0,
        explanation: {
          en: "Guns N' Roses recorded 'Paradise City' on their 1987 debut 'Appetite for Destruction' and 'November Rain' on their 1991 'Use Your Illusion I'. Both songs showcase Axl Rose's range and Slash's guitar virtuosity.",
          es: "Guns N' Roses grabó 'Paradise City' en su debut de 1987 'Appetite for Destruction' y 'November Rain' en su 'Use Your Illusion I' de 1991. Ambas canciones muestran el rango de Axl Rose y el virtuosismo de guitarra de Slash.",
          de: "Guns N' Roses nahm 'Paradise City' auf ihrem 1987er Debüt 'Appetite for Destruction' und 'November Rain' auf ihrem 1991er 'Use Your Illusion I' auf. Beide Songs zeigen Axl Roses Stimmumfang und Slashs Gitarrenvirtuosität.",
          nl: "Guns N' Roses nam 'Paradise City' op op hun 1987 debuut 'Appetite for Destruction' en 'November Rain' op hun 1991 'Use Your Illusion I'. Beide liedjes tonen Axl Rose's bereik en Slash's gitaarvirtuositeit."
        }
      },
      {
        question: {
          en: "Which band is known for 'Carry on Wayward Son' and 'Dust in the Wind'?",
          es: "¿Qué banda es conocida por 'Carry on Wayward Son' y 'Dust in the Wind'?",
          de: "Welche Band ist für 'Carry on Wayward Son' und 'Dust in the Wind' bekannt?",
          nl: "Welke band staat bekend om 'Carry on Wayward Son' en 'Dust in the Wind'?"
        },
        options: [
          { en: "Kansas", es: "Kansas", de: "Kansas", nl: "Kansas" },
          { en: "Styx", es: "Styx", de: "Styx", nl: "Styx" },
          { en: "REO Speedwagon", es: "REO Speedwagon", de: "REO Speedwagon", nl: "REO Speedwagon" },
          { en: "Chicago", es: "Chicago", de: "Chicago", nl: "Chicago" }
        ],
        correct: 0,
        explanation: {
          en: "Kansas recorded both progressive rock classics in the 1970s. 'Carry on Wayward Son' (1976) and 'Dust in the Wind' (1977) showcased the band's blend of hard rock and classical influences with violin and organ.",
          es: "Kansas grabó ambos clásicos del rock progresivo en los años 70. 'Carry on Wayward Son' (1976) y 'Dust in the Wind' (1977) mostraron la mezcla de la banda de hard rock e influencias clásicas con violín y órgano.",
          de: "Kansas nahm beide Progressive-Rock-Klassiker in den 1970er Jahren auf. 'Carry on Wayward Son' (1976) und 'Dust in the Wind' (1977) zeigten die Mischung der Band aus Hard Rock und klassischen Einflüssen mit Violine und Orgel.",
          nl: "Kansas nam beide progressieve rock klassiekers op in de jaren '70. 'Carry on Wayward Son' (1976) en 'Dust in the Wind' (1977) toonden de mix van de band van harde rock en klassieke invloeden met viool en orgel."
        }
      },
      {
        question: {
          en: "Which British band sang 'Karma Chameleon' and 'Do You Really Want to Hurt Me'?",
          es: "¿Qué banda británica cantó 'Karma Chameleon' y 'Do You Really Want to Hurt Me'?",
          de: "Welche britische Band sang 'Karma Chameleon' und 'Do You Really Want to Hurt Me'?",
          nl: "Welke Britse band zong 'Karma Chameleon' en 'Do You Really Want to Hurt Me'?"
        },
        options: [
          { en: "Culture Club", es: "Culture Club", de: "Culture Club", nl: "Culture Club" },
          { en: "Frankie Goes to Hollywood", es: "Frankie Goes to Hollywood", de: "Frankie Goes to Hollywood", nl: "Frankie Goes to Hollywood" },
          { en: "Thompson Twins", es: "Thompson Twins", de: "Thompson Twins", nl: "Thompson Twins" },
          { en: "Bronski Beat", es: "Bronski Beat", de: "Bronski Beat", nl: "Bronski Beat" }
        ],
        correct: 0,
        explanation: {
          en: "Culture Club, fronted by Boy George, recorded both hits in the early 1980s. 'Karma Chameleon' (1983) became an international number-one hit, while 'Do You Really Want to Hurt Me' (1982) was their breakthrough single.",
          es: "Culture Club, liderado por Boy George, grabó ambos éxitos a principios de los años 80. 'Karma Chameleon' (1983) se convirtió en un éxito internacional número uno, mientras que 'Do You Really Want to Hurt Me' (1982) fue su sencillo revelación.",
          de: "Culture Club, angeführt von Boy George, nahm beide Hits Anfang der 1980er Jahre auf. 'Karma Chameleon' (1983) wurde ein internationaler Nummer-eins-Hit, während 'Do You Really Want to Hurt Me' (1982) ihre Durchbruch-Single war.",
          nl: "Culture Club, onder leiding van Boy George, nam beide hits op begin jaren '80. 'Karma Chameleon' (1983) werd een internationale nummer-één hit, terwijl 'Do You Really Want to Hurt Me' (1982) hun doorbraaksingle was."
        }
      },
      {
        question: {
          en: "Which band recorded 'Owner of a Lonely Heart'?",
          es: "¿Qué banda grabó 'Owner of a Lonely Heart'?",
          de: "Welche Band nahm 'Owner of a Lonely Heart' auf?",
          nl: "Welke band nam 'Owner of a Lonely Heart' op?"
        },
        options: [
          { en: "Yes", es: "Yes", de: "Yes", nl: "Yes" },
          { en: "Asia", es: "Asia", de: "Asia", nl: "Asia" },
          { en: "Emerson, Lake & Palmer", es: "Emerson, Lake & Palmer", de: "Emerson, Lake & Palmer", nl: "Emerson, Lake & Palmer" },
          { en: "King Crimson", es: "King Crimson", de: "King Crimson", nl: "King Crimson" }
        ],
        correct: 0,
        explanation: {
          en: "Yes released 'Owner of a Lonely Heart' in 1983 from their album '90125'. The progressive rock band's move toward a more pop-oriented sound with producer Trevor Horn resulted in their only US number-one hit.",
          es: "Yes lanzó 'Owner of a Lonely Heart' en 1983 de su álbum '90125'. El cambio de la banda de rock progresivo hacia un sonido más orientado al pop con el productor Trevor Horn resultó en su único éxito número uno en EE.UU.",
          de: "Yes veröffentlichte 'Owner of a Lonely Heart' 1983 von ihrem Album '90125'. Der Schritt der Progressive-Rock-Band zu einem pop-orientierteren Sound mit Produzent Trevor Horn führte zu ihrem einzigen US-Nummer-eins-Hit.",
          nl: "Yes bracht 'Owner of a Lonely Heart' uit in 1983 van hun album '90125'. De stap van de progressieve rockband naar een meer pop-georiënteerd geluid met producer Trevor Horn resulteerde in hun enige US nummer-één hit."
        }
      },
      {
        question: {
          en: "Which singer had a hit with 'Like a Virgin' in 1984?",
          es: "¿Qué cantante tuvo un éxito con 'Like a Virgin' en 1984?",
          de: "Welche Sängerin hatte 1984 einen Hit mit 'Like a Virgin'?",
          nl: "Welke zangeres had een hit met 'Like a Virgin' in 1984?"
        },
        options: [
          { en: "Madonna", es: "Madonna", de: "Madonna", nl: "Madonna" },
          { en: "Cyndi Lauper", es: "Cyndi Lauper", de: "Cyndi Lauper", nl: "Cyndi Lauper" },
          { en: "Janet Jackson", es: "Janet Jackson", de: "Janet Jackson", nl: "Janet Jackson" },
          { en: "Paula Abdul", es: "Paula Abdul", de: "Paula Abdul", nl: "Paula Abdul" }
        ],
        correct: 0,
        explanation: {
          en: "Madonna released 'Like a Virgin' in 1984, the title track from her second album. The controversial song and iconic music video helped establish her as the 'Queen of Pop' and became one of the defining songs of the 1980s.",
          es: "Madonna lanzó 'Like a Virgin' en 1984, la canción principal de su segundo álbum. La canción controvertida y el video musical icónico ayudaron a establecerla como la 'Reina del Pop' y se convirtió en una de las canciones definitorias de los años 80.",
          de: "Madonna veröffentlichte 'Like a Virgin' 1984, den Titeltrack ihres zweiten Albums. Das kontroverse Lied und ikonische Musikvideo halfen ihr, sich als 'Queen of Pop' zu etablieren und wurde zu einem der prägenden Songs der 1980er Jahre.",
          nl: "Madonna bracht 'Like a Virgin' uit in 1984, de titelsong van haar tweede album. Het controversiële lied en iconische muziekvideo hielpen haar zich te vestigen als de 'Queen of Pop' en werd een van de bepalende liedjes van de jaren '80."
        }
      },
      {
        question: {
          en: "Which band recorded 'The Final Countdown'?",
          es: "¿Qué banda grabó 'The Final Countdown'?",
          de: "Welche Band nahm 'The Final Countdown' auf?",
          nl: "Welke band nam 'The Final Countdown' op?"
        },
        options: [
          { en: "Europe", es: "Europe", de: "Europe", nl: "Europe" },
          { en: "Van Halen", es: "Van Halen", de: "Van Halen", nl: "Van Halen" },
          { en: "Scorpions", es: "Scorpions", de: "Scorpions", nl: "Scorpions" },
          { en: "Accept", es: "Accept", de: "Accept", nl: "Accept" }
        ],
        correct: 0,
        explanation: {
          en: "Swedish rock band Europe released 'The Final Countdown' in 1986 as the title track of their third album. The song's distinctive keyboard riff became an anthem of the 1980s and reached number one in 25 countries.",
          es: "La banda de rock sueca Europe lanzó 'The Final Countdown' en 1986 como la canción principal de su tercer álbum. El distintivo riff de teclado de la canción se convirtió en un himno de los años 80 y alcanzó el número uno en 25 países.",
          de: "Die schwedische Rockband Europe veröffentlichte 'The Final Countdown' 1986 als Titeltrack ihres dritten Albums. Das charakteristische Keyboard-Riff des Songs wurde zu einer Hymne der 1980er Jahre und erreichte in 25 Ländern Nummer eins.",
          nl: "De Zweedse rockband Europe bracht 'The Final Countdown' uit in 1986 als titelsong van hun derde album. De kenmerkende keyboardriff van het lied werd een hymne van de jaren '80 en bereikte nummer één in 25 landen."
        }
      },
      {
        question: {
          en: "Which band sang 'I Want to Know What Love Is'?",
          es: "¿Qué banda cantó 'I Want to Know What Love Is'?",
          de: "Welche Band sang 'I Want to Know What Love Is'?",
          nl: "Welke band zong 'I Want to Know What Love Is'?"
        },
        options: [
          { en: "Foreigner", es: "Foreigner", de: "Foreigner", nl: "Foreigner" },
          { en: "REO Speedwagon", es: "REO Speedwagon", de: "REO Speedwagon", nl: "REO Speedwagon" },
          { en: "Styx", es: "Styx", de: "Styx", nl: "Styx" },
          { en: "Kansas", es: "Kansas", de: "Kansas", nl: "Kansas" }
        ],
        correct: 0,
        explanation: {
          en: "Foreigner released 'I Want to Know What Love Is' in 1984 from their album 'Agent Provocateur'. The power ballad, featuring the New Jersey Mass Choir, became their biggest hit and topped charts worldwide.",
          es: "Foreigner lanzó 'I Want to Know What Love Is' en 1984 de su álbum 'Agent Provocateur'. La balada de poder, con el New Jersey Mass Choir, se convirtió en su mayor éxito y encabezó las listas en todo el mundo.",
          de: "Foreigner veröffentlichte 'I Want to Know What Love Is' 1984 von ihrem Album 'Agent Provocateur'. Die Power-Ballade mit dem New Jersey Mass Choir wurde ihr größter Hit und führte weltweit die Charts an.",
          nl: "Foreigner bracht 'I Want to Know What Love Is' uit in 1984 van hun album 'Agent Provocateur'. De powerballad, met het New Jersey Mass Choir, werd hun grootste hit en stond wereldwijd bovenaan de hitlijsten."
        }
      },
      {
        question: {
          en: "Which band recorded 'Jump' with its famous keyboard intro?",
          es: "¿Qué banda grabó 'Jump' con su famosa introducción de teclado?",
          de: "Welche Band nahm 'Jump' mit seinem berühmten Keyboard-Intro auf?",
          nl: "Welke band nam 'Jump' op met zijn beroemde keyboard intro?"
        },
        options: [
          { en: "Van Halen", es: "Van Halen", de: "Van Halen", nl: "Van Halen" },
          { en: "Def Leppard", es: "Def Leppard", de: "Def Leppard", nl: "Def Leppard" },
          { en: "Ratt", es: "Ratt", de: "Ratt", nl: "Ratt" },
          { en: "Quiet Riot", es: "Quiet Riot", de: "Quiet Riot", nl: "Quiet Riot" }
        ],
        correct: 0,
        explanation: {
          en: "Van Halen released 'Jump' in 1983 from their album '1984'. Eddie Van Halen's synthesizer riff marked a departure from their usual guitar-driven sound, and it became their only US number-one single.",
          es: "Van Halen lanzó 'Jump' en 1983 de su álbum '1984'. El riff de sintetizador de Eddie Van Halen marcó un alejamiento de su sonido habitual impulsado por la guitarra, y se convirtió en su único sencillo número uno en EE.UU.",
          de: "Van Halen veröffentlichte 'Jump' 1983 von ihrem Album '1984'. Eddie Van Halens Synthesizer-Riff markierte eine Abkehr von ihrem üblichen gitarrengetriebenen Sound und wurde ihre einzige US-Nummer-eins-Single.",
          nl: "Van Halen bracht 'Jump' uit in 1983 van hun album '1984'. Eddie Van Halen's synthesizerriff markeerde een breuk met hun gebruikelijke gitaargedreven geluid, en het werd hun enige US nummer-één single."
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