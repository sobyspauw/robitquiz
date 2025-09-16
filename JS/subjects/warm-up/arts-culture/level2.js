// Arts & Culture - Level 2: Famous Artists
(function() {
  const level2 = {
    name: {
      en: "Famous Artists",
      es: "Artistas Famosos",
      de: "Berühmte Künstler",
      nl: "Beroemde Kunstenaars"
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
          { en: "Pablo Picasso", es: "Pablo Picasso", de: "Pablo Picasso", nl: "Pablo Picasso" },
          { en: "Vincent van Gogh", es: "Vincent van Gogh", de: "Vincent van Gogh", nl: "Vincent van Gogh" },
          { en: "Claude Monet", es: "Claude Monet", de: "Claude Monet", nl: "Claude Monet" }
        ],
        correct: 0,
        explanation: {
          en: "Leonardo da Vinci painted the Mona Lisa between 1503-1519. This Renaissance masterpiece is famous for the subject's enigmatic smile and da Vinci's innovative sfumato technique, creating soft, smoky shadows.",
          es: "Leonardo da Vinci pintó la Mona Lisa entre 1503-1519. Esta obra maestra del Renacimiento es famosa por la sonrisa enigmática del sujeto y la técnica innovadora del sfumato de da Vinci, creando sombras suaves y ahumadas.",
          de: "Leonardo da Vinci malte die Mona Lisa zwischen 1503-1519. Dieses Renaissance-Meisterwerk ist berühmt für das rätselhafte Lächeln des Modells und da Vincis innovative Sfumato-Technik, die weiche, rauchige Schatten erzeugt.",
          nl: "Leonardo da Vinci schilderde de Mona Lisa tussen 1503-1519. Dit Renaissance meesterwerk is beroemd om de raadselachtige glimlach van het onderwerp en da Vinci's innovatieve sfumato techniek, die zachte, rokerige schaduwen creëert."
        }
      },
      {
        question: {
          en: "Which artist painted 'The Starry Night'?",
          es: "¿Qué artista pintó 'La Noche Estrellada'?",
          de: "Welcher Künstler malte 'Die Sternennacht'?",
          nl: "Welke kunstenaar schilderde 'De Sterrennacht'?"
        },
        options: [
          { en: "Vincent van Gogh", es: "Vincent van Gogh", de: "Vincent van Gogh", nl: "Vincent van Gogh" },
          { en: "Pablo Picasso", es: "Pablo Picasso", de: "Pablo Picasso", nl: "Pablo Picasso" },
          { en: "Andy Warhol", es: "Andy Warhol", de: "Andy Warhol", nl: "Andy Warhol" },
          { en: "Salvador Dalí", es: "Salvador Dalí", de: "Salvador Dalí", nl: "Salvador Dalí" }
        ],
        correct: 0,
        explanation: {
          en: "Vincent van Gogh painted 'The Starry Night' in 1889 while at the Saint-Paul-de-Mausole asylum. The swirling sky and vibrant colors showcase his unique Post-Impressionist style and emotional intensity.",
          es: "Vincent van Gogh pintó 'La Noche Estrellada' en 1889 mientras estaba en el asilo de Saint-Paul-de-Mausole. El cielo arremolinado y los colores vibrantes muestran su estilo postimpresionista único e intensidad emocional.",
          de: "Vincent van Gogh malte 'Die Sternennacht' 1889 während seines Aufenthalts im Asyl Saint-Paul-de-Mausole. Der wirbelnde Himmel und die lebendigen Farben zeigen seinen einzigartigen postimpressionistischen Stil und emotionale Intensität.",
          nl: "Vincent van Gogh schilderde 'De Sterrennacht' in 1889 tijdens zijn verblijf in het Saint-Paul-de-Mausole asiel. De wervelende hemel en levendige kleuren tonen zijn unieke Post-Impressionistische stijl en emotionele intensiteit."
        }
      },
      {
        question: {
          en: "Who created colorful soup can paintings?",
          es: "¿Quién creó pinturas coloridas de latas de sopa?",
          de: "Wer schuf bunte Suppendosen-Gemälde?",
          nl: "Wie maakte kleurrijke soepblik schilderijen?"
        },
        options: [
          { en: "Andy Warhol", es: "Andy Warhol", de: "Andy Warhol", nl: "Andy Warhol" },
          { en: "Jackson Pollock", es: "Jackson Pollock", de: "Jackson Pollock", nl: "Jackson Pollock" },
          { en: "Claude Monet", es: "Claude Monet", de: "Claude Monet", nl: "Claude Monet" },
          { en: "Georgia O'Keeffe", es: "Georgia O'Keeffe", de: "Georgia O'Keeffe", nl: "Georgia O'Keeffe" }
        ],
        correct: 0,
        explanation: {
          en: "Andy Warhol created the famous Campbell's Soup Cans series in 1962, becoming an icon of Pop Art. He transformed everyday consumer products into fine art, challenging traditional notions of what art could be.",
          es: "Andy Warhol creó la famosa serie de Latas de Sopa Campbell's en 1962, convirtiéndose en un ícono del Arte Pop. Transformó productos de consumo cotidianos en arte fino, desafiando las nociones tradicionales de lo que podía ser el arte.",
          de: "Andy Warhol schuf 1962 die berühmte Campbell's Suppendosen-Serie und wurde zu einer Ikone der Pop Art. Er verwandelte alltägliche Konsumprodukte in bildende Kunst und stellte traditionelle Vorstellungen davon in Frage, was Kunst sein könnte.",
          nl: "Andy Warhol creëerde de beroemde Campbell's Soepblikken serie in 1962, en werd een icoon van Pop Art. Hij transformeerde alledaagse consumentenproducten tot beeldende kunst, en daagde traditionele opvattingen over wat kunst kon zijn uit."
        }
      },
      {
        question: {
          en: "Which artist is famous for painting sunflowers?",
          es: "¿Qué artista es famoso por pintar girasoles?",
          de: "Welcher Künstler ist berühmt für Sonnenblumen-Gemälde?",
          nl: "Welke kunstenaar is beroemd om het schilderen van zonnebloemen?"
        },
        options: [
          { en: "Vincent van Gogh", es: "Vincent van Gogh", de: "Vincent van Gogh", nl: "Vincent van Gogh" },
          { en: "Pablo Picasso", es: "Pablo Picasso", de: "Pablo Picasso", nl: "Pablo Picasso" },
          { en: "Henri Matisse", es: "Henri Matisse", de: "Henri Matisse", nl: "Henri Matisse" },
          { en: "Paul Cézanne", es: "Paul Cézanne", de: "Paul Cézanne", nl: "Paul Cézanne" }
        ],
        correct: 0,
        explanation: {
          en: "Vincent van Gogh painted several sunflower series between 1888-1889. These vibrant yellow paintings symbolized friendship and joy, with thick impasto brushstrokes that became his signature style.",
          es: "Vincent van Gogh pintó varias series de girasoles entre 1888-1889. Estas pinturas amarillas vibrantes simbolizaban amistad y alegría, con pinceladas espesas de impasto que se convirtieron en su estilo característico.",
          de: "Vincent van Gogh malte zwischen 1888-1889 mehrere Sonnenblumen-Serien. Diese lebendigen gelben Gemälde symbolisierten Freundschaft und Freude, mit dicken Impasto-Pinselstrichen, die zu seinem charakteristischen Stil wurden.",
          nl: "Vincent van Gogh schilderde verschillende zonnebloem series tussen 1888-1889. Deze levendige gele schilderijen symboliseerden vriendschap en vreugde, met dikke impasto kwaststreken die zijn kenmerkende stijl werden."
        }
      },
      {
        question: {
          en: "Who painted 'Girl with a Pearl Earring'?",
          es: "¿Quién pintó 'La Joven de la Perla'?",
          de: "Wer malte 'Mädchen mit dem Perlenohrring'?",
          nl: "Wie schilderde 'Meisje met de Parel'?"
        },
        options: [
          { en: "Johannes Vermeer", es: "Johannes Vermeer", de: "Johannes Vermeer", nl: "Johannes Vermeer" },
          { en: "Rembrandt", es: "Rembrandt", de: "Rembrandt", nl: "Rembrandt" },
          { en: "Frida Kahlo", es: "Frida Kahlo", de: "Frida Kahlo", nl: "Frida Kahlo" },
          { en: "Mary Cassatt", es: "Mary Cassatt", de: "Mary Cassatt", nl: "Mary Cassatt" }
        ],
        correct: 0,
        explanation: {
          en: "Johannes Vermeer painted 'Girl with a Pearl Earring' around 1665. This Dutch Baroque masterpiece is renowned for its mysterious subject, luminous pearl, and Vermeer's masterful use of light and color.",
          es: "Johannes Vermeer pintó 'La Joven de la Perla' alrededor de 1665. Esta obra maestra del Barroco holandés es famosa por su sujeto misterioso, perla luminosa y el uso magistral de la luz y el color de Vermeer.",
          de: "Johannes Vermeer malte 'Mädchen mit dem Perlenohrring' um 1665. Dieses niederländische Barock-Meisterwerk ist berühmt für sein geheimnisvolles Modell, die leuchtende Perle und Vermeers meisterhafte Verwendung von Licht und Farbe.",
          nl: "Johannes Vermeer schilderde 'Meisje met de Parel' rond 1665. Dit Nederlandse Barok meesterwerk is beroemd om zijn mysterieuze onderwerp, lumineuze parel en Vermeer's meesterlijke gebruik van licht en kleur."
        }
      },
      {
        question: {
          en: "Which artist created the sculpture 'The Thinker'?",
          es: "¿Qué artista creó la escultura 'El Pensador'?",
          de: "Welcher Künstler schuf die Skulptur 'Der Denker'?",
          nl: "Welke kunstenaar creëerde het beeldhouwwerk 'De Denker'?"
        },
        options: [
          { en: "Auguste Rodin", es: "Auguste Rodin", de: "Auguste Rodin", nl: "Auguste Rodin" },
          { en: "Michelangelo", es: "Michelangelo", de: "Michelangelo", nl: "Michelangelo" },
          { en: "Leonardo da Vinci", es: "Leonardo da Vinci", de: "Leonardo da Vinci", nl: "Leonardo da Vinci" },
          { en: "Pablo Picasso", es: "Pablo Picasso", de: "Pablo Picasso", nl: "Pablo Picasso" }
        ],
        correct: 0,
        explanation: {
          en: "Auguste Rodin created 'The Thinker' in 1904. Originally part of 'The Gates of Hell', this bronze sculpture represents deep contemplation and has become one of the most recognizable sculptures in the world.",
          es: "Auguste Rodin creó 'El Pensador' en 1904. Originalmente parte de 'Las Puertas del Infierno', esta escultura de bronce representa contemplación profunda y se ha convertido en una de las esculturas más reconocibles del mundo.",
          de: "Auguste Rodin schuf 'Der Denker' 1904. Ursprünglich Teil von 'Das Höllentor', repräsentiert diese Bronzeskulptur tiefe Kontemplation und ist zu einer der bekanntesten Skulpturen der Welt geworden.",
          nl: "Auguste Rodin creëerde 'De Denker' in 1904. Oorspronkelijk onderdeel van 'De Poorten van de Hel', vertegenwoordigt dit bronzen beeld diepe contemplatie en is een van de meest herkenbare sculpturen ter wereld geworden."
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
          { en: "Michelangelo", es: "Michelangelo", de: "Michelangelo", nl: "Michelangelo" },
          { en: "Raphael", es: "Rafael", de: "Raffael", nl: "Raphaël" },
          { en: "Donatello", es: "Donatello", de: "Donatello", nl: "Donatello" },
          { en: "Botticelli", es: "Botticelli", de: "Botticelli", nl: "Botticelli" }
        ],
        correct: 0,
        explanation: {
          en: "Michelangelo painted the Sistine Chapel ceiling between 1508-1512. This Renaissance masterpiece contains over 300 figures including the famous 'Creation of Adam' scene, showcasing his mastery of human anatomy.",
          es: "Michelangelo pintó el techo de la Capilla Sixtina entre 1508-1512. Esta obra maestra del Renacimiento contiene más de 300 figuras incluyendo la famosa escena de 'La Creación de Adán', mostrando su maestría de la anatomía humana.",
          de: "Michelangelo malte die Decke der Sixtinischen Kapelle zwischen 1508-1512. Dieses Renaissance-Meisterwerk enthält über 300 Figuren, einschließlich der berühmten Szene 'Die Erschaffung Adams', die seine Meisterschaft der menschlichen Anatomie zeigt.",
          nl: "Michelangelo schilderde het plafond van de Sixtijnse Kapel tussen 1508-1512. Dit Renaissance meesterwerk bevat meer dan 300 figuren inclusief de beroemde 'Schepping van Adam' scène, die zijn meesterschap van menselijke anatomie toont."
        }
      },
      {
        question: {
          en: "Which artist painted water lilies?",
          es: "¿Qué artista pintó nenúfares?",
          de: "Welcher Künstler malte Seerosen?",
          nl: "Welke kunstenaar schilderde waterlelies?"
        },
        options: [
          { en: "Claude Monet", es: "Claude Monet", de: "Claude Monet", nl: "Claude Monet" },
          { en: "Edgar Degas", es: "Edgar Degas", de: "Edgar Degas", nl: "Edgar Degas" },
          { en: "Pierre-Auguste Renoir", es: "Pierre-Auguste Renoir", de: "Pierre-Auguste Renoir", nl: "Pierre-Auguste Renoir" },
          { en: "Paul Gauguin", es: "Paul Gauguin", de: "Paul Gauguin", nl: "Paul Gauguin" }
        ],
        correct: 0,
        explanation: {
          en: "Claude Monet painted numerous water lily series from 1897-1926 in his garden at Giverny. These Impressionist masterpieces capture changing light and reflections, revolutionizing landscape painting.",
          es: "Claude Monet pintó numerosas series de nenúfares desde 1897-1926 en su jardín en Giverny. Estas obras maestras impresionistas capturan la luz cambiante y reflejos, revolucionando la pintura de paisaje.",
          de: "Claude Monet malte von 1897-1926 zahlreiche Seerosen-Serien in seinem Garten in Giverny. Diese impressionistischen Meisterwerke erfassen wechselndes Licht und Reflexionen und revolutionierten die Landschaftsmalerei.",
          nl: "Claude Monet schilderde talrijke waterlelie series van 1897-1926 in zijn tuin in Giverny. Deze Impressionistische meesterwerken vangen veranderend licht en reflecties, en revolutioneerden landschapsschilderkunst."
        }
      },
      {
        question: {
          en: "Who created colorful paintings with geometric shapes?",
          es: "¿Quién creó pinturas coloridas con formas geométricas?",
          de: "Wer schuf bunte Gemälde mit geometrischen Formen?",
          nl: "Wie maakte kleurrijke schilderijen met geometrische vormen?"
        },
        options: [
          { en: "Wassily Kandinsky", es: "Wassily Kandinsky", de: "Wassily Kandinsky", nl: "Wassily Kandinsky" },
          { en: "Paul Klee", es: "Paul Klee", de: "Paul Klee", nl: "Paul Klee" },
          { en: "Joan Miró", es: "Joan Miró", de: "Joan Miró", nl: "Joan Miró" },
          { en: "Mark Rothko", es: "Mark Rothko", de: "Mark Rothko", nl: "Mark Rothko" }
        ],
        correct: 0,
        explanation: {
          en: "Wassily Kandinsky is credited as the pioneer of abstract art, creating colorful geometric compositions from 1910 onwards. His theoretical writings on color and form influenced the entire abstract art movement.",
          es: "Wassily Kandinsky es considerado el pionero del arte abstracto, creando composiciones geométricas coloridas desde 1910 en adelante. Sus escritos teóricos sobre color y forma influyeron en todo el movimiento de arte abstracto.",
          de: "Wassily Kandinsky gilt als Pionier der abstrakten Kunst und schuf ab 1910 farbenfrohe geometrische Kompositionen. Seine theoretischen Schriften über Farbe und Form beeinflussten die gesamte abstrakte Kunstbewegung.",
          nl: "Wassily Kandinsky wordt beschouwd als de pionier van abstracte kunst, en creëerde kleurrijke geometrische composities vanaf 1910. Zijn theoretische geschriften over kleur en vorm beïnvloedden de hele abstracte kunstbeweging."
        }
      },
      {
        question: {
          en: "Which artist painted 'The Scream'?",
          es: "¿Qué artista pintó 'El Grito'?",
          de: "Welcher Künstler malte 'Der Schrei'?",
          nl: "Welke kunstenaar schilderde 'De Schreeuw'?"
        },
        options: [
          { en: "Edvard Munch", es: "Edvard Munch", de: "Edvard Munch", nl: "Edvard Munch" },
          { en: "Gustav Klimt", es: "Gustav Klimt", de: "Gustav Klimt", nl: "Gustav Klimt" },
          { en: "Egon Schiele", es: "Egon Schiele", de: "Egon Schiele", nl: "Egon Schiele" },
          { en: "Ernst Ludwig Kirchner", es: "Ernst Ludwig Kirchner", de: "Ernst Ludwig Kirchner", nl: "Ernst Ludwig Kirchner" }
        ],
        correct: 0,
        explanation: {
          en: "Edvard Munch painted 'The Scream' in 1893. This Expressionist masterpiece conveys anxiety and existential angst, becoming a universal symbol of human anxiety in modern times.",
          es: "Edvard Munch pintó 'El Grito' en 1893. Esta obra maestra expresionista transmite ansiedad y angustia existencial, convirtiéndose en un símbolo universal de la ansiedad humana en los tiempos modernos.",
          de: "Edvard Munch malte 'Der Schrei' 1893. Dieses expressionistische Meisterwerk vermittelt Angst und existenzielle Qual und wurde zu einem universellen Symbol menschlicher Angst in der Moderne.",
          nl: "Edvard Munch schilderde 'De Schreeuw' in 1893. Dit Expressionistische meesterwerk brengt angst en existentiële angst over, en werd een universeel symbool van menselijke angst in moderne tijden."
        }
      },
      {
        question: {
          en: "Who painted many self-portraits with flowers in her hair?",
          es: "¿Quién pintó muchos autorretratos con flores en el cabello?",
          de: "Wer malte viele Selbstporträts mit Blumen im Haar?",
          nl: "Wie schilderde veel zelfportretten met bloemen in haar haar?"
        },
        options: [
          { en: "Frida Kahlo", es: "Frida Kahlo", de: "Frida Kahlo", nl: "Frida Kahlo" },
          { en: "Georgia O'Keeffe", es: "Georgia O'Keeffe", de: "Georgia O'Keeffe", nl: "Georgia O'Keeffe" },
          { en: "Mary Cassatt", es: "Mary Cassatt", de: "Mary Cassatt", nl: "Mary Cassatt" },
          { en: "Berthe Morisot", es: "Berthe Morisot", de: "Berthe Morisot", nl: "Berthe Morisot" }
        ],
        correct: 0,
        explanation: {
          en: "Frida Kahlo painted numerous self-portraits featuring flowers in her hair, reflecting her Mexican heritage and connection to nature. Her powerful works explored identity, pain, and cultural pride through vivid symbolism.",
          es: "Frida Kahlo pintó numerosos autorretratos con flores en el cabello, reflejando su herencia mexicana y conexión con la naturaleza. Sus obras poderosas exploraron identidad, dolor y orgullo cultural a través de simbolismo vívido.",
          de: "Frida Kahlo malte zahlreiche Selbstporträts mit Blumen im Haar, die ihr mexikanisches Erbe und ihre Verbindung zur Natur widerspiegeln. Ihre kraftvollen Werke erforschten Identität, Schmerz und kulturellen Stolz durch lebendige Symbolik.",
          nl: "Frida Kahlo schilderde talrijke zelfportretten met bloemen in haar haar, die haar Mexicaanse erfgoed en verbinding met de natuur weerspiegelden. Haar krachtige werken verkenden identiteit, pijn en culturele trots door levendige symboliek."
        }
      },
      {
        question: {
          en: "Which artist made paintings by dripping paint?",
          es: "¿Qué artista hizo pinturas goteando pintura?",
          de: "Welcher Künstler machte Gemälde durch Farbtropfen?",
          nl: "Welke kunstenaar maakte schilderijen door verf te druppelen?"
        },
        options: [
          { en: "Jackson Pollock", es: "Jackson Pollock", de: "Jackson Pollock", nl: "Jackson Pollock" },
          { en: "Willem de Kooning", es: "Willem de Kooning", de: "Willem de Kooning", nl: "Willem de Kooning" },
          { en: "Mark Rothko", es: "Mark Rothko", de: "Mark Rothko", nl: "Mark Rothko" },
          { en: "Barnett Newman", es: "Barnett Newman", de: "Barnett Newman", nl: "Barnett Newman" }
        ],
        correct: 0,
        explanation: {
          en: "Jackson Pollock pioneered the drip painting technique in the 1940s-50s, creating Abstract Expressionist masterpieces by rhythmically dripping and splattering paint across large canvases laid on the floor.",
          es: "Jackson Pollock fue pionero de la técnica de pintura por goteo en los años 1940-50, creando obras maestras expresionistas abstractas goteando y salpicando pintura rítmicamente sobre grandes lienzos colocados en el suelo.",
          de: "Jackson Pollock war ein Pionier der Tropfmaltechnik in den 1940er-50er Jahren und schuf abstrakt-expressionistische Meisterwerke, indem er rhythmisch Farbe auf große, auf dem Boden liegende Leinwände tropfte und spritzte.",
          nl: "Jackson Pollock was een pionier van de druppelschildertechniek in de jaren 1940-50, en creëerde Abstract Expressionistische meesterwerken door ritmisch verf te druppelen en spatten over grote canvassen die op de vloer lagen."
        }
      },
      {
        question: {
          en: "Who painted 'American Gothic'?",
          es: "¿Quién pintó 'Gótico Americano'?",
          de: "Wer malte 'American Gothic'?",
          nl: "Wie schilderde 'American Gothic'?"
        },
        options: [
          { en: "Grant Wood", es: "Grant Wood", de: "Grant Wood", nl: "Grant Wood" },
          { en: "Edward Hopper", es: "Edward Hopper", de: "Edward Hopper", nl: "Edward Hopper" },
          { en: "Norman Rockwell", es: "Norman Rockwell", de: "Norman Rockwell", nl: "Norman Rockwell" },
          { en: "Andrew Wyeth", es: "Andrew Wyeth", de: "Andrew Wyeth", nl: "Andrew Wyeth" }
        ],
        correct: 0,
        explanation: {
          en: "Grant Wood painted 'American Gothic' in 1930, depicting a farmer and his daughter in front of their Iowa home. This iconic painting represents rural American values and has become a symbol of Midwest culture.",
          es: "Grant Wood pintó 'Gótico Americano' en 1930, representando a un granjero y su hija frente a su hogar en Iowa. Esta pintura icónica representa los valores rurales americanos y se ha convertido en un símbolo de la cultura del Medio Oeste.",
          de: "Grant Wood malte 'American Gothic' 1930 und zeigt einen Farmer und seine Tochter vor ihrem Haus in Iowa. Dieses ikonische Gemälde repräsentiert ländliche amerikanische Werte und ist zu einem Symbol der Midwest-Kultur geworden.",
          nl: "Grant Wood schilderde 'American Gothic' in 1930, met een boer en zijn dochter voor hun huis in Iowa. Dit iconische schilderij vertegenwoordigt landelijke Amerikaanse waarden en is een symbool van Midwest cultuur geworden."
        }
      },
      {
        question: {
          en: "Which artist created the statue of David?",
          es: "¿Qué artista creó la estatua de David?",
          de: "Welcher Künstler schuf die Statue von David?",
          nl: "Welke kunstenaar creëerde het standbeeld van David?"
        },
        options: [
          { en: "Michelangelo", es: "Michelangelo", de: "Michelangelo", nl: "Michelangelo" },
          { en: "Donatello", es: "Donatello", de: "Donatello", nl: "Donatello" },
          { en: "Bernini", es: "Bernini", de: "Bernini", nl: "Bernini" },
          { en: "Rodin", es: "Rodin", de: "Rodin", nl: "Rodin" }
        ],
        correct: 0,
        explanation: {
          en: "Michelangelo carved the statue of David from 1501-1504. This 17-foot tall marble masterpiece depicts the biblical hero before his battle with Goliath, symbolizing the Renaissance ideals of human strength and beauty.",
          es: "Michelangelo talló la estatua de David de 1501-1504. Esta obra maestra de mármol de 17 pies de altura representa al héroe bíblico antes de su batalla con Goliat, simbolizando los ideales renacentistas de fuerza y belleza humanas.",
          de: "Michelangelo schnitzte die Statue von David von 1501-1504. Dieses 17 Fuß hohe Marmormeisterwerk zeigt den biblischen Helden vor seinem Kampf mit Goliath und symbolisiert die Renaissance-Ideale menschlicher Stärke und Schönheit.",
          nl: "Michelangelo beeldhouwde het standbeeld van David van 1501-1504. Dit 17 voet hoge marmeren meesterwerk toont de bijbelse held voor zijn gevecht met Goliath, en symboliseert de Renaissance idealen van menselijke kracht en schoonheid."
        }
      },
      {
        question: {
          en: "Who painted dancers in tutus?",
          es: "¿Quién pintó bailarinas en tutús?",
          de: "Wer malte Tänzerinnen in Tutus?",
          nl: "Wie schilderde dansers in tutu's?"
        },
        options: [
          { en: "Edgar Degas", es: "Edgar Degas", de: "Edgar Degas", nl: "Edgar Degas" },
          { en: "Henri de Toulouse-Lautrec", es: "Henri de Toulouse-Lautrec", de: "Henri de Toulouse-Lautrec", nl: "Henri de Toulouse-Lautrec" },
          { en: "Auguste Renoir", es: "Auguste Renoir", de: "Auguste Renoir", nl: "Auguste Renoir" },
          { en: "Camille Pissarro", es: "Camille Pissarro", de: "Camille Pissarro", nl: "Camille Pissarro" }
        ],
        correct: 0,
        explanation: {
          en: "Edgar Degas painted countless dancers in tutus, capturing ballet rehearsals and performances. His Impressionist works revealed the hard work and grace of dancers, often showing them in candid, behind-the-scenes moments.",
          es: "Edgar Degas pintó innumerables bailarinas en tutús, capturando ensayos y actuaciones de ballet. Sus obras impresionistas revelaron el trabajo duro y la gracia de las bailarinas, a menudo mostrándolas en momentos cándidos tras bambalinas.",
          de: "Edgar Degas malte unzählige Tänzerinnen in Tutus und fing Ballettproben und Aufführungen ein. Seine impressionistischen Werke offenbarten die harte Arbeit und Anmut der Tänzerinnen, oft in ehrlichen Momenten hinter den Kulissen.",
          nl: "Edgar Degas schilderde talloze dansers in tutu's, en ving balletrepetities en voorstellingen. Zijn Impressionistische werken toonden het harde werk en de gratie van dansers, vaak in openhartige, achter-de-schermen momenten."
        }
      },
      {
        question: {
          en: "Which artist painted large flowers close-up?",
          es: "¿Qué artista pintó flores grandes de cerca?",
          de: "Welcher Künstler malte große Blumen in Nahaufnahme?",
          nl: "Welke kunstenaar schilderde grote bloemen van dichtbij?"
        },
        options: [
          { en: "Georgia O'Keeffe", es: "Georgia O'Keeffe", de: "Georgia O'Keeffe", nl: "Georgia O'Keeffe" },
          { en: "Mary Cassatt", es: "Mary Cassatt", de: "Mary Cassatt", nl: "Mary Cassatt" },
          { en: "Helen Frankenthaler", es: "Helen Frankenthaler", de: "Helen Frankenthaler", nl: "Helen Frankenthaler" },
          { en: "Lee Krasner", es: "Lee Krasner", de: "Lee Krasner", nl: "Lee Krasner" }
        ],
        correct: 0,
        explanation: {
          en: "Georgia O'Keeffe painted large, close-up flower paintings from the 1920s-1960s. Her magnified blooms revealed intricate details and abstract beauty, becoming iconic symbols of American modernism and female artistic perspective.",
          es: "Georgia O'Keeffe pintó flores grandes y de cerca desde los años 1920-1960. Sus flores magnificadas revelaron detalles intrincados y belleza abstracta, convirtiéndose en símbolos icónicos del modernismo americano y la perspectiva artística femenina.",
          de: "Georgia O'Keeffe malte von den 1920er-1960er Jahren große, nahaufnahme Blumengemälde. Ihre vergrößerten Blüten offenbarten komplizierte Details und abstrakte Schönheit und wurden zu ikonischen Symbolen des amerikanischen Modernismus und der weiblichen künstlerischen Perspektive.",
          nl: "Georgia O'Keeffe schilderde grote, close-up bloemenschilderijen van de jaren 1920-1960. Haar vergrote bloemen toonden ingewikkelde details en abstracte schoonheid, en werden iconische symbolen van Amerikaans modernisme en vrouwelijk artistiek perspectief."
        }
      },
      {
        question: {
          en: "Who created melting clocks in paintings?",
          es: "¿Quién creó relojes derritiéndose en pinturas?",
          de: "Wer schuf schmelzende Uhren in Gemälden?",
          nl: "Wie creëerde smeltende klokken in schilderijen?"
        },
        options: [
          { en: "Salvador Dalí", es: "Salvador Dalí", de: "Salvador Dalí", nl: "Salvador Dalí" },
          { en: "René Magritte", es: "René Magritte", de: "René Magritte", nl: "René Magritte" },
          { en: "Max Ernst", es: "Max Ernst", de: "Max Ernst", nl: "Max Ernst" },
          { en: "Joan Miró", es: "Joan Miró", de: "Joan Miró", nl: "Joan Miró" }
        ],
        correct: 0,
        explanation: {
          en: "Salvador Dalí painted 'The Persistence of Memory' (melting clocks) in 1931. This Surrealist masterpiece explores the relativity of time and the subconscious mind, becoming one of the most recognizable images in art history.",
          es: "Salvador Dalí pintó 'La Persistencia de la Memoria' (relojes derritiéndose) en 1931. Esta obra maestra surrealista explora la relatividad del tiempo y la mente subconsciente, convirtiéndose en una de las imágenes más reconocibles en la historia del arte.",
          de: "Salvador Dalí malte 1931 'Die Beständigkeit der Erinnerung' (schmelzende Uhren). Dieses surrealistische Meisterwerk erforscht die Relativität der Zeit und das Unterbewusstsein und wurde zu einem der bekanntesten Bilder der Kunstgeschichte.",
          nl: "Salvador Dalí schilderde 'De Volharding der Herinnering' (smeltende klokken) in 1931. Dit Surrealistische meesterwerk verkent de relativiteit van tijd en het onderbewustzijn, en werd een van de meest herkenbare beelden in de kunstgeschiedenis."
        }
      },
      {
        question: {
          en: "Which artist painted 'The Birth of Venus'?",
          es: "¿Qué artista pintó 'El Nacimiento de Venus'?",
          de: "Welcher Künstler malte 'Die Geburt der Venus'?",
          nl: "Welke kunstenaar schilderde 'De Geboorte van Venus'?"
        },
        options: [
          { en: "Sandro Botticelli", es: "Sandro Botticelli", de: "Sandro Botticelli", nl: "Sandro Botticelli" },
          { en: "Titian", es: "Tiziano", de: "Tizian", nl: "Titiaan" },
          { en: "Raphael", es: "Rafael", de: "Raffael", nl: "Raphaël" },
          { en: "Caravaggio", es: "Caravaggio", de: "Caravaggio", nl: "Caravaggio" }
        ],
        correct: 0,
        explanation: {
          en: "Sandro Botticelli painted 'The Birth of Venus' around 1484-1486. This Renaissance masterpiece depicts the goddess Venus emerging from the sea, symbolizing divine love and representing the ideals of beauty and Neo-Platonic philosophy.",
          es: "Sandro Botticelli pintó 'El Nacimiento de Venus' alrededor de 1484-1486. Esta obra maestra del Renacimiento representa a la diosa Venus emergiendo del mar, simbolizando el amor divino y representando los ideales de belleza y filosofía neoplatónica.",
          de: "Sandro Botticelli malte 'Die Geburt der Venus' um 1484-1486. Dieses Renaissance-Meisterwerk zeigt die Göttin Venus, die aus dem Meer auftaucht, symbolisiert göttliche Liebe und repräsentiert die Ideale von Schönheit und neuplatonischer Philosophie.",
          nl: "Sandro Botticelli schilderde 'De Geboorte van Venus' rond 1484-1486. Dit Renaissance meesterwerk toont de godin Venus die uit de zee komt, symboliseert goddelijke liefde en vertegenwoordigt de idealen van schoonheid en Neo-Platonische filosofie."
        }
      },
      {
        question: {
          en: "Who painted 'The Night Watch'?",
          es: "¿Quién pintó 'La Ronda de Noche'?",
          de: "Wer malte 'Die Nachtwache'?",
          nl: "Wie schilderde 'De Nachtwacht'?"
        },
        options: [
          { en: "Rembrandt", es: "Rembrandt", de: "Rembrandt", nl: "Rembrandt" },
          { en: "Johannes Vermeer", es: "Johannes Vermeer", de: "Johannes Vermeer", nl: "Johannes Vermeer" },
          { en: "Frans Hals", es: "Frans Hals", de: "Frans Hals", nl: "Frans Hals" },
          { en: "Jan van Eyck", es: "Jan van Eyck", de: "Jan van Eyck", nl: "Jan van Eyck" }
        ],
        correct: 0,
        explanation: {
          en: "Rembrandt painted 'The Night Watch' in 1642. This Dutch Golden Age masterpiece showcases his mastery of light and shadow (chiaroscuro) and depicts a militia company in dramatic action, revolutionizing group portraiture.",
          es: "Rembrandt pintó 'La Ronda de Noche' en 1642. Esta obra maestra de la Edad de Oro holandesa muestra su maestría de la luz y la sombra (claroscuro) y representa a una compañía de milicia en acción dramática, revolucionando el retrato grupal.",
          de: "Rembrandt malte 'Die Nachtwache' 1642. Dieses Meisterwerk des niederländischen Goldenen Zeitalters zeigt seine Meisterschaft von Licht und Schatten (Chiaroscuro) und stellt eine Miliz-Kompanie in dramatischer Aktion dar, was die Gruppenporträtmalerei revolutionierte.",
          nl: "Rembrandt schilderde 'De Nachtwacht' in 1642. Dit Nederlandse Gouden Eeuw meesterwerk toont zijn meesterschap van licht en schaduw (chiaroscuro) en toont een schutterscompagnie in dramatische actie, wat groepsportretten revolutioneerde."
        }
      },
      {
        question: {
          en: "Which artist created colorful cut-out artworks?",
          es: "¿Qué artista creó obras de arte de recortes coloridos?",
          de: "Welcher Künstler schuf bunte Ausschnitt-Kunstwerke?",
          nl: "Welke kunstenaar creëerde kleurrijke uitgesneden kunstwerken?"
        },
        options: [
          { en: "Henri Matisse", es: "Henri Matisse", de: "Henri Matisse", nl: "Henri Matisse" },
          { en: "Paul Klee", es: "Paul Klee", de: "Paul Klee", nl: "Paul Klee" },
          { en: "Piet Mondrian", es: "Piet Mondrian", de: "Piet Mondrian", nl: "Piet Mondriaan" },
          { en: "Wassily Kandinsky", es: "Wassily Kandinsky", de: "Wassily Kandinsky", nl: "Wassily Kandinsky" }
        ],
        correct: 0,
        explanation: {
          en: "Henri Matisse created colorful cut-out artworks, especially in his later years due to illness. His 'paper cuts' or 'drawing with scissors' technique produced vibrant compositions like 'The Snail', showcasing his mastery of color and form.",
          es: "Henri Matisse creó obras de arte de recortes coloridos, especialmente en sus últimos años debido a la enfermedad. Su técnica de 'recortes de papel' o 'dibujar con tijeras' produjo composiciones vibrantes como 'El Caracol', mostrando su maestría del color y la forma.",
          de: "Henri Matisse schuf bunte Ausschnitt-Kunstwerke, besonders in seinen späteren Jahren aufgrund von Krankheit. Seine 'Papierschnitte' oder 'Zeichnen mit der Schere' Technik produzierte lebendige Kompositionen wie 'Die Schnecke', die seine Meisterschaft von Farbe und Form zeigen.",
          nl: "Henri Matisse creëerde kleurrijke uitgesneden kunstwerken, vooral in zijn latere jaren vanwege ziekte. Zijn 'papier knipsels' of 'tekenen met scharen' techniek produceerde levendige composities zoals 'De Slak', die zijn meesterschap van kleur en vorm toont."
        }
      },
      {
        question: {
          en: "Who painted many pictures of haystacks?",
          es: "¿Quién pintó muchas imágenes de pajares?",
          de: "Wer malte viele Bilder von Heuhaufen?",
          nl: "Wie schilderde veel afbeeldingen van hooibergen?"
        },
        options: [
          { en: "Claude Monet", es: "Claude Monet", de: "Claude Monet", nl: "Claude Monet" },
          { en: "Paul Cézanne", es: "Paul Cézanne", de: "Paul Cézanne", nl: "Paul Cézanne" },
          { en: "Camille Pissarro", es: "Camille Pissarro", de: "Camille Pissarro", nl: "Camille Pissarro" },
          { en: "Alfred Sisley", es: "Alfred Sisley", de: "Alfred Sisley", nl: "Alfred Sisley" }
        ],
        correct: 0,
        explanation: {
          en: "Claude Monet painted multiple haystack series (1890-1891) to capture changing light conditions throughout different times of day and seasons. These Impressionist works demonstrated how light transforms our perception of the same subject.",
          es: "Claude Monet pintó múltiples series de pajares (1890-1891) para capturar las condiciones cambiantes de luz durante diferentes momentos del día y estaciones. Estas obras impresionistas demostraron cómo la luz transforma nuestra percepción del mismo sujeto.",
          de: "Claude Monet malte mehrere Heuhaufen-Serien (1890-1891), um wechselnde Lichtverhältnisse zu verschiedenen Tageszeiten und Jahreszeiten einzufangen. Diese impressionistischen Werke zeigten, wie Licht unsere Wahrnehmung desselben Motivs verändert.",
          nl: "Claude Monet schilderde meerdere hooiberg series (1890-1891) om veranderende lichtomstandigheden tijdens verschillende tijden van de dag en seizoenen vast te leggen. Deze Impressionistische werken toonden hoe licht onze perceptie van hetzelfde onderwerp transformeert."
        }
      },
      {
        question: {
          en: "Which artist painted using only squares and rectangles?",
          es: "¿Qué artista pintó usando solo cuadrados y rectángulos?",
          de: "Welcher Künstler malte nur mit Quadraten und Rechtecken?",
          nl: "Welke kunstenaar schilderde met alleen vierkanten en rechthoeken?"
        },
        options: [
          { en: "Piet Mondrian", es: "Piet Mondrian", de: "Piet Mondrian", nl: "Piet Mondriaan" },
          { en: "Kazimir Malevich", es: "Kazimir Malevich", de: "Kasimir Malewitsch", nl: "Kazimir Malevitsj" },
          { en: "Paul Klee", es: "Paul Klee", de: "Paul Klee", nl: "Paul Klee" },
          { en: "Josef Albers", es: "Josef Albers", de: "Josef Albers", nl: "Josef Albers" }
        ],
        correct: 0,
        explanation: {
          en: "Piet Mondrian developed his signature style using only horizontal and vertical lines with primary colors plus black and white. His geometric abstractions like 'Composition with Red Blue and Yellow' influenced modern design and architecture.",
          es: "Piet Mondrian desarrolló su estilo característico usando solo líneas horizontales y verticales con colores primarios más blanco y negro. Sus abstracciones geométricas como 'Composición con Rojo Azul y Amarillo' influenciaron el diseño moderno y la arquitectura.",
          de: "Piet Mondrian entwickelte seinen charakteristischen Stil mit nur horizontalen und vertikalen Linien mit Primärfarben plus Schwarz und Weiß. Seine geometrischen Abstraktionen wie 'Komposition mit Rot Blau und Gelb' beeinflussten modernes Design und Architektur.",
          nl: "Piet Mondriaan ontwikkelde zijn kenmerkende stijl met alleen horizontale en verticale lijnen met primaire kleuren plus zwart en wit. Zijn geometrische abstracties zoals 'Compositie met Rood Blauw en Geel' beïnvloedden modern ontwerp en architectuur."
        }
      },
      {
        question: {
          en: "Who painted 'The Great Wave'?",
          es: "¿Quién pintó 'La Gran Ola'?",
          de: "Wer malte 'Die große Welle'?",
          nl: "Wie schilderde 'De Grote Golf'?"
        },
        options: [
          { en: "Hokusai", es: "Hokusai", de: "Hokusai", nl: "Hokusai" },
          { en: "Hiroshige", es: "Hiroshige", de: "Hiroshige", nl: "Hiroshige" },
          { en: "Utamaro", es: "Utamaro", de: "Utamaro", nl: "Utamaro" },
          { en: "Sharaku", es: "Sharaku", de: "Sharaku", nl: "Sharaku" }
        ],
        correct: 0,
        explanation: {
          en: "Hokusai created 'The Great Wave off Kanagawa' around 1831. This iconic Japanese woodblock print from his series 'Thirty-six Views of Mount Fuji' showcases the power of nature and influenced Western Impressionist artists.",
          es: "Hokusai creó 'La Gran Ola de Kanagawa' alrededor de 1831. Esta icónica xilografía japonesa de su serie 'Treinta y seis vistas del Monte Fuji' muestra el poder de la naturaleza e influyó en los artistas impresionistas occidentales.",
          de: "Hokusai schuf 'Die große Welle vor Kanagawa' um 1831. Dieser ikonische japanische Holzschnitt aus seiner Serie 'Sechsunddreißig Ansichten des Fuji' zeigt die Macht der Natur und beeinflusste westliche impressionistische Künstler.",
          nl: "Hokusai creëerde 'De Grote Golf van Kanagawa' rond 1831. Deze iconische Japanse houtsnede uit zijn serie 'Zesendertig Gezichten op de Fuji' toont de kracht van de natuur en beïnvloedde westerse Impressionistische kunstenaars."
        }
      },
      {
        question: {
          en: "Which artist created sculptures that look like soup cans?",
          es: "¿Qué artista creó esculturas que parecen latas de sopa?",
          de: "Welcher Künstler schuf Skulpturen, die wie Suppendosen aussehen?",
          nl: "Welke kunstenaar creëerde sculpturen die lijken op soepblikken?"
        },
        options: [
          { en: "Andy Warhol", es: "Andy Warhol", de: "Andy Warhol", nl: "Andy Warhol" },
          { en: "Roy Lichtenstein", es: "Roy Lichtenstein", de: "Roy Lichtenstein", nl: "Roy Lichtenstein" },
          { en: "Claes Oldenburg", es: "Claes Oldenburg", de: "Claes Oldenberg", nl: "Claes Oldenburg" },
          { en: "James Rosenquist", es: "James Rosenquist", de: "James Rosenquist", nl: "James Rosenquist" }
        ],
        correct: 0,
        explanation: {
          en: "Andy Warhol created both paintings and sculptures of Campbell's Soup Cans. His three-dimensional versions in 1965 transformed everyday consumer products into Pop Art sculptures, blurring the lines between commercial and fine art.",
          es: "Andy Warhol creó tanto pinturas como esculturas de Latas de Sopa Campbell's. Sus versiones tridimensionales en 1965 transformaron productos de consumo cotidianos en esculturas de Arte Pop, difuminando las líneas entre arte comercial y bellas artes.",
          de: "Andy Warhol schuf sowohl Gemälde als auch Skulpturen von Campbell's Suppendosen. Seine dreidimensionalen Versionen von 1965 verwandelten alltägliche Konsumprodukte in Pop-Art-Skulpturen und verwischten die Grenzen zwischen kommerzieller und bildender Kunst.",
          nl: "Andy Warhol creëerde zowel schilderijen als sculpturen van Campbell's Soepblikken. Zijn driedimensionale versies in 1965 transformeerden alledaagse consumentenproducten tot Pop Art sculpturen, en vervagden de lijnen tussen commerciële en beeldende kunst."
        }
      },
      {
        question: {
          en: "Who painted 'Las Meninas'?",
          es: "¿Quién pintó 'Las Meninas'?",
          de: "Wer malte 'Las Meninas'?",
          nl: "Wie schilderde 'Las Meninas'?"
        },
        options: [
          { en: "Diego Velázquez", es: "Diego Velázquez", de: "Diego Velázquez", nl: "Diego Velázquez" },
          { en: "Francisco Goya", es: "Francisco Goya", de: "Francisco Goya", nl: "Francisco Goya" },
          { en: "El Greco", es: "El Greco", de: "El Greco", nl: "El Greco" },
          { en: "Murillo", es: "Murillo", de: "Murillo", nl: "Murillo" }
        ],
        correct: 0,
        explanation: {
          en: "Diego Velázquez painted 'Las Meninas' in 1656. This Spanish Baroque masterpiece is famous for its complex composition, playing with perspective and reality, and is considered one of the greatest paintings in Western art history.",
          es: "Diego Velázquez pintó 'Las Meninas' en 1656. Esta obra maestra del Barroco español es famosa por su composición compleja, jugando con la perspectiva y la realidad, y es considerada una de las mejores pinturas en la historia del arte occidental.",
          de: "Diego Velázquez malte 'Las Meninas' 1656. Dieses spanische Barock-Meisterwerk ist berühmt für seine komplexe Komposition, das Spiel mit Perspektive und Realität, und gilt als eines der größten Gemälde der westlichen Kunstgeschichte.",
          nl: "Diego Velázquez schilderde 'Las Meninas' in 1656. Dit Spaanse Barok meesterwerk is beroemd om zijn complexe compositie, spelend met perspectief en realiteit, en wordt beschouwd als een van de grootste schilderijen in de westerse kunstgeschiedenis."
        }
      },
      {
        question: {
          en: "Which artist painted mothers and children together?",
          es: "¿Qué artista pintó madres e hijos juntos?",
          de: "Welcher Künstler malte Mütter und Kinder zusammen?",
          nl: "Welke kunstenaar schilderde moeders en kinderen samen?"
        },
        options: [
          { en: "Mary Cassatt", es: "Mary Cassatt", de: "Mary Cassatt", nl: "Mary Cassatt" },
          { en: "Berthe Morisot", es: "Berthe Morisot", de: "Berthe Morisot", nl: "Berthe Morisot" },
          { en: "Eva Gonzalès", es: "Eva Gonzalès", de: "Eva Gonzalès", nl: "Eva Gonzalès" },
          { en: "Marie Bracquemond", es: "Marie Bracquemond", de: "Marie Bracquemond", nl: "Marie Bracquemond" }
        ],
        correct: 0,
        explanation: {
          en: "Mary Cassatt frequently painted tender scenes of mothers and children. As an American Impressionist in Paris, she specialized in intimate domestic scenes, capturing the bond between mother and child with exceptional sensitivity.",
          es: "Mary Cassatt frecuentemente pintó escenas tiernas de madres e hijos. Como impresionista americana en París, se especializó en escenas domésticas íntimas, capturando el vínculo entre madre e hijo con sensibilidad excepcional.",
          de: "Mary Cassatt malte häufig zärtliche Szenen von Müttern und Kindern. Als amerikanische Impressionistin in Paris spezialisierte sie sich auf intime häusliche Szenen und fing die Bindung zwischen Mutter und Kind mit außergewöhnlicher Sensibilität ein.",
          nl: "Mary Cassatt schilderde vaak tedere scènes van moeders en kinderen. Als Amerikaanse Impressioniste in Parijs specialiseerde zij zich in intieme huiselijke scènes, en ving de band tussen moeder en kind met uitzonderlijke gevoeligheid."
        }
      },
      {
        question: {
          en: "Who created giant balloon animal sculptures?",
          es: "¿Quién creó esculturas gigantes de animales globo?",
          de: "Wer schuf riesige Ballontier-Skulpturen?",
          nl: "Wie creëerde gigantische ballondier sculpturen?"
        },
        options: [
          { en: "Jeff Koons", es: "Jeff Koons", de: "Jeff Koons", nl: "Jeff Koons" },
          { en: "Damien Hirst", es: "Damien Hirst", de: "Damien Hirst", nl: "Damien Hirst" },
          { en: "Takashi Murakami", es: "Takashi Murakami", de: "Takashi Murakami", nl: "Takashi Murakami" },
          { en: "Yayoi Kusama", es: "Yayoi Kusama", de: "Yayoi Kusama", nl: "Yayoi Kusama" }
        ],
        correct: 0,
        explanation: {
          en: "Jeff Koons created monumental balloon animal sculptures like 'Balloon Dog' series. These stainless steel sculptures mimic the appearance of twisted balloon animals, commenting on consumerism and childhood nostalgia in contemporary art.",
          es: "Jeff Koons creó esculturas monumentales de animales globo como la serie 'Perro Globo'. Estas esculturas de acero inoxidable imitan la apariencia de animales globo retorcidos, comentando sobre el consumismo y la nostalgia infantil en el arte contemporáneo.",
          de: "Jeff Koons schuf monumentale Ballontier-Skulpturen wie die 'Balloon Dog'-Serie. Diese Edelstahl-Skulpturen imitieren das Aussehen verdrehter Ballontiere und kommentieren Konsumismus und Kindheitsnostalgie in der zeitgenössischen Kunst.",
          nl: "Jeff Koons creëerde monumentale ballondier sculpturen zoals de 'Balloon Dog' serie. Deze roestvrijstalen sculpturen imiteren het uiterlijk van gedraaide ballondieren, en commentariëren op consumentisme en kindheidsnostalgie in hedendaagse kunst."
        }
      },
      {
        question: {
          en: "Which artist painted 'The Persistence of Memory'?",
          es: "¿Qué artista pintó 'La Persistencia de la Memoria'?",
          de: "Welcher Künstler malte 'Die Beständigkeit der Erinnerung'?",
          nl: "Welke kunstenaar schilderde 'De Volharding der Herinnering'?"
        },
        options: [
          { en: "Salvador Dalí", es: "Salvador Dalí", de: "Salvador Dalí", nl: "Salvador Dalí" },
          { en: "René Magritte", es: "René Magritte", de: "René Magritte", nl: "René Magritte" },
          { en: "Giorgio de Chirico", es: "Giorgio de Chirico", de: "Giorgio de Chirico", nl: "Giorgio de Chirico" },
          { en: "Max Ernst", es: "Max Ernst", de: "Max Ernst", nl: "Max Ernst" }
        ],
        correct: 0,
        explanation: {
          en: "Salvador Dalí painted 'The Persistence of Memory' in 1931, featuring his famous melting clocks. This Surrealist masterpiece explores themes of time, memory, and the unconscious mind, becoming an icon of 20th-century art.",
          es: "Salvador Dalí pintó 'La Persistencia de la Memoria' en 1931, presentando sus famosos relojes derretidos. Esta obra maestra surrealista explora temas de tiempo, memoria y la mente inconsciente, convirtiéndose en un ícono del arte del siglo XX.",
          de: "Salvador Dalí malte 1931 'Die Beständigkeit der Erinnerung' mit seinen berühmten schmelzenden Uhren. Dieses surrealistische Meisterwerk erforscht Themen von Zeit, Gedächtnis und dem Unbewussten und wurde zu einer Ikone der Kunst des 20. Jahrhunderts.",
          nl: "Salvador Dalí schilderde 'De Volharding der Herinnering' in 1931, met zijn beroemde smeltende klokken. Dit Surrealistische meesterwerk verkent thema's van tijd, geheugen en het onbewuste, en werd een icoon van 20e-eeuwse kunst."
        }
      },
      {
        question: {
          en: "Who painted 'Guernica'?",
          es: "¿Quién pintó 'Guernica'?",
          de: "Wer malte 'Guernica'?",
          nl: "Wie schilderde 'Guernica'?"
        },
        options: [
          { en: "Pablo Picasso", es: "Pablo Picasso", de: "Pablo Picasso", nl: "Pablo Picasso" },
          { en: "Joan Miró", es: "Joan Miró", de: "Joan Miró", nl: "Joan Miró" },
          { en: "Salvador Dalí", es: "Salvador Dalí", de: "Salvador Dalí", nl: "Salvador Dalí" },
          { en: "Diego Rivera", es: "Diego Rivera", de: "Diego Rivera", nl: "Diego Rivera" }
        ],
        correct: 0,
        explanation: {
          en: "Pablo Picasso painted 'Guernica' in 1937 in response to the bombing of Guernica during the Spanish Civil War. This powerful anti-war statement in Cubist style became one of the most important political paintings of the 20th century.",
          es: "Pablo Picasso pintó 'Guernica' en 1937 en respuesta al bombardeo de Guernica durante la Guerra Civil Española. Esta poderosa declaración anti-guerra en estilo cubista se convirtió en una de las pinturas políticas más importantes del siglo XX.",
          de: "Pablo Picasso malte 'Guernica' 1937 als Reaktion auf die Bombardierung von Guernica während des Spanischen Bürgerkriegs. Diese kraftvolle Anti-Kriegs-Aussage im kubistischen Stil wurde zu einem der wichtigsten politischen Gemälde des 20. Jahrhunderts.",
          nl: "Pablo Picasso schilderde 'Guernica' in 1937 als reactie op het bombardement van Guernica tijdens de Spaanse Burgeroorlog. Deze krachtige anti-oorlog verklaring in Cubistische stijl werd een van de belangrijkste politieke schilderijen van de 20e eeuw."
        }
      },
      {
        question: {
          en: "Which artist created dot paintings (pointillism)?",
          es: "¿Qué artista creó pinturas de puntos (puntillismo)?",
          de: "Welcher Künstler schuf Punktmalereien (Pointillismus)?",
          nl: "Welke kunstenaar creëerde stippenverfs (pointillisme)?"
        },
        options: [
          { en: "Georges Seurat", es: "Georges Seurat", de: "Georges Seurat", nl: "Georges Seurat" },
          { en: "Paul Signac", es: "Paul Signac", de: "Paul Signac", nl: "Paul Signac" },
          { en: "Henri-Edmond Cross", es: "Henri-Edmond Cross", de: "Henri-Edmond Cross", nl: "Henri-Edmond Cross" },
          { en: "Maximilien Luce", es: "Maximilien Luce", de: "Maximilien Luce", nl: "Maximilien Luce" }
        ],
        correct: 0,
        explanation: {
          en: "Georges Seurat pioneered Pointillism, creating paintings using thousands of tiny colored dots. His masterpiece 'A Sunday Afternoon on the Island of La Grande Jatte' took two years to complete and revolutionized how artists used color and light.",
          es: "Georges Seurat fue pionero del Puntillismo, creando pinturas usando miles de puntos de colores diminutos. Su obra maestra 'Una tarde de domingo en la isla de La Grande Jatte' tomó dos años en completarse y revolucionó cómo los artistas usaban color y luz.",
          de: "Georges Seurat war ein Pionier des Pointillismus und schuf Gemälde mit Tausenden winziger farbiger Punkte. Sein Meisterwerk 'Ein Sonntagnachmittag auf der Insel La Grande Jatte' dauerte zwei Jahre bis zur Fertigstellung und revolutionierte, wie Künstler Farbe und Licht verwendeten.",
          nl: "Georges Seurat was een pionier van het Pointillisme, en creëerde schilderijen met duizenden kleine gekleurde stipjes. Zijn meesterwerk 'Een zondagmiddag op het eiland La Grande Jatte' kostte twee jaar om te voltooien en revolutioneerde hoe kunstenaars kleur en licht gebruikten."
        }
      },
      {
        question: {
          en: "Who painted 'The Kiss'?",
          es: "¿Quién pintó 'El Beso'?",
          de: "Wer malte 'Der Kuss'?",
          nl: "Wie schilderde 'De Kus'?"
        },
        options: [
          { en: "Gustav Klimt", es: "Gustav Klimt", de: "Gustav Klimt", nl: "Gustav Klimt" },
          { en: "Egon Schiele", es: "Egon Schiele", de: "Egon Schiele", nl: "Egon Schiele" },
          { en: "Oskar Kokoschka", es: "Oskar Kokoschka", de: "Oskar Kokoschka", nl: "Oskar Kokoschka" },
          { en: "Franz Marc", es: "Franz Marc", de: "Franz Marc", nl: "Franz Marc" }
        ],
        correct: 0,
        explanation: {
          en: "Gustav Klimt painted 'The Kiss' in 1907-1908 during his 'Golden Period'. This Art Nouveau masterpiece features intricate gold leaf patterns and symbolizes love and intimacy, becoming one of the most beloved paintings in art history.",
          es: "Gustav Klimt pintó 'El Beso' en 1907-1908 durante su 'Período Dorado'. Esta obra maestra del Art Nouveau presenta patrones intrincados de hoja de oro y simboliza amor e intimidad, convirtiéndose en una de las pinturas más queridas en la historia del arte.",
          de: "Gustav Klimt malte 'Der Kuss' 1907-1908 während seiner 'Goldenen Periode'. Dieses Jugendstil-Meisterwerk zeigt komplizierte Blattgold-Muster und symbolisiert Liebe und Intimität und wurde zu einem der beliebtesten Gemälde der Kunstgeschichte.",
          nl: "Gustav Klimt schilderde 'De Kus' in 1907-1908 tijdens zijn 'Gouden Periode'. Dit Art Nouveau meesterwerk bevat ingewikkelde bladgoud patronen en symboliseert liefde en intimiteit, en werd een van de meest geliefde schilderijen in de kunstgeschiedenis."
        }
      },
      {
        question: {
          en: "Which artist painted 'Campbell's Soup Cans'?",
          es: "¿Qué artista pintó 'Latas de Sopa Campbell's'?",
          de: "Welcher Künstler malte 'Campbell's Suppendosen'?",
          nl: "Welke kunstenaar schilderde 'Campbell's Soepblikken'?"
        },
        options: [
          { en: "Andy Warhol", es: "Andy Warhol", de: "Andy Warhol", nl: "Andy Warhol" },
          { en: "Roy Lichtenstein", es: "Roy Lichtenstein", de: "Roy Lichtenstein", nl: "Roy Lichtenstein" },
          { en: "Jasper Johns", es: "Jasper Johns", de: "Jasper Johns", nl: "Jasper Johns" },
          { en: "Robert Rauschenberg", es: "Robert Rauschenberg", de: "Robert Rauschenberg", nl: "Robert Rauschenberg" }
        ],
        correct: 0,
        explanation: {
          en: "Andy Warhol painted 'Campbell's Soup Cans' in 1962, featuring 32 canvases of different soup varieties. This Pop Art series transformed commercial imagery into fine art, challenging traditional concepts of what could be considered artistic subject matter.",
          es: "Andy Warhol pintó 'Latas de Sopa Campbell's' en 1962, presentando 32 lienzos de diferentes variedades de sopa. Esta serie de Arte Pop transformó imágenes comerciales en arte fino, desafiando conceptos tradicionales de lo que podía considerarse tema artístico.",
          de: "Andy Warhol malte 1962 'Campbell's Suppendosen' mit 32 Leinwänden verschiedener Suppensorten. Diese Pop-Art-Serie verwandelte kommerzielle Bilder in bildende Kunst und stellte traditionelle Konzepte dessen in Frage, was als künstlerisches Thema betrachtet werden konnte.",
          nl: "Andy Warhol schilderde 'Campbell's Soepblikken' in 1962, met 32 canvassen van verschillende soepvariëteiten. Deze Pop Art serie transformeerde commerciële beelden tot beeldende kunst, en daagde traditionele concepten uit van wat beschouwd kon worden als artistiek onderwerp."
        }
      },
      {
        question: {
          en: "Who created the 'Blue Period' paintings?",
          es: "¿Quién creó las pinturas del 'Período Azul'?",
          de: "Wer schuf die Gemälde der 'Blauen Periode'?",
          nl: "Wie creëerde de schilderijen uit de 'Blauwe Periode'?"
        },
        options: [
          { en: "Pablo Picasso", es: "Pablo Picasso", de: "Pablo Picasso", nl: "Pablo Picasso" },
          { en: "Henri Matisse", es: "Henri Matisse", de: "Henri Matisse", nl: "Henri Matisse" },
          { en: "André Derain", es: "André Derain", de: "André Derain", nl: "André Derain" },
          { en: "Maurice de Vlaminck", es: "Maurice de Vlaminck", de: "Maurice de Vlaminck", nl: "Maurice de Vlaminck" }
        ],
        correct: 0,
        explanation: {
          en: "Pablo Picasso created his 'Blue Period' paintings from 1901-1904, characterized by monochromatic blue tones. These melancholic works, inspired by personal tragedy and poverty, depicted themes of sadness, isolation, and human suffering.",
          es: "Pablo Picasso creó sus pinturas del 'Período Azul' desde 1901-1904, caracterizadas por tonos azules monocromáticos. Estas obras melancólicas, inspiradas por tragedia personal y pobreza, representaron temas de tristeza, aislamiento y sufrimiento humano.",
          de: "Pablo Picasso schuf seine 'Blaue Periode'-Gemälde von 1901-1904, charakterisiert durch monochromatische Blautöne. Diese melancholischen Werke, inspiriert von persönlicher Tragödie und Armut, zeigten Themen von Traurigkeit, Isolation und menschlichem Leiden.",
          nl: "Pablo Picasso creëerde zijn 'Blauwe Periode' schilderijen van 1901-1904, gekenmerkt door monochromatische blauwe tinten. Deze melancholische werken, geïnspireerd door persoonlijke tragedie en armoede, beeldden thema's van verdriet, isolatie en menselijk lijden uit."
        }
      },
      {
        question: {
          en: "Which artist painted 'Nighthawks'?",
          es: "¿Qué artista pintó 'Noctámbulos'?",
          de: "Welcher Künstler malte 'Nighthawks'?",
          nl: "Welke kunstenaar schilderde 'Nighthawks'?"
        },
        options: [
          { en: "Edward Hopper", es: "Edward Hopper", de: "Edward Hopper", nl: "Edward Hopper" },
          { en: "Grant Wood", es: "Grant Wood", de: "Grant Wood", nl: "Grant Wood" },
          { en: "Norman Rockwell", es: "Norman Rockwell", de: "Norman Rockwell", nl: "Norman Rockwell" },
          { en: "Andrew Wyeth", es: "Andrew Wyeth", de: "Andrew Wyeth", nl: "Andrew Wyeth" }
        ],
        correct: 0,
        explanation: {
          en: "Edward Hopper painted 'Nighthawks' in 1942, depicting late-night urban isolation in an American diner. This realist masterpiece captures the loneliness of modern city life and became an icon of American art and culture.",
          es: "Edward Hopper pintó 'Nocturnámbulos' en 1942, representando el aislamiento urbano nocturno en un restaurante americano. Esta obra maestra realista captura la soledad de la vida urbana moderna y se convirtió en un ícono del arte y cultura americana.",
          de: "Edward Hopper malte 'Nighthawks' 1942 und zeigte spätnächtliche urbane Isolation in einem amerikanischen Diner. Dieses realistische Meisterwerk erfasst die Einsamkeit des modernen Stadtlebens und wurde zu einer Ikone amerikanischer Kunst und Kultur.",
          nl: "Edward Hopper schilderde 'Nighthawks' in 1942, die laat-nacht stedelijke isolatie in een Amerikaanse diner uitbeeldt. Dit realistische meesterwerk vangt de eenzaamheid van het moderne stadsleven en werd een icoon van Amerikaanse kunst en cultuur."
        }
      },
      {
        question: {
          en: "Who painted 'A Sunday Afternoon on the Island of La Grande Jatte'?",
          es: "¿Quién pintó 'Una tarde de domingo en la isla de La Grande Jatte'?",
          de: "Wer malte 'Ein Sonntagnachmittag auf der Insel La Grande Jatte'?",
          nl: "Wie schilderde 'Een zondagmiddag op het eiland La Grande Jatte'?"
        },
        options: [
          { en: "Georges Seurat", es: "Georges Seurat", de: "Georges Seurat", nl: "Georges Seurat" },
          { en: "Paul Signac", es: "Paul Signac", de: "Paul Signac", nl: "Paul Signac" },
          { en: "Claude Monet", es: "Claude Monet", de: "Claude Monet", nl: "Claude Monet" },
          { en: "Pierre-Auguste Renoir", es: "Pierre-Auguste Renoir", de: "Pierre-Auguste Renoir", nl: "Pierre-Auguste Renoir" }
        ],
        correct: 0,
        explanation: {
          en: "Georges Seurat painted 'A Sunday Afternoon on the Island of La Grande Jatte' using his pioneering Pointillist technique. This massive Neo-Impressionist work took two years to complete and demonstrates the scientific application of color theory.",
          es: "Georges Seurat pintó 'Una tarde de domingo en la isla de La Grande Jatte' usando su técnica puntillista pionera. Esta obra neo-impresionista masiva tomó dos años en completarse y demuestra la aplicación científica de la teoría del color.",
          de: "Georges Seurat malte 'Ein Sonntagnachmittag auf der Insel La Grande Jatte' mit seiner wegweisenden Pointillismus-Technik. Dieses massive neo-impressionistische Werk dauerte zwei Jahre bis zur Fertigstellung und demonstriert die wissenschaftliche Anwendung der Farbtheorie.",
          nl: "Georges Seurat schilderde 'Een zondagmiddag op het eiland La Grande Jatte' met zijn baanbrekende Pointillistische techniek. Dit massieve Neo-Impressionistische werk kostte twee jaar om te voltooien en toont de wetenschappelijke toepassing van kleurtheorie."
        }
      },
      {
        question: {
          en: "Which artist created mobile sculptures that move with air?",
          es: "¿Qué artista creó esculturas móviles que se mueven con el aire?",
          de: "Welcher Künstler schuf mobile Skulpturen, die sich mit Luft bewegen?",
          nl: "Welke kunstenaar creëerde mobiele sculpturen die bewegen met lucht?"
        },
        options: [
          { en: "Alexander Calder", es: "Alexander Calder", de: "Alexander Calder", nl: "Alexander Calder" },
          { en: "Jean Tinguely", es: "Jean Tinguely", de: "Jean Tinguely", nl: "Jean Tinguely" },
          { en: "David Smith", es: "David Smith", de: "David Smith", nl: "David Smith" },
          { en: "Tony Smith", es: "Tony Smith", de: "Tony Smith", nl: "Tony Smith" }
        ],
        correct: 0,
        explanation: {
          en: "Alexander Calder invented the mobile sculpture in the 1930s, creating balanced artworks that move gracefully with air currents. His kinetic sculptures brought movement and time into static art, influencing modern sculpture and design.",
          es: "Alexander Calder inventó la escultura móvil en los años 1930, creando obras de arte equilibradas que se mueven elegantemente con las corrientes de aire. Sus esculturas cinéticas trajeron movimiento y tiempo al arte estático, influyendo en la escultura y diseño modernos.",
          de: "Alexander Calder erfand in den 1930er Jahren die Mobile-Skulptur und schuf ausgewogene Kunstwerke, die sich elegant mit Luftströmen bewegen. Seine kinetischen Skulpturen brachten Bewegung und Zeit in die statische Kunst und beeinflussten moderne Skulptur und Design.",
          nl: "Alexander Calder vond de mobiele sculptuur uit in de jaren 1930, en creëerde gebalanceerde kunstwerken die elegant bewegen met luchtstromingen. Zijn kinetische sculpturen brachten beweging en tijd in statische kunst, en beïnvloedden moderne sculptuur en design."
        }
      },
      {
        question: {
          en: "Who painted 'The Potato Eaters'?",
          es: "¿Quién pintó 'Los Comedores de Patatas'?",
          de: "Wer malte 'Die Kartoffelesser'?",
          nl: "Wie schilderde 'De Aardappeleters'?"
        },
        options: [
          { en: "Vincent van Gogh", es: "Vincent van Gogh", de: "Vincent van Gogh", nl: "Vincent van Gogh" },
          { en: "Paul Cézanne", es: "Paul Cézanne", de: "Paul Cézanne", nl: "Paul Cézanne" },
          { en: "Paul Gauguin", es: "Paul Gauguin", de: "Paul Gauguin", nl: "Paul Gauguin" },
          { en: "Henri de Toulouse-Lautrec", es: "Henri de Toulouse-Lautrec", de: "Henri de Toulouse-Lautrec", nl: "Henri de Toulouse-Lautrec" }
        ],
        correct: 0,
        explanation: {
          en: "Vincent van Gogh painted 'The Potato Eaters' in 1885, depicting rural peasant life with honesty and dignity. This early masterpiece shows working-class people sharing a simple meal, reflecting van Gogh's social consciousness and empathy for the poor.",
          es: "Vincent van Gogh pintó 'Los Comedores de Patatas' en 1885, representando la vida campesina rural con honestidad y dignidad. Esta obra maestra temprana muestra personas de clase trabajadora compartiendo una comida simple, reflejando la conciencia social y empatía de van Gogh por los pobres.",
          de: "Vincent van Gogh malte 'Die Kartoffelesser' 1885 und zeigte das ländliche Bauernleben mit Ehrlichkeit und Würde. Dieses frühe Meisterwerk zeigt Arbeiterklasse-Menschen beim Teilen einer einfachen Mahlzeit und spiegelt van Goghs soziales Bewusstsein und Mitgefühl für die Armen wider.",
          nl: "Vincent van Gogh schilderde 'De Aardappeleters' in 1885, die het landelijke boerenleven met eerlijkheid en waardigheid uitbeeldt. Dit vroege meesterwerk toont arbeidersklasse mensen die een eenvoudige maaltijd delen, en reflecteert van Gogh's sociale bewustzijn en empathie voor de armen."
        }
      },
      {
        question: {
          en: "Which artist painted 'The Son of Man' with an apple?",
          es: "¿Qué artista pintó 'El Hijo del Hombre' con una manzana?",
          de: "Welcher Künstler malte 'Der Sohn des Menschen' mit einem Apfel?",
          nl: "Welke kunstenaar schilderde 'De Zoon van de Mens' met een appel?"
        },
        options: [
          { en: "René Magritte", es: "René Magritte", de: "René Magritte", nl: "René Magritte" },
          { en: "Salvador Dalí", es: "Salvador Dalí", de: "Salvador Dalí", nl: "Salvador Dalí" },
          { en: "Max Ernst", es: "Max Ernst", de: "Max Ernst", nl: "Max Ernst" },
          { en: "Joan Miró", es: "Joan Miró", de: "Joan Miró", nl: "Joan Miró" }
        ],
        correct: 0,
        explanation: {
          en: "René Magritte painted 'The Son of Man' in 1964, featuring a man in a bowler hat with a green apple obscuring his face. This Surrealist work explores themes of identity, reality, and the visible versus the hidden in human nature.",
          es: "René Magritte pintó 'El Hijo del Hombre' en 1964, presentando a un hombre con sombrero de hongo con una manzana verde oscureciendo su rostro. Esta obra surrealista explora temas de identidad, realidad y lo visible versus lo oculto en la naturaleza humana.",
          de: "René Magritte malte 'Der Sohn des Menschen' 1964 und zeigte einen Mann mit Melone, dessen Gesicht von einem grünen Apfel verdeckt wird. Dieses surrealistische Werk erforscht Themen von Identität, Realität und dem Sichtbaren versus dem Verborgenen in der menschlichen Natur.",
          nl: "René Magritte schilderde 'De Zoon van de Mens' in 1964, met een man in een bolhoed met een groene appel die zijn gezicht verbergt. Dit Surrealistische werk verkent thema's van identiteit, realiteit en het zichtbare versus het verborgen in de menselijke natuur."
        }
      },
      {
        question: {
          en: "Who painted 'Liberty Leading the People'?",
          es: "¿Quién pintó 'La Libertad guiando al pueblo'?",
          de: "Wer malte 'Die Freiheit führt das Volk'?",
          nl: "Wie schilderde 'De Vrijheid leidt het Volk'?"
        },
        options: [
          { en: "Eugène Delacroix", es: "Eugène Delacroix", de: "Eugène Delacroix", nl: "Eugène Delacroix" },
          { en: "Jacques-Louis David", es: "Jacques-Louis David", de: "Jacques-Louis David", nl: "Jacques-Louis David" },
          { en: "Jean-Auguste-Dominique Ingres", es: "Jean-Auguste-Dominique Ingres", de: "Jean-Auguste-Dominique Ingres", nl: "Jean-Auguste-Dominique Ingres" },
          { en: "Théodore Géricault", es: "Théodore Géricault", de: "Théodore Géricault", nl: "Théodore Géricault" }
        ],
        correct: 0,
        explanation: {
          en: "Eugène Delacroix painted 'Liberty Leading the People' in 1830, commemorating the July Revolution in France. This Romantic masterpiece became a symbol of freedom and revolution, inspiring democratic movements worldwide with its powerful imagery.",
          es: "Eugène Delacroix pintó 'La Libertad guiando al pueblo' en 1830, conmemorando la Revolución de Julio en Francia. Esta obra maestra romántica se convirtió en un símbolo de libertad y revolución, inspirando movimientos democráticos mundiales con su poderosa imagería.",
          de: "Eugène Delacroix malte 'Die Freiheit führt das Volk' 1830 zum Gedenken an die Julirevolution in Frankreich. Dieses romantische Meisterwerk wurde zu einem Symbol für Freiheit und Revolution und inspirierte demokratische Bewegungen weltweit mit seiner kraftvollen Bildsprache.",
          nl: "Eugène Delacroix schilderde 'De Vrijheid leidt het Volk' in 1830, ter herdenking van de Juli Revolutie in Frankrijk. Dit Romantische meesterwerk werd een symbool van vrijheid en revolutie, en inspireerde democratische bewegingen wereldwijd met zijn krachtige beeldtaal."
        }
      },
      {
        question: {
          en: "Which artist created polka dot infinity rooms?",
          es: "¿Qué artista creó salas infinitas de lunares?",
          de: "Welcher Künstler schuf Polka-Punkt-Unendlichkeitsräume?",
          nl: "Welke kunstenaar creëerde polka dot oneindigheidskamers?"
        },
        options: [
          { en: "Yayoi Kusama", es: "Yayoi Kusama", de: "Yayoi Kusama", nl: "Yayoi Kusama" },
          { en: "Takashi Murakami", es: "Takashi Murakami", de: "Takashi Murakami", nl: "Takashi Murakami" },
          { en: "Kara Walker", es: "Kara Walker", de: "Kara Walker", nl: "Kara Walker" },
          { en: "Kaws", es: "Kaws", de: "Kaws", nl: "Kaws" }
        ],
        correct: 0,
        explanation: {
          en: "Yayoi Kusama creates immersive polka dot infinity rooms that envelope viewers in endless patterns. These installations reflect her lifelong obsession with dots and infinite space, offering therapeutic escape from her mental health struggles through art.",
          es: "Yayoi Kusama crea salas infinitas de lunares inmersivas que envuelven a los espectadores en patrones infinitos. Estas instalaciones reflejan su obsesión de toda la vida con los puntos y el espacio infinito, ofreciendo escape terapéutico de sus luchas de salud mental a través del arte.",
          de: "Yayoi Kusama schafft immersive Polka-Punkt-Unendlichkeitsräume, die Betrachter in endlose Muster einhüllen. Diese Installationen spiegeln ihre lebenslange Obsession mit Punkten und unendlichem Raum wider und bieten therapeutische Flucht aus ihren psychischen Problemen durch Kunst.",
          nl: "Yayoi Kusama creëert meeslepende polka dot oneindigheidskamers die kijkers omhullen in eindeloze patronen. Deze installaties reflecteren haar levenslange obsessie met stippen en oneindige ruimte, en bieden therapeutische ontsnapping uit haar geestelijke gezondheidsproblemen door kunst."
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
          { en: "Michelangelo", es: "Michelangelo", de: "Michelangelo", nl: "Michelangelo" },
          { en: "Raphael", es: "Rafael", de: "Raffael", nl: "Raphaël" },
          { en: "Caravaggio", es: "Caravaggio", de: "Caravaggio", nl: "Caravaggio" }
        ],
        correct: 0,
        explanation: {
          en: "Leonardo da Vinci painted 'The Last Supper' from 1495-1498 on the wall of a Milan convent. This Renaissance masterpiece depicts Christ's final meal with his disciples, showcasing da Vinci's mastery of perspective, emotion, and storytelling.",
          es: "Leonardo da Vinci pintó 'La Última Cena' desde 1495-1498 en la pared de un convento de Milán. Esta obra maestra del Renacimiento representa la comida final de Cristo con sus discípulos, mostrando la maestría de da Vinci en perspectiva, emoción y narración.",
          de: "Leonardo da Vinci malte 'Das Abendmahl' von 1495-1498 an die Wand eines Mailänder Klosters. Dieses Renaissance-Meisterwerk zeigt Christi letztes Mahl mit seinen Jüngern und demonstriert da Vincis Meisterschaft in Perspektive, Emotion und Erzählung.",
          nl: "Leonardo da Vinci schilderde 'Het Laatste Avondmaal' van 1495-1498 op de muur van een Milaans klooster. Dit Renaissance meesterwerk toont Christus' laatste maaltijd met zijn discipelen, en toont da Vinci's meesterschap van perspectief, emotie en verhalen vertellen."
        }
      },
      {
        question: {
          en: "Which artist made art from everyday objects like toilets?",
          es: "¿Qué artista hizo arte con objetos cotidianos como retretes?",
          de: "Welcher Künstler machte Kunst aus alltäglichen Gegenständen wie Toiletten?",
          nl: "Welke kunstenaar maakte kunst van alledaagse voorwerpen zoals toiletten?"
        },
        options: [
          { en: "Marcel Duchamp", es: "Marcel Duchamp", de: "Marcel Duchamp", nl: "Marcel Duchamp" },
          { en: "Andy Warhol", es: "Andy Warhol", de: "Andy Warhol", nl: "Andy Warhol" },
          { en: "Roy Lichtenstein", es: "Roy Lichtenstein", de: "Roy Lichtenstein", nl: "Roy Lichtenstein" },
          { en: "Jasper Johns", es: "Jasper Johns", de: "Jasper Johns", nl: "Jasper Johns" }
        ],
        correct: 0,
        explanation: {
          en: "Marcel Duchamp revolutionized art with ready-made objects like 'Fountain' (1917), a signed urinal. His conceptual approach challenged traditional definitions of art, establishing that artistic value comes from the artist's choice and context rather than craft.",
          es: "Marcel Duchamp revolucionó el arte con objetos ready-made como 'Fuente' (1917), un urinario firmado. Su enfoque conceptual desafió las definiciones tradicionales del arte, estableciendo que el valor artístico viene de la elección y contexto del artista más que del oficio.",
          de: "Marcel Duchamp revolutionierte die Kunst mit Ready-made-Objekten wie 'Fountain' (1917), einem signierten Urinal. Sein konzeptueller Ansatz stellte traditionelle Kunstdefinitionen in Frage und etablierte, dass künstlerischer Wert aus der Wahl und dem Kontext des Künstlers stammt, nicht aus dem Handwerk.",
          nl: "Marcel Duchamp revolutioneerde kunst met ready-made objecten zoals 'Fountain' (1917), een getekend urinoir. Zijn conceptuele benadering daagde traditionele kunstdefinities uit, en stelde vast dat artistieke waarde komt van de keuze en context van de kunstenaar eerder dan vakmanschap."
        }
      },
      {
        question: {
          en: "Who painted 'Water Lilies' series?",
          es: "¿Quién pintó la serie 'Nenúfares'?",
          de: "Wer malte die 'Seerosen'-Serie?",
          nl: "Wie schilderde de 'Waterlelies' serie?"
        },
        options: [
          { en: "Claude Monet", es: "Claude Monet", de: "Claude Monet", nl: "Claude Monet" },
          { en: "Edgar Degas", es: "Edgar Degas", de: "Edgar Degas", nl: "Edgar Degas" },
          { en: "Pierre-Auguste Renoir", es: "Pierre-Auguste Renoir", de: "Pierre-Auguste Renoir", nl: "Pierre-Auguste Renoir" },
          { en: "Camille Pissarro", es: "Camille Pissarro", de: "Camille Pissarro", nl: "Camille Pissarro" }
        ],
        correct: 0,
        explanation: {
          en: "Claude Monet painted his Water Lilies series from 1897-1926 in his garden at Giverny. These Impressionist masterpieces capture changing light and reflections on water, representing the culmination of his lifelong study of light and color.",
          es: "Claude Monet pintó su serie de Nenúfares desde 1897-1926 en su jardín en Giverny. Estas obras maestras impresionistas capturan la luz cambiante y reflejos en el agua, representando la culminación de su estudio de toda la vida de luz y color.",
          de: "Claude Monet malte seine Seerosen-Serie von 1897-1926 in seinem Garten in Giverny. Diese impressionistischen Meisterwerke erfassen wechselndes Licht und Reflexionen auf dem Wasser und repräsentieren den Höhepunkt seiner lebenslangen Studie von Licht und Farbe.",
          nl: "Claude Monet schilderde zijn Waterlelies serie van 1897-1926 in zijn tuin in Giverny. Deze Impressionistische meesterwerken vangen veranderend licht en reflecties op water, en vertegenwoordigen het hoogtepunt van zijn levenslange studie van licht en kleur."
        }
      },
      {
        question: {
          en: "What is the term for a play written for children?",
          es: "¿Cuál es el término para una obra escrita para niños?",
          de: "Wie nennt man ein für Kinder geschriebenes Theaterstück?",
          nl: "Wat is de term voor een toneelstuk geschreven voor kinderen?"
        },
        options: [
          { en: "Children's theater", es: "Teatro infantil", de: "Kindertheater", nl: "Kindertheater" },
          { en: "Puppet show", es: "Espectáculo de marionetas", de: "Puppenshow", nl: "Poppenshow" },
          { en: "Musical", es: "Musical", de: "Musical", nl: "Musical" },
          { en: "Drama", es: "Drama", de: "Drama", nl: "Drama" }
        ],
        correct: 0,
        explanation: {
          en: "Children's theater refers to plays specifically written and performed for young audiences. These shows often feature colorful costumes, simple storylines, audience participation, and educational themes that engage and entertain children.",
          es: "El teatro infantil se refiere a obras específicamente escritas y representadas para audiencias jóvenes. Estos espectáculos a menudo presentan disfraces coloridos, tramas simples, participación del público y temas educativos que involucran y entretienen a los niños.",
          de: "Kindertheater bezieht sich auf Stücke, die speziell für junge Zuschauer geschrieben und aufgeführt werden. Diese Shows zeigen oft bunte Kostüme, einfache Handlungen, Publikumsbeteiligung und Bildungsthemen, die Kinder einbeziehen und unterhalten.",
          nl: "Kindertheater verwijst naar toneelstukken die speciaal geschreven en uitgevoerd zijn voor jonge publiek. Deze shows hebben vaak kleurrijke kostuums, eenvoudige verhaallijnen, publieksparticipatie en educatieve thema's die kinderen boeien en vermaken."
        }
      },
      {
        question: {
          en: "Which art technique uses small dots of color to create an image?",
          es: "¿Qué técnica artística usa pequeños puntos de color para crear una imagen?",
          de: "Welche Kunsttechnik verwendet kleine Farbpunkte, um ein Bild zu erstellen?",
          nl: "Welke kunsttechniek gebruikt kleine kleurpuntjes om een beeld te creëren?"
        },
        options: [
          { en: "Pointillism", es: "Puntillismo", de: "Pointillismus", nl: "Pointillisme" },
          { en: "Watercolor", es: "Acuarela", de: "Aquarell", nl: "Aquarel" },
          { en: "Oil painting", es: "Pintura al óleo", de: "Ölmalerei", nl: "Olieverf" },
          { en: "Charcoal", es: "Carboncillo", de: "Kohlezeichnung", nl: "Houtskool" }
        ],
        correct: 0,
        explanation: {
          en: "Pointillism is a technique where artists apply small dots or strokes of pure color that blend optically when viewed from a distance. Georges Seurat and Paul Signac were masters of this technique, which was also called Neo-Impressionism.",
          es: "El puntillismo es una técnica donde los artistas aplican pequeños puntos o trazos de color puro que se mezclan ópticamente cuando se ven desde la distancia. Georges Seurat y Paul Signac fueron maestros de esta técnica, que también se llamaba Neo-Impresionismo.",
          de: "Pointillismus ist eine Technik, bei der Künstler kleine Punkte oder Striche reiner Farbe auftragen, die sich optisch vermischen, wenn sie aus der Entfernung betrachtet werden. Georges Seurat und Paul Signac waren Meister dieser Technik, die auch Neo-Impressionismus genannt wurde.",
          nl: "Pointillisme is een techniek waarbij kunstenaars kleine stippen of streken van pure kleur aanbrengen die optisch vermengen wanneer ze van een afstand worden bekeken. Georges Seurat en Paul Signac waren meesters van deze techniek, die ook Neo-Impressionisme werd genoemd."
        }
      },
      {
        question: {
          en: "What do we call the wooden frame that holds an artist's canvas while painting?",
          es: "¿Cómo llamamos al marco de madera que sostiene el lienzo del artista mientras pinta?",
          de: "Wie nennen wir den Holzrahmen, der die Leinwand des Künstlers beim Malen hält?",
          nl: "Hoe noemen we het houten frame dat het canvas van de kunstenaar vasthoudt tijdens het schilderen?"
        },
        options: [
          { en: "Easel", es: "Caballete", de: "Staffelei", nl: "Schildersezel" },
          { en: "Palette", es: "Paleta", de: "Palette", nl: "Palet" },
          { en: "Canvas", es: "Lienzo", de: "Leinwand", nl: "Canvas" },
          { en: "Sketch pad", es: "Bloc de dibujo", de: "Skizzenblock", nl: "Schetsblok" }
        ],
        correct: 0,
        explanation: {
          en: "An easel is a wooden or metal stand that holds a canvas upright while an artist paints. Easels come in different sizes and can be adjustable to help artists work at comfortable angles and heights.",
          es: "Un caballete es un soporte de madera o metal que mantiene un lienzo erguido mientras un artista pinta. Los caballetes vienen en diferentes tamaños y pueden ser ajustables para ayudar a los artistas a trabajar en ángulos y alturas cómodas.",
          de: "Eine Staffelei ist ein Holz- oder Metallständer, der eine Leinwand aufrecht hält, während ein Künstler malt. Staffeleien gibt es in verschiedenen Größen und sie können verstellbar sein, um Künstlern zu helfen, in bequemen Winkeln und Höhen zu arbeiten.",
          nl: "Een schildersezel is een houten of metalen standaard die een canvas rechtop houdt terwijl een kunstenaar schildert. Schildersezels komen in verschillende maten en kunnen verstelbaar zijn om kunstenaars te helpen werken onder comfortabele hoeken en hoogtes."
        }
      },
      {
        question: {
          en: "What type of dance is characterized by graceful, flowing movements and often tells a story?",
          es: "¿Qué tipo de danza se caracteriza por movimientos gráciles y fluidos y a menudo cuenta una historia?",
          de: "Welche Art von Tanz zeichnet sich durch anmutige, fließende Bewegungen aus und erzählt oft eine Geschichte?",
          nl: "Welk type dans wordt gekenmerkt door gracieuze, vloeiende bewegingen en vertelt vaak een verhaal?"
        },
        options: [
          { en: "Ballet", es: "Ballet", de: "Ballett", nl: "Ballet" },
          { en: "Hip hop", es: "Hip hop", de: "Hip-Hop", nl: "Hiphop" },
          { en: "Breakdancing", es: "Breakdance", de: "Breakdance", nl: "Breakdance" },
          { en: "Jazz", es: "Jazz", de: "Jazz", nl: "Jazz" }
        ],
        correct: 0,
        explanation: {
          en: "Ballet is a classical dance form known for its grace, precision, and storytelling through movement. Dancers wear special shoes called pointe shoes and perform choreographed routines that often tell stories from fairy tales, literature, or history.",
          es: "El ballet es una forma de danza clásica conocida por su gracia, precisión y narración a través del movimiento. Los bailarines usan zapatos especiales llamados zapatillas de punta y realizan rutinas coreografiadas que a menudo cuentan historias de cuentos de hadas, literatura o historia.",
          de: "Ballett ist eine klassische Tanzform, die für ihre Anmut, Präzision und ihr Geschichtenerzählen durch Bewegung bekannt ist. Tänzer tragen spezielle Schuhe namens Spitzenschuhe und führen choreographierte Routinen auf, die oft Geschichten aus Märchen, Literatur oder Geschichte erzählen.",
          nl: "Ballet is een klassieke dansvorm bekend om zijn gratie, precisie en verhalen vertellen door beweging. Dansers dragen speciale schoenen genaamd spitzenschoenen en voeren gechoreografeerde routines uit die vaak verhalen vertellen uit sprookjes, literatuur of geschiedenis."
        }
      },
      {
        question: {
          en: "Which instrument is often called the 'king of instruments'?",
          es: "¿Qué instrumento se llama a menudo el 'rey de los instrumentos'?",
          de: "Welches Instrument wird oft als 'König der Instrumente' bezeichnet?",
          nl: "Welk instrument wordt vaak de 'koning van de instrumenten' genoemd?"
        },
        options: [
          { en: "Organ", es: "Órgano", de: "Orgel", nl: "Orgel" },
          { en: "Piano", es: "Piano", de: "Klavier", nl: "Piano" },
          { en: "Violin", es: "Violín", de: "Violine", nl: "Viool" },
          { en: "Trumpet", es: "Trompeta", de: "Trompete", nl: "Trompet" }
        ],
        correct: 0,
        explanation: {
          en: "The organ is often called the 'king of instruments' because of its impressive size, wide range of sounds, and ability to fill large spaces with music. Church organs can have thousands of pipes and multiple keyboards called manuals.",
          es: "El órgano se llama a menudo el 'rey de los instrumentos' debido a su tamaño impresionante, amplia gama de sonidos y capacidad para llenar grandes espacios con música. Los órganos de iglesia pueden tener miles de tubos y múltiples teclados llamados manuales.",
          de: "Die Orgel wird oft als 'König der Instrumente' bezeichnet wegen ihrer beeindruckenden Größe, dem weiten Klangspektrum und der Fähigkeit, große Räume mit Musik zu füllen. Kirchenorgeln können Tausende von Pfeifen und mehrere Tastaturen namens Manuale haben.",
          nl: "Het orgel wordt vaak de 'koning van de instrumenten' genoemd vanwege zijn indrukwekkende grootte, breed scala aan geluiden en vermogen om grote ruimtes met muziek te vullen. Kerkorgels kunnen duizenden pijpen hebben en meerdere toetsenborden genaamd manualen."
        }
      },
      {
        question: {
          en: "What art form involves shaping clay into objects?",
          es: "¿Qué forma de arte involucra moldear arcilla en objetos?",
          de: "Welche Kunstform beinhaltet das Formen von Ton zu Objekten?",
          nl: "Welke kunstvorm houdt in dat klei wordt gevormd tot objecten?"
        },
        options: [
          { en: "Pottery", es: "Cerámica", de: "Töpferei", nl: "Pottenbakkerij" },
          { en: "Painting", es: "Pintura", de: "Malerei", nl: "Schilderkunst" },
          { en: "Photography", es: "Fotografía", de: "Fotografie", nl: "Fotografie" },
          { en: "Weaving", es: "Tejido", de: "Weben", nl: "Weven" }
        ],
        correct: 0,
        explanation: {
          en: "Pottery is the art of shaping clay into useful or decorative objects like bowls, vases, and cups. After shaping, the clay objects are fired in a hot oven called a kiln to make them hard and durable.",
          es: "La cerámica es el arte de moldear arcilla en objetos útiles o decorativos como tazones, jarrones y tazas. Después de moldear, los objetos de arcilla se cuecen en un horno caliente llamado horno cerámico para hacerlos duros y duraderos.",
          de: "Töpferei ist die Kunst, Ton zu nützlichen oder dekorativen Objekten wie Schalen, Vasen und Tassen zu formen. Nach dem Formen werden die Tonobjekte in einem heißen Ofen namens Brennofen gebrannt, um sie hart und haltbar zu machen.",
          nl: "Pottenbakkerij is de kunst van het vormen van klei tot nuttige of decoratieve objecten zoals kommen, vazen en bekers. Na het vormen worden de kleiobjecten gebakken in een hete oven genaamd een oven om ze hard en duurzaam te maken."
        }
      },
      {
        question: {
          en: "What do we call a song that tells a story?",
          es: "¿Cómo llamamos a una canción que cuenta una historia?",
          de: "Wie nennen wir ein Lied, das eine Geschichte erzählt?",
          nl: "Hoe noemen we een lied dat een verhaal vertelt?"
        },
        options: [
          { en: "Ballad", es: "Balada", de: "Ballade", nl: "Ballad" },
          { en: "Symphony", es: "Sinfonía", de: "Symphonie", nl: "Symfonie" },
          { en: "Anthem", es: "Himno", de: "Hymne", nl: "Lied" },
          { en: "Waltz", es: "Vals", de: "Walzer", nl: "Wals" }
        ],
        correct: 0,
        explanation: {
          en: "A ballad is a type of song that tells a story, often about love, adventure, or historical events. Traditional ballads were passed down orally from generation to generation, and many modern songs are also written in ballad form.",
          es: "Una balada es un tipo de canción que cuenta una historia, a menudo sobre amor, aventura o eventos históricos. Las baladas tradicionales se transmitían oralmente de generación en generación, y muchas canciones modernas también están escritas en forma de balada.",
          de: "Eine Ballade ist eine Art von Lied, das eine Geschichte erzählt, oft über Liebe, Abenteuer oder historische Ereignisse. Traditionelle Balladen wurden mündlich von Generation zu Generation weitergegeben, und viele moderne Lieder sind auch in Balladenform geschrieben.",
          nl: "Een ballad is een type lied dat een verhaal vertelt, vaak over liefde, avontuur of historische gebeurtenissen. Traditionele ballads werden mondeling doorgegeven van generatie op generatie, en veel moderne liedjes zijn ook geschreven in balladenvorm."
        }
      }
    ]
  };

  if (typeof window.addLevel === 'function') {
    window.addLevel('warm-up/arts-culture', level2);
  }
})();