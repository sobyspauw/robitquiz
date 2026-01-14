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
      },
      {
        question: {
          en: "Who won an Oscar for 'On the Waterfront' (1954)?",
          es: "¿Quién ganó un Oscar por 'La Ley del Silencio' (1954)?",
          de: "Wer gewann einen Oscar für 'Die Faust im Nacken' (1954)?",
          nl: "Wie won een Oscar voor 'On the Waterfront' (1954)?"
        },
        options: [
          { en: "Marlon Brando", es: "Marlon Brando", de: "Marlon Brando", nl: "Marlon Brando" },
          { en: "Karl Malden", es: "Karl Malden", de: "Karl Malden", nl: "Karl Malden" },
          { en: "Lee J. Cobb", es: "Lee J. Cobb", de: "Lee J. Cobb", nl: "Lee J. Cobb" },
          { en: "Rod Steiger", es: "Rod Steiger", de: "Rod Steiger", nl: "Rod Steiger" }
        ],
        correct: 0,
        explanation: {
          en: "Marlon Brando won the Academy Award for Best Actor for On the Waterfront, delivering the famous 'I coulda been a contender' speech.",
          es: "Marlon Brando ganó el Premio de la Academia al Mejor Actor por La Ley del Silencio, pronunciando el famoso discurso 'Pude haber sido un contendiente'.",
          de: "Marlon Brando gewann den Academy Award für den besten Hauptdarsteller für Die Faust im Nacken und hielt die berühmte 'Ich hätte ein Kandidat sein können'-Rede.",
          nl: "Marlon Brando won de Academy Award voor Beste Acteur voor On the Waterfront, waarbij hij de beroemde 'I coulda been a contender' speech uitsprak."
        }
      },
      {
        question: {
          en: "Which actress won an Oscar for 'The Blind Side' (2009)?",
          es: "¿Qué actriz ganó un Oscar por 'Un Sueño Posible' (2009)?",
          de: "Welche Schauspielerin gewann einen Oscar für 'The Blind Side' (2009)?",
          nl: "Welke actrice won een Oscar voor 'The Blind Side' (2009)?"
        },
        options: [
          { en: "Sandra Bullock", es: "Sandra Bullock", de: "Sandra Bullock", nl: "Sandra Bullock" },
          { en: "Julia Roberts", es: "Julia Roberts", de: "Julia Roberts", nl: "Julia Roberts" },
          { en: "Reese Witherspoon", es: "Reese Witherspoon", de: "Reese Witherspoon", nl: "Reese Witherspoon" },
          { en: "Hilary Swank", es: "Hilary Swank", de: "Hilary Swank", nl: "Hilary Swank" }
        ],
        correct: 0,
        explanation: {
          en: "Sandra Bullock won the Academy Award for Best Actress for her portrayal of Leigh Anne Tuohy, a woman who adopts and mentors NFL player Michael Oher.",
          es: "Sandra Bullock ganó el Premio de la Academia a la Mejor Actriz por su interpretación de Leigh Anne Tuohy, una mujer que adopta y mentoriza al jugador de la NFL Michael Oher.",
          de: "Sandra Bullock gewann den Academy Award für die beste Hauptdarstellerin für ihre Darstellung von Leigh Anne Tuohy, einer Frau, die den NFL-Spieler Michael Oher adoptiert und betreut.",
          nl: "Sandra Bullock won de Academy Award voor Beste Actrice voor haar vertolking van Leigh Anne Tuohy, een vrouw die NFL-speler Michael Oher adopteert en begeleidt."
        }
      },
      {
        question: {
          en: "Who won an Oscar for 'My Left Foot' (1989)?",
          es: "¿Quién ganó un Oscar por 'Mi Pie Izquierdo' (1989)?",
          de: "Wer gewann einen Oscar für 'Mein linker Fuß' (1989)?",
          nl: "Wie won een Oscar voor 'My Left Foot' (1989)?"
        },
        options: [
          { en: "Daniel Day-Lewis", es: "Daniel Day-Lewis", de: "Daniel Day-Lewis", nl: "Daniel Day-Lewis" },
          { en: "Brenda Fricker", es: "Brenda Fricker", de: "Brenda Fricker", nl: "Brenda Fricker" },
          { en: "Hugh O'Conor", es: "Hugh O'Conor", de: "Hugh O'Conor", nl: "Hugh O'Conor" },
          { en: "Fiona Shaw", es: "Fiona Shaw", de: "Fiona Shaw", nl: "Fiona Shaw" }
        ],
        correct: 0,
        explanation: {
          en: "Daniel Day-Lewis won his first Academy Award for Best Actor for his transformative portrayal of Irish writer Christy Brown, who had cerebral palsy.",
          es: "Daniel Day-Lewis ganó su primer Premio de la Academia al Mejor Actor por su interpretación transformadora del escritor irlandés Christy Brown, quien tenía parálisis cerebral.",
          de: "Daniel Day-Lewis gewann seinen ersten Academy Award für den besten Hauptdarsteller für seine transformative Darstellung des irischen Schriftstellers Christy Brown, der zerebrale Lähmung hatte.",
          nl: "Daniel Day-Lewis won zijn eerste Academy Award voor Beste Acteur voor zijn transformerende vertolking van de Ierse schrijver Christy Brown, die cerebrale parese had."
        }
      },
      {
        question: {
          en: "Which actress won an Oscar for 'Million Dollar Baby' (2004)?",
          es: "¿Qué actriz ganó un Oscar por 'Million Dollar Baby' (2004)?",
          de: "Welche Schauspielerin gewann einen Oscar für 'Million Dollar Baby' (2004)?",
          nl: "Welke actrice won een Oscar voor 'Million Dollar Baby' (2004)?"
        },
        options: [
          { en: "Hilary Swank", es: "Hilary Swank", de: "Hilary Swank", nl: "Hilary Swank" },
          { en: "Morgan Freeman", es: "Morgan Freeman", de: "Morgan Freeman", nl: "Morgan Freeman" },
          { en: "Clint Eastwood", es: "Clint Eastwood", de: "Clint Eastwood", nl: "Clint Eastwood" },
          { en: "Annette Bening", es: "Annette Bening", de: "Annette Bening", nl: "Annette Bening" }
        ],
        correct: 0,
        explanation: {
          en: "Hilary Swank won her second Academy Award for Best Actress for playing a determined boxer in Million Dollar Baby, directed by Clint Eastwood.",
          es: "Hilary Swank ganó su segundo Premio de la Academia a la Mejor Actriz por interpretar a una boxeadora determinada en Million Dollar Baby, dirigida por Clint Eastwood.",
          de: "Hilary Swank gewann ihren zweiten Academy Award für die beste Hauptdarstellerin für die Darstellung einer entschlossenen Boxerin in Million Dollar Baby unter der Regie von Clint Eastwood.",
          nl: "Hilary Swank won haar tweede Academy Award voor Beste Actrice voor het spelen van een vastberaden bokser in Million Dollar Baby, geregisseerd door Clint Eastwood."
        }
      },
      {
        question: {
          en: "Who won an Oscar for 'A Streetcar Named Desire' (1951)?",
          es: "¿Quién ganó un Oscar por 'Un Tranvía Llamado Deseo' (1951)?",
          de: "Wer gewann einen Oscar für 'Endstation Sehnsucht' (1951)?",
          nl: "Wie won een Oscar voor 'A Streetcar Named Desire' (1951)?"
        },
        options: [
          { en: "Vivien Leigh", es: "Vivien Leigh", de: "Vivien Leigh", nl: "Vivien Leigh" },
          { en: "Marlon Brando", es: "Marlon Brando", de: "Marlon Brando", nl: "Marlon Brando" },
          { en: "Kim Hunter", es: "Kim Hunter", de: "Kim Hunter", nl: "Kim Hunter" },
          { en: "Karl Malden", es: "Karl Malden", de: "Karl Malden", nl: "Karl Malden" }
        ],
        correct: 0,
        explanation: {
          en: "Vivien Leigh won the Academy Award for Best Actress for her haunting portrayal of Blanche DuBois in A Streetcar Named Desire, her second Oscar.",
          es: "Vivien Leigh ganó el Premio de la Academia a la Mejor Actriz por su inquietante interpretación de Blanche DuBois en Un Tranvía Llamado Deseo, su segundo Oscar.",
          de: "Vivien Leigh gewann den Academy Award für die beste Hauptdarstellerin für ihre eindringliche Darstellung von Blanche DuBois in Endstation Sehnsucht, ihr zweiter Oscar.",
          nl: "Vivien Leigh won de Academy Award voor Beste Actrice voor haar spookachtige vertolking van Blanche DuBois in A Streetcar Named Desire, haar tweede Oscar."
        }
      },
      {
        question: {
          en: "Which actor won an Oscar for 'The Pianist' (2002)?",
          es: "¿Qué actor ganó un Oscar por 'El Pianista' (2002)?",
          de: "Welcher Schauspieler gewann einen Oscar für 'Der Pianist' (2002)?",
          nl: "Welke acteur won een Oscar voor 'The Pianist' (2002)?"
        },
        options: [
          { en: "Adrien Brody", es: "Adrien Brody", de: "Adrien Brody", nl: "Adrien Brody" },
          { en: "Ed Harris", es: "Ed Harris", de: "Ed Harris", nl: "Ed Harris" },
          { en: "Thomas Kretschmann", es: "Thomas Kretschmann", de: "Thomas Kretschmann", nl: "Thomas Kretschmann" },
          { en: "Frank Finlay", es: "Frank Finlay", de: "Frank Finlay", nl: "Frank Finlay" }
        ],
        correct: 0,
        explanation: {
          en: "Adrien Brody became the youngest actor to win the Academy Award for Best Actor at age 29 for his portrayal of Holocaust survivor Władysław Szpilman.",
          es: "Adrien Brody se convirtió en el actor más joven en ganar el Premio de la Academia al Mejor Actor a los 29 años por su interpretación del sobreviviente del Holocausto Władysław Szpilman.",
          de: "Adrien Brody wurde mit 29 Jahren der jüngste Schauspieler, der den Academy Award für den besten Hauptdarsteller für seine Darstellung des Holocaust-Überlebenden Władysław Szpilman gewann.",
          nl: "Adrien Brody werd de jongste acteur die de Academy Award voor Beste Acteur won op 29-jarige leeftijd voor zijn vertolking van Holocaust-overlevende Władysław Szpilman."
        }
      },
      {
        question: {
          en: "Who won an Oscar for 'Boys Don't Cry' (1999)?",
          es: "¿Quién ganó un Oscar por 'Boys Don't Cry' (1999)?",
          de: "Wer gewann einen Oscar für 'Boys Don't Cry' (1999)?",
          nl: "Wie won een Oscar voor 'Boys Don't Cry' (1999)?"
        },
        options: [
          { en: "Hilary Swank", es: "Hilary Swank", de: "Hilary Swank", nl: "Hilary Swank" },
          { en: "Chloë Sevigny", es: "Chloë Sevigny", de: "Chloë Sevigny", nl: "Chloë Sevigny" },
          { en: "Peter Sarsgaard", es: "Peter Sarsgaard", de: "Peter Sarsgaard", nl: "Peter Sarsgaard" },
          { en: "Alicia Goranson", es: "Alicia Goranson", de: "Alicia Goranson", nl: "Alicia Goranson" }
        ],
        correct: 0,
        explanation: {
          en: "Hilary Swank won her first Academy Award for Best Actress for her powerful portrayal of Brandon Teena, a transgender man, in Boys Don't Cry.",
          es: "Hilary Swank ganó su primer Premio de la Academia a la Mejor Actriz por su poderosa interpretación de Brandon Teena, un hombre transgénero, en Boys Don't Cry.",
          de: "Hilary Swank gewann ihren ersten Academy Award für die beste Hauptdarstellerin für ihre kraftvolle Darstellung von Brandon Teena, einem Transgender-Mann, in Boys Don't Cry.",
          nl: "Hilary Swank won haar eerste Academy Award voor Beste Actrice voor haar krachtige vertolking van Brandon Teena, een transgender man, in Boys Don't Cry."
        }
      },
      {
        question: {
          en: "Which actor won an Oscar for 'Rain Man' (1988)?",
          es: "¿Qué actor ganó un Oscar por 'Rain Man' (1988)?",
          de: "Welcher Schauspieler gewann einen Oscar für 'Rain Man' (1988)?",
          nl: "Welke acteur won een Oscar voor 'Rain Man' (1988)?"
        },
        options: [
          { en: "Dustin Hoffman", es: "Dustin Hoffman", de: "Dustin Hoffman", nl: "Dustin Hoffman" },
          { en: "Tom Cruise", es: "Tom Cruise", de: "Tom Cruise", nl: "Tom Cruise" },
          { en: "Valeria Golino", es: "Valeria Golino", de: "Valeria Golino", nl: "Valeria Golino" },
          { en: "Jerry Molen", es: "Jerry Molen", de: "Jerry Molen", nl: "Jerry Molen" }
        ],
        correct: 0,
        explanation: {
          en: "Dustin Hoffman won the Academy Award for Best Actor for his portrayal of Raymond Babbitt, an autistic savant, in Rain Man.",
          es: "Dustin Hoffman ganó el Premio de la Academia al Mejor Actor por su interpretación de Raymond Babbitt, un sabio autista, en Rain Man.",
          de: "Dustin Hoffman gewann den Academy Award für den besten Hauptdarsteller für seine Darstellung von Raymond Babbitt, einem autistischen Savant, in Rain Man.",
          nl: "Dustin Hoffman won de Academy Award voor Beste Acteur voor zijn vertolking van Raymond Babbitt, een autistische savant, in Rain Man."
        }
      },
      {
        question: {
          en: "Who won an Oscar for 'Walk the Line' (2005)?",
          es: "¿Quién ganó un Oscar por 'En la Cuerda Floja' (2005)?",
          de: "Wer gewann einen Oscar für 'Walk the Line' (2005)?",
          nl: "Wie won een Oscar voor 'Walk the Line' (2005)?"
        },
        options: [
          { en: "Reese Witherspoon", es: "Reese Witherspoon", de: "Reese Witherspoon", nl: "Reese Witherspoon" },
          { en: "Joaquin Phoenix", es: "Joaquin Phoenix", de: "Joaquin Phoenix", nl: "Joaquin Phoenix" },
          { en: "Robert Patrick", es: "Robert Patrick", de: "Robert Patrick", nl: "Robert Patrick" },
          { en: "Ginnifer Goodwin", es: "Ginnifer Goodwin", de: "Ginnifer Goodwin", nl: "Ginnifer Goodwin" }
        ],
        correct: 0,
        explanation: {
          en: "Reese Witherspoon won the Academy Award for Best Actress for her portrayal of June Carter Cash in Walk the Line, performing all her own singing.",
          es: "Reese Witherspoon ganó el Premio de la Academia a la Mejor Actriz por su interpretación de June Carter Cash en En la Cuerda Floja, interpretando todas sus propias canciones.",
          de: "Reese Witherspoon gewann den Academy Award für die beste Hauptdarstellerin für ihre Darstellung von June Carter Cash in Walk the Line, wobei sie alle ihre eigenen Gesangspartien sang.",
          nl: "Reese Witherspoon won de Academy Award voor Beste Actrice voor haar vertolking van June Carter Cash in Walk the Line, waarbij ze al haar eigen zang uitvoerde."
        }
      },
      {
        question: {
          en: "Which actor won an Oscar for 'Scent of a Woman' (1992)?",
          es: "¿Qué actor ganó un Oscar por 'Perfume de Mujer' (1992)?",
          de: "Welcher Schauspieler gewann einen Oscar für 'Der Duft der Frauen' (1992)?",
          nl: "Welke acteur won een Oscar voor 'Scent of a Woman' (1992)?"
        },
        options: [
          { en: "Al Pacino", es: "Al Pacino", de: "Al Pacino", nl: "Al Pacino" },
          { en: "Chris O'Donnell", es: "Chris O'Donnell", de: "Chris O'Donnell", nl: "Chris O'Donnell" },
          { en: "James Rebhorn", es: "James Rebhorn", de: "James Rebhorn", nl: "James Rebhorn" },
          { en: "Gabrielle Anwar", es: "Gabrielle Anwar", de: "Gabrielle Anwar", nl: "Gabrielle Anwar" }
        ],
        correct: 0,
        explanation: {
          en: "Al Pacino finally won the Academy Award for Best Actor after seven previous nominations, playing blind retired Army officer Frank Slade.",
          es: "Al Pacino finalmente ganó el Premio de la Academia al Mejor Actor después de siete nominaciones previas, interpretando al oficial del ejército retirado ciego Frank Slade.",
          de: "Al Pacino gewann schließlich nach sieben vorherigen Nominierungen den Academy Award für den besten Hauptdarsteller als blinder pensionierter Armeeoffizier Frank Slade.",
          nl: "Al Pacino won eindelijk de Academy Award voor Beste Acteur na zeven eerdere nominaties, spelend de blinde gepensioneerde legerofficier Frank Slade."
        }
      },
      {
        question: {
          en: "Who won an Oscar for 'The King's Speech' (2010)?",
          es: "¿Quién ganó un Oscar por 'El Discurso del Rey' (2010)?",
          de: "Wer gewann einen Oscar für 'The King's Speech' (2010)?",
          nl: "Wie won een Oscar voor 'The King's Speech' (2010)?"
        },
        options: [
          { en: "Colin Firth", es: "Colin Firth", de: "Colin Firth", nl: "Colin Firth" },
          { en: "Geoffrey Rush", es: "Geoffrey Rush", de: "Geoffrey Rush", nl: "Geoffrey Rush" },
          { en: "Helena Bonham Carter", es: "Helena Bonham Carter", de: "Helena Bonham Carter", nl: "Helena Bonham Carter" },
          { en: "Guy Pearce", es: "Guy Pearce", de: "Guy Pearce", nl: "Guy Pearce" }
        ],
        correct: 0,
        explanation: {
          en: "Colin Firth won the Academy Award for Best Actor for his portrayal of King George VI overcoming a speech impediment with help from therapist Lionel Logue.",
          es: "Colin Firth ganó el Premio de la Academia al Mejor Actor por su interpretación del Rey Jorge VI superando un impedimento del habla con la ayuda del terapeuta Lionel Logue.",
          de: "Colin Firth gewann den Academy Award für den besten Hauptdarsteller für seine Darstellung von König Georg VI., der mit Hilfe des Therapeuten Lionel Logue eine Sprachstörung überwindet.",
          nl: "Colin Firth won de Academy Award voor Beste Acteur voor zijn vertolking van Koning George VI die een spraakgebrek overwint met hulp van therapeut Lionel Logue."
        }
      },
      {
        question: {
          en: "Which actress won an Oscar for 'Blue Jasmine' (2013)?",
          es: "¿Qué actriz ganó un Oscar por 'Blue Jasmine' (2013)?",
          de: "Welche Schauspielerin gewann einen Oscar für 'Blue Jasmine' (2013)?",
          nl: "Welke actrice won een Oscar voor 'Blue Jasmine' (2013)?"
        },
        options: [
          { en: "Cate Blanchett", es: "Cate Blanchett", de: "Cate Blanchett", nl: "Cate Blanchett" },
          { en: "Sally Hawkins", es: "Sally Hawkins", de: "Sally Hawkins", nl: "Sally Hawkins" },
          { en: "Alec Baldwin", es: "Alec Baldwin", de: "Alec Baldwin", nl: "Alec Baldwin" },
          { en: "Bobby Cannavale", es: "Bobby Cannavale", de: "Bobby Cannavale", nl: "Bobby Cannavale" }
        ],
        correct: 0,
        explanation: {
          en: "Cate Blanchett won the Academy Award for Best Actress for her portrayal of a delusional socialite in Woody Allen's Blue Jasmine, her second Oscar.",
          es: "Cate Blanchett ganó el Premio de la Academia a la Mejor Actriz por su interpretación de una socialité delirante en Blue Jasmine de Woody Allen, su segundo Oscar.",
          de: "Cate Blanchett gewann den Academy Award für die beste Hauptdarstellerin für ihre Darstellung einer wahnhaften Gesellschaftsdame in Woody Allens Blue Jasmine, ihr zweiter Oscar.",
          nl: "Cate Blanchett won de Academy Award voor Beste Actrice voor haar vertolking van een waanideeën socialite in Woody Allen's Blue Jasmine, haar tweede Oscar."
        }
      },
      {
        question: {
          en: "Who won an Oscar for 'There Will Be Blood' (2007)?",
          es: "¿Quién ganó un Oscar por 'Petróleo Sangriento' (2007)?",
          de: "Wer gewann einen Oscar für 'There Will Be Blood' (2007)?",
          nl: "Wie won een Oscar voor 'There Will Be Blood' (2007)?"
        },
        options: [
          { en: "Daniel Day-Lewis", es: "Daniel Day-Lewis", de: "Daniel Day-Lewis", nl: "Daniel Day-Lewis" },
          { en: "Paul Dano", es: "Paul Dano", de: "Paul Dano", nl: "Paul Dano" },
          { en: "Kevin J. O'Connor", es: "Kevin J. O'Connor", de: "Kevin J. O'Connor", nl: "Kevin J. O'Connor" },
          { en: "Ciarán Hinds", es: "Ciarán Hinds", de: "Ciarán Hinds", nl: "Ciarán Hinds" }
        ],
        correct: 0,
        explanation: {
          en: "Daniel Day-Lewis won his second Academy Award for Best Actor for his intense portrayal of ruthless oilman Daniel Plainview in There Will Be Blood.",
          es: "Daniel Day-Lewis ganó su segundo Premio de la Academia al Mejor Actor por su intensa interpretación del despiadado petrolero Daniel Plainview en Petróleo Sangriento.",
          de: "Daniel Day-Lewis gewann seinen zweiten Academy Award für den besten Hauptdarsteller für seine intensive Darstellung des skrupellosen Ölmanns Daniel Plainview in There Will Be Blood.",
          nl: "Daniel Day-Lewis won zijn tweede Academy Award voor Beste Acteur voor zijn intense vertolking van meedogenloze olieman Daniel Plainview in There Will Be Blood."
        }
      },
      {
        question: {
          en: "Which actor won an Oscar for 'Leaving Las Vegas' (1995)?",
          es: "¿Qué actor ganó un Oscar por 'Leaving Las Vegas' (1995)?",
          de: "Welcher Schauspieler gewann einen Oscar für 'Leaving Las Vegas' (1995)?",
          nl: "Welke acteur won een Oscar voor 'Leaving Las Vegas' (1995)?"
        },
        options: [
          { en: "Nicolas Cage", es: "Nicolas Cage", de: "Nicolas Cage", nl: "Nicolas Cage" },
          { en: "Elisabeth Shue", es: "Elisabeth Shue", de: "Elisabeth Shue", nl: "Elisabeth Shue" },
          { en: "Julian Sands", es: "Julian Sands", de: "Julian Sands", nl: "Julian Sands" },
          { en: "Richard Lewis", es: "Richard Lewis", de: "Richard Lewis", nl: "Richard Lewis" }
        ],
        correct: 0,
        explanation: {
          en: "Nicolas Cage won the Academy Award for Best Actor for his devastating portrayal of an alcoholic screenwriter drinking himself to death in Las Vegas.",
          es: "Nicolas Cage ganó el Premio de la Academia al Mejor Actor por su devastadora interpretación de un guionista alcohólico que se bebe hasta la muerte en Las Vegas.",
          de: "Nicolas Cage gewann den Academy Award für den besten Hauptdarsteller für seine erschütternde Darstellung eines alkoholischen Drehbuchautors, der sich in Las Vegas zu Tode trinkt.",
          nl: "Nicolas Cage won de Academy Award voor Beste Acteur voor zijn verwoestende vertolking van een alcoholistische scenarioschrijver die zichzelf dood drinkt in Las Vegas."
        }
      },
      {
        question: {
          en: "Who won an Oscar for 'Chicago' (2002)?",
          es: "¿Quién ganó un Oscar por 'Chicago' (2002)?",
          de: "Wer gewann einen Oscar für 'Chicago' (2002)?",
          nl: "Wie won een Oscar voor 'Chicago' (2002)?"
        },
        options: [
          { en: "Catherine Zeta-Jones", es: "Catherine Zeta-Jones", de: "Catherine Zeta-Jones", nl: "Catherine Zeta-Jones" },
          { en: "Renée Zellweger", es: "Renée Zellweger", de: "Renée Zellweger", nl: "Renée Zellweger" },
          { en: "Queen Latifah", es: "Queen Latifah", de: "Queen Latifah", nl: "Queen Latifah" },
          { en: "Richard Gere", es: "Richard Gere", de: "Richard Gere", nl: "Richard Gere" }
        ],
        correct: 0,
        explanation: {
          en: "Catherine Zeta-Jones won the Academy Award for Best Supporting Actress for her role as Velma Kelly in the musical Chicago.",
          es: "Catherine Zeta-Jones ganó el Premio de la Academia a la Mejor Actriz de Reparto por su papel como Velma Kelly en el musical Chicago.",
          de: "Catherine Zeta-Jones gewann den Academy Award für die beste Nebendarstellerin für ihre Rolle als Velma Kelly im Musical Chicago.",
          nl: "Catherine Zeta-Jones won de Academy Award voor Beste Bijrolactrice voor haar rol als Velma Kelly in de musical Chicago."
        }
      },
      {
        question: {
          en: "Which actor won an Oscar for 'Lincoln' (2012)?",
          es: "¿Qué actor ganó un Oscar por 'Lincoln' (2012)?",
          de: "Welcher Schauspieler gewann einen Oscar für 'Lincoln' (2012)?",
          nl: "Welke acteur won een Oscar voor 'Lincoln' (2012)?"
        },
        options: [
          { en: "Daniel Day-Lewis", es: "Daniel Day-Lewis", de: "Daniel Day-Lewis", nl: "Daniel Day-Lewis" },
          { en: "Tommy Lee Jones", es: "Tommy Lee Jones", de: "Tommy Lee Jones", nl: "Tommy Lee Jones" },
          { en: "David Strathairn", es: "David Strathairn", de: "David Strathairn", nl: "David Strathairn" },
          { en: "Joseph Gordon-Levitt", es: "Joseph Gordon-Levitt", de: "Joseph Gordon-Levitt", nl: "Joseph Gordon-Levitt" }
        ],
        correct: 0,
        explanation: {
          en: "Daniel Day-Lewis won his third Academy Award for Best Actor for his transformative portrayal of President Abraham Lincoln, a record for male actors.",
          es: "Daniel Day-Lewis ganó su tercer Premio de la Academia al Mejor Actor por su interpretación transformadora del Presidente Abraham Lincoln, un récord para actores masculinos.",
          de: "Daniel Day-Lewis gewann seinen dritten Academy Award für den besten Hauptdarsteller für seine transformative Darstellung von Präsident Abraham Lincoln, ein Rekord für männliche Schauspieler.",
          nl: "Daniel Day-Lewis won zijn derde Academy Award voor Beste Acteur voor zijn transformerende vertolking van President Abraham Lincoln, een record voor mannelijke acteurs."
        }
      },
      {
        question: {
          en: "Who won an Oscar for 'Black Swan' (2010)?",
          es: "¿Quién ganó un Oscar por 'Cisne Negro' (2010)?",
          de: "Wer gewann einen Oscar für 'Black Swan' (2010)?",
          nl: "Wie won een Oscar voor 'Black Swan' (2010)?"
        },
        options: [
          { en: "Natalie Portman", es: "Natalie Portman", de: "Natalie Portman", nl: "Natalie Portman" },
          { en: "Mila Kunis", es: "Mila Kunis", de: "Mila Kunis", nl: "Mila Kunis" },
          { en: "Winona Ryder", es: "Winona Ryder", de: "Winona Ryder", nl: "Winona Ryder" },
          { en: "Barbara Hershey", es: "Barbara Hershey", de: "Barbara Hershey", nl: "Barbara Hershey" }
        ],
        correct: 0,
        explanation: {
          en: "Natalie Portman won the Academy Award for Best Actress for her intense portrayal of a ballerina descending into madness in Black Swan.",
          es: "Natalie Portman ganó el Premio de la Academia a la Mejor Actriz por su intensa interpretación de una bailarina que desciende a la locura en Cisne Negro.",
          de: "Natalie Portman gewann den Academy Award für die beste Hauptdarstellerin für ihre intensive Darstellung einer Ballerina, die in Black Swan in den Wahnsinn abgleitet.",
          nl: "Natalie Portman won de Academy Award voor Beste Actrice voor haar intense vertolking van een ballerina die in waanzin vervalt in Black Swan."
        }
      },
      {
        question: {
          en: "Which actor won an Oscar for 'True Grit' (2010)?",
          es: "¿Qué actor ganó un Oscar por 'Valor de Ley' (2010)?",
          de: "Welcher Schauspieler gewann einen Oscar für 'True Grit' (2010)?",
          nl: "Welke acteur won een Oscar voor 'True Grit' (2010)?"
        },
        options: [
          { en: "No one - but Jeff Bridges was nominated", es: "Nadie - pero Jeff Bridges fue nominado", de: "Niemand - aber Jeff Bridges war nominiert", nl: "Niemand - maar Jeff Bridges was genomineerd" },
          { en: "Jeff Bridges", es: "Jeff Bridges", de: "Jeff Bridges", nl: "Jeff Bridges" },
          { en: "Matt Damon", es: "Matt Damon", de: "Matt Damon", nl: "Matt Damon" },
          { en: "Josh Brolin", es: "Josh Brolin", de: "Josh Brolin", nl: "Josh Brolin" }
        ],
        correct: 0,
        explanation: {
          en: "While Jeff Bridges was nominated for Best Actor for True Grit, he did not win. Colin Firth won for The King's Speech. However, Bridges had won the previous year for Crazy Heart.",
          es: "Aunque Jeff Bridges fue nominado al Mejor Actor por Valor de Ley, no ganó. Colin Firth ganó por El Discurso del Rey. Sin embargo, Bridges había ganado el año anterior por Corazón Rebelde.",
          de: "Obwohl Jeff Bridges für True Grit als bester Hauptdarsteller nominiert war, gewann er nicht. Colin Firth gewann für The King's Speech. Bridges hatte jedoch im Vorjahr für Crazy Heart gewonnen.",
          nl: "Hoewel Jeff Bridges genomineerd was voor Beste Acteur voor True Grit, won hij niet. Colin Firth won voor The King's Speech. Bridges had echter het vorige jaar gewonnen voor Crazy Heart."
        }
      },
      {
        question: {
          en: "Who won an Oscar for 'Judy' (2019)?",
          es: "¿Quién ganó un Oscar por 'Judy' (2019)?",
          de: "Wer gewann einen Oscar für 'Judy' (2019)?",
          nl: "Wie won een Oscar voor 'Judy' (2019)?"
        },
        options: [
          { en: "Renée Zellweger", es: "Renée Zellweger", de: "Renée Zellweger", nl: "Renée Zellweger" },
          { en: "Jessie Buckley", es: "Jessie Buckley", de: "Jessie Buckley", nl: "Jessie Buckley" },
          { en: "Finn Wittrock", es: "Finn Wittrock", de: "Finn Wittrock", nl: "Finn Wittrock" },
          { en: "Rufus Sewell", es: "Rufus Sewell", de: "Rufus Sewell", nl: "Rufus Sewell" }
        ],
        correct: 0,
        explanation: {
          en: "Renée Zellweger won the Academy Award for Best Actress for her transformative portrayal of legendary actress Judy Garland in her final concerts.",
          es: "Renée Zellweger ganó el Premio de la Academia a la Mejor Actriz por su interpretación transformadora de la legendaria actriz Judy Garland en sus conciertos finales.",
          de: "Renée Zellweger gewann den Academy Award für die beste Hauptdarstellerin für ihre transformative Darstellung der legendären Schauspielerin Judy Garland in ihren letzten Konzerten.",
          nl: "Renée Zellweger won de Academy Award voor Beste Actrice voor haar transformerende vertolking van legendarische actrice Judy Garland in haar laatste concerten."
        }
      },
      {
        question: {
          en: "Which actress won an Oscar for 'The Favourite' (2018)?",
          es: "¿Qué actriz ganó un Oscar por 'La Favorita' (2018)?",
          de: "Welche Schauspielerin gewann einen Oscar für 'The Favourite' (2018)?",
          nl: "Welke actrice won een Oscar voor 'The Favourite' (2018)?"
        },
        options: [
          { en: "Olivia Colman", es: "Olivia Colman", de: "Olivia Colman", nl: "Olivia Colman" },
          { en: "Emma Stone", es: "Emma Stone", de: "Emma Stone", nl: "Emma Stone" },
          { en: "Rachel Weisz", es: "Rachel Weisz", de: "Rachel Weisz", nl: "Rachel Weisz" },
          { en: "Nicholas Hoult", es: "Nicholas Hoult", de: "Nicholas Hoult", nl: "Nicholas Hoult" }
        ],
        correct: 0,
        explanation: {
          en: "Olivia Colman won the Academy Award for Best Actress for her comedic and touching portrayal of Queen Anne in The Favourite.",
          es: "Olivia Colman ganó el Premio de la Academia a la Mejor Actriz por su interpretación cómica y conmovedora de la Reina Ana en La Favorita.",
          de: "Olivia Colman gewann den Academy Award für die beste Hauptdarstellerin für ihre komödiantische und berührende Darstellung von Königin Anne in The Favourite.",
          nl: "Olivia Colman won de Academy Award voor Beste Actrice voor haar komische en ontroerende vertolking van Koningin Anne in The Favourite."
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