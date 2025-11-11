// Pastries Quiz - Level 6: Expert Techniques
(function() {
  const level6 = {
    name: {
      en: "Pastries Level 6",
      es: "Pastelería Nivel 6",
      de: "Gebäck Stufe 6",
      nl: "Gebak Level 6"
    },
    questions: [
      {
        question: {
          en: "What is the 'alpha-amylase' enzyme's role in professional bread and pastry production?",
          es: "¿Cuál es el papel de la enzima 'alfa-amilasa' en la producción profesional de pan y pastelería?",
          de: "Was ist die Rolle des Enzyms 'Alpha-Amylase' in der professionellen Brot- und Gebäckproduktion?",
          nl: "Wat is de rol van het enzym 'alfa-amylase' in professionele brood- en gebakproductie?"
        },
        options: [
          { en: "Breaking down starch into fermentable sugars for yeast", es: "Descomponer almidón en azúcares fermentables para levadura", de: "Stärke in gärfähige Zucker für Hefe abbauen", nl: "Zetmeel afbreken tot gistbare suikers voor gist" },
          { en: "Strengthening gluten networks in dough", es: "Fortalecer redes de gluten en masa", de: "Glutennetzwerke im Teig stärken", nl: "Glutennetwerken in deeg versterken" },
          { en: "Preventing oxidation of fats", es: "Prevenir oxidación de grasas", de: "Oxidation von Fetten verhindern", nl: "Oxidatie van vetten voorkomen" },
          { en: "Emulsifying water and oil phases", es: "Emulsificar fases de agua y aceite", de: "Wasser- und Ölphasen emulgieren", nl: "Water- en oliefasen emulgeren" }
        ],
        correct: 0,
        explanation: {
          en: "Alpha-amylase breaks down damaged starch molecules into simple sugars that yeast can ferment, improving dough fermentation and final product texture. It's crucial for controlling fermentation rates and achieving desired crumb structure.",
          es: "La alfa-amilasa descompone moléculas de almidón dañadas en azúcares simples que la levadura puede fermentar, mejorando la fermentación de la masa y la textura del producto final. Es crucial para controlar tasas de fermentación y lograr estructura de miga deseada.",
          de: "Alpha-Amylase baut beschädigte Stärkemoleküle in einfache Zucker ab die Hefe fermentieren kann, verbessert Teigfermentation und Endprodukttextur. Es ist entscheidend für Kontrolle der Fermentationsraten und Erreichen gewünschter Krumenstruktur.",
          nl: "Alfa-amylase breekt beschadigde zetmeelmoleculen af tot eenvoudige suikers die gist kan fermenteren, wat deegfermentatie en eindproducttextuur verbetert. Het is cruciaal voor het controleren van fermentatiesnelheden en het bereiken van gewenste kruimstructuur."
        }
      },
      {
        question: {
          en: "In molecular gastronomy applications, what is 'spherification' in pastry context?",
          es: "En aplicaciones de gastronomía molecular, ¿qué es la 'esferificación' en contexto de pastelería?",
          de: "Bei molekulargastronomischen Anwendungen, was ist 'Sphärifizierung' im Konditorkontext?",
          nl: "In moleculaire gastronomie toepassingen, wat is 'spherification' in banketbakkerscontext?"
        },
        options: [
          { en: "Creating liquid-filled spheres with gel membrane using calcium chloride and sodium alginate", es: "Crear esferas llenas de líquido con membrana de gel usando cloruro de calcio y alginato de sodio", de: "Flüssigkeitsgefüllte Kugeln mit Gelmembran mittels Calciumchlorid und Natriumalginat erstellen", nl: "Vloeistofgevulde bollen met gelmembraan maken met calciumchloride en natriumalginaat" },
          { en: "Shaping pastry dough into perfect spheres", es: "Formar masa de pastelería en esferas perfectas", de: "Konditorteig in perfekte Kugeln formen", nl: "Banketbakkersdeeg in perfecte bollen vormen" },
          { en: "Creating foam textures in desserts", es: "Crear texturas de espuma en postres", de: "Schaumtexturen in Desserts erstellen", nl: "Schuimtexturen in desserts creëren" },
          { en: "Freezing ingredients into spherical shapes", es: "Congelar ingredientes en formas esféricas", de: "Zutaten in sphärische Formen einfrieren", nl: "Ingrediënten in bolvormige vormen bevriezen" }
        ],
        correct: 0,
        explanation: {
          en: "Spherification uses calcium chloride and sodium alginate to create gel membranes around liquids, forming caviar-like spheres that burst with flavor. This technique allows pastry chefs to create surprising textural elements in modern desserts.",
          es: "La esferificación usa cloruro de calcio y alginato de sodio para crear membranas de gel alrededor de líquidos, formando esferas tipo caviar que explotan con sabor. Esta técnica permite a pasteleros crear elementos texturales sorprendentes en postres modernos.",
          de: "Sphärifizierung verwendet Calciumchlorid und Natriumalginat um Gelmembranen um Flüssigkeiten zu schaffen und kaviarähnliche Kugeln zu bilden die mit Geschmack platzen. Diese Technik ermöglicht Konditoren überraschende texturale Elemente in modernen Desserts zu schaffen.",
          nl: "Spherification gebruikt calciumchloride en natriumalginaat om gelmembranen rond vloeistoffen te creëren, wat kaviaarachtige bollen vormt die barsten van smaak. Deze techniek stelt banketbakkers in staat verrassende textuurelementen in moderne desserts te creëren."
        }
      },
      {
        question: {
          en: "What is 'protein coagulation temperature' critical for in advanced custard and cream preparations?",
          es: "¿Para qué es crítica la 'temperatura de coagulación de proteínas' en preparaciones avanzadas de natillas y cremas?",
          de: "Wofür ist die 'Proteinkoagulationstemperatur' bei fortgeschrittenen Pudding- und Cremezubereitungen kritisch?",
          nl: "Waarvoor is 'proteïne stollingtemperatuur' kritiek bij geavanceerde vla- en roompreparaten?"
        },
        options: [
          { en: "Preventing curdling by staying below 85°C while achieving proper thickening", es: "Prevenir cuajado manteniéndose debajo de 85°C mientras se logra espesado adecuado", de: "Gerinnung verhindern durch Bleiben unter 85°C während ordnungsgemäße Verdickung erreicht wird", nl: "Schiften voorkomen door onder 85°C te blijven terwijl juiste verdikking bereikt wordt" },
          { en: "Achieving maximum protein content", es: "Lograr máximo contenido de proteína", de: "Maximalen Proteingehalt erreichen", nl: "Maximaal eiwitgehalte bereiken" },
          { en: "Creating foam stability only", es: "Crear solo estabilidad de espuma", de: "Nur Schaumstabilität schaffen", nl: "Alleen schuimstabiliteit creëren" },
          { en: "Reducing cooking time significantly", es: "Reducir tiempo de cocción significativamente", de: "Kochzeit erheblich reduzieren", nl: "Kooktijd aanzienlijk verminderen" }
        ],
        correct: 0,
        explanation: {
          en: "Egg proteins begin coagulating around 60°C and fully set by 85°C. Staying below this critical temperature while achieving sufficient thickening prevents curdling and maintains smooth, creamy textures in professional custards and creams.",
          es: "Las proteínas del huevo comienzan a coagular alrededor de 60°C y se establecen completamente a 85°C. Mantenerse debajo de esta temperatura crítica mientras se logra espesado suficiente previene cuajado y mantiene texturas suaves y cremosas en natillas y cremas profesionales.",
          de: "Eiproteine beginnen um 60°C zu koagulieren und setzen vollständig bei 85°C. Unter dieser kritischen Temperatur zu bleiben während ausreichende Verdickung erreicht wird verhindert Gerinnung und erhält glatte, cremige Texturen in professionellen Puddings und Cremes.",
          nl: "Eiproteïnen beginnen rond 60°C te stollen en zijn volledig gestold bij 85°C. Onder deze kritieke temperatuur blijven terwijl voldoende verdikking bereikt wordt voorkomt schiften en behoudt gladde, romige texturen in professionele vla's en crèmes."
        }
      },
      {
        question: {
          en: "What is 'transglutaminase' used for in advanced pastry applications?",
          es: "¿Para qué se usa la 'transglutaminasa' en aplicaciones avanzadas de pastelería?",
          de: "Wofür wird 'Transglutaminase' in fortgeschrittenen Konditoranwendungen verwendet?",
          nl: "Waarvoor wordt 'transglutaminase' gebruikt in geavanceerde banketbakkerstoepassingen?"
        },
        options: [
          { en: "Binding proteins together to create unique textures and forms", es: "Unir proteínas para crear texturas y formas únicas", de: "Proteine zusammenbinden um einzigartige Texturen und Formen zu schaffen", nl: "Proteïnen samenbinden om unieke texturen en vormen te creëren" },
          { en: "Breaking down gluten in wheat flour", es: "Descomponer gluten en harina de trigo", de: "Gluten in Weizenmehl abbauen", nl: "Gluten in tarwemeel afbreken" },
          { en: "Stabilizing whipped cream foams", es: "Estabilizar espumas de crema batida", de: "Schlagsahne-Schäume stabilisieren", nl: "Geklopte roomschuimen stabiliseren" },
          { en: "Preventing sugar crystallization", es: "Prevenir cristalización de azúcar", de: "Zuckerkristallisation verhindern", nl: "Suikerkristallisatie voorkomen" }
        ],
        correct: 0,
        explanation: {
          en: "Transglutaminase is an enzyme that cross-links proteins, allowing pastry chefs to bind different protein sources together and create novel textures and presentations that wouldn't be possible through traditional methods.",
          es: "La transglutaminasa es una enzima que enlaza proteínas, permitiendo a pasteleros unir diferentes fuentes de proteína y crear texturas y presentaciones novedosas que no serían posibles a través de métodos tradicionales.",
          de: "Transglutaminase ist ein Enzym das Proteine quervernetzt und Konditoren ermöglicht verschiedene Proteinquellen zu verbinden und neuartige Texturen und Präsentationen zu schaffen die durch traditionelle Methoden nicht möglich wären.",
          nl: "Transglutaminase is een enzym dat proteïnen kruislings verbindt, waardoor banketbakkers verschillende proteïnebronnen kunnen samenbinden en nieuwe texturen en presentaties kunnen creëren die niet mogelijk zouden zijn met traditionele methoden."
        }
      },
      {
        question: {
          en: "In professional sugar work, what is the 'hard crack' stage temperature and its application?",
          es: "En trabajo profesional con azúcar, ¿cuál es la temperatura de la etapa 'crack duro' y su aplicación?",
          de: "Bei professioneller Zuckerarbeit, was ist die 'Hard Crack' Stufentemperatur und ihre Anwendung?",
          nl: "Bij professioneel suikerwerk, wat is de 'hard crack' fase temperatuur en toepassing?"
        },
        options: [
          { en: "150-154°C (300-310°F) for creating brittle decorations and sugar glass", es: "150-154°C (300-310°F) para crear decoraciones quebradizas y vidrio de azúcar", de: "150-154°C (300-310°F) zum Erstellen spröder Dekorationen und Zuckerglas", nl: "150-154°C (300-310°F) voor het maken van broze decoraties en suikerglas" },
          { en: "120-125°C (248-257°F) for soft caramels", es: "120-125°C (248-257°F) para caramelos blandos", de: "120-125°C (248-257°F) für weiche Karamells", nl: "120-125°C (248-257°F) voor zachte karamels" },
          { en: "135-140°C (275-284°F) for toffee making", es: "135-140°C (275-284°F) para hacer toffee", de: "135-140°C (275-284°F) für Toffee-Herstellung", nl: "135-140°C (275-284°F) voor toffee maken" },
          { en: "160-170°C (320-338°F) for caramelization only", es: "160-170°C (320-338°F) solo para caramelización", de: "160-170°C (320-338°F) nur für Karamelisierung", nl: "160-170°C (320-338°F) alleen voor karamelisatie" }
        ],
        correct: 0,
        explanation: {
          en: "Hard crack stage at 150-154°C creates sugar that hardens to a glass-like, brittle consistency when cooled. This is essential for creating isomalt decorations, sugar glass effects, and delicate sugar sculptures in advanced pastry work.",
          es: "La etapa de crack duro a 150-154°C crea azúcar que se endurece a una consistencia vidriosa y quebradiza cuando se enfría. Esto es esencial para crear decoraciones de isomalt, efectos de vidrio de azúcar y esculturas delicadas de azúcar en trabajo avanzado de pastelería.",
          de: "Hard Crack Stufe bei 150-154°C erzeugt Zucker der beim Abkühlen zu glasartiger, spröder Konsistenz aushärtet. Dies ist wesentlich für Isomalt-Dekorationen, Zuckerglas-Effekte und delikate Zuckerskulpturen in fortgeschrittener Konditorarbeit.",
          nl: "Hard crack fase bij 150-154°C creëert suiker die uithardt tot een glasachtige, broze consistentie wanneer afgekoeld. Dit is essentieel voor het maken van isomalt decoraties, suikerglas effecten en delicate suikersculpturen in geavanceerd banketbakkerswerk."
        }
      },
      {
        question: {
          en: "What is 'gellan gum' and its specific advantage in modern pastry applications?",
          es: "¿Qué es la 'goma gellan' y su ventaja específica en aplicaciones modernas de pastelería?",
          de: "Was ist 'Gellan Gum' und sein spezifischer Vorteil in modernen Konditoranwendungen?",
          nl: "Wat is 'gellan gom' en zijn specifieke voordeel in moderne banketbakkerstoepassingen?"
        },
        options: [
          { en: "Creates thermoreversible gels that maintain clarity and don't melt at room temperature", es: "Crea geles termorreversibles que mantienen claridad y no se derriten a temperatura ambiente", de: "Erstellt thermoreversible Gele die Klarheit beibehalten und bei Raumtemperatur nicht schmelzen", nl: "Creëert thermoreversibele gels die helderheid behouden en niet smelten bij kamertemperatuur" },
          { en: "Acts as an emulsifier for oil and water phases", es: "Actúa como emulsificante para fases de aceite y agua", de: "Wirkt als Emulgator für Öl- und Wasserphasen", nl: "Werkt als emulgator voor olie- en waterfasen" },
          { en: "Provides sweetening properties without calories", es: "Proporciona propiedades edulcorantes sin calorías", de: "Bietet Süßungseigenschaften ohne Kalorien", nl: "Biedt zoeteigenschappen zonder calorieën" },
          { en: "Prevents crystallization in chocolate work", es: "Previene cristalización en trabajo con chocolate", de: "Verhindert Kristallisation bei Schokoladenarbeit", nl: "Voorkomt kristallisatie bij chocoladewerk" }
        ],
        correct: 0,
        explanation: {
          en: "Gellan gum creates strong, clear gels that are stable at room temperature and can be made thermoreversible. This makes it ideal for creating transparent textures, fluid gels, and temperature-stable presentations in modern pastry work.",
          es: "La goma gellan crea geles fuertes y claros que son estables a temperatura ambiente y pueden hacerse termorreversibles. Esto la hace ideal para crear texturas transparentes, geles fluidos y presentaciones estables a temperatura en trabajo moderno de pastelería.",
          de: "Gellan Gum erzeugt starke, klare Gele die bei Raumtemperatur stabil sind und thermoreversibel gemacht werden können. Dies macht es ideal für transparente Texturen, Flüssiggele und temperaturstabile Präsentationen in moderner Konditorarbeit.",
          nl: "Gellan gom creëert sterke, heldere gels die stabiel zijn bij kamertemperatuur en thermoreversibel gemaakt kunnen worden. Dit maakt het ideaal voor het creëren van transparante texturen, vloeibare gels en temperatuurstabiele presentaties in modern banketbakkerswerk."
        }
      },
      {
        question: {
          en: "What is 'controlled crystallization' in chocolate tempering and why is it crucial?",
          es: "¿Qué es la 'cristalización controlada' en el templado de chocolate y por qué es crucial?",
          de: "Was ist 'kontrollierte Kristallisation' beim Schokolade temperieren und warum ist sie entscheidend?",
          nl: "Wat is 'gecontroleerde kristallisatie' bij chocolade tempereren en waarom is het cruciaal?"
        },
        options: [
          { en: "Forming stable beta V crystals while preventing unstable polymorphs for optimal texture and appearance", es: "Formar cristales beta V estables mientras se previenen polimorfos inestables para textura y apariencia óptimas", de: "Stabile Beta-V-Kristalle bilden während instabile Polymorphe verhindert werden für optimale Textur und Aussehen", nl: "Stabiele bèta V kristallen vormen terwijl instabiele polymorfen voorkomen worden voor optimale textuur en uitstraling" },
          { en: "Simply cooling chocolate to room temperature", es: "Simplemente enfriar chocolate a temperatura ambiente", de: "Schokolade einfach auf Raumtemperatur abkühlen", nl: "Chocolade simpel afkoelen tot kamertemperatuur" },
          { en: "Adding stabilizers to prevent melting", es: "Agregar estabilizadores para prevenir derretimiento", de: "Stabilisatoren hinzufügen um Schmelzen zu verhindern", nl: "Stabilisatoren toevoegen om smelten te voorkomen" },
          { en: "Mixing different types of chocolate together", es: "Mezclar diferentes tipos de chocolate juntos", de: "Verschiedene Schokoladenarten zusammenmischen", nl: "Verschillende soorten chocolade mengen" }
        ],
        correct: 0,
        explanation: {
          en: "Controlled crystallization ensures that cocoa butter forms stable beta V crystals (Form V) while preventing unstable polymorphs. This creates the desired snap, gloss, and resistance to bloom that defines properly tempered chocolate.",
          es: "La cristalización controlada asegura que la manteca de cacao forme cristales beta V estables (Forma V) mientras previene polimorfos inestables. Esto crea el chasquido, brillo y resistencia al bloom deseados que define chocolate bien templado.",
          de: "Kontrollierte Kristallisation stellt sicher dass Kakaobutter stabile Beta-V-Kristalle (Form V) bildet während instabile Polymorphe verhindert werden. Dies schafft den gewünschten Knack, Glanz und Widerstand gegen Bloom der richtig temperierte Schokolade definiert.",
          nl: "Gecontroleerde kristallisatie zorgt ervoor dat cacaoboter stabiele bèta V kristallen (Vorm V) vormt terwijl instabiele polymorfen voorkomen worden. Dit creëert de gewenste knak, glans en weerstand tegen bloom die goed getemperde chocolade definieert."
        }
      },
      {
        question: {
          en: "In advanced fermentation, what role do 'wild yeasts' play in artisan pastry development?",
          es: "En fermentación avanzada, ¿qué papel juegan las 'levaduras silvestres' en desarrollo de pastelería artesanal?",
          de: "Bei fortgeschrittener Fermentation, welche Rolle spielen 'wilde Hefen' in der handwerklichen Gebäckentwicklung?",
          nl: "Bij geavanceerde fermentatie, welke rol spelen 'wilde gisten' in ambachtelijke gebakcontwikkeling?"
        },
        options: [
          { en: "Creating complex flavor profiles through diverse microbial communities and extended fermentation", es: "Crear perfiles de sabor complejos a través de comunidades microbianas diversas y fermentación extendida", de: "Komplexe Geschmacksprofile durch diverse mikrobielle Gemeinschaften und verlängerte Fermentation schaffen", nl: "Complexe smaakprofielen creëren door diverse microbiële gemeenschappen en verlengde fermentatie" },
          { en: "Contaminating dough and causing spoilage", es: "Contaminar masa y causar deterioro", de: "Teig kontaminieren und Verderb verursachen", nl: "Deeg besmetten en bederf veroorzaken" },
          { en: "Replacing commercial yeast entirely", es: "Reemplazar levadura comercial completamente", de: "Handelshefe vollständig ersetzen", nl: "Commerciële gist volledig vervangen" },
          { en: "Accelerating fermentation speed only", es: "Solo acelerar velocidad de fermentación", de: "Nur Fermentationsgeschwindigkeit beschleunigen", nl: "Alleen fermentatiesnelheid versnellen" }
        ],
        correct: 0,
        explanation: {
          en: "Wild yeasts in sourdough cultures create complex ecosystems with bacteria, producing unique organic acids, esters, and alcohols that develop distinctive flavors impossible to achieve with commercial yeast alone.",
          es: "Las levaduras silvestres en cultivos de masa madre crean ecosistemas complejos con bacterias, produciendo ácidos orgánicos, ésteres y alcoholes únicos que desarrollan sabores distintivos imposibles de lograr solo con levadura comercial.",
          de: "Wilde Hefen in Sauerteigkulturen schaffen komplexe Ökosysteme mit Bakterien und produzieren einzigartige organische Säuren, Ester und Alkohole die distinctive Geschmäcker entwickeln die nur mit Handelshefe unmöglich zu erreichen sind.",
          nl: "Wilde gisten in zuurdesemculturen creëren complexe ecosystemen met bacteriën, waarbij unieke organische zuren, esters en alcoholen geproduceerd worden die onderscheidende smaken ontwikkelen die onmogelijk te bereiken zijn met alleen commerciële gist."
        }
      },
      {
        question: {
          en: "What is 'pectin methylesterase' and its function in fruit-based pastry applications?",
          es: "¿Qué es la 'pectina metilesterasa' y su función en aplicaciones de pastelería basadas en frutas?",
          de: "Was ist 'Pektin-Methylesterase' und ihre Funktion in fruchtbasierten Konditoranwendungen?",
          nl: "Wat is 'pectine methylesterase' en zijn functie in op fruit gebaseerde banketbakkerstoepassingen?"
        },
        options: [
          { en: "Modifying pectin structure to control gel strength and texture in fruit preparations", es: "Modificar estructura de pectina para controlar fuerza de gel y textura en preparaciones de fruta", de: "Pektinstruktur modifizieren um Gelstärke und Textur in Fruchtzubereitungen zu kontrollieren", nl: "Pectinestructuur modificeren om gelsterkte en textuur in fruitpreparaten te controleren" },
          { en: "Breaking down fruit cell walls completely", es: "Descomponer paredes celulares de fruta completamente", de: "Fruchtzellwände vollständig abbauen", nl: "Fruitcelwanden volledig afbreken" },
          { en: "Adding sweetness to fruit preparations", es: "Agregar dulzura a preparaciones de fruta", de: "Süße zu Fruchtzubereitungen hinzufügen", nl: "Zoetheid toevoegen aan fruitpreparaten" },
          { en: "Preventing fruit oxidation only", es: "Solo prevenir oxidación de fruta", de: "Nur Fruchtoxidation verhindern", nl: "Alleen fruitoxidatie voorkomen" }
        ],
        correct: 0,
        explanation: {
          en: "Pectin methylesterase removes methyl groups from pectin, allowing it to form stronger gels with calcium ions. This enzyme control allows pastry chefs to fine-tune the texture of fruit preparations and create specific gel strengths.",
          es: "La pectina metilesterasa remueve grupos metilo de la pectina, permitiéndole formar geles más fuertes con iones de calcio. Este control enzimático permite a pasteleros ajustar finamente la textura de preparaciones de fruta y crear fuerzas de gel específicas.",
          de: "Pektin-Methylesterase entfernt Methylgruppen von Pektin und ermöglicht ihm stärkere Gele mit Calciumionen zu bilden. Diese Enzymkontrolle ermöglicht Konditoren die Textur von Fruchtzubereitungen fein abzustimmen und spezifische Gelstärken zu schaffen.",
          nl: "Pectine methylesterase verwijdert methylgroepen van pectine, waardoor het sterkere gels kan vormen met calciumionen. Deze enzymcontrole stelt banketbakkers in staat de textuur van fruitpreparaten fijn af te stemmen en specifieke gelsterktes te creëren."
        }
      },
      {
        question: {
          en: "What is 'protein denaturation' and its controlled application in modern pastry techniques?",
          es: "¿Qué es la 'desnaturalización de proteínas' y su aplicación controlada en técnicas modernas de pastelería?",
          de: "Was ist 'Proteindenaturierung' und ihre kontrollierte Anwendung in modernen Konditortechniken?",
          nl: "Wat is 'proteïne denaturatie' en zijn gecontroleerde toepassing in moderne banketbakkerstechnieken?"
        },
        options: [
          { en: "Unfolding protein structures to create new textures and binding properties", es: "Desenrollar estructuras de proteínas para crear nuevas texturas y propiedades de unión", de: "Proteinstrukturen entfalten um neue Texturen und Bindungseigenschaften zu schaffen", nl: "Proteïnestructuren ontvouwen om nieuwe texturen en bindingseigenschappen te creëren" },
          { en: "Removing all proteins from preparations", es: "Remover todas las proteínas de preparaciones", de: "Alle Proteine aus Zubereitungen entfernen", nl: "Alle proteïnen uit preparaten verwijderen" },
          { en: "Adding synthetic proteins to recipes", es: "Agregar proteínas sintéticas a recetas", de: "Synthetische Proteine zu Rezepten hinzufügen", nl: "Synthetische proteïnen aan recepten toevoegen" },
          { en: "Increasing protein nutritional value only", es: "Solo aumentar valor nutricional de proteínas", de: "Nur Protein-Nährwert erhöhen", nl: "Alleen proteïne voedingswaarde verhogen" }
        ],
        correct: 0,
        explanation: {
          en: "Controlled protein denaturation through heat, pH, or mechanical action unfolds protein structures, exposing new binding sites and creating different textures. This is used in molecular gastronomy to create foams, gels, and unique presentations.",
          es: "La desnaturalización controlada de proteínas a través de calor, pH o acción mecánica desenrolla estructuras de proteínas, exponiendo nuevos sitios de unión y creando diferentes texturas. Esto se usa en gastronomía molecular para crear espumas, geles y presentaciones únicas.",
          de: "Kontrollierte Proteindenaturierung durch Hitze, pH oder mechanische Einwirkung entfaltet Proteinstrukturen, legt neue Bindungsstellen frei und schafft verschiedene Texturen. Dies wird in der Molekulargastronomie verwendet um Schäume, Gele und einzigartige Präsentationen zu schaffen.",
          nl: "Gecontroleerde proteïne denaturatie door warmte, pH of mechanische actie ontvouwt proteïnestructuren, stelt nieuwe bindingsplaatsen bloot en creëert verschillende texturen. Dit wordt gebruikt in moleculaire gastronomie om schuimen, gels en unieke presentaties te maken."
        }
      },
      {
        question: {
          en: "In advanced sugar crystallization, what is the difference between 'seeding' and 'shocking'?",
          es: "En cristalización avanzada de azúcar, ¿cuál es la diferencia entre 'sembrar' y 'chocar'?",
          de: "Bei fortgeschrittener Zuckerkristallisation, was ist der Unterschied zwischen 'Impfen' und 'Schocken'?",
          nl: "Bij geavanceerde suikerkristallisatie, wat is het verschil tussen 'zaaien' en 'schokken'?"
        },
        options: [
          { en: "Seeding introduces crystal nuclei gradually; shocking forces rapid crystallization through temperature drop", es: "Sembrar introduce núcleos de cristal gradualmente; chocar fuerza cristalización rápida a través de caída de temperatura", de: "Impfen führt Kristallkeime allmählich ein; Schocken erzwingt schnelle Kristallisation durch Temperatursturz", nl: "Zaaien introduceert kristalkernen geleidelijk; schokken forceert snelle kristallisatie door temperatuurdaling" },
          { en: "Both techniques achieve identical results", es: "Ambas técnicas logran resultados idénticos", de: "Beide Techniken erreichen identische Ergebnisse", nl: "Beide technieken bereiken identieke resultaten" },
          { en: "Seeding prevents crystallization; shocking promotes it", es: "Sembrar previene cristalización; chocar la promueve", de: "Impfen verhindert Kristallisation; Schocken fördert sie", nl: "Zaaien voorkomt kristallisatie; schokken bevordert het" },
          { en: "Shocking uses chemicals; seeding uses mechanical action", es: "Chocar usa químicos; sembrar usa acción mecánica", de: "Schocken verwendet Chemikalien; Impfen verwendet mechanische Einwirkung", nl: "Schokken gebruikt chemicaliën; zaaien gebruikt mechanische actie" }
        ],
        correct: 0,
        explanation: {
          en: "Seeding involves gradually introducing small amounts of formed crystals to control crystallization rate and crystal size. Shocking uses rapid temperature changes to force immediate crystallization, creating different textures and appearances in sugar work.",
          es: "Sembrar involucra introducir gradualmente pequeñas cantidades de cristales formados para controlar tasa de cristalización y tamaño de cristal. Chocar usa cambios rápidos de temperatura para forzar cristalización inmediata, creando diferentes texturas y apariencias en trabajo con azúcar.",
          de: "Impfen beinhaltet allmähliches Einführen kleiner Mengen geformter Kristalle um Kristallisationsrate und Kristallgröße zu kontrollieren. Schocken verwendet schnelle Temperaturänderungen um sofortige Kristallisation zu erzwingen und verschiedene Texturen und Aussehen in Zuckerarbeit zu schaffen.",
          nl: "Zaaien houdt het geleidelijk introduceren van kleine hoeveelheden gevormde kristallen in om kristallisatiesnelheid en kristalgrootte te controleren. Schokken gebruikt snelle temperatuurveranderingen om onmiddellijke kristallisatie te forceren, wat verschillende texturen en uitstraling in suikerwerk creëert."
        }
      },
      {
        question: {
          en: "What is 'hydrocolloid synergy' in modern pastry applications?",
          es: "¿Qué es la 'sinergia de hidrocoloides' en aplicaciones modernas de pastelería?",
          de: "Was ist 'Hydrokolloid-Synergie' in modernen Konditoranwendungen?",
          nl: "Wat is 'hydrocolloïde synergie' in moderne banketbakkerstoepassingen?"
        },
        options: [
          { en: "Combining different hydrocolloids to achieve superior gel properties than single agents", es: "Combinar diferentes hidrocoloides para lograr propiedades de gel superiores que agentes individuales", de: "Verschiedene Hydrokolloide kombinieren um überlegene Geleigenschaften als Einzelwirkstoffe zu erreichen", nl: "Verschillende hydrocolloïden combineren om superieure geleigenschappen te bereiken dan enkele middelen" },
          { en: "Using only one hydrocolloid at maximum concentration", es: "Usar solo un hidrocoloide a concentración máxima", de: "Nur ein Hydrokolloid bei maximaler Konzentration verwenden", nl: "Slechts één hydrocolloïde bij maximale concentratie gebruiken" },
          { en: "Avoiding all hydrocolloids in favor of traditional thickeners", es: "Evitar todos los hidrocoloides a favor de espesantes tradicionales", de: "Alle Hydrokolloide zugunsten traditioneller Verdickungsmittel vermeiden", nl: "Alle hydrocolloïden vermijden ten gunste van traditionele verdikkingsmiddelen" },
          { en: "Replacing water with hydrocolloid solutions", es: "Reemplazar agua con soluciones de hidrocoloide", de: "Wasser durch Hydrokolloidlösungen ersetzen", nl: "Water vervangen door hydrocolloïde oplossingen" }
        ],
        correct: 0,
        explanation: {
          en: "Hydrocolloid synergy occurs when combining different gelling agents (like agar and locust bean gum) creates gels with enhanced properties - stronger, more elastic, or thermostable - than either ingredient alone could achieve.",
          es: "La sinergia de hidrocoloides ocurre cuando combinar diferentes agentes gelificantes (como agar y goma de algarrobo) crea geles con propiedades mejoradas - más fuertes, más elásticos o termoestables - que cualquier ingrediente solo podría lograr.",
          de: "Hydrokolloid-Synergie tritt auf wenn Kombination verschiedener Geliermittel (wie Agar und Johannisbrotgummi) Gele mit verbesserten Eigenschaften schafft - stärker, elastischer oder thermostabil - als jeder Inhaltsstoff allein erreichen könnte.",
          nl: "Hydrocolloïde synergie treedt op wanneer het combineren van verschillende geleringsmiddelen (zoals agar en johannesbroodpitmeel) gels creëert met verbeterde eigenschappen - sterker, elastischer of thermostabiel - dan elk ingrediënt alleen zou kunnen bereiken."
        }
      },
      {
        question: {
          en: "What is 'enzymatic browning control' and its importance in fruit-forward pastries?",
          es: "¿Qué es el 'control de dorado enzimático' y su importancia en pasteles centrados en frutas?",
          de: "Was ist 'enzymatische Bräunungskontrolle' und ihre Wichtigkeit in fruchtorientierten Gebäcken?",
          nl: "Wat is 'enzymatische bruiningscontrole' en zijn belang in fruitgerichte gebakken?"
        },
        options: [
          { en: "Preventing polyphenol oxidase activity to maintain color and flavor integrity", es: "Prevenir actividad de polifenol oxidasa para mantener integridad de color y sabor", de: "Polyphenoloxidase-Aktivität verhindern um Farb- und Geschmacksintegrität zu erhalten", nl: "Polyfenoloxidase activiteit voorkomen om kleur- en smaakintegriteit te behouden" },
          { en: "Encouraging browning for flavor development", es: "Alentar dorado para desarrollo de sabor", de: "Bräunung für Geschmacksentwicklung fördern", nl: "Bruining aanmoedigen voor smaakontwikkeling" },
          { en: "Adding artificial colors to replace lost pigments", es: "Agregar colores artificiales para reemplazar pigmentos perdidos", de: "Künstliche Farben hinzufügen um verlorene Pigmente zu ersetzen", nl: "Kunstmatige kleuren toevoegen om verloren pigmenten te vervangen" },
          { en: "Using only frozen fruits to avoid the issue", es: "Usar solo frutas congeladas para evitar el problema", de: "Nur gefrorene Früchte verwenden um das Problem zu vermeiden", nl: "Alleen bevroren fruit gebruiken om het probleem te vermijden" }
        ],
        correct: 0,
        explanation: {
          en: "Enzymatic browning control uses techniques like acidification, antioxidants, or blanching to inhibit polyphenol oxidase, preserving the natural colors and fresh flavors of fruits in pastries without unwanted oxidation.",
          es: "El control de dorado enzimático usa técnicas como acidificación, antioxidantes o blanqueado para inhibir polifenol oxidasa, preservando colores naturales y sabores frescos de frutas en pasteles sin oxidación no deseada.",
          de: "Enzymatische Bräunungskontrolle verwendet Techniken wie Ansäuerung, Antioxidantien oder Blanchieren um Polyphenoloxidase zu hemmen und natürliche Farben und frische Geschmäcker von Früchten in Gebäcken ohne unerwünschte Oxidation zu bewahren.",
          nl: "Enzymatische bruiningscontrole gebruikt technieken zoals verzuring, antioxidanten of blancheren om polyfenoloxidase te remmen, waarbij natuurlijke kleuren en verse smaken van fruit in gebakken behouden blijven zonder ongewenste oxidatie."
        }
      },
      {
        question: {
          en: "In advanced emulsion science, what is 'Pickering stabilization' used for?",
          es: "En ciencia avanzada de emulsiones, ¿para qué se usa la 'estabilización Pickering'?",
          de: "In fortgeschrittener Emulsionswissenschaft, wofür wird 'Pickering-Stabilisierung' verwendet?",
          nl: "In geavanceerde emulsiewetenschap, waarvoor wordt 'Pickering stabilisatie' gebruikt?"
        },
        options: [
          { en: "Using solid particles to stabilize emulsions instead of traditional emulsifiers", es: "Usar partículas sólidas para estabilizar emulsiones en lugar de emulsificantes tradicionales", de: "Feste Partikel verwenden um Emulsionen anstatt traditioneller Emulgatoren zu stabilisieren", nl: "Vaste deeltjes gebruiken om emulsies te stabiliseren in plaats van traditionele emulgatoren" },
          { en: "Adding extra lecithin for stronger emulsions", es: "Agregar lecitina extra para emulsiones más fuertes", de: "Extra Lecithin für stärkere Emulsionen hinzufügen", nl: "Extra lecithine toevoegen voor sterkere emulsies" },
          { en: "Using only natural emulsifiers from eggs", es: "Usar solo emulsificantes naturales de huevos", de: "Nur natürliche Emulgatoren aus Eiern verwenden", nl: "Alleen natuurlijke emulgatoren uit eieren gebruiken" },
          { en: "Heating emulsions to very high temperatures", es: "Calentar emulsiones a temperaturas muy altas", de: "Emulsionen auf sehr hohe Temperaturen erhitzen", nl: "Emulsies tot zeer hoge temperaturen verhitten" }
        ],
        correct: 0,
        explanation: {
          en: "Pickering stabilization uses solid particles (like modified starches or proteins) that position themselves at the oil-water interface, creating extremely stable emulsions that resist separation better than traditional emulsifier-based systems.",
          es: "La estabilización Pickering usa partículas sólidas (como almidones o proteínas modificadas) que se posicionan en la interfaz aceite-agua, creando emulsiones extremadamente estables que resisten separación mejor que sistemas basados en emulsificantes tradicionales.",
          de: "Pickering-Stabilisierung verwendet feste Partikel (wie modifizierte Stärken oder Proteine) die sich an der Öl-Wasser-Grenzfläche positionieren und extrem stabile Emulsionen schaffen die Trennung besser widerstehen als traditionelle emulgatorbasierte Systeme.",
          nl: "Pickering stabilisatie gebruikt vaste deeltjes (zoals gemodificeerde zetmelen of proteïnen) die zich positioneren op het olie-water grensvlak, wat extreem stabiele emulsies creëert die scheiding beter weerstaan dan traditionele emulgator-gebaseerde systemen."
        }
      },
      {
        question: {
          en: "What is 'protein foam stabilization' and its application in modern dessert techniques?",
          es: "¿Qué es la 'estabilización de espuma de proteínas' y su aplicación en técnicas modernas de postre?",
          de: "Was ist 'Protein-Schaumstabilisierung' und ihre Anwendung in modernen Dessert-Techniken?",
          nl: "Wat is 'proteïne schuimstabilisatie' en zijn toepassing in moderne desserttechnieken?"
        },
        options: [
          { en: "Using protein films at air-water interfaces to create stable foams with desired textures", es: "Usar películas de proteína en interfaces aire-agua para crear espumas estables con texturas deseadas", de: "Proteinfilme an Luft-Wasser-Grenzflächen verwenden um stabile Schäume mit gewünschten Texturen zu schaffen", nl: "Proteïnefilms gebruiken op lucht-water grensvlakken om stabiele schuimen met gewenste texturen te creëren" },
          { en: "Adding gelatin to all foam preparations", es: "Agregar gelatina a todas las preparaciones de espuma", de: "Gelatine zu allen Schaumzubereitungen hinzufügen", nl: "Gelatine toevoegen aan alle schuimpreparaten" },
          { en: "Removing all proteins from foam systems", es: "Remover todas las proteínas de sistemas de espuma", de: "Alle Proteine aus Schaumsystemen entfernen", nl: "Alle proteïnen uit schuimsystemen verwijderen" },
          { en: "Using only egg whites for foam creation", es: "Usar solo claras de huevo para creación de espuma", de: "Nur Eiweiß für Schaumerstellung verwenden", nl: "Alleen eiwitten gebruiken voor schuimcreatie" }
        ],
        correct: 0,
        explanation: {
          en: "Protein foam stabilization involves proteins unfolding at air-water interfaces to form protective films around air bubbles, creating stable foams. Different proteins create different foam characteristics, allowing pastry chefs to customize texture and stability.",
          es: "La estabilización de espuma de proteínas involucra proteínas desenrollándose en interfaces aire-agua para formar películas protectoras alrededor de burbujas de aire, creando espumas estables. Diferentes proteínas crean diferentes características de espuma, permitiendo a pasteleros personalizar textura y estabilidad.",
          de: "Protein-Schaumstabilisierung beinhaltet Proteine die sich an Luft-Wasser-Grenzflächen entfalten um Schutzfilme um Luftblasen zu bilden und stabile Schäume zu schaffen. Verschiedene Proteine schaffen verschiedene Schaumeigenschaften und ermöglichen Konditoren Textur und Stabilität anzupassen.",
          nl: "Proteïne schuimstabilisatie houdt proteïnen in die zich ontvouwen op lucht-water grensvlakken om beschermende films rond luchtbellen te vormen, wat stabiele schuimen creëert. Verschillende proteïnen creëren verschillende schuimeigenschappen, waardoor banketbakkers textuur en stabiliteit kunnen aanpassen."
        }
      },
      {
        question: {
          en: "What is 'retrogradation inhibition' and its commercial importance in pastry production?",
          es: "¿Qué es la 'inhibición de retrogradación' y su importancia comercial en producción de pastelería?",
          de: "Was ist 'Retrogradationshemmung' und ihre kommerzielle Wichtigkeit in der Gebäckproduktion?",
          nl: "Wat is 'retrogradatie inhibitie' en zijn commerciële belang in gebakproductie?"
        },
        options: [
          { en: "Using enzymes and emulsifiers to maintain product freshness and extend shelf life", es: "Usar enzimas y emulsificantes para mantener frescura del producto y extender vida útil", de: "Enzyme und Emulgatoren verwenden um Produktfrische zu erhalten und Haltbarkeit zu verlängern", nl: "Enzymen en emulgatoren gebruiken om productversheid te behouden en houdbaarheid te verlengen" },
          { en: "Preventing all starch from forming in products", es: "Prevenir que se forme todo almidón en productos", de: "Verhindern dass sich Stärke in Produkten bildet", nl: "Voorkomen dat zetmeel vormt in producten" },
          { en: "Adding preservatives to stop spoilage", es: "Agregar conservantes para detener deterioro", de: "Konservierungsstoffe hinzufügen um Verderb zu stoppen", nl: "Conserveermiddelen toevoegen om bederf te stoppen" },
          { en: "Using only fresh ingredients daily", es: "Usar solo ingredientes frescos diariamente", de: "Nur täglich frische Zutaten verwenden", nl: "Alleen dagelijks verse ingrediënten gebruiken" }
        ],
        correct: 0,
        explanation: {
          en: "Retrogradation inhibition uses enzymes like amylase and emulsifiers to prevent starch molecules from realigning into crystalline structures, keeping baked goods soft and fresh longer, which is crucial for commercial viability.",
          es: "La inhibición de retrogradación usa enzimas como amilasa y emulsificantes para prevenir que moléculas de almidón se realineen en estructuras cristalinas, manteniendo productos horneados suaves y frescos por más tiempo, lo cual es crucial para viabilidad comercial.",
          de: "Retrogradationshemmung verwendet Enzyme wie Amylase und Emulgatoren um zu verhindern dass sich Stärkemoleküle in kristalline Strukturen neu ausrichten, hält Backwaren weich und frisch länger, was für kommerzielle Lebensfähigkeit entscheidend ist.",
          nl: "Retrogradatie inhibitie gebruikt enzymen zoals amylase en emulgatoren om te voorkomen dat zetmeelmoleculen zich herrangschikken in kristallijne structuren, waardoor gebakken producten langer zacht en vers blijven, wat cruciaal is voor commerciële levensvatbaarheid."
        }
      },
      {
        question: {
          en: "In precision fermentation, what is 'LAB succession' in sourdough development?",
          es: "En fermentación de precisión, ¿qué es la 'sucesión LAB' en desarrollo de masa madre?",
          de: "Bei Präzisionsfermentation, was ist 'LAB-Sukzession' in der Sauerteigentwicklung?",
          nl: "Bij precisie fermentatie, wat is 'LAB successie' in zuurdesenontwikkeling?"
        },
        options: [
          { en: "Sequential dominance of different lactic acid bacteria creating flavor complexity over time", es: "Dominancia secuencial de diferentes bacterias de ácido láctico creando complejidad de sabor con el tiempo", de: "Sequenzielle Dominanz verschiedener Milchsäurebakterien die Geschmackskomplexität über die Zeit schaffen", nl: "Opeenvolgende dominantie van verschillende melkzuurbacteriën die smaakcomplexiteit creëren over tijd" },
          { en: "Using laboratory equipment to control fermentation", es: "Usar equipo de laboratorio para controlar fermentación", de: "Laborausrüstung verwenden um Fermentation zu kontrollieren", nl: "Laboratoriumapparatuur gebruiken om fermentatie te controleren" },
          { en: "Adding commercial LAB cultures artificially", es: "Agregar cultivos LAB comerciales artificialmente", de: "Kommerzielle LAB-Kulturen künstlich hinzufügen", nl: "Commerciële LAB culturen kunstmatig toevoegen" },
          { en: "Preventing any bacterial growth in starters", es: "Prevenir cualquier crecimiento bacteriano en iniciadores", de: "Jedes Bakterienwachstum in Startern verhindern", nl: "Elke bacteriële groei in starters voorkomen" }
        ],
        correct: 0,
        explanation: {
          en: "LAB succession refers to how different lactic acid bacteria species dominate at different stages of sourdough culture development, each contributing unique organic acids and flavor compounds that create the complex flavor profile of mature sourdough.",
          es: "La sucesión LAB se refiere a cómo diferentes especies de bacterias de ácido láctico dominan en diferentes etapas del desarrollo del cultivo de masa madre, cada una contribuyendo ácidos orgánicos únicos y compuestos de sabor que crean el perfil de sabor complejo de masa madre madura.",
          de: "LAB-Sukzession bezieht sich darauf wie verschiedene Milchsäurebakterien-Arten in verschiedenen Stadien der Sauerteigkulturentwicklung dominieren, jede trägt einzigartige organische Säuren und Geschmacksverbindungen bei die das komplexe Geschmacksprofil von reifem Sauerteig schaffen.",
          nl: "LAB successie verwijst naar hoe verschillende melkzuurbacteriënsoorten domineren in verschillende stadia van zuurdesemcultuurontwikkeling, elk draagt unieke organische zuren en smaakverbindingen bij die het complexe smaakprofiel van rijpe zuurdesem creëren."
        }
      },
      {
        question: {
          en: "What is 'crystalline fat polymorphism' and its control in chocolate and confection work?",
          es: "¿Qué es el 'polimorfismo de grasa cristalina' y su control en trabajo de chocolate y confección?",
          de: "Was ist 'kristalliner Fettpolymorphismus' und seine Kontrolle in Schokoladen- und Konfektarbeit?",
          nl: "Wat is 'kristallijne vetpolymorfisme' en zijn controle in chocolade- en confectiewerk?"
        },
        options: [
          { en: "Managing different crystal forms of fats to achieve desired melting properties and texture", es: "Manejar diferentes formas cristalinas de grasas para lograr propiedades de fusión y textura deseadas", de: "Verschiedene Kristallformen von Fetten verwalten um gewünschte Schmelzeigenschaften und Textur zu erreichen", nl: "Verschillende kristalvormen van vetten beheren om gewenste smelteigenschappen en textuur te bereiken" },
          { en: "Using only one type of fat in all applications", es: "Usar solo un tipo de grasa en todas las aplicaciones", de: "Nur eine Fettart in allen Anwendungen verwenden", nl: "Slechts één type vet gebruiken in alle toepassingen" },
          { en: "Avoiding all crystalline structures in fats", es: "Evitar todas las estructuras cristalinas en grasas", de: "Alle kristallinen Strukturen in Fetten vermeiden", nl: "Alle kristallijne structuren in vetten vermijden" },
          { en: "Adding stabilizers to prevent any crystal formation", es: "Agregar estabilizadores para prevenir cualquier formación de cristales", de: "Stabilisatoren hinzufügen um jede Kristallbildung zu verhindern", nl: "Stabilisatoren toevoegen om kristalvorming te voorkomen" }
        ],
        correct: 0,
        explanation: {
          en: "Crystalline fat polymorphism involves controlling which crystal forms develop in cocoa butter and other fats. Different polymorphs have different melting points and textures, so controlling crystallization determines the final product's mouthfeel and stability.",
          es: "El polimorfismo de grasa cristalina involucra controlar qué formas cristalinas se desarrollan en manteca de cacao y otras grasas. Diferentes polimorfos tienen diferentes puntos de fusión y texturas, así que controlar cristalización determina sensación en boca y estabilidad del producto final.",
          de: "Kristalliner Fettpolymorphismus beinhaltet die Kontrolle welche Kristallformen sich in Kakaobutter und anderen Fetten entwickeln. Verschiedene Polymorphe haben verschiedene Schmelzpunkte und Texturen, so bestimmt Kristallisationskontrolle das Mundgefühl und die Stabilität des Endprodukts.",
          nl: "Kristallijne vetpolymorfisme houdt het controleren in welke kristalvormen zich ontwikkelen in cacaoboter en andere vetten. Verschillende polymorfen hebben verschillende smeltpunten en texturen, dus kristallisatiecontrole bepaalt het mondgevoel en stabiliteit van het eindproduct."
        }
      },
      {
        question: {
          en: "What is 'enzyme cascade reactions' in advanced food biochemistry applications?",
          es: "¿Qué son las 'reacciones en cascada de enzimas' en aplicaciones avanzadas de bioquímica alimentaria?",
          de: "Was sind 'Enzym-Kaskadenreaktionen' in fortgeschrittenen Lebensmittelbiochemie-Anwendungen?",
          nl: "Wat zijn 'enzym cascade reacties' in geavanceerde voedselbiochemie toepassingen?"
        },
        options: [
          { en: "Sequential enzyme reactions where one enzyme's product becomes another's substrate", es: "Reacciones enzimáticas secuenciales donde el producto de una enzima se convierte en sustrato de otra", de: "Sequenzielle Enzymreaktionen wo das Produkt einer Enzyme zum Substrat einer anderen wird", nl: "Opeenvolgende enzymreacties waarbij het product van één enzym het substraat van een ander wordt" },
          { en: "Using multiple enzymes simultaneously without interaction", es: "Usar múltiples enzimas simultáneamente sin interacción", de: "Mehrere Enzyme gleichzeitig ohne Wechselwirkung verwenden", nl: "Meerdere enzymen tegelijkertijd gebruiken zonder interactie" },
          { en: "Preventing all enzyme activity in food systems", es: "Prevenir toda actividad enzimática en sistemas alimentarios", de: "Alle Enzymaktivität in Lebensmittelsystemen verhindern", nl: "Alle enzymactiviteit in voedselsystemen voorkomen" },
          { en: "Adding synthetic enzymes to replace natural ones", es: "Agregar enzimas sintéticas para reemplazar naturales", de: "Synthetische Enzyme hinzufügen um natürliche zu ersetzen", nl: "Synthetische enzymen toevoegen om natuurlijke te vervangen" }
        ],
        correct: 0,
        explanation: {
          en: "Enzyme cascade reactions involve multiple enzymes working in sequence, where each enzyme converts a substrate that feeds into the next enzyme's reaction. This allows for complex biochemical transformations and precise control over flavor and texture development.",
          es: "Las reacciones en cascada de enzimas involucran múltiples enzimas trabajando en secuencia, donde cada enzima convierte un sustrato que alimenta la reacción de la siguiente enzima. Esto permite transformaciones bioquímicas complejas y control preciso sobre desarrollo de sabor y textura.",
          de: "Enzym-Kaskadenreaktionen beinhalten mehrere Enzyme die in Sequenz arbeiten, wo jedes Enzym ein Substrat umwandelt das in die Reaktion des nächsten Enzyms eingeht. Dies ermöglicht komplexe biochemische Transformationen und präzise Kontrolle über Geschmacks- und Texturentwicklung.",
          nl: "Enzym cascade reacties betrekken meerdere enzymen die in volgorde werken, waarbij elk enzym een substraat omzet dat de reactie van het volgende enzym voedt. Dit maakt complexe biochemische transformaties mogelijk en precieze controle over smaak- en textuurontwikkeling."
        }
      },
      {
        question: {
          en: "What is the critical water activity level for preventing lipid oxidation in pastries?",
          es: "¿Cuál es el nivel crítico de actividad del agua para prevenir la oxidación lipídica en pasteles?",
          de: "Was ist der kritische Wasseraktivitätswert zur Verhinderung von Lipidoxidation in Gebäck?",
          nl: "Wat is het kritieke wateractiviteitsniveau voor het voorkomen van lipide oxidatie in gebak?"
        },
        options: [
          { en: "0.2-0.3", es: "0.2-0.3", de: "0.2-0.3", nl: "0.2-0.3" },
          { en: "0.4-0.5", es: "0.4-0.5", de: "0.4-0.5", nl: "0.4-0.5" },
          { en: "0.6-0.7", es: "0.6-0.7", de: "0.6-0.7", nl: "0.6-0.7" },
          { en: "0.8-0.9", es: "0.8-0.9", de: "0.8-0.9", nl: "0.8-0.9" }
        ],
        correct: 0,
        explanation: {
          en: "Water activity levels of 0.2-0.3 minimize lipid oxidation in pastries. At these low levels, there's insufficient water to support oxidative reactions, helping preserve flavor and extend shelf life.",
          es: "Los niveles de actividad del agua de 0.2-0.3 minimizan la oxidación lipídica en pasteles. En estos niveles bajos, no hay suficiente agua para soportar reacciones oxidativas, ayudando a preservar el sabor y extender la vida útil.",
          de: "Wasseraktivitätswerte von 0.2-0.3 minimieren Lipidoxidation in Gebäck. Bei diesen niedrigen Werten gibt es unzureichend Wasser um oxidative Reaktionen zu unterstützen, was hilft Geschmack zu bewahren und Haltbarkeit zu verlängern.",
          nl: "Wateractiviteitsniveaus van 0.2-0.3 minimaliseren lipide oxidatie in gebak. Bij deze lage niveaus is er onvoldoende water om oxidatieve reacties te ondersteunen, wat helpt smaak te behouden en houdbaarheid te verlengen."
        }
      }
    ]
  };

  // Export for use in the quiz application
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level6;
  } else if (typeof window !== 'undefined') {
    window.level6 = level6;
  }
})();