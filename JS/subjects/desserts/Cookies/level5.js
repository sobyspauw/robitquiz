// Quiz Level 5: Dessert - Koekjes
(function() {
  const level5 = {
    name: {
      en: "Cookies - Level 5",
      es: "Galletas - Nivel 5",
      de: "Kekse - Level 5",
      nl: "Koekjes - Level 5"
    },
    questions: [
      {
        question: {
          en: "What is the purpose of using bread flour in certain cookie recipes?",
          es: "¿Cuál es el propósito de usar harina de pan en ciertas recetas de galletas?",
          de: "Was ist der Zweck der Verwendung von Brotmehl in bestimmten Keksrezepten?",
          nl: "Wat is het doel van het gebruik van broodmeel in bepaalde koekjesrecepten?"
        },
        options: [
          { en: "Creates chewier texture due to higher protein", es: "Crea textura más masticable debido a mayor proteína", de: "Erzeugt kaubarere Textur durch höheren Proteingehalt", nl: "Creëert kauwbaardere textuur door hoger eiwitgehalte" },
          { en: "Makes cookies sweeter", es: "Hace las galletas más dulces", de: "Macht Kekse süßer", nl: "Maakt koekjes zoeter" },
          { en: "Reduces baking time", es: "Reduce el tiempo de horneado", de: "Reduziert Backzeit", nl: "Vermindert baktijd" },
          { en: "Prevents spreading", es: "Previene extensión", de: "Verhindert Verlaufen", nl: "Voorkomt uitlopen" }
        ],
        correct: 0,
        explanation: {
          en: "Bread flour contains more protein (12-14%) than all-purpose flour, which develops more gluten and creates a chewier, more substantial cookie texture.",
          es: "La harina de pan contiene más proteína (12-14%) que la harina común, lo que desarrolla más gluten y crea una textura de galleta más masticable y sustancial.",
          de: "Brotmehl enthält mehr Protein (12-14%) als Allzweckmehl, was mehr Gluten entwickelt und eine kaubarere, substanziellere Kekstextur erzeugt.",
          nl: "Broodmeel bevat meer eiwit (12-14%) dan gewone bloem, wat meer gluten ontwikkelt en een kauwbaardere, substantiëlere koekjestextuur creëert."
        }
      },
      {
        question: {
          en: "What technique is used to create laminated cookie dough?",
          es: "¿Qué técnica se usa para crear masa de galletas laminada?",
          de: "Welche Technik wird verwendet, um laminierten Keksteig zu erstellen?",
          nl: "Welke techniek wordt gebruikt om gelamineerd koekjesdeeg te maken?"
        },
        options: [
          { en: "Mixing all ingredients at once", es: "Mezclar todos los ingredientes a la vez", de: "Alle Zutaten auf einmal mischen", nl: "Alle ingrediënten tegelijk mengen" },
          { en: "Folding butter into dough through multiple turns", es: "Doblar mantequilla en la masa a través de múltiples vueltas", de: "Butter durch mehrmaliges Wenden in Teig einfalten", nl: "Boter in deeg vouwen door meerdere keren draaien" },
          { en: "Whipping ingredients until fluffy", es: "Batir ingredientes hasta esponjosos", de: "Zutaten bis fluffig schlagen", nl: "Ingrediënten kloppen tot luchtig" },
          { en: "Using only cold ingredients", es: "Usar solo ingredientes fríos", de: "Nur kalte Zutaten verwenden", nl: "Alleen koude ingrediënten gebruiken" }
        ],
        correct: 1,
        explanation: {
          en: "Lamination involves repeatedly folding cold butter into dough through a series of turns, creating distinct layers that produce flaky textures in cookies like palmiers.",
          es: "La laminación implica doblar repetidamente mantequilla fría en la masa a través de una serie de vueltas, creando capas distintas que producen texturas hojaldradas en galletas como palmiers.",
          de: "Laminierung beinhaltet das wiederholte Einfalten kalter Butter in Teig durch eine Serie von Wendungen, wodurch distinkte Schichten entstehen, die blättrige Texturen in Keksen wie Palmiers erzeugen.",
          nl: "Laminatie houdt in dat koude boter herhaaldelijk in deeg gevouwen wordt door een reeks wendingen, waardoor verschillende lagen ontstaan die bladderige texturen produceren in koekjes zoals palmiers."
        }
      },
      {
        question: {
          en: "What is the purpose of using invert sugar in cookie making?",
          es: "¿Cuál es el propósito de usar azúcar invertido en la elaboración de galletas?",
          de: "Was ist der Zweck der Verwendung von Invertzucker beim Keksbacken?",
          nl: "Wat is het doel van het gebruik van invertsuiker bij het maken van koekjes?"
        },
        options: [
          { en: "Prevents crystallization and adds moisture", es: "Previene cristalización y añade humedad", de: "Verhindert Kristallisation und fügt Feuchtigkeit hinzu", nl: "Voorkomt kristallisatie en voegt vocht toe" },
          { en: "Makes cookies rise higher", es: "Hace que las galletas suban más", de: "Lässt Kekse höher aufgehen", nl: "Laat koekjes hoger rijzen" },
          { en: "Creates crispier texture", es: "Crea textura más crujiente", de: "Erzeugt knusprigere Textur", nl: "Creëert knapperigere textuur" },
          { en: "Reduces sweetness", es: "Reduce dulzura", de: "Reduziert Süße", nl: "Vermindert zoetheid" }
        ],
        correct: 0,
        explanation: {
          en: "Invert sugar is hygroscopic (attracts moisture) and doesn't crystallize easily, helping to keep cookies moist and preventing sugar from forming crystals in the dough.",
          es: "El azúcar invertido es higroscópico (atrae humedad) y no cristaliza fácilmente, ayudando a mantener las galletas húmedas y previniendo que el azúcar forme cristales en la masa.",
          de: "Invertzucker ist hygroskopisch (zieht Feuchtigkeit an) und kristallisiert nicht leicht, hilft Kekse feucht zu halten und verhindert Zuckerkristallbildung im Teig.",
          nl: "Invertsuiker is hygroscopisch (trekt vocht aan) en kristalliseert niet gemakkelijk, helpt koekjes vochtig te houden en voorkomt dat suiker kristallen vormt in het deeg."
        }
      },
      {
        question: {
          en: "What is the reverse creaming method in cookie making?",
          es: "¿Qué es el método de batido inverso en la elaboración de galletas?",
          de: "Was ist die umgekehrte Aufschlagmethode beim Keksbacken?",
          nl: "Wat is de omgekeerde oproepmethode bij het maken van koekjes?"
        },
        options: [
          { en: "Creaming sugar and eggs first", es: "Batir azúcar y huevos primero", de: "Zucker und Eier zuerst aufschlagen", nl: "Suiker en eieren eerst opkloppen" },
          { en: "Mixing flour and butter first, then adding sugars", es: "Mezclar harina y mantequilla primero, luego agregar azúcares", de: "Mehl und Butter zuerst mischen, dann Zucker hinzufügen", nl: "Bloem en boter eerst mengen, dan suikers toevoegen" },
          { en: "Adding all liquids last", es: "Agregar todos los líquidos al final", de: "Alle Flüssigkeiten zuletzt hinzufügen", nl: "Alle vloeistoffen als laatste toevoegen" },
          { en: "Beating butter until white", es: "Batir mantequilla hasta que esté blanca", de: "Butter bis weiß schlagen", nl: "Boter kloppen tot wit" }
        ],
        correct: 1,
        explanation: {
          en: "Reverse creaming mixes flour with cold butter first to coat flour proteins, then adds sugar and other ingredients, creating a more tender cookie with less gluten development.",
          es: "El batido inverso mezcla harina con mantequilla fría primero para cubrir las proteínas de la harina, luego añade azúcar y otros ingredientes, creando una galleta más tierna con menos desarrollo de gluten.",
          de: "Umgekehrtes Aufschlagen mischt Mehl zuerst mit kalter Butter, um Mehlproteine zu ummanteln, dann fügt Zucker und andere Zutaten hinzu, wodurch zartere Kekse mit weniger Glutenentwicklung entstehen.",
          nl: "Omgekeerd opkloppen mengt bloem eerst met koude boter om bloemeiwitten te bedekken, voegt dan suiker en andere ingrediënten toe, wat zachtere koekjes creëert met minder glutenontwikkeling."
        }
      },
      {
        question: {
          en: "What is the purpose of using brown butter in cookies?",
          es: "¿Cuál es el propósito de usar mantequilla dorada en las galletas?",
          de: "Was ist der Zweck der Verwendung von brauner Butter in Keksen?",
          nl: "Wat is het doel van het gebruik van bruine boter in koekjes?"
        },
        options: [
          { en: "Adds nutty flavor and depth", es: "Añade sabor a nuez y profundidad", de: "Fügt nussigen Geschmack und Tiefe hinzu", nl: "Voegt nootachtige smaak en diepte toe" },
          { en: "Makes cookies rise more", es: "Hace que las galletas suban más", de: "Lässt Kekse mehr aufgehen", nl: "Laat koekjes meer rijzen" },
          { en: "Prevents spreading", es: "Previene extensión", de: "Verhindert Verlaufen", nl: "Voorkomt uitlopen" },
          { en: "Increases sweetness", es: "Aumenta dulzura", de: "Erhöht Süße", nl: "Verhoogt zoetheid" }
        ],
        correct: 0,
        explanation: {
          en: "Brown butter (beurre noisette) is butter heated until milk solids caramelize, creating complex nutty flavors and aromatic compounds that enhance cookie taste significantly.",
          es: "La mantequilla dorada (beurre noisette) es mantequilla calentada hasta que los sólidos de leche se caramelizan, creando sabores complejos a nuez y compuestos aromáticos que mejoran significativamente el sabor de las galletas.",
          de: "Braune Butter (Beurre noisette) ist Butter, die erhitzt wird, bis Milchfeststoffe karamelisieren, wodurch komplexe nussige Aromen und aromatische Verbindungen entstehen, die den Keksgeschmack erheblich verbessern.",
          nl: "Bruine boter (beurre noisette) is boter verhit totdat melkvaste stoffen karameliseren, wat complexe nootachtige smaken en aromatische verbindingen creëert die de koekjessmaak aanzienlijk verbeteren."
        }
      },
      {
        question: {
          en: "What is the optimal hydration percentage for sugar cookie dough?",
          es: "¿Cuál es el porcentaje de hidratación óptimo para la masa de galletas de azúcar?",
          de: "Was ist der optimale Hydratationsprozentsatz für Zuckerkeksteig?",
          nl: "Wat is het optimale hydratiepercentage voor suikerkoekjesdeeg?"
        },
        options: [
          { en: "15-20%", es: "15-20%", de: "15-20%", nl: "15-20%" },
          { en: "25-30%", es: "25-30%", de: "25-30%", nl: "25-30%" },
          { en: "35-40%", es: "35-40%", de: "35-40%", nl: "35-40%" },
          { en: "45-50%", es: "45-50%", de: "45-50%", nl: "45-50%" }
        ],
        correct: 0,
        explanation: {
          en: "Sugar cookie dough typically requires 15-20% hydration (liquid to flour ratio) to maintain proper consistency for rolling and cutting while preventing excessive spreading.",
          es: "La masa de galletas de azúcar típicamente requiere 15-20% de hidratación (proporción de líquido a harina) para mantener consistencia adecuada para estirar y cortar mientras previene extensión excesiva.",
          de: "Zuckerkeksteig benötigt typischerweise 15-20% Hydratation (Flüssigkeits-zu-Mehl-Verhältnis), um richtige Konsistenz zum Ausrollen und Ausstechen zu erhalten und übermäßiges Verlaufen zu verhindern.",
          nl: "Suikerkoekjesdeeg vereist typisch 15-20% hydratatie (vloeistof-tot-bloem verhouding) om juiste consistentie te behouden voor uitrollen en uitsnijden terwijl overtollig uitlopen wordt voorkomen."
        }
      },
      {
        question: {
          en: "What technique creates the honeycomb texture in cookies like amaretti?",
          es: "¿Qué técnica crea la textura de panal en galletas como amaretti?",
          de: "Welche Technik erzeugt die Wabenstruktur in Keksen wie Amaretti?",
          nl: "Welke techniek creëert de honingraattextuur in koekjes zoals amaretti?"
        },
        options: [
          { en: "High oven temperature", es: "Temperatura alta del horno", de: "Hohe Ofentemperatur", nl: "Hoge oventemperatuur" },
          { en: "Whipped egg whites and sugar forming meringue base", es: "Claras batidas y azúcar formando base de merengue", de: "Geschlagenes Eiweiß und Zucker bilden Meringuebasis", nl: "Geklopte eiwitten en suiker vormen meringue basis" },
          { en: "Adding baking soda", es: "Agregar bicarbonato", de: "Natron hinzufügen", nl: "Zuiveringszout toevoegen" },
          { en: "Long mixing time", es: "Tiempo largo de mezclado", de: "Lange Mischzeit", nl: "Lange mengtijd" }
        ],
        correct: 1,
        explanation: {
          en: "Amaretti get their characteristic light, airy texture from a meringue base of whipped egg whites and sugar, which creates tiny air bubbles that form the honeycomb structure.",
          es: "Los amaretti obtienen su textura característica ligera y aireada de una base de merengue de claras batidas y azúcar, que crea pequeñas burbujas de aire que forman la estructura de panal.",
          de: "Amaretti erhalten ihre charakteristische leichte, luftige Textur durch eine Meringuebasis aus geschlagenen Eiweißen und Zucker, die winzige Luftbläschen erzeugt, die die Wabenstruktur bilden.",
          nl: "Amaretti krijgen hun kenmerkende lichte, luchtige textuur van een meringue basis van geklopte eiwitten en suiker, wat kleine luchtbelletjes creëert die de honingraatstructuur vormen."
        }
      },
      {
        question: {
          en: "What is the purpose of using glucose syrup in cookie production?",
          es: "¿Cuál es el propósito de usar jarabe de glucosa en la producción de galletas?",
          de: "Was ist der Zweck der Verwendung von Glukosesirup in der Keksproduktion?",
          nl: "Wat is het doel van het gebruik van glucosestroop in koekjesproductie?"
        },
        options: [
          { en: "Controls crystallization and adds chewiness", es: "Controla cristalización y añade masticabilidad", de: "Kontrolliert Kristallisation und fügt Kaubarkeit hinzu", nl: "Controleert kristallisatie en voegt kauwbaarheid toe" },
          { en: "Replaces all sugar", es: "Reemplaza todo el azúcar", de: "Ersetzt allen Zucker", nl: "Vervangt alle suiker" },
          { en: "Acts as leavening agent", es: "Actúa como agente leudante", de: "Wirkt als Triebmittel", nl: "Werkt als rijsmiddel" },
          { en: "Prevents browning", es: "Previene dorado", de: "Verhindert Bräunung", nl: "Voorkomt bruining" }
        ],
        correct: 0,
        explanation: {
          en: "Glucose syrup prevents sugar crystallization, adds moisture retention, and contributes to chewy texture while helping to bind ingredients together in cookies.",
          es: "El jarabe de glucosa previene la cristalización del azúcar, añade retención de humedad y contribuye a la textura masticable mientras ayuda a unir ingredientes en las galletas.",
          de: "Glukosesirup verhindert Zuckerkristallisation, fügt Feuchtigkeitsretention hinzu und trägt zur kaubaren Textur bei, während er hilft, Zutaten in Keksen zu binden.",
          nl: "Glucosestroop voorkomt suikerkristallisatie, voegt vochtretentie toe en draagt bij aan kauwbare textuur terwijl het helpt ingrediënten samen te binden in koekjes."
        }
      },
      {
        question: {
          en: "What is the Maillard reaction's role in cookie baking?",
          es: "¿Cuál es el papel de la reacción de Maillard en el horneado de galletas?",
          de: "Was ist die Rolle der Maillard-Reaktion beim Keksbacken?",
          nl: "Wat is de rol van de Maillardreactie bij het bakken van koekjes?"
        },
        options: [
          { en: "Only affects color", es: "Solo afecta el color", de: "Beeinflusst nur die Farbe", nl: "Beïnvloedt alleen kleur" },
          { en: "Creates complex flavors and browning through amino acid-sugar reactions", es: "Crea sabores complejos y dorado a través de reacciones aminoácido-azúcar", de: "Erzeugt komplexe Aromen und Bräunung durch Aminosäure-Zucker-Reaktionen", nl: "Creëert complexe smaken en bruining door aminozuur-suiker reacties" },
          { en: "Only provides leavening", es: "Solo proporciona leudado", de: "Bietet nur Triebkraft", nl: "Biedt alleen rijzing" },
          { en: "Controls spreading", es: "Controla extensión", de: "Kontrolliert Verlaufen", nl: "Controleert uitlopen" }
        ],
        correct: 1,
        explanation: {
          en: "The Maillard reaction occurs between amino acids and reducing sugars during baking, creating hundreds of flavor compounds and the golden-brown color in cookies.",
          es: "La reacción de Maillard ocurre entre aminoácidos y azúcares reductores durante el horneado, creando cientos de compuestos de sabor y el color dorado-marrón en las galletas.",
          de: "Die Maillard-Reaktion tritt zwischen Aminosäuren und reduzierenden Zuckern beim Backen auf und erzeugt Hunderte von Aromaverbindungen und die goldbraune Farbe in Keksen.",
          nl: "De Maillardreactie treedt op tussen aminozuren en reducerende suikers tijdens het bakken, wat honderden smaakverbindingen en de goudbruine kleur in koekjes creëert."
        }
      },
      {
        question: {
          en: "What is the purpose of using lecithin in cookie dough?",
          es: "¿Cuál es el propósito de usar lecitina en la masa de galletas?",
          de: "Was ist der Zweck der Verwendung von Lecithin in Keksteig?",
          nl: "Wat is het doel van het gebruik van lecithine in koekjesdeeg?"
        },
        options: [
          { en: "Acts as emulsifier to bind fat and water", es: "Actúa como emulsificante para unir grasa y agua", de: "Wirkt als Emulgator zum Binden von Fett und Wasser", nl: "Werkt als emulgator om vet en water te binden" },
          { en: "Adds sweetness", es: "Añade dulzura", de: "Fügt Süße hinzu", nl: "Voegt zoetheid toe" },
          { en: "Prevents browning", es: "Previene dorado", de: "Verhindert Bräunung", nl: "Voorkomt bruining" },
          { en: "Increases rise", es: "Aumenta el levado", de: "Erhöht das Aufgehen", nl: "Verhoogt rijzing" }
        ],
        correct: 0,
        explanation: {
          en: "Lecithin is a natural emulsifier that helps bind fats and water-based ingredients, improving texture and shelf life while reducing the need for eggs in some recipes.",
          es: "La lecitina es un emulsificante natural que ayuda a unir las grasas y ingredientes base agua, mejorando la textura y vida útil mientras reduce la necesidad de huevos en algunas recetas.",
          de: "Lecithin ist ein natürlicher Emulgator, der hilft, Fette und wasserbasierte Zutaten zu binden, Textur und Haltbarkeit verbessert und den Bedarf an Eiern in manchen Rezepten reduziert.",
          nl: "Lecithine is een natuurlijke emulgator die helpt vetten en op water gebaseerde ingrediënten te binden, textuur en houdbaarheid verbetert en de behoefte aan eieren in sommige recepten vermindert."
        }
      },
      {
        question: {
          en: "What causes cookies to have a sandy, crumbly texture like shortbread?",
          es: "¿Qué causa que las galletas tengan una textura arenosa y desmenuzable como el shortbread?",
          de: "Was verursacht, dass Kekse eine sandige, krümelige Textur wie Shortbread haben?",
          nl: "Wat veroorzaakt dat koekjes een zandige, kruimelige textuur hebben zoals shortbread?"
        },
        options: [
          { en: "High protein flour", es: "Harina alta en proteína", de: "Proteinreiches Mehl", nl: "Hoge eiwit bloem" },
          { en: "High fat to flour ratio with minimal liquid", es: "Alta proporción de grasa a harina con líquido mínimo", de: "Hohes Fett-zu-Mehl-Verhältnis mit minimaler Flüssigkeit", nl: "Hoge vet-tot-bloem verhouding met minimale vloeistof" },
          { en: "Too much mixing", es: "Demasiado mezclado", de: "Zu viel Mischen", nl: "Te veel mengen" },
          { en: "Chemical leavening", es: "Leudante químico", de: "Chemisches Triebmittel", nl: "Chemisch rijsmiddel" }
        ],
        correct: 1,
        explanation: {
          en: "High fat-to-flour ratios with minimal liquid create a 'short' texture where fat coats flour proteins, preventing gluten formation and creating a tender, crumbly mouthfeel.",
          es: "Las altas proporciones de grasa a harina con líquido mínimo crean una textura 'corta' donde la grasa cubre las proteínas de la harina, previniendo la formación de gluten y creando una sensación en boca tierna y desmenuzable.",
          de: "Hohe Fett-zu-Mehl-Verhältnisse mit minimaler Flüssigkeit erzeugen eine 'kurze' Textur, wo Fett Mehlproteine umhüllt, Glutenbildung verhindert und ein zartes, krümeliges Mundgefühl schafft.",
          nl: "Hoge vet-tot-bloem verhoudingen met minimale vloeistof creëren een 'korte' textuur waar vet bloem eiwitten bedekt, glutenvorming voorkomt en een zachte, kruimelige mondgevoel schept."
        }
      },
      {
        question: {
          en: "What is the purpose of using tapioca starch in gluten-free cookies?",
          es: "¿Cuál es el propósito de usar almidón de tapioca en galletas sin gluten?",
          de: "Was ist der Zweck der Verwendung von Tapiokastärke in glutenfreien Keksen?",
          nl: "Wat is het doel van het gebruik van tapiocazetmeel in glutenvrije koekjes?"
        },
        options: [
          { en: "Adds sweetness", es: "Añade dulzura", de: "Fügt Süße hinzu", nl: "Voegt zoetheid toe" },
          { en: "Provides binding and chewiness", es: "Proporciona unión y masticabilidad", de: "Bietet Bindung und Kaubarkeit", nl: "Biedt binding en kauwbaarheid" },
          { en: "Prevents browning", es: "Previene dorado", de: "Verhindert Bräunung", nl: "Voorkomt bruining" },
          { en: "Acts as leavening", es: "Actúa como leudante", de: "Wirkt als Triebmittel", nl: "Werkt als rijsmiddel" }
        ],
        correct: 1,
        explanation: {
          en: "Tapioca starch provides binding properties and elasticity in gluten-free cookies, helping replace the structure typically provided by gluten and creating better texture.",
          es: "El almidón de tapioca proporciona propiedades de unión y elasticidad en galletas sin gluten, ayudando a reemplazar la estructura típicamente proporcionada por el gluten y creando mejor textura.",
          de: "Tapiokastärke bietet Bindeeigenschaften und Elastizität in glutenfreien Keksen, hilft die normalerweise durch Gluten bereitgestellte Struktur zu ersetzen und schafft bessere Textur.",
          nl: "Tapiocazetmeel biedt bindende eigenschappen en elasticiteit in glutenvrije koekjes, helpt de structuur te vervangen die normaal door gluten wordt geboden en creëert betere textuur."
        }
      },
      {
        question: {
          en: "What is the optimal dough temperature for piped cookies?",
          es: "¿Cuál es la temperatura óptima de la masa para galletas de manga?",
          de: "Was ist die optimale Teigtemperatur für gespritzte Kekse?",
          nl: "Wat is de optimale deegtemperatuur voor gespoten koekjes?"
        },
        options: [
          { en: "65-70°F (18-21°C)", es: "65-70°F (18-21°C)", de: "65-70°F (18-21°C)", nl: "65-70°F (18-21°C)" },
          { en: "75-80°F (24-27°C)", es: "75-80°F (24-27°C)", de: "75-80°F (24-27°C)", nl: "75-80°F (24-27°C)" },
          { en: "85-90°F (29-32°C)", es: "85-90°F (29-32°C)", de: "85-90°F (29-32°C)", nl: "85-90°F (29-32°C)" },
          { en: "95-100°F (35-38°C)", es: "95-100°F (35-38°C)", de: "95-100°F (35-38°C)", nl: "95-100°F (35-38°C)" }
        ],
        correct: 1,
        explanation: {
          en: "Dough at 75-80°F is warm enough to pipe easily through pastry bags but cool enough to hold its shape, preventing spreading during piping and baking.",
          es: "La masa a 75-80°F está suficientemente tibia para pasar fácilmente por mangas pasteleras pero suficientemente fría para mantener su forma, previniendo extensión durante el uso de manga y horneado.",
          de: "Teig bei 75-80°F ist warm genug, um leicht durch Spritzbeutel zu fließen, aber kühl genug, um seine Form zu behalten und Verlaufen während des Spritzens und Backens zu verhindern.",
          nl: "Deeg bij 75-80°F is warm genoeg om gemakkelijk door spuitzakken te gaan maar koel genoeg om zijn vorm te behouden, voorkomt uitlopen tijdens spuiten en bakken."
        }
      },
      {
        question: {
          en: "What creates the distinctive texture in tuile cookies?",
          es: "¿Qué crea la textura distintiva en las galletas tuile?",
          de: "Was erzeugt die charakteristische Textur in Tuile-Keksen?",
          nl: "Wat creëert de kenmerkende textuur in tuile koekjes?"
        },
        options: [
          { en: "High sugar content and very thin spreading", es: "Alto contenido de azúcar y extensión muy delgada", de: "Hoher Zuckergehalt und sehr dünne Ausbreitung", nl: "Hoog suikergehalte en zeer dunne spreiding" },
          { en: "Chemical leavening agents", es: "Agentes leudantes químicos", de: "Chemische Triebmittel", nl: "Chemische rijsmiddelen" },
          { en: "High protein flour", es: "Harina alta en proteína", de: "Proteinreiches Mehl", nl: "Hoge eiwit bloem" },
          { en: "Cold butter", es: "Mantequilla fría", de: "Kalte Butter", nl: "Koude boter" }
        ],
        correct: 0,
        explanation: {
          en: "Tuiles spread very thin during baking due to high sugar content and liquid ratio, creating delicate, crispy wafers that can be shaped while warm.",
          es: "Las tuiles se extienden muy delgadas durante el horneado debido al alto contenido de azúcar y proporción de líquido, creando obleas delicadas y crujientes que pueden moldearse mientras están calientes.",
          de: "Tuiles breiten sich beim Backen sehr dünn aus aufgrund hohen Zuckergehalts und Flüssigkeitsverhältnisses, wodurch zarte, knusprige Waffeln entstehen, die warm geformt werden können.",
          nl: "Tuiles spreiden zeer dun uit tijdens bakken door hoog suikergehalte en vloeistofverhouding, creëren delicate, knapperige wafels die warm gevormd kunnen worden."
        }
      },
      {
        question: {
          en: "What is the purpose of using xanthan gum in cookie recipes?",
          es: "¿Cuál es el propósito de usar goma xantana en recetas de galletas?",
          de: "Was ist der Zweck der Verwendung von Xanthan in Keksrezepten?",
          nl: "Wat is het doel van het gebruik van xanthaangom in koekjesrecepten?"
        },
        options: [
          { en: "Provides structure and binding in gluten-free recipes", es: "Proporciona estructura y unión en recetas sin gluten", de: "Bietet Struktur und Bindung in glutenfreien Rezepten", nl: "Biedt structuur en binding in glutenvrije recepten" },
          { en: "Adds sweetness", es: "Añade dulzura", de: "Fügt Süße hinzu", nl: "Voegt zoetheid toe" },
          { en: "Prevents spreading", es: "Previene extensión", de: "Verhindert Verlaufen", nl: "Voorkomt uitlopen" },
          { en: "Creates leavening", es: "Crea leudado", de: "Erzeugt Triebkraft", nl: "Creëert rijzing" }
        ],
        correct: 0,
        explanation: {
          en: "Xanthan gum acts as a binding agent and provides structure in gluten-free cookies, mimicking some of gluten's properties to improve texture and prevent crumbling.",
          es: "La goma xantana actúa como agente aglutinante y proporciona estructura en galletas sin gluten, imitando algunas de las propiedades del gluten para mejorar la textura y prevenir desmoronamiento.",
          de: "Xanthan wirkt als Bindemittel und bietet Struktur in glutenfreien Keksen, ahmt einige Eigenschaften von Gluten nach, um Textur zu verbessern und Zerbröckeln zu verhindern.",
          nl: "Xanthaangom werkt als bindmiddel en biedt structuur in glutenvrije koekjes, bootst enkele eigenschappen van gluten na om textuur te verbeteren en verkruimelen te voorkomen."
        }
      },
      {
        question: {
          en: "What is the purpose of using steam injection during cookie baking?",
          es: "¿Cuál es el propósito de usar inyección de vapor durante el horneado de galletas?",
          de: "Was ist der Zweck der Dampfeinspritzung beim Keksbacken?",
          nl: "Wat is het doel van stoominsjectie tijdens het bakken van koekjes?"
        },
        options: [
          { en: "Prevents overbrowning and creates glossy finish", es: "Previene exceso de dorado y crea acabado brillante", de: "Verhindert Überbräunung und erzeugt glänzende Oberfläche", nl: "Voorkomt overbruining en creëert glanzende afwerking" },
          { en: "Makes cookies rise more", es: "Hace que las galletas suban más", de: "Lässt Kekse mehr aufgehen", nl: "Laat koekjes meer rijzen" },
          { en: "Reduces baking time", es: "Reduce tiempo de horneado", de: "Reduziert Backzeit", nl: "Vermindert baktijd" },
          { en: "Adds flavor", es: "Añade sabor", de: "Fügt Geschmack hinzu", nl: "Voegt smaak toe" }
        ],
        correct: 0,
        explanation: {
          en: "Steam injection during the first part of baking delays crust formation, allowing for better expansion and creating a glossy surface finish on certain cookie types.",
          es: "La inyección de vapor durante la primera parte del horneado retrasa la formación de corteza, permitiendo mejor expansión y creando un acabado de superficie brillante en ciertos tipos de galletas.",
          de: "Dampfeinspritzung während des ersten Teils des Backens verzögert Krustenbildung, ermöglicht bessere Ausdehnung und erzeugt glänzende Oberflächenfinish bei bestimmten Keksarten.",
          nl: "Stoominsectie tijdens het eerste deel van bakken vertraagt korstvorming, staat betere uitzetting toe en creëert glanzende oppervlakte afwerking op bepaalde koekjestypes."
        }
      },
      {
        question: {
          en: "What is the purpose of using psyllium husk in gluten-free cookie recipes?",
          es: "¿Cuál es el propósito de usar cáscara de psilio en recetas de galletas sin gluten?",
          de: "Was ist der Zweck der Verwendung von Flohsamenschalen in glutenfreien Keksrezepten?",
          nl: "Wat is het doel van het gebruik van psylliumschillen in glutenvrije koekjesrecepten?"
        },
        options: [
          { en: "Provides fiber and binding properties", es: "Proporciona fibra y propiedades aglutinantes", de: "Bietet Ballaststoffe und Bindeeigenschaften", nl: "Biedt vezel en bindende eigenschappen" },
          { en: "Adds protein", es: "Añade proteína", de: "Fügt Protein hinzu", nl: "Voegt eiwit toe" },
          { en: "Creates leavening", es: "Crea leudado", de: "Erzeugt Triebkraft", nl: "Creëert rijzing" },
          { en: "Adds sweetness", es: "Añade dulzura", de: "Fügt Süße hinzu", nl: "Voegt zoetheid toe" }
        ],
        correct: 0,
        explanation: {
          en: "Psyllium husk absorbs moisture and provides binding properties in gluten-free cookies, helping to create structure and improve texture without gluten.",
          es: "La cáscara de psilio absorbe humedad y proporciona propiedades aglutinantes en galletas sin gluten, ayudando a crear estructura y mejorar la textura sin gluten.",
          de: "Flohsamenschalen absorbieren Feuchtigkeit und bieten Bindeeigenschaften in glutenfreien Keksen, helfen Struktur zu schaffen und Textur ohne Gluten zu verbessern.",
          nl: "Psylliumschillen absorberen vocht en bieden bindende eigenschappen in glutenvrije koekjes, helpen structuur te creëren en textuur te verbeteren zonder gluten."
        }
      },
      {
        question: {
          en: "What is the ideal final internal temperature for fully baked cookies?",
          es: "¿Cuál es la temperatura interna final ideal para galletas completamente horneadas?",
          de: "Was ist die ideale finale Innentemperatur für vollständig gebackene Kekse?",
          nl: "Wat is de ideale uiteindelijke interne temperatuur voor volledig gebakken koekjes?"
        },
        options: [
          { en: "180-190°F (82-88°C)", es: "180-190°F (82-88°C)", de: "180-190°F (82-88°C)", nl: "180-190°F (82-88°C)" },
          { en: "200-210°F (93-99°C)", es: "200-210°F (93-99°C)", de: "200-210°F (93-99°C)", nl: "200-210°F (93-99°C)" },
          { en: "220-230°F (104-110°C)", es: "220-230°F (104-110°C)", de: "220-230°F (104-110°C)", nl: "220-230°F (104-110°C)" },
          { en: "240-250°F (116-121°C)", es: "240-250°F (116-121°C)", de: "240-250°F (116-121°C)", nl: "240-250°F (116-121°C)" }
        ],
        correct: 0,
        explanation: {
          en: "Cookies are fully baked when they reach 180-190°F internal temperature, ensuring proper moisture removal while maintaining desired texture without overbaking.",
          es: "Las galletas están completamente horneadas cuando alcanzan temperatura interna de 180-190°F, asegurando remoción adecuada de humedad mientras mantienen la textura deseada sin exceso de horneado.",
          de: "Kekse sind vollständig gebacken bei einer Innentemperatur von 180-190°F, gewährleistet angemessene Feuchtigkeitsentfernung bei Beibehaltung gewünschter Textur ohne Überbacken.",
          nl: "Koekjes zijn volledig gebakken bij 180-190°F interne temperatuur, verzekert juiste vochtverwijdering terwijl gewenste textuur behouden blijft zonder overbakken."
        }
      },
      {
        question: {
          en: "What causes the characteristic cracked top in molasses cookies?",
          es: "¿Qué causa la parte superior agrietada característica en las galletas de melaza?",
          de: "Was verursacht die charakteristischen Risse oben in Melassekeksen?",
          nl: "Wat veroorzaakt de kenmerkende gescheurde bovenkant in melassekoekjes?"
        },
        options: [
          { en: "Rapid surface setting while interior continues expanding", es: "Cuajado rápido de superficie mientras el interior continúa expandiéndose", de: "Schnelle Oberflächenerstarrung während das Innere weiter expandiert", nl: "Snelle oppervlakte stolling terwijl binnenkant blijft uitzetten" },
          { en: "Too much flour", es: "Demasiada harina", de: "Zu viel Mehl", nl: "Te veel bloem" },
          { en: "Incorrect oven temperature", es: "Temperatura incorrecta del horno", de: "Falsche Ofentemperatur", nl: "Verkeerde oventemperatuur" },
          { en: "Overmixing", es: "Mezclado excesivo", de: "Übermischen", nl: "Overmengen" }
        ],
        correct: 0,
        explanation: {
          en: "The high sugar content in molasses cookies causes rapid surface crusting, while baking soda continues to create lift inside, causing the characteristic cracked appearance.",
          es: "El alto contenido de azúcar en las galletas de melaza causa formación rápida de corteza en la superficie, mientras el bicarbonato continúa creando levado interior, causando la apariencia agrietada característica.",
          de: "Der hohe Zuckergehalt in Melassekeksen verursacht schnelle Oberflächenkrustenbildung, während Natron weiterhin Auftrieb innen erzeugt, was das charakteristische gerissene Aussehen verursacht.",
          nl: "Het hoge suikergehalte in melassekoekjes veroorzaakt snelle oppervlaktekorstvorming, terwijl zuiveringszout blijft lift binnen creëren, veroorzaakt het kenmerkende gescheurde uiterlijk."
        }
      },
      {
        question: {
          en: "What is the main difference between laminated and non-laminated cookie dough?",
          es: "¿Cuál es la principal diferencia entre masa de galletas laminada y no laminada?",
          de: "Was ist der Hauptunterschied zwischen laminiertem und nicht-laminiertem Keksteig?",
          nl: "Wat is het hoofdverschil tussen gelaagd en niet-gelaagd koekjesdeeg?"
        },
        options: [
          { en: "Laminated dough contains yeast", es: "La masa laminada contiene levadura", de: "Laminierter Teig enthält Hefe", nl: "Gelaagd deeg bevat gist" },
          { en: "Laminated dough has butter folded in layers creating flaky texture", es: "La masa laminada tiene mantequilla doblada en capas creando textura hojaldrada", de: "Laminierter Teig hat Butter in Schichten gefaltet für blättrige Textur", nl: "Gelaagd deeg heeft boter gevouwen in lagen voor bladderige textuur" },
          { en: "Laminated dough uses more sugar", es: "La masa laminada usa más azúcar", de: "Laminierter Teig verwendet mehr Zucker", nl: "Gelaagd deeg gebruikt meer suiker" },
          { en: "Only temperature difference", es: "Solo diferencia de temperatura", de: "Nur Temperaturunterschied", nl: "Alleen temperatuurverschil" }
        ],
        correct: 1,
        explanation: {
          en: "Laminated cookie dough, like in palmiers, has butter folded into the dough in layers through repeated rolling and folding, creating distinct flaky layers when baked.",
          es: "La masa de galletas laminada, como en palmeras, tiene mantequilla doblada en la masa en capas a través de estirado y doblado repetido, creando capas hojaldradas distintas cuando se hornea.",
          de: "Laminierter Keksteig, wie in Palmiers, hat Butter in den Teig in Schichten durch wiederholtes Ausrollen und Falten eingearbeitet, was beim Backen deutliche blättrige Schichten erzeugt.",
          nl: "Gelaagd koekjesdeeg, zoals in palmiers, heeft boter gevouwen in het deeg in lagen door herhaald uitrollen en vouwen, creëert duidelijke bladderige lagen wanneer gebakken."
        }
      }
    ]
  };

  // Export for use in the quiz application
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level5;
  } else if (typeof window !== 'undefined') {
    window.level5 = level5;
  }
})();