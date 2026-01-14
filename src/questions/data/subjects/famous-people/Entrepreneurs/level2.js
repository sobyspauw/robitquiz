// Entrepreneurs Quiz - Level 2: Easy
(function() {
  const level2 = {
    name: {
      en: "Entrepreneurs - Easy",
      es: "Empresarios - Fácil",
      de: "Unternehmer - Einfach",
      nl: "Ondernemers - Gemakkelijk"
    },
    questions: [
      {
        question: {
          en: "Who founded the fast-food chain Subway?",
          es: "¿Quién fundó la cadena de comida rápida Subway?",
          de: "Wer gründete die Fast-Food-Kette Subway?",
          nl: "Wie heeft de fastfoodketen Subway opgericht?"
        },
        options: [
          { en: "Fred DeLuca", es: "Fred DeLuca", de: "Fred DeLuca", nl: "Fred DeLuca" },
          { en: "Ray Kroc", es: "Ray Kroc", de: "Ray Kroc", nl: "Ray Kroc" },
          { en: "Dave Thomas", es: "Dave Thomas", de: "Dave Thomas", nl: "Dave Thomas" },
          { en: "Harland Sanders", es: "Harland Sanders", de: "Harland Sanders", nl: "Harland Sanders" }
        ],
        correct: 0,
        explanation: {
          en: "Fred DeLuca founded Subway in 1965 at age 17 with a $1,000 loan from family friend Peter Buck, starting with a single sandwich shop in Connecticut.",
          es: "Fred DeLuca fundó Subway en 1965 a los 17 años con un préstamo de $1,000 del amigo de la familia Peter Buck, comenzando con una sola tienda de sándwiches en Connecticut.",
          de: "Fred DeLuca gründete Subway 1965 im Alter von 17 Jahren mit einem 1.000-Dollar-Darlehen vom Familienfreund Peter Buck, beginnend mit einem einzigen Sandwich-Laden in Connecticut.",
          nl: "Fred DeLuca richtte Subway op in 1965 op 17-jarige leeftijd met een lening van $1.000 van familievriend Peter Buck, hij begon met één broodjeswinkel in Connecticut."
        }
      },
      {
        question: {
          en: "Who co-founded Microsoft with Bill Gates?",
          es: "¿Quién cofundó Microsoft con Bill Gates?",
          de: "Wer gründete Microsoft zusammen mit Bill Gates?",
          nl: "Wie richtte Microsoft op samen met Bill Gates?"
        },
        options: [
          { en: "Paul Allen", es: "Paul Allen", de: "Paul Allen", nl: "Paul Allen" },
          { en: "Steve Ballmer", es: "Steve Ballmer", de: "Steve Ballmer", nl: "Steve Ballmer" },
          { en: "Larry Ellison", es: "Larry Ellison", de: "Larry Ellison", nl: "Larry Ellison" },
          { en: "Steve Wozniak", es: "Steve Wozniak", de: "Steve Wozniak", nl: "Steve Wozniak" }
        ],
        correct: 0,
        explanation: {
          en: "Paul Allen co-founded Microsoft with Bill Gates in 1975. Allen played a crucial role in the company's early development, including convincing MITS to hire Microsoft to create software for the Altair 8800. He left Microsoft in 1983 but remained one of the world's wealthiest individuals through his investments.",
          es: "Paul Allen cofundó Microsoft con Bill Gates en 1975. Allen jugó un papel crucial en el desarrollo temprano de la compañía, incluyendo convencer a MITS de contratar a Microsoft para crear software para el Altair 8800. Dejó Microsoft en 1983 pero permaneció como uno de los individuos más ricos del mundo a través de sus inversiones.",
          de: "Paul Allen gründete 1975 Microsoft zusammen mit Bill Gates. Allen spielte eine entscheidende Rolle in der frühen Entwicklung des Unternehmens, einschließlich der Überzeugung von MITS, Microsoft einzustellen, um Software für den Altair 8800 zu erstellen. Er verließ Microsoft 1983, blieb aber durch seine Investitionen einer der reichsten Menschen der Welt.",
          nl: "Paul Allen richtte Microsoft op samen met Bill Gates in 1975. Allen speelde een cruciale rol in de vroege ontwikkeling van het bedrijf, waaronder het overtuigen van MITS om Microsoft in te huren om software te creëren voor de Altair 8800. Hij verliet Microsoft in 1983 maar bleef een van 's werelds rijkste individuen door zijn investeringen."
        }
      },
      {
        question: {
          en: "Which company did Dave Thomas found?",
          es: "¿Qué empresa fundó Dave Thomas?",
          de: "Welches Unternehmen gründete Dave Thomas?",
          nl: "Welk bedrijf heeft Dave Thomas opgericht?"
        },
        options: [
          { en: "Wendy's", es: "Wendy's", de: "Wendy's", nl: "Wendy's" },
          { en: "Burger King", es: "Burger King", de: "Burger King", nl: "Burger King" },
          { en: "Taco Bell", es: "Taco Bell", de: "Taco Bell", nl: "Taco Bell" },
          { en: "White Castle", es: "White Castle", de: "White Castle", nl: "White Castle" }
        ],
        correct: 0,
        explanation: {
          en: "Dave Thomas founded Wendy's in 1969, naming it after his daughter Melinda Lou 'Wendy' Thomas. He became famous for starring in over 800 TV commercials for the chain.",
          es: "Dave Thomas fundó Wendy's en 1969, nombrándola por su hija Melinda Lou 'Wendy' Thomas. Se hizo famoso por protagonizar más de 800 comerciales de TV para la cadena.",
          de: "Dave Thomas gründete Wendy's 1969 und benannte es nach seiner Tochter Melinda Lou 'Wendy' Thomas. Er wurde berühmt durch über 800 TV-Werbespots für die Kette.",
          nl: "Dave Thomas richtte Wendy's op in 1969, hij noemde het naar zijn dochter Melinda Lou 'Wendy' Thomas. Hij werd beroemd door meer dan 800 TV-reclames voor de keten."
        }
      },
      {
        question: {
          en: "Who founded Nike?",
          es: "¿Quién fundó Nike?",
          de: "Wer gründete Nike?",
          nl: "Wie heeft Nike opgericht?"
        },
        options: [
          { en: "Phil Knight", es: "Phil Knight", de: "Phil Knight", nl: "Phil Knight" },
          { en: "Adidas Dassler", es: "Adidas Dassler", de: "Adidas Dassler", nl: "Adidas Dassler" },
          { en: "Puma Dassler", es: "Puma Dassler", de: "Puma Dassler", nl: "Puma Dassler" },
          { en: "Carl Lewis", es: "Carl Lewis", de: "Carl Lewis", nl: "Carl Lewis" }
        ],
        correct: 0,
        explanation: {
          en: "Phil Knight co-founded Nike in 1964 with track coach Bill Bowerman. Originally called Blue Ribbon Sports, it was renamed Nike in 1971 after the Greek goddess of victory.",
          es: "Phil Knight cofundó Nike en 1964 con el entrenador de atletismo Bill Bowerman. Originalmente llamada Blue Ribbon Sports, fue renombrada Nike en 1971 por la diosa griega de la victoria.",
          de: "Phil Knight gründete Nike 1964 zusammen mit Leichtathletik-Trainer Bill Bowerman. Ursprünglich Blue Ribbon Sports genannt, wurde es 1971 nach der griechischen Siegesgöttin in Nike umbenannt.",
          nl: "Phil Knight richtte Nike op in 1964 met atletiekcoach Bill Bowerman. Oorspronkelijk Blue Ribbon Sports genoemd, werd het in 1971 hernoemd naar Nike naar de Griekse godin van de overwinning."
        }
      },
      {
        question: {
          en: "Which company is associated with founder Thomas Edison?",
          es: "¿Qué empresa está asociada con el fundador Thomas Edison?",
          de: "Welches Unternehmen wird mit Gründer Thomas Edison in Verbindung gebracht?",
          nl: "Welk bedrijf wordt geassocieerd met oprichter Thomas Edison?"
        },
        options: [
          { en: "General Electric", es: "General Electric", de: "General Electric", nl: "General Electric" },
          { en: "Westinghouse", es: "Westinghouse", de: "Westinghouse", nl: "Westinghouse" },
          { en: "Siemens", es: "Siemens", de: "Siemens", nl: "Siemens" },
          { en: "Philips", es: "Philips", de: "Philips", nl: "Philips" }
        ],
        correct: 0,
        explanation: {
          en: "Thomas Edison founded Edison General Electric Company in 1878, which later became General Electric (GE) in 1892 after merging with Thomson-Houston Company.",
          es: "Thomas Edison fundó Edison General Electric Company en 1878, que luego se convirtió en General Electric (GE) en 1892 después de fusionarse con Thomson-Houston Company.",
          de: "Thomas Edison gründete Edison General Electric Company 1878, die 1892 nach der Fusion mit Thomson-Houston Company zu General Electric (GE) wurde.",
          nl: "Thomas Edison richtte Edison General Electric Company op in 1878, dat later General Electric (GE) werd in 1892 na een fusie met Thomson-Houston Company."
        }
      },
      {
        question: {
          en: "Who founded the luxury fashion brand Chanel?",
          es: "¿Quién fundó la marca de moda de lujo Chanel?",
          de: "Wer gründete die Luxusmodemarke Chanel?",
          nl: "Wie heeft het luxe modemerk Chanel opgericht?"
        },
        options: [
          { en: "Coco Chanel", es: "Coco Chanel", de: "Coco Chanel", nl: "Coco Chanel" },
          { en: "Christian Dior", es: "Christian Dior", de: "Christian Dior", nl: "Christian Dior" },
          { en: "Yves Saint Laurent", es: "Yves Saint Laurent", de: "Yves Saint Laurent", nl: "Yves Saint Laurent" },
          { en: "Giorgio Armani", es: "Giorgio Armani", de: "Giorgio Armani", nl: "Giorgio Armani" }
        ],
        correct: 0,
        explanation: {
          en: "Gabrielle 'Coco' Chanel founded Chanel in 1910, revolutionizing women's fashion with elegant, comfortable designs and iconic products like Chanel No. 5 perfume.",
          es: "Gabrielle 'Coco' Chanel fundó Chanel en 1910, revolucionando la moda femenina con diseños elegantes y cómodos y productos icónicos como el perfume Chanel No. 5.",
          de: "Gabrielle 'Coco' Chanel gründete Chanel 1910 und revolutionierte die Damenmode mit eleganten, bequemen Designs und ikonischen Produkten wie dem Parfüm Chanel No. 5.",
          nl: "Gabrielle 'Coco' Chanel richtte Chanel op in 1910, zij revolutioneerde damesmode met elegante, comfortabele ontwerpen en iconische producten zoals Chanel No. 5 parfum."
        }
      },
      {
        question: {
          en: "Which fast-food chain was founded by Glen Bell?",
          es: "¿Qué cadena de comida rápida fue fundada por Glen Bell?",
          de: "Welche Fast-Food-Kette wurde von Glen Bell gegründet?",
          nl: "Welke fastfoodketen werd opgericht door Glen Bell?"
        },
        options: [
          { en: "Taco Bell", es: "Taco Bell", de: "Taco Bell", nl: "Taco Bell" },
          { en: "Chipotle", es: "Chipotle", de: "Chipotle", nl: "Chipotle" },
          { en: "Qdoba", es: "Qdoba", de: "Qdoba", nl: "Qdoba" },
          { en: "Del Taco", es: "Del Taco", de: "Del Taco", nl: "Del Taco" }
        ],
        correct: 0,
        explanation: {
          en: "Glen Bell founded Taco Bell in 1962 in Downey, California, introducing Mexican-style fast food to mainstream America and creating the modern fast-casual Mexican food industry.",
          es: "Glen Bell fundó Taco Bell en 1962 en Downey, California, introduciendo comida rápida de estilo mexicano a la América mainstream y creando la industria moderna de comida mexicana rápida casual.",
          de: "Glen Bell gründete Taco Bell 1962 in Downey, Kalifornien, führte mexikanisches Fast Food in Mainstream-Amerika ein und schuf die moderne Fast-Casual-Mexikanische-Food-Industrie.",
          nl: "Glen Bell richtte Taco Bell op in 1962 in Downey, Californië, hij introduceerde Mexicaans-stijl fastfood in mainstream Amerika en creëerde de moderne fast-casual Mexicaanse voedselindustrie."
        }
      },
      {
        question: {
          en: "Who founded the cosmetics company L'Oréal?",
          es: "¿Quién fundó la empresa de cosméticos L'Oréal?",
          de: "Wer gründete das Kosmetikunternehmen L'Oréal?",
          nl: "Wie heeft het cosmeticabedrijf L'Oréal opgericht?"
        },
        options: [
          { en: "Eugène Schueller", es: "Eugène Schueller", de: "Eugène Schueller", nl: "Eugène Schueller" },
          { en: "Max Factor", es: "Max Factor", de: "Max Factor", nl: "Max Factor" },
          { en: "Helena Rubinstein", es: "Helena Rubinstein", de: "Helena Rubinstein", nl: "Helena Rubinstein" },
          { en: "Elizabeth Arden", es: "Elizabeth Arden", de: "Elizabeth Arden", nl: "Elizabeth Arden" }
        ],
        correct: 0,
        explanation: {
          en: "Eugène Schueller founded L'Oréal in 1909 as a hair dye company. Today it's the world's largest cosmetics company, owning brands like Maybelline, Lancôme, and Urban Decay.",
          es: "Eugène Schueller fundó L'Oréal en 1909 como una empresa de tintes para el cabello. Hoy es la empresa de cosméticos más grande del mundo, propietaria de marcas como Maybelline, Lancôme y Urban Decay.",
          de: "Eugène Schueller gründete L'Oréal 1909 als Haarfärbemittel-Unternehmen. Heute ist es das größte Kosmetikunternehmen der Welt mit Marken wie Maybelline, Lancôme und Urban Decay.",
          nl: "Eugène Schueller richtte L'Oréal op in 1909 als een haarverf bedrijf. Vandaag is het 's werelds grootste cosmeticabedrijf, eigenaar van merken zoals Maybelline, Lancôme en Urban Decay."
        }
      },
      {
        question: {
          en: "Which retail company was founded by Sam Walton?",
          es: "¿Qué empresa minorista fue fundada por Sam Walton?",
          de: "Welches Einzelhandelsunternehmen wurde von Sam Walton gegründet?",
          nl: "Welk retailbedrijf werd opgericht door Sam Walton?"
        },
        options: [
          { en: "Walmart", es: "Walmart", de: "Walmart", nl: "Walmart" },
          { en: "Target", es: "Target", de: "Target", nl: "Target" },
          { en: "Kmart", es: "Kmart", de: "Kmart", nl: "Kmart" },
          { en: "Sears", es: "Sears", de: "Sears", nl: "Sears" }
        ],
        correct: 0,
        explanation: {
          en: "Sam Walton founded Walmart in 1962 with the philosophy of offering low prices and great value. It became the world's largest retailer and private employer.",
          es: "Sam Walton fundó Walmart en 1962 con la filosofía de ofrecer precios bajos y gran valor. Se convirtió en el minorista más grande del mundo y el empleador privado más grande.",
          de: "Sam Walton gründete Walmart 1962 mit der Philosophie, niedrige Preise und großen Wert anzubieten. Es wurde der größte Einzelhändler und private Arbeitgeber der Welt.",
          nl: "Sam Walton richtte Walmart op in 1962 met de filosofie van lage prijzen en grote waarde aanbieden. Het werd 's werelds grootste retailer en particuliere werkgever."
        }
      },
      {
        question: {
          en: "Who founded the coffee company Starbucks?",
          es: "¿Quién fundó la empresa de café Starbucks?",
          de: "Wer gründete die Kaffeecompany Starbucks?",
          nl: "Wie heeft het koffiebedrijf Starbucks opgericht?"
        },
        options: [
          { en: "Jerry Baldwin, Zev Siegl, Gordon Bowker", es: "Jerry Baldwin, Zev Siegl, Gordon Bowker", de: "Jerry Baldwin, Zev Siegl, Gordon Bowker", nl: "Jerry Baldwin, Zev Siegl, Gordon Bowker" },
          { en: "Howard Schultz", es: "Howard Schultz", de: "Howard Schultz", nl: "Howard Schultz" },
          { en: "Alfred Peet", es: "Alfred Peet", de: "Alfred Peet", nl: "Alfred Peet" },
          { en: "James Freeman", es: "James Freeman", de: "James Freeman", nl: "James Freeman" }
        ],
        correct: 0,
        explanation: {
          en: "Starbucks was originally founded by Jerry Baldwin, Zev Siegl, and Gordon Bowker in 1971. Howard Schultz later bought the company and transformed it into the global coffeehouse chain.",
          es: "Starbucks fue fundado originalmente por Jerry Baldwin, Zev Siegl y Gordon Bowker en 1971. Howard Schultz luego compró la empresa y la transformó en la cadena global de cafeterías.",
          de: "Starbucks wurde ursprünglich 1971 von Jerry Baldwin, Zev Siegl und Gordon Bowker gegründet. Howard Schultz kaufte später das Unternehmen und verwandelte es in die globale Coffeehouse-Kette.",
          nl: "Starbucks werd oorspronkelijk opgericht door Jerry Baldwin, Zev Siegl en Gordon Bowker in 1971. Howard Schultz kocht later het bedrijf en transformeerde het tot de wereldwijde koffieketenwinkel."
        }
      },
      {
        question: {
          en: "Which automobile company was founded by Enzo Ferrari?",
          es: "¿Qué empresa de automóviles fue fundada por Enzo Ferrari?",
          de: "Welches Automobilunternehmen wurde von Enzo Ferrari gegründet?",
          nl: "Welk automobielbedrijf werd opgericht door Enzo Ferrari?"
        },
        options: [
          { en: "Ferrari", es: "Ferrari", de: "Ferrari", nl: "Ferrari" },
          { en: "Lamborghini", es: "Lamborghini", de: "Lamborghini", nl: "Lamborghini" },
          { en: "Maserati", es: "Maserati", de: "Maserati", nl: "Maserati" },
          { en: "Alfa Romeo", es: "Alfa Romeo", de: "Alfa Romeo", nl: "Alfa Romeo" }
        ],
        correct: 0,
        explanation: {
          en: "Enzo Ferrari founded Ferrari in 1939, initially as Auto Avio Costruzioni, later becoming Ferrari S.p.A. in 1947. The company became legendary for its racing success and luxury sports cars.",
          es: "Enzo Ferrari fundó Ferrari en 1939, inicialmente como Auto Avio Costruzioni, luego se convirtió en Ferrari S.p.A. en 1947. La empresa se volvió legendaria por su éxito en carreras y autos deportivos de lujo.",
          de: "Enzo Ferrari gründete Ferrari 1939, zunächst als Auto Avio Costruzioni, später 1947 als Ferrari S.p.A. Das Unternehmen wurde legendär für seinen Rennsport-Erfolg und Luxus-Sportwagen.",
          nl: "Enzo Ferrari richtte Ferrari op in 1939, aanvankelijk als Auto Avio Costruzioni, later Ferrari S.p.A. in 1947. Het bedrijf werd legendarisch voor zijn racesucces en luxe sportwagens."
        }
      },
      {
        question: {
          en: "Who founded the technology company IBM?",
          es: "¿Quién fundó la empresa de tecnología IBM?",
          de: "Wer gründete das Technologieunternehmen IBM?",
          nl: "Wie heeft het technologiebedrijf IBM opgericht?"
        },
        options: [
          { en: "Herman Hollerith", es: "Herman Hollerith", de: "Herman Hollerith", nl: "Herman Hollerith" },
          { en: "Thomas Watson", es: "Thomas Watson", de: "Thomas Watson", nl: "Thomas Watson" },
          { en: "Charles Flint", es: "Charles Flint", de: "Charles Flint", nl: "Charles Flint" },
          { en: "John Patterson", es: "John Patterson", de: "John Patterson", nl: "John Patterson" }
        ],
        correct: 0,
        explanation: {
          en: "Herman Hollerith founded the Tabulating Machine Company in 1896, which later became IBM in 1924. Hollerith invented the first practical punch-card tabulating system.",
          es: "Herman Hollerith fundó la Tabulating Machine Company en 1896, que luego se convirtió en IBM en 1924. Hollerith inventó el primer sistema práctico de tabulación de tarjetas perforadas.",
          de: "Herman Hollerith gründete 1896 die Tabulating Machine Company, die 1924 zu IBM wurde. Hollerith erfand das erste praktische Lochkarten-Tabuliersystem.",
          nl: "Herman Hollerith richtte de Tabulating Machine Company op in 1896, die later IBM werd in 1924. Hollerith vond het eerste praktische ponskaart-tabulatiesysteem uit."
        }
      },
      {
        question: {
          en: "Which entertainment company was founded by Walt Disney and Roy Disney?",
          es: "¿Qué empresa de entretenimiento fue fundada por Walt Disney y Roy Disney?",
          de: "Welches Unterhaltungsunternehmen wurde von Walt Disney und Roy Disney gegründet?",
          nl: "Welk entertainmentbedrijf werd opgericht door Walt Disney en Roy Disney?"
        },
        options: [
          { en: "The Walt Disney Company", es: "The Walt Disney Company", de: "The Walt Disney Company", nl: "The Walt Disney Company" },
          { en: "Warner Bros", es: "Warner Bros", de: "Warner Bros", nl: "Warner Bros" },
          { en: "Universal Studios", es: "Universal Studios", de: "Universal Studios", nl: "Universal Studios" },
          { en: "Paramount Pictures", es: "Paramount Pictures", de: "Paramount Pictures", nl: "Paramount Pictures" }
        ],
        correct: 0,
        explanation: {
          en: "Walt Disney and his brother Roy founded The Walt Disney Company in 1923. It started as Disney Brothers Cartoon Studio and became one of the largest entertainment conglomerates.",
          es: "Walt Disney y su hermano Roy fundaron The Walt Disney Company en 1923. Comenzó como Disney Brothers Cartoon Studio y se convirtió en uno de los conglomerados de entretenimiento más grandes.",
          de: "Walt Disney und sein Bruder Roy gründeten The Walt Disney Company 1923. Es begann als Disney Brothers Cartoon Studio und wurde eines der größten Unterhaltungskonglomerate.",
          nl: "Walt Disney en zijn broer Roy richtten The Walt Disney Company op in 1923. Het begon als Disney Brothers Cartoon Studio en werd een van de grootste entertainmentconglomeraten."
        }
      },
      {
        question: {
          en: "Who founded the video game company Nintendo?",
          es: "¿Quién fundó la empresa de videojuegos Nintendo?",
          de: "Wer gründete das Videospielunternehmen Nintendo?",
          nl: "Wie heeft het videospelbedrijf Nintendo opgericht?"
        },
        options: [
          { en: "Fusajiro Yamauchi", es: "Fusajiro Yamauchi", de: "Fusajiro Yamauchi", nl: "Fusajiro Yamauchi" },
          { en: "Shigeru Miyamoto", es: "Shigeru Miyamoto", de: "Shigeru Miyamoto", nl: "Shigeru Miyamoto" },
          { en: "Satoru Iwata", es: "Satoru Iwata", de: "Satoru Iwata", nl: "Satoru Iwata" },
          { en: "Hiroshi Yamauchi", es: "Hiroshi Yamauchi", de: "Hiroshi Yamauchi", nl: "Hiroshi Yamauchi" }
        ],
        correct: 0,
        explanation: {
          en: "Fusajiro Yamauchi founded Nintendo in 1889 as a playing card company in Kyoto, Japan. It later evolved into the world-famous video game company we know today.",
          es: "Fusajiro Yamauchi fundó Nintendo en 1889 como una empresa de naipes en Kyoto, Japón. Luego evolucionó hasta convertirse en la empresa de videojuegos mundialmente famosa que conocemos hoy.",
          de: "Fusajiro Yamauchi gründete Nintendo 1889 als Spielkarten-Unternehmen in Kyoto, Japan. Es entwickelte sich später zu dem weltberühmten Videospielunternehmen, das wir heute kennen.",
          nl: "Fusajiro Yamauchi richtte Nintendo op in 1889 als een speelkaartenbedrijf in Kyoto, Japan. Het evolueerde later tot het wereldberoemde videospelbedrijf dat we vandaag kennen."
        }
      },
      {
        question: {
          en: "Which airline was founded by Juan Trippe?",
          es: "¿Qué aerolínea fue fundada por Juan Trippe?",
          de: "Welche Fluggesellschaft wurde von Juan Trippe gegründet?",
          nl: "Welke luchtvaartmaatschappij werd opgericht door Juan Trippe?"
        },
        options: [
          { en: "Pan American World Airways", es: "Pan American World Airways", de: "Pan American World Airways", nl: "Pan American World Airways" },
          { en: "Trans World Airlines", es: "Trans World Airlines", de: "Trans World Airlines", nl: "Trans World Airlines" },
          { en: "American Airlines", es: "American Airlines", de: "American Airlines", nl: "American Airlines" },
          { en: "United Airlines", es: "United Airlines", de: "United Airlines", nl: "United Airlines" }
        ],
        correct: 0,
        explanation: {
          en: "Juan Trippe founded Pan American World Airways (Pan Am) in 1927, which became one of the most iconic airlines in aviation history, pioneering international air travel.",
          es: "Juan Trippe fundó Pan American World Airways (Pan Am) en 1927, que se convirtió en una de las aerolíneas más icónicas en la historia de la aviación, siendo pionera en viajes aéreos internacionales.",
          de: "Juan Trippe gründete Pan American World Airways (Pan Am) 1927, die zu einer der ikonischsten Fluggesellschaften der Luftfahrtgeschichte wurde und den internationalen Luftverkehr pioneerte.",
          nl: "Juan Trippe richtte Pan American World Airways (Pan Am) op in 1927, dat een van de meest iconische luchtvaartmaatschappijen in de luchtvaartgeschiedenis werd, pionier van internationale luchtvluchten."
        }
      },
      {
        question: {
          en: "Who founded the breakfast cereal company Kellogg's?",
          es: "¿Quién fundó la empresa de cereales para el desayuno Kellogg's?",
          de: "Wer gründete das Frühstückszerealien-Unternehmen Kellogg's?",
          nl: "Wie heeft het ontbijtgranen bedrijf Kellogg's opgericht?"
        },
        options: [
          { en: "Will Keith Kellogg", es: "Will Keith Kellogg", de: "Will Keith Kellogg", nl: "Will Keith Kellogg" },
          { en: "John Harvey Kellogg", es: "John Harvey Kellogg", de: "John Harvey Kellogg", nl: "John Harvey Kellogg" },
          { en: "Charles Post", es: "Charles Post", de: "Charles Post", nl: "Charles Post" },
          { en: "Henry Crowell", es: "Henry Crowell", de: "Henry Crowell", nl: "Henry Crowell" }
        ],
        correct: 0,
        explanation: {
          en: "Will Keith Kellogg founded the Kellogg Company in 1906, after accidentally discovering the process for making flaked cereals while working with his brother John at a health sanitarium.",
          es: "Will Keith Kellogg fundó Kellogg Company en 1906, después de descubrir accidentalmente el proceso para hacer cereales en hojuelas mientras trabajaba con su hermano John en un sanatorio de salud.",
          de: "Will Keith Kellogg gründete die Kellogg Company 1906, nachdem er zufällig das Verfahren zur Herstellung von Flocken-Cerealien entdeckte, während er mit seinem Bruder John in einem Gesundheitssanatorium arbeitete.",
          nl: "Will Keith Kellogg richtte Kellogg Company op in 1906, nadat hij per ongeluk het proces ontdekte voor het maken van geflakte granen terwijl hij met zijn broer John werkte in een gezondheidsanatorium."
        }
      },
      {
        question: {
          en: "Which pizza chain was founded by Tom and James Monaghan?",
          es: "¿Qué cadena de pizza fue fundada por Tom y James Monaghan?",
          de: "Welche Pizzakette wurde von Tom und James Monaghan gegründet?",
          nl: "Welke pizzaketen werd opgericht door Tom en James Monaghan?"
        },
        options: [
          { en: "Domino's", es: "Domino's", de: "Domino's", nl: "Domino's" },
          { en: "Pizza Hut", es: "Pizza Hut", de: "Pizza Hut", nl: "Pizza Hut" },
          { en: "Papa John's", es: "Papa John's", de: "Papa John's", nl: "Papa John's" },
          { en: "Little Caesars", es: "Little Caesars", de: "Little Caesars", nl: "Little Caesars" }
        ],
        correct: 0,
        explanation: {
          en: "Tom and James Monaghan founded Domino's in 1960, originally called DomiNick's. Tom later bought out his brother's share and renamed it Domino's Pizza in 1965.",
          es: "Tom y James Monaghan fundaron Domino's en 1960, originalmente llamado DomiNick's. Tom luego compró la parte de su hermano y lo renombró Domino's Pizza en 1965.",
          de: "Tom und James Monaghan gründeten Domino's 1960, ursprünglich DomiNick's genannt. Tom kaufte später den Anteil seines Bruders und benannte es 1965 in Domino's Pizza um.",
          nl: "Tom en James Monaghan richtten Domino's op in 1960, oorspronkelijk DomiNick's genoemd. Tom kocht later het aandeel van zijn broer en hernoemde het Domino's Pizza in 1965."
        }
      },
      {
        question: {
          en: "Who founded the chocolate company Hershey's?",
          es: "¿Quién fundó la empresa de chocolate Hershey's?",
          de: "Wer gründete das Schokoladenunternehmen Hershey's?",
          nl: "Wie heeft het chocoladebedrijf Hershey's opgericht?"
        },
        options: [
          { en: "Milton Hershey", es: "Milton Hershey", de: "Milton Hershey", nl: "Milton Hershey" },
          { en: "Forrest Mars", es: "Forrest Mars", de: "Forrest Mars", nl: "Forrest Mars" },
          { en: "Henri Nestlé", es: "Henri Nestlé", de: "Henri Nestlé", nl: "Henri Nestlé" },
          { en: "Rodolphe Lindt", es: "Rodolphe Lindt", de: "Rodolphe Lindt", nl: "Rodolphe Lindt" }
        ],
        correct: 0,
        explanation: {
          en: "Milton Hershey founded The Hershey Company in 1894, creating America's first mass-produced chocolate bar and establishing the town of Hershey, Pennsylvania around his factory.",
          es: "Milton Hershey fundó The Hershey Company en 1894, creando la primera barra de chocolate producida en masa de Estados Unidos y estableciendo el pueblo de Hershey, Pennsylvania alrededor de su fábrica.",
          de: "Milton Hershey gründete The Hershey Company 1894, schuf Amerikas ersten massenproduzierte Schokoladenriegel und gründete die Stadt Hershey, Pennsylvania um seine Fabrik herum.",
          nl: "Milton Hershey richtte The Hershey Company op in 1894, hij creëerde Amerika's eerste massaproductie chocoladereep en vestigde de stad Hershey, Pennsylvania rond zijn fabriek."
        }
      },
      {
        question: {
          en: "Which furniture retailer was founded by Ingvar Kamprad?",
          es: "¿Qué minorista de muebles fue fundado por Ingvar Kamprad?",
          de: "Welcher Möbelhändler wurde von Ingvar Kamprad gegründet?",
          nl: "Welke meubelretailer werd opgericht door Ingvar Kamprad?"
        },
        options: [
          { en: "IKEA", es: "IKEA", de: "IKEA", nl: "IKEA" },
          { en: "Ashley Furniture", es: "Ashley Furniture", de: "Ashley Furniture", nl: "Ashley Furniture" },
          { en: "Wayfair", es: "Wayfair", de: "Wayfair", nl: "Wayfair" },
          { en: "Room & Board", es: "Room & Board", de: "Room & Board", nl: "Room & Board" }
        ],
        correct: 0,
        explanation: {
          en: "Ingvar Kamprad founded IKEA in 1943 when he was just 17 years old in Sweden. The name comes from his initials (I.K.) plus Elmtaryd and Agunnaryd, his farm and hometown.",
          es: "Ingvar Kamprad fundó IKEA en 1943 cuando tenía solo 17 años en Suecia. El nombre viene de sus iniciales (I.K.) más Elmtaryd y Agunnaryd, su granja y ciudad natal.",
          de: "Ingvar Kamprad gründete IKEA 1943 im Alter von nur 17 Jahren in Schweden. Der Name stammt von seinen Initialen (I.K.) plus Elmtaryd und Agunnaryd, seinem Bauernhof und Heimatort.",
          nl: "Ingvar Kamprad richtte IKEA op in 1943 toen hij slechts 17 jaar oud was in Zweden. De naam komt van zijn initialen (I.K.) plus Elmtaryd en Agunnaryd, zijn boerderij en geboorteplaats."
        }
      },
      {
        question: {
          en: "Who founded the hotel chain Hilton Hotels?",
          es: "¿Quién fundó la cadena hotelera Hilton Hotels?",
          de: "Wer gründete die Hotelkette Hilton Hotels?",
          nl: "Wie heeft de hotelketen Hilton Hotels opgericht?"
        },
        options: [
          { en: "Conrad Hilton", es: "Conrad Hilton", de: "Conrad Hilton", nl: "Conrad Hilton" },
          { en: "J.W. Marriott", es: "J.W. Marriott", de: "J.W. Marriott", nl: "J.W. Marriott" },
          { en: "César Ritz", es: "César Ritz", de: "César Ritz", nl: "César Ritz" },
          { en: "Howard Johnson", es: "Howard Johnson", de: "Howard Johnson", nl: "Howard Johnson" }
        ],
        correct: 0,
        explanation: {
          en: "Conrad Hilton founded Hilton Hotels in 1919, starting with the Mobley Hotel in Texas. He built it into one of the world's largest hospitality companies.",
          es: "Conrad Hilton fundó Hilton Hotels en 1919, comenzando con el Mobley Hotel en Texas. Lo construyó hasta convertirlo en una de las empresas de hospitalidad más grandes del mundo.",
          de: "Conrad Hilton gründete Hilton Hotels 1919, beginnend mit dem Mobley Hotel in Texas. Er baute es zu einem der größten Gastgewerbeunternehmen der Welt auf.",
          nl: "Conrad Hilton richtte Hilton Hotels op in 1919, hij begon met het Mobley Hotel in Texas. Hij bouwde het uit tot een van 's werelds grootste hotelmaatschappijen."
        }
      },
      {
        question: {
          en: "Who founded KFC (Kentucky Fried Chicken)?",
          es: "¿Quién fundó KFC (Kentucky Fried Chicken)?",
          de: "Wer gründete KFC (Kentucky Fried Chicken)?",
          nl: "Wie heeft KFC (Kentucky Fried Chicken) opgericht?"
        },
        options: [
          { en: "Colonel Harland Sanders", es: "Colonel Harland Sanders", de: "Colonel Harland Sanders", nl: "Colonel Harland Sanders" },
          { en: "Ray Kroc", es: "Ray Kroc", de: "Ray Kroc", nl: "Ray Kroc" },
          { en: "Dave Thomas", es: "Dave Thomas", de: "Dave Thomas", nl: "Dave Thomas" },
          { en: "Fred DeLuca", es: "Fred DeLuca", de: "Fred DeLuca", nl: "Fred DeLuca" }
        ],
        correct: 0,
        explanation: {
          en: "Colonel Harland Sanders founded KFC in 1952, perfecting his secret recipe of 11 herbs and spices. He franchised his chicken business across America, becoming a cultural icon with his white suit and goatee.",
          es: "Colonel Harland Sanders fundó KFC en 1952, perfeccionando su receta secreta de 11 hierbas y especias. Franquició su negocio de pollo en toda América, convirtiéndose en un icono cultural con su traje blanco y perilla.",
          de: "Colonel Harland Sanders gründete KFC 1952 und perfektionierte sein Geheimrezept aus 11 Kräutern und Gewürzen. Er franchisierte sein Hähnchengeschäft in ganz Amerika und wurde mit seinem weißen Anzug und Spitzbart zur Kultfigur.",
          nl: "Colonel Harland Sanders richtte KFC op in 1952, hij perfectioneerde zijn geheime recept van 11 kruiden en specerijen. Hij franchisede zijn kipbedrijf in heel Amerika en werd een cultureel icoon met zijn witte pak en sik."
        }
      },
      {
        question: {
          en: "Which e-commerce company was founded by Jeff Bezos?",
          es: "¿Qué empresa de comercio electrónico fue fundada por Jeff Bezos?",
          de: "Welches E-Commerce-Unternehmen wurde von Jeff Bezos gegründet?",
          nl: "Welk e-commercebedrijf werd opgericht door Jeff Bezos?"
        },
        options: [
          { en: "Amazon", es: "Amazon", de: "Amazon", nl: "Amazon" },
          { en: "eBay", es: "eBay", de: "eBay", nl: "eBay" },
          { en: "Alibaba", es: "Alibaba", de: "Alibaba", nl: "Alibaba" },
          { en: "PayPal", es: "PayPal", de: "PayPal", nl: "PayPal" }
        ],
        correct: 0,
        explanation: {
          en: "Jeff Bezos founded Amazon in 1994 as an online bookstore in his garage. It grew into the world's largest online retailer and cloud computing provider, making Bezos one of the world's wealthiest people.",
          es: "Jeff Bezos fundó Amazon en 1994 como una librería en línea en su garaje. Creció hasta convertirse en el minorista en línea más grande del mundo y proveedor de computación en la nube, haciendo de Bezos una de las personas más ricas del mundo.",
          de: "Jeff Bezos gründete Amazon 1994 als Online-Buchhandlung in seiner Garage. Es wuchs zum weltgrößten Online-Händler und Cloud-Computing-Anbieter und machte Bezos zu einem der reichsten Menschen der Welt.",
          nl: "Jeff Bezos richtte Amazon op in 1994 als een online boekwinkel in zijn garage. Het groeide uit tot 's werelds grootste online retailer en cloud computing provider, waardoor Bezos een van 's werelds rijkste mensen werd."
        }
      },
      {
        question: {
          en: "Who founded the social media platform Facebook?",
          es: "¿Quién fundó la plataforma de redes sociales Facebook?",
          de: "Wer gründete die Social-Media-Plattform Facebook?",
          nl: "Wie heeft het sociale mediaplatform Facebook opgericht?"
        },
        options: [
          { en: "Mark Zuckerberg", es: "Mark Zuckerberg", de: "Mark Zuckerberg", nl: "Mark Zuckerberg" },
          { en: "Eduardo Saverin", es: "Eduardo Saverin", de: "Eduardo Saverin", nl: "Eduardo Saverin" },
          { en: "Dustin Moskovitz", es: "Dustin Moskovitz", de: "Dustin Moskovitz", nl: "Dustin Moskovitz" },
          { en: "Chris Hughes", es: "Chris Hughes", de: "Chris Hughes", nl: "Chris Hughes" }
        ],
        correct: 0,
        explanation: {
          en: "Mark Zuckerberg founded Facebook in 2004 from his Harvard dorm room with co-founders Eduardo Saverin, Dustin Moskovitz, and Chris Hughes. It grew to become the world's largest social network with billions of users.",
          es: "Mark Zuckerberg fundó Facebook en 2004 desde su habitación de dormitorio en Harvard con cofundadores Eduardo Saverin, Dustin Moskovitz y Chris Hughes. Creció hasta convertirse en la red social más grande del mundo con miles de millones de usuarios.",
          de: "Mark Zuckerberg gründete Facebook 2004 aus seinem Harvard-Wohnheimzimmer mit Mitgründern Eduardo Saverin, Dustin Moskovitz und Chris Hughes. Es wurde zum weltgrößten sozialen Netzwerk mit Milliarden von Nutzern.",
          nl: "Mark Zuckerberg richtte Facebook op in 2004 vanuit zijn Harvard-studentenkamer met medeoprichters Eduardo Saverin, Dustin Moskovitz en Chris Hughes. Het groeide uit tot 's werelds grootste sociale netwerk met miljarden gebruikers."
        }
      },
      {
        question: {
          en: "Which search engine company was founded by Larry Page and Sergey Brin?",
          es: "¿Qué empresa de motores de búsqueda fue fundada por Larry Page y Sergey Brin?",
          de: "Welches Suchmaschinenunternehmen wurde von Larry Page und Sergey Brin gegründet?",
          nl: "Welk zoekmachinebedrijf werd opgericht door Larry Page en Sergey Brin?"
        },
        options: [
          { en: "Google", es: "Google", de: "Google", nl: "Google" },
          { en: "Yahoo", es: "Yahoo", de: "Yahoo", nl: "Yahoo" },
          { en: "Bing", es: "Bing", de: "Bing", nl: "Bing" },
          { en: "Ask Jeeves", es: "Ask Jeeves", de: "Ask Jeeves", nl: "Ask Jeeves" }
        ],
        correct: 0,
        explanation: {
          en: "Larry Page and Sergey Brin founded Google in 1998 while PhD students at Stanford. Their PageRank algorithm revolutionized search, and Google became the world's dominant search engine and tech giant.",
          es: "Larry Page y Sergey Brin fundaron Google en 1998 mientras eran estudiantes de doctorado en Stanford. Su algoritmo PageRank revolucionó la búsqueda, y Google se convirtió en el motor de búsqueda dominante del mundo y gigante tecnológico.",
          de: "Larry Page und Sergey Brin gründeten Google 1998 als Doktoranden in Stanford. Ihr PageRank-Algorithmus revolutionierte die Suche, und Google wurde zur weltweit dominierenden Suchmaschine und zum Techgiganten.",
          nl: "Larry Page en Sergey Brin richtten Google op in 1998 als PhD-studenten aan Stanford. Hun PageRank-algoritme revolutioneerde zoeken, en Google werd 's werelds dominante zoekmachine en technologiegigant."
        }
      },
      {
        question: {
          en: "Who founded the electric car company Tesla?",
          es: "¿Quién fundó la empresa de autos eléctricos Tesla?",
          de: "Wer gründete das Elektroauto-Unternehmen Tesla?",
          nl: "Wie heeft het elektrische autobedrijf Tesla opgericht?"
        },
        options: [
          { en: "Martin Eberhard and Marc Tarpenning", es: "Martin Eberhard y Marc Tarpenning", de: "Martin Eberhard und Marc Tarpenning", nl: "Martin Eberhard en Marc Tarpenning" },
          { en: "Elon Musk", es: "Elon Musk", de: "Elon Musk", nl: "Elon Musk" },
          { en: "JB Straubel", es: "JB Straubel", de: "JB Straubel", nl: "JB Straubel" },
          { en: "Ian Wright", es: "Ian Wright", de: "Ian Wright", nl: "Ian Wright" }
        ],
        correct: 0,
        explanation: {
          en: "Martin Eberhard and Marc Tarpenning founded Tesla in 2003. Elon Musk joined as chairman and major investor in 2004, later becoming CEO and the public face of the company.",
          es: "Martin Eberhard y Marc Tarpenning fundaron Tesla en 2003. Elon Musk se unió como presidente e inversor principal en 2004, convirtiéndose más tarde en CEO y la cara pública de la compañía.",
          de: "Martin Eberhard und Marc Tarpenning gründeten Tesla 2003. Elon Musk kam 2004 als Vorsitzender und Hauptinvestor dazu und wurde später CEO und öffentliches Gesicht des Unternehmens.",
          nl: "Martin Eberhard en Marc Tarpenning richtten Tesla op in 2003. Elon Musk sloot zich aan als voorzitter en grote investeerder in 2004 en werd later CEO en het publieke gezicht van het bedrijf."
        }
      },
      {
        question: {
          en: "Which mobile phone company was founded by Steve Jobs, Steve Wozniak, and Ronald Wayne?",
          es: "¿Qué empresa de teléfonos móviles fue fundada por Steve Jobs, Steve Wozniak y Ronald Wayne?",
          de: "Welches Mobiltelefon-Unternehmen wurde von Steve Jobs, Steve Wozniak und Ronald Wayne gegründet?",
          nl: "Welk mobiele telefoonbedrijf werd opgericht door Steve Jobs, Steve Wozniak en Ronald Wayne?"
        },
        options: [
          { en: "Apple", es: "Apple", de: "Apple", nl: "Apple" },
          { en: "Nokia", es: "Nokia", de: "Nokia", nl: "Nokia" },
          { en: "BlackBerry", es: "BlackBerry", de: "BlackBerry", nl: "BlackBerry" },
          { en: "Motorola", es: "Motorola", de: "Motorola", nl: "Motorola" }
        ],
        correct: 0,
        explanation: {
          en: "Steve Jobs, Steve Wozniak, and Ronald Wayne founded Apple Computer in 1976. The company revolutionized personal computing and later mobile phones with the iPhone, becoming the world's most valuable company.",
          es: "Steve Jobs, Steve Wozniak y Ronald Wayne fundaron Apple Computer en 1976. La compañía revolucionó la computación personal y luego los teléfonos móviles con el iPhone, convirtiéndose en la empresa más valiosa del mundo.",
          de: "Steve Jobs, Steve Wozniak und Ronald Wayne gründeten Apple Computer 1976. Das Unternehmen revolutionierte Personal Computing und später Mobiltelefone mit dem iPhone und wurde zum wertvollsten Unternehmen der Welt.",
          nl: "Steve Jobs, Steve Wozniak en Ronald Wayne richtten Apple Computer op in 1976. Het bedrijf revolutioneerde personal computing en later mobiele telefoons met de iPhone, en werd 's werelds meest waardevolle bedrijf."
        }
      },
      {
        question: {
          en: "Who founded the streaming service Netflix?",
          es: "¿Quién fundó el servicio de streaming Netflix?",
          de: "Wer gründete den Streaming-Dienst Netflix?",
          nl: "Wie heeft de streamingdienst Netflix opgericht?"
        },
        options: [
          { en: "Reed Hastings and Marc Randolph", es: "Reed Hastings y Marc Randolph", de: "Reed Hastings und Marc Randolph", nl: "Reed Hastings en Marc Randolph" },
          { en: "Jeff Bezos", es: "Jeff Bezos", de: "Jeff Bezos", nl: "Jeff Bezos" },
          { en: "Brian Roberts", es: "Brian Roberts", de: "Brian Roberts", nl: "Brian Roberts" },
          { en: "Bob Iger", es: "Bob Iger", de: "Bob Iger", nl: "Bob Iger" }
        ],
        correct: 0,
        explanation: {
          en: "Reed Hastings and Marc Randolph founded Netflix in 1997 as a DVD rental-by-mail service. They later transformed it into the world's leading streaming platform with over 200 million subscribers.",
          es: "Reed Hastings y Marc Randolph fundaron Netflix en 1997 como un servicio de alquiler de DVD por correo. Luego lo transformaron en la plataforma de streaming líder del mundo con más de 200 millones de suscriptores.",
          de: "Reed Hastings und Marc Randolph gründeten Netflix 1997 als DVD-Verleih per Post. Später verwandelten sie es in die weltweit führende Streaming-Plattform mit über 200 Millionen Abonnenten.",
          nl: "Reed Hastings en Marc Randolph richtten Netflix op in 1997 als een DVD-verhuurservice per post. Ze transformeerden het later tot 's werelds toonaangevende streamingplatform met meer dan 200 miljoen abonnees."
        }
      },
      {
        question: {
          en: "Which ride-sharing company was founded by Travis Kalanick and Garrett Camp?",
          es: "¿Qué empresa de viajes compartidos fue fundada por Travis Kalanick y Garrett Camp?",
          de: "Welches Ride-Sharing-Unternehmen wurde von Travis Kalanick und Garrett Camp gegründet?",
          nl: "Welk ride-sharing bedrijf werd opgericht door Travis Kalanick en Garrett Camp?"
        },
        options: [
          { en: "Uber", es: "Uber", de: "Uber", nl: "Uber" },
          { en: "Lyft", es: "Lyft", de: "Lyft", nl: "Lyft" },
          { en: "Didi", es: "Didi", de: "Didi", nl: "Didi" },
          { en: "Grab", es: "Grab", de: "Grab", nl: "Grab" }
        ],
        correct: 0,
        explanation: {
          en: "Travis Kalanick and Garrett Camp founded Uber in 2009, revolutionizing transportation with on-demand ride-hailing through a smartphone app. Uber expanded globally and disrupted the taxi industry.",
          es: "Travis Kalanick y Garrett Camp fundaron Uber en 2009, revolucionando el transporte con viajes bajo demanda a través de una aplicación de teléfono inteligente. Uber se expandió globalmente y revolucionó la industria del taxi.",
          de: "Travis Kalanick und Garrett Camp gründeten Uber 2009 und revolutionierten den Transport mit On-Demand-Fahrdiensten über eine Smartphone-App. Uber expandierte weltweit und disrupted die Taxibranche.",
          nl: "Travis Kalanick en Garrett Camp richtten Uber op in 2009, zij revolutioneerden het vervoer met on-demand vervoer op aanvraag via een smartphone-app. Uber breidde wereldwijd uit en ontwrichtte de taxi-industrie."
        }
      },
      {
        question: {
          en: "Who founded the professional networking platform LinkedIn?",
          es: "¿Quién fundó la plataforma de redes profesionales LinkedIn?",
          de: "Wer gründete die professionelle Networking-Plattform LinkedIn?",
          nl: "Wie heeft het professionele netwerkplatform LinkedIn opgericht?"
        },
        options: [
          { en: "Reid Hoffman", es: "Reid Hoffman", de: "Reid Hoffman", nl: "Reid Hoffman" },
          { en: "Mark Zuckerberg", es: "Mark Zuckerberg", de: "Mark Zuckerberg", nl: "Mark Zuckerberg" },
          { en: "Jack Dorsey", es: "Jack Dorsey", de: "Jack Dorsey", nl: "Jack Dorsey" },
          { en: "Peter Thiel", es: "Peter Thiel", de: "Peter Thiel", nl: "Peter Thiel" }
        ],
        correct: 0,
        explanation: {
          en: "Reid Hoffman founded LinkedIn in 2002 and launched it in 2003. The professional networking platform grew to over 700 million members and was acquired by Microsoft for $26.2 billion in 2016.",
          es: "Reid Hoffman fundó LinkedIn en 2002 y lo lanzó en 2003. La plataforma de redes profesionales creció a más de 700 millones de miembros y fue adquirida por Microsoft por $26.2 mil millones en 2016.",
          de: "Reid Hoffman gründete LinkedIn 2002 und startete es 2003. Die professionelle Networking-Plattform wuchs auf über 700 Millionen Mitglieder und wurde 2016 von Microsoft für 26,2 Milliarden Dollar gekauft.",
          nl: "Reid Hoffman richtte LinkedIn op in 2002 en lanceerde het in 2003. Het professionele netwerkplatform groeide tot meer dan 700 miljoen leden en werd in 2016 door Microsoft gekocht voor $26,2 miljard."
        }
      },
      {
        question: {
          en: "Which Chinese e-commerce giant was founded by Jack Ma?",
          es: "¿Qué gigante chino del comercio electrónico fue fundado por Jack Ma?",
          de: "Welcher chinesische E-Commerce-Riese wurde von Jack Ma gegründet?",
          nl: "Welke Chinese e-commerce gigant werd opgericht door Jack Ma?"
        },
        options: [
          { en: "Alibaba", es: "Alibaba", de: "Alibaba", nl: "Alibaba" },
          { en: "Tencent", es: "Tencent", de: "Tencent", nl: "Tencent" },
          { en: "JD.com", es: "JD.com", de: "JD.com", nl: "JD.com" },
          { en: "Baidu", es: "Baidu", de: "Baidu", nl: "Baidu" }
        ],
        correct: 0,
        explanation: {
          en: "Jack Ma founded Alibaba in 1999 in Hangzhou, China. It grew from a B2B marketplace into one of the world's largest e-commerce and technology conglomerates, including Taobao and Alipay.",
          es: "Jack Ma fundó Alibaba en 1999 en Hangzhou, China. Creció de un mercado B2B a uno de los conglomerados de comercio electrónico y tecnología más grandes del mundo, incluidos Taobao y Alipay.",
          de: "Jack Ma gründete Alibaba 1999 in Hangzhou, China. Es wuchs von einem B2B-Marktplatz zu einem der weltgrößten E-Commerce- und Technologiekonglomerate, einschließlich Taobao und Alipay.",
          nl: "Jack Ma richtte Alibaba op in 1999 in Hangzhou, China. Het groeide van een B2B-marktplaats tot een van 's werelds grootste e-commerce en technologieconglomeraten, waaronder Taobao en Alipay."
        }
      },
      {
        question: {
          en: "Who founded the aerospace company SpaceX?",
          es: "¿Quién fundó la empresa aeroespacial SpaceX?",
          de: "Wer gründete das Raumfahrtunternehmen SpaceX?",
          nl: "Wie heeft het ruimtevaartbedrijf SpaceX opgericht?"
        },
        options: [
          { en: "Elon Musk", es: "Elon Musk", de: "Elon Musk", nl: "Elon Musk" },
          { en: "Jeff Bezos", es: "Jeff Bezos", de: "Jeff Bezos", nl: "Jeff Bezos" },
          { en: "Richard Branson", es: "Richard Branson", de: "Richard Branson", nl: "Richard Branson" },
          { en: "Paul Allen", es: "Paul Allen", de: "Paul Allen", nl: "Paul Allen" }
        ],
        correct: 0,
        explanation: {
          en: "Elon Musk founded SpaceX in 2002 with the goal of reducing space transportation costs and enabling Mars colonization. SpaceX achieved numerous milestones including reusable rockets and commercial crew missions.",
          es: "Elon Musk fundó SpaceX en 2002 con el objetivo de reducir los costos de transporte espacial y permitir la colonización de Marte. SpaceX logró numerosos hitos, incluidos cohetes reutilizables y misiones de tripulación comercial.",
          de: "Elon Musk gründete SpaceX 2002 mit dem Ziel, Raumfahrttransportkosten zu senken und Mars-Kolonisierung zu ermöglichen. SpaceX erreichte zahlreiche Meilensteine einschließlich wiederverwendbarer Raketen und kommerzieller Crew-Missionen.",
          nl: "Elon Musk richtte SpaceX op in 2002 met als doel de kosten van ruimtetransport te verlagen en Mars-kolonisatie mogelijk te maken. SpaceX behaalde talrijke mijlpalen waaronder herbruikbare raketten en commerciële bemanningmissies."
        }
      },
      {
        question: {
          en: "Which payment company was founded by Peter Thiel and Max Levchin?",
          es: "¿Qué empresa de pagos fue fundada por Peter Thiel y Max Levchin?",
          de: "Welches Zahlungsunternehmen wurde von Peter Thiel und Max Levchin gegründet?",
          nl: "Welk betalingsbedrijf werd opgericht door Peter Thiel en Max Levchin?"
        },
        options: [
          { en: "PayPal", es: "PayPal", de: "PayPal", nl: "PayPal" },
          { en: "Square", es: "Square", de: "Square", nl: "Square" },
          { en: "Stripe", es: "Stripe", de: "Stripe", nl: "Stripe" },
          { en: "Venmo", es: "Venmo", de: "Venmo", nl: "Venmo" }
        ],
        correct: 0,
        explanation: {
          en: "Peter Thiel and Max Levchin co-founded PayPal (originally Confinity) in 1998. It revolutionized online payments and was acquired by eBay for $1.5 billion in 2002. The PayPal Mafia of former employees went on to found many successful companies.",
          es: "Peter Thiel y Max Levchin cofundaron PayPal (originalmente Confinity) en 1998. Revolucionó los pagos en línea y fue adquirido por eBay por $1.5 mil millones en 2002. La Mafia de PayPal de ex empleados fundó muchas empresas exitosas.",
          de: "Peter Thiel und Max Levchin gründeten PayPal (ursprünglich Confinity) 1998. Es revolutionierte Online-Zahlungen und wurde 2002 von eBay für 1,5 Milliarden Dollar gekauft. Die PayPal-Mafia ehemaliger Mitarbeiter gründete viele erfolgreiche Unternehmen.",
          nl: "Peter Thiel en Max Levchin richtten PayPal (oorspronkelijk Confinity) op in 1998. Het revolutioneerde online betalingen en werd in 2002 door eBay gekocht voor $1,5 miljard. De PayPal Mafia van voormalige werknemers richtte veel succesvolle bedrijven op."
        }
      },
      {
        question: {
          en: "Who founded the cosmetics brand Kylie Cosmetics?",
          es: "¿Quién fundó la marca de cosméticos Kylie Cosmetics?",
          de: "Wer gründete die Kosmetikmarke Kylie Cosmetics?",
          nl: "Wie heeft het cosmeticamerk Kylie Cosmetics opgericht?"
        },
        options: [
          { en: "Kylie Jenner", es: "Kylie Jenner", de: "Kylie Jenner", nl: "Kylie Jenner" },
          { en: "Kim Kardashian", es: "Kim Kardashian", de: "Kim Kardashian", nl: "Kim Kardashian" },
          { en: "Rihanna", es: "Rihanna", de: "Rihanna", nl: "Rihanna" },
          { en: "Jessica Alba", es: "Jessica Alba", de: "Jessica Alba", nl: "Jessica Alba" }
        ],
        correct: 0,
        explanation: {
          en: "Kylie Jenner founded Kylie Cosmetics in 2015, initially launching with lip kits. The company grew rapidly through social media marketing, and she became the youngest self-made billionaire before selling a majority stake to Coty Inc.",
          es: "Kylie Jenner fundó Kylie Cosmetics en 2015, lanzando inicialmente con kits de labios. La compañía creció rápidamente a través del marketing en redes sociales, y se convirtió en la multimillonaria hecha a sí misma más joven antes de vender una participación mayoritaria a Coty Inc.",
          de: "Kylie Jenner gründete Kylie Cosmetics 2015 und startete zunächst mit Lip-Kits. Das Unternehmen wuchs schnell durch Social-Media-Marketing, und sie wurde die jüngste selbstgemachte Milliardärin, bevor sie einen Mehrheitsanteil an Coty Inc. verkaufte.",
          nl: "Kylie Jenner richtte Kylie Cosmetics op in 2015, aanvankelijk lancerend met lip kits. Het bedrijf groeide snel door social media marketing, en ze werd de jongste zelfgemaakte miljardair voordat ze een meerderheidsbelang verkocht aan Coty Inc."
        }
      },
      {
        question: {
          en: "Which hotel booking platform was founded by Brian Chesky, Joe Gebbia, and Nathan Blecharczyk?",
          es: "¿Qué plataforma de reservas de hoteles fue fundada por Brian Chesky, Joe Gebbia y Nathan Blecharczyk?",
          de: "Welche Hotelbuchungsplattform wurde von Brian Chesky, Joe Gebbia und Nathan Blecharczyk gegründet?",
          nl: "Welk hotelboekingsplatform werd opgericht door Brian Chesky, Joe Gebbia en Nathan Blecharczyk?"
        },
        options: [
          { en: "Airbnb", es: "Airbnb", de: "Airbnb", nl: "Airbnb" },
          { en: "Booking.com", es: "Booking.com", de: "Booking.com", nl: "Booking.com" },
          { en: "Expedia", es: "Expedia", de: "Expedia", nl: "Expedia" },
          { en: "Vrbo", es: "Vrbo", de: "Vrbo", nl: "Vrbo" }
        ],
        correct: 0,
        explanation: {
          en: "Brian Chesky, Joe Gebbia, and Nathan Blecharczyk founded Airbnb in 2008, starting by renting out air mattresses in their San Francisco apartment. It grew into a global hospitality platform disrupting the hotel industry.",
          es: "Brian Chesky, Joe Gebbia y Nathan Blecharczyk fundaron Airbnb en 2008, comenzando alquilando colchones de aire en su apartamento de San Francisco. Creció hasta convertirse en una plataforma global de hospitalidad que revolucionó la industria hotelera.",
          de: "Brian Chesky, Joe Gebbia und Nathan Blecharczyk gründeten Airbnb 2008 und begannen mit der Vermietung von Luftmatratzen in ihrer Wohnung in San Francisco. Es wuchs zu einer globalen Gastfreundschaftsplattform, die die Hotelbranche disrupted.",
          nl: "Brian Chesky, Joe Gebbia en Nathan Blecharczyk richtten Airbnb op in 2008, ze begonnen met het verhuren van luchtbedden in hun appartement in San Francisco. Het groeide uit tot een wereldwijd horecaplatform dat de hotelindustrie ontwrichtte."
        }
      },
      {
        question: {
          en: "Who founded the photo-sharing app Instagram?",
          es: "¿Quién fundó la aplicación para compartir fotos Instagram?",
          de: "Wer gründete die Foto-Sharing-App Instagram?",
          nl: "Wie heeft de foto-deel app Instagram opgericht?"
        },
        options: [
          { en: "Kevin Systrom and Mike Krieger", es: "Kevin Systrom y Mike Krieger", de: "Kevin Systrom und Mike Krieger", nl: "Kevin Systrom en Mike Krieger" },
          { en: "Evan Spiegel and Bobby Murphy", es: "Evan Spiegel y Bobby Murphy", de: "Evan Spiegel und Bobby Murphy", nl: "Evan Spiegel en Bobby Murphy" },
          { en: "Jack Dorsey", es: "Jack Dorsey", de: "Jack Dorsey", nl: "Jack Dorsey" },
          { en: "Mark Zuckerberg", es: "Mark Zuckerberg", de: "Mark Zuckerberg", nl: "Mark Zuckerberg" }
        ],
        correct: 0,
        explanation: {
          en: "Kevin Systrom and Mike Krieger founded Instagram in 2010. The photo-sharing app grew rapidly to 30 million users before Facebook acquired it for $1 billion in 2012. It now has over 2 billion users.",
          es: "Kevin Systrom y Mike Krieger fundaron Instagram en 2010. La aplicación para compartir fotos creció rápidamente a 30 millones de usuarios antes de que Facebook la adquiriera por $1 mil millones en 2012. Ahora tiene más de 2 mil millones de usuarios.",
          de: "Kevin Systrom und Mike Krieger gründeten Instagram 2010. Die Foto-Sharing-App wuchs schnell auf 30 Millionen Nutzer, bevor Facebook sie 2012 für 1 Milliarde Dollar kaufte. Sie hat jetzt über 2 Milliarden Nutzer.",
          nl: "Kevin Systrom en Mike Krieger richtten Instagram op in 2010. De foto-deel app groeide snel tot 30 miljoen gebruikers voordat Facebook het in 2012 kocht voor $1 miljard. Het heeft nu meer dan 2 miljard gebruikers."
        }
      },
      {
        question: {
          en: "Who founded the luxury car brand Lamborghini?",
          es: "¿Quién fundó la marca de autos de lujo Lamborghini?",
          de: "Wer gründete die Luxusautomarke Lamborghini?",
          nl: "Wie heeft het luxe automerk Lamborghini opgericht?"
        },
        options: [
          { en: "Ferruccio Lamborghini", es: "Ferruccio Lamborghini", de: "Ferruccio Lamborghini", nl: "Ferruccio Lamborghini" },
          { en: "Enzo Ferrari", es: "Enzo Ferrari", de: "Enzo Ferrari", nl: "Enzo Ferrari" },
          { en: "Alfieri Maserati", es: "Alfieri Maserati", de: "Alfieri Maserati", nl: "Alfieri Maserati" },
          { en: "Vincenzo Lancia", es: "Vincenzo Lancia", de: "Vincenzo Lancia", nl: "Vincenzo Lancia" }
        ],
        correct: 0,
        explanation: {
          en: "Ferruccio Lamborghini founded Automobili Lamborghini in 1963. Originally a tractor manufacturer, he started making sports cars after a dispute with Enzo Ferrari about Ferrari's cars.",
          es: "Ferruccio Lamborghini fundó Automobili Lamborghini en 1963. Originalmente fabricante de tractores, comenzó a hacer autos deportivos después de una disputa con Enzo Ferrari sobre los autos de Ferrari.",
          de: "Ferruccio Lamborghini gründete Automobili Lamborghini 1963. Ursprünglich Traktorenhersteller, begann er nach einem Streit mit Enzo Ferrari über Ferraris Autos Sportwagen zu bauen.",
          nl: "Ferruccio Lamborghini richtte Automobili Lamborghini op in 1963. Oorspronkelijk een tractorfabrikant, begon hij sportwagens te maken na een ruzie met Enzo Ferrari over Ferrari's auto's."
        }
      },
      {
        question: {
          en: "Which fashion brand was founded by Ralph Lauren?",
          es: "¿Qué marca de moda fue fundada por Ralph Lauren?",
          de: "Welche Modemarke wurde von Ralph Lauren gegründet?",
          nl: "Welk modemerk werd opgericht door Ralph Lauren?"
        },
        options: [
          { en: "Polo Ralph Lauren", es: "Polo Ralph Lauren", de: "Polo Ralph Lauren", nl: "Polo Ralph Lauren" },
          { en: "Tommy Hilfiger", es: "Tommy Hilfiger", de: "Tommy Hilfiger", nl: "Tommy Hilfiger" },
          { en: "Calvin Klein", es: "Calvin Klein", de: "Calvin Klein", nl: "Calvin Klein" },
          { en: "Michael Kors", es: "Michael Kors", de: "Michael Kors", nl: "Michael Kors" }
        ],
        correct: 0,
        explanation: {
          en: "Ralph Lauren founded Polo Ralph Lauren in 1967, starting with a line of ties. He built it into a global fashion empire known for its preppy American style and iconic polo player logo.",
          es: "Ralph Lauren fundó Polo Ralph Lauren en 1967, comenzando con una línea de corbatas. Lo construyó hasta convertirlo en un imperio de moda global conocido por su estilo americano preppy y su icónico logo del jugador de polo.",
          de: "Ralph Lauren gründete Polo Ralph Lauren 1967 und begann mit einer Krawatten-Linie. Er baute es zu einem globalen Modeimperium auf, das für seinen amerikanischen Preppy-Stil und das ikonische Polospieler-Logo bekannt ist.",
          nl: "Ralph Lauren richtte Polo Ralph Lauren op in 1967, hij begon met een lijn stropdassen. Hij bouwde het uit tot een wereldwijd mode-imperium bekend om zijn preppy Amerikaanse stijl en iconische polospeler logo."
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
