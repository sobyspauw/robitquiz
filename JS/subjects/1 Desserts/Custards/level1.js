// Quiz Level 1: Dessert - Custards
(function() {
  const level1 = {
    name: {
      en: "Custards - Level 1",
      es: "Natillas - Nivel 1",
      de: "Puddings - Level 1",
      nl: "Custards - Level 1"
    },
    questions: [
      {
        question: {
          en: "What are the two main ingredients in basic custard?",
          es: "¿Cuáles son los dos ingredientes principales en las natillas básicas?",
          de: "Was sind die zwei Hauptzutaten in grundlegendem Pudding?",
          nl: "Wat zijn de twee hoofdingrediënten in basis custard?"
        },
        options: [
          { en: "Eggs and milk", es: "Huevos y leche", de: "Eier und Milch", nl: "Eieren en melk" },
          { en: "Flour and butter", es: "Harina y mantequilla", de: "Mehl und Butter", nl: "Meel en boter" },
          { en: "Sugar and cream", es: "Azúcar y nata", de: "Zucker und Sahne", nl: "Suiker en room" },
          { en: "Gelatin and water", es: "Gelatina y agua", de: "Gelatine und Wasser", nl: "Gelatine en water" }
        ],
        correct: 0,
        explanation: {
          en: "Basic custard is made with eggs (which provide thickening proteins) and milk or cream, creating a smooth, creamy texture when cooked properly.",
          es: "Las natillas básicas se hacen con huevos (que proporcionan proteínas espesantes) y leche o nata, creando una textura suave y cremosa cuando se cocinan correctamente.",
          de: "Grundlegender Pudding wird mit Eiern (die verdickende Proteine liefern) und Milch oder Sahne gemacht, wodurch eine glatte, cremige Textur entsteht, wenn er richtig gekocht wird.",
          nl: "Basis custard wordt gemaakt met eieren (die verdikkende eiwitten leveren) en melk of room, waardoor een gladde, romige textuur ontstaat bij correct koken."
        }
      },
      {
        question: {
          en: "What happens if you cook custard too quickly or at too high temperature?",
          es: "¿Qué pasa si cocinas las natillas demasiado rápido o a temperatura muy alta?",
          de: "Was passiert, wenn man Pudding zu schnell oder bei zu hoher Temperatur kocht?",
          nl: "Wat gebeurt er als je custard te snel of op te hoge temperatuur kookt?"
        },
        options: [
          { en: "It becomes thicker", es: "Se vuelve más espeso", de: "Es wird dicker", nl: "Het wordt dikker" },
          { en: "It curdles or scrambles", es: "Se cuaja o se revuelve", de: "Es gerinnt oder stockt", nl: "Het scheidt of stolt" },
          { en: "It becomes sweeter", es: "Se vuelve más dulce", de: "Es wird süßer", nl: "Het wordt zoeter" },
          { en: "It changes color only", es: "Solo cambia de color", de: "Es ändert nur die Farbe", nl: "Het verandert alleen van kleur" }
        ],
        correct: 1,
        explanation: {
          en: "High heat causes the egg proteins to coagulate too quickly, creating lumps and a grainy texture instead of smooth custard. Low, gentle heat is essential.",
          es: "El calor alto hace que las proteínas del huevo se coagulen demasiado rápido, creando grumos y una textura granulosa en lugar de natillas suaves. El calor bajo y suave es esencial.",
          de: "Hohe Hitze lässt die Eiproteine zu schnell gerinnen, wodurch Klumpen und eine körnige Textur entstehen anstatt glattem Pudding. Niedrige, sanfte Hitze ist wesentlich.",
          nl: "Hoge hitte zorgt ervoor dat de eiproteïnen te snel coaguleren, waardoor klontjes en een korrelige textuur ontstaan in plaats van gladde custard. Lage, zachte hitte is essentieel."
        }
      },
      {
        question: {
          en: "Which cooking method is best for making custard?",
          es: "¿Qué método de cocción es mejor para hacer natillas?",
          de: "Welche Kochmethode ist am besten für die Herstellung von Pudding?",
          nl: "Welke kookmethode is het beste voor het maken van custard?"
        },
        options: [
          { en: "High heat, stirring fast", es: "Calor alto, revolviendo rápido", de: "Hohe Hitze, schnell rühren", nl: "Hoge hitte, snel roeren" },
          { en: "Double boiler or low heat", es: "Baño maría o calor bajo", de: "Wasserbad oder niedrige Hitze", nl: "Au bain marie of lage hitte" },
          { en: "Microwave on high", es: "Microondas en alto", de: "Mikrowelle auf hoch", nl: "Magnetron op hoog" },
          { en: "Oven at high temperature", es: "Horno a alta temperatura", de: "Ofen bei hoher Temperatur", nl: "Oven op hoge temperatuur" }
        ],
        correct: 1,
        explanation: {
          en: "A double boiler or low, gentle heat prevents the custard from overheating and ensures smooth, even cooking without curdling.",
          es: "Un baño maría o calor bajo y suave previene que las natillas se sobrecalienten y asegura una cocción suave y uniforme sin cuajar.",
          de: "Ein Wasserbad oder niedrige, sanfte Hitze verhindert, dass der Pudding überhitzt wird und sorgt für gleichmäßiges, glattes Kochen ohne Gerinnen.",
          nl: "Een au bain marie of lage, zachte hitte voorkomt dat de custard oververhit raakt en zorgt voor glad, gelijkmatig koken zonder scheiden."
        }
      },
      {
        question: {
          en: "What is crème anglaise?",
          es: "¿Qué es la crème anglaise?",
          de: "Was ist Crème anglaise?",
          nl: "Wat is crème anglaise?"
        },
        options: [
          { en: "A type of cake", es: "Un tipo de pastel", de: "Eine Art Kuchen", nl: "Een soort taart" },
          { en: "A poured custard sauce", es: "Una salsa de natillas vertida", de: "Eine gegossene Puddingsauce", nl: "Een gegoten custard saus" },
          { en: "A baked custard", es: "Unas natillas horneadas", de: "Ein gebackener Pudding", nl: "Een gebakken custard" },
          { en: "A frozen dessert", es: "Un postre congelado", de: "Ein gefrorenes Dessert", nl: "Een bevroren dessert" }
        ],
        correct: 1,
        explanation: {
          en: "Crème anglaise is a thin, pourable vanilla custard sauce served with desserts. It's cooked on the stovetop until it coats the back of a spoon.",
          es: "La crème anglaise es una salsa fina de natillas de vainilla que se vierte y se sirve con postres. Se cocina en la estufa hasta que cubra el dorso de una cuchara.",
          de: "Crème anglaise ist eine dünne, gießbare Vanillepudding-Sauce, die zu Desserts serviert wird. Sie wird auf dem Herd gekocht, bis sie den Rücken eines Löffels überzieht.",
          nl: "Crème anglaise is een dunne, gietbare vanille custard saus die bij desserts geserveerd wordt. Het wordt op het fornuis gekookt tot het de achterkant van een lepel bedekt."
        }
      },
      {
        question: {
          en: "What distinguishes a baked custard from a stirred custard?",
          es: "¿Qué distingue unas natillas horneadas de unas natillas revueltas?",
          de: "Was unterscheidet einen gebackenen Pudding von einem gerührten Pudding?",
          nl: "Wat onderscheidt een gebakken custard van een geroerde custard?"
        },
        options: [
          { en: "The ingredients used", es: "Los ingredientes utilizados", de: "Die verwendeten Zutaten", nl: "De gebruikte ingrediënten" },
          { en: "The cooking method", es: "El método de cocción", de: "Die Kochmethode", nl: "De kookmethode" },
          { en: "The serving temperature", es: "La temperatura de servicio", de: "Die Serviertemperatur", nl: "De serveertemperatuur" },
          { en: "The color", es: "El color", de: "Die Farbe", nl: "De kleur" }
        ],
        correct: 1,
        explanation: {
          en: "Baked custards are cooked in the oven (like flan or crème brûlée) while stirred custards are cooked on the stovetop with constant stirring (like pastry cream).",
          es: "Las natillas horneadas se cocinan en el horno (como flan o crème brûlée) mientras que las natillas revueltas se cocinan en la estufa con revuelto constante (como crema pastelera).",
          de: "Gebackene Puddings werden im Ofen gekocht (wie Flan oder Crème brûlée), während gerührte Puddings auf dem Herd unter ständigem Rühren gekocht werden (wie Konditorcreme).",
          nl: "Gebakken custards worden in de oven gekookt (zoals flan of crème brûlée) terwijl geroerde custards op het fornuis gekookt worden met constant roeren (zoals banketbakkersroom)."
        }
      },
      {
        question: {
          en: "What is the purpose of tempering eggs when making custard?",
          es: "¿Cuál es el propósito de templar los huevos al hacer natillas?",
          de: "Was ist der Zweck des Temperierens von Eiern bei der Puddingherstellung?",
          nl: "Wat is het doel van het tempereren van eieren bij het maken van custard?"
        },
        options: [
          { en: "To change the flavor", es: "Para cambiar el sabor", de: "Um den Geschmack zu ändern", nl: "Om de smaak te veranderen" },
          { en: "To prevent curdling", es: "Para prevenir que se cuaje", de: "Um Gerinnen zu verhindern", nl: "Om scheiden te voorkomen" },
          { en: "To add sweetness", es: "Para añadir dulzura", de: "Um Süße hinzuzufügen", nl: "Om zoetheid toe te voegen" },
          { en: "To increase volume", es: "Para aumentar el volumen", de: "Um das Volumen zu erhöhen", nl: "Om het volume te vergroten" }
        ],
        correct: 1,
        explanation: {
          en: "Tempering involves gradually adding hot liquid to beaten eggs while whisking, slowly raising their temperature to prevent them from scrambling when added to the hot mixture.",
          es: "Templar implica añadir gradualmente líquido caliente a huevos batidos mientras se bate, aumentando lentamente su temperatura para evitar que se revuelvan cuando se añaden a la mezcla caliente.",
          de: "Temperieren bedeutet, heiße Flüssigkeit allmählich zu geschlagenen Eiern hinzuzufügen, während man schlägt, um ihre Temperatur langsam zu erhöhen und zu verhindern, dass sie stocken, wenn sie zur heißen Mischung hinzugefügt werden.",
          nl: "Tempereren houdt in dat je geleidelijk hete vloeistof toevoegt aan geklopte eieren terwijl je klopt, waardoor hun temperatuur langzaam stijgt om te voorkomen dat ze stollen wanneer ze aan het hete mengsel worden toegevoegd."
        }
      },
      {
        question: {
          en: "Which type of custard is crème brûlée?",
          es: "¿Qué tipo de natillas es la crème brûlée?",
          de: "Welche Art von Pudding ist Crème brûlée?",
          nl: "Welk type custard is crème brûlée?"
        },
        options: [
          { en: "Stirred custard", es: "Natillas revueltas", de: "Gerührter Pudding", nl: "Geroerde custard" },
          { en: "Baked custard", es: "Natillas horneadas", de: "Gebackener Pudding", nl: "Gebakken custard" },
          { en: "Frozen custard", es: "Natillas congeladas", de: "Gefrorener Pudding", nl: "Bevroren custard" },
          { en: "Whipped custard", es: "Natillas batidas", de: "Geschlagener Pudding", nl: "Geklopte custard" }
        ],
        correct: 1,
        explanation: {
          en: "Crème brûlée is a rich baked custard topped with caramelized sugar. It's baked in individual ramekins in a water bath (bain-marie).",
          es: "La crème brûlée es una rica natilla horneada cubierta con azúcar caramelizado. Se hornea en moldes individuales en baño maría.",
          de: "Crème brûlée ist ein reichhaltiger gebackener Pudding mit karamelisiertem Zucker. Er wird in einzelnen Förmchen im Wasserbad (Bain-Marie) gebacken.",
          nl: "Crème brûlée is een rijke gebakken custard bedekt met gekarameliseerde suiker. Het wordt gebakken in individuele vormpjes in een waterbad (au bain-marie)."
        }
      },
      {
        question: {
          en: "What gives flan its characteristic caramel flavor?",
          es: "¿Qué le da al flan su sabor característico a caramelo?",
          de: "Was verleiht Flan seinen charakteristischen Karamellgeschmack?",
          nl: "Wat geeft flan zijn karakteristieke karamelsmaak?"
        },
        options: [
          { en: "Caramel extract", es: "Extracto de caramelo", de: "Karamellextrakt", nl: "Karamelextract" },
          { en: "Brown sugar", es: "Azúcar moreno", de: "Brauner Zucker", nl: "Bruine suiker" },
          { en: "Caramelized sugar in the mold", es: "Azúcar caramelizado en el molde", de: "Karamelisierter Zucker in der Form", nl: "Gekarameliseerde suiker in de vorm" },
          { en: "Caramel syrup added after baking", es: "Jarabe de caramelo añadido después de hornear", de: "Karamellsirup nach dem Backen hinzugefügt", nl: "Karamelsiroop toegevoegd na het bakken" }
        ],
        correct: 2,
        explanation: {
          en: "Flan gets its caramel flavor from sugar that's caramelized directly in the baking mold before adding the custard mixture. This creates both flavor and the signature sauce.",
          es: "El flan obtiene su sabor a caramelo del azúcar que se carameliza directamente en el molde de hornear antes de añadir la mezcla de natillas. Esto crea tanto sabor como la salsa característica.",
          de: "Flan erhält seinen Karamellgeschmack von Zucker, der direkt in der Backform karamelisiert wird, bevor die Puddingmischung hinzugefügt wird. Dies erzeugt sowohl Geschmack als auch die charakteristische Sauce.",
          nl: "Flan krijgt zijn karamelsmaak van suiker die direct in de bakvorm gekarameliseerd wordt voordat het custardmengsel wordt toegevoegd. Dit creëert zowel smaak als de kenmerkende saus."
        }
      },
      {
        question: {
          en: "What is the ideal texture for properly made custard?",
          es: "¿Cuál es la textura ideal para unas natillas bien hechas?",
          de: "Was ist die ideale Textur für richtig gemachten Pudding?",
          nl: "Wat is de ideale textuur voor goed gemaakte custard?"
        },
        options: [
          { en: "Lumpy and thick", es: "Grumosa y espesa", de: "Klumpig und dick", nl: "Klonterig en dik" },
          { en: "Smooth and creamy", es: "Suave y cremosa", de: "Glatt und cremig", nl: "Glad en romig" },
          { en: "Thin and watery", es: "Fina y aguada", de: "Dünn und wässrig", nl: "Dun en waterig" },
          { en: "Thick and grainy", es: "Espesa y granulosa", de: "Dick und körnig", nl: "Dik en korrelig" }
        ],
        correct: 1,
        explanation: {
          en: "Properly made custard should have a smooth, creamy texture without lumps or graininess. It should coat the back of a spoon but still be pourable.",
          es: "Las natillas bien hechas deben tener una textura suave y cremosa sin grumos o granulado. Debe cubrir el dorso de una cuchara pero aún ser vertible.",
          de: "Richtig gemachter Pudding sollte eine glatte, cremige Textur ohne Klumpen oder Körnigkeit haben. Er sollte den Rücken eines Löffels überziehen, aber noch gießbar sein.",
          nl: "Goed gemaakte custard moet een gladde, romige textuur hebben zonder klontjes of korreligheid. Het moet de achterkant van een lepel bekleden maar nog steeds gietbaar zijn."
        }
      },
      {
        question: {
          en: "What is pastry cream (crème pâtissière)?",
          es: "¿Qué es la crema pastelera (crème pâtissière)?",
          de: "Was ist Konditorcreme (Crème pâtissière)?",
          nl: "Wat is banketbakkersroom (crème pâtissière)?"
        },
        options: [
          { en: "A whipped cream", es: "Una nata montada", de: "Eine Schlagsahne", nl: "Een slagroom" },
          { en: "A thick custard with flour or cornstarch", es: "Una natilla espesa con harina o maicena", de: "Ein dicker Pudding mit Mehl oder Maisstärke", nl: "Een dikke custard met meel of maïzena" },
          { en: "A butter cream", es: "Una crema de mantequilla", de: "Eine Buttercreme", nl: "Een boterroom" },
          { en: "A chocolate ganache", es: "Un ganache de chocolate", de: "Eine Schokoladenganache", nl: "Een chocolade ganache" }
        ],
        correct: 1,
        explanation: {
          en: "Pastry cream is a thick custard stabilized with flour or cornstarch, making it thick enough to fill pastries, éclairs, and layer cakes without running.",
          es: "La crema pastelera es una natilla espesa estabilizada con harina o maicena, haciéndola lo suficientemente espesa para rellenar pasteles, éclairs y tartas de capas sin escurrirse.",
          de: "Konditorcreme ist ein dicker Pudding, der mit Mehl oder Maisstärke stabilisiert wird, wodurch er dick genug wird, um Gebäck, Éclairs und Schichtkuchen zu füllen, ohne zu fließen.",
          nl: "Banketbakkersroom is een dikke custard gestabiliseerd met meel of maïzena, waardoor het dik genoeg is om gebak, éclairs en laagjestaarten te vullen zonder weg te lopen."
        }
      },
      {
        question: {
          en: "How can you tell when stirred custard is properly cooked?",
          es: "¿Cómo puedes saber cuándo las natillas revueltas están bien cocidas?",
          de: "Wie erkennt man, dass gerührter Pudding richtig gekocht ist?",
          nl: "Hoe kun je zien wanneer geroerde custard goed gekookt is?"
        },
        options: [
          { en: "It boils vigorously", es: "Hierve vigorosamente", de: "Es kocht kräftig", nl: "Het kookt heftig" },
          { en: "It coats the back of a spoon", es: "Cubre el dorso de una cuchara", de: "Es überzieht den Rücken eines Löffels", nl: "Het bedekt de achterkant van een lepel" },
          { en: "It changes color dramatically", es: "Cambia de color dramáticamente", de: "Es ändert die Farbe dramatisch", nl: "Het verandert dramatisch van kleur" },
          { en: "It becomes completely solid", es: "Se vuelve completamente sólido", de: "Es wird völlig fest", nl: "Het wordt volledig vast" }
        ],
        correct: 1,
        explanation: {
          en: "Stirred custard is done when it coats the back of a spoon and you can draw a line through it with your finger that stays clean - this is called nappe consistency.",
          es: "Las natillas revueltas están listas cuando cubren el dorso de una cuchara y puedes trazar una línea a través de ella con tu dedo que se mantiene limpia - esto se llama consistencia nappe.",
          de: "Gerührter Pudding ist fertig, wenn er den Rücken eines Löffels überzieht und man mit dem Finger eine Linie hindurchziehen kann, die sauber bleibt - das nennt man Nappe-Konsistenz.",
          nl: "Geroerde custard is klaar wanneer het de achterkant van een lepel bedekt en je er een lijn doorheen kunt trekken met je vinger die schoon blijft - dit wordt nappe consistentie genoemd."
        }
      },
      {
        question: {
          en: "What causes custard to curdle or separate?",
          es: "¿Qué causa que las natillas se cuajen o separen?",
          de: "Was führt dazu, dass Pudding gerinnt oder sich trennt?",
          nl: "Wat zorgt ervoor dat custard scheidt of gaat schiften?"
        },
        options: [
          { en: "Too much sugar", es: "Demasiado azúcar", de: "Zu viel Zucker", nl: "Te veel suiker" },
          { en: "Overheating or cooking too fast", es: "Sobrecalentar o cocinar demasiado rápido", de: "Überhitzen oder zu schnelles Kochen", nl: "Oververhitten of te snel koken" },
          { en: "Too much vanilla", es: "Demasiada vainilla", de: "Zu viel Vanille", nl: "Te veel vanille" },
          { en: "Not enough stirring", es: "No revolver lo suficiente", de: "Nicht genug rühren", nl: "Niet genoeg roeren" }
        ],
        correct: 1,
        explanation: {
          en: "Custard curdles when egg proteins coagulate too quickly due to excessive heat. The proteins clump together instead of creating a smooth, creamy texture.",
          es: "Las natillas se cuajan cuando las proteínas del huevo se coagulan demasiado rápido debido al calor excesivo. Las proteínas se agrupan en lugar de crear una textura suave y cremosa.",
          de: "Pudding gerinnt, wenn sich Eiproteine aufgrund übermäßiger Hitze zu schnell koagulieren. Die Proteine klumpen zusammen, anstatt eine glatte, cremige Textur zu erzeugen.",
          nl: "Custard scheidt wanneer eiproteïnen te snel coaguleren door teveel hitte. De eiwitten klonteren samen in plaats van een gladde, romige textuur te creëren."
        }
      },
      {
        question: {
          en: "Which dessert is essentially a baked custard with caramelized sugar on top?",
          es: "¿Qué postre es esencialmente unas natillas horneadas con azúcar caramelizado encima?",
          de: "Welches Dessert ist im Wesentlichen ein gebackener Pudding mit karamelisiertem Zucker oben?",
          nl: "Welk dessert is in essentie een gebakken custard met gekarameliseerde suiker erop?"
        },
        options: [
          { en: "Flan", es: "Flan", de: "Flan", nl: "Flan" },
          { en: "Crème brûlée", es: "Crème brûlée", de: "Crème brûlée", nl: "Crème brûlée" },
          { en: "Tiramisu", es: "Tiramisú", de: "Tiramisu", nl: "Tiramisu" },
          { en: "Panna cotta", es: "Panna cotta", de: "Panna cotta", nl: "Panna cotta" }
        ],
        correct: 1,
        explanation: {
          en: "Crème brûlée is a rich baked custard topped with a layer of sugar that's caramelized with a torch or broiler to create a crispy top.",
          es: "La crème brûlée es una rica natilla horneada cubierta con una capa de azúcar que se carameliza con un soplete o parrilla para crear una parte superior crujiente.",
          de: "Crème brûlée ist ein reichhaltiger gebackener Pudding mit einer Zuckerschicht, die mit einem Brenner oder Grill karamelisiert wird, um eine knusprige Oberfläche zu schaffen.",
          nl: "Crème brûlée is een rijke gebakken custard bedekt met een laag suiker die gekarameliseerd wordt met een brander of grill om een knapperige bovenkant te creëren."
        }
      },
      {
        question: {
          en: "What is the difference between custard and pudding?",
          es: "¿Cuál es la diferencia entre natillas y pudín?",
          de: "Was ist der Unterschied zwischen Pudding und Dessertpudding?",
          nl: "Wat is het verschil tussen custard en pudding?"
        },
        options: [
          { en: "Custard always contains eggs", es: "Las natillas siempre contienen huevos", de: "Pudding enthält immer Eier", nl: "Custard bevat altijd eieren" },
          { en: "Pudding is always chocolate", es: "El pudín siempre es de chocolate", de: "Dessertpudding ist immer Schokolade", nl: "Pudding is altijd chocolade" },
          { en: "Custard is always cold", es: "Las natillas siempre están frías", de: "Pudding ist immer kalt", nl: "Custard is altijd koud" },
          { en: "There is no difference", es: "No hay diferencia", de: "Es gibt keinen Unterschied", nl: "Er is geen verschil" }
        ],
        correct: 0,
        explanation: {
          en: "True custard is always thickened with eggs, while puddings can be thickened with various starches like cornstarch, flour, or gelatin without eggs.",
          es: "Las verdaderas natillas siempre se espesan con huevos, mientras que los pudines pueden espesarse con varios almidones como maicena, harina o gelatina sin huevos.",
          de: "Echter Pudding wird immer mit Eiern eingedickt, während Dessertpuddings mit verschiedenen Stärken wie Maisstärke, Mehl oder Gelatine ohne Eier eingedickt werden können.",
          nl: "Echte custard wordt altijd verdikt met eieren, terwijl puddings verdikt kunnen worden met verschillende zetmeelsoorten zoals maïzena, meel of gelatine zonder eieren."
        }
      },
      {
        question: {
          en: "What technique helps prevent a skin from forming on top of custard?",
          es: "¿Qué técnica ayuda a prevenir que se forme una piel encima de las natillas?",
          de: "Welche Technik hilft zu verhindern, dass sich eine Haut auf dem Pudding bildet?",
          nl: "Welke techniek helpt voorkomen dat er een velletje op de custard vormt?"
        },
        options: [
          { en: "Covering with plastic wrap touching the surface", es: "Cubrir con film plástico tocando la superficie", de: "Mit Plastikfolie bedecken, die die Oberfläche berührt", nl: "Bedekken met plastic folie die het oppervlak raakt" },
          { en: "Adding more sugar", es: "Añadir más azúcar", de: "Mehr Zucker hinzufügen", nl: "Meer suiker toevoegen" },
          { en: "Cooking at higher temperature", es: "Cocinar a mayor temperatura", de: "Bei höherer Temperatur kochen", nl: "Koken op hogere temperatuur" },
          { en: "Stirring continuously after cooling", es: "Revolver continuamente después de enfriar", de: "Nach dem Abkühlen kontinuierlich rühren", nl: "Continu roeren na het afkoelen" }
        ],
        correct: 0,
        explanation: {
          en: "Placing plastic wrap directly on the surface of hot custard prevents air contact, which causes skin formation. The wrap should touch the custard surface.",
          es: "Colocar film plástico directamente en la superficie de las natillas calientes previene el contacto con el aire, que causa la formación de piel. El film debe tocar la superficie de las natillas.",
          de: "Plastikfolie direkt auf die Oberfläche des heißen Puddings zu legen verhindert Luftkontakt, der zur Hautbildung führt. Die Folie sollte die Puddingoberfläche berühren.",
          nl: "Plastic folie direct op het oppervlak van hete custard leggen voorkomt luchtcontact, wat velletjesvorming veroorzaakt. De folie moet het custardoppervlak raken."
        }
      },
      {
        question: {
          en: "At what temperature should baked custards be cooked?",
          es: "¿A qué temperatura deben cocinarse las natillas horneadas?",
          de: "Bei welcher Temperatur sollten gebackene Puddings gekocht werden?",
          nl: "Op welke temperatuur moeten gebakken custards gekookt worden?"
        },
        options: [
          { en: "High heat (400°F/200°C)", es: "Calor alto (400°F/200°C)", de: "Hohe Hitze (400°F/200°C)", nl: "Hoge hitte (200°C)" },
          { en: "Moderate heat (325°F/165°C)", es: "Calor moderado (325°F/165°C)", de: "Mäßige Hitze (325°F/165°C)", nl: "Matige hitte (165°C)" },
          { en: "Very low heat (200°F/95°C)", es: "Calor muy bajo (200°F/95°C)", de: "Sehr niedrige Hitze (200°F/95°C)", nl: "Zeer lage hitte (95°C)" },
          { en: "It doesn't matter", es: "No importa", de: "Es ist egal", nl: "Het maakt niet uit" }
        ],
        correct: 1,
        explanation: {
          en: "Baked custards should be cooked at moderate temperatures (325°F/165°C) to ensure gentle, even cooking that prevents curdling and creates a smooth texture.",
          es: "Las natillas horneadas deben cocinarse a temperaturas moderadas (325°F/165°C) para asegurar una cocción suave y uniforme que previene el cuajado y crea una textura suave.",
          de: "Gebackene Puddings sollten bei mäßigen Temperaturen (325°F/165°C) gekocht werden, um sanftes, gleichmäßiges Garen zu gewährleisten, das Gerinnen verhindert und eine glatte Textur schafft.",
          nl: "Gebakken custards moeten gekookt worden op matige temperaturen (165°C) om zacht, gelijkmatig koken te garanderen dat scheiden voorkomt en een gladde textuur creëert."
        }
      },
      {
        question: {
          en: "What is zabaglione (or sabayon)?",
          es: "¿Qué es zabaglione (o sabayon)?",
          de: "Was ist Zabaglione (oder Sabayon)?",
          nl: "Wat is zabaglione (of sabayon)?"
        },
        options: [
          { en: "A frozen custard", es: "Una natilla congelada", de: "Ein gefrorener Pudding", nl: "Een bevroren custard" },
          { en: "A warm, foamy custard made with wine", es: "Una natilla tibia y espumosa hecha con vino", de: "Ein warmer, schaumiger Pudding mit Wein", nl: "Een warme, schuimige custard gemaakt met wijn" },
          { en: "A baked custard tart", es: "Una tarta de natillas horneada", de: "Eine gebackene Puddintorte", nl: "Een gebakken custard taart" },
          { en: "A chocolate custard", es: "Una natilla de chocolate", de: "Ein Schokoladenpudding", nl: "Een chocolade custard" }
        ],
        correct: 1,
        explanation: {
          en: "Zabaglione is an Italian warm, foamy custard made by whisking egg yolks, sugar, and wine (usually Marsala) over gentle heat until thick and creamy.",
          es: "Zabaglione es una natilla italiana tibia y espumosa hecha batiendo yemas de huevo, azúcar y vino (usualmente Marsala) sobre calor suave hasta que esté espesa y cremosa.",
          de: "Zabaglione ist ein italienischer warmer, schaumiger Pudding, der durch Schlagen von Eigelb, Zucker und Wein (meist Marsala) über sanfter Hitze bis zur dicken, cremigen Konsistenz hergestellt wird.",
          nl: "Zabaglione is een Italiaanse warme, schuimige custard gemaakt door eidooiers, suiker en wijn (meestal Marsala) te kloppen op zachte hitte tot het dik en romig is."
        }
      },
      {
        question: {
          en: "Why is a water bath (bain-marie) often used when baking custards?",
          es: "¿Por qué se usa a menudo un baño maría al hornear natillas?",
          de: "Warum wird beim Backen von Puddings oft ein Wasserbad (Bain-Marie) verwendet?",
          nl: "Waarom wordt vaak een waterbad (au bain-marie) gebruikt bij het bakken van custards?"
        },
        options: [
          { en: "To add moisture to the custard", es: "Para añadir humedad a las natillas", de: "Um dem Pudding Feuchtigkeit hinzuzufügen", nl: "Om vocht toe te voegen aan de custard" },
          { en: "To provide gentle, even heat", es: "Para proporcionar calor suave y uniforme", de: "Um sanfte, gleichmäßige Hitze zu bieten", nl: "Om zachte, gelijkmatige hitte te bieden" },
          { en: "To speed up cooking", es: "Para acelerar la cocción", de: "Um das Kochen zu beschleunigen", nl: "Om het koken te versnellen" },
          { en: "To prevent overcooking the bottom", es: "Para prevenir que se cocine demasiado el fondo", de: "Um das Überkochen des Bodens zu verhindern", nl: "Om overkoking van de bodem te voorkomen" }
        ],
        correct: 1,
        explanation: {
          en: "A water bath provides gentle, even heat distribution that prevents the custard from overheating and curdling, ensuring smooth texture throughout.",
          es: "Un baño maría proporciona una distribución de calor suave y uniforme que previene que las natillas se sobrecalienten y se cuajen, asegurando una textura suave en todo.",
          de: "Ein Wasserbad bietet sanfte, gleichmäßige Wärmeverteilung, die verhindert, dass der Pudding überhitzt und gerinnt, und sorgt für eine gleichmäßig glatte Textur.",
          nl: "Een waterbad biedt zachte, gelijkmatige warmteverdeling die voorkomt dat de custard oververhit raakt en scheidt, waardoor een gladde textuur wordt gegarandeerd."
        }
      },
      {
        question: {
          en: "What happens to custard when it's stored in the refrigerator?",
          es: "¿Qué pasa con las natillas cuando se almacenan en el refrigerador?",
          de: "Was passiert mit Pudding, wenn er im Kühlschrank gelagert wird?",
          nl: "Wat gebeurt er met custard wanneer het in de koelkast bewaard wordt?"
        },
        options: [
          { en: "It becomes thinner", es: "Se vuelve más fino", de: "Es wird dünner", nl: "Het wordt dunner" },
          { en: "It becomes thicker and sets", es: "Se vuelve más espeso y se cuaja", de: "Es wird dicker und fest", nl: "Het wordt dikker en zet" },
          { en: "It separates completely", es: "Se separa completamente", de: "Es trennt sich völlig", nl: "Het scheidt volledig" },
          { en: "It changes flavor", es: "Cambia de sabor", de: "Es ändert den Geschmack", nl: "Het verandert van smaak" }
        ],
        correct: 1,
        explanation: {
          en: "Custard becomes thicker and sets when refrigerated as the proteins continue to bind and the mixture cools, creating a firmer texture while maintaining creaminess.",
          es: "Las natillas se vuelven más espesas y se cuajan cuando se refrigeran ya que las proteínas continúan uniéndose y la mezcla se enfría, creando una textura más firme mientras mantiene la cremosidad.",
          de: "Pudding wird dicker und fest, wenn er gekühlt wird, da die Proteine sich weiter verbinden und die Mischung abkühlt, wodurch eine festere Textur entsteht, während die Cremigkeit erhalten bleibt.",
          nl: "Custard wordt dikker en zet wanneer het gekoeld wordt omdat de eiwitten blijven binden en het mengsel afkoelt, waardoor een stevigere textuur ontstaat terwijl de romigheid behouden blijft."
        }
      },
      {
        question: {
          en: "What type of milk is traditionally used for custard?",
          es: "¿Qué tipo de leche se usa tradicionalmente para natillas?",
          de: "Welche Art von Milch wird traditionell für Pudding verwendet?",
          nl: "Welk type melk wordt traditioneel gebruikt voor custard?"
        },
        options: [
          { en: "Whole milk", es: "Leche entera", de: "Vollmilch", nl: "Volle melk" },
          { en: "Skim milk", es: "Leche descremada", de: "Magermilch", nl: "Magere melk" },
          { en: "Soy milk", es: "Leche de soja", de: "Sojamilch", nl: "Sojamelk" },
          { en: "Coconut milk only", es: "Solo leche de coco", de: "Nur Kokosmilch", nl: "Alleen kokosmelk" }
        ],
        correct: 0,
        explanation: {
          en: "Whole milk is traditionally used for custard because its fat content creates a rich, creamy texture and carries flavor well.",
          es: "La leche entera se usa tradicionalmente para natillas porque su contenido de grasa crea una textura rica y cremosa y lleva bien el sabor.",
          de: "Vollmilch wird traditionell für Pudding verwendet, weil ihr Fettgehalt eine reichhaltige, cremige Textur erzeugt und Geschmack gut trägt.",
          nl: "Volle melk wordt traditioneel gebruikt voor custard omdat het vetgehalte een rijke, romige textuur creëert en smaak goed draagt."
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
