(() => {
    const questions = [
        {
            question: {
                en: "What technique involves using very fine gradations of light and shadow, as perfected by Leonardo da Vinci?",
                es: "¿Qué técnica implica usar gradaciones muy finas de luz y sombra, como la perfeccionó Leonardo da Vinci?",
                de: "Welche Technik verwendet sehr feine Abstufungen von Licht und Schatten, wie sie Leonardo da Vinci perfektionierte?",
                nl: "Welke techniek houdt zeer fijne gradaties van licht en schaduw in, zoals geperfectioneerd door Leonardo da Vinci?"
            },
            options: [
                {
                    en: "Sfumato",
                    es: "Sfumato",
                    de: "Sfumato",
                    nl: "Sfumato"
                },
                {
                    en: "Chiaroscuro",
                    es: "Claroscuro",
                    de: "Chiaroscuro",
                    nl: "Chiaroscuro"
                },
                {
                    en: "Tenebrism",
                    es: "Tenebrismo",
                    de: "Tenebrismus",
                    nl: "Tenebrisme"
                },
                {
                    en: "Cangiante",
                    es: "Cangiante",
                    de: "Cangiante",
                    nl: "Cangiante"
                }
            ],
            correct: 0,
            explanation: {
                en: "Sfumato is Leonardo's technique of soft, subtle gradations without harsh outlines. The term means 'smoky' in Italian and creates atmospheric effects seen in the Mona Lisa.",
                es: "Sfumato es la técnica de Leonardo de gradaciones suaves y sutiles sin contornos duros. El término significa 'humeante' en italiano y crea efectos atmosféricos vistos en la Mona Lisa.",
                de: "Sfumato ist Leonardos Technik weicher, subtiler Abstufungen ohne harte Konturen. Der Begriff bedeutet 'rauchig' auf Italienisch und erzeugt atmosphärische Effekte, die in der Mona Lisa zu sehen sind.",
                nl: "Sfumato is Leonardo's techniek van zachte, subtiele gradaties zonder harde contouren. De term betekent 'rokerig' in het Italiaans en creëert atmosferische effecten zoals te zien in de Mona Lisa."
            }
        },
        {
            question: {
                en: "Which Quattrocento master painted 'The Tribute Money' fresco in the Brancacci Chapel?",
                es: "¿Qué maestro del Quattrocento pintó el fresco 'El Tributo' en la Capilla Brancacci?",
                de: "Welcher Quattrocento-Meister malte das Fresko 'Der Zinsgroschen' in der Brancacci-Kapelle?",
                nl: "Welke Quattrocento-meester schilderde het fresco 'Het Cijns Geld' in de Brancacci Kapel?"
            },
            options: [
                {
                    en: "Masaccio",
                    es: "Masaccio",
                    de: "Masaccio",
                    nl: "Masaccio"
                },
                {
                    en: "Fra Angelico",
                    es: "Fra Angélico",
                    de: "Fra Angelico",
                    nl: "Fra Angelico"
                },
                {
                    en: "Piero della Francesca",
                    es: "Piero della Francesca",
                    de: "Piero della Francesca",
                    nl: "Piero della Francesca"
                },
                {
                    en: "Andrea Mantegna",
                    es: "Andrea Mantegna",
                    de: "Andrea Mantegna",
                    nl: "Andrea Mantegna"
                }
            ],
            correct: 0,
            explanation: {
                en: "Masaccio painted 'The Tribute Money' (1425-1427) in the Brancacci Chapel, Santa Maria del Carmine, Florence. This work revolutionized painting with its use of linear perspective and psychological realism.",
                es: "Masaccio pintó 'El Tributo' (1425-1427) en la Capilla Brancacci, Santa Maria del Carmine, Florencia. Esta obra revolucionó la pintura con su uso de perspectiva lineal y realismo psicológico.",
                de: "Masaccio malte 'Der Zinsgroschen' (1425-1427) in der Brancacci-Kapelle, Santa Maria del Carmine, Florenz. Dieses Werk revolutionierte die Malerei mit seiner Verwendung linearer Perspektive und psychologischem Realismus.",
                nl: "Masaccio schilderde 'Het Cijns Geld' (1425-1427) in de Brancacci Kapel, Santa Maria del Carmine, Florence. Dit werk revolutioneerde de schilderkunst met zijn gebruik van lineair perspectief en psychologisch realisme."
            }
        },
        {
            question: {
                en: "Who painted 'The School of Athens' in the Vatican?",
                es: "¿Quién pintó 'La Escuela de Atenas' en el Vaticano?",
                de: "Wer malte 'Die Schule von Athen' im Vatikan?",
                nl: "Wie schilderde 'De School van Athene' in het Vaticaan?"
            },
            options: [
                {
                    en: "Raphael",
                    es: "Rafael",
                    de: "Raffael",
                    nl: "Rafaël"
                },
                {
                    en: "Michelangelo",
                    es: "Miguel Ángel",
                    de: "Michelangelo",
                    nl: "Michelangelo"
                },
                {
                    en: "Leonardo da Vinci",
                    es: "Leonardo da Vinci",
                    de: "Leonardo da Vinci",
                    nl: "Leonardo da Vinci"
                },
                {
                    en: "Bramante",
                    es: "Bramante",
                    de: "Bramante",
                    nl: "Bramante"
                }
            ],
            correct: 0,
            explanation: {
                en: "Raphael painted 'The School of Athens' (1509-1511) in the Apostolic Palace's Stanza della Segnatura. This Renaissance masterpiece depicts ancient Greek philosophers with contemporary artists' faces.",
                es: "Rafael pintó 'La Escuela de Atenas' (1509-1511) en la Stanza della Segnatura del Palacio Apostólico. Esta obra maestra renacentista representa filósofos griegos antiguos con rostros de artistas contemporáneos.",
                de: "Raffael malte 'Die Schule von Athen' (1509-1511) in der Stanza della Segnatura des Apostolischen Palastes. Dieses Renaissance-Meisterwerk zeigt antike griechische Philosophen mit Gesichtern zeitgenössischer Künstler.",
                nl: "Rafaël schilderde 'De School van Athene' (1509-1511) in de Stanza della Segnatura van het Apostolisch Paleis. Dit Renaissance meesterwerk toont oude Griekse filosofen met gezichten van hedendaagse kunstenaars."
            }
        },
        {
            question: {
                en: "Which technique involves painting with pigments suspended in hot wax?",
                es: "¿Qué técnica implica pintar con pigmentos suspendidos en cera caliente?",
                de: "Welche Technik beinhaltet das Malen mit in heißem Wachs suspendierten Pigmenten?",
                nl: "Welke techniek houdt schilderen in met pigmenten die zijn opgehangen in hete was?"
            },
            options: [
                {
                    en: "Encaustic",
                    es: "Encáustica",
                    de: "Enkaustik",
                    nl: "Encaustiek"
                },
                {
                    en: "Tempera",
                    es: "Témpera",
                    de: "Tempera",
                    nl: "Tempera"
                },
                {
                    en: "Fresco",
                    es: "Fresco",
                    de: "Fresko",
                    nl: "Fresco"
                },
                {
                    en: "Casein",
                    es: "Caseína",
                    de: "Kasein",
                    nl: "Caseïne"
                }
            ],
            correct: 0,
            explanation: {
                en: "Encaustic painting uses heated beeswax mixed with colored pigments. This ancient technique was used by the Greeks and Romans and revived by modern artists like Jasper Johns.",
                es: "La pintura encáustica usa cera de abeja calentada mezclada con pigmentos de color. Esta técnica antigua fue usada por griegos y romanos y revivida por artistas modernos como Jasper Johns.",
                de: "Die Enkaustik-Malerei verwendet erhitztes Bienenwachs gemischt mit farbigen Pigmenten. Diese antike Technik wurde von Griechen und Römern verwendet und von modernen Künstlern wie Jasper Johns wiederbelebt.",
                nl: "Encaustiek schilderen gebruikt verwarmde bijenwas gemengd met gekleurde pigmenten. Deze oude techniek werd gebruikt door Grieken en Romeinen en nieuw leven ingeblazen door moderne kunstenaars zoals Jasper Johns."
            }
        },
        {
            question: {
                en: "Who painted 'The Annunciation' now in the Uffizi Gallery?",
                es: "¿Quién pintó 'La Anunciación' que ahora está en la Galería Uffizi?",
                de: "Wer malte 'Die Verkündigung', die sich jetzt in der Uffizien-Galerie befindet?",
                nl: "Wie schilderde 'De Aankondiging' die nu in de Uffizi Gallery hangt?"
            },
            options: [
                {
                    en: "Leonardo da Vinci",
                    es: "Leonardo da Vinci",
                    de: "Leonardo da Vinci",
                    nl: "Leonardo da Vinci"
                },
                {
                    en: "Botticelli",
                    es: "Botticelli",
                    de: "Botticelli",
                    nl: "Botticelli"
                },
                {
                    en: "Fra Angelico",
                    es: "Fra Angélico",
                    de: "Fra Angelico",
                    nl: "Fra Angelico"
                },
                {
                    en: "Verrocchio",
                    es: "Verrocchio",
                    de: "Verrocchio",
                    nl: "Verrocchio"
                }
            ],
            correct: 0,
            explanation: {
                en: "Leonardo da Vinci painted 'The Annunciation' (1472-1475) early in his career while in Verrocchio's workshop. The painting shows his developing mastery of perspective and natural detail.",
                es: "Leonardo da Vinci pintó 'La Anunciación' (1472-1475) temprano en su carrera mientras estaba en el taller de Verrocchio. La pintura muestra su maestría en desarrollo de perspectiva y detalle natural.",
                de: "Leonardo da Vinci malte 'Die Verkündigung' (1472-1475) früh in seiner Laufbahn, während er in Verrocchios Werkstatt war. Das Gemälde zeigt seine sich entwickelnde Meisterschaft in Perspektive und natürlichem Detail.",
                nl: "Leonardo da Vinci schilderde 'De Aankondiging' (1472-1475) vroeg in zijn carrière terwijl hij in Verrocchio's werkplaats was. Het schilderij toont zijn zich ontwikkelende meesterschap van perspectief en natuurlijk detail."
            }
        },
        {
            question: {
                en: "Which artist developed the technique of divisionism?",
                es: "¿Qué artista desarrolló la técnica del divisionismo?",
                de: "Welcher Künstler entwickelte die Technik des Divisionismus?",
                nl: "Welke kunstenaar ontwikkelde de techniek van het divisionisme?"
            },
            options: [
                {
                    en: "Georges Seurat",
                    es: "Georges Seurat",
                    de: "Georges Seurat",
                    nl: "Georges Seurat"
                },
                {
                    en: "Paul Signac",
                    es: "Paul Signac",
                    de: "Paul Signac",
                    nl: "Paul Signac"
                },
                {
                    en: "Henri-Edmond Cross",
                    es: "Henri-Edmond Cross",
                    de: "Henri-Edmond Cross",
                    nl: "Henri-Edmond Cross"
                },
                {
                    en: "Maximilien Luce",
                    es: "Maximilien Luce",
                    de: "Maximilien Luce",
                    nl: "Maximilien Luce"
                }
            ],
            correct: 0,
            explanation: {
                en: "Georges Seurat developed divisionism (or pointillism), systematically applying color theory to separate pure colors in small dots. His scientific approach influenced the Neo-Impressionist movement.",
                es: "Georges Seurat desarrolló el divisionismo (o puntillismo), aplicando sistemáticamente la teoría del color para separar colores puros en pequeños puntos. Su enfoque científico influyó en el movimiento Neo-Impresionista.",
                de: "Georges Seurat entwickelte den Divisionismus (oder Pointillismus), indem er systematisch Farbtheorie anwendete, um reine Farben in kleinen Punkten zu trennen. Sein wissenschaftlicher Ansatz beeinflusste die Neo-Impressionistische Bewegung.",
                nl: "Georges Seurat ontwikkelde het divisionisme (of pointillisme), waarbij hij systematisch kleurtheorie toepaste om pure kleuren in kleine stippen te scheiden. Zijn wetenschappelijke benadering beïnvloedde de Neo-Impressionistische beweging."
            }
        },
        {
            question: {
                en: "Who painted 'The Arnolfini Portrait' featuring a convex mirror?",
                es: "¿Quién pintó 'El Retrato de Arnolfini' que presenta un espejo convexo?",
                de: "Wer malte 'Das Arnolfini-Porträt' mit einem konvexen Spiegel?",
                nl: "Wie schilderde 'Het Arnolfini Portret' met een bolle spiegel?"
            },
            options: [
                {
                    en: "Jan van Eyck",
                    es: "Jan van Eyck",
                    de: "Jan van Eyck",
                    nl: "Jan van Eyck"
                },
                {
                    en: "Rogier van der Weyden",
                    es: "Rogier van der Weyden",
                    de: "Rogier van der Weyden",
                    nl: "Rogier van der Weyden"
                },
                {
                    en: "Hans Memling",
                    es: "Hans Memling",
                    de: "Hans Memling",
                    nl: "Hans Memling"
                },
                {
                    en: "Petrus Christus",
                    es: "Petrus Christus",
                    de: "Petrus Christus",
                    nl: "Petrus Christus"
                }
            ],
            correct: 0,
            explanation: {
                en: "Jan van Eyck painted 'The Arnolfini Portrait' (1434), famous for its detailed symbolism and the convex mirror that reflects two additional figures, possibly including van Eyck himself.",
                es: "Jan van Eyck pintó 'El Retrato de Arnolfini' (1434), famoso por su simbolismo detallado y el espejo convexo que refleja dos figuras adicionales, posiblemente incluyendo al propio van Eyck.",
                de: "Jan van Eyck malte 'Das Arnolfini-Porträt' (1434), berühmt für seine detaillierte Symbolik und den konvexen Spiegel, der zwei zusätzliche Figuren reflektiert, möglicherweise einschließlich van Eyck selbst.",
                nl: "Jan van Eyck schilderde 'Het Arnolfini Portret' (1434), beroemd om zijn gedetailleerde symboliek en de bolle spiegel die twee extra figuren weerkaatst, mogelijk inclusief van Eyck zelf."
            }
        },
        {
            question: {
                en: "Which Northern Renaissance painter created 'The Garden of Earthly Delights'?",
                es: "¿Qué pintor del Renacimiento del Norte creó 'El Jardín de las Delicias Terrenales'?",
                de: "Welcher Maler der Nordrenaissance schuf 'Der Garten der Lüste'?",
                nl: "Welke Noord-Renaissance schilder creëeerde 'De Tuin der Lusten'?"
            },
            options: [
                {
                    en: "Hieronymus Bosch",
                    es: "Hieronymus Bosch",
                    de: "Hieronymus Bosch",
                    nl: "Hieronymus Bosch"
                },
                {
                    en: "Pieter Bruegel the Elder",
                    es: "Pieter Bruegel el Viejo",
                    de: "Pieter Bruegel der Ältere",
                    nl: "Pieter Bruegel de Oudere"
                },
                {
                    en: "Albrecht Dürer",
                    es: "Alberto Durero",
                    de: "Albrecht Dürer",
                    nl: "Albrecht Dürer"
                },
                {
                    en: "Hans Holbein the Younger",
                    es: "Hans Holbein el Joven",
                    de: "Hans Holbein der Jüngere",
                    nl: "Hans Holbein de Jongere"
                }
            ],
            correct: 0,
            explanation: {
                en: "Hieronymus Bosch painted this complex triptych (c. 1490-1510) depicting paradise, earthly pleasures, and hell with fantastical imagery that influenced Surrealists centuries later.",
                es: "Hieronymus Bosch pintó este complejo tríptico (c. 1490-1510) representando el paraíso, los placeres terrenales y el infierno con imágenes fantásticas que influyeron en los surrealistas siglos después.",
                de: "Hieronymus Bosch malte dieses komplexe Triptychon (c. 1490-1510), das Paradies, irdische Freuden und Hölle mit fantastischen Bildern darstellt, die Jahrhunderte später die Surrealisten beeinflussten.",
                nl: "Hieronymus Bosch schilderde dit complexe drieluik (c. 1490-1510) dat het paradijs, aardse genoegens en de hel uitbeeldt met fantastische beeldspraak die eeuwen later de Surrealisten beïnvloedde."
            }
        },
        {
            question: {
                en: "Who founded the Venetian school of painting and influenced Giorgione and Titian?",
                es: "¿Quién fundó la escuela veneciana de pintura e influyó en Giorgione y Tiziano?",
                de: "Wer gründete die venezianische Malschule und beeinflusste Giorgione und Tizian?",
                nl: "Wie stichtte de Venetiaanse schilderschool en beïnvloedde Giorgione en Titiaan?"
            },
            options: [
                {
                    en: "Giovanni Bellini",
                    es: "Giovanni Bellini",
                    de: "Giovanni Bellini",
                    nl: "Giovanni Bellini"
                },
                {
                    en: "Andrea Mantegna",
                    es: "Andrea Mantegna",
                    de: "Andrea Mantegna",
                    nl: "Andrea Mantegna"
                },
                {
                    en: "Jacopo Bellini",
                    es: "Jacopo Bellini",
                    de: "Jacopo Bellini",
                    nl: "Jacopo Bellini"
                },
                {
                    en: "Vittore Carpaccio",
                    es: "Vittore Carpaccio",
                    de: "Vittore Carpaccio",
                    nl: "Vittore Carpaccio"
                }
            ],
            correct: 0,
            explanation: {
                en: "Giovanni Bellini (c. 1430-1516) established the Venetian High Renaissance style, emphasizing color over line. His innovations in oil painting and atmospheric effects influenced all subsequent Venetian masters.",
                es: "Giovanni Bellini (c. 1430-1516) estableció el estilo del Alto Renacimiento veneciano, enfatizando el color sobre la línea. Sus innovaciones en pintura al óleo y efectos atmosféricos influyeron en todos los maestros venecianos posteriores.",
                de: "Giovanni Bellini (c. 1430-1516) etablierte den venezianischen Hochrenaissance-Stil und betonte Farbe über Linie. Seine Innovationen in der Ölmalerei und atmosphärischen Effekten beeinflussten alle nachfolgenden venezianischen Meister.",
                nl: "Giovanni Bellini (c. 1430-1516) vestigde de Venetiaanse Hoge Renaissance stijl, waarbij kleur werd benadrukt boven lijn. Zijn innovaties in olieverfschildering en atmosferische effecten beïnvloedden alle volgende Venetiaanse meesters."
            }
        },
        {
            question: {
                en: "Which artist painted 'The Apotheosis of Homer' in the Louvre ceiling?",
                es: "¿Qué artista pintó 'La Apoteosis de Homero' en el techo del Louvre?",
                de: "Welcher Künstler malte 'Die Apotheose Homers' an der Louvre-Decke?",
                nl: "Welke kunstenaar schilderde 'De Apotheose van Homerus' in het Louvre plafond?"
            },
            options: [
                {
                    en: "Jean-Auguste-Dominique Ingres",
                    es: "Jean-Auguste-Dominique Ingres",
                    de: "Jean-Auguste-Dominique Ingres",
                    nl: "Jean-Auguste-Dominique Ingres"
                },
                {
                    en: "Eugène Delacroix",
                    es: "Eugène Delacroix",
                    de: "Eugène Delacroix",
                    nl: "Eugène Delacroix"
                },
                {
                    en: "Jacques-Louis David",
                    es: "Jacques-Louis David",
                    de: "Jacques-Louis David",
                    nl: "Jacques-Louis David"
                },
                {
                    en: "Charles Le Brun",
                    es: "Charles Le Brun",
                    de: "Charles Le Brun",
                    nl: "Charles Le Brun"
                }
            ],
            correct: 0,
            explanation: {
                en: "Ingres painted 'The Apotheosis of Homer' (1827) for the ceiling of one of the Louvre's galleries. This neoclassical masterpiece shows Homer being crowned by Victory with famous writers and artists gathered around.",
                es: "Ingres pintó 'La Apoteosis de Homero' (1827) para el techo de una de las galerías del Louvre. Esta obra maestra neoclásica muestra a Homero siendo coronado por la Victoria con famosos escritores y artistas reunidos alrededor.",
                de: "Ingres malte 'Die Apotheose Homers' (1827) für die Decke einer der Louvre-Galerien. Dieses neoklassische Meisterwerk zeigt Homer, der von Victoria gekrönt wird, mit berühmten Schriftstellern und Künstlern versammelt herum.",
                nl: "Ingres schilderde 'De Apotheose van Homerus' (1827) voor het plafond van een van de Louvre galerijen. Dit neoklassieke meesterwerk toont Homerus die door Victoria wordt gekroond met beroemde schrijvers en kunstenaars eromheen verzameld."
            }
        },
        {
            question: {
                en: "What is the term for the Renaissance painting technique of gradually blending colors without visible brushstrokes?",
                es: "¿Cuál es el término para la técnica de pintura renacentista de mezclar gradualmente colores sin pinceladas visibles?",
                de: "Wie nennt man die Renaissance-Maltechnik der allmählichen Farbmischung ohne sichtbare Pinselstriche?",
                nl: "Wat is de term voor de Renaissance schildertechniek van geleidelijk kleuren mengen zonder zichtbare penseelstreken?"
            },
            options: [
                {
                    en: "Sfumato",
                    es: "Sfumato",
                    de: "Sfumato",
                    nl: "Sfumato"
                },
                {
                    en: "Impasto",
                    es: "Impasto",
                    de: "Impasto",
                    nl: "Impasto"
                },
                {
                    en: "Grisaille",
                    es: "Grisalla",
                    de: "Grisaille",
                    nl: "Grisaille"
                },
                {
                    en: "Verdaccio",
                    es: "Verdaccio",
                    de: "Verdaccio",
                    nl: "Verdaccio"
                }
            ],
            correct: 0,
            explanation: {
                en: "Sfumato, meaning 'smoky' in Italian, involves imperceptible transitions between colors and tones. Leonardo da Vinci was the master of this technique, particularly evident in the Mona Lisa's mysterious atmosphere.",
                es: "Sfumato, que significa 'humeante' en italiano, implica transiciones imperceptibles entre colores y tonos. Leonardo da Vinci fue el maestro de esta técnica, particularmente evidente en la atmósfera misteriosa de la Mona Lisa.",
                de: "Sfumato, was auf Italienisch 'rauchig' bedeutet, beinhaltet unmerkliche Übergänge zwischen Farben und Tönen. Leonardo da Vinci war der Meister dieser Technik, besonders evident in der mysteriösen Atmosphäre der Mona Lisa.",
                nl: "Sfumato, wat 'rokerig' betekent in het Italiaans, behelst onmerkbare overgangen tussen kleuren en tonen. Leonardo da Vinci was de meester van deze techniek, vooral duidelijk in de mysterieuze sfeer van de Mona Lisa."
            }
        },
        {
            question: {
                en: "Which artist painted 'The Adoration of the Mystic Lamb' in Ghent Cathedral?",
                es: "¿Qué artista pintó 'La Adoración del Cordero Místico' en la Catedral de Gante?",
                de: "Welcher Künstler malte 'Die Anbetung des Lamm Gottes' in der Kathedrale von Gent?",
                nl: "Welke kunstenaar schilderde 'De Aanbidding van het Lam Gods' in de Kathedraal van Gent?"
            },
            options: [
                {
                    en: "Jan van Eyck",
                    es: "Jan van Eyck",
                    de: "Jan van Eyck",
                    nl: "Jan van Eyck"
                },
                {
                    en: "Rogier van der Weyden",
                    es: "Rogier van der Weyden",
                    de: "Rogier van der Weyden",
                    nl: "Rogier van der Weyden"
                },
                {
                    en: "Robert Campin",
                    es: "Robert Campin",
                    de: "Robert Campin",
                    nl: "Robert Campin"
                },
                {
                    en: "Dieric Bouts",
                    es: "Dieric Bouts",
                    de: "Dieric Bouts",
                    nl: "Dieric Bouts"
                }
            ],
            correct: 0,
            explanation: {
                en: "Jan van Eyck completed 'The Adoration of the Mystic Lamb' (Ghent Altarpiece) around 1432, begun by his brother Hubert. This masterpiece revolutionized oil painting techniques in Northern Europe.",
                es: "Jan van Eyck completó 'La Adoración del Cordero Místico' (Retablo de Gante) alrededor de 1432, comenzado por su hermano Hubert. Esta obra maestra revolucionó las técnicas de pintura al óleo en el norte de Europa.",
                de: "Jan van Eyck vollendete 'Die Anbetung des Lamm Gottes' (Genter Altar) um 1432, begonnen von seinem Bruder Hubert. Dieses Meisterwerk revolutionierte die Ölmaltechniken in Nordeuropa.",
                nl: "Jan van Eyck voltooide 'De Aanbidding van het Lam Gods' (Het Lam Godsretabel) rond 1432, begonnen door zijn broer Hubert. Dit meesterwerk revolutioneerde de olieverftechnieken in Noord-Europa."
            }
        },
        {
            question: {
                en: "Who was the court painter to Charles V and Philip II of Spain?",
                es: "¿Quién fue el pintor de la corte de Carlos V y Felipe II de España?",
                de: "Wer war der Hofmaler von Karl V. und Philipp II. von Spanien?",
                nl: "Wie was de hofchilder van Karel V en Filips II van Spanje?"
            },
            options: [
                {
                    en: "Titian",
                    es: "Tiziano",
                    de: "Tizian",
                    nl: "Titiaan"
                },
                {
                    en: "El Greco",
                    es: "El Greco",
                    de: "El Greco",
                    nl: "El Greco"
                },
                {
                    en: "Veronese",
                    es: "Veronés",
                    de: "Veronese",
                    nl: "Veronese"
                },
                {
                    en: "Tintoretto",
                    es: "Tintoretto",
                    de: "Tintoretto",
                    nl: "Tintoretto"
                }
            ],
            correct: 0,
            explanation: {
                en: "Titian (Tiziano Vecellio) served as court painter to both Charles V and his son Philip II. His portraits of the Habsburg rulers established the standard for royal portraiture in Europe.",
                es: "Tiziano (Tiziano Vecellio) sirvió como pintor de la corte tanto de Carlos V como de su hijo Felipe II. Sus retratos de los gobernantes Habsburgo establecieron el estándar para el retrato real en Europa.",
                de: "Tizian (Tiziano Vecellio) diente beiden, Karl V. und seinem Sohn Philipp II., als Hofmaler. Seine Porträts der Habsburg-Herrscher setzten den Standard für königliche Porträtmalerei in Europa.",
                nl: "Titiaan (Tiziano Vecellio) diende als hofchilder van zowel Karel V als zijn zoon Filips II. Zijn portretten van de Habsburg heersers zetten de standaard voor koninklijke portretkunst in Europa."
            }
        },
        {
            question: {
                en: "Which artist created the ceiling fresco 'Allegory of Divine Providence' in Palazzo Barberini?",
                es: "¿Qué artista creó el fresco del techo 'Alegoría de la Divina Providencia' en el Palazzo Barberini?",
                de: "Welcher Künstler schuf das Deckenfresko 'Allegorie der Göttlichen Vorsehung' im Palazzo Barberini?",
                nl: "Welke kunstenaar creëerde het plafondfresco 'Allegorie van de Goddelijke Voorzienigheid' in Palazzo Barberini?"
            },
            options: [
                {
                    en: "Pietro da Cortona",
                    es: "Pietro da Cortona",
                    de: "Pietro da Cortona",
                    nl: "Pietro da Cortona"
                },
                {
                    en: "Annibale Carracci",
                    es: "Annibale Carracci",
                    de: "Annibale Carracci",
                    nl: "Annibale Carracci"
                },
                {
                    en: "Giovanni Battista Gaulli",
                    es: "Giovanni Battista Gaulli",
                    de: "Giovanni Battista Gaulli",
                    nl: "Giovanni Battista Gaulli"
                },
                {
                    en: "Andrea Pozzo",
                    es: "Andrea Pozzo",
                    de: "Andrea Pozzo",
                    nl: "Andrea Pozzo"
                }
            ],
            correct: 0,
            explanation: {
                en: "Pietro da Cortona painted this Baroque masterpiece (1633-1639) celebrating the Barberini family. The illusionistic ceiling creates the impression of figures floating in space above the viewer.",
                es: "Pietro da Cortona pintó esta obra maestra barroca (1633-1639) celebrando a la familia Barberini. El techo ilusionista crea la impresión de figuras flotando en el espacio sobre el espectador.",
                de: "Pietro da Cortona malte dieses barocke Meisterwerk (1633-1639) zur Feier der Familie Barberini. Die illusionistische Decke erzeugt den Eindruck von Figuren, die im Raum über dem Betrachter schweben.",
                nl: "Pietro da Cortona schilderde dit barokke meesterwerk (1633-1639) ter ere van de familie Barberini. Het illusionistische plafond wekt de indruk van figuren die in de ruimte boven de kijker zweven."
            }
        },
        {
            question: {
                en: "What painting technique involves applying paint in small, separate brushstrokes that appear to shimmer?",
                es: "¿Qué técnica de pintura implica aplicar pintura en pequeñas pinceladas separadas que parecen brillar?",
                de: "Welche Maltechnik beinhaltet das Auftragen von Farbe in kleinen, separaten Pinselstrichen, die zu schimmern scheinen?",
                nl: "Welke schildertechniek houdt in dat verf wordt aangebracht in kleine, afzonderlijke penseelstreken die lijken te glinsteren?"
            },
            options: [
                {
                    en: "Broken color technique",
                    es: "Técnica de color roto",
                    de: "Gebrochene Farbentechnik",
                    nl: "Gebroken kleur techniek"
                },
                {
                    en: "Alla prima",
                    es: "Alla prima",
                    de: "Alla prima",
                    nl: "Alla prima"
                },
                {
                    en: "Underpainting",
                    es: "Subpintura",
                    de: "Untermalung",
                    nl: "Onderschildering"
                },
                {
                    en: "Glazing",
                    es: "Veladuras",
                    de: "Lasierung",
                    nl: "Glacering"
                }
            ],
            correct: 0,
            explanation: {
                en: "Broken color technique involves placing pure colors side by side rather than mixing them on the palette. This creates optical mixing and vibrant effects, used extensively by Impressionists.",
                es: "La técnica de color roto implica colocar colores puros uno al lado del otro en lugar de mezclarlos en la paleta. Esto crea mezcla óptica y efectos vibrantes, usado extensivamente por los impresionistas.",
                de: "Die gebrochene Farbentechnik beinhaltet das Platzieren reiner Farben nebeneinander, anstatt sie auf der Palette zu mischen. Dies erzeugt optische Mischung und lebendige Effekte, ausgiebig von Impressionisten verwendet.",
                nl: "De gebroken kleur techniek houdt in dat pure kleuren naast elkaar worden geplaatst in plaats van ze op het palet te mengen. Dit creëert optische menging en levendige effecten, uitgebreid gebruikt door Impressionisten."
            }
        },
        {
            question: {
                en: "Who painted 'View of Delft' considered one of the finest Dutch landscape paintings?",
                es: "¿Quién pintó 'Vista de Delft' considerada una de las mejores pinturas de paisaje holandés?",
                de: "Wer malte 'Ansicht von Delft', die als eines der schönsten niederländischen Landschaftsgemälde gilt?",
                nl: "Wie schilderde 'Gezicht op Delft' beschouwd als een van de mooiste Nederlandse landschapsschilderijen?"
            },
            options: [
                {
                    en: "Johannes Vermeer",
                    es: "Johannes Vermeer",
                    de: "Johannes Vermeer",
                    nl: "Johannes Vermeer"
                },
                {
                    en: "Jacob van Ruisdael",
                    es: "Jacob van Ruisdael",
                    de: "Jacob van Ruisdael",
                    nl: "Jacob van Ruisdael"
                },
                {
                    en: "Aelbert Cuyp",
                    es: "Aelbert Cuyp",
                    de: "Aelbert Cuyp",
                    nl: "Aelbert Cuyp"
                },
                {
                    en: "Meindert Hobbema",
                    es: "Meindert Hobbema",
                    de: "Meindert Hobbema",
                    nl: "Meindert Hobbema"
                }
            ],
            correct: 0,
            explanation: {
                en: "Johannes Vermeer painted 'View of Delft' (c. 1660-1661), one of only two known cityscapes by the master. The painting captures morning light and weather effects with remarkable precision and poetry.",
                es: "Johannes Vermeer pintó 'Vista de Delft' (c. 1660-1661), uno de solo dos paisajes urbanos conocidos del maestro. La pintura captura la luz matutina y efectos climáticos con notable precisión y poesía.",
                de: "Johannes Vermeer malte 'Ansicht von Delft' (c. 1660-1661), eine von nur zwei bekannten Stadtansichten des Meisters. Das Gemälde fängt Morgenlicht und Wettereffekte mit bemerkenswerter Präzision und Poesie ein.",
                nl: "Johannes Vermeer schilderde 'Gezicht op Delft' (c. 1660-1661), een van slechts twee bekende stadsgezichten van de meester. Het schilderij vangt het ochtendlicht en weereffecten met opmerkelijke precisie en poëzie."
            }
        },
        {
            question: {
                en: "Which Renaissance artist created the bronze doors called 'Gates of Paradise' for Florence Baptistry?",
                es: "¿Qué artista del Renacimiento creó las puertas de bronce llamadas 'Puertas del Paraíso' para el Baptisterio de Florencia?",
                de: "Welcher Renaissance-Künstler schuf die Bronzetüren namens 'Paradiesespforten' für das Florentiner Baptisterium?",
                nl: "Welke Renaissance kunstenaar creëerde de bronzen deuren genaamd 'Poorten van het Paradijs' voor het Baptisterium van Florence?"
            },
            options: [
                {
                    en: "Lorenzo Ghiberti",
                    es: "Lorenzo Ghiberti",
                    de: "Lorenzo Ghiberti",
                    nl: "Lorenzo Ghiberti"
                },
                {
                    en: "Donatello",
                    es: "Donatello",
                    de: "Donatello",
                    nl: "Donatello"
                },
                {
                    en: "Andrea Pisano",
                    es: "Andrea Pisano",
                    de: "Andrea Pisano",
                    nl: "Andrea Pisano"
                },
                {
                    en: "Luca della Robbia",
                    es: "Luca della Robbia",
                    de: "Luca della Robbia",
                    nl: "Luca della Robbia"
                }
            ],
            correct: 0,
            explanation: {
                en: "Lorenzo Ghiberti created the 'Gates of Paradise' (1425-1452), the east doors of Florence Baptistry. Michelangelo supposedly gave them this name because they were worthy of being the gates of Paradise.",
                es: "Lorenzo Ghiberti creó las 'Puertas del Paraíso' (1425-1452), las puertas orientales del Baptisterio de Florencia. Miguel Ángel supuestamente les dio este nombre porque eran dignas de ser las puertas del Paraíso.",
                de: "Lorenzo Ghiberti schuf die 'Paradiesespforten' (1425-1452), die Osttüren des Florentiner Baptisteriums. Michelangelo gab ihnen angeblich diesen Namen, weil sie würdig waren, die Pforten des Paradieses zu sein.",
                nl: "Lorenzo Ghiberti creëerde de 'Poorten van het Paradijs' (1425-1452), de oostelijke deuren van het Baptisterium van Florence. Michelangelo gaf ze naar verluidt deze naam omdat ze waardig waren om de poorten van het Paradijs te zijn."
            }
        },
        {
            question: {
                en: "Which Mannerist painter created elongated figures in works like 'Madonna with the Long Neck'?",
                es: "¿Qué pintor manierista creó figuras alargadas en obras como 'Madonna del Cuello Largo'?",
                de: "Welcher manieristische Maler schuf langgestreckte Figuren in Werken wie 'Madonna mit dem langen Hals'?",
                nl: "Welke maniëristische schilder creëerde langgerekte figuren in werken zoals 'Madonna met de Lange Hals'?"
            },
            options: [
                {
                    en: "Parmigianino",
                    es: "Parmigianino",
                    de: "Parmigianino",
                    nl: "Parmigianino"
                },
                {
                    en: "Bronzino",
                    es: "Bronzino",
                    de: "Bronzino",
                    nl: "Bronzino"
                },
                {
                    en: "Rosso Fiorentino",
                    es: "Rosso Fiorentino",
                    de: "Rosso Fiorentino",
                    nl: "Rosso Fiorentino"
                },
                {
                    en: "Pontormo",
                    es: "Pontormo",
                    de: "Pontormo",
                    nl: "Pontormo"
                }
            ],
            correct: 0,
            explanation: {
                en: "Parmigianino (Francesco Mazzola) painted 'Madonna with the Long Neck' (1534-1540), exemplifying Mannerist aesthetics with its elegant, elongated proportions and artificial grace.",
                es: "Parmigianino (Francesco Mazzola) pintó 'Madonna del Cuello Largo' (1534-1540), ejemplificando la estética manierista con sus proporciones elegantes y alargadas y gracia artificial.",
                de: "Parmigianino (Francesco Mazzola) malte 'Madonna mit dem langen Hals' (1534-1540), ein Beispiel für manieristische Ästhetik mit seinen eleganten, langgestreckten Proportionen und künstlicher Anmut.",
                nl: "Parmigianino (Francesco Mazzola) schilderde 'Madonna met de Lange Hals' (1534-1540), een voorbeeld van maniëristische esthetiek met zijn elegante, langgerekte proporties en kunstmatige gratie."
            }
        }
    ,
        {
            question: {
                en: "Which Baroque painter created 'The Calling of Saint Matthew' with dramatic tenebrism?",
                es: "¿Qué pintor barroco creó 'El Llamado de San Mateo' con tenebrismo dramático?",
                de: "Welcher Barockmaler schuf 'Die Berufung des Heiligen Matthäus' mit dramatischem Tenebrismus?",
                nl: "Welke baroqschilder creëerde 'De Roeping van Sint-Mattheüs' met dramatisch tenebrisme?"
            },
            options: [
                {
                    en: "Caravaggio",
                    es: "Caravaggio",
                    de: "Caravaggio",
                    nl: "Caravaggio"
                },
                {
                    en: "Artemisia Gentileschi",
                    es: "Artemisia Gentileschi",
                    de: "Artemisia Gentileschi",
                    nl: "Artemisia Gentileschi"
                },
                {
                    en: "Guido Reni",
                    es: "Guido Reni",
                    de: "Guido Reni",
                    nl: "Guido Reni"
                },
                {
                    en: "Annibale Carracci",
                    es: "Annibale Carracci",
                    de: "Annibale Carracci",
                    nl: "Annibale Carracci"
                }
            ],
            correct: 0,
            explanation: {
                en: "Caravaggio painted 'The Calling of Saint Matthew' (1599-1600) for the Contarelli Chapel in San Luigi dei Francesi, Rome. His revolutionary use of tenebrism creates intense spiritual drama through dramatic light-dark contrasts.",
                es: "Caravaggio pintó 'El Llamado de San Mateo' (1599-1600) para la Capilla Contarelli en San Luigi dei Francesi, Roma. Su uso revolucionario del tenebrismo crea intenso drama espiritual a través de contrastes dramáticos de luz y oscuridad.",
                de: "Caravaggio malte 'Die Berufung des Heiligen Matthäus' (1599-1600) für die Contarelli-Kapelle in San Luigi dei Francesi, Rom. Seine revolutionäre Verwendung des Tenebrismus schafft intensives spirituelles Drama durch dramatische Hell-Dunkel-Kontraste.",
                nl: "Caravaggio schilderde 'De Roeping van Sint-Mattheüs' (1599-1600) voor de Contarelli Kapel in San Luigi dei Francesi, Rome. Zijn revolutionaire gebruik van tenebrisme creëert intens spiritueel drama door dramatische licht-donker contrasten."
            }
        },
        {
            question: {
                en: "Who painted 'Las Meninas' featuring a complex mirror reflection?",
                es: "¿Quién pintó 'Las Meninas' con un complejo reflejo de espejo?",
                de: "Wer malte 'Las Meninas' mit einer komplexen Spiegelreflexion?",
                nl: "Wie schilderde 'Las Meninas' met een complexe spiegelreflectie?"
            },
            options: [
                {
                    en: "Diego Velázquez",
                    es: "Diego Velázquez",
                    de: "Diego Velázquez",
                    nl: "Diego Velázquez"
                },
                {
                    en: "Francisco Goya",
                    es: "Francisco Goya",
                    de: "Francisco Goya",
                    nl: "Francisco Goya"
                },
                {
                    en: "El Greco",
                    es: "El Greco",
                    de: "El Greco",
                    nl: "El Greco"
                },
                {
                    en: "Bartolomé Esteban Murillo",
                    es: "Bartolomé Esteban Murillo",
                    de: "Bartolomé Esteban Murillo",
                    nl: "Bartolomé Esteban Murillo"
                }
            ],
            correct: 0,
            explanation: {
                en: "Diego Velázquez painted 'Las Meninas' (1656) depicting the Infanta Margarita surrounded by her entourage. The painting shows Velázquez himself painting, with the king and queen reflected in a mirror, creating a complex meta-representation that has fascinated art historians for centuries.",
                es: "Diego Velázquez pintó 'Las Meninas' (1656) representando a la Infanta Margarita rodeada de su séquito. La pintura muestra al propio Velázquez pintando, con el rey y la reina reflejados en un espejo, creando una meta-representación compleja que ha fascinado a historiadores del arte durante siglos.",
                de: "Diego Velázquez malte 'Las Meninas' (1656) und zeigte die Infantin Margarita umgeben von ihrem Gefolge. Das Gemälde zeigt Velázquez selbst beim Malen, mit dem König und der Königin, die sich in einem Spiegel widerspiegeln, und schafft eine komplexe Meta-Darstellung, die Kunsthistoriker seit Jahrhunderten fasziniert.",
                nl: "Diego Velázquez schilderde 'Las Meninas' (1656) met de Infanta Margarita omringd door haar gevolg. Het schilderij toont Velázquez zelf schilderend, met de koning en koningin weerspiegeld in een spiegel, waardoor een complexe meta-representatie ontstaat die kunsthistorici al eeuwenlang fascineert."
            }
        }
    ];

    if (typeof module !== 'undefined' && module.exports) {
        module.exports = questions;
    } else if (typeof window !== 'undefined') {
        window.kunstenaarsLevel5 = questions;
    }
})();