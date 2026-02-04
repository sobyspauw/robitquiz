#!/usr/bin/env python3
import re
import json

# Level 7 - Advanced/expert questions about art history, techniques, lesser-known masterpieces
level7_new_questions = [
    {
        "question": {
            "en": "Which Pre-Raphaelite artist painted 'The Lady of Shalott', inspired by Tennyson's poem?",
            "es": "¿Qué artista prerrafaelita pintó 'La Dama de Shalott', inspirado en el poema de Tennyson?",
            "de": "Welcher präraffaelitische Künstler malte 'Die Dame von Shalott', inspiriert von Tennysons Gedicht?",
            "nl": "Welke prerafaëlitische kunstenaar schilderde 'De Vrouwe van Shalott', geïnspireerd door Tennysons gedicht?"
        },
        "options": [
            {"en": "John William Waterhouse", "es": "John William Waterhouse", "de": "John William Waterhouse", "nl": "John William Waterhouse"},
            {"en": "Dante Gabriel Rossetti", "es": "Dante Gabriel Rossetti", "de": "Dante Gabriel Rossetti", "nl": "Dante Gabriel Rossetti"},
            {"en": "Edward Burne-Jones", "es": "Edward Burne-Jones", "de": "Edward Burne-Jones", "nl": "Edward Burne-Jones"},
            {"en": "William Holman Hunt", "es": "William Holman Hunt", "de": "William Holman Hunt", "nl": "William Holman Hunt"}
        ],
        "correct": 0,
        "explanation": {
            "en": "John William Waterhouse painted three versions of 'The Lady of Shalott', with the most famous from 1888. The painting depicts the tragic moment when the lady leaves her loom and floats down to Camelot, capturing the melancholic beauty of Pre-Raphaelite art.",
            "es": "John William Waterhouse pintó tres versiones de 'La Dama de Shalott', siendo la más famosa de 1888. La pintura representa el momento trágico cuando la dama deja su telar y flota hacia Camelot, capturando la belleza melancólica del arte prerrafaelita.",
            "de": "John William Waterhouse malte drei Versionen von 'Die Dame von Shalott', wobei die berühmteste von 1888 stammt. Das Gemälde zeigt den tragischen Moment, als die Dame ihren Webstuhl verlässt und nach Camelot treibt, und fängt die melancholische Schönheit der präraffaelitischen Kunst ein.",
            "nl": "John William Waterhouse schilderde drie versies van 'De Vrouwe van Shalott', waarvan de beroemdste uit 1888 stamt. Het schilderij toont het tragische moment waarop de vrouwe haar weefgetouw verlaat en naar Camelot drijft, waarbij de melancholische schoonheid van de prerafaëlitische kunst wordt gevangen."
        }
    },
    {
        "question": {
            "en": "Who painted 'The Garden of Earthly Delights', a triptych filled with fantastical imagery?",
            "es": "¿Quién pintó 'El Jardín de las Delicias', un tríptico lleno de imágenes fantásticas?",
            "de": "Wer malte 'Der Garten der Lüste', ein Triptychon voller fantastischer Bilder?",
            "nl": "Wie schilderde 'De Tuin der Lusten', een drieluik vol fantastische beeldtaal?"
        },
        "options": [
            {"en": "Hieronymus Bosch", "es": "Hieronymus Bosch", "de": "Hieronymus Bosch", "nl": "Jheronimus Bosch"},
            {"en": "Pieter Bruegel the Elder", "es": "Pieter Bruegel el Viejo", "de": "Pieter Bruegel der Ältere", "nl": "Pieter Bruegel de Oude"},
            {"en": "Albrecht Dürer", "es": "Albrecht Dürer", "de": "Albrecht Dürer", "nl": "Albrecht Dürer"},
            {"en": "Jan van Eyck", "es": "Jan van Eyck", "de": "Jan van Eyck", "nl": "Jan van Eyck"}
        ],
        "correct": 0,
        "explanation": {
            "en": "Hieronymus Bosch created 'The Garden of Earthly Delights' between 1490-1510. This masterpiece triptych depicts paradise, earthly pleasures, and hell with surreal and intricate detail that continues to fascinate viewers centuries later.",
            "es": "Hieronymus Bosch creó 'El Jardín de las Delicias' entre 1490-1510. Esta obra maestra tríptico representa el paraíso, los placeres terrenales y el infierno con detalles surrealistas e intrincados que continúan fascinando a los espectadores siglos después.",
            "de": "Hieronymus Bosch schuf 'Der Garten der Lüste' zwischen 1490-1510. Dieses Meisterwerk-Triptychon zeigt das Paradies, irdische Freuden und die Hölle mit surrealen und komplizierten Details, die Betrachter noch Jahrhunderte später faszinieren.",
            "nl": "Jheronimus Bosch creëerde 'De Tuin der Lusten' tussen 1490-1510. Dit meesterwerk drieluik toont het paradijs, aardse genoegens en de hel met surrealistische en ingewikkelde details die kijkers eeuwen later nog steeds fascineren."
        }
    },
    {
        "question": {
            "en": "Which artist developed the 'drip painting' technique, creating works like 'Number 1, 1950 (Lavender Mist)'?",
            "es": "¿Qué artista desarrolló la técnica de 'pintura por goteo', creando obras como 'Número 1, 1950 (Niebla Lavanda)'?",
            "de": "Welcher Künstler entwickelte die 'Tropfmalerei'-Technik und schuf Werke wie 'Nummer 1, 1950 (Lavendelnebel)'?",
            "nl": "Welke kunstenaar ontwikkelde de 'drip painting' techniek, en creëerde werken zoals 'Nummer 1, 1950 (Lavendelnevel)'?"
        },
        "options": [
            {"en": "Jackson Pollock", "es": "Jackson Pollock", "de": "Jackson Pollock", "nl": "Jackson Pollock"},
            {"en": "Willem de Kooning", "es": "Willem de Kooning", "de": "Willem de Kooning", "nl": "Willem de Kooning"},
            {"en": "Mark Rothko", "es": "Mark Rothko", "de": "Mark Rothko", "nl": "Mark Rothko"},
            {"en": "Franz Kline", "es": "Franz Kline", "de": "Franz Kline", "nl": "Franz Kline"}
        ],
        "correct": 0,
        "explanation": {
            "en": "Jackson Pollock pioneered the drip painting technique in the late 1940s, pouring and dripping paint onto canvas laid on the floor. This revolutionary approach made him a leading figure of Abstract Expressionism and changed the course of modern art.",
            "es": "Jackson Pollock fue pionero en la técnica de pintura por goteo a fines de la década de 1940, vertiendo y goteando pintura sobre lienzo colocado en el suelo. Este enfoque revolucionario lo convirtió en una figura líder del expresionismo abstracto y cambió el curso del arte moderno.",
            "de": "Jackson Pollock war Pionier der Tropfmalerei-Technik Ende der 1940er Jahre, indem er Farbe auf auf dem Boden liegende Leinwand goss und tropfte. Dieser revolutionäre Ansatz machte ihn zu einer führenden Figur des abstrakten Expressionismus und veränderte den Verlauf der modernen Kunst.",
            "nl": "Jackson Pollock was pionier van de drip painting techniek eind jaren 1940, door verf te gieten en te druppelen op canvas dat op de vloer lag. Deze revolutionaire benadering maakte hem tot een leidende figuur van het abstract expressionisme en veranderde de koers van de moderne kunst."
        }
    },
    {
        "question": {
            "en": "Who created 'The Kiss' (1907-1908), featuring gold leaf and elaborate decorative patterns?",
            "es": "¿Quién creó 'El Beso' (1907-1908), con pan de oro y elaborados patrones decorativos?",
            "de": "Wer schuf 'Der Kuss' (1907-1908), mit Blattgold und aufwendigen dekorativen Mustern?",
            "nl": "Wie creëerde 'De Kus' (1907-1908), met bladgoud en uitgebreide decoratieve patronen?"
        },
        "options": [
            {"en": "Gustav Klimt", "es": "Gustav Klimt", "de": "Gustav Klimt", "nl": "Gustav Klimt"},
            {"en": "Egon Schiele", "es": "Egon Schiele", "de": "Egon Schiele", "nl": "Egon Schiele"},
            {"en": "Oskar Kokoschka", "es": "Oskar Kokoschka", "de": "Oskar Kokoschka", "nl": "Oskar Kokoschka"},
            {"en": "Ferdinand Hodler", "es": "Ferdinand Hodler", "de": "Ferdinand Hodler", "nl": "Ferdinand Hodler"}
        ],
        "correct": 0,
        "explanation": {
            "en": "Gustav Klimt painted 'The Kiss' during his 'Golden Period', using gold leaf extensively. This iconic work of the Vienna Secession movement depicts a couple embracing, wrapped in elaborate robes decorated with geometric and organic patterns.",
            "es": "Gustav Klimt pintó 'El Beso' durante su 'Período Dorado', usando pan de oro extensivamente. Esta obra icónica del movimiento de la Secesión de Viena representa a una pareja abrazándose, envuelta en túnicas elaboradas decoradas con patrones geométricos y orgánicos.",
            "de": "Gustav Klimt malte 'Der Kuss' während seiner 'Goldenen Periode', wobei er ausgiebig Blattgold verwendete. Dieses ikonische Werk der Wiener Sezessionsbewegung zeigt ein sich umarmendes Paar, eingehüllt in aufwendige Gewänder mit geometrischen und organischen Mustern.",
            "nl": "Gustav Klimt schilderde 'De Kus' tijdens zijn 'Gouden Periode', waarbij hij uitgebreid bladgoud gebruikte. Dit iconische werk van de Weense Secessiebeweging toont een omhelsend paar, gewikkeld in uitgebreide gewaden versierd met geometrische en organische patronen."
        }
    },
    {
        "question": {
            "en": "Which artist painted 'Arrangement in Grey and Black No. 1', commonly known as 'Whistler's Mother'?",
            "es": "¿Qué artista pintó 'Arreglo en Gris y Negro No. 1', comúnmente conocido como 'La Madre de Whistler'?",
            "de": "Welcher Künstler malte 'Arrangement in Grau und Schwarz Nr. 1', allgemein bekannt als 'Whistlers Mutter'?",
            "nl": "Welke kunstenaar schilderde 'Arrangement in Grijs en Zwart Nr. 1', algemeen bekend als 'Whistlers Moeder'?"
        },
        "options": [
            {"en": "James McNeill Whistler", "es": "James McNeill Whistler", "de": "James McNeill Whistler", "nl": "James McNeill Whistler"},
            {"en": "John Singer Sargent", "es": "John Singer Sargent", "de": "John Singer Sargent", "nl": "John Singer Sargent"},
            {"en": "Winslow Homer", "es": "Winslow Homer", "de": "Winslow Homer", "nl": "Winslow Homer"},
            {"en": "Thomas Eakins", "es": "Thomas Eakins", "de": "Thomas Eakins", "nl": "Thomas Eakins"}
        ],
        "correct": 0,
        "explanation": {
            "en": "James McNeill Whistler painted this portrait of his mother in 1871. The painting exemplifies Whistler's aesthetic philosophy of 'art for art's sake', emphasizing tonal harmony over subject matter. It has become an American cultural icon.",
            "es": "James McNeill Whistler pintó este retrato de su madre en 1871. La pintura ejemplifica la filosofía estética de Whistler de 'el arte por el arte', enfatizando la armonía tonal sobre el tema. Se ha convertido en un ícono cultural estadounidense.",
            "de": "James McNeill Whistler malte dieses Porträt seiner Mutter 1871. Das Gemälde veranschaulicht Whistlers ästhetische Philosophie von 'Kunst um der Kunst willen', wobei tonale Harmonie über dem Sujet steht. Es ist zu einer amerikanischen Kulturikone geworden.",
            "nl": "James McNeill Whistler schilderde dit portret van zijn moeder in 1871. Het schilderij illustreert Whistlers esthetische filosofie van 'kunst omwille van de kunst', waarbij tonale harmonie boven het onderwerp wordt benadrukt. Het is een Amerikaans cultureel icoon geworden."
        }
    },
    {
        "question": {
            "en": "Who painted 'The Raft of the Medusa', depicting survivors of a French naval shipwreck?",
            "es": "¿Quién pintó 'La Balsa de la Medusa', representando sobrevivientes de un naufragio naval francés?",
            "de": "Wer malte 'Das Floß der Medusa', das Überlebende eines französischen Marineschiffbruchs zeigt?",
            "nl": "Wie schilderde 'Het Vlot van de Medusa', dat overlevenden van een Franse marine-scheepsramp toont?"
        },
        "options": [
            {"en": "Théodore Géricault", "es": "Théodore Géricault", "de": "Théodore Géricault", "nl": "Théodore Géricault"},
            {"en": "Eugène Delacroix", "es": "Eugène Delacroix", "de": "Eugène Delacroix", "nl": "Eugène Delacroix"},
            {"en": "Jacques-Louis David", "es": "Jacques-Louis David", "de": "Jacques-Louis David", "nl": "Jacques-Louis David"},
            {"en": "Jean-Auguste-Dominique Ingres", "es": "Jean-Auguste-Dominique Ingres", "de": "Jean-Auguste-Dominique Ingres", "nl": "Jean-Auguste-Dominique Ingres"}
        ],
        "correct": 0,
        "explanation": {
            "en": "Théodore Géricault painted 'The Raft of the Medusa' in 1818-1819, depicting the 1816 shipwreck of the French naval frigate Méduse. This monumental Romantic painting caused a sensation for its dramatic realism and political criticism of the French government.",
            "es": "Théodore Géricault pintó 'La Balsa de la Medusa' en 1818-1819, representando el naufragio de 1816 de la fragata naval francesa Méduse. Esta monumental pintura romántica causó sensación por su realismo dramático y crítica política al gobierno francés.",
            "de": "Théodore Géricault malte 'Das Floß der Medusa' 1818-1819, das den Schiffbruch der französischen Marinefregatte Méduse von 1816 zeigt. Dieses monumentale romantische Gemälde sorgte für Aufsehen durch seinen dramatischen Realismus und die politische Kritik an der französischen Regierung.",
            "nl": "Théodore Géricault schilderde 'Het Vlot van de Medusa' in 1818-1819, dat de scheepsramp van 1816 van het Franse marinefregat Méduse toont. Dit monumentale romantische schilderij veroorzaakte een sensatie door zijn dramatisch realisme en politieke kritiek op de Franse regering."
        }
    },
    {
        "question": {
            "en": "Which artist is known for painting 'American Gothic', featuring a farmer and his daughter?",
            "es": "¿Qué artista es conocido por pintar 'Gótico Americano', mostrando a un granjero y su hija?",
            "de": "Welcher Künstler ist bekannt für das Gemälde 'American Gothic', das einen Bauern und seine Tochter zeigt?",
            "nl": "Welke kunstenaar staat bekend om het schilderen van 'American Gothic', met een boer en zijn dochter?"
        },
        "options": [
            {"en": "Grant Wood", "es": "Grant Wood", "de": "Grant Wood", "nl": "Grant Wood"},
            {"en": "Edward Hopper", "es": "Edward Hopper", "de": "Edward Hopper", "nl": "Edward Hopper"},
            {"en": "Andrew Wyeth", "es": "Andrew Wyeth", "de": "Andrew Wyeth", "nl": "Andrew Wyeth"},
            {"en": "Norman Rockwell", "es": "Norman Rockwell", "de": "Norman Rockwell", "nl": "Norman Rockwell"}
        ],
        "correct": 0,
        "explanation": {
            "en": "Grant Wood painted 'American Gothic' in 1930. The iconic image shows Wood's sister and dentist posing before a house with a distinctive Gothic Revival window. It has become one of the most parodied paintings in American art.",
            "es": "Grant Wood pintó 'Gótico Americano' en 1930. La imagen icónica muestra a la hermana de Wood y a su dentista posando ante una casa con una distintiva ventana de estilo neogótico. Se ha convertido en una de las pinturas más parodiadas del arte estadounidense.",
            "de": "Grant Wood malte 'American Gothic' 1930. Das ikonische Bild zeigt Woods Schwester und Zahnarzt beim Posieren vor einem Haus mit einem charakteristischen neugotischen Fenster. Es ist zu einem der am meisten parodierten Gemälde der amerikanischen Kunst geworden.",
            "nl": "Grant Wood schilderde 'American Gothic' in 1930. Het iconische beeld toont Woods zus en tandarts poserend voor een huis met een kenmerkend neogotisch raam. Het is een van de meest geparodieerde schilderijen in de Amerikaanse kunst geworden."
        }
    },
    {
        "question": {
            "en": "Who created 'The Blue Boy', one of the most famous portraits in British art history?",
            "es": "¿Quién creó 'El Niño Azul', uno de los retratos más famosos en la historia del arte británico?",
            "de": "Wer schuf 'Der Knabe in Blau', eines der berühmtesten Porträts in der britischen Kunstgeschichte?",
            "nl": "Wie creëerde 'De Jongen in het Blauw', een van de beroemdste portretten in de Britse kunstgeschiedenis?"
        },
        "options": [
            {"en": "Thomas Gainsborough", "es": "Thomas Gainsborough", "de": "Thomas Gainsborough", "nl": "Thomas Gainsborough"},
            {"en": "Joshua Reynolds", "es": "Joshua Reynolds", "de": "Joshua Reynolds", "nl": "Joshua Reynolds"},
            {"en": "Thomas Lawrence", "es": "Thomas Lawrence", "de": "Thomas Lawrence", "nl": "Thomas Lawrence"},
            {"en": "George Romney", "es": "George Romney", "de": "George Romney", "nl": "George Romney"}
        ],
        "correct": 0,
        "explanation": {
            "en": "Thomas Gainsborough painted 'The Blue Boy' around 1770. The portrait shows Jonathan Buttall dressed in a blue Van Dyck-style costume. The painting is famous for its masterful use of blue pigments and elegant portrayal of the young subject.",
            "es": "Thomas Gainsborough pintó 'El Niño Azul' alrededor de 1770. El retrato muestra a Jonathan Buttall vestido con un traje azul al estilo de Van Dyck. La pintura es famosa por su magistral uso de pigmentos azules y elegante representación del joven sujeto.",
            "de": "Thomas Gainsborough malte 'Der Knabe in Blau' um 1770. Das Porträt zeigt Jonathan Buttall in einem blauen Kostüm im Van-Dyck-Stil. Das Gemälde ist berühmt für seine meisterhafte Verwendung blauer Pigmente und elegante Darstellung des jungen Subjekts.",
            "nl": "Thomas Gainsborough schilderde 'De Jongen in het Blauw' rond 1770. Het portret toont Jonathan Buttall gekleed in een blauw Van Dyck-stijl kostuum. Het schilderij is beroemd om zijn meesterlijke gebruik van blauwe pigmenten en elegante weergave van het jonge onderwerp."
        }
    },
    {
        "question": {
            "en": "Which artist painted 'Nighthawks', depicting people in a late-night American diner?",
            "es": "¿Qué artista pintó 'Noctámbulos', representando personas en un restaurante americano de madrugada?",
            "de": "Welcher Künstler malte 'Nighthawks', das Menschen in einem amerikanischen Spätdiner zeigt?",
            "nl": "Welke kunstenaar schilderde 'Nighthawks', waarin mensen in een laat-nacht Amerikaans eethuis worden afgebeeld?"
        },
        "options": [
            {"en": "Edward Hopper", "es": "Edward Hopper", "de": "Edward Hopper", "nl": "Edward Hopper"},
            {"en": "Grant Wood", "es": "Grant Wood", "de": "Grant Wood", "nl": "Grant Wood"},
            {"en": "Charles Sheeler", "es": "Charles Sheeler", "de": "Charles Sheeler", "nl": "Charles Sheeler"},
            {"en": "Georgia O'Keeffe", "es": "Georgia O'Keeffe", "de": "Georgia O'Keeffe", "nl": "Georgia O'Keeffe"}
        ],
        "correct": 0,
        "explanation": {
            "en": "Edward Hopper painted 'Nighthawks' in 1942. This iconic work captures urban isolation and loneliness in a stark, dramatically lit diner scene. It has become one of the most recognizable images of 20th-century American art.",
            "es": "Edward Hopper pintó 'Noctámbulos' en 1942. Esta obra icónica captura el aislamiento urbano y la soledad en una escena de restaurante cruda y dramáticamente iluminada. Se ha convertido en una de las imágenes más reconocibles del arte estadounidense del siglo XX.",
            "de": "Edward Hopper malte 'Nighthawks' 1942. Dieses ikonische Werk fängt urbane Isolation und Einsamkeit in einer kargen, dramatisch beleuchteten Diner-Szene ein. Es ist zu einem der bekanntesten Bilder der amerikanischen Kunst des 20. Jahrhunderts geworden.",
            "nl": "Edward Hopper schilderde 'Nighthawks' in 1942. Dit iconische werk vangt stedelijke isolatie en eenzaamheid in een kale, dramatisch verlichte eethuis-scène. Het is een van de meest herkenbare beelden van 20e-eeuwse Amerikaanse kunst geworden."
        }
    },
    {
        "question": {
            "en": "Who painted 'The Swing', a playful Rococo masterpiece featuring a young woman on a swing?",
            "es": "¿Quién pintó 'El Columpio', una juguetona obra maestra rococó con una joven en un columpio?",
            "de": "Wer malte 'Die Schaukel', ein verspieltes Rokoko-Meisterwerk mit einer jungen Frau auf einer Schaukel?",
            "nl": "Wie schilderde 'De Schommel', een speels rococo meesterwerk met een jonge vrouw op een schommel?"
        },
        "options": [
            {"en": "Jean-Honoré Fragonard", "es": "Jean-Honoré Fragonard", "de": "Jean-Honoré Fragonard", "nl": "Jean-Honoré Fragonard"},
            {"en": "François Boucher", "es": "François Boucher", "de": "François Boucher", "nl": "François Boucher"},
            {"en": "Antoine Watteau", "es": "Antoine Watteau", "de": "Antoine Watteau", "nl": "Antoine Watteau"},
            {"en": "Jean-Baptiste-Siméon Chardin", "es": "Jean-Baptiste-Siméon Chardin", "de": "Jean-Baptiste-Siméon Chardin", "nl": "Jean-Baptiste-Siméon Chardin"}
        ],
        "correct": 0,
        "explanation": {
            "en": "Jean-Honoré Fragonard painted 'The Swing' in 1767. This quintessential Rococo painting depicts a flirtatious scene with a young woman swinging while her lover watches from below. The work is celebrated for its light colors, playful composition, and romantic atmosphere.",
            "es": "Jean-Honoré Fragonard pintó 'El Columpio' en 1767. Esta pintura rococó por excelencia representa una escena coqueta con una joven columpiándose mientras su amante observa desde abajo. La obra es celebrada por sus colores claros, composición juguetona y atmósfera romántica.",
            "de": "Jean-Honoré Fragonard malte 'Die Schaukel' 1767. Dieses quintessenzielle Rokoko-Gemälde zeigt eine kokette Szene mit einer jungen Frau auf einer Schaukel, während ihr Liebhaber von unten zusieht. Das Werk wird für seine hellen Farben, verspielte Komposition und romantische Atmosphäre gefeiert.",
            "nl": "Jean-Honoré Fragonard schilderde 'De Schommel' in 1767. Dit bij uitstek rococo schilderij toont een flirterige scène met een jonge vrouw die schommelt terwijl haar minnaar van onderaf toekijkt. Het werk wordt gevierd om zijn lichte kleuren, speelse compositie en romantische sfeer."
        }
    },
    {
        "question": {
            "en": "Which artist created 'The Birth of Venus', showing the goddess emerging from the sea?",
            "es": "¿Qué artista creó 'El Nacimiento de Venus', mostrando a la diosa emergiendo del mar?",
            "de": "Welcher Künstler schuf 'Die Geburt der Venus', die die Göttin zeigt, wie sie aus dem Meer aufsteigt?",
            "nl": "Welke kunstenaar creëerde 'De Geboorte van Venus', waarin de godin uit de zee oprijst?"
        },
        "options": [
            {"en": "Sandro Botticelli", "es": "Sandro Botticelli", "de": "Sandro Botticelli", "nl": "Sandro Botticelli"},
            {"en": "Leonardo da Vinci", "es": "Leonardo da Vinci", "de": "Leonardo da Vinci", "nl": "Leonardo da Vinci"},
            {"en": "Raphael", "es": "Rafael", "de": "Raffael", "nl": "Rafaël"},
            {"en": "Michelangelo", "es": "Miguel Ángel", "de": "Michelangelo", "nl": "Michelangelo"}
        ],
        "correct": 0,
        "explanation": {
            "en": "Sandro Botticelli painted 'The Birth of Venus' in the mid-1480s for the Medici family. This iconic Renaissance work depicts the goddess Venus arriving at the shore after her birth, when she had emerged fully-grown from the sea. It exemplifies the renewed interest in classical mythology during the Italian Renaissance.",
            "es": "Sandro Botticelli pintó 'El Nacimiento de Venus' a mediados de la década de 1480 para la familia Medici. Esta icónica obra renacentista representa a la diosa Venus llegando a la orilla después de su nacimiento, cuando había emergido completamente desarrollada del mar. Ejemplifica el renovado interés en la mitología clásica durante el Renacimiento italiano.",
            "de": "Sandro Botticelli malte 'Die Geburt der Venus' Mitte der 1480er Jahre für die Familie Medici. Dieses ikonische Renaissance-Werk zeigt die Göttin Venus, wie sie nach ihrer Geburt am Ufer ankommt, nachdem sie vollständig ausgewachsen aus dem Meer aufgetaucht war. Es veranschaulicht das erneuerte Interesse an klassischer Mythologie während der italienischen Renaissance.",
            "nl": "Sandro Botticelli schilderde 'De Geboorte van Venus' medio jaren 1480 voor de familie Medici. Dit iconische renaissance werk toont de godin Venus die aan de kust aankomt na haar geboorte, toen ze volgroeid uit de zee was opgerezen. Het illustreert de hernieuwde interesse in klassieke mythologie tijdens de Italiaanse Renaissance."
        }
    },
    {
        "question": {
            "en": "Who painted 'The Arnolfini Portrait', a detailed double portrait rich in symbolism?",
            "es": "¿Quién pintó 'El Retrato de Arnolfini', un detallado retrato doble rico en simbolismo?",
            "de": "Wer malte 'Das Arnolfini-Porträt', ein detailliertes Doppelporträt voller Symbolik?",
            "nl": "Wie schilderde 'Het Arnolfini-portret', een gedetailleerd dubbelportret rijk aan symboliek?"
        },
        "options": [
            {"en": "Jan van Eyck", "es": "Jan van Eyck", "de": "Jan van Eyck", "nl": "Jan van Eyck"},
            {"en": "Rogier van der Weyden", "es": "Rogier van der Weyden", "de": "Rogier van der Weyden", "nl": "Rogier van der Weyden"},
            {"en": "Hans Memling", "es": "Hans Memling", "de": "Hans Memling", "nl": "Hans Memling"},
            {"en": "Petrus Christus", "es": "Petrus Christus", "de": "Petrus Christus", "nl": "Petrus Christus"}
        ],
        "correct": 0,
        "explanation": {
            "en": "Jan van Eyck painted 'The Arnolfini Portrait' in 1434. This masterpiece of Early Netherlandish painting shows a wealthy merchant and his wife in their home. The painting is famous for its intricate detail, use of symbolism, and the convex mirror that reflects the entire room.",
            "es": "Jan van Eyck pintó 'El Retrato de Arnolfini' en 1434. Esta obra maestra de la pintura neerlandesa temprana muestra a un rico comerciante y su esposa en su hogar. La pintura es famosa por su detalle intrincado, uso de simbolismo y el espejo convexo que refleja toda la habitación.",
            "de": "Jan van Eyck malte 'Das Arnolfini-Porträt' 1434. Dieses Meisterwerk der frühen niederländischen Malerei zeigt einen wohlhabenden Kaufmann und seine Frau in ihrem Haus. Das Gemälde ist berühmt für seine komplizierten Details, den Einsatz von Symbolik und den konvexen Spiegel, der den gesamten Raum reflektiert.",
            "nl": "Jan van Eyck schilderde 'Het Arnolfini-portret' in 1434. Dit meesterwerk van de vroege Nederlandse schilderkunst toont een rijke koopman en zijn vrouw in hun huis. Het schilderij is beroemd om zijn ingewikkelde details, gebruik van symboliek en de bolle spiegel die de hele kamer weerspiegelt."
        }
    },
    {
        "question": {
            "en": "Which artist painted 'Christina's World', showing a woman in a field gazing at a distant house?",
            "es": "¿Qué artista pintó 'El Mundo de Christina', mostrando a una mujer en un campo contemplando una casa distante?",
            "de": "Welcher Künstler malte 'Christinas Welt', das eine Frau auf einem Feld zeigt, die auf ein entferntes Haus blickt?",
            "nl": "Welke kunstenaar schilderde 'Christina's Wereld', waarin een vrouw in een veld naar een ver huis kijkt?"
        },
        "options": [
            {"en": "Andrew Wyeth", "es": "Andrew Wyeth", "de": "Andrew Wyeth", "nl": "Andrew Wyeth"},
            {"en": "Edward Hopper", "es": "Edward Hopper", "de": "Edward Hopper", "nl": "Edward Hopper"},
            {"en": "Grant Wood", "es": "Grant Wood", "de": "Grant Wood", "nl": "Grant Wood"},
            {"en": "Thomas Hart Benton", "es": "Thomas Hart Benton", "de": "Thomas Hart Benton", "nl": "Thomas Hart Benton"}
        ],
        "correct": 0,
        "explanation": {
            "en": "Andrew Wyeth painted 'Christina's World' in 1948. The painting depicts Christina Olson, who was partly paralyzed, crawling across a field toward her house. This iconic work of American realism combines melancholy, determination, and Wyeth's precise tempera technique.",
            "es": "Andrew Wyeth pintó 'El Mundo de Christina' en 1948. La pintura representa a Christina Olson, quien estaba parcialmente paralizada, arrastrándose por un campo hacia su casa. Esta obra icónica del realismo estadounidense combina melancolía, determinación y la precisa técnica al temple de Wyeth.",
            "de": "Andrew Wyeth malte 'Christinas Welt' 1948. Das Gemälde zeigt Christina Olson, die teilweise gelähmt war, wie sie über ein Feld zu ihrem Haus kriecht. Dieses ikonische Werk des amerikanischen Realismus kombiniert Melancholie, Entschlossenheit und Wyeths präzise Temperatechnik.",
            "nl": "Andrew Wyeth schilderde 'Christina's Wereld' in 1948. Het schilderij toont Christina Olson, die gedeeltelijk verlamd was, kruipend over een veld naar haar huis. Dit iconische werk van Amerikaans realisme combineert melancholie, vastberadenheid en Wyeths precieze tempera-techniek."
        }
    },
    {
        "question": {
            "en": "Who created 'The Third of May 1808', depicting the execution of Spanish rebels by French soldiers?",
            "es": "¿Quién creó 'El Tres de Mayo de 1808', representando la ejecución de rebeldes españoles por soldados franceses?",
            "de": "Wer schuf 'Der 3. Mai 1808', das die Hinrichtung spanischer Rebellen durch französische Soldaten zeigt?",
            "nl": "Wie creëerde 'De Derde Mei 1808', waarin de executie van Spaanse rebellen door Franse soldaten wordt afgebeeld?"
        },
        "options": [
            {"en": "Francisco Goya", "es": "Francisco Goya", "de": "Francisco Goya", "nl": "Francisco Goya"},
            {"en": "Diego Velázquez", "es": "Diego Velázquez", "de": "Diego Velázquez", "nl": "Diego Velázquez"},
            {"en": "El Greco", "es": "El Greco", "de": "El Greco", "nl": "El Greco"},
            {"en": "Bartolomé Esteban Murillo", "es": "Bartolomé Esteban Murillo", "de": "Bartolomé Esteban Murillo", "nl": "Bartolomé Esteban Murillo"}
        ],
        "correct": 0,
        "explanation": {
            "en": "Francisco Goya painted 'The Third of May 1808' in 1814 to commemorate Spanish resistance to Napoleon's armies. This powerful anti-war painting shows the brutal execution of Spanish civilians and has influenced countless later depictions of war's horrors.",
            "es": "Francisco Goya pintó 'El Tres de Mayo de 1808' en 1814 para conmemorar la resistencia española a los ejércitos de Napoleón. Esta poderosa pintura contra la guerra muestra la brutal ejecución de civiles españoles y ha influenciado innumerables representaciones posteriores de los horrores de la guerra.",
            "de": "Francisco Goya malte 'Der 3. Mai 1808' 1814, um den spanischen Widerstand gegen Napoleons Armeen zu gedenken. Dieses kraftvolle Anti-Kriegs-Gemälde zeigt die brutale Hinrichtung spanischer Zivilisten und hat zahllose spätere Darstellungen der Kriegsschrecken beeinflusst.",
            "nl": "Francisco Goya schilderde 'De Derde Mei 1808' in 1814 om het Spaanse verzet tegen Napoleons legers te herdenken. Dit krachtige anti-oorlogsschilderij toont de brute executie van Spaanse burgers en heeft talloze latere afbeeldingen van oorlogsgruwelen beïnvloed."
        }
    },
    {
        "question": {
            "en": "Which artist painted 'The Hay Wain', an iconic pastoral landscape scene?",
            "es": "¿Qué artista pintó 'La Carreta de Heno', una icónica escena de paisaje pastoral?",
            "de": "Welcher Künstler malte 'Der Heuwagen', eine ikonische pastorale Landschaftsszene?",
            "nl": "Welke kunstenaar schilderde 'De Hooiwagen', een iconische pastorale landschapsscène?"
        },
        "options": [
            {"en": "John Constable", "es": "John Constable", "de": "John Constable", "nl": "John Constable"},
            {"en": "J.M.W. Turner", "es": "J.M.W. Turner", "de": "J.M.W. Turner", "nl": "J.M.W. Turner"},
            {"en": "Thomas Gainsborough", "es": "Thomas Gainsborough", "de": "Thomas Gainsborough", "nl": "Thomas Gainsborough"},
            {"en": "Richard Wilson", "es": "Richard Wilson", "de": "Richard Wilson", "nl": "Richard Wilson"}
        ],
        "correct": 0,
        "explanation": {
            "en": "John Constable painted 'The Hay Wain' in 1821. This masterpiece of English landscape painting depicts a rural scene on the River Stour in Suffolk. The work exemplifies Constable's dedication to painting nature directly from observation and his innovative techniques in depicting light and atmosphere.",
            "es": "John Constable pintó 'La Carreta de Heno' en 1821. Esta obra maestra de la pintura de paisaje inglesa representa una escena rural en el río Stour en Suffolk. La obra ejemplifica la dedicación de Constable a pintar la naturaleza directamente de la observación y sus técnicas innovadoras para representar luz y atmósfera.",
            "de": "John Constable malte 'Der Heuwagen' 1821. Dieses Meisterwerk der englischen Landschaftsmalerei zeigt eine ländliche Szene am Fluss Stour in Suffolk. Das Werk veranschaulicht Constables Hingabe, die Natur direkt aus Beobachtung zu malen, und seine innovativen Techniken zur Darstellung von Licht und Atmosphäre.",
            "nl": "John Constable schilderde 'De Hooiwagen' in 1821. Dit meesterwerk van Engelse landschapsschilderkunst toont een landelijke scène aan de rivier de Stour in Suffolk. Het werk illustreert Constables toewijding om de natuur rechtstreeks vanuit observatie te schilderen en zijn innovatieve technieken voor het weergeven van licht en atmosfeer."
        }
    },
    {
        "question": {
            "en": "Who painted 'The School of Athens', featuring ancient Greek philosophers gathered together?",
            "es": "¿Quién pintó 'La Escuela de Atenas', con filósofos griegos antiguos reunidos?",
            "de": "Wer malte 'Die Schule von Athen', die antike griechische Philosophen versammelt zeigt?",
            "nl": "Wie schilderde 'De School van Athene', waarin oude Griekse filosofen verzameld zijn?"
        },
        "options": [
            {"en": "Raphael", "es": "Rafael", "de": "Raffael", "nl": "Rafaël"},
            {"en": "Michelangelo", "es": "Miguel Ángel", "de": "Michelangelo", "nl": "Michelangelo"},
            {"en": "Leonardo da Vinci", "es": "Leonardo da Vinci", "de": "Leonardo da Vinci", "nl": "Leonardo da Vinci"},
            {"en": "Titian", "es": "Tiziano", "de": "Tizian", "nl": "Titiaan"}
        ],
        "correct": 0,
        "explanation": {
            "en": "Raphael painted 'The School of Athens' between 1509-1511 as part of his commission to decorate the rooms in the Vatican Palace. This fresco depicts great philosophers like Plato and Aristotle in an idealized classical setting, exemplifying Renaissance humanism and mastery of perspective.",
            "es": "Rafael pintó 'La Escuela de Atenas' entre 1509-1511 como parte de su encargo para decorar las habitaciones del Palacio Vaticano. Este fresco representa grandes filósofos como Platón y Aristóteles en un entorno clásico idealizado, ejemplificando el humanismo renacentista y dominio de la perspectiva.",
            "de": "Raffael malte 'Die Schule von Athen' zwischen 1509-1511 als Teil seines Auftrags, die Räume im Vatikanpalast zu dekorieren. Dieses Fresko zeigt große Philosophen wie Platon und Aristoteles in einer idealisierten klassischen Umgebung und veranschaulicht Renaissance-Humanismus und Perspektiven-Meisterschaft.",
            "nl": "Rafaël schilderde 'De School van Athene' tussen 1509-1511 als onderdeel van zijn opdracht om de kamers in het Vaticaans Paleis te decoreren. Dit fresco toont grote filosofen zoals Plato en Aristoteles in een geïdealiseerde klassieke setting, waarbij renaissance-humanisme en meesterschap van perspectief worden geïllustreerd."
        }
    },
    {
        "question": {
            "en": "Which artist created 'The Persistence of Memory', featuring melting clocks?",
            "es": "¿Qué artista creó 'La Persistencia de la Memoria', con relojes derretidos?",
            "de": "Welcher Künstler schuf 'Die Beständigkeit der Erinnerung', mit schmelzenden Uhren?",
            "nl": "Welke kunstenaar creëerde 'De Volharding der Herinnering', met smeltende klokken?"
        },
        "options": [
            {"en": "Salvador Dalí", "es": "Salvador Dalí", "de": "Salvador Dalí", "nl": "Salvador Dalí"},
            {"en": "René Magritte", "es": "René Magritte", "de": "René Magritte", "nl": "René Magritte"},
            {"en": "Max Ernst", "es": "Max Ernst", "de": "Max Ernst", "nl": "Max Ernst"},
            {"en": "Joan Miró", "es": "Joan Miró", "de": "Joan Miró", "nl": "Joan Miró"}
        ],
        "correct": 0,
        "explanation": {
            "en": "Salvador Dalí painted 'The Persistence of Memory' in 1931. This iconic Surrealist work features his famous melting pocket watches in a dreamlike landscape. Dalí claimed the soft watches were inspired by the surrealist perception of Camembert cheese melting in the sun.",
            "es": "Salvador Dalí pintó 'La Persistencia de la Memoria' en 1931. Esta icónica obra surrealista presenta sus famosos relojes de bolsillo derritiéndose en un paisaje onírico. Dalí afirmó que los relojes blandos fueron inspirados por la percepción surrealista del queso Camembert derritiéndose al sol.",
            "de": "Salvador Dalí malte 'Die Beständigkeit der Erinnerung' 1931. Dieses ikonische surrealistische Werk zeigt seine berühmten schmelzenden Taschenuhren in einer traumhaften Landschaft. Dalí behauptete, die weichen Uhren seien von der surrealistischen Wahrnehmung von in der Sonne schmelzendem Camembert-Käse inspiriert.",
            "nl": "Salvador Dalí schilderde 'De Volharding der Herinnering' in 1931. Dit iconische surrealistische werk toont zijn beroemde smeltende zakhorloges in een droomachtig landschap. Dalí beweerde dat de zachte horloges geïnspireerd waren door de surrealistische perceptie van Camembert-kaas die smelt in de zon."
        }
    },
    {
        "question": {
            "en": "Who painted 'Impression, Sunrise', the work that gave Impressionism its name?",
            "es": "¿Quién pintó 'Impresión, Sol Naciente', la obra que dio su nombre al impresionismo?",
            "de": "Wer malte 'Impression, Sonnenaufgang', das Werk, das dem Impressionismus seinen Namen gab?",
            "nl": "Wie schilderde 'Impressie, Zonsopgang', het werk dat het impressionisme zijn naam gaf?"
        },
        "options": [
            {"en": "Claude Monet", "es": "Claude Monet", "de": "Claude Monet", "nl": "Claude Monet"},
            {"en": "Pierre-Auguste Renoir", "es": "Pierre-Auguste Renoir", "de": "Pierre-Auguste Renoir", "nl": "Pierre-Auguste Renoir"},
            {"en": "Camille Pissarro", "es": "Camille Pissarro", "de": "Camille Pissarro", "nl": "Camille Pissarro"},
            {"en": "Alfred Sisley", "es": "Alfred Sisley", "de": "Alfred Sisley", "nl": "Alfred Sisley"}
        ],
        "correct": 0,
        "explanation": {
            "en": "Claude Monet painted 'Impression, Sunrise' in 1872, depicting the port of Le Havre at dawn. When exhibited in 1874, a critic mockingly used the term 'Impressionism' to describe the loose, sketch-like style, but the artists embraced the name for their revolutionary movement.",
            "es": "Claude Monet pintó 'Impresión, Sol Naciente' en 1872, representando el puerto de Le Havre al amanecer. Cuando se exhibió en 1874, un crítico usó burlonamente el término 'impresionismo' para describir el estilo suelto similar a un boceto, pero los artistas adoptaron el nombre para su movimiento revolucionario.",
            "de": "Claude Monet malte 'Impression, Sonnenaufgang' 1872, das den Hafen von Le Havre im Morgengrauen zeigt. Als es 1874 ausgestellt wurde, benutzte ein Kritiker spöttisch den Begriff 'Impressionismus', um den lockeren, skizzenhaften Stil zu beschreiben, aber die Künstler nahmen den Namen für ihre revolutionäre Bewegung an.",
            "nl": "Claude Monet schilderde 'Impressie, Zonsopgang' in 1872, waarin de haven van Le Havre bij dageraad wordt afgebeeld. Toen het in 1874 werd tentoongesteld, gebruikte een criticus spottend de term 'impressionisme' om de losse, schetsachtige stijl te beschrijven, maar de kunstenaars omarmden de naam voor hun revolutionaire beweging."
        }
    },
    {
        "question": {
            "en": "Which artist painted 'Las Meninas', a complex painting featuring the Spanish royal family?",
            "es": "¿Qué artista pintó 'Las Meninas', una pintura compleja con la familia real española?",
            "de": "Welcher Künstler malte 'Las Meninas', ein komplexes Gemälde mit der spanischen Königsfamilie?",
            "nl": "Welke kunstenaar schilderde 'Las Meninas', een complex schilderij met de Spaanse koninklijke familie?"
        },
        "options": [
            {"en": "Diego Velázquez", "es": "Diego Velázquez", "de": "Diego Velázquez", "nl": "Diego Velázquez"},
            {"en": "Francisco Goya", "es": "Francisco Goya", "de": "Francisco Goya", "nl": "Francisco Goya"},
            {"en": "El Greco", "es": "El Greco", "de": "El Greco", "nl": "El Greco"},
            {"en": "Bartolomé Esteban Murillo", "es": "Bartolomé Esteban Murillo", "de": "Bartolomé Esteban Murillo", "nl": "Bartolomé Esteban Murillo"}
        ],
        "correct": 0,
        "explanation": {
            "en": "Diego Velázquez painted 'Las Meninas' in 1656. This masterpiece shows the artist at work painting the Spanish Infanta Margarita and her attendants, with the king and queen reflected in a mirror. The complex composition and spatial ambiguity have fascinated viewers and artists for centuries.",
            "es": "Diego Velázquez pintó 'Las Meninas' en 1656. Esta obra maestra muestra al artista trabajando pintando a la infanta española Margarita y sus asistentes, con el rey y la reina reflejados en un espejo. La compleja composición y ambigüedad espacial han fascinado a espectadores y artistas durante siglos.",
            "de": "Diego Velázquez malte 'Las Meninas' 1656. Dieses Meisterwerk zeigt den Künstler bei der Arbeit beim Malen der spanischen Infantin Margarita und ihrer Begleiter, mit dem König und der Königin, die in einem Spiegel reflektiert werden. Die komplexe Komposition und räumliche Mehrdeutigkeit haben Betrachter und Künstler seit Jahrhunderten fasziniert.",
            "nl": "Diego Velázquez schilderde 'Las Meninas' in 1656. Dit meesterwerk toont de kunstenaar aan het werk terwijl hij de Spaanse infante Margarita en haar begeleiders schildert, met de koning en koningin weerspiegeld in een spiegel. De complexe compositie en ruimtelijke dubbelzinnigheid hebben kijkers en kunstenaars eeuwenlang gefascineerd."
        }
    },
    {
        "question": {
            "en": "Who created 'Girl with a Pearl Earring', often called the 'Mona Lisa of the North'?",
            "es": "¿Quién creó 'La Joven de la Perla', a menudo llamada la 'Mona Lisa del Norte'?",
            "de": "Wer schuf 'Mädchen mit dem Perlenohrring', oft die 'Mona Lisa des Nordens' genannt?",
            "nl": "Wie creëerde 'Meisje met de Parel', vaak de 'Mona Lisa van het Noorden' genoemd?"
        },
        "options": [
            {"en": "Johannes Vermeer", "es": "Johannes Vermeer", "de": "Johannes Vermeer", "nl": "Johannes Vermeer"},
            {"en": "Jan van Eyck", "es": "Jan van Eyck", "de": "Jan van Eyck", "nl": "Jan van Eyck"},
            {"en": "Rembrandt van Rijn", "es": "Rembrandt van Rijn", "de": "Rembrandt van Rijn", "nl": "Rembrandt van Rijn"},
            {"en": "Frans Hals", "es": "Frans Hals", "de": "Frans Hals", "nl": "Frans Hals"}
        ],
        "correct": 0,
        "explanation": {
            "en": "Johannes Vermeer painted 'Girl with a Pearl Earring' around 1665. This iconic portrait showcases Vermeer's mastery of light and his ability to capture an enigmatic expression. The painting is celebrated for its intimacy, luminosity, and the subject's captivating gaze.",
            "es": "Johannes Vermeer pintó 'La Joven de la Perla' alrededor de 1665. Este retrato icónico muestra la maestría de Vermeer con la luz y su habilidad para capturar una expresión enigmática. La pintura es celebrada por su intimidad, luminosidad y la mirada cautivadora del sujeto.",
            "de": "Johannes Vermeer malte 'Mädchen mit dem Perlenohrring' um 1665. Dieses ikonische Porträt zeigt Vermeers Meisterschaft des Lichts und seine Fähigkeit, einen rätselhaften Ausdruck einzufangen. Das Gemälde wird für seine Intimität, Leuchtkraft und den fesselnden Blick des Motivs gefeiert.",
            "nl": "Johannes Vermeer schilderde 'Meisje met de Parel' rond 1665. Dit iconische portret toont Vermeers meesterschap van licht en zijn vermogen om een raadselachtige uitdrukking te vangen. Het schilderij wordt gevierd om zijn intimiteit, helderheid en de betoverende blik van het onderwerp."
        }
    },
    {
        "question": {
            "en": "Which artist painted 'Guernica', depicting the horrors of the Spanish Civil War?",
            "es": "¿Qué artista pintó 'Guernica', representando los horrores de la Guerra Civil Española?",
            "de": "Welcher Künstler malte 'Guernica', das die Schrecken des Spanischen Bürgerkriegs zeigt?",
            "nl": "Welke kunstenaar schilderde 'Guernica', waarin de verschrikkingen van de Spaanse Burgeroorlog worden afgebeeld?"
        },
        "options": [
            {"en": "Pablo Picasso", "es": "Pablo Picasso", "de": "Pablo Picasso", "nl": "Pablo Picasso"},
            {"en": "Joan Miró", "es": "Joan Miró", "de": "Joan Miró", "nl": "Joan Miró"},
            {"en": "Salvador Dalí", "es": "Salvador Dalí", "de": "Salvador Dalí", "nl": "Salvador Dalí"},
            {"en": "Diego Rivera", "es": "Diego Rivera", "de": "Diego Rivera", "nl": "Diego Rivera"}
        ],
        "correct": 0,
        "explanation": {
            "en": "Pablo Picasso painted 'Guernica' in 1937 in response to the bombing of the Basque town of Guernica during the Spanish Civil War. This monumental anti-war painting in black, white, and gray has become one of the most powerful political statements in modern art.",
            "es": "Pablo Picasso pintó 'Guernica' en 1937 en respuesta al bombardeo de la ciudad vasca de Guernica durante la Guerra Civil Española. Esta monumental pintura contra la guerra en negro, blanco y gris se ha convertido en una de las declaraciones políticas más poderosas del arte moderno.",
            "de": "Pablo Picasso malte 'Guernica' 1937 als Reaktion auf die Bombardierung der baskischen Stadt Guernica während des Spanischen Bürgerkriegs. Dieses monumentale Anti-Kriegs-Gemälde in Schwarz, Weiß und Grau ist zu einer der kraftvollsten politischen Aussagen in der modernen Kunst geworden.",
            "nl": "Pablo Picasso schilderde 'Guernica' in 1937 als reactie op het bombardement op de Baskische stad Guernica tijdens de Spaanse Burgeroorlog. Dit monumentale anti-oorlogsschilderij in zwart, wit en grijs is een van de krachtigste politieke statements in de moderne kunst geworden."
        }
    },
    {
        "question": {
            "en": "Who painted 'The Tower of Babel', depicting the biblical story of humanity's hubris?",
            "es": "¿Quién pintó 'La Torre de Babel', representando la historia bíblica de la arrogancia de la humanidad?",
            "de": "Wer malte 'Der Turmbau zu Babel', das die biblische Geschichte von der Hybris der Menschheit zeigt?",
            "nl": "Wie schilderde 'De Toren van Babel', waarin het bijbelse verhaal van menselijke hoogmoed wordt afgebeeld?"
        },
        "options": [
            {"en": "Pieter Bruegel the Elder", "es": "Pieter Bruegel el Viejo", "de": "Pieter Bruegel der Ältere", "nl": "Pieter Bruegel de Oude"},
            {"en": "Hieronymus Bosch", "es": "Hieronymus Bosch", "de": "Hieronymus Bosch", "nl": "Jheronimus Bosch"},
            {"en": "Jan van Eyck", "es": "Jan van Eyck", "de": "Jan van Eyck", "nl": "Jan van Eyck"},
            {"en": "Albrecht Dürer", "es": "Albrecht Dürer", "de": "Albrecht Dürer", "nl": "Albrecht Dürer"}
        ],
        "correct": 0,
        "explanation": {
            "en": "Pieter Bruegel the Elder painted multiple versions of 'The Tower of Babel' in the 1560s. His most famous version (1563) shows an enormous, impossibly complex structure inspired by the Roman Colosseum, teeming with tiny figures of workers and symbolizing human ambition and folly.",
            "es": "Pieter Bruegel el Viejo pintó múltiples versiones de 'La Torre de Babel' en la década de 1560. Su versión más famosa (1563) muestra una estructura enorme e imposiblemente compleja inspirada en el Coliseo Romano, repleta de pequeñas figuras de trabajadores y simbolizando la ambición y locura humanas.",
            "de": "Pieter Bruegel der Ältere malte in den 1560er Jahren mehrere Versionen von 'Der Turmbau zu Babel'. Seine berühmteste Version (1563) zeigt eine riesige, unmöglich komplexe Struktur, inspiriert vom römischen Kolosseum, wimmelnd von winzigen Arbeiterfiguren und symbolisiert menschlichen Ehrgeiz und Torheit.",
            "nl": "Pieter Bruegel de Oude schilderde meerdere versies van 'De Toren van Babel' in de jaren 1560. Zijn beroemdste versie (1563) toont een enorme, onmogelijk complexe structuur geïnspireerd op het Romeinse Colosseum, wemelt van de kleine arbeidersfiguren en symboliseert menselijke ambitie en dwaasheid."
        }
    },
    {
        "question": {
            "en": "Which artist created 'The Scream', one of the most iconic images of anxiety and existential dread?",
            "es": "¿Qué artista creó 'El Grito', una de las imágenes más icónicas de ansiedad y terror existencial?",
            "de": "Welcher Künstler schuf 'Der Schrei', eines der ikonischsten Bilder von Angst und existentieller Furcht?",
            "nl": "Welke kunstenaar creëerde 'De Schreeuw', een van de meest iconische beelden van angst en existentiële dreiging?"
        },
        "options": [
            {"en": "Edvard Munch", "es": "Edvard Munch", "de": "Edvard Munch", "nl": "Edvard Munch"},
            {"en": "Vincent van Gogh", "es": "Vincent van Gogh", "de": "Vincent van Gogh", "nl": "Vincent van Gogh"},
            {"en": "Egon Schiele", "es": "Egon Schiele", "de": "Egon Schiele", "nl": "Egon Schiele"},
            {"en": "Oskar Kokoschka", "es": "Oskar Kokoschka", "de": "Oskar Kokoschka", "nl": "Oskar Kokoschka"}
        ],
        "correct": 0,
        "explanation": {
            "en": "Edvard Munch created 'The Scream' between 1893-1910 in multiple versions. This Expressionist masterpiece depicts a figure in anguish against a tumultuous orange sky. Munch described it as inspired by a moment when he felt a 'great, unending scream piercing through nature.'",
            "es": "Edvard Munch creó 'El Grito' entre 1893-1910 en múltiples versiones. Esta obra maestra expresionista representa una figura en angustia contra un cielo naranja tumultuoso. Munch lo describió como inspirado por un momento en que sintió un 'gran grito interminable atravesando la naturaleza.'",
            "de": "Edvard Munch schuf 'Der Schrei' zwischen 1893-1910 in mehreren Versionen. Dieses expressionistische Meisterwerk zeigt eine Figur in Qual vor einem turbulenten orangefarbenen Himmel. Munch beschrieb es als inspiriert von einem Moment, als er 'einen großen, endlosen Schrei durch die Natur dringen' fühlte.",
            "nl": "Edvard Munch creëerde 'De Schreeuw' tussen 1893-1910 in meerdere versies. Dit expressionistische meesterwerk toont een figuur in angst tegen een tumultueuze oranje lucht. Munch beschreef het als geïnspireerd door een moment waarop hij 'een grote, eindeloze schreeuw door de natuur voelde snijden.'"
        }
    },
    {
        "question": {
            "en": "Who painted 'The Ambassadors', featuring an anamorphic skull in the foreground?",
            "es": "¿Quién pintó 'Los Embajadores', con una calavera anamórfica en primer plano?",
            "de": "Wer malte 'Die Gesandten', mit einem anamorphen Schädel im Vordergrund?",
            "nl": "Wie schilderde 'De Ambassadeurs', met een anamorfische schedel op de voorgrond?"
        },
        "options": [
            {"en": "Hans Holbein the Younger", "es": "Hans Holbein el Joven", "de": "Hans Holbein der Jüngere", "nl": "Hans Holbein de Jongere"},
            {"en": "Albrecht Dürer", "es": "Albrecht Dürer", "de": "Albrecht Dürer", "nl": "Albrecht Dürer"},
            {"en": "Lucas Cranach the Elder", "es": "Lucas Cranach el Viejo", "de": "Lucas Cranach der Ältere", "nl": "Lucas Cranach de Oudere"},
            {"en": "Matthias Grünewald", "es": "Matthias Grünewald", "de": "Matthias Grünewald", "nl": "Matthias Grünewald"}
        ],
        "correct": 0,
        "explanation": {
            "en": "Hans Holbein the Younger painted 'The Ambassadors' in 1533. This double portrait is famous for the distorted skull in the foreground that can only be viewed properly from the side, serving as a memento mori. The painting also includes numerous symbolic objects representing learning and the arts.",
            "es": "Hans Holbein el Joven pintó 'Los Embajadores' en 1533. Este retrato doble es famoso por la calavera distorsionada en primer plano que solo puede verse correctamente desde el lado, sirviendo como un memento mori. La pintura también incluye numerosos objetos simbólicos que representan el aprendizaje y las artes.",
            "de": "Hans Holbein der Jüngere malte 'Die Gesandten' 1533. Dieses Doppelporträt ist berühmt für den verzerrten Schädel im Vordergrund, der nur von der Seite richtig betrachtet werden kann und als Memento mori dient. Das Gemälde enthält auch zahlreiche symbolische Objekte, die Gelehrsamkeit und Künste repräsentieren.",
            "nl": "Hans Holbein de Jongere schilderde 'De Ambassadeurs' in 1533. Dit dubbelportret is beroemd om de vervormde schedel op de voorgrond die alleen van opzij goed kan worden bekeken en dient als een memento mori. Het schilderij bevat ook talrijke symbolische voorwerpen die geleerdheid en kunsten vertegenwoordigen."
        }
    },
    {
        "question": {
            "en": "Which artist painted 'Ophelia', showing the Shakespearean character floating in a stream?",
            "es": "¿Qué artista pintó 'Ofelia', mostrando al personaje shakespeariano flotando en un arroyo?",
            "de": "Welcher Künstler malte 'Ophelia', die die Shakespeare-Figur zeigt, wie sie in einem Bach treibt?",
            "nl": "Welke kunstenaar schilderde 'Ophelia', waarin het Shakespeare-personage drijvend in een beek wordt getoond?"
        },
        "options": [
            {"en": "John Everett Millais", "es": "John Everett Millais", "de": "John Everett Millais", "nl": "John Everett Millais"},
            {"en": "Dante Gabriel Rossetti", "es": "Dante Gabriel Rossetti", "de": "Dante Gabriel Rossetti", "nl": "Dante Gabriel Rossetti"},
            {"en": "William Holman Hunt", "es": "William Holman Hunt", "de": "William Holman Hunt", "nl": "William Holman Hunt"},
            {"en": "Edward Burne-Jones", "es": "Edward Burne-Jones", "de": "Edward Burne-Jones", "nl": "Edward Burne-Jones"}
        ],
        "correct": 0,
        "explanation": {
            "en": "John Everett Millais painted 'Ophelia' between 1851-1852. This Pre-Raphaelite masterpiece shows Ophelia from Hamlet floating in a stream surrounded by flowers, just before her death. Millais painted the landscape outdoors for accuracy, and his model, Elizabeth Siddal, posed in a bathtub for months.",
            "es": "John Everett Millais pintó 'Ofelia' entre 1851-1852. Esta obra maestra prerrafaelita muestra a Ofelia de Hamlet flotando en un arroyo rodeada de flores, justo antes de su muerte. Millais pintó el paisaje al aire libre para mayor precisión, y su modelo, Elizabeth Siddal, posó en una bañera durante meses.",
            "de": "John Everett Millais malte 'Ophelia' zwischen 1851-1852. Dieses präraffaelitische Meisterwerk zeigt Ophelia aus Hamlet, wie sie in einem Bach treibt, umgeben von Blumen, kurz vor ihrem Tod. Millais malte die Landschaft im Freien für Genauigkeit, und sein Modell, Elizabeth Siddal, posierte monatelang in einer Badewanne.",
            "nl": "John Everett Millais schilderde 'Ophelia' tussen 1851-1852. Dit prerafaëlitische meesterwerk toont Ophelia uit Hamlet drijvend in een beek omringd door bloemen, net voor haar dood. Millais schilderde het landschap buiten voor nauwkeurigheid, en zijn model, Elizabeth Siddal, poseerde maandenlang in een badkuip."
        }
    },
    {
        "question": {
            "en": "Who created 'Broadway Boogie Woogie', an abstract painting inspired by jazz and New York City?",
            "es": "¿Quién creó 'Broadway Boogie Woogie', una pintura abstracta inspirada en el jazz y Nueva York?",
            "de": "Wer schuf 'Broadway Boogie Woogie', ein abstraktes Gemälde inspiriert von Jazz und New York City?",
            "nl": "Wie creëerde 'Broadway Boogie Woogie', een abstract schilderij geïnspireerd door jazz en New York City?"
        },
        "options": [
            {"en": "Piet Mondrian", "es": "Piet Mondrian", "de": "Piet Mondrian", "nl": "Piet Mondriaan"},
            {"en": "Kazimir Malevich", "es": "Kazimir Malevich", "de": "Kasimir Malewitsch", "nl": "Kazimir Malevich"},
            {"en": "Wassily Kandinsky", "es": "Wassily Kandinsky", "de": "Wassily Kandinsky", "nl": "Wassily Kandinsky"},
            {"en": "Theo van Doesburg", "es": "Theo van Doesburg", "de": "Theo van Doesburg", "nl": "Theo van Doesburg"}
        ],
        "correct": 0,
        "explanation": {
            "en": "Piet Mondrian painted 'Broadway Boogie Woogie' in 1942-1943, shortly after moving to New York. This late masterpiece represents a departure from his earlier work, with small colored squares creating a rhythmic, vibrant composition inspired by the city's grid and boogie-woogie music.",
            "es": "Piet Mondrian pintó 'Broadway Boogie Woogie' en 1942-1943, poco después de mudarse a Nueva York. Esta obra maestra tardía representa un alejamiento de su trabajo anterior, con pequeños cuadrados de colores creando una composición rítmica y vibrante inspirada en la cuadrícula de la ciudad y la música boogie-woogie.",
            "de": "Piet Mondrian malte 'Broadway Boogie Woogie' 1942-1943, kurz nach seinem Umzug nach New York. Dieses späte Meisterwerk stellt eine Abkehr von seinen früheren Werken dar, mit kleinen farbigen Quadraten, die eine rhythmische, lebendige Komposition schaffen, inspiriert vom Stadtplan und Boogie-Woogie-Musik.",
            "nl": "Piet Mondriaan schilderde 'Broadway Boogie Woogie' in 1942-1943, kort na zijn verhuizing naar New York. Dit late meesterwerk vertegenwoordigt een afwijking van zijn eerdere werk, met kleine gekleurde vierkanten die een ritmische, levendige compositie creëren geïnspireerd door het stadsraster en boogie-woogie-muziek."
        }
    },
    {
        "question": {
            "en": "Which artist painted 'The Great Wave off Kanagawa', an iconic Japanese woodblock print?",
            "es": "¿Qué artista pintó 'La Gran Ola de Kanagawa', un icónico grabado en madera japonés?",
            "de": "Welcher Künstler malte 'Die große Welle vor Kanagawa', einen ikonischen japanischen Holzschnitt?",
            "nl": "Welke kunstenaar schilderde 'De Grote Golf bij Kanagawa', een iconische Japanse houtsnede?"
        },
        "options": [
            {"en": "Katsushika Hokusai", "es": "Katsushika Hokusai", "de": "Katsushika Hokusai", "nl": "Katsushika Hokusai"},
            {"en": "Utagawa Hiroshige", "es": "Utagawa Hiroshige", "de": "Utagawa Hiroshige", "nl": "Utagawa Hiroshige"},
            {"en": "Kitagawa Utamaro", "es": "Kitagawa Utamaro", "de": "Kitagawa Utamaro", "nl": "Kitagawa Utamaro"},
            {"en": "Tōshūsai Sharaku", "es": "Tōshūsai Sharaku", "de": "Tōshūsai Sharaku", "nl": "Tōshūsai Sharaku"}
        ],
        "correct": 0,
        "explanation": {
            "en": "Katsushika Hokusai created 'The Great Wave off Kanagawa' around 1831 as part of his 'Thirty-six Views of Mount Fuji' series. This woodblock print showing a massive wave threatening boats with Mount Fuji in the background has become one of the most recognizable images in art history and profoundly influenced Western artists.",
            "es": "Katsushika Hokusai creó 'La Gran Ola de Kanagawa' alrededor de 1831 como parte de su serie 'Treinta y seis vistas del Monte Fuji'. Este grabado en madera que muestra una ola masiva amenazando botes con el Monte Fuji al fondo se ha convertido en una de las imágenes más reconocibles en la historia del arte e influyó profundamente en artistas occidentales.",
            "de": "Katsushika Hokusai schuf 'Die große Welle vor Kanagawa' um 1831 als Teil seiner Serie 'Sechsunddreißig Ansichten des Berges Fuji'. Dieser Holzschnitt, der eine massive Welle zeigt, die Boote bedroht, mit dem Berg Fuji im Hintergrund, ist zu einem der bekanntesten Bilder in der Kunstgeschichte geworden und beeinflusste westliche Künstler tiefgreifend.",
            "nl": "Katsushika Hokusai creëerde 'De Grote Golf bij Kanagawa' rond 1831 als onderdeel van zijn serie 'Zesendertig Gezichten op de Berg Fuji'. Deze houtsnede die een massieve golf toont die boten bedreigt met de berg Fuji op de achtergrond, is een van de meest herkenbare beelden in de kunstgeschiedenis geworden en beïnvloedde westerse kunstenaars diepgaand."
        }
    },
    {
        "question": {
            "en": "Who painted 'The Son of Man', featuring a man in a bowler hat with an apple obscuring his face?",
            "es": "¿Quién pintó 'El Hijo del Hombre', con un hombre con bombín y una manzana oscureciendo su rostro?",
            "de": "Wer malte 'Der Sohn des Menschen', mit einem Mann in einer Melone und einem Apfel, der sein Gesicht verdeckt?",
            "nl": "Wie schilderde 'De Zoon des Mensen', met een man in een bolhoed met een appel die zijn gezicht verbergt?"
        },
        "options": [
            {"en": "René Magritte", "es": "René Magritte", "de": "René Magritte", "nl": "René Magritte"},
            {"en": "Salvador Dalí", "es": "Salvador Dalí", "de": "Salvador Dalí", "nl": "Salvador Dalí"},
            {"en": "Max Ernst", "es": "Max Ernst", "de": "Max Ernst", "nl": "Max Ernst"},
            {"en": "Giorgio de Chirico", "es": "Giorgio de Chirico", "de": "Giorgio de Chirico", "nl": "Giorgio de Chirico"}
        ],
        "correct": 0,
        "explanation": {
            "en": "René Magritte painted 'The Son of Man' in 1964 as a self-portrait. This iconic Surrealist work shows a man in a suit and bowler hat with a floating green apple obscuring his face. Magritte explained it represents how we see versus what is hidden, a recurring theme in his work.",
            "es": "René Magritte pintó 'El Hijo del Hombre' en 1964 como un autorretrato. Esta icónica obra surrealista muestra a un hombre en traje y bombín con una manzana verde flotante oscureciendo su rostro. Magritte explicó que representa cómo vemos versus lo que está oculto, un tema recurrente en su obra.",
            "de": "René Magritte malte 'Der Sohn des Menschen' 1964 als Selbstporträt. Dieses ikonische surrealistische Werk zeigt einen Mann in Anzug und Melone mit einem schwebenden grünen Apfel, der sein Gesicht verdeckt. Magritte erklärte, es repräsentiere, wie wir sehen versus was verborgen ist, ein wiederkehrendes Thema in seinem Werk.",
            "nl": "René Magritte schilderde 'De Zoon des Mensen' in 1964 als een zelfportret. Dit iconische surrealistische werk toont een man in pak en bolhoed met een zwevende groene appel die zijn gezicht verbergt. Magritte legde uit dat het vertegenwoordigt hoe we zien versus wat verborgen is, een terugkerend thema in zijn werk."
        }
    },
    {
        "question": {
            "en": "Which artist created 'No. 5, 1948', which sold for a record-breaking price in 2006?",
            "es": "¿Qué artista creó 'No. 5, 1948', que se vendió por un precio récord en 2006?",
            "de": "Welcher Künstler schuf 'Nr. 5, 1948', das 2006 für einen Rekordpreis verkauft wurde?",
            "nl": "Welke kunstenaar creëerde 'Nr. 5, 1948', dat in 2006 voor een recordprijs werd verkocht?"
        },
        "options": [
            {"en": "Jackson Pollock", "es": "Jackson Pollock", "de": "Jackson Pollock", "nl": "Jackson Pollock"},
            {"en": "Willem de Kooning", "es": "Willem de Kooning", "de": "Willem de Kooning", "nl": "Willem de Kooning"},
            {"en": "Mark Rothko", "es": "Mark Rothko", "de": "Mark Rothko", "nl": "Mark Rothko"},
            {"en": "Barnett Newman", "es": "Barnett Newman", "de": "Barnett Newman", "nl": "Barnett Newman"}
        ],
        "correct": 0,
        "explanation": {
            "en": "Jackson Pollock created 'No. 5, 1948' using his signature drip painting technique. The work, measuring 8 by 4 feet, is a dense composition of brown, yellow, white, and gray paint. In 2006, it reportedly sold for $140 million, making it one of the most expensive paintings ever sold.",
            "es": "Jackson Pollock creó 'No. 5, 1948' usando su técnica característica de pintura por goteo. La obra, que mide 8 por 4 pies, es una composición densa de pintura marrón, amarilla, blanca y gris. En 2006, se informó que se vendió por $140 millones, convirtiéndola en una de las pinturas más caras jamás vendidas.",
            "de": "Jackson Pollock schuf 'Nr. 5, 1948' mit seiner charakteristischen Tropfmalerei-Technik. Das Werk mit den Maßen 8 mal 4 Fuß ist eine dichte Komposition aus brauner, gelber, weißer und grauer Farbe. 2006 wurde es Berichten zufolge für 140 Millionen Dollar verkauft, was es zu einem der teuersten jemals verkauften Gemälde macht.",
            "nl": "Jackson Pollock creëerde 'Nr. 5, 1948' met zijn kenmerkende drip painting techniek. Het werk, dat 8 bij 4 voet meet, is een dichte compositie van bruine, gele, witte en grijze verf. In 2006 werd het naar verluidt verkocht voor $140 miljoen, waardoor het een van de duurste schilderijen ooit verkocht werd."
        }
    },
    {
        "question": {
            "en": "Who painted 'The Death of Marat', depicting the murdered French revolutionary in his bathtub?",
            "es": "¿Quién pintó 'La Muerte de Marat', representando al revolucionario francés asesinado en su bañera?",
            "de": "Wer malte 'Der Tod des Marat', das den ermordeten französischen Revolutionär in seiner Badewanne zeigt?",
            "nl": "Wie schilderde 'De Dood van Marat', waarin de vermoorde Franse revolutionair in zijn badkuip wordt afgebeeld?"
        },
        "options": [
            {"en": "Jacques-Louis David", "es": "Jacques-Louis David", "de": "Jacques-Louis David", "nl": "Jacques-Louis David"},
            {"en": "Jean-Auguste-Dominique Ingres", "es": "Jean-Auguste-Dominique Ingres", "de": "Jean-Auguste-Dominique Ingres", "nl": "Jean-Auguste-Dominique Ingres"},
            {"en": "Théodore Géricault", "es": "Théodore Géricault", "de": "Théodore Géricault", "nl": "Théodore Géricault"},
            {"en": "Eugène Delacroix", "es": "Eugène Delacroix", "de": "Eugène Delacroix", "nl": "Eugène Delacroix"}
        ],
        "correct": 0,
        "explanation": {
            "en": "Jacques-Louis David painted 'The Death of Marat' in 1793, shortly after the assassination of his friend Jean-Paul Marat by Charlotte Corday. This Neoclassical masterpiece depicts Marat as a martyred hero, combining political propaganda with artistic genius and becoming an iconic image of the French Revolution.",
            "es": "Jacques-Louis David pintó 'La Muerte de Marat' en 1793, poco después del asesinato de su amigo Jean-Paul Marat por Charlotte Corday. Esta obra maestra neoclásica representa a Marat como un héroe mártir, combinando propaganda política con genio artístico y convirtiéndose en una imagen icónica de la Revolución Francesa.",
            "de": "Jacques-Louis David malte 'Der Tod des Marat' 1793, kurz nach der Ermordung seines Freundes Jean-Paul Marat durch Charlotte Corday. Dieses neoklassizistische Meisterwerk zeigt Marat als Märtyrer-Helden, kombiniert politische Propaganda mit künstlerischem Genie und wurde zu einem ikonischen Bild der Französischen Revolution.",
            "nl": "Jacques-Louis David schilderde 'De Dood van Marat' in 1793, kort na de moord op zijn vriend Jean-Paul Marat door Charlotte Corday. Dit neoklassieke meesterwerk toont Marat als een martelaar-held, combineert politieke propaganda met artistiek genie en werd een iconisch beeld van de Franse Revolutie."
        }
    },
    {
        "question": {
            "en": "Which artist painted 'The Night Café', depicting the interior of a café in Arles?",
            "es": "¿Qué artista pintó 'El Café Nocturno', representando el interior de un café en Arles?",
            "de": "Welcher Künstler malte 'Das Nachtcafé', das das Innere eines Cafés in Arles zeigt?",
            "nl": "Welke kunstenaar schilderde 'Het Nachtcafé', waarin het interieur van een café in Arles wordt afgebeeld?"
        },
        "options": [
            {"en": "Vincent van Gogh", "es": "Vincent van Gogh", "de": "Vincent van Gogh", "nl": "Vincent van Gogh"},
            {"en": "Paul Gauguin", "es": "Paul Gauguin", "de": "Paul Gauguin", "nl": "Paul Gauguin"},
            {"en": "Henri de Toulouse-Lautrec", "es": "Henri de Toulouse-Lautrec", "de": "Henri de Toulouse-Lautrec", "nl": "Henri de Toulouse-Lautrec"},
            {"en": "Paul Cézanne", "es": "Paul Cézanne", "de": "Paul Cézanne", "nl": "Paul Cézanne"}
        ],
        "correct": 0,
        "explanation": {
            "en": "Vincent van Gogh painted 'The Night Café' in 1888 during his time in Arles. He described it as expressing 'terrible human passions' through clashing reds and greens. The painting's distorted perspective and intense colors convey a sense of disorientation and psychological unease.",
            "es": "Vincent van Gogh pintó 'El Café Nocturno' en 1888 durante su tiempo en Arles. Lo describió como expresando 'terribles pasiones humanas' a través de rojos y verdes contrastantes. La perspectiva distorsionada y los colores intensos de la pintura transmiten una sensación de desorientación y malestar psicológico.",
            "de": "Vincent van Gogh malte 'Das Nachtcafé' 1888 während seiner Zeit in Arles. Er beschrieb es als Ausdruck 'schrecklicher menschlicher Leidenschaften' durch kollidierende Rot- und Grüntöne. Die verzerrte Perspektive und intensiven Farben des Gemäldes vermitteln ein Gefühl von Desorientierung und psychischem Unbehagen.",
            "nl": "Vincent van Gogh schilderde 'Het Nachtcafé' in 1888 tijdens zijn tijd in Arles. Hij beschreef het als het uitdrukken van 'verschrikkelijke menselijke passies' door botsende rood- en groentinten. Het vervormde perspectief en de intense kleuren van het schilderij geven een gevoel van desoriëntatie en psychisch onbehagen weer."
        }
    },
    {
        "question": {
            "en": "Who created 'Water Lilies', a series of approximately 250 oil paintings?",
            "es": "¿Quién creó 'Nenúfares', una serie de aproximadamente 250 pinturas al óleo?",
            "de": "Wer schuf 'Seerosen', eine Serie von etwa 250 Ölgemälden?",
            "nl": "Wie creëerde 'Waterlelies', een serie van ongeveer 250 olieverfschilderijen?"
        },
        "options": [
            {"en": "Claude Monet", "es": "Claude Monet", "de": "Claude Monet", "nl": "Claude Monet"},
            {"en": "Pierre-Auguste Renoir", "es": "Pierre-Auguste Renoir", "de": "Pierre-Auguste Renoir", "nl": "Pierre-Auguste Renoir"},
            {"en": "Camille Pissarro", "es": "Camille Pissarro", "de": "Camille Pissarro", "nl": "Camille Pissarro"},
            {"en": "Alfred Sisley", "es": "Alfred Sisley", "de": "Alfred Sisley", "nl": "Alfred Sisley"}
        ],
        "correct": 0,
        "explanation": {
            "en": "Claude Monet painted the 'Water Lilies' series during the last 30 years of his life (1896-1926), depicting his flower garden at Giverny. These works represent the pinnacle of Impressionism and moved toward abstraction, with some panels measuring over 6 feet tall and nearly 14 feet wide.",
            "es": "Claude Monet pintó la serie 'Nenúfares' durante los últimos 30 años de su vida (1896-1926), representando su jardín de flores en Giverny. Estas obras representan el pináculo del impresionismo y se movieron hacia la abstracción, con algunos paneles que miden más de 6 pies de alto y casi 14 pies de ancho.",
            "de": "Claude Monet malte die 'Seerosen'-Serie während der letzten 30 Jahre seines Lebens (1896-1926), die seinen Blumengarten in Giverny zeigen. Diese Werke repräsentieren den Höhepunkt des Impressionismus und bewegten sich zur Abstraktion hin, wobei einige Paneele über 6 Fuß hoch und fast 14 Fuß breit sind.",
            "nl": "Claude Monet schilderde de 'Waterlelies'-serie tijdens de laatste 30 jaar van zijn leven (1896-1926), waarin zijn bloemtuin in Giverny wordt afgebeeld. Deze werken vertegenwoordigen het hoogtepunt van het impressionisme en bewogen zich richting abstractie, waarbij sommige panelen meer dan 6 voet hoog en bijna 14 voet breed zijn."
        }
    },
    {
        "question": {
            "en": "Which artist painted 'Liberty Leading the People', commemorating the July Revolution of 1830?",
            "es": "¿Qué artista pintó 'La Libertad Guiando al Pueblo', conmemorando la Revolución de Julio de 1830?",
            "de": "Welcher Künstler malte 'Die Freiheit führt das Volk', zum Gedenken an die Julirevolution von 1830?",
            "nl": "Welke kunstenaar schilderde 'De Vrijheid Leidt het Volk', ter herdenking van de Julirevolutie van 1830?"
        },
        "options": [
            {"en": "Eugène Delacroix", "es": "Eugène Delacroix", "de": "Eugène Delacroix", "nl": "Eugène Delacroix"},
            {"en": "Théodore Géricault", "es": "Théodore Géricault", "de": "Théodore Géricault", "nl": "Théodore Géricault"},
            {"en": "Jacques-Louis David", "es": "Jacques-Louis David", "de": "Jacques-Louis David", "nl": "Jacques-Louis David"},
            {"en": "Jean-Auguste-Dominique Ingres", "es": "Jean-Auguste-Dominique Ingres", "de": "Jean-Auguste-Dominique Ingres", "nl": "Jean-Auguste-Dominique Ingres"}
        ],
        "correct": 0,
        "explanation": {
            "en": "Eugène Delacroix painted 'Liberty Leading the People' in 1830. This Romantic masterpiece shows Lady Liberty holding the tricolor flag and leading revolutionaries over barricades. The painting became an enduring symbol of democracy, freedom, and the revolutionary spirit, and inspired France's Marianne symbol.",
            "es": "Eugène Delacroix pintó 'La Libertad Guiando al Pueblo' en 1830. Esta obra maestra romántica muestra a Lady Liberty sosteniendo la bandera tricolor y liderando revolucionarios sobre barricadas. La pintura se convirtió en un símbolo perdurable de democracia, libertad y espíritu revolucionario, e inspiró el símbolo Marianne de Francia.",
            "de": "Eugène Delacroix malte 'Die Freiheit führt das Volk' 1830. Dieses romantische Meisterwerk zeigt Lady Liberty, wie sie die Trikolore hält und Revolutionäre über Barrikaden führt. Das Gemälde wurde zu einem dauerhaften Symbol für Demokratie, Freiheit und revolutionären Geist und inspirierte Frankreichs Marianne-Symbol.",
            "nl": "Eugène Delacroix schilderde 'De Vrijheid Leidt het Volk' in 1830. Dit romantische meesterwerk toont Lady Liberty die de driekleur vasthoudt en revolutionairen over barricades leidt. Het schilderij werd een blijvend symbool van democratie, vrijheid en revolutionaire geest, en inspireerde Frankrijk's Marianne-symbool."
        }
    },
    {
        "question": {
            "en": "Who painted 'A Sunday Afternoon on the Island of La Grande Jatte', using the pointillist technique?",
            "es": "¿Quién pintó 'Una Tarde de Domingo en la Isla de la Grande Jatte', usando la técnica puntillista?",
            "de": "Wer malte 'Ein Sonntagnachmittag auf der Insel La Grande Jatte', mit der pointillistischen Technik?",
            "nl": "Wie schilderde 'Een Zondagmiddag op het Eiland La Grande Jatte', met de pointillistische techniek?"
        },
        "options": [
            {"en": "Georges Seurat", "es": "Georges Seurat", "de": "Georges Seurat", "nl": "Georges Seurat"},
            {"en": "Paul Signac", "es": "Paul Signac", "de": "Paul Signac", "nl": "Paul Signac"},
            {"en": "Camille Pissarro", "es": "Camille Pissarro", "de": "Camille Pissarro", "nl": "Camille Pissarro"},
            {"en": "Henri-Edmond Cross", "es": "Henri-Edmond Cross", "de": "Henri-Edmond Cross", "nl": "Henri-Edmond Cross"}
        ],
        "correct": 0,
        "explanation": {
            "en": "Georges Seurat painted 'A Sunday Afternoon on the Island of La Grande Jatte' between 1884-1886. This monumental work, measuring approximately 7 by 10 feet, pioneered the pointillist technique of applying small dots of pure color. Seurat spent two years creating this masterpiece of Neo-Impressionism.",
            "es": "Georges Seurat pintó 'Una Tarde de Domingo en la Isla de la Grande Jatte' entre 1884-1886. Esta obra monumental, que mide aproximadamente 7 por 10 pies, fue pionera en la técnica puntillista de aplicar pequeños puntos de color puro. Seurat pasó dos años creando esta obra maestra del neoimpresionismo.",
            "de": "Georges Seurat malte 'Ein Sonntagnachmittag auf der Insel La Grande Jatte' zwischen 1884-1886. Dieses monumentale Werk mit den Maßen ca. 7 mal 10 Fuß war Vorreiter der pointillistischen Technik, kleine Punkte reiner Farbe aufzutragen. Seurat verbrachte zwei Jahre mit der Schaffung dieses Meisterwerks des Neo-Impressionismus.",
            "nl": "Georges Seurat schilderde 'Een Zondagmiddag op het Eiland La Grande Jatte' tussen 1884-1886. Dit monumentale werk, dat ongeveer 7 bij 10 voet meet, was baanbrekend voor de pointillistische techniek van het aanbrengen van kleine stippen pure kleur. Seurat bracht twee jaar door met het creëren van dit meesterwerk van het neo-impressionisme."
        }
    },
    {
        "question": {
            "en": "Which artist created 'Campbell's Soup Cans', a series of 32 canvases depicting soup cans?",
            "es": "¿Qué artista creó 'Latas de Sopa Campbell', una serie de 32 lienzos representando latas de sopa?",
            "de": "Welcher Künstler schuf 'Campbells Suppendosen', eine Serie von 32 Leinwänden mit Suppendosen?",
            "nl": "Welke kunstenaar creëerde 'Campbell's Soepblikken', een serie van 32 doeken die soepblikken afbeelden?"
        },
        "options": [
            {"en": "Andy Warhol", "es": "Andy Warhol", "de": "Andy Warhol", "nl": "Andy Warhol"},
            {"en": "Roy Lichtenstein", "es": "Roy Lichtenstein", "de": "Roy Lichtenstein", "nl": "Roy Lichtenstein"},
            {"en": "Jasper Johns", "es": "Jasper Johns", "de": "Jasper Johns", "nl": "Jasper Johns"},
            {"en": "Robert Rauschenberg", "es": "Robert Rauschenberg", "de": "Robert Rauschenberg", "nl": "Robert Rauschenberg"}
        ],
        "correct": 0,
        "explanation": {
            "en": "Andy Warhol created 'Campbell's Soup Cans' in 1962, with each of the 32 canvases representing one of Campbell's soup varieties available at the time. This iconic Pop Art work challenged the distinction between high art and consumer culture, launching Warhol to fame and revolutionizing contemporary art.",
            "es": "Andy Warhol creó 'Latas de Sopa Campbell' en 1962, con cada uno de los 32 lienzos representando una de las variedades de sopa Campbell disponibles en ese momento. Esta icónica obra de arte pop desafió la distinción entre arte elevado y cultura de consumo, lanzando a Warhol a la fama y revolucionando el arte contemporáneo.",
            "de": "Andy Warhol schuf 'Campbells Suppendosen' 1962, wobei jede der 32 Leinwände eine der damals verfügbaren Campbell-Suppensorten darstellt. Dieses ikonische Pop-Art-Werk stellte die Unterscheidung zwischen Hochkultur und Konsumkultur in Frage, brachte Warhol zu Ruhm und revolutionierte die zeitgenössische Kunst.",
            "nl": "Andy Warhol creëerde 'Campbell's Soepblikken' in 1962, waarbij elk van de 32 doeken een van de toen beschikbare Campbell-soepvariëteiten vertegenwoordigt. Dit iconische Pop Art-werk daagde het onderscheid tussen hoge kunst en consumentencultuur uit, lanceerde Warhol naar roem en revolutioneerde de hedendaagse kunst."
        }
    },
    {
        "question": {
            "en": "Who painted 'The Garden of Earthly Delights', a triptych depicting paradise, earth, and hell?",
            "es": "¿Quién pintó 'El Jardín de las Delicias', un tríptico que representa el paraíso, la tierra y el infierno?",
            "de": "Wer malte 'Der Garten der Lüste', ein Triptychon, das Paradies, Erde und Hölle zeigt?",
            "nl": "Wie schilderde 'De Tuin der Lusten', een drieluik dat het paradijs, de aarde en de hel afbeeldt?"
        },
        "options": [
            {"en": "Hieronymus Bosch", "es": "Hieronymus Bosch", "de": "Hieronymus Bosch", "nl": "Jheronimus Bosch"},
            {"en": "Pieter Bruegel the Elder", "es": "Pieter Bruegel el Viejo", "de": "Pieter Bruegel der Ältere", "nl": "Pieter Bruegel de Oude"},
            {"en": "Jan van Eyck", "es": "Jan van Eyck", "de": "Jan van Eyck", "nl": "Jan van Eyck"},
            {"en": "Matthias Grünewald", "es": "Matthias Grünewald", "de": "Matthias Grünewald", "nl": "Matthias Grünewald"}
        ],
        "correct": 0,
        "explanation": {
            "en": "Hieronymus Bosch painted 'The Garden of Earthly Delights' between 1490-1510. This extraordinary triptych shows the Garden of Eden on the left panel, earthly pleasures and sins in the center, and hellish punishments on the right. Its bizarre imagery and moral symbolism continue to intrigue art historians and viewers alike.",
            "es": "Hieronymus Bosch pintó 'El Jardín de las Delicias' entre 1490-1510. Este extraordinario tríptico muestra el Jardín del Edén en el panel izquierdo, placeres y pecados terrenales en el centro, y castigos infernales a la derecha. Sus imágenes extrañas y simbolismo moral continúan intrigando a historiadores del arte y espectadores por igual.",
            "de": "Hieronymus Bosch malte 'Der Garten der Lüste' zwischen 1490-1510. Dieses außergewöhnliche Triptychon zeigt den Garten Eden auf dem linken Flügel, irdische Freuden und Sünden in der Mitte und höllische Strafen rechts. Seine bizarren Bilder und moralische Symbolik faszinieren weiterhin Kunsthistoriker und Betrachter gleichermaßen.",
            "nl": "Jheronimus Bosch schilderde 'De Tuin der Lusten' tussen 1490-1510. Dit buitengewone drieluik toont de Hof van Eden op het linkerpaneel, aardse genoegens en zonden in het midden, en helse straffen aan de rechterkant. De bizarre beeldtaal en morele symboliek blijven kunsthistorici en kijkers gelijkelijk intrigeren."
        }
    },
    {
        "question": {
            "en": "Which artist painted 'Whistler's Mother', officially titled 'Arrangement in Grey and Black No. 1'?",
            "es": "¿Qué artista pintó 'La Madre de Whistler', oficialmente titulada 'Arreglo en Gris y Negro No. 1'?",
            "de": "Welcher Künstler malte 'Whistlers Mutter', offiziell 'Arrangement in Grau und Schwarz Nr. 1'?",
            "nl": "Welke kunstenaar schilderde 'Whistlers Moeder', officieel getiteld 'Arrangement in Grijs en Zwart Nr. 1'?"
        },
        "options": [
            {"en": "James McNeill Whistler", "es": "James McNeill Whistler", "de": "James McNeill Whistler", "nl": "James McNeill Whistler"},
            {"en": "John Singer Sargent", "es": "John Singer Sargent", "de": "John Singer Sargent", "nl": "John Singer Sargent"},
            {"en": "Winslow Homer", "es": "Winslow Homer", "de": "Winslow Homer", "nl": "Winslow Homer"},
            {"en": "Thomas Eakins", "es": "Thomas Eakins", "de": "Thomas Eakins", "nl": "Thomas Eakins"}
        ],
        "correct": 0,
        "explanation": {
            "en": "James McNeill Whistler painted this portrait of his mother Anna McNeill Whistler in 1871. The painting's formal title emphasizes Whistler's belief in 'art for art's sake', focusing on the arrangement of color and form rather than the subject's identity. It has become one of the most iconic images in American art.",
            "es": "James McNeill Whistler pintó este retrato de su madre Anna McNeill Whistler en 1871. El título formal de la pintura enfatiza la creencia de Whistler en 'el arte por el arte', centrándose en el arreglo de color y forma en lugar de la identidad del sujeto. Se ha convertido en una de las imágenes más icónicas del arte estadounidense.",
            "de": "James McNeill Whistler malte dieses Porträt seiner Mutter Anna McNeill Whistler 1871. Der formale Titel des Gemäldes betont Whistlers Glauben an 'Kunst um der Kunst willen', wobei die Anordnung von Farbe und Form im Vordergrund steht statt der Identität des Motivs. Es ist zu einem der ikonischsten Bilder in der amerikanischen Kunst geworden.",
            "nl": "James McNeill Whistler schilderde dit portret van zijn moeder Anna McNeill Whistler in 1871. De formele titel van het schilderij benadrukt Whistlers geloof in 'kunst omwille van de kunst', waarbij de nadruk ligt op de rangschikking van kleur en vorm in plaats van de identiteit van het onderwerp. Het is een van de meest iconische beelden in de Amerikaanse kunst geworden."
        }
    },
    {
        "question": {
            "en": "Who created 'The Starry Night', painted from his asylum room window?",
            "es": "¿Quién creó 'La Noche Estrellada', pintada desde la ventana de su habitación en el asilo?",
            "de": "Wer schuf 'Die Sternennacht', gemalt vom Fenster seines Asyls?",
            "nl": "Wie creëerde 'De Sterrennacht', geschilderd vanuit zijn asielkamerraam?"
        },
        "options": [
            {"en": "Vincent van Gogh", "es": "Vincent van Gogh", "de": "Vincent van Gogh", "nl": "Vincent van Gogh"},
            {"en": "Paul Gauguin", "es": "Paul Gauguin", "de": "Paul Gauguin", "nl": "Paul Gauguin"},
            {"en": "Edvard Munch", "es": "Edvard Munch", "de": "Edvard Munch", "nl": "Edvard Munch"},
            {"en": "Henri de Toulouse-Lautrec", "es": "Henri de Toulouse-Lautrec", "de": "Henri de Toulouse-Lautrec", "nl": "Henri de Toulouse-Lautrec"}
        ],
        "correct": 0,
        "explanation": {
            "en": "Vincent van Gogh painted 'The Starry Night' in June 1889 while at the Saint-Paul-de-Mausole asylum in Saint-Rémy-de-Provence. The painting depicts the view from his east-facing window with a swirling night sky, cypress tree, and village. It has become one of the most recognizable paintings in Western art history.",
            "es": "Vincent van Gogh pintó 'La Noche Estrellada' en junio de 1889 mientras estaba en el asilo Saint-Paul-de-Mausole en Saint-Rémy-de-Provence. La pintura representa la vista desde su ventana orientada al este con un cielo nocturno arremolinado, un ciprés y un pueblo. Se ha convertido en una de las pinturas más reconocibles en la historia del arte occidental.",
            "de": "Vincent van Gogh malte 'Die Sternennacht' im Juni 1889, während er in der Heilanstalt Saint-Paul-de-Mausole in Saint-Rémy-de-Provence war. Das Gemälde zeigt die Aussicht aus seinem nach Osten gerichteten Fenster mit einem wirbelnden Nachthimmel, Zypressenbaum und Dorf. Es ist zu einem der bekanntesten Gemälde in der westlichen Kunstgeschichte geworden.",
            "nl": "Vincent van Gogh schilderde 'De Sterrennacht' in juni 1889 terwijl hij in het asiel Saint-Paul-de-Mausole in Saint-Rémy-de-Provence verbleef. Het schilderij toont het uitzicht vanuit zijn naar het oosten gerichte raam met een wervelende nachtelijke hemel, cipresboom en dorp. Het is een van de meest herkenbare schilderijen in de westerse kunstgeschiedenis geworden."
        }
    },
    {
        "question": {
            "en": "Which artist painted 'The Birth of Adam', part of the Sistine Chapel ceiling?",
            "es": "¿Qué artista pintó 'El Nacimiento de Adán', parte del techo de la Capilla Sixtina?",
            "de": "Welcher Künstler malte 'Die Erschaffung Adams', Teil der Sixtinischen Kapellendecke?",
            "nl": "Welke kunstenaar schilderde 'De Schepping van Adam', onderdeel van het plafond van de Sixtijnse Kapel?"
        },
        "options": [
            {"en": "Michelangelo", "es": "Miguel Ángel", "de": "Michelangelo", "nl": "Michelangelo"},
            {"en": "Raphael", "es": "Rafael", "de": "Raffael", "nl": "Rafaël"},
            {"en": "Leonardo da Vinci", "es": "Leonardo da Vinci", "de": "Leonardo da Vinci", "nl": "Leonardo da Vinci"},
            {"en": "Titian", "es": "Tiziano", "de": "Tizian", "nl": "Titiaan"}
        ],
        "correct": 0,
        "explanation": {
            "en": "Michelangelo painted 'The Creation of Adam' (often mistakenly called 'Birth of Adam') as part of the Sistine Chapel ceiling frescoes between 1508-1512. This iconic image shows God reaching out to give life to Adam, with their nearly-touching fingers becoming one of the most recognizable images in art history.",
            "es": "Miguel Ángel pintó 'La Creación de Adán' (a menudo llamado erróneamente 'Nacimiento de Adán') como parte de los frescos del techo de la Capilla Sixtina entre 1508-1512. Esta imagen icónica muestra a Dios extendiéndose para dar vida a Adán, con sus dedos casi tocándose convirtiéndose en una de las imágenes más reconocibles en la historia del arte.",
            "de": "Michelangelo malte 'Die Erschaffung Adams' (oft fälschlicherweise 'Geburt Adams' genannt) als Teil der Fresken der Sixtinischen Kapellendecke zwischen 1508-1512. Dieses ikonische Bild zeigt Gott, wie er sich ausstreckt, um Adam Leben zu geben, wobei ihre sich fast berührenden Finger zu einem der bekanntesten Bilder in der Kunstgeschichte wurden.",
            "nl": "Michelangelo schilderde 'De Schepping van Adam' (vaak ten onrechte 'Geboorte van Adam' genoemd) als onderdeel van de fresco's op het plafond van de Sixtijnse Kapel tussen 1508-1512. Dit iconische beeld toont God die reikt om Adam leven te geven, waarbij hun bijna-rakende vingers een van de meest herkenbare beelden in de kunstgeschiedenis zijn geworden."
        }
    }
]

def format_question(q):
    """Format a question dict into JavaScript code"""
    return f'''      {{
        question: {{
          en: "{q['question']['en']}",
          es: "{q['question']['es']}",
          de: "{q['question']['de']}",
          nl: "{q['question']['nl']}"
        }},
        options: [
          {{ en: "{q['options'][0]['en']}", es: "{q['options'][0]['es']}", de: "{q['options'][0]['de']}", nl: "{q['options'][0]['nl']}" }},
          {{ en: "{q['options'][1]['en']}", es: "{q['options'][1]['es']}", de: "{q['options'][1]['de']}", nl: "{q['options'][1]['nl']}" }},
          {{ en: "{q['options'][2]['en']}", es: "{q['options'][2]['es']}", de: "{q['options'][2]['de']}", nl: "{q['options'][2]['nl']}" }},
          {{ en: "{q['options'][3]['en']}", es: "{q['options'][3]['es']}", de: "{q['options'][3]['de']}", nl: "{q['options'][3]['nl']}" }}
        ],
        correct: {q['correct']},
        explanation: {{
          en: "{q['explanation']['en']}",
          es: "{q['explanation']['es']}",
          de: "{q['explanation']['de']}",
          nl: "{q['explanation']['nl']}"
        }}
      }}'''

# Read existing level7.js file
input_file = r"c:\Users\rbosch\OneDrive - A.S. Watson Europe\prive\RobitQuiz\src\questions\data\subjects\famous-people\Artists\level7.js"
output_file = input_file

with open(input_file, 'r', encoding='utf-8') as f:
    content = f.read()

# Find the questions array and extract existing valid questions
# We'll look for questions that have proper structure (not templates)
match = re.search(r'questions:\s*\[(.*)\]\s*};', content, re.DOTALL)
if match:
    questions_section = match.group(1)

    # Count valid questions (those with real content, not templates)
    # We'll keep the first 40 questions and filter out templates
    question_pattern = r'\{[^}]+question:\s*\{[^}]+\},[^}]+options:\s*\[[^\]]+\],[^}]+correct:\s*\d+,[^}]+explanation:\s*\{[^}]+\}\s*\}'
    existing_questions = re.findall(question_pattern, questions_section, re.DOTALL)

    # Filter out template questions
    valid_questions = []
    for q in existing_questions[:40]:  # Take first 40
        if 'This fact about this artist' not in q and 'Who were this artist' not in q:
            valid_questions.append(q)

    print(f"Found {len(valid_questions)} valid existing questions")

    # Format new questions
    new_questions_js = ',\n'.join([format_question(q) for q in level7_new_questions])

    # Combine existing valid questions with new ones
    all_questions = ',\n'.join(valid_questions) + ',\n' + new_questions_js

    # Create the complete file content
    new_content = f'''// Artists Quiz - Level 7: Expert Knowledge
(function() {{
  const level7 = {{
    name: {{
      en: "Artists Level 7",
      es: "Artistas Nivel 7",
      de: "Künstler Stufe 7",
      nl: "Kunstenaars Level 7"
    }},
    questions: [
{all_questions}
    ]
  }};

  if (typeof module !== 'undefined' && module.exports) {{
    module.exports = level7;
  }} else if (typeof window !== 'undefined') {{
    window.level7 = level7;
  }}
}})();'''

    # Write the new content
    with open(output_file, 'w', encoding='utf-8') as f:
        f.write(new_content)

    print(f"Successfully expanded level7.js with {len(level7_new_questions)} new questions")
    print(f"Total questions: {len(valid_questions) + len(level7_new_questions)}")

print("Level 7 expansion complete!")
