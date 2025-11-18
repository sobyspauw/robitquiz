// Musicians Quiz - Level 1: Very Easy - Current Pop Stars
(function() {
  const level1 = {
    name: {
      en: "Famous Musicians - Very Easy",
      es: "Músicos Famosos - Muy Fácil",
      de: "Berühmte Musiker - Sehr Einfach",
      nl: "Beroemde Muzikanten - Heel Makkelijk"
    },
    questions: [
      {
        question: {
          en: "Which pop star is known for songs like 'Shake It Off' and 'Anti-Hero'?",
          es: "¿Qué estrella del pop es conocida por canciones como 'Shake It Off' y 'Anti-Hero'?",
          de: "Welcher Popstar ist für Songs wie 'Shake It Off' und 'Anti-Hero' bekannt?",
          nl: "Welke popster staat bekend om liedjes zoals 'Shake It Off' en 'Anti-Hero'?"
        },
        options: [
          { en: "Taylor Swift", es: "Taylor Swift", de: "Taylor Swift", nl: "Taylor Swift" },
          { en: "Ariana Grande", es: "Ariana Grande", de: "Ariana Grande", nl: "Ariana Grande" },
          { en: "Billie Eilish", es: "Billie Eilish", de: "Billie Eilish", nl: "Billie Eilish" },
          { en: "Dua Lipa", es: "Dua Lipa", de: "Dua Lipa", nl: "Dua Lipa" }
        ],
        correct: 0,
        explanation: {
          en: "Taylor Swift is one of the biggest pop stars today, known for reinventing her sound across different albums and eras, from country to pop to indie folk.",
          es: "Taylor Swift es una de las mayores estrellas del pop de hoy, conocida por reinventar su sonido a través de diferentes álbumes y eras, del country al pop al indie folk.",
          de: "Taylor Swift ist einer der größten Popstars heute, bekannt dafür, ihren Sound über verschiedene Alben und Ären hinweg neu zu erfinden, von Country über Pop bis hin zu Indie Folk.",
          nl: "Taylor Swift is een van de grootste popsterren van vandaag, bekend om het heruitvinden van haar geluid over verschillende albums en tijdperken, van country tot pop tot indie folk."
        }
      },
      {
        question: {
          en: "Who sang the hit song 'Shape of You'?",
          es: "¿Quién cantó la exitosa canción 'Shape of You'?",
          de: "Wer sang den Hit 'Shape of You'?",
          nl: "Wie zong de hit 'Shape of You'?"
        },
        options: [
          { en: "Ed Sheeran", es: "Ed Sheeran", de: "Ed Sheeran", nl: "Ed Sheeran" },
          { en: "Justin Bieber", es: "Justin Bieber", de: "Justin Bieber", nl: "Justin Bieber" },
          { en: "Shawn Mendes", es: "Shawn Mendes", de: "Shawn Mendes", nl: "Shawn Mendes" },
          { en: "Sam Smith", es: "Sam Smith", de: "Sam Smith", nl: "Sam Smith" }
        ],
        correct: 0,
        explanation: {
          en: "Ed Sheeran's 'Shape of You' became one of the best-selling digital singles of all time. He's known for his acoustic guitar-based pop songs and heartfelt lyrics.",
          es: "El 'Shape of You' de Ed Sheeran se convirtió en uno de los sencillos digitales más vendidos de todos los tiempos. Es conocido por sus canciones pop basadas en guitarra acústica y letras sentidas.",
          de: "Ed Sheerans 'Shape of You' wurde zu einer der meistverkauften digitalen Singles aller Zeiten. Er ist bekannt für seine auf akustischer Gitarre basierenden Popsongs und gefühlvollen Texte.",
          nl: "Ed Sheeran's 'Shape of You' werd een van de bestverkopende digitale singles aller tijden. Hij staat bekend om zijn op akoestische gitaar gebaseerde popliedjes en gevoelvolle teksten."
        }
      },
      {
        question: {
          en: "Which artist is known for the songs 'Bad Guy' and 'Happier Than Ever'?",
          es: "¿Qué artista es conocida por las canciones 'Bad Guy' y 'Happier Than Ever'?",
          de: "Welche Künstlerin ist für die Songs 'Bad Guy' und 'Happier Than Ever' bekannt?",
          nl: "Welke artiest staat bekend om de liedjes 'Bad Guy' en 'Happier Than Ever'?"
        },
        options: [
          { en: "Billie Eilish", es: "Billie Eilish", de: "Billie Eilish", nl: "Billie Eilish" },
          { en: "Olivia Rodrigo", es: "Olivia Rodrigo", de: "Olivia Rodrigo", nl: "Olivia Rodrigo" },
          { en: "Lana Del Rey", es: "Lana Del Rey", de: "Lana Del Rey", nl: "Lana Del Rey" },
          { en: "Lorde", es: "Lorde", de: "Lorde", nl: "Lorde" }
        ],
        correct: 0,
        explanation: {
          en: "Billie Eilish became a global phenomenon with her unique whisper-singing style and dark, minimalist pop sound. She's won multiple Grammy Awards at a young age.",
          es: "Billie Eilish se convirtió en un fenómeno global con su estilo único de canto susurrado y su sonido pop oscuro y minimalista. Ha ganado múltiples premios Grammy a una edad temprana.",
          de: "Billie Eilish wurde zu einem globalen Phänomen mit ihrem einzigartigen Flüster-Gesangsstil und dunklen, minimalistischen Pop-Sound. Sie hat in jungen Jahren mehrere Grammy Awards gewonnen.",
          nl: "Billie Eilish werd een wereldwijd fenomeen met haar unieke fluister-zangstijl en donkere, minimalistische popgeluid. Ze heeft op jonge leeftijd meerdere Grammy Awards gewonnen."
        }
      },
      {
        question: {
          en: "Who performed 'Thank U, Next' and 'Grande'?",
          es: "¿Quién interpretó 'Thank U, Next' y 'Grande'?",
          de: "Wer führte 'Thank U, Next' und 'Grande' auf?",
          nl: "Wie voerde 'Thank U, Next' en 'Grande' uit?"
        },
        options: [
          { en: "Ariana Grande", es: "Ariana Grande", de: "Ariana Grande", nl: "Ariana Grande" },
          { en: "Selena Gomez", es: "Selena Gomez", de: "Selena Gomez", nl: "Selena Gomez" },
          { en: "Demi Lovato", es: "Demi Lovato", de: "Demi Lovato", nl: "Demi Lovato" },
          { en: "Katy Perry", es: "Katy Perry", de: "Katy Perry", nl: "Katy Perry" }
        ],
        correct: 0,
        explanation: {
          en: "Ariana Grande is known for her powerful four-octave vocal range and her transition from Nickelodeon star to one of pop music's biggest names.",
          es: "Ariana Grande es conocida por su poderoso rango vocal de cuatro octavas y su transición de estrella de Nickelodeon a uno de los nombres más grandes de la música pop.",
          de: "Ariana Grande ist bekannt für ihre kraftvolle vier-Oktaven-Stimme und ihren Übergang vom Nickelodeon-Star zu einem der größten Namen der Popmusik.",
          nl: "Ariana Grande staat bekend om haar krachtige vier-octaaf stembereik en haar overgang van Nickelodeon-ster naar een van de grootste namen in de popmuziek."
        }
      },
      {
        question: {
          en: "Which artist recorded 'Blinding Lights' and 'The Weeknd'?",
          es: "¿Qué artista grabó 'Blinding Lights' y 'The Weeknd'?",
          de: "Welcher Künstler nahm 'Blinding Lights' und 'The Weeknd' auf?",
          nl: "Welke artiest nam 'Blinding Lights' en 'The Weeknd' op?"
        },
        options: [
          { en: "The Weeknd", es: "The Weeknd", de: "The Weeknd", nl: "The Weeknd" },
          { en: "Bruno Mars", es: "Bruno Mars", de: "Bruno Mars", nl: "Bruno Mars" },
          { en: "Post Malone", es: "Post Malone", de: "Post Malone", nl: "Post Malone" },
          { en: "Drake", es: "Drake", de: "Drake", nl: "Drake" }
        ],
        correct: 0,
        explanation: {
          en: "The Weeknd's 'Blinding Lights' became one of the biggest hits of 2020, showcasing his evolution from dark R&B to more mainstream pop with '80s synth influences.",
          es: "'Blinding Lights' de The Weeknd se convirtió en uno de los mayores éxitos de 2020, mostrando su evolución del R&B oscuro al pop más mainstream con influencias de sintetizadores de los 80.",
          de: "The Weeknds 'Blinding Lights' wurde zu einem der größten Hits von 2020 und zeigte seine Entwicklung von dunklem R&B zu mehr Mainstream-Pop mit '80er-Synth-Einflüssen.",
          nl: "The Weeknd's 'Blinding Lights' werd een van de grootste hits van 2020, waarin zijn evolutie van donkere R&B naar meer mainstream pop met '80s synth invloeden te zien was."
        }
      },
      {
        question: {
          en: "Who is known for hits like 'Levitating' and 'Don't Start Now'?",
          es: "¿Quién es conocida por éxitos como 'Levitating' y 'Don't Start Now'?",
          de: "Wer ist für Hits wie 'Levitating' und 'Don't Start Now' bekannt?",
          nl: "Wie staat bekend om hits zoals 'Levitating' en 'Don't Start Now'?"
        },
        options: [
          { en: "Dua Lipa", es: "Dua Lipa", de: "Dua Lipa", nl: "Dua Lipa" },
          { en: "Camila Cabello", es: "Camila Cabello", de: "Camila Cabello", nl: "Camila Cabello" },
          { en: "Halsey", es: "Halsey", de: "Halsey", nl: "Halsey" },
          { en: "Bebe Rexha", es: "Bebe Rexha", de: "Bebe Rexha", nl: "Bebe Rexha" }
        ],
        correct: 0,
        explanation: {
          en: "Dua Lipa brought disco-pop back to mainstream with her album 'Future Nostalgia', combining modern production with retro dance influences.",
          es: "Dua Lipa trajo de vuelta el disco-pop al mainstream con su álbum 'Future Nostalgia', combinando producción moderna con influencias de baile retro.",
          de: "Dua Lipa brachte Disco-Pop mit ihrem Album 'Future Nostalgia' zurück in den Mainstream und kombinierte moderne Produktion mit Retro-Dance-Einflüssen.",
          nl: "Dua Lipa bracht disco-pop terug naar de mainstream met haar album 'Future Nostalgia', waarbij ze moderne productie combineerde met retro dance invloeden."
        }
      },
      {
        question: {
          en: "Which artist is famous for 'Watermelon Sugar' and 'As It Was'?",
          es: "¿Qué artista es famoso por 'Watermelon Sugar' y 'As It Was'?",
          de: "Welcher Künstler ist für 'Watermelon Sugar' und 'As It Was' berühmt?",
          nl: "Welke artiest is beroemd om 'Watermelon Sugar' en 'As It Was'?"
        },
        options: [
          { en: "Harry Styles", es: "Harry Styles", de: "Harry Styles", nl: "Harry Styles" },
          { en: "Niall Horan", es: "Niall Horan", de: "Niall Horan", nl: "Niall Horan" },
          { en: "Louis Tomlinson", es: "Louis Tomlinson", de: "Louis Tomlinson", nl: "Louis Tomlinson" },
          { en: "Liam Payne", es: "Liam Payne", de: "Liam Payne", nl: "Liam Payne" }
        ],
        correct: 0,
        explanation: {
          en: "Harry Styles successfully transitioned from One Direction member to solo artist, exploring rock, pop, and folk influences while becoming a fashion icon.",
          es: "Harry Styles hizo una transición exitosa de miembro de One Direction a artista en solitario, explorando influencias rock, pop y folk mientras se convertía en un ícono de la moda.",
          de: "Harry Styles schaffte erfolgreich den Übergang vom One Direction-Mitglied zum Solokünstler und erforschte Rock-, Pop- und Folk-Einflüsse, während er zu einer Mode-Ikone wurde.",
          nl: "Harry Styles maakte succesvol de overgang van One Direction-lid naar solo-artiest, waarbij hij rock-, pop- en folk-invloeden verkende terwijl hij een mode-icoon werd."
        }
      },
      {
        question: {
          en: "Who sang 'Drivers License' and 'Good 4 U'?",
          es: "¿Quién cantó 'Drivers License' y 'Good 4 U'?",
          de: "Wer sang 'Drivers License' und 'Good 4 U'?",
          nl: "Wie zong 'Drivers License' en 'Good 4 U'?"
        },
        options: [
          { en: "Olivia Rodrigo", es: "Olivia Rodrigo", de: "Olivia Rodrigo", nl: "Olivia Rodrigo" },
          { en: "Sabrina Carpenter", es: "Sabrina Carpenter", de: "Sabrina Carpenter", nl: "Sabrina Carpenter" },
          { en: "Madison Beer", es: "Madison Beer", de: "Madison Beer", nl: "Madison Beer" },
          { en: "Gracie Abrams", es: "Gracie Abrams", de: "Gracie Abrams", nl: "Gracie Abrams" }
        ],
        correct: 0,
        explanation: {
          en: "Olivia Rodrigo became a breakout star in 2021 with 'Drivers License', transitioning from Disney Channel actress to Grammy-winning singer-songwriter.",
          es: "Olivia Rodrigo se convirtió en una estrella emergente en 2021 con 'Drivers License', haciendo la transición de actriz de Disney Channel a cantautora ganadora del Grammy.",
          de: "Olivia Rodrigo wurde 2021 mit 'Drivers License' zum Durchbruchsstar und schaffte den Übergang von Disney Channel-Schauspielerin zur Grammy-prämierten Singer-Songwriterin.",
          nl: "Olivia Rodrigo werd een doorbraakster in 2021 met 'Drivers License', waarbij ze overging van Disney Channel-actrice naar Grammy-winnende singer-songwriter."
        }
      },
      {
        question: {
          en: "Which artist is known for 'Circles' and 'Sunflower'?",
          es: "¿Qué artista es conocido por 'Circles' y 'Sunflower'?",
          de: "Welcher Künstler ist für 'Circles' und 'Sunflower' bekannt?",
          nl: "Welke artiest staat bekend om 'Circles' en 'Sunflower'?"
        },
        options: [
          { en: "Post Malone", es: "Post Malone", de: "Post Malone", nl: "Post Malone" },
          { en: "Lil Nas X", es: "Lil Nas X", de: "Lil Nas X", nl: "Lil Nas X" },
          { en: "Travis Scott", es: "Travis Scott", de: "Travis Scott", nl: "Travis Scott" },
          { en: "Juice WRLD", es: "Juice WRLD", de: "Juice WRLD", nl: "Juice WRLD" }
        ],
        correct: 0,
        explanation: {
          en: "Post Malone blends hip-hop, pop, and rock elements, becoming one of the most streamed artists globally with his melodic rap style.",
          es: "Post Malone mezcla elementos de hip-hop, pop y rock, convirtiéndose en uno de los artistas más reproducidos globalmente con su estilo de rap melódico.",
          de: "Post Malone mischt Hip-Hop-, Pop- und Rock-Elemente und wurde mit seinem melodischen Rap-Stil zu einem der meistgestreamten Künstler weltweit.",
          nl: "Post Malone mixt hip-hop, pop en rock elementen, en werd een van de meest gestreamde artiesten wereldwijd met zijn melodische rapstijl."
        }
      },
      {
        question: {
          en: "Who performed 'Peaches' and 'Sorry'?",
          es: "¿Quién interpretó 'Peaches' y 'Sorry'?",
          de: "Wer führte 'Peaches' und 'Sorry' auf?",
          nl: "Wie voerde 'Peaches' en 'Sorry' uit?"
        },
        options: [
          { en: "Justin Bieber", es: "Justin Bieber", de: "Justin Bieber", nl: "Justin Bieber" },
          { en: "The Chainsmokers", es: "The Chainsmokers", de: "The Chainsmokers", nl: "The Chainsmokers" },
          { en: "Calvin Harris", es: "Calvin Harris", de: "Calvin Harris", nl: "Calvin Harris" },
          { en: "Charlie Puth", es: "Charlie Puth", de: "Charlie Puth", nl: "Charlie Puth" }
        ],
        correct: 0,
        explanation: {
          en: "Justin Bieber evolved from teen pop sensation to mature artist, experimenting with different genres and collaborating with various artists throughout his career.",
          es: "Justin Bieber evolucionó de sensación del pop adolescente a artista maduro, experimentando con diferentes géneros y colaborando con varios artistas a lo largo de su carrera.",
          de: "Justin Bieber entwickelte sich von einer Teen-Pop-Sensation zu einem reifen Künstler, experimentierte mit verschiedenen Genres und kollaborierte während seiner Karriere mit verschiedenen Künstlern.",
          nl: "Justin Bieber evolueerde van tiener-popsensatie naar volwassen artiest, experimenteerde met verschillende genres en werkte samen met verschillende artiesten gedurende zijn carrière."
        }
      },
      {
        question: {
          en: "Which Korean group is known for 'Dynamite' and 'Butter'?",
          es: "¿Qué grupo coreano es conocido por 'Dynamite' y 'Butter'?",
          de: "Welche koreanische Gruppe ist für 'Dynamite' und 'Butter' bekannt?",
          nl: "Welke Koreaanse groep staat bekend om 'Dynamite' en 'Butter'?"
        },
        options: [
          { en: "BTS", es: "BTS", de: "BTS", nl: "BTS" },
          { en: "BLACKPINK", es: "BLACKPINK", de: "BLACKPINK", nl: "BLACKPINK" },
          { en: "TWICE", es: "TWICE", de: "TWICE", nl: "TWICE" },
          { en: "Stray Kids", es: "Stray Kids", de: "Stray Kids", nl: "Stray Kids" }
        ],
        correct: 0,
        explanation: {
          en: "BTS became the first Korean group to top the Billboard Hot 100, breaking language barriers and bringing K-pop to global mainstream success.",
          es: "BTS se convirtió en el primer grupo coreano en encabezar el Billboard Hot 100, rompiendo barreras idiomáticas y llevando el K-pop al éxito mainstream global.",
          de: "BTS wurde die erste koreanische Gruppe, die die Billboard Hot 100 anführte, Sprachbarrieren durchbrach und K-Pop zu globalem Mainstream-Erfolg führte.",
          nl: "BTS werd de eerste Koreaanse groep die de Billboard Hot 100 aanvoerde, taalbarrières doorbrak en K-pop naar wereldwijd mainstream succes bracht."
        }
      },
      {
        question: {
          en: "Who is famous for 'Señorita' (with Camila Cabello) and 'Stitches'?",
          es: "¿Quién es famoso por 'Señorita' (con Camila Cabello) y 'Stitches'?",
          de: "Wer ist berühmt für 'Señorita' (mit Camila Cabello) und 'Stitches'?",
          nl: "Wie is beroemd om 'Señorita' (met Camila Cabello) en 'Stitches'?"
        },
        options: [
          { en: "Shawn Mendes", es: "Shawn Mendes", de: "Shawn Mendes", nl: "Shawn Mendes" },
          { en: "Charlie Puth", es: "Charlie Puth", de: "Charlie Puth", nl: "Charlie Puth" },
          { en: "John Mayer", es: "John Mayer", de: "John Mayer", nl: "John Mayer" },
          { en: "James Arthur", es: "James Arthur", de: "James Arthur", nl: "James Arthur" }
        ],
        correct: 0,
        explanation: {
          en: "Shawn Mendes gained fame through social media, showcasing his guitar skills and voice, eventually becoming one of pop music's most prominent young artists.",
          es: "Shawn Mendes ganó fama a través de las redes sociales, mostrando sus habilidades con la guitarra y su voz, eventualmente convirtiéndose en uno de los jóvenes artistas más prominentes de la música pop.",
          de: "Shawn Mendes wurde durch soziale Medien berühmt, zeigte seine Gitarrenfähigkeiten und Stimme und wurde schließlich zu einem der prominentesten jungen Künstler der Popmusik.",
          nl: "Shawn Mendes werd beroemd via sociale media, waarbij hij zijn gitaarvaardigheden en stem toonde, en uiteindelijk een van de meest prominente jonge artiesten in de popmuziek werd."
        }
      },
      {
        question: {
          en: "Which artist recorded 'Old Town Road' with Billy Ray Cyrus?",
          es: "¿Qué artista grabó 'Old Town Road' con Billy Ray Cyrus?",
          de: "Welcher Künstler nahm 'Old Town Road' mit Billy Ray Cyrus auf?",
          nl: "Welke artiest nam 'Old Town Road' op met Billy Ray Cyrus?"
        },
        options: [
          { en: "Lil Nas X", es: "Lil Nas X", de: "Lil Nas X", nl: "Lil Nas X" },
          { en: "Lil Baby", es: "Lil Baby", de: "Lil Baby", nl: "Lil Baby" },
          { en: "DaBaby", es: "DaBaby", de: "DaBaby", nl: "DaBaby" },
          { en: "Roddy Ricch", es: "Roddy Ricch", de: "Roddy Ricch", nl: "Roddy Ricch" }
        ],
        correct: 0,
        explanation: {
          en: "Lil Nas X created a viral sensation with 'Old Town Road', blending country and hip-hop genres and holding the #1 spot on Billboard for a record 19 weeks.",
          es: "Lil Nas X creó una sensación viral con 'Old Town Road', mezclando géneros country y hip-hop y manteniendo el puesto #1 en Billboard por un récord de 19 semanas.",
          de: "Lil Nas X schuf mit 'Old Town Road' eine virale Sensation, mischte Country- und Hip-Hop-Genres und hielt rekordverdächtige 19 Wochen lang Platz 1 der Billboard-Charts.",
          nl: "Lil Nas X creëerde een virale sensatie met 'Old Town Road', waarin hij country en hip-hop genres mixte en een record van 19 weken op #1 in de Billboard stond."
        }
      },
      {
        question: {
          en: "Who is known for 'Flowers' and 'Wrecking Ball'?",
          es: "¿Quién es conocida por 'Flowers' y 'Wrecking Ball'?",
          de: "Wer ist für 'Flowers' und 'Wrecking Ball' bekannt?",
          nl: "Wie staat bekend om 'Flowers' en 'Wrecking Ball'?"
        },
        options: [
          { en: "Miley Cyrus", es: "Miley Cyrus", de: "Miley Cyrus", nl: "Miley Cyrus" },
          { en: "Katy Perry", es: "Katy Perry", de: "Katy Perry", nl: "Katy Perry" },
          { en: "Pink", es: "Pink", de: "Pink", nl: "Pink" },
          { en: "Kelly Clarkson", es: "Kelly Clarkson", de: "Kelly Clarkson", nl: "Kelly Clarkson" }
        ],
        correct: 0,
        explanation: {
          en: "Miley Cyrus transformed from Disney Channel star to pop icon, constantly reinventing her image and sound while maintaining her distinctive powerful voice.",
          es: "Miley Cyrus se transformó de estrella de Disney Channel a ícono del pop, reinventando constantemente su imagen y sonido mientras mantenía su distintiva voz poderosa.",
          de: "Miley Cyrus verwandelte sich vom Disney Channel-Star zur Pop-Ikone und erfand ständig ihr Image und ihren Sound neu, während sie ihre charakteristische kraftvolle Stimme beibehielt.",
          nl: "Miley Cyrus transformeerde van Disney Channel-ster naar pop-icoon, waarbij ze constant haar image en geluid heruitvond terwijl ze haar onderscheidende krachtige stem behield."
        }
      },
      {
        question: {
          en: "Which artist is famous for 'Industry Baby' and 'Montero (Call Me By Your Name)'?",
          es: "¿Qué artista es famoso por 'Industry Baby' y 'Montero (Call Me By Your Name)'?",
          de: "Welcher Künstler ist für 'Industry Baby' und 'Montero (Call Me By Your Name)' berühmt?",
          nl: "Welke artiest is beroemd om 'Industry Baby' en 'Montero (Call Me By Your Name)'?"
        },
        options: [
          { en: "Lil Nas X", es: "Lil Nas X", de: "Lil Nas X", nl: "Lil Nas X" },
          { en: "Tyler, The Creator", es: "Tyler, The Creator", de: "Tyler, The Creator", nl: "Tyler, The Creator" },
          { en: "Frank Ocean", es: "Frank Ocean", de: "Frank Ocean", nl: "Frank Ocean" },
          { en: "Childish Gambino", es: "Childish Gambino", de: "Childish Gambino", nl: "Childish Gambino" }
        ],
        correct: 0,
        explanation: {
          en: "After 'Old Town Road', Lil Nas X continued to push boundaries with bold visuals and messages, becoming an influential voice for LGBTQ+ representation in hip-hop.",
          es: "Después de 'Old Town Road', Lil Nas X continuó empujando límites con visuales y mensajes audaces, convirtiéndose en una voz influyente para la representación LGBTQ+ en el hip-hop.",
          de: "Nach 'Old Town Road' schob Lil Nas X weiterhin Grenzen mit mutigen Visuals und Botschaften und wurde zu einer einflussreichen Stimme für LGBTQ+-Repräsentation im Hip-Hop.",
          nl: "Na 'Old Town Road' bleef Lil Nas X grenzen verleggen met gedurfde beelden en boodschappen, en werd een invloedrijke stem voor LGBTQ+ representatie in hip-hop."
        }
      },
      {
        question: {
          en: "Who sang 'Unholy' with Kim Petras?",
          es: "¿Quién cantó 'Unholy' con Kim Petras?",
          de: "Wer sang 'Unholy' mit Kim Petras?",
          nl: "Wie zong 'Unholy' met Kim Petras?"
        },
        options: [
          { en: "Sam Smith", es: "Sam Smith", de: "Sam Smith", nl: "Sam Smith" },
          { en: "Lewis Capaldi", es: "Lewis Capaldi", de: "Lewis Capaldi", nl: "Lewis Capaldi" },
          { en: "James Arthur", es: "James Arthur", de: "James Arthur", nl: "James Arthur" },
          { en: "Calum Scott", es: "Calum Scott", de: "Calum Scott", nl: "Calum Scott" }
        ],
        correct: 0,
        explanation: {
          en: "Sam Smith's collaboration with Kim Petras on 'Unholy' marked a departure from their usual ballad style, showcasing their versatility across different pop genres.",
          es: "La colaboración de Sam Smith con Kim Petras en 'Unholy' marcó una desviación de su estilo habitual de balada, mostrando su versatilidad a través de diferentes géneros pop.",
          de: "Sam Smiths Zusammenarbeit mit Kim Petras bei 'Unholy' markierte eine Abkehr von ihrem üblichen Balladen-Stil und zeigte ihre Vielseitigkeit in verschiedenen Pop-Genres.",
          nl: "Sam Smith's samenwerking met Kim Petras op 'Unholy' markeerde een afwijking van hun gebruikelijke balladestijl, waarbij hun veelzijdigheid in verschillende popgenres werd getoond."
        }
      },
      {
        question: {
          en: "Which artist is known for 'Stay' (with Justin Bieber) and 'Sunflower'?",
          es: "¿Qué artista es conocido por 'Stay' (con Justin Bieber) y 'Sunflower'?",
          de: "Welcher Künstler ist für 'Stay' (mit Justin Bieber) und 'Sunflower' bekannt?",
          nl: "Welke artiest staat bekend om 'Stay' (met Justin Bieber) en 'Sunflower'?"
        },
        options: [
          { en: "The Kid LAROI", es: "The Kid LAROI", de: "The Kid LAROI", nl: "The Kid LAROI" },
          { en: "Lil Tjay", es: "Lil Tjay", de: "Lil Tjay", nl: "Lil Tjay" },
          { en: "Polo G", es: "Polo G", de: "Polo G", nl: "Polo G" },
          { en: "24kGoldn", es: "24kGoldn", de: "24kGoldn", nl: "24kGoldn" }
        ],
        correct: 0,
        explanation: {
          en: "The Kid LAROI, an Australian rapper and singer, gained international fame through melodic hip-hop and collaborations with major artists like Justin Bieber and Post Malone.",
          es: "The Kid LAROI, un rapero y cantante australiano, ganó fama internacional a través del hip-hop melódico y colaboraciones con artistas importantes como Justin Bieber y Post Malone.",
          de: "The Kid LAROI, ein australischer Rapper und Sänger, erlangte internationale Bekanntheit durch melodischen Hip-Hop und Kollaborationen mit großen Künstlern wie Justin Bieber und Post Malone.",
          nl: "The Kid LAROI, een Australische rapper en zanger, verwierf internationale bekendheid door melodische hip-hop en samenwerkingen met grote artiesten zoals Justin Bieber en Post Malone."
        }
      },
      {
        question: {
          en: "Who is famous for 'As It Was' and being a former member of One Direction?",
          es: "¿Quién es famoso por 'As It Was' y ser ex miembro de One Direction?",
          de: "Wer ist berühmt für 'As It Was' und ein ehemaliges Mitglied von One Direction?",
          nl: "Wie is beroemd om 'As It Was' en een voormalig lid van One Direction?"
        },
        options: [
          { en: "Harry Styles", es: "Harry Styles", de: "Harry Styles", nl: "Harry Styles" },
          { en: "Zayn Malik", es: "Zayn Malik", de: "Zayn Malik", nl: "Zayn Malik" },
          { en: "Niall Horan", es: "Niall Horan", de: "Niall Horan", nl: "Niall Horan" },
          { en: "Louis Tomlinson", es: "Louis Tomlinson", de: "Louis Tomlinson", nl: "Louis Tomlinson" }
        ],
        correct: 0,
        explanation: {
          en: "Harry Styles has had the most commercially successful solo career among One Direction members, also branching into acting with films like 'Dunkirk' and 'Don't Worry Darling'.",
          es: "Harry Styles ha tenido la carrera en solitario más exitosa comercialmente entre los miembros de One Direction, también ramificándose en la actuación con películas como 'Dunkirk' y 'Don't Worry Darling'.",
          de: "Harry Styles hatte die kommerziell erfolgreichste Solo-Karriere unter den One Direction-Mitgliedern und verzweigte sich auch in die Schauspielerei mit Filmen wie 'Dunkirk' und 'Don't Worry Darling'.",
          nl: "Harry Styles heeft de commercieel meest succesvolle solo-carrière gehad onder de One Direction-leden, en vertakte zich ook naar acteren met films zoals 'Dunkirk' en 'Don't Worry Darling'."
        }
      },
      {
        question: {
          en: "Which artist recorded 'Heat Waves' and is the lead singer of Glass Animals?",
          es: "¿Qué artista grabó 'Heat Waves' y es el cantante principal de Glass Animals?",
          de: "Welcher Künstler nahm 'Heat Waves' auf und ist der Leadsänger von Glass Animals?",
          nl: "Welke artiest nam 'Heat Waves' op en is de leadzanger van Glass Animals?"
        },
        options: [
          { en: "Dave Bayley", es: "Dave Bayley", de: "Dave Bayley", nl: "Dave Bayley" },
          { en: "Matt Berninger", es: "Matt Berninger", de: "Matt Berninger", nl: "Matt Berninger" },
          { en: "Brandon Flowers", es: "Brandon Flowers", de: "Brandon Flowers", nl: "Brandon Flowers" },
          { en: "Julian Casablancas", es: "Julian Casablancas", de: "Julian Casablancas", nl: "Julian Casablancas" }
        ],
        correct: 0,
        explanation: {
          en: "Dave Bayley of Glass Animals created 'Heat Waves', which became a viral sensation on TikTok and showed how indie bands can achieve mainstream success through social media.",
          es: "Dave Bayley de Glass Animals creó 'Heat Waves', que se convirtió en una sensación viral en TikTok y mostró cómo las bandas indie pueden lograr el éxito mainstream a través de las redes sociales.",
          de: "Dave Bayley von Glass Animals schuf 'Heat Waves', das zu einer viralen Sensation auf TikTok wurde und zeigte, wie Indie-Bands durch soziale Medien Mainstream-Erfolg erzielen können.",
          nl: "Dave Bayley van Glass Animals creëerde 'Heat Waves', dat een virale sensatie werd op TikTok en toonde hoe indie bands mainstream succes kunnen behalen via sociale media."
        }
      },
      {
        question: {
          en: "Who is known as the 'Queen of Pop' and sang 'Like a Prayer'?",
          es: "¿Quién es conocida como la 'Reina del Pop' y cantó 'Like a Prayer'?",
          de: "Wer ist als 'Queen of Pop' bekannt und sang 'Like a Prayer'?",
          nl: "Wie staat bekend als de 'Queen of Pop' en zong 'Like a Prayer'?"
        },
        options: [
          { en: "Madonna", es: "Madonna", de: "Madonna", nl: "Madonna" },
          { en: "Whitney Houston", es: "Whitney Houston", de: "Whitney Houston", nl: "Whitney Houston" },
          { en: "Mariah Carey", es: "Mariah Carey", de: "Mariah Carey", nl: "Mariah Carey" },
          { en: "Cher", es: "Cher", de: "Cher", nl: "Cher" }
        ],
        correct: 0,
        explanation: {
          en: "Madonna has been called the 'Queen of Pop' since the 1980s. With hits like 'Like a Prayer', 'Vogue', and 'Material Girl', she became one of the best-selling music artists of all time and a cultural icon known for constantly reinventing her image and sound.",
          es: "Madonna ha sido llamada la 'Reina del Pop' desde los años 80. Con éxitos como 'Like a Prayer', 'Vogue' y 'Material Girl', se convirtió en una de las artistas musicales más vendidas de todos los tiempos y un ícono cultural conocido por reinventar constantemente su imagen y sonido.",
          de: "Madonna wird seit den 1980er Jahren als 'Queen of Pop' bezeichnet. Mit Hits wie 'Like a Prayer', 'Vogue' und 'Material Girl' wurde sie zu einer der meistverkauften Musikkünstlerinnen aller Zeiten und einer Kulturikone, die bekannt dafür ist, ihr Image und ihren Sound ständig neu zu erfinden.",
          nl: "Madonna wordt sinds de jaren 80 de 'Queen of Pop' genoemd. Met hits als 'Like a Prayer', 'Vogue' en 'Material Girl' werd ze een van de bestverkopende muziekartiesten aller tijden en een cultureel icoon bekend om het voortdurend heruitvinden van haar image en geluid."
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