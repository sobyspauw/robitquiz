// Cocktails Quiz - Level 8
(function() {
  const level8 = {
    name: {
          "en": "Professional Mixology & Advanced Bartending",
          "es": "Mixología Profesional y Bartending Avanzado",
          "de": "Professionelle Mixologie & Fortgeschrittenes Bartending",
          "nl": "Professionele Mixologie & Geavanceerde Bartending"
    },
    questions: [
      {
        question: {
                  "en": "What is the difference between 'clarification' and 'fat-washing' in modern cocktail techniques?",
                  "es": "¿Cuál es la diferencia entre 'clarificación' y 'lavado de grasa' en técnicas modernas de cócteles?",
                  "de": "Was ist der Unterschied zwischen 'Klärung' und 'Fett-Washing' in modernen Cocktail-Techniken?",
                  "nl": "Wat is het verschil tussen 'clarificatie' en 'fat-washing' in moderne cocktailtechnieken?"
        },
        options: [
        {
                  "en": "Clarification is for spirits only, fat-washing is for mixers",
                  "es": "Clarificación es solo para licores, lavado de grasa es para mezcladores",
                  "de": "Klärung ist nur für Spirituosen, Fett-Washing ist für Mixer",
                  "nl": "Clarificatie is alleen voor sterke drank, fat-washing is voor mixers"
        },
        {
                  "en": "Clarification removes particles for transparency, fat-washing infuses flavor using fats then removes them",
                  "es": "Clarificación remueve partículas para transparencia, lavado de grasa infunde sabor usando grasas luego las remueve",
                  "de": "Klärung entfernt Partikel für Transparenz, Fett-Washing infundiert Geschmack mit Fetten und entfernt sie dann",
                  "nl": "Clarificatie verwijdert deeltjes voor transparantie, fat-washing infuseert smaak met vetten en verwijdert deze daarna"
        },
        {
                  "en": "They are the same technique with different names",
                  "es": "Son la misma técnica con nombres diferentes",
                  "de": "Sie sind dieselbe Technik mit verschiedenen Namen",
                  "nl": "Het zijn dezelfde technieken met verschillende namen"
        },
        {
                  "en": "Fat-washing removes alcohol, clarification adds it",
                  "es": "Lavado de grasa remueve alcohol, clarificación lo añade",
                  "de": "Fett-Washing entfernt Alkohol, Klärung fügt ihn hinzu",
                  "nl": "Fat-washing verwijdert alcohol, clarificatie voegt het toe"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Clarification removes particles and cloudiness to create crystal-clear cocktails using techniques like agar filtration or milk clarification. Fat-washing involves infusing spirits with fat-soluble flavors (like bacon fat or butter), then freezing to separate and remove the solidified fat, leaving behind the flavors. Both are advanced techniques used in modern molecular mixology to achieve specific flavor profiles and textures.",
                  "es": "La clarificación remueve partículas y turbidez para crear cócteles cristalinos usando técnicas como filtración con agar o clarificación con leche. El lavado de grasa implica infundir licores con sabores solubles en grasa (como grasa de tocino o mantequilla), luego congelar para separar y remover la grasa solidificada, dejando los sabores. Ambas son técnicas avanzadas usadas en mixología molecular moderna para lograr perfiles específicos de sabor y texturas.",
                  "de": "Klärung entfernt Partikel und Trübung, um kristallklare Cocktails mit Techniken wie Agar-Filtration oder Milchklärung zu schaffen. Fett-Washing beinhaltet das Infundieren von Spirituosen mit fettlöslichen Aromen (wie Speckfett oder Butter), dann Einfrieren zum Trennen und Entfernen des erstarrten Fetts, wobei die Aromen zurückbleiben. Beide sind fortgeschrittene Techniken in der modernen molekularen Mixologie für spezifische Geschmacksprofile und Texturen.",
                  "nl": "Clarificatie verwijdert deeltjes en troebeling om kristalheldere cocktails te creëren met technieken zoals agar filtratie of melk clarificatie. Fat-washing houdt in dat sterke dranken worden geïnfuseerd met vetoplosbare smaken (zoals spekvet of boter), dan bevroren om het gestolde vet te scheiden en verwijderen, waarbij de smaken achterblijven. Beide zijn geavanceerde technieken in moderne moleculaire mixologie voor specifieke smaakprofielen en texturen."
        }
      },
      {
        question: {
                  "en": "What is the purpose of 'oleo saccharum' in classic cocktail preparation?",
                  "es": "¿Cuál es el propósito del 'oleo saccharum' en la preparación clásica de cócteles?",
                  "de": "Was ist der Zweck von 'Oleo Saccharum' in der klassischen Cocktail-Zubereitung?",
                  "nl": "Wat is het doel van 'oleo saccharum' in klassieke cocktailbereiding?"
        },
        options: [
        {
                  "en": "To extract citrus oils from peels using sugar, creating a concentrated flavor base",
                  "es": "Para extraer aceites cítricos de cáscaras usando azúcar, creando una base de sabor concentrada",
                  "de": "Um Zitrusöle aus Schalen mit Zucker zu extrahieren und eine konzentrierte Geschmacksbasis zu schaffen",
                  "nl": "Om citrusoliën uit schillen te extraheren met suiker, wat een geconcentreerde smaakbasis creëert"
        },
        {
                  "en": "To preserve spirits for longer storage",
                  "es": "Para conservar licores para almacenamiento más largo",
                  "de": "Um Spirituosen für längere Lagerung zu konservieren",
                  "nl": "Om sterke dranken te bewaren voor langere opslag"
        },
        {
                  "en": "To add sweetness without changing color",
                  "es": "Para añadir dulzura sin cambiar color",
                  "de": "Um Süße hinzuzufügen ohne Farbveränderung",
                  "nl": "Om zoetheid toe te voegen zonder kleur te veranderen"
        },
        {
                  "en": "To create foam in cocktails",
                  "es": "Para crear espuma en cócteles",
                  "de": "Um Schaum in Cocktails zu erzeugen",
                  "nl": "Om schuim in cocktails te creëren"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Oleo saccharum (Latin for 'oil sugar') is a traditional technique where citrus peels are mixed with sugar, which extracts the essential oils from the peel through osmosis. This creates a highly concentrated, flavorful syrup that captures the bright, aromatic compounds from citrus oils. It's commonly used in punches and classic cocktails like Whiskey Punch, providing intense citrus flavor without the bitterness that can come from muddling peels directly.",
                  "es": "Oleo saccharum (latín para 'aceite de azúcar') es una técnica tradicional donde cáscaras cítricas se mezclan con azúcar, que extrae los aceites esenciales de la cáscara a través de ósmosis. Esto crea un jarabe altamente concentrado y sabroso que captura los compuestos aromáticos brillantes de los aceites cítricos. Se usa comúnmente en ponches y cócteles clásicos como Whiskey Punch, proporcionando sabor cítrico intenso sin la amargura que puede venir de machacar cáscaras directamente.",
                  "de": "Oleo Saccharum (Latein für 'Ölzucker') ist eine traditionelle Technik, bei der Zitrusschalen mit Zucker gemischt werden, der die ätherischen Öle aus der Schale durch Osmose extrahiert. Dies erzeugt einen hochkonzentrierten, geschmackvollen Sirup, der die hellen, aromatischen Verbindungen aus Zitrusölen einfängt. Es wird häufig in Punches und klassischen Cocktails wie Whiskey Punch verwendet und liefert intensiven Zitrusgeschmack ohne die Bitterkeit, die beim direkten Muddeln von Schalen entstehen kann.",
                  "nl": "Oleo saccharum (Latijn voor 'olie suiker') is een traditionele techniek waarbij citrusschillen worden gemengd met suiker, die de essentiële oliën uit de schil extraheert door osmose. Dit creëert een zeer geconcentreerde, smaakvolle siroop die de heldere, aromatische verbindingen uit citrusoliën vangt. Het wordt vaak gebruikt in punches en klassieke cocktails zoals Whiskey Punch, wat intense citrussmaak biedt zonder de bitterheid die kan komen van het direct muddlen van schillen."
        }
      },
      {
        question: {
                  "en": "What is the 'reverse dry shake' technique and when is it preferred?",
                  "es": "¿Qué es la técnica de 'agitado seco inverso' y cuándo se prefiere?",
                  "de": "Was ist die 'Reverse Dry Shake' Technik und wann wird sie bevorzugt?",
                  "nl": "Wat is de 'reverse dry shake' techniek en wanneer heeft deze de voorkeur?"
        },
        options: [
        {
                  "en": "Shake with ice first, then without ice - preferred for better foam stability and temperature control",
                  "es": "Agitar con hielo primero, luego sin hielo - preferido para mejor estabilidad de espuma y control de temperatura",
                  "de": "Zuerst mit Eis schütteln, dann ohne Eis - bevorzugt für bessere Schaumstabilität und Temperaturkontrolle",
                  "nl": "Eerst schudden met ijs, dan zonder ijs - de voorkeur voor betere schuimstabiliteit en temperatuurcontrole"
        },
        {
                  "en": "Shaking upside down",
                  "es": "Agitar boca abajo",
                  "de": "Kopfüber schütteln",
                  "nl": "Ondersteboven schudden"
        },
        {
                  "en": "Using two shakers simultaneously",
                  "es": "Usar dos cocteleras simultáneamente",
                  "de": "Zwei Shaker gleichzeitig verwenden",
                  "nl": "Twee shakers tegelijkertijd gebruiken"
        },
        {
                  "en": "Adding ingredients in reverse order",
                  "es": "Añadir ingredientes en orden inverso",
                  "de": "Zutaten in umgekehrter Reihenfolge hinzufügen",
                  "nl": "Ingrediënten in omgekeerde volgorde toevoegen"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "The reverse dry shake involves shaking with ice first to chill and dilute the cocktail, straining out the ice, then performing a second shake without ice. This technique is often preferred over the traditional dry shake (no ice first, then with ice) because it provides better temperature control - the drink stays properly chilled while still achieving excellent foam texture. It's particularly useful for egg white cocktails where you want optimal foam without compromising temperature.",
                  "es": "El agitado seco inverso implica agitar con hielo primero para enfriar y diluir el cóctel, colar el hielo, luego realizar un segundo agitado sin hielo. Esta técnica a menudo se prefiere sobre el agitado seco tradicional (sin hielo primero, luego con hielo) porque proporciona mejor control de temperatura - la bebida se mantiene apropiadamente fría mientras logra excelente textura de espuma. Es particularmente útil para cócteles con clara de huevo donde quieres espuma óptima sin comprometer la temperatura.",
                  "de": "Der Reverse Dry Shake beinhaltet zuerst Schütteln mit Eis zum Kühlen und Verdünnen des Cocktails, Abseihen des Eises, dann einen zweiten Schüttelvorgang ohne Eis. Diese Technik wird oft dem traditionellen Dry Shake (zuerst ohne Eis, dann mit Eis) vorgezogen, weil sie bessere Temperaturkontrolle bietet - das Getränk bleibt ordnungsgemäß gekühlt, während trotzdem exzellente Schaumtextur erreicht wird. Es ist besonders nützlich für Eiweiß-Cocktails, wo optimaler Schaum ohne Temperaturkompromiss gewünscht wird.",
                  "nl": "De reverse dry shake houdt in dat eerst met ijs wordt geschud om de cocktail te koelen en verdunnen, het ijs wordt weggezeeft, dan een tweede schud zonder ijs. Deze techniek heeft vaak de voorkeur boven de traditionele dry shake (eerst geen ijs, dan met ijs) omdat het betere temperatuurcontrole biedt - de drank blijft goed gekoeld terwijl nog steeds uitstekende schuimtextuur wordt bereikt. Het is bijzonder nuttig voor eiwit cocktails waar je optimaal schuim wilt zonder temperatuur te compromitteren."
        }
      },
      {
        question: {
                  "en": "What role does 'acid adjustment' play in modern cocktail balancing?",
                  "es": "¿Qué papel juega el 'ajuste de acidez' en el equilibrio moderno de cócteles?",
                  "de": "Welche Rolle spielt 'Säure-Anpassung' beim modernen Cocktail-Balancing?",
                  "nl": "Welke rol speelt 'zuurgraad aanpassing' in moderne cocktail balancering?"
        },
        options: [
        {
                  "en": "Using only vinegar-based acids",
                  "es": "Usar solo ácidos basados en vinagre",
                  "de": "Nur essigbasierte Säuren verwenden",
                  "nl": "Alleen azijngebaseerde zuren gebruiken"
        },
        {
                  "en": "Removing all acidic ingredients",
                  "es": "Remover todos los ingredientes ácidos",
                  "de": "Alle säurehaltigen Zutaten entfernen",
                  "nl": "Alle zure ingrediënten verwijderen"
        },
        {
                  "en": "Precisely controlling pH levels to optimize flavor perception and balance sweetness",
                  "es": "Controlar precisamente los niveles de pH para optimizar la percepción del sabor y equilibrar la dulzura",
                  "de": "Präzise Kontrolle der pH-Werte zur Optimierung der Geschmackswahrnehmung und Balance der Süße",
                  "nl": "Nauwkeurige controle van pH-niveaus om smaakperceptie te optimaliseren en zoetheid te balanceren"
        },
        {
                  "en": "Adding more citrus juice to any cocktail",
                  "es": "Añadir más jugo cítrico a cualquier cóctel",
                  "de": "Mehr Zitrusaft zu jedem Cocktail hinzufügen",
                  "nl": "Meer citrusjus toevoegen aan elke cocktail"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Acid adjustment involves precisely controlling the pH and acidity levels in cocktails to achieve optimal flavor balance. Professional bartenders may use pH meters and various acids (citric, malic, tartaric, acetic) to fine-tune the perception of sweetness, enhance flavor clarity, and create perfect balance. Different acids provide different flavor profiles - citric acid gives clean tartness, malic acid provides apple-like brightness, while tartaric acid offers wine-like complexity. This technique allows for consistent, reproducible cocktails with perfect acid-sweet balance.",
                  "es": "El ajuste de acidez implica controlar precisamente los niveles de pH y acidez en cócteles para lograr equilibrio óptimo de sabor. Los bartenders profesionales pueden usar medidores de pH y varios ácidos (cítrico, málico, tartárico, acético) para afinar la percepción de dulzura, mejorar la claridad del sabor y crear equilibrio perfecto. Diferentes ácidos proporcionan diferentes perfiles de sabor - ácido cítrico da acidez limpia, ácido málico proporciona brillo similar a manzana, mientras ácido tartárico ofrece complejidad similar al vino. Esta técnica permite cócteles consistentes y reproducibles con equilibrio ácido-dulce perfecto.",
                  "de": "Säure-Anpassung beinhaltet die präzise Kontrolle von pH- und Säurewerten in Cocktails zur Erreichung optimaler Geschmacksbalance. Professionelle Bartender können pH-Meter und verschiedene Säuren (Zitronensäure, Apfelsäure, Weinsäure, Essigsäure) verwenden, um die Süßewahrnehmung zu optimieren, Geschmacksklarheit zu verbessern und perfekte Balance zu schaffen. Verschiedene Säuren bieten verschiedene Geschmacksprofile - Zitronensäure gibt saubere Säure, Apfelsäure bietet apfelähnliche Helligkeit, während Weinsäure weinähnliche Komplexität bietet. Diese Technik ermöglicht konsistente, reproduzierbare Cocktails mit perfekter Säure-Süße-Balance.",
                  "nl": "Zuurgraad aanpassing houdt in dat pH- en zuurgraderniveaus in cocktails precies worden gecontroleerd om optimale smaakbalans te bereiken. Professionele bartenders kunnen pH-meters en verschillende zuren (citroenzuur, appelzuur, wijnsteen, azijnzuur) gebruiken om de perceptie van zoetheid af te stellen, smaakhelderheid te verbeteren en perfecte balans te creëren. Verschillende zuren bieden verschillende smaakprofielen - citroenzuur geeft schone zuurheid, appelzuur biedt appelachtige helderheid, terwijl wijnsteen wijnachtige complexiteit biedt. Deze techniek maakt consistente, reproduceerbare cocktails mogelijk met perfecte zuur-zoet balans."
        }
      },
      {
        question: {
                  "en": "What is 'batching' in professional cocktail service and what are its key considerations?",
                  "es": "¿Qué es el 'loteado' en servicio profesional de cócteles y cuáles son sus consideraciones clave?",
                  "de": "Was ist 'Batching' im professionellen Cocktail-Service und was sind die wichtigsten Überlegungen?",
                  "nl": "Wat is 'batching' in professionele cocktailservice en wat zijn de belangrijkste overwegingen?"
        },
        options: [
        {
                  "en": "Pre-mixing large quantities while accounting for dilution, ingredient stability, and temperature control",
                  "es": "Pre-mezclar grandes cantidades considerando dilución, estabilidad de ingredientes y control de temperatura",
                  "de": "Vormischen großer Mengen unter Berücksichtigung von Verdünnung, Zutatenstabilität und Temperaturkontrolle",
                  "nl": "Vooraf mengen van grote hoeveelheden met aandacht voor verdunning, ingrediënt stabiliteit en temperatuurcontrole"
        },
        {
                  "en": "Grouping similar colored cocktails",
                  "es": "Agrupar cócteles de colores similares",
                  "de": "Cocktails mit ähnlichen Farben gruppieren",
                  "nl": "Cocktails met vergelijkbare kleuren groeperen"
        },
        {
                  "en": "Using only batch-distilled spirits",
                  "es": "Usar solo licores destilados en lotes",
                  "de": "Nur chargendestillierte Spirituosen verwenden",
                  "nl": "Alleen batch-gedestilleerde sterke dranken gebruiken"
        },
        {
                  "en": "Serving multiple cocktails at once",
                  "es": "Servir múltiples cócteles a la vez",
                  "de": "Mehrere Cocktails gleichzeitig servieren",
                  "nl": "Meerdere cocktails tegelijk serveren"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Batching involves pre-mixing large quantities of cocktails for efficient service during busy periods. Key considerations include: calculating proper dilution (typically 20-25% water to replicate shaking/stirring), ingredient stability (citrus and dairy-based ingredients may separate or spoil), temperature control (keeping batched cocktails chilled), shelf life (most last 3-5 days refrigerated), and final touches (garnishes, foam, and carbonation added per serve). Professional batching requires understanding how each ingredient behaves over time and adjusting recipes accordingly.",
                  "es": "El loteado implica pre-mezclar grandes cantidades de cócteles para servicio eficiente durante períodos ocupados. Consideraciones clave incluyen: calcular dilución apropiada (típicamente 20-25% agua para replicar agitado/revuelto), estabilidad de ingredientes (ingredientes cítricos y lácteos pueden separarse o echarse a perder), control de temperatura (mantener cócteles loteados fríos), vida útil (la mayoría duran 3-5 días refrigerados), y toques finales (guarniciones, espuma y carbonatación añadidos por servicio). El loteado profesional requiere entender cómo se comporta cada ingrediente con el tiempo y ajustar recetas en consecuencia.",
                  "de": "Batching beinhaltet das Vormischen großer Cocktail-Mengen für effizienten Service während geschäftiger Zeiten. Wichtige Überlegungen umfassen: ordnungsgemäße Verdünnungsberechnung (typisch 20-25% Wasser zur Replikation von Schütteln/Rühren), Zutatenstabilität (Zitrus- und Milchprodukt-basierte Zutaten können sich trennen oder verderben), Temperaturkontrolle (Batch-Cocktails gekühlt halten), Haltbarkeit (die meisten halten 3-5 Tage gekühlt), und finale Touches (Garnituren, Schaum und Kohlensäure pro Service hinzugefügt). Professionelles Batching erfordert Verständnis, wie sich jede Zutat über Zeit verhält und entsprechende Rezeptanpassungen.",
                  "nl": "Batching houdt in dat grote hoeveelheden cocktails vooraf worden gemengd voor efficiënte service tijdens drukke perioden. Belangrijke overwegingen zijn: juiste verdunning berekenen (typisch 20-25% water om schudden/roeren na te bootsen), ingrediënt stabiliteit (citrus en zuivel-gebaseerde ingrediënten kunnen scheiden of bederven), temperatuurcontrole (batch cocktails gekoeld houden), houdbaarheid (meeste houden 3-5 dagen gekoeld), en laatste touches (garneringen, schuim en koolzuur per serving toegevoegd). Professioneel batching vereist begrip van hoe elk ingrediënt zich gedraagt over tijd en recepten dienovereenkomstig aanpassen."
        }
      },
      {
        question: {
                  "en": "What is the significance of 'proof' adjustment in spirit-forward cocktails?",
                  "es": "¿Cuál es la importancia del ajuste de 'graduación' en cócteles con predominio de licor?",
                  "de": "Was ist die Bedeutung der 'Proof'-Anpassung in spirituosenbetonten Cocktails?",
                  "nl": "Wat is de betekenis van 'alcoholgehalte' aanpassing in sterke drank-gericht cocktails?"
        },
        options: [
        {
                  "en": "Controlling alcohol percentage to achieve optimal flavor integration and drinking experience",
                  "es": "Controlar el porcentaje de alcohol para lograr integración óptima de sabor y experiencia de bebida",
                  "de": "Alkoholprozentsatz kontrollieren für optimale Geschmacksintegration und Trinkerfahrung",
                  "nl": "Alcoholpercentage controleren voor optimale smaakintegratie en drinkervaring"
        },
        {
                  "en": "Proving the cocktail is authentic",
                  "es": "Probar que el cóctel es auténtico",
                  "de": "Beweisen, dass der Cocktail authentisch ist",
                  "nl": "Bewijzen dat de cocktail authentiek is"
        },
        {
                  "en": "Adding more proof spirits to increase strength",
                  "es": "Añadir licores de mayor graduación para aumentar fuerza",
                  "de": "Höherprozentige Spirituosen hinzufügen für mehr Stärke",
                  "nl": "Sterke dranken met hoger alcoholgehalte toevoegen voor meer kracht"
        },
        {
                  "en": "Making all cocktails exactly 40% alcohol",
                  "es": "Hacer todos los cócteles exactamente 40% alcohol",
                  "de": "Alle Cocktails auf genau 40% Alkohol bringen",
                  "nl": "Alle cocktails precies 40% alcohol maken"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Proof adjustment involves carefully controlling the final alcohol percentage in spirit-forward cocktails (like Martinis, Manhattans, or Negronis) to achieve the optimal drinking experience. Different proof levels affect mouthfeel, flavor perception, and alcohol burn. Bartenders might dilute high-proof spirits or adjust ratios to reach ideal proof ranges (typically 25-35% ABV for most cocktails). This ensures proper flavor integration, reduces harsh alcohol notes, and creates a more balanced, enjoyable drink. Understanding proof allows for consistent reproduction of cocktails regardless of varying base spirit strengths.",
                  "es": "El ajuste de graduación implica controlar cuidadosamente el porcentaje final de alcohol en cócteles con predominio de licor (como Martinis, Manhattans o Negronis) para lograr la experiencia óptima de bebida. Diferentes niveles de graduación afectan la sensación en boca, percepción del sabor y ardor del alcohol. Los bartenders pueden diluir licores de alta graduación o ajustar proporciones para alcanzar rangos ideales de graduación (típicamente 25-35% ABV para la mayoría de cócteles). Esto asegura integración apropiada de sabor, reduce notas ásperas de alcohol y crea una bebida más equilibrada y disfrutable. Entender la graduación permite reproducción consistente de cócteles independientemente de las fuerzas variables de licores base.",
                  "de": "Proof-Anpassung beinhaltet die sorgfältige Kontrolle des finalen Alkoholprozentsatzes in spirituosenbetonten Cocktails (wie Martinis, Manhattans oder Negronis) zur Erreichung der optimalen Trinkerfahrung. Verschiedene Proof-Level beeinflussen Mundgefühl, Geschmackswahrnehmung und Alkoholbrennen. Bartender können hochprozentige Spirituosen verdünnen oder Verhältnisse anpassen, um ideale Proof-Bereiche zu erreichen (typisch 25-35% ABV für die meisten Cocktails). Dies gewährleistet ordnungsgemäße Geschmacksintegration, reduziert harsche Alkoholnoten und schafft ein ausgewogeneres, angenehmeres Getränk. Proof-Verständnis ermöglicht konsistente Cocktail-Reproduktion unabhängig von variierenden Basisspirituosen-Stärken.",
                  "nl": "Alcoholgehalte aanpassing houdt in dat het finale alcoholpercentage in sterke drank-gerichte cocktails (zoals Martinis, Manhattans of Negronis) zorgvuldig wordt gecontroleerd om de optimale drinkervaring te bereiken. Verschillende alcoholgehaltes beïnvloeden mondgevoel, smaakperceptie en alcoholbrand. Bartenders kunnen sterke dranken met hoog alcoholgehalte verdunnen of verhoudingen aanpassen om ideale alcoholbereiken te bereiken (typisch 25-35% ABV voor meeste cocktails). Dit verzekert juiste smaakintegratie, vermindert harde alcoholnoten en creëert een meer gebalanceerde, plezierige drank. Alcoholgehalte begrip maakt consistente cocktail reproductie mogelijk ongeacht variërende basis sterke drank sterktes."
        }
      },
      {
        question: {
                  "en": "What is 'express and discard' in citrus oil technique?",
                  "es": "¿Qué es 'expresar y descartar' en la técnica de aceite cítrico?",
                  "de": "Was ist 'Express and Discard' in der Zitrusöl-Technik?",
                  "nl": "Wat is 'uitpersen en weggooien' in citrusolie techniek?"
        },
        options: [
        {
                  "en": "Throwing away all citrus peels",
                  "es": "Tirar todas las cáscaras cítricas",
                  "de": "Alle Zitrusschalen wegwerfen",
                  "nl": "Alle citrusschillen weggooien"
        },
        {
                  "en": "Expressing oils over the drink then discarding the peel to avoid bitter pith flavors",
                  "es": "Expresar aceites sobre la bebida luego descartar la cáscara para evitar sabores amargos de médula",
                  "de": "Öle über das Getränk ausdrücken, dann die Schale entsorgen, um bittere Mark-Aromen zu vermeiden",
                  "nl": "Oliën uitpersen over de drank en dan de schil weggooien om bittere wit smaken te vermijden"
        },
        {
                  "en": "Adding citrus oil directly from a bottle",
                  "es": "Añadir aceite cítrico directamente de una botella",
                  "de": "Zitrusöl direkt aus einer Flasche hinzufügen",
                  "nl": "Citrusolie direct uit een fles toevoegen"
        },
        {
                  "en": "Using only the juice, not the peel",
                  "es": "Usar solo el jugo, no la cáscara",
                  "de": "Nur den Saft verwenden, nicht die Schale",
                  "nl": "Alleen het sap gebruiken, niet de schil"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Express and discard is a precise citrus technique where the bartender expresses (squeezes) the essential oils from a citrus peel over the cocktail to release aromatic compounds, then discards the peel rather than dropping it into the drink. This captures the bright, volatile citrus oils without introducing the bitter flavors from the white pith that can develop over time. It's commonly used in spirit-forward cocktails where you want the aroma and initial citrus note without ongoing extraction of bitter compounds. The oils provide immediate aromatic impact while avoiding potential off-flavors.",
                  "es": "Expresar y descartar es una técnica precisa de cítricos donde el bartender expresa (exprime) los aceites esenciales de una cáscara cítrica sobre el cóctel para liberar compuestos aromáticos, luego descarta la cáscara en lugar de dejarla caer en la bebida. Esto captura los aceites cítricos brillantes y volátiles sin introducir los sabores amargos de la médula blanca que pueden desarrollarse con el tiempo. Se usa comúnmente en cócteles con predominio de licor donde quieres el aroma y nota cítrica inicial sin extracción continua de compuestos amargos. Los aceites proporcionan impacto aromático inmediato mientras evitan posibles sabores desagradables.",
                  "de": "Express and Discard ist eine präzise Zitrus-Technik, bei der der Bartender die ätherischen Öle aus einer Zitrusschale über den Cocktail ausdrückt (presst), um aromatische Verbindungen freizusetzen, dann die Schale entsorgt, anstatt sie ins Getränk fallen zu lassen. Dies erfasst die hellen, flüchtigen Zitrusöle ohne Einführung der bitteren Aromen aus dem weißen Mark, die sich über Zeit entwickeln können. Es wird häufig in spirituosenbetonten Cocktails verwendet, wo man das Aroma und die anfängliche Zitrusnote ohne fortlaufende Extraktion bitterer Verbindungen möchte. Die Öle bieten sofortigen aromatischen Einfluss während Vermeidung potenzieller Fehlgeschmäcker.",
                  "nl": "Uitpersen en weggooien is een precieze citrus techniek waarbij de bartender de essentiële oliën uit een citrusschil uitperst over de cocktail om aromatische verbindingen vrij te geven, dan de schil weggooit in plaats van deze in de drank te laten vallen. Dit vangt de heldere, vluchtige citrusoliën zonder de bittere smaken van het witte vruchtvlees die zich over tijd kunnen ontwikkelen. Het wordt vaak gebruikt in sterke drank-gerichte cocktails waar je het aroma en initiële citrusnoot wilt zonder voortdurende extractie van bittere verbindingen. De oliën bieden onmiddellijke aromatische impact terwijl mogelijke bijsmaken worden vermeden."
        }
      },
      {
        question: {
                  "en": "What is the function of 'tinctures' in modern cocktail making?",
                  "es": "¿Cuál es la función de las 'tinturas' en la elaboración moderna de cócteles?",
                  "de": "Was ist die Funktion von 'Tinkturen' in der modernen Cocktail-Herstellung?",
                  "nl": "Wat is de functie van 'tincturen' in moderne cocktailbereiding?"
        },
        options: [
        {
                  "en": "Thickening agents for texture",
                  "es": "Agentes espesantes para textura",
                  "de": "Verdickungsmittel für Textur",
                  "nl": "Verdikkingsmiddelen voor textuur"
        },
        {
                  "en": "Coloring agents for cocktails",
                  "es": "Agentes colorantes para cócteles",
                  "de": "Farbstoffe für Cocktails",
                  "nl": "Kleurmiddelen voor cocktails"
        },
        {
                  "en": "Preservatives to extend shelf life",
                  "es": "Conservantes para extender vida útil",
                  "de": "Konservierungsmittel zur Verlängerung der Haltbarkeit",
                  "nl": "Conserveermiddelen om houdbaarheid te verlengen"
        },
        {
                  "en": "Alcohol-based extracts that add concentrated flavors in small doses without affecting texture",
                  "es": "Extractos basados en alcohol que añaden sabores concentrados en dosis pequeñas sin afectar textura",
                  "de": "Alkoholbasierte Extrakte, die konzentrierte Aromen in kleinen Dosen hinzufügen ohne Textur zu beeinflussen",
                  "nl": "Alcohol-gebaseerde extracten die geconcentreerde smaken in kleine doses toevoegen zonder textuur te beïnvloeden"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Tinctures are alcohol-based extracts of various ingredients (herbs, spices, roots, barks, flowers) that provide highly concentrated flavors in tiny quantities. Used in drops or dashes, they allow bartenders to add complex flavor notes without significantly altering the cocktail's volume, proof, or texture. Common tinctures include chocolate, vanilla, cinnamon, cardamom, or exotic ingredients like butterfly pea flower. They're particularly valuable for adding subtle background notes, seasonal flavors, or unique signature elements. Tinctures offer precise flavor control and can transform a standard cocktail with just a few drops.",
                  "es": "Las tinturas son extractos basados en alcohol de varios ingredientes (hierbas, especias, raíces, cortezas, flores) que proporcionan sabores altamente concentrados en cantidades diminutas. Usadas en gotas o toques, permiten a los bartenders añadir notas de sabor complejas sin alterar significativamente el volumen, graduación o textura del cóctel. Tinturas comunes incluyen chocolate, vainilla, canela, cardamomo o ingredientes exóticos como flor de guisante mariposa. Son particularmente valiosas para añadir notas de fondo sutiles, sabores estacionales o elementos de firma únicos. Las tinturas ofrecen control preciso del sabor y pueden transformar un cóctel estándar con solo unas gotas.",
                  "de": "Tinkturen sind alkoholbasierte Extrakte verschiedener Zutaten (Kräuter, Gewürze, Wurzeln, Rinden, Blüten), die hochkonzentrierte Aromen in winzigen Mengen liefern. In Tropfen oder Spritzern verwendet, ermöglichen sie Bartendern, komplexe Geschmacksnoten hinzuzufügen ohne Volumen, Proof oder Textur des Cocktails wesentlich zu verändern. Häufige Tinkturen umfassen Schokolade, Vanille, Zimt, Kardamom oder exotische Zutaten wie Schmetterlingserbsenblüte. Sie sind besonders wertvoll für subtile Hintergrundnoten, saisonale Aromen oder einzigartige Signature-Elemente. Tinkturen bieten präzise Geschmackskontrolle und können einen Standard-Cocktail mit nur wenigen Tropfen transformieren.",
                  "nl": "Tincturen zijn alcohol-gebaseerde extracten van verschillende ingrediënten (kruiden, specerijen, wortels, schors, bloemen) die zeer geconcentreerde smaken leveren in kleine hoeveelheden. Gebruikt in druppels of spatten, stellen ze bartenders in staat complexe smaaknotities toe te voegen zonder het volume, alcoholgehalte of textuur van de cocktail significant te veranderen. Veelvoorkomende tincturen zijn chocolade, vanille, kaneel, kardemom of exotische ingrediënten zoals vlindererwt bloem. Ze zijn bijzonder waardevol voor het toevoegen van subtiele achtergrondnoten, seizoenssmaken of unieke kenmerkende elementen. Tincturen bieden precieze smaakcontrole en kunnen een standaard cocktail transformeren met slechts een paar druppels."
        }
      },
      {
        question: {
                  "en": "What is 'carbonation' integration in cocktail making and its timing considerations?",
                  "es": "¿Qué es la integración de 'carbonatación' en la elaboración de cócteles y sus consideraciones de tiempo?",
                  "de": "Was ist 'Kohlensäure'-Integration in der Cocktail-Herstellung und deren Timing-Überlegungen?",
                  "nl": "Wat is 'koolzuur' integratie in cocktailbereiding en de timing overwegingen?"
        },
        options: [
        {
                  "en": "Using only pre-carbonated cocktails",
                  "es": "Usar solo cócteles pre-carbonatados",
                  "de": "Nur vorkohlensäurehaltige Cocktails verwenden",
                  "nl": "Alleen vooraf gekoolzuurde cocktails gebruiken"
        },
        {
                  "en": "Adding carbonation during the muddling process",
                  "es": "Añadir carbonatación durante el proceso de macerado",
                  "de": "Kohlensäure während des Muddling-Prozesses hinzufügen",
                  "nl": "Koolzuur toevoegen tijdens het muddlen proces"
        },
        {
                  "en": "Adding carbonated elements at the final stage to preserve fizz and prevent over-dilution",
                  "es": "Añadir elementos carbonatados en la etapa final para preservar efervescencia y prevenir sobre-dilución",
                  "de": "Kohlensäurehaltige Elemente in der Endphase hinzufügen um Sprudel zu bewahren und Überverdünnung zu verhindern",
                  "nl": "Koolzuurhoudende elementen in de laatste fase toevoegen om bruising te behouden en overdunning te voorkomen"
        },
        {
                  "en": "Shaking all ingredients with soda water",
                  "es": "Agitar todos los ingredientes con agua con gas",
                  "de": "Alle Zutaten mit Sodawasser schütteln",
                  "nl": "Alle ingrediënten schudden met sodawater"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Proper carbonation integration involves adding sparkling elements (soda water, tonic, champagne, or kombucha) at the very end of cocktail preparation to preserve maximum effervescence. Carbonated ingredients should never be shaken or stirred vigorously, as this releases CO2 and flattens the drink. The technique typically involves building the base cocktail, then topping with the carbonated element using a gentle pour or float technique. Timing is crucial - carbonation should be added just before serving to maintain fizz throughout the drinking experience. Some cocktails use multiple carbonation stages for layered texture effects.",
                  "es": "La integración apropiada de carbonatación implica añadir elementos espumosos (agua con gas, tónica, champán o kombucha) al final mismo de la preparación del cóctel para preservar máxima efervescencia. Ingredientes carbonatados nunca deben agitarse o revolverse vigorosamente, ya que esto libera CO2 y aplana la bebida. La técnica típicamente implica construir el cóctel base, luego coronar con el elemento carbonatado usando técnica de vertido suave o flotación. El tiempo es crucial - la carbonatación debe añadirse justo antes de servir para mantener efervescencia durante toda la experiencia de bebida. Algunos cócteles usan múltiples etapas de carbonatación para efectos de textura en capas.",
                  "de": "Ordnungsgemäße Kohlensäure-Integration beinhaltet das Hinzufügen sprudelnder Elemente (Sodawasser, Tonic, Champagner oder Kombucha) ganz am Ende der Cocktail-Zubereitung, um maximale Kohlensäure zu bewahren. Kohlensäurehaltige Zutaten sollten niemals geschüttelt oder kräftig gerührt werden, da dies CO2 freigibt und das Getränk flach macht. Die Technik beinhaltet typischerweise den Aufbau des Basis-Cocktails, dann Toppen mit dem kohlensäurehaltigen Element mit sanfter Gieß- oder Float-Technik. Timing ist entscheidend - Kohlensäure sollte kurz vor dem Servieren hinzugefügt werden, um Sprudel während der gesamten Trinkerfahrung zu erhalten. Einige Cocktails verwenden mehrere Kohlensäure-Stufen für geschichtete Textureffekte.",
                  "nl": "Juiste koolzuur integratie houdt in dat bruisende elementen (sodawater, tonic, champagne of kombucha) helemaal aan het einde van cocktailbereiding worden toegevoegd om maximale koolzuur te behouden. Koolzuurhoudende ingrediënten mogen nooit geschud of krachtig geroerd worden, omdat dit CO2 vrijgeeft en de drank plat maakt. De techniek houdt typisch in dat de basis cocktail wordt opgebouwd, dan getopt met het koolzuurhoudende element met een zachte giet- of drijftechniek. Timing is cruciaal - koolzuur moet net voor serveren worden toegevoegd om bruising tijdens de hele drinkervaring te behouden. Sommige cocktails gebruiken meerdere koolzuur stadia voor gelaagde textuur effecten."
        }
      },
      {
        question: {
                  "en": "What is the role of 'mineral content' in water selection for cocktails?",
                  "es": "¿Cuál es el papel del 'contenido mineral' en la selección de agua para cócteles?",
                  "de": "Was ist die Rolle des 'Mineralgehalts' bei der Wasserauswahl für Cocktails?",
                  "nl": "Wat is de rol van 'mineraalgehalte' in waterselectie voor cocktails?"
        },
        options: [
        {
                  "en": "Mineral content doesn't matter in cocktails",
                  "es": "El contenido mineral no importa en cócteles",
                  "de": "Mineralgehalt spielt in Cocktails keine Rolle",
                  "nl": "Mineraalgehalte doet er niet toe in cocktails"
        },
        {
                  "en": "Higher minerals always make better cocktails",
                  "es": "Más minerales siempre hacen mejores cócteles",
                  "de": "Höhere Mineralien machen immer bessere Cocktails",
                  "nl": "Hogere mineralen maken altijd betere cocktails"
        },
        {
                  "en": "Only distilled water should be used",
                  "es": "Solo agua destilada debe usarse",
                  "de": "Nur destilliertes Wasser sollte verwendet werden",
                  "nl": "Alleen gedestilleerd water moet worden gebruikt"
        },
        {
                  "en": "Different mineral profiles affect flavor, mouthfeel, and how other ingredients integrate",
                  "es": "Diferentes perfiles minerales afectan sabor, sensación en boca y cómo se integran otros ingredientes",
                  "de": "Verschiedene Mineralprofile beeinflussen Geschmack, Mundgefühl und wie sich andere Zutaten integrieren",
                  "nl": "Verschillende mineraalprofielen beïnvloeden smaak, mondgevoel en hoe andere ingrediënten integreren"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Water mineral content significantly impacts cocktail quality through several mechanisms. Low-mineral water (like distilled) can taste flat and fail to support flavor integration, while high-mineral water can add unwanted flavors or affect ingredient solubility. Moderate mineral content (100-300 TDS) typically provides the best balance - calcium and magnesium enhance mouthfeel and help bind flavors, while controlled sodium levels can brighten taste perception. Different cocktails may benefit from different water profiles: delicate drinks prefer lower minerals, while spirit-forward cocktails can handle more mineral complexity. Professional bars often test multiple water sources to optimize their signature cocktails.",
                  "es": "El contenido mineral del agua impacta significativamente la calidad del cóctel a través de varios mecanismos. Agua baja en minerales (como destilada) puede saber plana y fallar en apoyar integración de sabores, mientras agua alta en minerales puede añadir sabores no deseados o afectar solubilidad de ingredientes. Contenido mineral moderado (100-300 TDS) típicamente proporciona el mejor equilibrio - calcio y magnesio mejoran sensación en boca y ayudan a unir sabores, mientras niveles controlados de sodio pueden avivar percepción del sabor. Diferentes cócteles pueden beneficiarse de diferentes perfiles de agua: bebidas delicadas prefieren menos minerales, mientras cócteles con predominio de licor pueden manejar más complejidad mineral. Bares profesionales a menudo prueban múltiples fuentes de agua para optimizar sus cócteles insignia.",
                  "de": "Wasser-Mineralgehalt beeinflusst Cocktail-Qualität erheblich durch mehrere Mechanismen. Niedrig-minerales Wasser (wie destilliert) kann flach schmecken und Geschmacksintegration nicht unterstützen, während hoch-minerales Wasser unerwünschte Geschmäcker hinzufügen oder Zutatenlöslichkeit beeinträchtigen kann. Moderater Mineralgehalt (100-300 TDS) bietet typischerweise die beste Balance - Kalzium und Magnesium verbessern Mundgefühl und helfen beim Geschmacksbinden, während kontrollierte Natriumwerte Geschmackswahrnehmung beleben können. Verschiedene Cocktails können von verschiedenen Wasserprofilen profitieren: delikate Getränke bevorzugen niedrigere Mineralien, während spirituosenbetonte Cocktails mehr minerale Komplexität handhaben können. Professionelle Bars testen oft mehrere Wasserquellen zur Optimierung ihrer Signature-Cocktails.",
                  "nl": "Water mineraalgehalte beïnvloedt cocktailkwaliteit significant door verschillende mechanismen. Laag-mineraal water (zoals gedestilleerd) kan plat smaken en falen in smaakintegratie ondersteuning, terwijl hoog-mineraal water ongewenste smaken kan toevoegen of ingrediënt oplosbaarheid beïnvloeden. Matig mineraalgehalte (100-300 TDS) biedt typisch de beste balans - calcium en magnesium verbeteren mondgevoel en helpen smaken binden, terwijl gecontroleerde natriumgehaltes smaakperceptie kunnen verhelderen. Verschillende cocktails kunnen baat hebben bij verschillende waterprofielen: delicate drankjes prefereren lagere mineralen, terwijl sterke drank-gerichte cocktails meer minerale complexiteit aankunnen. Professionele bars testen vaak meerdere waterbronnen om hun kenmerkende cocktails te optimaliseren."
        }
      },
      {
        question: {
                  "en": "What is 'dilution factor' in cocktails?",
                  "es": "¿Qué es el 'factor de dilución' en cócteles?",
                  "de": "Was ist der 'Verdünnungsfaktor' in Cocktails?",
                  "nl": "Wat is de 'verdunningsfactor' in cocktails?"
        },
        options: [
        {
                  "en": "Glass size",
                  "es": "Tamaño del vaso",
                  "de": "Glasgröße",
                  "nl": "Glas grootte"
        },
        {
                  "en": "The ratio of water added from ice melting (typically 20-25%)",
                  "es": "La proporción de agua agregada del derretimiento del hielo (típicamente 20-25%)",
                  "de": "Das Verhältnis von durch Eisschmelzen zugeführtem Wasser (typisch 20-25%)",
                  "nl": "De verhouding van toegevoegd water door ijsmelten (typisch 20-25%)"
        },
        {
                  "en": "Alcohol percentage",
                  "es": "Porcentaje de alcohol",
                  "de": "Alkoholprozentsatz",
                  "nl": "Alcoholpercentage"
        },
        {
                  "en": "How much mixer to add",
                  "es": "Cuánto mezclador agregar",
                  "de": "Wie viel Mixer hinzufügen",
                  "nl": "Hoeveel mixer toe te voegen"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Dilution factor is the amount of water added from ice melting during shaking/stirring (20-25% typically). Proper dilution is critical—opens up flavors, reduces alcohol burn, and achieves balance.",
                  "es": "El factor de dilución es la cantidad de agua agregada del derretimiento del hielo durante agitado/revuelto (20-25% típicamente). La dilución adecuada es crítica—abre sabores, reduce ardor de alcohol y logra equilibrio.",
                  "de": "Der Verdünnungsfaktor ist die Menge des durch Eisschmelzen während des Schüttelns/Rührens zugeführten Wassers (typisch 20-25%). Richtige Verdünnung ist kritisch—öffnet Aromen, reduziert Alkoholbrennen und erreicht Balance.",
                  "nl": "Verdunningsfactor is de hoeveelheid water toegevoegd door ijsmelten tijdens schudden/roeren (typisch 20-25%). Juiste verdunning is kritisch—opent smaken, vermindert alcohol branden en bereikt balans."
        }
      },
      {
        question: {
                  "en": "What is 'spec' in bartending?",
                  "es": "¿Qué es 'spec' en bartending?",
                  "de": "Was ist 'Spec' im Bartending?",
                  "nl": "Wat is 'spec' in bartending?"
        },
        options: [
        {
                  "en": "Spectacle presentation",
                  "es": "Presentación espectacular",
                  "de": "Spektakuläre Präsentation",
                  "nl": "Spectaculaire presentatie"
        },
        {
                  "en": "Type of glassware",
                  "es": "Tipo de cristalería",
                  "de": "Art der Glasware",
                  "nl": "Soort glaswerk"
        },
        {
                  "en": "Special garnish",
                  "es": "Guarnición especial",
                  "de": "Besondere Garnitur",
                  "nl": "Speciale garnering"
        },
        {
                  "en": "The recipe or specification of ingredients and proportions",
                  "es": "La receta o especificación de ingredientes y proporciones",
                  "de": "Das Rezept oder die Spezifikation von Zutaten und Proportionen",
                  "nl": "Het recept of specificatie van ingrediënten en verhoudingen"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "A 'spec' is the detailed recipe specification for a cocktail—exact measurements, techniques, and garnishes. Bartenders 'build to spec' to ensure consistency across every drink served.",
                  "es": "Un 'spec' es la especificación detallada de receta para un cóctel—medidas exactas, técnicas y guarniciones. Los barman 'construyen según spec' para asegurar consistencia en cada bebida servida.",
                  "de": "Ein 'Spec' ist die detaillierte Rezeptspezifikation für einen Cocktail—exakte Maße, Techniken und Garnituren. Barkeeper 'bauen nach Spec' um Konsistenz über jedes servierte Getränk sicherzustellen.",
                  "nl": "Een 'spec' is de gedetailleerde recept specificatie voor een cocktail—exacte metingen, technieken en garneringen. Bartenders 'bouwen volgens spec' om consistentie te verzekeren over elk geserveerd drankje."
        }
      },
      {
        question: {
                  "en": "What is 'spirit-forward' cocktail?",
                  "es": "¿Qué es un cóctel 'spirit-forward'?",
                  "de": "Was ist ein 'spirituosenstarker' Cocktail?",
                  "nl": "Wat is een 'spirit-forward' cocktail?"
        },
        options: [
        {
                  "en": "Served first",
                  "es": "Servido primero",
                  "de": "Zuerst serviert",
                  "nl": "Eerst geserveerd"
        },
        {
                  "en": "Premium spirits used",
                  "es": "Licores premium usados",
                  "de": "Premium-Spirituosen verwendet",
                  "nl": "Premium spirits gebruikt"
        },
        {
                  "en": "High alcohol content only",
                  "es": "Solo alto contenido de alcohol",
                  "de": "Nur hoher Alkoholgehalt",
                  "nl": "Alleen hoog alcoholgehalte"
        },
        {
                  "en": "Cocktail where spirits are primary, minimal dilution (Manhattan, Negroni)",
                  "es": "Cóctel donde los licores son primarios, dilución mínima (Manhattan, Negroni)",
                  "de": "Cocktail, wo Spirituosen primär sind, minimale Verdünnung (Manhattan, Negroni)",
                  "nl": "Cocktail waar spirits primair zijn, minimale verdunning (Manhattan, Negroni)"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Spirit-forward cocktails emphasize the base spirit with minimal dilution and few modifiers—stirred, not shaken. Examples: Manhattan, Martini, Negroni, Old Fashioned. Showcases quality spirits.",
                  "es": "Los cócteles spirit-forward enfatizan el licor base con dilución mínima y pocos modificadores—revueltos, no agitados. Ejemplos: Manhattan, Martini, Negroni, Old Fashioned. Muestra licores de calidad.",
                  "de": "Spirituosenstarke Cocktails betonen die Basis-Spirituose mit minimaler Verdünnung und wenigen Modifikatoren—gerührt, nicht geschüttelt. Beispiele: Manhattan, Martini, Negroni, Old Fashioned. Zeigt Qualitätsspirituosen.",
                  "nl": "Spirit-forward cocktails benadrukken de basis spirit met minimale verdunning en weinig modifiers—geroerd, niet geschud. Voorbeelden: Manhattan, Martini, Negroni, Old Fashioned. Toont kwaliteit spirits."
        }
      },
      {
        question: {
                  "en": "What is a 'Boulevardier'?",
                  "es": "¿Qué es un 'Boulevardier'?",
                  "de": "Was ist ein 'Boulevardier'?",
                  "nl": "Wat is een 'Boulevardier'?"
        },
        options: [
        {
                  "en": "Bourbon or rye, sweet vermouth, Campari (whiskey Negroni)",
                  "es": "Bourbon o centeno, vermut dulce, Campari (Negroni de whisky)",
                  "de": "Bourbon oder Roggen, süßer Wermut, Campari (Whiskey-Negroni)",
                  "nl": "Bourbon of rogge, zoete vermouth, Campari (whiskey Negroni)"
        },
        {
                  "en": "French champagne cocktail",
                  "es": "Cóctel de champán francés",
                  "de": "Französischer Champagner-Cocktail",
                  "nl": "Franse champagne cocktail"
        },
        {
                  "en": "Coffee liqueur drink",
                  "es": "Bebida de licor de café",
                  "de": "Kaffeelikörgetränk",
                  "nl": "Koffielikeur drankje"
        },
        {
                  "en": "Gin martini variation",
                  "es": "Variación de martini de ginebra",
                  "de": "Gin-Martini-Variation",
                  "nl": "Gin martini variatie"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "The Boulevardier (1920s) is essentially a whiskey Negroni—bourbon or rye, sweet vermouth, and Campari. Created at Harry's New York Bar in Paris. Rich, complex, bittersweet.",
                  "es": "El Boulevardier (1920s) es esencialmente un Negroni de whisky—bourbon o centeno, vermut dulce y Campari. Creado en Harry's New York Bar en París. Rico, complejo, agridulce.",
                  "de": "Der Boulevardier (1920er) ist im Wesentlichen ein Whiskey-Negroni—Bourbon oder Roggen, süßer Wermut und Campari. Kreiert in Harry's New York Bar in Paris. Reich, komplex, bittersüß.",
                  "nl": "De Boulevardier (1920s) is in wezen een whiskey Negroni—bourbon of rogge, zoete vermouth en Campari. Gecreëerd in Harry's New York Bar in Parijs. Rijk, complex, bitterzoet."
        }
      },
      {
        question: {
                  "en": "What is the purpose of 'expressing' citrus peel?",
                  "es": "¿Cuál es el propósito de 'expresar' cáscara de cítricos?",
                  "de": "Was ist der Zweck des 'Ausdrückens' von Zitrusschale?",
                  "nl": "Wat is het doel van 'uitpersen' van citrusschil?"
        },
        options: [
        {
                  "en": "Releasing aromatic citrus oils over the drink's surface",
                  "es": "Liberar aceites aromáticos de cítricos sobre la superficie de la bebida",
                  "de": "Aromatische Zitrusöle über die Getränkeoberfläche freisetzen",
                  "nl": "Aromatische citrus oliën vrijgeven over het oppervlak van de drank"
        },
        {
                  "en": "Decoration only",
                  "es": "Solo decoración",
                  "de": "Nur Dekoration",
                  "nl": "Alleen decoratie"
        },
        {
                  "en": "Adding bitterness",
                  "es": "Agregar amargura",
                  "de": "Bitterkeit hinzufügen",
                  "nl": "Bitterheid toevoegen"
        },
        {
                  "en": "Adding sweetness",
                  "es": "Agregar dulzura",
                  "de": "Süße hinzufügen",
                  "nl": "Zoetheid toevoegen"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Expressing citrus peel means twisting it over the drink to release volatile aromatic oils onto the surface. This adds a fragrant nose hit before the first sip, enhancing the drinking experience.",
                  "es": "Expresar cáscara de cítricos significa torcerla sobre la bebida para liberar aceites aromáticos volátiles en la superficie. Esto agrega un golpe nasal fragante antes del primer sorbo, mejorando la experiencia de beber.",
                  "de": "Zitrusschale ausdrücken bedeutet sie über dem Getränk zu drehen, um flüchtige aromatische Öle auf die Oberfläche freizusetzen. Dies fügt einen duftenden Nasentreffer vor dem ersten Schluck hinzu und verbessert das Trinkerlebnis.",
                  "nl": "Citrusschil uitpersen betekent het over de drank draaien om vluchtige aromatische oliën op het oppervlak vrij te geven. Dit voegt een geurige neus hit toe voor de eerste slok, verbetert de drinkervaring."
        }
      },
      {
        question: {
                  "en": "What is 'Angostura' bitters made from?",
                  "es": "¿De qué está hecho el amargo 'Angostura'?",
                  "de": "Woraus wird 'Angostura'-Bitter hergestellt?",
                  "nl": "Waarvan is 'Angostura' bitters gemaakt?"
        },
        options: [
        {
                  "en": "Secret blend of herbs and spices (gentian root prominent)",
                  "es": "Mezcla secreta de hierbas y especias (raíz de genciana prominente)",
                  "de": "Geheime Mischung aus Kräutern und Gewürzen (Enzianwurzel prominent)",
                  "nl": "Geheime mix van kruiden en specerijen (gentiaan wortel prominent)"
        },
        {
                  "en": "Only angostura bark",
                  "es": "Solo corteza de angostura",
                  "de": "Nur Angostura-Rinde",
                  "nl": "Alleen angostura schors"
        },
        {
                  "en": "Coffee and chocolate",
                  "es": "Café y chocolate",
                  "de": "Kaffee und Schokolade",
                  "nl": "Koffie en chocolade"
        },
        {
                  "en": "Citrus peels only",
                  "es": "Solo cáscaras de cítricos",
                  "de": "Nur Zitrusschalen",
                  "nl": "Alleen citrusschillen"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Angostura bitters (1824, Trinidad) is a secret blend of herbs and spices, with gentian root prominent. Ironically, despite its name, it contains no angostura bark. Essential in many classic cocktails.",
                  "es": "Los amargos Angostura (1824, Trinidad) son una mezcla secreta de hierbas y especias, con raíz de genciana prominente. Irónicamente, a pesar de su nombre, no contiene corteza de angostura. Esencial en muchos cócteles clásicos.",
                  "de": "Angostura-Bitter (1824, Trinidad) ist eine geheime Mischung aus Kräutern und Gewürzen, wobei Enzianwurzel prominent ist. Ironischerweise enthält es trotz seines Namens keine Angostura-Rinde. Essentiell in vielen klassischen Cocktails.",
                  "nl": "Angostura bitters (1824, Trinidad) is een geheime mix van kruiden en specerijen, met gentiaan wortel prominent. Ironisch genoeg bevat het ondanks zijn naam geen angostura schors. Essentieel in veel klassieke cocktails."
        }
      },
      {
        question: {
                  "en": "What is a 'Mexican Firing Squad'?",
                  "es": "¿Qué es un 'Pelotón de Fusilamiento Mexicano'?",
                  "de": "Was ist ein 'Mexican Firing Squad'?",
                  "nl": "Wat is een 'Mexican Firing Squad'?"
        },
        options: [
        {
                  "en": "Spicy jalapeño margarita",
                  "es": "Margarita picante de jalapeño",
                  "de": "Scharfe Jalapeño-Margarita",
                  "nl": "Pittige jalapeño margarita"
        },
        {
                  "en": "Mezcal shot ritual",
                  "es": "Ritual de shot de mezcal",
                  "de": "Mezcal-Shot-Ritual",
                  "nl": "Mezcal shot ritueel"
        },
        {
                  "en": "Tequila sunrise variation",
                  "es": "Variación de tequila sunrise",
                  "de": "Tequila-Sunrise-Variation",
                  "nl": "Tequila sunrise variatie"
        },
        {
                  "en": "Tequila, lime, grenadine, Angostura bitters",
                  "es": "Tequila, lima, granadina, amargos Angostura",
                  "de": "Tequila, Limette, Grenadine, Angostura-Bitter",
                  "nl": "Tequila, limoen, granaatappelsiroop, Angostura bitters"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "The Mexican Firing Squad is a classic tequila sour with tequila, lime juice, grenadine, and Angostura bitters. Created in the 1930s-40s, it's a balanced sweet-sour-bitter cocktail.",
                  "es": "El Pelotón de Fusilamiento Mexicano es un sour clásico de tequila con tequila, jugo de lima, granadina y amargos Angostura. Creado en los 1930s-40s, es un cóctel equilibrado dulce-ácido-amargo.",
                  "de": "Der Mexican Firing Squad ist ein klassischer Tequila-Sour mit Tequila, Limettensaft, Grenadine und Angostura-Bitter. In den 1930er-40ern kreiert, ist es ein ausgewogener süß-sauer-bitterer Cocktail.",
                  "nl": "De Mexican Firing Squad is een klassieke tequila sour met tequila, limoensap, granaatappelsiroop en Angostura bitters. Gecreëerd in de jaren 1930-40, is het een gebalanceerde zoet-zuur-bitter cocktail."
        }
      },
      {
        question: {
                  "en": "What is the '2:1 simple syrup' ratio?",
                  "es": "¿Cuál es la proporción '2:1 de jarabe simple'?",
                  "de": "Was ist das '2:1-Einfachsirup'-Verhältnis?",
                  "nl": "Wat is de '2:1 simpele siroop' verhouding?"
        },
        options: [
        {
                  "en": "2 cocktails to 1 mixer",
                  "es": "2 cócteles a 1 mezclador",
                  "de": "2 Cocktails zu 1 Mixer",
                  "nl": "2 cocktails op 1 mixer"
        },
        {
                  "en": "2 parts water to 1 part sugar",
                  "es": "2 partes de agua a 1 parte de azúcar",
                  "de": "2 Teile Wasser zu 1 Teil Zucker",
                  "nl": "2 delen water op 1 deel suiker"
        },
        {
                  "en": "2 oz spirit to 1 oz modifier",
                  "es": "2 oz de licor a 1 oz de modificador",
                  "de": "2 oz Spirituose zu 1 oz Modifikator",
                  "nl": "2 oz spirit op 1 oz modifier"
        },
        {
                  "en": "2 parts sugar to 1 part water (rich simple syrup)",
                  "es": "2 partes de azúcar a 1 parte de agua (jarabe simple rico)",
                  "de": "2 Teile Zucker zu 1 Teil Wasser (reichhaltiger Einfachsirup)",
                  "nl": "2 delen suiker op 1 deel water (rijke simpele siroop)"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "2:1 simple syrup (rich simple syrup) uses 2 parts sugar to 1 part water by weight, creating a thicker, sweeter syrup that doesn't dilute cocktails as much. Standard is 1:1.",
                  "es": "El jarabe simple 2:1 (jarabe simple rico) usa 2 partes de azúcar a 1 parte de agua por peso, creando un jarabe más espeso y dulce que no diluye tanto los cócteles. El estándar es 1:1.",
                  "de": "2:1-Einfachsirup (reichhaltiger Einfachsirup) verwendet 2 Teile Zucker zu 1 Teil Wasser nach Gewicht, erzeugt einen dickeren, süßeren Sirup, der Cocktails nicht so stark verdünnt. Standard ist 1:1.",
                  "nl": "2:1 simpele siroop (rijke simpele siroop) gebruikt 2 delen suiker op 1 deel water op gewicht, creëert een dikkere, zoetere siroop die cocktails niet zo veel verdunt. Standaard is 1:1."
        }
      },
      {
        question: {
                  "en": "What is a 'Trident' cocktail?",
                  "es": "¿Qué es un cóctel 'Trident'?",
                  "de": "Was ist ein 'Trident'-Cocktail?",
                  "nl": "Wat is een 'Trident' cocktail?"
        },
        options: [
        {
                  "en": "Three-rum tiki drink",
                  "es": "Bebida tiki de tres rones",
                  "de": "Drei-Rum-Tiki-Getränk",
                  "nl": "Drie-rum tiki drankje"
        },
        {
                  "en": "Triple sec cocktail",
                  "es": "Cóctel de triple sec",
                  "de": "Triple-Sec-Cocktail",
                  "nl": "Triple sec cocktail"
        },
        {
                  "en": "Vodka martini with three olives",
                  "es": "Vodka martini con tres aceitunas",
                  "de": "Wodka-Martini mit drei Oliven",
                  "nl": "Vodka martini met drie olijven"
        },
        {
                  "en": "Aquavit, dry sherry, Cynar, peach bitters, lemon",
                  "es": "Aquavit, jerez seco, Cynar, amargos de durazno, limón",
                  "de": "Aquavit, trockener Sherry, Cynar, Pfirsichbitter, Zitrone",
                  "nl": "Aquavit, droge sherry, Cynar, perzik bitters, citroen"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "The Trident (2007) by Robert Hess combines aquavit, dry sherry (fino or manzanilla), Cynar, peach bitters, and lemon. A complex, savory modern classic showcasing unusual ingredients.",
                  "es": "El Trident (2007) de Robert Hess combina aquavit, jerez seco (fino o manzanilla), Cynar, amargos de durazno y limón. Un clásico moderno complejo y sabroso que muestra ingredientes inusuales.",
                  "de": "Der Trident (2007) von Robert Hess kombiniert Aquavit, trockenen Sherry (Fino oder Manzanilla), Cynar, Pfirsichbitter und Zitrone. Ein komplexer, herzhafter moderner Klassiker mit ungewöhnlichen Zutaten.",
                  "nl": "De Trident (2007) van Robert Hess combineert aquavit, droge sherry (fino of manzanilla), Cynar, perzik bitters en citroen. Een complexe, hartige moderne klassieker die ongewone ingrediënten toont."
        }
      },
      {
        question: {
                  "en": "What is the difference between a 'coupe' and a 'Nick and Nora' glass?",
                  "es": "¿Cuál es la diferencia entre una copa 'coupe' y 'Nick and Nora'?",
                  "de": "Was ist der Unterschied zwischen einem 'Coupe'- und 'Nick and Nora'-Glas?",
                  "nl": "Wat is het verschil tussen een 'coupe' en 'Nick and Nora' glas?"
        },
        options: [
        {
                  "en": "No difference",
                  "es": "Sin diferencia",
                  "de": "Kein Unterschied",
                  "nl": "Geen verschil"
        },
        {
                  "en": "Coupe is for champagne only",
                  "es": "Coupe es solo para champán",
                  "de": "Coupe ist nur für Champagner",
                  "nl": "Coupe is alleen voor champagne"
        },
        {
                  "en": "Nick and Nora has a stem, coupe doesn't",
                  "es": "Nick and Nora tiene tallo, coupe no",
                  "de": "Nick and Nora hat Stiel, Coupe nicht",
                  "nl": "Nick and Nora heeft steel, coupe niet"
        },
        {
                  "en": "Nick and Nora is smaller and bell-shaped, coupe is wider and shallower",
                  "es": "Nick and Nora es más pequeña y en forma de campana, coupe es más ancha y superficial",
                  "de": "Nick and Nora ist kleiner und glockenförmig, Coupe ist breiter und flacher",
                  "nl": "Nick and Nora is kleiner en klokvormig, coupe is breder en ondieper"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Nick and Nora glasses (5-6oz) are smaller, bell-shaped, and rounded, preventing spills. Coupes are wider, shallower saucers (6-8oz), easier to spill but show garnishes better.",
                  "es": "Las copas Nick and Nora (5-6oz) son más pequeñas, en forma de campana y redondeadas, previniendo derrames. Las coupes son platillos más anchos y superficiales (6-8oz), más fáciles de derramar pero muestran mejor las guarniciones.",
                  "de": "Nick and Nora-Gläser (5-6oz) sind kleiner, glockenförmig und abgerundet, verhindern Verschütten. Coupes sind breitere, flachere Schalen (6-8oz), leichter zu verschütten aber zeigen Garnituren besser.",
                  "nl": "Nick and Nora glazen (5-6oz) zijn kleiner, klokvormig en afgerond, voorkomen morsen. Coupes zijn bredere, ondiepe schotels (6-8oz), gemakkelijker te morsen maar tonen garneringen beter."
        }
      },
      {
        question: {
                  "en": "What is 'sous vide' infusion in cocktail preparation?",
                  "es": "¿Qué es la infusión 'sous vide' en preparación de cócteles?",
                  "de": "Was ist 'Sous Vide' Infusion bei der Cocktail-Zubereitung?",
                  "nl": "Wat is 'sous vide' infusie in cocktailbereiding?"
        },
        options: [
        {
                  "en": "Vacuum-sealing spirits with ingredients and heating at precise low temperatures for rapid, controlled flavor extraction",
                  "es": "Sellar al vacío licores con ingredientes y calentar a temperaturas bajas precisas para extracción rápida y controlada de sabor",
                  "de": "Vakuumversiegelung von Spirituosen mit Zutaten und Erhitzen bei präzisen niedrigen Temperaturen für schnelle, kontrollierte Aromaextraktion",
                  "nl": "Vacuüm verzegelen van spirits met ingrediënten en verwarmen op precieze lage temperaturen voor snelle, gecontroleerde smaakextractie"
        },
        {
                  "en": "Pressure carbonation technique",
                  "es": "Técnica de carbonatación a presión",
                  "de": "Druckkohlensäuretechnik",
                  "nl": "Druk koolzuur techniek"
        },
        {
                  "en": "Freezing cocktails for serving",
                  "es": "Congelar cócteles para servir",
                  "de": "Cocktails zum Servieren einfrieren",
                  "nl": "Cocktails bevriezen voor serveren"
        },
        {
                  "en": "Underwater aging of spirits",
                  "es": "Envejecimiento submarino de licores",
                  "de": "Unterwasser-Reifung von Spirituosen",
                  "nl": "Onderwater rijpen van spirits"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Sous vide infusion involves vacuum-sealing spirits with flavoring ingredients (fruits, herbs, spices) in a bag, then immersing in a precisely temperature-controlled water bath (typically 55-65°C) for 1-4 hours. This technique extracts flavors much faster than traditional maceration (which takes days/weeks) while providing consistent results and preventing oxidation. The controlled heat accelerates extraction without cooking or degrading delicate flavors, making it ideal for creating custom-infused spirits for signature cocktails.",
                  "es": "La infusión sous vide implica sellar al vacío licores con ingredientes aromatizantes (frutas, hierbas, especias) en una bolsa, luego sumergir en un baño de agua con temperatura controlada precisamente (típicamente 55-65°C) durante 1-4 horas. Esta técnica extrae sabores mucho más rápido que la maceración tradicional (que toma días/semanas) mientras proporciona resultados consistentes y previene oxidación. El calor controlado acelera la extracción sin cocinar o degradar sabores delicados, haciéndolo ideal para crear licores personalizados infundidos para cócteles insignia.",
                  "de": "Sous Vide Infusion beinhaltet das Vakuumversiegeln von Spirituosen mit Aromenzutaten (Früchte, Kräuter, Gewürze) in einem Beutel, dann Eintauchen in ein präzise temperaturkontrolliertes Wasserbad (typisch 55-65°C) für 1-4 Stunden. Diese Technik extrahiert Aromen viel schneller als traditionelle Mazeration (die Tage/Wochen dauert), während sie konsistente Ergebnisse liefert und Oxidation verhindert. Die kontrollierte Hitze beschleunigt Extraktion ohne Kochen oder Abbau empfindlicher Aromen, ideal für die Herstellung maßgeschneiderter infundierter Spirituosen für Signature-Cocktails.",
                  "nl": "Sous vide infusie houdt in dat spirits met smaakgevende ingrediënten (fruit, kruiden, specerijen) vacuüm worden verzegeld in een zak, dan ondergedompeld in een precies temperatuurgecontroleerd waterbad (typisch 55-65°C) gedurende 1-4 uur. Deze techniek extraheert smaken veel sneller dan traditionele maceratie (die dagen/weken duurt) terwijl consistente resultaten worden geboden en oxidatie wordt voorkomen. De gecontroleerde hitte versnelt extractie zonder koken of afbraak van delicate smaken, ideaal voor het creëren van aangepaste geïnfuseerde spirits voor kenmerkende cocktails."
        }
      },
      {
        question: {
                  "en": "What is 'centrifuge clarification' in advanced mixology?",
                  "es": "¿Qué es la 'clarificación por centrifugado' en mixología avanzada?",
                  "de": "Was ist 'Zentrifugen-Klärung' in fortgeschrittener Mixologie?",
                  "nl": "Wat is 'centrifuge verheldering' in geavanceerde mixologie?"
        },
        options: [
        {
                  "en": "Spinning cocktails for aeration",
                  "es": "Girar cócteles para aireación",
                  "de": "Cocktails drehen für Belüftung",
                  "nl": "Cocktails draaien voor beluchting"
        },
        {
                  "en": "Rotating garnish display",
                  "es": "Exhibición de guarnición giratoria",
                  "de": "Rotierende Garnitur-Anzeige",
                  "nl": "Roterende garnering display"
        },
        {
                  "en": "Using centrifugal force to separate solids from liquids for ultra-clear cocktails in minutes",
                  "es": "Usar fuerza centrífuga para separar sólidos de líquidos para cócteles ultra-claros en minutos",
                  "de": "Zentrifugalkraft verwenden um Feststoffe von Flüssigkeiten zu trennen für ultraklare Cocktails in Minuten",
                  "nl": "Centrifugaalkracht gebruiken om vaste stoffen van vloeistoffen te scheiden voor ultra-heldere cocktails in minuten"
        },
        {
                  "en": "Circular bar service technique",
                  "es": "Técnica de servicio de barra circular",
                  "de": "Kreisförmige Bar-Service-Technik",
                  "nl": "Circulaire bar service techniek"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Centrifuge clarification uses laboratory centrifuges to spin cocktail mixtures at high speeds (3000-5000 RPM), separating particles from liquid through centrifugal force in just minutes. This produces exceptionally clear juices and cocktails that would take hours with traditional methods. The technique preserves fresh flavors while removing cloudiness, pulp, and sediment. Popular in modernist bars for creating visually stunning, crystal-clear cocktails with intense flavor. Requires specialized equipment but offers unmatched clarity and speed.",
                  "es": "La clarificación por centrifugado usa centrífugas de laboratorio para girar mezclas de cócteles a altas velocidades (3000-5000 RPM), separando partículas del líquido a través de fuerza centrífuga en solo minutos. Esto produce jugos y cócteles excepcionalmente claros que tomarían horas con métodos tradicionales. La técnica preserva sabores frescos mientras elimina turbidez, pulpa y sedimento. Popular en bares modernistas para crear cócteles visualmente impresionantes y cristalinos con sabor intenso. Requiere equipo especializado pero ofrece claridad y velocidad inigualables.",
                  "de": "Zentrifugen-Klärung verwendet Labor-Zentrifugen zum Drehen von Cocktail-Mischungen bei hohen Geschwindigkeiten (3000-5000 U/min), trennt Partikel von Flüssigkeit durch Zentrifugalkraft in nur Minuten. Dies produziert außergewöhnlich klare Säfte und Cocktails, die mit traditionellen Methoden Stunden dauern würden. Die Technik bewahrt frische Aromen während Trübung, Fruchtfleisch und Sediment entfernt werden. Beliebt in modernistischen Bars für visuell beeindruckende, kristallklare Cocktails mit intensivem Geschmack. Erfordert spezialisierte Ausrüstung aber bietet unübertroffene Klarheit und Geschwindigkeit.",
                  "nl": "Centrifuge verheldering gebruikt laboratorium centrifuges om cocktail mengsels te draaien op hoge snelheden (3000-5000 RPM), scheidt deeltjes van vloeistof door centrifugaalkracht in slechts minuten. Dit produceert uitzonderlijk heldere sappen en cocktails die uren zouden duren met traditionele methoden. De techniek behoudt verse smaken terwijl troebeling, pulp en sediment worden verwijderd. Populair in modernistische bars voor het creëren van visueel verbluffende, kristalheldere cocktails met intense smaak. Vereist gespecialiseerde apparatuur maar biedt ongeëvenaarde helderheid en snelheid."
        }
      },
      {
        question: {
                  "en": "What is 'nitro-muddling' or nitrogen muddling technique?",
                  "es": "¿Qué es la técnica de 'nitro-muddling' o maceración con nitrógeno?",
                  "de": "Was ist 'Nitro-Muddling' oder Stickstoff-Muddelns-Technik?",
                  "nl": "Wat is 'nitro-muddling' of stikstof muddlen techniek?"
        },
        options: [
        {
                  "en": "Using pressurized muddler",
                  "es": "Usar macerador presurizado",
                  "de": "Druckbeaufschlagten Muddler verwenden",
                  "nl": "Gebruik van onder druk staande muddler"
        },
        {
                  "en": "Adding nitrogen gas while muddling",
                  "es": "Agregar gas nitrógeno mientras se macera",
                  "de": "Stickstoffgas beim Muddeln hinzufügen",
                  "nl": "Stikstofgas toevoegen tijdens muddlen"
        },
        {
                  "en": "Muddling in nitrogen atmosphere",
                  "es": "Macerar en atmósfera de nitrógeno",
                  "de": "Muddeln in Stickstoffatmosphäre",
                  "nl": "Muddlen in stikstof atmosfeer"
        },
        {
                  "en": "Flash-freezing herbs/fruits with liquid nitrogen before muddling to preserve aromatics and prevent bruising",
                  "es": "Congelación instantánea de hierbas/frutas con nitrógeno líquido antes de macerar para preservar aromáticos y prevenir magulladuras",
                  "de": "Schnellgefrieren von Kräutern/Früchten mit flüssigem Stickstoff vor dem Muddeln um Aromen zu bewahren und Quetschung zu verhindern",
                  "nl": "Flash-bevriezen van kruiden/fruit met vloeibare stikstof voor muddlen om aromaten te behouden en kneuzingen te voorkomen"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Nitro-muddling involves briefly exposing herbs or delicate fruits to liquid nitrogen vapor or direct contact to flash-freeze them before muddling. This technique shatters cell walls more cleanly than traditional muddling, releasing maximum aromatics while preventing the browning and bitter notes that come from crushing. The frozen state makes ingredients brittle, allowing for more efficient extraction of essential oils without releasing chlorophyll or tannic compounds. Results in brighter, cleaner flavors with enhanced aromatic profile.",
                  "es": "El nitro-muddling implica exponer brevemente hierbas o frutas delicadas al vapor de nitrógeno líquido o contacto directo para congelarlas instantáneamente antes de macerar. Esta técnica rompe las paredes celulares más limpiamente que el macerado tradicional, liberando máximos aromáticos mientras previene el dorado y notas amargas que vienen del aplastamiento. El estado congelado hace que los ingredientes sean frágiles, permitiendo extracción más eficiente de aceites esenciales sin liberar clorofila o compuestos tánicos. Resulta en sabores más brillantes y limpios con perfil aromático mejorado.",
                  "de": "Nitro-Muddling beinhaltet kurzes Aussetzen von Kräutern oder empfindlichen Früchten an flüssigen Stickstoffdampf oder direkten Kontakt zum Schnellgefrieren vor dem Muddeln. Diese Technik zerbricht Zellwände sauberer als traditionelles Muddeln, setzt maximale Aromen frei während Bräunung und bittere Noten vom Zerdrücken verhindert werden. Der gefrorene Zustand macht Zutaten spröde, ermöglicht effizientere Extraktion ätherischer Öle ohne Freisetzung von Chlorophyll oder Gerbstoffen. Ergibt hellere, sauberere Aromen mit verbessertem aromatischem Profil.",
                  "nl": "Nitro-muddlen houdt in dat kruiden of delicate vruchten kort worden blootgesteld aan vloeibare stikstof damp of direct contact om ze flash te bevriezen voor muddlen. Deze techniek verbrijzelt celwanden schoner dan traditioneel muddlen, geeft maximale aromaten vrij terwijl bruining en bittere noten die komen van verplettering worden voorkomen. De bevroren staat maakt ingrediënten bros, wat efficiëntere extractie van essentiële oliën mogelijk maakt zonder chlorofyl of tannine verbindingen vrij te geven. Resulteert in helderdere, schonere smaken met verbeterd aromatisch profiel."
        }
      },
      {
        question: {
                  "en": "What is 'rotary evaporation' (rotovap) in cocktail making?",
                  "es": "¿Qué es la 'evaporación rotatoria' (rotovap) en elaboración de cócteles?",
                  "de": "Was ist 'Rotationsverdampfung' (Rotovap) in der Cocktail-Herstellung?",
                  "nl": "Wat is 'rotatie verdamping' (rotovap) in cocktailbereiding?"
        },
        options: [
        {
                  "en": "Rotating barrel aging",
                  "es": "Envejecimiento en barril giratorio",
                  "de": "Rotierende Fassreifung",
                  "nl": "Roterend vat rijpen"
        },
        {
                  "en": "Circular stirring motion",
                  "es": "Movimiento de agitación circular",
                  "de": "Kreisförmige Rührbewegung",
                  "nl": "Circulaire roerbeweging"
        },
        {
                  "en": "Low-pressure distillation preserving delicate flavors by evaporating at reduced temperatures",
                  "es": "Destilación a baja presión preservando sabores delicados evaporando a temperaturas reducidas",
                  "de": "Niederdruck-Destillation, die empfindliche Aromen durch Verdampfung bei reduzierten Temperaturen bewahrt",
                  "nl": "Lage-druk distillatie die delicate smaken behoudt door verdamping bij verlaagde temperaturen"
        },
        {
                  "en": "Spinning drinks for presentation",
                  "es": "Girar bebidas para presentación",
                  "de": "Getränke drehen für Präsentation",
                  "nl": "Drankjes draaien voor presentatie"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Rotary evaporation uses a rotovap machine to distill ingredients under vacuum (reduced pressure), allowing liquids to evaporate at much lower temperatures (25-40°C instead of 78°C+ for alcohol). This gentle process preserves delicate, volatile aromatics that would be destroyed by traditional distillation heat. Bartenders use rotovaps to create clear distillates of ingredients like fresh herbs, fruits, vegetables, or even savory items, capturing their pure essence. The technique produces incredibly aromatic, clear spirits and modifiers impossible to achieve otherwise. Common in molecular gastronomy and high-end cocktail programs.",
                  "es": "La evaporación rotatoria usa una máquina rotovap para destilar ingredientes bajo vacío (presión reducida), permitiendo que líquidos se evaporen a temperaturas mucho más bajas (25-40°C en lugar de 78°C+ para alcohol). Este proceso suave preserva aromáticos volátiles delicados que serían destruidos por el calor de destilación tradicional. Los bartenders usan rotovaps para crear destilados claros de ingredientes como hierbas frescas, frutas, verduras o incluso ítems salados, capturando su esencia pura. La técnica produce licores y modificadores increíblemente aromáticos y claros imposibles de lograr de otra manera. Común en gastronomía molecular y programas de cóctel de alta gama.",
                  "de": "Rotationsverdampfung verwendet eine Rotovap-Maschine zur Destillation von Zutaten unter Vakuum (reduzierter Druck), ermöglicht Flüssigkeiten bei viel niedrigeren Temperaturen zu verdampfen (25-40°C statt 78°C+ für Alkohol). Dieser sanfte Prozess bewahrt empfindliche, flüchtige Aromen, die durch traditionelle Destillationshitze zerstört würden. Bartender verwenden Rotovaps zur Herstellung klarer Destillate von Zutaten wie frischen Kräutern, Früchten, Gemüse oder sogar herzhaften Produkten, fangen ihre reine Essenz ein. Die Technik produziert unglaublich aromatische, klare Spirituosen und Modifikatoren, die sonst unmöglich zu erreichen sind. Üblich in molekularer Gastronomie und High-End-Cocktail-Programmen.",
                  "nl": "Rotatie verdamping gebruikt een rotovap machine om ingrediënten te distilleren onder vacuüm (verlaagde druk), wat vloeistoffen toestaat te verdampen bij veel lagere temperaturen (25-40°C in plaats van 78°C+ voor alcohol). Dit zachte proces behoudt delicate, vluchtige aromaten die vernietigd zouden worden door traditionele distillatie hitte. Bartenders gebruiken rotovaps om heldere distillaten te creëren van ingrediënten zoals verse kruiden, fruit, groenten of zelfs hartige items, vangen hun pure essentie. De techniek produceert ongelooflijk aromatische, heldere spirits en modifiers onmogelijk anders te bereiken. Gebruikelijk in moleculaire gastronomie en high-end cocktail programma's."
        }
      },
      {
        question: {
                  "en": "What is 'smoke tincture' or 'liquid smoke' in cocktails?",
                  "es": "¿Qué es la 'tintura de humo' o 'humo líquido' en cócteles?",
                  "de": "Was ist 'Rauchtinktur' oder 'flüssiger Rauch' in Cocktails?",
                  "nl": "Wat is 'rook tinctuur' of 'vloeibare rook' in cocktails?"
        },
        options: [
        {
                  "en": "Capturing wood smoke in alcohol to add smoky flavor without burning or smoldering",
                  "es": "Capturar humo de madera en alcohol para añadir sabor ahumado sin quemar o arder",
                  "de": "Holzrauch in Alkohol einfangen um rauchigen Geschmack ohne Brennen oder Schwelen hinzuzufügen",
                  "nl": "Houtrook opvangen in alcohol om rookachtige smaak toe te voegen zonder branden of smeulen"
        },
        {
                  "en": "Burning sugar for caramel",
                  "es": "Quemar azúcar para caramelo",
                  "de": "Zucker brennen für Karamell",
                  "nl": "Suiker branden voor karamel"
        },
        {
                  "en": "Using smoky whiskey",
                  "es": "Usar whisky ahumado",
                  "de": "Rauchigen Whiskey verwenden",
                  "nl": "Rokige whiskey gebruiken"
        },
        {
                  "en": "Adding liquid smoke flavoring",
                  "es": "Añadir saborizante de humo líquido",
                  "de": "Flüssigrauch-Aroma hinzufügen",
                  "nl": "Vloeibare rook smaakstof toevoegen"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Smoke tinctures are created by capturing wood smoke (oak, applewood, hickory, mesquite) in high-proof alcohol using smoking guns or chamber setups. The smoke dissolves into the spirit, creating a concentrated smoky essence that can be added drop-by-drop to cocktails. Unlike commercial liquid smoke (which can be harsh), bartender-made smoke tinctures offer nuanced, natural smoke character. Different woods provide different profiles - applewood gives sweet smoke, hickory is bold, cherry is fruity. Allows precise smoke dosing without overwhelming the drink or requiring tableside smoking theatrics.",
                  "es": "Las tinturas de humo se crean capturando humo de madera (roble, manzano, nogal americano, mezquite) en alcohol de alta graduación usando pistolas de humo o configuraciones de cámara. El humo se disuelve en el licor, creando una esencia ahumada concentrada que puede añadirse gota a gota a cócteles. A diferencia del humo líquido comercial (que puede ser áspero), las tinturas de humo hechas por bartenders ofrecen carácter de humo natural y matizado. Diferentes maderas proporcionan diferentes perfiles - manzano da humo dulce, nogal americano es audaz, cerezo es afrutado. Permite dosificación precisa de humo sin abrumar la bebida o requerir teatralidad de ahumado en mesa.",
                  "de": "Rauchtinkturen werden erstellt durch Einfangen von Holzrauch (Eiche, Apfelholz, Hickory, Mesquite) in hochprozentigem Alkohol mit Rauchpistolen oder Kammer-Setups. Der Rauch löst sich in der Spirituose auf und erzeugt eine konzentrierte rauchige Essenz, die tropfenweise zu Cocktails hinzugefügt werden kann. Im Gegensatz zu kommerziellem flüssigen Rauch (der harsch sein kann) bieten von Bartendern gemachte Rauchtinkturen nuancierten, natürlichen Rauchcharakter. Verschiedene Hölzer liefern verschiedene Profile - Apfelholz gibt süßen Rauch, Hickory ist kräftig, Kirsche ist fruchtig. Ermöglicht präzise Rauchdosierung ohne das Getränk zu überwältigen oder Tisch-Rauch-Theatralik zu erfordern.",
                  "nl": "Rook tincturen worden gecreëerd door houtrook (eik, appelhout, hickory, mesquite) op te vangen in hoogprocentig alcohol met behulp van rook pistolen of kamer opstellingen. De rook lost op in de spirit, creëert een geconcentreerde rookachtige essentie die druppel voor druppel kan worden toegevoegd aan cocktails. In tegenstelling tot commerciële vloeibare rook (die hard kan zijn), bieden door bartenders gemaakte rook tincturen genuanceerd, natuurlijk rook karakter. Verschillende houtsoorten bieden verschillende profielen - appelhout geeft zoete rook, hickory is gedurfd, kers is fruitig. Staat precieze rook dosering toe zonder de drank te overweldigen of tafel rook theatraliteit te vereisen."
        }
      },
      {
        question: {
                  "en": "What is 'verjus' and how is it used in cocktails?",
                  "es": "¿Qué es el 'verjus' y cómo se usa en cócteles?",
                  "de": "Was ist 'Verjus' und wie wird es in Cocktails verwendet?",
                  "nl": "Wat is 'verjus' en hoe wordt het gebruikt in cocktails?"
        },
        options: [
        {
                  "en": "Green vegetable juice",
                  "es": "Jugo de vegetales verdes",
                  "de": "Grüner Gemüsesaft",
                  "nl": "Groen groentesap"
        },
        {
                  "en": "Herbal liqueur from France",
                  "es": "Licor de hierbas de Francia",
                  "de": "Kräuterlikör aus Frankreich",
                  "nl": "Kruiden likeur uit Frankrijk"
        },
        {
                  "en": "Type of vermouth",
                  "es": "Tipo de vermut",
                  "de": "Art von Wermut",
                  "nl": "Soort vermouth"
        },
        {
                  "en": "Unripe grape juice providing acidity without citrus; wine-like complexity for sophisticated cocktails",
                  "es": "Jugo de uva verde proporcionando acidez sin cítricos; complejidad similar al vino para cócteles sofisticados",
                  "de": "Unreifer Traubensaft, der Säure ohne Zitrus liefert; weinähnliche Komplexität für anspruchsvolle Cocktails",
                  "nl": "Onrijp druivensap dat zuurgraad biedt zonder citrus; wijnachtige complexiteit voor verfijnde cocktails"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Verjus (French for 'green juice') is the pressed juice of unripe grapes, traditionally used in cooking. In cocktails, it provides gentle acidity (milder than citrus) with subtle fruity, wine-like complexity and minerality. Unlike lemon/lime, verjus doesn't dominate but adds nuanced brightness and balances sweetness elegantly. It's particularly useful in spirit-forward or wine-based cocktails where citrus would clash. White verjus is delicate and floral, red verjus has more tannin and depth. Allows bartenders to add acidity while maintaining sophistication.",
                  "es": "El verjus (francés para 'jugo verde') es el jugo prensado de uvas verdes, tradicionalmente usado en cocina. En cócteles, proporciona acidez suave (más suave que cítricos) con sutil complejidad afrutada similar al vino y mineralidad. A diferencia del limón/lima, el verjus no domina sino que añade brillo matizado y equilibra la dulzura elegantemente. Es particularmente útil en cócteles con predominio de licor o basados en vino donde los cítricos chocarían. El verjus blanco es delicado y floral, el verjus rojo tiene más tanino y profundidad. Permite a los bartenders añadir acidez mientras mantienen sofisticación.",
                  "de": "Verjus (Französisch für 'grüner Saft') ist der gepresste Saft unreifer Trauben, traditionell in der Küche verwendet. In Cocktails liefert es sanfte Säure (milder als Zitrus) mit subtiler fruchtiger, weinähnlicher Komplexität und Mineralität. Im Gegensatz zu Zitrone/Limette dominiert Verjus nicht, sondern fügt nuancierte Helligkeit hinzu und balanciert Süße elegant. Es ist besonders nützlich in spirituosenbetonten oder weinbasierten Cocktails, wo Zitrus kollidieren würde. Weißer Verjus ist delikat und blumig, roter Verjus hat mehr Tannin und Tiefe. Ermöglicht Bartendern Säure hinzuzufügen während Raffinesse erhalten bleibt.",
                  "nl": "Verjus (Frans voor 'groen sap') is het geperste sap van onrijpe druiven, traditioneel gebruikt in koken. In cocktails biedt het zachte zuurgraad (milder dan citrus) met subtiele fruitige, wijnachtige complexiteit en mineraliteit. In tegenstelling tot citroen/limoen domineert verjus niet maar voegt genuanceerde helderheid toe en balanceert zoetheid elegant. Het is bijzonder nuttig in spirit-forward of wijn-gebaseerde cocktails waar citrus zou botsen. Witte verjus is delicaat en bloemig, rode verjus heeft meer tannine en diepte. Stelt bartenders in staat zuurgraad toe te voegen terwijl verfijning behouden blijft."
        }
      },
      {
        question: {
                  "en": "What is 'saline solution' usage in cocktails?",
                  "es": "¿Qué es el uso de 'solución salina' en cócteles?",
                  "de": "Was ist die Verwendung von 'Salzlösung' in Cocktails?",
                  "nl": "Wat is het gebruik van 'zoutoplossing' in cocktails?"
        },
        options: [
        {
                  "en": "Saltwater rim for margaritas",
                  "es": "Borde de agua salada para margaritas",
                  "de": "Salzwasserrand für Margaritas",
                  "nl": "Zoutwater rand voor margaritas"
        },
        {
                  "en": "Medical saline for hydration",
                  "es": "Salina médica para hidratación",
                  "de": "Medizinische Kochsalzlösung zur Hydratation",
                  "nl": "Medische zoutoplossing voor hydratatie"
        },
        {
                  "en": "Ocean water flavoring",
                  "es": "Saborizante de agua de mar",
                  "de": "Meerwasser-Aroma",
                  "nl": "Oceaanwater smaakstof"
        },
        {
                  "en": "20% salt solution added in drops to enhance flavors, suppress bitterness, and add mouthfeel",
                  "es": "Solución salina al 20% añadida en gotas para realzar sabores, suprimir amargura y añadir sensación en boca",
                  "de": "20% Salzlösung in Tropfen hinzugefügt um Aromen zu verstärken, Bitterkeit zu unterdrücken und Mundgefühl hinzuzufügen",
                  "nl": "20% zoutoplossing in druppels toegevoegd om smaken te versterken, bitterheid te onderdrukken en mondgevoel toe te voegen"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Saline solution (typically 20% salt by weight in water) is used in tiny quantities (2-4 drops per cocktail) to enhance flavor perception through multiple mechanisms. Salt suppresses bitterness, enhances sweetness perception, amplifies aromatics, and adds body/mouthfeel. It acts like seasoning in cooking - imperceptible as 'salty' but making other flavors pop. Particularly effective in citrus-forward and bitter cocktails (Margaritas, Daiquiris, Negronis). Professional bartenders keep saline in dropper bottles for precise dosing. Transforms drinks subtly but significantly.",
                  "es": "La solución salina (típicamente 20% sal por peso en agua) se usa en cantidades diminutas (2-4 gotas por cóctel) para realzar la percepción del sabor a través de múltiples mecanismos. La sal suprime amargura, mejora percepción de dulzura, amplifica aromáticos y añade cuerpo/sensación en boca. Actúa como condimento en cocina - imperceptible como 'salado' pero haciendo que otros sabores resalten. Particularmente efectivo en cócteles con predominio de cítricos y amargos (Margaritas, Daiquiris, Negronis). Los bartenders profesionales mantienen salina en botellas goteras para dosificación precisa. Transforma bebidas sutilmente pero significativamente.",
                  "de": "Salzlösung (typisch 20% Salz nach Gewicht in Wasser) wird in winzigen Mengen (2-4 Tropfen pro Cocktail) verwendet um Geschmackswahrnehmung durch mehrere Mechanismen zu verbessern. Salz unterdrückt Bitterkeit, verstärkt Süßewahrnehmung, amplifiziert Aromen und fügt Körper/Mundgefühl hinzu. Es wirkt wie Würze beim Kochen - nicht wahrnehmbar als 'salzig' aber lässt andere Aromen hervorstechen. Besonders effektiv in zitrusbetonten und bitteren Cocktails (Margaritas, Daiquiris, Negronis). Professionelle Bartender halten Salzlösung in Tropfflaschen für präzise Dosierung. Transformiert Getränke subtil aber signifikant.",
                  "nl": "Zoutoplossing (typisch 20% zout op gewicht in water) wordt gebruikt in kleine hoeveelheden (2-4 druppels per cocktail) om smaakperceptie te verbeteren door meerdere mechanismen. Zout onderdrukt bitterheid, verbetert zoetheid perceptie, versterkt aromaten en voegt body/mondgevoel toe. Het werkt als kruiden in koken - niet waarneembaar als 'zout' maar laat andere smaken opvallen. Bijzonder effectief in citrus-forward en bittere cocktails (Margaritas, Daiquiris, Negronis). Professionele bartenders bewaren zoutoplossing in druppelflesjes voor precieze dosering. Transformeert drankjes subtiel maar significant."
        }
      },
      {
        question: {
                  "en": "What is 'umami solution' or 'fifth taste' in cocktails?",
                  "es": "¿Qué es la 'solución umami' o 'quinto sabor' en cócteles?",
                  "de": "Was ist 'Umami-Lösung' oder 'fünfter Geschmack' in Cocktails?",
                  "nl": "Wat is 'umami oplossing' of 'vijfde smaak' in cocktails?"
        },
        options: [
        {
                  "en": "Monosodium glutamate powder",
                  "es": "Polvo de glutamato monosódico",
                  "de": "Mononatriumglutamat-Pulver",
                  "nl": "Mononatriumglutamaat poeder"
        },
        {
                  "en": "Fifth ingredient added",
                  "es": "Quinto ingrediente añadido",
                  "de": "Fünfte zugesetzte Zutat",
                  "nl": "Vijfde toegevoegde ingrediënt"
        },
        {
                  "en": "Savory depth from glutamates (miso, soy, seaweed, mushroom) adding complexity to cocktails",
                  "es": "Profundidad salada de glutamatos (miso, soja, algas, hongos) añadiendo complejidad a cócteles",
                  "de": "Herzhafte Tiefe aus Glutamaten (Miso, Soja, Seetang, Pilze) fügt Komplexität zu Cocktails hinzu",
                  "nl": "Hartige diepte van glutamaten (miso, soja, zeewier, paddenstoel) voegt complexiteit toe aan cocktails"
        },
        {
                  "en": "Asian spice blend",
                  "es": "Mezcla de especias asiáticas",
                  "de": "Asiatische Gewürzmischung",
                  "nl": "Aziatische specerijen mengsel"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Umami (Japanese for 'pleasant savory taste') refers to the fifth taste alongside sweet, sour, bitter, and salty. In cocktails, umami adds savory depth and complexity through glutamate-rich ingredients like miso paste, soy sauce, shiitake mushroom, kombu seaweed, or parmesan. These are typically made into tinctures or syrups for cocktail use. Umami enhances mouthfeel, adds unexpected complexity, and creates savory-sweet balance in drinks like Bloody Marys or modern Martini variations. The technique bridges cocktails and gastronomy, appealing to adventurous drinkers.",
                  "es": "Umami (japonés para 'sabor salado agradable') se refiere al quinto sabor junto con dulce, ácido, amargo y salado. En cócteles, umami añade profundidad salada y complejidad a través de ingredientes ricos en glutamato como pasta de miso, salsa de soja, hongo shiitake, alga kombu o parmesano. Estos típicamente se hacen en tinturas o jarabes para uso en cócteles. Umami mejora sensación en boca, añade complejidad inesperada y crea equilibrio salado-dulce en bebidas como Bloody Marys o variaciones modernas de Martini. La técnica une cócteles y gastronomía, atrayendo a bebedores aventureros.",
                  "de": "Umami (Japanisch für 'angenehmer herzhafter Geschmack') bezieht sich auf den fünften Geschmack neben süß, sauer, bitter und salzig. In Cocktails fügt Umami herzhafte Tiefe und Komplexität durch glutamatreiche Zutaten wie Miso-Paste, Sojasauce, Shiitake-Pilze, Kombu-Seetang oder Parmesan hinzu. Diese werden typischerweise zu Tinkturen oder Sirupen für Cocktail-Verwendung verarbeitet. Umami verbessert Mundgefühl, fügt unerwartete Komplexität hinzu und schafft herzhafte-süße Balance in Getränken wie Bloody Marys oder modernen Martini-Variationen. Die Technik verbindet Cocktails und Gastronomie, spricht abenteuerlustige Trinker an.",
                  "nl": "Umami (Japans voor 'aangename hartige smaak') verwijst naar de vijfde smaak naast zoet, zuur, bitter en zout. In cocktails voegt umami hartige diepte en complexiteit toe door glutamaatrijke ingrediënten zoals miso pasta, sojasaus, shiitake paddenstoel, kombu zeewier of parmezaan. Deze worden typisch gemaakt tot tincturen of siropen voor cocktail gebruik. Umami verbetert mondgevoel, voegt onverwachte complexiteit toe en creëert hartig-zoet balans in drankjes zoals Bloody Marys of moderne Martini variaties. De techniek verbindt cocktails en gastronomie, spreekt avontuurlijke drinkers aan."
        }
      },
      {
        question: {
                  "en": "What is 'acid phosphate' in classic cocktails?",
                  "es": "¿Qué es el 'fosfato ácido' en cócteles clásicos?",
                  "de": "Was ist 'Säurephosphat' in klassischen Cocktails?",
                  "nl": "Wat is 'zuur fosfaat' in klassieke cocktails?"
        },
        options: [
        {
                  "en": "Phosphoric acid solution adding clean tartness and minerality to sodas and cocktails",
                  "es": "Solución de ácido fosfórico añadiendo acidez limpia y mineralidad a sodas y cócteles",
                  "de": "Phosphorsäurelösung, die saubere Säure und Mineralität zu Sodas und Cocktails hinzufügt",
                  "nl": "Fosforzuur oplossing die schone zuurheid en mineraliteit toevoegt aan frisdranken en cocktails"
        },
        {
                  "en": "Carbonation additive",
                  "es": "Aditivo de carbonatación",
                  "de": "Kohlensäurezusatz",
                  "nl": "Koolzuur additief"
        },
        {
                  "en": "Citrus concentrate",
                  "es": "Concentrado de cítricos",
                  "de": "Zitruskonzentrat",
                  "nl": "Citrus concentraat"
        },
        {
                  "en": "A type of bitters",
                  "es": "Un tipo de amargos",
                  "de": "Eine Art Bitter",
                  "nl": "Een soort bitters"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Acid phosphate is a dilute solution of phosphoric acid (10-15%) historically used in soda fountains and classic cocktails. It provides clean, mineral acidity different from citrus - sharper and less fruity. Originally marketed as digestive aid, it became essential in drinks like phosphates (soda + acid phosphate + flavor syrup). Modern craft bartenders revived it for adding acidity without citrus flavor, useful when citrus would clash or for creating period-accurate classic cocktails. Brands like Bartender's or Embitters produce modern versions.",
                  "es": "El fosfato ácido es una solución diluida de ácido fosfórico (10-15%) históricamente usada en fuentes de soda y cócteles clásicos. Proporciona acidez mineral limpia diferente de cítricos - más aguda y menos afrutada. Originalmente comercializado como ayuda digestiva, se volvió esencial en bebidas como fosfatos (soda + fosfato ácido + jarabe de sabor). Los bartenders artesanales modernos lo revivieron para añadir acidez sin sabor cítrico, útil cuando los cítricos chocarían o para crear cócteles clásicos precisos del período. Marcas como Bartender's o Embitters producen versiones modernas.",
                  "de": "Säurephosphat ist eine verdünnte Lösung von Phosphorsäure (10-15%), historisch verwendet in Sodabrunnen und klassischen Cocktails. Es liefert saubere, minerale Säure anders als Zitrus - schärfer und weniger fruchtig. Ursprünglich als Verdauungshilfe vermarktet, wurde es essentiell in Getränken wie Phosphaten (Soda + Säurephosphat + Aromasirup). Moderne Craft-Bartender belebten es wieder, um Säure ohne Zitrusgeschmack hinzuzufügen, nützlich wenn Zitrus kollidieren würde oder für periode-genaue klassische Cocktails. Marken wie Bartender's oder Embitters produzieren moderne Versionen.",
                  "nl": "Zuur fosfaat is een verdunde oplossing van fosforzuur (10-15%) historisch gebruikt in frisdrankfonteinen en klassieke cocktails. Het biedt schone, minerale zuurgraad anders dan citrus - scherper en minder fruitig. Oorspronkelijk op de markt gebracht als spijsverteringshulp, werd het essentieel in drankjes zoals fosfaten (frisdrank + zuur fosfaat + smaak siroop). Moderne craft bartenders brachten het terug om zuurgraad toe te voegen zonder citrus smaak, nuttig wanneer citrus zou botsen of voor het creëren van periode-nauwkeurige klassieke cocktails. Merken zoals Bartender's of Embitters produceren moderne versies."
        }
      },
      {
        question: {
                  "en": "What is 'whey washing' spirits?",
                  "es": "¿Qué es el 'lavado con suero' de licores?",
                  "de": "Was ist 'Molke-Washing' von Spirituosen?",
                  "nl": "Wat is 'wei wassen' van spirits?"
        },
        options: [
        {
                  "en": "Adding whey protein powder",
                  "es": "Añadir polvo de proteína de suero",
                  "de": "Molkeproteinpulver hinzufügen",
                  "nl": "Wei eiwit poeder toevoegen"
        },
        {
                  "en": "Washing glassware with whey",
                  "es": "Lavar cristalería con suero",
                  "de": "Glaswaren mit Molke waschen",
                  "nl": "Glaswerk wassen met wei"
        },
        {
                  "en": "Cheese-flavored cocktails",
                  "es": "Cócteles con sabor a queso",
                  "de": "Käsegeschmackartige Cocktails",
                  "nl": "Kaas-gesmaakt cocktails"
        },
        {
                  "en": "Using milk whey to clarify and soften spirits through protein coagulation, similar to milk punch but with different texture",
                  "es": "Usar suero de leche para clarificar y suavizar licores a través de coagulación de proteínas, similar al milk punch pero con textura diferente",
                  "de": "Molke verwenden um Spirituosen durch Proteinkoagulation zu klären und zu mildern, ähnlich wie Milk Punch aber mit anderer Textur",
                  "nl": "Wei gebruiken om spirits te verhelderen en verzachten door eiwit coagulatie, vergelijkbaar met milk punch maar met andere textuur"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Whey washing involves adding liquid whey (the liquid byproduct from cheese/yogurt making) to spirits, causing proteins to coagulate and trap harsh compounds, then straining. Similar to milk punch clarification but whey contains less fat and casein, producing a lighter, silkier texture with subtle lactic tanginess. The process mellows harsh spirits, removes unwanted flavors, and adds complexity. Used for clarifying and softening aged spirits or creating unique flavor profiles. The technique has roots in historical punch-making and was popularized by modern bartenders experimenting with dairy clarification variations.",
                  "es": "El lavado con suero implica añadir suero líquido (el subproducto líquido de hacer queso/yogur) a licores, causando que las proteínas coagulen y atrapen compuestos ásperos, luego colar. Similar a clarificación con milk punch pero el suero contiene menos grasa y caseína, produciendo textura más ligera y sedosa con acidez láctica sutil. El proceso suaviza licores ásperos, elimina sabores no deseados y añade complejidad. Usado para clarificar y suavizar licores añejados o crear perfiles de sabor únicos. La técnica tiene raíces en elaboración histórica de punch y fue popularizada por bartenders modernos experimentando con variaciones de clarificación láctea.",
                  "de": "Molke-Washing beinhaltet Zugabe flüssiger Molke (flüssiges Nebenprodukt aus Käse-/Joghurtherstellung) zu Spirituosen, verursacht Proteinkoagulation und fängt harte Verbindungen ein, dann abseihen. Ähnlich wie Milk Punch Klärung aber Molke enthält weniger Fett und Kasein, produziert leichtere, seidigere Textur mit subtiler Milchsäure-Säure. Der Prozess mildert harte Spirituosen, entfernt unerwünschte Aromen und fügt Komplexität hinzu. Verwendet zur Klärung und Milderung gereifter Spirituosen oder Schaffung einzigartiger Geschmacksprofile. Die Technik hat Wurzeln in historischer Punch-Herstellung und wurde von modernen Bartendern popularisiert, die mit Milchklärungsvariationen experimentieren.",
                  "nl": "Wei wassen houdt in dat vloeibare wei (het vloeibare bijproduct van kaas/yoghurt maken) aan spirits wordt toegevoegd, wat eiwitten laat coaguleren en harde verbindingen opvangt, dan zeven. Vergelijkbaar met milk punch verheldering maar wei bevat minder vet en caseïne, produceert lichtere, zijdezachtere textuur met subtiele melkzuur zuurgraad. Het proces verzacht harde spirits, verwijdert ongewenste smaken en voegt complexiteit toe. Gebruikt voor verhelderen en verzachten van gerijpte spirits of creëren van unieke smaakprofielen. De techniek heeft wortels in historische punch-bereiding en werd gepopulariseerd door moderne bartenders die experimenteren met zuivel verheldering variaties."
        }
      },
      {
        question: {
                  "en": "What is 'gellan gum' usage in molecular cocktails?",
                  "es": "¿Qué es el uso de 'goma gellan' en cócteles moleculares?",
                  "de": "Was ist die Verwendung von 'Gellan-Gummi' in molekularen Cocktails?",
                  "nl": "Wat is het gebruik van 'gellan gom' in moleculaire cocktails?"
        },
        options: [
        {
                  "en": "Thickening syrup only",
                  "es": "Solo espesante de jarabe",
                  "de": "Nur Sirupverdickungsmittel",
                  "nl": "Alleen siroop verdikkingsmiddel"
        },
        {
                  "en": "Chewing gum flavoring",
                  "es": "Saborizante de chicle",
                  "de": "Kaugummiaroma",
                  "nl": "Kauwgom smaakstof"
        },
        {
                  "en": "Natural sweetener",
                  "es": "Edulcorante natural",
                  "de": "Natürlicher Süßstoff",
                  "nl": "Natuurlijke zoetstof"
        },
        {
                  "en": "Gelling agent creating fluid gels, suspended garnishes, or caviar spheres with clean flavor release",
                  "es": "Agente gelificante creando geles fluidos, guarniciones suspendidas o esferas de caviar con liberación de sabor limpia",
                  "de": "Geliermittel, das Flüssiggele, suspendierte Garnituren oder Kaviar-Kugeln mit sauberer Aromafreisetzung erzeugt",
                  "nl": "Geleringsmiddel dat vloeibare gels, gesuspendeerde garneringen of kaviaar bollen creëert met schone smaak afgifte"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Gellan gum is a polysaccharide gelling agent used in molecular mixology to create unique textures. At low concentrations (0.1-0.3%), it makes 'fluid gels' - semi-solid textures that flow but maintain structure. At higher concentrations (0.5-1%), it creates firm gels. Unlike gelatin, gellan sets at room temperature and is heat-stable. Applications: suspended fruit/herb garnishes, cocktail caviar/pearls (reverse spherification), layered gel shooters, or gelled foams. Sets with calcium or hot liquid. Provides clean flavor release without masking taste, making it ideal for showcasing ingredients in innovative presentations.",
                  "es": "La goma gellan es un agente gelificante de polisacárido usado en mixología molecular para crear texturas únicas. A bajas concentraciones (0.1-0.3%), hace 'geles fluidos' - texturas semi-sólidas que fluyen pero mantienen estructura. A concentraciones más altas (0.5-1%), crea geles firmes. A diferencia de la gelatina, gellan se solidifica a temperatura ambiente y es estable al calor. Aplicaciones: guarniciones de frutas/hierbas suspendidas, caviar/perlas de cóctel (esferificación inversa), shooters de gel en capas o espumas gelificadas. Se solidifica con calcio o líquido caliente. Proporciona liberación de sabor limpia sin enmascarar gusto, haciéndolo ideal para mostrar ingredientes en presentaciones innovadoras.",
                  "de": "Gellan-Gummi ist ein Polysaccharid-Geliermittel, das in molekularer Mixologie zur Schaffung einzigartiger Texturen verwendet wird. Bei niedrigen Konzentrationen (0,1-0,3%) macht es 'Flüssiggele' - halbfeste Texturen, die fließen aber Struktur beibehalten. Bei höheren Konzentrationen (0,5-1%) erzeugt es feste Gele. Anders als Gelatine setzt Gellan bei Raumtemperatur und ist hitzestabil. Anwendungen: suspendierte Frucht-/Kräuter-Garnituren, Cocktail-Kaviar/Perlen (umgekehrte Sphärifizierung), geschichtete Gel-Shooter oder gelierte Schäume. Setzt mit Kalzium oder heißer Flüssigkeit. Bietet saubere Aromafreisetzung ohne Geschmacksmaskierung, ideal zum Präsentieren von Zutaten in innovativen Präsentationen.",
                  "nl": "Gellan gom is een polysacharide geleringsmiddel gebruikt in moleculaire mixologie om unieke texturen te creëren. Bij lage concentraties (0,1-0,3%) maakt het 'vloeibare gels' - semi-vaste texturen die stromen maar structuur behouden. Bij hogere concentraties (0,5-1%) creëert het stevige gels. In tegenstelling tot gelatine stolt gellan bij kamertemperatuur en is hittebestendig. Toepassingen: gesuspendeerde fruit/kruiden garneringen, cocktail kaviaar/parels (omgekeerde spherificatie), gelaagde gel shots of gegelde schuimen. Stolt met calcium of hete vloeistof. Biedt schone smaak afgifte zonder smaak maskering, ideaal voor het showcasen van ingrediënten in innovatieve presentaties."
        }
      },
      {
        question: {
                  "en": "What is 'barrel aging cocktails' and key considerations?",
                  "es": "¿Qué es el 'envejecimiento en barril de cócteles' y consideraciones clave?",
                  "de": "Was ist 'Fassreifung von Cocktails' und wichtige Überlegungen?",
                  "nl": "Wat is 'vat rijpen van cocktails' en belangrijke overwegingen?"
        },
        options: [
        {
                  "en": "Aging pre-batched cocktails in oak barrels to add tannins, vanilla, oxidation, and wood complexity; requires spirit-forward recipes",
                  "es": "Envejecer cócteles pre-loteados en barriles de roble para añadir taninos, vainilla, oxidación y complejidad de madera; requiere recetas con predominio de licor",
                  "de": "Vorgefertigte Cocktails in Eichenfässern reifen um Tannine, Vanille, Oxidation und Holzkomplexität hinzuzufügen; erfordert spirituosenbetonte Rezepte",
                  "nl": "Vooraf gemengde cocktails rijpen in eiken vaten om tannines, vanille, oxidatie en houtcomplexiteit toe te voegen; vereist spirit-forward recepten"
        },
        {
                  "en": "Decorating with barrel staves",
                  "es": "Decorar con duelas de barril",
                  "de": "Mit Fassdauben dekorieren",
                  "nl": "Decoreren met vat duigen"
        },
        {
                  "en": "Using barrel-aged spirits only",
                  "es": "Usar solo licores envejecidos en barril",
                  "de": "Nur fassgereifte Spirituosen verwenden",
                  "nl": "Alleen vat-gerijpte spirits gebruiken"
        },
        {
                  "en": "Storing cocktails in any container",
                  "es": "Almacenar cócteles en cualquier contenedor",
                  "de": "Cocktails in jedem Behälter lagern",
                  "nl": "Cocktails opslaan in elk container"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Barrel aging cocktails involves storing batched, spirit-forward cocktails (Negronis, Manhattans, Old Fashioneds) in small oak barrels (1-20L) for weeks to months. The process imparts: wood tannins, vanilla/caramel notes from oak, slight oxidation (mellowing), integration of flavors, and color deepening. Key considerations: only use high-proof, spirit-forward recipes (citrus/dairy spoil); smaller barrels = faster aging; toast level affects flavor; rotation ensures even contact; monitor taste weekly; dilution increases 10-20%. Results in smoother, more complex cocktails with wine-like characteristics. Popular in craft cocktail programs.",
                  "es": "El envejecimiento en barril de cócteles implica almacenar cócteles loteados con predominio de licor (Negronis, Manhattans, Old Fashioneds) en barriles de roble pequeños (1-20L) durante semanas a meses. El proceso imparte: taninos de madera, notas de vainilla/caramelo del roble, ligera oxidación (suavizado), integración de sabores y profundización de color. Consideraciones clave: solo usar recetas de alta graduación con predominio de licor (cítricos/lácteos se echan a perder); barriles más pequeños = envejecimiento más rápido; nivel de tostado afecta sabor; rotación asegura contacto uniforme; monitorear sabor semanalmente; dilución aumenta 10-20%. Resulta en cócteles más suaves y complejos con características similares al vino. Popular en programas de cóctel artesanal.",
                  "de": "Fassreifung von Cocktails beinhaltet Lagerung vorgefertigter, spirituosenbetonter Cocktails (Negronis, Manhattans, Old Fashioneds) in kleinen Eichenfässern (1-20L) für Wochen bis Monate. Der Prozess verleiht: Holztannine, Vanille-/Karamellnoten aus Eiche, leichte Oxidation (Milderung), Geschmacksintegration und Farbvertiefung. Wichtige Überlegungen: nur hochprozentige, spirituosenbetonte Rezepte verwenden (Zitrus/Milchprodukte verderben); kleinere Fässer = schnellere Reifung; Röstgrad beeinflusst Geschmack; Rotation gewährleistet gleichmäßigen Kontakt; Geschmack wöchentlich überwachen; Verdünnung steigt 10-20%. Ergibt glattere, komplexere Cocktails mit weinähnlichen Eigenschaften. Beliebt in Craft-Cocktail-Programmen.",
                  "nl": "Vat rijpen van cocktails houdt in dat vooraf gemengde, spirit-forward cocktails (Negronis, Manhattans, Old Fashioneds) worden opgeslagen in kleine eiken vaten (1-20L) gedurende weken tot maanden. Het proces geeft: hout tannines, vanille/karamel tonen van eik, lichte oxidatie (verzachting), integratie van smaken en kleurverdieping. Belangrijke overwegingen: alleen hoogprocentige, spirit-forward recepten gebruiken (citrus/zuivel bederften); kleinere vaten = sneller rijpen; rooster niveau beïnvloedt smaak; rotatie verzekert gelijkmatig contact; smaak wekelijks monitoren; verdunning neemt 10-20% toe. Resulteert in gladdere, complexere cocktails met wijnachtige kenmerken. Populair in craft cocktail programma's."
        }
      },
      {
        question: {
                  "en": "What is 'ice program' in professional bartending?",
                  "es": "¿Qué es el 'programa de hielo' en bartending profesional?",
                  "de": "Was ist das 'Eis-Programm' im professionellen Bartending?",
                  "nl": "Wat is 'ijs programma' in professioneel bartending?"
        },
        options: [
        {
                  "en": "Ice delivery schedule",
                  "es": "Horario de entrega de hielo",
                  "de": "Eis-Lieferplan",
                  "nl": "IJs leverschema"
        },
        {
                  "en": "Strategic ice management: clear vs. cloudy, size/shape for dilution control, directional freezing, hand-carved vs. molded",
                  "es": "Gestión estratégica de hielo: claro vs. turbio, tamaño/forma para control de dilución, congelación direccional, tallado a mano vs. moldeado",
                  "de": "Strategisches Eis-Management: klar vs. trüb, Größe/Form für Verdünnungskontrolle, gerichtetes Gefrieren, handgeschnitzt vs. geformt",
                  "nl": "Strategisch ijs beheer: helder vs. troebel, grootte/vorm voor verdunningscontrole, directioneel bevriezen, handgesneden vs. gevormd"
        },
        {
                  "en": "Computer program for ice making",
                  "es": "Programa informático para hacer hielo",
                  "de": "Computerprogramm für Eisherstellung",
                  "nl": "Computer programma voor ijsmaken"
        },
        {
                  "en": "Training on ice handling only",
                  "es": "Entrenamiento solo en manejo de hielo",
                  "de": "Training nur zur Eisbehandlung",
                  "nl": "Training alleen over ijs hantering"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "An ice program is comprehensive ice strategy in professional bars covering: 1) Clarity - directional freezing or filtered water for clear ice vs. cloudy for specific uses, 2) Size/shape - large cubes (slow dilution), pebble ice (fast chill/dilution), spears (highballs), spheres (rocks drinks), 3) Production - hand-carving from blocks, silicone molds, specialized machines, 4) Storage - separate wells for different ice types, 5) Application - matching ice to cocktail style. High-end bars may have dedicated ice programs with custom molds, tempering protocols, and trained ice carvers. Ice is considered as important as any other ingredient.",
                  "es": "Un programa de hielo es estrategia integral de hielo en bares profesionales cubriendo: 1) Claridad - congelación direccional o agua filtrada para hielo claro vs. turbio para usos específicos, 2) Tamaño/forma - cubos grandes (dilución lenta), hielo perlado (enfriamiento/dilución rápidos), lanzas (highballs), esferas (bebidas on the rocks), 3) Producción - tallado a mano de bloques, moldes de silicona, máquinas especializadas, 4) Almacenamiento - pozos separados para diferentes tipos de hielo, 5) Aplicación - emparejar hielo con estilo de cóctel. Bares de alta gama pueden tener programas de hielo dedicados con moldes personalizados, protocolos de templado y talladores de hielo entrenados. El hielo se considera tan importante como cualquier otro ingrediente.",
                  "de": "Ein Eis-Programm ist umfassende Eis-Strategie in professionellen Bars umfassend: 1) Klarheit - gerichtetes Gefrieren oder gefiltertes Wasser für klares Eis vs. trüb für spezifische Verwendungen, 2) Größe/Form - große Würfel (langsame Verdünnung), Kieseleis (schnelle Kühlung/Verdünnung), Speere (Highballs), Kugeln (Rocks-Getränke), 3) Produktion - Handschnitzen aus Blöcken, Silikonformen, spezialisierte Maschinen, 4) Lagerung - separate Behälter für verschiedene Eistypen, 5) Anwendung - Eis an Cocktail-Stil anpassen. High-End-Bars können dedizierte Eis-Programme mit maßgeschneiderten Formen, Temperierprotokollen und trainierten Eisschnitzern haben. Eis wird als genauso wichtig wie jede andere Zutat betrachtet.",
                  "nl": "Een ijs programma is uitgebreide ijs strategie in professionele bars omvattend: 1) Helderheid - directioneel bevriezen of gefilterd water voor helder ijs vs. troebel voor specifieke toepassingen, 2) Grootte/vorm - grote blokjes (trage verdunning), kiezel ijs (snelle koeling/verdunning), speren (highballs), bollen (rocks drankjes), 3) Productie - handgesneden uit blokken, siliconen vormen, gespecialiseerde machines, 4) Opslag - aparte bakken voor verschillende ijs types, 5) Toepassing - ijs matchen aan cocktail stijl. High-end bars kunnen toegewijde ijs programma's hebben met aangepaste vormen, tempering protocollen en getrainde ijs snijders. IJs wordt beschouwd als even belangrijk als elk ander ingrediënt."
        }
      },
      {
        question: {
                  "en": "What is 'tea washing' or 'tea infusion' for spirits?",
                  "es": "¿Qué es el 'lavado con té' o 'infusión de té' para licores?",
                  "de": "Was ist 'Tee-Washing' oder 'Tee-Infusion' für Spirituosen?",
                  "nl": "Wat is 'thee wassen' of 'thee infusie' voor spirits?"
        },
        options: [
        {
                  "en": "Making tea cocktails only",
                  "es": "Hacer solo cócteles de té",
                  "de": "Nur Tee-Cocktails machen",
                  "nl": "Alleen thee cocktails maken"
        },
        {
                  "en": "Cleaning spirits of impurities",
                  "es": "Limpiar licores de impurezas",
                  "de": "Spirituosen von Verunreinigungen reinigen",
                  "nl": "Spirits reinigen van onzuiverheden"
        },
        {
                  "en": "Infusing spirits with tea (cold brew or rapid sous vide) to add tannins, aromatics, and complexity",
                  "es": "Infundir licores con té (cold brew o sous vide rápido) para añadir taninos, aromáticos y complejidad",
                  "de": "Spirituosen mit Tee infundieren (Kaltaufguss oder schnelles Sous Vide) um Tannine, Aromen und Komplexität hinzuzufügen",
                  "nl": "Spirits infuseren met thee (koude extractie of snelle sous vide) om tannines, aromaten en complexiteit toe te voegen"
        },
        {
                  "en": "Using tea as garnish",
                  "es": "Usar té como guarnición",
                  "de": "Tee als Garnitur verwenden",
                  "nl": "Thee gebruiken als garnering"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Tea washing/infusion involves steeping tea leaves in spirits to extract flavors, tannins, and aromatics. Methods: 1) Cold infusion (24-48 hours room temp) for delicate teas (white, green), 2) Rapid sous vide (1-2 hours at 55-60°C) for faster extraction, 3) Traditional hot steep then cool. Different teas provide different profiles - green tea adds grassy notes, black tea gives tannins and depth, oolong offers floral complexity, smoky teas (lapsang souchong) add campfire notes. Particularly effective with neutral spirits (vodka, white rum) or complementary base spirits (gin + earl grey). Strain thoroughly to prevent bitterness.",
                  "es": "El lavado/infusión con té implica remojar hojas de té en licores para extraer sabores, taninos y aromáticos. Métodos: 1) Infusión fría (24-48 horas temp ambiente) para tés delicados (blanco, verde), 2) Sous vide rápido (1-2 horas a 55-60°C) para extracción más rápida, 3) Remojo caliente tradicional luego enfriar. Diferentes tés proporcionan diferentes perfiles - té verde añade notas herbáceas, té negro da taninos y profundidad, oolong ofrece complejidad floral, tés ahumados (lapsang souchong) añaden notas de fogata. Particularmente efectivo con licores neutrales (vodka, ron blanco) o licores base complementarios (gin + earl grey). Colar completamente para prevenir amargura.",
                  "de": "Tee-Washing/Infusion beinhaltet Ziehenlassen von Teeblättern in Spirituosen zur Extraktion von Aromen, Tanninen und Aromen. Methoden: 1) Kaltinfusion (24-48 Stunden Raumtemperatur) für zarte Tees (weiß, grün), 2) Schnelles Sous Vide (1-2 Stunden bei 55-60°C) für schnellere Extraktion, 3) Traditionelles heißes Ziehen dann abkühlen. Verschiedene Tees liefern verschiedene Profile - grüner Tee fügt grasige Noten hinzu, schwarzer Tee gibt Tannine und Tiefe, Oolong bietet florale Komplexität, rauchige Tees (Lapsang Souchong) fügen Lagerfeuer-Noten hinzu. Besonders effektiv mit neutralen Spirituosen (Wodka, weißer Rum) oder komplementären Basisspirituosen (Gin + Earl Grey). Gründlich abseihen um Bitterkeit zu verhindern.",
                  "nl": "Thee wassen/infusie houdt in dat thee bladeren worden getrokken in spirits om smaken, tannines en aromaten te extraheren. Methoden: 1) Koude infusie (24-48 uur kamertemperatuur) voor delicate theeën (wit, groen), 2) Snelle sous vide (1-2 uur bij 55-60°C) voor snellere extractie, 3) Traditioneel heet trekken dan afkoelen. Verschillende theeën bieden verschillende profielen - groene thee voegt grasachtige noten toe, zwarte thee geeft tannines en diepte, oolong biedt bloemen complexiteit, rokige theeën (lapsang souchong) voegen kampvuur noten toe. Bijzonder effectief met neutrale spirits (vodka, witte rum) of complementaire basis spirits (gin + earl grey). Grondig zeven om bitterheid te voorkomen."
        }
      },
      {
        question: {
                  "en": "What is 'orgeat' and its historical significance?",
                  "es": "¿Qué es el 'orgeat' y su importancia histórica?",
                  "de": "Was ist 'Orgeat' und seine historische Bedeutung?",
                  "nl": "Wat is 'orgeat' en het historische belang?"
        },
        options: [
        {
                  "en": "Type of vermouth",
                  "es": "Tipo de vermut",
                  "de": "Art von Wermut",
                  "nl": "Soort vermouth"
        },
        {
                  "en": "Citrus concentrate",
                  "es": "Concentrado de cítricos",
                  "de": "Zitruskonzentrat",
                  "nl": "Citrus concentraat"
        },
        {
                  "en": "Almond syrup with orange flower water, essential in tiki cocktails; historically made from barley, later almonds",
                  "es": "Jarabe de almendra con agua de azahar, esencial en cócteles tiki; históricamente hecho de cebada, luego almendras",
                  "de": "Mandelsirup mit Orangenblütenwasser, essentiell in Tiki-Cocktails; historisch aus Gerste gemacht, später Mandeln",
                  "nl": "Amandel siroop met oranjebloesemwater, essentieel in tiki cocktails; historisch gemaakt van gerst, later amandelen"
        },
        {
                  "en": "French herb liqueur",
                  "es": "Licor de hierbas francés",
                  "de": "Französischer Kräuterlikör",
                  "nl": "Franse kruiden likeur"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Orgeat is a sweet almond syrup flavored with orange flower water (and sometimes rose water), essential in classic tiki cocktails like Mai Tai and Fog Cutter. Etymology from Latin 'hordeaceus' (made from barley) - medieval orgeat was barley-based, later transitioning to almonds in 18th century France. Traditional preparation involves blanching almonds, grinding with sugar and water, straining, then adding orange flower water. Commercial versions often use almond extract. The syrup provides nutty sweetness and floral aromatics. Modern craft versions may add vanilla or use different nuts (hazelnut orgeat).",
                  "es": "El orgeat es un jarabe dulce de almendra aromatizado con agua de azahar (y a veces agua de rosas), esencial en cócteles tiki clásicos como Mai Tai y Fog Cutter. Etimología del latín 'hordeaceus' (hecho de cebada) - el orgeat medieval era a base de cebada, luego transicionó a almendras en la Francia del siglo XVIII. La preparación tradicional implica blanquear almendras, moler con azúcar y agua, colar, luego añadir agua de azahar. Las versiones comerciales a menudo usan extracto de almendra. El jarabe proporciona dulzura a nuez y aromáticos florales. Las versiones artesanales modernas pueden añadir vainilla o usar diferentes nueces (orgeat de avellana).",
                  "de": "Orgeat ist ein süßer Mandelsirup aromatisiert mit Orangenblütenwasser (und manchmal Rosenwasser), essentiell in klassischen Tiki-Cocktails wie Mai Tai und Fog Cutter. Etymologie vom Lateinischen 'hordeaceus' (aus Gerste gemacht) - mittelalterliches Orgeat war gerstenbasiert, transitierte später zu Mandeln im Frankreich des 18. Jahrhunderts. Traditionelle Zubereitung beinhaltet Blanchieren von Mandeln, Mahlen mit Zucker und Wasser, Abseihen, dann Hinzufügen von Orangenblütenwasser. Kommerzielle Versionen verwenden oft Mandelextrakt. Der Sirup liefert nussige Süße und florale Aromen. Moderne Craft-Versionen können Vanille hinzufügen oder verschiedene Nüsse verwenden (Haselnuss-Orgeat).",
                  "nl": "Orgeat is een zoete amandel siroop gearomatiseerd met oranjebloesemwater (en soms rozenwater), essentieel in klassieke tiki cocktails zoals Mai Tai en Fog Cutter. Etymologie van Latijn 'hordeaceus' (gemaakt van gerst) - middeleeuwse orgeat was gerst-gebaseerd, later overgaand naar amandelen in 18e eeuws Frankrijk. Traditionele bereiding houdt in dat amandelen worden geblancheerd, gemalen met suiker en water, gezeefd, dan toevoegen oranjebloesemwater. Commerciële versies gebruiken vaak amandel extract. De siroop biedt nootachtige zoetheid en bloemen aromaten. Moderne craft versies kunnen vanille toevoegen of verschillende noten gebruiken (hazelnoot orgeat)."
        }
      },
      {
        question: {
                  "en": "What is 'falernum' and its role in cocktails?",
                  "es": "¿Qué es el 'falernum' y su papel en cócteles?",
                  "de": "Was ist 'Falernum' und seine Rolle in Cocktails?",
                  "nl": "Wat is 'falernum' en de rol ervan in cocktails?"
        },
        options: [
        {
                  "en": "Citrus bitters",
                  "es": "Amargos cítricos",
                  "de": "Zitrus-Bitter",
                  "nl": "Citrus bitters"
        },
        {
                  "en": "Italian amaretto",
                  "es": "Amaretto italiano",
                  "de": "Italienischer Amaretto",
                  "nl": "Italiaanse amaretto"
        },
        {
                  "en": "Caribbean spiced syrup/liqueur with lime, ginger, clove, almond; essential tiki modifier adding complexity",
                  "es": "Jarabe/licor especiado caribeño con lima, jengibre, clavo, almendra; modificador tiki esencial añadiendo complejidad",
                  "de": "Karibischer Gewürzsirup/Likör mit Limette, Ingwer, Nelke, Mandel; essentieller Tiki-Modifikator fügt Komplexität hinzu",
                  "nl": "Caribische gekruide siroop/likeur met limoen, gember, kruidnagel, amandel; essentiële tiki modifier voegt complexiteit toe"
        },
        {
                  "en": "Type of rum",
                  "es": "Tipo de ron",
                  "de": "Art von Rum",
                  "nl": "Soort rum"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Falernum is a Caribbean-originated sweetened syrup or low-proof liqueur (11% ABV) flavored with lime zest, ginger, clove, almond, and sometimes allspice or vanilla. Available as non-alcoholic syrup (John D. Taylor's Velvet Falernum syrup) or alcoholic liqueur. Essential in classic tiki cocktails (Corn 'n' Oil, Zombie, Royal Bermuda Yacht Club) and rum drinks. Adds complex spiced sweetness, tropical character, and depth. Can be made at home by infusing rum with ingredients then adding syrup. Barbadian origin, named possibly from Latin 'falernum' (Falernian wine).",
                  "es": "El falernum es un jarabe endulzado originado en el Caribe o licor de baja graduación (11% ABV) aromatizado con cáscara de lima, jengibre, clavo, almendra y a veces pimienta de Jamaica o vainilla. Disponible como jarabe no alcohólico (jarabe John D. Taylor's Velvet Falernum) o licor alcohólico. Esencial en cócteles tiki clásicos (Corn 'n' Oil, Zombie, Royal Bermuda Yacht Club) y bebidas de ron. Añade dulzura especiada compleja, carácter tropical y profundidad. Puede hacerse en casa infundiendo ron con ingredientes luego añadiendo jarabe. Origen de Barbados, nombrado posiblemente del latín 'falernum' (vino Falernio).",
                  "de": "Falernum ist ein karibisch entstandener gesüßter Sirup oder niederp rozentiger Likör (11% ABV) aromatisiert mit Limettenschale, Ingwer, Nelke, Mandel und manchmal Piment oder Vanille. Erhältlich als alkoholfreier Sirup (John D. Taylor's Velvet Falernum Sirup) oder alkoholischer Likör. Essentiell in klassischen Tiki-Cocktails (Corn 'n' Oil, Zombie, Royal Bermuda Yacht Club) und Rum-Getränken. Fügt komplexe würzige Süße, tropischen Charakter und Tiefe hinzu. Kann zu Hause gemacht werden durch Infundieren von Rum mit Zutaten dann Hinzufügen von Sirup. Barbadischer Ursprung, möglicherweise nach Lateinisch 'falernum' (Falerner Wein) benannt.",
                  "nl": "Falernum is een Caribisch ontstane gezoete siroop of lage-procentige likeur (11% ABV) gearomatiseerd met limoen schil, gember, kruidnagel, amandel en soms piment of vanille. Verkrijgbaar als niet-alcoholische siroop (John D. Taylor's Velvet Falernum siroop) of alcoholische likeur. Essentieel in klassieke tiki cocktails (Corn 'n' Oil, Zombie, Royal Bermuda Yacht Club) en rum drankjes. Voegt complexe gekruide zoetheid, tropisch karakter en diepte toe. Kan thuis worden gemaakt door rum te infuseren met ingrediënten dan siroop toevoegen. Barbadische oorsprong, mogelijk genoemd naar Latijn 'falernum' (Falernian wijn)."
        }
      },
      {
        question: {
                  "en": "What is 'black walnut bitters' usage and flavor profile?",
                  "es": "¿Qué es el uso de 'amargos de nuez negra' y perfil de sabor?",
                  "de": "Was ist die Verwendung von 'Schwarznuss-Bitter' und Geschmacksprofil?",
                  "nl": "Wat is het gebruik van 'zwarte walnoot bitters' en smaakprofiel?"
        },
        options: [
        {
                  "en": "Earthy, woody bitters with toasted nut character; used in whiskey cocktails and autumnal drinks",
                  "es": "Amargos terrosos y leñosos con carácter de nuez tostada; usados en cócteles de whisky y bebidas otoñales",
                  "de": "Erdige, holzige Bitter mit geröstetem Nusscharakter; verwendet in Whiskey-Cocktails und herbstlichen Getränken",
                  "nl": "Aardse, houtachtige bitters met geroosterd noot karakter; gebruikt in whiskey cocktails en herfst drankjes"
        },
        {
                  "en": "Citrus-based bitters",
                  "es": "Amargos basados en cítricos",
                  "de": "Zitrus-basierte Bitter",
                  "nl": "Citrus-gebaseerde bitters"
        },
        {
                  "en": "Floral aromatic bitters",
                  "es": "Amargos aromáticos florales",
                  "de": "Florale aromatische Bitter",
                  "nl": "Bloemen aromatische bitters"
        },
        {
                  "en": "Sweet chocolate flavoring",
                  "es": "Saborizante de chocolate dulce",
                  "de": "Süßes Schokoladenaroma",
                  "nl": "Zoete chocolade smaakstof"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Black walnut bitters (like Fee Brothers Black Walnut) provide earthy, woody, toasted nut flavors with subtle vanilla and caramel undertones. Made from black walnut hulls and botanicals. Particularly well-suited to brown spirits (whiskey, bourbon, aged rum) and autumn/winter cocktails. Common in Old Fashioneds, Manhattans, and whiskey sours where they add depth and nutty complexity. The earthy profile complements barrel-aged spirits and pairs with maple, apple, and spice flavors. A few dashes transform standard cocktails with unique umami-like savoriness.",
                  "es": "Los amargos de nuez negra (como Fee Brothers Black Walnut) proporcionan sabores terrosos, leñosos, de nuez tostada con sutiles matices de vainilla y caramelo. Hechos de cáscaras de nuez negra y botánicos. Particularmente bien adaptados a licores marrones (whisky, bourbon, ron añejo) y cócteles de otoño/invierno. Comunes en Old Fashioneds, Manhattans y whiskey sours donde añaden profundidad y complejidad a nuez. El perfil terroso complementa licores envejecidos en barril y combina con sabores de arce, manzana y especias. Unos toques transforman cócteles estándar con sabor único similar a umami.",
                  "de": "Schwarznuss-Bitter (wie Fee Brothers Black Walnut) liefern erdige, holzige, geröstete Nussaromen mit subtilen Vanille- und Karamelluntertönen. Hergestellt aus Schwarznussschalen und Botanicals. Besonders gut geeignet für braune Spirituosen (Whiskey, Bourbon, gereifter Rum) und Herbst-/Winter-Cocktails. Üblich in Old Fashioneds, Manhattans und Whiskey Sours, wo sie Tiefe und nussige Komplexität hinzufügen. Das erdige Profil ergänzt fassgereifte Spirituosen und passt zu Ahorn-, Apfel- und Gewürzaromen. Ein paar Spritzer transformieren Standard-Cocktails mit einzigartigem umami-ähnlichem Geschmack.",
                  "nl": "Zwarte walnoot bitters (zoals Fee Brothers Black Walnut) bieden aardse, houtachtige, geroosterde noot smaken met subtiele vanille en karamel ondertonen. Gemaakt van zwarte walnoot schillen en botanicals. Bijzonder goed geschikt voor bruine spirits (whiskey, bourbon, gerijpte rum) en herfst/winter cocktails. Gebruikelijk in Old Fashioneds, Manhattans en whiskey sours waar ze diepte en nootachtige complexiteit toevoegen. Het aardse profiel complementeert vat-gerijpte spirits en past bij esdoorn, appel en specerijen smaken. Een paar spatten transformeren standaard cocktails met unieke umami-achtige hartigheid."
        }
      },
      {
        question: {
                  "en": "What is 'absinthe rinse' technique?",
                  "es": "¿Qué es la técnica de 'enjuague con absenta'?",
                  "de": "Was ist die 'Absinth-Spül'-Technik?",
                  "nl": "Wat is de 'absint spoel' techniek?"
        },
        options: [
        {
                  "en": "Coating glass with small amount of absinthe then discarding excess; adds anise aromatics without dominating",
                  "es": "Cubrir vaso con pequeña cantidad de absenta luego descartar exceso; añade aromáticos anisados sin dominar",
                  "de": "Glas mit kleiner Menge Absinth beschichten dann Überschuss wegschütten; fügt Anisaromen hinzu ohne zu dominieren",
                  "nl": "Glas coaten met kleine hoeveelheid absint dan overschot weggooien; voegt anijs aromaten toe zonder te domineren"
        },
        {
                  "en": "Adding full shot of absinthe",
                  "es": "Añadir shot completo de absenta",
                  "de": "Vollen Shot Absinth hinzufügen",
                  "nl": "Volle shot absint toevoegen"
        },
        {
                  "en": "Flaming absinthe presentation",
                  "es": "Presentación de absenta flambeada",
                  "de": "Flammende Absinth-Präsentation",
                  "nl": "Vlammende absint presentatie"
        },
        {
                  "en": "Cleaning glassware with absinthe",
                  "es": "Limpiar cristalería con absenta",
                  "de": "Glaswaren mit Absinth reinigen",
                  "nl": "Glaswerk schoonmaken met absint"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Absinthe rinse involves adding a small amount (1/4-1/2 oz) of absinthe to a chilled glass, swirling to coat the interior completely, then discarding the excess. This technique imparts subtle anise/fennel/wormwood aromatics without making the drink taste heavily of absinthe. Classic in Sazerac and Improved Whiskey Cocktails. The rinse provides aromatic nose hit and subtle background flavor. Some bartenders atomize absinthe in a spray bottle for even lighter application. Alternative: use Herbsaint or Pernod. The technique demonstrates restraint - aromatics without overpowering the cocktail's balance.",
                  "es": "El enjuague con absenta implica añadir una pequeña cantidad (1/4-1/2 oz) de absenta a un vaso enfriado, agitar para cubrir el interior completamente, luego descartar el exceso. Esta técnica imparte sutiles aromáticos de anís/hinojo/ajenjo sin hacer que la bebida sepa fuertemente a absenta. Clásico en Sazerac y Improved Whiskey Cocktails. El enjuague proporciona golpe nasal aromático y sabor de fondo sutil. Algunos bartenders atomizan absenta en botella de spray para aplicación aún más ligera. Alternativa: usar Herbsaint o Pernod. La técnica demuestra moderación - aromáticos sin abrumar el equilibrio del cóctel.",
                  "de": "Absinth-Spülung beinhaltet Hinzufügen einer kleinen Menge (1/4-1/2 oz) Absinth zu einem gekühlten Glas, Schwenken um das Innere vollständig zu beschichten, dann Überschuss wegschütten. Diese Technik verleiht subtile Anis-/Fenchel-/Wermut-Aromen ohne das Getränk stark nach Absinth schmecken zu lassen. Klassisch in Sazerac und Improved Whiskey Cocktails. Die Spülung liefert aromatischen Nasentreffer und subtilen Hintergrundgeschmack. Einige Bartender zerstäuben Absinth in einer Sprühflasche für noch leichtere Anwendung. Alternative: Herbsaint oder Pernod verwenden. Die Technik demonstriert Zurückhaltung - Aromen ohne Balance des Cocktails zu überwältigen.",
                  "nl": "Absint spoel houdt in dat een kleine hoeveelheid (1/4-1/2 oz) absint wordt toegevoegd aan een gekoeld glas, zwenken om de binnenkant volledig te coaten, dan het overschot weggooien. Deze techniek geeft subtiele anijs/venkel/alsem aromaten zonder de drank zwaar naar absint te laten smaken. Klassiek in Sazerac en Improved Whiskey Cocktails. De spoel biedt aromatische neus hit en subtiele achtergrond smaak. Sommige bartenders verstuiven absint in een spray fles voor nog lichtere toepassing. Alternatief: gebruik Herbsaint of Pernod. De techniek toont terughoudendheid - aromaten zonder de balans van de cocktail te overweldigen."
        }
      },
      {
        question: {
                  "en": "What is 'Chartreuse' and why is it significant in cocktails?",
                  "es": "¿Qué es el 'Chartreuse' y por qué es significativo en cócteles?",
                  "de": "Was ist 'Chartreuse' und warum ist es bedeutend in Cocktails?",
                  "nl": "Wat is 'Chartreuse' en waarom is het belangrijk in cocktails?"
        },
        options: [
        {
                  "en": "French herbal liqueur (130+ botanicals) by Carthusian monks; complex, powerful modifier in classic and modern cocktails",
                  "es": "Licor de hierbas francés (130+ botánicos) por monjes cartujos; modificador complejo y poderoso en cócteles clásicos y modernos",
                  "de": "Französischer Kräuterlikör (130+ Botanicals) von Kartäusermönchen; komplexer, kraftvoller Modifikator in klassischen und modernen Cocktails",
                  "nl": "Franse kruiden likeur (130+ botanicals) door Carthusiaanse monniken; complexe, krachtige modifier in klassieke en moderne cocktails"
        },
        {
                  "en": "Scottish whisky brand",
                  "es": "Marca de whisky escocés",
                  "de": "Schottische Whisky-Marke",
                  "nl": "Schots whisky merk"
        },
        {
                  "en": "Italian amaretto",
                  "es": "Amaretto italiano",
                  "de": "Italienischer Amaretto",
                  "nl": "Italiaanse amaretto"
        },
        {
                  "en": "Type of champagne",
                  "es": "Tipo de champán",
                  "de": "Art von Champagner",
                  "nl": "Soort champagne"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Chartreuse is a French herbal liqueur made by Carthusian monks since 1737 using a secret recipe of 130+ herbs and plants. Available in Green Chartreuse (55% ABV, more herbal, intense) and Yellow Chartreuse (40% ABV, sweeter, milder). The complex flavor profile - herbal, spicy, sweet, slightly medicinal - makes it an unparalleled cocktail modifier. Used in classics like Last Word, Bijou, Champs-Élysées, and modern craft cocktails. Its intensity means small quantities have big impact. Only three monks know the complete recipe at any time.",
                  "es": "El Chartreuse es un licor de hierbas francés hecho por monjes cartujos desde 1737 usando una receta secreta de 130+ hierbas y plantas. Disponible en Chartreuse Verde (55% ABV, más herbal, intenso) y Chartreuse Amarillo (40% ABV, más dulce, suave). El complejo perfil de sabor - herbal, especiado, dulce, ligeramente medicinal - lo hace un modificador de cóctel sin igual. Usado en clásicos como Last Word, Bijou, Champs-Élysées y cócteles artesanales modernos. Su intensidad significa que pequeñas cantidades tienen gran impacto. Solo tres monjes conocen la receta completa en cualquier momento.",
                  "de": "Chartreuse ist ein französischer Kräuterlikör, hergestellt von Kartäusermönchen seit 1737 mit einem geheimen Rezept aus 130+ Kräutern und Pflanzen. Erhältlich in Grünem Chartreuse (55% ABV, kräuteriger, intensiver) und Gelbem Chartreuse (40% ABV, süßer, milder). Das komplexe Geschmacksprofil - kräuterig, würzig, süß, leicht medizinisch - macht es zu einem unvergleichlichen Cocktail-Modifikator. Verwendet in Klassikern wie Last Word, Bijou, Champs-Élysées und modernen Craft-Cocktails. Seine Intensität bedeutet kleine Mengen haben große Wirkung. Nur drei Mönche kennen das vollständige Rezept zu jeder Zeit.",
                  "nl": "Chartreuse is een Franse kruiden likeur gemaakt door Carthusiaanse monniken sinds 1737 met een geheim recept van 130+ kruiden en planten. Verkrijgbaar in Groene Chartreuse (55% ABV, meer kruiden, intens) en Gele Chartreuse (40% ABV, zoeter, milder). Het complexe smaakprofiel - kruiden, gekruid, zoet, licht medicinaal - maakt het een ongeëvenaarde cocktail modifier. Gebruikt in klassiekers zoals Last Word, Bijou, Champs-Élysées en moderne craft cocktails. Zijn intensiteit betekent dat kleine hoeveelheden grote impact hebben. Slechts drie monniken kennen het volledige recept op elk moment."
        }
      },
      {
        question: {
                  "en": "What is 'allspice dram' (pimento dram) and its cocktail applications?",
                  "es": "¿Qué es el 'dram de pimienta de Jamaica' (dram de pimiento) y sus aplicaciones en cócteles?",
                  "de": "Was ist 'Piment-Dram' (Pimento Dram) und seine Cocktail-Anwendungen?",
                  "nl": "Wat is 'piment dram' (pimento dram) en de cocktail toepassingen?"
        },
        options: [
        {
                  "en": "Jamaican rum-based liqueur infused with allspice berries; adds warm spice to tiki and rum cocktails",
                  "es": "Licor a base de ron jamaicano infundido con bayas de pimienta de Jamaica; añade especias cálidas a cócteles tiki y de ron",
                  "de": "Jamaikanischer Rum-basierter Likör infundiert mit Pimentbeeren; fügt warme Gewürze zu Tiki- und Rum-Cocktails hinzu",
                  "nl": "Jamaicaanse rum-gebaseerde likeur geïnfuseerd met piment bessen; voegt warme specerijen toe aan tiki en rum cocktails"
        },
        {
                  "en": "Citrus liqueur",
                  "es": "Licor de cítricos",
                  "de": "Zitruslikör",
                  "nl": "Citrus likeur"
        },
        {
                  "en": "Type of bitters",
                  "es": "Tipo de amargos",
                  "de": "Art von Bitter",
                  "nl": "Soort bitters"
        },
        {
                  "en": "Scottish whisky measurement",
                  "es": "Medida de whisky escocés",
                  "de": "Schottische Whisky-Messung",
                  "nl": "Schotse whisky meting"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Allspice dram (pimento dram) is a Jamaican liqueur made by infusing allspice (pimento) berries in overproof rum, then sweetening. Flavor profile combines cinnamon, clove, nutmeg with subtle pepper heat. Essential in tiki cocktails (Three Dots and a Dash, Ancient Mariner) and autumn/winter drinks. Provides warm, complex spice without adding multiple individual spices. St. Elizabeth is the classic brand, or can be made at home. A bar spoon adds significant flavor. The 'dram' refers to the traditional measurement. Bridges Caribbean rum tradition with tropical cocktail culture.",
                  "es": "El dram de pimienta de Jamaica (dram de pimiento) es un licor jamaicano hecho infundiendo bayas de pimienta de Jamaica (pimiento) en ron sobregraduado, luego endulzando. El perfil de sabor combina canela, clavo, nuez moscada con sutil calor de pimienta. Esencial en cócteles tiki (Three Dots and a Dash, Ancient Mariner) y bebidas de otoño/invierno. Proporciona especias cálidas y complejas sin añadir múltiples especias individuales. St. Elizabeth es la marca clásica, o puede hacerse en casa. Una cucharita de bar añade sabor significativo. El 'dram' se refiere a la medida tradicional. Une tradición de ron caribeño con cultura de cóctel tropical.",
                  "de": "Piment-Dram (Pimento Dram) ist ein jamaikanischer Likör, hergestellt durch Infundieren von Pimentbeeren (Pimento) in Overproof-Rum, dann Süßen. Geschmacksprofil kombiniert Zimt, Nelke, Muskatnuss mit subtiler Pfefferhitze. Essentiell in Tiki-Cocktails (Three Dots and a Dash, Ancient Mariner) und Herbst-/Winter-Getränken. Liefert warme, komplexe Gewürze ohne mehrere einzelne Gewürze hinzuzufügen. St. Elizabeth ist die klassische Marke, oder kann zu Hause gemacht werden. Ein Barlöffel fügt bedeutenden Geschmack hinzu. Das 'Dram' bezieht sich auf das traditionelle Maß. Verbindet karibische Rumtradition mit tropischer Cocktail-Kultur.",
                  "nl": "Piment dram (pimento dram) is een Jamaicaanse likeur gemaakt door piment (pimento) bessen te infuseren in overproof rum, dan te zoeten. Smaakprofiel combineert kaneel, kruidnagel, nootmuskaat met subtiele peper hitte. Essentieel in tiki cocktails (Three Dots and a Dash, Ancient Mariner) en herfst/winter drankjes. Biedt warme, complexe specerijen zonder meerdere individuele specerijen toe te voegen. St. Elizabeth is het klassieke merk, of kan thuis worden gemaakt. Een bar lepel voegt significante smaak toe. De 'dram' verwijst naar de traditionele meting. Verbindt Caribische rum traditie met tropische cocktail cultuur."
        }
      },
      {
        question: {
                  "en": "What is 'Japanese bartending style' and its philosophy?",
                  "es": "¿Qué es el 'estilo de bartending japonés' y su filosofía?",
                  "de": "Was ist 'Japanischer Bartending-Stil' und seine Philosophie?",
                  "nl": "Wat is 'Japanse bartending stijl' en de filosofie?"
        },
        options: [
        {
                  "en": "Using only Japanese spirits",
                  "es": "Usar solo licores japoneses",
                  "de": "Nur japanische Spirituosen verwenden",
                  "nl": "Alleen Japanse spirits gebruiken"
        },
        {
                  "en": "Precision, discipline, hospitality (omotenashi); hard shake technique, perfect ice, ritualized preparation focusing on guest experience",
                  "es": "Precisión, disciplina, hospitalidad (omotenashi); técnica de agitado fuerte, hielo perfecto, preparación ritualizada enfocada en experiencia del invitado",
                  "de": "Präzision, Disziplin, Gastfreundschaft (Omotenashi); Hard Shake Technik, perfektes Eis, ritualisierte Zubereitung fokussiert auf Gästeerfahrung",
                  "nl": "Precisie, discipline, gastvrijheid (omotenashi); hard shake techniek, perfect ijs, geritualiseerde bereiding gericht op gast ervaring"
        },
        {
                  "en": "Sake-based cocktails only",
                  "es": "Solo cócteles a base de sake",
                  "de": "Nur Sake-basierte Cocktails",
                  "nl": "Alleen sake-gebaseerde cocktails"
        },
        {
                  "en": "Minimalist presentation",
                  "es": "Presentación minimalista",
                  "de": "Minimalistische Präsentation",
                  "nl": "Minimalistische presentatie"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Japanese bartending emphasizes precision, discipline, and omotenashi (wholehearted hospitality). Key elements: 1) Hard shake - vigorous 3-dimensional shaking for maximum aeration and dilution, 2) Perfect ice - hand-carved, crystal-clear blocks for aesthetics and dilution control, 3) Measured movements - ritualized, elegant preparation as performance, 4) Attention to detail - perfect proportions, temperature, dilution, 5) Guest focus - anticipating needs, personalized service. Bartenders train for years mastering techniques. Influential figures like Kazuo Uyeda pioneered hard shake. Philosophy: pursuing perfection in every aspect of cocktail creation and service.",
                  "es": "El bartending japonés enfatiza precisión, disciplina y omotenashi (hospitalidad sincera). Elementos clave: 1) Agitado fuerte - agitado vigoroso 3-dimensional para máxima aireación y dilución, 2) Hielo perfecto - bloques tallados a mano, cristalinos para estética y control de dilución, 3) Movimientos medidos - preparación ritualizada, elegante como performance, 4) Atención al detalle - proporciones perfectas, temperatura, dilución, 5) Enfoque en invitado - anticipar necesidades, servicio personalizado. Los bartenders entrenan años dominando técnicas. Figuras influyentes como Kazuo Uyeda fueron pioneros del agitado fuerte. Filosofía: perseguir perfección en cada aspecto de creación y servicio de cócteles.",
                  "de": "Japanisches Bartending betont Präzision, Disziplin und Omotenashi (ganzheitliche Gastfreundschaft). Schlüsselelemente: 1) Hard Shake - kräftiges 3-dimensionales Schütteln für maximale Belüftung und Verdünnung, 2) Perfektes Eis - handgeschnittene, kristallklare Blöcke für Ästhetik und Verdünnungskontrolle, 3) Gemessene Bewegungen - ritualisierte, elegante Zubereitung als Performance, 4) Aufmerksamkeit für Details - perfekte Proportionen, Temperatur, Verdünnung, 5) Gästefokus - Bedürfnisse antizipieren, personalisierter Service. Bartender trainieren jahrelang Techniken zu meistern. Einflussreiche Figuren wie Kazuo Uyeda waren Hard Shake Pioniere. Philosophie: Perfektion in jedem Aspekt der Cocktail-Schaffung und Service verfolgen.",
                  "nl": "Japanse bartending benadrukt precisie, discipline en omotenashi (oprechte gastvrijheid). Sleutelelementen: 1) Hard shake - krachtige 3-dimensionale schud voor maximale beluchting en verdunning, 2) Perfect ijs - handgesneden, kristalheldere blokken voor esthetiek en verdunningscontrole, 3) Gemeten bewegingen - geritualiseerde, elegante bereiding als performance, 4) Aandacht voor detail - perfecte verhoudingen, temperatuur, verdunning, 5) Gast focus - behoeften anticiperen, gepersonaliseerde service. Bartenders trainen jaren om technieken te beheersen. Invloedrijke figuren zoals Kazuo Uyeda waren hard shake pioniers. Filosofie: perfectie nastreven in elk aspect van cocktail creatie en service."
        }
      }
    ]
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level8;
  }
})();