// Chocolate Desserts Quiz - Level 4
(function() {
  const level4 = {
    name: {
          "en": "Advanced Chocolate Techniques",
          "es": "Técnicas Avanzadas de Chocolate",
          "de": "Fortgeschrittene Schokoladentechniken",
          "nl": "Geavanceerde Chocoladetechnieken"
    },
    questions: [
      {
        question: {
                  "en": "What is the optimal temperature range for tempering dark chocolate?",
                  "es": "¿Cuál es el rango de temperatura óptimo para templar chocolate negro?",
                  "de": "Was ist der optimale Temperaturbereich zum Temperieren von dunkler Schokolade?",
                  "nl": "Wat is het optimale temperatuurbereik voor het tempereren van pure chocolade?"
        },
        options: [
        {
                  "en": "60-65°C, cool to 32°C, reheat to 35°C",
                  "es": "60-65°C, enfriar a 32°C, recalentar a 35°C",
                  "de": "60-65°C, abkühlen auf 32°C, wieder erhitzen auf 35°C",
                  "nl": "60-65°C, afkoelen tot 32°C, opnieuw verwarmen tot 35°C"
        },
        {
                  "en": "30-35°C throughout",
                  "es": "30-35°C todo el tiempo",
                  "de": "30-35°C durchgehend",
                  "nl": "30-35°C gedurende"
        },
        {
                  "en": "45-50°C, cool to 27°C, reheat to 31°C",
                  "es": "45-50°C, enfriar a 27°C, recalentar a 31°C",
                  "de": "45-50°C, abkühlen auf 27°C, wieder erhitzen auf 31°C",
                  "nl": "45-50°C, afkoelen tot 27°C, opnieuw verwarmen tot 31°C"
        },
        {
                  "en": "No specific temperature needed",
                  "es": "No se necesita temperatura específica",
                  "de": "Keine spezifische Temperatur erforderlich",
                  "nl": "Geen specifieke temperatuur nodig"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Dark chocolate tempering requires heating to 45-50°C, cooling to 27°C to form seed crystals, then reheating to 31°C for working temperature.",
                  "es": "El templado de chocolate negro requiere calentar a 45-50°C, enfriar a 27°C para formar cristales semilla, luego recalentar a 31°C para temperatura de trabajo.",
                  "de": "Das Temperieren von dunkler Schokolade erfordert Erhitzen auf 45-50°C, Abkühlen auf 27°C zur Bildung von Impfkristallen, dann wieder Erhitzen auf 31°C für Arbeitstemperatur.",
                  "nl": "Het tempereren van pure chocolade vereist verhitting tot 45-50°C, afkoeling tot 27°C om zaadkristallen te vormen, dan opnieuw verwarmen tot 31°C voor werktemperatuur."
        }
      },
      {
        question: {
                  "en": "What is the purpose of conching in chocolate production?",
                  "es": "¿Cuál es el propósito del conchado en la producción de chocolate?",
                  "de": "Was ist der Zweck des Conchierens in der Schokoladenproduktion?",
                  "nl": "Wat is het doel van conchen in chocoladeproductie?"
        },
        options: [
        {
                  "en": "Changes chocolate color",
                  "es": "Cambia el color del chocolate",
                  "de": "Ändert die Schokoladenfarbe",
                  "nl": "Verandert chocoladekleur"
        },
        {
                  "en": "Hardens the chocolate",
                  "es": "Endurece el chocolate",
                  "de": "Härtet die Schokolade",
                  "nl": "Verhardt de chocolade"
        },
        {
                  "en": "Develops flavor, reduces particle size, and improves texture",
                  "es": "Desarrolla sabor, reduce tamaño de partículas y mejora textura",
                  "de": "Entwickelt Geschmack, reduziert Partikelgröße und verbessert Textur",
                  "nl": "Ontwikkelt smaak, vermindert deeltjesgrootte en verbetert textuur"
        },
        {
                  "en": "Only adds sweetness",
                  "es": "Solo agrega dulzura",
                  "de": "Fügt nur Süße hinzu",
                  "nl": "Voegt alleen zoetheid toe"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Conching is a mechanical process that develops flavor compounds, reduces particle size for smoothness, and improves texture through prolonged mixing and aeration.",
                  "es": "El conchado es un proceso mecánico que desarrolla compuestos de sabor, reduce el tamaño de partículas para suavidad y mejora la textura mediante mezclado y aireación prolongados.",
                  "de": "Conchieren ist ein mechanischer Prozess, der Geschmacksverbindungen entwickelt, Partikelgröße für Glätte reduziert und Textur durch verlängerte Mischung und Belüftung verbessert.",
                  "nl": "Conchen is een mechanisch proces dat smaakverbindingen ontwikkelt, deeltjesgrootte vermindert voor gladheid en textuur verbetert door langdurig mengen en beluchten."
        }
      },
      {
        question: {
                  "en": "What causes 'fat bloom' on chocolate surfaces?",
                  "es": "¿Qué causa el 'bloom de grasa' en las superficies de chocolate?",
                  "de": "Was verursacht 'Fettreif' auf Schokoladenoberflächen?",
                  "nl": "Wat veroorzaakt 'vetbloei' op chocolade oppervlakken?"
        },
        options: [
        {
                  "en": "Temperature fluctuations causing cocoa butter migration",
                  "es": "Fluctuaciones de temperatura que causan migración de manteca de cacao",
                  "de": "Temperaturschwankungen, die Kakaobuttermigrierung verursachen",
                  "nl": "Temperatuurschommelingen die cacaoboter migratie veroorzaken"
        },
        {
                  "en": "Adding too much sugar",
                  "es": "Agregar demasiada azúcar",
                  "de": "Zu viel Zucker hinzufügen",
                  "nl": "Te veel suiker toevoegen"
        },
        {
                  "en": "Poor quality cocoa beans",
                  "es": "Granos de cacao de mala calidad",
                  "de": "Schlechte Qualität der Kakaobohnen",
                  "nl": "Slechte kwaliteit cacaobonen"
        },
        {
                  "en": "Exposure to light",
                  "es": "Exposición a la luz",
                  "de": "Lichtexposition",
                  "nl": "Blootstelling aan licht"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Fat bloom occurs when temperature changes cause cocoa butter to melt and recrystallize on the surface, creating a white, cloudy appearance.",
                  "es": "El bloom de grasa ocurre cuando cambios de temperatura causan que la manteca de cacao se derrita y recristalice en la superficie, creando una apariencia blanca y nublada.",
                  "de": "Fettreif tritt auf, wenn Temperaturwechsel Kakaobutter zum Schmelzen und Rekristallisieren auf der Oberfläche bringen, was ein weißes, trübes Aussehen erzeugt.",
                  "nl": "Vetbloei ontstaat wanneer temperatuurveranderingen ervoor zorgen dat cacaoboter smelt en herkristal­liseert op het oppervlak, wat een wit, troebel uiterlijk creëert."
        }
      },
      {
        question: {
                  "en": "What is the difference between cocoa butter and cocoa solids in chocolate composition?",
                  "es": "¿Cuál es la diferencia entre manteca de cacao y sólidos de cacao en la composición del chocolate?",
                  "de": "Was ist der Unterschied zwischen Kakaobutter und Kakaofeststoffen in der Schokoladenzusammensetzung?",
                  "nl": "Wat is het verschil tussen cacaoboter en cacaobestanddelen in chocoladesamenstelling?"
        },
        options: [
        {
                  "en": "They are the same thing",
                  "es": "Son la misma cosa",
                  "de": "Sie sind dasselbe",
                  "nl": "Ze zijn hetzelfde"
        },
        {
                  "en": "Cocoa butter adds color",
                  "es": "La manteca de cacao agrega color",
                  "de": "Kakaobutter fügt Farbe hinzu",
                  "nl": "Cacaoboter voegt kleur toe"
        },
        {
                  "en": "Cocoa butter provides texture and mouthfeel, cocoa solids provide flavor",
                  "es": "Manteca de cacao proporciona textura y sensación bucal, sólidos de cacao proporcionan sabor",
                  "de": "Kakaobutter bietet Textur und Mundgefühl, Kakaofeststoffe bieten Geschmack",
                  "nl": "Cacaoboter zorgt voor textuur en mondgevoel, cacaobestanddelen zorgen voor smaak"
        },
        {
                  "en": "Cocoa solids provide sweetness only",
                  "es": "Los sólidos de cacao solo proporcionan dulzura",
                  "de": "Kakaofeststoffe bieten nur Süße",
                  "nl": "Cacaobestanddelen zorgen alleen voor zoetheid"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Cocoa butter is the fat component that provides smooth texture and melt-in-mouth quality, while cocoa solids contain the flavor compounds and give chocolate its taste.",
                  "es": "La manteca de cacao es el componente graso que proporciona textura suave y calidad de derretirse en la boca, mientras que los sólidos de cacao contienen compuestos de sabor y dan al chocolate su sabor.",
                  "de": "Kakaobutter ist die Fettkomponente, die glatte Textur und Schmelz-im-Mund-Qualität bietet, während Kakaofeststoffe die Geschmacksverbindungen enthalten und Schokolade ihren Geschmack geben.",
                  "nl": "Cacaoboter is de vetcomponent die gladde textuur en smelt-in-de-mond kwaliteit biedt, terwijl cacaobestanddelen de smaakverbindingen bevatten en chocolade zijn smaak geven."
        }
      },
      {
        question: {
                  "en": "What technique is used to create chocolate decorations with precise patterns?",
                  "es": "¿Qué técnica se usa para crear decoraciones de chocolate con patrones precisos?",
                  "de": "Welche Technik wird verwendet, um Schokoladendekorationen mit präzisen Mustern zu erstellen?",
                  "nl": "Welke techniek wordt gebruikt om chocoladedecoraties met precieze patronen te maken?"
        },
        options: [
        {
                  "en": "Using textured molds or transfer sheets",
                  "es": "Usar moldes texturizados u hojas de transferencia",
                  "de": "Verwendung strukturierter Formen oder Transferfolien",
                  "nl": "Gebruik van getextureerde vormen of transfervellen"
        },
        {
                  "en": "Adding food coloring",
                  "es": "Agregar colorante alimentario",
                  "de": "Lebensmittelfarbe hinzufügen",
                  "nl": "Voedselkleurstof toevoegen"
        },
        {
                  "en": "Freezing the chocolate",
                  "es": "Congelar el chocolate",
                  "de": "Die Schokolade einfrieren",
                  "nl": "De chocolade bevriezen"
        },
        {
                  "en": "Hand painting only",
                  "es": "Solo pintar a mano",
                  "de": "Nur Handbemalung",
                  "nl": "Alleen handmatig schilderen"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Textured molds and transfer sheets allow chocolatiers to create precise patterns, designs, and textures on chocolate surfaces for professional-quality decorations.",
                  "es": "Los moldes texturizados y hojas de transferencia permiten a los chocolateros crear patrones, diseños y texturas precisos en superficies de chocolate para decoraciones de calidad profesional.",
                  "de": "Strukturierte Formen und Transferfolien ermöglichen es Chocolatiers, präzise Muster, Designs und Texturen auf Schokoladenoberflächen für professionelle Dekorationen zu erstellen.",
                  "nl": "Getextureerde vormen en transfervellen stellen chocolatiers in staat om precieze patronen, ontwerpen en texturen op chocolade oppervlakken te creëren voor professionele decoraties."
        }
      },
      {
        question: {
                  "en": "What is the purpose of using cocoa butter in chocolate ganache?",
                  "es": "¿Cuál es el propósito de usar manteca de cacao en ganache de chocolate?",
                  "de": "Was ist der Zweck der Verwendung von Kakaobutter in Schokoladenganache?",
                  "nl": "Wat is het doel van het gebruik van cacaoboter in chocoladeganache?"
        },
        options: [
        {
                  "en": "Only adds sweetness",
                  "es": "Solo agrega dulzura",
                  "de": "Fügt nur Süße hinzu",
                  "nl": "Voegt alleen zoetheid toe"
        },
        {
                  "en": "Improves texture, stability, and extends shelf life",
                  "es": "Mejora textura, estabilidad y extiende vida útil",
                  "de": "Verbessert Textur, Stabilität und verlängert Haltbarkeit",
                  "nl": "Verbetert textuur, stabiliteit en verlengt houdbaarheid"
        },
        {
                  "en": "Changes the color",
                  "es": "Cambia el color",
                  "de": "Ändert die Farbe",
                  "nl": "Verandert de kleur"
        },
        {
                  "en": "Makes it harder",
                  "es": "Lo hace más duro",
                  "de": "Macht es härter",
                  "nl": "Maakt het harder"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Cocoa butter in ganache improves texture, provides stability at room temperature, enhances mouthfeel, and extends shelf life by preventing separation.",
                  "es": "La manteca de cacao en ganache mejora la textura, proporciona estabilidad a temperatura ambiente, mejora la sensación bucal y extiende la vida útil previniendo separación.",
                  "de": "Kakaobutter in Ganache verbessert die Textur, bietet Stabilität bei Raumtemperatur, verbessert das Mundgefühl und verlängert die Haltbarkeit durch Verhinderung von Trennung.",
                  "nl": "Cacaoboter in ganache verbetert textuur, zorgt voor stabiliteit op kamertemperatuur, verbetert mondgevoel en verlengt houdbaarheid door scheiding te voorkomen."
        }
      },
      {
        question: {
                  "en": "What is the purpose of enrobing in chocolate confectionery?",
                  "es": "¿Cuál es el propósito del enbañado en confitería de chocolate?",
                  "de": "Was ist der Zweck des Überziehens in der Schokoladenkonditorei?",
                  "nl": "Wat is het doel van het omsluiten in chocoladeconfectie?"
        },
        options: [
        {
                  "en": "Making chocolates larger",
                  "es": "Hacer chocolates más grandes",
                  "de": "Schokoladen größer machen",
                  "nl": "Chocolaatjes groter maken"
        },
        {
                  "en": "Completely coating centers with a thin, even layer of chocolate",
                  "es": "Cubrir completamente centros con una capa delgada y uniforme de chocolate",
                  "de": "Zentren vollständig mit einer dünnen, gleichmäßigen Schokoladenschicht überziehen",
                  "nl": "Centra volledig bedekken met een dunne, gelijkmatige laag chocolade"
        },
        {
                  "en": "Changing the shape",
                  "es": "Cambiar la forma",
                  "de": "Die Form ändern",
                  "nl": "De vorm veranderen"
        },
        {
                  "en": "Adding flavor only",
                  "es": "Solo agregar sabor",
                  "de": "Nur Geschmack hinzufügen",
                  "nl": "Alleen smaak toevoegen"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Enrobing is the process of completely coating confectionery centers with a thin, even layer of tempered chocolate to provide protection, flavor, and professional appearance.",
                  "es": "El enbañado es el proceso de cubrir completamente centros de confitería con una capa delgada y uniforme de chocolate templado para proporcionar protección, sabor y apariencia profesional.",
                  "de": "Überziehen ist der Prozess des vollständigen Überzugs von Konfekt-Zentren mit einer dünnen, gleichmäßigen Schicht temperierter Schokolade für Schutz, Geschmack und professionelles Aussehen.",
                  "nl": "Omsluiten is het proces van het volledig bedekken van confectiecentra met een dunne, gelijkmatige laag getemperde chocolade voor bescherming, smaak en professioneel uiterlijk."
        }
      },
      {
        question: {
                  "en": "What is the difference between compound chocolate and real chocolate?",
                  "es": "¿Cuál es la diferencia entre chocolate compuesto y chocolate real?",
                  "de": "Was ist der Unterschied zwischen Compound-Schokolade und echter Schokolade?",
                  "nl": "Wat is het verschil tussen compound chocolade en echte chocolade?"
        },
        options: [
        {
                  "en": "Compound is always darker",
                  "es": "Compuesto siempre es más oscuro",
                  "de": "Compound ist immer dunkler",
                  "nl": "Compound is altijd donkerder"
        },
        {
                  "en": "No difference",
                  "es": "No hay diferencia",
                  "de": "Kein Unterschied",
                  "nl": "Geen verschil"
        },
        {
                  "en": "Compound uses vegetable fats instead of cocoa butter",
                  "es": "Compuesto usa grasas vegetales en lugar de manteca de cacao",
                  "de": "Compound verwendet pflanzliche Fette statt Kakaobutter",
                  "nl": "Compound gebruikt plantaardige vetten in plaats van cacaoboter"
        },
        {
                  "en": "Real chocolate contains no cocoa",
                  "es": "Chocolate real no contiene cacao",
                  "de": "Echte Schokolade enthält keinen Kakao",
                  "nl": "Echte chocolade bevat geen cacao"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Compound chocolate uses vegetable fats instead of cocoa butter, making it easier to work with but lacking the superior flavor and texture of real chocolate.",
                  "es": "El chocolate compuesto usa grasas vegetales en lugar de manteca de cacao, haciéndolo más fácil de trabajar pero carece del sabor y textura superiores del chocolate real.",
                  "de": "Compound-Schokolade verwendet pflanzliche Fette statt Kakaobutter, was sie einfacher zu verarbeiten macht, aber den überlegenen Geschmack und die Textur echter Schokolade vermissen lässt.",
                  "nl": "Compound chocolade gebruikt plantaardige vetten in plaats van cacaoboter, waardoor het gemakkelijker te bewerken is maar de superieure smaak en textuur van echte chocolade mist."
        }
      },
      {
        question: {
                  "en": "What is the purpose of adding lecithin to chocolate during production?",
                  "es": "¿Cuál es el propósito de agregar lecitina al chocolate durante la producción?",
                  "de": "Was ist der Zweck der Zugabe von Lecithin zur Schokolade während der Produktion?",
                  "nl": "Wat is het doel van het toevoegen van lecithine aan chocolade tijdens productie?"
        },
        options: [
        {
                  "en": "Changes color",
                  "es": "Cambia el color",
                  "de": "Ändert die Farbe",
                  "nl": "Verandert de kleur"
        },
        {
                  "en": "Preserves freshness only",
                  "es": "Solo preserva frescura",
                  "de": "Bewahrt nur Frische",
                  "nl": "Behoudt alleen versheid"
        },
        {
                  "en": "Acts as an emulsifier to improve viscosity and workability",
                  "es": "Actúa como emulsificante para mejorar viscosidad y trabajabilidad",
                  "de": "Wirkt als Emulgator zur Verbesserung von Viskosität und Verarbeitbarkeit",
                  "nl": "Werkt als emulgator om viscositeit en bewerkbaarheid te verbeteren"
        },
        {
                  "en": "Adds sweetness",
                  "es": "Agrega dulzura",
                  "de": "Fügt Süße hinzu",
                  "nl": "Voegt zoetheid toe"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Lecithin acts as an emulsifier in chocolate, reducing viscosity, improving flow properties, and making the chocolate easier to work with in molding and coating applications.",
                  "es": "La lecitina actúa como emulsificante en el chocolate, reduciendo viscosidad, mejorando propiedades de flujo y haciendo el chocolate más fácil de trabajar en aplicaciones de moldeado y cobertura.",
                  "de": "Lecithin wirkt als Emulgator in Schokolade, reduziert Viskosität, verbessert Fließeigenschaften und macht die Schokolade einfacher zu verarbeiten in Form- und Überzugsanwendungen.",
                  "nl": "Lecithine werkt als emulgator in chocolade, vermindert viscositeit, verbetert vloeieigenschappen en maakt chocolade gemakkelijker te bewerken in vorm- en coatingtoepassingen."
        }
      },
      {
        question: {
                  "en": "What technique creates the signature texture of chocolate truffles?",
                  "es": "¿Qué técnica crea la textura característica de las trufas de chocolate?",
                  "de": "Welche Technik erzeugt die charakteristische Textur von Schokoladentrüffeln?",
                  "nl": "Welke techniek creëert de kenmerkende textuur van chocoladetruffels?"
        },
        options: [
        {
                  "en": "Adding nuts only",
                  "es": "Solo agregar nueces",
                  "de": "Nur Nüsse hinzufügen",
                  "nl": "Alleen noten toevoegen"
        },
        {
                  "en": "Creating ganache centers and rolling in cocoa powder or coating",
                  "es": "Crear centros de ganache y enrollar en cacao en polvo o cobertura",
                  "de": "Ganache-Zentren erstellen und in Kakaopulver oder Überzug rollen",
                  "nl": "Ganache centra maken en rollen in cacaopoeder of coating"
        },
        {
                  "en": "Freezing the mixture",
                  "es": "Congelar la mezcla",
                  "de": "Die Mischung einfrieren",
                  "nl": "Het mengsel bevriezen"
        },
        {
                  "en": "Using only solid chocolate",
                  "es": "Usar solo chocolate sólido",
                  "de": "Nur feste Schokolade verwenden",
                  "nl": "Alleen vaste chocolade gebruiken"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Chocolate truffles get their signature texture from soft ganache centers that melt in the mouth, often rolled in cocoa powder or coated in chocolate for contrast.",
                  "es": "Las trufas de chocolate obtienen su textura característica de centros de ganache suaves que se derriten en la boca, a menudo enrolladas en cacao en polvo o cubiertas con chocolate para contraste.",
                  "de": "Schokoladentrüffel erhalten ihre charakteristische Textur durch weiche Ganache-Zentren, die im Mund schmelzen, oft in Kakaopulver gerollt oder mit Schokolade überzogen für Kontrast.",
                  "nl": "Chocoladetruffels krijgen hun kenmerkende textuur van zachte ganache centra die in de mond smelten, vaak gerold in cacaopoeder of bedekt met chocolade voor contrast."
        }
      },
      {
        question: {
                  "en": "What is the purpose of pre-crystallization in chocolate tempering?",
                  "es": "¿Cuál es el propósito de la pre-cristalización en el templado de chocolate?",
                  "de": "Was ist der Zweck der Vorkristallisation beim Schokoladentemperieren?",
                  "nl": "Wat is het doel van pre-kristallisatie bij chocolade tempereren?"
        },
        options: [
        {
                  "en": "Only changes flavor",
                  "es": "Solo cambia el sabor",
                  "de": "Ändert nur den Geschmack",
                  "nl": "Verandert alleen de smaak"
        },
        {
                  "en": "Creates stable crystal seeds for proper chocolate setting",
                  "es": "Crea semillas de cristal estables para cuajado apropiado del chocolate",
                  "de": "Erzeugt stabile Kristallkeime für richtiges Schokoladensetzen",
                  "nl": "Creëert stabiele kristalzaden voor juiste chocoladestolling"
        },
        {
                  "en": "Speeds up melting",
                  "es": "Acelera el derretimiento",
                  "de": "Beschleunigt das Schmelzen",
                  "nl": "Versnelt het smelten"
        },
        {
                  "en": "Makes chocolate sweeter",
                  "es": "Hace el chocolate más dulce",
                  "de": "Macht Schokolade süßer",
                  "nl": "Maakt chocolade zoeter"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Pre-crystallization creates stable crystal seeds (Form V) that serve as templates for proper crystal formation throughout the chocolate, ensuring good snap, gloss, and stability.",
                  "es": "La pre-cristalización crea semillas de cristal estables (Forma V) que sirven como plantillas para formación de cristal apropiada en todo el chocolate, asegurando buen chasquido, brillo y estabilidad.",
                  "de": "Vorkristallisation erzeugt stabile Kristallkeime (Form V), die als Vorlagen für richtige Kristallbildung in der gesamten Schokolade dienen und guten Knack, Glanz und Stabilität gewährleisten.",
                  "nl": "Pre-kristallisatie creëert stabiele kristalzaden (Vorm V) die dienen als sjablonen voor juiste kristalvorming door de chocolade, wat goede knak, glans en stabiliteit verzekert."
        }
      },
      {
        question: {
                  "en": "What causes 'sugar bloom' on chocolate and how does it differ from fat bloom?",
                  "es": "¿Qué causa el 'bloom de azúcar' en el chocolate y cómo difiere del bloom de grasa?",
                  "de": "Was verursacht 'Zuckerreif' auf Schokolade und wie unterscheidet er sich von Fettreif?",
                  "nl": "Wat veroorzaakt 'suikerbloei' op chocolade en hoe verschilt het van vetbloei?"
        },
        options: [
        {
                  "en": "Moisture dissolving sugar crystals; sugar bloom feels rough, fat bloom feels smooth",
                  "es": "Humedad disolviendo cristales de azúcar; bloom de azúcar se siente rugoso, bloom de grasa se siente suave",
                  "de": "Feuchtigkeit löst Zuckerkristalle; Zuckerreif fühlt sich rau an, Fettreif fühlt sich glatt an",
                  "nl": "Vocht lost suikerkristallen op; suikerbloei voelt ruw, vetbloei voelt glad"
        },
        {
                  "en": "Sugar bloom is always smooth",
                  "es": "Bloom de azúcar siempre es suave",
                  "de": "Zuckerreif ist immer glatt",
                  "nl": "Suikerbloei is altijd glad"
        },
        {
                  "en": "They are the same thing",
                  "es": "Son la misma cosa",
                  "de": "Sie sind dasselbe",
                  "nl": "Ze zijn hetzelfde"
        },
        {
                  "en": "Both are caused by temperature only",
                  "es": "Ambos son causados solo por temperatura",
                  "de": "Beide werden nur durch Temperatur verursacht",
                  "nl": "Beide worden alleen door temperatuur veroorzaakt"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Sugar bloom occurs when moisture dissolves surface sugar, which then recrystallizes, creating a rough, gritty texture. Fat bloom from temperature changes feels smooth and looks grayish-white.",
                  "es": "El bloom de azúcar ocurre cuando la humedad disuelve azúcar superficial, que luego recristaliza, creando textura rugosa y arenosa. El bloom de grasa por cambios de temperatura se siente suave y se ve gris-blanco.",
                  "de": "Zuckerreif tritt auf, wenn Feuchtigkeit Oberflächenzucker löst, der dann rekristallisiert und eine raue, körnige Textur erzeugt. Fettreif durch Temperaturschwankungen fühlt sich glatt an und sieht gräulich-weiß aus.",
                  "nl": "Suikerbloei ontstaat wanneer vocht oppervlaktesuiker oplost, dat dan herkristalliseert en een ruwe, korrelige textuur creëert. Vetbloei door temperatuurveranderingen voelt glad aan en ziet er grijsachtig-wit uit."
        }
      },
      {
        question: {
                  "en": "What is the ideal humidity level for storing finished chocolate products?",
                  "es": "¿Cuál es el nivel ideal de humedad para almacenar productos de chocolate terminados?",
                  "de": "Was ist die ideale Luftfeuchtigkeit für die Lagerung fertiger Schokoladenprodukte?",
                  "nl": "Wat is het ideale vochtigheidsniveau voor het opslaan van afgewerkte chocoladeproducten?"
        },
        options: [
        {
                  "en": "Humidity doesn't matter",
                  "es": "La humedad no importa",
                  "de": "Luftfeuchtigkeit spielt keine Rolle",
                  "nl": "Vochtigheid maakt niet uit"
        },
        {
                  "en": "70-80% relative humidity",
                  "es": "70-80% humedad relativa",
                  "de": "70-80% relative Luftfeuchtigkeit",
                  "nl": "70-80% relatieve vochtigheid"
        },
        {
                  "en": "90-100% relative humidity",
                  "es": "90-100% humedad relativa",
                  "de": "90-100% relative Luftfeuchtigkeit",
                  "nl": "90-100% relatieve vochtigheid"
        },
        {
                  "en": "Below 50% relative humidity",
                  "es": "Menos de 50% humedad relativa",
                  "de": "Unter 50% relative Luftfeuchtigkeit",
                  "nl": "Onder 50% relatieve vochtigheid"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Chocolate should be stored below 50% relative humidity to prevent sugar bloom formation and maintain quality. Higher humidity can cause sugar dissolution and recrystallization.",
                  "es": "El chocolate debe almacenarse con menos de 50% humedad relativa para prevenir formación de bloom de azúcar y mantener calidad. Mayor humedad puede causar disolución y recristalización del azúcar.",
                  "de": "Schokolade sollte unter 50% relativer Luftfeuchtigkeit gelagert werden, um Zuckerreifbildung zu verhindern und Qualität zu erhalten. Höhere Feuchtigkeit kann Zuckerauflösung und Rekristallisation verursachen.",
                  "nl": "Chocolade moet worden opgeslagen onder 50% relatieve vochtigheid om suikerbloei vorming te voorkomen en kwaliteit te behouden. Hogere vochtigheid kan suikeroplosing en herkristallisatie veroorzaken."
        }
      },
      {
        question: {
                  "en": "What is the purpose of using invert sugar in chocolate ganache?",
                  "es": "¿Cuál es el propósito de usar azúcar invertido en ganache de chocolate?",
                  "de": "Was ist der Zweck der Verwendung von Invertzucker in Schokoladenganache?",
                  "nl": "Wat is het doel van het gebruik van invertsuiker in chocoladeganache?"
        },
        options: [
        {
                  "en": "Prevents crystallization and maintains smooth texture",
                  "es": "Previene cristalización y mantiene textura suave",
                  "de": "Verhindert Kristallisation und erhält glatte Textur",
                  "nl": "Voorkomt kristallisatie en behoudt gladde textuur"
        },
        {
                  "en": "Only adds sweetness",
                  "es": "Solo agrega dulzura",
                  "de": "Fügt nur Süße hinzu",
                  "nl": "Voegt alleen zoetheid toe"
        },
        {
                  "en": "Changes the color",
                  "es": "Cambia el color",
                  "de": "Ändert die Farbe",
                  "nl": "Verandert de kleur"
        },
        {
                  "en": "Makes it set faster",
                  "es": "Hace que cuaje más rápido",
                  "de": "Lässt es schneller setzen",
                  "nl": "Laat het sneller stollen"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Invert sugar in ganache prevents crystallization, maintains smooth texture, and helps retain moisture, resulting in better shelf stability and mouthfeel.",
                  "es": "El azúcar invertido en ganache previene cristalización, mantiene textura suave y ayuda a retener humedad, resultando en mejor estabilidad de almacenamiento y sensación bucal.",
                  "de": "Invertzucker in Ganache verhindert Kristallisation, erhält glatte Textur und hilft Feuchtigkeit zu behalten, was zu besserer Lagerstabilität und Mundgefühl führt.",
                  "nl": "Invertsuiker in ganache voorkomt kristallisatie, behoudt gladde textuur en helpt vocht vast te houden, wat resulteert in betere opslagstabiliteit en mondgevoel."
        }
      },
      {
        question: {
                  "en": "What technique is used to create hollow chocolate figures?",
                  "es": "¿Qué técnica se usa para crear figuras de chocolate huecas?",
                  "de": "Welche Technik wird verwendet, um hohle Schokoladenfiguren zu erstellen?",
                  "nl": "Welke techniek wordt gebruikt om holle chocoladefiguren te maken?"
        },
        options: [
        {
                  "en": "Molding with tempered chocolate and removing excess",
                  "es": "Moldear con chocolate templado y remover exceso",
                  "de": "Formen mit temperierter Schokolade und Überschuss entfernen",
                  "nl": "Vormen met getemperde chocolade en overtollige weghalen"
        },
        {
                  "en": "Carving solid chocolate",
                  "es": "Tallar chocolate sólido",
                  "de": "Feste Schokolade schnitzen",
                  "nl": "Vaste chocolade snijden"
        },
        {
                  "en": "Using only compound chocolate",
                  "es": "Usar solo chocolate compuesto",
                  "de": "Nur Compound-Schokolade verwenden",
                  "nl": "Alleen compound chocolade gebruiken"
        },
        {
                  "en": "Freezing liquid chocolate",
                  "es": "Congelar chocolate líquido",
                  "de": "Flüssige Schokolade einfrieren",
                  "nl": "Vloeibare chocolade bevriezen"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Hollow chocolate figures are created by coating the inside of molds with tempered chocolate, allowing it to set, then removing excess to create thin walls.",
                  "es": "Las figuras de chocolate huecas se crean cubriendo el interior de moldes con chocolate templado, permitiendo que cuaje, luego removiendo exceso para crear paredes delgadas.",
                  "de": "Hohle Schokoladenfiguren werden erstellt, indem das Innere von Formen mit temperierter Schokolade beschichtet, es setzen gelassen und dann Überschuss entfernt wird, um dünne Wände zu schaffen.",
                  "nl": "Holle chocoladefiguren worden gemaakt door de binnenkant van vormen te bedekken met getemperde chocolade, het te laten stollen, dan overtollige weg te halen om dunne wanden te creëren."
        }
      },
      {
        question: {
                  "en": "What is the optimal working temperature for white chocolate?",
                  "es": "¿Cuál es la temperatura de trabajo óptima para chocolate blanco?",
                  "de": "Was ist die optimale Arbeitstemperatur für weiße Schokolade?",
                  "nl": "Wat is de optimale werktemperatuur voor witte chocolade?"
        },
        options: [
        {
                  "en": "26-28°C (79-82°F)",
                  "es": "26-28°C",
                  "de": "26-28°C",
                  "nl": "26-28°C"
        },
        {
                  "en": "20-22°C (68-72°F)",
                  "es": "20-22°C",
                  "de": "20-22°C",
                  "nl": "20-22°C"
        },
        {
                  "en": "35-40°C (95-104°F)",
                  "es": "35-40°C",
                  "de": "35-40°C",
                  "nl": "35-40°C"
        },
        {
                  "en": "31-32°C (88-90°F)",
                  "es": "31-32°C",
                  "de": "31-32°C",
                  "nl": "31-32°C"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "White chocolate has a lower working temperature (26-28°C) than dark chocolate due to its different composition and melting characteristics.",
                  "es": "El chocolate blanco tiene una temperatura de trabajo más baja (26-28°C) que el chocolate negro debido a su diferente composición y características de derretimiento.",
                  "de": "Weiße Schokolade hat eine niedrigere Arbeitstemperatur (26-28°C) als dunkle Schokolade aufgrund ihrer unterschiedlichen Zusammensetzung und Schmelzeigenschaften.",
                  "nl": "Witte chocolade heeft een lagere werktemperatuur (26-28°C) dan pure chocolade vanwege zijn verschillende samenstelling en smelteigenschappen."
        }
      },
      {
        question: {
                  "en": "What creates the 'snap' in properly tempered chocolate?",
                  "es": "¿Qué crea el 'chasquido' en chocolate apropiadamente templado?",
                  "de": "Was erzeugt das 'Knacken' in richtig temperierter Schokolade?",
                  "nl": "Wat creëert de 'knak' in goed getemperde chocolade?"
        },
        options: [
        {
                  "en": "High sugar content",
                  "es": "Alto contenido de azúcar",
                  "de": "Hoher Zuckergehalt",
                  "nl": "Hoog suikergehalte"
        },
        {
                  "en": "Stable crystal structure (Form V) contracting as it sets",
                  "es": "Estructura cristalina estable (Forma V) contrayéndose al cuajar",
                  "de": "Stabile Kristallstruktur (Form V), die sich beim Setzen zusammenzieht",
                  "nl": "Stabiele kristalstructuur (Vorm V) die samentrekt tijdens stollen"
        },
        {
                  "en": "Adding extra cocoa butter",
                  "es": "Agregar manteca de cacao extra",
                  "de": "Extra Kakaobutter hinzufügen",
                  "nl": "Extra cacaoboter toevoegen"
        },
        {
                  "en": "Cold storage only",
                  "es": "Solo almacenamiento frío",
                  "de": "Nur kalte Lagerung",
                  "nl": "Alleen koude opslag"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "The characteristic 'snap' of well-tempered chocolate comes from stable Form V crystal structures that contract properly as they set, creating a crisp break.",
                  "es": "El 'chasquido' característico del chocolate bien templado viene de estructuras cristalinas estables Forma V que se contraen apropiadamente al cuajar, creando una rotura crujiente.",
                  "de": "Das charakteristische 'Knacken' von gut temperierter Schokolade kommt von stabilen Form-V-Kristallstrukturen, die sich beim Setzen richtig zusammenziehen und einen knackigen Bruch erzeugen.",
                  "nl": "De karakteristieke 'knak' van goed getemperde chocolade komt van stabiele Vorm V kristalstructuren die goed samentrekken tijdens het stollen, wat een knapperige breuk creëert."
        }
      },
      {
        question: {
                  "en": "What is the difference between single-origin and blended chocolate?",
                  "es": "¿Cuál es la diferencia entre chocolate de origen único y chocolate mezclado?",
                  "de": "Was ist der Unterschied zwischen Single-Origin- und gemischter Schokolade?",
                  "nl": "Wat is het verschil tussen single-origin en gemengde chocolade?"
        },
        options: [
        {
                  "en": "Blended chocolate is artificial",
                  "es": "Chocolate mezclado es artificial",
                  "de": "Gemischte Schokolade ist künstlich",
                  "nl": "Gemengde chocolade is kunstmatig"
        },
        {
                  "en": "Single-origin is always darker",
                  "es": "Origen único siempre es más oscuro",
                  "de": "Single-Origin ist immer dunkler",
                  "nl": "Single-origin is altijd donkerder"
        },
        {
                  "en": "No difference in taste",
                  "es": "No hay diferencia en sabor",
                  "de": "Kein Geschmacksunterschied",
                  "nl": "Geen verschil in smaak"
        },
        {
                  "en": "Single-origin uses beans from one location, blended combines multiple origins",
                  "es": "Origen único usa granos de una ubicación, mezclado combina múltiples orígenes",
                  "de": "Single-Origin verwendet Bohnen von einem Ort, gemischt kombiniert mehrere Herkünfte",
                  "nl": "Single-origin gebruikt bonen van één locatie, gemengd combineert meerdere oorsprongen"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Single-origin chocolate uses cocoa beans from one specific region or farm, showcasing unique terroir flavors, while blended chocolate combines beans from multiple origins for balanced, consistent flavor profiles.",
                  "es": "El chocolate de origen único usa granos de cacao de una región específica o granja, mostrando sabores únicos de terroir, mientras que el chocolate mezclado combina granos de múltiples orígenes para perfiles de sabor equilibrados y consistentes.",
                  "de": "Single-Origin-Schokolade verwendet Kakaobohnen von einer bestimmten Region oder Farm und zeigt einzigartige Terroir-Aromen, während gemischte Schokolade Bohnen aus mehreren Herkünften für ausgewogene, konsistente Geschmacksprofile kombiniert.",
                  "nl": "Single-origin chocolade gebruikt cacaobonen van één specifieke regio of boerderij, wat unieke terroir smaken toont, terwijl gemengde chocolade bonen van meerdere oorsprongen combineert voor gebalanceerde, consistente smaakprofielen."
        }
      },
      {
        question: {
                  "en": "What causes chocolate to 'seize' and how can it be prevented?",
                  "es": "¿Qué causa que el chocolate se 'endurezca' y cómo se puede prevenir?",
                  "de": "Was bewirkt, dass Schokolade 'fest wird' und wie kann es verhindert werden?",
                  "nl": "Wat zorgt ervoor dat chocolade 'vastloopt' en hoe kan dit worden voorkomen?"
        },
        options: [
        {
                  "en": "Too much heat causes seizing",
                  "es": "Demasiado calor causa endurecimiento",
                  "de": "Zu viel Hitze verursacht Festwerden",
                  "nl": "Te veel hitte veroorzaakt vastlopen"
        },
        {
                  "en": "Seizing cannot be prevented",
                  "es": "El endurecimiento no se puede prevenir",
                  "de": "Festwerden kann nicht verhindert werden",
                  "nl": "Vastlopen kan niet worden voorkomen"
        },
        {
                  "en": "Using dark chocolate causes seizing",
                  "es": "Usar chocolate negro causa endurecimiento",
                  "de": "Dunkle Schokolade verwenden verursacht Festwerden",
                  "nl": "Pure chocolade gebruiken veroorzaakt vastlopen"
        },
        {
                  "en": "Water contact causes seizing; prevent by keeping everything dry",
                  "es": "Contacto con agua causa endurecimiento; prevenir manteniendo todo seco",
                  "de": "Wasserkontakt verursacht Festwerden; verhindern durch Trockenhalten",
                  "nl": "Watercontact veroorzaakt vastlopen; voorkomen door alles droog te houden"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Chocolate seizes when water comes into contact with melted chocolate, causing it to become thick and grainy. Prevention requires keeping all utensils and ingredients completely dry.",
                  "es": "El chocolate se endurece cuando agua entra en contacto con chocolate derretido, haciéndolo espeso y granuloso. La prevención requiere mantener todos los utensilios e ingredientes completamente secos.",
                  "de": "Schokolade wird fest, wenn Wasser mit geschmolzener Schokolade in Kontakt kommt, wodurch sie dick und körnig wird. Vorbeugung erfordert, alle Utensilien und Zutaten völlig trocken zu halten.",
                  "nl": "Chocolade loopt vast wanneer water in contact komt met gesmolten chocolade, waardoor het dik en korrelig wordt. Preventie vereist dat alle keukengerei en ingrediënten volledig droog blijven."
        }
      },
      {
        question: {
                  "en": "What is the difference between chocolate couverture and regular baking chocolate?",
                  "es": "¿Cuál es la diferencia entre cobertura de chocolate y chocolate para hornear regular?",
                  "de": "Was ist der Unterschied zwischen Kuvertüre und normaler Backschokolade?",
                  "nl": "Wat is het verschil tussen couverture chocolade en gewone bakchocolade?"
        },
        options: [
        {
                  "en": "Couverture is always darker",
                  "es": "La cobertura siempre es más oscura",
                  "de": "Kuvertüre ist immer dunkler",
                  "nl": "Couverture is altijd donkerder"
        },
        {
                  "en": "Couverture has higher cocoa butter content",
                  "es": "La cobertura tiene mayor contenido de manteca de cacao",
                  "de": "Kuvertüre hat einen höheren Kakaobuttergehalt",
                  "nl": "Couverture heeft een hoger cacaobotergehalte"
        },
        {
                  "en": "Couverture contains more sugar",
                  "es": "La cobertura contiene más azúcar",
                  "de": "Kuvertüre enthält mehr Zucker",
                  "nl": "Couverture bevat meer suiker"
        },
        {
                  "en": "No difference in composition",
                  "es": "No hay diferencia en composición",
                  "de": "Kein Unterschied in der Zusammensetzung",
                  "nl": "Geen verschil in samenstelling"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Couverture chocolate contains a higher percentage of cocoa butter (31-39%), giving it superior flow properties for coating and tempering applications.",
                  "es": "El chocolate de cobertura contiene un mayor porcentaje de manteca de cacao (31-39%), dándole propiedades de flujo superiores para aplicaciones de cobertura y templado.",
                  "de": "Kuvertüre enthält einen höheren Anteil an Kakaobutter (31-39%), was ihr überlegene Fließeigenschaften für Überzugs- und Temperieranwendungen verleiht.",
                  "nl": "Couverture chocolade bevat een hoger percentage cacaoboter (31-39%), wat superieure vloeieigenschappen geeft voor coating en tempereer toepassingen."
        }
      },
      {
        question: {
                  "en": "What is ganache made from?",
                  "es": "What is ganache made from?",
                  "de": "What is ganache made from?",
                  "nl": "What is ganache made from?"
        },
        options: [
        {
                  "en": "Chocolate and butter",
                  "es": "Chocolate and butter",
                  "de": "Chocolate and butter",
                  "nl": "Chocolate and butter"
        },
        {
                  "en": "Chocolate and eggs",
                  "es": "Chocolate and eggs",
                  "de": "Chocolate and eggs",
                  "nl": "Chocolate and eggs"
        },
        {
                  "en": "Chocolate and cream",
                  "es": "Chocolate and cream",
                  "de": "Chocolate and cream",
                  "nl": "Chocolate and cream"
        },
        {
                  "en": "Chocolate and milk",
                  "es": "Chocolate and milk",
                  "de": "Chocolate and milk",
                  "nl": "Chocolate and milk"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Ganache is made from chocolate and heavy cream, used for glazes, fillings, and truffles.",
                  "es": "Ganache is made from chocolate and heavy cream, used for glazes, fillings, and truffles.",
                  "de": "Ganache is made from chocolate and heavy cream, used for glazes, fillings, and truffles.",
                  "nl": "Ganache is made from chocolate and heavy cream, used for glazes, fillings, and truffles."
        }
      },
      {
        question: {
                  "en": "What is tempering chocolate?",
                  "es": "What is tempering chocolate?",
                  "de": "What is tempering chocolate?",
                  "nl": "What is tempering chocolate?"
        },
        options: [
        {
                  "en": "Adding sugar",
                  "es": "Adding sugar",
                  "de": "Adding sugar",
                  "nl": "Adding sugar"
        },
        {
                  "en": "Melting chocolate",
                  "es": "Melting chocolate",
                  "de": "Melting chocolate",
                  "nl": "Melting chocolate"
        },
        {
                  "en": "Mixing chocolate flavors",
                  "es": "Mixing chocolate flavors",
                  "de": "Mixing chocolate flavors",
                  "nl": "Mixing chocolate flavors"
        },
        {
                  "en": "Heating and cooling for shine and snap",
                  "es": "Heating and cooling for shine and snap",
                  "de": "Heating and cooling for shine and snap",
                  "nl": "Heating and cooling for shine and snap"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Tempering chocolate involves carefully heating and cooling it to create stable crystals for a shiny appearance and crisp snap.",
                  "es": "Tempering chocolate involves carefully heating and cooling it to create stable crystals for a shiny appearance and crisp snap.",
                  "de": "Tempering chocolate involves carefully heating and cooling it to create stable crystals for a shiny appearance and crisp snap.",
                  "nl": "Tempering chocolate involves carefully heating and cooling it to create stable crystals for a shiny appearance and crisp snap."
        }
      },
      {
        question: {
                  "en": "What is a chocolate truffle?",
                  "es": "What is a chocolate truffle?",
                  "de": "What is a chocolate truffle?",
                  "nl": "What is a chocolate truffle?"
        },
        options: [
        {
                  "en": "Ganache ball coated in cocoa or chocolate",
                  "es": "Ganache ball coated in cocoa or chocolate",
                  "de": "Ganache ball coated in cocoa or chocolate",
                  "nl": "Ganache ball coated in cocoa or chocolate"
        },
        {
                  "en": "Chocolate mushroom",
                  "es": "Chocolate mushroom",
                  "de": "Chocolate mushroom",
                  "nl": "Chocolate mushroom"
        },
        {
                  "en": "Chocolate cake",
                  "es": "Chocolate cake",
                  "de": "Chocolate cake",
                  "nl": "Chocolate cake"
        },
        {
                  "en": "Chocolate cookie",
                  "es": "Chocolate cookie",
                  "de": "Chocolate cookie",
                  "nl": "Chocolate cookie"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "A chocolate truffle is a ball of chocolate ganache, often coated in cocoa powder, nuts, or tempered chocolate.",
                  "es": "A chocolate truffle is a ball of chocolate ganache, often coated in cocoa powder, nuts, or tempered chocolate.",
                  "de": "A chocolate truffle is a ball of chocolate ganache, often coated in cocoa powder, nuts, or tempered chocolate.",
                  "nl": "A chocolate truffle is a ball of chocolate ganache, often coated in cocoa powder, nuts, or tempered chocolate."
        }
      },
      {
        question: {
                  "en": "What is the difference between cocoa powder and cacao powder?",
                  "es": "What is the difference between cocoa powder and cacao powder?",
                  "de": "What is the difference between cocoa powder and cacao powder?",
                  "nl": "What is the difference between cocoa powder and cacao powder?"
        },
        options: [
        {
                  "en": "Color",
                  "es": "Color",
                  "de": "Color",
                  "nl": "Color"
        },
        {
                  "en": "Sugar content",
                  "es": "Sugar content",
                  "de": "Sugar content",
                  "nl": "Sugar content"
        },
        {
                  "en": "Country of origin",
                  "es": "Country of origin",
                  "de": "Country of origin",
                  "nl": "Country of origin"
        },
        {
                  "en": "Processing temperature",
                  "es": "Processing temperature",
                  "de": "Processing temperature",
                  "nl": "Processing temperature"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Cacao powder is raw and processed at low temperatures, while cocoa powder is roasted at higher temperatures.",
                  "es": "Cacao powder is raw and processed at low temperatures, while cocoa powder is roasted at higher temperatures.",
                  "de": "Cacao powder is raw and processed at low temperatures, while cocoa powder is roasted at higher temperatures.",
                  "nl": "Cacao powder is raw and processed at low temperatures, while cocoa powder is roasted at higher temperatures."
        }
      },
      {
        question: {
                  "en": "What is Dutch-process cocoa?",
                  "es": "What is Dutch-process cocoa?",
                  "de": "What is Dutch-process cocoa?",
                  "nl": "What is Dutch-process cocoa?"
        },
        options: [
        {
                  "en": "Natural cocoa",
                  "es": "Natural cocoa",
                  "de": "Natural cocoa",
                  "nl": "Natural cocoa"
        },
        {
                  "en": "White cocoa",
                  "es": "White cocoa",
                  "de": "White cocoa",
                  "nl": "White cocoa"
        },
        {
                  "en": "Cocoa from the Netherlands",
                  "es": "Cocoa from the Netherlands",
                  "de": "Cocoa from the Netherlands",
                  "nl": "Cocoa from the Netherlands"
        },
        {
                  "en": "Cocoa treated with alkali",
                  "es": "Cocoa treated with alkali",
                  "de": "Cocoa treated with alkali",
                  "nl": "Cocoa treated with alkali"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Dutch-process cocoa is treated with an alkalizing agent to neutralize acidity, creating a darker, milder flavor.",
                  "es": "Dutch-process cocoa is treated with an alkalizing agent to neutralize acidity, creating a darker, milder flavor.",
                  "de": "Dutch-process cocoa is treated with an alkalizing agent to neutralize acidity, creating a darker, milder flavor.",
                  "nl": "Dutch-process cocoa is treated with an alkalizing agent to neutralize acidity, creating a darker, milder flavor."
        }
      },
      {
        question: {
                  "en": "What is chocolate bloom?",
                  "es": "What is chocolate bloom?",
                  "de": "What is chocolate bloom?",
                  "nl": "What is chocolate bloom?"
        },
        options: [
        {
                  "en": "Chocolate flower decoration",
                  "es": "Chocolate flower decoration",
                  "de": "Chocolate flower decoration",
                  "nl": "Chocolate flower decoration"
        },
        {
                  "en": "Fat or sugar crystals on surface",
                  "es": "Fat or sugar crystals on surface",
                  "de": "Fat or sugar crystals on surface",
                  "nl": "Fat or sugar crystals on surface"
        },
        {
                  "en": "Chocolate mold",
                  "es": "Chocolate mold",
                  "de": "Chocolate mold",
                  "nl": "Chocolate mold"
        },
        {
                  "en": "Melting chocolate",
                  "es": "Melting chocolate",
                  "de": "Melting chocolate",
                  "nl": "Melting chocolate"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Bloom appears as white or gray streaks on chocolate caused by fat or sugar crystals separating and rising to the surface.",
                  "es": "Bloom appears as white or gray streaks on chocolate caused by fat or sugar crystals separating and rising to the surface.",
                  "de": "Bloom appears as white or gray streaks on chocolate caused by fat or sugar crystals separating and rising to the surface.",
                  "nl": "Bloom appears as white or gray streaks on chocolate caused by fat or sugar crystals separating and rising to the surface."
        }
      },
      {
        question: {
                  "en": "What is couverture chocolate?",
                  "es": "What is couverture chocolate?",
                  "de": "What is couverture chocolate?",
                  "nl": "What is couverture chocolate?"
        },
        options: [
        {
                  "en": "Dark chocolate",
                  "es": "Dark chocolate",
                  "de": "Dark chocolate",
                  "nl": "Dark chocolate"
        },
        {
                  "en": "High cocoa butter content chocolate for coating",
                  "es": "High cocoa butter content chocolate for coating",
                  "de": "High cocoa butter content chocolate for coating",
                  "nl": "High cocoa butter content chocolate for coating"
        },
        {
                  "en": "White chocolate",
                  "es": "White chocolate",
                  "de": "White chocolate",
                  "nl": "White chocolate"
        },
        {
                  "en": "Milk chocolate",
                  "es": "Milk chocolate",
                  "de": "Milk chocolate",
                  "nl": "Milk chocolate"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Couverture chocolate contains a higher percentage of cocoa butter, making it ideal for coating and dipping due to its fluidity when melted.",
                  "es": "Couverture chocolate contains a higher percentage of cocoa butter, making it ideal for coating and dipping due to its fluidity when melted.",
                  "de": "Couverture chocolate contains a higher percentage of cocoa butter, making it ideal for coating and dipping due to its fluidity when melted.",
                  "nl": "Couverture chocolate contains a higher percentage of cocoa butter, making it ideal for coating and dipping due to its fluidity when melted."
        }
      },
      {
        question: {
                  "en": "What is a chocolate soufflé?",
                  "es": "What is a chocolate soufflé?",
                  "de": "What is a chocolate soufflé?",
                  "nl": "What is a chocolate soufflé?"
        },
        options: [
        {
                  "en": "Chocolate pudding",
                  "es": "Chocolate pudding",
                  "de": "Chocolate pudding",
                  "nl": "Chocolate pudding"
        },
        {
                  "en": "Light, airy baked chocolate dessert",
                  "es": "Light, airy baked chocolate dessert",
                  "de": "Light, airy baked chocolate dessert",
                  "nl": "Light, airy baked chocolate dessert"
        },
        {
                  "en": "Chocolate cake",
                  "es": "Chocolate cake",
                  "de": "Chocolate cake",
                  "nl": "Chocolate cake"
        },
        {
                  "en": "Chocolate mousse",
                  "es": "Chocolate mousse",
                  "de": "Chocolate mousse",
                  "nl": "Chocolate mousse"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "A chocolate soufflé is a light, airy baked dessert made with egg yolks, chocolate, and whipped egg whites that rise during baking.",
                  "es": "A chocolate soufflé is a light, airy baked dessert made with egg yolks, chocolate, and whipped egg whites that rise during baking.",
                  "de": "A chocolate soufflé is a light, airy baked dessert made with egg yolks, chocolate, and whipped egg whites that rise during baking.",
                  "nl": "A chocolate soufflé is a light, airy baked dessert made with egg yolks, chocolate, and whipped egg whites that rise during baking."
        }
      },
      {
        question: {
                  "en": "What are cacao nibs?",
                  "es": "What are cacao nibs?",
                  "de": "What are cacao nibs?",
                  "nl": "What are cacao nibs?"
        },
        options: [
        {
                  "en": "Chocolate chips",
                  "es": "Chocolate chips",
                  "de": "Chocolate chips",
                  "nl": "Chocolate chips"
        },
        {
                  "en": "Crushed cacao beans",
                  "es": "Crushed cacao beans",
                  "de": "Crushed cacao beans",
                  "nl": "Crushed cacao beans"
        },
        {
                  "en": "Chocolate shavings",
                  "es": "Chocolate shavings",
                  "de": "Chocolate shavings",
                  "nl": "Chocolate shavings"
        },
        {
                  "en": "Cocoa powder",
                  "es": "Cocoa powder",
                  "de": "Cocoa powder",
                  "nl": "Cocoa powder"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Cacao nibs are pieces of crushed, roasted cacao beans before they're processed into chocolate.",
                  "es": "Cacao nibs are pieces of crushed, roasted cacao beans before they're processed into chocolate.",
                  "de": "Cacao nibs are pieces of crushed, roasted cacao beans before they're processed into chocolate.",
                  "nl": "Cacao nibs are pieces of crushed, roasted cacao beans before they're processed into chocolate."
        }
      },
      {
        question: {
                  "en": "What is gianduja?",
                  "es": "What is gianduja?",
                  "de": "What is gianduja?",
                  "nl": "What is gianduja?"
        },
        options: [
        {
                  "en": "Chocolate hazelnut mixture",
                  "es": "Chocolate hazelnut mixture",
                  "de": "Chocolate hazelnut mixture",
                  "nl": "Chocolate hazelnut mixture"
        },
        {
                  "en": "Chocolate syrup",
                  "es": "Chocolate syrup",
                  "de": "Chocolate syrup",
                  "nl": "Chocolate syrup"
        },
        {
                  "en": "Italian chocolate cake",
                  "es": "Italian chocolate cake",
                  "de": "Italian chocolate cake",
                  "nl": "Italian chocolate cake"
        },
        {
                  "en": "Chocolate cookie",
                  "es": "Chocolate cookie",
                  "de": "Chocolate cookie",
                  "nl": "Chocolate cookie"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Gianduja is a sweet chocolate mixture containing about 30% hazelnut paste, originating in Italy.",
                  "es": "Gianduja is a sweet chocolate mixture containing about 30% hazelnut paste, originating in Italy.",
                  "de": "Gianduja is a sweet chocolate mixture containing about 30% hazelnut paste, originating in Italy.",
                  "nl": "Gianduja is a sweet chocolate mixture containing about 30% hazelnut paste, originating in Italy."
        }
      },
      {
        question: {
                  "en": "What percentage of cacao makes chocolate 'dark'?",
                  "es": "What percentage of cacao makes chocolate 'dark'?",
                  "de": "What percentage of cacao makes chocolate 'dark'?",
                  "nl": "What percentage of cacao makes chocolate 'dark'?"
        },
        options: [
        {
                  "en": "90% or higher",
                  "es": "90% or higher",
                  "de": "90% or higher",
                  "nl": "90% or higher"
        },
        {
                  "en": "Any percentage",
                  "es": "Any percentage",
                  "de": "Any percentage",
                  "nl": "Any percentage"
        },
        {
                  "en": "50% or higher",
                  "es": "50% or higher",
                  "de": "50% or higher",
                  "nl": "50% or higher"
        },
        {
                  "en": "Typically 70% or higher",
                  "es": "Typically 70% or higher",
                  "de": "Typically 70% or higher",
                  "nl": "Typically 70% or higher"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Dark chocolate typically contains 70% or more cacao solids, though some classify 60% and above as dark.",
                  "es": "Dark chocolate typically contains 70% or more cacao solids, though some classify 60% and above as dark.",
                  "de": "Dark chocolate typically contains 70% or more cacao solids, though some classify 60% and above as dark.",
                  "nl": "Dark chocolate typically contains 70% or more cacao solids, though some classify 60% and above as dark."
        }
      },
      {
        question: {
                  "en": "What is chocolate mousse made with?",
                  "es": "What is chocolate mousse made with?",
                  "de": "What is chocolate mousse made with?",
                  "nl": "What is chocolate mousse made with?"
        },
        options: [
        {
                  "en": "Chocolate and gelatin",
                  "es": "Chocolate and gelatin",
                  "de": "Chocolate and gelatin",
                  "nl": "Chocolate and gelatin"
        },
        {
                  "en": "Chocolate and whipped cream or egg whites",
                  "es": "Chocolate and whipped cream or egg whites",
                  "de": "Chocolate and whipped cream or egg whites",
                  "nl": "Chocolate and whipped cream or egg whites"
        },
        {
                  "en": "Chocolate and flour",
                  "es": "Chocolate and flour",
                  "de": "Chocolate and flour",
                  "nl": "Chocolate and flour"
        },
        {
                  "en": "Chocolate and milk",
                  "es": "Chocolate and milk",
                  "de": "Chocolate and milk",
                  "nl": "Chocolate and milk"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Chocolate mousse is made by folding melted chocolate into whipped cream or beaten egg whites for a light, airy texture.",
                  "es": "Chocolate mousse is made by folding melted chocolate into whipped cream or beaten egg whites for a light, airy texture.",
                  "de": "Chocolate mousse is made by folding melted chocolate into whipped cream or beaten egg whites for a light, airy texture.",
                  "nl": "Chocolate mousse is made by folding melted chocolate into whipped cream or beaten egg whites for a light, airy texture."
        }
      },
      {
        question: {
                  "en": "What is the conching process in chocolate making?",
                  "es": "What is the conching process in chocolate making?",
                  "de": "What is the conching process in chocolate making?",
                  "nl": "What is the conching process in chocolate making?"
        },
        options: [
        {
                  "en": "Shaping chocolate",
                  "es": "Shaping chocolate",
                  "de": "Shaping chocolate",
                  "nl": "Shaping chocolate"
        },
        {
                  "en": "Storing chocolate",
                  "es": "Storing chocolate",
                  "de": "Storing chocolate",
                  "nl": "Storing chocolate"
        },
        {
                  "en": "Wrapping chocolate",
                  "es": "Wrapping chocolate",
                  "de": "Wrapping chocolate",
                  "nl": "Wrapping chocolate"
        },
        {
                  "en": "Prolonged mixing to refine texture and flavor",
                  "es": "Prolonged mixing to refine texture and flavor",
                  "de": "Prolonged mixing to refine texture and flavor",
                  "nl": "Prolonged mixing to refine texture and flavor"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Conching is the prolonged mixing and aerating of chocolate to develop flavor and create a smooth texture.",
                  "es": "Conching is the prolonged mixing and aerating of chocolate to develop flavor and create a smooth texture.",
                  "de": "Conching is the prolonged mixing and aerating of chocolate to develop flavor and create a smooth texture.",
                  "nl": "Conching is the prolonged mixing and aerating of chocolate to develop flavor and create a smooth texture."
        }
      },
      {
        question: {
                  "en": "What is white chocolate made from?",
                  "es": "What is white chocolate made from?",
                  "de": "What is white chocolate made from?",
                  "nl": "What is white chocolate made from?"
        },
        options: [
        {
                  "en": "Cocoa butter, sugar, and milk solids",
                  "es": "Cocoa butter, sugar, and milk solids",
                  "de": "Cocoa butter, sugar, and milk solids",
                  "nl": "Cocoa butter, sugar, and milk solids"
        },
        {
                  "en": "White cocoa powder",
                  "es": "White cocoa powder",
                  "de": "White cocoa powder",
                  "nl": "White cocoa powder"
        },
        {
                  "en": "Bleached chocolate",
                  "es": "Bleached chocolate",
                  "de": "Bleached chocolate",
                  "nl": "Bleached chocolate"
        },
        {
                  "en": "Milk chocolate with vanilla",
                  "es": "Milk chocolate with vanilla",
                  "de": "Milk chocolate with vanilla",
                  "nl": "Milk chocolate with vanilla"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "White chocolate contains cocoa butter, sugar, and milk solids, but no cocoa solids (the brown part of chocolate).",
                  "es": "White chocolate contains cocoa butter, sugar, and milk solids, but no cocoa solids (the brown part of chocolate).",
                  "de": "White chocolate contains cocoa butter, sugar, and milk solids, but no cocoa solids (the brown part of chocolate).",
                  "nl": "White chocolate contains cocoa butter, sugar, and milk solids, but no cocoa solids (the brown part of chocolate)."
        }
      },
      {
        question: {
                  "en": "What is a chocolate lava cake?",
                  "es": "What is a chocolate lava cake?",
                  "de": "What is a chocolate lava cake?",
                  "nl": "What is a chocolate lava cake?"
        },
        options: [
        {
                  "en": "Chocolate cake with icing",
                  "es": "Chocolate cake with icing",
                  "de": "Chocolate cake with icing",
                  "nl": "Chocolate cake with icing"
        },
        {
                  "en": "Frozen chocolate dessert",
                  "es": "Frozen chocolate dessert",
                  "de": "Frozen chocolate dessert",
                  "nl": "Frozen chocolate dessert"
        },
        {
                  "en": "Chocolate layer cake",
                  "es": "Chocolate layer cake",
                  "de": "Chocolate layer cake",
                  "nl": "Chocolate layer cake"
        },
        {
                  "en": "Cake with molten chocolate center",
                  "es": "Cake with molten chocolate center",
                  "de": "Cake with molten chocolate center",
                  "nl": "Cake with molten chocolate center"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Chocolate lava cake has an intentionally undercooked center that flows out like lava when cut.",
                  "es": "Chocolate lava cake has an intentionally undercooked center that flows out like lava when cut.",
                  "de": "Chocolate lava cake has an intentionally undercooked center that flows out like lava when cut.",
                  "nl": "Chocolate lava cake has an intentionally undercooked center that flows out like lava when cut."
        }
      },
      {
        question: {
                  "en": "What is chocolate seizing?",
                  "es": "What is chocolate seizing?",
                  "de": "What is chocolate seizing?",
                  "nl": "What is chocolate seizing?"
        },
        options: [
        {
                  "en": "Chocolate becoming grainy and clumpy",
                  "es": "Chocolate becoming grainy and clumpy",
                  "de": "Chocolate becoming grainy and clumpy",
                  "nl": "Chocolate becoming grainy and clumpy"
        },
        {
                  "en": "Chocolate hardening",
                  "es": "Chocolate hardening",
                  "de": "Chocolate hardening",
                  "nl": "Chocolate hardening"
        },
        {
                  "en": "Chocolate burning",
                  "es": "Chocolate burning",
                  "de": "Chocolate burning",
                  "nl": "Chocolate burning"
        },
        {
                  "en": "Chocolate melting",
                  "es": "Chocolate melting",
                  "de": "Chocolate melting",
                  "nl": "Chocolate melting"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Seizing occurs when a small amount of water contacts melted chocolate, causing it to become grainy, clumpy, and unusable.",
                  "es": "Seizing occurs when a small amount of water contacts melted chocolate, causing it to become grainy, clumpy, and unusable.",
                  "de": "Seizing occurs when a small amount of water contacts melted chocolate, causing it to become grainy, clumpy, and unusable.",
                  "nl": "Seizing occurs when a small amount of water contacts melted chocolate, causing it to become grainy, clumpy, and unusable."
        }
      },
      {
        question: {
                  "en": "What is cocoa butter?",
                  "es": "What is cocoa butter?",
                  "de": "What is cocoa butter?",
                  "nl": "What is cocoa butter?"
        },
        options: [
        {
                  "en": "Chocolate spread",
                  "es": "Chocolate spread",
                  "de": "Chocolate spread",
                  "nl": "Chocolate spread"
        },
        {
                  "en": "Fat extracted from cacao beans",
                  "es": "Fat extracted from cacao beans",
                  "de": "Fat extracted from cacao beans",
                  "nl": "Fat extracted from cacao beans"
        },
        {
                  "en": "Butter flavored with cocoa",
                  "es": "Butter flavored with cocoa",
                  "de": "Butter flavored with cocoa",
                  "nl": "Butter flavored with cocoa"
        },
        {
                  "en": "Cocoa powder mixed with butter",
                  "es": "Cocoa powder mixed with butter",
                  "de": "Cocoa powder mixed with butter",
                  "nl": "Cocoa powder mixed with butter"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Cocoa butter is the natural fat extracted from cacao beans, giving chocolate its smooth, melt-in-mouth quality.",
                  "es": "Cocoa butter is the natural fat extracted from cacao beans, giving chocolate its smooth, melt-in-mouth quality.",
                  "de": "Cocoa butter is the natural fat extracted from cacao beans, giving chocolate its smooth, melt-in-mouth quality.",
                  "nl": "Cocoa butter is the natural fat extracted from cacao beans, giving chocolate its smooth, melt-in-mouth quality."
        }
      },
      {
        question: {
                  "en": "What is a flourless chocolate cake?",
                  "es": "What is a flourless chocolate cake?",
                  "de": "What is a flourless chocolate cake?",
                  "nl": "What is a flourless chocolate cake?"
        },
        options: [
        {
                  "en": "Chocolate cheesecake",
                  "es": "Chocolate cheesecake",
                  "de": "Chocolate cheesecake",
                  "nl": "Chocolate cheesecake"
        },
        {
                  "en": "Dense cake made primarily with chocolate and eggs",
                  "es": "Dense cake made primarily with chocolate and eggs",
                  "de": "Dense cake made primarily with chocolate and eggs",
                  "nl": "Dense cake made primarily with chocolate and eggs"
        },
        {
                  "en": "Chocolate mousse cake",
                  "es": "Chocolate mousse cake",
                  "de": "Chocolate mousse cake",
                  "nl": "Chocolate mousse cake"
        },
        {
                  "en": "Chocolate cake without gluten",
                  "es": "Chocolate cake without gluten",
                  "de": "Chocolate cake without gluten",
                  "nl": "Chocolate cake without gluten"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Flourless chocolate cake is dense and fudgy, made primarily from chocolate, butter, eggs, and sugar with no flour.",
                  "es": "Flourless chocolate cake is dense and fudgy, made primarily from chocolate, butter, eggs, and sugar with no flour.",
                  "de": "Flourless chocolate cake is dense and fudgy, made primarily from chocolate, butter, eggs, and sugar with no flour.",
                  "nl": "Flourless chocolate cake is dense and fudgy, made primarily from chocolate, butter, eggs, and sugar with no flour."
        }
      },
      {
        question: {
                  "en": "What is the Maillard reaction in chocolate?",
                  "es": "What is the Maillard reaction in chocolate?",
                  "de": "What is the Maillard reaction in chocolate?",
                  "nl": "What is the Maillard reaction in chocolate?"
        },
        options: [
        {
                  "en": "Crystallization",
                  "es": "Crystallization",
                  "de": "Crystallization",
                  "nl": "Crystallization"
        },
        {
                  "en": "Melting process",
                  "es": "Melting process",
                  "de": "Melting process",
                  "nl": "Melting process"
        },
        {
                  "en": "Browning reaction during roasting",
                  "es": "Browning reaction during roasting",
                  "de": "Browning reaction during roasting",
                  "nl": "Browning reaction during roasting"
        },
        {
                  "en": "Fermentation",
                  "es": "Fermentation",
                  "de": "Fermentation",
                  "nl": "Fermentation"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "The Maillard reaction occurs when cacao beans are roasted, creating complex flavors through reactions between amino acids and sugars.",
                  "es": "The Maillard reaction occurs when cacao beans are roasted, creating complex flavors through reactions between amino acids and sugars.",
                  "de": "The Maillard reaction occurs when cacao beans are roasted, creating complex flavors through reactions between amino acids and sugars.",
                  "nl": "The Maillard reaction occurs when cacao beans are roasted, creating complex flavors through reactions between amino acids and sugars."
        }
      },
      {
        question: {
                  "en": "What is ruby chocolate?",
                  "es": "What is ruby chocolate?",
                  "de": "What is ruby chocolate?",
                  "nl": "What is ruby chocolate?"
        },
        options: [
        {
                  "en": "White chocolate dyed pink",
                  "es": "White chocolate dyed pink",
                  "de": "White chocolate dyed pink",
                  "nl": "White chocolate dyed pink"
        },
        {
                  "en": "Chocolate with raspberry",
                  "es": "Chocolate with raspberry",
                  "de": "Chocolate with raspberry",
                  "nl": "Chocolate with raspberry"
        },
        {
                  "en": "Naturally pink chocolate from ruby cacao beans",
                  "es": "Naturally pink chocolate from ruby cacao beans",
                  "de": "Naturally pink chocolate from ruby cacao beans",
                  "nl": "Naturally pink chocolate from ruby cacao beans"
        },
        {
                  "en": "Chocolate with food coloring",
                  "es": "Chocolate with food coloring",
                  "de": "Chocolate with food coloring",
                  "nl": "Chocolate with food coloring"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Ruby chocolate is made from ruby cacao beans and has a naturally pink color and berry-like flavor without added colors or flavors.",
                  "es": "Ruby chocolate is made from ruby cacao beans and has a naturally pink color and berry-like flavor without added colors or flavors.",
                  "de": "Ruby chocolate is made from ruby cacao beans and has a naturally pink color and berry-like flavor without added colors or flavors.",
                  "nl": "Ruby chocolate is made from ruby cacao beans and has a naturally pink color and berry-like flavor without added colors or flavors."
        }
      }
    ]
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level4;
  }
})();