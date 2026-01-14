// Quiz Level 1: Drinken - Thee - Basic Tea Knowledge
(function() {
  const level1 = {
    name: {
      en: "Basic Tea Knowledge",
      es: "Conocimientos Básicos de Té",
      de: "Grundwissen über Tee",
      nl: "Basis Theekennis"
    },
    questions: [
      {
        question: {
          en: "What plant do all true teas come from?",
          es: "¿De qué planta provienen todos los tés verdaderos?",
          de: "Von welcher Pflanze stammen alle echten Tees?",
          nl: "Van welke plant komen alle echte theeën?"
        },
        options: [
          { en: "Camellia sinensis", es: "Camellia sinensis", de: "Camellia sinensis", nl: "Camellia sinensis" },
          { en: "Camellia japonica", es: "Camellia japonica", de: "Camellia japonica", nl: "Camellia japonica" },
          { en: "Tea rosa", es: "Tea rosa", de: "Tea rosa", nl: "Tea rosa" },
          { en: "Theobroma cacao", es: "Theobroma cacao", de: "Theobroma cacao", nl: "Theobroma cacao" }
        ],
        correct: 0,
        explanation: {
          en: "All true teas (black, green, white, oolong) come from the Camellia sinensis plant.",
          es: "Todos los tés verdaderos (negro, verde, blanco, oolong) provienen de la planta Camellia sinensis.",
          de: "Alle echten Tees (schwarz, grün, weiß, Oolong) stammen von der Camellia sinensis Pflanze.",
          nl: "Alle echte theeën (zwart, groen, wit, oolong) komen van de Camellia sinensis plant."
        }
      },
      {
        question: {
          en: "Which tea type undergoes full oxidation?",
          es: "¿Qué tipo de té sufre oxidación completa?",
          de: "Welcher Teetyp wird vollständig oxidiert?",
          nl: "Welk theetype ondergaat volledige oxidatie?"
        },
        options: [
          { en: "Green tea", es: "Té verde", de: "Grüner Tee", nl: "Groene thee" },
          { en: "White tea", es: "Té blanco", de: "Weißer Tee", nl: "Witte thee" },
          { en: "Black tea", es: "Té negro", de: "Schwarzer Tee", nl: "Zwarte thee" },
          { en: "Yellow tea", es: "Té amarillo", de: "Gelber Tee", nl: "Gele thee" }
        ],
        correct: 2,
        explanation: {
          en: "Black tea undergoes full oxidation, giving it its dark color and strong flavor.",
          es: "El té negro sufre oxidación completa, lo que le da su color oscuro y sabor fuerte.",
          de: "Schwarzer Tee wird vollständig oxidiert, was ihm seine dunkle Farbe und den kräftigen Geschmack verleiht.",
          nl: "Zwarte thee ondergaat volledige oxidatie, wat de donkere kleur en sterke smaak geeft."
        }
      },
      {
        question: {
          en: "What is the ideal water temperature for brewing green tea?",
          es: "¿Cuál es la temperatura ideal del agua para preparar té verde?",
          de: "Was ist die ideale Wassertemperatur für die Zubereitung von grünem Tee?",
          nl: "Wat is de ideale watertemperatuur voor het zetten van groene thee?"
        },
        options: [
          { en: "100°C (212°F)", es: "100°C (212°F)", de: "100°C (212°F)", nl: "100°C (212°F)" },
          { en: "70-80°C (158-176°F)", es: "70-80°C (158-176°F)", de: "70-80°C (158-176°F)", nl: "70-80°C (158-176°F)" },
          { en: "60°C (140°F)", es: "60°C (140°F)", de: "60°C (140°F)", nl: "60°C (140°F)" },
          { en: "90-95°C (194-203°F)", es: "90-95°C (194-203°F)", de: "90-95°C (194-203°F)", nl: "90-95°C (194-203°F)" }
        ],
        correct: 1,
        explanation: {
          en: "Green tea should be brewed with cooler water (70-80°C) to avoid bitterness.",
          es: "El té verde debe prepararse con agua más fría (70-80°C) para evitar la amargura.",
          de: "Grüner Tee sollte mit kühleren Wasser (70-80°C) aufgebrüht werden, um Bitterkeit zu vermeiden.",
          nl: "Groene thee moet met koeler water (70-80°C) gezet worden om bitterheid te voorkomen."
        }
      },
      {
        question: {
          en: "Which country is the largest producer of tea in the world?",
          es: "¿Qué país es el mayor productor de té del mundo?",
          de: "Welches Land ist der größte Teeproduzent der Welt?",
          nl: "Welk land is de grootste theeproducent ter wereld?"
        },
        options: [
          { en: "India", es: "India", de: "Indien", nl: "India" },
          { en: "China", es: "China", de: "China", nl: "China" },
          { en: "Sri Lanka", es: "Sri Lanka", de: "Sri Lanka", nl: "Sri Lanka" },
          { en: "Kenya", es: "Kenia", de: "Kenia", nl: "Kenia" }
        ],
        correct: 1,
        explanation: {
          en: "China is the world's largest tea producer, responsible for about 40% of global production.",
          es: "China es el mayor productor de té del mundo, responsable de aproximadamente el 40% de la producción mundial.",
          de: "China ist der größte Teeproduzent der Welt und verantwortlich für etwa 40% der weltweiten Produktion.",
          nl: "China is 's werelds grootste theeproducent, verantwoordelijk voor ongeveer 40% van de wereldproductie."
        }
      },
      {
        question: {
          en: "What does 'steep' mean in tea preparation?",
          es: "¿Qué significa 'steep' en la preparación del té?",
          de: "Was bedeutet 'ziehen lassen' bei der Teezubereitung?",
          nl: "Wat betekent 'trekken' bij theebereiding?"
        },
        options: [
          { en: "Adding sugar", es: "Agregar azúcar", de: "Zucker hinzufügen", nl: "Suiker toevoegen" },
          { en: "Heating the water", es: "Calentar el agua", de: "Das Wasser erhitzen", nl: "Het water verwarmen" },
          { en: "Letting tea leaves soak in hot water", es: "Dejar que las hojas de té se remojen en agua caliente", de: "Teeblätter in heißem Wasser ziehen lassen", nl: "Theebladeren laten weken in heet water" },
          { en: "Straining the tea", es: "Colar el té", de: "Den Tee abseihen", nl: "De thee zeven" }
        ],
        correct: 2,
        explanation: {
          en: "Steeping means letting tea leaves soak in hot water to extract flavor and nutrients.",
          es: "Steep significa dejar que las hojas de té se remojen en agua caliente para extraer sabor y nutrientes.",
          de: "Ziehen lassen bedeutet, Teeblätter in heißem Wasser einweichen zu lassen, um Geschmack und Nährstoffe zu extrahieren.",
          nl: "Trekken betekent theebladeren laten weken in heet water om smaak en voedingsstoffen te onttrekken."
        }
      },
      {
        question: {
          en: "Which tea is known for its Earl Grey variety?",
          es: "¿Qué té es conocido por su variedad Earl Grey?",
          de: "Welcher Tee ist für seine Earl Grey Variante bekannt?",
          nl: "Welke thee staat bekend om de Earl Grey variant?"
        },
        options: [
          { en: "Green tea", es: "Té verde", de: "Grüner Tee", nl: "Groene thee" },
          { en: "Black tea", es: "Té negro", de: "Schwarzer Tee", nl: "Zwarte thee" },
          { en: "White tea", es: "Té blanco", de: "Weißer Tee", nl: "Witte thee" },
          { en: "Oolong tea", es: "Té oolong", de: "Oolong-Tee", nl: "Oolong thee" }
        ],
        correct: 1,
        explanation: {
          en: "Earl Grey is a flavored black tea blend, typically with bergamot oil.",
          es: "Earl Grey es una mezcla de té negro aromatizado, típicamente con aceite de bergamota.",
          de: "Earl Grey ist eine aromatisierte Schwarzteemischung, typischerweise mit Bergamottöl.",
          nl: "Earl Grey is een gearomatiseerde zwarte theemengeling, meestal met bergamotolie."
        }
      },
      {
        question: {
          en: "What is chai?",
          es: "¿Qué es el chai?",
          de: "Was ist Chai?",
          nl: "Wat is chai?"
        },
        options: [
          { en: "A type of green tea", es: "Un tipo de té verde", de: "Eine Art grüner Tee", nl: "Een soort groene thee" },
          { en: "Spiced tea, usually with milk", es: "Té especiado, generalmente con leche", de: "Gewürztee, meist mit Milch", nl: "Gekruide thee, meestal met melk" },
          { en: "Cold tea with ice", es: "Té frío con hielo", de: "Kalter Tee mit Eis", nl: "Koude thee met ijs" },
          { en: "Tea without caffeine", es: "Té sin cafeína", de: "Tee ohne Koffein", nl: "Thee zonder cafeïne" }
        ],
        correct: 1,
        explanation: {
          en: "Chai is spiced tea, traditionally black tea with spices like cardamom, cinnamon, and ginger, often served with milk.",
          es: "Chai es té especiado, tradicionalmente té negro con especias como cardamomo, canela y jengibre, a menudo servido con leche.",
          de: "Chai ist gewürzter Tee, traditionell schwarzer Tee mit Gewürzen wie Kardamom, Zimt und Ingwer, oft mit Milch serviert.",
          nl: "Chai is gekruide thee, traditioneel zwarte thee met kruiden zoals kardemom, kaneel en gember, vaak geserveerd met melk."
        }
      },
      {
        question: {
          en: "How long should you typically steep black tea?",
          es: "¿Cuánto tiempo debes dejar reposar típicamente el té negro?",
          de: "Wie lange sollte man schwarzen Tee normalerweise ziehen lassen?",
          nl: "Hoe lang moet je zwarte thee meestal laten trekken?"
        },
        options: [
          { en: "1-2 min", es: "1-2 minutos", de: "1-2 Minuten", nl: "1-2 minuten" },
          { en: "3-5 min", es: "3-5 minutos", de: "3-5 Minuten", nl: "3-5 minuten" },
          { en: "10-15 min", es: "10-15 minutos", de: "10-15 Minuten", nl: "10-15 minuten" },
          { en: "30 sec", es: "30 segundos", de: "30 Sekunden", nl: "30 seconden" }
        ],
        correct: 1,
        explanation: {
          en: "Black tea should typically steep for 3-5 minutes for optimal flavor extraction.",
          es: "El té negro debe reposar típicamente de 3-5 minutos para una extracción óptima del sabor.",
          de: "Schwarzer Tee sollte normalerweise 3-5 Minuten ziehen, für optimale Geschmacksextraktion.",
          nl: "Zwarte thee moet meestal 3-5 minuten trekken voor optimale smaakextractie."
        }
      },
      {
        question: {
          en: "What gives tea its caffeine content?",
          es: "¿Qué le da al té su contenido de cafeína?",
          de: "Was verleiht dem Tee seinen Koffeingehalt?",
          nl: "Wat geeft thee zijn cafeïnegehalte?"
        },
        options: [
          { en: "Added chemicals", es: "Químicos añadidos", de: "Zugesetzte Chemikalien", nl: "Toegevoegde chemicaliën" },
          { en: "The tea plant naturally contains caffeine", es: "La planta del té contiene cafeína naturalmente", de: "Die Teepflanze enthält natürlich Koffein", nl: "De theeplant bevat van nature cafeïne" },
          { en: "Sugar content", es: "Contenido de azúcar", de: "Zuckergehalt", nl: "Suikergehalte" },
          { en: "Hot water", es: "Agua caliente", de: "Heißes Wasser", nl: "Heet water" }
        ],
        correct: 1,
        explanation: {
          en: "The Camellia sinensis plant naturally contains caffeine as a defense mechanism against insects.",
          es: "La planta Camellia sinensis contiene cafeína naturalmente como mecanismo de defensa contra insectos.",
          de: "Die Camellia sinensis Pflanze enthält natürlich Koffein als Abwehrmechanismus gegen Insekten.",
          nl: "De Camellia sinensis plant bevat van nature cafeïne als verdedigingsmechanisme tegen insecten."
        }
      },
      {
        question: {
          en: "What is the main difference between tea bags and loose leaf tea?",
          es: "¿Cuál es la principal diferencia entre las bolsas de té y el té de hojas sueltas?",
          de: "Was ist der Hauptunterschied zwischen Teebeuteln und losem Blatttee?",
          nl: "Wat is het belangrijkste verschil tussen theezakjes en losse bladthee?"
        },
        options: [
          { en: "Tea bags contain artificial flavoring", es: "Las bolsas de té contienen saborizante artificial", de: "Teebeutel enthalten künstliche Aromen", nl: "Theezakjes bevatten kunstmatige smaakstoffen" },
          { en: "Loose leaf uses whole leaves, tea bags use smaller pieces", es: "Las hojas sueltas usan hojas enteras, las bolsas usan piezas más pequeñas", de: "Loses Blatt verwendet ganze Blätter, Teebeutel kleinere Stücke", nl: "Losse bladeren gebruikt hele bladeren, theezakjes kleinere stukjes" },
          { en: "Tea bags are always decaffeinated", es: "Las bolsas de té siempre están descafeinadas", de: "Teebeutel sind immer koffeinfrei", nl: "Theezakjes zijn altijd cafeïnevrij" },
          { en: "Loose leaf tea is always organic", es: "El té de hojas sueltas siempre es orgánico", de: "Loser Blatttee ist immer biologisch", nl: "Losse bladthee is altijd biologisch" }
        ],
        correct: 1,
        explanation: {
          en: "Loose leaf tea typically uses whole or large pieces of tea leaves, while tea bags often contain smaller, broken pieces or dust.",
          es: "El té de hojas sueltas típicamente usa hojas enteras o grandes pedazos, mientras que las bolsas a menudo contienen piezas más pequeñas o polvo.",
          de: "Loser Blatttee verwendet typischerweise ganze oder große Teeblattstücke, während Teebeutel oft kleinere, gebrochene Stücke oder Staub enthalten.",
          nl: "Losse bladthee gebruikt meestal hele of grote stukken theebladeren, terwijl theezakjes vaak kleinere, gebroken stukjes of stof bevatten."
        }
      },
      {
        question: {
          en: "What is herbal tea also known as?",
          es: "¿Cómo se conoce también al té de hierbas?",
          de: "Wie wird Kräutertee auch genannt?",
          nl: "Hoe wordt kruidenthee ook wel genoemd?"
        },
        options: [
          {
                    en: "True tea",
                    es: "Té verdadero",
                    de: "Echter Tee",
                    nl: "Echte thee"
          },
          {
                    en: "Tisane",
                    es: "Tisana",
                    de: "Tisane",
                    nl: "Tisane"
          },
          {
                    en: "Black tea",
                    es: "Té negro",
                    de: "Schwarzer Tee",
                    nl: "Zwarte thee"
          },
          {
                    en: "Bubble tea",
                    es: "Té de burbujas",
                    de: "Bubble Tea",
                    nl: "Bubble tea"
          }
],
        correct: 1,
        explanation: {
          en: "Herbal tea is also called tisane because it's not made from the Camellia sinensis plant, but from herbs, flowers, or fruits.",
          es: "El té de hierbas también se llama tisana porque no está hecho de la planta Camellia sinensis, sino de hierbas, flores o frutas.",
          de: "Kräutertee wird auch Tisane genannt, weil er nicht aus der Camellia sinensis Pflanze hergestellt wird, sondern aus Kräutern, Blüten oder Früchten.",
          nl: "Kruidenthee wordt ook tisane genoemd omdat het niet gemaakt is van de Camellia sinensis plant, maar van kruiden, bloemen of vruchten."
        }
      },
      {
        question: {
          en: "Which tea is the least processed?",
          es: "¿Qué té es el menos procesado?",
          de: "Welcher Tee ist am wenigsten verarbeitet?",
          nl: "Welke thee is het minst verwerkt?"
        },
        options: [
          {
                    en: "Black tea",
                    es: "Té negro",
                    de: "Schwarzer Tee",
                    nl: "Zwarte thee"
          },
          {
                    en: "White tea",
                    es: "Té blanco",
                    de: "Weißer Tee",
                    nl: "Witte thee"
          },
          {
                    en: "Oolong tea",
                    es: "Té oolong",
                    de: "Oolong-Tee",
                    nl: "Oolong thee"
          },
          {
                    en: "Pu-erh tea",
                    es: "Té pu-erh",
                    de: "Pu-erh-Tee",
                    nl: "Pu-erh thee"
          }
],
        correct: 1,
        explanation: {
          en: "White tea is the least processed tea type, simply withered and dried with minimal handling.",
          es: "El té blanco es el tipo de té menos procesado, simplemente marchitado y secado con un manejo mínimo.",
          de: "Weißer Tee ist die am wenigsten verarbeitete Teesorte, einfach gewelkt und getrocknet mit minimaler Handhabung.",
          nl: "Witte thee is het minst verwerkte theetype, simpelweg verwelkt en gedroogd met minimale behandeling."
        }
      },
      {
        question: {
          en: "What is matcha?",
          es: "¿Qué es matcha?",
          de: "Was ist Matcha?",
          nl: "Wat is matcha?"
        },
        options: [
          {
                    en: "A powdered green tea",
                    es: "Un té verde en polvo",
                    de: "Ein pulverisierter grüner Tee",
                    nl: "Een gepoederde groene thee"
          },
          {
                    en: "A type of black tea",
                    es: "Un tipo de té negro",
                    de: "Eine Art schwarzer Tee",
                    nl: "Een soort zwarte thee"
          },
          {
                    en: "A tea brewing method",
                    es: "Un método de preparación de té",
                    de: "Eine Teebrühmethode",
                    nl: "Een theezetmethode"
          },
          {
                    en: "A tea plant variety",
                    es: "Una variedad de planta de té",
                    de: "Eine Teepflanzensorte",
                    nl: "Een theeplantsoort"
          }
],
        correct: 0,
        explanation: {
          en: "Matcha is a powdered green tea traditionally used in Japanese tea ceremonies.",
          es: "Matcha es un té verde en polvo utilizado tradicionalmente en las ceremonias del té japonesas.",
          de: "Matcha ist ein pulverisierter grüner Tee, der traditionell in japanischen Teezeremonien verwendet wird.",
          nl: "Matcha is een gepoederde groene thee die traditioneel gebruikt wordt in Japanse theeceremoniën."
        }
      },
      {
        question: {
          en: "What flavor is added to Earl Grey tea?",
          es: "¿Qué sabor se añade al té Earl Grey?",
          de: "Welcher Geschmack wird dem Earl Grey Tee hinzugefügt?",
          nl: "Welke smaak wordt toegevoegd aan Earl Grey thee?"
        },
        options: [
          {
                    en: "Lemon",
                    es: "Limón",
                    de: "Zitrone",
                    nl: "Citroen"
          },
          {
                    en: "Vanilla",
                    es: "Vainilla",
                    de: "Vanille",
                    nl: "Vanille"
          },
          {
                    en: "Bergamot",
                    es: "Bergamota",
                    de: "Bergamotte",
                    nl: "Bergamot"
          },
          {
                    en: "Jasmine",
                    es: "Jazmín",
                    de: "Jasmin",
                    nl: "Jasmijn"
          }
],
        correct: 2,
        explanation: {
          en: "Earl Grey tea is flavored with bergamot oil, which gives it a distinctive citrus aroma.",
          es: "El té Earl Grey está aromatizado con aceite de bergamota, que le da un aroma cítrico distintivo.",
          de: "Earl Grey Tee wird mit Bergamottöl aromatisiert, was ihm ein charakteristisches Zitrusaroma verleiht.",
          nl: "Earl Grey thee is gearomatiseerd met bergamotolie, wat het een kenmerkend citrusaroma geeft."
        }
      },
      {
        question: {
          en: "What is iced tea?",
          es: "¿Qué es el té helado?",
          de: "Was ist Eistee?",
          nl: "Wat is ijsthee?"
        },
        options: [
          {
                    en: "Tea served cold with ice",
                    es: "Té servido frío con hielo",
                    de: "Kalt servierter Tee mit Eis",
                    nl: "Koud geserveerde thee met ijs"
          },
          {
                    en: "Tea frozen into cubes",
                    es: "Té congelado en cubos",
                    de: "Zu Würfeln gefrorener Tee",
                    nl: "Tot blokjes bevroren thee"
          },
          {
                    en: "Tea from cold climates",
                    es: "Té de climas fríos",
                    de: "Tee aus kalten Klimazonen",
                    nl: "Thee uit koude klimaten"
          },
          {
                    en: "Tea stored in the refrigerator",
                    es: "Té almacenado en el refrigerador",
                    de: "Im Kühlschrank gelagerter Tee",
                    nl: "Thee bewaard in de koelkast"
          }
],
        correct: 0,
        explanation: {
          en: "Iced tea is tea that has been chilled or brewed cold and is served over ice, popular especially in hot weather.",
          es: "El té helado es té que ha sido enfriado o preparado en frío y se sirve con hielo, popular especialmente en clima cálido.",
          de: "Eistee ist Tee, der gekühlt oder kalt aufgebrüht wurde und über Eis serviert wird, besonders beliebt bei heißem Wetter.",
          nl: "IJsthee is thee die gekoeld of koud gezet is en geserveerd wordt met ijs, vooral populair bij warm weer."
        }
      },
      {
        question: {
          en: "Why should you not use boiling water for all tea types?",
          es: "¿Por qué no deberías usar agua hirviendo para todos los tipos de té?",
          de: "Warum sollte man nicht kochendes Wasser für alle Teesorten verwenden?",
          nl: "Waarom zou je niet kokend water moeten gebruiken voor alle theetypes?"
        },
        options: [
          {
                    en: "It makes tea too strong",
                    es: "Hace el té demasiado fuerte",
                    de: "Es macht den Tee zu stark",
                    nl: "Het maakt thee te sterk"
          },
          {
                    en: "It can make delicate teas bitter",
                    es: "Puede hacer que los tés delicados sean amargos",
                    de: "Es kann empfindliche Tees bitter machen",
                    nl: "Het kan delicate theeën bitter maken"
          },
          {
                    en: "It removes caffeine",
                    es: "Elimina la cafeína",
                    de: "Es entfernt Koffein",
                    nl: "Het verwijdert cafeïne"
          },
          {
                    en: "It changes the tea color",
                    es: "Cambia el color del té",
                    de: "Es ändert die Teefarbe",
                    nl: "Het verandert de theekleur"
          }
],
        correct: 1,
        explanation: {
          en: "Boiling water can scorch delicate green and white teas, making them bitter. Different teas need different temperatures.",
          es: "El agua hirviendo puede quemar los tés verdes y blancos delicados, haciéndolos amargos. Diferentes tés necesitan diferentes temperaturas.",
          de: "Kochendes Wasser kann empfindliche grüne und weiße Tees verbrennen und bitter machen. Verschiedene Tees benötigen verschiedene Temperaturen.",
          nl: "Kokend water kan delicate groene en witte theeën verschroeien, waardoor ze bitter worden. Verschillende theeën hebben verschillende temperaturen nodig."
        }
      },
      {
        question: {
          en: "What does 'brew' mean in tea preparation?",
          es: "¿Qué significa 'brew' en la preparación del té?",
          de: "Was bedeutet 'aufbrühen' bei der Teezubereitung?",
          nl: "Wat betekent 'zetten' bij theebereiding?"
        },
        options: [
          {
                    en: "To pour tea into a cup",
                    es: "Verter té en una taza",
                    de: "Tee in eine Tasse gießen",
                    nl: "Thee in een kopje gieten"
          },
          {
                    en: "To make tea by soaking leaves in water",
                    es: "Hacer té remojando hojas en agua",
                    de: "Tee durch Einweichen von Blättern in Wasser zubereiten",
                    nl: "Thee maken door bladeren in water te laten trekken"
          },
          {
                    en: "To add sugar to tea",
                    es: "Agregar azúcar al té",
                    de: "Zucker zum Tee hinzufügen",
                    nl: "Suiker aan thee toevoegen"
          },
          {
                    en: "To cool down hot tea",
                    es: "Enfriar té caliente",
                    de: "Heißen Tee abkühlen",
                    nl: "Hete thee afkoelen"
          }
],
        correct: 1,
        explanation: {
          en: "To brew tea means to make it by soaking tea leaves in hot water to extract their flavor and color.",
          es: "Preparar té significa hacerlo remojando hojas de té en agua caliente para extraer su sabor y color.",
          de: "Tee aufbrühen bedeutet, ihn durch Einweichen von Teeblättern in heißem Wasser zuzubereiten, um Geschmack und Farbe zu extrahieren.",
          nl: "Thee zetten betekent het maken door theebladeren in heet water te laten weken om smaak en kleur te extraheren."
        }
      },
      {
        question: {
          en: "Which country is famous for afternoon tea tradition?",
          es: "¿Qué país es famoso por la tradición del té de la tarde?",
          de: "Welches Land ist berühmt für die Nachmittagstee-Tradition?",
          nl: "Welk land staat bekend om de middag thee traditie?"
        },
        options: [
          {
                    en: "China",
                    es: "China",
                    de: "China",
                    nl: "China"
          },
          {
                    en: "Japan",
                    es: "Japón",
                    de: "Japan",
                    nl: "Japan"
          },
          {
                    en: "England",
                    es: "Inglaterra",
                    de: "England",
                    nl: "Engeland"
          },
          {
                    en: "India",
                    es: "India",
                    de: "Indien",
                    nl: "India"
          }
],
        correct: 2,
        explanation: {
          en: "England is famous for its afternoon tea tradition, typically served between 3-5 PM with sandwiches and pastries.",
          es: "Inglaterra es famosa por su tradición del té de la tarde, típicamente servido entre las 3-5 PM con sándwiches y pasteles.",
          de: "England ist berühmt für seine Nachmittagstee-Tradition, die typischerweise zwischen 15-17 Uhr mit Sandwiches und Gebäck serviert wird.",
          nl: "Engeland staat bekend om zijn middag thee traditie, meestal geserveerd tussen 15-17 uur met sandwiches en gebak."
        }
      },
      {
        question: {
          en: "What is a teapot used for?",
          es: "¿Para qué se usa una tetera?",
          de: "Wofür wird eine Teekanne verwendet?",
          nl: "Waarvoor wordt een theepot gebruikt?"
        },
        options: [
          {
                    en: "Storing dry tea leaves",
                    es: "Almacenar hojas de té secas",
                    de: "Trockene Teeblätter lagern",
                    nl: "Droge theebladeren bewaren"
          },
          {
                    en: "Brewing and serving tea",
                    es: "Preparar y servir té",
                    de: "Tee aufbrühen und servieren",
                    nl: "Thee zetten en serveren"
          },
          {
                    en: "Heating water only",
                    es: "Solo calentar agua",
                    de: "Nur Wasser erhitzen",
                    nl: "Alleen water verwarmen"
          },
          {
                    en: "Measuring tea amounts",
                    es: "Medir cantidades de té",
                    de: "Teemengen messen",
                    nl: "Thee hoeveelheden meten"
          }
],
        correct: 1,
        explanation: {
          en: "A teapot is a vessel used for brewing and serving tea, allowing the leaves to steep properly before pouring.",
          es: "Una tetera es un recipiente utilizado para preparar y servir té, permitiendo que las hojas reposen adecuadamente antes de verter.",
          de: "Eine Teekanne ist ein Gefäß zum Aufbrühen und Servieren von Tee, das den Blättern ermöglicht, richtig zu ziehen, bevor man einschenkt.",
          nl: "Een theepot is een vat gebruikt voor het zetten en serveren van thee, waardoor de bladeren goed kunnen trekken voordat ze worden ingeschonken."
        }
      },
      {
        question: {
          en: "What is tea made from?",
          es: "¿De qué está hecho el té?",
          de: "Woraus wird Tee hergestellt?",
          nl: "Waar is thee van gemaakt?"
        },
        options: [
          {
                    en: "Coffee beans",
                    es: "Granos de café",
                    de: "Kaffeebohnen",
                    nl: "Koffiebonen"
          },
          {
                    en: "Tea leaves",
                    es: "Hojas de té",
                    de: "Teeblätter",
                    nl: "Theebladeren"
          },
          {
                    en: "Cocoa beans",
                    es: "Granos de cacao",
                    de: "Kakaobohnen",
                    nl: "Cacaobonen"
          },
          {
                    en: "Spices only",
                    es: "Solo especias",
                    de: "Nur Gewürze",
                    nl: "Alleen kruiden"
          }
],
        correct: 1,
        explanation: {
          en: "Tea is made from the leaves of the tea plant (Camellia sinensis), which are dried and processed in various ways.",
          es: "El té está hecho de las hojas de la planta de té (Camellia sinensis), que se secan y procesan de varias maneras.",
          de: "Tee wird aus den Blättern der Teepflanze (Camellia sinensis) hergestellt, die getrocknet und auf verschiedene Weise verarbeitet werden.",
          nl: "Thee is gemaakt van de bladeren van de theeplant (Camellia sinensis), die gedroogd en op verschillende manieren verwerkt worden."
        }    },
    {
      question: {
        en: "What plant does tea come from?",
        es: "What plant does tea come from?",
        de: "What plant does tea come from?",
        nl: "What plant does tea come from?"
      },
      options: [
        { en: "Camellia sinensis", es: "Camellia sinensis", de: "Camellia sinensis", nl: "Camellia sinensis" },
        { en: "Tea tree", es: "Tea tree", de: "Tea tree", nl: "Tea tree" },
        { en: "Mint plant", es: "Mint plant", de: "Mint plant", nl: "Mint plant" },
        { en: "Jasmine plant", es: "Jasmine plant", de: "Jasmine plant", nl: "Jasmine plant" }
      ],
      correct: 0,
      explanation: {
        en: "All true tea comes from the Camellia sinensis plant.",
        es: "All true tea comes from the Camellia sinensis plant.",
        de: "All true tea comes from the Camellia sinensis plant.",
        nl: "All true tea comes from the Camellia sinensis plant."
      }
    },
    {
      question: {
        en: "What are the main types of tea?",
        es: "What are the main types of tea?",
        de: "What are the main types of tea?",
        nl: "What are the main types of tea?"
      },
      options: [
        { en: "Black, green, white, oolong, pu-erh", es: "Black, green, white, oolong, pu-erh", de: "Black, green, white, oolong, pu-erh", nl: "Black, green, white, oolong, pu-erh" },
        { en: "Herbal, fruit, spice", es: "Herbal, fruit, spice", de: "Herbal, fruit, spice", nl: "Herbal, fruit, spice" },
        { en: "Hot and iced", es: "Hot and iced", de: "Hot and iced", nl: "Hot and iced" },
        { en: "Chinese and Indian", es: "Chinese and Indian", de: "Chinese and Indian", nl: "Chinese and Indian" }
      ],
      correct: 0,
      explanation: {
        en: "The main types of true tea are black, green, white, oolong, and pu-erh, all from the same plant.",
        es: "The main types of true tea are black, green, white, oolong, and pu-erh, all from the same plant.",
        de: "The main types of true tea are black, green, white, oolong, and pu-erh, all from the same plant.",
        nl: "The main types of true tea are black, green, white, oolong, and pu-erh, all from the same plant."
      }
    },
    {
      question: {
        en: "What is the difference between black and green tea?",
        es: "What is the difference between black and green tea?",
        de: "What is the difference between black and green tea?",
        nl: "What is the difference between black and green tea?"
      },
      options: [
        { en: "Level of oxidation", es: "Level of oxidation", de: "Level of oxidation", nl: "Level of oxidation" },
        { en: "Different plants", es: "Different plants", de: "Different plants", nl: "Different plants" },
        { en: "Caffeine content", es: "Caffeine content", de: "Caffeine content", nl: "Caffeine content" },
        { en: "Growing region", es: "Growing region", de: "Growing region", nl: "Growing region" }
      ],
      correct: 0,
      explanation: {
        en: "The difference is oxidation: black tea is fully oxidized, green tea is minimally oxidized.",
        es: "The difference is oxidation: black tea is fully oxidized, green tea is minimally oxidized.",
        de: "The difference is oxidation: black tea is fully oxidized, green tea is minimally oxidized.",
        nl: "The difference is oxidation: black tea is fully oxidized, green tea is minimally oxidized."
      }
    },
    {
      question: {
        en: "What country produces the most tea?",
        es: "What country produces the most tea?",
        de: "What country produces the most tea?",
        nl: "What country produces the most tea?"
      },
      options: [
        { en: "China", es: "China", de: "China", nl: "China" },
        { en: "India", es: "India", de: "India", nl: "India" },
        { en: "Japan", es: "Japan", de: "Japan", nl: "Japan" },
        { en: "Sri Lanka", es: "Sri Lanka", de: "Sri Lanka", nl: "Sri Lanka" }
      ],
      correct: 0,
      explanation: {
        en: "China is the world's largest tea producer.",
        es: "China is the world's largest tea producer.",
        de: "China is the world's largest tea producer.",
        nl: "China is the world's largest tea producer."
      }
    },
    {
      question: {
        en: "What is Earl Grey tea?",
        es: "What is Earl Grey tea?",
        de: "What is Earl Grey tea?",
        nl: "What is Earl Grey tea?"
      },
      options: [
        { en: "Black tea flavored with bergamot", es: "Black tea flavored with bergamot", de: "Black tea flavored with bergamot", nl: "Black tea flavored with bergamot" },
        { en: "Green tea", es: "Green tea", de: "Green tea", nl: "Green tea" },
        { en: "White tea", es: "White tea", de: "White tea", nl: "White tea" },
        { en: "Herbal tea", es: "Herbal tea", de: "Herbal tea", nl: "Herbal tea" }
      ],
      correct: 0,
      explanation: {
        en: "Earl Grey is black tea flavored with oil from the bergamot orange.",
        es: "Earl Grey is black tea flavored with oil from the bergamot orange.",
        de: "Earl Grey is black tea flavored with oil from the bergamot orange.",
        nl: "Earl Grey is black tea flavored with oil from the bergamot orange."
      }
    },
    {
      question: {
        en: "What is matcha?",
        es: "What is matcha?",
        de: "What is matcha?",
        nl: "What is matcha?"
      },
      options: [
        { en: "Powdered green tea", es: "Powdered green tea", de: "Powdered green tea", nl: "Powdered green tea" },
        { en: "Fermented tea", es: "Fermented tea", de: "Fermented tea", nl: "Fermented tea" },
        { en: "Black tea", es: "Black tea", de: "Black tea", nl: "Black tea" },
        { en: "Herbal tea", es: "Herbal tea", de: "Herbal tea", nl: "Herbal tea" }
      ],
      correct: 0,
      explanation: {
        en: "Matcha is a fine powder made from specially grown and processed green tea leaves.",
        es: "Matcha is a fine powder made from specially grown and processed green tea leaves.",
        de: "Matcha is a fine powder made from specially grown and processed green tea leaves.",
        nl: "Matcha is a fine powder made from specially grown and processed green tea leaves."
      }
    },
    {
      question: {
        en: "What is oolong tea?",
        es: "What is oolong tea?",
        de: "What is oolong tea?",
        nl: "What is oolong tea?"
      },
      options: [
        { en: "Partially oxidized tea", es: "Partially oxidized tea", de: "Partially oxidized tea", nl: "Partially oxidized tea" },
        { en: "Fully oxidized tea", es: "Fully oxidized tea", de: "Fully oxidized tea", nl: "Fully oxidized tea" },
        { en: "Unoxidized tea", es: "Unoxidized tea", de: "Unoxidized tea", nl: "Unoxidized tea" },
        { en: "Herbal tea", es: "Herbal tea", de: "Herbal tea", nl: "Herbal tea" }
      ],
      correct: 0,
      explanation: {
        en: "Oolong tea is partially oxidized, falling between green and black tea in processing.",
        es: "Oolong tea is partially oxidized, falling between green and black tea in processing.",
        de: "Oolong tea is partially oxidized, falling between green and black tea in processing.",
        nl: "Oolong tea is partially oxidized, falling between green and black tea in processing."
      }
    },
    {
      question: {
        en: "What is herbal tea technically called?",
        es: "What is herbal tea technically called?",
        de: "What is herbal tea technically called?",
        nl: "What is herbal tea technically called?"
      },
      options: [
        { en: "Tisane or herbal infusion", es: "Tisane or herbal infusion", de: "Tisane or herbal infusion", nl: "Tisane or herbal infusion" },
        { en: "False tea", es: "False tea", de: "False tea", nl: "False tea" },
        { en: "Plant tea", es: "Plant tea", de: "Plant tea", nl: "Plant tea" },
        { en: "Herbal blend", es: "Herbal blend", de: "Herbal blend", nl: "Herbal blend" }
      ],
      correct: 0,
      explanation: {
        en: "Herbal 'tea' is technically called a tisane, as it doesn't come from the tea plant.",
        es: "Herbal 'tea' is technically called a tisane, as it doesn't come from the tea plant.",
        de: "Herbal 'tea' is technically called a tisane, as it doesn't come from the tea plant.",
        nl: "Herbal 'tea' is technically called a tisane, as it doesn't come from the tea plant."
      }
    },
    {
      question: {
        en: "What is white tea?",
        es: "What is white tea?",
        de: "What is white tea?",
        nl: "What is white tea?"
      },
      options: [
        { en: "Minimally processed tea from young leaves", es: "Minimally processed tea from young leaves", de: "Minimally processed tea from young leaves", nl: "Minimally processed tea from young leaves" },
        { en: "Tea with milk", es: "Tea with milk", de: "Tea with milk", nl: "Tea with milk" },
        { en: "Bleached tea", es: "Bleached tea", de: "Bleached tea", nl: "Bleached tea" },
        { en: "Caffeine-free tea", es: "Caffeine-free tea", de: "Caffeine-free tea", nl: "Caffeine-free tea" }
      ],
      correct: 0,
      explanation: {
        en: "White tea is made from young leaves and buds with minimal processing and oxidation.",
        es: "White tea is made from young leaves and buds with minimal processing and oxidation.",
        de: "White tea is made from young leaves and buds with minimal processing and oxidation.",
        nl: "White tea is made from young leaves and buds with minimal processing and oxidation."
      }
    },
    {
      question: {
        en: "What is chai?",
        es: "What is chai?",
        de: "What is chai?",
        nl: "What is chai?"
      },
      options: [
        { en: "Spiced tea, often with milk", es: "Spiced tea, often with milk", de: "Spiced tea, often with milk", nl: "Spiced tea, often with milk" },
        { en: "Chinese tea", es: "Chinese tea", de: "Chinese tea", nl: "Chinese tea" },
        { en: "Iced tea", es: "Iced tea", de: "Iced tea", nl: "Iced tea" },
        { en: "Green tea", es: "Green tea", de: "Green tea", nl: "Green tea" }
      ],
      correct: 0,
      explanation: {
        en: "Chai (or masala chai) is black tea brewed with spices and usually milk and sweetener.",
        es: "Chai (or masala chai) is black tea brewed with spices and usually milk and sweetener.",
        de: "Chai (or masala chai) is black tea brewed with spices and usually milk and sweetener.",
        nl: "Chai (or masala chai) is black tea brewed with spices and usually milk and sweetener."
      }
    },
    {
      question: {
        en: "What temperature should green tea be brewed at?",
        es: "What temperature should green tea be brewed at?",
        de: "What temperature should green tea be brewed at?",
        nl: "What temperature should green tea be brewed at?"
      },
      options: [
        { en: "160-180°F (70-80°C)", es: "160-180°F (70-80°C)", de: "160-180°F (70-80°C)", nl: "160-180°F (70-80°C)" },
        { en: "Boiling (212°F/100°C)", es: "Boiling (212°F/100°C)", de: "Boiling (212°F/100°C)", nl: "Boiling (212°F/100°C)" },
        { en: "Room temperature", es: "Room temperature", de: "Room temperature", nl: "Room temperature" },
        { en: "140°F (60°C)", es: "140°F (60°C)", de: "140°F (60°C)", nl: "140°F (60°C)" }
      ],
      correct: 0,
      explanation: {
        en: "Green tea should be brewed at cooler temperatures than black tea to avoid bitterness.",
        es: "Green tea should be brewed at cooler temperatures than black tea to avoid bitterness.",
        de: "Green tea should be brewed at cooler temperatures than black tea to avoid bitterness.",
        nl: "Green tea should be brewed at cooler temperatures than black tea to avoid bitterness."
      }
    },
    {
      question: {
        en: "What is Darjeeling tea?",
        es: "What is Darjeeling tea?",
        de: "What is Darjeeling tea?",
        nl: "What is Darjeeling tea?"
      },
      options: [
        { en: "Black tea from Darjeeling, India", es: "Black tea from Darjeeling, India", de: "Black tea from Darjeeling, India", nl: "Black tea from Darjeeling, India" },
        { en: "Green tea", es: "Green tea", de: "Green tea", nl: "Green tea" },
        { en: "Chinese tea", es: "Chinese tea", de: "Chinese tea", nl: "Chinese tea" },
        { en: "Herbal tea", es: "Herbal tea", de: "Herbal tea", nl: "Herbal tea" }
      ],
      correct: 0,
      explanation: {
        en: "Darjeeling is a premium black tea grown in the Darjeeling region of India.",
        es: "Darjeeling is a premium black tea grown in the Darjeeling region of India.",
        de: "Darjeeling is a premium black tea grown in the Darjeeling region of India.",
        nl: "Darjeeling is a premium black tea grown in the Darjeeling region of India."
      }
    },
    {
      question: {
        en: "What is pu-erh tea?",
        es: "What is pu-erh tea?",
        de: "What is pu-erh tea?",
        nl: "What is pu-erh tea?"
      },
      options: [
        { en: "Fermented and aged tea", es: "Fermented and aged tea", de: "Fermented and aged tea", nl: "Fermented and aged tea" },
        { en: "Fresh green tea", es: "Fresh green tea", de: "Fresh green tea", nl: "Fresh green tea" },
        { en: "Instant tea", es: "Instant tea", de: "Instant tea", nl: "Instant tea" },
        { en: "Iced tea", es: "Iced tea", de: "Iced tea", nl: "Iced tea" }
      ],
      correct: 0,
      explanation: {
        en: "Pu-erh is a fermented tea that can be aged for years, from Yunnan, China.",
        es: "Pu-erh is a fermented tea that can be aged for years, from Yunnan, China.",
        de: "Pu-erh is a fermented tea that can be aged for years, from Yunnan, China.",
        nl: "Pu-erh is a fermented tea that can be aged for years, from Yunnan, China."
      }
    },
    {
      question: {
        en: "What is rooibos?",
        es: "What is rooibos?",
        de: "What is rooibos?",
        nl: "What is rooibos?"
      },
      options: [
        { en: "South African herbal tea (not true tea)", es: "South African herbal tea (not true tea)", de: "South African herbal tea (not true tea)", nl: "South African herbal tea (not true tea)" },
        { en: "Black tea", es: "Black tea", de: "Black tea", nl: "Black tea" },
        { en: "Green tea", es: "Green tea", de: "Green tea", nl: "Green tea" },
        { en: "White tea", es: "White tea", de: "White tea", nl: "White tea" }
      ],
      correct: 0,
      explanation: {
        en: "Rooibos is an herbal infusion from South Africa, not from the tea plant.",
        es: "Rooibos is an herbal infusion from South Africa, not from the tea plant.",
        de: "Rooibos is an herbal infusion from South Africa, not from the tea plant.",
        nl: "Rooibos is an herbal infusion from South Africa, not from the tea plant."
      }
    },
    {
      question: {
        en: "What is the purpose of a tea infuser?",
        es: "What is the purpose of a tea infuser?",
        de: "What is the purpose of a tea infuser?",
        nl: "What is the purpose of a tea infuser?"
      },
      options: [
        { en: "Hold loose tea leaves while brewing", es: "Hold loose tea leaves while brewing", de: "Hold loose tea leaves while brewing", nl: "Hold loose tea leaves while brewing" },
        { en: "Sweeten tea", es: "Sweeten tea", de: "Sweeten tea", nl: "Sweeten tea" },
        { en: "Cool tea", es: "Cool tea", de: "Cool tea", nl: "Cool tea" },
        { en: "Filter water", es: "Filter water", de: "Filter water", nl: "Filter water" }
      ],
      correct: 0,
      explanation: {
        en: "A tea infuser holds loose tea leaves while they steep, keeping them contained for easy removal.",
        es: "A tea infuser holds loose tea leaves while they steep, keeping them contained for easy removal.",
        de: "A tea infuser holds loose tea leaves while they steep, keeping them contained for easy removal.",
        nl: "A tea infuser holds loose tea leaves while they steep, keeping them contained for easy removal."
      }
    },
    {
      question: {
        en: "What is bubble tea?",
        es: "What is bubble tea?",
        de: "What is bubble tea?",
        nl: "What is bubble tea?"
      },
      options: [
        { en: "Tea with tapioca pearls", es: "Tea with tapioca pearls", de: "Tea with tapioca pearls", nl: "Tea with tapioca pearls" },
        { en: "Sparkling tea", es: "Sparkling tea", de: "Sparkling tea", nl: "Sparkling tea" },
        { en: "Foamy tea", es: "Foamy tea", de: "Foamy tea", nl: "Foamy tea" },
        { en: "Carbonated tea", es: "Carbonated tea", de: "Carbonated tea", nl: "Carbonated tea" }
      ],
      correct: 0,
      explanation: {
        en: "Bubble tea (boba tea) is tea mixed with milk or fruit and chewy tapioca pearls.",
        es: "Bubble tea (boba tea) is tea mixed with milk or fruit and chewy tapioca pearls.",
        de: "Bubble tea (boba tea) is tea mixed with milk or fruit and chewy tapioca pearls.",
        nl: "Bubble tea (boba tea) is tea mixed with milk or fruit and chewy tapioca pearls."
      }
    },
    {
      question: {
        en: "What is the caffeine content of tea vs coffee?",
        es: "What is the caffeine content of tea vs coffee?",
        de: "What is the caffeine content of tea vs coffee?",
        nl: "What is the caffeine content of tea vs coffee?"
      },
      options: [
        { en: "Tea typically has less caffeine than coffee", es: "Tea typically has less caffeine than coffee", de: "Tea typically has less caffeine than coffee", nl: "Tea typically has less caffeine than coffee" },
        { en: "Tea has more caffeine", es: "Tea has more caffeine", de: "Tea has more caffeine", nl: "Tea has more caffeine" },
        { en: "Same amount", es: "Same amount", de: "Same amount", nl: "Same amount" },
        { en: "Tea has no caffeine", es: "Tea has no caffeine", de: "Tea has no caffeine", nl: "Tea has no caffeine" }
      ],
      correct: 0,
      explanation: {
        en: "Tea generally contains less caffeine than coffee, though amounts vary by type and brewing.",
        es: "Tea generally contains less caffeine than coffee, though amounts vary by type and brewing.",
        de: "Tea generally contains less caffeine than coffee, though amounts vary by type and brewing.",
        nl: "Tea generally contains less caffeine than coffee, though amounts vary by type and brewing."
      }
    },
    {
      question: {
        en: "What is jasmine tea?",
        es: "What is jasmine tea?",
        de: "What is jasmine tea?",
        nl: "What is jasmine tea?"
      },
      options: [
        { en: "Tea scented with jasmine flowers", es: "Tea scented with jasmine flowers", de: "Tea scented with jasmine flowers", nl: "Tea scented with jasmine flowers" },
        { en: "Tea from jasmine plant", es: "Tea from jasmine plant", de: "Tea from jasmine plant", nl: "Tea from jasmine plant" },
        { en: "Sweet tea", es: "Sweet tea", de: "Sweet tea", nl: "Sweet tea" },
        { en: "Herbal tea", es: "Herbal tea", de: "Herbal tea", nl: "Herbal tea" }
      ],
      correct: 0,
      explanation: {
        en: "Jasmine tea is typically green tea scented with jasmine flowers.",
        es: "Jasmine tea is typically green tea scented with jasmine flowers.",
        de: "Jasmine tea is typically green tea scented with jasmine flowers.",
        nl: "Jasmine tea is typically green tea scented with jasmine flowers."
      }
    },
    {
      question: {
        en: "What is English Breakfast tea?",
        es: "What is English Breakfast tea?",
        de: "What is English Breakfast tea?",
        nl: "What is English Breakfast tea?"
      },
      options: [
        { en: "Blend of black teas", es: "Blend of black teas", de: "Blend of black teas", nl: "Blend of black teas" },
        { en: "Tea served at breakfast only", es: "Tea served at breakfast only", de: "Tea served at breakfast only", nl: "Tea served at breakfast only" },
        { en: "White tea", es: "White tea", de: "White tea", nl: "White tea" },
        { en: "Herbal tea", es: "Herbal tea", de: "Herbal tea", nl: "Herbal tea" }
      ],
      correct: 0,
      explanation: {
        en: "English Breakfast is a traditional blend of black teas, typically served with milk.",
        es: "English Breakfast is a traditional blend of black teas, typically served with milk.",
        de: "English Breakfast is a traditional blend of black teas, typically served with milk.",
        nl: "English Breakfast is a traditional blend of black teas, typically served with milk."
      }
    },
    {
      question: {
        en: "What are tea bags made of?",
        es: "What are tea bags made of?",
        de: "What are tea bags made of?",
        nl: "What are tea bags made of?"
      },
      options: [
        { en: "Filter paper or silk with tea inside", es: "Filter paper or silk with tea inside", de: "Filter paper or silk with tea inside", nl: "Filter paper or silk with tea inside" },
        { en: "Plastic", es: "Plastic", de: "Plastic", nl: "Plastic" },
        { en: "Cotton", es: "Cotton", de: "Cotton", nl: "Cotton" },
        { en: "Metal mesh", es: "Metal mesh", de: "Metal mesh", nl: "Metal mesh" }
      ],
      correct: 0,
      explanation: {
        en: "Tea bags are typically made of filter paper, silk, or other porous material filled with tea leaves.",
        es: "Tea bags are typically made of filter paper, silk, or other porous material filled with tea leaves.",
        de: "Tea bags are typically made of filter paper, silk, or other porous material filled with tea leaves.",
        nl: "Tea bags are typically made of filter paper, silk, or other porous material filled with tea leaves."
      }

      }
    ]
  };

  // Export for use in the quiz application
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level1;
  } else if (typeof window !== 'undefined') {
    window.level1 = level1;
  }
})();
