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
