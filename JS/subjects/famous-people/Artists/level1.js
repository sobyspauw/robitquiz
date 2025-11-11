// Artists Quiz - Level 1: Beginner
(function() {
  const level1 = {
    name: {
      en: "Artists - Beginner",
      es: "Artistas - Principiante",
      de: "Künstler - Anfänger",
      nl: "Kunstenaars - Beginner"
    },
    questions: [
      {
        question: {
          en: "Who painted the Mona Lisa?",
          es: "¿Quién pintó la Mona Lisa?",
          de: "Wer malte die Mona Lisa?",
          nl: "Wie schilderde de Mona Lisa?"
        },
        options: [
          { en: "Leonardo da Vinci", es: "Leonardo da Vinci", de: "Leonardo da Vinci", nl: "Leonardo da Vinci" },
          { en: "Michelangelo", es: "Miguel Ángel", de: "Michelangelo", nl: "Michelangelo" },
          { en: "Raphael", es: "Rafael", de: "Raffael", nl: "Rafaël" },
          { en: "Rembrandt", es: "Rembrandt", de: "Rembrandt", nl: "Rembrandt" }
        ],
        correct: 0,
        explanation: {
          en: "Leonardo da Vinci painted the Mona Lisa between 1503-1519. It's the world's most famous painting, housed in the Louvre Museum in Paris.",
          es: "Leonardo da Vinci pintó la Mona Lisa entre 1503-1519. Es la pintura más famosa del mundo, alojada en el Museo del Louvre en París.",
          de: "Leonardo da Vinci malte die Mona Lisa zwischen 1503-1519. Es ist das berühmteste Gemälde der Welt, untergebracht im Louvre-Museum in Paris.",
          nl: "Leonardo da Vinci schilderde de Mona Lisa tussen 1503-1519. Het is het beroemdste schilderij ter wereld, gehuisvest in het Louvre Museum in Parijs."
        }
      },
      {
        question: {
          en: "Who painted 'The Starry Night'?",
          es: "¿Quién pintó 'La noche estrellada'?",
          de: "Wer malte 'Die Sternennacht'?",
          nl: "Wie schilderde 'De sterrennacht'?"
        },
        options: [
          { en: "Vincent van Gogh", es: "Vincent van Gogh", de: "Vincent van Gogh", nl: "Vincent van Gogh" },
          { en: "Claude Monet", es: "Claude Monet", de: "Claude Monet", nl: "Claude Monet" },
          { en: "Pablo Picasso", es: "Pablo Picasso", de: "Pablo Picasso", nl: "Pablo Picasso" },
          { en: "Salvador Dalí", es: "Salvador Dalí", de: "Salvador Dalí", nl: "Salvador Dalí" }
        ],
        correct: 0,
        explanation: {
          en: "Vincent van Gogh painted 'The Starry Night' in 1889 while in a mental asylum in Saint-Rémy-de-Provence, France.",
          es: "Vincent van Gogh pintó 'La noche estrellada' en 1889 mientras estaba en un asilo mental en Saint-Rémy-de-Provence, Francia.",
          de: "Vincent van Gogh malte 'Die Sternennacht' 1889 während seines Aufenthalts in einer Nervenheilanstalt in Saint-Rémy-de-Provence, Frankreich.",
          nl: "Vincent van Gogh schilderde 'De sterrennacht' in 1889 terwijl hij in een psychiatrische inrichting in Saint-Rémy-de-Provence, Frankrijk verbleef."
        }
      },
      {
        question: {
          en: "Who sculpted 'David'?",
          es: "¿Quién esculpió 'David'?",
          de: "Wer schuf die Skulptur 'David'?",
          nl: "Wie beeldhouwde 'David'?"
        },
        options: [
          { en: "Michelangelo", es: "Miguel Ángel", de: "Michelangelo", nl: "Michelangelo" },
          { en: "Donatello", es: "Donatello", de: "Donatello", nl: "Donatello" },
          { en: "Auguste Rodin", es: "Auguste Rodin", de: "Auguste Rodin", nl: "Auguste Rodin" },
          { en: "Bernini", es: "Bernini", de: "Bernini", nl: "Bernini" }
        ],
        correct: 0,
        explanation: {
          en: "Michelangelo sculpted the famous marble statue of David between 1501-1504. It stands 17 feet tall and is housed in Florence, Italy.",
          es: "Miguel Ángel esculpió la famosa estatua de mármol de David entre 1501-1504. Mide 5.17 metros de altura y está en Florencia, Italia.",
          de: "Michelangelo schuf die berühmte Marmorstatue David zwischen 1501-1504. Sie ist 5,17 Meter hoch und steht in Florenz, Italien.",
          nl: "Michelangelo beeldhouwde het beroemde marmeren standbeeld van David tussen 1501-1504. Het is 5,17 meter hoog en staat in Florence, Italië."
        }
      },
      {
        question: {
          en: "Which artist cut off his own ear?",
          es: "¿Qué artista se cortó su propia oreja?",
          de: "Welcher Künstler schnitt sich sein eigenes Ohr ab?",
          nl: "Welke kunstenaar sneed zijn eigen oor af?"
        },
        options: [
          { en: "Vincent van Gogh", es: "Vincent van Gogh", de: "Vincent van Gogh", nl: "Vincent van Gogh" },
          { en: "Paul Gauguin", es: "Paul Gauguin", de: "Paul Gauguin", nl: "Paul Gauguin" },
          { en: "Henri de Toulouse-Lautrec", es: "Henri de Toulouse-Lautrec", de: "Henri de Toulouse-Lautrec", nl: "Henri de Toulouse-Lautrec" },
          { en: "Édouard Manet", es: "Édouard Manet", de: "Édouard Manet", nl: "Édouard Manet" }
        ],
        correct: 0,
        explanation: {
          en: "Vincent van Gogh cut off part of his ear in 1888 during a mental breakdown in Arles, France. He painted several self-portraits showing his bandaged ear.",
          es: "Vincent van Gogh se cortó parte de su oreja en 1888 durante una crisis mental en Arles, Francia. Pintó varios autorretratos mostrando su oreja vendada.",
          de: "Vincent van Gogh schnitt sich 1888 während eines psychischen Zusammenbruchs in Arles, Frankreich, einen Teil seines Ohrs ab. Er malte mehrere Selbstporträts mit verbundenem Ohr.",
          nl: "Vincent van Gogh sneed een deel van zijn oor af in 1888 tijdens een psychische inzinking in Arles, Frankrijk. Hij schilderde verschillende zelfportretten met zijn verbonden oor."
        }
      },
      {
        question: {
          en: "Who painted the ceiling of the Sistine Chapel?",
          es: "¿Quién pintó el techo de la Capilla Sixtina?",
          de: "Wer malte die Decke der Sixtinischen Kapelle?",
          nl: "Wie schilderde het plafond van de Sixtijnse Kapel?"
        },
        options: [
          { en: "Michelangelo", es: "Miguel Ángel", de: "Michelangelo", nl: "Michelangelo" },
          { en: "Leonardo da Vinci", es: "Leonardo da Vinci", de: "Leonardo da Vinci", nl: "Leonardo da Vinci" },
          { en: "Raphael", es: "Rafael", de: "Raffael", nl: "Rafaël" },
          { en: "Botticelli", es: "Botticelli", de: "Botticelli", nl: "Botticelli" }
        ],
        correct: 0,
        explanation: {
          en: "Michelangelo painted the Sistine Chapel ceiling between 1508-1512, including the famous 'Creation of Adam' scene showing God giving life to Adam.",
          es: "Miguel Ángel pintó el techo de la Capilla Sixtina entre 1508-1512, incluyendo la famosa escena de la 'Creación de Adán' mostrando a Dios dando vida a Adán.",
          de: "Michelangelo malte die Decke der Sixtinischen Kapelle zwischen 1508-1512, einschließlich der berühmten 'Erschaffung Adams'-Szene, die zeigt, wie Gott Adam Leben gibt.",
          nl: "Michelangelo schilderde het plafond van de Sixtijnse Kapel tussen 1508-1512, inclusief de beroemde 'Schepping van Adam' scène waarin God leven geeft aan Adam."
        }
      },
      {
        question: {
          en: "Which artist is famous for his 'Blue Period'?",
          es: "¿Qué artista es famoso por su 'Período Azul'?",
          de: "Welcher Künstler ist für seine 'Blaue Periode' berühmt?",
          nl: "Welke kunstenaar is beroemd om zijn 'Blauwe Periode'?"
        },
        options: [
          { en: "Pablo Picasso", es: "Pablo Picasso", de: "Pablo Picasso", nl: "Pablo Picasso" },
          { en: "Henri Matisse", es: "Henri Matisse", de: "Henri Matisse", nl: "Henri Matisse" },
          { en: "Marc Chagall", es: "Marc Chagall", de: "Marc Chagall", nl: "Marc Chagall" },
          { en: "Paul Cézanne", es: "Paul Cézanne", de: "Paul Cézanne", nl: "Paul Cézanne" }
        ],
        correct: 0,
        explanation: {
          en: "Pablo Picasso's Blue Period (1901-1904) featured somber paintings in shades of blue and blue-green, reflecting his depression after a friend's suicide.",
          es: "El Período Azul de Pablo Picasso (1901-1904) presentó pinturas sombrías en tonos de azul y azul-verde, reflejando su depresión después del suicidio de un amigo.",
          de: "Pablo Picassos Blaue Periode (1901-1904) zeigte düstere Gemälde in Blau- und Blaugrün-Tönen, die seine Depression nach dem Selbstmord eines Freundes widerspiegelten.",
          nl: "Pablo Picasso's Blauwe Periode (1901-1904) kenmerkte zich door sombere schilderijen in tinten blauw en blauwgroen, als weerspiegeling van zijn depressie na de zelfmoord van een vriend."
        }
      },
      {
        question: {
          en: "Who painted 'The Last Supper'?",
          es: "¿Quién pintó 'La Última Cena'?",
          de: "Wer malte 'Das Abendmahl'?",
          nl: "Wie schilderde 'Het Laatste Avondmaal'?"
        },
        options: [
          { en: "Leonardo da Vinci", es: "Leonardo da Vinci", de: "Leonardo da Vinci", nl: "Leonardo da Vinci" },
          { en: "Michelangelo", es: "Miguel Ángel", de: "Michelangelo", nl: "Michelangelo" },
          { en: "Caravaggio", es: "Caravaggio", de: "Caravaggio", nl: "Caravaggio" },
          { en: "Titian", es: "Tiziano", de: "Tizian", nl: "Titiaan" }
        ],
        correct: 0,
        explanation: {
          en: "Leonardo da Vinci painted 'The Last Supper' (1495-1498) on a wall in Milan, depicting Jesus's final meal with his disciples before his crucifixion.",
          es: "Leonardo da Vinci pintó 'La Última Cena' (1495-1498) en una pared en Milán, representando la última comida de Jesús con sus discípulos antes de su crucifixión.",
          de: "Leonardo da Vinci malte 'Das Abendmahl' (1495-1498) an eine Wand in Mailand, das Jesus' letztes Mahl mit seinen Jüngern vor seiner Kreuzigung darstellt.",
          nl: "Leonardo da Vinci schilderde 'Het Laatste Avondmaal' (1495-1498) op een muur in Milaan, dat Jezus' laatste maaltijd met zijn discipelen voor zijn kruisiging afbeeldt."
        }
      },
      {
        question: {
          en: "Which Dutch artist painted 'Girl with a Pearl Earring'?",
          es: "¿Qué artista holandés pintó 'La joven de la perla'?",
          de: "Welcher niederländische Künstler malte 'Das Mädchen mit dem Perlenohrgehänge'?",
          nl: "Welke Nederlandse kunstenaar schilderde 'Meisje met de parel'?"
        },
        options: [
          { en: "Johannes Vermeer", es: "Johannes Vermeer", de: "Johannes Vermeer", nl: "Johannes Vermeer" },
          { en: "Rembrandt van Rijn", es: "Rembrandt van Rijn", de: "Rembrandt van Rijn", nl: "Rembrandt van Rijn" },
          { en: "Frans Hals", es: "Frans Hals", de: "Frans Hals", nl: "Frans Hals" },
          { en: "Jan Steen", es: "Jan Steen", de: "Jan Steen", nl: "Jan Steen" }
        ],
        correct: 0,
        explanation: {
          en: "Johannes Vermeer painted 'Girl with a Pearl Earring' around 1665. The painting is often called the 'Mona Lisa of the North' for its subtle beauty.",
          es: "Johannes Vermeer pintó 'La joven de la perla' alrededor de 1665. La pintura es a menudo llamada la 'Mona Lisa del Norte' por su belleza sutil.",
          de: "Johannes Vermeer malte 'Das Mädchen mit dem Perlenohrgehänge' um 1665. Das Gemälde wird oft 'Mona Lisa des Nordens' genannt wegen seiner subtilen Schönheit.",
          nl: "Johannes Vermeer schilderde 'Meisje met de parel' rond 1665. Het schilderij wordt vaak de 'Mona Lisa van het Noorden' genoemd vanwege zijn subtiele schoonheid."
        }
      },
      {
        question: {
          en: "Who painted 'The Scream'?",
          es: "¿Quién pintó 'El grito'?",
          de: "Wer malte 'Der Schrei'?",
          nl: "Wie schilderde 'De schreeuw'?"
        },
        options: [
          { en: "Edvard Munch", es: "Edvard Munch", de: "Edvard Munch", nl: "Edvard Munch" },
          { en: "Gustav Klimt", es: "Gustav Klimt", de: "Gustav Klimt", nl: "Gustav Klimt" },
          { en: "Wassily Kandinsky", es: "Wassily Kandinsky", de: "Wassily Kandinsky", nl: "Wassily Kandinsky" },
          { en: "Paul Klee", es: "Paul Klee", de: "Paul Klee", nl: "Paul Klee" }
        ],
        correct: 0,
        explanation: {
          en: "Edvard Munch painted 'The Scream' in 1893. This expressionist masterpiece has become an icon of modern anxiety and existential angst.",
          es: "Edvard Munch pintó 'El grito' en 1893. Esta obra maestra expresionista se ha convertido en un icono de la ansiedad moderna y la angustia existencial.",
          de: "Edvard Munch malte 'Der Schrei' 1893. Dieses expressionistische Meisterwerk wurde zu einer Ikone moderner Angst und existenzieller Qual.",
          nl: "Edvard Munch schilderde 'De schreeuw' in 1893. Dit expressionistische meesterwerk is een icoon geworden van moderne angst en existentiële benauwdheid."
        }
      },
      {
        question: {
          en: "Which artist is famous for painting water lilies?",
          es: "¿Qué artista es famoso por pintar nenúfares?",
          de: "Welcher Künstler ist berühmt für seine Seerosen-Gemälde?",
          nl: "Welke kunstenaar is beroemd om het schilderen van waterlelies?"
        },
        options: [
          { en: "Claude Monet", es: "Claude Monet", de: "Claude Monet", nl: "Claude Monet" },
          { en: "Pierre-Auguste Renoir", es: "Pierre-Auguste Renoir", de: "Pierre-Auguste Renoir", nl: "Pierre-Auguste Renoir" },
          { en: "Edgar Degas", es: "Edgar Degas", de: "Edgar Degas", nl: "Edgar Degas" },
          { en: "Paul Gauguin", es: "Paul Gauguin", de: "Paul Gauguin", nl: "Paul Gauguin" }
        ],
        correct: 0,
        explanation: {
          en: "Claude Monet painted approximately 250 paintings of water lilies in his garden at Giverny, France, especially during the last 30 years of his life.",
          es: "Claude Monet pintó aproximadamente 250 pinturas de nenúfares en su jardín en Giverny, Francia, especialmente durante los últimos 30 años de su vida.",
          de: "Claude Monet malte etwa 250 Gemälde von Seerosen in seinem Garten in Giverny, Frankreich, besonders während der letzten 30 Jahre seines Lebens.",
          nl: "Claude Monet schilderde ongeveer 250 schilderijen van waterlelies in zijn tuin in Giverny, Frankrijk, vooral tijdens de laatste 30 jaar van zijn leven."
        }
      },
      {
        question: {
          en: "Who created the sculpture 'The Thinker'?",
          es: "¿Quién creó la escultura 'El Pensador'?",
          de: "Wer schuf die Skulptur 'Der Denker'?",
          nl: "Wie creëerde het beeldhouwwerk 'De Denker'?"
        },
        options: [
          { en: "Auguste Rodin", es: "Auguste Rodin", de: "Auguste Rodin", nl: "Auguste Rodin" },
          { en: "Alberto Giacometti", es: "Alberto Giacometti", de: "Alberto Giacometti", nl: "Alberto Giacometti" },
          { en: "Constantin Brâncuși", es: "Constantin Brâncuși", de: "Constantin Brâncuși", nl: "Constantin Brâncuși" },
          { en: "Henry Moore", es: "Henry Moore", de: "Henry Moore", nl: "Henry Moore" }
        ],
        correct: 0,
        explanation: {
          en: "Auguste Rodin created 'The Thinker' in 1902. Originally named 'The Poet', it represents Dante contemplating his poem 'The Divine Comedy'.",
          es: "Auguste Rodin creó 'El Pensador' en 1902. Originalmente llamado 'El Poeta', representa a Dante contemplando su poema 'La Divina Comedia'.",
          de: "Auguste Rodin schuf 'Der Denker' 1902. Ursprünglich 'Der Dichter' genannt, stellt er Dante dar, der über sein Gedicht 'Die Göttliche Komödie' nachdenkt.",
          nl: "Auguste Rodin creëerde 'De Denker' in 1902. Oorspronkelijk 'De Dichter' genoemd, stelt het Dante voor die nadenkt over zijn gedicht 'De Goddelijke Komedie'."
        }
      },
      {
        question: {
          en: "Which artist painted 'The Birth of Venus'?",
          es: "¿Qué artista pintó 'El nacimiento de Venus'?",
          de: "Welcher Künstler malte 'Die Geburt der Venus'?",
          nl: "Welke kunstenaar schilderde 'De geboorte van Venus'?"
        },
        options: [
          { en: "Sandro Botticelli", es: "Sandro Botticelli", de: "Sandro Botticelli", nl: "Sandro Botticelli" },
          { en: "Titian", es: "Tiziano", de: "Tizian", nl: "Titiaan" },
          { en: "Giotto", es: "Giotto", de: "Giotto", nl: "Giotto" },
          { en: "Caravaggio", es: "Caravaggio", de: "Caravaggio", nl: "Caravaggio" }
        ],
        correct: 0,
        explanation: {
          en: "Sandro Botticelli painted 'The Birth of Venus' around 1485. It depicts the Roman goddess Venus emerging from the sea as a fully grown woman.",
          es: "Sandro Botticelli pintó 'El nacimiento de Venus' alrededor de 1485. Representa a la diosa romana Venus emergiendo del mar como una mujer adulta.",
          de: "Sandro Botticelli malte 'Die Geburt der Venus' um 1485. Es zeigt die römische Göttin Venus, die als erwachsene Frau aus dem Meer auftaucht.",
          nl: "Sandro Botticelli schilderde 'De geboorte van Venus' rond 1485. Het beeldt de Romeinse godin Venus af die als volwassen vrouw uit de zee oprijst."
        }
      },
      {
        question: {
          en: "Who is known for his melting clocks painting?",
          es: "¿Quién es conocido por su pintura de relojes derretidos?",
          de: "Wer ist bekannt für sein Gemälde mit schmelzenden Uhren?",
          nl: "Wie staat bekend om zijn schilderij met smeltende klokken?"
        },
        options: [
          { en: "Salvador Dalí", es: "Salvador Dalí", de: "Salvador Dalí", nl: "Salvador Dalí" },
          { en: "René Magritte", es: "René Magritte", de: "René Magritte", nl: "René Magritte" },
          { en: "Joan Miró", es: "Joan Miró", de: "Joan Miró", nl: "Joan Miró" },
          { en: "Max Ernst", es: "Max Ernst", de: "Max Ernst", nl: "Max Ernst" }
        ],
        correct: 0,
        explanation: {
          en: "Salvador Dalí painted 'The Persistence of Memory' in 1931, featuring melting clocks that have become an icon of surrealism.",
          es: "Salvador Dalí pintó 'La persistencia de la memoria' en 1931, con relojes derretidos que se han convertido en un icono del surrealismo.",
          de: "Salvador Dalí malte 'Die Beständigkeit der Erinnerung' 1931, mit schmelzenden Uhren, die zu einer Ikone des Surrealismus wurden.",
          nl: "Salvador Dalí schilderde 'De volharding der herinnering' in 1931, met smeltende klokken die een icoon van het surrealisme zijn geworden."
        }
      },
      {
        question: {
          en: "Which American artist is famous for Campbell's Soup Cans?",
          es: "¿Qué artista estadounidense es famoso por las latas de sopa Campbell?",
          de: "Welcher amerikanische Künstler ist berühmt für Campbell's Suppendosen?",
          nl: "Welke Amerikaanse kunstenaar is beroemd om Campbell's soepblikken?"
        },
        options: [
          { en: "Andy Warhol", es: "Andy Warhol", de: "Andy Warhol", nl: "Andy Warhol" },
          { en: "Roy Lichtenstein", es: "Roy Lichtenstein", de: "Roy Lichtenstein", nl: "Roy Lichtenstein" },
          { en: "Jackson Pollock", es: "Jackson Pollock", de: "Jackson Pollock", nl: "Jackson Pollock" },
          { en: "Keith Haring", es: "Keith Haring", de: "Keith Haring", nl: "Keith Haring" }
        ],
        correct: 0,
        explanation: {
          en: "Andy Warhol created the Campbell's Soup Cans series in 1962, helping to launch the Pop Art movement by elevating everyday objects to fine art.",
          es: "Andy Warhol creó la serie de latas de sopa Campbell en 1962, ayudando a lanzar el movimiento Pop Art al elevar objetos cotidianos a arte fino.",
          de: "Andy Warhol schuf die Campbell's Suppendosen-Serie 1962 und half damit, die Pop-Art-Bewegung zu starten, indem er Alltagsgegenstände zur Kunst erhob.",
          nl: "Andy Warhol creëerde de Campbell's soepblikken serie in 1962, waarmee hij hielp de Pop Art beweging te lanceren door alledaagse objecten tot kunst te verheffen."
        }
      },
      {
        question: {
          en: "Which artist painted 'Guernica'?",
          es: "¿Qué artista pintó 'Guernica'?",
          de: "Welcher Künstler malte 'Guernica'?",
          nl: "Welke kunstenaar schilderde 'Guernica'?"
        },
        options: [
          { en: "Pablo Picasso", es: "Pablo Picasso", de: "Pablo Picasso", nl: "Pablo Picasso" },
          { en: "Francisco Goya", es: "Francisco Goya", de: "Francisco Goya", nl: "Francisco Goya" },
          { en: "Diego Velázquez", es: "Diego Velázquez", de: "Diego Velázquez", nl: "Diego Velázquez" },
          { en: "El Greco", es: "El Greco", de: "El Greco", nl: "El Greco" }
        ],
        correct: 0,
        explanation: {
          en: "Pablo Picasso painted 'Guernica' in 1937 as a response to the bombing of Guernica during the Spanish Civil War. It's a powerful anti-war painting.",
          es: "Pablo Picasso pintó 'Guernica' en 1937 como respuesta al bombardeo de Guernica durante la Guerra Civil Española. Es una poderosa pintura antibélica.",
          de: "Pablo Picasso malte 'Guernica' 1937 als Reaktion auf die Bombardierung Guernicas während des Spanischen Bürgerkriegs. Es ist ein kraftvolles Anti-Kriegs-Gemälde.",
          nl: "Pablo Picasso schilderde 'Guernica' in 1937 als reactie op het bombardement op Guernica tijdens de Spaanse Burgeroorlog. Het is een krachtig anti-oorlog schilderij."
        }
      },
      {
        question: {
          en: "Which Dutch artist painted 'The Night Watch'?",
          es: "¿Qué artista holandés pintó 'La ronda de noche'?",
          de: "Welcher niederländische Künstler malte 'Die Nachtwache'?",
          nl: "Welke Nederlandse kunstenaar schilderde 'De Nachtwacht'?"
        },
        options: [
          { en: "Rembrandt van Rijn", es: "Rembrandt van Rijn", de: "Rembrandt van Rijn", nl: "Rembrandt van Rijn" },
          { en: "Johannes Vermeer", es: "Johannes Vermeer", de: "Johannes Vermeer", nl: "Johannes Vermeer" },
          { en: "Frans Hals", es: "Frans Hals", de: "Frans Hals", nl: "Frans Hals" },
          { en: "Hieronymus Bosch", es: "El Bosco", de: "Hieronymus Bosch", nl: "Jheronimus Bosch" }
        ],
        correct: 0,
        explanation: {
          en: "Rembrandt van Rijn painted 'The Night Watch' in 1642. It's his most famous painting, showing a militia company and notable for its use of light and shadow.",
          es: "Rembrandt van Rijn pintó 'La ronda de noche' en 1642. Es su pintura más famosa, mostrando una compañía de milicia y notable por su uso de luz y sombra.",
          de: "Rembrandt van Rijn malte 'Die Nachtwache' 1642. Es ist sein berühmtestes Gemälde, zeigt eine Milizenkompanie und ist bekannt für seine Licht- und Schattenführung.",
          nl: "Rembrandt van Rijn schilderde 'De Nachtwacht' in 1642. Het is zijn beroemdste schilderij, toont een schutterscompagnie en is bekend om het gebruik van licht en schaduw."
        }
      },
      {
        question: {
          en: "Which artist is known for his drip painting technique?",
          es: "¿Qué artista es conocido por su técnica de goteo?",
          de: "Welcher Künstler ist für seine Tropftechnik bekannt?",
          nl: "Welke kunstenaar staat bekend om zijn drip painting techniek?"
        },
        options: [
          { en: "Jackson Pollock", es: "Jackson Pollock", de: "Jackson Pollock", nl: "Jackson Pollock" },
          { en: "Mark Rothko", es: "Mark Rothko", de: "Mark Rothko", nl: "Mark Rothko" },
          { en: "Willem de Kooning", es: "Willem de Kooning", de: "Willem de Kooning", nl: "Willem de Kooning" },
          { en: "Barnett Newman", es: "Barnett Newman", de: "Barnett Newman", nl: "Barnett Newman" }
        ],
        correct: 0,
        explanation: {
          en: "Jackson Pollock pioneered the drip painting technique in the 1940s, creating abstract expressionist works by dripping and pouring paint onto canvases on the floor.",
          es: "Jackson Pollock fue pionero en la técnica de goteo en los años 1940, creando obras expresionistas abstractas goteando y vertiendo pintura sobre lienzos en el suelo.",
          de: "Jackson Pollock war Pionier der Tropftechnik in den 1940ern, schuf abstrakt-expressionistische Werke durch Tropfen und Gießen von Farbe auf Leinwände am Boden.",
          nl: "Jackson Pollock was pionier van de drip painting techniek in de jaren 1940, hij creëerde abstract expressionistische werken door verf te druppelen en te gieten op doeken op de vloer."
        }
      },
      {
        question: {
          en: "Who painted 'The Kiss'?",
          es: "¿Quién pintó 'El beso'?",
          de: "Wer malte 'Der Kuss'?",
          nl: "Wie schilderde 'De kus'?"
        },
        options: [
          { en: "Gustav Klimt", es: "Gustav Klimt", de: "Gustav Klimt", nl: "Gustav Klimt" },
          { en: "Egon Schiele", es: "Egon Schiele", de: "Egon Schiele", nl: "Egon Schiele" },
          { en: "Auguste Rodin", es: "Auguste Rodin", de: "Auguste Rodin", nl: "Auguste Rodin" },
          { en: "Henri de Toulouse-Lautrec", es: "Henri de Toulouse-Lautrec", de: "Henri de Toulouse-Lautrec", nl: "Henri de Toulouse-Lautrec" }
        ],
        correct: 0,
        explanation: {
          en: "Gustav Klimt painted 'The Kiss' (1907-1908) during his 'Golden Period'. The painting uses gold leaf and is an icon of Art Nouveau.",
          es: "Gustav Klimt pintó 'El beso' (1907-1908) durante su 'Período Dorado'. La pintura usa pan de oro y es un icono del Art Nouveau.",
          de: "Gustav Klimt malte 'Der Kuss' (1907-1908) während seiner 'Goldenen Periode'. Das Gemälde verwendet Blattgold und ist eine Ikone des Jugendstils.",
          nl: "Gustav Klimt schilderde 'De kus' (1907-1908) tijdens zijn 'Gouden Periode'. Het schilderij gebruikt bladgoud en is een icoon van de Art Nouveau."
        }
      },
      {
        question: {
          en: "Which artist painted himself with a bandaged ear?",
          es: "¿Qué artista se pintó a sí mismo con una oreja vendada?",
          de: "Welcher Künstler malte sich selbst mit verbundenem Ohr?",
          nl: "Welke kunstenaar schilderde zichzelf met een verbonden oor?"
        },
        options: [
          { en: "Vincent van Gogh", es: "Vincent van Gogh", de: "Vincent van Gogh", nl: "Vincent van Gogh" },
          { en: "Paul Gauguin", es: "Paul Gauguin", de: "Paul Gauguin", nl: "Paul Gauguin" },
          { en: "Henri de Toulouse-Lautrec", es: "Henri de Toulouse-Lautrec", de: "Henri de Toulouse-Lautrec", nl: "Henri de Toulouse-Lautrec" },
          { en: "Paul Cézanne", es: "Paul Cézanne", de: "Paul Cézanne", nl: "Paul Cézanne" }
        ],
        correct: 0,
        explanation: {
          en: "Vincent van Gogh painted 'Self-Portrait with Bandaged Ear' in 1889, shortly after he cut off part of his ear during a mental health crisis.",
          es: "Vincent van Gogh pintó 'Autorretrato con oreja vendada' en 1889, poco después de cortarse parte de su oreja durante una crisis de salud mental.",
          de: "Vincent van Gogh malte 'Selbstporträt mit verbundenem Ohr' 1889, kurz nachdem er sich während einer psychischen Krise einen Teil seines Ohrs abschnitt.",
          nl: "Vincent van Gogh schilderde 'Zelfportret met verbonden oor' in 1889, kort nadat hij een deel van zijn oor afsneed tijdens een psychische crisis."
        }
      },
      {
        question: {
          en: "Which artist painted 'American Gothic'?",
          es: "¿Qué artista pintó 'Gótico Americano'?",
          de: "Welcher Künstler malte 'American Gothic'?",
          nl: "Welke kunstenaar schilderde 'American Gothic'?"
        },
        options: [
          { en: "Grant Wood", es: "Grant Wood", de: "Grant Wood", nl: "Grant Wood" },
          { en: "Edward Hopper", es: "Edward Hopper", de: "Edward Hopper", nl: "Edward Hopper" },
          { en: "Norman Rockwell", es: "Norman Rockwell", de: "Norman Rockwell", nl: "Norman Rockwell" },
          { en: "Andrew Wyeth", es: "Andrew Wyeth", de: "Andrew Wyeth", nl: "Andrew Wyeth" }
        ],
        correct: 0,
        explanation: {
          en: "Grant Wood painted 'American Gothic' in 1930, depicting a farmer and his daughter standing in front of their Iowa home. It's one of the most famous American paintings.",
          es: "Grant Wood pintó 'Gótico Americano' en 1930, representando a un granjero y su hija parados frente a su hogar en Iowa. Es una de las pinturas americanas más famosas.",
          de: "Grant Wood malte 'American Gothic' 1930 und zeigt einen Farmer und seine Tochter vor ihrem Haus in Iowa. Es ist eines der berühmtesten amerikanischen Gemälde.",
          nl: "Grant Wood schilderde 'American Gothic' in 1930, waarbij hij een boer en zijn dochter toont voor hun huis in Iowa. Het is een van de beroemdste Amerikaanse schilderijen."
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