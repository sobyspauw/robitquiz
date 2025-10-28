// Quiz Level 3: Drinken - Frisdranken (Intermediate Soft Drinks - Production & Ingredients)
(function() {
  const level3 = {
    name: {
      en: "Intermediate Soft Drinks - Production & Ingredients",
      es: "Refrescos Intermedios - Producción e Ingredientes",
      de: "Fortgeschrittene Erfrischungsgetränke - Produktion & Zutaten",
      nl: "Gevorderde Frisdranken - Productie & Ingrediënten"
    },
    questions: [
      {
        question: {
          en: "What is the purpose of phosphoric acid in cola drinks?",
          es: "¿Cuál es el propósito del ácido fosfórico en las bebidas de cola?",
          de: "Was ist der Zweck von Phosphorsäure in Cola-Getränken?",
          nl: "Wat is het doel van fosforzuur in cola-dranken?"
        },
        options: [
          { en: "To add sweetness", es: "Para añadir dulzura", de: "Um Süße hinzuzufügen", nl: "Om zoetheid toe te voegen" },
          { en: "To provide tartness and preserve flavor", es: "Para dar acidez y preservar el sabor", de: "Um Säure zu geben und Geschmack zu bewahren", nl: "Om zuurheid te geven en smaak te behouden" },
          { en: "To create bubbles", es: "Para crear burbujas", de: "Um Blasen zu erzeugen", nl: "Om bubbels te maken" },
          { en: "To add color", es: "Para añadir color", de: "Um Farbe hinzuzufügen", nl: "Om kleur toe te voegen" }
        ],
        correct: 1,
        explanation: {
          en: "Phosphoric acid gives cola its characteristic tart flavor and acts as a preservative to maintain freshness.",
          es: "El ácido fosfórico le da a la cola su sabor ácido característico y actúa como conservante para mantener la frescura.",
          de: "Phosphorsäure verleiht Cola seinen charakteristischen sauren Geschmack und wirkt als Konservierungsmittel für die Frische.",
          nl: "Fosforzuur geeft cola zijn karakteristieke zure smaak en werkt als conserveermiddel om de versheid te behouden."
        }
      },
      {
        question: {
          en: "What is high fructose corn syrup (HFCS) commonly used for in soft drinks?",
          es: "¿Para qué se usa comúnmente el jarabe de maíz de alta fructosa (HFCS) en refrescos?",
          de: "Wofür wird Maissirup mit hohem Fruktosegehalt (HFCS) in Erfrischungsgetränken verwendet?",
          nl: "Waarvoor wordt high fructose corn syrup (HFCS) vaak gebruikt in frisdranken?"
        },
        options: [
          { en: "As a sweetener", es: "Como edulcorante", de: "Als Süßungsmittel", nl: "Als zoetstof" },
          { en: "As a preservative", es: "Como conservante", de: "Als Konservierungsmittel", nl: "Als conserveermiddel" },
          { en: "As a thickener", es: "Como espesante", de: "Als Verdickungsmittel", nl: "Als verdikkingsmiddel" },
          { en: "As a colorant", es: "Como colorante", de: "Als Farbstoff", nl: "Als kleurstof" }
        ],
        correct: 0,
        explanation: {
          en: "HFCS is a liquid sweetener derived from corn that's commonly used instead of sugar in many soft drinks.",
          es: "HFCS es un edulcorante líquido derivado del maíz que se usa comúnmente en lugar del azúcar en muchos refrescos.",
          de: "HFCS ist ein flüssiges Süßungsmittel aus Mais, das häufig anstelle von Zucker in Erfrischungsgetränken verwendet wird.",
          nl: "HFCS is een vloeibare zoetstof gemaakt van maïs die vaak wordt gebruikt in plaats van suiker in frisdranken."
        }
      },
      {
        question: {
          en: "At what pressure is carbon dioxide typically stored in soft drink production?",
          es: "¿A qué presión se almacena típicamente el dióxido de carbono en la producción de refrescos?",
          de: "Bei welchem Druck wird Kohlendioxid normalerweise in der Erfrischungsgetränkeproduktion gelagert?",
          nl: "Bij welke druk wordt koolstofdioxide typisch opgeslagen in frisdrankproductie?"
        },
        options: [
          { en: "1-2 atmospheres", es: "1-2 atmósferas", de: "1-2 Atmosphären", nl: "1-2 atmosfeer" },
          { en: "3-4 atmospheres", es: "3-4 atmósferas", de: "3-4 Atmosphären", nl: "3-4 atmosfeer" },
          { en: "5-6 atmospheres", es: "5-6 atmósferas", de: "5-6 Atmosphären", nl: "5-6 atmosfeer" },
          { en: "10-15 atmospheres", es: "10-15 atmósferas", de: "10-15 Atmosphären", nl: "10-15 atmosfeer" }
        ],
        correct: 1,
        explanation: {
          en: "Soft drinks typically contain CO2 at 3-4 atmospheres of pressure, which creates the right level of carbonation.",
          es: "Los refrescos típicamente contienen CO2 a 3-4 atmósferas de presión, lo que crea el nivel correcto de carbonatación.",
          de: "Erfrischungsgetränke enthalten normalerweise CO2 bei 3-4 Atmosphären Druck, was die richtige Kohlensäure erzeugt.",
          nl: "Frisdranken bevatten typisch CO2 bij 3-4 atmosfeer druk, wat het juiste niveau van koolzuur creëert."
        }
      },
      {
        question: {
          en: "What is the main difference between natural and artificial flavoring in soft drinks?",
          es: "¿Cuál es la principal diferencia entre saborizantes naturales y artificiales en refrescos?",
          de: "Was ist der Hauptunterschied zwischen natürlichen und künstlichen Aromen in Erfrischungsgetränken?",
          nl: "Wat is het belangrijkste verschil tussen natuurlijke en kunstmatige smaakstoffen in frisdranken?"
        },
        options: [
          { en: "Natural flavors are always healthier", es: "Los sabores naturales son siempre más saludables", de: "Natürliche Aromen sind immer gesünder", nl: "Natuurlijke smaken zijn altijd gezonder" },
          { en: "Natural flavors come from plant/animal sources, artificial are synthetic", es: "Los sabores naturales vienen de fuentes vegetales/animales, los artificiales son sintéticos", de: "Natürliche Aromen stammen aus Pflanzen/Tieren, künstliche sind synthetisch", nl: "Natuurlijke smaken komen van plant/dier bronnen, kunstmatige zijn synthetisch" },
          { en: "Artificial flavors taste better", es: "Los sabores artificiales saben mejor", de: "Künstliche Aromen schmecken besser", nl: "Kunstmatige smaken smaken beter" },
          { en: "Natural flavors are cheaper", es: "Los sabores naturales son más baratos", de: "Natürliche Aromen sind billiger", nl: "Natuurlijke smaken zijn goedkoper" }
        ],
        correct: 1,
        explanation: {
          en: "Natural flavors are derived from plants or animals, while artificial flavors are chemically synthesized but often identical in molecular structure.",
          es: "Los sabores naturales se derivan de plantas o animales, mientras que los artificiales son sintéticos pero a menudo idénticos en estructura molecular.",
          de: "Natürliche Aromen stammen aus Pflanzen oder Tieren, während künstliche Aromen chemisch synthetisiert, aber oft identisch in der Molekülstruktur sind.",
          nl: "Natuurlijke smaken komen van planten of dieren, terwijl kunstmatige smaken chemisch gesynthetiseerd zijn maar vaak identiek in moleculaire structuur."
        }
      },
      {
        question: {
          en: "What role does citric acid play in citrus-flavored sodas?",
          es: "¿Qué papel juega el ácido cítrico en los refrescos con sabor a cítricos?",
          de: "Welche Rolle spielt Zitronensäure in Erfrischungsgetränken mit Zitrusgeschmack?",
          nl: "Welke rol speelt citroenzuur in frisdranken met citrussmaak?"
        },
        options: [
          { en: "Adds sweetness", es: "Añade dulzura", de: "Fügt Süße hinzu", nl: "Voegt zoetheid toe" },
          { en: "Enhances tartness and acts as preservative", es: "Mejora la acidez y actúa como conservante", de: "Verstärkt die Säure und wirkt als Konservierungsmittel", nl: "Versterkt de zuurheid en werkt als conserveermiddel" },
          { en: "Creates carbonation", es: "Crea carbonatación", de: "Erzeugt Kohlensäure", nl: "Creëert koolzuur" },
          { en: "Provides color", es: "Proporciona color", de: "Sorgt für Farbe", nl: "Zorgt voor kleur" }
        ],
        correct: 1,
        explanation: {
          en: "Citric acid enhances the natural tartness of citrus flavors and serves as a natural preservative to extend shelf life.",
          es: "El ácido cítrico mejora la acidez natural de los sabores cítricos y sirve como conservante natural para extender la vida útil.",
          de: "Zitronensäure verstärkt die natürliche Säure von Zitrusaromen und dient als natürliches Konservierungsmittel für längere Haltbarkeit.",
          nl: "Citroenzuur versterkt de natuurlijke zuurheid van citrussmaken en dient als natuurlijk conserveermiddel voor langere houdbaarheid."
        }
      },
      {
        question: {
          en: "What is the purpose of sodium benzoate in soft drinks?",
          es: "¿Cuál es el propósito del benzoato de sodio en los refrescos?",
          de: "Was ist der Zweck von Natriumbenzoat in Erfrischungsgetränken?",
          nl: "Wat is het doel van natriumbenzoaat in frisdranken?"
        },
        options: [
          { en: "Flavoring agent", es: "Agente saborizante", de: "Aromastoff", nl: "Smaakstof" },
          { en: "Preservative", es: "Conservante", de: "Konservierungsmittel", nl: "Conserveermiddel" },
          { en: "Sweetener", es: "Edulcorante", de: "Süßungsmittel", nl: "Zoetstof" },
          { en: "Carbonation enhancer", es: "Potenciador de carbonatación", de: "Kohlensäure-Verstärker", nl: "Koolzuurversterker" }
        ],
        correct: 1,
        explanation: {
          en: "Sodium benzoate is a preservative that prevents the growth of bacteria, yeast, and mold in soft drinks.",
          es: "El benzoato de sodio es un conservante que previene el crecimiento de bacterias, levaduras y moho en los refrescos.",
          de: "Natriumbenzoat ist ein Konservierungsmittel, das das Wachstum von Bakterien, Hefen und Schimmel in Erfrischungsgetränken verhindert.",
          nl: "Natriumbenzoaat is een conserveermiddel dat de groei van bacteriën, gist en schimmel in frisdranken voorkomt."
        }
      },
      {
        question: {
          en: "What temperature should soft drink syrup be stored at during production?",
          es: "¿A qué temperatura debe almacenarse el jarabe de refrescos durante la producción?",
          de: "Bei welcher Temperatur sollte Erfrischungsgetränkesirup während der Produktion gelagert werden?",
          nl: "Bij welke temperatuur moet frisdrankstroop worden bewaard tijdens de productie?"
        },
        options: [
          { en: "Room temperature (20-25°C)", es: "Temperatura ambiente (20-25°C)", de: "Zimmertemperatur (20-25°C)", nl: "Kamertemperatuur (20-25°C)" },
          { en: "Cold (2-8°C)", es: "Frío (2-8°C)", de: "Kalt (2-8°C)", nl: "Koud (2-8°C)" },
          { en: "Hot (60-80°C)", es: "Caliente (60-80°C)", de: "Heiß (60-80°C)", nl: "Heet (60-80°C)" },
          { en: "Frozen (-10°C)", es: "Congelado (-10°C)", de: "Gefroren (-10°C)", nl: "Bevroren (-10°C)" }
        ],
        correct: 1,
        explanation: {
          en: "Soft drink syrups are typically stored at cold temperatures (2-8°C) to maintain quality and prevent spoilage.",
          es: "Los jarabes de refrescos se almacenan típicamente a temperaturas frías (2-8°C) para mantener la calidad y prevenir el deterioro.",
          de: "Erfrischungsgetränkesirupe werden normalerweise bei kalten Temperaturen (2-8°C) gelagert, um Qualität zu erhalten und Verderb zu verhindern.",
          nl: "Frisdrankstropen worden typisch bewaard bij koude temperaturen (2-8°C) om kwaliteit te behouden en bederf te voorkomen."
        }
      },
      {
        question: {
          en: "What is the typical water-to-syrup ratio in most soft drinks?",
          es: "¿Cuál es la proporción típica de agua a jarabe en la mayoría de los refrescos?",
          de: "Wie ist das typische Wasser-zu-Sirup-Verhältnis in den meisten Erfrischungsgetränken?",
          nl: "Wat is de typische water-stroop verhouding in de meeste frisdranken?"
        },
        options: [
          { en: "3:1", es: "3:1", de: "3:1", nl: "3:1" },
          { en: "5:1", es: "5:1", de: "5:1", nl: "5:1" },
          { en: "7:1", es: "7:1", de: "7:1", nl: "7:1" },
          { en: "10:1", es: "10:1", de: "10:1", nl: "10:1" }
        ],
        correct: 1,
        explanation: {
          en: "Most soft drinks use a 5:1 ratio of water to syrup concentrate, meaning 5 parts water to 1 part syrup.",
          es: "La mayoría de los refrescos usan una proporción 5:1 de agua a concentrado de jarabe, es decir, 5 partes de agua por 1 parte de jarabe.",
          de: "Die meisten Erfrischungsgetränke verwenden ein 5:1-Verhältnis von Wasser zu Sirupkonzentrat, also 5 Teile Wasser zu 1 Teil Sirup.",
          nl: "De meeste frisdranken gebruiken een 5:1 verhouding van water tot stroopconcentraat, dat betekent 5 delen water op 1 deel stroop."
        }
      },
      {
        question: {
          en: "What is caramel color made from?",
          es: "¿De qué está hecho el color caramelo?",
          de: "Woraus wird Karamellfarbe hergestellt?",
          nl: "Waar wordt karamelkleur van gemaakt?"
        },
        options: [
          { en: "Burned sugar", es: "Azúcar quemado", de: "Gebrannter Zucker", nl: "Gebrande suiker" },
          { en: "Chocolate extract", es: "Extracto de chocolate", de: "Schokoladenextrakt", nl: "Chocolade-extract" },
          { en: "Coffee beans", es: "Granos de café", de: "Kaffeebohnen", nl: "Koffiebonen" },
          { en: "Brown dye", es: "Tinte marrón", de: "Brauner Farbstoff", nl: "Bruine kleurstof" }
        ],
        correct: 0,
        explanation: {
          en: "Caramel color is produced by heating sugars (usually sucrose or glucose) until they caramelize and turn brown.",
          es: "El color caramelo se produce calentando azúcares (generalmente sacarosa o glucosa) hasta que se caramelicen y se vuelvan marrones.",
          de: "Karamellfarbe wird durch Erhitzen von Zuckern (meist Saccharose oder Glucose) hergestellt, bis sie karamelisieren und braun werden.",
          nl: "Karamelkleur wordt geproduceerd door suikers (meestal sacharose of glucose) te verhitten tot ze karameliseren en bruin worden."
        }
      },
      {
        question: {
          en: "What process removes impurities from water used in soft drink production?",
          es: "¿Qué proceso elimina las impurezas del agua usada en la producción de refrescos?",
          de: "Welcher Prozess entfernt Verunreinigungen aus dem Wasser für die Erfrischungsgetränkeproduktion?",
          nl: "Welk proces verwijdert onzuiverheden uit water dat wordt gebruikt in frisdrankproductie?"
        },
        options: [
          { en: "Boiling", es: "Hervir", de: "Kochen", nl: "Koken" },
          { en: "Reverse osmosis", es: "Ósmosis inversa", de: "Umkehrosmose", nl: "Omgekeerde osmose" },
          { en: "Freezing", es: "Congelar", de: "Einfrieren", nl: "Bevriezen" },
          { en: "Adding sugar", es: "Añadir azúcar", de: "Zucker hinzufügen", nl: "Suiker toevoegen" }
        ],
        correct: 1,
        explanation: {
          en: "Reverse osmosis is commonly used to purify water by forcing it through semi-permeable membranes that remove contaminants.",
          es: "La ósmosis inversa se usa comúnmente para purificar el agua forzándola a través de membranas semipermeables que eliminan contaminantes.",
          de: "Umkehrosmose wird häufig zur Wasserreinigung verwendet, indem es durch halbdurchlässige Membranen gepresst wird, die Schadstoffe entfernen.",
          nl: "Omgekeerde osmose wordt vaak gebruikt om water te zuiveren door het door semi-permeabele membranen te persen die verontreinigingen verwijderen."
        }
      },
      {
        question: {
          en: "What is the typical carbonation level (CO₂ volumes) in soft drinks?",
          es: "¿Cuál es el nivel típico de carbonatación (volúmenes de CO₂) en refrescos?",
          de: "Was ist der typische Kohlensäuregehalt (CO₂-Volumen) in Erfrischungsgetränken?",
          nl: "Wat is het typische carbonatieniveau (CO₂ volumes) in frisdranken?"
        },
        options: [
          { en: "0.5-1.0 volumes", es: "0.5-1.0 volúmenes", de: "0.5-1.0 Volumen", nl: "0.5-1.0 volumes" },
          { en: "3.5-4.0 volumes", es: "3.5-4.0 volúmenes", de: "3.5-4.0 Volumen", nl: "3.5-4.0 volumes" },
          { en: "8.0-10.0 volumes", es: "8.0-10.0 volúmenes", de: "8.0-10.0 Volumen", nl: "8.0-10.0 volumes" },
          { en: "15.0-20.0 volumes", es: "15.0-20.0 volúmenes", de: "15.0-20.0 Volumen", nl: "15.0-20.0 volumes" }
        ],
        correct: 1,
        explanation: {
          en: "Most carbonated soft drinks contain 3.5-4.0 volumes of CO₂. This means the liquid contains 3.5-4 times its volume in dissolved carbon dioxide gas.",
          es: "La mayoría de los refrescos carbonatados contienen 3.5-4.0 volúmenes de CO₂. Esto significa que el líquido contiene 3.5-4 veces su volumen en gas dióxido de carbono disuelto.",
          de: "Die meisten kohlensäurehaltigen Erfrischungsgetränke enthalten 3.5-4.0 Volumen CO₂. Dies bedeutet, dass die Flüssigkeit das 3.5-4-fache ihres Volumens an gelöstem Kohlendioxidgas enthält.",
          nl: "De meeste koolzuurhoudende frisdranken bevatten 3.5-4.0 volumes CO₂. Dit betekent dat de vloeistof 3.5-4 keer zijn volume aan opgelost kooldioxide gas bevat."
        }
      },
      {
        question: {
          en: "What is the function of sodium benzoate in soft drinks?",
          es: "¿Cuál es la función del benzoato de sodio en los refrescos?",
          de: "Was ist die Funktion von Natriumbenzoat in Erfrischungsgetränken?",
          nl: "Wat is de functie van natriumbenzoaat in frisdranken?"
        },
        options: [
          { en: "Preservative to prevent microbial growth", es: "Conservante para prevenir crecimiento microbiano", de: "Konservierungsmittel zur Verhinderung mikrobiellen Wachstums", nl: "Conserveermiddel om microbiële groei te voorkomen" },
          { en: "Sweetener", es: "Edulcorante", de: "Süßstoff", nl: "Zoetstof" },
          { en: "Colorant", es: "Colorante", de: "Farbstoff", nl: "Kleurstof" },
          { en: "Carbonation agent", es: "Agente carbonatador", de: "Kohlensäuremittel", nl: "Carbonatiemiddel" }
        ],
        correct: 0,
        explanation: {
          en: "Sodium benzoate is a preservative that prevents the growth of bacteria, yeast, and mold in acidic conditions. It's most effective at pH below 4.5.",
          es: "El benzoato de sodio es un conservante que previene el crecimiento de bacterias, levaduras y moho en condiciones ácidas. Es más efectivo a pH por debajo de 4.5.",
          de: "Natriumbenzoat ist ein Konservierungsmittel, das das Wachstum von Bakterien, Hefen und Schimmel unter sauren Bedingungen verhindert. Es ist bei pH unter 4.5 am wirksamsten.",
          nl: "Natriumbenzoaat is een conserveermiddel dat de groei van bacteriën, gisten en schimmels in zure omstandigheden voorkomt. Het is het meest effectief bij pH onder 4.5."
        }
      },
      {
        question: {
          en: "What is the purpose of adding sodium citrate to some soft drinks?",
          es: "¿Cuál es el propósito de añadir citrato de sodio a algunos refrescos?",
          de: "Was ist der Zweck der Zugabe von Natriumcitrat zu einigen Erfrischungsgetränken?",
          nl: "Wat is het doel van het toevoegen van natriumcitraat aan sommige frisdranken?"
        },
        options: [
          { en: "Buffer to control acidity/pH", es: "Tampón para controlar acidez/pH", de: "Puffer zur Kontrolle von Säure/pH", nl: "Buffer om zuurgraad/pH te controleren" },
          { en: "Provide sweetness", es: "Proporcionar dulzura", de: "Süße verleihen", nl: "Zoetheid geven" },
          { en: "Add color", es: "Añadir color", de: "Farbe hinzufügen", nl: "Kleur toevoegen" },
          { en: "Create bubbles", es: "Crear burbujas", de: "Blasen erzeugen", nl: "Bubbels creëren" }
        ],
        correct: 0,
        explanation: {
          en: "Sodium citrate acts as a pH buffer, helping to maintain consistent acidity levels in the drink and enhancing flavor stability.",
          es: "El citrato de sodio actúa como tampón de pH, ayudando a mantener niveles consistentes de acidez en la bebida y mejorando la estabilidad del sabor.",
          de: "Natriumcitrat wirkt als pH-Puffer und hilft, konstante Säurewerte im Getränk aufrechtzuerhalten und die Geschmacksstabilität zu verbessern.",
          nl: "Natriumcitraat werkt als pH-buffer en helpt consistente zuurgradenniveaus in de drank te handhaven en smaakstabiliteit te verbeteren."
        }
      },
      {
        question: {
          en: "What brewing method was historically used to create naturally carbonated soft drinks?",
          es: "¿Qué método de elaboración se usaba históricamente para crear refrescos naturalmente carbonatados?",
          de: "Welche Braumethode wurde historisch verwendet, um natürlich kohlensäurehaltige Erfrischungsgetränke herzustellen?",
          nl: "Welke brouwmethode werd historisch gebruikt om natuurlijk koolzuurhoudende frisdranken te maken?"
        },
        options: [
          { en: "Fermentation with yeast", es: "Fermentación con levadura", de: "Fermentation mit Hefe", nl: "Fermentatie met gist" },
          { en: "Boiling at high temperature", es: "Hervir a alta temperatura", de: "Kochen bei hoher Temperatur", nl: "Koken op hoge temperatuur" },
          { en: "Freezing and thawing", es: "Congelar y descongelar", de: "Einfrieren und Auftauen", nl: "Bevriezen en ontdooien" },
          { en: "Electric charging", es: "Carga eléctrica", de: "Elektrische Aufladung", nl: "Elektrisch opladen" }
        ],
        correct: 0,
        explanation: {
          en: "Traditional ginger beer and root beer were naturally carbonated through fermentation, where yeast consumed sugars and produced CO₂ as a byproduct.",
          es: "El ginger beer y root beer tradicionales se carbonataban naturalmente mediante fermentación, donde la levadura consumía azúcares y producía CO₂ como subproducto.",
          de: "Traditionelles Ginger Beer und Root Beer wurden durch Fermentation natürlich mit Kohlensäure versetzt, wobei Hefe Zucker verbrauchte und CO₂ als Nebenprodukt produzierte.",
          nl: "Traditionele ginger beer en root beer werden natuurlijk gecarboneerd door fermentatie, waarbij gist suikers consumeerde en CO₂ als bijproduct produceerde."
        }
      },
      {
        question: {
          en: "What temperature range is optimal for carbonating soft drinks?",
          es: "¿Qué rango de temperatura es óptimo para carbonatar refrescos?",
          de: "Welcher Temperaturbereich ist optimal für die Karbonisierung von Erfrischungsgetränken?",
          nl: "Welk temperatuurbereik is optimaal voor het carboneren van frisdranken?"
        },
        options: [
          { en: "25-30°C (warm)", es: "25-30°C (caliente)", de: "25-30°C (warm)", nl: "25-30°C (warm)" },
          { en: "0-4°C (cold)", es: "0-4°C (frío)", de: "0-4°C (kalt)", nl: "0-4°C (koud)" },
          { en: "50-60°C (hot)", es: "50-60°C (caliente)", de: "50-60°C (heiß)", nl: "50-60°C (heet)" },
          { en: "Below freezing", es: "Bajo cero", de: "Unter dem Gefrierpunkt", nl: "Onder het vriespunt" }
        ],
        correct: 1,
        explanation: {
          en: "Cold temperatures (0-4°C) are optimal for carbonation because CO₂ dissolves better in cold liquids. This is why soft drinks are carbonated cold.",
          es: "Las temperaturas frías (0-4°C) son óptimas para la carbonatación porque el CO₂ se disuelve mejor en líquidos fríos. Por esto los refrescos se carbonatan fríos.",
          de: "Kalte Temperaturen (0-4°C) sind optimal für die Karbonisierung, da sich CO₂ besser in kalten Flüssigkeiten löst. Deshalb werden Erfrischungsgetränke kalt karbonisiert.",
          nl: "Koude temperaturen (0-4°C) zijn optimaal voor carbonatie omdat CO₂ beter oplost in koude vloeistoffen. Daarom worden frisdranken koud gecarboneerd."
        }
      },
      {
        question: {
          en: "What is 'Brix' in the context of soft drink production?",
          es: "¿Qué es 'Brix' en el contexto de producción de refrescos?",
          de: "Was ist 'Brix' im Zusammenhang mit der Erfrischungsgetränkeproduktion?",
          nl: "Wat is 'Brix' in de context van frisdrankproductie?"
        },
        options: [
          { en: "Measurement of dissolved sugar content", es: "Medida del contenido de azúcar disuelto", de: "Messung des gelösten Zuckergehalts", nl: "Meting van opgelost suikergehalte" },
          { en: "Type of carbonation", es: "Tipo de carbonatación", de: "Art der Karbonisierung", nl: "Type carbonatie" },
          { en: "Bottle size", es: "Tamaño de botella", de: "Flaschengröße", nl: "Flesgrootte" },
          { en: "Acidity level", es: "Nivel de acidez", de: "Säuregrad", nl: "Zuurgradenniveau" }
        ],
        correct: 0,
        explanation: {
          en: "Brix (°Bx) measures the sugar content in a solution. One degree Brix equals 1 gram of sucrose per 100 grams of solution. Typical sodas are 10-13°Bx.",
          es: "Brix (°Bx) mide el contenido de azúcar en una solución. Un grado Brix equivale a 1 gramo de sacarosa por 100 gramos de solución. Los refrescos típicos son 10-13°Bx.",
          de: "Brix (°Bx) misst den Zuckergehalt in einer Lösung. Ein Grad Brix entspricht 1 Gramm Saccharose pro 100 Gramm Lösung. Typische Limonaden haben 10-13°Bx.",
          nl: "Brix (°Bx) meet het suikergehalte in een oplossing. Eén graad Brix is gelijk aan 1 gram sacharose per 100 gram oplossing. Typische frisdranken zijn 10-13°Bx."
        }
      },
      {
        question: {
          en: "What is the main difference between natural and artificial flavors in soft drinks?",
          es: "¿Cuál es la diferencia principal entre sabores naturales y artificiales en refrescos?",
          de: "Was ist der Hauptunterschied zwischen natürlichen und künstlichen Aromen in Erfrischungsgetränken?",
          nl: "Wat is het belangrijkste verschil tussen natuurlijke en kunstmatige smaken in frisdranken?"
        },
        options: [
          { en: "Natural flavors come from plant/animal sources, artificial are synthesized", es: "Sabores naturales vienen de fuentes vegetales/animales, artificiales son sintetizados", de: "Natürliche Aromen stammen aus pflanzlichen/tierischen Quellen, künstliche sind synthetisiert", nl: "Natuurlijke smaken komen van plantaardige/dierlijke bronnen, kunstmatige zijn gesynthetiseerd" },
          { en: "Natural flavors are always healthier", es: "Sabores naturales son siempre más saludables", de: "Natürliche Aromen sind immer gesünder", nl: "Natuurlijke smaken zijn altijd gezonder" },
          { en: "Artificial flavors taste better", es: "Sabores artificiales saben mejor", de: "Künstliche Aromen schmecken besser", nl: "Kunstmatige smaken smaken beter" },
          { en: "There is no difference", es: "No hay diferencia", de: "Es gibt keinen Unterschied", nl: "Er is geen verschil" }
        ],
        correct: 0,
        explanation: {
          en: "Natural flavors are extracted from plants or animals, while artificial flavors are chemically synthesized. Both must be safe for consumption and can have identical chemical structures.",
          es: "Los sabores naturales se extraen de plantas o animales, mientras los sabores artificiales se sintetizan químicamente. Ambos deben ser seguros para consumo y pueden tener estructuras químicas idénticas.",
          de: "Natürliche Aromen werden aus Pflanzen oder Tieren extrahiert, während künstliche Aromen chemisch synthetisiert werden. Beide müssen für den Verzehr sicher sein und können identische chemische Strukturen haben.",
          nl: "Natuurlijke smaken worden geëxtraheerd uit planten of dieren, terwijl kunstmatige smaken chemisch worden gesynthetiseerd. Beide moeten veilig zijn voor consumptie en kunnen identieke chemische structuren hebben."
        }
      },
      {
        question: {
          en: "What causes the 'burn' sensation when drinking highly carbonated beverages?",
          es: "¿Qué causa la sensación de 'ardor' al beber bebidas altamente carbonatadas?",
          de: "Was verursacht das 'brennende' Gefühl beim Trinken stark kohlensäurehaltiger Getränke?",
          nl: "Wat veroorzaakt het 'brandende' gevoel bij het drinken van sterk koolzuurhoudende dranken?"
        },
        options: [
          { en: "Carbonic acid activating pain receptors on the tongue", es: "Ácido carbónico activando receptores de dolor en la lengua", de: "Kohlensäure aktiviert Schmerzrezeptoren auf der Zunge", nl: "Koolzuur activeert pijnreceptoren op de tong" },
          { en: "Sugar content", es: "Contenido de azúcar", de: "Zuckergehalt", nl: "Suikergehalte" },
          { en: "Cold temperature", es: "Temperatura fría", de: "Kalte Temperatur", nl: "Koude temperatuur" },
          { en: "Caffeine", es: "Cafeína", de: "Koffein", nl: "Cafeïne" }
        ],
        correct: 0,
        explanation: {
          en: "The 'burn' or tingle sensation comes from carbonic acid (formed when CO₂ dissolves in water) activating pain receptors (nociceptors) on the tongue, creating a mild pain sensation.",
          es: "La sensación de 'ardor' u hormigueo proviene del ácido carbónico (formado cuando CO₂ se disuelve en agua) activando receptores de dolor (nociceptores) en la lengua, creando una sensación de dolor leve.",
          de: "Das 'brennende' oder prickelnde Gefühl entsteht durch Kohlensäure (gebildet wenn CO₂ sich in Wasser löst), die Schmerzrezeptoren (Nozizeptoren) auf der Zunge aktiviert und ein mildes Schmerzgefühl erzeugt.",
          nl: "Het 'brandende' of tintelende gevoel komt van koolzuur (gevormd wanneer CO₂ oplost in water) dat pijnreceptoren (nociceptoren) op de tong activeert, waardoor een mild pijngevoel ontstaat."
        }
      },
      {
        question: {
          en: "What is the purpose of pasteurization in soft drink production?",
          es: "¿Cuál es el propósito de la pasteurización en la producción de refrescos?",
          de: "Was ist der Zweck der Pasteurisierung in der Erfrischungsgetränkeproduktion?",
          nl: "Wat is het doel van pasteurisatie in frisdrankproductie?"
        },
        options: [
          { en: "Kill harmful microorganisms and extend shelf life", es: "Matar microorganismos dañinos y extender vida útil", de: "Schädliche Mikroorganismen abtöten und Haltbarkeit verlängern", nl: "Schadelijke micro-organismen doden en houdbaarheid verlengen" },
          { en: "Add carbonation", es: "Añadir carbonatación", de: "Kohlensäure hinzufügen", nl: "Carbonatie toevoegen" },
          { en: "Increase sugar content", es: "Aumentar contenido de azúcar", de: "Zuckergehalt erhöhen", nl: "Suikergehalte verhogen" },
          { en: "Change the color", es: "Cambiar el color", de: "Farbe ändern", nl: "Kleur veranderen" }
        ],
        correct: 0,
        explanation: {
          en: "Pasteurization uses heat treatment (typically 72-85°C for 15-30 seconds) to kill potentially harmful bacteria, yeasts, and molds, extending the product's shelf life without refrigeration.",
          es: "La pasteurización usa tratamiento térmico (típicamente 72-85°C por 15-30 segundos) para matar bacterias, levaduras y mohos potencialmente dañinos, extendiendo la vida útil del producto sin refrigeración.",
          de: "Pasteurisierung verwendet Wärmebehandlung (typisch 72-85°C für 15-30 Sekunden), um potenziell schädliche Bakterien, Hefen und Schimmel abzutöten und die Haltbarkeit des Produkts ohne Kühlung zu verlängern.",
          nl: "Pasteurisatie gebruikt warmtebehandeling (typisch 72-85°C gedurende 15-30 seconden) om potentieel schadelijke bacteriën, gisten en schimmels te doden, waardoor de houdbaarheid van het product zonder koeling wordt verlengd."
        }
      },
      {
        question: {
          en: "What is the typical ratio of syrup to carbonated water in fountain soft drinks?",
          es: "¿Cuál es la proporción típica de jarabe a agua carbonatada en refrescos de fuente?",
          de: "Was ist das typische Verhältnis von Sirup zu kohlensäurehaltigem Wasser in Zapfgetränken?",
          nl: "Wat is de typische verhouding van siroop tot koolzuurhoudend water in tapfrisdranken?"
        },
        options: [
          { en: "1:1 (equal parts)", es: "1:1 (partes iguales)", de: "1:1 (gleiche Teile)", nl: "1:1 (gelijke delen)" },
          { en: "1:5 (one part syrup to five parts water)", es: "1:5 (una parte jarabe a cinco partes agua)", de: "1:5 (ein Teil Sirup zu fünf Teilen Wasser)", nl: "1:5 (één deel siroop op vijf delen water)" },
          { en: "1:10 (one part syrup to ten parts water)", es: "1:10 (una parte jarabe a diez partes agua)", de: "1:10 (ein Teil Sirup zu zehn Teilen Wasser)", nl: "1:10 (één deel siroop op tien delen water)" },
          { en: "5:1 (five parts syrup to one part water)", es: "5:1 (cinco partes jarabe a una parte agua)", de: "5:1 (fünf Teile Sirup zu einem Teil Wasser)", nl: "5:1 (vijf delen siroop op één deel water)" }
        ],
        correct: 1,
        explanation: {
          en: "The typical ratio for fountain drinks is 1:5 (one part concentrated syrup to five parts carbonated water). This allows for consistent taste while reducing shipping costs for the concentrated syrup.",
          es: "La proporción típica para bebidas de fuente es 1:5 (una parte jarabe concentrado a cinco partes agua carbonatada). Esto permite un sabor consistente mientras reduce costos de envío del jarabe concentrado.",
          de: "Das typische Verhältnis für Zapfgetränke ist 1:5 (ein Teil konzentrierter Sirup zu fünf Teilen kohlensäurehaltigem Wasser). Dies ermöglicht einen konsistenten Geschmack bei gleichzeitiger Reduzierung der Versandkosten für den konzentrierten Sirup.",
          nl: "De typische verhouding voor tapdrankjes is 1:5 (één deel geconcentreerde siroop op vijf delen koolzuurhoudend water). Dit zorgt voor consistente smaak terwijl het de verzendkosten voor de geconcentreerde siroop vermindert."
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
