// Quiz Level 8: Professional Brewing Science
(function() {
  const level8 = {
    name: {
      en: "Professional Brewing Science",
      es: "Ciencia Profesional de la Cervecería",
      de: "Professionelle Brauwissenschaft",
      nl: "Professionele Brouwwetenschap"
    },
    questions: [
      {
        question: {
          en: "What is the optimal pH range for mashing in beer production?",
          es: "¿Cuál es el rango de pH óptimo para el macerado en la producción de cerveza?",
          de: "Was ist der optimale pH-Bereich für das Maischen bei der Bierproduktion?",
          nl: "Wat is het optimale pH-bereik voor het maischen bij bierproductie?"
        },
        options: [
          { en: "4.8 - 5.2", es: "4.8 - 5.2", de: "4.8 - 5.2", nl: "4.8 - 5.2" },
          { en: "5.2 - 5.6", es: "5.2 - 5.6", de: "5.2 - 5.6", nl: "5.2 - 5.6" },
          { en: "5.8 - 6.2", es: "5.8 - 6.2", de: "5.8 - 6.2", nl: "5.8 - 6.2" },
          { en: "6.2 - 6.8", es: "6.2 - 6.8", de: "6.2 - 6.8", nl: "6.2 - 6.8" }
        ],
        correct: 1,
        explanation: {
          en: "The optimal mash pH range is 5.2-5.6, which maximizes enzyme activity and ensures proper protein coagulation and hop utilization.",
          es: "El rango óptimo de pH del macerado es 5.2-5.6, que maximiza la actividad enzimática y asegura la coagulación adecuada de proteínas y utilización del lúpulo.",
          de: "Der optimale Maische-pH-Bereich liegt bei 5.2-5.6, was die Enzymaktivität maximiert und eine ordnungsgemäße Proteinkoagulation und Hopfenausnutzung gewährleistet.",
          nl: "Het optimale pH-bereik voor de maisch is 5.2-5.6, wat de enzymactiviteit maximaliseert en zorgt voor juiste eiwitcoagulatie en hopgebruik."
        }
      },
      {
        question: {
          en: "Which enzyme is for breaking down starches to fermentable sugars during mashing?",
          es: "¿Qué enzima es principalmente responsable de descomponer los almidones en azúcares fermentables durante el macerado?",
          de: "Welches Enzym ist hauptsächlich für den Abbau von Stärke zu fermentierbaren Zuckern während des Maischens verantwortlich?",
          nl: "Welk enzym is primair verantwoordelijk voor het afbreken van zetmeel tot fermenteerbare suikers tijdens het maischen?"
        },
        options: [
          { en: "β-glucanase", es: "β-glucanasa", de: "β-Glucanase", nl: "β-glucanase" },
          { en: "α-amylase", es: "α-amilasa", de: "α-Amylase", nl: "α-amylase" },
          { en: "Protease", es: "Proteasa", de: "Protease", nl: "Protease" },
          { en: "Lipase", es: "Lipasa", de: "Lipase", nl: "Lipase" }
        ],
        correct: 1,
        explanation: {
          en: "α-amylase breaks down starch chains into smaller dextrins and fermentable sugars, working optimally at 65-72°C during mashing.",
          es: "La α-amilasa descompone las cadenas de almidón en dextrinas más pequeñas y azúcares fermentables, funcionando óptimamente a 65-72°C durante el macerado.",
          de: "α-Amylase baut Stärkeketten in kleinere Dextrine und fermentierbare Zucker ab und arbeitet optimal bei 65-72°C während des Maischens.",
          nl: "α-amylase breekt zetmeelketens af tot kleinere dextrines en fermenteerbare suikers, en werkt optimaal bij 65-72°C tijdens het maischen."
        }
      },
      {
        question: {
          en: "What is the primary role of calcium ions (Ca²⁺) in brewing water chemistry?",
          es: "¿Cuál es el papel principal de los iones de calcio (Ca²⁺) en la química del agua de cervecería?",
          de: "Was ist die Hauptrolle von Calciumionen (Ca²⁺) in der Brauwasserchemie?",
          nl: "Wat is de primaire rol van calciumionen (Ca²⁺) in de waterchemie van het brouwen?"
        },
        options: [
          { en: "pH stabilization and enzyme activation", es: "Estabilización del pH y activación enzimática", de: "pH-Stabilisierung und Enzymaktivierung", nl: "pH-stabilisatie en enzymactivering" },
          { en: "Flavor enhancement only", es: "Solo mejora del sabor", de: "Nur Geschmacksverbesserung", nl: "Alleen smaakverbetering" },
          { en: "Water softening", es: "Ablandamiento del agua", de: "Wasserenthärtung", nl: "Waterverzachting" },
          { en: "Color development", es: "Desarrollo del color", de: "Farbentwicklung", nl: "Kleurontwikkeling" }
        ],
        correct: 0,
        explanation: {
          en: "Calcium ions help stabilize mash pH, activate enzymes like α-amylase, aid in protein precipitation, and improve yeast flocculation.",
          es: "Los iones de calcio ayudan a estabilizar el pH del macerado, activan enzimas como la α-amilasa, ayudan en la precipitación de proteínas y mejoran la floculación de levadura.",
          de: "Calciumionen helfen bei der Stabilisierung des Maische-pH, aktivieren Enzyme wie α-Amylase, unterstützen die Proteinausfällung und verbessern die Hefeflockung.",
          nl: "Calciumionen helpen de pH van de maisch te stabiliseren, activeren enzymen zoals α-amylase, helpen bij eiwitprecipitatie en verbeteren gistflocculatie."
        }
      },
      {
        question: {
          en: "What is the optimal fermentation temperature range for most Saccharomyces cerevisiae ale yeasts?",
          es: "¿Cuál es el rango de temperatura de fermentación óptimo para la mayoría de las levaduras ale Saccharomyces cerevisiae?",
          de: "Was ist der optimale Gärtemperaturbereich für die meisten Saccharomyces cerevisiae Ale-Hefen?",
          nl: "Wat is het optimale fermentatietemperatuurbereik voor de meeste Saccharomyces cerevisiae ale-gisten?"
        },
        options: [
          { en: "8-12°C (46-54°F)", es: "8-12°C (46-54°F)", de: "8-12°C (46-54°F)", nl: "8-12°C (46-54°F)" },
          { en: "18-22°C (64-72°F)", es: "18-22°C (64-72°F)", de: "18-22°C (64-72°F)", nl: "18-22°C (64-72°F)" },
          { en: "25-30°C (77-86°F)", es: "25-30°C (77-86°F)", de: "25-30°C (77-86°F)", nl: "25-30°C (77-86°F)" },
          { en: "32-38°C (90-100°F)", es: "32-38°C (90-100°F)", de: "32-38°C (90-100°F)", nl: "32-38°C (90-100°F)" }
        ],
        correct: 1,
        explanation: {
          en: "Most ale yeasts ferment optimally at 18-22°C, producing balanced ester and alcohol profiles without excessive fusel alcohol formation.",
          es: "La mayoría de las levaduras ale fermentan óptimamente a 18-22°C, produciendo perfiles equilibrados de ésteres y alcohol sin formación excesiva de alcoholes fusélicos.",
          de: "Die meisten Ale-Hefen gären optimal bei 18-22°C und produzieren ausgewogene Ester- und Alkoholprofile ohne übermäßige Fuselalkoholbildung.",
          nl: "De meeste ale-gisten fermenteren optimaal bij 18-22°C, en produceren gebalanceerde ester- en alcoholprofielen zonder overmatige fuselalkoholvorming."
        }
      },
      {
        question: {
          en: "Which quality control parameter measures the clarity of finished beer?",
          es: "¿Qué parámetro de control de calidad mide la claridad de la cerveza terminada?",
          de: "Welcher Qualitätskontrollparameter misst die Klarheit des fertigen Biers?",
          nl: "Welke kwaliteitscontroleparameter meet de helderheid van het afgewerkte bier?"
        },
        options: [
          { en: "IBU (International Bitterness Units)", es: "IBU (Unidades Internacionales de Amargor)", de: "IBU (Internationale Bitterkeitseinheiten)", nl: "IBU (International Bitterness Units)" },
          { en: "SRM (Standard Reference Method)", es: "SRM (Método de Referencia Estándar)", de: "SRM (Standard Reference Method)", nl: "SRM (Standard Reference Method)" },
          { en: "NTU (Nephelometric Turbidity Units)", es: "NTU (Unidades Nefelométricas de Turbidez)", de: "NTU (Nephelometrische Trübungseinheiten)", nl: "NTU (Nefelometrische Troebelheidseenheden)" },
          { en: "ABV (Alcohol by Volume)", es: "ABV (Alcohol por Volumen)", de: "ABV (Alkohol nach Volumen)", nl: "ABV (Alcohol by Volume)" }
        ],
        correct: 2,
        explanation: {
          en: "NTU measures turbidity or cloudiness in beer using nephelometric methods, with values below 1 NTU considered bright and clear.",
          es: "NTU mide la turbidez o nubosidad en la cerveza usando métodos nefelométricos, con valores por debajo de 1 NTU considerados brillantes y claros.",
          de: "NTU misst die Trübung oder Cloudiness im Bier mit nephelometrischen Methoden, wobei Werte unter 1 NTU als hell und klar gelten.",
          nl: "NTU meet troebeling of bewolking in bier met nefelometrische methoden, waarbij waarden onder 1 NTU als helder worden beschouwd."
        }
      },
      {
        question: {
          en: "What enzyme activity is responsible for converting β-glucans during mashing?",
          es: "¿Qué actividad enzimática es responsable de convertir los β-glucanos durante el macerado?",
          de: "Welche Enzymaktivität ist für die Umwandlung von β-Glucanen während des Maischens verantwortlich?",
          nl: "Welke enzymactiviteit is verantwoordelijk voor het omzetten van β-glucanen tijdens het maischen?"
        },
        options: [
          { en: "Amylase activity", es: "Actividad amilásica", de: "Amylase-Aktivität", nl: "Amylase activiteit" },
          { en: "β-glucanase activity", es: "Actividad β-glucanásica", de: "β-Glucanase-Aktivität", nl: "β-glucanase activiteit" },
          { en: "Protease activity", es: "Actividad proteásica", de: "Protease-Aktivität", nl: "Protease activiteit" },
          { en: "Invertase activity", es: "Actividad invertásica", de: "Invertase-Aktivität", nl: "Invertase activiteit" }
        ],
        correct: 1,
        explanation: {
          en: "β-glucanase breaks down β-glucans from cell walls, reducing wort viscosity and preventing filtration problems. It works optimally at 40-45°C.",
          es: "La β-glucanasa descompone los β-glucanos de las paredes celulares, reduciendo la viscosidad del mosto y previniendo problemas de filtración. Funciona óptimamente a 40-45°C.",
          de: "β-Glucanase baut β-Glucane aus Zellwänden ab, reduziert die Würzeviskosität und verhindert Filtrationsprobleme. Sie arbeitet optimal bei 40-45°C.",
          nl: "β-glucanase breekt β-glucanen uit celwanden af, vermindert wortviscositeit en voorkomt filterproblemen. Het werkt optimaal bij 40-45°C."
        }
      },
      {
        question: {
          en: "What is the target dissolved oxygen level for wort before pitching yeast?",
          es: "¿Cuál es el nivel objetivo de oxígeno disuelto para el mosto antes de inocular la levadura?",
          de: "Was ist der Ziel-Gelöstsauerstoffgehalt für die Würze vor dem Hefezusatz?",
          nl: "Wat is het doelniveau voor opgeloste zuurstof in wort voor het toevoegen van gist?"
        },
        options: [
          { en: "2-4 ppm", es: "2-4 ppm", de: "2-4 ppm", nl: "2-4 ppm" },
          { en: "8-10 ppm", es: "8-10 ppm", de: "8-10 ppm", nl: "8-10 ppm" },
          { en: "15-20 ppm", es: "15-20 ppm", de: "15-20 ppm", nl: "15-20 ppm" },
          { en: "25-30 ppm", es: "25-30 ppm", de: "25-30 ppm", nl: "25-30 ppm" }
        ],
        correct: 1,
        explanation: {
          en: "Wort should contain 8-10 ppm dissolved oxygen for healthy yeast reproduction and sterol synthesis during the aerobic phase of fermentation.",
          es: "El mosto debe contener 8-10 ppm de oxígeno disuelto para una reproducción saludable de levadura y síntesis de esteroles durante la fase aeróbica de fermentación.",
          de: "Die Würze sollte 8-10 ppm gelösten Sauerstoff für gesunde Hefevermehrung und Sterolsynthese während der aeroben Gärungsphase enthalten.",
          nl: "Wort moet 8-10 ppm opgeloste zuurstof bevatten voor gezonde gistreproductie en sterolsynthese tijdens de aerobe fermentatiefase."
        }
      },
      {
        question: {
          en: "Which water mineral profile is most suitable for brewing Pilsner-style beers?",
          es: "¿Qué perfil mineral del agua es más adecuado para elaborar cervezas estilo Pilsner?",
          de: "Welches Wassermineralprofil ist am besten für das Brauen von Pilsner-Bieren geeignet?",
          nl: "Welk watermineraalprofiel is het meest geschikt voor het brouwen van Pilsner-stijl bieren?"
        },
        options: [
          { en: "High calcium, high sulfate", es: "Alto calcio, alto sulfato", de: "Hoher Kalzium-, hoher Sulfatgehalt", nl: "Hoog calcium, hoog sulfaat" },
          { en: "Low mineral content, soft water", es: "Bajo contenido mineral, agua blanda", de: "Niedriger Mineralgehalt, weiches Wasser", nl: "Laag mineraalgehalte, zacht water" },
          { en: "High magnesium, high chloride", es: "Alto magnesio, alto cloruro", de: "Hoher Magnesium-, hoher Chloridgehalt", nl: "Hoog magnesium, hoog chloride" },
          { en: "Balanced minerals, hard water", es: "Minerales equilibrados, agua dura", de: "Ausgewogene Mineralien, hartes Wasser", nl: "Gebalanceerde mineralen, hard water" }
        ],
        correct: 1,
        explanation: {
          en: "Pilsner requires very soft water with low mineral content to showcase the delicate malt character and allow the Saaz hop profile to shine through.",
          es: "El Pilsner requiere agua muy blanda con bajo contenido mineral para mostrar el carácter delicado de la malta y permitir que brille el perfil del lúpulo Saaz.",
          de: "Pilsner benötigt sehr weiches Wasser mit niedrigem Mineralgehalt, um den delikaten Malzcharakter zu zeigen und das Saaz-Hopfenprofil durchscheinen zu lassen.",
          nl: "Pilsner vereist zeer zacht water met laag mineraalgehalte om het delicate moutkarakter te tonen en het Saaz-hopprofiel te laten uitkomen."
        }
      },
      {
        question: {
          en: "What is the primary function of yeast autolysis in beer production?",
          es: "¿Cuál es la función principal de la autólisis de levadura en la producción de cerveza?",
          de: "Was ist die Hauptfunktion der Hefeautolyse bei der Bierproduktion?",
          nl: "Wat is de primaire functie van gistautolysis bij bierproductie?"
        },
        options: [
          { en: "Increases alcohol content", es: "Aumenta el contenido de alcohol", de: "Erhöht den Alkoholgehalt", nl: "Verhoogt alcoholgehalte" },
          { en: "Releases enzymes and nutrients for flavor development", es: "Libera enzimas y nutrientes para el desarrollo del sabor", de: "Setzt Enzyme und Nährstoffe für die Geschmacksentwicklung frei", nl: "Geeft enzymen en voedingsstoffen vrij voor smaaksontwikkeling" },
          { en: "Reduces fermentation time", es: "Reduce el tiempo de fermentación", de: "Reduziert die Gärungszeit", nl: "Vermindert fermentatietijd" },
          { en: "Clarifies the beer", es: "Clarifica la cerveza", de: "Klärt das Bier", nl: "Klaart het bier" }
        ],
        correct: 1,
        explanation: {
          en: "Yeast autolysis releases amino acids, vitamins, and enzymes that contribute to beer flavor complexity, especially important in lager aging and bottle conditioning.",
          es: "La autólisis de levadura libera aminoácidos, vitaminas y enzimas que contribuyen a la complejidad del sabor de la cerveza, especialmente importante en el envejecimiento de lager y acondicionamiento en botella.",
          de: "Hefeautolyse setzt Aminosäuren, Vitamine und Enzyme frei, die zur Geschmackskomplexität des Biers beitragen, besonders wichtig bei der Lagerreifung und Flaschengärung.",
          nl: "Gistautolysis geeft aminozuren, vitamines en enzymen vrij die bijdragen aan de smaakcomplexiteit van bier, vooral belangrijk bij lagerrijping en flessenconditonering."
        }
      },
      {
        question: {
          en: "Which microbiological test is most critical for detecting wild yeast contamination?",
          es: "¿Qué prueba microbiológica es más crítica para detectar contaminación por levadura salvaje?",
          de: "Welcher mikrobiologische Test ist am wichtigsten für die Erkennung von Wildhefe-Kontamination?",
          nl: "Welke microbiologische test is het meest kritiek voor het detecteren van wilde gistcontaminatie?"
        },
        options: [
          { en: "Lysine agar plating", es: "Plaqueo en agar lisina", de: "Lysin-Agar-Plattierung", nl: "Lysine-agar plating" },
          { en: "Standard wort agar", es: "Agar de mosto estándar", de: "Standard-Würze-Agar", nl: "Standaard wort-agar" },
          { en: "Sabouraud dextrose agar", es: "Agar Sabouraud dextrosa", de: "Sabouraud-Dextrose-Agar", nl: "Sabouraud dextrose-agar" },
          { en: "MacConkey agar", es: "Agar MacConkey", de: "MacConkey-Agar", nl: "MacConkey-agar" }
        ],
        correct: 0,
        explanation: {
          en: "Lysine agar selectively inhibits brewing yeast (Saccharomyces) while allowing wild yeasts like Brettanomyces and Candida to grow, making contamination detection easier.",
          es: "El agar lisina inhibe selectivamente la levadura cervecera (Saccharomyces) mientras permite que crezcan levaduras salvajes como Brettanomyces y Candida, facilitando la detección de contaminación.",
          de: "Lysin-Agar hemmt selektiv Brauhefe (Saccharomyces), während Wildhefen wie Brettanomyces und Candida wachsen können, was die Kontaminationserkennung erleichtert.",
          nl: "Lysine-agar remt selectief brouwgist (Saccharomyces) terwijl wilde gisten zoals Brettanomyces en Candida kunnen groeien, wat contaminatiedetectie vergemakkelijkt."
        }},
      {
        question: {
          en: "What is the role of water in beer production?",
          es: "¿Cuál es el papel del agua en la producción de cerveza?",
          de: "Welche Rolle spielt Wasser in der Bierproduktion?",
          nl: "Wat is de rol van water bij bierproductie?"
        },
        options: [
          { en: "It dilutes the beer", es: "Diluye la cerveza", de: "Es verdünnt das Bier", nl: "Het verdunt het bier" },
          { en: "It forms the majority of beer composition", es: "Forma la mayoría de la composición de la cerveza", de: "Es bildet den größten Teil der Bierzusammensetzung", nl: "Het vormt het grootste deel van de biersamenstelling" },
          { en: "It adds color", es: "Añade color", de: "Es fügt Farbe hinzu", nl: "Het voegt kleur toe" },
          { en: "It creates carbonation", es: "Crea carbonatación", de: "Es erzeugt Kohlensäure", nl: "Het creëert koolzuur" }
        ],
        correct: 1,
        explanation: {
          en: "Water makes up about 90-95% of beer and its mineral content significantly affects the final product taste and quality.",
          es: "El agua constituye aproximadamente el 90-95% de la cerveza y su contenido mineral afecta significativamente el sabor y la calidad del producto final.",
          de: "Wasser macht etwa 90-95% des Bieres aus und sein Mineralgehalt beeinflusst den Geschmack und die Qualität des Endprodukts erheblich.",
          nl: "Water vormt ongeveer 90-95% van bier en het mineraalgehalte beïnvloedt de smaak en kwaliteit van het eindproduct aanzienlijk."
        }
      },
      {
        question: {
          en: "What does IBU stand for in beer terminology?",
          es: "¿Qué significa IBU en la terminología cervecera?",
          de: "Wofür steht IBU in der Bierterminologie?",
          nl: "Waar staat IBU voor in biertermen?"
        },
        options: [
          { en: "International Beer Union", es: "Unión Internacional de Cerveza", de: "Internationale Bierunion", nl: "Internationale Bierunie" },
          { en: "International Bitterness Units", es: "Unidades Internacionales de Amargor", de: "Internationale Bitterkeitseinheiten", nl: "International Bitterness Units" },
          { en: "International Brewing Units", es: "Unidades Internacionales de Elaboración", de: "Internationale Braueinheiten", nl: "Internationale Brouwunits" },
          { en: "Independent Beer Union", es: "Unión de Cerveza Independiente", de: "Unabhängige Bierunion", nl: "Onafhankelijke Bierunie" }
        ],
        correct: 1,
        explanation: {
          en: "IBU stands for International Bitterness Units, a measurement scale for the bitterness of beer derived from hops.",
          es: "IBU significa Unidades Internacionales de Amargor, una escala de medición para el amargor de la cerveza derivada del lúpulo.",
          de: "IBU steht für Internationale Bitterkeitseinheiten, eine Messskala für die Bitterkeit von Bier, die vom Hopfen herrührt.",
          nl: "IBU staat voor International Bitterness Units, een meetschaal voor de bitterheid van bier afkomstig van hop."
        }
      },
      {
        question: {
          en: "What is the difference between ale and lager yeast fermentation temperatures?",
          es: "¿Cuál es la diferencia entre las temperaturas de fermentación de levadura ale y lager?",
          de: "Was ist der Unterschied zwischen Ale- und Lager-Hefe-Gärungstemperaturen?",
          nl: "Wat is het verschil tussen ale en lager gistfermentatietemperaturen?"
        },
        options: [
          { en: "Ales ferment warmer, lagers ferment cooler", es: "Las ales fermentan más cálido, las lagers más frío", de: "Ales gären wärmer, Lagers gären kühler", nl: "Ales fermenteren warmer, lagers fermenteren koeler" },
          { en: "Both ferment at the same temperature", es: "Ambas fermentan a la misma temperatura", de: "Beide gären bei derselben Temperatur", nl: "Beide fermenteren op dezelfde temperatuur" },
          { en: "Lagers ferment warmer, ales ferment cooler", es: "Las lagers fermentan más cálido, las ales más frío", de: "Lagers gären wärmer, Ales gären kühler", nl: "Lagers fermenteren warmer, ales fermenteren koeler" },
          { en: "Temperature does not matter", es: "La temperatura no importa", de: "Die Temperatur ist egal", nl: "Temperatuur maakt niet uit" }
        ],
        correct: 0,
        explanation: {
          en: "Ale yeast ferments at warmer temperatures (15-24°C), while lager yeast ferments at cooler temperatures (7-13°C), creating distinct flavor profiles.",
          es: "La levadura ale fermenta a temperaturas más cálidas (15-24°C), mientras que la levadura lager fermenta a temperaturas más frías (7-13°C), creando perfiles de sabor distintos.",
          de: "Ale-Hefe gärt bei wärmeren Temperaturen (15-24°C), während Lager-Hefe bei kühleren Temperaturen (7-13°C) gärt und unterschiedliche Geschmacksprofile erzeugt.",
          nl: "Ale-gist fermenteert bij warmere temperaturen (15-24°C), terwijl lager-gist fermenteert bij koelere temperaturen (7-13°C), wat onderscheidende smaakprofielen creëert."
        }
      },
      {
        question: {
          en: "What is the purpose of the boil in beer brewing?",
          es: "¿Cuál es el propósito del hervido en la elaboración de cerveza?",
          de: "Was ist der Zweck des Kochens beim Bierbrauen?",
          nl: "Wat is het doel van het koken bij bierbrouwen?"
        },
        options: [
          { en: "To add color only", es: "Solo para agregar color", de: "Nur um Farbe hinzuzufügen", nl: "Alleen om kleur toe te voegen" },
          { en: "To sterilize and extract hop compounds", es: "Para esterilizar y extraer compuestos del lúpulo", de: "Um zu sterilisieren und Hopfenverbindungen zu extrahieren", nl: "Om te steriliseren en hopverbindingen te extraheren" },
          { en: "To increase alcohol content", es: "Para aumentar el contenido de alcohol", de: "Um den Alkoholgehalt zu erhöhen", nl: "Om het alcoholgehalte te verhogen" },
          { en: "To add carbonation", es: "Para agregar carbonatación", de: "Um Kohlensäure hinzuzufügen", nl: "Om koolzuur toe te voegen" }
        ],
        correct: 1,
        explanation: {
          en: "The boil sterilizes the wort, extracts bittering compounds from hops, concentrates the wort, and drives off unwanted volatiles.",
          es: "El hervido esteriliza el mosto, extrae compuestos amargos del lúpulo, concentra el mosto y elimina volátiles no deseados.",
          de: "Das Kochen sterilisiert die Würze, extrahiert Bitterstoffe aus dem Hopfen, konzentriert die Würze und vertreibt unerwünschte flüchtige Stoffe.",
          nl: "Het koken steriliseert de wort, extraheert bittere verbindingen uit hop, concentreert de wort en verdrijft ongewenste vluchtige stoffen."
        }
      },
      {
        question: {
          en: "What is meant by original gravity in brewing?",
          es: "¿Qué se entiende por gravedad original en la elaboración?",
          de: "Was bedeutet Stammwürze beim Brauen?",
          nl: "Wat wordt bedoeld met oorspronkelijk soortelijk gewicht bij brouwen?"
        },
        options: [
          { en: "The weight of the brewing equipment", es: "El peso del equipo de elaboración", de: "Das Gewicht der Brauausrüstung", nl: "Het gewicht van de brouwapparatuur" },
          { en: "The density of wort before fermentation", es: "La densidad del mosto antes de la fermentación", de: "Die Dichte der Würze vor der Gärung", nl: "De dichtheid van wort voor fermentatie" },
          { en: "The pH level of water", es: "El nivel de pH del agua", de: "Der pH-Wert des Wassers", nl: "Het pH-niveau van water" },
          { en: "The temperature of fermentation", es: "La temperatura de fermentación", de: "Die Gärungstemperatur", nl: "De fermentatietemperatuur" }
        ],
        correct: 1,
        explanation: {
          en: "Original gravity measures the density of wort before fermentation, indicating the amount of fermentable sugars present that will determine alcohol content.",
          es: "La gravedad original mide la densidad del mosto antes de la fermentación, indicando la cantidad de azúcares fermentables presentes que determinarán el contenido de alcohol.",
          de: "Die Stammwürze misst die Dichte der Würze vor der Gärung und zeigt die Menge an fermentierbaren Zuckern an, die den Alkoholgehalt bestimmen werden.",
          nl: "Oorspronkelijk soortelijk gewicht meet de dichtheid van wort voor fermentatie, wat de hoeveelheid fermenteerbare suikers aangeeft die het alcoholgehalte zal bepalen."
        }
      },
      {
        question: {
          en: "What is krausening in beer production?",
          es: "¿Qué es el krausening en la producción de cerveza?",
          de: "Was ist Kräusening in der Bierproduktion?",
          nl: "Wat is krausening bij bierproductie?"
        },
        options: [
          { en: "Adding spices to beer", es: "Agregar especias a la cerveza", de: "Gewürze zum Bier hinzufügen", nl: "Specerijen aan bier toevoegen" },
          { en: "Adding actively fermenting wort for carbonation", es: "Agregar mosto en fermentación activa para carbonatación", de: "Aktiv gärende Würze für Kohlensäure hinzufügen", nl: "Actief fermenterende wort toevoegen voor koolzuur" },
          { en: "Filtering the beer", es: "Filtrar la cerveza", de: "Das Bier filtern", nl: "Het bier filteren" },
          { en: "Aging in wooden barrels", es: "Envejecer en barricas de madera", de: "Reifung in Holzfässern", nl: "Rijpen in houten vaten" }
        ],
        correct: 1,
        explanation: {
          en: "Krausening involves adding a small amount of actively fermenting wort to finished beer for natural carbonation and conditioning.",
          es: "El krausening implica agregar una pequeña cantidad de mosto en fermentación activa a la cerveza terminada para carbonatación y acondicionamiento natural.",
          de: "Kräusening beinhaltet das Hinzufügen einer kleinen Menge aktiv gärender Würze zum fertigen Bier für natürliche Kohlensäure und Konditionierung.",
          nl: "Krausening houdt in dat een kleine hoeveelheid actief fermenterende wort aan afgewerkt bier wordt toegevoegd voor natuurlijke koolzuur en conditionering."
        }
      },
      {
        question: {
          en: "What does ABV measure in beer?",
          es: "¿Qué mide el ABV en la cerveza?",
          de: "Was misst ABV im Bier?",
          nl: "Wat meet ABV in bier?"
        },
        options: [
          { en: "Aroma and Bitterness Value", es: "Valor de Aroma y Amargor", de: "Aroma- und Bitterkeitswert", nl: "Aroma en Bitterheidswaarde" },
          { en: "Alcohol By Volume", es: "Alcohol por Volumen", de: "Alkohol nach Volumen", nl: "Alcohol By Volume" },
          { en: "Average Beer Value", es: "Valor Promedio de Cerveza", de: "Durchschnittlicher Bierwert", nl: "Gemiddelde Bierwaarde" },
          { en: "Absolute Beer Volume", es: "Volumen Absoluto de Cerveza", de: "Absolutes Biervolumen", nl: "Absoluut Biervolume" }
        ],
        correct: 1,
        explanation: {
          en: "ABV stands for Alcohol By Volume, measuring the percentage of alcohol content in beer.",
          es: "ABV significa Alcohol por Volumen, midiendo el porcentaje de contenido de alcohol en la cerveza.",
          de: "ABV steht für Alkohol nach Volumen und misst den Prozentsatz des Alkoholgehalts im Bier.",
          nl: "ABV staat voor Alcohol By Volume, het meten van het percentage alcoholgehalte in bier."
        }
      },
      {
        question: {
          en: "What are adjuncts in brewing?",
          es: "¿Qué son los adjuntos en la elaboración?",
          de: "Was sind Zusatzstoffe beim Brauen?",
          nl: "Wat zijn adjuncten bij het brouwen?"
        },
        options: [
          { en: "Additional brewing equipment", es: "Equipo de elaboración adicional", de: "Zusätzliche Brauausrüstung", nl: "Extra brouwapparatuur" },
          { en: "Unmalted grains or fermentable sugars", es: "Granos no malteados o azúcares fermentables", de: "Ungemälzte Körner oder fermentierbare Zucker", nl: "Niet-gemout graan of fermenteerbare suikers" },
          { en: "Cleaning chemicals", es: "Químicos de limpieza", de: "Reinigungschemikalien", nl: "Schoonmaakchemicaliën" },
          { en: "Different yeast strains", es: "Diferentes cepas de levadura", de: "Verschiedene Hefestämme", nl: "Verschillende giststammen" }
        ],
        correct: 1,
        explanation: {
          en: "Adjuncts are unmalted grains or other fermentable sugars added to beer as supplements to malted barley, such as corn, rice, or sugar.",
          es: "Los adjuntos son granos no malteados u otros azúcares fermentables agregados a la cerveza como suplementos a la cebada malteada, como maíz, arroz o azúcar.",
          de: "Zusatzstoffe sind ungemälzte Körner oder andere fermentierbare Zucker, die dem Bier als Ergänzung zu gemälzter Gerste hinzugefügt werden, wie Mais, Reis oder Zucker.",
          nl: "Adjuncten zijn niet-gemout graan of andere fermenteerbare suikers die aan bier worden toegevoegd als aanvulling op gemout gerst, zoals mais, rijst of suiker."
        }
      },
      {
        question: {
          en: "What is the function of finings in beer production?",
          es: "¿Cuál es la función de los clarificantes en la producción de cerveza?",
          de: "Was ist die Funktion von Schönungsmitteln in der Bierproduktion?",
          nl: "Wat is de functie van klaringsmiddelen bij bierproductie?"
        },
        options: [
          { en: "To add flavor", es: "Para agregar sabor", de: "Um Geschmack hinzuzufügen", nl: "Om smaak toe te voegen" },
          { en: "To clarify beer by removing particles", es: "Para clarificar la cerveza eliminando partículas", de: "Um Bier durch Entfernen von Partikeln zu klären", nl: "Om bier te helderen door deeltjes te verwijderen" },
          { en: "To increase carbonation", es: "Para aumentar la carbonatación", de: "Um die Kohlensäure zu erhöhen", nl: "Om koolzuur te verhogen" },
          { en: "To preserve the beer", es: "Para conservar la cerveza", de: "Um das Bier zu konservieren", nl: "Om het bier te bewaren" }
        ],
        correct: 1,
        explanation: {
          en: "Finings are clarifying agents added to beer to help proteins and yeast cells clump together and settle out, producing clearer beer.",
          es: "Los clarificantes son agentes clarificadores agregados a la cerveza para ayudar a que las proteínas y células de levadura se aglomeren y se asienten, produciendo cerveza más clara.",
          de: "Schönungsmittel sind Klärmittel, die dem Bier zugesetzt werden, um Proteine und Hefezellen zusammenzuballen und abzusetzen, wodurch klareres Bier entsteht.",
          nl: "Klaringsmiddelen zijn helderingsmiddelen die aan bier worden toegevoegd om eiwitten en gistcellen te laten samenklonteren en bezinken, wat helderder bier produceert."
        }
      },
      {
        question: {
          en: "What is attenuation in brewing?",
          es: "¿Qué es la atenuación en la elaboración?",
          de: "Was ist Vergärungsgrad beim Brauen?",
          nl: "Wat is attenuatie bij brouwen?"
        },
        options: [
          { en: "The reduction of sugars during fermentation", es: "La reducción de azúcares durante la fermentación", de: "Die Reduzierung von Zuckern während der Gärung", nl: "De vermindering van suikers tijdens fermentatie" },
          { en: "The addition of hops", es: "La adición de lúpulo", de: "Die Zugabe von Hopfen", nl: "De toevoeging van hop" },
          { en: "The cooling of wort", es: "El enfriamiento del mosto", de: "Das Kühlen der Würze", nl: "Het afkoelen van wort" },
          { en: "The filtration process", es: "El proceso de filtración", de: "Der Filtrationsprozess", nl: "Het filterproces" }
        ],
        correct: 0,
        explanation: {
          en: "Attenuation refers to the degree to which yeast converts fermentable sugars into alcohol and CO2, measured as the difference between original and final gravity.",
          es: "La atenuación se refiere al grado en que la levadura convierte azúcares fermentables en alcohol y CO2, medido como la diferencia entre la gravedad original y final.",
          de: "Vergärungsgrad bezieht sich auf den Grad, zu dem Hefe fermentierbare Zucker in Alkohol und CO2 umwandelt, gemessen als Differenz zwischen Stammwürze und Endvergärung.",
          nl: "Attenuatie verwijst naar de mate waarin gist fermenteerbare suikers omzet in alcohol en CO2, gemeten als het verschil tussen oorspronkelijk en finaal soortelijk gewicht."
        }
      },
    ]
  };

  // Export for use in the quiz application
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level8;
  } else if (typeof window !== 'undefined') {
    window.level8 = level8;
  }
})();
