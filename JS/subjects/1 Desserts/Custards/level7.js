// Custards Quiz - Level 7: Custard Science
(function() {
  const level7 = {
    name: {
      en: "Custard Science",
      es: "Ciencia de las Natillas",
      de: "Pudding-Wissenschaft",
      nl: "Custard Wetenschap"
    },
    questions: [
      {
        question: {
          en: "What is the primary mechanism by which eggs thicken custard at the molecular level?",
          es: "¿Cuál es el mecanismo primario por el cual los huevos espesan las natillas a nivel molecular?",
          de: "Was ist der primäre Mechanismus, durch den Eier Pudding auf molekularer Ebene verdicken?",
          nl: "Wat is het primaire mechanisme waardoor eieren custard verdikken op moleculair niveau?"
        },
        options: [
          { en: "Protein denaturation and coagulation forming gel networks", es: "Desnaturalización y coagulación de proteínas formando redes de gel", de: "Proteindenaturierung und Koagulation bilden Gel-Netzwerke", nl: "Eiwit denaturatie en coagulatie vormen gel netwerken" },
          { en: "Fat emulsification with water molecules", es: "Emulsificación de grasa con moléculas de agua", de: "Fettemulgierung mit Wassermolekülen", nl: "Vet emulgatie met water moleculen" },
          { en: "Starch gelatinization and swelling", es: "Gelatinización e hinchazón del almidón", de: "Stärkegelierung und Quellung", nl: "Zetmeel gelering en zwelling" },
          { en: "Sugar crystallization creating structure", es: "Cristalización del azúcar creando estructura", de: "Zuckerkristallisation schafft Struktur", nl: "Suiker kristallisatie creëert structuur" }
        ],
        correct: 0,
        explanation: {
          en: "Eggs thicken custard through protein denaturation and coagulation. Heat causes egg proteins (albumin and globulin) to unfold and form three-dimensional gel networks that trap liquid, creating custard's characteristic texture.",
          es: "Los huevos espesan las natillas a través de la desnaturalización y coagulación de proteínas. El calor hace que las proteínas del huevo (albúmina y globulina) se desplieguen y formen redes de gel tridimensionales que atrapan líquido, creando la textura característica de las natillas.",
          de: "Eier verdicken Pudding durch Proteindenaturierung und Koagulation. Hitze bewirkt, dass Eiweiße (Albumin und Globulin) sich entfalten und dreidimensionale Gel-Netzwerke bilden, die Flüssigkeit einschließen und Puddings charakteristische Textur schaffen.",
          nl: "Eieren verdikken custard door eiwit denaturatie en coagulatie. Hitte zorgt ervoor dat eieiwitten (albumine en globuline) zich ontvouwen en driedimensionale gel netwerken vormen die vloeistof vasthouden, wat custards karakteristieke textuur creëert."
        }
      },
      {
        question: {
          en: "What role do lecithins in egg yolks play in custard emulsification?",
          es: "¿Qué papel juegan las lecitinas en las yemas de huevo en la emulsificación de natillas?",
          de: "Welche Rolle spielen Lecithine im Eigelb bei der Pudding-Emulgierung?",
          nl: "Welke rol spelen lecithines in eidooiers bij custard emulgatie?"
        },
        options: [
          { en: "They provide sweetness and flavor enhancement", es: "Proporcionan dulzura y mejora del sabor", de: "Sie sorgen für Süße und Geschmacksverbesserung", nl: "Ze zorgen voor zoetheid en smaakversterking" },
          { en: "They act as natural emulsifiers, stabilizing fat-water interfaces", es: "Actúan como emulsionantes naturales, estabilizando interfaces grasa-agua", de: "Sie wirken als natürliche Emulgatoren und stabilisieren Fett-Wasser-Grenzflächen", nl: "Ze werken als natuurlijke emulgatoren, stabiliseren vet-water grensvlakken" },
          { en: "They prevent protein coagulation", es: "Previenen la coagulación de proteínas", de: "Sie verhindern Proteinkoagulation", nl: "Ze voorkomen eiwit coagulatie" },
          { en: "They increase viscosity through starch interaction", es: "Aumentan la viscosidad a través de interacción con almidón", de: "Sie erhöhen die Viskosität durch Stärke-Interaktion", nl: "Ze verhogen viscositeit door zetmeel interactie" }
        ],
        correct: 1,
        explanation: {
          en: "Lecithins in egg yolks are phospholipids that act as natural emulsifiers. They have both hydrophilic and lipophilic properties, allowing them to stabilize the interface between fat and water phases in custard.",
          es: "Las lecitinas en las yemas son fosfolípidos que actúan como emulsionantes naturales. Tienen propiedades hidrofílicas y lipofílicas, permitiéndoles estabilizar la interfaz entre las fases de grasa y agua en las natillas.",
          de: "Lecithine im Eigelb sind Phospholipide, die als natürliche Emulgatoren wirken. Sie haben sowohl hydrophile als auch lipophile Eigenschaften, wodurch sie die Grenzfläche zwischen Fett- und Wasserphasen im Pudding stabilisieren können.",
          nl: "Lecithines in eidooiers zijn fosfolipiden die werken als natuurlijke emulgatoren. Ze hebben zowel hydrofiele als lipofiele eigenschappen, waardoor ze de interface tussen vet- en waterfasen in custard kunnen stabiliseren."
        }
      },
      {
        question: {
          en: "What is syneresis in custard science and what causes it?",
          es: "¿Qué es la sinéresis en la ciencia de natillas y qué la causa?",
          de: "Was ist Synerese in der Pudding-Wissenschaft und was verursacht sie?",
          nl: "Wat is synerese in custard wetenschap en wat veroorzaakt het?"
        },
        options: [
          { en: "The formation of skin on custard surface", es: "La formación de piel en la superficie de las natillas", de: "Die Bildung einer Haut auf der Pudding-Oberfläche", nl: "De vorming van vel op custard oppervlak" },
          { en: "Liquid separation from gel due to over-coagulation", es: "Separación de líquido del gel debido a sobre-coagulación", de: "Flüssigkeitstrennung vom Gel durch Über-Koagulation", nl: "Vloeistof scheiding van gel door over-coagulatie" },
          { en: "Sugar crystallization in stored custard", es: "Cristalización de azúcar en natillas almacenadas", de: "Zuckerkristallisation in gelagertem Pudding", nl: "Suiker kristallisatie in opgeslagen custard" },
          { en: "Color change due to oxidation", es: "Cambio de color debido a oxidación", de: "Farbveränderung durch Oxidation", nl: "Kleurverandering door oxidatie" }
        ],
        correct: 1,
        explanation: {
          en: "Syneresis is the expulsion of liquid from a gel network, causing custard to 'weep.' It occurs when proteins over-coagulate from excessive heat, creating tight bonds that squeeze out trapped liquids.",
          es: "La sinéresis es la expulsión de líquido de una red de gel, causando que las natillas 'lloren.' Ocurre cuando las proteínas se sobre-coagulan por calor excesivo, creando enlaces apretados que exprimen líquidos atrapados.",
          de: "Synerese ist die Ausstoßung von Flüssigkeit aus einem Gel-Netzwerk, wodurch Pudding 'weint.' Sie tritt auf, wenn Proteine durch übermäßige Hitze über-koagulieren und enge Bindungen bilden, die eingeschlossene Flüssigkeiten herausdrücken.",
          nl: "Synerese is de uitstoting van vloeistof uit een gel netwerk, waardoor custard 'weent.' Het treedt op wanneer eiwitten door overmatige hitte over-coaguleren, waardoor strakke bindingen ontstaan die ingesloten vloeistoffen uitpersen."
        }
      },
      {
        question: {
          en: "What is the Maillard reaction's role in custard browning?",
          es: "¿Cuál es el papel de la reacción de Maillard en el dorado de las natillas?",
          de: "Welche Rolle spielt die Maillard-Reaktion beim Bräunen von Pudding?",
          nl: "Wat is de rol van de Maillard reactie bij custard bruining?"
        },
        options: [
          { en: "Protein-sugar reactions creating browning and flavor compounds", es: "Reacciones proteína-azúcar creando compuestos de dorado y sabor", de: "Protein-Zucker-Reaktionen erzeugen Bräunungs- und Geschmacksverbindungen", nl: "Eiwit-suiker reacties creëren bruinings- en smaakverbindingen" },
          { en: "Fat oxidation causing color change", es: "Oxidación de grasa causando cambio de color", de: "Fettoxidation verursacht Farbveränderung", nl: "Vet oxidatie veroorzaakt kleurverandering" },
          { en: "Caramelization of milk sugars only", es: "Caramelización solo de azúcares de la leche", de: "Karamelisierung nur von Milchzuckern", nl: "Karamelisatie van alleen melksuikers" },
          { en: "Vitamin breakdown due to heat exposure", es: "Descomposición de vitaminas debido a exposición al calor", de: "Vitaminabbau durch Hitzeeinwirkung", nl: "Vitamine afbraak door hitte blootstelling" }
        ],
        correct: 0,
        explanation: {
          en: "The Maillard reaction involves amino acids and reducing sugars reacting under heat to create browning and complex flavor compounds. In custards, this contributes to the golden color and rich flavor development.",
          es: "La reacción de Maillard involucra aminoácidos y azúcares reductores reaccionando bajo calor para crear compuestos de dorado y sabor complejo. En las natillas, esto contribuye al color dorado y desarrollo de sabor rico.",
          de: "Die Maillard-Reaktion beinhaltet Aminosäuren und reduzierende Zucker, die unter Hitze reagieren, um Bräunungs- und komplexe Geschmacksverbindungen zu erzeugen. Bei Puddings trägt dies zur goldenen Farbe und reichen Geschmacksentwicklung bei.",
          nl: "De Maillard reactie behelst aminozuren en reducerende suikers die onder hitte reageren om bruinings- en complexe smaakverbindingen te creëren. In custards draagt dit bij aan de gouden kleur en rijke smaak ontwikkeling."
        }
      },
      {
        question: {
          en: "How do hydrocolloids like agar or carrageenan function in modern custard production?",
          es: "¿Cómo funcionan los hidrocoloides como agar o carragenano en la producción moderna de natillas?",
          de: "Wie funktionieren Hydrokolloide wie Agar oder Carrageen in der modernen Pudding-Produktion?",
          nl: "Hoe functioneren hydrocolloïden zoals agar of carrageen in moderne custard productie?"
        },
        options: [
          { en: "They replace eggs entirely as thickening agents", es: "Reemplazan completamente los huevos como agentes espesantes", de: "Sie ersetzen Eier vollständig als Verdickungsmittel", nl: "Ze vervangen eieren volledig als verdikkingsmiddelen" },
          { en: "They provide additional gelling power and texture stability", es: "Proporcionan poder gelificante adicional y estabilidad de textura", de: "Sie bieten zusätzliche Gelier-kraft und Texturstabilität", nl: "Ze bieden extra geleringskracht en textuur stabiliteit" },
          { en: "They only function as preservatives", es: "Solo funcionan como conservantes", de: "Sie funktionieren nur als Konservierungsmittel", nl: "Ze functioneren alleen als conserveermiddelen" },
          { en: "They prevent protein coagulation", es: "Previenen la coagulación de proteínas", de: "Sie verhindern Proteinkoagulation", nl: "Ze voorkomen eiwit coagulatie" }
        ],
        correct: 1,
        explanation: {
          en: "Hydrocolloids like agar and carrageenan are used to enhance gelling properties and improve texture stability in modern custard production. They can work synergistically with traditional ingredients for improved consistency.",
          es: "Los hidrocoloides como agar y carragenano se usan para mejorar las propiedades gelificantes y la estabilidad de textura en la producción moderna de natillas. Pueden trabajar sinérgicamente con ingredientes tradicionales para mejor consistencia.",
          de: "Hydrokolloide wie Agar und Carrageen werden verwendet, um Gelier-eigenschaften zu verbessern und Texturstabilität in der modernen Pudding-Produktion zu steigern. Sie können synergistisch mit traditionellen Zutaten für verbesserte Konsistenz arbeiten.",
          nl: "Hydrocolloïden zoals agar en carrageen worden gebruikt om geleringseigenschappen te verbeteren en textuur stabiliteit in moderne custard productie te verhogen. Ze kunnen synergetisch werken met traditionele ingrediënten voor verbeterde consistentie."
        }
      },
      {
        question: {
          en: "What is the scientific explanation for custard's thermoreversible nature?",
          es: "¿Cuál es la explicación científica para la naturaleza termorreversible de las natillas?",
          de: "Was ist die wissenschaftliche Erklärung für die thermoreversible Natur von Pudding?",
          nl: "Wat is de wetenschappelijke verklaring voor custards thermoreversibele natuur?"
        },
        options: [
          { en: "Egg proteins can renature when cooled", es: "Las proteínas del huevo pueden renaturalizarse al enfriarse", de: "Eiweiße können beim Abkühlen renaturieren", nl: "Eieiwitten kunnen hernaturen bij afkoeling" },
          { en: "Starch-based custards can re-gel when reheated due to reversible hydrogen bonding", es: "Natillas a base de almidón pueden re-gelificar al recalentar debido a enlaces de hidrógeno reversibles", de: "Stärke-basierte Puddings können beim Wiedererhitzen re-gelieren aufgrund reversibler Wasserstoffbindungen", nl: "Zetmeel-gebaseerde custards kunnen opnieuw geleren bij herverwarming door reversibele waterstofbinding" },
          { en: "Fat molecules solidify and liquefy reversibly", es: "Las moléculas de grasa se solidifican y licúan reversiblemente", de: "Fettmoleküle erstarren und verflüssigen sich reversibel", nl: "Vet moleculen stollen en verweivloeien reversibel" },
          { en: "Sugar crystallization is temperature dependent", es: "La cristalización del azúcar depende de la temperatura", de: "Zuckerkristallisation ist temperaturabhängig", nl: "Suiker kristallisatie is temperatuur afhankelijk" }
        ],
        correct: 1,
        explanation: {
          en: "Starch-based custards exhibit thermoreversible properties because starch molecules can form and break hydrogen bonds reversibly with temperature changes, allowing re-gelling when reheated after cooling.",
          es: "Las natillas a base de almidón exhiben propiedades termorreversibles porque las moléculas de almidón pueden formar y romper enlaces de hidrógeno reversiblemente con cambios de temperatura, permitiendo re-gelificar al recalentar después del enfriamiento.",
          de: "Stärke-basierte Puddings zeigen thermoreversible Eigenschaften, weil Stärkemoleküle reversibel Wasserstoffbindungen mit Temperaturänderungen bilden und brechen können, was Re-Gelierung beim Wiedererhitzen nach dem Abkühlen ermöglicht.",
          nl: "Zetmeel-gebaseerde custards vertonen thermoreversibele eigenschappen omdat zetmeel moleculen reversibel waterstofbindingen kunnen vormen en breken met temperatuurveranderingen, waardoor hergelering mogelijk is bij herverwarming na afkoeling."
        }
      },
      {
        question: {
          en: "What is the role of calcium ions in milk's effect on custard gelation?",
          es: "¿Cuál es el papel de los iones de calcio en el efecto de la leche en la gelificación de natillas?",
          de: "Welche Rolle spielen Kalziumionen bei der Wirkung von Milch auf die Pudding-Gelierung?",
          nl: "Wat is de rol van calcium ionen in melk's effect op custard gelering?"
        },
        options: [
          { en: "Calcium interferes with protein coagulation", es: "El calcio interfiere con la coagulación de proteínas", de: "Kalzium stört die Proteinkoagulation", nl: "Calcium verstoort eiwit coagulatie" },
          { en: "Calcium strengthens protein networks by forming cross-links", es: "El calcio fortalece las redes de proteínas formando enlaces cruzados", de: "Kalzium stärkt Protein-Netzwerke durch Bildung von Querverbindungen", nl: "Calcium versterkt eiwit netwerken door het vormen van dwarsverbindingen" },
          { en: "Calcium prevents milk from curdling", es: "El calcio previene que la leche se cuaje", de: "Kalzium verhindert das Gerinnen der Milch", nl: "Calcium voorkomt dat melk stolt" },
          { en: "Calcium has no effect on gelation", es: "El calcio no tiene efecto en la gelificación", de: "Kalzium hat keinen Einfluss auf die Gelierung", nl: "Calcium heeft geen effect op gelering" }
        ],
        correct: 1,
        explanation: {
          en: "Calcium ions in milk help strengthen the protein gel network by forming ionic cross-links between protein molecules, contributing to firmer custard structure and improved gel strength.",
          es: "Los iones de calcio en la leche ayudan a fortalecer la red de gel de proteínas formando enlaces cruzados iónicos entre moléculas de proteína, contribuyendo a una estructura de natillas más firme y mejor fuerza de gel.",
          de: "Kalziumionen in der Milch helfen, das Protein-Gel-Netzwerk zu stärken, indem sie ionische Querverbindungen zwischen Proteinmolekülen bilden, was zu einer festeren Pudding-Struktur und verbesserter Gel-Stärke beiträgt.",
          nl: "Calcium ionen in melk helpen het eiwit gel netwerk te versterken door ionische dwarsverbindingen tussen eiwit moleculen te vormen, wat bijdraagt aan een stevigere custard structuur en verbeterde gel sterkte."
        }
      },
      {
        question: {
          en: "How does pH affect custard formation and stability?",
          es: "¿Cómo afecta el pH la formación y estabilidad de las natillas?",
          de: "Wie beeinflusst der pH-Wert die Pudding-Bildung und -Stabilität?",
          nl: "Hoe beïnvloedt pH custard vorming en stabiliteit?"
        },
        options: [
          { en: "Lower pH increases protein coagulation temperature and gel strength", es: "pH más bajo aumenta temperatura de coagulación de proteínas y fuerza del gel", de: "Niedrigerer pH erhöht Proteinkoagulationstemperatur und Gel-Stärke", nl: "Lagere pH verhoogt eiwit coagulatie temperatuur en gel sterkte" },
          { en: "pH has no effect on custard properties", es: "El pH no tiene efecto en las propiedades de las natillas", de: "pH hat keinen Einfluss auf Pudding-Eigenschaften", nl: "pH heeft geen effect op custard eigenschappen" },
          { en: "Higher pH prevents all protein coagulation", es: "pH más alto previene toda coagulación de proteínas", de: "Höherer pH verhindert alle Proteinkoagulation", nl: "Hogere pH voorkomt alle eiwit coagulatie" },
          { en: "pH only affects color, not texture", es: "El pH solo afecta el color, no la textura", de: "pH beeinflusst nur die Farbe, nicht die Textur", nl: "pH beïnvloedt alleen kleur, niet textuur" }
        ],
        correct: 0,
        explanation: {
          en: "Lower pH (more acidic conditions) decreases the isoelectric point of proteins, making them coagulate at lower temperatures and form stronger gels. This is why adding acid to custard can improve gel strength.",
          es: "Un pH más bajo (condiciones más ácidas) disminuye el punto isoeléctrico de las proteínas, haciéndolas coagular a temperaturas más bajas y formar geles más fuertes. Por esto agregar ácido a las natillas puede mejorar la fuerza del gel.",
          de: "Niedrigerer pH (sauerere Bedingungen) senkt den isoelektrischen Punkt von Proteinen, wodurch sie bei niedrigeren Temperaturen koagulieren und stärkere Gele bilden. Deshalb kann das Hinzufügen von Säure zu Pudding die Gel-Stärke verbessern.",
          nl: "Lagere pH (meer zure omstandigheden) verlaagt het isoëlektrische punt van eiwitten, waardoor ze bij lagere temperaturen coaguleren en sterkere gelen vormen. Daarom kan het toevoegen van zuur aan custard de gel sterkte verbeteren."
        }
      },
      {
        question: {
          en: "What is the scientific basis for the 'tempering' technique in custard making?",
          es: "¿Cuál es la base científica para la técnica de 'templado' en la preparación de natillas?",
          de: "Was ist die wissenschaftliche Grundlage für die 'Temperier'-Technik bei der Pudding-Herstellung?",
          nl: "Wat is de wetenschappelijke basis voor de 'tempereer' techniek bij custard maken?"
        },
        options: [
          { en: "Gradual temperature increase prevents thermal shock and rapid protein denaturation", es: "El aumento gradual de temperatura previene choque térmico y desnaturalización rápida de proteínas", de: "Allmähliche Temperaturerhöhung verhindert Hitzeschock und schnelle Proteindenaturierung", nl: "Geleidelijke temperatuurverhoging voorkomt thermische shock en snelle eiwit denaturatie" },
          { en: "It allows fat molecules to emulsify properly", es: "Permite que las moléculas de grasa se emulsifiquen adecuadamente", de: "Es ermöglicht Fettmolekülen, sich richtig zu emulgieren", nl: "Het zorgt ervoor dat vet moleculen goed emulgeren" },
          { en: "It prevents sugar from crystallizing", es: "Previene que el azúcar cristalice", de: "Es verhindert, dass Zucker kristallisiert", nl: "Het voorkomt dat suiker kristalliseert" },
          { en: "It activates enzymes in the eggs", es: "Activa enzimas en los huevos", de: "Es aktiviert Enzyme in den Eiern", nl: "Het activeert enzymen in de eieren" }
        ],
        correct: 0,
        explanation: {
          en: "Tempering works by gradually raising the temperature of eggs, allowing proteins to denature slowly and form controlled gel networks rather than coagulating rapidly into lumps from thermal shock.",
          es: "El templado funciona elevando gradualmente la temperatura de los huevos, permitiendo que las proteínas se desnaturalicen lentamente y formen redes de gel controladas en lugar de coagular rápidamente en grumos por choque térmico.",
          de: "Temperieren funktioniert durch allmähliche Temperaturerhöhung der Eier, wodurch Proteine langsam denaturieren und kontrollierte Gel-Netzwerke bilden, anstatt schnell durch Hitzeschock zu Klumpen zu koagulieren.",
          nl: "Tempereren werkt door geleidelijk de temperatuur van eieren te verhogen, waardoor eiwitten langzaam denatureren en gecontroleerde gel netwerken vormen in plaats van snel te coaguleren in klontjes door thermische shock."
        }
      },
      {
        question: {
          en: "How do different sugars affect custard gelation differently?",
          es: "¿Cómo afectan diferentes azúcares la gelificación de natillas de manera diferente?",
          de: "Wie beeinflussen verschiedene Zucker die Pudding-Gelierung unterschiedlich?",
          nl: "Hoe beïnvloeden verschillende suikers custard gelering anders?"
        },
        options: [
          { en: "All sugars have identical effects on gelation", es: "Todos los azúcares tienen efectos idénticos en la gelificación", de: "Alle Zucker haben identische Auswirkungen auf die Gelierung", nl: "Alle suikers hebben identieke effecten op gelering" },
          { en: "Sucrose strengthens gels more than fructose due to different molecular interactions", es: "La sacarosa fortalece los geles más que la fructosa debido a diferentes interacciones moleculares", de: "Saccharose stärkt Gele mehr als Fructose aufgrund verschiedener molekularer Wechselwirkungen", nl: "Sucrose versterkt gelen meer dan fructose door verschillende moleculaire interacties" },
          { en: "Only artificial sweeteners affect gel strength", es: "Solo los edulcorantes artificiales afectan la fuerza del gel", de: "Nur künstliche Süßstoffe beeinflussen die Gel-Stärke", nl: "Alleen kunstmatige zoetstoffen beïnvloeden gel sterkte" },
          { en: "Sugar type only affects flavor, not structure", es: "El tipo de azúcar solo afecta el sabor, no la estructura", de: "Zuckerart beeinflusst nur den Geschmack, nicht die Struktur", nl: "Suiker type beïnvloedt alleen smaak, niet structuur" }
        ],
        correct: 1,
        explanation: {
          en: "Different sugars interact differently with water and proteins. Sucrose tends to strengthen protein gels more effectively than fructose due to its molecular structure and hydrogen bonding patterns.",
          es: "Diferentes azúcares interactúan de manera diferente con agua y proteínas. La sacarosa tiende a fortalecer los geles de proteínas más efectivamente que la fructosa debido a su estructura molecular y patrones de enlaces de hidrógeno.",
          de: "Verschiedene Zucker interagieren unterschiedlich mit Wasser und Proteinen. Saccharose neigt dazu, Protein-Gele effektiver zu stärken als Fructose aufgrund ihrer molekularen Struktur und Wasserstoffbindungsmustern.",
          nl: "Verschillende suikers interageren anders met water en eiwitten. Sucrose heeft de neiging eiwit gelen effectiever te versterken dan fructose vanwege zijn moleculaire structuur en waterstofbinding patronen."
        }
      },
      {
        question: {
          en: "What is the role of water activity (aw) in custard shelf life and safety?",
          es: "¿Cuál es el papel de la actividad del agua (aw) en la vida útil y seguridad de las natillas?",
          de: "Welche Rolle spielt die Wasseraktivität (aw) bei der Haltbarkeit und Sicherheit von Pudding?",
          nl: "Wat is de rol van water activiteit (aw) in custard houdbaarheid en veiligheid?"
        },
        options: [
          { en: "Water activity only affects texture, not safety", es: "La actividad del agua solo afecta la textura, no la seguridad", de: "Wasseraktivität beeinflusst nur die Textur, nicht die Sicherheit", nl: "Water activiteit beïnvloedt alleen textuur, niet veiligheid" },
          { en: "Lower water activity inhibits microbial growth, extending shelf life", es: "Menor actividad del agua inhibe el crecimiento microbiano, extendiendo la vida útil", de: "Niedrigere Wasseraktivität hemmt mikrobielles Wachstum und verlängert die Haltbarkeit", nl: "Lagere water activiteit remt microbiële groei, verlengt houdbaarheid" },
          { en: "Higher water activity improves gel strength", es: "Mayor actividad del agua mejora la fuerza del gel", de: "Höhere Wasseraktivität verbessert die Gel-Stärke", nl: "Hogere water activiteit verbetert gel sterkte" },
          { en: "Water activity has no measurable effects", es: "La actividad del agua no tiene efectos medibles", de: "Wasseraktivität hat keine messbaren Auswirkungen", nl: "Water activiteit heeft geen meetbare effecten" }
        ],
        correct: 1,
        explanation: {
          en: "Lower water activity (aw) reduces available water for microbial growth, which is crucial for custard safety and shelf life. Most pathogenic bacteria require aw above 0.95 to grow effectively.",
          es: "Menor actividad del agua (aw) reduce el agua disponible para crecimiento microbiano, lo cual es crucial para la seguridad y vida útil de las natillas. La mayoría de bacterias patógenas requieren aw por encima de 0.95 para crecer efectivamente.",
          de: "Niedrigere Wasseraktivität (aw) reduziert verfügbares Wasser für mikrobielles Wachstum, was für Pudding-Sicherheit und Haltbarkeit entscheidend ist. Die meisten pathogenen Bakterien benötigen aw über 0,95 um effektiv zu wachsen.",
          nl: "Lagere water activiteit (aw) vermindert beschikbaar water voor microbiële groei, wat cruciaal is voor custard veiligheid en houdbaarheid. De meeste pathogene bacteriën hebben aw boven 0,95 nodig om effectief te groeien."
        }
      },
      {
        question: {
          en: "How does homogenization of milk affect custard texture scientifically?",
          es: "¿Cómo afecta la homogeneización de la leche la textura de las natillas científicamente?",
          de: "Wie beeinflusst die Homogenisierung von Milch die Pudding-Textur wissenschaftlich?",
          nl: "Hoe beïnvloedt homogenisatie van melk custard textuur wetenschappelijk?"
        },
        options: [
          { en: "Creates smaller fat globules for smoother texture and better emulsion stability", es: "Crea glóbulos de grasa más pequeños para textura más suave y mejor estabilidad de emulsión", de: "Erzeugt kleinere Fettkügelchen für glattere Textur und bessere Emulsionsstabilität", nl: "Creëert kleinere vet bolletjes voor gladere textuur en betere emulsie stabiliteit" },
          { en: "Removes all fat from the milk", es: "Elimina toda la grasa de la leche", de: "Entfernt alles Fett aus der Milch", nl: "Verwijdert al het vet uit de melk" },
          { en: "Changes protein structure only", es: "Cambia solo la estructura de las proteínas", de: "Verändert nur die Proteinstruktur", nl: "Verandert alleen eiwit structuur" },
          { en: "Has no scientific effect on custard", es: "No tiene efecto científico en las natillas", de: "Hat keine wissenschaftliche Wirkung auf Pudding", nl: "Heeft geen wetenschappelijk effect op custard" }
        ],
        correct: 0,
        explanation: {
          en: "Homogenization breaks down fat globules into smaller, more uniform sizes, creating smoother custard texture and better emulsion stability by increasing the surface area available for protein-fat interactions.",
          es: "La homogeneización rompe los glóbulos de grasa en tamaños más pequeños y uniformes, creando textura de natillas más suave y mejor estabilidad de emulsión al aumentar el área superficial disponible para interacciones proteína-grasa.",
          de: "Homogenisierung bricht Fettkügelchen in kleinere, gleichmäßigere Größen auf, schafft glattere Pudding-Textur und bessere Emulsionsstabilität durch Vergrößerung der verfügbaren Oberfläche für Protein-Fett-Wechselwirkungen.",
          nl: "Homogenisatie breekt vet bolletjes af in kleinere, meer uniforme maten, creëert gladere custard textuur en betere emulsie stabiliteit door het vergroten van het beschikbare oppervlak voor eiwit-vet interacties."
        }
      },
      {
        question: {
          en: "What is the molecular explanation for custard's non-Newtonian flow behavior?",
          es: "¿Cuál es la explicación molecular para el comportamiento de flujo no newtoniano de las natillas?",
          de: "Was ist die molekulare Erklärung für das nicht-newtonsche Fließverhalten von Pudding?",
          nl: "Wat is de moleculaire verklaring voor custards niet-Newtoniaanse stroming gedrag?"
        },
        options: [
          { en: "Custard always behaves as a Newtonian fluid", es: "Las natillas siempre se comportan como un fluido newtoniano", de: "Pudding verhält sich immer wie eine newtonsche Flüssigkeit", nl: "Custard gedraagt zich altijd als een Newtoniaanse vloeistof" },
          { en: "Protein gel networks break and reform under stress, causing shear-thinning behavior", es: "Las redes de gel de proteínas se rompen y reforman bajo estrés, causando comportamiento de adelgazamiento por cizalladura", de: "Protein-Gel-Netzwerke brechen und reformieren sich unter Stress, verursachen scherverdünnendes Verhalten", nl: "Eiwit gel netwerken breken en hervormen onder stress, veroorzaken afschuifverdunnend gedrag" },
          { en: "Sugar molecules create rigid structures", es: "Las moléculas de azúcar crean estructuras rígidas", de: "Zuckermoleküle erzeugen starre Strukturen", nl: "Suiker moleculen creëren rigide structuren" },
          { en: "Fat globules prevent all flow", es: "Los glóbulos de grasa previenen todo flujo", de: "Fettkügelchen verhindern allen Fluss", nl: "Vet bolletjes voorkomen alle stroming" }
        ],
        correct: 1,
        explanation: {
          en: "Custard exhibits shear-thinning (pseudoplastic) behavior because protein gel networks temporarily break under applied stress and reform when stress is removed, causing viscosity to decrease with increased shear rate.",
          es: "Las natillas exhiben comportamiento de adelgazamiento por cizalladura (pseudoplástico) porque las redes de gel de proteínas se rompen temporalmente bajo estrés aplicado y se reforman cuando se remueve el estrés, causando que la viscosidad disminuya con mayor tasa de cizalladura.",
          de: "Pudding zeigt scherverdünnendes (pseudoplastisches) Verhalten, weil Protein-Gel-Netzwerke unter angewandtem Stress temporär brechen und sich reformieren, wenn der Stress entfernt wird, wodurch die Viskosität mit erhöhter Scherrate abnimmt.",
          nl: "Custard vertoont afschuifverdunnend (pseudoplastisch) gedrag omdat eiwit gel netwerken tijdelijk breken onder toegepaste stress en hervormen wanneer stress wordt weggenomen, waardoor viscositeit afneemt met verhoogde afschuifsnelheid."
        }
      },
      {
        question: {
          en: "How do polyphenols from vanilla affect custard stability at the molecular level?",
          es: "¿Cómo afectan los polifenoles de la vainilla la estabilidad de las natillas a nivel molecular?",
          de: "Wie beeinflussen Polyphenole aus Vanille die Pudding-Stabilität auf molekularer Ebene?",
          nl: "Hoe beïnvloeden polyfenolen van vanille custard stabiliteit op moleculair niveau?"
        },
        options: [
          { en: "Polyphenols only provide flavor, no structural effects", es: "Los polifenoles solo proporcionan sabor, sin efectos estructurales", de: "Polyphenole bieten nur Geschmack, keine strukturellen Effekte", nl: "Polyfenolen bieden alleen smaak, geen structurele effecten" },
          { en: "They can interact with proteins through hydrogen bonding, potentially affecting gel strength", es: "Pueden interactuar con proteínas a través de enlaces de hidrógeno, potencialmente afectando la fuerza del gel", de: "Sie können mit Proteinen durch Wasserstoffbindung interagieren, möglicherweise die Gel-Stärke beeinflussen", nl: "Ze kunnen interageren met eiwitten door waterstofbinding, mogelijk gel sterkte beïnvloeden" },
          { en: "They prevent all protein coagulation", es: "Previenen toda coagulación de proteínas", de: "Sie verhindern alle Proteinkoagulation", nl: "Ze voorkomen alle eiwit coagulatie" },
          { en: "They increase fat content significantly", es: "Aumentan significativamente el contenido de grasa", de: "Sie erhöhen den Fettgehalt erheblich", nl: "Ze verhogen vet gehalte aanzienlijk" }
        ],
        correct: 1,
        explanation: {
          en: "Polyphenols from vanilla can form hydrogen bonds with milk proteins, potentially modifying protein-protein interactions and affecting gel network formation, though the effect is generally minimal in typical custard concentrations.",
          es: "Los polifenoles de la vainilla pueden formar enlaces de hidrógeno con proteínas de la leche, potencialmente modificando interacciones proteína-proteína y afectando la formación de redes de gel, aunque el efecto es generalmente mínimo en concentraciones típicas de natillas.",
          de: "Polyphenole aus Vanille können Wasserstoffbindungen mit Milchproteinen bilden, möglicherweise Protein-Protein-Wechselwirkungen modifizieren und Gel-Netzwerk-Bildung beeinflussen, obwohl der Effekt bei typischen Pudding-Konzentrationen minimal ist.",
          nl: "Polyfenolen van vanille kunnen waterstofbindingen vormen met melkeiwitten, mogelijk eiwit-eiwit interacties modificeren en gel netwerk vorming beïnvloeden, hoewel het effect over het algemeen minimaal is bij typische custard concentraties."
        }
      },
      {
        question: {
          en: "What is the scientific basis for the textural difference between stirred and baked custards?",
          es: "¿Cuál es la base científica para la diferencia textural entre natillas revueltas y horneadas?",
          de: "Was ist die wissenschaftliche Grundlage für den Texturunterschied zwischen gerührten und gebackenen Puddings?",
          nl: "Wat is de wetenschappelijke basis voor het textuur verschil tussen geroerde en gebakken custards?"
        },
        options: [
          { en: "Different cooking temperatures only", es: "Solo diferentes temperaturas de cocción", de: "Nur verschiedene Kochtemperaturen", nl: "Alleen verschillende kooktemperaturen" },
          { en: "Stirred custards have disrupted gel networks; baked custards form continuous undisturbed networks", es: "Natillas revueltas tienen redes de gel interrumpidas; natillas horneadas forman redes continuas no perturbadas", de: "Gerührte Puddings haben gestörte Gel-Netzwerke; gebackene Puddings bilden kontinuierliche ungestörte Netzwerke", nl: "Geroerde custards hebben verstoorde gel netwerken; gebakken custards vormen continue onverstoorde netwerken" },
          { en: "Different ingredient ratios only", es: "Solo diferentes proporciones de ingredientes", de: "Nur verschiedene Zutatenverhältnisse", nl: "Alleen verschillende ingrediënt verhoudingen" },
          { en: "Baked custards contain more sugar", es: "Las natillas horneadas contienen más azúcar", de: "Gebackene Puddings enthalten mehr Zucker", nl: "Gebakken custards bevatten meer suiker" }
        ],
        correct: 1,
        explanation: {
          en: "Stirred custards have continuously disrupted protein gel networks during cooking, creating a smooth, flowing texture. Baked custards form undisturbed continuous gel networks, resulting in a firm, sliceable texture.",
          es: "Las natillas revueltas tienen redes de gel de proteínas continuamente interrumpidas durante la cocción, creando una textura suave y fluida. Las natillas horneadas forman redes de gel continuas no perturbadas, resultando en una textura firme y rebanable.",
          de: "Gerührte Puddings haben kontinuierlich gestörte Protein-Gel-Netzwerke während des Kochens, was eine glatte, fließende Textur schafft. Gebackene Puddings bilden ungestörte kontinuierliche Gel-Netzwerke, was eine feste, schneidbare Textur ergibt.",
          nl: "Geroerde custards hebben continu verstoorde eiwit gel netwerken tijdens het koken, wat een gladde, vloeiende textuur creëert. Gebakken custards vormen onverstoorde continue gel netwerken, wat resulteert in een stevige, snijdbare textuur."
        }
      },
      {
        question: {
          en: "How does the glass transition temperature relate to frozen custard texture?",
          es: "¿Cómo se relaciona la temperatura de transición vítrea con la textura de natillas congeladas?",
          de: "Wie hängt die Glasübergangstemperatur mit der Textur von gefrorenem Pudding zusammen?",
          nl: "Hoe hangt de glas overgangstemperatuur samen met bevroren custard textuur?"
        },
        options: [
          { en: "Glass transition has no effect on frozen desserts", es: "La transición vítrea no tiene efecto en postres congelados", de: "Glasübergang hat keinen Einfluss auf gefrorene Desserts", nl: "Glas overgang heeft geen effect op bevroren desserts" },
          { en: "Below glass transition temperature, custard becomes rigid and brittle; above it, becomes soft and pliable", es: "Debajo de la temperatura de transición vítrea, las natillas se vuelven rígidas y frágiles; arriba, se vuelven suaves y flexibles", de: "Unter der Glasübergangstemperatur wird Pudding starr und spröde; darüber wird er weich und biegsam", nl: "Onder de glas overgangstemperatuur wordt custard rigide en bros; erboven wordt het zacht en buigbaar" },
          { en: "Glass transition only affects color changes", es: "La transición vítrea solo afecta cambios de color", de: "Glasübergang beeinflusst nur Farbveränderungen", nl: "Glas overgang beïnvloedt alleen kleurveranderingen" },
          { en: "It determines only the freezing point", es: "Determina solo el punto de congelación", de: "Es bestimmt nur den Gefrierpunkt", nl: "Het bepaalt alleen het vriespunt" }
        ],
        correct: 1,
        explanation: {
          en: "The glass transition temperature is critical for frozen custard texture. Below this temperature, the custard matrix becomes glassy and rigid. Above it, the matrix becomes rubbery and soft, affecting scoopability and mouthfeel.",
          es: "La temperatura de transición vítrea es crítica para la textura de natillas congeladas. Debajo de esta temperatura, la matriz de natillas se vuelve vítrea y rígida. Arriba, la matriz se vuelve gomosa y suave, afectando la capacidad de servir y sensación en boca.",
          de: "Die Glasübergangstemperatur ist kritisch für die Textur von gefrorenem Pudding. Unter dieser Temperatur wird die Pudding-Matrix glasig und starr. Darüber wird die Matrix gummiartig und weich, was Portionierbarkeit und Mundgefühl beeinflusst.",
          nl: "De glas overgangstemperatuur is kritiek voor bevroren custard textuur. Onder deze temperatuur wordt de custard matrix glasachtig en rigide. Erboven wordt de matrix rubberachtig en zacht, wat schepbaarheid en mondgevoel beïnvloedt."
        }
      },
      {
        question: {
          en: "What molecular changes occur during custard retrogradation?",
          es: "¿Qué cambios moleculares ocurren durante la retrogradación de natillas?",
          de: "Welche molekularen Veränderungen treten während der Pudding-Retrogradation auf?",
          nl: "Welke moleculaire veranderingen treden op tijdens custard retrogradatie?"
        },
        options: [
          { en: "Starch molecules reorganize and form more ordered crystalline structures", es: "Las moléculas de almidón se reorganizan y forman estructuras cristalinas más ordenadas", de: "Stärkemoleküle reorganisieren sich und bilden geordnetere kristalline Strukturen", nl: "Zetmeel moleculen reorganiseren en vormen meer geordende kristallijne structuren" },
          { en: "Proteins denature further with time", es: "Las proteínas se desnaturalizan más con el tiempo", de: "Proteine denaturieren mit der Zeit weiter", nl: "Eiwitten denatureren verder met tijd" },
          { en: "Fat molecules separate completely", es: "Las moléculas de grasa se separan completamente", de: "Fettmoleküle trennen sich vollständig", nl: "Vet moleculen scheiden volledig" },
          { en: "Sugar crystallizes into large crystals", es: "El azúcar cristaliza en cristales grandes", de: "Zucker kristallisiert zu großen Kristallen", nl: "Suiker kristalliseert in grote kristallen" }
        ],
        correct: 0,
        explanation: {
          en: "Retrogradation in starch-thickened custards involves the reorganization of starch molecules into more ordered, crystalline structures over time, leading to firming and potential syneresis (water separation).",
          es: "La retrogradación en natillas espesadas con almidón involucra la reorganización de moléculas de almidón en estructuras más ordenadas y cristalinas con el tiempo, llevando a endurecimiento y posible sinéresis (separación de agua).",
          de: "Retrogradation in stärkeverdickten Puddings beinhaltet die Reorganisation von Stärkemolekülen in geordnetere, kristalline Strukturen über die Zeit, was zu Verfestigung und möglicher Synerese (Wassertrennung) führt.",
          nl: "Retrogradatie in zetmeel-verdikte custards behelst de reorganisatie van zetmeel moleculen in meer geordende, kristallijne structuren over tijd, wat leidt tot verharding en mogelijke synerese (water scheiding)."
        }
      },
      {
        question: {
          en: "How do antifreeze proteins theoretically affect custard freezing behavior?",
          es: "¿Cómo afectan teóricamente las proteínas anticongelantes el comportamiento de congelación de las natillas?",
          de: "Wie beeinflussen Gefrierschutzproteine theoretisch das Gefrierverhalten von Pudding?",
          nl: "Hoe beïnvloeden antivries eiwitten theoretisch custard bevriezingsgedrag?"
        },
        options: [
          { en: "They prevent all ice crystal formation", es: "Previenen toda formación de cristales de hielo", de: "Sie verhindern alle Eiskristallbildung", nl: "Ze voorkomen alle ijskristal vorming" },
          { en: "They modify ice crystal growth and shape, potentially improving frozen texture", es: "Modifican el crecimiento y forma de cristales de hielo, potencialmente mejorando la textura congelada", de: "Sie modifizieren Eiskristallwachstum und -form, möglicherweise verbessern sie die gefrorene Textur", nl: "Ze modificeren ijskristal groei en vorm, mogelijk verbeterend bevroren textuur" },
          { en: "They only affect melting temperature", es: "Solo afectan la temperatura de fusión", de: "Sie beeinflussen nur die Schmelztemperatur", nl: "Ze beïnvloeden alleen smelttemperatuur" },
          { en: "They have no effect on custard", es: "No tienen efecto en las natillas", de: "Sie haben keinen Einfluss auf Pudding", nl: "Ze hebben geen effect op custard" }
        ],
        correct: 1,
        explanation: {
          en: "Antifreeze proteins, if used in custard formulations, would theoretically modify ice crystal nucleation and growth patterns, potentially creating smaller, more uniform ice crystals that improve frozen custard texture and prevent large ice formation.",
          es: "Las proteínas anticongelantes, si se usan en formulaciones de natillas, teóricamente modificarían los patrones de nucleación y crecimiento de cristales de hielo, potencialmente creando cristales de hielo más pequeños y uniformes que mejoran la textura de natillas congeladas y previenen la formación de hielo grande.",
          de: "Gefrierschutzproteine würden, wenn sie in Pudding-Formulierungen verwendet werden, theoretisch Eiskristall-Nukleation und Wachstumsmuster modifizieren, möglicherweise kleinere, gleichmäßigere Eiskristalle schaffen, die gefrorene Pudding-Textur verbessern und große Eisbildung verhindern.",
          nl: "Antivries eiwitten zouden, indien gebruikt in custard formuleringen, theoretisch ijskristal nucleatie en groei patronen modificeren, mogelijk kleinere, meer uniforme ijskristallen creëren die bevroren custard textuur verbeteren en grote ijs vorming voorkomen."
        }
      },
      {
        question: {
          en: "What is the role of lecithin in egg yolks for custard making?",
          es: "¿Cuál es el papel de la lecitina en las yemas de huevo para hacer natillas?",
          de: "Welche Rolle spielt Lecithin im Eigelb bei der Puddingherstellung?",
          nl: "Wat is de rol van lecithine in eidooiers voor custardmaking?"
        },
        options: [
          { en: "Acts as a natural emulsifier", es: "Actúa como emulsificante natural", de: "Wirkt als natürlicher Emulgator", nl: "Werkt als natuurlijke emulgator" },
          { en: "Provides sweetness", es: "Proporciona dulzura", de: "Verleiht Süße", nl: "Zorgt voor zoetheid" },
          { en: "Adds yellow color", es: "Añade color amarillo", de: "Fügt gelbe Farbe hinzu", nl: "Voegt gele kleur toe" },
          { en: "Increases cooking time", es: "Aumenta el tiempo de cocción", de: "Erhöht die Kochzeit", nl: "Verhoogt de kooktijd" }
        ],
        correct: 0,
        explanation: {
          en: "Lecithin in egg yolks is a phospholipid that acts as a natural emulsifier, helping to bind fat and water components together for smooth custard texture.",
          es: "La lecitina en las yemas de huevo es un fosfolípido que actúa como emulsificante natural, ayudando a unir componentes grasos y acuosos para una textura suave de natillas.",
          de: "Lecithin im Eigelb ist ein Phospholipid, das als natürlicher Emulgator wirkt und hilft, Fett- und Wasserkomponenten für eine glatte Puddingkonsistenz zu verbinden.",
          nl: "Lecithine in eidooiers is een fosfolipide dat werkt als natuurlijke emulgator, wat helpt vet- en watercomponenten te binden voor een gladde custardtextuur."
        }
      },
      {
        question: {
          en: "At what temperature do egg proteins begin to coagulate in custards?",
          es: "¿A qué temperatura comienzan a coagular las proteínas del huevo en las natillas?",
          de: "Bei welcher Temperatur beginnen Eiproteine in Pudding zu koagulieren?",
          nl: "Bij welke temperatuur beginnen eiproteïnen te coaguleren in custards?"
        },
        options: [
          { en: "140°F (60°C)", es: "140°F (60°C)", de: "140°F (60°C)", nl: "140°F (60°C)" },
          { en: "180°F (82°C)", es: "180°F (82°C)", de: "180°F (82°C)", nl: "180°F (82°C)" },
          { en: "212°F (100°C)", es: "212°F (100°C)", de: "212°F (100°C)", nl: "212°F (100°C)" },
          { en: "100°F (38°C)", es: "100°F (38°C)", de: "100°F (38°C)", nl: "100°F (38°C)" }
        ],
        correct: 0,
        explanation: {
          en: "Egg proteins begin to coagulate around 140°F (60°C), which is why gentle, controlled heating is essential to prevent the custard from curdling.",
          es: "Las proteínas del huevo comienzan a coagular alrededor de 140°F (60°C), razón por la cual el calentamiento suave y controlado es esencial para prevenir que las natillas se cuajen.",
          de: "Eiproteine beginnen bei etwa 140°F (60°C) zu koagulieren, weshalb sanftes, kontrolliertes Erhitzen wesentlich ist, um zu verhindern, dass der Pudding gerinnt.",
          nl: "Eiproteïnen beginnen te coaguleren rond 140°F (60°C), daarom is zachte, gecontroleerde verhitting essentieel om te voorkomen dat de custard klontert."
        }
      }
    ]
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level7;
  } else {
    window.custardsLevel7 = level7;
  }
})();