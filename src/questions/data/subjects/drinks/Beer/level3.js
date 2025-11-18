// Quiz Template - Level 3: Drinken - Bier
(function() {
  const level3 = {
    name: {
      en: "Brewing Process Basics",
      es: "Fundamentos del Proceso de Elaboración",
      de: "Grundlagen des Brauprozesses",
      nl: "Basisprincipes van het Brouwproces"
    },
    questions: [
      {
        question: {
          en: "What is the first step in the beer brewing process?",
          es: "¿Cuál es el primer paso en el proceso de elaboración de cerveza?",
          de: "Was ist der erste Schritt im Bierbrauprozess?",
          nl: "Wat is de eerste stap in het bierbrouwproces?"
        },
        options: [
          { en: "Mashing", es: "Maceración", de: "Maischen", nl: "Maischen" },
          { en: "Malting", es: "Malteo", de: "Mälzen", nl: "Mouten" },
          { en: "Boiling", es: "Hervir", de: "Kochen", nl: "Koken" },
          { en: "Fermentation", es: "Fermentación", de: "Gärung", nl: "Fermentatie" }
        ],
        correct: 1,
        explanation: {
          en: "Malting is the first step, where barley grains are soaked, allowed to germinate, and then dried to convert starches into fermentable sugars.",
          es: "El malteo es el primer paso, donde los granos de cebada se remojan, se dejan germinar y luego se secan para convertir los almidones en azúcares fermentables.",
          de: "Das Mälzen ist der erste Schritt, bei dem Gerstenkörner eingeweicht, zum Keimen gebracht und dann getrocknet werden, um Stärke in fermentierbare Zucker umzuwandeln.",
          nl: "Mouten is de eerste stap, waarbij gerstkorrels worden geweekt, laten kiemen en vervolgens gedroogd om zetmeel om te zetten in fermenteerbare suikers."
        }
      },
      {
        question: {
          en: "At what temperature range does mashing typically occur?",
          es: "¿En qué rango de temperatura ocurre típicamente la maceración?",
          de: "In welchem Temperaturbereich findet das Maischen typischerweise statt?",
          nl: "Binnen welk temperatuurbereik vindt het maischen gewoonlijk plaats?"
        },
        options: [
          { en: "40-50°C (104-122°F)", es: "40-50°C (104-122°F)", de: "40-50°C (104-122°F)", nl: "40-50°C (104-122°F)" },
          { en: "60-70°C (140-158°F)", es: "60-70°C (140-158°F)", de: "60-70°C (140-158°F)", nl: "60-70°C (140-158°F)" },
          { en: "80-90°C (176-194°F)", es: "80-90°C (176-194°F)", de: "80-90°C (176-194°F)", nl: "80-90°C (176-194°F)" },
          { en: "100°C (212°F)", es: "100°C (212°F)", de: "100°C (212°F)", nl: "100°C (212°F)" }
        ],
        correct: 1,
        explanation: {
          en: "Mashing occurs at 60-70°C (140-158°F), the optimal temperature range for enzymes to convert starches into fermentable sugars.",
          es: "La maceración ocurre a 60-70°C (140-158°F), el rango de temperatura óptimo para que las enzimas conviertan los almidones en azúcares fermentables.",
          de: "Das Maischen erfolgt bei 60-70°C (140-158°F), dem optimalen Temperaturbereich für Enzyme, um Stärke in fermentierbare Zucker umzuwandeln.",
          nl: "Maischen vindt plaats bij 60-70°C (140-158°F), het optimale temperatuurbereik voor enzymen om zetmeel om te zetten in fermenteerbare suikers."
        }
      },
      {
        question: {
          en: "What is the purpose of lautering in brewing?",
          es: "¿Cuál es el propósito del filtrado en la elaboración?",
          de: "Was ist der Zweck des Läuterns beim Brauen?",
          nl: "Wat is het doel van het filteren bij het brouwen?"
        },
        options: [
          { en: "To add hops", es: "Para agregar lúpulo", de: "Um Hopfen hinzuzufügen", nl: "Om hop toe te voegen" },
          { en: "To separate wort from grain", es: "Para separar el mosto del grano", de: "Um die Würze vom Getreide zu trennen", nl: "Om wort van graan te scheiden" },
          { en: "To cool the mixture", es: "Para enfriar la mezcla", de: "Um die Mischung zu kühlen", nl: "Om het mengsel af te koelen" },
          { en: "To add yeast", es: "Para agregar levadura", de: "Um Hefe hinzuzufügen", nl: "Om gist toe te voegen" }
        ],
        correct: 1,
        explanation: {
          en: "Lautering separates the liquid wort from the spent grain after mashing, creating a clear sweet liquid ready for boiling.",
          es: "El filtrado separa el mosto líquido del grano gastado después de la maceración, creando un líquido dulce claro listo para hervir.",
          de: "Das Läutern trennt die flüssige Würze vom verbrauchten Getreide nach dem Maischen und erzeugt eine klare süße Flüssigkeit, die zum Kochen bereit ist.",
          nl: "Filteren scheidt de vloeibare wort van het gebruikte graan na het maischen, waardoor een heldere zoete vloeistof ontstaat die klaar is om te koken."
        }
      },
      {
        question: {
          en: "How long does the boiling stage typically last?",
          es: "¿Cuánto dura típicamente la etapa de hervido?",
          de: "Wie lange dauert die Kochphase typischerweise?",
          nl: "Hoe lang duurt de kookfase gewoonlijk?"
        },
        options: [
          { en: "15-30 min", es: "15-30 minutos", de: "15-30 Minuten", nl: "15-30 minuten" },
          { en: "60-90 min", es: "60-90 minutos", de: "60-90 Minuten", nl: "60-90 minuten" },
          { en: "2-3 hours", es: "2-3 horas", de: "2-3 Stunden", nl: "2-3 uur" },
          { en: "4-6 hours", es: "4-6 horas", de: "4-6 Stunden", nl: "4-6 uur" }
        ],
        correct: 1,
        explanation: {
          en: "The boiling stage typically lasts 60-90 minutes, enough time to sterilize the wort, extract hop flavors, and concentrate the liquid.",
          es: "La etapa de hervido típicamente dura 60-90 minutos, tiempo suficiente para esterilizar el mosto, extraer los sabores del lúpulo y concentrar el líquido.",
          de: "Die Kochphase dauert typischerweise 60-90 Minuten, genug Zeit, um die Würze zu sterilisieren, Hopfenaromen zu extrahieren und die Flüssigkeit zu konzentrieren.",
          nl: "De kookfase duurt gewoonlijk 60-90 minuten, genoeg tijd om de wort te steriliseren, hopsmaakstoffen te extraheren en de vloeistof te concentreren."
        }
      },
      {
        question: {
          en: "When are hops typically added during brewing?",
          es: "¿Cuándo se agrega típicamente el lúpulo durante la elaboración?",
          de: "Wann wird Hopfen typischerweise während des Brauens hinzugefügt?",
          nl: "Wanneer wordt hop gewoonlijk toegevoegd tijdens het brouwen?"
        },
        options: [
          { en: "During mashing", es: "Durante la maceración", de: "Während des Maischens", nl: "Tijdens het maischen" },
          { en: "During boiling", es: "Durante el hervido", de: "Während des Kochens", nl: "Tijdens het koken" },
          { en: "During fermentation", es: "Durante la fermentación", de: "Während der Gärung", nl: "Tijdens de fermentatie" },
          { en: "During packaging", es: "Durante el empaque", de: "Während der Verpackung", nl: "Tijdens het verpakken" }
        ],
        correct: 1,
        explanation: {
          en: "Hops are typically added during the boiling stage to extract bitterness, flavor, and aroma compounds while sterilizing them.",
          es: "El lúpulo se agrega típicamente durante la etapa de hervido para extraer compuestos de amargor, sabor y aroma mientras se esterilizan.",
          de: "Hopfen wird typischerweise während der Kochphase hinzugefügt, um Bitter-, Geschmacks- und Aromastoffe zu extrahieren und sie zu sterilisieren.",
          nl: "Hop wordt gewoonlijk toegevoegd tijdens de kookfase om bitterheid, smaak en aromaverbindingen te extraheren terwijl ze worden gesteriliseerd."
        }
      },
      {
        question: {
          en: "What is the purpose of cooling the wort after boiling?",
          es: "¿Cuál es el propósito de enfriar el mosto después del hervido?",
          de: "Was ist der Zweck des Kühlens der Würze nach dem Kochen?",
          nl: "Wat is het doel van het afkoelen van de wort na het koken?"
        },
        options: [
          { en: "To add more flavor", es: "Para agregar más sabor", de: "Um mehr Geschmack hinzuzufügen", nl: "Om meer smaak toe te voegen" },
          { en: "To prepare for yeast addition", es: "Para preparar la adición de levadura", de: "Um die Hefezugabe vorzubereiten", nl: "Om de toevoeging van gist voor te bereiden" },
          { en: "To remove hops", es: "Para remover el lúpulo", de: "Um Hopfen zu entfernen", nl: "Om hop te verwijderen" },
          { en: "To increase alcohol content", es: "Para aumentar el contenido de alcohol", de: "Um den Alkoholgehalt zu erhöhen", nl: "Om het alcoholgehalte te verhogen" }
        ],
        correct: 1,
        explanation: {
          en: "Cooling the wort to around 20°C (68°F) creates the optimal temperature for adding yeast, as high temperatures would kill the yeast.",
          es: "Enfriar el mosto a alrededor de 20°C (68°F) crea la temperatura óptima para agregar levadura, ya que las altas temperaturas matarían la levadura.",
          de: "Das Kühlen der Würze auf etwa 20°C (68°F) schafft die optimale Temperatur für die Hefezugabe, da hohe Temperaturen die Hefe abtöten würden.",
          nl: "Het afkoelen van de wort tot ongeveer 20°C (68°F) creëert de optimale temperatuur voor het toevoegen van gist, omdat hoge temperaturen de gist zouden doden."
        }
      },
      {
        question: {
          en: "What are the two main types of fermentation in brewing?",
          es: "¿Cuáles son los dos tipos principales de fermentación en la elaboración?",
          de: "Was sind die beiden Hauptarten der Gärung beim Brauen?",
          nl: "Wat zijn de twee hoofdtypen van fermentatie bij het brouwen?"
        },
        options: [
          { en: "Hot and cold fermentation", es: "Fermentación caliente y fría", de: "Heiße und kalte Gärung", nl: "Warme en koude fermentatie" },
          { en: "Fast and slow fermentation", es: "Fermentación rápida y lenta", de: "Schnelle und langsame Gärung", nl: "Snelle en langzame fermentatie" },
          { en: "Top and bottom fermentation", es: "Fermentación superior e inferior", de: "Ober- und untergärige Gärung", nl: "Boven- en ondergisting" },
          { en: "Natural and artificial fermentation", es: "Fermentación natural y artificial", de: "Natürliche und künstliche Gärung", nl: "Natuurlijke en kunstmatige fermentatie" }
        ],
        correct: 2,
        explanation: {
          en: "Top fermentation (ales) uses yeast that rises to the surface, while bottom fermentation (lagers) uses yeast that settles at the bottom.",
          es: "La fermentación superior (ales) usa levadura que sube a la superficie, mientras que la fermentación inferior (lagers) usa levadura que se asienta en el fondo.",
          de: "Obergärige Gärung (Ales) verwendet Hefe, die an die Oberfläche steigt, während untergärige Gärung (Lagers) Hefe verwendet, die sich am Boden absetzt.",
          nl: "Bovengisting (ales) gebruikt gist die naar de oppervlakte stijgt, terwijl ondergisting (lagers) gist gebruikt die zich op de bodem nestelt."
        }
      },
      {
        question: {
          en: "How long does primary fermentation typically take?",
          es: "¿Cuánto tiempo toma típicamente la fermentación primaria?",
          de: "Wie lange dauert die Hauptgärung typischerweise?",
          nl: "Hoe lang duurt de primaire fermentatie gewoonlijk?"
        },
        options: [
          { en: "1-2 days", es: "1-2 días", de: "1-2 Tage", nl: "1-2 dagen" },
          { en: "5-10 days", es: "5-10 días", de: "5-10 Tage", nl: "5-10 dagen" },
          { en: "3-4 weeks", es: "3-4 semanas", de: "3-4 Wochen", nl: "3-4 weken" },
          { en: "2-3 months", es: "2-3 meses", de: "2-3 Monate", nl: "2-3 maanden" }
        ],
        correct: 1,
        explanation: {
          en: "Primary fermentation typically takes 5-10 days, during which most of the alcohol is produced and the beer develops its basic character.",
          es: "La fermentación primaria típicamente toma 5-10 días, durante los cuales se produce la mayor parte del alcohol y la cerveza desarrolla su carácter básico.",
          de: "Die Hauptgärung dauert typischerweise 5-10 Tage, während der die meiste Alkohol produziert wird und das Bier seinen grundlegenden Charakter entwickelt.",
          nl: "Primaire fermentatie duurt gewoonlijk 5-10 dagen, waarbij de meeste alcohol wordt geproduceerd en het bier zijn basiskarakter ontwikkelt."
        }
      },
      {
        question: {
          en: "What is the specific gravity of water?",
          es: "¿Cuál es la gravedad específica del agua?",
          de: "Was ist das spezifische Gewicht von Wasser?",
          nl: "Wat is het soortelijk gewicht van water?"
        },
        options: [
          { en: "0.5", es: "0.5", de: "0.5", nl: "0.5" },
          { en: "1.0", es: "1.0", de: "1.0", nl: "1.0" },
          { en: "1.5", es: "1.5", de: "1.5", nl: "1.5" },
          { en: "2.0", es: "2.0", de: "2.0", nl: "2.0" }
        ],
        correct: 1,
        explanation: {
          en: "Water has a specific gravity of 1.0, which serves as the baseline for measuring the density of wort and beer during brewing.",
          es: "El agua tiene una gravedad específica de 1.0, que sirve como línea base para medir la densidad del mosto y la cerveza durante la elaboración.",
          de: "Wasser hat ein spezifisches Gewicht von 1.0, das als Grundlage für die Messung der Dichte von Würze und Bier während des Brauens dient.",
          nl: "Water heeft een soortelijk gewicht van 1.0, wat dient als basislijn voor het meten van de dichtheid van wort en bier tijdens het brouwen."
        }
      },
      {
        question: {
          en: "What does OG stand for in brewing terminology?",
          es: "¿Qué significa OG en terminología cervecera?",
          de: "Wofür steht OG in der Brauerterminologie?",
          nl: "Waar staat OG voor in brouwtermen?"
        },
        options: [
          { en: "Original Gravity", es: "Gravedad Original", de: "Stammwürze", nl: "Oorspronkelijke Dichtheid" },
          { en: "Optimal Growth", es: "Crecimiento Óptimo", de: "Optimales Wachstum", nl: "Optimale Groei" },
          { en: "Organic Grains", es: "Granos Orgánicos", de: "Bio-Getreide", nl: "Biologische Granen" },
          { en: "Over Gravity", es: "Sobre Gravedad", de: "Über Schwerkraft", nl: "Over Zwaartekracht" }
        ],
        correct: 0,
        explanation: {
          en: "OG stands for Original Gravity, which measures the density of wort before fermentation and indicates the potential alcohol content.",
          es: "OG significa Gravedad Original, que mide la densidad del mosto antes de la fermentación e indica el contenido potencial de alcohol.",
          de: "OG steht für Stammwürze, die die Dichte der Würze vor der Gärung misst und den potenziellen Alkoholgehalt anzeigt.",
          nl: "OG staat voor Oorspronkelijke Dichtheid, die de dichtheid van wort vóór fermentatie meet en het potentiële alcoholgehalte aangeeft."
        }
      },
      {
        question: {
          en: "What is 'wort'?",
          es: "¿Qué es el 'mosto'?",
          de: "Was ist 'Würze'?",
          nl: "Wat is 'wort'?"
        },
        options: [
          { en: "The liquid extracted from mashing", es: "El líquido extraído del macerado", de: "Die beim Maischen extrahierte Flüssigkeit", nl: "De vloeistof geëxtraheerd uit het maischen" },
          { en: "The foam on top of beer", es: "La espuma encima de la cerveza", de: "Der Schaum oben auf dem Bier", nl: "Het schuim bovenop bier" },
          { en: "The sediment at the bottom", es: "El sedimento en el fondo", de: "Das Sediment am Boden", nl: "Het sediment op de bodem" },
          { en: "The beer label", es: "La etiqueta de cerveza", de: "Das Bieretikett", nl: "Het bieretiket" }
        ],
        correct: 0,
        explanation: {
          en: "Wort is the sweet liquid extracted from the mashing process, which contains sugars that will be fermented by yeast to create alcohol.",
          es: "El mosto es el líquido dulce extraído del proceso de maceración, que contiene azúcares que serán fermentados por la levadura para crear alcohol.",
          de: "Würze ist die süße Flüssigkeit, die beim Maischen extrahiert wird und Zucker enthält, der von Hefe zu Alkohol fermentiert wird.",
          nl: "Wort is de zoete vloeistof geëxtraheerd uit het maischen, die suikers bevat die door gist zullen worden gefermenteerd om alcohol te creëren."
        }
      },
      {
        question: {
          en: "What temperature range is typical for ale fermentation?",
          es: "¿Qué rango de temperatura es típico para la fermentación de ale?",
          de: "Welcher Temperaturbereich ist typisch für die Ale-Gärung?",
          nl: "Welk temperatuurbereik is typisch voor ale fermentatie?"
        },
        options: [
          { en: "0-5°C (32-41°F)", es: "0-5°C (32-41°F)", de: "0-5°C (32-41°F)", nl: "0-5°C (32-41°F)" },
          { en: "7-13°C (45-55°F)", es: "7-13°C (45-55°F)", de: "7-13°C (45-55°F)", nl: "7-13°C (45-55°F)" },
          { en: "15-24°C (59-75°F)", es: "15-24°C (59-75°F)", de: "15-24°C (59-75°F)", nl: "15-24°C (59-75°F)" },
          { en: "30-40°C (86-104°F)", es: "30-40°C (86-104°F)", de: "30-40°C (86-104°F)", nl: "30-40°C (86-104°F)" }
        ],
        correct: 2,
        explanation: {
          en: "Ale fermentation typically occurs at 15-24°C (59-75°F), which is warmer than lager fermentation. This higher temperature allows the ale yeast to work faster and produce more esters.",
          es: "La fermentación de ale típicamente ocurre a 15-24°C (59-75°F), que es más cálida que la fermentación de lager. Esta temperatura más alta permite que la levadura de ale trabaje más rápido y produzca más ésteres.",
          de: "Die Ale-Gärung erfolgt typischerweise bei 15-24°C (59-75°F), was wärmer ist als die Lager-Gärung. Diese höhere Temperatur ermöglicht es der Ale-Hefe, schneller zu arbeiten und mehr Ester zu produzieren.",
          nl: "Ale fermentatie vindt meestal plaats bij 15-24°C (59-75°F), wat warmer is dan lager fermentatie. Deze hogere temperatuur stelt ale gist in staat sneller te werken en meer esters te produceren."
        }
      },
      {
        question: {
          en: "What is 'dry hopping'?",
          es: "¿Qué es el 'dry hopping'?",
          de: "Was ist 'Kalthopfung'?",
          nl: "Wat is 'dry hopping'?"
        },
        options: [
          { en: "Adding hops after fermentation", es: "Añadir lúpulo después de la fermentación", de: "Hopfen nach der Gärung hinzufügen", nl: "Hop toevoegen na fermentatie" },
          { en: "Using dehydrated hops", es: "Usar lúpulo deshidratado", de: "Getrockneten Hopfen verwenden", nl: "Gedroogde hop gebruiken" },
          { en: "Boiling hops longer", es: "Hervir lúpulo más tiempo", de: "Hopfen länger kochen", nl: "Hop langer koken" },
          { en: "Growing hops without water", es: "Cultivar lúpulo sin agua", de: "Hopfen ohne Wasser anbauen", nl: "Hop kweken zonder water" }
        ],
        correct: 0,
        explanation: {
          en: "Dry hopping is the process of adding hops to beer after fermentation, typically in the fermenter or conditioning tank. This adds hop aroma without adding bitterness.",
          es: "El dry hopping es el proceso de añadir lúpulo a la cerveza después de la fermentación, típicamente en el fermentador o tanque de acondicionamiento. Esto añade aroma de lúpulo sin añadir amargor.",
          de: "Kalthopfung ist der Prozess, Hopfen nach der Gärung zum Bier hinzuzufügen, typischerweise im Gärtank oder Lagertank. Dies fügt Hopfenaroma hinzu, ohne Bitterkeit zu erhöhen.",
          nl: "Dry hopping is het proces van hop toevoegen aan bier na fermentatie, meestal in de gisttank of conditioneringstank. Dit voegt hoparoma toe zonder bitterheid toe te voegen."
        }
      },
      {
        question: {
          en: "What is the purpose of 'lagering'?",
          es: "¿Cuál es el propósito del 'lagering'?",
          de: "Was ist der Zweck des 'Lagerns'?",
          nl: "Wat is het doel van 'lagering'?"
        },
        options: [
          { en: "To mature and clarify the beer at cold temperatures", es: "Para madurar y clarificar la cerveza a temperaturas frías", de: "Um das Bier bei kalten Temperaturen zu reifen und zu klären", nl: "Om het bier te laten rijpen en klaren bij koude temperaturen" },
          { en: "To increase alcohol content", es: "Para aumentar el contenido de alcohol", de: "Um den Alkoholgehalt zu erhöhen", nl: "Om het alcoholpercentage te verhogen" },
          { en: "To add carbonation", es: "Para añadir carbonatación", de: "Um Kohlensäure hinzuzufügen", nl: "Om koolzuur toe te voegen" },
          { en: "To change the color", es: "Para cambiar el color", de: "Um die Farbe zu ändern", nl: "Om de kleur te veranderen" }
        ],
        correct: 0,
        explanation: {
          en: "Lagering is the cold storage period where beer matures and clarifies at temperatures near freezing (0-4°C). This process smooths flavors and allows yeast and proteins to settle out.",
          es: "El lagering es el período de almacenamiento en frío donde la cerveza madura y se clarifica a temperaturas cerca de la congelación (0-4°C). Este proceso suaviza los sabores y permite que la levadura y proteínas se asienten.",
          de: "Lagern ist die Kaltlagerungsperiode, bei der Bier bei Temperaturen nahe dem Gefrierpunkt (0-4°C) reift und sich klärt. Dieser Prozess glättet Aromen und ermöglicht es Hefe und Proteinen, sich abzusetzen.",
          nl: "Lagering is de koude opslagperiode waarin bier rijpt en klaart bij temperaturen dicht bij het vriespunt (0-4°C). Dit proces maakt smaken zachter en laat gist en eiwitten bezinken."
        }
      },
      {
        question: {
          en: "What is a 'hop schedule'?",
          es: "¿Qué es un 'hop schedule'?",
          de: "Was ist ein 'Hopfenplan'?",
          nl: "Wat is een 'hop schedule'?"
        },
        options: [
          { en: "The timing of hop additions during brewing", es: "El momento de las adiciones de lúpulo durante la elaboración", de: "Der Zeitpunkt der Hopfenzugaben beim Brauen", nl: "De timing van hop toevoegingen tijdens het brouwen" },
          { en: "The harvest calendar for hops", es: "El calendario de cosecha de lúpulo", de: "Der Erntekalender für Hopfen", nl: "De oogstkalender voor hop" },
          { en: "The growing pattern of hop plants", es: "El patrón de crecimiento de plantas de lúpulo", de: "Das Wachstumsmuster von Hopfenpflanzen", nl: "Het groeipatroon van hopplanten" },
          { en: "The storage time for hops", es: "El tiempo de almacenamiento del lúpulo", de: "Die Lagerzeit für Hopfen", nl: "De opslagtijd voor hop" }
        ],
        correct: 0,
        explanation: {
          en: "A hop schedule refers to when hops are added during the brewing process. Early additions provide bitterness, middle additions add flavor, and late/dry hop additions contribute aroma.",
          es: "Un hop schedule se refiere a cuándo se añade el lúpulo durante el proceso de elaboración. Las adiciones tempranas proporcionan amargor, las adiciones medias añaden sabor, y las adiciones tardías/dry hop contribuyen al aroma.",
          de: "Ein Hopfenplan bezieht sich darauf, wann Hopfen während des Brauprozesses hinzugefügt wird. Frühe Zugaben liefern Bitterkeit, mittlere Zugaben fügen Geschmack hinzu, und späte/Kalthopfung-Zugaben tragen zum Aroma bei.",
          nl: "Een hop schedule verwijst naar wanneer hop wordt toegevoegd tijdens het brouwproces. Vroege toevoegingen zorgen voor bitterheid, middelste toevoegingen voegen smaak toe, en late/dry hop toevoegingen dragen bij aan het aroma."
        }
      },
      {
        question: {
          en: "What is 'krausening'?",
          es: "¿Qué es el 'krausening'?",
          de: "Was ist 'Kräusening'?",
          nl: "Wat is 'krausening'?"
        },
        options: [
          { en: "Adding actively fermenting wort to finished beer", es: "Añadir mosto en fermentación activa a cerveza terminada", de: "Aktiv gärende Würze zu fertigem Bier hinzufügen", nl: "Actief fermenterende wort toevoegen aan afgewerkt bier" },
          { en: "Filtering the beer", es: "Filtrar la cerveza", de: "Das Bier filtern", nl: "Het bier filteren" },
          { en: "Adding sugar for carbonation", es: "Añadir azúcar para carbonatación", de: "Zucker für Kohlensäure hinzufügen", nl: "Suiker toevoegen voor koolzuur" },
          { en: "Heating the beer", es: "Calentar la cerveza", de: "Das Bier erhitzen", nl: "Het bier verhitten" }
        ],
        correct: 0,
        explanation: {
          en: "Krausening is a traditional German method of carbonating beer by adding a small amount of actively fermenting wort to finished beer. This creates natural carbonation without adding sugar.",
          es: "Krausening es un método tradicional alemán de carbonatar cerveza añadiendo una pequeña cantidad de mosto en fermentación activa a la cerveza terminada. Esto crea carbonatación natural sin añadir azúcar.",
          de: "Kräusening ist eine traditionelle deutsche Methode zur Karbonisierung von Bier, indem eine kleine Menge aktiv gärender Würze zu fertigem Bier hinzugefügt wird. Dies erzeugt natürliche Kohlensäure ohne Zucker hinzuzufügen.",
          nl: "Krausening is een traditionele Duitse methode om bier te koolzuur te maken door een kleine hoeveelheid actief fermenterende wort toe te voegen aan afgewerkt bier. Dit creëert natuurlijk koolzuur zonder suiker toe te voegen."
        }
      },
      {
        question: {
          en: "What is the difference between top-fermenting and bottom-fermenting yeast?",
          es: "¿Cuál es la diferencia entre levadura de fermentación alta y baja?",
          de: "Was ist der Unterschied zwischen obergäriger und untergäriger Hefe?",
          nl: "Wat is het verschil tussen bovengistende en ondergistende gist?"
        },
        options: [
          { en: "Their position during fermentation", es: "Su posición durante la fermentación", de: "Ihre Position während der Gärung", nl: "Hun positie tijdens fermentatie" },
          { en: "Their alcohol tolerance", es: "Su tolerancia al alcohol", de: "Ihre Alkoholtoleranz", nl: "Hun alcoholtolerantie" },
          { en: "Their color", es: "Su color", de: "Ihre Farbe", nl: "Hun kleur" },
          { en: "Their size", es: "Su tamaño", de: "Ihre Größe", nl: "Hun grootte" }
        ],
        correct: 0,
        explanation: {
          en: "Top-fermenting yeast (used in ales) rises to the top during fermentation at warmer temperatures. Bottom-fermenting yeast (used in lagers) sinks to the bottom and works at cooler temperatures.",
          es: "La levadura de fermentación alta (usada en ales) sube a la parte superior durante la fermentación a temperaturas más cálidas. La levadura de fermentación baja (usada en lagers) se hunde hasta el fondo y trabaja a temperaturas más frías.",
          de: "Obergärige Hefe (für Ales) steigt während der Gärung bei wärmeren Temperaturen nach oben. Untergärige Hefe (für Lager) sinkt nach unten und arbeitet bei kühleren Temperaturen.",
          nl: "Bovengistende gist (gebruikt in ales) stijgt naar boven tijdens fermentatie bij warmere temperaturen. Ondergistende gist (gebruikt in lagers) zinkt naar de bodem en werkt bij koelere temperaturen."
        }
      },
      {
        question: {
          en: "What is 'sparge water'?",
          es: "¿Qué es el 'agua de lavado'?",
          de: "Was ist 'Nachgusswasser'?",
          nl: "Wat is 'spoel water'?"
        },
        options: [
          { en: "Water used to rinse sugars from grain", es: "Agua usada para enjuagar azúcares del grano", de: "Wasser zum Ausspülen von Zucker aus dem Getreide", nl: "Water gebruikt om suikers uit graan te spoelen" },
          { en: "Water added to dilute beer", es: "Agua añadida para diluir cerveza", de: "Wasser zum Verdünnen von Bier", nl: "Water toegevoegd om bier te verdunnen" },
          { en: "Carbonated water", es: "Agua carbonatada", de: "Kohlensäurehaltiges Wasser", nl: "Koolzuurhoudend water" },
          { en: "Cleaning water", es: "Agua de limpieza", de: "Reinigungswasser", nl: "Schoonmaakwater" }
        ],
        correct: 0,
        explanation: {
          en: "Sparge water is hot water used to rinse remaining sugars from the grain bed after mashing. This maximizes sugar extraction and improves brewing efficiency.",
          es: "El agua de lavado es agua caliente usada para enjuagar los azúcares restantes del lecho de grano después del macerado. Esto maximiza la extracción de azúcar y mejora la eficiencia de elaboración.",
          de: "Nachgusswasser ist heißes Wasser, das verwendet wird, um verbleibende Zucker aus dem Treberbett nach dem Maischen zu spülen. Dies maximiert die Zuckerextraktion und verbessert die Braueffizienz.",
          nl: "Spoel water is heet water dat wordt gebruikt om resterende suikers uit het graanbed te spoelen na het maischen. Dit maximaliseert suikerextractie en verbetert de brouwefficiëntie."
        }
      },
      {
        question: {
          en: "What is 'attenuation' in brewing?",
          es: "¿Qué es la 'atenuación' en la elaboración?",
          de: "Was ist 'Vergärung' beim Brauen?",
          nl: "Wat is 'attenuatie' bij het brouwen?"
        },
        options: [
          { en: "The degree to which sugars are converted to alcohol", es: "El grado en que los azúcares se convierten en alcohol", de: "Der Grad, in dem Zucker in Alkohol umgewandelt wird", nl: "De mate waarin suikers worden omgezet in alcohol" },
          { en: "The reduction of foam", es: "La reducción de espuma", de: "Die Reduzierung von Schaum", nl: "De vermindering van schuim" },
          { en: "The filtering process", es: "El proceso de filtrado", de: "Der Filterprozess", nl: "Het filterproces" },
          { en: "The color intensity", es: "La intensidad del color", de: "Die Farbintensität", nl: "De kleurintensiteit" }
        ],
        correct: 0,
        explanation: {
          en: "Attenuation is the degree to which yeast converts sugars in the wort into alcohol and CO2. High attenuation results in a drier beer, while low attenuation leaves more residual sweetness.",
          es: "La atenuación es el grado en que la levadura convierte los azúcares en el mosto en alcohol y CO2. Una alta atenuación resulta en una cerveza más seca, mientras que una baja atenuación deja más dulzura residual.",
          de: "Vergärung ist der Grad, in dem Hefe Zucker in der Würze in Alkohol und CO2 umwandelt. Hohe Vergärung führt zu einem trockenerem Bier, während niedrige Vergärung mehr Restsüße hinterlässt.",
          nl: "Attenuatie is de mate waarin gist suikers in de wort omzet in alcohol en CO2. Hoge attenuatie resulteert in een droger bier, terwijl lage attenuatie meer resterende zoetheid achterlaat."
        }
      },
      {
        question: {
          en: "What is 'trub'?",
          es: "¿Qué es el 'trub'?",
          de: "Was ist 'Trub'?",
          nl: "Wat is 'trub'?"
        },
        options: [
          { en: "Sediment of proteins and hop particles", es: "Sedimento de proteínas y partículas de lúpulo", de: "Sediment aus Proteinen und Hopfenpartikeln", nl: "Sediment van eiwitten en hop deeltjes" },
          { en: "Foam on top of beer", es: "Espuma encima de la cerveza", de: "Schaum oben auf dem Bier", nl: "Schuim bovenop bier" },
          { en: "A brewing tool", es: "Una herramienta de elaboración", de: "Ein Brauwerkzeug", nl: "Een brouwgereedschap" },
          { en: "A type of malt", es: "Un tipo de malta", de: "Eine Malzart", nl: "Een type mout" }
        ],
        correct: 0,
        explanation: {
          en: "Trub is the sediment of proteins, hop particles, and other solids that settle out during the brewing and fermentation process. Brewers typically separate this from the beer for clarity.",
          es: "El trub es el sedimento de proteínas, partículas de lúpulo y otros sólidos que se asientan durante el proceso de elaboración y fermentación. Los cerveceros típicamente separan esto de la cerveza para claridad.",
          de: "Trub ist das Sediment aus Proteinen, Hopfenpartikeln und anderen Feststoffen, die sich während des Brau- und Gärprozesses absetzen. Brauer trennen dies normalerweise vom Bier für Klarheit.",
          nl: "Trub is het sediment van eiwitten, hop deeltjes en andere vaste stoffen die bezinken tijdens het brouw- en fermentatieproces. Brouwers scheiden dit meestal van het bier voor helderheid."
        }
      }
    ]
  };

  // Export for use in the quiz application
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level3;
  } else if (typeof window !== 'undefined') {
    window.level3 = level3;
  }
})();
