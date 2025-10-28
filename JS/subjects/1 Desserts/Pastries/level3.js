// Pastries Quiz - Level 3: Intermediate
(function() {
  const level3 = {
    name: {
      en: "Pastries - Advanced Basics",
      es: "Pastelería - Básicos Avanzados",
      de: "Gebäck - Fortgeschrittene Grundlagen",
      nl: "Gebak - Gevorderde Basis"
    },
    questions: [
      {
        question: {
          en: "What is the ideal ratio of flour to butter in classic puff pastry?",
          es: "¿Cuál es la proporción ideal de harina a mantequilla en el hojaldre clásico?",
          de: "Was ist das ideale Verhältnis von Mehl zu Butter im klassischen Blätterteig?",
          nl: "Wat is de ideale verhouding van meel tot boter in klassiek bladerdeeg?"
        },
        options: [
          { en: "1:1", es: "1:1", de: "1:1", nl: "1:1" },
          { en: "2:1", es: "2:1", de: "2:1", nl: "2:1" },
          { en: "3:1", es: "3:1", de: "3:1", nl: "3:1" },
          { en: "4:1", es: "4:1", de: "4:1", nl: "4:1" }
        ],
        correct: 0,
        explanation: {
          en: "Classic puff pastry uses equal weights of flour and butter (1:1 ratio), creating the maximum number of layers and richest flavor.",
          es: "El hojaldre clásico usa pesos iguales de harina y mantequilla (proporción 1:1), creando el máximo número de capas y el sabor más rico.",
          de: "Klassischer Blätterteig verwendet gleiche Gewichte von Mehl und Butter (1:1 Verhältnis), was die maximale Anzahl von Schichten und reichsten Geschmack erzeugt.",
          nl: "Klassiek bladerdeeg gebruikt gelijke gewichten van meel en boter (1:1 verhouding), wat het maximum aantal lagen en rijkste smaak creëert."
        }
      },
      {
        question: {
          en: "How many times is croissant dough typically folded during lamination?",
          es: "¿Cuántas veces se pliega típicamente la masa de croissant durante la laminación?",
          de: "Wie oft wird Croissantteig typischerweise während der Laminierung gefaltet?",
          nl: "Hoeveel keer wordt croissantdeeg typisch gevouwen tijdens lamineren?"
        },
        options: [
          { en: "2-3 times", es: "2-3 veces", de: "2-3 mal", nl: "2-3 keer" },
          { en: "3-4 times", es: "3-4 veces", de: "3-4 mal", nl: "3-4 keer" },
          { en: "5-6 times", es: "5-6 veces", de: "5-6 mal", nl: "5-6 keer" },
          { en: "7-8 times", es: "7-8 veces", de: "7-8 mal", nl: "7-8 keer" }
        ],
        correct: 1,
        explanation: {
          en: "Croissant dough is typically folded 3-4 times, creating 27-81 layers, which provides the perfect balance of flakiness and structure.",
          es: "La masa de croissant se pliega típicamente 3-4 veces, creando 27-81 capas, lo que proporciona el equilibrio perfecto de hojaldrado y estructura.",
          de: "Croissantteig wird typischerweise 3-4 mal gefaltet, wodurch 27-81 Schichten entstehen, was die perfekte Balance von Blättrigkeit und Struktur bietet.",
          nl: "Croissantdeeg wordt typisch 3-4 keer gevouwen, wat 27-81 lagen creëert, wat de perfecte balans van bladderigheid en structuur biedt."
        }
      },
      {
        question: {
          en: "What temperature should the oven be for baking choux pastry?",
          es: "¿A qué temperatura debe estar el horno para hornear masa choux?",
          de: "Welche Temperatur sollte der Ofen zum Backen von Brandteig haben?",
          nl: "Welke temperatuur moet de oven zijn voor het bakken van choux deeg?"
        },
        options: [
          { en: "150-160°C", es: "150-160°C", de: "150-160°C", nl: "150-160°C" },
          { en: "180-190°C", es: "180-190°C", de: "180-190°C", nl: "180-190°C" },
          { en: "200-220°C", es: "200-220°C", de: "200-220°C", nl: "200-220°C" },
          { en: "240-250°C", es: "240-250°C", de: "240-250°C", nl: "240-250°C" }
        ],
        correct: 2,
        explanation: {
          en: "Choux pastry requires a hot oven (200-220°C) to create steam quickly, causing the pastry to puff up before the structure sets.",
          es: "La masa choux requiere un horno caliente (200-220°C) para crear vapor rápidamente, causando que la masa se infle antes de que la estructura se fije.",
          de: "Brandteig erfordert einen heißen Ofen (200-220°C) um schnell Dampf zu erzeugen, wodurch das Gebäck aufgeht bevor die Struktur fest wird.",
          nl: "Choux deeg vereist een hete oven (200-220°C) om snel stoom te creëren, waardoor het deeg opzwelt voordat de structuur vast wordt."
        }
      },
      {
        question: {
          en: "What is the French term for the butter block used in laminated dough?",
          es: "¿Cuál es el término francés para el bloque de mantequilla usado en masa laminada?",
          de: "Was ist der französische Begriff für den Butterblock im laminierten Teig?",
          nl: "Wat is de Franse term voor het boterblok gebruikt in gelamineerd deeg?"
        },
        options: [
          { en: "Beurrage", es: "Beurrage", de: "Beurrage", nl: "Beurrage" },
          { en: "Détrempe", es: "Détrempe", de: "Détrempe", nl: "Détrempe" },
          { en: "Pâton", es: "Pâton", de: "Pâton", nl: "Pâton" },
          { en: "Tourage", es: "Tourage", de: "Tourage", nl: "Tourage" }
        ],
        correct: 0,
        explanation: {
          en: "Beurrage is the French term for the butter block that is enclosed in the dough (détrempe) during the lamination process.",
          es: "Beurrage es el término francés para el bloque de mantequilla que se encierra en la masa (détrempe) durante el proceso de laminación.",
          de: "Beurrage ist der französische Begriff für den Butterblock, der während des Laminierprozesses in den Teig (Détrempe) eingeschlossen wird.",
          nl: "Beurrage is de Franse term voor het boterblok dat wordt ingesloten in het deeg (détrempe) tijdens het lamineringsproces."
        }
      },
      {
        question: {
          en: "Which type of flour is best for making delicate pastries?",
          es: "¿Qué tipo de harina es mejor para hacer pasteles delicados?",
          de: "Welche Mehlsorte ist am besten für zartes Gebäck?",
          nl: "Welk type meel is het beste voor delicaat gebak?"
        },
        options: [
          { en: "Bread flour", es: "Harina de pan", de: "Brotmehl", nl: "Broodmeel" },
          { en: "Pastry flour", es: "Harina de repostería", de: "Gebäckmehl", nl: "Gebaksmeel" },
          { en: "Whole wheat flour", es: "Harina integral", de: "Vollkornmehl", nl: "Volkorenmeel" },
          { en: "Self-rising flour", es: "Harina con levadura", de: "Selbstaufgehendes Mehl", nl: "Zelfrijzend meel" }
        ],
        correct: 1,
        explanation: {
          en: "Pastry flour has lower protein content (8-9%) than all-purpose flour, producing more tender pastries with less gluten development.",
          es: "La harina de repostería tiene menor contenido de proteína (8-9%) que la harina todo uso, produciendo pasteles más tiernos con menos desarrollo de gluten.",
          de: "Gebäckmehl hat einen niedrigeren Proteingehalt (8-9%) als Allzweckmehl, was zarteres Gebäck mit weniger Glutenentwicklung produziert.",
          nl: "Gebaksmeel heeft een lager eiwitgehalte (8-9%) dan patentbloem, wat zorgt voor malser gebak met minder glutenontwikkeling."
        }
      },
      {
        question: {
          en: "What is the purpose of docking pastry dough?",
          es: "¿Cuál es el propósito de perforar la masa de pastelería?",
          de: "Was ist der Zweck des Dockens von Gebäckteig?",
          nl: "Wat is het doel van het prikken van gebakdeeg?"
        },
        options: [
          { en: "To add decoration", es: "Para añadir decoración", de: "Um Dekoration hinzuzufügen", nl: "Om decoratie toe te voegen" },
          { en: "To prevent puffing during baking", es: "Para prevenir que se infle durante el horneado", de: "Um Aufblähen beim Backen zu verhindern", nl: "Om opzwellen tijdens bakken te voorkomen" },
          { en: "To help it brown", es: "Para ayudar a que se dore", de: "Um beim Bräunen zu helfen", nl: "Om het te helpen bruinen" },
          { en: "To add flavor", es: "Para añadir sabor", de: "Um Geschmack hinzuzufügen", nl: "Om smaak toe te voegen" }
        ],
        correct: 1,
        explanation: {
          en: "Docking (pricking holes) in pastry dough allows steam to escape during baking, preventing unwanted puffing and ensuring even baking.",
          es: "Perforar (hacer agujeros) en la masa permite que escape el vapor durante el horneado, previniendo inflado no deseado y asegurando horneado uniforme.",
          de: "Docken (Löcher stechen) im Gebäckteig erlaubt Dampf beim Backen zu entweichen, verhindert unerwünschtes Aufblähen und sichert gleichmäßiges Backen.",
          nl: "Prikken (gaatjes maken) in gebakdeeg laat stoom ontsnappen tijdens bakken, voorkomt ongewenst opzwellen en zorgt voor gelijkmatig bakken."
        }
      },
      {
        question: {
          en: "What is a Napoleon cake also known as?",
          es: "¿Cómo se conoce también el pastel Napoleón?",
          de: "Wie ist Napoleonkuchen auch bekannt?",
          nl: "Hoe staat een Napoleontaart ook bekend?"
        },
        options: [
          { en: "Mille-feuille", es: "Milhojas", de: "Mille-feuille", nl: "Mille-feuille" },
          { en: "Opera cake", es: "Tarta Ópera", de: "Operntorte", nl: "Opera taart" },
          { en: "Saint-Honoré", es: "Saint-Honoré", de: "Saint-Honoré", nl: "Saint-Honoré" },
          { en: "Croquembouche", es: "Croquembouche", de: "Croquembouche", nl: "Croquembouche" }
        ],
        correct: 0,
        explanation: {
          en: "Napoleon cake is also known as mille-feuille, meaning 'thousand leaves' in French, referring to its many thin layers of puff pastry.",
          es: "El pastel Napoleón también se conoce como milhojas, que significa 'mil hojas' en francés, refiriéndose a sus muchas capas delgadas de hojaldre.",
          de: "Napoleonkuchen ist auch als Mille-feuille bekannt, was 'tausend Blätter' auf Französisch bedeutet, bezogen auf seine vielen dünnen Blätterteigschichten.",
          nl: "Napoleontaart staat ook bekend als mille-feuille, wat 'duizend bladeren' betekent in het Frans, verwijzend naar de vele dunne lagen bladerdeeg."
        }
      },
      {
        question: {
          en: "What causes soggy bottom in pies?",
          es: "¿Qué causa el fondo empapado en las tartas?",
          de: "Was verursacht einen durchweichten Boden bei Kuchen?",
          nl: "Wat veroorzaakt een doorweekte bodem bij taarten?"
        },
        options: [
          { en: "Too much butter", es: "Demasiada mantequilla", de: "Zu viel Butter", nl: "Te veel boter" },
          { en: "Wet filling and insufficient pre-baking", es: "Relleno húmedo y pre-horneado insuficiente", de: "Feuchte Füllung und unzureichendes Vorbacken", nl: "Natte vulling en onvoldoende voorbakken" },
          { en: "Too high temperature", es: "Temperatura demasiado alta", de: "Zu hohe Temperatur", nl: "Te hoge temperatuur" },
          { en: "Wrong type of flour", es: "Tipo incorrecto de harina", de: "Falsche Mehlsorte", nl: "Verkeerd type meel" }
        ],
        correct: 1,
        explanation: {
          en: "Soggy bottoms occur when wet fillings seep into unbaked or insufficiently pre-baked pastry. Blind baking creates a barrier against moisture.",
          es: "Los fondos empapados ocurren cuando rellenos húmedos se filtran en masa sin hornear o insuficientemente pre-horneada. El horneado a ciegas crea una barrera contra la humedad.",
          de: "Durchweichte Böden entstehen wenn feuchte Füllungen in ungebackenen oder unzureichend vorgebackenen Teig eindringen. Blindbacken schafft eine Barriere gegen Feuchtigkeit.",
          nl: "Doorweekte bodems ontstaan wanneer natte vullingen in ongebakken of onvoldoende voorgebakken deeg sijpelen. Blind bakken creëert een barrière tegen vocht."
        }
      },
      {
        question: {
          en: "What is the traditional shape of a madeleine?",
          es: "¿Cuál es la forma tradicional de una madeleine?",
          de: "Was ist die traditionelle Form einer Madeleine?",
          nl: "Wat is de traditionele vorm van een madeleine?"
        },
        options: [
          { en: "Round", es: "Redonda", de: "Rund", nl: "Rond" },
          { en: "Shell-shaped", es: "Forma de concha", de: "Muschelförmig", nl: "Schelpvormig" },
          { en: "Square", es: "Cuadrada", de: "Quadratisch", nl: "Vierkant" },
          { en: "Heart-shaped", es: "Forma de corazón", de: "Herzförmig", nl: "Hartvormig" }
        ],
        correct: 1,
        explanation: {
          en: "Madeleines are traditionally baked in shell-shaped molds, giving them their distinctive scalloped appearance and ridged texture.",
          es: "Las madeleines se hornean tradicionalmente en moldes con forma de concha, dándoles su distintiva apariencia festoneada y textura acanalada.",
          de: "Madeleines werden traditionell in muschelförmigen Formen gebacken, was ihnen ihr charakteristisches gewelltes Aussehen und gerillte Textur verleiht.",
          nl: "Madeleines worden traditioneel gebakken in schelpvormige vormen, wat ze hun kenmerkende geschulpte uiterlijk en geribbelde textuur geeft."
        }
      },
      {
        question: {
          en: "What is the difference between rough puff and full puff pastry?",
          es: "¿Cuál es la diferencia entre hojaldre rápido y hojaldre completo?",
          de: "Was ist der Unterschied zwischen schnellem und vollständigem Blätterteig?",
          nl: "Wat is het verschil tussen snel bladerdeeg en volledig bladerdeeg?"
        },
        options: [
          { en: "Rough puff uses less butter", es: "El hojaldre rápido usa menos mantequilla", de: "Schneller Blätterteig verwendet weniger Butter", nl: "Snel bladerdeeg gebruikt minder boter" },
          { en: "Rough puff has butter mixed in, not layered", es: "El hojaldre rápido tiene mantequilla mezclada, no en capas", de: "Schneller Blätterteig hat Butter eingemischt, nicht geschichtet", nl: "Snel bladerdeeg heeft boter erdoor gemengd, niet gelaagd" },
          { en: "No difference", es: "Sin diferencia", de: "Kein Unterschied", nl: "Geen verschil" },
          { en: "Rough puff takes longer", es: "El hojaldre rápido toma más tiempo", de: "Schneller Blätterteig dauert länger", nl: "Snel bladerdeeg duurt langer" }
        ],
        correct: 1,
        explanation: {
          en: "Rough puff pastry has butter pieces mixed directly into the dough rather than creating a separate butter layer, making it quicker but slightly less flaky.",
          es: "El hojaldre rápido tiene trozos de mantequilla mezclados directamente en la masa en lugar de crear una capa separada de mantequilla, haciéndolo más rápido pero ligeramente menos hojaldrado.",
          de: "Schneller Blätterteig hat Butterstücke direkt in den Teig gemischt anstatt eine separate Butterschicht zu schaffen, macht ihn schneller aber etwas weniger blättrig.",
          nl: "Snel bladerdeeg heeft boterstukjes direct door het deeg gemengd in plaats van een aparte boterlaag, wat het sneller maar iets minder bladerig maakt."
        }
      },
      {
        question: {
          en: "What is kouign-amann?",
          es: "¿Qué es kouign-amann?",
          de: "Was ist Kouign-amann?",
          nl: "Wat is kouign-amann?"
        },
        options: [
          { en: "A French sauce", es: "Una salsa francesa", de: "Eine französische Sauce", nl: "Een Franse saus" },
          { en: "A Breton pastry with caramelized sugar", es: "Un pastel bretón con azúcar caramelizado", de: "Ein bretonisches Gebäck mit karamellisiertem Zucker", nl: "Een Bretons gebak met gekarameliseerde suiker" },
          { en: "A type of bread", es: "Un tipo de pan", de: "Eine Brotsorte", nl: "Een soort brood" },
          { en: "A filling for éclairs", es: "Un relleno para éclairs", de: "Eine Füllung für Éclairs", nl: "Een vulling voor éclairs" }
        ],
        correct: 1,
        explanation: {
          en: "Kouign-amann is a Breton pastry made with laminated dough, butter, and sugar that caramelizes during baking, creating a sweet, crispy exterior.",
          es: "Kouign-amann es un pastel bretón hecho con masa laminada, mantequilla y azúcar que se carameliza durante el horneado, creando un exterior dulce y crujiente.",
          de: "Kouign-amann ist ein bretonisches Gebäck aus laminiertem Teig, Butter und Zucker, der beim Backen karamellisiert und eine süße, knusprige Außenseite bildet.",
          nl: "Kouign-amann is een Bretons gebak gemaakt met gelamineerd deeg, boter en suiker die karameliseert tijdens het bakken, wat een zoete, knapperige buitenkant creëert."
        }
      },
      {
        question: {
          en: "What temperature range is ideal for working with laminated dough?",
          es: "¿Qué rango de temperatura es ideal para trabajar con masa laminada?",
          de: "Welcher Temperaturbereich ist ideal für die Arbeit mit laminiertem Teig?",
          nl: "Welk temperatuurbereik is ideaal voor het werken met gelamineerd deeg?"
        },
        options: [
          { en: "5-10°C", es: "5-10°C", de: "5-10°C", nl: "5-10°C" },
          { en: "15-18°C", es: "15-18°C", de: "15-18°C", nl: "15-18°C" },
          { en: "20-25°C", es: "20-25°C", de: "20-25°C", nl: "20-25°C" },
          { en: "28-30°C", es: "28-30°C", de: "28-30°C", nl: "28-30°C" }
        ],
        correct: 1,
        explanation: {
          en: "15-18°C is ideal for laminated dough work - cool enough to keep butter firm but warm enough to remain pliable and prevent cracking.",
          es: "15-18°C es ideal para trabajar masa laminada - lo suficientemente frío para mantener la mantequilla firme pero lo suficientemente cálido para permanecer maleable y prevenir grietas.",
          de: "15-18°C ist ideal für die Arbeit mit laminiertem Teig - kühl genug um Butter fest zu halten aber warm genug um biegsam zu bleiben und Risse zu verhindern.",
          nl: "15-18°C is ideaal voor werken met gelamineerd deeg - koel genoeg om boter stevig te houden maar warm genoeg om kneedbaar te blijven en scheuren te voorkomen."
        }
      },
      {
        question: {
          en: "What is the purpose of brushing pastry with milk before baking?",
          es: "¿Cuál es el propósito de cepillar la masa con leche antes de hornear?",
          de: "Was ist der Zweck, Gebäck vor dem Backen mit Milch zu bestreichen?",
          nl: "Wat is het doel van gebak bestrijken met melk voor het bakken?"
        },
        options: [
          { en: "To add moisture", es: "Para añadir humedad", de: "Um Feuchtigkeit hinzuzufügen", nl: "Om vocht toe te voegen" },
          { en: "To promote browning", es: "Para promover el dorado", de: "Um Bräunung zu fördern", nl: "Om bruining te bevorderen" },
          { en: "To prevent burning", es: "Para prevenir quemaduras", de: "Um Verbrennen zu verhindern", nl: "Om verbranden te voorkomen" },
          { en: "To add flavor", es: "Para añadir sabor", de: "Um Geschmack hinzuzufügen", nl: "Om smaak toe te voegen" }
        ],
        correct: 1,
        explanation: {
          en: "Milk contains proteins and sugars that undergo Maillard reaction when heated, promoting golden-brown color development on the pastry surface.",
          es: "La leche contiene proteínas y azúcares que sufren la reacción de Maillard cuando se calientan, promoviendo el desarrollo de color dorado en la superficie de la masa.",
          de: "Milch enthält Proteine und Zucker, die bei Erhitzung eine Maillard-Reaktion durchlaufen und die goldbraune Farbentwicklung auf der Gebäckoberfläche fördern.",
          nl: "Melk bevat eiwitten en suikers die de Maillard-reactie ondergaan bij verhitting, wat de goudbruine kleurontwikkeling op het gebaksoppervlak bevordert."
        }
      },
      {
        question: {
          en: "What is a Paris-Brest shaped like?",
          es: "¿Qué forma tiene un Paris-Brest?",
          de: "Welche Form hat ein Paris-Brest?",
          nl: "Welke vorm heeft een Paris-Brest?"
        },
        options: [
          { en: "A bicycle wheel", es: "Una rueda de bicicleta", de: "Ein Fahrradrad", nl: "Een fietswiel" },
          { en: "A swan", es: "Un cisne", de: "Ein Schwan", nl: "Een zwaan" },
          { en: "A tower", es: "Una torre", de: "Ein Turm", nl: "Een toren" },
          { en: "A boat", es: "Un barco", de: "Ein Boot", nl: "Een boot" }
        ],
        correct: 0,
        explanation: {
          en: "Paris-Brest is shaped like a bicycle wheel to commemorate the Paris-Brest bicycle race, made from choux pastry filled with praline cream.",
          es: "Paris-Brest tiene forma de rueda de bicicleta para conmemorar la carrera ciclista París-Brest, hecho de masa choux rellena con crema de praliné.",
          de: "Paris-Brest ist wie ein Fahrradrad geformt um das Radrennen Paris-Brest zu gedenken, aus Brandteig mit Pralinencreme gefüllt.",
          nl: "Paris-Brest heeft de vorm van een fietswiel ter herdenking van de wielerwedstrijd Parijs-Brest, gemaakt van choux deeg gevuld met pralinecrème."
        }
      },
      {
        question: {
          en: "What is the key to achieving maximum rise in puff pastry?",
          es: "¿Cuál es la clave para lograr el máximo levantamiento en el hojaldre?",
          de: "Was ist der Schlüssel zum maximalen Aufgehen von Blätterteig?",
          nl: "Wat is de sleutel tot maximale rijzing in bladerdeeg?"
        },
        options: [
          { en: "Adding yeast", es: "Añadir levadura", de: "Hefe hinzufügen", nl: "Gist toevoegen" },
          { en: "Keeping layers distinct and cold", es: "Mantener las capas distintas y frías", de: "Schichten getrennt und kalt halten", nl: "Lagen gescheiden en koud houden" },
          { en: "Using hot water", es: "Usar agua caliente", de: "Heißes Wasser verwenden", nl: "Heet water gebruiken" },
          { en: "Adding baking powder", es: "Añadir polvo para hornear", de: "Backpulver hinzufügen", nl: "Bakpoeder toevoegen" }
        ],
        correct: 1,
        explanation: {
          en: "Maximum rise in puff pastry is achieved by keeping butter and dough layers distinct and cold, ensuring rapid steam creation when baked.",
          es: "El máximo levantamiento en hojaldre se logra manteniendo las capas de mantequilla y masa distintas y frías, asegurando creación rápida de vapor al hornear.",
          de: "Maximales Aufgehen im Blätterteig wird erreicht durch getrennte und kalte Butter- und Teigschichten, was schnelle Dampferzeugung beim Backen sichert.",
          nl: "Maximale rijzing in bladerdeeg wordt bereikt door boter- en deeglagen gescheiden en koud te houden, wat snelle stoomcreatie bij bakken verzekert."
        }
      },
      {
        question: {
          en: "What is a gougère?",
          es: "¿Qué es una gougère?",
          de: "Was ist eine Gougère?",
          nl: "Wat is een gougère?"
        },
        options: [
          { en: "A fruit tart", es: "Una tarta de frutas", de: "Eine Obsttorte", nl: "Een vruchtentaart" },
          { en: "A cheese-flavored choux pastry", es: "Una masa choux con sabor a queso", de: "Ein käsegewürzter Brandteig", nl: "Een kaas-gearomatiseerd choux deeg" },
          { en: "A type of croissant", es: "Un tipo de croissant", de: "Eine Art Croissant", nl: "Een soort croissant" },
          { en: "A sweet Danish pastry", es: "Un pastel danés dulce", de: "Ein süßes dänisches Gebäck", nl: "Een zoet Deens gebak" }
        ],
        correct: 1,
        explanation: {
          en: "Gougères are savory choux pastries mixed with cheese (typically Gruyère or Comté), often served as appetizers in Burgundy, France.",
          es: "Las gougères son pasteles choux salados mezclados con queso (típicamente Gruyère o Comté), a menudo servidos como aperitivos en Borgoña, Francia.",
          de: "Gougères sind herzhafte Brandteiggebäcke mit Käse (typischerweise Gruyère oder Comté), oft als Vorspeisen in Burgund, Frankreich serviert.",
          nl: "Gougères zijn hartige choux gebakjes gemengd met kaas (typisch Gruyère of Comté), vaak geserveerd als voorgerecht in Bourgondië, Frankrijk."
        }
      },
      {
        question: {
          en: "What causes choux pastry to collapse after baking?",
          es: "¿Qué causa que la masa choux se colapse después de hornear?",
          de: "Was verursacht, dass Brandteig nach dem Backen zusammenfällt?",
          nl: "Wat veroorzaakt dat choux deeg instort na het bakken?"
        },
        options: [
          { en: "Too much butter", es: "Demasiada mantequilla", de: "Zu viel Butter", nl: "Te veel boter" },
          { en: "Removing from oven too early", es: "Sacar del horno demasiado pronto", de: "Zu früh aus dem Ofen nehmen", nl: "Te vroeg uit de oven halen" },
          { en: "Wrong flour type", es: "Tipo de harina incorrecto", de: "Falsche Mehlsorte", nl: "Verkeerd meeltype" },
          { en: "Too many eggs", es: "Demasiados huevos", de: "Zu viele Eier", nl: "Te veel eieren" }
        ],
        correct: 1,
        explanation: {
          en: "Choux pastry collapses if removed from the oven before fully dried inside. The structure needs to be completely set to maintain its shape.",
          es: "La masa choux se colapsa si se retira del horno antes de secarse completamente por dentro. La estructura necesita estar completamente fija para mantener su forma.",
          de: "Brandteig fällt zusammen wenn er aus dem Ofen genommen wird bevor er innen vollständig getrocknet ist. Die Struktur muss komplett fest sein um die Form zu halten.",
          nl: "Choux deeg stort in als het uit de oven wordt gehaald voordat het van binnen volledig droog is. De structuur moet volledig vast zijn om zijn vorm te behouden."
        }
      },
      {
        question: {
          en: "What is the ideal protein content for pastry flour?",
          es: "¿Cuál es el contenido ideal de proteína para harina de repostería?",
          de: "Was ist der ideale Proteingehalt für Gebäckmehl?",
          nl: "Wat is het ideale eiwitgehalte voor gebaksmeel?"
        },
        options: [
          { en: "5-6%", es: "5-6%", de: "5-6%", nl: "5-6%" },
          { en: "8-9%", es: "8-9%", de: "8-9%", nl: "8-9%" },
          { en: "11-13%", es: "11-13%", de: "11-13%", nl: "11-13%" },
          { en: "14-15%", es: "14-15%", de: "14-15%", nl: "14-15%" }
        ],
        correct: 1,
        explanation: {
          en: "Pastry flour ideally contains 8-9% protein, lower than all-purpose flour (10-12%), resulting in tender pastries with minimal gluten development.",
          es: "La harina de repostería idealmente contiene 8-9% de proteína, menos que la harina todo uso (10-12%), resultando en pasteles tiernos con mínimo desarrollo de gluten.",
          de: "Gebäckmehl enthält idealerweise 8-9% Protein, weniger als Allzweckmehl (10-12%), was zu zartem Gebäck mit minimaler Glutenentwicklung führt.",
          nl: "Gebaksmeel bevat idealiter 8-9% eiwit, minder dan patentbloem (10-12%), wat resulteert in mals gebak met minimale glutenontwikkeling."
        }
      },
      {
        question: {
          en: "What is feuilletage?",
          es: "¿Qué es feuilletage?",
          de: "Was ist Feuilletage?",
          nl: "Wat is feuilletage?"
        },
        options: [
          { en: "A type of cream", es: "Un tipo de crema", de: "Eine Art Sahne", nl: "Een soort room" },
          { en: "The French term for puff pastry", es: "El término francés para hojaldre", de: "Der französische Begriff für Blätterteig", nl: "De Franse term voor bladerdeeg" },
          { en: "A baking technique", es: "Una técnica de horneado", de: "Eine Backtechnik", nl: "Een baktechniek" },
          { en: "A pastry filling", es: "Un relleno de pastelería", de: "Eine Gebäckfüllung", nl: "Een gebaksvulling" }
        ],
        correct: 1,
        explanation: {
          en: "Feuilletage is the French term for puff pastry, derived from 'feuille' meaning 'leaf', referring to its many thin, leaf-like layers.",
          es: "Feuilletage es el término francés para hojaldre, derivado de 'feuille' que significa 'hoja', refiriéndose a sus muchas capas delgadas como hojas.",
          de: "Feuilletage ist der französische Begriff für Blätterteig, abgeleitet von 'feuille' was 'Blatt' bedeutet, bezogen auf seine vielen dünnen, blattartigen Schichten.",
          nl: "Feuilletage is de Franse term voor bladerdeeg, afgeleid van 'feuille' wat 'blad' betekent, verwijzend naar de vele dunne, bladachtige lagen."
        }
      },
      {
        question: {
          en: "How long should puff pastry rest between folds?",
          es: "¿Cuánto tiempo debe reposar el hojaldre entre pliegues?",
          de: "Wie lange sollte Blätterteig zwischen den Faltungen ruhen?",
          nl: "Hoe lang moet bladerdeeg rusten tussen het vouwen?"
        },
        options: [
          { en: "5-10 min", es: "5-10 minutos", de: "5-10 Minuten", nl: "5-10 minuten" },
          { en: "20-30 min", es: "20-30 minutos", de: "20-30 Minuten", nl: "20-30 minuten" },
          { en: "1-2 hours", es: "1-2 horas", de: "1-2 Stunden", nl: "1-2 uur" },
          { en: "Overnight", es: "Toda la noche", de: "Über Nacht", nl: "Een nacht" }
        ],
        correct: 1,
        explanation: {
          en: "Puff pastry should rest 20-30 minutes in the refrigerator between folds to relax gluten and re-chill the butter for optimal lamination.",
          es: "El hojaldre debe reposar 20-30 minutos en el refrigerador entre pliegues para relajar el gluten y re-enfriar la mantequilla para laminación óptima.",
          de: "Blätterteig sollte 20-30 Minuten im Kühlschrank zwischen Faltungen ruhen um Gluten zu entspannen und Butter für optimale Laminierung wieder zu kühlen.",
          nl: "Bladerdeeg moet 20-30 minuten in de koelkast rusten tussen het vouwen om gluten te ontspannen en boter weer te koelen voor optimale laminering."
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