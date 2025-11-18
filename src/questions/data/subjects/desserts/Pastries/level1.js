// Quiz Level 1: Dessert - Gebak
(function() {
  const level1 = {
    name: {
      en: "Pastries - Level 1",
      es: "Pastelería - Nivel 1",
      de: "Gebäck - Level 1",
      nl: "Gebak - Level 1"
    },
    questions: [
      {
        question: {
          en: "What is the main fat used in traditional puff pastry?",
          es: "¿Cuál es la grasa principal utilizada en la masa de hojaldre tradicional?",
          de: "Welches ist das Hauptfett in traditionellem Blätterteig?",
          nl: "Wat is het hoofdvet dat gebruikt wordt in traditioneel bladerdeeg?"
        },
        options: [
          { en: "Butter", es: "Mantequilla", de: "Butter", nl: "Boter" },
          { en: "Oil", es: "Aceite", de: "Öl", nl: "Olie" },
          { en: "Lard", es: "Manteca de cerdo", de: "Schmalz", nl: "Reuzel" },
          { en: "Margarine", es: "Margarina", de: "Margarine", nl: "Margarine" }
        ],
        correct: 0,
        explanation: {
          en: "Butter is the traditional fat used in puff pastry, creating the characteristic flaky layers through lamination.",
          es: "La mantequilla es la grasa tradicional utilizada en el hojaldre, creando las capas hojaldradas características a través de la laminación.",
          de: "Butter ist das traditionelle Fett im Blätterteig und erzeugt durch Laminierung die charakteristischen blättrigen Schichten.",
          nl: "Boter is het traditionele vet dat gebruikt wordt in bladerdeeg, waardoor de karakteristieke bladderige lagen ontstaan door lamineren."
        }
      },
      {
        question: {
          en: "What does 'choux' mean in choux pastry?",
          es: "¿Qué significa 'choux' en la masa choux?",
          de: "Was bedeutet 'choux' in Brandteig?",
          nl: "Wat betekent 'choux' in choux deeg?"
        },
        options: [
          { en: "Cream", es: "Crema", de: "Sahne", nl: "Room" },
          { en: "Cabbage", es: "Repollo", de: "Kohl", nl: "Kool" },
          { en: "Sweet", es: "Dulce", de: "Süß", nl: "Zoet" },
          { en: "Light", es: "Ligero", de: "Leicht", nl: "Licht" }
        ],
        correct: 1,
        explanation: {
          en: "Choux means 'cabbage' in French, referring to the small cabbage-like shape of cream puffs made from this pastry.",
          es: "Choux significa 'repollo' en francés, refiriéndose a la forma parecida a pequeños repollos de los profiteroles hechos con esta masa.",
          de: "Choux bedeutet 'Kohl' auf Französisch und bezieht sich auf die kleine kohlförmige Form der Windbeutel aus diesem Teig.",
          nl: "Choux betekent 'kool' in het Frans, verwijzend naar de kleine koolachtige vorm van soesjes gemaakt van dit deeg."
        }
      },
      {
        question: {
          en: "Which pastry is known for its honeycomb-like layers?",
          es: "¿Qué pastelería es conocida por sus capas similares a un panal?",
          de: "Welches Gebäck ist für seine wabenartigen Schichten bekannt?",
          nl: "Welk gebak staat bekend om zijn honingraatachtige lagen?"
        },
        options: [
          { en: "Shortcrust pastry", es: "Masa quebrada", de: "Mürbeteig", nl: "Kruimeldeeg" },
          { en: "Phyllo pastry", es: "Masa filo", de: "Filoteig", nl: "Filodeeg" },
          { en: "Choux pastry", es: "Masa choux", de: "Brandteig", nl: "Choux deeg" },
          { en: "Hot water crust", es: "Masa de agua caliente", de: "Heißwasserteig", nl: "Heet water deeg" }
        ],
        correct: 1,
        explanation: {
          en: "Phyllo pastry consists of paper-thin sheets that create honeycomb-like layers when baked, commonly used in Greek and Middle Eastern desserts.",
          es: "La masa filo consiste en láminas finas como papel que crean capas similares a panales al hornear, comúnmente utilizada en postres griegos y de Oriente Medio.",
          de: "Filoteig besteht aus papierdünnen Blättern, die beim Backen wabenartige Schichten bilden, häufig in griechischen und nahöstlichen Desserts verwendet.",
          nl: "Filodeeg bestaat uit papierdunne vellen die honingraatachtige lagen vormen bij het bakken, veel gebruikt in Griekse en Midden-Oosterse desserts."
        }
      },
      {
        question: {
          en: "What is the technique called when butter is folded into pastry dough repeatedly?",
          es: "¿Cómo se llama la técnica cuando se pliega mantequilla en la masa repetidamente?",
          de: "Wie heißt die Technik, bei der Butter wiederholt in den Teig eingefaltet wird?",
          nl: "Hoe heet de techniek waarbij boter herhaaldelijk in het deeg gevouwen wordt?"
        },
        options: [
          { en: "Creaming", es: "Batir", de: "Aufschlagen", nl: "Opromen" },
          { en: "Lamination", es: "Laminación", de: "Laminierung", nl: "Lamineren" },
          { en: "Kneading", es: "Amasar", de: "Kneten", nl: "Kneden" },
          { en: "Folding", es: "Plegar", de: "Falten", nl: "Vouwen" }
        ],
        correct: 1,
        explanation: {
          en: "Lamination is the process of repeatedly folding butter into dough to create multiple layers, essential for croissants and puff pastry.",
          es: "La laminación es el proceso de plegar repetidamente mantequilla en la masa para crear múltiples capas, esencial para croissants y hojaldre.",
          de: "Laminierung ist der Prozess des wiederholten Einfaltens von Butter in den Teig, um mehrere Schichten zu erzeugen, wesentlich für Croissants und Blätterteig.",
          nl: "Lamineren is het proces van herhaaldelijk vouwen van boter in deeg om meerdere lagen te creëren, essentieel voor croissants en bladerdeeg."
        }
      },
      {
        question: {
          en: "What type of pastry is used to make éclairs?",
          es: "¿Qué tipo de masa se usa para hacer éclairs?",
          de: "Welche Art von Teig wird für Éclairs verwendet?",
          nl: "Welk type deeg wordt gebruikt om éclairs te maken?"
        },
        options: [
          { en: "Puff pastry", es: "Hojaldre", de: "Blätterteig", nl: "Bladerdeeg" },
          { en: "Shortcrust pastry", es: "Masa quebrada", de: "Mürbeteig", nl: "Kruimeldeeg" },
          { en: "Choux pastry", es: "Masa choux", de: "Brandteig", nl: "Choux deeg" },
          { en: "Filo pastry", es: "Masa filo", de: "Filoteig", nl: "Filodeeg" }
        ],
        correct: 2,
        explanation: {
          en: "Éclairs are made from choux pastry, which puffs up when baked due to steam, creating a hollow interior perfect for filling.",
          es: "Los éclairs se hacen con masa choux, que se infla al hornear debido al vapor, creando un interior hueco perfecto para rellenar.",
          de: "Éclairs werden aus Brandteig hergestellt, der beim Backen durch Dampf aufgeht und einen hohlen Innenraum zum Füllen schafft.",
          nl: "Éclairs worden gemaakt van choux deeg, dat opzwelt tijdens het bakken door stoom, waardoor een holle binnenkant ontstaat die perfect is om te vullen."
        }
      },
      {
        question: {
          en: "What is the main characteristic of shortcrust pastry?",
          es: "¿Cuál es la característica principal de la masa quebrada?",
          de: "Was ist das Hauptmerkmal von Mürbeteig?",
          nl: "Wat is de hoofdeigenschap van kruimeldeeg?"
        },
        options: [
          { en: "Flaky layers", es: "Capas hojaldradas", de: "Blättrige Schichten", nl: "Bladderige lagen" },
          { en: "Crisp and crumbly texture", es: "Textura crujiente y quebradiza", de: "Knusprige und krümelige Textur", nl: "Knapperige en kruimelige textuur" },
          { en: "Elastic and stretchy", es: "Elástica y estirable", de: "Elastisch und dehnbar", nl: "Elastisch en rekbaar" },
          { en: "Light and airy", es: "Ligera y aireada", de: "Leicht und luftig", nl: "Licht en luchtig" }
        ],
        correct: 1,
        explanation: {
          en: "Shortcrust pastry is characterized by its crisp, crumbly texture achieved by rubbing fat into flour, commonly used for tart bases.",
          es: "La masa quebrada se caracteriza por su textura crujiente y quebradiza lograda al frotar grasa en la harina, comúnmente usada para bases de tartas.",
          de: "Mürbeteig zeichnet sich durch seine knusprige, krümelige Textur aus, die durch das Einreiben von Fett in Mehl erreicht wird, häufig für Tortenboden verwendet.",
          nl: "Kruimeldeeg kenmerkt zich door zijn knapperige, kruimelige textuur die wordt bereikt door vet in meel te wrijven, vaak gebruikt voor taartbodems."
        }
      },
      {
        question: {
          en: "Which ingredient makes choux pastry rise?",
          es: "¿Qué ingrediente hace que la masa choux suba?",
          de: "Welche Zutat lässt Brandteig aufgehen?",
          nl: "Welk ingrediënt zorgt ervoor dat choux deeg rijst?"
        },
        options: [
          { en: "Baking powder", es: "Polvo para hornear", de: "Backpulver", nl: "Bakpoeder" },
          { en: "Yeast", es: "Levadura", de: "Hefe", nl: "Gist" },
          { en: "Steam from water", es: "Vapor del agua", de: "Wasserdampf", nl: "Stoom van water" },
          { en: "Baking soda", es: "Bicarbonato de sodio", de: "Natron", nl: "Zuiveringszout" }
        ],
        correct: 2,
        explanation: {
          en: "Choux pastry rises due to steam from the water content, which expands when heated, creating the characteristic hollow puffs.",
          es: "La masa choux sube debido al vapor del contenido de agua, que se expande al calentarse, creando los característicos soplos huecos.",
          de: "Brandteig geht durch Dampf aus dem Wassergehalt auf, der sich beim Erhitzen ausdehnt und die charakteristischen hohlen Beutel bildet.",
          nl: "Choux deeg rijst door stoom van het watergehalte, dat uitzet bij verhitting en de karakteristieke holle soesjes vormt."
        }
      },
      {
        question: {
          en: "What is a palmier also known as?",
          es: "¿Cómo se conoce también un palmier?",
          de: "Wie ist ein Palmier auch bekannt?",
          nl: "Hoe staat een palmier ook wel bekend?"
        },
        options: [
          { en: "Elephant ear", es: "Oreja de elefante", de: "Elefantenohr", nl: "Olifantsoor" },
          { en: "Butterfly cookie", es: "Galleta de mariposa", de: "Schmetterlingskeks", nl: "Vlinderkoekje" },
          { en: "Palm leaf", es: "Hoja de palma", de: "Palmblatt", nl: "Palmblad" },
          { en: "All of the above", es: "Todas las anteriores", de: "Alle oben genannten", nl: "Alle bovenstaande" }
        ],
        correct: 3,
        explanation: {
          en: "Palmiers are known by all these names due to their distinctive palm leaf or butterfly-like shape, and some regions call them elephant ears.",
          es: "Los palmiers se conocen por todos estos nombres debido a su forma distintiva de hoja de palma o mariposa, y algunas regiones los llaman orejas de elefante.",
          de: "Palmiers sind unter all diesen Namen bekannt aufgrund ihrer charakteristischen Palmblatt- oder schmetterlingsähnlichen Form, und manche Regionen nennen sie Elefantenohren.",
          nl: "Palmiers staan bekend onder al deze namen vanwege hun kenmerkende palmblad- of vlindervorm, en sommige regio's noemen ze olifantsoren."
        }
      },
      {
        question: {
          en: "What pastry technique involves 'blind baking'?",
          es: "¿Qué técnica de pastelería implica 'hornear a ciegas'?",
          de: "Welche Gebäcktechnik beinhaltet 'Blindbacken'?",
          nl: "Welke gebaktechniek behelst 'blind bakken'?"
        },
        options: [
          { en: "Baking without filling", es: "Hornear sin relleno", de: "Backen ohne Füllung", nl: "Bakken zonder vulling" },
          { en: "Baking in darkness", es: "Hornear en la oscuridad", de: "Backen im Dunkeln", nl: "Bakken in het donker" },
          { en: "Baking without looking", es: "Hornear sin mirar", de: "Backen ohne hinzusehen", nl: "Bakken zonder kijken" },
          { en: "Baking covered with foil", es: "Hornear cubierto con papel aluminio", de: "Backen mit Folie bedeckt", nl: "Bakken bedekt met folie" }
        ],
        correct: 0,
        explanation: {
          en: "Blind baking means pre-baking a pastry shell without its filling, often using weights to prevent puffing, commonly done for custard tarts.",
          es: "Hornear a ciegas significa pre-hornear una base de masa sin su relleno, a menudo usando pesos para prevenir que se infle, comúnmente hecho para tartas de natillas.",
          de: "Blindbacken bedeutet eine Teigschale ohne Füllung vorzubacken, oft mit Gewichten um Aufblähen zu verhindern, häufig bei Puddingtorten gemacht.",
          nl: "Blind bakken betekent een deegschaal vooraf bakken zonder vulling, vaak met gewichten om opzwellen te voorkomen, veel gedaan bij vla taarten."
        }
      },
      {
        question: {
          en: "What is the French term for a small, filled pastry case?",
          es: "¿Cuál es el término francés para un pequeño estuche de masa relleno?",
          de: "Was ist der französische Begriff für eine kleine, gefüllte Teigschale?",
          nl: "Wat is de Franse term voor een klein, gevuld deegschaaltje?"
        },
        options: [
          { en: "Petit four", es: "Petit four", de: "Petit Four", nl: "Petit four" },
          { en: "Tartlet", es: "Tartaleta", de: "Törtchen", nl: "Taartje" },
          { en: "Profiterole", es: "Profiterol", de: "Profiterole", nl: "Profiterole" },
          { en: "Canapé", es: "Canapé", de: "Canapé", nl: "Canapé" }
        ],
        correct: 1,
        explanation: {
          en: "A tartlet is a small tart or pastry case, typically made with shortcrust pastry and filled with sweet or savory ingredients.",
          es: "Una tartaleta es una pequeña tarta o base de masa, típicamente hecha con masa quebrada y rellena con ingredientes dulces o salados.",
          de: "Ein Törtchen ist eine kleine Torte oder Teigschale, typischerweise aus Mürbeteig gemacht und mit süßen oder herzhaften Zutaten gefüllt.",
          nl: "Een taartje is een kleine taart of deegschaal, typisch gemaakt van kruimeldeeg en gevuld met zoete of hartige ingrediënten."
        }
      },
      {
        question: {
          en: "Which pastry is traditionally used for making croissants?",
          es: "¿Qué masa se usa tradicionalmente para hacer croissants?",
          de: "Welcher Teig wird traditionell für Croissants verwendet?",
          nl: "Welk deeg wordt traditioneel gebruikt voor het maken van croissants?"
        },
        options: [
          { en: "Choux pastry", es: "Masa choux", de: "Brandteig", nl: "Choux deeg" },
          { en: "Laminated yeast dough", es: "Masa de levadura laminada", de: "Laminierter Hefeteig", nl: "Gelamineerd gistdeeg" },
          { en: "Shortcrust pastry", es: "Masa quebrada", de: "Mürbeteig", nl: "Kruimeldeeg" },
          { en: "Puff pastry", es: "Hojaldre", de: "Blätterteig", nl: "Bladerdeeg" }
        ],
        correct: 1,
        explanation: {
          en: "Croissants are made from laminated yeast dough, which combines the flakiness of puff pastry with the texture and flavor of bread.",
          es: "Los croissants se hacen con masa de levadura laminada, que combina la hojaldración del hojaldre con la textura y sabor del pan.",
          de: "Croissants werden aus laminiertem Hefeteig hergestellt, der die Blättrigkeit von Blätterteig mit der Textur und dem Geschmack von Brot kombiniert.",
          nl: "Croissants worden gemaakt van gelamineerd gistdeeg, dat de bladderigheid van bladerdeeg combineert met de textuur en smaak van brood."
        }
      },
      {
        question: {
          en: "What causes the layers in puff pastry to separate?",
          es: "¿Qué causa que las capas del hojaldre se separen?",
          de: "Was bewirkt, dass sich die Schichten im Blätterteig trennen?",
          nl: "Wat zorgt ervoor dat de lagen in bladerdeeg zich scheiden?"
        },
        options: [
          { en: "Steam from butter melting", es: "Vapor de la mantequilla derritiéndose", de: "Dampf von schmelzender Butter", nl: "Stoom van smeltende boter" },
          { en: "Chemical leavening", es: "Leudante químico", de: "Chemische Triebmittel", nl: "Chemische rijsmiddelen" },
          { en: "Yeast fermentation", es: "Fermentación de levadura", de: "Hefegärung", nl: "Gistfermentatie" },
          { en: "Air pockets", es: "Bolsas de aire", de: "Lufttaschen", nl: "Luchtzakjes" }
        ],
        correct: 0,
        explanation: {
          en: "The water in butter turns to steam when heated, creating pressure that separates the dough layers and creates the characteristic flaky texture.",
          es: "El agua en la mantequilla se convierte en vapor al calentarse, creando presión que separa las capas de masa y crea la textura hojaldrada característica.",
          de: "Das Wasser in der Butter wird beim Erhitzen zu Dampf, erzeugt Druck, der die Teigschichten trennt und die charakteristische blättrige Textur schafft.",
          nl: "Het water in boter wordt stoom bij verhitting, wat druk creëert die de deeglagen scheidt en de karakteristieke bladderige textuur vormt."
        }
      },
      {
        question: {
          en: "What is the ideal temperature for butter when making laminated pastry?",
          es: "¿Cuál es la temperatura ideal para la mantequilla al hacer masa laminada?",
          de: "Was ist die ideale Temperatur für Butter beim Herstellen von laminiertem Teig?",
          nl: "Wat is de ideale temperatuur voor boter bij het maken van gelamineerd deeg?"
        },
        options: [
          { en: "Ice cold", es: "Helada", de: "Eiskalt", nl: "IJskoud" },
          { en: "Room temperature", es: "Temperatura ambiente", de: "Zimmertemperatur", nl: "Kamertemperatuur" },
          { en: "Pliable but cool", es: "Maleable pero fría", de: "Biegsam aber kühl", nl: "Kneedbaar maar koel" },
          { en: "Melted", es: "Derretida", de: "Geschmolzen", nl: "Gesmolten" }
        ],
        correct: 2,
        explanation: {
          en: "Butter should be pliable but cool for lamination - soft enough to roll without breaking but not so warm that it melts into the dough.",
          es: "La mantequilla debe estar maleable pero fría para la laminación - lo suficientemente suave para enrollar sin romperse pero no tan caliente que se derrita en la masa.",
          de: "Butter sollte für die Laminierung biegsam aber kühl sein - weich genug zum Ausrollen ohne zu brechen, aber nicht so warm, dass sie in den Teig schmilzt.",
          nl: "Boter moet kneedbaar maar koel zijn voor laminering - zacht genoeg om uit te rollen zonder te breken maar niet zo warm dat het in het deeg smelt."
        }
      },
      {
        question: {
          en: "What is a Vol-au-vent?",
          es: "¿Qué es un Vol-au-vent?",
          de: "Was ist ein Vol-au-vent?",
          nl: "Wat is een Vol-au-vent?"
        },
        options: [
          { en: "A type of cream", es: "Un tipo de crema", de: "Eine Art Sahne", nl: "Een soort room" },
          { en: "A puff pastry shell", es: "Una cáscara de hojaldre", de: "Eine Blätterteigschale", nl: "Een bladerdeeg schaal" },
          { en: "A French sauce", es: "Una salsa francesa", de: "Eine französische Sauce", nl: "Een Franse saus" },
          { en: "A baking technique", es: "Una técnica de horneado", de: "Eine Backtechnik", nl: "Een baktechniek" }
        ],
        correct: 1,
        explanation: {
          en: "Vol-au-vent means 'windblown' in French and refers to a hollow puff pastry shell used to hold savory or sweet fillings.",
          es: "Vol-au-vent significa 'llevado por el viento' en francés y se refiere a una cáscara hueca de hojaldre usada para contener rellenos salados o dulces.",
          de: "Vol-au-vent bedeutet 'vom Wind getragen' auf Französisch und bezeichnet eine hohle Blätterteigschale für herzhafte oder süße Füllungen.",
          nl: "Vol-au-vent betekent 'door de wind gedragen' in het Frans en verwijst naar een holle bladerdeeg schaal gebruikt voor hartige of zoete vullingen."
        }
      },
      {
        question: {
          en: "Which pastry technique involves cutting decorative patterns before baking?",
          es: "¿Qué técnica de pastelería implica cortar patrones decorativos antes de hornear?",
          de: "Welche Gebäcktechnik beinhaltet das Schneiden dekorativer Muster vor dem Backen?",
          nl: "Welke gebaktechniek behelst het snijden van decoratieve patronen voor het bakken?"
        },
        options: [
          { en: "Scoring", es: "Marcar", de: "Einritzen", nl: "Insnijden" },
          { en: "Glazing", es: "Glasear", de: "Glasieren", nl: "Glazuren" },
          { en: "Dusting", es: "Espolvorear", de: "Bestäuben", nl: "Bestuiven" },
          { en: "Crimping", es: "Ondular", de: "Kräuseln", nl: "Plooien" }
        ],
        correct: 0,
        explanation: {
          en: "Scoring involves making shallow cuts in pastry to create decorative patterns and help steam escape during baking.",
          es: "Marcar implica hacer cortes superficiales en la masa para crear patrones decorativos y ayudar a que escape el vapor durante el horneado.",
          de: "Einritzen beinhaltet oberflächliche Schnitte in den Teig zu machen, um dekorative Muster zu schaffen und Dampf beim Backen entweichen zu lassen.",
          nl: "Insnijden houdt in dat je ondiepe sneden in deeg maakt om decoratieve patronen te creëren en stoom te laten ontsnappen tijdens het bakken."
        }
      },
      {
        question: {
          en: "What is the key to preventing tough pastry?",
          es: "¿Cuál es la clave para prevenir masa dura?",
          de: "Was ist der Schlüssel zur Vermeidung von zähem Teig?",
          nl: "Wat is de sleutel tot het voorkomen van taai deeg?"
        },
        options: [
          { en: "Using hot water", es: "Usar agua caliente", de: "Heißes Wasser verwenden", nl: "Heet water gebruiken" },
          { en: "Minimal handling", es: "Manipulación mínima", de: "Minimale Bearbeitung", nl: "Minimale bewerking" },
          { en: "Adding more flour", es: "Añadir más harina", de: "Mehr Mehl hinzufügen", nl: "Meer meel toevoegen" },
          { en: "Long mixing time", es: "Tiempo de mezcla largo", de: "Lange Mischzeit", nl: "Lange mengtijd" }
        ],
        correct: 1,
        explanation: {
          en: "Minimal handling prevents gluten development, which would make pastry tough and chewy instead of tender and flaky.",
          es: "La manipulación mínima previene el desarrollo del gluten, que haría la masa dura y masticable en lugar de tierna y hojaldrada.",
          de: "Minimale Bearbeitung verhindert Glutenentwicklung, die den Teig zäh und kauig anstatt zart und blättrig machen würde.",
          nl: "Minimale bewerking voorkomt glutenontwikkeling, wat deeg taai en chewy zou maken in plaats van mals en bladerig."
        }
      },
      {
        question: {
          en: "What makes Danish pastry different from croissant dough?",
          es: "¿Qué hace que la masa danesa sea diferente de la masa de croissant?",
          de: "Was macht dänischen Teig anders als Croissant-Teig?",
          nl: "Wat maakt Deens deeg anders dan croissantdeeg?"
        },
        options: [
          { en: "Addition of eggs and sugar", es: "Adición de huevos y azúcar", de: "Zusatz von Eiern und Zucker", nl: "Toevoeging van eieren en suiker" },
          { en: "Different type of flour", es: "Tipo diferente de harina", de: "Andere Art von Mehl", nl: "Ander type meel" },
          { en: "No butter used", es: "No se usa mantequilla", de: "Keine Butter verwendet", nl: "Geen boter gebruikt" },
          { en: "Different folding technique", es: "Técnica de plegado diferente", de: "Andere Falttechnik", nl: "Andere vouwtechniek" }
        ],
        correct: 0,
        explanation: {
          en: "Danish pastry dough is enriched with eggs and sugar, making it sweeter and more tender than croissant dough, and often contains cardamom.",
          es: "La masa danesa está enriquecida con huevos y azúcar, haciéndola más dulce y tierna que la masa de croissant, y a menudo contiene cardamomo.",
          de: "Dänischer Teig ist mit Eiern und Zucker angereichert, macht ihn süßer und zarter als Croissant-Teig, und enthält oft Kardamom.",
          nl: "Deens deeg is verrijkt met eieren en suiker, wat het zoeter en malser maakt dan croissantdeeg, en bevat vaak kardemom."
        }
      },
      {
        question: {
          en: "What is the purpose of egg wash on pastry?",
          es: "¿Cuál es el propósito del barniz de huevo en la masa?",
          de: "Was ist der Zweck von Eigelb auf Gebäck?",
          nl: "Wat is het doel van eierwas op gebak?"
        },
        options: [
          { en: "To add flavor", es: "Para añadir sabor", de: "Um Geschmack hinzuzufügen", nl: "Om smaak toe te voegen" },
          { en: "To create golden color and shine", es: "Para crear color dorado y brillo", de: "Um goldene Farbe und Glanz zu erzeugen", nl: "Om goudkleur en glans te creëren" },
          { en: "To make it rise", es: "Para hacer que suba", de: "Um es aufgehen zu lassen", nl: "Om het te laten rijzen" },
          { en: "To prevent burning", es: "Para prevenir que se queme", de: "Um Verbrennen zu verhindern", nl: "Om verbranden te voorkomen" }
        ],
        correct: 1,
        explanation: {
          en: "Egg wash gives pastry an attractive golden color and glossy shine when baked, enhancing its visual appeal.",
          es: "El barniz de huevo le da a la masa un atractivo color dorado y brillo lustroso al hornear, mejorando su atractivo visual.",
          de: "Eigelb verleiht Gebäck beim Backen eine attraktive goldene Farbe und glänzenden Schimmer, was die optische Anziehungskraft verstärkt.",
          nl: "Eierwas geeft gebak een aantrekkelijke goudkleur en glanzende schijn bij het bakken, wat de visuele aantrekkingskracht verbetert."
        }
      },
      {
        question: {
          en: "Which pastry is traditionally filled with custard and topped with fondant?",
          es: "¿Qué pastelería se rellena tradicionalmente con natillas y se cubre con fondant?",
          de: "Welches Gebäck wird traditionell mit Pudding gefüllt und mit Fondant überzogen?",
          nl: "Welk gebak wordt traditioneel gevuld met vla en bedekt met fondant?"
        },
        options: [
          { en: "Profiterole", es: "Profiterol", de: "Profiterole", nl: "Profiterole" },
          { en: "Éclair", es: "Éclair", de: "Éclair", nl: "Éclair" },
          { en: "Cream puff", es: "Bollo de crema", de: "Windbeutel", nl: "Soesje" },
          { en: "Napoleon", es: "Napoleón", de: "Napoleon", nl: "Tompouce" }
        ],
        correct: 1,
        explanation: {
          en: "Éclairs are traditionally filled with pastry cream (custard) and topped with chocolate or white fondant icing.",
          es: "Los éclairs se rellenan tradicionalmente con crema pastelera (natillas) y se cubren con glaseado de chocolate o fondant blanco.",
          de: "Éclairs werden traditionell mit Konditorcreme (Pudding) gefüllt und mit Schokoladen- oder weißem Fondant-Guss überzogen.",
          nl: "Éclairs worden traditioneel gevuld met banketbakkersroom (vla) en bedekt met chocolade of witte fondant glazuur."
        }
      },
      {
        question: {
          en: "What is the main difference between hot water crust and regular pastry?",
          es: "¿Cuál es la principal diferencia entre la masa de agua caliente y la masa regular?",
          de: "Was ist der Hauptunterschied zwischen Heißwasserteig und normalem Teig?",
          nl: "Wat is het belangrijkste verschil tussen heet water deeg en gewoon deeg?"
        },
        options: [
          { en: "It uses boiling water", es: "Usa agua hirviendo", de: "Es verwendet kochendes Wasser", nl: "Het gebruikt kokend water" },
          { en: "It contains no fat", es: "No contiene grasa", de: "Es enthält kein Fett", nl: "Het bevat geen vet" },
          { en: "It's served hot", es: "Se sirve caliente", de: "Es wird heiß serviert", nl: "Het wordt warm geserveerd" },
          { en: "It uses special flour", es: "Usa harina especial", de: "Es verwendet spezielles Mehl", nl: "Het gebruikt speciaal meel" }
        ],
        correct: 0,
        explanation: {
          en: "Hot water crust pastry uses boiling water mixed with fat and flour, making it pliable when warm for molding raised pies.",
          es: "La masa de agua caliente usa agua hirviendo mezclada con grasa y harina, haciéndola maleable cuando está caliente para moldear pasteles elevados.",
          de: "Heißwasserteig verwendet kochendes Wasser gemischt mit Fett und Mehl, macht ihn formbar wenn warm zum Formen von erhöhten Pasteten.",
          nl: "Heet water deeg gebruikt kokend water gemengd met vet en meel, waardoor het kneedbaar is wanneer warm voor het vormen van verhoogde pasteitjes."
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
