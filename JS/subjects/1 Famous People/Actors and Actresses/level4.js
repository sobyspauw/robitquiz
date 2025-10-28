// Actors and Actresses Quiz - Level 4: Oscar Winners and Classic Film Actors
(function() {
  const level4 = {
    name: {
      en: "Actors and Actresses Level 4",
      es: "Actores y Actrices Nivel 4",
      de: "Schauspieler und Schauspielerinnen Stufe 4",
      nl: "Acteurs en Actrices Level 4"
    },
    questions: [
      {
        question: {
          en: "Who won the Academy Award for Best Actor for 'The Godfather' (1972)?",
          es: "¿Quién ganó el Premio de la Academia al Mejor Actor por 'El Padrino' (1972)?",
          de: "Wer gewann den Academy Award für den besten Hauptdarsteller für 'Der Pate' (1972)?",
          nl: "Wie won de Academy Award voor Beste Acteur voor 'The Godfather' (1972)?"
        },
        options: [
          { en: "Marlon Brando", es: "Marlon Brando", de: "Marlon Brando", nl: "Marlon Brando" },
          { en: "Al Pacino", es: "Al Pacino", de: "Al Pacino", nl: "Al Pacino" },
          { en: "James Caan", es: "James Caan", de: "James Caan", nl: "James Caan" },
          { en: "Robert Duvall", es: "Robert Duvall", de: "Robert Duvall", nl: "Robert Duvall" }
        ],
        correct: 0,
        explanation: {
          en: "Marlon Brando won the Academy Award for Best Actor for his iconic portrayal of Don Vito Corleone in The Godfather, though he famously refused to accept the award.",
          es: "Marlon Brando ganó el Premio de la Academia al Mejor Actor por su icónica interpretación de Don Vito Corleone en El Padrino, aunque famosamente se negó a aceptar el premio.",
          de: "Marlon Brando gewann den Academy Award für den besten Hauptdarsteller für seine ikonische Darstellung von Don Vito Corleone in Der Pate, obwohl er den Preis berühmt verweigerte.",
          nl: "Marlon Brando won de Academy Award voor Beste Acteur voor zijn iconische vertolking van Don Vito Corleone in The Godfather, hoewel hij de prijs bekenderwijs weigerde te accepteren."
        }
      },
      {
        question: {
          en: "Which actress won three Academy Awards for Best Actress in the 1980s?",
          es: "¿Qué actriz ganó tres Premios de la Academia a la Mejor Actriz en los años 80?",
          de: "Welche Schauspielerin gewann in den 1980er Jahren drei Academy Awards für die beste Hauptdarstellerin?",
          nl: "Welke actrice won drie Academy Awards voor Beste Actrice in de jaren 80?"
        },
        options: [
          { en: "Meryl Streep", es: "Meryl Streep", de: "Meryl Streep", nl: "Meryl Streep" },
          { en: "Jessica Lange", es: "Jessica Lange", de: "Jessica Lange", nl: "Jessica Lange" },
          { en: "Sally Field", es: "Sally Field", de: "Sally Field", nl: "Sally Field" },
          { en: "Shirley MacLaine", es: "Shirley MacLaine", de: "Shirley MacLaine", nl: "Shirley MacLaine" }
        ],
        correct: 0,
        explanation: {
          en: "Meryl Streep won Academy Awards for Best Supporting Actress for Kramer vs. Kramer (1979) and Best Actress for Sophie's Choice (1982) and The Iron Lady (2011), making her the most nominated actor in Oscar history.",
          es: "Meryl Streep ganó Premios de la Academia a la Mejor Actriz de Reparto por Kramer vs. Kramer (1979) y a la Mejor Actriz por La decisión de Sophie (1982) y La Dama de Hierro (2011), convirtiéndola en la actriz más nominada en la historia de los Oscar.",
          de: "Meryl Streep gewann Academy Awards für die beste Nebendarstellerin für Kramer vs. Kramer (1979) und für die beste Hauptdarstellerin für Sophies Entscheidung (1982) und Die Eiserne Lady (2011), was sie zur meistnominierten Schauspielerin der Oscar-Geschichte macht.",
          nl: "Meryl Streep won Academy Awards voor Beste Bijrolactrice voor Kramer vs. Kramer (1979) en voor Beste Actrice voor Sophie's Choice (1982) en The Iron Lady (2011), wat haar de meest genomineerde acteur in Oscar geschiedenis maakt."
        }
      },
      {
        question: {
          en: "Who played Vito Corleone in 'The Godfather Part II' and won an Oscar for it?",
          es: "¿Quién interpretó a Vito Corleone en 'El Padrino Parte II' y ganó un Oscar por ello?",
          de: "Wer spielte Vito Corleone in 'Der Pate Teil II' und gewann dafür einen Oscar?",
          nl: "Wie speelde Vito Corleone in 'The Godfather Part II' en won er een Oscar voor?"
        },
        options: [
          { en: "Robert De Niro", es: "Robert De Niro", de: "Robert De Niro", nl: "Robert De Niro" },
          { en: "Al Pacino", es: "Al Pacino", de: "Al Pacino", nl: "Al Pacino" },
          { en: "James Caan", es: "James Caan", de: "James Caan", nl: "James Caan" },
          { en: "John Cazale", es: "John Cazale", de: "John Cazale", nl: "John Cazale" }
        ],
        correct: 0,
        explanation: {
          en: "Robert De Niro won the Academy Award for Best Supporting Actor for portraying the young Vito Corleone in The Godfather Part II, making him and Marlon Brando the only actors to win Oscars for playing the same character.",
          es: "Robert De Niro ganó el Premio de la Academia al Mejor Actor de Reparto por interpretar al joven Vito Corleone en El Padrino Parte II, convirtiéndolo junto a Marlon Brando en los únicos actores en ganar Oscars por interpretar el mismo personaje.",
          de: "Robert De Niro gewann den Academy Award für den besten Nebendarsteller für die Darstellung des jungen Vito Corleone in Der Pate Teil II, was ihn und Marlon Brando zu den einzigen Schauspielern macht, die Oscars für die Darstellung derselben Figur gewannen.",
          nl: "Robert De Niro won de Academy Award voor Beste Bijrolacteur voor het spelen van de jonge Vito Corleone in The Godfather Part II, waardoor hij en Marlon Brando de enige acteurs zijn die Oscars wonnen voor het spelen van hetzelfde personage."
        }
      },
      {
        question: {
          en: "Which actor won back-to-back Academy Awards for Best Actor in 1993 and 1994?",
          es: "¿Qué actor ganó Premios de la Academia consecutivos al Mejor Actor en 1993 y 1994?",
          de: "Welcher Schauspieler gewann aufeinanderfolgende Academy Awards für den besten Hauptdarsteller in 1993 und 1994?",
          nl: "Welke acteur won opeenvolgende Academy Awards voor Beste Acteur in 1993 en 1994?"
        },
        options: [
          { en: "Tom Hanks", es: "Tom Hanks", de: "Tom Hanks", nl: "Tom Hanks" },
          { en: "Anthony Hopkins", es: "Anthony Hopkins", de: "Anthony Hopkins", nl: "Anthony Hopkins" },
          { en: "Daniel Day-Lewis", es: "Daniel Day-Lewis", de: "Daniel Day-Lewis", nl: "Daniel Day-Lewis" },
          { en: "Kevin Costner", es: "Kevin Costner", de: "Kevin Costner", nl: "Kevin Costner" }
        ],
        correct: 0,
        explanation: {
          en: "Tom Hanks won consecutive Academy Awards for Best Actor for Philadelphia (1993) and Forrest Gump (1994), showcasing his remarkable range and talent.",
          es: "Tom Hanks ganó Premios de la Academia consecutivos al Mejor Actor por Philadelphia (1993) y Forrest Gump (1994), mostrando su notable versatilidad y talento.",
          de: "Tom Hanks gewann aufeinanderfolgende Academy Awards für den besten Hauptdarsteller für Philadelphia (1993) und Forrest Gump (1994), was seine bemerkenswerte Vielseitigkeit und sein Talent zeigte.",
          nl: "Tom Hanks won opeenvolgende Academy Awards voor Beste Acteur voor Philadelphia (1993) en Forrest Gump (1994), wat zijn opmerkelijke veelzijdigheid en talent toonde."
        }
      },
      {
        question: {
          en: "Who won the Academy Award for Best Actor for 'Raging Bull' (1980)?",
          es: "¿Quién ganó el Premio de la Academia al Mejor Actor por 'Toro Salvaje' (1980)?",
          de: "Wer gewann den Academy Award für den besten Hauptdarsteller für 'Wie ein wilder Stier' (1980)?",
          nl: "Wie won de Academy Award voor Beste Acteur voor 'Raging Bull' (1980)?"
        },
        options: [
          { en: "Robert De Niro", es: "Robert De Niro", de: "Robert De Niro", nl: "Robert De Niro" },
          { en: "Al Pacino", es: "Al Pacino", de: "Al Pacino", nl: "Al Pacino" },
          { en: "John Travolta", es: "John Travolta", de: "John Travolta", nl: "John Travolta" },
          { en: "Robert Duvall", es: "Robert Duvall", de: "Robert Duvall", nl: "Robert Duvall" }
        ],
        correct: 0,
        explanation: {
          en: "Robert De Niro won the Academy Award for Best Actor for his transformative performance as boxer Jake LaMotta in Raging Bull, gaining 60 pounds for the role.",
          es: "Robert De Niro ganó el Premio de la Academia al Mejor Actor por su actuación transformadora como el boxeador Jake LaMotta en Toro Salvaje, ganando 60 libras para el papel.",
          de: "Robert De Niro gewann den Academy Award für den besten Hauptdarsteller für seine transformative Leistung als Boxer Jake LaMotta in Wie ein wilder Stier, wobei er 60 Pfund für die Rolle zunahm.",
          nl: "Robert De Niro won de Academy Award voor Beste Acteur voor zijn transformerende optreden als bokser Jake LaMotta in Raging Bull, waarbij hij 60 pond aankwam voor de rol."
        }
      },
      {
        question: {
          en: "Which actress won an Oscar for 'Gone with the Wind' (1939)?",
          es: "¿Qué actriz ganó un Oscar por 'Lo que el viento se llevó' (1939)?",
          de: "Welche Schauspielerin gewann einen Oscar für 'Vom Winde verweht' (1939)?",
          nl: "Welke actrice won een Oscar voor 'Gone with the Wind' (1939)?"
        },
        options: [
          { en: "Vivien Leigh", es: "Vivien Leigh", de: "Vivien Leigh", nl: "Vivien Leigh" },
          { en: "Olivia de Havilland", es: "Olivia de Havilland", de: "Olivia de Havilland", nl: "Olivia de Havilland" },
          { en: "Leslie Howard", es: "Leslie Howard", de: "Leslie Howard", nl: "Leslie Howard" },
          { en: "Hattie McDaniel", es: "Hattie McDaniel", de: "Hattie McDaniel", nl: "Hattie McDaniel" }
        ],
        correct: 0,
        explanation: {
          en: "Vivien Leigh won the Academy Award for Best Actress for her iconic portrayal of Scarlett O'Hara in Gone with the Wind, one of cinema's most memorable performances.",
          es: "Vivien Leigh ganó el Premio de la Academia a la Mejor Actriz por su icónica interpretación de Scarlett O'Hara en Lo que el viento se llevó, una de las actuaciones más memorables del cine.",
          de: "Vivien Leigh gewann den Academy Award für die beste Hauptdarstellerin für ihre ikonische Darstellung von Scarlett O'Hara in Vom Winde verweht, eine der unvergesslichsten Leistungen des Kinos.",
          nl: "Vivien Leigh won de Academy Award voor Beste Actrice voor haar iconische vertolking van Scarlett O'Hara in Gone with the Wind, een van de meest memorabele optredens van de cinema."
        }
      },
      {
        question: {
          en: "Who was the first actor to win an Academy Award for Best Actor?",
          es: "¿Quién fue el primer actor en ganar un Premio de la Academia al Mejor Actor?",
          de: "Wer war der erste Schauspieler, der einen Academy Award für den besten Hauptdarsteller gewann?",
          nl: "Wie was de eerste acteur die een Academy Award voor Beste Acteur won?"
        },
        options: [
          { en: "Emil Jannings", es: "Emil Jannings", de: "Emil Jannings", nl: "Emil Jannings" },
          { en: "Warner Baxter", es: "Warner Baxter", de: "Warner Baxter", nl: "Warner Baxter" },
          { en: "George Arliss", es: "George Arliss", de: "George Arliss", nl: "George Arliss" },
          { en: "Lionel Barrymore", es: "Lionel Barrymore", de: "Lionel Barrymore", nl: "Lionel Barrymore" }
        ],
        correct: 0,
        explanation: {
          en: "Emil Jannings won the first Academy Award for Best Actor at the inaugural ceremony in 1929, honored for his performances in 'The Last Command' and 'The Way of All Flesh'.",
          es: "Emil Jannings ganó el primer Premio de la Academia al Mejor Actor en la ceremonia inaugural de 1929, honrado por sus actuaciones en 'The Last Command' y 'The Way of All Flesh'.",
          de: "Emil Jannings gewann den ersten Academy Award für den besten Hauptdarsteller bei der Eröffnungszeremonie 1929, geehrt für seine Leistungen in 'The Last Command' und 'The Way of All Flesh'.",
          nl: "Emil Jannings won de eerste Academy Award voor Beste Acteur bij de inaugurele ceremonie in 1929, geëerd voor zijn optredens in 'The Last Command' en 'The Way of All Flesh'."
        }
      },
      {
        question: {
          en: "Which actor won an Oscar for 'One Flew Over the Cuckoo's Nest' (1975)?",
          es: "¿Qué actor ganó un Oscar por 'Alguien voló sobre el nido del cuco' (1975)?",
          de: "Welcher Schauspieler gewann einen Oscar für 'Einer flog über das Kuckucksnest' (1975)?",
          nl: "Welke acteur won een Oscar voor 'One Flew Over the Cuckoo's Nest' (1975)?"
        },
        options: [
          { en: "Jack Nicholson", es: "Jack Nicholson", de: "Jack Nicholson", nl: "Jack Nicholson" },
          { en: "Danny DeVito", es: "Danny DeVito", de: "Danny DeVito", nl: "Danny DeVito" },
          { en: "Christopher Lloyd", es: "Christopher Lloyd", de: "Christopher Lloyd", nl: "Christopher Lloyd" },
          { en: "Louise Fletcher", es: "Louise Fletcher", de: "Louise Fletcher", nl: "Louise Fletcher" }
        ],
        correct: 0,
        explanation: {
          en: "Jack Nicholson won the Academy Award for Best Actor for his rebellious performance as Randle McMurphy in One Flew Over the Cuckoo's Nest, one of his most iconic roles.",
          es: "Jack Nicholson ganó el Premio de la Academia al Mejor Actor por su actuación rebelde como Randle McMurphy en Alguien voló sobre el nido del cuco, uno de sus papeles más icónicos.",
          de: "Jack Nicholson gewann den Academy Award für den besten Hauptdarsteller für seine rebellische Leistung als Randle McMurphy in Einer flog über das Kuckucksnest, eine seiner ikonischsten Rollen.",
          nl: "Jack Nicholson won de Academy Award voor Beste Acteur voor zijn opstandige optreden als Randle McMurphy in One Flew Over the Cuckoo's Nest, een van zijn meest iconische rollen."
        }
      },
      {
        question: {
          en: "Who won the Academy Award for Best Actress for 'Roman Holiday' (1953)?",
          es: "¿Quién ganó el Premio de la Academia a la Mejor Actriz por 'Vacaciones en Roma' (1953)?",
          de: "Wer gewann den Academy Award für die beste Hauptdarstellerin für 'Ein Herz und eine Krone' (1953)?",
          nl: "Wie won de Academy Award voor Beste Actrice voor 'Roman Holiday' (1953)?"
        },
        options: [
          { en: "Audrey Hepburn", es: "Audrey Hepburn", de: "Audrey Hepburn", nl: "Audrey Hepburn" },
          { en: "Grace Kelly", es: "Grace Kelly", de: "Grace Kelly", nl: "Grace Kelly" },
          { en: "Elizabeth Taylor", es: "Elizabeth Taylor", de: "Elizabeth Taylor", nl: "Elizabeth Taylor" },
          { en: "Marilyn Monroe", es: "Marilyn Monroe", de: "Marilyn Monroe", nl: "Marilyn Monroe" }
        ],
        correct: 0,
        explanation: {
          en: "Audrey Hepburn won the Academy Award for Best Actress for her film debut in Roman Holiday, launching her career as one of Hollywood's most beloved stars.",
          es: "Audrey Hepburn ganó el Premio de la Academia a la Mejor Actriz por su debut cinematográfico en Vacaciones en Roma, lanzando su carrera como una de las estrellas más queridas de Hollywood.",
          de: "Audrey Hepburn gewann den Academy Award für die beste Hauptdarstellerin für ihr Filmdebüt in Ein Herz und eine Krone, was ihre Karriere als einer der beliebtesten Hollywood-Stars startete.",
          nl: "Audrey Hepburn won de Academy Award voor Beste Actrice voor haar filmdebuut in Roman Holiday, wat haar carrière als een van Hollywood's meest geliefde sterren lanceerde."
        }
      },
      {
        question: {
          en: "Which actor has won the most Academy Awards for Best Actor?",
          es: "¿Qué actor ha ganado más Premios de la Academia al Mejor Actor?",
          de: "Welcher Schauspieler hat die meisten Academy Awards für den besten Hauptdarsteller gewonnen?",
          nl: "Welke acteur heeft de meeste Academy Awards voor Beste Acteur gewonnen?"
        },
        options: [
          { en: "Daniel Day-Lewis", es: "Daniel Day-Lewis", de: "Daniel Day-Lewis", nl: "Daniel Day-Lewis" },
          { en: "Jack Nicholson", es: "Jack Nicholson", de: "Jack Nicholson", nl: "Jack Nicholson" },
          { en: "Walter Brennan", es: "Walter Brennan", de: "Walter Brennan", nl: "Walter Brennan" },
          { en: "Spencer Tracy", es: "Spencer Tracy", de: "Spencer Tracy", nl: "Spencer Tracy" }
        ],
        correct: 0,
        explanation: {
          en: "Daniel Day-Lewis holds the record for most Academy Awards for Best Actor with three wins: My Left Foot (1989), There Will Be Blood (2007), and Lincoln (2012).",
          es: "Daniel Day-Lewis tiene el récord de más Premios de la Academia al Mejor Actor con tres victorias: My Left Foot (1989), There Will Be Blood (2007) y Lincoln (2012).",
          de: "Daniel Day-Lewis hält den Rekord für die meisten Academy Awards für den besten Hauptdarsteller mit drei Gewinnen: My Left Foot (1989), There Will Be Blood (2007) und Lincoln (2012).",
          nl: "Daniel Day-Lewis heeft het record voor de meeste Academy Awards voor Beste Acteur met drie overwinningen: My Left Foot (1989), There Will Be Blood (2007) en Lincoln (2012)."
        }
      },
      {
        question: {
          en: "Who won an Oscar for 'The Silence of the Lambs' (1991)?",
          es: "¿Quién ganó un Oscar por 'El silencio de los corderos' (1991)?",
          de: "Wer gewann einen Oscar für 'Das Schweigen der Lämmer' (1991)?",
          nl: "Wie won een Oscar voor 'The Silence of the Lambs' (1991)?"
        },
        options: [
          { en: "Both Jodie Foster and Anthony Hopkins", es: "Tanto Jodie Foster como Anthony Hopkins", de: "Sowohl Jodie Foster als auch Anthony Hopkins", nl: "Zowel Jodie Foster als Anthony Hopkins" },
          { en: "Only Jodie Foster", es: "Solo Jodie Foster", de: "Nur Jodie Foster", nl: "Alleen Jodie Foster" },
          { en: "Only Anthony Hopkins", es: "Solo Anthony Hopkins", de: "Nur Anthony Hopkins", nl: "Alleen Anthony Hopkins" },
          { en: "Neither of them", es: "Ninguno de ellos", de: "Keiner von beiden", nl: "Geen van beiden" }
        ],
        correct: 0,
        explanation: {
          en: "Both Jodie Foster (Best Actress) and Anthony Hopkins (Best Actor) won Academy Awards for The Silence of the Lambs, which also won Best Picture, making it one of only three films to win the 'Big Five' categories.",
          es: "Tanto Jodie Foster (Mejor Actriz) como Anthony Hopkins (Mejor Actor) ganaron Premios de la Academia por El silencio de los corderos, que también ganó Mejor Película, convirtiéndola en una de las tres únicas películas en ganar las 'Cinco Grandes' categorías.",
          de: "Sowohl Jodie Foster (Beste Hauptdarstellerin) als auch Anthony Hopkins (Bester Hauptdarsteller) gewannen Academy Awards für Das Schweigen der Lämmer, das auch den besten Film gewann und damit zu einem von nur drei Filmen gehört, die die 'Big Five'-Kategorien gewannen.",
          nl: "Zowel Jodie Foster (Beste Actrice) als Anthony Hopkins (Beste Acteur) wonnen Academy Awards voor The Silence of the Lambs, dat ook Beste Film won, waardoor het een van de slechts drie films is die de 'Big Five' categorieën won."
        }
      },
      {
        question: {
          en: "Which actor won an Oscar for 'Taxi Driver' (1976)?",
          es: "¿Qué actor ganó un Oscar por 'Taxi Driver' (1976)?",
          de: "Welcher Schauspieler gewann einen Oscar für 'Taxi Driver' (1976)?",
          nl: "Welke acteur won een Oscar voor 'Taxi Driver' (1976)?"
        },
        options: [
          { en: "No one - it wasn't nominated for acting Oscars", es: "Nadie - no fue nominada para Oscars de actuación", de: "Niemand - es war nicht für Schauspiel-Oscars nominiert", nl: "Niemand - het was niet genomineerd voor acteer-Oscars" },
          { en: "Robert De Niro", es: "Robert De Niro", de: "Robert De Niro", nl: "Robert De Niro" },
          { en: "Jodie Foster", es: "Jodie Foster", de: "Jodie Foster", nl: "Jodie Foster" },
          { en: "Harvey Keitel", es: "Harvey Keitel", de: "Harvey Keitel", nl: "Harvey Keitel" }
        ],
        correct: 1,
        explanation: {
          en: "Robert De Niro was nominated for Best Actor for Taxi Driver but did not win. He lost to Peter Finch for Network. However, De Niro's performance as Travis Bickle remains one of cinema's most memorable.",
          es: "Robert De Niro fue nominado al Mejor Actor por Taxi Driver pero no ganó. Perdió ante Peter Finch por Network. Sin embargo, la actuación de De Niro como Travis Bickle sigue siendo una de las más memorables del cine.",
          de: "Robert De Niro war für Taxi Driver als bester Hauptdarsteller nominiert, gewann aber nicht. Er verlor gegen Peter Finch für Network. De Niros Leistung als Travis Bickle bleibt jedoch eine der unvergesslichsten des Kinos.",
          nl: "Robert De Niro was genomineerd voor Beste Acteur voor Taxi Driver maar won niet. Hij verloor van Peter Finch voor Network. De Niro's optreden als Travis Bickle blijft echter een van de meest memorabele van de cinema."
        }
      },
      {
        question: {
          en: "Who won the Academy Award for Best Actress for 'Casablanca' (1942)?",
          es: "¿Quién ganó el Premio de la Academia a la Mejor Actriz por 'Casablanca' (1942)?",
          de: "Wer gewann den Academy Award für die beste Hauptdarstellerin für 'Casablanca' (1942)?",
          nl: "Wie won de Academy Award voor Beste Actrice voor 'Casablanca' (1942)?"
        },
        options: [
          { en: "No one - Ingrid Bergman wasn't nominated", es: "Nadie - Ingrid Bergman no fue nominada", de: "Niemand - Ingrid Bergman war nicht nominiert", nl: "Niemand - Ingrid Bergman was niet genomineerd" },
          { en: "Ingrid Bergman", es: "Ingrid Bergman", de: "Ingrid Bergman", nl: "Ingrid Bergman" },
          { en: "Greer Garson", es: "Greer Garson", de: "Greer Garson", nl: "Greer Garson" },
          { en: "Joan Fontaine", es: "Joan Fontaine", de: "Joan Fontaine", nl: "Joan Fontaine" }
        ],
        correct: 0,
        explanation: {
          en: "Surprisingly, neither Ingrid Bergman nor Humphrey Bogart were nominated for acting Oscars for Casablanca. The film won Best Picture, but the lead performances went unrecognized by the Academy that year.",
          es: "Sorprendentemente, ni Ingrid Bergman ni Humphrey Bogart fueron nominados a Oscars de actuación por Casablanca. La película ganó Mejor Película, pero las actuaciones principales no fueron reconocidas por la Academia ese año.",
          de: "Überraschenderweise wurden weder Ingrid Bergman noch Humphrey Bogart für Schauspiel-Oscars für Casablanca nominiert. Der Film gewann den besten Film, aber die Hauptleistungen wurden von der Akademie in diesem Jahr nicht anerkannt.",
          nl: "Verrassend genoeg werden noch Ingrid Bergman noch Humphrey Bogart genomineerd voor acteer-Oscars voor Casablanca. De film won Beste Film, maar de hoofdoptredens werden dat jaar niet erkend door de Academy."
        }
      },
      {
        question: {
          en: "Which actress won consecutive Academy Awards in 1967 and 1968?",
          es: "¿Qué actriz ganó Premios de la Academia consecutivos en 1967 y 1968?",
          de: "Welche Schauspielerin gewann aufeinanderfolgende Academy Awards in 1967 und 1968?",
          nl: "Welke actrice won opeenvolgende Academy Awards in 1967 en 1968?"
        },
        options: [
          { en: "Katharine Hepburn", es: "Katharine Hepburn", de: "Katharine Hepburn", nl: "Katharine Hepburn" },
          { en: "Elizabeth Taylor", es: "Elizabeth Taylor", de: "Elizabeth Taylor", nl: "Elizabeth Taylor" },
          { en: "Julie Andrews", es: "Julie Andrews", de: "Julie Andrews", nl: "Julie Andrews" },
          { en: "Barbra Streisand", es: "Barbra Streisand", de: "Barbra Streisand", nl: "Barbra Streisand" }
        ],
        correct: 0,
        explanation: {
          en: "Katharine Hepburn won consecutive Academy Awards for Best Actress for Guess Who's Coming to Dinner (1967) and The Lion in Winter (1968), part of her record four Best Actress wins.",
          es: "Katharine Hepburn ganó Premios de la Academia consecutivos a la Mejor Actriz por Guess Who's Coming to Dinner (1967) y The Lion in Winter (1968), parte de sus récord cuatro victorias de Mejor Actriz.",
          de: "Katharine Hepburn gewann aufeinanderfolgende Academy Awards für die beste Hauptdarstellerin für Guess Who's Coming to Dinner (1967) und The Lion in Winter (1968), Teil ihrer Rekord vier Gewinne als beste Hauptdarstellerin.",
          nl: "Katharine Hepburn won opeenvolgende Academy Awards voor Beste Actrice voor Guess Who's Coming to Dinner (1967) en The Lion in Winter (1968), onderdeel van haar record vier Beste Actrice overwinningen."
        }
      },
      {
        question: {
          en: "Who won an Oscar for 'The French Connection' (1971)?",
          es: "¿Quién ganó un Oscar por 'Contacto en Francia' (1971)?",
          de: "Wer gewann einen Oscar für 'French Connection' (1971)?",
          nl: "Wie won een Oscar voor 'The French Connection' (1971)?"
        },
        options: [
          { en: "Gene Hackman", es: "Gene Hackman", de: "Gene Hackman", nl: "Gene Hackman" },
          { en: "Roy Scheider", es: "Roy Scheider", de: "Roy Scheider", nl: "Roy Scheider" },
          { en: "Fernando Rey", es: "Fernando Rey", de: "Fernando Rey", nl: "Fernando Rey" },
          { en: "Marcel Bozzuffi", es: "Marcel Bozzuffi", de: "Marcel Bozzuffi", nl: "Marcel Bozzuffi" }
        ],
        correct: 0,
        explanation: {
          en: "Gene Hackman won the Academy Award for Best Actor for his gritty performance as Detective Jimmy 'Popeye' Doyle in The French Connection, a role that defined the tough cop archetype.",
          es: "Gene Hackman ganó el Premio de la Academia al Mejor Actor por su cruda actuación como el Detective Jimmy 'Popeye' Doyle en Contacto en Francia, un papel que definió el arquetipo del policía duro.",
          de: "Gene Hackman gewann den Academy Award für den besten Hauptdarsteller für seine raue Darstellung als Detective Jimmy 'Popeye' Doyle in French Connection, eine Rolle, die den Archetyp des harten Polizisten definierte.",
          nl: "Gene Hackman won de Academy Award voor Beste Acteur voor zijn ruwe optreden als Detective Jimmy 'Popeye' Doyle in The French Connection, een rol die het archetype van de harde politieagent definieerde."
        }
      },
      {
        question: {
          en: "Which actor won an Oscar for 'Network' (1976)?",
          es: "¿Qué actor ganó un Oscar por 'Network' (1976)?",
          de: "Welcher Schauspieler gewann einen Oscar für 'Network' (1976)?",
          nl: "Welke acteur won een Oscar voor 'Network' (1976)?"
        },
        options: [
          { en: "Peter Finch", es: "Peter Finch", de: "Peter Finch", nl: "Peter Finch" },
          { en: "William Holden", es: "William Holden", de: "William Holden", nl: "William Holden" },
          { en: "Robert Duvall", es: "Robert Duvall", de: "Robert Duvall", nl: "Robert Duvall" },
          { en: "Ned Beatty", es: "Ned Beatty", de: "Ned Beatty", nl: "Ned Beatty" }
        ],
        correct: 0,
        explanation: {
          en: "Peter Finch posthumously won the Academy Award for Best Actor for his passionate performance as news anchor Howard Beale in Network, famous for the line 'I'm mad as hell!'",
          es: "Peter Finch ganó póstumamente el Premio de la Academia al Mejor Actor por su apasionada actuación como el presentador de noticias Howard Beale en Network, famoso por la frase 'I'm mad as hell!'",
          de: "Peter Finch gewann posthum den Academy Award für den besten Hauptdarsteller für seine leidenschaftliche Darstellung als Nachrichtensprecher Howard Beale in Network, berühmt für die Zeile 'I'm mad as hell!'",
          nl: "Peter Finch won postuum de Academy Award voor Beste Acteur voor zijn gepassioneerde optreden als nieuwslezer Howard Beale in Network, beroemd om de regel 'I'm mad as hell!'"
        }
      },
      {
        question: {
          en: "Who was the youngest actor to win an Academy Award for Best Actor?",
          es: "¿Quién fue el actor más joven en ganar un Premio de la Academia al Mejor Actor?",
          de: "Wer war der jüngste Schauspieler, der einen Academy Award für den besten Hauptdarsteller gewann?",
          nl: "Wie was de jongste acteur die een Academy Award voor Beste Acteur won?"
        },
        options: [
          { en: "Adrien Brody", es: "Adrien Brody", de: "Adrien Brody", nl: "Adrien Brody" },
          { en: "Timothy Hutton", es: "Timothy Hutton", de: "Timothy Hutton", nl: "Timothy Hutton" },
          { en: "River Phoenix", es: "River Phoenix", de: "River Phoenix", nl: "River Phoenix" },
          { en: "Marlon Brando", es: "Marlon Brando", de: "Marlon Brando", nl: "Marlon Brando" }
        ],
        correct: 0,
        explanation: {
          en: "Adrien Brody became the youngest actor to win the Academy Award for Best Actor at age 29 for his performance in The Pianist (2002), breaking the previous record.",
          es: "Adrien Brody se convirtió en el actor más joven en ganar el Premio de la Academia al Mejor Actor a los 29 años por su actuación en El Pianista (2002), rompiendo el récord anterior.",
          de: "Adrien Brody wurde mit 29 Jahren der jüngste Schauspieler, der den Academy Award für den besten Hauptdarsteller für seine Leistung in Der Pianist (2002) gewann und damit den vorherigen Rekord brach.",
          nl: "Adrien Brody werd de jongste acteur die de Academy Award voor Beste Acteur won op 29-jarige leeftijd voor zijn optreden in The Pianist (2002), waarmee hij het vorige record verbrak."
        }
      },
      {
        question: {
          en: "Which actress holds the record for most Academy Award nominations?",
          es: "¿Qué actriz tiene el récord de más nominaciones al Premio de la Academia?",
          de: "Welche Schauspielerin hält den Rekord für die meisten Academy Award-Nominierungen?",
          nl: "Welke actrice heeft het record voor de meeste Academy Award nominaties?"
        },
        options: [
          { en: "Meryl Streep", es: "Meryl Streep", de: "Meryl Streep", nl: "Meryl Streep" },
          { en: "Katharine Hepburn", es: "Katharine Hepburn", de: "Katharine Hepburn", nl: "Katharine Hepburn" },
          { en: "Bette Davis", es: "Bette Davis", de: "Bette Davis", nl: "Bette Davis" },
          { en: "Glenn Close", es: "Glenn Close", de: "Glenn Close", nl: "Glenn Close" }
        ],
        correct: 0,
        explanation: {
          en: "Meryl Streep holds the record for most Academy Award nominations with 21 nominations (17 for Best Actress, 4 for Best Supporting Actress), winning 3 times.",
          es: "Meryl Streep tiene el récord de más nominaciones al Premio de la Academia con 21 nominaciones (17 para Mejor Actriz, 4 para Mejor Actriz de Reparto), ganando 3 veces.",
          de: "Meryl Streep hält den Rekord für die meisten Academy Award-Nominierungen mit 21 Nominierungen (17 für beste Hauptdarstellerin, 4 für beste Nebendarstellerin) und gewann 3 Mal.",
          nl: "Meryl Streep heeft het record voor de meeste Academy Award nominaties met 21 nominaties (17 voor Beste Actrice, 4 voor Beste Bijrolactrice), en won 3 keer."
        }
      },
      {
        question: {
          en: "Who won an Oscar for 'Midnight Cowboy' (1969)?",
          es: "¿Quién ganó un Oscar por 'Midnight Cowboy' (1969)?",
          de: "Wer gewann einen Oscar für 'Asphalt-Cowboy' (1969)?",
          nl: "Wie won een Oscar voor 'Midnight Cowboy' (1969)?"
        },
        options: [
          { en: "No actor won - only Best Picture", es: "Ningún actor ganó - solo Mejor Película", de: "Kein Schauspieler gewann - nur bester Film", nl: "Geen acteur won - alleen Beste Film" },
          { en: "Dustin Hoffman", es: "Dustin Hoffman", de: "Dustin Hoffman", nl: "Dustin Hoffman" },
          { en: "Jon Voight", es: "Jon Voight", de: "Jon Voight", nl: "Jon Voight" },
          { en: "Sylvia Miles", es: "Sylvia Miles", de: "Sylvia Miles", nl: "Sylvia Miles" }
        ],
        correct: 0,
        explanation: {
          en: "Midnight Cowboy won the Academy Award for Best Picture but neither Dustin Hoffman nor Jon Voight won acting Oscars, though both were nominated. It remains the only X-rated film to win Best Picture.",
          es: "Midnight Cowboy ganó el Premio de la Academia a la Mejor Película pero ni Dustin Hoffman ni Jon Voight ganaron Oscars de actuación, aunque ambos fueron nominados. Sigue siendo la única película con clasificación X en ganar Mejor Película.",
          de: "Asphalt-Cowboy gewann den Academy Award für den besten Film, aber weder Dustin Hoffman noch Jon Voight gewannen Schauspiel-Oscars, obwohl beide nominiert waren. Es bleibt der einzige X-bewertete Film, der den besten Film gewann.",
          nl: "Midnight Cowboy won de Academy Award voor Beste Film maar noch Dustin Hoffman noch Jon Voight won acteer-Oscars, hoewel beiden genomineerd waren. Het blijft de enige X-rated film die Beste Film won."
        }
      },
      {
        question: {
          en: "Which classic Hollywood actor was known as 'The King of Hollywood'?",
          es: "¿Qué actor clásico de Hollywood era conocido como 'El Rey de Hollywood'?",
          de: "Welcher klassische Hollywood-Schauspieler war als 'Der König von Hollywood' bekannt?",
          nl: "Welke klassieke Hollywood acteur stond bekend als 'The King of Hollywood'?"
        },
        options: [
          { en: "Clark Gable", es: "Clark Gable", de: "Clark Gable", nl: "Clark Gable" },
          { en: "Gary Cooper", es: "Gary Cooper", de: "Gary Cooper", nl: "Gary Cooper" },
          { en: "Cary Grant", es: "Cary Grant", de: "Cary Grant", nl: "Cary Grant" },
          { en: "James Stewart", es: "James Stewart", de: "James Stewart", nl: "James Stewart" }
        ],
        correct: 0,
        explanation: {
          en: "Clark Gable was nicknamed 'The King of Hollywood' and was one of the biggest movie stars of the 1930s and 1940s, most famous for his role as Rhett Butler in Gone with the Wind.",
          es: "Clark Gable fue apodado 'El Rey de Hollywood' y fue una de las estrellas de cine más grandes de los años 30 y 40, más famoso por su papel como Rhett Butler en Lo que el viento se llevó.",
          de: "Clark Gable wurde 'Der König von Hollywood' genannt und war einer der größten Filmstars der 1930er und 1940er Jahre, am berühmtesten für seine Rolle als Rhett Butler in Vom Winde verweht.",
          nl: "Clark Gable kreeg de bijnaam 'The King of Hollywood' en was een van de grootste filmsterren van de jaren 30 en 40, het meest beroemd om zijn rol als Rhett Butler in Gone with the Wind."
        }
      }
    ]
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level4;
  } else if (typeof window !== 'undefined') {
    window.level4 = level4;
  }
})();