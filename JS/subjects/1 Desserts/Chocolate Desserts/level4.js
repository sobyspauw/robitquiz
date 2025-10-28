// Chocolate Desserts Quiz - Level 4: Advanced
(function() {
  const level4 = {
    name: {
      en: "Advanced Chocolate Techniques",
      es: "Técnicas Avanzadas de Chocolate",
      de: "Fortgeschrittene Schokoladentechniken",
      nl: "Geavanceerde Chocoladetechnieken"
    },
    questions: [
      {
        question: {
          en: "What is the optimal temperature range for tempering dark chocolate?",
          es: "¿Cuál es el rango de temperatura óptimo para templar chocolate negro?",
          de: "Was ist der optimale Temperaturbereich zum Temperieren von dunkler Schokolade?",
          nl: "Wat is het optimale temperatuurbereik voor het tempereren van pure chocolade?"
        },
        options: [
          { en: "45-50°C, cool to 27°C, reheat to 31°C", es: "45-50°C, enfriar a 27°C, recalentar a 31°C", de: "45-50°C, abkühlen auf 27°C, wieder erhitzen auf 31°C", nl: "45-50°C, afkoelen tot 27°C, opnieuw verwarmen tot 31°C" },
          { en: "60-65°C, cool to 32°C, reheat to 35°C", es: "60-65°C, enfriar a 32°C, recalentar a 35°C", de: "60-65°C, abkühlen auf 32°C, wieder erhitzen auf 35°C", nl: "60-65°C, afkoelen tot 32°C, opnieuw verwarmen tot 35°C" },
          { en: "30-35°C throughout", es: "30-35°C todo el tiempo", de: "30-35°C durchgehend", nl: "30-35°C gedurende" },
          { en: "No specific temperature needed", es: "No se necesita temperatura específica", de: "Keine spezifische Temperatur erforderlich", nl: "Geen specifieke temperatuur nodig" }
        ],
        correct: 0,
        explanation: {
          en: "Dark chocolate tempering requires heating to 45-50°C, cooling to 27°C to form seed crystals, then reheating to 31°C for working temperature.",
          es: "El templado de chocolate negro requiere calentar a 45-50°C, enfriar a 27°C para formar cristales semilla, luego recalentar a 31°C para temperatura de trabajo.",
          de: "Das Temperieren von dunkler Schokolade erfordert Erhitzen auf 45-50°C, Abkühlen auf 27°C zur Bildung von Impfkristallen, dann wieder Erhitzen auf 31°C für Arbeitstemperatur.",
          nl: "Het tempereren van pure chocolade vereist verhitting tot 45-50°C, afkoeling tot 27°C om zaadkristallen te vormen, dan opnieuw verwarmen tot 31°C voor werktemperatuur."
        }
      },
      {
        question: {
          en: "What is the purpose of conching in chocolate production?",
          es: "¿Cuál es el propósito del conchado en la producción de chocolate?",
          de: "Was ist der Zweck des Conchierens in der Schokoladenproduktion?",
          nl: "Wat is het doel van conchen in chocoladeproductie?"
        },
        options: [
          { en: "Develops flavor, reduces particle size, and improves texture", es: "Desarrolla sabor, reduce tamaño de partículas y mejora textura", de: "Entwickelt Geschmack, reduziert Partikelgröße und verbessert Textur", nl: "Ontwikkelt smaak, vermindert deeltjesgrootte en verbetert textuur" },
          { en: "Only adds sweetness", es: "Solo agrega dulzura", de: "Fügt nur Süße hinzu", nl: "Voegt alleen zoetheid toe" },
          { en: "Changes chocolate color", es: "Cambia el color del chocolate", de: "Ändert die Schokoladenfarbe", nl: "Verandert chocoladekleur" },
          { en: "Hardens the chocolate", es: "Endurece el chocolate", de: "Härtet die Schokolade", nl: "Verhardt de chocolade" }
        ],
        correct: 0,
        explanation: {
          en: "Conching is a mechanical process that develops flavor compounds, reduces particle size for smoothness, and improves texture through prolonged mixing and aeration.",
          es: "El conchado es un proceso mecánico que desarrolla compuestos de sabor, reduce el tamaño de partículas para suavidad y mejora la textura mediante mezclado y aireación prolongados.",
          de: "Conchieren ist ein mechanischer Prozess, der Geschmacksverbindungen entwickelt, Partikelgröße für Glätte reduziert und Textur durch verlängerte Mischung und Belüftung verbessert.",
          nl: "Conchen is een mechanisch proces dat smaakverbindingen ontwikkelt, deeltjesgrootte vermindert voor gladheid en textuur verbetert door langdurig mengen en beluchten."
        }
      },
      {
        question: {
          en: "What causes 'fat bloom' on chocolate surfaces?",
          es: "¿Qué causa el 'bloom de grasa' en las superficies de chocolate?",
          de: "Was verursacht 'Fettreif' auf Schokoladenoberflächen?",
          nl: "Wat veroorzaakt 'vetbloei' op chocolade oppervlakken?"
        },
        options: [
          { en: "Temperature fluctuations causing cocoa butter migration", es: "Fluctuaciones de temperatura que causan migración de manteca de cacao", de: "Temperaturschwankungen, die Kakaobuttermigrierung verursachen", nl: "Temperatuurschommelingen die cacaoboter migratie veroorzaken" },
          { en: "Adding too much sugar", es: "Agregar demasiada azúcar", de: "Zu viel Zucker hinzufügen", nl: "Te veel suiker toevoegen" },
          { en: "Poor quality cocoa beans", es: "Granos de cacao de mala calidad", de: "Schlechte Qualität der Kakaobohnen", nl: "Slechte kwaliteit cacaobonen" },
          { en: "Exposure to light", es: "Exposición a la luz", de: "Lichtexposition", nl: "Blootstelling aan licht" }
        ],
        correct: 0,
        explanation: {
          en: "Fat bloom occurs when temperature changes cause cocoa butter to melt and recrystallize on the surface, creating a white, cloudy appearance.",
          es: "El bloom de grasa ocurre cuando cambios de temperatura causan que la manteca de cacao se derrita y recristalice en la superficie, creando una apariencia blanca y nublada.",
          de: "Fettreif tritt auf, wenn Temperaturwechsel Kakaobutter zum Schmelzen und Rekristallisieren auf der Oberfläche bringen, was ein weißes, trübes Aussehen erzeugt.",
          nl: "Vetbloei ontstaat wanneer temperatuurveranderingen ervoor zorgen dat cacaoboter smelt en herkristal­liseert op het oppervlak, wat een wit, troebel uiterlijk creëert."
        }
      },
      {
        question: {
          en: "What is the difference between cocoa butter and cocoa solids in chocolate composition?",
          es: "¿Cuál es la diferencia entre manteca de cacao y sólidos de cacao en la composición del chocolate?",
          de: "Was ist der Unterschied zwischen Kakaobutter und Kakaofeststoffen in der Schokoladenzusammensetzung?",
          nl: "Wat is het verschil tussen cacaoboter en cacaobestanddelen in chocoladesamenstelling?"
        },
        options: [
          { en: "Cocoa butter provides texture and mouthfeel, cocoa solids provide flavor", es: "Manteca de cacao proporciona textura y sensación bucal, sólidos de cacao proporcionan sabor", de: "Kakaobutter bietet Textur und Mundgefühl, Kakaofeststoffe bieten Geschmack", nl: "Cacaoboter zorgt voor textuur en mondgevoel, cacaobestanddelen zorgen voor smaak" },
          { en: "They are the same thing", es: "Son la misma cosa", de: "Sie sind dasselbe", nl: "Ze zijn hetzelfde" },
          { en: "Cocoa solids provide sweetness only", es: "Los sólidos de cacao solo proporcionan dulzura", de: "Kakaofeststoffe bieten nur Süße", nl: "Cacaobestanddelen zorgen alleen voor zoetheid" },
          { en: "Cocoa butter adds color", es: "La manteca de cacao agrega color", de: "Kakaobutter fügt Farbe hinzu", nl: "Cacaoboter voegt kleur toe" }
        ],
        correct: 0,
        explanation: {
          en: "Cocoa butter is the fat component that provides smooth texture and melt-in-mouth quality, while cocoa solids contain the flavor compounds and give chocolate its taste.",
          es: "La manteca de cacao es el componente graso que proporciona textura suave y calidad de derretirse en la boca, mientras que los sólidos de cacao contienen compuestos de sabor y dan al chocolate su sabor.",
          de: "Kakaobutter ist die Fettkomponente, die glatte Textur und Schmelz-im-Mund-Qualität bietet, während Kakaofeststoffe die Geschmacksverbindungen enthalten und Schokolade ihren Geschmack geben.",
          nl: "Cacaoboter is de vetcomponent die gladde textuur en smelt-in-de-mond kwaliteit biedt, terwijl cacaobestanddelen de smaakverbindingen bevatten en chocolade zijn smaak geven."
        }
      },
      {
        question: {
          en: "What technique is used to create chocolate decorations with precise patterns?",
          es: "¿Qué técnica se usa para crear decoraciones de chocolate con patrones precisos?",
          de: "Welche Technik wird verwendet, um Schokoladendekorationen mit präzisen Mustern zu erstellen?",
          nl: "Welke techniek wordt gebruikt om chocoladedecoraties met precieze patronen te maken?"
        },
        options: [
          { en: "Using textured molds or transfer sheets", es: "Usar moldes texturizados u hojas de transferencia", de: "Verwendung strukturierter Formen oder Transferfolien", nl: "Gebruik van getextureerde vormen of transfervellen" },
          { en: "Hand painting only", es: "Solo pintar a mano", de: "Nur Handbemalung", nl: "Alleen handmatig schilderen" },
          { en: "Adding food coloring", es: "Agregar colorante alimentario", de: "Lebensmittelfarbe hinzufügen", nl: "Voedselkleurstof toevoegen" },
          { en: "Freezing the chocolate", es: "Congelar el chocolate", de: "Die Schokolade einfrieren", nl: "De chocolade bevriezen" }
        ],
        correct: 0,
        explanation: {
          en: "Textured molds and transfer sheets allow chocolatiers to create precise patterns, designs, and textures on chocolate surfaces for professional-quality decorations.",
          es: "Los moldes texturizados y hojas de transferencia permiten a los chocolateros crear patrones, diseños y texturas precisos en superficies de chocolate para decoraciones de calidad profesional.",
          de: "Strukturierte Formen und Transferfolien ermöglichen es Chocolatiers, präzise Muster, Designs und Texturen auf Schokoladenoberflächen für professionelle Dekorationen zu erstellen.",
          nl: "Getextureerde vormen en transfervellen stellen chocolatiers in staat om precieze patronen, ontwerpen en texturen op chocolade oppervlakken te creëren voor professionele decoraties."
        }
      },
      {
        question: {
          en: "What is the purpose of using cocoa butter in chocolate ganache?",
          es: "¿Cuál es el propósito de usar manteca de cacao en ganache de chocolate?",
          de: "Was ist der Zweck der Verwendung von Kakaobutter in Schokoladenganache?",
          nl: "Wat is het doel van het gebruik van cacaoboter in chocoladeganache?"
        },
        options: [
          { en: "Improves texture, stability, and extends shelf life", es: "Mejora textura, estabilidad y extiende vida útil", de: "Verbessert Textur, Stabilität und verlängert Haltbarkeit", nl: "Verbetert textuur, stabiliteit en verlengt houdbaarheid" },
          { en: "Only adds sweetness", es: "Solo agrega dulzura", de: "Fügt nur Süße hinzu", nl: "Voegt alleen zoetheid toe" },
          { en: "Changes the color", es: "Cambia el color", de: "Ändert die Farbe", nl: "Verandert de kleur" },
          { en: "Makes it harder", es: "Lo hace más duro", de: "Macht es härter", nl: "Maakt het harder" }
        ],
        correct: 0,
        explanation: {
          en: "Cocoa butter in ganache improves texture, provides stability at room temperature, enhances mouthfeel, and extends shelf life by preventing separation.",
          es: "La manteca de cacao en ganache mejora la textura, proporciona estabilidad a temperatura ambiente, mejora la sensación bucal y extiende la vida útil previniendo separación.",
          de: "Kakaobutter in Ganache verbessert die Textur, bietet Stabilität bei Raumtemperatur, verbessert das Mundgefühl und verlängert die Haltbarkeit durch Verhinderung von Trennung.",
          nl: "Cacaoboter in ganache verbetert textuur, zorgt voor stabiliteit op kamertemperatuur, verbetert mondgevoel en verlengt houdbaarheid door scheiding te voorkomen."
        }
      },
      {
        question: {
          en: "What is the purpose of enrobing in chocolate confectionery?",
          es: "¿Cuál es el propósito del enbañado en confitería de chocolate?",
          de: "Was ist der Zweck des Überziehens in der Schokoladenkonditorei?",
          nl: "Wat is het doel van het omsluiten in chocoladeconfectie?"
        },
        options: [
          { en: "Completely coating centers with a thin, even layer of chocolate", es: "Cubrir completamente centros con una capa delgada y uniforme de chocolate", de: "Zentren vollständig mit einer dünnen, gleichmäßigen Schokoladenschicht überziehen", nl: "Centra volledig bedekken met een dunne, gelijkmatige laag chocolade" },
          { en: "Adding flavor only", es: "Solo agregar sabor", de: "Nur Geschmack hinzufügen", nl: "Alleen smaak toevoegen" },
          { en: "Making chocolates larger", es: "Hacer chocolates más grandes", de: "Schokoladen größer machen", nl: "Chocolaatjes groter maken" },
          { en: "Changing the shape", es: "Cambiar la forma", de: "Die Form ändern", nl: "De vorm veranderen" }
        ],
        correct: 0,
        explanation: {
          en: "Enrobing is the process of completely coating confectionery centers with a thin, even layer of tempered chocolate to provide protection, flavor, and professional appearance.",
          es: "El enbañado es el proceso de cubrir completamente centros de confitería con una capa delgada y uniforme de chocolate templado para proporcionar protección, sabor y apariencia profesional.",
          de: "Überziehen ist der Prozess des vollständigen Überzugs von Konfekt-Zentren mit einer dünnen, gleichmäßigen Schicht temperierter Schokolade für Schutz, Geschmack und professionelles Aussehen.",
          nl: "Omsluiten is het proces van het volledig bedekken van confectiecentra met een dunne, gelijkmatige laag getemperde chocolade voor bescherming, smaak en professioneel uiterlijk."
        }
      },
      {
        question: {
          en: "What is the difference between compound chocolate and real chocolate?",
          es: "¿Cuál es la diferencia entre chocolate compuesto y chocolate real?",
          de: "Was ist der Unterschied zwischen Compound-Schokolade und echter Schokolade?",
          nl: "Wat is het verschil tussen compound chocolade en echte chocolade?"
        },
        options: [
          { en: "Compound uses vegetable fats instead of cocoa butter", es: "Compuesto usa grasas vegetales en lugar de manteca de cacao", de: "Compound verwendet pflanzliche Fette statt Kakaobutter", nl: "Compound gebruikt plantaardige vetten in plaats van cacaoboter" },
          { en: "No difference", es: "No hay diferencia", de: "Kein Unterschied", nl: "Geen verschil" },
          { en: "Compound is always darker", es: "Compuesto siempre es más oscuro", de: "Compound ist immer dunkler", nl: "Compound is altijd donkerder" },
          { en: "Real chocolate contains no cocoa", es: "Chocolate real no contiene cacao", de: "Echte Schokolade enthält keinen Kakao", nl: "Echte chocolade bevat geen cacao" }
        ],
        correct: 0,
        explanation: {
          en: "Compound chocolate uses vegetable fats instead of cocoa butter, making it easier to work with but lacking the superior flavor and texture of real chocolate.",
          es: "El chocolate compuesto usa grasas vegetales en lugar de manteca de cacao, haciéndolo más fácil de trabajar pero carece del sabor y textura superiores del chocolate real.",
          de: "Compound-Schokolade verwendet pflanzliche Fette statt Kakaobutter, was sie einfacher zu verarbeiten macht, aber den überlegenen Geschmack und die Textur echter Schokolade vermissen lässt.",
          nl: "Compound chocolade gebruikt plantaardige vetten in plaats van cacaoboter, waardoor het gemakkelijker te bewerken is maar de superieure smaak en textuur van echte chocolade mist."
        }
      },
      {
        question: {
          en: "What is the purpose of adding lecithin to chocolate during production?",
          es: "¿Cuál es el propósito de agregar lecitina al chocolate durante la producción?",
          de: "Was ist der Zweck der Zugabe von Lecithin zur Schokolade während der Produktion?",
          nl: "Wat is het doel van het toevoegen van lecithine aan chocolade tijdens productie?"
        },
        options: [
          { en: "Acts as an emulsifier to improve viscosity and workability", es: "Actúa como emulsificante para mejorar viscosidad y trabajabilidad", de: "Wirkt als Emulgator zur Verbesserung von Viskosität und Verarbeitbarkeit", nl: "Werkt als emulgator om viscositeit en bewerkbaarheid te verbeteren" },
          { en: "Adds sweetness", es: "Agrega dulzura", de: "Fügt Süße hinzu", nl: "Voegt zoetheid toe" },
          { en: "Changes color", es: "Cambia el color", de: "Ändert die Farbe", nl: "Verandert de kleur" },
          { en: "Preserves freshness only", es: "Solo preserva frescura", de: "Bewahrt nur Frische", nl: "Behoudt alleen versheid" }
        ],
        correct: 0,
        explanation: {
          en: "Lecithin acts as an emulsifier in chocolate, reducing viscosity, improving flow properties, and making the chocolate easier to work with in molding and coating applications.",
          es: "La lecitina actúa como emulsificante en el chocolate, reduciendo viscosidad, mejorando propiedades de flujo y haciendo el chocolate más fácil de trabajar en aplicaciones de moldeado y cobertura.",
          de: "Lecithin wirkt als Emulgator in Schokolade, reduziert Viskosität, verbessert Fließeigenschaften und macht die Schokolade einfacher zu verarbeiten in Form- und Überzugsanwendungen.",
          nl: "Lecithine werkt als emulgator in chocolade, vermindert viscositeit, verbetert vloeieigenschappen en maakt chocolade gemakkelijker te bewerken in vorm- en coatingtoepassingen."
        }
      },
      {
        question: {
          en: "What technique creates the signature texture of chocolate truffles?",
          es: "¿Qué técnica crea la textura característica de las trufas de chocolate?",
          de: "Welche Technik erzeugt die charakteristische Textur von Schokoladentrüffeln?",
          nl: "Welke techniek creëert de kenmerkende textuur van chocoladetruffels?"
        },
        options: [
          { en: "Creating ganache centers and rolling in cocoa powder or coating", es: "Crear centros de ganache y enrollar en cacao en polvo o cobertura", de: "Ganache-Zentren erstellen und in Kakaopulver oder Überzug rollen", nl: "Ganache centra maken en rollen in cacaopoeder of coating" },
          { en: "Using only solid chocolate", es: "Usar solo chocolate sólido", de: "Nur feste Schokolade verwenden", nl: "Alleen vaste chocolade gebruiken" },
          { en: "Adding nuts only", es: "Solo agregar nueces", de: "Nur Nüsse hinzufügen", nl: "Alleen noten toevoegen" },
          { en: "Freezing the mixture", es: "Congelar la mezcla", de: "Die Mischung einfrieren", nl: "Het mengsel bevriezen" }
        ],
        correct: 0,
        explanation: {
          en: "Chocolate truffles get their signature texture from soft ganache centers that melt in the mouth, often rolled in cocoa powder or coated in chocolate for contrast.",
          es: "Las trufas de chocolate obtienen su textura característica de centros de ganache suaves que se derriten en la boca, a menudo enrolladas en cacao en polvo o cubiertas con chocolate para contraste.",
          de: "Schokoladentrüffel erhalten ihre charakteristische Textur durch weiche Ganache-Zentren, die im Mund schmelzen, oft in Kakaopulver gerollt oder mit Schokolade überzogen für Kontrast.",
          nl: "Chocoladetruffels krijgen hun kenmerkende textuur van zachte ganache centra die in de mond smelten, vaak gerold in cacaopoeder of bedekt met chocolade voor contrast."
        }
      },
      {
        question: {
          en: "What is the purpose of pre-crystallization in chocolate tempering?",
          es: "¿Cuál es el propósito de la pre-cristalización en el templado de chocolate?",
          de: "Was ist der Zweck der Vorkristallisation beim Schokoladentemperieren?",
          nl: "Wat is het doel van pre-kristallisatie bij chocolade tempereren?"
        },
        options: [
          { en: "Creates stable crystal seeds for proper chocolate setting", es: "Crea semillas de cristal estables para cuajado apropiado del chocolate", de: "Erzeugt stabile Kristallkeime für richtiges Schokoladensetzen", nl: "Creëert stabiele kristalzaden voor juiste chocoladestolling" },
          { en: "Only changes flavor", es: "Solo cambia el sabor", de: "Ändert nur den Geschmack", nl: "Verandert alleen de smaak" },
          { en: "Makes chocolate sweeter", es: "Hace el chocolate más dulce", de: "Macht Schokolade süßer", nl: "Maakt chocolade zoeter" },
          { en: "Speeds up melting", es: "Acelera el derretimiento", de: "Beschleunigt das Schmelzen", nl: "Versnelt het smelten" }
        ],
        correct: 0,
        explanation: {
          en: "Pre-crystallization creates stable crystal seeds (Form V) that serve as templates for proper crystal formation throughout the chocolate, ensuring good snap, gloss, and stability.",
          es: "La pre-cristalización crea semillas de cristal estables (Forma V) que sirven como plantillas para formación de cristal apropiada en todo el chocolate, asegurando buen chasquido, brillo y estabilidad.",
          de: "Vorkristallisation erzeugt stabile Kristallkeime (Form V), die als Vorlagen für richtige Kristallbildung in der gesamten Schokolade dienen und guten Knack, Glanz und Stabilität gewährleisten.",
          nl: "Pre-kristallisatie creëert stabiele kristalzaden (Vorm V) die dienen als sjablonen voor juiste kristalvorming door de chocolade, wat goede knak, glans en stabiliteit verzekert."
        }
      },
      {
        question: {
          en: "What causes 'sugar bloom' on chocolate and how does it differ from fat bloom?",
          es: "¿Qué causa el 'bloom de azúcar' en el chocolate y cómo difiere del bloom de grasa?",
          de: "Was verursacht 'Zuckerreif' auf Schokolade und wie unterscheidet er sich von Fettreif?",
          nl: "Wat veroorzaakt 'suikerbloei' op chocolade en hoe verschilt het van vetbloei?"
        },
        options: [
          { en: "Moisture dissolving sugar crystals; sugar bloom feels rough, fat bloom feels smooth", es: "Humedad disolviendo cristales de azúcar; bloom de azúcar se siente rugoso, bloom de grasa se siente suave", de: "Feuchtigkeit löst Zuckerkristalle; Zuckerreif fühlt sich rau an, Fettreif fühlt sich glatt an", nl: "Vocht lost suikerkristallen op; suikerbloei voelt ruw, vetbloei voelt glad" },
          { en: "Both are caused by temperature only", es: "Ambos son causados solo por temperatura", de: "Beide werden nur durch Temperatur verursacht", nl: "Beide worden alleen door temperatuur veroorzaakt" },
          { en: "Sugar bloom is always smooth", es: "Bloom de azúcar siempre es suave", de: "Zuckerreif ist immer glatt", nl: "Suikerbloei is altijd glad" },
          { en: "They are the same thing", es: "Son la misma cosa", de: "Sie sind dasselbe", nl: "Ze zijn hetzelfde" }
        ],
        correct: 0,
        explanation: {
          en: "Sugar bloom occurs when moisture dissolves surface sugar, which then recrystallizes, creating a rough, gritty texture. Fat bloom from temperature changes feels smooth and looks grayish-white.",
          es: "El bloom de azúcar ocurre cuando la humedad disuelve azúcar superficial, que luego recristaliza, creando textura rugosa y arenosa. El bloom de grasa por cambios de temperatura se siente suave y se ve gris-blanco.",
          de: "Zuckerreif tritt auf, wenn Feuchtigkeit Oberflächenzucker löst, der dann rekristallisiert und eine raue, körnige Textur erzeugt. Fettreif durch Temperaturschwankungen fühlt sich glatt an und sieht gräulich-weiß aus.",
          nl: "Suikerbloei ontstaat wanneer vocht oppervlaktesuiker oplost, dat dan herkristalliseert en een ruwe, korrelige textuur creëert. Vetbloei door temperatuurveranderingen voelt glad aan en ziet er grijsachtig-wit uit."
        }
      },
      {
        question: {
          en: "What is the ideal humidity level for storing finished chocolate products?",
          es: "¿Cuál es el nivel ideal de humedad para almacenar productos de chocolate terminados?",
          de: "Was ist die ideale Luftfeuchtigkeit für die Lagerung fertiger Schokoladenprodukte?",
          nl: "Wat is het ideale vochtigheidsniveau voor het opslaan van afgewerkte chocoladeproducten?"
        },
        options: [
          { en: "Below 50% relative humidity", es: "Menos de 50% humedad relativa", de: "Unter 50% relative Luftfeuchtigkeit", nl: "Onder 50% relatieve vochtigheid" },
          { en: "70-80% relative humidity", es: "70-80% humedad relativa", de: "70-80% relative Luftfeuchtigkeit", nl: "70-80% relatieve vochtigheid" },
          { en: "90-100% relative humidity", es: "90-100% humedad relativa", de: "90-100% relative Luftfeuchtigkeit", nl: "90-100% relatieve vochtigheid" },
          { en: "Humidity doesn't matter", es: "La humedad no importa", de: "Luftfeuchtigkeit spielt keine Rolle", nl: "Vochtigheid maakt niet uit" }
        ],
        correct: 0,
        explanation: {
          en: "Chocolate should be stored below 50% relative humidity to prevent sugar bloom formation and maintain quality. Higher humidity can cause sugar dissolution and recrystallization.",
          es: "El chocolate debe almacenarse con menos de 50% humedad relativa para prevenir formación de bloom de azúcar y mantener calidad. Mayor humedad puede causar disolución y recristalización del azúcar.",
          de: "Schokolade sollte unter 50% relativer Luftfeuchtigkeit gelagert werden, um Zuckerreifbildung zu verhindern und Qualität zu erhalten. Höhere Feuchtigkeit kann Zuckerauflösung und Rekristallisation verursachen.",
          nl: "Chocolade moet worden opgeslagen onder 50% relatieve vochtigheid om suikerbloei vorming te voorkomen en kwaliteit te behouden. Hogere vochtigheid kan suikeroplosing en herkristallisatie veroorzaken."
        }
      },
      {
        question: {
          en: "What is the purpose of using invert sugar in chocolate ganache?",
          es: "¿Cuál es el propósito de usar azúcar invertido en ganache de chocolate?",
          de: "Was ist der Zweck der Verwendung von Invertzucker in Schokoladenganache?",
          nl: "Wat is het doel van het gebruik van invertsuiker in chocoladeganache?"
        },
        options: [
          { en: "Prevents crystallization and maintains smooth texture", es: "Previene cristalización y mantiene textura suave", de: "Verhindert Kristallisation und erhält glatte Textur", nl: "Voorkomt kristallisatie en behoudt gladde textuur" },
          { en: "Only adds sweetness", es: "Solo agrega dulzura", de: "Fügt nur Süße hinzu", nl: "Voegt alleen zoetheid toe" },
          { en: "Changes the color", es: "Cambia el color", de: "Ändert die Farbe", nl: "Verandert de kleur" },
          { en: "Makes it set faster", es: "Hace que cuaje más rápido", de: "Lässt es schneller setzen", nl: "Laat het sneller stollen" }
        ],
        correct: 0,
        explanation: {
          en: "Invert sugar in ganache prevents crystallization, maintains smooth texture, and helps retain moisture, resulting in better shelf stability and mouthfeel.",
          es: "El azúcar invertido en ganache previene cristalización, mantiene textura suave y ayuda a retener humedad, resultando en mejor estabilidad de almacenamiento y sensación bucal.",
          de: "Invertzucker in Ganache verhindert Kristallisation, erhält glatte Textur und hilft Feuchtigkeit zu behalten, was zu besserer Lagerstabilität und Mundgefühl führt.",
          nl: "Invertsuiker in ganache voorkomt kristallisatie, behoudt gladde textuur en helpt vocht vast te houden, wat resulteert in betere opslagstabiliteit en mondgevoel."
        }
      },
      {
        question: {
          en: "What technique is used to create hollow chocolate figures?",
          es: "¿Qué técnica se usa para crear figuras de chocolate huecas?",
          de: "Welche Technik wird verwendet, um hohle Schokoladenfiguren zu erstellen?",
          nl: "Welke techniek wordt gebruikt om holle chocoladefiguren te maken?"
        },
        options: [
          { en: "Molding with tempered chocolate and removing excess", es: "Moldear con chocolate templado y remover exceso", de: "Formen mit temperierter Schokolade und Überschuss entfernen", nl: "Vormen met getemperde chocolade en overtollige weghalen" },
          { en: "Carving solid chocolate", es: "Tallar chocolate sólido", de: "Feste Schokolade schnitzen", nl: "Vaste chocolade snijden" },
          { en: "Using only compound chocolate", es: "Usar solo chocolate compuesto", de: "Nur Compound-Schokolade verwenden", nl: "Alleen compound chocolade gebruiken" },
          { en: "Freezing liquid chocolate", es: "Congelar chocolate líquido", de: "Flüssige Schokolade einfrieren", nl: "Vloeibare chocolade bevriezen" }
        ],
        correct: 0,
        explanation: {
          en: "Hollow chocolate figures are created by coating the inside of molds with tempered chocolate, allowing it to set, then removing excess to create thin walls.",
          es: "Las figuras de chocolate huecas se crean cubriendo el interior de moldes con chocolate templado, permitiendo que cuaje, luego removiendo exceso para crear paredes delgadas.",
          de: "Hohle Schokoladenfiguren werden erstellt, indem das Innere von Formen mit temperierter Schokolade beschichtet, es setzen gelassen und dann Überschuss entfernt wird, um dünne Wände zu schaffen.",
          nl: "Holle chocoladefiguren worden gemaakt door de binnenkant van vormen te bedekken met getemperde chocolade, het te laten stollen, dan overtollige weg te halen om dunne wanden te creëren."
        }
      },
      {
        question: {
          en: "What is the optimal working temperature for white chocolate?",
          es: "¿Cuál es la temperatura de trabajo óptima para chocolate blanco?",
          de: "Was ist die optimale Arbeitstemperatur für weiße Schokolade?",
          nl: "Wat is de optimale werktemperatuur voor witte chocolade?"
        },
        options: [
          { en: "26-28°C (79-82°F)", es: "26-28°C", de: "26-28°C", nl: "26-28°C" },
          { en: "31-32°C (88-90°F)", es: "31-32°C", de: "31-32°C", nl: "31-32°C" },
          { en: "35-40°C (95-104°F)", es: "35-40°C", de: "35-40°C", nl: "35-40°C" },
          { en: "20-22°C (68-72°F)", es: "20-22°C", de: "20-22°C", nl: "20-22°C" }
        ],
        correct: 0,
        explanation: {
          en: "White chocolate has a lower working temperature (26-28°C) than dark chocolate due to its different composition and melting characteristics.",
          es: "El chocolate blanco tiene una temperatura de trabajo más baja (26-28°C) que el chocolate negro debido a su diferente composición y características de derretimiento.",
          de: "Weiße Schokolade hat eine niedrigere Arbeitstemperatur (26-28°C) als dunkle Schokolade aufgrund ihrer unterschiedlichen Zusammensetzung und Schmelzeigenschaften.",
          nl: "Witte chocolade heeft een lagere werktemperatuur (26-28°C) dan pure chocolade vanwege zijn verschillende samenstelling en smelteigenschappen."
        }
      },
      {
        question: {
          en: "What creates the 'snap' in properly tempered chocolate?",
          es: "¿Qué crea el 'chasquido' en chocolate apropiadamente templado?",
          de: "Was erzeugt das 'Knacken' in richtig temperierter Schokolade?",
          nl: "Wat creëert de 'knak' in goed getemperde chocolade?"
        },
        options: [
          { en: "Stable crystal structure (Form V) contracting as it sets", es: "Estructura cristalina estable (Forma V) contrayéndose al cuajar", de: "Stabile Kristallstruktur (Form V), die sich beim Setzen zusammenzieht", nl: "Stabiele kristalstructuur (Vorm V) die samentrekt tijdens stollen" },
          { en: "Adding extra cocoa butter", es: "Agregar manteca de cacao extra", de: "Extra Kakaobutter hinzufügen", nl: "Extra cacaoboter toevoegen" },
          { en: "High sugar content", es: "Alto contenido de azúcar", de: "Hoher Zuckergehalt", nl: "Hoog suikergehalte" },
          { en: "Cold storage only", es: "Solo almacenamiento frío", de: "Nur kalte Lagerung", nl: "Alleen koude opslag" }
        ],
        correct: 0,
        explanation: {
          en: "The characteristic 'snap' of well-tempered chocolate comes from stable Form V crystal structures that contract properly as they set, creating a crisp break.",
          es: "El 'chasquido' característico del chocolate bien templado viene de estructuras cristalinas estables Forma V que se contraen apropiadamente al cuajar, creando una rotura crujiente.",
          de: "Das charakteristische 'Knacken' von gut temperierter Schokolade kommt von stabilen Form-V-Kristallstrukturen, die sich beim Setzen richtig zusammenziehen und einen knackigen Bruch erzeugen.",
          nl: "De karakteristieke 'knak' van goed getemperde chocolade komt van stabiele Vorm V kristalstructuren die goed samentrekken tijdens het stollen, wat een knapperige breuk creëert."
        }
      },
      {
        question: {
          en: "What is the difference between single-origin and blended chocolate?",
          es: "¿Cuál es la diferencia entre chocolate de origen único y chocolate mezclado?",
          de: "Was ist der Unterschied zwischen Single-Origin- und gemischter Schokolade?",
          nl: "Wat is het verschil tussen single-origin en gemengde chocolade?"
        },
        options: [
          { en: "Single-origin uses beans from one location, blended combines multiple origins", es: "Origen único usa granos de una ubicación, mezclado combina múltiples orígenes", de: "Single-Origin verwendet Bohnen von einem Ort, gemischt kombiniert mehrere Herkünfte", nl: "Single-origin gebruikt bonen van één locatie, gemengd combineert meerdere oorsprongen" },
          { en: "No difference in taste", es: "No hay diferencia en sabor", de: "Kein Geschmacksunterschied", nl: "Geen verschil in smaak" },
          { en: "Single-origin is always darker", es: "Origen único siempre es más oscuro", de: "Single-Origin ist immer dunkler", nl: "Single-origin is altijd donkerder" },
          { en: "Blended chocolate is artificial", es: "Chocolate mezclado es artificial", de: "Gemischte Schokolade ist künstlich", nl: "Gemengde chocolade is kunstmatig" }
        ],
        correct: 0,
        explanation: {
          en: "Single-origin chocolate uses cocoa beans from one specific region or farm, showcasing unique terroir flavors, while blended chocolate combines beans from multiple origins for balanced, consistent flavor profiles.",
          es: "El chocolate de origen único usa granos de cacao de una región específica o granja, mostrando sabores únicos de terroir, mientras que el chocolate mezclado combina granos de múltiples orígenes para perfiles de sabor equilibrados y consistentes.",
          de: "Single-Origin-Schokolade verwendet Kakaobohnen von einer bestimmten Region oder Farm und zeigt einzigartige Terroir-Aromen, während gemischte Schokolade Bohnen aus mehreren Herkünften für ausgewogene, konsistente Geschmacksprofile kombiniert.",
          nl: "Single-origin chocolade gebruikt cacaobonen van één specifieke regio of boerderij, wat unieke terroir smaken toont, terwijl gemengde chocolade bonen van meerdere oorsprongen combineert voor gebalanceerde, consistente smaakprofielen."
        }
      },
      {
        question: {
          en: "What causes chocolate to 'seize' and how can it be prevented?",
          es: "¿Qué causa que el chocolate se 'endurezca' y cómo se puede prevenir?",
          de: "Was bewirkt, dass Schokolade 'fest wird' und wie kann es verhindert werden?",
          nl: "Wat zorgt ervoor dat chocolade 'vastloopt' en hoe kan dit worden voorkomen?"
        },
        options: [
          { en: "Water contact causes seizing; prevent by keeping everything dry", es: "Contacto con agua causa endurecimiento; prevenir manteniendo todo seco", de: "Wasserkontakt verursacht Festwerden; verhindern durch Trockenhalten", nl: "Watercontact veroorzaakt vastlopen; voorkomen door alles droog te houden" },
          { en: "Too much heat causes seizing", es: "Demasiado calor causa endurecimiento", de: "Zu viel Hitze verursacht Festwerden", nl: "Te veel hitte veroorzaakt vastlopen" },
          { en: "Using dark chocolate causes seizing", es: "Usar chocolate negro causa endurecimiento", de: "Dunkle Schokolade verwenden verursacht Festwerden", nl: "Pure chocolade gebruiken veroorzaakt vastlopen" },
          { en: "Seizing cannot be prevented", es: "El endurecimiento no se puede prevenir", de: "Festwerden kann nicht verhindert werden", nl: "Vastlopen kan niet worden voorkomen" }
        ],
        correct: 0,
        explanation: {
          en: "Chocolate seizes when water comes into contact with melted chocolate, causing it to become thick and grainy. Prevention requires keeping all utensils and ingredients completely dry.",
          es: "El chocolate se endurece cuando agua entra en contacto con chocolate derretido, haciéndolo espeso y granuloso. La prevención requiere mantener todos los utensilios e ingredientes completamente secos.",
          de: "Schokolade wird fest, wenn Wasser mit geschmolzener Schokolade in Kontakt kommt, wodurch sie dick und körnig wird. Vorbeugung erfordert, alle Utensilien und Zutaten völlig trocken zu halten.",
          nl: "Chocolade loopt vast wanneer water in contact komt met gesmolten chocolade, waardoor het dik en korrelig wordt. Preventie vereist dat alle keukengerei en ingrediënten volledig droog blijven."
        }
      },
      {
        question: {
          en: "What is the difference between chocolate couverture and regular baking chocolate?",
          es: "¿Cuál es la diferencia entre cobertura de chocolate y chocolate para hornear regular?",
          de: "Was ist der Unterschied zwischen Kuvertüre und normaler Backschokolade?",
          nl: "Wat is het verschil tussen couverture chocolade en gewone bakchocolade?"
        },
        options: [
          { en: "Couverture has higher cocoa butter content", es: "La cobertura tiene mayor contenido de manteca de cacao", de: "Kuvertüre hat einen höheren Kakaobuttergehalt", nl: "Couverture heeft een hoger cacaobotergehalte" },
          { en: "Couverture is always darker", es: "La cobertura siempre es más oscura", de: "Kuvertüre ist immer dunkler", nl: "Couverture is altijd donkerder" },
          { en: "No difference in composition", es: "No hay diferencia en composición", de: "Kein Unterschied in der Zusammensetzung", nl: "Geen verschil in samenstelling" },
          { en: "Couverture contains more sugar", es: "La cobertura contiene más azúcar", de: "Kuvertüre enthält mehr Zucker", nl: "Couverture bevat meer suiker" }
        ],
        correct: 0,
        explanation: {
          en: "Couverture chocolate contains a higher percentage of cocoa butter (31-39%), giving it superior flow properties for coating and tempering applications.",
          es: "El chocolate de cobertura contiene un mayor porcentaje de manteca de cacao (31-39%), dándole propiedades de flujo superiores para aplicaciones de cobertura y templado.",
          de: "Kuvertüre enthält einen höheren Anteil an Kakaobutter (31-39%), was ihr überlegene Fließeigenschaften für Überzugs- und Temperieranwendungen verleiht.",
          nl: "Couverture chocolade bevat een hoger percentage cacaoboter (31-39%), wat superieure vloeieigenschappen geeft voor coating en tempereer toepassingen."
        }
      }
    ]
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level4;
  } else {
    window.chocolateDessertsLevel4 = level4;
  }
})();