// Entrepreneurs Quiz - Level 3: Easy-Medium
(function() {
  const level3 = {
    name: {
      en: "Entrepreneurs - Easy-Medium",
      es: "Empresarios - Fácil-Medio",
      de: "Unternehmer - Einfach-Mittel",
      nl: "Ondernemers - Gemakkelijk-Gemiddeld"
    },
    questions: [
      {
        question: {
          en: "Who founded the media empire News Corporation?",
          es: "¿Quién fundó el imperio mediático News Corporation?",
          de: "Wer gründete das Medienimperium News Corporation?",
          nl: "Wie heeft het media-imperium News Corporation opgericht?"
        },
        options: [
          { en: "Rupert Murdoch", es: "Rupert Murdoch", de: "Rupert Murdoch", nl: "Rupert Murdoch" },
          { en: "Ted Turner", es: "Ted Turner", de: "Ted Turner", nl: "Ted Turner" },
          { en: "Barry Diller", es: "Barry Diller", de: "Barry Diller", nl: "Barry Diller" },
          { en: "Sumner Redstone", es: "Sumner Redstone", de: "Sumner Redstone", nl: "Sumner Redstone" }
        ],
        correct: 0,
        explanation: {
          en: "Rupert Murdoch built News Corporation into a global media conglomerate, owning Fox News, The Wall Street Journal, The Times of London, and many other major media properties.",
          es: "Rupert Murdoch construyó News Corporation hasta convertirla en un conglomerado mediático global, propietario de Fox News, The Wall Street Journal, The Times de Londres y muchas otras propiedades mediáticas importantes.",
          de: "Rupert Murdoch baute News Corporation zu einem globalen Medienkonglomerat auf, das Fox News, The Wall Street Journal, The Times of London und viele andere große Medieneigenschaften besitzt.",
          nl: "Rupert Murdoch bouwde News Corporation uit tot een wereldwijd mediaconglomeraat, eigenaar van Fox News, The Wall Street Journal, The Times of London en vele andere grote media-eigendommen."
        }
      },
      {
        question: {
          en: "Which retail chain was founded by Bernard Marcus and Arthur Blank?",
          es: "¿Qué cadena minorista fue fundada por Bernard Marcus y Arthur Blank?",
          de: "Welche Einzelhandelskette wurde von Bernard Marcus und Arthur Blank gegründet?",
          nl: "Welke retailketen werd opgericht door Bernard Marcus en Arthur Blank?"
        },
        options: [
          { en: "The Home Depot", es: "The Home Depot", de: "The Home Depot", nl: "The Home Depot" },
          { en: "Lowe's", es: "Lowe's", de: "Lowe's", nl: "Lowe's" },
          { en: "Menards", es: "Menards", de: "Menards", nl: "Menards" },
          { en: "Ace Hardware", es: "Ace Hardware", de: "Ace Hardware", nl: "Ace Hardware" }
        ],
        correct: 0,
        explanation: {
          en: "Bernard Marcus and Arthur Blank founded The Home Depot in 1978, revolutionizing the home improvement retail industry with their warehouse-style stores and customer service approach.",
          es: "Bernard Marcus y Arthur Blank fundaron The Home Depot en 1978, revolucionando la industria minorista de mejoras para el hogar con sus tiendas estilo almacén y enfoque de servicio al cliente.",
          de: "Bernard Marcus und Arthur Blank gründeten The Home Depot 1978 und revolutionierten die Heimwerker-Einzelhandelsbranche mit ihren Lagerhallen-artigen Geschäften und Kundenservice-Ansatz.",
          nl: "Bernard Marcus en Arthur Blank richtten The Home Depot op in 1978, zij revolutioneerden de doe-het-zelf retailindustrie met hun magazijnstijl winkels en klantenservice benadering."
        }
      },
      {
        question: {
          en: "Who founded CNN (Cable News Network)?",
          es: "¿Quién fundó CNN (Cable News Network)?",
          de: "Wer gründete CNN (Cable News Network)?",
          nl: "Wie heeft CNN (Cable News Network) opgericht?"
        },
        options: [
          { en: "Ted Turner", es: "Ted Turner", de: "Ted Turner", nl: "Ted Turner" },
          { en: "Rupert Murdoch", es: "Rupert Murdoch", de: "Rupert Murdoch", nl: "Rupert Murdoch" },
          { en: "Roger Ailes", es: "Roger Ailes", de: "Roger Ailes", nl: "Roger Ailes" },
          { en: "Tom Brokaw", es: "Tom Brokaw", de: "Tom Brokaw", nl: "Tom Brokaw" }
        ],
        correct: 0,
        explanation: {
          en: "Ted Turner founded CNN in 1980 as the first 24-hour television news network, revolutionizing news broadcasting and changing how people consume news worldwide.",
          es: "Ted Turner fundó CNN en 1980 como la primera red de noticias televisivas de 24 horas, revolucionando la transmisión de noticias y cambiando cómo las personas consumen noticias en todo el mundo.",
          de: "Ted Turner gründete CNN 1980 als das erste 24-Stunden-Fernsehnachrichtennetzwerk und revolutionierte die Nachrichtensendung und veränderte, wie Menschen weltweit Nachrichten konsumieren.",
          nl: "Ted Turner richtte CNN op in 1980 als het eerste 24-uurs televisienieuwsnetwerk, hij revolutioneerde nieuwsuitzendingen en veranderde hoe mensen wereldwijd nieuws consumeren."
        }
      },
      {
        question: {
          en: "Which department store chain was founded by John Wanamaker?",
          es: "¿Qué cadena de grandes almacenes fue fundada por John Wanamaker?",
          de: "Welche Kaufhauskette wurde von John Wanamaker gegründet?",
          nl: "Welke warenhuis keten werd opgericht door John Wanamaker?"
        },
        options: [
          { en: "Wanamaker's", es: "Wanamaker's", de: "Wanamaker's", nl: "Wanamaker's" },
          { en: "Macy's", es: "Macy's", de: "Macy's", nl: "Macy's" },
          { en: "Bloomingdale's", es: "Bloomingdale's", de: "Bloomingdale's", nl: "Bloomingdale's" },
          { en: "Nordstrom", es: "Nordstrom", de: "Nordstrom", nl: "Nordstrom" }
        ],
        correct: 0,
        explanation: {
          en: "John Wanamaker founded Wanamaker's in 1861, pioneering modern retail practices including price tags, money-back guarantees, and newspaper advertising.",
          es: "John Wanamaker fundó Wanamaker's en 1861, siendo pionero en prácticas minoristas modernas incluyendo etiquetas de precios, garantías de devolución de dinero y publicidad en periódicos.",
          de: "John Wanamaker gründete Wanamaker's 1861 und war Pionier moderner Einzelhandelspraktiken wie Preisschilder, Geld-zurück-Garantien und Zeitungswerbung.",
          nl: "John Wanamaker richtte Wanamaker's op in 1861, hij was pionier van moderne retailpraktijken zoals prijskaartjes, geld-terug-garanties en krantenadvertenties."
        }
      },
      {
        question: {
          en: "Who founded the magazine publishing empire Condé Nast?",
          es: "¿Quién fundó el imperio editorial de revistas Condé Nast?",
          de: "Wer gründete das Zeitschriftenverlagsimperium Condé Nast?",
          nl: "Wie heeft het tijdschrift uitgeverij imperium Condé Nast opgericht?"
        },
        options: [
          { en: "Condé Nast", es: "Condé Nast", de: "Condé Nast", nl: "Condé Nast" },
          { en: "Hugh Hefner", es: "Hugh Hefner", de: "Hugh Hefner", nl: "Hugh Hefner" },
          { en: "Henry Luce", es: "Henry Luce", de: "Henry Luce", nl: "Henry Luce" },
          { en: "William Randolph Hearst", es: "William Randolph Hearst", de: "William Randolph Hearst", nl: "William Randolph Hearst" }
        ],
        correct: 0,
        explanation: {
          en: "Condé Nast founded Condé Nast Publications in 1909, building a luxury magazine empire that includes Vogue, Vanity Fair, The New Yorker, and many other prestigious titles.",
          es: "Condé Nast fundó Condé Nast Publications en 1909, construyendo un imperio de revistas de lujo que incluye Vogue, Vanity Fair, The New Yorker y muchos otros títulos prestigiosos.",
          de: "Condé Nast gründete Condé Nast Publications 1909 und baute ein Luxusmagazin-Imperium auf, das Vogue, Vanity Fair, The New Yorker und viele andere prestigeträchtige Titel umfasst.",
          nl: "Condé Nast richtte Condé Nast Publications op in 1909, hij bouwde een luxe tijdschrift imperium op dat Vogue, Vanity Fair, The New Yorker en vele andere prestigieuze titels omvat."
        }
      },
      {
        question: {
          en: "Which discount retail chain was founded by Harry Cunningham?",
          es: "¿Qué cadena minorista de descuento fue fundada por Harry Cunningham?",
          de: "Welche Discount-Einzelhandelskette wurde von Harry Cunningham gegründet?",
          nl: "Welke discount retailketen werd opgericht door Harry Cunningham?"
        },
        options: [
          { en: "Kmart", es: "Kmart", de: "Kmart", nl: "Kmart" },
          { en: "Target", es: "Target", de: "Target", nl: "Target" },
          { en: "Walmart", es: "Walmart", de: "Walmart", nl: "Walmart" },
          { en: "Big Lots", es: "Big Lots", de: "Big Lots", nl: "Big Lots" }
        ],
        correct: 0,
        explanation: {
          en: "Harry Cunningham transformed S.S. Kresge Company into Kmart in 1962, pioneering the discount retail format that would influence the entire retail industry.",
          es: "Harry Cunningham transformó S.S. Kresge Company en Kmart en 1962, siendo pionero en el formato minorista de descuento que influenciaría toda la industria minorista.",
          de: "Harry Cunningham verwandelte S.S. Kresge Company 1962 in Kmart und war Pionier des Discount-Einzelhandelsformats, das die gesamte Einzelhandelsbranche beeinflussen würde.",
          nl: "Harry Cunningham transformeerde S.S. Kresge Company naar Kmart in 1962, hij was pionier van het discount retailformaat dat de hele retailindustrie zou beïnvloeden."
        }
      },
      {
        question: {
          en: "Who founded the cosmetics company Estée Lauder?",
          es: "¿Quién fundó la empresa de cosméticos Estée Lauder?",
          de: "Wer gründete das Kosmetikunternehmen Estée Lauder?",
          nl: "Wie heeft het cosmeticabedrijf Estée Lauder opgericht?"
        },
        options: [
          { en: "Estée Lauder", es: "Estée Lauder", de: "Estée Lauder", nl: "Estée Lauder" },
          { en: "Helena Rubinstein", es: "Helena Rubinstein", de: "Helena Rubinstein", nl: "Helena Rubinstein" },
          { en: "Elizabeth Arden", es: "Elizabeth Arden", de: "Elizabeth Arden", nl: "Elizabeth Arden" },
          { en: "Mary Kay Ash", es: "Mary Kay Ash", de: "Mary Kay Ash", nl: "Mary Kay Ash" }
        ],
        correct: 0,
        explanation: {
          en: "Estée Lauder founded her cosmetics company in 1946 with her husband Joseph, building it into one of the world's leading beauty companies with brands like MAC and Clinique.",
          es: "Estée Lauder fundó su empresa de cosméticos en 1946 con su esposo Joseph, construyéndola hasta convertirla en una de las principales empresas de belleza del mundo con marcas como MAC y Clinique.",
          de: "Estée Lauder gründete ihr Kosmetikunternehmen 1946 mit ihrem Ehemann Joseph und baute es zu einem der weltweit führenden Schönheitsunternehmen mit Marken wie MAC und Clinique auf.",
          nl: "Estée Lauder richtte haar cosmeticabedrijf op in 1946 met haar echtgenoot Joseph, zij bouwde het uit tot een van 's werelds toonaangevende schoonheidsbedrijven met merken zoals MAC en Clinique."
        }
      },
      {
        question: {
          en: "Which entertainment company was founded by Michael Eisner and Jeffrey Katzenberg?",
          es: "¿Qué empresa de entretenimiento fue fundada por Michael Eisner y Jeffrey Katzenberg?",
          de: "Welches Unterhaltungsunternehmen wurde von Michael Eisner und Jeffrey Katzenberg gegründet?",
          nl: "Welk entertainmentbedrijf werd opgericht door Michael Eisner en Jeffrey Katzenberg?"
        },
        options: [
          { en: "DreamWorks", es: "DreamWorks", de: "DreamWorks", nl: "DreamWorks" },
          { en: "Pixar", es: "Pixar", de: "Pixar", nl: "Pixar" },
          { en: "Paramount", es: "Paramount", de: "Paramount", nl: "Paramount" },
          { en: "Sony Pictures", es: "Sony Pictures", de: "Sony Pictures", nl: "Sony Pictures" }
        ],
        correct: 0,
        explanation: {
          en: "Jeffrey Katzenberg co-founded DreamWorks SKG in 1994 with Steven Spielberg and David Geffen, after leaving Disney. Michael Eisner was actually CEO of Disney, not a DreamWorks founder.",
          es: "Jeffrey Katzenberg cofundó DreamWorks SKG en 1994 con Steven Spielberg y David Geffen, después de dejar Disney. Michael Eisner fue en realidad CEO de Disney, no fundador de DreamWorks.",
          de: "Jeffrey Katzenberg gründete DreamWorks SKG 1994 zusammen mit Steven Spielberg und David Geffen, nachdem er Disney verlassen hatte. Michael Eisner war tatsächlich CEO von Disney, nicht DreamWorks-Gründer.",
          nl: "Jeffrey Katzenberg richtte DreamWorks SKG op in 1994 met Steven Spielberg en David Geffen, nadat hij Disney verliet. Michael Eisner was eigenlijk CEO van Disney, niet een DreamWorks oprichter."
        }
      },
      {
        question: {
          en: "Who founded the retail giant Target Corporation?",
          es: "¿Quién fundó el gigante minorista Target Corporation?",
          de: "Wer gründete den Einzelhandelsriesen Target Corporation?",
          nl: "Wie heeft de retailreus Target Corporation opgericht?"
        },
        options: [
          { en: "George Dayton", es: "George Dayton", de: "George Dayton", nl: "George Dayton" },
          { en: "J.L. Hudson", es: "J.L. Hudson", de: "J.L. Hudson", nl: "J.L. Hudson" },
          { en: "Marshall Field", es: "Marshall Field", de: "Marshall Field", nl: "Marshall Field" },
          { en: "John Nordstrom", es: "John Nordstrom", de: "John Nordstrom", nl: "John Nordstrom" }
        ],
        correct: 0,
        explanation: {
          en: "George Dayton founded the Dayton Dry Goods Company in 1902, which later became Target Corporation. The first Target store opened in 1962 as a discount division.",
          es: "George Dayton fundó Dayton Dry Goods Company en 1902, que luego se convirtió en Target Corporation. La primera tienda Target abrió en 1962 como una división de descuento.",
          de: "George Dayton gründete die Dayton Dry Goods Company 1902, die später zur Target Corporation wurde. Der erste Target-Laden öffnete 1962 als Discount-Sparte.",
          nl: "George Dayton richtte Dayton Dry Goods Company op in 1902, dat later Target Corporation werd. De eerste Target winkel opende in 1962 als een discount divisie."
        }
      },
      {
        question: {
          en: "Which media mogul founded Bloomberg L.P.?",
          es: "¿Qué magnate de los medios fundó Bloomberg L.P.?",
          de: "Welcher Medienmogul gründete Bloomberg L.P.?",
          nl: "Welke mediamagnaat heeft Bloomberg L.P. opgericht?"
        },
        options: [
          { en: "Michael Bloomberg", es: "Michael Bloomberg", de: "Michael Bloomberg", nl: "Michael Bloomberg" },
          { en: "Steve Forbes", es: "Steve Forbes", de: "Steve Forbes", nl: "Steve Forbes" },
          { en: "Mort Zuckerman", es: "Mort Zuckerman", de: "Mort Zuckerman", nl: "Mort Zuckerman" },
          { en: "Si Newhouse", es: "Si Newhouse", de: "Si Newhouse", nl: "Si Newhouse" }
        ],
        correct: 0,
        explanation: {
          en: "Michael Bloomberg founded Bloomberg L.P. in 1981, creating a financial information and media empire built around the Bloomberg Terminal used by financial professionals worldwide.",
          es: "Michael Bloomberg fundó Bloomberg L.P. en 1981, creando un imperio de información financiera y medios construido alrededor del Bloomberg Terminal usado por profesionales financieros en todo el mundo.",
          de: "Michael Bloomberg gründete Bloomberg L.P. 1981 und schuf ein Finanzinformations- und Medienimperium rund um das Bloomberg Terminal, das von Finanzprofis weltweit genutzt wird.",
          nl: "Michael Bloomberg richtte Bloomberg L.P. op in 1981, hij creëerde een financiële informatie en media-imperium gebouwd rond de Bloomberg Terminal die door financiële professionals wereldwijd wordt gebruikt."
        }
      },
      {
        question: {
          en: "Who founded the luxury department store Nordstrom?",
          es: "¿Quién fundó la tienda departamental de lujo Nordstrom?",
          de: "Wer gründete das Luxuskaufhaus Nordstrom?",
          nl: "Wie heeft het luxe warenhuis Nordstrom opgericht?"
        },
        options: [
          { en: "John W. Nordstrom", es: "John W. Nordstrom", de: "John W. Nordstrom", nl: "John W. Nordstrom" },
          { en: "Frederick Nordstrom", es: "Frederick Nordstrom", de: "Frederick Nordstrom", nl: "Frederick Nordstrom" },
          { en: "Carl Wallin", es: "Carl Wallin", de: "Carl Wallin", nl: "Carl Wallin" },
          { en: "Both A and C", es: "Tanto A como C", de: "Sowohl A als auch C", nl: "Zowel A als C" }
        ],
        correct: 3,
        explanation: {
          en: "John W. Nordstrom and Carl Wallin founded Nordstrom in 1901 as a shoe store in Seattle. It started as Wallin & Nordstrom and grew into the luxury retailer known for exceptional customer service.",
          es: "John W. Nordstrom y Carl Wallin fundaron Nordstrom en 1901 como una zapatería en Seattle. Comenzó como Wallin & Nordstrom y creció hasta convertirse en el minorista de lujo conocido por su servicio excepcional al cliente.",
          de: "John W. Nordstrom und Carl Wallin gründeten Nordstrom 1901 als Schuhgeschäft in Seattle. Es begann als Wallin & Nordstrom und wuchs zum Luxushändler, der für außergewöhnlichen Kundenservice bekannt ist.",
          nl: "John W. Nordstrom en Carl Wallin richtten Nordstrom op in 1901 als een schoenwinkel in Seattle. Het begon als Wallin & Nordstrom en groeide uit tot de luxe retailer bekend om uitzonderlijke klantenservice."
        }
      },
      {
        question: {
          en: "Which media company was founded by Leo Burnett?",
          es: "¿Qué empresa de medios fue fundada por Leo Burnett?",
          de: "Welches Medienunternehmen wurde von Leo Burnett gegründet?",
          nl: "Welk mediabedrijf werd opgericht door Leo Burnett?"
        },
        options: [
          { en: "Leo Burnett Company", es: "Leo Burnett Company", de: "Leo Burnett Company", nl: "Leo Burnett Company" },
          { en: "Ogilvy & Mather", es: "Ogilvy & Mather", de: "Ogilvy & Mather", nl: "Ogilvy & Mather" },
          { en: "Saatchi & Saatchi", es: "Saatchi & Saatchi", de: "Saatchi & Saatchi", nl: "Saatchi & Saatchi" },
          { en: "BBDO", es: "BBDO", de: "BBDO", nl: "BBDO" }
        ],
        correct: 0,
        explanation: {
          en: "Leo Burnett founded Leo Burnett Company in 1935, creating iconic advertising campaigns and characters like the Marlboro Man, Tony the Tiger, and the Pillsbury Doughboy.",
          es: "Leo Burnett fundó Leo Burnett Company en 1935, creando campañas publicitarias icónicas y personajes como el Hombre Marlboro, Tony el Tigre y el Muñeco de Masa Pillsbury.",
          de: "Leo Burnett gründete Leo Burnett Company 1935 und schuf ikonische Werbekampagnen und Figuren wie den Marlboro Man, Tony the Tiger und den Pillsbury Doughboy.",
          nl: "Leo Burnett richtte Leo Burnett Company op in 1935, hij creëerde iconische reclamecampagnes en personages zoals de Marlboro Man, Tony the Tiger en de Pillsbury Doughboy."
        }
      },
      {
        question: {
          en: "Who founded the discount retail chain Costco?",
          es: "¿Quién fundó la cadena minorista de descuento Costco?",
          de: "Wer gründete die Discount-Einzelhandelskette Costco?",
          nl: "Wie heeft de discount retailketen Costco opgericht?"
        },
        options: [
          { en: "Jim Sinegal and Jeffrey Brotman", es: "Jim Sinegal y Jeffrey Brotman", de: "Jim Sinegal und Jeffrey Brotman", nl: "Jim Sinegal en Jeffrey Brotman" },
          { en: "Sam Walton", es: "Sam Walton", de: "Sam Walton", nl: "Sam Walton" },
          { en: "Sol Price", es: "Sol Price", de: "Sol Price", nl: "Sol Price" },
          { en: "Bernie Marcus", es: "Bernie Marcus", de: "Bernie Marcus", nl: "Bernie Marcus" }
        ],
        correct: 0,
        explanation: {
          en: "Jim Sinegal and Jeffrey Brotman founded Costco in 1983, building on the warehouse club concept pioneered by Sol Price to create one of the largest membership-only warehouse clubs.",
          es: "Jim Sinegal y Jeffrey Brotman fundaron Costco en 1983, basándose en el concepto de club de almacén pionero de Sol Price para crear uno de los clubes de almacén solo para miembros más grandes.",
          de: "Jim Sinegal und Jeffrey Brotman gründeten Costco 1983 und bauten auf dem von Sol Price entwickelten Warehouse-Club-Konzept auf, um einen der größten Mitglieder-nur Warehouse-Clubs zu schaffen.",
          nl: "Jim Sinegal en Jeffrey Brotman richtten Costco op in 1983, voortbouwend op het warehouse club concept van pionier Sol Price om een van de grootste alleen-leden warehouse clubs te creëren."
        }
      },
      {
        question: {
          en: "Which publishing company was founded by Henry Luce?",
          es: "¿Qué empresa editorial fue fundada por Henry Luce?",
          de: "Welches Verlagsunternehmen wurde von Henry Luce gegründet?",
          nl: "Welk uitgeverijbedrijf werd opgericht door Henry Luce?"
        },
        options: [
          { en: "Time Inc.", es: "Time Inc.", de: "Time Inc.", nl: "Time Inc." },
          { en: "Hearst Corporation", es: "Hearst Corporation", de: "Hearst Corporation", nl: "Hearst Corporation" },
          { en: "Condé Nast", es: "Condé Nast", de: "Condé Nast", nl: "Condé Nast" },
          { en: "Forbes Media", es: "Forbes Media", de: "Forbes Media", nl: "Forbes Media" }
        ],
        correct: 0,
        explanation: {
          en: "Henry Luce co-founded Time Inc. in 1922, creating influential magazines like Time, Life, Fortune, and Sports Illustrated that shaped American journalism and culture.",
          es: "Henry Luce cofundó Time Inc. en 1922, creando revistas influyentes como Time, Life, Fortune y Sports Illustrated que dieron forma al periodismo y la cultura estadounidenses.",
          de: "Henry Luce gründete Time Inc. 1922 mit und schuf einflussreiche Magazine wie Time, Life, Fortune und Sports Illustrated, die den amerikanischen Journalismus und die Kultur prägten.",
          nl: "Henry Luce richtte Time Inc. mede op in 1922, hij creëerde invloedrijke tijdschriften zoals Time, Life, Fortune en Sports Illustrated die de Amerikaanse journalistiek en cultuur vormden."
        }
      },
      {
        question: {
          en: "Who founded the department store chain Macy's?",
          es: "¿Quién fundó la cadena de grandes almacenes Macy's?",
          de: "Wer gründete die Kaufhauskette Macy's?",
          nl: "Wie heeft de warenhuis keten Macy's opgericht?"
        },
        options: [
          { en: "Rowland Hussey Macy", es: "Rowland Hussey Macy", de: "Rowland Hussey Macy", nl: "Rowland Hussey Macy" },
          { en: "Nathan Straus", es: "Nathan Straus", de: "Nathan Straus", nl: "Nathan Straus" },
          { en: "Isidor Straus", es: "Isidor Straus", de: "Isidor Straus", nl: "Isidor Straus" },
          { en: "Joseph Bloomingdale", es: "Joseph Bloomingdale", de: "Joseph Bloomingdale", nl: "Joseph Bloomingdale" }
        ],
        correct: 0,
        explanation: {
          en: "Rowland Hussey Macy founded Macy's in 1858 in New York City. The store became famous for innovations like price tags, advertising, and the annual Thanksgiving Day Parade.",
          es: "Rowland Hussey Macy fundó Macy's en 1858 en la ciudad de Nueva York. La tienda se hizo famosa por innovaciones como etiquetas de precios, publicidad y el desfile anual del Día de Acción de Gracias.",
          de: "Rowland Hussey Macy gründete Macy's 1858 in New York City. Das Geschäft wurde berühmt für Innovationen wie Preisschilder, Werbung und die jährliche Thanksgiving-Parade.",
          nl: "Rowland Hussey Macy richtte Macy's op in 1858 in New York City. De winkel werd beroemd om innovaties zoals prijskaartjes, reclame en de jaarlijkse Thanksgiving Day Parade."
        }
      },
      {
        question: {
          en: "Which cable television network was founded by John Hendricks?",
          es: "¿Qué red de televisión por cable fue fundada por John Hendricks?",
          de: "Welches Kabelfernsehprogramm wurde von John Hendricks gegründet?",
          nl: "Welk kabeltelevisie netwerk werd opgericht door John Hendricks?"
        },
        options: [
          { en: "Discovery Channel", es: "Discovery Channel", de: "Discovery Channel", nl: "Discovery Channel" },
          { en: "National Geographic", es: "National Geographic", de: "National Geographic", nl: "National Geographic" },
          { en: "History Channel", es: "History Channel", de: "History Channel", nl: "History Channel" },
          { en: "Animal Planet", es: "Animal Planet", de: "Animal Planet", nl: "Animal Planet" }
        ],
        correct: 0,
        explanation: {
          en: "John Hendricks founded Discovery Channel in 1985, creating a cable network dedicated to educational and documentary programming that spawned an entire media empire.",
          es: "John Hendricks fundó Discovery Channel en 1985, creando una red de cable dedicada a programación educativa y documental que generó todo un imperio mediático.",
          de: "John Hendricks gründete Discovery Channel 1985 und schuf ein Kabelnetzwerk für Bildungs- und Dokumentarprogramme, das ein ganzes Medienimperium hervorbrachte.",
          nl: "John Hendricks richtte Discovery Channel op in 1985, hij creëerde een kabelnetwerk gewijd aan educatieve en documentaire programmering dat een heel media-imperium voortbracht."
        }
      },
      {
        question: {
          en: "Who founded the luxury retailer Bergdorf Goodman?",
          es: "¿Quién fundó el minorista de lujo Bergdorf Goodman?",
          de: "Wer gründete den Luxushändler Bergdorf Goodman?",
          nl: "Wie heeft de luxe retailer Bergdorf Goodman opgericht?"
        },
        options: [
          { en: "Herman Bergdorf", es: "Herman Bergdorf", de: "Herman Bergdorf", nl: "Herman Bergdorf" },
          { en: "Edwin Goodman", es: "Edwin Goodman", de: "Edwin Goodman", nl: "Edwin Goodman" },
          { en: "Both Herman Bergdorf and Edwin Goodman", es: "Tanto Herman Bergdorf como Edwin Goodman", de: "Sowohl Herman Bergdorf als auch Edwin Goodman", nl: "Zowel Herman Bergdorf als Edwin Goodman" },
          { en: "Andrew Goodman", es: "Andrew Goodman", de: "Andrew Goodman", nl: "Andrew Goodman" }
        ],
        correct: 2,
        explanation: {
          en: "Herman Bergdorf founded a tailor shop in 1899, which Edwin Goodman later purchased and transformed into the luxury department store Bergdorf Goodman on Fifth Avenue in New York.",
          es: "Herman Bergdorf fundó una sastrería en 1899, que Edwin Goodman luego compró y transformó en el lujoso gran almacén Bergdorf Goodman en la Quinta Avenida de Nueva York.",
          de: "Herman Bergdorf gründete 1899 eine Schneiderei, die Edwin Goodman später kaufte und in das Luxuskaufhaus Bergdorf Goodman an der Fifth Avenue in New York verwandelte.",
          nl: "Herman Bergdorf richtte een kleermakerij op in 1899, die Edwin Goodman later kocht en transformeerde tot het luxe warenhuis Bergdorf Goodman aan Fifth Avenue in New York."
        }
      },
      {
        question: {
          en: "Which automotive magazine was founded by Robert E. Petersen?",
          es: "¿Qué revista automotriz fue fundada por Robert E. Petersen?",
          de: "Welches Automagazin wurde von Robert E. Petersen gegründet?",
          nl: "Welk automobiel tijdschrift werd opgericht door Robert E. Petersen?"
        },
        options: [
          { en: "Hot Rod Magazine", es: "Hot Rod Magazine", de: "Hot Rod Magazine", nl: "Hot Rod Magazine" },
          { en: "Car and Driver", es: "Car and Driver", de: "Car and Driver", nl: "Car and Driver" },
          { en: "Motor Trend", es: "Motor Trend", de: "Motor Trend", nl: "Motor Trend" },
          { en: "Road & Track", es: "Road & Track", de: "Road & Track", nl: "Road & Track" }
        ],
        correct: 0,
        explanation: {
          en: "Robert E. Petersen founded Hot Rod Magazine in 1948, creating the first publication dedicated to hot rod culture and automotive customization, launching Petersen Publishing Company.",
          es: "Robert E. Petersen fundó Hot Rod Magazine en 1948, creando la primera publicación dedicada a la cultura hot rod y personalización automotriz, lanzando Petersen Publishing Company.",
          de: "Robert E. Petersen gründete Hot Rod Magazine 1948 und schuf die erste Publikation für Hot-Rod-Kultur und Fahrzeugtuning, womit er Petersen Publishing Company startete.",
          nl: "Robert E. Petersen richtte Hot Rod Magazine op in 1948, hij creëerde de eerste publicatie gewijd aan hot rod cultuur en auto customization, waarmee hij Petersen Publishing Company lanceerde."
        }
      },
      {
        question: {
          en: "Who founded the electronics retail chain Best Buy?",
          es: "¿Quién fundó la cadena minorista de electrónicos Best Buy?",
          de: "Wer gründete die Elektronik-Einzelhandelskette Best Buy?",
          nl: "Wie heeft de elektronica retailketen Best Buy opgericht?"
        },
        options: [
          { en: "Richard M. Schulze", es: "Richard M. Schulze", de: "Richard M. Schulze", nl: "Richard M. Schulze" },
          { en: "Leonard Roberts", es: "Leonard Roberts", de: "Leonard Roberts", nl: "Leonard Roberts" },
          { en: "Brad Anderson", es: "Brad Anderson", de: "Brad Anderson", nl: "Brad Anderson" },
          { en: "Hubert Joly", es: "Hubert Joly", de: "Hubert Joly", nl: "Hubert Joly" }
        ],
        correct: 0,
        explanation: {
          en: "Richard M. Schulze founded Best Buy in 1966 as Sound of Music, initially selling stereo equipment. It became Best Buy in 1983 and grew into the largest electronics retailer in the US.",
          es: "Richard M. Schulze fundó Best Buy en 1966 como Sound of Music, inicialmente vendiendo equipos de estéreo. Se convirtió en Best Buy en 1983 y creció hasta convertirse en el minorista de electrónicos más grande de EE.UU.",
          de: "Richard M. Schulze gründete Best Buy 1966 als Sound of Music, verkaufte zunächst Stereoausrüstung. Es wurde 1983 zu Best Buy und wuchs zum größten Elektronikhändler der USA.",
          nl: "Richard M. Schulze richtte Best Buy op in 1966 als Sound of Music, aanvankelijk verkopend stereo-apparatuur. Het werd Best Buy in 1983 en groeide uit tot de grootste elektronica retailer in de VS."
        }
      },
      {
        question: {
          en: "Which media company was founded by Oprah Winfrey?",
          es: "¿Qué empresa de medios fue fundada por Oprah Winfrey?",
          de: "Welches Medienunternehmen wurde von Oprah Winfrey gegründet?",
          nl: "Welk mediabedrijf werd opgericht door Oprah Winfrey?"
        },
        options: [
          { en: "Harpo Productions", es: "Harpo Productions", de: "Harpo Productions", nl: "Harpo Productions" },
          { en: "OWN Network", es: "OWN Network", de: "OWN Network", nl: "OWN Network" },
          { en: "O Magazine", es: "O Magazine", de: "O Magazine", nl: "O Magazine" },
          { en: "All of the above", es: "Todas las anteriores", de: "Alle oben genannten", nl: "Alle bovenstaande" }
        ],
        correct: 3,
        explanation: {
          en: "Oprah Winfrey founded Harpo Productions in 1986, later creating OWN Network and O Magazine, building a comprehensive media empire spanning television, print, and digital media.",
          es: "Oprah Winfrey fundó Harpo Productions en 1986, luego creó OWN Network y O Magazine, construyendo un imperio mediático integral que abarca televisión, impresión y medios digitales.",
          de: "Oprah Winfrey gründete Harpo Productions 1986, schuf später OWN Network und O Magazine und baute ein umfassendes Medienimperium auf, das Fernsehen, Print und digitale Medien umfasst.",
          nl: "Oprah Winfrey richtte Harpo Productions op in 1986, later creëerde zij OWN Network en O Magazine, zij bouwde een uitgebreid media-imperium op dat televisie, print en digitale media omvat."
        }
      },
      {
        question: {
          en: "Who founded FedEx Corporation, revolutionizing overnight delivery?",
          es: "¿Quién fundó FedEx Corporation, revolucionando la entrega nocturna?",
          de: "Wer gründete FedEx Corporation und revolutionierte die Übernacht-Lieferung?",
          nl: "Wie heeft FedEx Corporation opgericht en de overnight-bezorging gerevolutioneerd?"
        },
        options: [
          { en: "Frederick W. Smith", es: "Frederick W. Smith", de: "Frederick W. Smith", nl: "Frederick W. Smith" },
          { en: "Jim Casey", es: "Jim Casey", de: "Jim Casey", nl: "Jim Casey" },
          { en: "Malcolm McLean", es: "Malcolm McLean", de: "Malcolm McLean", nl: "Malcolm McLean" },
          { en: "Ray Kroc", es: "Ray Kroc", de: "Ray Kroc", nl: "Ray Kroc" }
        ],
        correct: 0,
        explanation: {
          en: "Frederick W. Smith founded FedEx in 1971, pioneering overnight delivery with a hub-and-spoke distribution system. His Yale term paper outlining the concept famously received a C grade.",
          es: "Frederick W. Smith fundó FedEx en 1971, siendo pionero en la entrega nocturna con un sistema de distribución hub-and-spoke. Su trabajo de término de Yale que describía el concepto recibió famosamente una calificación de C.",
          de: "Frederick W. Smith gründete FedEx 1971 und war Pionier der Übernacht-Lieferung mit einem Hub-and-Spoke-Verteilungssystem. Seine Yale-Seminararbeit über das Konzept erhielt berühmterweise die Note C.",
          nl: "Frederick W. Smith heeft FedEx opgericht in 1971, pionier in overnight-bezorging met een hub-and-spoke distributiesysteem. Zijn Yale-eindwerkstuk met het concept kreeg beroemd genoeg een C cijfer."
        }
      },
      {
        question: {
          en: "Which entrepreneur founded Whole Foods Market, pioneering organic grocery retail?",
          es: "¿Qué empresario fundó Whole Foods Market, pionero en el comercio minorista de comestibles orgánicos?",
          de: "Welcher Unternehmer gründete Whole Foods Market und war Pionier des Bio-Lebensmittelhandels?",
          nl: "Welke ondernemer heeft Whole Foods Market opgericht, pionier in biologische levensmiddelenretail?"
        },
        options: [
          { en: "John Mackey", es: "John Mackey", de: "John Mackey", nl: "John Mackey" },
          { en: "Jeff Bezos", es: "Jeff Bezos", de: "Jeff Bezos", nl: "Jeff Bezos" },
          { en: "Howard Schultz", es: "Howard Schultz", de: "Howard Schultz", nl: "Howard Schultz" },
          { en: "Ray Kroc", es: "Ray Kroc", de: "Ray Kroc", nl: "Ray Kroc" }
        ],
        correct: 0,
        explanation: {
          en: "John Mackey co-founded Whole Foods Market in 1980, pioneering natural and organic foods retailing. Amazon acquired the company for $13.7 billion in 2017.",
          es: "John Mackey cofundó Whole Foods Market en 1980, siendo pionero en el comercio minorista de alimentos naturales y orgánicos. Amazon adquirió la compañía por $13.7 mil millones en 2017.",
          de: "John Mackey gründete Whole Foods Market 1980 mit und war Pionier des Handels mit natürlichen und biologischen Lebensmitteln. Amazon kaufte das Unternehmen 2017 für 13,7 Milliarden Dollar.",
          nl: "John Mackey heeft Whole Foods Market mede opgericht in 1980, pionier in de retail van natuurlijke en biologische voeding. Amazon kocht het bedrijf in 2017 voor $13,7 miljard."
        }
      },
      {
        question: {
          en: "Who founded Southwest Airlines, pioneering the low-cost airline model?",
          es: "¿Quién fundó Southwest Airlines, pionero del modelo de aerolínea de bajo costo?",
          de: "Wer gründete Southwest Airlines und war Pionier des Billigflugmodells?",
          nl: "Wie heeft Southwest Airlines opgericht, pionier van het low-cost luchtvaartmodel?"
        },
        options: [
          { en: "Herb Kelleher", es: "Herb Kelleher", de: "Herb Kelleher", nl: "Herb Kelleher" },
          { en: "Richard Branson", es: "Richard Branson", de: "Richard Branson", nl: "Richard Branson" },
          { en: "David Neeleman", es: "David Neeleman", de: "David Neeleman", nl: "David Neeleman" },
          { en: "Juan Trippe", es: "Juan Trippe", de: "Juan Trippe", nl: "Juan Trippe" }
        ],
        correct: 0,
        explanation: {
          en: "Herb Kelleher co-founded Southwest Airlines in 1967, pioneering the low-cost carrier model with point-to-point routes, no frills service, and high aircraft utilization that transformed the airline industry.",
          es: "Herb Kelleher cofundó Southwest Airlines en 1967, siendo pionero en el modelo de aerolínea de bajo costo con rutas punto a punto, servicio sin lujos y alta utilización de aeronaves que transformó la industria aérea.",
          de: "Herb Kelleher gründete 1967 Southwest Airlines mit und war Pionier des Billigflieger-Modells mit Punkt-zu-Punkt-Routen, No-Frills-Service und hoher Flugzeugauslastung, das die Luftfahrtbranche transformierte.",
          nl: "Herb Kelleher heeft Southwest Airlines mede opgericht in 1967, pionier van het low-cost carriermodel met punt-naar-punt routes, geen-frills service en hoog vliegtuiggebruik dat de luchtvaartindustrie transformeerde."
        }
      },
      {
        question: {
          en: "Which entrepreneur founded Gap Inc., the casual clothing retail chain?",
          es: "¿Qué empresario fundó Gap Inc., la cadena minorista de ropa casual?",
          de: "Welcher Unternehmer gründete Gap Inc., die Freizeitbekleidungs-Einzelhandelskette?",
          nl: "Welke ondernemer heeft Gap Inc. opgericht, de casual kledingretailketen?"
        },
        options: [
          { en: "Donald Fisher", es: "Donald Fisher", de: "Donald Fisher", nl: "Donald Fisher" },
          { en: "Mickey Drexler", es: "Mickey Drexler", de: "Mickey Drexler", nl: "Mickey Drexler" },
          { en: "Phil Knight", es: "Phil Knight", de: "Phil Knight", nl: "Phil Knight" },
          { en: "Ralph Lauren", es: "Ralph Lauren", de: "Ralph Lauren", nl: "Ralph Lauren" }
        ],
        correct: 0,
        explanation: {
          en: "Donald Fisher founded Gap Inc. in 1969 with his wife Doris, starting with a single store selling Levi's jeans. Gap grew into a major fashion retailer with brands including Old Navy and Banana Republic.",
          es: "Donald Fisher fundó Gap Inc. en 1969 con su esposa Doris, comenzando con una sola tienda que vendía jeans Levi's. Gap creció hasta convertirse en un importante minorista de moda con marcas como Old Navy y Banana Republic.",
          de: "Donald Fisher gründete 1969 Gap Inc. mit seiner Frau Doris und begann mit einem einzigen Geschäft, das Levi's Jeans verkaufte. Gap wurde zu einem großen Modehändler mit Marken wie Old Navy und Banana Republic.",
          nl: "Donald Fisher heeft Gap Inc. opgericht in 1969 met zijn vrouw Doris, te beginnen met een enkele winkel die Levi's jeans verkocht. Gap groeide uit tot een grote mode-retailer met merken zoals Old Navy en Banana Republic."
        }
      },
      {
        question: {
          en: "Who founded Blackstone Group, one of the world's largest private equity firms?",
          es: "¿Quién fundó Blackstone Group, una de las firmas de capital privado más grandes del mundo?",
          de: "Wer gründete Blackstone Group, eines der weltgrößten Private-Equity-Unternehmen?",
          nl: "Wie heeft Blackstone Group opgericht, een van 's werelds grootste private equity-bedrijven?"
        },
        options: [
          { en: "Stephen Schwarzman", es: "Stephen Schwarzman", de: "Stephen Schwarzman", nl: "Stephen Schwarzman" },
          { en: "Henry Kravis", es: "Henry Kravis", de: "Henry Kravis", nl: "Henry Kravis" },
          { en: "Carl Icahn", es: "Carl Icahn", de: "Carl Icahn", nl: "Carl Icahn" },
          { en: "David Rubenstein", es: "David Rubenstein", de: "David Rubenstein", nl: "David Rubenstein" }
        ],
        correct: 0,
        explanation: {
          en: "Stephen Schwarzman co-founded Blackstone Group in 1985 with Pete Peterson. The firm became the world's largest alternative asset manager, managing over $900 billion in assets.",
          es: "Stephen Schwarzman cofundó Blackstone Group en 1985 con Pete Peterson. La firma se convirtió en el administrador de activos alternativos más grande del mundo, gestionando más de $900 mil millones en activos.",
          de: "Stephen Schwarzman gründete 1985 Blackstone Group zusammen mit Pete Peterson. Die Firma wurde zum weltgrößten alternativen Vermögensverwalter mit über 900 Milliarden Dollar verwalteten Vermögen.",
          nl: "Stephen Schwarzman heeft Blackstone Group mede opgericht in 1985 met Pete Peterson. Het bedrijf werd 's werelds grootste alternatieve vermogensbeheerder, die meer dan $900 miljard aan activa beheert."
        }
      },
      {
        question: {
          en: "Which entrepreneur founded Bridgewater Associates, the world's largest hedge fund?",
          es: "¿Qué empresario fundó Bridgewater Associates, el fondo de cobertura más grande del mundo?",
          de: "Welcher Unternehmer gründete Bridgewater Associates, den weltgrößten Hedgefonds?",
          nl: "Welke ondernemer heeft Bridgewater Associates opgericht, 's werelds grootste hedgefonds?"
        },
        options: [
          { en: "Ray Dalio", es: "Ray Dalio", de: "Ray Dalio", nl: "Ray Dalio" },
          { en: "George Soros", es: "George Soros", de: "George Soros", nl: "George Soros" },
          { en: "Ken Griffin", es: "Ken Griffin", de: "Ken Griffin", nl: "Ken Griffin" },
          { en: "Paul Tudor Jones", es: "Paul Tudor Jones", de: "Paul Tudor Jones", nl: "Paul Tudor Jones" }
        ],
        correct: 0,
        explanation: {
          en: "Ray Dalio founded Bridgewater Associates in 1975, growing it into the world's largest hedge fund with over $140 billion in assets. His principles-based management philosophy has been widely influential.",
          es: "Ray Dalio fundó Bridgewater Associates en 1975, convirtiéndola en el fondo de cobertura más grande del mundo con más de $140 mil millones en activos. Su filosofía de gestión basada en principios ha sido ampliamente influyente.",
          de: "Ray Dalio gründete 1975 Bridgewater Associates und ließ es zum weltgrößten Hedgefonds mit über 140 Milliarden Dollar Vermögen wachsen. Seine prinzipienbasierte Managementphilosophie war weithin einflussreich.",
          nl: "Ray Dalio heeft Bridgewater Associates opgericht in 1975, het uitbouwend tot 's werelds grootste hedgefonds met meer dan $140 miljard aan activa. Zijn op principes gebaseerde managementfilosofie was zeer invloedrijk."
        }
      },
      {
        question: {
          en: "Who founded Virgin Group, the British multinational conglomerate?",
          es: "¿Quién fundó Virgin Group, el conglomerado multinacional británico?",
          de: "Wer gründete Virgin Group, das britische multinationale Konglomerat?",
          nl: "Wie heeft Virgin Group opgericht, het Britse multinationale conglomeraat?"
        },
        options: [
          { en: "Richard Branson", es: "Richard Branson", de: "Richard Branson", nl: "Richard Branson" },
          { en: "James Dyson", es: "James Dyson", de: "James Dyson", nl: "James Dyson" },
          { en: "Philip Green", es: "Philip Green", de: "Philip Green", nl: "Philip Green" },
          { en: "Alan Sugar", es: "Alan Sugar", de: "Alan Sugar", nl: "Alan Sugar" }
        ],
        correct: 0,
        explanation: {
          en: "Richard Branson founded Virgin as a mail-order record business in 1970, expanding into Virgin Records, Virgin Atlantic Airways, Virgin Mobile, and over 400 companies across various industries.",
          es: "Richard Branson fundó Virgin como un negocio de discos por correo en 1970, expandiéndose a Virgin Records, Virgin Atlantic Airways, Virgin Mobile y más de 400 compañías en varias industrias.",
          de: "Richard Branson gründete Virgin 1970 als Versandhandel für Schallplatten und expandierte zu Virgin Records, Virgin Atlantic Airways, Virgin Mobile und über 400 Unternehmen in verschiedenen Branchen.",
          nl: "Richard Branson heeft Virgin opgericht als een postorderplatenbedrijf in 1970, uitbreidend naar Virgin Records, Virgin Atlantic Airways, Virgin Mobile en meer dan 400 bedrijven in verschillende industrieën."
        }
      },
      {
        question: {
          en: "Which entrepreneur founded Dyson, the vacuum cleaner company?",
          es: "¿Qué empresario fundó Dyson, la compañía de aspiradoras?",
          de: "Welcher Unternehmer gründete Dyson, das Staubsauger-Unternehmen?",
          nl: "Welke ondernemer heeft Dyson opgericht, het stofzuigerbedrijf?"
        },
        options: [
          { en: "James Dyson", es: "James Dyson", de: "James Dyson", nl: "James Dyson" },
          { en: "Richard Branson", es: "Richard Branson", de: "Richard Branson", nl: "Richard Branson" },
          { en: "Elon Musk", es: "Elon Musk", de: "Elon Musk", nl: "Elon Musk" },
          { en: "Steve Jobs", es: "Steve Jobs", de: "Steve Jobs", nl: "Steve Jobs" }
        ],
        correct: 0,
        explanation: {
          en: "James Dyson founded Dyson Ltd in 1991 after developing the first bagless vacuum cleaner. After 5,127 prototypes over 15 years, his revolutionary cyclonic technology transformed the industry.",
          es: "James Dyson fundó Dyson Ltd en 1991 después de desarrollar la primera aspiradora sin bolsa. Después de 5,127 prototipos durante 15 años, su revolucionaria tecnología ciclónica transformó la industria.",
          de: "James Dyson gründete 1991 Dyson Ltd, nachdem er den ersten beutellosen Staubsauger entwickelt hatte. Nach 5.127 Prototypen über 15 Jahre transformierte seine revolutionäre Zyklon-Technologie die Branche.",
          nl: "James Dyson heeft Dyson Ltd opgericht in 1991 na het ontwikkelen van de eerste zakloze stofzuiger. Na 5.127 prototypes over 15 jaar transformeerde zijn revolutionaire cyclonische technologie de industrie."
        }
      },
      {
        question: {
          en: "Who founded Zara and Inditex, becoming one of the world's richest fashion retailers?",
          es: "¿Quién fundó Zara e Inditex, convirtiéndose en uno de los minoristas de moda más ricos del mundo?",
          de: "Wer gründete Zara und Inditex und wurde zu einem der reichsten Modehändler der Welt?",
          nl: "Wie heeft Zara en Inditex opgericht en werd een van 's werelds rijkste modehandelaren?"
        },
        options: [
          { en: "Amancio Ortega", es: "Amancio Ortega", de: "Amancio Ortega", nl: "Amancio Ortega" },
          { en: "Bernard Arnault", es: "Bernard Arnault", de: "Bernard Arnault", nl: "Bernard Arnault" },
          { en: "Stefan Persson", es: "Stefan Persson", de: "Stefan Persson", nl: "Stefan Persson" },
          { en: "Phil Knight", es: "Phil Knight", de: "Phil Knight", nl: "Phil Knight" }
        ],
        correct: 0,
        explanation: {
          en: "Amancio Ortega founded Zara in 1975 and Inditex holding company. His fast-fashion model revolutionized retail, making him one of the world's wealthiest people with a fortune exceeding $60 billion.",
          es: "Amancio Ortega fundó Zara en 1975 y la empresa holding Inditex. Su modelo de moda rápida revolucionó el comercio minorista, convirtiéndolo en una de las personas más ricas del mundo con una fortuna que supera los $60 mil millones.",
          de: "Amancio Ortega gründete 1975 Zara und die Holdinggesellschaft Inditex. Sein Fast-Fashion-Modell revolutionierte den Einzelhandel und machte ihn zu einem der reichsten Menschen der Welt mit einem Vermögen von über 60 Milliarden Dollar.",
          nl: "Amancio Ortega heeft Zara opgericht in 1975 en holdingbedrijf Inditex. Zijn fast-fashion model revolutioneerde de retail, waardoor hij een van 's werelds rijkste mensen werd met een fortuin van meer dan $60 miljard."
        }
      },
      {
        question: {
          en: "Which entrepreneur founded IKEA, the Swedish furniture retail giant?",
          es: "¿Qué empresario fundó IKEA, el gigante minorista de muebles sueco?",
          de: "Welcher Unternehmer gründete IKEA, den schwedischen Möbelhandelsriesen?",
          nl: "Welke ondernemer heeft IKEA opgericht, de Zweedse meubelretailreus?"
        },
        options: [
          { en: "Ingvar Kamprad", es: "Ingvar Kamprad", de: "Ingvar Kamprad", nl: "Ingvar Kamprad" },
          { en: "Erling Persson", es: "Erling Persson", de: "Erling Persson", nl: "Erling Persson" },
          { en: "Stefan Persson", es: "Stefan Persson", de: "Stefan Persson", nl: "Stefan Persson" },
          { en: "Ingrid Kamprad", es: "Ingrid Kamprad", de: "Ingrid Kamprad", nl: "Ingrid Kamprad" }
        ],
        correct: 0,
        explanation: {
          en: "Ingvar Kamprad founded IKEA in 1943 at age 17, revolutionizing furniture retail with flat-pack designs and self-assembly. The name IKEA comes from his initials plus his farm and village names.",
          es: "Ingvar Kamprad fundó IKEA en 1943 a los 17 años, revolucionando el comercio minorista de muebles con diseños de paquete plano y autoensamblaje. El nombre IKEA proviene de sus iniciales más los nombres de su granja y pueblo.",
          de: "Ingvar Kamprad gründete IKEA 1943 im Alter von 17 Jahren und revolutionierte den Möbelhandel mit Flatpack-Designs und Selbstmontage. Der Name IKEA stammt von seinen Initialen plus Farm- und Dorfnamen.",
          nl: "Ingvar Kamprad heeft IKEA opgericht in 1943 op 17-jarige leeftijd, hij revolutioneerde de meubelretail met flatpack-ontwerpen en zelfmontage. De naam IKEA komt van zijn initialen plus zijn boerderij- en dorpsnamen."
        }
      },
      {
        question: {
          en: "Who founded H&M (Hennes & Mauritz), the Swedish fashion retailer?",
          es: "¿Quién fundó H&M (Hennes & Mauritz), el minorista de moda sueco?",
          de: "Wer gründete H&M (Hennes & Mauritz), den schwedischen Modehändler?",
          nl: "Wie heeft H&M (Hennes & Mauritz) opgericht, de Zweedse mode-retailer?"
        },
        options: [
          { en: "Erling Persson", es: "Erling Persson", de: "Erling Persson", nl: "Erling Persson" },
          { en: "Ingvar Kamprad", es: "Ingvar Kamprad", de: "Ingvar Kamprad", nl: "Ingvar Kamprad" },
          { en: "Stefan Persson", es: "Stefan Persson", de: "Stefan Persson", nl: "Stefan Persson" },
          { en: "Amancio Ortega", es: "Amancio Ortega", de: "Amancio Ortega", nl: "Amancio Ortega" }
        ],
        correct: 0,
        explanation: {
          en: "Erling Persson founded H&M in 1947 in Sweden, starting as Hennes (Swedish for 'hers') selling women's clothing. After acquiring Mauritz Widforss in 1968, it became H&M and expanded globally.",
          es: "Erling Persson fundó H&M en 1947 en Suecia, comenzando como Hennes (sueco para 'ella') vendiendo ropa de mujer. Después de adquirir Mauritz Widforss en 1968, se convirtió en H&M y se expandió globalmente.",
          de: "Erling Persson gründete H&M 1947 in Schweden, begann als Hennes (schwedisch für 'ihr') mit Damenbekleidung. Nach der Übernahme von Mauritz Widforss 1968 wurde es zu H&M und expandierte weltweit.",
          nl: "Erling Persson heeft H&M opgericht in 1947 in Zweden, te beginnen als Hennes (Zweeds voor 'haar') met dameskleding. Na de overname van Mauritz Widforss in 1968 werd het H&M en breidde wereldwijd uit."
        }
      },
      {
        question: {
          en: "Which entrepreneur founded L'Oréal, the world's largest cosmetics company?",
          es: "¿Qué empresario fundó L'Oréal, la empresa de cosméticos más grande del mundo?",
          de: "Welcher Unternehmer gründete L'Oréal, das weltgrößte Kosmetikunternehmen?",
          nl: "Welke ondernemer heeft L'Oréal opgericht, 's werelds grootste cosmeticabedrijf?"
        },
        options: [
          { en: "Eugène Schueller", es: "Eugène Schueller", de: "Eugène Schueller", nl: "Eugène Schueller" },
          { en: "François Dalle", es: "François Dalle", de: "François Dalle", nl: "François Dalle" },
          { en: "Liliane Bettencourt", es: "Liliane Bettencourt", de: "Liliane Bettencourt", nl: "Liliane Bettencourt" },
          { en: "Jean-Paul Agon", es: "Jean-Paul Agon", de: "Jean-Paul Agon", nl: "Jean-Paul Agon" }
        ],
        correct: 0,
        explanation: {
          en: "Eugène Schueller founded L'Oréal in 1909, initially creating synthetic hair dyes. His daughter Liliane Bettencourt inherited the company and became one of the world's wealthiest women.",
          es: "Eugène Schueller fundó L'Oréal en 1909, creando inicialmente tintes para el cabello sintéticos. Su hija Liliane Bettencourt heredó la compañía y se convirtió en una de las mujeres más ricas del mundo.",
          de: "Eugène Schueller gründete L'Oréal 1909 und entwickelte zunächst synthetische Haarfärbemittel. Seine Tochter Liliane Bettencourt erbte das Unternehmen und wurde zu einer der reichsten Frauen der Welt.",
          nl: "Eugène Schueller heeft L'Oréal opgericht in 1909, aanvankelijk synthetische haarverf creërend. Zijn dochter Liliane Bettencourt erfde het bedrijf en werd een van 's werelds rijkste vrouwen."
        }
      },
      {
        question: {
          en: "Who founded Chanel, the French luxury fashion house?",
          es: "¿Quién fundó Chanel, la casa de moda de lujo francesa?",
          de: "Wer gründete Chanel, das französische Luxusmodehaus?",
          nl: "Wie heeft Chanel opgericht, het Franse luxe modehuis?"
        },
        options: [
          { en: "Coco Chanel", es: "Coco Chanel", de: "Coco Chanel", nl: "Coco Chanel" },
          { en: "Christian Dior", es: "Christian Dior", de: "Christian Dior", nl: "Christian Dior" },
          { en: "Yves Saint Laurent", es: "Yves Saint Laurent", de: "Yves Saint Laurent", nl: "Yves Saint Laurent" },
          { en: "Karl Lagerfeld", es: "Karl Lagerfeld", de: "Karl Lagerfeld", nl: "Karl Lagerfeld" }
        ],
        correct: 0,
        explanation: {
          en: "Coco Chanel founded Chanel in 1910, revolutionizing women's fashion with elegant simplicity, creating iconic products like Chanel No. 5 perfume and the little black dress.",
          es: "Coco Chanel fundó Chanel en 1910, revolucionando la moda femenina con elegancia simple, creando productos icónicos como el perfume Chanel No. 5 y el pequeño vestido negro.",
          de: "Coco Chanel gründete Chanel 1910 und revolutionierte die Damenmode mit eleganter Schlichtheit, schuf ikonische Produkte wie das Parfüm Chanel No. 5 und das kleine Schwarze.",
          nl: "Coco Chanel heeft Chanel opgericht in 1910, zij revolutioneerde damesmode met elegante eenvoud, creërend iconische producten zoals Chanel No. 5 parfum en het kleine zwarte jurkje."
        }
      },
      {
        question: {
          en: "Which entrepreneur founded LVMH, the world's largest luxury goods company?",
          es: "¿Qué empresario fundó LVMH, la empresa de artículos de lujo más grande del mundo?",
          de: "Welcher Unternehmer gründete LVMH, das weltgrößte Luxusgüterunternehmen?",
          nl: "Welke ondernemer heeft LVMH opgericht, 's werelds grootste luxegoederen bedrijf?"
        },
        options: [
          { en: "Bernard Arnault", es: "Bernard Arnault", de: "Bernard Arnault", nl: "Bernard Arnault" },
          { en: "François Pinault", es: "François Pinault", de: "François Pinault", nl: "François Pinault" },
          { en: "Alain Wertheimer", es: "Alain Wertheimer", de: "Alain Wertheimer", nl: "Alain Wertheimer" },
          { en: "Johann Rupert", es: "Johann Rupert", de: "Johann Rupert", nl: "Johann Rupert" }
        ],
        correct: 0,
        explanation: {
          en: "Bernard Arnault acquired and merged companies to create LVMH (Louis Vuitton Moët Hennessy) in 1987, building an empire of luxury brands including Dior, Fendi, and Tiffany & Co., making him one of the world's wealthiest people.",
          es: "Bernard Arnault adquirió y fusionó empresas para crear LVMH (Louis Vuitton Moët Hennessy) en 1987, construyendo un imperio de marcas de lujo que incluye Dior, Fendi y Tiffany & Co., convirtiéndolo en una de las personas más ricas del mundo.",
          de: "Bernard Arnault erwarb und fusionierte Unternehmen zur Gründung von LVMH (Louis Vuitton Moët Hennessy) 1987 und baute ein Imperium von Luxusmarken auf, darunter Dior, Fendi und Tiffany & Co., was ihn zu einem der reichsten Menschen der Welt machte.",
          nl: "Bernard Arnault verwierf en fuseerde bedrijven om LVMH (Louis Vuitton Moët Hennessy) te creëren in 1987, hij bouwde een imperium van luxemerken op inclusief Dior, Fendi en Tiffany & Co., waardoor hij een van 's werelds rijkste mensen werd."
        }
      }
    ]
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level3;
  } else if (typeof window !== 'undefined') {
    window.level3 = level3;
  }
})();
