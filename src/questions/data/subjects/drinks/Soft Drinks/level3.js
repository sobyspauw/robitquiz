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
        }    },
    {
      question: {
        en: "What is a soft drink?",
        es: "What is a soft drink?",
        de: "What is a soft drink?",
        nl: "What is a soft drink?"
      },
      options: [
        { en: "Non-alcoholic carbonated beverage", es: "Non-alcoholic carbonated beverage", de: "Non-alcoholic carbonated beverage", nl: "Non-alcoholic carbonated beverage" },
        { en: "Alcoholic drink", es: "Alcoholic drink", de: "Alcoholic drink", nl: "Alcoholic drink" },
        { en: "Juice", es: "Juice", de: "Juice", nl: "Juice" },
        { en: "Milk-based drink", es: "Milk-based drink", de: "Milk-based drink", nl: "Milk-based drink" }
      ],
      correct: 0,
      explanation: {
        en: "A soft drink is a non-alcoholic beverage, typically carbonated and sweetened.",
        es: "A soft drink is a non-alcoholic beverage, typically carbonated and sweetened.",
        de: "A soft drink is a non-alcoholic beverage, typically carbonated and sweetened.",
        nl: "A soft drink is a non-alcoholic beverage, typically carbonated and sweetened."
      }
    },
    {
      question: {
        en: "What company makes Coca-Cola?",
        es: "What company makes Coca-Cola?",
        de: "What company makes Coca-Cola?",
        nl: "What company makes Coca-Cola?"
      },
      options: [
        { en: "The Coca-Cola Company", es: "The Coca-Cola Company", de: "The Coca-Cola Company", nl: "The Coca-Cola Company" },
        { en: "PepsiCo", es: "PepsiCo", de: "PepsiCo", nl: "PepsiCo" },
        { en: "Dr Pepper Snapple", es: "Dr Pepper Snapple", de: "Dr Pepper Snapple", nl: "Dr Pepper Snapple" },
        { en: "Nestle", es: "Nestle", de: "Nestle", nl: "Nestle" }
      ],
      correct: 0,
      explanation: {
        en: "Coca-Cola is produced by The Coca-Cola Company, founded in 1886.",
        es: "Coca-Cola is produced by The Coca-Cola Company, founded in 1886.",
        de: "Coca-Cola is produced by The Coca-Cola Company, founded in 1886.",
        nl: "Coca-Cola is produced by The Coca-Cola Company, founded in 1886."
      }
    },
    {
      question: {
        en: "What flavor is Sprite?",
        es: "What flavor is Sprite?",
        de: "What flavor is Sprite?",
        nl: "What flavor is Sprite?"
      },
      options: [
        { en: "Lemon-lime", es: "Lemon-lime", de: "Lemon-lime", nl: "Lemon-lime" },
        { en: "Orange", es: "Orange", de: "Orange", nl: "Orange" },
        { en: "Cola", es: "Cola", de: "Cola", nl: "Cola" },
        { en: "Grape", es: "Grape", de: "Grape", nl: "Grape" }
      ],
      correct: 0,
      explanation: {
        en: "Sprite is a lemon-lime flavored carbonated soft drink.",
        es: "Sprite is a lemon-lime flavored carbonated soft drink.",
        de: "Sprite is a lemon-lime flavored carbonated soft drink.",
        nl: "Sprite is a lemon-lime flavored carbonated soft drink."
      }
    },
    {
      question: {
        en: "What gives soda its fizz?",
        es: "What gives soda its fizz?",
        de: "What gives soda its fizz?",
        nl: "What gives soda its fizz?"
      },
      options: [
        { en: "Carbon dioxide", es: "Carbon dioxide", de: "Carbon dioxide", nl: "Carbon dioxide" },
        { en: "Oxygen", es: "Oxygen", de: "Oxygen", nl: "Oxygen" },
        { en: "Nitrogen", es: "Nitrogen", de: "Nitrogen", nl: "Nitrogen" },
        { en: "Hydrogen", es: "Hydrogen", de: "Hydrogen", nl: "Hydrogen" }
      ],
      correct: 0,
      explanation: {
        en: "Carbon dioxide dissolved under pressure gives soda its characteristic fizz and bubbles.",
        es: "Carbon dioxide dissolved under pressure gives soda its characteristic fizz and bubbles.",
        de: "Carbon dioxide dissolved under pressure gives soda its characteristic fizz and bubbles.",
        nl: "Carbon dioxide dissolved under pressure gives soda its characteristic fizz and bubbles."
      }
    },
    {
      question: {
        en: "What company makes Pepsi?",
        es: "What company makes Pepsi?",
        de: "What company makes Pepsi?",
        nl: "What company makes Pepsi?"
      },
      options: [
        { en: "PepsiCo", es: "PepsiCo", de: "PepsiCo", nl: "PepsiCo" },
        { en: "Coca-Cola Company", es: "Coca-Cola Company", de: "Coca-Cola Company", nl: "Coca-Cola Company" },
        { en: "Dr Pepper", es: "Dr Pepper", de: "Dr Pepper", nl: "Dr Pepper" },
        { en: "Nestle", es: "Nestle", de: "Nestle", nl: "Nestle" }
      ],
      correct: 0,
      explanation: {
        en: "Pepsi is produced by PepsiCo, a major competitor to Coca-Cola.",
        es: "Pepsi is produced by PepsiCo, a major competitor to Coca-Cola.",
        de: "Pepsi is produced by PepsiCo, a major competitor to Coca-Cola.",
        nl: "Pepsi is produced by PepsiCo, a major competitor to Coca-Cola."
      }
    },
    {
      question: {
        en: "What is root beer?",
        es: "What is root beer?",
        de: "What is root beer?",
        nl: "What is root beer?"
      },
      options: [
        { en: "Sweet soft drink flavored with sassafras", es: "Sweet soft drink flavored with sassafras", de: "Sweet soft drink flavored with sassafras", nl: "Sweet soft drink flavored with sassafras" },
        { en: "Alcoholic beer", es: "Alcoholic beer", de: "Alcoholic beer", nl: "Alcoholic beer" },
        { en: "Cola variant", es: "Cola variant", de: "Cola variant", nl: "Cola variant" },
        { en: "Coffee-based drink", es: "Coffee-based drink", de: "Coffee-based drink", nl: "Coffee-based drink" }
      ],
      correct: 0,
      explanation: {
        en: "Root beer is a sweet North American soft drink traditionally flavored with sassafras root.",
        es: "Root beer is a sweet North American soft drink traditionally flavored with sassafras root.",
        de: "Root beer is a sweet North American soft drink traditionally flavored with sassafras root.",
        nl: "Root beer is a sweet North American soft drink traditionally flavored with sassafras root."
      }
    },
    {
      question: {
        en: "What is ginger ale?",
        es: "What is ginger ale?",
        de: "What is ginger ale?",
        nl: "What is ginger ale?"
      },
      options: [
        { en: "Ginger-flavored carbonated drink", es: "Ginger-flavored carbonated drink", de: "Ginger-flavored carbonated drink", nl: "Ginger-flavored carbonated drink" },
        { en: "Alcoholic ginger beer", es: "Alcoholic ginger beer", de: "Alcoholic ginger beer", nl: "Alcoholic ginger beer" },
        { en: "Beer made with ginger", es: "Beer made with ginger", de: "Beer made with ginger", nl: "Beer made with ginger" },
        { en: "Ale with ginger flavor", es: "Ale with ginger flavor", de: "Ale with ginger flavor", nl: "Ale with ginger flavor" }
      ],
      correct: 0,
      explanation: {
        en: "Ginger ale is a non-alcoholic carbonated soft drink flavored with ginger.",
        es: "Ginger ale is a non-alcoholic carbonated soft drink flavored with ginger.",
        de: "Ginger ale is a non-alcoholic carbonated soft drink flavored with ginger.",
        nl: "Ginger ale is a non-alcoholic carbonated soft drink flavored with ginger."
      }
    },
    {
      question: {
        en: "What soft drink is known for its 23 flavors?",
        es: "What soft drink is known for its 23 flavors?",
        de: "What soft drink is known for its 23 flavors?",
        nl: "What soft drink is known for its 23 flavors?"
      },
      options: [
        { en: "Dr Pepper", es: "Dr Pepper", de: "Dr Pepper", nl: "Dr Pepper" },
        { en: "Coca-Cola", es: "Coca-Cola", de: "Coca-Cola", nl: "Coca-Cola" },
        { en: "Pepsi", es: "Pepsi", de: "Pepsi", nl: "Pepsi" },
        { en: "7-Up", es: "7-Up", de: "7-Up", nl: "7-Up" }
      ],
      correct: 0,
      explanation: {
        en: "Dr Pepper is marketed as having a unique blend of 23 flavors.",
        es: "Dr Pepper is marketed as having a unique blend of 23 flavors.",
        de: "Dr Pepper is marketed as having a unique blend of 23 flavors.",
        nl: "Dr Pepper is marketed as having a unique blend of 23 flavors."
      }
    },
    {
      question: {
        en: "What is Mountain Dew?",
        es: "What is Mountain Dew?",
        de: "What is Mountain Dew?",
        nl: "What is Mountain Dew?"
      },
      options: [
        { en: "Citrus-flavored caffeinated soft drink", es: "Citrus-flavored caffeinated soft drink", de: "Citrus-flavored caffeinated soft drink", nl: "Citrus-flavored caffeinated soft drink" },
        { en: "Energy drink", es: "Energy drink", de: "Energy drink", nl: "Energy drink" },
        { en: "Juice", es: "Juice", de: "Juice", nl: "Juice" },
        { en: "Tea-based drink", es: "Tea-based drink", de: "Tea-based drink", nl: "Tea-based drink" }
      ],
      correct: 0,
      explanation: {
        en: "Mountain Dew is a citrus-flavored carbonated soft drink with caffeine.",
        es: "Mountain Dew is a citrus-flavored carbonated soft drink with caffeine.",
        de: "Mountain Dew is a citrus-flavored carbonated soft drink with caffeine.",
        nl: "Mountain Dew is a citrus-flavored carbonated soft drink with caffeine."
      }
    },
    {
      question: {
        en: "What is tonic water?",
        es: "What is tonic water?",
        de: "What is tonic water?",
        nl: "What is tonic water?"
      },
      options: [
        { en: "Carbonated water with quinine", es: "Carbonated water with quinine", de: "Carbonated water with quinine", nl: "Carbonated water with quinine" },
        { en: "Plain carbonated water", es: "Plain carbonated water", de: "Plain carbonated water", nl: "Plain carbonated water" },
        { en: "Sweet soda", es: "Sweet soda", de: "Sweet soda", nl: "Sweet soda" },
        { en: "Flavored water", es: "Flavored water", de: "Flavored water", nl: "Flavored water" }
      ],
      correct: 0,
      explanation: {
        en: "Tonic water is carbonated water flavored with quinine, originally used to prevent malaria.",
        es: "Tonic water is carbonated water flavored with quinine, originally used to prevent malaria.",
        de: "Tonic water is carbonated water flavored with quinine, originally used to prevent malaria.",
        nl: "Tonic water is carbonated water flavored with quinine, originally used to prevent malaria."
      }
    },
    {
      question: {
        en: "What is club soda?",
        es: "What is club soda?",
        de: "What is club soda?",
        nl: "What is club soda?"
      },
      options: [
        { en: "Carbonated water with minerals", es: "Carbonated water with minerals", de: "Carbonated water with minerals", nl: "Carbonated water with minerals" },
        { en: "Alcoholic soda", es: "Alcoholic soda", de: "Alcoholic soda", nl: "Alcoholic soda" },
        { en: "Sweet soda", es: "Sweet soda", de: "Sweet soda", nl: "Sweet soda" },
        { en: "Fruit-flavored soda", es: "Fruit-flavored soda", de: "Fruit-flavored soda", nl: "Fruit-flavored soda" }
      ],
      correct: 0,
      explanation: {
        en: "Club soda is carbonated water with added minerals like sodium bicarbonate or potassium sulfate.",
        es: "Club soda is carbonated water with added minerals like sodium bicarbonate or potassium sulfate.",
        de: "Club soda is carbonated water with added minerals like sodium bicarbonate or potassium sulfate.",
        nl: "Club soda is carbonated water with added minerals like sodium bicarbonate or potassium sulfate."
      }
    },
    {
      question: {
        en: "What color is original Coca-Cola?",
        es: "What color is original Coca-Cola?",
        de: "What color is original Coca-Cola?",
        nl: "What color is original Coca-Cola?"
      },
      options: [
        { en: "Caramel brown", es: "Caramel brown", de: "Caramel brown", nl: "Caramel brown" },
        { en: "Clear", es: "Clear", de: "Clear", nl: "Clear" },
        { en: "Red", es: "Red", de: "Red", nl: "Red" },
        { en: "Black", es: "Black", de: "Black", nl: "Black" }
      ],
      correct: 0,
      explanation: {
        en: "Coca-Cola has a distinctive caramel brown color from caramel coloring.",
        es: "Coca-Cola has a distinctive caramel brown color from caramel coloring.",
        de: "Coca-Cola has a distinctive caramel brown color from caramel coloring.",
        nl: "Coca-Cola has a distinctive caramel brown color from caramel coloring."
      }
    },
    {
      question: {
        en: "What is Fanta?",
        es: "What is Fanta?",
        de: "What is Fanta?",
        nl: "What is Fanta?"
      },
      options: [
        { en: "Orange-flavored soft drink", es: "Orange-flavored soft drink", de: "Orange-flavored soft drink", nl: "Orange-flavored soft drink" },
        { en: "Cola drink", es: "Cola drink", de: "Cola drink", nl: "Cola drink" },
        { en: "Lemon-lime soda", es: "Lemon-lime soda", de: "Lemon-lime soda", nl: "Lemon-lime soda" },
        { en: "Root beer", es: "Root beer", de: "Root beer", nl: "Root beer" }
      ],
      correct: 0,
      explanation: {
        en: "Fanta is a fruit-flavored carbonated soft drink, most commonly orange-flavored.",
        es: "Fanta is a fruit-flavored carbonated soft drink, most commonly orange-flavored.",
        de: "Fanta is a fruit-flavored carbonated soft drink, most commonly orange-flavored.",
        nl: "Fanta is a fruit-flavored carbonated soft drink, most commonly orange-flavored."
      }
    },
    {
      question: {
        en: "What does 'diet' or 'zero' soda mean?",
        es: "What does 'diet' or 'zero' soda mean?",
        de: "What does 'diet' or 'zero' soda mean?",
        nl: "What does 'diet' or 'zero' soda mean?"
      },
      options: [
        { en: "Sweetened with artificial sweeteners, no sugar", es: "Sweetened with artificial sweeteners, no sugar", de: "Sweetened with artificial sweeteners, no sugar", nl: "Sweetened with artificial sweeteners, no sugar" },
        { en: "Less carbonation", es: "Less carbonation", de: "Less carbonation", nl: "Less carbonation" },
        { en: "No caffeine", es: "No caffeine", de: "No caffeine", nl: "No caffeine" },
        { en: "Organic ingredients", es: "Organic ingredients", de: "Organic ingredients", nl: "Organic ingredients" }
      ],
      correct: 0,
      explanation: {
        en: "Diet or zero sodas use artificial sweeteners instead of sugar, reducing calories.",
        es: "Diet or zero sodas use artificial sweeteners instead of sugar, reducing calories.",
        de: "Diet or zero sodas use artificial sweeteners instead of sugar, reducing calories.",
        nl: "Diet or zero sodas use artificial sweeteners instead of sugar, reducing calories."
      }
    },
    {
      question: {
        en: "What is cream soda?",
        es: "What is cream soda?",
        de: "What is cream soda?",
        nl: "What is cream soda?"
      },
      options: [
        { en: "Vanilla-flavored carbonated drink", es: "Vanilla-flavored carbonated drink", de: "Vanilla-flavored carbonated drink", nl: "Vanilla-flavored carbonated drink" },
        { en: "Soda with cream", es: "Soda with cream", de: "Soda with cream", nl: "Soda with cream" },
        { en: "Chocolate soda", es: "Chocolate soda", de: "Chocolate soda", nl: "Chocolate soda" },
        { en: "Coffee soda", es: "Coffee soda", de: "Coffee soda", nl: "Coffee soda" }
      ],
      correct: 0,
      explanation: {
        en: "Cream soda is a sweet carbonated beverage flavored with vanilla.",
        es: "Cream soda is a sweet carbonated beverage flavored with vanilla.",
        de: "Cream soda is a sweet carbonated beverage flavored with vanilla.",
        nl: "Cream soda is a sweet carbonated beverage flavored with vanilla."
      }
    },
    {
      question: {
        en: "What is energy drink classified as?",
        es: "What is energy drink classified as?",
        de: "What is energy drink classified as?",
        nl: "What is energy drink classified as?"
      },
      options: [
        { en: "Soft drink with added stimulants", es: "Soft drink with added stimulants", de: "Soft drink with added stimulants", nl: "Soft drink with added stimulants" },
        { en: "Sports drink", es: "Sports drink", de: "Sports drink", nl: "Sports drink" },
        { en: "Juice", es: "Juice", de: "Juice", nl: "Juice" },
        { en: "Tea", es: "Tea", de: "Tea", nl: "Tea" }
      ],
      correct: 0,
      explanation: {
        en: "Energy drinks are soft drinks containing caffeine and other stimulants like taurine.",
        es: "Energy drinks are soft drinks containing caffeine and other stimulants like taurine.",
        de: "Energy drinks are soft drinks containing caffeine and other stimulants like taurine.",
        nl: "Energy drinks are soft drinks containing caffeine and other stimulants like taurine."
      }
    },
    {
      question: {
        en: "What is 7-Up?",
        es: "What is 7-Up?",
        de: "What is 7-Up?",
        nl: "What is 7-Up?"
      },
      options: [
        { en: "Lemon-lime flavored soft drink", es: "Lemon-lime flavored soft drink", de: "Lemon-lime flavored soft drink", nl: "Lemon-lime flavored soft drink" },
        { en: "Cola", es: "Cola", de: "Cola", nl: "Cola" },
        { en: "Orange soda", es: "Orange soda", de: "Orange soda", nl: "Orange soda" },
        { en: "Root beer", es: "Root beer", de: "Root beer", nl: "Root beer" }
      ],
      correct: 0,
      explanation: {
        en: "7-Up is a lemon-lime flavored non-caffeinated soft drink.",
        es: "7-Up is a lemon-lime flavored non-caffeinated soft drink.",
        de: "7-Up is a lemon-lime flavored non-caffeinated soft drink.",
        nl: "7-Up is a lemon-lime flavored non-caffeinated soft drink."
      }
    },
    {
      question: {
        en: "What is the sweetener in regular soda?",
        es: "What is the sweetener in regular soda?",
        de: "What is the sweetener in regular soda?",
        nl: "What is the sweetener in regular soda?"
      },
      options: [
        { en: "Sugar or high-fructose corn syrup", es: "Sugar or high-fructose corn syrup", de: "Sugar or high-fructose corn syrup", nl: "Sugar or high-fructose corn syrup" },
        { en: "Honey", es: "Honey", de: "Honey", nl: "Honey" },
        { en: "Artificial sweetener", es: "Artificial sweetener", de: "Artificial sweetener", nl: "Artificial sweetener" },
        { en: "Fruit juice", es: "Fruit juice", de: "Fruit juice", nl: "Fruit juice" }
      ],
      correct: 0,
      explanation: {
        en: "Regular sodas are typically sweetened with sugar or high-fructose corn syrup.",
        es: "Regular sodas are typically sweetened with sugar or high-fructose corn syrup.",
        de: "Regular sodas are typically sweetened with sugar or high-fructose corn syrup.",
        nl: "Regular sodas are typically sweetened with sugar or high-fructose corn syrup."
      }
    },
    {
      question: {
        en: "What is seltzer water?",
        es: "What is seltzer water?",
        de: "What is seltzer water?",
        nl: "What is seltzer water?"
      },
      options: [
        { en: "Plain carbonated water", es: "Plain carbonated water", de: "Plain carbonated water", nl: "Plain carbonated water" },
        { en: "Flavored soda", es: "Flavored soda", de: "Flavored soda", nl: "Flavored soda" },
        { en: "Mineral water", es: "Mineral water", de: "Mineral water", nl: "Mineral water" },
        { en: "Tonic water", es: "Tonic water", de: "Tonic water", nl: "Tonic water" }
      ],
      correct: 0,
      explanation: {
        en: "Seltzer water is simply water that has been carbonated, with no added minerals or flavoring.",
        es: "Seltzer water is simply water that has been carbonated, with no added minerals or flavoring.",
        de: "Seltzer water is simply water that has been carbonated, with no added minerals or flavoring.",
        nl: "Seltzer water is simply water that has been carbonated, with no added minerals or flavoring."
      }
    },
    {
      question: {
        en: "What soft drink was originally a mixer for whiskey?",
        es: "What soft drink was originally a mixer for whiskey?",
        de: "What soft drink was originally a mixer for whiskey?",
        nl: "What soft drink was originally a mixer for whiskey?"
      },
      options: [
        { en: "Ginger ale", es: "Ginger ale", de: "Ginger ale", nl: "Ginger ale" },
        { en: "Coca-Cola", es: "Coca-Cola", de: "Coca-Cola", nl: "Coca-Cola" },
        { en: "Sprite", es: "Sprite", de: "Sprite", nl: "Sprite" },
        { en: "Root beer", es: "Root beer", de: "Root beer", nl: "Root beer" }
      ],
      correct: 0,
      explanation: {
        en: "Ginger ale was originally created in the 1850s and often used as a mixer for whiskey.",
        es: "Ginger ale was originally created in the 1850s and often used as a mixer for whiskey.",
        de: "Ginger ale was originally created in the 1850s and often used as a mixer for whiskey.",
        nl: "Ginger ale was originally created in the 1850s and often used as a mixer for whiskey."
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
