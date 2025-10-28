// Pastries Quiz - Level 4: Advanced Intermediate
(function() {
  const level4 = {
    name: {
      en: "Pastries - Technical Knowledge",
      es: "Pastelería - Conocimiento Técnico",
      de: "Gebäck - Technisches Wissen",
      nl: "Gebak - Technische Kennis"
    },
    questions: [
      {
        question: {
          en: "What is the Maillard reaction in pastry baking?",
          es: "¿Qué es la reacción de Maillard en la repostería?",
          de: "Was ist die Maillard-Reaktion beim Gebäckbacken?",
          nl: "Wat is de Maillard-reactie bij het bakken van gebak?"
        },
        options: [
          { en: "Fat melting", es: "Grasa derritiéndose", de: "Fettschmelzen", nl: "Vet smelten" },
          { en: "Sugar caramelization", es: "Caramelización del azúcar", de: "Zuckerkaramellisierung", nl: "Suiker karameliseren" },
          { en: "Browning reaction between proteins and sugars", es: "Reacción de dorado entre proteínas y azúcares", de: "Bräunungsreaktion zwischen Proteinen und Zuckern", nl: "Bruiningsreactie tussen eiwitten en suikers" },
          { en: "Steam formation", es: "Formación de vapor", de: "Dampfbildung", nl: "Stoomvorming" }
        ],
        correct: 2,
        explanation: {
          en: "The Maillard reaction is a chemical reaction between amino acids and reducing sugars that creates browning and complex flavors in baked goods.",
          es: "La reacción de Maillard es una reacción química entre aminoácidos y azúcares reductores que crea dorado y sabores complejos en productos horneados.",
          de: "Die Maillard-Reaktion ist eine chemische Reaktion zwischen Aminosäuren und reduzierenden Zuckern, die Bräunung und komplexe Aromen in Backwaren erzeugt.",
          nl: "De Maillard-reactie is een chemische reactie tussen aminozuren en reducerende suikers die bruining en complexe smaken in gebakken producten creëert."
        }
      },
      {
        question: {
          en: "What percentage of gluten development is ideal for pie crust?",
          es: "¿Qué porcentaje de desarrollo de gluten es ideal para corteza de tarta?",
          de: "Welcher Prozentsatz der Glutenentwicklung ist ideal für Kuchenboden?",
          nl: "Welk percentage glutenontwikkeling is ideaal voor taartbodem?"
        },
        options: [
          { en: "0-10%", es: "0-10%", de: "0-10%", nl: "0-10%" },
          { en: "20-30%", es: "20-30%", de: "20-30%", nl: "20-30%" },
          { en: "50-60%", es: "50-60%", de: "50-60%", nl: "50-60%" },
          { en: "70-80%", es: "70-80%", de: "70-80%", nl: "70-80%" }
        ],
        correct: 1,
        explanation: {
          en: "Pie crust needs 20-30% gluten development - enough for structure but not so much that it becomes tough and chewy.",
          es: "La corteza de tarta necesita 20-30% de desarrollo de gluten - suficiente para estructura pero no tanto que se vuelva dura y masticable.",
          de: "Kuchenboden braucht 20-30% Glutenentwicklung - genug für Struktur aber nicht so viel dass er zäh und kauig wird.",
          nl: "Taartbodem heeft 20-30% glutenontwikkeling nodig - genoeg voor structuur maar niet zoveel dat het taai en kauwbaar wordt."
        }
      },
      {
        question: {
          en: "What is inverse puff pastry?",
          es: "¿Qué es el hojaldre invertido?",
          de: "Was ist inverser Blätterteig?",
          nl: "Wat is omgekeerd bladerdeeg?"
        },
        options: [
          { en: "Pastry baked upside down", es: "Pastelería horneada al revés", de: "Kopfüber gebackenes Gebäck", nl: "Ondersteboven gebakken gebak" },
          { en: "Dough wrapped in butter instead of butter in dough", es: "Masa envuelta en mantequilla en lugar de mantequilla en masa", de: "Teig in Butter eingewickelt statt Butter in Teig", nl: "Deeg gewikkeld in boter in plaats van boter in deeg" },
          { en: "Using oil instead of butter", es: "Usar aceite en lugar de mantequilla", de: "Öl statt Butter verwenden", nl: "Olie gebruiken in plaats van boter" },
          { en: "Frozen puff pastry", es: "Hojaldre congelado", de: "Gefrorener Blätterteig", nl: "Bevroren bladerdeeg" }
        ],
        correct: 1,
        explanation: {
          en: "Inverse puff pastry has the dough enclosed in butter rather than butter in dough, preventing butter from melting out during lamination.",
          es: "El hojaldre invertido tiene la masa encerrada en mantequilla en lugar de mantequilla en masa, previniendo que la mantequilla se derrita durante la laminación.",
          de: "Inverser Blätterteig hat den Teig in Butter eingeschlossen statt Butter im Teig, verhindert dass Butter während der Laminierung herausschmilzt.",
          nl: "Omgekeerd bladerdeeg heeft het deeg ingesloten in boter in plaats van boter in deeg, wat voorkomt dat boter wegsmelt tijdens laminering."
        }
      },
      {
        question: {
          en: "At what temperature does butter start to melt?",
          es: "¿A qué temperatura empieza a derretirse la mantequilla?",
          de: "Bei welcher Temperatur beginnt Butter zu schmelzen?",
          nl: "Bij welke temperatuur begint boter te smelten?"
        },
        options: [
          { en: "15°C", es: "15°C", de: "15°C", nl: "15°C" },
          { en: "22°C", es: "22°C", de: "22°C", nl: "22°C" },
          { en: "28°C", es: "28°C", de: "28°C", nl: "28°C" },
          { en: "35°C", es: "35°C", de: "35°C", nl: "35°C" }
        ],
        correct: 2,
        explanation: {
          en: "Butter starts to soften around 28°C and melts completely around 32-35°C, which is why keeping pastry cool during preparation is crucial.",
          es: "La mantequilla empieza a ablandarse alrededor de 28°C y se derrite completamente alrededor de 32-35°C, por eso mantener la masa fría durante la preparación es crucial.",
          de: "Butter beginnt bei etwa 28°C weich zu werden und schmilzt vollständig bei 32-35°C, weshalb es wichtig ist Gebäck während der Zubereitung kühl zu halten.",
          nl: "Boter begint zacht te worden rond 28°C en smelt volledig rond 32-35°C, daarom is het cruciaal om gebak koel te houden tijdens bereiding."
        }
      },
      {
        question: {
          en: "What is the function of vinegar in pie dough?",
          es: "¿Cuál es la función del vinagre en la masa de tarta?",
          de: "Was ist die Funktion von Essig im Kuchenteig?",
          nl: "Wat is de functie van azijn in taartdeeg?"
        },
        options: [
          { en: "Adds flavor", es: "Añade sabor", de: "Fügt Geschmack hinzu", nl: "Voegt smaak toe" },
          { en: "Inhibits gluten formation", es: "Inhibe la formación de gluten", de: "Hemmt Glutenbildung", nl: "Remt glutenvorming" },
          { en: "Makes it rise", es: "Lo hace subir", de: "Lässt es aufgehen", nl: "Laat het rijzen" },
          { en: "Adds color", es: "Añade color", de: "Fügt Farbe hinzu", nl: "Voegt kleur toe" }
        ],
        correct: 1,
        explanation: {
          en: "Vinegar's acidity inhibits gluten formation, resulting in a more tender, flaky crust. The acid denatures proteins, preventing tough texture.",
          es: "La acidez del vinagre inhibe la formación de gluten, resultando en una corteza más tierna y hojaldrada. El ácido desnaturaliza las proteínas, previniendo textura dura.",
          de: "Die Säure des Essigs hemmt die Glutenbildung, was zu einer zarteren, blättrigeren Kruste führt. Die Säure denaturiert Proteine und verhindert zähe Textur.",
          nl: "De zuurgraad van azijn remt glutenvorming, wat resulteert in een malser, bladeriger korst. Het zuur denatureert eiwitten en voorkomt taaie textuur."
        }
      },
      {
        question: {
          en: "What is pâte sablée?",
          es: "¿Qué es pâte sablée?",
          de: "Was ist Pâte sablée?",
          nl: "Wat is pâte sablée?"
        },
        options: [
          { en: "Puff pastry", es: "Hojaldre", de: "Blätterteig", nl: "Bladerdeeg" },
          { en: "Sandy-textured sweet pastry", es: "Masa dulce de textura arenosa", de: "Sandiger süßer Mürbeteig", nl: "Zanderig zoet deeg" },
          { en: "Bread dough", es: "Masa de pan", de: "Brotteig", nl: "Brooddeeg" },
          { en: "Choux pastry", es: "Masa choux", de: "Brandteig", nl: "Choux deeg" }
        ],
        correct: 1,
        explanation: {
          en: "Pâte sablée is a French sweet pastry with a sandy, crumbly texture achieved by coating flour particles with fat before adding liquid.",
          es: "Pâte sablée es una masa dulce francesa con textura arenosa y quebradiza lograda cubriendo partículas de harina con grasa antes de añadir líquido.",
          de: "Pâte sablée ist ein französischer süßer Mürbeteig mit sandiger, krümeliger Textur, erreicht durch Umhüllen der Mehlpartikel mit Fett vor Zugabe von Flüssigkeit.",
          nl: "Pâte sablée is een Frans zoet deeg met een zanderige, kruimelige textuur bereikt door meeldeeltjes met vet te bedekken voor toevoeging van vloeistof."
        }
      },
      {
        question: {
          en: "What causes 'butter bleed' in laminated dough?",
          es: "¿Qué causa el 'sangrado de mantequilla' en masa laminada?",
          de: "Was verursacht 'Butteraustritt' bei laminiertem Teig?",
          nl: "Wat veroorzaakt 'boter lekken' in gelamineerd deeg?"
        },
        options: [
          { en: "Too cold temperature", es: "Temperatura demasiado fría", de: "Zu kalte Temperatur", nl: "Te koude temperatuur" },
          { en: "Working at too warm temperature", es: "Trabajar a temperatura demasiado cálida", de: "Arbeiten bei zu warmer Temperatur", nl: "Werken bij te warme temperatuur" },
          { en: "Not enough butter", es: "No suficiente mantequilla", de: "Nicht genug Butter", nl: "Niet genoeg boter" },
          { en: "Wrong flour type", es: "Tipo de harina incorrecto", de: "Falsche Mehlsorte", nl: "Verkeerd meeltype" }
        ],
        correct: 1,
        explanation: {
          en: "Butter bleed occurs when laminated dough is worked at too warm a temperature, causing butter to melt and leak out between layers.",
          es: "El sangrado de mantequilla ocurre cuando la masa laminada se trabaja a temperatura demasiado cálida, causando que la mantequilla se derrita y se escape entre capas.",
          de: "Butteraustritt tritt auf wenn laminierter Teig bei zu warmer Temperatur bearbeitet wird, wodurch Butter schmilzt und zwischen den Schichten austritt.",
          nl: "Boter lekken gebeurt wanneer gelamineerd deeg bij te warme temperatuur wordt bewerkt, waardoor boter smelt en tussen lagen lekt."
        }
      },
      {
        question: {
          en: "What is the science behind egg wash creating shine?",
          es: "¿Cuál es la ciencia detrás del brillo que crea el barniz de huevo?",
          de: "Was ist die Wissenschaft hinter dem Glanz durch Eigelb?",
          nl: "Wat is de wetenschap achter de glans van eierwas?"
        },
        options: [
          { en: "Fat reflects light", es: "La grasa refleja la luz", de: "Fett reflektiert Licht", nl: "Vet reflecteert licht" },
          { en: "Proteins form a glossy film", es: "Las proteínas forman una película brillante", de: "Proteine bilden einen glänzenden Film", nl: "Eiwitten vormen een glanzende film" },
          { en: "Sugar crystallizes", es: "El azúcar cristaliza", de: "Zucker kristallisiert", nl: "Suiker kristalliseert" },
          { en: "Water evaporates", es: "El agua se evapora", de: "Wasser verdunstet", nl: "Water verdampt" }
        ],
        correct: 1,
        explanation: {
          en: "Egg proteins coagulate during baking, forming a smooth, continuous film that reflects light uniformly, creating a glossy appearance.",
          es: "Las proteínas del huevo coagulan durante el horneado, formando una película lisa y continua que refleja la luz uniformemente, creando una apariencia brillante.",
          de: "Eiproteine koagulieren beim Backen und bilden einen glatten, durchgehenden Film, der Licht gleichmäßig reflektiert und ein glänzendes Aussehen erzeugt.",
          nl: "Eieiwitten stollen tijdens het bakken en vormen een gladde, continue film die licht uniform reflecteert, wat een glanzend uiterlijk creëert."
        }
      },
      {
        question: {
          en: "What is a 'baker's percentage' in pastry making?",
          es: "¿Qué es un 'porcentaje de panadero' en pastelería?",
          de: "Was ist ein 'Bäckerprozent' in der Gebäckherstellung?",
          nl: "Wat is een 'bakkerspercentage' bij het maken van gebak?"
        },
        options: [
          { en: "Profit margin", es: "Margen de beneficio", de: "Gewinnspanne", nl: "Winstmarge" },
          { en: "Ingredient weights relative to flour weight", es: "Pesos de ingredientes relativos al peso de harina", de: "Zutatengewichte relativ zum Mehlgewicht", nl: "Ingrediëntgewichten relatief tot meelgewicht" },
          { en: "Baking temperature", es: "Temperatura de horneado", de: "Backtemperatur", nl: "Baktemperatuur" },
          { en: "Rising percentage", es: "Porcentaje de levantamiento", de: "Aufgehprozent", nl: "Rijspercentage" }
        ],
        correct: 1,
        explanation: {
          en: "Baker's percentage expresses ingredient weights as percentages of the flour weight, with flour always being 100%, allowing easy recipe scaling.",
          es: "El porcentaje de panadero expresa los pesos de ingredientes como porcentajes del peso de harina, siendo la harina siempre 100%, permitiendo escalar recetas fácilmente.",
          de: "Bäckerprozent drückt Zutatengewichte als Prozentsätze des Mehlgewichts aus, wobei Mehl immer 100% ist, was einfache Rezeptskalierung ermöglicht.",
          nl: "Bakkerspercentage drukt ingrediëntgewichten uit als percentages van het meelgewicht, waarbij meel altijd 100% is, wat eenvoudig recepten schalen mogelijk maakt."
        }
      },
      {
        question: {
          en: "What is the optimal hydration level for choux pastry?",
          es: "¿Cuál es el nivel óptimo de hidratación para masa choux?",
          de: "Was ist der optimale Hydratationsgrad für Brandteig?",
          nl: "Wat is het optimale hydratieniveau voor choux deeg?"
        },
        options: [
          { en: "50-60%", es: "50-60%", de: "50-60%", nl: "50-60%" },
          { en: "75-85%", es: "75-85%", de: "75-85%", nl: "75-85%" },
          { en: "100-125%", es: "100-125%", de: "100-125%", nl: "100-125%" },
          { en: "150-175%", es: "150-175%", de: "150-175%", nl: "150-175%" }
        ],
        correct: 3,
        explanation: {
          en: "Choux pastry has 150-175% hydration (liquid to flour ratio), creating steam for puffing and the characteristic hollow interior.",
          es: "La masa choux tiene 150-175% de hidratación (proporción líquido a harina), creando vapor para inflarse y el característico interior hueco.",
          de: "Brandteig hat 150-175% Hydratation (Flüssigkeit zu Mehl Verhältnis), erzeugt Dampf zum Aufgehen und den charakteristischen hohlen Innenraum.",
          nl: "Choux deeg heeft 150-175% hydratatie (vloeistof tot meel verhouding), wat stoom creëert voor opzwellen en het karakteristieke holle interieur."
        }
      },
      {
        question: {
          en: "What is fraisage in pastry making?",
          es: "¿Qué es fraisage en pastelería?",
          de: "Was ist Fraisage in der Gebäckherstellung?",
          nl: "Wat is fraisage bij het maken van gebak?"
        },
        options: [
          { en: "Adding strawberries", es: "Añadir fresas", de: "Erdbeeren hinzufügen", nl: "Aardbeien toevoegen" },
          { en: "Smearing dough with heel of hand", es: "Untar masa con el talón de la mano", de: "Teig mit Handballen verschmieren", nl: "Deeg uitsmeren met handpalm" },
          { en: "Freezing technique", es: "Técnica de congelación", de: "Gefriertechnik", nl: "Vriestechniek" },
          { en: "Decorating method", es: "Método de decoración", de: "Dekorationsmethode", nl: "Decoratiemethode" }
        ],
        correct: 1,
        explanation: {
          en: "Fraisage is a French technique of smearing dough with the heel of the hand to blend butter and flour into sheets, creating flaky layers.",
          es: "Fraisage es una técnica francesa de untar masa con el talón de la mano para mezclar mantequilla y harina en láminas, creando capas hojaldradas.",
          de: "Fraisage ist eine französische Technik des Verschmierens von Teig mit dem Handballen um Butter und Mehl zu Blättern zu verbinden, was blättrige Schichten erzeugt.",
          nl: "Fraisage is een Franse techniek van deeg uitsmeren met de handpalm om boter en meel tot vellen te mengen, wat bladderige lagen creëert."
        }
      },
      {
        question: {
          en: "What temperature kills yeast in Danish pastry?",
          es: "¿Qué temperatura mata la levadura en masa danesa?",
          de: "Welche Temperatur tötet Hefe im dänischen Teig?",
          nl: "Welke temperatuur doodt gist in Deens deeg?"
        },
        options: [
          { en: "40°C", es: "40°C", de: "40°C", nl: "40°C" },
          { en: "55°C", es: "55°C", de: "55°C", nl: "55°C" },
          { en: "70°C", es: "70°C", de: "70°C", nl: "70°C" },
          { en: "85°C", es: "85°C", de: "85°C", nl: "85°C" }
        ],
        correct: 1,
        explanation: {
          en: "Yeast begins to die at 55°C and is completely killed by 60°C, which is why temperature control during lamination is critical for yeasted doughs.",
          es: "La levadura empieza a morir a 55°C y muere completamente a 60°C, por eso el control de temperatura durante la laminación es crítico para masas con levadura.",
          de: "Hefe beginnt bei 55°C zu sterben und ist bei 60°C vollständig tot, weshalb Temperaturkontrolle während der Laminierung bei Hefeteigen kritisch ist.",
          nl: "Gist begint te sterven bij 55°C en is volledig dood bij 60°C, daarom is temperatuurcontrole tijdens laminering kritisch voor gistdegen."
        }
      },
      {
        question: {
          en: "What is the purpose of steam injection in pastry ovens?",
          es: "¿Cuál es el propósito de la inyección de vapor en hornos de pastelería?",
          de: "Was ist der Zweck der Dampfinjektion in Gebäcköfen?",
          nl: "Wat is het doel van stoominjectie in bakovens?"
        },
        options: [
          { en: "Cooling the oven", es: "Enfriar el horno", de: "Den Ofen kühlen", nl: "De oven koelen" },
          { en: "Delaying crust formation for maximum rise", es: "Retrasar la formación de corteza para máximo levantamiento", de: "Krustenbildung verzögern für maximales Aufgehen", nl: "Korstvorming vertragen voor maximale rijzing" },
          { en: "Adding flavor", es: "Añadir sabor", de: "Geschmack hinzufügen", nl: "Smaak toevoegen" },
          { en: "Cleaning the oven", es: "Limpiar el horno", de: "Den Ofen reinigen", nl: "De oven schoonmaken" }
        ],
        correct: 1,
        explanation: {
          en: "Steam keeps the pastry surface moist, delaying crust formation and allowing maximum expansion before the structure sets.",
          es: "El vapor mantiene la superficie de la masa húmeda, retrasando la formación de corteza y permitiendo máxima expansión antes de que la estructura se fije.",
          de: "Dampf hält die Gebäckoberfläche feucht, verzögert Krustenbildung und erlaubt maximale Ausdehnung bevor die Struktur fest wird.",
          nl: "Stoom houdt het gebaksoppervlak vochtig, vertraagt korstvorming en staat maximale expansie toe voordat de structuur vast wordt."
        }
      },
      {
        question: {
          en: "What is retrograde starch in pastry?",
          es: "¿Qué es el almidón retrógrado en pastelería?",
          de: "Was ist retrograde Stärke im Gebäck?",
          nl: "Wat is retrograde zetmeel in gebak?"
        },
        options: [
          { en: "Fresh starch", es: "Almidón fresco", de: "Frische Stärke", nl: "Vers zetmeel" },
          { en: "Recrystallized starch after cooling", es: "Almidón recristalizado después de enfriar", de: "Rekristallisierte Stärke nach Abkühlung", nl: "Geherkristalliseerd zetmeel na afkoeling" },
          { en: "Modified starch", es: "Almidón modificado", de: "Modifizierte Stärke", nl: "Gemodificeerd zetmeel" },
          { en: "Starch substitute", es: "Sustituto de almidón", de: "Stärkeersatz", nl: "Zetmeelvervanger" }
        ],
        correct: 1,
        explanation: {
          en: "Retrograde starch forms when gelatinized starch cools and recrystallizes, causing pastries to become firm and potentially stale.",
          es: "El almidón retrógrado se forma cuando el almidón gelatinizado se enfría y recristaliza, causando que los pasteles se vuelvan firmes y potencialmente rancios.",
          de: "Retrograde Stärke bildet sich wenn gelatinierte Stärke abkühlt und rekristallisiert, wodurch Gebäck fest und möglicherweise altbacken wird.",
          nl: "Retrograde zetmeel vormt zich wanneer gegelatiniseerd zetmeel afkoelt en herkristalliseert, waardoor gebak stevig en mogelijk oudbakken wordt."
        }
      },
      {
        question: {
          en: "What is the effect of sugar on gluten development?",
          es: "¿Cuál es el efecto del azúcar en el desarrollo del gluten?",
          de: "Was ist die Wirkung von Zucker auf die Glutenentwicklung?",
          nl: "Wat is het effect van suiker op glutenontwikkeling?"
        },
        options: [
          { en: "Strengthens gluten", es: "Fortalece el gluten", de: "Stärkt Gluten", nl: "Versterkt gluten" },
          { en: "No effect", es: "Sin efecto", de: "Kein Effekt", nl: "Geen effect" },
          { en: "Inhibits gluten formation", es: "Inhibe la formación de gluten", de: "Hemmt Glutenbildung", nl: "Remt glutenvorming" },
          { en: "Doubles gluten", es: "Duplica el gluten", de: "Verdoppelt Gluten", nl: "Verdubbelt gluten" }
        ],
        correct: 2,
        explanation: {
          en: "Sugar competes with gluten proteins for water, inhibiting gluten development and resulting in more tender, less elastic pastries.",
          es: "El azúcar compite con las proteínas del gluten por el agua, inhibiendo el desarrollo del gluten y resultando en pasteles más tiernos y menos elásticos.",
          de: "Zucker konkurriert mit Glutenproteinen um Wasser, hemmt die Glutenentwicklung und führt zu zarteren, weniger elastischen Gebäcken.",
          nl: "Suiker concurreert met gluteneiwitten om water, remt glutenontwikkeling en resulteert in malser, minder elastisch gebak."
        }
      },
      {
        question: {
          en: "What is the critical temperature for starch gelatinization?",
          es: "¿Cuál es la temperatura crítica para la gelatinización del almidón?",
          de: "Was ist die kritische Temperatur für Stärkegelatinierung?",
          nl: "Wat is de kritische temperatuur voor zetmeelgelatinisatie?"
        },
        options: [
          { en: "40-50°C", es: "40-50°C", de: "40-50°C", nl: "40-50°C" },
          { en: "55-65°C", es: "55-65°C", de: "55-65°C", nl: "55-65°C" },
          { en: "70-80°C", es: "70-80°C", de: "70-80°C", nl: "70-80°C" },
          { en: "85-95°C", es: "85-95°C", de: "85-95°C", nl: "85-95°C" }
        ],
        correct: 1,
        explanation: {
          en: "Starch gelatinization typically occurs between 55-65°C when starch granules absorb water, swell, and create the structure in baked goods.",
          es: "La gelatinización del almidón típicamente ocurre entre 55-65°C cuando los gránulos de almidón absorben agua, se hinchan y crean la estructura en productos horneados.",
          de: "Stärkegelatinierung tritt typischerweise zwischen 55-65°C auf wenn Stärkekörner Wasser aufnehmen, anschwellen und die Struktur in Backwaren bilden.",
          nl: "Zetmeelgelatinisatie vindt typisch plaats tussen 55-65°C wanneer zetmeelkorrels water absorberen, zwellen en de structuur in gebakken producten creëren."
        }
      },
      {
        question: {
          en: "How many layers result from 6 single folds in puff pastry?",
          es: "¿Cuántas capas resultan de 6 pliegues simples en hojaldre?",
          de: "Wie viele Schichten entstehen aus 6 einfachen Faltungen im Blätterteig?",
          nl: "Hoeveel lagen ontstaan uit 6 enkele vouwen in bladerdeeg?"
        },
        options: [
          { en: "64 layers", es: "64 capas", de: "64 Schichten", nl: "64 lagen" },
          { en: "256 layers", es: "256 capas", de: "256 Schichten", nl: "256 lagen" },
          { en: "729 layers", es: "729 capas", de: "729 Schichten", nl: "729 lagen" },
          { en: "1458 layers", es: "1458 capas", de: "1458 Schichten", nl: "1458 lagen" }
        ],
        correct: 2,
        explanation: {
          en: "Six single (three-fold) turns create 3^6 = 729 layers. Each fold triples the layers: 3, 9, 27, 81, 243, 729.",
          es: "Seis vueltas simples (tres pliegues) crean 3^6 = 729 capas. Cada pliegue triplica las capas: 3, 9, 27, 81, 243, 729.",
          de: "Sechs einfache (dreifache) Drehungen erzeugen 3^6 = 729 Schichten. Jede Faltung verdreifacht die Schichten: 3, 9, 27, 81, 243, 729.",
          nl: "Zes enkele (drievoudige) vouwen creëren 3^6 = 729 lagen. Elke vouw verdrievoudigt de lagen: 3, 9, 27, 81, 243, 729."
        }
      },
      {
        question: {
          en: "What is plasticity in relation to pastry fats?",
          es: "¿Qué es la plasticidad en relación con las grasas de pastelería?",
          de: "Was ist Plastizität in Bezug auf Gebäckfette?",
          nl: "Wat is plasticiteit in relatie tot bakvetten?"
        },
        options: [
          { en: "Melting point", es: "Punto de fusión", de: "Schmelzpunkt", nl: "Smeltpunt" },
          { en: "Ability to be shaped without breaking or melting", es: "Capacidad de ser moldeado sin romperse o derretirse", de: "Fähigkeit geformt zu werden ohne zu brechen oder schmelzen", nl: "Vermogen om gevormd te worden zonder breken of smelten" },
          { en: "Fat content", es: "Contenido de grasa", de: "Fettgehalt", nl: "Vetgehalte" },
          { en: "Flavor profile", es: "Perfil de sabor", de: "Geschmacksprofil", nl: "Smaakprofiel" }
        ],
        correct: 1,
        explanation: {
          en: "Plasticity is fat's ability to be rolled and shaped without breaking (too cold) or melting (too warm), crucial for successful lamination.",
          es: "La plasticidad es la capacidad de la grasa para ser enrollada y moldeada sin romperse (demasiado fría) o derretirse (demasiado cálida), crucial para laminación exitosa.",
          de: "Plastizität ist die Fähigkeit von Fett gerollt und geformt zu werden ohne zu brechen (zu kalt) oder zu schmelzen (zu warm), entscheidend für erfolgreiche Laminierung.",
          nl: "Plasticiteit is het vermogen van vet om gerold en gevormd te worden zonder te breken (te koud) of te smelten (te warm), cruciaal voor succesvolle laminering."
        }
      },
      {
        question: {
          en: "What causes the honeycomb structure in cream puffs?",
          es: "¿Qué causa la estructura de panal en los profiteroles?",
          de: "Was verursacht die Wabenstruktur in Windbeuteln?",
          nl: "Wat veroorzaakt de honingraatstructuur in soesjes?"
        },
        options: [
          { en: "Baking powder", es: "Polvo para hornear", de: "Backpulver", nl: "Bakpoeder" },
          { en: "Egg proteins setting around steam bubbles", es: "Proteínas de huevo fijándose alrededor de burbujas de vapor", de: "Eiproteine die sich um Dampfblasen festigen", nl: "Eieiwitten die rond stoombellen stollen" },
          { en: "Sugar crystallization", es: "Cristalización del azúcar", de: "Zuckerkristallisation", nl: "Suikerkristallisatie" },
          { en: "Yeast fermentation", es: "Fermentación de levadura", de: "Hefegärung", nl: "Gistfermentatie" }
        ],
        correct: 1,
        explanation: {
          en: "The honeycomb structure forms when egg proteins coagulate around expanding steam bubbles, creating a network of air pockets in the pastry.",
          es: "La estructura de panal se forma cuando las proteínas del huevo coagulan alrededor de burbujas de vapor en expansión, creando una red de bolsas de aire en la masa.",
          de: "Die Wabenstruktur entsteht wenn Eiproteine um expandierende Dampfblasen koagulieren und ein Netzwerk von Lufttaschen im Gebäck bilden.",
          nl: "De honingraatstructuur vormt zich wanneer eieiwitten stollen rond expanderende stoombellen, wat een netwerk van luchtzakken in het gebak creëert."
        }
      },
      {
        question: {
          en: "What is the water activity level that inhibits microbial growth in pastries?",
          es: "¿Cuál es el nivel de actividad del agua que inhibe el crecimiento microbiano en pasteles?",
          de: "Was ist der Wasseraktivitätswert der mikrobielles Wachstum in Gebäck hemmt?",
          nl: "Wat is het wateractiviteitsniveau dat microbiële groei in gebak remt?"
        },
        options: [
          { en: "Below 0.95", es: "Debajo de 0.95", de: "Unter 0,95", nl: "Onder 0,95" },
          { en: "Below 0.85", es: "Debajo de 0.85", de: "Unter 0,85", nl: "Onder 0,85" },
          { en: "Below 0.65", es: "Debajo de 0.65", de: "Unter 0,65", nl: "Onder 0,65" },
          { en: "Below 0.45", es: "Debajo de 0.45", de: "Unter 0,45", nl: "Onder 0,45" }
        ],
        correct: 1,
        explanation: {
          en: "Water activity below 0.85 inhibits most bacterial growth, below 0.80 inhibits most molds, and below 0.60 inhibits most yeasts in pastries.",
          es: "Actividad del agua debajo de 0.85 inhibe la mayoría del crecimiento bacteriano, debajo de 0.80 inhibe la mayoría de mohos, y debajo de 0.60 inhibe la mayoría de levaduras en pasteles.",
          de: "Wasseraktivität unter 0,85 hemmt das meiste bakterielle Wachstum, unter 0,80 hemmt die meisten Schimmelpilze und unter 0,60 hemmt die meisten Hefen in Gebäck.",
          nl: "Wateractiviteit onder 0,85 remt de meeste bacteriële groei, onder 0,80 remt de meeste schimmels, en onder 0,60 remt de meeste gisten in gebak."
        }
      }
    ]
  };

  // Export for use in the quiz application
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level4;
  } else if (typeof window !== 'undefined') {
    window.level4 = level4;
  }
})();