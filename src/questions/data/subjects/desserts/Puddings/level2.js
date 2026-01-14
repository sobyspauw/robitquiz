// Puddings Quiz - Level 2
(function() {
  const level2 = {
    name: {
          "en": "Puddings - Level 2",
          "es": "Puddings - Nivel 2",
          "de": "Puddings - Level 2",
          "nl": "Puddings - Level 2"
    },
    questions: [
      {
        question: {
                  "en": "What is the optimal starch concentration for achieving proper thickness in cornstarch puddings?",
                  "es": "¿Cuál es la concentración óptima de almidón para lograr el espesor adecuado en puddings de maicena?",
                  "de": "Was ist die optimale Stärkekonzentration für die richtige Dicke in Maisstärke-Puddings?",
                  "nl": "Wat is de optimale zetmeelconcentratie voor het bereiken van de juiste dikte in maïszetmeel puddings?"
        },
        options: [
        {
                  "en": "1-2% by weight",
                  "es": "1-2% por peso",
                  "de": "1-2% nach Gewicht",
                  "nl": "1-2% naar gewicht"
        },
        {
                  "en": "3-5% by weight",
                  "es": "3-5% por peso",
                  "de": "3-5% nach Gewicht",
                  "nl": "3-5% naar gewicht"
        },
        {
                  "en": "8-10% by weight",
                  "es": "8-10% por peso",
                  "de": "8-10% nach Gewicht",
                  "nl": "8-10% naar gewicht"
        },
        {
                  "en": "15-20% by weight",
                  "es": "15-20% por peso",
                  "de": "15-20% nach Gewicht",
                  "nl": "15-20% naar gewicht"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "3-5% starch concentration provides the ideal thickness for puddings. This level creates a smooth, creamy texture that coats a spoon properly without being too thick or thin.",
                  "es": "La concentración de almidón del 3-5% proporciona el espesor ideal para puddings. Este nivel crea una textura suave y cremosa que cubre una cuchara adecuadamente sin ser muy espeso o delgado.",
                  "de": "3-5% Stärkekonzentration bietet die ideale Dicke für Puddings. Dieses Niveau erzeugt eine glatte, cremige Textur, die einen Löffel richtig überzieht, ohne zu dick oder dünn zu sein.",
                  "nl": "3-5% zetmeelconcentratie biedt de ideale dikte voor puddings. Dit niveau creëert een gladde, romige textuur die een lepel goed bedekt zonder te dik of dun te zijn."
        }
      },
      {
        question: {
                  "en": "Which molecular process occurs when starch granules are heated in liquid during pudding preparation?",
                  "es": "¿Qué proceso molecular ocurre cuando los gránulos de almidón se calientan en líquido durante la preparación de pudding?",
                  "de": "Welcher molekulare Prozess tritt auf, wenn Stärkekörner in Flüssigkeit während der Pudding-Zubereitung erhitzt werden?",
                  "nl": "Welk moleculair proces vindt plaats wanneer zetmeelkorrels worden verhit in vloeistof tijdens de pudding bereiding?"
        },
        options: [
        {
                  "en": "Protein denaturation",
                  "es": "Desnaturalización de proteínas",
                  "de": "Proteindenaturierung",
                  "nl": "Eiwitdenaturatie"
        },
        {
                  "en": "Maillard reaction",
                  "es": "Reacción de Maillard",
                  "de": "Maillard-Reaktion",
                  "nl": "Maillard reactie"
        },
        {
                  "en": "Crystallization",
                  "es": "Cristalización",
                  "de": "Kristallisation",
                  "nl": "Kristallisatie"
        },
        {
                  "en": "Gelatinization and amylose leaching",
                  "es": "Gelatinización y lixiviación de amilosa",
                  "de": "Gelatinierung und Amylose-Auslaugung",
                  "nl": "Gelatinisatie en amylose uitloging"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Starch gelatinization occurs when heated granules swell and release amylose, creating the thickening effect. This process is essential for proper pudding texture formation.",
                  "es": "La gelatinización del almidón ocurre cuando los gránulos calentados se hinchan y liberan amilosa, creando el efecto espesante. Este proceso es esencial para la formación adecuada de la textura del pudding.",
                  "de": "Stärkegelatinierung tritt auf, wenn erhitzte Körner quellen und Amylose freisetzen, was den Verdickungseffekt erzeugt. Dieser Prozess ist wesentlich für die richtige Pudding-Texturbildung.",
                  "nl": "Zetmeelgelatinisatie vindt plaats wanneer verhitte korrels zwellen en amylose vrijgeven, wat het verdikkende effect creëert. Dit proces is essentieel voor goede pudding textuurvorming."
        }
      },
      {
        question: {
                  "en": "What causes the formation of a skin on cooling puddings and how can it be prevented?",
                  "es": "¿Qué causa la formación de una piel en puddings que se enfrían y cómo se puede prevenir?",
                  "de": "Was verursacht die Bildung einer Haut auf abkühlenden Puddings und wie kann sie verhindert werden?",
                  "nl": "Wat veroorzaakt de vorming van een vel op afkoelende puddings en hoe kan dit worden voorkomen?"
        },
        options: [
        {
                  "en": "Protein coagulation at surface; prevented by contact covering",
                  "es": "Coagulación de proteínas en superficie; prevenida por cobertura de contacto",
                  "de": "Proteinkoagulation an der Oberfläche; verhindert durch Kontaktabdeckung",
                  "nl": "Eiwitcoagulatie aan oppervlak; voorkomen door contactbedekking"
        },
        {
                  "en": "Sugar crystallization; prevented by stirring",
                  "es": "Cristalización del azúcar; prevenida por revolver",
                  "de": "Zuckerkristallisation; verhindert durch Rühren",
                  "nl": "Suikerkristallisatie; voorkomen door roeren"
        },
        {
                  "en": "Starch retrogradation; prevented by acid",
                  "es": "Retrogradación del almidón; prevenida por ácido",
                  "de": "Stärke-Retrogradation; verhindert durch Säure",
                  "nl": "Zetmeel retrogradatie; voorkomen door zuur"
        },
        {
                  "en": "Fat separation; prevented by emulsifiers",
                  "es": "Separación de grasa; prevenida por emulsificantes",
                  "de": "Fetttrennung; verhindert durch Emulgatoren",
                  "nl": "Vetscheiding; voorkomen door emulgatoren"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Surface skin forms due to protein coagulation and moisture evaporation. Direct contact covering with plastic wrap prevents air exposure and skin formation.",
                  "es": "La piel superficial se forma debido a la coagulación de proteínas y evaporación de humedad. La cobertura de contacto directo con papel film previene la exposición al aire y formación de piel.",
                  "de": "Oberflächenhaut bildet sich durch Proteinkoagulation und Feuchtigkeitsverdunstung. Direkter Kontaktschutz mit Frischhaltefolie verhindert Luftexposition und Hautbildung.",
                  "nl": "Oppervlaktevel vormt door eiwitcoagulatie en vochtverdamping. Directe contactbedekking met plasticfolie voorkomt luchtblootstelling en velvorming."
        }
      },
      {
        question: {
                  "en": "How does the ratio of amylose to amylopectin in different starches affect pudding texture?",
                  "es": "¿Cómo afecta la proporción de amilosa a amilopectina en diferentes almidones la textura del pudding?",
                  "de": "Wie beeinflusst das Verhältnis von Amylose zu Amylopektin in verschiedenen Stärken die Pudding-Textur?",
                  "nl": "Hoe beïnvloedt de verhouding van amylose tot amylopectine in verschillende zetmelen de pudding textuur?"
        },
        options: [
        {
                  "en": "Only amylose contributes to thickening",
                  "es": "Solo la amilosa contribuye al espesamiento",
                  "de": "Nur Amylose trägt zur Verdickung bei",
                  "nl": "Alleen amylose draagt bij aan verdikking"
        },
        {
                  "en": "Higher amylopectin always produces better texture",
                  "es": "Mayor amilopectina siempre produce mejor textura",
                  "de": "Höhere Amylopektin produziert immer bessere Textur",
                  "nl": "Hogere amylopectine produceert altijd betere textuur"
        },
        {
                  "en": "Higher amylose creates firmer, more stable gels",
                  "es": "Mayor amilosa crea geles más firmes y estables",
                  "de": "Höhere Amylose erzeugt festere, stabilere Gele",
                  "nl": "Hogere amylose creëert stevigere, stabielere gels"
        },
        {
                  "en": "The ratio has no effect on texture",
                  "es": "La proporción no tiene efecto en la textura",
                  "de": "Das Verhältnis hat keinen Einfluss auf die Textur",
                  "nl": "De verhouding heeft geen effect op textuur"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Higher amylose content creates stronger molecular networks, resulting in firmer, more stable puddings. Amylopectin contributes to viscosity but creates softer textures.",
                  "es": "Mayor contenido de amilosa crea redes moleculares más fuertes, resultando en puddings más firmes y estables. La amilopectina contribuye a la viscosidad pero crea texturas más suaves.",
                  "de": "Höherer Amylosegehalt erzeugt stärkere molekulare Netzwerke, was zu festeren, stabileren Puddings führt. Amylopektin trägt zur Viskosität bei, erzeugt aber weichere Texturen.",
                  "nl": "Hoger amylosegehalte creëert sterkere moleculaire netwerken, wat resulteert in stevigere, stabielere puddings. Amylopectine draagt bij aan viscositeit maar creëert zachtere texturen."
        }
      },
      {
        question: {
                  "en": "What is the critical temperature range for proper starch activation in pudding making?",
                  "es": "¿Cuál es el rango de temperatura crítico para la activación adecuada del almidón en la elaboración de pudding?",
                  "de": "Was ist der kritische Temperaturbereich für die richtige Stärkeaktivierung bei der Pudding-Herstellung?",
                  "nl": "Wat is het kritieke temperatuurbereik voor goede zetmeel activatie bij pudding maken?"
        },
        options: [
        {
                  "en": "100-110°C (212-230°F)",
                  "es": "100-110°C (212-230°F)",
                  "de": "100-110°C (212-230°F)",
                  "nl": "100-110°C (212-230°F)"
        },
        {
                  "en": "50-60°C (122-140°F)",
                  "es": "50-60°C (122-140°F)",
                  "de": "50-60°C (122-140°F)",
                  "nl": "50-60°C (122-140°F)"
        },
        {
                  "en": "90-95°C (194-203°F)",
                  "es": "90-95°C (194-203°F)",
                  "de": "90-95°C (194-203°F)",
                  "nl": "90-95°C (194-203°F)"
        },
        {
                  "en": "70-85°C (158-185°F)",
                  "es": "70-85°C (158-185°F)",
                  "de": "70-85°C (158-185°F)",
                  "nl": "70-85°C (158-185°F)"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Starch gelatinization occurs optimally between 70-85°C. This temperature range ensures complete granule swelling and maximum thickening power for puddings.",
                  "es": "La gelatinización del almidón ocurre óptimamente entre 70-85°C. Este rango de temperatura asegura hinchazón completa de gránulos y máximo poder espesante para puddings.",
                  "de": "Stärkegelatinierung tritt optimal zwischen 70-85°C auf. Dieser Temperaturbereich gewährleistet vollständige Kornquellung und maximale Verdickungskraft für Puddings.",
                  "nl": "Zetmeelgelatinisatie vindt optimaal plaats tussen 70-85°C. Dit temperatuurbereik zorgt voor volledige korrelzwelling en maximale verdikkingskracht voor puddings."
        }
      },
      {
        question: {
                  "en": "Why do some pudding recipes require tempering of eggs before adding hot liquid?",
                  "es": "¿Por qué algunas recetas de pudding requieren templar huevos antes de agregar líquido caliente?",
                  "de": "Warum erfordern einige Pudding-Rezepte das Temperieren von Eiern vor dem Hinzufügen heißer Flüssigkeit?",
                  "nl": "Waarom vereisen sommige pudding recepten het temperen van eieren voordat hete vloeistof wordt toegevoegd?"
        },
        options: [
        {
                  "en": "To prevent egg proteins from coagulating and creating lumps",
                  "es": "Para prevenir que las proteínas del huevo coagulen y creen grumos",
                  "de": "Um zu verhindern, dass Eiproteine koagulieren und Klumpen bilden",
                  "nl": "Om te voorkomen dat eiwitten coaguleren en klontjes vormen"
        },
        {
                  "en": "To improve flavor development",
                  "es": "Para mejorar el desarrollo del sabor",
                  "de": "Um die Geschmacksentwicklung zu verbessern",
                  "nl": "Om smaakontikkeling te verbeteren"
        },
        {
                  "en": "To reduce cooking time",
                  "es": "Para reducir el tiempo de cocción",
                  "de": "Um die Garzeit zu reduzieren",
                  "nl": "Om kooktijd te verminderen"
        },
        {
                  "en": "To increase nutritional value",
                  "es": "Para aumentar el valor nutricional",
                  "de": "Um den Nährwert zu erhöhen",
                  "nl": "Om voedingswaarde te verhogen"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Tempering gradually raises egg temperature to prevent thermal shock that would cause proteins to coagulate rapidly, forming undesirable lumps in the pudding.",
                  "es": "El templado eleva gradualmente la temperatura del huevo para prevenir choque térmico que causaría que las proteínas coagulen rápidamente, formando grumos indeseables en el pudding.",
                  "de": "Temperieren erhöht allmählich die Eitemperatur, um Temperaturschock zu verhindern, der dazu führen würde, dass Proteine schnell koagulieren und unerwünschte Klumpen im Pudding bilden.",
                  "nl": "Temperen verhoogt geleidelijk de eitemperatuur om thermische schok te voorkomen die zou zorgen dat eiwitten snel coaguleren, wat ongewenste klontjes in de pudding vormt."
        }
      },
      {
        question: {
                  "en": "How does the pH level affect starch thickening efficiency in puddings?",
                  "es": "¿Cómo afecta el nivel de pH la eficiencia de espesamiento del almidón en puddings?",
                  "de": "Wie beeinflusst der pH-Wert die Stärke-Verdickungseffizienz in Puddings?",
                  "nl": "Hoe beïnvloedt het pH-niveau de zetmeel verdikkingsefficiëntie in puddings?"
        },
        options: [
        {
                  "en": "pH has no effect on starch thickening",
                  "es": "El pH no tiene efecto en el espesamiento del almidón",
                  "de": "pH hat keinen Einfluss auf Stärkeverdickung",
                  "nl": "pH heeft geen effect op zetmeel verdikking"
        },
        {
                  "en": "Acidic conditions enhance thickening power",
                  "es": "Condiciones ácidas mejoran el poder espesante",
                  "de": "Saure Bedingungen verstärken die Verdickungskraft",
                  "nl": "Zure omstandigheden verbeteren verdikkingskracht"
        },
        {
                  "en": "Very acidic conditions can break down starch and reduce thickening",
                  "es": "Condiciones muy ácidas pueden descomponer el almidón y reducir espesamiento",
                  "de": "Sehr saure Bedingungen können Stärke abbauen und Verdickung reduzieren",
                  "nl": "Zeer zure omstandigheden kunnen zetmeel afbreken en verdikking verminderen"
        },
        {
                  "en": "Alkaline conditions always improve texture",
                  "es": "Condiciones alcalinas siempre mejoran la textura",
                  "de": "Alkalische Bedingungen verbessern immer die Textur",
                  "nl": "Alkalische omstandigheden verbeteren altijd textuur"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Very acidic conditions (low pH) can hydrolyze starch molecules, breaking them down and reducing their thickening ability. Moderate acidity is generally acceptable for most puddings.",
                  "es": "Condiciones muy ácidas (pH bajo) pueden hidrolizar moléculas de almidón, descomponiéndolas y reduciendo su capacidad espesante. La acidez moderada es generalmente aceptable para la mayoría de puddings.",
                  "de": "Sehr saure Bedingungen (niedriger pH) können Stärkemoleküle hydrolysieren, sie abbauen und ihre Verdickungsfähigkeit reduzieren. Moderate Säure ist für die meisten Puddings allgemein akzeptabel.",
                  "nl": "Zeer zure omstandigheden (lage pH) kunnen zetmeelmoleculen hydrolyseren, ze afbreken en hun verdikkingsabiliteit verminderen. Gematigde zuurheid is algemeen acceptabel voor de meeste puddings."
        }
      },
      {
        question: {
                  "en": "What causes puddings to become lumpy and how can this be prevented during preparation?",
                  "es": "¿Qué causa que los puddings se vuelvan grumosos y cómo se puede prevenir durante la preparación?",
                  "de": "Was verursacht, dass Puddings klumpig werden und wie kann dies während der Zubereitung verhindert werden?",
                  "nl": "Wat veroorzaakt dat puddings klonterig worden en hoe kan dit worden voorkomen tijdens de bereiding?"
        },
        options: [
        {
                  "en": "Inadequate mixing and uneven heating; prevent with constant stirring and gradual heating",
                  "es": "Mezclado inadecuado y calentamiento desigual; prevenir con revuelto constante y calentamiento gradual",
                  "de": "Unzureichendes Mischen und ungleichmäßiges Erhitzen; verhindern durch konstantes Rühren und allmähliches Erhitzen",
                  "nl": "Onvoldoende mengen en ongelijkmatige verhitting; voorkomen met constant roeren en geleidelijke verhitting"
        },
        {
                  "en": "Using cold ingredients; prevent by warming everything first",
                  "es": "Usar ingredientes fríos; prevenir calentando todo primero",
                  "de": "Kalte Zutaten verwenden; verhindern durch vorheriges Erwärmen von allem",
                  "nl": "Koude ingrediënten gebruiken; voorkomen door alles eerst op te warmen"
        },
        {
                  "en": "Adding eggs too quickly; prevent by using fewer eggs",
                  "es": "Agregar huevos muy rápido; prevenir usando menos huevos",
                  "de": "Eier zu schnell hinzufügen; verhindern durch weniger Eier verwenden",
                  "nl": "Eieren te snel toevoegen; voorkomen door minder eieren te gebruiken"
        },
        {
                  "en": "Too much sugar; prevent by reducing sugar content",
                  "es": "Demasiada azúcar; prevenir reduciendo contenido de azúcar",
                  "de": "Zu viel Zucker; verhindern durch Reduzierung des Zuckergehalts",
                  "nl": "Te veel suiker; voorkomen door suikergehalte te verminderen"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Lumps form when starch granules clump together due to inadequate mixing or too rapid heating. Constant stirring and gradual temperature increase ensure even distribution and smooth texture.",
                  "es": "Los grumos se forman cuando los gránulos de almidón se agrupan debido a mezclado inadecuado o calentamiento muy rápido. El revuelto constante y aumento gradual de temperatura aseguran distribución uniforme y textura suave.",
                  "de": "Klumpen entstehen, wenn Stärkekörner durch unzureichendes Mischen oder zu schnelles Erhitzen zusammenklumpen. Konstantes Rühren und allmähliche Temperaturerhöhung gewährleisten gleichmäßige Verteilung und glatte Textur.",
                  "nl": "Klontjes vormen wanneer zetmeelkorrels samenklitten door onvoldoende mengen of te snelle verhitting. Constant roeren en geleidelijke temperatuurverhoging zorgen voor gelijkmatige verdeling en gladde textuur."
        }
      },
      {
        question: {
                  "en": "Which type of starch provides the clearest appearance in puddings and why?",
                  "es": "¿Qué tipo de almidón proporciona la apariencia más clara en puddings y por qué?",
                  "de": "Welche Art von Stärke bietet das klarste Aussehen in Puddings und warum?",
                  "nl": "Welk type zetmeel geeft het helderste uiterlijk in puddings en waarom?"
        },
        options: [
        {
                  "en": "Wheat starch; it has the lowest protein content",
                  "es": "Almidón de trigo; tiene el menor contenido de proteína",
                  "de": "Weizenstärke; sie hat den niedrigsten Proteingehalt",
                  "nl": "Tarwezetmeel; het heeft het laagste eiwitgehalte"
        },
        {
                  "en": "Potato starch; it forms clear, translucent gels",
                  "es": "Almidón de papa; forma geles claros y translúcidos",
                  "de": "Kartoffelstärke; sie bildet klare, durchscheinende Gele",
                  "nl": "Aardappelzetmeel; het vormt heldere, doorschijnende gels"
        },
        {
                  "en": "Corn starch; it's the most commonly used",
                  "es": "Almidón de maíz; es el más comúnmente usado",
                  "de": "Maisstärke; sie wird am häufigsten verwendet",
                  "nl": "Maïszetmeel; het wordt het meest gebruikt"
        },
        {
                  "en": "Rice starch; it has the smallest granules",
                  "es": "Almidón de arroz; tiene los gránulos más pequeños",
                  "de": "Reisstärke; sie hat die kleinsten Körner",
                  "nl": "Rijstzetmeel; het heeft de kleinste korrels"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Potato starch creates the clearest, most translucent gels because of its molecular structure and minimal interference with light transmission through the gel matrix.",
                  "es": "El almidón de papa crea los geles más claros y translúcidos debido a su estructura molecular y mínima interferencia con la transmisión de luz a través de la matriz del gel.",
                  "de": "Kartoffelstärke erzeugt die klarsten, durchscheinendsten Gele aufgrund ihrer molekularen Struktur und minimalen Interferenz mit der Lichtübertragung durch die Gelmatrix.",
                  "nl": "Aardappelzetmeel creëert de helderste, meest doorschijnende gels vanwege zijn moleculaire structuur en minimale interferentie met lichttransmissie door de gelmatrix."
        }
      },
      {
        question: {
                  "en": "How does sugar concentration affect the setting point and final texture of puddings?",
                  "es": "¿Cómo afecta la concentración de azúcar el punto de cuajado y la textura final de los puddings?",
                  "de": "Wie beeinflusst die Zuckerkonzentration den Abbindepunkt und die Endtextur von Puddings?",
                  "nl": "Hoe beïnvloedt suikerconcentratie het zetpunt en de uiteindelijke textuur van puddings?"
        },
        options: [
        {
                  "en": "Sugar only affects flavor, not texture",
                  "es": "El azúcar solo afecta el sabor, no la textura",
                  "de": "Zucker beeinflusst nur den Geschmack, nicht die Textur",
                  "nl": "Suiker beïnvloedt alleen smaak, niet textuur"
        },
        {
                  "en": "Higher sugar raises setting temperature and creates firmer texture",
                  "es": "Mayor azúcar eleva temperatura de cuajado y crea textura más firme",
                  "de": "Höherer Zucker erhöht Abbindetemperatur und erzeugt festere Textur",
                  "nl": "Hogere suiker verhoogt zettemperatuur en creëert stevigere textuur"
        },
        {
                  "en": "Sugar has no effect on setting or texture",
                  "es": "El azúcar no tiene efecto en cuajado o textura",
                  "de": "Zucker hat keinen Einfluss auf Abbinden oder Textur",
                  "nl": "Suiker heeft geen effect op zetten of textuur"
        },
        {
                  "en": "Higher sugar lowers setting temperature and creates softer texture",
                  "es": "Mayor azúcar reduce temperatura de cuajado y crea textura más suave",
                  "de": "Höherer Zucker senkt Abbindetemperatur und erzeugt weichere Textur",
                  "nl": "Hogere suiker verlaagt zettemperatuur en creëert zachtere textuur"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Higher sugar concentration raises the setting temperature by interfering with starch-water interactions and creates firmer texture by reducing water activity in the gel network.",
                  "es": "Mayor concentración de azúcar eleva la temperatura de cuajado interfiriendo con interacciones almidón-agua y crea textura más firme reduciendo actividad del agua en la red del gel.",
                  "de": "Höhere Zuckerkonzentration erhöht die Abbindetemperatur durch Interferenz mit Stärke-Wasser-Wechselwirkungen und erzeugt festere Textur durch Reduzierung der Wasseraktivität im Gelnetzwerk.",
                  "nl": "Hogere suikerconcentratie verhoogt de zettemperatuur door interferentie met zetmeel-water interacties en creëert stevigere textuur door wateractiviteit in het gelnetwerk te verminderen."
        }
      },
      {
        question: {
                  "en": "What is the purpose of straining pudding mixture before final cooking?",
                  "es": "¿Cuál es el propósito de colar la mezcla de pudding antes de la cocción final?",
                  "de": "Was ist der Zweck des Durchseihens der Pudding-Mischung vor dem finalen Kochen?",
                  "nl": "Wat is het doel van het zeven van pudding mengsel voor het definitieve koken?"
        },
        options: [
        {
                  "en": "To remove excess liquid",
                  "es": "Para eliminar líquido excesivo",
                  "de": "Um überschüssige Flüssigkeit zu entfernen",
                  "nl": "Om overtollige vloeistof te verwijderen"
        },
        {
                  "en": "To add air for lightness",
                  "es": "Para agregar aire para ligereza",
                  "de": "Um Luft für Leichtigkeit hinzuzufügen",
                  "nl": "Om lucht toe te voegen voor lichtheid"
        },
        {
                  "en": "To concentrate flavors",
                  "es": "Para concentrar sabores",
                  "de": "Um Aromen zu konzentrieren",
                  "nl": "Om smaken te concentreren"
        },
        {
                  "en": "To remove lumps and ensure smooth texture",
                  "es": "Para eliminar grumos y asegurar textura suave",
                  "de": "Um Klumpen zu entfernen und glatte Textur zu gewährleisten",
                  "nl": "Om klontjes te verwijderen en gladde textuur te verzekeren"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Straining removes any lumps of undissolved starch, coagulated proteins, or other particles that could create an unpleasant texture in the finished pudding.",
                  "es": "Colar elimina cualquier grumo de almidón no disuelto, proteínas coaguladas u otras partículas que podrían crear una textura desagradable en el pudding terminado.",
                  "de": "Durchseihen entfernt Klumpen ungelöster Stärke, koagulierte Proteine oder andere Partikel, die eine unangenehme Textur im fertigen Pudding erzeugen könnten.",
                  "nl": "Zeven verwijdert klontjes van onopgelost zetmeel, gecoaguleerde eiwitten of andere deeltjes die een onaangename textuur in de afgewerkte pudding zouden kunnen creëren."
        }
      },
      {
        question: {
                  "en": "How does the fat content in dairy affect pudding texture and mouthfeel?",
                  "es": "¿Cómo afecta el contenido de grasa en lácteos la textura y sensación bucal del pudding?",
                  "de": "Wie beeinflusst der Fettgehalt in Milchprodukten die Pudding-Textur und das Mundgefühl?",
                  "nl": "Hoe beïnvloedt het vetgehalte in zuivel de pudding textuur en mondgevoel?"
        },
        options: [
        {
                  "en": "Lower fat always produces better puddings",
                  "es": "Menor grasa siempre produce mejores puddings",
                  "de": "Weniger Fett produziert immer bessere Puddings",
                  "nl": "Lager vet produceert altijd betere puddings"
        },
        {
                  "en": "Fat content has no impact on texture",
                  "es": "El contenido de grasa no tiene impacto en la textura",
                  "de": "Fettgehalt hat keinen Einfluss auf die Textur",
                  "nl": "Vetgehalte heeft geen impact op textuur"
        },
        {
                  "en": "Higher fat content creates richer, creamier mouthfeel and smoother texture",
                  "es": "Mayor contenido de grasa crea sensación bucal más rica y cremosa y textura más suave",
                  "de": "Höherer Fettgehalt erzeugt reichhaltigeres, cremigeres Mundgefühl und glattere Textur",
                  "nl": "Hoger vetgehalte creëert rijkere, romigere mondgevoel en gladdere textuur"
        },
        {
                  "en": "Higher fat content creates lighter, airier texture",
                  "es": "Mayor contenido de grasa crea textura más ligera y aireada",
                  "de": "Höherer Fettgehalt erzeugt leichtere, luftigere Textur",
                  "nl": "Hoger vetgehalte creëert lichtere, luchtigere textuur"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Higher fat content provides richness and creates a smoother, more luxurious mouthfeel. Fat also helps stabilize the pudding structure and contributes to creamy texture.",
                  "es": "Mayor contenido de grasa proporciona riqueza y crea una sensación bucal más suave y lujosa. La grasa también ayuda a estabilizar la estructura del pudding y contribuye a la textura cremosa.",
                  "de": "Höherer Fettgehalt bietet Reichhaltigkeit und erzeugt ein glatteres, luxuriöseres Mundgefühl. Fett hilft auch, die Puddingstruktur zu stabilisieren und trägt zur cremigen Textur bei.",
                  "nl": "Hoger vetgehalte biedt rijkdom en creëert een gladdere, luxueuze mondgevoel. Vet helpt ook de puddingstructuur te stabiliseren en draagt bij aan romige textuur."
        }
      },
      {
        question: {
                  "en": "What happens to starch molecules during retrogradation and how does it affect stored puddings?",
                  "es": "¿Qué pasa con las moléculas de almidón durante la retrogradación y cómo afecta a los puddings almacenados?",
                  "de": "Was passiert mit Stärkemolekülen während der Retrogradation und wie beeinflusst es gelagerte Puddings?",
                  "nl": "Wat gebeurt er met zetmeelmoleculen tijdens retrogradatie en hoe beïnvloedt dit opgeslagen puddings?"
        },
        options: [
        {
                  "en": "Molecules break down completely",
                  "es": "Las moléculas se descomponen completamente",
                  "de": "Moleküle bauen sich vollständig ab",
                  "nl": "Moleculen breken volledig af"
        },
        {
                  "en": "Molecules become more soluble, improving texture",
                  "es": "Las moléculas se vuelven más solubles, mejorando la textura",
                  "de": "Moleküle werden löslicher, verbessern die Textur",
                  "nl": "Moleculen worden oplosbaarde, verbeteren textuur"
        },
        {
                  "en": "Nothing changes during storage",
                  "es": "Nada cambia durante el almacenamiento",
                  "de": "Nichts ändert sich während der Lagerung",
                  "nl": "Niets verandert tijdens opslag"
        },
        {
                  "en": "Starch molecules realign and form crystalline structures, causing firmness and syneresis",
                  "es": "Moléculas de almidón se realinean y forman estructuras cristalinas, causando firmeza y sinéresis",
                  "de": "Stärkemoleküle richten sich neu aus und bilden kristalline Strukturen, was zu Festigkeit und Synärese führt",
                  "nl": "Zetmeelmoleculen herrangschikken en vormen kristallijne structuren, wat stevigheid en synerese veroorzaakt"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "During retrogradation, starch molecules reassociate into ordered crystalline structures, causing puddings to become firmer and potentially release water (syneresis) during storage.",
                  "es": "Durante la retrogradación, las moléculas de almidón se reasocian en estructuras cristalinas ordenadas, causando que los puddings se vuelvan más firmes y potencialmente liberen agua (sinéresis) durante el almacenamiento.",
                  "de": "Während der Retrogradation reassoziieren Stärkemoleküle in geordnete kristalline Strukturen, wodurch Puddings fester werden und möglicherweise Wasser freisetzen (Synärese) während der Lagerung.",
                  "nl": "Tijdens retrogradatie herassociëren zetmeelmoleculen in geordende kristallijne structuren, waardoor puddings steviger worden en mogelijk water vrijgeven (synerese) tijdens opslag."
        }
      },
      {
        question: {
                  "en": "Which emulsification technique helps create stable chocolate puddings without separation?",
                  "es": "¿Qué técnica de emulsificación ayuda a crear puddings de chocolate estables sin separación?",
                  "de": "Welche Emulgierungstechnik hilft dabei, stabile Schokoladenpuddings ohne Trennung zu erzeugen?",
                  "nl": "Welke emulgatietechniek helpt stabiele chocolade puddings te maken zonder scheiding?"
        },
        options: [
        {
                  "en": "Using only cocoa powder instead of chocolate",
                  "es": "Usar solo cacao en polvo en lugar de chocolate",
                  "de": "Nur Kakaopulver statt Schokolade verwenden",
                  "nl": "Alleen cacaopoeder gebruiken in plaats van chocolade"
        },
        {
                  "en": "Gradual incorporation with constant whisking to form stable emulsion",
                  "es": "Incorporación gradual con batido constante para formar emulsión estable",
                  "de": "Allmähliche Einarbeitung mit konstantem Schlagen zur Bildung stabiler Emulsion",
                  "nl": "Geleidelijke incorporatie met constant kloppen om stabiele emulsie te vormen"
        },
        {
                  "en": "Melting chocolate separately and cooling before adding",
                  "es": "Derretir chocolate por separado y enfriar antes de agregar",
                  "de": "Schokolade separat schmelzen und vor Zugabe abkühlen",
                  "nl": "Chocolade apart smelten en afkoelen voor toevoegen"
        },
        {
                  "en": "Adding all chocolate at once at the end",
                  "es": "Agregar todo el chocolate de una vez al final",
                  "de": "Alle Schokolade auf einmal am Ende hinzufügen",
                  "nl": "Alle chocolade in één keer aan het eind toevoegen"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Gradual incorporation with constant whisking creates a stable emulsion between the fat in chocolate and the water-based pudding, preventing separation and ensuring smooth texture.",
                  "es": "La incorporación gradual con batido constante crea una emulsión estable entre la grasa del chocolate y el pudding a base de agua, previniendo separación y asegurando textura suave.",
                  "de": "Allmähliche Einarbeitung mit konstantem Schlagen erzeugt eine stabile Emulsion zwischen dem Fett in der Schokolade und dem wasserbasierten Pudding, verhindert Trennung und gewährleistet glatte Textur.",
                  "nl": "Geleidelijke incorporatie met constant kloppen creëert een stabiele emulsie tussen het vet in chocolade en de watergebaseerde pudding, voorkomt scheiding en verzekert gladde textuur."
        }
      },
      {
        question: {
                  "en": "How does the protein content of different milks affect pudding structure and stability?",
                  "es": "¿Cómo afecta el contenido de proteína de diferentes leches la estructura y estabilidad del pudding?",
                  "de": "Wie beeinflusst der Proteingehalt verschiedener Milchsorten die Pudding-Struktur und -Stabilität?",
                  "nl": "Hoe beïnvloedt het eiwitgehalte van verschillende melksoorten de pudding structuur en stabiliteit?"
        },
        options: [
        {
                  "en": "Higher protein content provides additional structure and stability",
                  "es": "Mayor contenido de proteína proporciona estructura y estabilidad adicional",
                  "de": "Höherer Proteingehalt bietet zusätzliche Struktur und Stabilität",
                  "nl": "Hoger eiwitgehalte biedt extra structuur en stabiliteit"
        },
        {
                  "en": "Protein content has no effect on pudding structure",
                  "es": "El contenido de proteína no tiene efecto en la estructura del pudding",
                  "de": "Proteingehalt hat keinen Einfluss auf die Puddingstruktur",
                  "nl": "Eiwitgehalte heeft geen effect op puddingstructuur"
        },
        {
                  "en": "Lower protein content always creates better texture",
                  "es": "Menor contenido de proteína siempre crea mejor textura",
                  "de": "Niedrigerer Proteingehalt erzeugt immer bessere Textur",
                  "nl": "Lager eiwitgehalte creëert altijd betere textuur"
        },
        {
                  "en": "Only fat content matters for pudding texture",
                  "es": "Solo el contenido de grasa importa para la textura del pudding",
                  "de": "Nur der Fettgehalt ist wichtig für die Puddingstruktur",
                  "nl": "Alleen vetgehalte is belangrijk voor pudding textuur"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Higher protein content in milk contributes additional structural support through protein coagulation, enhancing pudding stability and creating firmer, more stable texture.",
                  "es": "Mayor contenido de proteína en la leche contribuye soporte estructural adicional a través de coagulación de proteínas, mejorando estabilidad del pudding y creando textura más firme y estable.",
                  "de": "Höherer Proteingehalt in Milch trägt zusätzliche strukturelle Unterstützung durch Proteinkoagulation bei, verbessert Puddingstabilität und erzeugt festere, stabilere Textur.",
                  "nl": "Hoger eiwitgehalte in melk draagt bij aan extra structurele ondersteuning door eiwitcoagulatie, verbetert puddingstabiliteit en creëert stevigere, stabielere textuur."
        }
      },
      {
        question: {
                  "en": "What is the optimal storage temperature range for maintaining pudding quality and preventing bacterial growth?",
                  "es": "¿Cuál es el rango de temperatura de almacenamiento óptimo para mantener la calidad del pudding y prevenir crecimiento bacteriano?",
                  "de": "Was ist der optimale Lagertemperaturbereich zur Erhaltung der Puddingqualität und Verhinderung von Bakterienwachstum?",
                  "nl": "Wat is het optimale opslagtemperatuurbereik voor het behouden van pudding kwaliteit en het voorkomen van bacteriële groei?"
        },
        options: [
        {
                  "en": "Warm temperature (40-50°C)",
                  "es": "Temperatura tibia (40-50°C)",
                  "de": "Warme Temperatur (40-50°C)",
                  "nl": "Warme temperatuur (40-50°C)"
        },
        {
                  "en": "Freezing temperature (-5°C)",
                  "es": "Temperatura de congelación (-5°C)",
                  "de": "Gefriertemperatur (-5°C)",
                  "nl": "Vriestemperatuur (-5°C)"
        },
        {
                  "en": "Room temperature (18-25°C)",
                  "es": "Temperatura ambiente (18-25°C)",
                  "de": "Raumtemperatur (18-25°C)",
                  "nl": "Kamertemperatuur (18-25°C)"
        },
        {
                  "en": "Refrigeration temperature (2-4°C)",
                  "es": "Temperatura de refrigeración (2-4°C)",
                  "de": "Kühlschranktemperatur (2-4°C)",
                  "nl": "Koelkast temperatuur (2-4°C)"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Refrigeration at 2-4°C slows bacterial growth, maintains product safety, and preserves pudding texture. This temperature range prevents spoilage while maintaining quality.",
                  "es": "La refrigeración a 2-4°C ralentiza el crecimiento bacteriano, mantiene la seguridad del producto y preserva la textura del pudding. Este rango de temperatura previene deterioro mientras mantiene calidad.",
                  "de": "Kühlung bei 2-4°C verlangsamt Bakterienwachstum, erhält Produktsicherheit und bewahrt Puddingstruktur. Dieser Temperaturbereich verhindert Verderb bei gleichzeitiger Qualitätserhaltung.",
                  "nl": "Koeling op 2-4°C vertraagt bacteriële groei, behoudt productveiligheid en bewaart pudding textuur. Dit temperatuurbereik voorkomt bederf terwijl kwaliteit behouden blijft."
        }
      },
      {
        question: {
                  "en": "How does the addition of alcohol affect pudding texture and setting properties?",
                  "es": "¿Cómo afecta la adición de alcohol la textura del pudding y las propiedades de cuajado?",
                  "de": "Wie beeinflusst die Zugabe von Alkohol die Puddingstruktur und Abbindeeigenschaften?",
                  "nl": "Hoe beïnvloedt de toevoeging van alcohol de pudding textuur en zetteigenschappen?"
        },
        options: [
        {
                  "en": "Alcohol can interfere with starch gelatinization and soften texture",
                  "es": "El alcohol puede interferir con la gelatinización del almidón y suavizar la textura",
                  "de": "Alkohol kann die Stärkegelatinierung stören und die Textur weicher machen",
                  "nl": "Alcohol kan zetmeelgelatinisatie verstoren en textuur verzachten"
        },
        {
                  "en": "Alcohol improves gel strength significantly",
                  "es": "El alcohol mejora significativamente la fuerza del gel",
                  "de": "Alkohol verbessert die Gelstärke erheblich",
                  "nl": "Alcohol verbetert gelsterkte aanzienlijk"
        },
        {
                  "en": "Alcohol always improves pudding texture",
                  "es": "El alcohol siempre mejora la textura del pudding",
                  "de": "Alkohol verbessert immer die Puddingstruktur",
                  "nl": "Alcohol verbetert altijd pudding textuur"
        },
        {
                  "en": "Alcohol has no effect on pudding properties",
                  "es": "El alcohol no tiene efecto en las propiedades del pudding",
                  "de": "Alkohol hat keinen Einfluss auf Puddingeigenschaften",
                  "nl": "Alcohol heeft geen effect op pudding eigenschappen"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Alcohol can interfere with starch-water interactions, potentially reducing gel strength and creating softer texture. It should be added carefully and in moderation to avoid compromising structure.",
                  "es": "El alcohol puede interferir con interacciones almidón-agua, potencialmente reduciendo fuerza del gel y creando textura más suave. Debe agregarse cuidadosamente y con moderación para evitar comprometer la estructura.",
                  "de": "Alkohol kann Stärke-Wasser-Wechselwirkungen stören, möglicherweise Gelstärke reduzieren und weichere Textur erzeugen. Er sollte vorsichtig und in Maßen hinzugefügt werden, um Strukturkompromisse zu vermeiden.",
                  "nl": "Alcohol kan zetmeel-water interacties verstoren, mogelijk gelsterkte verminderen en zachtere textuur creëren. Het moet voorzichtig en met mate worden toegevoegd om structuurcompromissen te vermijden."
        }
      },
      {
        question: {
                  "en": "What role does lecithin play when added to pudding formulations?",
                  "es": "¿Qué papel juega la lecitina cuando se agrega a las formulaciones de pudding?",
                  "de": "Welche Rolle spielt Lecithin, wenn es zu Puddingformulierungen hinzugefügt wird?",
                  "nl": "Welke rol speelt lecithine wanneer het wordt toegevoegd aan pudding formuleringen?"
        },
        options: [
        {
                  "en": "Improves color development",
                  "es": "Mejora el desarrollo del color",
                  "de": "Verbessert die Farbentwicklung",
                  "nl": "Verbetert kleurontwikkeling"
        },
        {
                  "en": "Provides additional sweetness",
                  "es": "Proporciona dulzura adicional",
                  "de": "Bietet zusätzliche Süße",
                  "nl": "Biedt extra zoetheid"
        },
        {
                  "en": "Acts as a thickening agent",
                  "es": "Actúa como agente espesante",
                  "de": "Wirkt als Verdickungsmittel",
                  "nl": "Werkt als verdikkingsmiddel"
        },
        {
                  "en": "Acts as a natural emulsifier and stabilizer",
                  "es": "Actúa como emulsificante natural y estabilizador",
                  "de": "Wirkt als natürlicher Emulgator und Stabilisator",
                  "nl": "Werkt als natuurlijke emulgator en stabilisator"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Lecithin acts as a natural emulsifier, helping to stabilize the mixture and create smoother texture by improving the binding between fat and water-based components.",
                  "es": "La lecitina actúa como emulsificante natural, ayudando a estabilizar la mezcla y crear textura más suave mejorando la unión entre componentes grasos y a base de agua.",
                  "de": "Lecithin wirkt als natürlicher Emulgator und hilft, die Mischung zu stabilisieren und glattere Textur zu erzeugen, indem es die Bindung zwischen fett- und wasserbasierten Komponenten verbessert.",
                  "nl": "Lecithine werkt als natuurlijke emulgator, helpt het mengsel te stabiliseren en creëert gladdere textuur door de binding tussen vet- en watergebaseerde componenten te verbeteren."
        }
      },
      {
        question: {
                  "en": "How does the choice of cooking vessel material affect pudding preparation and heat distribution?",
                  "es": "¿Cómo afecta la elección del material del recipiente de cocción la preparación del pudding y distribución del calor?",
                  "de": "Wie beeinflusst die Wahl des Kochgefäßmaterials die Puddingzubereitung und Wärmeverteilung?",
                  "nl": "Hoe beïnvloedt de keuze van kookpan materiaal de pudding bereiding en warmteverdeling?"
        },
        options: [
        {
                  "en": "Glass is the only suitable material",
                  "es": "El vidrio es el único material adecuado",
                  "de": "Glas ist das einzig geeignete Material",
                  "nl": "Glas is het enige geschikte materiaal"
        },
        {
                  "en": "Aluminum always produces the best results",
                  "es": "El aluminio siempre produce los mejores resultados",
                  "de": "Aluminium produziert immer die besten Ergebnisse",
                  "nl": "Aluminium produceert altijd de beste resultaten"
        },
        {
                  "en": "Material choice has no impact on cooking results",
                  "es": "La elección del material no tiene impacto en los resultados de cocción",
                  "de": "Materialwahl hat keinen Einfluss auf Kochergebnisse",
                  "nl": "Materiaalkeuze heeft geen impact op kookresultaten"
        },
        {
                  "en": "Heavy-bottomed stainless steel provides even heat distribution and prevents scorching",
                  "es": "Acero inoxidable de fondo grueso proporciona distribución uniforme del calor y previene quemado",
                  "de": "Edelstahl mit schwerem Boden bietet gleichmäßige Wärmeverteilung und verhindert Anbrennen",
                  "nl": "Zwaarbodem roestvrij staal biedt gelijkmatige warmteverdeling en voorkomt aanbranden"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Heavy-bottomed stainless steel pans provide excellent, even heat distribution and prevent hot spots that could cause scorching or uneven cooking of delicate pudding mixtures.",
                  "es": "Las ollas de acero inoxidable de fondo grueso proporcionan excelente distribución uniforme del calor y previenen puntos calientes que podrían causar quemado o cocción desigual de mezclas delicadas de pudding.",
                  "de": "Edelstahlpfannen mit schwerem Boden bieten ausgezeichnete, gleichmäßige Wärmeverteilung und verhindern heiße Stellen, die Anbrennen oder ungleichmäßiges Kochen empfindlicher Puddingmischungen verursachen könnten.",
                  "nl": "Zwaarbodem roestvrij stalen pannen bieden uitstekende, gelijkmatige warmteverdeling en voorkomen hete plekken die verbranding of ongelijkmatig koken van delicate pudding mengsels zouden kunnen veroorzaken."
        }
      },
      {
        question: {
                  "en": "What is the most common liquid used in rice pudding?",
                  "es": "¿Cuál es el líquido más común usado en el arroz con leche?",
                  "de": "Was ist die häufigste Flüssigkeit, die in Reispudding verwendet wird?",
                  "nl": "Wat is de meest gebruikte vloeistof in rijstpudding?"
        },
        options: [
        {
                  "en": "Coconut milk",
                  "es": "Leche de coco",
                  "de": "Kokosmilch",
                  "nl": "Kokosmelk"
        },
        {
                  "en": "Water",
                  "es": "Agua",
                  "de": "Wasser",
                  "nl": "Water"
        },
        {
                  "en": "Cream",
                  "es": "Crema",
                  "de": "Sahne",
                  "nl": "Room"
        },
        {
                  "en": "Milk",
                  "es": "Leche",
                  "de": "Milch",
                  "nl": "Melk"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Milk is the traditional and most common liquid used in rice pudding, providing the creamy texture and rich flavor that defines this classic dessert.",
                  "es": "La leche es el líquido tradicional y más común usado en el arroz con leche, proporcionando la textura cremosa y el sabor rico que define este postre clásico.",
                  "de": "Milch ist die traditionelle und häufigste Flüssigkeit für Reispudding und sorgt für die cremige Textur und den reichen Geschmack dieses klassischen Desserts.",
                  "nl": "Melk is de traditionele en meest gebruikte vloeistof in rijstpudding, die de romige textuur en rijke smaak levert die dit klassieke dessert definieert."
        }
      },
      {
        question: {
                  "en": "What is the British definition of pudding?",
                  "es": "What is the British definition of pudding?",
                  "de": "What is the British definition of pudding?",
                  "nl": "What is the British definition of pudding?"
        },
        options: [
        {
                  "en": "Only steamed desserts",
                  "es": "Only steamed desserts",
                  "de": "Only steamed desserts",
                  "nl": "Only steamed desserts"
        },
        {
                  "en": "Only custard-based desserts",
                  "es": "Only custard-based desserts",
                  "de": "Only custard-based desserts",
                  "nl": "Only custard-based desserts"
        },
        {
                  "en": "Only chocolate desserts",
                  "es": "Only chocolate desserts",
                  "de": "Only chocolate desserts",
                  "nl": "Only chocolate desserts"
        },
        {
                  "en": "Any dessert or sweet course",
                  "es": "Any dessert or sweet course",
                  "de": "Any dessert or sweet course",
                  "nl": "Any dessert or sweet course"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "In British English, 'pudding' refers broadly to any dessert or the dessert course of a meal.",
                  "es": "In British English, 'pudding' refers broadly to any dessert or the dessert course of a meal.",
                  "de": "In British English, 'pudding' refers broadly to any dessert or the dessert course of a meal.",
                  "nl": "In British English, 'pudding' refers broadly to any dessert or the dessert course of a meal."
        }
      },
      {
        question: {
                  "en": "What is bread pudding?",
                  "es": "What is bread pudding?",
                  "de": "What is bread pudding?",
                  "nl": "What is bread pudding?"
        },
        options: [
        {
                  "en": "Bread-shaped pudding",
                  "es": "Bread-shaped pudding",
                  "de": "Bread-shaped pudding",
                  "nl": "Bread-shaped pudding"
        },
        {
                  "en": "Pudding with bread topping",
                  "es": "Pudding with bread topping",
                  "de": "Pudding with bread topping",
                  "nl": "Pudding with bread topping"
        },
        {
                  "en": "Bread-flavored pudding",
                  "es": "Bread-flavored pudding",
                  "de": "Bread-flavored pudding",
                  "nl": "Bread-flavored pudding"
        },
        {
                  "en": "Dessert made from stale bread, milk, eggs, and sugar",
                  "es": "Dessert made from stale bread, milk, eggs, and sugar",
                  "de": "Dessert made from stale bread, milk, eggs, and sugar",
                  "nl": "Dessert made from stale bread, milk, eggs, and sugar"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Bread pudding is made by baking stale bread soaked in a mixture of milk, eggs, sugar, and often spices.",
                  "es": "Bread pudding is made by baking stale bread soaked in a mixture of milk, eggs, sugar, and often spices.",
                  "de": "Bread pudding is made by baking stale bread soaked in a mixture of milk, eggs, sugar, and often spices.",
                  "nl": "Bread pudding is made by baking stale bread soaked in a mixture of milk, eggs, sugar, and often spices."
        }
      },
      {
        question: {
                  "en": "What is rice pudding?",
                  "es": "What is rice pudding?",
                  "de": "What is rice pudding?",
                  "nl": "What is rice pudding?"
        },
        options: [
        {
                  "en": "Rice-shaped pudding",
                  "es": "Rice-shaped pudding",
                  "de": "Rice-shaped pudding",
                  "nl": "Rice-shaped pudding"
        },
        {
                  "en": "Rice cooked in milk and sugar",
                  "es": "Rice cooked in milk and sugar",
                  "de": "Rice cooked in milk and sugar",
                  "nl": "Rice cooked in milk and sugar"
        },
        {
                  "en": "Rice-flavored gelatin",
                  "es": "Rice-flavored gelatin",
                  "de": "Rice-flavored gelatin",
                  "nl": "Rice-flavored gelatin"
        },
        {
                  "en": "Pudding with rice topping",
                  "es": "Pudding with rice topping",
                  "de": "Pudding with rice topping",
                  "nl": "Pudding with rice topping"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Rice pudding is made by slowly cooking rice in milk with sugar, creating a creamy dessert.",
                  "es": "Rice pudding is made by slowly cooking rice in milk with sugar, creating a creamy dessert.",
                  "de": "Rice pudding is made by slowly cooking rice in milk with sugar, creating a creamy dessert.",
                  "nl": "Rice pudding is made by slowly cooking rice in milk with sugar, creating a creamy dessert."
        }
      },
      {
        question: {
                  "en": "What is a steamed pudding?",
                  "es": "What is a steamed pudding?",
                  "de": "What is a steamed pudding?",
                  "nl": "What is a steamed pudding?"
        },
        options: [
        {
                  "en": "Pudding cooked by steaming rather than baking",
                  "es": "Pudding cooked by steaming rather than baking",
                  "de": "Pudding cooked by steaming rather than baking",
                  "nl": "Pudding cooked by steaming rather than baking"
        },
        {
                  "en": "Pudding served with steam",
                  "es": "Pudding served with steam",
                  "de": "Pudding served with steam",
                  "nl": "Pudding served with steam"
        },
        {
                  "en": "Hot pudding",
                  "es": "Hot pudding",
                  "de": "Hot pudding",
                  "nl": "Hot pudding"
        },
        {
                  "en": "Pudding made with steam",
                  "es": "Pudding made with steam",
                  "de": "Pudding made with steam",
                  "nl": "Pudding made with steam"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Steamed pudding is cooked by steaming in a covered mold rather than baking, creating a moist, dense texture.",
                  "es": "Steamed pudding is cooked by steaming in a covered mold rather than baking, creating a moist, dense texture.",
                  "de": "Steamed pudding is cooked by steaming in a covered mold rather than baking, creating a moist, dense texture.",
                  "nl": "Steamed pudding is cooked by steaming in a covered mold rather than baking, creating a moist, dense texture."
        }
      },
      {
        question: {
                  "en": "What is tapioca pudding?",
                  "es": "What is tapioca pudding?",
                  "de": "What is tapioca pudding?",
                  "nl": "What is tapioca pudding?"
        },
        options: [
        {
                  "en": "Tea-flavored pudding",
                  "es": "Tea-flavored pudding",
                  "de": "Tea-flavored pudding",
                  "nl": "Tea-flavored pudding"
        },
        {
                  "en": "Rice pudding",
                  "es": "Rice pudding",
                  "de": "Rice pudding",
                  "nl": "Rice pudding"
        },
        {
                  "en": "Pudding made with tapioca pearls",
                  "es": "Pudding made with tapioca pearls",
                  "de": "Pudding made with tapioca pearls",
                  "nl": "Pudding made with tapioca pearls"
        },
        {
                  "en": "Tropical fruit pudding",
                  "es": "Tropical fruit pudding",
                  "de": "Tropical fruit pudding",
                  "nl": "Tropical fruit pudding"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Tapioca pudding is made by cooking tapioca pearls in milk with sugar, creating a pudding with distinctive chewy pearls.",
                  "es": "Tapioca pudding is made by cooking tapioca pearls in milk with sugar, creating a pudding with distinctive chewy pearls.",
                  "de": "Tapioca pudding is made by cooking tapioca pearls in milk with sugar, creating a pudding with distinctive chewy pearls.",
                  "nl": "Tapioca pudding is made by cooking tapioca pearls in milk with sugar, creating a pudding with distinctive chewy pearls."
        }
      },
      {
        question: {
                  "en": "What is Christmas pudding?",
                  "es": "What is Christmas pudding?",
                  "de": "What is Christmas pudding?",
                  "nl": "What is Christmas pudding?"
        },
        options: [
        {
                  "en": "British steamed fruit pudding",
                  "es": "British steamed fruit pudding",
                  "de": "British steamed fruit pudding",
                  "nl": "British steamed fruit pudding"
        },
        {
                  "en": "Vanilla pudding",
                  "es": "Vanilla pudding",
                  "de": "Vanilla pudding",
                  "nl": "Vanilla pudding"
        },
        {
                  "en": "Chocolate pudding",
                  "es": "Chocolate pudding",
                  "de": "Chocolate pudding",
                  "nl": "Chocolate pudding"
        },
        {
                  "en": "Ice cream pudding",
                  "es": "Ice cream pudding",
                  "de": "Ice cream pudding",
                  "nl": "Ice cream pudding"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Christmas pudding is a traditional British steamed pudding made with dried fruits, spices, and often alcohol.",
                  "es": "Christmas pudding is a traditional British steamed pudding made with dried fruits, spices, and often alcohol.",
                  "de": "Christmas pudding is a traditional British steamed pudding made with dried fruits, spices, and often alcohol.",
                  "nl": "Christmas pudding is a traditional British steamed pudding made with dried fruits, spices, and often alcohol."
        }
      },
      {
        question: {
                  "en": "What is figgy pudding?",
                  "es": "What is figgy pudding?",
                  "de": "What is figgy pudding?",
                  "nl": "What is figgy pudding?"
        },
        options: [
        {
                  "en": "Pudding topped with figs",
                  "es": "Pudding topped with figs",
                  "de": "Pudding topped with figs",
                  "nl": "Pudding topped with figs"
        },
        {
                  "en": "Fig-shaped pudding",
                  "es": "Fig-shaped pudding",
                  "de": "Fig-shaped pudding",
                  "nl": "Fig-shaped pudding"
        },
        {
                  "en": "Fig-flavored ice cream",
                  "es": "Fig-flavored ice cream",
                  "de": "Fig-flavored ice cream",
                  "nl": "Fig-flavored ice cream"
        },
        {
                  "en": "Steamed pudding with figs or dried fruit",
                  "es": "Steamed pudding with figs or dried fruit",
                  "de": "Steamed pudding with figs or dried fruit",
                  "nl": "Steamed pudding with figs or dried fruit"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Figgy pudding is a steamed British pudding traditionally made with figs or other dried fruits.",
                  "es": "Figgy pudding is a steamed British pudding traditionally made with figs or other dried fruits.",
                  "de": "Figgy pudding is a steamed British pudding traditionally made with figs or other dried fruits.",
                  "nl": "Figgy pudding is a steamed British pudding traditionally made with figs or other dried fruits."
        }
      },
      {
        question: {
                  "en": "What is semolina pudding?",
                  "es": "What is semolina pudding?",
                  "de": "What is semolina pudding?",
                  "nl": "What is semolina pudding?"
        },
        options: [
        {
                  "en": "Pudding with semolina topping",
                  "es": "Pudding with semolina topping",
                  "de": "Pudding with semolina topping",
                  "nl": "Pudding with semolina topping"
        },
        {
                  "en": "Pudding made from semolina flour cooked in milk",
                  "es": "Pudding made from semolina flour cooked in milk",
                  "de": "Pudding made from semolina flour cooked in milk",
                  "nl": "Pudding made from semolina flour cooked in milk"
        },
        {
                  "en": "Rice pudding",
                  "es": "Rice pudding",
                  "de": "Rice pudding",
                  "nl": "Rice pudding"
        },
        {
                  "en": "Chocolate pudding",
                  "es": "Chocolate pudding",
                  "de": "Chocolate pudding",
                  "nl": "Chocolate pudding"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Semolina pudding is made by cooking semolina flour in milk with sugar until thick and creamy.",
                  "es": "Semolina pudding is made by cooking semolina flour in milk with sugar until thick and creamy.",
                  "de": "Semolina pudding is made by cooking semolina flour in milk with sugar until thick and creamy.",
                  "nl": "Semolina pudding is made by cooking semolina flour in milk with sugar until thick and creamy."
        }
      },
      {
        question: {
                  "en": "What is hasty pudding?",
                  "es": "What is hasty pudding?",
                  "de": "What is hasty pudding?",
                  "nl": "What is hasty pudding?"
        },
        options: [
        {
                  "en": "Fast-setting gelatin",
                  "es": "Fast-setting gelatin",
                  "de": "Fast-setting gelatin",
                  "nl": "Fast-setting gelatin"
        },
        {
                  "en": "Quick-cooked porridge-like pudding",
                  "es": "Quick-cooked porridge-like pudding",
                  "de": "Quick-cooked porridge-like pudding",
                  "nl": "Quick-cooked porridge-like pudding"
        },
        {
                  "en": "Instant pudding",
                  "es": "Instant pudding",
                  "de": "Instant pudding",
                  "nl": "Instant pudding"
        },
        {
                  "en": "Rushed dessert",
                  "es": "Rushed dessert",
                  "de": "Rushed dessert",
                  "nl": "Rushed dessert"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Hasty pudding is a simple, quick-cooked pudding made from grain (cornmeal or flour) cooked in milk or water.",
                  "es": "Hasty pudding is a simple, quick-cooked pudding made from grain (cornmeal or flour) cooked in milk or water.",
                  "de": "Hasty pudding is a simple, quick-cooked pudding made from grain (cornmeal or flour) cooked in milk or water.",
                  "nl": "Hasty pudding is a simple, quick-cooked pudding made from grain (cornmeal or flour) cooked in milk or water."
        }
      },
      {
        question: {
                  "en": "What is syllabub?",
                  "es": "What is syllabub?",
                  "de": "What is syllabub?",
                  "nl": "What is syllabub?"
        },
        options: [
        {
                  "en": "Chocolate pudding",
                  "es": "Chocolate pudding",
                  "de": "Chocolate pudding",
                  "nl": "Chocolate pudding"
        },
        {
                  "en": "British whipped cream and wine dessert",
                  "es": "British whipped cream and wine dessert",
                  "de": "British whipped cream and wine dessert",
                  "nl": "British whipped cream and wine dessert"
        },
        {
                  "en": "Rice pudding",
                  "es": "Rice pudding",
                  "de": "Rice pudding",
                  "nl": "Rice pudding"
        },
        {
                  "en": "Bread pudding",
                  "es": "Bread pudding",
                  "de": "Bread pudding",
                  "nl": "Bread pudding"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Syllabub is a traditional British dessert made from whipped cream mixed with wine or cider and sugar.",
                  "es": "Syllabub is a traditional British dessert made from whipped cream mixed with wine or cider and sugar.",
                  "de": "Syllabub is a traditional British dessert made from whipped cream mixed with wine or cider and sugar.",
                  "nl": "Syllabub is a traditional British dessert made from whipped cream mixed with wine or cider and sugar."
        }
      },
      {
        question: {
                  "en": "What is spotted dick?",
                  "es": "What is spotted dick?",
                  "de": "What is spotted dick?",
                  "nl": "What is spotted dick?"
        },
        options: [
        {
                  "en": "British steamed pudding with currants",
                  "es": "British steamed pudding with currants",
                  "de": "British steamed pudding with currants",
                  "nl": "British steamed pudding with currants"
        },
        {
                  "en": "Pudding with sauce",
                  "es": "Pudding with sauce",
                  "de": "Pudding with sauce",
                  "nl": "Pudding with sauce"
        },
        {
                  "en": "Fruit-topped pudding",
                  "es": "Fruit-topped pudding",
                  "de": "Fruit-topped pudding",
                  "nl": "Fruit-topped pudding"
        },
        {
                  "en": "Chocolate chip pudding",
                  "es": "Chocolate chip pudding",
                  "de": "Chocolate chip pudding",
                  "nl": "Chocolate chip pudding"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Spotted dick is a traditional British steamed pudding made with suet and dried currants, which appear as 'spots'.",
                  "es": "Spotted dick is a traditional British steamed pudding made with suet and dried currants, which appear as 'spots'.",
                  "de": "Spotted dick is a traditional British steamed pudding made with suet and dried currants, which appear as 'spots'.",
                  "nl": "Spotted dick is a traditional British steamed pudding made with suet and dried currants, which appear as 'spots'."
        }
      },
      {
        question: {
                  "en": "What is Indian pudding?",
                  "es": "What is Indian pudding?",
                  "de": "What is Indian pudding?",
                  "nl": "What is Indian pudding?"
        },
        options: [
        {
                  "en": "American cornmeal and molasses pudding",
                  "es": "American cornmeal and molasses pudding",
                  "de": "American cornmeal and molasses pudding",
                  "nl": "American cornmeal and molasses pudding"
        },
        {
                  "en": "Spiced rice pudding",
                  "es": "Spiced rice pudding",
                  "de": "Spiced rice pudding",
                  "nl": "Spiced rice pudding"
        },
        {
                  "en": "Pudding from India",
                  "es": "Pudding from India",
                  "de": "Pudding from India",
                  "nl": "Pudding from India"
        },
        {
                  "en": "Tapioca pudding",
                  "es": "Tapioca pudding",
                  "de": "Tapioca pudding",
                  "nl": "Tapioca pudding"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Indian pudding is a traditional New England dessert made from cornmeal, molasses, and milk, baked slowly.",
                  "es": "Indian pudding is a traditional New England dessert made from cornmeal, molasses, and milk, baked slowly.",
                  "de": "Indian pudding is a traditional New England dessert made from cornmeal, molasses, and milk, baked slowly.",
                  "nl": "Indian pudding is a traditional New England dessert made from cornmeal, molasses, and milk, baked slowly."
        }
      },
      {
        question: {
                  "en": "What is butterscotch pudding?",
                  "es": "What is butterscotch pudding?",
                  "de": "What is butterscotch pudding?",
                  "nl": "What is butterscotch pudding?"
        },
        options: [
        {
                  "en": "Caramel pudding",
                  "es": "Caramel pudding",
                  "de": "Caramel pudding",
                  "nl": "Caramel pudding"
        },
        {
                  "en": "Pudding flavored with brown sugar and butter",
                  "es": "Pudding flavored with brown sugar and butter",
                  "de": "Pudding flavored with brown sugar and butter",
                  "nl": "Pudding flavored with brown sugar and butter"
        },
        {
                  "en": "Scotch whisky pudding",
                  "es": "Scotch whisky pudding",
                  "de": "Scotch whisky pudding",
                  "nl": "Scotch whisky pudding"
        },
        {
                  "en": "Pudding with butterscotch topping",
                  "es": "Pudding with butterscotch topping",
                  "de": "Pudding with butterscotch topping",
                  "nl": "Pudding with butterscotch topping"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Butterscotch pudding is flavored with brown sugar and butter, creating a rich, caramel-like flavor distinct from caramel.",
                  "es": "Butterscotch pudding is flavored with brown sugar and butter, creating a rich, caramel-like flavor distinct from caramel.",
                  "de": "Butterscotch pudding is flavored with brown sugar and butter, creating a rich, caramel-like flavor distinct from caramel.",
                  "nl": "Butterscotch pudding is flavored with brown sugar and butter, creating a rich, caramel-like flavor distinct from caramel."
        }
      },
      {
        question: {
                  "en": "What is the difference between pudding and custard?",
                  "es": "What is the difference between pudding and custard?",
                  "de": "What is the difference between pudding and custard?",
                  "nl": "What is the difference between pudding and custard?"
        },
        options: [
        {
                  "en": "Custard is baked",
                  "es": "Custard is baked",
                  "de": "Custard is baked",
                  "nl": "Custard is baked"
        },
        {
                  "en": "Pudding often uses starch; custard uses eggs",
                  "es": "Pudding often uses starch; custard uses eggs",
                  "de": "Pudding often uses starch; custard uses eggs",
                  "nl": "Pudding often uses starch; custard uses eggs"
        },
        {
                  "en": "Pudding is frozen",
                  "es": "Pudding is frozen",
                  "de": "Pudding is frozen",
                  "nl": "Pudding is frozen"
        },
        {
                  "en": "No difference",
                  "es": "No difference",
                  "de": "No difference",
                  "nl": "No difference"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "American pudding typically uses cornstarch as thickener, while custard is thickened primarily with eggs.",
                  "es": "American pudding typically uses cornstarch as thickener, while custard is thickened primarily with eggs.",
                  "de": "American pudding typically uses cornstarch as thickener, while custard is thickened primarily with eggs.",
                  "nl": "American pudding typically uses cornstarch as thickener, while custard is thickened primarily with eggs."
        }
      },
      {
        question: {
                  "en": "What is plum pudding?",
                  "es": "What is plum pudding?",
                  "de": "What is plum pudding?",
                  "nl": "What is plum pudding?"
        },
        options: [
        {
                  "en": "Plum-flavored gelatin",
                  "es": "Plum-flavored gelatin",
                  "de": "Plum-flavored gelatin",
                  "nl": "Plum-flavored gelatin"
        },
        {
                  "en": "Plum-shaped dessert",
                  "es": "Plum-shaped dessert",
                  "de": "Plum-shaped dessert",
                  "nl": "Plum-shaped dessert"
        },
        {
                  "en": "Pudding made with plums",
                  "es": "Pudding made with plums",
                  "de": "Pudding made with plums",
                  "nl": "Pudding made with plums"
        },
        {
                  "en": "Steamed fruit pudding (often no plums)",
                  "es": "Steamed fruit pudding (often no plums)",
                  "de": "Steamed fruit pudding (often no plums)",
                  "nl": "Steamed fruit pudding (often no plums)"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Plum pudding (now often called Christmas pudding) is a steamed fruit pudding that rarely contains actual plums - 'plum' referred to any dried fruit.",
                  "es": "Plum pudding (now often called Christmas pudding) is a steamed fruit pudding that rarely contains actual plums - 'plum' referred to any dried fruit.",
                  "de": "Plum pudding (now often called Christmas pudding) is a steamed fruit pudding that rarely contains actual plums - 'plum' referred to any dried fruit.",
                  "nl": "Plum pudding (now often called Christmas pudding) is a steamed fruit pudding that rarely contains actual plums - 'plum' referred to any dried fruit."
        }
      },
      {
        question: {
                  "en": "What is sago pudding?",
                  "es": "What is sago pudding?",
                  "de": "What is sago pudding?",
                  "nl": "What is sago pudding?"
        },
        options: [
        {
                  "en": "Tapioca pudding",
                  "es": "Tapioca pudding",
                  "de": "Tapioca pudding",
                  "nl": "Tapioca pudding"
        },
        {
                  "en": "Sage-flavored pudding",
                  "es": "Sage-flavored pudding",
                  "de": "Sage-flavored pudding",
                  "nl": "Sage-flavored pudding"
        },
        {
                  "en": "Pudding made with sago pearls",
                  "es": "Pudding made with sago pearls",
                  "de": "Pudding made with sago pearls",
                  "nl": "Pudding made with sago pearls"
        },
        {
                  "en": "Pudding from sago palm",
                  "es": "Pudding from sago palm",
                  "de": "Pudding from sago palm",
                  "nl": "Pudding from sago palm"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Sago pudding is made with sago pearls (from sago palm starch) cooked in milk, similar to tapioca pudding.",
                  "es": "Sago pudding is made with sago pearls (from sago palm starch) cooked in milk, similar to tapioca pudding.",
                  "de": "Sago pudding is made with sago pearls (from sago palm starch) cooked in milk, similar to tapioca pudding.",
                  "nl": "Sago pudding is made with sago pearls (from sago palm starch) cooked in milk, similar to tapioca pudding."
        }
      },
      {
        question: {
                  "en": "What is blancmange?",
                  "es": "What is blancmange?",
                  "de": "What is blancmange?",
                  "nl": "What is blancmange?"
        },
        options: [
        {
                  "en": "Coconut pudding",
                  "es": "Coconut pudding",
                  "de": "Coconut pudding",
                  "nl": "Coconut pudding"
        },
        {
                  "en": "Almond-flavored molded pudding",
                  "es": "Almond-flavored molded pudding",
                  "de": "Almond-flavored molded pudding",
                  "nl": "Almond-flavored molded pudding"
        },
        {
                  "en": "White chocolate pudding",
                  "es": "White chocolate pudding",
                  "de": "White chocolate pudding",
                  "nl": "White chocolate pudding"
        },
        {
                  "en": "French vanilla pudding",
                  "es": "French vanilla pudding",
                  "de": "French vanilla pudding",
                  "nl": "French vanilla pudding"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Blancmange is a sweet dessert made with milk, sugar, and gelatin or cornstarch, traditionally flavored with almonds.",
                  "es": "Blancmange is a sweet dessert made with milk, sugar, and gelatin or cornstarch, traditionally flavored with almonds.",
                  "de": "Blancmange is a sweet dessert made with milk, sugar, and gelatin or cornstarch, traditionally flavored with almonds.",
                  "nl": "Blancmange is a sweet dessert made with milk, sugar, and gelatin or cornstarch, traditionally flavored with almonds."
        }
      },
      {
        question: {
                  "en": "What is a trifle?",
                  "es": "What is a trifle?",
                  "de": "What is a trifle?",
                  "nl": "What is a trifle?"
        },
        options: [
        {
                  "en": "Chocolate pudding",
                  "es": "Chocolate pudding",
                  "de": "Chocolate pudding",
                  "nl": "Chocolate pudding"
        },
        {
                  "en": "Rice pudding",
                  "es": "Rice pudding",
                  "de": "Rice pudding",
                  "nl": "Rice pudding"
        },
        {
                  "en": "Bread pudding",
                  "es": "Bread pudding",
                  "de": "Bread pudding",
                  "nl": "Bread pudding"
        },
        {
                  "en": "Layered dessert with cake, custard, fruit, and cream",
                  "es": "Layered dessert with cake, custard, fruit, and cream",
                  "de": "Layered dessert with cake, custard, fruit, and cream",
                  "nl": "Layered dessert with cake, custard, fruit, and cream"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Trifle is a British layered dessert typically made with sponge cake, fruit, custard, and whipped cream in a glass bowl.",
                  "es": "Trifle is a British layered dessert typically made with sponge cake, fruit, custard, and whipped cream in a glass bowl.",
                  "de": "Trifle is a British layered dessert typically made with sponge cake, fruit, custard, and whipped cream in a glass bowl.",
                  "nl": "Trifle is a British layered dessert typically made with sponge cake, fruit, custard, and whipped cream in a glass bowl."
        }
      },
      {
        question: {
                  "en": "What is pease pudding?",
                  "es": "What is pease pudding?",
                  "de": "What is pease pudding?",
                  "nl": "What is pease pudding?"
        },
        options: [
        {
                  "en": "Sweet pea pudding",
                  "es": "Sweet pea pudding",
                  "de": "Sweet pea pudding",
                  "nl": "Sweet pea pudding"
        },
        {
                  "en": "Pea-shaped dessert",
                  "es": "Pea-shaped dessert",
                  "de": "Pea-shaped dessert",
                  "nl": "Pea-shaped dessert"
        },
        {
                  "en": "Savory split pea pudding (not a dessert)",
                  "es": "Savory split pea pudding (not a dessert)",
                  "de": "Savory split pea pudding (not a dessert)",
                  "nl": "Savory split pea pudding (not a dessert)"
        },
        {
                  "en": "Green pudding",
                  "es": "Green pudding",
                  "de": "Green pudding",
                  "nl": "Green pudding"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Pease pudding is actually a savory dish made from boiled split peas, traditionally served with ham - not a dessert.",
                  "es": "Pease pudding is actually a savory dish made from boiled split peas, traditionally served with ham - not a dessert.",
                  "de": "Pease pudding is actually a savory dish made from boiled split peas, traditionally served with ham - not a dessert.",
                  "nl": "Pease pudding is actually a savory dish made from boiled split peas, traditionally served with ham - not a dessert."
        }
      },
      {
        question: {
                  "en": "What causes skin on top of pudding?",
                  "es": "What causes skin on top of pudding?",
                  "de": "What causes skin on top of pudding?",
                  "nl": "What causes skin on top of pudding?"
        },
        options: [
        {
                  "en": "Wrong temperature",
                  "es": "Wrong temperature",
                  "de": "Wrong temperature",
                  "nl": "Wrong temperature"
        },
        {
                  "en": "Overcooking",
                  "es": "Overcooking",
                  "de": "Overcooking",
                  "nl": "Overcooking"
        },
        {
                  "en": "Too much sugar",
                  "es": "Too much sugar",
                  "de": "Too much sugar",
                  "nl": "Too much sugar"
        },
        {
                  "en": "Milk proteins drying on surface",
                  "es": "Milk proteins drying on surface",
                  "de": "Milk proteins drying on surface",
                  "nl": "Milk proteins drying on surface"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Skin forms when milk proteins dry on the pudding's surface; prevent it by covering with plastic wrap touching the surface.",
                  "es": "Skin forms when milk proteins dry on the pudding's surface; prevent it by covering with plastic wrap touching the surface.",
                  "de": "Skin forms when milk proteins dry on the pudding's surface; prevent it by covering with plastic wrap touching the surface.",
                  "nl": "Skin forms when milk proteins dry on the pudding's surface; prevent it by covering with plastic wrap touching the surface."
        }
      }
    ]
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level2;
  }
})();