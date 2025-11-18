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
      }
    ]
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level3;
  } else if (typeof window !== 'undefined') {
    window.level3 = level3;
  }
})();
