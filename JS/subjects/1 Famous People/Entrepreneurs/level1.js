// Entrepreneurs Quiz - Level 1: Beginner
(function() {
  const level1 = {
    name: {
      en: "Entrepreneurs - Beginner",
      es: "Empresarios - Principiante",
      de: "Unternehmer - Anfänger",
      nl: "Ondernemers - Beginner"
    },
    questions: [
      {
        question: {
          en: "Who founded Microsoft?",
          es: "¿Quién fundó Microsoft?",
          de: "Wer gründete Microsoft?",
          nl: "Wie heeft Microsoft opgericht?"
        },
        options: [
          { en: "Bill Gates", es: "Bill Gates", de: "Bill Gates", nl: "Bill Gates" },
          { en: "Steve Jobs", es: "Steve Jobs", de: "Steve Jobs", nl: "Steve Jobs" },
          { en: "Mark Zuckerberg", es: "Mark Zuckerberg", de: "Mark Zuckerberg", nl: "Mark Zuckerberg" },
          { en: "Jeff Bezos", es: "Jeff Bezos", de: "Jeff Bezos", nl: "Jeff Bezos" }
        ],
        correct: 0,
        explanation: {
          en: "Bill Gates co-founded Microsoft with Paul Allen in 1975, creating the world's largest software company and revolutionizing personal computing.",
          es: "Bill Gates cofundó Microsoft con Paul Allen en 1975, creando la empresa de software más grande del mundo y revolucionando la informática personal.",
          de: "Bill Gates gründete Microsoft 1975 zusammen mit Paul Allen und schuf das größte Softwareunternehmen der Welt, das die PC-Nutzung revolutionierte.",
          nl: "Bill Gates richtte Microsoft op met Paul Allen in 1975, waarmee hij 's werelds grootste softwarebedrijf creëerde en personal computing revolutioneerde."
        }
      },
      {
        question: {
          en: "Which company did Steve Jobs co-found?",
          es: "¿Qué empresa cofundó Steve Jobs?",
          de: "Welches Unternehmen gründete Steve Jobs mit?",
          nl: "Welk bedrijf heeft Steve Jobs mede-opgericht?"
        },
        options: [
          { en: "Apple", es: "Apple", de: "Apple", nl: "Apple" },
          { en: "Google", es: "Google", de: "Google", nl: "Google" },
          { en: "Facebook", es: "Facebook", de: "Facebook", nl: "Facebook" },
          { en: "Amazon", es: "Amazon", de: "Amazon", nl: "Amazon" }
        ],
        correct: 0,
        explanation: {
          en: "Steve Jobs co-founded Apple in 1976 with Steve Wozniak and Ronald Wayne, revolutionizing consumer electronics with products like the iPhone and iPad.",
          es: "Steve Jobs cofundó Apple en 1976 con Steve Wozniak y Ronald Wayne, revolucionando la electrónica de consumo con productos como el iPhone y el iPad.",
          de: "Steve Jobs gründete Apple 1976 zusammen mit Steve Wozniak und Ronald Wayne und revolutionierte die Unterhaltungselektronik mit Produkten wie iPhone und iPad.",
          nl: "Steve Jobs richtte Apple op in 1976 met Steve Wozniak en Ronald Wayne, hij revolutioneerde consumentenelektronica met producten zoals de iPhone en iPad."
        }
      },
      {
        question: {
          en: "Who is the founder of Amazon?",
          es: "¿Quién es el fundador de Amazon?",
          de: "Wer ist der Gründer von Amazon?",
          nl: "Wie is de oprichter van Amazon?"
        },
        options: [
          { en: "Jeff Bezos", es: "Jeff Bezos", de: "Jeff Bezos", nl: "Jeff Bezos" },
          { en: "Elon Musk", es: "Elon Musk", de: "Elon Musk", nl: "Elon Musk" },
          { en: "Larry Page", es: "Larry Page", de: "Larry Page", nl: "Larry Page" },
          { en: "Tim Cook", es: "Tim Cook", de: "Tim Cook", nl: "Tim Cook" }
        ],
        correct: 0,
        explanation: {
          en: "Jeff Bezos founded Amazon in 1994 as an online bookstore, which grew into the world's largest e-commerce and cloud computing company.",
          es: "Jeff Bezos fundó Amazon en 1994 como una librería en línea, que creció hasta convertirse en la empresa de comercio electrónico y computación en la nube más grande del mundo.",
          de: "Jeff Bezos gründete Amazon 1994 als Online-Buchhandlung, die zum größten E-Commerce- und Cloud-Computing-Unternehmen der Welt heranwuchs.",
          nl: "Jeff Bezos richtte Amazon op in 1994 als online boekwinkel, die uitgroeide tot 's werelds grootste e-commerce en cloud computing bedrijf."
        }
      },
      {
        question: {
          en: "Which social media platform did Mark Zuckerberg create?",
          es: "¿Qué plataforma de redes sociales creó Mark Zuckerberg?",
          de: "Welche Social-Media-Plattform hat Mark Zuckerberg erstellt?",
          nl: "Welk social media platform heeft Mark Zuckerberg gecreëerd?"
        },
        options: [
          { en: "Facebook", es: "Facebook", de: "Facebook", nl: "Facebook" },
          { en: "Twitter", es: "Twitter", de: "Twitter", nl: "Twitter" },
          { en: "Instagram", es: "Instagram", de: "Instagram", nl: "Instagram" },
          { en: "LinkedIn", es: "LinkedIn", de: "LinkedIn", nl: "LinkedIn" }
        ],
        correct: 0,
        explanation: {
          en: "Mark Zuckerberg created Facebook in 2004 while studying at Harvard University, which became the world's largest social networking platform.",
          es: "Mark Zuckerberg creó Facebook en 2004 mientras estudiaba en la Universidad de Harvard, que se convirtió en la plataforma de redes sociales más grande del mundo.",
          de: "Mark Zuckerberg erstellte Facebook 2004 während seines Studiums an der Harvard University, das zur größten sozialen Netzwerkplattform der Welt wurde.",
          nl: "Mark Zuckerberg creëerde Facebook in 2004 tijdens zijn studie aan Harvard University, dat uitgroeide tot 's werelds grootste sociale netwerkplatform."
        }
      },
      {
        question: {
          en: "Who founded Tesla Motors?",
          es: "¿Quién fundó Tesla Motors?",
          de: "Wer gründete Tesla Motors?",
          nl: "Wie heeft Tesla Motors opgericht?"
        },
        options: [
          { en: "Elon Musk", es: "Elon Musk", de: "Elon Musk", nl: "Elon Musk" },
          { en: "Martin Eberhard", es: "Martin Eberhard", de: "Martin Eberhard", nl: "Martin Eberhard" },
          { en: "Henry Ford", es: "Henry Ford", de: "Henry Ford", nl: "Henry Ford" },
          { en: "Thomas Edison", es: "Thomas Edison", de: "Thomas Edison", nl: "Thomas Edison" }
        ],
        correct: 1,
        explanation: {
          en: "Tesla was actually founded by Martin Eberhard and Marc Tarpenning in 2003. Elon Musk joined as an early investor and became CEO later, but he was not the original founder.",
          es: "Tesla fue fundada en realidad por Martin Eberhard y Marc Tarpenning en 2003. Elon Musk se unió como inversor inicial y se convirtió en CEO más tarde, pero no fue el fundador original.",
          de: "Tesla wurde tatsächlich 2003 von Martin Eberhard und Marc Tarpenning gegründet. Elon Musk kam als früher Investor dazu und wurde später CEO, war aber nicht der ursprüngliche Gründer.",
          nl: "Tesla werd eigenlijk opgericht door Martin Eberhard en Marc Tarpenning in 2003. Elon Musk kwam erbij als vroege investeerder en werd later CEO, maar hij was niet de oorspronkelijke oprichter."
        }
      },
      {
        question: {
          en: "Which company is known for the slogan 'Just Do It'?",
          es: "¿Qué empresa es conocida por el eslogan 'Just Do It'?",
          de: "Welches Unternehmen ist für den Slogan 'Just Do It' bekannt?",
          nl: "Welk bedrijf staat bekend om de slogan 'Just Do It'?"
        },
        options: [
          { en: "Nike", es: "Nike", de: "Nike", nl: "Nike" },
          { en: "Adidas", es: "Adidas", de: "Adidas", nl: "Adidas" },
          { en: "Puma", es: "Puma", de: "Puma", nl: "Puma" },
          { en: "Reebok", es: "Reebok", de: "Reebok", nl: "Reebok" }
        ],
        correct: 0,
        explanation: {
          en: "Nike's 'Just Do It' slogan was created in 1988 and became one of the most recognizable advertising campaigns in history, helping establish Nike as a global brand.",
          es: "El eslogan 'Just Do It' de Nike fue creado en 1988 y se convirtió en una de las campañas publicitarias más reconocibles de la historia, ayudando a establecer a Nike como una marca global.",
          de: "Nikes 'Just Do It' Slogan wurde 1988 kreiert und wurde zu einer der bekanntesten Werbekampagnen der Geschichte, die Nike als globale Marke etablierte.",
          nl: "Nike's 'Just Do It' slogan werd gemaakt in 1988 en werd een van de meest herkenbare reclamecampagnes in de geschiedenis, waarmee Nike zich als wereldmerk vestigde."
        }
      },
      {
        question: {
          en: "Who founded McDonald's?",
          es: "¿Quién fundó McDonald's?",
          de: "Wer gründete McDonald's?",
          nl: "Wie heeft McDonald's opgericht?"
        },
        options: [
          { en: "Ray Kroc", es: "Ray Kroc", de: "Ray Kroc", nl: "Ray Kroc" },
          { en: "Ronald McDonald", es: "Ronald McDonald", de: "Ronald McDonald", nl: "Ronald McDonald" },
          { en: "Colonel Sanders", es: "Coronel Sanders", de: "Colonel Sanders", nl: "Colonel Sanders" },
          { en: "Dave Thomas", es: "Dave Thomas", de: "Dave Thomas", nl: "Dave Thomas" }
        ],
        correct: 0,
        explanation: {
          en: "Ray Kroc founded the McDonald's Corporation in 1955, though the McDonald brothers started the original restaurant. Kroc transformed it into the world's largest fast-food chain.",
          es: "Ray Kroc fundó McDonald's Corporation en 1955, aunque los hermanos McDonald iniciaron el restaurante original. Kroc lo transformó en la cadena de comida rápida más grande del mundo.",
          de: "Ray Kroc gründete die McDonald's Corporation 1955, obwohl die McDonald-Brüder das ursprüngliche Restaurant starteten. Kroc verwandelte es in die größte Fast-Food-Kette der Welt.",
          nl: "Ray Kroc richtte McDonald's Corporation op in 1955, hoewel de McDonald broers het oorspronkelijke restaurant begonnen. Kroc transformeerde het tot 's werelds grootste fastfoodketen."
        }
      },
      {
        question: {
          en: "Which search engine was founded by Larry Page and Sergey Brin?",
          es: "¿Qué motor de búsqueda fue fundado por Larry Page y Sergey Brin?",
          de: "Welche Suchmaschine wurde von Larry Page und Sergey Brin gegründet?",
          nl: "Welke zoekmachine werd opgericht door Larry Page en Sergey Brin?"
        },
        options: [
          { en: "Google", es: "Google", de: "Google", nl: "Google" },
          { en: "Yahoo", es: "Yahoo", de: "Yahoo", nl: "Yahoo" },
          { en: "Bing", es: "Bing", de: "Bing", nl: "Bing" },
          { en: "AltaVista", es: "AltaVista", de: "AltaVista", nl: "AltaVista" }
        ],
        correct: 0,
        explanation: {
          en: "Larry Page and Sergey Brin founded Google in 1998 while PhD students at Stanford University, revolutionizing internet search with their PageRank algorithm.",
          es: "Larry Page y Sergey Brin fundaron Google en 1998 mientras eran estudiantes de doctorado en la Universidad de Stanford, revolucionando la búsqueda en internet con su algoritmo PageRank.",
          de: "Larry Page und Sergey Brin gründeten Google 1998 als Doktoranden an der Stanford University und revolutionierten die Internetsuche mit ihrem PageRank-Algorithmus.",
          nl: "Larry Page en Sergey Brin richtten Google op in 1998 als PhD studenten aan Stanford University, zij revolutioneerden internet zoeken met hun PageRank algoritme."
        }
      },
      {
        question: {
          en: "What company did Walt Disney found?",
          es: "¿Qué empresa fundó Walt Disney?",
          de: "Welches Unternehmen gründete Walt Disney?",
          nl: "Welk bedrijf heeft Walt Disney opgericht?"
        },
        options: [
          { en: "The Walt Disney Company", es: "The Walt Disney Company", de: "The Walt Disney Company", nl: "The Walt Disney Company" },
          { en: "Warner Bros", es: "Warner Bros", de: "Warner Bros", nl: "Warner Bros" },
          { en: "Universal Studios", es: "Universal Studios", de: "Universal Studios", nl: "Universal Studios" },
          { en: "Paramount Pictures", es: "Paramount Pictures", de: "Paramount Pictures", nl: "Paramount Pictures" }
        ],
        correct: 0,
        explanation: {
          en: "Walt Disney founded The Walt Disney Company in 1923 with his brother Roy, creating iconic characters like Mickey Mouse and building a global entertainment empire.",
          es: "Walt Disney fundó The Walt Disney Company en 1923 con su hermano Roy, creando personajes icónicos como Mickey Mouse y construyendo un imperio de entretenimiento global.",
          de: "Walt Disney gründete The Walt Disney Company 1923 mit seinem Bruder Roy, schuf ikonische Figuren wie Mickey Mouse und baute ein globales Unterhaltungsimperium auf.",
          nl: "Walt Disney richtte The Walt Disney Company op in 1923 met zijn broer Roy, hij creëerde iconische personages zoals Mickey Mouse en bouwde een wereldwijd entertainment imperium."
        }
      },
      {
        question: {
          en: "Who founded Virgin Group?",
          es: "¿Quién fundó Virgin Group?",
          de: "Wer gründete Virgin Group?",
          nl: "Wie heeft Virgin Group opgericht?"
        },
        options: [
          { en: "Richard Branson", es: "Richard Branson", de: "Richard Branson", nl: "Richard Branson" },
          { en: "Rupert Murdoch", es: "Rupert Murdoch", de: "Rupert Murdoch", nl: "Rupert Murdoch" },
          { en: "Warren Buffett", es: "Warren Buffett", de: "Warren Buffett", nl: "Warren Buffett" },
          { en: "Donald Trump", es: "Donald Trump", de: "Donald Trump", nl: "Donald Trump" }
        ],
        correct: 0,
        explanation: {
          en: "Richard Branson founded Virgin Group in 1970, starting with a mail-order record business and expanding into airlines, space travel, and many other industries.",
          es: "Richard Branson fundó Virgin Group en 1970, comenzando con un negocio de venta de discos por correo y expandiéndose a aerolíneas, viajes espaciales y muchas otras industrias.",
          de: "Richard Branson gründete Virgin Group 1970, begann mit einem Versandhandel für Schallplatten und expandierte in Fluggesellschaften, Raumfahrt und viele andere Branchen.",
          nl: "Richard Branson richtte Virgin Group op in 1970, hij begon met een postorder platenbedrijf en breidde uit naar luchtvaartmaatschappijen, ruimtereizen en vele andere industrieën."
        }
      },
      {
        question: {
          en: "Which entrepreneur is known for founding Ford Motor Company?",
          es: "¿Qué empresario es conocido por fundar Ford Motor Company?",
          de: "Welcher Unternehmer ist bekannt für die Gründung der Ford Motor Company?",
          nl: "Welke ondernemer staat bekend om het oprichten van Ford Motor Company?"
        },
        options: [
          { en: "Henry Ford", es: "Henry Ford", de: "Henry Ford", nl: "Henry Ford" },
          { en: "John D. Rockefeller", es: "John D. Rockefeller", de: "John D. Rockefeller", nl: "John D. Rockefeller" },
          { en: "Andrew Carnegie", es: "Andrew Carnegie", de: "Andrew Carnegie", nl: "Andrew Carnegie" },
          { en: "J.P. Morgan", es: "J.P. Morgan", de: "J.P. Morgan", nl: "J.P. Morgan" }
        ],
        correct: 0,
        explanation: {
          en: "Henry Ford founded Ford Motor Company in 1903 and revolutionized manufacturing with the assembly line, making cars affordable for the masses with the Model T.",
          es: "Henry Ford fundó Ford Motor Company en 1903 y revolucionó la manufactura con la línea de ensamblaje, haciendo los autos asequibles para las masas con el Modelo T.",
          de: "Henry Ford gründete Ford Motor Company 1903 und revolutionierte die Fertigung mit dem Fließband, machte Autos für die Massen mit dem Modell T erschwinglich.",
          nl: "Henry Ford richtte Ford Motor Company op in 1903 en revolutioneerde de productie met de lopende band, waardoor auto's betaalbaar werden voor de massa met de Model T."
        }
      },
      {
        question: {
          en: "Who created the Starbucks coffee chain?",
          es: "¿Quién creó la cadena de café Starbucks?",
          de: "Wer hat die Starbucks-Kaffeekette gegründet?",
          nl: "Wie heeft de Starbucks koffieketen gecreëerd?"
        },
        options: [
          { en: "Howard Schultz", es: "Howard Schultz", de: "Howard Schultz", nl: "Howard Schultz" },
          { en: "Jerry Baldwin", es: "Jerry Baldwin", de: "Jerry Baldwin", nl: "Jerry Baldwin" },
          { en: "Zev Siegl", es: "Zev Siegl", de: "Zev Siegl", nl: "Zev Siegl" },
          { en: "Gordon Bowker", es: "Gordon Bowker", de: "Gordon Bowker", nl: "Gordon Bowker" }
        ],
        correct: 0,
        explanation: {
          en: "While Starbucks was originally founded by Jerry Baldwin, Zev Siegl, and Gordon Bowker in 1971, Howard Schultz transformed it into the global coffee chain we know today after buying the company in 1987.",
          es: "Aunque Starbucks fue fundada originalmente por Jerry Baldwin, Zev Siegl y Gordon Bowker en 1971, Howard Schultz la transformó en la cadena global de café que conocemos hoy después de comprar la empresa en 1987.",
          de: "Obwohl Starbucks ursprünglich 1971 von Jerry Baldwin, Zev Siegl und Gordon Bowker gegründet wurde, verwandelte Howard Schultz es in die globale Kaffeekette, die wir heute kennen, nachdem er das Unternehmen 1987 kaufte.",
          nl: "Hoewel Starbucks oorspronkelijk werd opgericht door Jerry Baldwin, Zev Siegl en Gordon Bowker in 1971, transformeerde Howard Schultz het tot de wereldwijde koffieketen die we vandaag kennen nadat hij het bedrijf in 1987 kocht."
        }
      },
      {
        question: {
          en: "Which company did Michael Dell found?",
          es: "¿Qué empresa fundó Michael Dell?",
          de: "Welches Unternehmen gründete Michael Dell?",
          nl: "Welk bedrijf heeft Michael Dell opgericht?"
        },
        options: [
          { en: "Dell Technologies", es: "Dell Technologies", de: "Dell Technologies", nl: "Dell Technologies" },
          { en: "HP", es: "HP", de: "HP", nl: "HP" },
          { en: "IBM", es: "IBM", de: "IBM", nl: "IBM" },
          { en: "Compaq", es: "Compaq", de: "Compaq", nl: "Compaq" }
        ],
        correct: 0,
        explanation: {
          en: "Michael Dell founded Dell Computer Corporation (now Dell Technologies) in 1984 from his dorm room at the University of Texas, pioneering the direct-to-consumer computer sales model.",
          es: "Michael Dell fundó Dell Computer Corporation (ahora Dell Technologies) en 1984 desde su dormitorio en la Universidad de Texas, siendo pionero en el modelo de ventas directas al consumidor de computadoras.",
          de: "Michael Dell gründete Dell Computer Corporation (heute Dell Technologies) 1984 von seinem Studentenwohnheim an der University of Texas aus und war Pionier des Direct-to-Consumer-Computerverkaufsmodells.",
          nl: "Michael Dell richtte Dell Computer Corporation (nu Dell Technologies) op in 1984 vanuit zijn studentenkamer aan de University of Texas, hij was pionier van het direct-naar-consument computer verkoopmodel."
        }
      },
      {
        question: {
          en: "Who is the founder of Berkshire Hathaway?",
          es: "¿Quién es el fundador de Berkshire Hathaway?",
          de: "Wer ist der Gründer von Berkshire Hathaway?",
          nl: "Wie is de oprichter van Berkshire Hathaway?"
        },
        options: [
          { en: "Warren Buffett", es: "Warren Buffett", de: "Warren Buffett", nl: "Warren Buffett" },
          { en: "Charlie Munger", es: "Charlie Munger", de: "Charlie Munger", nl: "Charlie Munger" },
          { en: "George Soros", es: "George Soros", de: "George Soros", nl: "George Soros" },
          { en: "Peter Lynch", es: "Peter Lynch", de: "Peter Lynch", nl: "Peter Lynch" }
        ],
        correct: 0,
        explanation: {
          en: "Warren Buffett transformed Berkshire Hathaway from a failing textile company into one of the world's largest investment conglomerates, earning him the nickname 'Oracle of Omaha'.",
          es: "Warren Buffett transformó Berkshire Hathaway de una empresa textil en quiebra en uno de los conglomerados de inversión más grandes del mundo, ganándose el apodo de 'Oráculo de Omaha'.",
          de: "Warren Buffett verwandelte Berkshire Hathaway von einem scheiternden Textilunternehmen in einen der größten Investmentkonzerne der Welt und erhielt den Spitznamen 'Oracle of Omaha'.",
          nl: "Warren Buffett transformeerde Berkshire Hathaway van een falend textielbedrijf tot een van 's werelds grootste investeringsconglomeraten, waarmee hij de bijnaam 'Oracle of Omaha' verdiende."
        }
      },
      {
        question: {
          en: "Which entrepreneur founded Kentucky Fried Chicken (KFC)?",
          es: "¿Qué empresario fundó Kentucky Fried Chicken (KFC)?",
          de: "Welcher Unternehmer gründete Kentucky Fried Chicken (KFC)?",
          nl: "Welke ondernemer heeft Kentucky Fried Chicken (KFC) opgericht?"
        },
        options: [
          { en: "Colonel Sanders", es: "Coronel Sanders", de: "Colonel Sanders", nl: "Colonel Sanders" },
          { en: "Dave Thomas", es: "Dave Thomas", de: "Dave Thomas", nl: "Dave Thomas" },
          { en: "Ray Kroc", es: "Ray Kroc", de: "Ray Kroc", nl: "Ray Kroc" },
          { en: "Carl Karcher", es: "Carl Karcher", de: "Carl Karcher", nl: "Carl Karcher" }
        ],
        correct: 0,
        explanation: {
          en: "Colonel Harland Sanders founded KFC in 1952, famous for his secret recipe of 11 herbs and spices and his iconic white suit and string tie.",
          es: "El Coronel Harland Sanders fundó KFC en 1952, famoso por su receta secreta de 11 hierbas y especias y su icónico traje blanco y corbata de cordón.",
          de: "Colonel Harland Sanders gründete KFC 1952, berühmt für sein Geheimrezept aus 11 Kräutern und Gewürzen und seinen ikonischen weißen Anzug mit Schnurkrawatte.",
          nl: "Colonel Harland Sanders richtte KFC op in 1952, beroemd om zijn geheime recept van 11 kruiden en specerijen en zijn iconische witte pak en string stropdas."
        }
      },
      {
        question: {
          en: "Who founded the social media platform Twitter?",
          es: "¿Quién fundó la plataforma de redes sociales Twitter?",
          de: "Wer gründete die Social-Media-Plattform Twitter?",
          nl: "Wie heeft het social media platform Twitter opgericht?"
        },
        options: [
          { en: "Jack Dorsey", es: "Jack Dorsey", de: "Jack Dorsey", nl: "Jack Dorsey" },
          { en: "Evan Williams", es: "Evan Williams", de: "Evan Williams", nl: "Evan Williams" },
          { en: "Biz Stone", es: "Biz Stone", de: "Biz Stone", nl: "Biz Stone" },
          { en: "All of the above", es: "Todos los anteriores", de: "Alle oben genannten", nl: "Alle bovenstaande" }
        ],
        correct: 3,
        explanation: {
          en: "Twitter was co-founded by Jack Dorsey, Evan Williams, Biz Stone, and Noah Glass in 2006, revolutionizing real-time communication with 280-character messages.",
          es: "Twitter fue cofundado por Jack Dorsey, Evan Williams, Biz Stone y Noah Glass en 2006, revolucionando la comunicación en tiempo real con mensajes de 280 caracteres.",
          de: "Twitter wurde 2006 von Jack Dorsey, Evan Williams, Biz Stone und Noah Glass mitgegründet und revolutionierte die Echtzeitkommunikation mit 280-Zeichen-Nachrichten.",
          nl: "Twitter werd mede-opgericht door Jack Dorsey, Evan Williams, Biz Stone en Noah Glass in 2006, wat real-time communicatie revolutioneerde met 280-karakter berichten."
        }
      },
      {
        question: {
          en: "Which company is known for its founder's motto 'Think Different'?",
          es: "¿Qué empresa es conocida por el lema de su fundador 'Think Different'?",
          de: "Welches Unternehmen ist für das Motto seines Gründers 'Think Different' bekannt?",
          nl: "Welk bedrijf staat bekend om het motto van de oprichter 'Think Different'?"
        },
        options: [
          { en: "Apple", es: "Apple", de: "Apple", nl: "Apple" },
          { en: "IBM", es: "IBM", de: "IBM", nl: "IBM" },
          { en: "Intel", es: "Intel", de: "Intel", nl: "Intel" },
          { en: "Sony", es: "Sony", de: "Sony", nl: "Sony" }
        ],
        correct: 0,
        explanation: {
          en: "'Think Different' was Apple's advertising slogan from 1997 to 2002, reflecting Steve Jobs' philosophy of innovation and challenging conventional thinking.",
          es: "'Think Different' fue el eslogan publicitario de Apple de 1997 a 2002, reflejando la filosofía de innovación de Steve Jobs y el desafío al pensamiento convencional.",
          de: "'Think Different' war Apples Werbeslogan von 1997 bis 2002, der Steve Jobs' Philosophie der Innovation und Herausforderung des konventionellen Denkens widerspiegelte.",
          nl: "'Think Different' was Apple's reclameslogan van 1997 tot 2002, wat Steve Jobs' filosofie van innovatie en het uitdagen van conventioneel denken weerspiegelde."
        }
      },
      {
        question: {
          en: "Who founded the retail giant Walmart?",
          es: "¿Quién fundó el gigante minorista Walmart?",
          de: "Wer gründete den Einzelhandelsriesen Walmart?",
          nl: "Wie heeft de detailhandelsreus Walmart opgericht?"
        },
        options: [
          { en: "Sam Walton", es: "Sam Walton", de: "Sam Walton", nl: "Sam Walton" },
          { en: "James Walton", es: "James Walton", de: "James Walton", nl: "James Walton" },
          { en: "John Walton", es: "John Walton", de: "John Walton", nl: "John Walton" },
          { en: "Robert Walton", es: "Robert Walton", de: "Robert Walton", nl: "Robert Walton" }
        ],
        correct: 0,
        explanation: {
          en: "Sam Walton founded Walmart in 1962 in Arkansas, building it into the world's largest retailer by focusing on low prices and rural markets.",
          es: "Sam Walton fundó Walmart en 1962 en Arkansas, construyéndolo hasta convertirlo en el minorista más grande del mundo enfocándose en precios bajos y mercados rurales.",
          de: "Sam Walton gründete Walmart 1962 in Arkansas und baute es zum größten Einzelhändler der Welt auf, indem er sich auf niedrige Preise und ländliche Märkte konzentrierte.",
          nl: "Sam Walton richtte Walmart op in 1962 in Arkansas, hij bouwde het uit tot 's werelds grootste retailer door te focussen op lage prijzen en rurale markten."
        }
      },
      {
        question: {
          en: "Which entrepreneur is known for founding SpaceX?",
          es: "¿Qué empresario es conocido por fundar SpaceX?",
          de: "Welcher Unternehmer ist bekannt für die Gründung von SpaceX?",
          nl: "Welke ondernemer staat bekend om het oprichten van SpaceX?"
        },
        options: [
          { en: "Elon Musk", es: "Elon Musk", de: "Elon Musk", nl: "Elon Musk" },
          { en: "Jeff Bezos", es: "Jeff Bezos", de: "Jeff Bezos", nl: "Jeff Bezos" },
          { en: "Richard Branson", es: "Richard Branson", de: "Richard Branson", nl: "Richard Branson" },
          { en: "Paul Allen", es: "Paul Allen", de: "Paul Allen", nl: "Paul Allen" }
        ],
        correct: 0,
        explanation: {
          en: "Elon Musk founded SpaceX in 2002 with the goal of making space travel more affordable and eventually enabling human colonization of Mars.",
          es: "Elon Musk fundó SpaceX en 2002 con el objetivo de hacer más asequibles los viajes espaciales y eventualmente permitir la colonización humana de Marte.",
          de: "Elon Musk gründete SpaceX 2002 mit dem Ziel, Raumfahrt erschwinglicher zu machen und schließlich die menschliche Besiedlung des Mars zu ermöglichen.",
          nl: "Elon Musk richtte SpaceX op in 2002 met het doel ruimtereizen betaalbaarder te maken en uiteindelijk menselijke kolonisatie van Mars mogelijk te maken."
        }
      },
      {
        question: {
          en: "Who founded the online payment system PayPal?",
          es: "¿Quién fundó el sistema de pagos en línea PayPal?",
          de: "Wer gründete das Online-Zahlungssystem PayPal?",
          nl: "Wie heeft het online betalingssysteem PayPal opgericht?"
        },
        options: [
          { en: "Peter Thiel", es: "Peter Thiel", de: "Peter Thiel", nl: "Peter Thiel" },
          { en: "Elon Musk", es: "Elon Musk", de: "Elon Musk", nl: "Elon Musk" },
          { en: "Max Levchin", es: "Max Levchin", de: "Max Levchin", nl: "Max Levchin" },
          { en: "All of the above", es: "Todos los anteriores", de: "Alle oben genannten", nl: "Alle bovenstaande" }
        ],
        correct: 3,
        explanation: {
          en: "PayPal was co-founded by Peter Thiel, Elon Musk, and Max Levchin in 1998. It revolutionized online payments and was later acquired by eBay for $1.5 billion.",
          es: "PayPal fue cofundado por Peter Thiel, Elon Musk y Max Levchin en 1998. Revolucionó los pagos en línea y luego fue adquirido por eBay por $1.5 mil millones.",
          de: "PayPal wurde 1998 von Peter Thiel, Elon Musk und Max Levchin mitgegründet. Es revolutionierte Online-Zahlungen und wurde später von eBay für 1,5 Milliarden Dollar übernommen.",
          nl: "PayPal werd mede-opgericht door Peter Thiel, Elon Musk en Max Levchin in 1998. Het revolutioneerde online betalingen en werd later overgenomen door eBay voor $1,5 miljard."
        }
      }
    ]
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level1;
  }
})();
