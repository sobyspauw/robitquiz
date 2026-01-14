// Beer Quiz - Level 8
(function() {
  const level8 = {
    name: {
          "en": "Professional Brewing Science",
          "es": "Ciencia Profesional de la Cervecería",
          "de": "Professionelle Brauwissenschaft",
          "nl": "Professionele Brouwwetenschap"
    },
    questions: [
      {
        question: {
                  "en": "What is the optimal pH range for mashing in beer production?",
                  "es": "¿Cuál es el rango de pH óptimo para el macerado en la producción de cerveza?",
                  "de": "Was ist der optimale pH-Bereich für das Maischen bei der Bierproduktion?",
                  "nl": "Wat is het optimale pH-bereik voor het maischen bij bierproductie?"
        },
        options: [
        {
                  "en": "5.8 - 6.2",
                  "es": "5.8 - 6.2",
                  "de": "5.8 - 6.2",
                  "nl": "5.8 - 6.2"
        },
        {
                  "en": "5.2 - 5.6",
                  "es": "5.2 - 5.6",
                  "de": "5.2 - 5.6",
                  "nl": "5.2 - 5.6"
        },
        {
                  "en": "4.8 - 5.2",
                  "es": "4.8 - 5.2",
                  "de": "4.8 - 5.2",
                  "nl": "4.8 - 5.2"
        },
        {
                  "en": "6.2 - 6.8",
                  "es": "6.2 - 6.8",
                  "de": "6.2 - 6.8",
                  "nl": "6.2 - 6.8"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "The optimal mash pH range is 5.2-5.6, which maximizes enzyme activity and ensures proper protein coagulation and hop utilization.",
                  "es": "El rango óptimo de pH del macerado es 5.2-5.6, que maximiza la actividad enzimática y asegura la coagulación adecuada de proteínas y utilización del lúpulo.",
                  "de": "Der optimale Maische-pH-Bereich liegt bei 5.2-5.6, was die Enzymaktivität maximiert und eine ordnungsgemäße Proteinkoagulation und Hopfenausnutzung gewährleistet.",
                  "nl": "Het optimale pH-bereik voor de maisch is 5.2-5.6, wat de enzymactiviteit maximaliseert en zorgt voor juiste eiwitcoagulatie en hopgebruik."
        }
      },
      {
        question: {
                  "en": "Which enzyme is for breaking down starches to fermentable sugars during mashing?",
                  "es": "¿Qué enzima es principalmente responsable de descomponer los almidones en azúcares fermentables durante el macerado?",
                  "de": "Welches Enzym ist hauptsächlich für den Abbau von Stärke zu fermentierbaren Zuckern während des Maischens verantwortlich?",
                  "nl": "Welk enzym is primair verantwoordelijk voor het afbreken van zetmeel tot fermenteerbare suikers tijdens het maischen?"
        },
        options: [
        {
                  "en": "β-glucanase",
                  "es": "β-glucanasa",
                  "de": "β-Glucanase",
                  "nl": "β-glucanase"
        },
        {
                  "en": "Protease",
                  "es": "Proteasa",
                  "de": "Protease",
                  "nl": "Protease"
        },
        {
                  "en": "α-amylase",
                  "es": "α-amilasa",
                  "de": "α-Amylase",
                  "nl": "α-amylase"
        },
        {
                  "en": "Lipase",
                  "es": "Lipasa",
                  "de": "Lipase",
                  "nl": "Lipase"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "α-amylase breaks down starch chains into smaller dextrins and fermentable sugars, working optimally at 65-72°C during mashing.",
                  "es": "La α-amilasa descompone las cadenas de almidón en dextrinas más pequeñas y azúcares fermentables, funcionando óptimamente a 65-72°C durante el macerado.",
                  "de": "α-Amylase baut Stärkeketten in kleinere Dextrine und fermentierbare Zucker ab und arbeitet optimal bei 65-72°C während des Maischens.",
                  "nl": "α-amylase breekt zetmeelketens af tot kleinere dextrines en fermenteerbare suikers, en werkt optimaal bij 65-72°C tijdens het maischen."
        }
      },
      {
        question: {
                  "en": "What is the primary role of calcium ions (Ca²⁺) in brewing water chemistry?",
                  "es": "¿Cuál es el papel principal de los iones de calcio (Ca²⁺) en la química del agua de cervecería?",
                  "de": "Was ist die Hauptrolle von Calciumionen (Ca²⁺) in der Brauwasserchemie?",
                  "nl": "Wat is de primaire rol van calciumionen (Ca²⁺) in de waterchemie van het brouwen?"
        },
        options: [
        {
                  "en": "Water softening",
                  "es": "Ablandamiento del agua",
                  "de": "Wasserenthärtung",
                  "nl": "Waterverzachting"
        },
        {
                  "en": "pH stabilization and enzyme activation",
                  "es": "Estabilización del pH y activación enzimática",
                  "de": "pH-Stabilisierung und Enzymaktivierung",
                  "nl": "pH-stabilisatie en enzymactivering"
        },
        {
                  "en": "Flavor enhancement only",
                  "es": "Solo mejora del sabor",
                  "de": "Nur Geschmacksverbesserung",
                  "nl": "Alleen smaakverbetering"
        },
        {
                  "en": "Color development",
                  "es": "Desarrollo del color",
                  "de": "Farbentwicklung",
                  "nl": "Kleurontwikkeling"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Calcium ions help stabilize mash pH, activate enzymes like α-amylase, aid in protein precipitation, and improve yeast flocculation.",
                  "es": "Los iones de calcio ayudan a estabilizar el pH del macerado, activan enzimas como la α-amilasa, ayudan en la precipitación de proteínas y mejoran la floculación de levadura.",
                  "de": "Calciumionen helfen bei der Stabilisierung des Maische-pH, aktivieren Enzyme wie α-Amylase, unterstützen die Proteinausfällung und verbessern die Hefeflockung.",
                  "nl": "Calciumionen helpen de pH van de maisch te stabiliseren, activeren enzymen zoals α-amylase, helpen bij eiwitprecipitatie en verbeteren gistflocculatie."
        }
      },
      {
        question: {
                  "en": "What is the optimal fermentation temperature range for most Saccharomyces cerevisiae ale yeasts?",
                  "es": "¿Cuál es el rango de temperatura de fermentación óptimo para la mayoría de las levaduras ale Saccharomyces cerevisiae?",
                  "de": "Was ist der optimale Gärtemperaturbereich für die meisten Saccharomyces cerevisiae Ale-Hefen?",
                  "nl": "Wat is het optimale fermentatietemperatuurbereik voor de meeste Saccharomyces cerevisiae ale-gisten?"
        },
        options: [
        {
                  "en": "18-22°C (64-72°F)",
                  "es": "18-22°C (64-72°F)",
                  "de": "18-22°C (64-72°F)",
                  "nl": "18-22°C (64-72°F)"
        },
        {
                  "en": "25-30°C (77-86°F)",
                  "es": "25-30°C (77-86°F)",
                  "de": "25-30°C (77-86°F)",
                  "nl": "25-30°C (77-86°F)"
        },
        {
                  "en": "32-38°C (90-100°F)",
                  "es": "32-38°C (90-100°F)",
                  "de": "32-38°C (90-100°F)",
                  "nl": "32-38°C (90-100°F)"
        },
        {
                  "en": "8-12°C (46-54°F)",
                  "es": "8-12°C (46-54°F)",
                  "de": "8-12°C (46-54°F)",
                  "nl": "8-12°C (46-54°F)"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Most ale yeasts ferment optimally at 18-22°C, producing balanced ester and alcohol profiles without excessive fusel alcohol formation.",
                  "es": "La mayoría de las levaduras ale fermentan óptimamente a 18-22°C, produciendo perfiles equilibrados de ésteres y alcohol sin formación excesiva de alcoholes fusélicos.",
                  "de": "Die meisten Ale-Hefen gären optimal bei 18-22°C und produzieren ausgewogene Ester- und Alkoholprofile ohne übermäßige Fuselalkoholbildung.",
                  "nl": "De meeste ale-gisten fermenteren optimaal bij 18-22°C, en produceren gebalanceerde ester- en alcoholprofielen zonder overmatige fuselalkoholvorming."
        }
      },
      {
        question: {
                  "en": "Which quality control parameter measures the clarity of finished beer?",
                  "es": "¿Qué parámetro de control de calidad mide la claridad de la cerveza terminada?",
                  "de": "Welcher Qualitätskontrollparameter misst die Klarheit des fertigen Biers?",
                  "nl": "Welke kwaliteitscontroleparameter meet de helderheid van het afgewerkte bier?"
        },
        options: [
        {
                  "en": "ABV (Alcohol by Volume)",
                  "es": "ABV (Alcohol por Volumen)",
                  "de": "ABV (Alkohol nach Volumen)",
                  "nl": "ABV (Alcohol by Volume)"
        },
        {
                  "en": "SRM (Standard Reference Method)",
                  "es": "SRM (Método de Referencia Estándar)",
                  "de": "SRM (Standard Reference Method)",
                  "nl": "SRM (Standard Reference Method)"
        },
        {
                  "en": "NTU (Nephelometric Turbidity Units)",
                  "es": "NTU (Unidades Nefelométricas de Turbidez)",
                  "de": "NTU (Nephelometrische Trübungseinheiten)",
                  "nl": "NTU (Nefelometrische Troebelheidseenheden)"
        },
        {
                  "en": "IBU (International Bitterness Units)",
                  "es": "IBU (Unidades Internacionales de Amargor)",
                  "de": "IBU (Internationale Bitterkeitseinheiten)",
                  "nl": "IBU (International Bitterness Units)"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "NTU measures turbidity or cloudiness in beer using nephelometric methods, with values below 1 NTU considered bright and clear.",
                  "es": "NTU mide la turbidez o nubosidad en la cerveza usando métodos nefelométricos, con valores por debajo de 1 NTU considerados brillantes y claros.",
                  "de": "NTU misst die Trübung oder Cloudiness im Bier mit nephelometrischen Methoden, wobei Werte unter 1 NTU als hell und klar gelten.",
                  "nl": "NTU meet troebeling of bewolking in bier met nefelometrische methoden, waarbij waarden onder 1 NTU als helder worden beschouwd."
        }
      },
      {
        question: {
                  "en": "What enzyme activity is responsible for converting β-glucans during mashing?",
                  "es": "¿Qué actividad enzimática es responsable de convertir los β-glucanos durante el macerado?",
                  "de": "Welche Enzymaktivität ist für die Umwandlung von β-Glucanen während des Maischens verantwortlich?",
                  "nl": "Welke enzymactiviteit is verantwoordelijk voor het omzetten van β-glucanen tijdens het maischen?"
        },
        options: [
        {
                  "en": "Protease activity",
                  "es": "Actividad proteásica",
                  "de": "Protease-Aktivität",
                  "nl": "Protease activiteit"
        },
        {
                  "en": "Invertase activity",
                  "es": "Actividad invertásica",
                  "de": "Invertase-Aktivität",
                  "nl": "Invertase activiteit"
        },
        {
                  "en": "β-glucanase activity",
                  "es": "Actividad β-glucanásica",
                  "de": "β-Glucanase-Aktivität",
                  "nl": "β-glucanase activiteit"
        },
        {
                  "en": "Amylase activity",
                  "es": "Actividad amilásica",
                  "de": "Amylase-Aktivität",
                  "nl": "Amylase activiteit"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "β-glucanase breaks down β-glucans from cell walls, reducing wort viscosity and preventing filtration problems. It works optimally at 40-45°C.",
                  "es": "La β-glucanasa descompone los β-glucanos de las paredes celulares, reduciendo la viscosidad del mosto y previniendo problemas de filtración. Funciona óptimamente a 40-45°C.",
                  "de": "β-Glucanase baut β-Glucane aus Zellwänden ab, reduziert die Würzeviskosität und verhindert Filtrationsprobleme. Sie arbeitet optimal bei 40-45°C.",
                  "nl": "β-glucanase breekt β-glucanen uit celwanden af, vermindert wortviscositeit en voorkomt filterproblemen. Het werkt optimaal bij 40-45°C."
        }
      },
      {
        question: {
                  "en": "What is the target dissolved oxygen level for wort before pitching yeast?",
                  "es": "¿Cuál es el nivel objetivo de oxígeno disuelto para el mosto antes de inocular la levadura?",
                  "de": "Was ist der Ziel-Gelöstsauerstoffgehalt für die Würze vor dem Hefezusatz?",
                  "nl": "Wat is het doelniveau voor opgeloste zuurstof in wort voor het toevoegen van gist?"
        },
        options: [
        {
                  "en": "8-10 ppm",
                  "es": "8-10 ppm",
                  "de": "8-10 ppm",
                  "nl": "8-10 ppm"
        },
        {
                  "en": "15-20 ppm",
                  "es": "15-20 ppm",
                  "de": "15-20 ppm",
                  "nl": "15-20 ppm"
        },
        {
                  "en": "25-30 ppm",
                  "es": "25-30 ppm",
                  "de": "25-30 ppm",
                  "nl": "25-30 ppm"
        },
        {
                  "en": "2-4 ppm",
                  "es": "2-4 ppm",
                  "de": "2-4 ppm",
                  "nl": "2-4 ppm"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Wort should contain 8-10 ppm dissolved oxygen for healthy yeast reproduction and sterol synthesis during the aerobic phase of fermentation.",
                  "es": "El mosto debe contener 8-10 ppm de oxígeno disuelto para una reproducción saludable de levadura y síntesis de esteroles durante la fase aeróbica de fermentación.",
                  "de": "Die Würze sollte 8-10 ppm gelösten Sauerstoff für gesunde Hefevermehrung und Sterolsynthese während der aeroben Gärungsphase enthalten.",
                  "nl": "Wort moet 8-10 ppm opgeloste zuurstof bevatten voor gezonde gistreproductie en sterolsynthese tijdens de aerobe fermentatiefase."
        }
      },
      {
        question: {
                  "en": "Which water mineral profile is most suitable for brewing Pilsner-style beers?",
                  "es": "¿Qué perfil mineral del agua es más adecuado para elaborar cervezas estilo Pilsner?",
                  "de": "Welches Wassermineralprofil ist am besten für das Brauen von Pilsner-Bieren geeignet?",
                  "nl": "Welk watermineraalprofiel is het meest geschikt voor het brouwen van Pilsner-stijl bieren?"
        },
        options: [
        {
                  "en": "Low mineral content, soft water",
                  "es": "Bajo contenido mineral, agua blanda",
                  "de": "Niedriger Mineralgehalt, weiches Wasser",
                  "nl": "Laag mineraalgehalte, zacht water"
        },
        {
                  "en": "High calcium, high sulfate",
                  "es": "Alto calcio, alto sulfato",
                  "de": "Hoher Kalzium-, hoher Sulfatgehalt",
                  "nl": "Hoog calcium, hoog sulfaat"
        },
        {
                  "en": "Balanced minerals, hard water",
                  "es": "Minerales equilibrados, agua dura",
                  "de": "Ausgewogene Mineralien, hartes Wasser",
                  "nl": "Gebalanceerde mineralen, hard water"
        },
        {
                  "en": "High magnesium, high chloride",
                  "es": "Alto magnesio, alto cloruro",
                  "de": "Hoher Magnesium-, hoher Chloridgehalt",
                  "nl": "Hoog magnesium, hoog chloride"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Pilsner requires very soft water with low mineral content to showcase the delicate malt character and allow the Saaz hop profile to shine through.",
                  "es": "El Pilsner requiere agua muy blanda con bajo contenido mineral para mostrar el carácter delicado de la malta y permitir que brille el perfil del lúpulo Saaz.",
                  "de": "Pilsner benötigt sehr weiches Wasser mit niedrigem Mineralgehalt, um den delikaten Malzcharakter zu zeigen und das Saaz-Hopfenprofil durchscheinen zu lassen.",
                  "nl": "Pilsner vereist zeer zacht water met laag mineraalgehalte om het delicate moutkarakter te tonen en het Saaz-hopprofiel te laten uitkomen."
        }
      },
      {
        question: {
                  "en": "What is the primary function of yeast autolysis in beer production?",
                  "es": "¿Cuál es la función principal de la autólisis de levadura en la producción de cerveza?",
                  "de": "Was ist die Hauptfunktion der Hefeautolyse bei der Bierproduktion?",
                  "nl": "Wat is de primaire functie van gistautolysis bij bierproductie?"
        },
        options: [
        {
                  "en": "Reduces fermentation time",
                  "es": "Reduce el tiempo de fermentación",
                  "de": "Reduziert die Gärungszeit",
                  "nl": "Vermindert fermentatietijd"
        },
        {
                  "en": "Releases enzymes and nutrients for flavor development",
                  "es": "Libera enzimas y nutrientes para el desarrollo del sabor",
                  "de": "Setzt Enzyme und Nährstoffe für die Geschmacksentwicklung frei",
                  "nl": "Geeft enzymen en voedingsstoffen vrij voor smaaksontwikkeling"
        },
        {
                  "en": "Clarifies the beer",
                  "es": "Clarifica la cerveza",
                  "de": "Klärt das Bier",
                  "nl": "Klaart het bier"
        },
        {
                  "en": "Increases alcohol content",
                  "es": "Aumenta el contenido de alcohol",
                  "de": "Erhöht den Alkoholgehalt",
                  "nl": "Verhoogt alcoholgehalte"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Yeast autolysis releases amino acids, vitamins, and enzymes that contribute to beer flavor complexity, especially important in lager aging and bottle conditioning.",
                  "es": "La autólisis de levadura libera aminoácidos, vitaminas y enzimas que contribuyen a la complejidad del sabor de la cerveza, especialmente importante en el envejecimiento de lager y acondicionamiento en botella.",
                  "de": "Hefeautolyse setzt Aminosäuren, Vitamine und Enzyme frei, die zur Geschmackskomplexität des Biers beitragen, besonders wichtig bei der Lagerreifung und Flaschengärung.",
                  "nl": "Gistautolysis geeft aminozuren, vitamines en enzymen vrij die bijdragen aan de smaakcomplexiteit van bier, vooral belangrijk bij lagerrijping en flessenconditonering."
        }
      },
      {
        question: {
                  "en": "Which microbiological test is most critical for detecting wild yeast contamination?",
                  "es": "¿Qué prueba microbiológica es más crítica para detectar contaminación por levadura salvaje?",
                  "de": "Welcher mikrobiologische Test ist am wichtigsten für die Erkennung von Wildhefe-Kontamination?",
                  "nl": "Welke microbiologische test is het meest kritiek voor het detecteren van wilde gistcontaminatie?"
        },
        options: [
        {
                  "en": "Standard wort agar",
                  "es": "Agar de mosto estándar",
                  "de": "Standard-Würze-Agar",
                  "nl": "Standaard wort-agar"
        },
        {
                  "en": "Sabouraud dextrose agar",
                  "es": "Agar Sabouraud dextrosa",
                  "de": "Sabouraud-Dextrose-Agar",
                  "nl": "Sabouraud dextrose-agar"
        },
        {
                  "en": "MacConkey agar",
                  "es": "Agar MacConkey",
                  "de": "MacConkey-Agar",
                  "nl": "MacConkey-agar"
        },
        {
                  "en": "Lysine agar plating",
                  "es": "Plaqueo en agar lisina",
                  "de": "Lysin-Agar-Plattierung",
                  "nl": "Lysine-agar plating"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Lysine agar selectively inhibits brewing yeast (Saccharomyces) while allowing wild yeasts like Brettanomyces and Candida to grow, making contamination detection easier.",
                  "es": "El agar lisina inhibe selectivamente la levadura cervecera (Saccharomyces) mientras permite que crezcan levaduras salvajes como Brettanomyces y Candida, facilitando la detección de contaminación.",
                  "de": "Lysin-Agar hemmt selektiv Brauhefe (Saccharomyces), während Wildhefen wie Brettanomyces und Candida wachsen können, was die Kontaminationserkennung erleichtert.",
                  "nl": "Lysine-agar remt selectief brouwgist (Saccharomyces) terwijl wilde gisten zoals Brettanomyces en Candida kunnen groeien, wat contaminatiedetectie vergemakkelijkt."
        }
      },
      {
        question: {
                  "en": "What is the role of water in beer production?",
                  "es": "¿Cuál es el papel del agua en la producción de cerveza?",
                  "de": "Welche Rolle spielt Wasser in der Bierproduktion?",
                  "nl": "Wat is de rol van water bij bierproductie?"
        },
        options: [
        {
                  "en": "It dilutes the beer",
                  "es": "Diluye la cerveza",
                  "de": "Es verdünnt das Bier",
                  "nl": "Het verdunt het bier"
        },
        {
                  "en": "It adds color",
                  "es": "Añade color",
                  "de": "Es fügt Farbe hinzu",
                  "nl": "Het voegt kleur toe"
        },
        {
                  "en": "It creates carbonation",
                  "es": "Crea carbonatación",
                  "de": "Es erzeugt Kohlensäure",
                  "nl": "Het creëert koolzuur"
        },
        {
                  "en": "It forms the majority of beer composition",
                  "es": "Forma la mayoría de la composición de la cerveza",
                  "de": "Es bildet den größten Teil der Bierzusammensetzung",
                  "nl": "Het vormt het grootste deel van de biersamenstelling"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Water makes up about 90-95% of beer and its mineral content significantly affects the final product taste and quality.",
                  "es": "El agua constituye aproximadamente el 90-95% de la cerveza y su contenido mineral afecta significativamente el sabor y la calidad del producto final.",
                  "de": "Wasser macht etwa 90-95% des Bieres aus und sein Mineralgehalt beeinflusst den Geschmack und die Qualität des Endprodukts erheblich.",
                  "nl": "Water vormt ongeveer 90-95% van bier en het mineraalgehalte beïnvloedt de smaak en kwaliteit van het eindproduct aanzienlijk."
        }
      },
      {
        question: {
                  "en": "What does IBU stand for in beer terminology?",
                  "es": "¿Qué significa IBU en la terminología cervecera?",
                  "de": "Wofür steht IBU in der Bierterminologie?",
                  "nl": "Waar staat IBU voor in biertermen?"
        },
        options: [
        {
                  "en": "International Beer Union",
                  "es": "Unión Internacional de Cerveza",
                  "de": "Internationale Bierunion",
                  "nl": "Internationale Bierunie"
        },
        {
                  "en": "International Brewing Units",
                  "es": "Unidades Internacionales de Elaboración",
                  "de": "Internationale Braueinheiten",
                  "nl": "Internationale Brouwunits"
        },
        {
                  "en": "Independent Beer Union",
                  "es": "Unión de Cerveza Independiente",
                  "de": "Unabhängige Bierunion",
                  "nl": "Onafhankelijke Bierunie"
        },
        {
                  "en": "International Bitterness Units",
                  "es": "Unidades Internacionales de Amargor",
                  "de": "Internationale Bitterkeitseinheiten",
                  "nl": "International Bitterness Units"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "IBU stands for International Bitterness Units, a measurement scale for the bitterness of beer derived from hops.",
                  "es": "IBU significa Unidades Internacionales de Amargor, una escala de medición para el amargor de la cerveza derivada del lúpulo.",
                  "de": "IBU steht für Internationale Bitterkeitseinheiten, eine Messskala für die Bitterkeit von Bier, die vom Hopfen herrührt.",
                  "nl": "IBU staat voor International Bitterness Units, een meetschaal voor de bitterheid van bier afkomstig van hop."
        }
      },
      {
        question: {
                  "en": "What is the difference between ale and lager yeast fermentation temperatures?",
                  "es": "¿Cuál es la diferencia entre las temperaturas de fermentación de levadura ale y lager?",
                  "de": "Was ist der Unterschied zwischen Ale- und Lager-Hefe-Gärungstemperaturen?",
                  "nl": "Wat is het verschil tussen ale en lager gistfermentatietemperaturen?"
        },
        options: [
        {
                  "en": "Both ferment at the same temperature",
                  "es": "Ambas fermentan a la misma temperatura",
                  "de": "Beide gären bei derselben Temperatur",
                  "nl": "Beide fermenteren op dezelfde temperatuur"
        },
        {
                  "en": "Lagers ferment warmer, ales ferment cooler",
                  "es": "Las lagers fermentan más cálido, las ales más frío",
                  "de": "Lagers gären wärmer, Ales gären kühler",
                  "nl": "Lagers fermenteren warmer, ales fermenteren koeler"
        },
        {
                  "en": "Ales ferment warmer, lagers ferment cooler",
                  "es": "Las ales fermentan más cálido, las lagers más frío",
                  "de": "Ales gären wärmer, Lagers gären kühler",
                  "nl": "Ales fermenteren warmer, lagers fermenteren koeler"
        },
        {
                  "en": "Temperature does not matter",
                  "es": "La temperatura no importa",
                  "de": "Die Temperatur ist egal",
                  "nl": "Temperatuur maakt niet uit"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Ale yeast ferments at warmer temperatures (15-24°C), while lager yeast ferments at cooler temperatures (7-13°C), creating distinct flavor profiles.",
                  "es": "La levadura ale fermenta a temperaturas más cálidas (15-24°C), mientras que la levadura lager fermenta a temperaturas más frías (7-13°C), creando perfiles de sabor distintos.",
                  "de": "Ale-Hefe gärt bei wärmeren Temperaturen (15-24°C), während Lager-Hefe bei kühleren Temperaturen (7-13°C) gärt und unterschiedliche Geschmacksprofile erzeugt.",
                  "nl": "Ale-gist fermenteert bij warmere temperaturen (15-24°C), terwijl lager-gist fermenteert bij koelere temperaturen (7-13°C), wat onderscheidende smaakprofielen creëert."
        }
      },
      {
        question: {
                  "en": "What is the purpose of the boil in beer brewing?",
                  "es": "¿Cuál es el propósito del hervido en la elaboración de cerveza?",
                  "de": "Was ist der Zweck des Kochens beim Bierbrauen?",
                  "nl": "Wat is het doel van het koken bij bierbrouwen?"
        },
        options: [
        {
                  "en": "To sterilize and extract hop compounds",
                  "es": "Para esterilizar y extraer compuestos del lúpulo",
                  "de": "Um zu sterilisieren und Hopfenverbindungen zu extrahieren",
                  "nl": "Om te steriliseren en hopverbindingen te extraheren"
        },
        {
                  "en": "To increase alcohol content",
                  "es": "Para aumentar el contenido de alcohol",
                  "de": "Um den Alkoholgehalt zu erhöhen",
                  "nl": "Om het alcoholgehalte te verhogen"
        },
        {
                  "en": "To add carbonation",
                  "es": "Para agregar carbonatación",
                  "de": "Um Kohlensäure hinzuzufügen",
                  "nl": "Om koolzuur toe te voegen"
        },
        {
                  "en": "To add color only",
                  "es": "Solo para agregar color",
                  "de": "Nur um Farbe hinzuzufügen",
                  "nl": "Alleen om kleur toe te voegen"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "The boil sterilizes the wort, extracts bittering compounds from hops, concentrates the wort, and drives off unwanted volatiles.",
                  "es": "El hervido esteriliza el mosto, extrae compuestos amargos del lúpulo, concentra el mosto y elimina volátiles no deseados.",
                  "de": "Das Kochen sterilisiert die Würze, extrahiert Bitterstoffe aus dem Hopfen, konzentriert die Würze und vertreibt unerwünschte flüchtige Stoffe.",
                  "nl": "Het koken steriliseert de wort, extraheert bittere verbindingen uit hop, concentreert de wort en verdrijft ongewenste vluchtige stoffen."
        }
      },
      {
        question: {
                  "en": "What is meant by original gravity in brewing?",
                  "es": "¿Qué se entiende por gravedad original en la elaboración?",
                  "de": "Was bedeutet Stammwürze beim Brauen?",
                  "nl": "Wat wordt bedoeld met oorspronkelijk soortelijk gewicht bij brouwen?"
        },
        options: [
        {
                  "en": "The weight of the brewing equipment",
                  "es": "El peso del equipo de elaboración",
                  "de": "Das Gewicht der Brauausrüstung",
                  "nl": "Het gewicht van de brouwapparatuur"
        },
        {
                  "en": "The density of wort before fermentation",
                  "es": "La densidad del mosto antes de la fermentación",
                  "de": "Die Dichte der Würze vor der Gärung",
                  "nl": "De dichtheid van wort voor fermentatie"
        },
        {
                  "en": "The pH level of water",
                  "es": "El nivel de pH del agua",
                  "de": "Der pH-Wert des Wassers",
                  "nl": "Het pH-niveau van water"
        },
        {
                  "en": "The temperature of fermentation",
                  "es": "La temperatura de fermentación",
                  "de": "Die Gärungstemperatur",
                  "nl": "De fermentatietemperatuur"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Original gravity measures the density of wort before fermentation, indicating the amount of fermentable sugars present that will determine alcohol content.",
                  "es": "La gravedad original mide la densidad del mosto antes de la fermentación, indicando la cantidad de azúcares fermentables presentes que determinarán el contenido de alcohol.",
                  "de": "Die Stammwürze misst die Dichte der Würze vor der Gärung und zeigt die Menge an fermentierbaren Zuckern an, die den Alkoholgehalt bestimmen werden.",
                  "nl": "Oorspronkelijk soortelijk gewicht meet de dichtheid van wort voor fermentatie, wat de hoeveelheid fermenteerbare suikers aangeeft die het alcoholgehalte zal bepalen."
        }
      },
      {
        question: {
                  "en": "What is krausening in beer production?",
                  "es": "¿Qué es el krausening en la producción de cerveza?",
                  "de": "Was ist Kräusening in der Bierproduktion?",
                  "nl": "Wat is krausening bij bierproductie?"
        },
        options: [
        {
                  "en": "Adding spices to beer",
                  "es": "Agregar especias a la cerveza",
                  "de": "Gewürze zum Bier hinzufügen",
                  "nl": "Specerijen aan bier toevoegen"
        },
        {
                  "en": "Aging in wooden barrels",
                  "es": "Envejecer en barricas de madera",
                  "de": "Reifung in Holzfässern",
                  "nl": "Rijpen in houten vaten"
        },
        {
                  "en": "Adding actively fermenting wort for carbonation",
                  "es": "Agregar mosto en fermentación activa para carbonatación",
                  "de": "Aktiv gärende Würze für Kohlensäure hinzufügen",
                  "nl": "Actief fermenterende wort toevoegen voor koolzuur"
        },
        {
                  "en": "Filtering the beer",
                  "es": "Filtrar la cerveza",
                  "de": "Das Bier filtern",
                  "nl": "Het bier filteren"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Krausening involves adding a small amount of actively fermenting wort to finished beer for natural carbonation and conditioning.",
                  "es": "El krausening implica agregar una pequeña cantidad de mosto en fermentación activa a la cerveza terminada para carbonatación y acondicionamiento natural.",
                  "de": "Kräusening beinhaltet das Hinzufügen einer kleinen Menge aktiv gärender Würze zum fertigen Bier für natürliche Kohlensäure und Konditionierung.",
                  "nl": "Krausening houdt in dat een kleine hoeveelheid actief fermenterende wort aan afgewerkt bier wordt toegevoegd voor natuurlijke koolzuur en conditionering."
        }
      },
      {
        question: {
                  "en": "What does ABV measure in beer?",
                  "es": "¿Qué mide el ABV en la cerveza?",
                  "de": "Was misst ABV im Bier?",
                  "nl": "Wat meet ABV in bier?"
        },
        options: [
        {
                  "en": "Absolute Beer Volume",
                  "es": "Volumen Absoluto de Cerveza",
                  "de": "Absolutes Biervolumen",
                  "nl": "Absoluut Biervolume"
        },
        {
                  "en": "Average Beer Value",
                  "es": "Valor Promedio de Cerveza",
                  "de": "Durchschnittlicher Bierwert",
                  "nl": "Gemiddelde Bierwaarde"
        },
        {
                  "en": "Alcohol By Volume",
                  "es": "Alcohol por Volumen",
                  "de": "Alkohol nach Volumen",
                  "nl": "Alcohol By Volume"
        },
        {
                  "en": "Aroma and Bitterness Value",
                  "es": "Valor de Aroma y Amargor",
                  "de": "Aroma- und Bitterkeitswert",
                  "nl": "Aroma en Bitterheidswaarde"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "ABV stands for Alcohol By Volume, measuring the percentage of alcohol content in beer.",
                  "es": "ABV significa Alcohol por Volumen, midiendo el porcentaje de contenido de alcohol en la cerveza.",
                  "de": "ABV steht für Alkohol nach Volumen und misst den Prozentsatz des Alkoholgehalts im Bier.",
                  "nl": "ABV staat voor Alcohol By Volume, het meten van het percentage alcoholgehalte in bier."
        }
      },
      {
        question: {
                  "en": "What are adjuncts in brewing?",
                  "es": "¿Qué son los adjuntos en la elaboración?",
                  "de": "Was sind Zusatzstoffe beim Brauen?",
                  "nl": "Wat zijn adjuncten bij het brouwen?"
        },
        options: [
        {
                  "en": "Additional brewing equipment",
                  "es": "Equipo de elaboración adicional",
                  "de": "Zusätzliche Brauausrüstung",
                  "nl": "Extra brouwapparatuur"
        },
        {
                  "en": "Unmalted grains or fermentable sugars",
                  "es": "Granos no malteados o azúcares fermentables",
                  "de": "Ungemälzte Körner oder fermentierbare Zucker",
                  "nl": "Niet-gemout graan of fermenteerbare suikers"
        },
        {
                  "en": "Different yeast strains",
                  "es": "Diferentes cepas de levadura",
                  "de": "Verschiedene Hefestämme",
                  "nl": "Verschillende giststammen"
        },
        {
                  "en": "Cleaning chemicals",
                  "es": "Químicos de limpieza",
                  "de": "Reinigungschemikalien",
                  "nl": "Schoonmaakchemicaliën"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Adjuncts are unmalted grains or other fermentable sugars added to beer as supplements to malted barley, such as corn, rice, or sugar.",
                  "es": "Los adjuntos son granos no malteados u otros azúcares fermentables agregados a la cerveza como suplementos a la cebada malteada, como maíz, arroz o azúcar.",
                  "de": "Zusatzstoffe sind ungemälzte Körner oder andere fermentierbare Zucker, die dem Bier als Ergänzung zu gemälzter Gerste hinzugefügt werden, wie Mais, Reis oder Zucker.",
                  "nl": "Adjuncten zijn niet-gemout graan of andere fermenteerbare suikers die aan bier worden toegevoegd als aanvulling op gemout gerst, zoals mais, rijst of suiker."
        }
      },
      {
        question: {
                  "en": "What is the function of finings in beer production?",
                  "es": "¿Cuál es la función de los clarificantes en la producción de cerveza?",
                  "de": "Was ist die Funktion von Schönungsmitteln in der Bierproduktion?",
                  "nl": "Wat is de functie van klaringsmiddelen bij bierproductie?"
        },
        options: [
        {
                  "en": "To preserve the beer",
                  "es": "Para conservar la cerveza",
                  "de": "Um das Bier zu konservieren",
                  "nl": "Om het bier te bewaren"
        },
        {
                  "en": "To add flavor",
                  "es": "Para agregar sabor",
                  "de": "Um Geschmack hinzuzufügen",
                  "nl": "Om smaak toe te voegen"
        },
        {
                  "en": "To increase carbonation",
                  "es": "Para aumentar la carbonatación",
                  "de": "Um die Kohlensäure zu erhöhen",
                  "nl": "Om koolzuur te verhogen"
        },
        {
                  "en": "To clarify beer by removing particles",
                  "es": "Para clarificar la cerveza eliminando partículas",
                  "de": "Um Bier durch Entfernen von Partikeln zu klären",
                  "nl": "Om bier te helderen door deeltjes te verwijderen"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Finings are clarifying agents added to beer to help proteins and yeast cells clump together and settle out, producing clearer beer.",
                  "es": "Los clarificantes son agentes clarificadores agregados a la cerveza para ayudar a que las proteínas y células de levadura se aglomeren y se asienten, produciendo cerveza más clara.",
                  "de": "Schönungsmittel sind Klärmittel, die dem Bier zugesetzt werden, um Proteine und Hefezellen zusammenzuballen und abzusetzen, wodurch klareres Bier entsteht.",
                  "nl": "Klaringsmiddelen zijn helderingsmiddelen die aan bier worden toegevoegd om eiwitten en gistcellen te laten samenklonteren en bezinken, wat helderder bier produceert."
        }
      },
      {
        question: {
                  "en": "What is attenuation in brewing?",
                  "es": "¿Qué es la atenuación en la elaboración?",
                  "de": "Was ist Vergärungsgrad beim Brauen?",
                  "nl": "Wat is attenuatie bij brouwen?"
        },
        options: [
        {
                  "en": "The reduction of sugars during fermentation",
                  "es": "La reducción de azúcares durante la fermentación",
                  "de": "Die Reduzierung von Zuckern während der Gärung",
                  "nl": "De vermindering van suikers tijdens fermentatie"
        },
        {
                  "en": "The cooling of wort",
                  "es": "El enfriamiento del mosto",
                  "de": "Das Kühlen der Würze",
                  "nl": "Het afkoelen van wort"
        },
        {
                  "en": "The addition of hops",
                  "es": "La adición de lúpulo",
                  "de": "Die Zugabe von Hopfen",
                  "nl": "De toevoeging van hop"
        },
        {
                  "en": "The filtration process",
                  "es": "El proceso de filtración",
                  "de": "Der Filtrationsprozess",
                  "nl": "Het filterproces"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Attenuation refers to the degree to which yeast converts fermentable sugars into alcohol and CO2, measured as the difference between original and final gravity.",
                  "es": "La atenuación se refiere al grado en que la levadura convierte azúcares fermentables en alcohol y CO2, medido como la diferencia entre la gravedad original y final.",
                  "de": "Vergärungsgrad bezieht sich auf den Grad, zu dem Hefe fermentierbare Zucker in Alkohol und CO2 umwandelt, gemessen als Differenz zwischen Stammwürze und Endvergärung.",
                  "nl": "Attenuatie verwijst naar de mate waarin gist fermenteerbare suikers omzet in alcohol en CO2, gemeten als het verschil tussen oorspronkelijk en finaal soortelijk gewicht."
        }
      },
      {
        question: {
                  "en": "What is diacetyl and how does it affect beer quality?",
                  "es": "¿Qué es el diacetilo y cómo afecta la calidad de la cerveza?",
                  "de": "Was ist Diacetyl und wie beeinflusst es die Bierqualität?",
                  "nl": "Wat is diacetyl en hoe beïnvloedt het de bierkwaliteit?"
        },
        options: [
        {
                  "en": "A type of malt extract",
                  "es": "Un tipo de extracto de malta",
                  "de": "Eine Art Malzextrakt",
                  "nl": "Een soort moutextract"
        },
        {
                  "en": "A vicinal diketone producing buttery/butterscotch off-flavor from incomplete fermentation, removed via diacetyl rest at 18-20°C",
                  "es": "Una dicetona vicinal que produce sabor indeseable a mantequilla/caramelo de fermentación incompleta, eliminada mediante reposo de diacetilo a 18-20°C",
                  "de": "Ein vicinales Diketon, das butterartigen/Butterscotch-Fehlgeschmack durch unvollständige Gärung erzeugt, entfernt durch Diacetyl-Rast bei 18-20°C",
                  "nl": "Een vicinaal diketon dat boter/butterscotch off-smaak produceert door onvolledige fermentatie, verwijderd via diacetyl rust bij 18-20°C"
        },
        {
                  "en": "A preservative added to extend shelf life",
                  "es": "Un conservante agregado para extender la vida útil",
                  "de": "Ein Konservierungsmittel zur Verlängerung der Haltbarkeit",
                  "nl": "Een conserveringsmiddel toegevoegd om de houdbaarheid te verlengen"
        },
        {
                  "en": "A beneficial compound that enhances beer aroma",
                  "es": "Un compuesto beneficioso que mejora el aroma de la cerveza",
                  "de": "Eine vorteilhafte Verbindung, die das Bieraroma verbessert",
                  "nl": "Een gunstige verbinding die het bieraroma verbetert"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Diacetyl (2,3-butanedione) is a vicinal diketone (VDK) byproduct of fermentation that produces buttery or butterscotch off-flavors. It forms from α-acetolactate, an intermediate in valine synthesis. Brewers use a 'diacetyl rest' (raising temperature to 18-20°C at end of fermentation) to allow yeast to reabsorb and reduce diacetyl to flavorless acetoins. Elevated diacetyl can indicate incomplete fermentation, insufficient yeast health, or bacterial contamination (Pediococcus).",
                  "es": "El diacetilo (2,3-butanodiona) es un subproducto dicetona vicinal (VDK) de la fermentación que produce sabores indeseables a mantequilla o caramelo. Se forma a partir de α-acetolactato, un intermedio en la síntesis de valina. Los cerveceros usan un 'reposo de diacetilo' (elevar la temperatura a 18-20°C al final de la fermentación) para permitir que la levadura reabsorba y reduzca el diacetilo a acetoínas sin sabor. El diacetilo elevado puede indicar fermentación incompleta, salud de levadura insuficiente o contaminación bacteriana (Pediococcus).",
                  "de": "Diacetyl (2,3-Butandion) ist ein vicinales Diketon (VDK)-Nebenprodukt der Gärung, das butterartige oder Butterscotch-Fehlgeschmäcker erzeugt. Es bildet sich aus α-Acetolactat, einem Zwischenprodukt der Valinsynthese. Brauer verwenden eine 'Diacetyl-Rast' (Temperaturerhöhung auf 18-20°C am Ende der Gärung), damit die Hefe Diacetyl wieder aufnimmt und zu geschmacksneutralen Acetoinen reduziert. Erhöhtes Diacetyl kann auf unvollständige Gärung, unzureichende Hefegesundheit oder bakterielle Kontamination (Pediococcus) hinweisen.",
                  "nl": "Diacetyl (2,3-butaandion) is een vicinaal diketon (VDK) bijproduct van fermentatie dat boter- of butterscotch-smaken produceert. Het vormt zich uit α-acetolactaat, een tussenproduct in valine-synthese. Brouwers gebruiken een 'diacetyl rust' (temperatuur verhogen tot 18-20°C aan het einde van fermentatie) om gist diacetyl opnieuw te laten absorberen en reduceren tot smaakneutrale acetoïnen. Verhoogd diacetyl kan wijzen op onvolledige fermentatie, onvoldoende gistgezondheid of bacteriële contaminatie (Pediococcus)."
        }
      },
      {
        question: {
                  "en": "What is the Maillard reaction and its importance in brewing?",
                  "es": "¿Qué es la reacción de Maillard y su importancia en la elaboración?",
                  "de": "Was ist die Maillard-Reaktion und ihre Bedeutung beim Brauen?",
                  "nl": "Wat is de Maillard-reactie en het belang ervan bij brouwen?"
        },
        options: [
        {
                  "en": "The reaction between hops and water",
                  "es": "La reacción entre el lúpulo y el agua",
                  "de": "Die Reaktion zwischen Hopfen und Wasser",
                  "nl": "De reactie tussen hop en water"
        },
        {
                  "en": "A type of yeast fermentation process",
                  "es": "Un tipo de proceso de fermentación de levadura",
                  "de": "Eine Art Hefegärungsprozess",
                  "nl": "Een soort gistfermentatieproces"
        },
        {
                  "en": "A cleaning process for brewing equipment",
                  "es": "Un proceso de limpieza para equipos de elaboración",
                  "de": "Ein Reinigungsprozess für Brauausrüstung",
                  "nl": "Een schoonmaakproces voor brouwapparatuur"
        },
        {
                  "en": "Non-enzymatic browning reaction between amino acids and reducing sugars during kilning, creating color, flavor, and aroma compounds (melanoidins)",
                  "es": "Reacción de dorado no enzimático entre aminoácidos y azúcares reductores durante el tostado, creando compuestos de color, sabor y aroma (melanoidinas)",
                  "de": "Nicht-enzymatische Bräunungsreaktion zwischen Aminosäuren und reduzierenden Zuckern beim Darren, die Farb-, Geschmacks- und Aromaverbindungen (Melanoidine) erzeugt",
                  "nl": "Niet-enzymatische bruiningsreactie tussen aminozuren en reducerende suikers tijdens het eesten, die kleur-, smaak- en aromaverbindingen (melanoidinen) creëert"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "The Maillard reaction is a complex non-enzymatic browning reaction between amino acids and reducing sugars that occurs during malt kilning and wort boiling. It creates melanoidins (brown polymers), flavor compounds (caramel, toasty, nutty notes), and color development. Temperature and pH affect reaction rate - higher kilning temperatures produce darker specialty malts (Munich, Vienna, melanoidin malt). This reaction is crucial for beer color (SRM/EBC) and flavor complexity.",
                  "es": "La reacción de Maillard es una reacción compleja de dorado no enzimático entre aminoácidos y azúcares reductores que ocurre durante el tostado de malta y la ebullición del mosto. Crea melanoidinas (polímeros marrones), compuestos de sabor (notas de caramelo, tostado, nuez) y desarrollo de color. La temperatura y el pH afectan la velocidad de reacción: temperaturas de tostado más altas producen maltas especiales más oscuras (Munich, Viena, malta melanoidina). Esta reacción es crucial para el color (SRM/EBC) y la complejidad del sabor de la cerveza.",
                  "de": "Die Maillard-Reaktion ist eine komplexe nicht-enzymatische Bräunungsreaktion zwischen Aminosäuren und reduzierenden Zuckern, die während des Malzdarrens und Würzekochens auftritt. Sie erzeugt Melanoidine (braune Polymere), Geschmacksverbindungen (Karamell-, röst-, nussige Noten) und Farbentwicklung. Temperatur und pH beeinflussen die Reaktionsrate - höhere Darrtemperaturen produzieren dunklere Spezialmalze (Münchner, Wiener, Melanoidinmalz). Diese Reaktion ist entscheidend für Bierfarbe (SRM/EBC) und Geschmackskomplexität.",
                  "nl": "De Maillard-reactie is een complexe niet-enzymatische bruiningsreactie tussen aminozuren en reducerende suikers die optreedt tijdens het eesten van mout en het koken van wort. Het creëert melanoidinen (bruine polymeren), smaakverbindingen (karamel-, geroosterde, nootachtige tonen) en kleurontwikkeling. Temperatuur en pH beïnvloeden de reactiesnelheid - hogere eesttemperaturen produceren donkerdere speciaalmout (Munich, Weens, melanoidine-mout). Deze reactie is cruciaal voor bierkleur (SRM/EBC) en smaakcomplexiteit."
        }
      },
      {
        question: {
                  "en": "What is hop creep and how does it affect beer production?",
                  "es": "¿Qué es el hop creep y cómo afecta la producción de cerveza?",
                  "de": "Was ist Hopfenkriechen und wie beeinflusst es die Bierproduktion?",
                  "nl": "Wat is hop creep en hoe beïnvloedt het de bierproductie?"
        },
        options: [
        {
                  "en": "The aging of hops during storage",
                  "es": "El envejecimiento del lúpulo durante el almacenamiento",
                  "de": "Die Alterung von Hopfen während der Lagerung",
                  "nl": "De veroudering van hop tijdens opslag"
        },
        {
                  "en": "The process of adding hops to the boil",
                  "es": "El proceso de agregar lúpulo a la ebullición",
                  "de": "Der Prozess des Hopfenzusatzes zum Kochen",
                  "nl": "Het proces van hop toevoegen aan de kook"
        },
        {
                  "en": "Enzyme activity from dry hops (diastatic enzymes) continuing fermentation, increasing ABV, reducing residual sugars, potentially causing over-carbonation",
                  "es": "Actividad enzimática del dry hopping (enzimas diastásicas) continuando fermentación, aumentando ABV, reduciendo azúcares residuales, causando potencialmente sobre-carbonatación",
                  "de": "Enzymaktivität aus Trockenhopfen (diastatische Enzyme), die die Gärung fortsetzt, ABV erhöht, Restzucker reduziert, möglicherweise Überkohlensäure verursacht",
                  "nl": "Enzymactiviteit van dry hops (diastatische enzymen) die fermentatie voortzet, ABV verhoogt, restsuikers vermindert, mogelijk over-carbonatie veroorzaakt"
        },
        {
                  "en": "A disease that affects hop plants",
                  "es": "Una enfermedad que afecta las plantas de lúpulo",
                  "de": "Eine Krankheit, die Hopfenpflanzen befällt",
                  "nl": "Een ziekte die hopplanten aantast"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Hop creep is refermentation caused by diastatic enzymes (α-amylase, β-amylase, limit dextrinase) naturally present in hops, especially in heavy dry-hopped beers like hazy IPAs. These enzymes break down residual dextrins into fermentable sugars, allowing yeast to continue fermenting, raising ABV, lowering final gravity, and potentially causing over-carbonation or gushing. Brewers combat this by pasteurization, cold-crashing, or accounting for additional attenuation in recipes.",
                  "es": "El hop creep es refermentación causada por enzimas diastásicas (α-amilasa, β-amilasa, dextrinasa límite) naturalmente presentes en el lúpulo, especialmente en cervezas fuertemente dry-hopped como IPAs turbias. Estas enzimas descomponen dextrinas residuales en azúcares fermentables, permitiendo que la levadura continúe fermentando, elevando ABV, reduciendo la gravedad final y causando potencialmente sobre-carbonatación o borboteo. Los cerveceros combaten esto con pasteurización, enfriamiento rápido o contabilizando atenuación adicional en las recetas.",
                  "de": "Hopfenkriechen ist eine Nachgärung, die durch diastatische Enzyme (α-Amylase, β-Amylase, Grenzdextrinase) verursacht wird, die natürlich in Hopfen vorkommen, besonders bei stark trockengehopften Bieren wie trüben IPAs. Diese Enzyme bauen Restdextrine in fermentierbare Zucker ab, wodurch die Hefe weitergären kann, ABV steigt, die Endvergärung sinkt und möglicherweise Überkohlensäure oder Überschäumen verursacht. Brauer bekämpfen dies durch Pasteurisierung, Kaltlagerung oder Berücksichtigung zusätzlicher Vergärung in Rezepten.",
                  "nl": "Hop creep is herfermentatie veroorzaakt door diastatische enzymen (α-amylase, β-amylase, limiet dextrinase) natuurlijk aanwezig in hop, vooral in zwaar dry-hopped bieren zoals hazy IPA's. Deze enzymen breken restdextrines af tot fermenteerbare suikers, waardoor gist kan blijven fermenteren, ABV verhoogt, finale zwaartekracht verlaagt en mogelijk over-carbonatie of gutsen veroorzaakt. Brouwers bestrijden dit door pasteurisatie, cold-crashing of compensatie voor extra attenuatie in recepten."
        }
      },
      {
        question: {
                  "en": "What is wort aeration and why is it critical for fermentation?",
                  "es": "¿Qué es la aireación del mosto y por qué es crítica para la fermentación?",
                  "de": "Was ist Würzebelüftung und warum ist sie kritisch für die Gärung?",
                  "nl": "Wat is wort beluchting en waarom is het kritiek voor fermentatie?"
        },
        options: [
        {
                  "en": "A method to cool wort faster",
                  "es": "Un método para enfriar el mosto más rápido",
                  "de": "Eine Methode, um Würze schneller zu kühlen",
                  "nl": "Een methode om wort sneller af te koelen"
        },
        {
                  "en": "Adding air to increase beer carbonation",
                  "es": "Agregar aire para aumentar la carbonatación de la cerveza",
                  "de": "Luft hinzufügen, um die Bierkohlensäure zu erhöhen",
                  "nl": "Lucht toevoegen om bierkoolzuur te verhogen"
        },
        {
                  "en": "Removing oxygen to prevent oxidation",
                  "es": "Eliminar oxígeno para prevenir oxidación",
                  "de": "Sauerstoff entfernen, um Oxidation zu verhindern",
                  "nl": "Zuurstof verwijderen om oxidatie te voorkomen"
        },
        {
                  "en": "Dissolving oxygen (8-10 ppm) into cooled wort before pitching yeast, essential for yeast cell membrane synthesis (sterols, unsaturated fatty acids) and reproduction",
                  "es": "Disolver oxígeno (8-10 ppm) en mosto enfriado antes de inocular levadura, esencial para síntesis de membrana celular de levadura (esteroles, ácidos grasos insaturados) y reproducción",
                  "de": "Sauerstoff (8-10 ppm) in gekühlte Würze vor Hefezugabe auflösen, essentiel für Hefezellmembransynthese (Sterole, ungesättigte Fettsäuren) und Reproduktion",
                  "nl": "Zuurstof (8-10 ppm) oplossen in gekoelde wort voor het toevoegen van gist, essentieel voor gistcelmembraansynthese (sterolen, onverzadigde vetzuren) en reproductie"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Wort aeration (oxygenation) dissolves oxygen into cooled wort before yeast pitching, targeting 8-10 ppm dissolved oxygen (DO). Oxygen is essential for yeast to synthesize sterols (ergosterol) and unsaturated fatty acids (UFAs) needed for healthy cell membranes during reproduction. Without adequate oxygen, yeast produce fewer cells, leading to sluggish/stuck fermentation, low attenuation, and off-flavors. Methods include air stones, inline oxygenation, or pure oxygen injection. Post-fermentation oxygen is detrimental (staling, oxidation).",
                  "es": "La aireación del mosto (oxigenación) disuelve oxígeno en mosto enfriado antes de la inoculación de levadura, apuntando a 8-10 ppm de oxígeno disuelto (OD). El oxígeno es esencial para que la levadura sintetice esteroles (ergosterol) y ácidos grasos insaturados (AGI) necesarios para membranas celulares saludables durante la reproducción. Sin oxígeno adecuado, la levadura produce menos células, llevando a fermentación lenta/atascada, baja atenuación y sabores indeseables. Los métodos incluyen piedras de aire, oxigenación en línea o inyección de oxígeno puro. El oxígeno post-fermentación es perjudicial (envejecimiento, oxidación).",
                  "de": "Würzebelüftung (Oxygenierung) löst Sauerstoff in gekühlte Würze vor Hefezugabe auf und zielt auf 8-10 ppm gelösten Sauerstoff (DO) ab. Sauerstoff ist essentiell für Hefe, um Sterole (Ergosterol) und ungesättigte Fettsäuren (UFAs) zu synthetisieren, die für gesunde Zellmembranen während der Reproduktion benötigt werden. Ohne ausreichend Sauerstoff produziert Hefe weniger Zellen, was zu träger/gestoppter Gärung, niedriger Vergärung und Fehlgeschmäckern führt. Methoden umfassen Luftsteine, Inline-Oxygenierung oder reine Sauerstoffinjektion. Sauerstoff nach der Gärung ist schädlich (Alterung, Oxidation).",
                  "nl": "Wort beluchting (oxygenatie) lost zuurstof op in gekoelde wort voor gist toevoeging, met als doel 8-10 ppm opgeloste zuurstof (DO). Zuurstof is essentieel voor gist om sterolen (ergosterol) en onverzadigde vetzuren (UFA's) te synthetiseren die nodig zijn voor gezonde celmembranen tijdens reproductie. Zonder voldoende zuurstof produceren gist minder cellen, wat leidt tot trage/vastgelopen fermentatie, lage attenuatie en off-smaken. Methoden omvatten luchtstenen, inline oxygenatie of pure zuurstof injectie. Zuurstof na fermentatie is schadelijk (veroudering, oxidatie)."
        }
      },
      {
        question: {
                  "en": "What is the role of proteases during mashing?",
                  "es": "¿Cuál es el papel de las proteasas durante el macerado?",
                  "de": "Was ist die Rolle von Proteasen während des Maischens?",
                  "nl": "Wat is de rol van proteasen tijdens het maischen?"
        },
        options: [
        {
                  "en": "Reducing beer clarity",
                  "es": "Reducir la claridad de la cerveza",
                  "de": "Bierklarheit reduzieren",
                  "nl": "Bierhelderheid verminderen"
        },
        {
                  "en": "Converting starches to sugars",
                  "es": "Convertir almidones en azúcares",
                  "de": "Stärke in Zucker umwandeln",
                  "nl": "Zetmeel omzetten in suikers"
        },
        {
                  "en": "Increasing beer color",
                  "es": "Aumentar el color de la cerveza",
                  "de": "Bierfarbe erhöhen",
                  "nl": "Bierkleur verhogen"
        },
        {
                  "en": "Breaking down proteins into amino acids and peptides (FAN - free amino nitrogen) for yeast nutrition and head retention",
                  "es": "Descomponer proteínas en aminoácidos y péptidos (FAN - nitrógeno amino libre) para nutrición de levadura y retención de espuma",
                  "de": "Proteine in Aminosäuren und Peptide (FAN - freier Aminostickstoff) für Hefeernährung und Schaumhaltbarkeit abbauen",
                  "nl": "Eiwitten afbreken tot aminozuren en peptiden (FAN - vrije amino-stikstof) voor gistvoeding en schuimretentie"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Proteases (proteinases, peptidases) break down malt proteins during mashing, especially during a 'protein rest' at 45-55°C. They produce free amino nitrogen (FAN) - amino acids and small peptides that yeast need for nutrition and healthy fermentation. Medium-sized proteins contribute to head retention and mouthfeel, while larger proteins cause chill haze. Well-modified modern malts need less protein rest; under-modified or adjunct-heavy grists benefit from it. Over-proteolysis reduces foam stability.",
                  "es": "Las proteasas (proteinasas, peptidasas) descomponen proteínas de malta durante el macerado, especialmente durante un 'reposo de proteína' a 45-55°C. Producen nitrógeno amino libre (FAN): aminoácidos y péptidos pequeños que la levadura necesita para nutrición y fermentación saludable. Proteínas de tamaño mediano contribuyen a la retención de espuma y sensación en boca, mientras que proteínas más grandes causan turbidez por frío. Las maltas modernas bien modificadas necesitan menos reposo de proteína; moliendas poco modificadas o ricas en adjuntos se benefician. La proteólisis excesiva reduce la estabilidad de la espuma.",
                  "de": "Proteasen (Proteinasen, Peptidasen) bauen Malzproteine während des Maischens ab, besonders während einer 'Proteinrast' bei 45-55°C. Sie produzieren freien Aminostickstoff (FAN) - Aminosäuren und kleine Peptide, die Hefe für Ernährung und gesunde Gärung benötigt. Mittelgroße Proteine tragen zur Schaumhaltbarkeit und Mundgefühl bei, während größere Proteine Kältetrübung verursachen. Gut modifizierte moderne Malze benötigen weniger Proteinrast; untermodifizierte oder adjunktreiche Schüttungen profitieren davon. Übermäßige Proteolyse reduziert Schaumstabilität.",
                  "nl": "Proteasen (proteinasen, peptidasen) breken mouteiwitten af tijdens het maischen, vooral tijdens een 'eiwit rust' bij 45-55°C. Ze produceren vrije amino-stikstof (FAN) - aminozuren en kleine peptiden die gist nodig heeft voor voeding en gezonde fermentatie. Middelgrote eiwitten dragen bij aan schuimretentie en mondgevoel, terwijl grotere eiwitten koudewaas veroorzaken. Goed gemodificeerde moderne mout heeft minder eiwit rust nodig; ondergemodificeerde of adjunct-rijke mout profiteert ervan. Overmatige proteolyse vermindert schuimstabiliteit."
        }
      },
      {
        question: {
                  "en": "What is dimethyl sulfide (DMS) and how is it controlled in brewing?",
                  "es": "¿Qué es el sulfuro de dimetilo (DMS) y cómo se controla en la elaboración?",
                  "de": "Was ist Dimethylsulfid (DMS) und wie wird es beim Brauen kontrolliert?",
                  "nl": "Wat is dimethylsulfide (DMS) en hoe wordt het gecontroleerd bij brouwen?"
        },
        options: [
        {
                  "en": "A beneficial flavor compound from hops",
                  "es": "Un compuesto de sabor beneficioso del lúpulo",
                  "de": "Eine vorteilhafte Geschmacksverbindung aus Hopfen",
                  "nl": "Een gunstige smaakverbinding van hop"
        },
        {
                  "en": "A type of yeast nutrient",
                  "es": "Un tipo de nutriente de levadura",
                  "de": "Eine Art Hefenährstoff",
                  "nl": "Een soort gistvoedingsstof"
        },
        {
                  "en": "A preservative added to prevent spoilage",
                  "es": "Un conservante agregado para prevenir deterioro",
                  "de": "Ein Konservierungsmittel zur Verderbnisverhütung",
                  "nl": "Een conserveringsmiddel toegevoegd om bederf te voorkomen"
        },
        {
                  "en": "Volatile sulfur compound (cooked corn/cabbage aroma) from S-methylmethionine (SMM) in malt, driven off during vigorous open boil and rapid wort cooling",
                  "es": "Compuesto de azufre volátil (aroma a maíz/repollo cocido) de S-metilmetionina (SMM) en malta, eliminado durante ebullición vigorosa abierta y enfriamiento rápido del mosto",
                  "de": "Flüchtige Schwefelverbindung (gekochter Mais/Kohl-Aroma) aus S-Methylmethionin (SMM) in Malz, ausgetrieben während kräftigem offenen Kochen und schneller Würzekühlung",
                  "nl": "Vluchtige zwavelverbinding (gekookte mais/kool aroma) van S-methylmethionine (SMM) in mout, weggedreven tijdens krachtig open koken en snelle wortkoeling"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Dimethyl sulfide (DMS) is a volatile sulfur compound producing cooked corn, creamed corn, or cooked cabbage aromas. It forms from thermal breakdown of S-methylmethionine (SMM) present in malt, especially Pilsner malt. DMS is driven off during vigorous open boiling (covered boils trap DMS) and controlled via rapid wort cooling (slow cooling allows SMM→DMS conversion). Bacterial contamination (Obesumbacterium, Pediococcus) can also produce DMS. Acceptable in low levels in some lagers, but generally considered an off-flavor.",
                  "es": "El sulfuro de dimetilo (DMS) es un compuesto de azufre volátil que produce aromas a maíz cocido, crema de maíz o repollo cocido. Se forma por descomposición térmica de S-metilmetionina (SMM) presente en la malta, especialmente malta Pilsner. El DMS se elimina durante la ebullición vigorosa abierta (ebulliciones cubiertas atrapan DMS) y se controla mediante enfriamiento rápido del mosto (enfriamiento lento permite conversión SMM→DMS). La contaminación bacteriana (Obesumbacterium, Pediococcus) también puede producir DMS. Aceptable en niveles bajos en algunas lagers, pero generalmente considerado un sabor indeseable.",
                  "de": "Dimethylsulfid (DMS) ist eine flüchtige Schwefelverbindung, die gekochten Mais-, Maiscreme- oder gekochten Kohlaroma erzeugt. Es bildet sich durch thermischen Abbau von S-Methylmethionin (SMM), das in Malz vorhanden ist, besonders Pilsner-Malz. DMS wird während kräftigem offenen Kochen ausgetrieben (abgedecktes Kochen fängt DMS ein) und durch schnelle Würzekühlung kontrolliert (langsame Kühlung ermöglicht SMM→DMS-Umwandlung). Bakterielle Kontamination (Obesumbacterium, Pediococcus) kann auch DMS produzieren. In niedrigen Mengen in einigen Lagern akzeptabel, aber allgemein als Fehlgeschmack betrachtet.",
                  "nl": "Dimethylsulfide (DMS) is een vluchtige zwavelverbinding die gekookte mais-, room mais- of gekoolde koolaroma's produceert. Het vormt zich door thermische afbraak van S-methylmethionine (SMM) aanwezig in mout, vooral Pilsner-mout. DMS wordt weggedreven tijdens krachtig open koken (bedekt koken vangt DMS op) en gecontroleerd via snelle wortkoeling (langzame koeling staat SMM→DMS conversie toe). Bacteriële contaminatie (Obesumbacterium, Pediococcus) kan ook DMS produceren. Acceptabel in lage niveaus in sommige lagers, maar algemeen beschouwd als off-smaak."
        }
      },
      {
        question: {
                  "en": "What is high-gravity brewing and what are its advantages?",
                  "es": "¿Qué es la elaboración de alta gravedad y cuáles son sus ventajas?",
                  "de": "Was ist High-Gravity-Brauen und was sind seine Vorteile?",
                  "nl": "Wat is high-gravity brouwen en wat zijn de voordelen?"
        },
        options: [
        {
                  "en": "Brewing concentrated wort at higher OG then diluting with deaerated water before packaging, increasing brewhouse efficiency and throughput",
                  "es": "Elaborar mosto concentrado a mayor OG luego diluir con agua desaireada antes de envasar, aumentando eficiencia de sala de cocción y rendimiento",
                  "de": "Konzentrierte Würze mit höherem OG brauen, dann mit entlüftetem Wasser vor Abfüllung verdünnen, erhöht Sudhaus-Effizienz und Durchsatz",
                  "nl": "Geconcentreerde wort brouwen bij hogere OG dan verdunnen met ontlucht water voor verpakking, verhoogt brouwerij efficiëntie en doorvoer"
        },
        {
                  "en": "Fermenting at higher temperatures",
                  "es": "Fermentar a temperaturas más altas",
                  "de": "Bei höheren Temperaturen gären",
                  "nl": "Fermenteren bij hogere temperaturen"
        },
        {
                  "en": "Brewing beer in high-altitude locations",
                  "es": "Elaborar cerveza en ubicaciones de gran altitud",
                  "de": "Bier an hochgelegenen Standorten brauen",
                  "nl": "Bier brouwen op grote hoogte"
        },
        {
                  "en": "Using heavy malt to increase beer weight",
                  "es": "Usar malta pesada para aumentar el peso de la cerveza",
                  "de": "Schweres Malz verwenden, um Biergewicht zu erhöhen",
                  "nl": "Zware mout gebruiken om biergewicht te verhogen"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "High-gravity brewing produces concentrated wort at elevated original gravity (e.g., 1.060-1.080), then dilutes it with deaerated, sterile water post-fermentation to reach target gravity. Advantages: increased brewhouse capacity/throughput (more beer per batch), improved fermentation (higher yeast pitch rates), better hop utilization, reduced energy/water use, lower production costs. Challenges: higher yeast stress, potential flavor differences, careful water chemistry management. Common in large commercial breweries for efficiency.",
                  "es": "La elaboración de alta gravedad produce mosto concentrado a gravedad original elevada (p. ej., 1.060-1.080), luego lo diluye con agua desaireada y estéril post-fermentación para alcanzar la gravedad objetivo. Ventajas: mayor capacidad/rendimiento de sala de cocción (más cerveza por lote), fermentación mejorada (mayores tasas de inoculación de levadura), mejor utilización del lúpulo, uso reducido de energía/agua, menores costos de producción. Desafíos: mayor estrés de levadura, posibles diferencias de sabor, gestión cuidadosa de química del agua. Común en grandes cervecerías comerciales por eficiencia.",
                  "de": "High-Gravity-Brauen produziert konzentrierte Würze bei erhöhter Stammwürze (z.B. 1.060-1.080), dann verdünnt sie mit entlüftetem, sterilem Wasser nach der Gärung, um Zielgravität zu erreichen. Vorteile: erhöhte Sudhaus-Kapazität/Durchsatz (mehr Bier pro Charge), verbesserte Gärung (höhere Hefezugaberaten), bessere Hopfenausnutzung, reduzierter Energie-/Wasserverbrauch, niedrigere Produktionskosten. Herausforderungen: höherer Hefestress, mögliche Geschmacksunterschiede, sorgfältiges Wasserchemie-Management. Üblich in großen kommerziellen Brauereien für Effizienz.",
                  "nl": "High-gravity brouwen produceert geconcentreerde wort bij verhoogd oorspronkelijk soortelijk gewicht (bijv. 1.060-1.080), verdunt het dan met ontlucht, steriel water na fermentatie om doelzwaartekracht te bereiken. Voordelen: verhoogde brouwerij capaciteit/doorvoer (meer bier per batch), verbeterde fermentatie (hogere gist toevoegingspercentages), beter hopgebruik, verminderd energie/waterverbruik, lagere productiekosten. Uitdagingen: hogere giststress, mogelijke smakverschillen, zorgvuldig waterchemiebeheer. Gebruikelijk in grote commerciële brouwerijen voor efficiëntie."
        }
      },
      {
        question: {
                  "en": "What is the significance of the Lovibond/SRM/EBC color measurement systems?",
                  "es": "¿Cuál es la importancia de los sistemas de medición de color Lovibond/SRM/EBC?",
                  "de": "Was ist die Bedeutung der Lovibond/SRM/EBC-Farbmesssysteme?",
                  "nl": "Wat is de betekenis van de Lovibond/SRM/EBC kleurmeetsystemen?"
        },
        options: [
        {
                  "en": "Systems for measuring hop bitterness",
                  "es": "Sistemas para medir el amargor del lúpulo",
                  "de": "Systeme zur Messung von Hopfenbitterkeit",
                  "nl": "Systemen voor het meten van hopbitterheid"
        },
        {
                  "en": "Scales for yeast viability testing",
                  "es": "Escalas para prueba de viabilidad de levadura",
                  "de": "Skalen für Hefelebensfähigkeitsprüfung",
                  "nl": "Schalen voor gistlevensvatbaarheidstesting"
        },
        {
                  "en": "Methods to calculate alcohol content",
                  "es": "Métodos para calcular el contenido de alcohol",
                  "de": "Methoden zur Berechnung des Alkoholgehalts",
                  "nl": "Methoden om alcoholgehalte te berekenen"
        },
        {
                  "en": "Standardized beer color measurement: SRM (USA), EBC (Europe), Lovibond (historical); EBC ≈ 1.97 × SRM; measured by spectrophotometry at 430nm wavelength",
                  "es": "Medición estandarizada de color de cerveza: SRM (EUA), EBC (Europa), Lovibond (histórico); EBC ≈ 1.97 × SRM; medido por espectrofotometría a longitud de onda de 430nm",
                  "de": "Standardisierte Bierfarbmessung: SRM (USA), EBC (Europa), Lovibond (historisch); EBC ≈ 1,97 × SRM; gemessen durch Spektrophotometrie bei 430nm Wellenlänge",
                  "nl": "Gestandaardiseerde bierkleurmeting: SRM (VS), EBC (Europa), Lovibond (historisch); EBC ≈ 1,97 × SRM; gemeten door spectrofotometrie bij 430nm golflengte"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Beer color is measured using standardized systems: SRM (Standard Reference Method, USA), EBC (European Brewery Convention), and Lovibond (historical visual comparison). Modern measurement uses spectrophotometry at 430nm wavelength. Relationship: EBC ≈ 1.97 × SRM. Examples: Pale lager (2-4 SRM), Amber ale (10-17 SRM), Stout (30+ SRM). Color comes from melanoidins (Maillard reaction), caramelization, and roasted/kilned malt. Important for style guidelines and quality control.",
                  "es": "El color de la cerveza se mide usando sistemas estandarizados: SRM (Método de Referencia Estándar, EUA), EBC (Convención Europea de Cervecería) y Lovibond (comparación visual histórica). La medición moderna usa espectrofotometría a longitud de onda de 430nm. Relación: EBC ≈ 1.97 × SRM. Ejemplos: Lager pálida (2-4 SRM), Ale ámbar (10-17 SRM), Stout (30+ SRM). El color proviene de melanoidinas (reacción de Maillard), caramelización y malta tostada/tostada. Importante para guías de estilo y control de calidad.",
                  "de": "Bierfarbe wird mit standardisierten Systemen gemessen: SRM (Standard Reference Method, USA), EBC (European Brewery Convention) und Lovibond (historischer visueller Vergleich). Moderne Messung verwendet Spektrophotometrie bei 430nm Wellenlänge. Beziehung: EBC ≈ 1,97 × SRM. Beispiele: Helles Lagerbier (2-4 SRM), Amber Ale (10-17 SRM), Stout (30+ SRM). Farbe stammt von Melanoidinen (Maillard-Reaktion), Karamellisierung und geröstetem/gedarrtem Malz. Wichtig für Stilrichtlinien und Qualitätskontrolle.",
                  "nl": "Bierkleur wordt gemeten met gestandaardiseerde systemen: SRM (Standard Reference Method, VS), EBC (European Brewery Convention) en Lovibond (historische visuele vergelijking). Moderne meting gebruikt spectrofotometrie bij 430nm golflengte. Relatie: EBC ≈ 1,97 × SRM. Voorbeelden: Pale lager (2-4 SRM), Amber ale (10-17 SRM), Stout (30+ SRM). Kleur komt van melanoidinen (Maillard-reactie), karamelisatie en geroosterde/geëeste mout. Belangrijk voor stijlrichtlijnen en kwaliteitscontrole."
        }
      },
      {
        question: {
                  "en": "What is the function of trub and how should it be managed?",
                  "es": "¿Cuál es la función del trub y cómo debe manejarse?",
                  "de": "Was ist die Funktion von Trub und wie sollte es verwaltet werden?",
                  "nl": "Wat is de functie van trub en hoe moet het worden beheerd?"
        },
        options: [
        {
                  "en": "A beneficial yeast byproduct that improves flavor",
                  "es": "Un subproducto de levadura beneficioso que mejora el sabor",
                  "de": "Ein vorteilhaftes Hefe-Nebenprodukt, das Geschmack verbessert",
                  "nl": "Een gunstig gist bijproduct dat smaak verbetert"
        },
        {
                  "en": "A type of specialty malt",
                  "es": "Un tipo de malta especial",
                  "de": "Eine Art Spezialmalz",
                  "nl": "Een soort speciaalmout"
        },
        {
                  "en": "The foam layer on fermenting beer",
                  "es": "La capa de espuma en la cerveza en fermentación",
                  "de": "Die Schaumschicht auf gärendem Bier",
                  "nl": "De schuimlaag op fermenterende bier"
        },
        {
                  "en": "Protein/hop debris sediment from boil and cooling; hot trub removed post-boil, cold trub separated after chilling to reduce off-flavors and improve clarity",
                  "es": "Sedimento de desechos de proteína/lúpulo del hervido y enfriamiento; trub caliente eliminado post-hervido, trub frío separado después de enfriar para reducir sabores indeseables y mejorar claridad",
                  "de": "Protein-/Hopfentrümmer-Sediment aus Kochen und Kühlung; Heißtrub nach Kochen entfernt, Kalttrub nach Kühlung getrennt, um Fehlgeschmäcker zu reduzieren und Klarheit zu verbessern",
                  "nl": "Eiwit/hop debris sediment van koken en koeling; hete trub verwijderd na koken, koude trub gescheiden na koeling om off-smaken te verminderen en helderheid te verbeteren"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Trub is sediment consisting of coagulated proteins, hop debris, and tannins. Hot trub forms during boiling and whirlpooling from protein coagulation (hot break). Cold trub forms during wort chilling from protein-polyphenol complexes (cold break). Excessive trub can cause off-flavors, reduce hop utilization, and stress yeast. Best practices: remove hot trub via whirlpool/settling, separate cold trub before fermentation, though some cold trub provides yeast nutrients (zinc, lipids). Balance is key.",
                  "es": "El trub es sedimento que consiste en proteínas coaguladas, desechos de lúpulo y taninos. El trub caliente se forma durante la ebullición y el remolino por la coagulación de proteínas (ruptura caliente). El trub frío se forma durante el enfriamiento del mosto a partir de complejos proteína-polifenol (ruptura fría). El trub excesivo puede causar sabores indeseables, reducir la utilización del lúpulo y estresar la levadura. Mejores prácticas: eliminar trub caliente mediante remolino/sedimentación, separar trub frío antes de la fermentación, aunque algo de trub frío proporciona nutrientes a la levadura (zinc, lípidos). El equilibrio es clave.",
                  "de": "Trub ist Sediment bestehend aus koagulierten Proteinen, Hopfentrümmern und Tanninen. Heißtrub bildet sich während des Kochens und Whirlpools durch Proteinkoagulation (Heißbruch). Kalttrub bildet sich während der Würzekühlung aus Protein-Polyphenol-Komplexen (Kaltbruch). Übermäßiger Trub kann Fehlgeschmäcker verursachen, Hopfenausnutzung reduzieren und Hefe stressen. Best Practices: Heißtrub über Whirlpool/Sedimentation entfernen, Kalttrub vor Gärung trennen, obwohl etwas Kalttrub Hefenährstoffe (Zink, Lipide) liefert. Balance ist der Schlüssel.",
                  "nl": "Trub is sediment bestaande uit gecoaguleerde eiwitten, hop debris en tannines. Hete trub vormt zich tijdens koken en whirlpoolen door eiwitcoagulatie (hete breuk). Koude trub vormt zich tijdens wortkoeling uit eiwit-polyfenolcomplexen (koude breuk). Overmatige trub kan off-smaken veroorzaken, hopgebruik verminderen en gist stressen. Beste praktijken: verwijder hete trub via whirlpool/bezinking, scheid koude trub voor fermentatie, hoewel wat koude trub gistvoedingsstoffen (zink, lipiden) levert. Balans is de sleutel."
        }
      },
      {
        question: {
                  "en": "What is decoction mashing and when is it used?",
                  "es": "¿Qué es el macerado por decocción y cuándo se usa?",
                  "de": "Was ist Dekoktionsmaischen und wann wird es verwendet?",
                  "nl": "Wat is decoctie maischen en wanneer wordt het gebruikt?"
        },
        options: [
        {
                  "en": "Removing proteins from the mash",
                  "es": "Eliminar proteínas del macerado",
                  "de": "Proteine aus der Maische entfernen",
                  "nl": "Eiwitten uit de maisch verwijderen"
        },
        {
                  "en": "A cooling method for wort",
                  "es": "Un método de enfriamiento para el mosto",
                  "de": "Eine Kühlmethode für Würze",
                  "nl": "Een koelmethode voor wort"
        },
        {
                  "en": "Traditional method removing portion of thick mash, boiling it, returning to main mash to raise temperature; enhances melanoidin/malt flavor, used for German lagers and under-modified malts",
                  "es": "Método tradicional que remueve porción de macerado espeso, lo hierve, lo devuelve al macerado principal para elevar temperatura; mejora sabor de melanoidina/malta, usado para lagers alemanas y maltas poco modificadas",
                  "de": "Traditionelle Methode, bei der ein Teil der dicken Maische entfernt, gekocht und zur Hauptmaische zurückgeführt wird, um Temperatur zu erhöhen; verbessert Melanoidin-/Malzgeschmack, verwendet für deutsche Lager und untermodifizierte Malze",
                  "nl": "Traditionele methode die gedeelte van dikke maisch verwijdert, kookt, terugvoert naar hoofdmaisch om temperatuur te verhogen; verbetert melanoidine/moutsmaak, gebruikt voor Duitse lagers en ondergemodificeerde mouten"
        },
        {
                  "en": "Adding hot water to the mash to increase temperature",
                  "es": "Agregar agua caliente al macerado para aumentar la temperatura",
                  "de": "Heißes Wasser zur Maische hinzufügen, um Temperatur zu erhöhen",
                  "nl": "Heet water toevoegen aan maisch om temperatuur te verhogen"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Decoction mashing is a traditional method where a thick portion of the mash (1/3 to 1/2) is removed, brought to a boil separately, then returned to the main mash to raise temperature to the next rest. This process can be repeated (single, double, triple decoction). Boiling the grain creates melanoidins and caramelization, adding depth, richness, and malt complexity. Historically necessary for under-modified malts, now used primarily for traditional German lagers (Pilsner, Bock) and Bohemian styles to achieve authentic malt character. Labor-intensive but prized by traditionalists.",
                  "es": "El macerado por decocción es un método tradicional donde se remueve una porción espesa del macerado (1/3 a 1/2), se hierve por separado, luego se devuelve al macerado principal para elevar la temperatura al siguiente reposo. Este proceso puede repetirse (decocción simple, doble, triple). Hervir el grano crea melanoidinas y caramelización, agregando profundidad, riqueza y complejidad de malta. Históricamente necesario para maltas poco modificadas, ahora se usa principalmente para lagers alemanas tradicionales (Pilsner, Bock) y estilos bohemios para lograr carácter de malta auténtico. Laborioso pero apreciado por tradicionalistas.",
                  "de": "Dekoktionsmaischen ist eine traditionelle Methode, bei der ein dicker Teil der Maische (1/3 bis 1/2) entfernt, separat gekocht und dann zur Hauptmaische zurückgeführt wird, um die Temperatur zur nächsten Rast zu erhöhen. Dieser Prozess kann wiederholt werden (Einfach-, Doppel-, Dreifachdekoktion). Das Kochen des Getreides erzeugt Melanoidine und Karamellisierung, die Tiefe, Fülle und Malzkomplexität hinzufügen. Historisch notwendig für untermodifizierte Malze, jetzt hauptsächlich für traditionelle deutsche Lager (Pilsner, Bock) und böhmische Stile verwendet, um authentischen Malzcharakter zu erreichen. Arbeitsintensiv, aber von Traditionalisten geschätzt.",
                  "nl": "Decoctie maischen is een traditionele methode waarbij een dik gedeelte van de maisch (1/3 tot 1/2) wordt verwijderd, apart wordt gekookt en vervolgens wordt teruggebracht naar de hoofdmaisch om de temperatuur naar de volgende rust te verhogen. Dit proces kan worden herhaald (enkele, dubbele, drievoudige decoctie). Het koken van het graan creëert melanoidinen en karamelisatie, wat diepte, rijkdom en moutcomplexiteit toevoegt. Historisch noodzakelijk voor ondergemodificeerde mouten, nu vooral gebruikt voor traditionele Duitse lagers (Pilsner, Bock) en Boheemse stijlen om authentiek moutkarakter te bereiken. Arbeidsintensief maar gewaardeerd door traditionalisten."
        }
      },
      {
        question: {
                  "en": "What is hop isomerization and why is it important?",
                  "es": "¿Qué es la isomerización del lúpulo y por qué es importante?",
                  "de": "Was ist Hopfenisomerisierung und warum ist sie wichtig?",
                  "nl": "Wat is hop isomerisatie en waarom is het belangrijk?"
        },
        options: [
        {
                  "en": "Adding hops at the end of fermentation",
                  "es": "Agregar lúpulo al final de la fermentación",
                  "de": "Hopfen am Ende der Gärung hinzufügen",
                  "nl": "Hop toevoegen aan het einde van fermentatie"
        },
        {
                  "en": "The process of drying hops after harvest",
                  "es": "El proceso de secar lúpulo después de la cosecha",
                  "de": "Der Prozess des Trocknens von Hopfen nach der Ernte",
                  "nl": "Het proces van hop drogen na de oogst"
        },
        {
                  "en": "Mixing different hop varieties together",
                  "es": "Mezclar diferentes variedades de lúpulo",
                  "de": "Verschiedene Hopfensorten mischen",
                  "nl": "Verschillende hopvariëteiten mengen"
        },
        {
                  "en": "Chemical conversion of alpha acids into iso-alpha acids during boiling, making them soluble and bitter; determines IBU levels and requires heat + time (60+ min for max utilization)",
                  "es": "Conversión química de ácidos alfa en iso-ácidos alfa durante la ebullición, haciéndolos solubles y amargos; determina niveles de IBU y requiere calor + tiempo (60+ min para utilización máxima)",
                  "de": "Chemische Umwandlung von Alpha-Säuren in Iso-Alpha-Säuren während des Kochens, macht sie löslich und bitter; bestimmt IBU-Werte und erfordert Hitze + Zeit (60+ Min für maximale Ausnutzung)",
                  "nl": "Chemische conversie van alfa-zuren naar iso-alfa-zuren tijdens koken, maakt ze oplosbaar en bitter; bepaalt IBU-niveaus en vereist hitte + tijd (60+ min voor maximale benutting)"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Hop isomerization is the thermal conversion of alpha acids (humulone, cohumulone, adhumulone) into iso-alpha acids during wort boiling. Alpha acids are not very soluble or bitter; isomerization makes them soluble and intensely bitter. This reaction determines beer's IBU (International Bitterness Units). Requires heat and time: longer boil (60-90 min) = greater isomerization. Gravity, pH, and temperature affect utilization rate. Late hop additions provide aroma/flavor but minimal bitterness due to low isomerization. Pre-isomerized hop products (extract, pellets) increase efficiency.",
                  "es": "La isomerización del lúpulo es la conversión térmica de ácidos alfa (humulona, cohumulona, adhumulona) en iso-ácidos alfa durante la ebullición del mosto. Los ácidos alfa no son muy solubles ni amargos; la isomerización los hace solubles e intensamente amargos. Esta reacción determina el IBU (Unidades Internacionales de Amargor) de la cerveza. Requiere calor y tiempo: ebullición más larga (60-90 min) = mayor isomerización. La gravedad, el pH y la temperatura afectan la tasa de utilización. Las adiciones tardías de lúpulo proporcionan aroma/sabor pero amargor mínimo debido a baja isomerización. Los productos de lúpulo preisomerizados (extracto, pellets) aumentan la eficiencia.",
                  "de": "Hopfenisomerisierung ist die thermische Umwandlung von Alpha-Säuren (Humulon, Cohumulon, Adhumulon) in Iso-Alpha-Säuren während des Würzekochens. Alpha-Säuren sind nicht sehr löslich oder bitter; Isomerisierung macht sie löslich und intensiv bitter. Diese Reaktion bestimmt den IBU (International Bitterness Units) des Biers. Erfordert Hitze und Zeit: längeres Kochen (60-90 Min) = größere Isomerisierung. Gravität, pH und Temperatur beeinflussen Ausnutzungsrate. Späte Hopfenzugaben liefern Aroma/Geschmack, aber minimale Bitterkeit aufgrund geringer Isomerisierung. Vorisomerisierte Hopfenprodukte (Extrakt, Pellets) erhöhen Effizienz.",
                  "nl": "Hop isomerisatie is de thermische conversie van alfa-zuren (humulon, cohumulon, adhumulon) naar iso-alfa-zuren tijdens wort koken. Alfa-zuren zijn niet erg oplosbaar of bitter; isomerisatie maakt ze oplosbaar en intens bitter. Deze reactie bepaalt de IBU (International Bitterness Units) van bier. Vereist hitte en tijd: langer koken (60-90 min) = grotere isomerisatie. Zwaartekracht, pH en temperatuur beïnvloeden benuttingspercentage. Late hop toevoegingen bieden aroma/smaak maar minimale bitterheid door lage isomerisatie. Pre-geïsomeriseerde hop producten (extract, pellets) verhogen efficiëntie."
        }
      },
      {
        question: {
                  "en": "What is the purpose of a vorlauf in brewing?",
                  "es": "¿Cuál es el propósito del vorlauf en la elaboración?",
                  "de": "Was ist der Zweck eines Vorlauts beim Brauen?",
                  "nl": "Wat is het doel van vorlauf bij brouwen?"
        },
        options: [
        {
                  "en": "Boiling the wort vigorously",
                  "es": "Hervir el mosto vigorosamente",
                  "de": "Die Würze kräftig kochen",
                  "nl": "De wort krachtig koken"
        },
        {
                  "en": "Recirculating first wort runnings back through grain bed to establish filter bed and clarify wort before sparging",
                  "es": "Recircular primeros escurridos de mosto a través del lecho de grano para establecer lecho filtrante y clarificar mosto antes del lavado",
                  "de": "Erste Würzeabläufe durch Getreidebett zurückführen, um Filterbett zu etablieren und Würze vor dem Anschwänzen zu klären",
                  "nl": "Eerste wort afloop recirculeren door graan bed om filterbed te vestigen en wort te helderen voor sparging"
        },
        {
                  "en": "The initial mashing temperature",
                  "es": "La temperatura inicial de macerado",
                  "de": "Die anfängliche Maischtemperatur",
                  "nl": "De initiële maischtemperatuur"
        },
        {
                  "en": "Adding yeast to the fermenter",
                  "es": "Agregar levadura al fermentador",
                  "de": "Hefe zum Gärbehälter hinzufügen",
                  "nl": "Gist toevoegen aan de fermenter"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Vorlauf (German for 'recirculation') is the process of recirculating the first wort runnings back through the grain bed at the start of lautering. This allows the grain husks to form a natural filter bed, trapping grain particles and clarifying the wort. Without vorlauf, the initial runoff would be cloudy with grain debris. Brewers continue vorlauf until the wort runs relatively clear, typically 5-15 minutes. This improves efficiency, reduces astringency from grain particles, and produces cleaner wort for fermentation.",
                  "es": "Vorlauf (alemán para 'recirculación') es el proceso de recircular los primeros escurridos de mosto a través del lecho de grano al inicio del lavado. Esto permite que las cáscaras de grano formen un lecho filtrante natural, atrapando partículas de grano y clarificando el mosto. Sin vorlauf, el escurrido inicial sería turbio con desechos de grano. Los cerveceros continúan el vorlauf hasta que el mosto fluye relativamente claro, típicamente 5-15 minutos. Esto mejora la eficiencia, reduce la astringencia de las partículas de grano y produce mosto más limpio para fermentación.",
                  "de": "Vorlauf (deutsch für 'Rezirkulation') ist der Prozess der Rückführung der ersten Würzeabläufe durch das Getreidebett zu Beginn des Läuterns. Dies ermöglicht es den Getreidespelzen, ein natürliches Filterbett zu bilden, das Getreidepar ikel einfängt und die Würze klärt. Ohne Vorlauf wäre der anfängliche Ablauf trüb mit Getreidetrümmern. Brauer setzen den Vorlauf fort, bis die Würze relativ klar läuft, typischerweise 5-15 Minuten. Dies verbessert Effizienz, reduziert Adstringenz von Getreidepartikeln und produziert sauberere Würze für Gärung.",
                  "nl": "Vorlauf (Duits voor 'recirculatie') is het proces van het recirculeren van de eerste wort afloop door het graan bed aan het begin van het lauteren. Dit stelt de graanhulzen in staat een natuurlijk filterbed te vormen, wat graandeeltjes opvangt en de wort heldert. Zonder vorlauf zou de initiële afloop troebel zijn met graan debris. Brouwers zetten vorlauf voort totdat de wort relatief helder loopt, typisch 5-15 minuten. Dit verbetert efficiëntie, vermindert adstringentie van graandeeltjes en produceert schonere wort voor fermentatie."
        }
      },
      {
        question: {
                  "en": "What is the role of nitrogen in beer packaging?",
                  "es": "¿Cuál es el papel del nitrógeno en el envasado de cerveza?",
                  "de": "Was ist die Rolle von Stickstoff bei der Bierverpackung?",
                  "nl": "Wat is de rol van stikstof bij bierverpakking?"
        },
        options: [
        {
                  "en": "Inert gas used for purging/blanketing to prevent oxidation and create smooth creamy foam (nitrogenated beers like stouts)",
                  "es": "Gas inerte usado para purgar/cubrir para prevenir oxidación y crear espuma cremosa suave (cervezas nitrogenadas como stouts)",
                  "de": "Inertgas zur Spülung/Überdeckung verwendet, um Oxidation zu verhindern und glatten cremigen Schaum zu erzeugen (stickstoffhaltige Biere wie Stouts)",
                  "nl": "Inert gas gebruikt voor spoelen/bedekken om oxidatie te voorkomen en gladde romige schuim te creëren (stikstof bieren zoals stouts)"
        },
        {
                  "en": "It helps in fermentation",
                  "es": "Ayuda en la fermentación",
                  "de": "Es hilft bei der Gärung",
                  "nl": "Het helpt bij fermentatie"
        },
        {
                  "en": "It adds bitterness to beer",
                  "es": "Añade amargor a la cerveza",
                  "de": "Es fügt dem Bier Bitterkeit hinzu",
                  "nl": "Het voegt bitterheid toe aan bier"
        },
        {
                  "en": "It increases alcohol content",
                  "es": "Aumenta el contenido de alcohol",
                  "de": "Es erhöht den Alkoholgehalt",
                  "nl": "Het verhoogt het alcoholgehalte"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Nitrogen (N₂) is an inert gas used in brewing for: 1) Purging/blanketing tanks, bottles, cans to prevent oxygen exposure and oxidation (staling). 2) Nitrogenation: mixing nitrogen with CO₂ for creamy, fine-bubbled foam (Guinness, nitro stouts/porters). Nitrogen is less soluble than CO₂, creating smaller bubbles and smoother mouthfeel. Widget cans and nitrogen taps use pressurized nitrogen to replicate draft texture. Counter-pressure filling uses nitrogen to minimize O₂ pickup during packaging.",
                  "es": "El nitrógeno (N₂) es un gas inerte usado en cervecería para: 1) Purgar/cubrir tanques, botellas, latas para prevenir exposición al oxígeno y oxidación (envejecimiento). 2) Nitrogenación: mezclar nitrógeno con CO₂ para espuma cremosa de burbujas finas (Guinness, nitro stouts/porters). El nitrógeno es menos soluble que el CO₂, creando burbujas más pequeñas y sensación en boca más suave. Las latas con widget y grifos de nitrógeno usan nitrógeno presurizado para replicar textura de barril. El llenado a contrapresión usa nitrógeno para minimizar la captación de O₂ durante el envasado.",
                  "de": "Stickstoff (N₂) ist ein Inertgas, das beim Brauen verwendet wird für: 1) Spülen/Überdecken von Tanks, Flaschen, Dosen zur Verhinderung von Sauerstoffexposition und Oxidation (Alterung). 2) Stickstoffierung: Mischen von Stickstoff mit CO₂ für cremigen, feinblasigen Schaum (Guinness, Nitro Stouts/Porter). Stickstoff ist weniger löslich als CO₂ und erzeugt kleinere Blasen und glatteres Mundgefühl. Widget-Dosen und Stickstoffhähne verwenden druckbeaufschlagten Stickstoff, um Draft-Textur zu replizieren. Gegendruckfüllung verwendet Stickstoff, um O₂-Aufnahme während der Verpackung zu minimieren.",
                  "nl": "Stikstof (N₂) is een inert gas gebruikt bij brouwen voor: 1) Spoelen/bedekken van tanks, flessen, blikken om zuurstofblootstelling en oxidatie (veroudering) te voorkomen. 2) Stikstofvorming: stikstof mengen met CO₂ voor romig, fijnborrelig schuim (Guinness, nitro stouts/porters). Stikstof is minder oplosbaar dan CO₂, wat kleinere bubbels en gladder mondgevoel creëert. Widget blikken en stikstof taps gebruiken gecomprimeerd stikstof om tap textuur te repliceren. Tegendruk vulling gebruikt stikstof om O₂ opname tijdens verpakking te minimaliseren."
        }
      },
      {
        question: {
                  "en": "What is the significance of final gravity (FG) in brewing?",
                  "es": "¿Cuál es la importancia de la gravedad final (FG) en la elaboración?",
                  "de": "Was ist die Bedeutung der Endvergärung (FG) beim Brauen?",
                  "nl": "Wat is de betekenis van finaal soortelijk gewicht (FG) bij brouwen?"
        },
        options: [
        {
                  "en": "The weight of the finished beer package",
                  "es": "El peso del paquete de cerveza terminado",
                  "de": "Das Gewicht der fertigen Bierverpackung",
                  "nl": "Het gewicht van de afgewerkte bierverpakking"
        },
        {
                  "en": "Density measurement after fermentation indicating residual sugars, mouthfeel, and actual attenuation; determines ABV when compared with OG",
                  "es": "Medición de densidad después de fermentación indicando azúcares residuales, sensación en boca y atenuación real; determina ABV cuando se compara con OG",
                  "de": "Dichtemessung nach Gärung, die Restzucker, Mundgefühl und tatsächliche Vergärung anzeigt; bestimmt ABV im Vergleich mit OG",
                  "nl": "Dichtheidsmeting na fermentatie die restsuikers, mondgevoel en werkelijke attenuatie aangeeft; bepaalt ABV vergeleken met OG"
        },
        {
                  "en": "The amount of hops used",
                  "es": "La cantidad de lúpulo usado",
                  "de": "Die Menge an verwendetem Hopfen",
                  "nl": "De hoeveelheid gebruikte hop"
        },
        {
                  "en": "The temperature at which fermentation stops",
                  "es": "La temperatura a la que se detiene la fermentación",
                  "de": "Die Temperatur, bei der die Gärung stoppt",
                  "nl": "De temperatuur waarbij fermentatie stopt"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Final gravity (FG/terminal gravity) measures wort density after fermentation completes, indicating residual unfermented sugars (dextrins, complex carbohydrates). FG affects body/mouthfeel: lower FG = drier, lighter body; higher FG = fuller, sweeter body. Combined with original gravity (OG), FG calculates ABV: (OG - FG) × 131.25 = ABV%. Apparent attenuation = (OG - FG)/OG × 100%. Expected FG depends on yeast strain, mash temperature, wort composition. Stuck fermentation shows high FG; over-attenuation shows very low FG.",
                  "es": "La gravedad final (FG/gravedad terminal) mide la densidad del mosto después de completar la fermentación, indicando azúcares residuales no fermentados (dextrinas, carbohidratos complejos). FG afecta cuerpo/sensación en boca: FG más baja = cuerpo más seco y ligero; FG más alta = cuerpo más lleno y dulce. Combinada con gravedad original (OG), FG calcula ABV: (OG - FG) × 131.25 = ABV%. Atenuación aparente = (OG - FG)/OG × 100%. La FG esperada depende de la cepa de levadura, temperatura de macerado, composición del mosto. La fermentación atascada muestra FG alta; la sobreatenuación muestra FG muy baja.",
                  "de": "Endvergärung (FG/Endgravität) misst die Würzedichte nach Abschluss der Gärung und zeigt verbleibende unvergorene Zucker (Dextrine, komplexe Kohlenhydrate) an. FG beeinflusst Körper/Mundgefühl: niedrigere FG = trockener, leichterer Körper; höhere FG = vollerer, süßerer Körper. Kombiniert mit Stammwürze (OG) berechnet FG den ABV: (OG - FG) × 131,25 = ABV%. Scheinbare Vergärung = (OG - FG)/OG × 100%. Erwartete FG hängt von Hefestamm, Maischtemperatur, Würzezusammensetzung ab. Stockgärung zeigt hohe FG; Übervergärung zeigt sehr niedrige FG.",
                  "nl": "Finaal soortelijk gewicht (FG/terminale zwaartekracht) meet wort dichtheid na voltooiing van fermentatie, wat resterende ongefermenteerde suikers (dextrines, complexe koolhydraten) aangeeft. FG beïnvloedt body/mondgevoel: lagere FG = droger, lichter lichaam; hogere FG = voller, zoeter lichaam. Gecombineerd met oorspronkelijk soortelijk gewicht (OG) berekent FG ABV: (OG - FG) × 131,25 = ABV%. Schijnbare attenuatie = (OG - FG)/OG × 100%. Verwachte FG hangt af van giststam, maischtemperatuur, wortsamenstelling. Vastgelopen fermentatie toont hoge FG; over-attenuatie toont zeer lage FG."
        }
      },
      {
        question: {
                  "en": "What are polyphenols and their role in beer?",
                  "es": "¿Qué son los polifenoles y su papel en la cerveza?",
                  "de": "Was sind Polyphenole und ihre Rolle im Bier?",
                  "nl": "Wat zijn polyfenolen en hun rol in bier?"
        },
        options: [
        {
                  "en": "Enzymes that break down proteins",
                  "es": "Enzimas que descomponen proteínas",
                  "de": "Enzyme, die Proteine abbauen",
                  "nl": "Enzymen die eiwitten afbreken"
        },
        {
                  "en": "Plant compounds from malt/hops providing antioxidant properties, astringency, and contributing to haze/stability; excess causes haze and harsh tannin flavors",
                  "es": "Compuestos vegetales de malta/lúpulo que proporcionan propiedades antioxidantes, astringencia y contribuyen a turbidez/estabilidad; exceso causa turbidez y sabores ásperos a tanino",
                  "de": "Pflanzenverbindungen aus Malz/Hopfen, die antioxidative Eigenschaften, Adstringenz bieten und zu Trübung/Stabilität beitragen; Überschuss verursacht Trübung und harsche Tanninaromen",
                  "nl": "Plantverbindingen van mout/hop die antioxidante eigenschappen, adstringentie bieden en bijdragen aan waas/stabiliteit; overschot veroorzaakt waas en harde tannine smaken"
        },
        {
                  "en": "A type of sugar added for fermentation",
                  "es": "Un tipo de azúcar agregado para fermentación",
                  "de": "Eine Art Zucker für Gärung hinzugefügt",
                  "nl": "Een soort suiker toegevoegd voor fermentatie"
        },
        {
                  "en": "Yeast nutrients for faster fermentation",
                  "es": "Nutrientes de levadura para fermentación más rápida",
                  "de": "Hefenährstoffe für schnellere Gärung",
                  "nl": "Gistvoedingsstoffen voor snellere fermentatie"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Polyphenols (tannins, anthocyanins, flavonoids) are plant-derived compounds from malt husks and hops. Benefits: antioxidant properties (prevent staling), contribute to color and flavor complexity. Drawbacks: excessive polyphenols cause astringency (dry, puckering mouthfeel), haze formation (combine with proteins forming chill haze), and colloidal instability. Controlled via proper mashing pH (avoid high pH >5.8), gentle sparging (avoid over-sparging/excessive runoff), and using well-modified malts. Some styles (Belgian, barrel-aged) embrace moderate polyphenol character.",
                  "es": "Los polifenoles (taninos, antocianinas, flavonoides) son compuestos derivados de plantas de las cáscaras de malta y el lúpulo. Beneficios: propiedades antioxidantes (previenen envejecimiento), contribuyen a color y complejidad de sabor. Inconvenientes: polifenoles excesivos causan astringencia (sensación en boca seca y fruncida), formación de turbidez (se combinan con proteínas formando turbidez por frío) e inestabilidad coloidal. Controlados mediante pH de macerado adecuado (evitar pH alto >5.8), lavado suave (evitar sobre-lavado/escurrido excesivo) y uso de maltas bien modificadas. Algunos estilos (belgas, envejecidos en barril) abrazan carácter moderado de polifenol.",
                  "de": "Polyphenole (Tannine, Anthocyane, Flavonoide) sind pflanzliche Verbindungen aus Malzspelzen und Hopfen. Vorteile: antioxidative Eigenschaften (verhindern Alterung), tragen zu Farbe und Geschmackskomplexität bei. Nachteile: übermäßige Polyphenole verursachen Adstringenz (trockenes, zusammenziehendes Mundgefühl), Trübungsbildung (verbinden sich mit Proteinen und bilden Kältetrübung) und kolloidale Instabilität. Kontrolliert durch richtigen Maisch-pH (hohen pH >5,8 vermeiden), sanftes Anschwänzen (Über-Anschwänzen/übermäßigen Ablauf vermeiden) und Verwendung gut modifizierter Malze. Einige Stile (belgisch, fassgereift) umarmen moderaten Polyphenol-Charakter.",
                  "nl": "Polyfenolen (tannines, anthocyanen, flavonoïden) zijn plant-afgeleide verbindingen van mouthulzen en hop. Voordelen: antioxidante eigenschappen (voorkomen veroudering), dragen bij aan kleur en smaakcomplexiteit. Nadelen: overmatige polyfenolen veroorzaken adstringentie (droog, samentrekkend mondgevoel), waasvorming (combineren met eiwitten die koudewaas vormen) en colloïdale instabiliteit. Gecontroleerd via juiste maisch-pH (vermijd hoge pH >5,8), zachte sparging (vermijd over-sparging/overmatige afloop) en gebruik van goed gemodificeerde mout. Sommige stijlen (Belgisch, vat-gerijpt) omarmen gematigd polyfenol karakter."
        }
      },
      {
        question: {
                  "en": "What is the purpose of kettle finings (Irish moss, Whirlfloc)?",
                  "es": "¿Cuál es el propósito de los clarificantes de caldera (musgo irlandés, Whirlfloc)?",
                  "de": "Was ist der Zweck von Würzeschönungsmitteln (Irischmoos, Whirlfloc)?",
                  "nl": "Wat is het doel van ketel klaringsmiddelen (Iers mos, Whirlfloc)?"
        },
        options: [
        {
                  "en": "Carrageenan-based additives added late in boil to coagulate proteins and improve hot break formation, enhancing wort clarity and reducing chill haze",
                  "es": "Aditivos a base de carragenina agregados tarde en la ebullición para coagular proteínas y mejorar formación de ruptura caliente, mejorando claridad del mosto y reduciendo turbidez por frío",
                  "de": "Carrageenan-basierte Zusätze spät im Kochen hinzugefügt, um Proteine zu koagulieren und Heißbruchbildung zu verbessern, Würzeklarheit zu erhöhen und Kältetrübung zu reduzieren",
                  "nl": "Carrageen-gebaseerde additieven laat in kook toegevoegd om eiwitten te coaguleren en hete breuk vorming te verbeteren, worthelderheid te verhogen en koudewaas te verminderen"
        },
        {
                  "en": "Enzymes to break down starches",
                  "es": "Enzimas para descomponer almidones",
                  "de": "Enzyme zum Abbau von Stärke",
                  "nl": "Enzymen om zetmeel af te breken"
        },
        {
                  "en": "Yeast nutrients for fermentation",
                  "es": "Nutrientes de levadura para fermentación",
                  "de": "Hefenährstoffe für Gärung",
                  "nl": "Gistvoedingsstoffen voor fermentatie"
        },
        {
                  "en": "Hop additions for aroma",
                  "es": "Adiciones de lúpulo para aroma",
                  "de": "Hopfenzusätze für Aroma",
                  "nl": "Hop toevoegingen voor aroma"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Kettle finings like Irish moss (carrageenan seaweed extract) and Whirlfloc (tablet form) are added 10-15 minutes before end of boil. They carry negative charge that attracts positively-charged proteins, causing coagulation and enhanced hot break formation. This improves wort clarity, reduces protein-polyphenol haze (chill haze), enhances hop utilization, and produces clearer finished beer. Dosage: typically 1 tsp Irish moss or 1 Whirlfloc tablet per 5-10 gallons. Widely used in professional and homebrewing.",
                  "es": "Los clarificantes de caldera como el musgo irlandés (extracto de alga carragenina) y Whirlfloc (forma de tableta) se agregan 10-15 minutos antes del final de la ebullición. Llevan carga negativa que atrae proteínas con carga positiva, causando coagulación y formación mejorada de ruptura caliente. Esto mejora la claridad del mosto, reduce la turbidez proteína-polifenol (turbidez por frío), mejora la utilización del lúpulo y produce cerveza terminada más clara. Dosificación: típicamente 1 cucharadita de musgo irlandés o 1 tableta Whirlfloc por 5-10 galones. Ampliamente usado en elaboración profesional y casera.",
                  "de": "Würzeschönungsmittel wie Irischmoos (Carrageenan-Seetangextrakt) und Whirlfloc (Tablettenform) werden 10-15 Minuten vor Ende des Kochens hinzugefügt. Sie tragen negative Ladung, die positiv geladene Proteine anzieht, was Koagulation und verbesserte Heißbruchbildung verursacht. Dies verbessert Würzeklarheit, reduziert Protein-Polyphenol-Trübung (Kältetrübung), verbessert Hopfenausnutzung und produziert klareres fertiges Bier. Dosierung: typischerweise 1 TL Irischmoos oder 1 Whirlfloc-Tablette pro 5-10 Gallonen. Weit verbreitet im professionellen und Heimbrauen.",
                  "nl": "Ketel klaringsmiddelen zoals Iers mos (carrageen zeewier extract) en Whirlfloc (tablet vorm) worden 10-15 minuten voor einde van koken toegevoegd. Ze dragen negatieve lading die positief geladen eiwitten aantrekt, wat coagulatie en verbeterde hete breuk vorming veroorzaakt. Dit verbetert worthelderheid, vermindert eiwit-polyfenol waas (koudewaas), verbetert hopgebruik en produceert helderder afgewerkt bier. Dosering: typisch 1 tl Iers mos of 1 Whirlfloc tablet per 5-10 gallon. Veel gebruikt in professioneel en thuisbrouwen."
        }
      },
      {
        question: {
                  "en": "What is step mashing and what are its benefits?",
                  "es": "¿Qué es el macerado escalonado y cuáles son sus beneficios?",
                  "de": "Was ist Stufen-Maischen und was sind seine Vorteile?",
                  "nl": "Wat is stap maischen en wat zijn de voordelen?"
        },
        options: [
        {
                  "en": "Cooling wort in steps",
                  "es": "Enfriar mosto en pasos",
                  "de": "Würze in Schritten kühlen",
                  "nl": "Wort in stappen afkoelen"
        },
        {
                  "en": "Multi-temperature mashing process with rests at different temps (e.g., 45-55°C protein rest, 62-65°C β-amylase, 68-72°C α-amylase) optimizing enzyme activity for fermentability and body",
                  "es": "Proceso de macerado multi-temperatura con reposos a diferentes temps (ej., 45-55°C reposo de proteína, 62-65°C β-amilasa, 68-72°C α-amilasa) optimizando actividad enzimática para fermentabilidad y cuerpo",
                  "de": "Multi-Temperatur-Maischprozess mit Rasten bei verschiedenen Temps (z.B. 45-55°C Proteinrast, 62-65°C β-Amylase, 68-72°C α-Amylase), optimiert Enzymaktivität für Vergärbarkeit und Körper",
                  "nl": "Multi-temperatuur maischproces met rusten bij verschillende temps (bijv. 45-55°C eiwit rust, 62-65°C β-amylase, 68-72°C α-amylase) optimaliseren enzymactiviteit voor fermenteerbaarheid en body"
        },
        {
                  "en": "Gradually adding hops during the boil",
                  "es": "Agregar gradualmente lúpulo durante la ebullición",
                  "de": "Hopfen schrittweise während des Kochens hinzufügen",
                  "nl": "Geleidelijk hop toevoegen tijdens het koken"
        },
        {
                  "en": "Adding malt in multiple stages during mashing",
                  "es": "Agregar malta en múltiples etapas durante el macerado",
                  "de": "Malz in mehreren Stufen während des Maischens hinzufügen",
                  "nl": "Mout in meerdere stadia toevoegen tijdens maischen"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Step mashing (temperature mashing) involves raising mash through multiple temperature rests to optimize different enzyme activities. Common rests: 1) Acid rest (35-45°C, acidification), 2) Protein rest (45-55°C, proteolysis), 3) β-amylase/Saccharification rest (62-65°C, fermentable sugars, dry finish), 4) α-amylase rest (68-72°C, dextrins, body/mouthfeel), 5) Mash-out (75-78°C, denature enzymes, improve lautering). Allows precise control over fermentability, attenuation, body. Essential for under-modified malts, less critical for modern well-modified malts. Compared to single-infusion (one temp).",
                  "es": "El macerado escalonado (macerado de temperatura) implica elevar el macerado a través de múltiples reposos de temperatura para optimizar diferentes actividades enzimáticas. Reposos comunes: 1) Reposo ácido (35-45°C, acidificación), 2) Reposo de proteína (45-55°C, proteólisis), 3) Reposo β-amilasa/Sacarificación (62-65°C, azúcares fermentables, acabado seco), 4) Reposo α-amilasa (68-72°C, dextrinas, cuerpo/sensación en boca), 5) Mash-out (75-78°C, desnaturalizar enzimas, mejorar lavado). Permite control preciso sobre fermentabilidad, atenuación, cuerpo. Esencial para maltas poco modificadas, menos crítico para maltas modernas bien modificadas. Comparado con infusión simple (una temp).",
                  "de": "Stufen-Maischen (Temperatur-Maischen) beinhaltet das Anheben der Maische durch mehrere Temperaturrasten, um verschiedene Enzymaktivitäten zu optimieren. Übliche Rasten: 1) Säurerast (35-45°C, Ansäuerung), 2) Proteinrast (45-55°C, Proteolyse), 3) β-Amylase/Verzuckerungsrast (62-65°C, fermentierbare Zucker, trockener Abgang), 4) α-Amylase-Rast (68-72°C, Dextrine, Körper/Mundgefühl), 5) Abmaischen (75-78°C, Enzyme denaturieren, Läutern verbessern). Ermöglicht präzise Kontrolle über Vergärbarkeit, Vergärung, Körper. Essentiell für untermodifizierte Malze, weniger kritisch für moderne gut modifizierte Malze. Verglichen mit Einzelinfusion (eine Temp).",
                  "nl": "Stap maischen (temperatuur maischen) houdt in het verhogen van maisch door meerdere temperatuur rusten om verschillende enzymactiviteiten te optimaliseren. Gebruikelijke rusten: 1) Zuur rust (35-45°C, verzuring), 2) Eiwit rust (45-55°C, proteolyse), 3) β-amylase/Saccharificatie rust (62-65°C, fermenteerbare suikers, droge finish), 4) α-amylase rust (68-72°C, dextrines, body/mondgevoel), 5) Mash-out (75-78°C, enzymen denatureren, lauteren verbeteren). Staat precieze controle over fermenteerbaarheid, attenuatie, body toe. Essentieel voor ondergemodificeerde mouten, minder kritiek voor moderne goed gemodificeerde mouten. Vergeleken met enkele infusie (een temp)."
        }
      },
      {
        question: {
                  "en": "What is the purpose of a yeast starter in brewing?",
                  "es": "¿Cuál es el propósito de un cultivo iniciador de levadura en la elaboración?",
                  "de": "Was ist der Zweck einer Hefe-Starterkultur beim Brauen?",
                  "nl": "Wat is het doel van een gist starter bij brouwen?"
        },
        options: [
        {
                  "en": "A container for storing yeast long-term",
                  "es": "Un contenedor para almacenar levadura a largo plazo",
                  "de": "Ein Behälter zur langfristigen Hefespeicherung",
                  "nl": "Een container voor langdurige gistopslag"
        },
        {
                  "en": "A device to measure yeast viability",
                  "es": "Un dispositivo para medir viabilidad de levadura",
                  "de": "Ein Gerät zur Messung der Hefelebensfähigkeit",
                  "nl": "Een apparaat om gistlevensvatbaarheid te meten"
        },
        {
                  "en": "Pre-fermentation culture to propagate yeast cells, increase cell count, and ensure healthy vigorous fermentation with proper pitch rate",
                  "es": "Cultivo pre-fermentación para propagar células de levadura, aumentar recuento celular y asegurar fermentación vigorosa saludable con tasa de inoculación adecuada",
                  "de": "Vor-Gärungskultur zur Vermehrung von Hefezellen, Erhöhung der Zellzahl und Sicherstellung gesunder kräftiger Gärung mit richtiger Anstellrate",
                  "nl": "Pre-fermentatie cultuur om gistcellen te propageren, celtellingen te verhogen en gezonde krachtige fermentatie te verzekeren met juiste toevoegingspercentage"
        },
        {
                  "en": "Adding sugar to increase alcohol",
                  "es": "Agregar azúcar para aumentar alcohol",
                  "de": "Zucker hinzufügen, um Alkohol zu erhöhen",
                  "nl": "Suiker toevoegen om alcohol te verhogen"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "A yeast starter is a small-scale pre-fermentation made with malt extract (DME/LME), water, and yeast to propagate cells before pitching into main wort. Purpose: increase viable cell count to proper pitch rate (ales: 0.75-1 million cells/mL/°P; lagers: 1.5-2 million cells/mL/°P), ensure vigorous healthy fermentation, reduce lag time, minimize off-flavors, revitalize older/under-pitched yeast. Made on stir plate with aeration for optimal growth. Calculated based on wort volume, gravity, yeast viability. Essential for high-gravity beers and liquid yeast.",
                  "es": "Un cultivo iniciador de levadura es una pre-fermentación a pequeña escala hecha con extracto de malta (DME/LME), agua y levadura para propagar células antes de inocular en el mosto principal. Propósito: aumentar recuento de células viables a tasa de inoculación adecuada (ales: 0.75-1 millón células/mL/°P; lagers: 1.5-2 millón células/mL/°P), asegurar fermentación vigorosa saludable, reducir tiempo de latencia, minimizar sabores indeseables, revitalizar levadura vieja/sub-inoculada. Hecho en placa de agitación con aireación para crecimiento óptimo. Calculado basado en volumen de mosto, gravedad, viabilidad de levadura. Esencial para cervezas de alta gravedad y levadura líquida.",
                  "de": "Eine Hefe-Starterkultur ist eine kleinmaßstäbliche Vor-Gärung aus Malzextrakt (DME/LME), Wasser und Hefe zur Vermehrung von Zellen vor dem Anstellen in die Hauptwürze. Zweck: Erhöhung der lebensfähigen Zellzahl auf richtige Anstellrate (Ales: 0,75-1 Millionen Zellen/mL/°P; Lager: 1,5-2 Millionen Zellen/mL/°P), Sicherstellung kräftiger gesunder Gärung, Reduzierung der Verzögerungszeit, Minimierung von Fehlgeschmäckern, Wiederbelebung älterer/unter-angestellter Hefe. Auf Rührplatte mit Belüftung für optimales Wachstum hergestellt. Berechnet basierend auf Würzevolumen, Gravität, Hefelebensfähigkeit. Essentiell für High-Gravity-Biere und Flüssighefe.",
                  "nl": "Een gist starter is een kleinschalige pre-fermentatie gemaakt met moutextract (DME/LME), water en gist om cellen te propageren voor toevoegen aan hoofd wort. Doel: verhogen levensvatbare celtellingen tot juist toevoegingspercentage (ales: 0,75-1 miljoen cellen/mL/°P; lagers: 1,5-2 miljoen cellen/mL/°P), verzekeren krachtige gezonde fermentatie, verminderen vertragingstijd, minimaliseren off-smaken, revitaliseren oudere/onder-toegevoegde gist. Gemaakt op roerplaat met beluchting voor optimale groei. Berekend gebaseerd op wort volume, zwaartekracht, gist levensvatbaarheid. Essentieel voor high-gravity bieren en vloeibare gist."
        }
      },
      {
        question: {
                  "en": "What causes beer to become 'skunky' or 'light-struck'?",
                  "es": "¿Qué causa que la cerveza se vuelva 'skunk' o 'golpeada por luz'?",
                  "de": "Was verursacht, dass Bier 'stinkend' oder 'lichtgeschlagen' wird?",
                  "nl": "Wat veroorzaakt dat bier 'skunk' of 'licht-geslagen' wordt?"
        },
        options: [
        {
                  "en": "Bacterial contamination during fermentation",
                  "es": "Contaminación bacteriana durante fermentación",
                  "de": "Bakterielle Kontamination während Gärung",
                  "nl": "Bacteriële contaminatie tijdens fermentatie"
        },
        {
                  "en": "UV/visible light photodegrades hop iso-alpha acids into 3-methyl-2-butene-1-thiol (MBT), creating skunk-like sulfur aroma; prevented by brown bottles, cans, or reduced hop compounds",
                  "es": "Luz UV/visible fotodegrada iso-ácidos alfa del lúpulo en 3-metil-2-buteno-1-tiol (MBT), creando aroma azufrado similar a skunk; prevenido por botellas marrones, latas o compuestos de lúpulo reducidos",
                  "de": "UV/sichtbares Licht photodegradiert Hopfen-Iso-Alpha-Säuren zu 3-Methyl-2-buten-1-thiol (MBT), erzeugt stinktierähnliches Schwefelaroma; verhindert durch braune Flaschen, Dosen oder reduzierte Hopfenverbindungen",
                  "nl": "UV/zichtbaar licht fotodegradeert hop iso-alfa-zuren tot 3-methyl-2-buteen-1-thiol (MBT), creëert skunk-achtig zwavelaroma; voorkomen door bruine flessen, blikken of gereduceerde hopverbindingen"
        },
        {
                  "en": "Yeast autolysis producing sulfur compounds",
                  "es": "Autólisis de levadura produciendo compuestos de azufre",
                  "de": "Hefeautolyse produziert Schwefelverbindungen",
                  "nl": "Gist autolysis producerende zwavelverbindingen"
        },
        {
                  "en": "Oxidation from exposure to air",
                  "es": "Oxidación por exposición al aire",
                  "de": "Oxidation durch Luftexposition",
                  "nl": "Oxidatie door blootstelling aan lucht"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Light-struck (skunky) flavor results from photochemical reaction when UV or blue-spectrum visible light (wavelengths 350-500nm) hits beer containing iso-alpha acids from hops. Light causes these compounds to break down into 3-methyl-2-butene-1-thiol (MBT), a sulfur compound identical to skunk spray, detectable at parts-per-trillion. Prevention: brown glass bottles (block >95% UV), aluminum cans, kegs, using pre-isomerized or reduced hop extracts (e.g., tetra-hop used in clear-bottle beers like Miller High Life). Green/clear bottles offer minimal protection. Happens within minutes of light exposure.",
                  "es": "El sabor golpeado por luz (skunk) resulta de reacción fotoquímica cuando luz UV o espectro azul visible (longitudes de onda 350-500nm) golpea cerveza conteniendo iso-ácidos alfa del lúpulo. La luz causa que estos compuestos se descompongan en 3-metil-2-buteno-1-tiol (MBT), un compuesto de azufre idéntico al spray de skunk, detectable en partes por billón. Prevención: botellas de vidrio marrón (bloquean >95% UV), latas de aluminio, barriles, usar extractos de lúpulo pre-isomerizados o reducidos (ej., tetra-hop usado en cervezas de botella clara como Miller High Life). Botellas verdes/claras ofrecen protección mínima. Ocurre en minutos de exposición a luz.",
                  "de": "Lichtgeschlagener (stinkend) Geschmack resultiert aus photochemischer Reaktion, wenn UV oder blau-Spektrum sichtbares Licht (Wellenlängen 350-500nm) auf Bier trifft, das Iso-Alpha-Säuren aus Hopfen enthält. Licht verursacht, dass diese Verbindungen zu 3-Methyl-2-buten-1-thiol (MBT) abgebaut werden, eine Schwefelverbindung identisch mit Stinktier-Spray, nachweisbar in Teilen pro Billion. Prävention: braune Glasflaschen (blockieren >95% UV), Aluminiumdosen, Fässer, Verwendung vorisomerisierter oder reduzierter Hopfenextrakte (z.B. Tetra-Hopfen in Klarglas-Bieren wie Miller High Life). Grüne/klare Flaschen bieten minimalen Schutz. Geschieht innerhalb von Minuten nach Lichtexposition.",
                  "nl": "Licht-geslagen (skunk) smaak resulteert uit fotochemische reactie wanneer UV of blauw-spectrum zichtbaar licht (golflengtes 350-500nm) bier raakt dat iso-alfa-zuren van hop bevat. Licht veroorzaakt dat deze verbindingen afbreken tot 3-methyl-2-buteen-1-thiol (MBT), een zwavelverbinding identiek aan skunk spray, detecteerbaar op delen per biljoen. Preventie: bruine glazen flessen (blokkeren >95% UV), aluminium blikken, vaten, gebruik van pre-geïsomeriseerde of gereduceerde hop extracten (bijv. tetra-hop gebruikt in helder-fles bieren zoals Miller High Life). Groene/heldere flessen bieden minimale bescherming. Gebeurt binnen minuten van lichtblootstelling."
        }
      },
      {
        question: {
                  "en": "What is real attenuation vs. apparent attenuation?",
                  "es": "¿Qué es la atenuación real vs. atenuación aparente?",
                  "de": "Was ist reale Vergärung vs. scheinbare Vergärung?",
                  "nl": "Wat is echte attenuatie vs. schijnbare attenuatie?"
        },
        options: [
        {
                  "en": "Real attenuation accounts for alcohol density (true sugar consumed); apparent attenuation measures hydrometer reading (appears higher due to lighter alcohol); conversion: RA ≈ 0.814 × AA",
                  "es": "Atenuación real considera densidad del alcohol (azúcar verdadero consumido); atenuación aparente mide lectura del hidrómetro (aparece más alta debido a alcohol más ligero); conversión: AR ≈ 0.814 × AA",
                  "de": "Reale Vergärung berücksichtigt Alkoholdichte (wahrer verbrauchter Zucker); scheinbare Vergärung misst Hydrometer-Lesung (erscheint höher aufgrund leichterem Alkohol); Umrechnung: RV ≈ 0,814 × SV",
                  "nl": "Echte attenuatie houdt rekening met alcoholdichtheid (ware verbruikte suiker); schijnbare attenuatie meet hydrometer-lezing (lijkt hoger door lichter alcohol); conversie: EA ≈ 0,814 × SA"
        },
        {
                  "en": "They are the same measurement",
                  "es": "Son la misma medición",
                  "de": "Sie sind dieselbe Messung",
                  "nl": "Ze zijn dezelfde meting"
        },
        {
                  "en": "Real attenuation measures color, apparent measures clarity",
                  "es": "Atenuación real mide color, aparente mide claridad",
                  "de": "Reale Vergärung misst Farbe, scheinbare misst Klarheit",
                  "nl": "Echte attenuatie meet kleur, schijnbare meet helderheid"
        },
        {
                  "en": "Apparent attenuation is always lower than real attenuation",
                  "es": "Atenuación aparente siempre es más baja que atenuación real",
                  "de": "Scheinbare Vergärung ist immer niedriger als reale Vergärung",
                  "nl": "Schijnbare attenuatie is altijd lager dan echte attenuatie"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Apparent attenuation (AA) = (OG - FG) / OG × 100%, measured by hydrometer/refractometer showing density drop. However, alcohol is less dense than water, so hydrometers read artificially low FG, making attenuation appear higher than actual sugar consumption. Real attenuation (RA) corrects for alcohol's lower density, showing true percentage of sugars fermented. Conversion: RA ≈ AA × 0.814, or RA = (OG - RealFG) / OG × 100%. Example: 75% AA ≈ 61% RA. Real extract (RE) calculated via formulas or ebulliometry. Important for understanding actual fermentation performance.",
                  "es": "Atenuación aparente (AA) = (OG - FG) / OG × 100%, medida por hidrómetro/refractómetro mostrando caída de densidad. Sin embargo, el alcohol es menos denso que el agua, por lo que los hidrómetros leen FG artificialmente bajo, haciendo que la atenuación parezca más alta que el consumo real de azúcar. La atenuación real (AR) corrige la menor densidad del alcohol, mostrando el porcentaje verdadero de azúcares fermentados. Conversión: AR ≈ AA × 0.814, o AR = (OG - FGReal) / OG × 100%. Ejemplo: 75% AA ≈ 61% AR. Extracto real (ER) calculado mediante fórmulas o ebuliometría. Importante para entender rendimiento real de fermentación.",
                  "de": "Scheinbare Vergärung (SV) = (OG - FG) / OG × 100%, gemessen durch Hydrometer/Refraktometer, zeigt Dichteabfall. Alkohol ist jedoch weniger dicht als Wasser, sodass Hydrometer künstlich niedrige FG lesen, was Vergärung höher erscheinen lässt als tatsächlicher Zuckerverbrauch. Reale Vergärung (RV) korrigiert für niedrigere Alkoholdichte und zeigt wahren Prozentsatz vergorener Zucker. Umrechnung: RV ≈ SV × 0,814, oder RV = (OG - RealeFG) / OG × 100%. Beispiel: 75% SV ≈ 61% RV. Realextrakt (RE) berechnet über Formeln oder Ebulliometrie. Wichtig für Verständnis tatsächlicher Gärungsleistung.",
                  "nl": "Schijnbare attenuatie (SA) = (OG - FG) / OG × 100%, gemeten door hydrometer/refractometer die dichtheidsval toont. Echter, alcohol is minder dicht dan water, dus hydrometers lezen kunstmatig lage FG, waardoor attenuatie hoger lijkt dan werkelijk suikerverbruik. Echte attenuatie (EA) corrigeert voor lagere alcoholdichtheid, toont waar percentage gefermenteerde suikers. Conversie: EA ≈ SA × 0,814, of EA = (OG - EchteFG) / OG × 100%. Voorbeeld: 75% SA ≈ 61% EA. Echt extract (EE) berekend via formules of ebulliometrie. Belangrijk voor begrip van werkelijke fermentatieprestaties."
        }
      }
    ]
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level8;
  }
})();