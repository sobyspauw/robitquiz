// Pastries Quiz - Level 5: Advanced Techniques
(function() {
  const level5 = {
    name: {
      en: "Pastries Level 5",
      es: "Pastelería Nivel 5",
      de: "Gebäck Stufe 5",
      nl: "Gebak Level 5"
    },
    questions: [
      {
        question: {
          en: "What is the ideal temperature for laminating croissant dough?",
          es: "¿Cuál es la temperatura ideal para laminar masa de croissant?",
          de: "Was ist die ideale Temperatur zum Laminieren von Croissant-Teig?",
          nl: "Wat is de ideale temperatuur voor het lamineren van croissantdeeg?"
        },
        options: [
          { en: "18-20°C (64-68°F)", es: "18-20°C (64-68°F)", de: "18-20°C (64-68°F)", nl: "18-20°C (64-68°F)" },
          { en: "25-27°C (77-81°F)", es: "25-27°C (77-81°F)", de: "25-27°C (77-81°F)", nl: "25-27°C (77-81°F)" },
          { en: "12-15°C (54-59°F)", es: "12-15°C (54-59°F)", de: "12-15°C (54-59°F)", nl: "12-15°C (54-59°F)" },
          { en: "30-32°C (86-90°F)", es: "30-32°C (86-90°F)", de: "30-32°C (86-90°F)", nl: "30-32°C (86-90°F)" }
        ],
        correct: 0,
        explanation: {
          en: "18-20°C is ideal for laminating croissant dough. At this temperature, the butter remains pliable but not melty, allowing for proper layering without breaking through the dough or becoming too hard to roll.",
          es: "18-20°C es ideal para laminar masa de croissant. A esta temperatura, la mantequilla permanece maleable pero no derretida, permitiendo un laminado adecuado sin romper la masa o volverse muy dura para estirar.",
          de: "18-20°C ist ideal zum Laminieren von Croissant-Teig. Bei dieser Temperatur bleibt die Butter formbar aber nicht schmelzend, was ordnungsgemäße Schichtbildung ermöglicht ohne den Teig zu durchbrechen oder zu hart zum Ausrollen zu werden.",
          nl: "18-20°C is ideaal voor het lamineren van croissantdeeg. Bij deze temperatuur blijft de boter buigzaam maar niet smeltend, wat zorgt voor goede laagvorming zonder het deeg te doorbreken of te hard te worden om uit te rollen."
        }
      },
      {
        question: {
          en: "In professional choux pastry, what is the purpose of 'panade'?",
          es: "En la pasta choux profesional, ¿cuál es el propósito del 'panade'?",
          de: "Bei professionellem Brandteig, was ist der Zweck von 'Panade'?",
          nl: "Bij professionele soezendeeg, wat is het doel van 'panade'?"
        },
        options: [
          { en: "Creating the starch-water gel that forms the pastry structure", es: "Crear el gel de almidón-agua que forma la estructura del pastel", de: "Erstellen des Stärke-Wasser-Gels das die Gebäckstruktur bildet", nl: "Het creëren van de zetmeel-water gel die de gebakstructuur vormt" },
          { en: "Adding sugar for sweetness", es: "Agregar azúcar para dulzura", de: "Zucker für Süße hinzufügen", nl: "Suiker toevoegen voor zoetheid" },
          { en: "Incorporating air into the mixture", es: "Incorporar aire en la mezcla", de: "Luft in die Mischung einarbeiten", nl: "Lucht in het mengsel verwerken" },
          { en: "Cooling the dough rapidly", es: "Enfriar la masa rápidamente", de: "Den Teig schnell abkühlen", nl: "Het deeg snel afkoelen" }
        ],
        correct: 0,
        explanation: {
          en: "Panade is the crucial gelatinization stage where flour and water form a gel when heated. This creates the structure that will expand when steam forms during baking, giving choux its characteristic hollow interior.",
          es: "Panade es la etapa crucial de gelatinización donde la harina y el agua forman un gel al calentarse. Esto crea la estructura que se expandirá cuando se forme vapor durante el horneado, dando al choux su interior hueco característico.",
          de: "Panade ist die entscheidende Verkleisterungsphase wo Mehl und Wasser beim Erhitzen ein Gel bilden. Dies schafft die Struktur die sich ausdehnt wenn beim Backen Dampf entsteht und dem Brandteig sein charakteristisches hohles Inneres verleiht.",
          nl: "Panade is de cruciale gelvorming fase waarbij meel en water een gel vormen wanneer verhit. Dit creëert de structuur die zal uitzetten wanneer stoom ontstaat tijdens het bakken, wat soezendeeg zijn karakteristieke holle binnenkant geeft."
        }
      },
      {
        question: {
          en: "What is the professional term for the butter block used in laminated doughs?",
          es: "¿Cuál es el término profesional para el bloque de mantequilla usado en masas laminadas?",
          de: "Was ist der professionelle Begriff für den Butterblock in laminierten Teigen?",
          nl: "Wat is de professionele term voor het boterblok gebruikt in gelamineerde degen?"
        },
        options: [
          { en: "Beurrage", es: "Beurrage", de: "Beurrage", nl: "Beurrage" },
          { en: "Détrempe", es: "Détrempe", de: "Détrempe", nl: "Détrempe" },
          { en: "Feuilletage", es: "Feuilletage", de: "Feuilletage", nl: "Feuilletage" },
          { en: "Paton", es: "Paton", de: "Paton", nl: "Paton" }
        ],
        correct: 0,
        explanation: {
          en: "Beurrage is the French term for the butter block used in laminated pastries. Détrempe refers to the basic dough, feuilletage is the layering process, and paton is the dough block after folding.",
          es: "Beurrage es el término francés para el bloque de mantequilla usado en pasteles laminados. Détrempe se refiere a la masa básica, feuilletage es el proceso de laminado, y paton es el bloque de masa después del plegado.",
          de: "Beurrage ist der französische Begriff für den Butterblock in laminierten Gebäcken. Détrempe bezieht sich auf den Grundteig, Feuilletage ist der Schichtungsprozess, und Paton ist der Teigblock nach dem Falten.",
          nl: "Beurrage is de Franse term voor het boterblok gebruikt in gelamineerde gebakken. Détrempe verwijst naar het basisdeeg, feuilletage is het laagproces, en paton is het deegblok na het vouwen."
        }
      },
      {
        question: {
          en: "In advanced pastry work, what does 'pointage' refer to?",
          es: "En trabajo avanzado de pastelería, ¿a qué se refiere 'pointage'?",
          de: "Bei fortgeschrittener Konditorarbeit, worauf bezieht sich 'Pointage'?",
          nl: "Bij geavanceerd banketbakkerswerk, waar verwijst 'pointage' naar?"
        },
        options: [
          { en: "The first fermentation period of yeasted doughs", es: "El primer período de fermentación de masas con levadura", de: "Die erste Gärungsperiode von Hefeteigen", nl: "De eerste fermentatieperiode van gistdegen" },
          { en: "Decorating with pastry tips", es: "Decorar con boquillas de pastelería", de: "Dekorieren mit Spritztüllen", nl: "Decoreren met spuitmondjes" },
          { en: "Scoring bread before baking", es: "Hacer cortes en el pan antes de hornear", de: "Brot vor dem Backen einschneiden", nl: "Brood inkerven voor het bakken" },
          { en: "Temperature checking technique", es: "Técnica de verificación de temperatura", de: "Temperaturprüftechnik", nl: "Temperatuurcontroletechniek" }
        ],
        correct: 0,
        explanation: {
          en: "Pointage is the French term for the first fermentation or bulk fermentation period in bread and pastry making, where the dough develops flavor and structure before shaping.",
          es: "Pointage es el término francés para la primera fermentación o período de fermentación en masa en panadería y pastelería, donde la masa desarrolla sabor y estructura antes del formado.",
          de: "Pointage ist der französische Begriff für die erste Gärung oder Hauptgärungsperiode beim Brot- und Gebäckbacken, wo der Teig Geschmack und Struktur entwickelt vor dem Formen.",
          nl: "Pointage is de Franse term voor de eerste fermentatie of bulkfermentatieperiode bij brood- en banketbakken, waarbij het deeg smaak en structuur ontwikkelt voor het vormen."
        }
      },
      {
        question: {
          en: "What is the optimal hydration percentage for professional croissant détrempe?",
          es: "¿Cuál es el porcentaje de hidratación óptimo para détrempe de croissant profesional?",
          de: "Was ist der optimale Hydratationsprozentsatz für professionelle Croissant-Détrempe?",
          nl: "Wat is het optimale hydratiepercentage voor professionele croissant détrempe?"
        },
        options: [
          { en: "55-58%", es: "55-58%", de: "55-58%", nl: "55-58%" },
          { en: "45-50%", es: "45-50%", de: "45-50%", nl: "45-50%" },
          { en: "65-70%", es: "65-70%", de: "65-70%", nl: "65-70%" },
          { en: "40-45%", es: "40-45%", de: "40-45%", nl: "40-45%" }
        ],
        correct: 0,
        explanation: {
          en: "Professional croissant détrempe typically uses 55-58% hydration. This provides enough moisture for gluten development while maintaining the strength needed for proper lamination without making the dough too sticky.",
          es: "La détrempe de croissant profesional típicamente usa 55-58% de hidratación. Esto proporciona suficiente humedad para el desarrollo del gluten mientras mantiene la fuerza necesaria para un laminado adecuado sin hacer la masa demasiado pegajosa.",
          de: "Professionelle Croissant-Détrempe verwendet typischerweise 55-58% Hydratation. Dies bietet genug Feuchtigkeit für Glutenentwicklung während die für ordnungsgemäße Laminierung nötige Stärke beibehalten wird ohne den Teig zu klebrig zu machen.",
          nl: "Professionele croissant détrempe gebruikt doorgaans 55-58% hydratatie. Dit biedt voldoende vocht voor glutenontwikkeling terwijl de kracht behouden blijft die nodig is voor goede laminatie zonder het deeg te plakkerig te maken."
        }
      },
      {
        question: {
          en: "In professional patisserie, what is 'crème mousseline'?",
          es: "En pastelería profesional, ¿qué es 'crème mousseline'?",
          de: "In der professionellen Konditorei, was ist 'Crème Mousseline'?",
          nl: "In professionele patisserie, wat is 'crème mousseline'?"
        },
        options: [
          { en: "Pastry cream lightened with whipped butter", es: "Crema pastelera aligerada con mantequilla batida", de: "Konditorcreme mit geschlagener Butter gelockert", nl: "Banketbakkersroom verlicht met geklopte boter" },
          { en: "Chocolate ganache with cream", es: "Ganache de chocolate con crema", de: "Schokoladen-Ganache mit Sahne", nl: "Chocolade ganache met room" },
          { en: "Whipped cream with gelatin", es: "Crema batida con gelatina", de: "Schlagsahne mit Gelatine", nl: "Slagroom met gelatine" },
          { en: "Egg white foam with sugar", es: "Espuma de clara de huevo con azúcar", de: "Eiweißschaum mit Zucker", nl: "Eiwitschuim met suiker" }
        ],
        correct: 0,
        explanation: {
          en: "Crème mousseline is pastry cream (crème pâtissière) that has been lightened by folding in soft butter. This creates a smoother, lighter texture and richer flavor, commonly used in éclairs and refined pastries.",
          es: "Crème mousseline es crema pastelera (crème pâtissière) que ha sido aligerada incorporando mantequilla blanda. Esto crea una textura más suave y ligera y un sabor más rico, comúnmente usado en éclairs y pasteles refinados.",
          de: "Crème Mousseline ist Konditorcreme (Crème Pâtissière) die durch Unterheben von weicher Butter gelockert wurde. Dies schafft eine glattere, leichtere Textur und reicheren Geschmack, häufig in Éclairs und raffinierten Gebäcken verwendet.",
          nl: "Crème mousseline is banketbakkersroom (crème pâtissière) die verlicht is door het ondermengen van zachte boter. Dit creëert een gladdere, lichtere textuur en rijkere smaak, vaak gebruikt in éclairs en verfijnde gebakken."
        }
      },
      {
        question: {
          en: "What is the professional technique called when creating consistent layers in mille-feuille?",
          es: "¿Cómo se llama la técnica profesional para crear capas consistentes en mille-feuille?",
          de: "Wie heißt die professionelle Technik für gleichmäßige Schichten in Mille-feuille?",
          nl: "Hoe heet de professionele techniek voor het creëren van consistente lagen in mille-feuille?"
        },
        options: [
          { en: "Feuilletage inversé", es: "Feuilletage inversé", de: "Feuilletage inversé", nl: "Feuilletage inversé" },
          { en: "Laminage classique", es: "Laminage classique", de: "Laminage classique", nl: "Laminage classique" },
          { en: "Pliage simple", es: "Pliage simple", de: "Pliage simple", nl: "Pliage simple" },
          { en: "Détrempe directe", es: "Détrempe directe", de: "Détrempe directe", nl: "Détrempe directe" }
        ],
        correct: 0,
        explanation: {
          en: "Feuilletage inversé (reverse puff pastry) is where butter surrounds the dough rather than being enclosed by it. This technique provides more consistent layers and better rise for delicate pastries like mille-feuille.",
          es: "Feuilletage inversé (hojaldre inverso) es donde la mantequilla rodea la masa en lugar de estar encerrada por ella. Esta técnica proporciona capas más consistentes y mejor elevación para pasteles delicados como mille-feuille.",
          de: "Feuilletage inversé (umgekehrter Blätterteig) ist wo Butter den Teig umgibt anstatt von ihm umschlossen zu werden. Diese Technik bietet gleichmäßigere Schichten und besseren Aufgang für delikate Gebäcke wie Mille-feuille.",
          nl: "Feuilletage inversé (omgekeerd bladerdeeg) is waarbij boter het deeg omringt in plaats van erdoor omsloten te worden. Deze techniek biedt consistentere lagen en betere rijs voor delicate gebakken zoals mille-feuille."
        }
      },
      {
        question: {
          en: "What is the ideal protein content in flour for laminated pastries?",
          es: "¿Cuál es el contenido ideal de proteína en harina para pasteles laminados?",
          de: "Was ist der ideale Proteingehalt in Mehl für laminierte Gebäcke?",
          nl: "Wat is het ideale eiwitgehalte in meel voor gelamineerde gebakken?"
        },
        options: [
          { en: "10-11% protein", es: "10-11% proteína", de: "10-11% Protein", nl: "10-11% eiwit" },
          { en: "12-14% protein", es: "12-14% proteína", de: "12-14% Protein", nl: "12-14% eiwit" },
          { en: "8-9% protein", es: "8-9% proteína", de: "8-9% Protein", nl: "8-9% eiwit" },
          { en: "15-16% protein", es: "15-16% proteína", de: "15-16% Protein", nl: "15-16% eiwit" }
        ],
        correct: 0,
        explanation: {
          en: "Medium protein flour (10-11%) is ideal for laminated pastries. It provides enough gluten structure for proper layering and rolling without becoming too tough or elastic, which would tear during lamination.",
          es: "Harina de proteína media (10-11%) es ideal para pasteles laminados. Proporciona suficiente estructura de gluten para un laminado y estirado adecuados sin volverse demasiado dura o elástica, lo que se desgarraría durante el laminado.",
          de: "Mittelproteinmehl (10-11%) ist ideal für laminierte Gebäcke. Es bietet genug Glutenstruktur für ordnungsgemäße Schichtung und Ausrollung ohne zu hart oder elastisch zu werden, was beim Laminieren reißen würde.",
          nl: "Middelmatig eiwitrijk meel (10-11%) is ideaal voor gelamineerde gebakken. Het biedt voldoende glutenstructuur voor goede laagvorming en uitrollen zonder te taai of elastisch te worden, wat zou scheuren tijdens laminatie."
        }
      },
      {
        question: {
          en: "In advanced choux pastry, what causes 'weeping' or moisture leakage?",
          es: "En pasta choux avanzada, ¿qué causa el 'llanto' o fuga de humedad?",
          de: "Bei fortgeschrittenem Brandteig, was verursacht 'Weinen' oder Feuchtigkeitsaustritt?",
          nl: "Bij geavanceerde soezendeeg, wat veroorzaakt 'huilen' of vochtlekkage?"
        },
        options: [
          { en: "Insufficient cooking of the panade or underbaked pastry", es: "Cocción insuficiente del panade o pastel poco horneado", de: "Unzureichendes Kochen der Panade oder untergebackenes Gebäck", nl: "Onvoldoende koken van de panade of ondergebakken gebak" },
          { en: "Too much sugar in the recipe", es: "Demasiada azúcar en la receta", de: "Zu viel Zucker im Rezept", nl: "Te veel suiker in het recept" },
          { en: "Using cold eggs", es: "Usar huevos fríos", de: "Kalte Eier verwenden", nl: "Koude eieren gebruiken" },
          { en: "Overmixing the batter", es: "Mezclar demasiado la masa", de: "Den Teig zu stark rühren", nl: "Het beslag te veel mixen" }
        ],
        correct: 0,
        explanation: {
          en: "Weeping occurs when the panade isn't cooked sufficiently to fully gelatinize the starch, or when the pastry is underbaked. The starch network can't hold moisture properly, causing it to leak out.",
          es: "El llanto ocurre cuando el panade no está cocido lo suficiente para gelatinizar completamente el almidón, o cuando el pastel está poco horneado. La red de almidón no puede retener la humedad adecuadamente, causando que se filtre.",
          de: "Weinen tritt auf wenn die Panade nicht ausreichend gekocht ist um die Stärke vollständig zu verkleistern, oder wenn das Gebäck untergebacken ist. Das Stärkenetzwerk kann Feuchtigkeit nicht richtig halten, wodurch sie austritt.",
          nl: "Huilen treedt op wanneer de panade niet voldoende gekookt is om het zetmeel volledig te laten geleren, of wanneer het gebak ondergebakken is. Het zetmeelnetwerk kan vocht niet goed vasthouden, waardoor het eruit lekt."
        }
      },
      {
        question: {
          en: "What is 'retrogradation' in relation to professional pastry storage?",
          es: "¿Qué es la 'retrogradación' en relación al almacenamiento profesional de pastelería?",
          de: "Was ist 'Retrogradation' in Bezug auf professionelle Gebäcklagerung?",
          nl: "Wat is 'retrogradatie' in relatie tot professionele gebakopslag?"
        },
        options: [
          { en: "Starch molecules realigning and causing staleness", es: "Moléculas de almidón realineándose y causando deterioro", de: "Stärkemoleküle richten sich neu aus und verursachen Altbackenheit", nl: "Zetmeelmoleculen herrangschikken en veroorzaken veroudering" },
          { en: "Butter separating from dough during storage", es: "Mantequilla separándose de la masa durante el almacenamiento", de: "Butter trennt sich vom Teig während der Lagerung", nl: "Boter scheidt van deeg tijdens opslag" },
          { en: "Sugar crystallizing on pastry surface", es: "Azúcar cristalizando en la superficie del pastel", de: "Zucker kristallisiert auf der Gebäckoberfläche", nl: "Suiker kristalliseert op gebakoppervlak" },
          { en: "Eggs coagulating at room temperature", es: "Huevos coagulando a temperatura ambiente", de: "Eier gerinnen bei Raumtemperatur", nl: "Eieren stollen bij kamertemperatuur" }
        ],
        correct: 0,
        explanation: {
          en: "Retrogradation is when starch molecules in baked goods realign and form crystalline structures, causing pastries to become stale and lose their soft texture. This is why proper storage and anti-staling agents are crucial.",
          es: "La retrogradación es cuando las moléculas de almidón en productos horneados se realinean y forman estructuras cristalinas, causando que los pasteles se vuelvan rancios y pierdan su textura suave. Por eso el almacenamiento adecuado y agentes anti-deterioro son cruciales.",
          de: "Retrogradation ist wenn Stärkemoleküle in Backwaren sich neu ausrichten und kristalline Strukturen bilden, wodurch Gebäck altbacken wird und seine weiche Textur verliert. Deshalb sind ordnungsgemäße Lagerung und Anti-Altbacken-Mittel entscheidend.",
          nl: "Retrogradatie is wanneer zetmeelmoleculen in gebakken producten zich herrangschikken en kristallijne structuren vormen, waardoor gebak veroudert en zijn zachte textuur verliest. Daarom zijn juiste opslag en anti-verouderingsmiddelen cruciaal."
        }
      },
      {
        question: {
          en: "In professional pastry, what is the purpose of 'tempering' chocolate before use?",
          es: "En pastelería profesional, ¿cuál es el propósito de 'templar' chocolate antes del uso?",
          de: "In der professionellen Konditorei, was ist der Zweck des 'Temperierens' von Schokolade vor Gebrauch?",
          nl: "In professionele banketbakkerij, wat is het doel van 'tempereren' van chocolade voor gebruik?"
        },
        options: [
          { en: "Creating stable beta V crystals for proper snap and shine", es: "Crear cristales beta V estables para chasquido y brillo adecuados", de: "Stabile Beta-V-Kristalle für richtigen Knack und Glanz schaffen", nl: "Stabiele bèta V kristallen creëren voor juiste knak en glans" },
          { en: "Melting chocolate to liquid state", es: "Derretir chocolate a estado líquido", de: "Schokolade zu flüssigem Zustand schmelzen", nl: "Chocolade smelten tot vloeibare staat" },
          { en: "Adding sugar to sweeten chocolate", es: "Agregar azúcar para endulzar chocolate", de: "Zucker hinzufügen um Schokolade zu süßen", nl: "Suiker toevoegen om chocolade te zoeten" },
          { en: "Cooling chocolate rapidly in refrigerator", es: "Enfriar chocolate rápidamente en refrigerador", de: "Schokolade schnell im Kühlschrank kühlen", nl: "Chocolade snel koelen in koelkast" }
        ],
        correct: 0,
        explanation: {
          en: "Tempering chocolate creates stable beta V crystal formation, which gives properly tempered chocolate its characteristic snap, smooth texture, glossy appearance, and resistance to bloom. This is essential for professional chocolate work.",
          es: "Templar chocolate crea formación estable de cristales beta V, lo que da al chocolate bien templado su chasquido característico, textura suave, apariencia brillante y resistencia al bloom. Esto es esencial para trabajo profesional con chocolate.",
          de: "Schokolade temperieren schafft stabile Beta-V-Kristallformation, was richtig temperierter Schokolade ihren charakteristischen Knack, glatte Textur, glänzendes Aussehen und Widerstand gegen Bloom verleiht. Dies ist für professionelle Schokoladenarbeit wesentlich.",
          nl: "Chocolade tempereren creëert stabiele bèta V kristalformatie, wat goed getemperde chocolade zijn karakteristieke knak, gladde textuur, glanzende uitstraling en weerstand tegen bloom geeft. Dit is essentieel voor professioneel chocoladewerk."
        }
      },
      {
        question: {
          en: "What is the optimal resting time for croissant dough between folds?",
          es: "¿Cuál es el tiempo de reposo óptimo para masa de croissant entre pliegues?",
          de: "Was ist die optimale Ruhezeit für Croissant-Teig zwischen den Falten?",
          nl: "Wat is de optimale rusttijd voor croissantdeeg tussen vouwen?"
        },
        options: [
          { en: "30-45 minutes in refrigerator", es: "30-45 minutos en refrigerador", de: "30-45 Minuten im Kühlschrank", nl: "30-45 minuten in koelkast" },
          { en: "2-3 hours at room temperature", es: "2-3 horas a temperatura ambiente", de: "2-3 Stunden bei Raumtemperatur", nl: "2-3 uur op kamertemperatuur" },
          { en: "15-20 minutes in freezer", es: "15-20 minutos en congelador", de: "15-20 Minuten im Gefrierschrank", nl: "15-20 minuten in vriezer" },
          { en: "1-2 hours in warm place", es: "1-2 horas en lugar cálido", de: "1-2 Stunden an warmem Ort", nl: "1-2 uur op warme plek" }
        ],
        correct: 0,
        explanation: {
          en: "30-45 minutes refrigeration between folds allows the gluten to relax and the butter to firm up properly. This prevents tearing during rolling and maintains distinct layers essential for proper lamination.",
          es: "30-45 minutos de refrigeración entre pliegues permite que el gluten se relaje y la mantequilla se endurezca adecuadamente. Esto previene desgarros durante el estirado y mantiene capas distintas esenciales para un laminado adecuado.",
          de: "30-45 Minuten Kühlung zwischen Falten ermöglicht dem Gluten sich zu entspannen und der Butter richtig fest zu werden. Dies verhindert Reißen beim Ausrollen und erhält deutliche Schichten die für ordnungsgemäße Laminierung wesentlich sind.",
          nl: "30-45 minuten koeling tussen vouwen laat het gluten ontspannen en de boter goed verstevigen. Dit voorkomt scheuren tijdens uitrollen en behoudt duidelijke lagen essentieel voor goede laminatie."
        }
      },
      {
        question: {
          en: "In advanced pastry techniques, what is 'enrobing'?",
          es: "En técnicas avanzadas de pastelería, ¿qué es 'enrobing'?",
          de: "Bei fortgeschrittenen Konditortechniken, was ist 'Enrobing'?",
          nl: "Bij geavanceerde banketbakkerstechnieken, wat is 'enrobing'?"
        },
        options: [
          { en: "Coating pastries completely in tempered chocolate", es: "Cubrir pasteles completamente en chocolate templado", de: "Gebäck vollständig in temperierter Schokolade überziehen", nl: "Gebakken volledig bedekken met getemperde chocolade" },
          { en: "Wrapping pastries in parchment paper", es: "Envolver pasteles en papel pergamino", de: "Gebäck in Pergamentpapier einwickeln", nl: "Gebakken inpakken in bakpapier" },
          { en: "Creating decorative piping patterns", es: "Crear patrones decorativos de manga", de: "Dekorative Spritzmuster erstellen", nl: "Decoratieve spuitpatronen maken" },
          { en: "Folding dough into specific shapes", es: "Plegar masa en formas específicas", de: "Teig in spezifische Formen falten", nl: "Deeg in specifieke vormen vouwen" }
        ],
        correct: 0,
        explanation: {
          en: "Enrobing is the professional technique of completely coating confections or pastries in tempered chocolate, creating a smooth, uniform shell. This requires proper tempering and technique to achieve professional results.",
          es: "Enrobing es la técnica profesional de cubrir completamente confecciones o pasteles en chocolate templado, creando una cáscara suave y uniforme. Esto requiere templado y técnica adecuados para lograr resultados profesionales.",
          de: "Enrobing ist die professionelle Technik Konfekt oder Gebäck vollständig in temperierter Schokolade zu überziehen und eine glatte, gleichmäßige Hülle zu schaffen. Dies erfordert ordnungsgemäßes Temperieren und Technik für professionelle Ergebnisse.",
          nl: "Enrobing is de professionele techniek van het volledig bedekken van confect of gebakken met getemperde chocolade, wat een gladde, uniforme schil creëert. Dit vereist juist tempereren en techniek voor professionele resultaten."
        }
      },
      {
        question: {
          en: "What is the primary difference between 'pâte à choux' and 'pâte à choux sucrée'?",
          es: "¿Cuál es la diferencia principal entre 'pâte à choux' y 'pâte à choux sucrée'?",
          de: "Was ist der Hauptunterschied zwischen 'Pâte à Choux' und 'Pâte à Choux Sucrée'?",
          nl: "Wat is het primaire verschil tussen 'pâte à choux' en 'pâte à choux sucrée'?"
        },
        options: [
          { en: "Addition of sugar for sweet applications and enhanced browning", es: "Adición de azúcar para aplicaciones dulces y dorado mejorado", de: "Zugabe von Zucker für süße Anwendungen und verbesserte Bräunung", nl: "Toevoeging van suiker voor zoete toepassingen en verbeterde bruining" },
          { en: "Different cooking temperature requirements", es: "Diferentes requisitos de temperatura de cocción", de: "Unterschiedliche Kochtemperaturanforderungen", nl: "Verschillende kooktemperatuurvereisten" },
          { en: "Use of milk instead of water", es: "Uso de leche en lugar de agua", de: "Verwendung von Milch anstatt Wasser", nl: "Gebruik van melk in plaats van water" },
          { en: "Addition of cream for richness", es: "Adición de crema para riqueza", de: "Zugabe von Sahne für Reichhaltigkeit", nl: "Toevoeging van room voor rijkdom" }
        ],
        correct: 0,
        explanation: {
          en: "Pâte à choux sucrée includes sugar, which not only sweetens the pastry for dessert applications but also promotes better browning through caramelization during baking, creating a more attractive golden color.",
          es: "Pâte à choux sucrée incluye azúcar, que no solo endulza el pastel para aplicaciones de postre sino que también promueve mejor dorado a través de caramelización durante el horneado, creando un color dorado más atractivo.",
          de: "Pâte à Choux Sucrée enthält Zucker, der nicht nur das Gebäck für Dessertanwendungen süßt sondern auch bessere Bräunung durch Karamelisierung beim Backen fördert und eine attraktivere goldene Farbe schafft.",
          nl: "Pâte à choux sucrée bevat suiker, wat niet alleen het gebak zoet maakt voor dessertapplicaties maar ook betere bruining bevordert door karamelisatie tijdens het bakken, wat een meer aantrekkelijke gouden kleur creëert."
        }
      },
      {
        question: {
          en: "In professional laminated pastry production, what is 'windowpaning'?",
          es: "En producción profesional de pasteles laminados, ¿qué es 'windowpaning'?",
          de: "Bei professioneller Produktion laminierter Gebäcke, was ist 'Windowpaning'?",
          nl: "Bij professionele productie van gelamineerde gebakken, wat is 'windowpaning'?"
        },
        options: [
          { en: "Testing dough elasticity by stretching until translucent", es: "Probar elasticidad de masa estirando hasta translúcida", de: "Teigelastizität testen durch Dehnen bis durchscheinend", nl: "Deegelasticiteit testen door rekken tot doorschijnend" },
          { en: "Creating decorative window patterns on pastry", es: "Crear patrones decorativos de ventana en pastel", de: "Dekorative Fenstermuster auf Gebäck erstellen", nl: "Decoratieve raampatronen maken op gebak" },
          { en: "Cutting viewing holes in oven doors", es: "Cortar agujeros de visualización en puertas de horno", de: "Sichtlöcher in Ofentüren schneiden", nl: "Kijkgaten snijden in ovendeuren" },
          { en: "Glazing pastry with egg wash", es: "Glasear pastel con huevo batido", de: "Gebäck mit Eigelb bestreichen", nl: "Gebak glazuren met eierwas" }
        ],
        correct: 0,
        explanation: {
          en: "Windowpaning is a test for proper gluten development where dough is stretched thin enough to become translucent. This indicates sufficient gluten formation for successful lamination without tearing.",
          es: "Windowpaning es una prueba para desarrollo adecuado de gluten donde la masa se estira lo suficientemente delgada para volverse translúcida. Esto indica formación suficiente de gluten para laminado exitoso sin desgarrarse.",
          de: "Windowpaning ist ein Test für ordnungsgemäße Glutenentwicklung wo Teig dünn genug gedehnt wird um durchscheinend zu werden. Dies zeigt ausreichende Glutenbildung für erfolgreiche Laminierung ohne Reißen an.",
          nl: "Windowpaning is een test voor goede glutenontwikkeling waarbij deeg dun genoeg gerekt wordt om doorschijnend te worden. Dit geeft voldoende glutenvorming aan voor succesvolle laminatie zonder scheuren."
        }
      },
      {
        question: {
          en: "What temperature should chocolate be for optimal enrobing?",
          es: "¿A qué temperatura debe estar el chocolate para enrobing óptimo?",
          de: "Welche Temperatur sollte Schokolade für optimales Enrobing haben?",
          nl: "Welke temperatuur moet chocolade hebben voor optimaal enroben?"
        },
        options: [
          { en: "31-32°C (88-90°F) for dark chocolate", es: "31-32°C (88-90°F) para chocolate negro", de: "31-32°C (88-90°F) für dunkle Schokolade", nl: "31-32°C (88-90°F) voor pure chocolade" },
          { en: "40-45°C (104-113°F) for all chocolate", es: "40-45°C (104-113°F) para todo chocolate", de: "40-45°C (104-113°F) für alle Schokolade", nl: "40-45°C (104-113°F) voor alle chocolade" },
          { en: "25-27°C (77-81°F) for all types", es: "25-27°C (77-81°F) para todos los tipos", de: "25-27°C (77-81°F) für alle Arten", nl: "25-27°C (77-81°F) voor alle types" },
          { en: "35-38°C (95-100°F) consistently", es: "35-38°C (95-100°F) consistentemente", de: "35-38°C (95-100°F) konstant", nl: "35-38°C (95-100°F) consistent" }
        ],
        correct: 0,
        explanation: {
          en: "Properly tempered dark chocolate should be at 31-32°C for enrobing. This temperature ensures the chocolate flows smoothly while maintaining proper crystal structure for good snap and finish.",
          es: "Chocolate negro bien templado debe estar a 31-32°C para enrobing. Esta temperatura asegura que el chocolate fluya suavemente mientras mantiene estructura cristalina adecuada para buen chasquido y acabado.",
          de: "Richtig temperierte dunkle Schokolade sollte bei 31-32°C für Enrobing sein. Diese Temperatur gewährleistet dass Schokolade glatt fließt während richtige Kristallstruktur für guten Knack und Finish beibehalten wird.",
          nl: "Goed getemperde pure chocolade moet 31-32°C zijn voor enroben. Deze temperatuur zorgt ervoor dat chocolade glad vloeit terwijl de juiste kristalstructuur behouden blijft voor goede knak en afwerking."
        }
      },
      {
        question: {
          en: "In advanced pastry work, what is the function of 'inverseur' in lamination?",
          es: "En trabajo avanzado de pastelería, ¿cuál es la función del 'inverseur' en laminación?",
          de: "Bei fortgeschrittener Konditorarbeit, was ist die Funktion des 'Inverseur' bei der Laminierung?",
          nl: "Bij geavanceerd banketbakkerswerk, wat is de functie van 'inverseur' bij laminatie?"
        },
        options: [
          { en: "Rotating dough 90 degrees between folds for even lamination", es: "Rotar masa 90 grados entre pliegues para laminación uniforme", de: "Teig um 90 Grad zwischen Falten drehen für gleichmäßige Laminierung", nl: "Deeg 90 graden draaien tussen vouwen voor gelijkmatige laminatie" },
          { en: "Inverting the dough upside down", es: "Invertir la masa boca abajo", de: "Den Teig auf den Kopf drehen", nl: "Het deeg ondersteboven keren" },
          { en: "Adding inverse sugar to prevent crystallization", es: "Agregar azúcar invertido para prevenir cristalización", de: "Invertzucker hinzufügen um Kristallisation zu verhindern", nl: "Invertsuiker toevoegen om kristallisatie te voorkomen" },
          { en: "Reversing the folding direction", es: "Revertir la dirección de plegado", de: "Die Faltrichtung umkehren", nl: "De vouwrichting omkeren" }
        ],
        correct: 0,
        explanation: {
          en: "Inverseur refers to rotating the dough 90 degrees between folds. This ensures even distribution of layers and prevents the dough from becoming too elastic in one direction, maintaining proper lamination structure.",
          es: "Inverseur se refiere a rotar la masa 90 grados entre pliegues. Esto asegura distribución uniforme de capas y previene que la masa se vuelva demasiado elástica en una dirección, manteniendo estructura de laminación adecuada.",
          de: "Inverseur bezieht sich auf das Drehen des Teigs um 90 Grad zwischen Falten. Dies gewährleistet gleichmäßige Verteilung der Schichten und verhindert dass der Teig in einer Richtung zu elastisch wird, wobei die ordnungsgemäße Laminierungsstruktur beibehalten wird.",
          nl: "Inverseur verwijst naar het draaien van het deeg 90 graden tussen vouwen. Dit zorgt voor gelijkmatige verdeling van lagen en voorkomt dat het deeg te elastisch wordt in één richting, waarbij de juiste laminatiestructuur behouden blijft."
        }
      },
      {
        question: {
          en: "What is the professional standard for éclair shell thickness?",
          es: "¿Cuál es el estándar profesional para el grosor de cáscara de éclair?",
          de: "Was ist der professionelle Standard für Éclair-Hülldicke?",
          nl: "Wat is de professionele standaard voor éclair schildikte?"
        },
        options: [
          { en: "2-3mm wall thickness with large hollow interior", es: "2-3mm de grosor de pared con interior hueco grande", de: "2-3mm Wanddicke mit großem hohlen Inneren", nl: "2-3mm wanddikte met grote holle binnenkant" },
          { en: "5-6mm thick walls for stability", es: "5-6mm de paredes gruesas para estabilidad", de: "5-6mm dicke Wände für Stabilität", nl: "5-6mm dikke wanden voor stabiliteit" },
          { en: "1mm thin crispy shell", es: "1mm de cáscara delgada y crujiente", de: "1mm dünne knusprige Hülle", nl: "1mm dunne krokante schil" },
          { en: "4-5mm uniform density throughout", es: "4-5mm de densidad uniforme en toda", de: "4-5mm gleichmäßige Dichte durchgehend", nl: "4-5mm uniforme dichtheid overal" }
        ],
        correct: 0,
        explanation: {
          en: "Professional éclairs should have thin walls (2-3mm) with a large hollow interior to accommodate filling. This requires proper steam generation and oven technique to achieve the ideal texture and capacity.",
          es: "Los éclairs profesionales deben tener paredes delgadas (2-3mm) con un interior hueco grande para acomodar el relleno. Esto requiere generación adecuada de vapor y técnica de horno para lograr la textura y capacidad ideales.",
          de: "Professionelle Éclairs sollten dünne Wände (2-3mm) mit einem großen hohlen Inneren haben um Füllung aufzunehmen. Dies erfordert ordnungsgemäße Dampfgenerierung und Ofentechnik um ideale Textur und Kapazität zu erreichen.",
          nl: "Professionele éclairs moeten dunne wanden (2-3mm) hebben met een grote holle binnenkant om vulling te bevatten. Dit vereist juiste stoomgeneratie en oventechniek om de ideale textuur en capaciteit te bereiken."
        }
      },
      {
        question: {
          en: "What is the optimal temperature for tempering chocolate for pastry decoration?",
          es: "¿Cuál es la temperatura óptima para templar chocolate para decoración de pastelería?",
          de: "Was ist die optimale Temperatur zum Temperieren von Schokolade für Gebäckdekoration?",
          nl: "Wat is de optimale temperatuur voor het tempereren van chocolade voor gebakdecoratie?"
        },
        options: [
          { en: "31-32°C", es: "31-32°C", de: "31-32°C", nl: "31-32°C" },
          { en: "27-28°C", es: "27-28°C", de: "27-28°C", nl: "27-28°C" },
          { en: "35-36°C", es: "35-36°C", de: "35-36°C", nl: "35-36°C" },
          { en: "25-26°C", es: "25-26°C", de: "25-26°C", nl: "25-26°C" }
        ],
        correct: 0,
        explanation: {
          en: "31-32°C is the optimal working temperature for tempered dark chocolate. This ensures proper crystallization for shiny, stable decorations that won't bloom.",
          es: "31-32°C es la temperatura óptima de trabajo para chocolate negro templado. Esto asegura cristalización adecuada para decoraciones brillantes y estables que no florecerán.",
          de: "31-32°C ist die optimale Arbeitstemperatur für temperierte dunkle Schokolade. Dies gewährleistet ordnungsgemäße Kristallisation für glänzende, stabile Dekorationen die nicht ausblühen.",
          nl: "31-32°C is de optimale werktemperatuur voor getemperde pure chocolade. Dit verzekert juiste kristallisatie voor glanzende, stabiele decoraties die niet uitbloeien."
        }
      },
      {
        question: {
          en: "What is the function of lecithin in professional chocolate work?",
          es: "¿Cuál es la función de la lecitina en el trabajo profesional con chocolate?",
          de: "Was ist die Funktion von Lecithin in der professionellen Schokoladenarbeit?",
          nl: "Wat is de functie van lecithine in professioneel chocoladewerk?"
        },
        options: [
          { en: "Emulsifier to reduce viscosity", es: "Emulsificante para reducir viscosidad", de: "Emulgator zur Viskositätsreduzierung", nl: "Emulgator om viscositeit te verminderen" },
          { en: "Sweetening agent", es: "Agente edulcorante", de: "Süßungsmittel", nl: "Zoetstof" },
          { en: "Preservative", es: "Conservante", de: "Konservierungsmittel", nl: "Conserveermiddel" },
          { en: "Coloring agent", es: "Agente colorante", de: "Farbstoff", nl: "Kleurstof" }
        ],
        correct: 0,
        explanation: {
          en: "Lecithin acts as an emulsifier in chocolate, reducing viscosity and improving flow properties. This makes chocolate easier to work with for coating and molding applications.",
          es: "La lecitina actúa como emulsificante en el chocolate, reduciendo la viscosidad y mejorando las propiedades de flujo. Esto hace que el chocolate sea más fácil de trabajar para aplicaciones de recubrimiento y moldeado.",
          de: "Lecithin wirkt als Emulgator in Schokolade, reduziert die Viskosität und verbessert die Fließeigenschaften. Dies macht Schokolade einfacher zu verarbeiten für Überzugs- und Gießanwendungen.",
          nl: "Lecithine werkt als emulgator in chocolade, vermindert viscositeit en verbetert vloeieigenschappen. Dit maakt chocolade gemakkelijker te bewerken voor coating en giet toepassingen."
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